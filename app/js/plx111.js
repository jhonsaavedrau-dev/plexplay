/* PLEX PLAY 4.38.0 — Type It: el juego de teclado (idea tomada de Epop, con la identidad de PLEX)
   - La frase en francés trae un hueco dentro y se completa ESCRIBIENDO con un teclado propio, siempre a la vista
     (no se abre el del teléfono): fila de acentos, QWERTY, apóstrofo, guion, espacio, borrar y «Listo». Cada tecla
     suena (tecla mecánica generada) y vibra un poco. Lo escrito aparece en la burbuja y en el hueco. En el PC
     también sirve el teclado físico.
   - La corrección va por grados, como un profesor:
       1. solo falla el acento        → «Casi: revisa el acento» y se intenta otra vez sin castigo;
       2. faltan o sobran 1–2 letras  → «Hay 2 letras mal: rec_ _struit» (máscara) y otro intento;
       3. la raíz está bien, la forma no (concordancia o conjugación: colombien / colombienne) → «Fíjate en la forma»;
       4. otra palabra                → «Esa no va aquí» y la primera letra como pista.
     El primer error (salvo el de acento) rompe el combo; el segundo quita una vida y muestra la corrección y el «why».
   - «Pista» destapa la letra siguiente (el acierto ya no da puntos de rapidez) y «No sé» muestra la respuesta sin
     quitar vida. Al acertar suena la frase completa en francés.
   - Manzana en 3D (vendor/manzana3d, three.js cargado solo al abrir el juego) mira lo que escribes, asiente con
     cada letra y reacciona: casi, error, acierto. Sin WebGL queda el Manzana 2D de siempre.
   - Retos: «fill» y «choice» con hueco (___) de las lecciones, y en vocabulario la frase de ejemplo con la palabra
     tapada y su traducción arriba. Todo el tiempo va por tick (la pausa lo congela). */
(function(){
  "use strict";
  var G = window.PLXG; if (!G || !G.sesion) return;
  var esc = G.esc, norm = G.norm, plano = G.plano;

  /* ---------------- texto ---------------- */
  var nf = function(s){ return String(s || "").normalize("NFC").replace(/[’`´]/g, "'").replace(/\s+/g, " ").trim().toLowerCase(); };
  var sinAcento = function(s){ return nf(s).replace(/œ/g, "oe").replace(/æ/g, "ae").normalize("NFD").replace(/[̀-ͯ]/g, ""); };
  var lev = function(a, b){
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  };
  /* máscara: lo que coincide al principio y al final se ve; el resto son rayas (litt_ _ ) */
  var mascara = function(v, w){
    var p = 0; while (p < v.length && p < w.length && v[p] === w[p]) p++;
    var s = 0; while (s < v.length - p && s < w.length - p && v[v.length - 1 - s] === w[w.length - 1 - s]) s++;
    var mid = w.length - p - s;
    if (mid <= 0) { mid = 1; if (s) s--; else p = Math.max(0, p - 1); }
    return w.slice(0, p) + new Array(mid + 1).join("_") + w.slice(w.length - s);
  };
  var prefijo = function(a, b){ var i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };

  /* el diagnóstico de una respuesta: ok | acento | letras | forma | otra | no */
  var diagnostica = function(valor, reto){
    var v = nf(valor), acepta = reto.acepta.map(nf), w = acepta[0];
    if (!v) return { tipo: "vacio" };
    if (acepta.indexOf(v) >= 0) return { tipo: "ok" };
    for (var i = 0; i < acepta.length; i++) if (sinAcento(v) === sinAcento(acepta[i])) return { tipo: "acento", w: acepta[i] };
    var otra = (reto.otras || []).map(nf).indexOf(v) >= 0;
    var a = sinAcento(v), b = sinAcento(w), cp = prefijo(a, b), corto = Math.min(a.length, b.length);
    var raiz = cp >= 3 && cp >= corto * 0.5 && w.indexOf(" ") < 0;
    /* otra forma de la misma palabra: una opción del ejercicio con la misma raíz, o una terminación típica cambiada */
    var FIN = /^(e|s|es|nt|ent|ons|ez|ais|ait|aient|ai|as|a|ont|é|ée|és|ées|er|ir|re|ra|rai|ras|ront|eux|euse|if|ive|al|aux|ien|ienne|iens|iennes|on|onne|el|elle)?$/;
    if (raiz && (otra || (FIN.test(a.slice(cp)) && FIN.test(b.slice(cp))))) return { tipo: "forma", otra: otra };
    var d = lev(v, w);
    if (w.length >= 3 && d <= Math.max(1, Math.floor(w.length / 4))) return { tipo: "letras", n: d, mask: mascara(v, w) };
    if (raiz) return { tipo: "forma", otra: otra };
    return { tipo: otra ? "otra" : "no" };
  };
  G.tyDiagnostica = diagnostica;   /* para las pruebas */

  /* ---------------- retos ---------------- */
  var itemDe = function(key){ try { return key && ITEMS[key] ? ITEMS[key].it : null; } catch (e) { return null; } };
  var escribible = function(w){ return typeof w === "string" && /^[\p{L}'’\- ]{1,24}$/u.test(w.trim()) && w.trim().split(/\s+/).length <= 3; };
  var ARTICULO = /^(le|la|les|l'|l’|un|une|des|du|de la|de l')\s*/i;
  var retosTY = function(base){
    var out = [], vistos = {};
    base.forEach(function(r){
      if (r.tipo !== "uno") return;
      var x = null;
      if (r.voc) {
        var v = r.voc, nucleo = String(v.fr || "").replace(ARTICULO, "").trim();
        if (!escribible(nucleo)) return;
        var ex = String(v.ex || ""), re = new RegExp("(^|[^\\p{L}'’-])(" + nucleo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![\\p{L}])", "iu"), m = ex.match(re);
        if (m && v.exes) {
          var pos = m.index + m[1].length;
          x = { q: ex.slice(0, pos) + "___" + ex.slice(pos + m[2].length), acepta: [m[2]], es: v.exes, clave: String(v.es || "").split(/[,;]/)[0].trim(), ask: "Escribe la palabra que falta", audio: ex };
        } else x = { q: "___", acepta: [nucleo], es: v.es, clave: "", ask: "Escribe en francés", audio: v.fr };
        Object.assign(x, { tipo: "teclea", why: r.why, hab: "vocab", key: null, lessonId: "", voc: v, otras: [] });
      } else {
        var it = itemDe(r.key); if (!it || !/_{2,}/.test(it.q || "")) return;
        if (/<\/?[a-z]/i.test(it.q) || (it.q.match(/_{2,}/g) || []).length !== 1) return;
        /* si la frase del hueco está en español, la palabra no es francesa: no se escribe */
        if (/[áíóúñ¿¡]/.test(String(it.q).replace(/«[^»]*»/g, "").replace(/\([^)]*\)/g, ""))) return;
        var acepta = it.k === "fill" ? (it.acc || []).slice() : it.k === "choice" && it.o ? [it.o[it.a]] : [];
        if (!acepta.length || !acepta.every(escribible)) return;
        var otras = it.k === "choice" ? it.o.filter(function(o, i){ return i !== it.a; }) : [];
        x = { tipo: "teclea", ask: plano(it.ask || "").replace(/^Elige\b/i, "Escribe").replace(/^Completa eligiendo\b/i, "Completa escribiendo") || "Completa la frase",
          ctx: plano(it.ctx || ""), q: plano(it.q), acepta: acepta, otras: otras, why: it.why || r.why, hab: r.hab, key: r.key, lessonId: r.lessonId, oro: r.oro };
      }
      var k = nf(x.acepta[0]) + "|" + x.q; if (vistos[k]) return; vistos[k] = 1;
      out.push(x);
    });
    return out;
  };

  /* ---------------- Manzana 3D (se carga una vez, al abrir el juego) ---------------- */
  var modulo3D = null;
  var carga3D = function(){
    if (!modulo3D) modulo3D = import(new URL("vendor/manzana3d/manzana3d.js?v=1", document.baseURI).href).catch(function(){ modulo3D = null; return null; });
    return modulo3D;
  };

  /* ---------------- sonido de tecleo ----------------
     Tecla mecánica generada con Web Audio: un clic agudo muy corto + un «toc» grave que cae de tono.
     Cada tecla varía un poco (no suena a grabación repetida) y el tono sube apenas con cada letra de la
     palabra, así escribir se siente como avanzar. Espacio más grave, borrar más seco, «Listo» más lleno.
     Respeta el interruptor de sonido de los juegos (PLXG.aj.sonido). */
  var AT = null, RUIDO = null;
  var ctxT = function(){
    if (!G.aj || !G.aj.sonido) return null;
    try {
      if (!AT) AT = new (window.AudioContext || window.webkitAudioContext)();
      if (AT.state === "suspended") AT.resume();
      if (!RUIDO) { var n = Math.floor(AT.sampleRate * 0.03); RUIDO = AT.createBuffer(1, n, AT.sampleRate); var d = RUIDO.getChannelData(0); for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3); }
    } catch (e) { AT = null; }
    return AT;
  };
  var tecleo = function(tipo, n){
    var a = ctxT(); if (!a) return;
    try {
      var t = a.currentTime + 0.002, var1 = 1 + (Math.random() - 0.5) * 0.12, sube = Math.pow(1.025, Math.min(n || 0, 14));
      var grave = tipo === "espacio" ? 0.62 : tipo === "borra" ? 1.25 : tipo === "listo" ? 0.8 : 1;
      var sal = a.createGain(); sal.gain.value = tipo === "borra" ? 0.55 : 0.8; sal.connect(a.destination);
      /* clic */
      var s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
      s.buffer = RUIDO; s.playbackRate.value = var1 * (tipo === "borra" ? 1.3 : 1);
      f.type = "bandpass"; f.frequency.value = 3800 * var1 * grave; f.Q.value = 0.9;
      g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
      s.connect(f); f.connect(g); g.connect(sal); s.start(t);
      /* toc */
      var o = a.createOscillator(), go = a.createGain(), f0 = 230 * var1 * grave * sube;
      o.type = "triangle"; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 0.55, t + 0.05);
      go.gain.setValueAtTime(0.0001, t); go.gain.exponentialRampToValueAtTime(tipo === "listo" ? 0.42 : 0.3, t + 0.004); go.gain.exponentialRampToValueAtTime(0.0001, t + (tipo === "espacio" || tipo === "listo" ? 0.11 : 0.07));
      o.connect(go); go.connect(sal); o.start(t); o.stop(t + 0.14);
      /* «Listo» y espacio: un golpe extra de muelle */
      if (tipo === "listo" || tipo === "espacio") {
        var o2 = a.createOscillator(), g2 = a.createGain();
        o2.type = "sine"; o2.frequency.setValueAtTime(tipo === "listo" ? 520 * var1 : 95, t + 0.01);
        g2.gain.setValueAtTime(0.0001, t + 0.01); g2.gain.exponentialRampToValueAtTime(0.12, t + 0.016); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
        o2.connect(g2); g2.connect(sal); o2.start(t + 0.01); o2.stop(t + 0.12);
      }
    } catch (e) {}
  };

  /* ---------------- motor ---------------- */
  var FILAS = [
    ["é", "è", "ê", "ë", "à", "â", "ç", "î", "ô", "û"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "'"],
    ["z", "x", "c", "v", "b", "n", "m", "-", "⌫"],
    ["ù", "œ", "ï", "␣", "✓"]
  ];
  var OIR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var BORRA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5l5 5M17 9.5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var tecla = function(k){
    if (k === "⌫") return '<button type="button" class="ty-k ty-k-borra" data-ty-k="borra" aria-label="Borrar">' + BORRA + "</button>";
    if (k === "␣") return '<button type="button" class="ty-k ty-k-esp" data-ty-k="espacio" aria-label="Espacio">espacio</button>';
    if (k === "✓") return '<button type="button" class="ty-k ty-k-listo" data-ty-k="listo">Listo</button>';
    return '<button type="button" class="ty-k' + (/[^a-z'\-]/.test(k) ? " ty-k-ac" : "") + '" data-ty-k="' + k + '">' + k + "</button>";
  };

  function motor(zona, s){
    var reto = null, t = 0, T = 0, hecho = false, cierre = -1, fallos = 0, acentoGratis = true, pistas = 0, vivo = true, M3 = null, valor = "", repite = null;
    zona.innerHTML =
      '<div class="ty">' +
        '<div class="ty-reloj"><i></i></div>' +
        '<div class="ty-fila"><p class="ty-fb" aria-live="polite"></p><div class="ty-mz" aria-hidden="true"><canvas></canvas></div></div>' +
        '<div class="ty-abajo">' +
          '<div class="ty-barra">' +
            '<button type="button" class="ty-b" data-ty="pista">Pista</button>' +
            '<p class="ty-burbuja" lang="fr" aria-live="polite"><span class="ty-txt"></span><i class="ty-caret" aria-hidden="true"></i></p>' +
            '<button type="button" class="ty-b ty-oir" data-ty="oir" aria-label="Escuchar la frase">' + OIR + "</button>" +
            '<button type="button" class="ty-b" data-ty="nose">No sé</button>' +
          "</div>" +
          '<div class="ty-teclado" role="group" aria-label="Teclado">' + FILAS.map(function(f, i){ return '<div class="ty-tf ty-tf' + i + '">' + f.map(tecla).join("") + "</div>"; }).join("") + "</div>" +
        "</div>" +
      "</div>";
    s.el.classList.add("ty-on");
    var raiz = zona.querySelector(".ty"), fb = zona.querySelector(".ty-fb"), txt = zona.querySelector(".ty-txt"), burbuja = zona.querySelector(".ty-burbuja"),
      reloj = zona.querySelector(".ty-reloj i"), lienzo = zona.querySelector(".ty-mz canvas"), teclado = zona.querySelector(".ty-teclado");

    /* Manzana 3D: si carga, va junto a la corrección; si no, el Manzana 2D de siempre en el mismo lugar */
    carga3D().then(function(mod){
      if (!vivo) return;
      if (mod && mod.hayWebGL()) {
        try { M3 = mod.crearManzana(lienzo, { lejos: 1.02 }); M3.mirar(-0.55, -0.45); s.el.classList.add("ty-3d"); return; } catch (e) { M3 = null; }
      }
      var img = document.createElement("img"); img.alt = ""; img.src = G.mzImg ? G.mzImg("idle") : ""; lienzo.replaceWith(img);
    });
    var mz = function(e){ if (M3) M3.estado(e); };

    var coloca = function(){ raiz.style.paddingTop = (s.techo() + 10) + "px"; };
    var hueco = function(){ return s.el.querySelector(".ty-hueco"); };
    var pinta = function(estado){
      txt.textContent = valor;
      burbuja.classList.toggle("lleno", !!valor);
      burbuja.className = "ty-burbuja" + (valor ? " lleno" : "") + (estado ? " " + estado : "");
      var h = hueco(); if (!h || !reto) return;
      h.textContent = valor || " ";
      h.className = "ty-hueco" + (valor ? " lleno" : "") + (estado ? " " + estado : "");
    };
    var banner = function(){
      var q = esc(reto.q), ancho = Math.max(3, reto.acepta[0].length * 0.62 + 0.8).toFixed(1);
      /* el hueco va pegado a la puntuación que lo sigue: así el punto no queda solo en otra línea */
      q = q.replace(/_{2,}([^\s\p{L}\d]*)/u, function(m, p){ return '<span class="ty-pega"><span class="ty-hueco" style="min-width:' + ancho + 'em"> </span>' + p + "</span>"; });
      var es = reto.es ? esc(reto.es) : "";
      if (es && reto.clave) { var c = esc(reto.clave), i = es.toLowerCase().indexOf(c.toLowerCase()); if (i >= 0) es = es.slice(0, i) + "<b>" + es.slice(i, i + c.length) + "</b>" + es.slice(i + c.length); }
      s.banner('<p class="plxg-ask">' + esc(reto.ask || "Completa la frase") + "</p>" +
        (reto.ctx ? '<p class="ty-ctx">' + esc(reto.ctx) + "</p>" : "") +
        (es ? '<p class="ty-es">' + es + "</p>" : "") +
        '<p class="plxg-q ty-q" lang="fr">' + q + "</p>", { oro: reto.oro });
      coloca();
    };
    var dice = function(html, tono){ fb.innerHTML = html || ""; fb.className = "ty-fb" + (tono ? " " + tono : ""); };
    var frase = function(){ try { return G.completa(reto.q, reto.acepta[0]); } catch (e) { return reto.acepta[0]; } };

    var jugar = function(r){
      reto = r; t = 0; hecho = false; cierre = -1; fallos = 0; acentoGratis = true; pistas = 0; valor = "";
      var largo = r.acepta[0].length;
      T = s.dir.t() * 2.2 + 0.8 * largo + 5 + (r.ctx ? 2 : 0);
      raiz.classList.remove("ty-listo", "ty-mal", "ty-fuera");
      dice(r.voc && r.q === "___" ? "Escríbela en francés." : "Escribe lo que va en el hueco.", "");
      banner(); pinta();
      mz("reposo");
      if (r.voc && r.q === "___" && r.audio) try { speak(r.audio); } catch (e) {}
    };
    var centro = function(){ var a = burbuja.getBoundingClientRect(), b = zona.getBoundingClientRect(); return { x: a.left - b.left + a.width / 2, y: a.top - b.top }; };
    var sacude = function(){ raiz.classList.remove("ty-mal"); void raiz.offsetWidth; raiz.classList.add("ty-mal"); };
    var activo = function(){ return reto && !hecho && s.estado() === "juega"; };

    /* ---- teclas ---- */
    var escribe = function(k){
      if (!activo()) return false;
      if (k === "borra") { if (!valor) return false; valor = valor.slice(0, -1); tecleo("borra", valor.length); }
      else if (k === "espacio") { if (!valor || / $/.test(valor) || valor.length >= 30) return false; valor += " "; tecleo("espacio", valor.length); }
      else { if (valor.length >= 30) return false; valor += k; tecleo("letra", valor.length); }
      G.vibra && G.vibra(6);
      if (fb.classList.contains("mal") || fb.classList.contains("casi") || fb.classList.contains("aviso")) dice("", "");
      pinta();
      if (M3) M3.tecla();
      return true;
    };
    var hunde = function(b){ if (!b) return; b.classList.remove("on"); void b.offsetWidth; b.classList.add("on"); setTimeout(function(){ b.classList.remove("on"); }, 110); };
    var botonDe = function(k){ return teclado.querySelector('[data-ty-k="' + (k === "'" ? "\\'" : k) + '"]'); };

    var comprueba = function(){
      if (!activo()) return;
      G.despiertaAudio && G.despiertaAudio();
      var dx = diagnostica(valor, reto), c = centro();
      if (dx.tipo === "vacio") { dice("Escribe algo primero.", "aviso"); return; }
      tecleo("listo", 0);
      if (dx.tipo === "ok") {
        hecho = true;
        s.acierto(reto, { rapidez: pistas ? 0 : Math.max(0, 1 - t / T), x: c.x, y: c.y, final: true });
        pinta("ok"); raiz.classList.add("ty-listo");
        dice("<b>¡Bien!</b> " + esc(frase()), "ok");
        mz(fallos === 0 && !pistas ? "celebrar" : "acierto");
        try { speak(frase()); } catch (e) {}
        cierre = 1.4;
        return;
      }
      if (dx.tipo === "acento" && acentoGratis) {
        acentoGratis = false;
        dice("<b>Casi.</b> Revisa el acento: <span class=\"ty-mask\">" + esc(mascaraAcento(valor, dx.w).split("").join(" ")) + "</span>", "casi");
        pinta("casi"); mz("casi"); G.vibra && G.vibra(25);
        return;
      }
      fallos++;
      var msg = dx.tipo === "acento" ? "<b>Casi.</b> El acento sigue mal."
        : dx.tipo === "letras" ? "<b>Casi.</b> " + (dx.n === 1 ? "Hay 1 letra mal" : "Hay " + dx.n + " letras mal") + ": <span class=\"ty-mask\">" + esc(dx.mask.split("").join(" ")) + "</span>"
        : dx.tipo === "forma" ? "<b>Vas bien</b>, pero fíjate en la forma: " + (/\([^)]*\)\s*$/.test(reto.q) ? "conjúgala o concuérdala como pide la frase." : "concordancia (masculino o femenino, singular o plural) o conjugación.")
        : dx.tipo === "otra" ? "<b>«" + esc(valor.trim()) + "»</b> no va aquí. Lee otra vez la frase: empieza por <b>" + esc(reto.acepta[0].charAt(0)) + "</b>."
        : "<b>Esa no es.</b> Pista: empieza por <b>" + esc(reto.acepta[0].charAt(0)) + "</b>.";
      if (fallos < 2) {
        var tono = dx.tipo === "no" || dx.tipo === "otra" ? "mal" : "casi";
        dice(msg, tono); pinta(tono); sacude();
        s.penaliza(c.x, c.y); G.vibra && G.vibra(40);
        mz(tono === "mal" ? "error" : "casi");
        return;
      }
      hecho = true; pinta("mal"); sacude(); mz("error");
      s.fallo(reto, { mal: valor.trim(), etMal: "Escribiste", etiqueta: "Se escribe", bien: reto.acepta[0], why: reto.why })
        .then(function(){ limpia(); s.listo(); });
    };
    var mascaraAcento = function(v, w){ v = nf(v); return w.split("").map(function(ch, i){ return v[i] === ch ? ch : "_"; }).join(""); };
    var pista = function(){
      if (!activo()) return;
      var w = reto.acepta[0], p = prefijo(nf(valor), nf(w));
      if (p >= w.length - 1) { dice("Ya casi la tienes entera: escríbela tú.", "aviso"); return; }
      pistas++;
      valor = w.slice(0, p + 1);
      dice("Pista: así empieza. Ya no suma puntos de rapidez.", "aviso");
      tecleo("letra", valor.length); pinta(); mz("escribiendo"); M3 && M3.tecla();
    };
    var noSe = function(){
      if (!activo()) return;
      hecho = true; mz("dormir");
      s.escapa(reto, { titulo: "Así se escribe", etiqueta: "Se escribe", bien: reto.acepta[0], why: reto.why })
        .then(function(){ limpia(); s.listo(); });
    };
    var limpia = function(){ reto = null; valor = ""; pinta(); dice(""); raiz.classList.remove("ty-listo", "ty-mal"); reloj.style.transform = "scaleX(1)"; reloj.parentNode.classList.remove("poco"); };
    var oir = function(){ if (!reto) return; try { speak(reto.voc && reto.q === "___" ? reto.audio : frase().replace(new RegExp(reto.acepta[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "…")); } catch (x) {} };

    /* ---- entrada táctil: al bajar el dedo (sin esperar el clic) ---- */
    var paraRepite = function(){ if (repite) { clearTimeout(repite.t); clearInterval(repite.i); repite = null; } };
    var abajo = function(e){
      var b = e.target.closest && e.target.closest("[data-ty-k],[data-ty]"); if (!b) return;
      e.preventDefault();
      G.despiertaAudio && G.despiertaAudio(); ctxT();
      if (b.hasAttribute("data-ty")) { var q = b.getAttribute("data-ty"); hunde(b); if (q === "pista") pista(); else if (q === "nose") noSe(); else if (q === "oir") oir(); return; }
      var k = b.getAttribute("data-ty-k");
      hunde(b);
      if (k === "listo") { comprueba(); return; }
      escribe(k);
      /* borrar se repite si se deja apretado */
      if (k === "borra") { paraRepite(); repite = { t: setTimeout(function(){ repite && (repite.i = setInterval(function(){ if (!escribe("borra")) paraRepite(); }, 70)); }, 380) }; }
    };
    zona.addEventListener("pointerdown", abajo);
    window.addEventListener("pointerup", paraRepite); window.addEventListener("pointercancel", paraRepite);
    var sinMenu = function(e){ if (e.target.closest && e.target.closest(".ty-k")) e.preventDefault(); };
    s.el.addEventListener("contextmenu", sinMenu);
    window.addEventListener("resize", coloca);

    return {
      jugar: jugar,
      tick: function(dt){
        if (!reto) return;
        if (cierre >= 0) { cierre -= dt; if (cierre < 0) { limpia(); s.listo(); } return; }
        if (hecho || !dt) return;
        t += dt;
        reloj.style.transform = "scaleX(" + Math.max(0, 1 - t / T).toFixed(3) + ")";
        reloj.parentNode.classList.toggle("poco", t / T > .75);
        if (t >= T) {
          hecho = true; mz("error");
          s.escapa(reto, { titulo: "Se acabó el tiempo", etiqueta: "Se escribe", bien: reto.acepta[0], why: reto.why })
            .then(function(){ limpia(); s.listo(); });
        }
      },
      /* teclado físico (PC): letras, acentos del sistema, borrar y Enter */
      tecla: function(e){
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        var k = e.key;
        if (k === "Enter") { e.preventDefault(); hunde(botonDe("listo")); comprueba(); return; }
        if (k === "Backspace") { e.preventDefault(); hunde(botonDe("borra")); escribe("borra"); return; }
        if (k === " ") { e.preventDefault(); hunde(botonDe("espacio")); escribe("espacio"); return; }
        if (k && k.length === 1 && /[\p{L}'’\-]/u.test(k)) { e.preventDefault(); var l = k.toLowerCase().replace("’", "'"); hunde(botonDe(l)); escribe(l); }
      },
      pausa: function(){ paraRepite(); if (M3) M3.velocidad = 0; },
      sigue: function(){ if (M3) M3.velocidad = 1; },
      destruye: function(){
        vivo = false; paraRepite();
        zona.removeEventListener("pointerdown", abajo);
        window.removeEventListener("pointerup", paraRepite); window.removeEventListener("pointercancel", paraRepite);
        window.removeEventListener("resize", coloca); s.el.removeEventListener("contextmenu", sinMenu);
        if (M3) { try { M3.destruir(); } catch (e) {} M3 = null; }
        s.el.classList.remove("ty-on", "ty-3d");
      },
      depura: function(){
        return { reto: reto && { q: reto.q, acepta: reto.acepta, otras: reto.otras, es: reto.es || "" }, valor: valor, hueco: (hueco() || {}).textContent || "",
          fb: fb.textContent, fallos: fallos, pistas: pistas, hecho: hecho, t: t, T: T, m3d: !!M3, estado3d: M3 ? M3.actual : "",
          teclas: [].map.call(teclado.querySelectorAll(".ty-k"), function(b){ var r = b.getBoundingClientRect(); return { k: b.getAttribute("data-ty-k"), x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2), w: Math.round(r.width), h: Math.round(r.height) }; }) };
      }
    };
  }
  /* ---------------- registro ---------------- */
  var deco = function(){
    return '<svg viewBox="0 0 72 56" aria-hidden="true">' + [["é", 4, "#FFD200"], ["t", 26, "#fff"], ["é", 48, "#fff"]].map(function(l, i){
      return '<g><rect x="' + l[1] + '" y="' + (i === 1 ? 10 : 16) + '" width="20" height="22" rx="6" fill="' + l[2] + '"/><text x="' + (l[1] + 10) + '" y="' + (i === 1 ? 26 : 32) + '" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-weight="800" font-size="14" fill="#0B2D74">' + l[0] + "</text></g>";
    }).join("") + '<rect x="6" y="44" width="60" height="6" rx="3" fill="#93C5FD"/></svg>';
  };
  G.registrar({
    id: "ty", nombre: "Type It", verbo: "Escribe la palabra que falta", familia: "Construir", color: "#2F6BFF", orden: 27, vocab: true,
    retos: function(alc){ return retosTY(G.retosDe(alc)); },
    retosCarnet: function(track, nivel){ return retosTY(G.retosCarnet(track, nivel)).map(function(r){ r.oro = true; return r; }); },
    apto: function(r){ return r.tipo === "teclea"; },
    deco: deco,
    reglas: function(alc){
      return [
        (G.aj.sinTiempo ? "Sin tiempo: " + (alc.repaso ? 10 : 15) + " frases" : alc.seg + " segundos") + " y 3 vidas.",
        "Escribe con el teclado de la pantalla la palabra que falta en la frase. Los acentos están en la fila de arriba.",
        "Si casi la tienes, te digo qué revisar: el acento, las letras o la forma.",
        "El primer error rompe el combo; el segundo te quita una vida y te muestra la corrección.",
        "«Pista» destapa una letra y «No sé» te muestra la respuesta sin quitarte vida."
      ];
    },
    montar: function(zona, s){ return motor(zona, s); }
  });

  var st = document.createElement("style"); st.id = "plx111";
  st.textContent = `
  .ty{position:absolute;inset:0;display:flex;flex-direction:column;gap:10px;padding:0 0 calc(8px + env(safe-area-inset-bottom));box-sizing:border-box}
  .ty-reloj{height:6px;margin:0 16px;border-radius:99px;background:rgba(147,197,253,.18);overflow:hidden;flex:none}
  .ty-reloj i{display:block;height:100%;background:#6BE58E;transform-origin:left;border-radius:99px}
  .ty-reloj.poco i{background:#FF8A8F}
  .ty-fila{display:flex;align-items:center;gap:10px;flex:none;min-height:88px;margin:0 16px}
  .ty-fb{flex:1;min-width:0;margin:0;padding:11px 14px;border-radius:16px;background:rgba(8,31,85,.6);box-shadow:inset 0 0 0 1.5px rgba(147,197,253,.22);
    color:#DCE8FF;font:500 15px/1.4 Inter,Barlow,system-ui,sans-serif;min-height:46px;box-sizing:border-box}
  .ty-fb:empty{visibility:hidden}
  .ty-fb b{font-weight:800;color:#fff}
  .ty-fb.ok{box-shadow:inset 0 0 0 2px #6BE58E;color:#E9FFEF}.ty-fb.ok b{color:#6BE58E}
  .ty-fb.casi{box-shadow:inset 0 0 0 2px #FFD200}.ty-fb.casi b{color:#FFD200}
  .ty-fb.mal{box-shadow:inset 0 0 0 2px #FF8A8F}.ty-fb.mal b{color:#FF8A8F}
  .ty-fb.aviso{box-shadow:inset 0 0 0 1.5px #93C5FD}
  .ty-mask{font:800 17px/1 Poppins,Inter,system-ui,sans-serif;letter-spacing:.04em;color:#FFD200;white-space:nowrap}
  .ty-mz{flex:none;width:96px;height:104px;position:relative}
  .ty-mz canvas,.ty-mz img{display:block;width:100%;height:100%;object-fit:contain}
  .plxg.ty-on .plxg-mz{display:none}
  /* abajo: barra con la burbuja y el teclado propio, pegados al borde como un teclado de verdad */
  .ty-abajo{margin-top:auto;flex:none;display:flex;flex-direction:column;gap:8px}
  .ty-barra{display:flex;align-items:center;gap:6px;margin:0 10px}
  .ty-b{flex:none;min-height:40px;padding:0 12px;border:0;border-radius:12px;background:transparent;color:#93C5FD;font:700 14px/1 Poppins,Inter,system-ui,sans-serif;
    box-shadow:inset 0 0 0 1.5px rgba(147,197,253,.35);cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
  .ty-b.on{background:rgba(147,197,253,.2)}
  .ty-oir{width:40px;padding:0;display:inline-flex;align-items:center;justify-content:center}
  .ty-oir svg{width:20px;height:20px}
  .ty-burbuja{flex:1;min-width:0;margin:0;height:44px;display:flex;align-items:center;justify-content:center;gap:1px;padding:0 12px;border-radius:999px;background:#fff;color:#0B2D74;
    font:700 20px/1 Poppins,Inter,system-ui,sans-serif;box-shadow:0 4px 0 #93C5FD;overflow:hidden;white-space:pre;box-sizing:border-box}
  .ty-txt{overflow:hidden;text-overflow:clip;direction:ltr}
  .ty-caret{flex:none;width:2px;height:24px;border-radius:2px;background:#2F6BFF;animation:tyCaret 1s steps(1) infinite}
  .ty-burbuja.ok{box-shadow:0 4px 0 #15803D,0 0 0 3px #6BE58E}.ty-burbuja.ok .ty-caret{display:none}
  .ty-burbuja.casi{box-shadow:0 4px 0 #B88A00,0 0 0 3px #FFD200}
  .ty-burbuja.mal{box-shadow:0 4px 0 #B3244E,0 0 0 3px #FF8A8F}
  .ty-teclado{display:flex;flex-direction:column;gap:7px;padding:10px 4px 6px;background:rgba(4,14,44,.72);border-top:1px solid rgba(147,197,253,.18);
    user-select:none;-webkit-user-select:none;touch-action:manipulation}
  .ty-tf{display:flex;justify-content:center;gap:5px}
  .ty-k{flex:1 1 0;min-width:0;max-width:44px;height:46px;padding:0;border:0;border-radius:9px;background:#F4F7FF;color:#0B2D74;font:600 20px/1 Poppins,Inter,system-ui,sans-serif;
    display:inline-flex;align-items:center;justify-content:center;box-shadow:0 3px 0 #8AA6D8;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .05s,box-shadow .05s}
  .ty-k.on,.ty-k:active{transform:translateY(2px);box-shadow:0 1px 0 #8AA6D8;background:#FFD200}
  .ty-k-ac{background:#DDE7FF;color:#1B49C8}
  .ty-tf3 .ty-k-borra{flex:1.6 1 0;max-width:70px;background:#93C5FD;color:#0B2D74}
  .ty-k-borra svg{width:24px;height:24px}
  .ty-tf4 .ty-k-esp{flex:4 1 0;max-width:none;font-size:14px;font-weight:700;color:#4A5D8F}
  .ty-tf4 .ty-k-listo{flex:2.2 1 0;max-width:none;background:#FFD200;color:#0B1F5C;font:800 16px/1 Poppins,Inter,system-ui,sans-serif;box-shadow:0 3px 0 #B88A00}
  .ty-tf4 .ty-k-listo.on,.ty-tf4 .ty-k-listo:active{box-shadow:0 1px 0 #B88A00;background:#FFE15C}
  .ty-k:focus-visible,.ty-b:focus-visible{outline:3px solid #FFD200;outline-offset:2px}
  .ty.ty-mal .ty-burbuja{animation:tyMal .35s}
  .plxg.ty-on .ty-ctx{margin:2px 0 6px;color:#B9CCF2;font:500 14px/1.35 Inter,Barlow,system-ui,sans-serif}
  .plxg.ty-on .ty-es{margin:2px 0 6px;color:#B9CCF2;font:500 15px/1.35 Inter,Barlow,system-ui,sans-serif}
  .plxg.ty-on .ty-es b{color:#FFD200;font-weight:700}
  .ty-hueco{display:inline-block;min-height:1.2em;padding:0 .3em;margin:0 .1em;border-radius:8px 8px 3px 3px;background:rgba(147,197,253,.16);border-bottom:3px solid #93C5FD;
    color:#FFD200;text-align:center;vertical-align:baseline;line-height:1.15;white-space:pre;transition:background-color .15s}
  .ty-hueco.lleno{background:rgba(255,210,0,.14);border-bottom-color:#FFD200}
  .ty-hueco.ok{background:rgba(107,229,142,.18);border-bottom-color:#6BE58E;color:#6BE58E}
  .ty-hueco.casi{border-bottom-color:#FFD200}
  .ty-hueco.mal{background:rgba(255,138,143,.16);border-bottom-color:#FF8A8F;color:#FFB3B6}
  @media (min-height:780px){ .ty-fila{min-height:124px} .ty-mz{width:120px;height:132px} }
  .ty-pega{white-space:nowrap}
  @media (max-height:740px){ .ty-fila{min-height:72px} .ty-mz{width:76px;height:82px} .plxg.ty-on .ty-ctx{display:none} .ty-k{height:42px} .ty-teclado{gap:6px;padding-top:8px} }
  @media (max-height:660px){ .ty-fila{min-height:60px} .ty-mz{width:60px;height:66px} .ty-fb{font-size:14px;padding:8px 12px} .ty-k{height:38px;font-size:18px} .ty-burbuja,.ty-b{height:38px;min-height:38px} }
  @media (min-width:700px){ .ty-reloj,.ty-fila{align-self:center;width:min(672px,calc(100% - 32px));margin:0} .ty-teclado{align-self:center;width:560px;border-radius:18px;border:1px solid rgba(147,197,253,.18);margin-bottom:8px} .ty-barra{align-self:center;width:560px} .ty-k{max-width:52px;height:50px} }
  @keyframes tyCaret{50%{opacity:0}}
  @keyframes tyMal{0%,100%{translate:0}25%{translate:-7px}75%{translate:7px}}
  @media (prefers-reduced-motion:reduce){ .ty.ty-mal .ty-burbuja{animation:none} .ty-caret{animation:none} }
  /* icono y pose de Manzana del juego: van en la capa p5 con !important, como las de los otros juegos (plx101) */
  @layer p5 {
    html.mk:not(.ty-z) #view .ev-tile[data-jx-juego=ty] .ev-sello,html.mk:not(.ty-z) #view .jx-dia[data-jx-juego=ty] .ev-sello,html.mk:not(.ty-z) .plxg .plxg-wrap.pt-ty .pt5-hero .ev-sello{background-image:url(img/juegos/ty.webp)!important}
    html.mk:not(.ty-z) .plxg .plxg-wrap.pt-ty .pt5-hero::after{background-image:url(img/mzj/ty.webp)!important}
  }
  `;
  document.head.appendChild(st);
})();
