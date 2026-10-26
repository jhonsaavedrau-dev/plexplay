/* PLEX PLAY 4.122.0 — Arreglos de diseño que Jhon vio en el celular (26-oct-2026)
   - Práctica › Habilidades: «Pronunciación» se salía de la tarjeta y los títulos quedaban arriba, no centrados con el
     ícono (debajo había un segundo renglón vacío). Menos relleno, ícono algo menor, título centrado y, si una palabra no
     cabe, se parte con guion (lang="es") en vez de salirse.
   Todo va en @layer pz con !important: la piel p5 lleva !important en su capa y pz se declara antes (kit.js), así que
   solo pz le gana. */
(function(){
  "use strict";
  var D = document;
  var css = [
    /* ---------- Práctica › Habilidades y Repasa ---------- */
    "html.mk body #view .pq-hab .pq-c > button,html.mk body #view .pq-lista .pq-c > button{padding:12px!important;gap:10px!important;min-height:64px!important}",
    "html.mk body #view .pq-hab .pq-c > button > .jx-ic,html.mk body #view .pq-lista .pq-c > button > .jx-ic{width:36px!important;height:36px!important;border-radius:11px!important}",
    "html.mk body #view .pq-hab .pq-c > button > .jx-ic img,html.mk body #view .pq-lista .pq-c > button > .jx-ic img{width:26px!important;height:26px!important}",
    "html.mk body #view .pq-hab .pq-c > button .jx-rt,html.mk body #view .pq-lista .pq-c > button .jx-rt{display:flex!important;flex-direction:column!important;justify-content:center!important;height:auto!important;min-height:0!important;align-self:center!important}",
    /* las tarjetas .jx-tile llevan el título suelto, sin .jx-rt */
    "html.mk body #view .pq-hab .pq-c > button{align-items:center!important}html.mk body #view .pq-hab .pq-c > button > b,html.mk body #view .pq-lista .pq-c > button > b{align-self:center!important;margin:0!important;flex:1;min-width:0}",
    "html.mk body #view .pq-hab .pq-c > button b,html.mk body #view .pq-lista .pq-c > button b{font-size:.88rem!important;line-height:1.18!important;-webkit-hyphens:auto!important;hyphens:auto!important;overflow-wrap:break-word!important}",
    /* ---------- Conversa con Manzana ----------
       Sin el 3D, la imagen de Manzana (pensada para un lienzo más grande) tapaba «Volver». La cabecera queda en tres
       columnas: atrás redondo (solo la flecha), Manzana en un círculo con el título, y «Terminar». En el chat, el avatar
       va arriba, junto al comienzo de la burbuja (antes quedaba abajo, al lado de «Escuchar»). */
    "html.mk body #view .tu-top{display:grid!important;grid-template-columns:44px minmax(0,1fr) auto!important;align-items:center!important;gap:10px!important}",
    "html.mk body #view .tu-top .gback{width:44px!important;height:44px!important;min-width:0!important;padding:0!important;justify-content:center!important;border-radius:50%!important}",
    "html.mk body #view .tu-top .gback > span{display:none!important}",
    "html.mk body #view .tu-ttl{display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important}",
    "html.mk body #view .tu-ttl > div:last-child{min-width:0}html.mk body #view .tu-ttl b,html.mk body #view .tu-ttl small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    "html.mk body #view .tu-ttl .tk-mz{width:44px!important;height:44px!important;margin:0!important;border-radius:50%!important;overflow:hidden!important;background:var(--p-azul-p,#E6EEFF)!important;box-shadow:inset 0 0 0 1.5px var(--p-linea,#D9E0F0)}",
    "html.mk body #view .tu-ttl .tk-mz img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:50% 20%!important;border-radius:0!important;transform:scale(1.18)}",
    "html.mk body #view .tu-top .tu-end-b{min-height:40px!important;padding:0 14px!important}",
    "html.mk body #view .tu-chat .tu-row{align-items:flex-start!important}",
    "html.mk body #view .tu-chat .tu-row.mz > img{width:38px!important;height:38px!important;object-fit:cover!important;object-position:50% 12%!important;margin-top:2px;background:var(--p-azul-p,#E6EEFF);box-shadow:inset 0 0 0 1.5px var(--p-linea,#D9E0F0)}",
    "html.mk body #view .tu-chat .tu-tools{margin-top:2px}",
    /* ---------- Taller de escritura ----------
       El número de cada paso iba encima del título («ntexto», «ctura»); ahora va a su lado, en un círculo. Interlineado
       normal (el documento y el texto iban a doble espacio), «Documento» como botón y «Corregir con IA» a lo ancho. */
    "html.mk body #view .plx-at .plx-st{display:grid!important;grid-template-columns:32px minmax(0,1fr)!important;column-gap:12px!important;row-gap:12px!important;align-items:center!important;padding:18px 16px!important}",
    "html.mk body #view .plx-at .plx-st > *{grid-column:1 / -1}",
    /* 4.124: cada paso con su ícono 3D en una placa de color (como el Simulacro) y el número en una insignia */
    "html.mk body #view .plx-at .plx-st{--sk:#2F6BFF;--ski:url(img/ic2/mundo.webp);grid-template-columns:44px minmax(0,1fr)!important}",
    "html.mk body #view .plx-at .plx-st.read{--sk:#12853C;--ski:url(img/ic2/libro.webp)}",
    "html.mk body #view .plx-at .plx-st.ask{--sk:#D97706;--ski:url(img/ic2/pergamino.webp)}",
    "html.mk body #view .plx-at .plx-st.ans{--sk:#D92F5F;--ski:url(img/ic2/lapiz.webp)}",
    "html.mk body #view .plx-at .plx-st > .n{grid-column:1!important;position:relative!important;width:44px!important;height:44px!important;border-radius:13px!important;margin:0!important;font-size:0!important;color:transparent!important;background:var(--ski) center/30px no-repeat,color-mix(in srgb,var(--sk) 14%,var(--p-sup,#fff))!important;box-shadow:none!important;top:auto!important;left:auto!important}",
    "html.mk body #view .plx-at .plx-st > .n::after{content:attr(data-p7n);position:absolute;right:-5px;bottom:-5px;min-width:18px;height:18px;border-radius:9px;display:grid;place-items:center;background:var(--sk);color:#fff;font:800 .68rem/1 var(--f-tit,system-ui);box-shadow:0 0 0 2px var(--p-sup,#fff)}",
    "html.mk body #view .plx-at .plx-st > h3{color:var(--p-tinta,#1F2430)!important}",
    "html.mk body #view .plx-at .plx-st > h3{grid-column:2!important;margin:0!important;display:flex!important;flex-direction:column!important;gap:2px;line-height:1.15!important;padding:0!important}",
    "html.mk body #view .plx-at .plx-st > h3 small{font:600 .8rem/1.2 var(--f-tx,inherit)!important;color:var(--p-apagado,#6B7280)!important;margin:0!important}",
    "html.mk body #view .plx-at p,html.mk body #view .plx-at li,html.mk body #view .plx-at dd,html.mk body #view .plx-at .annot p{line-height:1.55!important}",
    "html.mk body #view .plx-at textarea{line-height:1.5!important}",
    "html.mk body #view .plx-at .annot{padding:16px!important;display:flex!important;flex-direction:column!important;gap:8px!important}",
    "html.mk body #view .plx-at .annot > b{font-size:1.02rem!important;line-height:1.3!important;text-wrap:balance}",
    "html.mk body #view .plx-at .annot > small{line-height:1.4!important;letter-spacing:.06em!important;font-size:.72rem!important}",
    "html.mk body #view .plx-at details.src > summary{display:inline-flex!important;align-items:center;gap:6px;min-height:40px;padding:0 16px!important;border-radius:999px!important;background:var(--p-sup-2,#EEF2FB)!important;font:700 .88rem/1 var(--f-tx,inherit)!important;text-decoration:none!important;cursor:pointer;list-style:none;margin-bottom:10px}",
    "html.mk body #view .plx-at details.src > summary::-webkit-details-marker{display:none}",
    "html.mk body #view .plx-at .bar-row{display:flex!important;flex-direction:column-reverse!important;align-items:stretch!important;gap:8px!important}",
    "html.mk body #view .plx-at .bar-row .btn{width:100%!important;min-height:50px!important}",
    "html.mk body #view .plx-at .bar-row .btn:not(:disabled){background:var(--p-azul,#2F6BFF)!important;color:#fff!important}",
    "html.mk body #view .plx-at .bar-row > .mono{text-align:right;font-size:.78rem!important}",
    /* ---------- Simulacro DELF ----------
       4.123 lo dejó todo gris; Jhon: «no veo mal los colores si se emplean bien». Cada habilidad lleva su color de
       PLEX PLAY (los del Quiz) y su ícono 3D sobre una placa de ese color, en tarjetas blancas; el paso en curso se
       marca con el borde de su color y los hechos con un visto. */
    "html.mk body #view .sim-steps > li,html.mk body #view .sim-intro ul > li{--sk:#2F6BFF;--ski:url(img/ic2/audifonos.webp)}",
    "html.mk body #view .sim-steps > li:nth-child(2),html.mk body #view .sim-intro ul > li:nth-child(2){--sk:#12853C;--ski:url(img/ic2/libro.webp)}",
    "html.mk body #view .sim-steps > li:nth-child(3),html.mk body #view .sim-intro ul > li:nth-child(3){--sk:#D97706;--ski:url(img/ic2/lapiz.webp)}",
    "html.mk body #view .sim-steps > li:nth-child(4),html.mk body #view .sim-intro ul > li:nth-child(4){--sk:#D92F5F;--ski:url(img/ic2/microfono.webp)}",
    "html.mk body #view .sim-steps > li{position:relative;display:flex!important;flex-direction:column!important;align-items:center!important;gap:6px!important;padding:10px 4px 9px!important;background:var(--p-sup,#fff)!important;box-shadow:inset 0 0 0 1.5px var(--p-linea,#D9E0F0)!important;color:var(--p-tinta,#1F2430)!important;border-radius:16px!important;text-align:center}",
    "html.mk body #view .sim-steps > li::before{content:'';width:40px;height:40px;border-radius:12px;background:var(--ski) center/28px no-repeat,color-mix(in srgb,var(--sk) 14%,var(--p-sup,#fff))}",
    "html.mk body #view .sim-steps > li .sx{display:none!important}",
    "html.mk body #view .sim-steps > li span{font-size:.72rem!important;line-height:1.2!important;font-weight:700!important}",
    "html.mk body #view .sim-steps > li.on{box-shadow:inset 0 0 0 2.5px var(--sk)!important;color:var(--sk)!important}",
    "html.mk body #view .sim-steps > li.done::after{content:'✓';position:absolute;top:6px;right:6px;width:18px;height:18px;border-radius:50%;display:grid;place-items:center;background:var(--sk);color:#fff;font:800 .7rem/1 system-ui}",
    "html.mk body #view .sim-intro ul{gap:0!important}",
    "html.mk body #view .sim-intro ul > li{display:block!important;position:relative!important;min-height:40px;background:none!important;border-radius:0!important;padding:14px 2px 14px 54px!important;border-bottom:1px solid var(--p-linea,#D9E0F0)!important;line-height:1.5!important}",
    "html.mk body #view .sim-intro ul > li::before{content:'';position:absolute;left:2px;top:14px;width:40px;height:40px;border-radius:12px;background:var(--ski) center/28px no-repeat,color-mix(in srgb,var(--sk) 14%,var(--p-sup,#fff))}",
    "html.mk body #view .sim-intro ul > li:last-child{border-bottom:0!important}",
    "html.mk body #view .sim-intro ul > li .sx{display:none!important}",
    "html.mk body #view .sim-intro ul > li b:first-of-type{color:var(--sk)}",
    "html.mk body #view .sim-parts > span{background:var(--p-sup-2,#EEF2FB)!important;color:var(--p-tinta,#111827)!important}",
    /* ---------- PLEX 1V1: botón de música ----------
       El ícono iba corrido a la derecha y, apagado, quedaba oscuro sobre fondo oscuro. Centrado y siempre claro;
       apagado, más tenue y con una raya. */
    "html body .v1-mus{display:grid!important;place-items:center!important;padding:0!important;position:relative;background:rgba(255,255,255,.07)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)!important;color:#fff!important}",
    "html body .v1-mus > .sx{margin:0!important;color:#fff!important;opacity:1!important;filter:none!important}",
    "html body .v1-mus .sx svg,html body .v1-mus .sx *{color:#fff!important}",
    "html body .v1-mus[aria-pressed=false] > .sx{opacity:.55!important}",
    "html body .v1-mus[aria-pressed=false]::after{content:'';position:absolute;left:50%;top:50%;width:26px;height:2.5px;border-radius:2px;background:#fff;opacity:.8;transform:translate(-50%,-50%) rotate(-45deg)}",
    /* ---------- Fondos del gato ----------
       La Tienda vende fotos (img/c-*.webp), pero el editor mostraba dibujos y la cabecera del perfil siempre pintaba el
       mismo degradado azul, elijas el fondo que elijas. Ahora los tres usan la foto del fondo elegido. */
    "html.mk body #view .p5-pf-cab.p7-fondo{background-image:linear-gradient(180deg,rgba(8,16,40,.05) 30%,rgba(8,16,40,.42)),var(--fondo)!important;background-size:cover!important;background-position:center!important}",
    "html.mk body #view .cust-prev.p7-fondo{background:var(--fondo) center/cover no-repeat!important}",
    "html.mk body #view .cust-prev.p7-fondo > svg.scene{display:none!important}",
    "html.mk body #view .ctile.bgt.p7-fondo{background:linear-gradient(180deg,transparent 45%,rgba(8,16,40,.7)),var(--fondo) center/cover no-repeat!important;color:#fff!important;width:auto!important;min-width:0!important;height:96px!important;aspect-ratio:auto!important;position:relative;display:flex!important;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding:8px 10px!important;overflow:hidden}",
    "html.mk body #view .ctile.bgt.p7-fondo > svg{display:none!important}",
    "html.mk body #view .ctile.bgt.p7-fondo > :not(svg):not(small){position:absolute!important;top:6px!important;right:6px!important;left:auto!important;max-width:calc(100% - 12px)!important;font-size:.68rem!important;padding:2px 7px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    "html.mk body #view .ctile.bgt.p7-fondo small{color:#fff!important;font-weight:800!important;text-shadow:0 1px 3px rgba(0,0,0,.5)}",
    /* precios de la Tienda: no se cortan */
    "html.mk body #view .tn-i .tn-pr{max-width:none!important;overflow:visible!important;white-space:nowrap!important;padding:5px 10px!important;font-size:.82rem!important}",
    /* ---------- PLEX Quiz: Manzana en las respuestas ----------
       Las figuras blancas (patita, croissant, boina, estrella) se cambian por Manzana en cuatro poses; en Verdadero o
       falso, pulgar arriba y pulgar abajo. */
    "html.mk body .kq .kq-op > i{width:54px!important;height:54px!important;filter:drop-shadow(0 2px 2px rgba(0,0,0,.22))!important;background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important}",
    "html.mk body .kq .kq-op.c0 > i{background-image:url(img/m2d/saludar.webp)!important}",
    "html.mk body .kq .kq-op.c1 > i{background-image:url(img/m2d/pensativo.webp)!important}",
    "html.mk body .kq .kq-op.c2 > i{background-image:url(img/m2d/estrella.webp)!important}",
    "html.mk body .kq .kq-op.c3 > i{background-image:url(img/m2d/celebrar.webp)!important}",
    "html.mk body .kq .kq-ops.vf .kq-op.c3 > i{background-image:url(img/m2d/pulgar.webp)!important}",
    "html.mk body .kq .kq-ops.vf .kq-op.c0 > i{background-image:url(img/m2d/pulgar_abajo.webp)!important}",
    /* ---------- Ajustes, más simple ----------
       Antes: tarjeta dentro de tarjeta dentro de tarjeta, una cabecera que repetía «Ajustes» y una descripción larga
       en cada opción. Ahora: una sola lista, una línea por opción, el tema en una fila y las redes al final, pequeñas. */
    "html body .gmodal.m-aj .aj{background:none!important;box-shadow:none!important;padding:0!important;border:0!important}",
    "html body .gmodal.m-aj .aj-top{display:none!important}",
    "html body .gmodal.m-aj .aj-h{margin:18px 4px 8px!important;font-size:.72rem!important;letter-spacing:.08em!important;color:var(--p-apagado,#6B7280)!important}",
    "html body .gmodal.m-aj .qs{padding:2px 16px!important;margin:0!important}",
    "html body .gmodal.m-aj .qs-row{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;align-items:center!important;gap:12px!important;padding:14px 0!important;min-height:0!important}",
    "html body .gmodal.m-aj .qs-row small{display:none!important}",
    "html body .gmodal.m-aj .qs-row b{font-size:1rem!important;line-height:1.25!important}",
    "html body .gmodal.m-aj .qs-row.col{grid-template-columns:1fr!important;gap:10px!important}",
    "html body .gmodal.m-aj .qs-seg{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:4px!important;padding:4px!important;width:100%!important}",
    "html body .gmodal.m-aj .qs-seg > button{min-height:40px!important;padding:0 6px!important;font-size:.88rem!important;white-space:nowrap}",
    "html body .gmodal.m-aj .plx69-redes{display:flex!important;gap:8px!important;margin:14px 0 0!important}",
    "html body .gmodal.m-aj .plx69-redes a{flex:1;min-height:42px!important;padding:4px 12px!important;border-radius:14px!important;font-size:.9rem!important}",
    "html body .gmodal.m-aj .plx69-redes a small{display:none!important}",
    "html body .gmodal.m-aj .p5-inst .aj-h{display:none!important}",
    "html body .gmodal.m-aj .p5-inst{margin:14px 0 0!important;padding:0!important}html body .gmodal.m-aj .p5-inst > button{width:100%!important;margin:0!important}",
    "html body .gmodal.m-aj .set-row.c{background:none!important;box-shadow:none!important;border:0!important}html body .gmodal.m-aj .gm-card{background:none!important;box-shadow:none!important}",
    /* ---------- Buscador de temas: una lupa junto al curso ----------
       La barra «Busca un tema…» ocupaba una fila entera en Inicio. Ahora es un botón cuadrado con la lupa, a la derecha
       de la tarjeta del curso y a su misma altura (la altura la pone fondos/lupa() abajo, porque la tarjeta crece si el
       nombre del curso ocupa dos líneas). Abre el mismo buscador. */
    /* 4.124: la tarjeta del curso vuelve a ser una fila fina (las clases de tarjeta del kit le ponían relleno grande y
       la sombra gruesa de abajo); la lupa, del mismo alto y con el mismo borde fino */
    "html.mk body #view .mp > .p5-curso{min-height:52px!important;height:auto!important;padding:6px 8px 6px 12px!important;border-radius:16px!important;background:var(--p-sup,#fff)!important;background-image:none!important;box-shadow:inset 0 0 0 1.5px var(--p-linea,#D9E0F0)!important;gap:10px!important}",
    "html.mk body #view .mp > .p5-curso img{width:24px!important;height:24px!important}",
    "html.mk body #view .mp > .p5-curso > span{flex-direction:column!important;align-items:flex-start!important;gap:0!important}",
    "html.mk body #view .mp > .p5-curso b{font-size:.95rem!important;line-height:1.2!important}",
    "html.mk body #view .mp > .p5-curso small{font-size:.74rem!important;line-height:1.25!important}",
    "html.mk body #view .mp > .p5-curso em{padding:7px 12px!important;font-size:.78rem!important}",
    "html.mk body #view .mp > .p5-curso.p7-con-lupa{width:calc(100% - 60px)!important;max-width:calc(100% - 60px)!important;margin-right:0!important}",
    "html.mk body #view .mp > .bx-barra.p7-lupa{width:52px!important;min-width:0!important;min-height:0!important;margin:0 0 0 auto!important;padding:0!important;display:grid!important;place-items:center!important;border-radius:16px!important;background:var(--p-sup,#fff)!important;box-shadow:inset 0 0 0 1.5px var(--p-linea,#D9E0F0)!important;position:relative;z-index:1}",
    "html.mk body #view .mp > .bx-barra.p7-lupa:active,html.mk body #view .mp > .p5-curso:active{transform:scale(.97)!important;transition:transform .08s!important}",
    "html.mk body #view .mp > .bx-barra.p7-lupa > span{display:none!important}",
    "html.mk body #view .mp > .bx-barra.p7-lupa svg{width:24px!important;height:24px!important}"
  ];
  var st = D.createElement("style"); st.id = "plx127";
  st.textContent = "@layer pz{" + css.join("\n") + "}";
  D.head.appendChild(st);

  /* foto de cada fondo: la misma tabla que la Tienda (plx91) */
  var FOTO = { paris: "c-paris", cafe: "c-cafe", biblioteca: "c-libros", montana: "c-montana", playa: "c-playa", universidad: "c-calle" };
  var url = function(id){ return 'url("img/' + (FOTO[id] || "c-paris") + '.webp")'; };
  var fondos = function(){
    var bg = "paris"; try { bg = (gEnsure().cat || {}).bg || "paris"; } catch (e) {}
    [].forEach.call(D.querySelectorAll("#view .p5-pf-cab:not(.p5-otro-cab), #view .cust-prev"), function(el){
      if (el.getAttribute("data-p7-bg") === bg) return;
      el.setAttribute("data-p7-bg", bg); el.classList.add("p7-fondo"); el.style.setProperty("--fondo", url(bg));
    });
    [].forEach.call(D.querySelectorAll("#view .ctile.bgt[data-arg]:not(.p7-fondo)"), function(el){
      el.classList.add("p7-fondo"); el.style.setProperty("--fondo", url(el.getAttribute("data-arg")));
    });
  };
  /* la lupa toma la altura de la tarjeta del curso y sube hasta quedar a su lado */
  var lupa = function(){
    var bx = D.querySelector("#view .mp > .bx-barra"), cu = bx && bx.previousElementSibling;
    if (!bx || !cu || !cu.classList.contains("p5-curso")) return;
    cu.classList.add("p7-con-lupa"); bx.classList.add("p7-lupa");
    var h = cu.offsetHeight; if (!h) return;
    var mb = parseFloat(getComputedStyle(cu).marginBottom) || 0;
    bx.style.setProperty("height", h + "px", "important"); bx.style.setProperty("margin-top", (-h - mb) + "px", "important"); bx.style.setProperty("margin-bottom", mb + "px", "important");
    /* el contenedor puede tener separación (gap) entre hijos: se mide y se compensa */
    var d = bx.getBoundingClientRect().top - cu.getBoundingClientRect().top;
    if (Math.abs(d) > .5) { bx.style.setProperty("margin-top", (-h - mb - d) + "px", "important"); bx.style.setProperty("margin-bottom", (mb + d) + "px", "important"); }
  };
  /* Conversa: cada mensaje de Manzana con una pose distinta (antes, la misma imagen en todos) */
  var POSES = ["saludar", "pensativo", "explica", "pulgar", "senalar", "celebrar", "sorpresa", "estrella", "lupa", "corazones"];
  var pasos = function(){
    [].forEach.call(D.querySelectorAll("#view .plx-at .plx-st > .n:not([data-p7n])"), function(n){ n.setAttribute("data-p7n", n.textContent.trim()); });
  };
  var poses = function(){
    var fs = D.querySelectorAll("#view .tu-chat .tu-row.mz > img");
    for (var i = 0; i < fs.length; i++) {
      var im = fs[i], k = POSES[i % POSES.length];
      if (im.getAttribute("data-p7") === k) continue;
      im.setAttribute("data-p7", k); im.src = "img/m2d/" + k + ".webp";
    }
  };
  if (typeof render === "function") { var r0 = render; render = function(){ var x = r0.apply(this, arguments); try { fondos(); } catch (e) {} try { lupa(); } catch (e) {} try { poses(); } catch (e) {} try { pasos(); } catch (e) {} return x; }; }
  var pend = 0, V = D.getElementById("view");
  if (V) new MutationObserver(function(){ if (pend) return; pend = 1; requestAnimationFrame(function(){ pend = 0; try { fondos(); } catch (e) {} try { lupa(); } catch (e) {} try { poses(); } catch (e) {} try { pasos(); } catch (e) {} }); }).observe(V, { childList: true, subtree: true });
})();
