/* PLEX PLAY 3.18.0 — La explicación de la lección, en tarjetas
   Jhon: «están todas saturadas de info… que sea fácil aprender sin tantas cosas, mejor organizado y más visual».
   La explicación era una sola página de hasta 5.000 px: esquema, lo esencial, la versión fácil, por qué importa, cada
   regla, método, ejemplos, errores y qué se practica, todo abierto a la vez. Ahora es un recorrido corto, una idea por
   pantalla:
     1. De un vistazo        el título, el profesor y el esquema visual
     2. Lo esencial          las tres o cuatro ideas, grandes
     3. Te lo explico fácil  la versión simple, con sus ejemplos para oír
     4. Ojo                  los errores típicos
   Con puntos de avance, «Siguiente» y «Atrás», y «Ir a los ejercicios» siempre a mano. Todo lo demás (por qué importa,
   las reglas completas, el método, los ejemplos comentados) no se borra: queda en «Explicación completa», plegado, en
   la última tarjeta. Es el mismo contenido de siempre: solo se reordenan los bloques que ya pinta la app. */
(function(){
  "use strict";
  var pl = document.getElementById("player"); if (!pl) return;
  var paso = 0, leccion = null, total = 0;
  var TIT = { vista: "De un vistazo", ess: "Lo esencial", facil: "Te lo explico fácil", ojo: "Ojo con esto", todo: "La explicación" };
  var enTeoria = function(){
    try { return typeof P !== "undefined" && P && P.steps && P.steps[P.i] && P.steps[P.i].kind === "theory"; } catch (e) { return false; }
  };
  var slide = function(k){ var d = document.createElement("section"); d.className = "tx-s"; d.dataset.k = k; d.innerHTML = '<p class="tx-k"></p>'; return d; };
  var arma = function(){
    if (!enTeoria()) { pl.classList.remove("tx", "tx-fin"); return; }
    var w = pl.querySelector(".pbody .wrap"); if (!w || w.classList.contains("tx-on")) return;
    var th = w.querySelector("#theory"); if (!th) return;
    var id = ""; try { id = (P.lesson && P.lesson.id) || P.mode || ""; } catch (e) {}
    if (id !== leccion) { leccion = id; paso = 0; }
    var S = [], pon = function(k, nodos){ nodos = nodos.filter(Boolean); if (!nodos.length) return null; var s = slide(k); nodos.forEach(function(n){ s.appendChild(n); }); S.push(s); return s; };
    var ess = th.querySelector(":scope > .plx-ess"), facil = th.querySelector(":scope > .plx-simple");
    var ojo = [].slice.call(th.querySelectorAll(":scope > .tsec.k-warn"));
    pon("vista", [w.querySelector(":scope > .disp"), w.querySelector(":scope > .lx-pcard"), w.querySelector(":scope > .glance")]);
    if (ess) pon("ess", [ess]);
    if (facil) pon("facil", [facil]);
    if (ojo.length && (ess || facil)) { ojo.forEach(function(o){ o.classList.remove("closed"); }); pon("ojo", ojo); }
    /* lo que queda en #theory es la explicación larga */
    var resto = [].filter.call(th.children, function(c){ return c.getClientRects ? true : true; }).length;
    if (!ess && !facil) pon("todo", [th]);
    else if (resto) {
      var det = document.createElement("details"); det.className = "tx-mas"; det.innerHTML = "<summary>Explicación completa<small>Las reglas, el método y los ejemplos comentados</small></summary>";
      [].forEach.call(th.querySelectorAll(":scope > .tsec"), function(t){ t.classList.add("closed"); });
      det.appendChild(th); S[S.length - 1].appendChild(det);
    }
    total = S.length; if (paso >= total) paso = total - 1;
    var cab = document.createElement("div"); cab.className = "tx-cab";
    cab.innerHTML = '<div class="tx-pasos" role="tablist" aria-label="Partes de la explicación">' + S.map(function(s, i){ return '<button type="button" class="tx-p" data-tx="' + i + '" role="tab" aria-label="' + TIT[s.dataset.k] + '"></button>'; }).join("") + '</div><button type="button" class="tx-saltar" data-tx="saltar">Ir a los ejercicios</button>';
    w.insertBefore(cab, w.firstChild);
    S.forEach(function(s, i){ s.querySelector(".tx-k").textContent = (i + 1) + " de " + total + " · " + TIT[s.dataset.k]; w.appendChild(s); });
    w.classList.add("tx-on"); pl.classList.add("tx");
    /* pie: Atrás y Siguiente; el botón de empezar de la app queda para la última tarjeta */
    var pfa = pl.querySelector(".pf .pfa");
    if (pfa && !pfa.querySelector(".tx-sig")) pfa.insertAdjacentHTML("afterbegin", '<button type="button" class="btn tx-atras" data-tx="atras" aria-label="Atrás">‹</button><button type="button" class="btn tx-sig" data-tx="sig">Siguiente</button>');
    muestra();
  };
  var muestra = function(){
    var w = pl.querySelector(".pbody .wrap.tx-on"); if (!w) return;
    [].forEach.call(w.querySelectorAll(":scope > .tx-s"), function(s, i){ s.hidden = i !== paso; });
    [].forEach.call(w.querySelectorAll(".tx-p"), function(b, i){ b.classList.toggle("on", i === paso); b.classList.toggle("ya", i < paso); b.setAttribute("aria-selected", String(i === paso)); });
    pl.classList.toggle("tx-fin", paso >= total - 1); pl.classList.toggle("tx-ini", paso === 0);
    var b = pl.querySelector(".pbody"); if (b) b.scrollTop = 0;
  };
  pl.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-tx]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var a = b.dataset.tx;
    if (a === "saltar") { var go = pl.querySelector(".pf [data-next]"); if (go) go.click(); return; }
    if (a === "sig") paso = Math.min(total - 1, paso + 1); else if (a === "atras") paso = Math.max(0, paso - 1); else paso = Math.max(0, Math.min(total - 1, +a || 0));
    try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
    muestra();
  }, true);
  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { arma(); } catch (e) {} }); }).observe(pl, { childList: true, subtree: true });

  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var css = [
    /* cabecera del recorrido */
    "#player .tx-cab{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:2px 0 14px}.tx-pasos{display:flex;gap:6px;flex:1;max-width:240px}",
    ".tx-p{all:unset;box-sizing:border-box;cursor:pointer;flex:1;height:6px;border-radius:9px;background:rgba(54,37,92,.14);transition:background .2s}.tx-p.ya{background:#2F6BFF}.tx-p.on{background:#FFD200;box-shadow:0 0 8px rgba(255,210,0,.7)}.tx-p::after{content:'';position:absolute}.tx-p:focus-visible{outline:2px solid #2F6BFF;outline-offset:3px}",
    ".tx-saltar{all:unset;cursor:pointer;font:600 .8rem/1 var(--ev-f,Barlow,system-ui,sans-serif);color:#2F6BFF;padding:8px 2px;white-space:nowrap}",
    oscuro(".tx-p", "background:rgba(255,255,255,.16)"), oscuro(".tx-p.ya", "background:#4C86FF"), oscuro(".tx-p.on", "background:#FFD200"), oscuro(".tx-saltar", "color:#D2C3F6"),
    /* una tarjeta a la vez */
    "#player .tx-s{display:grid;gap:14px;animation:txEntra .28s ease both}#player .tx-s[hidden]{display:none}@keyframes txEntra{from{opacity:0;transform:translateX(14px)}}",
    "#player .tx-k{margin:0;font:600 .7rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.18em;text-transform:uppercase;color:#2F6BFF}", oscuro("#player .tx-k", "color:#D2C3F6"),
    "#player .tx-on > .disp,#player .tx-s > .disp{margin:0!important;font-size:clamp(1.5rem,6vw,2.1rem)!important;line-height:1.08!important}",
    "#player .tx-s > .lx-pcard,#player .tx-s > .glance,#player .tx-s > .plx-ess,#player .tx-s > .plx-simple,#player .tx-s > .tsec{margin:0!important}",
    /* lo esencial: cada idea, una ficha */
    "#player .tx-s > .plx-ess{background:none!important;border:0!important;box-shadow:none!important;padding:0!important}#player .tx-s > .plx-ess > h4,#player .tx-s > .plx-ess > .ps-t{display:none!important}",
    "#player .tx-s > .plx-ess ul,#player .tx-s > .plx-ess ol{list-style:none!important;margin:0!important;padding:0!important;display:grid;gap:10px}",
    "#player .tx-s > .plx-ess li{position:relative;margin:0!important;padding:15px 16px 15px 52px!important;border-radius:16px;font-size:1.06rem!important;line-height:1.4!important;background:rgba(47,107,255,.07);box-shadow:inset 0 0 0 1px rgba(47,107,255,.16);counter-increment:txn}#player .tx-s > .plx-ess{counter-reset:txn}",
    "#player .tx-s > .plx-ess li::before{content:counter(txn)!important;position:absolute!important;left:14px!important;top:14px!important;width:26px!important;height:26px!important;border-radius:9px!important;display:grid!important;place-items:center;background:#2F6BFF!important;color:#fff!important;font:700 .82rem/1 Poppins,system-ui,sans-serif!important;mask:none!important;-webkit-mask:none!important}",
    oscuro("#player .tx-s > .plx-ess li", "background:rgba(210,195,246,.08);box-shadow:inset 0 0 0 1px rgba(210,195,246,.16)"),
    /* la versión fácil y los errores, sin caja dentro de caja */
    "#player .tx-s > .plx-simple{border-radius:20px!important}#player .tx-s > .tsec{border-radius:18px!important}",
    /* explicación completa, plegada */
    ".tx-mas{margin-top:6px;border-radius:16px;box-shadow:inset 0 0 0 1px rgba(54,37,92,.14)}.tx-mas > summary{cursor:pointer;list-style:none;display:grid;gap:2px;padding:14px 44px 14px 16px;position:relative;font:600 .95rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif)}.tx-mas > summary::-webkit-details-marker{display:none}",
    ".tx-mas > summary small{font-weight:400;font-size:.8rem;opacity:.72}.tx-mas > summary::after{content:'';position:absolute;right:18px;top:50%;width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-70%) rotate(45deg);transition:transform .2s}.tx-mas[open] > summary::after{transform:translateY(-30%) rotate(-135deg)}",
    ".tx-mas > #theory{padding:0 12px 12px;display:grid;gap:10px}", oscuro(".tx-mas", "box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)"),
    /* pie */
    "#player.tx .pf .pfa{display:flex!important;gap:10px}#player.tx .pf .tx-sig,#player.tx .pf .pfa [data-next]{flex:1 1 auto!important;width:auto!important;max-width:none!important;white-space:nowrap}#player.tx .pf .tx-atras{flex:0 0 52px!important;width:52px!important;min-width:0!important;padding:0!important;font-size:1.4rem;background:none!important;color:inherit!important;box-shadow:inset 0 0 0 1.5px rgba(54,37,92,.2)!important}",
    oscuro("#player.tx .pf .tx-atras", "box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.22)!important;color:#fff!important"),
    "#player.tx:not(.tx-fin) .pf [data-next]{display:none!important}#player.tx.tx-fin .pf .tx-sig{display:none!important}#player.tx.tx-ini .pf .tx-atras{display:none!important}#player.tx.tx-fin .pf [data-next]{flex:1}",
    "#player:not(.tx) .pf .tx-sig,#player:not(.tx) .pf .tx-atras{display:none!important}",
    "@media (prefers-reduced-motion:reduce){#player .tx-s{animation:none}}",
    /* escritorio: en la primera tarjeta, el profesor a un lado y el esquema al otro */
    "@media (min-width:1024px){#player .tx-s[data-k=vista]{grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);column-gap:22px;align-items:start}#player .tx-s[data-k=vista] > .tx-k,#player .tx-s[data-k=vista] > .disp{grid-column:1 / -1}#player .tx-s[data-k=vista] > .tx-mas{grid-column:1 / -1}#player .tx-s > .plx-ess ul,#player .tx-s > .plx-ess ol{grid-template-columns:repeat(2,minmax(0,1fr))}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx95"; st.textContent = css; document.head.appendChild(st);
  try { arma(); } catch (e) {}
})();
