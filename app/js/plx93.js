/* PLEX PLAY 3.15.0 — Práctica en una sola página
   «Practicar» y «Explorar» eran dos pestañas con dos lenguajes (filas a un lado, baldosas al otro) y cosas repetidas
   (Lecciones, que ya es Inicio). Jhon pidió que encajara con el resto. Ahora es una página, sin pestañas, en el mismo
   vidrio que Inicio y la Tienda:
     1. Para ti hoy      lo que tu ruta recomienda
     2. Habilidades      una rejilla pareja: hablar, oír, leer, escribir, vocabulario, conversación
     3. Repasa           lo que ya viste          |  4. Ponte a prueba   exámenes y retos de nivel
     5. Tus profesores
   No se crea ni se quita ninguna actividad: se mueven los mismos botones que arma plx79 (siguen reenviando el toque
   al original), así que cada una abre lo de siempre. */
(function(){
  "use strict";
  if (typeof render !== "function") return;
  var HAB = [/pronunciaci/i, /dictado/i, /sonidos/i, /expresi[oó]n oral/i, /conversa/i, /lecturas/i, /vocabulario/i, /mis palabras/i, /acentos/i, /taller/i];
  var REP = [/repaso del d/i, /mis errores/i, /gu[ií]a r[aá]pida/i, /diario/i];
  var PRU = [/diagn[oó]stico/i, /simulacro/i, /examen blanc express/i, /examen blanc c1/i, /contrarreloj/i];
  var nombre = function(b){ var t = b.querySelector(".jx-rt b") || b.querySelector("b"); return t ? t.textContent.trim() : ""; };
  var orden = function(L, R){
    var o = []; R.forEach(function(re){ L.forEach(function(b){ if (o.indexOf(b) < 0 && re.test(nombre(b))) o.push(b); }); });
    return o;
  };
  var arma = function(){
    if (typeof view === "undefined" || view !== "retos") return;
    var jx = document.querySelector("#view .jx"); if (!jx || jx.querySelector(":scope > .pq")) return;
    var todos = [].slice.call(jx.querySelectorAll('.jx-pan:not([data-p="juegos"]) .jx-row, .jx-pan:not([data-p="juegos"]) .jx-tile'));
    if (!todos.length) return;
    var hab = orden(todos, HAB), rep = orden(todos, REP), pru = orden(todos, PRU);
    todos.forEach(function(b){ if (hab.indexOf(b) < 0 && rep.indexOf(b) < 0 && pru.indexOf(b) < 0) hab.push(b); });   /* lo que llegue nuevo no se pierde */
    var pq = document.createElement("div"); pq.className = "pq";
    var sec = function(cls, t, sub){ var s = document.createElement("section"); s.className = "pq-s " + cls; s.innerHTML = '<header><h2>' + t + "</h2>" + (sub ? "<p>" + sub + "</p>" : "") + '</header><div class="pq-c"></div>'; return s; };
    var paras = jx.querySelector(".jx-paras");
    if (paras && paras.children.length) { var s0 = sec("pq-hoy", "Para ti hoy", "Según tu ruta"); s0.querySelector(".pq-c").appendChild(paras); pq.appendChild(s0); }
    var s1 = sec("pq-hab", "Habilidades", "Hablar, oír, leer y escribir"); hab.forEach(function(b){ s1.querySelector(".pq-c").appendChild(b); }); pq.appendChild(s1);
    var dos = document.createElement("div"); dos.className = "pq-dos";
    var s2 = sec("pq-lista gl g2", "Repasa", "Para que no se olvide"); rep.forEach(function(b){ s2.querySelector(".pq-c").appendChild(b); });
    var s3 = sec("pq-lista gl g2", "Ponte a prueba", "Mide tu nivel"); pru.forEach(function(b){ s3.querySelector(".pq-c").appendChild(b); });
    if (rep.length) dos.appendChild(s2); if (pru.length) dos.appendChild(s3); if (dos.children.length) pq.appendChild(dos);
    var profs = jx.querySelector(".jx-profs");
    if (profs) { var s4 = sec("pq-profs", "Tus profesores", "Toca uno para conocerlo"); s4.querySelector(".pq-c").appendChild(profs); pq.appendChild(s4); }
    jx.insertBefore(pq, jx.firstChild); jx.classList.add("pq-on");
  };
  var r0 = render;
  render = function(){ var r = r0.apply(this, arguments); try { arma(); } catch (e) {} return r; };
  var vista = document.getElementById("view"), pend = false;
  if (vista) new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { arma(); } catch (e) {} }); }).observe(vista, { childList: true, subtree: true });

  var css = [
    "#view .jx.pq-on > .jx-seg,#view .jx.pq-on > .jx-pan{display:none!important}",
    ".pq{display:grid;gap:22px;max-width:1040px}.pq-s > header{display:flex;align-items:baseline;gap:10px;margin:0 2px 10px}.pq .pq-s h2{margin:0;font:700 1.08rem/1.2 Poppins,system-ui,sans-serif;letter-spacing:-.01em;color:var(--gl-ink)}.pq .pq-s header p{margin:0;font:400 .82rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-mut)}",
    /* todos los botones (filas y baldosas de plx79) con la misma anatomía: icono, nombre, una línea */
    ".pq .pq-c > button{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:12px;row-gap:1px;align-items:center;text-align:left;transition:transform .18s var(--v4-spring,ease),background .18s}.pq .pq-c > button .jx-rt{display:contents}.pq .pq-c > button > i{display:none}",
    ".pq .pq-c > button .jx-ic{grid-row:1 / span 2;width:42px;height:42px;border-radius:13px;display:grid;place-items:center;flex:none;background:color-mix(in srgb,var(--c,#2F6BFF) 16%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c,#2F6BFF) 26%,transparent)}.pq .pq-c > button .jx-ic img{width:26px;height:26px;display:block}",
    ".pq .pq-c > button b{grid-column:2;align-self:end;font:600 .93rem/1.2 var(--ev-f,Barlow,system-ui,sans-serif);color:var(--gl-ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pq .pq-c > button small{grid-column:2;align-self:start;font:400 .78rem/1.3 var(--ev-f,Barlow,system-ui,sans-serif);color:color-mix(in srgb,var(--gl-ink) 74%,transparent)!important;opacity:1!important;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}",
    ".pq .pq-c > button b{color:var(--gl-ink)!important;opacity:1!important}.pq .pq-s header p{color:color-mix(in srgb,var(--gl-ink) 70%,transparent)!important}.pq-hoy .jx-para,.pq-hoy .jx-para *{color:#fff!important;opacity:1!important}.pq-hoy .jx-para small{color:#FFE27A!important;letter-spacing:.12em}.pq-hoy .jx-para span{color:rgba(255,255,255,.92)!important}",
    ".pq .pq-c > button:active{transform:scale(.98)}.pq .pq-c > button:focus-visible{outline:2px solid #FFD200;outline-offset:2px;border-radius:14px}.pq .pq-c > button.off{opacity:1!important}.pq .pq-c > button.off .jx-ic{filter:saturate(.35) opacity(.7)}.pq .pq-c > button.off b{color:color-mix(in srgb,var(--gl-ink) 72%,transparent)!important}",
    /* habilidades: rejilla de fichas de vidrio */
    ".pq-hab .pq-c{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:760px){.pq-hab .pq-c{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1180px){.pq-hab .pq-c{grid-template-columns:repeat(5,minmax(0,1fr))}}",
    ".pq-hab .pq-c > button{grid-template-columns:minmax(0,1fr);row-gap:3px;align-content:start;padding:13px 13px 14px;min-height:118px;border-radius:18px;background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b));box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd),0 18px 32px -26px var(--gl-sh)}.pq-hab .pq-c > button:hover{transform:translateY(-2px)}",
    ".pq-hab .pq-c > button .jx-ic{grid-row:auto;margin-bottom:8px}.pq-hab .pq-c > button b,.pq-hab .pq-c > button small{grid-column:1}.pq-hab .pq-c > button b{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.pq-hab .pq-c > button small{-webkit-line-clamp:2}",
    /* listas: un panel de vidrio, filas separadas por un hilo */
    ".pq-dos{display:grid;gap:14px}@media (min-width:860px){.pq-dos{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}}.pq-lista{padding:16px 18px 8px;border-radius:22px}.pq-lista > header{margin-bottom:4px}",
    ".pq-lista .pq-c > button{width:100%;padding:11px 0}.pq-lista .pq-c > button + button{border-top:1px solid var(--gl-hair)}.pq-lista .pq-c > button:hover b{color:var(--px-acc,#2F6BFF)}",
    /* para ti hoy: las dos recomendaciones, lado a lado */
    ".pq-hoy .jx-paras{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;overflow:visible!important;padding:0!important;margin:0!important}@media (max-width:520px){.pq-hoy .jx-paras{grid-auto-flow:column;grid-auto-columns:78%;grid-template-columns:none;overflow-x:auto!important;scroll-snap-type:x mandatory;margin:0 -16px!important;padding:0 16px 4px!important}.pq-hoy .jx-paras > *{scroll-snap-align:start}}",
    ".pq-hoy .jx-para{min-width:0!important;width:auto!important;border-radius:18px!important;background:linear-gradient(135deg,#3B78FF 0,#2F6BFF 45%,#36255C 130%)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.3),0 18px 32px -20px rgba(47,107,255,.9)!important}",
    ".pq-profs .jx-profs{margin:0!important}@media (min-width:760px){.pq-profs .jx-profs{display:grid!important;grid-template-columns:repeat(4,minmax(0,160px))!important;gap:12px!important}}",
    ".pq{margin-top:14px}.pq .pq-lista .pq-c > button.jx-row,.pq .pq-lista .pq-c > button.jx-tile{background:none!important;box-shadow:none!important;border:0!important;border-radius:0!important;min-height:0!important}.pq .pq-lista .pq-c > button + button{border-top:1px solid var(--gl-hair)!important}",
    ".pq .pq-hab .pq-c > button.jx-row,.pq .pq-hab .pq-c > button.jx-tile{border:0!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx93"; st.textContent = css; document.head.appendChild(st);
  try { arma(); } catch (e) {}
})();
