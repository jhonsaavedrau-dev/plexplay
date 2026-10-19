/* PLEX PLAY 3.14.0 — Los juegos salen dentro de la lección; ranking sin filtros
   Pedido de Jhon:
   - Que no haya una sección de juegos: que vayan saliendo entre los ejercicios. Cada lección ya tenía su mini-juego y
     su reto (plx55), pero como tarjetas opcionales al final. Ahora se abren solos a mitad de camino: el mini-juego
     hacia el 40 % de los ejercicios y el reto hacia el 80 %. Al cerrarlos, la lección sigue donde iba. Si ya se
     jugaron en esa lección no vuelven a interrumpir (siguen en «Tu aventura», al final, para repetirlos).
     La pestaña «Juegos» de Práctica se oculta; el Arcade no se borra y los duelos siguen en «1 vs 1».
   - Ranking más simple, como una liga: una sola tabla (la de la semana), sin ámbitos ni periodos que elegir. */
(function(){
  "use strict";
  if (typeof render !== "function") return;
  var G = window.PLXG || null, AV = window.PLX_AV || null;

  /* ====================== juegos entre los ejercicios ====================== */
  var ses = { id: null, j: false, r: false }, espera = false;
  var capa = function(){ return document.documentElement.classList.contains("plxg-on") || !!document.querySelector(".gmodal, .rz-cel"); };
  var lanza = function(l, jid, alc, cual){
    if (!G || !G.arcade || !G.juegos || !G.juegos[jid]) return;
    espera = true;
    var j = G.juegos[jid], pl = document.getElementById("player"), esc = function(t){ return String(t || "").replace(/[<>&"]/g, ""); };
    /* 4.53 (pedido de Jhon): «algo más dinámico, pero que se entienda que salió un juego». Pantalla completa con el color
       del juego: destello, rayos que giran, el sello «¡JUEGO!» que cae con golpe, el mando que rebota, chispas, Manzana
       que se asoma y una barra que se llena hasta que arranca. Dura 1,9 s (antes 0,95 s y se leía a medias). */
    var av = document.createElement("div"); av.className = "jl-aviso"; av.setAttribute("role", "status");
    av.style.setProperty("--jc", j.color || "#FFD200");
    var chispas = ""; for (var k = 0; k < 12; k++) chispas += '<i style="--a:' + (k * 30) + 'deg;--d:' + (90 + (k % 3) * 30) + 'px"></i>';
    av.innerHTML = '<div class="jl-rayos"></div><div class="jl-flash"></div><div class="jl-chispas">' + chispas + "</div>" +
      '<div class="jl-caja"><span class="jl-sello">' + (cual === "j" ? "¡Mini-juego!" : "¡Reto!") + "</span>" +
      '<span class="jl-mando"><img src="img/ic2/mando.webp" alt=""></span>' +
      "<b>" + esc(j.nombre) + "</b>" + (j.verbo ? "<small>" + esc(j.verbo) + "</small>" : "") +
      '<span class="jl-barra"><i></i></span><em>Pausa en la lección · empieza ya</em></div>' +
      '<img class="jl-mz" src="img/m2d/celebrar.webp" alt="">';
    document.body.appendChild(av);
    try { if (typeof SFX !== "undefined" && SFX.open) SFX.open(); } catch (e) {}
    try { if (navigator.vibrate) navigator.vibrate([30, 40, 60]); } catch (e) {}
    setTimeout(function(){ av.classList.add("jl-sale"); }, 1650);
    setTimeout(function(){
      av.remove(); espera = false;
      /* solo si la lección sigue abierta en la misma pregunta y no hay nada encima */
      try { if (typeof P === "undefined" || !P || !P.lesson || P.lesson.id !== l.id || capa()) return; G.arcade(alc || G.alc.leccion(l), jid); } catch (e) {}
    }, 1900);
  };
  window.PLX_JL = { lanza: lanza };   /* para probar el aviso desde la consola */
  var mira = function(){
    try {
      if (espera || !G || !AV || typeof P === "undefined" || !P || P.mode !== "lesson" || !P.lesson || !P.steps) { if (typeof P === "undefined" || !P) ses.id = null; return; }
      var l = P.lesson; if (ses.id !== l.id) ses = { id: l.id, j: false, r: false };
      var st = P.steps[P.i]; if (!st || st.kind === "theory" || P.phase === "feedback" || P.phase === "end" || capa()) return;
      var n = P.steps.length, ej = P.steps.filter(function(s){ return s.kind !== "theory"; }).length; if (ej < 6) return;   /* lecciones muy cortas: sin interrupciones */
      var hechos = P.steps.slice(0, P.i).filter(function(s){ return s.kind !== "theory"; }).length, p = hechos / ej;
      var e = AV.elige(l); if (!e) return;
      var a = (typeof S !== "undefined" && S.adv && S.adv[l.id]) || {};
      if (!ses.j && p >= .4) { ses.j = true; if (e.j && !a.j) return lanza(l, e.j, e.jAlc, "j"); }
      if (!ses.r && p >= .8) { ses.r = true; if (e.r && !a.r) return lanza(l, e.r, e.rAlc, "r"); }
    } catch (x) {}
  };
  var pl = document.getElementById("player"), pd = false;
  if (pl) new MutationObserver(function(){ if (pd) return; pd = true; requestAnimationFrame(function(){ pd = false; mira(); }); }).observe(pl, { childList: true, subtree: true });

  /* ====================== Práctica sin la pestaña Juegos ====================== */
  var practica = function(){
    if (typeof view === "undefined" || view !== "retos") return;
    var b = document.querySelector('#view .jx [data-jx-tab="juegos"][aria-selected="true"]'), p = document.querySelector('#view .jx [data-jx-tab="practica"]');
    if (b && p) p.click();
  };
  var r0 = render;
  render = function(){ var r = r0.apply(this, arguments); try { practica(); } catch (e) {} return r; };
  var vista = document.getElementById("view"), pv = false;
  if (vista) new MutationObserver(function(){ if (pv) return; pv = true; requestAnimationFrame(function(){ pv = false; try { practica(); } catch (e) {} }); }).observe(vista, { childList: true, subtree: true });

  var css = [
    ".jl-aviso{position:fixed;inset:0;z-index:9000;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 50% 42%,color-mix(in srgb,var(--jc) 55%,#1E3A8A) 0,#0B1A4A 70%);animation:jlFondo .25s ease-out both}",
    ".jl-rayos{position:absolute;left:50%;top:42%;width:240vmax;height:240vmax;margin:-120vmax 0 0 -120vmax;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,.13) 0 9deg,transparent 9deg 22deg);animation:jlGira 6s linear infinite;pointer-events:none}",
    ".jl-flash{position:absolute;inset:0;background:#fff;opacity:0;animation:jlFlash .45s ease-out .28s both;pointer-events:none}",
    ".jl-caja{position:relative;display:grid;justify-items:center;gap:8px;padding:0 24px;text-align:center;color:#fff;margin-top:-6vh}",
    ".jl-sello{font:800 clamp(2.4rem,11vw,3.6rem)/1 Poppins,system-ui,sans-serif;letter-spacing:-.02em;text-transform:uppercase;color:#FFD200;-webkit-text-stroke:2px #0B1A4A;paint-order:stroke fill;text-shadow:0 6px 0 #0B1A4A,0 14px 30px rgba(0,0,0,.35);transform:rotate(-6deg);animation:jlSello .5s cubic-bezier(.2,1.6,.4,1) both}",
    ".jl-mando{width:108px;height:108px;border-radius:32px;display:grid;place-items:center;background:var(--jc);box-shadow:inset 0 3px 0 rgba(255,255,255,.45),inset 0 -6px 0 rgba(0,0,0,.18),0 18px 34px -12px rgba(0,0,0,.55);animation:jlMando .55s cubic-bezier(.2,1.5,.4,1) .22s both,jlBota .7s ease-in-out .8s infinite alternate}",
    ".jl-mando img{width:72px;height:72px;object-fit:contain}",
    ".jl-caja b{font:800 1.55rem/1.1 Poppins,system-ui,sans-serif;animation:jlSube .4s ease-out .4s both}",
    ".jl-caja small{font:600 .95rem/1.3 'Plus Jakarta Sans',Inter,system-ui,sans-serif;color:rgba(255,255,255,.85);animation:jlSube .4s ease-out .5s both}",
    ".jl-barra{width:min(220px,60vw);height:8px;border-radius:99px;background:rgba(255,255,255,.2);overflow:hidden;margin-top:6px;animation:jlSube .3s ease-out .55s both}",
    ".jl-barra i{display:block;height:100%;width:100%;border-radius:inherit;background:#FFD200;transform-origin:left;animation:jlCarga 1.1s linear .6s both}",
    ".jl-caja em{font:600 .72rem/1.2 Barlow,system-ui,sans-serif;font-style:normal;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.7);animation:jlSube .3s ease-out .6s both}",
    ".jl-chispas{position:absolute;left:50%;top:42%;width:0;height:0;pointer-events:none}",
    ".jl-chispas i{position:absolute;width:10px;height:10px;margin:-5px;border-radius:3px;background:#FFD200;transform:rotate(var(--a)) translateY(0) scale(0);animation:jlChispa .7s ease-out .3s both}",
    ".jl-chispas i:nth-child(3n){background:#fff}.jl-chispas i:nth-child(3n+1){background:var(--jc)}",
    ".jl-mz{position:absolute;right:-6px;bottom:-10px;width:min(150px,38vw);animation:jlAsoma .55s cubic-bezier(.2,1.4,.4,1) .45s both;pointer-events:none}",
    ".jl-aviso.jl-sale{animation:jlSale .25s ease-in both}",
    "@keyframes jlFondo{from{opacity:0}}@keyframes jlGira{to{transform:rotate(360deg)}}@keyframes jlFlash{0%{opacity:.75}100%{opacity:0}}",
    "@keyframes jlSello{0%{opacity:0;transform:rotate(-6deg) scale(3)}60%{opacity:1;transform:rotate(-6deg) scale(.92)}80%{transform:rotate(-4deg) scale(1.04) translateX(-3px)}100%{transform:rotate(-6deg) scale(1)}}",
    "@keyframes jlMando{from{opacity:0;transform:scale(.2) rotate(-25deg)}}@keyframes jlBota{to{transform:translateY(-8px) rotate(4deg)}}",
    "@keyframes jlSube{from{opacity:0;transform:translateY(12px)}}@keyframes jlCarga{from{transform:scaleX(0)}to{transform:scaleX(1)}}",
    "@keyframes jlChispa{0%{transform:rotate(var(--a)) translateY(0) scale(0)}30%{transform:rotate(var(--a)) translateY(calc(var(--d) * -.5)) scale(1.2)}100%{opacity:0;transform:rotate(var(--a)) translateY(calc(var(--d) * -1.6)) scale(.4)}}",
    "@keyframes jlAsoma{from{transform:translate(40px,120px) rotate(18deg)}}@keyframes jlSale{to{opacity:0;transform:scale(1.08)}}",
    "@media (prefers-reduced-motion:reduce){.jl-aviso,.jl-aviso *{animation:none!important}}",
    /* Práctica: dos secciones (Practicar y Explorar); la pastilla móvil era para tres */
    '#view .jx [data-jx-tab="juegos"],#view .jx .jx-pan[data-p="juegos"],#view .jx .jx-pill{display:none!important}',
    "#view .jx .jx-seg [data-jx-tab][aria-selected=true]{background:linear-gradient(180deg,var(--gl-3a,#fff),var(--gl-3b,#f4f6ff));box-shadow:inset 0 1px 0 var(--gl-hl,#fff),0 4px 10px -6px var(--gl-sh,rgba(0,0,0,.3));border-radius:12px}",
    /* ---------- ranking: una sola tabla, la de la semana ---------- */
    "#view .rkv .rkx-tabs,#view .rkv .rkx-per,#view .rkv .rkv-liga,#view .lb-card .rkw-t,#view .lb-card .rkw-s{display:none!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx92"; st.textContent = css; document.head.appendChild(st);
})();
