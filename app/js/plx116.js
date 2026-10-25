/* PLEX PLAY 4.46 — Paso entre paneles como un paginador, con gestos
   1. Al tocar una pestaña, la pantalla actual se corre un poco y se oscurece, y la nueva entra deslizándose por encima
      con sombra, desde el lado de la pestaña (Inicio → Perfil, desde la derecha). Nada se vuelve transparente: no hay
      «parpadeo». Se hace con View Transitions: el navegador fotografía la pantalla vieja y anima dos imágenes en la GPU,
      sin clonar el DOM. Cabecera y barra de abajo no se mueven (se muestran en vivo); solo pasa el contenido.
   2. Gestos: deslizar a izquierda o derecha sobre el contenido cambia de pestaña. La pantalla sigue al dedo y en el borde
      asoma la pestaña de destino; al soltar pasado el umbral (o con un golpe rápido) la página termina de pasar desde
      donde la dejó el dedo. En una pantalla interna (dictados, vocabulario…) deslizar a la derecha vuelve a su pestaña.
      No interfiere con carruseles horizontales, campos de texto, el teclado propio ni Manzana 3D.
   3. La píldora de la pestaña activa viaja con un rebote suave y el ícono nuevo da un saltito.
   Sin View Transitions (navegadores viejos) la página cambia al instante con un leve desplazamiento, sin fundido.
   Con «reducir movimiento» no se anima nada (los gestos siguen funcionando). localStorage plx-tx=no lo apaga todo y
   vuelven las transiciones viejas de plx69/plx78. go() sigue siendo síncrono para todo lo que no sea la barra o un gesto. */
(function(){
  "use strict";
  var D = document, H = D.documentElement, V = D.getElementById("view");
  if (!V || typeof go !== "function" || !V.animate) return;
  try { if (localStorage.getItem("plx-tx") === "no") return; } catch (e) {}
  window.PLX_TX = true;
  var RM = matchMedia("(prefers-reduced-motion: reduce)");
  var VT = typeof D.startViewTransition === "function" && !window.PLX_LIVIANO;   /* 4.47: en modo liviano, sin foto de la pantalla */
  var ORDEN = ["parcours", "retos", "ranking", "tienda", "social", "perfil"];
  var DE = { lecciones: "parcours", privacidad: "perfil", docente: "perfil" };
  var vistaAct = function(){ return typeof view !== "undefined" ? view : ""; };
  var pestana = function(v){ return ORDEN.indexOf(v) >= 0 ? v : (DE[v] || "retos"); };
  var esTab = function(v){ return ORDEN.indexOf(v) >= 0; };
  var barraTab = function(){ var tb = D.getElementById("tabbar"); return tb && tb.querySelector('button[data-view="parcours"]') ? tb : null; };
  var botones = function(tb){
    var profe = H.classList.contains("p5-profe");
    return [].filter.call(tb.children, function(b){ return b.tagName === "BUTTON" && !(profe && b.dataset.mpk === "tienda"); });
  };
  var claveBtn = function(b){ return b.dataset.mpk || b.dataset.view || (b.hasAttribute("data-av-rank") ? "ranking" : ""); };

  /* ====================== píldora de la barra ====================== */
  var pill = D.createElement("i"); pill.className = "tx-pill"; pill.setAttribute("aria-hidden", "true");
  var ult = -1;
  var barra = function(animar){
    var tb = barraTab(); if (!tb) return;
    var bs = botones(tb), cur = pestana(vistaAct()), i = -1;
    for (var j = 0; j < bs.length; j++) if (claveBtn(bs[j]) === cur) i = j;
    if (pill.parentNode !== tb) tb.insertBefore(pill, tb.firstChild);   /* plx89 rehace los botones con innerHTML */
    tb.classList.add("tx-on");
    tb.style.setProperty("--tx-n", bs.length || 1);
    pill.style.opacity = i < 0 ? "0" : "";
    if (i < 0) { ult = -1; return; }
    tb.style.setProperty("--tx-i", i);
    if (animar && ult >= 0 && ult !== i && !RM.matches) {
      var a = ult * 100, b = i * 100;
      pill.animate([
        { transform: "translateX(" + a + "%)" },
        { transform: "translateX(" + (a + (b - a) * .6) + "%) scale(1.07,.94)", offset: .5 },
        { transform: "translateX(" + b + "%)" }
      ], { duration: 460, easing: "cubic-bezier(.32,.72,0,1)" });
      tb.classList.add("tx-hop");   /* los botones son nuevos en cada cambio (plx89): la animación vuelve a correr */
    }
    ult = i;
  };

  /* ====================== paso de página ====================== */
  /* pedido: lo dejan la barra (al tocar) o el gesto (al soltar); lo usa la siguiente llamada a go() */
  var pedido = null, enVT = 0, enGo = 0;
  var limpiaPedido = function(){ setTimeout(function(){ pedido = null; }, 0); };
  var sentido = function(de, a){
    var i0 = ORDEN.indexOf(pestana(de)), i1 = ORDEN.indexOf(pestana(a));
    if (!esTab(de) && esTab(a) && i0 === i1) return -1;   /* de una pantalla interna a su pestaña: hacia atrás */
    return i1 >= i0 ? 1 : -1;
  };
  /* el contenido vuelve a su sitio al instante: #view tiene una transición de transform en el CSS de la app y, si se
     soltara de golpe, se deslizaría desde donde lo dejó el dedo (se veía recortado al pasar la página) */
  var sinTransicion = function(){ V.style.transition = "none"; requestAnimationFrame(function(){ requestAnimationFrame(function(){ if (!g) V.style.transition = ""; }); }); };
  var suelta = function(){ sinTransicion(); V.style.transform = ""; quitaAsoma(); };

  var go0 = go;
  /* llamadas a go() que llegan mientras la transición espera su foto (p. ej. «1 vs 1» tiene dos manejadores que llaman a
     go en el mismo toque): se guardan y corren dentro de la transición; si una corriera antes, la foto «vieja» saldría
     ya con la pantalla nueva */
  var cola = null;
  var vacia = function(de){ var L = cola || []; cola = null; suelta(); for (var i = 0; i < L.length; i++) llama(L[i][0], L[i][1], i ? vistaAct() : de); };
  go = function(v){
    if (cola) { cola.push([this, arguments]); return; }
    var de = vistaAct(), p = pedido, r; pedido = null;
    if (p && VT && !RM.matches && !enVT && !D.hidden && v !== de) {
      var self = this, args = arguments, s = sentido(de, v);
      cola = [[self, args]];
      setTimeout(function(){ if (cola) vacia(de); }, 1500);   /* red de seguridad: nunca se queda sin cambiar */
      H.style.setProperty("--tx-dx", (p.dx || 0) + "px");
      H.style.setProperty("--tx-dur", (p.rapido ? 240 : 300) + "ms");
      H.classList.add("tx-vt", s > 0 ? "tx-adelante" : "tx-atras");
      enVT = 1;
      try {
        var t = D.startViewTransition(function(){ vacia(de); });
        var fin = function(){ enVT = 0; H.classList.remove("tx-vt", "tx-adelante", "tx-atras"); };
        t.finished.then(fin, fin);
        /* si el navegador salta la transición, ready rechaza: no es un error de la app */
        t.ready.catch(function(){}); t.updateCallbackDone.catch(function(){});
      } catch (e) { enVT = 0; H.classList.remove("tx-vt", "tx-adelante", "tx-atras"); vacia(de); }
      return;
    }
    if (p) suelta();
    return llama(this, arguments, de, !!p);
  };
  var llama = function(self, args, de, deslizar){
    var r; enGo++; try { r = go0.apply(self, args); } finally { enGo--; }
    var a = vistaAct();
    try {
      if (de && a && a !== de && !RM.matches && !enVT) {
        V.getAnimations().forEach(function(x){ x.cancel(); });
        /* sin View Transitions, o una pantalla interna: un leve desplazamiento, siempre opaco */
        var k = deslizar || (esTab(de) && esTab(a)) ? "translate3d(" + (sentido(de, a) * 28) + "px,0,0)" : "translate3d(0,10px,0)";
        V.animate([{ transform: k }, { transform: "none" }], { duration: 260, easing: "cubic-bezier(.32,.72,0,1)" });
      }
      barra(de !== a);
    } catch (e) {}
    return r;
  };
  try { window.go = go; } catch (e) {}
  if (typeof renderNav === "function") { var nav0 = renderNav; renderNav = function(){ var r = nav0.apply(this, arguments); if (!enGo) try { barra(false); } catch (e) {} return r; }; }
  try { barra(false); } catch (e) {}

  /* toque en la barra (o en el riel del PC): la siguiente go() pasa la página */
  D.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("#tabbar button, #px-rail button[data-view]");
    if (!b || pedido || cola || enVT) return;   /* otro manejador (p. ej. «1 vs 1») ya cambió de pestaña antes que este */
    pedido = { dx: 0 }; limpiaPedido();
  }, true);

  /* ====================== gestos ====================== */
  var asoma = null;
  var muestraAsoma = function(btn, lado, f, listo){
    if (!asoma) { asoma = D.createElement("div"); asoma.className = "tx-asoma"; asoma.setAttribute("aria-hidden", "true"); D.body.appendChild(asoma); }
    if (asoma.__btn !== btn) {
      asoma.__btn = btn;
      var ic = btn ? btn.querySelector("svg") : null, nom = btn ? (btn.querySelector(".label") || btn).textContent.trim() : "";
      asoma.innerHTML = (lado < 0 ? "<b>‹</b>" : "") + (ic ? ic.outerHTML : "") + "<span>" + nom + "</span>" + (lado > 0 ? "<b>›</b>" : "");
      if (btn && btn.dataset.mpk) asoma.setAttribute("data-mpk", btn.dataset.mpk);
    }
    asoma.className = "tx-asoma " + (lado > 0 ? "der" : "izq") + (listo ? " listo" : "");
    asoma.style.opacity = Math.min(1, f * 1.4);
    asoma.style.transform = "translate3d(" + (lado > 0 ? 1 : -1) * (1 - Math.min(1, f)) * 40 + "px,-50%,0)";
  };
  var quitaAsoma = function(){ if (asoma) { asoma.style.opacity = "0"; asoma.__btn = null; } };

  var NO = "input,textarea,select,button.pz-tecla,[contenteditable],canvas,.mz3,.tk,.ty,[data-no-desliza],.pz-carril,.lx-hoja";
  var desplazable = function(el){
    for (var n = el; n && n !== V; n = n.parentElement) {
      if (n.scrollWidth > n.clientWidth + 2) { var o = getComputedStyle(n).overflowX; if (o === "auto" || o === "scroll") return true; }
    }
    return false;
  };
  var g = null, tapaClic = 0;
  var vecino = function(lado){   /* lado 1 = la pestaña de la derecha, -1 = la de la izquierda */
    var tb = barraTab(); if (!tb) return null;
    var v = vistaAct(), bs = botones(tb);
    if (!esTab(v)) {   /* pantalla interna: solo «atrás» (deslizar a la derecha) */
      if (lado > 0) return null;
      for (var k = 0; k < bs.length; k++) if (claveBtn(bs[k]) === pestana(v)) return bs[k];
      return null;
    }
    var i = -1; for (var j = 0; j < bs.length; j++) if (claveBtn(bs[j]) === v) i = j;
    return i < 0 ? null : bs[i + lado] || null;
  };
  V.addEventListener("pointerdown", function(e){
    if (e.pointerType !== "touch" || !e.isPrimary || enVT || !barraTab()) { g = null; return; }
    var t = e.target;
    if (t.closest && t.closest(NO)) { g = null; return; }
    if (desplazable(t)) { g = null; return; }
    g = { x: e.clientX, y: e.clientY, t: e.timeStamp, dx: 0, fijo: false, id: e.pointerId, w: V.clientWidth || innerWidth, hist: [] };
  }, { passive: true });
  V.addEventListener("pointermove", function(e){
    if (!g || e.pointerId !== g.id) return;
    var dx = e.clientX - g.x, dy = e.clientY - g.y;
    if (!g.fijo) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.2) { g.fijo = true; g.x = e.clientX - (dx > 0 ? 10 : -10); dx = e.clientX - g.x; try { V.setPointerCapture(e.pointerId); } catch (x) {} }
      else if (Math.abs(dy) > 10) { g = null; return; }
      else return;
    }
    var lado = dx < 0 ? 1 : -1, b = vecino(lado);
    var mov = b ? dx : dx * .22;   /* sin vecino: resistencia, como un elástico */
    g.dx = mov; g.btn = b; g.hist.push([e.timeStamp, e.clientX]); if (g.hist.length > 6) g.hist.shift();
    V.style.transition = "none";
    V.style.transform = "translate3d(" + mov + "px,0,0)";
    if (b) { var f = Math.abs(dx) / (g.w * .3); muestraAsoma(b, lado, f, f >= 1); } else quitaAsoma();
  }, { passive: true });
  var acaba = function(e){
    if (!g || e.pointerId !== g.id) return;
    var gg = g; g = null; if (!gg.fijo) return;
    tapaClic = e.timeStamp;
    var h = gg.hist, vel = 0; if (h.length > 1) { var a = h[0], z = h[h.length - 1]; vel = (z[1] - a[1]) / Math.max(1, z[0] - a[0]); }
    var vale = e.type === "pointerup" && gg.btn && (Math.abs(gg.dx) > gg.w * .3 || (Math.abs(vel) > .45 && Math.abs(gg.dx) > 40 && (vel < 0) === (gg.dx < 0)));
    if (vale) {
      var v0 = vistaAct();
      pedido = { dx: Math.round(gg.dx), rapido: Math.abs(vel) > .45 }; limpiaPedido(); gg.btn.click(); pedido = null;
      if (!cola && !enVT && vistaAct() === v0) volver(gg.dx);   /* la pestaña no cambió: el contenido vuelve a su sitio */
      return;
    }
    volver(gg.dx);
  };
  var volver = function(dx){
    quitaAsoma(); sinTransicion(); V.style.transform = "";
    if (dx && !RM.matches) V.animate([{ transform: "translate3d(" + dx + "px,0,0)" }, { transform: "none" }], { duration: 380, easing: "cubic-bezier(.34,1.3,.64,1)" });
  };
  V.addEventListener("pointerup", acaba); V.addEventListener("pointercancel", acaba);
  /* tras arrastrar no debe colarse un toque sobre lo que quedó bajo el dedo */
  D.addEventListener("click", function(e){ if (tapaClic && e.timeStamp - tapaClic < 350 && !e.target.closest("#tabbar")) { e.stopPropagation(); e.preventDefault(); } tapaClic = 0; }, true);

  /* ====================== estilos ====================== */
  var st = D.createElement("style"); st.id = "plx116";
  st.textContent = [
    /* el contenido deja el desplazamiento vertical al navegador y el horizontal a los gestos */
    "@media (pointer:coarse){#view{touch-action:pan-y pinch-zoom}}",
    /* píldora */
    "#tabbar.tx-on .tx-pill{position:absolute;z-index:0;left:6px;top:8px;bottom:8px;width:calc((100% - 12px) / var(--tx-n,6));",
    "border-radius:22px;background:var(--p-sup,#1D2335);box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--p-azul,#4C82FF) 55%,transparent),0 3px 0 color-mix(in srgb,var(--p-azul,#4C82FF) 55%,transparent);",
    "transform:translateX(calc(var(--tx-i,0) * 100%));transform-origin:50% 60%;pointer-events:none;transition:opacity .2s}",
    "#tabbar.tx-on > button{z-index:1}",
    "@layer pz{html body nav#tabbar.tabbar.tx-on button.px-navbtn[aria-current=page]{background:transparent!important;box-shadow:none!important}}",
    "#tabbar.tx-hop button[aria-current=page]::before,#tabbar.tx-hop button[aria-current=page] > svg{animation:txHop .55s cubic-bezier(.2,.9,.3,1.35)}",
    "@keyframes txHop{0%{transform:scale(.92)}45%{transform:translateY(-4px) scale(1.2)}100%{transform:scale(1.12)}}",
    /* paso de página (View Transitions): solo el contenido; cabecera y barras se ven en vivo, quietas */
    "html.tx-vt #topbar{view-transition-name:tx-cab}html.tx-vt #tabbar{view-transition-name:tx-barra}html.tx-vt #px-rail{view-transition-name:tx-riel}",
    "::view-transition-group(tx-cab),::view-transition-group(tx-barra),::view-transition-group(tx-riel){animation:none}",
    "::view-transition-old(tx-cab),::view-transition-old(tx-barra),::view-transition-old(tx-riel){display:none}",
    "::view-transition-new(tx-cab),::view-transition-new(tx-barra),::view-transition-new(tx-riel){animation:none}",
    "::view-transition-image-pair(root){isolation:auto}",
    "::view-transition-old(root),::view-transition-new(root){mix-blend-mode:normal;animation-duration:var(--tx-dur,440ms);animation-timing-function:cubic-bezier(.32,.72,0,1);animation-fill-mode:both}",
    "::view-transition-new(root){box-shadow:0 0 44px rgba(4,10,30,.38)}",
    "html.tx-adelante::view-transition-old(root){animation-name:txVaIzq}html.tx-adelante::view-transition-new(root){animation-name:txLlegaDer}",
    "html.tx-atras::view-transition-old(root){animation-name:txVaDer}html.tx-atras::view-transition-new(root){animation-name:txLlegaIzq}",
    "@keyframes txVaIzq{to{transform:translateX(-26%);filter:brightness(.78)}}",
    "@keyframes txVaDer{to{transform:translateX(26%);filter:brightness(.78)}}",
    "@keyframes txLlegaDer{from{transform:translateX(calc(100% + var(--tx-dx,0px)))}}",
    "@keyframes txLlegaIzq{from{transform:translateX(calc(-100% + var(--tx-dx,0px)))}}",
    /* pestaña que asoma en el borde mientras deslizas */
    ".tx-asoma{position:fixed;top:50%;z-index:40;display:flex;align-items:center;gap:6px;padding:10px 14px;border-radius:99px;pointer-events:none;opacity:0;",
    "background:var(--p-sup,#1D2335);color:var(--p-tinta,#EEF2FF);font:700 .86rem/1 var(--sans,system-ui);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--p-azul,#4C82FF) 45%,transparent),0 10px 26px -10px rgba(0,0,0,.5);transition:background .15s,color .15s,scale .2s}",
    ".tx-asoma.der{right:10px}.tx-asoma.izq{left:10px}.tx-asoma svg{width:20px;height:20px}.tx-asoma b{font-size:1.2rem;font-weight:800;opacity:.7}",
    ".tx-asoma.listo{background:var(--p-azul,#4C82FF);color:#fff;scale:1.06}",
    "@media (prefers-reduced-motion:reduce){#tabbar.tx-hop button[aria-current=page]::before,#tabbar.tx-hop button[aria-current=page] > svg{animation:none}}"
  ].join("\n");
  D.head.appendChild(st);
})();
