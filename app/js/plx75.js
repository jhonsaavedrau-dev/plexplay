/* PLEX PLAY 3.3.0 — Diagnóstico MCER por competencias, ruta personalizada e inicio en tres pasos
   Diagnóstico (reemplaza la «Prueba de nivel» de 20 preguntas de opción múltiple)
   - Cuatro bloques, uno por competencia, y en cada uno se sube de nivel (A1 → C1) mientras se acierta:
       Comprensión de lectura (Reading): ejercicios de opción múltiple con su contexto.
       Comprensión auditiva (Listening): suena una frase de los dictados y se elige cuál se oyó (no se ve escrita).
       Expresión escrita (Writing): se escribe la palabra que falta (las tildes no hunden, pero se señalan).
       Expresión oral (Speaking): se lee una frase en voz alta y el micrófono la puntúa (spScore, 75 %).
         Si el dispositivo no puede escuchar, se escucha el modelo y uno mismo se califica (queda marcado).
   - Dos preguntas por nivel (una en Speaking). Las dos bien: nivel superado y se sigue. Una: «en camino» y se
     para. Ninguna: se para. Así un principiante termina en ~3 minutos y un C1 en ~12.
   - Resultado: un nivel por competencia, un nivel global (la media redondeada hacia abajo), fortalezas y
     dificultades. Todo se guarda en S.game.diag y viaja con el progreso a la nube.
   Ruta personalizada (S.game.ruta)
   - Curso recomendado según el nivel global (el siguiente al que ya se domina) y su próxima lección.
   - Refuerzo para la competencia más baja y mantenimiento para la más alta, con actividades que ya existen
     (dictados, Audio Hunt, taller, Spell Builder, pronunciación, Voice Duel, guía, Language Detective).
   - Tarjeta «Tu ruta» en Inicio: tres pasos para hoy, con su visto al hacerlos, y la fecha sugerida para
     repetir el diagnóstico (4 semanas).
   Inicio para nuevos usuarios
   - Al terminar la bienvenida (nombre, gato y meta) sale una sola pantalla que explica cómo funciona:
     1 diagnóstico → 2 tu ruta → 3 practica cada día. Desde ahí se hace el diagnóstico o se empieza de cero
     con «Primeros pasos». El recorrido largo de 7 pantallas ya no sale solo (sigue en Ajustes). */
(function(){
  "use strict";
  if (typeof LESSONS === "undefined" || typeof ITEMS === "undefined" || typeof gEnsure !== "function" || typeof save !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var mezcla = function(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var plano = function(h){ var d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  var sinTilde = function(s){ return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, ""); };
  var nrm = function(s){ return String(s || "").normalize("NFC").replace(/[’`´]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?…]+$/, "").toLowerCase(); };

  var NIV = ["Pre-A1", "A1", "A2", "B1", "B2", "C1"];
  var DESC = ["Estás empezando", "Usuario básico", "Usuario básico", "Usuario independiente", "Usuario independiente", "Usuario competente"];
  var LV = { pp: 0, a1: 1, a2: 2, fon: 2, b11: 3, b12: 3, b21: 4, rem: 4, prog: 5, c12: 5, lit: 5 };
  var COMP = [
    { k: "R", n: "Comprensión de lectura", en: "Reading", ic: "📖", d: "Lee y elige la respuesta correcta." },
    { k: "L", n: "Comprensión auditiva", en: "Listening", ic: "🎧", d: "Escucha la frase y elige la que oíste. No la verás escrita." },
    { k: "W", n: "Expresión escrita", en: "Writing", ic: "✍️", d: "Escribe la palabra que falta." },
    { k: "S", n: "Expresión oral", en: "Speaking", ic: "🎙️", d: "Lee la frase en voz alta. Manzana te escucha." }
  ];
  var CN = {}; COMP.forEach(function(c){ CN[c.k] = c; });
  /* curso para estudiar según el nivel ya dominado */
  var CURSO = { 0: "pp", 1: "a2", 2: "b11", 3: "b21", 4: "prog", 5: "c12" };

  /* ---------------- banco de preguntas (sale de las lecciones) ---------------- */
  var BANCO = null;
  var banco = function(){
    if (BANCO) return BANCO;
    BANCO = { R: {}, L: {}, W: {}, S: {} };
    for (var n = 1; n <= 5; n++) { BANCO.R[n] = []; BANCO.L[n] = []; BANCO.W[n] = []; BANCO.S[n] = []; }
    var dict = {};
    Object.keys(ITEMS).forEach(function(key){
      var x = ITEMS[key], it = x.it, l = x.l, n = LV[l.track]; if (!n || l.special || l.project) return;
      if (it.k === "choice" && it.o && it.o.length >= 3 && !it.say && it.q && plano(it.q).length > 6) BANCO.R[n].push(key);
      if (it.k === "fill" && it.acc && it.acc.length && /_{2,}/.test(it.q || "") && it.acc[0].length <= 24) BANCO.W[n].push(key);
      if (it.k === "listen" && it.dict && it.say && !it.num) { var w = it.say.split(" ").length; if (w >= 3 && w <= 16) (dict[n] = dict[n] || []).push(it.say); }
    });
    Object.keys(dict).forEach(function(n){ BANCO.L[n] = dict[n].filter(function(s, i, a){ return a.indexOf(s) === i; }); });
    if (typeof SPEAK_BANK !== "undefined") Object.keys(SPEAK_BANK).forEach(function(tr){ var n = LV[tr]; if (n) SPEAK_BANK[tr].forEach(function(k){ BANCO.S[n].push(k); }); });
    /* niveles sin dictados propios: se toman del nivel vecino */
    for (var m = 1; m <= 5; m++) if (BANCO.L[m].length < 3) BANCO.L[m] = BANCO.L[m].concat(BANCO.L[m - 1] || [], BANCO.L[m + 1] || []);
    return BANCO;
  };
  var distractores = function(frase, n){
    var B = banco(), todas = [], len = frase.length;
    for (var k = Math.max(1, n - 1); k <= Math.min(5, n + 1); k++) todas = todas.concat(B.L[k]);
    todas = todas.filter(function(s){ return s !== frase && Math.abs(s.length - len) < len * .6; });
    /* las más parecidas en largo, pero que empiecen distinto */
    todas.sort(function(a, b){ return Math.abs(a.length - len) - Math.abs(b.length - len); });
    var out = [];
    todas.slice(0, 12).forEach(function(s){ if (out.length < 2 && s.split(" ")[0] !== frase.split(" ")[0] || out.length < 2 && todas.length < 6) if (out.indexOf(s) < 0) out.push(s); });
    return out;
  };

  /* ---------------- estado de una prueba ---------------- */
  var D = null, capa = null;
  var POR = { R: 2, L: 2, W: 2, S: 1 };
  var nuevo = function(){ return { ci: -1, lvl: 1, qi: 0, ok: 0, usados: {}, res: { R: {}, L: {}, W: {}, S: {} }, fin: {}, self: false, t0: Date.now(), q: null, fase: "intro" }; };
  var pregunta = function(){
    var c = COMP[D.ci].k, B = banco()[c][D.lvl] || [], libres = B.filter(function(k){ return !D.usados[k]; });
    var k = mezcla(libres.length ? libres : B)[0]; if (k == null) return null;
    D.usados[k] = 1;
    if (c === "L") { var ops = mezcla([k].concat(distractores(k, D.lvl))); return { c: c, frase: k, ops: ops, ok: ops.indexOf(k), rep: 0 }; }
    var it = (typeof getItem === "function" ? getItem(k) : ITEMS[k].it) || ITEMS[k].it;
    if (c === "R") { var ord = mezcla(it.o.map(function(_, i){ return i; })); return { c: c, key: k, it: it, ord: ord }; }
    if (c === "W") return { c: c, key: k, it: it };
    return { c: c, key: k, it: it, say: it.say };
  };
  var cierraComp = function(){
    var c = COMP[D.ci].k, r = D.res[c], lvl = 0, camino = 0;
    for (var n = 1; n <= 5; n++) {
      if (!r[n]) break;
      if (r[n].ok >= r[n].n) lvl = n; else { if (r[n].ok > 0 || r[n].parcial) camino = n; break; }
    }
    D.fin[c] = { lvl: lvl, camino: camino };
  };
  var avanza = function(acerto, parcial){
    var c = COMP[D.ci].k, r = D.res[c][D.lvl] || (D.res[c][D.lvl] = { n: 0, ok: 0 });
    r.n++; if (acerto) r.ok++; if (parcial) r.parcial = true;
    if (r.n < POR[c]) return siguiente();
    if (r.ok >= POR[c] && D.lvl < 5) { D.lvl++; return siguiente(); }
    cierraComp();
    return bloque(D.ci + 1);
  };
  var siguiente = function(){ D.q = pregunta(); if (!D.q) { cierraComp(); return bloque(D.ci + 1); } D.fase = "q"; D.resp = null; pinta(); };
  var bloque = function(i){
    D.ci = i; D.lvl = 1;
    if (i >= COMP.length) return termina();
    D.fase = "bloque"; pinta();
  };
  var termina = function(){
    var G = gEnsure(), fin = D.fin, medidas = COMP.filter(function(c){ return !(fin[c.k] || {}).saltada; }), vals = (medidas.length ? medidas : COMP).map(function(c){ return (fin[c.k] || { lvl: 0 }).lvl; });
    var glob = Math.floor(vals.reduce(function(a, b){ return a + b; }, 0) / vals.length);
    var orden = (medidas.length ? medidas : COMP).map(function(c){ return c.k; }).sort(function(a, b){ return fin[b].lvl - fin[a].lvl || fin[b].camino - fin[a].camino; });
    var fuerte = orden[0], debil = orden[orden.length - 1];
    if (fin[fuerte].lvl === fin[debil].lvl && fin[fuerte].camino === fin[debil].camino) fuerte = null;
    G.diag = { at: typeof dkey === "function" ? dkey() : new Date().toISOString().slice(0, 10), comp: fin, global: glob, fuerte: fuerte, debil: debil, self: D.self, min: Math.max(1, Math.round((Date.now() - D.t0) / 60000)) };
    G.ruta = rutaDe(G.diag);
    /* compatibilidad: la vieja tarjeta «¿Por dónde empiezo?» se esconde cuando hay resultado */
    G.placement = { at: G.diag.at, pct: Math.round(glob / 5 * 100), course: G.ruta.curso, weak: [], byU: {}, rec: G.ruta.leccion ? [G.ruta.leccion] : [], units: 0 };
    try { track = G.ruta.curso; lsSet("cr-track", track); } catch (e) {}
    try { if (typeof addXP === "function") { addXP(30); } } catch (e) {}
    save(true);
    D.fase = "fin"; pinta();
  };

  /* ---------------- la ruta ---------------- */
  var ACT = {
    R: [["guia", "Guía rápida", "Repasa las fichas de lo esencial antes de leer"], ["ld", "Language Detective", "Encuentra el error en frases reales"]],
    L: [["ah", "Audio Hunt", "Escucha y encuentra: entrena el oído en 2 minutos"], ["dict", "Dictados", "Textos leídos por grupos, palabra por palabra"]],
    W: [["taller", "Taller de escritura", "Escribe un texto corto y recibe correcciones"], ["sb", "Spell Builder", "Deletrea con tildes, sin perder puntos"]],
    S: [["speak", "Pronunciación", "Lee 8 frases y el micrófono te dice qué mejorar"], ["vd", "Voice Duel", "Dilo en voz alta contra Manzana"]]
  };
  var etiquetaCurso = function(tr){ var t = TRACKS.find(function(x){ return x.id === tr; }); return t ? t.label : tr; };
  var proxima = function(tr){ var l = LESSONS.find(function(x){ return x.track === tr && !x.special && !(S.lessons[x.id] && S.lessons[x.id].done); }); return l || null; };
  var rutaDe = function(d){
    var cur = CURSO[d.global] || "a1";
    if (d.global === 0 && ((d.comp.R || {}).camino || (d.comp.W || {}).camino)) cur = "a1";   /* algo sabe: A1, no Primeros pasos */
    if (!TRACKS.some(function(t){ return t.id === cur; })) cur = "a1";
    var l = proxima(cur);
    return { curso: cur, leccion: l ? l.id : null, debil: d.debil, fuerte: d.fuerte, repetir: new Date(Date.now() + 28 * 864e5).toISOString().slice(0, 10), hecho: {} };
  };
  var pasosHoy = function(G){
    var R = G.ruta; if (!R) return [];
    var l = proxima(R.curso), hoy = typeof dkey === "function" ? dkey() : "", hechos = (R.hecho && R.hecho[hoy]) || [], acts = ((S.days || {})[hoy] || {}).acts || [];
    var dia = new Date().getDate() % 2, ps = [];
    ps.push({ id: "lec", t: l ? "Lección: " + plano(l.title) : "Repasa tu curso", sub: etiquetaCurso(R.curso), a: l ? "lec:" + l.id : "curso", ok: l ? acts.indexOf("L:" + l.id) >= 0 || hechos.indexOf("lec") >= 0 : false });
    var a = ACT[R.debil][dia];
    ps.push({ id: "deb", t: a[1], sub: "Refuerza: " + CN[R.debil].n.toLowerCase() + " · " + a[2], a: "act:" + a[0], ok: hechos.indexOf("deb") >= 0 });
    if (R.fuerte && R.fuerte !== R.debil) { var f = ACT[R.fuerte][1 - dia]; ps.push({ id: "fue", t: f[1], sub: "Mantén tu fuerte: " + CN[R.fuerte].n.toLowerCase(), a: "act:" + f[0], ok: hechos.indexOf("fue") >= 0 }); }
    else { ps.push({ id: "rep", t: "Repaso del día", sub: "Lo que toca repasar hoy para no olvidarlo", a: "act:repaso", ok: hechos.indexOf("rep") >= 0 }); }
    return ps;
  };
  var marca = function(id){ var G = gEnsure(), hoy = dkey(); if (!G.ruta) return; G.ruta.hecho = G.ruta.hecho || {}; var a = G.ruta.hecho[hoy] || (G.ruta.hecho[hoy] = []); if (a.indexOf(id) < 0) a.push(id); Object.keys(G.ruta.hecho).forEach(function(k){ if (k < hoy && Object.keys(G.ruta.hecho).length > 14) delete G.ruta.hecho[k]; }); save(); };
  var clicTemp = function(attr, val){ var b = document.createElement("button"); b.setAttribute(attr, val); b.style.display = "none"; document.body.appendChild(b); b.click(); b.remove(); };
  var hace = function(a){
    if (a.indexOf("lec:") === 0) { if (typeof openLesson === "function") openLesson(a.slice(4)); return; }
    if (a === "curso") { try { track = gEnsure().ruta.curso; lsSet("cr-track", track); } catch (e) {} if (typeof go === "function") go("lecciones"); return; }
    var k = a.slice(4);
    if (k === "repaso") { if (typeof startPractice === "function") startPractice(); return; }
    if (k === "guia") return go("guia");
    if (k === "taller") return go("atelier");
    if (k === "dict") return clicTemp("data-dzgo", "dictee");
    if (k === "speak") { if (typeof startSpeak === "function") startSpeak(); return; }
    if (window.PLXG && PLXG.arcade && PLXG.juegos && PLXG.juegos[k]) { try { lsSet("plxg-juego", k); } catch (e) {} PLXG.arcade(null, k); return; }
    go("retos");
  };

  /* ---------------- pantalla ---------------- */
  var abre = function(){
    if (!capa) {
      capa = document.createElement("div"); capa.className = "dgx"; capa.setAttribute("role", "dialog"); capa.setAttribute("aria-modal", "true"); capa.setAttribute("aria-label", "Diagnóstico");
      document.body.appendChild(capa);
      new MutationObserver(function(){ if (capa.hasAttribute("inert")) capa.removeAttribute("inert"); }).observe(capa, { attributes: true, attributeFilter: ["inert"] });
      capa.addEventListener("click", alClic); capa.addEventListener("keydown", alTecla);
    }
    capa.hidden = false; document.body.style.overflow = "hidden";
  };
  var cierra = function(){ try { stopAudio(); } catch (e) {} if (capa) { capa.hidden = true; capa.innerHTML = ""; } document.body.style.overflow = ""; D = null; try { render(); } catch (e) {} };
  var gato = function(m){ try { return catSVG(gEnsure().cat, { mood: m || "happy" }); } catch (e) { return ""; } };
  var barra = function(){
    if (!D || D.ci < 0) return "";
    return '<div class="dgx-prog">' + COMP.map(function(c, i){ return '<span class="' + (i < D.ci ? "ok" : i === D.ci ? "on" : "") + '"><i>' + c.ic + "</i><b>" + c.en + "</b></span>"; }).join("") + "</div>";
  };
  var marco = function(cuerpo, pie){
    return '<div class="dgx-top"><button class="dgx-x" data-dgx="salir" aria-label="Salir">✕</button><b>Diagnóstico</b><span>' + (D && D.ci >= 0 && D.ci < 4 ? "Nivel " + NIV[D.lvl] + " · " + CN[COMP[D.ci].k].en : "MCER · A1 a C1") + "</span></div>" +
      barra() + '<div class="dgx-body"><div class="dgx-wrap">' + cuerpo + "</div></div>" + (pie ? '<div class="dgx-pie"><div class="dgx-wrap">' + pie + "</div></div>" : "");
  };
  var pinta = function(){
    if (!D || !capa) return;
    var html = "";
    if (D.fase === "intro") {
      html = marco('<div class="dgx-hero">' + gato("excited") + '<div><small>Antes de empezar</small><h1>Tu diagnóstico de francés</h1><p>Mido tus cuatro habilidades por separado, de A1 a C1, como en el Marco Común Europeo (MCER). Con eso armo tu ruta.</p></div></div>' +
        '<ul class="dgx-4">' + COMP.map(function(c){ return "<li><i>" + c.ic + "</i><div><b>" + c.n + " <small>" + c.en + "</small></b><span>" + c.d + "</span></div></li>"; }).join("") + "</ul>" +
        '<p class="dgx-nota">Las preguntas suben de nivel mientras aciertes y paran cuando se ponen difíciles. Dura entre 3 y 12 minutos. No hay vidas ni se pierde XP: responde lo que sepas.</p>' +
        '<p class="dgx-nota">Para la parte oral necesitas el micrófono. Si estás en un lugar con ruido, podrás calificarte tú.</p>',
        '<button class="gbtn wide" data-dgx="empezar" data-autofocus>Empezar el diagnóstico</button><button class="gbtn ghost wide" data-dgx="cero">Nunca he estudiado francés: empezar desde cero</button>');
    } else if (D.fase === "bloque") {
      var c = COMP[D.ci];
      html = marco('<div class="dgx-bloque"><span class="dgx-num">' + (D.ci + 1) + " de 4</span><i>" + c.ic + "</i><h2>" + c.n + "</h2><small>" + c.en + "</small><p>" + c.d + "</p>" +
        (c.k === "L" ? '<p class="dgx-nota">Sube el volumen. Puedes repetir el audio dos veces.</p>' : "") +
        (c.k === "S" && !habla() ? '<p class="dgx-nota">Este dispositivo no puede escucharte: oirás el modelo, lo repetirás y te calificarás tú.</p>' : "") + "</div>",
        '<button class="gbtn wide" data-dgx="seguir" data-autofocus>Comenzar</button>' + (D.ci > 0 ? '<button class="gbtn ghost wide" data-dgx="saltar">Saltar esta habilidad</button>' : ""));
    } else if (D.fase === "q" || D.fase === "fb") html = marco(preguntaHTML(), pieHTML());
    else if (D.fase === "fin") html = resultadoHTML();
    capa.innerHTML = html;
    var f = capa.querySelector("input:not([disabled]),[data-autofocus]"); if (f) setTimeout(function(){ try { f.focus({ preventScroll: true }); } catch (e) {} }, 60);
    if (D.fase === "q" && D.q.c === "L" && !D.q.sono) { D.q.sono = 1; setTimeout(function(){ oir(false); }, 350); }
  };
  var habla = function(){ try { return typeof speechSupport === "function" && speechSupport() && typeof speechListen === "function"; } catch (e) { return false; } };
  var oir = function(lento){ try { speak(D.q.frase || D.q.say, lento ? .7 : undefined); } catch (e) {} };
  var preguntaHTML = function(){
    var q = D.q, fb = D.fase === "fb", h = "";
    if (q.c === "R") {
      var it = q.it;
      h = (it.ask ? '<p class="dgx-ask">' + it.ask + "</p>" : "") + (it.ctx ? '<div class="dgx-ctx">' + it.ctx + "</div>" : "") + '<p class="dgx-q" lang="fr">' + String(it.q).replace(/_{2,}/g, '<span class="dgx-hueco">___</span>') + "</p>" +
        '<div class="dgx-ops">' + q.ord.map(function(oi, j){ var cl = fb ? (oi === it.a ? " ok" : D.resp === oi ? " ko" : "") : D.resp === oi ? " sel" : ""; return '<button class="dgx-op' + cl + '" data-dgx="op" data-i="' + oi + '"' + (fb ? " disabled" : "") + ' lang="fr"><small>' + (j + 1) + "</small>" + it.o[oi] + "</button>"; }).join("") + "</div>";
    } else if (q.c === "L") {
      h = '<p class="dgx-ask">¿Qué frase oíste?</p><div class="dgx-oir"><button class="dgx-play" data-dgx="oir" aria-label="Escuchar otra vez"' + (q.rep >= 2 || fb ? " disabled" : "") + '><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><small>' + (q.rep >= 2 ? "Ya no quedan repeticiones" : "Puedes repetirlo " + (2 - q.rep) + (2 - q.rep === 1 ? " vez" : " veces")) + "</small></div>" +
        '<div class="dgx-ops">' + q.ops.map(function(s, i){ var cl = fb ? (i === q.ok ? " ok" : D.resp === i ? " ko" : "") : D.resp === i ? " sel" : ""; return '<button class="dgx-op' + cl + '" data-dgx="op" data-i="' + i + '"' + (fb ? " disabled" : "") + ' lang="fr"><small>' + (i + 1) + "</small>" + esc(s) + "</button>"; }).join("") + "</div>";
    } else if (q.c === "W") {
      var w = q.it, partes = String(w.q).split(/_{2,}/);
      h = (w.ask ? '<p class="dgx-ask">' + w.ask + "</p>" : "") + (w.ctx ? '<div class="dgx-ctx">' + w.ctx + "</div>" : "") +
        '<p class="dgx-q dgx-esc" lang="fr">' + partes[0] + '<input id="dgxIn" autocomplete="off" autocapitalize="off" spellcheck="false" lang="fr" aria-label="Respuesta" value="' + esc(D.resp || "") + '"' + (fb ? " disabled" : "") + ">" + partes.slice(1).join("___") + "</p>" +
        '<div class="dgx-tildes">' + "é è ê à ç ù ô î û ë œ".split(" ").map(function(t){ return '<button data-dgx="tilde" data-t="' + t + '"' + (fb ? " disabled" : "") + ">" + t + "</button>"; }).join("") + "</div>";
    } else {
      h = '<p class="dgx-ask">Lee la frase en voz alta.</p><p class="dgx-q dgx-decir" lang="fr">' + esc(q.say) + '</p><div class="dgx-oir"><button class="gbtn ghost sm" data-dgx="modelo">🔊 Escuchar el modelo</button></div>' +
        (habla() && !q.self ? '<div class="dgx-mic"><button class="dgx-micb' + (q.grabando ? " rec" : "") + '" data-dgx="mic" aria-label="Hablar"' + (fb ? " disabled" : "") + '><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"/></svg></button><p aria-live="polite">' +
          (q.err ? esc(q.err) : q.sc ? "Reconocí el <b>" + q.sc.pct + " %</b> de la frase." : q.grabando ? "Te escucho… lee la frase ahora" : "Toca el micrófono y lee la frase") + "</p>" +
          (q.sc ? '<p class="dgx-pal" lang="fr">' + q.sc.words.map(function(x, i){ return '<span class="' + (q.sc.hit[i] ? "ok" : "ko") + '">' + esc(x) + "</span>"; }).join(" ") + "</p>" : "") + "</div>" +
          (q.err ? '<div class="dgx-self"><button class="gbtn ghost sm" data-dgx="selfmodo">Calificarme yo</button></div>' : "")
        : '<div class="dgx-self"><p>Escucha el modelo, repítelo en voz alta y sé sincero:</p><button class="gbtn ghost sm" data-dgx="self" data-v="2">Lo dije bien</button><button class="gbtn ghost sm" data-dgx="self" data-v="1">Más o menos</button><button class="gbtn ghost sm" data-dgx="self" data-v="0">Me costó</button></div>');
    }
    if (fb) h += '<div class="dgx-fb ' + (D.ok ? "ok" : "ko") + '"><b>' + (D.ok ? "¡Bien!" : "No era esa") + "</b>" + (D.nota ? "<span>" + D.nota + "</span>" : "") + "</div>";
    return h;
  };
  var pieHTML = function(){
    var q = D.q;
    if (D.fase === "fb") return '<button class="gbtn wide" data-dgx="sig" data-autofocus>Continuar</button>';
    if (q.c === "S") return q.sc ? '<button class="gbtn wide" data-dgx="comprobar">Continuar</button>' : '<button class="gbtn ghost wide" data-dgx="nose">No puedo hablar ahora</button>';
    return '<button class="gbtn wide" data-dgx="comprobar"' + (D.resp == null || D.resp === "" ? " disabled" : "") + ">Comprobar</button>" + '<button class="gbtn ghost wide" data-dgx="nose">No lo sé</button>';
  };
  var califica = function(nose){
    var q = D.q, ok = false; D.nota = "";
    if (nose) ok = false;
    else if (q.c === "R") ok = D.resp === q.it.a;
    else if (q.c === "L") { ok = D.resp === q.ok; if (!ok) D.nota = "Sonó: <i lang='fr'>" + esc(q.frase) + "</i>"; }
    else if (q.c === "W") {
      var r = nrm(D.resp), acc = q.it.acc.map(nrm);
      ok = acc.indexOf(r) >= 0;
      if (!ok && acc.map(sinTilde).indexOf(sinTilde(r)) >= 0) { ok = true; D.nota = "Cuenta, pero ojo con la tilde: <b lang='fr'>" + esc(q.it.acc[0]) + "</b>"; }
      else if (!ok) D.nota = "Era <b lang='fr'>" + esc(q.it.acc[0]) + "</b>";
    } else { var p = q.sc ? q.sc.pct : 0; ok = p >= (typeof SP_PASS === "number" ? SP_PASS : 75); D.parcial = !ok && p >= 50; }
    if (q.c === "R" && !ok && q.it.o) D.nota = "Era <b lang='fr'>" + q.it.o[q.it.a] + "</b>";
    D.ok = ok;
    if (q.c === "S") return avanza(ok, D.parcial);
    D.fase = "fb"; pinta();
  };
  var escucha = async function(){
    var q = D.q; if (q.grabando) { try { spStopRec && spStopRec(); } catch (e) {} try { spRec && spRec.stop(); } catch (e) {} return; }
    q.grabando = true; q.err = ""; pinta();
    try { stopAudio(); } catch (e) {}
    try {
      if (typeof webMicPermission === "function" && !(window.PlexAndroid && PlexAndroid.startListening)) { var w = await webMicPermission(); if (w !== "ok") throw new Error(w); }
      var alts = await speechListen(q.say), best = null;
      (alts || []).forEach(function(a){ var sc = spScore(q.say, a); if (!best || sc.pct > best.pct) { best = sc; } });
      q.sc = best || { pct: 0, hit: [], words: [] };
    } catch (e) { q.err = (typeof spErrText === "function" ? spErrText(String(e && e.message || "")).t : "") || "No pude escucharte."; }
    q.grabando = false; if (D && D.q === q) pinta();
  };
  var alClic = function(e){
    var b = e.target.closest("[data-dgx]"); if (!b || b.disabled) return;
    e.preventDefault(); e.stopPropagation();
    var a = b.dataset.dgx;
    if (a === "salir") { if (D && D.fase !== "fin" && D.ci >= 0 && !confirm("¿Salir del diagnóstico? Se pierde lo que llevas.")) return; return cierra(); }
    if (a === "empezar") return bloque(0);
    if (a === "cero") { cierra(); return desdeCero(); }
    if (a === "seguir") return siguiente();
    if (a === "saltar") { D.fin[COMP[D.ci].k] = { lvl: 0, camino: 0, saltada: true }; return bloque(D.ci + 1); }
    if (a === "op") { D.resp = +b.dataset.i; pinta(); return; }
    if (a === "tilde") { var inp = capa.querySelector("#dgxIn"); if (inp) { var s = inp.selectionStart || inp.value.length; inp.value = inp.value.slice(0, s) + b.dataset.t + inp.value.slice(inp.selectionEnd || s); D.resp = inp.value; inp.focus(); try { inp.setSelectionRange(s + 1, s + 1); } catch (x) {} capa.querySelector("[data-dgx=comprobar]").disabled = !D.resp; } return; }
    if (a === "oir") { if (D.q.rep < 2) { D.q.rep++; oir(false); pinta(); } return; }
    if (a === "modelo") return oir(false);
    if (a === "mic") return escucha();
    if (a === "selfmodo") { D.q.self = true; D.self = true; pinta(); return; }
    if (a === "self") { D.self = true; var v = +b.dataset.v; D.q.sc = { pct: v === 2 ? 80 : v === 1 ? 60 : 20, hit: [], words: [] }; return avanza(v === 2, v === 1); }
    if (a === "comprobar") { if (D.q.c === "W") D.resp = (capa.querySelector("#dgxIn") || {}).value || ""; return califica(false); }
    if (a === "nose") { if (D.q.c === "S") { D.sinOral = true; D.fin.S = { lvl: 0, camino: 0, saltada: true }; return bloque(D.ci + 1); } return califica(true); }
    if (a === "sig") return avanza(D.ok, false);
    if (a === "ruta") { cierra(); go("parcours"); setTimeout(function(){ var c = document.querySelector(".rtx"); if (c) c.scrollIntoView({ behavior: "smooth", block: "center" }); }, 400); return; }
    if (a === "hacer") { var x = b.dataset.a; if (b.dataset.id) marca(b.dataset.id); cierra(); return hace(x); }
  };
  var alTecla = function(e){
    e.stopPropagation();
    if (!D) return;
    if (e.key === "Escape") return alClic({ target: capa.querySelector("[data-dgx=salir]"), preventDefault: function(){}, stopPropagation: function(){} });
    if (e.target && e.target.id === "dgxIn") { D.resp = e.target.value; var cb = capa.querySelector("[data-dgx=comprobar]"); if (cb) cb.disabled = !e.target.value.trim(); if (e.key === "Enter" && e.target.value.trim()) { e.preventDefault(); D.resp = e.target.value; califica(false); } return; }
    if (D.fase === "q" && /^[1-5]$/.test(e.key)) { var bs = capa.querySelectorAll("[data-dgx=op]"), b = bs[+e.key - 1]; if (b) b.click(); return; }
    if (e.key === "Enter") { var p = capa.querySelector(".dgx-pie .gbtn:not([disabled])"); if (p && document.activeElement && !document.activeElement.closest(".dgx-pie")) { e.preventDefault(); p.click(); } }
  };
  capaInput();
  function capaInput(){ document.addEventListener("input", function(e){ if (D && e.target && e.target.id === "dgxIn") { D.resp = e.target.value; var cb = capa.querySelector("[data-dgx=comprobar]"); if (cb) cb.disabled = !e.target.value.trim(); } }, true); }

  var nivelHTML = function(r){
    var t = NIV[r.lvl];
    return t + (r.camino && r.camino > r.lvl ? ' <small>en camino a ' + NIV[r.camino] + "</small>" : "");
  };
  var resultadoHTML = function(){
    var G = gEnsure(), d = G.diag, R = G.ruta;
    var barras = COMP.map(function(c){
      var r = d.comp[c.k] || { lvl: 0 }, pct = Math.max(6, (r.lvl + (r.camino > r.lvl ? .5 : 0)) / 5 * 100);
      return '<div class="dgx-bar' + (c.k === d.fuerte ? " fuerte" : "") + (c.k === d.debil ? " debil" : "") + '"><div class="dgx-bt"><i>' + c.ic + "</i><b>" + c.n + " <small>" + c.en + "</small></b><em>" + (r.saltada ? "sin medir" : nivelHTML(r)) + '</em></div><span><u style="width:' + pct + '%"></u></span></div>';
    }).join("");
    var l = R.leccion && LESSONS.find(function(x){ return x.id === R.leccion; });
    return marco('<div class="dgx-res"><div class="dgx-glob">' + gato("excited") + "<div><small>Tu nivel global</small><b>" + NIV[d.global] + "</b><span>" + DESC[d.global] + " · MCER</span></div></div>" +
      '<div class="dgx-bars">' + barras + "</div>" +
      '<div class="dgx-fd">' + (d.fuerte ? '<div class="f"><b>Tu fuerte</b><span>' + CN[d.fuerte].n + "</span></div>" : "") + '<div class="d"><b>Para reforzar</b><span>' + CN[d.debil].n + "</span></div></div>" +
      (d.self ? '<p class="dgx-nota">La parte oral la calificaste tú: repítela con micrófono cuando puedas para afinarla.</p>' : "") +
      ((d.comp.S || {}).saltada ? '<p class="dgx-nota">La parte oral no se midió. Cuando puedas hablar, repite el diagnóstico para completarla.</p>' : "") +
      '<div class="dgx-ruta"><h3>Tu ruta</h3><ol><li><b>Curso: ' + esc(etiquetaCurso(R.curso)) + "</b><span>" + (l ? "Empieza por «" + esc(plano(l.title)) + "»" : "Sigue donde vas") + "</span></li>" +
      "<li><b>Cada día, un refuerzo de " + CN[R.debil].n.toLowerCase() + "</b><span>" + ACT[R.debil].map(function(a){ return a[1]; }).join(" o ") + "</span></li>" +
      (R.fuerte ? "<li><b>Mantén tu fuerte</b><span>" + CN[R.fuerte].n + ": " + ACT[R.fuerte].map(function(a){ return a[1]; }).join(" o ") + "</span></li>" : "") +
      "<li><b>Repite el diagnóstico el " + R.repetir.split("-").reverse().join("/") + "</b><span>Así ves cuánto subiste</span></li></ol></div></div>",
      (l ? '<button class="gbtn wide" data-dgx="hacer" data-a="lec:' + l.id + '" data-id="lec" data-autofocus>Empezar mi ruta</button>' : '<button class="gbtn wide" data-dgx="hacer" data-a="curso" data-autofocus>Empezar mi ruta</button>') +
      '<button class="gbtn ghost wide" data-dgx="ruta">Ver mi ruta en Inicio</button>');
  };

  /* nunca ha estudiado: ruta desde «Primeros pasos», sin diagnóstico (se puede hacer después) */
  var desdeCero = function(){
    var G0 = gEnsure(), z = { lvl: 0, camino: 0 };
    G0.diag = { at: dkey(), comp: { R: z, L: z, W: z, S: z }, global: 0, fuerte: null, debil: "L", cero: true };
    G0.ruta = rutaDe(G0.diag); G0.ruta.curso = "pp"; G0.ruta.leccion = (proxima("pp") || {}).id || null;
    G0.ruta.repetir = new Date(Date.now() + 21 * 864e5).toISOString().slice(0, 10);
    try { track = "pp"; lsSet("cr-track", "pp"); } catch (e) {}
    save(true);
    hace(G0.ruta.leccion ? "lec:" + G0.ruta.leccion : "curso");
  };

  /* 3.4.0: el diagnóstico completo (modelo DELF/TCF/DIALANG) vive en plx77; este motor corto queda de respaldo */
  var abrirDiag = function(){ if (typeof P !== "undefined" && P) return; if (window.PLX_DIAG2) return PLX_DIAG2.abrir(); abre(); D = nuevo(); D.fase = "intro"; pinta(); };
  window.PLX_DIAG = { abrir: abrirDiag, banco: banco, rutaDe: rutaDe, pasosHoy: pasosHoy, hace: function(a){ return hace(a); }, marca: function(id){ return marca(id); }, desdeCero: function(){ return desdeCero(); }, ACT: ACT, estado: function(){ return D; } };   /* estado: solo para las pruebas */
  /* la vieja prueba de nivel ahora abre el diagnóstico (Retos, recorrido, tarjetas) */
  if (typeof startPlacement === "function") startPlacement = abrirDiag;

  /* ---------------- tarjeta «Tu ruta» en Inicio ---------------- */
  var tarjeta = function(){
    var G = gEnsure();
    if (!G.diag) return '<div class="gcard rtx rtx-0"><div class="rtx-h">' + gato("curious") + '<div><small>Tu ruta personal</small><b>¿Qué nivel tienes?</b><p>Haz el diagnóstico: 4 habilidades, de A1 a C1. Con el resultado armo tu plan.</p></div></div><div class="rtx-a"><button class="gbtn sm" data-dgx-abrir="1">Hacer el diagnóstico</button></div></div>';
    var d = G.diag, ps = pasosHoy(G), hechos = ps.filter(function(p){ return p.ok; }).length, vence = G.ruta && G.ruta.repetir && dkey() >= G.ruta.repetir;
    return '<div class="gcard rtx"><div class="rtx-top"><div><small>Tu ruta · ' + esc(etiquetaCurso(G.ruta.curso)) + '</small><b>Nivel ' + NIV[d.global] + "</b></div>" +
      '<div class="rtx-chips">' + COMP.map(function(c){ var r = d.comp[c.k] || { lvl: 0 }; return '<span title="' + c.n + '" class="' + (c.k === d.debil ? "debil" : c.k === d.fuerte ? "fuerte" : "") + '">' + c.en.charAt(0) + " " + NIV[r.lvl] + "</span>"; }).join("") + "</div></div>" +
      '<p class="rtx-hoy">Hoy · ' + hechos + " de " + ps.length + "</p>" +
      '<ol class="rtx-l">' + ps.map(function(p){ return '<li class="' + (p.ok ? "ok" : "") + '"><button data-rtx="' + esc(p.a) + '" data-id="' + p.id + '"><i>' + (p.ok ? "✓" : "") + "</i><span><b>" + esc(p.t) + "</b><small>" + esc(p.sub) + "</small></span><em>›</em></button></li>"; }).join("") + "</ol>" +
      '<div class="rtx-pie">' + (vence ? '<button class="gbtn sm" data-dgx-abrir="1">Repetir el diagnóstico</button>' : '<small>Nuevo diagnóstico el ' + esc(G.ruta.repetir.split("-").reverse().join("/")) + '</small><button class="rtx-link" data-dgx-abrir="1">Repetir ahora</button>') + "</div></div>";
  };
  var ponTarjeta = function(){
    try {
      if (typeof view === "undefined" || view !== "parcours") return;
      var main = document.querySelector("#view .gmain"); if (!main) return;
      var G = gEnsure(); if (!G.name) return;
      /* la clave de comparación va SIN el dibujo del gato: catSVG cambia los ids de sus degradados en cada llamada,
         y comparar el HTML entero reemplazaba la tarjeta en cada cuadro (el botón desaparecía bajo el dedo) */
      var old = main.querySelector(".rtx"), html = tarjeta(), clave = html.replace(/<svg[\s\S]*?<\/svg>/g, ""), el = old;
      if (!old || old.dataset.h !== clave) {
        var tmp = document.createElement("div"); tmp.innerHTML = html; el = tmp.firstChild; el.dataset.h = clave;
        if (old) old.replaceWith(el);
      }
      /* sitio: después del curso («Continuar» / «Primeros pasos») y antes de «Hoy». plx64 reordena Inicio después de
         pintar, así que se comprueba cada vez */
      if (window.PLX_V4 && PLX_V4.ordena) { if (el.parentNode !== main) main.appendChild(el); PLX_V4.ordena(main); return; }
      var ancla = main.querySelector(":scope > .pp-inv") || main.querySelector(":scope > .m-course") || main.querySelector(":scope > .greet");
      if (ancla) { if (ancla.nextElementSibling !== el) ancla.insertAdjacentElement("afterend", el); }
      else if (!el.parentNode) main.insertBefore(el, main.firstChild);
    } catch (e) {}
  };
  if (typeof render === "function") { var rO = render; render = function(){ var r = rO.apply(this, arguments); ponTarjeta(); return r; }; }
  /* plx64 reordena Inicio después de pintar: se vuelve a colocar en el mismo cuadro (ponTarjeta no mueve nada si ya está en su sitio) */
  var pend = false, vista = document.getElementById("view");
  if (vista && window.MutationObserver) new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; ponTarjeta(); }); }).observe(vista, { childList: true, subtree: true });
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-dgx-abrir],[data-rtx]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    if (b.dataset.dgxAbrir) return abrirDiag();
    marca(b.dataset.id); hace(b.dataset.rtx);
  }, true);

  /* textos de la tarjeta de Retos */
  var retocaRetos = function(){
    var c = document.querySelector(".rcard.r-plc"); if (!c || c.dataset.dgx) return; c.dataset.dgx = "1";
    var G = gEnsure(), b = c.querySelector(".rt b"), s = c.querySelector(".rt small"), g = c.querySelector(".rgo");
    if (b) b.textContent = "Diagnóstico MCER";
    if (s) s.textContent = G.diag ? "Último: nivel " + NIV[G.diag.global] + " · " + G.diag.at.split("-").reverse().join("/") : "Lectura, escucha, escritura y habla, de A1 a C1.";
    if (g) g.textContent = G.diag ? "Repetir" : "Empezar";
  };
  if (typeof render === "function") { var rO2 = render; render = function(){ var r = rO2.apply(this, arguments); try { retocaRetos(); } catch (e) {} return r; }; }

  /* ---------------- inicio: una pantalla que explica todo ---------------- */
  var bienvenida = function(){
    var G = gEnsure(); if (G.diag || G.bienv) return;
    G.bienv = 1; G.tourDone = 1; save(true);
    var el = document.createElement("div"); el.className = "dgx dgx-bv"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true");
    el.innerHTML = '<div class="dgx-body"><div class="dgx-wrap"><div class="dgx-hero">' + gato("excited") + "<div><small>¡Hola, " + esc(G.name || "") + '!</small><h1>Así funciona PLEX PLAY</h1></div></div>' +
      '<ol class="dgx-pasos"><li><i>1</i><div><b>Diagnóstico</b><span>Mido tu lectura, escucha, escritura y habla, de A1 a C1. Entre 3 y 12 minutos.</span></div></li>' +
      "<li><i>2</i><div><b>Tu ruta</b><span>Te digo con qué curso empezar y qué reforzar cada día. La verás en Inicio.</span></div></li>" +
      "<li><i>3</i><div><b>Practica un poco cada día</b><span>Lecciones cortas, juegos y repasos. Cumplir tu meta mantiene viva la racha.</span></div></li></ol></div></div>" +
      '<div class="dgx-pie"><div class="dgx-wrap"><button class="gbtn wide" data-bv="diag" data-autofocus>Hacer el diagnóstico</button><button class="gbtn ghost wide" data-bv="cero">Nunca he estudiado francés: empezar desde cero</button><button class="dgx-link" data-bv="luego">Lo haré después</button></div></div>';
    document.body.appendChild(el);
    new MutationObserver(function(){ if (el.hasAttribute("inert")) el.removeAttribute("inert"); }).observe(el, { attributes: true, attributeFilter: ["inert"] });
    setTimeout(function(){ var f = el.querySelector("[data-autofocus]"); if (f) f.focus(); }, 80);
    el.addEventListener("click", function(e){
      var b = e.target.closest("[data-bv]"); if (!b) return; e.preventDefault(); e.stopPropagation();
      el.remove();
      if (b.dataset.bv === "diag") return abrirDiag();
      if (b.dataset.bv === "cero") return desdeCero();
      try { render(); } catch (x) {}
    });
  };
  /* el recorrido largo se lanza solo con un temporizador (tourDone): se apaga en el mismo clic, antes de que la
     app guarde el nombre, para que nunca salga encima de esta pantalla */
  window.addEventListener("click", function(e){
    if (!(e.target.closest && e.target.closest("[data-g=onb-done]"))) return;
    try { var G = gEnsure(); if (!G.diag) { G.tourDone = 1; } } catch (x) {}
    setTimeout(bienvenida, 400);
  }, true);
  /* quien ya tenía perfil pero nunca vio esto: la tarjeta de Inicio le ofrece el diagnóstico (no se le interrumpe) */

  /* ---------------- estilos ---------------- */
  var st = document.createElement("style"); st.id = "plx75";
  st.textContent = [
    ".dgx{position:fixed;inset:0;z-index:420;background:var(--paper);color:var(--ink);display:flex;flex-direction:column;font-family:var(--sans)}",
    ".dgx[hidden]{display:none}",
    ".dgx-wrap{width:min(620px,100%);margin:0 auto;padding:0 18px;box-sizing:border-box}",
    ".dgx-top{display:flex;align-items:center;gap:12px;padding:max(12px,env(safe-area-inset-top)) 18px 10px;max-width:900px;width:100%;margin:0 auto;box-sizing:border-box}",
    ".dgx-top b{font-family:var(--serif);font-weight:800;font-size:1.05rem}.dgx-top span{margin-left:auto;color:var(--stone);font-weight:700;font-size:.85rem}",
    ".dgx-x{all:unset;cursor:pointer;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;color:var(--stone);font-size:1.1rem}.dgx-x:hover{background:var(--surf3)}",
    ".dgx-prog{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-width:620px;width:100%;margin:0 auto 6px;padding:0 18px;box-sizing:border-box}",
    ".dgx-prog span{display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:10px;background:var(--surf3);font-size:.78rem;color:var(--faint);min-width:0}",
    ".dgx-prog span b{font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dgx-prog i{font-style:normal}",
    ".dgx-prog span.on{background:var(--wash);color:var(--brand-ink);box-shadow:inset 0 0 0 2px var(--accent)}.dgx-prog span.ok{background:var(--good-bg);color:var(--good-ink)}",
    "@media (max-width:420px){.dgx-prog span b{display:none}.dgx-prog span{justify-content:center}}",
    ".dgx-body{flex:1;overflow:auto;padding:14px 0 24px}",
    ".dgx-pie{padding:12px 0 max(14px,env(safe-area-inset-bottom));border-top:1px solid var(--line);background:var(--raise)}",
    ".dgx-pie .dgx-wrap{display:grid;gap:10px}",
    ".dgx-hero{display:grid;grid-template-columns:110px minmax(0,1fr);gap:16px;align-items:center;margin:6px 0 18px}.dgx-hero svg{width:110px;height:110px}",
    ".dgx-hero small{color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.75rem}.dgx-hero h1{font-family:var(--serif);font-weight:900;font-size:1.7rem;line-height:1.1;margin:4px 0 6px}.dgx-hero p{color:var(--ink-2);margin:0;line-height:1.45}",
    ".dgx-4,.dgx-pasos{list-style:none;margin:0 0 14px;padding:0;display:grid;gap:10px}",
    ".dgx-4 li,.dgx-pasos li{display:flex;gap:14px;align-items:flex-start;background:var(--raise);border-radius:16px;padding:14px;box-shadow:0 0 0 1.5px var(--line)}",
    ".dgx-4 i{font-style:normal;font-size:1.5rem;line-height:1}.dgx-4 b,.dgx-pasos b{display:block;font-weight:800}.dgx-4 b small{color:var(--faint);font-weight:700}.dgx-4 span,.dgx-pasos span{color:var(--stone);font-size:.92rem;line-height:1.4}",
    ".dgx-pasos i{font-style:normal;flex:none;width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;font-weight:900;display:grid;place-items:center}",
    ".dgx-nota{color:var(--stone);font-size:.9rem;line-height:1.45;margin:8px 0}",
    ".dgx-pie .gbtn{text-align:center;justify-content:center}",
    ".dgx-link{all:unset;cursor:pointer;justify-self:center;color:var(--accent);font-weight:700;padding:6px}",
    ".dgx-bloque{text-align:center;padding:30px 0}.dgx-bloque i{font-style:normal;font-size:3.4rem;display:block;margin:10px 0}.dgx-bloque h2{font-family:var(--serif);font-weight:900;font-size:1.8rem;margin:0}.dgx-bloque small{color:var(--faint);font-weight:800;letter-spacing:.06em;text-transform:uppercase}.dgx-bloque p{color:var(--ink-2);font-size:1.05rem}",
    ".dgx-num{display:inline-block;background:var(--wash);color:var(--brand-ink);font-weight:800;border-radius:99px;padding:4px 12px;font-size:.85rem}",
    ".dgx-ask{color:var(--stone);font-weight:700;margin:4px 0 10px}.dgx-ctx{background:var(--surf2);border-radius:14px;padding:12px 14px;margin:0 0 12px;line-height:1.5;color:var(--ink-2)}",
    ".dgx-q{font-family:var(--serif);font-weight:800;font-size:1.3rem;line-height:1.4;margin:0 0 16px}.dgx-hueco{color:var(--accent)}",
    ".dgx-ops{display:grid;gap:10px}.dgx-op{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:12px;align-items:center;background:var(--raise);border-radius:16px;padding:14px 16px;box-shadow:0 0 0 1.5px var(--line),0 3px 0 var(--line);font-weight:700;line-height:1.35}",
    ".dgx-op small{flex:none;width:24px;height:24px;border-radius:8px;background:var(--surf3);color:var(--stone);display:grid;place-items:center;font-size:.8rem}",
    ".dgx-op:hover{box-shadow:0 0 0 2px var(--accent),0 3px 0 var(--accent)}.dgx-op.sel{background:var(--wash);box-shadow:0 0 0 2px var(--accent),0 3px 0 var(--accent)}",
    ".dgx-op.ok{background:var(--good-bg);box-shadow:0 0 0 2px var(--good)}.dgx-op.ko{background:var(--bad-bg);box-shadow:0 0 0 2px var(--bad)}.dgx-op[disabled]{cursor:default}",
    ".dgx-oir{display:flex;flex-direction:column;align-items:center;gap:8px;margin:6px 0 18px}.dgx-oir small{color:var(--stone);font-weight:700}",
    ".dgx-play{all:unset;cursor:pointer;width:88px;height:88px;border-radius:50%;background:#FFD200;color:#0B2D74;display:grid;place-items:center;box-shadow:0 0 0 8px rgba(255,210,0,.25)}.dgx-play svg{width:42px;height:42px}.dgx-play[disabled]{opacity:.45;cursor:default}",
    ".dgx-esc input{font:inherit;color:var(--accent);width:9ch;min-width:5ch;border:0;border-bottom:3px solid var(--accent);background:transparent;text-align:center;padding:0 4px;margin:0 4px;outline:none}",
    ".dgx-tildes{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}.dgx-tildes button{all:unset;cursor:pointer;min-width:38px;height:38px;border-radius:10px;background:var(--surf3);display:grid;place-items:center;font-weight:800}",
    ".dgx-decir{text-align:center;font-size:1.45rem}",
    ".dgx-mic{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}.dgx-mic p{margin:0;color:var(--ink-2)}",
    ".dgx-micb{all:unset;cursor:pointer;width:84px;height:84px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;box-shadow:0 8px 20px rgba(47,107,255,.35)}.dgx-micb svg{width:38px;height:38px}",
    ".dgx-micb.rec{background:var(--bad);animation:dgxlat 1s ease-in-out infinite}@keyframes dgxlat{50%{box-shadow:0 0 0 14px rgba(240,68,76,.2)}}",
    ".dgx-pal span.ok{color:var(--good-ink)}.dgx-pal span.ko{color:var(--bad-ink);text-decoration:underline wavy}",
    ".dgx-self{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;text-align:center;margin-top:12px}.dgx-self p{width:100%;margin:0 0 4px;color:var(--stone)}",
    ".dgx-fb{margin-top:16px;border-radius:14px;padding:12px 14px;display:grid;gap:4px}.dgx-fb.ok{background:var(--good-bg);color:var(--good-ink)}.dgx-fb.ko{background:var(--bad-bg);color:var(--bad-ink)}.dgx-fb span{color:var(--ink-2)}",
    ".dgx-glob{display:grid;grid-template-columns:96px minmax(0,1fr);gap:14px;align-items:center;background:linear-gradient(135deg,#0B2D74,#1E5BD7);color:#fff;border-radius:22px;padding:16px 18px;margin:4px 0 14px}.dgx-glob svg{width:96px;height:96px}",
    ".dgx-glob small{opacity:.8;font-weight:700}.dgx-glob b{display:block;font-family:var(--serif);font-weight:900;font-size:2.6rem;line-height:1;color:#FFD200}.dgx-glob span{opacity:.85;font-weight:700}",
    ".dgx-bars{display:grid;gap:10px;margin-bottom:12px}.dgx-bar{background:var(--raise);border-radius:14px;padding:12px 14px;box-shadow:0 0 0 1.5px var(--line)}",
    ".dgx-bt{display:flex;align-items:center;gap:10px;margin-bottom:8px}.dgx-bt i{font-style:normal}.dgx-bt b{font-weight:800;font-size:.95rem}.dgx-bt b small{color:var(--faint)}.dgx-bt em{margin-left:auto;font-style:normal;font-weight:900;color:var(--accent);text-align:right}.dgx-bt em small{display:block;font-weight:700;color:var(--stone);font-size:.72rem}",
    ".dgx-bar>span{display:block;height:10px;border-radius:99px;background:var(--surf3);overflow:hidden}.dgx-bar>span u{display:block;height:100%;border-radius:99px;background:var(--accent)}",
    ".dgx-bar.fuerte>span u{background:var(--good)}.dgx-bar.debil>span u{background:var(--warn)}",
    ".dgx-fd{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}.dgx-fd>div{border-radius:14px;padding:10px 12px}.dgx-fd b{display:block;font-size:.78rem;text-transform:uppercase;letter-spacing:.05em}.dgx-fd span{font-weight:800}",
    ".dgx-fd .f{background:var(--good-bg);color:var(--good-ink)}.dgx-fd .d{background:var(--warn-bg);color:var(--warn-ink)}",
    ".dgx-ruta{background:var(--raise);border-radius:18px;padding:14px 16px;box-shadow:0 0 0 1.5px var(--line)}.dgx-ruta h3{margin:0 0 8px;font-family:var(--serif);font-weight:900}",
    ".dgx-ruta ol{margin:0;padding-left:20px;display:grid;gap:8px}.dgx-ruta li b{display:block}.dgx-ruta li span{color:var(--stone);font-size:.92rem}",
    /* tarjeta de Inicio */
    ".rtx{margin-top:14px}.rtx-h{display:grid;grid-template-columns:72px minmax(0,1fr);gap:12px;align-items:center}.rtx-h svg{width:72px;height:72px}.rtx-h small,.rtx-top small{color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:.72rem}",
    ".rtx-h b,.rtx-top b{display:block;font-family:var(--serif);font-weight:900;font-size:1.2rem}.rtx-h p{margin:2px 0 0;color:var(--stone);font-size:.92rem}.rtx-a{margin-top:12px;display:flex;justify-content:flex-end}",
    ".rtx-top{display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap}.rtx-chips{margin-left:auto;display:flex;gap:6px;flex-wrap:wrap}.rtx-chips span{font-size:.75rem;font-weight:800;padding:4px 8px;border-radius:99px;background:var(--surf3);color:var(--ink-2)}",
    ".rtx-chips .debil{background:var(--warn-bg);color:var(--warn-ink)}.rtx-chips .fuerte{background:var(--good-bg);color:var(--good-ink)}",
    ".rtx-hoy{margin:10px 0 6px;color:var(--stone);font-weight:800;font-size:.85rem}",
    ".rtx-l{list-style:none;margin:0;padding:0;display:grid;gap:8px}.rtx-l button{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:14px;background:var(--surf2)}",
    ".rtx-l button:hover{background:var(--wash)}.rtx-l i{flex:none;width:26px;height:26px;border-radius:50%;box-shadow:inset 0 0 0 2px var(--line-2);display:grid;place-items:center;font-style:normal;font-weight:900;color:#fff}",
    ".rtx-l li.ok i{background:var(--good);box-shadow:none}.rtx-l li.ok b{text-decoration:line-through;color:var(--stone)}.rtx-l span{min-width:0;flex:1}.rtx-l b{display:block;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rtx-l small{display:block;color:var(--stone);font-size:.82rem}.rtx-l em{font-style:normal;color:var(--faint);font-size:1.3rem}",
    ".rtx-pie{display:flex;align-items:center;gap:10px;justify-content:space-between;margin-top:10px;color:var(--stone)}.rtx-link{all:unset;cursor:pointer;color:var(--accent);font-weight:800}",
    ".plc-card{display:none!important}"
  ].join("\n");
  document.head.appendChild(st);
})();
