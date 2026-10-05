/* PLEX PLAY 3.8.0 — Rediseño con Elevate como referencia principal (adaptado, no copiado)
   Principios tomados de Elevate y llevados a la identidad de PLEX PLAY:
   - Tipografía técnica y limpia (Barlow, de la familia de la DIN), títulos ligeros y grandes, etiquetas en
     versalitas espaciadas («RÉCORD», «BENEFICIOS»).
   - Interfaz plana y blanca donde se navega; el color vive en las ilustraciones de cada juego: composiciones
     abstractas (polígonos, burbujas, paisajes, rayos, puntos) generadas a partir del color propio de cada juego,
     con un ícono de línea blanco y el nombre en mayúsculas.
   - Botones planos (sin «labio»), esquinas moderadas, sin sombras pesadas: aspecto profesional, no infantil.
   - Portada de cada juego al estilo Elevate: ilustración de fondo, ícono en hexágono, nombre, tipo, cifras con
     separadores (récord · velocidad · retos), «Beneficios» y «Cómo se juega».
   - «Entrenamiento de hoy» en Inicio: los pasos de tu ruta como tarjetas ilustradas, con su visto al hacerlos.
   - Juegos agrupados por habilidad con su franja de color y «Jugar un juego al azar».
   - Íconos de línea en lugar de emojis en el diagnóstico y las secciones.
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

  /* ---------------- íconos de línea ---------------- */
  var P = {
    rayo: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', bloques: '<rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><rect x="8" y="3" width="8" height="8" rx="1.5"/>',
    oido: '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 9a2 2 0 0 1 4 0"/>', micro: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    cartas: '<rect x="3" y="6" width="11" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>', lupa: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
    corona: '<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>', pregunta: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',
    reloj: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>', flechas: '<path d="M4 12h14M13 6l6 6-6 6"/>', diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    combo: '<path d="M4 18L10 6M10 18L4 6M14 6h6M14 12h6M14 18h6"/>', espadas: '<path d="M4 20L16 8M16 8l2-4 2 2-4 2M20 20L8 8M8 8L6 4 4 6l4 2"/>', grupo: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0"/>',
    mapa: '<path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>', libro: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h7M8 11h5"/>',
    cerebro: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    espejo: '<circle cx="12" cy="10" r="6"/><path d="M12 16v5M9 21h6"/>', pieza: '<path d="M10 3h4v3a2 2 0 1 0 4 0h3v5h-3a2 2 0 1 0 0 4h3v6h-6v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4V6h6z"/>',
    lapiz: '<path d="M4 20l1-5L16 4l4 4L9 19z"/><path d="M14 6l4 4"/>', audif: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', estrella: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>', azar: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.2"/><circle cx="16" cy="16" r="1.2"/><circle cx="16" cy="8" r="1.2"/><circle cx="8" cy="16" r="1.2"/><circle cx="12" cy="12" r="1.2"/>'
  };
  var ico = function(n, cls){ return '<svg class="ev-ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || P.estrella) + "</svg>"; };
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
  var catDe = function(f){ for (var i = 0; i < CAT.length; i++) if (CAT[i][2].indexOf(f) >= 0) return CAT[i]; return CAT[0]; };

  /* tarjeta de juego estilo Elevate */
  var tile = function(j){
    return '<button class="ev-tile" data-jx-juego="' + esc(j.id) + '" style="--c:' + j.color + '" title="' + esc(j.verbo) + '"><span class="ev-art">' + arte(j.id, j.color) + "</span>" + ico(FAM[j.familia] || "estrella") + "<b>" + esc(j.nombre) + "</b><small>" + esc(j.verbo) + "</small></button>";
  };
  var grilla = function(js){
    return CAT.map(function(c){
      var g = js.filter(function(j){ return c[2].indexOf(j.familia) >= 0; }); if (!g.length) return "";
      return '<div class="ev-cat" style="--c:' + c[1] + '"><h3>' + esc(c[0]) + '</h3></div><div class="ev-grid">' + g.map(tile).join("") + "</div>";
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
    hero.innerHTML = '<span class="ev-art">' + arte(id, j.color) + '</span><div class="ev-hex">' + ico(FAM[j.familia] || "estrella") + "</div><h1>" + esc(j.nombre) + "</h1><p class=\"ev-tipo\">" + esc(j.familia) + (ub ? " · " + esc(ub.textContent) : "") + "</p>" +
      '<div class="ev-cifras"><div><b>' + esc(rec) + "</b><small>Récord</small></div><div><b>" + esc(vel || "—") + "</b><small>Velocidad</small></div><div><b>" + esc(retos || "—") + "</b><small>Retos</small></div></div>";
    var ben = BENEF[j.familia] || BENEF.Reflejos;
    hero.insertAdjacentHTML("afterend", '<div class="ev-benef"><h3>Beneficios</h3>' + ben.map(function(b, i){ return "<p>" + ico(i ? "cerebro" : FAM[j.familia] || "estrella") + "<span>" + esc(b) + "</span></p>"; }).join("") + "</div>");
    var rg = pt.querySelector(".pt5-reglas h3"); if (rg) rg.textContent = "Cómo se juega";
    if (titulo) titulo.remove(); if (verbo) verbo.remove();
  };
  /* tarjetas del Arcade (lista): ilustración y ícono de línea */
  var hubArte = function(){
    var c = document.getElementById("plxg"); if (!c || c.hidden) return;
    c.querySelectorAll(".hb-game:not([data-ev])").forEach(function(b){
      var G = window.PLXG, j = G && G.juegos && G.juegos[b.dataset.j]; if (!j) return; b.dataset.ev = "1";
      var fr = b.querySelector(".hb-fr"); if (fr) fr.innerHTML = arte(j.id, j.color) + ico(FAM[j.familia] || "estrella");
    });
  };

  /* «Juego del día» con su ilustración */
  var diaArte = function(){
    document.querySelectorAll(".jx-dia:not([data-ev])").forEach(function(b){
      var G = window.PLXG, j = G && G.juegos && G.juegos[b.dataset.jxJuego]; if (!j) return; b.dataset.ev = "1";
      b.insertAdjacentHTML("afterbegin", '<span class="ev-art">' + arte(j.id + "dia", j.color) + "</span>");
      var a = b.querySelector(".jx-dia-arte"); if (a) a.innerHTML = '<span class="ev-hex">' + ico(FAM[j.familia] || "estrella") + "</span>";
    });
  };

  /* ---------------- Inicio: «Entrenamiento de hoy» ---------------- */
  var ICO_PASO = { lec: "libro", deb: "cerebro", fue: "estrella", rep: "reloj" };
  var COL_PASO = { lec: "#2F6BFF", deb: "#8B5CF6", fue: "#16A34A", rep: "#0EA5A4" };
  var hoy = function(){
    document.querySelectorAll(".rtx .rtx-l li button:not([data-ev])").forEach(function(b, i){
      b.dataset.ev = "1"; var id = b.dataset.id || "lec", ok = b.closest("li").classList.contains("ok");
      b.insertAdjacentHTML("afterbegin", '<span class="ev-art">' + arte("paso" + id + i, COL_PASO[id] || "#2F6BFF") + "</span>" + ico(ICO_PASO[id] || "estrella", "ev-pic") + (ok ? '<span class="ev-hecho">' + ico("check") + "</span>" : ""));
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

  var pend = false;
  var pasa = function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; try { portada(); hubArte(); hoy(); sinEmojis(); diaArte(); } catch (e) {} }); };
  new MutationObserver(pasa).observe(document.body, { childList: true, subtree: true });
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-ev-azar]"); if (!b) return; e.preventDefault(); e.stopPropagation();
    var G = window.PLXG, js = G ? G.listaJuegos() : []; if (!js.length) return;
    var j = js[Math.floor(Math.random() * js.length)], t = document.createElement("button"); t.dataset.jxJuego = j.id; t.style.display = "none"; document.body.appendChild(t); t.click(); t.remove();
  }, true);
  window.PLX_EV = { arte: arte, ico: ico, tile: tile, grilla: grilla, FAM: FAM };

  /* ---------------- estilos ---------------- */
  var css = [
    "@font-face{font-family:Barlow;src:url(fonts/barlow-300.woff2) format('woff2');font-weight:300;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-400.woff2) format('woff2');font-weight:400;font-display:swap}",
    "@font-face{font-family:Barlow;src:url(fonts/barlow-500.woff2) format('woff2');font-weight:500;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-600.woff2) format('woff2');font-weight:600;font-display:swap}@font-face{font-family:Barlow;src:url(fonts/barlow-700.woff2) format('woff2');font-weight:700;font-display:swap}",
    /* tokens: plano, sobrio */
    ":root{--ev-f:Barlow,Inter,system-ui,sans-serif;--ev-azul:#2F6BFF;--ev-azul2:#1F55E0;--serif:var(--ev-f);--sans:var(--ev-f);--v4-r-xl:18px;--v4-r-lg:14px;--v4-r-md:12px;--v4-sh1:0 1px 2px rgba(14,26,58,.04);--v4-sh2:0 10px 30px -18px rgba(14,26,58,.35)}",
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
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]{background:transparent!important;color:var(--ev-azul)!important;box-shadow:none!important}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn{color:var(--v4-mute)!important}",
    /* barra de pestañas tipo Elevate: blanca, íconos de línea, activo en color */
    ".tabbar{border-radius:20px!important;box-shadow:0 0 0 1px var(--v4-line),0 10px 30px -18px rgba(14,26,58,.4)!important}",
    ".tabbar .px-navbtn[aria-current=page]{background:transparent!important;color:var(--ev-azul)!important;box-shadow:none!important}.tabbar .px-navbtn[aria-current=page] .label{font-weight:700}",
    ".tabbar .px-navbtn[aria-current=page]::before{content:'';position:absolute;top:4px;left:50%;width:22px;height:3px;margin-left:-11px;border-radius:2px;background:var(--ev-azul)}.tabbar .px-navbtn{position:relative}",
    /* tarjetas de juego (Jugar y Arcade) */
    ".ev-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:700px){.ev-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    ".ev-tile{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:grid;place-content:center;justify-items:center;gap:8px;aspect-ratio:1/1;border-radius:6px;overflow:hidden;color:#fff;text-align:center;isolation:isolate;transition:transform .2s var(--v4-e)}",
    ".ev-tile:active{transform:scale(.97)}.ev-art{position:absolute;inset:0;z-index:-1}.ev-art .ev-svg{width:100%;height:100%;display:block}",
    ".ev-tile .ev-ic{width:44px;height:44px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.25));transition:transform .4s var(--v4-spring)}.ev-tile:hover .ev-ic{transform:scale(1.1)}",
    ".ev-tile b{font-family:var(--ev-f);font-weight:600;font-size:.92rem;letter-spacing:.1em;text-transform:uppercase;text-shadow:0 1px 6px rgba(0,0,0,.3);padding:0 8px;line-height:1.15}",
    ".ev-tile small{position:absolute;left:-9999px}",
    ".ev-cat{margin:14px -16px 10px;padding:9px 16px;background:var(--c);color:#fff;text-align:center}.ev-cat h3{margin:0;font-family:var(--ev-f);font-weight:600;font-size:.82rem;letter-spacing:.16em;text-transform:uppercase}",
    "@media (min-width:700px){.ev-cat{margin-left:0;margin-right:0;border-radius:6px}}",
    ".ev-azar{all:unset;box-sizing:border-box;cursor:pointer;position:sticky;bottom:calc(92px + env(safe-area-inset-bottom));z-index:4;margin:14px auto 0;display:flex;align-items:center;justify-content:center;gap:10px;width:min(100%,360px);min-height:52px;border-radius:14px;background:var(--ev-azul);color:#fff;font-weight:600;font-size:1.05rem;letter-spacing:.02em;box-shadow:0 12px 30px -12px rgba(47,107,255,.7)}",
    ".ev-azar .ev-ic{width:22px;height:22px}",
    ".jx-pan[data-p=juegos] .jx-h,.jx-pan[data-p=juegos] .jx-chips,.jx-pan[data-p=juegos] .jx-grid{display:none!important}",
    ".jx-dia[data-ev]{background:none!important;isolation:isolate;border-radius:14px!important;box-shadow:0 14px 30px -18px rgba(14,26,58,.5)!important}.jx-dia[data-ev] > .ev-art{position:absolute;inset:0;z-index:-1}.jx-dia[data-ev] > .ev-art::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.12),rgba(0,0,0,.35))}",
    ".jx-dia[data-ev] .jx-dia-tx b{font-family:var(--ev-f)!important;font-weight:300!important;font-size:1.7rem!important;letter-spacing:.01em}.jx-dia[data-ev] .ev-hex{width:76px;height:86px}",
    /* tarjetas del Arcade */
    ".hb-game .hb-fr{position:relative!important;background:none!important;height:96px!important}.hb-game .hb-fr .ev-svg{position:absolute;inset:0;width:100%;height:100%}.hb-game .hb-fr .ev-ic{position:relative!important;width:38px;height:38px;color:#fff;max-width:none;max-height:none;filter:drop-shadow(0 2px 6px rgba(0,0,0,.3))}",
    ".hb-game{grid-template-rows:96px auto!important;border-radius:10px!important}",
    /* portada al estilo Elevate */
    ".pt5-hero[data-ev]{background:none!important;box-shadow:none!important;padding:28px 18px 0!important;border-radius:14px!important;min-height:330px;align-content:start}",
    ".pt5-hero[data-ev]::after{display:none}.pt5-hero[data-ev] > .ev-art{position:absolute;inset:0;z-index:-2}.pt5-hero[data-ev] > .ev-art::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.35))}",
    ".ev-hex{width:86px;height:96px;display:grid;place-items:center;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:rgba(255,255,255,.22);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);margin-bottom:6px;animation:pt5in .6s var(--v4-spring) both}.ev-hex .ev-ic{width:40px;height:40px;color:#fff}",
    ".pt5-hero[data-ev] h1{margin:6px 0 0;font-family:var(--ev-f);font-weight:300;font-size:clamp(2rem,9vw,2.6rem);letter-spacing:.01em;color:#fff}",
    ".ev-tipo{margin:0;color:rgba(255,255,255,.75);font-weight:500;font-size:1.05rem}",
    ".ev-cifras{display:grid;grid-template-columns:repeat(3,1fr);width:100%;margin:22px 0 0;border-top:1px solid rgba(255,255,255,.3)}.ev-cifras > div{padding:14px 4px;display:grid;gap:2px}.ev-cifras > div + div{border-left:1px solid rgba(255,255,255,.3)}",
    ".ev-cifras b{font-family:var(--ev-f);font-weight:300;font-size:1.6rem;color:#fff}.ev-cifras small{font-weight:600;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.75)}",
    ".ev-benef{display:grid;gap:12px;margin:0 0 14px;padding:16px;border-radius:14px;background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line)}",
    ".ev-benef h3,.pt5-reglas h3{margin:0;font-family:var(--ev-f)!important;font-weight:600!important;font-size:.72rem!important;letter-spacing:.16em;text-transform:uppercase;color:var(--v4-mute)!important}",
    ".ev-benef p{margin:0;display:flex;gap:14px;align-items:center;color:var(--v4-ink2);font-size:1rem}.ev-benef .ev-ic{flex:none;width:28px;height:28px;color:var(--v4-mute)}",
    /* partida: barra mínima */
    /* Boss Battle: el nombre del jefe («Professeur Chat Noir») no cabía a 375 px */
    ".bb-fila b{font-size:10.5px!important;letter-spacing:.02em!important}",
    ".plxg-hud{background:transparent!important;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none!important}.plxg-hud .plxg-ib{background:rgba(255,255,255,.12)!important;box-shadow:none!important}",
    ".plxg-tiempo{background:transparent!important;font-family:var(--ev-f)!important;font-weight:600}.plxg-pts b{font-family:var(--ev-f)!important;font-weight:600}",
    /* Inicio: entrenamiento de hoy */
    ".rtx .rtx-l{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}",
    ".rtx .rtx-l li button{position:relative;display:grid!important;grid-template-rows:96px auto;align-content:start;gap:8px!important;padding:0 0 10px!important;background:var(--v4-surface)!important;border-radius:10px!important;overflow:hidden;box-shadow:0 0 0 1px var(--v4-line)!important}",
    ".rtx .rtx-l li button > .ev-art{position:relative;inset:auto;z-index:0;height:96px;display:block}.rtx .rtx-l li button > .ev-pic{position:absolute;top:30px;left:50%;margin-left:-18px;width:36px;height:36px;color:#fff;filter:drop-shadow(0 2px 6px rgba(0,0,0,.3))}",
    ".rtx .rtx-l li button > i,.rtx .rtx-l li button > em{display:none!important}.rtx .rtx-l li button > span:not(.ev-art):not(.ev-hecho){padding:0 8px}.rtx .rtx-l li button b{white-space:normal!important;font-size:.82rem;line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    ".rtx .rtx-l li button small{display:none!important}.rtx .rtx-l li.ok b{text-decoration:none!important}",
    ".ev-hecho{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;background:#16A34A;display:grid;place-items:center}.ev-hecho .ev-ic{width:16px;height:16px;color:#fff}",
    /* íconos de línea en el diagnóstico */
    ".dg2-plan li > i .ev-ic,.dgx-4 li > i .ev-ic{width:20px;height:20px;color:var(--c,var(--v4-ink2))}.dg2-prog span > i .ev-ic{width:16px;height:16px}.dgx-bloque > i .ev-ic{width:52px;height:52px;color:#fff}.dgx-bt > i .ev-ic{width:18px;height:18px;color:var(--c)}",
    /* ejercicios: pregunta grande y opciones planas */
    "#player .q{font-family:var(--ev-f)!important;font-weight:500!important;font-size:1.35rem!important;line-height:1.35}",
    "#player .opt{box-shadow:0 0 0 1px var(--v4-line)!important;border-radius:12px!important;font-family:var(--ev-f)!important;font-weight:500!important;font-size:1.05rem!important}",
    "#player .pf .btn{box-shadow:none!important;border-radius:12px!important;font-family:var(--ev-f)!important;font-weight:600!important}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx85"; st.textContent = css; document.head.appendChild(st);
})();
