/* PLEX PLAY 4.42.0 — Conversa con Manzana, destacada en Práctica
   Jhon pidió darle más visibilidad: era una ficha más entre catorce. Ahora abre la página de Práctica una tarjeta
   propia, la primera que se ve:
     - etiqueta «Conversación con IA», título y una línea de qué hace;
     - una vista previa del chat (Manzana pregunta en francés, la respuesta se escribe sola y llega el «¡Bien escrito!»);
     - Manzana 3D saludando (ranura de plx113; sin WebGL, la imagen pintada);
     - tres datos (situaciones, niveles, corrige) y el botón dorado «Empezar a conversar».
   El botón lleva data-am="tutor", el mismo que ya atiende plx39, así que no hay lógica nueva de navegación.
   La ficha pequeña de Conversa se quita de Habilidades para no repetirla. Solo en la pestaña Práctica (no en Juegos
   ni en Profesores). */
(function(){
  "use strict";
  var D = document, V = D.getElementById("view");
  if (!V) return;

  /* frases de la vista previa: una por situación, se elige al azar al pintar */
  var MUESTRAS = [
    ["Salut ! Tu as passé un bon week-end ?", "Oui, je suis allé au cinéma."],
    ["Bonjour ! Vous voulez boire quoi ?", "Un café au lait, s'il vous plaît."],
    ["Tu étudies quoi à l'université ?", "J'étudie les langues."],
    ["Où est-ce que tu aimerais voyager ?", "J'aimerais visiter Lyon."]
  ];
  var CHAT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16A2.5 2.5 0 0 1 4 13.5z" fill="currentColor"/></svg>';
  var FLECHA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var fino = function(x){ return String(x).replace(/ ([?!:;])/g, " $1"); };
  var esc = function(x){ return String(x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var tarjeta = function(){
    var m = MUESTRAS[Math.floor(Math.random() * MUESTRAS.length)];
    var d = D.createElement("section");
    d.className = "pz-destacada cv-hero";
    d.setAttribute("aria-label", "Conversa con Manzana");
    d.innerHTML =
      '<div class="cv-tx">' +
        '<small class="pz-destacada__k cv-k">' + CHAT + "Conversación con IA</small>" +
        '<h2 class="pz-destacada__t cv-t">Conversa con Manzana</h2>' +
        '<p class="pz-destacada__d cv-d">Escribe en francés como en un chat. Te respondo a tu nivel y te corrijo con una explicación corta.</p>' +
      "</div>" +
      '<div class="cv-mzc" aria-hidden="true"><img class="cv-mz" src="img/mz3/mz-hola.webp" alt="" decoding="async"></div>' +
      '<div class="cv-chat" aria-hidden="true" style="--n:' + m[1].length + '">' +
        '<p class="pz-burbuja pz-burbuja--blanca pz-burbuja--ella cv-b cv-ella" lang="fr">' + esc(fino(m[0])) + "</p>" +
        '<p class="pz-burbuja pz-burbuja--oro cv-b cv-yo" lang="fr"><span>' + esc(fino(m[1])) + "</span></p>" +
        '<p class="cv-ok">✓ ¡Bien escrito!</p>' +
      "</div>" +
      '<ul class="cv-datos"><li class="pz-pill"><b>7</b> situaciones</li><li class="pz-pill"><b>A1–C1</b></li><li class="pz-pill">Te <b>corrige</b></li></ul>' +
      '<button type="button" class="pz-btn pz-btn--oro pz-btn--lg cv-go" data-am="tutor">Empezar a conversar' + FLECHA + "</button>";
    return d;
  };

  var pinta = function(){
    if (typeof view === "undefined" || view !== "retos") return;
    var sub = D.documentElement.getAttribute("data-p5-sub");
    if (sub && sub !== "practica") return;
    var pq = V.querySelector(".jx > .pq"); if (!pq) return;
    /* la ficha pequeña de Conversa en Habilidades se esconde: la tarjeta la reemplaza */
    [].forEach.call(pq.querySelectorAll(".pq-c > button"), function(b){
      if (/Conversa con Manzana/i.test(b.textContent)) b.classList.add("cv-fuera");
    });
    if (pq.querySelector(":scope > .cv-hero")) return;
    pq.insertBefore(tarjeta(), pq.firstChild);
  };
  var pend = false;
  new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { pinta(); } catch (e) {} }); }).observe(V, { childList: true, subtree: true });
  try { pinta(); } catch (e) {}

  /* Manzana 3D en la tarjeta: saluda y, cada tanto, «dice» la pregunta */
  var registra = function(){
    if (!window.PLX_MZ3D || !PLX_MZ3D.ranura) return setTimeout(registra, 800);
    PLX_MZ3D.ranura({ sel: ".cv-hero img.cv-mz", clave: "conversa", lejos: 0.9, mirar: [-0.45, -0.25], gesto: function(){ return "saludar"; } });
  };
  registra();
  setInterval(function(){
    if (D.hidden || !V.querySelector(".cv-hero") || !window.PLX_MZ3D) return;
    PLX_MZ3D.hablar("conversa", true);
    setTimeout(function(){ PLX_MZ3D.hablar("conversa", false); }, 1600);
  }, 7000);

  var st = D.createElement("style"); st.id = "plx114";
  st.textContent = `
  /* la tarjeta es la pieza pz-destacada (kit.js); aquí solo su rejilla y el arte */
  .cv-hero{grid-template-columns:minmax(0,1fr) 112px;grid-template-areas:"tx mz" "chat chat" "datos datos" "go go";gap:12px 10px}
  .cv-hero::before{content:"";position:absolute;inset:0;z-index:-1;opacity:.5;
    background:radial-gradient(circle at 12% 110%,rgba(47,107,255,.55),transparent 45%),radial-gradient(circle at 70% 120%,rgba(255,107,139,.35),transparent 40%)}
  .cv-tx{grid-area:tx;min-width:0;align-self:center}
  .cv-mzc{grid-area:mz;position:relative;align-self:start;height:124px}
  .cv-mzc::before{content:"";position:absolute;left:8%;right:8%;bottom:6px;height:22px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,210,0,.35),transparent)}
  .cv-mzc img,.cv-mzc .mz3{position:relative;display:block;width:112px!important;height:124px!important;object-fit:contain}
  .cv-chat{grid-area:chat;display:grid;gap:6px;padding:12px;border-radius:18px;background:rgba(11,31,92,.42);box-shadow:inset 0 0 0 1px rgba(210,195,246,.18)}
  .cv-ella{justify-self:start}
  .cv-yo{justify-self:end;max-width:100%}
  .cv-yo span{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;max-width:100%;
    animation:cvTeclea calc(var(--n) * 70ms) steps(var(--n)) .8s both}
  .cv-ok{justify-self:end;margin:0;font:700 .78rem/1 Poppins,Inter,system-ui,sans-serif;color:#7BE6A0;animation:cvAparece .3s ease-out both;animation-delay:calc(.8s + var(--n, 30) * 70ms)}
  .cv-datos{grid-area:datos;display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0;list-style:none}
  .cv-go{grid-area:go;white-space:nowrap}
  .pq .pq-c > button.cv-fuera{display:none!important}
  /* la ficha es una pieza pz-card: su display importante vive en la capa pz, que gana a p5; se esconde desde ahí */
  @layer pz { html body #view .pq .pq-c > button.cv-fuera{display:none!important} }
  @media (min-width:760px){
    .cv-hero{grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) 150px;grid-template-areas:"tx chat mz" "datos chat mz" "go chat mz";gap:12px 22px}
    .cv-mzc{align-self:center;height:170px}.cv-mzc img,.cv-mzc .mz3{width:150px!important;height:170px!important}
    .cv-chat{align-self:center}
    .cv-go{justify-self:start}
  }
  @keyframes cvTeclea{from{max-width:0}to{max-width:100%}}
  @keyframes cvAparece{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
  @media (prefers-reduced-motion:reduce){ .cv-yo span,.cv-ok{animation:none} }
  `;
  D.head.appendChild(st);
})();
