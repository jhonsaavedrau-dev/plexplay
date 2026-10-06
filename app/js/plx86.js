/* PLEX PLAY 3.9.0 — Audio estable: un solo ciclo de vida y una sola verdad por interruptor
   Lo que fallaba
   - Al salir de la app (o bloquear el celular) ningún módulo paraba su audio: los efectos, la cuenta 3-2-1 y las
     frases que se programaban mientras tanto quedaban en cola sobre un contexto congelado y, al volver, salían
     todos juntos. Cada uno de los siete AudioContext se reanudaba por su cuenta.
   - «Efectos de sonido» (Ajustes) no callaba el Arcade ni PLEX Quiz: los juegos tenían su propio interruptor.
   - La música seguía a todo volumen mientras grababa el micrófono.
   - Cambiar de pestaña no cortaba la frase que sonaba. La pestaña Ranking y sus filtros no sonaban, la pestaña ya
     activa sí, y el «swoosh» era ruido blanco (sonaba a interferencia).
   Lo nuevo
   - Registro de todos los contextos. Con la app oculta: se corta la voz (también la que aún cargaba), se suspenden
     los contextos que sonaban y ningún efecto, frase ni nota se programa. Al volver se reanudan solo esos. La
     lectura larga que ya sonaba por el reproductor (lección, texto, audio de examen) sigue con la pantalla apagada.
   - «Sonido» de los juegos es el mismo interruptor que «Efectos de sonido». Apagar Música o Efectos se aplica al
     instante a lo que ya suena (evento «plx:audio» para los módulos con música propia, como el 1V1).
   - La música se baja mientras el micrófono escucha (grabación, reconocimiento del navegador o de la app).
   - Los ejercicios de vocabulario generados («¿Qué significa…?», «¿Cómo se dice…?») traen «Escuchar». */
(function(){
  "use strict";
  var hayS = typeof SFX !== "undefined" && !!SFX, hayM = typeof MUSIC !== "undefined" && !!MUSIC;
  var congelada = false;
  var oculta = function(){ return congelada || document.visibilityState === "hidden"; };
  var avisa = function(d){ try { document.dispatchEvent(new CustomEvent("plx:audio", { detail: d })); } catch (e) {} };
  var calla = function(p){ if (p && typeof p.catch === "function") p.catch(function(){}); };

  /* ================= 1. registro de los contextos de audio ================= */
  /* Se anotan en su primer uso (todos crean nodos al nacer), así entran también los que ya existían. La pila de esa
     primera llamada dice de qué módulo es: los de los juegos se callan al apagar Efectos. */
  var CTXS = [], dormidos = [];
  var registra = function(c){
    if (!c || c.__plx || (window.OfflineAudioContext && c instanceof window.OfflineAudioContext)) return;
    try { c.__plx = 1; } catch (e) { return; }
    var pila = ""; try { pila = String(new Error().stack || ""); } catch (e) {}
    c.__plxDe = /plx45\.js|plx57\.js/.test(pila) ? "juegos" : "";
    CTXS.push(c);
  };
  var BAC = window.BaseAudioContext || window.AudioContext || window.webkitAudioContext;
  if (BAC && BAC.prototype) ["createGain", "createOscillator", "createBufferSource", "createBuffer"].forEach(function(m){
    var o = BAC.prototype[m]; if (typeof o !== "function") return;
    BAC.prototype[m] = function(){ registra(this); return o.apply(this, arguments); };
  });
  /* con la app oculta, un resume() no despierta nada: queda anotado para cuando vuelva */
  var ACp = (window.AudioContext || window.webkitAudioContext || {}).prototype;
  if (ACp && typeof ACp.resume === "function") {
    var res0 = ACp.resume;
    ACp.resume = function(){
      if (this.__plx && oculta()) { if (dormidos.indexOf(this) < 0) dormidos.push(this); return Promise.resolve(); }
      return res0.apply(this, arguments);
    };
  }
  /* red de seguridad: con la app oculta ninguna fuente arranca (ni la de un módulo que se salte los envoltorios).
     Su stop() posterior tampoco hace nada, para no lanzar «stop sin start». */
  [window.AudioScheduledSourceNode, window.AudioBufferSourceNode, window.OscillatorNode, window.ConstantSourceNode].forEach(function(K){
    var p = K && K.prototype; if (!p || !Object.prototype.hasOwnProperty.call(p, "start")) return;
    var s0 = p.start, t0 = Object.prototype.hasOwnProperty.call(p, "stop") ? p.stop : null;
    p.start = function(){ if (oculta() && this.context && this.context.__plx) { this.__plxNo = 1; return; } return s0.apply(this, arguments); };
    if (t0) p.stop = function(){ if (this.__plxNo) return; return t0.apply(this, arguments); };
  });

  /* ================= 2. ciclo de vida: salir de la app y volver ================= */
  /* «Escuchar la lección», las lecturas y los audios de examen (claves «t:», «lec:», «sim:») van por el reproductor
     <audio>, no por un contexto: siempre han seguido con la pantalla apagada y no dejan nada en cola, así que no se
     cortan (cortar un audio de examen, además, gastaría una de sus dos escuchas). Todo lo demás sí. */
  var lecturaLarga = function(){
    try { return typeof curKey === "string" && /^(t|lec|sim):/.test(curKey) && typeof player !== "undefined" && !!player && !player.paused && !player.ended; } catch (e) { return false; }
  };
  var duerme = function(){
    if (!lecturaLarga()) try { if (typeof stopAudio === "function") stopAudio(); } catch (e) {}
    CTXS.forEach(function(c){
      if (c.state !== "running") return;
      if (dormidos.indexOf(c) < 0) dormidos.push(c);
      try { calla(c.suspend()); } catch (e) {}
    });
  };
  var despierta = function(){
    var L = dormidos; dormidos = [];
    L.forEach(function(c){ if (c.state !== "closed") try { calla(c.resume()); } catch (e) {} });
  };
  /* visible es visible: si un «pagehide» no trajo su «pageshow» (pasa en iOS), la app no se queda muda */
  document.addEventListener("visibilitychange", function(){ if (document.visibilityState === "hidden") duerme(); else { congelada = false; despierta(); } });
  window.addEventListener("pagehide", function(){ congelada = true; duerme(); });
  window.addEventListener("pageshow", function(){ if (!congelada) return; congelada = false; if (document.visibilityState !== "hidden") despierta(); });

  /* ================= 3. navegación: sonido suave y solo cuando algo cambia ================= */
  if (hayS) {
    var callaSw = false;
    /* el «swoosh» era ruido blanco filtrado (700→2600 Hz): ahora es el tono corto y suave de «lift» */
    SFX.swoosh = function(){ if (callaSw) return; return SFX.lift(); };
    var vistaDe = function(b){ return b.dataset.view != null ? b.dataset.view : b.hasAttribute("data-av-rank") ? "ranking" : null; };
    /* en captura sobre window: corre antes que el oyente de sonidos del núcleo (captura sobre document) */
    window.addEventListener("click", function(e){
      callaSw = false;
      var b = e.target && e.target.closest && e.target.closest("button"); if (!b || b.disabled) return;
      var v = vistaDe(b);
      if (v != null) {
        var d = b.dataset, solo = d.track == null && d.go == null && d.dzmode == null && d.dzgo == null;
        if (solo && typeof view !== "undefined" && v === view) { callaSw = true; setTimeout(function(){ callaSw = false; }, 0); return; }   /* ya estás ahí */
        if (b.dataset.view == null && b.closest("#tabbar,#nav")) SFX.swoosh();   /* Ranking: el núcleo no la conoce */
        return;
      }
      /* filtros de Ranking y selector de Jugar: tap, salvo que ya estén elegidos o que el núcleo ya los haga sonar */
      if (b.matches("[data-rkv-amb],[data-rkv-per],[data-jx-tab]") && b.getAttribute("aria-selected") !== "true" && b.getAttribute("aria-pressed") !== "true" &&
          !b.closest(".seg") && !b.classList.contains("btn") && !b.classList.contains("ghost")) SFX.tap();
    }, true);
  }

  /* ================= 4. con la app oculta, nada suena ================= */
  var mudo = function(o, k, ret){
    if (!o || typeof o[k] !== "function" || o[k].__plxMudo) return;
    var f = o[k], g = function(){ if (oculta()) return ret; return f.apply(this, arguments); };
    g.__plxMudo = 1; o[k] = g;
  };
  if (hayS) ["tap", "tick", "lift", "drop", "swoosh", "ok", "ko", "open", "done"].forEach(function(k){ mudo(SFX, k); });
  if (window.PLXG) { mudo(PLXG, "sfx"); mudo(PLXG, "fx"); }
  if (window.V1AUD) mudo(V1AUD, "fx", true);
  /* iOS: Web Audio va por la sesión «ambient», que el interruptor de silencio apaga; las lecturas por <audio> sí
     suenan. La primera frase pasa la página a «playback», como antes de 3.3.0 (no en el primer toque: un efecto no
     debe cortar la música de otra app). */
  var sesion = function(){ try { if (navigator.audioSession && navigator.audioSession.type !== "playback") navigator.audioSession.type = "playback"; } catch (e) {} };
  if (typeof speak === "function") {
    var sp0 = speak;
    speak = function(){ if (oculta()) return false; sesion(); return sp0.apply(this, arguments); };
  }
  if (typeof playSpec === "function") {
    var ps0 = playSpec;
    playSpec = function(){ if (oculta()) return; sesion(); return ps0.apply(this, arguments); };
  }

  /* ================= 5. una sola verdad por interruptor ================= */
  /* «Sonido · Efectos del juego» (portada del Arcade y PLEX Quiz) es un espejo de «Efectos de sonido» (cr-sfx).
     Un plxg-aj viejo con sonido:false queda ignorado: manda Ajustes. */
  if (hayS && window.PLXG && PLXG.aj) {
    try {
      Object.defineProperty(PLXG.aj, "sonido", { configurable: true, enumerable: true,
        get: function(){ return SFX.on; },
        set: function(v){ if (!!v === SFX.on) return; var b = document.getElementById("sfxBtn"); if (b) b.click(); else SFX.toggle(); } });
    } catch (e) {}
  }
  if (hayS && typeof SFX.toggle === "function") {
    var tg0 = SFX.toggle;
    SFX.toggle = function(){
      var r = tg0.apply(this, arguments);
      /* apagado: lo que ya sonaba en los juegos se corta (sus motores reanudan su contexto al volver a sonar) */
      if (!SFX.on) CTXS.forEach(function(c){ if (c.__plxDe === "juegos" && c.state === "running") try { calla(c.suspend()); } catch (e) {} });
      avisa({ sfx: SFX.on });
      return r;
    };
  }
  if (hayM && typeof MUSIC.set === "function") {
    var set0 = MUSIC.set;
    MUSIC.set = function(){ var r = set0.apply(this, arguments); avisa({ music: MUSIC.on }); return r; };
  }

  /* ================= 6. cambiar de vista corta la frase que sonaba ================= */
  /* Las vistas que suenan al entrar (Sonidos, Vocabulario) lo hacen con setTimeout después de go(): no se cortan. */
  if (typeof go === "function") {
    var go0 = go;
    go = function(v){ try { if (typeof view !== "undefined" && v !== view && typeof stopAudio === "function") stopAudio(); } catch (e) {} return go0.apply(this, arguments); };
  }

  /* ================= 7. la música se baja mientras el micrófono escucha ================= */
  var micVivos = [];
  var micAplica = function(){
    micVivos = micVivos.filter(function(x){ return !(x && x.readyState === "ended"); });
    try { if (hayM && MUSIC.quiet) MUSIC.quiet("mic", micVivos.length ? 1e-4 : null); } catch (e) {}
  };
  var micMas = function(x){ if (micVivos.indexOf(x) < 0) micVivos.push(x); micAplica(); };
  var micMenos = function(x){ var i = micVivos.indexOf(x); if (i >= 0) { micVivos.splice(i, 1); micAplica(); } };
  var MD = navigator.mediaDevices;
  if (MD && typeof MD.getUserMedia === "function") {
    try {
      var gum0 = MD.getUserMedia;
      MD.getUserMedia = function(){
        return gum0.apply(MD, arguments).then(function(s){
          try { s.getAudioTracks().forEach(function(t){ micMas(t); t.addEventListener("ended", function(){ micMenos(t); }); }); } catch (e) {}
          return s;
        });
      };
    } catch (e) {}
  }
  if (window.MediaStreamTrack && MediaStreamTrack.prototype.stop) {
    var ts0 = MediaStreamTrack.prototype.stop;
    MediaStreamTrack.prototype.stop = function(){ micMenos(this); return ts0.apply(this, arguments); };
  }
  [window.SpeechRecognition, window.webkitSpeechRecognition].forEach(function(SR){
    var p = SR && SR.prototype; if (!p || p.__plxMic || typeof p.start !== "function") return;
    p.__plxMic = 1;
    var s0 = p.start;
    p.start = function(){
      var r = this;
      /* marca propia de cada reconocedor: «__plxMic» está en el prototipo y se hereda (sin estos oyentes la música no volvía) */
      if (!r.__plxOye) { r.__plxOye = 1; ["end", "error"].forEach(function(ev){ r.addEventListener(ev, function(){ micMenos(r); }); }); }
      var out = s0.apply(this, arguments); micMas(r); return out;
    };
  });
  /* la app de Android escucha por su puente: el núcleo pone window.__plexSpeech al empezar y lo vacía al terminar */
  try {
    var psv = window.__plexSpeech, PSK = { puente: 1 };
    Object.defineProperty(window, "__plexSpeech", { configurable: true, enumerable: true,
      get: function(){ return psv; },
      set: function(v){ psv = v; if (typeof v === "function") micMas(PSK); else micMenos(PSK); } });
  } catch (e) {}
  setInterval(function(){ if (micVivos.length) micAplica(); }, 2000);   /* por si una pista terminó sin avisar */

  /* ================= 8. vocabulario generado con «Escuchar» ================= */
  /* plx59 genera estos ítems sin «say» (y no debe llevarlo: contarían como orales y saldrían de Voice Duel). En
     «¿Qué significa…?» la palabra francesa se oye antes de contestar; en «¿Cómo se dice…?», al corregir, para no
     regalar la respuesta. Solo si hay mp3; los toques los atiende el oyente global de data-say. */
  if (typeof itemHTML === "function" && window.PLXA && typeof PLXA.spec === "function") {
    var ih0 = itemHTML;
    var limpia = function(x){ return String(x == null ? "" : x).replace(/<[^>]*>/g, "").trim(); };
    var escH = function(x){ return String(x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
    itemHTML = function(it){
      var h = ih0.apply(this, arguments);
      try {
        if (!it || !it.gen || it.k !== "choice" || it.say || typeof h !== "string" || h.indexOf('class="listen"') >= 0) return h;
        var fb = typeof P !== "undefined" && P && P.phase === "feedback";
        var fr = /^¿Qué significa/.test(it.ask || "") ? it.q : fb && it.o ? it.o[it.a] : null;
        fr = limpia(fr); if (!fr || !PLXA.spec(fr)) return h;
        var icono = typeof SPK !== "undefined" ? SPK : "";
        var b = '<div class="listen"><button class="say" data-say="' + escH(fr) + '">' + icono + ' Escuchar</button><button class="say" data-say="' + escH(fr) + '" data-rate="0.65">Despacio</button></div>';
        var i = h.indexOf('<p class="q');
        return i >= 0 ? h.slice(0, i) + b + h.slice(i) : b + h;
      } catch (e) { return h; }
    };
  }

  window.PLXAUD = { contextos: CTXS, oculta: oculta, microfono: function(){ return micVivos.length; } };
})();
