/* PLEX PLAY 3.1.0 — Grammar Run al estilo Subway Surfers
   - Cámara detrás de Manzana: tres carriles con rieles y traviesas que se pierden hacia el centro del horizonte,
     edificios de París a los dos lados, faroles y París al fondo. Todo pasa rápido (traviesas, fachadas, líneas de
     velocidad en los bordes, leve bamboleo de cámara) y cada acierto sube un poco la velocidad.
   - Manzana se ve de espaldas (dibujada aquí: boina, camiseta negra con franjas, cola rayada que se mueve, patitas
     que corren y almohadillas rosadas). Se inclina al cambiar de carril, salta al acertar y se tambalea al fallar.
   - Las respuestas llegan como letreros sobre cada carril. Quedarse en el carril correcto cuando llegan = acierto.
   - Controles: ← → (o A / D) cambian de carril; ↑ o Espacio acelera. En el celular: deslizar a los lados, tocar la
     mitad izquierda o derecha, o los botones. La lógica de retos, puntos y resultados es la misma de la 2.7. */
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
  var BOCINA = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

  var SPR = {};
  var carga = function(){ if (SPR.m) return; ["moneda", "estrella", "paris-tira"].forEach(function(n){ var i = new Image(); i.src = "img/runner/" + n + ".webp"; SPR[n === "moneda" ? "m" : n === "estrella" ? "e" : "p"] = i; }); };
  var ok = function(i){ return i && i.complete && i.naturalWidth > 0; };

  /* ---- letrero de respuesta (se pinta una vez por estilo) ---- */
  var EST = {
    norm: { bg: "#FFFDF6", borde: "#0B2D74", txt: "#0B2D74", franja: "#FFD200" },
    sel:  { bg: "#FFFFFF", borde: "#16A34A", txt: "#0B2D74", franja: "#22C55E", brillo: "rgba(34,197,94,.55)" },
    bien: { bg: "#16A34A", borde: "#0E6B30", txt: "#FFFFFF", franja: "#FFD200" },
    mal:  { bg: "#FEE2E2", borde: "#DC2626", txt: "#991B1B", franja: "#F87171" }
  };
  var rr = function(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
  var lineas = function(c, t, max){ var ws = String(t).split(/\s+/), out = [], cur = ""; ws.forEach(function(w){ var p = cur ? cur + " " + w : w; if (c.measureText(p).width > max && cur) { out.push(cur); cur = w; } else cur = p; }); if (cur) out.push(cur); return out.slice(0, 3); };
  var letrero = function(texto, estilo, ancho, dpr){
    var e = EST[estilo], m = document.createElement("canvas"), c = m.getContext("2d"), fs = 17, pad = 12;
    c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif";
    var ls = lineas(c, texto, ancho - pad * 2); if (ls.length > 2) { fs = 14; c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif"; ls = lineas(c, texto, ancho - pad * 2); }
    var lh = fs * 1.2, h = Math.max(54, ls.length * lh + 26), w = ancho, m2 = 8;
    m.width = Math.ceil((w + m2 * 2) * dpr); m.height = Math.ceil((h + m2 * 2 + 8) * dpr); c = m.getContext("2d"); c.scale(dpr, dpr);
    if (e.brillo) { c.shadowColor = e.brillo; c.shadowBlur = 16; }
    c.fillStyle = e.borde; rr(c, m2, m2 + 4, w, h, 14); c.fill(); c.shadowBlur = 0;
    c.fillStyle = e.bg; rr(c, m2, m2, w, h, 14); c.fill();
    c.lineWidth = 3; c.strokeStyle = e.borde; rr(c, m2 + 1.5, m2 + 1.5, w - 3, h - 3, 13); c.stroke();
    c.fillStyle = e.franja; rr(c, m2 + 10, m2 + 6, w - 20, 5, 3); c.fill();
    c.fillStyle = e.txt; c.font = "800 " + fs + "px Poppins, Inter, system-ui, sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
    ls.forEach(function(l, i){ c.fillText(l, m2 + w / 2, m2 + 16 + (h - 20) / 2 - (ls.length - 1) * lh / 2 + i * lh); });
    return { img: m, w: w + m2 * 2, h: h + m2 * 2 + 8 };
  };

  /* ---- Manzana de espaldas ---- */
  /* Manzana de espaldas, pintado como sus stickers: contorno café, pelaje crema y atigrado, camiseta negra con
     franjas azul, blanco y rojo, boina azul marino y almohadillas rosadas cuando levanta las patas. */
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

  function motor(zona, s){
    carga();
    zona.innerHTML =
      '<div class="x56 r3 r4"><div class="r3-escena"><canvas aria-hidden="true"></canvas>' +
        '<div class="r3-reloj" aria-hidden="true"><span>⏱️</span><b><i></i></b></div><div class="r3-aviso" aria-live="polite"></div></div>' +
      '<div class="r3-mandos"><button type="button" data-r4="-1" aria-label="Carril de la izquierda">←</button>' +
        '<p class="x-nota r3-nota"></p>' +
        '<button type="button" data-r4="1" aria-label="Carril de la derecha">→</button>' +
        '<button type="button" class="r3-turbo" data-r4-turbo aria-label="Acelerar">⏩</button></div></div>';
    var raiz = zona.firstChild, escena = raiz.querySelector(".r3-escena"), cv = raiz.querySelector("canvas"), cx = cv.getContext("2d"),
      reloj = raiz.querySelector(".r3-reloj i"), relojBox = raiz.querySelector(".r3-reloj"), aviso = raiz.querySelector(".r3-aviso"), nota = raiz.querySelector(".r3-nota");
    var W = 0, H = 0, dpr = 1, HOR = 0, F = 0, LANE = 0, CAMY = 0;
    var reto = null, ops = [], n = 3, carril = 1, lx = 1, T = 0, t = 0, tReal = 0, hecho = false, cierre = -1, turbo = 0, recorrido = 0, vel = 1, velBase = 1;
    var cartas = [], monedas = [], faroles = [], fase = 0, salto = 0, tSalto = -1, mareo = 0, temblor = 0, flash = 0, flashCol = "", toque = null, bm = {}, incl = 0, parisC = null;
    var ZF = 16, Z0 = 1.35;

    /* ---- proyección: x en carriles (-1, 0, 1), z hacia el fondo (0 = Manzana) ---- */
    var pr = function(x, z){ var k = F / (z + Z0); return { x: W / 2 + x * LANE * k, y: HOR + CAMY * k, k: k }; };
    var mide = function(){
      var zh = zona.clientHeight || 600;
      raiz.style.paddingTop = Math.round(Math.max(s.techo() + 8, entre(140, zh * .24, 210))) + "px";
      var r = escena.getBoundingClientRect(); W = Math.max(220, Math.round(r.width)); H = Math.max(220, Math.round(r.height));
      dpr = Math.min(window.devicePixelRatio || 1, W * H > 380000 ? 1.5 : 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      HOR = H * .3; F = 1; LANE = Math.min(W * .3, 170) * Z0; CAMY = (H * .93 - HOR) * Z0;
      bm = {}; parisC = null;
    };
    var pend = 0, alRedim = function(){ if (pend) return; pend = requestAnimationFrame(function(){ pend = 0; mide(); }); };
    var ancho = function(){ return Math.min(W * .3, 176); };
    var cartel = function(i, est){ var k = i + "|" + est; if (!bm[k]) bm[k] = letrero(ops[i].t, est, ancho(), dpr); return bm[k]; };
    var zCarta = function(){ var p = T ? Math.min(1, t / T) : 0; return ZF * (1 - p); };

    var paris = function(){
      if (parisC) return parisC; var pa = SPR.p; if (!ok(pa)) return null;
      var ph = H * .22, pw = pa.naturalWidth * ph / pa.naturalHeight, m = document.createElement("canvas");
      m.width = Math.ceil(pw * dpr); m.height = Math.ceil(ph * dpr); m.getContext("2d").drawImage(pa, 0, 0, m.width, m.height); parisC = m; return m;
    };

    var quad = function(c, a, b, d, e){ c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.lineTo(d.x, d.y); c.lineTo(e.x, e.y); c.closePath(); };
    var pinta = function(dt){
      if (!W) return;
      var c = cx; c.setTransform(dpr, 0, 0, dpr, 0, 0);
      var bamb = s.mov ? 0 : Math.sin(fase * .5) * 1.6;
      if (temblor > 0 && !s.mov) c.translate((Math.random() - .5) * 12 * temblor, (Math.random() - .5) * 7 * temblor);
      c.translate(0, bamb);
      /* cielo y París al fondo */
      var cielo = c.createLinearGradient(0, 0, 0, HOR); cielo.addColorStop(0, "#5AA7FF"); cielo.addColorStop(.75, "#BFE0FF"); cielo.addColorStop(1, "#FFE9C7");
      c.fillStyle = cielo; c.fillRect(-20, -20, W + 40, HOR + 22);
      var pc = paris(); if (pc) { var pw = pc.width / dpr, ph = pc.height / dpr, ox = W / 2 - pw / 2; c.drawImage(pc, ox, HOR - ph + 4, pw, ph); if (ox > 0) { c.drawImage(pc, ox - pw, HOR - ph + 4, pw, ph); c.drawImage(pc, ox + pw, HOR - ph + 4, pw, ph); } }
      /* suelo */
      c.fillStyle = "#D9C7A6"; c.fillRect(-20, HOR, W + 40, H - HOR + 30);
      var D = 1.2, fz = recorrido % D;
      /* aceras y edificios a los lados: franjas que pasan */
      for (var z = ZF + 2 - fz; z > -Z0 + .15; z -= D) {
        var z2 = Math.max(-Z0 + .12, z - D), par = Math.floor((recorrido + z) / D) % 2 === 0;
        [-1, 1].forEach(function(l){
          var a = pr(l * 1.75, z), b = pr(l * 1.75, z2), d = pr(l * 3.2, z2), e = pr(l * 3.2, z);
          c.fillStyle = par ? "#CDB38C" : "#C3A77E"; quad(c, a, b, d, e); c.fill();
          /* fachada: sube desde la acera */
          var fa = pr(l * 3.2, z), fb = pr(l * 3.2, z2), alt1 = (fa.y - HOR) * 2.4, alt2 = (fb.y - HOR) * 2.4;
          c.fillStyle = par ? "#F3E6CF" : "#EADBC0"; c.beginPath(); c.moveTo(fa.x, fa.y); c.lineTo(fb.x, fb.y); c.lineTo(fb.x, fb.y - alt2); c.lineTo(fa.x, fa.y - alt1); c.closePath(); c.fill();
          /* techo de zinc azul */
          c.fillStyle = "#5C7AA8"; c.beginPath(); c.moveTo(fa.x, fa.y - alt1); c.lineTo(fb.x, fb.y - alt2); c.lineTo(fb.x - l * 4, fb.y - alt2 * 1.08); c.lineTo(fa.x - l * 6, fa.y - alt1 * 1.08); c.closePath(); c.fill();
          /* ventanas */
          if (fa.k > .06) { c.fillStyle = "rgba(40,60,110,.55)"; var mx = (fa.x + fb.x) / 2, my = (fa.y + fb.y) / 2, ah = (alt1 + alt2) / 2, vw = Math.abs(fa.x - fb.x) * .32;
            for (var f = 1; f <= 3; f++) c.fillRect(mx - vw / 2, my - ah * f * .26, vw, ah * .12); }
        });
      }
      /* vía: tres carriles con traviesas y rieles */
      var a0 = pr(-1.6, ZF + 2), b0 = pr(1.6, ZF + 2), c0 = pr(1.6, -Z0 + .15), d0 = pr(-1.6, -Z0 + .15);
      c.fillStyle = "#8E7B64"; quad(c, a0, b0, c0, d0); c.fill();
      c.fillStyle = "#6B4A2E";
      for (var zt = ZF + 2 - (recorrido % .6); zt > -Z0 + .2; zt -= .6) {
        for (var ln = -1; ln <= 1; ln++) { var t1 = pr(ln - .42, zt), t2 = pr(ln + .42, zt), th = Math.max(1, 6 * t1.k * .9); c.fillRect(t1.x, t1.y - th / 2, t2.x - t1.x, th); }
      }
      c.strokeStyle = "#C9D2DE"; c.lineWidth = 1;
      for (var ln2 = -1; ln2 <= 1; ln2++) [-.3, .3].forEach(function(o){ var r1 = pr(ln2 + o, ZF + 2), r2 = pr(ln2 + o, -Z0 + .15); c.lineWidth = 2.5; c.beginPath(); c.moveTo(r1.x, r1.y); c.lineTo(r2.x, r2.y); c.stroke(); });
      /* separadores entre carriles */
      c.strokeStyle = "rgba(255,255,255,.35)"; c.lineWidth = 2;
      [-.5, .5].forEach(function(xs){ var s1 = pr(xs, ZF + 2), s2 = pr(xs, -Z0 + .15); c.beginPath(); c.moveTo(s1.x, s1.y); c.lineTo(s2.x, s2.y); c.stroke(); });
      /* lo que tiene profundidad, de lejos a cerca */
      var lista = [];
      faroles.forEach(function(f){ lista.push({ z: f.z, f: function(){ farol(f); } }); });
      monedas.forEach(function(m){ if (!m.coge) lista.push({ z: m.z, f: function(){ moneda(m); } }); });
      if (reto) { var zc = zCarta(); ops.forEach(function(o, i){ var zz = Math.max(.05, zc - (cartas[i].sale || 0)); lista.push({ z: zz, f: function(){ letreroEn(i, zz); } }); }); }
      lista.push({ z: 0, f: function(){ var p = pr(lx - 1, 0); var h = Math.min(H * .34, 150); gato(c, p.x, p.y - 4, h, fase, incl, tSalto >= 0 ? Math.sin(Math.PI * Math.min(1, tSalto / .6)) : 0, mareo > 0); } });
      lista.sort(function(p, q){ return q.z - p.z; }).forEach(function(o){ o.f(); });
      /* sombra de Manzana */
      /* líneas de velocidad */
      if (!s.mov) {
        var fuerza = Math.min(1, (vel - .8) / 1.6 + (turbo > 0 ? .6 : 0));
        if (fuerza > 0) {
          c.strokeStyle = "rgba(255,255,255," + (.25 + .45 * fuerza).toFixed(2) + ")"; c.lineWidth = 2; c.beginPath();
          for (var v = 0; v < 14; v++) { var ang = v / 14 * Math.PI * 2 + recorrido * 3, r0 = W * (.45 + ((recorrido * 7 + v * 13) % 10) / 22), cxp = W / 2 + Math.cos(ang) * r0, cyp = HOR + H * .2 + Math.sin(ang) * r0 * .6; if (Math.abs(cxp - W / 2) < W * .3) continue; c.moveTo(cxp, cyp); c.lineTo(cxp + (cxp - W / 2) * .12, cyp + (cyp - HOR) * .12); }
          c.stroke();
        }
      }
      if (flash > 0) { c.setTransform(dpr, 0, 0, dpr, 0, 0); c.fillStyle = flashCol.replace("A", (flash * .3).toFixed(3)); c.fillRect(0, 0, W, H); }
    };
    var farol = function(f){
      var p = pr(f.l * 1.9, f.z); if (p.k < .04) return; var h = (p.y - HOR) * 2.1;
      cx.strokeStyle = "#1F2937"; cx.lineWidth = Math.max(1, 3 * p.k * 1.4); cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(p.x, p.y - h); cx.stroke();
      cx.fillStyle = "#FFE08A"; cx.beginPath(); cx.arc(p.x, p.y - h, Math.max(1.5, 7 * p.k * 1.4), 0, Math.PI * 2); cx.fill();
    };
    var moneda = function(m){
      var p = pr(m.u - 1, m.z), im = m.est ? SPR.e : SPR.m; if (!ok(im)) return;
      var h = 34 * p.k * 1.3, g = m.est ? 1 : .35 + .65 * Math.abs(Math.cos(recorrido * 6 + m.z * 3)), w = h * g;
      cx.drawImage(im, p.x - w / 2, p.y - h - 18 * p.k * 1.3, w, h);
    };
    var letreroEn = function(i, zz){
      var est = cartas[i].estado || (i === carril && !hecho ? "sel" : "norm"), b = cartel(i, est), p = pr(i - 1, zz);
      /* el letrero se lee desde lejos: crece de 0,5 a 0,95 mientras se acerca (los postes sí siguen la perspectiva) */
      var cerca = 1 - zz / ZF, k = .5 + .45 * cerca * cerca, w = b.w * k, h = b.h * k, cxs = W / 2 + (i - 1) * Math.min(W * .32, 180) * (.62 + .38 * cerca), x = entre(2, cxs - w / 2, W - w - 2), y = p.y - h - 46 * p.k * Z0;
      if (cartas[i].sale) { cx.globalAlpha = Math.max(0, 1 - cartas[i].sale * 1.2); if (cx.globalAlpha <= 0) { cx.globalAlpha = 1; return; } }
      if (est === "mal" && cartas[i].sacude > 0) x += Math.sin(cartas[i].sacude * 40) * 6;
      /* postes */
      cx.fillStyle = "#1F2937"; var pw = Math.max(1.5, 5 * k); cx.beginPath(); cx.moveTo(x + w * .2, y + h - 4); cx.lineTo(p.x - 3 * p.k * Z0, p.y); cx.lineTo(p.x + 3 * p.k * Z0, p.y); cx.lineTo(x + w * .2 + pw, y + h - 4); cx.fill();
      cx.beginPath(); cx.moveTo(x + w * .8 - pw, y + h - 4); cx.lineTo(p.x - 3 * p.k * Z0, p.y); cx.lineTo(p.x + 3 * p.k * Z0, p.y); cx.lineTo(x + w * .8, y + h - 4); cx.fill();
      cx.drawImage(b.img, x, y, w, h); cx.globalAlpha = 1;
    };

    /* ---- lógica (igual que la 2.7) ---- */
    var ponCarril = function(k){ if (!reto || hecho || s.estado() !== "juega") return; k = entre(0, k, n - 1); if (k === carril) return; incl = (k - carril) * 1; carril = k; fx("barrido"); };
    var aSesion = function(x, y){ var a = escena.getBoundingClientRect(), b = s.el.getBoundingClientRect(); return { x: x + a.left - b.left, y: y + a.top - b.top }; };
    var avisa = function(txt, cls){ aviso.className = "r3-aviso " + (cls || ""); aviso.textContent = txt; void aviso.offsetWidth; aviso.classList.add("on"); };
    var juzga = function(){
      hecho = true; turbo = 0;
      var o = ops[carril], pp = pr(carril - 1, 0), p = aSesion(pp.x, pp.y - H * .25);
      cartas.forEach(function(k, i){ k.estado = ops[i].ok ? "bien" : "mal"; if (i === carril && !ops[i].ok) k.sacude = .4; });
      if (o.ok) {
        tSalto = 0; flash = 1; flashCol = "rgba(255,210,0,A)"; fx("atrapa"); velBase = Math.min(2.2, velBase + .08);
        chispas(s, p.x, p.y, { n: 24, cols: ["#FFD200", "#34D399", "#fff"], v: 420, s: 5 });
        s.acierto(reto, { rapidez: Math.max(0, 1 - tReal / T), x: p.x, y: p.y });
        avisa(["Bravo !", "Parfait !", "Excellent !", "Super !"][Math.floor(Math.random() * 4)], "ok");
        for (var i = 0; i < 6; i++) monedas.push({ z: 1.2 + i * .9, u: carril, est: i === 5 });
        cierre = .7; return;
      }
      mareo = 1.2; temblor = 1; flash = 1; flashCol = "rgba(229,72,77,A)"; fx("pierde"); velBase = Math.max(1, velBase - .15);
      chispas(s, p.x, p.y + 20, { n: 12, cols: ["#E5484D", "#FFB3B8"], v: 240, s: 4 });
      s.fallo(reto, { mal: o.t, etMal: "Ibas por", etiqueta: "Correcta", bien: reto.correcta[0] }).then(function(){ limpia(); s.listo(); });
    };
    var limpia = function(){ reto = null; cartas = []; bm = {}; reloj.style.transform = "scaleX(1)"; };

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
      var b = e.target.closest && e.target.closest("[data-r4]"); if (b) { e.preventDefault(); ponCarril(carril + +b.dataset.r4); return; }
      if (e.target.closest && e.target.closest("[data-r4-turbo]")) { e.preventDefault(); acelera(); }
    };
    var oir = function(e){ var b = e.target.closest && e.target.closest("[data-rn-oir]"); if (b && reto && reto.audio) { e.preventDefault(); suena(reto.audio); } };
    raiz.querySelector(".r3-mandos").addEventListener("click", clic);
    cv.addEventListener("pointerdown", abajo); cv.addEventListener("pointerup", arriba); cv.addEventListener("pointercancel", function(){ toque = null; });
    s.el.addEventListener("click", oir); window.addEventListener("resize", alRedim);
    for (var q = 0; q < 8; q++) faroles.push({ z: q * 2.4, l: q % 2 ? 1 : -1 });
    requestAnimationFrame(function(){ mide(); pinta(0); });
    nota.textContent = tactil() ? "Desliza ← → para cambiar de carril · ⏩ acelera" : "← → cambian de carril · ↑ o Espacio acelera";

    return {
      jugar: function(r){
        reto = r; hecho = false; cierre = -1; t = 0; tReal = 0; turbo = 0; bm = {};
        ops = G.opcionesReto ? G.opcionesReto(r, 3, s.nivel) : mezcla([{ t: r.correcta[0], ok: true }].concat((r.malas || []).slice(0, 2).map(function(x){ return { t: x, ok: false }; })));
        /* sin opciones repetidas (mismo texto con otra mayúscula o espacios): se queda la correcta */
        var vistos = {}, nrm = function(x){ return String(x).toLowerCase().normalize("NFC").replace(/[\s.!?¡¿]+/g, " ").trim(); };
        ops.slice().sort(function(a, b){ return (b.ok ? 1 : 0) - (a.ok ? 1 : 0); }).forEach(function(o){ var k = nrm(o.t); if (vistos[k]) o.rep = 1; else vistos[k] = 1; });
        ops = ops.filter(function(o){ return !o.rep; });
        n = Math.min(3, ops.length); ops = ops.slice(0, n); carril = Math.min(carril, n - 1);
        T = s.dir.t() * 1.15 + 3.4 + (r.audio ? 1.8 : 0);
        cartas = ops.map(function(){ return {}; });
        s.banner('<p class="plxg-ask">' + esc(r.ask || "Elige la respuesta") + "</p>" +
          (r.q ? '<p class="plxg-q" lang="fr">' + esc(r.q).replace(/_{2,}/, '<span class="hueco">___</span>') + "</p>" : "") +
          (r.audio ? '<button type="button" class="x-oir" data-rn-oir aria-label="Escuchar otra vez">' + BOCINA + "<span>Escuchar</span></button>" : ""), { oro: r.oro });
        if (r.audio) suena(r.audio);
      },
      tick: function(dt, d){
        var dd = d || 0, mov = s.mov ? .5 : 1;
        vel = velBase * (turbo > 0 ? 2.2 : 1);
        var dz = dd * 7.5 * vel * mov;       /* el suelo pasa rápido (sensación de velocidad) */
        recorrido += dz; fase += dd * 16 * Math.min(1.8, vel);
        lx += (carril - lx) * Math.min(1, (dt || dd) * 14); incl *= Math.pow(.02, dd || 0); if (Math.abs(carril - lx) < .02) incl *= .8;
        if (tSalto >= 0) { tSalto += dd; if (tSalto > .6) tSalto = -1; }
        if (mareo > 0) mareo -= dd; if (temblor > 0) temblor = Math.max(0, temblor - dd * 3); if (flash > 0) flash = Math.max(0, flash - dd * 3); if (turbo > 0) turbo -= dd;
        faroles.forEach(function(f){ f.z -= dz; if (f.z < -Z0 + .2) f.z += 19.2; });
        monedas = monedas.filter(function(m){
          m.z -= dz;
          if (!m.coge && m.z < .15 && Math.abs(lx - m.u) < .5) { m.coge = true; fx("brillo"); var pm = pr(m.u - 1, 0), ps = aSesion(pm.x, pm.y - H * .2); chispas(s, ps.x, ps.y, { n: 6, cols: ["#FFD200", "#fff"], v: 160, s: 3 }); }
          return m.z > -Z0 + .2 && !m.coge;
        });
        if (reto) {
          if (cierre >= 0) { cierre -= dd; cartas.forEach(function(k){ k.sale = (k.sale || 0) + dd * 2.2; if (k.sacude > 0) k.sacude -= dd; }); if (cierre < 0) { limpia(); s.listo(); } }
          else if (!hecho && dd) { tReal += dd; t += dd * (turbo > 0 ? 2.2 : 1); reloj.style.transform = "scaleX(" + Math.max(0, 1 - t / T).toFixed(3) + ")"; relojBox.classList.toggle("poco", t / T > .72); if (t >= T) juzga(); }
          else cartas.forEach(function(k){ if (k.sacude > 0) k.sacude -= dd; });
        }
        pinta(dd);
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
      depura: function(){ return { carril: carril, n: n, T: T, t: t, W: W, H: H, vel: +vel.toFixed(2), ops: ops.map(function(o){ return o.t + (o.ok ? "*" : ""); }) }; }
    };
  }

  var gr = G.juegos.gr;
  gr.montar = function(zona, s){ return motor(zona, s); };
  var _reglas = gr.reglas;
  gr.reglas = function(alc){
    var r = _reglas ? _reglas(alc) : [];
    var out = Array.isArray(r) ? r.filter(function(x){ return !/carril|muelle|Manzana corre|acelera|↑ ↓/i.test(x); }) : [];
    return out.concat(["Manzana corre por los rieles de París. Las respuestas llegan en letreros, una por carril.",
      "Cambia de carril con ← → (en el celular, desliza a los lados o toca la mitad izquierda o derecha). ↑, Espacio o ⏩ acelera.",
      "Cada acierto sube la velocidad. Si te equivocas, Manzana se marea y baja un poco."]);
  };
  var st = document.createElement("style"); st.id = "plx70";
  st.textContent = ".r4 .r3-escena{background:#5AA7FF}";
  document.head.appendChild(st);
})();
