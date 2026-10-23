/* PLEX PLAY 4.52 — Sistema de enseñanza: primero enseñar, después practicar
   Pedido de Jhon (prompt maestro del 17-oct-2026): que ninguna lección evalúe algo que no enseñó, que el estudiante vea
   la explicación completa y ejemplos resueltos antes de practicar solo, que se distinga comprender, practicar y dominar,
   y que lo aprendido se repase y se reutilice.

   Las lecciones que tienen ficha en window.__ENSENA (ensena.js, solo datos) siguen 10 fases:
     1 Objetivo (y los conocimientos previos)   2 Situación (diálogo con audio y traducción opcional)
     3 Aprende (vocabulario, gramática, pronunciación, uso, errores: solo los bloques que la lección necesita)
     4 Ejemplos resueltos   5 Comprueba (si fallas, vuelves al bloque; no se pasa a practicar sin entender)
     6 Práctica guiada (con pistas que se retiran)   7 Práctica sin ayuda   8 Conversación   9 Demuestra lo que sabes
     10 Repaso espaciado (los conceptos vuelven al carnet en 1, 3, 7, 16 y 35 días según cómo te vaya)
   Las fases 1 a 5 son tarjetas dentro del paso de teoría (las mismas piezas tx-* de plx95, que se hace a un lado
   para estas lecciones). Las fases 6 a 9 son ejercicios normales del reproductor: solo se les añade la etiqueta de
   la fase, la pista y el enlace «Repasa» al bloque que explica lo que fallaste. Durante toda la lección, «Ver
   explicación» abre la explicación completa de esta lección (no la teoría vieja).
   Dominio: por concepto, acierto al primer intento en las fases 7 a 9 (criterio de la ficha). Completar no basta.
   Memoria: S.ens = { c: conceptos (caja, próximo repaso), l: lecciones (dominio), cap: capacidades, dudas }.
   Sin ficha, la lección sigue exactamente como antes. */
(function(){
  "use strict";
  var E = window.__ENSENA || {};
  if (typeof LESSONS === "undefined" || typeof ITEMS === "undefined" || typeof S === "undefined") return;
  var pl = document.getElementById("player"); if (!pl) return;
  var D = document, DIA = 864e5;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var decir = function(t){ return String(t).replace(/\([^)]*\)/g, " ").replace(/[…_]+/g, " ").replace(/\s+\/\s+/g, ". ").replace(/\s+[·→]\s+/g, ", ").replace(/\s+/g, " ").trim(); };
  var ALTAVOZ = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9.5h3.5L11 6v12l-4.5-3.5H3zM15 9a4 4 0 0 1 0 6M17.8 6.2a8 8 0 0 1 0 11.6"/></svg>';
  var FOCO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>';
  var FASES = { guiada: [6, "Práctica guiada"], indep: [7, "Práctica sin ayuda"], aplica: [8, "Conversación"], dominio: [9, "Demuestra lo que sabes"] };
  var REG = { "tú": "de tú", "usted": "de usted", "neutro": "con todos" };

  var ficha = function(id){ return id && E[id] && E[id].practica ? E[id] : null; };
  var actual = function(){ try { return P && P.mode === "lesson" && P.lesson ? ficha(P.lesson.id) : null; } catch (e) { return null; } };
  var paso = function(){ try { return P.steps[P.i]; } catch (e) { return null; } };
  var llave = function(d, c){ return (d.lang || "fr") + ":" + c; };
  var mem = function(){ var m = S.ens; if (!m || typeof m !== "object") m = S.ens = {}; m.c = m.c || {}; m.l = m.l || {}; m.cap = m.cap || {}; m.dudas = m.dudas || {}; return m; };
  var guarda = function(){ try { if (typeof save === "function") save(); } catch (e) {} };
  var sfx = function(ok){ try { if (typeof SFX !== "undefined") (ok ? SFX.ok : SFX.ko)(); } catch (e) {} };
  var prof = function(id){ try { var p = PROF.forKey(id), d = PROF.list[p]; return { img: "img/pf4/pf-" + p + "-g1.webp", cara: "img/pf4/pf-" + p + "-e1.webp", n: d.name }; } catch (e) { return null; } };
  var bloque = function(d, b){ for (var i = 0; i < d.ensena.length; i++) if (d.ensena[i].id === b) return d.ensena[i]; return null; };
  var bloqueDe = function(d, c){ var k = d.conceptos[c]; return k ? k.b : (d.ensena[0] || {}).id; };
  var lengua = function(d){ return d.lang || "fr"; };
  /* 4.65: diseño 2 (pedido de Jhon, 23-oct-2026): una sola tarjeta de misión, «la idea» corta, tablas en capas,
     diálogo burbuja a burbuja y pocas preguntas (los ejercicios y juegos vienen después de la lección). Curso por curso. */
  var NUEVO = { pp: 1, a1: 1 };
  var nuevo = function(id){ return !!NUEVO[trackDe(id)]; };
  var BG2 = { "bg-universidad": "esc/aula-universitaria", "bg-cafe": "esc/cafe-lyon", "bg-paris": "esc/calle-paris", "bg-biblioteca": "esc/biblioteca", "bg-noche": "esc/escritorio-noche" };
  var FV2 = { "bg-universidad": "esc/fv-aula", "bg-cafe": "esc/fv-terraza-lyon", "bg-paris": "esc/fv-calle-paris", "bg-biblioteca": "esc/fv-biblioteca", "bg-noche": "esc/fv-escritorio-noche" };
  var CARA = { camila: "pj/camila-neutra", hugo: "pj/hugo-neutro", sofia: "pj/sofia-sonriendo", laura: "pj/laura-neutra", roche: "pj/roche-sonriendo" };
  var CURSO = { pp: "Primeros pasos", a1: "Francés A1", a2: "Francés A2", fon: "Fonética", b11: "B1.1", b12: "B1.2", b21: "B2.1", rem: "Remédiation", prog: "C1.1", c12: "C1.2", lit: "Literatura" };
  /* la práctica dentro de la lección: una guiada y, de las demás fases, las que cubren todos los conceptos (máximo 4) */
  var elige = function(d){
    var P0 = d.practica, out = [], cub = {}, tipos = {};
    var g = P0.findIndex(function(x){ return x.fase === "guiada"; }); if (g >= 0) { out.push(g); (P0[g].c || []).forEach(function(c){ cub[c] = 1; }); tipos[P0[g].k] = 1; }
    var resto = P0.map(function(x, i){ return i; }).filter(function(i){ return P0[i].fase !== "guiada"; });
    while (out.length < 4) {
      var mejor = -1, pts = -1;
      resto.forEach(function(i){ if (out.indexOf(i) >= 0) return;
        var x = P0[i], p = (x.c || []).filter(function(c){ return !cub[c]; }).length * 10 + (tipos[x.k] ? 0 : 3) + (x.fase === "dominio" ? 1 : 0);
        if (p > pts) { pts = p; mejor = i; } });
      if (mejor < 0 || (pts < 10 && out.length >= 3)) break;
      out.push(mejor); (P0[mejor].c || []).forEach(function(c){ cub[c] = 1; }); tipos[P0[mejor].k] = 1;
    }
    return out.sort(function(a, b){ return a - b; });
  };

  /* ---------- 0. montar: los ejercicios de la ficha sustituyen a los de la lección ---------- */
  var montar = function(){
    Object.keys(E).forEach(function(id){
      var d = ficha(id); if (!d) return;
      var ls = LESSONS.filter(function(x){ return x.id === id; });
      (window.__MALLA || []).forEach(function(t){ (t.sections || []).forEach(function(s){ s.units.forEach(function(u){ u.lessons.forEach(function(l){ if (l.id === id && ls.indexOf(l) < 0) ls.push(l); }); }); }); });
      ls.forEach(function(l){
        if (l.__ens) return; l.__ens = 1;
        /* el mapa muestra el título de la ficha: así coincide con lo que la lección enseña */
        if (d.titulo) l.title = d.titulo;
        var n0 = l.items.length;
        l.items = d.practica.map(function(it){ var x = {}; for (var k in it) x[k] = it[k]; x.t = x.t || l.t; return x; });
        for (var i = 0; i < Math.max(n0, l.items.length); i++) {
          if (i < l.items.length) ITEMS[id + ":" + i] = { it: l.items[i], l: l }; else delete ITEMS[id + ":" + i];
        }
        if (!l.theory) l.theory = " ";   /* así plx18 pone «Ver explicación» en los ejercicios (lo abrimos nosotros) */
      });
    });
  };
  montar();

  /* 4.54: las fichas de cada curso viven en ens/<curso>.js (y sus audios en ens/audio-<curso>.js) y se bajan solo cuando
     hacen falta: al abrir una lección del curso y, en reposo, las del curso activo y las de los repasos pendientes.
     Con los once cursos en el arranque serían varios megas; así cada estudiante baja solo el suyo. */
  var VER = window.__ENS_V || {}, cargado = {}, cola = {};
  var carga = function(tr, cb){
    if (!tr || !VER[tr] || cargado[tr]) { if (cb) cb(); return; }
    if (cola[tr]) { if (cb) cola[tr].push(cb); return; }
    cola[tr] = cb ? [cb] : [];
    var faltan = 2, listo = function(){
      if (--faltan) return;
      cargado[tr] = 1; try { montar(); } catch (e) {}
      var c = cola[tr]; delete cola[tr]; c.forEach(function(f){ try { f(); } catch (e) {} });
    };
    ["ens/" + tr + ".js?v=" + VER[tr], "ens/audio-" + tr + ".js?v=" + (VER[tr + "-a"] || VER[tr])].forEach(function(src){
      var sc = D.createElement("script"); sc.src = src; sc.onload = sc.onerror = listo; D.head.appendChild(sc);
    });
  };
  /* el curso anterior también se baja: «requiere» y «recupera» citan sus conceptos y sus preguntas */
  var PREVIO = { a1: "pp", a2: "a1", fon: "a2", b11: "a2", b12: "b11", b21: "b12", rem: "b21", prog: "rem", c12: "prog", lit: "c12" };
  var cargaConPrevio = function(tr, cb){ var p = PREVIO[tr]; carga(tr, function(){ if (p && VER[p] && !cargado[p]) carga(p, cb); else cb(); }); };
  var trackDe = function(id){ for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return LESSONS[i].track; return null; };
  if (typeof openLesson === "function") {
    var _abreL = openLesson;
    openLesson = function(id){
      var th = this, a = arguments, tr = trackDe(id);
      var p = PREVIO[tr];
      if (tr && VER[tr] && (!cargado[tr] || (p && VER[p] && !cargado[p]))) { cargaConPrevio(tr, function(){ _abreL.apply(th, a); }); return; }
      return _abreL.apply(this, arguments);
    };
  }

  /* 4.65: en el diseño 2 la lección deja solo la práctica que elige() (los demás ejercicios siguen en el repaso) */
  if (typeof start === "function") {
    var _start = start;
    start = function(o){
      try {
        var dd = o && o.mode === "lesson" && o.lesson && ficha(o.lesson.id);
        if (dd && nuevo(o.lesson.id) && o.steps) {
          var keep = elige(dd);
          o.steps = o.steps.filter(function(s){ return s.kind !== "item" || keep.indexOf(+String(s.key).split(":").pop()) >= 0; });
        }
      } catch (e) {}
      return _start.apply(this, arguments);
    };
  }

  /* ---------- piezas de presentación (sirven para las tarjetas y para la ficha de consulta) ---------- */
  var oir = function(fr, cls){ return '<button type="button" class="tx-au ' + (cls || "") + '" data-psay="' + esc(decir(fr)) + '" aria-label="Escuchar: ' + esc(fr) + '">' + ALTAVOZ + "</button>"; };
  var fila = function(fr, es, lg){ return '<button type="button" class="tx-ej" data-psay="' + esc(decir(fr)) + '" aria-label="Escuchar: ' + esc(fr) + '"><span class="tx-au">' + ALTAVOZ + '</span><span><b lang="' + lg + '">' + esc(fr) + "</b>" + (es ? "<small>" + esc(es) + "</small>" : "") + "</span></button>"; };
  var tabla = function(t, lg, sonar){
    return '<div class="ens-tw"><table class="ens-tabla"><thead><tr>' + t[0].map(function(c){ return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t[1].map(function(f){ return "<tr>" + f.map(function(c, i){ return i === 0 && sonar ? '<td><button type="button" class="ens-td-oir" data-psay="' + esc(decir(c)) + '" lang="' + lg + '">' + ALTAVOZ + "<b>" + esc(c) + "</b></button></td>" : "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  };
  var reglas = function(r){ return '<ol class="ens-reglas">' + r.map(function(x, i){ return "<li><i>" + (i + 1) + "</i><span>" + esc(x) + "</span></li>"; }).join("") + "</ol>"; };

  /* 4.52b: imágenes de la app (Manzana, iconos, profes) y marcas de pronunciación */
  var IMG = function(p){ return "img/" + p + ".webp"; };
  var icono = function(ic, cls){ return ic === "sol" ? '<span class="ens-sol ' + (cls || "") + '" aria-hidden="true"></span>' : '<img class="' + (cls || "") + '" src="' + IMG(ic) + '" alt="" loading="lazy" decoding="async">'; };
  /* [x] no suena · {x} suena distinto · ‿ se une con la palabra siguiente */
  var marca = function(s){
    return esc(s).replace(/\[([^\]]+)\]/g, '<s class="ens-mu">$1</s>').replace(/\{([^}]+)\}/g, '<em class="ens-so">$1</em>').replace(/‿/g, '<span class="ens-enl" aria-hidden="true"></span>');
  };
  var LEYENDA = '<div class="ens-ley"><span><s class="ens-mu">t</s> no suena</span><span><em class="ens-so">oi</em> suena distinto</span><span><span class="ens-enl ens-enl--ley"></span> se une</span></div>';
  var MUESTRA = { tu: "de tú", vous: "de usted" };
  /* 4.52c: funciones de la frase (las nombra cada ficha en d.roles; el color es fijo por función en toda la app) */
  var ROLC = { det: "#2F6BFF", nucleo: "#E0457B", adj: "#12A150", cn: "#8A63E8", rel: "#D97A00", suj: "#2F6BFF", verbe: "#E0457B", cod: "#12A150", coi: "#8A63E8", cc: "#D97A00", attr: "#0096A8", pron: "#D97A00", neg: "#7A7593", inf: "#E0457B", adv: "#0096A8", aux: "#E0457B", part: "#9C4DCC", prin: "#2F6BFF", sub: "#D97A00", conn: "#12A150", term: "#E0457B", cat: "#2F6BFF", trait: "#12A150" };
  var rolCol = function(r){ return ROLC[r] || "#7A7593"; };
  /* en modo oscuro los mismos colores, más claros: sobre el fondo azul noche el azul y el gris no se leían (pedido de Jhon) */
  var ROLD = { det: "#9DBBFF", nucleo: "#FF9DC0", adj: "#86E8AE", cn: "#CDB8FF", rel: "#FFC56B", suj: "#9DBBFF", verbe: "#FF9DC0", cod: "#86E8AE", coi: "#CDB8FF", cc: "#FFC56B", attr: "#7FE6F2", pron: "#FFC56B", neg: "#D6D1EE", inf: "#FF9DC0", adv: "#7FE6F2", aux: "#FF9DC0", part: "#E0B3FF", prin: "#9DBBFF", sub: "#FFC56B", conn: "#86E8AE", term: "#FF9DC0", cat: "#9DBBFF", trait: "#86E8AE" };
  /* las opciones de la comprobación y de la pregunta del video, en un orden fijo pero sin patrón: en las fichas la
     correcta suele ir primero, y así nunca se delata por la posición */
  var ordenOps = function(o, clave){
    var hs = function(t){ var x = 7; for (var j = 0; j < t.length; j++) x = (x * 31 + t.charCodeAt(j)) % 9973; return x; };
    return o.map(function(_, i){ return i; }).sort(function(a, b){ return hs(clave + "|" + o[a]) - hs(clave + "|" + o[b]) || a - b; });
  };
  var rolVars = function(r){ return "--c:" + rolCol(r) + ";--cd:" + (ROLD[r] || "#D6D1EE"); };
  /* «analiza»: frases partidas en sus funciones, cada parte con su color y su nombre debajo */
  var analizaHTML = function(A, lg, d){
    var R = (d && d.roles) || {}, usados = [];
    A.frases.forEach(function(f){ f.partes.forEach(function(x){ if (usados.indexOf(x[1]) < 0) usados.push(x[1]); }); });
    var entera = function(f){ return f.fr || f.partes.map(function(x){ return x[0]; }).join(" ").replace(/\s+([.,!?;:])/g, "$1"); };
    return '<div class="ens-an">' + (A.titulo ? '<p class="ens-sub">' + esc(A.titulo) + "</p>" : "") +
      '<div class="ens-roles">' + usados.map(function(r){ return '<span class="ens-rol" style="' + rolVars(r) + '">' + esc(R[r] || r) + "</span>"; }).join("") + "</div>" +
      A.frases.map(function(f){
        return '<div class="ens-an-f"><button type="button" class="ens-an-oir" data-psay="' + esc(decir(entera(f))) + '" aria-label="Escuchar: ' + esc(entera(f)) + '">' + ALTAVOZ + '</button><div class="ens-an-p" lang="' + lg + '">' +
          f.partes.map(function(x){ return '<span class="ens-an-s" style="' + rolVars(x[1]) + '"><b>' + esc(x[0]) + "</b><small>" + esc(R[x[1]] || x[1]) + "</small></span>"; }).join("") +
          "</div>" + (f.es ? '<small class="ens-an-es">' + esc(f.es) + "</small>" : "") + "</div>";
      }).join("") + "</div>";
  };

  /* el sol que se mueve: Bonjour de día, Bonsoir de noche */
  var diaHTML = function(x, lg){
    var h0 = 9;
    return '<div class="ens-dia" data-corte="' + x.corte + '" data-dia="' + esc(x.dia) + '" data-noche="' + esc(x.noche) + '"><p class="ens-dia-t">' + esc(x.titulo) + '</p>' +
      '<div class="ens-cielo"><span class="ens-astro"></span><span class="ens-dia-h">' + h0 + ':00</span><b class="ens-dia-w" lang="' + lg + '">' + esc(x.dia) + "</b></div>" +
      '<input type="range" class="ens-dia-r" min="' + x.de + '" max="' + x.a + '" step="1" value="' + h0 + '" aria-label="Hora del día" data-ens-dia></div>';
  };

  var pinta = {
    vocab: function(B, lg){
      return '<p class="ens-intro">' + esc(B.intro) + "</p>" + (B.dia ? diaHTML(B.dia, lg) : "") + '<div class="ens-flips">' + B.palabras.map(function(w){
        return '<div class="ens-flip" role="button" tabindex="0" data-ens-flip data-say="' + esc(decir(w.fr)) + '" aria-label="' + esc(w.fr) + ". Toca para ver qué significa\"><div class=\"ens-fi\">" +
          '<div class="ens-fc ens-fa">' + (w.ic ? icono(w.ic, "ens-fic") : "") + '<b lang="' + lg + '">' + esc(w.fr) + "</b>" +
            (w.reg ? '<span class="ens-reg" data-r="' + esc(w.reg) + '">' + esc(REG[w.reg] || w.reg) + "</span>" : "") + "</div>" +
          '<div class="ens-fc ens-fb"><b>' + esc(w.es) + "</b>" + (w.nota ? "<span>" + esc(w.nota) + "</span>" : "") +
            (w.ej ? '<button type="button" class="ens-pal-ej" data-psay="' + esc(decir(w.ej[0])) + '">' + ALTAVOZ + '<span><i lang="' + lg + '">' + esc(w.ej[0]) + "</i> " + esc(w.ej[1]) + "</span></button>" : "") + "</div>" +
        "</div></div>";
      }).join("") + "</div>" + (B.clave ? '<p class="ens-clave"><b>En resumen:</b> ' + esc(B.clave) + "</p>" : "") +
        /* el auditor cuenta «ej» como enseñado: aquí también tiene que verse */
        (B.ej ? '<p class="ens-sub">Ejemplos</p><div class="tx-ejs">' + B.ej.map(function(e){ return fila(e[0], e[1], lg); }).join("") + "</div>" : "");
    },
    uso: function(B, lg, d){
      var h = '<p class="ens-intro">' + esc(B.intro) + "</p>";
      if (B.analiza) h += analizaHTML(B.analiza, lg, d);
      if (B.grupos) {
        /* las personas, alternando los dos grupos; al tocarlas se descubre si van de tú o de usted */
        var gente = [], n = Math.max.apply(null, B.grupos.map(function(g){ return g.items.length; }));
        for (var i = 0; i < n; i++) B.grupos.forEach(function(g, gi){ if (g.items[i]) gente.push({ t: g.items[i], tag: g.tag, g: gi }); });
        /* mezcladas en un orden fijo (siempre el mismo) pero sin patrón: alternar delataría la respuesta por columnas */
        var hs = function(t){ var x = 7; for (var j = 0; j < t.length; j++) x = (x * 31 + t.charCodeAt(j)) % 9973; return x; };
        gente.sort(function(a, b){ return hs(a.t) - hs(b.t); });
        h += '<div class="ens-grupos">' + B.grupos.map(function(g, gi){ return '<div class="ens-gr" data-g="' + gi + '" data-tag="' + esc(g.tag) + '">' + icono(g.img) + '<b lang="' + lg + '">' + esc(g.tag) + "</b><small>" + esc(g.t) + "</small></div>"; }).join("") + "</div>" +
          (B.toca ? '<p class="ens-sub">' + esc(B.toca) + "</p>" : "") +
          '<div class="ens-toca">' + gente.map(function(x){ return '<button type="button" class="ens-per" data-ens-per data-g="' + x.g + '" data-tag="' + esc(x.tag) + '"><span>' + esc(x.t) + '</span><i lang="' + lg + '">' + esc(x.tag) + "</i></button>"; }).join("") + "</div>" +
          '<p class="ens-toca-fin" hidden>¡Eso es! Ya sabes con quién usar cada uno.</p>';
      }
      if (B.tabla) h += tabla(B.tabla, lg, false);
      if (B.regla) h += reglas(B.regla);
      if (B.pares) h += '<div class="tx-ejs">' + B.pares.map(function(p){ return fila(p[0], p[1], lg); }).join("") + "</div>";
      if (B.escenas) {
        /* las escenas, en pestañas: se comparan una al lado de la otra sin hacer la tarjeta eterna */
        h += '<div class="ens-tabs" role="tablist">' + B.escenas.map(function(e, i){ return '<button type="button" class="ens-tab' + (i ? "" : " on") + '" role="tab" aria-selected="' + !i + '" data-ens-tab="' + i + '">' + esc(e.titulo) + "</button>"; }).join("") + "</div>" +
          B.escenas.map(function(e, i){
            var primero = e.lineas[0] && e.lineas[0][0];
            return '<div class="ens-chat ens-panel" data-ens-panel="' + i + '"' + (i ? " hidden" : "") + ">" + e.lineas.map(function(x){
              return '<button type="button" class="ens-bur' + (x[0] === primero ? "" : " der") + '" data-psay="' + esc(decir(x[1])) + '"><small>' + esc(x[0]) + '</small><b lang="' + lg + '">' + esc(x[1]) + '</b><span class="ens-tr">' + esc(x[2]) + "</span></button>";
            }).join("") + "</div>";
          }).join("");
      }
      if (B.notas) h += '<ul class="ens-notas">' + B.notas.map(function(n){ return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>";
      return h;
    },
    gram: function(B, lg, d){
      var h = '<p class="ens-intro">' + esc(B.intro) + "</p>";
      if (B.analiza) h += analizaHTML(B.analiza, lg, d);
      if (B.arma) {
        var a = B.arma, f = a.une[0], frase = a.fichas.slice(); frase.splice(f, 2, a.une[2]);
        h += '<div class="ens-arma" data-say="' + esc(decir(frase.join(" "))) + '"><div class="ens-fichas" lang="' + lg + '">' + a.fichas.map(function(t, i){
          if (i === f) return '<span class="ens-ficha-u"><span class="ens-ficha a">' + esc(t) + '</span><span class="ens-ficha b">' + esc(a.fichas[f + 1]) + '</span><span class="ens-ficha c">' + esc(a.une[2]) + "</span></span>";
          if (i === f + 1) return "";
          return '<span class="ens-ficha">' + esc(t) + "</span>";
        }).join("") + '</div><p class="ens-arma-es">' + esc(a.es) + '</p><button type="button" class="pz-btn ens-arma-b" data-ens-unir>' + esc(a.boton) + "</button></div>";
      }
      if (B.tabla) {
        /* diseño 2: primero lo esencial (5 filas) y el resto detrás de «Ver más»; sin la etiqueta técnica de la columna */
        var n2 = pl.classList.contains("ens2"), filas = B.tabla[1], tope = n2 && filas.length > 6 ? 5 : filas.length;
        h += '<div class="ens-frases' + (tope < filas.length ? " m2-capa" : "") + '">' + filas.map(function(f, i){
          return '<button type="button" class="ens-frase' + (i >= tope ? " m2-extra" : "") + '" data-psay="' + esc(decir(String(f[0]).replace(/\s+·\s+[^\s·]+$/, ""))) + '">' + (n2 ? "" : "<small>" + esc(f[2] || "") + "</small>") + '<span class="ens-frase-a">' + ALTAVOZ + '<b lang="' + lg + '">' + (n2 ? (/\s·\s[^\s·]+$/.test(f[0]) ? limpiaFila(f[0]) : arts(f[0])) : esc(f[0])) + "</b></span><span>" + esc(f[1]) + "</span></button>";
        }).join("") + "</div>" + (tope < filas.length ? '<button type="button" class="pz-btn pz-btn--liso m2-vermas" data-m2-vermas>Ver ' + (filas.length - tope) + " ejemplos más</button>" : "");
      }
      if (B.regla) h += '<p class="ens-sub">Las reglas</p>' + reglas(B.regla);
      if (B.ej) h += '<p class="ens-sub">Ejemplos</p><div class="tx-ejs">' + B.ej.map(function(e){ return fila(e[0], e[1], lg); }).join("") + "</div>";
      return h;
    },
    pron: function(B, lg){
      return '<p class="ens-intro">' + esc(B.intro) + "</p>" + (B.leyenda ? LEYENDA : "") + '<div class="ens-pron">' + B.puntos.map(function(p){
        return '<div class="ens-pp"><button type="button" class="ens-pw" data-psay="' + esc(decir(p.fr)) + '" aria-label="Escuchar: ' + esc(p.fr) + '">' + ALTAVOZ + '<b lang="' + lg + '">' + (p.marca ? marca(p.marca) : esc(p.fr)) + "</b></button>" +
          (p.aprox ? '<span class="ens-aprox">suena «' + esc(p.aprox) + "»</span>" : "") + "<p>" + esc(p.regla) + "</p></div>";
      }).join("") + "</div>" + (B.nota ? '<p class="ens-nota">' + esc(B.nota) + "</p>" : "");
    },
    ojo: function(B, lg){
      /* B.etq cambia las etiquetas (p. ej. «Antes» / «Después») para usar las mismas tarjetas sin que parezcan errores */
      if (B.errores[0] && B.errores[0].frase) return cazaHTML(B, lg);
      var etq = B.etq || ["¿Qué está mal?", "Di"], err = !B.etq, toca = B.toca || "Toca cada tarjeta para ver la forma correcta.";
      /* 4.68: sin repetir «Toca cada tarjeta» cuando la intro ya lo dice */
      return '<p class="ens-intro">' + esc(B.intro) + (/toca cada tarjeta/i.test(B.intro) ? "" : " " + esc(toca)) + '</p><div class="ens-errs">' + B.errores.map(function(x){
        return '<div class="ens-flip ' + (err ? "ens-flip--err" : "ens-flip--ab") + '" role="button" tabindex="0" data-ens-flip data-say="' + esc(decir(x[1])) + '" aria-label="' + esc(etq[0]) + ": " + esc(x[0]) + '. Toca para ver la otra cara"><div class="ens-fi">' +
          /* lo que va entre paréntesis es la situación, no parte del error: va aparte y sin tachar */
          '<div class="ens-fc ens-fa"><small>' + esc(etq[0]) + '</small><b class="' + (err ? "ens-mal" : "ens-antes") + '" lang="' + lg + '">' + esc(x[0].replace(/\s*\([^)]*\)\s*/g, " ").trim()) + "</b>" +
            (/\(([^)]*)\)/.test(x[0]) ? '<span class="ens-cuando">' + esc(x[0].match(/\(([^)]*)\)/)[1]) + "</span>" : "") + "</div>" +
          '<div class="ens-fc ens-fb"><small>' + esc(etq[1]) + '</small><b class="ens-bien" lang="' + lg + '">' + esc(x[1]) + "</b><span>" + esc(x[2]) + "</span></div></div></div>";
      }).join("") + "</div>";
    }
  };
  /* 4.68: «Caza el error». Un error a la vez, como pila de tarjetas: la frase real con el error escondido, cada palabra
     se toca; al cazarlo sale la corrección, por qué le pasa a un hispanohablante y un truco. Sin vidas. */
  var SIGUE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  var cazaHTML = function(B, lg){
    var n = B.errores.length;
    /* el error como palabra entera («o» no se busca dentro de «moi») */
    var busca = function(f, m){ for (var i = f.indexOf(m); i >= 0; i = f.indexOf(m, i + 1)) if (!/[\p{L}']/u.test(f.charAt(i - 1) || " ") && !/\p{L}/u.test(f.charAt(i + m.length) || " ")) return i; return f.indexOf(m); };
    return '<p class="ens-intro">' + esc(B.intro) + '</p><div class="ens-caza" data-q="' + (n - 1) + '">' + B.errores.map(function(x, i){
      /* «!», «?», «:» van pegados a su palabra (espacio fino): no son una ficha aparte */
      var frase = x.frase.replace(/\s+([!?:;»])/g, " $1"), at = busca(frase, x.mal), fin = at + x.mal.length, pos = 0, bien = at < 0 ? x.frase : (frase.slice(0, at) + x.bien + frase.slice(fin)).replace(/ /g, " ");
      var pal = frase.split(/([ \t\n]+)/).map(function(w){
        var a = pos; pos += w.length; if (!w.trim()) return " ";
        return '<button type="button" class="ens-cz-w" data-ens-cz' + (at >= 0 && a < fin && a + w.length > at ? " data-ok" : "") + ">" + esc(w) + "</button>";
      }).join("");
      return '<div class="ens-cz" data-ens-czi="' + i + '"' + (i ? " hidden" : "") + '><p class="ens-cz-n">Error ' + (i + 1) + " de " + n + "</p>" +
        '<p class="ens-cz-q"><img src="' + IMG("m2d/lupa") + '" alt="">Hay un error. Tócalo.</p>' + (x.sit ? '<p class="ens-cz-sit">' + esc(x.sit) + "</p>" : "") + '<p class="ens-cz-f" lang="' + lg + '">' + pal + '</p><p class="ens-cz-msg" aria-live="polite"></p>' +
        '<div class="ens-cz-sol" hidden><div class="ens-cz-top"><img src="' + IMG("m2d/celebrar") + '" alt=""><b>¡Cazado!</b><span>Error ' + (i + 1) + " de " + n + " cazado</span></div>" +
        '<div class="ens-cz-fix"><s lang="' + lg + '">' + esc(x.mal) + "</s>" + SIGUE + '<b lang="' + lg + '">' + arts(x.bien) + "</b>" + oir(bien) + "</div>" +
        '<p class="ens-cz-bien" lang="' + lg + '">' + (at < 0 ? esc(bien) : esc(frase.slice(0, at)) + "<mark>" + arts(x.bien) + "</mark>" + esc(frase.slice(fin))) + "</p>" +
        '<div class="ens-cz-p"><small>Por qué te pasa</small><p>' + esc(x.porque) + "</p></div>" +
        '<div class="ens-cz-p ens-cz-truco"><small>Truco</small><p>' + esc(x.truco) + "</p></div>" +
        (i < n - 1 ? '<button type="button" class="pz-btn pz-btn--oro ens-cz-sig" data-ens-cz-sig>Siguiente error' + SIGUE + "</button>" : '<p class="ens-cz-fin">¡Los ' + n + " errores cazados! Ahora ya sabes dónde se equivoca el cerebro.</p>") +
        "</div></div>";
    }).join("") + "</div>";
  };
  /* 4.52d: cada bloque puede abrir con «la idea» en una sola frase, antes de cualquier regla (pedido de Jhon: explicaciones más simples) */
  var bloqueHTML = function(d, B){
    var f = pinta[B.tipo] || pinta.uso;
    return (B.idea ? '<div class="ens-idea"><img src="' + IMG(pl.classList.contains("ens2") ? (B.tipo === "ojo" ? "m2d/alerta" : "m2d/explica") : "ic2/bombilla") + '" alt="" loading="lazy"><p><b>' + (B.tipo === "ojo" ? "Ojo" : "La idea") + "</b>" + esc(B.idea) + "</p></div>" : "") + f(B, lengua(d), d);
  };
  /* 4.65: una fila de tabla como «frase · palabra» (la palabra está para el auditor): se ve la frase con la palabra resaltada */
  var limpiaFila = function(t){
    var m = String(t).match(/^(.*\S)\s+·\s+([^\s·]+)$/);
    if (!m || m[1].indexOf(m[2]) < 0) return esc(t);
    var i = m[1].indexOf(m[2]);
    return esc(m[1].slice(0, i)) + "<mark>" + esc(m[2]) + "</mark>" + esc(m[1].slice(i + m[2].length));
  };
  /* la tarjeta de misión del diseño 2: portada, título, una frase, lo que lograrás y lo demás plegado */
  var cartaMision = function(d, id){
    var o = d.objetivo, fl = faltan(d), tr = trackDe(id), ls = LESSONS.filter(function(x){ return x.track === tr; }), n = ls.findIndex(function(x){ return x.id === id; }) + 1;
    var img = (d.contexto && BG2[d.contexto.img]) || "esc/fondo-libros-globo";
    var h = '<div class="m2-portada" style="background-image:url(' + IMG(img) + ')"><span class="m2-chip">' + esc(CURSO[tr] || "") + (n > 0 ? " · Lección " + n : "") + "</span></div>" +
      '<h2 class="m2-tit">' + esc(d.titulo) + '</h2><p class="m2-frase">' + esc(o.corto || o.que) + "</p>" +
      '<div class="m2-meta"><img src="' + IMG("ic3/diana-objetivo") + '" alt=""><p><b>Al final</b> ' + esc(String(o.capacidad || "").replace(/^Ahora\s+/, "")) + "</p></div>" +
      '<details class="m2-mas"><summary>Qué vas a poder hacer <span>' + o.podras.length + "</span></summary><ul>" + o.podras.map(function(p){ return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></details>" +
      (o.previos && o.previos.length ? '<details class="m2-mas"><summary>Lo que necesitas saber antes</summary><p>' + esc(o.previos.join(" · ")) + "</p></details>" : "");
    if (fl.length) h += '<div class="ens-aviso"><b>Conviene repasar antes:</b>' + fl.map(function(f){ return f.id ? '<button type="button" class="ens-chip" data-ens-ficha="' + esc(f.id) + '" data-ens-b="' + esc(f.b) + '">' + esc(f.n) + "</button>" : "<span>" + esc(f.n) + "</span>"; }).join("") + "</div>";
    return h;
  };
  var ICF = { obj: "ic3/diana-objetivo", vid: "ic3/claqueta-video", ctx: "ic3/burbujas-situacion", b: "ic2/bombilla", ojo: "ic3/alerta-trampa", ejr: "ic3/lupa-ejemplos", cq: "ic3/correcto" };

  /* ---------- 1 a 5: las tarjetas del paso de teoría ---------- */
  var T = { id: null, i: 0, n: 0, cards: [], cola: null, ok: false, volver: null, ej: 0 };
  var quien = function(pf, t){ return '<div class="tx-prof">' + (pf ? '<img src="' + pf.cara + '" alt="" decoding="async">' : "") + "<p>" + (pf ? "<b>" + esc(pf.n) + "</b>" : "") + esc(t) + "</p></div>"; };

  /* conceptos previos que el estudiante todavía no tiene y lecciones donde se enseñan */
  var faltan = function(d){
    var m = mem();
    /* 4.54: lo estudiado que flojea y, de lo no estudiado, solo lo que esta lección reutiliza (recupera); como mucho cuatro.
       Con las fichas de un curso entero, «requiere» puede listar decenas de conceptos del curso anterior. */
    var rec = d.recupera || [];
    return (d.requiere || []).filter(function(c){ var x = m.c[llave(d, c)]; return x ? (!x.caja && x.n && x.ok / x.n < 0.5) : rec.indexOf(c) >= 0; }).map(function(c){
      for (var id in E) { var f = ficha(id); if (f && f.conceptos[c] && lengua(f) === lengua(d)) return { c: c, id: id, n: f.conceptos[c].n, b: f.conceptos[c].b }; }
      return null;
    }).filter(Boolean).slice(0, 4);
  };
  /* recuperar: hasta dos preguntas de lecciones anteriores sobre los conceptos que esta lección reutiliza */
  var recuperar = function(d, idAct){
    var m = mem(), out = [];
    (d.recupera || []).forEach(function(c){
      var cand = [];
      Object.keys(E).forEach(function(id){ var f = ficha(id); if (!f || id === idAct || lengua(f) !== lengua(d)) return;
        f.practica.forEach(function(it, i){ if (it.k === "choice" && !it.say && (it.c || []).indexOf(c) >= 0) cand.push({ id: id, i: i, it: it, c: c }); }); });
      if (cand.length) out.push(cand[(m.c[llave(d, c)] ? m.c[llave(d, c)].n : 0) % cand.length]);
    });
    out.sort(function(a, b){ var x = m.c[llave(d, a.c)], y = m.c[llave(d, b.c)]; return ((x && x.prox) || 0) - ((y && y.prox) || 0); });
    return out.slice(0, 2);
  };
  var RUTA = [["Video", "ic2/mando"], ["Situación", "ic2/amigos"], ["Aprende", "ic2/libro"], ["Ejemplos", "ic2/bombilla"], ["Comprueba", "ic2/pregunta"], ["Practica", "ic2/lapiz"], ["Demuestra", "ic2/trofeo"]];
  var cartaObjetivo = function(d, id, pf){
    var o = d.objetivo, fl = faltan(d), rec = recuperar(d, id), ics = o.iconos || [];
    var h = '<div class="ens-hero">' + (pf ? '<img class="ens-hero-pf" src="' + pf.img + '" alt="" decoding="async">' : "") +
      '<div class="ens-glo">' + (pf ? "<small>" + esc(pf.n) + "</small>" : "") + "<b>" + esc(o.corto || "Antes de empezar, mira qué vas a aprender.") + "</b></div></div>" +
      '<p class="ens-intro">' + esc(o.que) + "</p>" +
      '<p class="ens-sub">Al terminar podrás</p><div class="ens-tiles">' + o.podras.map(function(p, i){
        return '<div class="ens-tile">' + (ics[i] ? icono(ics[i]) : "") + "<span>" + esc(p) + "</span></div>";
      }).join("") + "</div>" +
      '<p class="ens-previo">' + icono("ic2/libros") + "<span><b>Lo que necesitas saber antes:</b> " +
        (o.previos && o.previos.length ? esc(o.previos.join(" · ")) : "nada, esta lección empieza desde cero.") + "</span></p>";
    if (fl.length) h += '<div class="ens-aviso"><b>Antes de seguir, conviene repasar:</b>' + fl.map(function(f){ return f.id ? '<button type="button" class="ens-chip" data-ens-ficha="' + esc(f.id) + '" data-ens-b="' + esc(f.b) + '">' + esc(f.n) + "</button>" : "<span>" + esc(f.n) + "</span>"; }).join("") + "</div>";
    if (rec.length) h += '<div class="ens-rec"><p class="ens-sub">Recuerda lo que ya sabes</p>' + rec.map(function(r, n){
      return '<div class="ens-rq" data-ens-rq="' + n + '" data-c="' + esc(r.c) + '"><p class="ens-rq-q">' + (r.it.ctx ? "<small>" + esc(r.it.ctx) + "</small>" : "") + '<b lang="' + lengua(d) + '">' + esc(r.it.q) + '</b></p><div class="tx-ops">' +
        r.it.o.map(function(op, j){ return '<button type="button" class="pz-opt tx-op" data-ens-rec="' + (j === r.it.a ? 1 : 0) + '" lang="' + lengua(d) + '">' + esc(op) + "</button>"; }).join("") + '</div><p class="tx-res" hidden></p></div>';
    }).join("") + "</div>";
    h += '<p class="ens-sub">Así va la lección</p><ol class="ens-ruta">' + RUTA.filter(function(r){ return r[0] !== "Video" || d.video; }).map(function(r){ return "<li>" + icono(r[1]) + "<span>" + r[0] + "</span></li>"; }).join("") + "</ol>";
    return h;
  };

  /* ---------- el microvideo (fase 2): Manzana lo explica; la animación va con la voz ---------- */
  var escena = {
    hola: function(e, lg){ return '<img class="ensv-mz" src="' + IMG(e.img) + '" alt="" data-p="0"><b class="ensv-grande" lang="' + lg + '" data-p="1">' + esc(e.grande) + "</b>"; },
    dia: function(e, lg){
      return '<div class="ensv-dia"><div class="ensv-mitad ensv-sol-l" data-p="1"><span class="ens-sol"></span><b lang="' + lg + '">Bonjour</b><small>de día</small></div>' +
        '<div class="ensv-mitad ensv-luna-l" data-p="2"><img src="' + IMG("ic2/luna") + '" alt=""><b lang="' + lg + '">Bonsoir</b><small>de noche, al llegar</small></div></div>' +
        '<div class="ensv-nota" data-p="3"><img src="' + IMG("m2d/dormir") + '" alt=""><span><s lang="' + lg + '">Bonne nuit</s> solo para ir a dormir</span></div>';
    },
    versus: function(e, lg){
      var col = function(x, p){ return '<div class="ensv-col" data-p="' + p + '" data-tag="' + esc(x.tag) + '"><img src="' + IMG(x.img) + '" alt=""><small>' + esc(x.t) + '</small><b lang="' + lg + '">' + esc(x.fr) + '</b><i lang="' + lg + '">' + esc(x.tag) + "</i></div>"; };
      return '<div class="ensv-vs">' + col(e.izq, 1) + col(e.der, 2) + "</div>";
    },
    pregunta: function(e, lg){
      return '<img class="ensv-mz ensv-mz--sm" src="' + IMG(e.img) + '" alt="" data-p="0"><p class="ensv-q" data-p="0">' + esc(e.q) + '</p><div class="ensv-ops" data-p="0">' +
        ordenOps(e.o, e.q).map(function(i){ return '<button type="button" class="ensv-op" data-ev-op="' + i + '"' + (e.es ? "" : ' lang="' + lg + '"') + " disabled>" + esc(e.o[i]) + "</button>"; }).join("") + '</div><p class="ensv-res" hidden></p>';
    },
    bloques: function(e, lg){
      var f = e.une[0];
      return '<div class="ensv-bloques" lang="' + lg + '">' + e.fichas.map(function(t, i){
        if (i === f) return '<span class="ensv-u" data-p="2"><span class="ensv-f a">' + esc(t) + '</span><span class="ensv-f b">' + esc(e.fichas[f + 1]) + '</span><span class="ensv-f c">' + esc(e.une[2]) + "</span></span>";
        if (i === f + 1) return "";
        return '<span class="ensv-f" data-p="' + (i < f ? 1 : 3) + '">' + esc(t) + "</span>";
      }).join("") + "</div>";
    },
    dos: function(e, lg){
      var c = function(x, p){ return '<div class="ensv-dos" data-p="' + p + '" data-tag="' + esc(x.tag) + '"><i>' + esc(x.tag) + '</i><b lang="' + lg + '">' + (x.marca ? marca(x.marca) : esc(x.fr)) + "</b><small>" + esc(x.es) + "</small></div>"; };
      return '<div class="ensv-dos-w">' + c(e.a, 1) + c(e.b, 2) + "</div>";
    },
    frase: function(e, lg, d){
      var R = (d && d.roles) || {};
      return '<div class="ensv-filas">' + e.filas.map(function(f){
        return (f.nota ? '<p class="ensv-fnota" data-p="' + (f.p || 0) + '">' + esc(f.nota) + "</p>" : "") + '<div class="ensv-fila" lang="' + lg + '">' + f.partes.map(function(x){
          return '<span class="ensv-pz" data-p="' + (x[2] || 0) + '" style="--c:' + rolCol(x[1]) + '"><b>' + esc(x[0]) + "</b>" + (x[1] && x[1] !== "-" ? "<small>" + esc(R[x[1]] || x[1]) + "</small>" : "") + "</span>";
        }).join("") + "</div>";
      }).join("") + "</div>";
    },
    resumen: function(e, lg){
      return '<img class="ensv-mz ensv-mz--sm" src="' + IMG(e.img) + '" alt="" data-p="0"><div class="ensv-chips" data-p="1">' + e.chips.map(function(c, i){ return '<span lang="' + lg + '" style="--i:' + i + '">' + esc(c) + "</span>"; }).join("") + "</div>";
    },
    /* 4.66: la pizarra (la de las tutorías de Jhon): Manzana explica y en la pizarra aparece lo que dice, pieza por pieza.
       items: {fr, es, img} una fila con dibujo · {regla} una nota de marcador · {mal, bien} tachado y corregido · {tabla: [[…]]} */
    pizarra: function(e, lg){
      var it = function(x){
        var p = ' data-p="' + (x.p || 0) + '"';
        if (x.regla) return '<p class="pzv-regla"' + p + ">" + arts(x.regla, true) + "</p>";
        if (x.mal) return '<div class="pzv-par"' + p + '><s lang="' + lg + '">' + esc(x.mal) + '</s><span aria-hidden="true">→</span><b lang="' + lg + '">' + arts(x.bien) + "</b>" + (x.es ? "<small>" + esc(x.es) + "</small>" : "") + "</div>";
        if (x.tabla) return '<table class="pzv-tabla"' + p + "><tbody>" + x.tabla.map(function(f, i){ return "<tr>" + f.map(function(c){ return (i ? "<td>" : "<th>") + arts(c) + (i ? "</td>" : "</th>"); }).join("") + "</tr>"; }).join("") + "</tbody></table>";
        return '<div class="pzv-fila"' + p + ">" + (x.img ? '<img src="' + IMG(x.img) + '" alt="">' : "") + '<span><b lang="' + lg + '">' + arts(x.fr) + "</b>" + (x.es ? "<small>" + esc(x.es) + "</small>" : "") + "</span></div>";
      };
      return '<div class="pzv"><div class="pzv-marco"><div class="pzv-sup">' + (e.titulo ? '<p class="pzv-t" data-p="0">' + esc(e.titulo) + "</p>" : "") +
        '<div class="pzv-items' + (e.cols ? " pzv-cols" : "") + '">' + e.items.map(it).join("") + '</div></div><div class="pzv-bandeja" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>' +
        '<img class="pzv-mz" src="' + IMG(e.mz || "m2d/explica") + '" alt="" data-p="0"></div>';
    },
    /* 4.66: un personaje en su lugar, hablando (la situación del gancho) */
    persona: function(e, lg){
      return '<div class="pvv" style="background-image:url(' + IMG(e.fondo || "esc/fondo-pastel") + ')"><img class="pvv-pj" src="' + IMG(e.img) + '" alt="" data-p="0">' +
        '<div class="pvv-bur" data-p="1"><b lang="' + lg + '">' + arts(e.fr) + "</b>" + (e.es ? "<small>" + esc(e.es) + "</small>" : "") + "</div>" +
        (e.nota ? '<p class="pvv-nota" data-p="2">' + esc(e.nota) + "</p>" : "") + "</div>";
    }
  };
  /* los artículos con su color fijo en toda la lección: masculino azul, femenino coral, plural morado, l' turquesa */
  var ARTC = { le: "m", un: "m", la: "f", une: "f", les: "p", des: "p", "l'": "v" };
  /* 4.69: la ficha con «arts: false» (temas que no son de artículos) no colorea: «un» puede ser un número y «la», español */
  var sinArts = false;
  var arts = function(t, todo){
    if (sinArts) return esc(t == null ? "" : t);
    return String(t == null ? "" : t).split(/(\s+)/).map(function(w){
      var m = w.match(/^([«(]?)(l'|le|la|les|un|une|des)(?![\p{L}])(.*)$/iu);
      if (m && ARTC[m[2].toLowerCase()]) return esc(m[1]) + '<span class="art art-' + ARTC[m[2].toLowerCase()] + '">' + esc(m[2]) + "</span>" + esc(m[3]);
      var m2 = w.match(/^(l')(.+)$/i);
      if (m2) return '<span class="art art-v">' + esc(m2[1]) + "</span>" + esc(m2[2]);
      return esc(w);
    }).join("");
  };
  var mmss = function(s){ s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2); };
  var segs = function(d, id){
    var L = [], t = 0, DUR = window.__ENS_DUR || {};
    d.video.escenas.forEach(function(e, n){
      if (n) t += 0.5;
      e.seg.forEach(function(g, m){
        var k = "ens:" + id + ":v" + n + ":" + m, txt = g.es || g.fr, dur = DUR[k] || Math.max(1.6, txt.split(/\s+/).length * 0.42);
        L.push({ e: n, s: m, g: g, k: k, t0: t, dur: dur, p: g.p || 0 }); t += dur + 0.3;
      });
    });
    return { L: L, total: t };
  };
  var cartaVideo = function(d, id){
    var v = d.video, lg = lengua(d), S2 = segs(d, id);
    var marcas = d.video.escenas.map(function(_, n){ var x = S2.L.filter(function(s){ return s.e === n; })[0]; return '<i style="left:' + (x.t0 / S2.total * 100).toFixed(2) + '%"></i>'; }).join("");
    var n2 = pl.classList.contains("ens2"), fv = n2 && d.contexto && FV2[d.contexto.img];
    var CAP = { hola: "Gancho", frase: "Idea", dia: "Idea", versus: "Compara", dos: "Compara", bloques: "Ejemplo", pregunta: "Pausa", resumen: "Cierre" };
    var caps = "";
    if (n2) {
      var grupos = [];
      v.escenas.forEach(function(e, n){ var t = e.cap || CAP[e.v] || "Idea", g = grupos[grupos.length - 1]; if (g && g.t === t) g.n.push(n); else grupos.push({ t: t, n: [n] }); });
      caps = '<div class="m2-caps' + (grupos.length > 6 ? " m2-caps--mov" : "") + '">' + grupos.map(function(g){ return '<span data-cap="' + g.n.join(" ") + '">' + esc(g.t) + "</span>"; }).join("") + "</div>";
    }
    return '<div class="ensv' + (n2 ? " m2-v" : "") + '" data-ev>' +
      '<div class="ensv-pant"' + (fv ? ' style="--fv:url(' + IMG(fv) + ')"' : "") + '>' + v.escenas.map(function(e, n){ return '<div class="ensv-esc ensv-e-' + esc(e.v) + '" data-ev-esc="' + n + '">' + (escena[e.v] || escena.hola)(e, lg, d) + "</div>"; }).join("") +
        '<button type="button" class="ensv-portada" data-ev-play aria-label="Ver el video"><img src="' + IMG("m2d/saludar") + '" alt=""><span class="ensv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span><b>' + esc(v.titulo) + "</b><small>" + mmss(S2.total) + " · con subtítulos</small></button>" +
        '<div class="ensv-fin" hidden><img src="' + IMG("m2d/pulgar") + '" alt=""><button type="button" class="pz-btn" data-ens="sig">Seguir: la situación</button><button type="button" class="pz-btn pz-btn--liso" data-ev-otra>Ver otra vez</button></div>' +
      "</div>" +
      /* 4.67: los subtítulos van debajo del video, en su franja, y ya no tapan la escena */
      '<p class="ensv-sub" aria-live="polite"></p>' +
      '<div class="ensv-ctl"><button type="button" class="ensv-b" data-ev-play aria-label="Reproducir"><svg class="ensv-i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><svg class="ensv-i-pausa" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg></button>' +
        '<div class="ensv-barra" data-ev-barra role="slider" aria-label="Avance del video" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0"><span class="ensv-lleno"></span>' + marcas + "</div>" +
        '<span class="ensv-t">0:00 / ' + mmss(S2.total) + '</span><button type="button" class="ensv-b ensv-cc on" data-ev-cc aria-pressed="true" aria-label="Subtítulos">CC</button></div>' + caps +
      '<details class="ensv-trans"' + (window.matchMedia && matchMedia("(min-width:1024px)").matches ? " open" : "") + '><summary>Transcripción</summary><ol>' + S2.L.map(function(s){
        return s.g.fr ? '<li class="fr"><button type="button" class="ens-pal-ej" data-psay="' + esc(decir(s.g.fr)) + '">' + ALTAVOZ + '<i lang="' + lg + '">' + esc(s.g.fr) + "</i></button></li>" : "<li>" + esc(s.g.es) + "</li>";
      }).join("") + "</ol></details></div>";
  };

  var cartaContexto = function(d){
    var c = d.contexto, lg = lengua(d);
    if (pl.classList.contains("ens2")) {
      /* diseño 2: la escena real del lugar, caras de verdad y el diálogo burbuja a burbuja */
      var av = function(k, p){ return CARA[k] ? '<img class="m2-av" src="' + IMG(CARA[k]) + '" alt="">' : '<span class="ens-av">' + esc(p.n.replace(/^(Madame|Monsieur|El|La)\s+/, "").charAt(0)) + "</span>"; };
      return '<div class="ens-lugar m2-lugar" style="background-image:url(' + IMG(BG2[c.img] || c.img || "esc/fondo-pastel") + ')"><b>' + esc(c.titulo) + "</b></div>" +
        '<p class="ens-intro">' + esc(c.escena) + '</p><div class="ens-dlg-bar m2-dlg-bar"><button type="button" class="pz-btn pz-btn--liso ens-todo" data-ens-todo>' + ALTAVOZ + ' Escuchar todo</button>' +
        '<button type="button" class="ens-trad" role="switch" aria-checked="false" data-ens-trad><span class="pz-sw" aria-hidden="true"></span>Traducción</button></div><div class="ens-dlg ens-chat m2-chat">' +
        c.lineas.map(function(x, n){ var p = c.pj[x[0]] || { n: x[0] };
          return '<button type="button" class="ens-dl ens-bur' + (x[0] === c.yo ? " der" : "") + '" data-ens-linea="' + n + '" data-pj="' + esc(x[0]) + '"' + (n ? " hidden" : "") + '>' + av(x[0], p) + '<span><small>' + esc(p.n) + '</small><b lang="' + lg + '">' + esc(x[1]) + '</b><span class="ens-tr">' + esc(x[2]) + "</span></span></button>"; }).join("") +
        "</div>" + (c.lineas.length > 1 ? '<button type="button" class="pz-btn m2-mas-dlg" data-m2-linea>Continuar el diálogo <span>1 de ' + c.lineas.length + "</span></button>" : "") +
        (c.fijate ? '<p class="ens-clave m2-fijate"' + (c.lineas.length > 1 ? " hidden" : "") + ">" + esc(c.fijate) + "</p>" : "");
    }
    return (c.img ?'<div class="ens-lugar" style="background-image:url(' + IMG(c.img) + ')"><b>' + esc(c.titulo) + "</b></div>" : "") +
      '<p class="ens-intro">' + esc(c.escena) + '</p><div class="ens-dlg-bar"><button type="button" class="pz-btn ens-todo" data-ens-todo>' + ALTAVOZ + ' Escuchar el diálogo</button>' +
      '<button type="button" class="ens-trad" role="switch" aria-checked="false" data-ens-trad><span class="pz-sw" aria-hidden="true"></span>Ver traducción</button></div><div class="ens-dlg ens-chat">' +
      c.lineas.map(function(x, n){ var p = c.pj[x[0]] || { n: x[0] };
        return '<button type="button" class="ens-dl ens-bur' + (x[0] === c.yo ? " der" : "") + '" data-ens-linea="' + n + '" data-pj="' + esc(x[0]) + '" style="--i:' + n + '"><span class="ens-av">' + esc(p.n.replace(/^(Madame|Monsieur)\s+/, "").charAt(0)) + '</span><span><small>' + esc(p.n) + (p.rol ? " · " + esc(p.rol) : "") + '</small><b lang="' + lg + '">' + esc(x[1]) + '</b><span class="ens-tr">' + esc(x[2]) + "</span></span></button>"; }).join("") +
      "</div>" + (c.fijate ? '<p class="ens-clave">' + esc(c.fijate) + "</p>" : "");
  };
  /* ejemplos resueltos: primero piensas; la respuesta y sus pasos se descubren al tocar */
  var cartaEjemplos = function(d){
    var lg = lengua(d), n = d.ejemplos.length;
    return '<p class="ens-intro">Antes de practicar, mira cómo se resuelve cada caso. Piénsalo primero y luego descubre la respuesta.</p><div class="ens-ejr">' + d.ejemplos.map(function(x, i){
      return '<div class="ens-ex" data-ens-ex="' + i + '"' + (i ? " hidden" : "") + '><p class="ens-ex-n">Ejemplo ' + (i + 1) + " de " + n + '</p><div class="ens-ex-sit"><img src="' + IMG("m2d/pensativo") + '" alt=""><p>' + esc(x.sit) + "</p></div>" +
        '<button type="button" class="pz-btn pz-btn--oro ens-ex-ver" data-ens-ver>Ya lo pensé: ver la respuesta</button>' +
        '<div class="ens-ex-sol" hidden><div class="tx-si ens-resp"><small>Respuesta</small><b lang="' + lg + '">' + esc(x.resp) + "</b>" + oir(x.resp) + "</div>" +
        '<ol class="ens-reglas">' + x.pasos.map(function(p, j){ return '<li style="--i:' + j + '"><i>' + (j + 1) + "</i><span>" + esc(p) + "</span></li>"; }).join("") + "</ol>" +
        (x.mal ? '<div class="tx-no"><small>No</small><b lang="' + lg + '">' + esc(x.mal) + "</b></div>" : "") +
        '<p class="ens-porque"><b>Por qué:</b> ' + esc(x.porque) + "</p></div></div>";
    }).join("") + '</div><div class="ens-ex-nav"><button type="button" class="pz-btn pz-btn--liso" data-ens-ex-ir="-1" aria-label="Ejemplo anterior"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><span class="ens-ex-dots">' +
      d.ejemplos.map(function(_, i){ return '<i class="' + (i ? "" : "on") + '"></i>'; }).join("") + '</span><button type="button" class="pz-btn pz-btn--liso" data-ens-ex-ir="1" aria-label="Ejemplo siguiente"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>';
  };
  /* 4.68: «Así se piensa». La ayuda se retira: el ejemplo 1 lo resuelve Manzana, en el 2 decides el último paso y en el 3
     todos. Los tres apilados y un solo botón; el «Siguiente» del pie solo cambia de tarjeta. */
  var cartaAsi = function(d){
    var lg = lengua(d), n = d.ejemplos.length;
    return '<p class="ens-intro">Así piensa Manzana cada caso, paso a paso. En cada ejemplo te deja decidir un poco más.</p><div class="ens-asi">' + d.ejemplos.map(function(x, i){
      var m = x.pasos.length, tuyos = i === 0 ? 0 : i === n - 1 ? m : 1;
      var modo = !tuyos ? "Lo resuelve Manzana" : tuyos >= m ? "Ahora decides tú" : "Tú decides el último paso";
      return '<section class="ens-as' + (i ? " bloq" : " on") + '" data-ens-as="' + i + '"><header class="ens-as-h"><span>' + (i + 1) + "</span><div><small>Ejemplo " + (i + 1) + " · " + modo + '</small><p class="ens-as-sit">' + esc(x.sit) + "</p></div></header>" +
        '<ol class="ens-as-pasos">' + x.pasos.map(function(p, j){
          var tu = j >= m - tuyos && p.ops, a = p.a != null ? p.a : p.ops ? p.ops[p.ok] : "";
          return '<li class="ens-as-p"' + (tu ? " data-tu" : "") + (i || j ? " hidden" : "") + "><i>" + (j + 1) + '</i><div><p class="ens-as-q">' + esc(p.q) + "</p>" +
            (tu ? '<div class="ens-as-ops">' + p.ops.map(function(o, k){ return '<button type="button" class="pz-opt ens-as-op" data-ens-asi-op' + (k === p.ok ? " data-ok" : "") + ">" + esc(o) + "</button>"; }).join("") + "</div>" : "") +
            '<p class="ens-as-a"' + (tu ? " hidden" : "") + '><img src="' + IMG(tu ? "m2d/pulgar" : "m2d/explica") + '" alt=""><span><em>' + (tu ? "" : "Manzana: ") + "</em><b>" + esc(a) + "</b>" + (p.nota ? "<small>" + esc(p.nota) + "</small>" : "") + "</span></p></div></li>";
        }).join("") + "</ol>" +
        '<div class="ens-as-sol" hidden><div class="tx-si ens-resp"><small>Respuesta</small><b lang="' + lg + '">' + arts(x.resp) + "</b>" + oir(x.resp) + '</div><p class="ens-porque"><b>Por qué:</b> ' + esc(x.porque) + "</p></div></section>";
    }).join("") + '</div><button type="button" class="pz-btn pz-btn--oro ens-as-sig" data-ens-asi>Siguiente paso' + SIGUE + '</button><p class="ens-as-fin" hidden>¡Listo! Ya piensas como Manzana. Ahora compruébalo tú.</p>';
  };
  /* lo que hará el botón al tocarlo: otro paso, la respuesta o el ejemplo siguiente */
  var asiRotulo = function(b){
    var as = pl.querySelector(".ens-as.on"); if (!as) return;
    var t = as.querySelector(".ens-as-p[hidden]") ? "Siguiente paso" : as.querySelector(".ens-as-sol").hidden ? "Ver la respuesta" : "Siguiente ejemplo";
    b.innerHTML = t + SIGUE;
  };
  var cartaComprueba = function(){ return '<p class="ens-intro">Unas preguntas rápidas para ver si quedó claro. No es un examen: si algo falla, volvemos a la explicación.</p><div class="ens-cq"></div>'; };

  var arma = function(){
    var st = paso(), d = actual();
    if (!d || !st || st.kind !== "theory") { pl.classList.remove("ens", "ens-bloq"); video.suelta(); return; }
    var w = pl.querySelector(".pbody .wrap"); if (!w || w.classList.contains("ens-on")) return;
    sinArts = d.arts === false;
    var id = P.lesson.id, pf = prof(id), n2 = nuevo(id);
    pl.classList.toggle("ens2", n2);
    if (T.id !== id || T.p !== P) { T = { id: id, p: P, i: 0, cola: null, ok: false, volver: null, ej: 0 }; video.suelta(); }
    var cards = [];
    var carta = function(f, k, tit, html, b, ic){ cards.push({ f: f, k: k, tit: tit, html: html, b: b, ic: ic }); };
    if (n2) carta(1, "obj", "Misión", cartaMision(d, id), null, ICF.obj); else carta(1, "obj", "Objetivo", cartaObjetivo(d, id, pf));
    if (d.video) carta(2, "vid", n2 ? "Video" : "Mira · Video", cartaVideo(d, id), null, ICF.vid);
    if (d.contexto) carta(2, "ctx", n2 ? "Situación" : "Situación · " + d.contexto.titulo, cartaContexto(d), null, ICF.ctx);
    var h2 = function(t){ return n2 ? '<h2 class="m2-h">' + esc(t) + "</h2>" : ""; };
    d.ensena.forEach(function(B){ var cz = B.tipo === "ojo" && B.errores[0] && B.errores[0].frase; carta(3, "b", n2 ? (B.tipo === "ojo" ? "Errores" : "Aprende") : "Aprende · " + B.titulo, h2(cz ? "Caza el error" : B.tipo === "ojo" ? "Errores frecuentes" : B.titulo) + bloqueHTML(d, B), B.id, B.tipo === "ojo" ? ICF.ojo : ICF.b); });
    var asi = d.ejemplos && d.ejemplos[0] && d.ejemplos[0].pasos[0] && typeof d.ejemplos[0].pasos[0] === "object";
    if (d.ejemplos && d.ejemplos.length) carta(4, "ejr", n2 ? "Ejemplos" : "Ejemplos resueltos", h2(asi ? "Así se piensa" : "Ejemplos resueltos") + (asi ? cartaAsi(d) : cartaEjemplos(d)), null, ICF.ejr);
    carta(5, "cq", n2 ? "Compruebo" : "Comprueba", h2("Compruebo lo que entendí") + cartaComprueba(), null, ICF.cq);
    T.cards = cards; T.n = cards.length; if (T.i >= T.n) T.i = T.n - 1;
    /* fuera lo que pintaba la teoría vieja: el título se queda en la primera tarjeta */
    var disp = w.querySelector(":scope > .disp");
    [].slice.call(w.children).forEach(function(n){ if (n !== disp) n.remove(); });
    var cab = D.createElement("div"); cab.className = "tx-cab ens-cab";
    cab.innerHTML = '<div class="tx-pasos" role="tablist" aria-label="Partes de la explicación">' + cards.map(function(c, i){ return '<button type="button" class="tx-p" data-ens-ir="' + i + '" role="tab" aria-label="' + esc(c.tit) + '"></button>'; }).join("") + "</div>" +
      '<button type="button" class="pz-btn pz-btn--texto tx-saltar" data-ens-ir="' + (T.n - 1) + '">Ya lo sé: comprobar</button>';
    w.insertBefore(cab, w.firstChild);
    cards.forEach(function(c, i){
      var s = D.createElement("section"); s.className = "tx-s ens-s"; s.dataset.k = c.k; if (c.b) s.dataset.b = c.b;
      s.innerHTML = (n2 ? '<p class="tx-k m2-k" style="text-transform:none!important;letter-spacing:0!important"><img src="' + IMG(c.ic) + '" alt=""><span>' + (i + 1) + " de " + cards.length + " · " + esc(c.tit) + "</span></p>" : '<p class="tx-k">Fase ' + c.f + " de 10 · " + esc(c.tit) + "</p>") + c.html;
      if (i === 0 && disp && !n2) s.insertBefore(disp, s.children[1]);
      if (i === 0 && disp && n2) disp.hidden = true;
      w.appendChild(s);
    });
    w.classList.add("ens-on", "tx-on"); pl.classList.add("ens", "tx");
    var pfa = pl.querySelector(".pf .pfa");
    if (pfa && !pfa.querySelector(".ens-sig")) pfa.insertAdjacentHTML("afterbegin", '<button type="button" class="pz-btn pz-btn--liso pz-btn--signo btn tx-atras ens-atras" data-ens="atras" aria-label="Atrás"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="pz-btn btn tx-sig ens-sig" data-ens="sig">Siguiente</button>');
    cq();
    muestra();
  };
  var muestra = function(){
    var w = pl.querySelector(".pbody .wrap.ens-on"); if (!w) return;
    try { if (typeof stopAudio === "function") stopAudio(); } catch (e) {}
    dialogo.corta(); video.pausa();
    [].forEach.call(w.querySelectorAll(":scope > .ens-s"), function(s, i){ s.hidden = i !== T.i; });
    [].forEach.call(w.querySelectorAll(".ens-cab .tx-p"), function(b, i){ b.classList.toggle("on", i === T.i); b.classList.toggle("ya", i < T.i); b.setAttribute("aria-selected", String(i === T.i)); });
    var ult = T.i >= T.n - 1;
    pl.classList.toggle("tx-ini", T.i === 0);
    pl.classList.toggle("tx-fin", ult && T.ok);
    pl.classList.toggle("ens-bloq", ult && !T.ok);
    var sj = w.querySelector(".ens-cab .tx-saltar"); if (sj) sj.hidden = ult;
    /* volver desde un bloque a la comprobación */
    var vb = w.querySelector(".ens-volver"); if (vb) vb.remove();
    if (T.volver != null && !ult) {
      var s = w.querySelectorAll(":scope > .ens-s")[T.i];
      if (s) s.insertAdjacentHTML("beforeend", '<button type="button" class="pz-btn pz-btn--oro ens-volver" data-ens-ir="' + (T.n - 1) + '">Ya lo repasé: volver a la comprobación</button>');
    }
    var b = pl.querySelector(".pbody"); if (b) b.scrollTop = 0;
  };

  /* la comprobación: una pregunta a la vez; la fallada vuelve al final de la cola */
  var cq = function(){
    var d = actual(), box = pl.querySelector(".ens-s[data-k=cq] .ens-cq"); if (!d || !box) return;
    if (!T.cola) T.cola = d.comprueba.map(function(_, i){ return i; }).slice(0, pl.classList.contains("ens2") ? 2 : 99);
    var totq = pl.classList.contains("ens2") ? Math.min(2, d.comprueba.length) : d.comprueba.length;
    if (T.ok || !T.cola.length) {
      T.ok = true;
      box.innerHTML = pl.classList.contains("ens2")
        ? '<div class="ens-listo m2-listo"><img src="' + IMG("m2d/celebrar") + '" alt=""><b>¡Listo! Entendiste lo esencial.</b><p>Ahora unas pocas preguntas para fijarlo. Los ejercicios y juegos de esta lección te esperan después en Práctica.</p></div>'
        : '<div class="ens-listo"><b>¡Listo! Entendiste lo esencial.</b><p>Ahora vas a practicar: primero con pistas, después sin ayuda, luego en una conversación y al final demostrarás lo que sabes. Puedes volver a la explicación cuando quieras con el botón del libro.</p></div>';
      muestra(); return;
    }
    /* la numeración cuenta preguntas distintas; la que fallaste vuelve al final, marcada como repaso */
    var q = d.comprueba[T.cola[0]], vistas = T.vistas = T.vistas || {}, otra = !!vistas[T.cola[0]];
    vistas[T.cola[0]] = 1;
    var num = Object.keys(vistas).length;
    box.innerHTML = '<p class="ens-cq-n">' + (otra ? "Otra vez · la que fallaste" : "Pregunta " + num + " de " + totq) + '</p><h3 class="ens-cq-q">' + esc(q.q) + '</h3><div class="tx-ops">' +
      ordenOps(q.o, q.q).map(function(j){ return '<button type="button" class="pz-opt tx-op" data-ens-cq="' + (j === q.a ? 1 : 0) + '">' + esc(q.o[j]) + "</button>"; }).join("") + '</div><p class="tx-res" role="status" hidden></p>';
  };
  var responde = function(btn){
    var d = actual(); if (!d) return;
    var i = T.cola[0], q = d.comprueba[i], bien = btn.dataset.ensCq === "1", box = btn.closest(".ens-cq"), res = box.querySelector(".tx-res");
    [].forEach.call(box.querySelectorAll(".tx-op"), function(b){ b.disabled = true; b.classList.add(b.dataset.ensCq === "1" ? "ok" : "ko"); });
    btn.classList.add("eleg"); sfx(bien);
    res.hidden = false; res.className = "tx-res " + (bien ? "ok" : "ko");
    var B = bloque(d, q.b), bi = -1;
    T.cards.forEach(function(c, n){ if (c.b === q.b) bi = n; });
    res.innerHTML = '<img class="ens-res-mz" src="' + IMG(bien ? "m2d/pulgar" : "m2d/pensativo") + '" alt="">' + "<b>" + (bien ? "¡Eso es!" : "Todavía no.") + "</b> " + esc(q.porque) +
      '<span class="ens-res-acc">' + (bien ? "" : (bi >= 0 ? '<button type="button" class="pz-btn pz-btn--liso" data-ens-repasar="' + bi + '">Volver a «' + esc(B ? B.titulo : "la explicación") + "»</button>" : "")) +
      '<button type="button" class="pz-btn" data-ens-cq-sig>' + (bien ? "Seguir" : "Lo intento después") + "</button></span>";
    T.cola.shift(); if (!bien) {
      T.cola.push(i);
      var m = mem(), du = m.dudas[T.id] = m.dudas[T.id] || {}; du[q.b] = (du[q.b] || 0) + 1; guarda();
    }
  };

  /* diseño 2: el botón «Continuar el diálogo» cuenta las líneas descubiertas; al final aparece «Fíjate» */
  var m2cuenta = function(){
    var box = pl.querySelector(".ens-s[data-k=ctx]"); if (!box) return;
    var todas = box.querySelectorAll(".ens-dl"), vis = box.querySelectorAll(".ens-dl:not([hidden])").length, b = box.querySelector("[data-m2-linea]");
    if (b) { b.querySelector("span").textContent = vis + " de " + todas.length; b.hidden = vis >= todas.length; }
    var f = box.querySelector(".m2-fijate"); if (f && vis >= todas.length) f.hidden = false;
  };
  /* el diálogo: una línea o todo seguido, resaltando quién habla */
  var dialogo = (function(){
    var tok = 0;
    var linea = function(d, id, n, cb){
      var x = d.contexto.lineas[n]; if (!x) return cb && cb();
      [].forEach.call(D.querySelectorAll(".ens-dl"), function(b){ var es = +b.dataset.ensLinea === n; b.classList.toggle("sonando", es); if (es && b.hidden) { b.hidden = false; m2cuenta(); } });
      var k = "ens:" + id + ":d" + n, t = x[1];
      try { if (typeof playKey === "function") return playKey(k, t, false, cb); } catch (e) {}
      try { speak(t); } catch (e) {} if (cb) setTimeout(cb, 1500);
    };
    return {
      uno: function(n){ var d = actual(); if (!d) return; tok++; try { stopAudio(); } catch (e) {} linea(d, T.id, n, function(){ dialogo.limpia(); }); },
      todo: function(){
        var d = actual(); if (!d) return; var mio = ++tok, n = 0; try { stopAudio(); } catch (e) {}
        var sig = function(){ if (mio !== tok) return; if (n >= d.contexto.lineas.length) return dialogo.limpia(); linea(d, T.id, n++, function(){ setTimeout(sig, 350); }); };
        sig();
      },
      corta: function(){ tok++; dialogo.limpia(); },
      limpia: function(){ [].forEach.call(D.querySelectorAll(".ens-dl.sonando"), function(b){ b.classList.remove("sonando"); }); }
    };
  })();

  /* el reproductor del microvideo: un segmento tras otro con su audio; la escena revela sus partes (data-p) al ritmo de la voz */
  var video = (function(){
    var V = null;
    var caja = function(){ return pl.querySelector("[data-ev]") || D.querySelector(".gmodal [data-ev]"); };
    var pinta = function(){
      if (!V) return;
      var box = V.box, x = V.S.L[Math.min(V.i, V.S.L.length - 1)], ahora = V.on ? Math.min(x.t0 + x.dur, x.t0 + (Date.now() - V.t) / 1000) : x.t0;
      if (V.i >= V.S.L.length) ahora = V.S.total;
      var pc = Math.min(100, ahora / V.S.total * 100);
      box.querySelector(".ensv-lleno").style.width = pc + "%";
      var b = box.querySelector(".ensv-barra"); b.setAttribute("aria-valuenow", String(Math.round(pc)));
      box.querySelector(".ensv-t").textContent = mmss(ahora) + " / " + mmss(V.S.total);
    };
    var escenaDe = function(x){
      var box = V.box, maxp = 0;
      V.S.L.forEach(function(s){ if (s.e === x.e && s.s <= x.s) maxp = Math.max(maxp, s.p); });
      [].forEach.call(box.querySelectorAll(".ensv-esc"), function(el){ el.classList.toggle("on", +el.dataset.evEsc === x.e); });
      [].forEach.call(box.querySelectorAll("[data-cap]"), function(el){
        var ns = el.dataset.cap.split(" ").map(Number), on = ns.indexOf(x.e) >= 0;
        el.classList.toggle("on", on); el.classList.toggle("ya", ns[ns.length - 1] < x.e);
        if (on && el.parentNode.classList.contains("m2-caps--mov")) { var c = el.parentNode; c.scrollLeft = el.offsetLeft - c.clientWidth / 2 + el.clientWidth / 2; }
      });
      var esc0 = box.querySelector('.ensv-esc[data-ev-esc="' + x.e + '"]');
      [].forEach.call(esc0.querySelectorAll("[data-p]"), function(el){ var p = +el.dataset.p; el.classList.toggle("vis", p <= maxp); el.classList.toggle("act", p === x.p && p > 0); });
      var sub = box.querySelector(".ensv-sub"); sub.classList.toggle("fr", !!x.g.fr); sub.setAttribute("lang", x.g.fr ? lengua(V.d) : "es");
      sub.textContent = x.g.es || x.g.fr;
      return esc0;
    };
    var sigue = function(){
      if (!V || !V.on) return;
      var mio = ++V.tok, x = V.S.L[V.i];
      if (!x) return termina();
      var e0 = escenaDe(x); V.t = Date.now();
      var luego = function(){
        if (!V || mio !== V.tok) return;
        var e = V.d.video.escenas[x.e];
        /* la pregunta: se para y espera la respuesta */
        if (e.v === "pregunta" && x.s === e.seg.length - 1 && V.resp[x.e] == null) {
          V.on = false; V.box.classList.remove("ensv-on"); V.box.classList.add("ensv-espera");
          [].forEach.call(e0.querySelectorAll(".ensv-op"), function(o){ o.disabled = false; }); pinta(); return;
        }
        V.i++; var nx = V.S.L[V.i];
        setTimeout(function(){ if (V && mio === V.tok) sigue(); }, nx && nx.e !== x.e ? 650 : 300);
      };
      var hecho = false, fin = function(){ if (hecho) return; hecho = true; luego(); };
      /* con mp3 suena el audio; sin él (o en español sin audio) el subtítulo se queda lo que dura la frase */
      if (typeof AUDIO !== "undefined" && AUDIO[x.k]) { try { playKey(x.k, x.g.es || x.g.fr, false, fin); } catch (err) { setTimeout(fin, x.dur * 1000); } }
      else setTimeout(fin, x.dur * 1000);
      /* por si el audio no avisa al terminar (pestaña en segundo plano, sin sonido) */
      setTimeout(function(){ if (V && mio === V.tok) fin(); }, (x.dur + 2.5) * 1000);
    };
    var termina = function(){
      V.on = false; V.box.classList.remove("ensv-on"); V.box.classList.add("ensv-hecho");
      V.box.querySelector(".ensv-fin").hidden = false; V.i = V.S.L.length; pinta();
      var m = mem(); m.vid = m.vid || {}; m.vid[V.id] = Date.now(); guarda();
    };
    var tic = function(){ if (V && V.on) { pinta(); requestAnimationFrame(tic); } };
    var prepara = function(){
      var box = caja(), d = actual() || (box && ficha(box.closest("[data-ens-de]") && box.closest("[data-ens-de]").dataset.ensDe));
      if (!box || !d || !d.video) return null;
      if (!V || V.box !== box) V = { box: box, d: d, id: T.id || (P && P.lesson && P.lesson.id), S: segs(d, T.id || P.lesson.id), i: 0, on: false, tok: 0, resp: {} };
      return V;
    };
    return {
      play: function(){
        if (!prepara()) return;
        if (V.on) return video.pausa();
        if (V.i >= V.S.L.length) { V.i = 0; V.resp = {}; V.box.querySelector(".ensv-fin").hidden = true; V.box.classList.remove("ensv-hecho"); }
        V.box.classList.remove("ensv-espera");
        /* desde la pausa de la pregunta, «play» sigue sin responder */
        var x = V.S.L[V.i], e = x && V.d.video.escenas[x.e];
        if (e && e.v === "pregunta" && V.resp[x.e] == null && V.box.querySelector(".ensv-esc.on .ensv-op:not([disabled])")) { V.resp[x.e] = -1; V.i++; }
        V.on = true; V.box.classList.add("ensv-on", "ensv-ya"); dialogo.corta(); sigue(); requestAnimationFrame(tic);
      },
      pausa: function(){
        if (!V) return; V.tok++; V.on = false; try { stopAudio(); } catch (e) {}
        if (V.box) { V.box.classList.remove("ensv-on"); pinta(); }
      },
      salta: function(pc){
        if (!prepara()) return;
        var t = pc * V.S.total, i = 0;
        V.S.L.forEach(function(s, n){ if (s.t0 <= t) i = n; });
        V.tok++; try { stopAudio(); } catch (e) {}
        V.i = i; V.box.querySelector(".ensv-fin").hidden = true; V.box.classList.remove("ensv-hecho", "ensv-espera");
        var x = V.S.L[i]; if (V.d.video.escenas[x.e].v === "pregunta") V.resp[x.e] = null;
        escenaDe(x); V.box.classList.add("ensv-ya");
        if (V.on) sigue(); else pinta();
      },
      responde: function(btn){
        if (!prepara()) return;
        var x = V.S.L[V.i], e = V.d.video.escenas[x.e], bien = +btn.dataset.evOp === e.a, box = btn.closest(".ensv-esc");
        V.resp[x.e] = +btn.dataset.evOp;
        [].forEach.call(box.querySelectorAll(".ensv-op"), function(o){ o.disabled = true; o.classList.add(+o.dataset.evOp === e.a ? "ok" : "ko"); });
        btn.classList.add("eleg"); sfx(bien);
        var r = box.querySelector(".ensv-res"); r.hidden = false; r.className = "ensv-res " + (bien ? "ok" : "ko"); r.textContent = bien ? e.bien : e.mal;
        V.box.classList.remove("ensv-espera");
        /* más tiempo para leer la corrección cuando la respuesta no era la buena */
        setTimeout(function(){ if (!V) return; V.i++; V.on = true; V.box.classList.add("ensv-on"); sigue(); requestAnimationFrame(tic); }, bien ? 2000 : 3800);
      },
      otra: function(){ if (!prepara()) return; V.i = V.S.L.length; video.play(); },
      cc: function(btn){ var box = btn.closest("[data-ev]"), on = !btn.classList.contains("on"); btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on)); box.classList.toggle("ensv-sin-cc", !on); },
      suelta: function(){ if (V) { video.pausa(); V = null; } }
    };
  })();

  /* ---------- la explicación completa, para consultar en cualquier momento ---------- */
  var abrirFicha = function(id, b){
    var d = ficha(id); if (!d) return;
    var html = '<div class="ens-ficha"><div class="ens-ficha-tabs">' + d.ensena.map(function(B){ return '<button type="button" class="ens-chip" data-ens-salta="' + esc(B.id) + '">' + esc(B.titulo) + "</button>"; }).join("") + "</div>" +
      d.ensena.map(function(B){ return '<section class="ens-fsec" id="ens-fsec-' + esc(B.id) + '"><h3>' + esc(B.titulo) + "</h3>" + bloqueHTML(d, B) + "</section>"; }).join("") + "</div>";
    try { stopAudio(); } catch (e) {}
    if (window.PLX_UI && PLX_UI.pantalla) PLX_UI.pantalla(html, { titulo: "La explicación · " + d.titulo, clase: "m-ens" });
    else if (typeof gModal === "function") gModal(html, "m-ens");
    if (b) { var n = 0, ir = function(){ var s = D.getElementById("ens-fsec-" + b); if (!s) { if (n++ < 20) setTimeout(ir, 50); return; } s.scrollIntoView({ block: "start" }); s.classList.add("ens-fsec-on"); }; setTimeout(ir, 60); }
  };

  /* ---------- 6 a 9: etiqueta de fase, pistas que se retiran y «Repasa» al fallar ---------- */
  var decora = function(){
    /* 4.66: al terminar una lección del diseño 2 solo queda la recompensa (pedido de Jhon): sin la aventura de 5 pasos,
       «Sigue practicando», el comentario del profe ni la frase; el juego ya fue parte de la lección */
    try { pl.classList.toggle("ens2-fin", !!(P && P.phase === "end" && P.mode === "lesson" && P.lesson && nuevo(P.lesson.id))); } catch (e) {}
    var d = actual(), st = paso(); if (!d || !st) return;
    if (st.kind === "theory") return arma();
    pl.classList.remove("ens", "ens-bloq");
    if (st.kind !== "item") return;
    var w = pl.querySelector(".pbody .wrap"); if (!w) return;
    var it = getItem(st.key); if (!it || !it.fase) return;
    if (!w.querySelector(".ens-fase")) {
      var F = FASES[it.fase] || [0, ""], grupo = d.practica.filter(function(x){ return x.fase === it.fase; }), pos = grupo.indexOf(ITEMS[st.key] && ITEMS[st.key].it) + 1;
      if (pos <= 0) { var ii = +String(st.key).split(":").pop(); pos = grupo.indexOf(d.practica[ii]) + 1; }
      if (nuevo(P.lesson.id)) {
        /* diseño 2: la práctica es corta; se cuenta sobre los ejercicios que quedaron en la lección */
        var its = P.steps.filter(function(x){ return x.kind === "item" && !x.retry; }), k2 = its.indexOf(st) + 1;
        w.insertAdjacentHTML("afterbegin", '<p class="ens-fase m2-fase" style="text-transform:none!important;letter-spacing:0!important" data-f="' + esc(it.fase) + '"><img src="' + IMG("ic3/pesa-practica") + '" alt="">' + (st.retry ? "Otra oportunidad" : "Práctica" + (k2 > 0 ? " · " + k2 + " de " + its.length : "")) + "</p>");
        /* 4.66: el juego va en medio de la práctica (pedido de Jhon): antes del tercer ejercicio, una ronda con lo de esta lección */
        /* 4.67: ya no se abre encima del ejercicio; sale una pausa en su lugar y el ejercicio aparece al jugar o saltar */
        if (!st.retry && its.length >= 2 && k2 === Math.min(3, its.length) && !P.__m2j) {
          P.__m2j = 1;
          var jg = juegoLeccion(d);
          if (jg) {
            w.classList.add("m2-pausa");
            w.insertAdjacentHTML("beforebegin", '<div class="m2-juego"><img class="m2-juego-mz" src="' + IMG("m2d/celebrar") + '" alt=""><p class="m2-juego-k">Pausa de juego</p><h2 class="m2-h">' + esc(jg.nombre) + '</h2><p class="m2-juego-p">Una ronda corta con lo que acabas de aprender. Después sigues con la práctica.</p>' +
              '<button type="button" class="pz-btn pz-btn--lg m2-juego-b" data-m2-jugar>Jugar</button><button type="button" class="pz-btn pz-btn--liso m2-juego-b" data-m2-saltar>Seguir sin jugar</button></div>');
          }
        }
      } else
      w.insertAdjacentHTML("afterbegin", '<p class="ens-fase" data-f="' + esc(it.fase) + '">' + (st.retry ? "Otra oportunidad" : "Fase " + F[0] + " de 10 · " + esc(F[1]) + (pos > 0 ? " <span>" + pos + " de " + grupo.length + "</span>" : "")) + "</p>");
    }
    if (P.phase === "answer" && it.pista && !st.retry && !w.querySelector(".ens-pista")) {
      /* las dos primeras guiadas muestran la pista; las siguientes la guardan tras un botón (la ayuda se retira) */
      var guiadas = d.practica.filter(function(x){ return x.fase === "guiada"; }), n = guiadas.indexOf(d.practica[+String(st.key).split(":").pop()]);
      var abierta = n >= 0 && n < 2;
      var ph = '<div class="ens-pista' + (abierta ? " on" : "") + '"><button type="button" class="ens-pista-b" data-ens-pista>' + FOCO + "<span>" + (abierta ? "Pista" : "Ver pista") + '</span></button><p>' + esc(it.pista) + "</p></div>";
      /* después del enunciado y su contexto, justo antes de responder: la pista se lee cuando ya sabes qué te piden */
      var ancla = w.querySelector(":scope > .q") || w.querySelector(":scope > .ctx") || w.querySelector(".ask") || w.querySelector(".ens-fase");
      ancla.insertAdjacentHTML("afterend", ph);
    }
    if (P.phase === "feedback") {
      var r = P.res && P.res[P.i], fb = pl.querySelector(".pf .fb") || pl.querySelector(".pf");
      if (r && !r.ok && fb && !pl.querySelector(".ens-repasa")) {
        var b = bloqueDe(d, (it.c || [])[0]), B = bloque(d, b);
        if (B) fb.insertAdjacentHTML("beforeend", '<div class="ens-repasa"><button type="button" class="pz-btn pz-btn--liso" data-ens-ficha="' + esc(T.id || P.lesson.id) + '" data-ens-b="' + esc(b) + '">Repasa: ' + esc(B.titulo) + "</button></div>");
      }
    }
  };

  /* 4.66: qué juego del Arcade va en la lección: según lo que enseña, y que tenga retos suficientes con su contenido */
  var juegoLeccion = function(d){
    var G = window.PLXG; if (!G || !G.arcade || !G.alc || !P || !P.lesson) return;
    var alc = G.alc.leccion(P.lesson), tipos = d.ensena.map(function(B){ return B.tipo; });
    var nv = tipos.filter(function(t){ return t === "vocab"; }).length;
    var lista = tipos.indexOf("pron") >= 0 ? ["ah", "ff", "wc"] : nv * 2 >= tipos.length ? ["mr", "wc", "ff", "tw"] : ["gr", "ff", "bc", "wc"];
    var h = 0; for (var i = 0; i < P.lesson.id.length; i++) h = (h * 31 + P.lesson.id.charCodeAt(i)) % 997;
    var orden = lista.slice(h % 2).concat(lista.slice(0, h % 2));
    var jid = orden.filter(function(id){ var j = G.juegos && G.juegos[id]; try { return j && G.nRetos(j, alc) >= G.MIN_RETOS; } catch (e) { return false; } })[0];
    if (!jid) return null;
    return { nombre: G.juegos[jid].nombre, abre: function(){ try { G.arcade(alc, jid); } catch (e) {} } };
  };
  var sinPausa = function(){ var c = pl.querySelector(".m2-juego"), w = pl.querySelector(".m2-pausa"); if (c) c.remove(); if (w) w.classList.remove("m2-pausa"); };

  /* ---------- registro por concepto (fases 7 a 9) y repaso espaciado ---------- */
  var cajaSube = function(d, c, ok){
    var m = mem(), k = llave(d, c), x = m.c[k] || (m.c[k] = { caja: 0, n: 0, ok: 0 }), ahora = Date.now(), dias = (d.repaso && d.repaso.dias) || [1, 3, 7, 16, 35];
    x.n++; if (ok) x.ok++;
    if (ok) { if (!x.ult || ahora - x.ult > DIA / 2) x.caja = Math.min(dias.length, (x.caja || 0) + 1); }
    else x.caja = Math.max(0, (x.caja || 0) - 1);
    x.prox = ahora + (x.caja ? dias[x.caja - 1] : 0) * DIA; x.ult = ahora;
  };
  if (typeof record === "function") {
    var R0 = record;
    record = function(st, it, ok){
      var r = R0.apply(this, arguments);
      try {
        var info = ITEMS[st.key], d = info && ficha(info.l.id);
        if (d && it && it.c && !st.retry) {
          if (P.mode === "lesson" && (it.fase === "indep" || it.fase === "aplica" || it.fase === "dominio")) {
            var t = P.__ens || (P.__ens = { c: {} });
            it.c.forEach(function(c){ var x = t.c[c] || (t.c[c] = { ok: 0, n: 0 }); x.n++; if (ok) x.ok++; });
          } else if (P.mode === "review") { it.c.forEach(function(c){ cajaSube(d, c, ok); }); guarda(); }
        }
      } catch (e) {}
      return r;
    };
  }
  /* los conceptos que tocan vuelven al carnet (el repaso de siempre), con ejercicios de su lección */
  var programa = function(){
    var m = mem(), ahora = Date.now(), n = 0;
    Object.keys(m.c).forEach(function(k){
      var x = m.c[k]; if (!x.lec || !x.prox || x.prox > ahora) return;
      var d = ficha(x.lec); if (!d) return; var c = k.split(":").slice(1).join(":");
      var keys = []; d.practica.forEach(function(it, i){ if ((it.c || []).indexOf(c) >= 0 && it.fase !== "guiada") keys.push(x.lec + ":" + i); });
      if (!keys.length || keys.some(function(kk){ return S.carnet[kk]; })) return;
      var kk = keys[(x.n || 0) % keys.length], it = ITEMS[kk]; if (!it) return;
      S.carnet[kk] = { t: it.it.t || it.l.t || "autre", s: 0, w: 0, at: ahora, ens: k }; n++;
    });
    if (n) guarda();
  };
  setTimeout(function(){
    /* en reposo: el curso activo y los cursos con lecciones ya estudiadas (sus repasos), luego el programa de repasos */
    var trs = []; try { if (typeof track === "string") trs.push(track); } catch (e) {}
    Object.keys(mem().l).forEach(function(id){ var t = trackDe(id); if (t && trs.indexOf(t) < 0) trs.push(t); });
    var n = trs.length + 1, sigue = function(){ if (--n === 0) { try { programa(); } catch (e) {} } };
    trs.forEach(function(t){ carga(t, sigue); }); sigue();
  }, 2500);

  /* ---------- 9: dominio y capacidad al terminar ---------- */
  var cierra = function(){
    var d = actual(); if (!d) return null;
    var id = P.lesson.id, t = (P.__ens && P.__ens.c) || {}, crit = (d.dominio && d.dominio.criterio) || 0.75, min = (d.dominio && d.dominio.min) || 2, m = mem(), ahora = Date.now(), dias = (d.repaso && d.repaso.dias) || [1, 3, 7, 16, 35];
    var conc = Object.keys(d.conceptos).map(function(c){
      var x = t[c] || { ok: 0, n: 0 };
      return { c: c, n: d.conceptos[c].n, b: d.conceptos[c].b, ok: x.ok, tot: x.n, dom: x.n >= min ? x.ok / x.n >= crit : x.n > 0 ? x.ok === x.n : nuevo(id) };
    });
    var todo = conc.every(function(x){ return x.dom; }), prev = m.l[id] || {};
    m.l[id] = { at: ahora, dom: !!(todo || prev.dom), ult: todo, c: {} };
    conc.forEach(function(x){
      m.l[id].c[x.c] = [x.ok, x.tot];
      var k = llave(d, x.c), y = m.c[k] || (m.c[k] = { caja: 0, n: 0, ok: 0 });
      y.n += x.tot; y.ok += x.ok; y.lec = id; y.caja = x.dom ? Math.max(y.caja || 0, 1) : 0;
      y.prox = ahora + (y.caja ? dias[y.caja - 1] : 0) * DIA; y.ult = ahora;
    });
    if (todo && !m.cap[id]) m.cap[id] = ahora;
    return { id: id, d: d, todo: todo, conc: conc };
  };
  var celebra = function(res){
    var n = 0, ir = function(){
      var cel = D.querySelector(".gmodal.m-cel .cel"); if (!cel) { if (n++ < 50) setTimeout(ir, 80); return; }
      if (cel.querySelector(".ens-cap")) return;
      var malos = res.conc.filter(function(x){ return !x.dom; }), bloques = [];
      malos.forEach(function(x){ if (bloques.indexOf(x.b) < 0) bloques.push(x.b); });
      var h = res.todo
        ? '<div class="ens-cap ok"><small>Nueva capacidad</small><b>' + esc(res.d.objetivo.capacidad) + "</b><p>Dominaste los " + res.conc.length + " objetivos de la lección. Volverán en tu repaso dentro de 1 día para que no se te olviden.</p></div>"
        : '<div class="ens-cap"><small>Casi lo tienes</small><b>Completaste la lección, pero aún no dominas todo.</b><p>Refuerza esto y vuelve a intentarlo. También aparecerá en tu repaso.</p><div class="ens-cap-acc">' +
          bloques.map(function(b){ var B = bloque(res.d, b); return B ? '<button type="button" class="pz-btn pz-btn--liso" data-ens-ficha="' + esc(res.id) + '" data-ens-b="' + esc(b) + '">Repasar «' + esc(B.titulo) + "»</button>" : ""; }).join("") + "</div>" +
          '<ul class="ens-cap-l">' + res.conc.map(function(x){ return '<li class="' + (x.dom ? "si" : "no") + '">' + esc(x.n) + " <span>" + x.ok + "/" + x.tot + "</span></li>"; }).join("") + "</ul></div>";
      cel.insertAdjacentHTML("afterbegin", h);
    };
    ir();
  };
  if (typeof finish === "function") {
    var F0 = finish;
    finish = function(){
      var res = null; try { res = cierra(); } catch (e) {}
      var r = F0.apply(this, arguments);
      if (res) { try { celebra(res); programa(); } catch (e) {} }
      return r;
    };
  }

  /* ---------- la memoria viaja con el progreso: mezcla por concepto ---------- */
  if (typeof mergeState === "function") {
    var MS = mergeState;
    mergeState = function(a, b){
      var R = MS.apply(this, arguments);
      try {
        var x = (a && a.ens) || {}, y = (b && b.ens) || {};
        if (a && a.ens || b && b.ens) {
          var o = { c: {}, l: {}, cap: {}, dudas: {} };
          [x, y].forEach(function(z){
            for (var k in z.c || {}) { var e = z.c[k], c = o.c[k]; if (!c || (e.ult || 0) > (c.ult || 0)) o.c[k] = e; }
            for (var l in z.l || {}) { var f = z.l[l], g = o.l[l]; o.l[l] = !g || (f.at || 0) > (g.at || 0) ? Object.assign({}, f, { dom: !!(f.dom || (g && g.dom)) }) : Object.assign({}, g, { dom: !!(g.dom || f.dom) }); }
            for (var p in z.cap || {}) o.cap[p] = Math.min(o.cap[p] || Infinity, z.cap[p]);
            for (var q in z.dudas || {}) { o.dudas[q] = o.dudas[q] || {}; for (var bb in z.dudas[q]) o.dudas[q][bb] = Math.max(o.dudas[q][bb] || 0, z.dudas[q][bb]); }
          });
          R.ens = o;
        }
      } catch (e) {}
      return R;
    };
  }

  /* ---------- toques ---------- */
  /* «Ver explicación» y «¿Por qué?» durante los ejercicios abren la explicación de esta lección (en window, antes que la app) */
  window.addEventListener("click", function(e){
    var t = e.target.closest && e.target.closest('[data-plx="theory"],.ej-regla'); if (!t) return;
    var d = actual(), st = paso(); if (!d || !st || st.kind !== "item") return;
    e.preventDefault(); e.stopImmediatePropagation();
    var it = getItem(st.key); abrirFicha(P.lesson.id, bloqueDe(d, it && it.c && it.c[0]));
  }, true);
  D.addEventListener("click", function(e){
    /* 4.52b: el video y las piezas que se tocan */
    var v = e.target.closest && e.target.closest("[data-ev-play],[data-ev-op],[data-ev-otra],[data-ev-cc],[data-ev-barra],[data-ens-flip],[data-ens-per],[data-ens-unir],[data-ens-tab],[data-ens-ver],[data-ens-cz],[data-ens-cz-sig],[data-ens-asi],[data-ens-asi-op]");
    if (v && !(e.target.closest("[data-psay]") && v.matches("[data-ens-flip]") && v.classList.contains("on"))) {
      e.preventDefault(); e.stopPropagation();
      var vd = v.dataset;
      if (vd.evPlay != null) return video.play();
      if (vd.evOp != null) return video.responde(v);
      if (vd.evOtra != null) return video.otra();
      if (vd.evCc != null) return video.cc(v);
      if (vd.evBarra != null) { var r = v.getBoundingClientRect(); return video.salta(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))); }
      if (vd.ensFlip != null) { var on = !v.classList.contains("on"); v.classList.toggle("on", on); if (on) try { speak(vd.say); } catch (x) {} return; }
      if (vd.ensPer != null) {
        v.classList.add("on"); try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
        var tc = v.closest(".ens-toca"), fin = tc && tc.nextElementSibling;
        if (tc && !tc.querySelector(".ens-per:not(.on)") && fin) fin.hidden = false;
        return;
      }
      if (vd.ensUnir != null) {
        var am = v.closest(".ens-arma"); var ya = am.classList.toggle("unido");
        v.dataset.t0 = v.dataset.t0 || v.textContent; v.textContent = ya ? "Otra vez" : v.dataset.t0; if (ya) try { speak(am.dataset.say); } catch (x) {}
        return;
      }
      if (vd.ensTab != null) {
        var cont = v.parentNode.parentNode;
        [].forEach.call(v.parentNode.children, function(b){ b.classList.toggle("on", b === v); b.setAttribute("aria-selected", String(b === v)); });
        [].forEach.call(cont.querySelectorAll("[data-ens-panel]"), function(pn){ pn.hidden = pn.dataset.ensPanel !== vd.ensTab; });
        return;
      }
      if (vd.ensCz != null) {
        /* caza el error: acierto → se revela todo; fallo → se señala la palabra y, al segundo, una pista */
        var cz = v.closest(".ens-cz"); if (cz.classList.contains("hecho")) return;
        var msg = cz.querySelector(".ens-cz-msg");
        if (vd.ok != null) {
          cz.classList.add("hecho"); sfx(true); msg.textContent = "";
          [].forEach.call(cz.querySelectorAll(".ens-cz-w"), function(w){ w.disabled = true; if (w.dataset.ok != null) w.classList.add("cz-ok"); });
          var sol = cz.querySelector(".ens-cz-sol"); sol.hidden = false;
          try { speak(sol.querySelector("[data-psay]").dataset.psay); } catch (x) {}
          setTimeout(function(){ sol.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 120);
        } else {
          sfx(false); v.classList.remove("cz-ko"); void v.offsetWidth; v.classList.add("cz-ko", "cz-visto");
          var fa = (+cz.dataset.fallos || 0) + 1; cz.dataset.fallos = fa;
          msg.textContent = fa < 2 ? "«" + v.textContent.replace(/[.,!?;:]/g, "") + "» está bien. Mira los artículos." : "Pista: el error está en la parte que brilla.";
          if (fa >= 2) cz.classList.add("pista");
        }
        return;
      }
      if (vd.ensCzSig != null) {
        var c0 = v.closest(".ens-cz"), c1 = c0.nextElementSibling, caza = c0.parentNode; if (!c1) return;
        c0.hidden = true; c1.hidden = false; caza.dataset.q = String(Math.max(0, +caza.dataset.q - 1));
        c1.scrollIntoView({ block: "nearest", behavior: "smooth" });
        try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
        return;
      }
      if (vd.ensAsiOp != null) {
        var li = v.closest(".ens-as-p"), bn = vd.ok != null; sfx(bn);
        [].forEach.call(li.querySelectorAll(".ens-as-op"), function(o){ o.disabled = true; if (o.dataset.ok != null) o.classList.add("ok"); });
        if (!bn) v.classList.add("ko");
        var an = li.querySelector(".ens-as-a"); an.querySelector("em").textContent = bn ? "¡Eso es! " : "Era esta: "; an.hidden = false;
        var sb = pl.querySelector(".ens-as-sig"); sb.hidden = false; asiRotulo(sb); sb.scrollIntoView({ block: "nearest", behavior: "smooth" });
        return;
      }
      if (vd.ensAsi != null) {
        /* un solo botón: el paso siguiente, luego la respuesta, luego el ejemplo siguiente */
        var as = pl.querySelector(".ens-as.on"); if (!as) return;
        var sigp = as.querySelector(".ens-as-p[hidden]"), sl = as.querySelector(".ens-as-sol"), mas = as.nextElementSibling, ver;
        try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
        if (sigp) { sigp.hidden = false; ver = sigp; if (sigp.dataset.tu != null) v.hidden = true; }
        else if (sl.hidden) { sl.hidden = false; ver = sl; try { speak(sl.querySelector("[data-psay]").dataset.psay); } catch (x) {} if (!mas) { v.hidden = true; v.nextElementSibling.hidden = false; } }
        else if (mas) {
          as.classList.remove("on"); as.classList.add("hecho"); mas.classList.remove("bloq"); mas.classList.add("on");
          ver = mas.querySelector(".ens-as-p"); ver.hidden = false; if (ver.dataset.tu != null) v.hidden = true;
          mas.scrollIntoView({ block: "start", behavior: "smooth" }); ver = null;
        }
        asiRotulo(v);
        if (ver) setTimeout(function(){ (v.hidden ? ver : v).scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 60);
        return;
      }
      if (vd.ensVer != null) { var ex = v.closest(".ens-ex"); v.hidden = true; ex.querySelector(".ens-ex-sol").hidden = false; try { speak(ex.querySelector(".ens-resp [data-psay]").dataset.psay); } catch (x) {} return; }
    }
    var m2 = e.target.closest && e.target.closest("[data-m2-linea],[data-m2-vermas],[data-m2-jugar],[data-m2-saltar]");
    if (m2) {
      e.preventDefault(); e.stopPropagation();
      if (m2.dataset.m2Jugar != null || m2.dataset.m2Saltar != null) { var jd = m2.dataset.m2Jugar != null && actual() && juegoLeccion(actual()); sinPausa(); if (jd) jd.abre(); return; }
      if (m2.dataset.m2Vermas != null) { var capa = m2.previousElementSibling; if (capa) capa.classList.add("m2-abierta"); m2.remove(); return; }
      var sigl = pl.querySelector(".ens-s[data-k=ctx] .ens-dl[hidden]"); if (sigl) { sigl.hidden = false; m2cuenta(); dialogo.uno(+sigl.dataset.ensLinea); sigl.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      return;
    }
    var el = e.target.closest && e.target.closest("[data-ens],[data-ens-ir],[data-ens-cq],[data-ens-cq-sig],[data-ens-repasar],[data-ens-linea],[data-ens-todo],[data-ens-ex-ir],[data-ens-pista],[data-ens-ficha],[data-ens-salta],[data-ens-rec]");
    if (!el) return;
    e.preventDefault(); e.stopPropagation();
    var ds = el.dataset;
    if (ds.ensFicha) {
      /* desde la celebración, la ficha queda en cola detrás de ella: se cierra para que la explicación salga ya */
      var gm = el.closest(".gmodal"); abrirFicha(ds.ensFicha, ds.ensB);
      if (gm && gm.classList.contains("m-cel")) { var gc = gm.querySelector("[data-g=close]"); if (gc) gc.click(); }
      return;
    }
    if (ds.ensSalta) { var s = D.getElementById("ens-fsec-" + ds.ensSalta); if (s) s.scrollIntoView({ block: "start", behavior: "smooth" }); return; }
    if (ds.ensPista != null) { var p = el.closest(".ens-pista"); if (p) { p.classList.add("on"); el.querySelector("span").textContent = "Pista"; } return; }
    if (ds.ensLinea != null) return dialogo.uno(+ds.ensLinea);
    if (ds.ensTodo != null) return dialogo.todo();
    if (ds.ensCq != null) return responde(el);
    if (ds.ensCqSig != null) return cq();
    if (ds.ensRec != null) {
      var q = el.closest(".ens-rq"), bien = ds.ensRec === "1", res = q.querySelector(".tx-res"), d = actual();
      [].forEach.call(q.querySelectorAll(".tx-op"), function(b){ b.disabled = true; b.classList.add(b.dataset.ensRec === "1" ? "ok" : "ko"); });
      el.classList.add("eleg"); sfx(bien); res.hidden = false; res.className = "tx-res " + (bien ? "ok" : "ko");
      res.innerHTML = bien ? "<b>¡Lo recuerdas!</b>" : "<b>Repasémoslo:</b> la respuesta está marcada en verde.";
      if (d) { cajaSube(d, q.dataset.c, bien); guarda(); }
      return;
    }
    if (ds.ensExIr != null) {
      var d2 = actual(); if (!d2) return;
      T.ej = Math.max(0, Math.min(d2.ejemplos.length - 1, T.ej + (+ds.ensExIr)));
      var box = el.closest(".ens-s");
      [].forEach.call(box.querySelectorAll(".ens-ex"), function(x, i){ x.hidden = i !== T.ej; });
      [].forEach.call(box.querySelectorAll(".ens-ex-dots i"), function(x, i){ x.classList.toggle("on", i === T.ej); });
      return;
    }
    /* al volver de repasar, la comprobación ya muestra la pregunta siguiente (la fallada quedó al final) */
    if (ds.ensRepasar != null) { cq(); T.volver = T.n - 1; T.i = +ds.ensRepasar; return muestra(); }
    try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
    if (ds.ens === "sig") {
      /* en los ejemplos, «Siguiente» pasa primero por todos los ejemplos */
      var cur = T.cards[T.i], d3 = actual();
      var exv = cur && cur.k === "ejr" && pl.querySelector('.ens-s[data-k=ejr] .ens-ex:not([hidden]) [data-ens-ver]:not([hidden])');
      if (exv) { exv.click(); return; }
      if (cur && cur.k === "ejr" && d3 && T.ej < d3.ejemplos.length - 1) { var b3 = pl.querySelector('.ens-s[data-k=ejr] [data-ens-ex-ir="1"]'); if (b3) { b3.click(); return; } }
      T.i = Math.min(T.n - 1, T.i + 1);
    } else if (ds.ens === "atras") T.i = Math.max(0, T.i - 1);
    else if (ds.ensIr != null) { T.i = Math.max(0, Math.min(T.n - 1, +ds.ensIr)); if (T.i === T.n - 1) T.volver = null; }
    muestra();
  }, true);
  D.addEventListener("input", function(e){
    var r = e.target; if (!r || !r.matches || !r.matches("[data-ens-dia]")) return;
    var box = r.closest(".ens-dia"), h = +r.value, noche = h >= +box.dataset.corte, w = box.querySelector(".ens-dia-w"), nueva = noche ? box.dataset.noche : box.dataset.dia;
    box.classList.toggle("noche", noche); box.style.setProperty("--h", String((h - +r.min) / (+r.max - +r.min)));
    box.querySelector(".ens-dia-h").textContent = h + ":00";
    if (w.textContent !== nueva) { w.textContent = nueva; w.classList.remove("pop"); void w.offsetWidth; w.classList.add("pop"); try { speak(nueva); } catch (x) {} }
  }, true);
  /* las tarjetas que se voltean también con el teclado */
  D.addEventListener("keydown", function(e){
    if ((e.key === "Enter" || e.key === " ") && e.target && e.target.matches && e.target.matches("[data-ens-flip]")) { e.preventDefault(); e.target.click(); }
  }, true);
  /* 4.67: «Traducción» es el interruptor del kit (pz-sw), no una casilla del navegador */
  D.addEventListener("click", function(e){
    var t = e.target.closest && e.target.closest("[data-ens-trad]"); if (!t) return;
    var on = t.getAttribute("aria-checked") !== "true", c = t.closest(".ens-s");
    t.setAttribute("aria-checked", String(on)); if (c) c.classList.toggle("ens-con-trad", on);
  }, true);

  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { decora(); } catch (e) {} }); }).observe(pl, { childList: true, subtree: true });

  window.PLX_ENSENA = { carga: carga, montar: montar, de: ficha, abrir: abrirFicha, programa: programa, memoria: mem, decir: decir, decora: decora };

  /* ---------- estilos (los tx-* vienen de plx95) ---------- */
  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var F = "var(--ev-f,Barlow,system-ui,sans-serif)", PO = "Poppins,system-ui,sans-serif";
  var css = [
    ".m-ens{--tx-ink:#23212C;--tx-mut:#5E5784;--tx-az:#2F6BFF;--tx-sup:rgba(47,107,255,.07);--tx-bd:rgba(47,107,255,.16);--tx-hair:rgba(54,37,92,.14)}",
    oscuro(".m-ens", "--tx-ink:#F6F4FF;--tx-mut:#B9B0DC;--tx-az:#8FB4FF;--tx-sup:rgba(210,195,246,.08);--tx-bd:rgba(210,195,246,.18);--tx-hair:rgba(255,255,255,.14)"),
    "#player.ens-bloq .pf .tx-sig{display:none!important}#player.ens-bloq .pf .pfa::after{content:'Responde la comprobación para empezar a practicar';flex:1;align-self:center;font:500 .85rem/1.3 " + F + ";color:var(--tx-mut)}",
    ".ens-s,.ens-ficha{color:var(--tx-ink)}",
    ".ens-intro,.ens-lead{margin:0;font:400 1rem/1.5 " + F + ";color:var(--tx-ink)}.ens-lead{font:500 1.08rem/1.45 " + PO + "}",
    ".ens-sub{margin:4px 0 -4px;font:700 .72rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:var(--tx-mut)}",
    ".ens-podras,.ens-notas{margin:0;padding:0;list-style:none;display:grid;gap:8px}.ens-podras li,.ens-notas li{position:relative;padding:0 0 0 28px;font:400 .97rem/1.45 " + F + "}",
    ".ens-podras li::before{content:'';position:absolute;left:2px;top:3px;width:16px;height:16px;border-radius:50%;background:#12A150 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") center/12px no-repeat}",
    ".ens-notas li::before{content:'';position:absolute;left:7px;top:9px;width:6px;height:6px;border-radius:50%;background:var(--tx-az)}",
    ".ens-nota{margin:0;font:400 .88rem/1.45 " + F + ";color:var(--tx-mut)}",
    ".ens-ruta{margin:0;padding:12px 14px;border-radius:14px;font:400 .88rem/1.45 " + F + ";color:var(--tx-mut);background:var(--tx-sup)}",
    ".ens-clave{margin:0;padding:13px 15px;border-radius:16px;font:400 .97rem/1.45 " + F + ";color:var(--tx-ink);background:#F1FEC8;box-shadow:inset 0 0 0 1px rgba(120,150,40,.3)}", oscuro(".ens-clave", "background:rgba(241,254,200,.1);box-shadow:inset 0 0 0 1px rgba(241,254,200,.24)"),
    ".ens-aviso{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:13px 15px;border-radius:16px;background:rgba(255,210,0,.16);font:400 .95rem/1.4 " + F + "}.ens-aviso b{flex-basis:100%}",
    ".ens-chip{all:unset;box-sizing:border-box;cursor:pointer;padding:8px 13px;border-radius:99px;font:600 .84rem/1.2 " + F + ";color:var(--tx-az);box-shadow:inset 0 0 0 1.5px var(--tx-bd);background:var(--tx-sup)}.ens-chip:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    /* recuperar */
    ".ens-rec{display:grid;gap:12px}.ens-rq{display:grid;gap:10px;padding:14px;border-radius:18px;box-shadow:inset 0 0 0 1px var(--tx-hair)}.ens-rq-q{margin:0;display:grid;gap:4px}.ens-rq-q small{font:400 .86rem/1.35 " + F + ";color:var(--tx-mut)}.ens-rq-q b{font:700 1.1rem/1.3 " + PO + "}",
    /* diálogo */
    ".ens-dlg-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px}.ens-todo{display:inline-flex!important;align-items:center;gap:8px}.ens-todo svg{width:18px;height:18px}",
    ".ens-trad{display:inline-flex;align-items:center;gap:8px;font:500 .9rem/1 " + F + ";color:var(--tx-ink);cursor:pointer;-webkit-appearance:none;appearance:none;border:0;background:none;padding:6px 2px;min-height:44px}",
    ".ens-dlg{display:grid;gap:8px}.ens-dl{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:11px;align-items:flex-start;padding:11px 13px;border-radius:16px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);transition:box-shadow .2s,background .2s}",
    ".ens-dl:focus-visible{outline:2px solid #FFD200;outline-offset:2px}.ens-dl.sonando{background:rgba(255,210,0,.18);box-shadow:inset 0 0 0 2px #FFD200}",
    ".ens-dl[data-pj=camila]{margin-left:22px}.ens-av{flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font:700 .9rem/1 " + PO + ";color:#fff;background:#2F6BFF}",
    ".ens-dl[data-pj=camila] .ens-av{background:#E0457B}.ens-dl[data-pj=hugo] .ens-av{background:#12A150}.ens-dl[data-pj=martin] .ens-av{background:#36255C}",
    ".ens-dl > span:last-child{display:grid;gap:2px;min-width:0}.ens-dl small{font:600 .74rem/1.2 " + F + ";color:var(--tx-mut)}.ens-dl b,.ens-linea b{font:600 1.06rem/1.3 " + PO + ";color:var(--tx-ink)}",
    ".ens-tr{display:none;font:400 .86rem/1.35 " + F + ";color:var(--tx-mut)}.ens-con-trad .ens-tr,.ens-escena .ens-tr,.ens-ficha .ens-tr{display:block}",
    /* vocabulario */
    ".ens-voc{display:grid;gap:10px}.ens-pal{display:grid;gap:8px;padding:13px 14px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}",
    ".ens-pal-a{display:flex;align-items:center;gap:12px}.ens-pal-a > div{display:grid;gap:2px;flex:1;min-width:0}.ens-pal-a b{font:700 1.18rem/1.2 " + PO + ";color:var(--tx-ink)}.ens-pal-a small{font:400 .88rem/1.3 " + F + ";color:var(--tx-mut)}",
    ".ens-reg{flex:none;padding:5px 9px;border-radius:99px;font:700 .7rem/1 " + F + ";letter-spacing:.04em;background:rgba(47,107,255,.12);color:#1F4FD1}.ens-reg[data-r='tú']{background:rgba(18,161,80,.14);color:#0B6B34}.ens-reg[data-r=usted]{background:rgba(54,37,92,.12);color:#36255C}",
    oscuro(".ens-reg", "background:rgba(143,180,255,.16);color:#BFD3FF"), oscuro(".ens-reg[data-r='tú']", "background:rgba(123,227,164,.16);color:#9BEBBB"), oscuro(".ens-reg[data-r=usted]", "background:rgba(210,195,246,.16);color:#DCD2FA"),
    ".ens-pal-ej,.ens-td-oir,.ens-linea{all:unset;box-sizing:border-box;cursor:pointer}.ens-pal-ej{display:flex;gap:8px;align-items:flex-start;font:400 .9rem/1.4 " + F + ";color:var(--tx-ink)}.ens-pal-ej svg{flex:none;width:16px;height:16px;margin-top:2px;color:var(--tx-az)}.ens-pal-ej i{font-style:normal;font-weight:600}",
    ".ens-pal-ej:focus-visible,.ens-td-oir:focus-visible,.ens-linea:focus-visible{outline:2px solid #FFD200;outline-offset:2px;border-radius:8px}",
    /* tablas y reglas */
    ".ens-tw{overflow-x:auto;border-radius:16px;box-shadow:inset 0 0 0 1px var(--tx-hair)}.ens-tabla{width:100%;border-collapse:collapse;font:400 .92rem/1.35 " + F + ";color:var(--tx-ink)}",
    ".ens-tabla th{text-align:left;padding:10px 12px;font:700 .74rem/1.25 " + F + ";letter-spacing:.06em;text-transform:uppercase;color:var(--tx-mut);background:var(--tx-sup)}.ens-tabla td{padding:10px 12px;border-top:1px solid var(--tx-hair);vertical-align:top}",
    ".ens-td-oir{display:inline-flex;gap:7px;align-items:flex-start}.ens-td-oir svg{flex:none;width:16px;height:16px;margin-top:2px;color:var(--tx-az)}.ens-td-oir b{font-weight:600}",
    ".ens-reglas{list-style:none;margin:0;padding:0;display:grid;gap:9px}.ens-reglas li{display:flex;gap:12px;align-items:flex-start;margin:0;padding:12px 14px;border-radius:16px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);font:400 .97rem/1.45 " + F + "}.ens-reglas li::before{display:none!important}",
    ".ens-reglas i{flex:none;width:24px;height:24px;border-radius:8px;display:grid;place-items:center;background:#2F6BFF;color:#fff;font:700 .78rem/1 " + PO + ";font-style:normal}",
    /* uso: escenas */
    ".ens-escena{display:grid;gap:6px;padding:12px;border-radius:18px;box-shadow:inset 0 0 0 1px var(--tx-hair)}.ens-escena-t{margin:0 0 2px;font:700 .8rem/1.3 " + F + ";color:var(--tx-az)}",
    ".ens-linea{display:grid;gap:1px;padding:8px 10px;border-radius:12px}.ens-linea:hover{background:var(--tx-sup)}.ens-linea small{font:600 .72rem/1.2 " + F + ";color:var(--tx-mut)}",
    /* pronunciación */
    ".ens-pron{display:grid;gap:10px}.ens-pp{display:flex;gap:12px;align-items:flex-start;padding:13px 14px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}",
    ".ens-pp > div{display:grid;gap:4px;min-width:0}.ens-pp b{font:700 1.12rem/1.2 " + PO + ";color:var(--tx-ink)}.ens-pp p{margin:0;font:400 .93rem/1.45 " + F + ";color:var(--tx-ink)}",
    ".ens-aprox{justify-self:start;padding:3px 9px;border-radius:99px;font:600 .78rem/1.3 " + F + ";background:rgba(255,210,0,.22);color:#6B5300}", oscuro(".ens-aprox", "color:#FFE58A;background:rgba(255,210,0,.14)"),
    /* errores */
    ".ens-errs{display:grid;gap:10px}.ens-porque{margin:0 0 6px;font:400 .93rem/1.45 " + F + ";color:var(--tx-ink)}",
    /* ejemplos resueltos */
    ".ens-ejr{display:grid}.ens-ex{display:grid;gap:10px}.ens-ex[hidden]{display:none}.ens-ex-n{margin:0;font:700 .72rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:var(--tx-mut)}",
    ".ens-ex-sit{margin:0;font:600 1.06rem/1.4 " + PO + ";color:var(--tx-ink)}.ens-resp b{font-size:1.2rem!important}",
    ".ens-ex-nav{display:flex;align-items:center;justify-content:center;gap:14px}.ens-ex-nav .pz-btn{min-width:48px}.ens-ex-dots{display:flex;gap:6px}.ens-ex-dots i{width:8px;height:8px;border-radius:50%;background:var(--tx-hair)}.ens-ex-dots i.on{background:#2F6BFF}",
    /* comprobación */
    ".ens-cq{display:grid;gap:12px}.ens-cq-n{margin:0;font:700 .72rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:var(--tx-mut)}.ens-cq-q{margin:0;font:700 1.22rem/1.3 " + PO + ";color:var(--tx-ink)}",
    ".ens-res-acc{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}",
    ".ens-listo{padding:16px;border-radius:18px;background:rgba(18,161,80,.12);box-shadow:inset 0 0 0 1.5px rgba(18,161,80,.4)}.ens-listo b{font:700 1.1rem/1.3 " + PO + "}.ens-listo p{margin:6px 0 0;font:400 .95rem/1.45 " + F + "}",
    ".ens-volver{margin-top:4px;justify-self:stretch}",
    /* ejercicios: fase, pista, repasa */
    "#player .ens-fase{margin:0 0 10px;display:flex;align-items:center;gap:8px;font:700 .7rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:var(--tx-az,#2F6BFF)}#player .ens-fase span{margin-left:auto;letter-spacing:.04em;font-weight:600;color:var(--tx-mut,#5E5784)}",
    "#player .ens-fase[data-f=dominio]{color:#B07F00}", oscuro("#player .ens-fase[data-f=dominio]", "color:#FFD200"),
    "#player .ens-pista{margin:8px 0 12px;display:grid;gap:6px}.ens-pista-b{all:unset;box-sizing:border-box;cursor:pointer;justify-self:start;display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:99px;font:700 .8rem/1 " + F + ";color:#6B5300;background:rgba(255,210,0,.22)}.ens-pista-b svg{width:16px;height:16px}",
    oscuro(".ens-pista-b", "color:#FFE58A;background:rgba(255,210,0,.14)"),
    "#player .ens-pista p{display:none;margin:0;padding:11px 14px;border-radius:14px;font:400 .95rem/1.45 " + F + ";color:var(--tx-ink,#23212C);background:rgba(255,210,0,.12)}#player .ens-pista.on p{display:block}#player .ens-pista.on .ens-pista-b{pointer-events:none}",
    ".ens-repasa{margin-top:10px}.ens-repasa .pz-btn{width:100%}",
    /* ficha de consulta */
    /* las pestañas van en una fila que se desliza, sin quedarse fijas: el fondo de la ventana es un degradado y, fijas, el texto se veía por debajo */
    ".ens-ficha{display:grid;gap:18px;text-align:left;min-width:0}.ens-ficha-tabs{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 8px;margin:0 -2px;scrollbar-width:none}.ens-ficha-tabs::-webkit-scrollbar{display:none}.ens-ficha-tabs .ens-chip{flex:none;white-space:nowrap}",
    /* «Repasa»: secciones de la explicación. Antes se llamaban ens-fb, igual que la cara trasera de las tarjetas que se
       voltean, y salían giradas 180° (espejo) — 4.53 */
    ".ens-fsec{display:grid;gap:12px;scroll-margin-top:60px;padding-top:4px}.ens-fsec h3{margin:0;font:700 1.15rem/1.25 " + PO + ";color:var(--tx-ink)}.ens-fsec-on h3{color:var(--tx-az)}",
    /* capacidad al terminar */
    ".ens-cap{display:grid;gap:6px;margin:0 0 14px;padding:16px;border-radius:20px;text-align:left;background:rgba(255,210,0,.14);box-shadow:inset 0 0 0 1.5px rgba(255,210,0,.5)}.ens-cap.ok{background:rgba(18,161,80,.12);box-shadow:inset 0 0 0 1.5px rgba(18,161,80,.45)}",
    ".ens-cap small{font:700 .7rem/1.2 " + F + ";letter-spacing:.16em;text-transform:uppercase}.ens-cap b{font:700 1.06rem/1.35 " + PO + "}.ens-cap p{margin:0;font:400 .9rem/1.4 " + F + "}",
    ".ens-cap-acc{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}.ens-cap-l{margin:6px 0 0;padding:0;list-style:none;display:grid;gap:4px;font:400 .86rem/1.35 " + F + "}.ens-cap-l li{display:flex;gap:8px}.ens-cap-l li::before{content:'✓';font-weight:700;color:#12A150}.ens-cap-l li.no::before{content:'•';color:#B07F00}.ens-cap-l span{margin-left:auto;opacity:.75}",
    /* ===== 4.52b: más visual, animado e interactivo ===== */
    "@keyframes ensIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes ensPop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}@keyframes ensFlota{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}",
    ".ens-s:not([hidden]) > *{animation:ensIn .5s cubic-bezier(.2,.8,.2,1) both}.ens-s:not([hidden]) > :nth-child(2){animation-delay:.05s}.ens-s:not([hidden]) > :nth-child(3){animation-delay:.1s}.ens-s:not([hidden]) > :nth-child(4){animation-delay:.15s}.ens-s:not([hidden]) > :nth-child(5){animation-delay:.2s}.ens-s:not([hidden]) > :nth-child(n+6){animation-delay:.25s}",
    /* objetivo */
    ".ens-hero{display:flex;align-items:flex-end;gap:10px}.ens-hero-pf{flex:none;width:96px;height:96px;object-fit:contain;animation:ensFlota 4s ease-in-out infinite}",
    ".ens-glo{position:relative;flex:1;display:grid;gap:3px;padding:13px 15px;margin-bottom:14px;border-radius:20px 20px 20px 6px;background:#2F6BFF;color:#fff}.ens-glo small{font:700 .7rem/1.2 " + F + ";letter-spacing:.08em;text-transform:uppercase;opacity:.85}.ens-glo b{font:700 1.04rem/1.32 " + PO + "}",
    ".ens-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ens-tile{display:grid;justify-items:start;gap:6px;padding:12px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);font:500 .9rem/1.3 " + F + ";color:var(--tx-ink)}.ens-tile img{width:40px;height:40px;object-fit:contain}",
    ".ens-previo{margin:0;display:flex;gap:10px;align-items:center;font:400 .9rem/1.4 " + F + ";color:var(--tx-mut)}.ens-previo img{flex:none;width:30px;height:30px;object-fit:contain}.ens-previo b{color:var(--tx-ink);font-weight:600}",
    ".ens-ruta{list-style:none;margin:0;padding:0 0 4px;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none}.ens-ruta::-webkit-scrollbar{display:none}.ens-ruta li{flex:none;display:grid;justify-items:center;gap:4px;width:66px;font:600 .7rem/1.15 " + F + ";color:var(--tx-mut);text-align:center}.ens-ruta img{width:44px;height:44px;padding:7px;border-radius:15px;object-fit:contain;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}",
    /* sol (dibujado: no hay icono de sol en la app) */
    ".ens-sol{display:inline-block;width:40px;height:40px;border-radius:50%!important;background:radial-gradient(circle at 35% 30%,#FFF3A6,#FFD200 45%,#FFA800);box-shadow:0 0 0 5px rgba(255,210,0,.25),0 0 0 10px rgba(255,210,0,.12)}",
    /* el día que se mueve */
    ".ens-dia{--h:.125;display:grid;gap:10px;padding:14px;border-radius:22px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}.ens-dia-t{margin:0;font:700 .9rem/1.3 " + F + ";color:var(--tx-ink)}",
    ".ens-cielo{position:relative;height:118px;border-radius:16px;overflow:hidden;background:linear-gradient(180deg,#7EC8FF,#CDEBFF);transition:background .6s}.ens-dia.noche .ens-cielo{background:linear-gradient(180deg,#1B2257,#3B3A8C)}",
    ".ens-astro{position:absolute;top:calc(64px - sin(calc(var(--h) * 180deg)) * 48px);left:calc(var(--h) * (100% - 44px));width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFF3A6,#FFD200 45%,#FFA800);box-shadow:0 0 0 6px rgba(255,210,0,.25);transition:background .5s,box-shadow .5s}",
    ".ens-dia.noche .ens-astro{background:radial-gradient(circle at 70% 35%,transparent 0 9px,#FFE27A 10px);box-shadow:none}",
    ".ens-dia-h{position:absolute;top:10px;right:12px;font:700 .8rem/1 " + F + ";color:#1B2257;background:rgba(255,255,255,.8);padding:5px 8px;border-radius:99px}",
    ".ens-dia-w{position:absolute;left:0;right:0;bottom:12px;text-align:center;font:800 1.7rem/1 " + PO + ";color:#1B2257;text-shadow:0 2px 0 rgba(255,255,255,.6)}.ens-dia.noche .ens-dia-w{color:#FFE27A;text-shadow:none}.ens-dia-w.pop{animation:ensPop .45s both}",
    ".ens-dia-r{width:100%;accent-color:#2F6BFF;height:28px;cursor:pointer}",
    /* tarjetas que se voltean */
    ".ens-flips{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ens-flip{cursor:pointer;perspective:900px;-webkit-tap-highlight-color:transparent;border-radius:20px}.ens-flip:focus-visible{outline:2px solid #FFD200;outline-offset:3px}",
    ".ens-fi{display:grid;height:100%;transition:transform .55s cubic-bezier(.2,.8,.2,1);transform-style:preserve-3d}.ens-flip.on .ens-fi{transform:rotateY(180deg)}",
    ".ens-fc{grid-area:1/1;display:grid;align-content:center;gap:6px;min-height:132px;padding:13px;border-radius:20px;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:var(--tx-sup);box-shadow:inset 0 0 0 1.5px var(--tx-bd)}",
    ".ens-fa{justify-items:center;text-align:center}.ens-fa b{font:700 1.15rem/1.15 " + PO + ";color:var(--tx-ink)}.ens-fic{width:46px;height:46px;object-fit:contain;border-radius:12px}.ens-fa .ens-sol{width:38px;height:38px}",
    ".ens-fb{transform:rotateY(180deg);align-content:start;background:#2F6BFF;box-shadow:none;color:#fff;font:400 .84rem/1.35 " + F + "}.ens-fb > b{font:700 .95rem/1.25 " + PO + "}.ens-fb .ens-pal-ej{color:#fff}.ens-fb .ens-pal-ej svg{color:#FFD200}",
    ".ens-flip--err .ens-fc{min-height:112px}.ens-flip--err .ens-fa{justify-items:start;text-align:left;background:rgba(224,69,123,.1);box-shadow:inset 0 0 0 1.5px rgba(224,69,123,.35)}.ens-flip--err .ens-fb{background:#12A150}",
    ".ens-fc small{font:700 .68rem/1.2 " + F + ";letter-spacing:.1em;text-transform:uppercase;opacity:.8}.ens-mal{font:600 1.02rem/1.3 " + PO + "!important;color:#C2185B!important;text-decoration:line-through 2px rgba(224,69,123,.6)}.ens-bien{font:700 1.08rem/1.3 " + PO + "}",
    oscuro(".ens-mal", "color:#FF8FB6!important"),
    ".ens-errs{grid-template-columns:1fr}.ens-cuando{font:500 .82rem/1.3 " + F + ";color:var(--tx-mut)}",
    /* tú o usted: tocar personas */
    ".ens-grupos{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:10px}.ens-gr{display:grid;justify-items:center;gap:2px;padding:12px 8px;border-radius:20px;text-align:center;font:500 .8rem/1.25 " + F + ";color:var(--tx-mut)}.ens-gr img{width:64px;height:64px;object-fit:contain}.ens-gr b{font:800 1.3rem/1 " + PO + "}",
    ".ens-gr[data-g='0']{background:rgba(18,161,80,.12)}.ens-gr[data-g='0'] b{color:#0B8A43}.ens-gr[data-g='1']{background:rgba(91,63,168,.1)}.ens-gr[data-g='1'] b{color:#5B3FA8}.ens-gr[data-g='2']{background:rgba(217,122,0,.12)}.ens-gr[data-g='2'] b{color:#A85E00}",
    oscuro(".ens-gr[data-g='0'] b", "color:#7BE3A4"), oscuro(".ens-gr[data-g='1'] b", "color:#C9B6FF"), oscuro(".ens-gr[data-g='2'] b", "color:#FFC56B"),
    ".ens-toca{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ens-per{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:56px;padding:10px 12px;border-radius:16px;font:500 .88rem/1.25 " + F + ";color:var(--tx-ink);background:var(--tx-sup);box-shadow:inset 0 0 0 1.5px var(--tx-bd);transition:background .3s,box-shadow .3s}",
    ".ens-per i{position:relative;flex:none;display:grid;place-items:center;min-width:30px;height:30px;padding:0 6px;border-radius:10px;font:800 .8rem/1 " + PO + ";font-style:normal;color:transparent;background:var(--tx-hair)}.ens-per i::before{content:'?';position:absolute;color:var(--tx-mut)}",
    ".ens-per.on i::before{content:none}.ens-per.on i{color:#fff;animation:ensPop .4s both}.ens-per.on[data-g='0']{background:rgba(18,161,80,.12);box-shadow:inset 0 0 0 1.5px rgba(18,161,80,.45)}.ens-per.on[data-g='0'] i{background:#12A150}.ens-per.on[data-g='1']{background:rgba(91,63,168,.12);box-shadow:inset 0 0 0 1.5px rgba(91,63,168,.45)}.ens-per.on[data-g='1'] i{background:#5B3FA8}.ens-per.on[data-g='2']{background:rgba(217,122,0,.12);box-shadow:inset 0 0 0 1.5px rgba(217,122,0,.45)}.ens-per.on[data-g='2'] i{background:#D97A00}",
    ".ens-per:focus-visible,.ens-tab:focus-visible,.ens-frase:focus-visible,.ens-pw:focus-visible,.ens-bur:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".ens-toca-fin{margin:0;padding:10px 14px;border-radius:14px;font:600 .92rem/1.35 " + F + ";color:#0B6B34;background:rgba(18,161,80,.12);animation:ensPop .4s both}", oscuro(".ens-toca-fin", "color:#9BEBBB"),
    /* pestañas y chat */
    ".ens-tabs{display:flex;gap:6px;padding:4px;border-radius:16px;background:var(--tx-sup)}.ens-tab{all:unset;box-sizing:border-box;cursor:pointer;flex:1;padding:9px 8px;border-radius:12px;text-align:center;font:600 .8rem/1.2 " + F + ";color:var(--tx-mut)}.ens-tab.on{background:#2F6BFF;color:#fff}",
    ".ens-chat{display:grid;gap:8px}.ens-bur{all:unset;box-sizing:border-box;cursor:pointer;justify-self:start;max-width:86%;display:grid;gap:2px;padding:10px 13px;border-radius:18px 18px 18px 6px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}.ens-bur.der{justify-self:end;border-radius:18px 18px 6px 18px;background:rgba(47,107,255,.14)}",
    ".ens-bur small{font:600 .72rem/1.2 " + F + ";color:var(--tx-mut)}.ens-bur b{font:600 1.02rem/1.3 " + PO + ";color:var(--tx-ink)}",
    ".ens-dlg.ens-chat .ens-dl{display:flex;max-width:92%;gap:9px;margin:0;animation:ensIn .45s calc(var(--i) * 60ms) both}.ens-dlg.ens-chat .ens-dl.der{flex-direction:row-reverse;text-align:right}.ens-dl[data-pj=camila]{margin-left:0}.ens-dlg .ens-av{width:30px;height:30px;font-size:.8rem}",
    ".ens-lugar{position:relative;height:120px;border-radius:20px;background:center 35%/cover no-repeat;overflow:hidden;display:flex;align-items:flex-end;padding:12px 14px}.ens-lugar::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(20,24,60,.75))}.ens-lugar b{position:relative;color:#fff;font:700 1.15rem/1.2 " + PO + "}",
    /* gramática: fichas que se unen */
    ".ens-arma{display:grid;gap:10px;justify-items:center;padding:16px 12px;border-radius:22px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}.ens-fichas{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}",
    ".ens-fichas .ens-ficha{display:inline-grid;place-items:center;padding:9px 13px;border-radius:14px;font:700 1.12rem/1 " + PO + ";color:#fff;background:#2F6BFF;box-shadow:0 3px 0 #1F4FD1}",
    ".ens-ficha-u{position:relative;display:inline-flex;gap:6px}.ens-ficha-u .a{background:#E0457B;box-shadow:0 3px 0 #B02A5C}.ens-ficha-u .b{background:#12A150;box-shadow:0 3px 0 #0B7A3B}.ens-ficha-u .c{position:absolute;inset:0;opacity:0;transform:scale(.6);background:linear-gradient(90deg,#E0457B,#12A150);box-shadow:0 3px 0 #6B3A6B;transition:opacity .35s .25s,transform .45s .25s cubic-bezier(.2,1.4,.4,1)}",
    ".ens-ficha-u .a,.ens-ficha-u .b{transition:transform .35s,opacity .3s .2s}.ens-arma.unido .ens-ficha-u .a{transform:translateX(24px)}.ens-arma.unido .ens-ficha-u .b{transform:translateX(-24px)}.ens-arma.unido .ens-ficha-u .a,.ens-arma.unido .ens-ficha-u .b{opacity:0}.ens-arma.unido .ens-ficha-u .c{opacity:1;transform:none}",
    ".ens-arma-es{margin:0;font:500 .92rem/1.3 " + F + ";color:var(--tx-mut)}",
    ".ens-frases{display:grid;gap:8px}.ens-frase{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:3px;padding:12px 14px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);font:400 .88rem/1.3 " + F + ";color:var(--tx-mut)}.ens-frase small{justify-self:start;padding:3px 8px;border-radius:99px;font:700 .7rem/1.2 " + F + ";color:#1F4FD1;background:rgba(47,107,255,.12)}",
    oscuro(".ens-frase small", "color:#BFD3FF;background:rgba(143,180,255,.16)"),
    ".ens-frase-a{display:flex;gap:8px;align-items:center}.ens-frase-a svg{flex:none;width:18px;height:18px;color:var(--tx-az)}.ens-frase-a b{font:700 1.08rem/1.25 " + PO + ";color:var(--tx-ink)}",
    /* pronunciación con marcas */
    ".ens-ley{display:flex;flex-wrap:wrap;gap:6px 14px;font:500 .8rem/1.3 " + F + ";color:var(--tx-mut)}",
    ".ens-pp{display:grid;gap:6px}.ens-pw{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:10px;align-items:center}.ens-pw svg{flex:none;width:34px;height:34px;padding:8px;border-radius:12px;color:#fff;background:#2F6BFF}.ens-pw b{font:700 1.4rem/1.2 " + PO + ";color:var(--tx-ink)}",
    ".ens-mu{text-decoration:line-through 2.5px #E0457B;color:#C2185B;opacity:.6}", oscuro(".ens-mu", "color:#FF8FB6;opacity:.75"), ".ens-so{font-style:normal;padding:0 2px;border-radius:5px;background:rgba(255,210,0,.45);box-shadow:inset 0 -2px 0 #FFB800}", oscuro(".ens-so", "background:rgba(255,210,0,.3)"),
    ".ens-enl{display:inline-block;width:14px;height:10px;margin:0 -3px;vertical-align:-3px;border:2.5px solid #E0457B;border-top:0;border-radius:0 0 12px 12px}.ens-enl--ley{margin:0 2px 0 0}",
    /* ejemplos: primero pensar */
    ".ens-ex-sit{display:flex;gap:10px;align-items:center;padding:12px;border-radius:18px;background:var(--tx-sup)}.ens-ex-sit img{flex:none;width:58px;height:58px;object-fit:contain}.ens-ex-sit p{margin:0;font:600 1rem/1.4 " + PO + ";color:var(--tx-ink)}",
    ".ens-ex-ver{justify-self:stretch}.ens-ex-sol{display:grid;gap:10px;animation:ensIn .45s both}.ens-ex-sol .ens-reglas li{animation:ensIn .4s calc(.15s + var(--i) * 120ms) both}.ens-ex-sol[hidden]{display:none}",
    /* 4.52c: analizar la frase por funciones */
    ".ens-rol,.ens-an-s{--k:var(--c)}", oscuro(".ens-rol,.ens-an-s", "--k:var(--cd)"),
    ".ens-an{display:grid;gap:10px}.ens-roles{display:flex;flex-wrap:wrap;gap:6px}.ens-rol{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:99px;font:700 .74rem/1.1 " + F + ";color:var(--tx-ink);background:var(--tx-sup);box-shadow:inset 0 0 0 1.5px var(--k)}.ens-rol::before{content:'';width:9px;height:9px;border-radius:3px;background:var(--k)}",
    ".ens-an-f{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;row-gap:4px;align-items:start;padding:12px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}",
    ".ens-an-oir{all:unset;box-sizing:border-box;cursor:pointer;display:grid;place-items:center;width:34px;height:34px;border-radius:11px;color:#fff;background:#2F6BFF}.ens-an-oir svg{width:18px;height:18px}.ens-an-oir:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".ens-an-p{display:flex;flex-wrap:wrap;gap:6px 4px}.ens-an-s{display:inline-grid;justify-items:center;gap:3px;padding:6px 9px 5px;border-radius:12px;background:color-mix(in srgb,var(--k) 16%,transparent);box-shadow:inset 0 -3px 0 var(--k)}",
    ".ens-an-s b{font:700 1.02rem/1.2 " + PO + ";color:var(--tx-ink)}.ens-an-s small{font:800 .64rem/1.1 " + F + ";letter-spacing:.04em;text-transform:uppercase;color:var(--k);white-space:nowrap}",
    ".ens-an-es{grid-column:2;font:400 .86rem/1.35 " + F + ";color:var(--tx-mut)}",
    /* tarjetas antes / después */
    ".ens-flip--ab .ens-fa{justify-items:start;text-align:left}.ens-antes{font:600 1rem/1.35 " + PO + "!important;color:var(--tx-ink)}.ens-flip--ab .ens-fb{background:#2F6BFF}",
    /* video: la frase que crece */
    ".ensv-filas{display:grid;gap:12px;width:100%;justify-items:center}.ensv-fila{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.ensv-fnota{margin:4px 0 -4px;font:600 .8rem/1.2 " + F + ";letter-spacing:.06em;text-transform:uppercase;opacity:.8}",
    ".ensv-pz{display:inline-grid;justify-items:center;gap:4px;padding:9px 12px 7px;border-radius:14px;background:#fff;box-shadow:inset 0 -4px 0 var(--c),0 4px 0 rgba(0,0,0,.18)}.ensv-pz b{font:800 1.12rem/1.1 " + PO + ";color:#1B2257}.ensv-pz small{font:800 .58rem/1 " + F + ";letter-spacing:.06em;text-transform:uppercase;color:var(--c)}",
    /* la idea en una frase */
    ".ens-idea{display:flex;gap:12px;align-items:center;padding:14px 16px;border-radius:20px;background:linear-gradient(135deg,rgba(255,210,0,.22),rgba(255,210,0,.08));box-shadow:inset 0 0 0 1.5px rgba(255,190,0,.45)}.ens-idea img{flex:none;width:40px;height:40px;object-fit:contain}",
    ".ens-idea p{margin:0;display:grid;gap:2px;font:600 1.06rem/1.4 " + PO + ";color:var(--tx-ink)}.ens-idea b{font:800 .68rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:#8A6400}", oscuro(".ens-idea b", "color:#FFD966"),
    /* comprobación con Manzana */
    ".ens-res-mz{float:right;width:54px;height:54px;object-fit:contain;margin:-6px -4px 0 8px;animation:ensPop .4s both}",
    /* ===== el microvideo ===== */
    ".ensv{display:grid;gap:8px}.ensv-pant{position:relative;aspect-ratio:1/1;max-height:62vh;width:100%;margin:0 auto;border-radius:24px;overflow:hidden;color:#fff;background:radial-gradient(120% 80% at 80% 0%,rgba(255,210,0,.22),transparent 55%),linear-gradient(165deg,#3B6BFF 0%,#2A3A9E 50%,#36255C 100%);box-shadow:0 10px 30px rgba(42,58,158,.3)}",
    ".ensv-esc{position:absolute;inset:0;padding:22px 18px;display:grid;align-content:center;justify-items:center;gap:12px;text-align:center;opacity:0;visibility:hidden;transition:opacity .45s,visibility .45s}.ensv-esc.on{opacity:1;visibility:visible}",
    ".ensv-esc [data-p]{opacity:0;transform:translateY(14px) scale(.96);transition:opacity .45s,transform .55s cubic-bezier(.2,1.3,.4,1)}.ensv-esc [data-p].vis,.ensv-esc [data-p='0']{opacity:1;transform:none}",
    ".ensv-esc [data-p].act{filter:drop-shadow(0 0 14px rgba(255,210,0,.55))}",
    ".ensv-mz{width:46%;max-width:180px;animation:ensFlota 3.5s ease-in-out infinite}.ensv-mz--sm{width:30%;max-width:120px}.ensv-grande{font:800 2.4rem/1 " + PO + ";color:#FFD200;text-shadow:0 3px 0 rgba(0,0,0,.18)}",
    ".ensv-dia{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}.ensv-mitad{display:grid;justify-items:center;gap:6px;padding:16px 8px;border-radius:20px}.ensv-sol-l{background:rgba(126,200,255,.25)}.ensv-luna-l{background:rgba(10,12,50,.4)}.ensv-mitad .ens-sol{width:58px;height:58px}.ensv-mitad img{width:58px;height:58px}",
    ".ensv-mitad b,.ensv-col b,.ensv-dos b{font:800 1.35rem/1.15 " + PO + ";color:#FFD200}.ensv-mitad small,.ensv-col small,.ensv-dos small{font:500 .8rem/1.25 " + F + ";opacity:.85}",
    ".ensv-nota{display:flex;gap:8px;align-items:center;padding:8px 12px;border-radius:14px;background:rgba(255,255,255,.12);font:500 .82rem/1.25 " + F + "}.ensv-nota img{width:40px}.ensv-nota s{font-weight:700;text-decoration:line-through 2px #FF8FB6}",
    ".ensv-vs{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}.ensv-col{display:grid;justify-items:center;gap:5px;padding:12px 8px;border-radius:20px;background:rgba(255,255,255,.1)}.ensv-col img{width:64px;height:64px;object-fit:contain}.ensv-col b{font-size:1.1rem}",
    ".ensv-col i,.ensv-dos i{font:800 .8rem/1 " + PO + ";font-style:normal;padding:5px 10px;border-radius:99px;background:#12A150}.ensv-col[data-tag=vous] i,.ensv-dos[data-tag=vous] i{background:#8A63E8}.ensv-dos[data-p='2']:not([data-tag=vous]):not([data-tag=tu]) i{background:#E0457B}",
    /* en la pregunta la frase ya está en pantalla: sin subtítulo, y más sitio para la corrección */
    ".ensv:has(.ensv-e-pregunta.on) .ensv-sub{visibility:hidden}.ensv-e-pregunta{padding-bottom:18px;gap:10px}.ensv-e-pregunta .ensv-mz--sm{width:24%}",
    ".ensv-q{margin:0;font:700 1.15rem/1.3 " + PO + "}.ensv-ops{display:grid;gap:8px;width:100%;max-width:280px}.ensv-op{all:unset;box-sizing:border-box;cursor:pointer;padding:12px;border-radius:16px;font:700 1.05rem/1.2 " + PO + ";color:#1B2257;background:#fff;box-shadow:0 4px 0 rgba(0,0,0,.18);text-align:center}.ensv-op[disabled]{cursor:default}",
    ".ensv-espera .ensv-op:not([disabled]){animation:ensPop .4s both}.ensv-op.ok{background:#12A150;color:#fff}.ensv-op.ko.eleg{background:#E0457B;color:#fff}.ensv-op.ko:not(.eleg){opacity:.5}.ensv-res{margin:0;font:600 .9rem/1.35 " + F + ";animation:ensPop .35s both}",
    ".ensv-bloques{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.ensv-f{display:inline-grid;place-items:center;padding:11px 14px;border-radius:15px;font:800 1.3rem/1 " + PO + ";color:#1B2257;background:#fff;box-shadow:0 4px 0 rgba(0,0,0,.2)}",
    ".ensv-u{position:relative;display:inline-flex;gap:8px}.ensv-u .a{background:#FF8FB6}.ensv-u .b{background:#9BEBBB}.ensv-u .c{position:absolute;inset:0;background:#FFD200;opacity:0;transform:scale(.6)}",
    ".ensv-u.vis .a{animation:evJunta 1s 1.4s both}.ensv-u.vis .b{animation:evJunta2 1s 1.4s both}.ensv-u.vis .c{animation:evAparece .6s 2s both}",
    "@keyframes evJunta{to{transform:translateX(30px);opacity:0}}@keyframes evJunta2{to{transform:translateX(-30px);opacity:0}}@keyframes evAparece{to{opacity:1;transform:none}}",
    ".ensv-dos-w{display:grid;gap:10px;width:100%}.ensv-dos{display:grid;gap:4px;justify-items:center;padding:12px;border-radius:18px;background:rgba(255,255,255,.1)}.ensv-dos .ens-so{background:rgba(255,210,0,.35);color:#fff}",
    ".ensv-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:7px}.ensv-chips span{padding:8px 12px;border-radius:99px;font:700 .9rem/1 " + PO + ";color:#1B2257;background:#FFD200}.ensv-chips.vis span{animation:ensPop .4s calc(var(--i) * 90ms) both}",
    ".ensv-sub{position:static;margin:8px 0 0;padding:8px 14px;border-radius:14px;min-height:calc(2.7em + 16px);box-sizing:border-box;display:flex;align-items:center;justify-content:center;color:#fff;font:500 .9rem/1.35 " + F + ";background:rgba(10,12,40,.62);text-align:center}.ensv-sub:empty{visibility:hidden}.ensv-sub.fr{font:700 1.05rem/1.3 " + PO + ";color:#FFD200}.ensv-sin-cc .ensv-sub{display:none!important}",
    ".ensv-portada{all:unset;box-sizing:border-box;cursor:pointer;position:absolute;inset:0;z-index:3;display:grid;align-content:center;justify-items:center;gap:8px;padding:20px;text-align:center;background:inherit}.ensv-ya .ensv-portada{display:none}",
    ".ensv-portada img{width:42%;max-width:170px;animation:ensFlota 3.5s ease-in-out infinite}.ensv-portada b{font:700 1.15rem/1.25 " + PO + "}.ensv-portada small{font:500 .82rem/1 " + F + ";opacity:.85}",
    ".ensv-pp{display:grid;place-items:center;width:64px;height:64px;margin-top:-34px;border-radius:50%;background:#FFD200;color:#1B2257;box-shadow:0 6px 18px rgba(0,0,0,.25)}.ensv-pp svg{width:30px;height:30px;margin-left:4px}.ensv-portada:focus-visible .ensv-pp{outline:3px solid #fff;outline-offset:3px}",
    ".ensv-fin{position:absolute;inset:0;z-index:4;display:grid;align-content:center;justify-items:center;gap:10px;padding:20px;background:rgba(20,24,70,.88);animation:ensIn .4s both}.ensv-fin[hidden]{display:none}.ensv-fin img{width:34%;max-width:130px}.ensv-fin .pz-btn{min-width:220px}",
    ".ensv-ctl{display:flex;align-items:center;gap:10px}.ensv-b{all:unset;box-sizing:border-box;cursor:pointer;flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:14px;color:#fff;background:#2F6BFF;font:800 .78rem/1 " + PO + "}.ensv-b svg{width:22px;height:22px}.ensv-b:focus-visible,.ensv-barra:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".ensv-i-pausa,.ensv-on .ensv-i-play{display:none}.ensv-on .ensv-i-pausa{display:block}.ensv-cc{background:var(--tx-sup);color:var(--tx-mut);box-shadow:inset 0 0 0 1.5px var(--tx-bd)}.ensv-cc.on{background:#FFD200;color:#1B2257;box-shadow:none}",
    ".ensv-barra{position:relative;flex:1;height:10px;border-radius:99px;background:var(--tx-hair);cursor:pointer;touch-action:none}.ensv-barra::before{content:'';position:absolute;inset:-14px 0}.ensv-lleno{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:99px;background:linear-gradient(90deg,#2F6BFF,#8A63E8)}.ensv-barra i{position:absolute;top:2px;width:2px;height:6px;border-radius:2px;background:rgba(255,255,255,.7)}",
    ".ensv-t{flex:none;font:600 .78rem/1 " + F + ";color:var(--tx-mut);font-variant-numeric:tabular-nums}",
    ".ensv-trans{border-radius:16px;background:var(--tx-sup);padding:0 14px}.ensv-trans summary{cursor:pointer;padding:12px 0;font:600 .88rem/1 " + F + ";color:var(--tx-az)}.ensv-trans ol{margin:0 0 12px;padding:0 0 0 18px;display:grid;gap:6px;font:400 .88rem/1.4 " + F + ";color:var(--tx-ink)}.ensv-trans li.fr{list-style:none;margin-left:-18px}",
    "@media (prefers-reduced-motion:reduce){.ens-s *,.ensv *{animation:none!important;transition:none!important}.ensv-esc [data-p]{transform:none}}",
    /* 4.52c: en tableta y computador la lección usa toda la pantalla (plx123): más columnas, menos scroll */
    "@media (min-width:700px){.ens-ruta li{flex:1 1 0;width:auto}.ens-tiles{grid-template-columns:repeat(4,minmax(0,1fr))}.ens-flips,.ens-toca{grid-template-columns:repeat(3,minmax(0,1fr))}.ens-frases{grid-template-columns:repeat(3,minmax(0,1fr))}.ens-errs,.ens-pron{grid-template-columns:repeat(2,minmax(0,1fr))}.ens-lugar{height:180px}.ens-hero-pf{width:120px;height:120px}}",
    "@media (min-width:1024px){.ens-flips,.ens-toca{grid-template-columns:repeat(4,minmax(0,1fr))}.ens-voc{grid-template-columns:repeat(2,minmax(0,1fr))}.ens-reglas{grid-template-columns:repeat(2,minmax(0,1fr))}.ens-ex-sol .ens-reglas{grid-template-columns:1fr}" +
      ".ens-an{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:12px}.ens-an > .ens-sub,.ens-an > .ens-roles{grid-column:1/-1}" +
      ".ens-intro,.ens-lead,.ens-clave,.ens-notas,.ens-nota,.ens-previo{max-width:78ch}.ens-intro{font-size:1.06rem}.ens-dia{max-width:640px}.ens-grupos{max-width:560px}.ens-chat,.ens-dlg,.ens-tabs{max-width:780px}.ens-lugar{height:220px}.ens-arma{max-width:640px}" +
      ".ens-ex{grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:28px;align-items:start}.ens-ex-n,.ens-ex-sit,.ens-ex-ver{grid-column:1}.ens-ex-sol{grid-column:2;grid-row:1/span 3}.ens-ex-ver{align-self:start}" +
      ".ensv{grid-template-columns:minmax(0,1fr) 300px;grid-template-rows:auto auto auto 1fr;column-gap:20px;align-items:start}.ensv-pant{aspect-ratio:16/9;max-height:56vh;grid-column:1;grid-row:1}.ensv-sub{grid-column:1;grid-row:2}.ensv-ctl{grid-column:1;grid-row:3}.ensv-trans{grid-column:2;grid-row:1/span 4;max-height:72vh;overflow:auto}" +
      ".ensv-esc{padding:28px 40px;gap:16px}.ensv-e-hola,.ensv-e-resumen{grid-auto-flow:column;column-gap:36px}.ensv-mz{width:auto;height:58%;max-width:none}.ensv-mz--sm{height:40%}.ensv-grande{font-size:3.6rem}" +
      ".ensv-dia,.ensv-vs{max-width:640px}.ensv-dos-w{grid-template-columns:1fr 1fr;max-width:760px}.ensv-mitad b,.ensv-col b,.ensv-dos b{font-size:1.8rem}.ensv-f{font-size:1.8rem;padding:14px 20px}.ensv-q{font-size:1.5rem}.ensv-ops{max-width:420px}.ensv-op{font-size:1.2rem}.ensv-chips{max-width:520px}.ensv-chips span{font-size:1.05rem}.ensv-sub{font-size:1.05rem}.ensv-sub.fr{font-size:1.3rem}" +
      ".ensv-e-pregunta{grid-template-columns:auto minmax(0,440px);justify-content:center;column-gap:32px;text-align:left}.ensv-e-pregunta .ensv-mz--sm{grid-row:1/span 3;width:auto;height:50%}.ensv-e-pregunta .ensv-q,.ensv-e-pregunta .ensv-ops,.ensv-e-pregunta .ensv-res{grid-column:2;justify-self:start}}",
    /* ---------- 4.65 diseño 2 (#player.ens2): una idea por pantalla, menos texto, jerarquía clara ---------- */
    "#player.ens2 .tx-s .m2-k,#player .m2-fase{display:flex;align-items:center;gap:8px;font:700 .78rem/1.2 " + PO + ";letter-spacing:0!important;text-transform:none!important;color:var(--tx-mut)}#player .m2-k img,#player .m2-fase img{width:22px;height:22px;object-fit:contain}",
    ".m2-portada{position:relative;height:170px;border-radius:22px;background:center/cover no-repeat;box-shadow:0 18px 36px -22px rgba(0,0,0,.55);overflow:hidden}",
    ".m2-chip{position:absolute;left:12px;top:12px;padding:6px 12px;border-radius:999px;background:rgba(11,19,48,.82);color:#fff;font:700 .76rem/1.2 " + PO + "}",
    ".m2-tit{margin:4px 0 0;font:800 1.55rem/1.15 " + PO + ";color:var(--tx-ink);letter-spacing:-.01em}",
    ".m2-frase{margin:0;font:400 1.02rem/1.5 " + F + ";color:var(--tx-mut)}",
    ".m2-meta{display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:16px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd)}.m2-meta img{width:34px;height:34px;object-fit:contain;flex:none}.m2-meta p{margin:0;font:400 .98rem/1.45 " + F + ";color:var(--tx-ink)}.m2-meta b{font-weight:700}",
    ".m2-mas{border-radius:14px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);padding:0 14px}.m2-mas summary{min-height:48px;display:flex;align-items:center;gap:8px;cursor:pointer;list-style:none;font:600 .95rem/1.3 " + PO + ";color:var(--tx-ink)}.m2-mas summary::-webkit-details-marker{display:none}.m2-mas summary span{margin-left:auto;font-weight:500;color:var(--tx-mut)}.m2-mas summary::after{content:'';flex:none;margin-left:auto;margin-right:4px;width:8px;height:8px;border:solid var(--tx-mut);border-width:0 2.4px 2.4px 0;border-radius:1px;transform:rotate(-45deg);transition:transform .2s}.m2-mas summary:has(span)::after{margin-left:4px}.m2-mas[open] summary::after{transform:rotate(45deg)}.m2-mas ul,.m2-mas p{margin:0 0 12px;padding-left:18px;font:400 .94rem/1.5 " + F + ";color:var(--tx-mut)}.m2-mas p{padding-left:0}",
    ".ens2 .ens-idea{padding:12px 14px;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1.5px rgba(255,190,0,.5)}.ens2 .ens-idea img{width:58px;height:58px;object-fit:contain;flex:none}.ens2 .ens-idea p{font:400 1.02rem/1.5 " + F + "}.ens2 .ens-idea b{color:#B07800}",
    ".ens2 .ens-frase b mark{background:none;color:inherit;text-decoration:underline;text-decoration-color:#F5B800;text-decoration-thickness:3px;text-underline-offset:4px}",
    ".ens2 .m2-capa .m2-extra{display:none}.ens2 .m2-capa.m2-abierta .m2-extra{display:grid}.m2-vermas{width:100%;margin-top:4px}",
    ".ens2 .m2-lugar{height:150px}.ens2 .m2-lugar b{background:rgba(11,19,48,.78);color:#fff;padding:6px 12px;border-radius:999px;font:700 .82rem/1.2 " + PO + "}",
    ".ens2 .m2-dlg-bar{display:flex;align-items:center;gap:10px;flex-wrap:wrap}",
    "#player.ens2 .m2-chat .ens-bur{grid-template-columns:auto minmax(0,1fr);align-items:end;column-gap:10px;animation:m2in .35s ease both}#player.ens2 .m2-chat .ens-bur.der{grid-template-columns:minmax(0,1fr) auto}#player.ens2 .m2-chat .ens-bur.der > .m2-av,#player.ens2 .m2-chat .ens-bur.der > .ens-av{order:2;grid-column:2;grid-row:1}#player.ens2 .m2-chat .ens-bur.der > span{grid-column:1;grid-row:1}",
    ".m2-av{width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:50% 12%;background:#E8EEFF;box-shadow:0 0 0 2px var(--tx-sup);flex:none}",
    "@keyframes m2in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}",
    ".m2-mas-dlg{width:100%;display:flex;justify-content:center;gap:8px}.m2-mas-dlg span{opacity:.75;font-weight:500}",
    ".m2-listo{display:grid;justify-items:center;text-align:center}.m2-listo img{width:110px;height:110px;object-fit:contain}",
    ".m2-v .ensv-pant{background-image:linear-gradient(180deg,rgba(15,23,51,.18),rgba(15,23,51,.55)),var(--fv,none),linear-gradient(165deg,#3B6BFF,#1E3A8A);background-size:cover;background-position:center}",
    ".m2-caps{display:flex;gap:4px;margin-top:8px}.m2-caps span{flex:1 1 0;min-width:0;text-align:center;padding:5px 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-radius:999px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);font:600 .72rem/1.2 " + PO + ";color:var(--tx-mut)}.m2-caps span.ya{color:var(--tx-ink)}.m2-caps span.on{background:#F5B800;color:#131218;box-shadow:none}",
    ".m2-v .ensv-dos[data-tag='así no'] i{background:#E5484D!important;color:#fff!important}.m2-v .ensv-dos[data-tag='así no'] b{text-decoration:line-through;text-decoration-color:#E5484D;text-decoration-thickness:3px;opacity:.85}.m2-v .ensv-dos[data-tag='así sí'] i{background:#30A46C!important;color:#fff!important}",
    "@media (max-width:420px){.m2-caps span{font-size:.66rem}}",
    ".m2-caps--mov{overflow-x:auto;scrollbar-width:none;scroll-behavior:smooth}.m2-caps--mov::-webkit-scrollbar{display:none}.m2-caps--mov span{flex:none;padding:5px 10px;overflow:visible}",
    /* 4.66: la pizarra y el personaje del video; los artículos con color; el resumen final sin estirarse */
    ".ensv-e-pizarra,.ensv-e-persona{container-type:inline-size}",
    ".ensv-chips{align-items:center;align-content:center}.ensv-chips span{height:auto;box-shadow:0 6px 16px -8px rgba(0,0,0,.45)}",
    /* 4.67: los colores de los artículos, sólidos (los pálidos casi no se veían) */
    ".art{font-weight:800;border-radius:7px;padding:.02em .32em;color:#fff;-webkit-box-decoration-break:clone;box-decoration-break:clone}.art-m{background:#2563EB}.art-f{background:#E8590C}.art-p{background:#7C3AED}.art-v{background:#0E8A9E}",
    /* 4.67: el juego en medio va en una pausa propia, sin tapar un ejercicio empezado */
    "#player .m2-pausa{display:none!important}#player:has(.m2-pausa) .pf{display:none!important}",
    ".m2-juego{display:grid;justify-items:center;text-align:center;gap:6px;max-width:440px;margin:6vh max(16px,calc(50% - 220px)) 24px;padding:22px 20px;border-radius:24px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd),0 18px 40px -26px rgba(20,30,80,.45)}",
    ".m2-juego-mz{width:120px;height:120px;object-fit:contain}.m2-juego-k{margin:0;font:700 .8rem/1.2 " + PO + ";color:#2563EB}" + oscuro(".m2-juego-k", "color:#8CB0FF") + ".m2-juego-p{margin:0 0 10px;font:400 .95rem/1.45 " + F + ";color:var(--tx-mut)}.m2-juego-b{width:100%}",
    ".ensv-e-pizarra,.ensv-e-persona{padding:0!important;align-content:stretch!important;justify-items:stretch!important}",
    ".pzv{position:relative;width:100%;height:100%;box-sizing:border-box;padding:3.5% 4% 7%;display:grid}",
    ".pzv-marco{position:relative;padding:2.2cqw;border-radius:10px;background:linear-gradient(145deg,#C9CED6,#F2F4F7 35%,#C9CED6 55%,#F2F4F7);box-shadow:0 16px 34px rgba(0,0,0,.35);display:grid}",
    ".pzv-sup{position:relative;background:#FDFEFF;border-radius:4px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08),inset 0 3px 10px rgba(0,0,0,.06);padding:3.4cqw 4.4cqw;color:#1B2257;text-align:left;display:flex;flex-direction:column;gap:2cqw;overflow:hidden}",
    ".pzv-bandeja{position:absolute;left:12%;right:12%;bottom:-2.6cqw;height:2.6cqw;border-radius:0 0 8px 8px;background:linear-gradient(#E6E9ED,#BFC5CD);display:flex;justify-content:center;align-items:center;gap:3cqw}.pzv-bandeja i{width:7cqw;height:1.4cqw;border-radius:2px;background:#1F2937}.pzv-bandeja i:nth-child(2){background:#2563EB}.pzv-bandeja i:nth-child(3){background:#DC2626}.pzv-bandeja i:nth-child(4){background:#16A34A}",
    ".pzv-t{margin:0;font:800 4.8cqw/1.1 " + PO + ";color:#1B2257;border-bottom:3px solid #FFD200;align-self:flex-start;padding-bottom:1cqw}",
    ".pzv-items{display:flex;flex-direction:column;gap:1.8cqw}.pzv-cols{display:grid;grid-template-columns:1fr 1fr;gap:2.4cqw 4cqw}",
    ".pzv-fila{display:flex;align-items:center;gap:3cqw}.pzv-fila img{width:9.5cqw;height:9.5cqw;object-fit:contain;flex:none}.pzv-fila > span{display:grid;gap:.4cqw}.pzv-fila b{font:700 4.9cqw/1.15 " + PO + ";color:#131218}.pzv-fila small{font:500 3.4cqw/1.2 " + F + ";color:#5B6175}",
    ".pzv-regla{margin:0;padding:1.4cqw 2.6cqw;border-radius:8px;background:#FFF6CC;font:700 4cqw/1.3 " + PO + ";color:#1B2257}",
    ".pzv-par{display:grid;grid-template-columns:auto auto 1fr;align-items:center;gap:1.4cqw 2.4cqw;font:700 5cqw/1.2 " + PO + "}.pzv-par s{color:#DC2626;text-decoration-thickness:3px}.pzv-par > span{color:#9AA0A6}.pzv-par b{color:#15803D}.pzv-par small{grid-column:1/-1;font:500 3.6cqw/1.3 " + F + ";color:#5B6175}",
    ".pzv-tabla{border-collapse:collapse;font:700 4.6cqw/1.2 " + PO + ";color:#131218}.pzv-tabla th,.pzv-tabla td{padding:1.4cqw 3cqw;border-bottom:2px solid #E5E7EB;text-align:left}.pzv-tabla th{font-size:3.4cqw;color:#5B6175;font-weight:600}",
    /* 4.67: Manzana mira hacia la pizarra (la imagen apunta a la derecha y ella está a la derecha) */
    ".pzv-mz{position:absolute;right:1%;bottom:2%;width:22%;filter:drop-shadow(0 8px 14px rgba(0,0,0,.35))}.ensv-esc .pzv-mz[data-p]{transform:scaleX(-1)!important}",
    ".pvv{position:relative;width:100%;height:100%;background:center/cover no-repeat}.pvv::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,23,51,0) 40%,rgba(15,23,51,.55))}",
    ".pvv-pj{position:absolute;left:3%;bottom:0;width:50%;z-index:1;filter:drop-shadow(0 10px 18px rgba(0,0,0,.35))}",
    ".pvv-bur{position:absolute;right:4%;top:6%;width:54%;z-index:2;background:#fff;color:#131218;border-radius:18px 18px 18px 6px;padding:3.4cqw 4cqw;text-align:left;display:grid;gap:1cqw;box-shadow:0 12px 26px -10px rgba(0,0,0,.5)}.pvv-bur b{font:700 5cqw/1.2 " + PO + "}.pvv-bur small{font:500 3.6cqw/1.3 " + F + ";color:#5B6175}",
    ".pvv-nota{position:absolute;right:4%;bottom:8%;width:48%;z-index:2;margin:0;padding:2.4cqw 3cqw;border-radius:12px;background:#FFD200;color:#131218;font:700 4cqw/1.3 " + PO + ";text-align:left}",
    "@media (min-width:1024px){.pzv{padding:3% 22% 5% 4%}.pzv-mz{width:20%;right:2%;bottom:3%}.pzv-t{font-size:3.2cqw}.pzv-fila b,.pzv-par{font-size:3.2cqw}.pzv-fila img{width:6.5cqw;height:6.5cqw}.pzv-fila small,.pzv-par small{font-size:2.2cqw}.pzv-regla{font-size:2.7cqw}.pzv-tabla{font-size:2.8cqw}.pzv-tabla th{font-size:2.1cqw}.pzv-sup{padding:2.4cqw 3cqw;gap:1.6cqw}.pzv-items{gap:1.4cqw}.pvv-bur b{font-size:3cqw}.pvv-bur small,.pvv-nota{font-size:2.2cqw}.pvv-pj{width:34%}.pvv-bur{width:44%;padding:2cqw 2.4cqw}}",
    /* 4.66: tarjetas del diseño 2 más atractivas: título grande, tablas como lista limpia con audio redondo */
    ".m2-h{margin:2px 0 0;font:800 1.35rem/1.2 " + PO + ";color:var(--tx-ink);letter-spacing:-.01em}",
    "#player.ens2 .ens-frases{display:grid!important;grid-template-columns:1fr!important;gap:0!important;border-radius:18px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);overflow:hidden}",
    "#player.ens2 .ens-frase{border-radius:0;box-shadow:none;border-bottom:1px solid var(--tx-bd);padding:12px 14px;gap:2px;background:transparent}#player.ens2 .ens-frase:last-child{border-bottom:0}",
    "#player.ens2 .ens-frase-a{display:flex;align-items:center;gap:12px}#player.ens2 .ens-frase-a svg{width:34px;height:34px;padding:8px;box-sizing:border-box;border-radius:50%;background:#2563EB;color:#fff;flex:none}",
    "#player.ens2 .ens-frase-a b{font:700 1.06rem/1.3 " + PO + ";color:var(--tx-ink)}#player.ens2 .ens-frase > span:last-child{padding-left:46px;font:400 .9rem/1.35 " + F + ";color:var(--tx-mut)}",
    "#player.ens2 .m2-capa.m2-abierta .m2-extra{display:grid}",
    "@media (min-width:1024px){#player.ens2 .ens-frases{grid-template-columns:1fr 1fr!important}#player.ens2 .ens-frase:nth-last-child(2):nth-child(odd){border-bottom:0}}",
    "#player.ens2-fin .av-fin,#player.ens2-fin .plx-endx,#player.ens2-fin .pf-end,#player.ens2-fin .m-quote,#player.ens2-fin .plx46-rep{display:none!important}",
    oscuro(".ens2 .ens-idea b", "color:#FACC15"),
    /* 4.68: caza el error (pila de tarjetas) */
    ".ens-caza{display:grid;margin-bottom:14px}.ens-cz{display:grid;gap:12px;padding:16px;border-radius:22px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);animation:ensIn .4s both}.ens-cz[hidden]{display:none}",
    ".ens-caza[data-q='1'] .ens-cz{box-shadow:inset 0 0 0 1px var(--tx-bd),0 7px 0 -3px var(--tx-sup),0 7px 0 -2px var(--tx-bd)}",
    ".ens-caza[data-q='2'] .ens-cz{box-shadow:inset 0 0 0 1px var(--tx-bd),0 7px 0 -3px var(--tx-sup),0 7px 0 -2px var(--tx-bd),0 14px 0 -7px var(--tx-sup),0 14px 0 -6px var(--tx-bd)}",
    ".ens-cz-n,.ens-as-h small{margin:0;font:700 .72rem/1.2 " + F + ";letter-spacing:.14em;text-transform:uppercase;color:var(--tx-mut)}",
    ".ens-cz-q{display:flex;align-items:center;gap:10px;margin:0;font:700 1.02rem/1.3 " + PO + ";color:var(--tx-ink)}.ens-cz-q img{width:46px;height:46px;object-fit:contain;flex:none}",
    ".ens-cz-f{display:flex;flex-wrap:wrap;gap:8px 6px;margin:4px 0 0}.ens-cz-sit{margin:0;padding:8px 12px;border-radius:12px;font:500 .93rem/1.4 " + F + ";color:var(--tx-ink);background:rgba(47,107,255,.08)}",
    ".ens-cz-w{all:unset;box-sizing:border-box;cursor:pointer;-webkit-tap-highlight-color:transparent;padding:9px 11px;border-radius:12px;font:600 1.15rem/1.15 " + PO + ";color:var(--tx-ink);background:var(--tx-card,#fff);box-shadow:inset 0 0 0 1.5px var(--tx-bd),0 3px 0 var(--tx-bd);transition:transform .08s}",
    oscuro(".ens-cz-w", "background:rgba(255,255,255,.06)"),
    ".ens-cz-w:active{transform:translateY(2px)}.ens-cz-w:focus-visible{outline:2px solid #FFD200;outline-offset:2px}",
    ".ens-cz-w.cz-visto{color:var(--tx-mut);box-shadow:inset 0 0 0 1.5px var(--tx-bd)}.ens-cz-w.cz-ko{animation:czNo .35s}",
    ".ens-cz-w.cz-ok{background:rgba(224,69,123,.14);color:#C2185B;text-decoration:line-through 2.5px #E0457B;box-shadow:inset 0 0 0 2px #E0457B}", oscuro(".ens-cz-w.cz-ok", "color:#FF8FB6"),
    ".ens-cz.pista:not(.hecho) .ens-cz-w[data-ok]{animation:czPista 1.2s infinite}",
    "@keyframes czNo{20%,60%{transform:translateX(-5px)}40%,80%{transform:translateX(5px)}}@keyframes czPista{50%{box-shadow:inset 0 0 0 2.5px #FFB800,0 0 0 4px rgba(255,184,0,.3)}}",
    ".ens-cz-msg{margin:0;min-height:1.3em;font:500 .92rem/1.4 " + F + ";color:var(--tx-mut)}.ens-cz.hecho .ens-cz-msg,.ens-cz.hecho .ens-cz-q{display:none}",
    ".ens-cz-sol{display:grid;gap:10px;animation:ensIn .45s both}.ens-cz-sol[hidden]{display:none}",
    ".ens-cz-top{display:flex;align-items:center;gap:10px}.ens-cz-top img{width:64px;height:64px;object-fit:contain;animation:czPop .5s both}.ens-cz-top b{font:800 1.25rem/1.1 " + PO + ";color:#12A150}.ens-cz-top span{margin-left:auto;font:600 .8rem/1.2 " + F + ";color:var(--tx-mut)}",
    "@keyframes czPop{0%{transform:scale(.4) rotate(-12deg);opacity:0}70%{transform:scale(1.12)}100%{transform:none;opacity:1}}",
    ".ens-cz-fix{display:flex;align-items:center;flex-wrap:wrap;gap:10px;padding:12px 14px;border-radius:16px;background:rgba(18,161,80,.1);box-shadow:inset 0 0 0 1.5px rgba(18,161,80,.35)}",
    ".ens-cz-fix s{font:600 1.1rem/1.2 " + PO + ";color:#C2185B;text-decoration-thickness:2.5px}" + oscuro(".ens-cz-fix s", "color:#FF8FB6") + ".ens-cz-bien mark{padding:0 3px;border-radius:6px;color:inherit;background:rgba(18,161,80,.18)}.ens-cz-fix > svg{width:20px;height:20px;fill:none;stroke:var(--tx-mut);stroke-width:2.5}.ens-cz-fix b{font:800 1.3rem/1.2 " + PO + ";color:var(--tx-ink)}.ens-cz-fix .tx-au{margin-left:auto}",
    ".ens-cz-bien{margin:0;font:500 1rem/1.45 " + PO + ";color:var(--tx-ink)}",
    ".ens-cz-p{display:grid;gap:3px;padding:10px 12px;border-left:3px solid #2F6BFF;background:rgba(47,107,255,.06);border-radius:0 12px 12px 0}.ens-cz-p small{font:700 .72rem/1.2 " + F + ";letter-spacing:.12em;text-transform:uppercase;color:#2F6BFF}.ens-cz-p p{margin:0;font:400 .95rem/1.45 " + F + ";color:var(--tx-ink)}",
    ".ens-cz-truco{border-left-color:#FFB800;background:rgba(255,184,0,.1)}.ens-cz-truco small{color:#9A6B00}", oscuro(".ens-cz-truco small", "color:#FFD25A"), oscuro(".ens-cz-p small", "color:#8DB0FF"),
    ".ens-cz-sig,.ens-as-sig{justify-self:stretch;gap:8px}.ens-cz-sig svg,.ens-as-sig svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.5}",
    ".ens-cz-fin,.ens-as-fin{margin:0;padding:12px 14px;border-radius:14px;font:700 .98rem/1.4 " + PO + ";color:var(--tx-ink);background:rgba(18,161,80,.12)}",
    /* 4.68: así se piensa (ejemplos con ayuda que se retira) */
    ".ens-asi{display:grid;gap:12px;margin-bottom:12px}.ens-as{display:grid;gap:10px;padding:14px;border-radius:20px;background:var(--tx-sup);box-shadow:inset 0 0 0 1px var(--tx-bd);transition:opacity .25s}",
    ".ens-as.bloq{opacity:.45}.ens-as.bloq .ens-as-pasos{display:none}.ens-as.on{box-shadow:inset 0 0 0 2px #2F6BFF}",
    ".ens-as-h{display:flex;gap:12px;align-items:center}.ens-as-h > span{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#2F6BFF;color:#fff;font:800 1rem/1 " + PO + "}.ens-as.hecho .ens-as-h > span{background:#12A150}",
    ".ens-as-h div{display:grid;gap:3px}.ens-as-sit{margin:0;font:700 1.05rem/1.35 " + PO + ";color:var(--tx-ink)}",
    ".ens-as-pasos{display:grid;gap:8px;margin:0;padding:0;list-style:none}.ens-as-p{display:grid;grid-template-columns:26px minmax(0,1fr);gap:10px;animation:ensIn .35s both}.ens-as-p[hidden]{display:none}",
    ".ens-as-p > i{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;font:700 .8rem/1 " + PO + ";font-style:normal;color:var(--tx-mut);box-shadow:inset 0 0 0 1.5px var(--tx-bd)}.ens-as-p > div{display:grid;gap:6px}",
    ".ens-as-q{margin:3px 0 0;font:600 .98rem/1.35 " + F + ";color:var(--tx-ink)}.ens-as-ops{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ens-as-op{min-height:48px;justify-content:center;text-align:center}",
    ".ens-as-a{display:flex;align-items:center;gap:8px;margin:0}.ens-as-a[hidden]{display:none}.ens-as-a img{width:40px;height:40px;object-fit:contain;flex:none}.ens-as-a span{display:grid;gap:2px}",
    ".ens-as-a em{font:600 .8rem/1.2 " + F + ";font-style:normal;color:var(--tx-mut)}.ens-as-a b{font:700 1.05rem/1.25 " + PO + ";color:var(--tx-ink)}.ens-as-a small{font:500 .86rem/1.35 " + F + ";color:#9A6B00}", oscuro(".ens-as-a small", "color:#FFD25A"),
    ".ens-as-sol{display:grid;gap:8px;animation:ensIn .4s both}.ens-as-sol[hidden]{display:none}.ens-as-sol .ens-porque{margin:0}",
    "@media (min-width:900px){.ens-caza,.ens-asi,.ens-cz-sig,.ens-as-sig,.ens-as-fin{max-width:680px;width:100%;margin-left:auto;margin-right:auto}}",
    "@media (min-width:900px){#player.ens2 .ens-s[data-k=obj] > *:not(.tx-k),#player.ens2 .ens-s[data-k=ctx] > *:not(.tx-k){max-width:760px;margin-left:auto;margin-right:auto;width:100%}#player.ens2 .ens-s[data-k=obj] > .tx-k,#player.ens2 .ens-s[data-k=ctx] > .tx-k{max-width:760px;margin-left:auto;margin-right:auto;width:100%}.m2-portada{height:260px}.ens2 .m2-lugar{height:220px}.m2-tit{font-size:1.9rem}}",
  ].join("\n");
  var st = D.createElement("style"); st.id = "plx122"; st.textContent = css; D.head.appendChild(st);
  try { decora(); } catch (e) {}
})();
