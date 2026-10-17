/* PLEX PLAY 4.51 — el idioma que se estudia (francés o inglés)
   Va justo después del núcleo (index.html) y antes de todos los parches, porque:
   - El idioma activo vive en el progreso (S.lang, "fr" si no está) y se copia en localStorage "plx-lang" para que
     pre.js pinte el color del idioma antes del primer cuadro. window.PLX_LANG y html[data-lang] lo exponen al resto.
   - Una sola cuenta, progreso separado: lo propio de cada idioma (XP, días y racha, carnet, monedas, copas del 1V1,
     récords…) está arriba en S para el idioma activo; el del otro idioma se guarda en S.alt[idioma]. Las lecciones
     no hace falta separarlas: las del inglés tienen ids propios (en-…). Todo viaja en el mismo documento de
     progreso de Supabase, así que no cambia el esquema.
   - mergeState (núcleo) se envuelve aquí, antes de que llegue el progreso de la nube: si otro dispositivo guardó
     con el otro idioma activo, primero se le da la vuelta y luego se mezcla campo a campo con el de aquí.
   - En inglés se descargan cursos-en.js y audio-en.js (document.write: tienen que estar antes de plx121), la voz
     del dispositivo pasa a en-US y el dictado por voz escucha en inglés. El francés no descarga nada nuevo.
   PLX_IDIOMA.cambiar("en" | "fr") guarda, sube el progreso y recarga la app en el otro idioma. */
(function(){
  "use strict";
  if (typeof S === "undefined" || typeof mergeState !== "function") return;
  var H = document.documentElement, IDI = { fr: 1, en: 1 };
  var V = { cursos: "ccdb3179", audio: "fe8a94e4" };   /* integrar.py los pone al día */
  var ls = function(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };

  /* ---------- 1. qué es propio de cada idioma ---------- */
  var ARRIBA = ["xp", "days", "carnet", "mastered", "writing", "dictees", "gone", "srs"];
  var JUEGO = ["coins", "coinsV", "freeze", "frozen", "freezeAwardAt", "rachaUlt", "bestStreak", "streakShown", "lvlSeen", "best",
    "correct", "perfect", "chronoPlays", "quiz", "ruta", "diag", "placement", "exam", "duels", "lg", "lgWk", "miss", "malEscritas",
    "record", "chests", "plusCofre"];
  var copia = function(x){ return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); };
  var nuevo = function(){ try { return fresh(); } catch (e) { return { xp: 0, carnet: {}, mastered: {}, days: {}, writing: [], dictees: {} }; } };
  /* deja arriba el idioma `a`: guarda lo de `de` en st.alt[de] y saca st.alt[a] (o lo deja vacío) */
  function voltea(st, de, a){
    if (!st || de === a) return st;
    st.alt = st.alt && typeof st.alt === "object" ? st.alt : {};
    var g = st.game && typeof st.game === "object" ? st.game : (st.game = {});
    var guarda = { top: {}, game: {} };
    ARRIBA.forEach(function(k){ if (k in st) guarda.top[k] = st[k]; });
    JUEGO.forEach(function(k){ if (k in g) guarda.game[k] = g[k]; });
    st.alt[de] = guarda;
    var sale = st.alt[a] || { top: {}, game: {} }, base = nuevo();
    delete st.alt[a];
    ARRIBA.forEach(function(k){ delete st[k]; var v = k in sale.top ? sale.top[k] : base[k]; if (v !== undefined) st[k] = v; });
    JUEGO.forEach(function(k){ delete g[k]; if (sale.game && k in sale.game) g[k] = sale.game[k]; });
    st.lang = a;
    return st;
  }
  var idiomaDe = function(st){ return st && IDI[st.lang] ? st.lang : "fr"; };

  /* ---------- 2. la mezcla con la nube entiende de idiomas ---------- */
  var mezcla = mergeState;
  /* mezcla dos «guardados» del mismo idioma con la misma regla del núcleo */
  function mezclaAlt(x, y, tx, ty){
    if (!x) return y; if (!y) return x;
    var a = Object.assign({ updatedAt: tx || 0, lessons: {}, game: copia(x.game) || {} }, copia(x.top)),
        b = Object.assign({ updatedAt: ty || 0, lessons: {}, game: copia(y.game) || {} }, copia(y.top));
    var R = mezcla(a, b), out = { top: {}, game: {} };
    ARRIBA.forEach(function(k){ if (k in x.top || k in y.top) out.top[k] = R[k]; });
    /* el núcleo se queda con el juego del más nuevo; las copas y las monedas no deben bajar por eso */
    var gx = x.game || {}, gy = y.game || {}, nueva = (ty || 0) >= (tx || 0) ? gy : gx, vieja = nueva === gy ? gx : gy;
    JUEGO.forEach(function(k){ if (k in nueva) out.game[k] = copia(nueva[k]); else if (k in vieja) out.game[k] = copia(vieja[k]); });
    return out;
  }
  mergeState = function(a, b){
    if (!a || !b) return mezcla(a, b);
    var la = idiomaDe(a), lb = idiomaDe(b);
    var B = lb === la ? b : voltea(copia(b), lb, la);
    var R = mezcla(a, B);
    R.lang = la;
    var aa = a.alt || {}, ba = B.alt || {}, alt = {};
    Object.keys(Object.assign({}, aa, ba)).forEach(function(k){ if (k !== la && IDI[k]) alt[k] = mezclaAlt(aa[k], ba[k], a.updatedAt, B.updatedAt); });
    if (Object.keys(alt).length) R.alt = alt; else delete R.alt;
    return R;
  };

  /* ---------- 3. el idioma de este arranque ---------- */
  var LANG = idiomaDe(S);
  /* ?idioma=en|fr (para probar y para enlaces de la landing): cambia antes de pintar nada */
  try {
    var pide = new URLSearchParams(location.search).get("idioma");
    if (pide && IDI[pide] && pide !== LANG) { voltea(S, LANG, pide); LANG = pide; S.updatedAt = Date.now(); lsSet(LS_KEY, JSON.stringify(S)); }
  } catch (e) {}
  window.PLX_LANG = LANG;
  H.setAttribute("data-lang", LANG);
  ls("plx-lang", LANG);

  /* el curso elegido se recuerda por idioma */
  var TK = "plx-lang-track";
  var tracks = function(){ try { return JSON.parse(ls(TK) || "{}") || {}; } catch (e) { return {}; } };

  window.PLX_IDIOMA = {
    actual: LANG,
    nombre: function(l){ return (l || LANG) === "en" ? "Inglés" : "Francés"; },
    cambiar: function(a){
      if (!IDI[a] || a === LANG) return Promise.resolve(false);
      try { if (typeof P !== "undefined" && P) return Promise.resolve(false); } catch (e) {}
      try { gEnsure(); } catch (e) {}
      var t = tracks(); try { t[LANG] = track; } catch (e) {}
      ls(TK, JSON.stringify(t));
      ls("cr-track", t[a] || (a === "en" ? "en-a1" : "a1"));
      voltea(S, LANG, a);
      S.updatedAt = Date.now();
      lsSet(LS_KEY, JSON.stringify(S));
      ls("plx-lang", a);
      var sube = (typeof remote !== "undefined" && remote.ref && typeof push === "function") ? Promise.race([push(), new Promise(function(r){ setTimeout(r, 4000); })]) : Promise.resolve();
      return sube.then(function(){ location.replace(location.pathname + location.hash); return true; }, function(){ location.replace(location.pathname + location.hash); return true; });
    }
  };

  if (LANG !== "en") return;

  /* ---------- 4. inglés: contenido, audio y voz ---------- */
  document.write('<script src="cursos-en.js?v=' + V.cursos + '"><\/script><script src="audio-en.js?v=' + V.audio + '"><\/script>');

  var vozEn = null;
  var eligeVoz = function(){
    try {
      var vs = speechSynthesis.getVoices().filter(function(v){ return /^en[-_]US/i.test(v.lang); });
      if (!vs.length) vs = speechSynthesis.getVoices().filter(function(v){ return /^en([-_]|$)/i.test(v.lang); });
      vozEn = vs.find(function(v){ return /natural|neural|google|online/i.test(v.name); }) || vs[0] || null;
    } catch (e) {}
  };
  try { if (window.speechSynthesis) { eligeVoz(); speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", eligeVoz); } } catch (e) {}
  window.PLX_VOZ_EN = function(text, slow){
    var t = String(text || "").replace(/<[^>]*>/g, "").trim();
    if (!t || !window.speechSynthesis || !window.SpeechSynthesisUtterance) return false;
    if (!vozEn) eligeVoz();
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t);
      u.lang = vozEn ? vozEn.lang : "en-US"; if (vozEn) u.voice = vozEn;
      u.rate = (slow ? .7 : .95) * (typeof SPEED === "number" ? SPEED : 1);
      speechSynthesis.speak(u); return true;
    } catch (e) { return false; }
  };
  /* la voz del dispositivo en inglés (plx57 la envuelve después; plx121 vuelve a mandar al final) */
  deviceSpeak = function(text, slow){
    var ok = window.PLX_VOZ_EN(text, slow);
    if (!ok) try { toast("Audio no disponible: no hay ninguna voz en inglés en este dispositivo"); } catch (e) {}
    return ok;
  };

  /* el reconocimiento de voz escucha en inglés aunque el módulo pida fr-FR */
  ["SpeechRecognition", "webkitSpeechRecognition"].forEach(function(n){
    var Orig = window[n]; if (typeof Orig !== "function") return;
    try {
      var En = function(){ var r = new Orig(); r.lang = "en-US";
        try { Object.defineProperty(r, "lang", { configurable: true, get: function(){ return "en-US"; }, set: function(){ } }); } catch (e) {}
        return r; };
      En.prototype = Orig.prototype;
      window[n] = En;
    } catch (e) {}
  });
})();
