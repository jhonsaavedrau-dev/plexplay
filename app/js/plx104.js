/* PLEX PLAY 4.27.0 — Sin ventanas emergentes (2): el recorrido con Manzana y el glosario de literatura
   plx103 convirtió gModal, la hoja de cursos y el aviso de ranking en pantallas de la app. Quedaban dos emergentes:

   1. RECORRIDO GUIADO. Era un velo oscuro con un «agujero» sobre la interfaz y una tarjeta flotante (`.tour`, en el
      núcleo). Ahora es una secuencia de pantallas de PLX_UI.pantalla: un paso por pantalla, con el mismo Manzana, el
      mismo título y el mismo texto de cada paso, y «Siguiente», «Atrás» y «Saltar». La pantalla vive dentro del
      armazón: el riel o la barra siguen a la vista y marcan la sección de la que habla el paso (antes la señalaba el
      agujero), y sirven para salir.
      Arranca igual que siempre: una sola vez (G.tourDone) y desde Perfil › «Ver el recorrido con Manzana». Aquí solo
      cambia cómo se pinta: se reemplaza tourShow y se envuelve tourEnd; los pasos (TOUR, T_TOUR) y los botones
      `data-tour` son los del núcleo.
   2. GLOSARIO DE LITERATURA. El globo flotante de plx76 es ahora una nota que se despliega bajo el párrafo de la
      palabra tocada. El comportamiento está en plx76; aquí va su piel.

   El CSS va en la misma capa @layer p5 de plx101 y plx103 (todo en !important). Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var CLASE = "m-rec", M = "html.mk .gmodal." + CLASE;

  /* ====================================================================== CSS (capa p5) */
  var R = [], o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  /* ---------- 1. recorrido: progreso arriba, Manzana y texto al centro, acciones abajo ---------- */
  /* la caja del paso tiene alto estable: «Siguiente» no salta de sitio cuando un paso trae más o menos texto */
  o(M + " .gm-card > .rc{align-self:center;flex:1 1 auto;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:var(--s-4);width:100%;max-width:440px;max-height:600px;margin:auto 0;text-align:center}",
    /* el mismo indicador de pasos de la explicación de las lecciones */
    ".rc-pasos{flex:none;display:flex;gap:6px;width:100%;max-width:260px}",
    ".rc-pasos i{flex:1;height:8px;border-radius:var(--r-pill);background:var(--p-pista)}",
    ".rc-pasos i.ya,.rc-pasos i.on{background:var(--p-oro)}",
    ".rc-c{flex:none;display:flex;flex-direction:column;align-items:center;gap:var(--s-2);width:100%;margin:auto 0;animation:rc-entra .22s ease both}",
    ".rc-mz{flex:none;width:clamp(96px,19vh,176px);height:clamp(96px,19vh,176px);margin:0 0 var(--s-2);object-fit:contain}",
    ".rc-n{font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-azul-tx)}",
    M + " .rc .gm-t{margin:0;font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta)}",
    M + " .rc .gm-sub{margin:0;max-width:100%;font:500 var(--t-md)/1.5 var(--f-tx);color:var(--p-tinta-2);text-wrap:pretty}",
    ".rc-b{flex:none;display:grid;gap:var(--s-2);width:100%}",
    M + " .rc-b .gbtn{width:100%;min-height:52px;margin:0;white-space:normal}",
    /* «Atrás» siempre a la izquierda y «Saltar» siempre a la derecha, aunque falte uno de los dos */
    ".rc-l{flex:none;display:flex;justify-content:space-between;gap:var(--s-4);width:100%;min-height:44px;margin-top:calc(var(--s-2) * -1)}",
    ".rc-e{all:unset;box-sizing:border-box;cursor:pointer;min-height:44px;padding:0 var(--s-3);display:inline-flex;align-items:center;border-radius:var(--r-sm);font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-azul-tx);-webkit-tap-highlight-color:transparent}",
    ".rc-e[data-tour=skip]{margin-left:auto}",
    ".rc-e:focus-visible{outline:3px solid var(--p-oro);outline-offset:2px}",
    /* ventanas bajas (teléfonos pequeños, PC con zoom): Manzana cede sitio para que el paso quepa sin desplazarse */
    "@media (max-height:700px){.rc-mz{width:13vh;height:13vh;min-width:64px;min-height:64px}" + M + " .gm-card > .rc{gap:var(--s-3)}}",
    "@media (prefers-reduced-motion:reduce){.rc-c,.lit-pop{animation:none}}");

  /* ---------- 2. glosario de literatura: la definición es una nota dentro de la lectura ---------- */
  /* `grid-column` la deja a todo el ancho cuando su párrafo es hijo de una rejilla; lo demás la aísla de la letra del
     bloque donde cae (un título, un ítem de lista). Por eso la definición es texto suelto de la nota y el término un
     <dfn>: un <span> o un <b> heredaban las reglas que cada bloque tiene para los suyos */
  o(".lit-pop{position:static;box-sizing:border-box;display:block;grid-column:1 / -1;width:auto;max-width:100%;margin:var(--s-2) 0 var(--s-3);padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);font:500 var(--t-sm)/1.45 var(--f-tx);letter-spacing:normal;text-transform:none;text-align:left;text-decoration:none;white-space:normal;scroll-margin:var(--s-5);animation:lit-abre .18s ease both}",
    ".lit-pop dfn{display:block;margin:0 0 2px;font:700 var(--t-sm)/1.3 var(--f-tit);color:var(--p-azul-tx)}",
    /* la palabra marcada conserva la letra de su renglón (en el «Contexto» de un ejercicio salía con la del rótulo) */
    ".lit-g{font:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit}",
    ".lit-g[aria-expanded=true]{background:var(--p-azul-p);box-shadow:0 0 0 3px var(--p-azul-p)}");

  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx104";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}\n@keyframes rc-entra{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}\n@keyframes lit-abre{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}";
  D.head.appendChild(st);

  /* ====================================================================== 1. RECORRIDO */
  if (typeof tourShow !== "function" || typeof tourEnd !== "function" || typeof TOUR === "undefined" || !window.PLX_UI) return;
  var FIN = '<button type="button" class="pz-btn gbtn" data-tour="placement" data-autofocus>Hacer la prueba de nivel</button><button type="button" class="pz-btn pz-btn--liso gbtn ghost" data-tour="lessons">Ir a mis lecciones</button>';
  var abierta = function(){ return D.querySelector(".gmodal." + CLASE + ":not(.out)"); };
  var destino = function(v){ try { return PLX_RUTAS.destino(v); } catch (e) { return v; } };
  var paso = function(s, i, n){
    var fin = !!s.end, pts = "", img = "";
    for (var k = 0; k < n; k++) pts += "<i" + (k < i ? ' class="ya"' : k === i ? ' class="on"' : "") + "></i>";
    try { if (MZ[s.img]) img = '<img class="rc-mz" src="' + esc(MZ[s.img]) + '" alt="">'; } catch (e) {}
    return '<div class="rc-pasos" role="img" aria-label="Paso ' + (i + 1) + " de " + n + '">' + pts + "</div>" +
      '<div class="rc-c">' + img + '<small class="rc-n">' + (i + 1) + " de " + n + '</small><h2 class="gm-t" id="gm-title">' + s.t + '</h2><p class="gm-sub">' + s.p + "</p></div>" +
      '<div class="rc-b">' + (fin ? s.endBtns || FIN : '<button type="button" class="pz-btn gbtn" data-tour="next" data-autofocus>' + (i === 0 ? "¡Vamos!" : "Siguiente") + "</button>") + "</div>" +
      '<div class="rc-l">' + (i > 0 ? '<button type="button" class="rc-e" data-tour="prev">Atrás</button>' : "") + (fin ? "" : '<button type="button" class="rc-e" data-tour="skip">Saltar</button>') + "</div>";
  };
  var turno = 0;
  tourShow = function(){
    clearTimeout(turno);
    if (tourI < 0) return;
    var s = TOUR[tourI]; if (!s) return tourEnd();
    var m = abierta();
    if (!m) {
      /* otra pantalla sigue abierta o se está cerrando: el recorrido espera su turno */
      if (D.querySelector(".gmodal")) { turno = setTimeout(tourShow, 150); return; }
      PLX_UI.pantalla('<div class="rc"></div>', { titulo: "Recorrido", clase: CLASE });
      m = abierta(); if (!m) return;
      try { PLX_UI.capas(); } catch (e) {}
    }
    var c = m.querySelector(".rc"); if (!c) return;
    if (c.dataset.paso === String(tourI)) return;          /* el núcleo vuelve a llamar con cada cambio de tamaño */
    try { if (s.view && view !== destino(s.view)) go(s.view); } catch (e) {}
    c.dataset.paso = String(tourI);
    c.innerHTML = paso(s, tourI, TOUR.length);
    m.scrollTop = 0;
    var f = c.querySelector("[data-autofocus]"); if (f) { try { f.focus({ preventScroll: true }); } catch (e) {} }
  };
  var te0 = tourEnd;
  tourEnd = function(){
    clearTimeout(turno);
    var m = abierta();
    tourI = -1;                                            /* antes de cerrar: que no se tome por una salida por fuera */
    if (m) { try { if (gOpen === m) gCloseModal(); else m.remove(); } catch (e) { m.remove(); } }
    return te0.apply(this, arguments);
  };
  var gc0 = gCloseModal;
  gCloseModal = function(){
    var el = null; try { el = gOpen; } catch (e) {}
    /* ya se está cerrando: con Esc lo piden dos (el recorrido y el núcleo), y el segundo cierre dejaba sin dueño a la
       pantalla siguiente de la cola */
    if (el && el.classList.contains("out")) return;
    var r = gc0.apply(this, arguments);
    /* el recorrido se cerró por fuera (el riel o la barra): queda terminado y no lleva a ninguna parte */
    if (el && el.classList.contains(CLASE) && tourI >= 0) { tourI = -1; clearTimeout(turno); try { gEnsure().tourDone = 1; save(true); } catch (e) {} }
    return r;
  };
  /* «Volver» de la cabecera = «Saltar»: se sale y se vuelve a donde estaba */
  window.addEventListener("click", function(e){
    if (tourI < 0 || !(e.target.closest && e.target.closest(".gmodal." + CLASE + " .pg-atras"))) return;
    e.preventDefault(); e.stopPropagation(); tourEnd(tourBack);
  }, true);
  /* ← y →: con una pantalla abierta el núcleo corta las teclas antes de que lleguen a su propio recorrido */
  window.addEventListener("keydown", function(e){
    if (tourI < 0 || (e.key !== "ArrowRight" && e.key !== "ArrowLeft") || e.ctrlKey || e.metaKey || e.altKey || !abierta()) return;
    e.preventDefault(); e.stopPropagation();
    if (e.key === "ArrowRight") tourI++; else if (tourI > 0) tourI--; else return;
    tourShow();
  }, true);
})();
