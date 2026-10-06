/* PLEX PLAY 3.9.1 — Sin emojis: un solo lenguaje de íconos
   Los módulos viejos escriben emojis como pictogramas (🎯 Misiones, 🥉 Bronce, 🐢 Más despacio, 🔒 Nivel 15…) y cada
   teléfono los pinta distinto. Aquí se cambian por los íconos de línea de la app (los de plx85, más los que faltaban).
   - Solo se toca la interfaz. El contenido queda como está: lo que va en francés, lo que escribe el estudiante, los
     chats y las opciones de los ejercicios (ahí un emoji puede ser la pregunta).
   - Un emoji solo en su caja pasa a ser su ícono; dentro de un texto, un ícono pequeño delante. Si no tiene ícono
     propio, la caja usa el de su sección y el texto se queda sin él.
   - Se procesan solo los nodos que cambian (MutationObserver), agrupados por cuadro. */
(function(){
  "use strict";
  var EV = window.PLX_EV; if (!EV || typeof EV.ico !== "function" || !window.MutationObserver) return;
  var RE; try { RE = new RegExp("(\\p{Extended_Pictographic}|[\\u{1F1E6}-\\u{1F1FF}]{2})[\\uFE0F\\u200D\\u{1F3FB}-\\u{1F3FF}]*", "gu"); } catch (e) { return; }
  /* signos que son tipografía, no pictogramas */
  var TIPO = /^[✓✔✕✖←-⇿©®™•●○★☆✕✖❤‼⁉]️?$/;

  /* ---------------- íconos que faltaban (misma rejilla 24, trazo 2, puntas redondas) ---------------- */
  var X = {
    torre: '<path d="M12 2.5v3M9.5 21.5c.3-6 1.2-11 2.5-16 1.3 5 2.2 10 2.5 16M7 21.5h10M9.9 13h4.2M9 17.5h6"/>',
    taza: '<path d="M4 9.5h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 11h1.5a2.5 2.5 0 0 1 0 5H16M7.5 3.5V6M11.5 3.5V6"/>',
    ciudad: '<path d="M3.5 21V9.5l5.5-3V21M9 21V4.5l6 3V21M15 21v-8.5l5.5 2V21M2 21h20"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    monte: '<path d="M2.5 20 9 8l4 7 2.5-4 6 9z"/>',
    luna: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z"/>',
    brote: '<path d="M12 21.5v-9M12 12.5c0-4-2.5-6.5-7-6.5 0 4 2.5 6.5 7 6.5zM12 15c0-3 2-5 6.5-5 0 3-2 5-6.5 5z"/>',
    lento: '<path d="M4.5 17.5a8.5 8.5 0 1 1 15 0M12 13.5 7.8 9.8"/><circle cx="12" cy="13.5" r="1.2"/>',
    repetir: '<path d="M4 11V9.5A3.5 3.5 0 0 1 7.5 6H19M16 3l3 3-3 3M20 13v1.5a3.5 3.5 0 0 1-3.5 3.5H5M8 21l-3-3 3-3"/>',
    altavoz: '<path d="M3 9.5h3.5L11 6v12l-4.5-3.5H3zM15 9a4 4 0 0 1 0 6M17.8 6.2a8 8 0 0 1 0 11.6"/>',
    play: '<path d="M7.5 4.5v15l11.5-7.5z"/>',
    pausa: '<path d="M8 5v14M16 5v14"/>',
    hoja: '<path d="M6 2.5h8l4 4v15H6zM14 2.5v4h4M9 12h6M9 16h6"/>',
    candado: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    medalla: '<circle cx="12" cy="15" r="5.5"/><path d="M8.5 3h7l-2 6.5h-3zM12 13v4"/>',
    gema: '<path d="M6.5 3.5h11L21.5 9 12 21 2.5 9zM2.5 9h19M9.5 3.5 8 9l4 12 4-12-1.5-5.5"/>',
    nota: '<path d="M9 18.5v-13l10-2V16"/><circle cx="6.5" cy="18.5" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
    alerta: '<path d="M12 3.5 2.5 20h19zM12 10v4.5M12 17.2v.3"/>',
    regla: '<path d="M3.5 20.5V5.5l15 15zM7.5 16.5v-3l3 3z"/>',
    globo: '<path d="M4 5.5h16v11h-9l-4.5 3.5v-3.5H4z"/>',
    brujula: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    opcion: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
    enlace: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>',
    carpeta: '<path d="M3 6.5h6l2 2.5h10v10.5H3z"/>',
    birrete: '<path d="M2 9.5 12 5l10 4.5-10 4.5zM6.5 12v4.5c1.5 1.5 3.4 2 5.5 2s4-.5 5.5-2V12M22 9.5v5"/>',
    regalo: '<path d="M3.5 8.5h17v4h-17zM5 12.5V21h14v-8.5M12 8.5V21M12 8.5c-2 0-4.5-1-4.5-3s3-2.500 4.5 3c1.500-5.500 4.500-5 4.500-3s-2.500 3-4.500 3z"/>',
    llama: '<path d="M12 21.500a6.500 6.500 0 0 1-6.500-6.500c0-3 2-4.500 3-6.500.5 1.500 1.300 2.200 2.200 2.700C10.500 8 11.500 5 14 2.500c.3 3 4.500 6 4.500 12.500a6.500 6.500 0 0 1-6.500 6.500z"/>',
    avion: '<path d="M21 3 3 10.500l7 2.500 2.500 7zM10 13l4.500-4.500"/>',
    usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    corazon: '<path d="M12 20.500C5 15.500 3 12 3 8.800A4.800 4.800 0 0 1 12 6.500a4.800 4.800 0 0 1 9 2.300c0 3.200-2 6.700-9 11.700z"/>',
    bolsa: '<path d="M5 8h14l-1 13H6zM9 8V6.500a3 3 0 0 1 6 0V8"/>',
    copo: '<path d="M12 2.500v19M3.800 7.200l16.400 9.600M20.200 7.200 3.800 16.800M9.500 4.500 12 7l2.500-2.500M9.500 19.500 12 17l2.500 2.500"/>'
  };
  var ico = function(n, cls){
    if (X[n]) return '<svg class="ev-ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + X[n] + "</svg>";
    return EV.ico(n, cls);
  };

  /* ---------------- emoji → ícono ---------------- */
  var M = {
    "🎯": "diana", "📚": "libro", "📖": "libro", "📘": "libro", "📕": "libro", "📗": "libro", "📙": "libro", "📓": "libro", "🎮": "mando", "🕹": "mando", "🎁": "regalo", "🔥": "llama",
    "🎓": "birrete", "🏅": "medalla", "🥇": "medalla", "🥈": "medalla", "🥉": "medalla", "🎖": "medalla", "💠": "gema", "💎": "gema", "♦": "gema", "👑": "corona", "🏆": "trofeo",
    "🔒": "candado", "🔐": "candado", "🎙": "micro", "🎤": "micro", "🗣": "micro", "🎧": "audif", "👂": "oido", "🔊": "altavoz", "🔉": "altavoz", "🔈": "altavoz", "📢": "altavoz",
    "🐢": "lento", "🐌": "lento", "🔁": "repetir", "🔄": "repetir", "🔂": "repetir", "↩": "repetir", "▶": "play", "⏯": "play", "⏸": "pausa", "⏱": "reloj", "⏰": "reloj", "⏳": "reloj", "⌛": "reloj", "🕐": "reloj",
    "✍": "lapiz", "✏": "lapiz", "📝": "lapiz", "🖊": "lapiz", "📄": "hoja", "📃": "hoja", "📋": "hoja", "🗒": "hoja", "📰": "hoja", "🃏": "cartas", "🎴": "cartas", "❓": "pregunta", "❔": "pregunta",
    "🎵": "nota", "🎶": "nota", "🎼": "nota", "⚡": "rayo", "✅": "check", "☑": "check", "⚠": "alerta", "❗": "alerta", "🚨": "alerta", "📐": "regla", "📏": "regla", "💬": "globo", "🗨": "globo", "👋": "globo",
    "🧭": "brujula", "🔘": "opcion", "🔗": "enlace", "🗂": "carpeta", "📁": "carpeta", "📂": "carpeta", "🔍": "lupa", "🔎": "lupa", "🕵": "lupa", "🧩": "pieza", "🪞": "espejo", "🧠": "cerebro",
    "🐣": "brote", "🌱": "brote", "🗼": "torre", "☕": "taza", "🏙": "ciudad", "🏢": "ciudad", "🏠": "ciudad", "🏖": "sol", "☀": "sol", "🌞": "sol", "⛰": "monte", "🏔": "monte", "🌙": "luna", "🌃": "luna",
    "🎭": "mascara", "🇫🇷": "bandera", "🚩": "bandera", "🏁": "bandera", "🗺": "mapa", "📍": "mapa", "🧳": "avion", "✈": "avion", "🚀": "avion", "🎉": "estrella", "⭐": "estrella", "🌟": "estrella", "✨": "estrella",
    "💡": "estrella", "⚔": "espadas", "🤝": "grupo", "👥": "grupo", "👤": "usuario", "🧑": "usuario", "❤": "corazon", "💙": "corazon", "🧺": "bolsa", "🛒": "bolsa", "🛍": "bolsa", "❄": "copo", "🍎": "fruta", "🍒": "fruta",
    "💣": "reloj", "🎰": "azar", "🎲": "azar", "🏃": "flechas", "👹": "corona"
  };
  var limpio = function(e){ return e.replace(/[️‍]|\uD83C[\uDFFB-\uDFFF]/g, ""); };
  var de = function(e){ return M[e] || M[limpio(e)] || null; };
  /* la caja de un emoji sin ícono propio toma el de su sección */
  var CAJA = [[".am-emo", "libro"], [".tu-i", "globo"], [".av-me", "mapa"], [".fc-empty", "libro"], [".lg-i,.v1-ri", "medalla"], [".ti", "estrella"]];

  /* ---------------- dónde sí y dónde no ---------------- */
  var ZONA = "#view, #player, #plxg, #plx1v1, .gmodal, .toast, .kq, #topbar, .pm";
  var NO = "script, style, svg, textarea, input, select, [contenteditable], [data-sx], .sx-no, .tu-b, .tu-chat, .opt, .tok, .chipb, .mbtn, .dtok, .q, .ask, .ctx, .kq-op, .kq-q, .plxg-area, .plxg-campo, .wb-pal, .ev-ic, .rkx-f, .rkx-pod, .pi";

  var cambia = function(t){
    var s = t.nodeValue; if (!s || s.length > 400) return;
    RE.lastIndex = 0; if (!RE.test(s)) return;
    var p = t.parentNode; if (!p || p.nodeType !== 1 || !p.closest(ZONA) || p.closest(NO)) return;
    /* el francés es contenido. El cuerpo de la lección va entero en lang=fr: ahí solo se toca la teoría y las herramientas */
    var l = p.closest("[lang]"), cuerpo = p.closest(".pbody");
    if (l && /^fr/.test(l.lang) && l !== cuerpo) return;
    if (cuerpo && !p.closest(".theory, .plx-tools, .plx-ess, .plx-simple, .plx-kinds, .tsec-h, .lx-pcard, .pf, .plx-tbtn")) return;
    RE.lastIndex = 0;
    var solo = limpio(s.trim()), frag = document.createDocumentFragment(), ult = 0, m, hubo = false;
    /* un emoji solo en su caja */
    var unico = s.trim().match(RE);
    if (unico && unico.length === 1 && unico[0] === s.trim() && !TIPO.test(solo)) {
      var n = de(unico[0]);
      if (!n) for (var i = 0; i < CAJA.length && !n; i++) if (p.matches(CAJA[i][0])) n = CAJA[i][1];
      if (!n) n = "estrella";
      var w = document.createElement("span"); w.className = "sx sx-solo"; w.dataset.sx = "1"; w.innerHTML = ico(n, "sx-ic");
      p.replaceChild(w, t); p.classList.add("sx-caja"); return;
    }
    RE.lastIndex = 0;
    while ((m = RE.exec(s))) {
      if (TIPO.test(limpio(m[0]))) continue;
      hubo = true;
      var antes = s.slice(ult, m.index), nn = de(m[0]);
      ult = m.index + m[0].length;
      if (nn) {
        if (antes) frag.appendChild(document.createTextNode(antes));
        var sp = document.createElement("span"); sp.className = "sx sx-txt"; sp.dataset.sx = "1"; sp.innerHTML = ico(nn, "sx-ic"); frag.appendChild(sp);
        /* el espacio que seguía al emoji lo pone el margen del ícono */
        if (s.charAt(ult) === " ") ult++;
      } else {
        /* sin ícono: se va el emoji y uno de los espacios que lo rodeaban */
        if (antes.slice(-1) === " " && (s.charAt(ult) === " " || ult >= s.length)) antes = antes.slice(0, -1);
        else if (!antes && s.charAt(ult) === " ") ult++;
        if (antes) frag.appendChild(document.createTextNode(antes));
      }
    }
    if (!hubo) return;
    if (ult < s.length) frag.appendChild(document.createTextNode(s.slice(ult)));
    p.replaceChild(frag, t);
  };
  var recorre = function(raiz){
    if (!raiz) return;
    if (raiz.nodeType === 3) return cambia(raiz);
    if (raiz.nodeType !== 1 || !raiz.isConnected) return;
    var tw = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT), L = [], n;
    while ((n = tw.nextNode())) { RE.lastIndex = 0; if (RE.test(n.nodeValue)) L.push(n); }
    for (var i = 0; i < L.length; i++) try { cambia(L[i]); } catch (e) {}
  };

  var cola = [], pend = false;
  var pasa = function(){
    pend = false; var L = cola; cola = [];
    for (var i = 0; i < L.length; i++) try { recorre(L[i]); } catch (e) {}
  };
  var pide = function(n){ cola.push(n); if (!pend) { pend = true; requestAnimationFrame(pasa); } };
  new MutationObserver(function(rs){
    for (var i = 0; i < rs.length; i++) {
      var r = rs[i];
      if (r.type === "characterData") { pide(r.target); continue; }
      for (var j = 0; j < r.addedNodes.length; j++) { var a = r.addedNodes[j]; if (a.nodeType === 3 || (a.nodeType === 1 && !a.dataset.sx)) pide(a); }
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
  pide(document.body);

  var oscuro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ return p + " " + s.trim(); }).join(","); };
    return f(":root[data-theme=dark]") + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(":root:not([data-theme=light])") + "{" + decl + "}}";
  };
  var css = [
    ".sx{display:inline-flex;align-items:center;justify-content:center;vertical-align:-.16em;line-height:1}.sx .sx-ic{width:1.08em;height:1.08em;stroke-width:2;flex:none;filter:none;--ico-a:var(--ev-oro,#FFD200)}",
    ".sx-txt{margin-right:.38em}.sx-solo{vertical-align:middle}.sx-solo .sx-ic{width:1em;height:1em;min-width:20px;min-height:20px}.am-emo.big .sx-ic{width:36px;height:36px}",
    /* cajas que eran un emoji grande: el ícono toma el azul de la app (sobre fondo de color, blanco) */
    ".am-emo.sx-caja,.tu-i.sx-caja,.av-me.sx-caja,.fc-empty > .sx-caja,.lg-i.sx-caja,.v1-ri.sx-caja,.ti.sx-caja{color:var(--ev-azul,#2F6BFF)}",
    ".pa-i.sx-caja{color:#fff}.pa-i.sx-caja .sx-ic{--ico-a:#FFD200}",
    ".snd-slow .sx-ic,.snd-ic .sx-ic,.au-barra .sx-ic{width:1.25em;height:1.25em}",
    oscuro(".am-emo.sx-caja,.tu-i.sx-caja,.av-me.sx-caja,.fc-empty > .sx-caja,.lg-i.sx-caja,.v1-ri.sx-caja,.ti.sx-caja", "color:#8FB4FF")
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx88"; st.textContent = css; document.head.appendChild(st);
})();
