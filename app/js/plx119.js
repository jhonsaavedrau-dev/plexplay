/* PLEX PLAY 4.49 — PLEX 1V1 con modos: ruleta, 9 juegos de duelo, reacciones, pregunta de oro, al mejor de 3 y modo del día
   Pedido de Jhon (15-oct-2026): «que el 1v1 sea más divertido, con más juegos». Decidido con él: una sola cola (para que
   siempre haya rival) y una ruleta que elige entre los modos que marcaron los dos; un solo rango de copas; partidas de
   60–90 s; reacciones con stickers de Manzana 2D; empate → pregunta de oro; serie al mejor de 3; modo del día (+50 %).
   Fuera por ahora: duelos asíncronos y PLEX ROYALE.

   Cómo encaja con plx22 (el motor del 1V1): plx22 sigue llevando la sala (Supabase Realtime o el bot), la cuenta atrás,
   el marcador, el resultado y las copas, y llama a window.PLX1V1X:
   - prepara(S0) → {modo, qs, datos, oro, serie, rms, ruleta}  (solo el anfitrión; el contenido sale con semilla y viaja
     en el «start», así los dos juegan exactamente lo mismo)
   - modos «de rondas» (clásico con comodines, escucha, apuestas): usan el reloj de plx22; aquí solo ajusta() los puntos y
     trasPintar() retoca la pantalla.
   - modos «propios» (tira, bomba, touché, tecleo, ordena, memoria): monta() + arranca(); los mensajes van por el evento
     «m» (red). Quien decide lo que no puede discutirse es el ANFITRIÓN (quién acertó primero, cuándo termina): así los dos
     ven siempre el mismo final. En la bomba y la memoria solo actúa quien tiene el turno, y su palabra vale.
   - El bot (Manzana) manda los MISMOS mensajes que un rival real, por recibe(): jugar contra él prueba el mismo código.
   Contenido: clásico y apuestas usan las preguntas de las lecciones; los demás, vocab.js (palabra, traducción, ejemplo y
   su audio). Prueba: herramientas/pruebas/v1-modos.mjs (cada modo contra Manzana) y v1-modos-red.mjs (dos navegadores). */
(function(){
  "use strict";
  if (!window.PLX1V1 || !PLX1V1.api) return;
  var D = document, A = PLX1V1.api, IMG = "img/m2d/", K = window.PLX_KIT;
  var esc = A.esc, sfx = A.sfx;
  var q = function(s, r){ return (r || D).querySelector(s); };
  var qa = function(s, r){ return [].slice.call((r || D).querySelectorAll(s)); };
  var ahora = function(){ return Date.now(); };
  var G = function(){ return gEnsure(); };
  var quieto = function(){ try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  var fx = function(){ return window.PLX_FX || { chispas: function(){}, tajo: function(){}, confeti: function(){}, sacude: function(){} }; };
  var centro = function(el){ if (!el) return { x: innerWidth / 2, y: innerHeight / 2 }; var r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
  var btn = function(html, o){ return K ? K.btn(html, o) : '<button class="pz-btn">' + html + "</button>"; };

  /* ================================================================== modos */
  var MODOS = [
    { id: "clasico", img: "campeon", n: "Clásico", ic: "⚔️", d: "6 preguntas y comodines", rondas: true },
    { id: "tira", img: "correr", n: "Tira y afloja", ic: "🪢", d: "Cada acierto tira de la cuerda" },
    { id: "bomba", img: "sorpresa", n: "Bomba", ic: "💣", d: "Acierta y pásale la bomba" },
    { id: "touche", img: "en_guardia", n: "Touché", ic: "🤺", d: "Ataca primero, para a tiempo" },
    { id: "tecleo", img: "laptop", n: "Carrera de tecleo", ic: "⌨️", d: "Escribe la frase antes" },
    { id: "ordena", img: "pensativo", n: "Ordena la frase", ic: "🧩", d: "Arma la frase primero" },
    { id: "escucha", img: "audifonos", n: "Escucha rápida", ic: "🎧", d: "Oye y responde", rondas: true },
    { id: "memoria", img: "lista", n: "Memoria", ic: "🃏", d: "Parejas por turnos" },
    { id: "apuesta", img: "estrella", n: "Apuestas", ic: "🎲", d: "Apuesta antes de ver las opciones", rondas: true }
  ];
  var modo = function(id){ return MODOS.filter(function(m){ return m.id === id; })[0] || MODOS[0]; };
  /* 4.50: cada modo tiene su ícono de línea (el mismo trazo que los íconos de la app); las poses de Manzana quedan para
     los momentos grandes (presentación, golpes, final) */
  var SVG = function(p){ return '<svg class="v3-ico" viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>"; };
  var ICONOS = {
    clasico: SVG('<path d="M4 4l9 9M20 4l-9 9M3 17l4 4M17 21l4-4M6 14l4 4M14 18l4-4"/>'),
    tira: SVG('<path d="M2 12h20M6 8l-4 4 4 4M18 8l4 4-4 4"/><circle class="v3-ico-f" cx="12" cy="12" r="2.2"/>'),
    bomba: SVG('<circle cx="10" cy="14" r="7"/><path d="M15 9l3-3M19.5 2.5v2M21.5 4.5h-2M20.8 3.2l-1.3 1.3"/>'),
    touche: SVG('<path d="M3 21L17 7M15 5l4 4M17 7l3.5-3.5M5 15l4 4"/>'),
    tecleo: SVG('<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>'),
    ordena: SVG('<rect x="3" y="3.5" width="10" height="5" rx="1.2"/><rect x="7" y="9.5" width="10" height="5" rx="1.2"/><rect x="11" y="15.5" width="10" height="5" rx="1.2"/>'),
    escucha: SVG('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/>'),
    memoria: SVG('<rect x="3" y="5" width="11" height="15" rx="2"/><path d="M10.5 4.6l6.6-1.5a2 2 0 0 1 2.4 1.5l2.5 11.2a2 2 0 0 1-1.5 2.4l-5.5 1.3"/>'),
    apuesta: SVG('<rect x="3" y="3" width="18" height="18" rx="4"/><circle class="v3-ico-f" cx="8" cy="8" r="1.3"/><circle class="v3-ico-f" cx="16" cy="16" r="1.3"/><circle class="v3-ico-f" cx="12" cy="12" r="1.3"/><circle class="v3-ico-f" cx="16" cy="8" r="1.3"/><circle class="v3-ico-f" cx="8" cy="16" r="1.3"/>')
  };
  var ico = function(id){ return ICONOS[id] || ICONOS.clasico; };
  var diaN = function(){ return Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5); };
  var delDia = function(){ return MODOS[diaN() % MODOS.length].id; };
  var marcados = function(){ var m = G().v1modos; if (!Array.isArray(m) || !m.length) m = MODOS.map(function(x){ return x.id; }); return m.filter(function(id){ return MODOS.some(function(x){ return x.id === id; }); }); };
  var quiereSerie = function(){ return !!G().v1serie; };

  /* ================================================================== contenido (con semilla) */
  var vocab = function(bucket){
    var cargar = window.PLXG && PLXG.vocab ? PLXG.vocab() : Promise.resolve(window.__VOCAB || {});
    return cargar.then(function(V){
      var out = [];
      A.tracks(bucket).forEach(function(tr){ ((V[tr] || {}).themes || []).forEach(function(t){ (t.i || []).forEach(function(w){ if (w.fr && w.es) out.push(w); }); }); });
      return out;
    }, function(){ return []; });
  };
  var corto = function(es){ return String(es).split(/[,;(]/)[0].trim(); };
  /* pregunta rápida: «fr» → 3 traducciones */
  var rapida = function(w, todas, rnd){
    var malas = A.shuf(todas.filter(function(x){ return corto(x.es) !== corto(w.es); }), rnd).slice(0, 2).map(function(x){ return corto(x.es); });
    var o = A.shuf([corto(w.es)].concat(malas), rnd);
    return { q: w.fr, o: o, a: o.indexOf(corto(w.es)) };
  };
  /* verdadero o falso: «fr» = traducción (la buena o una mala) */
  var vf = function(w, todas, rnd){
    var v = rnd() < .5, otra = A.shuf(todas.filter(function(x){ return corto(x.es) !== corto(w.es); }), rnd)[0];
    return { q: w.fr, es: v || !otra ? corto(w.es) : corto(otra.es), v: v || !otra };
  };
  var palabras = function(t){ return String(t).replace(/\s+/g, " ").trim().split(" "); };

  function prepara(S0){
    var rnd = A.mulberry(Math.floor(Math.random() * 1e9));
    /* la ruleta: los modos que marcaron los dos (contra Manzana o sin datos del rival, los míos); el del día pesa doble */
    var mios = marcados(), suyos = S0.bot || !(S0.opp && S0.opp.pref && S0.opp.pref.modos) ? mios : S0.opp.pref.modos;
    var comunes = mios.filter(function(m){ return suyos.indexOf(m) >= 0; });
    if (!comunes.length) comunes = mios.concat(suyos.filter(function(m){ return mios.indexOf(m) < 0; }));
    if (S0.serie && S0.serie.jugados) { var resto = comunes.filter(function(m){ return S0.serie.jugados.indexOf(m) < 0; }); if (resto.length) comunes = resto; }
    var bolsa = []; comunes.forEach(function(m){ bolsa.push(m); if (m === delDia()) bolsa.push(m); });
    var elegido = S0.forzar && MODOS.some(function(m){ return m.id === S0.forzar; }) ? S0.forzar : bolsa[Math.floor(rnd() * bolsa.length)] || "clasico";
    S0.forzar = null;
    /* serie: la propone quien la quiera, y vale si el rival también (contra Manzana, si la marqué) */
    var serie = null;
    if (S0.serie) serie = { n: 3, num: S0.serie.num + 1, h: S0.serie.me, g: S0.serie.opp, jugados: S0.serie.jugados.concat(elegido) };
    else if (quiereSerie() && (S0.bot || (S0.opp && S0.opp.pref && S0.opp.pref.serie))) serie = { n: 3, num: 1, h: 0, g: 0, jugados: [elegido] };
    var base = { modo: elegido, ruleta: comunes, serie: serie };
    return vocab(S0.bucket).then(function(V){
      var ok = V.filter(function(w){ return w.fr.length <= 22 && corto(w.es).length <= 26; });
      var pick = function(n){ return A.shuf(ok, rnd).slice(0, n); };
      var oroW = pick(1)[0];
      if (oroW) base.oro = rapida(oroW, ok, rnd);
      var lecc = function(n){ return A.preguntas(S0.bucket).slice(0, n); };
      var m = elegido, d = {};
      if (m === "clasico") { base.qs = lecc(6); base.rms = 10000; }
      else if (m === "apuesta") { base.qs = lecc(6); base.rms = 12500; }
      else if (m === "escucha") {
        var ej = A.shuf(V.filter(function(w){ return w.ex && w.exes && w.ex.length <= 70 && w.exes.length <= 80; }), rnd);
        base.qs = ej.slice(0, 6).map(function(w){
          var malas = A.shuf(ej.filter(function(x){ return x.exes !== w.exes; }), rnd).slice(0, 2).map(function(x){ return x.exes; });
          var o = A.shuf([w.exes].concat(malas), rnd);
          return { c: "comp", q: w.ex, audio: w.ex, ask: "¿Qué oíste?", ctx: "", o: o, a: o.indexOf(w.exes) };
        });
        base.rms = 12000;
        if (base.qs.length < 6) { base.qs = lecc(6); base.modo = "clasico"; base.rms = 10000; }
      }
      else if (m === "tira" || m === "bomba") { d.qs = pick(60).map(function(w){ return rapida(w, ok, rnd); }); if (m === "bomba") d.mechas = [12, 9, 15, 10, 13, 8, 14, 11, 16, 9].map(function(x){ return x + Math.round(rnd() * 3); }); }
      else if (m === "touche") { d.asaltos = pick(14).map(function(w){ return rapida(w, ok, rnd); }); d.paradas = pick(14).map(function(w){ return vf(w, ok, rnd); }); }
      else if (m === "tecleo" || m === "ordena") {
        var fr = A.shuf(V.filter(function(w){ var n = w.ex ? palabras(w.ex).length : 0; return m === "tecleo" ? w.ex && w.ex.length >= 12 && w.ex.length <= 42 : n >= 3 && n <= 7 && w.ex.length <= 48; }), rnd);
        if (m === "tecleo") d.frases = fr.slice(0, 3).map(function(w){ return { fr: w.ex, es: w.exes || "" }; });
        else d.frases = fr.slice(0, 5).map(function(w){ var p = palabras(w.ex), o = A.shuf(p.map(function(_, i){ return i; }), rnd); if (o.every(function(x, i){ return x === i; })) o.reverse(); return { fr: w.ex, es: w.exes || "", p: p, o: o }; });
      }
      else if (m === "memoria") {
        var pares = A.shuf(V.filter(function(w){ return w.fr.length <= 16 && corto(w.es).length <= 18; }), rnd), vistos = {}, sel = [];
        pares.forEach(function(w){ if (sel.length < 6 && !vistos[w.fr] && !vistos["es:" + corto(w.es)]) { vistos[w.fr] = vistos["es:" + corto(w.es)] = 1; sel.push({ fr: w.fr, es: corto(w.es) }); } });
        var cartas = []; sel.forEach(function(p, i){ cartas.push({ p: i, t: p.fr, l: "fr" }); cartas.push({ p: i, t: p.es, l: "es" }); });
        d.cartas = A.shuf(cartas, rnd);
      }
      /* si el vocabulario no alcanzó (sin red), se juega el clásico */
      if (!base.qs && ((m === "tira" || m === "bomba") && (!d.qs || d.qs.length < 20) || m === "touche" && (!d.asaltos || d.asaltos.length < 8) || (m === "tecleo" && (!d.frases || d.frases.length < 3)) || (m === "ordena" && (!d.frases || d.frases.length < 5)) || (m === "memoria" && (!d.cartas || d.cartas.length < 12)))) {
        base.modo = "clasico"; base.qs = lecc(6); base.rms = 10000; d = {};
      }
      if (!base.qs) base.qs = [];
      base.datos = d;
      return base;
    });
  }

  /* ================================================================== serie al mejor de 3 */
  /* el «start» trae los puntos de la serie desde el anfitrión (h) y el invitado (g); cada uno los ve como suyos/rival */
  function serieDe(S0, p){ return { n: 3, num: p.num, me: S0.host ? p.h : p.g, opp: S0.host ? p.g : p.h, jugados: p.jugados || [] }; }
  function serieSuma(S0, res){
    var s = S0.serie; if (!s) return false;
    if (res === "win") s.me++; else if (res === "lose") s.opp++;
    return s.me < 2 && s.opp < 2 && s.num < 5;
  }
  function serieNueva(S0){ S0.serie = null; }

  /* ================================================================== red y bot (los dos hablan igual) */
  var M = null;   // el estado del modo propio en juego
  function envia(S0, p){ p.g = S0.gid; if (S0.bot) return; A.send("m", p); }
  function red(S0, p){
    if (p.k === "hielo") return hielo(S0);
    if (p.k === "oro" || p.k === "orofin") return oroRed(S0, p, false);
    if (!M || p.g !== S0.gid) return;
    if (M.red) M.red(p, false);
  }
  /* el bot «envía» llamando a recibe: entra igual que un mensaje del rival */
  var recibe = function(p){ var S0 = A.S(); if (!S0 || !M) return; p.g = S0.gid; if (p.k === "hielo") return hielo(S0); if (p.k === "oro" || p.k === "orofin") return oroRed(S0, p, true); M.red(p, true); };
  var botT = [];
  var luego = function(fn, ms){ var t = setTimeout(fn, ms); botT.push(t); return t; };
  function para(S0){ botT.forEach(clearTimeout); botT = []; if (M && M.para) M.para(); clearInterval(relojI); relojI = 0; M = null; quitaRuleta(); }
  var relojI = 0;
  var tic = function(fn, ms){ clearInterval(relojI); relojI = setInterval(fn, ms || 100); };
  var bot = function(S0){ return !!S0.bot; };
  var precision = function(S0){ return { A: .74, B1: .68, B2: .64, C1: .6 }[S0.bucket] || .68; };

  /* ================================================================== piezas comunes de los modos propios */
  function cabecera(S0, centroHTML){
    var o = S0.opp || {};
    return '<div class="v3-cab">' +
      '<div class="v3-j v3-j--a"><span class="v3-ret">' + '<img src="' + IMG + 'duelo_yo.webp" alt=""></span><span class="v3-jt"><b>' + esc(A.ME.nick) + '</b><span class="v3-mar" data-mar="me"></span></span></div>' +
      '<div class="v3-centro">' + (centroHTML || "") + "</div>" +
      '<div class="v3-j v3-j--b"><span class="v3-jt"><b>' + esc(o.nick || "Rival") + '</b><span class="v3-mar" data-mar="opp"></span></span><span class="v3-ret"><img src="' + IMG + 'duelo_rival.webp" alt=""></span></div></div>';
  }
  var marcador = function(lado, html){ var e = q('#plx1v1 [data-mar="' + lado + '"]'); if (e && e.innerHTML !== html) e.innerHTML = html; };
  var corazones = function(n, max){ var s = ""; for (var i = 0; i < max; i++) s += '<img class="v3-cor' + (i < n ? "" : " v3-cor--fuera") + '" src="img/ic2/corazon.webp" alt="">'; return s; };
  var opciones = function(qq, attr){ return '<div class="v3-ops">' + qq.o.map(function(o, i){ return '<button type="button" class="pz-opt v3-op" data-v3="' + attr + '" data-i="' + i + '">' + esc(o) + "</button>"; }).join("") + "</div>"; };
  var reloj = function(seg){ return '<span class="v3-reloj"><b>' + seg + "</b><small>s</small></span>"; };
  var ret = function(lado){ return q("#plx1v1 .v3-j--" + (lado === "me" ? "a" : "b") + " .v3-ret"); };

  /* ================================================================== TIRA Y AFLOJA */
  var TIRA = {
    LIM: 6, DUR: 75000,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-tira"><div class="v3-cancha"><img class="v3-tira-yo" src="' + IMG + 'duelo_yo.webp" alt=""><div class="v3-cuerda"><i class="v3-cuerda-l"></i><b class="v3-nudo"></b><i class="v3-meta v3-meta--a"></i><i class="v3-meta v3-meta--b"></i></div><img class="v3-tira-rv" src="' + IMG + 'duelo_rival.webp" alt=""></div>' +
        '<div class="pz-card v3-preg"><small>¿Qué significa?</small><h3 class="v3-q"></h3><div class="v3-ops-z"></div></div></div>';
    },
    arranca: function(S0){
      var d = S0.datos; M = { me: 0, op: 0, i: 0, lock: 0, t0: ahora(), fin: false, red: TIRA.red, para: function(){} };
      TIRA.pinta(S0); TIRA.nueva(S0);
      tic(function(){ TIRA.reloj(S0); }, 250);
      if (bot(S0)) TIRA.bot(S0);
    },
    nueva: function(S0){
      var qq = S0.datos.qs[M.i % S0.datos.qs.length], c = q("#plx1v1 .v3-tira .v3-preg"); if (!c) return;
      c.querySelector(".v3-q").textContent = "«" + qq.q + "»";
      c.querySelector(".v3-ops-z").innerHTML = opciones(qq, "tira");
    },
    responde: function(S0, i){
      if (!M || M.fin || ahora() < M.lock) return;
      var qq = S0.datos.qs[M.i % S0.datos.qs.length], b = q('#plx1v1 .v3-tira [data-i="' + i + '"]');
      if (i === qq.a) {
        M.me++; M.i++; sfx("tiro"); envia(S0, { k: "t", n: M.me });
        var n = q("#plx1v1 .v3-nudo"); if (n) { var c = centro(n); fx().chispas(c.x, c.y, { n: 16, cols: ["#FFC83D", "#fff", "#2F6BFF"], v: 300 }); }
        TIRA.pinta(S0); TIRA.nueva(S0); TIRA.revisa(S0);
      } else {
        sfx("ko"); M.lock = ahora() + 1200; if (b) b.classList.add("ko");
        qa("#plx1v1 .v3-tira .v3-op").forEach(function(x){ x.disabled = true; });
        fx().sacude(q("#plx1v1 .v3-tira .v3-preg"), "v2-sacude", 500);
        setTimeout(function(){ if (M && !M.fin) { M.i++; TIRA.nueva(S0); } }, 1200);
      }
    },
    red: function(p){ var S0 = A.S(); if (p.k === "t") { if (p.n > M.op) { M.op = p.n; sfx("opp"); TIRA.pinta(S0); TIRA.revisa(S0); } } else if (p.k === "fin") TIRA.termina(S0, S0.host ? p.h : p.gg, S0.host ? p.gg : p.h); },
    pos: function(){ return Math.max(-TIRA.LIM, Math.min(TIRA.LIM, M.me - M.op)); },
    pinta: function(S0){
      var n = q("#plx1v1 .v3-nudo"); if (n) n.style.left = (50 - TIRA.pos() * (42 / TIRA.LIM)) + "%";
      var c = q("#plx1v1 .v3-cuerda"); if (c) c.dataset.lado = TIRA.pos() > 0 ? "a" : TIRA.pos() < 0 ? "b" : "";
      marcador("me", "<em>" + M.me + "</em>"); marcador("opp", "<em>" + M.op + "</em>");
    },
    reloj: function(S0){
      var r = Math.max(0, Math.ceil((TIRA.DUR - (ahora() - M.t0)) / 1000)), c = q("#plx1v1 .v3-centro");
      if (c) c.innerHTML = "<small>" + ico("tira") + "Tira y afloja</small>" + reloj(r);
      if (r <= 0) TIRA.revisa(S0, true);
    },
    /* el anfitrión decide el final (con los dos conteos que tiene) y lo anuncia */
    revisa: function(S0, tiempo){
      if (!M || M.fin || !S0.host) return;
      if (Math.abs(M.me - M.op) >= TIRA.LIM || tiempo) { envia(S0, { k: "fin", h: M.me, gg: M.op }); TIRA.termina(S0, M.me, M.op); }
    },
    termina: function(S0, me, op){
      if (!M || M.fin) return; M.fin = true; clearInterval(relojI);
      var a = []; for (var i = 0; i < me; i++) a.push({ ok: true, ms: 3000 });
      setTimeout(function(){ A.fin(me, op, a); }, 900);
    },
    bot: function(S0){
      var acc = precision(S0);
      var paso = function(){ if (!M || M.fin) return; var ok = Math.random() < acc; if (ok) { var n = M.op + 1; recibe({ k: "t", n: n }); luego(paso, 1900 + Math.random() * 2300); } else luego(paso, 3000 + Math.random() * 1500); };
      luego(paso, 2200);
    }
  };

  /* ================================================================== BOMBA (patata caliente) */
  var BOMBA = {
    VIDAS: 2,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-bomba"><div class="v3-ring2"><div class="v3-lado v3-lado--a"><img src="' + IMG + 'duelo_yo.webp" alt=""></div><div class="v3-bombazona"><span class="v3-bomb"><i class="v3-mecha"></i><i class="v3-chispa"></i></span></div><div class="v3-lado v3-lado--b"><img src="' + IMG + 'duelo_rival.webp" alt=""></div></div>' +
        '<div class="pz-card v3-preg"><small class="v3-quien"></small><h3 class="v3-q"></h3><div class="v3-ops-z"></div></div></div>';
    },
    arranca: function(S0){
      M = { v: { me: BOMBA.VIDAS, op: BOMBA.VIDAS }, k: 0, quien: S0.host ? "me" : "op", i: 0, inicio: ahora(), fin: false, red: BOMBA.red, lock: 0, boomT: 0 };
      BOMBA.nuevaBomba(S0, M.quien, ahora());
      tic(function(){ BOMBA.reloj(S0); }, 120);
    },
    mecha: function(S0){ var m = S0.datos.mechas; return (m[M.k % m.length]) * 1000; },
    nuevaBomba: function(S0, quien, t){
      M.quien = quien; M.inicio = t; M.boomT = 0; BOMBA.pinta(S0); BOMBA.pregunta(S0);
      if (bot(S0) && quien === "op") BOMBA.botTurno(S0);
    },
    pinta: function(S0){
      marcador("me", corazones(M.v.me, BOMBA.VIDAS)); marcador("opp", corazones(M.v.op, BOMBA.VIDAS));
      var z = q("#plx1v1 .v3-bombazona"); if (z) z.dataset.quien = M.quien;
      var w = q("#plx1v1 .v3-bomba .v3-quien"); if (w) w.textContent = M.quien === "me" ? "💣 ¡La tienes tú! Acierta para pasarla" : "😼 La tiene " + ((S0.opp && S0.opp.nick) || "tu rival") + "… que no te la devuelva";
    },
    pregunta: function(S0){
      var c = q("#plx1v1 .v3-bomba .v3-preg"); if (!c) return;
      c.classList.toggle("v3-espera", M.quien !== "me");
      if (M.quien !== "me") { c.querySelector(".v3-q").textContent = "…"; c.querySelector(".v3-ops-z").innerHTML = ""; return; }
      var qq = S0.datos.qs[M.i % S0.datos.qs.length];
      c.querySelector(".v3-q").textContent = "«" + qq.q + "»"; c.querySelector(".v3-ops-z").innerHTML = opciones(qq, "bomba");
    },
    responde: function(S0, i){
      if (!M || M.fin || M.quien !== "me" || ahora() < M.lock) return;
      var qq = S0.datos.qs[M.i % S0.datos.qs.length]; M.i++;
      if (i === qq.a) {
        sfx("pasa"); envia(S0, { k: "p", b: M.k });
        var b = q("#plx1v1 .v3-bomb"); if (b) { var c = centro(b); fx().chispas(c.x, c.y, { n: 12, ang: 0, abre: .8, v: 380, cols: ["#FFC83D", "#FF8A3D", "#fff"] }); }
        M.quien = "op"; BOMBA.pinta(S0); BOMBA.pregunta(S0);
        if (bot(S0)) BOMBA.botTurno(S0);
      } else {
        sfx("ko"); M.lock = ahora() + 600; fx().sacude(q("#plx1v1 .v3-bomba .v3-preg"), "v2-sacude", 450);
        setTimeout(function(){ if (M && !M.fin && M.quien === "me") BOMBA.pregunta(S0); }, 600);
      }
    },
    /* solo quien tiene la bomba decide si explotó: su reloj manda */
    reloj: function(S0){
      if (!M || M.fin || M.boomT) return;
      var t = ahora() - M.inicio, falta = BOMBA.mecha(S0) - t, b = q("#plx1v1 .v3-bomb");
      if (b) { b.classList.toggle("v3-bomb--prisa", falta < 3500); var me = q("#plx1v1 .v3-mecha"), ch = q("#plx1v1 .v3-chispa"), f = Math.max(.08, Math.min(1, 1 - t / 16000)); if (me) me.style.transform = "rotate(-30deg) scaleX(" + f + ")"; if (ch) ch.style.left = "calc(62% + " + Math.round(22 * f) + "px)"; }
      var cad = falta < 3500 ? 250 : 600; if (!M.tic || ahora() - M.tic > cad) { M.tic = ahora(); sfx("mecha"); }
      var c = q("#plx1v1 .v3-centro"); if (c && !c.dataset.b) { c.dataset.b = 1; c.innerHTML = "<small>" + ico("bomba") + "Bomba</small><b class=\"v3-vs-mini\">VS</b>"; }
      if (falta <= 0 && M.quien === "me") { envia(S0, { k: "boom", b: M.k }); BOMBA.boom(S0, "me"); }
      if (falta <= 0 && M.quien === "op" && bot(S0)) BOMBA.boom(S0, "op");
    },
    boom: function(S0, quien){
      if (!M || M.boomT) return; M.boomT = ahora();
      sfx("boom"); M.v[quien]--; BOMBA.pinta(S0);
      var b = q("#plx1v1 .v3-bomb"), r = q("#plx1v1 .v3-lado--" + (quien === "me" ? "a" : "b"));
      if (b) { var c = centro(r || b); fx().chispas(c.x, c.y, { n: 46, v: 620, g: 500, cols: ["#FF6B3D", "#FFC83D", "#fff", "#444"] }); fx().sacude(q("#plx1v1 .v3-cuerpo"), "v3-temblor", 600); }
      if (r) fx().sacude(r, "v2-golpeado", 600);
      if (M.v.me <= 0 || M.v.op <= 0) { M.fin = true; clearInterval(relojI); var a = []; for (var i = 0; i < M.i; i++) a.push({ ok: true, ms: 3000 }); setTimeout(function(){ A.fin(M ? M.v.me : 0, M ? M.v.op : 0, a); }, 1400); return; }
      /* la siguiente bomba la recibe quien sobrevivió */
      M.k++; var sig = quien === "me" ? "op" : "me";
      setTimeout(function(){ if (M && !M.fin) BOMBA.nuevaBomba(S0, sig, ahora()); }, 2000);
    },
    red: function(p){
      var S0 = A.S();
      if (p.k === "p" && p.b === M.k && M.quien === "op") { sfx("pasa"); M.quien = "me"; BOMBA.pinta(S0); BOMBA.pregunta(S0); var r = ret("op"); if (r) fx().sacude(r, "v2-estoca-r", 500); }
      else if (p.k === "boom" && p.b === M.k) BOMBA.boom(S0, "op");
    },
    botTurno: function(S0){
      var k = M.k, acc = precision(S0);
      var paso = function(){ if (!M || M.fin || M.k !== k || M.quien !== "op" || M.boomT) return; if (Math.random() < acc) recibe({ k: "p", b: k }); else luego(paso, 1700 + Math.random() * 1500); };
      luego(paso, 1600 + Math.random() * 2600);
    }
  };

  /* ================================================================== TOUCHÉ (esgrima) */
  var TOUCHE = {
    VIDAS: 3, ASALTO: 6500, PARADA: 3500,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-touche"><div class="v3-pista"><img class="v3-esg v3-esg--a" src="' + IMG + 'duelo_yo.webp" alt=""><span class="v3-touche-t">EN GARDE</span><img class="v3-esg v3-esg--b" src="' + IMG + 'duelo_rival.webp" alt=""></div>' +
        '<div class="pz-card v3-preg"><small class="v3-fase"></small><h3 class="v3-q"></h3><div class="v3-ops-z"></div><div class="v3-barra"><i></i></div></div></div>';
    },
    arranca: function(S0){
      M = { v: { me: TOUCHE.VIDAS, op: TOUCHE.VIDAS }, n: -1, fin: false, red: TOUCHE.red, r: {}, fase: "", t: 0 };
      TOUCHE.pinta(S0); TOUCHE.asalto(S0, 0);
      tic(function(){ TOUCHE.reloj(S0); }, 100);
    },
    pinta: function(S0){ marcador("me", corazones(M.v.me, TOUCHE.VIDAS)); marcador("opp", corazones(M.v.op, TOUCHE.VIDAS)); },
    asalto: function(S0, n){
      if (!M || M.fin) return;
      if (n >= S0.datos.asaltos.length) return TOUCHE.termina(S0);
      M.n = n; M.r = {}; M.fase = "asalto"; M.t = ahora(); M.ataque = null; M.yaResp = false;
      var qq = S0.datos.asaltos[n], c = q("#plx1v1 .v3-touche .v3-preg"); if (!c) return;
      c.className = "pz-card v3-preg";
      c.querySelector(".v3-fase").textContent = "Asalto " + (n + 1) + " · el primero que acierta ataca";
      c.querySelector(".v3-q").textContent = "«" + qq.q + "»"; c.querySelector(".v3-ops-z").innerHTML = opciones(qq, "touche");
      var t = q("#plx1v1 .v3-touche-t"); if (t) { t.textContent = "EN GARDE"; t.className = "v3-touche-t"; }
      if (bot(S0)) { var acc = precision(S0), ms = 1500 + Math.random() * 3800; luego(function(){ if (M && M.n === n && M.fase === "asalto") recibe({ k: "r", n: n, ok: Math.random() < acc, ms: ms }); }, ms); }
    },
    responde: function(S0, i){
      if (!M || M.fin || M.fase !== "asalto" || M.yaResp) return;
      var qq = S0.datos.asaltos[M.n], ok = i === qq.a, ms = ahora() - M.t, b = q('#plx1v1 .v3-touche [data-i="' + i + '"]');
      M.yaResp = true; sfx(ok ? "ok" : "ko"); if (b) b.classList.add(ok ? "ok" : "ko");
      qa("#plx1v1 .v3-touche .v3-op").forEach(function(x){ x.disabled = true; });
      M.r.me = { ok: ok, ms: ms }; envia(S0, { k: "r", n: M.n, ok: ok, ms: ms });
      TOUCHE.arbitra(S0);
    },
    /* el anfitrión decide quién atacó: el que acertó más rápido. Decide cuando respondieron los dos, cuando se acaba el
       tiempo o 0,6 s después del primer acierto (el respiro cubre lo que tarda en llegar la respuesta del otro). */
    arbitra: function(S0, tiempo){
      if (!S0.host || !M || M.fase !== "asalto") return;
      var a = M.r.me, b = M.r.op;
      if (!tiempo && !(a && b)) {
        if ((a && a.ok) || (b && b.ok)) { if (!M.espT) { var n = M.n; M.espT = setTimeout(function(){ M && (M.espT = 0); if (M && M.n === n) TOUCHE.arbitra(S0, true); }, 600); } }
        return;
      }
      clearTimeout(M.espT); M.espT = 0;
      var gana = a && a.ok && (!b || !b.ok || a.ms <= b.ms) ? "h" : b && b.ok ? "g" : null;
      envia(S0, { k: "a", n: M.n, at: gana }); TOUCHE.ataque(S0, gana);
    },
    ataque: function(S0, at){
      if (!M || M.fase !== "asalto") return;
      M.fase = "parada"; M.t = ahora();
      var yo = S0.host ? "h" : "g", t = q("#plx1v1 .v3-touche-t");
      if (!at) { if (t) { t.textContent = "¡NADIE TOCA!"; t.className = "v3-touche-t v3-gris"; } M.fase = "pausa"; setTimeout(function(){ TOUCHE.asalto(S0, M.n + 1); }, 1400); return; }
      M.ataque = at === yo ? "me" : "op";
      var esg = q("#plx1v1 .v3-esg--" + (M.ataque === "me" ? "a" : "b")); if (esg) fx().sacude(esg, M.ataque === "me" ? "v3-embiste" : "v3-embiste-r", 600);
      sfx("estocada");
      if (t) { t.textContent = M.ataque === "me" ? "¡ATACAS!" : "¡TE ATACAN!"; t.className = "v3-touche-t " + (M.ataque === "me" ? "v3-azul" : "v3-rosa"); }
      var c = q("#plx1v1 .v3-touche .v3-preg");
      if (M.ataque === "op") {
        var pd = S0.datos.paradas[M.n % S0.datos.paradas.length];
        c.className = "pz-card v3-preg v3-parada";
        c.querySelector(".v3-fase").textContent = "🛡️ ¡PARA! ¿Es correcto?";
        c.querySelector(".v3-q").innerHTML = "«" + esc(pd.q) + "» = " + esc(pd.es);
        c.querySelector(".v3-ops-z").innerHTML = '<div class="v3-ops v3-ops--vf"><button type="button" class="pz-opt v3-op" data-v3="parada" data-i="1">✓ Sí</button><button type="button" class="pz-opt v3-op" data-v3="parada" data-i="0">✗ No</button></div>';
      } else {
        c.className = "pz-card v3-preg v3-espera";
        c.querySelector(".v3-fase").textContent = "⚔️ Tu estocada va… ¿la parará?";
        c.querySelector(".v3-q").textContent = "…"; c.querySelector(".v3-ops-z").innerHTML = "";
        if (bot(S0)) { var acc = precision(S0) - .05, ms = 900 + Math.random() * 1900; luego(function(){ if (M && M.fase === "parada") recibe({ k: "pd", n: M.n, ok: Math.random() < acc }); }, ms); }
      }
    },
    para_: function(S0, si){
      if (!M || M.fase !== "parada" || M.ataque !== "op") return;
      var pd = S0.datos.paradas[M.n % S0.datos.paradas.length], ok = si === pd.v;
      envia(S0, { k: "pd", n: M.n, ok: ok }); TOUCHE.golpe(S0, "me", ok);
    },
    golpe: function(S0, defensor, ok){
      if (!M || M.fase !== "parada") return; M.fase = "pausa";
      var t = q("#plx1v1 .v3-touche-t"), esg = q("#plx1v1 .v3-esg--" + (defensor === "me" ? "a" : "b"));
      if (ok) { sfx("parada"); if (t) { t.textContent = "¡PARADA!"; t.className = "v3-touche-t v3-oro"; } if (esg) { var c = centro(esg); fx().chispas(c.x, c.y - 20, { n: 22, cols: ["#fff", "#C9D0E6", "#FFC83D"], v: 380 }); } }
      else {
        M.v[defensor]--; TOUCHE.pinta(S0); sfx("ko");
        if (t) { t.textContent = "TOUCHÉ !"; t.className = "v3-touche-t " + (defensor === "me" ? "v3-rosa" : "v3-azul"); }
        if (esg) { var c2 = centro(esg); fx().chispas(c2.x, c2.y, { n: 34, v: 480, cols: defensor === "me" ? ["#FF6B8B", "#fff", "#FFC83D"] : ["#2F6BFF", "#fff", "#FFC83D"] }); fx().sacude(esg, "v2-golpeado", 500); }
      }
      if (M.v.me <= 0 || M.v.op <= 0) return TOUCHE.termina(S0);
      setTimeout(function(){ TOUCHE.asalto(S0, M.n + 1); }, 1700);
    },
    reloj: function(S0){
      if (!M || M.fin) return;
      var dur = M.fase === "asalto" ? TOUCHE.ASALTO : M.fase === "parada" ? TOUCHE.PARADA : 0, b = q("#plx1v1 .v3-touche .v3-barra i");
      if (b) b.style.transform = "scaleX(" + (dur ? Math.max(0, 1 - (ahora() - M.t) / dur) : 0) + ")";
      var c = q("#plx1v1 .v3-centro"); if (c && !c.dataset.t) { c.dataset.t = 1; c.innerHTML = "<small>" + ico("touche") + 'Touché</small><b class="v3-vs-mini">VS</b>'; }
      if (M.fase === "asalto") { if (S0.host && ahora() - M.t > TOUCHE.ASALTO) TOUCHE.arbitra(S0, true); else if (S0.host) TOUCHE.arbitra(S0); }
      if (M.fase === "parada" && M.ataque === "op" && ahora() - M.t > TOUCHE.PARADA) { envia(S0, { k: "pd", n: M.n, ok: false }); TOUCHE.golpe(S0, "me", false); }
    },
    red: function(p){
      var S0 = A.S();
      if (p.k === "r" && p.n === M.n) { M.r.op = { ok: p.ok, ms: p.ms }; if (p.ok) sfx("opp"); TOUCHE.arbitra(S0); }
      else if (p.k === "a" && p.n === M.n && !S0.host) TOUCHE.ataque(S0, p.at);
      else if (p.k === "pd" && p.n === M.n && M.ataque === "me") TOUCHE.golpe(S0, "op", p.ok);
    },
    termina: function(S0){ if (!M || M.fin) return; M.fin = true; clearInterval(relojI); var me = M.v.me, op = M.v.op; setTimeout(function(){ A.fin(me, op); }, 1500); }
  };

  /* ================================================================== CARRERA DE TECLEO */
  var ACENTOS = ["é", "è", "ê", "à", "â", "ç", "ô", "î", "û", "ù", "ë", "ï", "œ", "'"];
  var normal = function(t){ return String(t).replace(/[’`´]/g, "'").replace(/ /g, " ").toLowerCase(); };
  var TECLEO = {
    DUR: 90000,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-tecleo"><div class="v3-carril"><div class="v3-linea v3-linea--a"><img src="' + IMG + 'correr.webp" alt=""></div><div class="v3-linea v3-linea--b"><img src="' + IMG + 'correr.webp" alt=""></div><i class="v3-banderin">🏁</i></div>' +
        '<div class="pz-card v3-preg"><small class="v3-fase"></small><p class="v3-texto" aria-live="polite"></p><p class="v3-es"></p>' +
        '<input class="pz-campo v3-in" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="next" aria-label="Escribe la frase">' +
        (window.PLX_LANG === "en" ? "" : '<div class="v3-acentos">' + ACENTOS.map(function(a){ return '<button type="button" class="pz-chip" data-v3="acento" data-a="' + a + '">' + a + "</button>"; }).join("") + "</div>") + "</div></div>";
    },
    arranca: function(S0){
      var f = S0.datos.frases, tot = f.reduce(function(s, x){ return s + x.fr.length; }, 0);
      M = { i: 0, hecho: 0, tot: tot, me: 0, op: 0, t0: ahora(), fin: false, red: TECLEO.red, env: 0 };
      TECLEO.frase(S0); tic(function(){ TECLEO.reloj(S0); }, 250);
      var inp = q("#plx1v1 .v3-in"); if (inp) { inp.addEventListener("input", function(){ TECLEO.escribe(S0); }); setTimeout(function(){ try { inp.focus(); } catch (e) {} }, 100); }
      if (bot(S0)) TECLEO.bot(S0);
    },
    frase: function(S0){
      var f = S0.datos.frases[M.i], c = q("#plx1v1 .v3-tecleo .v3-preg"); if (!c || !f) return;
      c.querySelector(".v3-fase").textContent = "Frase " + (M.i + 1) + " de " + S0.datos.frases.length + (window.PLX_LANG === "en" ? "" : " · con tildes");
      c.querySelector(".v3-es").textContent = f.es;
      var inp = c.querySelector(".v3-in"); inp.value = ""; TECLEO.texto(S0, "");
    },
    texto: function(S0, v){
      var f = S0.datos.frases[M.i].fr, n = normal(f), nv = normal(v), ok = 0;
      while (ok < nv.length && ok < n.length && nv[ok] === n[ok]) ok++;
      var mal = nv.length > ok;
      var p = q("#plx1v1 .v3-texto"); if (p) p.innerHTML = '<span class="v3-bien">' + esc(f.slice(0, ok)) + "</span>" + (mal ? '<span class="v3-mal">' + esc(f.slice(ok, ok + 1) || " ") + "</span>" + esc(f.slice(ok + 1)) : '<span class="v3-cursor">' + esc(f.slice(ok, ok + 1)) + "</span>" + esc(f.slice(ok + 1)));
      var inp = q("#plx1v1 .v3-in"); if (inp) inp.classList.toggle("v3-in--mal", mal);
      return { ok: ok, mal: mal, completa: !mal && ok === n.length };
    },
    escribe: function(S0){
      if (!M || M.fin) return;
      var inp = q("#plx1v1 .v3-in"), r = TECLEO.texto(S0, inp.value);
      sfx(r.mal ? "ko" : "tecla");
      M.me = (M.hecho + r.ok) / M.tot;
      if (r.completa) {
        M.hecho += S0.datos.frases[M.i].fr.length; M.i++; sfx("ok");
        var c = centro(q("#plx1v1 .v3-linea--a img")); fx().chispas(c.x, c.y, { n: 18, v: 320, cols: ["#2F6BFF", "#FFC83D", "#fff"] });
        if (M.i >= S0.datos.frases.length) { M.me = 1; envia(S0, { k: "av", p: 1 }); TECLEO.pinta(); TECLEO.revisa(S0); return; }
        TECLEO.frase(S0);
      }
      TECLEO.pinta();
      if (ahora() - M.env > 220) { M.env = ahora(); envia(S0, { k: "av", p: M.me }); }
    },
    pinta: function(){
      var a = q("#plx1v1 .v3-linea--a img"), b = q("#plx1v1 .v3-linea--b img");
      if (a) a.style.left = "calc(" + (M.me * 100) + "% - " + (M.me * 46) + "px)"; if (b) b.style.left = "calc(" + (M.op * 100) + "% - " + (M.op * 46) + "px)";
      marcador("me", "<em>" + Math.round(M.me * 100) + "%</em>"); marcador("opp", "<em>" + Math.round(M.op * 100) + "%</em>");
    },
    reloj: function(S0){
      var r = Math.max(0, Math.ceil((TECLEO.DUR - (ahora() - M.t0)) / 1000)), c = q("#plx1v1 .v3-centro");
      if (c) c.innerHTML = "<small>" + ico("tecleo") + "Tecleo</small>" + reloj(r);
      if (r <= 0) TECLEO.revisa(S0, true);
      if (M.me > 0 && ahora() - M.env > 1500) { M.env = ahora(); envia(S0, { k: "av", p: M.me }); }
    },
    red: function(p){ var S0 = A.S(); if (p.k === "av" && p.p >= M.op) { M.op = p.p; TECLEO.pinta(); TECLEO.revisa(S0); } else if (p.k === "fin") TECLEO.termina(S0, S0.host ? p.h : p.gg, S0.host ? p.gg : p.h); },
    revisa: function(S0, tiempo){
      if (!M || M.fin || !S0.host) return;
      if (M.me >= 1 || M.op >= 1 || tiempo) { var h = Math.round(M.me * 1000), gg = Math.round(M.op * 1000); envia(S0, { k: "fin", h: h, gg: gg }); TECLEO.termina(S0, h, gg); }
    },
    termina: function(S0, me, op){
      if (!M || M.fin) return; M.fin = true; clearInterval(relojI);
      var inp = q("#plx1v1 .v3-in"); if (inp) inp.blur();
      var a = []; for (var i = 0; i < M.i; i++) a.push({ ok: true, ms: 4000 });
      setTimeout(function(){ A.fin(me, op, a); }, 1000);
    },
    bot: function(S0){
      var cps = { A: 2.1, B1: 2.5, B2: 2.8, C1: 3.1 }[S0.bucket] || 2.4;
      var paso = function(){ if (!M || M.fin) return; var n = Math.min(1, M.op + (cps * (0.6 + Math.random() * 0.7)) / M.tot); recibe({ k: "av", p: n }); if (n < 1) luego(paso, 700 + Math.random() * 500); };
      luego(paso, 1500);
    }
  };

  /* ================================================================== ORDENA LA FRASE */
  var ORDENA = {
    META: 3, RONDA: 25000,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-ordena"><div class="pz-card v3-preg"><small class="v3-fase"></small><p class="v3-es"></p><div class="v3-armada" aria-label="Tu frase"></div><div class="v3-fichas"></div></div></div>';
    },
    arranca: function(S0){
      M = { i: -1, pts: { me: 0, op: 0 }, fin: false, red: ORDENA.red, puesta: [], t: 0, hecha: false, oks: {} };
      ORDENA.pinta(); if (S0.host) ORDENA.siguiente(S0, 0);
      tic(function(){ ORDENA.reloj(S0); }, 200);
    },
    /* el anfitrión abre cada ronda (y la cierra al decidir quién la ganó) */
    siguiente: function(S0, i){
      if (!M || M.fin) return;
      if (i >= S0.datos.frases.length || M.pts.me >= ORDENA.META || M.pts.op >= ORDENA.META) { if (S0.host) { envia(S0, { k: "fin", h: M.pts.me, gg: M.pts.op }); ORDENA.termina(S0, M.pts.me, M.pts.op); } return; }
      if (S0.host) envia(S0, { k: "ronda", i: i });
      ORDENA.ronda(S0, i);
      if (bot(S0)) { var ms = 5000 + Math.random() * 7000, acc = precision(S0) + .1; luego(function(){ if (M && M.i === i && Math.random() < acc) recibe({ k: "ok", i: i, ms: ms }); }, ms); }
    },
    ronda: function(S0, i){
      M.i = i; M.puesta = []; M.t = ahora(); M.hecha = false; M.oks = {};
      var f = S0.datos.frases[i], c = q("#plx1v1 .v3-ordena .v3-preg"); if (!c) return;
      c.classList.remove("v3-espera");
      c.querySelector(".v3-fase").textContent = "Frase " + (i + 1) + " · gana quien la arme primero (a " + ORDENA.META + ")";
      c.querySelector(".v3-es").textContent = f.es;
      c.querySelector(".v3-fichas").innerHTML = f.o.map(function(k){ return '<button type="button" class="pz-chip v3-ficha" data-v3="ficha" data-k="' + k + '">' + esc(f.p[k]) + "</button>"; }).join("");
      ORDENA.armada(S0);
    },
    armada: function(S0){
      var f = S0.datos.frases[M.i], a = q("#plx1v1 .v3-armada"); if (!a) return;
      a.innerHTML = M.puesta.length ? M.puesta.map(function(k, j){ return '<button type="button" class="pz-chip v3-ficha v3-ficha--puesta" data-v3="quita" data-j="' + j + '">' + esc(f.p[k]) + "</button>"; }).join("") : '<span class="v3-vacia">Toca las palabras en orden</span>';
      qa("#plx1v1 .v3-fichas .v3-ficha").forEach(function(b){ b.disabled = M.puesta.indexOf(+b.dataset.k) >= 0 || M.hecha; });
    },
    toca: function(S0, k){
      if (!M || M.fin || M.hecha || M.puesta.indexOf(k) >= 0) return;
      sfx("tecla"); M.puesta.push(k); ORDENA.armada(S0);
      var f = S0.datos.frases[M.i];
      if (M.puesta.length === f.p.length) {
        var bien = M.puesta.map(function(x){ return f.p[x]; }).join(" ") === f.p.join(" ");
        if (bien) { M.hecha = true; sfx("ok"); var ms = ahora() - M.t; M.oks.me = ms; envia(S0, { k: "ok", i: M.i, ms: ms }); ORDENA.armada(S0); var c = q("#plx1v1 .v3-ordena .v3-preg"); c.classList.add("v3-espera"); c.querySelector(".v3-fase").textContent = "¡Lista! Esperando al árbitro…"; ORDENA.arbitra(S0); }
        else { sfx("ko"); fx().sacude(q("#plx1v1 .v3-armada"), "v2-sacude", 450); setTimeout(function(){ if (M && !M.hecha) { M.puesta = []; ORDENA.armada(S0); } }, 650); }
      }
    },
    quita: function(S0, j){ if (!M || M.hecha) return; M.puesta.splice(j, 1); ORDENA.armada(S0); },
    arbitra: function(S0, tiempo){
      if (!S0.host || !M || M.cerrada === M.i) return;
      var a = M.oks.me, b = M.oks.op;
      if (a == null && b == null && !tiempo) return;
      /* si solo uno terminó, se le da un respiro de 500 ms al otro (por el viaje del mensaje) */
      if (!tiempo && (a == null) !== (b == null)) { var i = M.i; clearTimeout(M.espT); M.espT = setTimeout(function(){ if (M && M.i === i) ORDENA.arbitra(S0, true); }, 500); return; }
      var gana = a == null && b == null ? null : b == null || (a != null && a <= b) ? "h" : "g";
      M.cerrada = M.i; envia(S0, { k: "pt", i: M.i, gana: gana }); ORDENA.punto(S0, M.i, gana);
    },
    punto: function(S0, i, gana){
      if (!M || M.i !== i) return;
      var yo = S0.host ? "h" : "g", quien = gana ? (gana === yo ? "me" : "op") : null;
      if (quien) M.pts[quien]++; ORDENA.pinta();
      var c = q("#plx1v1 .v3-ordena .v3-preg"), f = S0.datos.frases[i];
      if (c) { c.classList.add("v3-espera"); c.querySelector(".v3-fase").textContent = quien === "me" ? "✓ ¡Punto para ti!" : quien === "op" ? "Punto para " + ((S0.opp && S0.opp.nick) || "tu rival") : "Nadie la armó"; c.querySelector(".v3-armada").innerHTML = '<span class="v3-sol">' + esc(f.fr) + "</span>"; c.querySelector(".v3-fichas").innerHTML = ""; }
      sfx(quien === "me" ? "combo" : "opp");
      if (quien) { var r = ret(quien); if (r) { var cc = centro(r); fx().chispas(cc.x, cc.y, { n: 18, v: 300 }); } }
      if (S0.host) setTimeout(function(){ ORDENA.siguiente(S0, i + 1); }, 1900);
    },
    reloj: function(S0){
      if (!M || M.fin) return;
      var r = Math.max(0, Math.ceil((ORDENA.RONDA - (ahora() - M.t)) / 1000)), c = q("#plx1v1 .v3-centro");
      if (c) c.innerHTML = "<small>" + ico("ordena") + "Ordena</small>" + reloj(M.i < 0 ? 25 : r);
      if (S0.host && M.i >= 0 && r <= 0 && M.cerrada !== M.i) ORDENA.arbitra(S0, true);
    },
    red: function(p){
      var S0 = A.S();
      if (p.k === "ronda" && !S0.host) ORDENA.ronda(S0, p.i);
      else if (p.k === "ok" && p.i === M.i) { M.oks.op = p.ms; sfx("opp"); ORDENA.arbitra(S0); }
      else if (p.k === "pt" && !S0.host) ORDENA.punto(S0, p.i, p.gana);
      else if (p.k === "fin") ORDENA.termina(S0, S0.host ? p.h : p.gg, S0.host ? p.gg : p.h);
    },
    pinta: function(){ var e = function(n){ return '<span class="v3-puntos">' + [0, 1, 2].map(function(i){ return '<i class="' + (i < n ? "on" : "") + '"></i>'; }).join("") + "</span>"; }; marcador("me", e(M.pts.me)); marcador("opp", e(M.pts.op)); },
    termina: function(S0, me, op){ if (!M || M.fin) return; M.fin = true; clearInterval(relojI); var a = []; for (var i = 0; i < me; i++) a.push({ ok: true, ms: 8000 }); setTimeout(function(){ A.fin(me, op, a); }, 1200); }
  };

  /* ================================================================== MEMORIA (por turnos) */
  var MEMORIA = {
    TURNO: 9000,
    monta: function(S0){
      return '<div class="v3-cuerpo v3-memoria"><p class="v3-turno"></p><div class="v3-tablero">' + S0.datos.cartas.map(function(c, i){ return '<button type="button" class="v3-carta" data-v3="carta" data-c="' + i + '" aria-label="Carta ' + (i + 1) + '"><span class="v3-carta-d"><b lang="' + (c.l === "fr" && window.PLX_LANG === "en" ? "en" : c.l) + '"' + (c.t.length > 9 ? ' class="v3-largo"' : "") + ">" + esc(c.t) + "</b><small>" + (c.l === "fr" ? (window.PLX_LANG === "en" ? "EN" : "FR") : "ES") + '</small></span><span class="v3-carta-r"><img src="' + IMG + 'saludar.webp" alt=""></span></button>'; }).join("") + "</div></div>";
    },
    arranca: function(S0){
      M = { quien: S0.host ? "me" : "op", abiertas: [], halladas: {}, pts: { me: 0, op: 0 }, fin: false, red: MEMORIA.red, t: ahora(), vistas: {}, espera: false };
      MEMORIA.pinta(S0); tic(function(){ MEMORIA.reloj(S0); }, 200);
      if (bot(S0) && M.quien === "op") MEMORIA.botTurno(S0);
    },
    pinta: function(S0){
      marcador("me", "<em>" + M.pts.me + "</em>"); marcador("opp", "<em>" + M.pts.op + "</em>");
      var t = q("#plx1v1 .v3-turno"); if (t) { t.textContent = M.quien === "me" ? "🃏 Tu turno: busca una pareja" : "⏳ Turno de " + ((S0.opp && S0.opp.nick) || "tu rival"); t.dataset.q = M.quien; }
      qa("#plx1v1 .v3-carta").forEach(function(b){
        var i = +b.dataset.c, h = M.halladas[i];
        b.classList.toggle("abierta", M.abiertas.indexOf(i) >= 0 || !!h);
        b.classList.toggle("hallada", !!h); b.dataset.de = h || "";
        b.disabled = !!h || M.quien !== "me" || M.espera || M.abiertas.indexOf(i) >= 0;
      });
    },
    voltea: function(S0, i, quien){
      if (!M || M.fin || M.espera || M.abiertas.indexOf(i) >= 0 || M.halladas[i]) return;
      if (quien === "me") envia(S0, { k: "v", c: i });
      sfx("carta"); M.abiertas.push(i); M.t = ahora(); M.vistas[i] = 1; MEMORIA.pinta(S0);
      if (M.abiertas.length === 2) {
        var a = S0.datos.cartas[M.abiertas[0]], b = S0.datos.cartas[M.abiertas[1]];
        if (a.p === b.p) {
          M.halladas[M.abiertas[0]] = M.halladas[M.abiertas[1]] = quien; M.pts[quien]++; M.abiertas = []; sfx(quien === "me" ? "ok" : "opp");
          var el = q('#plx1v1 .v3-carta[data-c="' + i + '"]'), c = centro(el); fx().chispas(c.x, c.y, { n: 16, v: 280, cols: quien === "me" ? ["#2F6BFF", "#FFC83D", "#fff"] : ["#FF6B8B", "#FFC83D", "#fff"] });
          MEMORIA.pinta(S0);
          if (M.pts.me + M.pts.op >= S0.datos.cartas.length / 2) return MEMORIA.termina(S0);
          if (bot(S0) && quien === "op") MEMORIA.botTurno(S0);
        } else {
          M.espera = true; MEMORIA.pinta(S0);
          setTimeout(function(){ if (!M) return; M.abiertas = []; M.espera = false; M.quien = quien === "me" ? "op" : "me"; M.t = ahora(); MEMORIA.pinta(S0); if (bot(S0) && M.quien === "op") MEMORIA.botTurno(S0); }, 1200);
        }
      }
    },
    /* quien tiene el turno y no juega en 9 s, lo pierde (lo anuncia su propio dispositivo) */
    reloj: function(S0){
      if (!M || M.fin) return;
      var r = Math.max(0, Math.ceil((MEMORIA.TURNO - (ahora() - M.t)) / 1000)), c = q("#plx1v1 .v3-centro");
      if (c) c.innerHTML = "<small>" + ico("memoria") + "Memoria</small>" + reloj(r);
      if (r <= 0 && M.quien === "me" && !M.espera) { envia(S0, { k: "pasa" }); MEMORIA.pasa(S0); }
    },
    pasa: function(S0){ M.abiertas = []; M.quien = M.quien === "me" ? "op" : "me"; M.t = ahora(); MEMORIA.pinta(S0); if (bot(S0) && M.quien === "op") MEMORIA.botTurno(S0); },
    red: function(p){ var S0 = A.S(); if (p.k === "v" && M.quien === "op") MEMORIA.voltea(S0, p.c, "op"); else if (p.k === "pasa" && M.quien === "op") MEMORIA.pasa(S0); },
    /* Manzana recuerda lo que vio (no siempre) */
    botTurno: function(S0){
      var cartas = S0.datos.cartas, libres = function(){ return cartas.map(function(_, i){ return i; }).filter(function(i){ return !M.halladas[i] && M.abiertas.indexOf(i) < 0; }); };
      var memoria = .6 + (precision(S0) - .6);
      var elige = function(){
        var L = libres(); if (!L.length) return null;
        if (M.abiertas.length === 1) { var a = cartas[M.abiertas[0]], par = L.filter(function(i){ return cartas[i].p === a.p && M.vistas[i]; })[0]; if (par != null && Math.random() < memoria) return par; }
        else { for (var x = 0; x < L.length; x++) for (var y = x + 1; y < L.length; y++) if (M.vistas[L[x]] && M.vistas[L[y]] && cartas[L[x]].p === cartas[L[y]].p && Math.random() < memoria) return L[x]; }
        var nuevas = L.filter(function(i){ return !M.vistas[i]; }); return (nuevas.length ? nuevas : L)[Math.floor(Math.random() * (nuevas.length ? nuevas : L).length)];
      };
      var paso = function(){ if (!M || M.fin || M.quien !== "op" || M.espera) return; var c = elige(); if (c == null) return; recibe({ k: "v", c: c }); if (M && M.abiertas.length === 1) luego(paso, 900 + Math.random() * 600); };
      luego(paso, 1100 + Math.random() * 700);
    },
    termina: function(S0){ if (!M || M.fin) return; M.fin = true; clearInterval(relojI); var me = M.pts.me, op = M.pts.op, a = []; for (var i = 0; i < me; i++) a.push({ ok: true, ms: 5000 }); setTimeout(function(){ A.fin(me, op, a); }, 1300); }
  };

  var PROPIOS = { tira: TIRA, bomba: BOMBA, touche: TOUCHE, tecleo: TECLEO, ordena: ORDENA, memoria: MEMORIA };

  /* ================================================================== modos de rondas: comodines, apuestas, escucha */
  var COMOD = [["mitad", "50/50", "Quita una opción falsa"], ["x2", "×2", "Esta pregunta vale el doble"], ["escudo", "🛡️", "Si fallas, no pierdes la racha"], ["hielo", "❄️", "Congela al rival 3 s"]];
  function inicia(S0, p, local){
    S0.v3 = { comod: [], usado: {}, x2: false, escudo: false, apuesta: {}, oido: {}, hielo: 0 };
    if (S0.modo === "clasico") S0.v3.comod = ["mitad"];   // uno de regalo para empezar
  }
  function ajusta(S0, o){
    var v = S0.v3 || {}, r = { pts: o.pts };
    if (S0.modo === "clasico") {
      if (o.ok && v.x2) r.pts = o.pts * 2;
      if (!o.ok && v.escudo) { r.racha = S0.streak; r.pts = 0; }
      v.x2 = false; v.escudo = false;
      if (o.ok && S0.streak >= 2 && S0.streak % 2 === 0 && v.comod.length < 2) { var libres = COMOD.map(function(c){ return c[0]; }).filter(function(c){ return v.comod.indexOf(c) < 0; }); var nuevo = libres[Math.floor(Math.random() * libres.length)]; if (nuevo) { v.comod.push(nuevo); setTimeout(function(){ avisoFlota("🎁 ¡Comodín " + COMOD.filter(function(c){ return c[0] === nuevo; })[0][1] + "!"); }, 500); } }
    }
    if (S0.modo === "apuesta") { var b = v.apuesta[o.r] || 1; r.pts = o.ok ? 100 * b + Math.round(40 * (S0.rms - o.ms) / S0.rms) : -40 * b; }
    return r;
  }
  function ajustaBot(S0, o){
    if (S0.modo === "apuesta") { var b = o.ok ? (Math.random() < .6 ? 3 : 2) : (Math.random() < .5 ? 1 : 2); return o.ok ? 100 * b + 20 : -40 * b; }
    if (S0.modo === "clasico" && !S0.v3.botHielo && o.r >= 2 && Math.random() < .35) { S0.v3.botHielo = true; setTimeout(function(){ recibe({ k: "hielo" }); }, 300); }
    return o.pts;
  }
  function hielo(S0){
    if (!S0 || S0.stage !== "match") return;
    S0.v3.hielo = ahora() + 3000; sfx("ko");
    var z = q("#plx1v1 .v1-opts"); if (z) { z.classList.add("v3-helado"); setTimeout(function(){ z.classList.remove("v3-helado"); }, 3000); }
    avisoFlota("❄️ ¡" + esc((S0.opp && S0.opp.nick) || "Tu rival") + " te congeló!");
  }
  function avisoFlota(t){ var d = D.createElement("div"); d.className = "v3-flota"; d.innerHTML = t; var r = q("#plx1v1"); if (!r) return; r.appendChild(d); setTimeout(function(){ d.remove(); }, 1900); }
  function usaComodin(S0, c){
    var v = S0.v3; if (!v || v.comod.indexOf(c) < 0 || S0.stage !== "match" || S0.phase !== "q" || S0.ans[S0.round] != null) return;
    v.comod.splice(v.comod.indexOf(c), 1); sfx("combo", 2);
    if (c === "x2") v.x2 = true;
    if (c === "escudo") v.escudo = true;
    if (c === "hielo") { if (S0.bot) { /* Manzana se congela: responde 3 s más tarde */ } else envia(S0, { k: "hielo" }); avisoFlota("❄️ Congelaste a " + esc((S0.opp && S0.opp.nick) || "tu rival")); }
    if (c === "mitad") { var qq = S0.qs[S0.round], malas = qq.o.map(function(_, i){ return i; }).filter(function(i){ return i !== qq.a; }), quitar = A.shuf(malas, Math.random).slice(0, qq.o.length > 3 ? 2 : 1); quitar.forEach(function(i){ var b = q('#plx1v1 .v1-o[data-a="' + i + '"]'); if (b) { b.disabled = true; b.classList.add("dim", "v3-tachada"); } }); }
    barraComodines(S0);
  }
  function barraComodines(S0){
    var z = q("#plx1v1 .v3-comod"); if (!z) return;
    var v = S0.v3, activo = v.x2 ? "×2 activo" : v.escudo ? "🛡️ escudo activo" : "";
    z.innerHTML = (v.comod.length ? v.comod.map(function(c){ var C = COMOD.filter(function(x){ return x[0] === c; })[0]; return '<button type="button" class="pz-chip v3-cm" data-v3="comod" data-c="' + c + '" title="' + C[2] + '"><b>' + C[1] + "</b><small>" + C[2] + "</small></button>"; }).join("") : '<small class="v3-cm-nada">Acierta 2 seguidas y ganas un comodín</small>') + (activo ? '<em class="v3-cm-on">' + activo + "</em>" : "");
  }

  /* ================================================================== pregunta de oro */
  function oro(S0){
    var Q = S0.oroQ; M = { oro: true, t: ahora(), r: {}, fin: false };
    var b = q("#plx1v1 .v3-oro-b"); if (!b) return;
    b.innerHTML = '<div class="v3-oro"><span class="v3-oro-k">⚡ EMPATE</span><h2>Pregunta de oro</h2><p>Gana quien acierte primero.</p><div class="pz-card v3-preg v3-preg--oro"><h3 class="v3-q">«' + esc(Q.q) + '»</h3>' + opciones(Q, "oro") + '<div class="v3-barra"><i></i></div></div></div>';
    sfx("oro");
    tic(function(){ var e = (ahora() - M.t) / 8000, i = q("#plx1v1 .v3-oro .v3-barra i"); if (i) i.style.transform = "scaleX(" + Math.max(0, 1 - e) + ")"; if (e >= 1 && S0.host) oroDecide(S0, true); }, 100);
    if (S0.bot) { var ms = 1500 + Math.random() * 5000, ok = Math.random() < precision(S0); luego(function(){ recibe({ k: "oro", ok: ok, ms: ms }); }, ms); }
  }
  function oroResp(S0, i){
    if (!M || !M.oro || M.r.me) return;
    var ok = i === S0.oroQ.a, ms = ahora() - M.t; M.r.me = { ok: ok, ms: ms }; sfx(ok ? "ok" : "ko");
    var b = q('#plx1v1 .v3-oro [data-i="' + i + '"]'); if (b) b.classList.add(ok ? "ok" : "ko"); qa("#plx1v1 .v3-oro .v3-op").forEach(function(x){ x.disabled = true; });
    envia(S0, { k: "oro", ok: ok, ms: ms }); oroDecide(S0);
  }
  function oroRed(S0, p, deBot){ if (!M || !M.oro) return; if (p.k === "oro") { M.r.op = { ok: p.ok, ms: p.ms }; oroDecide(S0); } else if (p.k === "orofin" && !S0.host) oroCierra(S0, p.gana); }
  function oroDecide(S0, tiempo){
    if (!S0.host || !M || !M.oro || M.fin) return;
    var a = M.r.me, b = M.r.op;
    if (!tiempo && !(a && b)) {
      if (((a && a.ok) || (b && b.ok)) && !M.espT) M.espT = setTimeout(function(){ if (M && M.oro) oroDecide(S0, true); }, 600);
      return;
    }
    clearTimeout(M.espT);
    var gana = a && a.ok && (!b || !b.ok || a.ms <= b.ms) ? "h" : b && b.ok ? "g" : null;
    envia(S0, { k: "orofin", gana: gana }); oroCierra(S0, gana);
  }
  function oroCierra(S0, gana){ if (!M || M.fin) return; M.fin = true; clearInterval(relojI); var yo = S0.host ? "h" : "g", r = gana ? (gana === yo ? "win" : "lose") : "draw"; setTimeout(function(){ M = null; A.oroFin(r); }, 900); }

  /* ================================================================== reacciones (stickers de Manzana 2D) */
  var RX = [["pulgar", "👍"], ["corazones", "😍"], ["celebrar", "🎉"], ["sorpresa", "😲"], ["enojado", "😤"], ["facepalm", "🤦"]];
  var rxUlt = 0;
  function barraRx(){ return '<div class="v3-rx" role="group" aria-label="Reacciones">' + RX.map(function(r){ return '<button type="button" class="v3-rx-b" data-v3="rx" data-k="' + r[0] + '" aria-label="Reacción ' + r[1] + '"><img src="' + IMG + r[0] + '.webp" alt=""></button>'; }).join("") + "</div>"; }
  function rx(S0, p, mio){
    if (!p || !RX.some(function(r){ return r[0] === p.k; })) return;
    var r = q("#plx1v1"); if (!r) return;
    var d = D.createElement("div"); d.className = "v3-rxf " + (mio ? "v3-rxf--a" : "v3-rxf--b"); d.innerHTML = '<img src="' + IMG + p.k + '.webp" alt="">'; r.appendChild(d);
    sfx("rx"); setTimeout(function(){ d.remove(); }, 1900);
  }
  function mandaRx(S0, k){
    if (ahora() - rxUlt < 2500) return; rxUlt = ahora();
    rx(S0, { k: k }, true); if (!S0.bot) A.send("rx", { k: k });
    else if (Math.random() < .5) luego(function(){ rx(S0, { k: ["pulgar", "corazones", "sorpresa", "facepalm"][Math.floor(Math.random() * 4)] }, false); }, 1200);
  }

  /* ================================================================== ruleta de modos (al empezar) */
  function ruleta(S0){
    quitaRuleta();
    if (quieto()) return;
    var lista = (S0.ruleta && S0.ruleta.length ? S0.ruleta : [S0.modo]).map(modo), elegido = modo(S0.modo);
    var tira = []; for (var i = 0; i < 18; i++) tira.push(lista[i % lista.length]); tira.push(elegido);
    var d = D.createElement("div"); d.className = "v3-ruleta"; d.setAttribute("aria-hidden", "true");
    d.innerHTML = '<div class="v3-ruleta-k">' + (S0.serie ? "Partida " + S0.serie.num + " de 3 · " + S0.serie.me + "–" + S0.serie.opp : "🎰 La ruleta elige el modo") + '</div><div class="v3-ruleta-v"><div class="v3-ruleta-t">' + tira.map(function(m){ return '<div class="v3-ruleta-i">' + ico(m.id) + "<b>" + m.n + "</b></div>"; }).join("") + '</div></div><p class="v3-ruleta-d">' + esc(elegido.d) + (elegido.id === delDia() ? ' · <em>Modo del día: +50 % copas</em>' : "") + "</p>";
    var r = q("#plx1v1"); if (!r) return; r.appendChild(d);
    var t = d.querySelector(".v3-ruleta-t"), alto = 64, n = tira.length - 1;
    requestAnimationFrame(function(){ t.style.transition = "transform 1.9s cubic-bezier(.12,.75,.2,1)"; t.style.transform = "translateY(" + (-n * alto) + "px)"; });
    var k = 0, ti = setInterval(function(){ if (++k > 14) return clearInterval(ti); sfx("ruleta"); }, 110 + k * 8);
    setTimeout(function(){ d.classList.add("v3-ruleta--fin"); sfx("combo", 3); }, 2000);
    setTimeout(function(){ d.classList.add("v3-ruleta--va"); }, 2700);
    setTimeout(function(){ if (d.parentNode) d.remove(); }, 3200);
  }
  function quitaRuleta(){ qa("#plx1v1 .v3-ruleta").forEach(function(x){ x.remove(); }); }

  /* ================================================================== retoques después de cada repintada de plx22 */
  function trasPintar(S0, el){
    var st = S0.stage;
    if (st === "oro" && M && M.oro && !el.querySelector(".v3-oro")) { var mm = M; M = null; clearInterval(relojI); oro(S0); M.r = mm.r; M.t = mm.t; }
    if (st === "count") { if (S0.ruletaG !== S0.gid) { S0.ruletaG = S0.gid; ruleta(S0); } var r = el.querySelector(".v1-rules"); if (r) r.innerHTML = ico(S0.modo) + " <b>" + esc(modo(S0.modo).n) + "</b> · " + esc(modo(S0.modo).d); }
    if (st === "match" && !S0.propio) rondas(S0, el);
    if (st === "match" && S0.propio && !el.querySelector(".v3-rx")) el.insertAdjacentHTML("beforeend", barraRx());
    if (st === "end") final(S0, el);
  }
  function rondas(S0, el){
    var qq = S0.qs[S0.round]; if (!qq) return;
    var cuerpo = el.querySelector(".v1-q"); if (!cuerpo) return;
    var rev = S0.phase === "rev", my = S0.ans[S0.round];
    if (!el.querySelector(".v3-rx")) el.insertAdjacentHTML("beforeend", barraRx());
    if (S0.modo === "clasico") { cuerpo.insertAdjacentHTML("beforeend", '<div class="v3-comod"></div>'); barraComodines(S0); if (S0.v3.hielo > ahora()) { var z = el.querySelector(".v1-opts"); if (z) z.classList.add("v3-helado"); } }
    if (S0.modo === "escucha") {
      var qt = el.querySelector(".v1-qt");
      if (qt) qt.innerHTML = rev ? "«" + esc(qq.audio) + "»" : '<button type="button" class="v3-oir" data-v3="oir">🔊 <span>Escuchar otra vez</span></button>';
      if (!rev && !S0.v3.oido[S0.round]) { S0.v3.oido[S0.round] = 1; setTimeout(function(){ try { speak(qq.audio, .95); } catch (e) {} }, 250); }
    }
    if (S0.modo === "apuesta" && !rev && !my) {
      var b = S0.v3.apuesta[S0.round];
      if (!b) {
        var ops = el.querySelector(".v1-opts"); if (ops) ops.classList.add("v3-oculto");
        cuerpo.insertAdjacentHTML("beforeend", '<div class="v3-apuesta"><b>🎲 ¿Cuánto apuestas a que la sabes?</b><div>' + [1, 2, 3].map(function(n){ return '<button type="button" class="pz-btn ' + (n === 3 ? "pz-btn--oro" : "pz-btn--liso") + '" data-v3="apuesta" data-n="' + n + '">' + n + (n === 1 ? " ficha" : " fichas") + "</button>"; }).join("") + "</div><small>Aciertas: +100 por ficha · Fallas: −40 por ficha</small></div>");
        clearTimeout(S0.v3.apT); var r = S0.round; S0.v3.apT = setTimeout(function(){ if (S0.round === r && !S0.v3.apuesta[r]) apostar(S0, 1); }, 3000);
      } else cuerpo.insertAdjacentHTML("afterbegin", '<span class="pz-pill pz-pill--sm v3-ap-pill">🎲 ' + b + (b === 1 ? " ficha" : " fichas") + "</span>");
    }
    if (S0.modo === "apuesta" && my) cuerpo.insertAdjacentHTML("afterbegin", '<span class="pz-pill pz-pill--sm v3-ap-pill">🎲 ' + (S0.v3.apuesta[S0.round] || 1) + " · " + (my.pts >= 0 ? "+" : "") + my.pts + "</span>");
  }
  function apostar(S0, n){ if (S0.v3.apuesta[S0.round]) return; S0.v3.apuesta[S0.round] = n; sfx("combo", n); A.paint(); }
  function final(S0, el){
    var R = S0.result || {}, b = el.querySelector(".v1-end"); if (!b || b.querySelector(".v3-fin")) return;
    var m = modo(R.modo || S0.modo), s = S0.serie;
    var extra = '<div class="v3-fin"><span class="pz-pill v3-fin-m">' + ico(m.id) + esc(m.n) + "</span>" + (R.oro ? '<span class="pz-pill pz-pill--oro">⚡ Decidió la pregunta de oro</span>' : "") + (R.delDia ? '<span class="pz-pill pz-pill--oro">Modo del día ×1,5</span>' : "") + "</div>";
    if (s) extra += '<div class="v3-serie"><b>Al mejor de 3</b><span>' + esc(A.ME.nick) + " <em>" + s.me + "</em> – <em>" + s.opp + "</em> " + esc((S0.opp && S0.opp.nick) || "Rival") + "</span>" + (R.serieSigue ? "<small>Sigue la serie: la ruleta elige otro modo</small>" : "<small>" + (s.me > s.opp ? "🏆 ¡Ganaste la serie!" : s.me < s.opp ? "Ganó la serie " + esc((S0.opp && S0.opp.nick) || "tu rival") : "Serie empatada") + "</small>") + "</div>";
    var ban = b.querySelector(".v1-ban"); if (ban) ban.insertAdjacentHTML("afterend", extra); else b.insertAdjacentHTML("afterbegin", extra);
    var rv = b.querySelector('[data-v1="rematch"]'); if (rv && R.serieSigue) rv.innerHTML = S0.myRematch ? "Esperando al rival…" : "▶ Siguiente partida";
    /* la revancha sortea otro modo: no hace falta decirlo en el botón (en condensada se partía en dos líneas) */
  }

  /* ================================================================== sala: elegir modos, serie y modo del día */
  function lobbyHTML(S0){
    var mios = marcados(), dd = modo(delDia()), st = (G().duels || {}).modos || {};
    return '<section class="v3-sala" aria-label="Modos de duelo"><div class="v3-sala-h"><b>Modos de duelo</b><small>La ruleta elige entre los que marques' + (mios.length === 1 ? " (solo uno: siempre ese)" : "") + "</small></div>" +
      '<button type="button" class="v3-dia" data-v3="soloDia"><span class="v3-dia-ic">' + ico(dd.id) + "</span><b>Modo del día: " + esc(dd.n) + "</b><em>+50 % copas</em></button>" +
      '<div class="v3-grid">' + MODOS.map(function(m){ var on = mios.indexOf(m.id) >= 0, e = st[m.id]; return '<button type="button" class="pz-opt v3-m" data-v3="modo" data-m="' + m.id + '" aria-pressed="' + on + '"><span class="v3-m-ic">' + ico(m.id) + "</span><b>" + esc(m.n) + "</b><small>" + esc(m.d) + "</small>" + (e && e.j ? '<em class="v3-m-st">' + e.w + "/" + e.j + "</em>" : "") + (m.id === dd.id ? '<i class="v3-m-dia">HOY</i>' : "") + "</button>"; }).join("") + "</div>" +
      '<div class="v3-serie-f"><span><b>Al mejor de 3</b><small>Tres modos distintos; gana quien se lleve dos. Vale +10 copas.</small></span>' + (K ? K.sw(quiereSerie(), "Al mejor de 3", { attrs: { "data-v3": "serie" } }) : "") + "</div></section>";
  }
  function prefs(){ return { modos: marcados(), serie: quiereSerie() }; }

  /* ================================================================== eventos */
  D.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest("[data-v3]") : null; if (!b) return;
    var S0 = A.S(); if (!S0) return;
    var a = b.getAttribute("data-v3"); e.preventDefault();
    if (a === "modo") { var mios = marcados(), m = b.dataset.m, i = mios.indexOf(m); if (i >= 0) { if (mios.length === 1) return toast("Deja al menos un modo marcado"); mios.splice(i, 1); } else mios.push(m); G().v1modos = mios; try { save(!0); } catch (x) {} return A.paint(); }
    if (a === "soloDia") { G().v1modos = [delDia()]; try { save(!0); } catch (x) {} toast("Solo el modo del día: " + modo(delDia()).n); return A.paint(); }
    if (a === "serie") { G().v1serie = !quiereSerie(); try { save(!0); } catch (x) {} return A.paint(); }
    if (a === "rx") return mandaRx(S0, b.dataset.k);
    if (a === "comod") return usaComodin(S0, b.dataset.c);
    if (a === "apuesta") return apostar(S0, +b.dataset.n);
    if (a === "oir") { try { speak(S0.qs[S0.round].audio, .85); } catch (x) {} return; }
    if (a === "oro") return oroResp(S0, +b.dataset.i);
    if (!M) return;
    if (a === "tira") return TIRA.responde(S0, +b.dataset.i);
    if (a === "bomba") return BOMBA.responde(S0, +b.dataset.i);
    if (a === "touche") return TOUCHE.responde(S0, +b.dataset.i);
    if (a === "parada") return TOUCHE.para_(S0, b.dataset.i === "1");
    if (a === "acento") { var inp = q("#plx1v1 .v3-in"); if (inp) { var p0 = inp.selectionStart || inp.value.length; inp.value = inp.value.slice(0, p0) + b.dataset.a + inp.value.slice(inp.selectionEnd || p0); inp.focus(); try { inp.setSelectionRange(p0 + 1, p0 + 1); } catch (x) {} TECLEO.escribe(S0); } return; }
    if (a === "ficha") return ORDENA.toca(S0, +b.dataset.k);
    if (a === "quita") return ORDENA.quita(S0, +b.dataset.j);
    if (a === "carta") { if (M.quien === "me") MEMORIA.voltea(S0, +b.dataset.c, "me"); return; }
  });
  /* congelado: plx22 no deja responder mientras dura */
  D.addEventListener("click", function(e){
    var S0 = A.S(); if (!S0 || !S0.v3 || !(S0.v3.hielo > ahora())) return;
    var b = e.target && e.target.closest ? e.target.closest('#plx1v1 [data-v1="ans"]') : null; if (!b) return;
    e.stopImmediatePropagation(); e.preventDefault(); sfx("tick");
  }, true);
  /* en PC, 1-3 responde también en los modos propios */
  D.addEventListener("keydown", function(e){
    var S0 = A.S(); if (!S0 || !M || e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (/^[1-3]$/.test(e.key)) { var b = qa("#plx1v1 .v3-op:not([disabled])")[+e.key - 1]; if (b) b.click(); }
  });

  window.PLX1V1X = {
    icono: ico,
    MODOS: MODOS, prefs: prefs, prepara: prepara, inicia: inicia, ajusta: ajusta, ajustaBot: ajustaBot,
    propio: function(m){ return !!PROPIOS[m]; },
    titulo: function(S0){ return modo(S0.modo).n; },
    monta: function(S0){ var P = PROPIOS[S0.modo]; return '<div class="v3" data-modo="' + S0.modo + '" data-gid="' + S0.gid + '">' + cabecera(S0) + P.monta(S0) + "</div>"; },
    arranca: function(S0){ PROPIOS[S0.modo].arranca(S0); },
    red: red, rx: rx, para: para, oro: oro, trasPintar: trasPintar, lobbyHTML: lobbyHTML,
    serieDe: serieDe, serieSuma: serieSuma, serieNueva: serieNueva, delDia: delDia,
    /* pruebas: forzar el próximo modo (solo contra Manzana o en sala) */
    forzar: function(m){ var S0 = A.S(); if (S0) S0.forzar = m; },
    estado: function(){ return M; }
  };

  /* ================================================================== estilo */
  var css = [
    /* sala */
    ".v3-ico{width:22px;height:22px;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle}.v3-ico .v3-ico-f{fill:currentColor;stroke:none}",
    ".v3-sala{margin:14px 0 12px;display:grid;gap:10px}",
    ".v3-sala-h{display:grid;gap:2px}.v3-sala-h b{font:800 1.05rem var(--f-tit);color:#fff}.v3-sala-h small{color:#A9B1C7;font-size:.82rem}",
    ".v3-dia{all:unset;cursor:pointer;display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:16px;background:linear-gradient(110deg,#FFC83D,#FF9F1C);color:#1F2430;box-shadow:0 4px 0 #B07C00}",
    ".v3-dia img{width:40px;height:40px;object-fit:contain;margin:-8px 0}.v3-dia b{flex:1;font:800 .95rem var(--f-tit)}.v3-dia em{font:900 .78rem var(--f-tx);font-style:normal;background:#1F2430;color:#FFC83D;padding:3px 8px;border-radius:99px}",
    ".v3-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}",
    "@media (max-width:420px){.v3-grid{grid-template-columns:repeat(2,1fr)}}",
    "@layer pz{html #plx1v1 .v3-m{position:relative;display:grid!important;justify-items:start;align-content:start;gap:2px;min-height:96px;padding:10px 10px 10px 12px!important;text-align:left;border-radius:16px!important;background:#1D2335!important;color:#F5F6FA!important;box-shadow:inset 0 0 0 1.5px #343D59!important;opacity:.62}" +
      "html #plx1v1 .v3-m[aria-pressed=true]{opacity:1;background:linear-gradient(160deg,#233A80,#1D2335)!important;box-shadow:inset 0 0 0 2px #4C82FF,0 6px 16px -10px #2F6BFF!important}}",
    ".v3-m-ic{width:40px;height:40px;object-fit:contain;margin:-4px 0 2px -2px}.v3-m b{font:800 .88rem/1.15 var(--f-tit)}.v3-m small{font:500 .72rem/1.25 var(--f-tx);color:#A9B1C7}",
    ".v3-m-st{position:absolute;top:8px;right:8px;font:800 .66rem var(--f-tx);font-style:normal;color:#9DB8FF}",
    ".v3-m-dia{position:absolute;top:-7px;right:8px;font:900 .6rem var(--f-tx);font-style:normal;background:#FFC83D;color:#1F2430;padding:2px 6px;border-radius:99px;letter-spacing:.06em}",
    ".v3-serie-f{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-radius:16px;background:#1D2335;box-shadow:inset 0 0 0 1.5px #343D59}",
    ".v3-serie-f b{display:block;color:#fff;font:800 .95rem var(--f-tit)}.v3-serie-f small{color:#A9B1C7;font-size:.78rem}",
    /* modos propios: cabecera común */
    ".v3{display:flex;flex-direction:column;min-height:calc(100dvh - 60px);padding-bottom:74px;box-sizing:border-box}",
    ".v3-cab{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:6px;padding:8px 10px;background:rgba(20,24,38,.86);position:sticky;top:58px;z-index:3}",
    ".v3-j{display:flex;align-items:center;gap:6px;min-width:0}.v3-j--b{flex-direction:row-reverse;text-align:right}",
    ".v3-ret{width:50px;height:50px;flex:none;display:grid;place-items:center;border-radius:16px;background:radial-gradient(circle at 50% 70%,rgba(47,107,255,.5),transparent 70%)}.v3-j--b .v3-ret{background:radial-gradient(circle at 50% 70%,rgba(255,107,139,.5),transparent 70%)}",
    ".v3-ret img{width:58px;height:58px;object-fit:contain;margin-top:-6px}",
    ".v3-jt{display:grid;min-width:0}.v3-jt b{font:800 .8rem var(--f-tit);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px}",
    ".v3-mar{font:900 1.15rem/1.1 var(--f-tit);color:#FFD875}.v3-j--b .v3-mar{color:#FFA3B7}.v3-mar em{font-style:normal}",
    ".v3-centro{display:grid;justify-items:center;gap:1px;color:#fff}.v3-centro small{font:800 .66rem var(--f-tx);letter-spacing:.04em;color:#C9D0E6;white-space:nowrap}",
    ".v3-reloj{display:flex;align-items:baseline;gap:1px}.v3-reloj b{font:900 1.35rem var(--f-tit)}.v3-reloj small{font-size:.7rem;color:#A9B1C7}",
    ".v3-vs-mini{font:900 1rem var(--f-tit);color:#FFC83D}",
    ".v3-cor{width:18px;height:18px;object-fit:contain;margin-right:2px;vertical-align:middle;filter:drop-shadow(0 0 6px rgba(255,107,139,.6))}.v3-cor--fuera{filter:grayscale(1) brightness(.45);opacity:.6}",
    ".v3-puntos{display:inline-flex;gap:3px}.v3-puntos i{width:11px;height:11px;border-radius:50%;background:#343D59}.v3-puntos i.on{background:#FFC83D;box-shadow:0 0 8px #FFC83D}",
    ".v3-cuerpo{width:min(640px,100%);margin:0 auto;padding:10px 14px;box-sizing:border-box;display:grid;gap:12px}",
    "@media (min-width:760px){.v3-cab{width:min(760px,100%);margin:0 auto;border-radius:0 0 20px 20px;box-sizing:border-box}.v3-cuerpo{width:min(720px,100%)}.v3-cancha,.v3-ring2,.v3-pista{height:170px}.v3-cancha{grid-template-columns:120px 1fr 120px}.v3-cancha img,.v3-lado img,.v3-esg{width:140px;height:140px;max-width:none}.v3-tablero{width:min(560px,100%);margin:0 auto}}",
    "@layer pz{html #plx1v1 .v3-preg{display:grid!important;gap:8px;background:#1D2335!important;color:#fff!important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.08)!important;padding:14px!important}" +
      "html #plx1v1 .v3-op{width:100%;min-height:52px;justify-content:flex-start!important;background:#262D43!important;color:#fff!important;font-weight:700!important}" +
      "html #plx1v1 .v3-op.ok{background:#113C2C!important;box-shadow:inset 0 0 0 2px #35C97A!important}html #plx1v1 .v3-op.ko{background:#43182A!important;box-shadow:inset 0 0 0 2px #FF6B70!important}}",
    ".v3-preg small{font:800 .72rem var(--f-tx);letter-spacing:.06em;text-transform:uppercase;color:#9DB8FF}",
    ".v3-q{margin:0;font:800 1.35rem/1.25 var(--f-tit);color:#fff}",
    ".v3-ops{display:grid;gap:8px}.v3-ops--vf{grid-template-columns:1fr 1fr}",
    ".v3-espera{opacity:.75}",
    /* tira */
    ".v3-cancha{position:relative;display:grid;grid-template-columns:72px 1fr 72px;align-items:center;gap:0;height:110px}",
    ".v3-cancha img{width:86px;height:86px;object-fit:contain;filter:drop-shadow(0 8px 10px rgba(0,0,0,.5))}.v3-tira-rv{justify-self:end}",
    ".v3-cuerda{position:relative;height:40px}.v3-cuerda-l{position:absolute;left:-14px;right:-14px;top:50%;height:6px;margin-top:-3px;border-radius:3px;background:repeating-linear-gradient(90deg,#C9A36B 0 8px,#9C7A45 8px 12px)}",
    ".v3-nudo{position:absolute;top:50%;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;background:radial-gradient(circle,#fff,#FFC83D 55%,#D99A00);box-shadow:0 0 16px rgba(255,200,61,.8);transition:left .45s cubic-bezier(.2,1.4,.4,1)}",
    ".v3-meta{position:absolute;top:2px;bottom:2px;width:3px;border-radius:2px}.v3-meta--a{left:8%;background:#2F6BFF}.v3-meta--b{right:8%;background:#FF6B8B}",
    ".v3-cuerda[data-lado=a] .v3-cuerda-l{box-shadow:0 0 12px rgba(47,107,255,.7)}.v3-cuerda[data-lado=b] .v3-cuerda-l{box-shadow:0 0 12px rgba(255,107,139,.7)}",
    /* bomba */
    ".v3-ring2{display:grid;grid-template-columns:1fr auto 1fr;align-items:end;height:130px}",
    ".v3-lado img{width:100%;max-width:110px;height:110px;object-fit:contain;display:block;margin:0 auto;filter:drop-shadow(0 8px 10px rgba(0,0,0,.5))}",
    ".v3-bombazona{position:relative;width:90px;height:110px}",
    ".v3-bomb{position:absolute;left:50%;top:44%;width:52px;height:52px;border-radius:50%;transform:translate(-50%,-50%);transition:left .35s cubic-bezier(.3,1.3,.4,1);background:radial-gradient(circle at 34% 30%,#6B7390 0 12%,#2A2F45 30%,#0B0E18 75%);box-shadow:0 8px 14px rgba(0,0,0,.55),inset -4px -6px 0 rgba(0,0,0,.35)}",
    ".v3-bomb::before{content:'';position:absolute;left:50%;top:-8px;width:14px;height:12px;margin-left:-7px;border-radius:3px;background:#4A5263}",
    ".v3-chispa{position:absolute;left:calc(62% + 22px);top:-14px;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle,#fff,#FFC83D 45%,rgba(255,138,61,0) 70%);animation:v3Chispa .18s ease-in-out infinite alternate}",
    "@keyframes v3Chispa{to{transform:scale(1.5)}}",
    ".v3-bombazona[data-quien=me] .v3-bomb{left:-38%}.v3-bombazona[data-quien=op] .v3-bomb{left:138%}",
    ".v3-mecha{position:absolute;left:62%;top:-9px;width:26px;height:4px;border-radius:2px;background:#C9A36B;transform-origin:left;transform:rotate(-30deg)}",
    ".v3-bomb--prisa{animation:v3Late .25s ease-in-out infinite alternate}@keyframes v3Late{to{transform:translate(-50%,-50%) scale(1.18)}}",
    ".v3-temblor{animation:v3Temblor .55s ease}@keyframes v3Temblor{0%,100%{transform:none}15%{transform:translate(-8px,4px)}30%{transform:translate(7px,-5px)}50%{transform:translate(-5px,3px)}70%{transform:translate(4px,-2px)}}",
    /* touché */
    ".v3-pista{position:relative;display:grid;grid-template-columns:1fr auto 1fr;align-items:end;height:140px;background:linear-gradient(180deg,transparent 70%,rgba(255,200,61,.12));border-radius:18px}",
    ".v3-esg{width:100%;max-width:130px;height:130px;object-fit:contain;justify-self:center;filter:drop-shadow(0 10px 12px rgba(0,0,0,.5))}",
    ".v3-touche-t{align-self:center;font:900 1.1rem var(--f-tit);letter-spacing:.12em;color:#C9D0E6}",
    ".v3-azul{color:#7FA6FF;text-shadow:0 0 16px rgba(47,107,255,.8)}.v3-rosa{color:#FF8FA6;text-shadow:0 0 16px rgba(255,107,139,.8)}.v3-oro{color:#FFC83D;text-shadow:0 0 16px rgba(255,200,61,.8)}.v3-gris{color:#A9B1C7}",
    ".v3-embiste{animation:v3EmbA .6s cubic-bezier(.3,1.4,.4,1)}@keyframes v3EmbA{40%{transform:translateX(38%) rotate(10deg) scale(1.1)}}",
    ".v3-embiste-r{animation:v3EmbB .6s cubic-bezier(.3,1.4,.4,1)}@keyframes v3EmbB{40%{transform:translateX(-38%) rotate(-10deg) scale(1.1)}}",
    ".v3-parada{box-shadow:inset 0 0 0 2px #FFC83D,0 0 24px -6px rgba(255,200,61,.6)!important}",
    ".v3-barra{height:6px;border-radius:3px;background:#262D43;overflow:hidden}.v3-barra i{display:block;height:100%;background:linear-gradient(90deg,#FFC83D,#FF6B8B);transform-origin:left}",
    /* tecleo */
    ".v3-carril{position:relative;display:grid;gap:8px;padding:8px 34px 8px 8px;border-radius:16px;background:repeating-linear-gradient(90deg,#1D2335 0 24px,#20273B 24px 48px)}",
    ".v3-linea{position:relative;height:50px;border-radius:12px;background:rgba(47,107,255,.14)}.v3-linea--b{background:rgba(255,107,139,.14)}",
    ".v3-linea img{position:absolute;left:0;top:-2px;width:46px;height:54px;object-fit:contain;transition:left .25s ease}.v3-linea--b img{filter:hue-rotate(140deg) saturate(1.3)}",
    ".v3-banderin{position:absolute;right:6px;top:50%;transform:translateY(-50%);font-style:normal;font-size:22px}",
    ".v3-texto{margin:0;font:700 1.25rem/1.5 var(--f-tx);color:#A9B1C7;letter-spacing:.01em;word-break:break-word}",
    ".v3-bien{color:#8CF0B6}.v3-mal{background:#FF6B70;color:#fff;border-radius:3px}.v3-cursor{border-bottom:3px solid #FFC83D;color:#fff}",
    ".v3-es{margin:0;color:#C9D0E6;font-size:.88rem;font-style:italic}",
    "@layer pz{html #plx1v1 .v3-in{width:100%;min-height:52px;font:700 1.15rem var(--f-tx)!important;background:#141826!important;color:#fff!important;border-radius:14px!important;box-shadow:inset 0 0 0 2px #343D59!important;padding:0 14px!important}html #plx1v1 .v3-in--mal{box-shadow:inset 0 0 0 2px #FF6B70!important}}",
    ".v3-acentos{display:flex;flex-wrap:wrap;gap:6px}.v3-acentos .pz-chip{min-width:40px;min-height:40px;justify-content:center;font-weight:800}",
    /* ordena */
    ".v3-armada{display:flex;flex-wrap:wrap;gap:6px;min-height:52px;padding:8px;border-radius:14px;background:#141826;box-shadow:inset 0 0 0 2px #343D59}",
    ".v3-fichas{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}",
    "@layer pz{html #plx1v1 .v3-ficha{min-height:44px;font:800 1rem var(--f-tx)!important;background:#262D43!important;color:#fff!important}html #plx1v1 .v3-ficha--puesta{background:#233A80!important}html #plx1v1 .v3-ficha[disabled]{opacity:.25}}",
    ".v3-vacia{color:#A9B1C7;font-size:.85rem;align-self:center}.v3-sol{color:#8CF0B6;font-weight:800;align-self:center}",
    /* memoria */
    ".v3-turno{margin:0;text-align:center;font:800 1rem var(--f-tit);color:#fff}.v3-turno[data-q=me]{color:#9DB8FF}.v3-turno[data-q=op]{color:#FFA3B7}",
    ".v3-tablero{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}",
    ".v3-carta{all:unset;cursor:pointer;position:relative;aspect-ratio:3/4;perspective:600px}",
    ".v3-carta-d,.v3-carta-r{position:absolute;inset:0;display:grid;place-items:center;border-radius:14px;backface-visibility:hidden;-webkit-backface-visibility:hidden;transition:transform .35s ease}",
    ".v3-carta-r{background:linear-gradient(150deg,#2F6BFF,#1A45B8);box-shadow:0 4px 0 #17337F}.v3-carta-r img{width:70%;height:70%;object-fit:contain;opacity:.9}",
    ".v3-carta-d{transform:rotateY(180deg);background:#F5F6FA;color:#1F2430;padding:6px;text-align:center;align-content:center;gap:4px}.v3-carta-d b{font:800 .86rem/1.15 var(--f-tit);word-break:normal;overflow-wrap:normal;hyphens:auto;-webkit-hyphens:auto}.v3-carta-d b.v3-largo{font-size:.7rem}.v3-carta-d small{font:900 .6rem var(--f-tx);color:#5A6480}",
    ".v3-carta.abierta .v3-carta-r{transform:rotateY(180deg)}.v3-carta.abierta .v3-carta-d{transform:rotateY(0)}",
    ".v3-carta.hallada[data-de=me] .v3-carta-d{box-shadow:inset 0 0 0 3px #2F6BFF}.v3-carta.hallada[data-de=op] .v3-carta-d{box-shadow:inset 0 0 0 3px #FF6B8B}",
    ".v3-carta[disabled]{cursor:default}",
    "@media (min-width:700px){.v3-tablero{grid-template-columns:repeat(6,1fr)}}",
    /* rondas: comodines, apuesta, escucha, hielo */
    ".v3-comod{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:4px}",
    "@layer pz{html #plx1v1 .v3-cm{min-height:40px;gap:6px;background:linear-gradient(160deg,#3A3016,#262D43)!important;color:#FFD875!important;box-shadow:inset 0 0 0 1.5px #B07C00!important}}",
    ".v3-cm small{font-size:.7rem;color:#C9D0E6}.v3-cm-nada{color:#A9B1C7;font-size:.78rem}.v3-cm-on{font-style:normal;font-weight:800;color:#8CF0B6;font-size:.82rem}",
    ".v3-tachada{text-decoration:line-through}",
    ".v3-helado{position:relative;pointer-events:none;filter:saturate(.3) brightness(1.1)}.v3-helado::after{content:'❄️ Congelado';position:absolute;inset:0;display:grid;place-items:center;border-radius:16px;background:rgba(157,216,255,.35);color:#fff;font:900 1.2rem var(--f-tit);text-shadow:0 2px 8px rgba(0,0,0,.4);backdrop-filter:blur(2px)}",
    ".v3-oculto{display:none!important}",
    ".v3-apuesta{display:grid;gap:8px;text-align:center;padding:12px;border-radius:16px;background:linear-gradient(160deg,#3A3016,#1D2335);box-shadow:inset 0 0 0 1.5px #B07C00}.v3-apuesta b{color:#FFD875}.v3-apuesta > div{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.v3-apuesta small{color:#C9D0E6;font-size:.75rem}",
    ".v3-ap-pill{justify-self:end}",
    ".v3-oir{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:64px;border-radius:16px;background:linear-gradient(135deg,#2F6BFF,#7A4CFF);color:#fff;font:800 1.1rem var(--f-tit);box-shadow:0 4px 0 #17337F}",
    ".v3-flota{position:fixed;left:50%;top:22%;transform:translateX(-50%);z-index:80;padding:10px 18px;border-radius:99px;background:#1F2430;color:#fff;font:800 1rem var(--f-tit);box-shadow:0 10px 30px rgba(0,0,0,.5);animation:v3Flota 1.9s ease both;max-width:calc(100vw - 32px);box-sizing:border-box;text-align:center}",
    "html #plx1v1.v2{overflow-x:hidden}",
    "@keyframes v3Flota{0%{opacity:0;transform:translate(-50%,10px) scale(.8)}15%{opacity:1;transform:translate(-50%,0) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-16px)}}",
    /* reacciones */
    ".v3-rx{position:fixed;left:50%;bottom:calc(10px + env(safe-area-inset-bottom,0));transform:translateX(-50%);z-index:20;display:flex;gap:6px;padding:6px 8px;border-radius:99px;background:rgba(20,24,38,.88);box-shadow:0 8px 24px rgba(0,0,0,.45)}",
    ".v3-rx-b{all:unset;cursor:pointer;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;transition:transform .12s}.v3-rx-b:active{transform:scale(.88)}.v3-rx-b img{width:38px;height:38px;object-fit:contain}",
    ".v3-rxf{position:fixed;top:118px;z-index:85;width:96px;height:96px;pointer-events:none;animation:v3Rx 1.9s cubic-bezier(.2,1.3,.4,1) both}.v3-rxf img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 12px rgba(0,0,0,.5))}",
    ".v3-rxf--a{left:10px}.v3-rxf--b{right:10px}",
    "@keyframes v3Rx{0%{transform:scale(.2) rotate(-14deg);opacity:0}18%{transform:scale(1.15) rotate(6deg);opacity:1}30%{transform:scale(1) rotate(0)}80%{opacity:1}100%{transform:translateY(-30px) scale(.9);opacity:0}}",
    /* pregunta de oro */
    ".v3-oro{display:grid;gap:10px;justify-items:center;text-align:center;padding-top:20px}.v3-oro-k{font:900 .8rem var(--f-tx);letter-spacing:.2em;color:#FFC83D}",
    ".v3-oro h2{margin:0;font:900 2rem var(--f-tit);color:#FFC83D;text-shadow:0 0 30px rgba(255,200,61,.6)}.v3-oro p{margin:0;color:#C9D0E6}",
    ".v3-preg--oro{width:100%;box-shadow:inset 0 0 0 2px #FFC83D,0 0 40px -10px rgba(255,200,61,.7)!important}",
    /* ruleta */
    ".v3-ruleta{position:fixed;inset:0;z-index:70;display:grid;place-content:center;justify-items:center;gap:14px;background:radial-gradient(circle at 50% 45%,rgba(47,107,255,.35),rgba(20,24,38,.96) 60%);animation:v3RIn .25s ease both}",
    ".v3-ruleta-k{font:900 .85rem var(--f-tx);letter-spacing:.14em;text-transform:uppercase;color:#FFC83D}",
    ".v3-ruleta-v{position:relative;width:280px;height:64px;overflow:hidden;border-radius:18px;background:#1D2335;box-shadow:inset 0 0 0 3px #FFC83D,0 0 40px -6px rgba(255,200,61,.6)}",
    ".v3-ruleta-v::before,.v3-ruleta-v::after{content:'';position:absolute;left:0;right:0;height:16px;z-index:1;pointer-events:none}.v3-ruleta-v::before{top:0;background:linear-gradient(#1D2335,transparent)}.v3-ruleta-v::after{bottom:0;background:linear-gradient(transparent,#1D2335)}",
    ".v3-ruleta-i{height:64px;display:flex;align-items:center;justify-content:center;gap:10px;color:#fff}.v3-ruleta-i img{width:52px;height:52px;object-fit:contain}.v3-ruleta-i b{font:900 1.2rem var(--f-tit)}",
    ".v3-ruleta-d{margin:0;color:#C9D0E6;font-weight:700;opacity:0;transition:opacity .3s}.v3-ruleta-d em{font-style:normal;color:#FFC83D}",
    ".v3-ruleta--fin .v3-ruleta-v{animation:v3RGolpe .45s cubic-bezier(.2,1.5,.4,1)}.v3-ruleta--fin .v3-ruleta-d{opacity:1}",
    ".v3-ruleta--va{opacity:0;transition:opacity .45s}",
    "@keyframes v3RIn{from{opacity:0}to{opacity:1}}@keyframes v3RGolpe{40%{transform:scale(1.12)}}",
    /* final */
    ".v3-fin{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}.v3-fin-m img{width:26px;height:26px;object-fit:contain;margin:-6px 4px -6px -4px}.v3-rules-i{width:30px;height:30px;object-fit:contain;vertical-align:middle}",
    ".v3-serie{display:grid;gap:2px;justify-items:center;padding:10px 16px;border-radius:16px;background:#1D2335;box-shadow:inset 0 0 0 1.5px #FFC83D;color:#fff}.v3-serie b{font:900 .78rem var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:#FFC83D}.v3-serie em{font:900 1.4rem var(--f-tit);font-style:normal}.v3-serie small{color:#C9D0E6}",
    "@media (prefers-reduced-motion:reduce){.v3-nudo,.v3-bomb,.v3-linea img,.v3-carta-d,.v3-carta-r{transition:none}.v3-rxf,.v3-flota,.v3-bomb--prisa{animation:none}}"
  ].join("\n");
  var st = D.createElement("style"); st.id = "plx119"; st.textContent = css; D.head.appendChild(st);
})();
