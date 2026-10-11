/* PLEX PLAY 4.0.0 — Sistema de interfaz único (rediseño total, solo interfaz)
   Un solo lugar para la paleta, el espaciado, la tipografía y los radios (tokens --p-*, --s-*, --t-*, --r-*), y para
   la piel de toda la app. Va dentro de una capa CSS (@layer p5) con todas las declaraciones en !important: en la
   cascada, lo importante de una capa gana a lo importante sin capa, así que estas reglas mandan sobre los parches
   de plx20, plx43, plx63, plx78, plx85, plx87, plx90, plx94, plx98, plx99 y plx100 sin apilar más especificidad.
   Las familias de variables viejas (--paper, --v4-*, --m-*, --px-*, --pp-*, --gl-*, --cz-*, --ev-*, --tx-*, --ej-*)
   se redefinen aquí a partir de la paleta nueva: ese «puente» es lo que impide que un tema se cuele en el otro.

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
    "--p-bg:#F2F5FF", "--p-halo-1:rgba(47,107,255,.14)", "--p-halo-2:rgba(255,210,0,.14)", "--p-halo-3:rgba(210,195,246,.34)",
    "--p-sup:#FFFFFF", "--p-sup-2:#F1F5FF", "--p-sup-3:#E3EAFC", "--p-linea:#D3DDF5", "--p-relieve:#BFCBEC", "--p-pista:#DDE5F8",
    "--p-tinta:#0B1F5C", "--p-tinta-2:#2C3E78", "--p-apagado:#55638F",
    "--p-azul:#2F6BFF", "--p-azul-r:#1A45B8", "--p-azul-tx:#1B49C8", "--p-azul-p:#DCE7FF",
    "--p-oro:#FFD200", "--p-oro-r:#D4A300", "--p-oro-tx:#6E5300", "--p-oro-p:#FFF3B8", "--p-oro-ic:#A87900",
    "--p-rojo:#E5484D", "--p-rojo-r:#A82A30", "--p-rojo-tx:#B4232A", "--p-rojo-p:#FFE1E2",
    "--p-verde:#16A34A", "--p-verde-r:#0C6A2E", "--p-verde-tx:#0E6B31", "--p-verde-p:#D8F5E2",
    "--p-lila-p:#E8E1FB", "--p-lila-tx:#4A3990",
    "--p-vidrio:linear-gradient(160deg,rgba(255,255,255,.86),rgba(255,255,255,.62))", "--p-vidrio-borde:rgba(255,255,255,.95)",
    "--p-vidrio-linea:rgba(11,31,92,.10)", "--p-vidrio-sombra:0 22px 50px -26px rgba(11,31,92,.38)", "--p-vidrio-solido:#F7F9FF",
    "--p-sombra:0 14px 30px -22px rgba(11,31,92,.35)", "--p-velo:rgba(11,31,92,.36)"
  ];
  var OSCURO = [
    "--p-bg:#081233", "--p-halo-1:rgba(47,107,255,.30)", "--p-halo-2:rgba(255,210,0,.07)", "--p-halo-3:rgba(124,92,230,.24)",
    "--p-sup:#122150", "--p-sup-2:#182B63", "--p-sup-3:#213775", "--p-linea:#2A4082", "--p-relieve:#050C26", "--p-pista:#263A7C",
    "--p-tinta:#EEF3FF", "--p-tinta-2:#CBD7FA", "--p-apagado:#A6B6E6",
    "--p-azul:#4C82FF", "--p-azul-r:#16379A", "--p-azul-tx:#A9C5FF", "--p-azul-p:#1C3379",
    "--p-oro:#FFD200", "--p-oro-r:#B38600", "--p-oro-tx:#FFDD55", "--p-oro-p:#3A3312", "--p-oro-ic:#FFD200",
    "--p-rojo:#FF6B70", "--p-rojo-r:#8F2228", "--p-rojo-tx:#FFB4B7", "--p-rojo-p:#43182A",
    "--p-verde:#35C97A", "--p-verde-r:#0B5A28", "--p-verde-tx:#8CF0B6", "--p-verde-p:#113C2C",
    "--p-lila-p:#2A2466", "--p-lila-tx:#D2C3F6",
    "--p-vidrio:linear-gradient(160deg,rgba(44,66,146,.66),rgba(15,28,80,.6))", "--p-vidrio-borde:rgba(255,255,255,.16)",
    "--p-vidrio-linea:rgba(255,255,255,.10)", "--p-vidrio-sombra:0 26px 60px -26px rgba(0,0,0,.75)", "--p-vidrio-solido:#101D4A",
    "--p-sombra:0 16px 32px -22px rgba(0,0,0,.7)", "--p-velo:rgba(3,8,28,.62)"
  ];
  var FIJOS = [
    /* marca y caras de botón (las mismas en los dos temas: texto blanco AA sobre ellas) */
    "--p-marino:#0B1F5C", "--p-azul-btn:#2760EE", "--p-verde-btn:#12853C", "--p-rojo-btn:#D13438", "--p-sobre-oro:#0B1F5C",
    /* espaciado */
    "--s-1:4px", "--s-2:8px", "--s-3:12px", "--s-4:16px", "--s-5:20px", "--s-6:24px", "--s-7:32px", "--s-8:40px", "--s-9:56px",
    /* tipografía */
    "--f-tit:Poppins,'Plus Jakarta Sans',Barlow,system-ui,-apple-system,'Segoe UI',sans-serif", "--f-tx:Barlow,Inter,system-ui,-apple-system,'Segoe UI',sans-serif",
    "--t-xs:.78rem", "--t-sm:.9rem", "--t-md:1rem", "--t-lg:1.14rem", "--t-xl:1.36rem", "--t-2xl:1.7rem", "--t-3xl:2.15rem",
    /* radios */
    "--r-sm:12px", "--r-md:16px", "--r-lg:22px", "--r-xl:28px", "--r-pill:999px",
    /* medidas del armazón */
    "--p-riel:252px", "--p-lado:356px", "--p-barra:72px", "--p-cab:60px",
    "--sat:env(safe-area-inset-top,0px)", "--sab:env(safe-area-inset-bottom,0px)", "--sal:env(safe-area-inset-left,0px)", "--sar:env(safe-area-inset-right,0px)"
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
    "html.mk body nav#tabbar.tabbar button.px-navbtn::before,html.mk body nav#tabbar.tabbar button.px-navbtn::after{display:none}",
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
    "html.p5-lado-on #p5-lado{display:flex;flex-direction:column;gap:var(--s-4);position:fixed;z-index:40;right:0;top:0;bottom:0;width:calc(var(--p-lado) + var(--s-6) * 2);padding:var(--s-6);overflow-y:auto;scrollbar-width:none;font-family:var(--f-tx);color:var(--p-tinta)}",
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
    "html.mk #player .ask{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);margin:0 0 var(--s-4);min-height:44px;font:700 var(--t-md)/1.3 var(--f-tx);color:var(--p-tinta-2)}",
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
    "html.mk .gmodal .qs{margin:0 var(--s-4);padding:0;border-radius:var(--r-lg);background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);border:0;overflow:hidden}",
    "html.mk .gmodal .qs-row{display:flex;align-items:center;gap:var(--s-3);min-height:60px;padding:var(--s-2) var(--s-4);border:0;border-bottom:1.5px solid var(--p-linea);background:none;color:var(--p-tinta)}",
    "html.mk .gmodal .qs-row:last-child{border-bottom:0}",
    "html.mk .gmodal .qs-row.col{flex-direction:row;flex-wrap:wrap;align-items:center}",
    "html.mk .gmodal .qs-row > div:not(.qs-seg){flex:1;min-width:0}",
    "html.mk .gmodal .qs-row b{font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta);display:block}",
    "html.mk .gmodal .qs-row small{font:500 var(--t-xs)/1.3 var(--f-tx);color:var(--p-apagado);display:block}",
    "html.mk .gmodal .qs-sw{all:unset;box-sizing:border-box;cursor:pointer;flex:none;position:relative;width:54px;height:32px;border-radius:var(--r-pill);background:var(--p-sup-3);box-shadow:inset 0 0 0 1.5px var(--p-linea);transition:background .15s}",
    "html.mk .gmodal .qs-sw::after{content:'';position:absolute;left:4px;top:4px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.25);transition:transform .15s}",
    "html.mk .gmodal .qs-sw > *{display:none}",
    "html.mk .gmodal .qs-sw[aria-checked=true],html.mk .gmodal .qs-sw.on{background:var(--p-verde-btn);box-shadow:none}",
    "html.mk .gmodal .qs-sw[aria-checked=true]::after,html.mk .gmodal .qs-sw.on::after{transform:translateX(22px)}",
    "html.mk .gmodal .qs-seg{flex:1 1 100%;width:100%;min-width:0;grid-column:auto;display:flex;gap:var(--s-1);padding:var(--s-1);margin:0 0 var(--s-2);border-radius:var(--r-md);background:var(--p-sup-3);box-shadow:none;border:0}",
    "html.mk .gmodal .qs-seg > button{all:unset;box-sizing:border-box;cursor:pointer;flex:1 1 0;min-height:44px;display:flex;align-items:center;justify-content:center;gap:6px;border-radius:var(--r-sm);font:600 var(--t-sm)/1.1 var(--f-tx);color:var(--p-tinta-2);text-align:center;flex-direction:row}",
    "html.mk .gmodal .qs-seg > button[aria-pressed=true],html.mk .gmodal .qs-seg > button.on,html.mk .gmodal .qs-seg > button[aria-checked=true]{background:var(--p-sup);color:var(--p-azul-tx);font-weight:700;box-shadow:0 2px 0 var(--p-relieve)}",
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

  /* ====================================================================== montaje del CSS */
  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx101";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}\n@keyframes p5luz{0%{box-shadow:0 0 0 0 var(--p-oro)}100%{box-shadow:0 0 0 22px transparent}}\n@media (prefers-reduced-motion:reduce){#px-rail .rl-b,.p5-c,.p5-btn,#cz .cz-nodo{transition:none!important}}";
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
  var ICN = function(n, t){ return '<img src="img/ic/' + n + '.webp" alt="" width="' + (t || 26) + '" height="' + (t || 26) + '">'; };
  var ENGR = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>';
  var VISTAS = { parcours: 1, retos: 1, ranking: 1, tienda: 1, perfil: 1, lecciones: 1 };
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
    return '<div class="p5-stats"><span title="Racha" aria-label="Racha: ' + rk + ' días">' + ICN("llama") + rk + '</span><span class="o" title="Monedas" aria-label="Monedas: ' + mon + '">' + ICN("estrella") + mon.toLocaleString("es-CO") + '</span><span class="a" title="XP" aria-label="XP: ' + xp + '">' + ICN("corona") + xp.toLocaleString("es-CO") + '</span><button type="button" class="p5-aj" data-qs="open" aria-label="Ajustes">' + ENGR + "</button></div>" +
      '<button type="button" class="p5-c p5-lv" data-view="perfil" aria-label="Nivel ' + lv + ', ver perfil"><span class="p5-gato">' + gato + "</span><span><b>Nivel " + lv + '</b><span class="p5-row"><u><s style="width:' + p + '%"></s></u><small>' + (lv >= 60 ? "Nivel máximo" : "Faltan " + Math.max(0, b - xp) + " XP") + "</small></span></span></button>" +
      (dia ? '<div class="p5-c"><h3>Juego del día</h3><p class="p5-fx"><span><b>' + esc(dia.nombre) + "</b>" + (dia.verbo || dia.familia ? ": " + esc(dia.verbo || dia.familia) : "") + '</span><img src="img/mz/corre.webp" alt="" width="72" height="62"></p><button type="button" class="p5-btn" data-cz-juego="' + esc(dia.id) + '">Jugar ahora</button></div>' : "") +
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
  var selector = function(){
    var g = D.querySelector("#view .gretos.jx-on"); if (!g) return;
    var jx = g.querySelector(".jx.pq-on"); if (!jx || !jx.querySelector('.jx-pan[data-p="juegos"]')) return;
    var s = H.getAttribute("data-p5-sub") || "practica", seg = g.querySelector(".p5-seg");
    if (!seg) { seg = D.createElement("div"); seg.className = "p5-seg"; seg.setAttribute("role", "group"); seg.setAttribute("aria-label", "Sección");
      seg.innerHTML = '<button type="button" data-p5-sub="practica">Práctica</button><button type="button" data-p5-sub="juegos">Juegos</button>'; jx.parentNode.insertBefore(seg, jx); }
    seg.querySelectorAll("button").forEach(function(b){ var si = String(b.getAttribute("data-p5-sub") === s); if (b.getAttribute("aria-pressed") !== si) b.setAttribute("aria-pressed", si); });
    var pan = jx.querySelector('.jx-pan[data-p="juegos"]'); if (pan) { if (s === "juegos") pan.removeAttribute("hidden"); }
    var h1 = g.querySelector("h1"); if (h1) { var t = s === "juegos" ? "Juega con tu francés" : "Entrena a tu ritmo"; if (h1.textContent !== t) h1.textContent = t; }
  };
  var luz = function(){ var m = D.querySelector("#p5-lado .p5-mis"); if (!m) return false; m.classList.remove("p5-luz"); void m.offsetWidth; m.classList.add("p5-luz"); m.scrollIntoView({ block: "nearest", behavior: "smooth" }); return true; };
  window.addEventListener("click", function(e){
    var t = e.target.closest ? e.target : null; if (!t) return;
    var s = t.closest(".p5-seg [data-p5-sub]");
    if (s) { e.preventDefault(); e.stopPropagation(); sub(s.getAttribute("data-p5-sub") === "juegos" ? "juegos" : ""); selector(); marcaRiel(); scrollTo(0, 0); return; }
    /* ojo: plx90 y plx100 atienden antes este mismo clic y repintan el riel, así que el botón puede llegar ya suelto del documento: se reconoce por su clase, no por su contenedor */
    var b = t.closest(".rl-b, .px-navbtn, .p5-lv, .cz-k, .cz-lv"); if (!b) return;
    var k = b.getAttribute("data-cz-rl");
    if (b.classList.contains("rl-b") && b.getAttribute("data-view") === "retos") { sub("juegos"); setTimeout(function(){ selector(); marcaRiel(); scrollTo(0, 0); }, 0); return; }
    sub("");
    if (k === "aprende") { e.preventDefault(); e.stopImmediatePropagation(); sub("profes"); try { go("retos"); } catch (x) {} setTimeout(function(){ selector(); marcaRiel(); var p = D.querySelector("#view .pq-profs"); if (p) p.scrollIntoView({ block: "start", behavior: "smooth" }); }, 350); return; }
    if (k === "practica") { e.preventDefault(); e.stopImmediatePropagation(); try { go("retos"); } catch (x) {} setTimeout(function(){ selector(); marcaRiel(); scrollTo(0, 0); }, 0); return; }
    if (k === "misiones" && ancho()) { var v = ""; try { v = view; } catch (x) {} if (VISTAS[v] && luz()) { e.preventDefault(); e.stopImmediatePropagation(); } }
  }, true);

  /* la corrección trae a veces el apóstrofo escapado dos veces («m&#39;appelle»): se muestra bien, sin tocar los datos */
  var apos = function(){
    var fb = D.querySelector("#player .pf .fb"); if (!fb || fb.textContent.indexOf("&#39;") < 0) return;
    var w = D.createTreeWalker(fb, NodeFilter.SHOW_TEXT), n; while ((n = w.nextNode())) if (n.nodeValue.indexOf("&#39;") >= 0) n.nodeValue = n.nodeValue.replace(/&#39;/g, "’");
  };
  var tras = function(){ try { apos(); } catch (e) {} try { pintaLado(); } catch (e) {} try { selector(); } catch (e) {} try { marcaRiel(); } catch (e) {} };
  var rO = render; render = function(){ var r = rO.apply(this, arguments); tras(); return r; };
  window.addEventListener("resize", tras);
  var pend = false, obs = new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; tras(); }); });
  var arranca = function(){ var v = D.getElementById("view"); if (v) obs.observe(v, { childList: true, subtree: true }); var r = D.getElementById("px-rail"); if (r) obs.observe(r, { childList: true, subtree: true }); var pl = D.getElementById("player"); if (pl) obs.observe(pl, { childList: true, subtree: true }); tras(); };
  setTimeout(arranca, 400); setTimeout(arranca, 1500);
  window.PLX_P5 = { lado: pintaLado, sub: sub };
})();
