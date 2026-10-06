/* PLEX PLAY 3.7.0 — PLEX Quiz: minijuegos en vivo al estilo Kahoot, con el francés de tus lecciones
   Modos
   - Quiz clásico: 10 preguntas de opción múltiple, 20 s cada una, contra tres estudiantes simulados de tu nivel.
     Puntos por rapidez (hasta 1000) y bono de racha (+100 por acierto seguido, hasta +500). Entre preguntas, la
     tabla se reordena en vivo; al final, podio.
   - Verdadero o falso: 12 frases, 10 s cada una.
   - Contrarreloj: 60 segundos para responder todas las que puedas; cada acierto suma y encadena combo.
   - 1v1 en vivo: sala con PIN de 4 letras; el primero que entre juega contigo. Si nadie entra, juegas contra Manzana.
   - Grupal: el anfitrión crea la sala (puede jugar o solo presentar), los demás entran con el PIN desde su teléfono;
     todos ven la pregunta, responden en sus teléfonos y el ranking se actualiza en vivo después de cada pregunta.
     Tiempo real con los canales de Supabase (mensajes + presencia): no hace falta ninguna tabla. Nunca viajan
     correos: solo apodo, gato y puntos. Para probar sin servidor: localStorage «plx-net-local» = "1".
   Aprendizaje
   - Las preguntas salen de las lecciones que hiciste y de tu unidad actual (PLXG.retos, con sus distractores
     filtrados); las que tienen audio se pueden escuchar. Cada error va a tu carnet con su explicación; un acierto
     sobre un error del carnet lo limpia.
   Progreso y recompensas
   - XP por aciertos y por puesto (cuenta para la meta diaria, la racha y el ranking). Estadísticas propias
     (S.game.quiz) y cuatro accesorios del gato que se desbloquean jugando: insignia Quiz, gorra de capitán, aura
     arcoíris y bufanda morada Quiz. Al desbloquear uno, se puede equipar en el momento. */
(function(){
  "use strict";
  var G = window.PLXG; if (!G || !G.retos || typeof gEnsure !== "function") return;
  var esc = G.esc || function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var mezcla = G.mezcla, plano = G.plano || function(h){ var d = document.createElement("div"); d.innerHTML = h; return d.textContent || ""; };
  var sfx = function(n, x){ try { G.sfx(n, x); } catch (e) {} };
  var lsG = function(k){ try { return localStorage.getItem(k); } catch (e) { return null; } };

  /* ---------------- datos del jugador ---------------- */
  var Q = function(){ var g = gEnsure(); g.quiz = g.quiz || { jugadas: 0, victorias: 0, mejor: 0, perfectas: 0, correctas: 0, racha: 0 }; return g.quiz; };
  var rid = function(n){ var a = "ABCDEFGHJKMNPQRSTUVWXYZ23456789", s = ""; for (var i = 0; i < n; i++) s += a[Math.floor(Math.random() * a.length)]; return s; };
  var local = function(){ return lsG("plx-net-local") === "1"; };
  var miId = (function(){ var v = null; try { v = sessionStorage.getItem("plx-kq-id"); if (!v) { v = "k" + rid(10); sessionStorage.setItem("plx-kq-id", v); } } catch (e) { v = "k" + rid(10); } return v; })();
  var yo = function(){ var g = gEnsure(); return { id: (!local() && window.PCB && PCB.uid) || miId, nick: (g.name || "Jugador").slice(0, 18), cat: { coat: g.cat.coat, acc: g.cat.acc } }; };
  var hayRed = function(){ if (local()) return true; try { return !!(window.PCB && PCB.sb) && navigator.onLine !== false; } catch (e) { return false; } };
  var gato = function(c, mood){ try { return catSVG(c || {}, { mood: mood || "happy" }); } catch (e) { return ""; } };

  /* ---------------- banco de preguntas según tu progreso ---------------- */
  var leccionesBase = function(){
    var tr = typeof track !== "undefined" ? track : "a1";
    var ls = LESSONS.filter(function(l){ return l.track === tr && !l.special; });
    var hechas = ls.filter(function(l){ return S.lessons[l.id] && S.lessons[l.id].done; });
    var nx = typeof nextLesson === "function" ? nextLesson(tr) : null;
    var unidad = nx ? ls.filter(function(l){ return l.unit === nx.unit; }) : [];
    var base = hechas.concat(unidad.filter(function(l){ return hechas.indexOf(l) < 0; }));
    if (base.length < 3) base = ls.slice(0, Math.max(4, ls.indexOf(nx) + 2));
    return { tr: tr, ls: base };
  };
  var banco = function(n, tipo){
    var b = leccionesBase(), nivel = G.nivel(b.tr), rs = [];
    try { rs = G.retos(b.ls, nivel, { max: 80 }) || []; } catch (e) { rs = []; }
    rs = rs.filter(function(r){ return r.tipo === "uno" && r.correcta && r.correcta[0] && (r.malas || []).length >= 2; });
    rs = mezcla(rs);
    var out = [];
    for (var i = 0; i < rs.length && out.length < n; i++) {
      var r = rs[i];
      if (tipo === "vf") {
        if (!/_{2,}/.test(r.q || "")) continue;
        var verdad = Math.random() < .5, mala = r.malas[0];
        var fr = verdad ? G.completa(r.q, r.correcta[0]) : plano(r.q).replace(/_{2,}/, mala);
        if (!fr || (!verdad && G.norm && G.norm(fr) === G.norm(G.completa(r.q, r.correcta[0]) || ""))) continue;
        out.push({ tipo: "vf", ask: "¿La frase es correcta?", q: fr, ops: ["Verdadero", "Falso"], ok: verdad ? 0 : 1, why: r.why || "", bien: G.completa(r.q, r.correcta[0]), key: r.key, audio: null });
      } else {
        var ops = G.opcionesReto ? G.opcionesReto(r, 4, nivel) : mezcla([{ t: r.correcta[0], ok: true }].concat(r.malas.slice(0, 3).map(function(x){ return { t: x, ok: false }; })));
        var vistos = {}; ops = ops.filter(function(o){ var k = String(o.t).toLowerCase().trim(); if (vistos[k]) return false; vistos[k] = 1; return true; });
        if (ops.length < 3) continue;
        ops = ops.slice(0, 4);
        if (!ops.some(function(o){ return o.ok; })) continue;
        out.push({ tipo: "mc", ask: r.ask || "Elige la respuesta correcta", q: plano(r.q || ""), ops: ops.map(function(o){ return o.t; }), ok: ops.findIndex(function(o){ return o.ok; }), why: r.why || "", bien: r.correcta[0], key: r.key, audio: r.audio || null });
      }
    }
    return out;
  };

  /* ---------------- puntos ---------------- */
  var puntos = function(ok, ms, T, racha){ if (!ok) return 0; var base = Math.round(1000 * (1 - Math.min(1, ms / (T * 1000)) / 2)); return base + Math.min(500, 100 * Math.max(0, racha - 1)); };
  var BOTS = [["Camila", "naranja"], ["Andrés", "gris"], ["Valentina", "siames"], ["Mateo", "negro"], ["Sofía", "blanco"], ["Julián", "calico"]];

  /* ---------------- transporte en vivo (como PLEX 1V1) ---------------- */
  var canal = function(nombre, meta, on){
    if (local()) {
      var bc = new BroadcastChannel(nombre), lista = {}, me = meta.id;
      var envia = function(o){ bc.postMessage(o); };
      bc.onmessage = function(e){ var o = e.data || {}; if (o.k === "hola") { lista[o.de] = o.meta; envia({ k: "aqui", de: me, meta: meta }); pres(); } else if (o.k === "aqui") { lista[o.de] = o.meta; pres(); } else if (o.k === "chao") { delete lista[o.de]; pres(); } else if (o.k === "m") { if (o.to && o.to !== me) return; on.msg && on.msg(o.ev, o.d || {}, o.de); } };
      var pres = function(){ on.miembros && on.miembros(Object.keys(lista).map(function(k){ return { id: k, meta: lista[k] }; })); };
      lista[me] = meta; setTimeout(function(){ envia({ k: "hola", de: me, meta: meta }); pres(); on.listo && on.listo(); }, 30);
      return { send: function(ev, d, to){ envia({ k: "m", ev: ev, d: d, de: me, to: to || null }); }, cerrar: function(){ envia({ k: "chao", de: me }); bc.close(); } };
    }
    var ch = PCB.sb.channel(nombre, { config: { broadcast: { self: false }, presence: { key: meta.id } } }), l2 = [];
    ch.on("broadcast", { event: "m" }, function(m){ var p = m.payload || {}; if (p.to && p.to !== meta.id) return; on.msg && on.msg(p.ev, p.d || {}, p.de); });
    ch.on("presence", { event: "sync" }, function(){ var st = ch.presenceState(); l2 = Object.keys(st).map(function(k){ return { id: k, meta: (st[k] && st[k][0]) || {} }; }); on.miembros && on.miembros(l2); });
    ch.subscribe(function(e){ if (e === "SUBSCRIBED") { ch.track(meta); on.listo && on.listo(); } else if ((e === "CHANNEL_ERROR" || e === "TIMED_OUT") && on.error) on.error(e); });
    return { send: function(ev, d, to){ try { ch.send({ type: "broadcast", event: "m", payload: { ev: ev, d: d || {}, de: meta.id, to: to || null } }); } catch (e) {} }, cerrar: function(){ try { ch.untrack(); PCB.sb.removeChannel(ch); } catch (e) {} } };
  };

  /* ---------------- capa ---------------- */
  var capa = null, J = null, reloj = null;
  var abreCapa = function(){
    if (!capa) {
      capa = document.createElement("div"); capa.className = "kq"; capa.setAttribute("role", "dialog"); capa.setAttribute("aria-modal", "true"); capa.setAttribute("aria-label", "PLEX Quiz");
      document.body.appendChild(capa);
      new MutationObserver(function(){ if (capa.hasAttribute("inert")) capa.removeAttribute("inert"); }).observe(capa, { attributes: true, attributeFilter: ["inert"] });
      capa.addEventListener("click", alClic); capa.addEventListener("keydown", alTecla); capa.addEventListener("input", function(e){ if (e.target.id === "kqPin") e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4); });
    }
    capa.hidden = false; document.body.style.overflow = "hidden";
  };
  /* avance: la partida dio XP. El aviso de nivel, los logros y el perfil público (gAfterProgress) salen al
     cerrar el Quiz, no encima del resultado ni en la lección siguiente. */
  var avance = false;
  var cierra = function(){
    paraTodo(); try { stopAudio(); } catch (e) {}
    if (J && J.net) { try { J.net.send("sale", {}); J.net.cerrar(); } catch (e) {} }
    J = null; if (capa) { capa.hidden = true; capa.innerHTML = ""; } document.body.style.overflow = ""; try { render(); } catch (e) {}
    if (avance) { avance = false; setTimeout(function(){ try { if (typeof gAfterProgress === "function") gAfterProgress(); } catch (e) {} }, 0); }
  };
  var paraReloj = function(){ if (reloj) { clearInterval(reloj); reloj = null; } };
  /* al cerrar o volver al menú no queda nada en marcha: el contrarreloj y los temporizadores de una partida
     cerrada seguían corriendo y tocaban la siguiente (saltaba la primera pregunta, el reloj iba al doble) */
  var paraTodo = function(){
    paraReloj();
    if (!J) return;
    clearTimeout(J.tAuto); clearTimeout(J.tSig); if (J.relojCrono) { clearInterval(J.relojCrono); J.relojCrono = null; }
    Object.keys(J.jug || {}).forEach(function(k){ clearTimeout(J.jug[k].tBot); });
  };
  /* temporizadores de la partida (bots, avance automático): en modo solo se congelan con la app oculta */
  var prog = function(o, k, fn, ms){
    clearTimeout(o[k]); o[k + "F"] = fn;
    if (J && J.oculto) { o[k + "R"] = ms; return; }
    o[k + "A"] = Date.now() + ms;
    o[k] = setTimeout(function(){ o[k + "F"] = null; fn(); }, ms);
  };
  var pendientes = function(){ var l = [[J, "tAuto"], [J, "tSig"]]; Object.keys(J.jug || {}).forEach(function(k){ l.push([J.jug[k], "tBot"]); }); return l; };
  /* Modo solo con la app oculta: el reloj, los bots y el avance se detienen y siguen donde iban al volver
     (antes el Quiz seguía pasando preguntas y al volver sonaba todo junto). Una sala en vivo no se detiene. */
  document.addEventListener("visibilitychange", function(){
    if (!J || J.net || J.lobby || J.cerrada || !J.qs) return;
    var ahora = Date.now();
    if (document.hidden) {
      if (J.oculto) return;
      J.oculto = ahora;
      pendientes().forEach(function(p){ var o = p[0], k = p[1]; if (o[k + "F"]) { clearTimeout(o[k]); o[k + "R"] = Math.max(0, (o[k + "A"] || ahora) - ahora); } });
    } else if (J.oculto) {
      var d = ahora - J.oculto; J.oculto = 0;
      if (J.t0) J.t0 += d;
      pendientes().forEach(function(p){ var o = p[0], k = p[1], r = o[k + "R"]; o[k + "R"] = null; if (o[k + "F"] && r != null) prog(o, k, o[k + "F"], r); });
    }
  });
  var top = function(titulo, extra){ return '<div class="kq-top"><button class="kq-x" data-kq="salir" aria-label="Salir">✕</button><b>' + esc(titulo) + "</b>" + (extra || "<span></span>") + "</div>"; };
  var FIG = ['<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/></svg>', '<svg viewBox="0 0 24 24"><path d="M12 2l10 10-10 10L2 12z"/></svg>', '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>', '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'];

  /* ---------------- menú ---------------- */
  var MODOS = [
    ["clasico", "Quiz clásico", "10 preguntas · contra 3 estudiantes", "#1E4FD6"],
    ["vf", "Verdadero o falso", "12 frases · 10 s cada una", "#16A34A"],
    ["crono", "Contrarreloj", "60 segundos · todas las que puedas", "#F5A524"],
    ["duelo", "1v1 en vivo", "Reta a un amigo con un código", "#E5484D"],
    ["grupo", "Grupal en vivo", "Tu clase con un PIN · ranking en vivo", "#8B5CF6"]
  ];
  var menu = function(){
    abreCapa(); paraTodo(); J = null;
    var q = Q(), rec = PREMIOS.filter(function(p){ return reqOk(p.req); }).length;
    capa.innerHTML = top("PLEX Quiz") + '<div class="kq-body"><div class="kq-hero"><div class="kq-hero-fig" aria-hidden="true">' + FIG.map(function(f, i){ return '<i class="c' + i + '">' + f + "</i>"; }).join("") + '</div><h1>PLEX Quiz</h1><p>Preguntas en vivo con el francés de tus lecciones. Responde rápido: la velocidad y la racha suman puntos.</p></div>' +
      '<div class="kq-modos">' + MODOS.map(function(m){ return '<button class="kq-modo" data-kq="modo" data-m="' + m[0] + '" style="--c:' + m[3] + '"><b>' + m[1] + "</b><small>" + m[2] + "</small><i>›</i></button>"; }).join("") + "</div>" +
      '<div class="kq-pin"><label for="kqPin">¿Tienes un PIN de sala?</label><div><input id="kqPin" inputmode="text" autocomplete="off" autocapitalize="characters" maxlength="4" placeholder="PIN"><button class="kq-btn sm" data-kq="unirme">Entrar</button></div></div>' +
      '<div class="kq-stats"><div><b>' + q.jugadas + "</b><small>partidas</small></div><div><b>" + q.victorias + "</b><small>victorias</small></div><div><b>" + (q.mejor || 0).toLocaleString("es-CO") + "</b><small>récord</small></div><div><b>" + q.racha + "</b><small>mejor racha</small></div></div>" +
      '<h2 class="kq-h">Recompensas para tu gato <small>' + rec + " de " + PREMIOS.length + "</small></h2>" +
      '<div class="kq-prem">' + PREMIOS.map(function(p){ var ok = reqOk(p.req), a = {}; a[p.slot] = p.id; return '<div class="kq-pr' + (ok ? " ok" : "") + '"><span>' + gato(p.slot === "scarf" ? { coat: gEnsure().cat.coat, acc: { neck: p.id } } : { coat: gEnsure().cat.coat, acc: a }, "happy") + "</span><b>" + esc(p.n) + "</b><small>" + (ok ? "Desbloqueado" : esc(reqTxt(p.req))) + "</small></div>"; }).join("") + "</div></div>";
  };

  /* ---------------- partida (motor común) ---------------- */
  var nuevaPartida = function(modo, preguntas, opc){
    opc = opc || {};
    var me = yo();
    J = { modo: modo, qs: preguntas, i: -1, T: modo === "vf" ? 10 : 20, jug: {}, orden: [], fase: "", t0: 0, resp: null, net: opc.net || null, host: opc.host !== false, juegoYo: opc.juegoYo !== false, pin: opc.pin || null, bots: [], xp: 0, cerrada: false, crono: modo === "crono", seg: 60, racha: 0, maxRacha: 0, correctas: 0, unidos: opc.unidos || [] };
    if (J.juegoYo) J.jug[me.id] = { id: me.id, nick: me.nick, cat: me.cat, pts: 0, racha: 0, yo: true, delta: 0 };
    (opc.rivales || []).forEach(function(r){ J.jug[r.id] = { id: r.id, nick: r.nick, cat: r.cat, pts: 0, racha: 0, delta: 0, bot: r.bot, skill: r.skill }; });
    return J;
  };
  var tabla = function(){ return Object.keys(J.jug).map(function(k){ return J.jug[k]; }).sort(function(a, b){ return b.pts - a.pts; }); };

  /* --- solo: clásico, V/F y contrarreloj --- */
  var empiezaSolo = function(modo){
    var n = modo === "vf" ? 12 : modo === "crono" ? 40 : 10, qs = banco(n, modo === "vf" ? "vf" : "mc");
    if (qs.length < (modo === "crono" ? 8 : 5)) return aviso("Todavía hay pocas preguntas para tu curso. Haz una lección y vuelve.");
    var rivales = [];
    if (modo !== "crono") {
      var nv = G.nivel(leccionesBase().tr), elegidos = mezcla(BOTS).slice(0, 3);
      rivales = elegidos.map(function(b, k){ return { id: "bot" + k, nick: b[0], cat: { coat: b[1], acc: { hat: k === 0 ? "boina" : undefined } }, bot: true, skill: .5 + Math.random() * .3 + nv * .03 }; });
    }
    nuevaPartida(modo, qs, { rivales: rivales });
    cuenta(siguiente);
  };
  var cuenta = function(luego){
    var n = 3; capa.innerHTML = '<div class="kq-cuenta"><b>3</b><small>' + esc(J.crono ? "60 segundos" : J.qs.length + " preguntas") + "</small></div>"; sfx("tic");
    var b = capa.querySelector("b"), mia = J;
    /* si la partida se cerró (u otra la reemplazó) la cuenta se detiene; con la app oculta, espera */
    var t = setInterval(function(){ if (J !== mia) { clearInterval(t); return; } if (J.oculto) return; n--; if (n <= 0) { clearInterval(t); luego(); return; } b.textContent = n; b.classList.remove("z"); void b.offsetWidth; b.classList.add("z"); sfx("tic"); }, 700);
  };
  var siguiente = function(){
    if (!J) return;
    J.i++;
    if (J.crono ? J.seg <= 0 || J.i >= J.qs.length : J.i >= J.qs.length) return fin();
    J.resp = null; J.fase = "q"; J.t0 = Date.now();
    var q = J.qs[J.i];
    if (J.host && J.net) J.net.send("q", { i: J.i, n: J.qs.length, tipo: q.tipo, ask: q.ask, q: q.q, ops: q.ops, T: J.T, audio: q.audio });
    pintaPregunta();
    if (q.audio) { try { speak(q.audio); } catch (e) {} }
    /* bots: responden con su habilidad y su tiempo */
    Object.keys(J.jug).forEach(function(k){ var j = J.jug[k]; if (!j.bot) return; j.respI = null; var ms = 1800 + Math.random() * (J.T * 1000 * .55); prog(j, "tBot", function(){ if (!J || J.fase !== "q") return; j.respI = Math.random() < j.skill ? q.ok : (q.ok + 1 + Math.floor(Math.random() * (q.ops.length - 1))) % q.ops.length; j.ms = ms; marcaRespondieron(); }, ms); });
    if (!J.crono) arrancaTiempo();
  };
  var arrancaTiempo = function(){
    paraReloj();
    var anillo = capa.querySelector(".kq-ring i"), num = capa.querySelector(".kq-ring b");
    reloj = setInterval(function(){
      if (!J || J.fase !== "q") return paraReloj();
      if (J.oculto) return;   /* app oculta en modo solo: el reloj espera (J.t0 se corre al volver) */
      var resta = J.T - (Date.now() - J.t0) / 1000;
      if (num) num.textContent = Math.max(0, Math.ceil(resta));
      if (anillo) anillo.style.setProperty("--p", Math.max(0, resta / J.T));
      if (resta <= 5 && resta > 0 && Math.ceil(resta) !== J.ultTic) { J.ultTic = Math.ceil(resta); sfx("tic"); }
      if (resta <= 0) { paraReloj(); if (J.host) revela(); }
      else if (J.host && todosRespondieron()) { paraReloj(); setTimeout(function(){ if (J && J.fase === "q") revela(); }, 400); }
    }, 100);
  };
  var todosRespondieron = function(){ return Object.keys(J.jug).every(function(k){ var j = J.jug[k]; return j.respI != null || (j.yo ? J.resp != null : false) || j.fuera; }); };
  var marcaRespondieron = function(){ var el = capa && capa.querySelector(".kq-resp"); if (!el || !J) return; var n = Object.keys(J.jug).filter(function(k){ var j = J.jug[k]; return j.yo ? J.resp != null : j.respI != null; }).length; el.textContent = n + " de " + Object.keys(J.jug).length + " respondieron"; };

  var pintaPregunta = function(){
    var q = J.qs[J.i], vf = q.tipo === "vf";
    var cab = J.crono ? '<div class="kq-crono"><b id="kqSeg">' + Math.ceil(J.seg) + '</b><small>segundos</small></div>' : '<div class="kq-ring"><i style="--p:1"></i><b>' + J.T + "</b></div>";
    capa.innerHTML = top((J.pin ? "Sala " + J.pin + " · " : "") + "Pregunta " + (J.i + 1) + (J.crono ? "" : " de " + J.qs.length), '<span class="kq-pts">' + ((J.jug[yo().id] || {}).pts || 0).toLocaleString("es-CO") + "</span>") +
      '<div class="kq-q">' + cab + '<div class="kq-card"><small>' + esc(q.ask) + '</small><p lang="fr">' + esc(q.q).replace(/_{2,}/, '<span class="kq-hueco">___</span>') + "</p>" +
      (q.audio ? '<button class="kq-oir" data-kq="oir">🔊 Escuchar</button>' : "") + '</div><p class="kq-resp" aria-live="polite">' + (J.crono ? "Racha: " + J.racha : "") + "</p></div>" +
      '<div class="kq-ops' + (vf ? " vf" : "") + '">' + q.ops.map(function(o, i){ var c = vf ? (i === 0 ? 3 : 0) : i; return '<button class="kq-op c' + c + '" data-kq="op" data-i="' + i + '"' + (J.juegoYo ? "" : " disabled") + '><i aria-hidden="true">' + FIG[c] + '</i><span lang="fr">' + esc(o) + "</span><em>" + (i + 1) + "</em></button>"; }).join("") + "</div>";
    if (J.crono && !J.relojCrono) arrancaCrono();
  };
  var arrancaCrono = function(){
    J.relojCrono = setInterval(function(){
      if (!J) return;
      if (J.oculto) return;   /* app oculta: el contrarreloj espera */
      J.seg -= .1; var el = capa.querySelector("#kqSeg"); if (el) el.textContent = Math.max(0, Math.ceil(J.seg));
      if (J.seg <= 0) { clearInterval(J.relojCrono); J.relojCrono = null; if (J.fase === "q") fin(); }
    }, 100);
  };
  var responde = function(i){
    if (!J || J.fase !== "q" || J.resp != null || !J.juegoYo) return;
    var ms = Date.now() - J.t0, q = J.qs[J.i];
    J.resp = { i: i, ms: ms };
    capa.querySelectorAll(".kq-op").forEach(function(b){ b.classList.toggle("elegida", +b.dataset.i === i); b.disabled = true; });
    try { G.despiertaAudio && G.despiertaAudio(); } catch (e) {}
    if (J.crono) return revelaCrono(i);
    /* solo contra estudiantes simulados: cuando ya respondiste, los que faltan contestan enseguida (sin esperas muertas) */
    if (!J.net) Object.keys(J.jug).forEach(function(k){ var j = J.jug[k]; if (!j.bot || j.respI != null) return; var extra = 300 + Math.random() * 1200; prog(j, "tBot", function(){ if (!J || J.fase !== "q") return; j.respI = Math.random() < j.skill ? q.ok : (q.ok + 1 + Math.floor(Math.random() * (q.ops.length - 1))) % q.ops.length; j.ms = Math.min(J.T * 1000, ms + extra); marcaRespondieron(); }, extra); });
    if (!J.host && J.net) { J.net.send("a", { i: J.i, op: i, ms: ms }); var r = capa.querySelector(".kq-resp"); if (r) r.textContent = "¡Respuesta enviada! Espera a los demás…"; return; }
    marcaRespondieron();
  };
  var aplicaPuntos = function(j, op, ms){
    var q = J.qs[J.i], ok = op === q.ok;
    j.racha = ok ? (j.racha || 0) + 1 : 0;
    j.delta = puntos(ok, ms, J.T, j.racha); j.pts += j.delta; j.ultOk = ok;
    return ok;
  };
  var aprende = function(q, ok){
    try { if (q.key) { if (ok) G.carnetBien && G.carnetBien(q.key); else G.alCarnet && G.alCarnet(q.key); } } catch (e) {}
    if (ok) { J.correctas++; J.racha++; J.maxRacha = Math.max(J.maxRacha, J.racha); } else J.racha = 0;
  };
  /* revelar (anfitrión o solo) */
  var revela = function(){
    if (!J || J.fase !== "q") return;
    J.fase = "rev"; paraReloj();
    var q = J.qs[J.i], me = yo();
    Object.keys(J.jug).forEach(function(k){
      var j = J.jug[k]; clearTimeout(j.tBot); j.tBotF = null;
      if (j.yo) { var r = J.resp; aprende(q, aplicaPuntos(j, r ? r.i : -1, r ? r.ms : J.T * 1000)); }
      else aplicaPuntos(j, j.respI != null ? j.respI : -1, j.ms || J.T * 1000);
      j.respI = null;
    });
    var tb = tabla();
    if (J.net) J.net.send("rev", { i: J.i, ok: q.ok, why: q.why, bien: q.bien, tabla: tb.map(function(j){ return { id: j.id, nick: j.nick, cat: j.cat, pts: j.pts, delta: j.delta, racha: j.racha, ok: j.ultOk }; }) });
    pintaRevela(q, J.jug[me.id] || null, tb);
  };
  var pintaRevela = function(q, mio, tb){
    var ok = mio ? mio.ultOk : null;
    sfx(ok ? "bien" : ok === false ? "mal" : "tic", ok ? Math.min(10, mio.racha) : 0);
    capa.querySelectorAll(".kq-op").forEach(function(b){ var i = +b.dataset.i; b.classList.add(i === q.ok ? "bien" : "mal"); });
    var hoja = document.createElement("div");
    hoja.className = "kq-feed " + (ok ? "ok" : ok === false ? "ko" : "nn");
    hoja.innerHTML = '<div class="kq-feed-c"><b>' + (ok ? "¡Correcto!" : ok === false ? (J.resp || (mio && mio.delta === 0 && !J.host) ? "Incorrecto" : "¡Se acabó el tiempo!") : "Respuesta") + "</b>" +
      (ok ? '<span class="kq-mas">+' + mio.delta.toLocaleString("es-CO") + "</span>" + (mio.racha > 1 ? '<small class="kq-rach">🔥 Racha de ' + mio.racha + "</small>" : "") : '<p>Era <b lang="fr">' + esc(q.tipo === "vf" ? q.ops[q.ok] + (q.ok === 1 ? " · " + q.bien : "") : q.ops[q.ok]) + "</b></p>") +
      (q.why ? '<div class="kq-why">' + (G.seguro ? G.seguro(q.why) : esc(plano(q.why))) + "</div>" : "") + '<button class="kq-btn" data-kq="tabla">Ver posiciones</button></div>';
    capa.appendChild(hoja);
    J.tablaPend = tb;
    prog(J, "tAuto", function(){ if (J && J.fase === "rev") verTabla(); }, q.why ? 5200 : 3200);
  };
  var verTabla = function(){
    if (!J || J.fase !== "rev") return;
    J.fase = "tabla"; clearTimeout(J.tAuto);
    var tb = J.tablaPend || tabla(), max = Math.max(1, tb[0] ? tb[0].pts : 1), me = yo();
    capa.innerHTML = top(J.pin ? "Sala " + J.pin : "Posiciones") + '<div class="kq-body"><h2 class="kq-h c">Después de la pregunta ' + (J.i + 1) + "</h2>" +
      '<ol class="kq-tabla">' + tb.slice(0, 8).map(function(j, k){ return '<li class="' + (j.id === me.id ? "yo" : "") + '" style="--w:' + Math.max(8, Math.round(j.pts / max * 100)) + "%;--d:" + k * 70 + 'ms"><span class="kq-pos">' + (k + 1) + '</span><span class="kq-av">' + gato(j.cat, k === 0 ? "excited" : "happy") + '</span><span class="kq-nm"><b>' + esc(j.nick) + (j.id === me.id ? " (tú)" : "") + '</b><i></i></span><span class="kq-ps"><b>' + j.pts.toLocaleString("es-CO") + "</b>" + (j.delta ? "<small>+" + j.delta + "</small>" : "") + (j.racha > 1 ? "<em>🔥" + j.racha + "</em>" : "") + "</span></li>"; }).join("") + "</ol>" +
      (J.host ? '<button class="kq-btn wide" data-kq="sig">' + (J.i + 1 >= J.qs.length ? "Ver el podio" : "Siguiente pregunta") + "</button>" : '<p class="kq-esp">Esperando la siguiente pregunta…</p>') + "</div>";
    if (J.host) prog(J, "tAuto", function(){ if (J && J.fase === "tabla") siguiente(); }, J.net ? 6000 : 4200);
  };
  var revelaCrono = function(i){
    var q = J.qs[J.i], ok = i === q.ok, j = J.jug[yo().id];
    aprende(q, ok); j.racha = ok ? j.racha + 1 : 0; j.delta = ok ? 100 + Math.min(400, 50 * (j.racha - 1)) : 0; j.pts += j.delta;
    sfx(ok ? "bien" : "mal", Math.min(10, j.racha));
    capa.querySelectorAll(".kq-op").forEach(function(b){ var k = +b.dataset.i; b.classList.add(k === q.ok ? "bien" : k === i ? "mal" : "atenuada"); });
    var pts = capa.querySelector(".kq-pts"); if (pts) pts.textContent = j.pts.toLocaleString("es-CO");
    if (!ok) J.seg -= 3;   /* un error cuesta 3 segundos */
    var mia = J; prog(J, "tSig", function(){ if (J === mia) siguiente(); }, ok ? 450 : 1100);
  };

  /* ---------------- final, podio y recompensas ---------------- */
  var fin = function(){
    if (!J || J.cerrada) return; J.cerrada = true; J.fase = "fin"; paraReloj(); if (J.relojCrono) clearInterval(J.relojCrono);
    var tb = tabla(), me = yo(), mio = J.jug[me.id], puesto = mio ? tb.indexOf(mio) + 1 : 0, q = Q();
    if (J.host && J.net) J.net.send("fin", { tabla: tb.map(function(j){ return { id: j.id, nick: j.nick, cat: j.cat, pts: j.pts }; }) });
    var antes = PREMIOS.filter(function(p){ return reqOk(p.req); }).map(function(p){ return p.id; });
    if (mio) {
      var n = J.crono ? J.i : J.qs.length;
      J.xp = J.correctas * 5 + (tb.length > 1 ? (puesto === 1 ? 20 : puesto === 2 ? 10 : 0) : 10);
      q.jugadas++; q.correctas += J.correctas; q.mejor = Math.max(q.mejor || 0, mio.pts); q.racha = Math.max(q.racha || 0, J.maxRacha);
      if (tb.length > 1 && puesto === 1) q.victorias++;
      if (!J.crono && J.correctas === n) q.perfectas++;
      try { addXP(J.xp); addAct("Q:" + J.modo); save(true); if (typeof gPush === "function") gPush(true); } catch (e) {}
      if (J.xp) avance = true;
    }
    var nuevos = PREMIOS.filter(function(p){ return reqOk(p.req) && antes.indexOf(p.id) < 0; });
    pintaFin(tb, mio, puesto, nuevos);
  };
  var pintaFin = function(tb, mio, puesto, nuevos){
    var me = yo(), p3 = [tb[1], tb[0], tb[2]];
    sfx(puesto === 1 ? "ya" : "bien", 8);
    capa.innerHTML = top("Resultado") + '<div class="kq-body"><div class="kq-confeti" aria-hidden="true">' + "<i></i>".repeat(24) + "</div>" +
      (tb.length > 1 ? '<div class="kq-podio">' + p3.map(function(j, k){ if (!j) return '<div class="kq-pd vacio"></div>'; var pos = [2, 1, 3][k]; return '<div class="kq-pd p' + pos + (j.id === me.id ? " yo" : "") + '"><span class="kq-av">' + gato(j.cat, pos === 1 ? "excited" : "happy") + "</span><b>" + esc(j.nick) + '</b><small>' + j.pts.toLocaleString("es-CO") + '</small><div class="kq-esc">' + pos + "</div></div>"; }).join("") + "</div>" : '<div class="kq-solo"><span>' + gato(me.cat, "excited") + "</span></div>") +
      (mio ? '<h1 class="kq-fin-h">' + (tb.length > 1 ? (puesto === 1 ? "¡Ganaste!" : "Quedaste " + puesto + "º") : "¡" + mio.pts.toLocaleString("es-CO") + " puntos!") + "</h1>" +
        '<div class="kq-stats"><div><b>' + mio.pts.toLocaleString("es-CO") + "</b><small>puntos</small></div><div><b>" + J.correctas + "/" + (J.crono ? J.i : J.qs.length) + "</b><small>aciertos</small></div><div><b>" + J.maxRacha + "</b><small>mejor racha</small></div><div><b>+" + J.xp + "</b><small>XP</small></div></div>" : '<h1 class="kq-fin-h">Fin de la partida</h1>') +
      (nuevos.length ? '<div class="kq-nuevo"><small>¡Desbloqueaste!</small>' + nuevos.map(function(p){ var a = {}; a[p.slot === "scarf" ? "neck" : p.slot] = p.id; return '<div class="kq-nv"><span>' + gato({ coat: gEnsure().cat.coat, acc: a }, "excited") + "</span><div><b>" + esc(p.n) + '</b><button class="kq-btn sm" data-kq="equipar" data-id="' + p.id + '">Equipar</button></div></div>'; }).join("") + "</div>" : "") +
      '<div class="kq-acc"><button class="kq-btn wide" data-kq="otra">Jugar otra vez</button><button class="kq-btn line wide" data-kq="menu">Volver al menú</button></div></div>';
    J.net && setTimeout(function(){ try { J && J.net && J.net.cerrar(); } catch (e) {} }, 1500);
  };

  /* ---------------- salas en vivo (1v1 y grupal) ---------------- */
  var crearSala = function(modo){
    if (!hayRed()) return aviso(modo === "duelo" ? "Sin conexión: juega contra Manzana." : "Las salas en vivo necesitan internet y tu cuenta.", modo === "duelo" ? "bot" : null);
    var pin = rid(4), me = yo(), juegoYo = true;
    J = { modo: modo, pin: pin, lobby: true, host: true, juegoYo: juegoYo, miembros: [] };
    var net = canal("plx-kq-" + pin, { id: me.id, nick: me.nick, cat: me.cat, host: true }, {
      miembros: function(l){ if (!J || !J.lobby) { if (J && J.jug) l.forEach(function(){}); return; } J.miembros = l.filter(function(m){ return m.id !== me.id; }); pintaSala(); if (modo === "duelo" && J.miembros.length >= 1) setTimeout(function(){ if (J && J.lobby) arrancaSala(); }, 900); },
      msg: function(ev, d, de){ if (!J) return; if (ev === "a" && J.jug && J.jug[de] && J.fase === "q" && d.i === J.i) { J.jug[de].respI = d.op; J.jug[de].ms = d.ms; marcaRespondieron(); } if (ev === "sale" && J.jug && J.jug[de]) J.jug[de].fuera = true; },
      error: function(){ aviso("No pude abrir la sala. Revisa tu conexión."); }
    });
    J.net = net;
    pintaSala();
    if (modo === "duelo") J.tBot = setTimeout(function(){ if (J && J.lobby && !J.miembros.length) { var b = capa.querySelector(".kq-bot"); if (b) b.hidden = false; } }, 20000);
  };
  var pintaSala = function(){
    if (!J || !J.lobby) return;
    var duelo = J.modo === "duelo";
    capa.innerHTML = top(duelo ? "1v1 en vivo" : "Sala grupal") + '<div class="kq-body"><div class="kq-sala"><small>Comparte este PIN</small><div class="kq-pinbig" aria-label="PIN ' + J.pin.split("").join(" ") + '">' + J.pin.split("").map(function(c){ return "<i>" + c + "</i>"; }).join("") + '</div><p>Entran desde <b>Jugar › PLEX Quiz › ¿Tienes un PIN?</b></p></div>' +
      '<h2 class="kq-h">' + (duelo ? "Tu rival" : "Jugadores") + " <small>" + J.miembros.length + (duelo ? "/1" : "") + "</small></h2>" +
      '<div class="kq-jugs">' + (J.miembros.length ? J.miembros.map(function(m){ return '<div class="kq-j"><span>' + gato(m.meta.cat, "happy") + "</span><b>" + esc(m.meta.nick || "Jugador") + "</b></div>"; }).join("") : '<p class="kq-esp">Esperando jugadores…</p>') + "</div>" +
      (duelo ? '<button class="kq-btn line wide kq-bot" data-kq="vsbot" hidden>Nadie entra: jugar contra Manzana</button>' :
        '<label class="kq-sw"><input type="checkbox" id="kqYo" ' + (J.juegoYo ? "checked" : "") + '> <span>Yo también juego (desmarca para solo presentar)</span></label>' +
        '<button class="kq-btn wide" data-kq="empezar"' + (J.miembros.length ? "" : " disabled") + ">Empezar con " + J.miembros.length + " jugador" + (J.miembros.length === 1 ? "" : "es") + "</button>") + "</div>";
  };
  var arrancaSala = function(){
    if (!J || !J.lobby) return;
    var qs = banco(10, "mc"); if (qs.length < 5) return aviso("Hay pocas preguntas para tu curso todavía.");
    var net = J.net, pin = J.pin, modo = J.modo, juegoYo = J.juegoYo, miembros = J.miembros.slice();
    clearTimeout(J.tBot);
    nuevaPartida(modo, qs, { net: net, pin: pin, host: true, juegoYo: juegoYo, rivales: miembros.map(function(m){ return { id: m.id, nick: m.meta.nick || "Jugador", cat: m.meta.cat }; }) });
    net.send("empieza", { n: qs.length, pin: pin });
    cuenta(siguiente);
  };
  var unirme = function(pin){
    pin = String(pin || "").toUpperCase(); if (pin.length !== 4) return aviso("El PIN tiene 4 letras o números.");
    if (!hayRed()) return aviso("Necesitas internet para entrar a una sala.");
    var me = yo();
    abreCapa();
    J = { modo: "invitado", pin: pin, host: false, juegoYo: true, esperando: true, jug: {}, qs: [] };
    capa.innerHTML = top("Sala " + pin) + '<div class="kq-body"><div class="kq-sala"><span class="kq-av grande">' + gato(me.cat, "excited") + '</span><h2>¡Estás dentro!</h2><p>Espera a que el anfitrión empiece. Mira la pantalla y responde rápido.</p><div class="kq-dots"><i></i><i></i><i></i></div></div></div>';
    var net = canal("plx-kq-" + pin, { id: me.id, nick: me.nick, cat: me.cat }, {
      msg: function(ev, d){
        if (!J) return;
        if (ev === "empieza") { J.qs = new Array(d.n); J.n = d.n; capa.innerHTML = '<div class="kq-cuenta"><b>¡Ya!</b><small>' + d.n + " preguntas</small></div>"; }
        if (ev === "q") { J.i = d.i; J.qs[d.i] = { tipo: d.tipo, ask: d.ask, q: d.q, ops: d.ops, audio: d.audio }; J.T = d.T; J.fase = "q"; J.resp = null; J.t0 = Date.now(); J.jug[me.id] = J.jug[me.id] || { id: me.id, nick: me.nick, cat: me.cat, pts: 0, racha: 0, yo: true }; pintaPregunta(); arrancaTiempo(); if (d.audio) { try { speak(d.audio); } catch (e) {} } }
        if (ev === "rev") {
          paraReloj(); J.fase = "rev";
          var q = J.qs[d.i] || {}; q.ok = d.ok; q.why = d.why; q.bien = d.bien;
          var mio = (d.tabla || []).filter(function(j){ return j.id === me.id; })[0];
          if (mio) { J.jug[me.id] = Object.assign(J.jug[me.id] || {}, mio, { yo: true, ultOk: mio.ok }); }
          d.tabla.forEach(function(j){ if (j.id !== me.id) J.jug[j.id] = j; });
          if (mio && q.key == null) aprendeInvitado(mio.ok);
          J.tablaPend = d.tabla; pintaRevela(q, J.jug[me.id], d.tabla);
        }
        if (ev === "fin") { (d.tabla || []).forEach(function(j){ J.jug[j.id] = Object.assign(J.jug[j.id] || {}, j, j.id === me.id ? { yo: true } : {}); }); J.correctas = J.correctas || 0; J.maxRacha = J.maxRacha || 0; J.crono = false; J.qs.length = J.n || J.qs.length; finInvitado(); }
        if (ev === "sale") { /* el anfitrión se fue */ if (d && J && J.fase !== "fin") { /* solo si quien sale es el anfitrión */ } }
      },
      error: function(){ aviso("No pude entrar a la sala. Revisa el PIN y tu conexión."); }
    });
    J.net = net;
  };
  var aprendeInvitado = function(ok){ J.correctas = (J.correctas || 0) + (ok ? 1 : 0); J.rachaYo = ok ? (J.rachaYo || 0) + 1 : 0; J.maxRacha = Math.max(J.maxRacha || 0, J.rachaYo); };
  var finInvitado = function(){ J.host = false; J.cerrada = false; fin(); };

  /* ---------------- avisos, eventos ---------------- */
  var aviso = function(txt, accion){
    abreCapa();
    capa.innerHTML = top("PLEX Quiz") + '<div class="kq-body"><div class="kq-sala"><span class="kq-av grande">' + gato(gEnsure().cat, "curious") + "</span><p>" + esc(txt) + "</p>" + (accion === "bot" ? '<button class="kq-btn wide" data-kq="vsbot">Jugar contra Manzana</button>' : "") + '<button class="kq-btn line wide" data-kq="menu">Volver</button></div></div>';
  };
  var vsBot = function(){
    if (J && J.net) { try { J.net.cerrar(); } catch (e) {} }
    var qs = banco(10, "mc"); if (qs.length < 5) return aviso("Hay pocas preguntas para tu curso todavía.");
    nuevaPartida("duelo", qs, { rivales: [{ id: "manzana", nick: "Manzana", cat: { coat: "manzana", acc: { hat: "boina", neck: "marino" } }, bot: true, skill: .7 }] });
    cuenta(siguiente);
  };
  var alClic = function(e){
    var b = e.target && e.target.closest && e.target.closest("[data-kq]"); if (!b || b.disabled) return;   /* Escape en una pantalla sin botón de salir llega sin target */
    e.preventDefault(); e.stopPropagation();
    var a = b.dataset.kq;
    if (a === "salir") { if (J && J.fase && J.fase !== "fin" && !J.lobby && !confirm("¿Salir de la partida?")) return; return cierra(); }
    if (a === "menu") { if (J && J.net) { try { J.net.cerrar(); } catch (x) {} } return menu(); }
    if (a === "modo") { var m = b.dataset.m; if (m === "duelo" || m === "grupo") return crearSala(m); return empiezaSolo(m); }
    if (a === "unirme") return unirme((capa.querySelector("#kqPin") || {}).value);
    if (a === "op") return responde(+b.dataset.i);
    if (a === "oir") { var q = J && J.qs[J.i]; if (q && q.audio) { try { speak(q.audio); } catch (x) {} } return; }
    if (a === "tabla") return verTabla();
    if (a === "sig") { clearTimeout(J.tAuto); return siguiente(); }
    if (a === "empezar") { var yoCb = capa.querySelector("#kqYo"); J.juegoYo = !yoCb || yoCb.checked; return arrancaSala(); }
    if (a === "vsbot") return vsBot();
    if (a === "otra") { var md = J ? J.modo : "clasico"; if (md === "invitado" || md === "grupo" || md === "duelo") return menu(); return empiezaSolo(md); }
    if (a === "equipar") { var p = PREMIOS.filter(function(x){ return x.id === b.dataset.id; })[0]; if (p) { var g = gEnsure(); if (p.slot === "scarf") g.cat.acc.neck = p.id; else g.cat.acc[p.slot] = p.id; save(true); try { pcIndexSync(); gPush(true); } catch (x) {} b.textContent = "¡Puesto!"; b.disabled = true; } return; }
  };
  var alTecla = function(e){
    e.stopPropagation();
    if (e.key === "Escape") return alClic({ target: capa.querySelector("[data-kq=salir]"), preventDefault: function(){}, stopPropagation: function(){} });
    if (J && J.fase === "q" && /^[1-4]$/.test(e.key)) { var b = capa.querySelectorAll(".kq-op")[+e.key - 1]; if (b) b.click(); }
    if (J && J.fase === "q" && J.qs[J.i] && J.qs[J.i].tipo === "vf" && /^[vf]$/i.test(e.key)) responde(e.key.toLowerCase() === "v" ? 0 : 1);
    if (e.key === "Enter" && e.target.id === "kqPin") unirme(e.target.value);
  };

  /* ---------------- recompensas: accesorios del gato ---------------- */
  var PREMIOS = [
    { id: "insigniaQuiz", slot: "medal", n: "Insignia Quiz", req: { quiz: "jugadas", n: 3 } },
    { id: "gorraQuiz", slot: "hat", n: "Gorra de capitán", req: { quiz: "victorias", n: 5 } },
    { id: "auraQuiz", slot: "aura", n: "Aura arcoíris", req: { quiz: "racha", n: 10 } },
    { id: "quiz", slot: "scarf", n: "Bufanda morada Quiz", req: { quiz: "perfectas", n: 1 } }
  ];
  try {
    PREMIOS.forEach(function(p){ if (p.slot !== "scarf" && !GITEMS.some(function(x){ return x.id === p.id; })) GITEMS.push({ id: p.id, slot: p.slot, n: p.n, req: p.req }); });
    if (typeof SCARVES !== "undefined") SCARVES.quiz = "#7C3AED";
    if (typeof GSCARF !== "undefined" && !GSCARF.some(function(x){ return x[0] === "quiz"; })) GSCARF.splice(Math.max(0, GSCARF.length - 1), 0, ["quiz", "Morada Quiz", { quiz: "perfectas", n: 1 }]);
    var roO = reqOk; reqOk = function(r, f){ if (r && r.quiz) return (Q()[r.quiz] || 0) >= r.n; return roO(r, f); };
    var rtO = reqTxt; reqTxt = function(r){ if (r && r.quiz) return { jugadas: r.n + " partidas de Quiz", victorias: r.n + " victorias en Quiz", racha: "Racha de " + r.n + " en Quiz", perfectas: "Un Quiz perfecto" }[r.quiz] || ""; return rtO(r); };
    var auraN = 0, csO = catSVG; catSVG = function(g, o){
      var out = csO(g, o), a = (g && g.acc) || {}, x = "";
      /* el aura va detrás del gato y con un id propio por dibujo (un id repetido deja de pintarse si la primera copia está oculta) */
      if (a.aura === "auraQuiz") { var gid = "kqArco" + (++auraN); var au = '<defs><linearGradient id="' + gid + '" x1="0" x2="1"><stop offset="0" stop-color="#E5484D"/><stop offset=".33" stop-color="#F5A524"/><stop offset=".66" stop-color="#16A34A"/><stop offset="1" stop-color="#1E4FD6"/></linearGradient></defs><g opacity=".9"><circle cx="100" cy="108" r="90" fill="none" stroke="url(#' + gid + ')" stroke-width="7" stroke-dasharray="4 10" stroke-linecap="round"/></g>'; var ab = out.indexOf(">"); if (ab > 0) out = out.slice(0, ab + 1) + au + out.slice(ab + 1); }
      if (a.hat === "gorraQuiz") x += '<path d="M52 76 Q58 42 100 38 Q142 42 148 76 Z" fill="#1E4FD6" stroke="#0B2D74" stroke-width="2.5"/><path d="M48 76 Q100 66 168 82 Q150 92 100 84 Q66 82 48 76Z" fill="#0B2D74"/><path d="M92 52 l8 -9 8 9 -8 9z" fill="#FFD200" stroke="#B38F00" stroke-width="1.5"/>';
      if (a.medal === "insigniaQuiz") x += '<path d="M86 134 L100 160 L114 134 Z" fill="#8B5CF6"/><circle cx="100" cy="168" r="14" fill="#fff" stroke="#0B2D74" stroke-width="2.5"/><path d="M93 172 l4 -7 4 7z" fill="#E5484D"/><path d="M104 165 l3 3 -3 3 -3 -3z" fill="#1E4FD6"/><circle cx="96" cy="164" r="2.2" fill="#F5A524"/><rect x="102" y="170" width="4.5" height="4.5" fill="#16A34A"/>';
      if (!x) return out; var k = out.lastIndexOf("</svg>"); return k < 0 ? out : out.slice(0, k) + x + out.slice(k);
    };
  } catch (e) {}

  /* tarjeta de entrada (Jugar › Juegos) */
  var tarjeta = function(){
    return '<button class="jx-kq" data-kq-abrir="1"><span class="jx-kq-fig" aria-hidden="true">' + FIG.map(function(f, i){ return '<i class="c' + i + '">' + f + "</i>"; }).join("") + '</span><span class="jx-kq-tx"><small>Nuevo · en vivo</small><b>PLEX Quiz</b><span>Quiz, verdadero o falso, contrarreloj, 1v1 y salas con tu clase</span></span><em>Jugar</em></button>';
  };
  document.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-kq-abrir]"); if (!b) return; e.preventDefault(); e.stopPropagation(); menu(); }, true);
  window.PLX_KQ = { abrir: menu, tarjeta: tarjeta, banco: banco, unirme: unirme, estado: function(){ return J; }, premios: PREMIOS, _canal: canal, _puntos: puntos };

  var css = document.createElement("style"); css.id = "plx84";
  css.textContent = [
    ".kq{position:fixed;inset:0;z-index:440;display:flex;flex-direction:column;color:#fff;font-family:Inter,system-ui,sans-serif;background:radial-gradient(120% 60% at 50% -10%,#3B2F96 0%,transparent 60%),radial-gradient(90% 60% at 100% 110%,#1E4FD6 0%,transparent 60%),#0B1440}",
    ".kq[hidden]{display:none}",
    ".kq-top{display:flex;align-items:center;gap:10px;padding:max(12px,env(safe-area-inset-top)) 16px 8px;max-width:760px;width:100%;margin:0 auto;box-sizing:border-box}.kq-top b{font-family:Poppins,system-ui,sans-serif;font-weight:800}.kq-top > :last-child{margin-left:auto}",
    ".kq-x{all:unset;cursor:pointer;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:rgba(255,255,255,.1)}",
    ".kq-pts{font-family:Poppins,system-ui,sans-serif;font-weight:800;color:#FFD200;background:rgba(255,255,255,.1);padding:6px 12px;border-radius:99px}",
    ".kq-body{flex:1;overflow-y:auto;padding:6px 16px calc(24px + env(safe-area-inset-bottom));max-width:760px;width:100%;margin:0 auto;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr);gap:14px;align-content:start}.kq-body > *{min-width:0}",
    ".kq-btn{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:16px;background:#FFD200;color:#0B2D74;font-family:Poppins,system-ui,sans-serif;font-weight:800;box-shadow:0 4px 0 #B38F00;transition:transform .12s}",
    ".kq-btn:active{transform:translateY(3px);box-shadow:0 1px 0 #B38F00}.kq-btn.wide{width:100%}.kq-btn.sm{min-height:40px;padding:0 16px}.kq-btn.line{background:rgba(255,255,255,.1);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)}.kq-btn[disabled]{opacity:.45}",
    /* menú */
    ".kq-hero{text-align:center;padding:10px 0 4px}.kq-hero h1{margin:8px 0 6px;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:2.2rem;letter-spacing:-.02em}.kq-hero p{margin:0 auto;max-width:420px;color:rgba(255,255,255,.8);line-height:1.45}",
    ".kq-hero-fig,.jx-kq-fig{display:inline-grid;grid-template-columns:repeat(2,38px);gap:6px}.kq-hero-fig i,.jx-kq-fig i{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;animation:kqfig 2.4s ease-in-out infinite}",
    ".kq-hero-fig i:nth-child(2),.jx-kq-fig i:nth-child(2){animation-delay:.2s}.kq-hero-fig i:nth-child(3),.jx-kq-fig i:nth-child(3){animation-delay:.4s}.kq-hero-fig i:nth-child(4),.jx-kq-fig i:nth-child(4){animation-delay:.6s}",
    "@keyframes kqfig{0%,100%{transform:none}50%{transform:translateY(-4px) rotate(-4deg)}}",
    ".kq i svg,.jx-kq i svg{width:20px;height:20px;fill:#fff}.c0{background:#E5484D}.c1{background:#1E4FD6}.c2{background:#F5A524}.c3{background:#16A34A}",
    /* los botones de respuesta llevan all:unset: su color va con más especificidad */
    ".kq-op.c0{background:#E5484D}.kq-op.c1{background:#1E4FD6}.kq-op.c2{background:#E8961A}.kq-op.c3{background:#16A34A}",
    ".kq-modos{display:grid;gap:10px}",
    ".kq-modo{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:1fr auto;align-items:center;padding:14px 16px;border-radius:18px;background:linear-gradient(120deg,color-mix(in srgb,var(--c) 75%,#0B1440),color-mix(in srgb,var(--c) 40%,#0B1440));box-shadow:0 10px 24px -14px var(--c),inset 0 0 0 1px rgba(255,255,255,.12);transition:transform .12s}",
    ".kq-modo:active{transform:scale(.98)}.kq-modo b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.08rem}.kq-modo small{grid-column:1;color:rgba(255,255,255,.82);font-size:.84rem}.kq-modo i{grid-row:1/3;grid-column:2;font-style:normal;font-size:1.6rem;opacity:.8}",
    ".kq-pin{display:grid;gap:8px;padding:14px;border-radius:18px;background:rgba(255,255,255,.07);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}.kq-pin label{font-weight:700}.kq-pin > div{display:flex;gap:8px;min-width:0}",
    ".kq-pin input{flex:1;min-width:0;width:0;border:0;border-radius:14px;padding:0 14px;min-height:46px;font:800 1.3rem Poppins,system-ui,sans-serif;letter-spacing:.3em;text-transform:uppercase;background:#fff;color:#0B1440}",
    ".kq-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.kq-stats > div{text-align:center;padding:10px 4px;border-radius:14px;background:rgba(255,255,255,.08)}.kq-stats b{display:block;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.05rem}.kq-stats small{color:rgba(255,255,255,.7);font-size:.72rem}",
    ".kq-h{margin:4px 0 0;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.1rem}.kq-h small{color:rgba(255,255,255,.65);font-weight:600;font-size:.82rem;margin-left:6px}.kq-h.c{text-align:center}",
    ".kq-prem{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.kq-pr{display:grid;justify-items:center;text-align:center;gap:2px;padding:8px 4px;border-radius:16px;background:rgba(255,255,255,.06);opacity:.6}.kq-pr.ok{opacity:1;background:rgba(255,210,0,.14);box-shadow:inset 0 0 0 1px rgba(255,210,0,.4)}",
    ".kq-pr span svg{width:64px;height:64px}.kq-pr b{font-size:.72rem;line-height:1.2}.kq-pr small{font-size:.64rem;color:rgba(255,255,255,.7)}",
    /* cuenta */
    ".kq-cuenta{flex:1;display:grid;place-content:center;justify-items:center;gap:8px}.kq-cuenta b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:7rem;line-height:1}.kq-cuenta b.z{animation:kqz .6s cubic-bezier(.34,1.56,.64,1)}@keyframes kqz{from{transform:scale(1.6);opacity:0}to{transform:none;opacity:1}}.kq-cuenta small{opacity:.75;font-weight:700}",
    /* pregunta */
    ".kq-q{flex:1;display:grid;align-content:center;justify-items:center;gap:12px;padding:4px 16px;max-width:760px;width:100%;margin:0 auto;box-sizing:border-box}",
    ".kq-ring{position:relative;width:74px;height:74px}.kq-ring i{position:absolute;inset:0;border-radius:50%;background:conic-gradient(#FFD200 calc(var(--p) * 360deg),rgba(255,255,255,.14) 0);-webkit-mask:radial-gradient(circle,transparent 58%,#000 60%);mask:radial-gradient(circle,transparent 58%,#000 60%)}",
    ".kq-ring b{position:absolute;inset:0;display:grid;place-items:center;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.6rem}",
    ".kq-crono{display:grid;justify-items:center}.kq-crono b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:2.4rem;color:#FFD200}.kq-crono small{opacity:.7}",
    ".kq-card{width:100%;box-sizing:border-box;text-align:center;background:#fff;color:#0E1A3A;border-radius:22px;padding:18px 16px;box-shadow:0 20px 40px -20px rgba(0,0,0,.6)}.kq-card small{display:block;color:#66738F;font-weight:700;margin-bottom:6px}",
    ".kq-card p{margin:0;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:clamp(1.2rem,5vw,1.6rem);line-height:1.3}.kq-hueco{color:#1E4FD6}",
    ".kq-oir{all:unset;cursor:pointer;margin-top:10px;display:inline-flex;padding:6px 14px;border-radius:99px;background:#E8EEFF;color:#1E4FD6;font-weight:800;font-size:.86rem}",
    ".kq-resp{margin:0;min-height:1.2em;color:rgba(255,255,255,.75);font-weight:700;font-size:.88rem}",
    ".kq-ops{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 12px calc(14px + env(safe-area-inset-bottom));max-width:760px;width:100%;margin:0 auto;box-sizing:border-box}",
    ".kq-op{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;align-items:center;gap:10px;min-height:86px;padding:12px;border-radius:18px;color:#fff;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.02rem;line-height:1.2;box-shadow:0 5px 0 rgba(0,0,0,.28);transition:transform .12s,opacity .3s,filter .3s}",
    ".kq-op:active{transform:translateY(3px);box-shadow:0 2px 0 rgba(0,0,0,.28)}.kq-op i{flex:none;width:30px;height:30px;display:grid;place-items:center}.kq-op i svg{width:24px;height:24px}.kq-op em{position:absolute;top:6px;right:9px;font-style:normal;font-size:.7rem;opacity:.6}",
    ".kq-ops.vf .kq-op{min-height:110px;justify-content:center;font-size:1.25rem}",
    ".kq-op.elegida{box-shadow:0 0 0 4px #fff,0 5px 0 rgba(0,0,0,.28)}.kq-op[disabled]{cursor:default}.kq-op.mal,.kq-op.atenuada{opacity:.35;filter:saturate(.4)}.kq-op.bien{box-shadow:0 0 0 4px #fff,0 0 30px rgba(255,255,255,.5);transform:scale(1.02)}",
    /* respuesta */
    ".kq-feed{position:fixed;inset:auto 0 0;z-index:3;padding:0 12px calc(12px + env(safe-area-inset-bottom));animation:kqsube .4s cubic-bezier(.22,1,.36,1)}@keyframes kqsube{from{transform:translateY(100%)}to{transform:none}}",
    ".kq-feed-c{max-width:640px;margin:0 auto;border-radius:24px;padding:18px;display:grid;gap:8px;box-shadow:0 -10px 40px rgba(0,0,0,.4)}.kq-feed.ok .kq-feed-c{background:#16A34A}.kq-feed.ko .kq-feed-c{background:#E5484D}.kq-feed.nn .kq-feed-c{background:#1E4FD6}",
    ".kq-feed-c > b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.5rem}.kq-mas{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:2rem;color:#FFD200}.kq-rach{font-weight:800}.kq-feed-c p{margin:0;font-size:1rem}",
    ".kq-why{background:rgba(0,0,0,.18);border-radius:14px;padding:10px 12px;font-size:.9rem;line-height:1.45}.kq-feed .kq-btn{background:#fff;color:#0B1440;box-shadow:0 4px 0 rgba(0,0,0,.2)}",
    /* tabla */
    ".kq-tabla{list-style:none;margin:0;padding:0;display:grid;gap:8px}",
    ".kq-tabla li{position:relative;display:grid;grid-template-columns:30px 46px minmax(0,1fr) auto;align-items:center;gap:10px;padding:8px 12px;border-radius:16px;background:rgba(255,255,255,.08);overflow:hidden;animation:kqfila .5s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d)}",
    "@keyframes kqfila{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:none}}",
    ".kq-tabla li.yo{background:rgba(255,210,0,.18);box-shadow:inset 0 0 0 2px #FFD200}.kq-pos{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.1rem;text-align:center}",
    ".kq-av svg{width:46px;height:46px}.kq-av.grande svg{width:120px;height:120px}.kq-nm{min-width:0;display:grid;gap:4px}.kq-nm b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    ".kq-nm i{display:block;height:6px;border-radius:99px;background:rgba(255,255,255,.12);position:relative;overflow:hidden}.kq-nm i::after{content:'';position:absolute;inset:0;width:var(--w);background:linear-gradient(90deg,#1E4FD6,#8B5CF6);border-radius:99px;animation:kqbar .8s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--d)}@keyframes kqbar{from{width:0}}",
    ".kq-ps{text-align:right;display:grid}.kq-ps b{font-family:Poppins,system-ui,sans-serif;font-weight:800}.kq-ps small{color:#86EFAC;font-weight:800;font-size:.75rem}.kq-ps em{font-style:normal;font-size:.75rem}",
    ".kq-esp{text-align:center;color:rgba(255,255,255,.75)}",
    /* sala */
    ".kq-sala{display:grid;justify-items:center;text-align:center;gap:8px;padding:16px;border-radius:22px;background:rgba(255,255,255,.07)}.kq-sala small{font-weight:700;opacity:.75}.kq-sala p{margin:0;color:rgba(255,255,255,.85)}.kq-sala h2{margin:0;font-family:Poppins,system-ui,sans-serif}",
    ".kq-pinbig{display:flex;gap:8px}.kq-pinbig i{font-style:normal;width:58px;height:70px;border-radius:16px;background:#fff;color:#0B1440;display:grid;place-items:center;font:800 2.2rem Poppins,system-ui,sans-serif;box-shadow:0 5px 0 rgba(0,0,0,.25)}",
    ".kq-jugs{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:8px}.kq-j{display:grid;justify-items:center;gap:2px;padding:8px;border-radius:16px;background:rgba(255,255,255,.08);animation:kqfila .4s both}.kq-j svg{width:56px;height:56px}.kq-j b{font-size:.8rem;overflow:hidden;text-overflow:ellipsis;max-width:100%;white-space:nowrap}",
    ".kq-sw{display:flex;gap:10px;align-items:center;font-size:.9rem;color:rgba(255,255,255,.85)}.kq-sw input{width:20px;height:20px}",
    ".kq-dots{display:flex;gap:8px}.kq-dots i{width:10px;height:10px;border-radius:50%;background:#FFD200;animation:dg2b 1s infinite}.kq-dots i:nth-child(2){animation-delay:.15s}.kq-dots i:nth-child(3){animation-delay:.3s}",
    /* final */
    ".kq-podio{display:grid;grid-template-columns:repeat(3,1fr);align-items:end;gap:8px;margin-top:10px}.kq-pd{display:grid;justify-items:center;gap:2px;text-align:center}.kq-pd.vacio{visibility:hidden}",
    ".kq-pd .kq-av svg{width:64px;height:64px}.kq-pd.p1 .kq-av svg{width:84px;height:84px}.kq-pd b{font-size:.85rem;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.kq-pd small{opacity:.8;font-weight:700;font-size:.78rem}",
    ".kq-esc{width:100%;border-radius:14px 14px 0 0;display:grid;place-items:center;font:800 1.8rem Poppins,system-ui,sans-serif;animation:kqesc .7s cubic-bezier(.34,1.56,.64,1) both}.kq-pd.p1 .kq-esc{height:110px;background:linear-gradient(#FFD200,#F5A524);color:#0B1440;animation-delay:.4s}.kq-pd.p2 .kq-esc{height:80px;background:linear-gradient(#CBD5E1,#94A3B8);color:#0B1440;animation-delay:.2s}.kq-pd.p3 .kq-esc{height:60px;background:linear-gradient(#F59E0B,#B45309)}",
    "@keyframes kqesc{from{transform:scaleY(0);transform-origin:bottom}to{transform:none}}.kq-pd.yo b{color:#FFD200}",
    ".kq-solo{display:grid;justify-items:center}.kq-solo svg{width:130px;height:130px}.kq-fin-h{margin:4px 0 0;text-align:center;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:2rem}",
    ".kq-nuevo{display:grid;gap:8px;padding:14px;border-radius:20px;background:rgba(255,210,0,.15);box-shadow:inset 0 0 0 2px #FFD200;animation:kqfila .6s both}.kq-nuevo > small{font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#FFD200}",
    ".kq-nv{display:flex;align-items:center;gap:12px}.kq-nv svg{width:72px;height:72px}.kq-nv b{display:block;margin-bottom:6px}.kq-acc{display:grid;gap:8px}",
    ".kq-confeti{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}.kq-confeti i{position:absolute;top:-20px;width:9px;height:14px;border-radius:2px;animation:kqconf 2.8s linear forwards}",
    ".kq-confeti i:nth-child(4n){background:#E5484D}.kq-confeti i:nth-child(4n+1){background:#1E4FD6}.kq-confeti i:nth-child(4n+2){background:#F5A524}.kq-confeti i:nth-child(4n+3){background:#16A34A}",
    Array.apply(null, Array(24)).map(function(_, i){ return ".kq-confeti i:nth-child(" + (i + 1) + "){left:" + ((i * 41) % 100) + "%;animation-delay:" + ((i * 0.09) % 1.1).toFixed(2) + "s;transform:rotate(" + (i * 37) + "deg)}"; }).join(""),
    "@keyframes kqconf{to{transform:translateY(110vh) rotate(540deg)}}",
    ".kq-body > :not(.kq-confeti){position:relative;z-index:1}",
    /* tarjeta en Jugar */
    ".jx-kq{all:unset;box-sizing:border-box;cursor:pointer;position:relative;overflow:hidden;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:14px;padding:16px;border-radius:var(--v4-r-xl,26px);color:#fff;background:radial-gradient(120% 90% at 0% 0%,#3B2F96,transparent 60%),linear-gradient(135deg,#1E1B6B,#0B1440);box-shadow:0 22px 44px -22px rgba(59,47,150,.9);transition:transform .12s}",
    ".jx-kq:active{transform:scale(.98)}.jx-kq-tx{display:grid;gap:2px}.jx-kq-tx small{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.68rem;color:#FFD200}.jx-kq-tx b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.4rem}.jx-kq-tx span{font-size:.84rem;opacity:.85;line-height:1.35}",
    ".jx-kq em{grid-column:1/-1;justify-self:start;font-style:normal;background:#FFD200;color:#0B2D74;font-family:Poppins,system-ui,sans-serif;font-weight:800;padding:9px 20px;border-radius:99px;box-shadow:0 3px 0 #B38F00}",
    "@media (prefers-reduced-motion:reduce){.kq *{animation:none!important}}"
  ].join("\n");
  document.head.appendChild(css);
})();
