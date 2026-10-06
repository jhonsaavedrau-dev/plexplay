/* PLEX PLAY 3.6.0 — Pantallas internas de los juegos rediseñadas
   Con el mismo sistema visual de la app (plx78): superficies limpias, botones con labio, color propio de cada juego.
   - Lista del Arcade: juegos como tarjetas con su ilustración sobre su color (el elegido con anillo y visto),
     cursos como chips, unidades como filas con récord y estrellas.
   - Portada: cabecera con el color del juego, la ilustración grande con halo, nombre, verbo y chips (retos,
     velocidad); «Cómo se juega» como lista numerada en una tarjeta; récord y ajustes en tarjetas; «Jugar» fijo abajo.
   - Partida: barra superior de vidrio (pausa, vidas, tiempo, puntos) y barra de avance con el color del juego;
     cuenta 3-2-1 con anillo; momento de corrección como tarjeta; pausa como tarjeta centrada.
   - Resultados: cabecera con el color del juego, estrellas que aparecen una a una, puntaje grande, cifras en
     tarjetas, repaso de errores en tarjetas y botones fijos abajo.
   Los menús siguen el tema claro/oscuro; la partida es siempre oscura (como en un videojuego). */
(function(){
  "use strict";
  var envuelve = function(raiz, sel, clase, tras){
    if (raiz.querySelector("." + clase)) return null;
    var els = sel.map(function(s){ return raiz.querySelector(s); }).filter(Boolean); if (!els.length) return null;
    var w = document.createElement("div"); w.className = clase;
    els[0].parentNode.insertBefore(w, els[0]); els.forEach(function(e){ w.appendChild(e); });
    return w;
  };
  var arregla = function(){
    var c = document.getElementById("plxg"); if (!c || c.hidden) return;
    var pt = c.querySelector(".pt:not([data-v5])");
    if (pt) {
      pt.dataset.v5 = "1";
      var hero = envuelve(pt, [".pt-fr", ".pt-h", ".pt-verbo", ".pt-u"], "pt5-hero");
      var reg = pt.querySelector(".pt-reglas");
      if (reg && !pt.querySelector(".pt5-reglas")) { var d = document.createElement("div"); d.className = "pt5-reglas"; d.innerHTML = "<h3>Cómo se juega</h3>"; reg.parentNode.insertBefore(d, reg); d.appendChild(reg); }
    }
    var res = c.querySelector(".plxg-res:not([data-v5])");
    if (res) {
      res.dataset.v5 = "1";
      var w = res.querySelector(".plxg-wrap");
      if (w) envuelve(w, [".plxg-k", ".plxg-h", ".plxg-fanl", ".plxg-big", ".plxg-est"], "res5-hero");
    }
  };
  new MutationObserver(function(){ arregla(); }).observe(document.body, { childList: true, subtree: true });

  var css = [
    /* ---------- base de los menús (siguen el tema) ---------- */
    ".plxg:not(.plxg-juego){background:radial-gradient(120% 50% at 50% -10%,color-mix(in srgb,var(--ac,#1E4FD6) 22%,transparent),transparent 60%),var(--v4-bg)!important;color:var(--v4-ink)!important}",
    ".plxg .plxg-wrap{font-family:Inter,system-ui,sans-serif}",
    ".plxg:not(.plxg-juego) .plxg-h{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;letter-spacing:-.02em!important;text-transform:none!important;color:var(--v4-ink)!important;text-shadow:none!important}",
    ".plxg:not(.plxg-juego) .plxg-h2{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;color:var(--v4-ink)!important;text-transform:none!important;letter-spacing:-.01em!important}",
    ".plxg:not(.plxg-juego) .plxg-h2 small,.plxg:not(.plxg-juego) .hb-lead,.plxg:not(.plxg-juego) .plxg-k{color:var(--v4-mute)!important}",
    ".plxg:not(.plxg-juego) .plxg-ib{background:var(--v4-surface)!important;color:var(--v4-ink)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;border-radius:14px!important}",
    /* botones */
    ".plxg .plxg-btn{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;border-radius:16px!important;background:#FFD200!important;color:#0B2D74!important;box-shadow:0 4px 0 #B38F00!important;transition:transform .12s var(--v4-e),box-shadow .12s!important;text-transform:none!important;letter-spacing:0!important}",
    ".plxg .plxg-btn:active{transform:translateY(3px)!important;box-shadow:0 1px 0 #B38F00!important}",
    ".plxg .plxg-btn.line{background:var(--v4-surface)!important;color:var(--v4-ink)!important;box-shadow:0 0 0 1px var(--v4-line),0 3px 0 var(--v4-line)!important}",
    /* resultados: siguen el tema aunque la capa siga marcada como partida */
    ".plxg .plxg-res .plxg-btn.line{background:var(--v4-surface)!important;color:var(--v4-ink)!important;box-shadow:0 0 0 1px var(--v4-line),0 3px 0 var(--v4-line)!important}",
    ":root .plxg .pt5-hero .pt-u span,:root .plxg .pt5-hero .pt-u b,:root .plxg .pt5-hero .pt-u *{color:#fff!important;opacity:1!important}",
    ".plxg-juego .plxg-btn.line,.plxg-pausa .plxg-btn.line{background:rgba(255,255,255,.1)!important;color:#fff!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)!important}",
    /* ---------- lista del Arcade ---------- */
    ".hb-juegos{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}@media (min-width:700px){.hb-juegos{grid-template-columns:repeat(4,minmax(0,1fr))!important}}",
    ".hb-game{position:relative;display:grid!important;grid-template-rows:84px auto;gap:0!important;padding:0!important;overflow:hidden;border-radius:20px!important;background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;text-align:left;transition:transform .14s var(--v4-e),box-shadow .2s!important}",
    ".hb-game:active{transform:scale(.97)}.hb-game .hb-fr{display:grid!important;place-items:center;width:100%!important;height:84px;margin:0!important;background:linear-gradient(160deg,color-mix(in srgb,var(--ac) 32%,var(--v4-surface)),color-mix(in srgb,var(--ac) 12%,var(--v4-surface)));overflow:hidden;position:relative}",
    ".hb-game .hb-fr > *{position:static!important;max-height:64px;max-width:70%}.hb-game .hb-fr svg,.hb-game .hb-fr img{width:64px;height:auto;max-height:64px;object-fit:contain}",
    ".hb-game .hb-gt{padding:10px 12px 12px!important;display:grid;gap:1px}.hb-game .hb-gt small{color:var(--ac)!important;font-weight:800;font-size:.66rem;text-transform:uppercase;letter-spacing:.06em;filter:saturate(1.2) brightness(.8)}",
    ".hb-game .hb-gt b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:.92rem;color:var(--v4-ink)!important;text-transform:none!important;line-height:1.2}.hb-game .hb-gt span{font-size:.76rem;color:var(--v4-mute)!important;line-height:1.3}",
    ".hb-game.on{box-shadow:0 0 0 3px var(--ac),0 14px 28px -16px var(--ac)!important}",
    ".hb-game.on::after{content:'✓';position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:var(--ac);color:#fff;font-weight:900;font-size:.8rem;box-shadow:0 2px 6px rgba(0,0,0,.25)}",
    ".hb-tracks{display:flex!important;gap:8px!important;overflow-x:auto;padding:2px 2px 8px!important;scrollbar-width:none}.hb-tracks::-webkit-scrollbar{display:none}",
    ".hb-tr{flex:none;padding:8px 14px!important;border-radius:99px!important;background:var(--v4-surface)!important;color:var(--v4-ink2)!important;box-shadow:0 0 0 1px var(--v4-line)!important;font-weight:700!important;font-size:.86rem!important}",
    ".hb-tr.on{background:var(--v4-ink)!important;color:var(--v4-surface)!important;box-shadow:none!important}",
    ".hb-units{display:grid!important;gap:8px!important}",
    ".hb-u{display:flex!important;align-items:center;gap:12px;padding:12px 14px!important;border-radius:16px!important;background:var(--v4-surface)!important;color:var(--v4-ink)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;min-height:60px;transition:transform .12s var(--v4-e)}",
    ".hb-u:active{transform:scale(.98)}.hb-u .hb-ut{flex:1;min-width:0}.hb-u .hb-ut b{font-family:Poppins,system-ui,sans-serif;font-weight:700;color:var(--v4-ink)!important}.hb-u .hb-ut small{color:var(--v4-mute)!important}.hb-u[disabled]{opacity:.5}",
    ".plxg .plxg-est i svg{fill:var(--v4-line)}.plxg .plxg-est i.on svg{fill:#FFC23D;filter:drop-shadow(0 2px 4px rgba(255,180,0,.45))}",
    /* ---------- portada ---------- */
    ".pt5-hero{position:relative;display:grid;justify-items:center;text-align:center;gap:4px;margin:6px 0 14px;padding:22px 18px 18px;border-radius:28px;color:#fff;overflow:hidden;isolation:isolate;background:linear-gradient(150deg,var(--ac),color-mix(in srgb,var(--ac) 45%,#0B2D74));box-shadow:0 22px 44px -22px var(--ac)}",
    ".pt5-hero::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(90% 70% at 50% 0%,rgba(255,255,255,.3),transparent 60%),repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 2px,transparent 2px 16px)}",
    ".pt5-hero .pt-fr{position:relative;width:120px;height:120px;margin:0 auto 6px!important;display:grid!important;place-items:center;border-radius:50%;background:rgba(255,255,255,.18);box-shadow:0 0 0 10px rgba(255,255,255,.08);animation:pt5in .6s var(--v4-spring) both;overflow:hidden}",
    ".pt5-hero .pt-fr > *{position:static!important;max-width:84px;max-height:84px}.pt5-hero .pt-fr svg,.pt5-hero .pt-fr img{width:84px!important;height:auto!important;max-height:84px}",
    "@keyframes pt5in{from{transform:scale(.6) rotate(-10deg);opacity:0}to{transform:none;opacity:1}}",
    ":root .plxg .pt5-hero .pt-h.plxg-h{color:#fff!important}.pt5-hero .pt-h{font-size:clamp(1.8rem,8vw,2.4rem)!important;margin:0!important}",
    ".pt5-hero .pt-verbo{margin:0!important;opacity:.92;font-weight:700;color:#fff!important}",
    ".pt5-hero .pt-u{display:flex!important;flex-wrap:wrap;justify-content:center;gap:6px;margin:8px 0 0!important}.pt5-hero .pt-u b,.pt5-hero .pt-u span{opacity:1!important;background:rgba(255,255,255,.18);border-radius:99px;padding:4px 12px;font-size:.8rem;color:#fff!important;font-weight:700}",
    ".pt5-reglas{background:var(--v4-surface);border-radius:20px;padding:14px 16px;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1);margin-bottom:12px}",
    ".pt5-reglas h3{margin:0 0 8px;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1rem;color:var(--v4-ink)}",
    ".pt5-reglas .pt-reglas{margin:0!important;padding:0!important;list-style:none;counter-reset:r;display:grid;gap:8px}",
    ".pt5-reglas .pt-reglas li{display:block!important;counter-increment:r;position:relative;padding-left:34px!important;color:var(--v4-ink2)!important;line-height:1.45;font-size:.92rem}",
    ".pt5-reglas .pt-reglas li::before{content:counter(r)!important;position:absolute;left:0;top:0;width:24px;height:24px;border-radius:8px;display:grid;place-items:center;background:color-mix(in srgb,var(--ac) 20%,var(--v4-surface))!important;color:var(--v4-ink)!important;font-weight:800;font-size:.78rem}",
    ".pt .pt-rec,.pt .pt-aj{background:var(--v4-surface)!important;border-radius:20px!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;color:var(--v4-ink2)!important;border:0!important}",
    ".pt .pt-sw b{color:var(--v4-ink)!important}.pt .pt-sw small{color:var(--v4-mute)!important}",
    ".pt .pt-go{box-shadow:0 4px 0 #B38F00,0 16px 30px -12px rgba(255,180,0,.6)!important}",
    /* ---------- partida ---------- */
    ".plxg-juego{background:radial-gradient(120% 60% at 50% -10%,color-mix(in srgb,var(--ac,#1E4FD6) 25%,transparent),transparent 60%),#06173F!important}",
    ".plxg-hud{margin:8px 10px 0!important;border-radius:20px;background:rgba(8,22,64,.62)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 10px 24px -14px rgba(0,0,0,.6)!important}",
    ".plxg-hud .plxg-ib{background:rgba(255,255,255,.1)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)!important;border-radius:12px!important}",
    ".plxg-tiempo{background:rgba(255,255,255,.08)!important;border-radius:12px!important;font-family:Poppins,system-ui,sans-serif}.plxg-tiempo.poco{background:rgba(229,72,77,.3)!important}",
    ".plxg-pts b{font-family:Poppins,system-ui,sans-serif!important;color:#FFD200!important}",
    ".plxg-barra{border-radius:99px!important;overflow:hidden}.plxg-barra i{background:linear-gradient(90deg,var(--ac),#FFD200)!important;border-radius:99px}",
    ".plxg-combo{border-radius:99px!important;font-family:Poppins,system-ui,sans-serif!important}",
    ".plxg-cuenta b{font-family:Poppins,system-ui,sans-serif!important;width:150px;height:150px;border-radius:50%;display:grid!important;place-items:center;background:radial-gradient(circle,rgba(255,210,0,.25),transparent 70%);box-shadow:0 0 0 6px rgba(255,210,0,.35),0 0 60px rgba(255,210,0,.35)}",
    ".plxg-momc{border-radius:24px!important;box-shadow:0 24px 50px -20px rgba(0,0,0,.7)!important;border-top:5px solid var(--ac)!important}",
    ".plxg-pausa{background:rgba(4,12,40,.6)!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}",
    ".plxg-pc{border-radius:26px!important;background:rgba(15,26,57,.92)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 24px 50px -20px rgba(0,0,0,.8)!important;padding:24px!important;display:grid;gap:10px;width:min(340px,86vw)}",
    ".plxg-pc h2{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;font-size:1.6rem!important;margin:0!important}.plxg-pc p{margin:0 0 6px!important;opacity:.8}",
    /* ---------- resultados ---------- */
    /* noche PLEX con el halo del color del juego: mezclar el color con marino ensuciaba los cálidos y el blanco no se leía sobre los pastel */
    ".res5-hero{position:relative;display:grid;justify-items:center;text-align:center;gap:6px;margin:6px 0 14px;padding:22px 18px;border-radius:28px;color:#fff;overflow:hidden;isolation:isolate;background:radial-gradient(120% 95% at 50% -10%,color-mix(in srgb,var(--ac) 62%,transparent),transparent 72%),linear-gradient(165deg,#15357F,#0A1B4A);box-shadow:0 22px 44px -22px var(--ac)}",
    ".res5-hero::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(90% 70% at 50% 0%,rgba(255,255,255,.3),transparent 60%),repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 2px,transparent 2px 16px)}",
    ".res5-hero .plxg-k{color:rgba(255,255,255,.85)!important;margin:0!important}.res5-hero .plxg-h{margin:0!important;font-size:clamp(1.6rem,7vw,2.2rem)!important}",
    ":root .plxg .res5-hero h1.plxg-h{color:#fff!important}",
    /* plx78 (0,5,0) ponía el título amarillo en oscuro y plx63/plx83 grisaban la línea de arriba y «PUNTOS»: subir especificidad en los dos temas */
    ":root .plxg:not(.plxg-juego) .res5-hero h1.plxg-h{color:#fff!important}",
    ":root .plxg:not(.plxg-juego) .res5-hero .plxg-k,:root .plxg:not(.plxg-juego) .res5-hero .plxg-big span{color:rgba(255,255,255,.9)!important;text-shadow:0 1px 2px rgba(11,45,116,.45)}",
    /* plx63 (0,3,1) dejaba el puntaje marino sobre la cabecera */
    ":root .plxg:not(.plxg-juego) .res5-hero .plxg-big b{color:#FFD200!important}",
    ".res5-hero .plxg-big b{font-family:Poppins,system-ui,sans-serif!important;font-size:clamp(2.6rem,12vw,3.6rem)!important;color:#FFD200!important;text-shadow:0 4px 18px rgba(0,0,0,.25)}.res5-hero .plxg-big span{color:rgba(255,255,255,.85)!important}",
    ".res5-hero .plxg-fanl{color:#fff!important;opacity:.92;margin:0!important;font-size:.9rem}",
    ".res5-hero .plxg-est i{animation:res5est .5s var(--v4-spring) both}.res5-hero .plxg-est i:nth-child(2){animation-delay:.22s}.res5-hero .plxg-est i:nth-child(3){animation-delay:.44s}.res5-hero .plxg-est i svg{fill:rgba(255,255,255,.25)}",
    "@keyframes res5est{from{transform:scale(0) rotate(-30deg)}to{transform:none}}",
    ".plxg-res .plxg-kv{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important}",
    ".plxg-res .plxg-kv > div{background:var(--v4-surface)!important;border-radius:16px!important;padding:10px 6px!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;text-align:center}",
    ".plxg-res .plxg-kv b{font-family:Poppins,system-ui,sans-serif!important;color:var(--v4-ink)!important;font-size:1.05rem}.plxg-res .plxg-kv span{color:var(--v4-mute)!important;font-size:.72rem}",
    /* plx45 traía bordes de tabla y plx63 un fondo de banda: quedaban montados bajo las tarjetas */
    ".plxg:not(.plxg-juego) .plxg-res .plxg-kv,.plxg-res .plxg-kv{border:0!important;background:none!important;box-shadow:none!important;margin-top:14px!important}.plxg-res .plxg-kv>div{border:0!important}",
    ".plxg-juego .plxg-res .plxg-kv > div{background:rgba(255,255,255,.08)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)!important}.plxg-juego .plxg-res .plxg-kv b{color:#fff!important}",
    /* la explicación y las etiquetas tenían colores fijos de tarjeta blanca: en oscuro no se leían */
    ".plxg-res .plxg-errs .e-why{color:var(--v4-ink2)!important}.plxg-res .plxg-errs p > span{color:var(--v4-mute)!important}",
    ":root[data-theme=dark] .plxg-res .plxg-errs .e-mal s{color:#FF8A8A!important}",
    "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .plxg-res .plxg-errs .e-mal s{color:#FF8A8A!important}}",
    ".plxg-res .plxg-errs > li{border-radius:18px!important;background:var(--v4-surface)!important;box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)!important;border:0!important}",
    ".plxg-res .plxg-acc{position:sticky;bottom:0;padding:12px 0 calc(12px + env(safe-area-inset-bottom))!important;background:linear-gradient(transparent,var(--v4-bg) 30%)!important;display:grid!important;gap:8px}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx83"; st.textContent = css; document.head.appendChild(st);
})();
