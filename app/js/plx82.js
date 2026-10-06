/* PLEX PLAY 3.6.0 — Lecciones rediseñadas: claras, con el siguiente paso siempre a la vista y los profesores como
   protagonistas de las explicaciones
   Referencias (sin copiar): Elevate (pantalla limpia, una acción principal, tipografía grande), Duolingo (el
   siguiente paso resaltado, estados claros de cada lección), Babbel y Busuu (unidades con sus lecciones a la vista,
   duración y tipo de cada lección).
   Pantalla «Lecciones» (Aprender)
   - Selector de curso en una hoja (agrupado por nivel MCER, con el progreso de cada curso).
   - «Tu siguiente lección»: el profesor que la explica, unidad y número, título, ejercicios y minutos, y un solo botón.
   - Progreso del curso (lecciones y unidades) en una línea.
   - Unidades como tarjetas: la actual abierta, las demás se abren al tocarlas. Cada lección dice su estado (hecha,
     siguiente, pendiente), su tipo, sus ejercicios, su dominio y quién la explica.
   - Fuera lo repetido: la prueba de ubicación y el simulacro viven en el Diagnóstico y en Practicar; vocabulario y
     sonidos, en Jugar › Aprender. Manzana ya no aparece aquí.
   Dentro de la lección
   - Explicación: título, el profesor (con «Escuchar la lección» en su tarjeta: él la lee), «Lo esencial» primero,
     luego la regla y los avisos; «Qué vas a practicar» queda plegado al final. Se quitan los chips y la ruta de
     pasos, que repetían lo que dice el botón.
   - Corrección: solo habla el profesor (Manzana se aparta mientras explica). «Ver explicación» lleva su cara.
   Todo lo demás (ejercicios, repaso, juegos al final, cofre) sigue igual. */
(function(){
  "use strict";
  if (typeof GV === "undefined" || typeof LESSONS === "undefined") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var plano = function(h){ var d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  var PR = function(){ return window.PROF || null; };
  var profDe = function(l){ var P0 = PR(); if (!P0) return null; var id = P0.forKey(l.id); return { id: id, d: P0.list[id] }; };
  var cara = function(id, n){ return "img/pf2/pf-" + id + "-e" + (n || 1) + ".webp"; };
  var gesto = function(id, n){ return "img/pf2/pf-" + id + "-g" + (n || 1) + ".webp"; };
  var hecha = function(l){ return !!(S.lessons[l.id] && S.lessons[l.id].done); };
  var TIPO = { gram: "Gramática", conj: "Conjugación", voc: "Vocabulario", lex: "Vocabulario", registre: "Comunicación", cult: "Cultura", comp: "Comprensión", ortho: "Ortografía", phono: "Pronunciación", lit: "Literatura", prod: "Producción", synt: "Sintaxis" };
  var tipoDe = function(l){ if (l.special === "blanc") return "Examen"; if (l.project) return "Proyecto"; return TIPO[l.t] || "Lección"; };
  var NIVEL = { pp: "Para empezar", a1: "A1", a2: "A2", fon: "A2", b11: "B1", b12: "B1", b21: "B2", rem: "B2", prog: "C1", c12: "C1", lit: "C1" };
  var abiertas = {};   /* unidades abiertas a mano */

  var curso = function(){ return (typeof track !== "undefined" && track) || "a1"; };
  var unidadesDe = function(tr){
    var out = [], idx = {};
    LESSONS.forEach(function(l){ if (l.track !== tr) return; var k = l.unit || "—"; if (idx[k] == null) { idx[k] = out.length; out.push({ t: k, ls: [] }); } out[idx[k]].ls.push(l); });
    return out;
  };
  var minutos = function(l){ return Math.max(3, Math.round(((l.items || []).length || 10) * .55)); };

  var construye = function(){
    var v = document.querySelector("#view .gpath"); if (!v) return;
    var tr = curso(), T = (TRACKS.find(function(x){ return x.id === tr; }) || TRACKS[0]), us = unidadesDe(tr);
    var todas = LESSONS.filter(function(l){ return l.track === tr && !l.special; }), nH = todas.filter(hecha).length;
    var nx = typeof nextLesson === "function" ? nextLesson(tr) : null;
    var uAct = nx ? nx.unit : (us[0] && us[0].t), uHechas = us.filter(function(u){ return u.ls.filter(function(l){ return !l.special; }).every(hecha); }).length;
    var pct = todas.length ? Math.round(nH / todas.length * 100) : 0;

    /* siguiente lección */
    var hero = "";
    if (nx) {
      var pf = profDe(nx), ui = us.findIndex(function(u){ return u.t === nx.unit; }) + 1;
      hero = '<div class="lx-next">' + (pf ? '<img class="lx-next-pf" src="' + gesto(pf.id, 1) + '" alt="" decoding="async">' : "") +
        '<div class="lx-next-tx"><small>' + (nH ? "Tu siguiente lección" : "Empieza aquí") + "</small><b>" + esc(plano(nx.title)) + "</b>" +
        "<span>Unidad " + ui + " · " + esc(plano(nx.unit)) + "</span>" +
        '<em>' + (nx.items || []).length + " ejercicios · ~" + minutos(nx) + " min" + (pf ? " · con " + esc(pf.d.name) : "") + "</em>" +
        '<button class="lx-go" data-open="' + nx.id + '">' + (S.lessons[nx.id] ? "Continuar" : "Empezar") + "</button></div></div>";
    } else hero = '<div class="lx-next fin"><div class="lx-next-tx"><small>¡Curso completo!</small><b>Terminaste ' + esc(T.label) + '</b><span>Repasa lo que quieras o cambia de curso.</span></div></div>';

    var unidades = us.map(function(u, i){
      var ls = u.ls, hechas = ls.filter(function(l){ return !l.special && hecha(l); }).length, tot = ls.filter(function(l){ return !l.special; }).length;
      var completa = tot && hechas === tot, actual = u.t === uAct, abierta = abiertas[tr + "|" + u.t] != null ? abiertas[tr + "|" + u.t] : actual;
      var filas = ls.map(function(l){
        var est = hecha(l) ? "hecha" : nx && l.id === nx.id ? "sig" : "pend", m = typeof lessonMastery === "function" ? lessonMastery(l) : null, pf = profDe(l);
        return '<li class="lx-l ' + est + '"><button data-open="' + l.id + '"><i class="lx-st" aria-hidden="true">' + (est === "hecha" ? "✓" : est === "sig" ? "▶" : "") + "</i>" +
          '<span class="lx-lt"><b>' + esc(plano(l.title)) + "</b><small>" + tipoDe(l) + " · " + (l.items || []).length + " ejercicios" + (m && m.seen ? " · " + m.pct + " % dominio" : "") + "</small></span>" +
          (pf ? '<img class="lx-pf" src="' + cara(pf.id, 1) + '" alt="' + esc(pf.d.name) + '" title="' + esc(pf.d.name) + '" loading="lazy">' : "") +
          (est === "sig" ? '<em class="lx-sigb">Siguiente</em>' : "") + "</button></li>";
      }).join("");
      return '<section class="lx-u' + (abierta ? " abierta" : "") + (completa ? " completa" : "") + (actual ? " actual" : "") + '">' +
        '<button class="lx-uh" data-lx-u="' + esc(u.t) + '" aria-expanded="' + !!abierta + '"><span class="lx-un">' + (completa ? "✓" : i + 1) + '</span><span class="lx-ut"><small>Unidad ' + (i + 1) + (actual ? " · estás aquí" : "") + "</small><b>" + esc(plano(u.t)) + '</b></span><span class="lx-uc">' + hechas + "/" + tot + '</span><i class="lx-chev" aria-hidden="true">›</i></button>' +
        '<div class="lx-ub"><span class="lx-ubar"><u style="width:' + (tot ? Math.round(hechas / tot * 100) : 0) + '%"></u></span><ol>' + filas + "</ol></div></section>";
    }).join("");

    var html = '<div class="lx2">' +
      '<button class="lx-curso" data-lx-cursos="1"><span><small>' + esc(NIVEL[tr] || "Curso") + (T.sem ? " · Semestre " + esc(T.sem) : "") + "</small><b>" + esc(T.label) + '</b></span><i aria-hidden="true">Cambiar ▾</i></button>' +
      hero +
      '<div class="lx-prog"><div><b>' + nH + "/" + todas.length + "</b><small>lecciones</small></div><div><b>" + uHechas + "/" + us.length + '</b><small>unidades</small></div><div class="lx-pbar"><span><u style="width:' + pct + '%"></u></span><small>' + pct + " % del curso</small></div></div>" +
      '<div class="lx-h"><h2>Unidades</h2><small>Toca una unidad para ver sus lecciones</small></div>' +
      '<div class="lx-us">' + unidades + "</div></div>";
    var viejo = v.querySelector(".lx2");
    if (viejo) viejo.outerHTML = html; else v.insertAdjacentHTML("afterbegin", html);
    v.classList.add("lx2-on");
  };

  /* hoja para cambiar de curso */
  var hojaCursos = function(){
    var tr = curso(), grupos = {}, orden = [];
    TRACKS.forEach(function(t){
      var n = NIVEL[t.id] || "Otros"; if (!grupos[n]) { grupos[n] = []; orden.push(n); }
      var ls = LESSONS.filter(function(l){ return l.track === t.id && !l.special; }), d = ls.filter(hecha).length;
      grupos[n].push('<button class="lx-c' + (t.id === tr ? " on" : "") + '" data-lx-tr="' + t.id + '"><span><b>' + esc(t.label) + "</b><small>" + (t.sem ? "Semestre " + esc(t.sem) + " · " : "") + d + "/" + ls.length + ' lecciones</small></span><i class="lx-cbar"><u style="width:' + (ls.length ? Math.round(d / ls.length * 100) : 0) + '%"></u></i></button>');
    });
    var el = document.createElement("div"); el.className = "lx-hoja"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Elegir curso");
    el.innerHTML = '<div class="lx-hoja-c"><span class="lx-asa" aria-hidden="true"></span><div class="lx-hoja-h"><b>Elige tu curso</b><button class="lx-x" data-lx-cerrar="1" aria-label="Cerrar">✕</button></div><div class="lx-hoja-b">' +
      orden.map(function(n){ return '<h3>' + esc(n) + "</h3>" + grupos[n].join(""); }).join("") + "</div></div>";
    document.body.appendChild(el);
    new MutationObserver(function(){ if (el.hasAttribute("inert")) el.removeAttribute("inert"); }).observe(el, { attributes: true, attributeFilter: ["inert"] });
    requestAnimationFrame(function(){ el.classList.add("in"); var on = el.querySelector(".lx-c.on"); if (on) on.scrollIntoView({ block: "center" }); });
  };
  var cierraHoja = function(){ var h = document.querySelector(".lx-hoja"); if (!h) return; h.classList.remove("in"); setTimeout(function(){ h.remove(); }, 260); };

  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-lx-u],[data-lx-cursos],[data-lx-tr],[data-lx-cerrar],.lx-hoja");
    if (!b) return;
    if (b.classList.contains("lx-hoja") && e.target === b) { e.preventDefault(); return cierraHoja(); }
    if (b.classList.contains("lx-hoja")) return;
    e.preventDefault(); e.stopPropagation();
    if (b.dataset.lxCursos) return hojaCursos();
    if (b.dataset.lxCerrar) return cierraHoja();
    if (b.dataset.lxTr) { try { track = b.dataset.lxTr; lsSet("cr-track", track); } catch (x) {} cierraHoja(); render(); scrollTo(0, 0); return; }
    if (b.dataset.lxU) {
      var k = curso() + "|" + b.dataset.lxU, sec = b.closest(".lx-u"), ab = !sec.classList.contains("abierta");
      abiertas[k] = ab; sec.classList.toggle("abierta", ab); b.setAttribute("aria-expanded", String(ab));
    }
  }, true);
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") cierraHoja(); });

  var asegura = function(){ try { if (typeof view !== "undefined" && view === "lecciones") { var v = document.querySelector("#view .gpath"); if (v && !v.querySelector(".lx2")) construye(); } } catch (e) {} };
  if (typeof render === "function") { var rO = render; render = function(){ var r = rO.apply(this, arguments); asegura(); return r; }; }
  var vista = document.getElementById("view"), pend = false;
  if (vista) new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; asegura(); }); }).observe(vista, { childList: true, subtree: true });

  /* ---------------- dentro de la lección ---------------- */
  var lecc = function(){ return typeof P !== "undefined" && P && P.lesson && (P.mode === "lesson" || P.mode === "blanc") ? P.lesson : null; };
  var reordenaTeoria = function(box){
    var l = lecc(); if (!l) return;
    var w = box.querySelector(".pbody .wrap"); if (!w || w.dataset.lx) return; w.dataset.lx = "1";
    var pf = profDe(l), prof = w.querySelector(".pf-th"), listen = w.querySelector(".listen"), disp = w.querySelector(".disp"), th = w.querySelector("#theory");
    /* tarjeta del profesor: él presenta y lee la lección */
    if (pf && disp) {
      var tip = (pf.d.tip || [])[Math.abs((l.id.length * 7) % ((pf.d.tip || [1]).length))] || pf.d.hi;
      /* si la teoría trae la presentación del profesor (plx54, .pp-pf), va en esta tarjeta: no dos bloques con la misma cara */
      var pres = th && th.querySelector(".pp-pf p");
      if (pres) { var pc = pres.cloneNode(true), pb = pc.querySelector("b"); if (pb) pb.remove(); tip = pc.textContent.trim() || tip; pres.parentNode.remove(); }
      var card = document.createElement("div"); card.className = "lx-pcard"; card.style.setProperty("--pb", pf.d.color); card.style.setProperty("--pi", pf.d.ink);
      card.innerHTML = '<img src="' + gesto(pf.id, 1) + '" alt="" width="86" height="92" fetchpriority="high" decoding="async"><div><small>Te explica</small><b>' + esc(pf.d.name) + "</b><p>" + esc(tip) + "</p></div>";
      if (listen) { var lb = listen.querySelector("button"); if (lb) { lb.classList.add("lx-oir"); card.querySelector("div").appendChild(lb); } listen.remove(); }
      disp.insertAdjacentElement("afterend", card);
      if (prof) prof.remove();
    }
    /* «Lo esencial» primero; «Qué vas a practicar» plegado al final */
    if (th) {
      var ess = th.querySelector(".plx-ess"), prac = th.querySelector(".plx-prac");
      if (ess) th.insertBefore(ess, th.firstChild);
      if (prac) { var det = document.createElement("details"); det.className = "lx-prac"; det.innerHTML = "<summary>Qué vas a practicar en esta lección</summary>"; prac.parentNode.insertBefore(det, prac); det.appendChild(prac); th.appendChild(det); }
    }
  };
  var rsO = typeof renderStep === "function" ? renderStep : null;
  if (rsO) renderStep = function(){
    var r = rsO.apply(this, arguments);
    try {
      var box = document.getElementById("player");
      if (box && typeof P !== "undefined" && P) {
        box.classList.toggle("lx-fb", P.phase === "feedback");
        var st = P.steps[P.i];
        if (st && st.kind === "theory") reordenaTeoria(box);
      }
    } catch (e) {}
    return r;
  };
  /* «Ver explicación»: con la cara del profesor de la lección */
  new MutationObserver(function(){
    var m = document.querySelector(".gmodal.m-theo .gm-card"); if (!m || m.dataset.lx) return;
    var l = lecc() || (typeof P !== "undefined" && P && P.steps && P.steps[P.i] && P.steps[P.i].key && ITEMS[P.steps[P.i].key] ? ITEMS[P.steps[P.i].key].l : null);
    var pf = l && profDe(l); if (!pf) return;
    m.dataset.lx = "1";
    m.insertAdjacentHTML("afterbegin", '<div class="lx-mprof" style="--pb:' + pf.d.color + ";--pi:" + pf.d.ink + '"><img src="' + cara(pf.id, 1) + '" alt=""><span><b>' + esc(pf.d.name) + "</b><small>te lo explica</small></span></div>");
  }).observe(document.body, { childList: true, subtree: false });

  var css = document.createElement("style"); css.id = "plx82";
  css.textContent = [
    /* la vista original queda debajo, oculta */
    ".gpath.lx2-on > :not(.lx2){display:none!important}",
    ".lx2{display:grid;gap:12px;padding-bottom:16px}",
    ".lx-curso{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 4px}",
    ".lx-curso small{display:block;color:var(--v4-brand);font-weight:800;text-transform:uppercase;letter-spacing:.07em;font-size:.72rem}.lx-curso b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.7rem;letter-spacing:-.02em;line-height:1.1}",
    ".lx-curso i{font-style:normal;flex:none;font-weight:800;font-size:.82rem;color:var(--v4-brand);background:var(--v4-surface2);padding:8px 12px;border-radius:99px;box-shadow:0 0 0 1px var(--v4-line)}",
    /* siguiente lección */
    ".lx-next{position:relative;overflow:hidden;display:grid;grid-template-columns:116px minmax(0,1fr);align-items:end;gap:6px;border-radius:26px;background:linear-gradient(135deg,#0B2D74,#1E4FD6 60%,#4F7BFF);color:#fff;box-shadow:0 22px 44px -22px rgba(30,79,214,.8);min-height:190px;isolation:isolate}",
    ".lx-next::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(120% 90% at 100% 0%,rgba(255,255,255,.22),transparent 55%),repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 2px,transparent 2px 16px)}",
    ".lx-next-pf{align-self:end;width:116px;height:auto;max-height:200px;object-fit:contain;object-position:bottom;filter:drop-shadow(0 10px 18px rgba(0,0,0,.3))}",
    ".lx-next-tx{display:grid;gap:3px;padding:18px 18px 18px 0;align-self:center}.lx-next.fin{grid-template-columns:1fr}.lx-next.fin .lx-next-tx{padding:20px}",
    ".lx-next-tx small{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.7rem;color:#FFD200}.lx-next-tx b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.25rem;line-height:1.15}",
    ".lx-next-tx span{opacity:.9;font-size:.88rem}.lx-next-tx em{font-style:normal;opacity:.8;font-size:.8rem}",
    ".lx-go{all:unset;box-sizing:border-box;cursor:pointer;justify-self:start;margin-top:10px;padding:11px 26px;border-radius:14px;background:#FFD200;color:#0B2D74;font-family:Poppins,system-ui,sans-serif;font-weight:800;box-shadow:0 3px 0 #B38F00;transition:transform var(--v4-t1) var(--v4-e)}.lx-go:active{transform:translateY(2px);box-shadow:0 1px 0 #B38F00}",
    /* progreso */
    ".lx-prog{display:grid;grid-template-columns:auto auto minmax(0,1fr);gap:16px;align-items:center;padding:12px 16px;border-radius:18px;background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1)}",
    ".lx-prog b{display:block;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.05rem}.lx-prog small{color:var(--v4-mute);font-size:.75rem}",
    ".lx-pbar span{display:block;height:8px;border-radius:99px;background:var(--v4-surface2);overflow:hidden;margin-bottom:4px}.lx-pbar u{display:block;height:100%;background:linear-gradient(90deg,#22C55E,#16A34A);border-radius:99px}",
    ".lx-h{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:8px 2px 0}.lx-h h2{margin:0;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.15rem}.lx-h small{color:var(--v4-mute)}",
    /* unidades */
    ".lx-us{display:grid;gap:10px}",
    ".lx-u{border-radius:20px;background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1);overflow:hidden}.lx-u.actual{box-shadow:0 0 0 2px var(--v4-brand),var(--v4-sh1)}",
    ".lx-uh{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;align-items:center;gap:12px;padding:14px 16px}",
    ".lx-un{flex:none;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;font-family:Poppins,system-ui,sans-serif;font-weight:800;background:var(--v4-surface2);color:var(--v4-ink2)}",
    ".lx-u.actual .lx-un{background:var(--v4-brand);color:#fff}.lx-u.completa .lx-un{background:#16A34A;color:#fff}",
    ".lx-ut{flex:1;min-width:0;display:grid}.lx-ut small{color:var(--v4-mute);font-size:.72rem;font-weight:700}.lx-u.actual .lx-ut small{color:var(--v4-brand)}.lx-ut b{font-family:Poppins,system-ui,sans-serif;font-weight:700;font-size:1rem;line-height:1.2}",
    ".lx-uc{flex:none;font-weight:800;font-size:.82rem;color:var(--v4-mute)}.lx-chev{font-style:normal;color:var(--v4-mute);font-size:1.3rem;transition:transform var(--v4-t2) var(--v4-e)}.lx-u.abierta .lx-chev{transform:rotate(90deg)}",
    ".lx-ub{display:none;padding:0 12px 12px}.lx-u.abierta .lx-ub{display:block;animation:jxin var(--v4-t3) var(--v4-e) both}",
    ".lx-ubar{display:block;height:4px;border-radius:99px;background:var(--v4-surface2);margin:0 4px 10px;overflow:hidden}.lx-ubar u{display:block;height:100%;background:var(--v4-brand)}",
    ".lx-ub ol{list-style:none;margin:0;padding:0;display:grid;gap:6px}",
    ".lx-l button{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:14px;background:var(--v4-surface2);transition:transform var(--v4-t1) var(--v4-e),background var(--v4-t2)}",
    ".lx-l button:active{transform:scale(.98)}.lx-l.sig button{background:color-mix(in srgb,var(--v4-brand) 12%,var(--v4-surface));box-shadow:inset 0 0 0 2px var(--v4-brand)}",
    ".lx-st{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-weight:900;font-size:.85rem;box-shadow:inset 0 0 0 2px var(--v4-line);color:transparent}",
    ".lx-l.hecha .lx-st{background:#16A34A;box-shadow:none;color:#fff}.lx-l.sig .lx-st{background:var(--v4-brand);box-shadow:0 0 0 4px color-mix(in srgb,var(--v4-brand) 25%,transparent);color:#fff;animation:lxpulso 1.8s ease-in-out infinite}",
    "@keyframes lxpulso{50%{box-shadow:0 0 0 8px color-mix(in srgb,var(--v4-brand) 10%,transparent)}}",
    ".lx-lt{flex:1;min-width:0;display:grid}.lx-lt b{font-weight:700;font-size:.95rem;line-height:1.25}.lx-l.hecha .lx-lt b{color:var(--v4-ink2)}.lx-lt small{color:var(--v4-mute);font-size:.76rem}",
    ".lx-pf{flex:none;width:32px;height:32px;border-radius:50%;object-fit:cover;object-position:top;background:var(--v4-surface);box-shadow:0 0 0 2px var(--v4-surface)}",
    ".lx-sigb{position:absolute;opacity:0;pointer-events:none}",
    /* hoja de cursos */
    ".lx-hoja{position:fixed;inset:0;z-index:430;background:rgba(5,12,35,.5);display:flex;align-items:flex-end;justify-content:center;opacity:0;transition:opacity .25s}.lx-hoja.in{opacity:1}",
    ".lx-hoja-c{width:min(560px,100%);max-height:84dvh;display:flex;flex-direction:column;background:var(--v4-surface);border-radius:26px 26px 0 0;box-shadow:var(--v4-sh2);transform:translateY(40px);transition:transform .35s var(--v4-e);padding-bottom:env(safe-area-inset-bottom)}.lx-hoja.in .lx-hoja-c{transform:none}",
    ".lx-asa{width:44px;height:5px;border-radius:99px;background:var(--v4-line);margin:10px auto 2px}",
    ".lx-hoja-h{display:flex;align-items:center;justify-content:space-between;padding:6px 18px 8px}.lx-hoja-h b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.2rem}",
    ".lx-x{all:unset;cursor:pointer;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;color:var(--v4-mute)}",
    ".lx-hoja-b{overflow-y:auto;padding:0 14px 18px;display:grid;gap:8px}.lx-hoja-b h3{margin:10px 4px 0;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--v4-mute)}",
    ".lx-c{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:8px;padding:12px 14px;border-radius:16px;background:var(--v4-surface2)}.lx-c.on{box-shadow:inset 0 0 0 2px var(--v4-brand);background:color-mix(in srgb,var(--v4-brand) 8%,var(--v4-surface))}",
    ".lx-c b{display:block;font-family:Poppins,system-ui,sans-serif;font-weight:700}.lx-c small{color:var(--v4-mute);font-size:.78rem}.lx-cbar{display:block;height:5px;border-radius:99px;background:var(--v4-line);overflow:hidden}.lx-cbar u{display:block;height:100%;background:#16A34A}",
    /* dentro de la lección: explicación */
    "#player .m-chips,#player .av-ruta{display:none!important}",
    "#player .m-hero{height:150px!important;border-radius:22px!important}",
    "#player .disp{font-family:Poppins,system-ui,sans-serif!important;font-weight:800!important;letter-spacing:-.02em}",
    ".lx-pcard{display:grid;grid-template-columns:86px minmax(0,1fr);align-items:end;gap:10px;margin:12px 0 16px;padding:0 14px 0 0;border-radius:20px;background:var(--pb);color:var(--pi);overflow:hidden}",
    ".lx-pcard img{width:86px;height:auto;max-height:120px;object-fit:contain;object-position:bottom;align-self:end}",
    ".lx-pcard > div{padding:12px 0;align-self:center}.lx-pcard small{font-weight:800;text-transform:uppercase;letter-spacing:.07em;font-size:.68rem;opacity:.75}.lx-pcard b{display:block;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.05rem}.lx-pcard p{margin:2px 0 8px;font-size:.9rem;line-height:1.4}",
    ".lx-pcard .lx-oir{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:99px;background:rgba(255,255,255,.75);color:var(--pi);font-weight:800;font-size:.82rem}.lx-pcard .lx-oir svg{width:16px;height:16px}",
    "#player .plx-ess{border-radius:18px!important}",
    ".lx-prac{margin-top:14px;border-radius:16px;background:var(--v4-surface2);padding:10px 14px}.lx-prac summary{cursor:pointer;font-weight:800;color:var(--v4-brand)}.lx-prac .plx-prac{margin-top:8px;box-shadow:none!important;background:transparent!important;padding:0!important}.lx-prac .plx-prac > :first-child{display:none}",
    /* corrección: solo habla el profesor */
    "#player.lx-fb .m-ill{display:none!important}",
    ".lx-mprof{display:flex;align-items:center;gap:10px;margin:-4px 0 10px;padding:6px 12px 6px 6px;border-radius:99px;background:var(--pb);color:var(--pi);width:max-content;max-width:100%}.lx-mprof img{width:36px;height:36px;border-radius:50%;object-fit:cover;object-position:top;background:#fff}.lx-mprof b{display:block;font-size:.88rem}.lx-mprof small{font-size:.72rem;opacity:.8}"
  ].join("\n");
  document.head.appendChild(css);
})();
