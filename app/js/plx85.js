/* PLEX PLAY 3.8.0 — Rediseño con Elevate como referencia principal (adaptado, no copiado)
   Principios tomados de Elevate y llevados a la identidad de PLEX PLAY:
   - Tipografía técnica y limpia (Barlow, de la familia de la DIN), títulos ligeros y grandes, etiquetas en
     versalitas espaciadas («RÉCORD», «BENEFICIOS»).
   - Interfaz plana y blanca donde se navega; el color vive en las ilustraciones de cada juego: composiciones
     abstractas (polígonos, burbujas, paisajes, rayos, puntos) generadas a partir del color propio de cada juego,
     con un ícono de línea blanco y el nombre en mayúsculas.
   - Botones planos (sin «labio»), esquinas moderadas, sin sombras pesadas: aspecto profesional, no infantil.
   - Portada de cada juego: ilustración de fondo, ícono en el «sello» PLEX (los rasgos del ícono de la app,
     icons/mz-icon-192.png: fondo noche, aro de oro y chispas de cuatro puntas, en lugar del hexágono de Elevate),
     nombre, tipo, cifras con
     separadores (récord · velocidad · retos), «Beneficios» y «Cómo se juega».
   - «Entrenamiento de hoy» en Inicio: los pasos de tu ruta como tarjetas ilustradas, con su visto al hacerlos.
   - Juegos agrupados por habilidad con su franja de color y «Jugar un juego al azar».
   - Íconos propios de PLEX PLAY en lugar de emojis: línea de 2 px en rejilla de 24 (capa P) con un acento de oro
     PLEX debajo (capa A); el acento pasa a tinta noche sobre las ilustraciones amarillas. Un ícono por juego.
   - Navegación: la pestaña actual se enciende con ese mismo dúo (línea azul PLEX, cuerpo en oro) sobre una píldora
     con brillo, en claro y en oscuro.
   Se conservan el gato, los accesorios, las rachas, los niveles, las recompensas, 1v1 y todo lo demás. */
(function(){
  "use strict";
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ---------------- color ---------------- */
  var hex2hsl = function(h){
    h = String(h || "#1E4FD6").replace("#", ""); if (h.length === 3) h = h.split("").map(function(c){ return c + c; }).join("");
    var r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, s = 0, hh = 0, d = mx - mn;
    if (d) { s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); hh = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hh *= 60; }
    return [hh, s * 100, l * 100];
  };
  var hsl = function(h, s, l, a){ return "hsla(" + Math.round((h % 360 + 360) % 360) + "," + Math.round(Math.max(0, Math.min(100, s))) + "%," + Math.round(Math.max(0, Math.min(100, l))) + "%," + (a == null ? 1 : a) + ")"; };
  var semilla = function(t){ var s = 0; t = String(t); for (var i = 0; i < t.length; i++) s = (s * 31 + t.charCodeAt(i)) % 2147483647; return function(){ s = (s * 48271) % 2147483647; return s / 2147483647; }; };

  /* ---------------- ilustraciones abstractas ---------------- */
  var arte = function(id, color, forzar){
    var R = semilla(id), c = hex2hsl(color), H = c[0], S = Math.max(45, c[1]), estilos = ["poli", "burbujas", "paisaje", "rayos", "puntos"];
    var est = forzar || estilos[Math.floor(R() * estilos.length)], g = "g" + Math.floor(R() * 1e9).toString(36);
    var fondo = '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + hsl(H - 12, S, 62) + '"/><stop offset="1" stop-color="' + hsl(H + 28, S, 34) + '"/></linearGradient></defs><rect width="100" height="100" fill="url(#' + g + ')"/>';
    var f = "";
    if (est === "poli") for (var i = 0; i < 6; i++) { var x = R() * 100, y = R() * 100, z = 30 + R() * 50; f += '<polygon points="' + [x, y, x + z * (R() - .2), y - z * R(), x + z * R(), y + z * (R() - .3)].map(function(v){ return v.toFixed(1); }).join(" ") + '" fill="' + hsl(H + (R() - .5) * 60, S, 45 + R() * 30, .35 + R() * .3) + '"/>'; }
    if (est === "burbujas") for (var j = 0; j < 16; j++) { var r = 3 + R() * 16; f += '<circle cx="' + (R() * 100).toFixed(1) + '" cy="' + (55 + R() * 55).toFixed(1) + '" r="' + r.toFixed(1) + '" fill="' + hsl(H + (R() - .5) * 90, S + 10, 50 + R() * 25, .55 + R() * .35) + '"/>'; }
    if (est === "paisaje") { f += '<circle cx="' + (30 + R() * 40).toFixed(0) + '" cy="34" r="13" fill="' + hsl(H + 40, 90, 85, .7) + '"/>'; for (var k = 0; k < 3; k++) { var yb = 58 + k * 12, d = "M0 " + yb; for (var q = 0; q <= 5; q++) d += " Q" + (q * 20 + 10) + " " + (yb - 6 - R() * 14).toFixed(1) + " " + (q * 20 + 20) + " " + yb; f += '<path d="' + d + ' V100 H0Z" fill="' + hsl(H + 10, S, 46 - k * 9, .9) + '"/>'; } }
    if (est === "rayos") for (var m = 0; m < 7; m++) { var x0 = -20 + m * 20 + R() * 8; f += '<polygon points="' + x0 + ',0 ' + (x0 + 9 + R() * 10) + ',0 ' + (x0 + 50) + ',100 ' + (x0 + 38) + ',100" fill="' + hsl(H + (R() - .5) * 40, S, 60 + R() * 25, .18 + R() * .2) + '"/>'; }
    if (est === "puntos") { for (var a = 0; a < 10; a++) for (var b = 0; b < 10; b++) if (R() > .45) f += '<circle cx="' + (a * 10 + 5) + '" cy="' + (b * 10 + 5) + '" r="' + (.8 + R() * 1.6).toFixed(1) + '" fill="' + hsl(H, 30, 95, .25 + R() * .3) + '"/>'; f += '<path d="M0 ' + (60 + R() * 15).toFixed(0) + ' C 30 40, 60 90, 100 55" stroke="' + hsl(H + 50, 90, 80, .8) + '" stroke-width="1.6" fill="none"/>'; }
    return '<svg class="ev-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + fondo + f + "</svg>";
  };

  /* ---------------- íconos PLEX: línea (P) + acento de oro (A) ----------------
     Rejilla 24, área viva 2–22, trazo 2, puntas y uniones redondas. La capa A va debajo de la línea y toma
     --ico-a (oro PLEX por defecto). En A, las formas se rellenan; las marcadas fill="none" son trazos de oro.
     Cuando el acento es una forma suelta es el rombo ◆ de las fichas PLEX (cartas, corona, misterio, combo, duelo). */
  var P = {
  rayo: '<path d="M13.5 2.5 4.5 13.5H11l-1.5 8 10-11H13z"/>',
  bloques: '<rect x="2.5" y="5" width="10" height="5.5" rx="2"/><rect x="15" y="5" width="6.5" height="5.5" rx="2"/><rect x="2.5" y="13.5" width="6" height="5.5" rx="2"/><rect x="11" y="13.5" width="10.5" height="5.5" rx="2"/>',
  oido: '<path d="M4.5 10a5.5 5.5 0 0 1 11 0c0 2.4-1.3 3.6-2.4 4.6-.9.8-1.3 1.7-1.6 2.9a3.2 3.2 0 0 1-6.1.3"/><path d="M7.5 10a2.5 2.5 0 0 1 5 0c0 1.2-.8 1.8-1.6 2.3"/>',
  micro: '<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v4M9 21.5h6"/>',
  cartas: '<path d="M8.5 3.5H18a2 2 0 0 1 2 2V18"/><rect x="4" y="6.5" width="12" height="15" rx="2"/>',
  lupa: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4 21 21"/>',
  corona: '<path d="M3.5 7.5 8 11.5 12 5l4 6.5 4.5-4-1.8 10.5H5.3z"/><path d="M6 21h12"/>',
  pregunta: '<path d="M3 6A2.5 2.5 0 0 1 5.5 3.5h13A2.5 2.5 0 0 1 21 6v10a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3v-3A2.5 2.5 0 0 1 3 16z"/><path d="M9.9 8.6a2.1 2.1 0 1 1 3 1.9c-.6.3-.9.8-.9 1.4"/>',
  reloj: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.5M9.5 2.5h5M12 2.5V6M18.4 7.1l1.4-1.4"/>',
  flechas: '<path d="M8.5 12h12M15 6.5l5.5 5.5-5.5 5.5M3 8h3.5M2.5 12h2.5M3 16h3.5"/>',
  diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>',
  combo: '<path d="M12 2.5l4.3 7.5H7.7z"/><circle cx="6.5" cy="17" r="3.9"/><path d="M17.5 12.8l4.2 4.2-4.2 4.2-4.2-4.2z"/>',
  espadas: '<path d="M20 4 8.5 15.5M4 4l11.5 11.5M6 13l5 5M13 18l5-5M8.5 15.5l-4 4M15.5 15.5l4 4"/>',
  grupo: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M15.5 4.7a3.5 3.5 0 0 1 0 6.6M17.5 14a6.5 6.5 0 0 1 4 6"/>',
  mapa: '<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z"/><path d="M9 4v13.5M15 6.5V20"/>',
  libro: '<path d="M5 19.5v-15A2.5 2.5 0 0 1 7.5 2H19v15H7.5A2.5 2.5 0 0 0 5 19.5 2.5 2.5 0 0 0 7.5 22H19v-5"/>',
  cerebro: '<path d="M12 5a3.5 3.5 0 0 0-6.6 1.2A3.6 3.6 0 0 0 3.5 12a3.6 3.6 0 0 0 3 5.6A3.4 3.4 0 0 0 12 19M12 5a3.5 3.5 0 0 1 6.6 1.2A3.6 3.6 0 0 1 20.5 12a3.6 3.6 0 0 1-3 5.6A3.4 3.4 0 0 1 12 19V5"/><path d="M8.3 9.3c1 .2 1.8 1 2 2M15.7 9.3c-1 .2-1.8 1-2 2M6.8 14.3h2.4M14.8 14.3h2.4"/>',
  espejo: '<ellipse cx="12" cy="9.5" rx="6" ry="7"/><path d="M12 16.5v5"/>',
  pieza: '<path d="M4.5 7.5H8.2A2.5 2.5 0 1 1 10.8 7.5H14.5A1.5 1.5 0 0 1 16 9V12.7A2.5 2.5 0 1 1 16 15.3V19A1.5 1.5 0 0 1 14.5 20.5H4.5A1.5 1.5 0 0 1 3 19V15.3A2.5 2.5 0 1 0 3 12.7V9A1.5 1.5 0 0 1 4.5 7.5Z"/>',
  lapiz: '<path d="M4.5 19.5l1-4.5L15.8 4.7a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L9 18.5z"/><path d="M14 6.5l3.5 3.5"/>',
  audif: '<path d="M4 15.5V12a8 8 0 0 1 16 0v3.5"/><rect x="3" y="14" width="4.5" height="7" rx="2"/><rect x="16.5" y="14" width="4.5" height="7" rx="2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  estrella: '<path d="M10.5 5Q11.5 12 18.5 13 11.5 14 10.5 21 9.5 14 2.5 13 9.5 12 10.5 5z"/><path fill="currentColor" stroke="none" d="M18.5 2Q18.9 4.6 21.5 5 18.9 5.4 18.5 8 18.1 5.4 15.5 5 18.1 4.6 18.5 2z"/>',
  azar: '<rect x="3" y="3" width="18" height="18" rx="4.5"/>',
  fruta: '<circle cx="7" cy="16.5" r="4.2"/><circle cx="16.5" cy="17.3" r="4"/><path d="M7 12.3C7.8 8.2 10.8 4.8 15.5 3.5M16.5 13.3c-.5-3.8-.9-6.8-1-9.8"/>',
  iman: '<path d="M5 4.5h4.5V12a2.5 2.5 0 0 0 5 0V4.5H19V12a7 7 0 0 1-14 0z"/><path d="M5 8.5h4.5M14.5 8.5H19"/>',
  bandera: '<path d="M5 21.5v-18"/><path d="M5 4.5h14v9H5"/>',
  letras: '<path d="M5.5 14.5h13a6.5 6.5 0 1 0-1.9 4.6"/>',
  mascara: '<path d="M4.5 5.5c2.5 1 5 1.5 7.5 1.5s5-.5 7.5-1.5V12a7.5 7.5 0 0 1-15 0z"/><path d="M8 11.5c.7-.8 1.8-.8 2.5 0M13.5 11.5c.7-.8 1.8-.8 2.5 0M9 15.5a3.5 3.5 0 0 0 6 0"/>',
  mando: '<path d="M7.5 6.5h9a5 5 0 0 1 4.9 6l-.8 3.8a2.4 2.4 0 0 1-4.2 1.1L15 15.5H9l-1.4 1.9a2.4 2.4 0 0 1-4.2-1.1l-.8-3.8a5 5 0 0 1 4.9-6z"/><path d="M8 9.5v3M6.5 11h3"/>',
  trofeo: '<path d="M7.5 3.5h9V9a4.5 4.5 0 0 1-9 0z"/><path d="M16.5 5h3v1.5a3.5 3.5 0 0 1-3.2 3.5M7.5 5h-3v1.5A3.5 3.5 0 0 0 7.7 10M12 13.5v7M8 20.5h8"/>'
  };
  var A = {
  rayo: '<path d="M13.5 2.5 4.5 13.5H11l-1.5 8 10-11H13z"/>',
  bloques: '<rect x="11" y="13.5" width="10.5" height="5.5" rx="2"/>',
  oido: '<path fill="none" stroke="currentColor" d="M18 8a5 5 0 0 1 0 6M20.8 5.5a9 9 0 0 1 0 11"/>',
  micro: '<rect x="9" y="2.5" width="6" height="11" rx="3"/>',
  cartas: '<path d="M10 9.8l3 4.2-3 4.2-3-4.2z"/>',
  lupa: '<path fill="none" stroke="currentColor" d="M7.4 9.6a3.3 3.3 0 0 1 2.4-2.6"/>',
  corona: '<path d="M12 11.6l2 2.6-2 2.6-2-2.6z"/>',
  pregunta: '<path d="M12 13.6l1.5 1.5-1.5 1.5-1.5-1.5z"/>',
  reloj: '<path d="M12 13.5V6a7.5 7.5 0 0 1 6.5 11.25z"/>',
  flechas: '<path d="M15 6.5l5.5 5.5-5.5 5.5z"/>',
  diana: '<circle cx="12" cy="12" r="2.4"/>',
  combo: '<path d="M17.5 12.8l4.2 4.2-4.2 4.2-4.2-4.2z"/>',
  espadas: '<path d="M12 8.2l3.8 3.8-3.8 3.8-3.8-3.8z"/>',
  grupo: '<circle cx="9" cy="8" r="3.5"/>',
  mapa: '<path d="M9 4l6 2.5V20l-6-2.5z"/>',
  libro: '<path d="M12 2v7.5l2.25-1.6 2.25 1.6V2z"/>',
  cerebro: '<path d="M12 5a3.5 3.5 0 0 0-6.6 1.2A3.6 3.6 0 0 0 3.5 12a3.6 3.6 0 0 0 3 5.6A3.4 3.4 0 0 0 12 19z"/>',
  espejo: '<path fill="none" stroke="currentColor" d="M9.6 8.4l2.4-2.4M10.2 11.6l3.8-3.8"/>',
  pieza: '<path d="M8.2 7.5A2.5 2.5 0 1 1 10.8 7.5ZM16 12.7A2.5 2.5 0 1 1 16 15.3Z"/>',
  lapiz: '<path fill="none" stroke="currentColor" d="M12.5 21.2h8"/>',
  audif: '<rect x="3" y="14" width="4.5" height="7" rx="2"/><rect x="16.5" y="14" width="4.5" height="7" rx="2"/>',
  check: '',
  estrella: '<path d="M10.5 5Q11.5 12 18.5 13 11.5 14 10.5 21 9.5 14 2.5 13 9.5 12 10.5 5z"/>',
  azar: '<circle cx="8.2" cy="8.2" r="1.7"/><circle cx="15.8" cy="8.2" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="8.2" cy="15.8" r="1.7"/><circle cx="15.8" cy="15.8" r="1.7"/>',
  fruta: '<circle cx="16.5" cy="17.3" r="4"/><path d="M15.5 3.5c1.6-1.6 4.2-1.8 6-.4-1.6 1.7-4.2 1.9-6 .4z"/>',
  iman: '<path d="M5 4.5h4.5v4H5zM14.5 4.5H19v4h-4.5z"/>',
  bandera: '<path d="M5 4.5h4.67v3H5zM14.33 4.5H19v3h-4.67zM9.67 7.5h4.66v3H9.67zM5 10.5h4.67v3H5zM14.33 10.5H19v3h-4.67z"/>',
  letras: '<path d="M9.4 6.6 13.2 2h3.4l-4.2 4.6z"/>',
  mascara: '<path d="M4.5 5.5c2.5 1 5 1.5 7.5 1.5v12.5A7.5 7.5 0 0 1 4.5 12z"/>',
  mando: '<circle cx="15.2" cy="9.8" r="1.3"/><circle cx="17.7" cy="12.2" r="1.3"/>',
  trofeo: '<path d="M7.5 3.5h9V9a4.5 4.5 0 0 1-9 0z"/>'
  };
  var ico = function(n, cls){
    var k = P[n] ? n : "estrella", a = A[k];
    return '<svg class="ev-ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (a ? '<g class="ev-a" fill="currentColor" stroke="none">' + a + "</g>" : "") + "<g>" + P[k] + "</g></svg>";
  };
  /* insignia «sello»: los rasgos del ícono de la app (icons/mz-icon-192.png, el del manifest: insignia noche con aro
     de oro y chispas de cuatro puntas) en un squircle noche, con el aro abierto arriba a la derecha y, en el hueco,
     la chispa. Un solo SVG sin ids, sin clip-path ni backdrop-filter. */
  var SELLO = '<svg class="ev-sello-b" viewBox="0 0 100 100" aria-hidden="true"><path class="ev-sello-f" d="M50 4C88 4 96 12 96 50C96 88 88 96 50 96C12 96 4 88 4 50C4 12 12 4 50 4Z"/>' +
    '<path class="ev-sello-r" d="M80.67 29.31A37 37 0 1 1 70.69 19.33"/><path class="ev-sello-c" d="M76.2 13.4Q77.4 22.6 86.6 23.8 77.4 25 76.2 34.2 75 25 65.8 23.8 75 22.6 76.2 13.4Z"/></svg>';
  var sello = function(n){ return '<span class="ev-sello">' + SELLO + ico(n) + "</span>"; };
  /* acento sobre la ilustración del juego: oro, salvo en los juegos amarillos (ahí se perdería) */
  var oroDe = function(color){ var h = hex2hsl(color)[0]; return h >= 24 && h <= 68 ? "#0B1F5C" : "#FFD200"; };
  var FAM = { Reflejos: "rayo", Contrarreloj: "reloj", "Puntería": "diana", Carrera: "flechas", Combo: "combo", Construir: "bloques", Cartas: "cartas", Detective: "lupa", Escucha: "oido", Voz: "micro", Memoria: "cerebro", Jefe: "corona", Misterio: "pregunta", Aventura: "mapa", Duelo: "espadas", Equipo: "grupo" };
  var CAT = [["Reflejos y velocidad", "#FF6B3D", ["Reflejos", "Contrarreloj", "Puntería", "Carrera", "Combo"]], ["Construir frases", "#16A34A", ["Construir", "Cartas", "Detective"]], ["Escucha y voz", "#2F6BFF", ["Escucha", "Voz"]], ["Memoria y estrategia", "#8B5CF6", ["Memoria", "Jefe", "Misterio", "Aventura"]], ["Con otros", "#E5484D", ["Duelo", "Equipo"]]];
  var BENEF = {
    Reflejos: ["Reconoces palabras en un instante", "Ganas fluidez para leer sin traducir"], Contrarreloj: ["Decides bajo presión, como en un examen", "Automatizas lo que ya sabes"],
    "Puntería": ["Clasificas el vocabulario por categorías", "Fijas el significado con atención"], Carrera: ["Eliges la forma gramatical correcta al vuelo", "Afinas tu intuición gramatical"],
    Combo: ["Encadenas habilidades distintas", "Mantienes la concentración"], Construir: ["Ordenas frases con la sintaxis francesa", "Escribes con más seguridad"],
    Cartas: ["Aplicas reglas en contexto", "Refuerzas la gramática con estrategia"], Detective: ["Detectas los errores típicos de hispanohablantes", "Corriges tus propios textos"],
    Escucha: ["Entiendes el francés hablado a velocidad real", "Distingues sonidos que se parecen"], Voz: ["Mejoras tu pronunciación con el micrófono", "Ganas soltura al hablar"],
    Memoria: ["Retienes vocabulario más tiempo", "Asocias palabras y significados"], Jefe: ["Repasas toda una unidad", "Compruebas lo que dominas"],
    Misterio: ["Practicas con variedad", "Te adaptas a ejercicios distintos"], Aventura: ["Avanzas por temas de forma ordenada", "Repasas con propósito"],
    Duelo: ["Practicas con otra persona en tiempo real", "Aprendes de la competencia"], Equipo: ["Colaboras para llegar a la meta", "Repasas en grupo"]
  };
  var JUEGO = { ff: "fruta", wc: "iman", bc: "reloj", tw: "diana", gr: "flechas", cm: "combo", pb: "bloques", sr: "bandera", sb: "letras", cc: "cartas", ld: "lupa",
    ah: "oido", vd: "micro", rq: "mascara", mr: "cerebro", bb: "corona", mc: "pregunta", la: "mapa", wb: "espadas", tc: "grupo" };
  var icoDe = function(j){ return JUEGO[j.id] || FAM[j.familia] || "estrella"; };
  var catDe = function(f){ for (var i = 0; i < CAT.length; i++) if (CAT[i][2].indexOf(f) >= 0) return CAT[i]; return CAT[0]; };

  /* ficha de juego: el sello PLEX (insignia noche con aro de oro) con el ícono del juego, su nombre y qué se practica.
     El color del juego queda como un filo y un lavado suave: la ficha es de la app, no un mosaico de color. */
  var tile = function(j, i){
    return '<button class="ev-tile" data-jx-juego="' + esc(j.id) + '" style="--c:' + j.color + '" title="' + esc(j.verbo) + '"><span class="ev-tile-top">' + sello(icoDe(j)) + (i == null ? "" : '<i class="ev-num">' + (i < 9 ? "0" : "") + (i + 1) + "</i>") + "</span><b>" + esc(j.nombre) + "</b><small>" + esc(j.verbo) + "</small></button>";
  };
  var grilla = function(js){
    var n = 0;
    return CAT.map(function(c){
      var g = js.filter(function(j){ return c[2].indexOf(j.familia) >= 0; }); if (!g.length) return "";
      return '<div class="ev-cat" style="--c:' + c[1] + '"><h3>' + esc(c[0]) + "</h3><small>" + g.length + (g.length === 1 ? " juego" : " juegos") + '</small></div><div class="ev-grid">' + g.map(function(j){ return tile(j, n++); }).join("") + "</div>";
    }).join("") + '<button class="ev-azar" data-ev-azar="1">' + ico("azar") + "Jugar un juego al azar</button>";
  };

  /* ---------------- portada de juego (Arcade) ---------------- */
  var portada = function(){
    var c = document.getElementById("plxg"); if (!c || c.hidden) return;
    var hero = c.querySelector(".pt5-hero:not([data-ev])"); if (!hero) return;
    var pt = hero.closest(".pt"), G = window.PLXG, id = (pt.className.match(/pt-(\w+)/) || [])[1], j = G && G.juegos && G.juegos[id]; if (!j) return;
    hero.dataset.ev = "1";
    var titulo = hero.querySelector(".pt-h"), verbo = hero.querySelector(".pt-verbo"), u = hero.querySelector(".pt-u");
    var ub = u && u.querySelector("b"), us = u && u.querySelector("span"), retos = us ? (us.textContent.match(/(\d+)\s*retos/) || [])[1] : "", vel = us ? (us.textContent.match(/velocidad\s+(.+)/) || [])[1] : "";
    var recEl = pt.querySelector(".pt-rec b"), rec = recEl ? recEl.textContent : "0";
    hero.innerHTML = '<span class="ev-art">' + arte(id, j.color) + '</span>' + sello(icoDe(j)) + "<h1>" + esc(j.nombre) + "</h1><p class=\"ev-tipo\">" + esc(j.familia) + (ub ? " · " + esc(ub.textContent) : "") + "</p>" +
      '<div class="ev-cifras"><div><b>' + esc(rec) + "</b><small>Récord</small></div><div><b>" + esc(vel || "—") + "</b><small>Velocidad</small></div><div><b>" + esc(retos || "—") + "</b><small>Retos</small></div></div>";
    var ben = BENEF[j.familia] || BENEF.Reflejos;
    hero.insertAdjacentHTML("afterend", '<div class="ev-benef"><h3>Beneficios</h3>' + ben.map(function(b, i){ return "<p>" + ico(i ? "cerebro" : icoDe(j)) + "<span>" + esc(b) + "</span></p>"; }).join("") + "</div>");
    var rg = pt.querySelector(".pt5-reglas h3"); if (rg) rg.textContent = "Cómo se juega";
    if (titulo) titulo.remove(); if (verbo) verbo.remove();
  };
  /* tarjetas del Arcade (lista): ilustración y ícono de línea */
  var hubArte = function(){
    var c = document.getElementById("plxg"); if (!c || c.hidden) return;
    c.querySelectorAll(".hb-game:not([data-ev])").forEach(function(b){
      var G = window.PLXG, j = G && G.juegos && G.juegos[b.dataset.j]; if (!j) return; b.dataset.ev = "1";
      var fr = b.querySelector(".hb-fr"); if (fr) { fr.innerHTML = arte(j.id, j.color) + ico(icoDe(j)); fr.style.setProperty("--ico-a", oroDe(j.color)); }
    });
  };

  /* «Juego del día» con su ilustración */
  var diaArte = function(){
    document.querySelectorAll(".jx-dia:not([data-ev])").forEach(function(b){
      var G = window.PLXG, j = G && G.juegos && G.juegos[b.dataset.jxJuego]; if (!j) return; b.dataset.ev = "1";
      b.insertAdjacentHTML("afterbegin", '<span class="ev-art">' + arte(j.id + "dia", j.color) + "</span>");
      var a = b.querySelector(".jx-dia-arte"); if (a) a.innerHTML = sello(icoDe(j));
    });
  };

  /* ---------------- Inicio: «Entrenamiento de hoy» ---------------- */
  var ICO_PASO = { lec: "libro", deb: "cerebro", fue: "estrella", rep: "reloj" };
  /* cada paso lleva el ícono de lo que abre (si es un juego, el mismo de Jugar); si no lo hay, el de su tipo */
  var ICO_ACT = { speak: "micro", dict: "audif", taller: "lapiz" };
  var COL_PASO = { lec: "#2F6BFF", deb: "#8B5CF6", fue: "#16A34A", rep: "#0EA5A4" };
  var hoy = function(){
    document.querySelectorAll(".rtx .rtx-l li button:not([data-ev])").forEach(function(b, i){
      b.dataset.ev = "1"; var id = b.dataset.id || "lec", ok = b.closest("li").classList.contains("ok"), act = (b.dataset.rtx || "").replace("act:", "");
      b.insertAdjacentHTML("afterbegin", '<span class="ev-art">' + arte("paso" + id + i, COL_PASO[id] || "#2F6BFF") + "</span>" + ico(JUEGO[act] || ICO_ACT[act] || ICO_PASO[id] || "estrella", "ev-pic") + (ok ? '<span class="ev-hecho">' + ico("check") + "</span>" : ""));
    });
    var r = document.querySelector(".rtx:not([data-ev])"); if (r) { r.dataset.ev = "1"; var h = r.querySelector(".rtx-hoy"); if (h) h.textContent = "Entrenamiento de hoy · " + h.textContent.replace(/^Hoy · /, ""); }
  };

  /* ---------------- emojis → íconos de línea ---------------- */
  var EMO = { "🪞": "espejo", "🧩": "pieza", "📖": "libro", "🎧": "audif", "✍️": "lapiz", "✍": "lapiz", "🎙️": "micro", "🎙": "micro" };
  var sinEmojis = function(){
    document.querySelectorAll(".dg2-plan li > i, .dg2-prog span > i, .dgx-bloque > i, .dgx-bt > i, .dgx-4 li > i").forEach(function(e){
      if (e.dataset.ev) return; var t = e.textContent.trim(); if (!EMO[t]) return; e.dataset.ev = "1"; e.innerHTML = ico(EMO[t]);
    });
  };

  /* ---------------- Jugar › Juegos: las filas de «Con otros» con el mismo dibujo que las tarjetas ----------------
     plx79 las arma con el set pintado de img/ic (mando, globo, corazón, trofeo) justo debajo de las tarjetas de línea y
     oro: dos lenguajes en la misma pantalla. Aquí se cambia la imagen por el ícono del sistema; Duelo y Equipo llevan
     el de su juego (Word Battle, Team Challenge), el mismo de la tarjeta de arriba. Solo el panel Juegos: Practicar y
     Explorar siguen con el set pintado, igual que el resto de secciones. */
  var FILA = [[/1v1/i, "mando"], [/duelo/i, JUEGO.wb], [/equipo/i, JUEGO.tc], [/ranking/i, "trofeo"]];
  var filas = function(){
    document.querySelectorAll(".jx-pan[data-p=juegos] .jx-row > .jx-ic:not([data-ev])").forEach(function(c){
      var b = c.parentNode.querySelector(".jx-rt b"), t = b ? b.textContent : "", n = "";
      for (var i = 0; i < FILA.length && !n; i++) if (FILA[i][0].test(t)) n = FILA[i][1];
      if (!n) return; c.dataset.ev = "1"; c.innerHTML = ico(n);
    });
  };

  /* ---------------- barra: el saltito del ícono activo, solo al cambiar de pestaña ----------------
     render() repinta la barra entera (en Aprender llega solo, sin tocar nada) y la animación de plx20 volvía a
     arrancar con cada repintado: la píldora encendida saltaba sin motivo. */
  var tabAnt = null, tabT = 0;
  var tabHop = function(){
    var n = document.getElementById("tabbar"), b = n && n.querySelector("button[aria-current=page]"), k = b ? b.textContent : "";
    if (!b || k === tabAnt) return; tabAnt = k;
    n.classList.add("ev-hop"); clearTimeout(tabT); tabT = setTimeout(function(){ n.classList.remove("ev-hop"); }, 520);
  };

  var pend = false;
  var pasa = function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { tabHop(); portada(); hubArte(); hoy(); sinEmojis(); filas(); diaArte(); } catch (e) {} }); };
  new MutationObserver(pasa).observe(document.body, { childList: true, subtree: true });
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-ev-azar]"); if (!b) return; e.preventDefault(); e.stopPropagation();
    var G = window.PLXG, js = G ? G.listaJuegos() : []; if (!js.length) return;
    var j = js[Math.floor(Math.random() * js.length)], t = document.createElement("button"); t.dataset.jxJuego = j.id; t.style.display = "none"; document.body.appendChild(t); t.click(); t.remove();
  }, true);
  window.PLX_EV = { arte: arte, ico: ico, icoDe: icoDe, sello: sello, tile: tile, grilla: grilla, FAM: FAM, JUEGO: JUEGO };

  /* ---------------- estilos ---------------- */
  var css = [
    "@font-face{font-family:Barlow;src:url(fonts/barlow-300.woff2) format('woff2');font-weight:300;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-400.woff2) format('woff2');font-weight:400;font-display:swap}",
    "@font-face{font-family:Barlow;src:url(fonts/barlow-500.woff2) format('woff2');font-weight:500;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-600.woff2) format('woff2');font-weight:600;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-700.woff2) format('woff2');font-weight:700;font-display:swap}",
    /* tokens: plano, sobrio */
    ":root{--ev-f:Barlow,Inter,system-ui,sans-serif;--ev-azul:#2F6BFF;--ev-azul2:#1F55E0;--serif:var(--ev-f);--sans:var(--ev-f);--v4-r-xl:18px;--v4-r-lg:14px;--v4-r-md:12px;--v4-sh1:0 1px 2px rgba(14,26,58,.04);--v4-sh2:0 10px 30px -18px rgba(14,26,58,.35);--ev-oro:#FFD200;--ev-oro-s:#F0B400;--ev-noche:#0B1F5C;--ev-azul-tab:var(--ev-azul);--ev-tab-tx:var(--ev-azul2);--ev-tab-pill:rgba(47,107,255,.13);--ev-tab-aro:rgba(47,107,255,.26);--ev-tab-glow:rgba(47,107,255,.3)}",
    /* oro de los íconos sobre superficies claras (en oscuro vuelve al oro PLEX); azul de la pestaña activa en oscuro */
    "html[data-theme=dark]{--ev-oro-s:#FFD200;--ev-azul-tab:#8FB4FF;--ev-tab-tx:#A9C4FF;--ev-tab-pill:rgba(143,180,255,.17);--ev-tab-aro:rgba(143,180,255,.34);--ev-tab-glow:rgba(143,180,255,.6)}@media (prefers-color-scheme:dark){html:not([data-theme=light]){--ev-oro-s:#FFD200;--ev-azul-tab:#8FB4FF;--ev-tab-tx:#A9C4FF;--ev-tab-pill:rgba(143,180,255,.17);--ev-tab-aro:rgba(143,180,255,.34);--ev-tab-glow:rgba(143,180,255,.6)}}",
    ".ev-ic .ev-a{color:var(--ico-a,var(--ev-oro))}",
    "body,button,input,textarea,select{font-family:var(--ev-f)!important;letter-spacing:.005em}",
    ".theory,.theory *,.dg2-doc,.dg2-doc *,.lit-in p,.kq-why,.plx-ess li{font-family:Inter,system-ui,sans-serif}",
    /* títulos ligeros y grandes; etiquetas en versalitas */
    "h1,.disp,.lx-curso b,.gmain > .greet h1,.dgx-hero h1,.dg2-p-tx h1,.kq-hero h1{font-family:var(--ev-f)!important;font-weight:500!important;letter-spacing:-.01em!important}",
    ".ix-h h2,.jx-h h2,.lx-h h2,.kq-h{font-family:var(--ev-f)!important;font-weight:600!important;letter-spacing:.01em!important}",
    ".v4-fecha,.jx-rt > small:first-child,.lx-next-tx small,.lx-ut small,.rtx-top small,.rtx-h small,.dgx-hero small,.lx-pcard small,.dg2-p-tx small,.jx-dia-tx small,.jx-kq-tx small,.jx-para small{letter-spacing:.14em!important;font-weight:600!important}",
    /* tarjetas planas */
    ".gcard{box-shadow:0 0 0 1px var(--v4-line)!important;border-radius:16px!important}",
    ".jx-row,.jx-curso,.jx-tile,.lx-u,.lx-prog,.dgx-bar,.dg2-plan li,.dg2-c,.dgx-op,.pt5-reglas,.pt .pt-rec,.pt .pt-aj,.hb-u{box-shadow:0 0 0 1px var(--v4-line)!important}",
    /* botones planos */
    ".gbtn,.m-btn,.lx-go,.jx-go,.kq-btn,.plxg-btn,.rz-go{box-shadow:none!important;font-family:var(--ev-f)!important;font-weight:600!important;border-radius:12px!important;letter-spacing:.02em!important}",
    ".gbtn:not(.ghost),.gmain > .m-course .m-btn,.dg2 .dgx-pie .gbtn:not(.ghost){background:var(--ev-azul)!important;color:#fff!important}.gbtn:not(.ghost):hover{background:var(--ev-azul2)!important}",
    ".gbtn:active,.m-btn:active,.lx-go:active,.kq-btn:active,.plxg-btn:active{transform:scale(.98)!important;box-shadow:none!important}",
    ".gbtn.ghost{background:var(--v4-surface2)!important;color:var(--v4-ink)!important}",
    ".lx-go,.plxg .plxg-btn:not(.line),.kq-btn:not(.line){background:#fff!important;color:#0B2D74!important}",
    ".plxg:not(.plxg-juego) .plxg-btn:not(.line),.pt .pt-go{background:var(--ev-azul)!important;color:#fff!important}",
    /* barra superior limpia */
    "header.top .topbar-in{background:color-mix(in srgb,var(--v4-surface) 92%,transparent)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 0 0 1px var(--v4-line)!important;border-radius:16px!important}",
    "header.top .plx-name{color:var(--v4-ink)!important}header.top .gpill,header.top .px-iconbtn{background:var(--v4-surface2)!important;color:var(--v4-ink)!important;box-shadow:none!important}",
    "header.top .gpill *{color:var(--v4-ink)!important}",
    /* plx20 fija barra y pestañas con html.mk body …#id: se iguala la especificidad */
    "html.mk body header#topbar.top .topbar-in{background:color-mix(in srgb,var(--v4-surface) 92%,transparent)!important;box-shadow:0 0 0 1px var(--v4-line)!important;border-radius:16px!important;min-height:56px!important}",
    "html.mk body header#topbar.top .plx-name,html.mk body header#topbar.top .plx-name *{color:var(--v4-ink)!important}html.mk body header#topbar.top .plx-name svg [fill='#FFD200'],html.mk body header#topbar.top .plx-name em{color:var(--ev-azul)!important}",
    "html.mk body header#topbar.top .gpill,html.mk body header#topbar.top .px-iconbtn,html.mk body header#topbar.top .theme-btn{background:var(--v4-surface2)!important;color:var(--v4-ink)!important;box-shadow:none!important;border:0!important}",
    "html.mk body header#topbar.top .gpill *,html.mk body header#topbar.top .px-iconbtn svg{color:var(--v4-ink)!important;stroke:currentColor}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]{background:transparent!important;color:var(--ev-tab-tx)!important;box-shadow:none!important}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn{color:var(--v4-mute)!important}",
    /* pestaña activa encendida. plx20 dejaba el ícono blanco (era para su píldora azul) sobre la barra clara: no se
       veía. Ahora es el dúo de los íconos de juego (línea azul PLEX, cuerpo en oro) sobre una píldora con brillo, y la
       etiqueta va un tono más fuerte para leerse mejor que las inactivas. El saltito de plx20 solo corre con .ev-hop. */
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg{color:var(--ev-azul-tab)!important;background:var(--ev-tab-pill)!important;box-shadow:inset 0 0 0 1px var(--ev-tab-aro);filter:drop-shadow(0 0 7px var(--ev-tab-glow));stroke-width:2;animation:none}html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg > *{fill:var(--ev-oro)}",
    "html.mk body nav#tabbar.tabbar.ev-hop button.px-navbtn[aria-current=page] svg{animation:plxHop .45s cubic-bezier(.2,.9,.3,1.4)}",
    /* las inactivas son el mismo dúo, apagado: trazo de 2 px como la activa y el cuerpo con un velo de su propio gris
       en vez del oro. Antes eran otro juego de íconos (línea de 1,8 sin cuerpo); ahora la activa no cambia de dibujo, se enciende. */
    "html.mk body nav#tabbar.tabbar button.px-navbtn:not([aria-current=page]) svg{stroke-width:2}html.mk body nav#tabbar.tabbar button.px-navbtn:not([aria-current=page]) svg > *{fill:currentColor;fill-opacity:.16}",
    /* en pantalla ancha la navegación va en la cabecera con la píldora azul rellena de plx20: mismo dúo, línea blanca y cuerpo en oro */
    "html.mk body header#topbar.top #nav button.px-navbtn[aria-current=page] svg{fill:var(--ev-oro)!important}",
    /* barra de pestañas: blanca y plana, íconos de línea */
    ".tabbar{border-radius:20px!important;box-shadow:0 0 0 1px var(--v4-line),0 10px 30px -18px rgba(14,26,58,.4)!important}",
    ".tabbar .px-navbtn[aria-current=page]{background:transparent!important;color:var(--ev-azul)!important;box-shadow:none!important}.tabbar .px-navbtn[aria-current=page] .label{font-weight:700}",
    ".tabbar .px-navbtn{position:relative}",
    /* tarjetas de juego (Jugar y Arcade) */
    ".ev-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:700px){.ev-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    ".ev-art{position:absolute;inset:0;z-index:-1}.ev-art .ev-svg{width:100%;height:100%;display:block}",
    ".ev-tile{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:142px;padding:14px 14px 13px;border-radius:18px;overflow:hidden;text-align:left;color:var(--v4-ink);background:linear-gradient(165deg,color-mix(in srgb,var(--c) 11%,var(--v4-surface)),var(--v4-surface) 62%);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c) 22%,var(--v4-line)),0 10px 22px -18px rgba(14,26,58,.45);transition:transform .2s var(--v4-e)}",
    ".ev-tile::before{content:'';position:absolute;left:0;top:16px;bottom:16px;width:3px;border-radius:0 3px 3px 0;background:var(--c)}.ev-tile:active{transform:scale(.97)}",
    ".ev-tile-top{display:flex;align-items:flex-start;justify-content:space-between;width:100%;margin-bottom:8px}.ev-tile .ev-sello{width:50px;height:50px;margin:0;animation:none}.ev-tile .ev-sello-b{filter:drop-shadow(0 5px 10px rgba(6,14,44,.22))}.ev-tile .ev-sello-f{fill-opacity:1}.ev-tile .ev-sello .ev-ic{width:24px;height:24px;color:#fff;--ico-a:var(--ev-oro);filter:none;transition:transform .4s var(--v4-spring)}.ev-tile:hover .ev-sello .ev-ic{transform:scale(1.1)}",
    ".ev-num{font:600 .72rem/1 var(--ev-f);font-style:normal;letter-spacing:.14em;color:color-mix(in srgb,var(--c) 70%,var(--v4-ink));opacity:.75;padding-top:3px}",
    ".ev-tile b{font-family:Poppins,var(--ev-f),system-ui,sans-serif;font-weight:700;font-size:.98rem;line-height:1.18;letter-spacing:-.005em;color:var(--v4-ink)}",
    ".ev-tile small{font-family:var(--ev-f);font-weight:400;font-size:.8rem;line-height:1.3;color:var(--v4-mute);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    ".ev-cat{margin:22px 2px 10px;display:flex;align-items:baseline;gap:10px}.ev-cat h3{margin:0;display:flex;align-items:center;gap:9px;font-family:Poppins,var(--ev-f),system-ui,sans-serif;font-weight:700;font-size:1.02rem;letter-spacing:-.005em;color:var(--v4-ink)}.ev-cat h3::before{content:'';width:9px;height:9px;flex:none;transform:rotate(45deg);border-radius:2px;background:var(--c)}.ev-cat small{font-family:var(--ev-f);font-size:.8rem;color:var(--v4-mute)}",
    ".ev-azar{all:unset;box-sizing:border-box;cursor:pointer;position:sticky;bottom:calc(92px + env(safe-area-inset-bottom));z-index:4;margin:14px auto 0;display:flex;align-items:center;justify-content:center;gap:10px;width:min(100%,360px);min-height:52px;border-radius:14px;background:var(--ev-azul);color:#fff;font-weight:600;font-size:1.05rem;letter-spacing:.02em;box-shadow:0 12px 30px -12px rgba(47,107,255,.7)}",
    ".ev-azar .ev-ic{width:22px;height:22px}",
    ".jx-pan[data-p=juegos] .jx-h,.jx-pan[data-p=juegos] .jx-chips,.jx-pan[data-p=juegos] .jx-grid{display:none!important}",
    ".jx-dia[data-ev]{background:none!important;isolation:isolate;border-radius:14px!important;box-shadow:0 14px 30px -18px rgba(14,26,58,.5)!important}.jx-dia[data-ev] > .ev-art{position:absolute;inset:0;z-index:-1}.jx-dia[data-ev] > .ev-art::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.12),rgba(0,0,0,.35))}",
    ".jx-dia[data-ev] .jx-dia-tx b{font-family:var(--ev-f)!important;font-weight:300!important;font-size:1.7rem!important;letter-spacing:.01em}.jx-dia[data-ev] .jx-dia-arte > .ev-sello{position:relative!important;width:76px;height:76px;margin:0}.jx-dia[data-ev] .jx-dia-arte .ev-sello .ev-sello-b{position:absolute;inset:0;width:100%;height:100%;max-width:none}.jx-dia[data-ev] .jx-dia-arte .ev-sello .ev-ic{width:36px;height:36px;max-width:none;filter:none}",
    /* tarjetas del Arcade */
    ".hb-game .hb-fr{position:relative!important;background:none!important;height:96px!important}.hb-game .hb-fr .ev-svg{position:absolute;inset:0;width:100%;height:100%}.hb-game .hb-fr .ev-ic{position:relative!important;width:38px;height:38px;color:#fff;max-width:none;max-height:none;filter:drop-shadow(0 2px 6px rgba(0,0,0,.3))}",
    ".hb-game{grid-template-rows:96px auto!important;border-radius:10px!important}",
    /* plx83 (.hb-fr > *{position:static!important;max-width:70%}) encogía la ilustración y dejaba el ícono blanco sobre blanco */
    ".hb-game .hb-fr > .ev-svg{position:absolute!important;inset:0;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}",
    /* portada: ilustración, sello PLEX, nombre y cifras */
    ".pt5-hero[data-ev]{background:none!important;box-shadow:none!important;padding:28px 18px 0!important;border-radius:14px!important;min-height:330px;align-content:start}",
    ".pt5-hero[data-ev]::after{display:none}.pt5-hero[data-ev] > .ev-art{position:absolute;inset:0;z-index:-2}.pt5-hero[data-ev] > .ev-art::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.35))}",
    ".ev-sello{position:relative;width:88px;height:88px;display:grid;place-items:center;margin-bottom:6px;flex:none;animation:pt5in .6s var(--v4-spring) both}.ev-sello-b{position:absolute;inset:0;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 8px 18px rgba(6,14,44,.28))}.ev-sello-f{fill:var(--ev-noche);fill-opacity:.9}.ev-sello-r{fill:none;stroke:var(--ev-oro);stroke-width:1.75;stroke-linecap:round;vector-effect:non-scaling-stroke}.ev-sello-c{fill:var(--ev-oro)}.ev-sello .ev-ic{position:relative;width:42px;height:42px;color:#fff;stroke-width:1.8}",
    ".pt5-hero[data-ev] h1{margin:6px 0 0;font-family:var(--ev-f);font-weight:300;font-size:clamp(2rem,9vw,2.6rem);letter-spacing:.01em;color:#fff}",
    ".ev-tipo{margin:0;color:rgba(255,255,255,.75);font-weight:500;font-size:1.05rem}",
    ".ev-cifras{display:grid;grid-template-columns:repeat(3,1fr);width:100%;margin:22px 0 0;border-top:1px solid rgba(255,255,255,.3)}.ev-cifras > div{padding:14px 4px;display:grid;gap:2px}.ev-cifras > div + div{border-left:1px solid rgba(255,255,255,.3)}",
    ".ev-cifras b{font-family:var(--ev-f);font-weight:300;font-size:1.6rem;color:#fff}.ev-cifras small{font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.75)}",
    ".ev-benef{display:grid;gap:12px;margin:0 0 14px;padding:16px;border-radius:14px;background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line)}",
    ".ev-benef h3,.pt5-reglas h3{margin:0;font-family:var(--ev-f)!important;font-weight:600!important;font-size:.72rem!important;letter-spacing:.16em;text-transform:uppercase;color:var(--v4-mute)!important}",
    ".ev-benef p{margin:0;display:flex;gap:14px;align-items:center;color:var(--v4-ink2);font-size:1rem}.ev-benef .ev-ic{flex:none;width:28px;height:28px;color:var(--v4-ink)}",
    /* partida: barra mínima */
    /* Boss Battle: el nombre del jefe («Professeur Chat Noir») no cabía a 375 px */
    ".bb-fila b{font-size:10.5px!important;letter-spacing:.02em!important}",
    ".plxg-hud{background:transparent!important;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none!important}.plxg-hud .plxg-ib{background:rgba(255,255,255,.12)!important;box-shadow:none!important}",
    ".plxg-tiempo{background:transparent!important;font-family:var(--ev-f)!important;font-weight:600}.plxg-pts b{font-family:var(--ev-f)!important;font-weight:600}",
    /* Inicio: entrenamiento de hoy */
    ".rtx .rtx-l{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}",
    ".rtx .rtx-l li button{position:relative;display:grid!important;grid-template-rows:96px auto;align-content:start;gap:8px!important;padding:0 0 10px!important;background:var(--v4-surface)!important;border-radius:10px!important;overflow:hidden;box-shadow:0 0 0 1px var(--v4-line)!important}",
    ".rtx .rtx-l li button > .ev-art{position:relative;inset:auto;z-index:0;height:96px;display:block}.rtx .rtx-l li button > .ev-pic{position:absolute;top:30px;left:50%;margin-left:-18px;width:36px;height:36px;color:#fff;filter:drop-shadow(0 2px 6px rgba(0,0,0,.3))}",
    /* «Pronunciación» no cabía en la tarjeta a 375 px y salía «Pronunciaci…» */
    ".rtx .rtx-l li button > i,.rtx .rtx-l li button > em{display:none!important}.rtx .rtx-l li button > span:not(.ev-art):not(.ev-hecho){padding:0 6px}.rtx .rtx-l li button b{white-space:normal!important;overflow-wrap:anywhere;font-size:clamp(.72rem,3.2vw,.82rem);line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    ".rtx .rtx-l li button small{display:none!important}.rtx .rtx-l li.ok b{text-decoration:none!important}",
    ".ev-hecho{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;background:#16A34A;display:grid;place-items:center}.ev-hecho .ev-ic{width:16px;height:16px;color:#fff}",
    /* íconos de línea en el diagnóstico */
    ".dg2-plan li > i .ev-ic,.dgx-4 li > i .ev-ic{width:20px;height:20px;color:var(--c,var(--v4-ink2))}.dg2-prog span > i .ev-ic{width:16px;height:16px}.dgx-bloque > i .ev-ic{width:52px;height:52px;color:#fff}.dgx-bt > i .ev-ic{width:18px;height:18px;color:var(--c)}",
    ".ev-benef .ev-ic,.dg2-plan li > i .ev-ic,.dgx-4 li > i .ev-ic,.dg2-prog span > i .ev-ic,.dgx-bt > i .ev-ic{--ico-a:var(--ev-oro-s)}",
    /* filas de «Con otros»: línea en tinta y un solo acento oro sobre la casilla teñida que ya traía la fila */
    ".jx-row > .jx-ic[data-ev] .ev-ic{width:26px;height:26px;color:var(--v4-ink);--ico-a:var(--ev-oro-s)}",
    /* ejercicios: pregunta grande y opciones planas */
    "#player .q{font-family:var(--ev-f)!important;font-weight:500!important;font-size:1.35rem!important;line-height:1.35}",
    "#player .opt{box-shadow:0 0 0 1px var(--v4-line)!important;border-radius:12px!important;font-family:var(--ev-f)!important;font-weight:500!important;font-size:1.05rem!important}",
    "#player .pf .btn{box-shadow:none!important;border-radius:12px!important;font-family:var(--ev-f)!important;font-weight:600!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx85"; st.textContent = css; document.head.appendChild(st);
})();
