/* PLEX PLAY 4.18.0 — Sistema de interfaz único (rediseño total, solo interfaz)
   Un solo lugar para la paleta, el espaciado, la tipografía y los radios (tokens --p-*, --s-*, --t-*, --r-*), y para
   la piel de toda la app. Va dentro de una capa CSS (@layer p5) con todas las declaraciones en !important: en la
   cascada, lo importante de una capa gana a lo importante sin capa, así que estas reglas mandan sobre los parches
   de plx20, plx43, plx63, plx78, plx85, plx87, plx90, plx94, plx98, plx99 y plx100 sin apilar más especificidad.
   Las familias de variables viejas (--paper, --v4-*, --m-*, --px-*, --pp-*, --gl-*, --cz-*, --ev-*, --tx-*, --ej-*)
   se redefinen aquí a partir de la paleta nueva: ese «puente» es lo que impide que un tema se cuele en el otro.

   Identidad 4.3 (sale del Manzana nuevo): azul de marca #2F6BFF, rosa de sus orejas #FF6B8B como acento, amarillo cálido
   #FFC83D, tinta de sus ojos #1F2430 para el texto y para el modo oscuro (#141826), y fondo claro teñido #EEF1F8.

   Materiales: riel, cabecera, barra inferior y columna derecha en vidrio; el contenido central en pastel con
   tarjetas redondeadas y botones con volumen (borde inferior sólido).
   Escritorio: riel a la izquierda, contenido en el centro y columna derecha fija (desde 1440 px) en todas las vistas.
   Celular: cabecera y barra inferior de vidrio con zona segura, una columna, y las tarjetas de la derecha en el flujo.

   No toca audio, lógica de juegos ni datos. El JS de abajo solo arma la columna derecha, arregla los destinos del
   riel (Práctica, Juegos, Profesores, Misiones) y añade el selector Práctica | Juegos. Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document, H = D.documentElement;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ====================================================================== 1. TOKENS */
  var CLARO = [
    "--p-bg:#EEF1F8", "--p-halo-1:rgba(47,107,255,.10)", "--p-halo-2:rgba(120,160,255,.13)", "--p-halo-3:rgba(255,107,139,.12)",
    "--p-sup:#FFFFFF", "--p-sup-2:#F6F8FC", "--p-sup-3:#E6EAF4", "--p-linea:#D8DEEC", "--p-relieve:#C3CADC", "--p-pista:#DFE4F0",
    "--p-tinta:#1F2430", "--p-tinta-2:#3C4560", "--p-apagado:#5A6480",
    "--p-azul:#2F6BFF", "--p-azul-r:#1A45B8", "--p-azul-tx:#1B49C8", "--p-azul-p:#DDE7FF",
    "--p-oro:#FFC83D", "--p-oro-r:#D99A00", "--p-oro-tx:#6B4E00", "--p-oro-p:#FFF1C7", "--p-oro-ic:#B88200",
    "--p-rojo:#E5484D", "--p-rojo-r:#A82A30", "--p-rojo-tx:#B4232A", "--p-rojo-p:#FFE1E2",
    "--p-verde:#16A34A", "--p-verde-r:#0C6A2E", "--p-verde-tx:#0E6B31", "--p-verde-p:#D8F5E2",
    "--p-lila-p:#FFE3EA", "--p-lila-tx:#B3244E",
    "--p-vidrio:linear-gradient(160deg,rgba(255,255,255,.86),rgba(255,255,255,.62))", "--p-vidrio-borde:rgba(255,255,255,.95)",
    "--p-vidrio-linea:rgba(31,36,48,.09)", "--p-vidrio-sombra:0 22px 50px -28px rgba(31,36,48,.34)", "--p-vidrio-solido:#FAFBFE",
    "--p-sombra:0 14px 30px -22px rgba(31,36,48,.32)", "--p-velo:rgba(31,36,48,.4)", "--p-placa:#F6F8FC"
  ];
  var OSCURO = [
    "--p-bg:#141826", "--p-halo-1:rgba(47,107,255,.16)", "--p-halo-2:rgba(120,160,255,.07)", "--p-halo-3:rgba(255,107,139,.10)",
    "--p-sup:#1D2335", "--p-sup-2:#262D43", "--p-sup-3:#303852", "--p-linea:#343D59", "--p-relieve:#0B0E18", "--p-pista:#323A55",
    "--p-tinta:#F5F6FA", "--p-tinta-2:#D3D8E6", "--p-apagado:#A9B1C7",
    "--p-azul:#4C82FF", "--p-azul-r:#17337F", "--p-azul-tx:#9DB8FF", "--p-azul-p:#232F55",
    "--p-oro:#FFC83D", "--p-oro-r:#B07C00", "--p-oro-tx:#FFD875", "--p-oro-p:#3A3016", "--p-oro-ic:#FFC83D",
    "--p-rojo:#FF6B70", "--p-rojo-r:#8F2228", "--p-rojo-tx:#FFB4B7", "--p-rojo-p:#43182A",
    "--p-verde:#35C97A", "--p-verde-r:#0B5A28", "--p-verde-tx:#8CF0B6", "--p-verde-p:#113C2C",
    "--p-lila-p:#40202E", "--p-lila-tx:#FFA3B7",
    "--p-vidrio:linear-gradient(160deg,rgba(42,49,73,.8),rgba(24,29,46,.74))", "--p-vidrio-borde:rgba(255,255,255,.12)",
    "--p-vidrio-linea:rgba(255,255,255,.08)", "--p-vidrio-sombra:0 26px 60px -26px rgba(0,0,0,.75)", "--p-vidrio-solido:#1A2031",
    "--p-sombra:0 16px 32px -22px rgba(0,0,0,.7)", "--p-velo:rgba(6,8,16,.66)", "--p-placa:#D9DEEA"
  ];
  var FIJOS = [
    /* marca y caras de botón (las mismas en los dos temas: texto blanco AA sobre ellas) */
    "--p-marino:#1F2430", "--p-azul-btn:#2760EE", "--p-verde-btn:#12853C", "--p-rojo-btn:#D13438", "--p-sobre-oro:#1F2430",
    /* espaciado */
    "--s-1:4px", "--s-2:8px", "--s-3:12px", "--s-4:16px", "--s-5:20px", "--s-6:24px", "--s-7:32px", "--s-8:40px", "--s-9:56px",
    /* tipografía */
    "--f-tit:Poppins,'Plus Jakarta Sans',Barlow,system-ui,-apple-system,'Segoe UI',sans-serif", "--f-tx:Barlow,Inter,system-ui,-apple-system,'Segoe UI',sans-serif",
    "--t-xs:.78rem", "--t-sm:.9rem", "--t-md:1rem", "--t-lg:1.14rem", "--t-xl:1.36rem", "--t-2xl:1.7rem", "--t-3xl:2.15rem",
    /* radios */
    "--r-sm:12px", "--r-md:16px", "--r-lg:22px", "--r-xl:28px", "--r-pill:999px",
    /* medidas del armazón */
    "--p-riel:252px", "--p-lado:356px", "--p-barra:72px", "--p-cab:60px",
    "--sat:env(safe-area-inset-top,0px)", "--sab:env(safe-area-inset-bottom,0px)", "--sal:env(safe-area-inset-left,0px)", "--sar:env(safe-area-inset-right,0px)",
    "--p-rosa:#FF6B8B", "--p-rosa-btn:#D92F5F", "--p-rosa-r:#A81F47"
  ];
  /* puente: las variables de las generaciones anteriores salen de la paleta nueva */
  var PUENTE = [
    "--paper:var(--p-bg)", "--raise:var(--p-sup)", "--surf2:var(--p-sup-2)", "--surf3:var(--p-sup-3)", "--ink:var(--p-tinta)", "--ink-2:var(--p-tinta-2)",
    "--stone:var(--p-apagado)", "--faint:var(--p-apagado)", "--line:var(--p-linea)", "--line-2:var(--p-linea)", "--card-edge:var(--p-linea)",
    "--accent:var(--p-azul-tx)", "--brand2:var(--p-azul)", "--wash:var(--p-azul-p)", "--brand-ink:var(--p-azul-tx)",
    "--good:var(--p-verde)", "--good-bg:var(--p-verde-p)", "--good-ink:var(--p-verde-tx)", "--bad:var(--p-rojo)", "--bad-bg:var(--p-rojo-p)", "--bad-ink:var(--p-rojo-tx)",
    "--warn:var(--p-oro)", "--warn-bg:var(--p-oro-p)", "--warn-ink:var(--p-oro-tx)",
    "--pc-blue:var(--p-azul-btn)", "--pc-blue-d:var(--p-azul-r)", "--pc-green:var(--p-verde)", "--pc-gold:var(--p-oro)", "--pc-red:var(--p-rojo)",
    "--m-bg:var(--p-bg)", "--m-card:var(--p-sup)", "--m-edge:var(--p-linea)", "--m-ink:var(--p-tinta)", "--m-mute:var(--p-apagado)",
    "--m-navy:var(--p-azul-btn)", "--m-navy-d:var(--p-azul-r)", "--m-navy-2:var(--p-azul)", "--m-blue:var(--p-azul-tx)", "--m-blue-bg:var(--p-azul-p)", "--m-sky:var(--p-azul-p)",
    "--m-green-bg:var(--p-verde-p)", "--m-green-d:var(--p-verde-tx)", "--m-red-bg:var(--p-rojo-p)", "--m-pink-bg:var(--p-rojo-p)", "--m-coral:var(--p-rojo)", "--m-yellow:var(--p-oro)",
    "--px-navy:var(--p-marino)", "--px-blue:var(--p-azul-btn)", "--px-blue2:var(--p-azul)", "--px-yellow:var(--p-oro)", "--px-wash:var(--p-azul-p)", "--px-white:var(--p-sup)",
    "--pp-crema:var(--p-bg)", "--pp-crema2:var(--p-sup-3)", "--pp-tinta:var(--p-tinta)", "--pp-gris:var(--p-apagado)", "--pp-linea:var(--p-linea)", "--pp-azul:var(--p-azul-tx)",
    "--pp-marino:var(--p-marino)", "--pp-amarillo:var(--p-oro)", "--pp-r:var(--r-lg)",
    "--v4-bg:var(--p-bg)", "--v4-surface:var(--p-sup)", "--v4-surface2:var(--p-sup-2)", "--v4-ink:var(--p-tinta)", "--v4-ink2:var(--p-tinta-2)", "--v4-mute:var(--p-apagado)",
    "--v4-line:var(--p-linea)", "--v4-brand:var(--p-azul-tx)", "--v4-brand2:var(--p-azul)", "--v4-brand-ink:var(--p-azul-tx)", "--v4-night:var(--p-marino)", "--v4-sol:var(--p-oro)",
    "--v4-ok:var(--p-verde)", "--v4-bad:var(--p-rojo)", "--v4-r-xl:var(--r-xl)", "--v4-r-lg:var(--r-lg)", "--v4-r-md:var(--r-md)", "--v4-r-sm:var(--r-sm)",
    "--v4-sh1:var(--p-sombra)", "--v4-sh2:var(--p-sombra)", "--r-lg:22px", "--r-md:16px", "--r-sm:12px",
    "--gl-ink:var(--p-tinta)", "--gl-mut:var(--p-apagado)", "--gl-hair:var(--p-linea)", "--gl-trk:var(--p-pista)", "--gl-oro:var(--p-oro-ic)", "--gl-pozo:var(--p-sup)",
    "--gl-1a:var(--p-sup-2)", "--gl-1b:var(--p-sup-2)", "--gl-2a:var(--p-sup)", "--gl-2b:var(--p-sup)", "--gl-3a:var(--p-sup-3)", "--gl-3b:var(--p-sup-3)",
    "--gl-bd:var(--p-linea)", "--gl-bd2:var(--p-linea)", "--gl-hl:var(--p-linea)", "--gl-sh:transparent", "--gl-on:var(--p-azul-p)", "--gl-pill:var(--p-marino)", "--px-acc:var(--p-azul-tx)",
    "--cz-ink:var(--p-tinta)", "--cz-ink2:var(--p-tinta-2)", "--cz-mute:var(--p-apagado)", "--cz-oro:var(--p-oro-tx)", "--cz-trk:var(--p-pista)", "--cz-glass:var(--p-sup)",
    "--ev-azul:var(--p-azul)", "--ev-azul2:var(--p-azul-tx)", "--ev-oro:var(--p-oro)", "--ev-noche:var(--p-marino)", "--ev-f:var(--f-tx)", "--serif:var(--f-tit)", "--sans:var(--f-tx)"
  ];
  var PLAYER = ["--tx-ink:var(--p-tinta)", "--tx-mut:var(--p-apagado)", "--tx-az:var(--p-azul-tx)", "--tx-sup:var(--p-sup-2)", "--tx-bd:var(--p-linea)", "--tx-hair:var(--p-linea)",
    "--ej-ink:var(--p-tinta)", "--ej-mut:var(--p-apagado)", "--ej-az:var(--p-azul-tx)", "--ej-pz:var(--p-sup)", "--ej-bd:var(--p-linea)", "--ej-rel:var(--p-relieve)", "--ej-sel:var(--p-azul-p)"];

  /* ====================================================================== 2. PIEZAS REUTILIZABLES */
  var VIDRIO = "background:var(--p-vidrio);border:0;box-shadow:inset 0 0 0 1px var(--p-vidrio-linea),inset 0 1px 0 var(--p-vidrio-borde),var(--p-vidrio-sombra);-webkit-backdrop-filter:blur(22px) saturate(1.5);backdrop-filter:blur(22px) saturate(1.5)";
  var TARJETA = "background:var(--p-sup);background-image:none;border:0;border-radius:var(--r-lg);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);-webkit-backdrop-filter:none;backdrop-filter:none;color:var(--p-tinta)";
  /* RESET y BTN no tocan `display` ni usan all:unset: así no se revela lo que la app oculta ni se pierde su `order` */
  var RESET = "-webkit-appearance:none;appearance:none;box-sizing:border-box;border:0;margin:0;cursor:pointer;text-decoration:none;-webkit-tap-highlight-color:transparent";
  var BTN = RESET + ";min-height:48px;padding:13px var(--s-6);border-radius:var(--r-md);font:700 var(--t-md)/1.2 var(--f-tit);letter-spacing:.01em;text-align:center;text-transform:none;transition:transform .08s,box-shadow .08s,filter .15s";
  var BTNX = "all:unset;display:inline-flex;align-items:center;justify-content:center;gap:var(--s-2);" + BTN;   /* para piezas propias */
  var cara = function(bg, rel, tx){ return "background:" + bg + ";background-image:none;color:" + tx + ";border:0;box-shadow:0 4px 0 " + rel + ";text-shadow:none"; };
  var AZUL = cara("var(--p-azul-btn)", "var(--p-azul-r)", "#fff"), ORO = cara("var(--p-oro)", "var(--p-oro-r)", "var(--p-sobre-oro)"),
      LISO = cara("var(--p-sup)", "var(--p-relieve)", "var(--p-azul-tx)") + ";box-shadow:inset 0 0 0 1.5px var(--p-linea),0 4px 0 var(--p-relieve)";
  var HUNDE = "transform:translateY(3px);box-shadow:0 1px 0 transparent";
  var FOCO = "outline:3px solid var(--p-oro);outline-offset:2px";

  var R = [];   /* reglas: se les añade !important al final */
  var o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };

  /* ---------- tokens ---------- */
  o("html{" + FIJOS.concat(CLARO, PUENTE).join(";") + ";color-scheme:light}",
    "html[data-theme=dark]{" + OSCURO.join(";") + ";color-scheme:dark}",
    "@media (prefers-color-scheme:dark){html:not([data-theme=light]){" + OSCURO.join(";") + ";color-scheme:dark}}",
    "#player{" + PLAYER.join(";") + "}",
    ".mp{--mp-ink:var(--p-tinta);--mp-sub:var(--p-tinta-2);--mp-mut:var(--p-apagado);--mp-acc:var(--p-azul-tx);--mp-oro:var(--p-oro);--mp-trk:var(--p-pista)}");

  /* ---------- base: fondo entero, letra amable ---------- */
  o("html{background:var(--p-bg);font-size:100%;-webkit-text-size-adjust:100%}",
    "html.mk body{background:none;background-color:transparent;color:var(--p-tinta);font-family:var(--f-tx);min-height:100dvh;overflow-x:clip}",
    /* un solo fondo, fijo a la ventana: no se corta ni deja franjas al hacer scroll */
    "html.mk body::before{content:'';display:block;position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:1;transform:none;filter:none;background:radial-gradient(60vmax 46vmax at 8% -6%,var(--p-halo-1),transparent 62%),radial-gradient(52vmax 44vmax at 104% 104%,var(--p-halo-3),transparent 60%),radial-gradient(36vmax 30vmax at 70% 30%,var(--p-halo-2),transparent 62%),var(--p-bg)}",
    "html.mk body::after{display:none}",
    "html.mk #view{color:var(--p-tinta);font-family:var(--f-tx);background:none}",
    "html.mk #view h1,html.mk #view h2,html.mk #view h3{font-family:var(--f-tit);color:var(--p-tinta);letter-spacing:-.01em;text-wrap:balance}",
    "html.mk #view :focus-visible,#px-rail :focus-visible,#tabbar :focus-visible,#p5-lado :focus-visible{" + FOCO + "}");

  o("html.mk #view [hidden],html.mk #player [hidden],html.mk .gmodal [hidden],html.mk #topbar [hidden],html.mk #tabbar [hidden],#px-rail [hidden],#p5-lado[hidden],#player[hidden]{display:none}");

  /* ====================================================================== 3. ARMAZÓN */
  /* ---------- celular y tableta: cabecera y barra de vidrio, con zona segura ---------- */
  o("@media (max-width:1023.98px){" + [
    "html.mk body{padding:0 0 calc(var(--p-barra) + var(--sab) + var(--s-6)) 0}",
    "html.mk body header#topbar.top{position:sticky;top:0;height:auto;min-height:0;margin:0;padding:calc(var(--sat) + var(--s-2)) calc(var(--sar) + var(--s-3)) var(--s-2) calc(var(--sal) + var(--s-3));background:none;border:0;box-shadow:none}",
    "html.mk body header#topbar.top::before,html.mk body header#topbar.top::after{display:none}",
    "html.mk body header#topbar.top .topbar-in{" + VIDRIO + ";max-width:720px;margin:0 auto;min-height:var(--p-cab);height:var(--p-cab);padding:0 var(--s-2) 0 var(--s-3);border-radius:var(--r-lg);display:flex;align-items:center;gap:var(--s-2)}",
    "html.mk body header#topbar.top .topbar-in::before,html.mk body header#topbar.top .topbar-in::after{display:none}",
    "html.mk body header#topbar.top .pc-mark{display:flex;flex:none;width:38px;height:38px;margin:0}",
    "html.mk body header#topbar.top .pc-mark img{width:38px;height:38px;border-radius:12px;background:none;box-shadow:none}",
    "html.mk body header#topbar.top .topbar-end{flex:1;min-width:0;display:flex;align-items:center;justify-content:flex-end;gap:var(--s-2);margin:0}",
    "html.mk body header#topbar.top #stats{flex:1;min-width:0;display:flex;align-items:center;justify-content:flex-end;gap:4px;margin:0;padding:0;overflow:hidden}",
    /* barra inferior */
    "html.mk body nav#tabbar.tabbar{position:fixed;left:calc(var(--sal) + var(--s-3));right:calc(var(--sar) + var(--s-3));bottom:calc(var(--sab) + var(--s-3));top:auto;width:auto;max-width:520px;margin:0 auto;height:var(--p-barra);padding:var(--s-2);border-radius:var(--r-xl);display:flex;align-items:stretch;gap:2px;transform:none;" + VIDRIO + "}",
    "html.mk body nav#tabbar.tabbar::before,html.mk body nav#tabbar.tabbar::after{display:none}",
    "html.mk #view.wrap{max-width:720px;margin:0 auto;padding:var(--s-4) calc(var(--sar) + var(--s-4)) var(--s-6) calc(var(--sal) + var(--s-4))}",
    "html.mk body header#topbar.top #musicBtn,html.mk body header#topbar.top #sfxBtn,html.mk body header#topbar.top #themeBtn{display:none}",
    "#px-rail,#p5-lado{display:none}"
  ].join("") + "}");
  /* botones de la barra inferior (zona de toque ≥ 48 px) */
  o("html.mk body nav#tabbar.tabbar button.px-navbtn{" + RESET + ";padding:0;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:var(--r-lg);color:var(--p-apagado);background:none;box-shadow:none;-webkit-tap-highlight-color:transparent;transition:background .15s,color .15s}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn svg{width:24px;height:24px;filter:none;color:inherit}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn svg > *{fill:none;stroke:currentColor}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn .label{font:600 .7rem/1 var(--f-tx);letter-spacing:.01em;color:inherit;opacity:1;white-space:nowrap}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn::after{display:none}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]{background:var(--p-azul-p);color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-azul) 45%,transparent)}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg{color:var(--p-oro-ic)}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg > *{stroke:var(--p-oro-ic);fill:color-mix(in srgb,var(--p-oro) 26%,transparent)}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] .label{font-weight:700}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn:active{transform:scale(.96)}");
  /* cápsulas de la cabecera */
  o("html.mk body header#topbar.top #stats .gpill{" + RESET + ";cursor:default;flex:none;display:inline-flex;align-items:center;gap:4px;height:36px;padding:0 8px;border-radius:var(--r-pill);background:var(--p-sup-2);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);font:700 .84rem/1 var(--f-tx);white-space:nowrap}",
    "html.mk body header#topbar.top #stats button.gpill{cursor:pointer}",
    "html.mk body header#topbar.top #stats .gpill svg{width:17px;height:17px;flex:none}",
    "html.mk body header#topbar.top #stats .gpill.av-lv{padding:0 4px}","html.mk body header#topbar.top #stats .av-lv .av-ring{flex:none;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:var(--p-oro);color:var(--p-sobre-oro);font:800 .72rem/1 var(--f-tit);box-shadow:none;border:0}",
    "html.mk body header#topbar.top #stats .gavatar{background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);height:40px}",
    "html.mk body header#topbar.top .theme-btn{" + RESET + ";padding:0;flex:none;width:44px;height:44px;place-items:center;border-radius:50%;background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta)}",
    "html.mk body header#topbar.top .theme-btn svg{width:20px;height:20px}",
    "html.mk body header#topbar.top .theme-btn.px-off{color:var(--p-apagado)}",
    "@media (max-width:359.98px){html.mk body header#topbar.top #stats .px-crown{display:none}}");

  /* ---------- escritorio: riel · centro · columna derecha ---------- */
  o("@media (min-width:1024px){" + [
    "html{font-size:106.25%}",
    "html.rl-on.mk body{padding:0 var(--s-6) var(--s-8) calc(var(--p-riel) + var(--s-6));background:none}",
    "html.rl-on.mk body #view.wrap{max-width:980px;margin:0 auto;padding:var(--s-6) 0 var(--s-8)}",
    /* riel de vidrio a todo lo alto */
    "#px-rail,#px-rail:not([hidden]){position:fixed;left:0;top:0;bottom:0;height:auto;width:var(--p-riel);z-index:60;display:flex;flex-direction:column;gap:0;padding:var(--s-6) var(--s-4) var(--s-4);border-radius:0 var(--r-xl) var(--r-xl) 0;overflow-y:auto;scrollbar-width:none;color:var(--p-tinta);font-family:var(--f-tx);" + VIDRIO + "}",
    "#px-rail[hidden]{display:none}",
    "#px-rail::-webkit-scrollbar{display:none}",
    "#px-rail .rl-logo{display:flex;align-items:center;gap:var(--s-3);margin:0 var(--s-1) var(--s-4);font:800 1.36rem/1 var(--f-tit);color:var(--p-tinta);letter-spacing:.01em}",
    "#px-rail .rl-logo img{width:42px;height:42px;border-radius:13px;box-shadow:0 6px 14px -8px var(--p-marino)}",
    "#px-rail .rl-logo i{font-style:normal;color:var(--p-oro-ic)}",
    "#px-rail .rl-nav{display:flex;flex-direction:column;gap:var(--s-1)}",
    "#px-rail .rl-h{margin:var(--s-5) var(--s-3) var(--s-2);font:700 .68rem/1 var(--f-tx);letter-spacing:.14em;text-transform:uppercase;color:var(--p-apagado)}",
    "#px-rail .rl-b{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;align-items:center;gap:var(--s-3);height:50px;padding:0 var(--s-3);border-radius:var(--r-md);border:0;font:700 .88rem/1 var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:var(--p-tinta-2);white-space:nowrap;background:none;box-shadow:none;transition:background .15s,color .15s,transform .1s}",
    "#px-rail .rl-b .rl-ic{width:32px;height:32px;flex:none;object-fit:contain}",
    "#px-rail .rl-b svg{width:26px;height:26px;flex:none;margin:0 3px;color:inherit;filter:none}",
    "#px-rail .rl-b:hover{background:var(--p-vidrio-linea);color:var(--p-tinta)}",
    "#px-rail .rl-b:active{transform:scale(.98)}",
    "#px-rail .rl-b::before,#px-rail .rl-b::after{display:none}",
    "#px-rail .rl-b[aria-current=page]{color:#fff;background:var(--p-azul-btn);background-image:none;box-shadow:0 4px 0 var(--p-azul-r)}",
    "#px-rail .rl-b[aria-current=page] svg{color:#fff;filter:none}",
    "#px-rail .rl-b[aria-current=page] svg > *{fill:none}",
    "#px-rail .cz-pie{margin-top:auto;padding-top:var(--s-3);border-top:1px solid var(--p-vidrio-linea);display:flex;flex-direction:column;gap:var(--s-1)}",
    "#px-rail [data-cz-rl=buscar],#px-rail .rl-yo{display:none}",
    /* cabecera de escritorio (solo sin columna derecha): cápsulas a la derecha, sin tapar */
    "html.rl-on.mk body header#topbar.top{position:relative;top:auto;z-index:5;height:auto;min-height:0;margin:0;padding:var(--s-4) 0 0;background:none;box-shadow:none;border:0}",
    "html.rl-on.mk body header#topbar.top::before,html.rl-on.mk body header#topbar.top::after,html.rl-on.mk body header#topbar.top .topbar-in::before,html.rl-on.mk body header#topbar.top .topbar-in::after{display:none}",
    "html.rl-on.mk body header#topbar.top .topbar-in{max-width:980px;margin:0 auto;min-height:0;height:auto;padding:0;background:none;box-shadow:none;border:0;-webkit-backdrop-filter:none;backdrop-filter:none;display:flex;justify-content:flex-end}",
    "html.rl-on.mk body header#topbar.top .pc-mark,html.rl-on.mk body header#topbar.top #nav{display:none}",
    "html.rl-on.mk body header#topbar.top .topbar-end{display:flex;align-items:center;gap:var(--s-2)}",
    "html.rl-on.mk body header#topbar.top #stats{display:flex;align-items:center;gap:var(--s-2)}",
    "html.rl-on.mk body nav#tabbar.tabbar{display:none}",
    "html.rl-on.mk body header#topbar.top #stats .gavatar svg{color:var(--p-tinta-2)}",
    "#p5-lado{display:none}"
  ].join("") + "}");
  o("@media (min-width:1440px){" + [
    "html.rl-on.p5-lado-on.mk body{padding-right:calc(var(--p-lado) + var(--s-6) * 2)}",
    "html.rl-on.p5-lado-on.mk body header#topbar.top{display:none}",
    "html.p5-lado-on #p5-lado{display:flex;flex-direction:column;gap:var(--s-4);position:fixed;z-index:40;right:0;top:0;bottom:auto;height:auto;width:calc(var(--p-lado) + var(--s-6) * 2);padding:var(--s-6);overflow:visible;will-change:transform;font-family:var(--f-tx);color:var(--p-tinta)}",
    "#p5-lado::-webkit-scrollbar{display:none}",
    "html.p5-lado-on #cz .cz-lado{display:none}",
    "html.p5-lado-on #cz{grid-template-columns:minmax(0,640px);justify-content:center}"
  ].join("") + "}");
  o("@media (min-width:1680px){html{font-size:112.5%}html.rl-on.mk body #view.wrap{max-width:1040px}}");

  /* ---------- columna derecha (vidrio) ---------- */
  o(".p5-stats{display:flex;align-items:center;justify-content:space-between;gap:var(--s-2);min-height:48px;padding:0 var(--s-1)}",
    ".p5-stats > span{display:inline-flex;align-items:center;gap:6px;font:700 1.08rem/1 var(--f-tit);color:var(--p-tinta)}",
    ".p5-stats > span img{width:26px;height:26px}",
    ".p5-stats .o{color:var(--p-oro-tx)}.p5-stats .a{color:var(--p-azul-tx)}",
    ".p5-aj{all:unset;box-sizing:border-box;cursor:pointer;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;color:var(--p-tinta-2);" + VIDRIO + "}",
    ".p5-aj svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}",
    ".p5-c{all:unset;box-sizing:border-box;display:block;position:relative;padding:var(--s-4) var(--s-5);border-radius:var(--r-lg);color:var(--p-tinta);" + VIDRIO + "}",
    "button.p5-c{cursor:pointer;transition:transform .12s}button.p5-c:hover{transform:translateY(-2px)}",
    ".p5-c h3{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);margin:0;font:700 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-c h3 a{all:unset;cursor:pointer;font:600 var(--t-sm)/1 var(--f-tx);color:var(--p-azul-tx);padding:var(--s-2) 0 var(--s-2) var(--s-2)}",
    ".p5-c h3 a:hover{text-decoration:underline}",
    ".p5-c p{margin:var(--s-2) 0 0;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-tinta-2)}",
    ".p5-c p b{color:var(--p-tinta)}.p5-c .p5-y{color:var(--p-oro-tx)}",
    ".p5-fx{display:flex;align-items:center;gap:var(--s-3)}.p5-fx img{flex:none}",
    ".p5-lv{display:flex;align-items:center;gap:var(--s-3)}",
    ".p5-lv .p5-gato{flex:none;width:54px;height:54px;border-radius:50%;background:var(--p-azul-p);display:grid;place-items:center;overflow:hidden}",
    ".p5-lv .p5-gato svg{width:48px;height:48px;display:block}",
    ".p5-lv > span:last-child{flex:1;min-width:0;display:grid;gap:var(--s-2)}",
    ".p5-lv b{font:700 var(--t-md)/1.1 var(--f-tit)}.p5-lv small{font:500 var(--t-xs)/1 var(--f-tx);color:var(--p-apagado);white-space:nowrap}",
    ".p5-row{display:flex;align-items:center;gap:var(--s-3)}",
    ".p5-row u{flex:1;height:10px;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden;text-decoration:none}",
    ".p5-row s{display:block;height:100%;border-radius:var(--r-pill);background:var(--p-azul);text-decoration:none}",
    ".p5-btn{" + BTNX + ";" + ORO + ";width:100%;margin-top:var(--s-3)}.p5-btn:active{" + HUNDE + "}",
    ".p5-mis.p5-luz > .gcard{animation:p5luz 1.4s ease-out}",
    "#p5-lado .p5-mis > .gcard.plx-miss{" + VIDRIO + ";border-radius:var(--r-lg);padding:var(--s-4) var(--s-5);margin:0;color:var(--p-tinta)}");

  /* ====================================================================== 4. PIEZAS DEL CONTENIDO (pastel) */
  /* tarjetas genéricas */
  o("html.mk #view .gcard{" + TARJETA + "}",
    "html.mk #view .gl.g2,html.mk #view .gl.g1{" + TARJETA + "}");
  /* botones con volumen */
  o("html.mk .gbtn,html.mk #view .btn,html.mk #player .pf .btn,html.mk .gmodal .btn{" + BTN + ";" + AZUL + "}",
    "html.mk .gbtn:active,html.mk #view .btn:active,html.mk #player .pf .btn:active,html.mk .gmodal .btn:active{" + HUNDE + "}",
    "html.mk .gbtn.ghost,html.mk .gbtn.line,html.mk #view .btn.line,html.mk #view .btn.ghost,html.mk #player .pf .btn.line,html.mk .gmodal .btn.line,html.mk .gmodal .btn.ghost{" + LISO + "}",
    "html.mk .gbtn.wide{width:100%}",
    "html.mk .gbtn[disabled],html.mk #player .pf .btn[disabled],html.mk #view .btn[disabled]{background:var(--p-sup-3);color:var(--p-apagado);box-shadow:0 4px 0 var(--p-linea);cursor:not-allowed;opacity:1;filter:none}");
  /* pestañas segmentadas */
  o("html.mk #view .seg,html.mk #view .tn-tabs,.p5-seg{display:flex;gap:var(--s-1);padding:var(--s-1);border-radius:var(--r-md);background:var(--p-sup-3);box-shadow:none;border:0}",
    "html.mk #view .seg .seg-pill{display:none}",
    "html.mk #view .seg > button,html.mk #view .tn-tabs > button,.p5-seg > button{all:unset;box-sizing:border-box;cursor:pointer;flex:1 1 0;min-width:0;min-height:44px;padding:0 var(--s-3);display:flex;align-items:center;justify-content:center;border-radius:var(--r-sm);font:600 var(--t-sm)/1.1 var(--f-tx);color:var(--p-tinta-2);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:none;box-shadow:none}",
    "html.mk #view .seg > button[aria-selected=true],html.mk #view .seg > button.on,html.mk #view .seg > button.active,html.mk #view .tn-tabs > button[aria-selected=true],html.mk #view .tn-tabs > button.on,.p5-seg > button[aria-pressed=true]{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
    ".p5-seg{max-width:340px;margin:0 0 var(--s-5)}");
  /* cabeceras editoriales de las vistas */
  o("html.mk #view .fg-eyebrow{margin:0 0 var(--s-2);font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.14em;text-transform:uppercase;color:var(--p-azul-tx)}",
    "html.mk #view .fg-h1,html.mk #view .gview > h1{margin:0 0 var(--s-2);font:800 var(--t-2xl)/1.12 var(--f-tit);color:var(--p-tinta);letter-spacing:-.02em;background:none;-webkit-text-fill-color:currentColor}",
    "html.mk #view .fg-h1::after{display:none}",
    "html.mk #view .fg-sub{margin:0 0 var(--s-5);font:500 var(--t-md)/1.4 var(--f-tx);color:var(--p-tinta-2)}");
  /* barras de progreso */
  o("html.mk #view .ms-b,html.mk #p5-lado .ms-b{display:block;height:8px;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden}",
    "html.mk #view .ms-b i,html.mk #p5-lado .ms-b i{display:block;height:100%;border-radius:var(--r-pill);background:var(--p-azul)}");
  /* misiones (Inicio y columna derecha) */
  o(".plx-miss .ms-h{display:flex;align-items:baseline;justify-content:space-between;gap:var(--s-2);margin:0 0 var(--s-3);color:var(--p-tinta)}",
    ".plx-miss .ms-h b{font:700 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);display:inline-flex;align-items:center;gap:var(--s-2)}",
    ".plx-miss .ms-h small{font:600 var(--t-xs)/1 var(--f-tx);color:var(--p-apagado);white-space:nowrap}","#p5-lado .plx-miss .ms-h b{font-size:var(--t-md);white-space:nowrap}","#p5-lado .plx-miss .ms-i{min-height:50px}",
    ".plx-miss .ms-i{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--s-3);width:100%;min-height:56px;padding:var(--s-2) var(--s-3);margin:0 0 var(--s-2);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta)}",
    ".plx-miss .ms-i[disabled]{cursor:default}",
    ".plx-miss .ms-i .ms-ic{width:36px;height:36px;display:grid;place-items:center;border-radius:11px;background-color:var(--p-sup);color:var(--p-azul-tx)}",
    ".plx-miss .ms-i.ok .ms-ic{background-color:var(--p-verde-btn);color:#fff}",
    ".plx-miss .ms-i .ms-t{display:grid;gap:6px;min-width:0}.plx-miss .ms-i .ms-t b{font:600 var(--t-sm)/1.2 var(--f-tx);color:var(--p-tinta);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    ".plx-miss .ms-i.ok .ms-b i{background:var(--p-verde)}",
    ".plx-miss .ms-i em{font:700 var(--t-xs)/1 var(--f-tx);font-style:normal;color:var(--p-apagado)}",
    ".plx-miss .ms-chest{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:var(--s-3);width:100%;min-height:56px;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);border:2px dashed var(--p-linea);color:var(--p-tinta-2);font:500 var(--t-sm)/1.3 var(--f-tx);background:none}",
    ".plx-miss .ms-chest b{font-weight:600;color:inherit}",
    ".plx-miss .ms-chest.ready{cursor:pointer;border-style:solid;border-color:var(--p-oro-r);background:var(--p-oro-p);color:var(--p-oro-tx)}");

  /* ====================================================================== 5. INICIO */
  /* --- celular: franja de la lección que sigue + sendero --- */
  o("html.mk .ghome{padding:0;margin:0}","html.cz-on .ghome{display:none}",
    "html.mk .ghome .gmain{display:flex;flex-direction:column;gap:var(--s-5)}",
    "html.mk .ghome .greet.mp-en{padding:0;margin:0;background:none;box-shadow:none;border:0;border-radius:0}",
    "html.mk .ghome .mp{display:grid;gap:var(--s-4);padding:0;margin:0}",
    "html.mk .ghome .mp .mp-sig{position:sticky;top:calc(var(--sat) + var(--p-cab) + var(--s-5));z-index:6;display:flex;align-items:center;gap:var(--s-3);min-height:84px;padding:var(--s-3) var(--s-3) var(--s-3) var(--s-5);border-radius:var(--r-lg);background:var(--p-azul-btn);background-image:none;box-shadow:0 5px 0 var(--p-azul-r);color:#fff;-webkit-backdrop-filter:none;backdrop-filter:none;border:0}",
    "html.mk .ghome .mp .mp-sig::before,html.mk .ghome .mp .mp-sig::after{display:none}",
    "html.mk .ghome .mp .mp-sig > span:first-child{flex:1;min-width:0;display:grid;gap:var(--s-1);color:#fff}",
    "html.mk .ghome .mp .mp-sig > span:first-child *{color:#fff;-webkit-text-fill-color:#fff;overflow-wrap:anywhere}",
    "html.mk .ghome .mp .mp-sig small,html.mk .ghome .mp .mp-sig em{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;opacity:.9;font-style:normal}",
    "html.mk .ghome .mp .mp-sig b{font:700 var(--t-lg)/1.2 var(--f-tit)}",
    "html.mk .ghome .mp .mp-go{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:56px;height:52px;display:grid;place-items:center;border-radius:var(--r-md);" + ORO + "}",
    "html.mk .ghome .mp .mp-go:active{" + HUNDE + "}",
    "html.mk .ghome .mp .mp-go svg{width:26px;height:26px;color:var(--p-sobre-oro)}",
    "html.mk .ghome .mp .mp-pie{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);padding:0 var(--s-1);color:var(--p-apagado);font:500 var(--t-sm)/1.2 var(--f-tx)}",
    "html.mk .ghome .mp .mp-todo{all:unset;cursor:pointer;min-height:44px;display:inline-flex;align-items:center;font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-azul-tx)}",
    "html.mk .ghome .mp .mp-n.sig .mp-t small,html.mk .ghome .mp .mp-n.cofre .mp-t b{color:var(--p-oro-tx)}",
    "html.mk .ghome .mp .mp-n .mp-t b{white-space:normal;overflow:visible;text-overflow:clip;display:block;-webkit-line-clamp:unset;color:var(--p-tinta)}",
    /* tarjeta de la ruta de estudio */
    "html.mk .ghome .gmain > .gcard.rtx{" + TARJETA + ";padding:var(--s-5)}",
    "html.mk .ghome .rtx *{color:inherit}",
    "html.mk .ghome .rtx .rtx-hoy,html.mk .ghome .rtx small{color:var(--p-apagado)}",
    "html.mk .ghome .rtx .rtx-link{color:var(--p-azul-tx);font-weight:700;min-height:44px}",
    "html.mk .ghome .rtx .rtx-l li{background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border-radius:var(--r-md);border:0}");
  /* --- escritorio: recorrido (#cz de plx100) en pastel --- */
  o("#cz{display:grid;grid-template-columns:minmax(0,1fr) var(--p-lado);gap:var(--s-7);justify-content:center;align-items:start;padding:0;color:var(--p-tinta);font-family:var(--f-tx)}",
    "#cz .cz-centro{min-width:0;max-width:640px;width:100%;margin:0 auto}",
    "#cz .cz-c{" + TARJETA + ";position:relative;padding:var(--s-5)}",
    "#cz .cz-top small{font:600 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}#cz .cz-top small b{color:var(--p-azul-tx)}",
    "#cz .cz-top h1{margin:var(--s-1) 0 var(--s-4);padding-right:110px;font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "#cz .cz-k{all:unset;box-sizing:border-box;cursor:pointer;min-height:40px;padding:0 var(--s-4);display:inline-flex;align-items:center;border-radius:var(--r-sm);font:700 var(--t-xs)/1 var(--f-tx);color:var(--p-azul-tx);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);border:0}",
    "#cz .cz-k:active{" + HUNDE + "}",
    "#cz .cz-top .cz-k{position:absolute;right:var(--s-4);top:var(--s-4)}",
    "#cz .cz-bars{display:flex;align-items:center;gap:var(--s-2)}",
    "#cz .cz-bars i{flex:1;height:10px;border-radius:var(--r-pill);background:var(--p-pista);box-shadow:none}",
    "#cz .cz-bars i.f{background:var(--p-oro);box-shadow:none}",
    "#cz .cz-bars span{margin-left:var(--s-2);font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-tinta-2)}",
    "#cz .cz-sec{display:flex;align-items:center;gap:var(--s-4);margin:var(--s-7) 0 var(--s-6);font:700 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta-2)}",
    "#cz .cz-sec::before,#cz .cz-sec::after{content:'';flex:1;height:2px;border-radius:2px;background:var(--p-linea)}",
    "#cz .cz-map{display:flex;flex-direction:column;align-items:center;gap:var(--s-7);position:relative}",
    "#cz .cz-n{position:relative;display:flex;flex-direction:column;align-items:center;gap:var(--s-3)}",
    "#cz .cz-n.d{transform:translateX(64px)}#cz .cz-n.i{transform:translateX(-64px)}",
    "#cz .cz-n > span{max-width:230px;text-align:center;font:600 var(--t-sm)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
    "#cz .cz-n::before,#cz .cz-n::after{display:none}",
    "#cz .cz-nodo{all:unset;box-sizing:border-box;cursor:pointer;width:84px;height:78px;border-radius:26px;display:grid;place-items:center;transition:transform .1s;animation:none}",
    "#cz .cz-nodo:hover{transform:translateY(-2px)}#cz .cz-nodo:active{transform:translateY(5px)}",
    "#cz .cz-nodo svg{width:36px;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}",
    "#cz .cz-nodo.azul{background:var(--p-azul-btn);box-shadow:0 8px 0 var(--p-azul-r)}",
    "#cz .cz-nodo.oro{background:var(--p-oro);box-shadow:0 8px 0 var(--p-oro-r)}",
    "#cz .cz-nodo.oro.act{box-shadow:0 8px 0 var(--p-oro-r),0 0 0 8px color-mix(in srgb,var(--p-oro) 30%,transparent)}",
    "#cz .cz-nodo.vidrio{background:var(--p-sup-3);box-shadow:0 8px 0 var(--p-relieve)}#cz .cz-nodo.vidrio svg{stroke:var(--p-apagado);stroke-width:2.4}",
    "#cz .cz-mz{position:absolute;left:calc(50% + 62px);top:-30px;width:124px;height:auto;filter:drop-shadow(0 10px 14px rgba(11,31,92,.25));pointer-events:none}",
    "#cz .cz-go{display:flex;flex-wrap:wrap;gap:var(--s-4);align-items:center;justify-content:center;margin-top:var(--s-8)}",
    "#cz .cz-btn{" + BTNX + ";" + ORO + ";text-transform:none;letter-spacing:0;margin:0;min-height:54px;font-size:var(--t-lg)}#cz .cz-btn:active{" + HUNDE + "}",
    "#cz .cz-lado{display:flex;flex-direction:column;gap:var(--s-4);min-width:0}",
    "#cz .cz-lado .cz-btn{width:100%;margin-top:var(--s-3);font-size:var(--t-md);min-height:48px}",
    "#cz .cz-stats{display:flex;justify-content:space-between;align-items:center;padding:0 var(--s-2);font:700 var(--t-lg)/1 var(--f-tit);color:var(--p-tinta)}#cz .cz-stats span{display:flex;align-items:center;gap:6px}#cz .cz-stats .o{color:var(--p-oro-tx)}#cz .cz-stats .a{color:var(--p-azul-tx)}",
    "#cz .cz-lv{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:var(--s-3);align-items:center;" + TARJETA + ";padding:var(--s-4) var(--s-5)}",
    "#cz .cz-row u{background:var(--p-pista);height:10px;border-radius:var(--r-pill)}#cz .cz-row s{background:var(--p-azul);box-shadow:none;border-radius:var(--r-pill)}#cz .cz-row small{font-size:var(--t-xs);color:var(--p-apagado)}",
    "#cz .cz-c h3{font:700 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);margin:0}#cz .cz-c h3 a{font:600 var(--t-sm)/1 var(--f-tx);color:var(--p-azul-tx)}",
    "#cz .cz-c p{margin:var(--s-2) 0 0;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-tinta-2)}#cz .cz-y{color:var(--p-oro-tx)}",
    "#cz .cz-mis > .gcard{" + TARJETA + ";padding:var(--s-4) var(--s-5);margin:0}",
    "@media (min-width:1024px) and (max-width:1439.98px){html.cz-on.rl-on.mk body header#topbar.top{display:block}#cz .cz-stats{display:none}#cz{grid-template-columns:minmax(0,640px)}#cz .cz-lado{max-width:640px;width:100%;margin:0 auto}}");

  /* ====================================================================== 6. LECCIÓN POR DENTRO */
  o("html.mk #player.player{background:var(--p-bg);background-image:none;color:var(--p-tinta);font-family:var(--f-tx)}",
    /* cabecera: sin franja de otro color; cerrar, avance y vidas en una fila */
    "html.mk #player .ph{background:none;background-image:none;box-shadow:none;border:0;color:var(--p-tinta);padding:calc(var(--sat) + var(--s-3)) 0 var(--s-2);height:auto;min-height:0}",
    "html.mk #player .ph::before,html.mk #player .ph::after{display:none}",
    "html.mk #player .ph .wrap{display:grid;grid-template-columns:44px minmax(0,1fr) auto auto;align-items:center;gap:var(--s-3);height:auto;min-height:44px;max-width:760px;margin:0 auto;padding:0 calc(var(--sar) + var(--s-4)) 0 calc(var(--sal) + var(--s-4));background:none;position:relative}",
    "html.mk #player .ph .wrap > *{position:static;margin:0;transform:none;grid-row:1}",
    "html.mk #player .ph .quit{" + RESET + ";padding:0;width:44px;height:44px;place-items:center;border-radius:50%;background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta-2);font:700 var(--t-xs)/1 var(--f-tx);grid-column:3}",
    "html.mk #player .ph .quit.m-q0{grid-column:1}",
    /* al terminar la lección el botón trae el texto «✕ Cerrar» y se salía del círculo: queda solo la equis */
    "html.mk #player .ph .quit[data-quit]{font-size:0;overflow:hidden}",
    "html.mk #player .ph .quit[data-quit]:not(:has(svg))::before{content:'\\2715';font:700 18px/1 var(--f-tx);color:inherit}",
    "html.mk #player .ph .quit svg{width:20px;height:20px;color:inherit}",
    "html.mk #player .ph .wrap > :not(.quit):not(.pbar):not(.ghearts){display:none}",
    "html.mk #player .ph .pbar{position:relative;grid-column:2;width:auto;height:14px;border-radius:var(--r-pill);background:var(--p-pista);box-shadow:none;overflow:hidden}",
    "html.mk #player .ph .pbar i{position:absolute;inset:0 auto 0 0;height:100%;border-radius:var(--r-pill);background:var(--p-verde);background-image:none;box-shadow:inset 0 -4px 0 rgba(0,0,0,.12)}",
    "html.mk #player .ph .ghearts{grid-column:4;display:inline-flex;align-items:center;gap:5px;font:700 var(--t-md)/1 var(--f-tit);color:var(--p-rojo-tx);background:none;box-shadow:none;padding:0}",
    "html.mk #player .pbody{background:none;color:var(--p-tinta)}",
    "html.mk #player .pbody .wrap{max-width:760px;margin:0 auto;padding:var(--s-4) calc(var(--sar) + var(--s-4)) var(--s-6) calc(var(--sal) + var(--s-4))}",
    /* explicación: los profesores protagonizan */
    "html.mk #player .tx-cab{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);margin:0 0 var(--s-4);min-height:44px}",
    "html.mk #player .tx-pasos{display:flex;gap:6px;flex:1;max-width:260px}",
    "html.mk #player .tx-p{all:unset;flex:1;height:8px;border-radius:var(--r-pill);background:var(--p-pista);cursor:pointer;position:relative}",
    "html.mk #player .tx-p::after{content:'';position:absolute;inset:-18px 0}",
    "html.mk #player .tx-p.on,html.mk #player .tx-p.hecho{background:var(--p-oro)}",
    "html.mk #player .tx-saltar{all:unset;cursor:pointer;min-height:44px;display:inline-flex;align-items:center;font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-azul-tx)}",
    "html.mk #player .tx-k{margin:0 0 var(--s-2);font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-azul-tx)}",
    "html.mk #player .tx-s h2,html.mk #player .tx-s .disp{margin:0 0 var(--s-4);font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta);letter-spacing:-.02em}",
    "html.mk #player .tx-prof{display:flex;align-items:center;gap:var(--s-3);margin:0 0 var(--s-5);padding:var(--s-3) var(--s-4);border-radius:var(--r-lg);background:var(--p-lila-p);box-shadow:none;border:0}",
    "html.mk #player .tx-prof img{flex:none;width:56px;height:56px;border-radius:50%;object-fit:cover;object-position:50% 12%;background:var(--p-sup)}",
    "html.mk #player .tx-prof p{margin:0;font:500 var(--t-md)/1.4 var(--f-tx);color:var(--p-tinta)}",
    "html.mk #player .tx-prof p b{display:block;font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-lila-tx)}",
    "html.mk #player .tx-ejs{display:grid;gap:var(--s-3)}",
    "html.mk #player .tx-ej{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:var(--s-4);min-height:72px;padding:var(--s-3) var(--s-4);" + TARJETA + "}",
    "html.mk #player .tx-ej:active{" + HUNDE + "}",
    "html.mk #player .tx-ej .tx-au{flex:none;width:48px;height:48px;display:grid;place-items:center;border-radius:50%;background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r)}",
    "html.mk #player .tx-ej > span:last-child{display:grid;gap:3px;min-width:0}",
    "html.mk #player .tx-ej b{font:700 var(--t-lg)/1.25 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #player .tx-ej small,html.mk #player .tx-ej em{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-apagado);font-style:normal}",
    /* ejercicio */
    /* en bloque (no flex): un enunciado con cursiva o negrita en medio se partía en piezas separadas por huecos */
    "html.mk #player .ask{display:block;position:relative;box-sizing:border-box;margin:0 0 var(--s-4);min-height:44px;padding:11px 0;font:700 var(--t-md)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #player .ask:has(> .ej-regla){padding-right:56px}",
    "html.mk #player .ask > .ej-regla{position:absolute;right:0;top:0}",
    "html.mk #player .ej-regla{" + RESET + ";padding:0;flex:none;width:44px;height:44px;place-items:center;border-radius:50%;background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-azul-tx)}",
    "html.mk #player .ctx{margin:0 0 var(--s-4);padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:none}",
    "html.mk #player .ctx > span{font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:var(--p-apagado)}",
    "html.mk #player .ctx p{margin:var(--s-1) 0 0;font:500 var(--t-md)/1.45 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #player .q{margin:0 0 var(--s-5);font:800 var(--t-xl)/1.3 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #player .opts{display:grid;gap:var(--s-3)}",
    "html.mk #player .opt,html.mk #player .mbtn,html.mk #player .tok,html.mk #player .chipb,html.mk #player .dtok{background:var(--p-sup);background-image:none;color:var(--p-tinta);border:0;border-radius:var(--r-md);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve);font-family:var(--f-tx);font-weight:600}",
    "html.mk #player .opt{min-height:60px;padding:var(--s-3) var(--s-4);font-size:var(--t-lg)}",
    "html.mk #player .opt .k{background:var(--p-sup-3);color:var(--p-tinta-2);box-shadow:none;border:0;border-radius:10px}",
    "html.mk #player .opt.sel,html.mk #player .opt[aria-pressed=true],html.mk #player .mbtn.sel,html.mk #player .tok.sel,html.mk #player .chipb.sel{background:var(--p-azul-p);color:var(--p-tinta);box-shadow:inset 0 0 0 2px var(--p-azul),0 4px 0 var(--p-azul)}",
    "html.mk #player .opt.ok,html.mk #player .opt.good,html.mk #player .mbtn.ok{background:var(--p-verde-p);color:var(--p-verde-tx);box-shadow:inset 0 0 0 2px var(--p-verde),0 4px 0 var(--p-verde)}",
    "html.mk #player .opt.ko,html.mk #player .opt.bad,html.mk #player .mbtn.ko{background:var(--p-rojo-p);color:var(--p-rojo-tx);box-shadow:inset 0 0 0 2px var(--p-rojo),0 4px 0 var(--p-rojo)}",
    "html.mk #player input[type=text],html.mk #player textarea,html.mk #player .inp{background:var(--p-sup);color:var(--p-tinta);border:0;border-radius:var(--r-md);box-shadow:inset 0 0 0 2px var(--p-linea);font:600 var(--t-lg)/1.3 var(--f-tx)}",
    "html.mk #player input[type=text]:focus,html.mk #player textarea:focus{box-shadow:inset 0 0 0 2px var(--p-azul);outline:0}",
    /* pie: una acción clara, sin tapar el contenido */
    "html.mk #player .pf{background:var(--p-vidrio-solido);background-image:none;border:0;box-shadow:inset 0 1.5px 0 var(--p-linea);padding:0 0 var(--sab);color:var(--p-tinta)}",
    "html.mk #player .pf::before,html.mk #player .pf::after{display:none}",
    "html.mk #player .pf .wrap{max-width:760px;margin:0 auto;padding:var(--s-3) calc(var(--sar) + var(--s-4)) var(--s-3) calc(var(--sal) + var(--s-4))}",
    "html.mk #player .pf .pfa{display:flex;gap:var(--s-3);align-items:stretch}",
    "html.mk #player .pf .pfa .btn{flex:1 1 0;min-height:54px;font-size:var(--t-lg)}",
    "html.mk #player .pf .pfa .btn.line{flex:0 0 auto;min-width:108px}",
    "html.mk #player .pf .pfa .btn.tx-atras{" + LISO + ";flex:0 0 60px;padding:0;font-size:var(--t-xl)}",
    /* corrección: hoja verde o roja, veredicto grande */
    "html.mk #player .pf.ok,html.mk #player .pf.good{background:var(--p-verde-p);box-shadow:inset 0 2px 0 var(--p-verde)}",
    "html.mk #player .pf.bad,html.mk #player .pf.ko{background:var(--p-rojo-p);box-shadow:inset 0 2px 0 var(--p-rojo)}",
    "html.mk #player .pf .fb{background:none;border:0;box-shadow:none;padding:0;margin:0 0 var(--s-3);display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:var(--s-3);align-items:start;max-height:38dvh;overflow-y:auto}",
    "html.mk #player .pf .fb > *{grid-column:2}",
    "html.mk #player .pf .fb .fg-ico{grid-column:1;grid-row:1 / span 2;width:48px;height:48px;border-radius:var(--r-md);display:grid;place-items:center;color:#fff;background:var(--p-verde-btn);box-shadow:0 3px 0 var(--p-verde-r)}",
    "html.mk #player .pf.bad .fb .fg-ico,html.mk #player .pf.ko .fb .fg-ico{background:var(--p-rojo-btn);box-shadow:0 3px 0 var(--p-rojo-r)}",
    "html.mk #player .pf .fb .fg-eti{font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-verde-tx);margin:2px 0 var(--s-1)}",
    "html.mk #player .pf .fb .ej-ver{margin:0 0 var(--s-2);font:800 var(--t-xl)/1.1 var(--f-tit);color:var(--p-verde-tx)}",
    "html.mk #player .pf.bad .fb .fg-eti,html.mk #player .pf.bad .fb .ej-ver,html.mk #player .pf.ko .fb .fg-eti,html.mk #player .pf.ko .fb .ej-ver{color:var(--p-rojo-tx)}",
    "html.mk #player .pf .fb p,html.mk #player .pf .fb .exp{margin:0 0 var(--s-2);font:500 var(--t-md)/1.4 var(--f-tx);color:var(--p-tinta)}",
    "html.mk #player .pf .fb .exp{font-weight:700}",
    "html.mk #player .pf .fb .pf-fbp{display:flex;align-items:center;gap:var(--s-2);margin:0 0 var(--s-1);font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-tinta-2);background:none;padding:0}",
    "html.mk #player .pf .fb .pf-fbp img{width:34px;height:34px;border-radius:50%;object-fit:cover;object-position:50% 12%;background:var(--p-sup)}",
    "html.mk #player .pf.ok .pfa .btn:not(.line):not(.ej-porque),html.mk #player .pf.good .pfa .btn:not(.line):not(.ej-porque){" + cara("var(--p-verde-btn)", "var(--p-verde-r)", "#fff") + "}",
    "html.mk #player .pf.bad .pfa .btn:not(.line):not(.ej-porque),html.mk #player .pf.ko .pfa .btn:not(.line):not(.ej-porque){" + cara("var(--p-rojo-btn)", "var(--p-rojo-r)", "#fff") + "}",
    "html.mk #player .pf .pfa .btn.ej-porque{" + LISO + ";flex:0 1 auto}",
    "html.mk #player .pf .rep-link{all:unset;cursor:pointer;display:block;margin:var(--s-2) auto 0;min-height:32px;font:500 var(--t-xs)/32px var(--f-tx);color:var(--p-apagado);text-decoration:underline;text-align:center}",
    /* escritorio: la lección es un panel centrado, de una sola pieza */
    "@media (min-width:1024px){html:has(#player:not([hidden])) #px-rail,html:has(#player:not([hidden])) #p5-lado{display:none}html.mk #player.player:not([hidden]){background:var(--p-velo);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--s-6)}" +
      "html.mk #player .ph,html.mk #player .pbody,html.mk #player .pf{width:min(820px,100%);max-width:820px;margin:0;left:auto;right:auto;position:relative;transform:none;flex:none}" +
      "html.mk #player .ph{background:var(--p-bg);border-radius:var(--r-xl) var(--r-xl) 0 0;padding:var(--s-5) var(--s-4) var(--s-3)}" +
      "html.mk #player .pbody{background:var(--p-bg);flex:0 1 600px;height:auto;min-height:180px;max-height:none;overflow-y:auto;border-radius:0}" +
      "html.mk #player .pf{border-radius:0 0 var(--r-xl) var(--r-xl);padding-bottom:var(--s-2)}" +
      "html.mk #player .ph .wrap,html.mk #player .pbody .wrap,html.mk #player .pf .wrap{max-width:680px}}");

  /* ====================================================================== 7. PRÁCTICA Y JUEGOS */
  o("html.mk #view .gretos{padding:0;margin:0}",
    "html.mk #view .pq{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-7);max-width:none;width:auto}","html.mk #view .pq > *,html.mk #view .pq-s > *{min-width:0;max-width:100%}",
    "html.mk #view .pq-s > header{display:flex;align-items:baseline;gap:var(--s-3);margin:0 0 var(--s-3);padding:0;background:none}",
    "html.mk #view .pq-s > header h2,html.mk #view .pq-s > header b{font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .pq-s > header small,html.mk #view .pq-s > header span,html.mk #view .pq-s > header p{margin:0;font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .pq-hab .pq-c{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:var(--s-3)}",
    "html.mk #view .pq-hab .pq-c > button,html.mk #view .pq .jx-tile{" + RESET + ";text-align:left;display:flex;flex-direction:column;gap:var(--s-2);min-height:132px;padding:var(--s-4);" + TARJETA + "}",
    "html.mk #view .pq-hab .pq-c > button:active,html.mk #view .pq .jx-tile:active{" + HUNDE + "}",
    "html.mk #view .pq .jx-tile b,html.mk #view .pq-hab .pq-c > button b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .pq .jx-tile small,html.mk #view .pq-hab .pq-c > button small{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-apagado);opacity:1}",
    "html.mk #view .pq .jx-ic{width:44px;height:44px;border-radius:var(--r-sm);display:grid;place-items:center;background:color-mix(in srgb,var(--c,var(--p-azul)) 16%,var(--p-sup));box-shadow:none}",
    "html.mk #view .pq .jx-ic img{width:30px;height:30px}",
    /* para ti hoy: carrusel que se nota que sigue */
    "html.mk #view .pq-hoy .pq-c{display:block;margin:0;padding:0}",
    "html.mk #view .pq-hoy .jx-paras{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(248px,1fr);gap:var(--s-3);overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin:0;padding:0 0 var(--s-2);scroll-padding:0}",
    "html.mk #view .pq-hoy .jx-paras::-webkit-scrollbar{display:none}",
    "html.mk #view .pq-hoy .jx-para{" + RESET + ";scroll-snap-align:start;display:flex;flex-direction:column;justify-content:center;gap:var(--s-1);min-height:118px;padding:var(--s-4) var(--s-5);border-radius:var(--r-lg);background:var(--p-azul-btn);background-image:none;box-shadow:0 5px 0 var(--p-azul-r);color:#fff;text-align:left}",
    "html.mk #view .pq-hoy .jx-para *{color:#fff;opacity:1}",
    "html.mk #view .pq-hoy .jx-para small,html.mk #view .pq-hoy .jx-para em{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;font-style:normal}",
    "html.mk #view .pq-hoy .jx-para b{font:800 var(--t-lg)/1.2 var(--f-tit)}",
    "html.mk #view .pq-hoy .jx-para span{font:500 var(--t-sm)/1.35 var(--f-tx)}",
    "html.mk #view .pq-dos{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--s-4);align-items:start}",
    "html.mk #view .pq-lista{" + TARJETA + ";padding:var(--s-4)}",
    "html.mk #view .pq-lista .jx-row,html.mk #view .pq-lista button{" + RESET + ";background:none;text-align:left;display:flex;align-items:center;gap:var(--s-3);width:100%;min-height:60px;padding:var(--s-2);border-radius:var(--r-md);color:var(--p-tinta)}",
    "html.mk #view .pq-lista .jx-row:hover,html.mk #view .pq-lista button:hover{background:var(--p-sup-2)}",
    "html.mk #view .pq-lista .pq-c > button.jx-tile{background:none;background-image:none;box-shadow:none;border-radius:var(--r-md);min-height:60px;padding:var(--s-2);display:grid;grid-template-columns:44px minmax(0,1fr);column-gap:var(--s-3);row-gap:2px;align-items:center;transform:none}",
    "html.mk #view .pq-lista .pq-c > button.jx-tile > .jx-ic{grid-row:1 / span 2;grid-column:1}html.mk #view .pq-lista .pq-c > button.jx-tile > :not(.jx-ic){grid-column:2;margin:0;text-align:left}",
    "html.mk #view .pq-lista .jx-row{display:grid;grid-template-columns:44px minmax(0,1fr);column-gap:var(--s-3);row-gap:2px;align-items:center}",
    "html.mk #view .pq-lista .jx-row > .jx-ic{grid-row:1 / span 2;grid-column:1}",
    "html.mk #view .pq-lista .jx-row > :not(.jx-ic){grid-column:2;margin:0;text-align:left;white-space:normal;overflow:visible}",
    "html.mk #view .pq-lista .jx-row.off{opacity:1}html.mk #view .pq-lista .jx-row.off .jx-ic{filter:grayscale(1);opacity:.7}",
    "html.mk #view .pq-hab .pq-c > button{align-items:stretch}html.mk #view .pq-hab .pq-c > button .jx-rt > *{margin:0;text-align:left;align-self:stretch;justify-self:stretch}html.mk #view .pq-hab .pq-c > button > *{margin:0;text-align:left;align-self:stretch}html.mk #view .pq-hab .pq-c > button > .jx-ic{align-self:flex-start}",
    "html.mk #view .pq-lista b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);display:block}",
    "html.mk #view .pq-lista small{font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-apagado);opacity:1;display:block}",
    /* selector Práctica | Juegos y panel de juegos */
    "html[data-p5-sub=juegos] #view .jx.pq-on > .pq{display:none}",
    "html[data-p5-sub=juegos] #view .jx.pq-on > .jx-pan[data-p=juegos]{display:block}",
    "html.mk #view .jx-pan[data-p=juegos] .jx-h{display:flex;align-items:baseline;gap:var(--s-3);margin:var(--s-6) 0 var(--s-3)}",
    "html.mk #view .jx-pan[data-p=juegos] .jx-h h2{font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta);margin:0}",
    "html.mk #view .jx-pan[data-p=juegos] > *{max-width:none;box-sizing:border-box}","html.mk #view .jx-pan[data-p=juegos] .jx-dia,html.mk #view .jx-pan[data-p=juegos] .jx-hero{width:100%}","html.mk #view .jx-pan[data-p=juegos] .jx-h small{font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}");

  /* ====================================================================== 8. 1 VS 1 Y RANKING */
  o("html.mk #view .dv{margin:0 0 var(--s-7);padding:0}",
    "html.mk #view .dv-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-3)}",
    "html.mk #view .dv-c{border-radius:var(--r-lg);min-height:150px;padding:var(--s-4);border:0;box-shadow:0 5px 0 rgba(0,0,0,.22)}",
    "html.mk #view .dv-c:active{" + HUNDE + "}",
    "html.mk #view .dv-c b{font-family:var(--f-tit)}",
    "html.mk #view .rkv{margin:0 auto;max-width:720px;padding:0;background:none;box-shadow:none;border:0;position:static;-webkit-backdrop-filter:none;backdrop-filter:none}",
    "html.mk #view .rkv .rkx-hero{border-radius:var(--r-lg);background:var(--p-azul-btn);background-image:none;box-shadow:0 5px 0 var(--p-azul-r);color:#fff;padding:var(--s-5);margin:0 0 var(--s-4)}",
    "html.mk #view .rkv .rkx-hero h1,html.mk #view .rkv .rkx-hero p{color:#fff}",
    "html.mk #view .rkv .rkx-hero h1{font:800 var(--t-xl)/1.2 var(--f-tit)}",
    "html.mk #view .rkv .rkx-fin{background:var(--p-oro);color:var(--p-sobre-oro);font-weight:700;border-radius:var(--r-pill)}",
    "html.mk #view .rkv .rkx-cuerpo{" + TARJETA + ";padding:var(--s-4)}",
    "html.mk #view .rkv .rkx-vacio p{color:var(--p-tinta-2);font:500 var(--t-md)/1.45 var(--f-tx)}",
    "html.mk #view .rkv .rkx-vacio b,html.mk #view .rkv .rkx-vacio h2,html.mk #view .rkv .rkx-vacio h3{color:var(--p-tinta);font-family:var(--f-tit)}",
    "@media (min-width:1024px){html.rl-on #view:has(> .dv){display:block}html.rl-on:not(.rk-solo) #view:has(> .dv) > .rkv{position:static;max-width:none;top:auto}html.mk #view .dv-c{min-height:170px}}",
    "@media (max-width:359.98px){html.mk #view .dv-g{grid-template-columns:1fr}}");

  /* ====================================================================== 9. TIENDA */
  o("html.mk #view .tn{display:block;padding:0}",
    "html.mk #view .tn .tn-h{position:static;display:flex;flex-direction:row;align-items:center;gap:var(--s-4);width:auto;margin:0 0 var(--s-5);padding:var(--s-4) var(--s-5);text-align:left;" + TARJETA + "}",
    "html.mk #view .tn .tn-h .tn-yo{flex:none;width:76px;height:76px;margin:0;border-radius:50%;background:var(--p-azul-p);display:grid;place-items:center;overflow:hidden}",
    "html.mk #view .tn .tn-h .tn-yo svg{width:66px;height:66px}",
    "html.mk #view .tn .tn-h > div{flex:1 1 150px;min-width:0;text-align:left}",
    "html.mk #view .tn .tn-h h1{margin:0;font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .tn .tn-h p{margin:var(--s-1) 0 0;font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .tn .tn-h small,html.mk #view .tn .tn-h em{color:var(--p-azul-tx);font-style:normal}",
    "html.mk #view .tn .tn-saldo{flex:none;display:inline-flex;align-items:center;gap:6px;width:auto;min-height:44px;margin:0;padding:0 var(--s-4);border-radius:var(--r-pill);background:var(--p-oro-p);box-shadow:inset 0 0 0 1.5px var(--p-oro-r);color:var(--p-oro-tx);font:800 var(--t-lg)/1 var(--f-tit)}",
    "html.mk #view .tn .tn-saldo *{color:inherit}html.mk #view .tn .tn-saldo small{font:600 var(--t-xs)/1 var(--f-tx);text-transform:uppercase;letter-spacing:.06em}",
    "html.mk #view .tn .tn-tabs{max-width:460px;margin:0 0 var(--s-4);width:auto}",
    "html.mk #view .tn .tn-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--s-3);margin:0}",
    "html.mk #view .tn .tn-i{all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:var(--s-2);padding:0 0 var(--s-3);overflow:hidden;text-align:center;" + TARJETA + "}",
    "html.mk #view .tn .tn-i:active{" + HUNDE + "}",
    "html.mk #view .tn .tn-i .tn-gato{display:grid;place-items:center;width:100%;height:104px;background:var(--p-sup-2);border-radius:0}",
    "html.mk #view .tn .tn-i .tn-gato[data-p5-obj='1']{filter:none;opacity:1;background:var(--p-placa)}",
    "html.mk #view .tn .tn-i .tn-gato .p5-obj{width:auto;height:76%;max-width:76%;display:block;overflow:visible;filter:drop-shadow(0 4px 5px rgba(11,31,92,.22))}",
    "html.mk #view .tn .tn-i:not(.mio) .tn-gato[data-p5-obj='1'] .p5-obj{filter:grayscale(.45) opacity(.85)}",
    "html.mk #view .tn .tn-i b{font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta);padding:0 var(--s-2)}",
    "html.mk #view .tn .tn-i em,html.mk #view .tn .tn-i small{display:inline-flex;align-items:center;gap:4px;min-height:26px;padding:0 var(--s-3);border-radius:var(--r-pill);background:var(--p-sup-3);color:var(--p-tinta-2);font:700 var(--t-xs)/1 var(--f-tx);font-style:normal;white-space:nowrap;max-width:calc(100% - 16px);overflow:hidden;text-overflow:ellipsis}",
    "html.mk #view .tn .tn-i.mio em,html.mk #view .tn .tn-i.mio small{background:var(--p-verde-p);color:var(--p-verde-tx)}",
    "html.mk #view .tn .tn-i.on{box-shadow:inset 0 0 0 2.5px var(--p-oro-r),0 3px 0 var(--p-oro-r)}",
    "html.mk #view .tn .tn-i.on em,html.mk #view .tn .tn-i.on small{background:var(--p-oro);color:var(--p-sobre-oro)}",
    "html.mk #view .tn .tn-nota{margin:var(--s-5) 0 0;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-apagado)}",
    "@media (max-width:479.98px){html.mk #view .tn .tn-h{flex-wrap:wrap}html.mk #view .tn .tn-g{grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s-2)}html.mk #view .tn .tn-i .tn-gato{height:88px}}",
    "@media (max-width:339.98px){html.mk #view .tn .tn-g{grid-template-columns:repeat(2,minmax(0,1fr))}}");

  /* ====================================================================== 10. PERFIL */
  o("html.mk #view .gperfil{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-4);padding:0;align-items:start}",
    "html.mk #view .gperfil > *{min-width:0;margin:0;grid-column:1;grid-row:auto;position:relative;top:auto;align-self:start;width:auto;max-width:none}",
    "html.mk #view .gperfil .prof-head{position:relative;overflow:hidden;padding:0 var(--s-5) var(--s-5);text-align:center}",
    /* la foto de cabecera vive DENTRO de la tarjeta: nada de franjas a todo lo ancho */
    "html.mk #view .gperfil .prof-head .ph-bg{position:relative;inset:auto;left:auto;top:auto;display:block;width:calc(100% + var(--s-5) * 2);max-width:none;height:112px;margin:0 calc(var(--s-5) * -1);border-radius:0;background-size:cover;background-position:50% 30%;opacity:1;transform:none;mask:none;-webkit-mask:none}",
    "html.mk #view .gperfil .prof-head .ph-avw{position:relative;margin:-56px auto var(--s-2);width:112px;height:112px}",
    "html.mk #view .gperfil .prof-head .ph-av{width:112px;height:112px;border-radius:50%;background:var(--p-sup);box-shadow:0 0 0 5px var(--p-sup),0 0 0 6.5px var(--p-linea);overflow:hidden}",
    "html.mk #view .gperfil .prof-head .ph-edit{width:44px;height:44px;right:-10px;bottom:-6px;border-radius:50%;background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r);border:0}",
    "html.mk #view .gperfil .prof-head h1{margin:0;font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .gperfil .prof-head .ph-sub{margin:var(--s-1) 0 var(--s-4);font:500 var(--t-md)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .gperfil .ph-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--s-2)}",
    "html.mk #view .gperfil .ph-stats > span{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:84px;padding:var(--s-2);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;color:var(--p-tinta);font:500 var(--t-xs)/1.2 var(--f-tx)}",
    "html.mk #view .gperfil .ph-stats > span b{font:800 var(--t-lg)/1.1 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .gperfil .ph-stats > span small,html.mk #view .gperfil .ph-stats > span em{color:var(--p-apagado);font-style:normal}",
    "html.mk #view .gperfil .ph-stats svg{width:20px;height:20px;color:var(--p-azul-tx)}",
    "html.mk #view .gperfil .gcard{padding:var(--s-5)}",
    "html.mk #view .gperfil .gcard.prof-head{padding:0 var(--s-5) var(--s-5)}",
    "html.mk #view .gperfil .gcard h2{margin:0 0 var(--s-3);font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .gperfil .av-pg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--s-2)}",
    "html.mk #view .gperfil .av-pg > div{background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;border-radius:var(--r-md);color:var(--p-tinta);padding:var(--s-3) var(--s-1);text-align:center}",
    "html.mk #view .gperfil .av-pg > div span{color:var(--p-apagado);font:500 var(--t-xs)/1.2 var(--f-tx)}",
    "html.mk #view .gperfil .av-ring{background:var(--p-oro);color:var(--p-sobre-oro);box-shadow:0 3px 0 var(--p-oro-r);border:0;font-family:var(--f-tit);font-weight:800}",
    "html.mk #view .gperfil .ptabs{margin:0;overflow-x:auto;scrollbar-width:none}",
    "html.mk #view .gperfil .ptabs::-webkit-scrollbar{display:none}",
    "html.mk #view .gperfil .ptabs > button{flex:1 0 auto;min-width:84px}",
    "html.mk #view .gperfil .ptab-body{display:grid;gap:var(--s-4);min-width:0}",
    "html.mk #view .gperfil .ptab-body > *{margin:0;min-width:0}",
    "html.mk #view .gperfil .cust{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-4)}",
    "html.mk #view .gperfil .cust-prev{width:100%;max-width:300px;aspect-ratio:1;height:auto;margin:0 auto;border-radius:var(--r-lg);overflow:hidden}",
    "html.mk #view .gperfil .cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:var(--s-2)}",
    "html.mk #view .gperfil .cgrid > *{background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;border-radius:var(--r-md);color:var(--p-tinta)}",
    "html.mk #view .gperfil .cgrid > .on,html.mk #view .gperfil .cgrid > [aria-pressed=true],html.mk #view .gperfil .cgrid > .sel{box-shadow:inset 0 0 0 2.5px var(--p-azul);background:var(--p-azul-p)}",
    "html.mk #view .gperfil .gfield input,html.mk #view .gperfil input[type=text]{background:var(--p-sup-2);color:var(--p-tinta);border:0;box-shadow:inset 0 0 0 1.5px var(--p-linea);border-radius:var(--r-sm);min-height:48px;font:600 var(--t-md)/1 var(--f-tx)}",
    /* evolución: fila que se desplaza dentro de su tarjeta, no fuera de la pantalla */
    "html.mk #view .gperfil .evo{overflow:hidden}",
    "html.mk #view .gperfil .evo-row{display:flex;align-items:center;gap:var(--s-2);overflow-x:auto;scrollbar-width:thin;padding:0 0 var(--s-2);margin:0}",
    "html.mk #view .gperfil .evo-i{flex:none;background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;border-radius:var(--r-md);color:var(--p-tinta)}",
    "html.mk #view .gperfil .evo-i.ok{background:var(--p-azul-p)}",
    "html.mk #view .gperfil .pa-grid button{background:var(--p-sup-2);color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);border:0;border-radius:var(--r-sm);min-height:48px;font:700 var(--t-md)/1 var(--f-tit)}",
    "html.mk #view .gperfil .pa-grid button.on,html.mk #view .gperfil .pa-grid button[aria-pressed=true]{background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r)}",
    "html.mk #view .gperfil > .ptabs{order:1}html.mk #view .gperfil > .ptab-body{order:2}html.mk #view .gperfil > .av-prog,html.mk #view .gperfil > .plx-acad{order:3}",
    "@media (max-width:419.98px){html.mk #view .gperfil .ph-stats,html.mk #view .gperfil .av-pg{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    "@media (min-width:1760px){html.mk #view .gperfil{grid-template-columns:320px minmax(0,1fr)}html.mk #view .gperfil > .prof-head,html.mk #view .gperfil > .av-prog,html.mk #view .gperfil > .plx-acad{grid-column:1}html.mk #view .gperfil > .ptabs,html.mk #view .gperfil > .ptab-body{grid-column:2}html.mk #view .gperfil > .ptabs{grid-row:1}html.mk #view .gperfil > .ptab-body{grid-row:2 / span 6}html.mk #view .gperfil > *{order:0}html.mk #view .gperfil .ph-stats,html.mk #view .gperfil .av-pg{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    "@media (min-width:1024px){html.mk #view .gperfil .cust{grid-template-columns:260px minmax(0,1fr)}}",
    "html.mk #view .plx-legal{margin:var(--s-6) 0 var(--s-3);text-align:center;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .plx-legal a{color:var(--p-azul-tx);display:inline-block;padding:var(--s-2)}",
    "html.mk #view .plx69-siguenos{" + TARJETA + ";padding:var(--s-4) var(--s-5)}",
    "html.mk #view .plx69-siguenos h3{color:var(--p-tinta)}html.mk #view .plx69-siguenos p{color:var(--p-tinta-2)}");

  /* ====================================================================== 11. CURSO (LECCIONES) */
  o("html.mk #view .lx2{display:grid;gap:var(--s-4)}",
    "html.mk #view .lx2 .lx-curso{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);min-height:60px;padding:var(--s-2) var(--s-1)}",
    "html.mk #view .lx2 .lx-curso small{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-azul-tx);display:block}",
    "html.mk #view .lx2 .lx-curso b{font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta);display:block}",
    "html.mk #view .lx2 .lx-next{position:relative;display:flex;align-items:flex-end;gap:var(--s-3);min-height:0;padding:var(--s-5);overflow:hidden;border-radius:var(--r-lg);background:var(--p-azul-btn);background-image:none;box-shadow:0 5px 0 var(--p-azul-r);color:#fff;border:0}",
    "html.mk #view .lx2 .lx-next::before,html.mk #view .lx2 .lx-next::after{display:none}",
    /* la profesora: recorte desde la cabeza, apoyada abajo, sin cortarse */
    "html.mk #view .lx2 .lx-next .lx-next-pf{position:relative;inset:auto;flex:none;align-self:flex-end;width:104px;height:150px;margin:0 0 calc(var(--s-5) * -1) 0;object-fit:cover;object-position:50% 0;transform:none;filter:none}",
    "html.mk #view .lx2 .lx-next .lx-next-tx{flex:1;min-width:0;display:grid;gap:var(--s-1);padding:0;color:#fff}",
    "html.mk #view .lx2 .lx-next .lx-next-tx *{color:#fff;-webkit-text-fill-color:#fff}",
    "html.mk #view .lx2 .lx-next .lx-next-tx small:first-child,html.mk #view .lx2 .lx-next .lx-next-tx em{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;font-style:normal;opacity:.92}",
    "html.mk #view .lx2 .lx-next .lx-next-tx b,html.mk #view .lx2 .lx-next .lx-next-tx h2{font:800 var(--t-xl)/1.2 var(--f-tit);margin:0}",
    "html.mk #view .lx2 .lx-next .lx-next-tx span,html.mk #view .lx2 .lx-next .lx-next-tx small{font:500 var(--t-sm)/1.35 var(--f-tx);opacity:.95}",
    "html.mk #view .lx2 .lx-go{" + BTNX + ";" + ORO + ";justify-self:start;margin-top:var(--s-3)}",
    "html.mk #view .lx2 .lx-go:active{" + HUNDE + "}",
    "html.mk #view .lx2 .lx-prog{display:flex;align-items:center;gap:var(--s-5);padding:var(--s-3) var(--s-5);" + TARJETA + "}",
    "html.mk #view .lx2 .lx-prog b{font:800 var(--t-lg)/1.1 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .lx2 .lx-prog small,html.mk #view .lx2 .lx-prog span{font:500 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .lx2 .lx-pbar{flex:1;min-width:0}html.mk #view .lx2 .lx-pbar > span:first-child{display:block;height:10px;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden}",
    "html.mk #view .lx2 .lx-pbar > span:first-child > *{display:block;height:100%;border-radius:var(--r-pill);background:var(--p-verde)}",
    "html.mk #view .lx2 .lx-h{display:flex;align-items:baseline;gap:var(--s-3);margin:var(--s-3) 0 0}",
    "html.mk #view .lx2 .lx-h h2{margin:0;font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .lx2 .lx-h small,html.mk #view .lx2 .lx-h span{font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .lx2 .lx-us{display:grid;gap:var(--s-3)}",
    "html.mk #view .lx2 .lx-u{" + TARJETA + ";overflow:hidden;padding:0}",
    "html.mk #view .lx2 .lx-uh{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:var(--s-3);width:100%;min-height:68px;padding:var(--s-3) var(--s-4);color:var(--p-tinta)}",
    "html.mk #view .lx2 .lx-un{flex:none;width:40px;height:40px;display:grid;place-items:center;border-radius:var(--r-sm);background:var(--p-sup-3);color:var(--p-tinta-2);font:800 var(--t-md)/1 var(--f-tit);box-shadow:none}",
    "html.mk #view .lx2 .lx-u.completa .lx-un{background:var(--p-verde-btn);color:#fff}",
    "html.mk #view .lx2 .lx-u.actual .lx-un{background:var(--p-azul-btn);color:#fff}",
    "html.mk #view .lx2 .lx-ut{flex:1;min-width:0;display:grid;gap:2px}",
    "html.mk #view .lx2 .lx-ut small{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.06em;color:var(--p-apagado)}",
    "html.mk #view .lx2 .lx-u.actual .lx-ut small{color:var(--p-azul-tx)}",
    "html.mk #view .lx2 .lx-ut b{font:700 var(--t-md)/1.25 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .lx2 .lx-uc{flex:none;font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-apagado);display:inline-flex;align-items:center;gap:var(--s-2)}",
    "html.mk #view .lx2 .lx-ub{padding:0 var(--s-3) var(--s-3);background:none;border:0}",
    "html.mk #view .lx2 .lx-ubar{display:block;height:4px;border-radius:var(--r-pill);background:var(--p-pista);margin:0 var(--s-1) var(--s-3)}",
    "html.mk #view .lx2 .lx-ub ol{display:grid;gap:var(--s-2);margin:0;padding:0;list-style:none}",
    "html.mk #view .lx2 .lx-ub li > button,html.mk #view .lx2 .lx-ub li > a,html.mk #view .lx2 .lx-ub .lx-l{background:var(--p-sup-2);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;border-radius:var(--r-md);color:var(--p-tinta);min-height:60px}",
    "html.mk #view .lx2 .lx-ub li.sig > button,html.mk #view .lx2 .lx-ub li > button.sig,html.mk #view .lx2 .lx-ub .lx-l.sig{background:var(--p-azul-p);box-shadow:inset 0 0 0 2px var(--p-azul)}",
    "html.mk #view .lx2 .lx-ub li b{font:700 var(--t-md)/1.25 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .lx2 .lx-ub li small{font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-apagado);opacity:1}",
    "@media (max-width:379.98px){html.mk #view .lx2 .lx-next .lx-next-pf{width:84px;height:128px}}");

  /* ====================================================================== 12. AJUSTES, MODALES Y AVISOS */
  o("html.mk .gmodal{background:var(--p-velo);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);padding:calc(var(--sat) + var(--s-4)) var(--s-4) calc(var(--sab) + var(--s-4));display:flex;align-items:center;justify-content:center}",
    "html.mk .gmodal .gm-card{background:var(--p-sup);background-image:none;color:var(--p-tinta);border:0;border-radius:var(--r-xl);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 30px 60px -30px rgba(0,0,0,.6);max-height:calc(100dvh - var(--sat) - var(--sab) - var(--s-7));width:min(460px,100%);overflow:hidden;display:flex;flex-direction:column;font-family:var(--f-tx)}",
    "html.mk .gmodal .gm-card h2,html.mk .gmodal .gm-card h3,html.mk .gmodal .gm-t{font-family:var(--f-tit);color:var(--p-tinta)}",
    "html.mk .gmodal .gm-card p{color:var(--p-tinta-2)}",
    "html.mk .gmodal .aj{display:flex;flex-direction:column;min-height:0;overflow-y:auto;padding:0;background:none;color:var(--p-tinta)}",
    "html.mk .gmodal .aj-top{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-5);background:var(--p-azul-p);background-image:none;color:var(--p-tinta);border-radius:0;margin:0}",
    "html.mk .gmodal .aj-top .aj-gato{flex:none;width:56px;height:56px;border-radius:50%;background:var(--p-sup);overflow:hidden;display:grid;place-items:center;box-shadow:none}",
    "html.mk .gmodal .aj-top h2{margin:0;font:800 var(--t-xl)/1.15 var(--f-tit);color:var(--p-tinta)}",
    "html.mk .gmodal .aj-top .aj-nv{display:inline-flex;margin-top:var(--s-1);padding:4px var(--s-3);border-radius:var(--r-pill);background:var(--p-sup);color:var(--p-azul-tx);font:700 var(--t-xs)/1.2 var(--f-tx)}",
    "html.mk .gmodal .aj-h{margin:var(--s-5) var(--s-5) var(--s-2);font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-apagado);text-align:left}",
    "html.mk .gmodal .qs{margin:0 var(--s-4)}","html.mk .qs{padding:0;border-radius:var(--r-lg);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;overflow:hidden}",
    "html.mk .qs-row{display:flex;align-items:center;gap:var(--s-3);min-height:60px;padding:var(--s-2) var(--s-4);border:0;border-bottom:1.5px solid var(--p-linea);background:none;color:var(--p-tinta)}",
    "html.mk .qs-row:last-child{border-bottom:0}",
    "html.mk .qs-row.col{flex-direction:row;flex-wrap:wrap;align-items:center}",
    "html.mk .qs-row > div:not(.qs-seg){flex:1;min-width:0}",
    "html.mk .qs-row b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);display:block}",
    "html.mk .qs-row small{font:500 var(--t-xs)/1.3 var(--f-tx);color:var(--p-apagado);display:block}",
    "html.mk .qs-sw{all:unset;box-sizing:border-box;cursor:pointer;flex:none;position:relative;width:54px;height:32px;border-radius:var(--r-pill);background:var(--p-sup-3);box-shadow:inset 0 0 0 1.5px var(--p-linea);transition:background .15s}",
    "html.mk .qs-sw::after{content:'';position:absolute;left:4px;top:4px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.25);transition:transform .15s}",
    "html.mk .qs-sw > *{display:none}",
    "html.mk .qs-sw[aria-checked=true],html.mk .qs-sw.on{background:var(--p-verde-btn);box-shadow:none}",
    "html.mk .qs-sw[aria-checked=true]::after,html.mk .qs-sw.on::after{transform:translateX(22px)}",
    "html.mk .qs-seg{flex:1 1 100%;width:100%;min-width:0;grid-column:auto;display:flex;gap:var(--s-1);padding:var(--s-1);margin:0 0 var(--s-2);border-radius:var(--r-md);background:var(--p-sup-3);box-shadow:none;border:0}",
    "html.mk .qs-seg > button{all:unset;box-sizing:border-box;cursor:pointer;flex:1 1 0;min-height:44px;display:flex;align-items:center;justify-content:center;gap:6px;border-radius:var(--r-sm);font:600 var(--t-sm)/1.1 var(--f-tx);color:var(--p-tinta-2);text-align:center;flex-direction:row}",
    "html.mk .qs-seg > button[aria-pressed=true],html.mk .qs-seg > button.on,html.mk .qs-seg > button[aria-checked=true]{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
    "html.mk .gmodal .plx69-redes{display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2);margin:0 var(--s-4)}",
    "html.mk .gmodal .plx69-redes .rs,html.mk #view .plx69-redes .rs{min-height:48px;border-radius:var(--r-md);box-shadow:0 3px 0 rgba(0,0,0,.2)}",
    "html.mk .gmodal .aj-cuenta{display:flex;flex-wrap:wrap;gap:var(--s-2);margin:0 var(--s-4)}",
    "html.mk .gmodal .aj-pie{margin:var(--s-4) var(--s-5) 0;font:500 var(--t-xs)/1.4 var(--f-tx);color:var(--p-apagado);text-align:center}",
    "html.mk .gmodal .aj-pie a{color:var(--p-azul-tx);display:inline-block;padding:var(--s-2) var(--s-1)}",
    "html.mk .gmodal .aj .set-row.c{position:sticky;bottom:0;margin:var(--s-3) 0 0;padding:var(--s-3) var(--s-4) var(--s-4);background:var(--p-sup);box-shadow:inset 0 1.5px 0 var(--p-linea);border:0;display:flex;justify-content:center}",
    "html.mk .gmodal .aj .aj-listo{width:100%;max-width:280px}",
    /* avisos */
    "html.mk .toast,html.mk #toast,html.mk .plx-upd{background:var(--p-marino);color:#fff;border:0;border-radius:var(--r-md);box-shadow:0 14px 30px -14px rgba(0,0,0,.6);font:600 var(--t-sm)/1.3 var(--f-tx)}",
    "@media (max-width:1023.98px){html.mk .toast,html.mk #toast,html.mk .plx-upd{bottom:calc(var(--p-barra) + var(--sab) + var(--s-6))}}",
    /* menú del avatar */
    "html.mk .pm,html.mk .px-menu,html.mk .av-menu{background:var(--p-sup);color:var(--p-tinta);border:0;border-radius:var(--r-lg);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 24px 50px -24px rgba(0,0,0,.55);padding:var(--s-2)}",
    "html.mk .pm [data-pm],html.mk .px-menu button,html.mk .av-menu button{min-height:48px;border-radius:var(--r-sm);color:var(--p-tinta);font:600 var(--t-md)/1.1 var(--f-tx);background:none}",
    "html.mk .pm [data-pm]:hover,html.mk .px-menu button:hover,html.mk .av-menu button:hover{background:var(--p-sup-2)}");

  /* ====================================================================== 13. PLEX QUIZ, PORTADA DE JUEGOS Y DIAGNÓSTICO (siguen el tema) */
  o("html.mk .kq{background:var(--p-bg);background-image:none;color:var(--p-tinta);font-family:var(--f-tx)}",
    "html.mk .kq-top{padding:calc(var(--sat) + var(--s-2)) var(--s-4) var(--s-2);background:none;color:var(--p-tinta);min-height:0;display:flex;align-items:center;gap:var(--s-3)}",
    "html.mk .kq-top *{color:var(--p-tinta)}",
    "html.mk .kq-x,html.mk .dgx-x,html.mk .plxg:not(.plxg-juego) .hb-top .plxg-ib{" + RESET + ";padding:0;flex:none;width:44px;height:44px;border-radius:50%;background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta-2);font:700 var(--t-md)/1 var(--f-tx)}",
    "html.mk .kq-body{padding:var(--s-2) var(--s-4) calc(var(--sab) + var(--s-7));max-width:760px;margin:0 auto;width:100%;box-sizing:border-box}",
    "html.mk .kq-hero h1{font:800 var(--t-3xl)/1.1 var(--f-tit);color:var(--p-tinta);margin:var(--s-2) 0}",
    "html.mk .kq-hero p{font:500 var(--t-md)/1.45 var(--f-tx);color:var(--p-tinta-2);margin:0}",
    "html.mk .kq-modos{display:grid;gap:var(--s-3)}",
    "html.mk .kq-modo{border:0;border-radius:var(--r-lg);min-height:72px;box-shadow:0 5px 0 rgba(0,0,0,.25);font-family:var(--f-tx)}",
    "html.mk .kq-modo:active{" + HUNDE + "}",
    "html.mk .kq-modo b{font-family:var(--f-tit)}","html.mk .kq-modo,html.mk .kq-modo *{color:#fff}",
    "html.mk .kq-pin,html.mk .kq-stats > div,html.mk .kq-pr{" + TARJETA + "}",
    "html.mk .kq-pin{padding:var(--s-4)}html.mk .kq-pin label{color:var(--p-tinta);font:700 var(--t-md)/1.2 var(--f-tit)}",
    "html.mk .kq-pin > div{display:flex;gap:var(--s-2)}",
    "html.mk .kq-pin input{flex:1;min-width:0;min-height:48px;background:var(--p-sup-2);color:var(--p-tinta);border:0;border-radius:var(--r-sm);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "html.mk .kq-btn{" + BTNX + ";" + AZUL + "}html.mk .kq-btn:active{" + HUNDE + "}html.mk .kq-btn.sm{padding:0 var(--s-4)}",
    "html.mk .kq-stats > div,html.mk .kq-stats > div *{color:var(--p-apagado);opacity:1}html.mk .kq-stats > div b{color:var(--p-tinta);font-family:var(--f-tit)}",
    "html.mk .kq-h{color:var(--p-tinta);font:800 var(--t-lg)/1.2 var(--f-tit)}html.mk .kq-h small{color:var(--p-apagado)}",
    "html.mk .kq-pr,html.mk .kq-pr b{color:var(--p-tinta);opacity:1}html.mk .kq-pr small,html.mk .kq-pr em{color:var(--p-apagado);opacity:1}",
    "@media (min-width:1024px){html.mk .kq-body{max-width:1040px}}",
    /* portada y resultados de los juegos */
    "html.mk .plxg:not(.plxg-juego){background:var(--p-bg);background-image:none;color:var(--p-tinta);font-family:var(--f-tx)}",
    "html.mk .plxg .plxg-wrap.pt,html.mk .plxg .plxg-wrap.res{padding-top:calc(var(--sat) + var(--s-4));padding-bottom:calc(var(--sab) + var(--s-9) + var(--s-7))}",
    "html.mk .plxg .hb-top .plxg-k{color:var(--p-apagado);font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase}",
    "html.mk .plxg .pt5-hero,html.mk .plxg .res5-hero{border-radius:var(--r-xl);box-shadow:0 6px 0 rgba(0,0,0,.2);overflow:hidden}",
    "html.mk .plxg .pt5-hero h1,html.mk .plxg .res5-hero h1{font-family:var(--f-tit);font-weight:800}",
    "html.mk .plxg .ev-benef,html.mk .plxg .pt5-reglas,html.mk .plxg .pt-rec,html.mk .plxg .pt-sw,html.mk .plxg .res-c,html.mk .plxg .res5-c{" + TARJETA + "}",
    "html.mk .plxg .ev-benef h3,html.mk .plxg .pt5-reglas h3{color:var(--p-apagado);font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase}",
    "html.mk .plxg .ev-benef p,html.mk .plxg .pt5-reglas li,html.mk .plxg .pt-rec p{color:var(--p-tinta);font:500 var(--t-md)/1.45 var(--f-tx)}",
    "html.mk .plxg .pt-sw{color:var(--p-tinta);min-height:60px}html.mk .plxg .pt-sw small{color:var(--p-apagado)}html.mk .plxg .pt-sw b{color:var(--p-tinta);font-family:var(--f-tit)}",
    "html.mk .plxg .pt-reglas li::before{background:var(--p-oro);color:var(--p-sobre-oro);box-shadow:none}",
    "html.mk .plxg .plxg-btn{" + BTNX + ";" + AZUL + ";min-height:56px;font-size:var(--t-lg)}html.mk .plxg .plxg-btn:active{" + HUNDE + "}",
    /* «Jugar» fijo abajo sobre una base opaca: no deja texto a medias detrás */
    "@media (max-width:1023.98px){html.mk .plxg .plxg-btn.pt-go{position:fixed;left:var(--s-4);right:var(--s-4);bottom:calc(var(--sab) + var(--s-4));width:auto;z-index:5}html.mk .plxg:has(.pt-go)::after{content:'';position:fixed;left:0;right:0;bottom:0;height:calc(var(--sab) + 56px + var(--s-7));background:linear-gradient(180deg,transparent,var(--p-bg) 34%);pointer-events:none;z-index:4}}",
    /* diagnóstico */
    "html.mk .dgx{background:var(--p-bg);background-image:none;color:var(--p-tinta);font-family:var(--f-tx)}",
    "html.mk .dgx-top{padding:calc(var(--sat) + var(--s-2)) var(--s-4) var(--s-2);background:none;color:var(--p-tinta);border:0}",
    "html.mk .dgx-top *{color:var(--p-tinta)}",
    "html.mk .dgx-top > span:last-child{color:var(--p-apagado);font:600 var(--t-sm)/1 var(--f-tx)}",
    "html.mk .dg2-prog{gap:var(--s-1);padding:0 var(--s-4)}",
    "html.mk .dg2-prog > span{background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;border-radius:var(--r-sm);color:var(--p-apagado);min-height:36px}",
    "html.mk .dg2-portada{border-radius:var(--r-xl);box-shadow:0 6px 0 var(--p-azul-r);background:var(--p-azul-btn)}",
    "html.mk .dg2-portada h1{font-family:var(--f-tit);font-weight:800;color:#fff}",
    "html.mk .dg2-lead{color:var(--p-tinta-2);font:500 var(--t-md)/1.5 var(--f-tx)}",
    "html.mk .dg2-plan li{" + TARJETA + "}",
    "html.mk .dg2-plan li b{color:var(--p-tinta);font-family:var(--f-tit)}html.mk .dg2-plan li p,html.mk .dg2-plan li span{color:var(--p-tinta-2)}",
    "html.mk .dgx-nota{color:var(--p-apagado)}",
    "html.mk .dgx-pie{background:var(--p-vidrio-solido);box-shadow:inset 0 1.5px 0 var(--p-linea);border:0;padding-bottom:calc(var(--sab) + var(--s-2))}",
    "html.mk .dgx-pie .dgx-wrap{display:grid;gap:var(--s-3);padding-top:var(--s-3);padding-bottom:var(--s-2)}",
    "html.mk .dgx-pie .gbtn{min-height:52px;white-space:normal;padding:var(--s-2) var(--s-4);line-height:1.2}");

  /* ====================================================================== 16. RECORRIDO (4.2): compacto, como el de Duolingo
     Un cartel fijo que cambia de color y de título con la unidad por la que pasas, nodos redondos y juntos que serpentean,
     separadores finos con el nombre de la unidad, Manzana de adorno junto al camino y un botón para volver a tu lección. */
  o("html.mk .ghome .mp .mp-cam,html.mk .ghome .mp .mp-sig,#cz .cz-sec,#cz .cz-map,#cz .cz-top,#cz .cz-go{display:none}",
    ".p5-curso{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:var(--s-3);width:100%;min-height:48px;padding:6px var(--s-3);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);font-family:var(--f-tx)}",
    ".p5-curso:active{transform:translateY(1px)}",
    ".p5-curso img{flex:none;width:26px;height:26px}",
    ".p5-curso > span{flex:1;min-width:0;display:flex;align-items:baseline;gap:var(--s-2);flex-wrap:wrap}",
    ".p5-curso b{font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-curso small{font:600 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".p5-curso em{flex:none;font:700 var(--t-xs)/1 var(--f-tx);font-style:normal;color:var(--p-azul-tx);padding:7px var(--s-3);border-radius:var(--r-pill);background:var(--p-azul-p)}",
    /* color de cada unidad (cara, relieve y texto) */
    ".p5-ruta,.p5-u,.p5-ban{--uc:var(--p-azul-btn);--ur:var(--p-azul-r);--ut:#fff}",
    "[data-c='1']{--uc:var(--p-verde-btn);--ur:var(--p-verde-r);--ut:#fff}",
    "[data-c='2']{--uc:var(--p-rosa-btn);--ur:var(--p-rosa-r);--ut:#fff}",
    "[data-c='3']{--uc:var(--p-oro);--ur:var(--p-oro-r);--ut:var(--p-sobre-oro)}",
    "[data-c='4']{--uc:var(--p-rojo-btn);--ur:var(--p-rojo-r);--ut:#fff}",
    "[data-c='5']{--uc:#0B7F86;--ur:#085D63;--ut:#fff}",
    ".p5-ruta{position:relative;display:block;padding:0 0 var(--s-7);font-family:var(--f-tx)}",
    /* cartel fijo */
    ".p5-ban{position:sticky;z-index:7;top:calc(var(--sat) + var(--p-cab) + var(--s-5));display:flex;align-items:stretch;min-height:62px;margin:0 0 var(--s-4);border-radius:var(--r-md);background:var(--uc);box-shadow:0 4px 0 var(--ur);color:var(--ut);overflow:hidden;transition:background .25s,box-shadow .25s}",
    ".p5-ban > span{flex:1;min-width:0;display:grid;align-content:center;gap:3px;padding:var(--s-2) var(--s-4)}",
    ".p5-ban small{font:800 .7rem/1.1 var(--f-tx);letter-spacing:.08em;text-transform:uppercase;color:var(--ut);opacity:.86}",
    ".p5-ban b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--ut);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".p5-ban button{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:58px;display:grid;place-items:center;color:var(--ut);border-left:2px solid var(--ur)}",
    ".p5-ban button svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}",
    ".p5-ban button:active{background:var(--ur)}",
    "@media (min-width:1024px){.p5-ban{top:var(--s-4)}}",
    /* unidades y separadores */
    ".p5-u{position:relative;display:block;padding:0}",
    ".p5-sep{display:flex;align-items:center;gap:var(--s-4);margin:var(--s-6) 0 var(--s-5);font:600 var(--t-sm)/1.25 var(--f-tx);color:var(--p-apagado);text-align:center}",
    ".p5-sep::before,.p5-sep::after{content:'';flex:1;min-width:24px;height:2px;border-radius:2px;background:var(--p-linea)}",
    ".p5-sep span{max-width:64%}",
    ".p5-ns{position:relative;display:flex;flex-direction:column;align-items:center;gap:14px;padding:var(--s-2) 0 var(--s-3)}",
    ".p5-n{position:relative;display:flex;flex-direction:column;align-items:center;transform:translateX(var(--dx,0px))}",
    /* nodos: redondos, pequeños, con relieve */
    ".p5-nodo{all:unset;box-sizing:border-box;cursor:pointer;width:62px;height:56px;border-radius:50%;display:grid;place-items:center;-webkit-tap-highlight-color:transparent;transition:transform .08s;background:var(--p-sup-3);box-shadow:0 6px 0 var(--p-relieve);color:var(--p-apagado)}",
    ".p5-nodo:active{transform:translateY(5px);box-shadow:0 1px 0 transparent}",
    ".p5-nodo svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}",
    ".p5-nodo img{width:34px;height:34px}",
    ".p5-nodo.hec{background:var(--uc);box-shadow:0 6px 0 var(--ur);color:var(--ut)}",
    ".p5-nodo.hec svg{stroke-width:3}",
    ".p5-nodo.sig{background:var(--uc);box-shadow:0 6px 0 var(--ur),0 0 0 6px var(--p-bg),0 0 0 10px color-mix(in srgb,var(--uc) 45%,transparent);color:var(--ut);margin:10px 0}",
    ".p5-nodo.cofre{cursor:default;width:66px;height:58px;border-radius:18px;background:var(--p-sup-2);box-shadow:inset 0 0 0 2px var(--p-linea),0 5px 0 var(--p-relieve)}",
    ".p5-nodo.cofre img{filter:grayscale(.85) opacity(.7)}",
    ".p5-nodo.cofre.hec{background:var(--p-oro-p);box-shadow:inset 0 0 0 2px var(--p-oro-r),0 5px 0 var(--p-oro-r)}",
    ".p5-nodo.cofre.hec img{filter:none}",
    /* globo «Empezar» sobre la lección que toca */
    ".p5-emp{position:absolute;z-index:3;left:50%;bottom:calc(100% + 2px);transform:translateX(-50%);padding:9px 14px;border-radius:12px;background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea),0 3px 0 var(--p-relieve);font:800 .78rem/1 var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:var(--uc);white-space:nowrap;pointer-events:none;animation:p5bota 1.6s ease-in-out infinite}",
    "html[data-theme=dark] .p5-emp{color:var(--p-tinta)}",
    "@media (prefers-color-scheme:dark){html:not([data-theme=light]) .p5-emp{color:var(--p-tinta)}}",
    ".p5-emp::after{content:'';position:absolute;left:50%;top:100%;width:12px;height:12px;margin:-7px 0 0 -6px;transform:rotate(45deg);background:var(--p-sup);box-shadow:2px 2px 0 var(--p-linea)}",
    ".p5-n.act{margin-top:34px}",
    ".p5-nt{display:block;max-width:220px;margin-top:var(--s-2);font:600 var(--t-xs)/1.3 var(--f-tx);color:var(--p-tinta-2);text-align:center}",
    /* Manzana de adorno junto al camino */
    ".p5-mz{position:absolute;top:50%;width:92px;height:auto;margin-top:-52px;pointer-events:none;filter:drop-shadow(0 6px 8px rgba(11,31,92,.18))}",
    ".p5-mz.de{left:calc(50% + 78px)}.p5-mz.iz{right:calc(50% + 78px)}",
    ".p5-u[data-est=pend] .p5-mz{filter:grayscale(1) opacity(.38)}",
    "@media (max-width:359.98px){.p5-mz{width:76px}.p5-mz.de{left:calc(50% + 66px)}.p5-mz.iz{right:calc(50% + 66px)}}",
    /* botón para volver a tu lección */
    ".p5-volver{all:unset;box-sizing:border-box;cursor:pointer;position:fixed;z-index:45;right:calc(var(--sar) + var(--s-4));bottom:calc(var(--p-barra) + var(--sab) + var(--s-6));width:48px;height:46px;display:grid;place-items:center;border-radius:14px;background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve);color:var(--p-azul-tx)}",
    ".p5-volver[hidden]{display:none}",
    ".p5-volver:active{transform:translateY(3px);box-shadow:inset 0 0 0 2px var(--p-linea),0 1px 0 var(--p-relieve)}",
    ".p5-volver svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}",
    ".p5-volver.abajo svg{transform:rotate(180deg)}",
    "@media (min-width:1024px){.p5-volver{bottom:var(--s-6);right:var(--s-6)}html.p5-lado-on .p5-volver{right:calc(var(--p-lado) + var(--s-6) * 2 + var(--s-4))}}",
    "#cz .cz-centro{display:flex;flex-direction:column;gap:var(--s-3);max-width:560px}",
    "#cz .cz-centro > .p5-curso{order:0}#cz .cz-centro > .p5-ruta{order:1}",
    /* celular: la unidad es una columna simple (curso, recorrido y pie), sin la rejilla vieja */
    "@media (max-width:1023.98px){html.mk .ghome .mp{display:flex;flex-direction:column;gap:var(--s-3)}html.mk .ghome .mp > *{grid-area:auto;order:0;margin:0}html.mk .ghome .mp > .mp-foto,html.mk .ghome .mp > .mp-tit,html.mk .ghome .mp > .mp-mz{display:none}}",
    /* tamaños más contenidos en escritorio */
    "@media (min-width:1024px){html{font-size:100%}}",
    "@media (min-width:1680px){html{font-size:106.25%}}");

  /* ====================================================================== 17. SIN ELEVATE (4.1): juegos, duelos, Quiz y portadas en el sistema nuevo */
  o("html.mk .ev-art,html.mk .ev-tile .ev-art,html.mk .jx-dia .ev-art,html.mk .pt5-hero .ev-art,html.mk .res5-hero .ev-art,html.mk .rtx .ev-art{display:none}",
    "html.mk .ev-sello{background:var(--p-azul-p);background-image:none;border:0;border-radius:var(--r-md);box-shadow:none;color:var(--p-azul-tx);outline:0;clip-path:none;filter:none}",
    "html.mk .ev-sello::before,html.mk .ev-sello::after{display:none}",
    "html.mk .ev-sello svg{color:var(--p-azul-tx);filter:none}",
    /* panel de Juegos */
    "html.mk #view .ev-cat{display:flex;align-items:baseline;gap:var(--s-3);margin:var(--s-6) 0 var(--s-3);padding:0;background:none;border:0}",
    "html.mk #view .ev-cat::before,html.mk #view .ev-cat::after,html.mk #view .ev-cat h3::before,html.mk #view .ev-cat h3::after{display:none}",
    "html.mk #view .ev-cat h3{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .ev-cat small,html.mk #view .ev-cat span{font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .ev-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:var(--s-3);margin:0}",
    "html.mk #view .ev-tile{" + RESET + ";position:relative;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--s-2);min-height:138px;height:auto;padding:var(--s-4);text-align:left;overflow:hidden;" + TARJETA + "}",
    "html.mk #view .ev-tile:active{" + HUNDE + "}",
    "html.mk #view .ev-tile .ev-tile-top{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--s-2);position:static;margin:0;padding:0}",
    "html.mk #view .ev-tile .ev-sello{flex:none;width:46px;height:46px;display:grid;place-items:center;position:static;margin:0}",
    "html.mk #view .ev-tile .ev-sello svg{width:26px;height:26px}",
    "html.mk #view .ev-tile b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);text-shadow:none;margin:0}",
    "html.mk #view .ev-tile small,html.mk #view .ev-tile p{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-apagado);opacity:1;text-shadow:none;margin:0}",
    "html.mk #view .ev-tile em,html.mk #view .ev-tile i:not(.ev-art){font:700 var(--t-xs)/1 var(--f-tx);font-style:normal;color:var(--p-apagado);opacity:1;text-shadow:none}",
    "html.mk #view .ev-azar{" + BTN + ";" + LISO + ";position:static;inset:auto;transform:none;display:flex;align-items:center;justify-content:center;gap:var(--s-2);width:100%;max-width:420px;margin:var(--s-5) auto 0;z-index:auto}",
    "html.mk #view .ev-azar:active{" + HUNDE + "}",
    "html.mk #view .jx-kq,html.mk #view .jx-dia{" + RESET + ";position:relative;display:flex;align-items:center;gap:var(--s-4);width:100%;min-height:0;height:auto;margin:0 0 var(--s-3);padding:var(--s-5);text-align:left;overflow:hidden;border-radius:var(--r-lg);color:var(--p-tinta)}",
    "html.mk #view .jx-kq{background:var(--p-lila-p);background-image:none;box-shadow:0 4px 0 color-mix(in srgb,var(--p-lila-tx) 35%,transparent)}",
    "html.mk #view .jx-dia{background:var(--p-oro-p);background-image:none;box-shadow:0 4px 0 var(--p-oro-r)}",
    "html.mk #view .jx-kq::before,html.mk #view .jx-kq::after,html.mk #view .jx-dia::before,html.mk #view .jx-dia::after{display:none}",
    "html.mk #view .jx-kq .jx-kq-tx,html.mk #view .jx-dia .jx-dia-tx{position:static;flex:1;min-width:0;display:grid;gap:var(--s-1);justify-items:start;padding:0;margin:0;text-align:left}",
    "html.mk #view .jx-kq .jx-kq-tx *,html.mk #view .jx-dia .jx-dia-tx *{color:var(--p-tinta);text-shadow:none;opacity:1;text-align:left}",
    "html.mk #view .jx-kq small,html.mk #view .jx-kq em,html.mk #view .jx-dia small,html.mk #view .jx-dia em{font:700 var(--t-xs)/1.1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;font-style:normal;color:var(--p-lila-tx)}",
    "html.mk #view .jx-dia small,html.mk #view .jx-dia em{color:var(--p-oro-tx)}",
    "html.mk #view .jx-kq b,html.mk #view .jx-dia b{font:800 var(--t-xl)/1.15 var(--f-tit)}",
    "html.mk #view .jx-kq .jx-kq-tx > span,html.mk #view .jx-dia .jx-dia-tx > span{font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .jx-kq u,html.mk #view .jx-dia u{display:inline-flex;align-items:center;min-height:40px;margin-top:var(--s-2);padding:0 var(--s-5);border-radius:var(--r-sm);text-decoration:none;font:700 var(--t-sm)/1 var(--f-tit);background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r)}",
    "html.mk #view .jx-dia .jx-dia-arte{position:static;flex:none;width:76px;height:76px;display:grid;place-items:center;margin:0}",
    "html.mk #view .jx-dia .ev-sello{width:76px;height:76px;display:grid;place-items:center;background:var(--p-sup);position:static}",
    "html.mk #view .jx-dia .ev-sello svg{width:40px;height:40px;color:var(--p-oro-tx)}",
    "html.mk #view .jx-list{display:grid;gap:var(--s-2);" + TARJETA + ";padding:var(--s-3)}",
    "html.mk #view .jx-list .jx-row{" + RESET + ";background:none;display:grid;grid-template-columns:46px minmax(0,1fr);column-gap:var(--s-3);row-gap:2px;align-items:center;min-height:64px;padding:var(--s-2);border-radius:var(--r-md);text-align:left;color:var(--p-tinta)}",
    "html.mk #view .jx-list .jx-row > .jx-ic{grid-row:1 / span 2}",
    "html.mk #view .jx-list .jx-row b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}html.mk #view .jx-list .jx-row small{font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-apagado);opacity:1}",
    "html.mk #view .jx-link{" + BTN + ";" + LISO + ";margin-top:var(--s-4)}",
    /* duelos: cuatro tarjetas pastel con relieve */
    "html.mk #view .dv-c{" + RESET + ";position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;gap:var(--s-4);text-align:left;overflow:hidden;background:var(--p-azul-p);background-image:none;color:var(--p-tinta);box-shadow:0 5px 0 color-mix(in srgb,var(--p-azul) 55%,transparent)}",
    "html.mk #view .dv-c::before,html.mk #view .dv-c::after{display:none}",
    "html.mk #view .dv-c:nth-child(4n+1){background:var(--p-lila-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-rosa) 60%,transparent)}",
    "html.mk #view .dv-c:nth-child(4n+2){background:var(--p-azul-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-azul) 55%,transparent)}",
    "html.mk #view .dv-c:nth-child(4n+3){background:var(--p-oro-p);box-shadow:0 5px 0 var(--p-oro-r)}",
    "html.mk #view .dv-c:nth-child(4n+4){background:var(--p-verde-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-verde) 55%,transparent)}",
    "html.mk #view .dv-c *{color:var(--p-tinta);text-shadow:none;opacity:1}",
    "html.mk #view .dv-c b{font:800 var(--t-lg)/1.2 var(--f-tit);display:block}",
    "html.mk #view .dv-c small,html.mk #view .dv-c > span:last-child > :not(b){font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .dv-c .ev-sello{width:52px;height:52px;display:grid;place-items:center;background:var(--p-sup);position:static}",
    "html.mk #view .dv-c .ev-sello svg{width:28px;height:28px;color:var(--p-tinta)}",
    /* Quiz: modos en pastel */
    "html.mk .kq-modo{" + RESET + ";display:flex;align-items:center;gap:var(--s-3);width:100%;padding:var(--s-3) var(--s-5);text-align:left;background:var(--p-azul-p);background-image:none;box-shadow:0 4px 0 color-mix(in srgb,var(--p-azul) 55%,transparent)}",
    "html.mk .kq-modo::before{display:none}",
    "html.mk .kq-modo:nth-child(5n+2){background:var(--p-verde-p);box-shadow:0 4px 0 color-mix(in srgb,var(--p-verde) 55%,transparent)}",
    "html.mk .kq-modo:nth-child(5n+3){background:var(--p-oro-p);box-shadow:0 4px 0 var(--p-oro-r)}",
    "html.mk .kq-modo:nth-child(5n+4){background:var(--p-lila-p);box-shadow:0 4px 0 color-mix(in srgb,var(--p-rosa) 60%,transparent)}",
    "html.mk .kq-modo:nth-child(5n+5){background:var(--p-sup-3);box-shadow:0 4px 0 var(--p-relieve)}",
    "html.mk .kq-modo,html.mk .kq-modo *{color:var(--p-tinta);text-shadow:none;opacity:1}",
    "html.mk .kq-modo b{font:800 var(--t-lg)/1.2 var(--f-tit)}html.mk .kq-modo small{font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
    /* portada y resultado de los juegos: cabecera lisa, sin arte abstracto */
    "html.mk .plxg .pt5-hero,html.mk .plxg .res5-hero{background:var(--p-azul-btn);background-image:none;box-shadow:0 6px 0 var(--p-azul-r);color:#fff;border:0}",
    "html.mk .plxg .pt5-hero::before,html.mk .plxg .pt5-hero::after,html.mk .plxg .res5-hero::before,html.mk .plxg .res5-hero::after{display:none}",
    "html.mk .plxg .pt5-hero *,html.mk .plxg .res5-hero *{color:#fff;text-shadow:none}",
    "html.mk .plxg .pt5-hero h1,html.mk .plxg .res5-hero h1{font:800 var(--t-3xl)/1.1 var(--f-tit);letter-spacing:-.02em}",
    "html.mk .plxg .pt5-hero .ev-sello,html.mk .plxg .res5-hero .ev-sello{background:var(--p-oro);border-radius:var(--r-lg);box-shadow:0 4px 0 var(--p-oro-r)}",
    "html.mk .plxg .pt5-hero .ev-sello svg,html.mk .plxg .res5-hero .ev-sello svg,html.mk .plxg .pt5-hero .ev-sello *,html.mk .plxg .res5-hero .ev-sello *{color:var(--p-sobre-oro)}",
    "html.mk .plxg .ev-cifras{border-top:1.5px solid rgba(255,255,255,.28)}html.mk .plxg .ev-cifras > div{border-color:rgba(255,255,255,.28)}",
    "html.mk .plxg .ev-cifras b{font-family:var(--f-tit);font-weight:800}",
    "html.mk .plxg .ev-benef svg{color:var(--p-azul-tx)}");

  /* ====================================================================== 18. AJUSTES (pestaña de Perfil), HOJA DE CURSOS Y DETALLES (4.1) */
  o("html.mk #view .ptabs > button.p5-fuera{display:none}",
    "html.mk #view .sets{display:grid;gap:var(--s-4);padding:var(--s-5)}",
    "html.mk #view .sets > *{margin:0;min-width:0}",
    "html.mk #view .sets h2{font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .sets h3{margin:var(--s-4) 0 0;padding-top:var(--s-5);border-top:1.5px solid var(--p-linea);font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .sets .pro-sets{display:grid;gap:var(--s-4)}html.mk #view .sets .pro-sets > *{margin:0}",
    "html.mk #view .sets .gfield{display:grid;gap:var(--s-2);margin:0}",
    "html.mk #view .sets .gfield > span{font:700 var(--t-sm)/1.2 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .sets input[type=text],html.mk #view .sets input[type=date],html.mk #view .sets input:not([type]),html.mk #view .sets select{box-sizing:border-box;width:100%;min-height:52px;padding:0 var(--s-4);background:var(--p-sup-2);color:var(--p-tinta);border:0;border-radius:var(--r-md);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:600 var(--t-md)/1.2 var(--f-tx)}",
    "html.mk #view .sets input:focus,html.mk #view .sets select:focus{outline:0;box-shadow:inset 0 0 0 2px var(--p-azul)}",
    "html.mk #view .sets .goal-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-2)}",
    "html.mk #view .sets .gopt{" + RESET + ";display:grid;gap:3px;align-content:center;min-height:72px;padding:var(--s-3) var(--s-4);text-align:left;border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);color:var(--p-tinta)}",
    "html.mk #view .sets .gopt b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}html.mk #view .sets .gopt small,html.mk #view .sets .gopt span{font:500 var(--t-xs)/1.3 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .sets .gopt.on{background:var(--p-azul-p);box-shadow:inset 0 0 0 2px var(--p-azul),0 3px 0 var(--p-azul)}html.mk #view .sets .gopt.on b{color:var(--p-azul-tx)}",
    "html.mk #view .sets .qs{margin:0}",
    "html.mk #view .sets .set-note{font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .sets .set-row{display:flex;flex-wrap:wrap;gap:var(--s-2);align-items:stretch}",
    "html.mk #view .sets .set-row .gbtn{flex:1 1 220px;min-height:52px;white-space:normal;text-align:center;line-height:1.25}",
    "html.mk #view .sets .ex-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--s-3)}",
    "html.mk #view .sets .ver{font:500 var(--t-xs)/1 var(--f-tx);color:var(--p-apagado);text-align:center}",
    /* botón de ajustes: una pieza con relieve, igual en cabecera y columna */
    "html.mk body header#topbar.top #qsBtn,.p5-aj{background:var(--p-sup);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);border-radius:var(--r-md);color:var(--p-tinta);-webkit-backdrop-filter:none;backdrop-filter:none}",
    "html.mk body header#topbar.top #qsBtn:active,.p5-aj:active{" + HUNDE + "}",
    "html.mk body header#topbar.top #qsBtn svg,.p5-aj svg{width:22px;height:22px}",
    /* ajustes (ventana): más aire y botones a todo el ancho */
    "html.mk .gmodal .aj .qs-row{min-height:64px;padding:var(--s-3) var(--s-4)}",
    "html.mk .gmodal .aj-cuenta .gbtn{flex:1 1 auto;min-height:52px}",
    "html.mk .gmodal .aj .aj-listo{max-width:none;min-height:52px}",
    /* tienda: la placa del objeto va dentro del borde de la tarjeta */
    "html.mk #view .tn .tn-i{padding:6px 6px var(--s-3);overflow:visible}",
    "html.mk #view .tn .tn-i .tn-gato,html.mk #view .tn .tn-i .tn-bg{width:100%;border-radius:17px;box-sizing:border-box}",
    "html.mk #view .tn .tn-i .tn-bg{height:96px;background-size:cover;background-position:center}",
    /* hoja para elegir curso y nivel: filas grandes, agrupadas por nivel */
    "html.mk .lx-hoja{background:var(--p-velo);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}",
    "html.mk .lx-hoja-c{background:var(--p-sup);background-image:none;color:var(--p-tinta);border-radius:var(--r-xl) var(--r-xl) 0 0;box-shadow:inset 0 0 0 1.5px var(--p-linea);width:min(620px,100%);max-height:88dvh;font-family:var(--f-tx)}",
    "html.mk .lx-hoja-h{display:flex;align-items:center;justify-content:space-between;padding:var(--s-4) var(--s-5) var(--s-3);border:0}",
    "html.mk .lx-hoja-h b{font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk .lx-hoja .lx-x{" + RESET + ";width:44px;height:44px;border-radius:50%;background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta-2);font:700 var(--t-md)/1 var(--f-tx)}",
    "html.mk .lx-hoja-b{display:grid;gap:var(--s-2);padding:0 var(--s-5) var(--s-6);overflow-y:auto}",
    "html.mk .lx-hoja-b h3{justify-self:start;margin:var(--s-4) 0 var(--s-1);padding:6px var(--s-4);border-radius:var(--r-pill);background:var(--p-marino);color:#fff;font:800 var(--t-sm)/1 var(--f-tit);letter-spacing:.04em;position:static;border:0}",
    "html.mk .lx-hoja .lx-c{" + RESET + ";display:flex;align-items:center;gap:var(--s-4);width:100%;min-height:68px;padding:var(--s-3) var(--s-4);text-align:left;border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);color:var(--p-tinta)}",
    "html.mk .lx-hoja .lx-c:active{" + HUNDE + "}",
    "html.mk .lx-hoja .lx-c > span{flex:1;min-width:0;display:grid;gap:3px}",
    "html.mk .lx-hoja .lx-c b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}html.mk .lx-hoja .lx-c small{font:500 var(--t-sm)/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk .lx-hoja .lx-c .lx-cbar{flex:none;display:block;width:72px;height:8px;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden}",
    "html.mk .lx-hoja .lx-c .lx-cbar u{display:block;height:100%;background:var(--p-verde);border-radius:var(--r-pill)}",
    "html.mk .lx-hoja .lx-c.on{background:var(--p-azul-p);box-shadow:inset 0 0 0 2px var(--p-azul),0 3px 0 var(--p-azul)}html.mk .lx-hoja .lx-c.on b{color:var(--p-azul-tx)}",
    "@media (min-width:1024px){html.mk .lx-hoja{align-items:center}html.mk .lx-hoja-c{border-radius:var(--r-xl);max-height:80dvh}html.mk .lx-hoja .lx-asa{display:none}}");

  /* ====================================================================== 19. REMATES 4.1 */
  o(/* sello: fuera la insignia de Elevate, queda el icono sobre su placa pastel */
    "html.mk .ev-sello > svg:not(.ev-ic){display:none}",
    "html.mk .ev-sello .ev-ic{position:static;inset:auto;transform:none;margin:0;color:var(--p-azul-tx);--ico-a:var(--p-oro-ic);filter:none}",
    "html.mk #view .dv-c .ev-sello .ev-ic{color:var(--p-tinta);width:28px;height:28px}",
    "html.mk #view .jx-dia .ev-sello .ev-ic{color:var(--p-oro-tx);width:40px;height:40px}",
    "html.mk .plxg .pt5-hero .ev-sello .ev-ic,html.mk .plxg .res5-hero .ev-sello .ev-ic{color:var(--p-sobre-oro);--ico-a:var(--p-sobre-oro)}",
    "html.mk #view .ev-tile .ev-num{font:700 var(--t-xs)/1 var(--f-tx);font-style:normal;color:var(--p-apagado);position:static}",
    /* tarjetas de Quiz y juego del día: texto arriba, botón debajo */
    "html.mk #view .jx-kq{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;column-gap:var(--s-4);row-gap:var(--s-3)}",
    "html.mk #view .jx-kq .jx-kq-fig{position:static;grid-row:1;grid-column:1;margin:0;transform:none}",
    "html.mk #view .jx-kq .jx-kq-tx{grid-row:1;grid-column:2}",
    "html.mk #view .jx-kq > em,html.mk #view .jx-dia .jx-dia-tx > em{position:static;grid-column:1 / -1;justify-self:start;display:inline-flex;align-items:center;justify-content:center;min-height:44px;margin:0;padding:0 var(--s-6);border-radius:var(--r-sm);background:var(--p-azul-btn);background-image:none;color:#fff;box-shadow:0 3px 0 var(--p-azul-r);font:700 var(--t-md)/1 var(--f-tit);letter-spacing:0;text-transform:none;font-style:normal;opacity:1}",
    "html.mk #view .jx-dia .jx-dia-tx > em{margin-top:var(--s-2)}",
    /* Quiz: nombre y detalle uno debajo del otro */
    "html.mk .kq-modo{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:var(--s-3);row-gap:2px;min-height:76px}",
    "html.mk .kq-modo b,html.mk .kq-modo small{grid-column:1;text-align:left;margin:0}",
    "html.mk .kq-modo i{grid-column:2;grid-row:1 / span 2;font-style:normal;font-size:var(--t-xl)}",
    /* ruta de estudio (Inicio): iconos en su sitio */
    "html.mk .ghome .rtx .rtx-l{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s-2);padding:0;margin:var(--s-3) 0;list-style:none}",
    "html.mk .ghome .rtx .rtx-l li button{" + RESET + ";background:none;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:var(--s-2);width:100%;height:100%;min-height:120px;padding:var(--s-3) var(--s-2);text-align:center;color:var(--p-tinta)}",
    "html.mk .ghome .rtx .rtx-l li button > svg{position:static;flex:none;width:30px;height:30px;margin:0;color:var(--p-azul-tx);transform:none}",
    "html.mk .ghome .rtx .rtx-l li button > i,html.mk .ghome .rtx .rtx-l li button > em{display:none}",
    "html.mk .ghome .rtx .rtx-l li button > span:not(.ev-art){display:grid;gap:2px;position:static;padding:0}",
    "html.mk .ghome .rtx .rtx-l li b{font:700 var(--t-xs)/1.25 var(--f-tit);color:var(--p-tinta);overflow-wrap:anywhere}",
    "html.mk .ghome .rtx .rtx-l li small{font:500 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}",
    /* Perfil: cuatro pestañas que caben, sin recorte, y Ajustes sin salirse */
    "html.mk #view .gperfil .ptabs{overflow:hidden;-webkit-mask-image:none;mask-image:none;padding:var(--s-1)}",
    "html.mk #view .gperfil .ptabs > button{flex:1 1 0;min-width:0;padding:0 var(--s-1)}",
    "html.mk #view .sets{grid-template-columns:minmax(0,1fr)}",
    "html.mk #view .sets .gbtn{max-width:100%}",
    "html.mk #view .sets .ex-row{grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))}",
    "html.mk #view .sets .ex-row > *{min-width:0}",
    /* brillos de vidrio de plx90 (.gl::before/::after): al dejar de ser «relative» su caja se anclaban a la página y dejaban
       una línea a la altura de la primera pantalla (la raya que cruzaba la Tienda). El contenido ya no es vidrio: fuera. */
    "html.mk #view .gl::before,html.mk #view .gl::after{display:none}",
    "html.mk #view .tn .tn-h{position:relative}",
    /* la cabecera del celular tapa lo que pasa por debajo al bajar */
    "@media (max-width:1023.98px){html.mk body header#topbar.top{background:linear-gradient(180deg,var(--p-bg) 0,var(--p-bg) 72%,transparent)}}");

  /* ====================================================================== 20. VENTANA DE AJUSTES (4.1.1)
     Con sesión iniciada la ventana trae más cosas y sus bloques se encogían hasta cortarse (solo se veía «Música»).
     Ahora nada se encoge: la lista se desplaza dentro de la ventana y «Listo» queda fijo abajo. Solo lo necesario:
     sonido, recordatorio, tema y la cuenta; sin iconos pintados, sin redes ni «Mi perfil» (ya están en Perfil). */
  o("html.mk .gmodal.m-aj{padding:calc(var(--sat) + var(--s-3)) var(--s-3) calc(var(--sab) + var(--s-3))}",
    "html.mk .gmodal.m-aj .gm-card{width:min(440px,100%);max-height:calc(100dvh - var(--sat) - var(--sab) - var(--s-6));padding:0;overflow:hidden;display:flex;flex-direction:column}",
    "html.mk .gmodal .aj{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:0;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:0}",
    "html.mk .gmodal .aj > *{flex:none}",
    "html.mk .gmodal .aj-top{padding:var(--s-4) var(--s-5);gap:var(--s-3)}",
    "html.mk .gmodal .aj-top .gm-k{display:block;font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-azul-tx);margin:0 0 3px}",
    "html.mk .gmodal .aj-top .aj-gato{width:52px;height:52px}",
    "html.mk .gmodal .aj-top .aj-gato svg{width:46px;height:46px}",
    "html.mk .gmodal .aj-top h2{font-size:var(--t-lg)}",
    "html.mk .gmodal .aj-h{margin:var(--s-5) var(--s-5) var(--s-2)}",
    /* fuera lo que sobra */
    "html.mk .gmodal .aj > .aj-h:nth-of-type(2),html.mk .gmodal .aj > .plx69-redes,html.mk .gmodal .aj .aj-cuenta [data-pm=perfil]{display:none}",
    "html.mk .gmodal .aj > .p5-vacia{display:none}",
    "html.mk .gmodal .aj .qs-row::before,html.mk .gmodal .aj .qs-row::after,html.mk .gmodal .aj .qs-seg > button::before,html.mk .gmodal .aj .qs-seg > button::after,html.mk .gmodal .aj .qs-row > div:first-of-type::before{display:none}",
    /* la lista de interruptores, completa */
    "html.mk .gmodal .aj .qs{display:block;height:auto;max-height:none;overflow:visible;margin:0 var(--s-4);padding:0;border-radius:var(--r-lg);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "html.mk .gmodal .aj .qs > *{flex:none}",
    "html.mk .gmodal .aj .qs-row{display:flex;align-items:center;gap:var(--s-4);min-height:68px;height:auto;padding:var(--s-3) var(--s-4);margin:0;border:0;border-bottom:1.5px solid var(--p-linea);border-radius:0;background:none;box-shadow:none}",
    "html.mk .gmodal .aj .qs > :last-child{border-bottom:0}",
    "html.mk .gmodal .aj .qs-row > div:first-of-type{flex:1;min-width:0;display:grid;gap:3px;padding:0}",
    "html.mk .gmodal .aj .qs-row b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk .gmodal .aj .qs-row small{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-apagado)}",
    "html.mk .gmodal .aj .qs-row.col{flex-wrap:wrap;row-gap:var(--s-3)}",
    "html.mk .gmodal .aj .qs-seg{margin:0}",
    "html.mk .gmodal .aj .qs-seg > button{min-height:46px}",
    "html.mk .gmodal .aj .qs-seg > button svg,html.mk .gmodal .aj .qs-seg > button img{display:none}",
    /* «Otra canción»: un enlace discreto bajo la música, no un botón gigante */
    "html.mk .gmodal .aj .qs-next{display:flex;justify-content:flex-start;margin:0;padding:0 var(--s-4) var(--s-3);border:0;border-bottom:1.5px solid var(--p-linea);background:none}",
    "html.mk .gmodal .aj .qs-next .gbtn{min-height:44px;padding:0 var(--s-4);border-radius:var(--r-pill);background:var(--p-azul-p);color:var(--p-azul-tx);box-shadow:none;font:700 var(--t-sm)/1 var(--f-tx);width:auto}",
    "html.mk .gmodal .aj .qs-row:has(+ .qs-next){border-bottom:0;padding-bottom:var(--s-2)}",
    /* cuenta */
    "html.mk .gmodal .aj-cuenta{display:flex;margin:0 var(--s-4);gap:var(--s-2)}",
    "html.mk .gmodal .aj-cuenta .gbtn{flex:1 1 auto;min-height:52px}",
    "html.mk .gmodal .aj .aj-borrar{" + RESET + ";background:none;display:block;align-self:center;min-height:44px;margin:var(--s-2) auto 0;padding:0 var(--s-3);font:600 var(--t-sm)/44px var(--f-tx);color:var(--p-rojo-tx);text-decoration:underline;box-shadow:none}",
    "html.mk .gmodal .aj-pie{margin:var(--s-3) var(--s-5) var(--s-4)}",
    /* «Listo» fijo al pie de la ventana */
    "html.mk .gmodal .aj .set-row.c{position:sticky;bottom:0;z-index:2;margin:auto 0 0;padding:var(--s-3) var(--s-4) var(--s-4);background:var(--p-sup);box-shadow:inset 0 1.5px 0 var(--p-linea);display:flex}",
    "html.mk .gmodal .aj .aj-listo{flex:1;width:100%;max-width:none;min-height:52px}");

  /* ====================================================================== 21. FONDOS EN DEGRADADO E ICONOS NUEVOS (4.4)
     Fondo: un degradado diagonal de la paleta (azul → neutro → rosa) con dos luces, en lugar del color casi plano.
     Iconos: los 38 planos del Manzana nuevo (img/ic2) también en la barra inferior, la cabecera, las vidas y ajustes. */
  var ICO = function(n){ return "url(img/ic2/" + n + ".webp)"; };
  o("html{--p-fondo:linear-gradient(165deg,#DCE6FF 0%,#EAEEFA 34%,#F3EAF7 68%,#FFE4EC 100%);--p-luz-1:rgba(47,107,255,.20);--p-luz-2:rgba(255,107,139,.20);--p-luz-3:rgba(255,255,255,.55)}",
    "html[data-theme=dark]{--p-fondo:linear-gradient(165deg,#1C2A66 0%,#161B30 36%,#1A1730 68%,#361A36 100%);--p-luz-1:rgba(47,107,255,.34);--p-luz-2:rgba(255,107,139,.20);--p-luz-3:rgba(120,140,255,.10)}",
    "@media (prefers-color-scheme:dark){html:not([data-theme=light]){--p-fondo:linear-gradient(165deg,#1C2A66 0%,#161B30 36%,#1A1730 68%,#361A36 100%);--p-luz-1:rgba(47,107,255,.34);--p-luz-2:rgba(255,107,139,.20);--p-luz-3:rgba(120,140,255,.10)}}",
    "html.mk body::before{background:radial-gradient(58vmax 44vmax at 4% -8%,var(--p-luz-1),transparent 64%),radial-gradient(54vmax 46vmax at 104% 106%,var(--p-luz-2),transparent 62%),radial-gradient(40vmax 30vmax at 62% 34%,var(--p-luz-3),transparent 66%),var(--p-fondo)}",
    /* las superficies de color (cartel, tarjetas azules) con un degradado suave en vez de color plano */
    ".p5-ban{background-image:linear-gradient(115deg,var(--uc) 0%,color-mix(in srgb,var(--uc) 84%,#fff) 100%)}",
    "html.mk #view .lx2 .lx-next,html.mk #view .rkv .rkx-hero,html.mk #view .pq-hoy .jx-para,html.mk .plxg .pt5-hero,html.mk .plxg .res5-hero,html.mk .dg2-portada{background-image:linear-gradient(120deg,#2255E0 0%,#2F6BFF 58%,#4A6FF5 100%)}",
    "#px-rail .rl-b[aria-current=page]{background-image:linear-gradient(120deg,#2255E0,#3A70FF)}",
    /* barra inferior: iconos de color */
    "html.mk body nav#tabbar.tabbar button.px-navbtn svg{display:none}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn::before{content:'';display:block;width:30px;height:30px;background:center/contain no-repeat;filter:saturate(.85) opacity(.82);transition:transform .15s,filter .15s}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=parcours]::before{background-image:" + ICO("torre-eiffel") + "}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=retos]::before{background-image:" + ICO("lapiz") + "}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=ranking]::before{background-image:" + ICO("espadas") + "}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=tienda]::before{background-image:" + ICO("bolsa") + "}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=perfil]::before{background-image:" + ICO("pata") + "}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]::before{filter:none;transform:scale(1.12)}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]{background:var(--p-sup);box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--p-azul) 55%,transparent),0 3px 0 color-mix(in srgb,var(--p-azul) 55%,transparent)}",
    /* cabecera: racha, XP, monedas y ajustes con los iconos nuevos */
    "html.mk body header#topbar.top #stats .px-fire svg,html.mk body header#topbar.top #stats .px-crown svg,html.mk body header#topbar.top #qsBtn svg{display:none}",
    "html.mk body header#topbar.top #stats .px-fire::before,html.mk body header#topbar.top #stats .px-crown::before,html.mk body header#topbar.top #qsBtn::before{content:'';display:block;flex:none;width:20px;height:20px;background:center/contain no-repeat}",
    "html.mk body header#topbar.top #stats .px-fire::before{background-image:" + ICO("llama") + "}",
    "html.mk body header#topbar.top #stats .px-crown::before{background-image:" + ICO("rayo") + "}",
    "html.mk body header#topbar.top #qsBtn::before{width:26px;height:26px;background-image:" + ICO("engranaje") + "}",
    "html.mk .px-coin .mo,html.mk #view .tn .mo,html.mk .gmodal .mo{width:18px;height:18px;border-radius:0;background:" + ICO("moneda") + " center/contain no-repeat;box-shadow:none;border:0}",
    "html.mk .px-coin .mo::before,html.mk .px-coin .mo::after,html.mk #view .tn .mo::before,html.mk #view .tn .mo::after{display:none}",
    /* lección: las vidas */
    "html.mk #player .ph .ghearts svg{display:none}",
    "html.mk #player .ph .ghearts::before{content:'';display:block;width:24px;height:24px;background:" + ICO("corazon") + " center/contain no-repeat}",
    /* columna derecha y ajustes */
    ".p5-aj img{width:26px;height:26px;display:block}",
    /* misiones: placa clara para el icono plano */
    ".plx-miss .ms-i .ms-ic.pi,.plx-miss .ms-chest .pi{background-color:var(--p-sup);background-size:72%;border-radius:12px;box-shadow:none}",
    "html.mk .pi.pi.pi{background-color:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "#px-rail .rl-b .rl-ic{width:30px;height:30px}",
    ".p5-nodo.cofre img{width:38px;height:38px;filter:none}",
    ".p5-u[data-est=pend] .p5-nodo.cofre img{filter:grayscale(.7) opacity(.75)}");

  /* ====================================================================== 22. INSTALAR LA APP (4.4) */
  o(".p5-inst-c{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-2) var(--s-2) var(--s-2) var(--s-3);margin:0 0 var(--s-3);border-radius:var(--r-md);background:var(--p-lila-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-rosa) 45%,transparent);font-family:var(--f-tx);color:var(--p-tinta)}",
    ".p5-inst-c img{flex:none;width:48px;height:48px;object-fit:contain}",
    ".p5-inst-c > span{flex:1;min-width:0;display:grid;gap:2px}",
    ".p5-inst-c b{font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-inst-c small{font:500 var(--t-xs)/1.25 var(--f-tx);color:var(--p-tinta-2)}",
    ".p5-inst-b{all:unset;box-sizing:border-box;cursor:pointer;flex:none;min-height:40px;padding:0 var(--s-4);display:inline-flex;align-items:center;border-radius:var(--r-sm);background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r);font:700 var(--t-sm)/1 var(--f-tit)}",
    ".p5-inst-b:active{transform:translateY(2px);box-shadow:0 1px 0 var(--p-azul-r)}",
    ".p5-inst-x{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:36px;height:40px;display:grid;place-items:center;border-radius:10px;color:var(--p-tinta-2);font:700 var(--t-sm)/1 var(--f-tx)}",
    "html.mk .gmodal .aj .p5-inst{display:grid;gap:0;margin:0;padding:0 var(--s-4)}","html.mk .gmodal .aj .p5-inst .aj-h{margin-left:var(--s-1);margin-right:0}",
    "html.mk .gmodal .aj .p5-inst .gbtn{margin:0;width:100%;min-height:52px}",
    "html.mk .gmodal.m-inst .gm-card{width:min(420px,100%);padding:0}",
    ".p5-pasos{display:grid;gap:var(--s-3);padding:var(--s-5) var(--s-5) 0;text-align:center;justify-items:center;overflow-y:auto}",
    ".p5-pasos img{width:92px;height:92px;object-fit:contain}",
    ".p5-pasos .gm-t{margin:0;font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-pasos .gm-sub{margin:0;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-tinta-2)}",
    ".p5-pasos ol{list-style:none;display:grid;gap:var(--s-2);width:100%;margin:var(--s-2) 0 0;padding:0;text-align:left}",
    ".p5-pasos li{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".p5-pasos li > b{flex:none;width:32px;height:32px;display:grid;place-items:center;border-radius:50%;background:var(--p-azul-btn);color:#fff;font:800 var(--t-sm)/1 var(--f-tit)}",
    ".p5-pasos li > span{flex:1;min-width:0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta)}",
    ".p5-pasos li i{font-style:normal;font-weight:700;color:var(--p-azul-tx)}",
    ".p5-pasos li svg{display:inline-block;vertical-align:-5px;width:22px;height:22px;margin:0 2px;fill:none;stroke:var(--p-azul-tx);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}",
    ".p5-pasos .p5-nota{margin:0;font:500 var(--t-xs)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".p5-pasos .set-row.c{width:calc(100% + var(--s-5) * 2);margin:var(--s-2) calc(var(--s-5) * -1) 0;padding:var(--s-3) var(--s-4) var(--s-4);box-shadow:inset 0 1.5px 0 var(--p-linea);display:flex}",
    ".p5-pasos .set-row.c .gbtn{flex:1;min-height:52px}",
    "#cz .cz-centro > .p5-inst-c{order:-1;margin:0}");

  /* ====================================================================== 23. PANTALLAS DE LOS JUEGOS (4.5)
     Portada: cada familia de juegos con su color, cabecera compacta con Manzana y las cifras en fichas.
     Partida: el fondo y el marcador con la identidad nueva (tinta, azul y rosa), sin tocar la mecánica de ningún juego.
     Pausa y resultado: una acción principal clara, las demás en segundo plano, y Manzana reaccionando a las estrellas. */
  var MZ3 = function(n){ return "url(img/mz3/" + n + ".webp)"; };
  var FAM = function(ids, c, r, t){ return ids.split(" ").map(function(i){ return "html.mk .plxg .plxg-wrap.pt-" + i; }).join(",") + "{--jc:" + c + ";--jr:" + r + ";--jt:" + t + "}"; };
  o("html.mk .plxg .plxg-wrap{--jc:var(--p-azul-btn);--jr:var(--p-azul-r);--jt:#fff}",
    FAM("pb sb cm sr", "var(--p-verde-btn)", "var(--p-verde-r)", "#fff"),
    FAM("ah vd rq", "var(--p-rosa-btn)", "var(--p-rosa-r)", "#fff"),
    FAM("ff bc mc", "var(--p-oro)", "var(--p-oro-r)", "var(--p-sobre-oro)"),
    FAM("mr ld cc", "#0B7F86", "#085D63", "#fff"),
    FAM("wb tc bb la", "#6A3FD0", "#48279A", "#fff"),
    /* ---------- portada ---------- */
    "html.mk .plxg .plxg-wrap.pt{max-width:720px;margin:0 auto;display:flex;flex-direction:column;gap:var(--s-3);padding-left:var(--s-4);padding-right:var(--s-4)}",
    "html.mk .plxg .plxg-wrap.pt > *{margin:0}",
    "html.mk .plxg .hb-top{display:flex;align-items:center;gap:var(--s-3);min-height:44px}",
    "html.mk .plxg .pt5-hero{position:relative;display:grid;grid-template-columns:minmax(0,1fr);justify-items:start;align-content:start;gap:var(--s-1);min-height:0;height:auto;padding:var(--s-5);text-align:left;border-radius:var(--r-xl);background:var(--jc);background-image:linear-gradient(125deg,var(--jc) 0%,color-mix(in srgb,var(--jc) 82%,#fff) 100%);box-shadow:0 6px 0 var(--jr);color:var(--jt);overflow:hidden}",
    "html.mk .plxg .pt5-hero *{color:var(--jt)}",
    "html.mk .plxg .pt5-hero::after{content:'';display:block;position:absolute;inset:var(--s-2) var(--s-2) auto auto;z-index:0;transform:none;opacity:1;width:124px;height:124px;background:" + MZ3("pulgar") + " center/contain no-repeat;filter:drop-shadow(0 6px 8px rgba(0,0,0,.18));pointer-events:none}",
    "html.mk .plxg .pt5-hero .ev-sello{position:static;width:60px;height:60px;margin:0 0 var(--s-2);display:grid;place-items:center;border-radius:var(--r-md);background:rgba(255,255,255,.22);box-shadow:none}",
    "html.mk .plxg .pt5-hero .ev-sello .ev-ic{width:34px;height:34px;color:var(--jt);--ico-a:var(--jt)}",
    "html.mk .plxg .pt5-hero h1{margin:0;max-width:calc(100% - 120px);font:800 var(--t-2xl)/1.1 var(--f-tit);letter-spacing:-.02em;text-align:left}",
    "html.mk .plxg .pt5-hero .ev-tipo{margin:0;max-width:calc(100% - 110px);font:600 var(--t-sm)/1.3 var(--f-tx);opacity:.92;text-align:left}",
    "html.mk .plxg .pt5-hero .ev-cifras{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s-2);width:100%;margin:var(--s-4) 0 0;padding:0;border:0}",
    "html.mk .plxg .pt5-hero .ev-cifras > div{display:grid;gap:2px;justify-items:center;padding:var(--s-2) var(--s-1);border:0;border-radius:var(--r-sm);background:rgba(255,255,255,.2)}",
    "html.mk .plxg .pt5-hero .ev-cifras b{font:800 var(--t-lg)/1.1 var(--f-tit)}",
    "html.mk .plxg .pt5-hero .ev-cifras small,html.mk .plxg .pt5-hero .ev-cifras span{font:700 .68rem/1.1 var(--f-tx);letter-spacing:.08em;text-transform:uppercase;opacity:.9}",
    "html.mk .plxg .ev-benef,html.mk .plxg .pt5-reglas,html.mk .plxg .pt-rec{padding:var(--s-4)}",
    "html.mk .plxg .ev-benef h3,html.mk .plxg .pt5-reglas h3{margin:0 0 var(--s-3)}",
    "html.mk .plxg .ev-benef p{display:flex;align-items:center;gap:var(--s-3);margin:0 0 var(--s-2)}",
    "html.mk .plxg .ev-benef p:last-child{margin-bottom:0}",
    "html.mk .plxg .pt-reglas{display:grid;gap:var(--s-2);margin:0;padding:0}",
    "html.mk .plxg .pt-reglas li{margin:0}",
    "html.mk .plxg .pt-reglas li::before{background:var(--jc);color:var(--jt);border-radius:8px;font-family:var(--f-tit);font-weight:800}",
    "html.mk .plxg .pt-aj{display:grid;gap:var(--s-2)}",
    "html.mk .plxg .plxg-btn.pt-go{" + cara("var(--jc)", "var(--jr)", "var(--jt)") + "}",
    "@media (min-width:1024px){html.mk .plxg .plxg-wrap.pt{max-width:1040px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:var(--s-4);align-items:start}html.mk .plxg .plxg-wrap.pt > .hb-top{grid-column:1 / -1}html.mk .plxg .plxg-wrap.pt > .pt5-hero,html.mk .plxg .plxg-wrap.pt > .plxg-btn.pt-go{grid-column:1}html.mk .plxg .plxg-wrap.pt > .ev-benef,html.mk .plxg .plxg-wrap.pt > .pt5-reglas,html.mk .plxg .plxg-wrap.pt > .pt-rec,html.mk .plxg .plxg-wrap.pt > .pt-aj{grid-column:2}html.mk .plxg .plxg-wrap.pt > .pt5-hero{grid-row:2}html.mk .plxg .plxg-wrap.pt > .plxg-btn.pt-go{grid-row:3;position:static;width:100%}html.mk .plxg .plxg-wrap.pt > .ev-benef{grid-row:2 / span 2;align-self:start}}",
    /* rutas de Boss Battle y Language Adventure: filas que siguen el tema (en oscuro salían blancas con texto blanco) */
    "html.mk .plxg:not(.plxg-juego) .plxg-wrap.pt ol:not(.pt-reglas) > li{background:var(--p-sup);background-image:none;border:0;border-radius:var(--r-md);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);color:var(--p-tinta);opacity:1}",
    "html.mk .plxg:not(.plxg-juego) .plxg-wrap.pt ol:not(.pt-reglas) > li *{color:var(--p-tinta);opacity:1}",
    "html.mk .plxg:not(.plxg-juego) .plxg-wrap.pt ol:not(.pt-reglas) > li small{color:var(--p-apagado)}",
    "html.mk .plxg:not(.plxg-juego) .plxg-h2{color:var(--p-tinta);font-family:var(--f-tit)}html.mk .plxg:not(.plxg-juego) .plxg-h2 small{color:var(--p-apagado)}",
    /* ---------- partida: fondo y marcador ---------- */
    "html.mk .plxg.plxg-juego{background:radial-gradient(70% 50% at 0% 0%,rgba(47,107,255,.38),transparent 66%),radial-gradient(70% 55% at 100% 100%,rgba(255,107,139,.22),transparent 64%),linear-gradient(165deg,#1C2A66 0%,#161B30 38%,#1A1730 70%,#321A36 100%);color:#F5F6FA}",
    "html.mk .plxg.plxg-juego .plxg-hud{border-radius:var(--r-lg);background:rgba(20,24,38,.6);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}",
    "html.mk .plxg.plxg-juego .plxg-hud .plxg-ib{border-radius:var(--r-sm);background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.14);color:#fff}",
    "html.mk .plxg.plxg-juego .plxg-tiempo{font-family:var(--f-tit);font-weight:800;color:#fff}",
    "html.mk .plxg.plxg-juego .plxg-pts b{font-family:var(--f-tit);font-weight:800;color:#FFC83D}",
    "html.mk .plxg.plxg-juego .plxg-pts span,html.mk .plxg.plxg-juego .plxg-pts small{color:rgba(245,246,250,.72);font-family:var(--f-tx);letter-spacing:.1em}",
    "html.mk .plxg.plxg-juego .plxg-barra{height:5px;border-radius:var(--r-pill);background:rgba(255,255,255,.14);overflow:hidden}",
    "html.mk .plxg.plxg-juego .plxg-barra > *{border-radius:var(--r-pill);background:linear-gradient(90deg,#2F6BFF,#FF6B8B)}",
    "html.mk .plxg.plxg-juego .plxg-ban{border-radius:var(--r-lg);background:rgba(29,35,53,.86);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.12),0 4px 0 rgba(6,8,16,.5);color:#F5F6FA}",
    "html.mk .plxg.plxg-juego .plxg-ban .plxg-ask{font:700 var(--t-xs)/1.3 var(--f-tx);letter-spacing:.04em;color:rgba(245,246,250,.78)}",
    "html.mk .plxg.plxg-juego .plxg-ban .plxg-q{font-family:var(--f-tit);font-weight:800;color:#fff}",
    "html.mk .plxg.plxg-juego .plxg-ban .hueco{color:#FFC83D}",
    /* ---------- pausa ---------- */
    "html.mk .plxg .plxg-pausa{background:rgba(6,8,16,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}",
    "html.mk .plxg .plxg-pc{position:relative;display:grid;gap:var(--s-3);padding:calc(var(--s-7) + 44px) var(--s-5) var(--s-5);border-radius:var(--r-xl);background:#1D2335;box-shadow:inset 0 0 0 1.5px #343D59,0 30px 60px -30px #000;color:#F5F6FA;text-align:center}",
    "html.mk .plxg .plxg-pc::before{content:'';position:absolute;left:50%;top:-34px;width:104px;height:104px;margin-left:-52px;background:" + MZ3("dormido") + " center/contain no-repeat}",
    "html.mk .plxg .plxg-pc h2{margin:0;font:800 var(--t-2xl)/1.1 var(--f-tit);letter-spacing:0;color:#fff;text-transform:none}",
    "html.mk .plxg .plxg-pc p{margin:0 0 var(--s-2);font:500 var(--t-md)/1.4 var(--f-tx);color:#A9B1C7}",
    "html.mk .plxg .plxg-pc .plxg-btn{width:100%}",
    "html.mk .plxg .plxg-pc .plxg-btn.line{background:transparent;color:#D3D8E6;box-shadow:inset 0 0 0 1.5px #343D59;min-height:48px;font-size:var(--t-md)}",
    /* ---------- resultado ---------- */
    "html.mk .plxg .plxg-wrap.res{max-width:720px;margin:0 auto;padding-left:var(--s-4);padding-right:var(--s-4)}",
    "html.mk .plxg .res5-hero{position:relative;padding:calc(var(--s-5) + 96px) var(--s-5) var(--s-5);border-radius:var(--r-xl);overflow:hidden}",
    "html.mk .plxg .res5-hero::before{content:'';display:block;position:absolute;inset:var(--s-3) auto auto 50%;transform:none;opacity:1;width:104px;height:104px;margin-left:-52px;background:" + MZ3("pensando") + " center/contain no-repeat;filter:drop-shadow(0 6px 8px rgba(0,0,0,.2))}",
    "html.mk .plxg .res5-hero:has(.plxg-est i.on:nth-child(2))::before{background-image:" + MZ3("pulgar") + "}",
    "html.mk .plxg .res5-hero:has(.plxg-est i.on:nth-child(3))::before{background-image:" + MZ3("celebra") + "}",
    "html.mk .plxg .res5-hero .plxg-big b{color:#FFC83D;font-family:var(--f-tit);font-weight:800}",
    "html.mk .plxg .res5-hero .plxg-est i.on{color:#FFC83D}",
    "html.mk .plxg .plxg-acc{position:sticky;bottom:0;z-index:3;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-2);margin:var(--s-4) calc(var(--s-4) * -1) 0;padding:var(--s-3) var(--s-4) calc(var(--sab) + var(--s-3));background:var(--p-vidrio-solido);background-image:none;box-shadow:inset 0 1.5px 0 var(--p-linea)}",
    "html.mk .plxg .plxg-acc .plxg-btn{width:100%;min-height:52px;margin:0}",
    "html.mk .plxg .plxg-acc .plxg-btn[data-plxg=otra]{grid-column:1 / -1;order:-1;" + ORO + "}",
    "html.mk .plxg .plxg-acc .plxg-btn:not([data-plxg=otra]){" + LISO + ";font-size:var(--t-md)}",
    "html.mk .plxg .plxg-acc .plxg-btn:only-child{grid-column:1 / -1}",
    "html.mk .plxg .plxg-acc .plxg-btn:not([data-plxg=otra]):last-child:nth-child(2){grid-column:1 / -1}");

  /* ====================================================================== 24. ICONOS DE LOS JUEGOS (4.6)
     Cada juego con su icono (img/juegos/<id>.webp) en la lista, en el juego del día y en su portada, en lugar del
     icono de línea sobre una placa. */
  var IDS = "ff bc tw wc pb gr sr sb cc ah mr ld cm wb vd tc rq bb la mc".split(" ");
  var JG = function(i){ return "url(img/juegos/" + i + ".webp)"; };
  o("html.mk #view .ev-tile[data-jx-juego] .ev-sello,html.mk #view .jx-dia[data-jx-juego] .ev-sello,html.mk .plxg .plxg-wrap.pt .pt5-hero .ev-sello{background-color:transparent;background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:0;box-shadow:none}",
    "html.mk #view .ev-tile[data-jx-juego] .ev-sello > *,html.mk #view .jx-dia[data-jx-juego] .ev-sello > *,html.mk .plxg .plxg-wrap.pt .pt5-hero .ev-sello > *{display:none}",
    "html.mk #view .ev-tile[data-jx-juego] .ev-sello{width:64px;height:64px}",
    "html.mk #view .ev-tile[data-jx-juego]{min-height:150px}",
    "html.mk #view .jx-dia[data-jx-juego] .jx-dia-arte,html.mk #view .jx-dia[data-jx-juego] .ev-sello{width:92px;height:92px}",
    "html.mk .plxg .plxg-wrap.pt .pt5-hero .ev-sello{width:84px;height:84px;filter:drop-shadow(0 5px 6px rgba(0,0,0,.2))}",
    IDS.map(function(i){ return "html.mk #view .ev-tile[data-jx-juego=" + i + "] .ev-sello,html.mk #view .jx-dia[data-jx-juego=" + i + "] .ev-sello,html.mk .plxg .plxg-wrap.pt-" + i + " .pt5-hero .ev-sello{background-image:" + JG(i) + "}"; }).join(""),
    ".p5-fx .p5-jg{width:76px;height:76px;object-fit:contain}");

  /* ====================================================================== 25. PRÁCTICA LIVIANA, PROFESORES APARTE, EN LÍNEA PRIMERO Y QUIZ (4.7)
     Práctica: una sola recomendación arriba y, al lado, la entrada a lo competitivo; debajo, tres rejillas de fichas cortas
     (icono + nombre), sin subtítulos ni descripciones. Los profesores pasan a su propia pantalla.
     Juegos: lo que se juega con otros va arriba, en tarjetas de color. PLEX Quiz: fondo de color, bloques grandes. */
  o("html.mk #view .pq{gap:var(--s-6)}",
    "html.mk #view .pq-s > header p,html.mk #view .pq-s > header small,html.mk #view .pq-s > header span{display:none}",
    "html.mk #view .pq-s > header{margin:0 0 var(--s-3)}",
    "html.mk #view .pq-s > header h2{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .pq .pq-c > button.p5-fuera.p5-fuera,html.mk #view .pq .pq-lista .pq-c > button.jx-tile.p5-fuera{display:none}",
    /* profesores: fuera de Práctica, con pantalla propia */
    "html:not([data-p5-sub=profes]) #view .pq > .pq-profs{display:none}",
    "html[data-p5-sub=profes] #view .pq > :not(.pq-profs){display:none}",
    "html[data-p5-sub=profes] #view .pq-profs > header{display:none}",
    "html.mk #view .pq-profs .pq-c{display:block}",
    "html.mk #view .pq-profs .jx-profs{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:var(--s-3);overflow:visible;padding:0;margin:0}",
    "html.mk #view .pq-profs .jx-prof{" + RESET + ";display:flex;flex-direction:column;align-items:center;gap:var(--s-2);width:auto;min-width:0;padding:var(--s-4) var(--s-3) var(--s-4);border-radius:var(--r-lg);background:var(--p-sup);background-image:linear-gradient(180deg,var(--pb,var(--p-sup-2)) 0,var(--pb,var(--p-sup-2)) 58%,var(--p-sup) 58%);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);text-align:center}",
    "html[data-theme=dark] #view .pq-profs .jx-prof{background-image:linear-gradient(180deg,var(--p-sup-3) 0,var(--p-sup-3) 58%,var(--p-sup) 58%)}",
    "@media (prefers-color-scheme:dark){html:not([data-theme=light]) #view .pq-profs .jx-prof{background-image:linear-gradient(180deg,var(--p-sup-3) 0,var(--p-sup-3) 58%,var(--p-sup) 58%)}}",
    "html.mk #view .pq-profs .jx-prof:active{" + HUNDE + "}",
    "html.mk #view .pq-profs .jx-prof img{width:auto;height:150px;max-width:100%;object-fit:contain;object-position:50% 100%;margin:0}",
    "html.mk #view .pq-profs .jx-prof b{font:800 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    "html.mk #view .pq-profs .jx-prof small{font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.08em;color:var(--p-azul-tx);padding:5px var(--s-3);border-radius:var(--r-pill);background:var(--p-azul-p)}",
    /* arriba: la recomendación de hoy y la entrada a lo competitivo */
    "html.mk #view .pq-hoy > header{display:none}",
    "html.mk #view .pq-hoy .pq-c{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--s-3)}",
    "html.mk #view .pq-hoy .jx-paras{display:contents}",
    "html.mk #view .pq-hoy .jx-para:not(:first-child){display:none}",
    "html.mk #view .pq-hoy .jx-para,html.mk #view .pq-hoy .p5-compite{" + RESET + ";position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--s-1);min-height:136px;padding:var(--s-4) 120px var(--s-4) var(--s-5);border-radius:var(--r-lg);overflow:hidden;text-align:left;color:#fff;background-image:linear-gradient(120deg,#2255E0 0%,#2F6BFF 58%,#4A6FF5 100%);box-shadow:0 5px 0 var(--p-azul-r)}",
    "html.mk #view .pq-hoy .p5-compite{background-image:linear-gradient(120deg,#C2245A 0%,#E0356B 55%,#F0527F 100%);box-shadow:0 5px 0 var(--p-rosa-r)}",
    "html.mk #view .pq-hoy .jx-para:active,html.mk #view .pq-hoy .p5-compite:active{" + HUNDE + "}",
    "html.mk #view .pq-hoy .jx-para::after,html.mk #view .pq-hoy .p5-compite::after{content:'';position:absolute;right:var(--s-3);top:50%;width:104px;height:104px;margin-top:-52px;background:" + MZ3("taza-cafe") + " center/contain no-repeat;filter:drop-shadow(0 5px 6px rgba(0,0,0,.2));pointer-events:none}",
    "html.mk #view .pq-hoy .p5-compite::after{background-image:" + ICO("espadas") + ";width:92px;height:92px;margin-top:-46px}",
    "html.mk #view .pq-hoy .jx-para *,html.mk #view .pq-hoy .p5-compite *{color:#fff;opacity:1}",
    "html.mk #view .pq-hoy .jx-para small,html.mk #view .pq-hoy .p5-compite small{font:800 .7rem/1.1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;opacity:.9}",
    "html.mk #view .pq-hoy .jx-para b,html.mk #view .pq-hoy .p5-compite b{font:800 var(--t-xl)/1.15 var(--f-tit)}",
    "html.mk #view .pq-hoy .jx-para span,html.mk #view .pq-hoy .p5-compite span{font:500 var(--t-sm)/1.35 var(--f-tx);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "html.mk #view .pq-hoy .p5-compite em{display:inline-flex;align-items:center;min-height:36px;margin-top:var(--s-2);padding:0 var(--s-4);border-radius:var(--r-sm);background:var(--p-oro);color:var(--p-sobre-oro);box-shadow:0 3px 0 var(--p-oro-r);font:800 var(--t-sm)/1 var(--f-tit);font-style:normal}",
    /* fichas cortas: icono + nombre */
    "html.mk #view .pq-dos{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-6)}",
    "html.mk #view .pq .pq-lista.pq-lista.pq-lista{background:none;background-image:none;box-shadow:none;border-radius:0;padding:0}",
    "html.mk #view .pq-hab .pq-c,html.mk #view .pq-lista .pq-c{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:var(--s-2)}",
    "html.mk #view .pq-hab .pq-c > button,html.mk #view .pq-lista .pq-c > button,html.mk #view .pq-lista .pq-c > button.jx-tile{" + RESET + ";display:flex;flex-direction:row;align-items:center;gap:var(--s-3);width:auto;min-height:62px;height:auto;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);background:var(--p-sup);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);text-align:left;color:var(--p-tinta);transform:none;opacity:1}",
    "html.mk #view .pq-hab .pq-c > button:active,html.mk #view .pq-lista .pq-c > button:active{" + HUNDE + "}",
    "html.mk #view .pq-hab .pq-c > button > .jx-ic,html.mk #view .pq-lista .pq-c > button > .jx-ic{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;align-self:center;filter:none;opacity:1;grid-row:auto;grid-column:auto}",
    "html.mk #view .pq-hab .pq-c > button > .jx-ic img,html.mk #view .pq-lista .pq-c > button > .jx-ic img{width:28px;height:28px}",
    "html.mk #view .pq-hab .pq-c > button .jx-rt,html.mk #view .pq-lista .pq-c > button .jx-rt{display:block;flex:1;min-width:0}",
    "html.mk #view .pq-hab .pq-c > button b,html.mk #view .pq-lista .pq-c > button b{display:block;font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta);margin:0;white-space:normal;overflow:visible;text-overflow:clip;overflow-wrap:anywhere}",
    "html.mk #view .pq-hab .pq-c > button small,html.mk #view .pq-lista .pq-c > button small,html.mk #view .pq-hab .pq-c > button > i,html.mk #view .pq-lista .pq-c > button > i{display:none}",
    "@media (max-width:479.98px){html.mk #view .pq-hab .pq-c,html.mk #view .pq-lista .pq-c{grid-template-columns:repeat(2,minmax(0,1fr))}html.mk #view .pq-hoy .jx-para,html.mk #view .pq-hoy .p5-compite{padding-right:108px}html.mk #view .pq-profs .jx-profs{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    ".p5-seg{max-width:460px}",
    /* ---------- Juegos: lo que se juega con otros, arriba ---------- */
    "html[data-p5-sub=juegos] #view .jx.pq-on > .jx-pan[data-p=juegos]{display:flex;flex-direction:column}",
    "html.mk #view .jx-pan[data-p=juegos] > *{order:5}",
    "html.mk #view .jx-pan[data-p=juegos] > .p5-online{order:1;margin-top:0}",
    "html.mk #view .jx-pan[data-p=juegos] > .jx-list{order:2}",
    "html.mk #view .jx-pan[data-p=juegos] > .jx-kq{order:3;margin-top:var(--s-3)}",
    "html.mk #view .jx-pan[data-p=juegos] > .jx-dia{order:4}",
    "html.mk #view .jx-pan[data-p=juegos] .jx-h small{display:none}",
    "html.mk #view .jx-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:var(--s-3);padding:0;background:none;background-image:none;box-shadow:none;border-radius:0}",
    "html.mk #view .jx-list .jx-row{" + RESET + ";position:relative;display:grid;grid-template-columns:56px minmax(0,1fr) auto;column-gap:var(--s-3);align-items:center;min-height:86px;padding:var(--s-3) var(--s-4);border-radius:var(--r-lg);text-align:left;color:var(--p-tinta);background:var(--p-lila-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-rosa) 60%,transparent)}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+2){background:var(--p-azul-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-azul) 55%,transparent)}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+3){background:var(--p-verde-p);box-shadow:0 5px 0 color-mix(in srgb,var(--p-verde) 55%,transparent)}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+4){background:var(--p-oro-p);box-shadow:0 5px 0 var(--p-oro-r)}",
    "html.mk #view .jx-list .jx-row:active{" + HUNDE + "}",
    "html.mk #view .jx-list .jx-row > .jx-ic{grid-row:auto;width:56px;height:56px;border-radius:0;background:transparent center/contain no-repeat;background-image:" + ICO("espadas") + ";box-shadow:none}",
    "html.mk #view .jx-list .jx-row > .jx-ic > *{display:none}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+2) > .jx-ic{background-image:" + ICO("globo") + "}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+3) > .jx-ic{background-image:" + ICO("pata") + "}",
    "html.mk #view .jx-list .jx-row:nth-child(4n+4) > .jx-ic{background-image:" + ICO("trofeo") + "}",
    "html.mk #view .jx-list .jx-row .jx-rt{display:grid;gap:3px;min-width:0}",
    "html.mk #view .jx-list .jx-row b{font:800 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);margin:0}",
    "html.mk #view .jx-list .jx-row small{display:block;font:500 var(--t-sm)/1.3 var(--f-tx);color:var(--p-tinta-2);opacity:1;margin:0}",
    "html.mk #view .jx-list .jx-row small .sx{display:none}",
    "html.mk #view .jx-list .jx-row > i{font-style:normal;font:800 var(--t-xl)/1 var(--f-tit);color:var(--p-tinta-2)}",
    "html.mk #view .jx-link{align-self:flex-start;min-height:44px;padding:10px var(--s-4);font-size:var(--t-sm);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    /* ---------- PLEX Quiz: fondo de color y bloques grandes ---------- */
    "html.mk .kq{background:linear-gradient(160deg,#3D2CA8 0%,#2A1E7A 48%,#1E1650 100%);background-image:radial-gradient(60% 40% at 0% 0%,rgba(255,107,139,.28),transparent 66%),radial-gradient(60% 45% at 100% 100%,rgba(47,107,255,.38),transparent 64%),linear-gradient(160deg,#3D2CA8 0%,#2A1E7A 48%,#1E1650 100%);color:#fff}",
    "html.mk .kq-top,html.mk .kq-top *{color:#fff}",
    "html.mk .kq-top b{font:800 var(--t-md)/1.2 var(--f-tit)}",
    "html.mk .kq .kq-x{background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.2);color:#fff}",
    "html.mk .kq .kq-pts{display:inline-flex;align-items:center;min-height:38px;padding:0 var(--s-4);border-radius:var(--r-pill);background:rgba(0,0,0,.28);color:#FFC83D;font:800 var(--t-md)/1 var(--f-tit)}",
    "html.mk .kq .kq-hero h1,html.mk .kq .kq-hero p,html.mk .kq .kq-h,html.mk .kq .kq-h small,html.mk .kq .kq-fin-h,html.mk .kq .kq-cuenta,html.mk .kq .kq-cuenta *{color:#fff}",
    "html.mk .kq .kq-hero p{opacity:.9}",
    "html.mk .kq .kq-cuenta b{font:800 7rem/1 var(--f-tit);text-shadow:0 8px 0 rgba(0,0,0,.25)}",
    "html.mk .kq .kq-modo,html.mk .kq .kq-modo *{color:var(--p-tinta)}",
    "html[data-theme=dark] .kq .kq-modo,html[data-theme=dark] .kq .kq-modo *{color:#1F2430}",
    "html.mk .kq .kq-modo{background:#fff;box-shadow:0 5px 0 rgba(0,0,0,.28)}",
    "html.mk .kq .kq-modo:nth-child(5n+1){background:#FFE3EA}html.mk .kq .kq-modo:nth-child(5n+2){background:#DDE7FF}html.mk .kq .kq-modo:nth-child(5n+3){background:#FFF1C7}html.mk .kq .kq-modo:nth-child(5n+4){background:#D8F5E2}html.mk .kq .kq-modo:nth-child(5n+5){background:#fff}",
    "html.mk .kq .kq-modo b{color:#1F2430}html.mk .kq .kq-modo small{color:#3C4560}html.mk .kq .kq-modo i{color:#1F2430}",
    /* pregunta */
    "html.mk .kq .kq-q{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--s-4);padding:var(--s-3) var(--s-4)}",
    "html.mk .kq .kq-ring{background:#fff;border-radius:50%;box-shadow:0 5px 0 rgba(0,0,0,.25)}",
    "html.mk .kq .kq-ring b{color:#1F2430;font:800 1.6rem/1 var(--f-tit)}",
    "html.mk .kq .kq-card{width:min(720px,100%);padding:var(--s-5);border-radius:var(--r-lg);background:#fff;box-shadow:0 6px 0 rgba(0,0,0,.25);text-align:center;color:#1F2430}",
    "html.mk .kq .kq-card small{display:block;margin:0 0 var(--s-2);font:700 var(--t-sm)/1.3 var(--f-tx);color:#5A6480}",
    "html.mk .kq .kq-card p{margin:0;font:800 var(--t-xl)/1.3 var(--f-tit);color:#1F2430}",
    "html.mk .kq .kq-resp{color:rgba(255,255,255,.85);font:600 var(--t-sm)/1.2 var(--f-tx)}",
    "html.mk .kq .kq-ops{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-2);padding:var(--s-2) var(--s-3) calc(var(--sab) + var(--s-3));max-width:980px;width:100%;margin:0 auto;box-sizing:border-box}",
    "html.mk .kq .kq-op{" + RESET + ";position:relative;display:flex;align-items:center;gap:var(--s-3);min-height:96px;padding:var(--s-3) var(--s-4);border-radius:var(--r-md);text-align:left;color:#fff;font-family:var(--f-tit);transition:transform .08s,opacity .2s,filter .2s}",
    "html.mk .kq .kq-op:active{transform:translateY(4px)}",
    "html.mk .kq .kq-op.c0{background:#D92F5F;box-shadow:0 6px 0 #9E1D43}",
    "html.mk .kq .kq-op.c1{background:#2F6BFF;box-shadow:0 6px 0 #1A45B8}",
    "html.mk .kq .kq-op.c2{background:#FFC83D;box-shadow:0 6px 0 #C58A00;color:#1F2430}",
    "html.mk .kq .kq-op.c3{background:#12853C;box-shadow:0 6px 0 #0A5A27}",
    "html.mk .kq .kq-op > i{flex:none;width:38px;height:38px;display:grid;place-items:center;color:inherit}",
    "html.mk .kq .kq-op > i svg{width:34px;height:34px}",
    "html.mk .kq .kq-op > span{flex:1;min-width:0;font:800 var(--t-lg)/1.25 var(--f-tit);color:inherit;overflow-wrap:anywhere}",
    "html.mk .kq .kq-op > em{position:absolute;right:8px;top:6px;font:700 .7rem/1 var(--f-tx);font-style:normal;color:inherit;opacity:.7}",
    "html.mk .kq .kq-op.elegida{box-shadow:0 6px 0 rgba(0,0,0,.35),0 0 0 4px #fff}",
    "html.mk .kq .kq-op.mal{filter:grayscale(.75) brightness(.72);opacity:.75}",
    "html.mk .kq .kq-op.bien{box-shadow:0 6px 0 rgba(0,0,0,.35),0 0 0 4px #fff;transform:scale(1.02)}",
    "@media (min-width:1024px){html.mk .kq .kq-op{min-height:128px}html.mk .kq .kq-card p{font-size:var(--t-2xl)}}",
    /* podio y cierre */
    "html.mk .kq .kq-pd b,html.mk .kq .kq-pd small{color:#fff}",
    "html.mk .kq .kq-esc{font-family:var(--f-tit);font-weight:800}",
    "html.mk .kq .kq-acc{display:grid;gap:var(--s-2)}",
    "html.mk .kq .kq-btn[data-kq=otra]{" + ORO + "}",
    "html.mk .kq .kq-btn.line{background:rgba(255,255,255,.14);color:#fff;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}",
    "html.mk .kq .kq-stats > div,html.mk .kq .kq-pr,html.mk .kq .kq-pin{background:#fff;box-shadow:0 4px 0 rgba(0,0,0,.25);color:#1F2430}",
    "html.mk .kq .kq-stats > div b,html.mk .kq .kq-pr b,html.mk .kq .kq-pin label{color:#1F2430}",
    "html.mk .kq .kq-stats > div,html.mk .kq .kq-stats > div small,html.mk .kq .kq-pr small{color:#5A6480}",
    "html.mk .kq .kq-pin input{background:#F1F4FA;color:#1F2430;box-shadow:inset 0 0 0 1.5px #D8DEEC}");

  /* ====================================================================== 26. ICONOS DEL QUIZ (4.8): figuras de respuesta y modos propios (img/quiz) */
  var QZ = function(n){ return "url(img/quiz/" + n + ".webp)"; };
  o("html.mk .kq .kq-op > i{width:46px;height:46px;background:center/contain no-repeat;filter:drop-shadow(0 2px 0 rgba(0,0,0,.18))}",
    "html.mk .kq .kq-op > i > *{display:none}",
    [0, 1, 2, 3].map(function(i){ return "html.mk .kq .kq-op.c" + i + " > i{background-image:" + QZ("f" + i) + "}"; }).join(""),
    "@media (min-width:1024px){html.mk .kq .kq-op > i{width:60px;height:60px}}",
    "html.mk .kq .kq-modo{grid-template-columns:60px minmax(0,1fr) auto;min-height:84px}",
    "html.mk .kq .kq-modo::before{content:'';display:block;grid-column:1;grid-row:1 / span 2;width:60px;height:60px;background:" + QZ("clasico") + " center/contain no-repeat}",
    "html.mk .kq .kq-modo b,html.mk .kq .kq-modo small{grid-column:2}html.mk .kq .kq-modo i{grid-column:3}",
    "html.mk .kq .kq-modo:nth-child(5n+2)::before{background-image:" + QZ("vf") + "}",
    "html.mk .kq .kq-modo:nth-child(5n+3)::before{background-image:" + QZ("contrarreloj") + "}",
    "html.mk .kq .kq-modo:nth-child(5n+4)::before{background-image:" + QZ("duelo") + "}",
    "html.mk .kq .kq-modo:nth-child(5n+5)::before{background-image:" + QZ("grupo") + "}",
    "html.mk .kq .kq-hero-fig,html.mk #view .jx-kq .jx-kq-fig{width:96px;height:96px;background:" + QZ("podio") + " center/contain no-repeat;border-radius:0;box-shadow:none;display:block;margin-left:auto;margin-right:auto}","html.mk #view .jx-kq .jx-kq-fig{margin:0}",
    "html.mk .kq .kq-hero-fig > *,html.mk #view .jx-kq .jx-kq-fig > *{display:none}",
    "html.mk #view .jx-kq .jx-kq-fig{background-image:" + QZ("clasico") + ";width:84px;height:84px}",
    "html.mk .kq .kq-pin label{display:flex;align-items:center;gap:var(--s-2)}",
    "html.mk .kq .kq-pin label::before{content:'';flex:none;width:34px;height:34px;background:" + QZ("megafono") + " center/contain no-repeat}");

  /* ====================================================================== 27. PANTALLA 1 VS 1 (4.9)
     Cuatro tarjetas de color pleno con su icono grande, etiqueta «En línea» y «Jugar»; el 1V1 va destacado a todo el ancho. */
  var DV = function(n, c1, c2, r, t, ic){ var b = "html.mk #view .dv-g > .dv-c:nth-child(" + n + ")"; return b + "{background:" + c1 + ";background-image:linear-gradient(120deg," + c1 + " 0%," + c2 + " 100%);box-shadow:0 6px 0 " + r + ";color:" + t + "}" + b + " *{color:" + t + "}" + b + " .ev-sello{background-image:" + ic + "}"; };
  o("html.mk #view .dv-h .fg-eyebrow,html.mk #view .dv-h .fg-sub{display:none}",
    "html.mk #view .dv-h .fg-h1{margin:0 0 var(--s-4)}",
    "html.mk #view .dv-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-3)}",
    "html.mk #view .dv-g > .dv-c{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;gap:var(--s-2);min-height:176px;padding:var(--s-4) var(--s-4) var(--s-4);border-radius:var(--r-lg);overflow:hidden;text-align:left}",
    "html.mk #view .dv-g > .dv-c:first-child{grid-column:1 / -1;min-height:168px;padding-right:150px;justify-content:center}",
    "html.mk #view .dv-g > .dv-c::before{content:'En línea';display:inline-flex;align-items:center;position:absolute;left:var(--s-4);top:var(--s-4);min-height:24px;padding:0 var(--s-3);border-radius:var(--r-pill);background:rgba(255,255,255,.26);font:800 .66rem/1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:inherit}",
    "html.mk #view .dv-g > .dv-c:first-child::before{position:static;margin:0 0 var(--s-1)}",
    "html.mk #view .dv-g > .dv-c .ev-sello{position:absolute;right:var(--s-3);top:var(--s-3);width:76px;height:76px;margin:0;border-radius:0;background:transparent center/contain no-repeat;box-shadow:none;filter:drop-shadow(0 5px 6px rgba(0,0,0,.2))}",
    "html.mk #view .dv-g > .dv-c:first-child .ev-sello{width:124px;height:124px;top:50%;margin-top:-62px;right:var(--s-4)}",
    "html.mk #view .dv-g > .dv-c .ev-sello > *{display:none}",
    "html.mk #view .dv-g > .dv-c > span:last-child{display:grid;gap:3px;min-width:0}",
    "html.mk #view .dv-g > .dv-c b{font:800 var(--t-xl)/1.15 var(--f-tit)}",
    "html.mk #view .dv-g > .dv-c:first-child b{font-size:var(--t-2xl)}",
    "html.mk #view .dv-g > .dv-c small,html.mk #view .dv-g > .dv-c > span:last-child > :not(b){font:500 var(--t-sm)/1.35 var(--f-tx);opacity:.95;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "html.mk #view .dv-g > .dv-c::after{content:'Jugar';display:inline-flex;align-items:center;min-height:38px;margin-top:var(--s-1);padding:0 var(--s-5);border-radius:var(--r-sm);background:#fff;color:#1F2430;box-shadow:0 3px 0 rgba(0,0,0,.22);font:800 var(--t-sm)/1 var(--f-tit)}",
    /* todas con la misma anatomía: etiqueta, título, detalle y «Jugar» a la izquierda; icono a la derecha */
    "html.mk #view .dv-g{grid-template-columns:minmax(0,1fr)}",
    "html.mk #view .dv-g > .dv-c{min-height:138px;padding-right:112px;justify-content:center}",
    "html.mk #view .dv-g > .dv-c::before{position:static;margin:0 0 var(--s-1)}",
    "html.mk #view .dv-g > .dv-c .ev-sello{width:84px;height:84px;top:50%;margin-top:-42px;right:var(--s-4)}",
    "html.mk #view .dv-g > .dv-c:first-child{min-height:176px}",
    "@media (min-width:760px){html.mk #view .dv-g{grid-template-columns:repeat(3,minmax(0,1fr))}html.mk #view .dv-g > .dv-c:first-child{grid-column:1 / -1}html.mk #view .dv-g > .dv-c:not(:first-child){padding-right:var(--s-4);padding-top:104px;justify-content:flex-end;min-height:236px}html.mk #view .dv-g > .dv-c:not(:first-child) .ev-sello{top:var(--s-4);margin-top:0;right:auto;left:var(--s-4)}html.mk #view .dv-g > .dv-c:not(:first-child)::before{position:absolute;left:auto;right:var(--s-4);top:var(--s-4);margin:0}}",
    DV(1, "#C2245A", "#F0527F", "#8E1840", "#fff", "url(img/quiz/duelo.webp)"),
    DV(2, "#4A32C8", "#6F55E8", "#33218F", "#fff", "url(img/quiz/clasico.webp)"),
    DV(3, "#2255E0", "#4A7BFF", "#1A45B8", "#fff", "url(img/juegos/wb.webp)"),
    DV(4, "#0E7A38", "#22A455", "#095426", "#fff", "url(img/juegos/tc.webp)"),
    "@media (min-width:1024px){html.mk #view .dv-g > .dv-c{min-height:190px}html.mk #view .dv-g > .dv-c .ev-sello{width:96px;height:96px}html.mk #view .dv-g > .dv-c:first-child .ev-sello{width:150px;height:150px;margin-top:-75px;right:var(--s-6)}}");

  /* ====================================================================== 28. CABECERAS DE LAS HERRAMIENTAS Y MANZANA POR JUEGO (4.10)
     Las herramientas de Práctica (Mis palabras, Vocabulario, Sonidos, Lecturas, Expresión oral, Simulacros, Conversa)
     tenían cada una un cartel de degradado de otro color (naranja, verde, morado…). Ahora todas usan la misma cabecera
     del sistema: tarjeta de superficie, rótulo azul, título, una línea de apoyo y su dato en una ficha. */
  var HERO = "html.mk #view .am-hero,html.mk #view .snd-hero,html.mk #view .tu-hero,html.mk #view .v2-hero";
  var H2 = function(suf){ return HERO.split(",").map(function(x){ return x + suf; }).join(","); };
  o(HERO + "{position:relative;display:flex;flex-direction:row;align-items:center;gap:var(--s-4);min-height:0;height:auto;margin:0 0 var(--s-4);padding:var(--s-4) var(--s-5);overflow:hidden;" + TARJETA + "}",
    H2("::before") + "," + H2("::after") + "{display:none}",
    H2(" > div:not([class])") + "{flex:1;min-width:0;display:grid;gap:var(--s-1);padding:0}",
    H2(" *") + "{color:var(--p-tinta);text-shadow:none}",
    H2(" small") + "{margin:0;font:800 .7rem/1.2 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:var(--p-azul-tx);opacity:1}",
    H2(" h1") + "{margin:0;font:800 var(--t-xl)/1.15 var(--f-tit);letter-spacing:-.01em;color:var(--p-tinta)}",
    H2(" p") + "{margin:0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2);opacity:1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:none}",
    H2(" > img") + "{flex:none;order:2;position:static;width:76px;height:76px;object-fit:contain;margin:0;border-radius:0;background:none;box-shadow:none;filter:none;transform:none}",
    "html.mk #view .am-hero .am-count,html.mk #view .v2-hero .v2-ring{flex:none;display:grid;place-items:center;align-content:center;gap:2px;width:76px;height:76px;min-width:0;padding:0;border-radius:var(--r-md);background:var(--p-azul-p);background-image:none;box-shadow:none;border:0}",
    "html.mk #view .am-hero .am-count b,html.mk #view .v2-hero .v2-ring b{font:800 var(--t-lg)/1 var(--f-tit);color:var(--p-azul-tx)}",
    "html.mk #view .v2-hero .v2-ring b{background:none;box-shadow:none;width:auto;height:auto;border-radius:0}",
    "html.mk #view .tu-hero > img{border:0;outline:0;padding:0}",
    "html.mk #view .am-hero .am-count span{font:700 .62rem/1.1 var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:var(--p-azul-tx)}",
    "html.mk #view .v2-hero .v2-ring::before,html.mk #view .v2-hero .v2-ring::after{display:none}",
    "html.mk #view .snd-hero .snd-pb,html.mk #view .v2-hero .v2-pb{height:8px;margin:var(--s-2) 0 0;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden}",
    "html.mk #view .snd-hero .snd-pb i,html.mk #view .v2-hero .v2-pb i{display:block;height:100%;border-radius:var(--r-pill);background:var(--p-azul);background-image:none}",
    "html.mk #view .snd-hero .snd-pbt,html.mk #view .v2-hero .v2-pbt{font:600 var(--t-xs)/1.2 var(--f-tx);letter-spacing:0;text-transform:none;color:var(--p-apagado)}",
    "@media (max-width:379.98px){" + H2(" > img") + ",html.mk #view .am-hero .am-count,html.mk #view .v2-hero .v2-ring{width:64px;height:64px}}",
    /* portadas de los juegos: un Manzana distinto en cada una (con las poses que hay; ver la lista de poses a medida) */
    [["ff", "feliz"], ["bc", "racha-fuego"], ["tw", "lupa"], ["wc", "alerta"], ["pb", "sentado"], ["gr", "corre"], ["sr", "bandera"], ["sb", "escribe"], ["cc", "mz-gafas"], ["ah", "audifonos"],
     ["mr", "ovillo"], ["ld", "mz-curioso"], ["cm", "llama"], ["wb", "enojado"], ["vd", "saluda"], ["tc", "trofeo"], ["rq", "tumbado-corazon"], ["bb", "celebra"], ["la", "mz-lado"], ["mc", "duda"]]
      .map(function(x){ return "html.mk .plxg .plxg-wrap.pt-" + x[0] + " .pt5-hero::after{background-image:url(img/mzj/" + x[0] + ".webp)}"; }).join(""));

  /* ====================================================================== 29. LOGROS (4.11): un icono propio por logro (img/logros), en color al ganarlo */
  o("html.mk #view .achs .ach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--s-3)}",
    "html.mk #view .achs .ach{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:var(--s-1);min-height:164px;padding:var(--s-4) var(--s-2) var(--s-3);text-align:center;border:0;border-radius:var(--r-lg);background:var(--p-sup-2);background-image:none;box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);opacity:1}",
    "html.mk #view .achs .ach .ab{flex:none;width:76px;height:76px;margin:0 0 var(--s-1);border-radius:0;background:transparent center/contain no-repeat;box-shadow:none;filter:grayscale(1) opacity(.42)}",
    "html.mk #view .achs .ach .ab > *{display:none}",
    "html.mk #view .achs .ach b{font:700 var(--t-sm)/1.2 var(--f-tit);color:var(--p-apagado)}",
    "html.mk #view .achs .ach small{font:500 var(--t-xs)/1.25 var(--f-tx);color:var(--p-apagado)}",
    /* ganado: icono a color, tarjeta con relieve y cinta */
    "html.mk #view .achs .ach.on,html.mk #view .achs .ach.got,html.mk #view .achs .ach.ok{background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-oro-r),0 4px 0 var(--p-oro-r)}",
    "html.mk #view .achs .ach.on .ab,html.mk #view .achs .ach.got .ab,html.mk #view .achs .ach.ok .ab{filter:drop-shadow(0 4px 5px rgba(0,0,0,.18))}",
    "html.mk #view .achs .ach.on b,html.mk #view .achs .ach.got b,html.mk #view .achs .ach.ok b{color:var(--p-tinta)}",
    "html.mk #view .achs .ach.on small,html.mk #view .achs .ach.got small,html.mk #view .achs .ach.ok small{color:var(--p-oro-tx);font-weight:700}",
    Array.apply(null, Array(19)).map(function(_, i){ return "html.mk #view .achs .ach:nth-child(" + (i + 1) + ") .ab{background-image:url(img/logros/l" + (i < 10 ? "0" : "") + i + ".webp)}"; }).join(""),
    "@media (max-width:479.98px){html.mk #view .achs .ach-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    "html.mk #view .achs h2 small{font:700 var(--t-sm)/1 var(--f-tx);color:var(--p-apagado)}");

  /* 4.12: la pose de cada juego (img/mzj) va algo más grande en la portada */
  o("html.mk .plxg .pt5-hero::after{width:138px;height:138px}",
    "html.mk .plxg .pt5-hero h1{max-width:calc(100% - 132px)}html.mk .plxg .pt5-hero .ev-tipo{max-width:calc(100% - 128px)}");

  /* ====================================================================== 30. PERFIL NUEVO Y AMIGOS (4.13) */
  o("html.mk #view .gperfil > .prof-head,html.mk #view .gperfil > .av-prog{display:none}",
    "html.mk #view .gperfil > .p5-pf{order:0;display:grid;gap:var(--s-3);font-family:var(--f-tx);color:var(--p-tinta)}",
    ".p5-pf-cab{position:relative;display:grid;place-items:end center;height:210px;border-radius:var(--r-xl);overflow:hidden;background-image:linear-gradient(140deg,#2255E0 0%,#4A6FF5 55%,#F0527F 130%);box-shadow:0 6px 0 var(--p-azul-r)}",
    ".p5-pf-gato{display:block;width:210px;height:200px;margin-bottom:-18px}",
    ".p5-pf-gato svg{width:100%;height:100%;display:block}",
    ".p5-pf-id h1{margin:var(--s-2) 0 0;font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta);letter-spacing:-.02em}",
    ".p5-pf-id p{margin:2px 0 0;font:700 var(--t-xs)/1.3 var(--f-tx);letter-spacing:.08em;text-transform:uppercase;color:var(--p-apagado)}",
    ".p5-pf-acc{display:flex;align-items:stretch;gap:var(--s-2)}",
    ".p5-pf-b{all:unset;box-sizing:border-box;cursor:pointer;flex:1;display:flex;align-items:center;justify-content:center;gap:var(--s-2);min-height:54px;padding:0 var(--s-4);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve);font:800 var(--t-sm)/1 var(--f-tit);letter-spacing:.06em;text-transform:uppercase;color:var(--p-azul-tx)}",
    ".p5-pf-b:active{transform:translateY(3px);box-shadow:inset 0 0 0 2px var(--p-linea),0 1px 0 var(--p-relieve)}",
    ".p5-pf-n{flex:none;display:grid;place-items:center;align-content:center;min-width:76px;padding:0 var(--s-3);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve)}",
    ".p5-pf-n b{font:800 var(--t-lg)/1 var(--f-tit);color:var(--p-tinta)}.p5-pf-n small{font:700 .64rem/1.2 var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:var(--p-apagado)}",
    ".p5-pf-h{display:flex;align-items:center;justify-content:space-between;margin:var(--s-3) 0 0;font:800 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-apagado)}",
    ".p5-pf-h button{all:unset;cursor:pointer;min-height:36px;display:inline-flex;align-items:center;font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.04em;color:var(--p-azul-tx)}",
    ".p5-pf-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-2)}",
    ".p5-pf-s{display:flex;align-items:center;gap:var(--s-3);min-height:64px;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    ".p5-pf-s img{flex:none;width:34px;height:34px}",
    ".p5-pf-s span{display:grid;gap:2px;min-width:0}",
    ".p5-pf-s b{font:800 var(--t-md)/1.15 var(--f-tit);color:var(--p-tinta);overflow-wrap:anywhere}",
    ".p5-pf-s small{font:600 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".p5-pf-am{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--s-2)}",
    ".p5-pf-a{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:grid;justify-items:center;gap:4px;min-width:0}",
    ".p5-pf-a > span{width:100%;max-width:64px;aspect-ratio:1;display:grid;place-items:center;border-radius:50%;background:var(--p-sup-3);box-shadow:inset 0 0 0 2px var(--p-linea);overflow:hidden}",
    ".p5-pf-a.hoy > span{background:var(--p-oro-p);box-shadow:inset 0 0 0 2.5px var(--p-oro-r)}",
    ".p5-pf-a > span svg{width:86%;height:86%;display:block}",
    ".p5-pf-a.vacio > span{background:transparent;box-shadow:none;border:2px dashed var(--p-linea);font:700 1.4rem/1 var(--f-tit);color:var(--p-apagado)}",
    ".p5-pf-a em{position:absolute;right:calc(50% - 36px);top:-4px;min-width:24px;height:22px;padding:0 5px;display:grid;place-items:center;border-radius:var(--r-pill);background:var(--p-rosa-btn);color:#fff;font:800 .72rem/1 var(--f-tit);font-style:normal;box-shadow:0 0 0 2px var(--p-bg)}",
    ".p5-pf-a small{max-width:100%;font:600 .68rem/1.2 var(--f-tx);color:var(--p-tinta-2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    ".p5-pf-lg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--s-2)}",
    ".p5-pf-l{display:grid;justify-items:center;gap:4px;padding:var(--s-2) 4px;border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);min-width:0}",
    ".p5-pf-l img{width:56px;height:56px}",
    ".p5-pf-l small{font:600 .68rem/1.2 var(--f-tx);color:var(--p-tinta-2);text-align:center;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".p5-pf-v{grid-column:1 / -1;margin:0;padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background:var(--p-sup-2);font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    "@media (min-width:1024px){.p5-pf-cab{height:240px}.p5-pf-g{grid-template-columns:repeat(4,minmax(0,1fr))}.p5-pf-am{grid-template-columns:repeat(5,84px)}}",
    "html.mk #view .gperfil > .ptabs{margin-top:var(--s-3)}",
    /* ventana de amigos */
    "html.mk .gmodal.m-am .gm-card{width:min(440px,100%)}",
    ".p5-am{display:flex;flex-direction:column;gap:var(--s-3);min-height:0;overflow-y:auto;padding:var(--s-5) var(--s-5) 0;font-family:var(--f-tx);color:var(--p-tinta)}",
    ".p5-am .gm-t{margin:0;font:800 var(--t-xl)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-am-cod{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:var(--s-3);padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background:var(--p-azul-p)}",
    ".p5-am-cod small{grid-column:1;font:800 .68rem/1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:var(--p-azul-tx)}",
    ".p5-am-cod b{grid-column:1;font:800 1.5rem/1.2 var(--f-tit);letter-spacing:.14em;color:var(--p-tinta)}",
    ".p5-am-cod .gbtn{grid-column:2;grid-row:1 / span 2;min-height:44px;padding:10px var(--s-4)}",
    ".p5-am-n,.p5-am-v{margin:0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".p5-am-f{display:flex;gap:var(--s-2)}",
    ".p5-am-f input{flex:1;min-width:0;box-sizing:border-box;min-height:52px;padding:0 var(--s-4);border:0;border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);font:700 var(--t-md)/1 var(--f-tx);letter-spacing:.1em;text-transform:uppercase}",
    ".p5-am-f input::placeholder{letter-spacing:0;text-transform:none;font-weight:500;color:var(--p-apagado)}",
    ".p5-am-f input:focus{outline:0;box-shadow:inset 0 0 0 2px var(--p-azul)}",
    ".p5-am-f .gbtn{min-height:52px}",
    ".p5-am-msg{min-height:1.3em;margin:0;font:700 var(--t-sm)/1.3 var(--f-tx);color:var(--p-azul-tx)}",
    ".p5-am-l{display:grid;gap:var(--s-2)}",
    ".p5-am-i{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-2) var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".p5-am-g{flex:none;width:44px;height:44px;border-radius:50%;background:var(--p-sup-3);overflow:hidden;display:grid;place-items:center}.p5-am-g svg{width:86%;height:86%}",
    ".p5-am-t{flex:1;min-width:0;display:grid;gap:2px}.p5-am-t b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.p5-am-t small{font:500 var(--t-xs)/1.3 var(--f-tx);color:var(--p-apagado)}",
    ".p5-am-r{flex:none;display:inline-flex;align-items:center;gap:3px;font:800 var(--t-md)/1 var(--f-tit);color:var(--p-tinta)}",
    ".p5-am-x{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:40px;height:40px;display:grid;place-items:center;border-radius:50%;color:var(--p-apagado);font:700 var(--t-sm)/1 var(--f-tx)}",
    ".p5-am .set-row.c{position:sticky;bottom:0;margin:var(--s-2) calc(var(--s-5) * -1) 0;padding:var(--s-3) var(--s-4) var(--s-4);background:var(--p-sup);box-shadow:inset 0 1.5px 0 var(--p-linea);display:flex}",
    ".p5-am .set-row.c .gbtn{flex:1;min-height:52px}");

  /* ====================================================================== 31. EDITOR DEL GATO (4.14) */
  o("html.mk #view .gperfil .ptabs > button.p5-fuera,html.mk #view .cust .p5-fuera{display:none}",
    "html:not(.p5-ed) #view .gperfil .cust,html:not(.p5-ed) #view .gperfil .evo{display:none}",
    ".p5-pf-cab{cursor:pointer}",
    ".p5-pf-cab::after{content:'Editar';position:absolute;right:var(--s-3);bottom:var(--s-3);display:inline-flex;align-items:center;min-height:36px;padding:0 var(--s-4);border-radius:var(--r-pill);background:rgba(255,255,255,.92);color:#1F2430;box-shadow:0 3px 0 rgba(0,0,0,.2);font:800 var(--t-xs)/1 var(--f-tit);letter-spacing:.06em;text-transform:uppercase}",
    "html.p5-ed,html.p5-ed body{overflow:hidden}",
    "html.p5-ed #view .gperfil .evo,html.p5-ed #px-rail,html.p5-ed #p5-lado,html.p5-ed nav#tabbar.tabbar,html.p5-ed header#topbar.top{display:none}",
    "html.p5-ed #view,html.p5-ed #view .gperfil,html.p5-ed #view .ptab-body{transform:none;animation:none;filter:none;opacity:1;contain:none}",
    "html.p5-ed #view .gperfil .cust{position:fixed;inset:0;z-index:300;display:flex;flex-direction:column;gap:0;width:auto;max-width:none;margin:0;padding:0;border-radius:0;background:var(--p-bg);background-image:none;box-shadow:none;overflow:hidden;color:var(--p-tinta)}",
    ".p5-ed-top{flex:none;display:flex;align-items:center;gap:var(--s-3);min-height:56px;padding:calc(var(--sat) + var(--s-1)) var(--s-3) var(--s-1);background:var(--p-vidrio-solido);box-shadow:inset 0 -1.5px 0 var(--p-linea)}",
    ".p5-ed-top b{flex:1;text-align:center;font:800 var(--t-md)/1 var(--f-tit);color:var(--p-tinta)}",
    ".p5-ed-x{all:unset;box-sizing:border-box;cursor:pointer;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;color:var(--p-tinta-2);font:700 var(--t-lg)/1 var(--f-tx)}",
    ".p5-ed-ok{all:unset;box-sizing:border-box;cursor:pointer;min-height:44px;padding:0 var(--s-3);display:inline-flex;align-items:center;font:800 var(--t-md)/1 var(--f-tit);letter-spacing:.04em;text-transform:uppercase;color:var(--p-azul-tx)}",
    "html.p5-ed #view .gperfil .cust .cust-prev{flex:none;position:relative;width:100%;max-width:none;height:34dvh;min-height:200px;aspect-ratio:auto;margin:0;border-radius:0;overflow:hidden}",
    "html.p5-ed #view .gperfil .cust .cust-prev .cp-scene,html.p5-ed #view .gperfil .cust .cust-prev > svg{position:absolute;inset:0;width:100%;height:100%}",
    "html.p5-ed #view .gperfil .cust .cust-prev .cp-cat{position:absolute;left:50%;bottom:-4%;top:auto;width:auto;height:96%;aspect-ratio:1;transform:translateX(-50%);margin:0}",
    "html.p5-ed #view .gperfil .cust .cust-prev .cp-cat svg{width:100%;height:100%}",
    "html.p5-ed #view .gperfil .cust .cust-side{flex:1;min-height:0;display:flex;flex-direction:column;gap:0;width:auto;padding:0;overflow:hidden}",
    "html.p5-ed #view .gperfil .cust .cust-side > h2{display:none}",
    "html.p5-ed #view .gperfil .cust .cust-side > .gfield{flex:none;display:flex;align-items:center;gap:var(--s-3);margin:0;padding:var(--s-2) var(--s-4)}",
    "html.p5-ed #view .gperfil .cust .cust-side > .gfield > span{flex:none;font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.08em;text-transform:uppercase;color:var(--p-apagado)}",
    "html.p5-ed #view .gperfil .cust .cust-side > .gfield input{flex:1;min-width:0;min-height:44px}",
    "html.p5-ed #view .gperfil .cust .cust-side > .seg{flex:none;display:flex;gap:0;margin:0;padding:0 var(--s-2);border-radius:0;background:none;box-shadow:inset 0 -2px 0 var(--p-linea);overflow-x:auto;scrollbar-width:none}",
    "html.p5-ed #view .gperfil .cust .cust-side > .seg::-webkit-scrollbar{display:none}",
    "html.p5-ed #view .gperfil .cust .cust-side > .seg > button{flex:1 0 auto;min-width:76px;min-height:48px;padding:0 var(--s-3);border-radius:0;background:none;box-shadow:none;font:800 var(--t-xs)/1 var(--f-tit);letter-spacing:.08em;text-transform:uppercase;color:var(--p-apagado)}",
    "html.p5-ed #view .gperfil .cust .cust-side > .seg > button.p5-on{color:var(--p-azul-tx);background:none;box-shadow:inset 0 -3px 0 var(--p-azul)}",
    "html.p5-ed #view .gperfil .cust .cgrid,html.p5-ed #view .gperfil .cust .p5-mus{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;align-content:start;padding:var(--s-4) var(--s-4) calc(var(--sab) + var(--s-6));margin:0}",
    "html.p5-ed #view .gperfil .cust .cgrid{grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:var(--s-2)}",
    "html.p5-ed #view .gperfil .cust .cgrid > *{min-height:104px;border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea)}",
    "html.p5-ed #view .gperfil .cust .cgrid > .on,html.p5-ed #view .gperfil .cust .cgrid > [aria-pressed=true]{background:var(--p-azul-p);box-shadow:inset 0 0 0 3px var(--p-azul)}",
    ".p5-mus{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--s-3)}",
    ".p5-mus-t{grid-column:1 / -1;margin:0 0 var(--s-1);font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-mu{all:unset;box-sizing:border-box;cursor:pointer;display:grid;justify-items:center;gap:6px;min-width:0}",
    ".p5-mu i{display:block;width:100%;max-width:64px;aspect-ratio:1;border-radius:var(--r-md);box-shadow:inset 0 0 0 2px var(--p-linea),0 0 0 4px var(--p-sup),0 0 0 6px var(--p-linea);background:var(--c,repeating-linear-gradient(135deg,var(--p-sup-3) 0 6px,var(--p-sup) 6px 12px))}",
    ".p5-mu.on i{box-shadow:inset 0 0 0 2px rgba(255,255,255,.5),0 0 0 4px var(--p-sup),0 0 0 7px var(--p-azul)}",
    ".p5-mu small{font:600 .68rem/1.2 var(--f-tx);color:var(--p-tinta-2);text-align:center}",
    "@media (min-width:1024px){html.p5-ed #view .gperfil .cust{inset:0;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);grid-template-rows:auto minmax(0,1fr)}html.p5-ed #view .gperfil .cust > .p5-ed-top{grid-column:1 / -1}html.p5-ed #view .gperfil .cust .cust-prev{height:auto;min-height:0}html.p5-ed #view .gperfil .cust .cust-prev .cp-cat{height:70%;bottom:6%}html.p5-ed #view .gperfil .cust .cust-side{box-shadow:inset 1.5px 0 0 var(--p-linea)}.p5-mus{grid-template-columns:repeat(5,84px)}html.p5-ed #view .gperfil .cust .cgrid{grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}}");

  /* ====================================================================== 32. SOCIAL (4.15) */
  o("html.mk #view .gperfil .ptab-body.p5-fuera{display:none}",
    "html.mk #view .gperfil .ptabs.p5-so-on > button:not([data-p5-tab]){background:none;box-shadow:none;color:var(--p-tinta-2);font-weight:600}",
    "html.mk #view .gperfil .ptabs > button[data-p5-tab].on{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
    "html.mk #view .gperfil > .p5-so{order:2;display:grid;gap:var(--s-3);font-family:var(--f-tx);color:var(--p-tinta)}",
    ".p5-so-c{display:grid;gap:var(--s-3);padding:var(--s-4);border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    ".p5-so-c{grid-template-columns:minmax(0,1fr);min-width:0}",".p5-so-c > *{min-width:0}","html.mk #view .gperfil > .p5-so{grid-template-columns:minmax(0,1fr)}",".p5-rg ol li > b img,.p5-pasos.p5-rg ol img{width:26px;height:26px}",".p5-rg ol li{gap:var(--s-3)}",".p5-pf-b{font-size:var(--t-xs);padding:0 var(--s-3)}",".p5-so-c h3{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".p5-so-n{margin:0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".p5-so-frz{display:flex;align-items:center;gap:var(--s-3)}",
    ".p5-so-ic{flex:none;width:60px;height:60px;display:grid;place-items:center;border-radius:var(--r-md);background:var(--p-azul-p)}",
    ".p5-so-frz > span:nth-child(2){flex:1;min-width:0;display:grid;gap:2px}",
    ".p5-so-frz b{font:800 var(--t-lg)/1.1 var(--f-tit);color:var(--p-tinta)}.p5-so-frz small{font:600 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".p5-so-b{all:unset;box-sizing:border-box;cursor:pointer;flex:none;display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:40px;padding:0 var(--s-4);border-radius:var(--r-sm);background:var(--p-azul-btn);color:#fff;box-shadow:0 3px 0 var(--p-azul-r);font:800 var(--t-sm)/1 var(--f-tit);white-space:nowrap}",
    ".p5-so-b:active{transform:translateY(2px);box-shadow:0 1px 0 var(--p-azul-r)}",
    ".p5-so-b.off{background:var(--p-sup);color:var(--p-tinta-2);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    ".p5-so-b[disabled]{cursor:not-allowed;background:var(--p-sup-3);color:var(--p-apagado);box-shadow:0 3px 0 var(--p-linea)}",
    ".p5-so-g{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:40px;height:40px;display:grid;place-items:center;border-radius:var(--r-sm);background:var(--p-lila-p)}",
    ".p5-so-ev{flex:none;width:36px;height:36px;object-fit:contain}",
    ".p5-so-seg{display:flex;gap:var(--s-1);padding:var(--s-1);border-radius:var(--r-md);background:var(--p-sup-3)}",
    ".p5-so-seg button{all:unset;box-sizing:border-box;cursor:pointer;flex:1;min-height:44px;display:flex;align-items:center;justify-content:center;gap:6px;border-radius:var(--r-sm);font:600 var(--t-sm)/1 var(--f-tx);color:var(--p-tinta-2)}",
    ".p5-so-seg button b{font:800 var(--t-sm)/1 var(--f-tit)}",
    ".p5-so-seg button[aria-pressed=true]{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
    ".p5-so .p5-am-t small b{color:var(--p-tinta);font-weight:700}",
    ".p5-so .p5-am-i{flex-wrap:wrap}.p5-so .p5-am-t{flex:1 1 120px}",
    "button.p5-pf-n{all:unset;box-sizing:border-box;cursor:pointer;flex:none;display:grid;place-items:center;align-content:center;min-width:76px;padding:0 var(--s-2);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-linea),0 4px 0 var(--p-relieve)}",
    ".p5-rg ol li > b{background:var(--p-sup);width:40px;height:40px;border-radius:var(--r-sm)}",
    ".p5-rg ol li i{font-style:normal;font-weight:800;color:var(--p-tinta)}",
    "@media (min-width:1024px){html.mk #view .gperfil > .p5-so.p5-so{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}");

  /* ====================================================================== 33. NODOS CON ICONO PROPIO Y SOCIAL EN SU PANTALLA (4.16) */
  o(/* nodos: el botón es el icono redondo de su tipo (img/nodos) */
    ".p5-nodo,.p5-nodo.hec,.p5-nodo.sig,.p5-nodo.pend{position:relative;width:66px;height:66px;border-radius:50%;background:none;box-shadow:none;overflow:visible}",
    ".p5-nodo img{display:block;width:100%;height:100%;filter:drop-shadow(0 5px 0 rgba(31,36,48,.2))}",
    ".p5-nodo:active{transform:translateY(4px)}.p5-nodo:active img{filter:drop-shadow(0 1px 0 rgba(31,36,48,.2))}",
    ".p5-nodo.pend img{filter:grayscale(1) opacity(.5) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".p5-nodo.sig{width:80px;height:80px;margin:12px 0;box-shadow:0 0 0 6px var(--p-bg),0 0 0 10px color-mix(in srgb,var(--uc) 55%,transparent)}",
    ".p5-nodo .p5-ok{position:absolute;right:-6px;bottom:-4px;width:28px;height:28px;background:url(img/nodos/hecho.webp) center/contain no-repeat;filter:drop-shadow(0 2px 0 rgba(0,0,0,.2))}",
    ".p5-nodo.cofre,.p5-nodo.cofre.hec{width:72px;height:72px;border-radius:50%;background:none;box-shadow:none}",
    ".p5-nodo.cofre img{width:100%;height:100%;filter:grayscale(.9) opacity(.6) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".p5-nodo.cofre.hec img,.p5-u[data-est=actual] .p5-nodo.cofre img{filter:drop-shadow(0 5px 0 rgba(31,36,48,.2))}",
    ".p5-u[data-est=pend] .p5-nodo.cofre img{filter:grayscale(1) opacity(.45) drop-shadow(0 5px 0 rgba(31,36,48,.12))}",
    ".p5-ns{gap:16px}",
    /* Social: su propia pantalla */
    "html.mk #view .p5-sv{display:block;padding:0}",
    "html.mk #view .p5-sv > .p5-so{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-3);font-family:var(--f-tx);color:var(--p-tinta)}",
    "@media (min-width:1024px){html.mk #view .p5-sv > .p5-so{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}html.mk #view .p5-sv > .p5-so > .p5-so-rachas{grid-column:1 / -1}}",
    ".p5-so-rachas .p5-pf-am{grid-template-columns:repeat(5,minmax(0,84px));justify-content:start}",
    ".p5-so-rachas span.p5-pf-a{cursor:default}",
    ".p5-am-quien{all:unset;box-sizing:border-box;cursor:pointer;flex:1 1 150px;min-width:0;display:flex;align-items:center;gap:var(--s-3);border-radius:var(--r-sm)}",
    ".p5-am-quien:focus-visible{" + FOCO + "}",
    ".p5-am-quien .p5-am-t{flex:1;min-width:0}",
    /* barra con seis y el icono de Social */
    "html.mk body nav#tabbar.tabbar{gap:0;padding:var(--s-2) 6px}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn .label{font-size:.64rem}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn::before{width:28px;height:28px}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[data-mpk=social]::before{background-image:" + ICO("amigos") + "}",
    "#px-rail .rl-b[data-view=social] svg{display:none}",
    "#px-rail .rl-nav .rl-b[data-view=social]::before{content:'';display:block;position:static;flex:none;width:30px;height:30px;background:" + ICO("amigos") + " center/contain no-repeat;border-radius:0;box-shadow:none}",
    /* perfil de otra persona */
    "html.mk .gmodal.m-otro .gm-card{width:min(460px,100%);padding:0}",
    ".p5-otro{display:flex;flex-direction:column;min-height:0;overflow-y:auto;font-family:var(--f-tx);color:var(--p-tinta)}",
    ".p5-otro-cab{flex:none;height:170px;border-radius:0;box-shadow:none;cursor:default}.p5-otro-cab::after{display:none}",
    ".p5-otro-cab .p5-pf-gato{width:170px;height:164px;margin-bottom:-14px}",
    ".p5-otro-c{display:grid;gap:var(--s-3);padding:var(--s-4) var(--s-5)}",
    ".p5-otro .gm-t{margin:0;font:800 var(--t-2xl)/1.15 var(--f-tit);color:var(--p-tinta)}",
    ".p5-otro-s{margin:-6px 0 0;font:600 var(--t-xs)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".p5-otro-acc{display:flex;gap:var(--s-2)}.p5-otro-acc .p5-so-b{flex:1;min-height:46px}",
    ".p5-otro .p5-pf-g{grid-template-columns:repeat(2,minmax(0,1fr))}",
    ".p5-otro .p5-pf-h{margin:0}",
    ".p5-otro .set-row.c{position:sticky;bottom:0;margin:0;padding:var(--s-3) var(--s-4) var(--s-4);background:var(--p-sup);box-shadow:inset 0 1.5px 0 var(--p-linea);display:flex}",
    ".p5-otro .set-row.c .gbtn{flex:1;min-height:50px}");

  /* ====================================================================== 34. LECCIÓN SIN HUECOS (4.17)
     La cabecera heredaba dos filas (112 px) aunque solo usa una: de ahí el hueco bajo la barra de avance. En PC el panel
     se ajusta a su contenido y nunca se sale de la ventana. */
  o("html.mk #player .ph .wrap{grid-template-rows:44px;grid-auto-rows:0;height:44px;min-height:44px;row-gap:0;align-content:center}",
    "html.mk #player .ph{padding:calc(var(--sat) + var(--s-2)) 0 var(--s-1)}",
    "html.mk #player .pbody .wrap{padding-top:var(--s-3);padding-bottom:var(--s-5)}",
    "html.mk #player .tx-cab{margin:0 0 var(--s-3);min-height:36px}",
    "html.mk #player .tx-saltar{min-height:36px}",
    "html.mk #player .tx-s h2,html.mk #player .tx-s .disp{margin:0 0 var(--s-3);font-size:var(--t-xl)}",
    "html.mk #player .tx-prof{margin:0 0 var(--s-4);padding:var(--s-2) var(--s-3)}",
    "html.mk #player .tx-prof img{width:48px;height:48px}",
    "html.mk #player .tx-ej{min-height:64px;padding:var(--s-2) var(--s-3);gap:var(--s-3)}",
    "html.mk #player .tx-ej .tx-au{width:42px;height:42px}",
    "html.mk #player .tx-ej b{font-size:var(--t-md)}",
    "html.mk #player .ask{margin:0 0 var(--s-3)}",
    "html.mk #player .q{margin:0 0 var(--s-4)}",
    "html.mk #player .opt{min-height:54px;font-size:var(--t-md)}",
    "html.mk #player .pf .pfa .btn{min-height:50px;font-size:var(--t-md)}",
    "@media (min-width:1024px){" +
      "html.mk #player.player:not([hidden]){padding:var(--s-4)}" +
      "html.mk #player .ph,html.mk #player .pbody,html.mk #player .pf{width:min(760px,100%);max-width:760px}" +
      "html.mk #player .ph{padding:var(--s-4) var(--s-4) var(--s-2)}" +
      "html.mk #player .pbody{flex:0 1 auto;min-height:160px;max-height:none}" +
      "html.mk #player .ph .wrap,html.mk #player .pbody .wrap,html.mk #player .pf .wrap{max-width:640px}" +
      "html.mk #player .tx-ejs{grid-template-columns:repeat(2,minmax(0,1fr))}" +
      "html.mk #player .opts{grid-template-columns:repeat(2,minmax(0,1fr))}" +
      "html.mk #player .pf .fb{max-height:34dvh}}",
    "@media (min-width:1024px) and (max-height:760px){html.mk #player.player:not([hidden]){padding:var(--s-2)}html.mk #player .ph{padding-top:var(--s-3)}}",
    /* pista de teclado en PC */
    ".p5-esc{display:none}",
    "@media (min-width:1024px) and (hover:hover){.p5-esc{display:inline-flex;align-items:center;gap:6px;position:fixed;z-index:500;left:var(--s-4);bottom:var(--s-4);padding:6px var(--s-3);border-radius:var(--r-pill);background:rgba(20,24,38,.72);color:#fff;font:600 var(--t-xs)/1 var(--f-tx);pointer-events:none;opacity:0;transition:opacity .25s}.p5-esc.on{opacity:1}.p5-esc kbd{font:700 .7rem/1 var(--f-tx);padding:3px 6px;border-radius:5px;background:rgba(255,255,255,.2)}}");

  /* ====================================================================== 35. TALLAS (4.17)
     Repaso de tamaños en 360, 390, 768, 1024, 1366 y 1920 px: lo que se cortaba, se apretaba o quedaba suelto. */
  o(/* celulares angostos: la barra de arriba cabe entera y el aviso de instalar no se vuelve una torre */
    "@media (max-width:389.98px){" +
      "html.mk body header#topbar.top #stats{gap:4px}" +
      "html.mk body header#topbar.top #stats .gpill.px-chip{padding-left:7px;padding-right:9px;gap:4px;font-size:.84rem}" +
      "html.mk body header#topbar.top #stats .gpill.px-chip img,html.mk body header#topbar.top #stats .gpill.px-chip i{width:18px;height:18px}" +
      "html.mk body header#topbar.top .topbar-end{gap:6px}" +
      ".p5-inst-c{gap:var(--s-2);padding-left:var(--s-2)}.p5-inst-c img{width:40px;height:40px}.p5-inst-c b{font-size:var(--t-xs)}.p5-inst-c small{display:none}.p5-inst-c .p5-inst-b{padding-left:var(--s-3);padding-right:var(--s-3)}}",
    "@media (max-width:399.98px){.p5-nt{max-width:150px}}",
    /* tableta: la lección no se estira de lado a lado */
    "@media (min-width:700px) and (max-width:1023.98px){html.mk #player .ph .wrap,html.mk #player .pbody .wrap,html.mk #player .pf .wrap{max-width:640px;margin-left:auto;margin-right:auto}}",
    /* pantallas bajas: la hoja de corrección ocupa menos para dejar ver el ejercicio */
    "@media (max-height:720px){html.mk #player .pf .fb .pf-fbp{display:none}html.mk #player .pf .fb{padding-top:var(--s-3);padding-bottom:var(--s-2)}html.mk #player .pf .rep-link{margin-top:0}}",
    /* enlace de reporte: alto de dedo */
    "html.mk #player .pf .rep-link{min-height:36px;line-height:36px}",
    /* Profesores en PC: cuatro tarjetas que llenan el ancho en lugar de quedarse a un lado */
    "@media (min-width:1024px){html.mk #view .pq-profs .jx-profs{grid-template-columns:repeat(4,minmax(0,1fr));max-width:920px}}",
    /* Perfil en pantallas muy anchas: una sola columna (la columna de 320 px aplastaba el resumen) */
    "@media (min-width:1760px){html.mk #view .gperfil.gperfil{grid-template-columns:minmax(0,1fr)}html.mk #view .gperfil.gperfil > *,html.mk #view .gperfil.gperfil > .ptabs,html.mk #view .gperfil.gperfil > .ptab-body,html.mk #view .gperfil.gperfil > .prof-head,html.mk #view .gperfil.gperfil > .av-prog,html.mk #view .gperfil.gperfil > .plx-acad{grid-column:1;grid-row:auto}html.mk #view .gperfil.gperfil .ph-stats,html.mk #view .gperfil.gperfil .av-pg{grid-template-columns:repeat(4,minmax(0,1fr))}}",
    /* 1 vs 1: el campo del código seguía blanco en modo oscuro */
    "html.mk #plx1v1 .v1-join input#v1code{background:var(--p-hundido);color:var(--p-tinta);border:1.5px solid var(--p-linea);box-shadow:none;-webkit-text-fill-color:var(--p-tinta)}",
    "html.mk #plx1v1 .v1-join input#v1code::placeholder{color:var(--p-apagado);-webkit-text-fill-color:var(--p-apagado);opacity:1}",
    "html.mk #plx1v1 .v1-join input#v1code:focus{border-color:var(--p-azul)}",
    /* editor del gato: el nombre ya no pisa las patas */
    "html.p5-ed #view .gperfil .cust .cgrid .ctile > svg{height:60px;width:auto;max-width:100%}",
    "html.p5-ed #view .gperfil .cust .cgrid .ctile > small{margin-top:2px;line-height:1.15}",
    /* textos que quedaban por debajo de 11 px */
    "html.mk .kq .kq-pr small{font-size:11px;line-height:1.25}");

  /* ====================================================================== 36. SOCIAL 2 (4.18)
     Pantalla social con vida: tu círculo, rachas con amigos como historias, reto semanal, novedades con «Felicitar»,
     ranking de amigos, personas y avisos con campana. Referencias: el feed y las rachas de amigos de Duolingo y los
     «kudos» de un toque de Strava. */
  o(/* rejilla: en celular todo en una columna y en este orden; en PC, dos columnas */
    "html.mk #view .p5-sv > .p5-so.p5-so{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-3);align-items:start}",
    ".s2-izq,.s2-der{display:contents}",
    ".s2-top{order:0;display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);min-width:0}",
    "html.mk #view .s2-top .fg-h1{margin:0}",
    ".s2-hero{order:1}.s2-rachas{order:2}.s2-reto{order:3}.s2-caja{order:4}.s2-prot{order:5}",
    "@media (min-width:1024px) and (max-width:1439.98px),(min-width:1700px){" +
      "html.mk #view .p5-sv > .p5-so.p5-so{grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);column-gap:var(--s-4)}" +
      ".s2-top{grid-column:1 / -1}" +
      ".s2-izq,.s2-der{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-3);align-content:start;min-width:0}}",
    /* tarjeta base */
    ".s2-c{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-3);min-width:0;padding:var(--s-4);border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);font-family:var(--f-tx);color:var(--p-tinta)}",
    ".s2-c > *{min-width:0}",
    ".s2-c h2{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".s2-n{margin:0;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".s2-h3{margin:var(--s-2) 0 0;font:800 var(--t-xs)/1 var(--f-tit);letter-spacing:.08em;text-transform:uppercase;color:var(--p-apagado)}",
    ".s2-yo svg,.s2-r-g > span svg,.s2-ev-g svg,.s2-sug-g svg,.s2-reto-p i svg,.s2-av-i .p5-am-g svg{display:block;width:100%;height:100%}",
    ".s2-camp:focus-visible,.s2-b:focus-visible,.s2-nums button:focus-visible,.s2-r-g:focus-visible,.s2-r.mas:focus-visible,.s2-r-t:focus-visible,.s2-fel:focus-visible,.s2-tabs button:focus-visible,button.s2-rk-f:focus-visible,.s2-ev-g:focus-visible,.s2-sug-g:focus-visible{" + FOCO + "}",
    /* campana y contadores */
    ".s2-camp{all:unset;box-sizing:border-box;cursor:pointer;position:relative;flex:none;width:48px;height:48px;display:grid;place-items:center;border-radius:var(--r-md);background:var(--p-sup);color:var(--p-tinta-2);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    ".s2-camp svg{width:24px;height:24px}",
    ".s2-camp:active{transform:translateY(2px);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 1px 0 var(--p-relieve)}",
    ".s2-camp.on{color:var(--p-azul-tx)}.s2-camp.on svg{transform-origin:50% 10%;animation:s2-din 1.4s ease-in-out 2}",
    ".s2-camp i,.s2-nb{position:absolute;top:-5px;right:-5px;min-width:20px;height:20px;padding:0 5px;box-sizing:border-box;display:grid;place-items:center;border-radius:var(--r-pill);background:var(--p-rosa-btn);color:#fff;font:800 11px/1 var(--f-tit);font-style:normal;letter-spacing:0;box-shadow:0 0 0 2px var(--p-bg);pointer-events:none}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn{position:relative}",
    "nav#tabbar button.px-navbtn .s2-nb{top:1px;right:auto;left:calc(50% + 4px)}",
    "#px-rail .rl-b .s2-nb{position:static;margin-left:auto;box-shadow:none}",
    /* tu círculo */
    ".s2-hero{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-4);min-width:0;padding:var(--s-4);border-radius:var(--r-xl);background-color:#2F6BFF;background-image:linear-gradient(140deg,#2255E0 0%,#4A6FF5 55%,#F0527F 130%);box-shadow:0 5px 0 var(--p-azul-r);color:#fff;font-family:var(--f-tx)}",
    ".s2-hero-a{display:flex;align-items:center;gap:var(--s-3);min-width:0}",
    ".s2-yo{flex:none;width:68px;height:68px;border-radius:50%;overflow:hidden;display:grid;place-items:center;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 3px rgba(255,255,255,.55)}",
    ".s2-hero-t{min-width:0;display:grid;gap:3px}",
    ".s2-hero-t b{font:800 var(--t-xl)/1.15 var(--f-tit);color:#fff;overflow-wrap:anywhere}",
    ".s2-hero-t small{font:600 var(--t-sm)/1.35 var(--f-tx);color:rgba(255,255,255,.9)}",
    ".s2-nums{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s-2)}",
    ".s2-nums button{all:unset;box-sizing:border-box;cursor:pointer;display:grid;justify-items:center;gap:3px;padding:var(--s-2) var(--s-1);border-radius:var(--r-md);background:rgba(255,255,255,.16);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}",
    ".s2-nums b{font:800 var(--t-xl)/1 var(--f-tit);color:#fff}",
    ".s2-nums small{font:600 var(--t-xs)/1.2 var(--f-tx);color:rgba(255,255,255,.9)}",
    ".s2-nums button:active,.s2-b:active{transform:translateY(2px)}",
    ".s2-hero-b{display:flex;gap:var(--s-2)}",
    ".s2-b{all:unset;box-sizing:border-box;cursor:pointer;flex:1;display:inline-flex;align-items:center;justify-content:center;gap:var(--s-2);min-height:46px;padding:0 var(--s-3);border-radius:var(--r-md);background:rgba(255,255,255,.16);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.55);color:#fff;font:800 var(--t-sm)/1 var(--f-tit);white-space:nowrap}",
    ".s2-b.blanco{flex:1.7;background:#fff;color:#2255E0;box-shadow:0 3px 0 rgba(20,24,38,.3)}",
    ".s2-b svg{width:18px;height:18px}",
    ".s2-hero.inv{grid-template-columns:auto minmax(0,1fr);align-items:center}",
    ".s2-hero.inv > img{width:84px;height:84px;object-fit:contain}",
    ".s2-hero.inv .s2-hero-b{grid-column:1 / -1}",
    /* rachas con amigos: aros como historias */
    ".s2-fila{display:flex;gap:var(--s-3);overflow-x:auto;padding:6px 2px 4px;margin:0 -2px;scrollbar-width:none;scroll-snap-type:x proximity}",
    ".s2-fila::-webkit-scrollbar,.s2-sug::-webkit-scrollbar{display:none}",
    ".s2-r{flex:none;width:80px;display:grid;justify-items:center;align-content:start;gap:5px;scroll-snap-align:start;text-align:center}",
    ".s2-r-g{all:unset;box-sizing:border-box;cursor:pointer;position:relative;width:68px;height:68px;border-radius:50%;padding:4px;background:var(--p-sup-3)}",
    ".s2-r-g > span{display:block;width:100%;height:100%;border-radius:50%;overflow:hidden;background:var(--p-sup-2);box-shadow:0 0 0 2px var(--p-sup)}",
    ".s2-r.ok .s2-r-g{background:conic-gradient(from 200deg,#FFC83D,#FF8A3D,#FF6B8B,#FFC83D)}",
    ".s2-r.espera .s2-r-g{background:var(--p-rosa);animation:s2-late 1.6s ease-in-out infinite}",
    ".s2-r.falta .s2-r-g{background:var(--p-azul)}",
    ".s2-r-g em{position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);display:inline-flex;align-items:center;gap:2px;padding:2px 7px 2px 4px;border-radius:var(--r-pill);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:800 12px/1 var(--f-tit);font-style:normal;color:var(--p-tinta);white-space:nowrap}",
    ".s2-r-g em img{width:15px;height:15px}",
    ".s2-r > b{margin-top:7px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:700 var(--t-xs)/1.2 var(--f-tx);color:var(--p-tinta)}",
    ".s2-r > small{font:600 11px/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".s2-r.ok > small{color:var(--p-oro-tx)}",
    ".s2-r-t{all:unset;box-sizing:border-box;cursor:pointer;min-height:30px;padding:0 10px;border-radius:var(--r-pill);background:var(--p-azul-p);color:var(--p-azul-tx);font:800 11px/30px var(--f-tit)}",
    ".s2-r-t:active{transform:translateY(1px)}",
    "button.s2-r.mas{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:80px;display:grid;justify-items:center;align-content:start;gap:5px;text-align:center}",
    "button.s2-r.mas > span{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;background:var(--p-sup-2);box-shadow:inset 0 0 0 2px var(--p-linea);font:700 28px/1 var(--f-tit);color:var(--p-apagado)}",
    "button.s2-r.mas > b{margin-top:7px;font:700 var(--t-xs)/1.2 var(--f-tx);color:var(--p-azul-tx)}",
    /* reto de amigos */
    ".s2-reto-c{display:flex;align-items:center;gap:var(--s-3)}",
    ".s2-reto-c > img,.s2-reto.bloq > img{flex:none;width:56px;height:56px;object-fit:contain}",
    ".s2-reto-c > div,.s2-reto.bloq > div{min-width:0;display:grid;gap:3px}",
    ".s2-reto p{margin:0;font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}",
    ".s2-c.s2-reto.bloq{grid-template-columns:auto minmax(0,1fr);align-items:center}",
    ".s2-reto.bloq > img{filter:grayscale(.7) opacity(.8)}",
    ".s2-reto-b{display:grid;gap:6px}",
    ".s2-reto-b u,.s2-rk-t u{display:block;height:10px;border-radius:var(--r-pill);background:var(--p-pista);overflow:hidden;text-decoration:none}",
    ".s2-reto-b u s{display:block;height:100%;border-radius:var(--r-pill);background-image:linear-gradient(90deg,#FFC83D,#FF8A3D);text-decoration:none;transition:width .5s}",
    ".s2-reto-b small{font:600 var(--t-xs)/1.3 var(--f-tx);color:var(--p-apagado)}",
    ".s2-reto-b small b{color:var(--p-tinta);font-weight:800}",
    ".s2-reto-p{display:flex;flex-wrap:wrap;gap:var(--s-2)}",
    ".s2-reto-p span{display:inline-flex;align-items:center;gap:5px;padding:3px 10px 3px 3px;border-radius:var(--r-pill);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);font:800 var(--t-xs)/1 var(--f-tit);color:var(--p-tinta)}",
    ".s2-reto-p span.yo{background:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px var(--p-azul)}",
    ".s2-reto-p i{display:block;width:26px;height:26px;border-radius:50%;overflow:hidden;background:var(--p-sup-3)}",
    ".s2-c.s2-reto.hecho{box-shadow:inset 0 0 0 2px var(--p-oro-r),0 3px 0 var(--p-oro-r)}",
    ".s2-cobra{min-height:46px}",
    /* pestañas y paneles */
    ".s2-c.s2-caja{padding:var(--s-3)}",
    ".s2-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s-1);padding:var(--s-1);border-radius:var(--r-md);background:var(--p-sup-3)}",
    ".s2-tabs button{all:unset;box-sizing:border-box;cursor:pointer;min-height:44px;display:flex;align-items:center;justify-content:center;border-radius:var(--r-sm);font:700 var(--t-sm)/1 var(--f-tit);color:var(--p-tinta-2);text-align:center}",
    ".s2-tabs button[aria-selected=true]{background:var(--p-sup);color:var(--p-azul-tx);box-shadow:0 2px 0 var(--p-relieve)}",
    ".s2-pan{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-3);min-width:0}",
    ".s2-pan > *{min-width:0}",
    /* novedades */
    ".s2-feed{display:grid;gap:var(--s-2)}",
    ".s2-ev{display:grid;grid-template-columns:48px minmax(0,1fr) 44px;grid-template-areas:'g t i' 'g b b';align-items:center;column-gap:var(--s-3);row-gap:var(--s-2);padding:var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".s2-ev-g{all:unset;box-sizing:border-box;cursor:pointer;grid-area:g;align-self:start;width:48px;height:48px;border-radius:50%;overflow:hidden;background:var(--p-sup-3)}",
    ".s2-ev-t{grid-area:t;min-width:0;display:grid;gap:3px}",
    ".s2-ev-t p{margin:0;font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}",
    ".s2-ev-t p b{color:var(--p-tinta);font-weight:800}",
    ".s2-ev-t small{font:600 11px/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".s2-ev-i{grid-area:i;width:44px;height:44px;object-fit:contain}",
    ".s2-fel{all:unset;box-sizing:border-box;cursor:pointer;grid-area:b;justify-self:start;display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 var(--s-3) 0 10px;border-radius:var(--r-pill);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 2px 0 var(--p-relieve);font:800 var(--t-xs)/1 var(--f-tit);color:var(--p-azul-tx)}",
    ".s2-fel::before{content:'';flex:none;width:18px;height:18px;background:" + ICO("estrella") + " center/contain no-repeat;filter:grayscale(1) opacity(.55)}",
    ".s2-fel:active{transform:translateY(2px)}",
    ".s2-fel.on{cursor:default;background:var(--p-oro-p);box-shadow:inset 0 0 0 1.5px var(--p-oro-r);color:var(--p-oro-tx)}",
    ".s2-fel.on::before{filter:none}",
    ".s2-fel.pum{animation:s2-pum .5s cubic-bezier(.2,1.6,.4,1)}",
    ".s2-fel.pum::before{animation:s2-gira .6s ease-out}",
    /* ranking de amigos */
    ".s2-rk{list-style:none;margin:0;padding:0;display:grid;gap:var(--s-2)}",
    ".s2-rk li{margin:0;padding:0;list-style:none}",
    ".s2-rk-f{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:var(--s-3);width:100%;padding:var(--s-2) var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "button.s2-rk-f{cursor:pointer}",
    ".s2-rk li.yo .s2-rk-f{background:var(--p-azul-p);box-shadow:inset 0 0 0 2px var(--p-azul)}",
    ".s2-rk-p{flex:none;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:var(--p-sup-3);font:800 var(--t-xs)/1 var(--f-tit);font-style:normal;color:var(--p-tinta-2)}",
    ".s2-rk-p.p1{background:#FFC83D;color:#5A3A00}.s2-rk-p.p2{background:#C9D2E3;color:#2B3550}.s2-rk-p.p3{background:#E8A070;color:#4A2408}",
    ".s2-rk-t{flex:1;min-width:0;display:grid;gap:5px}",
    ".s2-rk-t b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:800 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".s2-rk-t b em{margin-left:4px;padding:2px 6px;border-radius:var(--r-pill);background:var(--p-azul-btn);color:#fff;font:800 10px/1 var(--f-tit);font-style:normal;letter-spacing:.06em;text-transform:uppercase;vertical-align:middle}",
    ".s2-rk-t u{height:7px}",
    ".s2-rk-t u s{display:block;height:100%;border-radius:var(--r-pill);background:var(--p-azul);text-decoration:none}",
    ".s2-rk li.yo .s2-rk-t u s{background:var(--p-rosa)}",
    ".s2-rk-x{flex:none;font:800 var(--t-xs)/1 var(--f-tit);color:var(--p-tinta-2);white-space:nowrap}",
    /* personas */
    ".p5-am-f.s2-busca input{text-transform:none;letter-spacing:0;font-weight:600}",
    ".p5-am-f.s2-busca .p5-so-b{width:52px;min-height:52px;padding:0}",
    ".p5-am-f.s2-busca .p5-so-b svg{width:22px;height:22px}",
    ".s2-pan .p5-am-msg:empty{display:none}",
    ".s2-sug{display:flex;gap:var(--s-2);overflow-x:auto;padding:2px 2px 6px;scrollbar-width:none}",
    ".s2-sug-i{flex:none;width:128px;display:grid;justify-items:center;gap:5px;padding:var(--s-3) var(--s-2);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);text-align:center}",
    ".s2-sug-g{all:unset;box-sizing:border-box;cursor:pointer;width:60px;height:60px;border-radius:50%;overflow:hidden;background:var(--p-sup-3)}",
    ".s2-sug-i b{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:800 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".s2-sug-i small{font:600 11px/1 var(--f-tx);color:var(--p-apagado)}",
    ".s2-sug-i .p5-so-b{min-height:36px;padding:0 var(--s-3);margin-top:3px;font-size:var(--t-xs)}",
    /* protectores de racha */
    ".s2-c.s2-prot{grid-template-columns:auto minmax(0,1fr) auto;align-items:center}",
    ".s2-slots{display:flex;gap:6px}",
    ".s2-slot{width:46px;height:46px;display:grid;place-items:center;border-radius:var(--r-md);background:var(--p-sup-3);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".s2-slot img{width:30px;height:30px;filter:grayscale(1) opacity(.5)}",
    ".s2-slot.on{background:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px var(--p-azul)}",
    ".s2-slot.on img{filter:none}",
    ".s2-prot-t{min-width:0;display:grid;gap:2px}",
    ".s2-c .s2-prot-t h2{font-size:var(--t-md)}",
    ".s2-prot-t p{margin:0;font:500 var(--t-xs)/1.35 var(--f-tx);color:var(--p-apagado)}",
    ".s2-prot .p5-so-b img{width:18px;height:18px}",
    "@media (max-width:419.98px){.s2-c.s2-prot{grid-template-columns:auto minmax(0,1fr)}.s2-prot .p5-so-b{grid-column:1 / -1}}",
    /* estados vacíos y de carga */
    ".s2-vacio{display:grid;justify-items:center;gap:var(--s-2);padding:var(--s-5) var(--s-3);text-align:center}",
    ".s2-vacio img{width:96px;height:96px;object-fit:contain}",
    ".s2-vacio b{font:800 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    ".s2-vacio p{margin:0;max-width:300px;font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-apagado)}",
    ".s2-vacio .p5-so-b{margin-top:var(--s-2)}",
    ".s2-carga i{display:block;height:58px;border-radius:var(--r-md);background:var(--p-sup-3);animation:s2-late 1.2s ease-in-out infinite}",
    /* avisos */
    "html.mk .gmodal.m-av .gm-card{width:min(460px,100%);padding:0}",
    ".s2-av{display:flex;flex-direction:column;min-height:0;max-height:min(82dvh,660px);font-family:var(--f-tx);color:var(--p-tinta);text-align:left}",
    ".s2-av .gm-t{flex:none;margin:0;padding:var(--s-4) var(--s-5) var(--s-3);font:800 var(--t-xl)/1.15 var(--f-tit);color:var(--p-tinta);text-align:left}",
    ".s2-av-r{flex:none;display:flex;align-items:center;gap:var(--s-3);margin:0 var(--s-4) var(--s-3);padding:var(--s-3);border-radius:var(--r-md);background:var(--p-oro-p);box-shadow:inset 0 0 0 1.5px var(--p-oro-r)}",
    ".s2-av-r > img{flex:none;width:34px;height:34px}",
    ".s2-av-r > span{flex:1 1 150px;min-width:0;display:grid;gap:2px}",
    ".s2-av-r{flex-wrap:wrap}",
    "@media (max-width:479.98px){.s2-av-r .p5-so-b{flex:1 1 100%;min-height:42px}}",
    ".s2-av-r b{font:800 var(--t-sm)/1.25 var(--f-tit);color:var(--p-tinta)}",
    ".s2-av-r small{font:500 var(--t-xs)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
    ".s2-av-l{flex:1;min-height:0;overflow-y:auto;display:grid;align-content:start;gap:var(--s-2);padding:0 var(--s-4) var(--s-4)}",
    ".s2-av-i{display:flex;align-items:center;gap:var(--s-3);padding:var(--s-2) var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".s2-av-i.nuevo{background:var(--p-azul-p);box-shadow:inset 0 0 0 1.5px var(--p-azul)}",
    ".s2-av-i button.p5-am-g{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:44px;height:44px;border-radius:50%;overflow:hidden;background:var(--p-sup-3);display:grid;place-items:center}",
    ".s2-av-t{flex:1;min-width:0;display:grid;gap:2px;font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}",
    ".s2-av-t b{color:var(--p-tinta);font-weight:800}",
    ".s2-av-t small{font:600 11px/1.2 var(--f-tx);color:var(--p-apagado)}",
    ".s2-av-i > img{flex:none;width:32px;height:32px;object-fit:contain}",
    ".s2-av-i .p5-so-b{min-height:36px;padding:0 var(--s-3);font-size:var(--t-xs)}",
    ".s2-av .set-row.c{flex:none;margin:0;padding:var(--s-3) var(--s-4) var(--s-4);background:var(--p-sup);box-shadow:inset 0 1.5px 0 var(--p-linea);display:flex}",
    ".s2-av .set-row.c .gbtn{flex:1;min-height:50px}",
    "@media (prefers-reduced-motion:reduce){.s2-camp.on svg,.s2-r.espera .s2-r-g,.s2-fel.pum,.s2-fel.pum::before,.s2-carga i{animation:none}}");

  /* ====================================================================== montaje del CSS */
  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx101";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}\n@keyframes p5bota{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-5px)}}\n@keyframes p5luz{0%{box-shadow:0 0 0 0 var(--p-oro)}100%{box-shadow:0 0 0 22px transparent}}\n@keyframes s2-din{0%,100%{transform:rotate(0)}20%{transform:rotate(14deg)}40%{transform:rotate(-12deg)}60%{transform:rotate(8deg)}80%{transform:rotate(-5deg)}}\n@keyframes s2-late{0%,100%{opacity:1}50%{opacity:.55}}\n@keyframes s2-pum{0%{transform:scale(.9)}60%{transform:scale(1.08)}100%{transform:scale(1)}}\n@keyframes s2-gira{0%{transform:rotate(-40deg) scale(.4)}100%{transform:rotate(0) scale(1)}}\n@media (prefers-reduced-motion:reduce){#px-rail .rl-b,.p5-c,.p5-btn,#cz .cz-nodo,.p5-nodo,.p5-ban{transition:none!important}.p5-emp{animation:none!important}}";
  D.head.appendChild(st);

  /* ====================================================================== 14. COLUMNA DERECHA */
  if (typeof render !== "function") return;
  var DATOS = [
    ["1635", "El cardenal Richelieu fundó la Académie française para cuidar el idioma."],
    ["1889", "La torre Eiffel se construyó para la Exposición Universal; iba a desmontarse a los 20 años."],
    ["1539", "La ordenanza de Villers-Cotterêts hizo del francés la lengua oficial de los documentos."],
    ["29", "El francés es lengua oficial en 29 países, de Canadá a Senegal."],
    ["1792", "«La Marseillaise» nació en Estrasburgo como canto de guerra del ejército del Rin."],
    ["1066", "Tras la conquista normanda, la corte inglesa habló francés durante casi 300 años."],
    ["1900", "El metro de París abrió en 1900 con la línea 1, para la Exposición Universal."]
  ];
  var hoyN = function(){ var d = new Date(); return d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); };
  var ICN = function(n, t){ return '<img src="img/ic2/' + n + '.webp" alt="" width="' + (t || 26) + '" height="' + (t || 26) + '">'; };
  var ENGR = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>';
  var VISTAS = { parcours: 1, retos: 1, ranking: 1, tienda: 1, perfil: 1, lecciones: 1, social: 1 };
  var misHTML = "", fLado = "";
  var ancho = function(){ return window.innerWidth >= 1440 && H.classList.contains("rl-on"); };

  var ladoHTML = function(){
    var xp = 0, lv = 1, a = 0, b = 1, rk = 0, mon = 0, gato = "", G = null;
    try { xp = S.xp || 0; } catch (e) {}
    try { G = gEnsure(); mon = Math.max(0, Math.floor(G.coins || 0)); } catch (e) {}
    try { lv = catLevel(xp); a = xpFor(lv); b = xpFor(lv + 1); } catch (e) {}
    try { rk = streak(); } catch (e) {}
    try { gato = catSVG(G.cat, { mood: "happy" }); } catch (e) {}
    var p = lv >= 60 ? 100 : Math.max(2, Math.min(100, Math.round((xp - a) / Math.max(1, b - a) * 100)));
    var dato = DATOS[hoyN() % DATOS.length], js = [], dia = null;
    try { js = PLXG.listaJuegos(); dia = js.length ? js[hoyN() % js.length] : null; } catch (e) {}
    return '<div class="p5-stats"><span title="Racha" aria-label="Racha: ' + rk + ' días">' + ICN("llama") + rk + '</span><span class="o" title="Monedas" aria-label="Monedas: ' + mon + '">' + ICN("moneda") + mon.toLocaleString("es-CO") + '</span><span class="a" title="XP" aria-label="XP: ' + xp + '">' + ICN("rayo") + xp.toLocaleString("es-CO") + '</span><button type="button" class="p5-aj" data-qs="open" aria-label="Ajustes">' + ICN("engranaje") + "</button></div>" +
      '<button type="button" class="p5-c p5-lv" data-view="perfil" aria-label="Nivel ' + lv + ', ver perfil"><span class="p5-gato">' + gato + "</span><span><b>Nivel " + lv + '</b><span class="p5-row"><u><s style="width:' + p + '%"></s></u><small>' + (lv >= 60 ? "Nivel máximo" : "Faltan " + Math.max(0, b - xp) + " XP") + "</small></span></span></button>" +
      (dia ? '<div class="p5-c"><h3>Juego del día</h3><p class="p5-fx"><span><b>' + esc(dia.nombre) + "</b>" + (dia.verbo || dia.familia ? ": " + esc(dia.verbo || dia.familia) : "") + '</span><img class="p5-jg" src="img/juegos/' + esc(dia.id) + '.webp" alt="" width="76" height="76"></p><button type="button" class="p5-btn" data-cz-juego="' + esc(dia.id) + '">Jugar ahora</button></div>' : "") +
      '<div class="p5-c"><h3>Ranking semanal <a data-rl="clasif" role="button" tabindex="0">Ver</a></h3><p class="p5-fx">' + ICN("trofeo", 48) + "<span>Gana XP en lecciones y juegos para subir en la liga de esta semana.</span></p></div>" +
      '<div class="p5-mis">' + misHTML + "</div>" +
      '<div class="p5-c"><h3>Tarjeta de hoy · Francia</h3><p><b class="p5-y">' + esc(dato[0]) + "</b> · " + esc(dato[1]) + "</p></div>";
  };
  var pintaLado = function(){
    var v = ""; try { v = view; } catch (e) {}
    var on = ancho() && !!VISTAS[v];
    H.classList.toggle("p5-lado-on", on);
    var mis = D.querySelector(".ghome .plx-miss"); if (mis) misHTML = mis.outerHTML;
    var z = D.getElementById("p5-lado");
    if (!on) { if (z) z.hidden = true; return; }
    if (!z) { z = D.createElement("aside"); z.id = "p5-lado"; z.setAttribute("aria-label", "Tu progreso"); D.body.appendChild(z); }
    z.hidden = false;
    var h = ladoHTML(), f = h.replace(/<svg[\s\S]*?<\/svg>/g, "");   /* catSVG cambia sus ids en cada llamada: se compara sin los SVG */
    if (f !== fLado) { fLado = f; z.innerHTML = h; }
  };

  /* la columna baja con la página hasta que se ve su final y ahí se queda (como una columna «pegajosa») */
  var sigue = function(){
    var z = D.getElementById("p5-lado"); if (!z || z.hidden || !H.classList.contains("p5-lado-on")) return;
    var sobra = Math.max(0, z.offsetHeight - window.innerHeight), y = Math.min(sobra, Math.max(0, window.scrollY || 0));
    z.style.transform = y ? "translateY(" + (-y) + "px)" : "";
  };
  window.addEventListener("scroll", sigue, { passive: true });

  /* ====================================================================== 14b. TIENDA: el objeto solo, sin el gato
     catSVG dibuja gato y accesorio en un mismo SVG. Se pinta el gato con y sin el accesorio, se quedan las piezas que
     solo salen con él y se encuadran. El gato completo queda en la cabecera (y en los pelajes, donde el gato ES el artículo). */
  var OBJ = {};
  var norma = function(e){ return e.outerHTML.replace(/(id|href|xlink:href)="[^"]*"/g, "").replace(/url\(#[^)]*\)/g, "url()"); };
  var objeto = function(k, id){
    var clave = k + ":" + id; if (clave in OBJ) return OBJ[clave];
    OBJ[clave] = "";
    try {
      var acc = {}, coat = (gEnsure().cat || {}).coat;
      if (k === "sc") acc.neck = id; else { var it = GITEMS.filter(function(x){ return x.id === id; })[0]; if (!it) return ""; acc[it.slot] = id; }
      var caja = D.createElement("div"); caja.style.cssText = "position:absolute;left:-9999px;top:0;width:200px;height:200px;visibility:hidden";
      caja.innerHTML = catSVG({ coat: coat, acc: {} }) + catSVG({ coat: coat, acc: acc }); D.body.appendChild(caja);
      var base = [].filter.call(caja.children[0].children, function(e){ return e.tagName.toLowerCase() !== "defs"; }).map(norma), con = caja.children[1], j = 0, sobran = [];
      [].slice.call(con.children).forEach(function(e){ if (e.tagName.toLowerCase() === "defs") return; if (j < base.length && norma(e) === base[j]) { j++; e.remove(); } else sobran.push(e); });
      if (sobran.length && j >= base.length - 2) {
        var b = con.getBBox(), m = Math.max(b.width, b.height) * .12 + 3, l = Math.max(b.width, b.height) + m * 2;
        con.setAttribute("viewBox", [b.x + b.width / 2 - l / 2, b.y + b.height / 2 - l / 2, l, l].join(" ")); con.setAttribute("class", "p5-obj"); con.setAttribute("aria-hidden", "true"); con.removeAttribute("role"); con.removeAttribute("aria-label");
        if (b.width > 2 && b.height > 2) OBJ[clave] = con.outerHTML;
      }
      caja.remove();
    } catch (e) {}
    return OBJ[clave];
  };
  var tienda = function(){
    [].forEach.call(D.querySelectorAll('#view .tn .tn-i[data-tn^="it:"] .tn-gato:not([data-p5-obj]), #view .tn .tn-i[data-tn^="sc:"] .tn-gato:not([data-p5-obj])'), function(g){
      var d = g.parentNode.getAttribute("data-tn").split(":"), h = objeto(d[0], d.slice(1).join(":"));
      g.setAttribute("data-p5-obj", h ? "1" : "0"); if (h) g.innerHTML = h;
    });
  };

  /* ====================================================================== 14c. RECORRIDO (4.2): todas las unidades, compacto, como el de Duolingo
     Sale de LESSONS (curso actual) y de S.lessons; solo pinta. Cada nodo abre su lección con data-open, igual que antes. */
  var plano = function(h){ var d = D.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  var NIVEL = { pp: "Para empezar", a1: "Nivel A1", a2: "Nivel A2", fon: "Nivel A2", b11: "Nivel B1", b12: "Nivel B1", b21: "Nivel B2", rem: "Nivel B2", prog: "Nivel C1", c12: "Nivel C1", lit: "Nivel C1" };
  var DX = [0, 36, 58, 36, 0, -36, -58, -36];
  var SV = function(d){ return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>"; };
  var I = {
    check: SV('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    libro: SV('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 21H20"/>'),
    lapiz: SV('<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="M14.5 6.5l3 3"/>'),
    oido: SV('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4.5" height="6" rx="1.6"/><rect x="16.5" y="14" width="4.5" height="6" rx="1.6"/>'),
    chat: SV('<path d="M20 11.5a7.5 7.5 0 0 1-11 6.6L4 19l1.1-4A7.5 7.5 0 1 1 20 11.5z"/>'),
    hoja: SV('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h4"/>'),
    estrella: SV('<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"/>'),
    corona: SV('<path d="M4 8l4 4 4-7 4 7 4-4-1.5 10h-13z"/>'),
    lista: SV('<path d="M5 6h14M5 12h14M5 18h9"/>'),
    flecha: SV('<path d="M12 19V5M5.5 11.5L12 5l6.5 6.5"/>')
  };
  var TIPO = { conj: "lapiz", accord: "libro", synt: "libro", gram: "libro", ortho: "lapiz", prep: "libro", phono: "oido", co: "oido", registre: "chat", polit: "chat", comp: "hoja", coh: "hoja", struct: "hoja", voc: "estrella" };
  var NODO = { conj: "conjugacion", accord: "gramatica", synt: "gramatica", gram: "gramatica", prep: "gramatica", ortho: "escritura", phono: "escucha", co: "escucha", registre: "habla", polit: "habla", comp: "lectura", coh: "lectura", struct: "lectura", voc: "vocabulario" };
  var POSES = ["saluda", "taza-cafe", "corre", "pensando", "ovillo", "escribe", "lupa", "pulgar", "dormido", "graduado", "guino-pulgar", "sentado"];
  var fRuta = "", hRuta = "", hCurso = "", vistaAntes = "", tLlego = 0, UN = [];
  var rutaHTML = function(){
    var tr = "a1"; try { tr = track || "a1"; } catch (e) {}
    var nx = null; try { nx = nextLesson(tr); } catch (e) {}
    var hecha = function(l){ return !!(S.lessons[l.id] && S.lessons[l.id].done); };
    var us = [], por = {};
    LESSONS.forEach(function(l){ if (l.track !== tr) return; if (!por[l.unit]) { por[l.unit] = { t: l.unit, ls: [] }; us.push(por[l.unit]); } por[l.unit].ls.push(l); });
    var f = tr + "|" + (nx ? nx.id : "fin") + "|" + us.map(function(u){ return u.ls.filter(hecha).length; }).join(".");
    if (f === fRuta && hRuta) return;
    fRuta = f; UN = [];
    var T = { label: "Francés" }; try { T = TRACKS.filter(function(x){ return x.id === tr; })[0] || T; } catch (e) {}
    var niv = (NIVEL[tr] || "Curso") + (T.sem ? " · Semestre " + T.sem : "");
    hCurso = '<button type="button" class="p5-curso" data-lx-cursos="1" aria-label="Cambiar de curso o de nivel. Ahora: ' + esc(T.label) + '"><img src="img/ic2/bandera.webp" alt="" width="26" height="26"><span><b>' + esc(T.label) + "</b><small>" + esc(niv) + "</small></span><em>Cambiar</em></button>";
    var g = 0, h = "", pv1 = "", pv2 = "", BARAJA = ["gramatica", "vocabulario", "escucha", "conjugacion", "lectura", "habla", "escritura"];
    us.forEach(function(u, i){
      var norm = u.ls.filter(function(l){ return !l.special; }), nH = norm.filter(hecha).length, completa = norm.length && nH === norm.length, actual = !!(nx && nx.unit === u.t);
      var tit = plano(u.t); UN.push({ n: i + 1, t: tit, c: i % 6, k: nH + " / " + norm.length });
      h += '<section class="p5-u" data-i="' + i + '" data-c="' + (i % 6) + '" data-est="' + (actual ? "actual" : completa ? "hecha" : "pend") + '" aria-label="Unidad ' + (i + 1) + ": " + esc(tit) + '">' +
        (i ? '<div class="p5-sep"><span>' + esc(tit) + "</span></div>" : "") + '<div class="p5-ns">';
      var medio = Math.floor(u.ls.length / 2), lado = "de";
      u.ls.forEach(function(l, k){
        var est = hecha(l) ? "hec" : nx && l.id === nx.id ? "sig" : "pend", dx = DX[g++ % DX.length], lt = plano(l.title);
        if (k === medio) lado = dx > 0 ? "iz" : "de";
        var tipo = l.special === "blanc" ? "examen" : l.project ? "proyecto" : (NODO[l.t] || "gramatica");
        /* nunca el mismo icono seguido (ni con uno de por medio): si toca repetir, se toma otro de la baraja */
        if (tipo === pv1 || tipo === pv2) { for (var q = 0; q < BARAJA.length; q++) { var c = BARAJA[(g + q) % BARAJA.length]; if (c !== pv1 && c !== pv2) { tipo = c; break; } } }
        pv2 = pv1; pv1 = tipo;
        var ic = '<img src="img/nodos/' + tipo + '.webp" alt="" width="66" height="66" loading="lazy" decoding="async">' + (est === "hec" ? '<i class="p5-ok" aria-hidden="true"></i>' : "");
        h += '<div class="p5-n' + (est === "sig" ? " act" : "") + '" style="--dx:' + dx + 'px">' + (est === "sig" ? '<span class="p5-emp" aria-hidden="true">' + (S.lessons[l.id] ? "Continuar" : "Empezar") + "</span>" : "") +
          '<button type="button" class="p5-nodo ' + est + '" data-open="' + esc(l.id) + '" title="' + esc(lt) + '" aria-label="Lección ' + (k + 1) + ": " + esc(lt) + (est === "hec" ? " (hecha)" : est === "sig" ? " (sigue aquí)" : "") + '">' + ic + "</button>" +
          (est === "sig" ? '<span class="p5-nt">' + esc(lt) + "</span>" : "") + "</div>";
      });
      h += '<div class="p5-n" style="--dx:' + DX[g++ % DX.length] + 'px"><span class="p5-nodo cofre' + (completa ? " hec" : "") + '" role="img" aria-label="' + (completa ? "Unidad completa" : "Meta de la unidad: termina las " + norm.length + " lecciones") + '"><img src="img/nodos/' + (completa ? "cofre-abierto" : "cofre") + '.webp" alt="" width="72" height="72" loading="lazy" decoding="async"></span></div>' +
        '<img class="p5-mz ' + lado + '" src="img/mz3/' + POSES[i % POSES.length] + '.webp" alt="" loading="lazy" decoding="async"></div></section>';
    });
    var u0 = UN[0] || { n: 1, t: "", c: 0 };
    hRuta = '<div class="p5-ruta" aria-label="Recorrido del curso"><div class="p5-ban" data-c="' + u0.c + '"><span><small>Unidad ' + u0.n + "</small><b>" + esc(u0.t) + '</b></span><button type="button" data-view="lecciones" aria-label="Ver todas las lecciones del curso">' + I.lista + "</button></div>" + h + "</div>";
  };
  /* el cartel sigue a la unidad que va pasando bajo él; el botón flotante aparece si tu lección no está a la vista */
  var rafBan = 0;
  var cartel = function(){
    rafBan = 0;
    var r = D.querySelector(".p5-ruta"), bt = D.getElementById("p5-volver");
    var v = ""; try { v = view; } catch (e) {}
    if (!r || v !== "parcours") { if (bt) bt.hidden = true; return; }
    var b = r.querySelector(".p5-ban"); if (!b) return;
    var lim = b.getBoundingClientRect().bottom + 30, us = r.querySelectorAll(".p5-u"), i = 0;
    for (var k = 0; k < us.length; k++) { if (us[k].getBoundingClientRect().top <= lim) i = k; else break; }
    if (b.getAttribute("data-i") !== String(i) && UN[i]) {
      b.setAttribute("data-i", i); b.setAttribute("data-c", UN[i].c);
      b.querySelector("small").textContent = "Unidad " + UN[i].n + " · " + UN[i].k; b.querySelector("b").textContent = UN[i].t;
    }
    var s = r.querySelector(".p5-nodo.sig");
    if (!bt) { bt = D.createElement("button"); bt.type = "button"; bt.id = "p5-volver"; bt.className = "p5-volver"; bt.setAttribute("aria-label", "Ir a tu lección"); bt.innerHTML = I.flecha; bt.hidden = true; D.body.appendChild(bt); }
    if (!s) { bt.hidden = true; return; }
    var sb = s.getBoundingClientRect(), h = window.innerHeight, fuera = sb.bottom < 90 || sb.top > h - 110;
    bt.hidden = !fuera; bt.classList.toggle("abajo", sb.top > h - 110);
  };
  var pideCartel = function(){ if (!rafBan) rafBan = requestAnimationFrame(cartel); };
  window.addEventListener("scroll", pideCartel, { passive: true });
  window.addEventListener("resize", pideCartel);
  var aLaLeccion = function(suave){
    var v = ""; try { v = view; } catch (e) {} if (v !== "parcours") return;
    var s = D.querySelector(".p5-ruta .p5-nodo.sig"); if (!s) return;
    var b = s.getBoundingClientRect(), h = window.innerHeight;
    if (suave === true || b.top > h * .6 || b.top < 170) window.scrollTo({ top: Math.max(0, b.top + window.scrollY - h * .42), behavior: suave === true ? "smooth" : "auto" });
  };
  var alLlegar = function(){ if (Date.now() - tLlego <= 4000) aLaLeccion(); };
  D.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("#p5-volver"); if (b) { e.preventDefault(); aLaLeccion(true); } });
  var ruta = function(){
    var v = ""; try { v = view; } catch (e) {}
    var llego = v === "parcours" && vistaAntes !== "parcours"; vistaAntes = v;
    if (llego) { tLlego = Date.now(); [80, 280, 560, 900].forEach(function(ms){ setTimeout(alLlegar, ms); }); }
    if (v !== "parcours") { pideCartel(); return; }
    var cz = D.querySelector("#cz .cz-centro"), mp = cz ? null : D.querySelector("#view .ghome .mp");
    var caja = cz || mp; if (!caja) return;
    rutaHTML(); if (!hRuta) return;
    var ya = caja.querySelector(":scope > .p5-ruta"), nuevo = !ya || ya.getAttribute("data-f") !== fRuta;
    if (nuevo) {
      if (ya) ya.remove(); var c0 = caja.querySelector(":scope > .p5-curso"); if (c0) c0.remove();
      if (cz) caja.insertAdjacentHTML("afterbegin", hCurso + hRuta);
      else { var pie = mp.querySelector(":scope > .mp-pie"); if (pie) pie.insertAdjacentHTML("beforebegin", hCurso + hRuta); else caja.insertAdjacentHTML("beforeend", hCurso + hRuta); }
      var r = caja.querySelector(":scope > .p5-ruta"); if (r) r.setAttribute("data-f", fRuta);
      setTimeout(alLlegar, 40);   /* plx89 rehace el mapa del celular un instante después y la página vuelve arriba: se repite el salto */
    }
    pideCartel();
  };

  /* Perfil: la pestaña «Ranking» solo mandaba a otra vista; el ranking ya está en el riel y en «1 vs 1» */
  var pestanas = function(){
    [].forEach.call(D.querySelectorAll("#view .gperfil .ptabs > button:not(.p5-fuera)"), function(b){ if (/^\s*Ranking\s*$/.test(b.textContent)) b.classList.add("p5-fuera"); });
  };

  /* versión nueva: si el servidor ya tiene otra, se recarga una vez al volver a la app (nunca en mitad de una lección o un juego) */
  var mira = function(){
    try {
      if (!/^https?:/.test(location.protocol) || D.visibilityState !== "visible") return;
      var pl = D.getElementById("player"); if ((pl && !pl.hidden) || D.querySelector("#plxg .plxg-wrap, .kq, .dgx, .gmodal")) return;
      fetch("index.html?_=" + Date.now(), { cache: "no-store" }).then(function(r){ return r.ok ? r.text() : ""; }).then(function(t){
        var m = /APP_VERSION="([^"]+)"/.exec(t); if (!m || m[1] === APP_VERSION) return;
        var k = "p5-recarga"; if (sessionStorage.getItem(k) === m[1]) return; sessionStorage.setItem(k, m[1]);
        var fin = function(){ location.reload(); };
        try { (window.__plxReg ? window.__plxReg.update() : Promise.resolve()).then(fin, fin); } catch (e) { fin(); }
      }).catch(function(){});
    } catch (e) {}
  };
  D.addEventListener("visibilitychange", mira); setTimeout(mira, 4000);

  /* ====================================================================== 14d. INSTALAR LA APP (4.4)
     En iPhone no existe un «instalar» que la web pueda lanzar: solo se añade desde Compartir. La app no decía cómo,
     así que parecía que no se podía. Ahora hay un botón (en Inicio, una vez, y siempre en Ajustes) que en iPhone
     enseña los tres pasos y en Android o computador abre el aviso de instalación del navegador. */
  var UA = navigator.userAgent || "";
  var esIOS = /iPhone|iPad|iPod/.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var instalada = function(){ try { return navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches || !!window.PlexAndroid || /; wv\)/.test(UA); } catch (e) { return false; } };
  var aviso = null;
  window.addEventListener("beforeinstallprompt", function(e){ e.preventDefault(); aviso = e; try { instala(); } catch (x) {} });
  window.addEventListener("appinstalled", function(){ aviso = null; [].forEach.call(D.querySelectorAll(".p5-inst,.p5-inst-c"), function(x){ x.remove(); }); });
  var puedeInstalar = function(){ return !instalada() && (esIOS || !!aviso); };
  var COMP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3.5M7.5 7.5L12 3l4.5 4.5M6 11H5a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 5 21h14a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 11h-1"/></svg>';
  var pasosIOS = function(){
    var otro = /CriOS|FxiOS|EdgiOS|OPiOS|Brave/i.test(UA);
    var h = '<div class="p5-pasos"><img src="img/mz3/saluda.webp" alt="" width="96" height="96"><h2 class="gm-t" id="gm-title">Pon PLEX PLAY en tu inicio</h2>' +
      '<p class="gm-sub">En iPhone se hace desde el botón Compartir. Son tres toques y queda con su icono, como una app.</p><ol>' +
      "<li><b>1</b><span>Toca <i>Compartir</i> " + COMP + (otro ? ". En este navegador está arriba, junto a la dirección, o dentro del menú ⋯." : ", en la barra de abajo de Safari.") + "</span></li>" +
      "<li><b>2</b><span>Baja en la lista y elige <i>Añadir a pantalla de inicio</i>.</span></li>" +
      "<li><b>3</b><span>Toca <i>Añadir</i>. Abre PLEX PLAY desde su icono.</span></li></ol>" +
      '<p class="p5-nota">' + (otro ? "Si no ves esa opción, abre plexplay.app en Safari y repite los pasos." : "Si no ves esa opción, desliza la lista hacia arriba: está más abajo.") + '</p>' +
      '<div class="set-row c"><button class="gbtn" data-g="close" data-autofocus>Entendido</button></div></div>';
    /* va el primero de la cola de ventanas de la app (si hay otra abierta, se cierra y entra esta enseguida) */
    try { gQ.unshift([h, "m-inst"]); if (gOpen) gCloseModal(); else gNextModal(); } catch (e) { try { gModal(h, "m-inst"); } catch (x) {} }
  };
  var instalar = function(){
    if (esIOS) return pasosIOS();
    if (aviso && aviso.prompt) { try { aviso.prompt(); if (aviso.userChoice) aviso.userChoice.then(function(){ aviso = null; }, function(){}); } catch (e) {} return; }
  };
  var instala = function(){
    var si = puedeInstalar();
    /* en Ajustes */
    var aj = D.querySelector(".gmodal .aj");
    if (aj) { var cu = aj.querySelector(":scope > .aj-cuenta"); if (cu && !cu.querySelector(".qs-out") && !cu.classList.contains("p5-vacia")) { cu.classList.add("p5-vacia"); var hh = cu.previousElementSibling; if (hh && hh.classList.contains("aj-h")) hh.classList.add("p5-vacia"); } }   /* sin sesión, «Tu cuenta» queda vacía */
    if (aj && si && !aj.querySelector(".p5-inst")) {
      var pie = aj.querySelector(".aj-pie"), d = D.createElement("div"); d.className = "p5-inst";
      d.innerHTML = '<h3 class="aj-h">La app en tu celular</h3><button type="button" class="gbtn ghost" data-p5-instalar>' + (esIOS ? "Poner PLEX PLAY en mi inicio" : "Instalar PLEX PLAY") + "</button>";
      if (pie) aj.insertBefore(d, pie); else aj.appendChild(d);
    }
    /* en Inicio, una sola vez (se puede cerrar) */
    var v = ""; try { v = view; } catch (e) {}
    var c0 = D.querySelector(".p5-curso"), ya = D.querySelector(".p5-inst-c"), visto = false; try { visto = localStorage.getItem("p5-inst-x") === "1"; } catch (e) {}
    if (v === "parcours" && c0 && si && !visto) {
      if (!ya || ya.nextElementSibling !== c0) { if (ya) ya.remove(); c0.insertAdjacentHTML("beforebegin", '<div class="p5-inst-c"><img src="img/mz3/saluda.webp" alt="" width="56" height="56"><span><b>Pon PLEX PLAY en tu inicio</b><small>Ábrela con un toque, como una app.</small></span><button type="button" class="p5-inst-b" data-p5-instalar>' + (esIOS ? "Ver cómo" : "Instalar") + '</button><button type="button" class="p5-inst-x" data-p5-inst-x aria-label="Cerrar">✕</button></div>'); }
    } else if (ya && (!si || visto)) ya.remove();
  };
  window.addEventListener("click", function(e){
    var t = e.target.closest ? e.target : null; if (!t) return;
    if (t.closest("[data-p5-inst-x]")) { e.preventDefault(); e.stopPropagation(); try { localStorage.setItem("p5-inst-x", "1"); } catch (x) {} var c = D.querySelector(".p5-inst-c"); if (c) c.remove(); return; }
    if (t.closest("[data-p5-instalar]")) { e.preventDefault(); e.stopPropagation(); instalar(); }
  }, true);
  window.PLX_INSTALAR = { abrir: instalar, pasos: pasosIOS, puede: puedeInstalar };

  /* ====================================================================== 14e. PERFIL NUEVO Y SOCIAL (4.15)
     Perfil: cabecera con el gato grande, resumen, rachas entre amigos y últimos logros; las pestañas siguen debajo.
     Social (pestaña del Perfil): buscar por nombre, seguir / seguidores (amigos = se siguen los dos), racha mutua,
     actividad de quienes sigues, congeladores de racha y regalos (congelador o monedas).
     Backend: funciones de Supabase en herramientas/supabase/04-social.sql. Sin sesión o sin esas funciones instaladas,
     lo que depende de otras personas no se muestra; los congeladores propios sí funcionan (viven en tu progreso). */
  var SO = { gente: null, act: null, ok: null, t: 0, cargando: false, res: null, q: "", msg: "", lista: "sigo" };
  var CONG = 200, REG_MON = 50, MAX_FRZ = 2;
  var sbOK = function(){ try { return !!(window.PCB && PCB.sb && PCB.uid); } catch (e) { return false; } };
  var rpc = function(n, a){ return PCB.sb.rpc(n, a || {}); };
  var gatoDe = function(av){ try { return catSVG(av || {}, { mood: "happy" }); } catch (e) { return ""; } };
  var monedas = function(){ try { return Math.max(0, Math.floor(gEnsure().coins || 0)); } catch (e) { return 0; } };
  var guarda = function(){ try { save(true); } catch (e) {} try { renderStats(); } catch (e) {} };
  var avisa = function(t){ try { toast(t); } catch (e) {} };
  var repinta = function(){ fPerfil = ""; fSocial = ""; try { perfil(); } catch (e) {} try { social(); } catch (e) {} };
  var cargaSocial = function(fuerza){
    if (!sbOK() || SO.cargando || SO.ok === false) return;
    if (!fuerza && SO.gente && Date.now() - SO.t < 60000) return;
    SO.cargando = true;
    Promise.all([rpc("plx_social"), rpc("plx_actividad"), Promise.resolve(rpc("plx_social2")).then(null, function(){ return { error: 1 }; })]).then(function(r){
      SO.cargando = false;
      if (r[0].error) { SO.ok = false; repinta(); return; }      /* funciones sin instalar */
      SO.ok = true; SO.gente = r[0].data || []; SO.act = r[1].error ? [] : (r[1].data || []); SO.t = Date.now();
      var d2 = r[2] && !r[2].error && r[2].data && typeof r[2].data === "object" ? r[2].data : null; SO.v2 = !!d2; SO.s2 = d2;
      try { trasCarga(); } catch (e) {}
      repinta();
    }, function(){ SO.cargando = false; SO.ok = false; });
  };
  /* ---------- protectores de racha: son los que la app ya tiene (G.freeze, máximo 2; freezeApply los usa sola) ---------- */
  var usaCongelador = function(){ try { if (typeof freezeApply === "function") freezeApply(); } catch (e) {} };
  var recibeRegalos = function(){
    if (!sbOK() || SO.ok === false) return;
    rpc("plx_regalos_recibir").then(function(r){
      if (r.error || !r.data || !r.data.length) return;
      var G = gEnsure(), fr = 0, mo = 0;
      r.data.forEach(function(x){ if (x.tipo === "congelador") fr++; else mo += REG_MON; });
      G.freeze = Math.min(MAX_FRZ + 1, (G.freeze || 0) + fr); G.coins = (G.coins || 0) + mo; guarda();
      var quien = r.data.map(function(x){ return x.nick; }).filter(function(v, i, a){ return a.indexOf(v) === i; }).slice(0, 2).join(" y ");
      avisa("Regalo de " + quien + ": " + [fr ? fr + (fr === 1 ? " protector de racha" : " protectores de racha") : "", mo ? mo + " monedas" : ""].filter(Boolean).join(" y "));
      repinta();
    }, function(){});
  };
  setTimeout(function(){ recibeRegalos(); }, 2500);

  /* ---------- pestaña Social ---------- */
  var fila = function(a, extra){ /* (se redefine más abajo con el perfil tocable) */
    return '<div class="p5-am-i"><span class="p5-am-g">' + gatoDe(a.avatar) + '</span><span class="p5-am-t"><b>' + esc(a.nick) + "</b><small>Nivel " + esc(a.nivel || "1") + " · " + Number(a.xp || 0).toLocaleString("es-CO") + " XP" + (a.racha != null ? " · racha " + (a.racha || 0) : "") + (a.me_sigue && !a.lo_sigo ? " · te sigue" : "") + "</small></span>" + (extra || "") + "</div>";
  };
  var btnSeguir = function(a){ return a.lo_sigo ? '<button type="button" class="p5-so-b off" data-p5-so="dejar" data-c="' + esc(a.codigo) + '">Siguiendo</button>' : '<button type="button" class="p5-so-b" data-p5-so="seguir" data-c="' + esc(a.codigo) + '">' + (a.me_sigue ? "Seguir también" : "Seguir") + "</button>"; };
  var fSocial = "";
  /* ---------- Social: pantalla propia (4.16), fuera del Perfil ---------- */
  var enSocial = false;
  var AMIGOS_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 19a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.5a4.5 4.5 0 0 1 5 4.5"/></svg>';
  try {
    if (typeof GV === "object" && GV && !GV.social) GV.social = function(){ return '<section class="gview p5-sv" aria-label="Social"><div class="p5-so"></div></section>'; };
    var ORG5 = window.PLX_ORG;
    if (ORG5 && ORG5.tabs && !ORG5.tabs.some(function(x){ return x[0] === "social"; })) {
      var ip = ORG5.tabs.map(function(x){ return x[0]; }).indexOf("perfil");
      ORG5.tabs.splice(ip < 0 ? ORG5.tabs.length : ip, 0, ["social", "Social", AMIGOS_SVG]);
      try { ORG5.barra(); } catch (e) {}
    }
  } catch (e) {}
  var persona = function(a){ return '<button type="button" class="p5-am-quien" data-p5-so="ver" data-c="' + esc(a.codigo) + '" aria-label="Ver el perfil de ' + esc(a.nick) + '"><span class="p5-am-g">' + gatoDe(a.avatar) + '</span><span class="p5-am-t"><b>' + esc(a.nick) + "</b><small>Nivel " + esc(a.nivel || "1") + " · " + Number(a.xp || 0).toLocaleString("es-CO") + " XP" + (a.racha != null ? " · racha " + (a.racha || 0) : "") + (a.me_sigue && !a.lo_sigo ? " · te sigue" : "") + "</small></span></button>"; };
  fila = function(a, extra){ return '<div class="p5-am-i">' + persona(a) + (extra || "") + "</div>"; };
  var social = function(){};   /* la pantalla se pinta en 14i */
  var abreSocial = function(){ try { go("social"); } catch (e) {} scrollTo(0, 0); };
  /* perfil de otra persona */
  var otroHTML = function(p){
    var logros = []; try { var g = p.logros || {}; ACH.forEach(function(a, i){ if (g[a[0]]) logros.push([i, a[1], g[a[0]]]); }); logros.sort(function(x, y){ return String(y[2]).localeCompare(String(x[2])); }); } catch (e) {}
    var st = function(ic, val, et){ return '<div class="p5-pf-s"><img src="img/ic2/' + ic + '.webp" alt="" width="30" height="30"><span><b>' + esc(val) + "</b><small>" + et + "</small></span></div>"; };
    var am = p.lo_sigo && p.me_sigue;
    return '<div class="p5-otro"><div class="p5-pf-cab p5-otro-cab"><span class="p5-pf-gato">' + gatoDe(p.avatar) + '</span></div>' +
      '<div class="p5-otro-c"><h2 class="gm-t" id="gm-title">' + esc(p.nick) + '</h2><p class="p5-otro-s">' + (am ? "Se siguen los dos" : p.me_sigue ? "Te sigue" : p.lo_sigo ? "Lo sigues" : "Estudiante de PLEX PLAY") + " · " + (p.siguiendo || 0) + " siguiendo · " + (p.seguidores || 0) + " seguidores</p>" +
      '<div class="p5-otro-acc">' + btnSeguir(p) + (p.lo_sigo ? '<button type="button" class="p5-so-b off" data-p5-so="regalo" data-c="' + esc(p.codigo) + '"><img src="img/ic2/regalo.webp" alt="" width="22" height="22">Regalo</button>' : "") + "</div>" +
      '<div class="p5-pf-g">' + st("llama", (p.racha || 0) + ((p.racha || 0) === 1 ? " día" : " días"), "Racha") + st("rayo", Number(p.xp || 0).toLocaleString("es-CO") + " XP", "Experiencia") + st("corona", "Nivel " + (p.nivel || 1), "Su gato") + st("libro", String(p.lecciones || 0), "Lecciones") + (am ? st("amigos", (p.mutua || 0) + ((p.mutua || 0) === 1 ? " día" : " días"), "Racha juntos") : "") + "</div>" +
      '<h3 class="p5-pf-h">Logros ' + logros.length + " / " + (typeof ACH !== "undefined" ? ACH.length : 19) + '</h3><div class="p5-pf-lg">' + (logros.length ? logros.slice(0, 8).map(function(a){ return '<span class="p5-pf-l" title="' + esc(a[1]) + '"><img src="img/logros/l' + (a[0] < 10 ? "0" : "") + a[0] + '.webp" alt="" width="56" height="56"><small>' + esc(a[1]) + "</small></span>"; }).join("") : '<p class="p5-pf-v">Todavía no tiene logros.</p>') + "</div></div>" +
      '<div class="set-row c"><button class="gbtn ghost" data-g="close">Cerrar</button></div></div>';
  };
  var verPerfil = function(c){
    var base = (SO.gente || []).concat(SO.res || []).filter(function(x){ return x.codigo === c; })[0] || { codigo: c, nick: "…" };
    var pon = function(p){ try { var m = D.querySelector(".gmodal .p5-otro"); if (m) m.outerHTML = otroHTML(p); else { gQ.unshift([otroHTML(p), "m-inst m-am m-otro"]); if (gOpen) gCloseModal(); else gNextModal(); } } catch (e) {} };
    pon(base);
    rpc("plx_perfil", { codigo: c }).then(function(r){ var p = r.error ? null : (Array.isArray(r.data) ? r.data[0] : r.data); if (p && D.querySelector(".gmodal .p5-otro")) pon(p); }, function(){});
  };
  var regaloModal = function(a){
    var m = monedas();
    return '<div class="p5-pasos p5-rg"><img src="img/ic2/regalo.webp" alt="" width="84" height="84"><h2 class="gm-t" id="gm-title">Regalo para ' + esc(a.nick) + '</h2><p class="gm-sub">Tienes ' + m.toLocaleString("es-CO") + " monedas. Un regalo por persona al día.</p><ol>" +
      '<li><b><img src="img/ic2/reloj-arena.webp" alt="" width="26" height="26"></b><span><i>Protector de racha</i><br>Le guarda la racha un día.</span><button type="button" class="p5-so-b" data-p5-so="enviar" data-t="congelador" data-c="' + esc(a.codigo) + '"' + (m < CONG ? " disabled" : "") + ">" + CONG + "</button></li>" +
      '<li><b><img src="img/ic2/moneda.webp" alt="" width="26" height="26"></b><span><i>' + REG_MON + " monedas</i><br>Para su tienda.</span>" + '<button type="button" class="p5-so-b" data-p5-so="enviar" data-t="monedas" data-c="' + esc(a.codigo) + '"' + (m < REG_MON ? " disabled" : "") + ">" + REG_MON + "</button></li></ol>" +
      '<p class="p5-nota" role="status" aria-live="polite"></p><div class="set-row c"><button class="gbtn ghost" data-g="close">Cerrar</button></div></div>';
  };
  var RG = { ok: "¡Enviado!", hoy: "Ya le enviaste un regalo hoy.", tope: "Llegaste a tres regalos por hoy.", no: "No se pudo enviar." };
  D.addEventListener("submit", function(e){
    var f = e.target.closest && e.target.closest("[data-p5-so-f]"); if (!f) return; e.preventDefault();
    var q = (f.querySelector("input").value || "").trim(); SO.q = q;
    if (q.length < 2) { SO.msg = "Escribe al menos dos letras."; SO.res = null; return social(); }
    SO.msg = "Buscando…"; social();
    rpc("plx_buscar", { q: q }).then(function(r){ SO.msg = r.error ? "No se pudo buscar. Intenta de nuevo." : ""; SO.res = r.error ? null : (r.data || []); social(); });
  });
  window.addEventListener("click", function(e){
    var t = e.target.closest ? e.target : null; if (!t) return;
    var b = t.closest("[data-p5-so],[data-p5-am]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var k = b.getAttribute("data-p5-so") || b.getAttribute("data-p5-am"), c = b.getAttribute("data-c");
    if (k === "abrir") return abreSocial();
    if (k === "logros") { var tl = D.querySelector('#view .ptabs > button[data-arg="logros"]'); if (tl) { tl.click(); setTimeout(function(){ var a = D.querySelector("#view .achs"); if (a) a.scrollIntoView({ block: "start", behavior: "smooth" }); }, 250); } return; }
    if (k === "lista") { SO.lista = c; return social(); }
    if (k === "ver") return verPerfil(c);
    if (k === "comprar") { var G = gEnsure(); if ((G.freeze || 0) >= MAX_FRZ || monedas() < CONG) return; G.coins -= CONG; G.freeze = (G.freeze || 0) + 1; guarda(); avisa("Protector guardado"); return repinta(); }
    var marca = function(si){ [SO.gente, SO.res].forEach(function(L){ (L || []).forEach(function(a){ if (a.codigo === c) a.lo_sigo = si; }); }); fSocial = ""; social(); if (D.querySelector(".gmodal .p5-otro")) verPerfil(c); };
    if (k === "seguir") { b.disabled = true; rpc("plx_seguir", { codigo: c }).then(function(r){ if (!r.error && r.data === "ok") { marca(true); cargaSocial(true); } else { SO.msg = r.data === "lleno" ? "Ya sigues al máximo de personas." : "No se pudo seguir."; social(); } }); return; }
    if (k === "dejar") { b.disabled = true; rpc("plx_dejar", { codigo: c }).then(function(){ marca(false); cargaSocial(true); }); return; }
    if (k === "regalo") { var a = (SO.gente || []).concat(SO.res || []).filter(function(x){ return x.codigo === c; })[0]; if (!a) return; try { gQ.unshift([regaloModal(a), "m-inst m-am"]); if (gOpen) gCloseModal(); else gNextModal(); } catch (x) {} return; }
    if (k === "enviar") { var tipo = b.getAttribute("data-t"), precio = tipo === "congelador" ? CONG : REG_MON, nota = D.querySelector(".gmodal .p5-rg .p5-nota"); if (monedas() < precio) return;
      [].forEach.call(D.querySelectorAll(".gmodal .p5-rg [data-p5-so=enviar]"), function(x){ x.disabled = true; });
      rpc("plx_regalar", { codigo: c, tipo: tipo }).then(function(r){ var res = r.error ? "no" : r.data; if (res === "ok") { gEnsure().coins -= precio; guarda(); } if (nota) nota.textContent = RG[res] || RG.no; fSocial = ""; social(); }); }
  }, true);

  var fPerfil = "";
  var perfil = function(){
    var v = ""; try { v = view; } catch (e) {} if (v !== "perfil") return;
    var g = D.querySelector("#view .gperfil"), cab = g ? g.querySelector(":scope > .prof-head") : null; if (!g || !cab) return;
    cargaSocial();
    var G = gEnsure(), xp = 0, lv = 1, rk = 0; try { xp = S.xp || 0; lv = catLevel(xp); rk = streak(); } catch (e) {}
    var sub = (cab.querySelector(".ph-sub") || {}).textContent || "", fr = "";
    [].forEach.call(cab.querySelectorAll(".ph-stats > span"), function(s){ if (/franc/i.test(s.textContent)) fr = ((s.querySelector("i,b") || {}).textContent || "").trim(); });
    var ganados = []; try { ACH.forEach(function(a, i){ if (G.ach && G.ach[a[0]]) ganados.push([i, a[1], G.ach[a[0]]]); }); ganados.sort(function(x, y){ return String(y[2]).localeCompare(String(x[2])); }); } catch (e) {}
    var L = SO.ok ? (SO.gente || []) : null, sigo = L ? L.filter(function(a){ return a.lo_sigo; }) : [], siguen = L ? L.filter(function(a){ return a.me_sigue; }) : [], am = L ? L.filter(function(a){ return a.lo_sigo && a.me_sigue; }) : [];
    var f = [G.name, xp, rk, fr, G.freeze || 0, ganados.length, JSON.stringify(G.cat || {}), L ? L.map(function(a){ return a.codigo + a.mutua + a.hoy + a.lo_sigo + a.me_sigue; }).join(",") : "x" + sbOK(), sub].join("|");
    var ya = g.querySelector(":scope > .p5-pf"); if (ya && f === fPerfil) return; fPerfil = f;
    var st = function(ic, val, et){ return '<div class="p5-pf-s"><img src="img/ic2/' + ic + '.webp" alt="" width="34" height="34"><span><b>' + esc(val) + "</b><small>" + et + "</small></span></div>"; };
    var h = '<div class="p5-pf-cab" role="button" tabindex="0" aria-label="Editar tu gato"><span class="p5-pf-gato">' + gatoDe(G.cat) + '</span></div>' +
      '<div class="p5-pf-id"><h1>' + esc(G.name || "Tu perfil") + "</h1><p>" + esc(sub.trim()) + "</p></div>" +
      '<div class="p5-pf-acc"><button type="button" class="p5-pf-b" data-p5-am="abrir"><img src="img/ic2/pata.webp" alt="" width="26" height="26">' + "Amigos" + "</button>" +
        (L ? '<button type="button" class="p5-pf-n" data-p5-am="abrir"><b>' + sigo.length + '</b><small>siguiendo</small></button><button type="button" class="p5-pf-n" data-p5-am="abrir"><b>' + siguen.length + "</b><small>seguidores</small></button>" : "") + "</div>" +
      '<h2 class="p5-pf-h">Resumen</h2><div class="p5-pf-g">' + st("llama", rk + (rk === 1 ? " día" : " días"), "Racha") + st("bandera", fr || "A1", "Nivel de francés") + st("corona", "Nivel " + lv, "Tu gato") + st("rayo", Number(xp).toLocaleString("es-CO") + " XP", "Experiencia") + "</div>" +
      '<h2 class="p5-pf-h">Logros <button type="button" data-p5-am="logros">Ver todos</button></h2><div class="p5-pf-lg">' +
        (ganados.length ? ganados.slice(0, 4).map(function(a){ return '<span class="p5-pf-l" title="' + esc(a[1]) + '"><img src="img/logros/l' + (a[0] < 10 ? "0" : "") + a[0] + '.webp" alt="" width="64" height="64"><small>' + esc(a[1]) + "</small></span>"; }).join("") : '<p class="p5-pf-v">Termina tu primera lección para ganar el primero.</p>') + "</div>";
    if (!ya) { ya = D.createElement("section"); ya.className = "p5-pf"; ya.setAttribute("aria-label", "Tu perfil"); g.insertBefore(ya, g.firstChild); }
    ya.innerHTML = h;
  };
  window.PLX_SOCIAL = { abrir: abreSocial, recarga: function(){ SO.ok = null; cargaSocial(true); }, estado: SO, congelador: usaCongelador, regalos: recibeRegalos };

  /* ====================================================================== 14f. EDITOR DEL GATO A PANTALLA COMPLETA (4.14)
     Como el editor de avatar de Duolingo: se abre tocando el gato del Perfil; vista previa arriba, categorías y opciones
     abajo, «Listo» para salir. Reutiliza el personalizador de la app (pelajes, accesorios, ropa y fondos, con sus
     candados) y le suma dos cosas nuevas: color de ojos y color de orejas (G.cat.eyeC / G.cat.earC), que se guardan y
     se sincronizan como el resto del gato. «Mi gato» deja de ser una pestaña del Perfil. */
  var OJOS = [["", "Natural"], ["#3B82F6", "Azul"], ["#16A34A", "Verde"], ["#B45309", "Miel"], ["#F59E0B", "Ámbar"], ["#7C3AED", "Violeta"], ["#0EA5A4", "Turquesa"], ["#EC4899", "Rosa"], ["#64748B", "Gris"], ["#1F2430", "Negro"]];
  var OREJAS = [["", "Natural"], ["#FF6B8B", "Rosa"], ["#F4AFBD", "Rosa claro"], ["#FFC83D", "Amarillo"], ["#93C5FD", "Celeste"], ["#C4B5FD", "Lila"], ["#86EFAC", "Menta"], ["#FDBA74", "Durazno"], ["#F5F6FA", "Blanco"], ["#3C4560", "Oscuro"]];
  try {
    if (typeof catSVG === "function" && typeof COATS === "object") {
      var cat0 = catSVG;
      catSVG = function(g, o){
        g = g || {};
        if (!g.eyeC && !g.earC) return cat0.apply(this, arguments);
        var k = COATS[g.coat] || COATS.gris, e0 = k.eye, r0 = k.ear, neg = COATS.negro, ne0 = neg && neg.eye, nr0 = neg && neg.ear;
        try { if (g.eyeC) k.eye = g.eyeC; if (g.earC) k.ear = g.earC;
          var out = cat0.apply(this, arguments);
          /* el dibujo nuevo (plx33) rellena el interior de la oreja con un degradado propio: se cambia por el color elegido */
          if (g.earC && typeof out === "string") out = out.replace(/(<path d="[^"]*" )fill="url\(#[A-Za-z0-9_-]+e\)"/g, '$1fill="' + g.earC + '"');
          return out; }
        finally { k.eye = e0; k.ear = r0; if (neg && neg !== k) { neg.eye = ne0; neg.ear = nr0; } }
      };
    }
  } catch (e) {}
  var edTab = "";   /* "" = las categorías de la app; "ojos" | "orejas" = las nuevas */
  var edAbre = function(){
    H.classList.add("p5-ed"); edTab = "";
    var b = D.querySelector('#view .ptabs > button[data-arg="gato"]'); if (b && b.getAttribute("aria-selected") !== "true") b.click(); else editor();
    scrollTo(0, 0);
  };
  var edCierra = function(){
    H.classList.remove("p5-ed"); edTab = "";
    var b = D.querySelector('#view .ptabs > button[data-arg="logros"]'); if (b) b.click();
    scrollTo(0, 0);
  };
  var muestras = function(lista, campo){
    var G = gEnsure(), act = (G.cat && G.cat[campo]) || "";
    return lista.map(function(x){ return '<button type="button" class="p5-mu' + (act === x[0] ? " on" : "") + '" data-p5-color="' + campo + '" data-c="' + x[0] + '" aria-label="' + x[1] + '" aria-pressed="' + (act === x[0]) + '"><i style="' + (x[0] ? "--c:" + x[0] : "") + '"></i><small>' + x[1] + "</small></button>"; }).join("");
  };
  var editor = function(){
    var v = ""; try { v = view; } catch (e) {}
    if (v !== "perfil") { H.classList.remove("p5-ed"); return; }
    var tabs = D.querySelector("#view .ptabs"), bg = tabs ? tabs.querySelector('button[data-arg="gato"]') : null; if (!tabs) return;
    if (bg) bg.classList.add("p5-fuera");
    var enGato = bg && bg.getAttribute("aria-selected") === "true", ed = H.classList.contains("p5-ed");
    if (!ed) { if (enGato) { var bl = tabs.querySelector('button[data-arg="logros"]'); if (bl) bl.click(); } return; }
    var cu = D.querySelector("#view .gperfil .cust"); if (!cu) { if (bg && !enGato) bg.click(); return; }
    if (!cu.querySelector(":scope > .p5-ed-top")) cu.insertAdjacentHTML("afterbegin", '<div class="p5-ed-top"><button type="button" class="p5-ed-x" data-p5-ed="cerrar" aria-label="Cerrar">✕</button><b>Editar gato</b><button type="button" class="p5-ed-ok" data-p5-ed="cerrar">Listo</button></div>');
    /* en el editor el gato sale con los ojos abiertos, para que se vea su color */
    var cp = cu.querySelector(".cust-prev .cp-cat");
    if (cp && !cp.getAttribute("data-p5")) { try { var G0 = gEnsure(); cp.innerHTML = catSVG(G0.cat, { mood: "open" }); cp.setAttribute("data-p5", "1"); } catch (e) {} }
    var seg = cu.querySelector(".cust-side .seg"), grid = cu.querySelector(".cust-side .cgrid"); if (!seg || !grid) return;
    if (!seg.querySelector("[data-p5-edtab]")) seg.insertAdjacentHTML("beforeend", '<button type="button" data-p5-edtab="ojos">Ojos</button><button type="button" data-p5-edtab="orejas">Orejas</button>');
    [].forEach.call(seg.querySelectorAll("button"), function(b){
      var mio = b.getAttribute("data-p5-edtab"), si = edTab ? mio === edTab : (!mio && b.getAttribute("aria-pressed") === "true");
      b.classList.toggle("p5-on", !!si);
    });
    var mu = cu.querySelector(".cust-side .p5-mus");
    if (edTab) {
      var h = '<p class="p5-mus-t">' + (edTab === "ojos" ? "Color de ojos" : "Color de orejas") + "</p>" + muestras(edTab === "ojos" ? OJOS : OREJAS, edTab === "ojos" ? "eyeC" : "earC");
      if (!mu) { mu = D.createElement("div"); mu.className = "p5-mus"; grid.parentNode.insertBefore(mu, grid); }
      if (mu.getAttribute("data-h") !== h) { mu.innerHTML = h; mu.setAttribute("data-h", h); }
      grid.classList.add("p5-fuera");
    } else { if (mu) mu.remove(); grid.classList.remove("p5-fuera"); }
  };
  window.addEventListener("click", function(e){
    var t = e.target.closest ? e.target : null; if (!t) return;
    if (t.closest(".p5-pf-cab")) { e.preventDefault(); e.stopPropagation(); return edAbre(); }
    if (t.closest("[data-p5-ed=cerrar]")) { e.preventDefault(); e.stopPropagation(); return edCierra(); }
    var et = t.closest("[data-p5-edtab]"); if (et) { e.preventDefault(); e.stopPropagation(); edTab = et.getAttribute("data-p5-edtab"); return editor(); }
    var co = t.closest("[data-p5-color]");
    if (co) { e.preventDefault(); e.stopPropagation(); var G = gEnsure(), c = co.getAttribute("data-c"), campo = co.getAttribute("data-p5-color");
      if (c) G.cat[campo] = c; else delete G.cat[campo];
      try { save(); pcIndexSync(); gPush(); } catch (x) {} fPerfil = ""; try { render(); } catch (x) {} return; }
    if (H.classList.contains("p5-ed") && t.closest("#view .cust .seg button[data-g=cust]")) edTab = "";   /* vuelve a una categoría de la app */
  }, true);
  window.PLX_GATO = { editar: edAbre, cerrar: edCierra };

  /* ====================================================================== 14g. TECLADO EN PC (4.17)
     Esc cierra lo que esté encima (en este orden): ventana, hoja de cursos, editor del gato, PLEX Quiz, diagnóstico,
     juego (pausa si está en partida; cierra si está en portada o resultado) y lección. Fuera de eso, Esc vuelve a Inicio.
     En la explicación de la lección, ← y → pasan de tarjeta. Nunca actúa mientras se escribe en un campo (salvo Esc,
     que primero suelta el campo). */
  var visible = function(e){ if (!e) return false; var b = e.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
  var pulsa = function(sel){ var e = typeof sel === "string" ? D.querySelector(sel) : sel; if (e && visible(e) && !e.disabled) { e.click(); return true; } return false; };
  var escribiendo = function(){ var a = D.activeElement; return !!a && (/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) || a.isContentEditable); };
  var hay = function(sel){ var e = D.querySelector(sel); return !!e && !e.hidden && visible(e) && !!e.firstElementChild; };   /* el Quiz y otras capas se ocultan sin quitarse */
  var saleCapa = function(){
    if (D.querySelector(".gmodal")) { if (pulsa(".gmodal [data-g=close]")) return "ventana"; try { gCloseModal(); return "ventana"; } catch (e) {} }
    if (D.querySelector(".lx-hoja")) { if (pulsa(".lx-hoja [data-lx-cerrar]")) return "cursos"; }
    if (H.classList.contains("p5-ed")) { edCierra(); return "editor"; }
    if (hay(".rkx") && pulsa(".rkx .rkx-x, .rkx [data-rkx=cerrar], .rkx button[aria-label=Cerrar]")) return "ranking";
    if (hay(".kq")) { if (pulsa(".kq .kq-x")) return "quiz"; }
    if (hay(".dgx")) { if (pulsa(".dgx .dgx-x")) return "diagnóstico"; }
    var pg = D.getElementById("plxg");
    if (pg && visible(pg) && pg.firstElementChild) {
      /* en partida el propio juego pausa con Esc; si ya está en pausa, un segundo Esc sigue jugando (después de que el
         juego procese la tecla, para no pisarse) */
      if (D.querySelector("#plxg .plxg-pausa")) { setTimeout(function(){ pulsa("#plxg .plxg-pausa [data-plxg=seguir]"); }, 80); return "seguir"; }
      if (pg.classList.contains("plxg-juego")) return "partida";
      if (pulsa("#plxg .hb-top .plxg-ib") || pulsa("#plxg [data-plxg=salir]")) return "juego";
      try { PLXG.cerrar(); return "juego"; } catch (e) {}
    }
    var pl = D.getElementById("player");
    if (pl && !pl.hidden && visible(pl)) { if (pulsa("#player .ph .quit.m-q0") || pulsa("#player .ph .quit")) return "lección"; }
    return "";
  };
  D.addEventListener("keydown", function(e){
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "Escape") {
      if (escribiendo()) { try { D.activeElement.blur(); } catch (x) {} return; }
      var q = saleCapa();
      if (q) { e.preventDefault(); return; }
      var v = ""; try { v = view; } catch (x) {}
      if (v && v !== "parcours" && !D.querySelector(".pclogin")) { e.preventDefault(); try { go(v === "lecciones" || v === "tienda" || v === "perfil" || v === "social" || v === "ranking" || v === "retos" ? "parcours" : "retos"); } catch (x) {} }
      return;
    }
  });
  /* ← y → en la explicación: en captura, antes de que el núcleo use esas teclas para otra cosa */
  window.addEventListener("keydown", function(e){
    if ((e.key !== "ArrowRight" && e.key !== "ArrowLeft") || e.ctrlKey || e.metaKey || e.altKey || escribiendo()) return;
    var pl = D.getElementById("player"); if (!pl || pl.hidden || !pl.classList.contains("tx") || D.querySelector(".gmodal")) return;
    if (e.key === "ArrowRight" ? (pulsa("#player .pf .tx-sig") || pulsa("#player [data-next]")) : pulsa("#player .pf .tx-atras")) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  /* pista discreta «Esc para salir» al abrir una capa en PC (una vez por sesión de cada tipo) */
  var pistas = {};
  var pista = function(){
    if (window.innerWidth < 1024) return;
    var pl = D.getElementById("player"), pg = D.getElementById("plxg");
    var k = (pl && !pl.hidden) ? "lec" : (pg && pg.firstElementChild && visible(pg)) ? "jue" : hay(".kq") ? "kq" : H.classList.contains("p5-ed") ? "ed" : "";
    var el = D.getElementById("p5-esc");
    if (!k || pistas[k]) { if (!k && el) el.classList.remove("on"); return; }
    pistas[k] = 1;
    if (!el) { el = D.createElement("div"); el.id = "p5-esc"; el.className = "p5-esc"; el.setAttribute("aria-hidden", "true"); el.innerHTML = "<kbd>Esc</kbd> para salir"; D.body.appendChild(el); }
    el.classList.add("on"); setTimeout(function(){ el.classList.remove("on"); }, 3500);
  };
  window.PLX_TECLAS = { sale: saleCapa };

  /* ====================================================================== 14h. SALTOS DE LÍNEA EN LA CORRECCIÓN (4.17)
     Algunas explicaciones traen «<br>» y la hoja de corrección lo mostraba como texto: aquí se vuelve un salto real. */
  var saltos = function(){
    var pl = D.getElementById("player"); if (!pl || pl.hidden) return;
    var w = D.createTreeWalker(pl, NodeFilter.SHOW_TEXT, null), n, lista = [];
    while ((n = w.nextNode())) if (n.nodeValue.indexOf("<br>") >= 0) lista.push(n);
    lista.forEach(function(t){
      var f = D.createDocumentFragment();
      t.nodeValue.split("<br>").forEach(function(s, i){ if (i) f.appendChild(D.createElement("br")); if (s) f.appendChild(D.createTextNode(s)); });
      t.parentNode.replaceChild(f, t);
    });
  };

  /* la hoja de corrección encoge el cuerpo del ejercicio: se desplaza para que la respuesta siga a la vista (4.17.1) */
  var hojaVe = function(){
    var pl = D.getElementById("player"); if (!pl || pl.hidden) return;
    var f = pl.querySelector(".fb"); if (!f || !visible(f)) { if (f) f.__p5v = 0; return; }
    if (f.__p5v) return; f.__p5v = 1;
    var fn = function(){
      var p = pl.querySelector(".pbody"); if (!p) return;
      var os = [].filter.call(p.querySelectorAll(".opt,.tok,.mbtn,.chipb,input,textarea"), visible); if (!os.length) return;
      var c = p.getBoundingClientRect(), top = Infinity, bot = -Infinity;
      os.forEach(function(e){ var b = e.getBoundingClientRect(); top = Math.min(top, b.top); bot = Math.max(bot, b.bottom); });
      var d = bot - c.bottom + 12; if (d > 0) p.scrollTop += Math.min(d, Math.max(0, top - c.top - 8));
    };
    requestAnimationFrame(fn); setTimeout(fn, 400);
  };

  /* ====================================================================== 14i. SOCIAL 2 (4.18)
     La pantalla Social, rehecha: tu círculo, rachas con amigos, reto semanal, novedades con «Felicitar», ranking de
     amigos, personas y avisos (campana + contador en la barra y el riel).
     Backend extra: herramientas/supabase/05-social-2.sql (plx_social2, plx_felicitar, plx_toque). Si aún no está
     instalado (SO.v2 = false) todo lo demás funciona igual: sin «Felicitar», sin «Recordar», sin reto semanal, el
     ranking va por XP total y los avisos solo cuentan seguidores nuevos (se detectan en este dispositivo). */
  var CAMP = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7 2.5 7h-17S6 15 6 9z"/><path d="M10 20a2.2 2.2 0 0 0 4 0"/></svg>';
  var LUPA = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>';
  var RETO_XP = 150, RETO_MON = 100;
  SO.tab = "novedades"; SO.rk = "semana"; SO.v2 = null; SO.s2 = null; SO.n = 0;
  var memoK = function(){ var u = ""; try { u = PCB.uid || ""; } catch (e) {} return "plx-so-" + u; };
  var memo = function(){ try { return JSON.parse(localStorage.getItem(memoK()) || "null") || {}; } catch (e) { return {}; } };
  var memoPon = function(m){ try { localStorage.setItem(memoK(), JSON.stringify(m)); } catch (e) {} };
  var hoyK = function(){ try { return dkey(new Date()); } catch (e) { return new Date().toISOString().slice(0, 10); } };
  var xpDia = function(d){ try { return +dayXP(d) || 0; } catch (e) { return 0; } };
  var yoHoy = function(){ var m = 50; try { m = Math.max(1, gEnsure().goalXP || 50); } catch (e) {} return xpDia(new Date()) >= m; };
  var lunes = function(){ var d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d; };
  var semK = function(){ try { return dkey(lunes()); } catch (e) { return ""; } };
  var yoSem = function(){ var n = 0, d = lunes(), h = new Date(); h.setHours(13, 0, 0, 0); while (d <= h) { n += xpDia(d); d.setDate(d.getDate() + 1); } return Math.max(n, (SO.s2 && +SO.s2.yo) || 0); };
  var semDe = function(c){ var L = (SO.s2 && SO.s2.semana) || []; for (var i = 0; i < L.length; i++) if (L[i].codigo === c) return +L[i].xp || 0; return 0; };
  var felicitado = function(c, k){ return ((SO.s2 && SO.s2.felicitados) || []).some(function(x){ return x.codigo === c && x.dato === k; }); };
  var tocado = function(c){ return ((SO.s2 && SO.s2.toques) || []).indexOf(c) >= 0; };
  var hace = function(t){ var s = Math.max(0, (Date.now() - t) / 1000); if (s < 90) return "ahora"; if (s < 3600) return "hace " + Math.round(s / 60) + " min"; if (s < 86400) return "hace " + Math.round(s / 3600) + " h"; var d = Math.round(s / 86400); return d === 1 ? "ayer" : "hace " + d + " días"; };
  var diaTx = function(f){ var a = Date.parse(String(f || "").slice(0, 10) + "T12:00:00"), h = new Date(); h.setHours(12, 0, 0, 0); if (!a) return ""; var d = Math.round((h.getTime() - a) / 864e5); return d <= 0 ? "Hoy" : d === 1 ? "Ayer" : "Hace " + d + " días"; };
  var logroDe = function(k){ var r = { i: -1, n: k }; try { ACH.forEach(function(a, i){ if (a[0] === k) { r.i = i; r.n = a[1]; } }); } catch (e) {} return r; };
  var sigoA = function(c){ return (SO.gente || []).some(function(a){ return a.codigo === c && a.lo_sigo; }); };

  /* ---------- avisos ---------- */
  var avisosLista = function(){
    var m = memo(), L = [];
    if (SO.v2 && SO.s2) (SO.s2.avisos || []).forEach(function(x){ L.push({ id: x.id, tipo: x.tipo, dato: x.dato || "", t: Date.parse(x.creado) || 0, codigo: x.codigo, nick: x.nick, avatar: x.avatar }); });
    else if (SO.ok === true) {
      var primera = !m.seg, seg = m.seg || {}, cambio = primera;
      (SO.gente || []).forEach(function(a){
        if (!a.me_sigue) return;
        if (seg[a.codigo] == null) { seg[a.codigo] = primera ? 0 : Date.now(); cambio = true; }
        if (seg[a.codigo] && Date.now() - seg[a.codigo] < 14 * 864e5) L.push({ id: "s" + a.codigo, tipo: "sigue", dato: "", t: seg[a.codigo], codigo: a.codigo, nick: a.nick, avatar: a.avatar });
      });
      if (cambio) { m.seg = seg; memoPon(m); }
    }
    L.sort(function(a, b){ return b.t - a.t; });
    var visto = m.t || 0; L.forEach(function(x){ x.nuevo = x.t > visto; });
    return L;
  };
  var riesgo = function(){ if (SO.ok !== true || yoHoy()) return []; return (SO.gente || []).filter(function(a){ return a.lo_sigo && a.me_sigue && a.hoy && (a.mutua || 0) > 0; }); };
  var cuenta = function(){ if (!sbOK() || SO.ok !== true) return 0; var n = avisosLista().filter(function(x){ return x.nuevo; }).length; if (riesgo().length && memo().rz !== hoyK()) n++; return n; };
  var insignias = function(){
    var n = SO.n || 0, tx = n > 9 ? "9+" : String(n);
    [].forEach.call(D.querySelectorAll('nav#tabbar button[data-mpk="social"], #px-rail .rl-b[data-view="social"]'), function(b){
      var i = b.querySelector(":scope > .s2-nb");
      if (!n) { if (i) i.remove(); return; }
      if (!i) { i = D.createElement("i"); i.className = "s2-nb"; i.setAttribute("aria-hidden", "true"); b.appendChild(i); }
      if (i.textContent !== tx) i.textContent = tx;
    });
  };
  var recuenta = function(){ SO.n = cuenta(); insignias(); };
  var trasCarga = function(){
    var antes = SO.n || 0; recuenta();
    var v = ""; try { v = view; } catch (e) {}
    var pl = D.getElementById("player"), pg = D.getElementById("plxg"), ocupado = (pl && !pl.hidden) || (pg && pg.firstElementChild && visible(pg));   /* en plena lección o juego no se interrumpe */
    if (SO.n > antes && v !== "social" && !ocupado) avisa(SO.n === 1 ? "Tienes un aviso nuevo en Social" : "Tienes " + SO.n + " avisos nuevos en Social");
  };
  var avisoTx = function(x){
    if (x.tipo === "felicita") { var p = String(x.dato).split(":"); return p[0] === "logro" ? "te felicitó por el logro <b>" + esc(logroDe(p[1]).n) + "</b>" : p[0] === "racha" ? "te felicitó por tu racha de <b>" + esc(p[1]) + " días</b>" : "te felicitó por practicar"; }
    if (x.tipo === "toque") return "te recuerda practicar hoy para no romper la racha juntos";
    if (x.tipo === "regalo") return "te envió " + (x.dato === "congelador" ? "un <b>protector de racha</b>" : "<b>" + REG_MON + " monedas</b>");
    return "empezó a seguirte";
  };
  var vacio = function(pose, tit, tx, btn, acc){ return '<div class="s2-vacio"><img src="img/mz3/' + pose + '.webp" alt="" width="96" height="96" loading="lazy" decoding="async"><b>' + tit + "</b><p>" + tx + "</p>" + (btn ? '<button type="button" class="p5-so-b" data-p5-so="' + acc + '">' + btn + "</button>" : "") + "</div>"; };
  var avisosHTML = function(){
    var L = avisosLista(), R = riesgo(), IC = { felicita: "estrella", toque: "llama", regalo: "regalo", sigue: "amigos" };
    return '<div class="s2-av"><h2 class="gm-t" id="gm-title">Avisos</h2>' +
      (R.length ? '<div class="s2-av-r">' + ICN("llama", 34) + "<span><b>Tu racha con " + esc(R[0].nick) + (R.length > 1 ? " y " + (R.length - 1) + " más" : "") + " está en juego</b><small>Ya practicó hoy. Completa tu meta diaria para no romperla.</small></span>" + '<button type="button" class="p5-so-b" data-p5-so="practicar">Practicar</button></div>' : "") +
      '<div class="s2-av-l">' + (L.length ? L.map(function(x){
        return '<div class="s2-av-i' + (x.nuevo ? " nuevo" : "") + '"><button type="button" class="p5-am-g" data-p5-so="ver" data-c="' + esc(x.codigo) + '" aria-label="Ver el perfil de ' + esc(x.nick) + '">' + gatoDe(x.avatar) + '</button><span class="s2-av-t"><span><b>' + esc(x.nick) + "</b> " + avisoTx(x) + "</span><small>" + hace(x.t) + "</small></span>" +
          (x.tipo === "sigue" && !sigoA(x.codigo) ? '<button type="button" class="p5-so-b" data-p5-so="seguir" data-c="' + esc(x.codigo) + '">Seguir</button>' : ICN(IC[x.tipo] || "estrella", 32)) + "</div>";
      }).join("") : (R.length ? "" : vacio("dormido", "Todo al día", "Cuando alguien te siga, te felicite o te mande un regalo, lo verás aquí."))) + "</div>" +
      '<div class="set-row c"><button class="gbtn ghost" data-g="close">Cerrar</button></div></div>';
  };
  var abreAvisos = function(){
    try { gQ.unshift([avisosHTML(), "m-inst m-am m-av"]); if (gOpen) gCloseModal(); else gNextModal(); } catch (e) {}
    var m = memo(); m.t = Date.now(); m.rz = hoyK(); memoPon(m); recuenta(); fSocial = ""; social();
  };

  /* ---------- piezas de la pantalla ---------- */
  var protHTML = function(){
    var frz = Math.min(MAX_FRZ, gEnsure().freeze || 0), sl = "";
    for (var i = 0; i < MAX_FRZ; i++) sl += '<span class="s2-slot' + (i < frz ? " on" : "") + '">' + ICN("reloj-arena", 30) + "</span>";
    return '<section class="s2-c s2-prot" aria-label="Protectores de racha: ' + frz + " de " + MAX_FRZ + '"><div class="s2-slots" aria-hidden="true">' + sl + '</div><div class="s2-prot-t"><h2>Protectores de racha</h2><p>Si un día no practicas, uno guarda tu racha. Ganas otro cada 7 días seguidos.</p></div><button type="button" class="p5-so-b" data-p5-so="comprar"' + (frz >= MAX_FRZ || monedas() < CONG ? " disabled" : "") + ">" + (frz >= MAX_FRZ ? "Completo" : ICN("moneda", 18) + CONG) + "</button></section>";
  };
  var rachas2HTML = function(am){
    var yo = yoHoy(), TX = { ok: "¡Hoy cumplieron!", espera: "Te espera", falta: "Aún no practica", nada: "Sin practicar hoy" };
    return '<section class="s2-c s2-rachas"><h2>Rachas con amigos</h2><div class="s2-fila">' + am.map(function(a){
      var est = a.hoy && yo ? "ok" : a.hoy ? "espera" : yo ? "falta" : "nada";
      return '<div class="s2-r ' + est + '"><button type="button" class="s2-r-g" data-p5-so="ver" data-c="' + esc(a.codigo) + '" aria-label="' + esc(a.nick) + ": racha juntos de " + (a.mutua || 0) + " días. " + TX[est] + '"><span>' + gatoDe(a.avatar) + "</span><em>" + ICN("llama", 15) + (a.mutua || 0) + "</em></button><b>" + esc(a.nick) + "</b>" +
        (est === "falta" && SO.v2 ? (tocado(a.codigo) ? "<small>Avisado</small>" : '<button type="button" class="s2-r-t" data-p5-so="toque" data-c="' + esc(a.codigo) + '">Recordar</button>') : "<small>" + TX[est] + "</small>") + "</div>";
    }).join("") + '<button type="button" class="s2-r mas" data-p5-so="buscar" aria-label="Buscar personas"><span aria-hidden="true">+</span><b>Añadir</b></button></div>' +
      (am.length ? "" : '<p class="s2-n">Cuando alguien a quien sigues te siga también, verán aquí su racha juntos.</p>') + "</section>";
  };
  var retoHTML = function(am){
    if (!SO.v2) return "";
    if (!am.length) return '<section class="s2-c s2-reto bloq">' + ICN("cofre", 56) + "<div><h2>Reto de amigos</h2><p>Haz tu primer amigo (que se sigan los dos) y cada semana sumarán XP juntos para ganar " + RETO_MON + " monedas.</p></div></section>";
    var G = gEnsure(), P = am.map(function(a){ return { nick: a.nick, avatar: a.avatar, xp: semDe(a.codigo) }; }).sort(function(a, b){ return b.xp - a.xp; }).slice(0, 4);
    var yo = yoSem(), tot = yo + P.reduce(function(s, x){ return s + x.xp; }, 0), meta = RETO_XP * (P.length + 1), pct = Math.min(100, Math.round(tot / meta * 100)), hecho = tot >= meta, cobrado = G.retoAm === semK();
    var q = 7 - ((new Date().getDay() + 6) % 7);
    return '<section class="s2-c s2-reto' + (hecho ? " hecho" : "") + '"><div class="s2-reto-c">' + ICN(hecho ? "cofre-abierto" : "cofre", 56) + "<div><h2>Reto de amigos</h2><p>" + (hecho ? "¡Lo lograron esta semana!" : "Sumen " + meta.toLocaleString("es-CO") + " XP entre todos antes del domingo.") + "</p></div></div>" +
      '<div class="s2-reto-b"><u><s style="width:' + Math.max(3, pct) + '%"></s></u><small><b>' + Math.min(tot, 99999).toLocaleString("es-CO") + "</b> / " + meta.toLocaleString("es-CO") + " XP · " + (q === 1 ? "último día" : "quedan " + q + " días") + "</small></div>" +
      '<div class="s2-reto-p"><span class="yo" title="Tú"><i>' + gatoDe(G.cat) + "</i>" + yo + "</span>" + P.map(function(x){ return '<span title="' + esc(x.nick) + '"><i>' + gatoDe(x.avatar) + "</i>" + x.xp + "</span>"; }).join("") + "</div>" +
      (hecho ? '<button type="button" class="p5-so-b s2-cobra" data-p5-so="cobrar"' + (cobrado ? " disabled" : "") + ">" + (cobrado ? "Premio recibido" : "Recibir " + RETO_MON + " monedas") + "</button>" : "") + "</section>";
  };
  var feedHTML = function(){
    var A = SO.act || [];
    if (!A.length) return vacio("lupa", "Aún no hay novedades", "Aquí verás los logros, las rachas y la práctica de quienes sigues.", "Buscar personas", "buscar");
    return '<div class="s2-feed">' + A.slice(0, 30).map(function(x){
      var img = "img/ic2/rayo.webp", tx = "", k = x.tipo + ":" + x.dato + (x.tipo === "logro" ? "" : ":" + String(x.fecha || "").slice(0, 10));
      if (x.tipo === "logro") { var lg = logroDe(x.dato); tx = "ganó el logro <b>" + esc(lg.n) + "</b>"; img = lg.i >= 0 ? "img/logros/l" + (lg.i < 10 ? "0" : "") + lg.i + ".webp" : "img/ic2/trofeo.webp"; }
      else if (x.tipo === "racha") { tx = "llegó a <b>" + esc(x.dato) + " días</b> de racha"; img = "img/ic2/llama.webp"; }
      else tx = "practicó hoy · <b>" + esc(x.dato) + " XP</b>";
      var ya = felicitado(x.codigo, k);
      return '<article class="s2-ev"><button type="button" class="s2-ev-g" data-p5-so="ver" data-c="' + esc(x.codigo) + '" aria-label="Ver el perfil de ' + esc(x.nick) + '">' + gatoDe(x.avatar) + '</button><div class="s2-ev-t"><p><b>' + esc(x.nick) + "</b> " + tx + "</p><small>" + diaTx(x.fecha) + '</small></div><img class="s2-ev-i" src="' + img + '" alt="" width="44" height="44" loading="lazy" decoding="async">' +
        (SO.v2 ? '<button type="button" class="s2-fel' + (ya ? " on" : "") + '" data-p5-so="felicita" data-c="' + esc(x.codigo) + '" data-k="' + esc(k) + '"' + (ya ? " disabled" : "") + ">" + (ya ? "Felicitado" : "Felicitar") + "</button>" : "") + "</article>";
    }).join("") + "</div>";
  };
  var rankHTML = function(sigo){
    var sem = !!SO.v2 && SO.rk !== "total", G = gEnsure(), xpYo = 0; try { xpYo = S.xp || 0; } catch (e) {}
    var Rk = [{ yo: 1, nick: G.name || "Tú", avatar: G.cat, xp: sem ? yoSem() : xpYo }].concat(sigo.map(function(a){ return { codigo: a.codigo, nick: a.nick, avatar: a.avatar, xp: sem ? semDe(a.codigo) : (+a.xp || 0) }; }));
    Rk.sort(function(a, b){ return b.xp - a.xp || (a.yo ? -1 : b.yo ? 1 : 0); });
    var max = Math.max(1, Rk[0].xp);
    return (SO.v2 ? '<div class="p5-so-seg" role="group" aria-label="Periodo"><button type="button" data-p5-so="rk" data-c="semana" aria-pressed="' + sem + '">Esta semana</button><button type="button" data-p5-so="rk" data-c="total" aria-pressed="' + !sem + '">Siempre</button></div>' : "") +
      '<ol class="s2-rk">' + Rk.map(function(x, i){
        var d = '<i class="s2-rk-p p' + (i + 1) + '">' + (i + 1) + '</i><span class="p5-am-g">' + gatoDe(x.avatar) + '</span><span class="s2-rk-t"><b>' + esc(x.nick) + (x.yo ? " <em>Tú</em>" : "") + '</b><u><s style="width:' + Math.max(3, Math.round(x.xp / max * 100)) + '%"></s></u></span><span class="s2-rk-x">' + Number(x.xp).toLocaleString("es-CO") + " XP</span>";
        return x.yo ? '<li class="yo"><div class="s2-rk-f">' + d + "</div></li>" : '<li><button type="button" class="s2-rk-f" data-p5-so="ver" data-c="' + esc(x.codigo) + '" aria-label="' + (i + 1) + ". " + esc(x.nick) + ", " + x.xp + ' XP. Ver su perfil">' + d + "</button></li>";
      }).join("") + "</ol>" + (sigo.length ? "" : '<p class="s2-n">Sigue a tus compañeros para competir con ellos cada semana.</p>');
  };
  var personasHTML = function(sigo, siguen){
    var sug = siguen.filter(function(a){ return !a.lo_sigo; }), lista = SO.lista === "siguen" ? siguen : sigo;
    return '<form class="p5-am-f s2-busca" data-p5-so-f role="search"><input type="search" autocomplete="off" maxlength="30" placeholder="Busca por nombre o apodo" aria-label="Buscar personas por nombre" value="' + esc(SO.q) + '"><button type="submit" class="p5-so-b" aria-label="Buscar">' + LUPA + "</button></form>" +
      '<p class="p5-am-msg" role="status" aria-live="polite">' + esc(SO.msg) + "</p>" +
      (SO.res ? '<div class="p5-am-l">' + (SO.res.length ? SO.res.map(function(a){ return fila(a, btnSeguir(a)); }).join("") : '<p class="s2-n">Nadie con ese nombre. Prueba con otro apodo.</p>') + "</div>" : "") +
      (sug.length ? '<h3 class="s2-h3">Te siguen</h3><div class="s2-sug">' + sug.slice(0, 12).map(function(a){ return '<div class="s2-sug-i"><button type="button" class="s2-sug-g" data-p5-so="ver" data-c="' + esc(a.codigo) + '" aria-label="Ver el perfil de ' + esc(a.nick) + '">' + gatoDe(a.avatar) + "</button><b>" + esc(a.nick) + "</b><small>Nivel " + esc(a.nivel || "1") + "</small>" + btnSeguir(a) + "</div>"; }).join("") + "</div>" : "") +
      '<div class="p5-so-seg" role="group" aria-label="Lista"><button type="button" data-p5-so="lista" data-c="sigo" aria-pressed="' + (SO.lista !== "siguen") + '">Siguiendo <b>' + sigo.length + '</b></button><button type="button" data-p5-so="lista" data-c="siguen" aria-pressed="' + (SO.lista === "siguen") + '">Seguidores <b>' + siguen.length + "</b></button></div>" +
      '<div class="p5-am-l">' + (lista.length ? lista.map(function(a){
        var mu = a.lo_sigo && a.me_sigue;
        return fila(a, (mu ? '<span class="p5-am-r" title="Racha juntos">' + ICN("llama", 20) + (a.mutua || 0) + "</span>" : "") + (a.lo_sigo ? '<button type="button" class="p5-so-g" data-p5-so="regalo" data-c="' + esc(a.codigo) + '" aria-label="Enviar un regalo a ' + esc(a.nick) + '">' + ICN("regalo", 28) + "</button>" : "") + btnSeguir(a));
      }).join("") : '<p class="s2-n">' + (SO.lista === "siguen" ? "Todavía nadie te sigue. Invita a tu clase con el botón de arriba." : "Aún no sigues a nadie. Búscalos por su nombre.") + "</p>") + "</div>";
  };
  var s2HTML = function(){
    var G = gEnsure(), L = SO.gente || [], n = SO.n || 0;
    var top = '<header class="s2-top"><h1 class="fg-h1">Social</h1>' + (sbOK() && SO.ok === true ? '<button type="button" class="s2-camp' + (n ? " on" : "") + '" data-p5-so="avisos" aria-label="Avisos' + (n ? ": " + n + " sin leer" : "") + '">' + CAMP + (n ? "<i>" + (n > 9 ? "9+" : n) + "</i>" : "") + "</button>" : "") + "</header>";
    var der = function(x){ return '<div class="s2-der">' + x + protHTML() + "</div>"; };
    if (!sbOK()) return top + '<div class="s2-izq"><section class="s2-hero inv"><img src="img/mz3/saluda.webp" alt="" width="84" height="84"><div class="s2-hero-t"><b>Aprende con tu clase</b><small>Entra con tu cuenta para seguir a tus compañeros, felicitarlos y hacer rachas juntos.</small></div><div class="s2-hero-b"><button type="button" class="s2-b blanco" data-p5-so="entrar">Entrar</button></div></section></div>' + der("");
    if (SO.ok === false) return top + '<div class="s2-izq"><section class="s2-c">' + vacio("pensando", "No se pudo cargar", "Revisa tu conexión y vuelve a intentarlo.", "Reintentar", "reintentar") + "</section></div>" + der("");
    if (SO.ok !== true) return top + '<div class="s2-izq"><section class="s2-c s2-carga" aria-busy="true" aria-label="Cargando"><i></i><i></i><i></i></section></div>' + der("");
    var sigo = L.filter(function(a){ return a.lo_sigo; }), siguen = L.filter(function(a){ return a.me_sigue; }), am = L.filter(function(a){ return a.lo_sigo && a.me_sigue; });
    var lv = 1, rk = 0; try { lv = catLevel(S.xp || 0); rk = streak(); } catch (e) {}
    var num = function(c, t, l){ return '<button type="button" data-p5-so="tab" data-c="personas" data-l="' + l + '"><b>' + c + "</b><small>" + t + "</small></button>"; };
    var hero = '<section class="s2-hero" aria-label="Tu círculo"><div class="s2-hero-a"><span class="s2-yo">' + gatoDe(G.cat) + '</span><div class="s2-hero-t"><b>' + esc(G.name || "Tu círculo") + "</b><small>Nivel " + lv + " · racha de " + rk + (rk === 1 ? " día" : " días") + "</small></div></div>" +
      '<div class="s2-nums">' + num(sigo.length, "Siguiendo", "sigo") + num(siguen.length, "Seguidores", "siguen") + num(am.length, "Amigos", "sigo") + "</div>" +
      '<div class="s2-hero-b"><button type="button" class="s2-b blanco" data-p5-so="buscar">' + LUPA + 'Buscar personas</button><button type="button" class="s2-b" data-p5-so="invitar">Invitar</button></div></section>';
    var T = SO.tab === "ranking" || SO.tab === "personas" ? SO.tab : "novedades";
    var tab = function(k, t){ return '<button type="button" role="tab" data-p5-so="tab" data-c="' + k + '" aria-selected="' + (T === k) + '">' + t + "</button>"; };
    var caja = '<section class="s2-c s2-caja"><div class="s2-tabs" role="tablist" aria-label="Secciones de Social">' + tab("novedades", "Novedades") + tab("ranking", "Ranking") + tab("personas", "Personas") + '</div><div class="s2-pan" role="tabpanel">' +
      (T === "ranking" ? rankHTML(sigo) : T === "personas" ? personasHTML(sigo, siguen) : feedHTML()) + "</div></section>";
    return top + '<div class="s2-izq">' + hero + caja + "</div>" + der(rachas2HTML(am) + retoHTML(am));
  };
  social = function(){
    var v = ""; try { v = view; } catch (e) {} if (v !== "social") { fSocial = ""; return; }
    var caja = D.querySelector("#view .p5-sv > .p5-so"); if (!caja) return;
    cargaSocial();
    var h = s2HTML(), f = h.replace(/<svg[\s\S]*?<\/svg>/g, "");
    if (f === fSocial && caja.firstChild) return;
    var a = D.activeElement, foco = a && a.closest && a.closest("[data-p5-so-f]") && a.tagName === "INPUT" ? (a.selectionStart == null ? (a.value || "").length : a.selectionStart) : -1;
    var sx = (caja.querySelector(".s2-fila") || {}).scrollLeft || 0;
    fSocial = f; caja.innerHTML = h;
    if (foco >= 0) { var i2 = caja.querySelector("[data-p5-so-f] input"); if (i2) { i2.focus(); try { i2.setSelectionRange(foco, foco); } catch (e) {} } }
    if (sx) { var fl = caja.querySelector(".s2-fila"); if (fl) fl.scrollLeft = sx; }
  };

  /* ---------- acciones ---------- */
  var aBuscar = function(){ SO.tab = "personas"; fSocial = ""; social(); setTimeout(function(){ var i = D.querySelector("#view [data-p5-so-f] input"); if (i) { try { i.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} i.focus(); } }, 60); };
  var tBus = 0;
  D.addEventListener("input", function(e){
    var f = e.target && e.target.closest ? e.target.closest("[data-p5-so-f]") : null; if (!f) return;
    var q = (e.target.value || "").trim(); SO.q = e.target.value || ""; clearTimeout(tBus);
    if (q.length < 2) { if (SO.res || SO.msg) { SO.res = null; SO.msg = ""; social(); } return; }
    tBus = setTimeout(function(){ rpc("plx_buscar", { q: q }).then(function(r){ if ((SO.q || "").trim() !== q) return; SO.msg = r.error ? "No se pudo buscar. Intenta de nuevo." : ""; SO.res = r.error ? null : (r.data || []); social(); }, function(){}); }, 380);
  });
  window.addEventListener("click", function(e){
    var t = e.target && e.target.closest ? e.target : null; if (!t) return;
    var b = t.closest("[data-p5-so]"); if (!b) return;
    var k = b.getAttribute("data-p5-so"), c = b.getAttribute("data-c");
    if (k === "avisos") return abreAvisos();
    if (k === "tab") { SO.tab = c; if (b.getAttribute("data-l")) SO.lista = b.getAttribute("data-l"); fSocial = ""; social(); if (b.closest(".s2-nums")) setTimeout(function(){ var x = D.querySelector("#view .s2-caja"); if (x) try { x.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (z) {} }, 60); return; }
    if (k === "rk") { SO.rk = c; fSocial = ""; return social(); }
    if (k === "buscar") return aBuscar();
    if (k === "entrar") { try { pcLoginRender(); } catch (x) {} return; }
    if (k === "reintentar") { SO.ok = null; fSocial = ""; social(); return cargaSocial(true); }
    if (k === "practicar") { try { gCloseModal(); } catch (x) {} try { go("parcours"); } catch (x) {} return; }
    if (k === "seguir" && b.closest(".s2-av")) { b.textContent = "Siguiendo"; b.classList.add("off"); return; }
    if (k === "invitar") {
      var tx = "Estoy aprendiendo francés en PLEX PLAY. Búscame como «" + (gEnsure().name || "") + "» y hagamos una racha juntos.";
      if (navigator.share) { try { navigator.share({ title: "PLEX PLAY", text: tx, url: "https://plexplay.app" }).catch(function(){}); } catch (x) {} }
      else { try { navigator.clipboard.writeText(tx + " https://plexplay.app").then(function(){ avisa("Invitación copiada: pégala donde quieras"); }, function(){ avisa("Comparte plexplay.app con tu clase"); }); } catch (x) { avisa("Comparte plexplay.app con tu clase"); } }
      return;
    }
    if (k === "cobrar") { var G = gEnsure(); if (G.retoAm === semK()) return; G.retoAm = semK(); G.coins = (G.coins || 0) + RETO_MON; guarda(); avisa("¡Reto cumplido! +" + RETO_MON + " monedas"); fSocial = ""; return social(); }
    if (k === "felicita") {
      if (b.disabled || !SO.v2) return; var kk = b.getAttribute("data-k");
      b.disabled = true; b.classList.add("on", "pum"); b.textContent = "Felicitado";
      (SO.s2.felicitados = SO.s2.felicitados || []).push({ codigo: c, dato: kk });
      rpc("plx_felicitar", { codigo: c, clave: kk }).then(function(r){
        if (!r.error && (r.data === "ok" || r.data === "ya")) return;
        SO.s2.felicitados = SO.s2.felicitados.filter(function(x){ return !(x.codigo === c && x.dato === kk); });
        avisa(r.data === "tope" ? "Llegaste al tope de felicitaciones por hoy." : "No se pudo felicitar. Intenta de nuevo."); fSocial = ""; social();
      }, function(){});
      return;
    }
    if (k === "toque") {
      if (b.disabled || !SO.v2) return; b.disabled = true;
      rpc("plx_toque", { codigo: c }).then(function(r){
        if (!r.error && (r.data === "ok" || r.data === "ya")) { (SO.s2.toques = SO.s2.toques || []).push(c); avisa("Listo: le llegará tu recordatorio"); }
        else avisa("No se pudo enviar el recordatorio.");
        fSocial = ""; social();
      }, function(){ b.disabled = false; });
      return;
    }
  }, true);
  /* al arrancar y cada tanto: avisos al día aunque no se abra Social */
  setTimeout(function(){ try { cargaSocial(); } catch (e) {} }, 3500);
  setInterval(function(){ try { if (D.visibilityState === "visible" && sbOK() && Date.now() - SO.t > 4 * 60000) cargaSocial(true); } catch (e) {} }, 60000);
  D.addEventListener("visibilitychange", function(){ try { if (D.visibilityState === "visible" && sbOK() && SO.t && Date.now() - SO.t > 2 * 60000) cargaSocial(true); } catch (e) {} });
  try { window.PLX_SOCIAL.avisos = abreAvisos; window.PLX_SOCIAL.cuenta = function(){ return SO.n || 0; }; } catch (e) {}

  /* ====================================================================== 15. RIEL: cada botón a su sitio */
  var sub = function(k){ if (k) H.setAttribute("data-p5-sub", k); else H.removeAttribute("data-p5-sub"); };
  var marcaRiel = function(){
    var nav = D.querySelector("#px-rail .rl-nav"); if (!nav) return;
    var v = ""; try { v = view; } catch (e) {}
    var j = nav.querySelector('[data-view="retos"]'), p = nav.querySelector('[data-cz-rl="practica"]'), s = H.getAttribute("data-p5-sub") || "practica";
    var pon = function(b, si){ if (!b) return; if (si) { if (b.getAttribute("aria-current") !== "page") b.setAttribute("aria-current", "page"); } else if (b.hasAttribute("aria-current")) b.removeAttribute("aria-current"); };
    var a = nav.querySelector('[data-cz-rl="aprende"]');
    if (v === "retos") { pon(j, s === "juegos"); pon(a, s === "profes"); pon(p, s !== "juegos" && s !== "profes"); } else { pon(p, false); pon(a, false); }
    var c = nav.querySelector('[data-view="parcours"]'); if (v === "lecciones") pon(c, true);
  };
  var TIT = { practica: "Entrena a tu ritmo", juegos: "Juega con tu francés", profes: "Tus profesores" };
  var selector = function(){
    var g = D.querySelector("#view .gretos.jx-on"); if (!g) return;
    var jx = g.querySelector(".jx.pq-on"); if (!jx || !jx.querySelector('.jx-pan[data-p="juegos"]')) return;
    var s = H.getAttribute("data-p5-sub") || "practica", seg = g.querySelector(".p5-seg");
    if (!seg) { seg = D.createElement("div"); seg.className = "p5-seg"; seg.setAttribute("role", "group"); seg.setAttribute("aria-label", "Sección");
      seg.innerHTML = '<button type="button" data-p5-sub="practica">Práctica</button><button type="button" data-p5-sub="juegos">Juegos</button><button type="button" data-p5-sub="profes">Profesores</button>'; jx.parentNode.insertBefore(seg, jx); }
    seg.querySelectorAll("button").forEach(function(b){ var si = String(b.getAttribute("data-p5-sub") === s); if (b.getAttribute("aria-pressed") !== si) b.setAttribute("aria-pressed", si); });
    var pan = jx.querySelector('.jx-pan[data-p="juegos"]'); if (pan && s === "juegos") pan.removeAttribute("hidden");
    var h1 = g.querySelector("h1"); if (h1 && h1.textContent !== TIT[s]) h1.textContent = TIT[s] || TIT.practica;
    /* Práctica liviana: lo repetido y lo que ya está en otra parte, fuera; y la entrada a lo competitivo */
    var pq = jx.querySelector(".pq");
    if (pq && !pq.getAttribute("data-p5")) {
      pq.setAttribute("data-p5", "1");
      var hoy = pq.querySelector(".pq-hoy .jx-para b"), tHoy = hoy ? hoy.textContent.trim() : "";
      [].forEach.call(pq.querySelectorAll(".pq-lista .pq-c > button, .pq-hab .pq-c > button"), function(b){
        var t = (b.querySelector("b") || {}).textContent || ""; t = t.trim();
        if (/^Diario de aprendizaje/.test(t) || (tHoy && t === tHoy)) b.classList.add("p5-fuera");   /* el diario está en Perfil › Estadísticas */
      });
      var caja = pq.querySelector(".pq-hoy .pq-c");
      if (caja && !caja.querySelector(".p5-compite")) caja.insertAdjacentHTML("beforeend", '<button type="button" class="p5-compite" data-rl="duelos"><small>En línea</small><b>Compite con otros</b><span>1 vs 1, PLEX Quiz y duelos en vivo con estudiantes.</span><em>Jugar</em></button>');
    }
    /* Juegos: el bloque «con otros» sube y se llama por lo que es */
    if (pan && !pan.getAttribute("data-p5")) {
      pan.setAttribute("data-p5", "1");
      var li = pan.querySelector(":scope > .jx-list"), hh = li ? li.previousElementSibling : null;
      if (hh && hh.classList.contains("jx-h")) { hh.classList.add("p5-online"); var h2 = hh.querySelector("h2"); if (h2) h2.textContent = "Compite en línea"; }
    }
  };
  var luz = function(){ var m = D.querySelector("#p5-lado .p5-mis"); if (!m) return false; m.classList.remove("p5-luz"); void m.offsetWidth; m.classList.add("p5-luz"); m.scrollIntoView({ block: "nearest", behavior: "smooth" }); return true; };
  window.addEventListener("click", function(e){
    var t = e.target.closest ? e.target : null; if (!t) return;
    var s = t.closest(".p5-seg [data-p5-sub]");
    if (s) { e.preventDefault(); e.stopPropagation(); var qs = s.getAttribute("data-p5-sub"); sub(qs === "juegos" || qs === "profes" ? qs : ""); selector(); marcaRiel(); scrollTo(0, 0); return; }
    /* ojo: plx90 y plx100 atienden antes este mismo clic y repintan el riel, así que el botón puede llegar ya suelto del documento: se reconoce por su clase, no por su contenedor */
    var b = t.closest(".rl-b, .px-navbtn, .p5-lv, .cz-k, .cz-lv"); if (!b) return;
    var k = b.getAttribute("data-cz-rl");
    if (b.classList.contains("rl-b") && b.getAttribute("data-view") === "retos") { sub("juegos"); setTimeout(function(){ selector(); marcaRiel(); scrollTo(0, 0); }, 0); return; }
    sub("");
    if (k === "aprende") { e.preventDefault(); e.stopImmediatePropagation(); sub("profes"); try { go("retos"); } catch (x) {} setTimeout(function(){ selector(); marcaRiel(); scrollTo(0, 0); }, 0); return; }
    if (k === "practica") { e.preventDefault(); e.stopImmediatePropagation(); try { go("retos"); } catch (x) {} setTimeout(function(){ selector(); marcaRiel(); scrollTo(0, 0); }, 0); return; }
    if (k === "misiones" && ancho()) { var v = ""; try { v = view; } catch (x) {} if (VISTAS[v] && luz()) { e.preventDefault(); e.stopImmediatePropagation(); } }
  }, true);

  /* la corrección trae a veces el apóstrofo escapado dos veces («m&#39;appelle»): se muestra bien, sin tocar los datos */
  var apos = function(){
    var fb = D.querySelector("#player .pf .fb"); if (!fb || fb.textContent.indexOf("&#39;") < 0) return;
    var w = D.createTreeWalker(fb, NodeFilter.SHOW_TEXT), n; while ((n = w.nextNode())) if (n.nodeValue.indexOf("&#39;") >= 0) n.nodeValue = n.nodeValue.replace(/&#39;/g, "’");
  };
  var tras = function(){ try { apos(); } catch (e) {} try { perfil(); } catch (e) {} try { editor(); } catch (e) {} try { social(); } catch (e) {} try { instala(); } catch (e) {} try { ruta(); } catch (e) {} try { pestanas(); } catch (e) {} try { tienda(); } catch (e) {} try { sigue(); } catch (e) {} try { pintaLado(); } catch (e) {} try { selector(); } catch (e) {} try { marcaRiel(); } catch (e) {} try { pista(); } catch (e) {} try { saltos(); } catch (e) {} try { hojaVe(); } catch (e) {} try { insignias(); } catch (e) {} };
  var rO = render; render = function(){ var r = rO.apply(this, arguments); tras(); return r; };
  /* renderStats repinta las fichas de arriba sin sus clases (las pone plx20 solo al pintar la vista): sin esto, tras
     ganar monedas o XP fuera de un cambio de vista volvían los iconos de trazo viejos */
  var fichas = function(){ var p = D.querySelectorAll("#topbar #stats .gpill:not(.av-lv)"); if (p[0]) p[0].classList.add("px-chip", "px-fire"); if (p[1]) p[1].classList.add("px-chip", "px-crown"); };
  try { var rS = renderStats; renderStats = function(){ var r = rS.apply(this, arguments); try { fichas(); } catch (e) {} return r; }; } catch (e) {}
  window.addEventListener("resize", tras);
  var pend = false, obs = new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; tras(); }); });
  var arranca = function(){ var v = D.getElementById("view"); if (v) obs.observe(v, { childList: true, subtree: true }); var r = D.getElementById("px-rail"); if (r) obs.observe(r, { childList: true, subtree: true }); var pl = D.getElementById("player"); if (pl) obs.observe(pl, { childList: true, subtree: true }); obs.observe(D.body, { childList: true }); tras(); };
  setTimeout(arranca, 400); setTimeout(arranca, 1500);
  window.PLX_P5 = { lado: pintaLado, sub: sub };
})();
