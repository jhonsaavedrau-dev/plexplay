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
    var j = G.juegos[jid], pl = document.getElementById("player");
    var av = document.createElement("div"); av.className = "jl-aviso"; av.setAttribute("role", "status");
    av.innerHTML = "<small>" + (cual === "j" ? "Mini-juego" : "Reto") + " de la lección</small><b>" + String(j.nombre || "").replace(/[<>&]/g, "") + "</b>";
    (pl || document.body).appendChild(av);
    try { if (typeof SFX !== "undefined" && SFX.open) SFX.open(); } catch (e) {}
    setTimeout(function(){
      av.remove(); espera = false;
      /* solo si la lección sigue abierta en la misma pregunta y no hay nada encima */
      try { if (typeof P === "undefined" || !P || !P.lesson || P.lesson.id !== l.id || capa()) return; G.arcade(alc || G.alc.leccion(l), jid); } catch (e) {}
    }, 950);
  };
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
    ".jl-aviso{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);z-index:40;display:grid;gap:3px;justify-items:center;padding:18px 26px;border-radius:22px;text-align:center;color:#fff;background:linear-gradient(135deg,#3B78FF,#2F6BFF 45%,#36255C 130%);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 30px 60px -24px rgba(11,31,92,.8);animation:jlEntra .35s cubic-bezier(.2,.9,.3,1.3) both}",
    ".jl-aviso small{font:600 .7rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);letter-spacing:.18em;text-transform:uppercase;color:#FFD200}.jl-aviso b{font:700 1.3rem/1.15 Poppins,system-ui,sans-serif}@keyframes jlEntra{from{opacity:0;transform:translate(-50%,-40%) scale(.9)}}",
    "@media (prefers-reduced-motion:reduce){.jl-aviso{animation:none}}",
    /* Práctica: dos secciones (Practicar y Explorar); la pastilla móvil era para tres */
    '#view .jx [data-jx-tab="juegos"],#view .jx .jx-pan[data-p="juegos"],#view .jx .jx-pill{display:none!important}',
    "#view .jx .jx-seg [data-jx-tab][aria-selected=true]{background:linear-gradient(180deg,var(--gl-3a,#fff),var(--gl-3b,#f4f6ff));box-shadow:inset 0 1px 0 var(--gl-hl,#fff),0 4px 10px -6px var(--gl-sh,rgba(0,0,0,.3));border-radius:12px}",
    /* ---------- ranking: una sola tabla, la de la semana ---------- */
    "#view .rkv .rkx-tabs,#view .rkv .rkx-per,#view .rkv .rkv-liga,#view .lb-card .rkw-t,#view .lb-card .rkw-s{display:none!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx92"; st.textContent = css; document.head.appendChild(st);
})();
