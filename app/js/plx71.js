/* PLEX PLAY 3.2.0 — Rachas con Manzana, al estilo Duolingo
   Celebración
   - Cuando cumples la meta del día y la racha sube, sale una pantalla completa: la llama se enciende, el número pasa
     de ayer a hoy con un salto, los días de la semana se encienden uno a uno, Manzana celebra y cae confeti.
     En los hitos (3, 7, 14, 30, 50, 100… días) la pantalla es dorada. Sale una vez al día, nunca en medio de una
     lección ni de un juego: espera a que termines.
   Estados (los mismos que el widget de Android, Widget.java → estado)
   - Según la hora, la racha y los días sin practicar, Manzana dice una cosa distinta: «¿Tienes 3 minutos?»,
     «¡Salva tu racha!», «¡Es tarde!», «¡Última oportunidad!», «3 días desde tu última lección», «¿Me estás
     ignorando?» (Manzana en fantasma), «Tu racha se congeló»… En Inicio salen como una tarjeta con su fondo.
   - Hecho el día, la llama de la racha late; con la racha en peligro, tiembla de vez en cuando.
   Pruebas: window.PLX_RACHA = { estado, estadoHoy, celebra, tarjeta, estados } */
(function(){
  "use strict";
  if (typeof S === "undefined" || typeof streak !== "function" || typeof dkey !== "function") return;
  var IMG = "img/mz/";
  var lsG = function(k){ try { return localStorage.getItem(k); } catch (e) { return null; } };
  var lsS = function(k, v){ try { localStorage.setItem(k, v); } catch (e) {} };
  var esc = function(t){ return String(t == null ? "" : t).replace(/[&<>"]/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var meta = function(){ try { return Math.max(1, gEnsure().goalXP || 20); } catch (e) { return 20; } };
  var xpDe = function(d){ return (S.days[dkey(d)] || {}).xp || 0; };
  var activo = function(d){ var x = S.days[dkey(d)]; return !!x && ((x.xp || 0) > 0 || (x.sec || 0) >= 30); };
  /* días desde el último día con actividad (0 = hoy; -1 = nunca) */
  var diasDesde = function(){ var d = new Date(); for (var i = 0; i < 800; i++) { if (activo(d)) return i; d.setDate(d.getDate() - 1); } return -1; };
  var semilla = function(){ var d = new Date(), a = new Date(d.getFullYear(), 0, 0); return Math.floor((d - a) / 864e5); };
  var HITOS = [3, 7, 10, 14, 21, 30, 50, 75, 100, 150, 200, 250, 300, 365, 500, 730, 1000];
  var esHito = function(n){ return HITOS.indexOf(n) >= 0 || (n > 0 && n % 100 === 0); };
  var dd = function(n){ return n === 1 ? "día" : "días"; };

  /* ---- la tabla de estados (igual en Widget.java) ----
     o: { hay: hay progreso, n: racha, hecho: meta de hoy cumplida, h: hora, dias: días sin practicar, xp, meta, s: semilla del día } */
  var CELEBRA = [
    ["fuego", "racha-fuego", "¡Racha encendida!", "Mañana la seguimos"],
    ["cielo", "celebra", "¡Meta de hoy cumplida!", "Manzana está feliz"],
    ["noche", "feliz", "Hoy brillaste", "Tu racha sigue viva"],
    ["verde", "guino-pulgar", "¡Así se hace!", "Lección hecha, racha a salvo"],
    ["lila", "croissant-boina", "Bien joué !", "Te ganaste un croissant"],
    ["atardecer", "bandera", "Vive la racha !", "{n} {dd} seguidos"],
    ["rosa", "tumbado-corazon", "Manzana está orgulloso", "Nos vemos mañana"]
  ];
  var estado = function(o){
    var n = o.n | 0, r;
    var e = function(id, fondo, mz, msg, sub, x){ r = { id: id, fondo: fondo, mz: mz, msg: msg, sub: sub || "", num: n, lbl: n === 1 ? "día de racha" : "días de racha" }; if (x) for (var k in x) r[k] = x[k]; return r; };
    if (o.aviso) return e("mantenimiento", "gris", "lupa", "Manzana está ordenando cosas", "Vuelve en un ratito");
    if (!o.hay) return e("hola", "lila", "saluda", "¡Hola! Soy Manzana", "Haz tu primera lección y empieza una racha");
    if (o.hecho) {
      if (esHito(n)) return e("hito", "oro", n >= 100 ? "graduado" : "trofeo", "¡" + n + " días de racha!", n >= 30 ? "Eres imparable" : "Un récord de campeón");
      var c = CELEBRA[(o.s | 0) % CELEBRA.length];
      return e("hecho-" + c[1], c[0], c[1], c[2], c[3].replace("{n}", n).replace("{dd}", dd(n)));
    }
    var falta = Math.max(0, o.meta - o.xp);
    if (n > 0) {
      r = null; var e0 = e; e = function(id, f, m, a, b, x){ x = x || {}; x.riesgo = true; return e0(id, f, m, a, b, x); };
      if (o.xp > 0) return e("casi", "cielo", "corre", "Te faltan " + falta + " XP", "¡Ya casi salvas tu racha!");
      if (o.h < 12) return e("tres", "amanecer", "taza-cafe", "¿Tienes 3 minutos?", "Una lección corta y tu racha sigue");
      if (o.h < 18) return e("hora", "cielo", "escribe", "Hora de practicar", "Tu racha de " + n + " " + dd(n) + " te espera");
      if (o.h < 21) return e("salva", "fuego", "alerta", "¡Salva tu racha!", n + " " + dd(n) + " en juego");
      if (o.h < 23) return e("tarde", "noche", "examen-susto", "¡Es tarde!", "Todavía puedes salvar tu racha");
      return e("ultima", "alerta", "sorpresa", "¡Última oportunidad!", "Tu racha se apaga a medianoche");
    }
    if (o.xp > 0) return e("casi0", "verde", "corre", "Te faltan " + falta + " XP", "para empezar una racha nueva");
    var d = o.dias;
    var sin = function(x){ x = x || {}; x.num = d; x.lbl = d === 1 ? "día sin practicar" : "días sin practicar"; return x; };
    if (d >= 2 && d <= 3) return e("dias", "gris", "pensando", d + " días desde tu última lección", "Manzana te está esperando", sin());
    if (d >= 4 && d <= 7) return e("ignora", "noche", "duda", "¿Me estás ignorando?", "Van " + d + " días sin practicar", sin({ fantasma: true }));
    if (d >= 8 && d <= 20) return e("extrana", "lila", "ovillo", "Manzana te extraña", "Vuelve con una lección de 3 minutos", sin());
    if (d > 20) return e("congelada", "hielo", "dormido", "Tu racha se congeló", "¡Descongélala con una lección hoy!", sin());
    if (o.h >= 22) return e("zzz", "noche", "dormido", "Zzz… ¿mañana?", "O una lección rápida antes de dormir");
    return e("empieza", "cielo", "senala-arriba", "Empieza una lección", "Hoy nace una racha nueva");
  };
  var datosHoy = function(){
    var hoy = new Date(), x = xpDe(hoy), m = meta(), n = streak() | 0;
    var hay = Object.keys(S.days || {}).some(function(k){ var v = S.days[k]; return v && ((v.xp || 0) > 0 || (v.sec || 0) >= 30); }) || (S.xp | 0) > 0;
    return { hay: hay, n: n, hecho: x >= m, h: hoy.getHours(), dias: diasDesde(), xp: x, meta: m, s: semilla() };
  };
  var estadoHoy = function(){ return estado(datosHoy()); };

  /* ---- la llama (SVG propio) ---- */
  var uid = 0;
  var llama = function(cls){
    var k = "rzf" + (++uid);
    return '<svg class="' + (cls || "") + '" viewBox="0 0 64 80" aria-hidden="true"><defs>' +
      '<linearGradient id="' + k + 'a" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FF4B00"/><stop offset=".55" stop-color="#FF9600"/><stop offset="1" stop-color="#FFC800"/></linearGradient>' +
      '<linearGradient id="' + k + 'b" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFC800"/><stop offset="1" stop-color="#FFF3B0"/></linearGradient></defs>' +
      '<path class="rz-f1" fill="url(#' + k + 'a)" d="M32 2C36 16 50 22 54 38c5 20-8 38-22 38S5 62 9 42c2-10 9-14 10-24 6 5 7 11 7 15C30 25 30 12 32 2z"/>' +
      '<path class="rz-f2" fill="url(#' + k + 'b)" d="M32 36c4 8 12 12 12 22 0 9-6 15-12 15s-12-6-12-14c0-6 4-9 5-14 3 3 4 6 4 8 1-6 1-12 3-17z"/></svg>';
  };

  /* ---- tarjeta de Inicio (sustituye al aviso de racha en peligro) ---- */
  var tarjeta = function(st){
    st = st || estadoHoy();
    var nx = null; try { nx = nextLesson(track); } catch (e) {}
    return '<div class="gcard sk-danger rz-card rz-' + st.fondo + '" role="status" data-rz="' + st.id + '">' +
      '<div class="rz-txt"><p class="rz-bub"><b>' + esc(st.msg) + '</b>' + (st.sub ? "<small>" + esc(st.sub) + "</small>" : "") + '</p>' +
      '<div class="rz-cifra">' + llama("rz-mini" + (st.id === "congelada" || st.fantasma ? " apagada" : "")) + "<b>" + st.num + "</b><span>" + esc(st.lbl) + "</span></div>" +
      (nx ? '<button class="gbtn sm rz-go" data-open="' + esc(nx.id) + '">' + (st.riesgo ? "Salvar mi racha" : "Practicar") + "</button>" : "") + "</div>" +
      '<img class="rz-mz' + (st.fantasma ? " fantasma" : "") + '" src="' + IMG + st.mz + '.webp" alt="" width="120" height="120"></div>';
  };
  if (typeof window.streakDangerHTML === "function") {
    window.streakDangerHTML = function(){ var st = estadoHoy(); return /^hecho|^hito/.test(st.id) ? "" : tarjeta(st); };
  }

  /* ---- celebración a pantalla completa ---- */
  var abierta = null;
  var celebra = function(n, o){
    o = o || {};
    if (abierta) return abierta;
    var hito = o.hito != null ? o.hito : esHito(n), st = estado({ hay: true, n: n, hecho: true, h: 12, dias: 0, xp: 1, meta: 1, s: semilla() });
    var sem = []; try { sem = weekDots(); } catch (e) {}
    var mov = !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    var conf = "";
    if (mov) for (var i = 0; i < 26; i++) conf += '<i style="--x:' + Math.round(Math.random() * 100) + "%;--d:" + (Math.random() * .9).toFixed(2) + "s;--r:" + Math.round(Math.random() * 360) + "deg;--c:" + ["#FFD200", "#FF9600", "#1CB0F6", "#58CC02", "#FF86C8", "#fff"][i % 6] + '"></i>';
    var el = document.createElement("div");
    el.className = "rz-cel" + (hito ? " hito" : "") + (mov ? "" : " quieto");
    el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", n + " " + dd(n) + " de racha");
    el.innerHTML = '<div class="rz-conf" aria-hidden="true">' + conf + "</div>" +
      '<div class="rz-cc">' +
        '<div class="rz-llama">' + llama("rz-big") + '<span class="rz-chispa" aria-hidden="true"></span></div>' +
        '<div class="rz-num" aria-hidden="true"><b class="rz-a">' + Math.max(0, n - 1) + '</b><b class="rz-b">' + n + "</b></div>" +
        '<p class="rz-tit">' + (n === 1 ? "¡día de racha!" : "¡días de racha!") + "</p>" +
        (sem.length ? '<div class="rz-sem">' + sem.map(function(d, i){ var on = d.today || d.st === "full"; return '<span class="' + (on ? "on" : "") + (d.today ? " hoy" : "") + '" style="--i:' + i + '"><i>' + (on ? "✓" : "") + "</i><em>" + d.n + "</em></span>"; }).join("") + "</div>" : "") +
        '<div class="rz-dice"><img src="' + IMG + (hito ? (n >= 100 ? "graduado" : "trofeo") : st.mz) + '.webp" alt="" width="110" height="110"><p><b>' + esc(hito ? "¡Hito desbloqueado!" : st.msg) + "</b><small>" + esc(hito ? n + " días seguidos. Manzana está orgulloso." : st.sub) + "</small></p></div>" +
        '<button class="rz-ok" type="button">Continuar</button>' +
      "</div>";
    document.body.appendChild(el); abierta = el;
    try { if (typeof SFX !== "undefined" && SFX.done) SFX.done(); } catch (e) {}
    var cierra = function(){ if (!abierta) return; el.classList.add("sale"); abierta = null; document.removeEventListener("keydown", tecla, true); setTimeout(function(){ el.remove(); }, mov ? 220 : 0); };
    var tecla = function(e){ if (e.key === "Escape" || e.key === "Enter") { e.preventDefault(); cierra(); } };
    el.querySelector(".rz-ok").addEventListener("click", cierra);
    document.addEventListener("keydown", tecla, true);
    setTimeout(function(){ try { el.querySelector(".rz-ok").focus({ preventScroll: true }); } catch (e) {} }, mov ? 1300 : 0);
    return el;
  };

  /* ---- cuándo celebrar: la meta de hoy recién cumplida, fuera de lecciones y juegos ---- */
  var K = "plx-rz-cel";
  var libre = function(){
    if (document.visibilityState !== "visible" || abierta) return false;
    try { if (P) return false; } catch (e) {}
    if (typeof view !== "undefined" && (view === "atelier" || view === "dictee")) return false;
    return !document.querySelector(".plxg, .gmodal, .m-qs, .plx69-menu:not([hidden]), .rkx, .rn-on");
  };
  var vigila = function(){
    var d = datosHoy(), hoy = dkey(new Date());
    document.body.classList.toggle("rz-hecho", d.hecho && d.n > 0);
    document.body.classList.toggle("rz-riesgo", !d.hecho && d.n > 0 && d.h >= 18);
    /* la tarjeta de Inicio se pone al día sola (cambió la hora o el estado) */
    var tj = document.querySelector("#view .rz-card");
    if (tj && tj.getAttribute("data-rz") !== estado(d).id && typeof render === "function" && libre()) { try { render(); } catch (e) {} }
    if (!d.hecho || d.n < 1) return;
    var ya = lsG(K);
    if (ya === hoy) return;
    if (!libre()) return;
    lsS(K, hoy); celebra(d.n);
  };
  /* si al abrir la app la meta de hoy ya estaba cumplida (otro dispositivo, o antes de esta versión), no se celebra de nuevo */
  vigila.inicio = datosHoy().hecho;
  if (vigila.inicio && lsG(K) == null) lsS(K, dkey(new Date()));
  setInterval(vigila, 1200);
  setTimeout(vigila, 400);

  window.PLX_RACHA = { estado: estado, estadoHoy: estadoHoy, datosHoy: datosHoy, celebra: celebra, tarjeta: tarjeta, esHito: esHito,
    cerrar: function(){ var b = abierta && abierta.querySelector(".rz-ok"); if (b) b.click(); } };

  var css = `
  .rz-card{position:relative;display:flex!important;align-items:stretch;gap:6px;padding:14px 12px 14px 16px!important;border:0!important;overflow:hidden;color:#fff;min-height:132px;background:var(--rz-bg)!important;box-shadow:0 10px 24px -14px rgba(0,0,0,.5)!important}
  .rz-card .rz-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;position:relative;z-index:1}
  .rz-bub{margin:0;align-self:flex-start;max-width:100%;background:#fff;color:#141B3A;border-radius:16px 16px 16px 4px;padding:8px 12px;box-shadow:0 3px 0 rgba(0,0,0,.14)}
  .rz-bub b{display:block;font:900 15px/1.2 var(--serif,system-ui);letter-spacing:-.01em}
  .rz-bub small{display:block;margin-top:2px;font:600 12.5px/1.3 var(--sans,system-ui);color:#4A5270}
  .rz-cifra{display:flex;align-items:center;gap:6px}
  .rz-cifra b{font:900 30px/1 var(--serif,system-ui);letter-spacing:-.02em;text-shadow:0 2px 0 rgba(0,0,0,.18)}
  .rz-cifra span{font:700 12.5px/1.2 var(--sans,system-ui);opacity:.92;max-width:6.5em}
  .rz-mini{width:22px;height:28px;flex:none}
  .rz-mini.apagada{filter:grayscale(1) brightness(1.3);opacity:.75}
  .rz-card .rz-go.rz-go{align-self:flex-start;width:auto!important;padding:0 18px!important;background:#fff!important;color:#141B3A!important;border:0!important;box-shadow:0 3px 0 rgba(0,0,0,.18)!important;font-weight:800!important}
  .rz-card .rz-mz{width:112px;height:112px;object-fit:contain;align-self:flex-end;margin:0 -4px -10px 0;flex:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.25))}
  .rz-mz.fantasma{opacity:.5;filter:grayscale(.3) brightness(1.25) drop-shadow(0 0 14px rgba(200,220,255,.8));animation:rzFlota 3s ease-in-out infinite}
  @keyframes rzFlota{50%{transform:translateY(-6px)}}
  .rz-oscuro{color:#1B1300}
  .rz-fuego{--rz-bg:linear-gradient(135deg,#FF9600,#FF4B4B)}
  .rz-cielo{--rz-bg:linear-gradient(135deg,#1CB0F6,#2B63C9)}
  .rz-noche{--rz-bg:radial-gradient(circle at 80% 15%,#3B55B5 0,transparent 45%),linear-gradient(160deg,#101B4D,#1D2F78)}
  .rz-oro{--rz-bg:linear-gradient(135deg,#FFE066,#FFB800 60%,#FF9600);color:#3A2600}
  .rz-verde{--rz-bg:linear-gradient(135deg,#6BD60F,#2E9E00)}
  .rz-lila{--rz-bg:linear-gradient(135deg,#9D8CFF,#5B45E0)}
  .rz-atardecer{--rz-bg:linear-gradient(160deg,#FFB067,#FF6F61 45%,#C2185B)}
  .rz-rosa{--rz-bg:linear-gradient(135deg,#FF9ACF,#E0457B)}
  .rz-amanecer{--rz-bg:linear-gradient(160deg,#FFF1B8,#FFC680);color:#3A2600}
  .rz-alerta{--rz-bg:linear-gradient(135deg,#FF5A5A,#B3121B)}
  .rz-gris{--rz-bg:linear-gradient(135deg,#8C96A8,#4B5565)}
  .rz-hielo{--rz-bg:radial-gradient(circle at 20% 20%,#fff 0,transparent 40%),linear-gradient(160deg,#E4F7FF,#8FD3FF);color:#0B3350}
  .rz-oro .rz-cifra b,.rz-amanecer .rz-cifra b,.rz-hielo .rz-cifra b{text-shadow:none}
  @media (min-width:900px){ .rz-card .rz-mz{width:128px;height:128px} }

  /* la llama de la racha: late cuando el día está hecho, tiembla si la racha está en peligro */
  body.rz-hecho .streak-card .sk-h svg,body.rz-hecho .hs-streak svg{animation:rzLate 1.8s ease-in-out infinite;transform-origin:50% 90%}
  body.rz-riesgo .streak-card .sk-h svg,body.rz-riesgo .hs-streak svg{animation:rzTiembla 3.2s ease-in-out infinite;transform-origin:50% 90%}
  @keyframes rzLate{0%,100%{transform:scale(1) rotate(0)}30%{transform:scale(1.1,1.06) rotate(-3deg)}60%{transform:scale(.97,1.03) rotate(2deg)}}
  @keyframes rzTiembla{0%,86%,100%{transform:rotate(0)}89%{transform:rotate(-9deg)}92%{transform:rotate(8deg)}95%{transform:rotate(-5deg)}}

  /* celebración */
  .rz-cel{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px 16px calc(24px + env(safe-area-inset-bottom));
    background:radial-gradient(circle at 50% 30%,#FFB23E 0,#FF7A00 45%,#E84A00 100%);color:#fff;overflow:hidden;animation:rzEntra .28s ease-out both;font-family:var(--sans,system-ui)}
  .rz-cel.hito{background:radial-gradient(circle at 50% 30%,#FFF1A8 0,#FFC400 45%,#E89B00 100%);color:#3A2600}
  .rz-cel.sale{animation:rzSale .2s ease-in both}
  @keyframes rzEntra{from{opacity:0}}
  @keyframes rzSale{to{opacity:0;transform:scale(1.03)}}
  .rz-cc{position:relative;z-index:1;width:100%;max-width:420px;display:flex;flex-direction:column;align-items:center;text-align:center}
  .rz-llama{position:relative;width:118px;height:148px}
  .rz-big{width:100%;height:100%;filter:drop-shadow(0 10px 22px rgba(120,20,0,.45));transform-origin:50% 95%;animation:rzEnciende .7s cubic-bezier(.2,1.6,.4,1) .1s both,rzLate 1.8s ease-in-out 1s infinite}
  .rz-cel.hito .rz-big{filter:drop-shadow(0 10px 22px rgba(150,90,0,.45))}
  @keyframes rzEnciende{0%{transform:scale(0) rotate(-12deg);opacity:0}60%{transform:scale(1.15,1.2) rotate(4deg);opacity:1}100%{transform:scale(1)}}
  .rz-big .rz-f2{transform-origin:50% 90%;animation:rzNucleo 1.1s ease-in-out .8s infinite alternate}
  @keyframes rzNucleo{to{transform:scale(.9,1.08)}}
  .rz-chispa{position:absolute;inset:-20px;border-radius:50%;border:4px solid rgba(255,255,255,.8);opacity:0;animation:rzOnda .8s ease-out .85s both}
  @keyframes rzOnda{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.5);opacity:0}}
  .rz-num{position:relative;height:84px;width:100%;margin-top:4px;font:900 76px/84px var(--serif,system-ui);letter-spacing:-.03em;text-shadow:0 4px 0 rgba(0,0,0,.16)}
  .rz-num b{position:absolute;left:0;right:0;top:0}
  .rz-a{animation:rzVa .35s ease-in .85s both}
  .rz-b{animation:rzViene .55s cubic-bezier(.2,1.8,.4,1) .95s both}
  @keyframes rzVa{to{transform:translateY(-60px) scale(.7);opacity:0}}
  @keyframes rzViene{0%{transform:translateY(60px) scale(.6);opacity:0}100%{transform:none;opacity:1}}
  .rz-tit{margin:2px 0 16px;font:900 24px/1.1 var(--serif,system-ui);animation:rzSube .4s ease-out 1.1s both}
  .rz-sem{display:flex;gap:6px;justify-content:center;margin-bottom:18px;padding:10px 12px;border-radius:18px;background:rgba(255,255,255,.18)}
  .rz-cel.hito .rz-sem{background:rgba(255,255,255,.4)}
  .rz-sem span{display:flex;flex-direction:column;align-items:center;gap:4px;width:34px}
  .rz-sem i{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.14);font:900 15px/1 var(--sans,system-ui);font-style:normal;color:#fff}
  .rz-sem .on i{background:#fff;color:#FF7A00;animation:rzPunto .4s cubic-bezier(.2,1.8,.4,1) calc(1.15s + var(--i) * .07s) both}
  .rz-cel.hito .rz-sem .on i{color:#C98700}
  .rz-sem .hoy i{box-shadow:0 0 0 3px rgba(255,255,255,.55);animation-delay:1.7s}
  .rz-sem em{font:800 12px/1 var(--sans,system-ui);font-style:normal;opacity:.9}
  @keyframes rzPunto{0%{transform:scale(0)}100%{transform:scale(1)}}
  .rz-dice{display:flex;align-items:center;gap:10px;text-align:left;margin-bottom:20px;animation:rzSube .45s ease-out 1.5s both}
  .rz-dice img{width:96px;height:96px;object-fit:contain;flex:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.2))}
  .rz-dice p{margin:0;background:#fff;color:#141B3A;border-radius:18px 18px 18px 4px;padding:10px 14px;box-shadow:0 4px 0 rgba(0,0,0,.14)}
  .rz-dice b{display:block;font:900 16px/1.2 var(--serif,system-ui)}
  .rz-dice small{display:block;margin-top:2px;font:600 13px/1.3 var(--sans,system-ui);color:#4A5270}
  @keyframes rzSube{from{transform:translateY(16px);opacity:0}}
  .rz-ok{all:unset;box-sizing:border-box;cursor:pointer;width:100%;max-width:360px;min-height:54px;border-radius:16px;background:#fff;color:#E85D00;text-align:center;
    font:900 17px/54px var(--sans,system-ui);letter-spacing:.02em;text-transform:uppercase;box-shadow:0 5px 0 rgba(120,30,0,.35);animation:rzSube .4s ease-out 1.8s both}
  .rz-cel.hito .rz-ok{color:#9A6400;box-shadow:0 5px 0 rgba(120,80,0,.35)}
  .rz-ok:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(120,30,0,.35)}
  .rz-ok:focus-visible{outline:3px solid #141B3A;outline-offset:3px}
  .rz-conf{position:absolute;inset:0;pointer-events:none}
  .rz-conf i{position:absolute;top:-16px;left:var(--x);width:9px;height:14px;border-radius:2px;background:var(--c);transform:rotate(var(--r));animation:rzCae 2.6s cubic-bezier(.3,.6,.5,1) calc(.9s + var(--d)) both}
  @keyframes rzCae{0%{transform:translateY(0) rotate(var(--r));opacity:1}100%{transform:translateY(105vh) rotate(calc(var(--r) + 540deg));opacity:.8}}
  @media (max-height:640px){ .rz-llama{width:88px;height:110px} .rz-num{height:66px;font-size:58px;line-height:66px} .rz-dice img{width:72px;height:72px} .rz-sem{margin-bottom:12px} .rz-dice{margin-bottom:14px} }
  .rz-cel.quieto *,.rz-cel.quieto{animation:none!important}
  .rz-cel.quieto .rz-a{display:none}
  @media (prefers-reduced-motion:reduce){ .rz-cel *,.rz-cel,.rz-mz.fantasma,body.rz-hecho .streak-card .sk-h svg,body.rz-riesgo .streak-card .sk-h svg{animation:none!important} .rz-a{display:none} }
  `;
  var st = document.createElement("style"); st.id = "plx71"; st.textContent = css; document.head.appendChild(st);
})();
