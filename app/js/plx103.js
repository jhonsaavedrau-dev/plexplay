/* PLEX PLAY 4.26.0 — Componentes globales, rutas y ajuste a cualquier tamaño
   Pedido de Jhon: que nada se rompa al cambiar el zoom o el tamaño de la ventana, que la interfaz nueva (el recorrido)
   sea la principal y las rutas viejas no se abran, sin ventanas emergentes ni barras de desplazamiento de más, y con
   las mismas piezas en toda la app.

   1. RUTAS (PLX_RUTAS). La app siempre abre en el recorrido; «lecciones» (la lista vieja de unidades) ya no es una
      pantalla: quien la pida llega al recorrido.
   2. PANTALLA (PLX_UI). Lo que antes era una ventana emergente (gModal, la hoja de cursos, el aviso de ranking) es
      ahora una pantalla de la app: mismo fondo, misma columna, una cabecera con «Volver», sin velo ni tarjeta
      flotante y sin scroll propio. En las pestañas principales queda dentro del armazón (el riel o la barra siguen a la
      vista y sirven para salir); encima de una lección o un juego ocupa la ventana.
   3. CAPAS. Con una pantalla o una actividad abierta, el documento de atrás no se desplaza (antes quedaban dos barras).
      Solo el documento muestra barra; los contenedores internos se desplazan sin barra.
   4. RIEL. Se ajusta al alto de la ventana (con zoom, el pie cruzaba el último botón) y nunca se encoge por debajo de
      su contenido.
   5. UNIR PALABRAS. La palabra elegida se ve elegida y cada pareja hecha comparte color y número.
   6. PLEX QUIZ y BIENVENIDA. En ventanas bajas ya no se cortan por arriba ni por abajo.
   7. RECORRIDO. Manzana no tapa el nombre de la lección que toca (se mide y se corre).
   8. SOCIAL. La tarjeta de protectores se acomoda a su ancho (el texto se montaba sobre el botón).
   9. SELECTOR SEGMENTADO (.seg). Muestra cuál opción está elegida y pasa de renglón cuando no caben.

   El CSS va en la misma capa @layer p5 de plx101 (todo en !important). Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document, H = D.documentElement;
  if (typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ====================================================================== 1. RUTAS */
  var VIEJAS = { lecciones: "parcours" };
  var destino = function(v){ return Object.prototype.hasOwnProperty.call(VIEJAS, v) ? VIEJAS[v] : v; };
  try { var go0 = go; go = function(v){ return go0.call(this, destino(v)); }; } catch (e) {}
  var render0 = render;
  render = function(){
    try { var d = destino(view); if (d !== view) { view = d; try { lsSet("cr-view", d); } catch (x) {} } } catch (e) {}
    var r = render0.apply(this, arguments);
    try { trasPintar(); } catch (e) {}
    return r;
  };
  /* la app abre siempre en el recorrido (el docente conserva su panel) */
  try { if (view !== "parcours" && view !== "docente") { view = "parcours"; try { lsSet("cr-view", "parcours"); } catch (x) {} render(); } } catch (e) {}
  window.PLX_RUTAS = { viejas: VIEJAS, destino: destino };

  /* ====================================================================== 2. PANTALLA Y CAPAS */
  var PANTALLAS = ".gmodal,.lx-hoja,.lx-sheet,.plx53-m";                   /* antes, ventanas emergentes */
  var ACTIVIDADES = ".kq,.plxg,.v1,.dgx,.rkx,.gonb,.pclogin,.rz-cel";        /* ya ocupaban la ventana */
  var FLECHA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  var visible = function(el){ return !!el && !el.hidden && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden"; };
  var hay = function(sel){ var L = D.querySelectorAll(sel); for (var i = 0; i < L.length; i++) if (visible(L[i])) return true; return false; };
  var monta = function(el, enApp){
    if (el.classList.contains("pg-app") !== !!enApp) el.classList.toggle("pg-app", !!enApp);
    if (!el.classList.contains("gmodal")) return;
    var c = el.querySelector(".gm-card"); if (!c || c.querySelector(":scope > .pg-cab")) return;
    var k = c.querySelector(".gm-k"), t = k ? k.textContent.trim() : "";
    var cab = D.createElement("div"); cab.className = "pg-cab";
    cab.innerHTML = '<button type="button" class="pz-ibtn pg-atras" data-g="close" aria-label="Volver">' + FLECHA + '</button><b class="pg-tit">' + esc(t || "Volver") + "</b>";
    c.insertBefore(cab, c.firstChild);
    if (k) k.classList.add("pg-ya");
  };
  /* la navegación sigue viva junto a una pantalla del armazón (el núcleo deja inerte todo lo que no sea el modal) */
  var libera = function(){ ["px-rail", "tabbar", "p5-lado"].forEach(function(id){ var e = D.getElementById(id); if (e && e.hasAttribute("inert")) e.removeAttribute("inert"); }); };
  var capas = function(){
    var pl = D.getElementById("player"), act = hay(ACTIVIDADES) || !!(pl && !pl.hidden), n = 0;
    [].forEach.call(D.querySelectorAll(PANTALLAS), function(el){ if (el.classList.contains("out")) return; n++; monta(el, !act); });
    var enApp = n > 0 && !act;
    if (H.classList.contains("pg-on") !== enApp) H.classList.toggle("pg-on", enApp);
    if (H.classList.contains("pg-capa") !== (n > 0 || act)) H.classList.toggle("pg-capa", n > 0 || act);
    if (enApp) libera();
  };
  var cierraTodo = function(){
    try { gQ.length = 0; } catch (e) {}
    try { if (typeof gCloseModal === "function") gCloseModal(); } catch (e) {}
    [].forEach.call(D.querySelectorAll(".lx-hoja,.lx-sheet,.plx53-m"), function(x){ x.remove(); });
  };
  /* salir de una pantalla por el riel o por la barra: se cierra y la navegación sigue su curso */
  window.addEventListener("click", function(e){
    if (!H.classList.contains("pg-on")) return;
    var b = e.target.closest && e.target.closest("#px-rail .rl-b, #tabbar button, #p5-lado button, #p5-lado a"); if (b) cierraTodo();
  }, true);
  window.PLX_UI = {
    /* la única forma de mostrar algo «por encima»: una pantalla con cabecera y Volver */
    pantalla: function(html, opt){ opt = opt || {}; gModal((opt.titulo ? '<small class="gm-k">' + esc(opt.titulo) + "</small>" : "") + html, opt.clase || ""); },
    cerrar: cierraTodo, capas: capas
  };

  /* ====================================================================== 5. UNIR PALABRAS: cada pareja, su color */
  var pares = function(){
    var L = D.querySelectorAll("#player .mbtn"); if (!L.length) return;
    [].forEach.call(L, function(b){
      var n = "", e = b.classList.contains("pair") ? b.querySelector(".n") : null;
      if (e) { var k = parseInt(e.textContent, 10); if (k > 0) n = String((k - 1) % 6 + 1); }
      if ((b.getAttribute("data-par") || "") !== n) { if (n) b.setAttribute("data-par", n); else b.removeAttribute("data-par"); }
    });
  };

  /* ====================================================================== 7. RECORRIDO: Manzana no tapa el nombre de la lección */
  /* el nombre va centrado bajo el nodo y el Manzana de la unidad al lado: según el zigzag y el ancho, se pisaban.
     Se mide: si chocan, el nombre se corre hacia el lado libre; si no cabe, Manzana baja por debajo del nombre. */
  var libraNombre = function(){
    [].forEach.call(D.querySelectorAll("#view .p5-u"), function(u){
      var nt = u.querySelector(".p5-nt"), mz = u.querySelector(".p5-mz"); if (!nt || !mz) return;
      if (nt.style.transform) nt.style.transform = ""; if (mz.style.top) mz.style.top = "";
      var a = nt.getBoundingClientRect(), b = mz.getBoundingClientRect(), s = u.getBoundingClientRect();
      if (!a.width || !b.width || !b.height) return;
      if (a.bottom <= b.top || a.top >= b.bottom || a.right <= b.left - 8 || a.left >= b.right + 8) return;
      var der = b.left + b.width / 2 > a.left + a.width / 2, falta = der ? a.right - (b.left - 8) : (b.right + 8) - a.left;
      if (der ? a.left - falta >= s.left + 4 : a.right + falta <= s.right - 4) { nt.style.transform = "translateX(" + Math.round(der ? -falta : falta) + "px)"; return; }
      var mt = parseFloat(getComputedStyle(mz).marginTop) || 0, abajo = a.bottom + 8;
      mz.style.top = Math.round((abajo + b.height <= s.bottom ? abajo : Math.max(s.top, a.top - b.height - 76)) - s.top - mt) + "px";
    });
  };
  var libraPend = 0;
  var libra = function(){ if (libraPend) return; libraPend = requestAnimationFrame(function(){ libraPend = 0; try { libraNombre(); } catch (e) {} }); };
  /* plx89 rehace el mapa del celular ~1,5 s después de pintar: por eso se repite */
  function trasPintar(){ libra(); setTimeout(libra, 450); setTimeout(libra, 1900); }
  window.addEventListener("resize", libra);
  D.addEventListener("load", function(e){ var t = e.target; if (t && t.classList && t.classList.contains("p5-mz")) libra(); }, true);
  setTimeout(libra, 600);

  /* se vigila lo justo: los hijos del cuerpo (capas que entran y salen), la lección por dentro y cada capa
     (su clase, su `hidden` y, en las pantallas, su contenido: Ajustes se repinta y perdería la cabecera) */
  var pend = false, vistas = typeof WeakSet === "function" ? new WeakSet() : null;
  var obs = new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; tras(); }); });
  var vigila = function(){
    if (!vistas) return;
    [].forEach.call(D.querySelectorAll(PANTALLAS + "," + ACTIVIDADES), function(el){
      if (vistas.has(el)) return; vistas.add(el);
      obs.observe(el, { attributes: true, attributeFilter: ["hidden", "class", "style"] });
      var c = el.classList.contains("gmodal") ? el.querySelector(".gm-card") : null; if (c) obs.observe(c, { childList: true });
    });
  };
  var tras = function(){ try { vigila(); } catch (e) {} try { capas(); } catch (e) {} try { pares(); } catch (e) {} };
  obs.observe(D.body, { childList: true });
  var pl0 = D.getElementById("player"); if (pl0) obs.observe(pl0, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden"] });
  tras();

  /* ====================================================================== CSS (capa p5) */
  var R = [], o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  /* «.m-aj» (Ajustes) tenía reglas propias más específicas en plx101: se nombran para que la pantalla sea una sola */
  var P = "html.mk .gmodal,html.mk .gmodal.m-aj,html.mk .lx-hoja,html.mk .lx-sheet,html.mk .plx53-m";
  var C = "html.mk .gmodal .gm-card,html.mk .gmodal.m-aj .gm-card,html.mk .lx-hoja .lx-hoja-c,html.mk .lx-sheet .lxs-panel,html.mk .plx53-m .plx53-mc";
  var enApp = function(pre){ return [".gmodal", ".lx-hoja", ".lx-sheet", ".plx53-m"].map(function(s){ return pre + " " + s + ".pg-app"; }).join(","); };

  o("html{--pg-x:clamp(12px,4.3vw,24px)}");

  /* ---------- 2. pantalla: el contenedor es una página, no un velo ---------- */
  o(P + "{position:fixed;inset:0;display:block;margin:0;padding:0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;background-color:var(--p-bg);background-image:var(--p-fondo);-webkit-backdrop-filter:none;backdrop-filter:none;opacity:1;transition:none;animation:pg-entra .2s ease both}",
    "html.mk .gmodal.out{display:none}",
    "html.mk .lx-hoja:not(.in),html.mk .lx-sheet:not(.in){opacity:0;pointer-events:none}",
    C + "{position:relative;box-sizing:border-box;display:flex;flex-direction:column;width:100%;max-width:600px;min-height:100%;height:auto;max-height:none;margin:0 auto;padding:calc(var(--sat) + var(--s-3)) calc(var(--sar) + var(--pg-x)) calc(var(--sab) + var(--s-7)) calc(var(--sal) + var(--pg-x));background:none;background-image:none;border:0;border-radius:0;box-shadow:none;overflow:visible;transform:none;transition:none;animation:none;color:var(--p-tinta);font-family:var(--f-tx)}",
    /* el núcleo centraba cada pieza (rejilla con justify-items:center): aquí igual, y lo que es ancho ocupa la columna */
    "html.mk .gmodal .gm-card,html.mk .gmodal.m-aj .gm-card,html.mk .plx53-m .plx53-mc{align-items:center;gap:var(--s-3);text-align:center}",
    "html.mk .gmodal .gm-card > .pg-cab,html.mk .gmodal .gm-card > .aj,html.mk .gmodal .gm-card > form,html.mk .gmodal .gm-card > .gm-actions,html.mk .gmodal .gm-card > .qs,html.mk .gmodal .gm-card > .plist,html.mk .gmodal .gm-card > ul,html.mk .gmodal .gm-card > ol,html.mk .gmodal .gm-card > textarea,html.mk .gmodal .gm-card > input,html.mk .gmodal .gm-card > .gbtn.wide,html.mk .gmodal .gm-card > .set-row{align-self:stretch;max-width:100%}",
    "html.mk .gmodal .gm-card > *{max-width:100%;min-width:0}",
    "html.mk .gmodal .aj{text-align:left}",
    /* dentro del armazón: a la derecha del riel, a la izquierda de la columna, y por debajo de la barra */
    enApp("html.mk") + "{z-index:45}",
    "html.pg-on.mk body nav#tabbar.tabbar{z-index:70}",
    "html.pg-on .p5-volver{display:none}",
    "html.pg-capa #toast,html.pg-capa .toast{z-index:2147483640}",
    "@media (max-width:1023.98px){html.mk .gmodal.pg-app .gm-card,html.mk .gmodal.m-aj.pg-app .gm-card,html.mk .lx-hoja.pg-app .lx-hoja-c,html.mk .lx-sheet.pg-app .lxs-panel,html.mk .plx53-m.pg-app .plx53-mc{padding-bottom:calc(var(--p-barra) + var(--sab) + var(--s-8))}}",
    "@media (prefers-reduced-motion:reduce){" + P + "{animation:none}}",
    "@media (min-width:1024px){" + enApp("html.rl-on.mk") + "{left:var(--p-riel)}}",
    "@media (min-width:1440px){" + enApp("html.rl-on.p5-lado-on.mk") + "{right:calc(var(--p-lado) + var(--s-6) * 2)}}");
  /* cabecera única: Volver + título */
  o(".pg-cab{flex:none;display:flex;align-items:center;gap:var(--s-3);min-height:48px;margin:0 0 var(--s-3);text-align:left}",
    ".pg-atras{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;background:var(--p-sup);color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);transition:transform .08s,box-shadow .08s}",
    ".pg-atras:active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".pg-atras:focus-visible{outline:3px solid var(--p-oro);outline-offset:2px}",
    ".pg-atras svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}",
    ".pg-tit{min-width:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    "html.mk .gmodal .gm-k.pg-ya{display:none}",
    /* el contenido corto se centra en el alto; el largo empieza arriba y la página baja */
    "html.mk .gmodal .gm-card > .pg-cab + *{margin-top:auto}",
    "html.mk .gmodal .gm-card > :last-child{margin-bottom:auto}",
    "html.mk .gmodal .gm-card > .pg-cab:last-child{margin-bottom:var(--s-5)}",
    /* Ajustes: la lista ya no tiene scroll propio; «Listo» sigue a mano */
    "html.mk .gmodal .aj{flex:none;height:auto;min-height:0;max-height:none;overflow:visible;border-radius:var(--r-lg);box-shadow:inset 0 0 0 1.5px var(--p-linea);background:var(--p-sup)}",
    "html.mk .gmodal .aj-top{border-radius:var(--r-lg) var(--r-lg) 0 0}",
    "html.mk .gmodal .aj .set-row.c{position:static;margin:var(--s-3) 0 0;border-radius:0 0 var(--r-lg) var(--r-lg)}",
    /* hoja de cursos y aviso de ranking: su propia cabecera hace de «Volver» */
    "html.mk .lx-hoja .lx-asa,html.mk .lx-sheet .lxs-grab,html.mk .lx-sheet .lxs-bg{display:none}",
    "html.mk .lx-hoja .lx-hoja-h,html.mk .lx-sheet .lxs-h{flex:none;display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);min-height:48px;margin:0 0 var(--s-4);padding:0;border:0;background:none}",
    "html.mk .lx-hoja .lx-hoja-h b,html.mk .lx-sheet .lxs-h b{font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk .lx-hoja .lx-x,html.mk .lx-sheet [data-lxclose]:not(.lxs-bg){all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;background:var(--p-sup);color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);font:800 1rem/1 var(--f-tit)}",
    "html.mk .lx-hoja .lx-hoja-b,html.mk .lx-sheet .lxs-list{flex:none;max-height:none;overflow:visible;padding:0}",
    "html.mk .plx53-m .plx53-mc{justify-content:center;text-align:center}",
    "html.mk .plx53-m .plx53-mc h2{color:var(--p-tinta);font-family:var(--f-tit)}html.mk .plx53-m .plx53-mc p{color:var(--p-tinta-2)}");

  /* ---------- 3. capas y barras de desplazamiento ---------- */
  o("html.pg-capa{overflow:hidden}",
    "html.mk{scrollbar-width:thin;scrollbar-color:var(--p-relieve) transparent}",
    "html.mk body *:not(textarea){scrollbar-width:none}",
    "html.mk body *:not(textarea)::-webkit-scrollbar{width:0;height:0;display:none}",
    "@media (min-width:1024px) and (pointer:fine){html.mk{scrollbar-gutter:stable}}");

  /* ---------- 4. riel: cabe en cualquier alto ---------- */
  o("@media (min-width:1024px){" + [
    "#px-rail,#px-rail:not([hidden]){padding-top:clamp(10px,3vh,24px);padding-bottom:clamp(8px,2vh,16px)}",
    "#px-rail .rl-logo{flex:none;margin-bottom:clamp(4px,2vh,16px)}",
    "#px-rail .rl-logo img{width:clamp(30px,5.4vh,42px);height:clamp(30px,5.4vh,42px)}",
    "#px-rail .rl-nav{flex:none;min-height:auto;overflow:visible;padding-bottom:var(--s-3)}",
    "#px-rail .rl-h{margin:clamp(6px,2.2vh,20px) var(--s-3) clamp(3px,1vh,8px)}",
    "#px-rail .rl-b{flex:none;height:clamp(38px,6.4vh,50px)}",
    "#px-rail .cz-pie{flex:none;margin-top:auto;padding-top:clamp(6px,1.6vh,12px)}",
    "#px-rail [data-cz-rl=misiones],#px-rail [data-cz-rl=buscar]{display:none}"
  ].join("") + "}",
    "@media (min-width:1024px) and (max-height:640px){#px-rail .rl-h{display:none}#px-rail .rl-b{font-size:.8rem}#px-rail .rl-b .rl-ic{width:26px;height:26px}#px-rail .rl-nav{gap:2px}}");

  /* ---------- 5. unir palabras ---------- */
  o("html.mk #player .mbtn{position:relative;min-height:56px;gap:var(--s-3);text-align:left}",
    "html.mk #player .mbtn .n{flex:none;min-width:26px;height:26px;padding:0 6px;box-sizing:border-box;display:grid;place-items:center;border:0;border-radius:var(--r-pill);background:var(--p-sup-3);color:var(--p-apagado);font:800 .78rem/1 var(--f-tit)}",
    /* elegida: azul lleno, borde grueso y un paso adelante */
    "html.mk #player .mbtn[aria-pressed=true]{background:var(--p-azul-p);color:var(--p-tinta);box-shadow:inset 0 0 0 3px var(--p-azul),0 4px 0 var(--p-azul);transform:translateY(-2px)}",
    "html.mk #player .mbtn[aria-pressed=true] .n{background:var(--p-azul-btn);color:#fff}",
    /* pareja hecha: las dos mitades con el mismo color. Ni azul (es el de «elegida»), ni verde ni rojo (son los de la
       corrección): una pareja armada no debe leerse como «correcta» antes de verificar */
    "html.mk #player .mbtn[data-par]{--par:#D6409F}",
    "html.mk #player .mbtn[data-par='2']{--par:#D99A00}html.mk #player .mbtn[data-par='3']{--par:#8B6CFF}html.mk #player .mbtn[data-par='4']{--par:#0E9E8E}html.mk #player .mbtn[data-par='5']{--par:#F0763A}html.mk #player .mbtn[data-par='6']{--par:#2BA3D9}",
    "html.mk #player .mbtn.pair[data-par]:not(.ok):not(.ko):not([aria-pressed=true]){background:color-mix(in srgb,var(--par) 16%,var(--p-sup));color:var(--p-tinta);box-shadow:inset 0 0 0 2px var(--par),0 4px 0 var(--par)}",
    "html.mk #player .mbtn.pair[data-par]:not(.ok):not(.ko):not([aria-pressed=true]) .n{background:var(--par);color:#fff}",
    "html.mk #player .mbtn.ok .n{background:var(--p-verde-btn);color:#fff}html.mk #player .mbtn.ko .n{background:var(--p-rojo-btn);color:#fff}");

  /* ---------- 6. PLEX Quiz y bienvenida en ventanas bajas ---------- */
  o("html.mk .kq{overflow-x:hidden;overflow-y:auto}",
    "html.mk .kq .kq-top{flex:none}",
    "html.mk .kq .kq-q{flex:1 1 auto;min-height:min-content}",
    "html.mk .kq .kq-ops{flex:none}",
    "html.mk .kq .kq-op{min-height:clamp(60px,15vh,96px)}",
    "@media (min-width:1024px){html.mk .kq .kq-op{min-height:clamp(60px,16vh,128px)}}",
    "@media (max-height:640px){" + [
      "html.mk .kq .kq-q{gap:var(--s-2);padding-top:var(--s-2);padding-bottom:var(--s-2)}",
      "html.mk .kq .kq-ring{zoom:.72}",
      "html.mk .kq .kq-card{padding:var(--s-3) var(--s-4)}",
      "html.mk .kq .kq-card p{font-size:var(--t-lg)}",
      "html.mk .kq .kq-op{min-height:clamp(48px,13vh,84px);padding:var(--s-2) var(--s-3)}",
      "html.mk .kq .kq-op > span{font-size:var(--t-md)}"
    ].join("") + "}",
    /* apaisado y bajo (PC con zoom): reloj y pregunta en fila, las cuatro respuestas en una sola */
    "@media (max-height:560px) and (min-width:720px){html.mk .kq .kq-q{flex-direction:row;flex-wrap:wrap}html.mk .kq .kq-resp{flex-basis:100%;text-align:center}html.mk .kq .kq-ops{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}}",
    /* bienvenida: el paso se centra sin cortarse por arriba cuando no cabe */
    "html.mk .gonb:has(> .onb-step){display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-x:hidden;overflow-y:auto;padding:max(var(--s-4),var(--sat)) var(--pg-x) max(var(--s-4),var(--sab))}",
    "html.mk .gonb > .onb-step{flex:none;box-sizing:border-box;width:min(440px,100%);max-width:100%;min-width:0;margin:auto}",
    "@media (min-width:900px) and (min-height:560px){html.mk .gonb > .onb-step{width:min(560px,100%)}}");

  /* ---------- 8. Social: la tarjeta de protectores se acomoda a su propio ancho ---------- */
  /* era una rejilla de tres columnas que solo cambiaba con el ancho de la ventana: en la columna angosta del escritorio
     (1024 px) el texto se montaba sobre el botón. Ahora el botón baja solo cuando no cabe. */
  o(".s2-c.s2-prot{display:flex;flex-wrap:wrap;align-items:center;gap:var(--s-3)}",
    ".s2-prot .s2-slots{flex:none}",
    ".s2-prot .s2-prot-t{flex:1 1 150px;min-width:0}",
    ".s2-prot .p5-so-b{flex:0 0 auto;margin-left:auto}",
    "@media (max-width:419.98px){.s2-prot .p5-so-b{flex:1 1 100%}}");

  /* ---------- 9. selector segmentado (.seg): el mismo en toda la app ---------- */
  /* dos fallos del mismo origen que «unir palabras»: el núcleo marca la opción elegida con aria-pressed y la piel solo
     pintaba aria-selected/.on (en Dictados y en el Taller no se veía cuál estaba elegida); y con muchas opciones (los
     nueve tipos de texto del Taller) todas se repartían un renglón y se montaban unas sobre otras. Ahora cada opción
     mide lo que su texto y el selector pasa a otro renglón cuando no caben. */
  o("html.mk #view .seg{flex-wrap:wrap}",
    "html.mk #view .seg > button{flex:1 1 auto;min-width:max-content;white-space:nowrap}",
    "html.mk #view .seg > button[aria-pressed=true]{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
    /* las categorías del editor del gato son una fila que se desliza: esa no pasa de renglón */
    "html.p5-ed #view .gperfil .cust .cust-side > .seg{flex-wrap:nowrap}");

  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx103";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}\n@keyframes pg-entra{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}";
  D.head.appendChild(st);
})();
