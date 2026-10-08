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

  /* ====================== 1. Inicio: franja y camino ====================== */
  var HEX = "M50 3.500c3.200 0 6.300.800 9 2.400l27.500 15.900c5.600 3.200 9 9.200 9 15.600v25.200c0 6.400-3.400 12.400-9 15.600L59 94.100a18 18 0 0 1-18 0L13.500 78.200c-5.600-3.200-9-9.200-9-15.600V37.400c0-6.400 3.400-12.400 9-15.600L41 5.900c2.700-1.600 5.800-2.400 9-2.400z";
  var XS = [50, 70, 58, 34, 26, 42];   /* por dónde serpentea el camino (% del ancho) */
  var PASO = 104, ARRIBA = 56;
  var camino = function(pts){
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var i = 1; i < pts.length; i++) { var a = pts[i - 1], b = pts[i], m = (a[1] + b[1]) / 2; d += " C" + a[0] + " " + m + " " + b[0] + " " + m + " " + b[0] + " " + b[1]; }
    return d;
  };
  var tramo = function(u, ui, nx, k0, vista){
    /* vista: la unidad que sigue, sin estado (solo se asoma) */
    var ls = vista ? u.ls.slice(0, 3) : u.ls, pts = [], h = "", n = ls.length + (vista ? 0 : 1);
    for (var i = 0; i < n; i++) pts.push([XS[(k0 + i) % XS.length], ARRIBA + i * PASO]);
    var alto = ARRIBA + (n - 1) * PASO + 62, hasta = -1;
    ls.forEach(function(l, i){ if (!vista && (hecha(l) || (nx && l.id === nx.id))) hasta = i; });
    var completa = !vista && ls.filter(function(l){ return !l.special; }).every(hecha);
    if (completa) hasta = n - 1;
    h += '<svg class="mp-via" viewBox="0 0 100 ' + alto + '" preserveAspectRatio="none" aria-hidden="true"><path class="mp-via-b" d="' + camino(pts) + '"/>' +
      (hasta > 0 ? '<path class="mp-via-h" d="' + camino(pts.slice(0, hasta + 1)) + '"/>' : "") + "</svg>";
    ls.forEach(function(l, i){
      var est = vista ? "pend" : hecha(l) ? "hecha" : nx && l.id === nx.id ? "sig" : "pend", p = pts[i], izq = p[0] > 50;
      h += '<div class="mp-n ' + est + (izq ? " izq" : "") + '" style="--x:' + p[0] + "%;top:" + p[1] + 'px">' +
        '<button class="mp-hex" data-open="' + esc(l.id) + '" aria-label="' + esc("Lección " + (i + 1) + ": " + plano(l.title) + (est === "hecha" ? " (hecha)" : est === "sig" ? " (siguiente)" : "")) + '">' +
        '<svg class="mp-hx" viewBox="0 0 100 100" aria-hidden="true"><path class="mp-hx-s" d="' + HEX + '" transform="translate(0 7)"/><path class="mp-hx-f" d="' + HEX + '"/></svg>' + ico(icoDe(l)) +
        (est === "hecha" ? '<i class="mp-ok" aria-hidden="true">' + (EV ? EV.ico("check") : "") + "</i>" : "") + "</button>" +
        '<span class="mp-t"><small>' + (est === "sig" ? "Sigue aquí" : "Lección " + (i + 1)) + "</small><b>" + esc(plano(l.title)) + "</b></span>" +
        (est === "sig" ? '<img class="mp-mz" src="img/mz/saluda.webp" alt="" decoding="async">' : "") + "</div>";
    });
    if (!vista) {
      var f = pts[n - 1];
      h += '<div class="mp-n meta' + (completa ? " hecha" : "") + (f[0] > 50 ? " izq" : "") + '" style="--x:' + f[0] + "%;top:" + f[1] + 'px"><span class="mp-cofre"><img src="img/ic/' + (completa ? "trofeo" : "regalo") + '.webp" alt="" width="64" height="64" decoding="async"></span>' +
        '<span class="mp-t"><small>' + (completa ? "Unidad completa" : "Meta de la unidad") + "</small><b>" + (completa ? "¡Lo lograste!" : "Termina las " + ls.filter(function(l){ return !l.special; }).length + " lecciones") + "</b></span></div>";
    }
    return '<div class="mp-u' + (vista ? " vista" : "") + '"><div class="mp-uh"><small>Unidad ' + (ui + 1) + (vista ? " · después" : "") + "</small><b>" + esc(plano(u.t)) + '</b></div><div class="mp-cam" style="height:' + alto + 'px">' + h + "</div></div>";
  };
  var firma = "";
  var mapaHTML = function(){
    var tr = curso(), us = unidadesDe(tr), nx = typeof nextLesson === "function" ? nextLesson(tr) : null;
    if (!us.length) return "";
    var T = (typeof TRACKS !== "undefined" && TRACKS.filter(function(x){ return x.id === tr; })[0]) || { label: "" };
    var ui = nx ? Math.max(0, us.map(function(u){ return u.t; }).indexOf(nx.unit)) : us.length - 1, u = us[ui];
    var li = nx ? u.ls.map(function(l){ return l.id; }).indexOf(nx.id) : -1;
    var ban = nx ?
      '<button class="mp-ban" data-open="' + esc(nx.id) + '"><span><small>Unidad ' + (ui + 1) + ", lección " + (li + 1) + "</small><b>" + esc(plano(nx.title)) + '</b></span><i aria-hidden="true">' + (EV ? EV.ico("flechas") : "›") + "</i></button>" :
      '<div class="mp-ban fin"><span><small>' + esc(T.label) + "</small><b>¡Curso completo!</b></span></div>";
    var todas = LESSONS.filter(function(l){ return l.track === tr && !l.special; }), nH = todas.filter(hecha).length;
    return '<section class="mp" data-mp="' + esc(tr) + '" aria-label="Mapa del curso">' + ban +
      '<div class="mp-lienzo"><img class="mp-torre" src="img/ic/torre-eiffel.webp" alt="" aria-hidden="true" decoding="async">' +
      tramo(u, ui, nx, 0, false) + (us[ui + 1] ? tramo(us[ui + 1], ui + 1, nx, u.ls.length + 1, true) : "") + "</div>" +
      '<div class="mp-pie"><span>' + esc(T.label) + " · " + nH + " de " + todas.length + ' lecciones</span><button class="mp-todo" data-view="lecciones">Ver todo el curso</button></div></section>';
  };
  var mapa = function(){
    if (typeof view === "undefined" || view !== "parcours") return;
    var main = document.querySelector("#view .gmain"); if (!main || main.closest(".gdoc")) return;
    var g = main.querySelector(":scope > .greet"); if (!g) return;
    var tr = curso(), nx = typeof nextLesson === "function" ? nextLesson(tr) : null, f = tr + "|" + (nx ? nx.id : "fin") + "|" + Object.keys(S.lessons || {}).length;
    /* va dentro del saludo: plx78 reordena a los hijos de .gmain en cada pintada y un hermano nuevo acabaría al final */
    var ya = g.querySelector(":scope > .mp"), mc = main.querySelector(":scope > .m-course");
    if (mc) mc.classList.add("mp-oculta");   /* la tarjeta «Continuar» la reemplaza la franja */
    if (ya && f === firma) { if (g.lastElementChild !== ya) g.appendChild(ya); return; }
    var h = mapaHTML(); if (!h) return;
    if (ya) ya.remove();
    g.insertAdjacentHTML("beforeend", h); firma = f;
  };

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
    ".greet > .mp{margin-top:16px;text-align:left}.mp{--mp-az:#2F6BFF;--mp-az2:#1B4FD8;--mp-pend:#C9D3EA;--mp-pend2:#AAB7D6;--mp-via:#D5DEF2;margin:4px auto 18px;max-width:460px;width:100%}",
    /* la franja de la lección que sigue */
    ".mp-ban{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:14px 16px 14px 18px;border-radius:18px;color:#fff;background:linear-gradient(120deg,#2F6BFF,#1E9BFF);box-shadow:0 14px 28px -16px rgba(47,107,255,.9);transition:transform .2s var(--v4-e,ease)}",
    ".mp-ban:active{transform:scale(.985)}.mp-ban span{display:grid;gap:3px;min-width:0}.mp-ban small{font:600 .72rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.12em;text-transform:uppercase;opacity:.92}",
    ".mp-ban b{font:700 1.12rem/1.2 Poppins,system-ui,sans-serif;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".mp-ban i{flex:none;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;box-shadow:inset 0 0 0 2px rgba(255,255,255,.9)}.mp-ban i .ev-ic{width:20px;height:20px;--ico-a:#FFD200}.mp-ban.fin{cursor:default}",
    /* el lienzo del mapa */
    ".mp-lienzo{position:relative;margin-top:12px;padding:16px 14px 8px;border-radius:22px;overflow:hidden;background:radial-gradient(120% 60% at 80% 0,#E3ECFF 0,rgba(227,236,255,0) 60%),linear-gradient(180deg,#F1F5FF,#FBFCFF);box-shadow:inset 0 0 0 1px var(--v4-line,#E3E8F4)}",
    ".mp .mp-torre{position:absolute;right:6px;top:8px;width:58px;height:auto;opacity:.55;pointer-events:none;filter:saturate(.7);display:block}",
    ".mp .mp-uh{margin:0 2px 2px;padding-right:64px;display:grid;gap:1px;position:relative}.mp-uh small{font:600 .7rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.14em;text-transform:uppercase;color:var(--mp-az)}.mp-uh b{font:700 1.02rem/1.25 Poppins,system-ui,sans-serif;color:var(--v4-ink,#0E1A3A)}",
    ".mp-cam{position:relative}.mp-via{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.mp-via path{fill:none;stroke-linecap:round;vector-effect:non-scaling-stroke}.mp-via-b{stroke:var(--mp-via);stroke-width:12}.mp-via-h{stroke:var(--mp-az);stroke-width:12;opacity:.9}",
    /* nodos */
    ".mp-n{position:absolute;left:0;right:0;height:0}.mp-hex{all:unset;box-sizing:border-box;cursor:pointer;position:absolute;left:calc(var(--x) - 36px);top:-38px;width:72px;height:78px;display:grid;place-items:center;transition:transform .2s var(--v4-spring,ease)}.mp-hex:active{transform:translateY(4px)}",
    ".mp-hx{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.mp-hx-f{fill:var(--mp-pend)}.mp-hx-s{fill:var(--mp-pend2)}",
    ".mp-hex .mp-ic{position:relative;width:30px;height:30px;color:#fff;--ico-a:rgba(255,255,255,.55);stroke-width:2;margin-top:-4px;filter:none}",
    ".mp-n.hecha .mp-hx-f{fill:var(--mp-az)}.mp-n.hecha .mp-hx-s{fill:var(--mp-az2)}.mp-n.hecha .mp-ic{--ico-a:#FFD200}",
    ".mp-n.sig .mp-hex{left:calc(var(--x) - 42px);top:-44px;width:84px;height:91px}.mp-n.sig .mp-hx-f{fill:#1E9BFF}.mp-n.sig .mp-hx-s{fill:var(--mp-az2)}.mp-n.sig .mp-ic{width:34px;height:34px;--ico-a:#FFD200}",
    ".mp-n.sig .mp-hx{filter:drop-shadow(0 0 12px rgba(47,107,255,.55));animation:mpLate 2.4s ease-in-out infinite}@keyframes mpLate{50%{filter:drop-shadow(0 0 20px rgba(47,107,255,.85))}}",
    ".mp-ok{position:absolute;right:2px;top:2px;width:22px;height:22px;border-radius:50%;background:#FFD200;color:#0B1F5C;display:grid;place-items:center;box-shadow:0 0 0 2px #fff}.mp-ok .ev-ic{width:13px;height:13px;stroke-width:3;filter:none}",
    /* etiqueta al lado con más sitio */
    ".mp-t{position:absolute;top:-24px;left:calc(var(--x) + 46px);right:2px;display:grid;gap:1px;pointer-events:none}.mp-n.izq .mp-t{left:2px;right:calc(100% - var(--x) + 46px);text-align:right}",
    ".mp-t small{font:600 .66rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.1em;text-transform:uppercase;color:var(--v4-mute,#6B7896)}.mp-t b{font:600 .82rem/1.22 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--v4-ink,#0E1A3A);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".mp-n.sig .mp-t{left:calc(var(--x) + 54px)}.mp-n.sig.izq .mp-t{left:2px;right:calc(100% - var(--x) + 54px)}.mp-n.sig .mp-t small{color:var(--mp-az)}.mp-n.sig .mp-t b{font-weight:700;font-size:.9rem;-webkit-line-clamp:3}.mp-n.pend .mp-t b{color:var(--v4-mute,#6B7896)}",
    /* Manzana, del lado contrario a la etiqueta */
    ".mp .mp-mz{display:block;position:absolute;left:calc(var(--x) - 118px);top:-52px;width:76px;height:auto;pointer-events:none;filter:drop-shadow(0 8px 10px rgba(14,26,58,.25));animation:mpMz 3.2s ease-in-out infinite}.mp .mp-n.izq .mp-mz{left:calc(var(--x) + 42px);transform:scaleX(-1)}@keyframes mpMz{50%{translate:0 -5px}}",
    ".mp-cofre{position:absolute;left:calc(var(--x) - 32px);top:-36px;width:64px;height:64px;display:grid;place-items:center;filter:grayscale(.75) opacity(.75)}.mp-n.meta.hecha .mp-cofre{filter:none}.mp-cofre img{width:64px;height:64px;display:block}",
    ".mp-u.vista{opacity:.55;margin-top:6px;-webkit-mask-image:linear-gradient(180deg,#000 55%,transparent);mask-image:linear-gradient(180deg,#000 55%,transparent)}.mp-u.vista .mp-hex{pointer-events:auto}",
    ".mp-pie{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px;padding:0 4px}.mp-pie span{font:500 .82rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--v4-mute,#6B7896)}",
    ".mp-todo{all:unset;cursor:pointer;font:600 .86rem/1 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--mp-az);padding:10px 14px;border-radius:999px;box-shadow:inset 0 0 0 1.500px color-mix(in srgb,var(--mp-az) 45%,transparent)}",
    "@media (prefers-reduced-motion:reduce){.mp-n.sig .mp-hx,.mp-mz{animation:none}}",
    oscuro(".mp", "--mp-pend:#33416B;--mp-pend2:#232F55;--mp-via:#26335C;--mp-az:#4C86FF;--mp-az2:#2456D6"),
    oscuro(".mp-lienzo", "background:radial-gradient(120% 60% at 80% 0,rgba(60,96,200,.35) 0,rgba(60,96,200,0) 60%),linear-gradient(180deg,#0E1A44,#0A1436);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)"),
    oscuro(".mp-uh b,.mp-t b", "color:#EEF3FF"), oscuro(".mp-n.pend .mp-t b,.mp-t small,.mp-pie span", "color:#93A3CC"), oscuro(".mp-n.sig .mp-t small,.mp-uh small,.mp-todo", "color:#8FB4FF"),
    oscuro(".mp-hex .mp-ic", "color:#fff"), oscuro(".mp-n.pend .mp-ic", "color:#9FB0DC"), oscuro(".mp-ok", "box-shadow:0 0 0 2px #0E1A44"), oscuro(".mp-torre", "opacity:.3"),
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
  try { renderNav(); render(); } catch (e) {}
})();
