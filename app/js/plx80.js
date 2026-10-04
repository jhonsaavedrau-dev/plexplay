/* PLEX PLAY 3.5.0 — Grammar Run, versión definitiva
   Diseño
   - Escena limpia al atardecer sobre París: cielo azul noche → violeta → coral, sol con halo, estrellas, dos capas
     de siluetas (con la Torre Eiffel) con paralaje cuando Manzana cambia de carril.
   - Pista oscura en perspectiva con tres carriles, bordes de luz y líneas discontinuas que corren hacia la cámara.
     El carril elegido se ilumina bajo Manzana.
   - Las respuestas llegan como PUERTAS: un arco de luz sobre cada carril con una tarjeta grande y legible. La puerta
     del carril elegido brilla en amarillo; al cruzar, se vuelve verde (acierto) o roja (error).
   - Manzana (dibujada aquí, de espaldas) corre, se inclina al cambiar de carril, salta al acertar y se marea al fallar.
   - HUD propio: barra de distancia hasta las puertas, chip de velocidad con su nivel (Calma → Hiper) y cinco pips;
     aviso grande al subir de velocidad. Controles: deslizar o tocar la mitad de la pantalla; botones grandes
     translúcidos en las esquinas que no tapan la pista; teclado ← → / A D, ↑ o Espacio acelera, 1–3 elige carril.
   Dificultad
   - Velocidad de salida según el nivel MCER del curso: A1 calma … C1 rápido (no solo tres niveles como antes).
   - Dentro de la partida, cada acierto acorta el tiempo hasta las puertas (hasta un 38 % menos) y sube el nivel de
     velocidad; un error lo baja un poco. «Sin tiempo» (accesibilidad) lo hace todo un 50 % más lento.
   La lógica de retos, puntos, carnet y resultados es la de siempre (sesión común del Arcade). */
(function(){
  "use strict";
  var G = window.PLXG; if (!G || !G.juegos || !G.juegos.gr) return;
  var esc = G.esc, mezcla = G.mezcla;
  var fx = function(n){ try { if (G.fx) G.fx(n); } catch (e) {} };
  var chispas = function(s, x, y, o){ try { if (s.efectos) s.efectos.estalla(x, y, o); } catch (e) {} };
  var suena = function(t){ if (!t) return; try { var p = speak(t); if (p && p.catch) p.catch(function(){}); } catch (e) {} };
  var calla = function(){ try { if (typeof stopAudio === "function") stopAudio(); } catch (e) {} };
  var entre = function(a, x, b){ return Math.max(a, Math.min(b, x)); };
  var tactil = function(){ try { return matchMedia("(pointer:coarse)").matches; } catch (e) { return false; } };
  var BOCINA = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';

  /* ---- velocidad por nivel MCER ---- */
  var LVN = { pp: 1, a1: 1, a2: 2, fon: 2, b11: 3, b12: 3, b21: 4, rem: 4, prog: 5, c12: 5, lit: 5 };
  var LLEGA = [0, 8.2, 7.2, 6.2, 5.3, 4.5];          /* segundos hasta las puertas al empezar, por nivel */
  var TIERS = [["Calma", 1], ["Ágil", 1.12], ["Rápido", 1.26], ["Turbo", 1.42], ["Hiper", 1.6]];

  /* ---- Manzana de espaldas (mismo dibujo de la 3.1) ---- */
  var TINTA = "#3A2A20", CREMA = "#FBF3E6", CREMA2 = "#EAD9C0", CAFE = "#8A6242", CAFE2 = "#4E3524";
  var ovalo = function(c, x, y, rx, ry, rot, relleno, borde, lw){
    c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, Math.PI * 2);
    if (relleno) { c.fillStyle = relleno; c.fill(); }
    if (borde) { c.strokeStyle = borde; c.lineWidth = lw; c.stroke(); }
  };
  var degr = function(c, x, y, r, a, b){ var g = c.createRadialGradient(x - r * .35, y - r * .45, r * .1, x, y, r * 1.1); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
  var pata = function(c, x, y, u, sube, lw){
    /* pata trasera: si sube, se ve la planta con sus almohadillas */
    var r = (sube > 3 * u ? 8.6 : 7.8) * u;
    ovalo(c, x, y - 7 * u, 8.4 * u, 11 * u, 0, degr(c, x, y - 7 * u, 10 * u, CREMA, CREMA2), TINTA, lw);
    if (sube > 3 * u) {
      ovalo(c, x, y - 2 * u, r * .62, r * .5, 0, "#F4A3B5");
      for (var k = -1; k <= 1; k++) ovalo(c, x + k * 3.6 * u, y - 7.6 * u - Math.abs(k) * -1.2 * u, 1.9 * u, 2.3 * u, 0, "#F4A3B5");
    }
  };
  var gato = function(c, x, y, h, fase, incl, salto, mareo){
    var u = h / 100, lw = Math.max(1.2, 1.7 * u), paso = Math.sin(fase), paso2 = Math.cos(fase);
    /* sombra en el suelo: se achica al saltar */
    c.save(); c.globalAlpha = .28 * (1 - salto * .5); ovalo(c, x, y + 1 * u, 24 * u * (1 - salto * .35), 6 * u, 0, "#1A1208"); c.restore();
    c.save(); c.translate(x, y); c.rotate(incl * .2 + (mareo ? Math.sin(fase * 1.7) * .16 : 0));
    var alto = salto * 40 * u, bote = salto ? 0 : Math.abs(paso) * 3.4 * u;
    c.translate(0, -alto - bote);
    /* estirar y aplastar con el paso */
    var sq = salto ? 1 : 1 + Math.abs(paso2) * .025; c.scale(2 - sq, sq);
    c.lineJoin = "round"; c.lineCap = "round";
    /* cola atigrada: una curva gruesa que se balancea */
    var bal = Math.sin(fase * .5) * 9 * u;
    var cola = function(ancho, color, raya){
      c.beginPath(); c.moveTo(8 * u, -16 * u);
      c.bezierCurveTo(30 * u, -14 * u, 40 * u + bal, -30 * u, 34 * u + bal * 1.3, -50 * u);
      c.lineCap = raya ? "butt" : "round";
      c.strokeStyle = color; c.lineWidth = ancho; c.setLineDash(raya || []); c.stroke(); c.setLineDash([]); c.lineCap = "round";
    };
    /* patas traseras */
    var sI = salto ? 9 * u : Math.max(0, paso) * 11 * u, sD = salto ? 9 * u : Math.max(0, -paso) * 11 * u;
    pata(c, -11 * u, -sI, u, sI, lw); pata(c, 11 * u, -sD, u, sD, lw);
    /* cuerpo con la camiseta negra */
    c.beginPath(); c.moveTo(-21 * u, -13 * u);
    c.bezierCurveTo(-27 * u, -34 * u, -20 * u, -53 * u, 0, -54 * u);
    c.bezierCurveTo(20 * u, -53 * u, 27 * u, -34 * u, 21 * u, -13 * u);
    c.quadraticCurveTo(0, -7 * u, -21 * u, -13 * u); c.closePath();
    var gc = c.createLinearGradient(-20 * u, 0, 20 * u, 0); gc.addColorStop(0, "#2A2C36"); gc.addColorStop(.45, "#15161C"); gc.addColorStop(1, "#0C0D12");
    c.fillStyle = gc; c.fill(); c.strokeStyle = TINTA; c.lineWidth = lw; c.stroke();
    /* franja tricolor en el borde de la camiseta */
    c.save(); c.clip();
    ["#1E3A8A", "#FFFFFF", "#DC2626"].forEach(function(col, i){ c.fillStyle = col; c.fillRect(-28 * u, (-15.8 + i * 1.6) * u, 56 * u, 1.6 * u); });
    c.restore();
    /* brazos: se balancean al correr y suben al saltar */
    [-1, 1].forEach(function(l){
      var sw = salto ? -10 * u : l * paso2 * 5 * u;
      c.save(); c.translate(l * 19 * u, -45 * u); c.rotate(l * (salto ? 1.2 : .38) + l * paso2 * .12);
      ovalo(c, 0, 8 * u + sw * .3, 6.8 * u, 10.5 * u, 0, "#15161C", TINTA, lw);
      ["#1E3A8A", "#FFFFFF", "#DC2626"].forEach(function(col, i){ c.fillStyle = col; c.fillRect(-6.4 * u, (12.5 + i * 1.8) * u + sw * .3, 12.8 * u, 1.8 * u); });
      ovalo(c, 0, 20 * u + sw * .3, 5.6 * u, 5.2 * u, 0, degr(c, 0, 20 * u, 6 * u, CREMA, CREMA2), TINTA, lw);
      c.restore();
    });
    /* la cola va delante: la vemos desde atrás */
    cola(11.5 * u, TINTA); cola(8.2 * u, "#A57C55"); cola(8.2 * u, CAFE2, [3.2 * u, 5.5 * u]);
    /* cabeza de espaldas */
    var hy = -75 * u, ladeo = Math.sin(fase * .5) * .04;
    c.save(); c.translate(0, hy); c.rotate(ladeo);
    /* orejas: por detrás se ve el pelaje atigrado con el borde claro */
    [-1, 1].forEach(function(l){
      c.beginPath(); c.moveTo(l * 8 * u, -18 * u);
      c.quadraticCurveTo(l * 20 * u, -40 * u, l * 25 * u, -36 * u);
      c.quadraticCurveTo(l * 29 * u, -20 * u, l * 25 * u, -8 * u); c.closePath();
      c.fillStyle = l < 0 ? CAFE : "#9C7450"; c.fill(); c.strokeStyle = TINTA; c.lineWidth = lw; c.stroke();
      c.beginPath(); c.moveTo(l * 13 * u, -20 * u); c.quadraticCurveTo(l * 20 * u, -32 * u, l * 23.5 * u, -32 * u);
      c.strokeStyle = "#E9D2B4"; c.lineWidth = 1.8 * u; c.stroke();
    });
    ovalo(c, 0, 0, 28 * u, 25 * u, 0, degr(c, 0, 0, 28 * u, "#FFFFFF", CREMA2));
    /* manchas atigradas: una grande a la izquierda con rayas y otra pequeña a la derecha */
    c.save(); c.beginPath(); c.ellipse(0, 0, 28 * u, 25 * u, 0, 0, Math.PI * 2); c.clip();
    ovalo(c, -15 * u, -8 * u, 19 * u, 17 * u, -.5, CAFE);
    c.strokeStyle = CAFE2; c.lineWidth = 2.6 * u;
    for (var r = 0; r < 4; r++) { c.beginPath(); c.moveTo(-30 * u + r * 5.5 * u, -2 * u + r * 1.5 * u); c.quadraticCurveTo(-22 * u + r * 5.5 * u, -14 * u, -16 * u + r * 5 * u, -24 * u + r * 1.2 * u); c.stroke(); }
    ovalo(c, 17 * u, 10 * u, 11 * u, 8 * u, .4, "#B08A66");
    c.restore();
    ovalo(c, 0, 0, 28 * u, 25 * u, 0, null, TINTA, lw);
    /* mechón de la nuca */
    c.beginPath(); c.moveTo(-6 * u, 22 * u); c.lineTo(0, 27 * u); c.lineTo(6 * u, 22 * u); c.fillStyle = CREMA; c.fill();
    /* boina azul marino, un poco ladeada, con su piquito */
    c.save(); c.translate(3 * u, -17 * u); c.rotate(-.14);
    ovalo(c, 0, 0, 24 * u, 11 * u, 0, degr(c, 0, 0, 24 * u, "#3A4FA0", "#16224F"), TINTA, lw);
    ovalo(c, -3 * u, -3.5 * u, 14 * u, 5 * u, 0, "rgba(255,255,255,.12)");
    c.fillStyle = "#16224F"; c.fillRect(-1.6 * u, -15 * u, 3.2 * u, 5.5 * u);
    ovalo(c, 0, -15 * u, 2.4 * u, 1.6 * u, 0, "#16224F");
    c.restore();
    c.restore();
    if (mareo) { c.fillStyle = "#FFD200"; for (var st = 0; st < 3; st++) { var a = fase * 2 + st * 2.1; c.beginPath(); c.arc(Math.cos(a) * 24 * u, hy - 38 * u + Math.sin(a) * 5 * u, 3.2 * u, 0, Math.PI * 2); c.fill(); } }
    c.restore();
  };

  /* ---- tarjeta de una puerta (se pinta una vez por estilo y tamaño) ---- */
  var EST = {
    norm: { bg: "#FFFFFF", txt: "#0E1A3A", borde: "rgba(255,255,255,.0)", luz: "rgba(110,151,255,.55)" },
    sel:  { bg: "#FFFFFF", txt: "#0E1A3A", borde: "#FFD200", luz: "rgba(255,210,0,.85)" },
    bien: { bg: "#16A34A", txt: "#FFFFFF", borde: "#86EFAC", luz: "rgba(52,211,153,.9)" },
    mal:  { bg: "#E5484D", txt: "#FFFFFF", borde: "#FECACA", luz: "rgba(229,72,77,.9)" }
  };
  var rr = function(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
  var lineas = function(c, t, max){ var ws = String(t).split(/\s+/), out = [], cur = ""; ws.forEach(function(w){ var p = cur ? cur + " " + w : w; if (c.measureText(p).width > max && cur) { out.push(cur); cur = w; } else cur = p; }); if (cur) out.push(cur); return out; };
  var tarjeta = function(texto, estilo, ancho, dpr){
    var e = EST[estilo], m = document.createElement("canvas"), c = m.getContext("2d"), fs = 19, pad = 14;
    c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif";
    var ls = lineas(c, texto, ancho - pad * 2);
    if (ls.length > 2) { fs = 15; c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif"; ls = lineas(c, texto, ancho - pad * 2); }
    var lh = fs * 1.18, h = Math.max(58, ls.length * lh + 28), w = ancho, m2 = 16;
    m.width = Math.ceil((w + m2 * 2) * dpr); m.height = Math.ceil((h + m2 * 2) * dpr); c = m.getContext("2d"); c.scale(dpr, dpr);
    c.shadowColor = e.luz; c.shadowBlur = 18; c.fillStyle = e.bg; rr(c, m2, m2, w, h, 16); c.fill(); c.shadowBlur = 0;
    if (estilo !== "norm") { c.lineWidth = 4; c.strokeStyle = e.borde; rr(c, m2 + 2, m2 + 2, w - 4, h - 4, 14); c.stroke(); }
    c.fillStyle = e.txt; c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
    ls.forEach(function(l, i){ c.fillText(l, m2 + w / 2, m2 + h / 2 - (ls.length - 1) * lh / 2 + i * lh + 1); });
    return { img: m, w: w + m2 * 2, h: h + m2 * 2 };
  };

  /* ---- siluetas de París (dos capas, se pintan una vez) ---- */
  var skyline = function(W, H, dpr, capa){
    var m = document.createElement("canvas"), w = W * 1.3, h = H * (capa ? .2 : .16);
    m.width = Math.ceil(w * dpr); m.height = Math.ceil(h * dpr); var c = m.getContext("2d"); c.scale(dpr, dpr);
    c.fillStyle = capa ? "#1A1D5A" : "#2C2F7E";
    var x = 0, sem = capa ? 7 : 3, rnd = function(){ sem = (sem * 9301 + 49297) % 233280; return sem / 233280; };
    c.beginPath(); c.moveTo(0, h);
    while (x < w) {
      var bw = 18 + rnd() * 34, bh = h * (.35 + rnd() * .5);
      c.lineTo(x, h - bh); if (rnd() > .5) { c.lineTo(x + bw * .2, h - bh - 6); c.lineTo(x + bw * .8, h - bh - 6); } c.lineTo(x + bw, h - bh); x += bw;
    }
    c.lineTo(w, h); c.closePath(); c.fill();
    if (!capa) { /* Torre Eiffel en la capa del fondo */
      var tx = w * .5, th = h * 1.9, base = h;
      c.beginPath(); c.moveTo(tx - th * .2, base); c.quadraticCurveTo(tx - th * .06, base - th * .45, tx - th * .012, base - th * .95); c.lineTo(tx + th * .012, base - th * .95);
      c.quadraticCurveTo(tx + th * .06, base - th * .45, tx + th * .2, base); c.lineTo(tx + th * .1, base); c.quadraticCurveTo(tx, base - th * .2, tx - th * .1, base); c.closePath(); c.fill();
      c.fillRect(tx - th * .1, base - th * .38, th * .2, th * .025); c.fillRect(tx - th * .06, base - th * .62, th * .12, th * .02);
    }
    return { img: m, w: w, h: h };
  };

  function motor(zona, s){
    var lvl = LVN[(s.alc && s.alc.track) || ""] || (s.nivel === 2 ? 5 : s.nivel === 1 ? 3 : 1);
    zona.innerHTML =
      '<div class="x56 r5"><div class="r5-escena"><canvas aria-hidden="true"></canvas>' +
        '<div class="r5-dist" aria-hidden="true"><i></i></div>' +
        '<div class="r5-vel" aria-live="polite"><b>×1.0</b><span>Calma</span><em>' + "<i></i>".repeat(5) + "</em></div>" +
        '<div class="r5-aviso" aria-live="polite"></div>' +
        '<button type="button" class="r5-btn izq" data-r5="-1" aria-label="Carril de la izquierda"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '<button type="button" class="r5-btn der" data-r5="1" aria-label="Carril de la derecha"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '<button type="button" class="r5-turbo" data-r5-turbo aria-label="Acelerar"><svg viewBox="0 0 24 24"><path d="M5 6l7 6-7 6zM12 6l7 6-7 6z" fill="currentColor"/></svg><span>Acelerar</span></button>' +
        '<p class="r5-nota"></p></div></div>';
    var raiz = zona.firstChild, escena = raiz.querySelector(".r5-escena"), cv = raiz.querySelector("canvas"), cx = cv.getContext("2d"),
      dist = raiz.querySelector(".r5-dist i"), velEl = raiz.querySelector(".r5-vel"), aviso = raiz.querySelector(".r5-aviso"), nota = raiz.querySelector(".r5-nota");
    var W = 0, H = 0, dpr = 1, HOR = 0, F = 1, LANE = 0, CAMY = 0, ZF = 16, Z0 = 1.35;
    var reto = null, ops = [], n = 3, carril = 1, lx = 1, T = 0, t = 0, tReal = 0, hecho = false, cierre = -1, turbo = 0, recorrido = 0, vel = 1;
    var cartas = [], orbes = [], fase = 0, tSalto = -1, mareo = 0, temblor = 0, flash = 0, flashCol = "", toque = null, bm = {}, incl = 0, sky = null, estrellas = [];
    var aciertos = 0, rampa = 1, tier = 0;

    var pr = function(x, z){ var k = F / (z + Z0); return { x: W / 2 + x * LANE * k, y: HOR + CAMY * k, k: k }; };
    var mide = function(){
      var zh = zona.clientHeight || 600;
      raiz.style.paddingTop = Math.round(Math.max(s.techo() + 8, entre(130, zh * .22, 200))) + "px";
      var r = escena.getBoundingClientRect(); W = Math.max(220, Math.round(r.width)); H = Math.max(220, Math.round(r.height));
      dpr = Math.min(window.devicePixelRatio || 1, W * H > 380000 ? 1.5 : 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      HOR = H * .32; LANE = Math.min(W * .3, 170) * Z0; CAMY = (H * .95 - HOR) * Z0;
      bm = {}; sky = { a: skyline(W, H, dpr, 0), b: skyline(W, H, dpr, 1) };
      estrellas = []; for (var i = 0; i < 34; i++) estrellas.push({ x: Math.random() * W, y: Math.random() * HOR * .75, r: Math.random() * 1.3 + .3, f: Math.random() * 6 });
    };
    var pend = 0, alRedim = function(){ if (pend) return; pend = requestAnimationFrame(function(){ pend = 0; mide(); }); };
    var anchoT = function(){ return Math.min(W * .3, 178); };
    var cartel = function(i, est){ var k = i + "|" + est; if (!bm[k]) bm[k] = tarjeta(ops[i].t, est, anchoT(), dpr); return bm[k]; };
    var zCarta = function(){ var p = T ? Math.min(1, t / T) : 0; return ZF * (1 - p); };
    var quad = function(c, a, b, d, e){ c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.lineTo(d.x, d.y); c.lineTo(e.x, e.y); c.closePath(); };

    var pinta = function(){
      if (!W) return;
      var c = cx; c.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (temblor > 0 && !s.mov) c.translate((Math.random() - .5) * 12 * temblor, (Math.random() - .5) * 7 * temblor);
      /* cielo */
      var g = c.createLinearGradient(0, 0, 0, HOR); g.addColorStop(0, "#081A4F"); g.addColorStop(.55, "#3A2F96"); g.addColorStop(.9, "#C2507A"); g.addColorStop(1, "#FF9A6B");
      c.fillStyle = g; c.fillRect(-20, -20, W + 40, HOR + 22);
      estrellas.forEach(function(e){ c.globalAlpha = .35 + .35 * Math.sin(fase * .15 + e.f); c.fillStyle = "#fff"; c.beginPath(); c.arc(e.x, e.y, e.r, 0, Math.PI * 2); c.fill(); }); c.globalAlpha = 1;
      var sol = c.createRadialGradient(W / 2, HOR, 4, W / 2, HOR, W * .45); sol.addColorStop(0, "rgba(255,220,150,.95)"); sol.addColorStop(.18, "rgba(255,160,110,.55)"); sol.addColorStop(1, "rgba(255,120,120,0)");
      c.fillStyle = sol; c.fillRect(0, 0, W, HOR + 2);
      /* siluetas con paralaje según el carril */
      var desp = (lx - 1);
      if (sky) { var a = sky.a, b = sky.b; c.drawImage(a.img, W / 2 - a.w / 2 - desp * 10, HOR - a.h + 2, a.w, a.h); c.drawImage(b.img, W / 2 - b.w / 2 - desp * 22, HOR - b.h + 3, b.w, b.h); }
      /* suelo */
      var sg = c.createLinearGradient(0, HOR, 0, H); sg.addColorStop(0, "#1A1F5C"); sg.addColorStop(1, "#070B26");
      c.fillStyle = sg; c.fillRect(-20, HOR, W + 40, H - HOR + 30);
      /* pista */
      var zLejos = ZF + 2, zCerca = -Z0 + .15;
      var a0 = pr(-1.62, zLejos), b0 = pr(1.62, zLejos), c0 = pr(1.62, zCerca), d0 = pr(-1.62, zCerca);
      var pg = c.createLinearGradient(0, HOR, 0, H); pg.addColorStop(0, "#232A6E"); pg.addColorStop(1, "#11173F");
      c.fillStyle = pg; quad(c, a0, b0, c0, d0); c.fill();
      /* carril elegido iluminado */
      var li = pr(lx - 1 - .5, zLejos), ld = pr(lx - 1 + .5, zLejos), lc = pr(lx - 1 + .5, zCerca), lb = pr(lx - 1 - .5, zCerca);
      var lg = c.createLinearGradient(0, HOR, 0, H); lg.addColorStop(0, "rgba(255,210,0,0)"); lg.addColorStop(1, "rgba(255,210,0,.18)");
      c.fillStyle = lg; quad(c, li, ld, lc, lb); c.fill();
      /* franjas que corren hacia la cámara */
      for (var zt = zLejos - (recorrido % 1.4); zt > zCerca; zt -= 1.4) {
        var p1 = pr(-1.62, zt), p2 = pr(1.62, zt), p3 = pr(1.62, Math.max(zCerca, zt - .7)), p4 = pr(-1.62, Math.max(zCerca, zt - .7));
        c.fillStyle = "rgba(255,255,255,.035)"; quad(c, p1, p2, p3, p4); c.fill();
      }
      /* bordes de luz */
      c.save(); c.shadowColor = "rgba(110,151,255,.9)"; c.shadowBlur = 10; c.strokeStyle = "#6E97FF"; c.lineWidth = 3;
      [-1.62, 1.62].forEach(function(xb){ var r1 = pr(xb, zLejos), r2 = pr(xb, zCerca); c.beginPath(); c.moveTo(r1.x, r1.y); c.lineTo(r2.x, r2.y); c.stroke(); });
      c.restore();
      /* líneas discontinuas entre carriles */
      c.strokeStyle = "rgba(167,243,255,.55)";
      [-.5, .5].forEach(function(xs){
        for (var zd = zLejos - (recorrido % 1.1); zd > zCerca; zd -= 1.1) {
          var q1 = pr(xs, zd), q2 = pr(xs, Math.max(zCerca, zd - .5)); c.lineWidth = Math.max(1, 3.2 * q2.k); c.beginPath(); c.moveTo(q1.x, q1.y); c.lineTo(q2.x, q2.y); c.stroke();
        }
      });
      /* objetos con profundidad, de lejos a cerca */
      var lista = [];
      orbes.forEach(function(o){ if (!o.coge) lista.push({ z: o.z, f: function(){ orbe(o); } }); });
      if (reto) { var zc = zCarta(); ops.forEach(function(o, i){ var zz = Math.max(.05, zc - (cartas[i].sale || 0)); lista.push({ z: zz, f: function(){ puerta(i, zz); } }); }); }
      lista.push({ z: 0, f: function(){ var p = pr(lx - 1, 0), h = Math.min(H * .3, 140); gato(c, p.x, p.y - 4, h, fase, incl, tSalto >= 0 ? Math.sin(Math.PI * Math.min(1, tSalto / .6)) : 0, mareo > 0); } });
      lista.sort(function(p, q){ return q.z - p.z; }).forEach(function(o){ o.f(); });
      /* líneas de velocidad a los lados */
      if (!s.mov) {
        var fz = Math.min(1, (vel - 1) / .8 + (turbo > 0 ? .7 : 0));
        if (fz > .05) {
          c.strokeStyle = "rgba(255,255,255," + (.18 + .4 * fz).toFixed(2) + ")"; c.lineWidth = 1.6; c.beginPath();
          for (var v = 0; v < 12; v++) { var lado = v % 2 ? 1 : -1, y0 = HOR + 20 + ((recorrido * 90 + v * 47) % (H - HOR)), x0 = W / 2 + lado * (W * .38 + (v * 13 % 40)); c.moveTo(x0, y0); c.lineTo(x0 + lado * 30 * fz, y0 + 36 * fz); }
          c.stroke();
        }
      }
      if (flash > 0) { c.setTransform(dpr, 0, 0, dpr, 0, 0); c.fillStyle = flashCol.replace("A", (flash * .28).toFixed(3)); c.fillRect(0, 0, W, H); }
    };
    var orbe = function(o){
      var p = pr(o.u - 1, o.z); if (p.k < .05) return; var r = Math.max(2, 9 * p.k * 1.3), y = p.y - 26 * p.k * 1.3;
      var gr2 = cx.createRadialGradient(p.x, y, 0, p.x, y, r * 2.2); gr2.addColorStop(0, "rgba(255,230,120,1)"); gr2.addColorStop(.4, "rgba(255,210,0,.7)"); gr2.addColorStop(1, "rgba(255,210,0,0)");
      cx.fillStyle = gr2; cx.beginPath(); cx.arc(p.x, y, r * 2.2, 0, Math.PI * 2); cx.fill();
    };
    var puerta = function(i, zz){
      var est = cartas[i].estado || (i === carril && !hecho ? "sel" : "norm"), b = cartel(i, est), p = pr(i - 1, zz);
      var cerca = 1 - zz / ZF, k = .68 + .32 * cerca * cerca, w = b.w * k, h = b.h * k;
      var cxs = W / 2 + (i - 1) * Math.min(W * .32, 182) * (.6 + .4 * cerca), x = entre(2, cxs - w / 2, W - w - 2), y = p.y - h - 52 * p.k * Z0;
      var al = 1; if (cartas[i].sale) { al = Math.max(0, 1 - cartas[i].sale * 1.2); if (al <= 0) return; }
      cx.globalAlpha = al;
      if (est === "mal" && cartas[i].sacude > 0) x += Math.sin(cartas[i].sacude * 40) * 6;
      /* arco de luz: dos postes desde el suelo del carril hasta la tarjeta */
      var luz = EST[est].luz, pi = pr(i - 1 - .42, zz), pd = pr(i - 1 + .42, zz);
      /* los arcos aparecen a medida que la puerta se acerca (de lejos se veían como un abanico) */
      cx.save(); cx.globalAlpha = al * entre(0, (cerca - .25) / .45, 1); cx.shadowColor = luz; cx.shadowBlur = 12; cx.strokeStyle = est === "norm" ? "rgba(167,200,255,.75)" : EST[est].borde; cx.lineWidth = Math.max(1.5, 4 * p.k * Z0 * .9);
      cx.beginPath(); cx.moveTo(pi.x, pi.y); cx.lineTo(x + w * .14, y + h * .7); cx.moveTo(pd.x, pd.y); cx.lineTo(x + w * .86, y + h * .7); cx.stroke();
      cx.restore();
      cx.drawImage(b.img, x, y, w, h); cx.globalAlpha = 1;
    };

    /* ---- velocidad y nivel ---- */
    var calcVel = function(){
      var nt = 0; for (var i = 0; i < TIERS.length; i++) if (1 / rampa >= TIERS[i][1] - .001) nt = i;
      vel = (1 / rampa) * (1 + (lvl - 1) * .07);
      if (nt !== tier) { var sube = nt > tier; tier = nt; if (sube) { avisa("¡Más rápido! " + TIERS[nt][0], "vel"); fx("motor"); } }
      velEl.querySelector("b").textContent = "×" + (1 / rampa).toFixed(1);
      velEl.querySelector("span").textContent = TIERS[tier][0];
      velEl.querySelectorAll("em i").forEach(function(e, k){ e.classList.toggle("on", k <= tier); });
      velEl.dataset.t = tier;
    };
    var avisa = function(txt, cls){ aviso.className = "r5-aviso " + (cls || ""); aviso.textContent = txt; void aviso.offsetWidth; aviso.classList.add("on"); };

    /* ---- lógica ---- */
    var ponCarril = function(k){ if (!reto || hecho || s.estado() !== "juega") return; k = entre(0, k, n - 1); if (k === carril) return; incl = (k - carril); carril = k; fx("barrido"); nota.classList.add("fuera"); };
    var aSesion = function(x, y){ var a = escena.getBoundingClientRect(), b = s.el.getBoundingClientRect(); return { x: x + a.left - b.left, y: y + a.top - b.top }; };
    var juzga = function(){
      hecho = true; turbo = 0;
      var o = ops[carril], pp = pr(carril - 1, 0), p = aSesion(pp.x, pp.y - H * .25);
      cartas.forEach(function(k, i){ k.estado = ops[i].ok ? "bien" : "mal"; if (i === carril && !ops[i].ok) k.sacude = .4; });
      if (o.ok) {
        aciertos++; rampa = Math.max(.62, rampa - .045); calcVel();
        tSalto = 0; flash = 1; flashCol = "rgba(52,211,153,A)"; fx("atrapa");
        chispas(s, p.x, p.y, { n: 26, cols: ["#FFD200", "#34D399", "#fff"], v: 440, s: 5 });
        s.acierto(reto, { rapidez: Math.max(0, 1 - tReal / T), x: p.x, y: p.y });
        if (tier === 0 || Math.random() < .6) avisa(["Bravo !", "Parfait !", "Excellent !", "Super !"][Math.floor(Math.random() * 4)], "ok");
        for (var i = 0; i < 5; i++) orbes.push({ z: 1.2 + i * .9, u: carril });
        cierre = .65; return;
      }
      rampa = Math.min(1, rampa + .06); calcVel();
      mareo = 1.2; temblor = 1; flash = 1; flashCol = "rgba(229,72,77,A)"; fx("pierde");
      chispas(s, p.x, p.y + 20, { n: 12, cols: ["#E5484D", "#FFB3B8"], v: 240, s: 4 });
      s.fallo(reto, { mal: o.t, etMal: "Ibas por", etiqueta: "Correcta", bien: reto.correcta[0] }).then(function(){ limpia(); s.listo(); });
    };
    var limpia = function(){ reto = null; cartas = []; bm = {}; dist.style.transform = "scaleX(0)"; };

    /* ---- entrada ---- */
    var abajo = function(e){ toque = { x: e.clientX, y: e.clientY, id: e.pointerId }; };
    var arriba = function(e){
      if (!toque || e.pointerId !== toque.id) return;
      var dx = e.clientX - toque.x, dy = e.clientY - toque.y; toque = null;
      if (Math.abs(dx) > 24 && Math.abs(dx) > Math.abs(dy)) { ponCarril(carril + (dx > 0 ? 1 : -1)); return; }
      if (dy < -30 && Math.abs(dy) > Math.abs(dx)) { acelera(); return; }
      var r = cv.getBoundingClientRect(), x = e.clientX - r.left; ponCarril(carril + (x < r.width / 2 ? -1 : 1));
    };
    var acelera = function(){ if (!reto || hecho || s.estado() !== "juega") return; turbo = .8; fx("motor"); };
    var clic = function(e){
      var b = e.target.closest && e.target.closest("[data-r5]"); if (b) { e.preventDefault(); e.stopPropagation(); ponCarril(carril + +b.dataset.r5); return; }
      if (e.target.closest && e.target.closest("[data-r5-turbo]")) { e.preventDefault(); e.stopPropagation(); acelera(); }
    };
    var oir = function(e){ var b = e.target.closest && e.target.closest("[data-rn-oir]"); if (b && reto && reto.audio) { e.preventDefault(); suena(reto.audio); } };
    escena.addEventListener("click", clic);
    cv.addEventListener("pointerdown", abajo); cv.addEventListener("pointerup", arriba); cv.addEventListener("pointercancel", function(){ toque = null; });
    s.el.addEventListener("click", oir); window.addEventListener("resize", alRedim);
    requestAnimationFrame(function(){ mide(); calcVel(); pinta(); });
    setTimeout(function(){ nota.classList.add("fuera"); }, 5000);
    nota.textContent = tactil() ? "Desliza o toca un lado para cambiar de carril" : "← → cambian de carril · ↑ o Espacio acelera · 1 2 3 eligen";
    raiz.classList.toggle("r5-tactil", tactil());

    return {
      jugar: function(r){
        reto = r; hecho = false; cierre = -1; t = 0; tReal = 0; turbo = 0; bm = {};
        ops = G.opcionesReto ? G.opcionesReto(r, 3, s.nivel) : mezcla([{ t: r.correcta[0], ok: true }].concat((r.malas || []).slice(0, 2).map(function(x){ return { t: x, ok: false }; })));
        var vistos = {}, nrm = function(x){ return String(x).toLowerCase().normalize("NFC").replace(/[\s.!?¡¿]+/g, " ").trim(); };
        ops.slice().sort(function(a, b){ return (b.ok ? 1 : 0) - (a.ok ? 1 : 0); }).forEach(function(o){ var k = nrm(o.t); if (vistos[k]) o.rep = 1; else vistos[k] = 1; });
        ops = ops.filter(function(o){ return !o.rep; });
        n = Math.min(3, ops.length); ops = ops.slice(0, n); carril = Math.min(carril, n - 1);
        /* tiempo hasta las puertas: nivel MCER × rampa de la partida × ajuste del director (racha/errores) */
        T = Math.max(2.6, LLEGA[lvl] * rampa * (s.dir.factor || 1)) * (G.aj.sinTiempo ? 1.5 : 1) + (r.audio ? 1.6 : 0) + Math.min(1.2, String(r.q || "").length / 90);
        cartas = ops.map(function(){ return {}; });
        s.banner('<p class="plxg-ask">' + esc(r.ask || "Elige la respuesta") + "</p>" +
          (r.q ? '<p class="plxg-q" lang="fr">' + esc(r.q).replace(/_{2,}/, '<span class="hueco">___</span>') + "</p>" : "") +
          (r.audio ? '<button type="button" class="x-oir" data-rn-oir aria-label="Escuchar otra vez">' + BOCINA + "<span>Escuchar</span></button>" : ""), { oro: r.oro });
        if (r.audio) suena(r.audio);
        requestAnimationFrame(function(){ var antes = H; mide(); if (H !== antes) pinta(); });   /* el enunciado puede ocupar más líneas: se reajusta el espacio */
      },
      tick: function(dt, d){
        var dd = d || 0, mov = s.mov ? .5 : 1, v = vel * (turbo > 0 ? 2.1 : 1);
        recorrido += dd * 7.5 * v * mov; fase += dd * 16 * Math.min(2, v);
        lx += (carril - lx) * Math.min(1, (dt || dd) * 14); incl *= Math.pow(.02, dd || 0); if (Math.abs(carril - lx) < .02) incl *= .8;
        if (tSalto >= 0) { tSalto += dd; if (tSalto > .6) tSalto = -1; }
        if (mareo > 0) mareo -= dd; if (temblor > 0) temblor = Math.max(0, temblor - dd * 3); if (flash > 0) flash = Math.max(0, flash - dd * 3); if (turbo > 0) turbo -= dd;
        var dz = dd * 7.5 * v * mov;
        orbes = orbes.filter(function(o){
          o.z -= dz;
          if (!o.coge && o.z < .15 && Math.abs(lx - o.u) < .5) { o.coge = true; fx("brillo"); var pm = pr(o.u - 1, 0), ps = aSesion(pm.x, pm.y - H * .2); chispas(s, ps.x, ps.y, { n: 6, cols: ["#FFD200", "#fff"], v: 160, s: 3 }); }
          return o.z > -Z0 + .2 && !o.coge;
        });
        if (reto) {
          if (cierre >= 0) { cierre -= dd; cartas.forEach(function(k){ k.sale = (k.sale || 0) + dd * 2.2; if (k.sacude > 0) k.sacude -= dd; }); if (cierre < 0) { limpia(); s.listo(); } }
          else if (!hecho && dd) { tReal += dd; t += dd * (turbo > 0 ? 2.1 : 1); var pr2 = Math.min(1, t / T); dist.style.transform = "scaleX(" + pr2.toFixed(3) + ")"; dist.parentNode.classList.toggle("poco", pr2 > .72); if (t >= T) juzga(); }
          else cartas.forEach(function(k){ if (k.sacude > 0) k.sacude -= dd; });
        }
        pinta();
      },
      tecla: function(e){
        var k = e.key;
        if (k === "ArrowLeft" || k === "a" || k === "A") { e.preventDefault(); ponCarril(carril - 1); }
        else if (k === "ArrowRight" || k === "d" || k === "D") { e.preventDefault(); ponCarril(carril + 1); }
        else if (k === "ArrowUp" || k === " " || k === "Enter" || k === "w" || k === "W") { e.preventDefault(); acelera(); }
        else if (/^[1-3]$/.test(k)) { e.preventDefault(); ponCarril(+k - 1); }
      },
      pausa: function(){ calla(); }, sigue: function(){},
      destruye: function(){ cv.removeEventListener("pointerdown", abajo); cv.removeEventListener("pointerup", arriba); s.el.removeEventListener("click", oir); window.removeEventListener("resize", alRedim); if (pend) cancelAnimationFrame(pend); calla(); },
      depura: function(){ return { carril: carril, n: n, T: +T.toFixed(2), t: +t.toFixed(2), lvl: lvl, vel: +vel.toFixed(2), rampa: +rampa.toFixed(3), tier: TIERS[tier][0], aciertos: aciertos, ops: ops.map(function(o){ return o.t + (o.ok ? "*" : ""); }) }; }
    };
  }

  var gr = G.juegos.gr;
  gr.montar = function(zona, s){ return motor(zona, s); };
  var _reglas = gr.reglas;
  gr.reglas = function(alc){
    var r = _reglas ? _reglas(alc) : [];
    var out = Array.isArray(r) ? r.filter(function(x){ return !/carril|muelle|Manzana corre|acelera|velocidad|↑ ↓|rieles/i.test(x); }) : [];
    var l = LVN[(alc && alc.track) || ""] || 1;
    return out.concat(["Las respuestas llegan como puertas, una por carril. Ponte en el carril de la correcta antes de cruzarlas.",
      "Cambia de carril deslizando o tocando un lado (← → en el teclado). Acelera con ↑, Espacio o el botón.",
      "Tu nivel (" + ["", "A1", "A2", "B1", "B2", "C1"][l] + ") marca la velocidad de salida, y cada acierto la sube: Calma → Ágil → Rápido → Turbo → Hiper. Si fallas, baja un poco."]);
  };

  var st = document.createElement("style"); st.id = "plx80";
  st.textContent = [
    ".r5{position:absolute;inset:0;display:flex;flex-direction:column;box-sizing:border-box}",
    ".r5-escena{position:relative;flex:1;min-height:0;border-radius:24px 24px 0 0;overflow:hidden;background:#081A4F;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}",
    ".r5-escena canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}",
    ".r5-dist{position:absolute;top:12px;left:16px;right:120px;height:8px;border-radius:99px;background:rgba(255,255,255,.14);overflow:hidden}",
    ".r5-dist i{display:block;height:100%;background:linear-gradient(90deg,#34D399,#FFD200);transform-origin:left;transform:scaleX(0);border-radius:99px}.r5-dist.poco i{background:linear-gradient(90deg,#FFD200,#FF6B3D)}",
    ".r5-vel{position:absolute;top:6px;right:10px;display:grid;grid-template-columns:auto auto;align-items:center;column-gap:6px;padding:6px 10px;border-radius:14px;background:rgba(8,18,60,.55);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#fff;font-family:Poppins,system-ui,sans-serif}",
    ".r5-vel b{font-weight:800;font-size:1rem}.r5-vel span{font-size:.72rem;font-weight:700;opacity:.85}.r5-vel em{grid-column:1/-1;display:flex;gap:3px;margin-top:3px}",
    ".r5-vel em i{flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,.2);transition:background .3s}.r5-vel em i.on{background:#FFD200}.r5-vel[data-t='3'] em i.on,.r5-vel[data-t='4'] em i.on{background:#FF6B3D}",
    ".r5-aviso{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%) scale(.6);opacity:0;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:clamp(1.4rem,6vw,2.2rem);color:#fff;text-shadow:0 4px 18px rgba(0,0,0,.45);pointer-events:none;white-space:nowrap}",
    ".r5-aviso.on{animation:r5av 1s var(--v4-e,cubic-bezier(.22,1,.36,1)) both}.r5-aviso.ok{color:#FFD200}.r5-aviso.vel{color:#7DD3FC}",
    "@keyframes r5av{0%{opacity:0;transform:translate(-50%,-50%) scale(.6)}20%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}35%{transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-70%) scale(1)}}",
    ".r5-btn{all:unset;box-sizing:border-box;position:absolute;bottom:calc(14px + env(safe-area-inset-bottom));width:62px;height:62px;border-radius:50%;display:grid;place-items:center;cursor:pointer;color:#fff;background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3);transition:transform .12s,background .2s}",
    ".r5-btn svg{width:28px;height:28px}.r5-btn:active{transform:scale(.9);background:rgba(255,210,0,.35)}.r5-btn.izq{left:14px}.r5-btn.der{right:14px}",
    ".r5-turbo{all:unset;box-sizing:border-box;position:absolute;bottom:calc(22px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:6px;padding:10px 16px;border-radius:99px;cursor:pointer;color:#0B2D74;background:#FFD200;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:.85rem;box-shadow:0 3px 0 #B38F00,0 8px 22px rgba(255,210,0,.35);transition:transform .12s}",
    ".r5-turbo svg{width:18px;height:18px}.r5-turbo:active{transform:translateX(-50%) translateY(2px);box-shadow:0 1px 0 #B38F00}",
    ".r5-nota.fuera{opacity:0;transform:translateY(6px)}.r5-nota{transition:opacity .5s,transform .5s;position:absolute;left:0;right:0;bottom:calc(88px + env(safe-area-inset-bottom));margin:0;text-align:center;color:rgba(255,255,255,.7);font-size:.78rem;pointer-events:none}",
    ".r5:not(.r5-tactil) .r5-nota{bottom:calc(14px + env(safe-area-inset-bottom))}.r5:not(.r5-tactil) .r5-turbo{bottom:calc(40px + env(safe-area-inset-bottom))}",
    "@media (pointer:fine){.r5-btn{width:52px;height:52px;opacity:.75}}"
  ].join("\n");
  document.head.appendChild(st);
})();
