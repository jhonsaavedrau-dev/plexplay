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
   3.2.1: la celebración no salía nunca (la capa del Arcade #plxg siempre está en la página, oculta, y contaba como
   «jugando»). Nuevas pantallas: «Tu racha se congeló» (la llama se hiela, nieve y escarcha) al volver tras perderla y
   «¡Tu racha está en peligro!» (la llama se apaga a ratos, humo y cuenta atrás hasta medianoche) desde las 18 h.
   Cada estado de la tarjeta de Inicio tiene su animación (brillo, temblor, alarma, nieve, zzz).
   Pruebas: window.PLX_RACHA = { estado, estadoHoy, celebra, congela, peligro, tarjeta, libre } */
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

  /* ---- pantallas a pantalla completa: celebración, racha congelada y racha en peligro ---- */
  var abierta = null;
  var MOV = function(){ return !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); };
  var lluvia = function(n, fn){ var h = ""; for (var i = 0; i < n; i++) h += fn(i); return h; };
  var monta = function(clase, etiqueta, html, botones, alCerrar){
    if (abierta) return abierta;
    var mov = MOV(), el = document.createElement("div");
    el.className = "rz-cel " + clase + (mov ? "" : " quieto");
    el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", etiqueta);
    el.innerHTML = html + '<div class="rz-bts">' + botones + "</div></div>";
    document.body.appendChild(el); abierta = el;
    var cierra = function(){ if (abierta !== el) return; el.classList.add("sale"); abierta = null; document.removeEventListener("keydown", tecla, true); setTimeout(function(){ el.remove(); }, mov ? 220 : 0); if (alCerrar) alCerrar(); };
    var tecla = function(e){ if (e.key === "Escape") { e.preventDefault(); cierra(); } };
    el.addEventListener("click", function(e){
      var b = e.target.closest && e.target.closest("button"); if (!b) return;
      if (b.hasAttribute("data-rz-open")) { var id = b.getAttribute("data-rz-open"); cierra(); try { openLesson(id); } catch (x) {} return; }
      cierra();
    });
    document.addEventListener("keydown", tecla, true);
    /* con teclado, Tab llega primero al botón principal */
    el.tabIndex = -1; try { el.focus({ preventScroll: true }); } catch (e) {}
    return el;
  };
  var siguiente = function(){ try { var nx = nextLesson(track); return nx ? nx.id : ""; } catch (e) { return ""; } };

  var celebra = function(n, o){
    o = o || {};
    var hito = o.hito != null ? o.hito : esHito(n), st = estado({ hay: true, n: n, hecho: true, h: 12, dias: 0, xp: 1, meta: 1, s: semilla() });
    var sem = []; try { sem = weekDots(); } catch (e) {}
    var conf = MOV() ? lluvia(30, function(i){ return '<i style="--x:' + Math.round(Math.random() * 100) + "%;--d:" + (Math.random() * .9).toFixed(2) + "s;--r:" + Math.round(Math.random() * 360) + "deg;--c:" + ["#FFD200", "#FF9600", "#1CB0F6", "#58CC02", "#FF86C8", "#fff"][i % 6] + '"></i>'; }) : "";
    var tit = n === 1 ? "¡Empezaste una racha!" : hito ? "¡Hito desbloqueado!" : st.msg;
    var sub = n === 1 ? "Vuelve mañana y verás cómo crece." : hito ? n + " días seguidos. Manzana está orgulloso." : st.sub;
    var el = monta("celebra" + (hito ? " hito" : ""), n + " " + dd(n) + " de racha",
      '<div class="rz-conf" aria-hidden="true">' + conf + "</div>" +
      '<div class="rz-rayos" aria-hidden="true"></div>' +
      '<div class="rz-cc">' +
        '<div class="rz-llama">' + llama("rz-big") + '<span class="rz-chispa" aria-hidden="true"></span>' +
          lluvia(8, function(i){ return '<span class="rz-brasa" style="--a:' + (i * 45) + 'deg;--d:' + (i * .04).toFixed(2) + 's"></span>'; }) + "</div>" +
        '<div class="rz-num" aria-hidden="true"><b class="rz-a">' + Math.max(0, n - 1) + '</b><b class="rz-b">' + n + "</b></div>" +
        '<p class="rz-tit">' + (n === 1 ? "¡día de racha!" : "¡días de racha!") + "</p>" +
        (sem.length ? '<div class="rz-sem">' + sem.map(function(d, i){ var on = d.today || d.st === "full"; return '<span class="' + (on ? "on" : "") + (d.today ? " hoy" : "") + '" style="--i:' + i + '"><i>' + (on ? "✓" : "") + "</i><em>" + d.n + "</em></span>"; }).join("") + "</div>" : "") +
        '<div class="rz-dice"><img src="' + IMG + (hito ? (n >= 100 ? "graduado" : "trofeo") : n === 1 ? "celebra" : st.mz) + '.webp" alt="" width="110" height="110"><p><b>' + esc(tit) + "</b><small>" + esc(sub) + "</small></p></div>",
      '<button class="rz-ok" type="button">Continuar</button>');
    try { if (typeof SFX !== "undefined" && SFX.done) SFX.done(); } catch (e) {}
    return el;
  };

  /* la racha se perdió: la llama se congela, cae nieve y la escarcha cubre los bordes */
  var congela = function(n, dias){
    var nx = siguiente();
    var nieve = MOV() ? lluvia(34, function(){ return '<i style="--x:' + Math.round(Math.random() * 100) + "%;--d:" + (Math.random() * 3).toFixed(2) + "s;--s:" + (8 + Math.random() * 14).toFixed(0) + "px;--t:" + (4 + Math.random() * 4).toFixed(1) + 's">❄</i>'; }) : "";
    return monta("congela", "Tu racha se congeló",
      '<div class="rz-nieve" aria-hidden="true">' + nieve + '</div><div class="rz-escarcha" aria-hidden="true"></div>' +
      '<div class="rz-cc">' +
        '<div class="rz-llama">' + llama("rz-big") + '<span class="rz-hielo" aria-hidden="true">' +
          '<svg viewBox="0 0 120 150"><path d="M60 8 78 40 70 44 88 70 76 72 96 118 60 142 24 118 44 72 32 70 50 44 42 40z"/><path class="brillo" d="M52 30 58 60 48 90"/></svg></span></div>' +
        '<div class="rz-num" aria-hidden="true"><b class="rz-roto">' + n + "</b></div>" +
        '<p class="rz-tit">Tu racha se congeló</p>' +
        '<div class="rz-dice"><img src="' + IMG + 'dormido.webp" alt="" width="110" height="110"><p><b>' + (dias > 1 ? "Pasaron " + dias + " días sin practicar" : "Ayer no practicamos") + "</b><small>Tenías " + n + " " + dd(n) + ". Haz una lección hoy y empieza a descongelarla.</small></p></div>",
      (nx ? '<button class="rz-ok" type="button" data-rz-open="' + esc(nx) + '">Descongelar con una lección</button>' : '<button class="rz-ok" type="button">Entendido</button>') +
      '<button class="rz-no" type="button">Ahora no</button>');
  };

  /* la racha está en peligro: la llama tiembla y se apaga poco a poco, y corre la cuenta atrás hasta medianoche */
  var peligro = function(n){
    var nx = siguiente(), iv = 0;
    var resta = function(){ var a = new Date(), m = new Date(a); m.setHours(24, 0, 0, 0); var s = Math.max(0, Math.round((m - a) / 1000)); return Math.floor(s / 3600) + " h " + String(Math.floor(s % 3600 / 60)).padStart(2, "0") + " min"; };
    var el = monta("peligro", "Tu racha está en peligro",
      '<div class="rz-cc">' +
        '<div class="rz-llama">' + llama("rz-big") + '<span class="rz-humo" aria-hidden="true"><i></i><i></i><i></i></span></div>' +
        '<div class="rz-num" aria-hidden="true"><b>' + n + "</b></div>" +
        '<p class="rz-tit">¡Tu racha está en peligro!</p>' +
        '<p class="rz-reloj">Se apaga en <b>' + resta() + "</b></p>" +
        '<div class="rz-dice"><img src="' + IMG + 'alerta.webp" alt="" width="110" height="110"><p><b>¡Salva tus ' + n + " " + dd(n) + "!</b><small>Una lección corta basta. Manzana cuenta contigo.</small></p></div>",
      (nx ? '<button class="rz-ok" type="button" data-rz-open="' + esc(nx) + '">Salvar mi racha</button>' : '<button class="rz-ok" type="button">Vamos</button>') +
      '<button class="rz-no" type="button">Luego</button>', function(){ clearInterval(iv); });
    iv = setInterval(function(){ if (!document.body.contains(el)) return clearInterval(iv); var b = el.querySelector(".rz-reloj b"); if (b) b.textContent = resta(); }, 15000);
    return el;
  };

  /* ---- cuándo sale cada pantalla: fuera de lecciones, juegos y ventanas ---- */
  var K = "plx-rz-cel", KU = "plx-rz-ult", KP = "plx-rz-perdida", KR = "plx-rz-peligro";
  var libre = function(){
    if (document.visibilityState !== "visible" || abierta) return false;
    try { if (P) return false; } catch (e) {}
    if (typeof view !== "undefined" && (view === "atelier" || view === "dictee")) return false;
    var h = document.documentElement;
    /* #plxg (la capa del Arcade) siempre existe, oculta: cuenta solo cuando está abierta */
    if (h.classList.contains("plxg-on") || h.classList.contains("rkx-on")) return false;
    var capa = document.getElementById("plxg"); if (capa && !capa.hidden) return false;
    var pl = document.getElementById("player"); if (pl && !pl.hidden) return false;
    return !document.querySelector(".gmodal, .plx69-menu");
  };
  var ayer = function(){ var d = new Date(); d.setDate(d.getDate() - 1); return dkey(d); };
  var leeU = function(){ try { return JSON.parse(lsG(KU) || "null"); } catch (e) { return null; } };
  var vigila = function(){
    var d = datosHoy(), hoy = dkey(new Date());
    document.body.classList.toggle("rz-hecho", d.hecho && d.n > 0);
    document.body.classList.toggle("rz-riesgo", !d.hecho && d.n > 0 && d.h >= 18);
    /* la tarjeta de Inicio se pone al día sola (cambió la hora o el estado) */
    var tj = document.querySelector("#view .rz-card");
    if (tj && tj.getAttribute("data-rz") !== estado(d).id && typeof render === "function" && libre()) { try { render(); } catch (e) {} }
    var u = leeU();
    if (d.n > 0 && (!u || u.d !== hoy || u.n !== d.n)) lsS(KU, JSON.stringify({ n: d.n, d: hoy }));
    /* hace falta que la app lleve ~2,5 s libre: nunca justo al cerrar un juego y abrir otro */
    if (!libre()) { vigila.libres = 0; return; }
    if (++vigila.libres < 3) return;
    /* 1. la meta de hoy recién cumplida */
    if (d.hecho && d.n > 0 && lsG(K) !== hoy) { lsS(K, hoy); celebra(d.n); return; }
    /* 2. la racha se perdió (la última vez que la vimos viva fue antes de ayer) */
    if (d.n === 0 && u && u.n >= 2 && u.d !== hoy && u.d !== ayer() && lsG(KP) !== u.d) {
      lsS(KP, u.d); congela(u.n, Math.max(1, Math.round((new Date(hoy) - new Date(u.d)) / 864e5) - 1)); return;
    }
    /* 3. racha en peligro: una vez al día, desde las 18 h */
    if (!d.hecho && d.n > 0 && d.h >= 18 && lsG(KR) !== hoy) { lsS(KR, hoy); peligro(d.n); }
  };
  /* si al abrir la app la meta de hoy ya estaba cumplida (otro dispositivo, o antes de esta versión), no se celebra de nuevo */
  if (datosHoy().hecho && lsG(K) == null) lsS(K, dkey(new Date()));
  vigila.libres = 0;
  setInterval(vigila, 900);
  /* si mientras tanto se abre un juego o una lección, la pantalla de racha se aparta */
  setInterval(function(){
    if (!abierta) return;
    var h = document.documentElement, capa = document.getElementById("plxg"), pl = document.getElementById("player");
    if (h.classList.contains("plxg-on") || (capa && !capa.hidden) || (pl && !pl.hidden)) { if (abierta.classList.contains("celebra")) lsS(K, ""); var b = abierta.querySelector(".rz-bts button:last-child"); if (b) b.click(); }
  }, 400);
  setTimeout(vigila, 600);

  window.PLX_RACHA = { estado: estado, estadoHoy: estadoHoy, datosHoy: datosHoy, celebra: celebra, congela: congela, peligro: peligro, tarjeta: tarjeta, esHito: esHito, libre: libre,
    cerrar: function(){ var b = abierta && abierta.querySelector(".rz-bts button:last-child"); if (b) b.click(); } };

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
  .rz-cel{outline:none;position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px 16px calc(24px + env(safe-area-inset-bottom));
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
  .rz-ok{all:unset;box-sizing:border-box;cursor:pointer;width:100%;max-width:360px;display:block;min-height:54px;border-radius:16px;background:#fff;color:#E85D00;text-align:center;
    font:900 17px/54px var(--sans,system-ui);letter-spacing:.02em;text-transform:uppercase;box-shadow:0 5px 0 rgba(120,30,0,.35);animation:rzSube .4s ease-out 1.8s both}
  .rz-cel.hito .rz-ok{color:#9A6400;box-shadow:0 5px 0 rgba(120,80,0,.35)}
  .rz-ok:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(120,30,0,.35)}
  .rz-ok:focus-visible{outline:3px solid #141B3A;outline-offset:3px}
  .rz-conf{position:absolute;inset:0;pointer-events:none}
  .rz-conf i{position:absolute;top:-16px;left:var(--x);width:9px;height:14px;border-radius:2px;background:var(--c);transform:rotate(var(--r));animation:rzCae 2.6s cubic-bezier(.3,.6,.5,1) calc(.9s + var(--d)) both}
  @keyframes rzCae{0%{transform:translateY(0) rotate(var(--r));opacity:1}100%{transform:translateY(105vh) rotate(calc(var(--r) + 540deg));opacity:.8}}
  @media (max-height:640px){ .rz-llama{width:88px;height:110px} .rz-num{height:66px;font-size:58px;line-height:66px} .rz-dice img{width:72px;height:72px} .rz-sem{margin-bottom:12px} .rz-dice{margin-bottom:14px} }
  /* botones de las pantallas */
  .rz-bts{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%}
  .rz-no{all:unset;box-sizing:border-box;cursor:pointer;min-height:44px;padding:0 18px;color:inherit;opacity:.9;font:800 15px/44px var(--sans,system-ui);letter-spacing:.03em;text-transform:uppercase;animation:rzSube .4s ease-out 2s both}
  .rz-no:focus-visible{outline:3px solid currentColor;outline-offset:2px;border-radius:10px}
  /* celebración: rayos que giran detrás y brasas que saltan de la llama */
  .rz-rayos{position:absolute;left:50%;top:30%;width:180vmax;height:180vmax;margin:-90vmax 0 0 -90vmax;pointer-events:none;opacity:.22;
    background:repeating-conic-gradient(from 0deg,#fff 0 9deg,transparent 9deg 22deg);-webkit-mask:radial-gradient(circle,#000 0,transparent 55%);mask:radial-gradient(circle,#000 0,transparent 55%);animation:rzGira 22s linear infinite}
  @keyframes rzGira{to{transform:rotate(360deg)}}
  .rz-brasa{position:absolute;left:50%;top:55%;width:10px;height:10px;margin:-5px;border-radius:50%;background:#FFE27A;box-shadow:0 0 10px #FFB300;opacity:0;animation:rzBrasa .9s ease-out calc(.8s + var(--d)) both}
  @keyframes rzBrasa{0%{transform:rotate(var(--a)) translateY(0) scale(1);opacity:1}100%{transform:rotate(var(--a)) translateY(-95px) scale(.2);opacity:0}}
  /* congelada: la llama se hiela, la cubre el hielo, cae nieve y la escarcha entra por los bordes */
  .rz-cel.congela{background:radial-gradient(circle at 50% 30%,#EAF8FF 0,#8FD0F5 42%,#2F6FB8 100%);color:#0B2F57}
  .congela .rz-big{animation:rzEnciende .6s cubic-bezier(.2,1.6,.4,1) .1s both,rzHiela 1.2s ease-in .7s both}
  @keyframes rzHiela{to{filter:hue-rotate(185deg) saturate(.55) brightness(1.35) drop-shadow(0 8px 18px rgba(0,60,120,.35))}}
  .rz-hielo{position:absolute;inset:-6px -10px -4px}
  .rz-hielo svg{width:100%;height:100%;overflow:visible;animation:rzCubre 1s ease-out 1.1s both}
  .rz-hielo path{fill:rgba(225,246,255,.55);stroke:#fff;stroke-width:3;stroke-linejoin:round}
  .rz-hielo .brillo{fill:none;stroke:rgba(255,255,255,.9);stroke-width:4;stroke-linecap:round}
  @keyframes rzCubre{0%{clip-path:inset(100% 0 0 0);opacity:.2}100%{clip-path:inset(0 0 0 0);opacity:1}}
  .rz-roto{color:#fff;text-shadow:0 3px 0 rgba(11,47,87,.35);animation:rzTirita .5s ease-in-out 1.6s 3 both}
  @keyframes rzTirita{25%{transform:translateX(-4px) rotate(-2deg)}75%{transform:translateX(4px) rotate(2deg)}}
  .rz-escarcha{position:absolute;inset:0;pointer-events:none;animation:rzEscarcha 1.8s ease-out .5s both}
  @keyframes rzEscarcha{from{box-shadow:inset 0 0 0 0 rgba(255,255,255,0)}to{box-shadow:inset 0 0 110px 36px rgba(255,255,255,.8)}}
  .rz-nieve{position:absolute;inset:0;pointer-events:none;overflow:hidden}
  .rz-nieve i{position:absolute;top:-30px;left:var(--x);font-style:normal;font-size:var(--s);color:#fff;text-shadow:0 0 6px rgba(255,255,255,.9);animation:rzNieva var(--t) linear var(--d) infinite}
  @keyframes rzNieva{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(18px,55vh) rotate(180deg)}100%{transform:translate(-10px,110vh) rotate(360deg)}}
  .congela .rz-ok{color:#1B5FA8;box-shadow:0 5px 0 rgba(11,47,87,.35)}
  /* en peligro: la llama tiembla y se apaga a ratos, sale humo y el fondo late */
  .rz-cel.peligro{background:radial-gradient(circle at 50% 32%,#FF8A3D 0,#E0301E 48%,#5A0A10 100%);animation:rzEntra .28s ease-out both,rzLatido 1.6s ease-in-out .4s infinite}
  @keyframes rzLatido{50%{box-shadow:inset 0 0 120px 30px rgba(0,0,0,.35)}}
  .peligro .rz-big{animation:rzEnciende .6s cubic-bezier(.2,1.6,.4,1) .1s both,rzApaga 2.4s ease-in-out .8s infinite}
  @keyframes rzApaga{0%,100%{transform:scale(1) rotate(0)}20%{transform:scale(.96) rotate(-6deg)}35%{transform:scale(.78,.7) rotate(5deg);filter:brightness(.7) saturate(.7)}55%{transform:scale(1.06) rotate(-3deg)}75%{transform:scale(.98) rotate(2deg)}}
  .rz-humo{position:absolute;left:50%;top:2px}
  .rz-humo i{position:absolute;width:22px;height:22px;margin-left:-11px;border-radius:50%;background:rgba(255,255,255,.45);filter:blur(3px);opacity:0;animation:rzHumo 2.4s ease-out infinite}
  .rz-humo i:nth-child(2){animation-delay:.8s;margin-left:-2px}.rz-humo i:nth-child(3){animation-delay:1.6s;margin-left:-18px}
  @keyframes rzHumo{0%{transform:translateY(20px) scale(.5);opacity:0}30%{opacity:.8}100%{transform:translateY(-70px) scale(1.8);opacity:0}}
  .rz-reloj{margin:-8px 0 16px;font:700 16px/1.3 var(--sans,system-ui);animation:rzSube .4s ease-out 1.2s both}
  .rz-reloj b{display:inline-block;padding:3px 10px;border-radius:99px;background:rgba(0,0,0,.25);font-variant-numeric:tabular-nums}
  .peligro .rz-ok{color:#C4161C}
  /* la tarjeta de Inicio: cada estado se mueve a su manera */
  .rz-card .rz-bub{animation:rzGlobo .45s cubic-bezier(.2,1.5,.4,1) both;transform-origin:10% 100%}
  @keyframes rzGlobo{from{transform:scale(.6);opacity:0}}
  .rz-card .rz-mz:not(.fantasma){animation:rzRespira 3.2s ease-in-out infinite;transform-origin:50% 100%}
  @keyframes rzRespira{50%{transform:scale(1.03,.97)}}
  .rz-card[data-rz=salva] .rz-mini,.rz-card[data-rz=tarde] .rz-mini,.rz-card[data-rz=ultima] .rz-mini{animation:rzTiembla 2s ease-in-out infinite;transform-origin:50% 90%}
  .rz-card[data-rz=ultima]{animation:rzAlarma 1.3s ease-in-out infinite}
  @keyframes rzAlarma{50%{box-shadow:0 0 0 4px rgba(255,90,90,.45),0 10px 24px -14px rgba(0,0,0,.5)}}
  .rz-card[data-rz^=hecho] .rz-mini,.rz-card[data-rz=hito] .rz-mini{animation:rzLate 1.8s ease-in-out infinite;transform-origin:50% 90%}
  .rz-card[data-rz^=hecho]::before,.rz-card[data-rz=hito]::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.35) 50%,transparent 65%);transform:translateX(-100%);animation:rzBrillo 3.5s ease-in-out 1s infinite}
  @keyframes rzBrillo{0%,60%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
  .rz-card[data-rz=congelada]::after,.rz-card[data-rz=zzz]::after{position:absolute;right:18px;top:10px;pointer-events:none;color:#fff;font:900 16px/1 var(--sans,system-ui);letter-spacing:10px}
  .rz-card[data-rz=congelada]::after{content:"\\2744  \\2744";color:#3B8FD0;animation:rzNieveCard 4s linear infinite}
  .rz-card[data-rz=zzz]::after{content:"z Z z";opacity:.85;animation:rzFlota 3s ease-in-out infinite}
  @keyframes rzNieveCard{0%{transform:translateY(-6px) rotate(0);opacity:0}20%{opacity:1}100%{transform:translateY(60px) rotate(120deg);opacity:0}}
  .rz-cel.quieto *,.rz-cel.quieto{animation:none!important}
  .rz-cel.quieto .rz-a{display:none}
  @media (prefers-reduced-motion:reduce){ .rz-card,.rz-card *,.rz-card::before,.rz-card::after,.rz-cel *,.rz-cel,.rz-mz.fantasma,body.rz-hecho .streak-card .sk-h svg,body.rz-riesgo .streak-card .sk-h svg{animation:none!important} .rz-a{display:none} }
  `;
  var st = document.createElement("style"); st.id = "plx71"; st.textContent = css; document.head.appendChild(st);
})();
