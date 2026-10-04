/* PLEX PLAY 3.3.0 — El gato que elegiste se queda
   El pelaje volvía solo a Manzana en varios caminos: al unir el progreso con la nube cuando el estado remoto no
   traía fecha del gato, al repetir la bienvenida en otro dispositivo (la bienvenida arranca siempre con «manzana» y
   al terminar pisa pelaje y accesorios), y en el ranking cuando el perfil público se quedó sin actualizar porque
   un solo error apagaba para siempre el envío (gCloud.off).
   Ahora
   - El gato elegido se guarda aparte (pc-gato-<perfil>) con su fecha. Al abrir la app y después de cada unión con
     la nube, si ese registro es más reciente que el gato del progreso, manda el registro. La elección más reciente
     del usuario gana siempre; el gato por defecto nunca pisa una elección.
   - La bienvenida arranca con el gato que ya tenías (pelaje y nombre) y, al terminar, conserva tus accesorios.
   - El perfil público (ranking, duelos) se reintenta cada minuto si falló, y se envía apenas se nota que trae
     otro gato que el tuyo. */
(function(){
  "use strict";
  if (typeof gEnsure !== "function" || typeof save !== "function" || typeof S === "undefined") return;
  var K = "pc-gato-" + (typeof PROFILE_ID !== "undefined" ? PROFILE_ID : "me");
  var copia = function(o){ return JSON.parse(JSON.stringify(o)); };
  var lee = function(){ try { var r = JSON.parse(localStorage.getItem(K) || "null"); return r && r.cat && r.cat.coat ? r : null; } catch (e) { return null; } };
  var escribe = function(cat, at, name){ try { localStorage.setItem(K, JSON.stringify({ cat: copia(cat), at: at || Date.now(), name: name || "" })); } catch (e) {} };
  var firma = function(c){ c = c || {}; return JSON.stringify({ c: c.coat, a: c.acc || {}, b: c.bg || "", n: c.cname || "" }); };
  var firmaPub = function(c){ c = c || {}; return JSON.stringify({ c: c.coat, a: c.acc || {} }); };
  var foto = function(){ var G = S.game; return G && G.cat ? firma(G.cat) : ""; };
  var ultima = foto();

  /* 1. cada guardado: si el gato cambió, se anota aparte con su fecha */
  var saveO = save;
  save = function(){
    var r = saveO.apply(this, arguments);
    try {
      var f = foto();
      if (f && f !== ultima) { ultima = f; var G = S.game; if (!G.catAt) G.catAt = Date.now(); escribe(G.cat, G.catAt, G.name); }
    } catch (e) {}
    return r;
  };

  /* 2. al unir con la nube: la elección más reciente manda */
  if (typeof mergeState === "function") {
    var msO = mergeState;
    mergeState = function(a, b){
      var R = msO.apply(this, arguments);
      try {
        var g = lee();
        if (R && R.game && R.game.cat && g && g.at > (R.game.catAt || 0) && firma(R.game.cat) !== firma(g.cat)) { R.game.cat = copia(g.cat); R.game.catAt = g.at; }
        setTimeout(function(){ ultima = foto(); }, 0);
      } catch (e) {}
      return R;
    };
  }

  /* 3. al abrir la app */
  var restaura = function(){
    try {
      var G = gEnsure(), g = lee();
      /* sin registro aparte: se crea solo si ya hay perfil con un gato elegido (nunca para el gato por defecto de un perfil nuevo) */
      if (!g) { if (G.name && G.cat && G.cat.coat && G.catAt) escribe(G.cat, G.catAt, G.name); return; }
      if (g.at > (G.catAt || 0) && firma(G.cat) !== firma(g.cat)) { G.cat = copia(g.cat); G.catAt = g.at; ultima = foto(); lsSet(LS_KEY, JSON.stringify(S)); }
    } catch (e) {}
  };
  restaura();

  /* 4. la bienvenida respeta el gato que ya tenías */
  if (typeof gOnbRender === "function" && typeof gOnb === "object") {
    var orO = gOnbRender;
    gOnbRender = function(){
      try {
        if (!gOnb.tocado && !gOnb.pre) {
          gOnb.pre = true;   /* se rellena una sola vez, al abrir la bienvenida; después manda lo que toque el usuario */
          var G = gEnsure(), g = lee(), c = (g && g.cat) || (G.cat && G.cat.coat && G.cat.coat !== "manzana" ? G.cat : null);
          if (c) { gOnb.coat = c.coat; if (c.cname) gOnb.cname = c.cname; }
        }
      } catch (e) {}
      return orO.apply(this, arguments);
    };
    window.addEventListener("click", function(e){   /* window: corre antes que el manejador de la app */
      var b = e.target.closest && e.target.closest("[data-g=onb-coat]"); if (b) gOnb.tocado = true;
      var d = e.target.closest && e.target.closest("[data-g=onb-done]"); if (!d) return;
      /* la bienvenida ya guardó: se devuelven los accesorios si el pelaje es el mismo de antes */
      setTimeout(function(){
        try {
          var G = gEnsure(), g = lee();
          if (g && g.cat.coat === G.cat.coat && g.cat.acc && JSON.stringify(g.cat.acc) !== JSON.stringify(G.cat.acc)) { G.cat.acc = copia(g.cat.acc); if (g.cat.bg) G.cat.bg = g.cat.bg; save(true); }
          else { G.catAt = Date.now(); escribe(G.cat, G.catAt, G.name); }
        } catch (x) {}
      }, 50);
    });
  }

  /* 5. perfil público: reintentos y envío cuando no coincide */
  if (typeof gCloud !== "undefined" && typeof gPush === "function") {
    setInterval(function(){ try { if (gCloud.off && gCloud.uid && navigator.onLine !== false) { gCloud.off = false; gPush(); } } catch (e) {} }, 60000);
    if (window.PCB && PCB.ready && PCB.ready.then) {
      PCB.ready.then(function(){
        setTimeout(function(){
          try {
            var G = gEnsure(), DEF = firmaPub({ coat: "manzana", acc: { hat: "boina", neck: "marino" } });
            /* dispositivo nuevo: el gato local es el de fábrica y nunca se eligió aquí → manda el del perfil público */
            if (PCB.me && PCB.me.cat && PCB.me.cat.coat && !G.catAt && !lee() && firmaPub(G.cat) === DEF && firmaPub(PCB.me.cat) !== DEF) {
              G.cat = Object.assign({}, G.cat, copia(PCB.me.cat)); G.catAt = 1; escribe(G.cat, 1, G.name); ultima = foto(); lsSet(LS_KEY, JSON.stringify(S)); try { render(); } catch (x) {}
              return;
            }
            if (PCB.me && PCB.me.cat && G.name && firmaPub(PCB.me.cat) !== firmaPub(G.cat)) { gCloud.off = false; gPush(true); }
          } catch (e) {}
        }, 2500);
      });
    }
  }

  /* 6. borrar todo también borra el gato aparte */
  if (typeof wipeAll === "function") { var wipeO = wipeAll; wipeAll = function(){ try { localStorage.removeItem(K); } catch (e) {} return wipeO.apply(this, arguments); }; }
})();
