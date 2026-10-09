/* PLEX PLAY 3.19.0 — Cómo se explica una lección: Mira → La regla → Ojo → Comprueba
   Jhon: «sigue sin gustarme la manera en la que está explicado; busca los mejores métodos para una app como la mía».
   Lo que se aplica (y de dónde sale):
   - Ejemplos antes que reglas. Las apps que mejor retienen (Duolingo lo describe así) enseñan la gramática primero
     dentro de frases y dejan la regla como apoyo breve; el «descubrimiento guiado» apunta a lo mismo: notar el patrón
     antes de que te lo digan ayuda a recordarlo.
   - Una idea por pantalla y poco texto (segmentar baja la carga): la regla es una frase y, como mucho, cinco pasos.
   - Contraste con el español: el error típico de un hispanohablante, lado a lado con la forma correcta.
   - Comprobar enseguida, con respuesta inmediata: una pregunta de dos opciones antes de los ejercicios.
   - Siempre en español y con el profesor de la lección como guía; el francés, grande y con audio.
   Todo sale de window.__EXPLICA (190 lecciones: idea, pasos, ejemplos y «ojo»), así que vale para todas sin escribir
   contenido nuevo. La teoría larga en francés (lo esencial, reglas, método, ejemplos comentados) no se borra: queda
   plegada en «Explicación completa», en la última tarjeta. Sin datos en __EXPLICA, la lección usa las tarjetas de 3.18. */
(function(){
  "use strict";
  var pl = document.getElementById("player"); if (!pl) return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var paso = 0, leccion = null, total = 0, pedido = 0;
  var TIT = { mira: "Mira y escucha", regla: "La regla", ojo: "Ojo", prueba: "Comprueba", vista: "De un vistazo", ess: "Lo esencial", facil: "Te lo explico fácil", todo: "La explicación" };
  var ALTAVOZ = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9.5h3.5L11 6v12l-4.500-3.500H3zM15 9a4 4 0 0 1 0 6M17.800 6.200a8 8 0 0 1 0 11.600"/></svg>';
  var enTeoria = function(){ try { return typeof P !== "undefined" && P && P.steps && P.steps[P.i] && P.steps[P.i].kind === "theory"; } catch (e) { return false; } };
  var slide = function(k){ var d = document.createElement("section"); d.className = "tx-s"; d.dataset.k = k; d.innerHTML = '<p class="tx-k"></p>'; return d; };
  var decir = function(t){ return String(t).replace(/\([^)]*\)/g, " ").replace(/[…_]+/g, " ").replace(/\s+\/\s+/g, ". ").replace(/\s+/g, " ").trim(); };
  var prof = function(id){
    try { var p = PROF.forKey(id), d = PROF.list[p]; return { img: "img/pf2/pf-" + p + "-g1.webp", cara: "img/pf2/pf-" + p + "-e1.webp", n: d.name }; } catch (e) { return null; }
  };
  /* un paso «cuándo → qué»: la condición arriba y el resultado destacado */
  var pasoHTML = function(t, i){
    /* una sola flecha separa condición y resultado; con varias es una secuencia y se deja entera */
    var p = String(t).split(/\s*→\s*/), a = p.length === 2 ? p[0] : String(t), b = p.length === 2 ? p[1] : "";
    return '<li><i>' + (i + 1) + "</i><span>" + (b ? "<small>" + esc(a) + "</small><b>" + esc(b) + "</b>" : "<b class=\"solo\">" + esc(a) + "</b>") + "</span></li>";
  };
  var hash = function(s){ var h = 0; s = String(s); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };

  /* ---------- el recorrido nuevo, con los datos de __EXPLICA ---------- */
  var nuevo = function(w, th, id, X){
    var S = [], pf = prof(id), s;
    var quien = function(t){ return '<div class="tx-prof">' + (pf ? '<img src="' + pf.cara + '" alt="" decoding="async">' : "") + "<p>" + (pf ? "<b>" + esc(pf.n) + "</b>" : "") + t + "</p></div>"; };
    var hayAudio = false; try { hayAudio = typeof AUDIO !== "undefined" && !!AUDIO["e:" + id]; } catch (e) {}
    /* 1. Mira y escucha: los ejemplos primero */
    s = slide("mira");
    var disp = w.querySelector(":scope > .disp"); if (disp) s.appendChild(disp);
    s.insertAdjacentHTML("beforeend", quien("Antes de la regla, mira estos ejemplos y escúchalos.") +
      '<div class="tx-ejs">' + (X.ej || []).map(function(e){ return '<button type="button" class="tx-ej" data-psay="' + esc(decir(e[0])) + '" aria-label="Escuchar: ' + esc(e[0]) + '"><span class="tx-au">' + ALTAVOZ + '</span><span><b lang="fr">' + esc(e[0]) + "</b><small>" + esc(e[1]) + "</small></span></button>"; }).join("") + "</div>");
    var gl = w.querySelector(":scope > .glance"); if (gl) s.appendChild(gl);
    S.push(s);
    /* 2. La regla: una frase y sus pasos */
    s = slide("regla");
    s.insertAdjacentHTML("beforeend", '<div class="tx-idea">' + (pf ? '<img src="' + pf.img + '" alt="" decoding="async">' : "") + "<p>" + esc(X.idea) + "</p></div>" +
      (hayAudio ? '<button type="button" class="tx-oir" data-pxa="' + esc(id) + '">' + ALTAVOZ + " Escuchar la explicación</button>" : "") +
      '<ol class="tx-pasos-l">' + (X.pasos || []).map(pasoHTML).join("") + "</ol>");
    S.push(s);
    /* 3. Ojo: el error típico junto a la forma correcta */
    var ojo = X.ojo && X.ojo[0] && X.ojo[1] ? X.ojo : null;
    if (ojo) {
      s = slide("ojo");
      s.insertAdjacentHTML("beforeend", quien("Este es el error más común de quienes hablamos español.") +
        '<div class="tx-vs"><div class="tx-no"><small>No digas</small><b lang="fr">' + esc(ojo[0]) + '</b></div><div class="tx-si"><small>Di</small><b lang="fr">' + esc(ojo[1]) + '</b><button type="button" class="tx-au" data-psay="' + esc(decir(ojo[1])) + '" aria-label="Escuchar">' + ALTAVOZ + "</button></div></div>" +
        (ojo[2] ? '<p class="tx-porque"><b>Por qué:</b> ' + esc(ojo[2]) + "</p>" : ""));
      S.push(s);
      /* 4. Comprueba: la misma pareja, ahora eliges tú */
      s = slide("prueba");
      var ops = [[ojo[1], 1], [ojo[0], 0]]; if (hash(id) % 2) ops.reverse();
      s.insertAdjacentHTML("beforeend", '<h3 class="tx-q">¿Cuál es la correcta?</h3><div class="tx-ops">' + ops.map(function(o){ return '<button type="button" class="tx-op" data-tx-op="' + o[1] + '" lang="fr">' + esc(o[0]) + "</button>"; }).join("") + '</div><p class="tx-res" role="status" hidden></p>');
      s.dataset.porque = ojo[2] || "";
      S.push(s);
    }
    /* la teoría larga, plegada al final */
    var det = document.createElement("details"); det.className = "tx-mas"; det.innerHTML = "<summary>Explicación completa<small>Lo esencial, las reglas, el método y más ejemplos</small></summary>";
    var pc = w.querySelector(":scope > .lx-pcard"); if (pc) det.appendChild(pc);
    [].forEach.call(th.querySelectorAll(":scope > .tsec"), function(t){ t.classList.add("closed"); });
    det.appendChild(th); S[S.length - 1].appendChild(det);
    return S;
  };
  /* ---------- sin datos: las tarjetas de 3.18 con los bloques que pinta la app ---------- */
  var viejo = function(w, th){
    var S = [], pon = function(k, nodos){ nodos = nodos.filter(Boolean); if (!nodos.length) return; var s = slide(k); nodos.forEach(function(n){ s.appendChild(n); }); S.push(s); };
    var ess = th.querySelector(":scope > .plx-ess"), facil = th.querySelector(":scope > .plx-simple"), ojo = [].slice.call(th.querySelectorAll(":scope > .tsec.k-warn"));
    pon("vista", [w.querySelector(":scope > .disp"), w.querySelector(":scope > .lx-pcard"), w.querySelector(":scope > .glance")]);
    if (ess) pon("ess", [ess]);
    if (facil) pon("facil", [facil]);
    if (ojo.length && (ess || facil)) { ojo.forEach(function(o){ o.classList.remove("closed"); }); pon("ojo", ojo); }
    if (!ess && !facil) pon("todo", [th]);
    else if (th.children.length) {
      var det = document.createElement("details"); det.className = "tx-mas"; det.innerHTML = "<summary>Explicación completa<small>Las reglas, el método y los ejemplos comentados</small></summary>";
      [].forEach.call(th.querySelectorAll(":scope > .tsec"), function(t){ t.classList.add("closed"); });
      det.appendChild(th); S[S.length - 1].appendChild(det);
    }
    return S;
  };
  var arma = function(){
    if (!enTeoria()) { pl.classList.remove("tx", "tx-fin", "tx-ini"); return; }
    var w = pl.querySelector(".pbody .wrap"); if (!w || w.classList.contains("tx-on")) return;
    var th = w.querySelector("#theory"); if (!th) return;
    var id = ""; try { id = (P.lesson && P.lesson.id) || ""; } catch (e) {}
    if (id !== leccion) { leccion = id; paso = 0; }
    var X = id && window.__EXPLICA && window.__EXPLICA[id];
    /* explica.js se baja a demanda y plx37 la da por cargada si ya hay más de 50 fichas (las de «Primeros pasos» bastan):
       si falta la de esta lección, se pide aquí y se arma cuando llegue (o con lo que haya, si no hay conexión) */
    if (id && !X && !pedido) {
      pedido = 1; pl.classList.add("tx-espera");
      var sc = document.createElement("script"); sc.src = "explica.js"; sc.onload = sc.onerror = function(){ pedido = 2; pl.classList.remove("tx-espera"); try { arma(); } catch (e) {} };
      document.head.appendChild(sc); return;
    }
    if (pedido === 1) return;
    var S = X && (X.ej || []).length && X.idea ? nuevo(w, th, id, X) : viejo(w, th);
    if (!S.length) return;
    total = S.length; if (paso >= total) paso = total - 1;
    var cab = document.createElement("div"); cab.className = "tx-cab";
    cab.innerHTML = '<div class="tx-pasos" role="tablist" aria-label="Partes de la explicación">' + S.map(function(s, i){ return '<button type="button" class="tx-p" data-tx="' + i + '" role="tab" aria-label="' + TIT[s.dataset.k] + '"></button>'; }).join("") + '</div><button type="button" class="tx-saltar" data-tx="saltar">Ir a los ejercicios</button>';
    w.insertBefore(cab, w.firstChild);
    S.forEach(function(s, i){ s.querySelector(".tx-k").textContent = (i + 1) + " de " + total + " · " + TIT[s.dataset.k]; w.appendChild(s); });
    w.classList.add("tx-on"); pl.classList.add("tx");
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
    var o = e.target.closest && e.target.closest("[data-tx-op]");
    if (o) {
      e.preventDefault(); e.stopPropagation();
      var s = o.closest(".tx-s"), bien = o.dataset.txOp === "1", res = s.querySelector(".tx-res");
      [].forEach.call(s.querySelectorAll(".tx-op"), function(b){ b.disabled = true; b.classList.add(b.dataset.txOp === "1" ? "ok" : "ko"); });
      o.classList.add("eleg");
      res.hidden = false; res.className = "tx-res " + (bien ? "ok" : "ko");
      res.innerHTML = "<b>" + (bien ? "¡Eso es!" : "Casi. La correcta es la otra.") + "</b> " + esc(s.dataset.porque || "");
      try { if (typeof SFX !== "undefined") (bien ? SFX.ok : SFX.ko)(); } catch (x) {}
      return;
    }
    var b = e.target.closest && e.target.closest("[data-tx]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var a = b.dataset.tx;
    if (a === "saltar") { var go = pl.querySelector(".pf [data-next]"); if (go) go.click(); return; }
    if (a === "sig") paso = Math.min(total - 1, paso + 1); else if (a === "atras") paso = Math.max(0, paso - 1); else paso = Math.max(0, Math.min(total - 1, +a || 0));
    try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
    muestra();
  }, true);
  /* literatura (plx76): su introducción se inserta antes de #theory, que ahora vive plegado; va en la primera tarjeta.
     Y el glosario se marca una sola vez por pintada: se le pide que vuelva a marcar sobre las tarjetas nuevas. */
  var lit = function(){
    var w = pl.querySelector(".pbody .wrap.tx-on"); if (!w) return;
    var intro = w.querySelector(".lit-in"), s0 = w.querySelector(":scope > .tx-s");
    if (intro && s0 && intro.parentNode !== s0) s0.appendChild(intro);
    var c = pl.querySelector(".pbody"); if (c && c.dataset.litG && !w.dataset.txLit) { w.dataset.txLit = "1"; delete c.dataset.litG; c.appendChild(document.createComment("")); }
  };
  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { arma(); lit(); } catch (e) {} }); }).observe(pl, { childList: true, subtree: true });

  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var F = "var(--ev-f,Barlow,system-ui,sans-serif)", PO = "Poppins,system-ui,sans-serif";
  var css = [
    "#player{--tx-ink:#23212C;--tx-mut:#5E5784;--tx-az:#2F6BFF;--tx-sup:rgba(47,107,255,.07);--tx-bd:rgba(47,107,255,.16);--tx-hair:rgba(54,37,92,.14)}",
    oscuro("#player", "--tx-ink:#F6F4FF;--tx-mut:#B9B0DC;--tx-az:#8FB4FF;--tx-sup:rgba(210,195,246,.08);--tx-bd:rgba(210,195,246,.18);--tx-hair:rgba(255,255,255,.14)"),
    /* cabecera del recorrido */
    "#player.tx-espera .pbody .wrap{visibility:hidden}",
    "#player .tx-cab{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:2px 0 14px}.tx-pasos{display:flex;gap:6px;flex:1;max-width:240px}",
    ".tx-p{all:unset;box-sizing:border-box;cursor:pointer;flex:1;height:6px;border-radius:9px;background:var(--tx-hair);transition:background .2s}.tx-p.ya{background:#2F6BFF}.tx-p.on{background:#FFD200;box-shadow:0 0 8px rgba(255,210,0,.7)}.tx-p:focus-visible{outline:2px solid #2F6BFF;outline-offset:3px}",
    ".tx-saltar{all:unset;cursor:pointer;font:600 .8rem/1 " + F + ";color:var(--tx-az);padding:8px 2px;white-space:nowrap}",
    "#player .tx-s{display:grid;gap:14px;animation:txEntra .28s ease both;color:var(--tx-ink)}#player .tx-s[hidden]{display:none}@keyframes txEntra{from{opacity:0;transform:translateX(14px)}}",
    "#player .tx-k{margin:0;font:600 .7rem/1.2 " + F + ";letter-spacing:.18em;text-transform:uppercase;color:var(--tx-az)}",
    "#player .tx-s > .disp{margin:0!important;font-size:clamp(1.45rem,5.6vw,2rem)!important;line-height:1.1!important}#player .tx-s > .glance{margin:0!important}",
    /* el profesor guía, en una línea */
    ".tx-prof{display:flex;align-items:center;gap:11px}.tx-prof img{flex:none;width:46px;height:46px;border-radius:50%;object-fit:cover;object-position:top;background:var(--tx-sup);box-shadow:0 0 0 2px var(--tx-bd)}#player .tx-prof p{margin:0;font:400 .95rem/1.4 " + F + ";color:var(--tx-mut)}.tx-prof b{display:block;font:700 .82rem/1.2 " + PO + ";color:var(--tx-ink)}",
    /* 1. ejemplos: el francés grande, tocar para oír */
    ".tx-ejs{display:grid;gap:10px}.tx-ej{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:13px;padding:14px 16px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);transition:transform .15s,box-shadow .15s}.tx-ej:hover{transform:translateY(-1px)}.tx-ej:active{transform:scale(.985)}.tx-ej:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".tx-au{all:unset;box-sizing:border-box;cursor:pointer;flex:none;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#2F6BFF;color:#fff;box-shadow:0 8px 14px -8px rgba(47,107,255,.9)}.tx-au svg{width:20px;height:20px}",
    ".tx-ej > span:last-child{display:grid;gap:3px;min-width:0}.tx-ej b{font:700 1.14rem/1.25 " + PO + ";color:var(--tx-ink)}.tx-ej small{font:400 .88rem/1.3 " + F + ";color:var(--tx-mut)}",
    /* 2. la regla */
    ".tx-idea{display:flex;align-items:flex-end;gap:4px;padding:16px 16px 0 6px;border-radius:20px;background:linear-gradient(135deg,#3B78FF 0,#2F6BFF 50%,#36255C 135%);box-shadow:inset 0 1px 0 rgba(255,255,255,.3),0 18px 30px -20px rgba(47,107,255,.9);overflow:hidden}.tx-idea img{flex:none;width:92px;height:auto;align-self:flex-end;filter:drop-shadow(0 6px 8px rgba(0,0,0,.25))}#player .tx-idea p{margin:0 0 16px;font:600 1.08rem/1.38 " + PO + ";color:#fff}",
    ".tx-oir{all:unset;box-sizing:border-box;cursor:pointer;justify-self:start;display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border-radius:99px;font:600 .82rem/1 " + F + ";color:var(--tx-az);box-shadow:inset 0 0 0 1px var(--tx-bd)}.tx-oir svg{width:16px;height:16px}",
    "#player .tx-pasos-l{list-style:none;margin:0;padding:0;display:grid;gap:9px}#player .tx-pasos-l li{display:flex;gap:12px;align-items:flex-start;margin:0;padding:13px 14px;border-radius:16px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}#player .tx-pasos-l li::before{display:none!important}",
    ".tx-pasos-l i{flex:none;width:26px;height:26px;border-radius:9px;display:grid;place-items:center;background:#2F6BFF;color:#fff;font:700 .82rem/1 " + PO + ";font-style:normal}.tx-pasos-l span{display:grid;gap:3px;min-width:0}.tx-pasos-l small{font:400 .86rem/1.35 " + F + ";color:var(--tx-mut)}.tx-pasos-l b{font:600 1.02rem/1.35 " + F + ";color:var(--tx-ink)}.tx-pasos-l b.solo{font-weight:500}",
    /* 3. ojo: lado a lado */
    ".tx-vs{display:grid;gap:10px}@media (min-width:560px){.tx-vs{grid-template-columns:repeat(2,minmax(0,1fr))}}.tx-no,.tx-si{position:relative;display:grid;gap:5px;padding:15px 16px;border-radius:18px}.tx-vs small{font:700 .68rem/1.2 " + F + ";letter-spacing:.16em;text-transform:uppercase}.tx-vs b{font:700 1.12rem/1.3 " + PO + "}",
    ".tx-no{background:rgba(229,72,77,.09);box-shadow:inset 0 0 0 1px rgba(229,72,77,.3)}.tx-no small{color:#C4282D}.tx-no b{color:#A51D22;text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:rgba(229,72,77,.7)}",
    ".tx-si{background:rgba(18,161,80,.1);box-shadow:inset 0 0 0 1px rgba(18,161,80,.34);padding-right:66px}.tx-si small{color:#0E7C3D}.tx-si b{color:#0B5F2F}.tx-si .tx-au{position:absolute;right:13px;top:50%;transform:translateY(-50%);background:#12A150;box-shadow:none}",
    oscuro(".tx-no small", "color:#FF9A9D"), oscuro(".tx-no b", "color:#FFC2C4"), oscuro(".tx-si small", "color:#7BE3A4"), oscuro(".tx-si b", "color:#C9F7DA"),
    "#player .tx-porque{margin:0;padding:13px 15px;border-radius:16px;font:400 .98rem/1.45 " + F + ";color:var(--tx-ink);background:#F1FEC8;box-shadow:inset 0 0 0 1px rgba(120,150,40,.3)}", oscuro("#player .tx-porque", "background:rgba(241,254,200,.1);box-shadow:inset 0 0 0 1px rgba(241,254,200,.24)"),
    /* 4. comprueba */
    "#player .tx-q{margin:6px 0 0;font:700 1.3rem/1.2 " + PO + ";color:var(--tx-ink)}.tx-ops{display:grid;gap:10px}.tx-op{all:unset;box-sizing:border-box;cursor:pointer;padding:17px 18px;border-radius:18px;font:700 1.1rem/1.3 " + PO + ";color:var(--tx-ink);background:var(--tx-sup);box-shadow:inset 0 0 0 1.5px var(--tx-bd),0 4px 0 var(--tx-bd);transition:transform .12s}.tx-op:not(:disabled):hover{transform:translateY(-1px)}.tx-op:not(:disabled):active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--tx-bd)}.tx-op:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".tx-op.ok{background:rgba(18,161,80,.14);box-shadow:inset 0 0 0 2px #12A150}.tx-op.ko{opacity:.6}.tx-op.ko.eleg{opacity:1;background:rgba(229,72,77,.12);box-shadow:inset 0 0 0 2px #E5484D;text-decoration:line-through}",
    "#player .tx-res{margin:0;padding:13px 15px;border-radius:16px;font:400 .98rem/1.45 " + F + ";color:var(--tx-ink)}.tx-res.ok{background:rgba(18,161,80,.12)}.tx-res.ko{background:rgba(255,210,0,.16)}.tx-res b{font-weight:700}",
    /* versión 3.18 (sin datos) */
    "#player .tx-s > .lx-pcard,#player .tx-s > .plx-ess,#player .tx-s > .plx-simple,#player .tx-s > .tsec{margin:0!important}",
    /* explicación completa, plegada */
    ".tx-mas{margin-top:8px;border-radius:16px;box-shadow:inset 0 0 0 1px var(--tx-hair)}.tx-mas > summary{cursor:pointer;list-style:none;display:grid;gap:2px;padding:14px 44px 14px 16px;position:relative;font:600 .95rem/1.2 " + F + ";color:var(--tx-ink)}.tx-mas > summary::-webkit-details-marker{display:none}",
    ".tx-mas > summary small{font-weight:400;font-size:.8rem;color:var(--tx-mut)}.tx-mas > summary::after{content:'';position:absolute;right:18px;top:50%;width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-70%) rotate(45deg);transition:transform .2s}.tx-mas[open] > summary::after{transform:translateY(-30%) rotate(-135deg)}",
    ".tx-mas > .lx-pcard{margin:0 12px 10px!important}.tx-mas > #theory{padding:0 12px 12px;display:grid;gap:10px}.tx-mas #theory > .plx-simple{display:none!important}",
    /* pie */
    "#player.tx .pf .pfa{display:flex!important;gap:10px}#player.tx .pf .tx-sig,#player.tx .pf .pfa [data-next]{flex:1 1 auto!important;width:auto!important;max-width:none!important;white-space:nowrap}",
    "#player.tx .pf .tx-atras{flex:0 0 52px!important;width:52px!important;min-width:0!important;padding:0!important;font-size:1.4rem;background:none!important;color:var(--tx-ink)!important;box-shadow:inset 0 0 0 1.5px var(--tx-hair)!important}",
    "#player.tx:not(.tx-fin) .pf [data-next]{display:none!important}#player.tx.tx-fin .pf .tx-sig{display:none!important}#player.tx.tx-ini .pf .tx-atras{display:none!important}",
    "#player:not(.tx) .pf .tx-sig,#player:not(.tx) .pf .tx-atras{display:none!important}",
    "@media (prefers-reduced-motion:reduce){#player .tx-s{animation:none}}",
    "@media (min-width:1024px){.tx-ejs{grid-template-columns:repeat(2,minmax(0,1fr))}#player .tx-pasos-l{grid-template-columns:repeat(2,minmax(0,1fr))}.tx-ops{grid-template-columns:repeat(2,minmax(0,1fr))}.tx-idea img{width:120px}#player .tx-idea p{font-size:1.25rem}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx95"; st.textContent = css; document.head.appendChild(st);
  try { arma(); } catch (e) {}
})();
