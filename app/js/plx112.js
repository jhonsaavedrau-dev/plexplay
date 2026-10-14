/* PLEX PLAY 4.40.0 — Conversa con Manzana con el teclado de Type It y Manzana en 3D
   - El chat (plx39, vista «tutor») lleva el teclado mecánico propio de Type It, siempre a la vista: fila de acentos,
     QWERTY, apóstrofo, guion, mayúscula, puntuación, espacio, borrar y «Enviar». Suena con los NovelKeys Cream
     (plx111 → window.PLX_TECLADO) y no abre el teclado del teléfono (inputmode="none"). En el PC el teclado físico
     escribe en la caja como siempre y también suena y hunde la tecla de la pantalla.
   - «123» cambia dos filas por números y signos (œ ë ï « » : ; ( ) /). La mayúscula se pone sola al empezar y
     después de . ? ! ; un toque la activa para una letra y dos toques seguidos la dejan fija.
   - Manzana 3D (vendor/manzana3d) va en la cabecera del chat en lugar del icono de la situación: asiente cuando
     escribes, «teclea» mientras la IA responde, pone cara de «casi» si hay corrección (.tu-fix), salta si escribiste
     bien (.tu-ok), se entristece con un error y celebra al terminar. Sin WebGL queda la imagen 2D.
   - plx39 repinta todo #view en cada cambio: el teclado y el lienzo 3D son nodos persistentes que se vuelven a
     colocar tras cada pintada (un MutationObserver sobre #view), así el contexto WebGL no se recrea.
   - En el teléfono (menos de 1024 px) se oculta la barra inferior mientras hay chat y la altura del chat se calcula
     para que caja y teclado queden pegados al borde de abajo, como en cualquier app de mensajes. */
(function(){
  "use strict";
  var TK = window.PLX_TECLADO, V = document.getElementById("view");
  if (!TK || !V || typeof GV === "undefined") return;
  var H = document.documentElement;
  var G = function(){ return window.PLXG || {}; };

  /* ---------------- teclado ---------------- */
  var LETRAS = [
    ["é", "è", "ê", "à", "â", "ç", "î", "ô", "û", "ù"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "'"],
    ["⇧", "z", "x", "c", "v", "b", "n", "m", "-", "⌫"],
    ["123", ",", "?", "␣", ".", "!", "✓"]
  ];
  var SIMB = { 1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], 2: ["œ", "ë", "ï", "«", "»", ":", ";", "(", ")", "/"] };
  var BORRA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5l5 5M17 9.5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var MAYUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 4 12.5h4.5V19h7v-6.5H20z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  var MAYUS_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 4 12.5h4.5V19h7v-6.5H20z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  var esLetra = function(k){ return k.length === 1 && /\p{L}/u.test(k); };
  var tecla = function(k, f){
    var a = ' data-tk-f="' + f + '"';
    if (k === "⌫") return '<button type="button" class="pz-tecla pz-tecla--accion ty-k ty-k-borra" data-tk="borra"' + a + ' aria-label="Borrar">' + BORRA + "</button>";
    if (k === "⇧") return '<button type="button" class="pz-tecla pz-tecla--accion ty-k tk-may" data-tk="mayus"' + a + ' aria-label="Mayúscula" aria-pressed="false">' + MAYUS + "</button>";
    if (k === "123") return '<button type="button" class="pz-tecla pz-tecla--accion ty-k tk-num" data-tk="num"' + a + ' aria-label="Números y signos">123</button>';
    if (k === "␣") return '<button type="button" class="pz-tecla pz-tecla--esp ty-k ty-k-esp" data-tk="espacio"' + a + ' aria-label="Espacio">espacio</button>';
    if (k === "✓") return '<button type="button" class="pz-tecla pz-tecla--listo ty-k ty-k-listo tk-env" data-tk="listo"' + a + ">Enviar</button>";
    return '<button type="button" class="pz-tecla ty-k' + (/[^a-z'\-0-9]/.test(k) ? " pz-tecla--ac ty-k-ac" : "") + (esLetra(k) ? "" : " tk-sg") + '" data-tk="' + k + '"' + a + ">" + k + "</button>";
  };
  var kb = null, num = false, may = 0, mayT = 0;   /* may: 0 no · 1 una letra · 2 fija */
  var filaHTML = function(i){ return (num && SIMB[i] ? SIMB[i] : LETRAS[i]).map(function(k){ return tecla(k, i); }).join(""); };
  var creaTeclado = function(){
    var d = document.createElement("div");
    d.className = "tk";
    d.innerHTML = '<div class="pz-teclado ty-teclado" role="group" aria-label="Teclado">' + LETRAS.map(function(f, i){ return '<div class="pz-teclado__f ty-tf ty-tf' + i + '">' + filaHTML(i) + "</div>"; }).join("") + "</div>";
    d.addEventListener("pointerdown", abajo);
    d.addEventListener("contextmenu", function(e){ e.preventDefault(); });
    return d;
  };
  var cambiaNum = function(){
    num = !num;
    [1, 2].forEach(function(i){ var f = kb.querySelector(".ty-tf" + i); f.innerHTML = filaHTML(i); });
    var b = kb.querySelector("[data-tk=num]"); b.textContent = num ? "abc" : "123"; b.setAttribute("aria-label", num ? "Letras" : "Números y signos");
    rotula();
  };
  /* las letras se ven en mayúscula mientras la mayúscula está puesta */
  var rotula = function(){
    if (!kb) return;
    [].forEach.call(kb.querySelectorAll(".ty-k[data-tk]"), function(b){ var k = b.getAttribute("data-tk"); if (esLetra(k)) b.textContent = may ? k.toUpperCase() : k; });
    var m = kb.querySelector("[data-tk=mayus]"); if (!m) return;
    m.innerHTML = may ? MAYUS_ON : MAYUS; m.classList.toggle("act", !!may); m.classList.toggle("fija", may === 2); m.setAttribute("aria-pressed", may ? "true" : "false");
  };
  var mayAuto = function(){
    if (may === 2) return;
    var i = caja(), antes = i ? i.value.slice(0, i.selectionStart == null ? i.value.length : i.selectionStart) : "";
    var ahora = /^\s*$/.test(antes) || /[.!?…]\s+$/.test(antes) ? 1 : 0;
    if (ahora !== may) { may = ahora; rotula(); }
  };

  /* ---------------- escribir en la caja de plx39 ---------------- */
  var caja = function(){ return V.querySelector(".tut-chat #tuIn"); };
  var sel = function(i){ var a = i.selectionStart, b = i.selectionEnd; if (a == null) a = b = i.value.length; return [a, b]; };
  var alFinal = function(i, p){ try { i.setSelectionRange(p, p); } catch (e) {} if (p >= i.value.length) i.scrollLeft = i.scrollWidth; };
  var mete = function(t){
    var i = caja(); if (!i || i.disabled) return false;
    var s = sel(i), v = i.value;
    if (t === " " && (s[0] === 0 || / $/.test(v.slice(0, s[0])))) return false;
    if (v.length - (s[1] - s[0]) + t.length > (+i.maxLength > 0 ? +i.maxLength : 400)) return false;
    i.value = v.slice(0, s[0]) + t + v.slice(s[1]); alFinal(i, s[0] + t.length);
    return true;
  };
  var quita = function(){
    var i = caja(); if (!i || i.disabled) return false;
    var s = sel(i), v = i.value;
    if (s[0] === s[1]) { if (!s[0]) return false; s[0] = Array.from(v.slice(0, s[0])).slice(0, -1).join("").length; }
    i.value = v.slice(0, s[0]) + v.slice(s[1]); alFinal(i, s[0]);
    return true;
  };
  var envia = function(){
    var i = caja(), f = i && i.form; if (!f || i.disabled || !i.value.trim()) return false;
    if (f.requestSubmit) f.requestSubmit(); else { var b = f.querySelector(".tu-send"); b && b.click(); }
    return true;
  };
  var activo = function(){ var i = caja(); return !!(i && !i.disabled); };
  var hunde = function(b){ if (!b) return; b.classList.remove("on"); void b.offsetWidth; b.classList.add("on"); setTimeout(function(){ b.classList.remove("on"); }, 110); };

  var ejecuta = function(k){
    if (k === "num") { cambiaNum(); return true; }
    if (k === "mayus") {
      var ya = Date.now(); may = may === 1 && ya - mayT < 380 ? 2 : may ? 0 : 1; mayT = ya; rotula(); return true;
    }
    if (k === "listo") return envia();
    var ok = k === "borra" ? quita() : mete(k === "espacio" ? " " : may && esLetra(k) ? k.toUpperCase() : k);
    if (!ok) return false;
    if (may === 1 && esLetra(k)) may = 0;
    mayAuto(); rotula();
    G().vibra && G().vibra(6);
    if (M3) { M3.tecla(); M3.mirar(0.25, -0.7); }
    return true;
  };

  /* ---- toque: la tecla suena al bajar el dedo y queda hundida mientras se aprieta ---- */
  var repite = null, abajoEn = null, suelto = null;
  var paraRepite = function(){ if (repite) { clearTimeout(repite.t); clearInterval(repite.i); repite = null; } };
  function abajo(e){
    var b = e.target.closest && e.target.closest("[data-tk]"); if (!b) return;
    e.preventDefault();
    G().despiertaAudio && G().despiertaAudio(); TK.ctx();
    var k = b.getAttribute("data-tk"), fila = +b.getAttribute("data-tk-f") || 0;
    if (abajoEn) abajoEn.classList.remove("on");
    abajoEn = b; b.classList.add("on");
    if (activo() || k === "num" || k === "mayus") { suelto = TK.tipoDe(k); TK.pulsa(suelto, (caja() || { value: "" }).value.length, fila); }
    ejecuta(k);
    if (k === "borra") { paraRepite(); repite = { t: setTimeout(function(){ repite && (repite.i = setInterval(function(){ if (!ejecuta("borra")) paraRepite(); else TK.pulsa("borra", 0, 3); }, 75)); }, 380) }; }
  }
  var arriba = function(){ paraRepite(); if (abajoEn) { abajoEn.classList.remove("on"); abajoEn = null; } if (suelto) { TK.suelta(suelto); suelto = null; } };
  window.addEventListener("pointerup", arriba); window.addEventListener("pointercancel", arriba);

  /* ---- teclado físico (PC): escribe la caja de siempre; aquí solo suena y hunde la tecla de la pantalla ---- */
  var botonDe = function(k){ return kb && kb.querySelector('[data-tk="' + (k === "'" ? "\\'" : k === '"' ? '\\"' : k) + '"]'); };
  var fisica = function(e){
    if (!kb || !kb.isConnected || e.target !== caja() || e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key, b = null, tipo = null;
    if (k === "Enter") { tipo = "listo"; b = botonDe("listo"); }
    else if (k === "Backspace") { tipo = "borra"; b = botonDe("borra"); }
    else if (k === " ") { tipo = "espacio"; b = botonDe("espacio"); }
    else if (k && k.length === 1) { tipo = "letra"; b = botonDe(k.toLowerCase().replace("’", "'")); }
    if (!tipo) return;
    if (e.type === "keydown") { if (e.repeat && tipo !== "borra") return; TK.pulsa(tipo, 0, b ? +b.getAttribute("data-tk-f") || 0 : 1); hunde(b); if (M3) M3.tecla(); }
    else TK.suelta(tipo);
  };
  document.addEventListener("keydown", fisica, true);
  document.addEventListener("keyup", fisica, true);
  document.addEventListener("input", function(e){ if (e.target === caja()) mayAuto(); }, true);

  /* ---------------- Manzana 3D ---------------- */
  var M3 = null, caja3D = null, piensa = 0;
  var creaManzana = function(){
    caja3D = document.createElement("div");
    caja3D.className = "tk-mz"; caja3D.setAttribute("aria-hidden", "true");
    var lienzo = document.createElement("canvas"); caja3D.appendChild(lienzo);
    var ahi = caja3D;
    TK.carga3D().then(function(mod){
      if (caja3D !== ahi) return;
      if (mod && mod.hayWebGL()) {
        try { M3 = mod.crearManzana(lienzo, { lejos: 0.92 }); M3.mirar(0.2, -0.4); M3.estado("saludar"); hablaPor(1800); ahi.classList.add("tk-3d"); return; } catch (e) { M3 = null; }
      }
      var img = document.createElement("img"); img.alt = ""; img.src = "img/mz3/mz-hola.webp"; lienzo.replaceWith(img);
    });
  };
  var mz = function(e){ if (M3) M3.estado(e); };
  /* Manzana «dice» su mensaje: mueve la boca un rato proporcional al largo del texto */
  var callaT = 0;
  var hablaPor = function(ms){ if (!M3 || !M3.hablar) return; clearTimeout(callaT); M3.hablar(true); callaT = setTimeout(function(){ M3 && M3.hablar(false); }, Math.max(900, Math.min(6500, ms))); };
  /* mientras la IA responde, Manzana «teclea» su respuesta a ratos */
  var pensar = function(si){
    clearTimeout(piensa); piensa = 0;
    if (!si) { if (M3) M3.mirar(0.2, -0.4); return; }
    var paso = function(){ if (M3) { M3.tecla(); M3.mirar(-0.15 + Math.random() * 0.3, -0.75); } piensa = setTimeout(paso, 160 + Math.random() * 260); };
    paso();
  };

  /* ---------------- montaje tras cada pintada ---------------- */
  var visto = { n: -1, busy: false, fin: false };
  var lee = function(sec){
    var mios = sec.querySelectorAll(".tu-row.me"), ult = mios[mios.length - 1];
    var r = { n: mios.length, busy: !!sec.querySelector(".tu-typing"), fin: !!sec.querySelector(".tu-end"), err: !!sec.querySelector(".tu-err"),
      fix: !!(ult && ult.querySelector(".tu-fix")), ok: !!(ult && ult.querySelector(".tu-ok")) };
    if (r.n < visto.n || visto.n < 0) visto = { n: r.n, busy: false, fin: r.fin };   /* chat nuevo */
    if (r.busy !== visto.busy) pensar(r.busy);
    if (r.fin && !visto.fin) mz("celebrar");
    else if (!r.busy && visto.busy) {
      mz(r.err ? "error" : r.fix ? "casi" : r.ok ? "acierto" : "reposo");
      var dice = sec.querySelectorAll(".tu-row.mz .tu-b"), u = dice[dice.length - 1];
      if (!r.err && u) setTimeout(function(){ hablaPor(u.textContent.length * 55); }, r.fix ? 900 : 600);
    }
    visto = { n: r.n, busy: r.busy, fin: r.fin };
  };
  var ajusta = function(){
    var sec = V.querySelector(".tut-chat"), chat = sec && sec.querySelector(".tu-chat"); if (!chat) return;
    chat.style.height = ""; chat.style.maxHeight = "";
    var r = chat.getBoundingClientRect(), s = sec.getBoundingClientRect(), abajoDe = s.bottom - r.bottom;
    var fondo = matchMedia("(min-width:1024px)").matches ? 16 : matchMedia("(max-width:600px)").matches ? 0 : 6;
    var alto = Math.round(innerHeight - (r.top + scrollY) - abajoDe - fondo);
    chat.style.height = Math.max(180, alto) + "px"; chat.style.maxHeight = "none";
  };
  var desmonta = function(){
    if (!H.classList.contains("tk-on")) return;
    H.classList.remove("tk-on"); pensar(false); arriba(); clearTimeout(callaT);
    if (M3) { try { M3.destruir(); } catch (e) {} M3 = null; }
    caja3D = null; visto = { n: -1, busy: false, fin: false };
    if (num) { num = false; kb = null; }
  };
  var monta = function(){
    var sec = V.querySelector(".tut-chat");
    if (!sec) { desmonta(); return; }
    var nuevo = !H.classList.contains("tk-on");
    H.classList.add("tk-on");
    if (!kb) kb = creaTeclado();
    var form = sec.querySelector(".tu-form"), i = caja();
    if (i) { i.setAttribute("inputmode", "none"); i.setAttribute("enterkeyhint", "send"); }
    if (form) { if (kb.previousElementSibling !== form) form.after(kb); }
    else if (kb.isConnected) kb.remove();
    if (!caja3D) creaManzana();
    var ico = sec.querySelector(".tu-ttl > span:not(.tk-mz)");
    if (ico) ico.replaceWith(caja3D);
    else if (!caja3D.isConnected) { var t = sec.querySelector(".tu-ttl"); t && t.prepend(caja3D); }
    lee(sec); mayAuto(); rotula();
    ajusta();
    if (nuevo) { scrollTo(0, 0); TK.carga(); }
  };
  new MutationObserver(function(){ monta(); }).observe(V, { childList: true });
  addEventListener("resize", function(){ if (H.classList.contains("tk-on")) ajusta(); });
  monta();
  window.PLX_CONVERSA_TK = { estado: function(){ return { m3d: !!M3, estado3d: M3 ? M3.actual : "", may: may, num: num, sonidos: TK.sonidos ? TK.sonidos() : 0 }; } };

  var st = document.createElement("style"); st.id = "plx112";
  st.textContent = `
  .tk{margin:10px 0 0}
  .tk .ty-teclado{margin:0}
  /* teclas del kit (pz-tecla--accion para mayúscula y 123: .act y .fija los pinta la pieza); aquí solo tamaños */
  .tk .tk-may,.tk .tk-num{flex:1.35 1 0;max-width:62px}
  .tk .tk-num{font-size:15px}
  .tk .tk-sg{font-size:21px}
  .tk .ty-tf4 .ty-k-esp{flex:3.2 1 0}
  .tk .ty-tf4 .tk-env{flex:2 1 0;font-size:15px}
  html.tk-on #view .tut-chat .tu-acc{display:none}
  html.tk-on #view .tut-chat .tu-form{margin-top:8px}
  html.tk-on #view .tut-chat .tu-chat{min-height:0;flex:none}
  html.tk-on #view .tut-chat .tu-form input{caret-color:#2F6BFF}
  .tk-mz{flex:none;width:58px;height:62px;margin:-6px 0 -6px -4px;position:relative;cursor:pointer}
  .tk-mz canvas,.tk-mz img{display:block;width:100%;height:100%;object-fit:contain}
  .tk-mz img{border-radius:50%}
  @media (min-width:1024px){
    .tk{align-self:center;width:min(620px,100%)}
    .tk .ty-k{max-width:54px;height:48px}
    .tk .ty-tf4 .ty-k-esp,.tk .ty-tf4 .tk-env{max-width:none}
    .tk-mz{width:76px;height:80px;margin:-12px 0 -12px -6px}
  }
  @media (max-height:700px){ .tk .ty-k{height:40px} .tk .ty-teclado{gap:5px;padding-top:9px;padding-bottom:10px} }
  @media (max-height:600px){ .tk .ty-k{height:36px;font-size:17px} }
  /* 4.43 · teclado del teléfono más ancho (Jhon: «es estrecho, no permite escribir cómodamente»): de borde a borde
     de la pantalla, marco y separaciones finos y teclas más altas. Antes las teclas medían ~30 px; ahora ~34 × 50 px.
     Vale para Conversa (.tk) y para Type It (.ty). */
  @media (max-width:600px){
    .tk{margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);width:100vw;margin-bottom:calc(-1 * env(safe-area-inset-bottom))}
    .tk .ty-teclado,.ty .ty-teclado{margin:0;padding:7px 3px calc(8px + env(safe-area-inset-bottom));gap:7px}
    .tk .ty-tf,.ty .ty-tf{gap:4px}
    .tk .ty-k,.ty .ty-k{max-width:none;height:50px;font-size:20px}
    .tk .ty-tf3 .ty-k-borra,.ty .ty-tf3 .ty-k-borra{max-width:none}
    .tk .tk-may,.tk .tk-num{max-width:none}
    .ty .ty-abajo{margin-bottom:calc(-8px - env(safe-area-inset-bottom))}
  }
  @media (max-width:600px) and (max-height:700px){ .tk .ty-k,.ty .ty-k{height:44px} }
  @media (max-width:600px) and (max-height:600px){ .tk .ty-k,.ty .ty-k{height:38px} }
  /* en el teléfono la barra inferior se va mientras hay chat: el teclado ocupa ese lugar */
  @layer p5 {
    @media (max-width:1023.98px){ html.mk.tk-on body nav#tabbar.tabbar{display:none!important} }
  }
  `;
  document.head.appendChild(st);
})();
