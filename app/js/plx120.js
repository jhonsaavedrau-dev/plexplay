/* PLEX PLAY 4.50 — PLEX 1V1 «transmisión deportiva»: una sola dirección visual para todo el duelo
   Pedido de Jhon (15-oct-2026): «siento que los diseños se ven mal». Diagnóstico: muchos estilos mezclados (arena con
   focos, tarjetas planas, degradados de tres colores, stickers por todas partes), sin un foco por pantalla, doble
   cabecera en los modos y las opciones en la mitad de arriba (lejos del pulgar). Eligió el 1V1 y «como consideres».
   Dirección: como los gráficos de un partido en la TV.
   - Tipografía: Barlow Condensed (la misma familia que el cuerpo de la app) para marcadores, títulos y cifras.
   - Color con función: azul = tú, rojo = el rival, dorado = solo lo que se gana o la acción principal; el resto, tinta.
   - Un solo marcador arriba (fichas inclinadas de cada equipo, la ronda y el reloj en el centro, la tira de fuerza
     como borde inferior); en los modos se esconde la cabecera de la sala.
   - Lo que se toca, abajo: la pregunta queda al medio y las opciones pegadas al borde inferior.
   - Manzana solo en los momentos grandes: cartel de la sala, presentación, golpes y final. Las reacciones van en un
     botón que se abre bajo el marcador, no a la vista todo el tiempo. Los modos usan íconos de línea (plx119).
   - Sala: cartel de partido partido en diagonal; «Buscar rival» fijo abajo. Presentación: pantalla dividida.
     Final: franja de resultado (VICTORIA / DERROTA / EMPATE).
   Todo va en @layer pz con !important (la capa que manda): pisa a plx22, plx62, plx118 y plx119 sin tocarlos.
   Las imágenes nuevas (bustos y fondos, PROMPTS-1V1.md) entran por FOTOS cuando existan. Pruebas: v1-modos.mjs,
   v1-2d.mjs y v1-serie-oro.mjs (las mismas de siempre: la piel no cambia el juego). */
(function(){
  "use strict";
  if (!window.PLX1V1) return;
  var D = document, IMG = "img/m2d/";
  var raiz = function(){ return D.getElementById("plx1v1"); };
  var X = function(){ return window.PLX1V1X || null; };
  /* las imágenes que llegarán (si no están, se usan las que ya hay) */
  var FOTOS = { yo: "duelo_yo", rival: "duelo_rival", ganaYo: "campeon", pierdeYo: "triste", ganaRival: "duelo_rival", pierdeRival: "facepalm" };
  var img = function(k){ return '<img src="' + IMG + FOTOS[k] + '.webp" alt="" decoding="async" draggable="false">'; };
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ================================================================== retoques de estructura por etapa */
  function decora(r){
    r.classList.add("tx");
    var st = r.dataset.stage || "";
    if (st === "lobby") cartel(r);
    if (st === "end") franja(r);
    if (st === "count") presenta(r);
    reacciones(r);
  }
  function cartel(r){
    var h = r.querySelector(".v1-hero"); if (!h || h.querySelector(".tx-cartel")) return;
    h.insertAdjacentHTML("afterbegin", '<div class="tx-cartel"><div class="tx-mitad tx-mitad--a">' + img("yo") + '</div><div class="tx-mitad tx-mitad--b">' + img("rival") + '</div><span class="tx-vs">VS</span></div>' +
      '<div class="tx-titulo"><small>Duelos de francés · en vivo</small><h2>Reta a otro estudiante</h2><p>9 modos · partidas de 1 a 2 minutos</p></div>');
  }
  function presenta(r){
    var i = r.querySelector(".v1-intro"); if (!i || i.querySelector(".tx-vs")) return;
    var bv = i.querySelector(".v1-bigvs"); if (bv) bv.innerHTML = '<span class="tx-vs">VS</span>';
  }
  function franja(r){
    var b = r.querySelector(".v1-ban"); if (!b || b.dataset.tx) return;
    var tipo = b.classList.contains("win") ? "win" : b.classList.contains("lose") ? "lose" : "draw", antes = b.textContent;
    b.dataset.tx = 1;
    b.innerHTML = "<b>" + (tipo === "win" ? "Victoria" : tipo === "lose" ? "Derrota" : "Empate") + "</b><small>" + esc(antes) + "</small>";
    var duo = r.querySelector(".v1-duo"); if (duo) duo.classList.add("tx-duo--" + tipo);
  }
  /* las reacciones: un botón bajo el marcador que despliega los 6 stickers y se cierra al elegir */
  function reacciones(r){
    var rx = r.querySelector(".v3-rx"); if (!rx || rx.querySelector(".tx-rx-t")) return;
    rx.dataset.abierto = "0";
    rx.insertAdjacentHTML("afterbegin", '<button type="button" class="tx-rx-t" aria-label="Reaccionar" aria-expanded="false"><img src="' + IMG + 'pulgar.webp" alt=""></button>');
  }
  D.addEventListener("click", function(e){
    var t = e.target && e.target.closest ? e.target.closest(".tx-rx-t, .v3-rx-b") : null; if (!t) return;
    var rx = t.closest(".v3-rx"); if (!rx) return;
    if (t.classList.contains("tx-rx-t")) { var ab = rx.dataset.abierto !== "1"; rx.dataset.abierto = ab ? "1" : "0"; t.setAttribute("aria-expanded", String(ab)); return; }
    setTimeout(function(){ rx.dataset.abierto = "0"; var b = rx.querySelector(".tx-rx-t"); if (b) b.setAttribute("aria-expanded", "false"); }, 120);
  }, true);

  var obs = null;
  function vigila(r){
    if (obs) obs.disconnect();
    obs = new MutationObserver(function(ms){ if (ms.some(function(m){ return m.target === r; })) decora(r); });
    obs.observe(r, { childList: true, attributes: true, attributeFilter: ["data-stage"] });
    decora(r);
  }
  new MutationObserver(function(){ var r = raiz(); if (r && r !== vigila.r) { vigila.r = r; vigila(r); } }).observe(D.body, { childList: true });

  /* ================================================================== estilo */
  var T = "html #plx1v1.tx";
  var reglas = [
    /* tokens */
    T + "{--tx-n0:#090D19;--tx-n1:#111729;--tx-n2:#18203A;--tx-ln:rgba(255,255,255,.09);--tx-t:#F4F6FB;--tx-t2:#98A2BE;--tx-az:#2F6BFF;--tx-az2:#16307E;--tx-ro:#EE3D5C;--tx-ro2:#7E1630;--tx-oro:#FFC83D;--tx-fc:'Barlow Condensed',Barlow,system-ui,sans-serif;" +
      "background:radial-gradient(60% 34% at 0% 0%,rgba(47,107,255,.20),transparent 70%),radial-gradient(60% 34% at 100% 0%,rgba(238,61,92,.17),transparent 70%),linear-gradient(180deg,#0D1324,#090D19 55%)!important;color:var(--tx-t)!important}",
    T + " .v2-arena{display:none!important}",
    /* cabecera de la sala: limpia, sin vidrio; en las partidas se esconde (manda el marcador) */
    T + " .v1-h{background:transparent!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:none!important;padding:10px 14px!important}",
    T + " .v1-h b{font:800 italic 1.45rem/1 var(--tx-fc)!important;letter-spacing:.02em;text-transform:uppercase}" + T + " .v1-h b em{color:var(--tx-oro)!important}",
    T + " .v1-h span{font:700 .78rem/1 var(--tx-fc)!important;letter-spacing:.14em;text-transform:uppercase;color:var(--tx-t2)!important}",
    T + " .v1-x{width:40px!important;height:40px!important;border-radius:12px!important;background:rgba(255,255,255,.07)!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important}",
    T + "[data-stage=match] > .v1-h{display:none!important}",

    /* ---------- sala ---------- */
    T + " .v1-hero.v2-hero{margin:0 -14px 6px!important;padding:0!important;border-radius:0!important;overflow:visible!important;background:none!important}",
    T + " .v1-hero.v2-hero > *:not(.tx-cartel):not(.tx-titulo){display:none!important}",
    T + " .tx-cartel{position:relative;height:clamp(190px,52vw,280px);overflow:hidden}",
    T + " .tx-mitad{position:absolute;inset:0;display:flex;align-items:flex-end}",
    T + " .tx-mitad--a{clip-path:polygon(0 0,57% 0,43% 100%,0 100%);background:repeating-linear-gradient(115deg,rgba(255,255,255,.035) 0 2px,transparent 2px 14px),linear-gradient(160deg,#2F6BFF,#16307E);justify-content:flex-start}",
    T + " .tx-mitad--b{clip-path:polygon(57% 0,100% 0,100% 100%,43% 100%);background:repeating-linear-gradient(115deg,rgba(255,255,255,.035) 0 2px,transparent 2px 14px),linear-gradient(200deg,#EE3D5C,#7E1630);justify-content:flex-end}",
    T + " .tx-mitad img{width:auto;height:92%;max-width:56%;object-fit:contain;object-position:bottom;margin:0 0 -4px;filter:drop-shadow(0 14px 18px rgba(0,0,0,.45));animation:txEntra .6s cubic-bezier(.2,.9,.3,1.2) both}",
    T + " .tx-mitad--b img{animation-name:txEntraB;animation-delay:.08s}",
    T + " .tx-vs{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) skewX(-8deg);font:800 italic clamp(52px,15vw,84px)/1 var(--tx-fc);color:#fff;letter-spacing:-.02em;text-shadow:4px 4px 0 var(--tx-oro),0 0 40px rgba(0,0,0,.45);z-index:2}",
    T + " .tx-cartel::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--tx-oro)}",
    T + " .tx-titulo{display:grid;gap:4px;padding:14px 16px 4px;text-align:left}",
    T + " .tx-titulo small{font:700 .74rem/1 var(--tx-fc);letter-spacing:.18em;text-transform:uppercase;color:var(--tx-oro)}",
    T + " .tx-titulo h2{margin:0!important;font:800 italic 2.1rem/1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.01em;color:#fff!important}",
    T + " .tx-titulo p{margin:0!important;color:var(--tx-t2)!important;font-size:.9rem!important}",
    /* nivel: pestañas de transmisión */
    T + " .v1-lv{background:transparent!important;box-shadow:inset 0 -1px 0 var(--tx-ln)!important;border-radius:0!important;padding:0!important;gap:0!important;margin:12px 0!important}",
    T + " .v1-lv button{border-radius:0!important;background:transparent!important;color:var(--tx-t2)!important;font:800 1rem/1 var(--tx-fc)!important;letter-spacing:.06em;padding:12px 4px!important;box-shadow:none!important}",
    T + " .v1-lv button[aria-pressed=true]{color:#fff!important;box-shadow:inset 0 -3px 0 var(--tx-az)!important}",
    /* modos */
    T + " .v3-sala-h b{font:800 italic 1.25rem/1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.03em}",
    T + " .v3-dia{border-radius:12px!important;background:var(--tx-n1)!important;color:#fff!important;box-shadow:inset 4px 0 0 var(--tx-oro),inset 0 0 0 1px var(--tx-ln)!important;padding:12px 14px!important}",
    T + " .v3-dia b{font:800 1.02rem/1.1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.03em}",
    T + " .v3-dia em{background:var(--tx-oro)!important;color:#141826!important;font:800 .78rem/1 var(--tx-fc)!important;letter-spacing:.06em}",
    T + " .v3-dia-ic{color:var(--tx-oro)}",
    T + " .v3-m{opacity:1!important;min-height:84px!important;border-radius:12px!important;background:var(--tx-n1)!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important;padding:12px!important;gap:4px!important}",
    T + " .v3-m .v3-m-ic{color:var(--tx-t2)}" + T + " .v3-m b{font:800 1rem/1.05 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.03em}",
    T + " .v3-m small{color:var(--tx-t2)!important}",
    T + " .v3-m[aria-pressed=true]{background:linear-gradient(160deg,rgba(47,107,255,.22),var(--tx-n1) 70%)!important;box-shadow:inset 0 0 0 2px var(--tx-az)!important}",
    T + " .v3-m[aria-pressed=true] .v3-m-ic{color:#7FA6FF}",
    T + " .v3-m[aria-pressed=true]::after{content:'';position:absolute;right:9px;bottom:9px;width:16px;height:16px;border-radius:50%;background:var(--tx-az) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E\") center/11px no-repeat}",
    T + " .v3-m-dia{background:var(--tx-oro)!important;font-family:var(--tx-fc)!important}",
    T + " .v3-serie-f{border-radius:12px!important;background:var(--tx-n1)!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important}",
    T + " .v3-serie-f b{font:800 1.02rem/1.1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.03em}",
    /* el botón principal, fijo abajo */
    T + " .v1-main{position:sticky!important;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:6;min-height:60px!important;border-radius:14px!important;font:800 italic 1.45rem/1 var(--tx-fc)!important;letter-spacing:.04em;text-transform:uppercase;animation:none!important;box-shadow:0 4px 0 #B07C00,0 14px 30px -8px rgba(255,200,61,.45)!important}",
    T + " .v1-row .pz-btn,.tx .v1-join .pz-btn{font:800 1rem/1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.05em;border-radius:12px!important}",
    T + " .v1-row .pz-btn--liso{background:transparent!important;box-shadow:inset 0 0 0 1.5px var(--tx-ln)!important;color:#fff!important}",
    T + " .v1-join input{background:var(--tx-n1)!important;border:0!important;box-shadow:inset 0 0 0 1.5px var(--tx-ln)!important;font:800 1.2rem/1 var(--tx-fc)!important;letter-spacing:.3em!important;border-radius:12px!important}",
    T + " .v1-rank{background:var(--tx-n1)!important;border:0!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important;border-radius:14px!important}",
    T + " .v1-rh b{font:800 italic 1.4rem/1 var(--tx-fc)!important;text-transform:uppercase}" + T + " .v1-rt{font-family:var(--tx-fc)!important;letter-spacing:.14em!important}",
    T + " .v1-rw{background:var(--tx-n2)!important;border-radius:12px!important}",
    T + "[data-stage=lobby] .v1-b{padding-bottom:96px!important}",
    T + " .v1-rec{font-family:var(--tx-fc)!important;letter-spacing:.04em;color:var(--tx-t2)!important}",

    /* ---------- búsqueda ---------- */
    T + " .v1-center h2{font:800 italic 1.8rem/1.05 var(--tx-fc)!important;text-transform:uppercase;color:#fff!important}",

    /* ---------- presentación: pantalla dividida ---------- */
    T + " .v1-intro{grid-template-columns:1fr 1fr!important;gap:0!important;padding:0!important;width:100%!important;min-height:calc(100dvh - 60px)!important;align-content:stretch!important;align-items:stretch!important;position:relative;grid-template-rows:minmax(calc(100dvh - 60px),1fr)!important}",
    T + " .v1-intro > .v1-bolt{display:none!important}",
    T + " .v1-ic{position:relative;display:flex!important;flex-direction:column;justify-content:flex-end;align-items:center;gap:4px!important;padding:0 6px 150px!important;border:0!important;border-radius:0!important;box-shadow:none!important;min-width:0}",
    T + " .v1-ic.me{background:repeating-linear-gradient(115deg,rgba(255,255,255,.035) 0 2px,transparent 2px 14px),linear-gradient(170deg,#2F6BFF,#16307E 80%)!important;clip-path:polygon(0 0,100% 0,88% 100%,0 100%)}",
    T + " .v1-ic.op{background:repeating-linear-gradient(115deg,rgba(255,255,255,.035) 0 2px,transparent 2px 14px),linear-gradient(190deg,#EE3D5C,#7E1630 80%)!important;clip-path:polygon(12% 0,100% 0,100% 100%,0 100%)}",
    T + " .v1-ic .v2-art{width:min(100%,220px)!important;height:auto!important;aspect-ratio:1;margin:0!important}",
    T + " .v1-ic b{font:800 italic 1.7rem/1 var(--tx-fc)!important;text-transform:uppercase;color:#fff!important;max-width:100%}",
    T + " .v1-ic .v1-rk{font:700 .85rem/1 var(--tx-fc)!important;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.85)!important}",
    T + " .v1-ic .v2-avatar{top:12px!important;left:12px!important;box-shadow:0 0 0 2px #fff!important}" + T + " .v1-ic.op .v2-avatar{display:none}",
    T + " .v1-bigvs{position:absolute!important;left:50%;top:42%;transform:translate(-50%,-50%);z-index:3;margin:0!important}",
    T + " .v1-bigvs .tx-vs{position:static;transform:skewX(-8deg);display:block;font-size:clamp(64px,20vw,110px)}",
    T + " .v1-rules{position:absolute!important;left:0;right:0;bottom:84px;margin:0!important;padding:12px 16px!important;background:rgba(9,13,25,.92);box-shadow:inset 4px 0 0 var(--tx-oro);text-align:left!important;color:#fff!important;font:700 .95rem/1.3 var(--tx-fc)!important;letter-spacing:.03em;z-index:3}",
    T + " .v1-rules b{font:800 italic 1.3rem/1 var(--tx-fc);text-transform:uppercase;color:var(--tx-oro);margin-right:4px}",
    T + " .v1-rules .v3-ico{width:24px;height:24px;margin-right:6px;color:var(--tx-oro)}",
    T + " .v1-intro .v1-cd{position:absolute!important;left:0;right:0;bottom:6px;min-height:0!important;text-align:center;font:800 italic 4.4rem/1 var(--tx-fc)!important;color:#fff!important;z-index:3}",
    /* ruleta: sorteo de modo */
    T + " .v3-ruleta{background:rgba(9,13,25,.94)!important}",
    T + " .v3-ruleta-k{font:800 .9rem/1 var(--tx-fc)!important;letter-spacing:.24em!important}",
    T + " .v3-ruleta-v{width:300px!important;border-radius:12px!important;background:var(--tx-n1)!important;box-shadow:inset 0 0 0 2px var(--tx-oro)!important}",
    T + " .v3-ruleta-i b{font:800 italic 1.7rem/1 var(--tx-fc)!important;text-transform:uppercase}" + T + " .v3-ruleta-i .v3-ico{width:30px;height:30px;color:var(--tx-oro)}",
    T + " .v3-ruleta-v::before{background:linear-gradient(var(--tx-n1),transparent)!important}" + T + " .v3-ruleta-v::after{background:linear-gradient(transparent,var(--tx-n1))!important}",

    /* ---------- marcador (rondas y modos) ---------- */
    T + " .v1-top," + T + " .v3-cab{position:sticky!important;top:0!important;z-index:6!important;display:grid!important;grid-template-columns:1fr auto 1fr!important;align-items:stretch!important;gap:0!important;padding:0!important;background:var(--tx-n0)!important;border:0!important;box-shadow:0 1px 0 var(--tx-ln)!important;width:100%!important;margin:0!important;border-radius:0!important;min-height:64px}",
    T + " .v1-top .v1-p," + T + " .v3-j{display:flex!important;align-items:center;gap:8px;padding:6px 18px 6px 8px;min-width:0}",
    T + " .v1-top .v1-p.me," + T + " .v3-j--a{background:linear-gradient(90deg,#16307E,#2F6BFF)!important;clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,0 100%)}",
    T + " .v1-top .v1-p.op," + T + " .v3-j--b{background:linear-gradient(270deg,#7E1630,#EE3D5C)!important;clip-path:polygon(0 0,100% 0,100% 100%,12px 100%);padding:6px 8px 6px 18px!important;flex-direction:row-reverse!important;text-align:right}",
    T + " .v1-top .v2-retrato," + T + " .v3-ret{width:44px!important;height:44px!important;background:rgba(0,0,0,.18)!important;border-radius:10px!important;box-shadow:none!important;overflow:hidden!important}",
    T + " .v1-top .v2-mini," + T + " .v3-ret img{width:52px!important;height:52px!important;margin:-2px -4px -8px!important}",
    T + " .v1-top .v1-pi b," + T + " .v3-jt b{font:700 .78rem/1 var(--tx-fc)!important;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.9)!important;max-width:84px!important}",
    T + " .v1-top .v1-sc," + T + " .v3-mar{font:800 italic 1.9rem/1 var(--tx-fc)!important;color:#fff!important}",
    T + " .v3-mar em{font-style:italic}",
    T + " .v1-top .v1-rk{display:none!important}" + T + " .v1-top .v1-dots{gap:2px!important}" + T + " .v1-top .v1-dots i{width:6px!important;height:6px!important;background:rgba(255,255,255,.25)!important}",
    T + " .v1-top .v1-dots i.ok{background:#8CF0B6!important}" + T + " .v1-top .v1-dots i.ko{background:#0B0E18!important}" + T + " .v1-top .v1-dots i.cur{background:#fff!important}",
    T + " .v1-top .v1-mid," + T + " .v3-centro{display:grid!important;justify-items:center;align-content:center;gap:2px;padding:0 10px;min-width:76px;background:var(--tx-n0)}",
    T + " .v1-top .v1-mid small," + T + " .v3-centro small{display:flex;align-items:center;gap:4px;font:700 .68rem/1 var(--tx-fc)!important;letter-spacing:.12em;text-transform:uppercase;color:var(--tx-t2)!important}",
    T + " .v3-centro small .v3-ico{width:14px;height:14px}",
    T + " .v1-top .v1-timer{width:40px!important;height:40px!important}" + T + " .v1-top .v1-timer b{font:800 1.25rem/1 var(--tx-fc)!important}",
    T + " .v3-reloj b{font:800 italic 1.7rem/1 var(--tx-fc)!important}" + T + " .v3-vs-mini{font:800 italic 1.4rem/1 var(--tx-fc)!important;color:var(--tx-oro)!important}",
    T + " .v2-tira{grid-column:1/-1!important;height:4px!important;margin:0!important;background:var(--tx-ro)!important}" + T + " .v2-tira i{background:var(--tx-az)!important}" + T + " .v2-tira__chispa{width:10px;height:10px;margin:-5px 0 0 -5px}",
    T + " .v3-cor{width:15px!important;height:15px!important}",
    T + " .v1-p .v1-st{font:800 .72rem/1 var(--tx-fc)!important;color:var(--tx-oro)!important}",

    /* ---------- partida: pregunta al medio, opciones abajo ---------- */
    T + " .v1-b.v1-q{display:flex!important;flex-direction:column;gap:10px;min-height:calc(100dvh - 68px);padding:14px 14px calc(18px + env(safe-area-inset-bottom,0px))!important;box-sizing:border-box}",
    T + " .v1-q .v1-chip{align-self:flex-start!important;background:transparent!important;color:var(--tx-oro)!important;box-shadow:inset 0 0 0 1px rgba(255,200,61,.5)!important;font:800 .74rem/1 var(--tx-fc)!important;letter-spacing:.12em;text-transform:uppercase}",
    T + " .v1-q .v1-ask{font-size:.95rem!important;color:var(--tx-t2)!important}",
    T + " .v1-q .v1-qt{background:transparent!important;border:0!important;box-shadow:none!important;padding:6px 0!important;font:800 1.65rem/1.2 var(--f-tit)!important;color:#fff!important;margin:auto 0!important;text-align:left}",
    T + " .v1-q .v1-ctx{background:var(--tx-n1)!important;border-radius:12px!important}",
    T + " .v1-q .v1-opts{margin-top:auto!important;gap:10px!important}",
    T + " .v1-o," + T + " .v3-op{min-height:58px!important;border-radius:14px!important;background:var(--tx-n1)!important;border:0!important;box-shadow:inset 0 0 0 1.5px var(--tx-ln),0 3px 0 rgba(0,0,0,.35)!important;color:#fff!important;font-weight:700!important}",
    T + " .v1-o span{background:var(--tx-n2)!important;color:var(--tx-t2)!important;font:800 .95rem/1 var(--tx-fc)!important;border-radius:8px!important}",
    T + " .v1-o.sel{box-shadow:inset 0 0 0 2px var(--tx-az)!important}",
    T + " .v1-o.ok," + T + " .v3-op.ok{background:#0F3A2A!important;box-shadow:inset 0 0 0 2px #35C97A!important;color:#DFFBEA!important}",
    T + " .v1-o.ko," + T + " .v3-op.ko{background:#40141F!important;box-shadow:inset 0 0 0 2px var(--tx-ro)!important;color:#FFD9DF!important}",
    T + " .v1-foot{font:700 .95rem/1.2 var(--tx-fc)!important;letter-spacing:.03em;color:var(--tx-t2)!important;min-height:22px}",
    T + " .v3-comod{order:9;justify-content:center}",
    /* modos propios: la escena arriba, la pregunta pegada abajo */
    T + " .v3{min-height:100dvh!important;padding-bottom:0!important}",
    T + " .v3-cuerpo{flex:1;display:flex!important;flex-direction:column;padding:14px 14px calc(18px + env(safe-area-inset-bottom,0px))!important}",
    T + " .v3-cuerpo > .v3-preg," + T + " .v3-cuerpo > .v3-tablero{margin-top:auto}",
    T + " .v3-preg{background:var(--tx-n1)!important;border-radius:18px!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important}",
    T + " .v3-preg small{font:800 .74rem/1 var(--tx-fc)!important;letter-spacing:.12em;color:var(--tx-oro)!important}",
    T + " .v3-q{font:800 1.6rem/1.2 var(--f-tit)!important}",
    T + " .v3-touche-t{font:800 italic 1.6rem/1 var(--tx-fc)!important;letter-spacing:.06em!important;text-transform:uppercase}",
    T + " .v3-turno{font:800 italic 1.3rem/1 var(--tx-fc)!important;text-transform:uppercase;letter-spacing:.03em}",
    T + " .v3-carta-r{background:linear-gradient(150deg,#1A2238,#111729)!important;box-shadow:inset 0 0 0 1.5px var(--tx-ln),0 3px 0 rgba(0,0,0,.4)!important}",
    T + " .v3-carta-r img{width:42%!important;height:42%!important;opacity:.55!important;filter:grayscale(1) brightness(1.4)}",
    T + " .v3-carta.hallada[data-de=me] .v3-carta-d{box-shadow:inset 0 0 0 3px var(--tx-az)!important}" + T + " .v3-carta.hallada[data-de=op] .v3-carta-d{box-shadow:inset 0 0 0 3px var(--tx-ro)!important}",
    T + " .v3-ficha{border-radius:10px!important;font-family:var(--f-tit)!important}",
    T + " .v3-texto{font:700 1.3rem/1.5 var(--f-tx)!important}",
    /* reacciones: botón bajo el marcador */
    T + " .v3-rx{position:fixed!important;top:72px!important;bottom:auto!important;left:auto!important;right:10px!important;transform:none!important;flex-direction:row-reverse!important;z-index:7!important;padding:4px!important;gap:4px!important;background:rgba(9,13,25,.9)!important;border-radius:99px!important;box-shadow:0 8px 24px rgba(0,0,0,.45),inset 0 0 0 1px var(--tx-ln)!important}",
    T + " .v3-rx[data-abierto='0'] .v3-rx-b{display:none!important}",
    T + " .tx-rx-t{all:unset;cursor:pointer;width:36px;height:36px;display:grid;place-items:center;border-radius:50%}",
    T + " .tx-rx-t img{width:30px;height:30px;object-fit:contain}" + T + " .v3-rx[data-abierto='1'] .tx-rx-t{background:rgba(255,255,255,.1)}",
    T + " .v3-rx-b{width:38px!important;height:38px!important}" + T + " .v3-rx-b img{width:34px!important;height:34px!important}",
    T + " .v3-rxf{top:76px!important;width:84px!important;height:84px!important}",

    /* ---------- final: franja de resultado ---------- */
    T + " .v1-end{gap:14px!important}",
    T + " .v1-ban{display:grid!important;justify-items:center;gap:2px;width:calc(100% + 28px);margin:0 -14px!important;padding:14px 0 12px!important;border-radius:0!important;transform:skewY(-4deg);animation:txFranja .5s cubic-bezier(.2,.9,.3,1.2) both!important;box-shadow:0 14px 30px -12px rgba(0,0,0,.6)!important}",
    T + " .v1-ban > *{transform:skewY(4deg)}",
    T + " .v1-ban b{font:800 italic 3.4rem/.95 var(--tx-fc);text-transform:uppercase;letter-spacing:.01em}",
    T + " .v1-ban small{font:700 .8rem/1 var(--tx-fc);letter-spacing:.16em;text-transform:uppercase;opacity:.85}",
    T + " .v1-ban.win{background:linear-gradient(100deg,#B07C00,#FFC83D 50%,#B07C00)!important;color:#141826!important}",
    T + " .v1-ban.lose{background:linear-gradient(100deg,#1A2238,#2A3352)!important;color:#fff!important;box-shadow:inset 0 -4px 0 var(--tx-ro),0 14px 30px -12px rgba(0,0,0,.6)!important}",
    T + " .v1-ban.draw{background:linear-gradient(100deg,#16307E,#2A3352 50%,#7E1630)!important;color:#fff!important}",
    T + " .v2-podio .v1-p b{font:800 1rem/1 var(--tx-fc)!important;letter-spacing:.06em;text-transform:uppercase}",
    T + " .v2-podio .v1-sc{font:800 italic 2.4rem/1 var(--tx-fc)!important}",
    T + " .v2-podio .pz-vs{background:transparent!important;box-shadow:none!important;color:var(--tx-oro)!important;font:800 italic 1.8rem/1 var(--tx-fc)!important;animation:none!important;transform:skewX(-8deg)}",
    T + " .v1-stats div{background:var(--tx-n1)!important;border:0!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important;border-radius:12px!important}",
    T + " .v1-stats b{font:800 italic 1.9rem/1 var(--tx-fc)!important;color:#fff!important}" + T + " .v1-stats .xp b{color:#8CF0B6!important}",
    T + " .v1-stats span{font:700 .66rem/1.2 var(--tx-fc)!important;letter-spacing:.12em;text-transform:uppercase;color:var(--tx-t2)!important}",
    T + " .v1-trd{font:800 1rem/1.2 var(--tx-fc)!important;letter-spacing:.04em;border-radius:10px!important}",
    T + " .v1-end .v1-row .pz-btn{min-height:56px!important;font:800 italic 1.15rem/1 var(--tx-fc)!important}",
    T + " .v3-fin .pz-pill{font:800 .85rem/1 var(--tx-fc)!important;letter-spacing:.06em;text-transform:uppercase;background:var(--tx-n1)!important;color:#fff!important;box-shadow:inset 0 0 0 1px var(--tx-ln)!important}",
    T + " .v3-fin .v3-ico{width:16px;height:16px;margin-right:4px;color:var(--tx-oro)}",
    T + " .v3-serie{border-radius:12px!important;background:var(--tx-n1)!important}" + T + " .v3-serie em{font:800 italic 2rem/1 var(--tx-fc)!important}",
    T + " .v1-note{color:var(--tx-t2)!important}",

    "@keyframes txEntra{from{transform:translateX(-40%);opacity:0}to{transform:none;opacity:1}}",
    "@keyframes txEntraB{from{transform:translateX(40%);opacity:0}to{transform:none;opacity:1}}",
    "@keyframes txFranja{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}",
    "@media (min-width:760px){" + T + " .v1-hero.v2-hero{margin:0 0 6px!important;border-radius:18px!important;overflow:hidden!important}" + T + " .v1-intro{max-width:none!important}" + T + " .v1-ban{width:100%;margin:0!important}" + T + " .v1-top{max-width:760px;margin:0 auto!important}" + T + " .v1-b.v1-q{max-width:720px}" + T + " .v3-rx{right:calc(50% - 372px)!important}}",
    "@media (prefers-reduced-motion:reduce){" + T + " .tx-mitad img," + T + " .v1-ban{animation:none!important}}"
  ];
  var st = D.createElement("style"); st.id = "plx120";
  st.textContent = "@font-face{font-family:'Barlow Condensed';font-style:normal;font-weight:700;font-display:swap;src:url(fonts/barlowc-700.woff2) format('woff2')}" +
    "@font-face{font-family:'Barlow Condensed';font-style:normal;font-weight:800;font-display:swap;src:url(fonts/barlowc-800.woff2) format('woff2')}" +
    "@font-face{font-family:'Barlow Condensed';font-style:italic;font-weight:800;font-display:swap;src:url(fonts/barlowc-800i.woff2) format('woff2')}" +
    "\n@layer pz{" + reglas.join("\n") + "}";
  D.head.appendChild(st);
  window.PLX_1V1_TX = { FOTOS: FOTOS };
})();
