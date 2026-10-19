/* PLEX PLAY 4.52 — Las lecciones a pantalla completa
   Pedido de Jhon (19-oct-2026): en el computador la lección se veía como un cuadro de 760 px en medio de la pantalla.
   Ahora el reproductor (cabecera, cuerpo y pie) ocupa todo el ancho y el alto en todas las lecciones; el contenido se
   centra con un ancho de lectura que depende de lo que se muestra:
     - la explicación del sistema de enseñanza (plx122, .wrap.ens-on): hasta 1180 px, con más columnas
     - la teoría de siempre (plx95, .wrap.tx-on): hasta 960 px
     - los ejercicios: hasta 860 px (más anchos se leen mal y las opciones quedan lejos)
   En el celular ya era de pantalla completa: solo cambia desde 700 px. Solo CSS.
   Va en la capa pz: el marco se fija en @layer p5 con !important, y con !important gana la capa declarada primero (pz);
   una regla fuera de capa perdería siempre. */
(function(){
  "use strict";
  var css = [
    "@layer pz{",
    "@media (min-width:700px){",
    /* el marco: sin márgenes ni esquinas de tarjeta, la cabecera y el pie de lado a lado */
    "#player.player{padding:0!important}",
    "html #player.player > .ph,html #player.player > .pbody,html #player.player > .pf{max-width:none!important;width:100%!important;margin:0!important;border-radius:0!important;left:auto!important;right:auto!important;align-self:stretch!important}",
    "#player.player > .pbody{flex:1 1 auto!important}",
    /* la cabecera alineada con el contenido */
    "#player.player > .ph > .wrap{max-width:1180px!important}",
    /* anchos de lectura */
    "#player .pbody > .wrap{max-width:860px!important}#player .pbody > .wrap.tx-on{max-width:960px!important}#player .pbody > .wrap.ens-on{max-width:1180px!important;padding-left:24px!important;padding-right:24px!important}",
    /* el pie sigue al cuerpo: solo es ancho mientras se ve la teoría (las clases tx/ens se quedan puestas en los ejercicios) */
    "#player .pf > .wrap{max-width:860px!important}#player:has(.pbody > .wrap.tx-on) .pf > .wrap{max-width:960px!important}#player:has(.pbody > .wrap.ens-on) .pf > .wrap{max-width:1180px!important;padding-left:24px!important;padding-right:24px!important}",
    "}",
    /* en pantallas anchas el botón principal no se estira 1000 px: se queda a la derecha, como en un reproductor */
    "@media (min-width:1024px){#player:has(.pbody > .wrap.tx-on) .pf .pfa > .btn:not(.pz-btn--signo){flex:0 0 auto!important;min-width:280px!important}}",
    "}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx123"; st.textContent = css; document.head.appendChild(st);
})();
