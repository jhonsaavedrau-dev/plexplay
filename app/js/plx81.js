/* PLEX PLAY 3.5.1 — Pulido del rediseño (pedido de Jhon tras verlo)
   - «Tus profesores» sale de Inicio (ocupaba media pantalla) y vive en Jugar › Aprender, junto a las lecciones.
   - Ajustes compacto: encabezado en una línea, filas bajas sin la descripción larga, redes en una fila y «Listo»
     siempre visible abajo (antes había que bajar para cerrarlo).
   - Tarjetas de racha con fondo trabajado: luz desde la esquina, sombra suave, textura diagonal y la Torre Eiffel en
     línea como marca de agua, sobre el color de cada estado (lila, verde, naranja, hielo…).
   - Diagnóstico con identidad: cada parte tiene su color (autoevaluación rosa, gramática ámbar, lectura turquesa,
     escucha azul, escritura violeta, habla coral) que tiñe la barra de progreso, los encabezados, los botones y las
     tarjetas; portada con degradado y chips; plan como línea de tiempo; respuestas como tarjetas con su letra;
     resultado con un medidor A1·A2·B1·B2·C1 por habilidad. */
(function(){
  "use strict";
  /* «Para ti» de Inicio se esconde si se queda sin nada visible (al irse los profesores) */
  var revisaPara = function(){
    try {
      var p = document.querySelector("#view .gmain > .ix-para"); if (!p) return;
      var vis = [].slice.call(p.querySelectorAll(".ix-body > *")).filter(function(c){ return getComputedStyle(c).display !== "none" && !c.classList.contains("ix-off"); });
      p.classList.toggle("v4-off", !vis.length);
    } catch (e) {}
  };
  /* el pie de Ajustes traía la versión escrita a mano («3.1.0»): se pone la real */
  new MutationObserver(function(){
    var p = document.querySelector(".m-aj .aj-pie"); if (!p || p.dataset.v || typeof APP_VERSION === "undefined") return;
    p.dataset.v = "1"; p.innerHTML = p.innerHTML.replace(/PLEX PLAY\s+[\d.]+/, "PLEX PLAY " + APP_VERSION);
  }).observe(document.body, { childList: true });
  var vista = document.getElementById("view"), pend = false;
  if (vista) new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; revisaPara(); }); }).observe(vista, { childList: true, subtree: true });

  /* marca de agua: Torre Eiffel en línea y destellos */
  var EIFFEL = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 200" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M60 6v18M54 24h12M52 24l-6 52h28l-6-52M46 76h28M44 76l-12 52h56l-12-52M30 128h60M30 128L12 196M90 128l18 68M40 196c4-26 36-26 40 0M50 104h20M53 52h14"/><path d="M100 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM16 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff" stroke="none"/></svg>');

  var SK = { intro: "#1E4FD6", auto: "#EC4899", gram: "#F59E0B", R: "#0EA5A4", L: "#3B82F6", W: "#8B5CF6", S: "#F43F5E", fin: "#1E4FD6" };
  var css = [
    /* ---------- Inicio ---------- */
    ".gmain .pf-home{display:none!important}",
    /* ---------- racha ---------- */
    ".rz-card{position:relative!important;overflow:hidden!important;isolation:isolate}",
    ".rz-card::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(130% 100% at 100% 0%,rgba(255,255,255,.38),rgba(255,255,255,0) 52%),radial-gradient(90% 80% at 0% 100%,rgba(0,0,0,.22),rgba(0,0,0,0) 60%),repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 2px,rgba(255,255,255,0) 2px 16px)}",
    ".rz-card::after{content:'';position:absolute;z-index:-1;pointer-events:none;right:-14px;bottom:-26px;width:150px;height:240px;background:url(\"" + EIFFEL + "\") no-repeat center/contain;opacity:.22;transform:rotate(-6deg)}",
    ".rz-card .rz-bub{box-shadow:0 8px 20px -10px rgba(0,0,0,.45)!important}",
    ".rz-card .rz-go{background:#fff!important;color:#0B2D74!important;box-shadow:0 3px 0 rgba(0,0,0,.18)!important}",
    ".rz-card .rz-mz{filter:drop-shadow(0 10px 14px rgba(0,0,0,.28))}",
    /* ---------- ajustes compactos ---------- */
    ".m-aj .gm-card{padding:0!important;max-height:calc(100dvh - 24px)!important;display:flex!important;flex-direction:column}",
    ".m-aj .aj{display:flex;flex-direction:column;overflow-y:auto;max-height:calc(100dvh - 24px);overscroll-behavior:contain}",
    ".m-aj .aj-top{display:grid!important;grid-template-columns:52px minmax(0,1fr)!important;align-items:center;gap:12px!important;padding:14px 16px!important;text-align:left!important}",
    ".m-aj .aj-top .aj-gato,.m-aj .aj-top .aj-gato svg{width:52px!important;height:52px!important;margin:0!important}",
    ".m-aj .aj-top small.gm-k{display:none!important}.m-aj .aj-top h2{font-size:1.12rem!important;margin:0!important;text-align:left!important}.m-aj .aj-top .aj-nv{margin:2px 0 0!important;justify-self:start}",
    ".m-aj .aj-h{margin:10px 16px 4px!important;font-size:.68rem!important;letter-spacing:.08em}",
    ".m-aj .qs{margin:0 12px!important;border-radius:16px!important;background:var(--v4-surface2)!important}.m-aj .qs-seg{background:var(--v4-surface)!important}",
    ".m-aj .qs-row{padding:8px 12px!important;min-height:50px;gap:10px!important}",
    ".m-aj .qs-row:not(.col) small,.m-aj .qs-row:not(.col) p{display:none!important}",
    ".m-aj .qs-row img,.m-aj .qs-row .qs-i,.m-aj .qs-row > div > span:first-child{max-width:32px;max-height:32px}",
    ".m-aj .qs-row.col{gap:6px!important}.m-aj .qs-row.col small{display:none!important}.m-aj .qs-seg button{min-height:38px!important;padding:6px!important}",
    ".m-aj .plx69-redes{display:grid!important;grid-template-columns:1fr 1fr;gap:8px!important;margin:0 12px!important}.m-aj .plx69-redes .rs{min-height:40px!important;padding:6px 10px!important;border-radius:12px!important}.m-aj .plx69-redes .rs span{font-size:.8rem}",
    ".m-aj .aj-cuenta{margin:0 12px!important}.m-aj .aj-pie{margin:8px 16px 0!important;font-size:.72rem!important}",
    ".m-aj .set-row{position:sticky;bottom:0;margin:8px 0 0!important;padding:10px 16px calc(12px + env(safe-area-inset-bottom))!important;background:var(--raise,var(--v4-surface));box-shadow:0 -10px 20px -14px rgba(0,0,0,.35);z-index:2}",
    ".m-aj .set-row .gbtn{width:100%}",
    /* encendido en azul de la piel: el rojo de marca parecía un error o algo apagado */
    ".qs-sw[aria-checked=true]{background:var(--ev-azul,#2F6BFF)!important}",
    /* ---------- diagnóstico con color por parte ---------- */
    ".dg2{--sk:" + SK.intro + "}" + Object.keys(SK).map(function(k){ return ".dg2[data-sec='" + k + "']{--sk:" + SK[k] + "}"; }).join(""),
    ".dg2{background:radial-gradient(120% 60% at 50% -10%,color-mix(in srgb,var(--sk) 18%,transparent),transparent 60%),var(--v4-bg)!important;transition:background .5s}",
    ".dg2 .dgx-top b{font-family:Poppins,system-ui,sans-serif}",
    /* barra de progreso por partes */
    ".dg2 .dg2-prog span{background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line);color:var(--v4-mute)!important;transition:all .35s var(--v4-e)}",
    Object.keys(SK).map(function(k){ return ".dg2-prog span[data-s='" + k + "'].on{background:" + SK[k] + "!important;color:#fff!important;box-shadow:0 6px 16px -8px " + SK[k] + "!important}.dg2-prog span[data-s='" + k + "'].ok{background:color-mix(in srgb," + SK[k] + " 18%,var(--v4-surface))!important;color:" + SK[k] + "!important}"; }).join(""),
    /* portada */
    ".dg2-portada{position:relative;overflow:hidden;display:grid;grid-template-columns:118px minmax(0,1fr);align-items:center;gap:8px;margin:6px 0 12px;padding:18px 18px 18px 8px;border-radius:26px;color:#fff;background:linear-gradient(135deg,#0B2D74,#1E4FD6 55%,#6D5BFF);box-shadow:0 22px 44px -22px rgba(30,79,214,.8);isolation:isolate}",
    ".dg2-portada::after{content:'';position:absolute;z-index:-1;right:-10px;top:-30px;width:140px;height:230px;background:url(\"" + EIFFEL + "\") no-repeat center/contain;opacity:.16;transform:rotate(8deg)}",
    ".dg2-p-arte svg{width:118px;height:118px;filter:drop-shadow(0 12px 18px rgba(0,0,0,.3))}",
    ".dg2-p-tx small{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.68rem;color:#FFD200}.dg2-p-tx h1{margin:4px 0 10px;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:clamp(1.35rem,5.6vw,1.8rem);line-height:1.1}",
    ".dg2-p-chips{display:flex;flex-wrap:wrap;gap:6px}.dg2-p-chips span{background:rgba(255,255,255,.16);border-radius:99px;padding:4px 10px;font-weight:700;font-size:.78rem}",
    ".dg2-lead{color:var(--v4-ink2);line-height:1.5;margin:0 2px 12px;font-size:.95rem}",
    /* plan como línea de tiempo con color por parte */
    ".dg2 .dg2-plan{position:relative;gap:10px!important}.dg2 .dg2-plan::before{content:'';position:absolute;left:31px;top:20px;bottom:20px;width:2px;background:linear-gradient(var(--v4-line),var(--v4-line))}",
    ".dg2 .dg2-plan li{position:relative;background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;border-radius:18px!important}",
    ".dg2 .dg2-plan li i{flex:none;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;font-size:1.15rem!important;background:color-mix(in srgb,var(--c) 18%,var(--v4-surface));box-shadow:0 0 0 3px var(--v4-surface)}",
    Object.keys(SK).map(function(k){ return ".dg2-plan li[data-s='" + k + "']{--c:" + SK[k] + "}"; }).join(""),
    ".dg2 .dg2-plan b small{color:var(--c)!important}",
    /* pantallas de sección */
    ".dg2 .dgx-bloque{padding:24px 0!important}.dg2 .dgx-bloque i{width:108px;height:108px;margin:12px auto!important;border-radius:32px;display:grid!important;place-items:center;font-size:3rem!important;background:linear-gradient(145deg,var(--sk),color-mix(in srgb,var(--sk) 60%,#0B2D74));box-shadow:0 20px 36px -18px var(--sk);animation:dg2pop .6s var(--v4-spring) both}",
    "@keyframes dg2pop{from{transform:scale(.6) rotate(-8deg);opacity:0}to{transform:none;opacity:1}}",
    ".dg2 .dgx-bloque h2{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important}.dg2 .dgx-num{background:color-mix(in srgb,var(--sk) 16%,var(--v4-surface))!important;color:var(--sk)!important}",
    /* botones principales con el color de la parte */
    ".dg2 .dgx-pie .gbtn:not(.ghost){background:var(--sk)!important;box-shadow:0 3px 0 color-mix(in srgb,var(--sk) 60%,#000)!important}",
    ".dg2 .dgx-pie{background:color-mix(in srgb,var(--v4-surface) 92%,transparent)!important;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}",
    /* autoevaluación: tarjetas con nivel en pastilla */
    ".dg2 .dg2-c{background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;border-radius:16px!important}",
    ".dg2 .dg2-c em{flex:none;min-width:40px!important;height:28px;border-radius:9px;display:grid;place-items:center;background:color-mix(in srgb,var(--sk) 16%,var(--v4-surface));color:var(--sk)!important;font-size:.82rem}",
    ".dg2 .dg2-c:hover{box-shadow:0 0 0 2px var(--sk),var(--v4-sh1)!important}",
    /* preguntas y documentos */
    ".dg2 .dgx-op{background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),0 3px 0 var(--v4-line)!important;border-radius:16px!important}",
    ".dg2 .dgx-op small{background:color-mix(in srgb,var(--sk) 14%,var(--v4-surface))!important;color:var(--sk)!important;font-weight:800}",
    ".dg2 .dgx-op.sel{box-shadow:0 0 0 2px var(--sk),0 3px 0 var(--sk)!important;background:color-mix(in srgb,var(--sk) 8%,var(--v4-surface))!important}",
    ".dg2 .dg2-doc,.dg2 .dg2-tarea,.dg2 .dg2-audio{border-top:4px solid var(--sk)!important;background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important}",
    ".dg2 .dg2-tarea small{color:var(--sk)!important}.dg2 .dgx-play{background:var(--sk)!important;color:#fff!important;box-shadow:0 0 0 8px color-mix(in srgb,var(--sk) 22%,transparent)!important}",
    ".dg2 .dgx-micb{background:var(--sk)!important;box-shadow:0 10px 24px -8px var(--sk)!important}.dg2 .dg2-ta:focus{border-color:var(--sk)!important}",
    ".dg2 .dgx-q{font-family:Poppins,system-ui,sans-serif!important}.dg2 .dgx-hueco{color:var(--sk)!important}",
    /* resultado */
    ".dg2[data-sec='fin'] .dgx-glob{background:linear-gradient(135deg,#0B2D74,#1E4FD6 55%,#6D5BFF)!important;border-radius:26px!important;position:relative;overflow:hidden;isolation:isolate;box-shadow:0 22px 44px -22px rgba(30,79,214,.8)}",
    ".dg2[data-sec='fin'] .dgx-glob::after{content:'';position:absolute;z-index:-1;right:-6px;top:-26px;width:120px;height:200px;background:url(\"" + EIFFEL + "\") no-repeat center/contain;opacity:.16}",
    ".dg2[data-sec='fin'] .dgx-glob b{font-size:3.2rem!important;animation:dg2pop .7s var(--v4-spring) both}",
    ".dg2 .dgx-bar{--c:#1E4FD6;background:var(--v4-surface)!important;border-radius:18px!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important}",
    Object.keys(SK).map(function(k){ return ".dg2 .dgx-bar[data-s='" + k + "']{--c:" + SK[k] + "}"; }).join(""),
    ".dg2 .dgx-bar .dgx-bt i{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;background:color-mix(in srgb,var(--c) 16%,var(--v4-surface))}",
    ".dg2 .dgx-bar .dgx-bt em{color:var(--c)!important;font-family:Poppins,system-ui,sans-serif}",
    ".dg2-med{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-top:4px}.dg2-med i{position:relative;height:22px;border-radius:7px;background:var(--v4-surface2);display:grid;place-items:center;font-style:normal;overflow:hidden}",
    ".dg2-med i em{font-style:normal;font-size:.66rem;font-weight:800;color:var(--v4-mute);position:relative;z-index:1}",
    ".dg2-med i.on{background:var(--c)}.dg2-med i.on em{color:#fff}",
    ".dg2-med i.medio{background:linear-gradient(90deg,color-mix(in srgb,var(--c) 55%,var(--v4-surface2)) 50%,var(--v4-surface2) 50%)}",
    ".dg2-med i.on{animation:dg2seg .5s var(--v4-e) both}.dg2-med i:nth-child(2){animation-delay:.06s}.dg2-med i:nth-child(3){animation-delay:.12s}.dg2-med i:nth-child(4){animation-delay:.18s}.dg2-med i:nth-child(5){animation-delay:.24s}",
    "@keyframes dg2seg{from{transform:scaleX(.2);opacity:0}to{transform:none;opacity:1}}",
    ".dg2 .dgx-fd > div{border-radius:16px!important}.dg2 .dgx-ruta{border-radius:20px!important;background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important}",
    ".dg2 .dg2-corr{border-radius:18px!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx81"; st.textContent = css; document.head.appendChild(st);
})();
