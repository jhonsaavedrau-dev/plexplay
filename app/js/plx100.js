/* PLEX PLAY 3.24.0 — Inicio de escritorio igual a la maqueta aprobada (distribución tipo Coddy)
   - Centro: tarjeta de la lección actual con tramos de progreso y el recorrido de la unidad en vertical (nodos 3D:
     azul hecho, oro el siguiente y el cofre de la meta), con Manzana al lado.
   - Derecha: fila de racha / monedas / XP, tarjeta de Nivel, Tarjeta de hoy, Juego del día, Ranking semanal y
     Misiones diarias (la tarjeta real de misiones se muda aquí).
   - Riel: Recorrido, Práctica, Juegos, Profesores · 1 vs 1 · Misiones, Ranking, Tienda · Buscar y Perfil abajo.
   Todos los botones reusan los manejadores de la app (data-open, data-view, data-rl). Solo desde 1024 px. */
(function(){
  "use strict";
  if (typeof render !== "function") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var ancho = function(){ return window.innerWidth >= 1024 && document.documentElement.classList.contains("rl-on"); };
  var hoyN = function(){ var d = new Date(); return d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); };
  var DATOS = [
    ["1635", "El cardenal Richelieu fundó la Académie française para cuidar el idioma."],
    ["1889", "La torre Eiffel se construyó para la Exposición Universal; iba a desmontarse a los 20 años."],
    ["321 M", "Unos 321 millones de personas hablan francés en los cinco continentes."],
    ["1539", "La ordenanza de Villers-Cotterêts hizo del francés la lengua oficial de los documentos."],
    ["29", "El francés es lengua oficial en 29 países, de Canadá a Senegal."],
    ["1792", "«La Marseillaise» nació en Estrasburgo como canto de guerra del ejército del Rin."],
    ["45 %", "Cerca del 45 % del vocabulario inglés viene del francés."],
    ["1066", "Tras la conquista normanda, la corte inglesa habló francés durante casi 300 años."],
    ["2050", "Se calcula que en 2050 el francés será una de las lenguas más habladas, gracias a África."],
    ["1900", "El metro de París abrió en 1900 con la línea 1, para la Exposición Universal."]
  ];
  var ICN = function(n){ return '<img src="img/ic2/' + n + '.webp" alt="" width="26" height="26">'; };

  var lado = function(){
    var S0 = window.S || {}, G = gEnsure(), xp = S0.xp || 0, lv = 1, a = 0, b = 1;
    try { lv = catLevel(xp); a = xpFor(lv); b = xpFor(lv + 1); } catch (e) {}
    var p = lv >= 60 ? 100 : Math.max(2, Math.min(100, Math.round((xp - a) / Math.max(1, b - a) * 100)));
    var rk = 0; try { rk = streak(); } catch (e) {}
    var mon = (document.querySelector("#topbar .px-coin") || {}).textContent || "0";
    var gato = ""; try { gato = catSVG(G.cat, { mood: "happy" }); } catch (e) {}
    var dato = DATOS[hoyN() % DATOS.length];
    var js = []; try { js = PLXG.listaJuegos(); } catch (e) {}
    var dia = js.length ? js[hoyN() % js.length] : null;
    return '<div class="cz-stats"><span>' + ICN("bandera") + '</span><span title="Racha">' + rk + " " + ICN("llama") + '</span><span class="o" title="Monedas">' + esc(mon.replace(/\D/g, "") || 0) + " " + ICN("estrella") + '</span><span class="a" title="XP">' + xp.toLocaleString("es-CO") + " " + ICN("corona") + "</span></div>" +
      '<button class="cz-c cz-lv" data-view="perfil"><span class="cz-gato">' + gato + "</span><span><b>Nivel " + lv + '</b><span class="cz-row"><u><s style="width:' + p + '%"></s></u><small>' + (lv >= 60 ? "Nivel máximo" : "Faltan " + Math.max(0, b - xp) + " XP") + "</small></span></span></button>" +
      '<div class="cz-c"><h3>Tarjeta de hoy · Francia</h3><p><b class="cz-y">' + esc(dato[0]) + "</b> · " + esc(dato[1]) + "</p></div>" +
      (dia ? '<div class="cz-c"><h3>Juego del día</h3><p class="cz-fx"><span><b>' + esc(dia.nombre) + "</b>: " + esc(dia.verbo || dia.familia || "") + '</span><img src="img/mz3/corre.webp" alt="" width="70"></p><button class="cz-btn" data-cz-juego="' + esc(dia.id) + '">Jugar ahora</button></div>' : "") +
      '<div class="cz-c"><h3>Ranking semanal <a data-rl="clasif" role="button" tabindex="0">Ver</a></h3><p class="cz-fx"><img src="img/ic2/trofeo.webp" alt="" width="52">¡Gana XP en lecciones y juegos para subir en el ranking de esta semana!</p></div>' +
      '<div class="cz-mis"></div>';
  };

  var centro = function(){
    var nodos = [].slice.call(document.querySelectorAll(".ghome .mp-n"));
    if (!nodos.length) return "";
    var tit = [].map.call(document.querySelectorAll(".ghome .mp-tit *"), function(x){ return x.children.length ? "" : x.textContent.trim(); }).filter(Boolean);
    var lec = nodos.filter(function(n){ return n.querySelector("[data-open]"); });
    var hechas = lec.filter(function(n){ return !/\b(sig|pend)\b/.test(n.className); }).length;
    var sig = document.querySelector(".ghome .mp-go[data-open]"), idSig = sig ? sig.getAttribute("data-open") : "";
    var i = Math.min(lec.length, hechas + 1);
    var html = '<div class="cz-c cz-top"><small><b>' + esc(tit[0] || "Temario") + "</b> › Lección " + i + "</small><h1>" + esc(tit[1] || "Tu recorrido") + '</h1><button class="cz-k" data-view="lecciones">Ver curso</button><div class="cz-bars">' +
      lec.map(function(n, k){ return "<i" + (k < hechas ? ' class="f"' : "") + "></i>"; }).join("") + "<span>" + hechas + " / " + lec.length + "</span></div></div>";
    html += '<div class="cz-sec">' + esc(tit[1] || "Unidad") + '</div><div class="cz-map">';
    nodos.forEach(function(n, k){
      var b = n.querySelector("[data-open]"), id = b ? b.getAttribute("data-open") : "", cofre = /cofre/.test(n.className);
      var hecho = b && !/\b(sig|pend)\b/.test(n.className), act = /\bsig\b/.test(n.className);
      var cls = cofre ? "oro" : hecho ? "azul" : act ? "oro act" : "vidrio";
      var ic = cofre ? '<img src="img/ic2/trofeo.webp" alt="" width="44">' : hecho ? '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>' : act ? '<img src="img/ic2/estrella.webp" alt="" width="44">' : '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
      var lab = [].map.call(n.querySelectorAll("small,b,span,em,i,p,div"), function(x){ return x.children.length ? "" : x.textContent.trim(); }).filter(Boolean).filter(function(v, j, a){ return a.indexOf(v) === j; }).join(" · ");
      html += '<div class="cz-n ' + (k % 2 ? "d" : "i") + '"><button class="cz-nodo ' + cls + '"' + (id ? ' data-open="' + esc(id) + '"' : ' data-view="lecciones"') + ' aria-label="' + esc(lab) + '">' + ic + "</button>" +
        (act ? '<img class="cz-mz" src="img/mz3/senala-arriba.webp" alt="">' : "") + "<span>" + esc(lab) + "</span></div>";
    });
    html += "</div>";
    if (idSig) html += '<div class="cz-go"><button class="cz-btn" data-open="' + esc(idSig) + '">Continuar · Lección ' + i + '</button><button class="cz-k" data-view="lecciones">Ver todo el curso</button></div>';
    return html;
  };

  var pinta = function(){
    var v = document.getElementById("view"), on = ancho() && typeof view !== "undefined" && view === "parcours" && document.querySelector(".ghome .mp-n");
    document.documentElement.classList.toggle("cz-on", !!on);
    var z = document.getElementById("cz");
    if (!on) { if (z) z.remove(); return; }
    if (!z) { z = document.createElement("div"); z.id = "cz"; v.appendChild(z); }
    z.innerHTML = '<section class="cz-centro">' + centro() + '</section><aside class="cz-lado">' + lado() + "</aside>";
    var mis = document.querySelector(".ghome .plx-miss"), hueco = z.querySelector(".cz-mis");
    if (mis && hueco) hueco.appendChild(mis.cloneNode(true));
  };
  var rO = render; render = function(){ var r = rO.apply(this, arguments); try { pinta(); } catch (e) { console.warn("plx100", e); } return r; };
  window.addEventListener("resize", function(){ try { pinta(); } catch (e) {} });
  setTimeout(function(){ try { pinta(); } catch (e) {} }, 300);

  /* Juego del día: abre Jugar y toca el juego */
  window.addEventListener("click", function(e){
    var j = e.target.closest && e.target.closest('#px-rail [data-view="retos"]');
    if (j) { setTimeout(function(){ var t = document.querySelector('.jx [data-jx-tab="juegos"]'); if (t && t.getAttribute("aria-selected") !== "true") t.click(); }, 500); return; }
    var b = e.target.closest && e.target.closest("[data-cz-juego],[data-cz-rl]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    if (b.hasAttribute("data-cz-juego")) { var id = b.getAttribute("data-cz-juego"); go("retos"); setTimeout(function(){ var g = document.querySelector('.jx [data-jx-tab="juegos"]'); if (g) g.click(); setTimeout(function(){ var t = document.querySelector('.jx [data-jx-juego="' + id + '"]'); if (t) t.click(); }, 200); }, 250); return; }
    var k = b.getAttribute("data-cz-rl");
    if (k === "practica" || k === "aprende") { go("retos"); setTimeout(function(){ var t = document.querySelector('.jx [data-jx-tab="' + k + '"]'); if (t) t.click(); }, 300); }
    else if (k === "misiones") { go("parcours"); setTimeout(function(){ var m = document.querySelector("#cz .plx-miss"); if (m) m.scrollIntoView({ behavior: "smooth", block: "center" }); }, 200); }
    else if (k === "buscar") go("lecciones");
  }, true);

  /* riel: nombres y secciones como en la maqueta */
  var riel = function(){
    var nav = document.querySelector("#px-rail .rl-nav"); if (!nav || nav.dataset.cz) return; nav.dataset.cz = "1";
    var b = function(sel){ return nav.querySelector(sel); }, mk = function(k, txt, ic){ var x = document.createElement("button"); x.type = "button"; x.className = "rl-b"; x.setAttribute("data-cz-rl", k); x.setAttribute("data-i99", "1"); x.innerHTML = '<img class="rl-ic" src="img/ic2/' + ic + '.webp" alt="" width="34" height="34"><span>' + txt + "</span>"; return x; };
    var ini = b('[data-view="parcours"]'), jue = b('[data-view="retos"]'), duel = b('[data-rl="duelos"]'), cla = b('[data-rl="clasif"]'), tie = b('[data-view="tienda"]'), per = b('[data-view="perfil"]');
    if (ini) ini.querySelector("span").textContent = "Recorrido";
    if (jue) { jue.querySelector("span").textContent = "Juegos"; nav.insertBefore(mk("practica", "Práctica", "lapiz"), jue); jue.insertAdjacentElement("afterend", mk("aprende", "Profesores", "libros")); }
    if (cla) { cla.querySelector("span").textContent = "Ranking"; nav.insertBefore(mk("misiones", "Misiones", "bandera"), cla); }
    var pie = document.createElement("div"); pie.className = "cz-pie";
    var bus = mk("buscar", "Buscar", "pregunta"); bus.insertAdjacentHTML("beforeend", "<kbd>Ctrl K</kbd>"); pie.appendChild(bus);
    if (per) { per.querySelector("span").textContent = "Perfil"; pie.appendChild(per); }
    var yo = document.querySelector("#px-rail .rl-yo"); (yo || nav).insertAdjacentElement(yo ? "beforebegin" : "afterend", pie);
    if (duel && duel.previousElementSibling && duel.previousElementSibling.classList.contains("rl-h")) {}
  };
  new MutationObserver(riel).observe(document.body, { childList: true, subtree: true });
  document.addEventListener("keydown", function(e){ if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K") && ancho()) { e.preventDefault(); go("lecciones"); } });

  var G3 = "background:var(--cz-glass);border-radius:22px;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 0 0 1px rgba(255,255,255,.14),0 24px 50px -20px rgba(0,8,40,.7),0 0 30px -10px rgba(47,107,255,.3);-webkit-backdrop-filter:blur(22px) saturate(150%);backdrop-filter:blur(22px) saturate(150%)";
  var css = document.createElement("style"); css.id = "plx100";
  css.textContent = [
    "@media (min-width:1024px){",
    "html.cz-on .ghome{display:none!important}html.cz-on body header#topbar.top{display:none!important}",
    "#cz{display:grid;grid-template-columns:minmax(0,600px) 360px;gap:64px;justify-content:center;padding:22px 0 60px;color:var(--cz-ink);font-family:Barlow,Inter,system-ui,sans-serif}",
    ".cz-c{" + G3 + ";position:relative;padding:16px 18px}",
    ".cz-top small{font-size:12px;color:var(--cz-mute)}.cz-top small b{color:var(--cz-oro)}.cz-top h1{font:700 22px/1.2 Barlow,sans-serif;margin:4px 0 14px;color:var(--cz-ink)}",
    ".cz-k{all:unset;cursor:pointer;font-size:12px;padding:5px 10px;border-radius:10px;border:1px solid var(--cz-oro);color:var(--cz-oro)}.cz-top .cz-k{position:absolute;right:16px;top:14px}",
    ".cz-bars{display:flex;gap:6px;align-items:center}.cz-bars i{flex:1;height:7px;border-radius:4px;background:var(--cz-trk)}.cz-bars i.f{background:linear-gradient(90deg,#FFD200,#FFB000);box-shadow:0 0 10px rgba(255,210,0,.6)}.cz-bars span{font-size:13px;color:var(--cz-oro);font-weight:700;margin-left:8px}",
    ".cz-sec{display:flex;align-items:center;gap:16px;font-size:20px;color:var(--cz-ink2);margin:34px 0 26px}.cz-sec::before,.cz-sec::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent)}",
    ".cz-map{display:flex;flex-direction:column;align-items:center;gap:34px;position:relative}",
    ".cz-n{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px}.cz-n.d{transform:translateX(60px)}.cz-n.i{transform:translateX(-10px)}",
    ".cz-n > span{font-size:12px;color:var(--cz-mute);max-width:220px;text-align:center}",
    ".cz-n + .cz-n::before{content:'';position:absolute;top:-34px;left:50%;width:4px;height:34px;margin-left:-2px;border-radius:2px;background:#BFD2FF;box-shadow:0 0 10px #6E97FF;transform:skewX(-35deg)}.cz-n.i + .cz-n.d::before{transform:skewX(35deg)}",
    ".cz-nodo{all:unset;cursor:pointer;width:78px;height:78px;border-radius:26px;display:grid;place-items:center;transition:transform .15s}.cz-nodo:hover{transform:translateY(-3px)}.cz-nodo:active{transform:translateY(3px)}.cz-nodo:focus-visible{outline:3px solid #FFD200;outline-offset:4px}",
    ".cz-nodo svg{width:34px;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}",
    ".cz-nodo.azul{background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.55),transparent 40%),linear-gradient(160deg,#4F86FF,#1E4FD6);box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -6px 0 #0B2D74,0 10px 0 #0A2463,0 18px 30px rgba(0,0,0,.5),0 0 30px rgba(47,107,255,.7)}",
    ".cz-nodo.oro{background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.6),transparent 40%),linear-gradient(160deg,#FFE15A,#F0B400);box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -6px 0 #B38600,0 10px 0 #8F6B00,0 18px 30px rgba(0,0,0,.5),0 0 34px rgba(255,210,0,.65)}",
    ".cz-nodo.act{animation:czp 2.4s ease-in-out infinite}@keyframes czp{50%{box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -6px 0 #B38600,0 10px 0 #8F6B00,0 18px 30px rgba(0,0,0,.5),0 0 56px rgba(255,210,0,.95)}}",
    ".cz-nodo.vidrio{background:linear-gradient(160deg,rgba(255,255,255,.2),rgba(255,255,255,.06));box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 0 0 1px rgba(255,255,255,.2),0 10px 0 rgba(0,0,0,.25)}.cz-nodo.vidrio svg{stroke:var(--cz-ink2);stroke-width:2.4}",
    ".cz-mz{position:absolute;left:calc(50% + 60px);top:-34px;width:120px;filter:drop-shadow(0 10px 20px rgba(0,0,0,.5));pointer-events:none}",
    ".cz-go{display:flex;gap:14px;align-items:center;justify-content:center;margin-top:34px}",
    ".cz-btn{all:unset;box-sizing:border-box;cursor:pointer;display:block;text-align:center;margin-top:14px;padding:13px 22px;border-radius:14px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#0B1F5C;background:linear-gradient(180deg,#FFE766,#FFC400);box-shadow:inset 0 1px 0 #fff,0 5px 0 #B38600,0 0 24px rgba(255,210,0,.5)}.cz-btn:active{transform:translateY(3px);box-shadow:inset 0 1px 0 #fff,0 2px 0 #B38600}.cz-go .cz-btn{margin:0}",
    ".cz-lado{display:flex;flex-direction:column;gap:16px}",
    ".cz-stats{display:flex;justify-content:space-between;align-items:center;font-size:18px;font-weight:700;padding:4px 14px}.cz-stats span{display:flex;align-items:center;gap:6px}.cz-stats .o{color:var(--cz-oro)}.cz-stats .a{color:#8FB4FF}",
    ".cz-lv{all:unset;cursor:pointer;" + G3 + ";display:flex;gap:12px;align-items:center;padding:14px 18px}.cz-gato{width:52px;height:52px;flex:none}.cz-gato svg{width:100%;height:100%}.cz-lv > span:last-child{flex:1}.cz-row{display:flex;align-items:center;gap:10px;margin-top:6px}.cz-row u{flex:1;height:8px;border-radius:5px;background:var(--cz-trk);overflow:hidden}.cz-row s{display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#2F6BFF,#8FB4FF);box-shadow:0 0 10px #2F6BFF}.cz-row small{font-size:13px;color:var(--cz-mute)}",
    ".cz-c h3{font:700 19px/1.2 Barlow,sans-serif;display:flex;justify-content:space-between;align-items:center;color:var(--cz-ink);margin:0}.cz-c h3 a{font-size:15px;color:var(--cz-oro);font-weight:500;cursor:pointer}.cz-c p{font-size:15px;color:var(--cz-ink2);margin:10px 0 0;line-height:1.4}.cz-y{color:var(--cz-oro)}.cz-fx{display:flex;gap:14px;align-items:center}",
    ".cz-mis > .gcard{" + G3 + ";padding:16px 18px!important;margin:0!important}",
    ".cz-pie{margin-top:auto;border-top:1px solid rgba(255,255,255,.14);padding-top:10px;display:flex;flex-direction:column;gap:6px}.cz-pie kbd{margin-left:auto;font:600 11px/1 Barlow,sans-serif;padding:3px 6px;border-radius:6px;background:rgba(255,255,255,.12)}",
    "html.rl-on #px-rail .rl-yo{display:none!important}",
    "}",
    "@media (prefers-reduced-motion:reduce){.cz-nodo.act{animation:none}.cz-nodo{transition:none}}"
  ].join("\n");
  document.head.appendChild(css);
})();
