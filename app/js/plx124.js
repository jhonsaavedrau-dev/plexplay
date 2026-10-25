/* PLEX PLAY 4.110 — Buscador de temas
   Pedido de Jhon (25-oct-2026): «no encuentro las lecciones del piloto; un buscador para encontrar el tema que quiero
   repasar». En Inicio, debajo del curso, una barra «Busca un tema…» abre una pantalla de búsqueda sobre las lecciones
   de todos los cursos del idioma activo (allLessons()).
   - Busca en el título de la lección (francés), en el título en español de su video (buscar-indice.js, que escribe
     integrar.py desde ens/*.js), en la unidad, la sección y el curso. Sin tildes ni mayúsculas, por comienzo de palabra:
     «subj» encuentra «subjonctif» y «El subjuntivo presente». Unas pocas palabras españolas se traducen a su forma
     francesa (subjuntivo → subjonctif) para que también coincidan los títulos en francés.
   - Cada resultado dice curso y unidad, marca si ya está hecha y abre la lección (openLesson).
   - Piezas del kit: pz-campo, pz-cab, pz-lista/pz-fila, pz-chip, pz-vacio. CSS en la capa pz. */
(function(){
  "use strict";
  var D = document;
  if (typeof allLessons !== "function" || !window.PLX_KIT) return;
  var K = window.PLX_KIT, esc = K.esc;
  var IDX_V = "405bc65e";   /* lo escribe integrar.py: versión de buscar-indice.js */
  var LUPA = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';

  var css = [
    "@layer pz{",
    ".bx-barra{display:flex!important;align-items:center!important;gap:var(--s-2)!important;margin-top:var(--s-3)!important;cursor:pointer!important;text-align:left!important;color:var(--p-apagado)!important}",
    ".bx-barra svg{flex:none;color:var(--p-azul)}",
    ".bx-barra span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    "#bx{position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;background:var(--p-fondo,var(--p-bg));color:var(--p-tinta)}",
    "#bx[hidden]{display:none!important}",
    "#bx .bx-top{flex:none;padding:calc(env(safe-area-inset-top) + var(--s-3)) var(--s-4) var(--s-3);border-bottom:1px solid var(--p-linea)}",
    "#bx .bx-top > *{max-width:760px;margin-left:auto!important;margin-right:auto!important}",
    "#bx .bx-q{position:relative;margin-top:var(--s-2)}",
    "#bx .bx-q svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--p-apagado);pointer-events:none}",
    "#bx .bx-q .pz-campo{padding-left:44px!important}",
    "#bx .bx-cuerpo{flex:1;overflow:auto;padding:var(--s-3) var(--s-4) calc(env(safe-area-inset-bottom) + var(--s-6))}",
    "#bx .bx-cuerpo > *{max-width:760px;margin-left:auto;margin-right:auto}",
    "#bx .bx-n{margin:var(--s-2) auto var(--s-3);color:var(--p-apagado);font:500 var(--t-sm)/1.4 var(--f-tx)}",
    "#bx .bx-sug{margin:var(--s-3) auto var(--s-2);color:var(--p-tinta-2);font:600 var(--t-sm)/1.4 var(--f-tx)}",
    "#bx .pz-fila small{white-space:normal}",
    "#bx mark{background:none;color:var(--p-azul-tx,var(--p-azul));font-weight:800}",
    "#bx .bx-ok{color:var(--p-verde)}",
    "}"
  ].join("");
  var st = D.createElement("style"); st.id = "plx124"; st.textContent = css; D.head.appendChild(st);

  /* ---------------- búsqueda ---------------- */
  var norm = function(s){ return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[’'`´]/g, " ").replace(/[^a-z0-9ñç]+/g, " ").trim(); };
  /* palabras españolas que el estudiante escribirá y su forma en los títulos franceses */
  var SIN = { subjuntivo: "subjonctif", pronombres: "pronoms", pronombre: "pronom", articulos: "articles", articulo: "article",
    relativos: "relatifs", futuro: "futur", imperfecto: "imparfait", condicional: "conditionnel", negacion: "negation",
    pasado: "passe", preposiciones: "prepositions", adjetivos: "adjectifs", verbos: "verbes", plural: "pluriel",
    femenino: "feminin", comparativo: "comparatif", participio: "participe", imperativo: "imperatif", gerundio: "gerondif",
    pasiva: "passive", posesivos: "possessifs", demostrativos: "demonstratifs", numeros: "nombres", saludos: "saluer" };
  var IDX = window.__BUSCAR || null, pedido = false;
  var pideIndice = function(){
    if (IDX || pedido) return; pedido = true;
    var s = D.createElement("script"); s.src = "buscar-indice.js" + (IDX_V ? "?v=" + IDX_V : "");
    s.onload = function(){ IDX = window.__BUSCAR || {}; base = null; if (abierta()) busca(); };
    D.head.appendChild(s);
  };
  var base = null;
  var arma = function(){
    var cursos = {}; (typeof TRACKS !== "undefined" ? TRACKS : []).forEach(function(t){ cursos[t.id] = t.label; });
    base = allLessons().map(function(l){
      var es = IDX && IDX[l.id] || "";
      return { l: l, curso: cursos[l.track] || "", es: es,
        tit: norm(l.title) + " " + norm(es), resto: norm((l.unit || "") + " " + (l.sec || "") + " " + (cursos[l.track] || "")) };
    });
  };
  var empieza = function(txt, w){ return (" " + txt).indexOf(" " + w) >= 0; };
  var resultados = function(q){
    if (!base) arma();
    var ws = norm(q).split(" ").filter(Boolean); if (!ws.length) return [];
    var out = [];
    base.forEach(function(x, i){
      var p = 0;
      for (var k = 0; k < ws.length; k++) {
        var w = ws[k], f = SIN[w];
        if (empieza(x.tit, w) || (f && empieza(x.tit, f))) p += 3;
        else if (empieza(x.resto, w) || (f && empieza(x.resto, f))) p += 1;
        else return;   /* todas las palabras tienen que estar */
      }
      out.push({ x: x, p: p, i: i });
    });
    return out.sort(function(a, b){ return b.p - a.p || a.i - b.i; }).slice(0, 60).map(function(r){ return r.x; });
  };
  /* resalta en el texto mostrado las palabras buscadas (sin tildes) */
  var resalta = function(txt, q){
    var ws = norm(q).split(" ").filter(function(w){ return w.length > 1; }); var t = String(txt || "");
    ws = ws.concat(ws.map(function(w){ return SIN[w]; }).filter(Boolean));
    if (!ws.length) return esc(t);
    var plano = t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(), marcas = [];
    ws.forEach(function(w){ var re = new RegExp("(^|[^a-z0-9ñç])(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[a-z0-9ñç]*)", "g"), m;
      while ((m = re.exec(plano))) marcas.push([m.index + m[1].length, m.index + m[1].length + m[2].length]); });
    if (!marcas.length) return esc(t);
    marcas.sort(function(a, b){ return a[0] - b[0]; });
    var s = "", j = 0; marcas.forEach(function(m){ if (m[0] < j) return; s += esc(t.slice(j, m[0])) + "<mark>" + esc(t.slice(m[0], m[1])) + "</mark>"; j = m[1]; });
    return s + esc(t.slice(j));
  };

  /* ---------------- pantalla ---------------- */
  var SUG = ["subjuntivo", "qui que", "COD COI", "passé composé", "artículos", "futuro", "negación", "pronombres"];
  var ov = null;
  var abierta = function(){ return ov && !ov.hidden; };
  var hecha = function(id){ try { return !!(S.lessons[id] && S.lessons[id].done); } catch (e) { return false; } };
  var pinta = function(q){
    var c = ov.querySelector(".bx-cuerpo");
    if (!norm(q)) {
      c.innerHTML = '<p class="bx-sug">Prueba con</p><div class="pz-chips">' + SUG.map(function(s){ return '<button type="button" class="pz-chip" data-bx-sug="' + esc(s) + '">' + esc(s) + "</button>"; }).join("") + "</div>";
      return;
    }
    var R = resultados(q);
    if (!R.length) { c.innerHTML = K.vacio({ img: "img/m2d/confundido.webp", t: "No encontré ese tema", d: "Prueba con otra palabra, en español o en francés: «subjuntivo», «qui», «passé composé»." }); return; }
    c.innerHTML = '<p class="bx-n">' + (R.length === 60 ? "Más de 60 lecciones" : R.length + (R.length === 1 ? " lección" : " lecciones")) + "</p>" +
      '<div class="pz-lista">' + R.map(function(x){
        var l = x.l, ok = hecha(l.id);
        var sub = (x.es && norm(x.es) !== norm(l.title) ? resalta(x.es, q) + " · " : "") + esc(x.curso) + (l.unit ? " · " + esc(l.unit) : "");
        return K.fila({ ic: ok ? "ok" : LUPA, t: resalta(l.title, q), s: sub, fin: ok ? '<span class="bx-ok">Hecha</span>' : "" }, { attrs: { "data-bx-id": l.id, "aria-label": l.title + (ok ? ", hecha" : "") } });
      }).join("") + "</div>";
  };
  var t0 = 0;
  var busca = function(){ var q = ov.querySelector(".pz-campo").value; clearTimeout(t0); t0 = setTimeout(function(){ pinta(q); }, 90); };
  var crea = function(){
    ov = D.createElement("div"); ov.id = "bx"; ov.hidden = true; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Buscar un tema");
    ov.innerHTML = '<div class="bx-top">' + K.cab("Buscar un tema", { attrs: { "data-bx-cerrar": "1" }, etiqueta: "Cerrar la búsqueda" }) +
      '<div class="bx-q">' + LUPA + '<input class="pz-campo" type="search" enterkeyhint="search" autocomplete="off" spellcheck="false" placeholder="Ej.: subjuntivo, qui y que, COD" aria-label="Escribe un tema"></div></div>' +
      '<div class="bx-cuerpo"></div>';
    D.body.appendChild(ov);
    var inp = ov.querySelector(".pz-campo");
    inp.addEventListener("input", busca);
    inp.addEventListener("keydown", function(e){ if (e.key === "Escape") cierra(); if (e.key === "Enter") inp.blur(); });
    ov.addEventListener("click", function(e){
      if (e.target.closest("[data-bx-cerrar]")) { cierra(); return; }
      var s = e.target.closest("[data-bx-sug]"); if (s) { inp.value = s.getAttribute("data-bx-sug"); pinta(inp.value); return; }
      var f = e.target.closest("[data-bx-id]"); if (f) { var id = f.getAttribute("data-bx-id"); cierra(true); try { openLesson(id); } catch (err) {} }
    });
  };
  /* el botón «atrás» del celular cierra la búsqueda en vez de salir de la app */
  var abre = function(){
    if (!ov) crea();
    pideIndice(); ov.hidden = false; D.documentElement.style.overflow = "hidden";
    try { history.pushState({ bx: 1 }, ""); } catch (e) {}
    var inp = ov.querySelector(".pz-campo"); pinta(inp.value); setTimeout(function(){ inp.focus(); inp.select(); }, 30);
  };
  var cierra = function(sinAtras){
    if (!abierta()) return; ov.hidden = true; D.documentElement.style.overflow = "";
    if (!sinAtras) { try { if (history.state && history.state.bx) history.back(); } catch (e) {} }
    else { try { if (history.state && history.state.bx) history.replaceState(null, ""); } catch (e) {} }
  };
  addEventListener("popstate", function(){ if (abierta()) { ov.hidden = true; D.documentElement.style.overflow = ""; } });

  /* ---------------- la barra en Inicio ---------------- */
  var pon = function(){
    var c = D.querySelector("#view .p5-curso"); if (!c || c.nextElementSibling && c.nextElementSibling.classList.contains("bx-barra")) return;
    var b = D.createElement("button"); b.type = "button"; b.className = "pz-campo bx-barra";
    b.innerHTML = LUPA + "<span>Busca un tema: subjuntivo, qui y que…</span>"; b.setAttribute("aria-label", "Buscar un tema para repasar");
    b.addEventListener("click", abre);
    c.parentNode.insertBefore(b, c.nextSibling);
  };
  if (typeof render === "function") { var _r = render; render = function(){ var x = _r.apply(this, arguments); pon(); return x; }; }
  new MutationObserver(function(){ if (D.querySelector("#view .p5-curso")) pon(); }).observe(D.getElementById("view") || D.body, { childList: true, subtree: true });
  pon();
  window.PLX_BUSCAR = { abre: abre, cierra: cierra, resultados: resultados };
})();
