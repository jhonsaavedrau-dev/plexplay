/* PLEX PLAY 1.17 — ajustes que deben correr antes del resto de la app */
(function(){
  "use strict";
  /* 4.51: idioma que se estudia (francés o inglés). La verdad está en el progreso (js/idioma.js); aquí solo se
     adelanta su copia para pintar el color del idioma desde el primer cuadro. */
  try { var idi = localStorage.getItem("plx-lang"), pide = /[?&]idioma=(en|fr)\b/.exec(location.search); document.documentElement.setAttribute("data-lang", pide ? pide[1] : idi === "en" ? "en" : "fr"); } catch (e) {}
  /* 4.47: modo liviano para celulares modestos (2 GB de RAM o menos, 4 núcleos o menos, o ahorro de datos): Manzana en 2D,
     sin transiciones con foto de la pantalla ni desenfoques. Va primero porque lo leen plx111/112/113/116.
     localStorage plx-liviano = "si" | "no" lo fuerza. */
  window.PLX_LIVIANO = (function(){ try { var v = localStorage.getItem("plx-liviano"); if (v === "si") return true; if (v === "no") return false;
    var c = navigator.connection || {}; return !!(c.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)); } catch (e) { return false; } })();
  if (window.PLX_LIVIANO) {
    document.documentElement.classList.add("plx-liviano");
    /* sin desenfoque de fondo (lo más caro de pintar en un celular modesto). En la capa pz, la que gana entre las
       !important; se añade al cargar, cuando kit.js ya declaró el orden de capas */
    addEventListener("DOMContentLoaded", function(){ var st = document.createElement("style"); st.id = "plx-liviano";
      st.textContent = "@layer pz{html.plx-liviano *,html.plx-liviano *::before,html.plx-liviano *::after{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}}";
      document.head.appendChild(st); });
  }
  /* 4.111: unos 16 módulos vigilan con MutationObserver los cambios de toda la página. Lo que cambia varias veces por
     segundo (reloj y subtítulos del video, marcadores de los juegos) los despertaba a todos en cada tic y el celular se
     sentía pesado. Lo que está dentro de [data-mo-no] ya no los despierta. Va aquí porque pre.js corre antes que ellos. */
  try {
    var MO0 = window.MutationObserver;
    if (MO0 && !MO0.__plx) {
      var quieto = function(m){ var t = m.target; t = t && t.nodeType === 1 ? t : t && t.parentNode; return !!(t && t.closest && t.closest("[data-mo-no]")); };
      var MO1 = function(cb){ return new MO0(function(recs, obs){ var r = []; for (var i = 0; i < recs.length; i++) if (!quieto(recs[i])) r.push(recs[i]); if (r.length) cb.call(this, r, obs); }); };
      MO1.prototype = MO0.prototype; MO1.__plx = true; window.MutationObserver = MO1;
    }
  } catch (e) {}
  /* modo docente visible (Soy estudiante / Soy docente en el ingreso) */
  window.PLX_TEACH = true;
  /* modo demo: la app funciona sin cuenta y sin servidor; el progreso queda en este dispositivo */
  /* 1.26.5: sin modo demo. Solo se entra con Google o con el correo @unipamplona.edu.co. Quien estaba en la demo
     vuelve a la pantalla de acceso (su progreso local no se borra). */
  window.PLX_DEMO = false;
  try{ localStorage.removeItem("plx-demo"); localStorage.removeItem("plx-after-demo"); }catch(e){}
  /* sin sesión guardada: no se dibuja la app detrás del ingreso (ahorra datos en la primera carga) */
  try{ var C=window.PC_CONFIG||{}, au=JSON.parse(localStorage.getItem("pc-auth")||"null"); window.PLX_HOLD=!!(C.url&&C.key)&&!window.PLX_DEMO&&!(au&&au.user); }catch(e){ window.PLX_HOLD=false; }
  /* errores tempranos: se guardan hasta que el monitor (plx34) pueda enviarlos */
  var Q = window.__plxErrQ = [];
  function push(msg, src, stack){ if(Q.length < 20) Q.push({ msg:String(msg||"").slice(0,500), src:String(src||"").slice(0,300), stack:String(stack||"").slice(0,2000), t:Date.now() }); }
  window.addEventListener("error", function(e){
    if(!e || (!e.message && !e.error)) return;                 // errores de carga de recursos: se ignoran
    push(e.message || (e.error && e.error.message), (e.filename||"") + ":" + (e.lineno||0) + ":" + (e.colno||0), e.error && e.error.stack);
  });
  window.addEventListener("unhandledrejection", function(e){
    var r = e && e.reason; if(!r) return;
    var m = r.message || r.code || (typeof r === "string" ? r : ""); if(!m) return;
    push("Promesa: " + m, "", r.stack);
  });
})();
