/* PLEX PLAY 4.51 — PLEX PLAY English: el segundo idioma
   Lo base (idioma activo, progreso separado, voz y descarga del contenido) está en js/idioma.js. Este módulo:
   1. Selector Francés | Inglés (sin banderas) arriba del curso en Inicio y en Perfil › Ajustes. Cambiar guarda,
      sube el progreso y recarga en el otro idioma (PLX_IDIOMA.cambiar).
   2. Tema del inglés: el acento de marca (botones, progreso, chips) pasa del azul a un verde esmeralda; la
      tinta, el oro, el rojo de error y el verde de acierto no cambian. Va en @layer pz, la capa que gana.
   3. En inglés: quita del mapa de cursos los del francés y monta los de cursos-en.js (con sus lecciones y
      ejercicios en LESSONS/ITEMS), elige el curso del inglés, no descarga lecciones extra del francés, y los
      juegos y el 1V1 leen el vocabulario del inglés (__VOCAB_EN) en lugar de vocab.js.
   4. En inglés se esconden las herramientas que hoy solo existen en francés (dictados, sonidos, lecturas,
      simulacros DELF/DALF, acentos, taller, guía, diagnóstico, expresión oral y vocabulario por curso) y la
      tarjeta del diagnóstico de Inicio. Quedan las lecciones, los juegos, Conversa con Manzana, el repaso,
      Mis errores, el 1V1, el Quiz, la tienda y lo social.
   Debe ir antes de plx97. */
(function(){
  "use strict";
  var D = document, H = D.documentElement, EN = window.PLX_LANG === "en", IDI = window.PLX_IDIOMA;
  if (!IDI) return;
  /* 4.73: el inglés queda oculto por ahora (pedido de Jhon: centrarse en el francés). Sin selector; quien estaba en
     inglés vuelve al francés con su progreso intacto (el del inglés se queda guardado en S.alt.en).
     Para volver a mostrarlo: window.PLX_INGLES = true en config.js. */
  if (!window.PLX_INGLES) { if (EN) try { IDI.cambiar("fr"); } catch (e) {} return; }

  /* ====================================================================== 2. tema */
  var CLARO = "--p-azul:#0E9F6E;--p-azul-r:#08694A;--p-azul-tx:#067352;--p-azul-p:#D3F4E6;--p-azul-btn:#087A53;--p-halo-1:rgba(14,159,110,.10);--p-halo-2:rgba(110,220,170,.13)";
  var OSCURO = "--p-azul:#34D399;--p-azul-r:#0A5A40;--p-azul-tx:#8BEBC6;--p-azul-p:#133A30;--p-azul-btn:#087A53;--p-halo-1:rgba(52,211,153,.14);--p-halo-2:rgba(110,220,170,.07)";
  var imp = function(decl){ return decl.split(";").map(function(d){ return d + "!important"; }).join(";"); };
  var st = D.createElement("style"); st.id = "plx121";
  st.textContent = "@layer pz{" +
    "html[data-lang=en]{" + imp(CLARO) + "}" +
    "html[data-lang=en][data-theme=dark]{" + imp(OSCURO) + "}" +
    "@media (prefers-color-scheme:dark){html[data-lang=en]:not([data-theme=light]){" + imp(OSCURO) + "}}" +
    /* selector de idioma */
    ".idi-sel{display:flex;align-items:center;gap:10px;margin:0 0 10px!important}" +
    ".idi-sel>small{font:700 11px/1.2 var(--f-tx)!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:var(--p-apagado)!important}" +
    ".idi-sel .pz-seg{flex:1;max-width:260px}" +
    ".idi-sel .pz-seg button{min-height:38px!important}" +
    ".sets .idi-sel{margin:4px 0 14px!important}" +
    /* en inglés: herramientas que solo existen en francés */
    "html[data-lang=en] #view [data-jx-px=\"7\"],html[data-lang=en] #view [data-jx-px=\"10\"],html[data-lang=en] #view [data-jx-px=\"11\"]," +
    "html[data-lang=en] #view [data-jx-px=\"12\"],html[data-lang=en] #view [data-jx-px=\"14\"],html[data-lang=en] #view [data-jx-px=\"17\"]," +
    "html[data-lang=en] #view [data-jx-px=\"18\"],html[data-lang=en] #view [data-jx-px=\"19\"],html[data-lang=en] #view [data-jx-px=\"20\"]," +
    "html[data-lang=en] #view [data-jx-px=\"22\"],html[data-lang=en] #view [data-jx-px=\"23\"],html[data-lang=en] #view .jx-para[data-jx-act=speak]," +
    "html[data-lang=en] #view .gmain>.rtx,html[data-lang=en] #view .pp-inv{display:none!important}" +
    /* sin Torre Eiffel ni bandera de Francia en inglés */
    "html[data-lang=en] body nav#tabbar.tabbar button.px-navbtn[data-mpk=parcours]::before{background-image:url(img/ic2/mundo.webp)!important}" +
    "html[data-lang=en] #px-rail .rl-b[aria-current=page]{background-image:linear-gradient(120deg,#087A53,#12A673)!important;box-shadow:0 4px 0 #065F41!important}" +
    ".idi-pronto{margin:6px 0 0!important;font:500 13px/1.45 var(--f-tx)!important;color:var(--p-tinta-2)!important}" +
    "}";
  D.head.appendChild(st);

  /* ====================================================================== 1. selector */
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"]/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var selector = function(extra){
    var b = function(l, t){ return '<button type="button" data-idi="' + l + '" aria-pressed="' + (IDI.actual === l) + '">' + t + "</button>"; };
    return '<div class="idi-sel ' + (extra || "") + '"><small>Idioma</small><div class="pz-seg" role="group" aria-label="Idioma que estudias">' + b("fr", "Francés") + b("en", "Inglés") + "</div></div>";
  };
  var pon = function(){
    try {
      var c = D.querySelector("#view .p5-curso");
      if (c && !D.querySelector("#view .idi-inicio")) c.insertAdjacentHTML("beforebegin", selector("idi-inicio"));
      if (EN && c) { var im = c.querySelector('img[src*="ic2/bandera"]'); if (im) im.src = "img/ic2/birrete.webp"; }
      var s = D.querySelector("#view .sets");
      if (s && !s.querySelector(".idi-sel")) {
        var h = s.querySelector("h2");
        var html = selector("idi-ajustes") + (EN ? '<p class="set-note idi-pronto">Estás en PLEX PLAY English. Tu progreso del francés queda guardado y vuelve tal cual al cambiar.</p>' : "");
        if (h) h.insertAdjacentHTML("afterend", html); else s.insertAdjacentHTML("afterbegin", html);
      }
      if (EN) {
        if (!D.querySelector("#view .idi-nota") && typeof view === "string" && view === "retos") {
          var ancla = D.querySelector("#view .p5-compite");
          if (ancla) ancla.insertAdjacentHTML("afterend", '<p class="idi-pronto idi-nota">Dictados, sonidos, lecturas y simulacros llegan al inglés con los próximos cursos. Por ahora: lecciones, juegos, Conversa con Manzana y el repaso.</p>');
        }
      }
    } catch (e) {}
  };
  if (typeof render === "function") { var _r = render; render = function(){ var x = _r.apply(this, arguments); pon(); return x; }; }
  new MutationObserver(function(){ if (D.querySelector("#view .p5-curso, #view .sets")) pon(); }).observe(D.getElementById("view") || D.body, { childList: true, subtree: true });
  addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-idi]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var l = b.getAttribute("data-idi"); if (l === IDI.actual) return;
    try { toast(l === "en" ? "Cambiando a inglés…" : "Cambiando a francés…"); } catch (x) {}
    b.closest(".pz-seg").querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed", String(x === b)); });
    IDI.cambiar(l);
  }, true);

  if (!EN) return;

  /* ====================================================================== 3. cursos del inglés */
  var CURSOS = [
    { id: "en-a1", label: "English A1", sem: "I", semN: 1, cefr: "A1",
      desc: "Aprenderás a saludar y presentarte, hablar de tu familia y de tu día, pedir comida, ubicarte en la ciudad y contar lo que te gusta y lo que sabes hacer, en situaciones cotidianas de nivel A1." }
  ];
  var F = window.__EN_CURSOS || {}, PM = window.PLXM;
  if (typeof TRACKS === "undefined" || typeof LESSONS === "undefined" || !PM || !PM.L) return;
  var i;
  for (i = TRACKS.length - 1; i >= 0; i--) if (!/^en-/.test(TRACKS[i].id)) TRACKS.splice(i, 1);
  for (i = LESSONS.length - 1; i >= 0; i--) if (!/^en-/.test(LESSONS[i].track || "")) LESSONS.splice(i, 1);
  try { COURSE_IDS.clear(); } catch (e) {}
  CURSOS.forEach(function(c){
    if (!F[c.id] || TRACKS.some(function(t){ return t.id === c.id; })) return;
    var secs = F[c.id](PM), tr = { id: c.id, label: c.label, sem: c.sem, semN: c.semN, desc: c.desc, course: secs, lang: "en" }, n = 0;
    TRACKS.push(tr);
    try { COURSE_IDS.add(c.id); } catch (e) {}
    try { if (typeof CEFR_OF === "object") CEFR_OF[c.id] = c.cefr; } catch (e) {}
    secs.forEach(function(s){ s.units.forEach(function(u){ u.lessons.forEach(function(l){
      l.track = c.id; l.sec = s.id; l.unit = u.title; l.n = String(++n).padStart(2, "0");
      l.theory = String(l.theory || "").replace(/lang="fr"/g, 'lang="en"');
      LESSONS.push(l);
      l.items.forEach(function(it, k){ it.t = it.t || l.t; ITEMS[l.id + ":" + k] = { it: it, l: l }; });
    }); }); });
  });
  /* el curso abierto debe ser del inglés */
  try { if (!COURSE_IDS.has(track)) { track = TRACKS[0] ? TRACKS[0].id : "en-a1"; try { localStorage.setItem("cr-track", track); } catch (e) {} } } catch (e) {}
  /* nada de lecciones extra del francés en segundo plano */
  try { var MV = window.PLX_MAS_V || {}; Object.keys(MV).forEach(function(k){ if (!/^en-/.test(k)) delete MV[k]; }); } catch (e) {}
  /* plx37 espera la teoría y las explicaciones del francés antes de abrir una lección: en inglés ya vienen con
     cada lección (PLXM.L las escribe), así que se dan por cargadas sin bajar teoria.js ni explica.js */
  try {
    if (!window.__TEORIA) window.__TEORIA = {};
    var EX = window.__EXPLICA = window.__EXPLICA || {}, nEx = Object.keys(EX).length;
    for (i = 0; nEx + i <= 51; i++) EX["_en-relleno-" + i] = { idea: "", pasos: [], ej: [] };
  } catch (e) {}
  /* juegos y 1V1: el vocabulario es el del inglés */
  try {
    var VEN = window.__VOCAB_EN || {};
    if (window.PLXG) { PLXG.vocab = function(){ window.__VOCAB = VEN; return Promise.resolve(VEN); }; }
    window.__VOCAB = VEN;
  } catch (e) {}
  /* la voz: plx57 envolvió deviceSpeak para usar la voz nativa de Android (que es francesa); en inglés se usa
     siempre la del navegador en inglés, y el mp3 cuando existe (audio-en.js) */
  try {
    deviceSpeak = function(text, slow){ var ok = window.PLX_VOZ_EN && PLX_VOZ_EN(text, slow); if (!ok) try { toast("Audio no disponible: no hay ninguna voz en inglés en este dispositivo"); } catch (e) {} return !!ok; };
  } catch (e) {}
  /* el diagnóstico MCER y «desde cero» son del francés (llevan a sus cursos): en inglés se empieza por English A1 */
  try {
    var sinDiag = function(){
      try { if (typeof P !== "undefined" && P) return; } catch (e) {}
      try { track = "en-a1"; localStorage.setItem("cr-track", "en-a1"); } catch (e) {}
      try { toast("El diagnóstico de inglés llega con los próximos cursos. Empieza por English A1."); } catch (e) {}
      try { go("parcours"); } catch (e) {}
    };
    if (window.PLX_DIAG) { PLX_DIAG.abrir = sinDiag; PLX_DIAG.desdeCero = sinDiag; }
    if (window.PLX_DIAG2) PLX_DIAG2.abrir = sinDiag;
    if (typeof startPlacement === "function") startPlacement = sinDiag;
  } catch (e) {}
  /* Manzana anima en inglés: frases del núcleo (SAY), niveles del gato y el cierre de la lección */
  try {
    var pon2 = function(arr, nuevas){ if (Array.isArray(arr)) arr.splice.apply(arr, [0, arr.length].concat(nuevas)); };
    if (typeof SAY === "object") {
      pon2(SAY.ok, ["Great job!", "Awesome!", "Perfect!", "Nice!", "Well done!", "You got it!", "Excellent!"]);
      pon2(SAY.ko, ["No worries, try again!", "Almost!", "Keep going!", "You'll get it!"]);
      pon2(SAY.home, ["You can do it!", "One lesson and let's go!", "Let's practice together!", "Every day counts!", "Ready for some English?"]);
      pon2(SAY.theory, ["Read the rule, then practice!", "Take your time, it's important.", "Look at the examples!"]);
    }
    if (typeof TIERS !== "undefined" && Array.isArray(TIERS)) ["Little Cat", "Curious", "Studious", "Explorer", "Expert", "Wise"].forEach(function(n, k){ if (TIERS[k]) TIERS[k][1] = n; });
  } catch (e) {}
  var FRASES = { "Sans faute ! Bravo !": "Perfect score! Bravo!", "Bien ! On révisera les erreurs.": "Nice! We'll review your mistakes.",
    "Courage ! Les erreurs reviendront dans ton repaso.": "Keep going! Your mistakes will come back in your review.",
    "Petit Chat": "Little Cat", "Curieux": "Curious", "Studieux": "Studious", "Explorateur": "Explorer", "Sage": "Wise", "Maître": "Master" };
  /* iconos con la Torre Eiffel o la bandera de Francia (riel, Perfil, tarjetas) */
  var ICONO = { "torre-eiffel": "mundo", "bandera": "birrete" };
  var traduce = function(){
    try {
      ["player", "view", "p5-lado", "px-rail"].forEach(function(id){
        var raiz = D.getElementById(id); if (!raiz) return;
        var w = D.createTreeWalker(raiz, NodeFilter.SHOW_TEXT), x;
        while ((x = w.nextNode())) { var t = x.nodeValue.trim(); if (t && FRASES[t]) x.nodeValue = x.nodeValue.replace(t, FRASES[t]); }
        raiz.querySelectorAll('img[src*="ic2/torre-eiffel"], img[src*="ic2/bandera"]').forEach(function(im){
          im.src = im.getAttribute("src").replace(/ic2\/(torre-eiffel|bandera)\./, function(_, k){ return "ic2/" + ICONO[k] + "."; });
        });
      });
    } catch (e) {}
  };
  /* saludo de Manzana */
  var SAL = [[/Bonjour\s*!/g, "Hey there!"], [/Bonsoir\s*!/g, "Good evening!"], [/Salut\s*!/g, "Hi!"]];
  var saluda = function(){
    try {
      D.querySelectorAll("#view .greet h1, #view .greet b, #view .gr-hola, #view .p5-hola, .pclogin h1").forEach(function(e){
        if (e.children.length) return;
        var t = e.textContent, n = t; SAL.forEach(function(p){ n = n.replace(p[0], p[1]); });
        if (n !== t) e.textContent = n;
      });
    } catch (e) {}
  };
  var pend = 0;
  new MutationObserver(function(){ if (pend) return; pend = requestAnimationFrame(function(){ pend = 0; saluda(); traduce(); }); }).observe(D.body, { childList: true, subtree: true });
  window.PLX_EN = { cursos: CURSOS };
})();
