/* PLEX PLAY 4.32.0 — Conversa, Expresión oral, Lecturas y Taller de escritura con el diseño nuevo
   Pedido de Jhon: «esos paneles podemos mejorarlos y ajustarlos al nuevo diseño, agregarles más vida».
   1. CONVERSA (tutor, plx39). Cada situación lleva su icono a color sobre una placa de color (antes: icono de línea).
   2. EXPRESIÓN ORAL y LECTURAS (am-card, plx28). Cada ficha lleva el color de su nivel (franja y placa), un icono a
      color y «Practicar» / «Leer» como botón pequeño.
   3. TALLER DE ESCRITURA (núcleo, viewAtelier). La portada editorial vieja («Escribir, y releer con lápiz rojo») pasa a
      ser la cabecera del sistema con Manzana escribiendo; los diez tipos de texto son chips en una fila y «Lo que revisa
      la IA» es una lista con su número de color.
   Solo decora lo que ya pinta la app (después de cada render). CSS en la capa @layer p5. Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document;
  if (typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var vista = function(){ try { return view; } catch (e) { return ""; } };

  /* ---------------- 1. Conversa ---------------- */
  var TU = { moi: ["amigos", 0], cafe: ["cafe", 1], we: ["estrella", 2], voyage: ["mundo", 3], etudes: ["birrete", 4], debat: ["microfono", 1], libre: ["bombilla", 2] };
  var conversa = function(v){
    [].forEach.call(v.querySelectorAll(".tu-sc[data-tusc]"), function(b){
      var m = TU[b.dataset.tusc] || ["globo", 0], i = b.querySelector(".tu-i"); if (!i || i.dataset.p7) return;
      i.dataset.p7 = "1"; i.innerHTML = '<img src="img/ic2/' + m[0] + '.webp" alt="">'; b.setAttribute("data-c", m[1]);
    });
  };

  /* ---------------- 2. Expresión oral y Lecturas ---------------- */
  var NIV = { A1: "a1", A2: "a2", B1: "b1", B2: "b2", C1: "c1", C2: "c1" };
  var fichas = function(v){
    var oral = vista() === "oral";
    [].forEach.call(v.querySelectorAll(".am-card"), function(b){
      if (b.dataset.p7) return; b.dataset.p7 = "1";
      var lv = (b.querySelector(".am-lv") || {}).textContent || ""; lv = (lv.match(/[ABC][12]/) || [""])[0];
      if (NIV[lv]) b.setAttribute("data-niv", NIV[lv]);
      var e = b.querySelector(".am-emo");
      if (e) { e.classList.add("p7-ic"); e.innerHTML = '<img src="img/ic2/' + (oral || b.dataset.oral ? "microfono" : "libro") + '.webp" alt="">'; }
      var go = b.querySelector(".am-go"); if (go) { go.textContent = oral || b.dataset.oral ? "Practicar" : "Leer"; go.classList.add("p7-go"); }
    });
  };

  /* ---------------- 3. Taller de escritura ---------------- */
  var NUM = ["#2F6BFF", "#D92F5F", "#12853C", "#C98A00", "#7B4DF0", "#0B7F86", "#E2483D", "#2255E0"];
  var taller = function(v){
    var vh = v.querySelector(".vh"); if (vh && !vh.dataset.p7 && /lápiz rojo|Taller de escritura/.test(vh.textContent)) {
      vh.dataset.p7 = "1"; vh.classList.add("p7-hero");
      vh.innerHTML = '<div><small>Taller de escritura · corrección con IA</small><h1>Escribe y corrige con IA</h1><p>Escribe un texto de verdad: la IA marca tus errores según los ocho tipos más frecuentes, estima una nota con la rejilla y puedes enviar los errores a tu carnet.</p></div><img src="img/mz3/escribe.webp" alt="">';
    }
    var sg = v.querySelector('.pz-seg[aria-label="Tarea"]');
    if (sg && !sg.dataset.p7) { sg.dataset.p7 = "1"; sg.classList.remove("pz-seg"); sg.classList.add("pz-chips", "p7-tareas"); [].forEach.call(sg.children, function(b){ b.classList.add("pz-chip"); }); }
    var ey = [].filter.call(v.querySelectorAll(".eyebrow"), function(x){ return /revisa la IA/.test(x.textContent); })[0];
    var ul = ey && ey.nextElementSibling;
    if (ul && ul.tagName === "UL" && !ul.dataset.p7) {
      ul.dataset.p7 = "1"; ul.classList.add("pz-lista", "p7-revisa"); ey.classList.add("p7-eyebrow");
      [].forEach.call(ul.children, function(li, i){ li.classList.add("pz-fila"); var t = li.querySelector("span"), n = li.querySelector("small"); li.innerHTML = '<span class="p7-n" style="--n:' + NUM[i % NUM.length] + '">' + (i + 1) + '</span><span class="pz-fila__tx"><b>' + esc(t ? t.textContent : "") + "</b></span>"; });
    }
  };

  var decora = function(){
    var v = D.getElementById("view"); if (!v) return;
    var w = vista();
    if (w === "tutor") conversa(v);
    if (w === "oral" || w === "lecturas") fichas(v);
    if (w === "atelier") taller(v);
  };
  var _r = render; render = function(){ var x = _r.apply(this, arguments); try { decora(); } catch (e) {} return x; };
  try { decora(); } catch (e) {}

  /* ---------------- estilos ---------------- */
  var R = [];
  var o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  var PLACA = ["var(--p-azul-p)", "var(--p-lila-p)", "var(--p-oro-p)", "var(--p-verde-p)", "color-mix(in srgb,#7B4DF0 18%,var(--p-sup))"];
  /* 1. Conversa */
  o("html.mk #view .tu-sc .tu-i{width:52px;height:52px;display:grid;place-items:center;border-radius:var(--r-md);background:" + PLACA[0] + ";margin-bottom:var(--s-2)}",
    "html.mk #view .tu-sc .tu-i img{width:38px;height:38px;object-fit:contain}");
  PLACA.forEach(function(p, i){ o("html.mk #view .tu-sc[data-c='" + i + "'] .tu-i{background:" + p + "}"); });
  o("@media (hover:hover){html.mk #view .tu-sc:hover .tu-i img{transform:rotate(-6deg) scale(1.08);transition:transform .2s}}");
  /* 2. Fichas por nivel */
  var CN = { a1: "#12853C", a2: "#0B7F86", b1: "#2760EE", b2: "#7B4DF0", c1: "#D92F5F" };
  o("html.mk #view .am-card[data-p7]{position:relative;overflow:hidden;padding-top:var(--s-5)}",
    "html.mk #view .am-card[data-p7]::before{content:'';position:absolute;left:0;right:0;top:0;height:5px;background:var(--nv,var(--p-azul-btn))}",
    "html.mk #view .am-card .p7-ic{width:48px;height:48px;display:grid;place-items:center;border-radius:var(--r-md);background:color-mix(in srgb,var(--nv,#2760EE) 16%,var(--p-sup));font-size:0}",
    "html.mk #view .am-card .p7-ic img{width:34px;height:34px;object-fit:contain}",
    "html.mk #view .am-card .p7-go{justify-self:start;margin-top:var(--s-1);padding:6px 14px;border-radius:var(--r-pill);background:var(--nv,var(--p-azul-btn));color:#fff;font:800 var(--t-sm)/1 var(--f-tit);font-style:normal;box-shadow:0 2px 0 color-mix(in srgb,var(--nv,#2760EE) 60%,#000)}",
    "html.mk #view .am-card .am-ok{justify-self:start;margin-top:var(--s-1)}");
  Object.keys(CN).forEach(function(k){ o("html.mk #view .am-card[data-niv=" + k + "]{--nv:" + CN[k] + "}"); });
  /* 3. Taller */
  o("html.mk #view .vh.p7-hero{display:flex;align-items:center;gap:var(--s-4);max-width:none;margin:0 0 var(--s-5);padding:var(--s-4) var(--s-5);border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    "html.mk #view .vh.p7-hero > div{flex:1;min-width:0;display:grid;gap:var(--s-1)}",
    "html.mk #view .vh.p7-hero small{font:800 var(--t-xs)/1.2 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;color:var(--p-azul-tx)}",
    "html.mk #view .vh.p7-hero h1{margin:0;font:800 clamp(1.4rem,2.6vw,1.9rem)/1.15 var(--f-tit);letter-spacing:-.02em;color:var(--p-tinta)}",
    "html.mk #view .vh.p7-hero p{margin:0;max-width:62ch;font:500 var(--t-sm)/1.45 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .vh.p7-hero img{flex:none;width:96px;height:96px;object-fit:contain}",
    "@media (max-width:520px){html.mk #view .vh.p7-hero img{width:72px;height:72px}}",
    "html.mk #view .p7-tareas{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:var(--s-2);padding:2px 2px var(--s-2);background:none;box-shadow:none;scrollbar-width:none}",
    "html.mk #view .p7-tareas::-webkit-scrollbar{display:none}",
    "html.mk #view .p7-eyebrow{font:800 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-apagado);margin-bottom:var(--s-2)}",
    "html.mk #view .p7-revisa{list-style:none;margin:0;padding:0}",
    "html.mk #view .p7-revisa .pz-fila{display:flex;flex-direction:row;align-items:center;gap:var(--s-3);min-height:48px;padding:var(--s-2) var(--s-4)}",
    "html.mk #view .p7-revisa .p7-n{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--n);color:#fff;font:800 var(--t-sm)/1 var(--f-tit)}",
    "html.mk #view .p7-revisa .pz-fila__tx b{font:600 var(--t-sm)/1.3 var(--f-tx)}");
  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx107";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}";
  D.head.appendChild(st);
})();
