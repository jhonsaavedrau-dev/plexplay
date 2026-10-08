/* PLEX PLAY 3.12.0 — Monedas y Tienda; Inicio sin relleno
   Monedas
   - Una sola moneda. Se gana con todo lo que da XP (la mitad del XP ganado, mínimo 1) y vive en S.game.coins, así
     que viaja con la cuenta. Quien ya venía jugando recibe una vez un saldo por su XP acumulado.
   Tienda (pestaña nueva)
   - Vende lo que la app ya tenía bloqueado por nivel, XP, racha o dictado: accesorios, bufandas y fondos. Comprar es
     otra forma de desbloquear: lo que ya estaba desbloqueado sigue siéndolo y los premios exclusivos del 1V1 y del
     Quiz no se venden. Los pelajes son todos libres: aquí solo se eligen.
   - Cada artículo se ve puesto en tu gato (catSVG), no como un objeto suelto: la app no tiene los objetos sueltos.
   Inicio
   - Jhon pidió quitar lo que «no hace nada»: debajo del mapa ya no van la tarjeta de racha, «Tu plan de hoy»,
     «Tu mapa» de mundos ni «Para ti». Nada se borra: el plan y el diagnóstico siguen en Práctica, el curso se cambia
     en «Ver todo el curso» y la racha está en la cabecera. Las misiones pasan al panel lateral. */
(function(){
  "use strict";
  if (typeof GV === "undefined" || typeof gEnsure !== "function" || typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var miles = function(n){ return Number(n || 0).toLocaleString("es-CO"); };
  var G = function(){ return gEnsure(); };
  var MO = '<i class="mo" aria-hidden="true"></i>';

  /* ====================== monedas ====================== */
  var saldo = function(){ var g = G(); return Math.max(0, Math.floor(g.coins || 0)); };
  var inicia = function(){
    var g = G(); if (g.coinsV) return;
    var xp = 0; try { xp = S.xp || 0; } catch (e) {}
    g.coins = (g.coins || 0) + 100 + Math.min(600, Math.round(xp / 8)); g.coinsV = 1; g.shop = g.shop || {};
    try { save(true); } catch (e) {}
  };
  try { inicia(); } catch (e) {}
  var salta = function(n){
    var c = document.querySelector("#stats .px-coin"); if (!c || !n) return;
    var f = document.createElement("i"); f.className = "mo-mas"; f.textContent = "+" + n; c.appendChild(f);
    setTimeout(function(){ f.remove(); }, 1300);
  };
  if (typeof addXP === "function") {
    var ax0 = addXP;
    addXP = function(n){
      var r = ax0.apply(this, arguments);
      try { n = +n || 0; if (n > 0) { var g = G(), m = Math.max(1, Math.round(n / 2)); g.coins = (g.coins || 0) + m; requestAnimationFrame(function(){ capsula(); salta(m); }); } } catch (e) {}
      return r;
    };
  }
  /* la cápsula de la cabecera */
  var capsula = function(){
    var st = document.getElementById("stats"); if (!st) return;
    var c = st.querySelector(".px-coin"), n = miles(saldo());
    if (!c) {
      c = document.createElement("button"); c.type = "button"; c.className = "gpill px-chip px-coin"; c.dataset.view = "tienda"; c.title = "Tus monedas: abre la Tienda";
      var ref = st.querySelector(".px-avatar, .gavatar"); if (ref) st.insertBefore(c, ref); else st.appendChild(c);
    }
    var h = MO + "<b>" + n + "</b>"; if (c.dataset.n !== n) { c.innerHTML = h; c.dataset.n = n; c.setAttribute("aria-label", n + " monedas"); }
  };
  if (typeof renderStats === "function") { var rs0 = renderStats; renderStats = function(){ var r = rs0.apply(this, arguments); try { capsula(); } catch (e) {} return r; }; }

  /* ====================== catálogo ====================== */
  var VENDE = { lvl: 1, xp: 1, streak: 1, dict: 1 };
  var seVende = function(req){ if (!req) return false; for (var k in req) if (!VENDE[k]) return false; return true; };
  var precio = function(req){ return req.lvl ? Math.max(150, Math.round(req.lvl * 30 / 50) * 50) : req.xp ? Math.max(150, Math.round(req.xp / 2 / 50) * 50) : req.streak ? Math.max(150, req.streak * 40) : 150; };
  var marca = function(req, tid){ try { Object.defineProperty(req, "__tid", { value: tid, enumerable: false, configurable: true }); } catch (e) {} };
  var catalogo = function(){
    var o = { acc: [], pel: [], fon: [] };
    try { GITEMS.forEach(function(it){
      var pr = it.req && seVende(it.req) ? precio(it.req) : 0; if (it.req && !pr) { o.acc.push({ k: "it", id: it.id, n: it.n, slot: it.slot, req: it.req, premio: 1 }); return; }
      if (it.req) marca(it.req, "it:" + it.id);
      o.acc.push({ k: "it", id: it.id, n: it.n, slot: it.slot, req: it.req, pr: pr });
    }); } catch (e) {}
    try { GSCARF.forEach(function(s){
      if (s[0] === "sin") return; var req = s[2], pr = req && seVende(req) ? precio(req) : 0; if (req) marca(req, "sc:" + s[0]);
      o.acc.push({ k: "sc", id: s[0], n: "Bufanda " + String(s[1]).toLowerCase(), slot: "neck", req: req, pr: pr });
    }); } catch (e) {}
    try { Object.keys(COATS).forEach(function(c){ o.pel.push({ k: "co", id: c, n: COATS[c].n }); }); } catch (e) {}
    try { GBG.forEach(function(b){ var req = b[1], pr = req && seVende(req) ? precio(req) : 0; if (req) marca(req, "bg:" + b[0]); o.fon.push({ k: "bg", id: b[0], n: (typeof SCENES !== "undefined" && SCENES[b[0]] && SCENES[b[0]].n) || b[0], req: req, pr: pr }); }); } catch (e) {}
    return o;
  };
  /* comprar es otra forma de cumplir el requisito */
  if (typeof reqOk === "function") {
    var rq0 = reqOk;
    reqOk = function(r){ try { if (r && r.__tid && (G().shop || {})[r.__tid]) return true; } catch (e) {} return rq0.apply(this, arguments); };
  }
  var tengo = function(a){ return !a.req || reqOk(a.req); };
  var puesto = function(a){
    var g = G(), c = g.cat || {}, acc = c.acc || {};
    return a.k === "co" ? c.coat === a.id : a.k === "bg" ? c.bg === a.id : a.k === "sc" ? acc.neck === a.id : acc[a.slot] === a.id;
  };
  var gatoCon = function(a){
    var g = G(), c = g.cat || {}, acc = {}, k; for (k in (c.acc || {})) acc[k] = c.acc[k];
    var coat = c.coat;
    if (a.k === "co") coat = a.id; else if (a.k === "sc") acc.neck = a.id; else if (a.k === "it") acc[a.slot] = a.id;
    try { return catSVG({ coat: coat, acc: acc }); } catch (e) { return ""; }
  };

  /* ====================== la vista ====================== */
  var tab = "acc", TABS = [["acc", "Accesorios"], ["pel", "Pelajes"], ["fon", "Fondos"]];
  var ficha = function(a){
    var mio = tengo(a), on = puesto(a), alc = !mio && a.pr && saldo() >= a.pr;
    var est = on ? '<em class="tn-on">Puesto</em>' : mio ? '<em class="tn-mio">Tuyo</em>' : a.premio ? '<em class="tn-pre">' + esc(reqTxt(a.req) || "Premio") + "</em>" : '<em class="tn-pr' + (alc ? "" : " no") + '">' + MO + miles(a.pr) + "</em>";
    var arte = a.k === "bg" ? '<span class="tn-bg" style="background-image:url(img/' + ({ paris: "c-paris", cafe: "c-cafe", biblioteca: "c-libros", montana: "c-montana", playa: "c-playa", universidad: "c-calle" }[a.id] || "c-paris") + '.webp)"></span>' : '<span class="tn-gato">' + gatoCon(a) + "</span>";
    return '<button type="button" class="tn-i' + (on ? " on" : "") + (mio ? " mio" : "") + (a.premio && !mio ? " pre" : "") + '" data-tn="' + a.k + ":" + esc(a.id) + '" aria-label="' + esc(a.n + (on ? " (puesto)" : mio ? " (tuyo)" : a.pr ? ": " + a.pr + " monedas" : "")) + '">' + arte + "<b>" + esc(a.n) + "</b>" + est + "</button>";
  };
  GV.tienda = function(){
    var C = catalogo(), L = C[tab] || [], g = G(), gato = ""; try { gato = catSVG(g.cat); } catch (e) {}
    return '<section class="gview tn"><header class="tn-h gl g2"><span class="tn-yo">' + gato + '</span><div><small>Tienda</small><h1>Viste a tu gato</h1><p>Ganas monedas con cada lección, juego y misión.</p></div><span class="tn-saldo">' + MO + "<b>" + miles(saldo()) + "</b><small>monedas</small></span></header>" +
      '<div class="tn-tabs" role="tablist">' + TABS.map(function(t){ return '<button type="button" role="tab" data-tn-tab="' + t[0] + '" aria-selected="' + (t[0] === tab) + '">' + t[1] + "</button>"; }).join("") + "</div>" +
      '<div class="tn-g">' + L.map(ficha).join("") + "</div>" +
      (tab === "acc" ? '<p class="tn-nota">Lo que desbloqueas por nivel, racha o dictados sigue desbloqueándose igual: comprar solo lo adelanta. Los premios del 1 vs 1 y de PLEX Quiz se ganan jugando.</p>' : "") + "</section>";
  };
  var busca = function(id){ var C = catalogo(), p = id.split(":"), todo = C.acc.concat(C.pel, C.fon); return todo.filter(function(a){ return a.k === p[0] && a.id === p.slice(1).join(":"); })[0]; };
  var guarda = function(){ try { save(true); } catch (e) {} try { pcIndexSync(); } catch (e) {} try { gPush(true); } catch (e) {} };
  var pon = function(a){
    var g = G(); g.cat = g.cat || {}; g.cat.acc = g.cat.acc || {};
    if (a.k === "co") g.cat.coat = a.id;
    else if (a.k === "bg") g.cat.bg = a.id;
    else if (a.k === "sc") g.cat.acc.neck = g.cat.acc.neck === a.id ? "sin" : a.id;
    else if (g.cat.acc[a.slot] === a.id) delete g.cat.acc[a.slot]; else g.cat.acc[a.slot] = a.id;
  };
  var avisa = function(t){ try { toast(t); } catch (e) {} };
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-tn-tab],[data-tn],[data-tn-ok]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    if (b.dataset.tnTab) { tab = b.dataset.tnTab; render(); return; }
    if (b.dataset.tnOk) {
      var c = busca(b.dataset.tnOk), g = G(); try { gCloseModal(); } catch (x) {}
      if (!c || tengo(c) || saldo() < c.pr) return;
      g.coins = saldo() - c.pr; g.shop = g.shop || {}; g.shop[(c.k === "it" ? "it:" : c.k === "sc" ? "sc:" : "bg:") + c.id] = 1; pon(c); guarda();
      try { if (typeof SFX !== "undefined" && SFX.done) SFX.done(); } catch (x) {}
      avisa("¡" + c.n + " es tuyo!"); try { renderStats(); } catch (x) {} render(); return;
    }
    var a = busca(b.dataset.tn); if (!a) return;
    if (tengo(a)) { pon(a); guarda(); try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {} render(); return; }
    if (a.premio) { avisa("Este premio se gana jugando: " + (reqTxt(a.req) || "sigue jugando") + "."); return; }
    if (saldo() < a.pr) { avisa("Te faltan " + miles(a.pr - saldo()) + " monedas. Las ganas con lecciones y juegos."); return; }
    var h = '<div class="tn-conf"><span class="tn-gato g">' + (a.k === "bg" ? "" : gatoCon(a)) + '</span><h2 class="gm-t">' + esc(a.n) + "</h2><p>¿Comprarlo por " + MO + " <b>" + miles(a.pr) + "</b> monedas? Te quedan " + miles(saldo() - a.pr) + '.</p><div class="set-row c"><button class="gbtn ghost" data-g="close">Ahora no</button><button class="gbtn" data-tn-ok="' + esc(b.dataset.tn) + '" data-autofocus>Comprar</button></div></div>';
    try { gModal(h, "m-tn"); } catch (x) { if (confirm("¿Comprar " + a.n + " por " + a.pr + " monedas?")) { b.dataset.tnOk = b.dataset.tn; b.click(); } }
  }, true);

  /* ====================== Inicio: solo lo que sirve ====================== */
  var inicio = function(){
    if (typeof view === "undefined" || view !== "parcours") return;
    var home = document.querySelector("#view .ghome"); if (!home) return;
    var side = home.querySelector(":scope > .gside"), mis = home.querySelector(".plx-miss");
    if (side && mis && mis.parentNode !== side) { var meta = side.querySelector(":scope > .goal-card"); if (meta) meta.insertAdjacentElement("afterend", mis); else side.insertBefore(mis, side.firstChild); }
  };
  var r0 = render;
  render = function(){ var r = r0.apply(this, arguments); try { inicio(); capsula(); } catch (e) {} return r; };
  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { inicio(); } catch (e) {} }); }).observe(document.getElementById("view") || document.body, { childList: true, subtree: true });

  /* ====================== estilos ====================== */
  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var css = [
    ".mo{display:inline-block;width:14px;height:14px;border-radius:50%;flex:none;vertical-align:-2px;background:radial-gradient(circle at 35% 28%,#FFF3B0,#FFD200 55%,#DDA400);box-shadow:inset 0 0 0 1px rgba(160,110,0,.55),0 0 8px rgba(255,210,0,.45)}",
    "#stats .px-coin{cursor:pointer;position:relative;gap:6px!important}#stats .px-coin b{font-weight:700}.mo-mas{position:absolute;right:6px;top:-4px;font:800 .72rem/1 Poppins,system-ui,sans-serif;font-style:normal;color:#C99400;animation:moSube 1.2s ease-out forwards;pointer-events:none}@keyframes moSube{0%{opacity:0;transform:translateY(6px)}20%{opacity:1}100%{opacity:0;transform:translateY(-18px)}}",
    oscuro(".mo-mas", "color:#FFD200"),
    /* ---------- Inicio sin relleno ---------- */
    "#view .ghome .gmain > .rz-card,#view .ghome .gmain > .sk-danger,#view .ghome .gmain > .ix-hoy,#view .ghome .gmain > .av-mapa,#view .ghome .gmain > .ix-para,#view .ghome .gside > .streak-card{display:none!important}",
    /* misiones dentro del panel: sin cajas, una fila por misión */
    "#view .ghome .gside > .plx-miss > *:not(.ms-h){background:none!important;box-shadow:none!important;border:0!important;padding-left:0!important;padding-right:0!important;margin-top:2px!important}",
    /* en el teléfono la cabecera lleva nivel, racha y monedas; el XP total está en el perfil */
    "@media (max-width:560px){html.mk body header#topbar.top .pc-mark{font-size:0!important;gap:0!important;letter-spacing:0!important;flex:none}html.mk body header#topbar.top .pc-mark > :not(img){display:none!important}html.mk body header#topbar.top .pc-mark .mz-logo{width:40px!important;height:40px!important}html.mk body header#topbar.top .topbar-in{gap:6px!important;justify-content:space-between}html.mk body header#topbar.top .topbar-end{flex:1;min-width:0;justify-content:flex-end;gap:5px!important}html.mk body header#topbar.top #stats{flex:1;min-width:0;justify-content:space-evenly;gap:4px!important}html.mk body header#topbar.top #stats .px-crown{display:flex!important}}",
    /* ---------- Tienda ---------- */
    ".tn{display:grid;gap:14px;max-width:880px;margin:0 auto;width:100%}",
    ".tn-h{display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:22px}.tn-yo{flex:none;width:76px;height:76px;display:grid;place-items:center;filter:drop-shadow(0 10px 10px var(--gl-sh))}.tn-yo svg{width:100%;height:100%;display:block}",
    ".tn-h > div{flex:1;min-width:0}.tn-h small{font:600 .68rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.2em;text-transform:uppercase;color:var(--px-acc)}.tn .tn-h h1{margin:3px 0 2px;font:700 clamp(1.25rem,5vw,1.7rem)/1.1 Poppins,system-ui,sans-serif;letter-spacing:-.01em;color:var(--gl-ink)}.tn .tn-h p{margin:0;font:400 .84rem/1.35 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-mut)}",
    ".tn-saldo{flex:none;display:grid;justify-items:center;gap:1px;padding:8px 14px;border-radius:16px;background:linear-gradient(180deg,rgba(255,210,0,.2),rgba(255,210,0,.06));box-shadow:inset 0 0 0 1px rgba(255,210,0,.5)}.tn-saldo .mo{width:18px;height:18px}.tn-saldo b{font:800 1.2rem/1 Poppins,system-ui,sans-serif;color:var(--gl-ink)}.tn-saldo small{letter-spacing:.08em;font-size:.6rem;color:var(--gl-mut)}",
    ".tn-tabs{display:flex;padding:3px;border-radius:14px;background:var(--gl-trk)}.tn-tabs button{all:unset;box-sizing:border-box;cursor:pointer;flex:1;text-align:center;min-height:38px;line-height:38px;border-radius:11px;font:500 .88rem var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-mut);transition:background .18s,color .18s}.tn-tabs button[aria-selected=true]{background:linear-gradient(180deg,var(--gl-3a),var(--gl-3b));color:var(--gl-ink);font-weight:600;box-shadow:inset 0 1px 0 var(--gl-hl),0 4px 10px -6px var(--gl-sh)}",
    ".tn-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}@media (min-width:700px){.tn-g{grid-template-columns:repeat(auto-fill,minmax(132px,1fr))}}",
    ".tn-i{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:grid;justify-items:center;gap:3px;padding:10px 6px 11px;border-radius:18px;text-align:center;background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b));box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd),0 16px 30px -24px var(--gl-sh);transition:transform .18s var(--v4-spring,ease),box-shadow .18s}.tn-i:hover{transform:translateY(-2px)}.tn-i:active{transform:scale(.97)}.tn-i:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".tn-i.on{box-shadow:inset 0 0 0 1.5px #FFD200,0 0 18px -6px rgba(255,210,0,.7)}.tn-i:not(.mio) .tn-gato{filter:saturate(.55) opacity(.82)}.tn-gato{width:74px;height:74px;display:grid;place-items:center}.tn-gato svg{width:100%;height:100%;display:block}.tn-gato.g{width:120px;height:120px;margin:0 auto}",
    ".tn-bg{width:100%;height:74px;border-radius:12px;background-size:cover;background-position:center}.tn-i b{font:600 .82rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-ink)}.tn-i em{font-style:normal;display:inline-flex;align-items:center;gap:4px;font:700 .76rem/1 var(--ev-f,Barlow,system-ui,sans-serif);padding:4px 8px;border-radius:99px}",
    ".tn-pr{color:var(--gl-ink);background:rgba(255,210,0,.16)}.tn-pr.no{opacity:.6}.tn-pr .mo{width:12px;height:12px}.tn-mio{color:#23212C;background:#F1FEC8}.tn-on{color:#0B1F5C;background:#FFD200}.tn-pre{color:var(--gl-mut);background:var(--gl-trk);font-weight:600!important}",
    ".tn-nota{margin:2px 4px 0;font:400 .8rem/1.45 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-mut)}.tn-conf{text-align:center;display:grid;gap:8px}.tn-conf p{margin:0}",
    "@media (max-width:420px){.tn-h{padding:12px}.tn-yo{width:58px;height:58px}.tn .tn-h p{display:none}.tn-saldo{padding:7px 10px}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx91"; st.textContent = css; document.head.appendChild(st);
  window.PLX_TIENDA = { saldo: saldo, catalogo: catalogo };
  try { capsula(); } catch (e) {}
})();
