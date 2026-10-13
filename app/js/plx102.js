/* PLEX PLAY 4.24 — PLEX Plus, plan institucional y anuncios con recompensa. OCULTO hasta encenderlo.
   Nada de esto se ve ni cambia el comportamiento de la app mientras el servidor diga monetizacion = 'no'
   (plx_config, ver herramientas/monetizacion/LEEME.md). Para probarlo en un teléfono o en el computador sin encender
   nada: abrir la app con ?dinero=1 (anuncios simulados; ?dinero=plus además simula ser Plus; ?dinero=0 lo quita).

   - PLEX Plus: sin anuncios, 10 veces más IA al día (lo cuenta plx-ia con plx_ia_consumir, 08-ia.sql), simulacros
     sin límite (gratis: 1 al mes), 2 protectores de racha cada mes y tres accesorios exclusivos para el gato.
     Se paga con Wompi (función plx-pagos): mensual o anual, sin renovación automática.
   - Plan institucional: una universidad o programa recibe un código; quien lo canjea (estudiante o docente) queda
     con Plus mientras el plan esté vigente. Con panel_con_plan = 'si', Análisis y la lista en CSV del panel
     docente piden el plan institucional.
   - Anuncios con recompensa, siempre a elección de quien juega: 50 monedas (3 al día) o un protector de racha
     (1 por semana) en la Tienda. Nunca en lecciones ni juegos, nunca a docentes ni a cuentas Plus.
     Web: Ad Placement API de AdSense (rewarded). Android: el puente PlexAndroid.anuncioRecompensa (AdMob). */
/* 4.33 — PLEX Plus con beneficios que se notan y pantalla propia del sistema (clases pl5-*):
   - Pelaje legendario «Nébula» (COATS.nebula): degradado que gira, ojos dorados y destellos. Solo Plus.
   - Doble de monedas en todo lo que da XP, cofre de 500 monedas cada mes y sello PLUS junto al nombre en el Perfil.
   - La pantalla muestra TU gato en legendario, la colección exclusiva, las ventajas con su cifra y Gratis frente a Plus.
   El CSS de pl5 va en @layer p5 (todo !important), como el resto de la piel. */
(function(){
  "use strict";
  var D = document, H = D.documentElement;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var MO = { on: false, servidor: false, pagos: false, anuncios: false, adsense: "", mes: 9900, anio: 59900, panel: false, contacto: "", plan: { plus: false }, listo: false, planVisto: false };

  /* ---------------- modo de prueba (solo este dispositivo) ---------------- */
  try {
    var qd = new URLSearchParams(location.search).get("dinero");
    if (qd === "1" || qd === "plus") { localStorage.setItem("plx-dinero", "1"); if (qd === "plus") localStorage.setItem("plx-dinero-plus", "1"); else localStorage.removeItem("plx-dinero-plus"); }
    if (qd === "0") { localStorage.removeItem("plx-dinero"); localStorage.removeItem("plx-dinero-plus"); }
  } catch (e) {}
  var prueba = function(){ try { return localStorage.getItem("plx-dinero") === "1"; } catch (e) { return false; } };
  var pruebaPlus = function(){ try { return prueba() && localStorage.getItem("plx-dinero-plus") === "1"; } catch (e) { return false; } };

  var G = function(){ try { return gEnsure(); } catch (e) { return {}; } };
  var conSesion = function(){ try { return !!(window.PCB && PCB.sb && PCB.uid); } catch (e) { return false; } };
  var docente = function(){ try { return isTeacher() && !(typeof tAsStudent === "function" && tAsStudent()); } catch (e) { return false; } };
  var admin = function(){ try { return typeof isAdmin === "function" && isAdmin(); } catch (e) { return false; } };
  var aviso = function(t){ try { toast(t); } catch (e) {} };
  var guarda = function(){ try { save(true); } catch (e) {} try { if (typeof gPush === "function") gPush(true); } catch (e) {} };
  var dia = function(){ try { return dkey(); } catch (e) { return new Date().toISOString().slice(0, 10); } };
  var mesClave = function(){ return dia().slice(0, 7); };
  var semClave = function(){ try { return weekKey(); } catch (e) { return dia(); } };
  var pesos = function(n){ return "$ " + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); };
  /* 4.30: PLEX Plus se ve siempre que el servidor no lo apague (monetizacion = 'no' en plx_config). Mientras no esté
     instalado 07-planes.sql, la vitrina se muestra y el pago dice «Muy pronto». */
  /* 4.36 (pedido de Jhon antes de la reunión con los docentes: «publica todo excepto el Plus»): PLEX Plus queda APAGADO
     para todos (ni vitrina, ni entrada del riel, ni tarjeta del panel docente, ni pelaje legendario), diga lo que diga el
     servidor. Se enciende poniendo "plus": true en config.js. ?dinero=1 lo sigue mostrando solo en ese navegador, para
     probarlo. El interruptor va aquí y no en config.js porque config.js no lleva ?v= y Cloudflare lo guarda 4 horas. */
  var APAGADO = !(window.PC_CONFIG && window.PC_CONFIG.plus === true);
  var activo = function(){ if (APAGADO) return prueba(); return MO.on || prueba() || !MO.servidor; };
  var hayAnuncios = function(){ return !!(window.PlexAndroid && typeof PlexAndroid.anuncioRecompensa === "function") || !!(MO.anuncios && MO.adsense) || prueba(); };
  var esPlus = function(){ return !!(MO.plan && MO.plan.plus) || pruebaPlus(); };
  var pintar = function(){ try { if (!window.P) render(); } catch (e) {} };

  /* ---------------- configuración y plan (servidor) ---------------- */
  var cargando = null;
  var carga = function(forzar){
    if (cargando && !forzar) return cargando;
    cargando = (async function(){
      try {
        if (window.PCB && PCB.sb) {
          var r = await PCB.sb.rpc("plx_monetizacion");
          if (!r.error && r.data) { Object.assign(MO, r.data); MO.servidor = true; }
        }
      } catch (e) {}
      if (prueba()) { MO.on = true; MO.anuncios = true; }
      if (!MO.servidor && !APAGADO) { MO.on = true; }
      if (activo() && conSesion()) {
        try { var p = await PCB.sb.rpc("plx_mi_plan"); if (!p.error && p.data) { MO.plan = p.data; MO.planVisto = true; } } catch (e) {}
      }
      MO.listo = true;
      H.classList.toggle("plx-dinero", activo());
      H.classList.toggle("plx-plus", activo() && esPlus());
      if (activo()) { premios(); beneficioMes(); try { cuidaPelaje(); } catch (e) {} }
      return MO;
    })();
    return cargando;
  };

  /* ---------------- beneficios de Plus ---------------- */
  var beneficioMes = function(){
    if (!esPlus()) return;
    var g = G(), mk = mesClave(); if (g.plusProt === mk) return;
    g.plusProt = mk; g.freeze = Math.max(g.freeze || 0, 2); guarda();
    setTimeout(function(){ aviso("PLEX Plus: tus 2 protectores de racha de este mes ya están listos."); }, 1500);
  };
  /* 4.33: cofre del mes (500 monedas), se reclama en la pantalla de Plus o en la Tienda */
  var COFRE = 500;
  var hayCofre = function(){ return esPlus() && G().plusCofre !== mesClave(); };
  var abreCofre = function(){
    if (!hayCofre()) return;
    var g = G(); g.plusCofre = mesClave(); g.coins = (g.coins || 0) + COFRE; guarda();
    try { if (typeof SFX !== "undefined" && SFX.done) SFX.done(); } catch (e) {}
    try { renderStats(); } catch (e) {}
    aviso("Cofre Plus: +" + COFRE + " monedas. Vuelve el otro mes por más.");
    if (capa) abrir(); pintar();
  };
  /* el pelaje legendario es de Plus: si el plan se acaba, el gato vuelve al pelaje que tenía */
  var cuidaPelaje = function(){
    var g = G(), c = g.cat; if (!c) return;
    if (c.coat !== "nebula") { if (c.coat) g.coatAntes = c.coat; return; }
    if (esPlus() || !MO.listo) return;
    if (conSesion() && MO.servidor && !MO.planVisto) return;   /* sin respuesta del plan (sin conexión): no se toca */
    c.coat = g.coatAntes && g.coatAntes !== "nebula" ? g.coatAntes : "gris"; guarda();
  };
  var destello = function(x, y, r, i){
    var q = r * .22;
    return '<path d="M' + x + " " + (y - r) + "Q" + (x + q) + " " + (y - q) + " " + (x + r) + " " + y + "Q" + (x + q) + " " + (y + q) + " " + x + " " + (y + r) + "Q" + (x - q) + " " + (y + q) + " " + (x - r) + " " + y + "Q" + (x - q) + " " + (y - q) + " " + x + " " + (y - r) + 'Z" fill="#FFF6C9"><animate attributeName="opacity" values=".15;1;.15" dur="2.6s" begin="' + (i * .37).toFixed(2) + 's" repeatCount="indefinite"/></path>';
  };
  /* accesorios exclusivos: se suman al catálogo de la Tienda solo con la monetización encendida */
  var premiosPuestos = false;
  var premios = function(){
    if (premiosPuestos) return; premiosPuestos = true;
    try {
      /* el gato lo dibuja plx33 (sombreado a partir del color): Nébula es un pelaje violeta con un patrón propio, un
         degradado que gira recortado a la cabeza y al cuerpo (clipPath de plx33) y destellos que titilan */
      if (typeof COATS === "object" && !COATS.nebula) COATS.nebula = { n: "Nébula", c: "#5B3FE0", d: "#2A1670", b: "#F1E8FF", m: "#F6F0FF", ear: "#FF9AD5", eye: "#FFD23F", st: 0, dark: 1, pat: "nebula", plus: 1 };
      var pp0 = window.PLXCatPattern;
      window.PLXCatPattern = function(k){
        if (!k || k.pat !== "nebula") return pp0 ? pp0.apply(this, arguments) : { head: "", body: "" };
        var st = function(L){ return L.map(function(d, i){ return destello(d[0], d[1], d[2], i); }).join(""); };
        var manto = '<rect class="plx-neb-m" x="0" y="0" width="200" height="200" fill="url(#NEBID)" opacity=".95"/>';
        return {
          head: '<g data-neb="h">' + manto + '<ellipse cx="76" cy="60" rx="38" ry="20" fill="#fff" opacity=".13"/>' + st([[62, 68, 7], [139, 70, 6], [100, 53, 5], [121, 60, 2.6], [80, 55, 2.6], [151, 96, 3], [48, 98, 3]]) + "</g>",
          body: '<g data-neb="b">' + manto + st([[68, 152, 6], [134, 160, 6.5], [58, 174, 3], [142, 180, 3]]) + "</g>"
        };
      };
      /* doble de monedas: plx91 ya dio la mitad del XP; Plus recibe otro tanto */
      if (typeof addXP === "function") {
        var ax = addXP;
        addXP = function(n){
          var r = ax.apply(this, arguments);
          try { n = +n || 0; if (n > 0 && esPlus()) { var g = G(); g.coins = (g.coins || 0) + Math.max(1, Math.round(n / 2)); requestAnimationFrame(function(){ try { renderStats(); } catch (e) {} }); } } catch (e) {}
          return r;
        };
      }
    } catch (e) {}
    try {
      [{ id: "auraPlus", slot: "aura", n: "Aura Plus", req: { plus: 1 } }, { id: "insigniaPlus", slot: "medal", n: "Insignia Plus", req: { plus: 1 } }]
        .forEach(function(it){ if (!GITEMS.some(function(x){ return x.id === it.id; })) GITEMS.push(it); });
      if (typeof SCARVES !== "undefined") SCARVES.plus = "#FF6B8B";
      if (typeof GSCARF !== "undefined" && !GSCARF.some(function(x){ return x[0] === "plus"; })) GSCARF.splice(Math.max(0, GSCARF.length - 1), 0, ["plus", "Rosa Plus", { plus: 1 }]);
      var ro = reqOk; reqOk = function(r){ if (r && r.plus) return esPlus(); return ro.apply(this, arguments); };
      var rt = reqTxt; reqTxt = function(r){ if (r && r.plus) return "Con PLEX Plus"; return rt.apply(this, arguments); };
      var n = 0, cs = catSVG; catSVG = function(g, o){
        var out = cs(g, o), a = (g && g.acc) || {}, x = "";
        if (out.indexOf('data-neb="') > 0) {
          var cp = /<clipPath id="([^"]+)ch">/.exec(out), nb = "plxNb" + (++n);
          if (!cp) out = out.replace(/<rect class="plx-neb-m"[^>]*\/>/g, "");
          out = out.split('data-neb="h"').join(cp ? 'clip-path="url(#' + cp[1] + 'ch)"' : "").split('data-neb="b"').join(cp ? 'clip-path="url(#' + cp[1] + 'cb)"' : "").split("NEBID").join(nb);
          var df = '<defs><linearGradient id="' + nb + '" gradientUnits="userSpaceOnUse" x1="20" y1="20" x2="180" y2="190"><stop offset="0" stop-color="#8A5BFF"/><stop offset=".38" stop-color="#2F6BFF"/><stop offset=".7" stop-color="#B04DFF"/><stop offset="1" stop-color="#FF5FA8"/><animateTransform attributeName="gradientTransform" type="rotate" from="0 100 110" to="360 100 110" dur="8s" repeatCount="indefinite"/></linearGradient></defs>';
          var a0 = out.indexOf(">"); if (a0 > 0) out = out.slice(0, a0 + 1) + df + out.slice(a0 + 1);
        }
        if (a.aura === "auraPlus") {
          var id = "plxAuraPlus" + (++n);
          var au = '<defs><linearGradient id="' + id + '" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FFC83D"/><stop offset=".55" stop-color="#FF6B8B"/><stop offset="1" stop-color="#2F6BFF"/></linearGradient></defs>' +
            '<g opacity=".95"><circle cx="100" cy="108" r="88" fill="none" stroke="url(#' + id + ')" stroke-width="6"/><circle cx="100" cy="108" r="96" fill="none" stroke="url(#' + id + ')" stroke-width="2" stroke-dasharray="2 9" stroke-linecap="round"/></g>';
          var ab = out.indexOf(">"); if (ab > 0) out = out.slice(0, ab + 1) + au + out.slice(ab + 1);
        }
        if (a.medal === "insigniaPlus") x += '<path d="M86 134 L100 160 L114 134 Z" fill="#FF6B8B"/><circle cx="100" cy="168" r="14" fill="#FFC83D" stroke="#7A5200" stroke-width="2.5"/><path d="M100 159 l2.6 5.4 5.9 .8 -4.3 4.1 1 5.8 -5.2 -2.8 -5.2 2.8 1 -5.8 -4.3 -4.1 5.9 -.8z" fill="#fff"/>';
        if (!x) return out; var k = out.lastIndexOf("</svg>"); return k < 0 ? out : out.slice(0, k) + x + out.slice(k);
      };
    } catch (e) {}
  };

  /* ---------------- anuncios con recompensa ---------------- */
  var adsListo = null;
  var cargaAdsense = function(){
    if (adsListo) return adsListo;
    adsListo = new Promise(function(ok){
      if (!MO.adsense) return ok(false);
      var s = D.createElement("script"); s.async = true; s.crossOrigin = "anonymous";
      s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(MO.adsense);
      s.setAttribute("data-ad-frequency-hint", "30s");
      s.onload = function(){ window.adsbygoogle = window.adsbygoogle || []; window.adBreak = window.adConfig = function(o){ window.adsbygoogle.push(o); }; try { adConfig({ preloadAdBreaks: "on", sound: "on" }); } catch (e) {} ok(true); };
      s.onerror = function(){ ok(false); };
      D.head.appendChild(s);
    });
    return adsListo;
  };
  var simulado = function(){
    return new Promise(function(ok){
      var c = D.createElement("div"); c.className = "pl4-ad"; var t = 5;
      c.innerHTML = '<div class="pl4-ad-c"><small>Anuncio de prueba</small><b>Aquí va el anuncio</b><p>En la app real se ve un video corto de Google. Esto solo aparece con ?dinero=1.</p><span class="pl4-ad-t">' + t + '</span><button type="button" class="pz-btn pl4-b" disabled>Cerrar</button></div>';
      D.body.appendChild(c);
      var b = c.querySelector("button"), sp = c.querySelector(".pl4-ad-t");
      var iv = setInterval(function(){ t--; sp.textContent = t > 0 ? t : "✓"; if (t <= 0) { clearInterval(iv); b.disabled = false; } }, 1000);
      b.addEventListener("click", function(){ c.remove(); ok(true); });
    });
  };
  /* devuelve true solo si el anuncio se vio completo */
  var anuncio = function(motivo){
    if (!activo() || esPlus() || docente()) return Promise.resolve(false);
    if (window.PlexAndroid && typeof PlexAndroid.anuncioRecompensa === "function") {
      return new Promise(function(ok){
        var hecho = false, fin = function(v){ if (hecho) return; hecho = true; window.__plxAnuncio = null; ok(!!v); };
        window.__plxAnuncio = fin; setTimeout(function(){ fin(false); }, 120000);
        try { PlexAndroid.anuncioRecompensa(String(motivo || "premio")); } catch (e) { fin(false); }
      });
    }
    if (MO.anuncios && MO.adsense && !prueba()) {
      return cargaAdsense().then(function(ok0){
        if (!ok0 || typeof window.adBreak !== "function") return false;
        return new Promise(function(ok){
          var visto = false, listo = false, fin = function(v){ if (listo) return; listo = true; ok(v); };
          try {
            adBreak({ type: "reward", name: String(motivo || "premio"),
              beforeReward: function(mostrar){ mostrar(); },
              adViewed: function(){ visto = true; }, adDismissed: function(){ visto = false; },
              adBreakDone: function(info){ if (!visto && info && info.breakStatus !== "viewed") aviso("Ahora no hay anuncios disponibles. Inténtalo más tarde."); fin(visto); } });
          } catch (e) { fin(false); }
          setTimeout(function(){ fin(visto); }, 90000);
        });
      });
    }
    return prueba() ? simulado() : Promise.resolve(false);
  };
  var cupo = function(){
    var g = G(), d = dia(); if (!g.anun || g.anun.d !== d) g.anun = { d: d, n: 0 };
    return { monedas: Math.max(0, 3 - g.anun.n), protector: g.anunP !== semClave() && (g.freeze || 0) < 2 };
  };
  var premia = async function(tipo, btn){
    if (btn) btn.disabled = true;
    var g = G(), c = cupo();
    if ((tipo === "monedas" && !c.monedas) || (tipo === "protector" && !c.protector)) { if (btn) btn.disabled = false; return; }
    var visto = esPlus() ? true : await anuncio(tipo);
    if (!visto) { if (btn) btn.disabled = false; return; }
    if (tipo === "monedas") { g.coins = (g.coins || 0) + 50; g.anun.n++; aviso("+50 monedas. ¡Gracias por apoyar a PLEX PLAY!"); }
    else { g.freeze = Math.min(2, (g.freeze || 0) + 1); g.anunP = semClave(); aviso("Ganaste un protector de racha."); }
    guarda(); try { renderStats(); } catch (e) {} pintar();
  };

  /* ---------------- pagos ---------------- */
  var iniciaPago = async function(periodo, btn){
    if (!conSesion()) { aviso("Entra con tu cuenta para hacerte Plus."); return; }
    if (!MO.pagos) { aviso(prueba() ? "Modo de prueba: el pago se activa cuando la función plx-pagos esté desplegada." : "Muy pronto podrás pagar aquí."); return; }
    if (btn) { btn.disabled = true; btn.dataset.t = btn.textContent; btn.textContent = "Abriendo Wompi…"; }
    try {
      var r = await PCB.sb.functions.invoke("plx-pagos", { body: { accion: "iniciar", periodo: periodo } });
      if (r.error || !r.data || !r.data.url) throw r.error || new Error("sin url");
      try { localStorage.setItem("plx-pago", r.data.ref); } catch (e) {}
      location.href = r.data.url;
    } catch (e) {
      aviso("No se pudo abrir el pago. Revisa tu conexión e inténtalo de nuevo.");
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.t || "Continuar"; }
    }
  };
  /* al volver de Wompi: ?pago=<ref>&id=<transacción> */
  var vueltaPago = async function(){
    var q = new URLSearchParams(location.search), ref = q.get("pago"), id = q.get("id");
    if (!ref) return;
    try { q.delete("pago"); q.delete("id"); history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash); } catch (e) {}
    var esperar = 0; while (!conSesion() && esperar++ < 40) await new Promise(function(r){ setTimeout(r, 250); });
    hoja('<div class="pl4-hoja-c"><img src="img/mz3/pensando.webp" alt=""><b>Confirmando tu pago…</b><p>Esto toma unos segundos.</p></div>');
    var estado = "";
    try { if (id) { var r = await PCB.sb.functions.invoke("plx-pagos", { body: { accion: "confirmar", id: id } }); estado = (r.data && r.data.estado) || ""; } } catch (e) {}
    for (var i = 0; i < 6 && !esPlus(); i++) { await carga(true); if (!esPlus()) await new Promise(function(r){ setTimeout(r, 2000); }); }
    cierraHoja();
    if (esPlus()) { try { localStorage.removeItem("plx-pago"); } catch (e) {} beneficioMes(); hoja('<div class="pl4-hoja-c"><img src="img/mzp/rey.webp" alt=""><b>¡Ya eres PLEX Plus!</b><p>Gracias por apoyar a PLEX PLAY. Tus beneficios ya están activos.</p><button type="button" class="pz-btn pl4-b" data-pl4="cerrar">¡Vamos!</button></div>'); pintar(); }
    else if (/PENDING/.test(estado) || !estado) hoja('<div class="pl4-hoja-c"><img src="img/mz3/pensando.webp" alt=""><b>Tu pago está en revisión</b><p>Algunos medios (como PSE) tardan unos minutos. Plus se activa solo cuando Wompi lo apruebe.</p><button type="button" class="pz-btn pl4-b" data-pl4="cerrar">Entendido</button></div>');
    else hoja('<div class="pl4-hoja-c"><img src="img/mz3/triste.webp" alt=""><b>El pago no se completó</b><p>No se hizo ningún cobro de Plus. Puedes intentarlo de nuevo cuando quieras.</p><button type="button" class="pz-btn pl4-b" data-pl4="cerrar">Cerrar</button></div>');
  };

  /* ---------------- pantalla de PLEX Plus (4.33) ---------------- */
  /* [icono, cifra, título, texto] */
  var BENEF = [
    ["moneda", "×2", "Doble de monedas", "Cada lección, juego y reto te deja el doble para la Tienda."],
    ["cofre", "+" + COFRE, "Cofre cada mes", COFRE + " monedas de regalo que reclamas cuando quieras."],
    ["rayo", "10×", "Diez veces más IA", "Conversa con Manzana, Expresión oral y el Taller de escritura, sin quedarte corto."],
    ["trofeo", "∞", "Simulacros sin límite", "DELF y DALF con corrección, cuantas veces necesites."],
    ["llama", "2", "Protectores de racha al mes", "Tu racha aguanta los días difíciles."],
    ["regalo", "3", "Regalos diarios sin anuncios", "50 monedas tres veces al día, solo por entrar."]
  ];
  /* [qué, gratis, plus] */
  var TABLA = [
    ["Monedas por lección", "×1", "×2"], ["IA al día", "1×", "10×"], ["Simulacros DELF y DALF", "1 al mes", "Sin límite"],
    ["Cofre de monedas", "—", COFRE + " al mes"], ["Protectores de racha", "—", "2 al mes"], ["Pelaje legendario y colección", "—", "Tuyos"]
  ];
  var gatoDe = function(coat, acc){ try { var c = G().cat || {}; return catSVG({ coat: coat || c.coat, acc: acc || {} }); } catch (e) { return ""; } };
  var capa = null, periodo = "anio";
  var enPantalla = function(){ return !!(window.PLX_UI && PLX_UI.pantalla); };
  var cierra = function(){
    if (capa && capa.classList.contains("pl4")) { capa.classList.add("fuera"); var c = capa; capa = null; setTimeout(function(){ c.remove(); }, 220); return; }
    if (capa) { capa = null; try { PLX_UI.cerrar(); } catch (e) {} }
  };
  var abrir = function(origen){
    if (!activo()) return;
    cierra();
    var p = MO.plan || {}, hasta = p.hasta ? new Date(p.hasta) : null, plus = esPlus();
    var fecha = hasta ? hasta.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" }) : "";
    var ahorro = Math.round((1 - MO.anio / (MO.mes * 12)) * 100);
    var mias = {}; try { var ca = (G().cat || {}).acc || {}; for (var k in ca) mias[k] = ca[k]; } catch (e) {}
    mias.aura = "auraPlus";
    var COL = [
      ["Pelaje Nébula", "Legendario", gatoDe("nebula", {}), "leg"],
      ["Aura Plus", "Exclusivo", gatoDe(null, { aura: "auraPlus" }), ""],
      ["Insignia Plus", "Exclusivo", gatoDe(null, { medal: "insigniaPlus" }), ""],
      ["Bufanda Rosa Plus", "Exclusivo", gatoDe(null, { neck: "plus" }), ""]
    ];
    var estado = plus ? "Tu plan está activo" + (p.fuente === "institucion" && p.inst ? " con <b>" + esc(p.inst) + "</b>" : "") + (fecha ? " hasta el " + esc(fecha) : "") + "." : "";
    var html = '<div class="pl4-c pl5' + (plus ? " es" : "") + '">' +
      '<button type="button" class="pl4-x" data-pl4="cerrar" aria-label="Cerrar"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<section class="pl5-hero"><div class="pl5-hero-t"><span class="pl5-sello"><img src="img/ic2/corona.webp" alt="">PLEX Plus</span>' +
        "<h2>" + (plus ? "Tu gato ya es <em>legendario</em>" : "Tu gato, <em>legendario</em>") + "</h2>" +
        "<p>" + (plus ? estado : "Pelaje Nébula, el doble de monedas y diez veces más IA para aprender sin frenos.") + "</p>" +
        (plus ? '<div class="pl5-hero-b">' + (hayCofre() ? '<button type="button" class="pz-btn pl5-oro" data-pl4="cofre"><img src="img/ic2/cofre.webp" alt="">Abrir el cofre del mes</button>' : '<span class="pl5-hecho"><img src="img/ic2/cofre-abierto.webp" alt="">Cofre de este mes reclamado</span>') +
          '<button type="button" class="pz-btn pl5-claro" data-pl4="nebula">' + ((G().cat || {}).coat === "nebula" ? "Pelaje Nébula puesto" : "Ponerme el pelaje Nébula") + "</button></div>" : "") +
      '</div><div class="pl5-hero-g" aria-hidden="true"><i></i>' + gatoDe("nebula", mias) + "</div></section>" +
      '<section class="pl5-s"><h3>Solo con Plus</h3><div class="pl5-col">' + COL.map(function(c){ return '<figure class="pl5-pz ' + c[3] + '"><span>' + c[2] + "</span><figcaption><b>" + c[0] + "</b><em>" + c[1] + "</em></figcaption></figure>"; }).join("") + "</div></section>" +
      '<section class="pl5-s"><h3>Todo lo que ganas</h3><ul class="pl5-ben">' + BENEF.map(function(b){ return '<li><img src="img/ic2/' + b[0] + '.webp" alt=""><div><b>' + b[2] + "</b><span>" + b[3] + "</span></div><em>" + b[1] + "</em></li>"; }).join("") + "</ul></section>" +
      (plus ? "" :
        '<section class="pl5-s"><h3>Gratis y Plus</h3><div class="pl5-tab" role="table"><div role="row" class="cab"><span role="columnheader"></span><span role="columnheader">Gratis</span><span role="columnheader">Plus</span></div>' +
          TABLA.map(function(t){ return '<div role="row"><span role="rowheader">' + t[0] + '</span><span role="cell">' + t[1] + '</span><span role="cell">' + t[2] + "</span></div>"; }).join("") + "</div></section>" +
        '<section class="pl5-s pl5-compra"><h3>Elige tu plan</h3><div class="pl4-planes" role="radiogroup" aria-label="Plan">' +
          '<button type="button" role="radio" class="pl4-plan" data-pl4-per="anio" aria-checked="' + (periodo === "anio") + '"><em>Ahorra ' + ahorro + ' %</em><b>Anual</b><strong>' + pesos(MO.anio) + '</strong><small>' + pesos(MO.anio / 12) + " al mes</small></button>" +
          '<button type="button" role="radio" class="pl4-plan" data-pl4-per="mes" aria-checked="' + (periodo === "mes") + '"><b>Mensual</b><strong>' + pesos(MO.mes) + "</strong><small>cada mes</small></button></div>" +
        '<button type="button" class="pz-btn pl4-b pl4-pagar pl5-oro" data-pl4="pagar">' + (MO.pagos || prueba() ? "Hacerme Plus" : "Muy pronto") + "</button>" +
        '<p class="pl4-letra">' + (MO.pagos || prueba() ? "Pago seguro con Wompi (Bancolombia): tarjeta, PSE, Nequi o Bancolombia. Pagas una vez por periodo: no se renueva solo." : "Estamos terminando de conectar el pago. Mientras tanto, si tu universidad tiene código, ya puedes usarlo.") + "</p></section>") +
      '<details class="pl4-inst"' + (origen === "codigo" ? " open" : "") + '><summary>¿Tu universidad tiene PLEX PLAY? Usa su código</summary>' +
        '<div class="pl4-cod"><input id="pl4Cod" type="text" maxlength="12" autocomplete="off" autocapitalize="characters" placeholder="Código de 8 letras" aria-label="Código de la institución"><button type="button" class="pz-btn pz-btn--liso pl4-b sec" data-pl4="canjear">Usar</button></div>' +
        '<p class="pl4-letra">El código lo da tu programa o tu docente. Con él tienes Plus mientras el plan de tu institución esté vigente.</p></details>' +
      "</div>";
    /* 4.30: PLEX Plus es una pantalla de la app (cabecera con Volver), como el resto; sin velo ni tarjeta flotante */
    if (enPantalla()) {
      PLX_UI.pantalla(html, { titulo: "PLEX Plus", clase: "pl4-pant" });
      capa = D.querySelector(".gmodal.pl4-pant") || D.querySelector(".gmodal");
    } else {
      capa = D.createElement("div"); capa.className = "pl4"; capa.setAttribute("role", "dialog"); capa.setAttribute("aria-modal", "true"); capa.setAttribute("aria-label", "PLEX Plus");
      capa.innerHTML = html; D.body.appendChild(capa);
      requestAnimationFrame(function(){ if (capa) capa.classList.add("dentro"); });
    }
  };
  var ponNebula = function(){
    if (!esPlus()) { abrir(); return; }
    var g = G(); g.cat = g.cat || {}; if (g.cat.coat !== "nebula") { g.coatAntes = g.cat.coat; g.cat.coat = "nebula"; guarda(); try { if (typeof pcIndexSync === "function") pcIndexSync(); } catch (e) {} aviso("Pelaje Nébula puesto."); }
    if (capa) abrir(); pintar();
  };
  var canjear = async function(btn){
    var inp = D.getElementById("pl4Cod"), c = inp ? inp.value.trim().toUpperCase() : "";
    if (c.length < 4) { aviso("Escribe el código completo."); return; }
    if (!conSesion()) { aviso("Entra con tu cuenta para usar el código."); return; }
    btn.disabled = true;
    var r = { data: "error" }; try { r = await PCB.sb.rpc("plx_canjear_codigo", { codigo: c }); } catch (e) {}
    btn.disabled = false;
    var m = { ok: "¡Listo! Ya tienes Plus con tu institución.", ya: "Ya habías usado este código.", no_existe: "Ese código no existe. Revísalo con tu docente.", vencido: "El plan de esa institución ya venció.", sin_cupos: "Ese código ya no tiene cupos. Avísale a tu docente.", sesion: "Entra con tu cuenta para usar el código." }[r.data] || "No se pudo usar el código. Inténtalo de nuevo.";
    aviso(m);
    if (r.data === "ok" || r.data === "ya") { await carga(true); beneficioMes(); abrir(); pintar(); }
  };

  /* hoja pequeña (pagos, límite de IA, panel) */
  var hojaEl = null;
  var hoja = function(html){ cierraHoja(); hojaEl = D.createElement("div"); hojaEl.className = "pl4-hoja"; hojaEl.innerHTML = '<div class="pl4-hoja-in" role="dialog" aria-modal="true">' + html + "</div>"; D.body.appendChild(hojaEl); requestAnimationFrame(function(){ if (hojaEl) hojaEl.classList.add("dentro"); }); };
  var cierraHoja = function(){ if (hojaEl) { hojaEl.remove(); hojaEl = null; } };

  /* ---------------- dónde aparece (solo con la monetización encendida) ---------------- */
  var tarjetaPerfil = function(){
    var v = D.getElementById("view"); if (!v || view !== "perfil" || docente()) return;
    var pf = v.querySelector(".p5-pf"), ya = v.querySelector(".pl4-pf");
    if (!pf) { if (ya) ya.remove(); return; }
    var html = esPlus()
      ? '<button type="button" class="pl4-pf es" data-pl4="abrir"><img src="img/mzp/rey.webp" alt=""><div><small>Tu plan</small><b>PLEX Plus</b><span>' + (MO.plan && MO.plan.fuente === "institucion" && MO.plan.inst ? "Con " + esc(MO.plan.inst) : "Gracias por apoyar a PLEX PLAY") + "</span></div><em>Ver</em></button>"
      : '<button type="button" class="pl4-pf" data-pl4="abrir"><img src="img/mzp/rey.webp" alt=""><div><small>Nuevo</small><b>Hazte PLEX Plus</b><span>Gato legendario, doble de monedas y 10 veces más IA.</span></div><em>Ver</em></button>';
    if (ya && ya.dataset.k === String(esPlus())) return;
    if (ya) ya.remove();
    pf.insertAdjacentHTML("afterend", html); var n = pf.nextElementSibling; if (n) n.dataset.k = String(esPlus());
  };
  var tarjetaTienda = function(){
    var v = D.getElementById("view"); if (!v || view !== "tienda" || docente()) return;
    var h = v.querySelector(".tn-h"); if (!h) return;
    if (!esPlus() && !hayAnuncios()) { var y0 = v.querySelector(".pl4-tn"); if (y0) y0.remove();
      if (!v.querySelector(".pl4-tn-solo")) h.insertAdjacentHTML("afterend", '<button type="button" class="pl4-tn-solo" data-pl4="abrir"><img src="img/ic2/corona.webp" alt=""><span><b>PLEX Plus</b><small>Pelaje legendario, doble de monedas y 10 veces más IA</small></span><em>Ver</em></button>');
      return; }
    var c = cupo(), clave = [esPlus(), c.monedas, c.protector, hayCofre()].join("|"), ya = v.querySelector(".pl4-tn");
    if (ya && ya.dataset.k === clave) return; if (ya) ya.remove();
    var verbo = esPlus() ? "Reclamar" : "Ver anuncio";
    h.insertAdjacentHTML("afterend", '<section class="pl4-tn" data-k="' + clave + '"><header><b>' + (esPlus() ? "Regalos de Plus" : "Gana más") + "</b><small>" + (esPlus() ? "Sin anuncios, por ser Plus" : "Mira un anuncio corto, cuando tú quieras") + "</small></header>" +
      '<div class="pl4-tn-g">' + (esPlus() ? '<button type="button" data-pl4="cofre"' + (hayCofre() ? "" : " disabled") + '><img src="img/ic2/' + (hayCofre() ? "cofre" : "cofre-abierto") + '.webp" alt=""><b>Cofre del mes</b><small>' + (hayCofre() ? "+" + COFRE + " monedas" : "Vuelve el otro mes") + "</small><em>Abrir</em></button>" : "") + '<button type="button" data-pl4-premio="monedas"' + (c.monedas ? "" : " disabled") + '><img src="img/ic2/moneda.webp" alt=""><b>+50 monedas</b><small>' + (c.monedas ? c.monedas + " de 3 hoy" : "Vuelve mañana") + "</small><em>" + verbo + "</em></button>" +
      '<button type="button" data-pl4-premio="protector"' + (c.protector ? "" : " disabled") + '><img src="img/ic2/llama.webp" alt=""><b>Protector de racha</b><small>' + (c.protector ? "1 por semana" : ((G().freeze || 0) >= 2 ? "Ya tienes 2" : "Vuelve la otra semana")) + "</small><em>" + verbo + "</em></button></div>" +
      (esPlus() ? "" : '<button type="button" class="pl4-tn-plus" data-pl4="abrir">Sin anuncios con <b>PLEX Plus</b></button>') + "</section>");
  };
  var tarjetaPanel = function(){
    var v = D.getElementById("view"); if (!v || view !== "docente") return;
    var tp = v.querySelector(".tpanel.tp2"); if (!tp) return;
    var cl = tp.querySelector("#tp2-classes"); if (!cl) return;
    var p = MO.plan || {}, inst = p.fuente === "institucion" && p.inst, clave = inst ? "i:" + inst : "n", ya = tp.querySelector(".pl4-inst-c");
    if (ya && ya.dataset.k === clave) return; if (ya) ya.remove();
    cl.insertAdjacentHTML("beforebegin", inst
      ? '<div class="pl4-inst-c es" data-k="' + esc(clave) + '"><img src="img/mzp/graduado.webp" alt=""><div><b>Plan institucional activo</b><p>' + esc(inst) + ": tú y tus estudiantes con el código tienen PLEX Plus.</p></div></div>"
      : '<div class="pl4-inst-c" data-k="n"><img src="img/mzp/graduado.webp" alt=""><div><b>PLEX Plus para toda tu clase</b><p>Con el plan institucional tus estudiantes tienen 10 veces más IA y sin anuncios' + (MO.panel ? ", y tú el panel completo" : "") + '.</p><div class="pl4-inst-b"><button type="button" class="pz-btn pz-btn--sm tp2-go" data-pl4="codigo">Tengo un código</button>' + (MO.contacto ? '<a class="pz-btn pz-btn--sm pz-btn--liso tp2-go sec" href="mailto:' + esc(MO.contacto) + '?subject=' + encodeURIComponent("Plan institucional PLEX PLAY") + '">Pedir el plan</a>' : "") + "</div></div></div>");
  };
  /* administración: crear instituciones y ver sus códigos (solo admin) */
  var adminInst = async function(){
    var v = D.getElementById("view"); if (!v || view !== "docente" || !admin()) return;
    var tp = v.querySelector(".tpanel.tp2"); if (!tp || tp.querySelector(".pl4-adm")) return;
    var d = D.createElement("details"); d.className = "tp2-sec tp2-adm pl4-adm";
    d.innerHTML = '<summary>Planes institucionales <small>Solo tú ves esto</small></summary><div class="pl4-adm-in"><div class="pl4-adm-f"><input id="pl4INom" type="text" maxlength="80" placeholder="Institución o programa" aria-label="Nombre"><input id="pl4ICup" type="number" min="1" value="60" aria-label="Cupos"><input id="pl4IHas" type="date" aria-label="Vigente hasta"><button type="button" class="pz-btn pz-btn--sm tp2-go" data-pl4="crear-inst">Crear código</button></div><ul class="pl4-adm-l"><li>Cargando…</li></ul></div>';
    tp.appendChild(d);
    var f = new Date(); f.setFullYear(f.getFullYear() + 1); d.querySelector("#pl4IHas").value = f.toISOString().slice(0, 10);
    listaInst();
  };
  var listaInst = async function(){
    var ul = D.querySelector(".pl4-adm-l"); if (!ul) return;
    var r = { data: [] }; try { r = await PCB.sb.rpc("plx_inst_lista"); } catch (e) {}
    var L = r.data || [];
    ul.innerHTML = L.length ? L.map(function(x){ return "<li><div><b>" + esc(x.nombre) + "</b><small>" + x.usados + " de " + x.cupos + " cupos · hasta " + esc(x.hasta) + '</small></div><code>' + esc(x.codigo) + "</code></li>"; }).join("") : '<li class="vacio">' + (r.error ? "Falta correr 07-planes.sql en Supabase." : "Aún no hay planes institucionales.") + "</li>";
  };

  /* límite de IA del servidor (backend.js avisa con este evento) */
  var iaVisto = "";
  window.addEventListener("plx-ia-limite", function(){
    if (!activo() || esPlus() || docente() || iaVisto === dia()) return; iaVisto = dia();
    setTimeout(function(){ hoja('<div class="pl4-hoja-c"><img src="img/mz3/mz-duerme.webp" alt=""><b>Se acabó la IA de hoy</b><p>Mañana se renueva. Con PLEX Plus tienes diez veces más IA cada día.</p><div class="pl4-hoja-b"><button type="button" class="pz-btn pl4-b" data-pl4="abrir">Ver PLEX Plus</button><button type="button" class="pz-btn pz-btn--liso pl4-b sec" data-pl4="cerrar">Ahora no</button></div></div>'); }, 400);
  });

  /* simulacros: gratis 1 al mes, Plus sin límite (solo con la monetización encendida) */
  D.addEventListener("click", function(e){
    if (!activo() || !MO.pagos || esPlus() || docente()) return;   /* 4.30: sin pagos no se limita nada */
    var b = e.target.closest && e.target.closest("#view .pq .pq-c > button, #view .jx-tile, #view .jx-row"); if (!b) return;
    if (!/Simulacros/i.test((b.querySelector("b") || b).textContent || "")) return;
    var g = G(), mk = mesClave();
    if (g.simMes === mk && (g.simN || 0) >= 1) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); abrir("simulacro"); aviso("Tu simulacro gratis de este mes ya lo usaste."); return; }
    g.simN = (g.simMes === mk ? (g.simN || 0) : 0) + 1; g.simMes = mk; guarda();
  }, true);

  /* panel docente: Análisis y CSV con plan institucional (solo si panel_con_plan = 'si') */
  D.addEventListener("click", function(e){
    if (!activo() || !MO.panel || !docente() || esPlus()) return;
    var b = e.target.closest && e.target.closest('[data-tsub="analisis"], [data-tp2op="csv"]'); if (!b) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    try { if (b.closest(".gmodal")) gCloseModal(); } catch (x) {}
    hoja('<div class="pl4-hoja-c"><img src="img/mzp/detective.webp" alt=""><b>Con el plan institucional</b><p>' + (b.dataset.tsub ? "El análisis del grupo" : "La lista en CSV") + " es parte del plan institucional de PLEX PLAY.</p><div class=\"pl4-hoja-b\">" + (MO.contacto ? '<a class="pz-btn pl4-b" href="mailto:' + esc(MO.contacto) + '?subject=' + encodeURIComponent("Plan institucional PLEX PLAY") + '">Pedir el plan</a>' : "") + '<button type="button" class="pz-btn pz-btn--liso pl4-b sec" data-pl4="codigo">Tengo un código</button></div></div>');
  }, true);

  /* accesorios exclusivos sin Plus: abren PLEX Plus */
  D.addEventListener("click", function(e){
    if (!activo() || esPlus()) return;
    var b = e.target.closest && e.target.closest('[data-tn="it:auraPlus"], [data-tn="it:insigniaPlus"], [data-tn="sc:plus"]'); if (!b) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); abrir("tienda");
  }, true);

  /* 4.33: el pelaje legendario sin Plus abre PLEX Plus (en window: la Tienda y el editor lo pondrían antes) */
  window.addEventListener("click", function(e){
    if (!activo() || esPlus()) return;
    var b = e.target.closest && e.target.closest('[data-tn="co:nebula"], [data-g="coat"][data-arg="nebula"], [data-g="onb-coat"][data-arg="nebula"]'); if (!b) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); abrir("tienda");
  }, true);

  /* botones propios */
  D.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-pl4], [data-pl4-per], [data-pl4-premio]"); if (!b) return;
    if (b.tagName === "A") { cierraHoja(); return; }
    e.preventDefault();
    if (b.dataset.pl4Per) { periodo = b.dataset.pl4Per; D.querySelectorAll("[data-pl4-per]").forEach(function(x){ x.setAttribute("aria-checked", String(x.dataset.pl4Per === periodo)); }); return; }
    if (b.dataset.pl4Premio) { premia(b.dataset.pl4Premio, b); return; }
    var a = b.dataset.pl4;
    if (a === "cerrar") { cierraHoja(); cierra(); return; }
    if (a === "abrir") { cierraHoja(); abrir(); return; }
    if (a === "codigo") { cierraHoja(); abrir("codigo"); setTimeout(function(){ var i = D.getElementById("pl4Cod"); if (i) i.focus(); }, 120); return; }
    if (a === "pagar") { iniciaPago(periodo, b); return; }
    if (a === "cofre") { abreCofre(); return; }
    if (a === "nebula") { ponNebula(); return; }
    if (a === "canjear") { canjear(b); return; }
    if (a === "crear-inst") {
      var n = (D.getElementById("pl4INom") || {}).value || "", c = +((D.getElementById("pl4ICup") || {}).value || 0), h = (D.getElementById("pl4IHas") || {}).value || "";
      if (!n.trim() || c < 1 || !h) { aviso("Completa el nombre, los cupos y la fecha."); return; }
      b.disabled = true;
      PCB.sb.rpc("plx_inst_crear", { nombre: n.trim(), cupos: c, hasta: h }).then(function(r){
        b.disabled = false; if (r.error) { aviso("No se pudo crear: " + r.error.message); return; }
        aviso("Código creado: " + r.data); D.getElementById("pl4INom").value = ""; listaInst();
      }, function(){ b.disabled = false; aviso("No se pudo crear el código."); });
    }
  });
  D.addEventListener("keydown", function(e){
    if (e.key === "Escape" && (capa || hojaEl)) { e.stopPropagation(); cierraHoja(); cierra(); }
    if (e.key === "Enter" && e.target && e.target.id === "pl4Cod") { var b = D.querySelector('[data-pl4="canjear"]'); if (b) canjear(b); }
  }, true);

  /* 4.30: entrada fija «PLEX Plus» en el riel de escritorio (el riel se rehace solo: se repone cada vez) */
  var rielPlus = function(){
    var nav = D.querySelector("#px-rail .rl-nav"); if (!nav || !activo() || docente()) { var y = D.querySelector("#px-rail .rl-plus"); if (y && (!activo() || docente())) y.remove(); return; }
    var ya = nav.parentNode.querySelector(".rl-plus"), k = String(esPlus());
    if (ya && ya.dataset.k === k) return; if (ya) ya.remove();
    nav.insertAdjacentHTML("afterend", '<button type="button" class="rl-plus" data-pl4="abrir" data-k="' + k + '"><img src="img/ic2/corona.webp" alt=""><span><b>PLEX Plus</b><small>' + (esPlus() ? "Tu plan" : "Gato legendario y ×2") + "</small></span></button>");
  };
  try { new MutationObserver(function(){ try { rielPlus(); } catch (e) {} }).observe(D.body, { childList: true }); } catch (e) {}
  var obRiel = null;
  var vigilaRiel = function(){ var r = D.getElementById("px-rail"); if (!r || obRiel) return; obRiel = new MutationObserver(function(){ try { rielPlus(); } catch (e) {} }); obRiel.observe(r, { childList: true }); };

  /* después de cada pintada */
  var _r = render;
  render = function(){
    var x = _r.apply(this, arguments);
    if (activo() && MO.listo) { try { cuidaPelaje(); } catch (e) {} try { tarjetaPerfil(); } catch (e) {} try { tarjetaTienda(); } catch (e) {} try { tarjetaPanel(); } catch (e) {} try { adminInst(); } catch (e) {} try { vigilaRiel(); rielPlus(); } catch (e) {} }
    return x;
  };

  /* ---------------- estilos ---------------- */
  var css = [
    ".pl4{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:16px;background:rgba(6,8,16,.66);opacity:0;transition:opacity .2s}",
    ".pl4.dentro{opacity:1}.pl4.fuera{opacity:0}",
    ".pl4-c{position:relative;width:min(460px,100%);max-height:calc(100dvh - 32px);overflow:auto;display:grid;gap:14px;padding:22px 20px 20px;border-radius:28px;background:var(--p-sup,#1D2335);color:var(--p-tinta,#F5F6FA);box-shadow:0 30px 70px -20px rgba(0,0,0,.7);font-family:var(--f-tx,system-ui)}",
    ".pl4-x{position:absolute;top:12px;right:12px;width:40px;height:40px;display:grid;place-items:center;border:0;border-radius:50%;background:var(--p-sup-2,#262D43);color:inherit;cursor:pointer}",
    ".pl4-h{display:flex;align-items:center;gap:14px;padding:18px;border-radius:22px;background:linear-gradient(140deg,#2255E0,#6A3FD0 60%,#FF6B8B);color:#fff}",
    ".pl4-h img{flex:none;width:96px;height:96px;object-fit:contain;filter:drop-shadow(0 8px 10px rgba(0,0,0,.25))}",
    ".pl4-h small{font:700 .72rem/1 var(--f-tx,system-ui);letter-spacing:.12em;opacity:.85}",
    ".pl4-h h2{margin:4px 0;font:800 1.9rem/1 var(--f-tit,Poppins,system-ui);color:#fff}.pl4-h h2 em{font-style:normal;color:#FFC83D}",
    ".pl4-h p{margin:0;font:500 .92rem/1.4 var(--f-tx,system-ui);color:rgba(255,255,255,.92)}",
    ".pl4-l{list-style:none;margin:0;padding:0;display:grid;gap:10px}",
    ".pl4-l li{display:flex;align-items:center;gap:12px}.pl4-l img{flex:none;width:40px;height:40px;object-fit:contain}",
    ".pl4-l b{display:block;font:800 1rem/1.2 var(--f-tit,Poppins,system-ui)}.pl4-l span{font:500 .86rem/1.35 var(--f-tx,system-ui);color:var(--p-apagado,#A9B1C7)}",
    ".pl4-planes{display:grid;grid-template-columns:1fr 1fr;gap:10px}",
    ".pl4-plan{position:relative;display:grid;gap:2px;justify-items:start;padding:16px 14px 14px;border:0;border-radius:18px;background:var(--p-sup-2,#262D43);box-shadow:inset 0 0 0 2px var(--p-linea,#343D59);color:inherit;text-align:left;cursor:pointer}",
    ".pl4-plan[aria-checked=true]{background:color-mix(in srgb,#2F6BFF 18%,var(--p-sup-2,#262D43));box-shadow:inset 0 0 0 2.5px #4C82FF}",
    ".pl4-plan em{position:absolute;top:-10px;right:10px;padding:3px 9px;border-radius:99px;background:#FFC83D;color:#1F2430;font:800 .7rem/1.2 var(--f-tx,system-ui);font-style:normal}",
    ".pl4-plan b{font:700 .9rem/1.2 var(--f-tx,system-ui)}.pl4-plan strong{font:800 1.35rem/1.15 var(--f-tit,Poppins,system-ui)}.pl4-plan small{font:500 .78rem/1.2 var(--f-tx,system-ui);color:var(--p-apagado,#A9B1C7)}",
    ".pl4-b{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:0 20px;border:0;border-radius:16px;background:#2760EE;color:#fff;font:800 1rem/1 var(--f-tit,Poppins,system-ui);box-shadow:0 4px 0 #17337F;cursor:pointer;text-decoration:none}",
    ".pl4-b.sec{background:var(--p-sup-2,#262D43);color:inherit;box-shadow:inset 0 0 0 1.5px var(--p-linea,#343D59)}",
    ".pl4-b:disabled{opacity:.6;cursor:default}.pl4-pagar{width:100%;background:#FFC83D;color:#1F2430;box-shadow:0 4px 0 #B07C00}",
    ".pl4-letra{margin:0;font:500 .78rem/1.45 var(--f-tx,system-ui);color:var(--p-apagado,#A9B1C7);text-align:center}",
    ".pl4-inst{border-radius:16px;background:var(--p-sup-2,#262D43);padding:0 14px}",
    ".pl4-inst summary{min-height:48px;display:flex;align-items:center;cursor:pointer;font:700 .9rem/1.3 var(--f-tx,system-ui)}",
    ".pl4-inst[open]{padding-bottom:14px}.pl4-inst .pl4-letra{text-align:left;margin-top:8px}",
    ".pl4-cod{display:flex;gap:8px}.pl4-cod input{flex:1;min-width:0;min-height:48px;padding:0 14px;border:0;border-radius:12px;background:var(--p-sup,#1D2335);box-shadow:inset 0 0 0 1.5px var(--p-linea,#343D59);color:inherit;font:800 1rem/1 var(--f-tit,Poppins,system-ui);letter-spacing:.14em;text-transform:uppercase}",
    ".pl4-hoja{position:fixed;inset:0;z-index:2147483001;display:grid;align-items:end;justify-items:center;padding:16px;background:rgba(6,8,16,.55);opacity:0;transition:opacity .2s}.pl4-hoja.dentro{opacity:1}",
    ".pl4-hoja-in{width:min(420px,100%);padding:22px;border-radius:26px;background:var(--p-sup,#1D2335);color:var(--p-tinta,#F5F6FA);box-shadow:0 24px 60px -20px rgba(0,0,0,.7)}",
    "@media (min-width:700px){.pl4-hoja{align-items:center}}",
    ".pl4-hoja-c{display:grid;justify-items:center;gap:8px;text-align:center}.pl4-hoja-c img{width:110px;height:110px;object-fit:contain}",
    ".pl4-hoja-c b{font:800 1.2rem/1.25 var(--f-tit,Poppins,system-ui)}.pl4-hoja-c p{margin:0 0 6px;font:500 .92rem/1.45 var(--f-tx,system-ui);color:var(--p-tinta-2,#D3D8E6)}",
    ".pl4-hoja-b{display:grid;gap:8px;width:100%}.pl4-hoja-b .pl4-b{width:100%}",
    /* perfil */
    "html.mk #view .pl4-pf{display:flex;align-items:center;gap:12px;width:100%;margin:12px 0;padding:12px 14px;border:0;border-radius:var(--r-lg,22px);background:linear-gradient(140deg,#2255E0,#6A3FD0 70%,#FF6B8B);color:#fff;text-align:left;cursor:pointer;box-shadow:0 4px 0 #17337F}",
    "html.mk #view .pl4-pf img{flex:none;width:64px;height:64px;object-fit:contain}",
    "html.mk #view .pl4-pf div{flex:1;min-width:0;display:grid;gap:2px}html.mk #view .pl4-pf small{font:700 .7rem/1 var(--f-tx);letter-spacing:.12em;text-transform:uppercase;opacity:.85}",
    "html.mk #view .pl4-pf b{font:800 1.1rem/1.2 var(--f-tit);color:#fff}html.mk #view .pl4-pf span{font:500 .84rem/1.35 var(--f-tx);color:rgba(255,255,255,.9)}",
    "html.mk #view .pl4-pf em{flex:none;padding:8px 14px;border-radius:12px;background:#FFC83D;color:#1F2430;font:800 .85rem/1 var(--f-tit);font-style:normal}",
    /* tienda */
    "html.mk #view .pl4-tn{display:grid;gap:10px;margin:12px 0;padding:14px;border-radius:var(--r-lg,22px);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    "html.mk #view .pl4-tn header{display:grid;gap:2px}html.mk #view .pl4-tn header b{font:800 1.05rem/1.2 var(--f-tit);color:var(--p-tinta)}html.mk #view .pl4-tn header small{font:500 .8rem/1.3 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .pl4-tn-g{display:grid;grid-template-columns:1fr 1fr;gap:10px}",
    "html.mk #view .pl4-tn-g button{display:grid;justify-items:center;gap:4px;padding:12px 8px;border:0;border-radius:16px;background:var(--p-sup-2);color:var(--p-tinta);cursor:pointer;text-align:center}",
    "html.mk #view .pl4-tn-g button:disabled{opacity:.55;cursor:default}html.mk #view .pl4-tn-g img{width:44px;height:44px;object-fit:contain}",
    "html.mk #view .pl4-tn-g b{font:800 .95rem/1.2 var(--f-tit)}html.mk #view .pl4-tn-g small{font:500 .76rem/1.2 var(--f-tx);color:var(--p-apagado)}",
    "html.mk #view .pl4-tn-g em{margin-top:4px;padding:7px 12px;border-radius:10px;background:var(--p-azul-btn,#2760EE);color:#fff;font:800 .8rem/1 var(--f-tit);font-style:normal}",
    "html.mk #view .pl4-tn-plus{justify-self:center;border:0;background:none;color:var(--p-azul-tx);font:600 .86rem/1.3 var(--f-tx);cursor:pointer;text-decoration:underline}",
    /* panel docente */
    "html.mk #view .tpanel .pl4-inst-c{display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:var(--r-lg,22px);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve)}",
    "html.mk #view .tpanel .pl4-inst-c.es{box-shadow:inset 0 0 0 2px #35C97A,0 3px 0 var(--p-relieve)}",
    "html.mk #view .tpanel .pl4-inst-c img{flex:none;width:72px;height:72px;object-fit:contain}",
    "html.mk #view .tpanel .pl4-inst-c > div{flex:1;min-width:0;display:grid;gap:4px}html.mk #view .tpanel .pl4-inst-c b{font:800 1rem/1.25 var(--f-tit);color:var(--p-tinta)}html.mk #view .tpanel .pl4-inst-c p{margin:0;font:500 .88rem/1.4 var(--f-tx);color:var(--p-tinta-2)}",
    "html.mk #view .tpanel .pl4-inst-b{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}html.mk #view .tpanel .pl4-inst-b .tp2-go{text-decoration:none}html.mk #view .tpanel .pl4-inst-b .tp2-go.sec{background:var(--p-sup-2);color:var(--p-tinta);box-shadow:inset 0 0 0 1.5px var(--p-linea)}",
    "html.mk #view .tpanel .pl4-adm-in{display:grid;gap:12px;padding:0 16px 16px}",
    "html.mk #view .tpanel .pl4-adm-f{display:grid;grid-template-columns:2fr 1fr 1.4fr auto;gap:8px}@media (max-width:640px){html.mk #view .tpanel .pl4-adm-f{grid-template-columns:1fr 1fr}html.mk #view .tpanel .pl4-adm-f input:first-child{grid-column:1/-1}}",
    "html.mk #view .tpanel .pl4-adm-f input{min-width:0;min-height:44px;padding:0 12px;border:0;border-radius:12px;background:var(--p-sup-2);box-shadow:inset 0 0 0 1.5px var(--p-linea);color:var(--p-tinta);font:500 .9rem var(--f-tx)}",
    "html.mk #view .tpanel .pl4-adm-l{display:grid;gap:8px}html.mk #view .tpanel .pl4-adm-l li{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:12px;background:var(--p-sup-2)}",
    "html.mk #view .tpanel .pl4-adm-l li > div{display:grid;min-width:0}html.mk #view .tpanel .pl4-adm-l small{color:var(--p-apagado);font:500 .8rem var(--f-tx)}html.mk #view .tpanel .pl4-adm-l code{font:800 1rem/1 var(--f-tit);letter-spacing:.14em;color:#FFD875}",
    /* anuncio simulado */
    ".pl4-ad{position:fixed;inset:0;z-index:2147483002;display:grid;place-items:center;background:#000}.pl4-ad-c{display:grid;justify-items:center;gap:10px;padding:24px;color:#fff;text-align:center;font-family:system-ui}",
    ".pl4-ad-c small{opacity:.7;letter-spacing:.1em;text-transform:uppercase}.pl4-ad-c b{font-size:1.6rem}.pl4-ad-c p{max-width:300px;opacity:.85}.pl4-ad-t{font:800 2rem/1 system-ui;color:#FFC83D}"
  ].join("");
  /* 4.33: pantalla de PLEX Plus, colección y marcas de Plus. En la capa p5, como el resto de la piel. */
  var PP = "html.mk .gmodal.pl4-pant ", R5 = [
    PP + ".pl4-c.pl5{display:grid;gap:var(--s-5);width:100%;max-width:720px;margin:0 auto;padding:0 0 var(--s-6);text-align:left;justify-items:stretch;color:var(--p-tinta)}",
    /* portada: noche y oro, con el gato del usuario en legendario */
    PP + ".pl5-hero{position:relative;display:grid;grid-template-columns:minmax(0,1fr) 168px;align-items:center;gap:var(--s-3);padding:var(--s-5);overflow:hidden;border-radius:var(--r-lg);background:radial-gradient(90% 120% at 88% 30%,rgba(138,91,255,.55),transparent 62%),radial-gradient(70% 90% at 0% 100%,rgba(47,107,255,.45),transparent 60%),linear-gradient(160deg,#0B1F5C,#131A3C);box-shadow:inset 0 0 0 1.5px rgba(255,200,61,.5),0 4px 0 #070F33}",
    PP + ".pl5-hero-t{display:grid;gap:var(--s-2);justify-items:start;min-width:0}",
    PP + ".pl5-sello{display:inline-flex;align-items:center;gap:6px;padding:5px 12px 5px 6px;border-radius:99px;background:#FFC83D;color:#1F2430;font:800 var(--t-xs)/1 var(--f-tit);letter-spacing:.06em;text-transform:uppercase}",
    PP + ".pl5-sello img{width:20px;height:20px;object-fit:contain}",
    PP + ".pl5-hero h2{margin:0;font:800 clamp(1.5rem,5.4vw,2.1rem)/1.08 var(--f-tit);letter-spacing:-.02em;color:#fff;text-align:left}",
    PP + ".pl5-hero h2 em{font-style:normal;color:#FFC83D}",
    PP + ".pl5-hero p{margin:0;font:500 var(--t-md)/1.45 var(--f-tx);color:rgba(255,255,255,.9);text-align:left}",
    PP + ".pl5-hero p b{color:#fff}",
    PP + ".pl5-hero-b{display:flex;flex-wrap:wrap;gap:var(--s-2);margin-top:var(--s-2)}",
    PP + ".pl5-hero-g{position:relative;display:grid;place-items:center;width:168px;height:168px}",
    PP + ".pl5-hero-g i{position:absolute;inset:6px;border-radius:50%;background:radial-gradient(circle,rgba(255,200,61,.42),rgba(255,200,61,0) 68%)}",
    PP + ".pl5-hero-g svg{position:relative;width:100%;height:100%;filter:drop-shadow(0 10px 14px rgba(0,0,0,.35))}",
    PP + ".pl5-hecho{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:0 var(--s-4);border-radius:var(--r-md);background:rgba(255,255,255,.12);color:#fff;font:700 var(--t-sm)/1.2 var(--f-tx)}",
    PP + ".pl5-hecho img," + PP + ".pl5-oro img{width:24px;height:24px;object-fit:contain}",
    PP + ".pl5-claro{--pz-cara:#2B3470;--pz-cara-r:#0A1238;--pz-cara-tx:#fff}",
    "html.mk .pl5-oro,html.mk #view .pl5-oro{--pz-cara:#FFC83D;--pz-cara-r:#B07C00;--pz-cara-tx:#1F2430}",
    "@media (max-width:479.98px){" + PP + ".pl5-hero{grid-template-columns:minmax(0,1fr) 112px;padding:var(--s-4)}" + PP + ".pl5-hero-g{width:112px;height:112px}}",
    /* secciones */
    PP + ".pl5-s{display:grid;gap:var(--s-3);min-width:0}",
    PP + ".pl5-s > h3{margin:0;font:800 var(--t-lg)/1.2 var(--f-tit);color:var(--p-tinta);text-align:left}",
    /* colección */
    PP + ".pl5-col{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--s-3)}",
    "@media (max-width:559.98px){" + PP + ".pl5-col{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    PP + ".pl5-pz{display:grid;gap:var(--s-2);margin:0;padding:6px 6px var(--s-3);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);text-align:center}",
    PP + ".pl5-pz > span{display:grid;place-items:center;aspect-ratio:1.15;border-radius:calc(var(--r-md) - 4px);background:var(--p-placa,#E4E7F2);overflow:hidden}",
    PP + ".pl5-pz > span svg{width:86%;height:86%}",
    PP + ".pl5-pz.leg{box-shadow:inset 0 0 0 2px #FFC83D,0 3px 0 #B07C00}",
    PP + ".pl5-pz.leg > span{background:radial-gradient(circle at 50% 40%,#3B2A8C,#0B1F5C 75%)}",
    PP + ".pl5-pz figcaption{display:grid;gap:4px;justify-items:center}",
    PP + ".pl5-pz b{font:800 var(--t-sm)/1.2 var(--f-tit);color:var(--p-tinta)}",
    PP + ".pl5-pz em{padding:3px 9px;border-radius:99px;background:var(--p-sup-2);color:var(--p-tinta-2);font:700 var(--t-xs)/1.2 var(--f-tx);font-style:normal}",
    PP + ".pl5-pz.leg em{background:#FFC83D;color:#1F2430}",
    /* ventajas con su cifra */
    PP + ".pl5-ben{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:minmax(0,1fr);gap:var(--s-2)}",
    PP + ".pl5-ben li{display:grid;grid-template-columns:44px minmax(0,1fr) auto;align-items:center;gap:var(--s-3);padding:var(--s-3) var(--s-4);border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);text-align:left}",
    PP + ".pl5-ben img{width:44px;height:44px;object-fit:contain}",
    PP + ".pl5-ben div{display:grid;gap:2px;min-width:0}",
    PP + ".pl5-ben b{font:800 var(--t-md)/1.2 var(--f-tit);color:var(--p-tinta)}",
    PP + ".pl5-ben span{font:500 var(--t-sm)/1.4 var(--f-tx);color:var(--p-tinta-2)}",
    PP + ".pl5-ben em{min-width:46px;padding:7px 10px;border-radius:12px;background:#FFC83D;color:#1F2430;font:800 var(--t-md)/1 var(--f-tit);font-style:normal;text-align:center;white-space:nowrap}",
    /* gratis y plus */
    PP + ".pl5-tab{display:grid;border-radius:var(--r-md);background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);overflow:hidden}",
    PP + ".pl5-tab > div{display:grid;grid-template-columns:minmax(0,1fr) 76px 104px;align-items:stretch}",
    PP + ".pl5-tab > div + div{box-shadow:inset 0 1.5px 0 var(--p-linea)}",
    PP + ".pl5-tab span{display:flex;align-items:center;justify-content:center;padding:11px 8px;font:600 var(--t-sm)/1.25 var(--f-tx);color:var(--p-tinta-2);text-align:center}",
    PP + ".pl5-tab span:first-child{justify-content:flex-start;padding-left:var(--s-4);color:var(--p-tinta);text-align:left}",
    PP + ".pl5-tab span:last-child{background:rgba(255,200,61,.16);color:var(--p-tinta);font-weight:800}",
    PP + ".pl5-tab .cab span{font:800 var(--t-xs)/1 var(--f-tit);letter-spacing:.08em;text-transform:uppercase;color:var(--p-apagado)}",
    PP + ".pl5-tab .cab span:last-child{background:#FFC83D;color:#1F2430}",
    /* planes y pago */
    PP + ".pl5-compra .pl4-planes{margin-top:var(--s-2)}",
    PP + ".pl5-compra .pl4-plan{background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea),0 3px 0 var(--p-relieve);border-radius:var(--r-md);color:var(--p-tinta)}",
    PP + ".pl5-compra .pl4-plan[aria-checked=true]{background:var(--p-oro-p,rgba(255,200,61,.16));box-shadow:inset 0 0 0 2.5px #FFC83D,0 3px 0 #B07C00}",
    PP + ".pl5-compra .pl4-plan small{color:var(--p-tinta-2)}",
    PP + ".pl5-compra .pl4-pagar{width:100%;min-height:56px;font-size:var(--t-lg)}",
    PP + ".pl4-letra{color:var(--p-tinta-2)}",
    PP + ".pl4-inst{background:var(--p-sup);box-shadow:inset 0 0 0 1.5px var(--p-linea);border-radius:var(--r-md);color:var(--p-tinta)}",
    PP + ".pl4-cod input{background:var(--p-sup-2);color:var(--p-tinta)}",
    /* el pelaje legendario en la Tienda y en el editor del gato */
    'html.mk #view .tn .tn-i[data-tn="co:nebula"]{box-shadow:inset 0 0 0 2px #FFC83D,0 3px 0 #B07C00}',
    'html.mk #view .tn .tn-i[data-tn="co:nebula"] .tn-gato{background:radial-gradient(circle at 50% 40%,#3B2A8C,#0B1F5C 75%)}',
    'html.mk #view .tn .tn-i[data-tn="co:nebula"] b::after{content:"Legendario";display:block;width:max-content;margin:4px auto 0;padding:3px 9px;border-radius:99px;background:#FFC83D;color:#1F2430;font:800 var(--t-xs)/1.2 var(--f-tx)}',
    'html:not(.plx-plus).mk #view .tn .tn-i[data-tn="co:nebula"] em{font-size:0}html:not(.plx-plus).mk #view .tn .tn-i[data-tn="co:nebula"] em::before{content:"Con PLEX Plus";font:700 var(--t-xs)/1.2 var(--f-tx)}',
    'html.mk #view [data-g="coat"][data-arg="nebula"]{box-shadow:inset 0 0 0 2px #FFC83D}',
    'html.mk [data-g="onb-coat"][data-arg="nebula"]{display:none}',
    /* marco dorado de quien es Plus */
    'html.plx-plus.mk #view .p5-pf-id h1::after{content:"PLUS";display:inline-block;margin-left:10px;padding:4px 10px;border-radius:99px;background:#FFC83D;color:#1F2430;font:800 .42em/1.2 var(--f-tit);letter-spacing:.1em;vertical-align:middle;box-shadow:0 2px 0 #B07C00}',
    "html.mk #view .pl4-tn-g{grid-template-columns:repeat(auto-fit,minmax(104px,1fr))}"
  ].join("\n");
  var imp = function(x){ return x.replace(/([^{};]+:[^{};]+)(?=[;}])/g, function(d){ return /!important\s*$/.test(d) ? d : d + "!important"; }); };
  var s5 = D.createElement("style"); s5.id = "plx102b"; s5.textContent = "@layer p5{" + imp(R5) + "}"; D.head.appendChild(s5);
  var st = D.createElement("style"); st.id = "plx102"; st.textContent = css; D.head.appendChild(st);

  /* ---------------- arranque ---------------- */
  window.PLX_PLUS = { activo: activo, esPlus: esPlus, abrir: abrir, anuncio: anuncio, recarga: function(){ return carga(true).then(pintar); }, estado: function(){ return JSON.parse(JSON.stringify(MO)); } };
  var arranca = function(){ carga().then(function(){ if (activo()) pintar(); vueltaPago(); }); };
  /* en Android (y si se paga en otra pestaña) Wompi se abre fuera y se vuelve sin ?pago=: al volver se revisa el plan */
  D.addEventListener("visibilitychange", function(){
    if (D.visibilityState !== "visible" || !activo() || esPlus()) return;
    var ref = null; try { ref = localStorage.getItem("plx-pago"); } catch (e) {} if (!ref) return;
    carga(true).then(function(){
      if (!esPlus()) return;
      try { localStorage.removeItem("plx-pago"); } catch (e) {}
      beneficioMes(); pintar();
      hoja('<div class="pl4-hoja-c"><img src="img/mzp/rey.webp" alt=""><b>¡Ya eres PLEX Plus!</b><p>Gracias por apoyar a PLEX PLAY. Tus beneficios ya están activos.</p><button type="button" class="pz-btn pl4-b" data-pl4="cerrar">¡Vamos!</button></div>');
    });
  });
  try { if (window.PCB && PCB.ready && PCB.ready.then) PCB.ready.then(arranca, arranca); else setTimeout(arranca, 1500); } catch (e) { setTimeout(arranca, 1500); }
})();
