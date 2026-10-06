/* PLEX PLAY 3.3.0 — Audio al instante en los juegos y en las lecciones
   Lo que fallaba
   - Un solo <audio> para toda la app: cada frase nueva cambiaba el src, esperaba los metadatos, buscaba el punto
     de inicio y, si el navegador no dejaba buscar, bajaba el archivo entero. La primera reproducción de cada reto
     llegaba tarde, y en el celular a veces no llegaba (play() fuera del gesto del usuario).
   - Las frases sin mp3 (una de cada cuatro en los juegos) iban a la voz del sistema: en Android las voces llegan
     después de la primera llamada (getVoices() vacío → «no hay voz francesa»), cancel() seguido de speak() se traga
     la frase, y Chrome a veces no arranca la primera.
   Lo nuevo
   - Las frases, palabras y dictados (archivos s-, sx-, sc-, sg-, z-, d-) se decodifican con Web Audio y se guardan
     en memoria: suenan al instante y los recortes (#inicio,fin) son exactos. Las lecturas largas de la teoría
     siguen por el reproductor de siempre (resaltado y «Escuchar la lección»).
   - Precarga: al empezar una partida se cargan los primeros retos y, mientras suena uno, los tres siguientes;
     al abrir una lección, sus dictados.
   - El AudioContext se despierta con el primer toque o tecla (iOS y Android lo exigen).
   - Voz del sistema: espera a las voces hasta 1,5 s, deja respirar a cancel(), llama a resume() y reintenta una
     vez si no arrancó. El aviso de «sin voz francesa» sale una sola vez.
   - Mapa de audio tolerante: la frase que arma un juego («Ma sœur est très petite .») encuentra su mp3 aunque
     difiera en espacios, apóstrofos o el punto final.
   3.9.0
   - stopAudio() también anula la frase que aún cargaba (antes sonaba 1-2 s después, ya en otra pantalla o encima
     de la grabación del micrófono), y el respaldo por <audio> o por la voz del sistema tampoco arranca tarde.
   - La música se baja mientras suena una frase, y el volumen de la barra de los juegos (plx-vol) también la afecta.
   - «Despacio» y las velocidades de Ajustes distintas de 1× van por el reproductor, que conserva el tono
     (playbackRate en Web Audio bajaba la voz casi una octava).
   - De las grabaciones largas (palabras de acentos, hasta 155 s) se guarda solo el tramo; caché limitada a ~30 MB.
   - Sin mp3, en la app de Android habla la voz nativa del teléfono (plx57) en lugar de avisar «sin voz francesa».
   - La precarga de la lección incluye pronunciación, elegir con audio y acentos. */
(function(){
  "use strict";
  if (typeof AUDIO === "undefined" || typeof speak !== "function" || typeof stopAudio !== "function") return;
  var A = window.PLXA = window.PLXA || {};

  /* ---------------- claves tolerantes ---------------- */
  var limpia = function(t){ return String(t == null ? "" : t).replace(/<[^>]+>/g, "").normalize("NFC").replace(/[’`´]/g, "'").replace(/[  ]/g, " ").replace(/\s+/g, " ").trim(); };
  var clave = function(t){ return limpia(t).toLowerCase().replace(/\s+([,.;:!?…])/g, "$1").replace(/[.!…]+$/, "").replace(/\s+/g, " ").trim(); };
  var IDX = null, IDXn = 0;
  var indexa = function(){
    var ks = Object.keys(AUDIO); if (IDX && ks.length === IDXn) return;
    IDX = {}; IDXn = ks.length;
    ks.forEach(function(k){ if (k.slice(0, 2) !== "s:") return; var c = clave(k.slice(2)); if (c && !IDX[c]) IDX[c] = AUDIO[k]; });
  };
  /* la ruta (con #inicio,fin) del audio de un texto, o null si no hay mp3 */
  A.spec = function(texto, lento){
    var t = limpia(texto); if (!t) return null;
    if (lento && AUDIO["z:" + t]) return AUDIO["z:" + t];
    if (AUDIO["s:" + t]) return AUDIO["s:" + t];
    indexa();
    return IDX[clave(t)] || null;
  };
  /* solo las frases y palabras cortas van por Web Audio; la teoría y las explicaciones, por el reproductor */
  var CORTO = /audio\/(s|z|sx|zx|sc|zc|sg|d|dx)-[^/]*\.mp3/;

  /* ---------------- Web Audio ---------------- */
  var AC = null, fuente = null, bufs = {}, orden = [], cargando = {}, tok = 0, listo = false, total = 0, grande = null, GAN = null;
  var ctx = function(){
    try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === "suspended") AC.resume(); } catch (e) { AC = null; }
    return AC;
  };
  var despierta = function(){
    var a = ctx(); if (!a) return;
    if (a.state === "suspended") a.resume();
    if (!listo) { listo = true; try { var b = a.createBuffer(1, 1, 22050), s = a.createBufferSource(); s.buffer = b; s.connect(a.destination); s.start(0); } catch (e) {} }
  };
  ["pointerdown", "touchend", "keydown"].forEach(function(ev){ document.addEventListener(ev, despierta, { capture: true, passive: true }); });
  A.despierta = despierta;

  var pesa = function(b){ return b ? b.length * b.numberOfChannels * 4 : 0; };
  var guarda = function(k, b){
    if (bufs[k]) return;
    bufs[k] = b; orden.push(k); total += pesa(b);
    while (orden.length > 1 && (orden.length > 80 || total > 30 * 1048576)) { var v = orden.shift(); if (v === k) { orden.push(v); continue; } total -= pesa(bufs[v]); delete bufs[v]; }
  };
  /* el tramo [a, b] de un buffer, en uno pequeño */
  var recorta = function(ac, buf, a, b){
    var sr = buf.sampleRate, i0 = Math.max(0, Math.floor(a * sr)), i1 = Math.min(buf.length, Math.ceil((b != null ? b : buf.duration) * sr)), n = Math.max(1, i1 - i0);
    var o = ac.createBuffer(buf.numberOfChannels, n, sr);
    for (var c = 0; c < buf.numberOfChannels; c++) { var d = buf.getChannelData(c).subarray(i0, i0 + n); if (o.copyToChannel) o.copyToChannel(d, c); else o.getChannelData(c).set(d); }
    return o;
  };
  /* volumen de la barra de los juegos (plx-vol, lo guarda plx59) y música más baja mientras suena la frase */
  var volumen = function(){ var v = 1; try { v = +(localStorage.getItem("plx-vol") || 1); } catch (e) {} return v >= 0 && v <= 1 ? v : 1; };
  var salida = function(ac){ if (!GAN || GAN.context !== ac) { GAN = ac.createGain(); GAN.connect(ac.destination); } GAN.gain.value = volumen(); return GAN; };
  A.vol = function(v){ if (GAN && v >= 0 && v <= 1) GAN.gain.value = v; };
  var bajaMusica = function(si){ try { if (typeof MUSIC !== "undefined" && MUSIC.quiet) MUSIC.quiet("voz", si ? .15 : null); } catch (e) {} };
  var carga = function(src){
    var abs = new URL(src, location.href).href;
    if (bufs[abs]) return Promise.resolve(bufs[abs]);
    if (grande && grande.abs === abs) return Promise.resolve(grande.b);
    if (cargando[abs]) return cargando[abs];
    var a = ctx(); if (!a) return Promise.reject(new Error("sin AudioContext"));
    return cargando[abs] = fetch(abs).then(function(r){ if (!r.ok) throw new Error("http " + r.status); return r.arrayBuffer(); })
      .then(function(ab){ return new Promise(function(res, rej){ try { var p = a.decodeAudioData(ab, res, rej); if (p && p.then) p.then(res, rej); } catch (e) { rej(e); } }); })
      .then(function(b){ delete cargando[abs]; if (b.duration > 30) grande = { abs: abs, b: b }; else guarda(abs, b); return b; }, function(e){ delete cargando[abs]; throw e; });
  };
  var para = function(){ if (fuente) { var f = fuente; fuente = null; try { f.onended = null; f.stop(); } catch (e) {} } };
  /* toca una ruta (con o sin recorte); resuelve al terminar, rechaza si no se pudo */
  A.toca = function(spec, rate){
    var mio = ++tok, p = String(spec).split("#"), src = p[0], a = 0, b = null;
    if (p[1]) { var r = p[1].split(",").map(Number); a = r[0] || 0; b = isNaN(r[1]) ? null : r[1]; }
    para();
    var kR = p[1] ? new URL(src, location.href).href + "#" + p[1] : null;
    var pr = kR && bufs[kR] ? Promise.resolve(bufs[kR]) : carga(src).then(function(buf){
      /* de una grabación larga solo se guarda el tramo (el buffer entero de 155 s pesaba 28 MB) */
      if (kR && buf.duration > 30) { var ac0 = ctx(); if (ac0) { var sub = recorta(ac0, buf, a, b); guarda(kR, sub); return sub; } }
      return buf;
    });
    return pr.then(function(buf){
      if (mio !== tok) return;
      var ac = ctx(); if (!ac) throw new Error("sin audio");
      if (ac.state === "suspended") ac.resume();
      var tramo = !!(kR && bufs[kR] === buf);
      var s = ac.createBufferSource(); s.buffer = buf;
      s.playbackRate.value = (rate || 1) * (typeof SPEED === "number" && SPEED > 0 ? SPEED : 1);
      s.connect(salida(ac)); fuente = s; bajaMusica(true);
      return new Promise(function(res){
        s.onended = function(){ if (fuente === s) { fuente = null; bajaMusica(false); } res(); };
        var a1 = tramo ? 0 : a, dur = !tramo && b != null ? Math.max(.05, b - a) : undefined;
        try { s.start(0, a1, dur); } catch (e) { try { s.start(0); } catch (x) { res(); } }
      });
    }, function(e){ if (mio === tok) bajaMusica(false); throw e; });
  };
  A.precarga = function(textos){
    var n = 0;
    (textos || []).forEach(function(t){
      if (!t || n >= 12) return;
      var spec = A.spec(t, false); if (!spec || !CORTO.test(spec) || /audio\/sg-/.test(spec) || !ctx()) return;   /* sg: grabaciones largas, solo al tocar */
      n++; carga(spec.split("#")[0]).catch(function(){});
    });
  };

  /* ---------------- voz del sistema, con paciencia ---------------- */
  var avisado = false, hablando = null;
  var avisa = function(){
    if (avisado) return; avisado = true;
    var enApp = /PlexPlayAndroid|; wv\)/.test(navigator.userAgent);
    try { toast(/Android/i.test(navigator.userAgent) ? "Este teléfono no tiene voz en francés: instala «Síntesis de voz de Google» en Play Store" + (enApp ? "." : " o usa la app de Android.") : "Este navegador no tiene ninguna voz en francés: algunas frases no podrán sonar."); } catch (e) {}
  };
  var esperaVoces = function(ms){
    return new Promise(function(res){
      try { if (speechSynthesis.getVoices().length) return res(); } catch (e) { return res(); }
      var t = setTimeout(res, ms);
      try { speechSynthesis.addEventListener("voiceschanged", function(){ clearTimeout(t); res(); }, { once: true }); } catch (e) {}
    });
  };
  var habla = function(text, slow){
    try { speechSynthesis.cancel(); } catch (e) {}
    var u = new SpeechSynthesisUtterance(limpia(text));
    u.lang = frVoice.lang; u.voice = frVoice; u.rate = (slow ? .65 : .95) * (typeof SPEED === "number" && SPEED > 0 ? SPEED : 1);
    var empezo = false; u.onstart = function(){ empezo = true; }; u.onend = u.onerror = function(){ if (hablando === u) hablando = null; };
    hablando = u;
    setTimeout(function(){
      if (hablando !== u) return;
      try { speechSynthesis.resume(); speechSynthesis.speak(u); } catch (e) {}
      setTimeout(function(){ if (hablando === u && !empezo && !speechSynthesis.speaking) { try { speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} } }, 1500);
    }, 40);
  };
  if (typeof deviceSpeak === "function" && typeof synth !== "undefined") {
    var dsPrev = deviceSpeak;   /* la de plx57: voz nativa de la app de Android y filtro de textos en español */
    deviceSpeak = function(text, slow){
      /* la WebView de Android no trae voces para speechSynthesis: la app ofrece la del teléfono por su puente */
      try { if (window.PlexAndroid && PlexAndroid.ttsAvailable && PlexAndroid.ttsAvailable()) return dsPrev.apply(this, arguments); } catch (e) {}
      if (!synth || !text) { avisa(); return false; }
      if (!frVoice) { try { pickVoice(); } catch (e) {} }
      if (frVoice) { habla(text, slow); return true; }
      var mio = tok;   /* si se corta mientras llegan las voces, ya no habla */
      esperaVoces(1500).then(function(){ if (mio !== tok) return; try { pickVoice(); } catch (e) {} if (frVoice) habla(text, slow); else avisa(); });
      return true;
    };
  }

  /* ---------------- speak() y stopAudio() de la app ---------------- */
  var speakO = speak, stopO = stopAudio;
  /* tok++ anula también la frase que todavía se está bajando o decodificando */
  stopAudio = function(){ tok++; para(); bajaMusica(false); hablando = null; return stopO.apply(this, arguments); };
  var siguientes = function(t){   /* mientras suena un reto, se cargan los tres que vienen */
    var L = A.ultimos; if (!L || !L.length) return;
    var c = clave(t), i = -1;
    for (var k = 0; k < L.length; k++) { if (L[k] && L[k].audio && clave(L[k].audio) === c) { i = k; break; } }
    if (i >= 0) A.precarga(L.slice(i + 1, i + 4).map(function(x){ return x.audio; }));
  };
  speak = function(text, rate){
    var slow = !!(rate && rate < .9), t = limpia(text);
    var spec = A.spec(t, slow);
    if (!spec) return speakO.apply(this, arguments);
    var r = slow ? (AUDIO["z:" + t] === spec ? 1 : .7) : 1;
    try { stopO(); } catch (e) {}
    try { if (typeof playToken === "number") playToken++; } catch (e) {}
    siguientes(t);
    var ef = r * (typeof SPEED === "number" && SPEED > 0 ? SPEED : 1);   /* a otra velocidad, el reproductor conserva el tono */
    if (CORTO.test(spec) && ef === 1 && ctx()) {
      var p = A.toca(spec, r), mio = tok;
      p.catch(function(){ if (mio === tok) try { playSpec(spec, null, r); } catch (e) {} });   /* si no se pudo decodificar, por el camino de siempre (salvo que ya se cortó) */
      return p;
    }
    try { playSpec(spec, null, r); } catch (e) { return speakO.apply(this, arguments); }
    return true;
  };

  /* ---------------- precarga: Arcade y lecciones ---------------- */
  if (window.PLXG && PLXG.sesion && PLXG.retosJuego) {
    var G = PLXG, sesO = G.sesion, rjO = G.retosJuego, enSesion = false;
    G.retosJuego = function(){
      var r = rjO.apply(this, arguments);
      if (enSesion && r && r.length) { A.ultimos = r; A.precarga(r.slice(0, 8).map(function(x){ return x.audio; })); }
      return r;
    };
    G.sesion = function(el, alc, juego, acciones, opc){
      enSesion = true; despierta();
      try { if (opc && opc.retos && opc.retos.length) { A.ultimos = opc.retos; A.precarga(opc.retos.slice(0, 8).map(function(x){ return x.audio; })); } return sesO.apply(this, arguments); }
      finally { enSesion = false; }
    };
  }
  if (typeof start === "function" && typeof getItem === "function") {
    var startO = start;
    start = function(o){
      try {
        var says = [];
        (o && o.steps || []).forEach(function(s){
          if (!s.key || says.length >= 10) return; var it = getItem(s.key); if (!it) return;
          var t = it.k === "listen" || it.k === "speak" || it.k === "choice" ? it.say : it.k === "accent" ? it.w : null;
          if (t) says.push(t);
        });
        A.ultimos = null; A.precarga(says);
      } catch (e) {}
      return startO.apply(this, arguments);
    };
  }
})();
