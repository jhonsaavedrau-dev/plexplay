/* PLEX PLAY 3.21.0 — Arranque sin parpadeos
   Jhon: «cuando se recarga la página se ven por momentos como las versiones anteriores». Era cierto: el núcleo pinta
   su interfaz original y cada módulo (plx18…plx96) la va cambiando al cargar, así que durante medio segundo se veían
   la barra vieja, el Inicio viejo o las tarjetas de antes.
   Ahora index.html arranca con la clase «plx-arr» en <html> (estilo y script en línea, antes de que exista el cuerpo):
   se ve solo el logo sobre el fondo de la app. Este módulo, que es el último, la quita cuando todo cargó y los
   módulos terminaron de recolocar la primera pantalla. Si algo fallara, index.html la quita solo a los 5 s. */
(function(){
  "use strict";
  var H = document.documentElement;
  var listo = function(){ if (!H.classList.contains("plx-arr")) return; H.classList.add("plx-arr-fin"); H.classList.remove("plx-arr"); setTimeout(function(){ H.classList.remove("plx-arr-fin"); }, 400); };
  var fin = function(){
    /* los módulos reordenan en el cuadro siguiente a cada pintada (MutationObserver + rAF): se les dan dos cuadros */
    var sigue = function(){ requestAnimationFrame(function(){ requestAnimationFrame(function(){ setTimeout(listo, 80); }); }); };
    var f = document.fonts && document.fonts.ready;
    if (f && f.then) { var hecho = false, una = function(){ if (hecho) return; hecho = true; sigue(); }; f.then(una, una); setTimeout(una, 900); } else sigue();
  };
  if (document.readyState === "complete") fin(); else addEventListener("load", fin);
})();
