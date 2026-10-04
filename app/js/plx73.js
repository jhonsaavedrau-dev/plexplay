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
     difiera en espacios, apóstrofos o el punto final. */
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
  var AC = null, fuente = null, bufs = {}, orden = [], cargando = {}, tok = 0, listo = false;
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

  var guarda = function(abs, b){
    bufs[abs] = b; orden.push(abs);
    while (orden.length > 80) { var v = orden.shift(); if (v !== abs) delete bufs[v]; }
  };
  var carga = function(src){
    var abs = new URL(src, location.href).href;
    if (bufs[abs]) return Promise.resolve(bufs[abs]);
    if (cargando[abs]) return cargando[abs];
    var a = ctx(); if (!a) return Promise.reject(new Error("sin AudioContext"));
    return cargando[abs] = fetch(abs).then(function(r){ if (!r.ok) throw new Error("http " + r.status); return r.arrayBuffer(); })
      .then(function(ab){ return new Promise(function(res, rej){ try { var p = a.decodeAudioData(ab, res, rej); if (p && p.then) p.then(res, rej); } catch (e) { rej(e); } }); })
      .then(function(b){ delete cargando[abs]; guarda(abs, b); return b; }, function(e){ delete cargando[abs]; throw e; });
  };
  var para = function(){ if (fuente) { var f = fuente; fuente = null; try { f.onended = null; f.stop(); } catch (e) {} } };
  /* toca una ruta (con o sin recorte); resuelve al terminar, rechaza si no se pudo */
  A.toca = function(spec, rate){
    var mio = ++tok, p = String(spec).split("#"), src = p[0], a = 0, b = null;
    if (p[1]) { var r = p[1].split(",").map(Number); a = r[0] || 0; b = isNaN(r[1]) ? null : r[1]; }
    para();
    return carga(src).then(function(buf){
      if (mio !== tok) return;
      var ac = ctx(); if (!ac) throw new Error("sin audio");
      if (ac.state === "suspended") ac.resume();
      var s = ac.createBufferSource(); s.buffer = buf;
      s.playbackRate.value = (rate || 1) * (typeof SPEED === "number" && SPEED > 0 ? SPEED : 1);
      s.connect(ac.destination); fuente = s;
      return new Promise(function(res){
        s.onended = function(){ if (fuente === s) fuente = null; res(); };
        var dur = b != null ? Math.max(.05, b - a) : undefined;
        try { s.start(0, a, dur); } catch (e) { try { s.start(0); } catch (x) { res(); } }
      });
    });
  };
  A.precarga = function(textos){
    var n = 0;
    (textos || []).forEach(function(t){
      if (!t || n >= 12) return;
      var spec = A.spec(t, false); if (!spec || !CORTO.test(spec) || !ctx()) return;
      n++; carga(spec.split("#")[0]).catch(function(){});
    });
  };

  /* ---------------- voz del sistema, con paciencia ---------------- */
  var avisado = false, hablando = null;
  var avisa = function(){
    if (avisado) return; avisado = true;
    try { toast(/Android/i.test(navigator.userAgent) ? "Este teléfono no tiene voz en francés: instala «Síntesis de voz de Google» en Play Store o usa la app de Android." : "Este navegador no tiene ninguna voz en francés: algunas frases no podrán sonar."); } catch (e) {}
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
    deviceSpeak = function(text, slow){
      if (!synth || !text) { avisa(); return false; }
      if (!frVoice) { try { pickVoice(); } catch (e) {} }
      if (frVoice) { habla(text, slow); return true; }
      esperaVoces(1500).then(function(){ try { pickVoice(); } catch (e) {} if (frVoice) habla(text, slow); else avisa(); });
      return true;
    };
  }

  /* ---------------- speak() y stopAudio() de la app ---------------- */
  var speakO = speak, stopO = stopAudio;
  stopAudio = function(){ para(); hablando = null; return stopO.apply(this, arguments); };
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
    if (CORTO.test(spec) && ctx()) {
      var p = A.toca(spec, r);
      p.catch(function(){ try { playSpec(spec, null, r); } catch (e) {} });   /* si no se pudo decodificar, por el camino de siempre */
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
        (o && o.steps || []).forEach(function(s){ if (!s.key || says.length >= 10) return; var it = getItem(s.key); if (it && it.k === "listen" && it.say) says.push(it.say); });
        A.ultimos = null; A.precarga(says);
      } catch (e) {}
      return startO.apply(this, arguments);
    };
  }
})();
