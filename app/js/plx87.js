/* PLEX PLAY 3.9.0 — Arreglos visuales: modo oscuro, cabecera, maquetación, recorrido y barra.
   Va después de plx85/plx86: muchas reglas solo existen para ganarle a colores fijos de tema claro (plx63, plx45, núcleo). */
(function(){
  "use strict";

  /* cada regla de oscuro en las dos formas que usan plx60/plx78: tema elegido y tema del sistema */
  var oscuro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); };
    return f(":root[data-theme=dark]") + "{" + decl + "}" +
      "@media (prefers-color-scheme:dark){" + f(":root:not([data-theme=light])") + "{" + decl + "}}";
  };

  var css = [
    /* ---------- Arcade en oscuro (plx63 lo pintaba crema con texto claro) ---------- */
    oscuro(".az-top h1", "color:var(--v4-ink)!important"),
    oscuro(".az-c.on", "background:color-mix(in srgb,var(--v4-brand) 20%,var(--v4-surface))!important"),
    oscuro(".az-j.on", "background:color-mix(in srgb,var(--jc) 22%,var(--v4-surface))!important"),
    oscuro(".az-c small,.az-j em", "color:#8FB4FF!important"),

    /* ---------- textos marinos de plx63 que en oscuro desaparecían ---------- */
    /* la X sigue el color del botón (tinta en claro, blanco en las cabeceras oscuras) */
    ".plxg:not(.plxg-juego) .plxg-ib svg path{stroke:currentColor!important}",
    oscuro(".plxg:not(.plxg-juego) .net-codigo,.plxg:not(.plxg-juego) .pt-rec b,.plxg:not(.plxg-juego) .wb-res p,#plx1v1 .v1-sc", "color:#FFD200!important"),
    oscuro("#plx1v1 .v1-p.op .v1-sc", "color:#F9A8D4!important"),
    /* avisos de sonido y de conexión: amarillo translúcido, no un bloque crema */
    oscuro(".plxg:not(.plxg-juego) .pt-aviso,.plxg:not(.plxg-juego) .net-aviso", "background:rgba(255,210,0,.12)!important;color:#FFE58A!important;border-color:rgba(255,210,0,.3)!important"),

    /* ---------- vistas principales en oscuro ---------- */
    /* plx41 (0,3,1) devolvía la franja marrón del saludo en escritorio */
    "html[data-theme=dark] .ghome .gmain > .greet{background:transparent!important}",
    "@media (prefers-color-scheme:dark){html:not([data-theme=light]) .ghome .gmain > .greet{background:transparent!important}}",
    /* número de la unidad y ▶ de la siguiente lección: el azul pastel de oscuro no aguanta texto blanco */
    oscuro(".lx-u.actual .lx-un,.lx-l.sig .lx-st", "background:#2F5FE0"),
    /* tarjetas de los profesores: cada uno conserva su color, sin bloques pastel que deslumbran */
    oscuro(".jx-prof,.lx-pcard,.lx-mprof", "background:linear-gradient(180deg,color-mix(in srgb,var(--pb) 30%,var(--v4-surface2)),var(--v4-surface2));color:color-mix(in srgb,var(--pb) 70%,#fff);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--pb) 25%,transparent)"),
    /* el botón traía la tinta oscura de la tarjeta clara (--pi) sobre el fondo ya oscuro */
    oscuro(".lx-pcard .lx-oir", "background:rgba(255,255,255,.12);color:inherit"),
    oscuro(".ctile em.new", "color:#FBBF24"),

    /* ---------- sub-vistas de Practicar y Explora en oscuro ---------- */
    oscuro(".gguia .gcard .gbtn.ghost", "background:#2B63E8!important;color:#fff!important"),
    oscuro(".snd-ipa", "color:color-mix(in srgb,var(--c) 50%,#fff)"),
    oscuro(".snd-st i", "color:#5D77BE"),
    oscuro(".am-go", "color:#93B8FF"),
    oscuro(".lec-voc summary", "color:#5EEAD4"),
    oscuro(".deck .deck-row .btn", "color:#A9C4FF!important"),

    /* ---------- cabecera ---------- */
    /* plx20 pensó la cabecera marina: tuerca blanca y nivel oscuro sobre su círculo marino en la cabecera clara de plx85 */
    "html.mk body header#topbar.top .px-iconbtn svg,html.mk body header#topbar.top #nav button.px-navbtn svg{stroke:currentColor!important}",
    "html.mk body header#topbar.top .gpill .av-ring b{color:#fff!important}",
    "html.mk body header#topbar.top #nav button.px-navbtn:not([aria-current=page]){color:var(--v4-mute)!important}",
    "html.mk body header#topbar.top #nav button.px-navbtn:not([aria-current=page]) svg{fill:none!important}",
    /* a 375 px la tuerca se salía por la derecha: pastillas un poco más estrechas */
    "@media (max-width:400px){html.mk body header#topbar.top #stats{gap:4px!important}html.mk body header#topbar.top #stats .gpill{padding-left:7px!important;padding-right:7px!important}}",

    /* ---------- barra inferior opaca (plx23 apagó el desenfoque por rendimiento) ---------- */
    "html.mk body nav#tabbar.tabbar,html.mk:root[data-theme=dark] body nav#tabbar.tabbar{background:var(--v4-surface)!important}",

    /* ---------- sticky en el teléfono ---------- */
    /* con body en clip (plx23) los sticky ya se pegan; en el teléfono la cabecera se va con el scroll para no apilar
       cuatro capas fijas, y las pestañas de Jugar se pegan arriba del todo */
    "@media (max-width:860px){html.mk body header#topbar.top{position:relative}html.mk .jx-seg{top:calc(env(safe-area-inset-top) + 8px)}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx87"; st.textContent = css; document.head.appendChild(st);

  /* ---------- recorrido: los pasos apuntaban a vistas que plx82/plx79 reemplazaron ---------- */
  /* sin selector de respaldo en la misma lista: querySelectorAll va en orden del documento y el viejo volvería a ganar */
  try {
    var MAP = { ".crs-row": ".lx2 .lx-curso", ".psec": ".lx2 .lx-next, .lx2 .lx-u.actual", ".rgrid": ".jx .jx-seg", "#stats .gpill": "#stats .gpill[title*=racha]" };
    /* el gato de la tarjeta: hola, gafas, curioso y juega son archivos con fondo y bordes cortados; el set img/mz/ viene limpio */
    var GATO = { hola: "saluda", gafas: "lupa", curioso: "duda", juega: "tumbado-corazon" };
    if (typeof MZ !== "undefined") Object.keys(GATO).forEach(function(k){ MZ["t-" + k] = "img/mz/" + GATO[k] + ".webp"; });
    var arregla = function(a){
      a.forEach(function(s){
        if (s.sel && MAP[s.sel]) s.sel = MAP[s.sel];
        if (GATO[s.img] && typeof MZ !== "undefined") s.img = "t-" + s.img;
        if (s.p) s.p = s.p.replace("te explico por qué", "tu profesor te explica por qué");
        if (s.view === "retos") { s.t = "Jugar"; s.p = "Juegos para repasar jugando, Practicar con repasos y habilidades, y Explorar con tus profesores. ¡Aquí se gana mucha XP!"; }
        if (s.view === "perfil" && /semestre/.test(s.p || "")) s.p = "Personaliza tu gato, mira tus logros y tu avance. La clasificación está en Ranking.";
      });
    };
    if (typeof TOUR !== "undefined") arregla(TOUR);
    if (typeof T_TOUR !== "undefined") arregla(T_TOUR);
    /* primera visita: el precache del SW puede no haber terminado y el gato del recorrido salía vacío */
    if (typeof tourStart === "function") {
      var tsO = tourStart;
      tourStart = function(){ try { if (typeof MZ !== "undefined") Object.keys(MZ).forEach(function(k){ new Image().src = MZ[k]; }); } catch (e) {} return tsO.apply(this, arguments); };
    }
  } catch (e) {}

  /* ---------- Guía, Privacidad y Panel docente dejaban la barra sin pestaña marcada ---------- */
  /* se marca la pestaña a la que vuelve su botón de volver: la Guía sale de Jugar › Practicar; las otras dos, de Perfil */
  var PADRE = { guia: "retos", privacidad: "perfil", docente: "perfil" };
  /* «‹ Retos» en las sub-vistas: la pestaña se llama Jugar (el núcleo y plx28/29/39 siguen escribiendo el nombre viejo) */
  var volver = function(){
    [].forEach.call(document.querySelectorAll('#view .gback[data-view="retos"]'), function(b){
      var n = b.lastChild; if (n && n.nodeType === 3 && /Retos/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace("Retos", "Jugar");
    });
  };
  if (typeof render === "function") {
    var rO = render;
    render = function(){
      var r = rO.apply(this, arguments);
      try {
        if (typeof view !== "undefined" && PADRE[view]) ["#tabbar", "#nav"].forEach(function(c){
          if (document.querySelector(c + " [aria-current=page]")) return;
          var b = document.querySelector(c + ' [data-view="' + PADRE[view] + '"]'); if (b) b.setAttribute("aria-current", "page");
        });
        /* el núcleo añade su botón de volver en un microtask posterior al render */
        volver(); requestAnimationFrame(volver);
      } catch (e) {}
      return r;
    };
  }
})();
