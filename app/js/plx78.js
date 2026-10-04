/* PLEX PLAY 3.5.0 — Rediseño: sistema visual único, Inicio con jerarquía clara y movimiento cuidado
   Referencias (sin copiar): Elevate (pantallas limpias, mucho aire, color por habilidad, transiciones suaves y
   tipografía grande), Duolingo (botones táctiles con «labio», microinteracciones al tocar, mascota que acompaña).
   Identidad propia de PLEX PLAY: azul noche y royal, amarillo sol, Manzana, Poppins para títulos e Inter para leer.
   1. Tokens: color (claro y oscuro), tipografía, radios, sombras, curvas y duraciones. Se mapean sobre las variables
      que ya usa toda la app, así cada módulo hereda el estilo sin tocarlo.
   2. Componentes: tarjetas sin bordes gruesos, botones con labio y hundimiento al tocar, barra superior y barra de
      pestañas flotantes con la pestaña activa en una píldora, foco visible para teclado, objetivos de 44 px.
   3. Inicio: saludo tipográfico (sin tarjeta que repita la racha de la barra), «Continuar» como tarjeta principal,
      «Tu ruta», la racha compacta, «Hoy», «Primeros pasos» solo si sirve, el mapa y «Para ti». Un solo módulo decide
      el orden (antes lo decidían tres a la vez).
   4. Movimiento: entrada escalonada de las tarjetas al cambiar de pestaña, hundimiento al tocar y respeto total por
      «reducir movimiento» del sistema. */
(function(){
  "use strict";

  /* ---------------- orden de Inicio ---------------- */
  var ORDEN = [".greet", ".m-course", ".rtx", ".rz-card", ".ix-hoy", ".pp-inv", ".av-mapa", ".ix-para"];
  var ordena = function(main){
    if (!main) return;
    var G = {}; try { G = gEnsure(); } catch (e) {}
    /* «Primeros pasos» solo para quien empieza (sin diagnóstico o con nivel Pre-A1) */
    var pp = main.querySelector(":scope > .pp-inv");
    if (pp) pp.classList.toggle("v4-off", !!(G.diag && G.diag.global >= 1));
    var els = ORDEN.map(function(s){ return main.querySelector(":scope > " + s); }).filter(Boolean);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (i === 0) { if (main.firstElementChild !== el) main.insertBefore(el, main.firstElementChild); }
      else if (els[i - 1].nextElementSibling !== el) els[i - 1].insertAdjacentElement("afterend", el);
    }
    saludo(main);
  };
  var saludo = function(main){
    var g = main.querySelector(":scope > .greet"); if (!g || g.querySelector(".v4-fecha")) return;
    var f = ""; try { f = new Date().toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" }); } catch (e) {}
    g.insertAdjacentHTML("afterbegin", '<p class="v4-fecha">' + f + "</p>");
    var meta = 100, hoyXP = 0; try { meta = gEnsure().goalXP || 100; hoyXP = (today() || {}).xp || 0; } catch (e) {}
    var falta = Math.max(0, meta - hoyXP);
    g.insertAdjacentHTML("beforeend", '<p class="v4-sub">' + (falta ? "Te faltan <b>" + falta + " XP</b> para tu meta de hoy." : "¡Meta de hoy cumplida! Sigue así.") + "</p>");
  };
  window.PLX_V4 = { ordena: ordena };
  var pend = false;
  var alCambiar = function(){
    if (pend) return; pend = true;
    requestAnimationFrame(function(){
      pend = false;
      try { if (typeof view !== "undefined" && view === "parcours") ordena(document.querySelector("#view .gmain")); } catch (e) {}
      entrada();
    });
  };

  /* ---------------- entrada escalonada al cambiar de pestaña ---------------- */
  var ultima = null;
  var entrada = function(){
    var v = document.getElementById("view"), act = typeof view !== "undefined" ? view : null; if (!v || act === ultima) return;
    ultima = act;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.classList.remove("v4-in"); void v.offsetWidth; v.classList.add("v4-in");
    clearTimeout(entrada.t); entrada.t = setTimeout(function(){ v.classList.remove("v4-in"); }, 900);
  };
  var vista = document.getElementById("view");
  if (vista && window.MutationObserver) new MutationObserver(alCambiar).observe(vista, { childList: true, subtree: true });
  if (typeof render === "function") { var rO = render; render = function(){ var r = rO.apply(this, arguments); alCambiar(); return r; }; }

  /* ---------------- estilos ---------------- */
  var css = [
    /* tokens */
    ":root{--v4-bg:#F4F6FB;--v4-surface:#FFFFFF;--v4-surface2:#EEF2FA;--v4-ink:#0E1A3A;--v4-ink2:#3C4A6B;--v4-mute:#66738F;--v4-line:#E2E8F3;",
    "--v4-brand:#1E4FD6;--v4-brand2:#2F6BFF;--v4-brand-ink:#163B9E;--v4-night:#0B2D74;--v4-sol:#FFD200;--v4-sol-ink:#3D2E00;--v4-ok:#16A34A;--v4-bad:#E5484D;",
    "--c-lec:#0EA5A4;--c-esc:#3B82F6;--c-wri:#8B5CF6;--c-hab:#F43F5E;--c-gram:#F59E0B;--c-voc:#22C55E;--c-jue:#FF7A45;",
    "--v4-r-xl:26px;--v4-r-lg:20px;--v4-r-md:14px;--v4-r-sm:10px;",
    "--v4-sh1:0 1px 2px rgba(14,26,58,.05),0 8px 24px -14px rgba(14,26,58,.22);--v4-sh2:0 2px 6px rgba(14,26,58,.06),0 22px 44px -22px rgba(14,26,58,.42);",
    "--v4-e:cubic-bezier(.22,1,.36,1);--v4-spring:cubic-bezier(.34,1.56,.64,1);--v4-t1:.14s;--v4-t2:.26s;--v4-t3:.45s;",
    "--paper:var(--v4-bg);--raise:var(--v4-surface);--surf2:var(--v4-surface2);--ink:var(--v4-ink);--ink-2:var(--v4-ink2);--stone:var(--v4-mute);--line:var(--v4-line);--card-edge:var(--v4-line);",
    "--accent:var(--v4-brand);--brand-ink:var(--v4-brand-ink);--wash:#E8EEFF;--serif:Poppins,'Plus Jakarta Sans',system-ui,sans-serif;--sans:Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}",
    "@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--v4-bg:#070F24;--v4-surface:#0F1A39;--v4-surface2:#152349;--v4-ink:#EEF2FF;--v4-ink2:#BAC6E6;--v4-mute:#8D9ABF;--v4-line:#203058;--v4-brand:#6E97FF;--v4-brand2:#8AACFF;--v4-brand-ink:#B8CBFF;--wash:#1A2A58;--v4-sh1:0 1px 2px rgba(0,0,0,.3),0 10px 26px -16px rgba(0,0,0,.6);--v4-sh2:0 2px 6px rgba(0,0,0,.35),0 24px 48px -24px rgba(0,0,0,.75)}}",
    ":root[data-theme=dark]{--v4-bg:#070F24;--v4-surface:#0F1A39;--v4-surface2:#152349;--v4-ink:#EEF2FF;--v4-ink2:#BAC6E6;--v4-mute:#8D9ABF;--v4-line:#203058;--v4-brand:#6E97FF;--v4-brand2:#8AACFF;--v4-brand-ink:#B8CBFF;--wash:#1A2A58;--v4-sh1:0 1px 2px rgba(0,0,0,.3),0 10px 26px -16px rgba(0,0,0,.6);--v4-sh2:0 2px 6px rgba(0,0,0,.35),0 24px 48px -24px rgba(0,0,0,.75)}",
    "html,html body,html.pc-cloud,html.pc-cloud body{background:var(--v4-bg)!important}body{color:var(--v4-ink);font-family:var(--sans);-webkit-font-smoothing:antialiased}",
    /* superficies secundarias que traían el crema viejo fijo */
    ".amt,.ms-i,.ms-chest,.amt-row > *,.am-today .amt,.plx-miss .ms-i{background:var(--v4-surface2)!important;border-color:transparent!important}",
    /* componentes */
    ".gcard{border-radius:var(--v4-r-lg)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;transition:transform var(--v4-t1) var(--v4-e),box-shadow var(--v4-t2) var(--v4-e)}",
    "button.gcard:hover{box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh2)!important}",
    ".gbtn{font-family:Poppins,system-ui,sans-serif!important;font-weight:700!important;border-radius:var(--v4-r-md)!important;min-height:44px;background:var(--v4-brand)!important;color:#fff!important;box-shadow:0 3px 0 var(--v4-brand-ink)!important;border:0!important;transition:transform var(--v4-t1) var(--v4-e),box-shadow var(--v4-t1) var(--v4-e),filter var(--v4-t1)}",
    ".gbtn:hover{filter:brightness(1.06)}.gbtn:active{transform:translateY(2px);box-shadow:0 1px 0 var(--v4-brand-ink)!important}",
    ".gbtn.ghost{background:var(--v4-surface2)!important;color:var(--v4-brand)!important;box-shadow:0 2px 0 var(--v4-line)!important}",
    ".gbtn[disabled]{opacity:.45;box-shadow:none!important;transform:none}",
    "button,[role=button],.rcard,.amf,.jg-mini{-webkit-tap-highlight-color:transparent}",
    ":focus-visible{outline:3px solid var(--v4-brand2)!important;outline-offset:2px;border-radius:12px}",
    /* barra superior: más fina y limpia */
    "header.top{background:transparent!important}",
    "header.top .topbar-in{background:linear-gradient(135deg,#0B2D74,#1A3F9C)!important;border-radius:20px!important;box-shadow:0 10px 30px -14px rgba(11,45,116,.65)!important;min-height:56px}",
    "header.top .stats > *{transition:transform var(--v4-t2) var(--v4-spring)}",
    /* pantallas angostas (iPhone SE/mini, 375 px): la barra no debe salirse */
    "@media (max-width:400px){header.top .topbar-in{gap:6px!important;padding-right:6px!important}header.top .plx-name{font-size:.95rem!important}header.top .gpill{padding-left:7px!important;padding-right:7px!important;gap:3px!important}header.top .topbar-end,header.top .stats{gap:5px!important}}",
    "@media (max-width:350px){header.top .plx-name{display:none!important}}",
    /* barra de pestañas flotante con píldora */
    ".tabbar{background:color-mix(in srgb,var(--v4-surface) 88%,transparent)!important;-webkit-backdrop-filter:blur(16px) saturate(1.4);backdrop-filter:blur(16px) saturate(1.4);border-radius:24px!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh2)!important}",
    ".tabbar .px-navbtn{border-radius:18px!important;transition:background var(--v4-t2) var(--v4-e),color var(--v4-t2)}",
    ".tabbar .px-navbtn svg{transition:transform var(--v4-t3) var(--v4-spring)}",
    ".tabbar .px-navbtn[aria-current=page] svg{transform:translateY(-1px) scale(1.08)}",
    ".tabbar .px-navbtn:active svg{transform:scale(.88)}",
    /* encabezados de sección */
    ".ix-h h2{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;letter-spacing:-.01em}.ix-h small{color:var(--v4-mute)!important}",
    /* Inicio: saludo tipográfico */
    ".gmain > .greet{background:transparent!important;box-shadow:none!important;border:0!important;padding:6px 4px 2px!important;margin:0!important;display:block!important}",
    ".gmain > .greet .gstats{display:none!important}",
    ".gmain > .greet h1{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;font-size:clamp(1.6rem,6vw,2.1rem)!important;letter-spacing:-.02em;margin:2px 0 4px!important;line-height:1.1}",
    ".v4-fecha{margin:0;color:var(--v4-mute);font-weight:700;font-size:.8rem;text-transform:uppercase;letter-spacing:.08em}",
    ".v4-sub{margin:0 0 4px;color:var(--v4-ink2);font-size:.95rem}.v4-sub b{color:var(--v4-brand)}",
    /* Inicio: «Continuar» como tarjeta principal */
    ".gmain > .m-course{display:grid!important;grid-template-columns:1fr!important;overflow:hidden;padding:0!important;border-radius:var(--v4-r-xl)!important}",
    ".gmain > .m-course .mc-img{height:132px!important;width:100%!important;min-height:0!important;position:relative}",
    ".gmain > .m-course .mc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,45,116,0) 40%,rgba(11,45,116,.45))}",
    ".gmain > .m-course .mc-t{padding:14px 16px 16px!important;display:grid;gap:8px}",
    ".gmain > .m-course .m-btn{width:100%!important;justify-content:center;min-height:48px;border-radius:var(--v4-r-md)!important;font-family:Poppins,system-ui,sans-serif!important;font-weight:700!important;box-shadow:0 3px 0 #06184A!important;transition:transform var(--v4-t1) var(--v4-e)}",
    ".gmain > .m-course .m-btn:active{transform:translateY(2px)}",
    ".gmain > .m-course .gbar{height:10px!important;border-radius:99px!important}",
    /* Inicio: racha compacta */
    ".gmain > .rz-card{padding:14px 16px!important;min-height:0!important;border-radius:var(--v4-r-lg)!important}",
    ".gmain > .rz-card .rz-bub{font-size:.9rem!important;padding:8px 12px!important;max-width:64%}",
    ".gmain > .rz-card .rz-mz{width:84px!important;height:auto!important}",
    ".gmain > .rz-card .rz-cifra b{font-size:1.8rem!important}",
    ".v4-off{display:none!important}",
    /* menús del Arcade en modo oscuro: plx63 ponía el título azul marino (pensado para fondo claro) */
    ":root[data-theme=dark] .plxg:not(.plxg-juego) .plxg-h{color:#FFD200!important}",
    ":root[data-theme=dark] .plxg:not(.plxg-juego) .hb-top .plxg-ib{background:rgba(255,255,255,.12)!important;color:#fff!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)!important}",
    "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .plxg:not(.plxg-juego) .hb-top .plxg-ib{background:rgba(255,255,255,.12)!important;color:#fff!important}}",
    "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .plxg:not(.plxg-juego) .plxg-h{color:#FFD200!important}}",
    /* aviso de versión nueva (plx31): con left:50% se encogía a media pantalla y partía el texto palabra por palabra */
    ".plx-upd{width:max-content;max-width:calc(100vw - 32px);box-sizing:border-box;border-radius:18px!important;box-shadow:var(--v4-sh2)!important}.plx-upd span{flex:1;min-width:0}",
    ".gmain > *{margin-top:14px}",
    /* entrada escalonada */
    "@keyframes v4up{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:none}}",
    "#view.v4-in .gmain > *,#view.v4-in .gside > *,#view.v4-in .jx-anim > *,#view.v4-in .gview > section,#view.v4-in .gview > .gcard{animation:v4up var(--v4-t3) var(--v4-e) both}",
    "#view.v4-in .gmain > :nth-child(2),#view.v4-in .jx-anim > :nth-child(2){animation-delay:.04s}#view.v4-in .gmain > :nth-child(3),#view.v4-in .jx-anim > :nth-child(3){animation-delay:.08s}",
    "#view.v4-in .gmain > :nth-child(4),#view.v4-in .jx-anim > :nth-child(4){animation-delay:.12s}#view.v4-in .gmain > :nth-child(5),#view.v4-in .jx-anim > :nth-child(5){animation-delay:.16s}",
    "#view.v4-in .gmain > :nth-child(n+6),#view.v4-in .jx-anim > :nth-child(n+6){animation-delay:.2s}",
    /* hundimiento al tocar */
    ".rcard,.amf,.jg-mini,.ms-i,.amt-row > *,.rtx-l button,.crs{transition:transform var(--v4-t1) var(--v4-e)}",
    ".rcard:active,.amf:active,.jg-mini:active,.ms-i:active,.rtx-l button:active,.crs:active,button.gcard:active{transform:scale(.97)}",
    "@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx78"; st.textContent = css; document.head.appendChild(st);
  alCambiar();
})();
