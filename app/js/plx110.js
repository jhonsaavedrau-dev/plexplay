/* PLEX PLAY 4.37 — Práctica por dentro: cada función con su color y su icono, y las pantallas interiores en el sistema
   de fichas de la app (pedido de Jhon: «revisa por dentro y rediséñalo más atractivo, apegado al nuevo diseño»).

   Cómo funciona: tras cada pintada, #view lleva data-h10="<función>". Para esa función se redefinen, SOLO dentro de la
   vista, los tokens azules del sistema (--p-azul-btn, --p-azul-r, --p-azul-tx, --p-azul-p y --pz-cara…): así los
   botones, chips elegidos, barras y enlaces toman el color de la función sin tocar las piezas globales (la capa pz no se
   puede pisar desde p5; sí se le pueden cambiar las variables). Nada de carteles con degradado: superficies del sistema,
   placas de color con icono y acentos, como en la 4.32.

   Solo decora lo que ya pinta la app. CSS en @layer p5. Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document;
  if (typeof render !== "function") return;
  var vista = function(){ try { return view; } catch (e) { return ""; } };

  /* función → [color, icono de img/ic2] */
  var F = {
    dictee:     ["#2760EE", "audifonos"],
    signes:     ["#7B4DF0", "lapiz"],
    sonidos:    ["#0B7F86", "nota"],
    sonido:     ["#0B7F86", "nota"],
    oral:       ["#D92F5F", "microfono"],
    oralp:      ["#D92F5F", "microfono"],
    tutor:      ["#2760EE", "amigos"],
    lecturas:   ["#12853C", "libro"],
    lectura:    ["#12853C", "libro"],
    vocab:      ["#7B4DF0", "libros"],
    palabras:   ["#B36B00", "estrella"],
    atelier:    ["#C2410C", "pergamino"],
    guia:       ["#0B7F86", "bombilla"],
    simulacros: ["#1A45B8", "birrete"],
    simulacro:  ["#1A45B8", "birrete"]
  };
  var NIV = { A1: "a1", A2: "a2", B1: "b1", B2: "b2", C1: "c1", C2: "c1" };

  var placa = function(ic){ var s = D.createElement("span"); s.className = "h10-ic"; s.setAttribute("aria-hidden", "true"); s.innerHTML = '<img src="img/ic2/' + ic + '.webp" alt="">'; return s; };

  var decora = function(){
    var v = D.querySelector("#view"); if (!v) return;
    var k = vista();
    if (k === "dictee" && v.querySelector('[data-dzmode="signes"][aria-pressed="true"]')) k = "signes";
    var f = F[k];
    if (!f) { if (v.hasAttribute("data-h10")) v.removeAttribute("data-h10"); return; }
    if (v.getAttribute("data-h10") !== k) v.setAttribute("data-h10", k);

    /* cabecera: placa con el icono de la función donde no hay ya una ilustración */
    var h = v.querySelector(".am-hero, .snd-hero, .tu-hero, .v2-hero, .vh.h9-hero, .vh.p7-hero");
    if (h && !h.querySelector("img") && !h.querySelector(".h10-ic")) { h.insertBefore(placa(f[1]), h.firstChild); h.classList.add("h10-con"); }
    if (k === "guia") { var g1 = v.querySelector(".gguia > h1"); if (g1 && !g1.querySelector(".h10-ic")) g1.insertBefore(placa(f[1]), g1.firstChild); }
    /* las fichas de cada unidad van en su propia caja: dentro de un <details> abierto los hijos no son celdas de la rejilla */
    if (k === "guia") [].forEach.call(v.querySelectorAll("details.h9-uni"), function(u){
      if (u.querySelector(":scope > .h10-fichas")) return;
      var arts = [].filter.call(u.children, function(c){ return c.tagName === "ARTICLE"; }); if (!arts.length) return;
      var caja = D.createElement("div"); caja.className = "h10-fichas"; u.appendChild(caja); arts.forEach(function(x){ caja.appendChild(x); });
    });
    if (k === "simulacro") { var sh = v.querySelector(".sim-head"); if (sh && !sh.querySelector(".h10-ic")) sh.insertBefore(placa(f[1]), sh.firstChild); }

    /* color del nivel en las fichas de simulacro (las de lecturas y oral ya lo traen de plx107) */
    [].forEach.call(v.querySelectorAll(".sim-card"), function(b){
      if (b.dataset.h10) return; b.dataset.h10 = "1";
      var lv = ((b.querySelector(".am-lv") || {}).textContent || "").match(/[ABC][12]/); if (lv && NIV[lv[0]]) b.setAttribute("data-niv", NIV[lv[0]]);
    });
    /* tema oral: las expresiones útiles como fichas que se leen de un vistazo */
    var u = v.querySelector(".or-useful"); if (u && !u.classList.contains("h10-chips")) u.classList.add("h10-chips");
  };
  var _r = render; render = function(){ var x = _r.apply(this, arguments); try { decora(); } catch (e) {} return x; };
  /* Dictados ↔ Acentos cambian sin pasar siempre por render() */
  D.addEventListener("click", function(e){ if (e.target && e.target.closest && e.target.closest("[data-dzmode]")) setTimeout(function(){ try { decora(); } catch (x) {} }, 60); }, true);
  try { decora(); } catch (e) {}

  /* ---------------- estilos ---------------- */
  var R = [], o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  var V = "html.mk #view[data-h10] ";
  /* 1. el color de la función manda dentro de su vista */
  Object.keys(F).forEach(function(k){ o("html.mk #view[data-h10=" + k + "]{--hc:" + F[k][0] + "}"); });
  o("html.mk #view[data-h10]{--hc-r:color-mix(in srgb,var(--hc) 68%,#000);--hc-p:color-mix(in srgb,var(--hc) 16%,var(--p-sup));--hc-tx:color-mix(in srgb,var(--hc) 58%,var(--p-tinta));" +
    "--p-azul-btn:var(--hc);--p-azul-r:var(--hc-r);--p-azul-tx:var(--hc-tx);--p-azul-p:var(--hc-p);--p-azul:var(--hc);--pz-cara:var(--hc);--pz-cara-r:var(--hc-r);--pz-cara-tx:#fff}");
  /* 2. placa con icono */
  o(V + ".h10-ic{flex:none;display:grid;place-items:center;width:56px;height:56px;border-radius:var(--r-md);background:var(--hc-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 30%,transparent)}",
    V + ".h10-ic img{width:38px;height:38px;object-fit:contain}",
    V + ".h10-con{display:flex;align-items:center;gap:var(--s-4)}",
    V + ".h10-con > div{flex:1;min-width:0}",
    /* la cabecera de Dictados y Acentos tiene tres hijos sueltos (etiqueta, título, texto): la placa va en su columna */
    V + ".vh.h9-hero.h10-con{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:var(--s-4);align-items:start}",
    V + ".vh.h9-hero.h10-con > .h10-ic{grid-column:1;grid-row:1 / span 3;margin-top:2px}",
    V + ".vh.h9-hero.h10-con > :not(.h10-ic){grid-column:2;min-width:0}",
    /* en el teléfono, las cabeceras que ya llevan contador no tienen sitio para la placa además */
    "@media (max-width:480px){" + V + ".am-hero:has(.am-count) > .h10-ic," + V + ".v2-hero > .h10-ic{display:none}}",
    V + ".gguia > h1{display:flex;align-items:center;gap:var(--s-3)}",
    V + ".h9-uni[open]{display:block}",
    V + ".h10-fichas{display:grid;gap:var(--s-2);padding:var(--s-2) var(--s-3) 0;align-items:start}",
    V + ".h10-fichas > article{margin:0}",
    "@media (min-width:900px){" + V + ".h10-fichas{grid-template-columns:1fr 1fr;gap:var(--s-3)}}",
    /* el gato que se asoma a la primera ficha tapaba el contador y la flecha de la unidad */
    V + ".gguia .m-peek{display:none}",
    V + ".sim-head{display:flex;align-items:center;gap:var(--s-3);flex-wrap:wrap}",
    V + ".sim-head .h10-ic{width:48px;height:48px}", V + ".sim-head .h10-ic img{width:32px;height:32px}",
    "@media (max-width:420px){" + V + ".h10-ic{width:48px;height:48px}" + V + ".h10-ic img{width:32px;height:32px}}");
  /* 3. cabeceras: la etiqueta y el contador en el color de la función */
  o(V + ".am-hero small," + V + ".snd-hero small," + V + ".tu-hero small," + V + ".v2-hero small," + V + ".vh.p7-hero small," + V + ".vh.h9-hero .sec-marker .micro{color:var(--hc-tx);font-weight:800;letter-spacing:.1em}",
    V + ".am-hero .am-count," + V + ".v2-hero .v2-pct{background:var(--hc-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 28%,transparent);border-radius:var(--r-md)}",
    V + ".am-hero .am-count b," + V + ".v2-hero .v2-pct b{color:var(--hc-tx)}",
    V + ".snd-pb > *," + V + ".v2-bar > *," + V + ".v2-prog > *{background:var(--hc)}");
  /* 4. títulos de sección con una marca del color */
  o(V + ".tu-h," + V + ".snd-h," + V + ".voc2 > h2," + V + ".lec-quiz > h2," + V + ".or-help h4," + V + ".sim-intro > h2," + V + ".snd-how h2{display:flex;align-items:center;gap:var(--s-2);margin:var(--s-5) 0 var(--s-3);font:800 var(--t-lg)/1.2 var(--f-tit);letter-spacing:-.01em;color:var(--p-tinta)}",
    V + ".tu-h::before," + V + ".snd-h::before," + V + ".voc2 > h2::before," + V + ".lec-quiz > h2::before," + V + ".or-help h4::before," + V + ".sim-intro > h2::before{content:'';flex:none;width:5px;height:1.05em;border-radius:3px;background:var(--hc)}",
    V + ".or-help h4," + V + ".snd-how h2{margin:0 0 var(--s-2);font-size:var(--t-md)}",
    V + ".sim-intro > h2{margin-top:0}");

  /* ---- Conversa: situaciones en dos columnas, compactas ---- */
  o(V + ".tu-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s-3)}",
    V + ".tu-grid .tu-sc{min-height:0;height:auto;padding:var(--s-4);display:grid;align-content:start;gap:2px;text-align:left}",
    V + ".tu-grid .tu-sc b{font:800 var(--t-md)/1.2 var(--f-tit)}",
    V + ".tu-grid .tu-sc small{font:500 12.5px/1.35 var(--f-tx);color:var(--p-apagado);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "@media (min-width:760px){" + V + ".tu-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    "@media (min-width:1200px){" + V + ".tu-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}",
    V + ".tu-acc button{min-width:44px;min-height:44px}",
    V + ".tu-chat .tu-row.me .tu-b{background:var(--hc);color:#fff}",
    V + ".tu-end-b{min-height:44px}");

  /* ---- Expresión oral: el tema ---- */
  o(V + ".or-card{border-radius:var(--r-lg)}",
    V + ".or-head .or-prompt{margin:var(--s-3) 0 var(--s-2);padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background:var(--hc-p);box-shadow:inset 4px 0 0 var(--hc);font:700 var(--t-md)/1.45 var(--f-tx);color:var(--p-tinta)}",
    V + ".or-head .or-es{margin:0;font:500 var(--t-sm)/1.5 var(--f-tx);color:var(--p-apagado)}",
    V + ".or-help{display:grid;gap:var(--s-3);margin:var(--s-4) 0}",
    V + ".or-help > div{padding:var(--s-4);border-radius:var(--r-md);background:var(--p-sup-2)}",
    V + ".or-help ul{margin:0;padding-left:1.1em}",
    V + ".or-help ul.h10-chips{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:var(--s-2)}",
    V + ".or-help ul.h10-chips li{margin:0;padding:8px 14px;border-radius:var(--r-pill);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 30%,var(--p-linea));font:600 var(--t-sm)/1.25 var(--f-tx);font-style:normal;color:var(--p-tinta)}",
    V + ".or-help ul.h10-chips li *{font-style:normal}",
    "@media (min-width:900px){" + V + ".or-help{grid-template-columns:1fr 1fr}}",
    V + ".or-timer{border-radius:var(--r-lg);background:var(--hc-p);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 30%,transparent)}",
    V + ".or-timer b{color:var(--hc-tx)}");

  /* ---- Lecturas: el texto ---- */
  o(V + ".lec-head{display:flex;align-items:flex-start;gap:var(--s-3)}",
    V + ".lec-head .am-emo{flex:none;width:52px;height:52px;display:grid;place-items:center;border-radius:var(--r-md);background:var(--hc-p);color:var(--hc-tx)}",
    V + ".lec-audio{display:flex;flex-wrap:wrap;align-items:center;gap:var(--s-2);margin:var(--s-4) 0 var(--s-3)}",
    V + ".lec-audio .lec-tipnote{flex-basis:100%;font:500 12.5px/1.4 var(--f-tx);color:var(--p-apagado)}",
    V + ".lec-text{padding:var(--s-4) var(--s-4) var(--s-2);border-radius:var(--r-md);background:var(--p-sup-2);box-shadow:inset 4px 0 0 var(--hc)}",
    V + ".lec-text p{font-size:1.14rem;line-height:1.85;color:var(--p-tinta)}",
    V + ".lec-text .lw{text-decoration-color:var(--hc);color:inherit}",
    V + ".lec-voc{margin-top:var(--s-3);border-radius:var(--r-md);background:var(--p-sup-2)}",
    V + ".lec-voc > summary{min-height:48px;display:flex;align-items:center;padding:0 var(--s-4);font:700 var(--t-sm)/1.2 var(--f-tx);color:var(--hc-tx);cursor:pointer}",
    V + ".lec-voc > ul{padding:0 var(--s-4) var(--s-3)}",
    V + ".lq .lq-q span{background:var(--hc);color:#fff}");

  /* ---- Vocabulario ---- */
  o(V + ".v2-th .v2-num.big{background:var(--hc);color:#fff;box-shadow:0 3px 0 var(--hc-r)}",
    V + ".v2-list{display:grid;gap:var(--s-3)}",
    V + ".v2-list .v2-spk.sm{width:40px;height:40px}",
    V + ".v2-list .v2-save{min-height:40px;padding:0 var(--s-3);border-radius:var(--r-pill);font-size:12.5px}",
    V + ".v2-list .v2-g{font-size:12.5px}",
    V + ".v2-fc{border-radius:var(--r-lg);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 26%,var(--p-linea)),0 4px 0 var(--p-relieve)}",
    V + ".v2-fc .v2-spk.big{background:var(--hc);color:#fff;box-shadow:0 4px 0 var(--hc-r)}",
    V + ".v2-n{font:800 var(--t-sm)/1 var(--f-tx);color:var(--hc-tx);letter-spacing:.06em}",
    "@media (min-width:900px){" + V + ".v2-list{grid-template-columns:1fr 1fr}}");

  /* ---- Sonidos ---- */
  o(V + ".snd-head .snd-big{background:var(--hc);box-shadow:0 4px 0 var(--hc-r);color:#fff}",
    V + ".snd-how > div{border-radius:var(--r-md)}",
    V + ".snd-words .snd-slow{min-width:44px}",
    V + ".snd-chip{min-width:30px;height:30px;display:inline-grid;place-items:center;font-size:var(--t-sm)}");

  /* ---- Simulacros: cada prueba con su color ---- */
  var PR = ["#2760EE", "#12853C", "#C2410C", "#D92F5F"];        /* comprensión oral · escrita · producción escrita · oral */
  PR.forEach(function(c, i){
    var n = ":nth-child(" + (i + 1) + ")";
    o(V + ".sim-parts > span" + n + "," + V + ".sim-steps > li" + n + "," + V + ".sim-intro ul > li" + n + "{--pc:" + c + "}");
  });
  o(V + ".sim-parts > span{background:color-mix(in srgb,var(--pc,var(--hc)) 16%,var(--p-sup));color:color-mix(in srgb,var(--pc,var(--hc)) 58%,var(--p-tinta));font-weight:700;font-size:12.5px;border-radius:var(--r-pill)}",
    V + ".sim-steps{gap:var(--s-2)}",
    V + ".sim-steps > li{border-radius:var(--r-md);background:color-mix(in srgb,var(--pc,var(--hc)) 14%,var(--p-sup));box-shadow:inset 0 3px 0 var(--pc,var(--hc));color:var(--p-tinta)}",
    V + ".sim-steps > li span{font-size:12.5px;font-weight:700}",
    V + ".sim-steps > li .sx," + V + ".sim-intro ul > li .sx{color:color-mix(in srgb,var(--pc,var(--hc)) 58%,var(--p-tinta))}",
    V + ".sim-intro{border-radius:var(--r-lg)}",
    V + ".sim-intro ul{list-style:none;padding:0;margin:0 0 var(--s-3);display:grid;gap:var(--s-2)}",
    V + ".sim-intro ul > li{padding:var(--s-3);border-radius:var(--r-md);background:color-mix(in srgb,var(--pc,var(--hc)) 10%,var(--p-sup))}",
    V + ".sim-card{position:relative;overflow:hidden;padding-top:var(--s-5)}",
    V + ".sim-card::before{content:'';position:absolute;left:0;right:0;top:0;height:5px;background:var(--nv,var(--hc))}");
  var CN = { a1: "#12853C", a2: "#0B7F86", b1: "#2760EE", b2: "#7B4DF0", c1: "#D92F5F" };
  Object.keys(CN).forEach(function(k){ o(V + ".sim-card[data-niv=" + k + "]{--nv:" + CN[k] + "}"); });

  /* ---- Dictados y Acentos ---- */
  o(V + ".deck{border-radius:var(--r-lg);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--hc) 24%,var(--p-linea)),0 3px 0 var(--p-relieve)}",
    V + "ol.rows > li > button .rs," + V + "ol.rows > li > button .pchip{color:var(--hc-tx);font-weight:700}",
    V + "#dtx{border-radius:var(--r-md);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    V + "#dtx:focus{box-shadow:inset 0 0 0 2px var(--hc)}");

  /* ---- Guía rápida ---- */
  o(V + ".h9-curso > summary b::before{content:'';display:inline-block;width:10px;height:10px;margin-right:10px;border-radius:50%;background:var(--hc);vertical-align:1px}",
    V + ".gd-search:focus-within{box-shadow:inset 0 0 0 2px var(--hc)}");

  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx110";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}";
  D.head.appendChild(st);

  window.PLX_H10 = { decora: decora, funciones: F };
})();
