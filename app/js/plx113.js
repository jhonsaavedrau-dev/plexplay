/* PLEX PLAY 4.41.0 — Manzana 3D en toda la app (window.PLX_MZ3D)
   Donde Manzana aparece de forma natural, la imagen pintada se cambia por el Manzana 3D (vendor/manzana3d, el mismo
   módulo de Type It y Conversa) con una expresión que va con el momento:
     - Inicio: en el camino de lecciones (plx101), el Manzana de la unidad actual; saluda al llegar y reacciona al tocarlo.
       Las poses pintadas de las otras unidades (con café, lupa, ovillo…) se quedan como están.
     - Recorrido guiado (plx104): cada paso tiene su gesto (saluda, se alegra, piensa, curiosea, celebra…).
     - Celebración del final de la lección (plx106): Manzana celebra junto al cofre.
   Respeta la regla de Jhon: no sale en las explicaciones ni en la corrección de los ejercicios.
   Funcionamiento:
     - Cada lugar es una «ranura» con su clave. La app repinta #view y el recorrido muy seguido: si aparece una imagen
       nueva para una clave que ya tiene Manzana vivo, se MUEVE el mismo lienzo (no se recrea el contexto WebGL).
     - Fuera de pantalla se pausa (IntersectionObserver); al salir del DOM se destruye a los pocos segundos.
     - A lo sumo 3 a la vez. Sin WebGL, con «reducir datos» o si el módulo no carga, queda la imagen pintada.
     - three.js se pide después de cargar la página y, en la primera visita, cuando el service worker termina de precargar,
       para no retrasar la primera pintada ni las imágenes. */
(function(){
  "use strict";
  var D = document, H = D.documentElement;
  var URLMOD = "vendor/manzana3d/manzana3d.js?v=4";
  var mod = null, pedido = null;
  var modulo = function(){
    if (!pedido) pedido = import(new URL(URLMOD, D.baseURI).href).then(function(m){ mod = m && m.hayWebGL() ? m : null; return mod; }).catch(function(){ pedido = null; return null; });
    return pedido;
  };
  var ahorro = function(){ try { if (localStorage.getItem("plx-mz3") === "no" || window.PLX_LIVIANO) return true; return !!(navigator.connection && navigator.connection.saveData); } catch (e) { return false; } };

  /* de la imagen pintada al gesto */
  var GESTO = { "mz-hola": "saludar", "saluda": "saludar", "mz-feliz": "acierto", "feliz": "acierto", "mz-gafas": "pensativo", "mz-curioso": "curioso",
    "mz-lado": "curioso", "mz-vamos": "celebrar", "mz-juega": "guino", "mz-duerme": "dormir", "bandera": "saludar", "duda": "curioso", "lupa": "pensativo" };
  var gestoDe = function(img){ var m = /\/([a-z0-9-]+)\.webp/i.exec(img.getAttribute("src") || ""); return (m && GESTO[m[1]]) || "reposo"; };

  /* ranuras: dónde, con qué clave y cómo se encuadra */
  var RANURAS = [
    { sel: '.p5-u[data-est="actual"] img.p5-mz', clave: "mapa", lejos: 0.86, mirar: [0, -0.15], gesto: function(){ return "saludar"; } },
    { sel: "img.rc-mz", clave: "recorrido", lejos: 0.9, mirar: [0, 0], gesto: gestoDe }
  ];

  var vivos = {};           /* clave → { caja, m, img } */
  var visto = typeof IntersectionObserver === "function" ? new IntersectionObserver(function(es){
    es.forEach(function(e){ var v = e.target.__mz3; if (v && v.m && e.target.isConnected) v.m.pausa(!e.isIntersecting); });
  }) : null;

  var cuantos = function(){ return Object.keys(vivos).length; };
  var crea = function(clave, r, img){
    var caja = D.createElement("span");
    caja.className = "mz3 " + img.className;
    caja.setAttribute("aria-hidden", "true");
    var lienzo = D.createElement("canvas"); caja.appendChild(lienzo);
    var v = { caja: caja, m: null, img: img, r: r, clave: clave, fuera: 0 };
    caja.__mz3 = v;
    vivos[clave] = v;
    return v;
  };
  /* la caja ocupa el sitio de la imagen (mismas clases, mismo alto) y la imagen se oculta */
  var coloca = function(v, img){
    var alto = img.getBoundingClientRect().height || img.offsetHeight;
    if (!alto && img.naturalWidth) alto = img.getBoundingClientRect().width * img.naturalHeight / img.naturalWidth;
    v.caja.className = "mz3 " + img.className.replace(/\bmz3-oculta\b/, "").trim() + (v.m ? " listo" : "");
    var st = img.getAttribute("style") || "";
    v.caja.setAttribute("style", st);
    if (alto) v.caja.style.height = Math.round(alto) + "px";
    if (v.caja.previousElementSibling !== img && v.caja.nextElementSibling !== img) img.after(v.caja);
    if (v.m) img.classList.add("mz3-oculta");     /* la pintada se ve hasta que el 3D está listo */
    v.img = img; v.fuera = 0;
    if (visto) { visto.unobserve(v.caja); visto.observe(v.caja); }
    /* al moverlo de sitio, despertarlo si quedó en pantalla (el aviso viejo de «fuera» puede llegar tarde) */
    requestAnimationFrame(function(){
      if (!v.m || !v.caja.isConnected) return;
      var b = v.caja.getBoundingClientRect();
      if (b.bottom > 0 && b.top < innerHeight && b.width) v.m.pausa(false);
    });
  };
  var arranca = function(v, gesto){
    if (v.m || v.arrancando) { if (v.m && gesto) v.m.estado(gesto); return; }
    v.arrancando = true;
    modulo().then(function(m){
      v.arrancando = false;
      if (!m || !v.caja.isConnected) { quita(v, true); return; }
      try {
        v.m = m.crearManzana(v.caja.querySelector("canvas"), { lejos: v.r.lejos || 1 });
        if (v.r.mirar) v.m.mirar(v.r.mirar[0], v.r.mirar[1]);
        v.caja.classList.add("listo");
        if (v.img) v.img.classList.add("mz3-oculta");
        var g = gesto || "saludar";
        setTimeout(function(){ v.m && v.m.estado(g); }, 250);
      } catch (e) { quita(v, true); }
    });
  };
  /* destruye y devuelve la imagen pintada */
  var quita = function(v, devolver){
    if (v.m) { try { v.m.destruir(); } catch (e) {} v.m = null; }
    if (visto) visto.unobserve(v.caja);
    v.caja.remove();
    if (devolver && v.img) v.img.classList.remove("mz3-oculta");
    if (vivos[v.clave] === v) delete vivos[v.clave];
  };

  var revisa = function(){
    pendiente = 0;
    if (H.classList.contains("mz3-no")) return;
    RANURAS.forEach(function(r){
      var imgs = D.querySelectorAll(r.sel);
      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        if (img.classList.contains("mz3-oculta") && img.nextElementSibling && img.nextElementSibling.__mz3) continue;
        if (!img.offsetParent && getComputedStyle(img).position !== "fixed") continue;   /* oculta (p. ej. portada del PC en el teléfono) */
        var v = vivos[r.clave], gesto = r.gesto(img), nueva = !v;
        if (!v) {
          if (cuantos() >= 3) { var libre = Object.keys(vivos).map(function(k){ return vivos[k]; }).filter(function(x){ return !x.caja.isConnected; })[0]; if (libre) quita(libre, false); }
          if (cuantos() >= 3) continue;
          v = crea(r.clave, r, img);
        }
        var antes = v.gesto;
        coloca(v, img);
        if (!v.m) arranca(v, gesto);
        else if (nueva || gesto !== antes) v.m.estado(gesto);
        v.gesto = gesto;
      }
    });
  };
  var pendiente = 0;
  /* una revisión por cuadro como mucho (antes, una por cada lote de cambios del DOM, y cada una medía el diseño) */
  var programa = function(){ if (pendiente) return; pendiente = 1; requestAnimationFrame(revisa); };

  /* limpieza: lo que quedó fuera del DOM varios segundos se destruye */
  /* lo que sale del DOM se pausa enseguida y se guarda ~40 s: si vuelves (p. ej. a Práctica) se reutiliza sin
     volver a crear el contexto WebGL ni compilar los shaders, que es lo más lento de todo */
  setInterval(function(){
    Object.keys(vivos).forEach(function(k){
      var v = vivos[k];
      if (v.caja.isConnected) { v.fuera = 0; return; }
      if (v.m) v.m.pausa(true);
      if (++v.fuera >= 16) quita(v, false);
    });
  }, 2500);

  /* -------- celebración del final de la lección (plx106): Manzana celebra junto al cofre -------- */
  var celebra = function(){
    var esc = D.querySelector(".cel-cofre .cel-esc");
    if (!esc || esc.querySelector(".mz3-cel")) return;
    var v = vivos.celebra;
    if (v && v.m) quita(v, false);
    var img = D.createElement("img"); img.className = "mz3-cel-img"; img.alt = ""; img.src = "img/mz3/celebra.webp";
    var hueco = D.createElement("span"); hueco.className = "mz3-cel"; hueco.appendChild(img); esc.appendChild(hueco);
    if (H.classList.contains("mz3-no")) return;
    v = crea("celebra", { lejos: 0.92, mirar: [0.45, -0.1] }, img);
    hueco.appendChild(v.caja); v.img = img;
    v.caja.className = "mz3 mz3-cel-c"; if (visto) visto.observe(v.caja);
    arranca(v, "celebrar");
    setTimeout(function(){ v.m && v.m.estado("carinoso"); }, 3000);
  };

  var celPend = 0;
  var mo = new MutationObserver(function(){ programa(); if (!celPend) { celPend = 1; requestAnimationFrame(function(){ celPend = 0; celebra(); }); } });
  var empieza = function(){
    if (ahorro()) { H.classList.add("mz3-no"); return; }
    mo.observe(D.body, { childList: true, subtree: true });
    programa();
  };
  /* three.js se pide cuando el navegador está libre; las ranuras esperan a que llegue */
  /* en la primera visita el service worker está precargando: se espera a que termine para no quitarle conexiones */
  var listo = function(){
    var sw = navigator.serviceWorker, primera = sw && !sw.controller;
    var espera = primera ? Promise.race([sw.ready, new Promise(function(r){ setTimeout(r, 15000); })]).then(function(){ return new Promise(function(r){ setTimeout(r, 1500); }); }) : Promise.resolve();
    espera.then(function(){ (window.requestIdleCallback || function(f){ return setTimeout(f, 600); })(function(){ modulo(); empieza(); }, { timeout: 2000 }); });
  };
  if (D.readyState === "complete") setTimeout(listo, 800); else addEventListener("load", function(){ setTimeout(listo, 800); });

  window.PLX_MZ3D = {
    vivos: function(){ var o = {}; Object.keys(vivos).forEach(function(k){ var v = vivos[k]; o[k] = { m3d: !!v.m, estado: v.m ? v.m.actual : "", visible: v.caja.isConnected }; }); return o; },
    gesto: function(clave, e){ var v = vivos[clave]; if (v && v.m) v.m.estado(e); },
    hablar: function(clave, si){ var v = vivos[clave]; if (v && v.m && v.m.hablar) v.m.hablar(si); },
    /* otro módulo registra un lugar: { sel, clave, lejos, mirar, gesto(img) } */
    ranura: function(r){ if (!r.gesto) r.gesto = function(){ return "saludar"; }; RANURAS.push(r); programa(); },
    modulo: modulo
  };

  var st = D.createElement("style"); st.id = "plx113";
  st.textContent = `
  .mz3{display:block;position:relative}
  .mz3 canvas{display:block;width:100%;height:100%}
  .mz3.listo canvas{animation:mz3In .35s ease-out}
  html .mz3:not(.listo){display:none!important}
  @layer p5 { html body .mz3:not(.listo){display:none!important} }
  @keyframes mz3In{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
  html img.mz3-oculta.mz3-oculta{display:none!important}
  @layer p5 { html body img.mz3-oculta.mz3-oculta{display:none!important} }
  /* el lienzo hereda las clases de la imagen; sin filtro de sombra (el 3D trae la suya) ni animación de flote */
  /* Inicio: junto a la lección que toca; se puede tocar (salta, guiña, se alegra) */
  @layer p5 { html.mk .p5-u .mz3.p5-mz{filter:none!important;pointer-events:auto!important;cursor:pointer;width:112px!important;height:124px!important;margin-top:-64px!important} }
  .gmodal .rc-c .mz3.rc-mz{cursor:pointer}
  /* celebración: a la izquierda del cofre, un poco por delante */
  .cel-esc .mz3-cel{position:absolute;left:-86px;bottom:-6px;width:112px;height:124px;z-index:2;pointer-events:auto}
  .cel-esc .mz3-cel .mz3,.cel-esc .mz3-cel img{width:100%;height:100%;object-fit:contain}
  .cel-esc .mz3-cel img:not(.mz3-oculta){animation:celEntra .5s .2s cubic-bezier(.2,1.4,.4,1) both}
  @media (max-width:360px){ .cel-esc .mz3-cel{left:-70px;width:92px;height:102px} }
  `;
  D.head.appendChild(st);
})();
