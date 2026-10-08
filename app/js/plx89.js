/* PLEX PLAY 3.10.0 — Organización nueva: el mapa en Inicio y cuatro pestañas
   Pedido de Jhon (con una imagen de referencia): que la app se organice así.
   - Inicio es el mapa del curso: una franja con la lección que sigue («Unidad 1, lección 3») y debajo el camino de
     la unidad, un nodo por lección, con Manzana parado en la que toca. Las lecciones se abren desde el nodo; la lista
     completa (Aprender) sigue existiendo y se entra con «Ver todo el curso».
   - La barra pasa de cinco pestañas a cuatro: Inicio · Práctica · 1 vs 1 · Perfil. Práctica es la vista de Jugar
     (juegos, practicar, explorar). «1 vs 1» junta los duelos (PLEX 1V1, PLEX Quiz, Word Battle, Team Challenge) con
     el Ranking, que deja de ser pestaña propia. No se quita ninguna función: solo cambia dónde se entra. */
(function(){
  "use strict";
  if (typeof GV === "undefined" || typeof LESSONS === "undefined" || typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var plano = function(h){ var d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  var EV = window.PLX_EV || null;
  var ico = function(n){ return EV ? EV.ico(n, "mp-ic") : ""; };
  var hecha = function(l){ return !!(S.lessons[l.id] && S.lessons[l.id].done); };
  var curso = function(){ return (typeof track !== "undefined" && track) || "a1"; };
  var unidadesDe = function(tr){
    var out = [], idx = {};
    LESSONS.forEach(function(l){ if (l.track !== tr) return; var k = l.unit || "—"; if (idx[k] == null) { idx[k] = out.length; out.push({ t: k, ls: [] }); } out[idx[k]].ls.push(l); });
    return out;
  };
  /* el dibujo del nodo dice qué clase de lección es */
  var TIPO = { gram: "pieza", conj: "pieza", synt: "bloques", voc: "libro", lex: "libro", registre: "pregunta", cult: "mapa", comp: "oido", ortho: "lapiz", phono: "micro", lit: "libro", prod: "lapiz" };
  var icoDe = function(l){ return l.special === "blanc" ? "corona" : l.project ? "estrella" : TIPO[l.t] || "libro"; };

  /* ====================== 1. Inicio: la unidad y su ruta ======================
     3.11.0: la ruta es un hilo fino con puntos de luz (lo recorrido brilla, lo que falta se insinúa) y cada lección
     una estación de vidrio. En escritorio corre en horizontal, en filas que serpentean; en el teléfono baja en vertical. */
  var HEX = "M50 3.5c3.2 0 6.3.8 9 2.4l27.5 15.9c5.6 3.2 9 9.2 9 15.6v25.2c0 6.4-3.4 12.4-9 15.6L59 94.1a18 18 0 0 1-18 0L13.5 78.2c-5.6-3.2-9-9.2-9-15.6V37.4c0-6.4 3.4-12.4 9-15.6L41 5.9c2.7-1.6 5.8-2.4 9-2.4z";
  var FOTO = { pp: "c-montmartre", a1: "c-paris", a2: "c-terraza", fon: "c-fonetica", b11: "c-calle", b12: "c-playa", b21: "c-montana", rem: "c-bandera", prog: "c-libros", c12: "c-noche", lit: "c-teatro" };
  var DEFS = '<defs><linearGradient id="mp-az" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6C9BFF"/><stop offset=".55" stop-color="#2F6BFF"/><stop offset="1" stop-color="#1F4FD0"/></linearGradient>' +
    '<linearGradient id="mp-oro" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0A3"/><stop offset=".5" stop-color="#FFD200"/><stop offset="1" stop-color="#E0A800"/></linearGradient>' +
    '<linearGradient id="mp-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".48" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
    '<linearGradient id="mp-ed" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".5" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></linearGradient></defs>';
  var horizontal = function(W){ return window.innerWidth >= 1024 && W >= 540; };
  /* dónde va cada estación */
  var puntos = function(n, W, hz){
    var p = [], i;
    if (hz) {
      var cols = Math.max(4, Math.min(8, Math.floor((W - 70) / 96))), paso = Math.min(150, (W - 110) / (Math.min(n, cols) - 1));
      for (i = 0; i < n; i++) { var f = Math.floor(i / cols), c = i % cols, cv = f % 2 ? cols - 1 - c : c; p.push([Math.round(55 + Math.max(0, (W - 110 - paso * (Math.min(n, cols) - 1)) / 2) + cv * paso), 96 + f * 204 + (c % 2 ? 86 : 0), c % 2 ? "ab" : "ar"]); }
    } else {
      var XS = [.5, .34, .24, .36, .54, .7, .78, .66];
      for (i = 0; i < n; i++) p.push([Math.round(W * XS[i % XS.length]), 58 + i * 110, "ab"]);
    }
    return p;
  };
  var curva = function(p){
    var o = "M" + p[0][0] + " " + p[0][1];
    for (var i = 1; i < p.length; i++) { var a = p[i - 1], b = p[i], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      o += Math.abs(b[0] - a[0]) > Math.abs(b[1] - a[1]) ? " C" + mx + " " + a[1] + " " + mx + " " + b[1] + " " + b[0] + " " + b[1] : " C" + a[0] + " " + my + " " + b[0] + " " + my + " " + b[0] + " " + b[1]; }
    return o;
  };
  var estacion = function(p, est, ic, ch, gr, aria, id){
    var cuerpo = '<span class="mp-hx">' + (est === "sig" ? '<i class="mp-halo"></i>' : "") + '<svg viewBox="-14 -14 128 136" aria-hidden="true">' +
      (est === "sig" ? '<path class="rg" d="' + HEX + '" transform="translate(50 50) scale(1.2) translate(-50 -50)"/>' : "") +
      '<path class="h2" d="' + HEX + '" transform="translate(0 6)"/><path class="h1" d="' + HEX + '"/><path class="h3" d="' + HEX + '"/><path class="h4" d="' + HEX + '"/></svg>' +
      (ic.indexOf("img:") === 0 ? '<img src="img/ic/' + ic.slice(4) + '.webp" alt="" decoding="async">' : ico(ic)) + (est === "hec" ? '<i class="mp-st"><b></b><b></b><b></b></i>' : "") + "</span>";
    return '<div class="mp-n ' + est + " " + p[2] + '" style="left:' + p[0] + "px;top:" + p[1] + 'px">' +
      (id ? '<button class="mp-hex" data-open="' + esc(id) + '" aria-label="' + esc(aria) + '">' + cuerpo + "</button>" : '<span class="mp-hex">' + cuerpo + "</span>") +
      '<span class="mp-t"><small>' + ch + "</small><b>" + gr + "</b></span>" + "</div>";
  };
  var firma = "";
  var mapaHTML = function(W){
    var tr = curso(), us = unidadesDe(tr), nx = typeof nextLesson === "function" ? nextLesson(tr) : null;
    if (!us.length) return "";
    var T = (typeof TRACKS !== "undefined" && TRACKS.filter(function(x){ return x.id === tr; })[0]) || { label: "" };
    var ui = nx ? Math.max(0, us.map(function(u){ return u.t; }).indexOf(nx.unit)) : us.length - 1, u = us[ui], ls = u.ls;
    var norm = ls.filter(function(l){ return !l.special; }), nH = norm.filter(hecha).length, completa = norm.length && nH === norm.length;
    var hz = horizontal(W), P = puntos(ls.length + 1, W, hz), hasta = 0;
    ls.forEach(function(l, i){ if (hecha(l) || (nx && l.id === nx.id)) hasta = i; });
    if (completa) hasta = ls.length;
    var alto = P.reduce(function(m, p){ return Math.max(m, p[1]); }, 0) + (hz ? 96 : 86);
    var via = '<svg class="mp-via" width="' + W + '" height="' + alto + '" viewBox="0 0 ' + W + " " + alto + '" aria-hidden="true">' + DEFS +
      '<path class="f1" d="' + curva(P.slice(hasta)) + '"/><path class="f2" d="' + curva(P.slice(hasta)) + '"/>' +
      (hasta > 0 ? '<path class="c0" d="' + curva(P.slice(0, hasta + 1)) + '"/><path class="c1" d="' + curva(P.slice(0, hasta + 1)) + '"/><path class="c2" d="' + curva(P.slice(0, hasta + 1)) + '"/><path class="c3" d="' + curva(P.slice(hasta - 1, hasta + 1)) + '"/>' : "") + "</svg>";
    var gatoY = -1, gatoIzq = false;
    var nodos = ls.map(function(l, i){
      var est = hecha(l) ? "hec" : nx && l.id === nx.id ? "sig" : "pend";
      if (est === "sig" && !hz) { P[i] = [P[i][0], P[i][1], P[i][0] > W / 2 ? "iz" : "de"]; gatoY = P[i][1]; gatoIzq = P[i][0] > W / 2; }
      return estacion(P[i], est, icoDe(l), est === "sig" ? (i + 1) + " · Sigue aquí" : "Lección " + (i + 1), esc(plano(l.title)), "Lección " + (i + 1) + ": " + plano(l.title) + (est === "hec" ? " (hecha)" : est === "sig" ? " (siguiente)" : ""), l.id);
    }).join("") + estacion(P[ls.length], "cofre" + (completa ? " hec" : ""), "img:" + (completa ? "trofeo" : "regalo"), completa ? "Unidad completa" : "Meta de la unidad", completa ? "¡Lo lograste!" : "Termina las " + norm.length + " lecciones", "", "");
    var li = nx ? ls.map(function(l){ return l.id; }).indexOf(nx.id) : -1;
    var sig = nx ?
      '<div class="mp-sig gl g3"><span><small>' + (hz ? "Lección " + (li + 1) + " · " + (nx.items || []).length + " ejercicios · ~" + Math.max(3, Math.round(((nx.items || []).length || 10) * .55)) + " min" : "Unidad " + (ui + 1) + ", lección " + (li + 1)) + "</small><b>" + esc(plano(nx.title)) + '</b><u class="mp-av"><s style="width:' + (norm.length ? Math.round(nH / norm.length * 100) : 0) + '%"></s></u></span><button class="mp-go" data-open="' + esc(nx.id) + '" aria-label="' + (S.lessons[nx.id] ? "Continuar" : "Comenzar") + '"><span>' + (S.lessons[nx.id] ? "Continuar" : "Comenzar") + "</span>" + (EV ? EV.ico("flechas") : "") + "</button></div>" :
      '<div class="mp-sig gl g3 fin"><span><small>' + esc(T.label) + "</small><b>¡Curso completo!</b></span></div>";
    var todas = LESSONS.filter(function(l){ return l.track === tr && !l.special; }), tH = todas.filter(hecha).length;
    return '<section class="mp' + (hz ? " hz" : "") + '" style="--mp-w:' + W + 'px" data-mp="' + esc(tr) + '" aria-label="Mapa del curso"><div class="mp-foto" style="background-image:url(img/' + (FOTO[tr] || "c-paris") + '.webp)"></div>' +
      '<div class="mp-tit"><small>' + esc(T.label) + " · Unidad " + (ui + 1) + '</small><div class="mp-h" role="heading" aria-level="1">' + esc(plano(u.t)) + '</div><div class="mp-pr"><b>' + nH + " de " + norm.length + "</b><span>lecciones</span><u><s style=\"width:" + (norm.length ? Math.round(nH / norm.length * 100) : 0) + '%"></s></u></div></div>' +
      '<div class="mp-mz" aria-hidden="true"><i></i><span class="mp-bb gl g3"><b>' + (tH ? "On continue ?" : "C’est parti !") + "</b>" + (tH ? "Tu es incroyable !" : "Ta première leçon t’attend.") + '</span><img src="img/mz/' + (tH ? "bandera" : "saluda") + '.webp" alt="" decoding="async"></div>' +
      (hz ? "" : sig) + '<div class="mp-cam" style="width:' + W + "px;height:" + alto + 'px">' + via + nodos + (gatoY >= 0 ? '<img class="mp-gato' + (gatoIzq ? " iz" : "") + '" style="top:' + Math.max(0, gatoY - 168) + 'px" src="img/mz/saluda.webp" alt="" decoding="async">' : "") + "</div>" + (hz ? sig : "") +
      '<div class="mp-pie"><span>' + tH + " de " + todas.length + ' lecciones del curso</span><button class="mp-todo" data-view="lecciones">Ver todo el curso</button></div></section>';
  };
  var mapa = function(){
    if (typeof view === "undefined" || view !== "parcours") return;
    var main = document.querySelector("#view .gmain"); if (!main || main.closest(".gdoc")) return;
    var g = main.querySelector(":scope > .greet"); if (!g) return;
    g.classList.add("mp-en");
    var gr = g.getBoundingClientRect(), vw = document.documentElement.clientWidth;
    var W = Math.max(250, Math.min(860, Math.floor(Math.min(gr.width || 9999, window.innerWidth >= 1024 ? 9999 : vw - 2 * Math.max(12, gr.left)))));
    var tr = curso(), nx = typeof nextLesson === "function" ? nextLesson(tr) : null, f = tr + "|" + (nx ? nx.id : "fin") + "|" + Object.keys(S.lessons || {}).length + "|" + W + "|" + horizontal(W);
    /* va dentro del saludo: plx78 reordena a los hijos de .gmain en cada pintada y un hermano nuevo acabaría al final */
    var ya = g.querySelector(":scope > .mp"), mc = main.querySelector(":scope > .m-course");
    if (mc) mc.classList.add("mp-oculta");   /* la tarjeta «Continuar» la reemplaza la unidad */
    if (ya && f === firma) { if (g.lastElementChild !== ya) g.appendChild(ya); return; }
    var h = mapaHTML(W); if (!h) return;
    if (ya) ya.remove();
    g.insertAdjacentHTML("beforeend", h); firma = f;
    /* en el teléfono el saludo puede traer sangría propia: si la unidad se sale por la derecha, se ajusta a lo que cabe */
    if (window.innerWidth < 1024) {
      var el = g.querySelector(":scope > .mp"), ml = el ? el.getBoundingClientRect().left : 0, cabe = Math.floor(vw - 2 * Math.max(12, ml));
      if (el && cabe < W - 2 && cabe >= 240) { el.remove(); g.insertAdjacentHTML("beforeend", mapaHTML(cabe)); }
    }
  };
  var tRe = 0;
  addEventListener("resize", function(){ clearTimeout(tRe); tRe = setTimeout(function(){ try { mapa(); } catch (e) {} }, 180); });

  /* ====================== 2. «1 vs 1»: duelos y ranking en la misma pestaña ====================== */
  var DUELOS = [["v1", "mando", "PLEX 1V1", "Ocho rondas contra otro estudiante, con copas y rangos", "#E5484D", 'data-dv="v1"'],
    ["kq", "pregunta", "PLEX Quiz", "Quiz en vivo: solo, 1 contra 1 o en sala con tu clase", "#7C3AED", 'data-dv="kq"'],
    ["wb", "espadas", "Word Battle", "Duelo de vocabulario en tiempo real", "#EC4899", 'data-jx-juego="wb"'],
    ["tc", "grupo", "Team Challenge", "En equipo: cumplan la meta juntos", "#22C55E", 'data-jx-juego="tc"']];
  var hub = function(){
    var hay = { v1: !!window.PLX1V1, kq: !!window.PLX_KQ, wb: !!(window.PLXG && PLXG.juegos && PLXG.juegos.wb), tc: !!(window.PLXG && PLXG.juegos && PLXG.juegos.tc) };
    return '<section class="dv" aria-label="Duelos"><header class="dv-h"><h1>1 vs 1</h1><p>Reta a otros estudiantes y sube en el ranking.</p></header><div class="dv-g">' +
      DUELOS.filter(function(d){ return hay[d[0]]; }).map(function(d){
        return '<button type="button" class="dv-c" ' + d[5] + ' style="--c:' + d[4] + '">' + (EV ? EV.sello(d[1]) : "") + "<span><b>" + d[2] + "</b><small>" + d[3] + "</small></span></button>";
      }).join("") + "</div></section>";
  };
  if (typeof GV.ranking === "function") {
    var rk0 = GV.ranking;
    GV.ranking = function(){ return hub() + rk0.apply(this, arguments); };
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-dv]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    try { if (b.dataset.dv === "v1") PLX1V1.open(); else if (b.dataset.dv === "kq") PLX_KQ.abrir(); } catch (x) {}
  }, true);

  /* ====================== 3. la barra: Inicio · Práctica · 1 vs 1 · Perfil ====================== */
  var L = function(p){ return '<svg class="li" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>"; };
  var TABS = [
    ["parcours", "Inicio", L('<path d="M4 11.500 12 4l8 7.500V20h-5.500v-5h-5v5H4z"/>')],
    ["retos", "Práctica", L('<path d="M7.500 7h9a4.500 4.500 0 0 1 4.400 5.400l-.9 4a2.200 2.200 0 0 1-3.800 1L15 16H9l-1.200 1.400a2.200 2.200 0 0 1-3.800-1l-.9-4A4.500 4.500 0 0 1 7.500 7Z"/><path d="M8 10.500v3M6.500 12h3"/><circle cx="15.500" cy="11" r=".6"/><circle cx="17" cy="13" r=".6"/>')],
    ["ranking", "1 vs 1", L('<path d="M20 4 8.500 15.500M4 4l11.500 11.500M6 13l5 5M13 18l5-5M8.500 15.500l-4 4M15.500 15.500l4 4"/>')],
    ["tienda", "Tienda", L('<path d="M5 8h14l-1 12.500H6zM9 8V6.500a3 3 0 0 1 6 0V8"/>')],
    ["perfil", "Perfil", L('<circle cx="12" cy="8" r="4"/><path d="M4 20.500a8 8 0 0 1 16 0"/>')]
  ];
  /* a qué pestaña pertenece cada vista */
  var DE = { lecciones: "parcours", dictee: "retos", carnet: "retos", atelier: "retos", journal: "retos", guia: "retos", privacidad: "perfil", docente: "perfil" };
  var barra = function(){
    var cur = typeof view !== "undefined" ? (DE[view] || view) : "";
    ["#nav", "#tabbar"].forEach(function(sel){
      var box = document.querySelector(sel); if (!box || !box.querySelector('button[data-view="parcours"]')) return;   /* otra barra (panel docente): no se toca */
      var hay = [].map.call(box.querySelectorAll("button"), function(b){ return (b.dataset.mpk || "") + (b.getAttribute("aria-current") ? "*" : ""); }).join(",");
      var quiero = TABS.map(function(t){ return t[0] + (t[0] === cur ? "*" : ""); }).join(",");
      if (hay === quiero) return;
      box.innerHTML = TABS.map(function(t){
        return "<button " + (t[0] === "ranking" ? 'data-av-rank="1"' : 'data-view="' + t[0] + '"') + ' data-mpk="' + t[0] + '" class="px-navbtn"' + (t[0] === cur ? ' aria-current="page"' : "") + ">" + t[2] + '<span class="label">' + t[1] + "</span></button>";
      }).join("");
      box.dataset.mp = "4";
    });
  };
  if (typeof renderNav === "function") {
    var nav0 = renderNav;
    renderNav = function(){ var r = nav0.apply(this, arguments); try { barra(); } catch (e) {} return r; };
  }
  /* la vista de juegos se llama Práctica, igual que su pestaña */
  var nombres = function(){
    var h = typeof view !== "undefined" && view === "retos" ? document.querySelector("#view h1") : null; if (h && h.textContent.trim() === "Jugar") h.textContent = "Práctica";
    [].forEach.call(document.querySelectorAll('#view .gback[data-view="retos"]'), function(b){
      var n = b.lastChild; if (n && n.nodeType === 3 && /Jugar|Retos/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/Jugar|Retos/, "Práctica");
    });
  };

  /* el recorrido habla de la organización nueva */
  try {
    var guia = function(a){
      a.forEach(function(st){
        if (st.view === "parcours" && st.t === "Inicio") { st.sel = ".mp .mp-n.sig .mp-hex, .mp-ban"; st.p = "Este es tu mapa. Cada hexágono es una lección: toca la que brilla para seguir donde vas."; }
        if (st.view === "retos") { st.t = "Práctica"; st.p = "Juegos para repasar jugando, Practicar con repasos y habilidades, y Explorar con tus profesores. ¡Aquí se gana mucha XP!"; }
        if (st.view === "perfil" && /Ranking/.test(st.p || "")) st.p = st.p.replace("La clasificación está en Ranking.", "Los duelos y el ranking están en «1 vs 1».");
      });
    };
    if (typeof TOUR !== "undefined") guia(TOUR);
    if (typeof T_TOUR !== "undefined") guia(T_TOUR);
  } catch (e) {}

  var r0 = render;
  render = function(){
    var r = r0.apply(this, arguments);
    try { mapa(); barra(); nombres(); } catch (e) {}
    return r;
  };
  /* otros módulos reordenan Inicio y repintan la barra un cuadro después */
  var pend = false;
  new MutationObserver(function(){
    if (pend) return; pend = true;
    requestAnimationFrame(function(){ pend = false; try { mapa(); barra(); nombres(); } catch (e) {} });
  }).observe(document.getElementById("view") || document.body, { childList: true, subtree: true });
  var obsNav = function(id){ var n = document.getElementById(id); if (n) new MutationObserver(function(){ try { barra(); } catch (e) {} }).observe(n, { childList: true }); };
  obsNav("nav"); obsNav("tabbar");

  /* ====================== estilos ====================== */
  var oscuro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); };
    return f(":root[data-theme=dark]") + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(":root:not([data-theme=light])") + "{" + decl + "}}";
  };
  var css = [
    ".gmain > .m-course.mp-oculta{display:none!important}",
    /* el saludo cede el sitio a la unidad: en Inicio manda el mapa */
    ".greet.mp-en > :not(.mp){display:none!important}.greet.mp-en{box-sizing:border-box;width:auto!important;max-width:100%!important;padding:0!important;margin:0!important;background:none!important;box-shadow:none!important;border:0!important}",
    ".mp{--mp-ink:#23212C;--mp-sub:#36255C;--mp-mut:#6A6290;--mp-acc:#2F6BFF;--mp-oro:#A87800;--mp-f1:rgba(70,100,180,.38);--mp-f2:rgba(70,100,180,.5);--mp-pt:#2F6BFF;--mp-lk1:rgba(214,223,243,.95);--mp-lk2:rgba(180,194,226,.95);--mp-lki:#8493BD;--mp-sh:rgba(46,78,170,.28);--mp-trk:rgba(14,26,58,.1);--mp-veil:linear-gradient(180deg,rgba(246,243,255,.25) 0,rgba(246,243,255,.9) 64%,rgba(246,243,255,1) 100%),linear-gradient(90deg,rgba(248,246,255,.96) 0,rgba(248,246,255,.5) 55%,rgba(248,246,255,.15));position:relative;text-align:left;margin:0 0 20px;width:var(--mp-w,100%);max-width:100%;color:var(--mp-ink)}",
    ".mp-foto{position:absolute;left:-16px;right:-16px;top:-18px;height:280px;-webkit-mask-image:linear-gradient(180deg,#000 20%,transparent 92%),linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-composite:intersect;background-size:cover;background-position:center 34%;opacity:.5;pointer-events:none;border-radius:24px;-webkit-mask-image:linear-gradient(180deg,#000 30%,transparent 96%);mask-image:linear-gradient(180deg,#000 30%,transparent 96%)}.mp-foto::after{content:'';position:absolute;inset:0;background:var(--mp-veil)}",
    ".mp .mp-tit{position:relative;padding:14px 128px 0 4px;min-height:132px}.mp-tit small{font:600 .7rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.2em;text-transform:uppercase;color:var(--mp-acc)}.mp .mp-h{margin:5px 0 9px;font:700 clamp(1.5rem,5.6vw,2.15rem)/1.08 Poppins,system-ui,sans-serif;letter-spacing:-.02em;color:var(--mp-ink)}",
    ".mp .mp-pr{margin:0;display:flex;align-items:center;gap:6px;font:400 .86rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-sub)}.mp-pr b,.mp-pr span{white-space:nowrap}.mp-pr b{color:var(--mp-ink);font-weight:600}.mp-pr u{margin-left:8px;text-decoration:none;display:block;flex:1 1 30px;max-width:130px;min-width:24px;height:4px;border-radius:9px;background:var(--mp-trk);overflow:hidden}.mp-pr u s{display:block;height:100%;border-radius:9px;background:linear-gradient(90deg,#4C86FF,#2F6BFF);box-shadow:0 0 10px rgba(47,107,255,.8)}",
    /* Manzana, con halo y sombra para que se asiente sobre la escena */
    ".mp-mz{position:absolute;right:2px;top:0;display:flex;align-items:flex-start;gap:4px;pointer-events:none}.mp .mp-mz img{display:block;position:relative;width:112px;height:auto;filter:drop-shadow(0 16px 14px var(--mp-sh))}.mp-mz > i{position:absolute;right:-12px;top:6px;width:160px;height:140px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,210,0,.3),rgba(47,107,255,.2) 55%,transparent);filter:blur(10px)}",
    ".mp-bb{display:none;margin-top:22px;padding:10px 14px;border-radius:16px 16px 5px 16px;font:400 .76rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-sub)}.mp-bb b{display:block;font:700 .9rem/1.25 Poppins,system-ui,sans-serif;color:var(--mp-ink)}",
    /* la ruta */
    ".mp-cam{position:relative;max-width:100%;margin:6px 0 0}.mp-sig{max-width:100%}.mp-go{white-space:nowrap}.mp-via{position:absolute;left:0;top:0;overflow:visible}.mp-via path{fill:none;stroke-linecap:round}.mp-via .f1{stroke:var(--mp-f1);stroke-width:1.2}.mp-via .f2{stroke:var(--mp-f2);stroke-width:3;stroke-dasharray:.1 15}",
    ".mp-via .c0{stroke:#2F6BFF;stroke-width:9;opacity:.2;filter:blur(5px)}.mp-via .c1{stroke:#5B8DFF;stroke-width:2;filter:drop-shadow(0 0 5px rgba(76,134,255,.9))}.mp-via .c2{stroke:var(--mp-pt);stroke-width:4.5;stroke-dasharray:.1 15;filter:drop-shadow(0 0 4px #4C86FF)}.mp-via .c3{stroke:#FFD200;stroke-width:4.5;stroke-dasharray:.1 15;filter:drop-shadow(0 0 6px #FFD200)}",
    /* estaciones */
    ".mp-n{position:absolute;width:0;height:0;--s:50px}.mp-n.sig{--s:66px}.mp-n.pend{--s:46px}.mp-n.cofre{--s:56px}.mp.hz .mp-n{--s:58px}.mp.hz .mp-n.sig{--s:76px}.mp.hz .mp-n.pend{--s:54px}.mp.hz .mp-n.cofre{--s:64px}",
    ".mp-hex{all:unset;box-sizing:border-box;position:absolute;left:calc(var(--s)*-.64);top:calc(var(--s)*-.64);width:calc(var(--s)*1.28);height:calc(var(--s)*1.36);display:block;transition:transform .2s var(--v4-spring,ease)}button.mp-hex{cursor:pointer}button.mp-hex:hover{transform:translateY(-3px)}button.mp-hex:active{transform:translateY(2px) scale(.97)}button.mp-hex:focus-visible{outline:2px solid #FFD200;outline-offset:2px;border-radius:18px}",
    ".mp-hx{position:absolute;inset:0;display:grid;place-items:center}.mp-hx > svg:first-of-type{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.mp-hx .mp-ic{position:relative;width:32%;height:32%;color:#fff;margin-top:-7%;--ico-a:#FFD200;filter:drop-shadow(0 1px 2px rgba(0,20,90,.5));stroke-width:2}.mp .mp-hx img{display:block;position:relative;width:64%;height:auto;margin-top:-6%;filter:drop-shadow(0 6px 8px var(--mp-sh))}",
    ".mp-hx .h1{fill:url(#mp-az)}.mp-hx .h2{fill:#16389E}.mp-hx .h3{fill:url(#mp-sh)}.mp-hx .h4{fill:none;stroke:url(#mp-ed);stroke-width:1.6}.mp-n.hec .mp-hx > svg{filter:drop-shadow(0 8px 10px var(--mp-sh)) drop-shadow(0 0 10px rgba(47,107,255,.45))}",
    ".mp-n.sig .h2{fill:#12308F}.mp-n.sig .h4{stroke:#FFD200;stroke-width:2.4}.mp-hx .rg{fill:none;stroke:#FFD200;stroke-width:1.2;opacity:.75;stroke-dasharray:3 5}.mp-n.sig .mp-hx > svg{filter:drop-shadow(0 12px 14px var(--mp-sh)) drop-shadow(0 0 16px rgba(47,107,255,.9))}.mp-n.sig .mp-ic{width:34%;height:34%}",
    ".mp-halo{position:absolute;inset:-34%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,210,0,.38),rgba(47,107,255,.3) 50%,transparent 72%);filter:blur(4px);animation:mpLate 2.6s ease-in-out infinite}@keyframes mpLate{50%{opacity:.55;transform:scale(1.08)}}",
    ".mp-n.pend .h1{fill:var(--mp-lk1)}.mp-n.pend .h2{fill:var(--mp-lk2)}.mp-n.pend .h3{opacity:.35}.mp-n.pend .h4{opacity:.45}.mp-n.pend .mp-ic{color:var(--mp-lki);--ico-a:var(--mp-lki);filter:none}.mp-n.pend .mp-hx > svg{filter:drop-shadow(0 6px 8px var(--mp-sh))}",
    ".mp-n.cofre .h1{fill:url(#mp-oro);fill-opacity:.3}.mp-n.cofre .h2{fill:#B98600;fill-opacity:.3}.mp-n.cofre .h4{stroke:#FFD200;stroke-opacity:.9}.mp-n.cofre .mp-hx > svg{filter:drop-shadow(0 0 14px rgba(255,210,0,.5))}.mp .mp-n.cofre:not(.hec) .mp-hx img{filter:saturate(.75) drop-shadow(0 6px 8px var(--mp-sh))}",
    ".mp-st{position:absolute;bottom:25%;display:flex;gap:2.5px}.mp-st b{width:3.5px;height:3.5px;border-radius:50%;background:#FFD200;box-shadow:0 0 4px #FFD200}",
    /* etiquetas: a la derecha en el teléfono; arriba o abajo de la estación en escritorio */
    ".mp-t{position:absolute;display:grid;gap:1px;pointer-events:none}.mp-n.de .mp-t{left:calc(var(--s)*.64 + 8px);top:-17px;width:max-content;max-width:min(52vw,210px)}.mp-n.ab .mp-t,.mp-n.ar .mp-t{left:-66px;width:132px;text-align:center}.mp-n.ab .mp-t{top:calc(var(--s)*.62 + 8px)}.mp-n.ar .mp-t{bottom:calc(var(--s)*.62 + 4px)}",
    ".mp-t small{font:600 .6rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.12em;text-transform:uppercase;color:var(--mp-mut)}.mp-t b{font:500 .8rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-sub);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".mp-n.sig .mp-t small,.mp-n.cofre .mp-t b{color:var(--mp-oro)}.mp-n.sig .mp-t b{font:700 .92rem/1.2 Poppins,system-ui,sans-serif;color:var(--mp-ink)}.mp-n.pend .mp-t b{color:var(--mp-mut)}.mp-n.cofre .mp-t b{font-weight:600}",
    /* la lección que sigue: una tarjeta flotante */
    ".mp-sig{position:relative;display:flex;align-items:center;gap:14px;margin:10px 0 4px;padding:11px 11px 11px 18px;border-radius:20px}.mp.hz .mp-sig{margin-top:14px;padding-left:22px}.mp-sig > span{flex:1;min-width:0;display:grid;gap:2px}.mp-sig small{font:600 .64rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.12em;text-transform:uppercase;color:var(--mp-mut)}.mp-sig b{font:700 clamp(.98rem,3.8vw,1.14rem)/1.2 Poppins,system-ui,sans-serif;color:var(--mp-ink);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".mp-go{all:unset;box-sizing:border-box;cursor:pointer;flex:none;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 20px;border-radius:14px;background:linear-gradient(180deg,#FFE680 0,#FFD200 45%,#F5BE00 100%);color:#0B1F5C;font:700 .9rem Poppins,system-ui,sans-serif;box-shadow:inset 0 1px 0 rgba(255,255,255,.8),inset 0 -2px 0 rgba(170,120,0,.35),0 14px 26px -12px rgba(255,196,0,.75);transition:transform .18s var(--v4-e,ease),box-shadow .18s}.mp-go:hover{transform:translateY(-1px)}.mp-go:active{transform:translateY(1px) scale(.98)}.mp-go .ev-ic{width:17px;height:17px;--ico-a:#0B1F5C;filter:none}",
    ".mp-pie{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding:0 4px}.mp-pie span{font:400 .8rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-mut)}.mp-todo{all:unset;cursor:pointer;font:600 .82rem/1 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-acc);padding:9px 2px}",
    "@media (min-width:1024px){.mp-bb{display:block}.mp .mp-mz img{width:138px}.mp .mp-tit{padding-right:330px;min-height:150px}.mp-foto{height:330px}}",
    ".mp-av,.mp-gato{display:none}",
    /* ---------- teléfono y tableta: franja fija con la lección que sigue y el sendero centrado ---------- */
    "@media (max-width:1023px){" + [
      ".mp-foto,.mp .mp-tit,.mp-mz{display:none!important}.mp{margin-top:2px}",
      ".mp .mp-sig{position:sticky;top:8px;z-index:6;margin:0 0 6px;padding:13px 12px 13px 18px;border-radius:18px;background:linear-gradient(135deg,#3B78FF 0,#2F6BFF 45%,#36255C 130%)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 16px 30px -18px rgba(47,107,255,.9)!important}.mp .mp-sig::before,.mp .mp-sig::after{display:none}",
      ".mp .mp-sig small{color:rgba(255,255,255,.82);font-size:.68rem;letter-spacing:.14em}.mp .mp-sig b{color:#fff;font-size:1.08rem;-webkit-line-clamp:2}",
      ".mp .mp-av{display:block;text-decoration:none;height:4px;margin-top:7px;max-width:150px;border-radius:9px;background:rgba(255,255,255,.26);overflow:hidden}.mp-av s{display:block;height:100%;border-radius:9px;background:#FFD200;box-shadow:0 0 8px rgba(255,210,0,.8)}",
      ".mp .mp-go{width:50px;height:50px;padding:0;border-radius:16px}.mp .mp-go > span{position:absolute;left:-9999px}.mp .mp-go .ev-ic{width:22px;height:22px}",
      ".mp-n{--s:64px}.mp-n.sig{--s:82px}.mp-n.pend{--s:60px}.mp-n.cofre{--s:68px}",
      ".mp-n:not(.sig):not(.cofre) .mp-t{display:none}.mp-n.sig .mp-t b{font-size:1rem}.mp-n.ab .mp-t{left:-90px;width:180px}.mp-n.de .mp-t{left:calc(var(--s)*.64 + 10px);right:auto;top:-20px;width:max-content;max-width:150px}.mp-n.iz .mp-t{left:auto;right:calc(var(--s)*.64 + 10px);top:-20px;width:max-content;max-width:150px;text-align:right}",
      ".mp .mp-cam > .mp-gato{display:block!important;position:absolute;right:2px;width:104px;height:auto;pointer-events:none;filter:drop-shadow(0 12px 12px var(--mp-sh));animation:mpMz 3.2s ease-in-out infinite}.mp .mp-cam > .mp-gato.iz{right:auto;left:2px;transform:scaleX(-1)}@keyframes mpMz{50%{translate:0 -5px}}",
      ".mp-pie{margin-top:4px}"
    ].join("") + "}",
    "@media (prefers-reduced-motion:reduce){.mp-halo,.mp .mp-gato{animation:none}button.mp-hex{transition:none}}",
    oscuro(".mp", "--mp-ink:#F2F5FF;--mp-sub:#C4D0F5;--mp-mut:#A99FD0;--mp-acc:#D2C3F6;--mp-oro:#FFD200;--mp-f1:rgba(150,172,236,.3);--mp-f2:rgba(150,172,236,.42);--mp-pt:#DCE8FF;--mp-lk1:rgba(92,110,170,.42);--mp-lk2:rgba(40,54,104,.8);--mp-lki:#8D9CCB;--mp-sh:rgba(0,0,0,.6);--mp-trk:rgba(255,255,255,.12);--mp-veil:linear-gradient(180deg,rgba(19,24,60,.3) 0,rgba(19,24,60,.88) 64%,rgba(19,24,60,1) 100%),linear-gradient(90deg,rgba(18,24,62,.96) 0,rgba(18,24,62,.55) 55%,rgba(18,24,62,.2))"),
    /* ---------- 1 vs 1 ---------- */
    ".dv{margin:0 0 20px}.dv-h h1{margin:0 0 2px;font:700 1.7rem/1.1 Poppins,system-ui,sans-serif;color:var(--v4-ink,#0E1A3A)}.dv-h p{margin:0 0 12px;font:400 .95rem/1.4 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--v4-mute,#6B7896)}",
    ".dv-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:700px){.dv-g{grid-template-columns:repeat(4,minmax(0,1fr))}}",
    ".dv-c{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;flex-direction:column;gap:10px;min-height:138px;padding:14px;border-radius:18px;overflow:hidden;color:#fff;background:linear-gradient(160deg,color-mix(in srgb,var(--c) 92%,#fff),color-mix(in srgb,var(--c) 62%,#081030));box-shadow:0 12px 24px -18px rgba(14,26,58,.6);transition:transform .2s var(--v4-e,ease)}.dv-c:active{transform:scale(.97)}",
    ".dv-c .ev-sello{width:48px;height:48px;margin:0;animation:none}.dv-c .ev-sello-f{fill-opacity:1}.dv-c .ev-sello .ev-ic{width:23px;height:23px;color:#fff;filter:none}",
    ".dv-c span:last-child{display:grid;gap:3px;margin-top:auto}.dv-c b{font:700 1rem/1.15 Poppins,system-ui,sans-serif}.dv-c small{font:500 .8rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:rgba(255,255,255,.9)}",
    /* la cabecera del ranking pasa a ser una sección dentro de la pestaña */
    ".dv + .rkv .rkv-hero h1{font-size:1.5rem}",
    /* ---------- barra de cuatro ---------- */
    "html.mk body nav#tabbar.tabbar[data-mp] button.px-navbtn{flex:1 1 0;min-width:0}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx89"; st.textContent = css; document.head.appendChild(st);
  window.PLX_ORG = { tabs: TABS, de: DE, barra: barra };
  try { renderNav(); render(); } catch (e) {}
})();
