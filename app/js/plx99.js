/* PLEX PLAY 3.23.0 — Rediseño según las maquetas aprobadas (distribución tipo Coddy, menú tipo Duolingo, vidrio líquido)
   - Escritorio: el riel pasa a ser un panel de vidrio a todo lo alto pegado al borde, con etiquetas en mayúsculas,
     iconos grandes y la sección activa en píldora con borde azul; títulos de grupo APRENDER / COMUNIDAD / PROGRESO.
   - Fondo marino con halos azul, morado y oro; tarjetas de vidrio con reflejo; botones con volumen.
   Solo materiales y distribución: no cambia qué hace cada botón. */
(function(){
  "use strict";
  var GR = { parcours: "Aprender", duelos: "Comunidad", clasif: "Progreso", ranking: "Progreso", misiones: "Progreso" };
  /* títulos de grupo encima del primer botón de cada grupo */
  var titulos = function(){
    var nav = document.querySelector("#px-rail .rl-nav"); if (!nav || nav.dataset.t99) return;
    nav.dataset.t99 = "1"; var vistos = {};
    nav.querySelectorAll(".rl-b").forEach(function(b){
      var k = b.getAttribute("data-view") || b.getAttribute("data-rl"), g = GR[k];
      if (g && !vistos[g]) { vistos[g] = 1; var h = document.createElement("h6"); h.className = "rl-h"; h.textContent = g; nav.insertBefore(h, b); }
    });
  };
  /* iconos de color (los de img/ic, como en la maqueta) en lugar de los de línea */
  var IC = { parcours: "torre-eiffel", retos: "mando", duelos: "globo", clasif: "trofeo", ranking: "trofeo", tienda: "regalo", perfil: "boina", misiones: "bandera" };
  var iconos = function(){
    document.querySelectorAll("#px-rail .rl-b:not([data-i99])").forEach(function(b){
      var k = IC[b.getAttribute("data-view") || b.getAttribute("data-rl")]; b.setAttribute("data-i99", "1"); if (!k) return;
      var sv = b.querySelector("svg"); if (sv) sv.outerHTML = '<img class="rl-ic" src="img/ic/' + k + '.webp" alt="" width="34" height="34">';
    });
  };
  new MutationObserver(function(){ titulos(); iconos(); }).observe(document.body, { childList: true, subtree: true });

  var css = document.createElement("style"); css.id = "plx99";
  css.textContent = [
    "@media (min-width:1024px){",
    "html.rl-on.mk body{background:radial-gradient(900px 600px at 15% 10%,rgba(47,107,255,.33),transparent 60%),radial-gradient(800px 600px at 85% 90%,rgba(124,58,237,.25),transparent 60%),radial-gradient(600px 500px at 55% 45%,rgba(255,210,0,.08),transparent 60%),linear-gradient(160deg,#071434,#0B1F5C 55%,#081232) fixed!important;padding-left:274px!important}",
    "#px-rail{left:0!important;top:0!important;bottom:0!important;height:auto!important;width:258px!important;padding:26px 16px 18px!important;border-radius:0 26px 26px 0!important;display:flex!important;flex-direction:column!important;background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.04) 45%,rgba(120,160,255,.08))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 0 0 1px rgba(255,255,255,.14),0 30px 60px -20px rgba(0,8,40,.7),0 0 40px -10px rgba(47,107,255,.35)!important;-webkit-backdrop-filter:blur(24px) saturate(160%)!important;backdrop-filter:blur(24px) saturate(160%)!important;color:#EAF0FF}",
    "#px-rail .rl-logo{font-size:24px!important;margin:0 4px 14px!important;color:#fff}#px-rail .rl-logo img{width:40px;height:40px;box-shadow:0 0 18px rgba(255,210,0,.4)}#px-rail .rl-logo i{color:#FFD200;font-style:normal}",
    "#px-rail .rl-h{font:700 11px/1 Barlow,Poppins,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#7F93C9;margin:16px 12px 6px}",
    "#px-rail .rl-nav{gap:6px!important}",
    "#px-rail .rl-b{height:50px!important;padding:0 14px!important;border-radius:16px!important;border:2px solid transparent;font:700 15px/1 Barlow,Poppins,sans-serif!important;letter-spacing:.06em;text-transform:uppercase;color:#C9D6FF!important}",
    "#px-rail .rl-b svg{width:26px!important;height:26px!important}",
    "#px-rail .rl-b[aria-current=page]{color:#fff!important;border-color:#6E97FF;background:linear-gradient(135deg,rgba(47,107,255,.45),rgba(47,107,255,.12))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 0 22px rgba(47,107,255,.6)!important}",
    "#px-rail .rl-b[aria-current=page]::before{display:none}",
    "#px-rail .rl-yo{border-top:1px solid rgba(255,255,255,.14)!important;padding-top:14px!important}",
    "html.rl-on .gl{background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.04) 45%,rgba(120,160,255,.08))!important;border-radius:22px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 0 0 1px rgba(255,255,255,.14),0 30px 60px -20px rgba(0,8,40,.7),0 0 40px -10px rgba(47,107,255,.3)!important}",
    "#px-rail .rl-ic{width:34px;height:34px;flex:none;filter:drop-shadow(0 3px 6px rgba(0,0,0,.35))}",
    /* columna derecha: tarjetas de vidrio separadas, no un solo panel */
    "html.rl-on.mk:root body #view .ghome aside.gside.gside{background:none!important;box-shadow:none!important;border:0!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;padding:0!important;display:flex!important;flex-direction:column;gap:16px}",
    "html.rl-on.mk:root body #view .ghome aside.gside.gside > .gcard.gcard.gcard.gcard{display:block!important;padding:18px!important;border-radius:22px!important;background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.04) 45%,rgba(120,160,255,.08))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 0 0 1px rgba(255,255,255,.14),0 24px 50px -20px rgba(0,8,40,.7),0 0 30px -10px rgba(47,107,255,.3)!important;-webkit-backdrop-filter:blur(22px) saturate(150%);backdrop-filter:blur(22px) saturate(150%)}",
    "html.rl-on.mk:root body #view .ghome aside.gside.gside > .gcard + .gcard{border-top:0!important;margin-top:0!important}",
    /* nodos del mapa: piezas 3D redondeadas en azul y oro con conexiones luminosas */
    "html.rl-on .mp-hex .mp-hx{clip-path:none!important;border-radius:26px!important;background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.55),transparent 40%),linear-gradient(160deg,#4F86FF,#1E4FD6)!important;box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -6px 0 #0B2D74,0 9px 0 #0A2463,0 18px 30px rgba(0,0,0,.5),0 0 30px rgba(47,107,255,.6)!important}",
    "html.rl-on .mp-n.sig .mp-hx,html.rl-on .mp-n.meta .mp-hx{background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.6),transparent 40%),linear-gradient(160deg,#FFE15A,#F0B400)!important;box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -6px 0 #B38600,0 9px 0 #8F6B00,0 18px 30px rgba(0,0,0,.5),0 0 34px rgba(255,210,0,.6)!important}",
    "html.rl-on .mp-via path{stroke:#BFD2FF!important;stroke-width:4px!important;filter:drop-shadow(0 0 6px #6E97FF)}",
    "}",
    "@media (prefers-reduced-motion:reduce){#px-rail .rl-b{transition:none}}"
  ].join("\n");
  document.head.appendChild(css);
})();
