/* PLEX PLAY 4.48 — PLEX 1V1 con Manzana 2D: arena, mosqueteros y efectos de combate
   Pedido de Jhon (15-oct-2026): «Rediseña PLEX 1v1 con nuevos modelos, animaciones fluidas y efectos épicos que
   transmitan competencia, energía y emoción», con las ilustraciones 2D nuevas (produccion/manzana-2d: los dos
   mosqueteros, el campeón y el gato en guardia; en la app, img/m2d/).
   No cambia el juego (plx22: rondas, puntos, red, rangos): solo la escena. Se engancha a dos cosas que ya existen:
   - cada repintada de #plx1v1 (plx22 rehace el HTML por etapa: lobby, search, wait, count, match, end) → decora();
   - cada efecto del duelo (V1AUD.fx: ok, ko, combo, go, slam, opp, win, lose, draw) → golpes, chispas y sacudidas.
   La escena
   - Sala: arena nocturna con un foco azul (tú) y otro rosa (rival), los dos mosqueteros frente a frente que respiran a
     destiempo, el sello VS (pieza pz-vs) y «Buscar rival» dorado que late.
   - Búsqueda: el campeón en guardia en el centro del radar y la silueta del rival que todavía no se sabe.
   - Presentación: cartas de equipo con el luchador grande, tu gato de siempre en la esquina (con sus premios) y el VS.
   - Partida: retratos de los dos arriba, la «tira de fuerza» (tus puntos contra los del rival, se mueve en vivo), y
     en cada acierto tu mosquetero lanza una estocada con un tajo de luz y chispas azules; si acierta el rival, al revés
     en rosa; si fallas, tu retrato tiembla y se tapa la cara (facepalm) un momento.
   - Resultado: podio con el ganador grande y saltando, el otro abajo, y confeti.
   window.PLX_FX = { chispas, tajo, sacude, confeti } — efectos reutilizables (un solo lienzo, se apaga solo).
   Respeta «reducir movimiento» y el modo liviano (PLX_LIVIANO: menos partículas). Prueba: pruebas/v1-2d.mjs. */
(function(){
  "use strict";
  var D = document, IMG = "img/m2d/";
  var quieto = function(){ try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  var liviano = function(){ return !!window.PLX_LIVIANO; };
  var raiz = function(){ return D.getElementById("plx1v1"); };
  var img = function(k, cls, alt){ return '<img class="' + (cls || "") + '" src="' + IMG + k + '.webp" alt="' + (alt || "") + '" decoding="async" draggable="false">'; };
  var vs = function(grande){ return window.PLX_KIT ? PLX_KIT.vs(grande ? { v: "grande" } : {}) : '<span class="pz-vs' + (grande ? " pz-vs--grande" : "") + '">VS</span>'; };

  /* ================================================================== efectos (un lienzo para todo) */
  var cv = null, cx = null, ps = [], vivo = 0, dpr = 1;
  var lienzo = function(){
    if (cv && cv.isConnected) return true;
    cv = D.createElement("canvas"); cv.className = "v2-fx"; cv.setAttribute("aria-hidden", "true"); D.body.appendChild(cv);
    cx = cv.getContext("2d"); mide(); return !!cx;
  };
  var mide = function(){ if (!cv) return; dpr = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  addEventListener("resize", mide);
  var paso = function(){
    vivo = 0; if (!cx) return;
    cx.clearRect(0, 0, innerWidth, innerHeight);
    var t = performance.now();
    ps = ps.filter(function(p){
      var e = (t - p.t0) / 1000; if (e > p.d) return false;
      var k = e / p.d;
      if (p.tajo) {   // línea de luz que cruza y se desvanece
        var a = Math.min(1, e / .09), b = Math.max(0, (e - .05) / (p.d - .05));
        cx.save(); cx.globalCompositeOperation = "lighter"; cx.lineCap = "round";
        var x1 = p.x1 + (p.x2 - p.x1) * b, y1 = p.y1 + (p.y2 - p.y1) * b, x2 = p.x1 + (p.x2 - p.x1) * a, y2 = p.y1 + (p.y2 - p.y1) * a;
        [[18, p.c, .25], [8, p.c, .6], [3, "#fff", .95]].forEach(function(s){ cx.globalAlpha = s[2] * (1 - b); cx.strokeStyle = s[1]; cx.lineWidth = s[0]; cx.beginPath(); cx.moveTo(x1, y1); cx.lineTo(x2, y2); cx.stroke(); });
        cx.restore(); return true;
      }
      var x = p.x + p.vx * e, y = p.y + p.vy * e + .5 * p.g * e * e;
      cx.globalAlpha = 1 - k * k;
      cx.fillStyle = p.c;
      if (p.forma === "chispa") { cx.save(); cx.translate(x, y); cx.rotate(Math.atan2(p.vy + p.g * e, p.vx)); cx.fillRect(-p.r * 2.2, -p.r * .45, p.r * 4.4, p.r * .9); cx.restore(); }
      else if (p.forma === "papel") { cx.save(); cx.translate(x, y); cx.rotate(p.rot + e * p.vr); cx.fillRect(-p.r, -p.r * .55, p.r * 2, p.r * 1.1); cx.restore(); }
      else if (p.forma === "estrella") { cx.save(); cx.translate(x, y); cx.rotate(e * 3); estrella(p.r * (1 + .3 * Math.sin(e * 14))); cx.restore(); }
      else { cx.beginPath(); cx.arc(x, y, p.r * (1 - k * .5), 0, 6.283); cx.fill(); }
      return true;
    });
    cx.globalAlpha = 1;
    if (ps.length) vivo = requestAnimationFrame(paso);
    else cx.clearRect(0, 0, innerWidth, innerHeight);
  };
  var estrella = function(r){ cx.beginPath(); for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4, rr = i % 2 ? r * .38 : r; cx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } cx.closePath(); cx.fill(); };
  var arranca = function(){ if (!vivo) vivo = requestAnimationFrame(paso); };
  var cuanto = function(n){ return quieto() ? 0 : liviano() ? Math.ceil(n * .4) : n; };
  var FX = {
    /* chispas que saltan desde (x, y) */
    chispas: function(x, y, o){
      o = o || {}; var n = cuanto(o.n || 22); if (!n || !lienzo()) return;
      var cols = o.cols || ["#FFC83D", "#FFFFFF", "#2F6BFF"], t0 = performance.now();
      for (var i = 0; i < n; i++) {
        var a = (o.ang != null ? o.ang : Math.random() * 6.283) + (o.ang != null ? (Math.random() - .5) * (o.abre || 1.4) : 0), v = (o.v || 420) * (.45 + Math.random() * .75);
        ps.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: o.g != null ? o.g : 900, r: 2 + Math.random() * 3, c: cols[i % cols.length], d: .45 + Math.random() * .45, t0: t0, forma: i % 4 ? "chispa" : "estrella" });
      }
      arranca();
    },
    /* tajo de luz de (x1,y1) a (x2,y2) */
    tajo: function(x1, y1, x2, y2, c){ if (quieto() || !lienzo()) return; ps.push({ tajo: true, x1: x1, y1: y1, x2: x2, y2: y2, c: c || "#7FA6FF", d: .36, t0: performance.now() }); arranca(); },
    /* confeti que cae de arriba */
    confeti: function(n, cols){
      n = cuanto(n || 90); if (!n || !lienzo()) return; cols = cols || ["#FFC83D", "#2F6BFF", "#FF6B8B", "#12853C", "#FFFFFF"]; var t0 = performance.now();
      for (var i = 0; i < n; i++) ps.push({ x: Math.random() * innerWidth, y: -20 - Math.random() * 120, vx: (Math.random() - .5) * 120, vy: 120 + Math.random() * 160, g: 140, r: 4 + Math.random() * 4, rot: Math.random() * 6, vr: (Math.random() - .5) * 10, c: cols[i % cols.length], d: 2.2 + Math.random() * 1.4, t0: t0 + Math.random() * 400, forma: "papel" });
      arranca();
    },
    /* sacude un elemento (clase con su propia animación) */
    sacude: function(el, cls, ms){ if (!el || quieto()) return; cls = cls || "v2-sacude"; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(function(){ el.classList.remove(cls); }, ms || 520); }
  };
  window.PLX_FX = FX;
  var centro = function(el){ if (!el) return { x: innerWidth / 2, y: innerHeight / 2 }; var r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };

  /* ================================================================== la escena por etapa */
  /* tu gato de siempre (con sus premios del 1V1) va como insignia en la esquina de tu carta */
  var miGato = function(){ try { return catSVG(gEnsure().cat, { mood: "excited" }); } catch (e) { return ""; } };
  var marca = function(r, st){ r.classList.add("v2"); r.dataset.v2 = st; };
  function decora(){
    var r = raiz(); if (!r) return;
    var st = r.dataset.stage || "";
    marca(r, st);   // cada etapa se decora una vez por repintada (las funciones miran .v2-hecho)
    if (st === "lobby") sala(r);
    else if (st === "search" || st === "pair" || st === "connecting" || st === "wait") busca(r);
    else if (st === "count") presenta(r);
    else if (st === "match") partida(r);
    else if (st === "end") final(r);
  }
  function arena(cls){
    return '<div class="v2-arena ' + (cls || "") + '" aria-hidden="true"><i class="v2-foco v2-foco--a"></i><i class="v2-foco v2-foco--b"></i><i class="v2-piso"></i><i class="v2-polvo"></i></div>';
  }
  function sala(r){
    var hero = r.querySelector(".v1-hero"); if (!hero || hero.querySelector(".v2-hecho")) return;
    var vsv = hero.querySelector(".v1-vs"); if (vsv) vsv.remove();
    hero.classList.add("v2-hero");
    hero.insertAdjacentHTML("afterbegin", arena() +
      '<div class="v2-ring v2-hecho"><span class="v2-lu v2-lu--a">' + img("duelo_yo", "", "Tu mosquetero") + '</span>' + vs(true) +
      '<span class="v2-lu v2-lu--b">' + img("duelo_rival", "", "El rival") + "</span></div>");
    var h2 = hero.querySelector("h2"); if (h2) { h2.innerHTML = '<small>Duelos de francés en vivo</small>Reta a otro estudiante'; }
    var b = r.querySelector(".v1-main"); if (b) { b.classList.add("pz-btn--oro", "pz-btn--lg", "v2-late"); }
  }
  function busca(r){
    var rad = r.querySelector(".v1-radar"); if (!rad || rad.querySelector(".v2-hecho")) return;
    rad.innerHTML = img("en_guardia", "v2-hecho v2-guardia", "") ;
    rad.classList.add("v2-radar");
    if (!r.querySelector(".v2-sombra")) rad.insertAdjacentHTML("afterend", '<div class="v2-sombra" aria-hidden="true">' + img("duelo_rival", "", "") + "<b>?</b></div>");
  }
  function presenta(r){
    var intro = r.querySelector(".v1-intro"); if (!intro || intro.querySelector(".v2-hecho")) return;
    intro.insertAdjacentHTML("afterbegin", arena("v2-arena--llena"));
    var cartas = intro.querySelectorAll(".v1-ic");
    [].forEach.call(cartas, function(c, i){
      var g = c.querySelector(".v1-icat"); if (!g) return;
      var gato = g.innerHTML;
      g.outerHTML = '<div class="v2-art v2-hecho">' + img(i ? "duelo_rival" : "duelo_yo", "", "") + "</div>" + (i ? "" : '<span class="v2-avatar" aria-hidden="true">' + gato + "</span>");
    });
    var bv = intro.querySelector(".v1-bigvs"); if (bv) bv.innerHTML = vs(true);
  }
  /* partida: retratos, tira de fuerza y marcador */
  var antes = { me: 0, opp: 0 };
  function puntos(r){
    var a = r.querySelector('[data-sc="me"]'), b = r.querySelector('[data-sc="opp"]');
    return { me: a ? parseInt(a.textContent, 10) || 0 : 0, opp: b ? parseInt(b.textContent, 10) || 0 : 0 };
  }
  function tira(r){
    var t = r.querySelector(".v2-tira"); if (!t) return;
    var p = puntos(r), tot = p.me + p.opp, pct = tot ? Math.round(p.me / tot * 100) : 50;
    t.querySelector("i").style.width = pct + "%"; t.style.setProperty("--v2-x", pct + "%");
    t.classList.toggle("v2-tira--gana", pct > 55); t.classList.toggle("v2-tira--pierde", pct < 45);
  }
  function partida(r){
    var top = r.querySelector(".v1-top"); if (!top) return;
    if (!top.querySelector(".v2-hecho")) {
      [].forEach.call(top.querySelectorAll(".v1-p"), function(p){
        var op = p.classList.contains("op"), c = p.querySelector(".v1-cat"); if (!c) return;
        c.innerHTML = img(op ? "duelo_rival" : "duelo_yo", "v2-mini v2-hecho", "");
        c.classList.add("v2-retrato", op ? "v2-retrato--b" : "v2-retrato--a");
      });
      top.insertAdjacentHTML("beforeend", '<div class="v2-tira" role="img" aria-label="Fuerza del duelo"><i style="width:50%"></i><b class="v2-tira__chispa" aria-hidden="true"></b></div>');
    }
    tira(r);
  }
  function final(r){
    var duo = r.querySelector(".v1-duo.end"); if (!duo || duo.querySelector(".v2-hecho")) return;
    var gana = r.querySelector(".v1-ban.win"), pierde = r.querySelector(".v1-ban.lose"), empate = r.querySelector(".v1-ban.draw");
    duo.classList.add("v2-podio");
    var me = duo.querySelector(".v1-p.me .v1-cat"), op = duo.querySelector(".v1-p.op .v1-cat");
    if (me) me.innerHTML = img(gana ? "campeon" : empate ? "pulgar" : "triste", "v2-hecho", "");
    if (op) op.innerHTML = img(pierde ? "duelo_rival" : empate ? "duelo_rival" : "facepalm", "v2-hecho", "");
    duo.querySelector(".v1-p.me").classList.add(gana ? "v2-arriba" : empate ? "v2-par" : "v2-abajo");
    duo.querySelector(".v1-p.op").classList.add(pierde ? "v2-arriba" : empate ? "v2-par" : "v2-abajo");
    var vb = duo.querySelector(".v1-vsb"); if (vb) vb.outerHTML = vs(false);
    if (!r.querySelector(".v2-arena")) r.querySelector(".v1-end").insertAdjacentHTML("afterbegin", arena("v2-arena--fin"));
    if (gana) setTimeout(function(){ FX.confeti(110); }, 350);
  }

  /* ================================================================== golpes en vivo (desde V1AUD.fx) */
  function golpe(quien){
    var r = raiz(); if (!r) return;
    var a = r.querySelector(".v2-retrato--a"), b = r.querySelector(".v2-retrato--b");
    var de = quien === "me" ? a : b, a2 = quien === "me" ? b : a; if (!de || !a2) return;
    var p = centro(de), q = centro(a2);
    FX.sacude(de, quien === "me" ? "v2-estoca" : "v2-estoca-r", 520);
    setTimeout(function(){
      FX.tajo(p.x, p.y + 10, q.x, q.y - 4, quien === "me" ? "#7FA6FF" : "#FF8FA6");
      FX.chispas(q.x, q.y, { n: 24, cols: quien === "me" ? ["#FFC83D", "#FFFFFF", "#2F6BFF"] : ["#FFC83D", "#FFFFFF", "#FF6B8B"], v: 360 });
      FX.sacude(a2, "v2-golpeado", 420);
      var t = r.querySelector(".v2-tira"); if (t) { tira(r); FX.sacude(t, "v2-tira--pulso", 500); }
    }, 170);
  }
  function fallo(){
    var r = raiz(); if (!r) return;
    var a = r.querySelector(".v2-retrato--a"); if (!a) return;
    var im = a.querySelector("img"); if (im) { im.src = IMG + "facepalm.webp"; setTimeout(function(){ if (im.isConnected) im.src = IMG + "duelo_yo.webp"; }, 1300); }
    FX.sacude(a, "v2-sacude", 520);
  }
  var engancha = function(){
    if (!window.V1AUD || V1AUD.__v2) return !!(window.V1AUD && V1AUD.__v2);
    var f = V1AUD.fx;
    V1AUD.fx = function(k, x){
      try {
        if (k === "ok") golpe("me");
        else if (k === "ko") fallo();
        else if (k === "slam") { var c = centro(D.querySelector("#plx1v1 .v1-bigvs")); setTimeout(function(){ FX.chispas(c.x, c.y, { n: 40, v: 560, cols: ["#FFC83D", "#FFFFFF", "#2F6BFF", "#FF6B8B"] }); }, 560); }
        else if (k === "win") setTimeout(function(){ FX.confeti(120); }, 200);
        else if (k === "combo" && (x || 0) >= 3) { var rr = raiz(), a = rr && rr.querySelector(".v2-retrato--a"); if (a) { var pc = centro(a); FX.chispas(pc.x, pc.y, { n: 30, ang: -Math.PI / 2, abre: 1.6, v: 520, g: 700, cols: ["#FFC83D", "#FF9F1C", "#FFFFFF"] }); } }
      } catch (e) {}
      return f.apply(this, arguments);
    };
    V1AUD.__v2 = true; return true;
  };
  if (!engancha()) { var tries = 0, iv = setInterval(function(){ if (engancha() || ++tries > 40) clearInterval(iv); }, 250); }

  /* cada vez que plx22 repinta #plx1v1 (o lo crea), se decora; el marcador del rival cambia sin repintar → la tira */
  var obsR = null;
  var vigila = function(r){
    if (obsR) obsR.disconnect();
    obsR = new MutationObserver(function(ms){
      var repinta = ms.some(function(m){ return m.target === r && m.type === "childList"; });
      if (repinta) { if (r.dataset.stage === "lobby" || r.dataset.stage === "count") antes = { me: 0, opp: 0 }; decora(); }
      if (r.dataset.stage === "match") {
        tira(r);
        // el rival sumó puntos (llega por la red o lo juega el bot): su mosquetero ataca
        var p = puntos(r); if (p.opp > antes.opp) golpe("op"); antes = p;
      }
    });
    obsR.observe(r, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["data-stage"] });
    decora();
  };
  new MutationObserver(function(){ var r = raiz(); if (r && r !== vigila.r) { vigila.r = r; vigila(r); } }).observe(D.body, { childList: true });

  /* ================================================================== estilo */
  var css = [
    /* v2 siempre de noche: la arena es oscura en los dos temas, así que dentro del duelo valen los tokens del tema
       oscuro de plx101 (en claro, la cabecera y el marcador salían con tinta oscura sobre la noche) */
    "@layer pz{html #plx1v1.v2{--p-bg:#141826;--p-halo-1:rgba(47,107,255,.16);--p-halo-2:rgba(120,160,255,.07);--p-halo-3:rgba(255,107,139,.10);--p-sup:#1D2335;--p-sup-2:#262D43;--p-sup-3:#303852;--p-linea:#343D59;--p-relieve:#0B0E18;--p-pista:#323A55;--p-tinta:#F5F6FA;--p-tinta-2:#D3D8E6;--p-apagado:#A9B1C7;--p-azul:#4C82FF;--p-azul-r:#17337F;--p-azul-tx:#9DB8FF;--p-azul-p:#232F55;--p-oro:#FFC83D;--p-oro-r:#B07C00;--p-oro-tx:#FFD875;--p-oro-p:#3A3016;--p-oro-ic:#FFC83D;--p-rojo:#FF6B70;--p-rojo-r:#8F2228;--p-rojo-tx:#FFB4B7;--p-rojo-p:#43182A;--p-verde:#35C97A;--p-verde-r:#0B5A28;--p-verde-tx:#8CF0B6;--p-verde-p:#113C2C;--p-lila-p:#40202E;--p-lila-tx:#FFA3B7;--p-vidrio:linear-gradient(160deg,rgba(42,49,73,.8),rgba(24,29,46,.74));--p-vidrio-borde:rgba(255,255,255,.12);--p-vidrio-linea:rgba(255,255,255,.08);--p-vidrio-sombra:0 26px 60px -26px rgba(0,0,0,.75);--p-vidrio-solido:#1A2031;--p-sombra:0 16px 32px -22px rgba(0,0,0,.7);--p-velo:rgba(6,8,16,.66);--p-placa:#D9DEEA;--paper:#141826;--raise:#1D2335;--line:#343D59;--ink:#F5F6FA;--stone:#A9B1C7;--surf3:#262D43;color-scheme:dark}" +
      "html #plx1v1.v2 .v1-h,html #plx1v1.v2 .v1-h b,html #plx1v1.v2 .v1-h span,html #plx1v1.v2 .v1-top,html #plx1v1.v2 .v1-top b,html #plx1v1.v2 .v1-mid small,html #plx1v1.v2 .v1-timer b{color:#F5F6FA!important}" +
      "html #plx1v1.v2 .v1-x{background:rgba(255,255,255,.12)!important;color:#fff!important;box-shadow:none!important}" +
      "html #plx1v1.v2 .v1-ctx{background:#1D2335!important;color:#D3D8E6!important;border-color:rgba(255,255,255,.08)!important}" +
      "html #plx1v1.v2 .v1-duo b,html #plx1v1.v2 .v1-duo .v1-sc{color:#fff!important}html #plx1v1.v2 .v1-duo .op .v1-sc{color:#FFA3B7!important}html #plx1v1.v2 .v1-duo .me .v1-sc{color:#FFD875!important}}",
    /* el fondo de toda la pantalla del duelo: noche de la marca */
    "html #plx1v1.v2{background:radial-gradient(120% 70% at 50% -10%,#2A3E8F 0%,rgba(42,62,143,0) 60%),linear-gradient(180deg,#141826 0%,#1B1F45 55%,#141826 100%)!important;color:#F5F6FA}",
    "html #plx1v1.v2 .v1-h{background:rgba(20,24,38,.72)!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 1px 0 rgba(255,255,255,.08)!important}",
    "html.plx-liviano #plx1v1.v2 .v1-h{backdrop-filter:none;-webkit-backdrop-filter:none;background:#141826!important}",
    "html #plx1v1.v2 .v1-hero p,html #plx1v1.v2 .v1-note,html #plx1v1.v2 .v1-rec,html #plx1v1.v2 .v1-rules{color:#C9D0E6!important}",
    "html #plx1v1.v2 .v1-hero h2,html #plx1v1.v2 .v1-b>h2{color:#fff!important}",
    /* arena: dos focos, piso con brillo y polvo */
    ".v2-arena{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1}",
    ".v2-foco{position:absolute;top:-20%;width:70%;height:120%;filter:blur(2px);opacity:.55;mix-blend-mode:screen}",
    ".v2-foco--a{left:-12%;background:conic-gradient(from 160deg at 30% 0%,transparent 0deg,rgba(47,107,255,.55) 16deg,transparent 34deg);animation:v2Foco 6s ease-in-out infinite}",
    ".v2-foco--b{right:-12%;background:conic-gradient(from 166deg at 70% 0%,transparent 0deg,rgba(255,107,139,.5) 16deg,transparent 34deg);animation:v2Foco 6s -3s ease-in-out infinite reverse}",
    ".v2-piso{position:absolute;left:50%;bottom:6%;width:120%;height:34%;transform:translateX(-50%);background:radial-gradient(50% 50% at 50% 50%,rgba(255,200,61,.28),rgba(47,107,255,.12) 45%,transparent 70%)}",
    ".v2-polvo{position:absolute;inset:0;background-image:radial-gradient(1.5px 1.5px at 20% 30%,rgba(255,255,255,.6),transparent),radial-gradient(1.5px 1.5px at 70% 20%,rgba(255,255,255,.5),transparent),radial-gradient(2px 2px at 40% 70%,rgba(255,200,61,.6),transparent),radial-gradient(1.5px 1.5px at 85% 60%,rgba(255,255,255,.4),transparent),radial-gradient(1.5px 1.5px at 10% 80%,rgba(255,107,139,.5),transparent);animation:v2Polvo 9s linear infinite}",
    "@keyframes v2Foco{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(5deg)}}",
    "@keyframes v2Polvo{from{transform:translateY(0)}to{transform:translateY(-40px)}}",
    /* sala */
    "html #plx1v1.v2 .v1-hero.v2-hero{display:block!important;position:relative;isolation:isolate;margin:-16px -14px 4px;padding:8px 14px 18px;border-radius:0 0 28px 28px;overflow:hidden;text-align:center}",
    "html #plx1v1.v2 .v2-hero p{margin:0 auto!important;max-width:460px}",
    ".v2-ring{display:grid;grid-template-columns:1fr auto 1fr;align-items:end;gap:0;max-width:440px;margin:0 auto;padding-top:6px}",
    ".v2-lu{display:block;min-width:0}.v2-lu img{display:block;width:100%;max-width:190px;height:auto;margin:0 auto;filter:drop-shadow(0 14px 18px rgba(0,0,0,.45))}",
    ".v2-lu--a img{animation:v2EntraA .7s cubic-bezier(.2,.9,.3,1.2) both,v2Respira 2.6s .7s ease-in-out infinite}",
    ".v2-lu--b img{animation:v2EntraB .7s .08s cubic-bezier(.2,.9,.3,1.2) both,v2Respira 2.6s 2s ease-in-out infinite}",
    ".v2-ring .pz-vs{align-self:center;margin:0 -10px 28px;position:relative;z-index:2}",
    "html #plx1v1.v2 .v2-hero h2{display:grid;gap:2px;margin:10px 0 4px;font:900 1.55rem/1.1 var(--f-tit,Poppins,sans-serif);letter-spacing:-.01em}",
    ".v2-hero h2 small{font:800 .7rem/1.2 var(--f-tx,sans-serif);letter-spacing:.16em;text-transform:uppercase;color:#FFC83D}",
    ".v2-late{animation:v2Late 2.2s ease-in-out infinite}",
    "@keyframes v2Late{0%,100%{box-shadow:0 4px 0 var(--p-oro-r,#D99A00),0 0 0 0 rgba(255,200,61,.55)}50%{box-shadow:0 4px 0 var(--p-oro-r,#D99A00),0 0 0 12px rgba(255,200,61,0)}}",
    "@keyframes v2EntraA{from{transform:translateX(-60%) rotate(-6deg);opacity:0}to{transform:none;opacity:1}}",
    "@keyframes v2EntraB{from{transform:translateX(60%) rotate(6deg);opacity:0}to{transform:none;opacity:1}}",
    "@keyframes v2Respira{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-4px) scale(1.015)}}",
    /* búsqueda */
    ".v1-radar.v2-radar{width:180px!important;height:180px!important;background:radial-gradient(circle,rgba(47,107,255,.35) 0 45%,transparent 46%)!important}",
    ".v1-radar.v2-radar::before,.v1-radar.v2-radar::after{border-color:#2F6BFF!important}",
    ".v2-guardia{width:150px;height:150px;object-fit:contain;position:relative;z-index:1;animation:v2Guardia 1.1s ease-in-out infinite alternate}",
    "@keyframes v2Guardia{from{transform:rotate(-3deg) translateY(0)}to{transform:rotate(3deg) translateY(-5px)}}",
    ".v2-sombra{position:relative;width:96px;height:96px;margin-top:-8px}.v2-sombra img{width:100%;height:100%;object-fit:contain;filter:brightness(0) opacity(.45);transform:scaleX(1);animation:v2Duda 1.6s ease-in-out infinite}",
    ".v2-sombra b{position:absolute;inset:0;display:grid;place-items:center;font:900 2.2rem/1 var(--f-tit,sans-serif);color:#FF6B8B;text-shadow:0 0 18px rgba(255,107,139,.8)}",
    "@keyframes v2Duda{0%,100%{opacity:.55}50%{opacity:1}}",
    /* presentación */
    "html #plx1v1.v2 .v1-intro{isolation:isolate}",
    "html #plx1v1.v2 .v1-bigvs .pz-vs--grande{width:84px;height:84px;font-size:2rem}",
    "@media (max-width:520px){html #plx1v1.v2 .v1-bigvs .pz-vs--grande{width:60px;height:60px;font-size:1.45rem;box-shadow:0 0 0 4px #1F2430,0 0 0 7px #FFC83D,0 0 30px rgba(255,200,61,.6)}.v2-ring .pz-vs--grande{width:64px;height:64px;font-size:1.5rem}}",
    ".v2-arena--llena{inset:-10% -20%}",
    "html #plx1v1.v2 .v1-ic{background:linear-gradient(180deg,rgba(47,107,255,.32),rgba(20,24,38,.9))!important;border:3px solid #2F6BFF!important;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 18px 40px -16px rgba(47,107,255,.9)!important;color:#fff!important;overflow:visible}",
    "html #plx1v1.v2 .v1-ic.op{background:linear-gradient(180deg,rgba(255,107,139,.32),rgba(20,24,38,.9))!important;border-color:#FF6B8B!important;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 18px 40px -16px rgba(255,107,139,.9)!important}",
    ".v2-art{width:140px;height:140px;margin-top:-34px}.v2-art img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 10px 14px rgba(0,0,0,.5));animation:v2Respira 2.4s ease-in-out infinite}",
    ".v2-avatar{position:absolute;top:-12px;left:-12px;width:46px;height:46px;border-radius:50%;background:#141826;box-shadow:0 0 0 3px #2F6BFF;overflow:hidden;display:grid;place-items:center}.v2-avatar .cat{width:44px;height:44px}",
    "@media (max-width:520px){.v2-art{width:104px;height:104px;margin-top:-26px}}",
    /* partida */
    "html #plx1v1.v2 .v1-top{background:rgba(20,24,38,.86)!important;border-bottom:0!important;color:#fff}",
    "html #plx1v1.v2 .v1-sc{color:#fff!important}",
    ".v2-retrato{width:54px!important;height:54px!important;border-radius:16px;overflow:visible;background:radial-gradient(circle at 50% 70%,rgba(47,107,255,.5),transparent 70%)}",
    ".v2-retrato--b{background:radial-gradient(circle at 50% 70%,rgba(255,107,139,.5),transparent 70%)}",
    ".v2-mini{width:64px;height:64px;object-fit:contain;margin:-8px -5px -2px;filter:drop-shadow(0 4px 6px rgba(0,0,0,.5))}",
    ".v1-p.op .v2-retrato .v2-mini{transform:none!important}",
    ".v2-tira{grid-column:1/-1;position:relative;height:10px;margin:6px -10px -8px;background:#FF6B8B;box-shadow:inset 0 -2px 0 rgba(0,0,0,.18)}",
    ".v2-tira i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#2760EE,#2F6BFF);box-shadow:inset 0 -2px 0 rgba(0,0,0,.18);transition:width .5s cubic-bezier(.2,.9,.3,1.2)}",
    ".v2-tira__chispa{position:absolute;top:50%;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:radial-gradient(circle,#fff,#FFC83D 45%,transparent 70%);left:var(--v2-x,50%);pointer-events:none}",
    ".v2-tira--gana i{box-shadow:inset 0 -2px 0 rgba(0,0,0,.18),0 0 14px rgba(47,107,255,.9)}",
    ".v2-tira--pulso{animation:v2Pulso .5s ease}@keyframes v2Pulso{0%{transform:scaleY(1)}40%{transform:scaleY(1.8)}100%{transform:scaleY(1)}}",
    ".v2-estoca{animation:v2EstocaA .52s cubic-bezier(.3,1.4,.4,1)}@keyframes v2EstocaA{0%{transform:none}25%{transform:translateX(-6px) rotate(-6deg)}55%{transform:translateX(22px) rotate(8deg) scale(1.12)}100%{transform:none}}",
    ".v2-estoca-r{animation:v2EstocaB .52s cubic-bezier(.3,1.4,.4,1)}@keyframes v2EstocaB{0%{transform:none}25%{transform:translateX(6px) rotate(6deg)}55%{transform:translateX(-22px) rotate(-8deg) scale(1.12)}100%{transform:none}}",
    ".v2-golpeado{animation:v2Golpe .42s ease}@keyframes v2Golpe{0%,100%{transform:none;filter:none}20%{transform:translateX(5px);filter:brightness(2.2)}45%{transform:translateX(-4px)}70%{transform:translateX(2px)}}",
    ".v2-sacude{animation:v2Sacude .5s ease}@keyframes v2Sacude{0%,100%{transform:none}20%{transform:translateX(-6px) rotate(-3deg)}40%{transform:translateX(6px) rotate(3deg)}60%{transform:translateX(-4px)}80%{transform:translateX(3px)}}",
    "html #plx1v1.v2 .v1-qt{background:#1D2335!important;color:#fff!important;border:1.5px solid rgba(255,255,255,.08)!important}",
    "html #plx1v1.v2 .v1-ask{color:#C9D0E6!important}",
    /* resultado */
    "html #plx1v1.v2 .v1-end{position:relative;isolation:isolate}",
    ".v2-arena--fin{inset:-16px -14px auto;height:340px}",
    ".v1-duo.v2-podio{align-items:flex-end;gap:4px;margin-top:4px}",
    ".v2-podio .v1-p{position:relative}.v2-podio .v1-cat{width:120px!important;height:120px!important;filter:none!important}",
    ".v2-podio .v1-cat img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 14px rgba(0,0,0,.5))}",
    ".v2-podio .v2-arriba .v1-cat{width:168px!important;height:168px!important}.v2-podio .v2-arriba .v1-cat img{animation:v2Salta 1s cubic-bezier(.3,1.5,.4,1) infinite alternate}",
    ".v2-podio .v2-abajo{opacity:.85}.v2-podio .v2-abajo .v1-cat img{filter:grayscale(.35) drop-shadow(0 8px 10px rgba(0,0,0,.4))}",
    ".v2-podio .v1-p::after{content:'';display:block;width:110%;height:14px;margin-top:6px;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.45),transparent)}",
    ".v2-podio .v2-arriba::before{content:'';position:absolute;left:50%;bottom:30px;width:180px;height:180px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(255,200,61,.45),transparent);z-index:-1;animation:v2Halo 2s ease-in-out infinite}",
    "@keyframes v2Salta{from{transform:translateY(0)}to{transform:translateY(-12px) rotate(2deg)}}",
    "@keyframes v2Halo{0%,100%{opacity:.6;transform:translateX(-50%) scale(1)}50%{opacity:1;transform:translateX(-50%) scale(1.08)}}",
    "html #plx1v1.v2 .v1-crown{display:none}",
    "html #plx1v1.v2 .v1-stats div{background:rgba(29,35,53,.9)!important;border-color:rgba(255,255,255,.08)!important;color:#fff}",
    /* lo que la piel (capa p5, con !important) pisaba: va en la capa pz, la que manda */
    "@layer pz{html #plx1v1.v2 .v1-hero.v2-hero{display:block!important}html #plx1v1.v2 .v2-ring{display:grid!important;width:100%!important;height:auto!important;max-height:none!important;overflow:visible!important;grid-template-columns:1fr auto 1fr!important}" +
      "html #plx1v1.v2 .v2-lu{display:block!important;position:relative!important;width:100%!important;min-width:0!important;height:clamp(140px,42vw,230px)!important}" +
      "html #plx1v1.v2 .v2-lu img{display:block!important;position:static!important;width:100%!important;max-width:none!important;height:100%!important;object-fit:contain!important;object-position:50% 100%!important;opacity:1!important}" +
      "html #plx1v1.v2 .v2-podio .v1-cat img,html #plx1v1.v2 .v2-retrato img,html #plx1v1.v2 .v2-art img{display:block!important;opacity:1!important;visibility:visible!important}" +
      "html #plx1v1.v2 .v2-podio .v1-cat{background:none!important;border:0!important;box-shadow:none!important;border-radius:0!important;overflow:visible!important}}",
    ".v2-fx{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:2147483646}",
    /* PC: la arena se abre y los luchadores crecen */
    "@media (min-width:900px){.v2-lu img{max-width:240px}.v2-ring{max-width:620px}.v1-hero.v2-hero{border-radius:28px;margin:-6px 0 8px}.v2-podio .v2-arriba .v1-cat{width:210px!important;height:210px!important}}",
    "@media (prefers-reduced-motion:reduce){.v2-arena *,.v2-lu img,.v2-guardia,.v2-sombra img,.v2-art img,.v2-late,.v2-podio img,.v2-podio .v2-arriba::before{animation:none!important}}"
  ].join("\n");
  var st = D.createElement("style"); st.id = "plx118"; st.textContent = css; D.head.appendChild(st);
})();
