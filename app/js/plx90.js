/* PLEX PLAY 3.11.0 — Vidrio, riel de escritorio y tres zonas
   Jhon aprobó una maqueta (IDENTIDAD Y REDES/maquetas/rediseno-v2-*.png) y pidió publicarla tal cual.
   - Vidrio en tres niveles (.gl.g1/.g2/.g3): distinto cuerpo, desenfoque, sombra y reflejo, con un filo de luz fino
     en vez de borde. El desenfoque real solo corre en escritorio: en el teléfono, las capas fijas sobre contenido que
     se desplaza van con vidrio simulado (plx23 ya tuvo que apagar el desenfoque de la barra por rendimiento).
   - Escritorio (desde 1024 px): riel flotante a la izquierda en lugar del menú de la cabecera, el mapa en el centro
     y, a la derecha, un solo panel de vidrio con meta, racha y clasificación (antes tres tarjetas).
   - El icono de la pestaña en la que estás va entero en oro encendido (antes, solo una parte en amarillo).
   No cambia qué hace cada cosa: es estructura y materiales. */
(function(){
  "use strict";
  if (typeof render !== "function") return;
  var EV = window.PLX_EV || null, ORG = window.PLX_ORG || null;
  var esc = function(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var ancho = function(){ return window.innerWidth >= 1024; };

  /* ====================== el riel ====================== */
  var L = function(p){ return '<svg class="li" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>"; };
  var TROFEO = L('<path d="M8 4h8v5a4 4 0 0 1-8 0Z"/><path d="M16 5h3v1.5A3.5 3.5 0 0 1 15.6 10M8 5H5v1.5A3.5 3.5 0 0 0 8.4 10"/><path d="M12 13v4M8.5 20h7"/>');
  var soloRk = false;
  var items = function(){
    var t = (ORG && ORG.tabs) || [], o = [];
    t.forEach(function(x){
      if (x[0] === "ranking") { o.push(["duelos", x[1], x[2]]); o.push(["clasif", "Clasificación", TROFEO]); }
      else o.push([x[0], x[1], x[2]]);
    });
    return o;
  };
  var actual = function(){
    var v = typeof view !== "undefined" ? view : "", de = (ORG && ORG.de) || {};
    v = de[v] || v;
    return v === "ranking" ? (soloRk ? "clasif" : "duelos") : v;
  };
  var nivel = function(){
    var xp = 0, lv = 1, a = 0, b = 1;
    try { xp = S.xp || 0; lv = catLevel(xp); a = xpFor(lv); b = xpFor(lv + 1); } catch (e) {}
    var gato = ""; try { gato = catSVG(gEnsure().cat); } catch (e) {}
    var p = b > a ? Math.max(2, Math.min(100, Math.round((xp - a) / (b - a) * 100))) : 100;
    return '<button class="rl-yo" data-view="perfil" aria-label="Tu perfil"><span class="rl-aro" style="--p:' + p + '%"><span>' + gato + "</span></span><span><b>Nivel " + lv + '</b><u><s style="width:' + p + '%"></s></u><small>' + Number(xp).toLocaleString("es-CO") + " / " + Number(b).toLocaleString("es-CO") + " XP</small></span></button>";
  };
  var fRiel = "";
  var riel = function(){
    var r = document.getElementById("px-rail");
    var doc = !document.querySelector('#tabbar button[data-view="parcours"], #nav button[data-view="parcours"]');   /* panel docente: su propia barra */
    if (!ancho() || doc || !ORG) { if (r) r.hidden = true; document.documentElement.classList.remove("rl-on"); return; }
    if (!r) { r = document.createElement("aside"); r.id = "px-rail"; r.className = "gl g2"; r.setAttribute("aria-label", "Navegación"); document.body.appendChild(r); }
    r.hidden = false; document.documentElement.classList.add("rl-on");
    document.documentElement.classList.toggle("rk-solo", soloRk && typeof view !== "undefined" && view === "ranking");
    var cur = actual(), xp = 0; try { xp = S.xp || 0; } catch (e) {}
    var gk = ""; try { gk = JSON.stringify(gEnsure().cat); } catch (e) {}
    var f = cur + "|" + xp + "|" + gk; if (f === fRiel && r.firstChild) return; fRiel = f;
    r.innerHTML = '<div class="rl-logo"><img src="icons/mz-icon-192.png" alt="" width="34" height="34"><b>PLEX <i>PLAY</i></b></div><nav class="rl-nav">' +
      items().map(function(x){
        var at = x[0] === "duelos" || x[0] === "clasif" ? 'data-rl="' + x[0] + '"' : 'data-view="' + esc(x[0]) + '"';
        return '<button type="button" class="rl-b" ' + at + (x[0] === cur ? ' aria-current="page"' : "") + ">" + x[2] + "<span>" + esc(x[1]) + "</span></button>";
      }).join("") + "</nav>" + nivel();
  };
  /* «1 vs 1» y «Clasificación» son la misma vista: la segunda muestra solo el ranking */
  window.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-rl]");
    if (!b) { if (e.target.closest && e.target.closest("#tabbar [data-av-rank], #nav [data-av-rank]")) soloRk = false; return; }
    e.preventDefault(); e.stopPropagation();
    soloRk = b.dataset.rl === "clasif";
    try { if (typeof view !== "undefined" && view === "ranking") { riel(); scrollTo(0, 0); } else if (window.PLX_RANKING) PLX_RANKING(); else go("ranking"); } catch (x) {}
    try { if (typeof SFX !== "undefined" && SFX.tap) SFX.tap(); } catch (x) {}
  }, true);

  var r0 = render;
  render = function(){ var r = r0.apply(this, arguments); try { riel(); } catch (e) {} return r; };
  var tR = 0;
  addEventListener("resize", function(){ clearTimeout(tR); tR = setTimeout(function(){ try { riel(); } catch (e) {} }, 150); });
  var obs = document.getElementById("tabbar"); if (obs) new MutationObserver(function(){ try { riel(); } catch (e) {} }).observe(obs, { childList: true });

  /* ====================== estilos ====================== */
  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){
    var a = sel.split(","), f = function(p){ return a.map(function(s){ s = s.trim(); return s.indexOf("&") === 0 ? p + s.slice(1) : p + " " + s; }).join(","); };
    return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}";
  };
  var TOK_C = "--gl-1a:rgba(255,255,255,.62);--gl-1b:rgba(255,255,255,.34);--gl-2a:rgba(255,255,255,.7);--gl-2b:rgba(255,255,255,.4);--gl-3a:rgba(255,255,255,.92);--gl-3b:rgba(255,255,255,.7);--gl-hl:rgba(255,255,255,1);--gl-bd:rgba(255,255,255,.75);--gl-bd2:rgba(138,116,214,.26);--gl-sh:rgba(54,37,92,.26);--gl-hair:rgba(54,37,92,.1);--gl-trk:rgba(54,37,92,.11);--gl-ink:#23212C;--gl-mut:#6A6290;--gl-pozo:#FBFAFF;--px-acc:#36255C;--gl-on:rgba(47,107,255,.12);--gl-oro:#C99400;--gl-pill:#0B1F5C";
  var TOK_O = "--gl-1a:rgba(255,255,255,.075);--gl-1b:rgba(255,255,255,.03);--gl-2a:rgba(210,195,246,.11);--gl-2b:rgba(140,120,230,.045);--gl-3a:rgba(210,195,246,.2);--gl-3b:rgba(130,120,235,.1);--gl-hl:rgba(255,255,255,.36);--gl-bd:rgba(255,255,255,.16);--gl-bd2:rgba(255,255,255,.05);--gl-sh:rgba(0,0,0,.6);--gl-hair:rgba(255,255,255,.075);--gl-trk:rgba(255,255,255,.12);--gl-ink:#F6F4FF;--gl-mut:#A99FD0;--gl-pozo:#15131F;--px-acc:#D2C3F6;--gl-on:rgba(47,107,255,.26);--gl-oro:#FFD200;--gl-pill:rgba(255,210,0,.1)";
  var css = [
    ":root{" + TOK_C + "}", D1 + "{" + TOK_O + "}", "@media (prefers-color-scheme:dark){" + D2 + "{" + TOK_O + "}}",
    /* ---------- el fondo: luz ambiente para que el vidrio tenga algo que recoger ---------- */
    "html.mk body{background:radial-gradient(900px 560px at 4% -8%,rgba(47,107,255,.17),transparent 62%),radial-gradient(760px 520px at 104% 26%,rgba(241,254,200,.75),transparent 60%),radial-gradient(900px 620px at 60% 110%,rgba(210,195,246,.7),transparent 62%),linear-gradient(160deg,#F8F6FF 0,#EEE8FC 55%,#E6DEF9 100%) fixed!important}",
    oscuro("&.mk body", "background:radial-gradient(900px 560px at 4% -8%,rgba(47,107,255,.26),transparent 62%),radial-gradient(820px 600px at 104% 30%,rgba(54,37,92,.85),transparent 62%),radial-gradient(900px 620px at 40% 112%,rgba(54,37,92,.6),transparent 60%),linear-gradient(160deg,#101A44 0,#1B1A30 52%,#23212C 100%) fixed!important"),
    /* ---------- vidrio ---------- */
    ".gl{position:relative;isolation:isolate}.gl::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(155deg,var(--gl-hl) 0,var(--gl-bd) 22%,var(--gl-bd2) 55%,var(--gl-bd) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;z-index:2}",
    ".gl::after{content:'';position:absolute;inset:0;border-radius:inherit;background:radial-gradient(120% 60% at 12% -10%,var(--gl-hl),transparent 46%);opacity:.22;pointer-events:none;z-index:-1}",
    ".gl.g1{background:linear-gradient(180deg,var(--gl-1a),var(--gl-1b));box-shadow:0 6px 16px -12px var(--gl-sh)}.gl.g1::after{opacity:.12}",
    ".gl.g2{background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b));box-shadow:0 30px 60px -34px var(--gl-sh),0 2px 6px -3px var(--gl-sh)}",
    ".gl.g3{background:linear-gradient(170deg,var(--gl-3a),var(--gl-3b));box-shadow:0 34px 60px -26px var(--gl-sh),0 10px 22px -14px var(--gl-sh)}.gl.g3::after{opacity:.34}",
    "@media (min-width:1024px){.gl.g1{-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3)}.gl.g2{-webkit-backdrop-filter:blur(26px) saturate(1.5);backdrop-filter:blur(26px) saturate(1.5)}.gl.g3{-webkit-backdrop-filter:blur(34px) saturate(1.7);backdrop-filter:blur(34px) saturate(1.7)}}",
    /* en el teléfono no hay desenfoque: el cuerpo del vidrio sube de opacidad para que el texto se lea igual */
    oscuro(".gl.g3", "background:linear-gradient(170deg,rgba(58,50,112,.95),rgba(36,32,72,.95))"), "@media (min-width:1024px){" + oscuro(".gl.g3", "background:linear-gradient(170deg,var(--gl-3a),var(--gl-3b))") + "}",
    /* ---------- cápsulas de racha, nivel y XP ---------- */
    "html.mk body header#topbar.top #stats .gpill{background:linear-gradient(180deg,var(--gl-1a),var(--gl-1b))!important;box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd)!important;border:0!important;color:var(--gl-ink)!important}",
    /* ---------- pestaña activa: el icono entero en oro encendido ---------- */
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg{color:#FFD200!important;background:var(--gl-pill)!important;box-shadow:inset 0 0 0 1px rgba(255,210,0,.55),0 0 14px -2px rgba(255,210,0,.55)!important;filter:drop-shadow(0 0 5px rgba(255,210,0,.75))!important}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page] svg > *{fill:rgba(255,210,0,.2)!important;stroke:#FFD200!important}",
    "html.mk body nav#tabbar.tabbar button.px-navbtn[aria-current=page]{color:var(--gl-ink)!important}",
    /* ---------- barra inferior: vidrio flotante ---------- */
    "html.mk body nav#tabbar.tabbar{background:linear-gradient(170deg,rgba(255,255,255,.96),rgba(244,247,255,.92))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),inset 0 1px 0 #fff,0 22px 40px -22px var(--gl-sh),0 6px 16px -10px var(--gl-sh)!important;border:0!important}",
    oscuro("&.mk body nav#tabbar.tabbar", "background:linear-gradient(170deg,rgba(56,48,110,.97),rgba(34,30,66,.97))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),inset 0 1px 0 rgba(255,255,255,.26),0 22px 40px -22px #000!important"),
    /* ---------- tarjeta de la ruta de estudio, en vidrio ---------- */
    "html.mk .ghome .gmain > .gcard.rtx{background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b))!important;box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd),0 30px 60px -34px var(--gl-sh)!important;border:0!important}",

    /* ====================== escritorio ====================== */
    "#px-rail{display:none}",
    "@media (min-width:1024px){" + [
      "html.rl-on.mk body{padding-left:212px}",
      "html.rl-on.mk body header#topbar.top #nav,html.rl-on.mk body header#topbar.top .pc-mark{display:none!important}",
      "html.rl-on.mk body header#topbar.top .topbar-in{background:none!important;box-shadow:none!important;border:0!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;justify-content:flex-end}",
      "html.rl-on.mk body header#topbar.top{background:none!important;box-shadow:none!important}html.rl-on.mk body header#topbar.top::before,html.rl-on.mk body header#topbar.top::after,html.rl-on.mk body header#topbar.top .topbar-in::before,html.rl-on.mk body header#topbar.top .topbar-in::after{display:none!important}",
      "#px-rail:not([hidden]){display:flex}#px-rail{position:fixed;left:14px;top:14px;bottom:14px;width:186px;z-index:60;border-radius:22px;padding:18px 10px 12px;flex-direction:column;gap:3px;color:var(--gl-ink);font-family:var(--ev-f,Barlow,system-ui,sans-serif)}",
      ".rl-logo{display:flex;align-items:center;gap:8px;margin:0 6px 18px;font:800 17px/1 Poppins,system-ui,sans-serif}.rl-logo img{border-radius:10px;box-shadow:0 6px 12px -6px var(--gl-sh)}.rl-logo i{font-style:normal;color:#2F6BFF}",
      ".rl-nav{display:flex;flex-direction:column;gap:3px}",
      ".rl-b{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;align-items:center;gap:11px;height:40px;padding:0 12px;border-radius:12px;font-size:.86rem;color:var(--gl-mut);white-space:nowrap;transition:background .18s,color .18s,transform .18s}.rl-b svg{width:19px;height:19px;flex:none}",
      ".rl-b:hover{color:var(--gl-ink);background:var(--gl-1b)}.rl-b:active{transform:scale(.98)}.rl-b:focus-visible{outline:2px solid #FFD200;outline-offset:1px}",
      ".rl-b[aria-current=page]{color:var(--gl-ink);font-weight:600;background:linear-gradient(180deg,var(--gl-on),transparent 140%);box-shadow:inset 0 0 0 1px rgba(76,134,255,.5),inset 0 1px 0 var(--gl-bd),0 10px 22px -12px rgba(47,107,255,.9)}",
      ".rl-b[aria-current=page]::before{content:'';position:absolute;left:-1px;top:11px;bottom:11px;width:3px;border-radius:3px;background:#FFD200;box-shadow:0 0 10px #FFD200}",
      /* el icono de donde estás: todo en oro, con luz */
      ".rl-b[aria-current=page] svg{color:var(--gl-oro);filter:drop-shadow(0 0 5px rgba(255,210,0,.8))}.rl-b[aria-current=page] svg > *{fill:rgba(255,210,0,.2)}",
      ".rl-yo{all:unset;box-sizing:border-box;cursor:pointer;margin-top:auto;display:flex;align-items:center;gap:9px;padding:12px 6px 2px;border-top:1px solid var(--gl-hair)}.rl-yo > span:last-child{flex:1;min-width:0;display:grid;gap:4px}.rl-yo b{font:700 .78rem Poppins,system-ui,sans-serif}.rl-yo small{font-size:.63rem;color:var(--gl-mut)}",
      ".rl-yo u{text-decoration:none;display:block;height:4px;border-radius:9px;background:var(--gl-trk);overflow:hidden}.rl-yo u s{display:block;height:100%;border-radius:9px;background:linear-gradient(90deg,#FFD200,#FFC000)}",
      ".rl-aro{flex:none;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#FFD200 var(--p),var(--gl-trk) 0)}.rl-aro > span{width:46px;height:46px;border-radius:50%;background:var(--gl-pozo);display:grid;place-items:center;overflow:hidden}.rl-aro svg{width:40px;height:40px;display:block}",
      /* tres zonas: el mapa manda; a la derecha, un solo panel de vidrio */
      "html.rl-on .ghome{grid-template-columns:minmax(0,1fr) 286px!important;gap:20px!important;align-items:start;padding-top:0!important;margin-top:-6px}html.rl-on.mk body #view.wrap{max-width:1240px;padding-left:10px;padding-right:18px}html.rl-on.mk body header#topbar.top .topbar-in{min-height:0!important;padding-top:6px!important;padding-bottom:2px!important}",
      "html.rl-on .ghome .gside{position:sticky;top:70px;display:block!important;padding:2px 16px;border-radius:22px;background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b));box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd),0 30px 60px -34px var(--gl-sh);-webkit-backdrop-filter:blur(26px) saturate(1.5);backdrop-filter:blur(26px) saturate(1.5)}",
      "html.rl-on.mk body #view .ghome .gside > .gcard.gcard.gcard{background:none!important;box-shadow:none!important;border:0!important;border-radius:0!important;padding:13px 0!important;margin:0!important;outline:0!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;transform:none!important}html.rl-on.mk body #view .ghome .gside > .gcard.gcard.gcard + .gcard{border-top:1px solid var(--gl-hair)!important}",
      /* Clasificación (riel): la misma vista, solo el ranking */
      "html.rk-solo #view .dv{display:none}"
    ].join("") + "}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx90"; st.textContent = css; document.head.appendChild(st);
  try { riel(); } catch (e) {}
})();
