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
     pz-opt     opción seleccionable   --ficha --juego --color · estados: aria-pressed/checked/selected o .sel/.on, .ok, .ko, .dim, .pair
     pz-seg     selector segmentado    (sus hijos directos <button> son las opciones)
     pz-card    tarjeta                --vidrio --plana --azul --rosa --oro --verde --marca --blanca --sobre --grad · --toca --compacta --ficha --sinpad
     pz-fila    fila de lista          (hijos: __ic --oro --rosa --verde, __tx, __fin --accion) · contenedor pz-lista · elegida: aria-checked/pressed
     pz-pill    pastilla               --azul --oro --sol --verde --rojo --rosa --sobre · --sm --cab
     pz-chip    chip de filtro         (se elige: aria-pressed/checked/selected o .sel/.on) · contenedor pz-chips
     pz-barra   barra de progreso      --oro --verde --rosa · --fina (hijo: <i style="width:…%">)
     pz-campo   campo de texto
     pz-sw      interruptor            (aria-checked)
     pz-cab     cabecera de pantalla   (Volver + título) · pz-sec título de sección con acción
     pz-vacio   estado vacío           (imagen, título, texto, acción)
     pz-aviso   aviso en línea         --ok --alerta --error
     pz-portada     cabecera de una herramienta (con pz-card): rótulo, título, texto entero e imagen
     pz-card--grad  tarjeta de color con su degradado (--pz-grad, --pz-grad-r)
     pz-destacada   tarjeta destacada oscura (hijos __k __t __d)
     pz-burbuja     burbuja de chat        --ella --yo --oro --blanca --entrada (.ok .casi .mal)
     pz-teclado     teclado de la pantalla (filas pz-teclado__f, teclas pz-tecla --ac --accion --esp --listo · .on .act .fija)
     pz-hud         marcador de la partida (pz-vidas, pz-hud__t, pz-hud__p) · pz-ibtn--cuadro
     pz-velo · pz-hoja  lo que tapa la partida y su tarjeta  --mal --escapa --ok --juego (hijos __k __bar)
     pz-dato        cifra con rótulo       --sobre
     pz-zona        la parte de una tarjeta que se toca (sin cara propia)
     pz-nodo        nodo del recorrido     --cofre · .hec .sig .pend
     pz-estrellas · pz-tinte  estrellas ganadas/por ganar · texto con el color de su ficha legible en los dos temas
     pz-carril      fila que corre de lado sin barra · pz-sinbarra para una caja alta que se desplaza
     pz-insignia    contador de no leídos sobre un botón (4.48: la campana de avisos; vacío = solo el punto)
     pz-fila--nueva fila de lista sin leer (fondo azul suave y punto); el punto es pz-fila__punto
     pz-vs          sello «VS» del duelo, con golpe al aparecer (--grande en la presentación del 1V1)

   Un elemento migrado conserva su clase vieja solo como gancho para el código y las pruebas; su aspecto es el de la
   pieza. Toda plantilla nace ya con su pieza (4.44): el registro ADOPTA del final está vacío y no vigila nada.
   Catálogo en vivo: PLX_KIT.catalogo() (o abrir la app con ?piezas=1). */
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
    "button.pz-pill{cursor:pointer;-webkit-tap-highlight-color:transparent}",
    ".pz-btn[hidden],.pz-ibtn[hidden],.pz-opt[hidden],.pz-card[hidden],.pz-fila[hidden],.pz-pill[hidden],.pz-chip[hidden]{display:none}",
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
    /* el micrófono de los ejercicios de voz: grande y del color de su actividad (--pz-mic) */
    ".pz-ibtn--mic{width:76px;height:76px;min-width:76px;min-height:76px;background-color:var(--pz-mic,#FB7185);color:#0B2D74;box-shadow:0 5px 0 rgba(6,8,16,.35),0 14px 24px -12px rgba(0,0,0,.6)}",
    ".pz-ibtn--mic > svg,.pz-ibtn--mic > img{width:32px;height:32px}",
    ".pz-ibtn--mic:active{box-shadow:0 1px 0 rgba(6,8,16,.35)}",
    ".pz-ibtn--sm{width:36px;height:36px;min-width:36px;min-height:36px}.pz-ibtn--sm > svg,.pz-ibtn--sm > img{width:18px;height:18px}",
    ".pz-ibtn--lg{width:56px;height:56px;min-width:56px;min-height:56px}.pz-ibtn--lg > svg,.pz-ibtn--lg > img{width:26px;height:26px}");

  /* ---------- opción seleccionable ---------- */
  /* Estados (los que ya emite el código de la app):
       elegida   aria-pressed | aria-checked | aria-selected = true, o la clase .sel / .on
       correcta  .ok / .good        incorrecta  .ko / .bad        apagada  .dim
       pareja    .pair con data-par="1…6" (unir palabras): las dos mitades comparten color y número
     Una regla de «elegida» que olvide alguno de estos fue el fallo de la 4.26 (dos veces): por eso viven aquí juntos. */
  var EL = function(pre, suf){ return ["[aria-pressed=true]", "[aria-checked=true]", "[aria-selected=true]", ".sel", ".on"].map(function(x){ return pre + x + (suf || ""); }).join(","); };
  w(".pz-opt{display:flex;align-items:center;gap:var(--s-3);position:relative}");
  f(".pz-opt{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;min-height:56px;padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve);font:600 var(--t-md)/1.3 var(--f-tx);text-align:left;text-transform:none;letter-spacing:0;opacity:1;transition:transform .1s,box-shadow .12s,background-color .12s}",
    ".pz-opt:not(:disabled):active{transform:translateY(3px);box-shadow:inset 0 0 0 2px var(--p-linea)}",
    EL(".pz-opt") + "{background-color:var(--p-azul-p);color:var(--p-tinta);box-shadow:inset 0 0 0 3px var(--p-azul),0 4px 0 var(--p-azul);transform:translateY(-2px)}",
    /* pareja hecha: ni azul (es «elegida») ni verde ni rojo (son la corrección) */
    ".pz-opt[data-par]{--par:#D6409F}.pz-opt[data-par='2']{--par:#D99A00}.pz-opt[data-par='3']{--par:#8B6CFF}.pz-opt[data-par='4']{--par:#0E9E8E}.pz-opt[data-par='5']{--par:#F0763A}.pz-opt[data-par='6']{--par:#2BA3D9}",
    ".pz-opt.pair[data-par]{background-color:color-mix(in srgb,var(--par) 16%,var(--p-sup));box-shadow:inset 0 0 0 2px var(--par),0 4px 0 var(--par)}",
    EL(".pz-opt.pair[data-par]") + "{background-color:var(--p-azul-p);box-shadow:inset 0 0 0 3px var(--p-azul),0 4px 0 var(--p-azul)}",
    ".pz-opt.ok,.pz-opt.good,.pz-opt.bien,.pz-opt.pair.ok,.pz-opt.pair.good{background-color:var(--p-verde-p);color:var(--p-verde-tx);box-shadow:inset 0 0 0 2px var(--p-verde),0 4px 0 var(--p-verde);transform:none}",
    ".pz-opt.ko,.pz-opt.bad,.pz-opt.mal,.pz-opt.pair.ko,.pz-opt.pair.bad{background-color:var(--p-rojo-p);color:var(--p-rojo-tx);box-shadow:inset 0 0 0 2px var(--p-rojo),0 4px 0 var(--p-rojo);transform:none}",
    ".pz-opt.dim,.pz-opt.usada{opacity:.55}",
    /* en la partida (fondo oscuro): cara blanca con tinta noche; la correcta en verde macizo y la descartada tachada */
    ".pz-opt--juego{border-radius:16px;background-color:#fff;color:#0B2D74;box-shadow:0 4px 0 #93C5FD,0 12px 20px -12px rgba(0,0,0,.5);font-weight:700;text-align:center;justify-content:center}",
    ".pz-opt--juego:not(:disabled):active{box-shadow:0 1px 0 #93C5FD}",
    ".pz-opt--juego.ok,.pz-opt--juego.bien,.pz-opt--juego.good{background-color:#16A34A;color:#fff;box-shadow:0 4px 0 #0E6B30}",
    /* de color (las respuestas del PLEX Quiz): cada una con su color --pz-c, su relieve --pz-c-r y su tinta --pz-c-tx;
       la elegida y la correcta llevan anillo blanco; la incorrecta y las demás se apagan */
    ".pz-opt--color{border-radius:18px;background-color:var(--pz-c,var(--p-azul-btn));color:var(--pz-c-tx,#fff);box-shadow:0 6px 0 var(--pz-c-r,var(--p-azul-r));font:800 var(--t-lg)/1.25 var(--f-tit);text-align:left}",
    ".pz-opt--color:not(:disabled):active{transform:translateY(4px);box-shadow:0 2px 0 var(--pz-c-r,var(--p-azul-r))}",
    ".pz-opt--color.elegida,.pz-opt--color.bien{background-color:var(--pz-c,var(--p-azul-btn));color:var(--pz-c-tx,#fff);text-decoration:none;box-shadow:0 6px 0 rgba(0,0,0,.35),0 0 0 4px #fff}",
    ".pz-opt--color.bien{transform:scale(1.02)}",
    ".pz-opt--color.mal,.pz-opt--color.atenuada{background-color:var(--pz-c,var(--p-azul-btn));color:var(--pz-c-tx,#fff);text-decoration:none;box-shadow:0 6px 0 var(--pz-c-r,var(--p-azul-r));filter:grayscale(.75) brightness(.72);opacity:.75}",
    ".pz-opt--juego.ko,.pz-opt--juego.mal,.pz-opt--juego.bad{background-color:#3B1D2A;color:#FF9AA2;box-shadow:inset 0 0 0 2px #E5484D;text-decoration:line-through;cursor:default}",
    ".pz-opt:disabled{cursor:default}",
    ".pz-opt--ficha{min-height:44px;padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);font-weight:700}",
    /* número o letra de la opción (el núcleo lo llama .n) */
    ".pz-opt__n,.pz-opt > .n{flex:none;min-width:26px;height:26px;padding:0 6px;box-sizing:border-box;display:grid;place-items:center;border:0;border-radius:var(--r-pill);background-color:var(--p-sup-3);color:var(--p-apagado);font:800 .78rem/1 var(--f-tit)}",
    EL(".pz-opt", " .pz-opt__n") + "," + EL(".pz-opt", " > .n") + "{background-color:var(--p-azul-btn);color:#fff}",
    ".pz-opt.pair[data-par] > .n,.pz-opt.pair[data-par] .pz-opt__n{background-color:var(--par);color:#fff}",
    ".pz-opt.ok .pz-opt__n,.pz-opt.bien > .n,.pz-opt.ok > .n,.pz-opt.good > .n{background-color:var(--p-verde-btn);color:#fff}.pz-opt.ko .pz-opt__n,.pz-opt.ko > .n,.pz-opt.bad > .n{background-color:var(--p-rojo-btn);color:#fff}");

  /* ---------- selector segmentado ---------- */
  /* los hijos directos <button> de pz-seg son sus opciones (no hace falta ponerles clase) */
  w(".pz-seg{display:flex;flex-wrap:wrap;gap:var(--s-1)}", ".pz-seg > button{display:flex;align-items:center;justify-content:center;gap:6px;flex:1 1 auto}");
  f(".pz-seg{box-sizing:border-box;padding:var(--s-1);border:0;border-radius:var(--r-md);background-color:var(--p-sup-3);background-image:none;box-shadow:none}",
    ".pz-seg > button{-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;min-width:max-content;min-height:44px;padding:0 var(--s-3);border-radius:var(--r-sm);background-color:transparent;background-image:none;box-shadow:none;color:var(--p-tinta-2);font:600 var(--t-sm)/1.1 var(--f-tx);text-align:center;text-transform:none;letter-spacing:0;white-space:nowrap;transition:background-color .15s,color .15s}",
    ".pz-seg > button[aria-pressed=true],.pz-seg > button[aria-selected=true],.pz-seg > button[aria-checked=true],.pz-seg > button.sel,.pz-seg > button.on,.pz-seg > button.active{background-color:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}");

  /* ---------- tarjeta ---------- */
  w(".pz-card{display:block}");
  /* el relleno es de la pieza (era lo que más variaba de una tarjeta a otra): --compacta y --sinpad para los casos justos */
  f(".pz-card:not(.pz-card--grad){padding:var(--s-4) var(--s-5)}",
    ".pz-card{box-sizing:border-box;border:0;border-radius:var(--r-lg);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);-webkit-backdrop-filter:none;backdrop-filter:none}",
    ".pz-card--plana{box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".pz-card--compacta{padding:var(--s-3) var(--s-4)}.pz-card--sinpad{padding:0;overflow:hidden}",
    /* ficha de colección (artículo de tienda): poco relleno, la muestra llega casi al borde */
    ".pz-card--ficha{padding:var(--s-1) var(--s-1) var(--s-3)}",
    ".pz-card--vidrio{background-color:transparent;background-image:var(--p-vidrio);box-shadow:inset 0 0 0 1px var(--p-vidrio-linea),inset 0 1px 0 var(--p-vidrio-borde),var(--p-vidrio-sombra);-webkit-backdrop-filter:blur(22px) saturate(1.5);backdrop-filter:blur(22px) saturate(1.5)}",
    ".pz-card--azul{background-color:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-azul) 30%,transparent)}",
    ".pz-card--rosa{background-color:var(--p-lila-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-rosa) 30%,transparent)}",
    ".pz-card--oro{background-color:var(--p-oro-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-oro) 40%,transparent)}",
    ".pz-card--verde{background-color:var(--p-verde-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-verde) 30%,transparent)}",
    /* blanca siempre, con tinta oscura, sobre un fondo de color (el mundo morado del PLEX Quiz); --pz-fondo la tiñe */
    ".pz-card--blanca{background-color:var(--pz-fondo,#fff);color:#1F2430;box-shadow:0 5px 0 rgba(0,0,0,.28)}",
    ".pz-card--blanca b,.pz-card--blanca i{color:#1F2430}.pz-card--blanca small{color:#3C4560}",
    /* sobre el fondo oscuro de la partida (pregunta, avisos y paneles de los juegos) */
    ".pz-card--sobre{background-color:rgba(29,35,53,.86);color:#F5F6FA;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.12),0 4px 0 rgba(6,8,16,.5)}",
    ".pz-card--sobre.ok{box-shadow:inset 0 0 0 2px #6BE58E,0 4px 0 rgba(6,8,16,.5)}.pz-card--sobre.casi{box-shadow:inset 0 0 0 2px #FFD200,0 4px 0 rgba(6,8,16,.5)}.pz-card--sobre.mal{box-shadow:inset 0 0 0 2px #FF8A8F,0 4px 0 rgba(6,8,16,.5)}.pz-card--sobre.aviso{box-shadow:inset 0 0 0 1.5px #93C5FD,0 4px 0 rgba(6,8,16,.5)}",
    ".pz-card--marca{background-color:var(--p-azul-btn);background-image:linear-gradient(115deg,var(--p-azul-btn) 0%,color-mix(in srgb,var(--p-azul-btn) 84%,#fff) 100%);color:#fff;box-shadow:0 4px 0 var(--p-azul-r)}",
    /* una tarjeta que se toca (ficha de juego, artículo de tienda, curso) */
    ".pz-card--toca{-webkit-appearance:none;appearance:none;cursor:pointer;text-align:left;font:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:transform .1s,box-shadow .1s}",
    ".pz-card--toca:active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "@media (hover:hover){.pz-card--toca:hover{transform:translateY(-2px)}.pz-card--toca:active{transform:translateY(3px)}}",
    ".pz-card--toca[aria-pressed=true],.pz-card--toca[aria-selected=true],.pz-card--toca.sel,.pz-card--toca.on{box-shadow:inset 0 0 0 3px var(--p-azul),0 3px 0 var(--p-azul)}");

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
  f(".pz-pill{box-sizing:border-box;border:0;min-height:32px;padding:var(--pz-pad,0 var(--s-3));border-radius:var(--r-pill);background-color:var(--p-sup-2);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:700 var(--t-sm)/1 var(--f-tx);letter-spacing:0;text-transform:none;white-space:nowrap}",
    ".pz-pill > svg,.pz-pill > img{flex:none;width:18px;height:18px}",
    ".pz-pill--azul{background-color:var(--p-azul-p);color:var(--p-azul-tx);box-shadow:none}",
    ".pz-pill--oro{background-color:var(--p-oro-p);color:var(--p-oro-tx);box-shadow:none}",
    ".pz-pill--verde{background-color:var(--p-verde-p);color:var(--p-verde-tx);box-shadow:none}",
    ".pz-pill--rojo{background-color:var(--p-rojo-p);color:var(--p-rojo-tx);box-shadow:none}",
    ".pz-pill--rosa{background-color:var(--p-lila-p);color:var(--p-lila-tx);box-shadow:none}",
    ".pz-pill--sm{min-height:24px;padding:var(--pz-pad,0 var(--s-2));font-size:var(--t-xs)}",
    /* sobre una tarjeta de color (las partes del diagnóstico en su portada) */
    ".pz-pill--sobre{background-color:rgba(11,31,92,.42);color:#fff;box-shadow:none}",
    /* oro macizo: lo que avisa (cuándo termina la liga) */
    ".pz-pill--sol{background-color:var(--p-oro);color:var(--p-sobre-oro);box-shadow:none}",
    /* los contadores de la cabecera (racha, XP, monedas, nivel): la pastilla en alto de 36 */
    ".pz-pill--cab{flex:none;height:36px;min-height:36px;padding:var(--pz-pad,0 8px);gap:4px;font-size:.84rem;cursor:default}",
    "button.pz-pill--cab{cursor:pointer}",
    ".pz-pill--cab > svg,.pz-pill--cab > img{width:17px;height:17px}");

  /* ---------- chip de filtro ---------- */
  /* Para filtrar o elegir curso/nivel en una fila de chips (Lecturas, Vocabulario, Arcade). El elegido va en azul macizo,
     igual que el resto de lo «elegido» de la app. */
  w(".pz-chips{display:flex;flex-wrap:wrap;gap:var(--s-2)}", ".pz-chip{display:inline-flex;align-items:center;justify-content:center;gap:6px}");
  f(".pz-chip{-webkit-appearance:none;appearance:none;box-sizing:border-box;flex:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;min-height:40px;padding:0 var(--s-4);border-radius:var(--r-pill);background-color:var(--p-sup-2);background-image:none;color:var(--p-tinta-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:700 var(--t-sm)/1 var(--f-tx);letter-spacing:0;text-transform:none;white-space:nowrap;text-decoration:none;transition:background-color .15s,color .15s}",
    "@media (hover:hover){.pz-chip:not(:disabled):hover{color:var(--p-tinta)}}",
    EL(".pz-chip") + ",.pz-chip.active{background-color:var(--p-azul-btn);color:#fff;box-shadow:0 2px 0 var(--p-azul-r)}",
    ".pz-chip:focus-visible{" + FOCO + "}",
    ".pz-chip:disabled{cursor:default;opacity:.5}");

  /* ---------- barra de progreso ---------- */
  w(".pz-barra{display:block}");
  f(".pz-barra{box-sizing:border-box;height:10px;padding:0;border:0;border-radius:var(--r-pill);background-color:var(--p-pista);background-image:none;box-shadow:none;overflow:hidden}",
    ".pz-barra > i{display:block;height:100%;min-width:0;border-radius:var(--r-pill);background-color:var(--p-azul);background-image:none;transition:width .4s ease}",
    ".pz-barra--oro > i{background-color:var(--p-oro)}.pz-barra--verde > i{background-color:var(--p-verde)}.pz-barra--rosa > i{background-color:var(--p-rosa)}",
    ".pz-barra--fina{height:6px}",
    /* sobre el fondo oscuro de la partida: pista clara, fina, y el avance en degradado de marca (lo mueve scaleX) */
    ".pz-barra--sobre{height:5px;background-color:rgba(255,255,255,.14)}",
    ".pz-barra--sobre > i{background-image:linear-gradient(90deg,#2F6BFF,#FF6B8B);transform-origin:left}",
    /* el reloj de cada reto en los juegos: verde que se acaba y rojo al final (.poco en la barra) */
    ".pz-barra--reloj{height:6px;background-color:rgba(147,197,253,.18)}",
    ".pz-barra--reloj > i{background-color:#6BE58E;background-image:none;transform-origin:left;transition:none}",
    ".pz-barra--reloj.poco > i{background-color:#FF8A8F}");

  /* ---------- campo ---------- */
  f(".pz-campo{-webkit-appearance:none;appearance:none;box-sizing:border-box;width:100%;min-height:48px;padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:500 var(--t-md)/1.4 var(--f-tx);outline:0}",
    ".pz-campo::placeholder{color:var(--p-apagado);opacity:1}",
    ".pz-campo:focus{box-shadow:inset 0 0 0 2.5px var(--p-azul)}",
    ".pz-campo.ko{box-shadow:inset 0 0 0 2.5px var(--p-rojo)}.pz-campo.ok{box-shadow:inset 0 0 0 2.5px var(--p-verde)}",
    "textarea.pz-campo{min-height:120px;resize:vertical}",
    ".pz-campo--blanca{background-color:#F1F4FA;color:#1F2430;box-shadow:inset 0 0 0 1.5px #D8DEEC}");

  /* ---------- interruptor ---------- */
  f(".pz-sw{-webkit-appearance:none;appearance:none;box-sizing:border-box;flex:none;position:relative;width:54px;height:32px;min-height:32px;padding:0;border:0;border-radius:var(--r-pill);cursor:pointer;background-color:var(--p-sup-3);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea);color:transparent;font-size:0;transition:background-color .15s}",
    ".pz-sw::after{content:'';position:absolute;left:4px;top:4px;width:24px;height:24px;border-radius:50%;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,.25);transition:transform .15s}",
    ".pz-sw > *{display:none}",
    ".pz-sw[aria-checked=true],.pz-sw[aria-pressed=true],.pz-sw.sel{background-color:var(--p-verde-btn);box-shadow:none}",
    ".pz-sw[aria-checked=true]::after,.pz-sw[aria-pressed=true]::after,.pz-sw.sel::after{transform:translateX(22px)}",
    /* la fila entera es el interruptor (role=switch): el pz-sw de dentro solo lo muestra */
    "[aria-checked=true] > .pz-sw{background-color:var(--p-verde-btn);box-shadow:none}[aria-checked=true] > .pz-sw::after{transform:translateX(22px)}");

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
    "@media (prefers-reduced-motion:reduce){.pz-btn,.pz-ibtn,.pz-opt,.pz-chip,.pz-card--toca,.pz-barra > i,.pz-sw,.pz-sw::after{transition:none}}");

  /* ---------- portada de una herramienta ---------- */
  /* La cabecera de Lecturas, Expresión oral, Simulacros, Sonidos, Vocabulario y Conversa: una pz-card con rótulo (en el
     color de la herramienta, --hc-tx), título, una línea de apoyo entera (sin «…») y su imagen o su cifra a la derecha. */
  w(".pz-portada{display:flex;align-items:center;gap:var(--s-4)}", ".pz-portada > div:not([class]){flex:1;min-width:0;display:grid;gap:var(--s-1)}", ".pz-portada > img{flex:none;order:2;width:76px;height:76px;object-fit:contain}");
  f(".pz-portada small{margin:0;font:800 .7rem/1.2 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:var(--hc-tx,var(--p-azul-tx));opacity:1}",
    ".pz-portada h1{margin:0;font:800 var(--t-xl)/1.15 var(--f-tit);letter-spacing:-.01em;color:var(--p-tinta);text-shadow:none}",
    ".pz-portada p{margin:0;max-width:none;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2);opacity:1;display:block;-webkit-line-clamp:unset;overflow:visible;white-space:normal}",
    ".pz-portada > img{border:0;border-radius:0;background:none;box-shadow:none;filter:none}");

  /* ---------- tarjeta con degradado propio ---------- */
  /* Las tarjetas de color (Refuerza tu…, Compite en línea, los duelos, la cabecera del Perfil, la portada de cada juego)
     traen cada una su degradado: la pieza es la misma y el degradado llega por --pz-grad (color de respaldo --pz-grad-c,
     relieve --pz-grad-r, tinta --pz-grad-tx). Su relleno lo pone el sitio, porque cada una deja sitio a su ilustración. */
  f(".pz-card--grad{background-color:var(--pz-grad-c,var(--p-azul-btn));background-image:var(--pz-grad,linear-gradient(135deg,var(--p-azul-btn),color-mix(in srgb,var(--p-azul-btn) 70%,#FF6B8B)));color:var(--pz-grad-tx,#fff);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 4px 0 var(--pz-grad-r,rgba(6,8,16,.35))}");

  /* ---------- tarjeta destacada ---------- */
  /* Una por pantalla como mucho (Conversa con Manzana en Práctica): etiqueta, título, texto, arte y acción. Siempre
     oscura, así que sus textos NO siguen el tema. La rejilla (dónde va cada hijo) la pone quien la usa. */
  w(".pz-destacada{display:grid;position:relative}");
  f(".pz-destacada{box-sizing:border-box;isolation:isolate;overflow:hidden;border:0;padding:20px 18px 18px;border-radius:26px;color:#fff;background-color:#36255C;background-image:var(--pz-grad,radial-gradient(120% 90% at 100% 0%,rgba(255,210,0,.18),transparent 55%),linear-gradient(150deg,#4B2E8F 0%,#36255C 45%,#1E3A8A 100%));box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 22px 40px -24px rgba(54,37,92,.9)}",
    ".pz-destacada__k{display:inline-flex;align-items:center;gap:6px;margin:0;font:700 11.5px/1 var(--f-tit);letter-spacing:.08em;text-transform:uppercase;color:#D2C3F6}",
    ".pz-destacada__k > svg{width:15px;height:15px;color:var(--p-oro)}",
    ".pz-destacada__t{margin:8px 0 6px;font:800 1.5rem/1.1 var(--f-tit);letter-spacing:-.015em;color:#fff}",
    ".pz-destacada__d{margin:0;font:500 .92rem/1.42 var(--f-tx);color:#E6E1F7}",
    ".pz-destacada .pz-pill{background-color:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);color:#E6E1F7;font-weight:500}",
    ".pz-destacada .pz-pill > b{font-weight:800;color:#fff}",
    "@media (min-width:760px){.pz-destacada{padding:26px 26px 24px}.pz-destacada__t{font-size:1.9rem}}");

  /* ---------- burbuja de chat ---------- */
  /* --ella: lo que dice Manzana (superficie, pico abajo a la izquierda) · --yo: lo que escribe el alumno (color de
     Conversa, pico a la derecha) · --oro: el «yo» sobre la tarjeta destacada · --entrada: la burbuja donde se va
     escribiendo con el teclado de la pantalla (estados .ok .casi .mal). */
  w(".pz-burbuja{display:block}");
  f(".pz-burbuja{box-sizing:border-box;margin:0;max-width:86%;padding:10px 14px;border:0;border-radius:18px;background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:500 var(--t-md)/1.45 var(--f-tx);text-align:left;white-space:pre-wrap;word-break:break-word}",
    ".pz-burbuja--ella{border-bottom-left-radius:6px}",
    ".pz-burbuja--yo{background-color:var(--hc,var(--p-rosa-btn));color:#fff;box-shadow:none;border-bottom-right-radius:6px}",
    ".pz-burbuja--oro{background-color:var(--p-oro);color:var(--p-sobre-oro);box-shadow:none;border-bottom-right-radius:6px;font-weight:600}",
    ".pz-burbuja--blanca{background-color:#fff;color:#1B1F2E;box-shadow:none}",
    ".pz-burbuja--entrada{max-width:none;padding:0 12px;border-radius:var(--r-pill);background-color:#fff;color:#0B2D74;box-shadow:0 4px 0 #93C5FD;font:700 20px/1 var(--f-tit);white-space:pre;overflow:hidden}",
    ".pz-burbuja--entrada.ok{box-shadow:0 4px 0 #15803D,0 0 0 3px #6BE58E}",
    ".pz-burbuja--entrada.casi{box-shadow:0 4px 0 #B88A00,0 0 0 3px #FFD200}",
    ".pz-burbuja--entrada.mal{box-shadow:0 4px 0 #B3244E,0 0 0 3px #FF8A8F}");

  /* ---------- teclado de la pantalla ---------- */
  /* Teclado mecánico (Type It y Conversa): carcasa azul de marca, placa hundida y teclas con cara y falda. Cada tipo de
     tecla fija su cara (--c1 → --c2), su falda (--fa) y su tinta (--tx); al hundirse (.on) la falda se achica.
       pz-teclado > pz-teclado__f (fila) > pz-tecla   --ac (acento) --accion (borrar, mayúscula, 123) --listo --esp
       la tecla de acción encendida (.act, mayúscula puesta) toma la cara de --listo; .fija le suma un borde.
     El alto, el ancho máximo y el tamaño de letra son del sitio (cambian con la pantalla): van como valores débiles. */
  w(".pz-teclado{display:flex;flex-direction:column;gap:6px;padding:11px 9px 12px}",
    ".pz-teclado__f{display:flex;justify-content:center;gap:5px}",
    ".pz-tecla{display:inline-flex;align-items:center;justify-content:center;flex:1 1 0;min-width:0;max-width:46px;height:46px;font-size:19px}",
    ".pz-tecla--accion{flex:1.6 1 0;max-width:74px}", ".pz-tecla--esp{flex:4 1 0;max-width:none;font-size:13px}", ".pz-tecla--listo{flex:2.2 1 0;max-width:none;font-size:16px}");
  f(".pz-teclado{position:relative;box-sizing:border-box;border:0;border-radius:20px 20px 16px 16px;background-color:#2152CF;background-image:linear-gradient(180deg,#3366E8 0%,#2152CF 55%,#1A43AE 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),inset 0 -4px 0 rgba(0,0,0,.22),0 14px 28px -10px rgba(0,0,0,.75);-webkit-user-select:none;user-select:none;touch-action:manipulation}",
    ".pz-teclado::before{content:'';position:absolute;inset:6px;border-radius:14px;background:#0A1640;box-shadow:inset 0 3px 8px rgba(0,0,0,.65),inset 0 -1px 0 rgba(255,255,255,.08)}",
    ".pz-teclado__f{position:relative;z-index:1}",
    ".pz-tecla{--c1:#FFFFFF;--c2:#EEF2FA;--fa:#C5CFE6;--tx:#1F2430;-webkit-appearance:none;appearance:none;box-sizing:border-box;padding:0 0 5px;border:0;border-radius:8px;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;background-color:var(--c2);background-image:linear-gradient(180deg,var(--c1) 0%,var(--c2) 100%);color:var(--tx);font-family:var(--f-tit);font-weight:600;line-height:1;letter-spacing:0;text-transform:none;box-shadow:inset 0 -5px 0 var(--fa),inset 0 0 0 1px rgba(10,22,64,.10),0 2px 0 #050C26,0 4px 6px rgba(0,0,0,.4);transition:transform .045s ease-out,box-shadow .045s ease-out,padding .045s ease-out,filter .08s}",
    ".pz-tecla > svg{width:24px;height:24px}",
    ".pz-tecla.on{transform:translateY(3px);padding-bottom:2px;filter:brightness(.97);box-shadow:inset 0 -2px 0 var(--fa),inset 0 0 0 1px rgba(10,22,64,.12),0 0 0 #050C26,0 1px 2px rgba(0,0,0,.45)}",
    ".pz-tecla--ac{--c1:#EEF2FF;--c2:#DCE5FF;--fa:#A8BBEB;--tx:#1B49C8}",
    ".pz-tecla--accion{--c1:#A9CCFF;--c2:#8DB9FB;--fa:#5C8BD8;--tx:#0B2D74;font-weight:800}",
    ".pz-tecla--esp{--tx:#7A87A8;font-weight:700;letter-spacing:.06em}",
    ".pz-tecla--listo,.pz-tecla--accion.act{--c1:#FFE06B;--c2:#FFC83D;--fa:#C99400;--tx:#0B1F5C;font-weight:800}",
    ".pz-tecla--accion.fija{box-shadow:inset 0 -5px 0 var(--fa),inset 0 0 0 2px #0B1F5C,0 2px 0 #050C26,0 4px 6px rgba(0,0,0,.4)}",
    ".pz-tecla:focus-visible{outline:3px solid #FFD200;outline-offset:2px}",
    ".pz-tecla--accion > svg{width:22px;height:22px}",
    /* en el teléfono el teclado va de borde a borde (4.43): sin esquinas abajo y con teclas más juntas */
    "@media (max-width:600px){.pz-teclado{border-radius:18px 18px 0 0;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 -8px 22px -12px rgba(0,0,0,.6)}.pz-teclado::before{inset:3px 2px 0;border-radius:15px 15px 0 0}.pz-tecla{border-radius:7px}}",
    "@media (prefers-reduced-motion:reduce){.pz-tecla{transition:none}}");

  /* ---------- marcador de la partida ---------- */
  /* pz-hud: la barra de arriba de cada juego (pausa, vidas, tiempo y puntos) sobre el fondo oscuro de la partida.
     pz-vidas: los corazones (<i class="on"> = vida que queda) · pz-hud__t: el reloj (.poco cuando queda poco)
     pz-hud__p: los puntos (<b> cifra, <small> rótulo). La rejilla (orden y columnas) es del sitio. */
  f(".pz-hud{box-sizing:border-box;border:0;border-radius:var(--r-lg);background-color:rgba(20,24,38,.6);background-image:none;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#F5F6FA}",
    ".pz-vidas{display:flex;gap:4px}",
    ".pz-vidas > i{display:block;width:20px;height:18px;background-color:#E5484D;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 22'%3E%3Cpath d='M12 21.3 10.5 20C5.1 15.1 1.6 12 1.6 8.1 1.6 4.9 4.1 2.4 7.3 2.4c1.8 0 3.5.8 4.7 2.2 1.2-1.4 2.9-2.2 4.7-2.2 3.2 0 5.7 2.5 5.7 5.7 0 3.9-3.5 7-8.9 11.9z'/%3E%3C/svg%3E\") center/contain no-repeat;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 22'%3E%3Cpath d='M12 21.3 10.5 20C5.1 15.1 1.6 12 1.6 8.1 1.6 4.9 4.1 2.4 7.3 2.4c1.8 0 3.5.8 4.7 2.2 1.2-1.4 2.9-2.2 4.7-2.2 3.2 0 5.7 2.5 5.7 5.7 0 3.9-3.5 7-8.9 11.9z'/%3E%3C/svg%3E\") center/contain no-repeat}",
    ".pz-vidas > i:not(.on){background-color:rgba(255,255,255,.2)}",
    ".pz-hud__t{padding:7px 12px;border-radius:10px;background-color:transparent;color:#fff;font:800 20px/1 var(--f-tit);font-variant-numeric:tabular-nums}",
    ".pz-hud__t.poco b{color:#FFD200}",
    ".pz-hud__p{text-align:right;line-height:1}",
    ".pz-hud__p > b{display:block;font:800 22px/1 var(--f-tit);font-variant-numeric:tabular-nums;color:#FFC83D}",
    ".pz-hud__p > small,.pz-hud__p > span{font:600 10px/1.4 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:rgba(245,246,250,.72)}",
    /* botón de icono cuadrado (la pausa del marcador) */
    ".pz-ibtn--cuadro{border-radius:var(--r-sm)}",
    ".pz-ibtn--sobre > svg[viewBox='0 0 20 20']{fill:currentColor;stroke:none;width:18px;height:18px}");

  /* ---------- velo y hoja ---------- */
  /* pz-velo: lo que tapa la partida (pausa, corrección) dentro de su capa; NO es una ventana emergente de la app.
     pz-hoja: la tarjeta que va encima: --mal (fallo, raya roja), --escapa (se escapó, raya dorada), --ok, y --juego
     (oscura, la pausa). Sus rótulos: pz-hoja__k (CORRECTA, CORTASTE…) y su barra de tiempo pz-hoja__bar. */
  w(".pz-velo{display:grid;place-items:center;padding:16px}", ".pz-hoja{position:relative}");
  f(".pz-velo{box-sizing:border-box;background-color:rgba(6,8,16,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}",
    ".pz-hoja{box-sizing:border-box;width:min(440px,100%);border:0;border-top:6px solid var(--pz-hoja-raya,var(--p-azul));padding:18px 18px 12px;border-radius:20px;background-color:#fff;background-image:none;color:#0B2D74;box-shadow:0 24px 50px -18px rgba(0,0,0,.8);font:500 var(--t-md)/1.4 var(--f-tx);text-align:left}",
    ".pz-hoja--mal{--pz-hoja-raya:#E5484D}.pz-hoja--escapa{--pz-hoja-raya:#FFD200}.pz-hoja--ok{--pz-hoja-raya:#16A34A}",
    ".pz-hoja--juego{width:min(360px,100%);border-top:0;padding:calc(var(--s-7) + 44px) var(--s-5) var(--s-5);border-radius:var(--r-xl);background-color:#1D2335;color:#F5F6FA;box-shadow:inset 0 0 0 1.5px #343D59,0 30px 60px -30px #000;text-align:center}",
    ".pz-hoja--juego > h2{margin:0;font:800 var(--t-2xl)/1.1 var(--f-tit);letter-spacing:0;text-transform:none;color:#fff}",
    ".pz-hoja--juego > p{margin:0 0 var(--s-2);font:500 var(--t-md)/1.4 var(--f-tx);color:#A9B1C7}",
    ".pz-hoja--juego .pz-btn--liso{--pz-cara:transparent;--pz-cara-tx:#D3D8E6;box-shadow:inset 0 0 0 1.5px #343D59}",
    /* maciza: toda del color del resultado (la hoja del PLEX Quiz), tinta blanca */
    ".pz-hoja--maciza{border-top:0;border-radius:24px;background-color:var(--pz-hoja-raya,var(--p-azul-btn));color:#fff;box-shadow:0 -10px 40px rgba(0,0,0,.4)}",
    ".pz-hoja__k{font:700 11px/1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:#4B5E8C}",
    ".pz-hoja__bar{height:4px;border-radius:var(--r-pill);background-color:#E3E8F4;overflow:hidden}",
    ".pz-hoja__bar > i{display:block;height:100%;background-color:#2F6BFF;transform-origin:left}");

  /* ---------- cifra ---------- */
  /* una cifra con su rótulo (resultado de una partida, resumen de una lección): <b>cifra</b><span>rótulo</span> */
  w(".pz-dato{display:grid;gap:2px;align-content:center}");
  f(".pz-dato{box-sizing:border-box;min-width:0;padding:10px 6px;border:0;border-radius:var(--r-md);background-color:var(--p-sup);background-image:none;color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);text-align:center}",
    ".pz-dato > b{font:800 var(--t-md)/1.1 var(--f-tit);color:var(--p-tinta);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".pz-dato > span,.pz-dato > small{font:600 .72rem/1.3 var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:var(--p-apagado)}",
    ".pz-dato--blanca{background-color:#fff;box-shadow:0 4px 0 rgba(0,0,0,.25)}.pz-dato--blanca > b{color:#1F2430}.pz-dato--blanca > span,.pz-dato--blanca > small{color:#5A6480}",
    ".pz-dato--sobre{background-color:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}.pz-dato--sobre > b{color:#fff}.pz-dato--sobre > span,.pz-dato--sobre > small{color:rgba(245,246,250,.72)}");

  /* ---------- zona que se toca ---------- */
  /* La parte de una tarjeta que se toca (el tema de Vocabulario, la cabecera de un ítem): sin cara propia, la de la
     tarjeta que la contiene; solo el cursor, el foco y el hundido. */
  f(".pz-zona{-webkit-appearance:none;appearance:none;box-sizing:border-box;margin:0;border:0;border-radius:inherit;background:none;box-shadow:none;color:inherit;font:inherit;text-align:left;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent}",
    ".pz-zona:focus-visible{" + FOCO + ";outline-offset:-3px}",
    ".pz-zona:active{opacity:.85}");

  /* ---------- nodo del recorrido ---------- */
  /* Cada lección del recorrido de Inicio es un nodo ilustrado (su imagen la pone el recorrido): .hec hecha, .sig la que
     sigue (anillo del color de la unidad, --uc), .pend pendiente (en gris). --cofre es la meta de la unidad. */
  w(".pz-nodo{display:grid;place-items:center;position:relative;width:66px;height:66px}", ".pz-nodo.sig{width:80px;height:80px;margin:12px 0}", ".pz-nodo--cofre{width:72px;height:72px}");
  f(".pz-nodo{-webkit-appearance:none;appearance:none;box-sizing:border-box;padding:0;border:0;border-radius:50%;cursor:pointer;-webkit-tap-highlight-color:transparent;background:none;box-shadow:none;overflow:visible;color:var(--p-apagado);transition:transform .08s}",
    ".pz-nodo > img{display:block;width:100%;height:100%;filter:drop-shadow(0 5px 0 rgba(31,36,48,.2))}",
    ".pz-nodo:active{transform:translateY(4px)}.pz-nodo:active > img{filter:drop-shadow(0 1px 0 rgba(31,36,48,.2))}",
    ".pz-nodo.pend > img{filter:grayscale(1) opacity(.5) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".pz-nodo.sig{box-shadow:0 0 0 6px var(--p-bg),0 0 0 10px color-mix(in srgb,var(--uc,var(--p-azul)) 55%,transparent)}",
    ".pz-nodo--cofre{cursor:default}.pz-nodo--cofre:active{transform:none}",
    ".pz-nodo--cofre > img{filter:grayscale(.9) opacity(.6) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".pz-nodo--cofre.hec > img,[data-est=actual] .pz-nodo--cofre > img{filter:drop-shadow(0 5px 0 rgba(31,36,48,.2))}",
    "[data-est=pend] .pz-nodo--cofre > img{filter:grayscale(1) opacity(.45) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".pz-nodo:focus-visible{" + FOCO + "}");

  /* ---------- estrellas y texto teñido ---------- */
  /* pz-estrellas: «★★<i>★</i>», las ganadas en oro y las que faltan (<i>) en el gris legible del tema.
     pz-tinte: un texto con el color propio de su ficha (--c), mezclado con la tinta del tema para que se lea en los dos. */
  f(".pz-estrellas{color:var(--p-oro);letter-spacing:2px;line-height:1}",
    ".pz-estrellas > i{font-style:normal;color:var(--p-apagado)}",
    ".pz-tinte{color:color-mix(in srgb,var(--c,var(--p-azul)) 66%,var(--p-tinta))}");

  /* ---------- carril ---------- */
  /* Una fila que corre de lado (chips, pestañas, juegos): se desliza con el dedo o la rueda, sin barra visible. La
     página es la que se desplaza; una caja solo lleva barra propia cuando lo justifica (el chat). */
  w(".pz-carril{display:flex;gap:var(--s-2)}");
  f(".pz-carril{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}",
    ".pz-carril::-webkit-scrollbar{display:none;width:0;height:0}",
    ".pz-carril > *{flex:none}",
    /* sin barra en una caja que sí se desplaza a lo alto (el chat) */
    ".pz-sinbarra{scrollbar-width:none;-ms-overflow-style:none}.pz-sinbarra::-webkit-scrollbar{display:none;width:0;height:0}");

  /* ---------- insignia, fila sin leer y sello VS (4.48) ---------- */
  /* La insignia se pega a la esquina de su botón: el botón la contiene (position:relative lo pone el kit en pz-ibtn). */
  f(".pz-ibtn{position:relative}",
    ".pz-insignia{position:absolute;top:-3px;right:-3px;box-sizing:border-box;min-width:19px;height:19px;padding:0 5px;display:grid;place-items:center;border-radius:var(--r-pill);background-color:var(--p-rojo-btn);background-image:none;color:#fff;font:800 11px/1 var(--f-tx);letter-spacing:0;box-shadow:0 0 0 2px var(--p-sup);pointer-events:none;animation:pzLatido 2.4s ease-in-out infinite}",
    ".pz-insignia:empty{min-width:11px;height:11px;padding:0;top:2px;right:2px}",
    ".pz-insignia[hidden]{display:none}",
    "@keyframes pzLatido{0%,86%,100%{transform:scale(1)}92%{transform:scale(1.22)}}",
    ".pz-fila--nueva{background-color:var(--p-azul-p)}",
    ".pz-fila__punto{flex:none;width:10px;height:10px;border-radius:50%;background-color:var(--p-azul-btn)}",
    ".pz-vs{display:inline-grid;place-items:center;box-sizing:border-box;width:52px;height:52px;border-radius:50%;background-color:var(--p-oro);background-image:none;color:var(--p-marino);font:900 1.15rem/1 var(--f-tit);letter-spacing:-.02em;box-shadow:0 0 0 4px var(--p-marino),0 8px 22px -6px rgba(255,200,61,.75);animation:pzVs .55s cubic-bezier(.2,.9,.3,1.4) both}",
    ".pz-vs--grande{width:96px;height:96px;font-size:2.3rem;box-shadow:0 0 0 6px var(--p-marino),0 0 0 10px var(--p-oro),0 0 48px rgba(255,200,61,.65)}",
    "@keyframes pzVs{0%{transform:scale(3) rotate(-18deg);opacity:0}60%{transform:scale(.88) rotate(5deg);opacity:1}100%{transform:scale(1) rotate(-6deg)}}",
    "@media (prefers-reduced-motion:reduce){.pz-insignia,.pz-vs{animation:none}}");

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
    aviso: function(html, o){ o = o || {}; return '<div class="' + clases("pz-aviso", o) + '" role="status">' + html + "</div>"; },
    /* K.insignia(3) → «3»; K.insignia(0) → oculta; K.insignia(true) → solo el punto */
    insignia: function(n){ return '<span class="pz-insignia"' + (!n ? " hidden" : "") + ">" + (n === true ? "" : n > 99 ? "99+" : (n || "")) + "</span>"; },
    vs: function(o){ o = o || {}; return '<span class="' + clases("pz-vs", o) + '" aria-hidden="true">VS</span>'; }
  };

  /* ====================================================================== adopción */
  /* Piezas para lo que no sale de una plantilla con class="…" fija. Cada fila: selector de lo viejo → clases de la
     pieza (→ y, si hace falta, lo que se excluye). Si un elemento ya lleva esa pieza (pz-x o pz-x--algo) no se toca.
     Las antiguas exclusiones (cabecera, tarjetas de color, recorrido, Quiz) tienen hoy su pieza o variante propia:
     pz-pill--cab, pz-card--grad, pz-nodo, pz-card--toca con estado elegido. */
  var ADOPTA = [
    /* 4.44: vacío. Todo lo que repartía (botones de icono, fichas, tarjetas, chips, pelajes, teclas de acentos, «Ver
       todos») nace ya con su pieza en la plantilla, y sin filas no hay observador: nada se recalcula al repintar.
       Si hiciera falta para algo armado por código fuera de una plantilla: [selector viejo, clases de la pieza, excluir]. */
  ];
  var TODO = ADOPTA.map(function(a){ return a[0]; }).join(",") || ":not(*)";
  var tiene = function(e, cls){ var b = cls.split(" ")[0]; for (var i = 0; i < e.classList.length; i++) { var c = e.classList[i]; if (c === b || c.indexOf(b + "--") === 0) return true; } return false; };
  var pon = function(e){
    for (var i = 0; i < ADOPTA.length; i++) if (e.matches(ADOPTA[i][0])) { if (ADOPTA[i][2] && e.matches(ADOPTA[i][2])) return; if (!tiene(e, ADOPTA[i][1])) ADOPTA[i][1].split(" ").forEach(function(c){ e.classList.add(c); }); return; }
  };
  var recorre = function(n){ if (!n || n.nodeType !== 1) return; try { if (n.matches(TODO)) pon(n); var L = n.querySelectorAll(TODO); for (var i = 0; i < L.length; i++) pon(L[i]); } catch (e) {} };
  K.adopta = function(raiz){ recorre(raiz || D.body); };
  K.ADOPTA = ADOPTA;
  var vigila = function(){
    if (!D.body) return;
    recorre(D.body);
    new MutationObserver(function(ms){
      for (var i = 0; i < ms.length; i++) {
        var m = ms[i];
        if (m.type === "attributes") { var t = m.target; if (t.nodeType === 1 && !/(^|\s)pz-/.test(t.className && t.className.baseVal == null ? t.className : "")) { try { if (t.matches(TODO)) pon(t); } catch (e) {} } continue; }
        for (var j = 0; j < m.addedNodes.length; j++) recorre(m.addedNodes[j]);
      }
    }).observe(D.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  };
  /* localStorage plx-adopta=no apaga el registro: así se mide qué falta por llevar a las plantillas */
  var sinAdopta = !ADOPTA.length; try { sinAdopta = sinAdopta || localStorage.getItem("plx-adopta") === "no"; } catch (e) {}
  if (!sinAdopta) { if (D.body) vigila(); else D.addEventListener("DOMContentLoaded", vigila); }

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
