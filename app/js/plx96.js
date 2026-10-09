/* PLEX PLAY 3.20.0 — Ejercicios: una pregunta, una acción
   Pedido de Jhon: rediseñar los ejercicios, en la línea de la explicación nueva (menos cosas, más claro, más visual).
   Qué cambia en la pantalla de pregunta
   - La frase que hay que resolver es la protagonista (grande); la consigna pasa a ser una línea pequeña encima, sin el
     número, y el «Contexto» deja de ser una caja: es una línea con un filo de color.
   - Se va el cartel de Manzana («À toi !») que ocupaba media pantalla sin aportar a la pregunta.
   - «Ver explicación» deja de ser un botón grande arriba: queda como un botón redondo junto a la consigna y, tras
     responder, como «¿Por qué?» al lado de «Continuar».
   - Opciones, fichas, parejas y huecos comparten una misma pieza: bordes suaves, relieve al pulsar y foco visible.
   - Abajo, una sola acción grande («Verificar»); «No sé» queda como enlace discreto.
   Qué cambia en la corrección
   - Es una hoja que sube desde abajo, verde o roja, con el veredicto grande («¡Correcto!» / «Casi»), la respuesta
     esperada destacada y la explicación corta del profesor. «Reportar un error» pasa a un enlace pequeño.
   No se toca la lógica de ningún ejercicio: solo estilos, y dos botones que reenvían el toque a los que ya existen. */
(function(){
  "use strict";
  var pl = document.getElementById("player"); if (!pl) return;
  var LIBRO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19.500v-15A2.500 2.500 0 0 1 7.500 2H19v15H7.500A2.500 2.500 0 0 0 5 19.500 2.500 2.500 0 0 0 7.500 22H19v-5"/></svg>';
  var ajusta = function(){
    var fase = "", kind = ""; try { if (typeof P !== "undefined" && P && P.steps) { fase = P.phase || ""; kind = (P.steps[P.i] || {}).kind || ""; } } catch (e) {}
    var enEj = kind && kind !== "theory" && fase !== "end";
    pl.classList.toggle("ej", !!enEj); pl.classList.toggle("ej-fb", !!enEj && fase === "feedback"); pl.classList.toggle("ej-fin", fase === "end");
    if (!enEj) return;
    var w = pl.querySelector(".pbody .wrap"); if (!w) return;
    /* «Ver explicación»: botón redondo en la fila de la consigna */
    var tb = w.querySelector(".plx-tools .plx-tbtn"), ask = w.querySelector(":scope > .ask");
    if (tb && ask && !ask.querySelector(".ej-regla")) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ej-regla"; b.dataset.ej = "regla"; b.title = "Ver la regla"; b.setAttribute("aria-label", "Ver la regla"); b.innerHTML = LIBRO;
      ask.appendChild(b);
    }
    /* en la corrección: «¿Por qué?» junto a «Continuar» */
    var pfa = pl.querySelector(".pf .pfa");
    if (pfa && fase === "feedback" && tb && !pfa.querySelector(".ej-porque")) pfa.insertAdjacentHTML("beforeend", '<button type="button" class="btn ej-porque" data-ej="regla">¿Por qué?</button>');   /* va después en el DOM (el primer .btn del pie debe seguir siendo «Continuar») y antes a la vista */
    /* el veredicto, en grande */
    var fb = pl.querySelector(".pf .fb"), pf = pl.querySelector(".pf");
    if (fb && pf && fase === "feedback" && !fb.querySelector(".ej-ver")) {
      var mal = pf.classList.contains("bad"), casi = pf.classList.contains("near") || pf.classList.contains("warn");
      fb.insertAdjacentHTML("afterbegin", '<p class="ej-ver">' + (mal ? "Casi" : casi ? "Casi perfecto" : "¡Correcto!") + "</p>");
      pl.classList.toggle("ej-mal", mal);
    }
  };
  pl.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-ej=regla]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var t = pl.querySelector(".plx-tools .plx-tbtn"); if (t) t.click();
  }, true);
  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { ajusta(); } catch (e) {} }); }).observe(pl, { childList: true, subtree: true });

  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var F = "var(--ev-f,Barlow,system-ui,sans-serif)", PO = "Poppins,system-ui,sans-serif", E = "#player.ej ";
  var css = [
    "#player{--ej-ink:#23212C;--ej-mut:#5E5784;--ej-az:#2F6BFF;--ej-pz:#FFFFFF;--ej-bd:rgba(54,37,92,.16);--ej-rel:rgba(54,37,92,.2);--ej-sel:rgba(47,107,255,.1)}",
    oscuro("#player", "--ej-ink:#F6F4FF;--ej-mut:#B9B0DC;--ej-az:#8FB4FF;--ej-pz:rgba(210,195,246,.08);--ej-bd:rgba(210,195,246,.2);--ej-rel:rgba(0,0,0,.4);--ej-sel:rgba(143,180,255,.16)"),
    /* ---------- la pregunta ---------- */
    E + ".plx-tools,#player.ej .m-ill{display:none!important}",
    E + ".pbody .wrap{display:flex;flex-direction:column;gap:14px;padding-top:6px}" + E + ".pbody .wrap > *{margin-top:0!important;margin-bottom:0!important}",
    E + ".ask{display:block;position:relative;min-height:34px;padding:8px 46px 0 0!important;margin:0!important;font:600 .82rem/1.35 " + F + "!important;letter-spacing:.04em;color:var(--ej-mut)!important}" + E + ".ask .m-n{display:none!important}",
    ".ej-regla{all:unset;box-sizing:border-box;cursor:pointer;position:absolute;right:0;top:0;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:var(--ej-az);box-shadow:inset 0 0 0 1.5px var(--ej-bd);transition:background .15s}.ej-regla svg{width:17px;height:17px}.ej-regla:hover{background:var(--ej-sel)}.ej-regla:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    E + ".ctx{background:none!important;border:0!important;box-shadow:none!important;border-radius:0!important;padding:2px 0 2px 12px!important;border-left:3px solid var(--ej-az)!important}" + E + ".ctx > span{font:700 .64rem/1.2 " + F + "!important;letter-spacing:.16em;text-transform:uppercase;color:var(--ej-az)!important}" + E + ".ctx p{margin:2px 0 0!important;font:400 .95rem/1.4 " + F + "!important;color:var(--ej-mut)!important}",
    E + ".q{font:700 clamp(1.3rem,5.4vw,1.75rem)/1.28 " + PO + "!important;letter-spacing:-.01em;color:var(--ej-ink)!important}" + E + ".q .slot{border-bottom:3px solid var(--ej-az)!important;min-width:64px;display:inline-block}" + E + ".q .slot.good{color:#12A150!important;border-bottom-color:#12A150!important}",
    E + ".note{font:400 .84rem/1.4 " + F + "!important;color:var(--ej-mut)!important}",
    /* ---------- una misma pieza para opciones, fichas y parejas ---------- */
    E + ".opts{display:grid;gap:10px}",
    E + ".opt," + E + ".mbtn," + E + ".tok," + E + ".chipb," + E + ".dtok{border-radius:16px!important;background:var(--ej-pz)!important;color:var(--ej-ink)!important;border:0!important;box-shadow:inset 0 0 0 1.5px var(--ej-bd),0 3px 0 var(--ej-rel)!important;font-family:" + F + "!important;font-weight:600!important;transition:transform .12s,box-shadow .12s,background .12s}",
    E + ".opt:not(:disabled):active," + E + ".mbtn:not(:disabled):active," + E + ".tok:active," + E + ".chipb:active{transform:translateY(3px);box-shadow:inset 0 0 0 1.5px var(--ej-bd)!important}",
    E + ".opt{min-height:60px;padding:12px 16px!important;font-size:1.06rem!important}" + E + ".opt .k{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;flex:none;font:700 .8rem/1 " + PO + ";background:var(--ej-sel)!important;color:var(--ej-az)!important;box-shadow:none!important}",
    E + ".opt.sel," + E + ".opt[aria-pressed=true]," + E + ".opt[aria-checked=true]," + E + ".mbtn.sel," + E + ".mbtn.on," + E + ".tok.sel," + E + ".chipb.sel{background:var(--ej-sel)!important;box-shadow:inset 0 0 0 2px var(--ej-az),0 3px 0 var(--ej-az)!important}",
    E + ".opt.ok," + E + ".mbtn.ok," + E + ".tok.ok," + E + ".chipb.ok," + E + ".dtok.ok{background:rgba(18,161,80,.12)!important;box-shadow:inset 0 0 0 2px #12A150!important;color:#0B5F2F!important}",
    E + ".opt.ko," + E + ".mbtn.ko," + E + ".tok.ko," + E + ".chipb.ko," + E + ".dtok.ko{background:rgba(229,72,77,.1)!important;box-shadow:inset 0 0 0 2px #E5484D!important;color:#A51D22!important}",
    oscuro(E + ".opt.ok," + E + ".mbtn.ok," + E + ".tok.ok," + E + ".chipb.ok," + E + ".dtok.ok", "color:#C9F7DA!important"), oscuro(E + ".opt.ko," + E + ".mbtn.ko," + E + ".tok.ko," + E + ".chipb.ko," + E + ".dtok.ko", "color:#FFC2C4!important"),
    E + ".opt:focus-visible," + E + ".mbtn:focus-visible," + E + ".tok:focus-visible," + E + ".chipb:focus-visible{outline:2px solid #FFD200!important;outline-offset:2px}",
    E + "input.fill," + E + ".pbody textarea{border-radius:16px!important;background:var(--ej-pz)!important;color:var(--ej-ink)!important;border:0!important;box-shadow:inset 0 0 0 1.5px var(--ej-bd)!important;font:600 1.2rem/1.3 " + F + "!important;padding:16px 18px!important;min-height:58px}" + E + "input.fill:focus," + E + ".pbody textarea:focus{outline:none!important;box-shadow:inset 0 0 0 2px var(--ej-az),0 0 0 4px var(--ej-sel)!important}",
    /* ---------- el pie: una acción ---------- */
    E + ".pf{background:none!important;box-shadow:none!important;border:0!important}" + E + ".pf .pfa{display:flex!important;gap:12px;align-items:center}",
    E + ".pf .pfa .btn{min-height:54px!important;border-radius:16px!important;font:700 1rem/1 " + PO + "!important}" + E + ".pf .pfa .btn:not(.line):not(.ej-porque){flex:1 1 auto!important}",
    E + ".pf .pfa .btn.line{flex:none!important;width:auto!important;min-width:0!important;padding:0 12px!important;background:none!important;box-shadow:none!important;border:0!important;color:var(--ej-mut)!important;font:600 .9rem/1 " + F + "!important;text-decoration:underline;text-underline-offset:4px}",
    /* ---------- la corrección: hoja que sube ---------- */
    "#player.ej-fb .pf{border-radius:26px 26px 0 0!important;padding-top:6px;background:rgba(214,247,227,.97)!important;box-shadow:0 -18px 40px -22px rgba(14,26,58,.5),inset 0 1px 0 rgba(255,255,255,.7)!important;animation:ejSube .28s cubic-bezier(.2,.9,.3,1.15) both}@keyframes ejSube{from{transform:translateY(40px);opacity:0}}",
    "#player.ej-fb.ej-mal .pf,#player.ej-fb .pf.bad{background:rgba(255,226,226,.97)!important}",
    oscuro("#player.ej-fb .pf", "background:rgba(18,58,40,.97)!important;box-shadow:0 -18px 40px -22px #000,inset 0 1px 0 rgba(255,255,255,.12)!important"), oscuro("#player.ej-fb.ej-mal .pf,#player.ej-fb .pf.bad", "background:rgba(74,24,32,.97)!important"),
    "#player.ej-fb .pf .fb{background:none!important;border:0!important;box-shadow:none!important;padding:8px 0 4px!important;margin:0!important;display:grid;gap:6px}",
    ".ej-ver{margin:0!important;font:800 1.5rem/1.1 " + PO + "!important;color:#0E7C3D!important}#player.ej-mal .ej-ver,#player .pf.bad .ej-ver{color:#C4282D!important}", oscuro(".ej-ver", "color:#7BE3A4!important"), oscuro("#player.ej-mal .ej-ver,#player .pf.bad .ej-ver", "color:#FF9A9D!important"),
    "#player.ej-fb .pf .fb h4{display:none!important}#player.ej-fb .pf .fb::before,#player.ej-fb .pf .fb::after{display:none!important}#player.ej-fb .pf .fb > :not(.ej-ver):not(.exp):not(p):not(.pf-fbp):not(div){display:none!important}",
    "#player.ej-fb .pf .fb .exp{margin:0!important;font:700 1.08rem/1.3 " + PO + "!important;color:var(--ej-ink)!important}#player.ej-fb .pf .fb p:not(.ej-ver):not(.exp){margin:0!important;font:400 .95rem/1.42 " + F + "!important;color:var(--ej-ink)!important;opacity:.9}",
    "#player.ej-fb .pf .pf-fbp{display:flex;align-items:center;gap:9px;background:none!important;box-shadow:none!important;border:0!important;padding:0!important;order:5;margin-top:2px!important}#player.ej-fb .pf .pf-fbp .pf-img{width:34px!important;height:34px!important}#player.ej-fb .pf .pf-fbp span{font:400 .84rem/1.3 " + F + ";color:var(--ej-mut)}#player.ej-fb .pf .pf-fbp b{display:inline;margin-right:5px;color:var(--ej-ink)}",
    "#player.ej.ej-fb .pf .pfa .btn.ej-porque{order:-1;flex:0 0 auto!important;width:auto!important;padding:0 18px!important;background:transparent!important;background-image:none!important;color:var(--ej-ink)!important;box-shadow:inset 0 0 0 1.5px var(--ej-bd)!important;font:600 .95rem/1 " + F + "!important}",
    "#player.ej-fb .pf .rep-link{display:block;margin:6px auto 0!important;font:400 .74rem/1.2 " + F + "!important;color:var(--ej-mut)!important;opacity:.85}",
    "#player:not(.ej-fb) .pf .ej-porque{display:none!important}",
    /* ---------- final de la lección: aire y jerarquía ---------- */
    "#player.ej-fin .pbody .wrap{display:grid;gap:16px}#player.ej-fin .av-fin h3,#player.ej-fin .plx-endx h3{font:700 1rem/1.2 " + PO + "!important;text-align:left!important;margin:6px 2px 8px!important}",
    "@media (prefers-reduced-motion:reduce){#player.ej-fb .pf{animation:none}}",
    /* ---------- escritorio ---------- */
    "@media (min-width:1024px){" + E + ".opts{grid-template-columns:repeat(2,minmax(0,1fr))}" + E + ".opt{min-height:72px;font-size:1.12rem!important}" + E + ".opt:not(:disabled):hover," + E + ".mbtn:not(:disabled):hover," + E + ".tok:hover{transform:translateY(-2px)}" + E + ".q{font-size:1.9rem!important}#player.ej-fb .pf{border-radius:26px!important;margin:0 auto 14px;max-width:820px;padding-left:22px!important;padding-right:22px!important}}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx96"; st.textContent = css; document.head.appendChild(st);
  try { ajusta(); } catch (e) {}
})();
