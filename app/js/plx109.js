/* PLEX PLAY 4.35 — Herramientas de Práctica: lo que la auditoría encontró (pruebas/aud14.mjs, 14 funciones × teléfono,
   tableta y computador × claro y oscuro). Solo decora lo que ya pinta la app; CSS en la capa @layer p5. ANTES de plx97.

   1. «Mis errores» no hacía nada con el cuaderno vacío (startReview salía en silencio): ahora abre una pantalla que lo dice.
   2. Guía rápida: 139 fichas seguidas (49.500 px de alto en el teléfono). Ahora van plegadas por curso y por unidad; al
      buscar se abren todas las que coinciden.
   3. Dictados y Acentos y signos conservaban la portada editorial vieja: cabecera del sistema, «Cómo funciona» plegable
      (ocupaba 380 px antes del reproductor) y listas como fichas. Las filas de la lista se montaban unas sobre otras
      (li de 72 px con un botón de 116 px).
   4. Pronunciación: el micrófono quedaba pegado a la derecha, en la columna que dejó libre la ilustración; va centrado.
   5. El botón de volver decía «Práctica», «‹ Práctica» o «‹ Volver» según la pantalla: una sola forma.
   6. Textos de 9,6 a 11,5 px (etiquetas, contadores, notas): nada por debajo de 12,5 px. */
(function(){
  "use strict";
  var D = document;
  if (typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var vista = function(){ try { return view; } catch (e) { return ""; } };
  var CHEV = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';

  /* ---------------- 5. volver ---------------- */
  var volver = function(v){
    [].forEach.call(v.querySelectorAll(".gback"), function(b){
      if (b.dataset.h9) return; b.dataset.h9 = "1";
      var t = (b.textContent || "").replace(/[‹<←]/g, "").trim();
      if (/^(Volver|Retos)$/i.test(t) && b.dataset.view === "retos") t = "Práctica";
      b.innerHTML = CHEV + "<span>" + esc(t || "Volver") + "</span>";
    });
  };

  /* ---------------- 3. Dictados y Acentos ---------------- */
  var dictados = function(v){
    var h = v.querySelector(":scope > .vh"); if (h && !h.classList.contains("p7-hero")) h.classList.add("h9-hero");
    var how = v.querySelector(".dz-how");
    if (how && !how.closest(".h9-how")) {
      var d = D.createElement("details"); d.className = "h9-how";
      var visto = false; try { visto = localStorage.getItem("plx-h9-how") === "1"; } catch (e) {}
      d.open = !visto;
      var s = D.createElement("summary"), t = how.querySelector("h3");
      s.innerHTML = "<b>" + esc(t ? t.textContent : "Cómo funciona") + "</b>";
      if (t) t.hidden = true;
      how.parentNode.insertBefore(d, how); d.appendChild(s); d.appendChild(how);
      d.addEventListener("toggle", function(){ if (!d.open) { try { localStorage.setItem("plx-h9-how", "1"); } catch (e) {} } });
    }
  };

  /* ---------------- 2. Guía rápida ---------------- */
  var abiertos = {};                       /* lo que la persona dejó abierto, entre repintadas */
  var guia = function(v){
    var L = v.querySelector(".gd-list"); if (!L) return;
    if (!L.querySelector(":scope > h3.gd-u")) return;            /* ya agrupada */
    var q = v.querySelector("#gdQ"), busca = !!(q && q.value.trim());
    var cursos = [], porCurso = {}, uni = null;
    [].slice.call(L.children).forEach(function(n){
      if (n.matches && n.matches("h3.gd-u")) {
        var p = n.textContent.split(" · "), c = (p[0] || "Guía").trim(), u = (p.slice(1).join(" · ") || c).trim();
        if (!porCurso[c]) { porCurso[c] = []; cursos.push(c); }
        uni = { nombre: u, h: n, fichas: [] }; porCurso[c].push(uni);
      } else if (uni && n.matches && n.matches("article")) uni.fichas.push(n);
      else if (uni) uni.fichas.push(n);
    });
    if (!cursos.length) return;
    var frag = D.createDocumentFragment();
    cursos.forEach(function(c, i){
      var dc = D.createElement("details"); dc.className = "h9-curso";
      var total = porCurso[c].reduce(function(a, u){ return a + u.fichas.filter(function(f){ return f.matches && f.matches("article"); }).length; }, 0);
      dc.open = busca || abiertos["c:" + c] === true;
      dc.innerHTML = "<summary><b>" + esc(c) + "</b><span>" + porCurso[c].length + (porCurso[c].length === 1 ? " unidad" : " unidades") + " · " + total + (total === 1 ? " ficha" : " fichas") + "</span></summary>";
      dc.addEventListener("toggle", function(){ if (!busca) abiertos["c:" + c] = dc.open; });
      var caja = D.createElement("div"); caja.className = "h9-unis";
      porCurso[c].forEach(function(u){
        var du = D.createElement("details"); du.className = "h9-uni"; du.open = busca || abiertos["u:" + c + u.nombre] === true;
        var n = u.fichas.filter(function(f){ return f.matches && f.matches("article"); }).length;
        du.innerHTML = "<summary><b>" + esc(u.nombre) + "</b><span>" + n + "</span></summary>";
        du.addEventListener("toggle", function(){ if (!busca) abiertos["u:" + c + u.nombre] = du.open; });
        u.h.hidden = true; du.appendChild(u.h);
        u.fichas.forEach(function(f){ du.appendChild(f); });
        caja.appendChild(du);
      });
      dc.appendChild(caja); frag.appendChild(dc);
    });
    L.appendChild(frag);
    L.classList.add("h9-lista");
  };
  D.addEventListener("input", function(e){ if (e.target && e.target.id === "gdQ") setTimeout(function(){ var v = D.querySelector("#view"); if (v && vista() === "guia") { try { guia(v); } catch (x) {} } }, 30); }, true);

  /* ---------------- 1. Mis errores, con el cuaderno vacío ---------------- */
  try {
    if (typeof startReview === "function") {
      var rev0 = startReview;
      startReview = function(){
        var hay = 0;
        try { hay = Object.keys(S.carnet || {}).filter(function(k){ return !!getItem(k); }).length; } catch (e) { hay = 1; }
        if (hay) return rev0.apply(this, arguments);
        if (window.PLX_UI && typeof PLX_UI.pantalla === "function") {
          PLX_UI.pantalla('<div class="h9-vacio"><img src="img/mz3/mz-feliz.webp" alt="" onerror="this.remove()"><h2 class="gm-t">Tu cuaderno de errores está vacío</h2>' +
            '<p class="gm-sub">Cada vez que fallas un ejercicio, la pregunta se guarda aquí para que la repitas hasta acertarla dos veces seguidas. Todavía no hay ninguna.</p>' +
            '<div class="set-row c"><button class="pz-btn gbtn" data-g="close" data-autofocus>Entendido</button></div></div>', { titulo: "Mis errores", clase: "m-h9" });
        } else if (typeof toast === "function") toast("Tu cuaderno de errores está vacío: aún no has fallado ningún ejercicio.");
      };
    }
  } catch (e) {}

  /* la ficha de Práctica reenvía el toque al botón original; si aun así no llega (se repintó entre medias), se abre aquí */
  window.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest(".jx-row[data-h9=vacio]") : null; if (!b) return;
    var hay = 0; try { hay = Object.keys(S.carnet || {}).filter(function(k){ return !!getItem(k); }).length; } catch (x) {}
    if (hay) return;
    e.preventDefault(); e.stopPropagation();
    try { startReview(); } catch (x) {}
  }, true);

  /* ---------------- aplicar tras cada pintada ---------------- */
  var decora = function(){
    var v = D.querySelector("#view"); if (!v) return;
    volver(v);
    /* el botón original de «Mis errores» nace deshabilitado si el cuaderno está vacío, y la ficha de Práctica le
       reenvía el toque: por eso no pasaba nada. Se habilita y startReview (arriba) muestra la pantalla que lo explica. */
    [].forEach.call(D.querySelectorAll("button[data-review][disabled]"), function(b){ b.disabled = false; b.dataset.h9 = "vacio"; });
    [].forEach.call(v.querySelectorAll(".jx-row.off, .jx-row[aria-disabled=true]"), function(b){
      var t = (b.querySelector("b") || {}).textContent || "";
      if (t.trim() === "Mis errores") { b.classList.remove("off"); b.removeAttribute("aria-disabled"); b.dataset.h9 = "vacio"; }
    });
    var vi = vista();
    if (vi === "dictee") dictados(v);
    if (vi === "guia") guia(v);
  };
  var _r = render; render = function(){ var x = _r.apply(this, arguments); try { decora(); } catch (e) {} return x; };
  try { decora(); } catch (e) {}

  /* ---------------- estilos ---------------- */
  var R = [], o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  var V = "html.mk #view ";
  /* 5. volver */
  o(V + ".gback[data-h9]{display:inline-flex;align-items:center;gap:6px;width:auto;min-height:44px;padding:0 16px 0 10px;margin:0 0 var(--s-3);border-radius:var(--r-pill);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);font:700 var(--t-sm)/1 var(--f-tx);letter-spacing:0;text-transform:none}",
    V + ".gback[data-h9] svg{flex:none;color:var(--p-azul-tx)}",
    "@media (hover:hover){" + V + ".gback[data-h9]:hover{background:var(--p-sup-2)}}");
  /* 6. nada por debajo de 12,5 px */
  o(V + ".sec-marker .micro," + V + ".eyebrow," + V + ".rows .rs," + V + ".pchip," + V + ".am-hero .am-count span," + V + ".am-count span," + V + ".mono.muted," + V + "small.mono," + V + ".lrow small," + V + ".v2-pct span{font-size:12.5px;line-height:1.3}",
    V + ".am-hero small," + V + ".snd-hero small," + V + ".tu-hero small," + V + ".v2-hero small{font-size:12px}",
    "html.mk .dgx small,html.mk .dgx .dg2-parte b,html.mk .dgx .dg2-tabs b{font-size:12.5px}");
  /* 3. Dictados y Acentos */
  o(V + ".vh.h9-hero{max-width:none;margin:var(--s-3) 0 var(--s-5);padding:var(--s-4) var(--s-5);border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    V + ".vh.h9-hero .sec-marker{margin:0 0 var(--s-1)}",
    V + ".vh.h9-hero .sec-marker .rule{width:0;opacity:0}",
    V + ".vh.h9-hero .sec-marker .micro{font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--p-azul-tx)}",
    V + ".vh.h9-hero .h-sec{margin:0 0 var(--s-2);font:800 clamp(1.45rem,3vw,2rem)/1.12 var(--f-tit);letter-spacing:-.02em;color:var(--p-tinta)}",
    V + ".vh.h9-hero p{margin:0;max-width:70ch;font:500 var(--t-sm)/1.5 var(--f-tx);color:var(--p-tinta-2)}",
    V + ".h9-how{border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    V + ".h9-how > summary{display:flex;align-items:center;justify-content:space-between;gap:var(--s-3);min-height:52px;padding:0 var(--s-4);cursor:pointer;list-style:none;font:700 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    V + ".h9-how > summary::-webkit-details-marker{display:none}",
    V + ".h9-how > summary::after{content:'';flex:none;width:10px;height:10px;border-right:2.5px solid var(--p-apagado);border-bottom:2.5px solid var(--p-apagado);transform:rotate(45deg);margin-top:-4px}",
    V + ".h9-how[open] > summary::after{transform:rotate(-135deg);margin-top:4px}",
    V + ".h9-how .dz-how{margin:0;padding:0 var(--s-4) var(--s-4);background:none;box-shadow:none;border:0}",
    V + "ol.rows{list-style:none;margin:0;padding:0;display:grid;gap:var(--s-2)}",
    V + "ol.rows > li{height:auto;min-height:0;margin:0;padding:0;border:0}",
    V + "ol.rows > li > button.row," + V + "ol.rows > li > button.lrow{width:100%;height:auto;min-height:64px;padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 2px 0 var(--p-relieve);text-align:left;color:var(--p-tinta)}",
    V + "ol.rows > li > button[aria-current=true]," + V + "ol.rows > li > button.on," + V + "ol.rows > li > button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-azul-btn),0 2px 0 var(--p-azul-r);background:var(--p-azul-p)}",
    "@media (hover:hover){" + V + "ol.rows > li > button:hover{background:var(--p-sup-2)}}",
    V + "ul.list{list-style:none;margin:var(--s-2) 0 0;padding:0;display:grid;gap:var(--s-2)}",
    V + "ul.list > li{margin:0;padding:var(--s-3) var(--s-4);border:0;border-radius:var(--r-md);background:var(--p-sup-2);display:grid;gap:2px}",
    V + "ul.list > li small.mono{color:var(--p-azul-tx);font-weight:700}");
  /* 2. Guía rápida */
  o(V + ".h9-lista{display:grid;gap:var(--s-3)}",
    V + ".h9-curso{border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);overflow:hidden}",
    V + ".h9-curso > summary," + V + ".h9-uni > summary{display:flex;align-items:center;gap:var(--s-3);cursor:pointer;list-style:none}",
    V + ".h9-curso > summary::-webkit-details-marker," + V + ".h9-uni > summary::-webkit-details-marker{display:none}",
    V + ".h9-curso > summary{min-height:64px;padding:var(--s-3) var(--s-4)}",
    V + ".h9-curso > summary b{flex:1;min-width:0;font:800 var(--t-lg)/1.2 var(--f-tit);letter-spacing:-.01em;color:var(--p-tinta)}",
    V + ".h9-curso > summary span{flex:none;font:600 12.5px/1.2 var(--f-tx);color:var(--p-apagado)}",
    V + ".h9-curso > summary::after," + V + ".h9-uni > summary::after{content:'';flex:none;width:9px;height:9px;border-right:2.5px solid var(--p-apagado);border-bottom:2.5px solid var(--p-apagado);transform:rotate(45deg);margin:-4px 4px 0}",
    V + ".h9-curso[open] > summary::after," + V + ".h9-uni[open] > summary::after{transform:rotate(-135deg);margin-top:4px}",
    V + ".h9-curso[open] > summary{box-shadow:inset 0 -1.5px 0 var(--p-linea)}",
    V + ".h9-unis{display:grid;gap:var(--s-2);padding:var(--s-3)}",
    V + ".h9-uni{border-radius:var(--r-md);background:var(--p-sup-2)}",
    V + ".h9-uni > summary{min-height:52px;padding:var(--s-2) var(--s-3)}",
    V + ".h9-uni > summary b{flex:1;min-width:0;font:700 var(--t-sm)/1.3 var(--f-tx);color:var(--p-tinta)}",
    V + ".h9-uni > summary span{flex:none;min-width:26px;height:26px;padding:0 8px;display:grid;place-items:center;border-radius:var(--r-pill);background:var(--p-azul-p);color:var(--p-azul-tx);font:800 12.5px/1 var(--f-tx)}",
    V + ".h9-uni[open]{padding-bottom:var(--s-3)}",
    V + ".h9-uni > article{margin:var(--s-2) var(--s-3) 0}",
    "@media (min-width:900px){" + V + ".h9-uni[open]{display:grid;grid-template-columns:1fr 1fr;gap:0 var(--s-3);align-items:start}" + V + ".h9-uni[open] > summary{grid-column:1 / -1}" + V + ".h9-uni > article{margin:var(--s-2) 0 0}" + V + ".h9-uni[open]{padding:0 var(--s-3) var(--s-3)}}");
  /* 4.36.1 — Safari y Firefox ocultan lo plegado de un <details> con display:none sobre sus hijos; un display propio
     con !important (el de .h9-unis, o el que ya trajera .dz-how) se lo saltaba y el contenido se veía encimado aunque
     estuviera cerrado. Chrome lo oculta de otra forma y por eso no se notaba en las pruebas. Se cierra de forma explícita. */
  o(V + "details.h9-curso:not([open]) > :not(summary)," + V + "details.h9-uni:not([open]) > :not(summary)," + V + "details.h9-how:not([open]) > :not(summary){display:none}");
  /* 4. Pronunciación: micrófono centrado */
  o("html.mk #player .sp-box{grid-template-columns:1fr;justify-items:center;gap:var(--s-3);margin-top:var(--s-6);text-align:center}",
    "html.mk #player .sp-box .sp-mic{grid-column:1;grid-row:auto;margin:0}",
    "html.mk #player .sp-box > *{grid-column:1}",
    "html.mk #player .sp-status{max-width:38ch;font-size:var(--t-md);line-height:1.4}");
  /* 1. cuaderno vacío */
  o("html.mk .gmodal.m-h9 .h9-vacio{display:grid;justify-items:center;gap:var(--s-3);text-align:center;padding:var(--s-4) 0}",
    "html.mk .gmodal.m-h9 .h9-vacio img{width:132px;height:132px;object-fit:contain}",
    "html.mk .gmodal.m-h9 .h9-vacio .gm-sub{max-width:44ch}");
  var imp = function(s){ return s.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var st = D.createElement("style"); st.id = "plx109";
  st.textContent = "@layer p5{" + imp(R.join("\n")) + "}";
  D.head.appendChild(st);

  window.PLX_H9 = { decora: decora, guia: guia };
})();
