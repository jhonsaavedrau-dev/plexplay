/* PLEX PLAY 2.2.0 — Word Battle y Team Challenge en línea (cada jugador en su teléfono)
   - Tiempo real con los canales de Supabase (broadcast + presencia), como PLEX 1V1: no hacen falta tablas nuevas.
     Nunca se envían correos: solo un id de partida, el apodo y el gato.
   - Word Battle: «Buscar rival» (cola por nivel A1–A2 / B1–B2 / C1), «Jugar con un amigo» (código de 4 letras) o
     «Tengo un código». Un teléfono es el anfitrión: arma los retos (las mismas opciones para los dos), marca el
     ritmo y decide quién acertó primero (por el tiempo que tardó cada uno en su pantalla). Si el rival se va,
     sigue Manzana. Sin conexión: contra Manzana.
   - Team Challenge: «Crear equipo» (código) y «Unirme». De 2 a 4 personas. El anfitrión empieza; cada reto le toca
     a uno (se ve en todos los teléfonos); si falla, lo intenta el siguiente. Meta de aciertos, 3 vidas y 120 s
     para todo el equipo. Reacciones rápidas (👍 🔥 😅 💡) que ven todos.
   - Para probar sin servidor: localStorage «plx-net-local» = "1" usa BroadcastChannel entre pestañas. */
(function(){
  "use strict";
  var G = window.PLXG; if (!G || !G.sesion || !G.registrar) return;
  var esc = G.esc, mezcla = G.mezcla;
  var fx = function(n, x){ try { if (G.fx) G.fx(n, x); } catch (e) {} };

  /* ---------------- yo ---------------- */
  var rid = function(n){ var a = "ABCDEFGHJKMNPQRSTUVWXYZ23456789", s = ""; for (var i = 0; i < n; i++) s += a[Math.floor(Math.random() * a.length)]; return s; };
  var local = function(){ try { return localStorage.getItem("plx-net-local") === "1"; } catch (e) { return false; } };
  var miId = (function(){ var k = "plx-net-id", v = null; try { v = sessionStorage.getItem(k); if (!v) { v = "j" + rid(10); sessionStorage.setItem(k, v); } } catch (e) { v = "j" + rid(10); } return v; })();
  var ME = { get id(){ return (!local() && window.PCB && PCB.uid) || miId; }, get nick(){ try { return (gEnsure().name || "Jugador").slice(0, 18); } catch (e) { return "Jugador"; } }, get cat(){ try { return gEnsure().cat || null; } catch (e) { return null; } } };
  var gato = function(c, mood){ try { return catSVG(c || null, { mood: mood || "happy" }); } catch (e) { return "🐱"; } };
  var hayRed = function(){ if (local()) return true; try { return !!(window.PCB && PCB.sb && PCB.enabled !== false) && navigator.onLine !== false; } catch (e) { return false; } };

  /* ---------------- transporte: canal con mensajes y presencia ---------------- */
  var canalSB = function(nombre, meta, on){
    var lista = [], ch = PCB.sb.channel(nombre, { config: { broadcast: { self: false }, presence: { key: ME.id } } });
    ch.on("broadcast", { event: "m" }, function(m){ var p = m.payload || {}; if (p.to && p.to !== ME.id) return; if (on.msg) on.msg(p.ev, p.d || {}, p.de); });
    ch.on("presence", { event: "sync" }, function(){
      var st = ch.presenceState(); lista = Object.keys(st).map(function(k){ return { id: k, meta: (st[k] && st[k][0]) || {} }; });
      if (on.miembros) on.miembros(lista);
    });
    ch.subscribe(function(estado){
      if (estado === "SUBSCRIBED") { ch.track(Object.assign({ ts: Date.now() }, meta)); if (on.listo) on.listo(); }
      else if ((estado === "CHANNEL_ERROR" || estado === "TIMED_OUT") && on.error) on.error(estado);
    });
    return {
      send: function(ev, d, to){ try { ch.send({ type: "broadcast", event: "m", payload: { ev: ev, d: d || {}, de: ME.id, to: to || null } }); } catch (e) {} },
      miembros: function(){ return lista; },
      cierra: function(){ try { ch.untrack(); } catch (e) {} try { PCB.sb.removeChannel(ch); } catch (e) {} }
    };
  };
  var canalLocal = function(nombre, meta, on){
    var bc = new BroadcastChannel("plxnet:" + nombre), vistos = {}, ts = Date.now(), vivo = true;
    var lista = function(){ var now = Date.now(), l = [{ id: ME.id, meta: Object.assign({ ts: ts }, meta) }]; Object.keys(vistos).forEach(function(k){ if (now - vistos[k].t < 5000) l.push({ id: k, meta: vistos[k].meta }); else delete vistos[k]; }); return l; };
    var avisa = function(){ if (on.miembros) on.miembros(lista()); };
    var hola = function(){ if (vivo) bc.postMessage({ tipo: "hola", id: ME.id, meta: Object.assign({ ts: ts }, meta) }); };
    bc.onmessage = function(e){
      var m = e.data || {};
      if (m.tipo === "hola") { var nuevo = !vistos[m.id]; vistos[m.id] = { t: Date.now(), meta: m.meta }; if (nuevo) { hola(); avisa(); } return; }
      if (m.tipo === "adios") { delete vistos[m.id]; avisa(); return; }
      if (m.tipo === "m" && (!m.to || m.to === ME.id) && on.msg) on.msg(m.ev, m.d || {}, m.de);
    };
    var iv = setInterval(function(){ hola(); var antes = Object.keys(vistos).length; lista(); if (Object.keys(vistos).length !== antes) avisa(); }, 1200);
    setTimeout(function(){ hola(); avisa(); if (on.listo) on.listo(); }, 30);
    return {
      send: function(ev, d, to){ if (vivo) bc.postMessage({ tipo: "m", ev: ev, d: d || {}, de: ME.id, to: to || null }); },
      miembros: lista,
      cierra: function(){ if (!vivo) return; vivo = false; clearInterval(iv); try { bc.postMessage({ tipo: "adios", id: ME.id }); bc.close(); } catch (e) {} }
    };
  };
  var canal = function(nombre, meta, on){ return local() ? canalLocal(nombre, meta, on) : canalSB(nombre, meta, on); };

  /* ---------------- retos compartidos ---------------- */
  var empaqueta = function(alc, jid, n, maxOp){
    var nivel = G.nivel(alc.track), rs = [];
    try { rs = mezcla(G.retosJuego(G.juegos[jid], alc)); } catch (e) {}
    return rs.slice(0, n).map(function(r){
      return { tipo: r.tipo, ask: r.ask, q: r.q, audio: r.audio || null, correcta: r.correcta, malas: r.malas, why: r.why || "", key: r.key || null, hab: r.hab || null,
        ops: G.opcionesReto ? G.opcionesReto(r, Math.min(maxOp, 3 + nivel), nivel) : mezcla([{ t: r.correcta[0], ok: true }].concat(r.malas.slice(0, 2).map(function(x){ return { t: x, ok: false }; }))) };
    });
  };
  var suena = function(t){ if (!t) return; try { var p = speak(t); if (p && p.catch) p.catch(function(){}); } catch (e) {} };
  /* 4.20: casi ningún reto de vocabulario trae audio, así que en los duelos no se oía nada. Al cerrar cada reto se
     dice en francés la parte francesa: la frase completa si tenía hueco, o la palabra del lado francés de «x → y». */
  var PRON = /^(je|j'|tu|il|elle|on|nous|vous|ils|elles)$/i;
  /* español: tildes o ñ en palabras en minúscula (los nombres como Bogotá o Andrés sí se leen), signos ¿¡ o palabras
     que no existen en francés; fonética entre corchetes tampoco */
  var ES = /(^|[\s,¿¡])(el|los|las|unos|unas|del|hay|muy|para|por|hace|yo|usted|ustedes|ellos|ellas|alguien|algo|cuando|pero|porque|tambi[eé]n|femenino|masculino|verdadero|falso|correcto|incorrecto|uso|causa|v[ií]a)(?=$|[\s,.!?:])/i;
  var esES = function(x){ return !x || /[¿¡ñ\[\]ɑɔəʁʃʒɥɲŋɛ]|(^|[^\p{L}])\p{Ll}*[áíóú]/u.test(x) || ES.test(x); };
  var dicha = function(r){
    if (!r || !r.correcta) return "";
    if (r.audio) return r.audio;   /* reto de escucha: se repite lo que había que oír */
    var c = String(r.correcta[0] || "").trim(), q = String(r.q || "").trim(), ask = String(r.ask || ""), f = "", partes = null;
    var pega = function(a, b){ return /'$/.test(a) ? a + b : a + " " + b; };
    if (/_{2,}/.test(q)) {
      var qq = q.split(/:\s+/); if (qq.length > 1 && esES(qq[0])) q = qq.slice(1).join(": ");   /* «Ella prefiere el té: elle ___ le thé.» */
      f = (G.completa && G.completa(q, c)) || c;
    }
    else if (/→\s*$/.test(q)) {
      var izq = q.replace(/\s*→\s*$/, "").trim(), lados = ask.split("→"), A = lados.length > 1 ? lados[0] : "", B = lados.length > 1 ? lados[1] : "";
      var num = /^[\d\s:h]+$/.test(izq);
      if (!A) f = /^(vocabulario|anuncio|contracci)/i.test(ask) ? izq : /^frase/i.test(ask) ? pega(izq, c) : /traducci[oó]n|se dice/i.test(ask) ? c : null;
      else if (/disculpa/i.test(B)) f = c;                                /* «Llegas tarde. → Désolé pour le retard.» */
      else if (/espa[nñ]ol/i.test(A)) f = c;
      else if (/espa[nñ]ol|para qu[eé]|\bacci[oó]n|hora|contracci|\buso|funci[oó]n|significado/i.test(B)) f = num ? c : izq;
      else if (num) f = c;
      else if (/t[oó]nico/i.test(B)) f = c;
      else if (PRON.test(izq) || /^(sujeto|pronombre)/i.test(A)) f = pega(izq, c);
      else if (/art[ií]culo|partitivo/i.test(B)) f = pega(c, izq);
      else if (/^verbo$/i.test(B.trim())) f = pega(c, izq.replace(/^(le|la|les)\s+|^l'/i, ""));   /* le vélo → faire du vélo */
      else if (/^frase$/i.test(A.trim()) || /construcci/i.test(B) || /(\s(de|du|des|à|au)|d')$/i.test(izq)) f = pega(izq, c);   /* une bouteille de → vin */
      if (f === null || f === undefined || f === "") partes = [izq, c];
    }
    else f = /significa/i.test(ask) ? q.replace(/[«»]/g, "") : c;
    /* dos lados en francés: se dicen los dos («le fils, la fille»); el que esté en español o sea un trozo («pourr-»), no */
    if (partes) {
      partes = partes.filter(function(x){ return x && !esES(x) && !/-$/.test(x) && !/^[\d\s:h.º]+$/.test(x); });
      f = partes.map(function(x, i){ return i && !/[!?.,;:…]$/.test(partes[i - 1]) ? ", " + x : (i ? " " : "") + x; }).join("");
    }
    f = String(f || "").replace(/\s*\([^)]*\)/g, "").trim();
    return esES(f) ? "" : f;
  };
  var BOCINA = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" fill="currentColor"/><path d="M13 7a4 4 0 0 1 0 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
  var preguntaHTML = function(r){
    return '<small>' + esc(r.ask || "") + "</small>" + (r.q ? '<b lang="fr">' + esc(r.q).replace(/_{2,}/, '<span class="hueco">___</span>') + "</b>" : "") +
      (r.audio ? '<button type="button" class="pz-btn pz-btn--oro pz-btn--sm x-oir" data-net-oir>' + BOCINA + "<span>Escuchar</span></button>" : "");
  };

  /* ---------------- sala de espera ---------------- */
  var CERRAR = '<button type="button" class="pz-ibtn plxg-ib" data-net="salir" aria-label="Cerrar"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg></button>';
  var marco = function(el, titulo, color, cuerpo){
    el.innerHTML = '<div class="plxg-scroll"><div class="plxg-wrap net" style="--nc:' + color + '"><div class="net-top">' + CERRAR + '<p class="plxg-k">' + esc(titulo) + '</p></div>' + cuerpo + "</div></div>";
  };
  var yoHTML = function(){ return '<div class="net-yo"><span class="net-gato">' + gato(ME.cat, "happy") + "</span><span><small>Juegas como</small><b>" + esc(ME.nick) + "</b></span></div>"; };
  var miembroHTML = function(m, host){ return '<li><span class="net-gato">' + gato(m.meta && m.meta.cat, "happy") + "</span><b>" + esc((m.meta && m.meta.nick) || "Jugador") + "</b>" + (m.id === host ? "<em>Anfitrión</em>" : "") + (m.id === ME.id ? "<em>Tú</em>" : "") + "</li>"; };

  /* ============ arranque de la partida real (después de la sala) ============ */
  var _sesion = G.sesion;
  var arrancar = function(el, alc, juego, acciones, opc, red){
    var st = G.aj.sinTiempo; G.aj.sinTiempo = false;       /* en línea todos juegan con el mismo reloj */
    el.__net = red;
    var r; try { r = _sesion.call(G, el, alc, juego, acciones, Object.assign({ enLinea: true }, opc)); } finally { G.aj.sinTiempo = st; }
    return r;
  };
  var vs = function(el, a, b, color, luego){
    el.innerHTML = '<div class="net-vs" style="--nc:' + color + '"><div class="net-vs-l"><span class="net-gato">' + gato(a.cat, "excited") + "</span><b>" + esc(a.nick) + '</b></div><em>VS</em><div class="net-vs-r"><span class="net-gato">' + gato(b.cat, "excited") + "</span><b>" + esc(b.nick) + "</b></div></div>";
    fx("combo", 3); setTimeout(luego, 1900);
  };

  /* ================= WORD BATTLE ================= */
  var lobbyWB = function(el, alc, juego, acciones, opc, proxy){
    var nivel = G.nivel(alc.track), ch = null, timer = 0, estado = "inicio", sala = null, soyHost = false, empezo = false;
    var limpia = function(){ clearInterval(timer); timer = 0; if (ch) { ch.cierra(); ch = null; } };
    proxy.alCerrar = limpia;
    var inicio = function(msg){
      limpia(); estado = "inicio";
      marco(el, "Word Battle · en línea", juego.color,
        '<h1 class="plxg-h">Word<br>Battle</h1><p class="net-sub">Duelo de francés en tiempo real: gana el punto quien toca primero la respuesta correcta.</p>' + yoHTML() +
        (msg ? '<p class="net-aviso">' + esc(msg) + "</p>" : "") +
        '<div class="net-bts">' +
          '<button type="button" class="pz-btn pz-btn--lg plxg-btn net-b" data-net="buscar"' + (hayRed() ? "" : " disabled") + '><span>⚡</span>Buscar rival</button>' +
          '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line net-b" data-net="crear"' + (hayRed() ? "" : " disabled") + '><span>👥</span>Jugar con un amigo</button>' +
          '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line net-b" data-net="codigo"' + (hayRed() ? "" : " disabled") + '><span>🔑</span>Tengo un código</button>' +
          '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line net-b" data-net="bot"><span>🐱</span>Contra Manzana (sin internet)</button>' +
        "</div>" + (hayRed() ? "" : '<p class="net-aviso">Sin conexión: puedes jugar contra Manzana.</p>'));
    };
    var espera = function(txt, extra){
      marco(el, "Word Battle · en línea", juego.color, '<div class="net-radar" aria-hidden="true"><i></i><i></i><i></i><span class="net-gato">' + gato(ME.cat, "curious") + '</span></div><p class="net-busca" aria-live="polite">' + txt + "</p>" + (extra || "") +
        '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line" data-net="volver">Cancelar</button>');
    };
    var empiezaSala = function(nombre, host, soyCreador){
      if (ch) ch.cierra();
      sala = nombre; soyHost = host === ME.id;
      var rival = null;
      ch = canal(nombre, { nick: ME.nick, cat: ME.cat, lv: nivel }, {
        miembros: function(l){
          if (empezo) return;
          var otros = l.filter(function(m){ return m.id !== ME.id; }).sort(function(a, b){ return (a.meta.ts || 0) - (b.meta.ts || 0); });
          if (otros.length && !rival) {
            rival = otros[0];
            if (soyHost) setTimeout(function(){
              if (empezo || !ch) return;
              var retos = empaqueta(alc, "wb", 40, 4);
              if (retos.length < 4) { inicio("Este tema tiene muy pocos retos para un duelo. Elige otra unidad."); return; }
              ch.send("start", { retos: retos, titulo: alc.titulo, track: alc.track });
              comienza(retos, rival);
            }, 700);
          }
        },
        msg: function(ev, d, de){
          if (ev === "start" && !soyHost && !empezo) { var m = ch.miembros().filter(function(x){ return x.id === de; })[0] || { id: de, meta: {} }; comienza(d.retos, m); }
        },
        error: function(){ inicio("No se pudo conectar. Revisa tu internet."); }
      });
    };
    var comienza = function(retos, rival){
      if (empezo) return; empezo = true; clearInterval(timer);
      var buf = []; if (ch && ch.__on) ch.__on.msg = function(ev, d, de){ buf.push([ev, d, de]); };   /* lo que llegue antes de montar la partida */
      var riv = { id: rival.id, nick: (rival.meta && rival.meta.nick) || "Rival", cat: rival.meta && rival.meta.cat };
      vs(el, ME, riv, juego.color, function(){
        var red = { canal: ch, host: soyHost, rival: riv, retos: retos, buf: buf };
        ch = null;   /* la partida se queda con el canal */
        proxy.real = arrancar(el, { clave: "net:wb", track: alc.track, titulo: "Duelo en línea", sub: "vs " + riv.nick, seg: 90, lecciones: [] }, juego, acciones,
          Object.assign({}, opc, { retos: retos, ordenFijo: true, seg: 90, oro: false }), red);
      });
    };
    var buscar = function(){
      estado = "busca"; var t0 = Date.now(), q = "plx-wb-q-" + nivel;
      espera("Buscando rival de tu nivel…");
      timer = setInterval(function(){ var s = Math.round((Date.now() - t0) / 1000), p = el.querySelector(".net-busca"); if (p) p.textContent = "Buscando rival de tu nivel… " + s + " s"; if (s === 25) { var x = el.querySelector(".net-radar"); if (x) x.insertAdjacentHTML("afterend", '<button type="button" class="pz-btn pz-btn--lg plxg-btn net-b" data-net="bot"><span>🐱</span>Jugar contra Manzana mientras tanto</button>'); } }, 1000);
      ch = canal(q, { nick: ME.nick, cat: ME.cat, q: 1 }, {
        miembros: function(l){
          if (estado !== "busca") return;
          var ord = l.slice().sort(function(a, b){ return (a.meta.ts || 0) - (b.meta.ts || 0) || (a.id < b.id ? -1 : 1); }), i = ord.findIndex(function(m){ return m.id === ME.id; });
          if (i < 0) return;
          var par = i % 2 === 0 ? ord[i + 1] : ord[i - 1]; if (!par) return;
          var host = i % 2 === 0 ? ME.id : par.id, otro = host === ME.id ? par.id : ME.id;
          estado = "sala"; var nombre = "plx-wb-r-" + host + "-" + otro;
          ch.cierra(); ch = null; espera("¡Rival encontrado! Conectando…");
          empiezaSala(nombre, host, host === ME.id);
          setTimeout(function(){ if (!empezo && estado === "sala") { estado = "busca"; limpia(); buscar(); } }, 12000);
        },
        error: function(){ inicio("No se pudo conectar. Revisa tu internet."); }
      });
    };
    el.onclick = function(e){
      var b = e.target.closest && e.target.closest("[data-net]"); if (!b || b.disabled) return;
      var a = b.dataset.net; G.despiertaAudio && G.despiertaAudio();
      if (a === "salir") { limpia(); acciones.salir(); return; }
      if (a === "volver") { inicio(); return; }
      if (a === "buscar") { buscar(); return; }
      if (a === "crear") { var c = rid(4); estado = "sala"; espera("Comparte este código con tu amigo:", '<p class="net-codigo">' + c + "</p>"); empiezaSala("plx-wb-c-" + c, ME.id, true); return; }
      if (a === "codigo") {
        marco(el, "Word Battle · en línea", juego.color, '<h2 class="plxg-h2">Código de la sala</h2><input class="net-in" id="netCod" maxlength="4" autocomplete="off" autocapitalize="characters" placeholder="ABCD" aria-label="Código de 4 letras">' +
          '<div class="net-bts"><button type="button" class="pz-btn pz-btn--lg plxg-btn" data-net="unir">Unirme</button><button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line" data-net="volver">Volver</button></div>');
        var i = el.querySelector("#netCod"); i.focus(); i.onkeydown = function(ev){ if (ev.key === "Enter") el.querySelector("[data-net=unir]").click(); }; return;
      }
      if (a === "unir") { var v = (el.querySelector("#netCod").value || "").trim().toUpperCase(); if (v.length !== 4) return; estado = "sala"; espera("Entrando a la sala " + esc(v) + "…"); empiezaSala("plx-wb-c-" + v, null, false); return; }
      if (a === "bot") { limpia(); empezo = true; el.onclick = null; proxy.real = arrancar(el, alc, juego, acciones, opc, { bot: true, retos: empaqueta(alc, "wb", 40, 4) }); }
    };
    inicio();
  };

  var duelo = { yo: 0, el: 0, rival: "Manzana" };
  function motorDuelo(zona, s){
    var red = s.el.__net || { bot: true, retos: [] }, ch = red.canal || null, bot = !ch, soyHost = bot || !!red.host;
    var retos = red.retos && red.retos.length ? red.retos : [], rival = red.rival || { id: "bot", nick: "Manzana", cat: { coat: "calico" } };
    if (bot) rival = { id: "bot", nick: "Manzana", cat: { coat: "calico" } };
    duelo = { yo: 0, el: 0, rival: rival.nick };
    zona.innerHTML = '<div class="x56 wbn"><div class="wbn-rival"><span class="net-gato">' + gato(rival.cat, "happy") + '</span><span class="wbn-rn"><small>Rival</small><b>' + esc(rival.nick) + '</b></span><span class="wbn-st" aria-live="polite">Pensando…</span><b class="wbn-pr">0</b></div>' +
      '<div class="wbn-q"></div><div class="pz-barra pz-barra--reloj x-reloj"><i></i></div><p class="x-nota wbn-res" aria-live="polite"></p><div class="x-ops" role="group" aria-label="Respuestas"></div>' +
      '<div class="wbn-yo"><span class="net-gato">' + gato(ME.cat, "happy") + '</span><span class="wbn-rn"><small>Tú</small><b>' + esc(ME.nick) + '</b></span><b class="wbn-py">0</b></div></div>';
    var raiz = zona.firstChild, qEl = raiz.querySelector(".wbn-q"), opsEl = raiz.querySelector(".x-ops"), resEl = raiz.querySelector(".wbn-res"), stEl = raiz.querySelector(".wbn-st"),
      prEl = raiz.querySelector(".wbn-pr"), pyEl = raiz.querySelector(".wbn-py"), reloj = raiz.querySelector(".x-reloj i");
    var latido = 0, k = -1, reto = null, t = 0, T = 8, hecho = false, bloqueado = false, resp = {}, pend = -1, sig = -1, empezado = false, tBot = 0, botOk = true, ultimoRival = Date.now(), cola = [];
    var coloca = function(){ raiz.style.paddingTop = (s.techo() + 6) + "px"; };
    var pinta = function(){
      opsEl.innerHTML = (reto ? reto.ops : []).map(function(o, i){
        return '<button type="button" class="pz-opt pz-opt--juego x-op' + (o.mal ? " mal" : "") + (o.ok && hecho ? " bien" : "") + '" data-i="' + i + '"' + (o.mal || bloqueado || hecho ? " disabled" : "") + ' lang="fr"><span>' + esc(o.t) + "</span></button>";
      }).join("");
      prEl.textContent = duelo.el; pyEl.textContent = duelo.yo;
    };
    var mostrar = function(n){
      if (n < 0 || n >= retos.length) return;
      k = n; reto = JSON.parse(JSON.stringify(retos[n])); t = 0; hecho = false; bloqueado = false; resp = {}; pend = -1;
      T = s.dir.t() * 1.4 + 4 + (reto.audio ? 1.5 : 0);
      qEl.innerHTML = preguntaHTML(reto); resEl.textContent = ""; stEl.textContent = "Pensando…"; raiz.classList.remove("gano", "perdio");
      s.banner(""); coloca(); pinta(); fx("barrido");
      if (reto.audio) suena(reto.audio);
      if (bot) { tBot = T * (.35 + Math.random() * .45); botOk = Math.random() < [.62, .72, .82][s.nivel]; }
    };
    /* anfitrión: registra respuestas y decide */
    var registra = function(id, ok, tt){
      if (!soyHost || hecho || k < 0) return;
      resp[id] = { ok: ok, t: tt };
      if (id !== ME.id) stEl.textContent = ok ? "¡Respondió!" : "Se equivocó";
      if (ok && pend < 0) pend = .35;   /* espera un poco por si el otro acertó antes en su pantalla */
      var ids = [ME.id, rival.id];
      if (!ok && ids.every(function(x){ return resp[x] && !resp[x].ok; })) resuelve(null);
    };
    var resuelve = function(w){
      if (hecho) return;
      if (w === undefined) { var oks = [ME.id, rival.id].filter(function(x){ return resp[x] && resp[x].ok; }).sort(function(a, b){ return resp[a].t - resp[b].t; }); w = oks[0] || null; }
      if (ch) ch.send("res", { k: k, w: w });
      aplica(k, w);
      sig = 2.2;   /* tiempo para oír la respuesta antes del siguiente reto */
    };
    var aplica = function(n, w){
      if (n !== k || hecho) return;
      hecho = true; pinta();
      var c = { x: zona.clientWidth / 2, y: opsEl.offsetTop };
      if (w === ME.id) { duelo.yo++; s.acierto(reto, { rapidez: Math.max(0, 1 - t / T), x: c.x, y: c.y }); resEl.textContent = "¡Punto para ti!"; raiz.classList.add("gano"); }
      else if (w) { duelo.el++; s.pts.corta(); s.pop(c.x, 80, rival.nick + " +1", "#F472B6"); fx("pierde"); resEl.textContent = rival.nick + " fue más rápido · era «" + reto.correcta[0] + "»"; raiz.classList.add("perdio"); }
      else { resEl.textContent = "Nadie acertó · era «" + reto.correcta[0] + "»"; fx("tictac"); }
      pinta(); suena(dicha(reto));
    };
    var toca = function(i, b){
      if (!reto || hecho || bloqueado || s.estado() !== "juega") return;
      var o = reto.ops[i]; if (!o) return;
      bloqueado = true;
      try { G.despiertaAudio(); } catch (e) {}   /* el toque desbloquea el audio (iPhone) para la voz al cerrar el reto */
      if (!o.ok) { o.mal = true; G.sfx("mal"); resEl.textContent = "Fallaste: espera al rival"; }
      else { resEl.textContent = "¡Correcta! Comprobando quién fue primero…"; fx("atrapa"); }
      pinta();
      if (soyHost) registra(ME.id, !!o.ok, t); else if (ch) ch.send("ans", { k: k, ok: !!o.ok, t: t });
    };
    /* mensajes del canal (el canal se creó en la sala; aquí se reemplazan sus manejadores) */
    var alMsg = function(ev, d, de){
      ultimoRival = Date.now();
      if (ev === "k") { if (!empezado || s.estado() === "cuenta") cola.push(d.k); else mostrar(d.k); return; }
      if (ev === "ans" && soyHost && d.k === k) { registra(de, d.ok, d.t); return; }
      if (ev === "res" && !soyHost) { aplica(d.k, d.w); return; }
    };
    if (ch && ch.__on) ch.__on.msg = alMsg;
    (red.buf || []).forEach(function(m){ alMsg(m[0], m[1], m[2]); }); red.buf = [];
    var abandono = function(){
      if (bot) return;
      bot = true; soyHost = true; rival = { id: "bot", nick: "Manzana", cat: { coat: "calico" } }; duelo.rival = "Manzana";
      raiz.querySelector(".wbn-rival .wbn-rn b").textContent = "Manzana (el rival se fue)";
      if (ch) { ch.cierra(); ch = null; }
      if (!hecho && k >= 0) { tBot = t + T * .4; botOk = Math.random() < .7; } else if (k < 0) mostrar(0);
    };
    zona.addEventListener("click", function(e){
      if (e.target.closest && e.target.closest("[data-net-oir]")) { if (reto && reto.audio) suena(reto.audio); return; }
      var b = e.target.closest && e.target.closest("[data-i]"); if (b && opsEl.contains(b)) { e.preventDefault(); toca(+b.dataset.i, b); }
    });
    window.addEventListener("resize", coloca);
    coloca();
    return {
      jugar: function(){
        if (empezado) return; empezado = true;
        if (soyHost) { mostrar(0); if (ch) ch.send("k", { k: 0 }); }
        else if (cola.length) mostrar(cola.pop());
      },
      tick: function(dt){
        if (!dt) return;
        latido += dt; if (ch && latido > 2) { latido = 0; ch.send("hb", {}); }
        if (!bot && Date.now() - ultimoRival > 15000) abandono();
        if (sig >= 0) { sig -= dt; if (sig < 0 && soyHost) { var n = k + 1; if (n >= retos.length) n = 0; if (ch) ch.send("k", { k: n }); mostrar(n); } }
        if (!reto || hecho) return;
        t += dt; reloj.style.transform = "scaleX(" + Math.max(0, 1 - t / T).toFixed(3) + ")";
        if (bot && soyHost && !resp.bot && t >= tBot) registra("bot", botOk, t);
        if (pend >= 0) { pend -= dt; if (pend < 0) resuelve(); }
        if (soyHost && t >= T + .3) resuelve(null);
      },
      tecla: function(e){ if (/^[1-4]$/.test(e.key)) { var b = opsEl.querySelectorAll(".x-op")[+e.key - 1]; if (b && !b.disabled) { e.preventDefault(); toca(+b.dataset.i, b); } } },
      destruye: function(){ window.removeEventListener("resize", coloca); if (ch) { ch.send("bye", {}); ch.cierra(); ch = null; } },
      depura: function(){ return { k: k, host: soyHost, bot: bot, duelo: duelo, T: T, t: t, ops: reto ? reto.ops.map(function(o){ return o.t + (o.ok ? "*" : ""); }) : [] }; }
    };
  }
  var cabezaDuelo = function(){
    var tx = duelo.yo > duelo.el ? "¡Ganaste el duelo!" : duelo.yo === duelo.el ? "¡Empate!" : "¡Ganó " + duelo.rival + "!";
    return '<div class="wb-res"><p>' + esc(tx) + '</p><div><span><small>Tú</small><b>' + duelo.yo + '</b></span><em>VS</em><span><small>' + esc(duelo.rival) + "</small><b>" + duelo.el + "</b></span></div></div>";
  };

  /* ================= TEAM CHALLENGE: EQUIPO AZUL CONTRA EQUIPO ROJO (4.127) =================
     Pedido de Jhon (26-oct-2026): «enfocarlo a enfrentarse entre dos equipos de estudiantes». Antes era cooperativo
     (un solo equipo contra una meta).
     - Sala con código: quien entra cae en el equipo con menos gente; cada uno puede cambiarse. De 2 a 8 personas.
       Se empieza cuando hay al menos una persona en cada equipo. El anfitrión reparte los equipos (manda «eqs»).
     - Partida de 120 s: todos ven el mismo reto. En cada reto responde UNA persona por equipo (el puesto rota para que
       todos jueguen); gana el punto el equipo cuyo representante toca primero la correcta. Si se equivoca, su equipo
       queda fuera de ese reto. Los demás animan con reacciones.
     - El anfitrión arbitra (como en Word Battle): recibe las respuestas con su tiempo y decide.
     - Sin internet, o si un equipo se queda sin nadie, juega el «Equipo Manzana». */
  var EQN = { a: "Azul", r: "Rojo" }, EQC = { a: "#3B82F6", r: "#EF4444" };
  /* reacciones con Manzana (plx88 convierte los emojis en íconos de línea y se veían como chispas) */
  var REAC = [["pulgar", "Bien"], ["celebrar", "¡Bravo!"], ["sorpresa", "¡Uy!"], ["corazones", "Te quiero, equipo"], ["estrella", "¡Estrella!"]];
  var partido = { a: 0, r: 0, mio: "a" };
  var lobbyTC = function(el, alc, juego, acciones, opc, proxy){
    var nivel = G.nivel(alc.track), ch = null, soyHost = false, codigo = "", empezo = false, lista = [], EQ = {};
    var limpia = function(){ if (ch) { ch.cierra(); ch = null; } };
    proxy.alCerrar = limpia;
    var inicio = function(msg){
      limpia(); EQ = {};
      marco(el, "Team Challenge · en línea", juego.color,
        '<h1 class="plxg-h">Team<br>Challenge</h1><p class="net-sub">Equipo Azul contra Equipo Rojo, cada uno en su teléfono. En cada reto responde una persona por equipo: gana el punto quien acierta primero.</p>' + yoHTML() +
        (msg ? '<p class="net-aviso">' + esc(msg) + "</p>" : "") +
        '<div class="net-bts"><button type="button" class="pz-btn pz-btn--lg plxg-btn net-b" data-net="crear"' + (hayRed() ? "" : " disabled") + '><span>👥</span>Crear sala</button>' +
        '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line net-b" data-net="codigo"' + (hayRed() ? "" : " disabled") + '><span>🔑</span>Unirme con código</button>' +
        '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line net-b" data-net="solo"><span>🐱</span>Contra el Equipo Manzana</button></div>' + (hayRed() ? "" : '<p class="net-aviso">Sin conexión: puedes jugar contra el Equipo Manzana.</p>'));
    };
    var ordenados = function(){ return lista.slice().sort(function(a, b){ return (a.meta.ts || 0) - (b.meta.ts || 0) || (a.id < b.id ? -1 : 1); }).slice(0, 8); };
    /* el anfitrión mete a quien llega en el equipo con menos gente y saca a quien se fue */
    var reparte = function(){
      if (!soyHost) return;
      var l = ordenados(), vivos = {}, cambio = false;
      l.forEach(function(m){ vivos[m.id] = 1; });
      Object.keys(EQ).forEach(function(id){ if (!vivos[id]) { delete EQ[id]; cambio = true; } });
      l.forEach(function(m){
        if (EQ[m.id]) return;
        var na = 0, nr = 0; Object.keys(EQ).forEach(function(id){ if (EQ[id] === "a") na++; else nr++; });
        EQ[m.id] = na <= nr ? "a" : "r"; cambio = true;
      });
      if (cambio && ch) ch.send("eqs", { eq: EQ });
    };
    var cuenta = function(e){ return ordenados().filter(function(m){ return EQ[m.id] === e; }).length; };
    var pintaSala = function(){
      var l = ordenados(), host = soyHost ? ME.id : (l[0] && l[0].id), mio = EQ[ME.id];
      var col = function(e){
        var ms = l.filter(function(m){ return EQ[m.id] === e; });
        return '<div class="tc2-col ' + e + '"><h3>Equipo ' + EQN[e] + " <small>" + ms.length + "</small></h3><ul>" +
          (ms.length ? ms.map(function(m){ return miembroHTML(m, host); }).join("") : '<li class="vacio">Esperando…</li>') + "</ul></div>";
      };
      var listo = cuenta("a") >= 1 && cuenta("r") >= 1;
      marco(el, "Team Challenge · sala " + codigo, juego.color,
        '<p class="net-codigo">' + esc(codigo) + '</p><p class="net-sub">' + (soyHost ? "Comparte el código. Cuando haya gente en los dos equipos, empieza." : "Esperando a que el anfitrión empiece…") + "</p>" +
        '<div class="tc2-sala">' + col("a") + col("r") + "</div>" +
        '<div class="net-bts">' + (mio ? '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line" data-net="cambia">Pasarme al Equipo ' + EQN[mio === "a" ? "r" : "a"] + "</button>" : "") +
        (soyHost ? '<button type="button" class="pz-btn pz-btn--lg plxg-btn" data-net="empezar"' + (listo ? "" : " disabled") + ">" + (listo ? "¡Empezar " + cuenta("a") + " contra " + cuenta("r") + "!" : "Falta gente en un equipo") + "</button>" : "") +
        '<button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line" data-net="volver">Salir de la sala</button></div>');
    };
    var entra = function(c, host){
      codigo = c; soyHost = host; lista = []; EQ = {};
      ch = canal("plx-tc-" + c, { nick: ME.nick, cat: ME.cat, host: host ? 1 : 0 }, {
        miembros: function(l){ lista = l; if (empezo) return; reparte(); pintaSala(); },
        msg: function(ev, d, de){
          if (empezo) return;
          if (ev === "eqs" && !soyHost) { EQ = d.eq || {}; pintaSala(); return; }
          if (ev === "pide" && soyHost && EQ[de]) { EQ[de] = EQ[de] === "a" ? "r" : "a"; if (ch) ch.send("eqs", { eq: EQ }); pintaSala(); return; }
          if (ev === "start" && !soyHost) comienza(d);
        },
        error: function(){ inicio("No se pudo conectar. Revisa tu internet."); }
      });
      pintaSala();
    };
    var comienza = function(d){
      empezo = true;
      var buf = []; if (ch && ch.__on) ch.__on.msg = function(ev, dd, de){ buf.push([ev, dd, de]); };
      var red = { canal: ch, host: soyHost, ids: d.ids, nombres: d.nombres, gatos: d.gatos, eq: d.eq, retos: d.retos, buf: buf };
      ch = null;
      fx("combo", 3);
      proxy.real = arrancar(el, { clave: "net:tc", track: alc.track, titulo: "Azul contra Rojo", sub: d.ids.length + " jugadores", seg: 120, lecciones: [] }, juego, acciones,
        Object.assign({}, opc, { retos: d.retos, ordenFijo: true, seg: 120, oro: false }), red);
    };
    el.onclick = function(e){
      var b = e.target.closest && e.target.closest("[data-net]"); if (!b || b.disabled) return;
      var a = b.dataset.net; G.despiertaAudio && G.despiertaAudio();
      if (a === "salir") { limpia(); acciones.salir(); return; }
      if (a === "volver") { inicio(); return; }
      if (a === "crear") { entra(rid(4), true); return; }
      if (a === "codigo") {
        marco(el, "Team Challenge · en línea", juego.color, '<h2 class="plxg-h2">Código de la sala</h2><input class="net-in" id="netCod" maxlength="4" autocomplete="off" autocapitalize="characters" placeholder="ABCD" aria-label="Código de 4 letras">' +
          '<div class="net-bts"><button type="button" class="pz-btn pz-btn--lg plxg-btn" data-net="unir">Unirme</button><button type="button" class="pz-btn pz-btn--lg pz-btn--liso plxg-btn line" data-net="volver">Volver</button></div>');
        var i = el.querySelector("#netCod"); i.focus(); i.onkeydown = function(ev){ if (ev.key === "Enter") el.querySelector("[data-net=unir]").click(); }; return;
      }
      if (a === "unir") { var v = (el.querySelector("#netCod").value || "").trim().toUpperCase(); if (v.length === 4) entra(v, false); return; }
      if (a === "cambia") {
        if (soyHost) { EQ[ME.id] = EQ[ME.id] === "a" ? "r" : "a"; if (ch) ch.send("eqs", { eq: EQ }); pintaSala(); }
        else if (ch) ch.send("pide", {});
        return;
      }
      if (a === "empezar" && soyHost && !empezo) {
        var l = ordenados().filter(function(m){ return EQ[m.id]; });
        if (!l.some(function(m){ return EQ[m.id] === "a"; }) || !l.some(function(m){ return EQ[m.id] === "r"; })) return;
        var retos = empaqueta(alc, "tc", 40, 4); if (retos.length < 4) { inicio("Este tema tiene muy pocos retos. Elige otra unidad."); return; }
        var eq = {}; l.forEach(function(m){ eq[m.id] = EQ[m.id]; });
        var d = { ids: l.map(function(m){ return m.id; }), nombres: l.map(function(m){ return (m.meta && m.meta.nick) || "Jugador"; }), gatos: l.map(function(m){ return m.meta && m.meta.cat; }), eq: eq, retos: retos };
        ch.send("start", d); comienza(d); return;
      }
      if (a === "solo") {
        limpia(); empezo = true; el.onclick = null;
        var rs = empaqueta(alc, "tc", 40, 4), eq1 = {}; eq1[ME.id] = "a";
        proxy.real = arrancar(el, alc, juego, acciones, Object.assign({}, opc, { retos: rs, ordenFijo: true, seg: 120, oro: false }),
          { solo: true, ids: [ME.id], nombres: [ME.nick], gatos: [ME.cat], eq: eq1, retos: rs });
      }
    };
    inicio();
  };

  function motorEquipos(zona, s){
    var red = s.el.__net || { solo: true, ids: [ME.id], nombres: [ME.nick], gatos: [ME.cat], eq: {}, retos: [] }, ch = red.canal || null;
    if (!red.eq[ME.id] && red.solo) red.eq[ME.id] = "a";
    var soyHost = !ch || !!red.host, ids = red.ids.slice(), retos = red.retos, EQ = red.eq;
    var nombreDe = function(id){ if (id === "bot") return "Manzana"; var i = red.ids.indexOf(id); return id === ME.id ? "Tú" : (red.nombres[i] || "Jugador"); };
    var gatoDe = function(id){ if (id === "bot") return { coat: "calico" }; return red.gatos[red.ids.indexOf(id)]; };
    var mio = EQ[ME.id] || "a", rival = mio === "a" ? "r" : "a";
    partido = { a: 0, r: 0, mio: mio, solo: !ch };
    var miembros = function(e){ return ids.filter(function(id){ return EQ[id] === e; }); };
    zona.innerHTML = '<div class="x56 tc2">' +
      '<div class="tc2-mar"><div class="tc2-eq a' + (mio === "a" ? " mio" : "") + '"><small>Equipo Azul' + (mio === "a" ? " · tú" : "") + '</small><b class="tc2-p">0</b><span class="tc2-rep"></span></div><em>VS</em>' +
      '<div class="tc2-eq r' + (mio === "r" ? " mio" : "") + '"><small>' + (!ch ? "Equipo Manzana" : "Equipo Rojo") + (mio === "r" ? " · tú" : "") + '</small><b class="tc2-p">0</b><span class="tc2-rep"></span></div></div>' +
      '<div class="tc2-turno" aria-live="polite"></div><div class="wbn-q"></div><div class="pz-barra pz-barra--reloj x-reloj"><i></i></div>' +
      '<p class="x-nota" aria-live="polite"></p><div class="x-ops" role="group" aria-label="Respuestas"></div>' +
      '<div class="tcn-emo tc2-emo" role="group" aria-label="Reacciones">' + REAC.map(function(e){ return '<button type="button" data-emo="' + e[0] + '" aria-label="' + e[1] + '"><img src="img/m2d/' + e[0] + '.webp" alt=""></button>'; }).join("") + "</div></div>";
    var raiz = zona.firstChild, eqA = raiz.querySelector(".tc2-eq.a"), eqR = raiz.querySelector(".tc2-eq.r"), turEl = raiz.querySelector(".tc2-turno"),
      qEl = raiz.querySelector(".wbn-q"), opsEl = raiz.querySelector(".x-ops"), nota = raiz.querySelector(".x-nota"), reloj = raiz.querySelector(".x-reloj i");
    var k = -1, reto = null, ta = 0, tr = 0, reps = { a: null, r: null }, resp = {}, t = 0, T = 10, hecho = false, pend = -1, sig = -1, empezado = false, cola = [], vistos = {}, latido = 0, bots = {}, fuera = false;
    var coloca = function(){ raiz.style.paddingTop = (s.techo() + 6) + "px"; };
    var repDe = function(e, turnoN){ var m = miembros(e); return m.length ? m[turnoN % m.length] : "bot"; };
    var pintaMar = function(){
      [["a", eqA], ["r", eqR]].forEach(function(x){
        x[1].querySelector(".tc2-p").textContent = partido[x[0]];
        var id = reps[x[0]];
        x[1].querySelector(".tc2-rep").innerHTML = id ? '<span class="net-gato">' + gato(gatoDe(id), "excited") + "</span><b>" + esc(nombreDe(id)) + "</b>" : "";
        x[1].classList.toggle("fuera", !!(resp[x[0]] && !resp[x[0]].ok));
      });
    };
    var soyRep = function(){ return reps[mio] === ME.id; };
    var pintaTurno = function(){
      if (!reto) { turEl.innerHTML = ""; return; }
      if (soyRep()) turEl.innerHTML = "<b>¡Respondes por el Equipo " + EQN[mio] + "!</b><span>Sé el primero en acertar</span>";
      else turEl.innerHTML = "<b>Responde " + esc(nombreDe(reps[mio])) + " por tu equipo</b><span>Anímalo con una reacción</span>";
      raiz.classList.toggle("mio", soyRep());
    };
    var pinta = function(){
      var bloqueado = !soyRep() || hecho || (resp[mio] && !resp[mio].ok) || fuera;
      opsEl.innerHTML = (reto ? reto.ops : []).map(function(o, i){
        return '<button type="button" class="pz-opt pz-opt--juego x-op' + (o.mal ? " mal" : "") + (o.ok && hecho ? " bien" : "") + '" data-i="' + i + '"' + (bloqueado || o.mal ? " disabled" : "") + ' lang="fr"><span>' + esc(o.t) + "</span></button>";
      }).join("");
    };
    var mostrar = function(n, a, r){
      if (!retos.length) return;
      k = ((n % retos.length) + retos.length) % retos.length; ta = a; tr = r; reps = { a: repDe("a", a), r: repDe("r", r) };
      reto = JSON.parse(JSON.stringify(retos[k])); t = 0; hecho = false; resp = {}; pend = -1; fuera = false;
      T = s.dir.t() * 1.4 + 4 + (reto.audio ? 1.5 : 0);
      qEl.innerHTML = preguntaHTML(reto); nota.textContent = ""; s.banner(""); coloca(); pintaMar(); pintaTurno(); pinta(); fx("barrido");
      if (reto.audio) suena(reto.audio);
      if (soyRep()) fx("unido");
      /* el anfitrión hace jugar a Manzana si un equipo no tiene a nadie */
      bots = {}; ["a", "r"].forEach(function(e){ if (reps[e] === "bot") bots[e] = { t: T * (.4 + Math.random() * .45), ok: Math.random() < [.6, .7, .8][s.nivel] }; });
    };
    /* el anfitrión registra lo que responde cada representante y decide */
    var registra = function(e, ok, tt, i){
      if (!soyHost || hecho || k < 0 || resp[e]) return;
      resp[e] = { ok: ok, t: tt };
      if (!ok) { var m = { k: k, e: e, i: i }; if (ch) ch.send("mal", m); marcaMal(m); }
      if (ok && pend < 0) pend = .35;   /* un instante por si el otro equipo acertó antes en su pantalla */
      if (resp.a && resp.r && !resp.a.ok && !resp.r.ok) resuelve(null);
    };
    var marcaMal = function(m){
      if (m.k !== k || hecho) return;
      resp[m.e] = resp[m.e] || { ok: false };
      if (m.e === mio && reto.ops[m.i]) reto.ops[m.i].mal = true;
      nota.textContent = "El Equipo " + EQN[m.e] + " falló" + (m.e === mio ? " · espera al otro equipo" : " · ¡es su oportunidad!");
      if (m.e === mio) G.sfx("mal");
      pintaMar(); pinta();
    };
    var resuelve = function(w){
      if (hecho) return;
      if (w === undefined) { var oks = ["a", "r"].filter(function(e){ return resp[e] && resp[e].ok; }).sort(function(x, y){ return resp[x].t - resp[y].t; }); w = oks[0] || null; }
      if (ch) ch.send("res", { k: k, w: w });
      aplica(k, w); sig = 2.3;
    };
    var aplica = function(n, w){
      if (n !== k || hecho) return;
      hecho = true;
      var c = { x: zona.clientWidth / 2, y: opsEl.offsetTop };
      if (w) partido[w]++;
      if (w === mio) { s.acierto(reto, { rapidez: Math.max(0, 1 - t / T), x: c.x, y: c.y }); nota.textContent = "¡Punto para el Equipo " + EQN[w] + "!" + (reps[w] === ME.id ? " Lo ganaste tú." : ""); raiz.classList.add("gano"); }
      else if (w) { s.pts.corta(); s.pop(c.x, 80, "Equipo " + EQN[w] + " +1", EQC[w]); fx("pierde"); nota.textContent = "Punto para el Equipo " + EQN[w] + " · era «" + reto.correcta[0] + "»"; raiz.classList.add("perdio"); }
      else { nota.textContent = "Nadie acertó · era «" + reto.correcta[0] + "»"; fx("tictac"); }
      pintaMar(); pinta(); suena(dicha(reto));
      setTimeout(function(){ raiz.classList.remove("gano", "perdio"); }, 1200);
    };
    var siguiente = function(){ var n = k + 1, a = ta + 1, r = tr + 1; if (ch) ch.send("k", { k: n, a: a, r: r, ids: ids }); mostrar(n, a, r); };
    var toca = function(i){
      if (!reto || hecho || !soyRep() || fuera || s.estado() !== "juega") return;
      var o = reto.ops[i]; if (!o) return;
      fuera = !o.ok;   /* tras fallar, no se puede volver a intentar en este reto */
      try { G.despiertaAudio(); } catch (e) {}
      if (o.ok) { nota.textContent = "¡Correcta! Comprobando quién fue primero…"; fx("atrapa"); }
      else { o.mal = true; G.sfx("mal"); }
      pinta();
      if (soyHost) registra(mio, !!o.ok, t, i); else if (ch) ch.send("ans", { k: k, ok: !!o.ok, t: t, i: i, e: mio });
    };
    var burbuja = function(e, de){
      if (!REAC.some(function(x){ return x[0] === e; })) return;
      var caja = EQ[de] === "r" ? eqR : eqA, b = document.createElement("img"); b.className = "tcn-bur tc2-bur"; b.alt = ""; b.src = "img/m2d/" + e + ".webp";
      caja.appendChild(b); setTimeout(function(){ b.remove(); }, 1400); fx("tictac");
    };
    var alMsg = function(ev, d, de){
      vistos[de] = Date.now();
      if (ev === "k") { if (d.ids) ids = d.ids; if (!empezado || s.estado() === "cuenta") cola.push(d); else mostrar(d.k, d.a, d.r); return; }
      if (ev === "ans" && soyHost && d.k === k) { if (reps[d.e] === de) registra(d.e, d.ok, d.t, d.i); return; }
      if (ev === "mal" && !soyHost) { marcaMal(d); return; }
      if (ev === "res" && !soyHost) { aplica(d.k, d.w); return; }
      if (ev === "emo") { burbuja(d.e, de); return; }
    };
    if (ch && ch.__on) ch.__on.msg = alMsg;
    (red.buf || []).forEach(function(m){ alMsg(m[0], m[1], m[2]); }); red.buf = [];
    zona.addEventListener("click", function(e){
      if (e.target.closest && e.target.closest("[data-net-oir]")) { if (reto && reto.audio) suena(reto.audio); return; }
      var em = e.target.closest && e.target.closest("[data-emo]"); if (em) { if (ch) ch.send("emo", { e: em.dataset.emo }); burbuja(em.dataset.emo, ME.id); return; }
      var b = e.target.closest && e.target.closest("[data-i]"); if (b && opsEl.contains(b)) { e.preventDefault(); toca(+b.dataset.i); }
    });
    window.addEventListener("resize", coloca); coloca();
    /* alguien se fue: sale de su equipo (si el equipo queda vacío, juega Manzana); si era el anfitrión, lo reemplaza el primero que queda */
    var arranque = 0;
    var revisa = function(){
      if (!ch) return;
      if (!arranque) arranque = Date.now();
      var now = Date.now(), vivos = ids.filter(function(id){ return id === ME.id || (vistos[id] && now - vistos[id] < 12000) || (!vistos[id] && now - arranque < 12000); });
      if (vivos.length === ids.length) return;
      var hostId = ids[0]; ids = vivos;
      if (vivos.indexOf(hostId) < 0 && vivos[0] === ME.id) soyHost = true;
      reps = { a: repDe("a", ta), r: repDe("r", tr) }; pintaMar(); pintaTurno(); pinta();
    };
    return {
      jugar: function(){
        if (empezado) return; empezado = true;
        if (soyHost) { if (ch) ch.send("k", { k: 0, a: 0, r: 0, ids: ids }); mostrar(0, 0, 0); }
        else if (cola.length) { var d = cola.pop(); mostrar(d.k, d.a, d.r); }
      },
      tick: function(dt){
        if (!dt) return;
        latido += dt; if (ch && latido > 2) { latido = 0; ch.send("hb", {}); }
        revisa();
        if (sig >= 0) { sig -= dt; if (sig < 0 && soyHost) siguiente(); }
        if (!reto || hecho) return;
        t += dt; reloj.style.transform = "scaleX(" + Math.max(0, 1 - t / T).toFixed(3) + ")";
        if (soyHost) {
          ["a", "r"].forEach(function(e){ var b = bots[e]; if (b && !resp[e] && t >= b.t) registra(e, b.ok, t, b.ok ? reto.ops.findIndex(function(o){ return o.ok; }) : reto.ops.findIndex(function(o){ return !o.ok; })); });
          if (pend >= 0) { pend -= dt; if (pend < 0) resuelve(); }
          if (t >= T + .3) resuelve(null);
        }
      },
      tecla: function(e){ if (/^[1-4]$/.test(e.key)) { e.preventDefault(); toca(+e.key - 1); } },
      destruye: function(){ window.removeEventListener("resize", coloca); if (ch) { ch.send("bye", {}); ch.cierra(); ch = null; } },
      depura: function(){ return { k: k, host: soyHost, mio: mio, reps: reps, soyRep: soyRep(), partido: partido, ids: ids, eq: EQ, hecho: hecho, ops: reto ? reto.ops.map(function(o){ return o.t + (o.ok ? "*" : ""); }) : [] }; }
    };
  }
  var cabezaEquipos = function(){
    var p = partido, gana = p.a === p.r ? null : p.a > p.r ? "a" : "r";
    var nR = p.solo ? "Manzana" : "Rojo", tx = !gana ? "¡Empate entre los equipos!" : "¡Ganó el Equipo " + (gana === "r" ? nR : EQN[gana]) + "!";
    return '<div class="wb-res tc2-res"><p>' + esc(tx) + '</p><div><span class="a"><small>Azul' + (p.mio === "a" ? " · tú" : "") + "</small><b>" + p.a + '</b></span><em>VS</em><span class="r"><small>' + nR + (p.mio === "r" ? " · tú" : "") + "</small><b>" + p.r + "</b></span></div></div>";
  };

  /* ---------------- el canal cambia de manejadores al pasar de la sala a la partida ---------------- */
  var _canal = canal;
  canal = function(nombre, meta, on){ var c = _canal(nombre, meta, on); c.__on = on; return c; };

  /* ---------------- la sala va antes de la partida ---------------- */
  G.sesion = function(el, alc, juego, acciones, opc){
    if (juego && (juego.id === "wb" || juego.id === "tc") && !(opc && opc.enLinea)) {
      var proxy = { real: null, alCerrar: null };
      var out = { destruye: function(){ if (proxy.alCerrar) proxy.alCerrar(); if (proxy.real) proxy.real.destruye(); }, get s(){ return proxy.real && proxy.real.s; } };
      el.classList.remove("plxg-juego");
      (juego.id === "wb" ? lobbyWB : lobbyTC)(el, alc, juego, acciones, opc || {}, proxy);
      return out;
    }
    el.__net = null;
    return _sesion.apply(this, arguments);
  };
  /* el Mystery Challenge y la Aventura no usan estos dos motores (necesitan otra persona) */

  G.registrar({ id: "wb", nombre: "Word Battle", verbo: "Duelo en línea en tiempo real", familia: "Duelo", color: "#EC4899", orden: 58, vocab: true, sinFantasma: true, sinReloj: true, oro: false,
    retos: function(alc){ var n = G.nivel(alc.track); return alc.tema ? G.retosVocab(alc.tema, n, { max: 22 }) : G.retos(alc.lecciones, n, { max: 22 }); },
    apto: function(r){ return r.tipo === "uno" && r.malas && r.malas.length >= 1; },
    deco: function(){ return '<svg viewBox="0 0 72 56" aria-hidden="true"><circle cx="36" cy="28" r="24" fill="#EC4899" opacity=".25"/><circle cx="36" cy="28" r="18" fill="#EC4899"/><text x="36" y="36" text-anchor="middle" font-size="22">⚔️</text></svg>'; },
    aviso: function(){ return "En línea: cada jugador en su teléfono. Busca un rival de tu nivel o invita a un amigo con un código."; },
    reglas: function(){ return ["90 segundos de duelo, cada uno en su teléfono.", "Los dos ven el mismo reto con las mismas opciones: gana el punto quien toca primero la correcta.", "Quien se equivoca queda fuera de ese reto.", "Si tu rival se desconecta, sigue Manzana. Sin internet, puedes jugar contra Manzana."]; },
    opciones: function(){ return { vidas: 3, oro: false, cabeza: cabezaDuelo, titulo: function(){ return duelo.yo > duelo.el ? "¡Ganaste el duelo!" : duelo.yo === duelo.el ? "¡Empate!" : "¡Revancha!"; },
      estrellas: function(){ return duelo.yo > duelo.el ? (duelo.yo >= 2 * Math.max(1, duelo.el) ? 3 : 2) : duelo.yo === duelo.el && duelo.yo ? 1 : 0; } }; },
    montar: function(zona, s){ return motorDuelo(zona, s); } });
  G.registrar({ id: "tc", nombre: "Team Challenge", verbo: "Equipo Azul contra Equipo Rojo", familia: "Equipo", color: "#22C55E", orden: 60, vocab: true, sinFantasma: true, sinReloj: true, oro: false,
    retos: function(alc){ var n = G.nivel(alc.track); return alc.tema ? G.retosVocab(alc.tema, n, { max: 24 }) : G.retos(alc.lecciones, n, { max: 24 }); },
    apto: function(r){ return r.tipo === "uno" && r.malas && r.malas.length >= 1; },
    deco: function(){ return '<svg viewBox="0 0 72 56" aria-hidden="true"><circle cx="24" cy="28" r="18" fill="#3B82F6"/><circle cx="48" cy="28" r="18" fill="#EF4444" opacity=".9"/><text x="36" y="35" text-anchor="middle" font-size="18" fill="#fff" font-weight="800">VS</text></svg>'; },
    aviso: function(){ return "En línea: dos equipos de estudiantes, cada uno en su teléfono. Una persona crea la sala y comparte el código."; },
    reglas: function(){ return ["Equipo Azul contra Equipo Rojo durante 120 segundos, cada uno en su teléfono.", "En cada reto responde una persona por equipo, y el turno va rotando para que juegue todo el equipo.", "Gana el punto el equipo que acierta primero. Si te equivocas, tu equipo queda fuera de ese reto.", "Los demás animan con reacciones de Manzana. Sin internet, juegas contra el Equipo Manzana."]; },
    opciones: function(){ return { seg: 120, vidas: 3, oro: false, cabeza: cabezaEquipos,
      titulo: function(){ var p = partido; return p.a === p.r ? "¡Empate!" : (p.a > p.r ? "a" : "r") === p.mio ? "¡Ganó tu equipo!" : "¡Revancha en equipo!"; },
      estrellas: function(){ var p = partido, yo = p[p.mio], otro = p[p.mio === "a" ? "r" : "a"]; return yo > otro ? (yo - otro >= 3 ? 3 : 2) : yo === otro && yo ? 1 : 0; } }; },
    montar: function(zona, s){ return motorEquipos(zona, s); } });

  var st = document.createElement("style"); st.id = "plx58";
  st.textContent = `
  .net{text-align:center}
  .net-top{display:flex;align-items:center;gap:12px;margin-bottom:18px;text-align:left}
  .net-top .plxg-k{margin:0}
  .net .plxg-h{color:var(--nc);text-shadow:0 6px 0 rgba(0,0,0,.35);animation:netTitulo .6s cubic-bezier(.2,1.4,.4,1) both}
  @keyframes netTitulo{from{transform:scale(.6) rotate(-6deg);opacity:0}}
  .net-sub{margin:10px auto 16px;max-width:420px;color:#C9D6F5}
  .net-yo{display:inline-flex;align-items:center;gap:12px;margin:0 auto 18px;padding:10px 18px 10px 10px;border-radius:999px;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 2px rgba(255,255,255,.12);text-align:left}
  .net-yo small{display:block;font:700 11px/1 Inter,system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#A6B6E0}
  .net-yo b{font:800 17px/1.2 Poppins,system-ui,sans-serif;color:#fff}
  .net-gato{display:inline-grid;place-items:center;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 50% 35%,#fff,#DCE6FF);overflow:hidden;flex:none}
  .net-gato svg{width:100%;height:100%}
  .net-bts{display:grid;gap:12px;max-width:420px;margin:0 auto}
  .net-b{justify-content:flex-start;gap:12px;text-transform:none}
  .net-b span{font-size:22px}
  .net-aviso{margin:0 auto 14px;max-width:420px;padding:10px 14px;border-radius:12px;background:rgba(255,210,0,.12);color:#FFE58A;font-weight:600}
  .net-radar{position:relative;width:180px;height:180px;margin:26px auto 16px;display:grid;place-items:center}
  .net-radar i{position:absolute;inset:0;border-radius:50%;border:3px solid var(--nc);opacity:0;animation:netOnda 2.4s ease-out infinite}
  .net-radar i:nth-child(2){animation-delay:.8s}.net-radar i:nth-child(3){animation-delay:1.6s}
  .net-radar .net-gato{width:96px;height:96px;box-shadow:0 0 0 6px var(--nc),0 0 40px var(--nc)}
  @keyframes netOnda{from{transform:scale(.4);opacity:.9}to{transform:scale(1.25);opacity:0}}
  .net-busca{font:700 16px/1.4 Poppins,system-ui,sans-serif;color:#fff;margin:0 0 16px}
  .net-codigo{margin:6px 0 16px;font:900 64px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.2em;color:#FFD200;text-shadow:0 6px 0 rgba(0,0,0,.4)}
  .net-in{display:block;width:220px;margin:10px auto 18px;padding:14px;border-radius:16px;border:0;text-align:center;font:900 40px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.3em;text-transform:uppercase;background:#fff;color:#0B2D74}
  .net-lista{list-style:none;margin:0 auto 18px;padding:0;display:grid;gap:10px;max-width:420px}
  .net-lista li{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:18px;background:rgba(255,255,255,.08);text-align:left;animation:netTitulo .4s ease-out both}
  .net-lista b{flex:1;font:800 16px/1.2 Poppins,system-ui,sans-serif;color:#fff}
  .net-lista em{font-style:normal;font:800 11px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:99px;background:var(--nc);color:#081F55}
  .net-vs{position:absolute;inset:0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:20px;background:linear-gradient(115deg,#1D4ED8 0 49.6%,#fff 49.6% 50.4%,var(--nc) 50.4%)}
  .net-vs>div{display:grid;justify-items:center;gap:10px}
  .net-vs .net-gato{width:120px;height:120px;box-shadow:0 0 0 6px #fff,0 20px 40px rgba(0,0,0,.5)}
  .net-vs b{font:900 20px/1.2 Poppins,system-ui,sans-serif;color:#fff;text-shadow:0 3px 0 rgba(0,0,0,.35)}
  .net-vs em{font:900 64px/1 Poppins,system-ui,sans-serif;font-style:italic;color:#FFD200;-webkit-text-stroke:3px #081F55;animation:netVs .6s cubic-bezier(.2,1.6,.4,1) .3s both}
  .net-vs-l{animation:netIzq .5s cubic-bezier(.2,1.3,.4,1) both}.net-vs-r{animation:netDer .5s cubic-bezier(.2,1.3,.4,1) both}
  @keyframes netIzq{from{transform:translateX(-120%)}}@keyframes netDer{from{transform:translateX(120%)}}
  @keyframes netVs{from{transform:scale(4) rotate(-20deg);opacity:0}}
  .wbn{gap:10px}
  .wbn-rival,.wbn-yo{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:18px;background:rgba(236,72,153,.14);box-shadow:inset 0 0 0 2px rgba(236,72,153,.4);flex:none}
  .wbn-yo{background:rgba(96,165,250,.14);box-shadow:inset 0 0 0 2px rgba(96,165,250,.45)}
  .wbn-rival .net-gato,.wbn-yo .net-gato{width:40px;height:40px}
  .wbn-rn{display:grid;flex:1;text-align:left}.wbn-rn small{font:700 10px/1 Inter,system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#A6B6E0}.wbn-rn b{font:800 15px/1.2 Poppins,system-ui,sans-serif;color:#fff}
  .wbn-st{font:700 12px/1 Inter,system-ui,sans-serif;color:#F9A8D4}
  .wbn-pr,.wbn-py{font:900 30px/1 Poppins,system-ui,sans-serif;color:#F472B6;min-width:36px;text-align:right}.wbn-py{color:#60A5FA}
  .wbn-q{flex:1 1 auto;min-height:0;display:grid;align-content:center;gap:8px;text-align:center;padding:14px;border-radius:20px;background:rgba(255,255,255,.06)}
  .wbn-q small{font:700 13px/1.35 Inter,system-ui,sans-serif;color:#C9D6F5}
  .wbn-q b{font:800 clamp(18px,5vw,24px)/1.3 Poppins,system-ui,sans-serif;color:#fff}
  .wbn-q .hueco{color:#FFD200}
  .wbn-q .x-oir{justify-self:center}
  .wbn.gano .wbn-yo{box-shadow:inset 0 0 0 3px #6BE58E,0 0 30px rgba(107,229,142,.6)}
  .wbn.perdio .wbn-rival{box-shadow:inset 0 0 0 3px #F472B6,0 0 30px rgba(244,114,182,.6)}
  .wbn-res{min-height:20px;font-weight:800}
  .tc2{gap:10px}
  .tc2-mar{display:grid;grid-template-columns:1fr auto 1fr;align-items:stretch;gap:8px;flex:none}
  .tc2-mar > em{align-self:center;font:900 18px/1 Poppins,system-ui,sans-serif;font-style:italic;color:#FFD200}
  .tc2-eq{position:relative;display:grid;justify-items:center;gap:4px;padding:8px 6px;border-radius:18px;background:rgba(59,130,246,.16);box-shadow:inset 0 0 0 2px rgba(59,130,246,.45);transition:opacity .2s}
  .tc2-eq.r{background:rgba(239,68,68,.16);box-shadow:inset 0 0 0 2px rgba(239,68,68,.45)}
  .tc2-eq.mio{box-shadow:inset 0 0 0 3px #3B82F6,0 0 22px rgba(59,130,246,.35)}.tc2-eq.r.mio{box-shadow:inset 0 0 0 3px #EF4444,0 0 22px rgba(239,68,68,.35)}
  .tc2-eq small{font:800 11px/1 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#C9D6F5}
  .tc2-p{font:900 34px/1 Poppins,system-ui,sans-serif;color:#60A5FA}.tc2-eq.r .tc2-p{color:#F87171}
  .tc2-rep{display:flex;align-items:center;gap:6px;min-height:30px;max-width:100%}
  .tc2-rep .net-gato{width:28px;height:28px}.tc2-rep b{font:700 12px/1.1 Inter,system-ui,sans-serif;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .tc2-eq.fuera{opacity:.45}
  .tc2-turno{display:grid;gap:2px;text-align:center;flex:none}
  .tc2-turno b{font:900 18px/1.2 Poppins,system-ui,sans-serif;color:#FFD200}.tc2-turno span{font:600 12px/1.3 Inter,system-ui,sans-serif;color:#C9D6F5}
  .tc2.mio .tc2-turno b{animation:tcnTurno .8s ease-in-out infinite alternate}
  .tc2:not(.mio) .x-ops{opacity:.55}
  .tc2.gano .tc2-eq.mio{transform:scale(1.04)}
  .tc2-sala{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:520px;margin:0 auto 16px;text-align:left}
  .tc2-col{padding:10px;border-radius:18px;background:rgba(59,130,246,.14);box-shadow:inset 0 0 0 2px rgba(59,130,246,.45)}
  .tc2-col.r{background:rgba(239,68,68,.14);box-shadow:inset 0 0 0 2px rgba(239,68,68,.45)}
  .tc2-col h3{margin:0 0 8px;font:900 15px/1.2 Poppins,system-ui,sans-serif;color:#60A5FA;display:flex;justify-content:space-between}.tc2-col.r h3{color:#F87171}
  .tc2-col h3 small{font:800 13px/1 Inter,system-ui,sans-serif;color:#fff;opacity:.8}
  .tc2-col ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}
  .tc2-col li{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:12px;background:rgba(255,255,255,.07);flex-wrap:wrap}
  .tc2-col li .net-gato{width:32px;height:32px}
  .tc2-col li b{flex:1;min-width:0;font:800 13px/1.2 Poppins,system-ui,sans-serif;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .tc2-col li b{flex:1 1 70px}
  .tc2-emo button{width:48px;height:48px;padding:4px;box-sizing:border-box}.tc2-emo img{width:100%;height:100%;object-fit:contain}
  .tc2-bur{width:44px;height:44px;object-fit:contain;top:-30px}
  .tc2-col li em{font-style:normal;font:800 9px/1 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:3px 6px;border-radius:99px;background:#FFD200;color:#081F55}
  .tc2-col li.vacio{justify-content:center;color:#A6B6E0;font:600 12px/1.2 Inter,system-ui,sans-serif;background:none;box-shadow:inset 0 0 0 1.5px dashed rgba(255,255,255,.2)}
  .tc2-res .a b{color:#60A5FA}.tc2-res .r b{color:#F87171}
  .tcn{gap:10px;--tc:#FFD200}
  .tcn-eq{list-style:none;margin:0;padding:0;display:flex;justify-content:center;gap:10px;flex:none}
  .tcn-eq li{position:relative;display:grid;justify-items:center;gap:4px;padding:6px 8px;border-radius:16px;opacity:.6;transition:transform .2s,opacity .2s}
  .tcn-eq li.cur{opacity:1;transform:translateY(-4px) scale(1.08);background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 2px var(--c)}
  .tcn-eq .net-gato{width:44px;height:44px;box-shadow:0 0 0 3px var(--c)}
  .tcn-eq b{font:800 12px/1 Poppins,system-ui,sans-serif;color:#fff}
  .tcn-bur{position:absolute;top:-18px;left:50%;font-size:28px;animation:tcnBur 1.4s ease-out forwards;pointer-events:none}
  @keyframes tcnBur{from{transform:translate(-50%,10px) scale(.4);opacity:0}20%{transform:translate(-50%,0) scale(1.2);opacity:1}to{transform:translate(-50%,-40px) scale(1);opacity:0}}
  .tcn-turno{display:grid;gap:2px;text-align:center;flex:none}
  .tcn-turno b{font:900 20px/1.2 Poppins,system-ui,sans-serif;color:var(--tc)}.tcn-turno span{font:600 12px/1.3 Inter,system-ui,sans-serif;color:#C9D6F5}
  .tcn.mio .tcn-turno b{animation:tcnTurno .8s ease-in-out infinite alternate}
  @keyframes tcnTurno{to{transform:scale(1.12)}}
  .tcn:not(.mio) .x-ops{opacity:.55}
  .tcn .x-op{box-shadow:0 4px 0 var(--tc),0 12px 24px -12px rgba(0,0,0,.7)}
  .tcn-emo{display:flex;justify-content:center;gap:8px;flex:none}
  .tcn-emo button{all:unset;cursor:pointer;width:44px;height:44px;border-radius:14px;display:grid;place-items:center;font-size:22px;background:rgba(255,255,255,.1)}
  .tcn-emo button:active{transform:scale(.9)}
  @media (prefers-reduced-motion:reduce){.net .plxg-h,.net-radar i,.net-vs-l,.net-vs-r,.net-vs em,.tcn-bur,.tcn.mio .tcn-turno b{animation:none!important}}
  `;
  document.head.appendChild(st);
})();
