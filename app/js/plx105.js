/* PLEX PLAY 4.28.0 — Perfil académico, «Síguenos» y aviso de versión con las piezas globales
   Pedidos de Jhon (12-oct-2026): «esta zona se sale del diseño actual: mejorarla, y también la manera en la que se
   selecciona el semestre». Las piezas (pz-lista, pz-fila, pz-card, pz-btn, pz-aviso) vienen de kit.js; aquí solo va
   lo que es del sitio: orden, márgenes y los detalles propios de cada bloque.

   1. PERFIL ACADÉMICO (plx27). Sección del Perfil justo debajo del resumen, con la etiqueta de las demás secciones:
      fila «Semestre N · Cambiar» y fila del curso de ese semestre. Sin semestre: tarjeta con una sola acción.
   2. TU SEMESTRE. Pantalla (PLX_UI.pantalla) con los diez semestres y el curso de francés de cada uno; tocar uno lo
      guarda y vuelve al Perfil.
   3. SÍGUENOS (plx69). Lista sobria al final del Perfil, con la línea legal debajo; sin botones de marca en degradado.
   4. AVISO DE VERSIÓN (plx31). En la página, arriba de la pantalla en curso; ya no flota sobre la barra.

   El CSS va en la capa @layer p5 de plx101 (todo en !important). Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document;
  var R = [];
  var o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };

  /* ---------- 1. Perfil académico ---------- */
  o("html.mk #view .gperfil.gperfil > .plx-acad{order:0;display:grid;gap:var(--s-3);margin:0;padding:0;background:none;box-shadow:none;border:0;animation:none}",
    "html.mk #view .plx-acad > .p5-pf-h{margin:0}",
    "html.mk .pz-fila__ic.pa-num{font:800 var(--t-lg)/1 var(--f-tit);letter-spacing:-.02em}",
    "html.mk #view .plx-acad .pa-vacio{display:grid;grid-template-columns:48px minmax(0,1fr);align-items:center;gap:var(--s-3) var(--s-4)}",
    "html.mk #view .plx-acad .pa-vacio > img{width:48px;height:48px;object-fit:contain}",
    "html.mk #view .plx-acad .pa-vt b{display:block;font:800 var(--t-md)/1.25 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .plx-acad .pa-vt p{margin:2px 0 0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .plx-acad .pa-vacio > .pz-btn{grid-column:1 / -1}");

  /* ---------- 2. Tu semestre ---------- */
  o(".pa-sel{display:grid;gap:var(--s-4);max-width:560px;margin:0 auto;padding:0 0 var(--s-6)}",
    ".pa-sel-q{margin:0;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-tinta-2)}",
    ".pa-sel .pz-lista{box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    ".pa-sel .pz-fila{min-height:64px;width:100%}",
    ".pa-sel .pz-fila__fin{width:24px;display:grid;place-items:center}",
    ".pa-sel .pa-quitar{justify-self:center}");

  /* ---------- 3. Síguenos ---------- */
  o("html.mk #view .pf-redes{display:grid;gap:var(--s-3);margin:var(--s-7) 0 0;padding:0}",
    "html.mk #view .pf-redes > .p5-pf-h{margin:0}",
    "html.mk #view .pf-redes .pz-fila__ic > svg{width:22px;height:22px}",
    "html.mk #view .pf-redes + .plx-legal,html.mk #view .pf-redes ~ .plx-legal{margin:var(--s-3) 0 var(--s-2)}");

  /* ---------- 4. Aviso de versión ---------- */
  o("html.mk #view > .plx-upd{position:static;left:auto;bottom:auto;transform:none;opacity:1;z-index:auto;width:auto;max-width:none;align-items:center;flex-wrap:wrap;margin:0 0 var(--s-4);border-radius:var(--r-md);box-shadow:none}",
    "html.mk #view > .plx-upd > img{flex:none;width:28px;height:28px}",
    "html.mk #view > .plx-upd > span{flex:1 1 160px;min-width:0;text-align:left;font:700 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta)}");

  /* ---------- 5. Juego del día: el icono ocupa su marco (antes el marco tenía 14 px de relleno y lo recortaba) ---------- */
  o("html.mk #view .jx-dia .jx-dia-arte.jx-dia-arte{padding:0;overflow:visible}",
    "html.mk #view .jx-dia .jx-dia-arte.jx-dia-arte > .ev-sello{width:100%;height:100%;margin:0}");

  /* ---------- 6. Riel: el icono de la sección elegida, en blanco sobre la pastilla azul ----------
     4.80 (Jhon: «quita ese coso blanco, se ve feo»): antes iba sobre una placa blanca para que los iconos azules no se
     perdieran en la pastilla azul; ahora la placa no está y el icono se vuelve una silueta blanca */
  o("#px-rail .rl-b[aria-current=page] .rl-ic,#px-rail .rl-nav .rl-b[aria-current=page]::before{padding:0;border-radius:0;background-color:transparent;box-shadow:none;filter:brightness(0) invert(1) drop-shadow(0 1px 0 rgba(20,24,38,.25))}",
    "#px-rail .rl-b[aria-current=page] > svg{padding:0;background-color:transparent;box-shadow:none;color:#fff}");

  /* ---------- 7. 1V1: la capa nunca se vuelve transparente ----------
     La raíz #plx1v1 entraba con plxUp (desde opacidad 0). Al fallar o chocar se le pone otra animación (sacudida) y,
     al quitarla, plxUp volvía a empezar: durante ~250 ms se veía la pantalla de atrás. Ahora la raíz no se desvanece
     (conserva la sacudida y el choque). */
  o("#plx1v1.v1:not(.v1fx-mal):not(.v1fx-choque){animation:none}");

  /* ---------- 8. PLEX Plus: pantalla de la app, entrada en el riel y en la Tienda ---------- */
  o(".pl4-pant .pl4-c{position:static;width:100%;max-width:560px;max-height:none;margin:0 auto;padding:0 0 var(--s-6);overflow:visible;background:none;box-shadow:none;border-radius:0}",
    ".pl4-pant .pl4-x{display:none}",
    ".pl4-pant .pl4-l,.pl4-pant .pl4-l li{text-align:left;justify-items:start}",
    ".pl4-pant .pl4-h{border-radius:var(--r-lg)}",
    "#px-rail .rl-plus{-webkit-appearance:none;appearance:none;display:flex;align-items:center;gap:var(--s-3);width:calc(100% - var(--s-4));margin:var(--s-3) var(--s-2) 0;padding:var(--s-3);border:0;border-radius:var(--r-md);cursor:pointer;text-align:left;color:#1F2430;background:linear-gradient(135deg,#FFD866,#FFC83D 55%,#FF9F5A);box-shadow:0 4px 0 #B07C00}",
    "#px-rail .rl-plus:active{transform:translateY(3px);box-shadow:0 1px 0 #B07C00}",
    "#px-rail .rl-plus img{flex:none;width:34px;height:34px;object-fit:contain}",
    "#px-rail .rl-plus span{display:grid;gap:1px;min-width:0}#px-rail .rl-plus b{font:800 var(--t-sm)/1.15 var(--f-tit);color:#1F2430}#px-rail .rl-plus small{font:600 var(--t-xs)/1.25 var(--f-tx);color:#4A3A12}",
    /* ventanas bajas (PC con zoom): una sola línea, para que el riel quepa entero */
    "@media (max-height:899.98px){#px-rail .rl-plus{margin-top:var(--s-1);padding:6px var(--s-3)}#px-rail .rl-plus img{width:24px;height:24px}#px-rail .rl-plus small{display:none}}",
    "@media (max-height:559.98px){#px-rail .rl-plus{display:none}}",
    "html.mk #view .pl4-tn-solo{display:flex;align-items:center;gap:var(--s-3);width:100%;margin:var(--s-3) 0;padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-lg);cursor:pointer;text-align:left;color:#1F2430;background:linear-gradient(135deg,#FFD866,#FFC83D 55%,#FF9F5A);box-shadow:0 4px 0 #B07C00}",
    "html.mk #view .pl4-tn-solo img{flex:none;width:44px;height:44px;object-fit:contain}",
    "html.mk #view .pl4-tn-solo span{flex:1;display:grid;gap:2px;min-width:0}html.mk #view .pl4-tn-solo b{font:800 var(--t-md)/1.2 var(--f-tit);color:#1F2430}html.mk #view .pl4-tn-solo small{font:600 var(--t-xs)/1.3 var(--f-tx);color:#4A3A12}",
    "html.mk #view .pl4-tn-solo em{flex:none;padding:8px 14px;border-radius:12px;background:#1F2430;color:#fff;font:800 var(--t-sm)/1 var(--f-tit);font-style:normal}");

  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx105";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}";
  D.head.appendChild(st);
})();
