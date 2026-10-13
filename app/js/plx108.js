/* PLEX PLAY 4.34 — Micrófono fiable en todos los ejercicios de voz (window.PLX_VOZ). Va ANTES de plx97.

   Qué fallaba (leído en el código, no supuesto):
   1. La grabación (recordWav del núcleo) creaba el AudioContext a 16 kHz. Firefox no deja conectar un micrófono a un
      contexto de otra frecuencia y lanzaba dentro de un `new Promise(async…)`: la promesa no terminaba nunca y el
      ejercicio se quedaba en «Preparando el micrófono…». Donde el navegador ignora los 16 kHz (Safari antiguo), el WAV
      salía a 44,1/48 kHz, tres veces más pesado.
   2. Si el reconocedor del dispositivo fallaba por algo que no fuera de red, o no entendía al estudiante, no se probaba
      el otro camino; y en iPhone se usaba siempre el dictado de Safari, que es el menos fiable.
   3. Expresión oral y la producción oral del simulacro (plx28) mandaban la grabación entera en un solo pedido: una tarea
      de más de ~90 s pasaba el tamaño que acepta la función de IA y «no se pudo transcribir». Casi todas las tareas
      duran entre 2 y 5 minutos.

   Qué hace este módulo:
   - grabadora única: frecuencia propia del dispositivo, contexto reanudado, remuestreo a 16 o 12 kHz en JS, vigilante
     por si el micrófono no entrega audio, y todos los errores convertidos en un código (nunca una promesa colgada);
   - `recordWav` y `speechListen` del núcleo pasan por aquí: orden de los dos caminos según el dispositivo, respaldo en
     las dos direcciones y, tras dos intentos sin entender, se cambia de camino;
   - grabación larga por tramos para plx28 (`PLX_VOZ.largo`, `PLX_VOZ.transcribe`);
   - mensajes de error concretos para iPhone, dirección no segura y cupo agotado. */
(function(){
  "use strict";
  if (typeof speechListen !== "function" || typeof recordWav !== "function" || typeof wavB64 !== "function") return;

  var UA = navigator.userAgent;
  var IOS = /iPhone|iPad|iPod/i.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  var enNube = function(){ try { return typeof CLOUD_SPEECH === "function" && !!CLOUD_SPEECH(); } catch (e) { return false; } };
  var puente = function(){ try { return typeof HAS_BRIDGE === "function" && HAS_BRIDGE() && !!PlexAndroid.speechAvailable(); } catch (e) { return false; } };
  var dictado = function(){ try { return typeof IS_CHROME_SPEECH !== "undefined" && !!IS_CHROME_SPEECH; } catch (e) { return false; } };
  var nivel = function(v){ try { typeof spLevel === "function" && spLevel(v); } catch (e) {} };

  /* ------------------------------------------------------------------ grabadora */
  var codigo = function(e){
    var n = String((e && (e.name || e.message)) || "");
    if (/NotAllowed|Permission|Security/i.test(n)) return "not-allowed";
    if (/NotFound|DevicesNotFound/i.test(n)) return "nomic";
    return "audio-capture";            /* NotReadable (otro programa lo usa), Abort, TrackStart… */
  };
  /* abre el micrófono y empieza a recibir audio; resuelve con la grabación en curso o rechaza con Error(código) */
  var abre = async function(){
    var MD = navigator.mediaDevices;
    if (!MD || typeof MD.getUserMedia !== "function") throw new Error(window.isSecureContext === false ? "inseguro" : "unsupported");
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error("unsupported");
    var stream;
    try { stream = await MD.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true } }); }
    catch (e) {
      if (/Overconstrained|Constraint|TypeError/i.test(String(e && e.name))) {     /* un micrófono que no acepta esas opciones */
        try { stream = await MD.getUserMedia({ audio: true }); } catch (e2) { throw new Error(codigo(e2)); }
      } else throw new Error(codigo(e));
    }
    var g = { bufs: [], rate: 0, total: 0, pico: 0, alDato: null, cerrada: false };
    var ac, src, proc, mudo;
    g.cierra = function(){
      if (g.cerrada) return; g.cerrada = true;
      try { proc && (proc.onaudioprocess = null); } catch (e) {}
      try { proc && proc.disconnect(); src && src.disconnect(); mudo && mudo.disconnect(); } catch (e) {}
      try { stream.getTracks().forEach(function(t){ t.stop(); }); } catch (e) {}
      try { ac && ac.state !== "closed" && ac.close(); } catch (e) {}
    };
    try {
      ac = new AC();                                   /* frecuencia del dispositivo: así conecta también en Firefox */
      if (ac.state === "suspended") { try { await ac.resume(); } catch (e) {} }
      src = ac.createMediaStreamSource(stream);
      proc = ac.createScriptProcessor(4096, 1, 1);
      mudo = ac.createGain(); mudo.gain.value = 0;     /* el procesador necesita un destino; en silencio para no acoplar */
      g.rate = ac.sampleRate;
      proc.onaudioprocess = function(e){
        if (g.cerrada) return;
        var d = new Float32Array(e.inputBuffer.getChannelData(0));
        g.bufs.push(d); g.total += d.length;
        if (g.alDato) { try { g.alDato(d); } catch (x) {} }
      };
      src.connect(proc); proc.connect(mudo); mudo.connect(ac.destination);
    } catch (e) { g.cierra(); throw new Error("audio-capture"); }
    try { stream.getAudioTracks().forEach(function(t){ t.addEventListener("ended", function(){ if (!g.cerrada && g.alCorte) g.alCorte(); }); }); } catch (e) {}
    g.ac = ac;
    return g;
  };
  var rms = function(d){ var s = 0; for (var i = 0; i < d.length; i++) s += d[i] * d[i]; return Math.sqrt(s / (d.length || 1)); };
  /* une los trozos y los baja a `destino` Hz promediando cada ventana (filtro simple que evita el aliasing) */
  var aRitmo = function(bufs, rate, destino){
    var n = 0, i, o = 0; for (i = 0; i < bufs.length; i++) n += bufs[i].length;
    var todo = new Float32Array(n); for (i = 0; i < bufs.length; i++) { todo.set(bufs[i], o); o += bufs[i].length; }
    if (!rate || rate <= destino * 1.02) return { pcm: todo, rate: rate || destino };
    var paso = rate / destino, m = Math.floor(n / paso), out = new Float32Array(m);
    for (i = 0; i < m; i++) {
      var a = Math.floor(i * paso), b = Math.min(n, Math.floor((i + 1) * paso)), s = 0;
      for (var k = a; k < b; k++) s += todo[k];
      out[i] = b > a ? s / (b - a) : 0;
    }
    return { pcm: out, rate: destino };
  };

  /* ------------------------------------------------------------------ una frase (reemplaza al recordWav del núcleo) */
  var grabaFrase = function(maxMs){
    return new Promise(function(res, rej){
      abre().then(function(g){
        var rate = g.rate, oido = 0, quieto = 0, total = 0, piso = 0, pN = 0, pico = 0, hecho = false;
        var fin = function(forzado, err){
          if (hecho) return; hecho = true; clearTimeout(sinAudio);
          try { spStopRec = null; } catch (e) {}
          nivel(0); g.cierra();
          if (err) return rej(new Error(err));
          if (!oido && !(forzado && pico > .004)) return rej(new Error("no-speech"));
          var r = aRitmo(g.bufs, rate, 16000);
          res(wavB64([r.pcm], r.rate));
        };
        /* un micrófono que abre pero no entrega nada (silenciado por el sistema, o tomado por otra app) */
        var sinAudio = setTimeout(function(){ if (!total) fin(true, "audio-capture"); }, 3500);
        try { spStopRec = function(){ fin(true); }; } catch (e) {}
        g.alCorte = function(){ fin(true); };
        g.alDato = function(d){
          total += d.length; var v = rms(d); if (v > pico) pico = v;
          if (total < rate * .3) { piso = (piso * pN + v) / ++pN; return; }       /* el primer tercio de segundo mide el ruido del sitio */
          var th = Math.max(.006, Math.min(.05, piso * 2.5 + .004));
          nivel(v / (th * 4));
          if (v > th) { oido += d.length; quieto = 0; } else if (oido > rate * .25) quieto += d.length;
          if (oido > rate * .25 && quieto > rate * 1.6) return fin(false);       /* terminó de hablar */
          if (!oido && total > rate * 7) return fin(false);                       /* siete segundos sin voz */
          if (total > rate * ((maxMs || 14000) / 1000)) return fin(true);
        };
        try { window.__plexSpeechState && window.__plexSpeechState("ready"); } catch (e) {}
      }, rej);
    });
  };
  recordWav = grabaFrase;

  /* la transcripción en la nube falla a ratos por saturación del proveedor (503 «high demand») y a veces ni responde:
     cada pedido tiene un plazo (más largo cuanto más audio lleva); un error se reintenta una vez, un plazo vencido no.
     No se reintenta el cupo diario ni la sesión vencida. */
  var conReintento = function(){
    try {
      if (!window.PCB || typeof PCB.transcribe !== "function" || PCB.transcribe.__plx108) return;
      var t0 = PCB.transcribe;
      var f = async function(b, m, e){
        var ult, plazo = 30000 + Math.round(String(b || "").length / 100);
        for (var i = 0; i < 2; i++) {
          try {
            return await Promise.race([t0(b, m, e), new Promise(function(_, no){ setTimeout(function(){ no({ code: "provider_error", lento: true }); }, plazo); })]);
          } catch (x) {
            ult = x; var c = String((x && x.code) || "");
            if (x && x.lento) throw x;                /* no contestó a tiempo: repetir solo alargaría la espera */
            if (!/provider_error|provider_quota|rate_limited|http-5|http-429/.test(c)) throw x;
            if (i < 1) await new Promise(function(r){ setTimeout(r, 1200); });
          }
        }
        throw ult;
      };
      f.__plx108 = 1; PCB.transcribe = f;
    } catch (e) {}
  };
  conReintento();

  /* ------------------------------------------------------------------ escuchar una frase (reemplaza a speechListen) */
  var fallos = 0;                      /* puntos de desconfianza en el reconocedor del dispositivo: +2 si no oyó nada, +1 si entendió otra cosa; con 2, se graba primero */
  var DEL_USUARIO = /not-allowed|denied|permission|blocked|nomic|cancelled|login|inseguro/i;
  var escucha = async function(esperado){
    conReintento();
    var hayD = puente() || dictado(), hayN = enNube();
    if (!hayD && !hayN) throw new Error(window.PCB && PCB.enabled && !PCB.uid ? "login" : window.isSecureContext === false ? "inseguro" : "unsupported");
    var orden;
    if (hayD && hayN) orden = ((IOS && !puente()) || fallos >= 2) ? ["nube", "dictado"] : ["dictado", "nube"];
    else orden = [hayD ? "dictado" : "nube"];
    var ultimo = null, tecnico = null;
    for (var k = 0; k < orden.length; k++) {
      var cual = orden[k];
      try {
        var alts = await (cual === "dictado" ? nativeListen() : cloudListen(esperado));
        if (cual === "dictado") {
          var mejor = 100;
          if (esperado && typeof spScore === "function") { mejor = 0; (alts || []).forEach(function(a){ try { mejor = Math.max(mejor, spScore(esperado, a).pct); } catch (e) {} }); }
          fallos = mejor < 50 ? fallos + 1 : 0;       /* entendió otra cosa: a la tercera se graba y se transcribe */
        }
        return alts;
      } catch (e) {
        var m = String((e && e.message) || ""); ultimo = e;
        if (DEL_USUARIO.test(m)) throw e;                                         /* lo arregla la persona, no otro camino */
        if (/no-speech|no.match|timeout/i.test(m)) { if (cual === "dictado") fallos += 2; throw (tecnico && cual === "dictado") ? tecnico : e; }   /* tiene que volver a hablar; el siguiente intento va por grabación */
        /* fallo técnico (red, servicio, cupo, micrófono ocupado): se prueba el otro camino, si lo hay */
        if (k + 1 < orden.length) {
          tecnico = e;
          if (cual === "nube") diEstado("No pude analizar la grabación. Te escucho otra vez: repite la frase.");
        }
      }
    }
    throw ultimo || new Error("unsupported");
  };
  var diEstado = function(t){ try { var el = document.querySelector(".sp-status"); if (el) el.textContent = t; } catch (e) {} };
  speechListen = escucha;

  /* ------------------------------------------------------------------ mensajes */
  var texto0 = typeof spErrText === "function" ? spErrText : null;
  if (texto0) {
    spErrText = function(m){
      m = String(m || "");
      if (/inseguro/.test(m)) return { t: "El micrófono solo funciona en la dirección segura. Abre la app en https://plexplay.app." };
      if (IOS && /not-allowed|permission|denied/i.test(m) && !/blocked/.test(m))
        return { t: "El iPhone no dio permiso al micrófono. Toca «aA» en la barra de direcciones → Ajustes del sitio web → Micrófono → Permitir, y vuelve a intentarlo." };
      if (IOS && /service|unavailable/i.test(m) && !enNube())
        return { t: "El dictado del iPhone está apagado. Actívalo en Ajustes → General → Teclado → Activar dictado, o inicia sesión para que Manzana te escuche por grabación." };
      if (/cloud-(rate_limited|provider_quota|provider_error|http-5)/.test(m)) return { t: "El servicio de voz está ocupado en este momento. Espera unos segundos e inténtalo otra vez." };
      if (/cloud-session_expired/.test(m)) return { t: "Tu sesión se cerró. Vuelve a entrar para practicar la pronunciación." };
      if (/audio-capture/.test(m)) return { t: "El micrófono no está entregando sonido. Cierra otras apps que lo estén usando (llamadas, grabadora) y revisa que no esté silenciado." };
      return texto0(m);
    };
  }

  /* ------------------------------------------------------------------ grabación larga (expresión oral, simulacro) */
  var largo = {
    /* devuelve la grabación en curso: { termina() → { pcm, rate, secs, oyo }, alNivel } o rechaza con Error(código) */
    empieza: async function(){
      var g = await abre(), t0 = Date.now(), piso = 0, pN = 0, oido = 0, total = 0, h = { alNivel: null };
      g.alDato = function(d){
        total += d.length; var v = rms(d);
        if (total < g.rate * .3) { piso = (piso * pN + v) / ++pN; return; }
        var th = Math.max(.006, Math.min(.05, piso * 2.5 + .004));
        if (v > th) oido += d.length;
        if (h.alNivel) { try { h.alNivel(Math.max(0, Math.min(1, v / (th * 4)))); } catch (e) {} }
      };
      h.vivo = function(){ return !g.cerrada; };
      h.termina = function(){
        var secs = (Date.now() - t0) / 1000, r = aRitmo(g.bufs, g.rate, 12000);
        var sinDatos = !g.total;
        g.cierra(); g.bufs = [];
        return { pcm: r.pcm, rate: r.rate, secs: secs, oyo: oido > g.rate * .4, sinDatos: sinDatos };
      };
      return h;
    }
  };
  /* parte el audio en tramos de hasta ~95 s cortando en el momento más callado de los últimos segundos de cada tramo */
  var tramos = function(pcm, rate){
    var MAX = Math.floor(rate * 95), VEN = Math.floor(rate * 12), out = [], a = 0, n = pcm.length, paso = Math.floor(rate * .05);
    while (n - a > MAX) {
      var desde = a + MAX - VEN, hasta = a + MAX, mejor = hasta, min = Infinity;
      for (var i = desde; i + paso <= hasta; i += paso) {
        var s = 0; for (var k = i; k < i + paso; k++) s += pcm[k] * pcm[k];
        if (s < min) { min = s; mejor = i + (paso >> 1); }
      }
      out.push(pcm.subarray(a, mejor)); a = mejor;
    }
    if (n - a > rate * .3 || !out.length) out.push(pcm.subarray(a));
    return out;
  };
  /* transcribe una grabación larga: { text, err, partes, hechas } (lo transcrito se conserva aunque un tramo falle) */
  var transcribe = async function(pcm, rate, alAvance){
    conReintento();
    var T = tramos(pcm, rate), textos = [], err = "";
    for (var i = 0; i < T.length; i++) {
      if (alAvance) { try { alAvance(i + 1, T.length); } catch (e) {} }
      try {
        var t = String(await PCB.transcribe(wavB64([T[i]], rate), "audio/wav", "") || "").replace(/^["«\s]+|["»\s]+$/g, "");
        if (t && !/^\[?silence\]?$/i.test(t)) textos.push(t);
      } catch (e) {
        var c = (e && e.code) || "";
        err = c === "daily_limit" ? "Llegaste al límite de transcripciones de hoy." : c === "offline" ? "Se cortó la conexión mientras se transcribía." :
              c === "session_expired" ? "Tu sesión se cerró; vuelve a entrar." : "El servicio de voz no respondió.";
        break;
      }
    }
    return { text: textos.join(" ").replace(/\s+/g, " ").trim(), err: err, partes: T.length, hechas: textos.length };
  };
  var url = function(pcm, rate){
    try { var bin = atob(wavB64([pcm], rate)), u8 = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); return URL.createObjectURL(new Blob([u8], { type: "audio/wav" })); }
    catch (e) { return null; }
  };

  /* qué camino hay en este dispositivo ahora mismo (para el panel de diagnóstico y las pruebas) */
  var estado = function(){
    return { ios: IOS, seguro: window.isSecureContext !== false, microfono: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
             dictado: dictado(), puente: puente(), nube: enNube(), sesion: !!(window.PCB && PCB.uid), fallos: fallos };
  };

  window.PLX_VOZ = { abre: abre, grabaFrase: grabaFrase, escucha: escucha, largo: largo, transcribe: transcribe, tramos: tramos, aRitmo: aRitmo, url: url, estado: estado, ios: IOS };
})();
