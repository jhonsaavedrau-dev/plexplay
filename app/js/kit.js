/* PLEX PLAY — Piezas globales (kit)
   Una sola definición de cada pieza de interfaz. Una pantalla no dibuja «su» botón: declara la pieza que usa
   (class="pz-btn pz-btn--oro") o la pide por función (PLX_KIT.btn("Jugar", { v: "oro" })). Cambiar una pieza aquí la
   cambia en toda la app, y un arreglo vale para todas las pantallas.

   Cómo manda sobre el resto
   - El aspecto va en la capa CSS «pz», con cada declaración en !important. La capa se declara ANTES que «p5» (la piel
     de plx101): entre capas, lo importante de la que va primero gana. Así ninguna regla de un módulo puede dejar un
     botón «parecido pero distinto». La hoja se inserta al principio de <head>, de modo que el orden no depende de
     cuándo cargue este archivo.
   - Lo que es del sitio y no de la pieza (ancho, margen, posición, orden, mostrar u ocultar) NO se fija aquí con
     fuerza: `display` y `gap` van como valores por defecto débiles, y los pone quien coloca la pieza.
   - Los colores, tamaños y radios salen de los tokens de plx101 (--p-*, --s-*, --t-*, --r-*, --f-*).

   Piezas
     pz-btn     botón de acción        --oro --liso --rojo --verde --rosa --blanco --sobre --texto · --sm --lg --ancho --signo
     pz-ibtn    botón de icono         --plano --azul --sobre · --sm --lg
     pz-opt     opción seleccionable   --ficha · estados: aria-pressed/checked/selected o .sel/.on, .ok, .ko, .dim, .pair
     pz-seg     selector segmentado    (sus hijos directos <button> son las opciones)
     pz-card    tarjeta                --vidrio --plana --azul --rosa --oro --verde --marca · --toca --compacta --sinpad
     pz-fila    fila de lista          (hijos: __ic --oro --rosa --verde, __tx, __fin --accion) · contenedor pz-lista · elegida: aria-checked/pressed
     pz-pill    pastilla               --azul --oro --verde --rojo --rosa · --sm
     pz-barra   barra de progreso      --oro --verde --rosa · --fina (hijo: <i style="width:…%">)
     pz-campo   campo de texto
     pz-sw      interruptor            (aria-checked)
     pz-cab     cabecera de pantalla   (Volver + título) · pz-sec título de sección con acción
     pz-vacio   estado vacío           (imagen, título, texto, acción)
     pz-aviso   aviso en línea         --ok --alerta --error

   Un elemento migrado conserva su clase vieja solo como gancho para el código y las pruebas; su aspecto es el de la
   pieza. Catálogo en vivo: PLX_KIT.catalogo() (o abrir la app con ?piezas=1). */
(function(){
  "use strict";
  var D = document;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ====================================================================== CSS */
  var F = [], W = [];   /* F: aspecto (fuerte, !important) · W: valores por defecto del sitio (débiles) */
  var f = function(){ for (var i = 0; i < arguments.length; i++) F.push(arguments[i]); };
  var w = function(){ for (var i = 0; i < arguments.length; i++) W.push(arguments[i]); };
  var FOCO = "outline:3px solid var(--p-oro);outline-offset:2px";

  /* ---------- botón de acción ---------- */
  /* La cara (fondo, relieve y texto) sale de tres variables. Cada variante las fija en el propio botón; el botón
     principal, sin variante, las hereda: así un contenedor puede dar «color por contexto» a sus botones principales
     (la corrección de un ejercicio en verde o rojo, la portada de un juego en el color de su familia) declarando
     --pz-cara, --pz-cara-r y --pz-cara-tx, y nada más que eso. */
  var CARA = function(bg, rel, tx){ return "--pz-cara:" + bg + ";--pz-cara-r:" + rel + ";--pz-cara-tx:" + tx; };
  w(".pz-btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--s-2)}");
  f(".pz-btn{--pz-rel:4px;-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;cursor:pointer;text-decoration:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;min-height:48px;padding:12px var(--s-5);border-radius:var(--r-md);font:700 var(--t-md)/1.2 var(--f-tit);letter-spacing:.01em;text-align:center;text-transform:none;text-shadow:none;background-color:var(--pz-cara,var(--p-azul-btn));background-image:none;color:var(--pz-cara-tx,#fff);box-shadow:0 var(--pz-rel) 0 var(--pz-cara-r,var(--p-azul-r));transition:transform .08s,box-shadow .08s,filter .15s}",
    ".pz-btn > svg,.pz-btn > img{flex:none;width:20px;height:20px}",
    ".pz-btn > svg{fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}",
    "@media (hover:hover){.pz-btn:not(:disabled):hover{filter:brightness(1.07)}}",
    ".pz-btn:not(:disabled):active{transform:translateY(3px);box-shadow:0 1px 0 transparent}",
    ".pz-btn:focus-visible,.pz-ibtn:focus-visible,.pz-opt:focus-visible,.pz-seg > button:focus-visible,.pz-card--toca:focus-visible,.pz-fila:focus-visible,.pz-sw:focus-visible{" + FOCO + "}",
    ".pz-btn[hidden],.pz-ibtn[hidden],.pz-opt[hidden],.pz-card[hidden],.pz-fila[hidden],.pz-pill[hidden]{display:none}",
    ".pz-btn--azul{" + CARA("var(--p-azul-btn)", "var(--p-azul-r)", "#fff") + "}",
    ".pz-btn--oro{" + CARA("var(--p-oro)", "var(--p-oro-r)", "var(--p-sobre-oro)") + "}",
    ".pz-btn--rojo{" + CARA("var(--p-rojo-btn)", "var(--p-rojo-r)", "#fff") + "}",
    ".pz-btn--verde{" + CARA("var(--p-verde-btn)", "var(--p-verde-r)", "#fff") + "}",
    ".pz-btn--rosa{" + CARA("var(--p-rosa-btn)", "var(--p-rosa-r)", "#fff") + "}",
    ".pz-btn--blanco{" + CARA("#fff", "rgba(20,24,38,.3)", "#2255E0") + "}",
    ".pz-btn--liso{" + CARA("var(--p-sup)", "var(--p-relieve)", "var(--p-azul-tx)") + ";box-shadow:inset 0 0 0 1.5px var(--p-linea),0 var(--pz-rel) 0 var(--p-relieve)}",
    ".pz-btn--liso:not(:disabled):active{box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    /* liso de peligro: la superficie de siempre con el texto en rojo (borrar, salir) */
    ".pz-btn--liso.pz-btn--rojo{--pz-cara-tx:var(--p-rojo-tx)}",
    /* sobre un fondo de color (cabeceras de marca, Quiz, juegos) */
    ".pz-btn--sobre{" + CARA("rgba(255,255,255,.16)", "transparent", "#fff") + ";box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.32)}",
    ".pz-btn--sobre:not(:disabled):active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.32)}",
    /* como texto: acciones secundarias y enlaces */
    ".pz-btn--texto{" + CARA("transparent", "transparent", "var(--p-azul-tx)") + ";min-height:44px;padding:0 var(--s-2);box-shadow:none;font:700 var(--t-sm)/1.2 var(--f-tx)}",
    ".pz-btn--texto:not(:disabled):active{transform:none;box-shadow:none;opacity:.7}",
    "@media (hover:hover){.pz-btn--texto:not(:disabled):hover{filter:none;text-decoration:underline}}",
    /* no disponible: cara gris, igual en todas las variantes */
    ".pz-btn:disabled,.pz-btn[aria-disabled=true]{cursor:not-allowed;background-color:var(--p-sup-3);color:var(--p-apagado);box-shadow:0 var(--pz-rel) 0 var(--p-linea);opacity:1;filter:none;transform:none}",
    ".pz-btn--texto:disabled{background-color:transparent;box-shadow:none;opacity:.5}",
    ".pz-btn--sm{--pz-rel:3px;min-height:40px;padding:8px var(--s-4);border-radius:var(--r-sm);font-size:var(--t-sm)}",
    ".pz-btn--sm > svg,.pz-btn--sm > img{width:18px;height:18px}",
    ".pz-btn--lg{min-height:56px;padding:14px var(--s-6);font-size:var(--t-lg)}",
    ".pz-btn--ancho{width:100%}",
    /* solo un signo o un icono, con la forma del botón de acción (junto a otros botones de acción) */
    ".pz-btn--signo{padding:0;min-width:48px}.pz-btn--signo.pz-btn--sm{min-width:40px}.pz-btn--signo.pz-btn--lg{min-width:56px}");

  /* ---------- botón de icono ---------- */
  w(".pz-ibtn{display:inline-grid;place-items:center}");
  f(".pz-ibtn{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;width:44px;height:44px;min-width:44px;min-height:44px;border-radius:50%;background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);font:700 1rem/1 var(--f-tit);text-decoration:none;transition:transform .08s,box-shadow .08s,background-color .15s}",
    ".pz-ibtn > svg,.pz-ibtn > img{width:22px;height:22px}",
    ".pz-ibtn > svg{fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}",
    ".pz-ibtn:active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".pz-ibtn:disabled{cursor:default;opacity:.5}",
    ".pz-ibtn--plano{background-color:transparent;box-shadow:none;color:var(--p-tinta-2)}",
    ".pz-ibtn--plano:active{transform:none;box-shadow:none;background-color:var(--p-sup-3)}",
    "@media (hover:hover){.pz-ibtn--plano:hover{background-color:var(--p-sup-3)}}",
    ".pz-ibtn--azul{background-color:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r)}",
    ".pz-ibtn--azul:active{box-shadow:0 1px 0 transparent}",
    ".pz-ibtn--sobre{background-color:rgba(255,255,255,.16);color:#fff;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}",
    ".pz-ibtn--sobre:active{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}",
    ".pz-ibtn--sm{width:36px;height:36px;min-width:36px;min-height:36px}.pz-ibtn--sm > svg,.pz-ibtn--sm > img{width:18px;height:18px}",
    ".pz-ibtn--lg{width:56px;height:56px;min-width:56px;min-height:56px}.pz-ibtn--lg > svg,.pz-ibtn--lg > img{width:26px;height:26px}");

  /* ---------- opción seleccionable ---------- */
  /* Estados (los que ya emite el código de la app):
       elegida   aria-pressed | aria-checked | aria-selected = true, o la clase .sel / .on
       correcta  .ok / .good        incorrecta  .ko / .bad        apagada  .dim
       pareja    .pair con data-par="1…6" (unir palabras): las dos mitades comparten color y número
     Una regla de «elegida» que olvide alguno de estos fue el fallo de la 4.26 (dos veces): por eso viven aquí juntos. */
  var EL = function(pre, suf){ return ["[aria-pressed=true]", "[aria-checked=true]", "[aria-selected=true]", ".sel", ".on"].map(function(x){ return pre + x + (suf || ""); }).join(","); };
  w(".pz-opt{display:flex;align-items:center;gap:var(--s-3)}");
  f(".pz-opt{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;position:relative;min-height:56px;padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve);font:600 var(--t-md)/1.3 var(--f-tx);text-align:left;text-transform:none;letter-spacing:0;opacity:1;transition:transform .1s,box-shadow .12s,background-color .12s}",
    ".pz-opt:not(:disabled):active{transform:translateY(3px);box-shadow:inset 0 0 0 2px var(--p-linea)}",
    EL(".pz-opt") + "{background-color:var(--p-azul-p);color:var(--p-tinta);box-shadow:inset 0 0 0 3px var(--p-azul),0 4px 0 var(--p-azul);transform:translateY(-2px)}",
    /* pareja hecha: ni azul (es «elegida») ni verde ni rojo (son la corrección) */
    ".pz-opt[data-par]{--par:#D6409F}.pz-opt[data-par='2']{--par:#D99A00}.pz-opt[data-par='3']{--par:#8B6CFF}.pz-opt[data-par='4']{--par:#0E9E8E}.pz-opt[data-par='5']{--par:#F0763A}.pz-opt[data-par='6']{--par:#2BA3D9}",
    ".pz-opt.pair[data-par]{background-color:color-mix(in srgb,var(--par) 16%,var(--p-sup));box-shadow:inset 0 0 0 2px var(--par),0 4px 0 var(--par)}",
    EL(".pz-opt.pair[data-par]") + "{background-color:var(--p-azul-p);box-shadow:inset 0 0 0 3px var(--p-azul),0 4px 0 var(--p-azul)}",
    ".pz-opt.ok,.pz-opt.good,.pz-opt.pair.ok,.pz-opt.pair.good{background-color:var(--p-verde-p);color:var(--p-verde-tx);box-shadow:inset 0 0 0 2px var(--p-verde),0 4px 0 var(--p-verde);transform:none}",
    ".pz-opt.ko,.pz-opt.bad,.pz-opt.pair.ko,.pz-opt.pair.bad{background-color:var(--p-rojo-p);color:var(--p-rojo-tx);box-shadow:inset 0 0 0 2px var(--p-rojo),0 4px 0 var(--p-rojo);transform:none}",
    ".pz-opt.dim{opacity:.55}",
    ".pz-opt:disabled{cursor:default}",
    ".pz-opt--ficha{min-height:44px;padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);font-weight:700}",
    /* número o letra de la opción (el núcleo lo llama .n) */
    ".pz-opt__n,.pz-opt > .n{flex:none;min-width:26px;height:26px;padding:0 6px;box-sizing:border-box;display:grid;place-items:center;border:0;border-radius:var(--r-pill);background-color:var(--p-sup-3);color:var(--p-apagado);font:800 .78rem/1 var(--f-tit)}",
    EL(".pz-opt", " .pz-opt__n") + "," + EL(".pz-opt", " > .n") + "{background-color:var(--p-azul-btn);color:#fff}",
    ".pz-opt.pair[data-par] > .n,.pz-opt.pair[data-par] .pz-opt__n{background-color:var(--par);color:#fff}",
    ".pz-opt.ok .pz-opt__n,.pz-opt.ok > .n,.pz-opt.good > .n{background-color:var(--p-verde-btn);color:#fff}.pz-opt.ko .pz-opt__n,.pz-opt.ko > .n,.pz-opt.bad > .n{background-color:var(--p-rojo-btn);color:#fff}");

  /* ---------- selector segmentado ---------- */
  /* los hijos directos <button> de pz-seg son sus opciones (no hace falta ponerles clase) */
  w(".pz-seg{display:flex;flex-wrap:wrap;gap:var(--s-1)}", ".pz-seg > button{display:flex;align-items:center;justify-content:center;gap:6px;flex:1 1 auto}");
  f(".pz-seg{box-sizing:border-box;padding:var(--s-1);border:0;border-radius:var(--r-md);background-color:var(--p-sup-3);background-image:none;box-shadow:none}",
    ".pz-seg > button{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;min-width:max-content;min-height:44px;padding:0 var(--s-3);border-radius:var(--r-sm);background-color:transparent;background-image:none;box-shadow:none;color:var(--p-tinta-2);font:600 var(--t-sm)/1.1 var(--f-tx);text-align:center;text-transform:none;letter-spacing:0;white-space:nowrap;transition:background-color .15s,color .15s}",
    ".pz-seg > button[aria-pressed=true],.pz-seg > button[aria-selected=true],.pz-seg > button[aria-checked=true],.pz-seg > button.sel,.pz-seg > button.on,.pz-seg > button.active{background-color:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}");

  /* ---------- tarjeta ---------- */
  w(".pz-card{display:block}");
  /* el relleno es de la pieza (era lo que más variaba de una tarjeta a otra): --compacta y --sinpad para los casos justos */
  f(".pz-card{box-sizing:border-box;border:0;padding:var(--s-4) var(--s-5);border-radius:var(--r-lg);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);-webkit-backdrop-filter:none;backdrop-filter:none}",
    ".pz-card--plana{box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".pz-card--compacta{padding:var(--s-3) var(--s-4)}.pz-card--sinpad{padding:0;overflow:hidden}",
    ".pz-card--vidrio{background-color:transparent;background-image:var(--p-vidrio);box-shadow:inset 0 0 0 1px var(--p-vidrio-linea),inset 0 1px 0 var(--p-vidrio-borde),var(--p-vidrio-sombra);-webkit-backdrop-filter:blur(22px) saturate(1.5);backdrop-filter:blur(22px) saturate(1.5)}",
    ".pz-card--azul{background-color:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-azul) 30%,transparent)}",
    ".pz-card--rosa{background-color:var(--p-lila-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-rosa) 30%,transparent)}",
    ".pz-card--oro{background-color:var(--p-oro-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-oro) 40%,transparent)}",
    ".pz-card--verde{background-color:var(--p-verde-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-verde) 30%,transparent)}",
    ".pz-card--marca{background-color:var(--p-azul-btn);background-image:linear-gradient(115deg,var(--p-azul-btn) 0%,color-mix(in srgb,var(--p-azul-btn) 84%,#fff) 100%);color:#fff;box-shadow:0 4px 0 var(--p-azul-r)}",
    /* una tarjeta que se toca (ficha de juego, artículo de tienda, curso) */
    ".pz-card--toca{-webkit-appearance:none;appearance:none;cursor:pointer;text-align:left;font:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:transform .1s,box-shadow .1s}",
    ".pz-card--toca:active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "@media (hover:hover){.pz-card--toca:hover{transform:translateY(-2px)}.pz-card--toca:active{transform:translateY(3px)}}",
    ".pz-card--toca[aria-pressed=true],.pz-card--toca[aria-selected=true],.pz-card--toca.sel{box-shadow:inset 0 0 0 3px var(--p-azul),0 3px 0 var(--p-azul)}");

  /* ---------- fila de lista ---------- */
  w(".pz-lista{display:flex;flex-direction:column}", ".pz-fila{display:flex;align-items:center;gap:var(--s-3)}");
  f(".pz-lista{box-sizing:border-box;padding:0;border:0;border-radius:var(--r-lg);background-color:var(--p-sup);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);overflow:hidden}",
    ".pz-fila{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;min-height:60px;padding:var(--s-2) var(--s-4);background-color:transparent;background-image:none;box-shadow:none;border-radius:0;color:var(--p-tinta);font:500 var(--t-md)/1.3 var(--f-tx);text-align:left;text-decoration:none;-webkit-tap-highlight-color:transparent}",
    ".pz-lista > .pz-fila + .pz-fila{box-shadow:inset 0 1.5px 0 var(--p-linea)}",
    "button.pz-fila,a.pz-fila{cursor:pointer}",
    "@media (hover:hover){button.pz-fila:hover,a.pz-fila:hover{background-color:var(--p-sup-2)}}",
    ".pz-fila__ic{flex:none;width:40px;height:40px;display:grid;place-items:center;border-radius:var(--r-sm);background-color:var(--p-azul-p);color:var(--p-azul-tx)}",
    ".pz-fila__ic > img,.pz-fila__ic > svg{width:26px;height:26px}",
    ".pz-fila__tx{flex:1;min-width:0;display:grid;gap:2px}",
    ".pz-fila__tx > b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".pz-fila__tx > small{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-apagado)}",
    ".pz-fila__fin{flex:none;color:var(--p-apagado);font:700 var(--t-sm)/1 var(--f-tx)}",
    /* variantes: icono en otro tono, y el final como acción («Cambiar») */
    ".pz-fila__ic--oro{background-color:var(--p-oro-p);color:var(--p-oro-tx)}.pz-fila__ic--rosa{background-color:var(--p-lila-p);color:var(--p-lila-tx)}.pz-fila__ic--verde{background-color:var(--p-verde-p);color:var(--p-verde-tx)}",
    ".pz-fila__fin--accion{color:var(--p-azul-tx)}",
    ".pz-fila__fin > svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}",
    /* fila que se elige (lista de opciones, como los semestres): la elegida se tiñe y su icono pasa a azul macizo */
    EL(".pz-fila") + "{background-color:var(--p-azul-p)}",
    EL(".pz-fila", " .pz-fila__ic") + "{background-color:var(--p-azul-btn);color:#fff}",
    EL(".pz-fila", " .pz-fila__fin") + "{color:var(--p-azul-tx)}");

  /* ---------- pastilla ---------- */
  w(".pz-pill{display:inline-flex;align-items:center;gap:4px}");
  f(".pz-pill{box-sizing:border-box;border:0;min-height:32px;padding:0 var(--s-3);border-radius:var(--r-pill);background-color:var(--p-sup-2);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:700 var(--t-sm)/1 var(--f-tx);letter-spacing:0;text-transform:none;white-space:nowrap}",
    ".pz-pill > svg,.pz-pill > img{flex:none;width:18px;height:18px}",
    ".pz-pill--azul{background-color:var(--p-azul-p);color:var(--p-azul-tx);box-shadow:none}",
    ".pz-pill--oro{background-color:var(--p-oro-p);color:var(--p-oro-tx);box-shadow:none}",
    ".pz-pill--verde{background-color:var(--p-verde-p);color:var(--p-verde-tx);box-shadow:none}",
    ".pz-pill--rojo{background-color:var(--p-rojo-p);color:var(--p-rojo-tx);box-shadow:none}",
    ".pz-pill--rosa{background-color:var(--p-lila-p);color:var(--p-lila-tx);box-shadow:none}",
    ".pz-pill--sm{min-height:24px;padding:0 var(--s-2);font-size:var(--t-xs)}");

  /* ---------- barra de progreso ---------- */
  w(".pz-barra{display:block}");
  f(".pz-barra{box-sizing:border-box;height:10px;padding:0;border:0;border-radius:var(--r-pill);background-color:var(--p-pista);background-image:none;box-shadow:none;overflow:hidden}",
    ".pz-barra > i{display:block;height:100%;min-width:0;border-radius:var(--r-pill);background-color:var(--p-azul);background-image:none;transition:width .4s ease}",
    ".pz-barra--oro > i{background-color:var(--p-oro)}.pz-barra--verde > i{background-color:var(--p-verde)}.pz-barra--rosa > i{background-color:var(--p-rosa)}",
    ".pz-barra--fina{height:6px}");

  /* ---------- campo ---------- */
  f(".pz-campo{-webkit-appearance:none;appearance:none;box-sizing:border-box;width:100%;min-height:48px;padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:500 var(--t-md)/1.4 var(--f-tx);outline:0}",
    ".pz-campo::placeholder{color:var(--p-apagado);opacity:1}",
    ".pz-campo:focus{box-shadow:inset 0 0 0 2.5px var(--p-azul)}",
    ".pz-campo.ko{box-shadow:inset 0 0 0 2.5px var(--p-rojo)}.pz-campo.ok{box-shadow:inset 0 0 0 2.5px var(--p-verde)}",
    "textarea.pz-campo{min-height:120px;resize:vertical}");

  /* ---------- interruptor ---------- */
  f(".pz-sw{-webkit-appearance:none;appearance:none;box-sizing:border-box;flex:none;position:relative;width:54px;height:32px;min-height:32px;padding:0;border:0;border-radius:var(--r-pill);cursor:pointer;background-color:var(--p-sup-3);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea);color:transparent;font-size:0;transition:background-color .15s}",
    ".pz-sw::after{content:'';position:absolute;left:4px;top:4px;width:24px;height:24px;border-radius:50%;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,.25);transition:transform .15s}",
    ".pz-sw > *{display:none}",
    ".pz-sw[aria-checked=true],.pz-sw[aria-pressed=true],.pz-sw.sel{background-color:var(--p-verde-btn);box-shadow:none}",
    ".pz-sw[aria-checked=true]::after,.pz-sw[aria-pressed=true]::after,.pz-sw.sel::after{transform:translateX(22px)}");

  /* ---------- cabeceras ---------- */
  w(".pz-cab{display:flex;align-items:center;gap:var(--s-3)}", ".pz-sec{display:flex;align-items:baseline;justify-content:space-between;gap:var(--s-3)}");
  f(".pz-cab{box-sizing:border-box;min-height:48px;color:var(--p-tinta);text-align:left}",
    ".pz-cab__t{min-width:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    ".pz-sec > h2,.pz-sec > h3,.pz-sec > b{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);letter-spacing:-.01em}",
    ".pz-sec > small{font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}");

  /* ---------- estado vacío y aviso ---------- */
  w(".pz-vacio{display:grid;justify-items:center;gap:var(--s-3);padding:var(--s-7) var(--s-4)}", ".pz-aviso{display:flex;align-items:flex-start;gap:var(--s-3)}");
  f(".pz-vacio{box-sizing:border-box;text-align:center;color:var(--p-tinta-2);font:500 var(--t-md)/1.45 var(--f-tx)}",
    ".pz-vacio > img{width:120px;height:120px;object-fit:contain}",
    ".pz-vacio > b,.pz-vacio > h3{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".pz-vacio > p{margin:0;max-width:34ch}",
    ".pz-aviso{box-sizing:border-box;padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background-color:var(--p-azul-p);background-image:none;color:var(--p-tinta);box-shadow:none;font:500 var(--t-sm)/1.4 var(--f-tx);text-align:left}",
    ".pz-aviso--ok{background-color:var(--p-verde-p);color:var(--p-verde-tx)}.pz-aviso--alerta{background-color:var(--p-oro-p);color:var(--p-oro-tx)}.pz-aviso--error{background-color:var(--p-rojo-p);color:var(--p-rojo-tx)}",
    "@media (prefers-reduced-motion:reduce){.pz-btn,.pz-ibtn,.pz-opt,.pz-card--toca,.pz-barra > i,.pz-sw,.pz-sw::after{transition:none}}");

  /* ---------- color por contexto ---------- */
  /* Solo el botón principal (sin variante) hereda estas caras: «Ver la regla» o «Salir» siguen con la suya. */
  f("#player .pf.ok .pfa,#player .pf.good .pfa{" + CARA("var(--p-verde-btn)", "var(--p-verde-r)", "#fff") + "}",
    "#player .pf.bad .pfa,#player .pf.ko .pfa{" + CARA("var(--p-rojo-btn)", "var(--p-rojo-r)", "#fff") + "}",
    /* portada de un juego: «Jugar» en el color de su familia (--jc/--jr/--jt los pone plx101 por juego) */
    ".plxg .pz-btn.pt-go{" + CARA("var(--jc,var(--p-azul-btn))", "var(--jr,var(--p-azul-r))", "var(--jt,#fff)") + "}");

  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx-kit";
  st.textContent = "@layer pz,p5;\n@layer pz{" + W.join("\n") + "\n" + imp(F.join("\n")) + "}";
  var cabeza = D.head || D.documentElement; cabeza.insertBefore(st, cabeza.firstChild);

  /* ====================================================================== funciones */
  var IC = {
    atras: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    cerrar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    oir: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.6 7.6 0 0 1 0 11"/></svg>',
    mas: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    sigue: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    ok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
  };
  var clases = function(base, o, extra){
    var c = [base]; o = o || {};
    String(o.v || "").split(/\s+/).forEach(function(v){ if (v) c.push(base + "--" + v); });
    if (o.sm) c.push(base + "--sm"); if (o.lg) c.push(base + "--lg"); if (o.ancho) c.push(base + "--ancho");
    if (extra) c.push(extra); if (o.cls) c.push(o.cls);
    return c.join(" ");
  };
  /* attrs: objeto { "data-x": 1, disabled: true } o texto ya armado */
  var atr = function(a){
    if (!a) return ""; if (typeof a === "string") return " " + a;
    var s = ""; for (var k in a) { var v = a[k]; if (v === false || v == null) continue; s += " " + k + (v === true ? "" : '="' + esc(v) + '"'); } return s;
  };
  var ico = function(i){ return !i ? "" : (IC[i] || (/^</.test(i) ? i : '<img src="img/ic2/' + esc(i) + '.webp" alt="">')); };
  var K = {
    ic: IC, esc: esc,
    /* K.btn("Jugar", { v: "oro", ancho: true, ic: "sigue", attrs: { "data-x": 1 } }) — el texto ya va escapado o es HTML propio */
    btn: function(html, o){ o = o || {}; var t = o.href ? "a" : "button"; return "<" + t + (t === "button" ? ' type="' + (o.tipo || "button") + '"' : ' href="' + esc(o.href) + '"') + ' class="' + clases("pz-btn", o) + '"' + atr(o.attrs) + (o.dis ? " disabled" : "") + ">" + ico(o.ic) + (html == null ? "" : html) + (o.icFin ? ico(o.icFin) : "") + "</" + t + ">"; },
    ibtn: function(icono, etiqueta, o){ o = o || {}; return '<button type="button" class="' + clases("pz-ibtn", o) + '" aria-label="' + esc(etiqueta) + '"' + atr(o.attrs) + (o.dis ? " disabled" : "") + ">" + ico(icono) + "</button>"; },
    opt: function(html, o){ o = o || {}; return '<button type="button" class="' + clases("pz-opt", o) + '"' + (o.el != null ? ' aria-pressed="' + !!o.el + '"' : "") + atr(o.attrs) + (o.dis ? " disabled" : "") + ">" + (o.n != null ? '<span class="pz-opt__n">' + esc(o.n) + "</span>" : "") + html + "</button>"; },
    /* K.seg([["a","Dictados"],["b","Acentos"]], "a", { attr: "data-tab", label: "Ejercicio" }) */
    seg: function(ops, activa, o){ o = o || {}; var a = o.attr || "data-v"; return '<div class="' + clases("pz-seg", o) + '" role="group"' + (o.label ? ' aria-label="' + esc(o.label) + '"' : "") + ">" + ops.map(function(x){ return '<button type="button" ' + a + '="' + esc(x[0]) + '" aria-pressed="' + (String(x[0]) === String(activa)) + '">' + x[1] + "</button>"; }).join("") + "</div>"; },
    card: function(html, o){ o = o || {}; var t = o.tag || (o.toca ? "button" : "div"); return "<" + t + (t === "button" ? ' type="button"' : "") + ' class="' + clases("pz-card", o, o.toca ? "pz-card--toca" : "") + '"' + atr(o.attrs) + ">" + html + "</" + t + ">"; },
    fila: function(d, o){ o = o || {}; var t = o.tag || (o.attrs ? "button" : "div"); return "<" + t + (t === "button" ? ' type="button"' : "") + ' class="' + clases("pz-fila", o) + '"' + atr(o.attrs) + ">" + (d.ic ? '<span class="pz-fila__ic">' + ico(d.ic) + "</span>" : "") + '<span class="pz-fila__tx"><b>' + d.t + "</b>" + (d.s ? "<small>" + d.s + "</small>" : "") + "</span>" + (d.fin ? '<span class="pz-fila__fin">' + d.fin + "</span>" : "") + "</" + t + ">"; },
    pill: function(html, o){ o = o || {}; return '<span class="' + clases("pz-pill", o) + '"' + atr(o.attrs) + ">" + ico(o.ic) + html + "</span>"; },
    barra: function(pct, o){ o = o || {}; var p = Math.max(0, Math.min(100, Math.round(+pct || 0))); return '<span class="' + clases("pz-barra", o) + '" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"' + (o.label ? ' aria-label="' + esc(o.label) + '"' : "") + '><i style="width:' + p + '%"></i></span>'; },
    sw: function(on, etiqueta, o){ o = o || {}; return '<button type="button" class="' + clases("pz-sw", o) + '" role="switch" aria-checked="' + !!on + '" aria-label="' + esc(etiqueta) + '"' + atr(o.attrs) + "></button>"; },
    cab: function(titulo, o){ o = o || {}; return '<div class="' + clases("pz-cab", o) + '">' + (o.atras === false ? "" : K.ibtn("atras", o.etiqueta || "Volver", { attrs: o.attrs })) + '<b class="pz-cab__t">' + titulo + "</b>" + (o.fin || "") + "</div>"; },
    sec: function(titulo, o){ o = o || {}; return '<div class="' + clases("pz-sec", o) + '"><h2>' + titulo + "</h2>" + (o.fin || "") + "</div>"; },
    vacio: function(d, o){ o = o || {}; return '<div class="' + clases("pz-vacio", o) + '">' + (d.img ? '<img src="' + esc(d.img) + '" alt="" loading="lazy" decoding="async">' : "") + (d.t ? "<b>" + d.t + "</b>" : "") + (d.s ? "<p>" + d.s + "</p>" : "") + (d.accion || "") + "</div>"; },
    aviso: function(html, o){ o = o || {}; return '<div class="' + clases("pz-aviso", o) + '" role="status">' + html + "</div>"; }
  };

  /* ====================================================================== catálogo */
  K.catalogoHTML = function(){
    var H2 = function(t, s){ return '<div class="pz-sec" style="margin:28px 0 12px"><h2>' + t + "</h2>" + (s ? "<small>" + s + "</small>" : "") + "</div>"; };
    var fila = function(x){ return '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">' + x + "</div>"; };
    return '<section class="pz-cat" style="display:grid;gap:4px;max-width:760px;margin:0 auto">' +
      '<div class="pz-sec"><h2 style="font-size:1.7rem">Piezas de PLEX PLAY</h2><small>una definición de cada una</small></div>' +
      H2("Botón de acción", "pz-btn") + fila(K.btn("Continuar") + K.btn("Jugar ahora", { v: "oro" }) + K.btn("Cancelar", { v: "liso" }) + K.btn("Borrar", { v: "rojo" }) + K.btn("¡Listo!", { v: "verde" }) + K.btn("Retar", { v: "rosa" }) + K.btn("Ver todo", { v: "texto" })) +
      '<div style="height:10px"></div>' + fila(K.btn("Pequeño", { sm: 1 }) + K.btn("Pequeño liso", { sm: 1, v: "liso" }) + K.btn("Con icono", { ic: "sigue", v: "liso" }) + K.btn("No disponible", { dis: 1 })) +
      '<div style="height:10px"></div>' + K.btn("A todo el ancho", { ancho: 1 }) +
      '<div class="pz-card pz-card--marca" style="margin-top:12px;display:flex;gap:12px;align-items:center;flex-wrap:wrap"><b style="flex:1">Sobre un fondo de color</b>' + K.btn("Acción", { v: "sobre", sm: 1 }) + K.ibtn("cerrar", "Cerrar", { v: "sobre" }) + "</div>" +
      H2("Botón de icono", "pz-ibtn") + fila(K.ibtn("atras", "Volver") + K.ibtn("cerrar", "Cerrar") + K.ibtn("oir", "Escuchar", { v: "azul" }) + K.ibtn("atras", "Volver", { v: "plano" }) + K.ibtn("oir", "Escuchar", { sm: 1 }) + K.ibtn("oir", "Escuchar", { lg: 1, v: "azul" })) +
      H2("Opción seleccionable", "pz-opt") + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px">' + K.opt("Sin elegir", { n: 1, el: false }) + K.opt("Elegida", { n: 2, el: true }) + K.opt("Correcta", { n: 3, cls: "ok" }) + K.opt("Incorrecta", { n: 4, cls: "ko" }) + K.opt("Apagada", { n: 5, cls: "dim" }) + "</div>" +
      '<div style="height:10px"></div>' + fila(K.opt("je", { v: "ficha", el: false }) + K.opt("suis", { v: "ficha", el: true }) + K.opt("étudiant", { v: "ficha", cls: "ok" }) + K.opt("à", { v: "ficha", cls: "ko" })) +
      H2("Selector segmentado", "pz-seg") + K.seg([["a", "Dictados"], ["b", "Acentos y signos"]], "a") + '<div style="height:10px"></div>' + K.seg([["1", "Lettre à la mairie"], ["2", "Conclusion d’exposé"], ["3", "Paragraphe argumentatif"], ["4", "Résumé"], ["5", "Synthèse"]], "2") +
      H2("Tarjeta", "pz-card") + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px">' + K.card("<b>Tarjeta</b><br>Contenido") + K.card("<b>Plana</b><br>Sin relieve", { v: "plana" }) + K.card("<b>Se toca</b><br>Ficha de juego", { toca: 1 }) + K.card("<b>Elegida</b><br>Artículo", { toca: 1, attrs: { "aria-pressed": "true" } }) + K.card("<b>Azul</b>", { v: "azul" }) + K.card("<b>Rosa</b>", { v: "rosa" }) + K.card("<b>Oro</b>", { v: "oro" }) + K.card("<b>Verde</b>", { v: "verde" }) + K.card("<b>Marca</b>", { v: "marca" }) + K.card("<b>Vidrio</b>", { v: "vidrio" }) + "</div>" +
      H2("Fila de lista", "pz-fila · pz-lista") + '<div class="pz-lista">' + K.fila({ ic: "libro", t: "Dictados", s: "Escucha y escribe", fin: "3/8" }, { attrs: {} }) + K.fila({ ic: "microfono", t: "Expresión oral", s: "Habla y recibe una nota" }, { attrs: {} }) + K.fila({ t: "Sin icono", fin: K.sw(true, "Sonido") }) + "</div>" +
      H2("Pastilla", "pz-pill") + fila(K.pill("Nivel 30") + K.pill("En línea", { v: "azul" }) + K.pill("+25 XP", { v: "oro" }) + K.pill("Hecho", { v: "verde" }) + K.pill("Pendiente", { v: "rojo" }) + K.pill("Nuevo", { v: "rosa" }) + K.pill("A1", { sm: 1, v: "azul" })) +
      H2("Barra de progreso", "pz-barra") + '<div style="display:grid;gap:10px">' + K.barra(64) + K.barra(30, { v: "oro" }) + K.barra(88, { v: "verde" }) + K.barra(45, { v: "rosa fina" }) + "</div>" +
      H2("Campo e interruptor", "pz-campo · pz-sw") + '<div style="display:grid;gap:10px"><input class="pz-campo" placeholder="Escribe en francés…"><div style="display:flex;gap:16px;align-items:center">' + K.sw(false, "Apagado") + K.sw(true, "Encendido") + "</div></div>" +
      H2("Cabeceras", "pz-cab · pz-sec") + K.cab("Título de la pantalla") + '<div style="height:8px"></div>' + K.sec("Título de sección", { fin: K.btn("Ver todo", { v: "texto" }) }) +
      H2("Aviso y estado vacío", "pz-aviso · pz-vacio") + '<div style="display:grid;gap:10px">' + K.aviso("Seguimos buscando por ti.") + K.aviso("Guardado.", { v: "ok" }) + K.aviso("Te quedan 2 intentos.", { v: "alerta" }) + K.aviso("No pudimos conectar.", { v: "error" }) + "</div>" +
      K.card(K.vacio({ img: "img/mz3/duda.webp", t: "Todavía no hay nada", s: "Cuando practiques, tus resultados aparecen aquí.", accion: K.btn("Empezar", { v: "oro" }) }), { v: "plana", cls: "pz-cat-vacio" }) +
      "</section>";
  };
  K.catalogo = function(){
    try { if (typeof GV !== "undefined") { GV.piezas = function(){ return '<section class="gview">' + K.catalogoHTML() + "</section>"; }; go("piezas"); return true; } } catch (e) {}
    return false;
  };
  window.PLX_KIT = K;
  try { if (/[?&]piezas=1\b/.test(location.search)) addEventListener("load", function(){ setTimeout(K.catalogo, 1200); }); } catch (e) {}
})();
