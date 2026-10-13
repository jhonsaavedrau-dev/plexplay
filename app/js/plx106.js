/* PLEX PLAY 4.31.0 — Terminar una lección se celebra
   Pedido de Jhon: «la experiencia al terminar una lección se siente aburrida y sin vida; una animación de apertura de
   cofre más movida; los logros se ven los antiguos; mejorar sin saturar al estudiante».

   Antes, finish() encadenaba pantallas sueltas (racha, nivel y un logro por pantalla, con iconos de línea). Ahora todo
   lo que gana el estudiante va en UNA pantalla, en este orden y con un solo «Continuar»:
     1. COFRE. Aparece, tiembla y se abre con un destello; de él salen los XP y las monedas de la lección (cuentan).
     2. RACHA. Manzana en llamas, el número que cuenta y los días de la semana que se encienden uno a uno.
     3. NIVEL del gato, si subió.
     4. LOGROS nuevos, con sus pegatinas (img/logros), todos juntos.
   Tocar la pantalla adelanta la animación hasta el final; con «menos movimiento» se ve todo quieto.
   Fuera de una lección, la racha (p. ej. desde Inicio) y un logro suelto usan el mismo diseño.
   CSS propio, sin capa ni !important (ver la nota de los estilos). Debe ir ANTES de plx97. */
(function(){
  "use strict";
  var D = document;
  if (typeof finish !== "function" || typeof gAchModal !== "function" || typeof gStreakModal !== "function" || !window.PLX_UI) return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var quieto = function(){ try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  var monedas = function(){ try { return (S.game && S.game.coins) || 0; } catch (e) { return 0; } };
  var son = function(n){ try { if (typeof SFX !== "undefined" && SFX[n]) SFX[n](); } catch (e) {} };

  /* ---------------- piezas de la pantalla ---------------- */
  var CHISPAS = function(){
    var h = "", col = ["#FFC83D", "#FF6B8B", "#2F6BFF", "#35C97A", "#FFD866", "#B48CFF"];
    for (var i = 0; i < 16; i++) { var a = i * 22.5 + (i % 2 ? 8 : -6), d = 90 + (i % 4) * 26;
      h += '<i class="cel-ch' + (i % 5 === 0 ? " mon" : "") + '" style="--a:' + a + "deg;--d:" + d + "px;--c:" + col[i % col.length] + ";--t:" + (i % 3) * 0.05 + 's"></i>'; }
    return h;
  };
  var cofre = function(c){
    return '<section class="cel-cofre" aria-label="Cofre de la lección">' +
      '<div class="cel-esc"><span class="cel-rayos" aria-hidden="true"></span><span class="cel-luz" aria-hidden="true"></span>' +
        '<img class="cel-cz" src="img/ic2/cofre.webp" alt=""><img class="cel-ca" src="img/ic2/cofre-abierto.webp" alt=""><span class="cel-chs" aria-hidden="true">' + CHISPAS() + "</span></div>" +
      '<div class="cel-premios">' +
        (c.xp > 0 ? '<span class="cel-p"><img src="img/ic2/rayo.webp" alt=""><b><i data-cuenta="' + c.xp + '">0</i> XP</b></span>' : "") +
        (c.monedas > 0 ? '<span class="cel-p"><img src="img/ic2/moneda.webp" alt=""><b>+<i data-cuenta="' + c.monedas + '">0</i></b></span>' : "") +
      "</div></section>";
  };
  var racha = function(){
    var st = 0, wd = []; try { st = streak(); wd = weekDots(); } catch (e) {}
    var msg = st >= 7 ? "¡Increíble! Tu constancia te acerca al C1." : st >= 3 ? "¡Vas muy bien! Sigue así." : "¡Meta cumplida! Vuelve mañana.";
    return '<section class="cel-racha" aria-label="Racha">' +
      '<img class="cel-rz-mz" src="img/mz3/racha-fuego.webp" alt="">' +
      '<div class="cel-rz-n"><b data-cuenta="' + st + '">0</b><span>' + (st === 1 ? "día seguido" : "días seguidos") + "</span></div>" +
      '<div class="cel-sem" role="list">' + wd.map(function(d, i){ return '<span role="listitem" class="' + (d.st === "full" ? "on" : "") + (d.today ? " hoy" : "") + '" style="--i:' + i + '"><i></i><small>' + esc(d.n) + "</small></span>"; }).join("") + "</div>" +
      '<p class="cel-msg">' + msg + "</p></section>";
  };
  var nivel = function(l){
    var cat = "", tier = ""; try { cat = myCat({ mood: "excited", sparkle: true }); tier = tierOf(l); } catch (e) {}
    var nom = "Tu gato"; try { nom = gEnsure().cat.cname || nom; } catch (e) {}
    return '<section class="cel-nivel"><span class="cel-nv-gato">' + cat + '</span><div><small>Subiste de nivel</small><b>Nivel ' + l + "</b><span>" + esc(nom) + " es ahora <em>" + esc(tier) + "</em></span></div></section>";
  };
  var logro = function(a, i){
    var k = -1; try { k = ACH.findIndex(function(x){ return x[0] === a[0]; }); } catch (e) {}
    var arte = k >= 0 && k < 19 ? '<img src="img/logros/l' + (k < 10 ? "0" : "") + k + '.webp" alt="">' : '<span class="cel-lg-ic">' + ((typeof IC !== "undefined" && IC[a[3]]) || "") + "</span>";
    return '<div class="cel-lg" style="--i:' + i + '">' + arte + "<b>" + esc(a[1]) + "</b><small>" + esc(a[2]) + "</small></div>";
  };
  var logros = function(L){
    if (!L.length) return "";
    return '<section class="cel-logros"><h3>' + (L.length === 1 ? "Logro nuevo" : L.length + " logros nuevos") + '</h3><div class="cel-lgs">' + L.map(logro).join("") + "</div></section>";
  };

  /* ---------------- la pantalla ---------------- */
  var cuenta = function(raiz){
    [].forEach.call(raiz.querySelectorAll("[data-cuenta]"), function(e){
      var fin = +e.dataset.cuenta || 0, t0 = 0, dur = 700, ya = raiz.classList.contains("ya") || quieto();
      if (ya) { e.textContent = fin.toLocaleString("es-CO"); return; }
      var paso = function(t){ if (!t0) t0 = t; var p = Math.min(1, (t - t0) / dur); e.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3))).toLocaleString("es-CO"); if (p < 1 && !raiz.classList.contains("ya")) requestAnimationFrame(paso); else e.textContent = fin.toLocaleString("es-CO"); };
      requestAnimationFrame(paso);
    });
  };
  var mostrar = function(c){
    var titulo = c.cofre ? "¡Lección completada!" : c.racha && !c.logros.length ? "Racha" : "¡Bien hecho!";
    var html = '<div class="cel' + (c.cofre ? " con-cofre" : "") + (quieto() ? " ya" : "") + '">' +
      (c.cofre ? cofre(c) : "") + (c.racha ? racha() : "") + (c.nivel ? nivel(c.nivel) : "") + logros(c.logros) +
      '<button type="button" class="pz-btn pz-btn--oro pz-btn--ancho pz-btn--lg cel-ok" data-g="close">' + (c.cofre ? "Continuar" : c.racha ? "¡Seguimos!" : "Continuar") + "</button></div>";
    PLX_UI.pantalla(html, { titulo: titulo, clase: "m-cel" });
    var raiz = null, intentos = 0;
    var arranca = function(){
      raiz = D.querySelector(".gmodal.m-cel .cel"); if (!raiz) { if (intentos++ < 30) return setTimeout(arranca, 60); return; }
      /* la pantalla empieza arriba: el cofre es lo primero que se ve */
      var arriba = function(){ try { var m = raiz.closest(".gmodal"); [m, m && m.querySelector(".gm-card")].forEach(function(x){ if (x) x.scrollTop = 0; }); scrollTo(0, 0); var a = D.activeElement; if (a && a.classList && a.classList.contains("cel-ok")) a.blur(); } catch (e) {} };
      arriba(); setTimeout(arriba, 120);
      /* el cofre se abre a los 1,05 s; la cuenta de cada sección empieza cuando aparece */
      var abre = function(){ if (raiz.classList.contains("abierto")) return; raiz.classList.add("abierto"); son("done"); cuenta(raiz.querySelector(".cel-premios") || D.createElement("i")); };
      if (c.cofre && !raiz.classList.contains("ya")) setTimeout(abre, 1050); else if (c.cofre) abre();
      var resto = function(){ [].forEach.call(raiz.querySelectorAll(".cel-racha,.cel-nivel"), function(s){ cuenta(s); }); };
      setTimeout(resto, raiz.classList.contains("ya") ? 0 : c.cofre ? 1500 : 250);
      if (!c.cofre && c.racha) son("done");
      /* un toque en la pantalla (fuera del botón) adelanta todo */
      raiz.addEventListener("click", function(e){ if (e.target.closest(".cel-ok")) return; if (!raiz.classList.contains("ya")) { raiz.classList.add("ya", "abierto"); [].forEach.call(raiz.querySelectorAll("[data-cuenta]"), function(x){ x.textContent = (+x.dataset.cuenta || 0).toLocaleString("es-CO"); }); } });
    };
    arranca();
  };
  window.PLX_CELEBRA = { mostrar: mostrar };

  /* ---------------- reunir lo que antes eran pantallas sueltas ---------------- */
  var cola = null;
  var A0 = gAchModal, R0 = gStreakModal, L0 = gLevelModal;
  gAchModal = function(a){ if (cola) { cola.logros.push(a); return; } mostrar({ logros: [a] }); };
  gStreakModal = function(){ if (cola) { cola.racha = true; return; } mostrar({ racha: true, logros: [] }); };
  gLevelModal = function(l){ if (cola) { cola.nivel = l; return; } return L0.apply(this, arguments); };
  var F0 = finish;
  finish = function(){
    var lec = false; try { lec = !!(P && P.mode === "lesson"); } catch (e) {}
    var x0 = 0, m0 = monedas(); try { x0 = S.xp || 0; } catch (e) {}
    cola = { logros: [], racha: false, nivel: 0 };
    var c, r;
    try { r = F0.apply(this, arguments); } finally { c = cola; cola = null; }
    try { c.xp = Math.max(0, (S.xp || 0) - x0); } catch (e) { c.xp = 0; }
    c.monedas = Math.max(0, monedas() - m0); c.cofre = lec;
    if (c.cofre || c.racha || c.nivel || c.logros.length) setTimeout(function(){ mostrar(c); }, 250);
    return r;
  };
  /* gAfterProgress también corre fuera de finish (juegos, retos): ahí se junta lo de una misma llamada */
  if (typeof gAfterProgress === "function") {
    var G0 = gAfterProgress;
    gAfterProgress = function(){
      if (cola) return G0.apply(this, arguments);
      cola = { logros: [], racha: false, nivel: 0 }; var c, r;
      try { r = G0.apply(this, arguments); } finally { c = cola; cola = null; }
      if (c.nivel) L0(c.nivel);
      if (c.racha || c.logros.length) mostrar(c);
      return r;
    };
  }

  /* ---------------- estilos ---------------- */
  var R = [];
  var o = function(){ for (var i = 0; i < arguments.length; i++) R.push(arguments[i]); };
  o(".m-cel .cel{display:grid;gap:var(--s-4);box-sizing:border-box;width:100%;max-width:520px;margin:0 auto;justify-self:stretch;padding:var(--s-2) 0 var(--s-6);text-align:center;cursor:default}",
    /* cofre */
    ".cel-cofre{display:grid;justify-items:center;gap:var(--s-3)}",
    ".cel-esc{position:relative;width:180px;height:150px;display:grid;place-items:center}",
    ".cel-rayos{position:absolute;inset:-50px;border-radius:50%;background:repeating-conic-gradient(from 0deg,rgba(255,200,61,.55) 0deg 10deg,transparent 10deg 24deg);-webkit-mask:radial-gradient(circle,#000 25%,transparent 68%);mask:radial-gradient(circle,#000 25%,transparent 68%);opacity:0;transform:scale(.4)}",
    ".cel-luz{position:absolute;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(255,236,170,.95),rgba(255,200,61,.35) 45%,transparent 70%);opacity:0}",
    ".cel-cz,.cel-ca{position:absolute;width:132px;height:132px;object-fit:contain;filter:drop-shadow(0 14px 18px rgba(0,0,0,.35))}",
    ".cel-cz{animation:celEntra .5s cubic-bezier(.2,1.4,.4,1) both,celTiembla .5s .5s ease-in-out both}",
    ".cel-ca{opacity:0;transform:scale(.7)}",
    ".cel-chs{position:absolute;left:50%;top:48%;width:0;height:0}",
    ".cel-ch{position:absolute;left:-6px;top:-6px;width:12px;height:12px;border-radius:3px;background:var(--c);opacity:0}",
    ".cel-ch.mon{width:18px;height:18px;left:-9px;top:-9px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#FFE38A,#FFC83D 55%,#C98A00)}",
    ".cel.abierto .cel-cz{animation:none;opacity:0;transform:scale(1.2);transition:opacity .15s,transform .15s}",
    ".cel.abierto .cel-ca{animation:celAbre .55s cubic-bezier(.2,1.5,.4,1) both}",
    ".cel.abierto .cel-rayos{animation:celRayos .6s ease-out both,celGira 9s .6s linear infinite}",
    ".cel.abierto .cel-luz{animation:celLuz 1s ease-out both}",
    ".cel.abierto .cel-ch{animation:celChispa .9s calc(.05s + var(--t)) cubic-bezier(.15,.8,.3,1) both}",
    ".cel-premios{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--s-2);min-height:44px}",
    ".cel-p{display:inline-flex;align-items:center;gap:6px;padding:6px 14px 6px 8px;border-radius:var(--r-pill);background:var(--p-oro-p);color:var(--p-oro-tx);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--p-oro) 45%,transparent);opacity:0;transform:translateY(16px) scale(.8)}",
    ".cel-p img{width:28px;height:28px;object-fit:contain}.cel-p b{font:800 var(--t-lg)/1 var(--f-tit);color:var(--p-tinta)}.cel-p i{font-style:normal}",
    ".cel.abierto .cel-p{animation:celSube .45s .25s cubic-bezier(.2,1.4,.4,1) both}.cel.abierto .cel-p + .cel-p{animation-delay:.38s}",
    /* racha */
    ".cel-racha{position:relative;display:grid;justify-items:center;gap:var(--s-2);padding:var(--s-5) var(--s-4) var(--s-4);border-radius:var(--r-xl);background:linear-gradient(160deg,color-mix(in srgb,#FF8A3D 22%,var(--p-sup)),var(--p-sup) 70%);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,#FF8A3D 35%,var(--p-linea)),0 3px 0 var(--p-relieve);animation:celSeccion .45s both}",
    ".cel.con-cofre .cel-racha{animation-delay:1.35s}",
    ".cel-rz-mz{width:96px;height:96px;object-fit:contain;margin-top:-6px;animation:celLate 1.6s 1.9s ease-in-out infinite}",
    ".cel-rz-n{display:grid;justify-items:center;line-height:1}.cel-rz-n b{font:900 3.4rem/1 var(--f-tit);background:linear-gradient(180deg,#FFD866,#FF8A3D 55%,#E2483D);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.03em}",
    ".cel-rz-n span{font:700 var(--t-sm)/1.2 var(--f-tx);color:var(--p-tinta-2);margin-top:4px}",
    ".cel-sem{display:flex;gap:6px;justify-content:center;margin-top:var(--s-1)}",
    ".cel-sem span{display:grid;justify-items:center;gap:4px}",
    ".cel-sem i{width:30px;height:30px;border-radius:50%;background:var(--p-sup-3);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    ".cel-sem span.on i{background:linear-gradient(180deg,#FFB547,#FF6A2B);box-shadow:0 2px 0 #B8461A;animation:celDia .35s calc(1.7s + var(--i) * .08s) cubic-bezier(.2,1.5,.4,1) both}",
    ".cel:not(.con-cofre) .cel-sem span.on i{animation-delay:calc(.35s + var(--i) * .08s)}",
    ".cel-sem span.hoy i{outline:2px solid var(--p-oro);outline-offset:2px}",
    ".cel-sem small{font:700 var(--t-xs)/1 var(--f-tx);color:var(--p-apagado)}.cel-sem span.hoy small{color:var(--p-tinta)}",
    ".cel-msg{margin:var(--s-1) 0 0;font:600 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2)}",
    /* nivel */
    ".cel-nivel{display:flex;align-items:center;gap:var(--s-4);padding:var(--s-3) var(--s-4);border-radius:var(--r-lg);background:var(--p-azul-p);text-align:left;animation:celSeccion .45s both}",
    ".cel.con-cofre .cel-nivel{animation-delay:1.55s}",
    ".cel-nv-gato{flex:none;width:72px;height:72px;display:grid;place-items:center}.cel-nv-gato svg{width:72px;height:72px}",
    ".cel-nivel small{display:block;font:700 var(--t-xs)/1 var(--f-tx);letter-spacing:.08em;text-transform:uppercase;color:var(--p-azul-tx)}.cel-nivel b{display:block;font:800 var(--t-xl,1.4rem)/1.15 var(--f-tit);color:var(--p-tinta)}.cel-nivel span{font:500 var(--t-sm)/1.35 var(--f-tx);color:var(--p-tinta-2)}.cel-nivel em{font-style:normal;font-weight:800;color:var(--p-tinta)}",
    /* logros */
    ".cel-logros{display:grid;gap:var(--s-3)}",
    ".cel-logros h3{margin:0;font:800 var(--t-xs)/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;color:var(--p-apagado);animation:celSeccion .4s both}",
    ".cel.con-cofre .cel-logros h3{animation-delay:1.7s}",
    ".cel-lgs{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--s-2)}",
    ".cel-lg{width:104px;display:grid;justify-items:center;gap:4px;padding:var(--s-3) var(--s-2);border-radius:var(--r-lg);background:var(--p-sup);box-shadow:inset 0 0 0 2px var(--p-oro),0 3px 0 var(--p-oro-r);animation:celLogro .5s calc(.3s + var(--i) * .15s) cubic-bezier(.2,1.5,.4,1) both}",
    ".cel.con-cofre .cel-lg{animation-delay:calc(1.85s + var(--i) * .15s)}",
    ".cel-lg img{width:60px;height:60px;object-fit:contain;filter:drop-shadow(0 6px 8px rgba(0,0,0,.25))}",
    ".cel-lg-ic{width:76px;height:76px;display:grid;place-items:center}.cel-lg-ic svg{width:40px;height:40px}",
    ".cel-lg b{font:800 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}.cel-lg small{font:500 var(--t-xs)/1.2 var(--f-tx);color:var(--p-apagado);font-style:italic}",
    ".cel-ok{animation:celSeccion .35s both}",
    ".cel.con-cofre .cel-ok{animation-delay:1.5s}",
    /* adelantar: todo en su estado final */
    ".cel.ya *,.cel.ya{animation-delay:0s;animation-duration:.01s}",
    ".cel.ya .cel-rayos{animation:celRayos .01s both,celGira 9s linear infinite}",
    ".cel.ya .cel-rz-mz{animation:none}",
    "@media (prefers-reduced-motion:reduce){.cel *,.cel{animation-duration:.01s;animation-delay:0s;animation-iteration-count:1}.cel .cel-rayos{opacity:.8;transform:none}}");
  var KF = "@keyframes celEntra{from{opacity:0;transform:scale(.3) translateY(30px)}to{opacity:1;transform:none}}" +
    "@keyframes celTiembla{0%,100%{transform:none}20%{transform:rotate(-9deg) scale(1.03)}40%{transform:rotate(8deg) scale(1.05)}60%{transform:rotate(-7deg) scale(1.07)}80%{transform:rotate(6deg) scale(1.09)}}" +
    "@keyframes celAbre{0%{opacity:0;transform:scale(.7)}60%{opacity:1;transform:scale(1.18) translateY(-6px)}100%{opacity:1;transform:scale(1)}}" +
    "@keyframes celRayos{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}" +
    "@keyframes celGira{from{rotate:0deg}to{rotate:360deg}}" +
    "@keyframes celLuz{0%{opacity:0;transform:scale(.3)}25%{opacity:1;transform:scale(1.5)}100%{opacity:.55;transform:scale(1.15)}}" +
    "@keyframes celChispa{0%{opacity:1;transform:rotate(var(--a)) translateY(0) scale(.5)}70%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(calc(var(--d) * -1)) scale(1) rotate(160deg)}}" +
    "@keyframes celSube{to{opacity:1;transform:none}}" +
    "@keyframes celSeccion{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}" +
    "@keyframes celDia{0%{transform:scale(.4)}100%{transform:none}}" +
    "@keyframes celLate{0%,100%{transform:none}50%{transform:translateY(-6px) rotate(-3deg)}}" +
    "@keyframes celLogro{0%{opacity:0;transform:scale(.4) rotate(-8deg)}100%{opacity:1;transform:none}}";
  /* sin capa ni !important: un valor !important le gana a la animación y dejaría el cofre abierto, los rayos y las
     chispas invisibles para siempre. Las clases cel-* son propias de este módulo. */
  var st = D.createElement("style"); st.id = "plx106";
  st.textContent = R.join("\n") + "\n" + KF;
  D.head.appendChild(st);
})();
