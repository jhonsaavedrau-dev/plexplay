/* PLEX PLAY 4.42.0 — Revisión de legibilidad (modo oscuro y claro)
   Salió de un barrido de todas las pantallas a 375 px en los dos temas (herramientas/pruebas/revision442.mjs), que mide
   el contraste WCAG de cada texto visible y busca superficies claras sueltas en oscuro, más una revisión a ojo de
   las capturas. Lo que se corrige aquí:
     - Práctica: los nombres de las fichas se partían con guion («Vocabula-rio», «Diagnós-tico», «Simula-cros»).
     - Taller: el número de cada paso, blanco sobre dorado (2,95:1) → tinta noche sobre dorado.
     - Expresión oral y Lecturas: la pastilla de nivel, blanca sobre verde claro (3,3:1) → verde más hondo.
     - Sonidos del francés: estrellas sin ganar casi invisibles (1,35:1 en claro) y el símbolo fonético dorado en claro (2,9:1).
     - Diagnóstico y Simulacros: la etiqueta amarilla y las fichas sobre el azul de la portada (3,6 y 3,9:1); las duraciones
       («1 min», «3–4 min») pasan a un gris legible en cada tema (el color de cada parte sigue en su icono).
     - Pronunciación: «Escuchar el modelo» en azul sobre azul pálido (4,2:1).
     - 1 vs 1 / Ranking: el subtítulo de las tarjetas de liga estaba al 88 % (4,4:1).
     - Perfil › Estadísticas: el día de hoy en el gráfico, azul sobre oscuro (2,97:1).
     - Conversa: en el teléfono el botón «Situaciones» se comía el título de la situación («Presé…»): queda solo la flecha.
     - Conversa (menú): la descripción de la portada se cortaba en una línea con «…».
   Todo va en la capa pz con !important: es la capa que gana entre las importantes (kit.js la declara antes que p5), así
   estas correcciones mandan sobre la piel p5 y las piezas sin subir más la especificidad. */
(function(){
  "use strict";
  var D = document;
  var oscuro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); };
    return f(":root[data-theme=dark]") + "{" + decl + "}" + "@media (prefers-color-scheme:dark){" + f(":root:not([data-theme=light])") + "{" + decl + "}}";
  };
  var claro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); };
    return f(":root[data-theme=light]") + "{" + decl + "}" + "@media (prefers-color-scheme:light){" + f(":root:not([data-theme=dark])") + "{" + decl + "}}";
  };
  var css = [
    /* Diagnóstico y Simulacros: portada azul */
    "html body .dg2-portada .dg2-p-tx > small{color:#FFF3C4!important}",
    "html body .dg2-portada .dg2-p-chips span{background:rgba(11,31,92,.42)!important;color:#fff!important}",
    /* 1 vs 1 y Ranking: subtítulo de las ligas */
    "html body #view .rkx-amb2 button span small{opacity:1!important}",
    "html body #view .rkx-amb2 button.on span small,html body #view .rkx-amb2 button[aria-pressed=true] span small,html body #view .rkx-amb2 button[aria-selected=true] span small{color:#fff!important}",
    /* claro */
    claro("body .dg2-plan b small,body .dgx-wrap li > div > b > small", "color:#4E5874!important"),
    /* oscuro */
    oscuro("body .dg2-plan b small,body .dgx-wrap li > div > b > small", "color:#C9D2EC!important"),

  ].join("\n");
  var st = D.createElement("style"); st.id = "plx115";
  st.textContent = "@layer pz {\n" + css + "\n}";
  D.head.appendChild(st);
})();
