/* PLEX PLAY 3.5.0 — Jugar rediseñado: Juegos, Practicar y Aprender
   Antes: tres pestañas con tarjetas de tamaños, iconos y estilos distintos; los 20 juegos escondidos detrás de una
   sola tarjeta «Arcade»; nada decía por dónde empezar.
   Ahora
   - Control segmentado con indicador que se desliza (y se recuerda la última sección).
   - Juegos: «Juego del día» destacado, los 20 juegos a la vista con su color e ilustración, filtros por tipo
     (Reflejos, Construir, Escucha, Voz…), y «Con otros» (PLEX 1V1, duelo y equipo en línea, ranking).
   - Practicar: «Para ti hoy» (sale de tu ruta: refuerzo de tu habilidad más baja y repaso del día) y las
     actividades en filas iguales, agrupadas en Repasa · Habilidades · Ponte a prueba.
   - Aprender: las secciones en mosaico con su color e icono, y acceso a las lecciones del curso.
   Cómo conserva todo: la vista original se sigue pintando (oculta) y cada tarjeta nueva reenvía el toque al botón
   original, así que cualquier función actual o futura de esa pantalla sigue funcionando igual. */
(function(){
  "use strict";
  if (typeof GV === "undefined") return;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var IC = function(n){ return "img/ic/" + n + ".webp"; };
  var lsG = function(k){ try { return localStorage.getItem(k); } catch (e) { return null; } };
  var lsS = function(k, v){ try { localStorage.setItem(k, v); } catch (e) {} };
  var TABS = [["juegos", "Juegos"], ["practica", "Practicar"], ["aprende", "Aprender"]];
  var tab = lsG("jx-tab") || "juegos"; if (!TABS.some(function(t){ return t[0] === tab; })) tab = "juegos";
  var filtro = "Todos";

  /* actividades: icono pintado, color y grupo */
  var ACT = [
    [/repaso del d/i, "reloj-arena", "#0EA5A4", "Repasa"], [/mis errores/i, "pregunta", "#E5484D", "Repasa"], [/gu[ií]a r[aá]pida/i, "libro", "#3B82F6", "Repasa"], [/diario/i, "pergamino", "#64748B", "Repasa"],
    [/pronunciaci/i, "microfono", "#F43F5E", "Habilidades"], [/dictado/i, "audifonos", "#3B82F6", "Habilidades"], [/acentos/i, "globo", "#8B5CF6", "Habilidades"], [/taller/i, "lapiz", "#8B5CF6", "Habilidades"],
    [/contrarreloj/i, "llama", "#FF7A45", "Ponte a prueba"], [/diagn[oó]stico|prueba de nivel/i, "birrete", "#1E4FD6", "Ponte a prueba"], [/examen/i, "trofeo", "#F59E0B", "Ponte a prueba"]
  ];
  var APR = [[/vocabulario/i, "libros", "#22C55E"], [/sonidos/i, "nota", "#F59E0B"], [/lecturas/i, "libro", "#0EA5A4"], [/expresi[oó]n oral/i, "microfono", "#F43F5E"], [/conversa/i, "globo", "#3B82F6"], [/simulacro/i, "birrete", "#8B5CF6"], [/mis palabras/i, "pergamino", "#64748B"]];
  var GRUPOS = { "Repasa": "Lo que ya viste, para que no se olvide", "Habilidades": "Oído, pronunciación y escritura", "Ponte a prueba": "Mide tu nivel" };
  var busca = function(lst, t){ for (var i = 0; i < lst.length; i++) if (lst[i][0].test(t)) return lst[i]; return null; };
  var tituloDe = function(el){ var b = el.querySelector(".rt b, b, strong, h3"); return (b ? b.textContent : el.textContent || "").replace(/\s+/g, " ").trim(); };
  /* los selectores se prueban en orden: con una lista, querySelector devuelve el primero del documento (puede ser el contenedor entero) */
  var subDe = function(el){ var sels = [".rt small", "small", "p"], s = null; for (var i = 0; i < sels.length && !s; i++) s = el.querySelector(sels[i]); return (s ? s.textContent : "").replace(/\s+/g, " ").trim(); };

  var juegoDelDia = function(js){ if (!js.length) return null; var d = new Date(), k = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); return js[k % js.length]; };
  var claro = function(hex, a){ return "color-mix(in srgb," + hex + " " + Math.round(a * 100) + "%,var(--v4-surface))"; };

  var px = [];   /* elementos originales a los que se reenvía el toque */
  var proxy = function(el){ px.push(el); return px.length - 1; };

  var construye = function(){
    var v = document.querySelector("#view .gretos"); if (!v) return;
    px = [];
    var orig = {
      arc: v.querySelector("[data-arcade]"), v1: v.querySelector("[data-v1]"),
      mini: [].slice.call(v.querySelectorAll(".jg-mini")), rc: [].slice.call(v.querySelectorAll(".rcard")), amf: [].slice.call(v.querySelectorAll(".amf"))
    };
    var G = window.PLXG, js = G && G.listaJuegos ? G.listaJuegos() : [];
    var fams = ["Todos"]; js.forEach(function(j){ if (fams.indexOf(j.familia) < 0) fams.push(j.familia); });
    var dia = juegoDelDia(js);

    /* ---- Juegos ---- */
    var hJ = "";
    if (dia) hJ += '<button class="jx-dia" data-jx-juego="' + esc(dia.id) + '" style="--c:' + dia.color + '"><span class="jx-dia-arte" aria-hidden="true">' + (dia.deco ? dia.deco() : "") + '</span><span class="jx-dia-tx"><small>Juego del día</small><b>' + esc(dia.nombre) + "</b><span>" + esc(dia.verbo) + '</span><em>Jugar</em></span></button>';
    hJ += '<div class="jx-h"><h2>Todos los juegos</h2><small>' + js.length + " juegos · A1 a C1</small></div>";
    hJ += '<div class="jx-chips" role="group" aria-label="Filtrar juegos">' + fams.map(function(f){ return '<button class="jx-chip" data-jx-fam="' + esc(f) + '" aria-pressed="' + (f === filtro) + '">' + esc(f) + "</button>"; }).join("") + "</div>";
    hJ += '<div class="jx-grid">' + js.filter(function(j){ return filtro === "Todos" || j.familia === filtro; }).map(function(j){
      return '<button class="jx-game" data-jx-juego="' + esc(j.id) + '" style="--c:' + j.color + '"><span class="jx-g-arte" aria-hidden="true">' + (j.deco ? j.deco() : "") + '</span><b>' + esc(j.nombre) + "</b><small>" + esc(j.verbo) + "</small></button>";
    }).join("") + "</div>";
    var otros = [];
    if (orig.v1) otros.push('<button class="jx-row" data-jx-px="' + proxy(orig.v1) + '"><span class="jx-ic" style="--c:#E5484D"><img src="' + IC("mando") + '" alt=""></span><span class="jx-rt"><b>PLEX 1V1</b><small>' + esc(subDe(orig.v1) || "Reta a otro estudiante") + "</small></span><i>›</i></button>");
    orig.mini.forEach(function(m){
      var t = tituloDe(m), n = /ranking/i.test(t) ? ["trofeo", "#F59E0B"] : /equipo/i.test(t) ? ["corazon", "#22C55E"] : ["globo", "#EC4899"];
      otros.push('<button class="jx-row" data-jx-px="' + proxy(m) + '"><span class="jx-ic" style="--c:' + n[1] + '"><img src="' + IC(n[0]) + '" alt=""></span><span class="jx-rt"><b>' + esc(t) + "</b><small>" + esc(subDe(m)) + "</small></span><i>›</i></button>");
    });
    if (otros.length) hJ += '<div class="jx-h"><h2>Con otros</h2><small>En línea o en el mismo teléfono</small></div><div class="jx-list">' + otros.join("") + "</div>";
    if (orig.arc) hJ += '<button class="jx-link" data-jx-px="' + proxy(orig.arc) + '">Abrir el Arcade por curso y unidad ›</button>';

    /* ---- Practicar ---- */
    var gEn = {}; try { gEn = gEnsure(); } catch (e) {}
    var hP = "";
    var para = [];
    var srs = orig.rc.filter(function(r){ return /repaso del d/i.test(tituloDe(r)); })[0];
    if (gEn.ruta && window.PLX_DIAG && PLX_DIAG.ACT) {
      var deb = gEn.ruta.debil, nom = { R: "lectura", L: "escucha", W: "escritura", S: "habla" }[deb];
      PLX_DIAG.ACT[deb].slice(0, 2).forEach(function(a){ para.push('<button class="jx-para" data-jx-act="' + esc(a[0]) + '"><small>Refuerza tu ' + nom + '</small><b>' + esc(a[1]) + "</b><span>" + esc(a[2]) + "</span></button>"); });
    }
    if (srs) para.unshift('<button class="jx-para sol" data-jx-px="' + proxy(srs) + '"><small>Hoy</small><b>Repaso del día</b><span>' + esc(subDe(srs)) + "</span></button>");
    if (!gEn.diag) para.push('<button class="jx-para" data-dgx-abrir="1"><small>Personaliza</small><b>Haz el diagnóstico</b><span>Te digo qué practicar según tu nivel</span></button>');
    if (para.length) hP += '<div class="jx-h"><h2>Para ti hoy</h2><small>Según tu ruta</small></div><div class="jx-paras">' + para.join("") + "</div>";
    var porGrupo = {};
    orig.rc.forEach(function(r){
      var t = tituloDe(r), a = busca(ACT, t) || [null, "estrella", "#1E4FD6", "Ponte a prueba"];
      (porGrupo[a[3]] = porGrupo[a[3]] || []).push('<button class="jx-row' + (r.disabled ? " off" : "") + '" data-jx-px="' + proxy(r) + '"' + (r.disabled ? ' aria-disabled="true"' : "") + '><span class="jx-ic" style="--c:' + a[2] + '"><img src="' + IC(a[1]) + '" alt=""></span><span class="jx-rt"><b>' + esc(t) + "</b><small>" + esc(subDe(r)) + "</small></span><i>›</i></button>");
    });
    ["Repasa", "Habilidades", "Ponte a prueba"].forEach(function(g){ if (porGrupo[g]) hP += '<div class="jx-h"><h2>' + g + "</h2><small>" + GRUPOS[g] + '</small></div><div class="jx-list">' + porGrupo[g].join("") + "</div>"; });

    /* ---- Aprender ---- */
    var hA = '<button class="jx-curso" data-jx-go="lecciones"><span class="jx-ic grande" style="--c:#1E4FD6"><img src="' + IC("libros") + '" alt=""></span><span class="jx-rt"><small>Tu curso</small><b>Lecciones</b><span>Teoría corta, ejercicios y repaso: sigue tu camino</span></span><i>›</i></button>';
    hA += '<div class="jx-h"><h2>Explora</h2><small>Vocabulario, sonidos, lecturas y más</small></div><div class="jx-mos">' + orig.amf.map(function(m){
      var t = tituloDe(m), a = busca(APR, t) || [null, "estrella", "#1E4FD6"];
      return '<button class="jx-tile" data-jx-px="' + proxy(m) + '" style="--c:' + a[2] + '"><span class="jx-ic" style="--c:' + a[2] + '"><img src="' + IC(a[1]) + '" alt=""></span><b>' + esc(t) + "</b><small>" + esc(subDe(m)) + "</small></button>";
    }).join("") + "</div>";

    var idx = TABS.map(function(t){ return t[0]; }).indexOf(tab);
    var html = '<div class="jx"><div class="jx-seg" role="tablist" aria-label="Secciones" style="--i:' + idx + '"><i class="jx-pill" aria-hidden="true"></i>' +
      TABS.map(function(t){ return '<button role="tab" data-jx-tab="' + t[0] + '" aria-selected="' + (t[0] === tab) + '">' + t[1] + "</button>"; }).join("") + "</div>" +
      '<div class="jx-pan jx-anim" data-p="juegos"' + (tab !== "juegos" ? " hidden" : "") + ">" + hJ + "</div>" +
      '<div class="jx-pan jx-anim" data-p="practica"' + (tab !== "practica" ? " hidden" : "") + ">" + hP + "</div>" +
      '<div class="jx-pan jx-anim" data-p="aprende"' + (tab !== "aprende" ? " hidden" : "") + ">" + hA + "</div></div>";
    var viejo = v.querySelector(".jx");
    if (viejo) viejo.outerHTML = html; else { var h1 = v.querySelector("h1"); (h1 ? h1 : v.firstChild).insertAdjacentHTML(h1 ? "afterend" : "beforebegin", html); }
    v.classList.add("jx-on");
  };

  var asegura = function(){ try { if (typeof view !== "undefined" && view === "retos") { var v = document.querySelector("#view .gretos"); if (v && !v.querySelector(".jx")) construye(); } } catch (e) {} };
  if (typeof render === "function") { var rO = render; render = function(){ var r = rO.apply(this, arguments); asegura(); return r; }; }
  var vista = document.getElementById("view"), pend = false;
  if (vista) new MutationObserver(function(){ if (pend) return; pend = true; requestAnimationFrame(function(){ pend = false; asegura(); }); }).observe(vista, { childList: true, subtree: true });

  var cambiaTab = function(t){
    tab = t; lsS("jx-tab", t);
    var v = document.querySelector("#view .jx"); if (!v) return;
    var i = TABS.map(function(x){ return x[0]; }).indexOf(t);
    v.querySelector(".jx-seg").style.setProperty("--i", i);
    v.querySelectorAll("[data-jx-tab]").forEach(function(b){ b.setAttribute("aria-selected", String(b.dataset.jxTab === t)); });
    v.querySelectorAll(".jx-pan").forEach(function(p){
      var on = p.dataset.p === t; p.hidden = !on;
      if (on && !matchMedia("(prefers-reduced-motion: reduce)").matches) { p.classList.remove("jx-entra"); void p.offsetWidth; p.classList.add("jx-entra"); }
    });
  };
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-jx-tab],[data-jx-juego],[data-jx-px],[data-jx-fam],[data-jx-act],[data-jx-go]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    if (b.dataset.jxTab) return cambiaTab(b.dataset.jxTab);
    if (b.dataset.jxFam) { filtro = b.dataset.jxFam; return construye(); }
    if (b.dataset.jxJuego) { var G = window.PLXG; try { lsS("plxg-juego", b.dataset.jxJuego); } catch (x) {} if (G && G.arcade) G.arcade(null, b.dataset.jxJuego); return; }
    if (b.dataset.jxAct) { if (window.PLX_DIAG) PLX_DIAG.hace("act:" + b.dataset.jxAct); return; }
    if (b.dataset.jxGo) { go(b.dataset.jxGo); return; }
    var o = px[+b.dataset.jxPx]; if (o && !o.disabled) o.click();
  }, true);

  var css = document.createElement("style"); css.id = "plx79";
  css.textContent = [
    /* la vista original queda debajo, oculta (sus botones reciben los toques reenviados) */
    ".gretos.jx-on > :not(h1):not(.jx){display:none!important}",
    ".gretos.jx-on > h1{font-family:Poppins,system-ui,sans-serif;font-weight:800;letter-spacing:-.02em;margin-bottom:4px}",
    ".jx{display:grid;gap:4px;padding-bottom:12px}",
    ".jx-seg{position:sticky;top:calc(env(safe-area-inset-top) + 76px);z-index:5;display:grid;grid-template-columns:repeat(3,1fr);background:var(--v4-surface2);border-radius:16px;padding:4px;margin:6px 0 10px;box-shadow:0 0 0 1px var(--v4-line)}",
    ".jx-seg button{all:unset;position:relative;z-index:1;cursor:pointer;text-align:center;padding:10px 6px;border-radius:12px;font-family:Poppins,system-ui,sans-serif;font-weight:700;font-size:.95rem;color:var(--v4-mute);transition:color var(--v4-t2)}",
    ".jx-seg button[aria-selected=true]{color:var(--v4-ink)}",
    ".jx-pill{position:absolute;top:4px;bottom:4px;left:4px;width:calc((100% - 8px)/3);border-radius:12px;background:var(--v4-surface);box-shadow:var(--v4-sh1);transform:translateX(calc(var(--i) * 100%));transition:transform var(--v4-t3) var(--v4-spring)}",
    ".jx-pan[hidden]{display:none}.jx-pan{display:grid;gap:10px}",
    "@keyframes jxin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}.jx-entra > *{animation:jxin var(--v4-t3) var(--v4-e) both}.jx-entra > :nth-child(2){animation-delay:.04s}.jx-entra > :nth-child(3){animation-delay:.08s}.jx-entra > :nth-child(n+4){animation-delay:.12s}",
    ".jx-h{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:12px 2px 2px}.jx-h h2{margin:0;font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.15rem;letter-spacing:-.01em}.jx-h small{color:var(--v4-mute)}",
    /* juego del día */
    ".jx-dia{all:unset;box-sizing:border-box;cursor:pointer;position:relative;overflow:hidden;display:grid;grid-template-columns:42% 1fr;align-items:center;min-height:168px;border-radius:var(--v4-r-xl);background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 55%,#0B2D74));color:#fff;box-shadow:var(--v4-sh2);transition:transform var(--v4-t1) var(--v4-e)}",
    ".jx-dia:active{transform:scale(.98)}.jx-dia-arte{position:relative;overflow:hidden;display:grid;place-items:center;padding:14px;max-height:168px}.jx-dia-arte > *{position:static!important}.jx-dia-arte svg,.jx-dia-arte img{width:100%;max-width:150px;height:auto;filter:drop-shadow(0 10px 18px rgba(0,0,0,.25))}",
    ".jx-dia-tx{display:grid;gap:4px;padding:18px 18px 18px 4px}.jx-dia-tx small{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;opacity:.85}.jx-dia-tx b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.45rem;line-height:1.1}",
    ".jx-dia-tx span{opacity:.9;font-size:.92rem}.jx-dia-tx em{justify-self:start;margin-top:8px;font-style:normal;background:#fff;color:#0B2D74;font-family:Poppins,system-ui,sans-serif;font-weight:800;padding:9px 18px;border-radius:99px;box-shadow:0 3px 0 rgba(0,0,0,.18)}",
    /* filtros */
    ".jx-chips{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 6px;scrollbar-width:none}.jx-chips::-webkit-scrollbar{display:none}",
    ".jx-chip{all:unset;cursor:pointer;flex:none;padding:8px 14px;border-radius:99px;background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line);font-weight:700;font-size:.88rem;color:var(--v4-ink2);transition:background var(--v4-t2),color var(--v4-t2)}",
    ".jx-chip[aria-pressed=true]{background:var(--v4-ink);color:var(--v4-surface);box-shadow:none}",
    /* cuadrícula de juegos */
    ".jx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:700px){.jx-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}",
    ".jx-game{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:2px;border-radius:var(--v4-r-lg);background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1);padding:0 0 12px;overflow:hidden;transition:transform var(--v4-t1) var(--v4-e),box-shadow var(--v4-t2)}",
    ".jx-game:hover{box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh2)}.jx-game:active{transform:scale(.97)}",
    ".jx-g-arte{position:relative;overflow:hidden;display:grid;place-items:center;height:92px;background:linear-gradient(160deg,color-mix(in srgb,var(--c) 30%,var(--v4-surface)),color-mix(in srgb,var(--c) 12%,var(--v4-surface)));margin-bottom:8px}",
    ".jx-g-arte > *{position:static!important;max-height:74px;max-width:78%}.jx-g-arte svg,.jx-g-arte img{width:74px;height:auto;max-height:74px;object-fit:contain;transition:transform var(--v4-t3) var(--v4-spring)}.jx-game:hover .jx-g-arte svg,.jx-game:hover .jx-g-arte img{transform:scale(1.08) rotate(-3deg)}",
    ".jx-game b{padding:0 12px;font-family:Poppins,system-ui,sans-serif;font-weight:700;font-size:.95rem;line-height:1.2}.jx-game small{padding:0 12px;color:var(--v4-mute);font-size:.8rem;line-height:1.3}",
    /* filas */
    ".jx-list{display:grid;gap:8px}",
    ".jx-row,.jx-curso{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--v4-r-lg);background:var(--v4-surface);box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1);min-height:64px;transition:transform var(--v4-t1) var(--v4-e)}",
    ".jx-row:active,.jx-curso:active,.jx-tile:active,.jx-para:active{transform:scale(.98)}.jx-row.off{opacity:.55}",
    ".jx-ic{flex:none;width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:color-mix(in srgb,var(--c) 16%,var(--v4-surface))}.jx-ic img{width:30px;height:30px;object-fit:contain}.jx-ic.grande{width:58px;height:58px;border-radius:18px}.jx-ic.grande img{width:38px;height:38px}",
    ".jx-rt{flex:1;min-width:0;display:grid;gap:2px}.jx-rt b{font-family:Poppins,system-ui,sans-serif;font-weight:700;font-size:.98rem}.jx-rt small,.jx-rt span{color:var(--v4-mute);font-size:.84rem;line-height:1.35;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
    ".jx-rt > small:first-child{color:var(--v4-brand);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.7rem;-webkit-line-clamp:1}",
    ".jx-row > i,.jx-curso > i{font-style:normal;color:var(--v4-mute);font-size:1.4rem}",
    ".jx-curso{background:linear-gradient(135deg,color-mix(in srgb,#1E4FD6 10%,var(--v4-surface)),var(--v4-surface))}",
    /* para ti */
    ".jx-paras{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(220px,78%);gap:10px;overflow-x:auto;padding:2px 2px 8px;scroll-snap-type:x mandatory;scrollbar-width:none}.jx-paras::-webkit-scrollbar{display:none}@media (min-width:700px){.jx-paras{grid-auto-columns:minmax(220px,1fr)}}",
    ".jx-para{all:unset;box-sizing:border-box;cursor:pointer;scroll-snap-align:start;display:grid;gap:4px;align-content:start;padding:16px;border-radius:var(--v4-r-lg);background:linear-gradient(150deg,#1E4FD6,#0B2D74);color:#fff;box-shadow:var(--v4-sh2);min-height:120px;transition:transform var(--v4-t1) var(--v4-e)}",
    ".jx-para.sol{background:linear-gradient(150deg,#FFD200,#FFB800);color:#3D2E00}.jx-para small{font-weight:800;text-transform:uppercase;letter-spacing:.07em;font-size:.7rem;opacity:.85}.jx-para b{font-family:Poppins,system-ui,sans-serif;font-weight:800;font-size:1.15rem}.jx-para span{font-size:.86rem;opacity:.9;line-height:1.35;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}",
    /* mosaico de Aprender */
    ".jx-mos{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media (min-width:700px){.jx-mos{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    ".jx-tile{all:unset;box-sizing:border-box;cursor:pointer;display:grid;gap:6px;align-content:start;padding:14px;border-radius:var(--v4-r-lg);background:linear-gradient(170deg,color-mix(in srgb,var(--c) 9%,var(--v4-surface)),var(--v4-surface));box-shadow:0 0 0 1px var(--v4-line),var(--v4-sh1);min-height:138px;transition:transform var(--v4-t1) var(--v4-e)}",
    ".jx-tile b{font-family:Poppins,system-ui,sans-serif;font-weight:700;font-size:.98rem;line-height:1.2;margin-top:4px}.jx-tile small{color:var(--v4-mute);font-size:.82rem;line-height:1.35}",
    ".jx-link{all:unset;cursor:pointer;justify-self:center;margin-top:8px;color:var(--v4-brand);font-weight:800;padding:10px}"
  ].join("\n");
  document.head.appendChild(css);
})();
