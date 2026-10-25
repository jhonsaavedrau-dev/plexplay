/* PLEX PLAY 4.112 — Fuera el carnet
   Jhon (25-oct-2026): «Fundamentos B2.2» (rem, Remédiation) eran los errores de su diagnóstico; pidió hace tiempo
   quitarlo y seguía saliendo. Aquí se saca de la lista de cursos, del mapa, del buscador, de los juegos, del 1V1 y de
   todo lo que lee TRACKS, LESSONS o COURSE_IDS (lo mismo que hace plx121 con el francés al pasar al inglés).
   Los juegos tampoco sacan ya «retos del carnet» (el cuaderno de errores): eso está en plx45 (G.retosCarnet).
   Nada se borra: window.PLX_REM = true antes de cargar (o localStorage plx-rem = "si") lo vuelve a mostrar. */
(function(){
  "use strict";
  try { if (window.PLX_REM === true || localStorage.getItem("plx-rem") === "si") return; } catch (e) {}
  if (typeof TRACKS === "undefined" || typeof LESSONS === "undefined") return;
  var i, fuera = function(t){ return t === "rem"; };
  for (i = TRACKS.length - 1; i >= 0; i--) if (fuera(TRACKS[i].id)) TRACKS.splice(i, 1);
  var limpia = function(){ for (var j = LESSONS.length - 1; j >= 0; j--) if (fuera(LESSONS[j].track)) LESSONS.splice(j, 1); };
  limpia();
  try { COURSE_IDS.delete("rem"); } catch (e) {}
  /* sin lecciones extra del carnet en segundo plano (plx66) */
  try { delete (window.PLX_MAS_V || {}).rem; } catch (e) {}
  /* quien tenía abierto el carnet pasa a B2.1 */
  try { if (typeof track !== "undefined" && fuera(track)) { track = "b21"; try { localStorage.setItem("cr-track", "b21"); } catch (e) {} } } catch (e) {}
  /* por si mas/rem.js ya venía en camino: lo que llegue se vuelve a sacar */
  var n = 0, t = setInterval(function(){ limpia(); if (++n > 20) clearInterval(t); }, 1500);
  window.PLX_SIN_REM = true;
})();
