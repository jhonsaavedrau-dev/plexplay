/* PLEX PLAY 4.48 — Avisos de Manzana: bandeja, ajustes, destinos y recuperación de racha
   Pedido de Jhon (15-oct-2026): revisar todo el sistema de notificaciones (recordatorios, rachas por mantener,
   recuperación de rachas, motivación y vuelta a estudiar) con pruebas reales, permisos, destinos y estados de lectura.

   1. Recuperar la racha. Si una racha de 2 días o más se pierde por 1 o 2 días sin practicar, durante esos días y hasta
      el siguiente se puede reparar: hay que cumplir la meta de hoy y confirmar. Una vez al mes es gratis; si no, cuesta
      200 monedas. Reparar = los días que faltaron cuentan como cubiertos (G.frozen, lo mismo que el protector), así
      streak() la sigue contando. G.rachaUlt = {n, d} guarda la última racha viva para saber qué se perdió.
   2. Bandeja de avisos (la campana de la cabecera): lo que avisó el teléfono (PlexAndroid.avisos, app 1.8) y lo que llegó
      por push a la web (el service worker lo deja en la caché plx-state → __plx/avisos) con leído / no leído. Tocar un
      aviso lo marca leído y abre su destino.
   3. Ajustes de avisos: estado real del permiso (concedido, pendiente o bloqueado, con el botón que corresponde), el
      recordatorio diario y su hora, qué tipos de aviso quiere, un aviso de prueba y cuándo llega el próximo.
   4. Destinos: window.__plexAbrir(d) — practicar, racha, palabra, 1v1, avisos, ajustes. Lo llaman la app Android
      (MainActivity.destino), el service worker al tocar un aviso (mensaje {plx:"abrir"}) y la dirección ?abrir=…
   5. Push web con la app cerrada: con sesión y avisos activados, el recordatorio (hora, zona horaria, racha, último día
      con la meta, racha por recuperar y preferencias) se guarda en el servidor (RPC plx_recordatorio_guardar, SQL
      09-avisos.sql) y la función plx-recordatorios lo envía a su hora. Sin servidor, sigue el recordatorio local (plx34).
   Pruebas: herramientas/pruebas/avisos448.mjs (web), avisos-android.sh (emulador) y push-real.mjs (push de verdad). */
(function(){
  "use strict";
  if (typeof S === "undefined" || typeof gEnsure !== "function" || typeof dkey !== "function" || typeof dayXP !== "function") return;
  var D = document, K = window.PLX_KIT;
  var A = window.PlexAndroid, AND = !!(A && A.avisos);          // app Android con el puente 8 (1.8)
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var IMG = "img/m2d/";
  var G = function(){ return gEnsure(); };
  var meta = function(){ return Math.max(1, G().goalXP || 20); };
  var fecha = function(k){ var p = String(k).split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); };
  var mas = function(d, n){ var x = new Date(d); x.setDate(x.getDate() + n); return x; };
  var hoy0 = function(){ var d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  var entre = function(a, b){ return Math.round((b - a) / 864e5); };
  var cumple = function(d){ return dayXP(d) >= meta(); };
  var cubre = function(d){ return cumple(d) || (G().frozen || []).indexOf(dkey(d)) >= 0; };
  var guarda = function(){ try { save(!0); } catch (e) {} };
  var repinta = function(){ try { render(); } catch (e) {} };
  var avisa = function(t){ try { toast(t); } catch (e) {} };
  var pantalla = function(html, cls, titulo){
    if (window.PLX_UI && PLX_UI.pantalla) PLX_UI.pantalla(html, { clase: "m-av " + (cls || ""), titulo: titulo || "" });
    else gModal(html, "m-av " + (cls || ""));
  };
  var cierra = function(){ try { if (window.PLX_UI && PLX_UI.cerrar) PLX_UI.cerrar(); else gCloseModal(); } catch (e) {} };
  var btn = function(html, o){ return K ? K.btn(html, o) : '<button class="pz-btn">' + html + "</button>"; };

  /* ================================================================== 1. RECUPERAR LA RACHA */
  var COSTO = 200;
  /* la racha perdida que todavía se puede reparar: {n, faltan, hasta, costo} o null */
  function recuperable(){
    var u = G().rachaUlt; if (!u || !(u.n >= 2) || u.reparada || !u.d) return null;
    var base = fecha(u.d), hoy = hoy0(), dif = entre(base, hoy);
    if (dif < 2 || dif > 3) return null;                       // aún viva (ayer u hoy) o ya muy tarde
    var faltan = [];
    for (var d = mas(base, 1); d < hoy; d = mas(d, 1)) if (!cubre(d)) faltan.push(dkey(d));
    if (!faltan.length || faltan.length > 2) return null;
    if ((streak() | 0) > u.n) return null;
    var ult = G().repUlt, gratis = !ult || entre(fecha(ult), hoy) >= 30;
    return { n: u.n, faltan: faltan, hasta: dkey(mas(base, 3)), costo: gratis ? 0 : COSTO };
  }
  /* se anota la racha mientras está viva; una racha nueva (de hoy) no pisa a la que todavía se puede reparar */
  function anota(){
    var n = streak() | 0; if (n < 1) return;
    var r = recuperable(); if (r && n <= r.n) return;
    var d = cubre(new Date()) ? dkey() : dkey(mas(hoy0(), -1)), u = G().rachaUlt;
    if (!u || u.n !== n || u.d !== d || u.reparada) { G().rachaUlt = { n: n, d: d }; guarda(); }
  }
  function reparar(){
    var r = recuperable(); if (!r) return "nada";
    if (!cumple(new Date())) return "meta";
    var g = G();
    if (r.costo && (g.coins | 0) < r.costo) return "monedas";
    g.frozen = (g.frozen || []).concat(r.faltan).slice(-30);
    if (r.costo) g.coins = (g.coins | 0) - r.costo; else g.repUlt = dkey();
    g.rachaUlt = { n: streak() | 0, d: dkey() };
    leeWeb().forEach(function(x){ if (x.tipo === "recupera") x.leido = true; });   // ese aviso ya está resuelto
    guarda(); repinta(); widget();
    agrega({ id: "rec-" + dkey(), tipo: "recuperada", ti: "🔥 Racha recuperada", tx: "Volviste a tus " + (streak() | 0) + " días. ¡No la sueltes!", d: "racha", leido: true });
    return "ok";
  }
  var hastaTxt = function(r){ return r.hasta === dkey(mas(hoy0(), 1)) ? "hasta mañana a medianoche" : "hasta hoy a medianoche"; };
  function tarjetaRec(r){
    var xp = Math.min(dayXP(new Date()), meta()), pct = Math.round(xp / meta() * 100), lista = xp >= meta();
    return '<div class="pz-card pz-card--grad av-rec" style="--pz-grad:linear-gradient(135deg,#FF6B8B,#D92F5F 60%,#8E2B7E);--pz-grad-r:#7A1E45;--pz-grad-tx:#fff">' +
      '<img class="av-rec__mz" src="' + IMG + 'asomandose.webp" alt="" decoding="async">' +
      '<div class="av-rec__tx"><small>Tu racha se puede salvar</small><b>Recupera tu racha de ' + r.n + " días</b>" +
      "<span>" + (lista ? "¡Meta cumplida! Toca para repararla." : "Cumple la meta de hoy (" + xp + "/" + meta() + " XP) " + hastaTxt(r) + ".") + "</span>" +
      (K ? K.barra(pct, { v: "oro fina", label: "Meta de hoy" }) : "") + "</div>" +
      btn(lista ? "Recuperar" : "Ver cómo", { v: "oro", sm: true, attrs: { "data-av": "racha" } }) + "</div>";
  }
  function pantallaRacha(){
    var r = recuperable();
    if (!r) { try { gStreakModal(); } catch (e) { try { go("parcours"); } catch (x) {} } return; }
    var xp = Math.min(dayXP(new Date()), meta()), lista = xp >= meta(), g = G();
    pantalla('<div class="av-hero"><img src="' + IMG + (lista ? "estrella" : "asomandose") + '.webp" alt=""></div>' +
      '<h2 class="gm-t">Recupera tu racha de ' + r.n + " días</h2>" +
      '<p class="gm-sub">Faltaste ' + (r.faltan.length === 1 ? "un día" : "dos días") + ". Manzana la puede reparar " + hastaTxt(r) + ".</p>" +
      '<ol class="av-pasos">' +
        '<li class="' + (lista ? "ok" : "") + '"><b>Cumple la meta de hoy</b><small>' + xp + " de " + meta() + " XP</small>" + (K ? K.barra(Math.round(xp / meta() * 100), { v: lista ? "verde" : "oro", label: "Meta de hoy" }) : "") + "</li>" +
        "<li><b>" + (r.costo ? "Repárala con " + r.costo + " monedas" : "Repárala gratis") + "</b><small>" + (r.costo ? "Tienes " + (g.coins | 0) + " monedas. La reparación gratis vuelve en 30 días." : "Tienes una reparación gratis al mes.") + "</small></li></ol>" +
      '<div class="set-row c">' + (lista ? btn("🔥 Recuperar mi racha", { v: "oro", ancho: true, attrs: { "data-av": "reparar" }, dis: r.costo && (g.coins | 0) < r.costo })
                                         : btn("▶ Practicar ahora", { ancho: true, attrs: { "data-av": "practicar" } })) +
      btn("Ahora no", { v: "liso", ancho: true, attrs: { "data-g": "close" } }) + "</div>", "m-av-rec", "Tu racha");
  }

  /* ================================================================== 2. BANDEJA */
  var POSE = { racha: "reloj", ultima: "sorpresa", protegida: "pulgar", casi: "escribiendo", recupera: "asomandose", recuperada: "estrella",
    perdida: "triste", extrana: "pensativo", semana: "dormir", dia: "saludar", prueba: "senalar", social: "corazones", duelo: "campeon" };
  var leeWeb = function(){ var a = G().avisos; return Array.isArray(a) ? a : (G().avisos = []); };
  function agrega(it){
    var a = leeWeb(); if (a.some(function(x){ return x.id === it.id; })) return;
    it.t = it.t || Date.now(); a.unshift(it); if (a.length > 40) a.length = 40; guarda(); campana();
  }
  function todos(){
    var a = leeWeb().map(function(x){ return Object.assign({ o: "web" }, x); });
    if (AND) { try { JSON.parse(A.avisos() || "[]").forEach(function(x){ a.push(Object.assign({ o: "and" }, x)); }); } catch (e) {} }
    return a.sort(function(x, y){ return (y.t || 0) - (x.t || 0); }).slice(0, 40);
  }
  var sinLeer = function(){ return todos().filter(function(x){ return !x.leido; }).length; };
  function marca(id){
    if (id === "*") { leeWeb().forEach(function(x){ x.leido = true; }); if (AND) try { A.avisoLeido("*"); } catch (e) {} }
    else { var w = leeWeb().filter(function(x){ return x.id === id; })[0]; if (w) w.leido = true; else if (AND) try { A.avisoLeido(id); } catch (e) {} }
    guarda(); campana();
  }
  /* lo que el service worker recibió por push mientras la app estaba cerrada */
  function traePush(){
    if (!window.caches) return;
    caches.open("plx-state").then(function(c){
      return c.match("__plx/avisos").then(function(r){ return r ? r.json() : []; }).then(function(l){
        if (!l || !l.length) return;
        l.forEach(function(x){ agrega({ id: x.id, tipo: x.tipo || "dia", ti: x.ti, tx: x.tx, d: x.d || "", t: x.t, leido: !!x.leido }); });
        return c.put("__plx/avisos", new Response("[]", { headers: { "Content-Type": "application/json" } }));
      });
    }).catch(function(){});
  }
  var hace = function(t){
    var m = Math.round((Date.now() - t) / 6e4);
    if (m < 1) return "ahora"; if (m < 60) return "hace " + m + " min"; var h = Math.round(m / 60); if (h < 24) return "hace " + h + " h";
    var d = Math.round(h / 24); return d === 1 ? "ayer" : "hace " + d + " días";
  };
  function bandeja(){
    var L = todos(), n = L.filter(function(x){ return !x.leido; }).length;
    var filas = L.map(function(x){
      return '<button type="button" class="pz-fila' + (x.leido ? "" : " pz-fila--nueva") + ' av-fila" data-av="ir" data-id="' + esc(x.id) + '" data-d="' + esc(x.d || "") + '">' +
        '<span class="pz-fila__ic av-fila__ic"><img src="' + IMG + (POSE[x.tipo] || "saludar") + '.webp" alt="" loading="lazy"></span>' +
        '<span class="pz-fila__tx"><b>' + esc(x.ti) + "</b><small>" + esc(x.tx) + '</small><small class="av-cuando">' + hace(x.t) + (x.o === "and" ? " · en tu teléfono" : "") + "</small></span>" +
        (x.leido ? "" : '<span class="pz-fila__punto" aria-label="Sin leer"></span>') + "</button>";
    }).join("");
    pantalla('<div class="av-cab"><h2 class="gm-t">Avisos</h2>' + (K ? K.ibtn("engranaje", "Ajustes de avisos", { attrs: { "data-av": "ajustes" } }) : "") + "</div>" +
      (L.length ? '<div class="av-acc">' + (n ? '<span>' + n + (n === 1 ? " sin leer" : " sin leer") + "</span>" + btn("Marcar todo como leído", { v: "texto", sm: true, attrs: { "data-av": "leertodo" } }) : "<span>Todo al día</span>") + "</div>" +
        '<div class="pz-lista av-lista">' + filas + "</div>"
      : (K ? K.vacio({ img: IMG + "dormir.webp", t: "Sin avisos por ahora", s: "Aquí verás los recordatorios de Manzana, tu racha y lo que pase en tus duelos." }) : "")) +
      '<div class="set-row c">' + btn("Listo", { ancho: true, attrs: { "data-g": "close" } }) + "</div>", "m-av-bandeja");
  }
  /* la campana de la cabecera, con la insignia de no leídos */
  var CAMPANA = '<img src="img/ic2/campana.svg" alt="" width="26" height="26" decoding="async">';   /* 4.75: del mismo juego que la tuerca (ic2), no un trazo fino */
  /* dos sitios: la cabecera del celular (antes de la tuerca #qsBtn) y, en PC, la columna derecha #p5-lado (antes de .p5-aj) */
  function campana(){
    var n = sinLeer();
    [["#topbar .topbar-end", "#qsBtn", ""], ["#p5-lado .p5-stats", ".p5-aj", " av-campana--lado"]].forEach(function(sitio){
      var fin = D.querySelector(sitio[0]); if (!fin) return;
      var b = fin.querySelector(".av-campana");
      if (!b) {
        var tuerca = fin.querySelector(sitio[1]);
        b = D.createElement("button"); b.type = "button"; b.className = "pz-ibtn theme-btn px-iconbtn av-campana" + sitio[2]; b.setAttribute("data-av", "bandeja");
        b.innerHTML = CAMPANA + (K ? K.insignia(0) : '<span class="pz-insignia" hidden></span>');
        if (tuerca && tuerca.parentNode === fin) fin.insertBefore(b, tuerca); else if (tuerca) tuerca.parentNode.insertBefore(b, tuerca); else fin.appendChild(b);
      }
      var i = b.querySelector(".pz-insignia");
      b.setAttribute("aria-label", n ? "Avisos, " + n + " sin leer" : "Avisos");
      if (i) { i.hidden = !n; i.textContent = n > 9 ? "9+" : n ? String(n) : ""; }
    });
  }
  /* la columna de PC se rehace sola (plx90/plx101): si se lleva la campana, vuelve */
  new MutationObserver(function(){ if (D.querySelector("#p5-lado .p5-stats") && !D.querySelector("#p5-lado .av-campana")) campana(); }).observe(D.body, { childList: true, subtree: false });
  setInterval(function(){ if (D.querySelector("#p5-lado .p5-stats") && !D.querySelector("#p5-lado .av-campana")) campana(); }, 2000);


  /* ================================================================== 3. AJUSTES DE AVISOS */
  var pref = function(){ var p = G().avPref; if (!p || typeof p !== "object") p = G().avPref = { racha: true, rec: true, volver: true }; return p; };
  var remG = function(){ try { return remGet(); } catch (e) { return G().remind || { on: false, h: 19, m: 0 }; } };
  var hhmm = function(h, m){ var am = h < 12, h12 = h % 12 || 12; return h12 + ":" + String(m).padStart(2, "0") + (am ? " a. m." : " p. m."); };
  /* estado del permiso: {p: granted|prompt|denied|nada, canal, prueba, push} */
  function permiso(){
    if (AND && A.notifEstado) { try { var j = JSON.parse(A.notifEstado()); return { p: j.permiso, canal: j.canal !== false && j.racha !== false, proximo: j.proximo || 0, and: true }; } catch (e) {} }
    if (!("Notification" in window)) return { p: "nada" };
    return { p: Notification.permission === "default" ? "prompt" : Notification.permission, canal: true, push: WEB.sub };
  }
  function proximo(){
    var r = remG(); if (!r.on) return "";
    var e = permiso(); if (e.proximo) { var d = new Date(e.proximo); return (entre(hoy0(), new Date(d.getFullYear(), d.getMonth(), d.getDate())) ? "mañana" : "hoy") + " a las " + hhmm(d.getHours(), d.getMinutes()); }
    var t = new Date(); t.setHours(r.h, r.m, 0, 0); var manana = t < new Date() || cumple(new Date());
    return (manana ? "mañana" : "hoy") + " a las " + hhmm(r.h, r.m);
  }
  function ajustes(){
    var e = permiso(), r = remG(), p = pref(), est;
    if (e.p === "granted" && e.canal !== false) est = (K ? K.aviso("✓ Avisos permitidos" + (e.and ? " en este teléfono." : e.push ? " en este navegador, también con la app cerrada." : " mientras PLEX PLAY esté abierto. " + (WEB.servidor ? "Activa los avisos con la app cerrada abajo." : "")), { v: "ok" }) : "");
    else if (e.p === "nada") est = K ? K.aviso("Este navegador no permite notificaciones. En Android usa la app de PLEX PLAY; en iPhone, instala la app en la pantalla de inicio.", { v: "alerta" }) : "";
    else if (e.p === "prompt") est = (K ? K.aviso("Todavía no diste permiso para los avisos.", { v: "alerta" }) : "") + btn("Permitir avisos", { ancho: true, attrs: { "data-av": "permiso" } });
    else est = (K ? K.aviso(e.p === "granted" ? "Apagaste los avisos de PLEX PLAY en los ajustes del teléfono." : "Los avisos están bloqueados. Ábrelos en los ajustes " + (e.and ? "del teléfono" : "del navegador (el candado junto a la dirección)") + " y vuelve aquí.", { v: "error" }) : "") +
      (e.and ? btn("Abrir los ajustes del teléfono", { ancho: true, attrs: { "data-av": "ajustesSO" } }) : "");
    var opts = []; for (var h = 6; h <= 23; h++) [0, 30].forEach(function(m){ opts.push('<option value="' + h + ":" + m + '"' + (r.h === h && r.m === m ? " selected" : "") + ">" + hhmm(h, m) + "</option>"); });
    var fila = function(k, on, t, s){ return '<div class="av-aj-f"><span><b>' + t + "</b><small>" + s + "</small></span>" + (K ? K.sw(on, t, { attrs: { "data-av": "pref", "data-k": k } }) : "") + "</div>"; };
    pantalla('<h2 class="gm-t">Ajustes de avisos</h2>' + '<div class="av-aj-est">' + est + "</div>" +
      '<div class="av-aj">' +
        fila("on", r.on, "Recordatorio diario", r.on ? "Próximo: " + (proximo() || "—") : "Apagado: Manzana no te avisará") +
        (r.on ? '<label class="av-aj-hora">Hora <select data-av-hora>' + opts.join("") + "</select></label>" : "") +
        fila("racha", p.racha !== false, "Racha en peligro", "Por la tarde y una última oportunidad a las 9:30 p. m.") +
        fila("rec", p.rec !== false, "Recuperar la racha", "Si la pierdes, cuándo y cómo puedes repararla") +
        fila("volver", p.volver !== false, "Volver a estudiar", "Mensajes de Manzana si llevas días sin practicar") +
        (!AND && WEB.posible() && WEB.servidor ? fila("push", !!WEB.sub, "Con la app cerrada", "Avisos aunque cierres PLEX PLAY") : "") +
      "</div>" +
      '<div class="set-row c">' + btn("🔔 Enviarme un aviso de prueba", { v: "liso", ancho: true, attrs: { "data-av": "prueba" }, dis: e.p !== "granted" }) +
      btn("Listo", { ancho: true, attrs: { "data-g": "close" } }) + "</div>", "m-av-aj");
  }
  function cambiaPref(k, b){
    if (k === "on") {
      var r = Object.assign({}, remG(), { on: !remG().on }); G().remind = r; guarda();
      try { remSync(); } catch (e) {}
      if (r.on && permiso().p === "prompt") pidePermiso();
      sube(true); widget(); return reabre(ajustes);
    }
    if (k === "push") return WEB.cambia().then(function(){ reabre(ajustes); });
    var p = pref(); p[k] = p[k] === false; guarda(); widget(); sube(true);
    if (b) b.setAttribute("aria-checked", String(p[k] !== false));
  }
  function pidePermiso(){
    if (AND && A.pedirNotif) { try { A.pedirNotif(); } catch (e) {} return; }
    if ("Notification" in window) Notification.requestPermission().then(function(){ reabre(ajustes); });
  }
  /* rehace la pantalla abierta (PLX_UI no tiene «actualizar»: se cierra y se abre la misma) */
  var reabre = function(fn){ var abierta = D.querySelector(".gmodal.m-av"); if (abierta) { cierra(); setTimeout(fn, 280); } else fn(); };
  function prueba(){
    if (AND && A.probarAviso) { try { if (A.probarAviso("")) { avisa("Listo: mira la barra de notificaciones"); setTimeout(campana, 1500); return; } } catch (e) {} }
    if (!("serviceWorker" in navigator) || !("Notification" in window) || Notification.permission !== "granted") { avisa("Primero permite los avisos"); return; }
    var it = { id: "p" + Date.now(), tipo: "prueba", ti: "🔔 Así te avisará Manzana", tx: "Toca este aviso: te lleva a tu siguiente lección.", d: "practicar" };
    navigator.serviceWorker.ready.then(function(reg){
      return reg.showNotification(it.ti, { body: it.tx, icon: "icons/m4-icon-192.png", badge: "icons/m4-favicon-32.png", tag: "plx-prueba", data: { destino: it.d, id: it.id } });
    }).then(function(){ agrega(it); avisa("Listo: revisa tus notificaciones"); }, function(){ avisa("El navegador no dejó mostrar el aviso"); });
  }

  /* ================================================================== 4. DESTINOS */
  function palabra(){
    var w = null; try { w = JSON.parse(window.__plexPalabra ? window.__plexPalabra() : "null"); } catch (e) {}
    if (!w || !w[0]) w = ["le quotidien", "el día a día", "Le français fait partie de mon quotidien."];
    pantalla('<div class="av-hero"><img src="' + IMG + 'pensativo.webp" alt=""></div><small class="gm-k">Palabra del día</small>' +
      '<h2 class="gm-t av-pal">' + esc(w[0]) + '</h2><p class="gm-sub av-pal-es">' + esc(w[1]) + "</p>" + (w[2] ? '<p class="av-pal-ej">«' + esc(w[2]) + "»</p>" : "") +
      '<div class="set-row c">' + btn("🔊 Escuchar", { v: "liso", ancho: true, attrs: { "data-av": "oir", "data-t": w[0] + (w[2] ? ". " + w[2] : "") } }) + btn("▶ Practicar", { ancho: true, attrs: { "data-av": "practicar" } }) + "</div>", "m-av-pal");
  }
  function abrir(d){
    d = String(d || "");
    var hecho = function(){
      if (d === "practicar" || d === "leccion") { cierra(); if (window.__plexPracticar) window.__plexPracticar(); else go("lecciones"); return; }
      if (d === "racha" || d === "recupera") return pantallaRacha();
      if (d === "palabra") return palabra();
      if (d === "1v1" || d === "duelo") { cierra(); if (window.PLX1V1) PLX1V1.open(); return; }
      if (d === "avisos") return bandeja();
      if (d === "ajustes") return ajustes();
      try { go("parcours"); } catch (e) {}
    };
    if (D.querySelector(".gmodal")) { cierra(); setTimeout(hecho, 300); } else hecho();
  }
  window.__plexAbrir = abrir;

  /* ================================================================== 5. PUSH WEB CON LA APP CERRADA */
  /* La misma clave pública que plx101 (las suscripciones van a la tabla plx_push). La privada solo está en Supabase. */
  var VAPID = "BHGqN0LaURnkzP6ZEM4wumuaE9j11Nt7ojv88xPvZPlt4mMZKr_m7q4r6ReDKLyca_438WuYrxKZC-ICbZWKbg4";
  var sb = function(){ return window.PCB && PCB.sb && PCB.uid ? PCB.sb : null; };
  var b64 = function(s){ var p = "=".repeat((4 - s.length % 4) % 4), r = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")), o = new Uint8Array(r.length); for (var i = 0; i < r.length; i++) o[i] = r.charCodeAt(i); return o; };
  var WEB = {
    sub: false, servidor: false,
    posible: function(){ return !AND && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; },
    lee: function(){
      if (!WEB.posible()) return Promise.resolve();
      return navigator.serviceWorker.ready.then(function(reg){ return reg.pushManager.getSubscription(); }).then(function(s){ WEB.sub = !!s && Notification.permission === "granted"; }, function(){});
    },
    cambia: function(){
      if (!WEB.posible()) return Promise.resolve();
      if (!sb()) { avisa("Inicia sesión para recibir avisos con la app cerrada"); return Promise.resolve(); }
      return navigator.serviceWorker.ready.then(function(reg){
        return reg.pushManager.getSubscription().then(function(s){
          if (s) { var e = s.endpoint; return s.unsubscribe().then(function(){ WEB.sub = false; return sb().rpc("plx_push_quitar", { e: e }); }); }
          return Notification.requestPermission().then(function(p){
            if (p !== "granted") { avisa("El navegador bloqueó los avisos de PLEX PLAY"); return; }
            return reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64(window.PLX_VAPID_PRUEBA || VAPID) }).then(function(n){
              var j = n.toJSON(); WEB.sub = true;
              return sb().rpc("plx_push_guardar", { e: j.endpoint, k: j.keys.p256dh, a: j.keys.auth }).then(function(r){ if (r && r.error) avisa("No se pudo guardar en el servidor"); else { avisa("Avisos activados con la app cerrada"); sube(true); } });
            });
          });
        });
      }).catch(function(){ avisa("No se pudieron activar los avisos en este navegador"); });
    }
  };
  /* el estado que necesita el servidor para avisar a su hora (sin el SQL 09 la llamada falla y no pasa nada) */
  function estadoRec(){
    var r = remG(), p = pref(), rc = recuperable(), ult = "", d = new Date();
    for (var i = 0; i < 60; i++) { if (cubre(d)) { ult = dkey(d); break; } d = mas(d, -1); }
    var tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    return { p_on: !!r.on, p_h: r.h | 0, p_m: r.m | 0, p_tz: tz || "America/Bogota", p_racha: streak() | 0, p_ultimo: ult || null,
      p_hecho: cumple(new Date()) ? dkey() : null, p_freeze: G().freeze | 0, p_rec_n: rc ? rc.n : 0, p_rec_hasta: rc ? rc.hasta : null,
      p_prefs: { racha: p.racha !== false, rec: p.rec !== false, volver: p.volver !== false }, p_nombre: String(G().name || "").slice(0, 40), p_meta: meta(), p_xp: dayXP(new Date()) | 0 };
  }
  var subido = "", subeT = 0;
  function sube(ya){
    if (AND || !sb()) return;
    clearTimeout(subeT); subeT = setTimeout(function(){
      var e = estadoRec(), j = JSON.stringify(e); if (j === subido) return;
      sb().rpc("plx_recordatorio_guardar", e).then(function(r){ if (r && !r.error) { subido = j; WEB.servidor = true; } }, function(){});
    }, ya ? 50 : 1500);
  }

  /* ================================================================== 6. DATOS PARA EL WIDGET Y LOS AVISOS DE ANDROID */
  /* plx68 arma el JSON; aquí van las partes nuevas (1.8): protector, racha por recuperar, la semana, preferencias y 1V1 */
  window.PLX_AVISOS_DATOS = function(){
    var g = G(), rc = recuperable(), dias = {}, d = new Date(), lastOk = "";
    for (var i = 0; i < 14; i++) { var k = dkey(d); if (cumple(d)) dias[k] = "1"; else if ((g.frozen || []).indexOf(k) >= 0) dias[k] = "f"; if (!lastOk && cubre(d)) lastOk = k; d = mas(d, -1); }
    var du = g.duels || {}, cop = du.tr | 0, rango = "";
    try { var rk = window.PLX1V1 && PLX1V1.rango ? PLX1V1.rango(cop) : null; if (rk) rango = rk.i + " " + rk.n; } catch (e) {}
    var p = pref();
    return { lastOk: lastOk, freeze: g.freeze | 0, recN: rc ? rc.n : 0, recHasta: rc ? rc.hasta : "", dias: dias,
      copas: cop, rango: rango, duelosG: du.w | 0, avRacha: p.racha !== false, avRec: p.rec !== false, avVolver: p.volver !== false };
  };
  var widget = function(){ try { if (window.PLX_WIDGET) PLX_WIDGET.enviar(true); } catch (e) {} };

  /* ================================================================== eventos */
  D.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest("[data-av]") : null; if (!b) return;
    var a = b.getAttribute("data-av");
    if (a === "pref") { e.preventDefault(); return cambiaPref(b.getAttribute("data-k"), b); }
    e.preventDefault();
    if (a === "bandeja") return reabre(bandeja);
    if (a === "ajustes") return reabre(ajustes);
    if (a === "leertodo") { marca("*"); return reabre(bandeja); }
    if (a === "ir") { var id = b.getAttribute("data-id"), d = b.getAttribute("data-d"); marca(id); return d ? abrir(d) : reabre(bandeja); }
    if (a === "racha") return reabre(pantallaRacha);
    if (a === "practicar") return abrir("practicar");
    if (a === "permiso") return pidePermiso();
    if (a === "ajustesSO") { try { A.ajustesNotificaciones(); } catch (x) {} return; }
    if (a === "prueba") return prueba();
    if (a === "oir") { try { speak(b.getAttribute("data-t"), 0.9); } catch (x) {} return; }
    if (a === "reparar") {
      var r = reparar();
      if (r === "ok") { cierra(); setTimeout(function(){ pantalla('<div class="av-hero av-hero--fiesta"><img src="' + IMG + 'estrella.webp" alt=""></div><h2 class="gm-t">¡Racha recuperada!</h2><p class="gm-sub">Vuelves a tener ' + (streak() | 0) + ' días seguidos. Manzana está orgulloso.</p><div class="set-row c">' + btn("¡Vamos!", { v: "oro", ancho: true, attrs: { "data-g": "close" } }) + "</div>", "m-av-ok"); try { if (window.PLXG && PLXG.sfx) PLXG.sfx("win"); } catch (x) {} }, 300); }
      else if (r === "monedas") avisa("Te faltan monedas: juega o estudia para ganar más");
      else if (r === "meta") avisa("Primero cumple la meta de hoy");
      return;
    }
  });
  D.addEventListener("change", function(e){
    if (!e.target.matches || !e.target.matches("[data-av-hora]")) return;
    var v = e.target.value.split(":").map(Number); G().remind = Object.assign({}, remG(), { h: v[0], m: v[1] }); guarda();
    try { remSync(); } catch (x) {} sube(true); widget(); avisa("Recordatorio a las " + hhmm(v[0], v[1]));
    var s = D.querySelector(".m-av-aj .av-aj-f small"); if (s) s.textContent = "Próximo: " + proximo();
  });
  /* la app Android avisa cuando cambia el permiso (al volver de Ajustes o tras el diálogo) */
  window.__plexNotifEstado = function(){ if (D.querySelector(".gmodal.m-av-aj")) reabre(ajustes); };
  if ("serviceWorker" in navigator) navigator.serviceWorker.addEventListener("message", function(e){
    var m = e.data || {};
    if (m.plx === "aviso") { traePush(); setTimeout(campana, 400); }
    if (m.plx === "abrir") { if (m.id) marca(m.id); abrir(m.destino); }
  });

  /* tarjeta de recuperación en Inicio y la campana, después de cada repintada */
  var _r = render;
  render = function(){
    var r = _r.apply(this, arguments);
    try {
      campana(); anota();
      if (view === "parcours") {
        var rc = recuperable(), v = D.querySelector("#view"), ya = v && v.querySelector(".av-rec");
        /* Inicio se repinta a menudo: la tarjeta se conserva (si se rehiciera, su entrada animada la dejaba casi
           transparente) y solo cambia su contenido cuando cambia lo que dice */
        if (!rc && ya) ya.remove();
        if (rc && v) {
          var html = tarjetaRec(rc), w = D.createElement("div"); w.innerHTML = html; var nueva = w.firstChild;
          if (ya && ya.getAttribute("data-h") === String(html.length + rc.n)) nueva = null;
          if (nueva) {
            nueva.setAttribute("data-h", String(html.length + rc.n));
            if (!tarjetaRec.vista) { tarjetaRec.vista = true; nueva.classList.add("av-rec--entra"); }   /* la entrada animada, solo la primera vez */
            if (ya) { nueva.style.animation = "none"; ya.replaceWith(nueva); }
            else {
              var ancla = v.querySelector(".p5-ban") || v.querySelector(".p5-curso") || v.firstElementChild;   /* después del cartel fijo de la unidad: la zona que siempre se ve */
              if (ancla && ancla.parentNode) ancla.parentNode.insertBefore(nueva, ancla.classList.contains("p5-ban") ? ancla.nextSibling : ancla); else v.insertBefore(nueva, v.firstChild);
            }
          }
        }
        /* Inicio baja solo hasta la lección actual: la primera vez en la sesión se sube lo justo para ver la tarjeta */
        if (rc && !anota.vista) { anota.vista = true; setTimeout(function(){ var c = D.querySelector("#view .av-rec"), b = D.querySelector("#view .p5-ban"); if (c) { var y = c.getBoundingClientRect().top - (b ? b.getBoundingClientRect().bottom + 12 : 84); if (y < 0) scrollBy({ top: y, behavior: "smooth" }); } }, 1400); }
        if (rc && pref().rec !== false && !leeWeb().some(function(x){ return x.id === "rc-" + rc.hasta; }))
          agrega({ id: "rc-" + rc.hasta, tipo: "recupera", ti: "🩹 Tu racha de " + rc.n + " días se puede recuperar", tx: "Cumple la meta de hoy y repárala " + hastaTxt(rc) + ".", d: "racha" });
      }
    } catch (e) {}
    return r;
  };

  var css = [
    /* la campana cabe en el celular: el aro de nivel se esconde (sigue en Perfil) */
    "@layer pz{@media (max-width:400px){#topbar .av-lv{display:none!important}}}",
    /* 4.75: la campana es gemela de la tuerca de al lado (mismo tamaño de icono; en PC, la misma esquina que .p5-aj).
       Va en la capa pz con !important: el kit fija .pz-ibtn > img a 22 px y el círculo */
    "@layer pz{.pz-ibtn.av-campana > img{width:26px!important;height:26px!important;display:block}",
    "#p5-lado .pz-ibtn.av-campana--lado{flex:none!important;border-radius:var(--r-md)!important}}",
    ".av-rec{position:relative;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;margin:0 0 14px;padding:12px 14px 12px 8px;overflow:hidden}.av-rec--entra{animation:avEntra .45s cubic-bezier(.2,.9,.3,1.2) both}",
    ".av-rec__mz{width:72px;height:72px;object-fit:contain;margin:-6px 0 -14px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.25))}",
    ".av-rec__tx{display:grid;gap:3px;min-width:0}.av-rec__tx small{font:800 .68rem/1.2 var(--f-tx);letter-spacing:.1em;text-transform:uppercase;opacity:.9}",
    ".av-rec__tx b{font:800 1.05rem/1.2 var(--f-tit)}.av-rec__tx span{font:500 .82rem/1.35 var(--f-tx);opacity:.95}",
    "@media (max-width:380px){.av-rec{grid-template-columns:auto 1fr}.av-rec .pz-btn{grid-column:1/-1}}",
    ".av-hero{display:grid;place-items:center;margin:-4px 0 4px}.av-hero img{width:150px;height:150px;object-fit:contain;animation:avFlota 3.2s ease-in-out infinite}",
    ".av-hero--fiesta img{animation:avSalta .7s cubic-bezier(.2,.9,.3,1.5) both,avFlota 3.2s .7s ease-in-out infinite}",
    ".av-pasos{list-style:none;counter-reset:p;margin:12px 0;padding:0;display:grid;gap:10px;text-align:left}",
    ".av-pasos li{counter-increment:p;position:relative;display:grid;gap:4px;padding:12px 14px 12px 50px;border-radius:16px;background:var(--p-sup-2)}",
    ".av-pasos li::before{content:counter(p);position:absolute;left:12px;top:12px;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font:800 .85rem var(--f-tit);background:var(--p-azul-btn);color:#fff}",
    ".av-pasos li.ok::before{content:'✓';background:var(--p-verde-btn)}.av-pasos small{color:var(--p-apagado)}",
    /* 4.75: la bandeja y sus ajustes son listas: empiezan bajo «Volver» (la pantalla centraba en el alto lo corto y
       dejaba un hueco) y todo va en la misma columna, alineado a la izquierda (el título quedaba centrado y la lista,
       que no se estiraba, en una columna estrecha). La pantalla (plx103) está en la capa p5: se gana desde la pz */
    "@layer pz{html.mk .gmodal.m-av-bandeja .gm-card,html.mk .gmodal.m-av-aj .gm-card{align-items:stretch!important;text-align:left!important}",
    "html.mk .gmodal.m-av-bandeja .gm-card > .pg-cab + *,html.mk .gmodal.m-av-aj .gm-card > .pg-cab + *{margin-top:0!important}",
    "html.mk .gmodal.m-av-bandeja .gm-card > :last-child,html.mk .gmodal.m-av-aj .gm-card > :last-child{margin-bottom:0!important}",
    "html.mk .gmodal.m-av-bandeja .gm-card > *,html.mk .gmodal.m-av-aj .gm-card > *{align-self:stretch!important;width:auto!important}}",
    ".av-cab{display:flex;align-items:center;justify-content:space-between;gap:12px}.av-cab .gm-t{margin:0;text-align:left}",
    ".m-av-aj .gm-t{text-align:left}",
    ".av-acc{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0;min-height:32px;font:700 .85rem var(--f-tx);color:var(--p-apagado)}",
    ".av-lista{margin:0;border-radius:16px}",
    ".m-av-bandeja .set-row.c{margin-top:var(--s-3)}",
    ".av-fila{width:100%;align-items:flex-start!important;padding-top:12px!important;padding-bottom:12px!important}",
    ".av-fila__ic{width:48px!important;height:48px!important;background:var(--p-sup-2)!important;border-radius:14px!important}.av-fila__ic img{width:42px!important;height:42px!important;object-fit:contain}",
    ".av-fila .pz-fila__tx small{white-space:normal}.av-cuando{font-size:.72rem!important;opacity:.85}",
    ".av-fila .pz-fila__punto{margin-top:8px}",
    ".av-aj-est{display:grid;gap:8px;margin:8px 0 12px}",
    ".av-aj{display:grid;text-align:left}.av-aj-f{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 0;border-bottom:1px solid var(--p-linea)}",
    ".av-aj-f b{display:block;font:700 1rem var(--f-tit)}.av-aj-f small{display:block;color:var(--p-apagado);font-size:.82rem;line-height:1.35;margin-top:2px}",
    ".av-aj-hora{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--p-linea);font-weight:700}",
    ".av-aj-hora select{min-height:44px;border-radius:12px;border:1.5px solid var(--p-linea);background:var(--p-sup);color:var(--p-tinta);padding:0 10px;font:inherit}",
    ".av-pal{font-size:2rem!important;letter-spacing:-.01em}.av-pal-es{font-weight:700;color:var(--p-azul-tx)!important}.av-pal-ej{font-style:italic;color:var(--p-tinta-2);margin:4px 0 8px}",
    "@keyframes avEntra{from{transform:translateY(10px) scale(.97);opacity:0}to{transform:none;opacity:1}}",
    "@keyframes avFlota{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}",
    "@keyframes avSalta{0%{transform:scale(.3) rotate(-12deg);opacity:0}70%{transform:scale(1.1) rotate(3deg);opacity:1}100%{transform:none}}",
    "@media (prefers-reduced-motion:reduce){.av-rec,.av-hero img{animation:none!important}}"
  ].join("\n");
  var st = D.createElement("style"); st.id = "plx117"; st.textContent = css; D.head.appendChild(st);

  window.PLX_AVISOS = { recuperable: recuperable, reparar: reparar, anota: anota, bandeja: bandeja, ajustes: ajustes, abrir: abrir, agrega: agrega, todos: todos,
    marca: marca, sinLeer: sinLeer, estadoRec: estadoRec, sube: sube, web: WEB, palabra: palabra };

  /* arranque */
  setTimeout(function(){
    /* con sesión, el estado va al servidor (si el SQL 09 existe, WEB.servidor = true y aparece «Con la app cerrada») */
    anota(); campana(); traePush(); WEB.lee().then(function(){ sube(); });
    try { var q = new URLSearchParams(location.search).get("abrir"); if (q) { history.replaceState(null, "", location.pathname); abrir(q); } } catch (e) {}
  }, 1200);
  D.addEventListener("visibilitychange", function(){ if (D.visibilityState === "visible") { traePush(); campana(); } else sube(); });
  if (typeof finish === "function") { var _f = finish; finish = function(){ var r = _f.apply(this, arguments); setTimeout(function(){ anota(); sube(); campana(); }, 400); return r; }; }
})();
