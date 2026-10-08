/* PLEX PLAY 3.0.0 — Fluidez, orden y un solo estilo
   Parpadeo
   - La pantalla se volvía a pintar entera muchas veces al abrir la app (la sincronización con la nube, el avatar, las
     lecciones que llegan en segundo plano, el ranking…): cada vez se creaban de nuevo todas las imágenes y se
     reiniciaban las animaciones. Ahora, si la pantalla es la misma, solo se cambia lo que cambió (el resto de nodos se
     conserva: la foto no se vuelve a cargar y nada salta). Al cambiar de pantalla sí se pinta de cero.
   Transiciones
   - Entre pestañas: un fundido corto y simple (3.0.1; el deslizamiento de la 3.0.0 se quitó). Respeta «reducir movimiento».
   Ranking
   - Es una pestaña más (dentro de la app, con el menú a la vista), no una capa encima con una ✕.
   Barra superior
   - El avatar con la flecha abre un menú: Mi perfil, Ajustes, redes sociales y Cerrar sesión.
   Ajustes
   - Panel nuevo: tu gato y tu nivel arriba, Sonido, Recordatorio y Tema en grupos con iconos, Síguenos (Instagram y
     Facebook), tu cuenta y la versión. Los interruptores siguen siendo los mismos (data-qs), solo cambia el diseño.
   Iconos
   - Un solo estilo: los iconos pintados de PLEX PLAY (img/ic) en Practicar, Aprender más, Juegos, las misiones y las
     pestañas de Jugar. En el menú, todos los iconos en línea (Jugar y Ranking eran rellenos).
   Lecciones
   - La portada de cada unidad deja de ser una foto gigante: ahora es una franja baja, con la foto a la derecha. */
(function(){
  "use strict";
  if (typeof render !== "function" || typeof go !== "function") return;
  var V = document.getElementById("view"); if (!V) return;
  var RM = false; try { RM = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var VERSION = "3.1.0";
  var IG = "https://www.instagram.com/plexplay.app/", FB = "https://web.facebook.com/profile.php?id=61595048813920";
  var logged = function(){ try { return !!(window.PCB && PCB.uid); } catch (e) { return false; } };

  /* ====================== 1. Sin parpadeo ======================
     Al arrancar, la pantalla se pintaba ~11 veces seguidas con el mismo contenido: lo único que cambiaba era el número
     de los degradados del dibujo de Manzana (id="c3h", "c6h"…). Si el HTML nuevo es igual al que ya está (sin contar
     esos números), no se toca la pantalla: nada se vuelve a crear ni a animar. Si cambió algo de verdad, se pinta como
     siempre. Además, las imágenes que ya cargaron se pintan sin esperar (sin decoding=async ni loading=lazy). */
  var desc = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
  var ultimo = { vista: null, norma: null };
  var norma = function(h){ return h.replace(/(id="|url\(#|href="#)c\d+([a-z]{1,3})/g, "$1c$2"); };
  var cargadas = new Set();
  addEventListener("load", function(e){ var i = e.target; if (i && i.tagName === "IMG") { var s = i.getAttribute("src"); if (s) cargadas.add(s); } }, true);
  var sinEspera = function(html){
    if (!cargadas.size || html.indexOf("<img") < 0) return html;
    return html.replace(/<img\b[^>]*>/g, function(tag){
      var m = tag.match(/\ssrc="([^"]+)"/); if (!m || !cargadas.has(m[1])) return tag;
      return tag.replace(/\sdecoding="async"/, "").replace(/\sloading="lazy"/, "");
    });
  };
  var _iah = Element.prototype.insertAdjacentHTML;
  Element.prototype.insertAdjacentHTML = function(pos, html){ try { if (typeof html === "string" && V.contains(this)) html = sinEspera(html); } catch (e) {} return _iah.call(this, pos, html); };
  var saltadas = 0;
  if (desc && desc.set) {
    Object.defineProperty(V, "innerHTML", { configurable: true,
      get: function(){ return desc.get.call(this); },
      set: function(html){
        html = String(html);
        var v = typeof view !== "undefined" ? view : "", n = norma(html);
        if (v === ultimo.vista && n === ultimo.norma && this.firstChild && !window.PLX_SIN_ATAJO) { saltadas++; return; }
        ultimo.vista = v; ultimo.norma = n;
        desc.set.call(this, sinEspera(html));
      } });
  }
  window.__plx69 = function(){ return { saltadas: saltadas }; };

  /* un mismo oyente no se registra dos veces en un nodo que se conservó */
  var addEL = EventTarget.prototype.addEventListener, vistos = new WeakMap();
  EventTarget.prototype.addEventListener = function(tipo, fn, op){
    try {
      if (typeof fn === "function" && this.nodeType === 1 && V.contains(this)) {
        var k = tipo + "|" + String(fn).length + "|" + String(fn).slice(0, 160), s = vistos.get(this);
        if (!s) { s = new Set(); vistos.set(this, s); }
        if (s.has(k)) return; s.add(k);
      }
    } catch (e) {}
    return addEL.call(this, tipo, fn, op);
  };

  /* ====================== 2. Transiciones entre pantallas ====================== */
  /* 3.0.1: transición simple. La pantalla nueva aparece con un fundido corto (0,18 s), sin deslizar ni escalonar. */
  var _go = go;
  go = function(v){
    var de = typeof view !== "undefined" ? view : null, r = _go.apply(this, arguments);
    /* 3.9.0: el fundido va con la API de animaciones: sin «void offsetWidth», que obligaba a maquetar toda la vista
       de golpe (en Ranking eran cientos de ms y la música se atascaba) */
    if (de && v !== de && !RM) {
      if (V.animate) { try { V.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: "ease-out" }); } catch (e) {} }
      else { V.classList.remove("plx69-entra"); void V.offsetWidth; V.classList.add("plx69-entra"); setTimeout(function(){ V.classList.remove("plx69-entra"); }, 260); }
    }
    return r;
  };
  try { window.go = go; } catch (e) {}

  /* iconos del menú: todos en línea */
  var NAV_IC = {
    retos: '<svg class="li" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 7h9a4.5 4.5 0 0 1 4.4 5.4l-.9 4a2.2 2.2 0 0 1-3.8 1L15 16H9l-1.2 1.4a2.2 2.2 0 0 1-3.8-1l-.9-4A4.5 4.5 0 0 1 7.5 7Z"/><path d="M8 10.5v3M6.5 12h3"/><circle cx="15.5" cy="11" r=".6"/><circle cx="17" cy="13" r=".6"/></svg>',
    ranking: '<svg class="li" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0Z"/><path d="M16 5h3v1.5A3.5 3.5 0 0 1 15.6 10M8 5H5v1.5A3.5 3.5 0 0 0 8.4 10"/><path d="M12 13v4M8.5 20h7M10 17h4v3h-4z"/></svg>'
  };
  var menus = function(){
    ["nav", "tabbar"].forEach(function(id){
      var nav = document.getElementById(id); if (!nav) return;
      nav.querySelectorAll("button").forEach(function(b){
        var k = b.dataset.view || (b.dataset.avRank ? "ranking" : "");
        if (NAV_IC[k] && !b.querySelector("svg.li")) { var s = b.querySelector("svg"); if (s) s.outerHTML = NAV_IC[k]; }
        if (k === "ranking") { if (view === "ranking") b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); }
        else if (view === "ranking" && b.getAttribute("aria-current")) b.removeAttribute("aria-current");
      });
    });
  };

  /* ====================== 3. Ranking como pestaña ====================== */
  /* 3.9.0: iconos pintados (img/ic) en vez de emojis, como el resto de la app */
  var AMB = [["unipamplona", "Unipamplona", "birrete"], ["global", "Global", "torre-eiffel"]];
  var PER = [["semana", "Semana"], ["mes", "Mes"], ["total", "Histórico"]];
  /* 3.9.0: la misma caché que la tarjeta del Inicio (plx53): un solo pedido por ámbito y periodo, y los mismos datos */
  var RK = { amb: "global", per: "semana", cache: (window.PLX_RK_CACHE = window.PLX_RK_CACHE || {}), pidiendo: {}, eligio: 0, uni: null };
  var gato = function(av, mood){ try { return catSVG(av && typeof av === "object" ? av : {}, { mood: mood || "happy" }); } catch (e) { return ""; } };
  /* 3.9.0: las filas 4-50 llevan el gato como imagen (un nodo) y no como SVG en línea (unos 80 nodos cada una): la vista
     bajaba de ~4.700 nodos a ~1.000 y entrar a Ranking frenaba la música. Un Blob por gato distinto, reutilizado. */
  var IMG_GATO = {};
  var gatoImg = function(av){
    var k = ""; try { k = JSON.stringify(av && typeof av === "object" ? [av.coat, av.acc || {}] : null); } catch (e) {}
    if (!IMG_GATO[k]) {
      var s = gato(av);
      if (!s || s.indexOf("<image") >= 0 || !window.Blob || !window.URL || !URL.createObjectURL) return s;
      if (s.indexOf("xmlns=") < 0) s = s.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
      try { IMG_GATO[k] = URL.createObjectURL(new Blob([s], { type: "image/svg+xml" })); } catch (e) { return s; }
    }
    return '<img src="' + IMG_GATO[k] + '" alt="" width="40" height="40">';
  };
  var fin = function(){
    var d = new Date(), f;
    if (RK.per === "semana") { f = new Date(d); f.setHours(24, 0, 0, 0); while (f.getDay() !== 1) f.setDate(f.getDate() + 1); }
    else if (RK.per === "mes") f = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    else return "";
    var ms = f - d, dd = Math.floor(ms / 864e5), hh = Math.floor(ms % 864e5 / 36e5);
    return (RK.per === "semana" ? "La semana termina en " : "El mes termina en ") + (dd ? dd + " d " : "") + hh + " h";
  };
  var clave = function(){ return RK.amb + "|" + RK.per; };
  var datos = function(){
    var k = clave();
    if (window.__RK_FAKE) { RK.cache[k] = { t: Date.now(), filas: window.__RK_FAKE(RK.amb, RK.per) }; return Promise.resolve(true); }
    if (RK.cache[k] && !RK.cache[k].error && Date.now() - RK.cache[k].t < 60000) return Promise.resolve(false);
    if (!logged() || !PCB.sb) { RK.cache[k] = { t: Date.now(), error: "sesion" }; return Promise.resolve(true); }
    if (RK.pidiendo[k]) return RK.pidiendo[k];
    return (RK.pidiendo[k] = PCB.sb.rpc("plx_ranking", { ambito: RK.amb, periodo: RK.per, cuantos: 50 }).then(function(r){ if (r.error) throw r.error; RK.cache[k] = { t: Date.now(), filas: r.data || [] }; return true; })
      .catch(function(e){ RK.cache[k] = { t: Date.now(), error: navigator.onLine === false ? "Sin conexión: el ranking necesita internet." : "No se pudo cargar el ranking. Inténtalo de nuevo." }; return true; })
      .then(function(x){ delete RK.pidiendo[k]; return x; }));
  };
  /* 3.9.0: tu fila con lo de este teléfono. El puesto viene del servidor, pero el gato, el apodo, el nivel y el XP
     histórico del servidor (profiles) solo cambian con gPush: así la tarjeta, el podio y tu fila dicen lo mismo
     mientras el servidor se pone al día. Solo es presentación (el puesto no se toca). La usa también plx53. */
  var xpLocal = function(per){
    try {
      if (per === "total") return S.xp || 0;
      if (per === "semana") return weekXP();
      var p = dkey(new Date()).slice(0, 7), n = 0;
      Object.keys(S.days || {}).forEach(function(k){ if (k.slice(0, 7) === p) n += (S.days[k] || {}).xp || 0; });
      return n;
    } catch (e) { return 0; }
  };
  var tuyo = function(x, per){
    if (!x || !x.soy_yo) return x;
    try {
      var G = gEnsure(), y = {}, k;
      for (k in x) y[k] = x[k];
      if (G.name) y.nick = String(G.name).slice(0, 20);
      if (G.cat) y.avatar = { coat: G.cat.coat, acc: G.cat.acc || {} };
      y.nivel = String(catLevel(S.xp));
      y.xp = Math.max(+x.xp || 0, +xpLocal(per) || 0);
      return y;
    } catch (e) { return x; }
  };
  window.PLX_RK_YO = tuyo;
  var miles = function(n){ return Number(n || 0).toLocaleString("es-CO"); };
  var podio = function(f){
    return '<div class="rkx-podio">' + [f[1], f[0], f[2]].map(function(x, i){
      if (!x) return '<div class="rkx-pd vacio"></div>';
      var p = x.posicion, cl = p === 1 ? "oro" : p === 2 ? "plata" : "bronce";
      return '<div class="rkx-pd ' + cl + (x.soy_yo ? " yo" : "") + '" style="--d:' + (i * 90) + 'ms">' + (p === 1 ? '<span class="rkx-corona" aria-hidden="true"><img src="img/ic/corona.webp" alt="" width="34" height="34"></span>' : "") +
        '<span class="rkx-av">' + gato(x.avatar, p === 1 ? "excited" : "happy") + '</span><b>' + esc(x.nick) + (x.soy_yo ? " (tú)" : "") + '</b><small>Nivel ' + esc(x.nivel || "1") + "</small>" +
        '<span class="rkx-base"><em>' + p + "</em><i>" + miles(x.xp) + " XP</i></span></div>";
    }).join("") + "</div>";
  };
  var fila = function(x, max){
    var pct = max ? Math.min(100, Math.max(4, Math.round((x.xp || 0) / max * 100))) : 0;
    /* tu fila conserva el gato en línea (es una sola); las demás van como imagen */
    return '<li class="rkx-f' + (x.soy_yo ? " yo" : "") + '"><span class="rkx-pos">' + x.posicion + '</span><span class="rkx-av sm">' + (x.soy_yo ? gato(x.avatar) : gatoImg(x.avatar)) + "</span>" +
      '<span class="rkx-n"><b>' + esc(x.nick) + (x.soy_yo ? " <em>tú</em>" : "") + '</b><span class="rkx-bar"><i style="width:' + pct + '%"></i></span></span>' +
      '<span class="rkx-lv">Nv ' + esc(x.nivel || "1") + '</span><span class="rkx-xp">' + miles(x.xp) + "<small>XP</small></span></li>";
  };
  var yoTarjeta = function(filas){
    filas = filas || [];
    var yo = filas.filter(function(x){ return x.soy_yo; })[0], G = {}; try { G = gEnsure(); } catch (e) {}
    var lv = 1; try { lv = catLevel(S.xp); } catch (e) {}
    var pos = yo ? yo.posicion : null, sobre = null;
    /* plx_ranking usa rank(): en un empate salta números (4, 4, 6). El rival es el puesto más cercano por encima. */
    if (yo) filas.forEach(function(x){ if (!x.soy_yo && x.posicion < yo.posicion && (!sobre || x.posicion >= sobre.posicion)) sobre = x; });
    var meta = !yo && RK.amb === "unipamplona" && RK.uni === false ? "Solo cuentas @unipamplona.edu.co. Tu ranking es el Global." :
      pos === 1 ? "¡Vas primero! Defiende el puesto." :
      sobre && (yo.xp || 0) > (sobre.xp || 0) ? "Ya pasaste a " + esc(sobre.nick) + ". Tu puesto se actualiza en un momento." :
      sobre ? (function(n){ return (n === 1 ? "Te falta 1 XP" : "Te faltan " + miles(n) + " XP") + " para pasar a " + esc(sobre.nick) + "."; })((sobre.xp || 0) - (yo.xp || 0) + 1) :
      pos ? "Estás en el puesto #" + pos + ". Sigue sumando XP para subir." :
      xpLocal(RK.per) > 0 ? "Tu XP ya cuenta. Tu puesto aparece al sincronizar." : "Gana XP en lecciones y juegos para entrar al ranking.";
    return '<div class="rkx-yo"><span class="rkx-av md">' + gato(G.cat, "happy") + '</span><div><small>Tu posición</small><b>' + (pos ? "#" + pos : "—") + '</b><span>' + meta + "</span></div>" +
      '<div class="rkx-yo-x"><b>' + miles(yo ? yo.xp : xpLocal(RK.per)) + '</b><small>XP ' + { semana: "esta semana", mes: "este mes", total: "en total" }[RK.per] + "</small><em>Nivel " + lv + "</em></div></div>";
  };
  var cuerpo0 = function(d){
    if (!d) return '<div class="rkx-cargando"><i></i><i></i><i></i></div>';
    if (d.error === "sesion") return '<div class="rkx-vacio"><span>' + gato(null, "curious") + '</span><b>Entra con tu cuenta</b><p>El ranking compara tu XP con el de otros estudiantes. Entra con Google o con tu correo para aparecer.</p></div>';
    if (d.error) return '<div class="rkx-vacio"><span>' + gato(null, "sad") + "</span><b>" + esc(d.error) + '</b><button type="button" class="rkx-btn" data-rkv="otra">Intentar de nuevo</button></div>';
    var f = (d.filas || []).map(function(x){ return tuyo(x, RK.per); });
    if (!f.length) return yoTarjeta(f) + '<div class="rkx-vacio"><span>' + gato(null, "excited") + '</span><b>¡Nadie ha sumado XP aún!</b><p>Haz una lección o un juego y estrena el podio.</p></div>';
    var top = f.filter(function(x){ return x.posicion <= 50; }), max = top.length ? top[0].xp || 0 : 0, yo = f.filter(function(x){ return x.soy_yo; })[0];
    /* 3.9.0: tu fila se repite abajo solo cuando no está en la lista (pasado el puesto 50), y ya sin las reglas de la
       capa vieja (.rkx-fijo de plx60: fixed + translateX(-50%)), que la corrían media pantalla a la izquierda */
    return yoTarjeta(f) + podio(top.slice(0, 3)) + '<ol class="rkx-l">' + top.slice(3).map(function(x){ return fila(x, max); }).join("") + "</ol>" +
      (yo && yo.posicion > 50 ? '<ol class="rkv-fijo" aria-label="Tu puesto">' + fila(yo, max) + "</ol>" : "");
  };
  /* el cuerpo se guarda hasta que cambian los datos o lo tuyo: pintar otra vez la misma vista ya no rehace 50 gatos */
  var memo = { k: null, h: "" };
  var cuerpo = function(){
    var d = RK.cache[clave()], G = {}; try { G = gEnsure(); } catch (e) {}
    var k = clave() + "|" + (d ? d.t + "|" + (d.error || "") : "-") + "|" + S.xp + "|" + (G.name || "") + "|" + JSON.stringify(G.cat || null) + "|" + RK.uni;
    if (memo.k !== k) { memo.h = cuerpo0(d); memo.k = k; }
    return memo.h;
  };
  if (typeof GV !== "undefined") {
    GV.ranking = function(){
      return '<section class="rkv"><header class="rkx-hero rkv-hero"><span class="rkx-trofeo" aria-hidden="true"><img src="img/ic/trofeo.webp" alt="" width="80" height="80"></span>' +
        '<h1>Liga de la semana</h1><p>Solo se ven apodos, gatos, niveles y XP. Nunca correos.</p><span class="rkx-fin">' + esc(fin()) + "</span></header>" +
        '<div class="rkx-tabs" role="tablist" aria-label="Ranking">' + AMB.map(function(a){ return '<button type="button" role="tab" data-rkv-amb="' + a[0] + '" aria-selected="' + (RK.amb === a[0]) + '"><img src="img/ic/' + a[2] + '.webp" alt="" width="24" height="24">' + a[1] + "</button>"; }).join("") + "</div>" +
        '<div class="rkx-per" role="group" aria-label="Periodo">' + PER.map(function(p){ return '<button type="button" data-rkv-per="' + p[0] + '" aria-pressed="' + (RK.per === p[0]) + '">' + p[1] + "</button>"; }).join("") + "</div>" +
        '<div class="rkx-cuerpo">' + cuerpo() + "</div>" +
        /* la liga semanal por programa y semestre (la «Clasificación» de Perfil) sigue existiendo: se entra desde aquí,
           porque su pestaña ahora abre este Ranking. No pasa por el clic en captura de [data-arg=lb] */
        '<p class="rkv-liga"><button type="button" data-rkv="liga">Liga semanal por programa y semestre ›</button></p></section>';
    };
  }
  /* 3.9.0: los filtros y la llegada de datos repintan solo el ranking (antes: render() de toda la app, dos veces) */
  var repinta = function(){
    if (typeof view === "undefined" || view !== "ranking") return;
    var sec = V.querySelector(".rkv"); if (!sec || typeof GV === "undefined" || !GV.ranking) { render(); return; }
    sec.querySelectorAll("[data-rkv-amb]").forEach(function(b){ b.setAttribute("aria-selected", String(b.dataset.rkvAmb === RK.amb)); });
    sec.querySelectorAll("[data-rkv-per]").forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.rkvPer === RK.per)); });
    var f = sec.querySelector(".rkx-fin"); if (f) f.textContent = fin();
    var c = sec.querySelector(".rkx-cuerpo"), h = cuerpo(); if (c) c.innerHTML = h;
    /* el atajo del punto 1 queda al día: la próxima pintada igual a esta no toca nada */
    ultimo.vista = "ranking"; ultimo.norma = norma(GV.ranking());
  };
  var pideRanking = function(){ datos().then(function(cambio){ if (cambio && view === "ranking") repinta(); }); };
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-rkv-amb],[data-rkv-per],[data-rkv]"); if (!b) return;
    e.preventDefault();
    if (b.dataset.rkv === "liga") { try { gTab = "lb"; go("perfil"); } catch (x) {} return; }
    if (b.dataset.rkvAmb) { RK.amb = b.dataset.rkvAmb; RK.eligio = 1; }
    if (b.dataset.rkvPer) RK.per = b.dataset.rkvPer;
    if (b.dataset.rkv === "otra") RK.cache[clave()] = null;
    repinta(); pideRanking();
  });
  /* 3.9.0: arranca con el mismo ámbito que la tarjeta del Inicio (Unipamplona para las cuentas de la universidad) */
  var ambitoInicial = function(){
    if (RK.vioAmb || !logged() || !window.PCB || typeof PCB.miAmbito !== "function") return;
    RK.vioAmb = 1;
    PCB.miAmbito().then(function(a){
      RK.uni = !!(a && a.unipamplona);
      if (!RK.eligio && RK.uni && RK.amb === "global") { RK.amb = "unipamplona"; pideRanking(); }
      repinta();
    }).catch(function(){ RK.vioAmb = 0; });
  };
  /* «Ver todo» del Inicio pasa su ámbito y su periodo */
  var abreRanking = function(amb, per){
    if (typeof amb === "string" && AMB.some(function(a){ return a[0] === amb; })) { RK.amb = amb; RK.eligio = 1; }
    if (typeof per === "string" && PER.some(function(p){ return p[0] === per; })) RK.per = per;
    ambitoInicial();
    if (view !== "ranking") go("ranking"); else { repinta(); pideRanking(); }
    scrollTo(0, 0);
  };
  window.PLX_RK = { estado: function(){ return { amb: RK.amb, per: RK.per }; }, olvida: function(){ Object.keys(RK.cache).forEach(function(k){ if (RK.cache[k]) RK.cache[k].t = 0; }); } };
  /* lo tuyo cambió (XP, gato, nombre): la caché caduca y se vuelve a pedir al abrir, sin dejar la vista en blanco */
  if (typeof gPush === "function") { var _gPush = gPush; gPush = function(){ try { window.PLX_RK.olvida(); } catch (e) {} return _gPush.apply(this, arguments); }; }
  var instala = function(){ window.PLX_RANKING = abreRanking; if (window.PCB) PCB.rankings = abreRanking; };
  instala(); addEventListener("load", function(){ setTimeout(instala, 0); });
  /* 3.9.0: el trofeo, la corona y los dos ámbitos se piden en un rato libre: al entrar a Ranking ya están (el trofeo
     llegaba tarde y el hero salía un momento sin él) */
  var PRE = [];
  var precarga = function(){ if (PRE.length) return; ["trofeo", "corona", "birrete", "torre-eiffel"].forEach(function(n){ var i = new Image(); i.src = "img/ic/" + n + ".webp"; PRE.push(i); }); };
  var libre = function(){ if (window.requestIdleCallback) requestIdleCallback(precarga, { timeout: 4000 }); else setTimeout(precarga, 1500); };
  if (document.readyState === "complete") libre(); else addEventListener("load", libre);
  /* la capa vieja (plx60), si alguien la abre, se cierra y lleva a la pestaña */
  new MutationObserver(function(){ var c = document.querySelector(".rkx:not([hidden])"); if (c && c.innerHTML) { c.hidden = true; c.innerHTML = ""; document.documentElement.classList.remove("rkx-on"); abreRanking(); } })
    .observe(document.body, { childList: true });

  /* ====================== 4. Iconos pintados ====================== */
  var IC = function(n){ return "img/ic/" + n + ".webp"; };
  var POR_EMOJI = { "⭐": "estrella", "📖": "libro", "✍️": "lapiz", "✍": "lapiz", "🔁": "reloj-arena", "🎙️": "microfono", "🎙": "microfono", "👋": "pata", "🎁": "regalo",
    "🏆": "trofeo", "⚔️": "mando", "🤝": "corazon", "📚": "libros", "🗣️": "nota", "💬": "globo", "🏅": "birrete", "🗂️": "pergamino", "🎧": "audifonos",
    "🔥": "llama", "🎮": "mando", "👑": "corona", "💡": "bombilla", "☕": "cafe", "🥐": "croissant", "📝": "lapiz", "🎯": "estrella", "⏱️": "reloj-arena", "📅": "pergamino" };
  var POR_TITULO = [[/repaso del d/i, "reloj-arena"], [/mis errores/i, "pregunta"], [/gu[ií]a r[aá]pida/i, "libro"], [/diario/i, "pergamino"], [/pronunciaci/i, "microfono"],
    [/dictado/i, "audifonos"], [/acentos/i, "globo"], [/taller/i, "lapiz"], [/contrarreloj/i, "llama"], [/prueba de nivel/i, "birrete"], [/c1\.1/i, "corona"], [/examen/i, "trofeo"],
    [/vocabulario/i, "libros"], [/sonidos/i, "nota"], [/lecturas/i, "libro"], [/expresi[oó]n oral/i, "microfono"], [/conversa/i, "globo"], [/simulacro/i, "birrete"], [/mis palabras/i, "pergamino"]];
  var CONT = ".ms-ic, .amf-i, .vb-i, .ms-chest > span, .amt > span:first-child, .jg-mini > span:first-child, .ix-tab > span:first-child, .rcard .ri";
  /* 3.0.1: unidades de Aprender con iconos pintados según el tema, sin repetir ninguno en la misma lista */
  var UNIDAD = [[/primeros pasos|salud|present|hola|bienvenid/i, "pata"], [/color|arte|pint/i, "flor"], [/defender|rescate|ayuda|urgenc/i, "estrella"],
    [/n[uú]mero|fecha|hora|tiempo|d[ií]a a d[ií]a|rutina/i, "reloj-arena"], [/gente|familia|casa|hogar/i, "corazon"], [/ciudad|servicio|viaj|lugar/i, "torre-eiffel"],
    [/cuerpo|ropa|vestir|moda/i, "boina"], [/conversa|comunic|pregunt|hablar|di[aá]logo/i, "globo"], [/comer|comida|restaur|cocina|disfrut/i, "croissant"],
    [/vida diaria|caf[eé]/i, "cafe"], [/gusto|m[uú]sica|libre|ocio/i, "nota"], [/sonido|fon[eé]t|pronunc|escucha/i, "audifonos"], [/trabajo|estudi|clase|universidad/i, "laptop"],
    [/literatur|autor|novela|poes/i, "libro"], [/texto|escrib|redac|acad[eé]m/i, "lapiz"], [/cultura|franc[oó]fon|pa[ií]s|historia/i, "bandera"],
    [/examen|delf|dalf|prueba|simulacro/i, "trofeo"], [/gram[aá]tic|verbo|conjug|tiempos/i, "pergamino"], [/opini|debat|argument/i, "bombilla"],
    [/tecnolog|medio|red|internet/i, "movil"], [/juego|reto/i, "mando"], [/noche|sue[nñ]o/i, "luna"], [/regalo|fiesta|celebr/i, "regalo"], [/mundo|natural/i, "birrete"]];
  var POZO = ["libros", "birrete", "bombilla", "estrella", "corona", "nota", "globo", "cafe", "flor", "luna", "regalo", "pergamino", "movil", "mando", "baguette", "microfono", "llama", "laptop", "corazon", "croissant", "boina", "trofeo", "torre-eiffel", "bandera", "audifonos", "reloj-arena", "lapiz", "libro", "pata", "pregunta"];
  var unidades = function(raiz){
    var todas = [].slice.call(V.querySelectorAll(".lx-emo")); if (!todas.length) return;
    var usados = {}; todas.forEach(function(e){ if (e.dataset.pi) usados[e.dataset.pi] = 1; });
    todas.forEach(function(e){
      if (e.dataset.pi) return;
      var u = e.closest(".lx-unit, .psec, section, li") || e.parentNode, tit = u ? (u.querySelector("b, h3, strong") || u).textContent : "", n = null;
      for (var i = 0; i < UNIDAD.length && !n; i++) if (UNIDAD[i][0].test(tit) && !usados[UNIDAD[i][1]]) n = UNIDAD[i][1];
      for (var k = 0; k < POZO.length && !n; k++) if (!usados[POZO[k]]) n = POZO[k];
      if (!n) n = "libros";
      usados[n] = 1; e.dataset.pi = n; e.classList.add("pi"); e.style.setProperty("--pi", 'url("' + IC(n) + '")'); e.textContent = "";
    });
  };
  var pinta = function(raiz){
    try { unidades(raiz); } catch (e) {}
    (raiz || V).querySelectorAll(CONT).forEach(function(s){
      if (s.dataset.pi) return;
      var n = null, t = s.textContent.trim();
      if (POR_EMOJI[t]) n = POR_EMOJI[t];
      else if (s.classList.contains("ri")) { var card = s.closest(".rcard"), tit = card && card.querySelector(".rt b"); if (tit) for (var i = 0; i < POR_TITULO.length; i++) if (POR_TITULO[i][0].test(tit.textContent)) { n = POR_TITULO[i][1]; break; } }
      if (!n) return;
      s.dataset.pi = n; s.classList.add("pi"); s.style.setProperty("--pi", 'url("' + IC(n) + '")'); s.textContent = "";
    });
  };
  var observa = new MutationObserver(function(ms){ for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) { var n = ms[i].addedNodes[j]; if (n.nodeType === 1) pinta(n.parentNode || n); } });
  observa.observe(V, { childList: true, subtree: true });

  /* ====================== 5. Redes sociales ====================== */
  var SVG_IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.3" fill="currentColor"/></svg>';
  var SVG_FB = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z"/></svg>';
  var redes = function(clase){
    return '<div class="plx69-redes ' + (clase || "") + '"><a class="rs ig" href="' + IG + '" target="_blank" rel="noopener">' + SVG_IG + '<span><b>Instagram</b><small>@plexplay.app</small></span></a>' +
      '<a class="rs fb" href="' + FB + '" target="_blank" rel="noopener">' + SVG_FB + "<span><b>Facebook</b><small>PLEX PLAY</small></span></a></div>";
  };
  var tarjetaRedes = function(){
    if (view !== "perfil" || V.querySelector(".plx69-siguenos")) return;
    V.insertAdjacentHTML("beforeend", '<section class="plx69-siguenos"><img src="' + IC("corazon") + '" alt="" width="44" height="44"><div><h3>Síguenos en redes</h3><p>Retos, francés del día y todo lo nuevo de PLEX PLAY.</p>' + redes() + "</div></section>");
  };

  /* ====================== 6. Menú del avatar ====================== */
  var menu = null;
  var cierraMenu = function(){ if (menu) { menu.remove(); menu = null; document.querySelectorAll(".gavatar[aria-expanded]").forEach(function(b){ b.setAttribute("aria-expanded", "false"); }); } };
  var abreMenu = function(btn){
    cierraMenu();
    var G = {}; try { G = gEnsure(); } catch (e) {}
    var lv = 1, nom = ""; try { lv = catLevel(S.xp); } catch (e) {}
    try { nom = G.name || (window.PCB && PCB.me && PCB.me.nick) || ""; } catch (e) {}   /* 3.9.0: el nombre vive en gEnsure().name */
    var r = btn.getBoundingClientRect();
    menu = document.createElement("div"); menu.className = "plx69-menu"; menu.setAttribute("role", "menu");
    menu.innerHTML = '<div class="pm-top"><span class="pm-gato">' + gato(G.cat, "happy") + '</span><div><b>' + esc(nom || "Tu perfil") + '</b><small>Nivel ' + lv + " · " + Number(S.xp || 0).toLocaleString("es-CO") + " XP</small></div></div>" +
      '<button type="button" role="menuitem" data-pm="perfil"><img src="' + IC("pata") + '" alt="">Mi perfil y mi gato</button>' +
      '<button type="button" role="menuitem" data-pm="ranking"><img src="' + IC("trofeo") + '" alt="">Ranking</button>' +
      '<button type="button" role="menuitem" data-pm="ajustes"><img src="' + IC("bombilla") + '" alt="">Ajustes</button>' +
      '<div class="pm-sep">Síguenos</div>' +
      '<a role="menuitem" class="pm-rs" href="' + IG + '" target="_blank" rel="noopener"><span class="pm-ig">' + SVG_IG + '</span><span><b>Instagram</b><small>@plexplay.app</small></span></a>' +
      '<a role="menuitem" class="pm-rs" href="' + FB + '" target="_blank" rel="noopener"><span class="pm-fb">' + SVG_FB + '</span><span><b>Facebook</b><small>PLEX PLAY</small></span></a>' +
      (logged() ? '<button type="button" role="menuitem" class="pm-out" data-plx="logout">Cerrar sesión</button>' : "");
    document.body.appendChild(menu);
    var w = menu.offsetWidth; menu.style.left = Math.max(12, Math.min(innerWidth - w - 12, r.right - w)) + "px"; menu.style.top = (r.bottom + 10) + "px";
    btn.setAttribute("aria-expanded", "true");
  };
  window.addEventListener("click", function(e){
    /* 3.9.0: una sola clasificación. «Clasificación» de Perfil (otra lista, con ligas y profiles.wxp) abre la pestaña Ranking */
    var lb = e.target.closest && e.target.closest('[data-g="tab"][data-arg="lb"]');
    if (lb) { e.preventDefault(); e.stopPropagation(); cierraMenu(); abreRanking(); return; }
    var av = e.target.closest && e.target.closest(".gavatar");
    if (av) { e.preventDefault(); e.stopPropagation(); if (menu) cierraMenu(); else abreMenu(av); return; }
    var it = e.target.closest && e.target.closest("[data-pm]");
    if (it) { var a = it.dataset.pm; cierraMenu(); if (a === "perfil") go("perfil"); if (a === "ranking") abreRanking(); if (a === "ajustes") window.qsOpen(); return; }
    if (menu && !(e.target.closest && e.target.closest(".plx69-menu"))) cierraMenu();
  }, true);
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") cierraMenu(); });
  addEventListener("scroll", cierraMenu, { passive: true });

  /* ====================== 7. Ajustes ====================== */
  if (typeof qsHTML === "function" && typeof gModal === "function") {
    var ajustes = function(){
      var G = {}; try { G = gEnsure(); } catch (e) {}
      var lv = 1, nom = ""; try { lv = catLevel(S.xp); } catch (e) {}
      try { nom = G.name || (window.PCB && PCB.me && PCB.me.nick) || ""; } catch (e) {}   /* 3.9.0: el nombre vive en gEnsure().name */
      return '<div class="aj">' +
        '<div class="aj-top"><span class="aj-gato">' + gato(G.cat, "happy") + '</span><div><small class="gm-k">Ajustes</small><h2 class="gm-t" id="gm-title">' + esc(nom || "Tu PLEX PLAY") + "</h2>" +
          '<span class="aj-nv">Nivel ' + lv + " · " + Number(S.xp || 0).toLocaleString("es-CO") + " XP</span></div></div>" +
        '<h3 class="aj-h">Sonido, avisos y tema</h3>' + qsHTML() +
        '<h3 class="aj-h">Síguenos</h3>' + redes() +
        '<h3 class="aj-h">Tu cuenta</h3><div class="aj-cuenta"><button type="button" class="gbtn ghost" data-pm="perfil"><img src="' + IC("pata") + '" alt="">Mi perfil</button>' +
          (logged() ? '<button type="button" class="gbtn ghost qs-out" data-plx="logout">Cerrar sesión</button>' : "") + "</div>" +
          /* 3.2.4: borrar la cuenta desde la app (lo exige Google Play); antes estaba en una tarjeta de Perfil que ya no existe */
          (logged() ? '<button type="button" class="aj-borrar" data-plx69-borrar>Borrar mi cuenta</button>' : "") +
        '<p class="aj-pie">PLEX PLAY ' + VERSION + ' · <a href="privacy.html" target="_blank" rel="noopener">Privacidad</a> · <a href="terminos.html" target="_blank" rel="noopener">Términos</a></p>' +
        '<div class="set-row c"><button class="gbtn aj-listo" data-g="close" data-autofocus>Listo</button></div></div>';
    };
    var qsOpenNuevo = function(){ try { if (typeof gOpen !== "undefined" && gOpen && typeof gCloseModal === "function") gCloseModal(); } catch (e) {} gModal(ajustes(), "m-qs m-aj"); requestAnimationFrame(function(){ var a = document.querySelector(".aj"); if (a) a.scrollTop = 0; setTimeout(function(){ if (a) a.scrollTop = 0; }, 60); }); };
    try { qsOpen = qsOpenNuevo; } catch (e) {}
    window.qsOpen = qsOpenNuevo;
    window.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-qs=open]"); if (!b) return; e.preventDefault(); e.stopImmediatePropagation(); qsOpenNuevo(); }, true);
    document.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest(".aj [data-pm]"); if (!b) return; try { gCloseModal(); } catch (x) {} }, true);
  }

  /* ====================== enganche: después de cada pintada ====================== */
  var _render = render;
  render = function(){
    var r = _render.apply(this, arguments);
    try { menus(); pinta(V); tarjetaRedes(); if (view === "ranking") { var c = RK.cache[clave()]; if (!c || (c.error === "sesion" ? logged() : !c.error && Date.now() - c.t >= 60000)) pideRanking(); } } catch (e) {}   /* «sesion»: se entró a la cuenta después de abrir el Ranking */
    try { if (view === "perfil") { var t = V.querySelector('.ptabs [data-arg="lb"]'); if (t && t.textContent !== "Ranking") t.textContent = "Ranking"; } } catch (e) {}
    return r;
  };
  try { window.render = render; } catch (e) {}

  /* ====================== estilos ====================== */
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-plx69-borrar]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    try { if (typeof gCloseModal === "function") gCloseModal(); } catch (x) {}
    setTimeout(function(){
      gModal('<small class="gm-k">Cuenta</small><h2 class="gm-t">¿Borrar tu cuenta?</h2><p class="gm-sub">Se borrarán para siempre tu cuenta, tu progreso, tus textos y tu lugar en la clasificación. No se puede deshacer.</p>' +
        '<div class="set-row c"><button class="gbtn ghost" data-g="close" data-autofocus>Cancelar</button><button class="gbtn danger" data-acct="del-yes">Borrar mi cuenta</button></div>', "m-del");
    }, 250);
  }, true);

  var st = document.createElement("style"); st.id = "plx69";
  st.textContent = `
  /* entrada vieja (fade de 0,7 s por tarjeta) fuera: la reemplaza la transición nueva */
  #view.enter>*:not(.rv){animation:none!important}
  #view.plx69-entra{animation:plx69Entra .18s ease-out both}
  @keyframes plx69Entra{from{opacity:0}to{opacity:1}}
  @media (prefers-reduced-motion:reduce){#view.plx69-entra{animation:none!important}}
  /* ranking dentro de la app */
  .rkv{max-width:720px;margin:0 auto}
  .rkv-hero{margin:0 0 14px!important;border-radius:26px!important;padding:24px 22px 24px!important}
  .rkv-hero h1{margin:0 0 4px!important}
  .rkv-hero .rkx-trofeo{top:14px!important;font-size:0}
  /* 3.9.0: trofeo, corona y ámbitos con los iconos pintados; el texto del hero ya no pasa por debajo del trofeo */
  .rkv-hero .rkx-trofeo img{display:block;width:80px;height:80px}
  .rkv-hero p{padding-right:96px}
  .rkv .rkx-corona{top:-28px;font-size:0}.rkv .rkx-corona img{display:block;width:34px;height:34px}
  .rkv .rkx-tabs button img{width:24px;height:24px;flex:none}
  /* el birrete es casi negro: en oscuro, sin seleccionar, se perdía contra el fondo */
  :root[data-theme=dark] .rkv .rkx-tabs button[aria-selected="false"] img{filter:drop-shadow(0 0 1px rgba(255,255,255,.75)) brightness(1.35)}
  @media (prefers-color-scheme:dark){:root:not([data-theme=light]) .rkv .rkx-tabs button[aria-selected="false"] img{filter:drop-shadow(0 0 1px rgba(255,255,255,.75)) brightness(1.35)}}
  .rkv .rkx-base em{font:900 22px/1 Poppins,system-ui,sans-serif}
  .rkx-av img{display:block;width:100%;height:100%}
  /* tu fila abajo, solo si no estás en la lista (pasado el puesto 50); sin las reglas de la capa vieja */
  .rkv-fijo{position:sticky;bottom:calc(88px + env(safe-area-inset-bottom));margin:8px 0 0;padding:0;list-style:none;z-index:3}
  .rkv-fijo .rkx-f{background:var(--raise,#fff);box-shadow:0 14px 30px -12px rgba(11,45,116,.55),inset 0 0 0 2px #1E5BD7;animation:none}
  @media (min-width:900px){.rkv-fijo{bottom:16px}}
  /* enlace discreto a la liga semanal (programa / semestre) */
  .rkv-liga{margin:14px 0 0;text-align:center}
  .rkv-liga button{appearance:none;border:0;background:none;min-height:44px;padding:10px 12px;font:700 13px/1.3 Inter,system-ui,sans-serif;color:var(--stone,#5B6B8C);text-decoration:underline;text-underline-offset:3px;cursor:pointer}
  .rkv-liga button:focus-visible{outline:2px solid #1E5BD7;outline-offset:2px;border-radius:10px}
  /* iconos pintados: un solo estilo */
  .pi{background-image:var(--pi)!important;background-position:center!important;background-size:78%!important;background-repeat:no-repeat!important;font-size:0!important;color:transparent!important}
  .pi>svg,.pi>*{display:none!important}
  .rcard .ri.pi.pi.pi{background:#FFF6E3 var(--pi) center/74% no-repeat!important;border-radius:14px!important;box-shadow:inset 0 0 0 1px rgba(15,27,61,.06)!important}
  .rcard .ri.pi::before,.rcard .ri.pi::after{display:none!important}
  .jg-mini>span.pi,.ix-tab>span.pi{display:inline-block;width:1.55em;height:1.55em;font-size:inherit!important;background-size:contain!important;vertical-align:-.35em}
  .ix-tab>span.pi{width:1.35em;height:1.35em;margin-right:6px}
  .ms-ic.pi,.amf-i.pi,.vb-i.pi,.ms-chest>span.pi{display:inline-block;min-width:34px;min-height:34px;background-size:contain!important}
  .amt>span.pi{display:block!important;width:34px!important;height:34px!important;margin:0 0 6px!important;background-size:contain!important;position:static!important;transform:none!important}
  .lx-emo.pi{display:inline-block!important;width:46px!important;height:46px!important;background-size:contain!important}
  html[data-theme=dark] .rcard .ri.pi.pi.pi,.dark .rcard .ri.pi.pi.pi{background-color:rgba(255,246,227,.12)!important}
  @media (prefers-color-scheme:dark){html:not([data-theme=light]) .rcard .ri.pi.pi.pi{background-color:rgba(255,246,227,.12)!important}}
  /* portada de unidad: franja baja, no una foto gigante */
  .lx-cover{aspect-ratio:auto!important;height:112px;margin:2px 0 12px!important;border-radius:18px!important}
  .lx-cover img{left:auto!important;right:0;width:62%!important;object-position:center 40%}
  .lx-cover::after{background:linear-gradient(90deg,#0B2D74 0%,#0B2D74 36%,rgba(11,45,116,.55) 58%,rgba(11,45,116,0) 100%)!important}
  .lx-cover figcaption{top:0;bottom:0!important;right:40%!important;align-content:center}
  .lx-cover b{font-size:1.1rem!important}
  @media (min-width:900px){.lx-cover{height:132px}.lx-cover img{width:48%!important}.lx-cover figcaption{right:50%!important;left:22px!important}.lx-cover b{font-size:1.3rem!important}}
  /* redes */
  .plx69-redes{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .plx69-redes .rs{min-width:0;text-transform:none!important;letter-spacing:0!important;display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:16px;color:#fff;text-decoration:none;font-family:Inter,system-ui,sans-serif;transition:transform .15s}
  .plx69-redes .rs:active{transform:scale(.97)}
  .plx69-redes .rs svg{width:26px;height:26px;flex:none}
  .plx69-redes .rs span{display:grid;line-height:1.15;min-width:0}.plx69-redes .rs b,.plx69-redes .rs small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:none!important}.plx69-redes .rs b{font-size:14px}.plx69-redes .rs small{font-size:11.5px;opacity:.85}
  .plx69-redes .ig{background:linear-gradient(135deg,#F58529,#DD2A7B 50%,#8134AF)}
  .plx69-redes .fb{background:#1877F2}
  .plx69-redes .rs:focus-visible{outline:3px solid #FFD200;outline-offset:2px}
  .plx69-siguenos{display:flex;gap:14px;align-items:flex-start;margin:18px 0 8px;padding:18px;border-radius:20px;background:var(--raise,#fff);box-shadow:0 1px 0 rgba(15,27,61,.06),0 10px 24px -18px rgba(15,27,61,.35);border:1px solid var(--line,#E7E1D6)}
  .plx69-siguenos>img{flex:none}.plx69-siguenos>div{min-width:0;flex:1}
  @media (max-width:420px){.plx69-siguenos .plx69-redes{grid-template-columns:1fr}}
  .plx69-siguenos h3{margin:2px 0 2px;font:800 17px/1.2 Poppins,system-ui,sans-serif}
  .plx69-siguenos p{margin:0 0 12px;color:var(--stone,#5B6B8C);font-size:13.5px}
  /* menú del avatar */
  .plx69-menu{position:fixed;z-index:2147483000;width:292px;padding:10px;border-radius:22px;background:var(--raise,#fff);color:var(--ink,#0F1B3D);
    box-shadow:0 24px 60px -18px rgba(8,20,52,.55),0 0 0 1px rgba(15,27,61,.08);font-family:Inter,system-ui,sans-serif;animation:plx69Menu .28s cubic-bezier(.16,1,.3,1) both;transform-origin:top right}
  @keyframes plx69Menu{from{opacity:0;transform:translateY(-8px) scale(.96)}}
  .plx69-menu .pm-top{display:flex;align-items:center;gap:10px;padding:8px 8px 12px;border-bottom:1px solid var(--line,#ECE6DA);margin-bottom:6px}
  .plx69-menu .pm-gato{width:48px;height:48px;border-radius:50%;background:#E8EEFF;display:grid;place-items:center;overflow:hidden}
  .plx69-menu .pm-gato svg{width:48px;height:48px}
  .plx69-menu .pm-top b{display:block;font:800 15px/1.2 Poppins,system-ui,sans-serif}.plx69-menu .pm-top small{color:var(--stone,#5B6B8C)}
  .plx69-menu button{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:12px;width:100%;padding:10px;border-radius:14px;font-weight:700;font-size:14.5px}
  .plx69-menu button:hover,.plx69-menu button:focus-visible{background:rgba(30,91,215,.08)}
  .plx69-menu button img{width:30px;height:30px}
  .plx69-menu .pm-sep{margin:8px 10px 6px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--stone,#5B6B8C)}
  .plx69-menu .pm-rs{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:14px;color:inherit;text-decoration:none;font-size:14px}
  .plx69-menu .pm-rs:hover,.plx69-menu .pm-rs:focus-visible{background:rgba(30,91,215,.08)}
  .plx69-menu .pm-rs b{display:block;font-weight:700}.plx69-menu .pm-rs small{display:block;color:var(--stone,#5B6B8C);font-size:12px}
  .plx69-menu .pm-ig,.plx69-menu .pm-fb{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;color:#fff}
  .plx69-menu .pm-ig{background:linear-gradient(135deg,#F58529,#DD2A7B 50%,#8134AF)}.plx69-menu .pm-fb{background:#1877F2}
  .plx69-menu .pm-ig svg,.plx69-menu .pm-fb svg{width:18px;height:18px}
  .plx69-menu .pm-out{display:flex!important;justify-content:center;margin-top:6px!important;padding:12px 10px!important;border-top:1px solid var(--line,#ECE6DA)!important;border-radius:0 0 14px 14px!important}
  .plx69-menu .plx69-redes{padding:0 4px 6px;gap:8px}.plx69-menu .rs{padding:9px 8px;gap:7px}.plx69-menu .rs small{display:none}
  .plx69-menu .rs svg{width:20px!important;height:20px!important}.plx69-menu .rs b{font-size:13px!important}
  .plx69-menu .pm-out{justify-content:center;color:#C02626;margin-top:4px;border-top:1px solid var(--line,#ECE6DA);border-radius:0 0 14px 14px}
  /* ajustes */
  .gmodal.m-aj .gm-card{max-width:440px;padding:0!important;overflow:hidden}
  .aj{padding:0 18px 18px;max-height:min(86vh,760px);overflow-y:auto;-webkit-overflow-scrolling:touch}
  .aj-top{display:flex;align-items:center;gap:14px;margin:0 -18px 6px;padding:22px 20px 20px;color:#fff;
    background:radial-gradient(120% 120% at 100% 0%,rgba(255,210,0,.3),transparent 55%),linear-gradient(160deg,#0B2D74,#1E5BD7)}
  .aj-top .gm-k{color:#FFD200!important;margin:0}.aj-top .gm-t{color:#fff!important;margin:2px 0 4px!important;text-align:left!important;font-size:22px!important}
  .aj-gato{flex:none;width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,.14);display:grid;place-items:center;overflow:hidden;box-shadow:inset 0 0 0 3px rgba(255,255,255,.5)}
  .aj-gato svg{width:68px;height:68px}
  .aj-nv{display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.16);font:700 12px/1 Inter,system-ui,sans-serif}
  .aj-h{margin:18px 2px 8px;font:800 12px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--stone,#5B6B8C)}
  .aj .qs{display:grid;gap:0;border-radius:18px;overflow:hidden;background:var(--paper2,#F7F3EA);border:1px solid var(--line,#ECE6DA)}
  .aj .qs-row{display:grid!important;grid-template-columns:40px 1fr auto;align-items:center;gap:12px;padding:12px 14px!important;border:0!important;border-bottom:1px solid var(--line,#ECE6DA)!important;margin:0!important}
  .aj .qs-row:last-child{border-bottom:0!important}
  .aj .qs-row::before{content:"";width:40px;height:40px;border-radius:12px;background:#fff center/74% no-repeat;box-shadow:0 1px 0 rgba(15,27,61,.06)}
  .aj .qs-row:has([data-qs=music])::before{background-image:url(img/ic/nota.webp)}
  .aj .qs-row:has([data-qs=sfx])::before{background-image:url(img/ic/audifonos.webp)}
  .aj .qs-row:has([data-qs=remind])::before{background-image:url(img/ic/reloj-arena.webp)}
  .aj .qs-row:has([data-qs=theme])::before{background-image:url(img/ic/luna.webp)}
  .aj .qs-row.col{grid-template-columns:40px 1fr}
  .aj .qs-row.col .qs-seg{grid-column:1/-1}
  .aj .qs-row b{font-size:15px}.aj .qs-row small{font-size:12.5px;line-height:1.35}
  .aj .qs-next{padding:0 14px 12px 66px;border-bottom:1px solid var(--line,#ECE6DA)}
  .aj .qs-next .gbtn{width:100%;border-radius:12px}
  .aj .qs-seg{display:grid!important;grid-template-columns:repeat(3,1fr);gap:6px;padding:5px;border-radius:14px;background:#fff;border:1px solid var(--line,#ECE6DA)}
  .aj .qs-seg button{all:unset;cursor:pointer;text-align:center;padding:10px 4px;border-radius:10px;font-weight:800;font-size:13px}
  .aj .qs-seg button[aria-pressed=true]{background:linear-gradient(180deg,#1E5BD7,#0B2D74);color:#fff;box-shadow:0 6px 14px -8px rgba(11,45,116,.9)}
  .aj .qs-seg button[data-arg=auto]::before{content:"◐ "}.aj .qs-seg button[data-arg=light]::before{content:"☀ "}.aj .qs-seg button[data-arg=dark]::before{content:"☾ "}
  .aj-cuenta{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .aj-cuenta .gbtn{display:flex;align-items:center;justify-content:center;gap:8px}
  .aj-cuenta .gbtn img{width:22px;height:22px}
  .aj-cuenta .qs-out{color:#C02626!important}
  .aj-borrar{all:unset;box-sizing:border-box;cursor:pointer;display:block;margin:10px auto 0;padding:10px 14px;min-height:44px;border-radius:12px;color:#C02626;font-weight:700;font-size:14px;text-decoration:underline;text-underline-offset:3px}
  :root[data-theme=dark] .aj-borrar{color:#F08A8A}
  .aj-borrar:focus-visible{outline:3px solid #C02626;outline-offset:2px}
  .aj-pie{margin:16px 0 4px;text-align:center;font-size:12px;color:var(--stone,#5B6B8C)}
  .aj-pie a{color:inherit}
  .aj .set-row.c{margin-top:8px}.aj-listo{min-width:160px}
  html[data-theme=dark] .aj .qs,html[data-theme=dark] .aj .qs-seg{background:rgba(255,255,255,.05)}
  html[data-theme=dark] .aj .qs-row::before{background-color:rgba(255,255,255,.1)}
  @media (prefers-color-scheme:dark){html:not([data-theme=light]) .aj .qs,html:not([data-theme=light]) .aj .qs-seg{background:rgba(255,255,255,.05)}html:not([data-theme=light]) .aj .qs-row::before{background-color:rgba(255,255,255,.1)}}
  `;
  document.head.appendChild(st);

  /* primera pasada (la app ya pintó antes de cargar este archivo) */
  try { if (view === "ranking") render(); else { menus(); pinta(V); tarjetaRedes(); } } catch (e) {}
  setTimeout(menus, 60);
})();
