/* PLEX PLAY 3.22.0 — Lo rescatado del diseño de Figma
   Jhon generó un prototipo en Figma Make («Gamified Language Learning App») con el encargo que escribimos, y pidió
   traer lo que sirviera. Casi toda su estructura ya estaba en la app (riel, mapa, tarjetas de lección, tienda). Lo que
   aportaba de nuevo, y se aplica aquí:
   - Lección en escritorio: un panel de vidrio centrado sobre la app desenfocada, en vez de ocupar toda la ventana.
   - Estación actual del mapa: oro macizo con relieve (antes azul con filo dorado); las hechas, con su «labio» debajo.
   - Barras de progreso azul → oro.
   - Cabeceras editoriales (etiqueta pequeña, título grande, una línea) en Práctica y 1 vs 1.
   - Corrección: un cuadro con el icono del veredicto y una etiqueta encima («BIEN HECHO» / «SIGUE INTENTÁNDOLO»).
   - Tienda: cada artículo con su zona de muestra teñida y el precio en una pastilla noche.
   - Riel y panel lateral más opacos: el vidrio no le roba atención al contenido.
   Lo que NO se trae: su gato dibujado a mano (la app tiene los suyos), los datos de ejemplo, y que trate a Manzana
   como «compañera»: Manzana es gato. Este módulo va antes de plx97, que debe seguir siendo el último. */
(function(){
  "use strict";
  var pl = document.getElementById("player");
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.500 4.500L19 7.500"/></svg>';
  var EQUIS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6.500 6.500l11 11M17.500 6.500l-11 11"/></svg>';

  /* ---------- corrección: icono y etiqueta ---------- */
  var veredicto = function(){
    if (!pl) return;
    var v = pl.querySelector(".pf .fb .ej-ver"); if (!v || v.dataset.fg) return;
    v.dataset.fg = "1";
    var mal = pl.classList.contains("ej-mal") || !!pl.querySelector(".pf.bad");
    v.insertAdjacentHTML("beforebegin", '<div class="fg-ico" aria-hidden="true">' + (mal ? EQUIS : CHECK) + '</div><div class="fg-eti">' + (mal ? "Sigue intentándolo" : "Bien hecho") + "</div>");
    v.closest(".fb").classList.add("fg-fb");
  };
  if (pl) { var pp = false; new MutationObserver(function(){ if (pp) return; pp = true; requestAnimationFrame(function(){ pp = false; try { veredicto(); } catch (e) {} }); }).observe(pl, { childList: true, subtree: true }); }

  /* ---------- cabeceras editoriales ---------- */
  var cabeceras = function(){
    if (typeof view === "undefined") return;
    if (view === "retos") {
      var h = document.querySelector("#view h1");
      if (h && !h.dataset.fg && document.querySelector("#view .jx.pq-on")) {
        h.dataset.fg = "1"; h.classList.add("fg-h1"); h.textContent = "Entrena a tu ritmo";
        h.insertAdjacentHTML("beforebegin", '<p class="fg-eyebrow">Práctica</p>');
        h.insertAdjacentHTML("afterend", '<p class="fg-sub">Sesiones cortas con lo que ya aprendiste.</p>');
      }
    }
    if (view === "ranking") {
      var d = document.querySelector("#view .dv-h");
      if (d && !d.dataset.fg) { d.dataset.fg = "1"; d.innerHTML = '<p class="fg-eyebrow">1 vs 1</p><h1 class="fg-h1">Juega. Aprende. Sube.</h1><p class="fg-sub">Duelos rápidos con el francés de tus lecciones.</p>'; }
    }
  };
  if (typeof render === "function") { var r0 = render; render = function(){ var r = r0.apply(this, arguments); try { cabeceras(); } catch (e) {} return r; }; }
  var vista = document.getElementById("view"), pv = false;
  if (vista) new MutationObserver(function(){ if (pv) return; pv = true; requestAnimationFrame(function(){ pv = false; try { cabeceras(); } catch (e) {} }); }).observe(vista, { childList: true, subtree: true });

  var D1 = ":root[data-theme=dark]", D2 = ":root:not([data-theme=light])";
  var oscuro = function(sel, decl){ var a = sel.split(","), f = function(p){ return a.map(function(s){ s = s.trim(); return s.indexOf("&") === 0 ? p + s.slice(1) : p + " " + s; }).join(","); }; return f(D1) + "{" + decl + "}@media (prefers-color-scheme:dark){" + f(D2) + "{" + decl + "}}"; };
  var F = "var(--ev-f,Barlow,system-ui,sans-serif)", PO = "Poppins,system-ui,sans-serif";
  var css = [
    /* ---------- cabeceras ---------- */
    "#view .fg-eyebrow{margin:6px 0 6px;font:600 .7rem/1.2 " + F + ";letter-spacing:.18em;text-transform:uppercase;color:var(--px-acc,#36255C)}#view .fg-h1{margin:0 0 6px!important;font:800 clamp(1.7rem,6vw,2.6rem)/1.06 " + PO + "!important;letter-spacing:-.035em!important;color:var(--gl-ink)!important}#view .fg-sub{margin:0 0 4px;font:400 1rem/1.5 " + F + ";color:var(--gl-mut)}",
    /* ---------- barras azul → oro ---------- */
    ".mp-pr u s,.mp .mp-av s,.rl-yo u s{background:linear-gradient(90deg,#2F6BFF,#FFD200)!important;box-shadow:0 0 12px rgba(255,210,0,.35)!important}",
    /* ---------- mapa: la estación actual, en oro con relieve ---------- */
    ".mp-n.sig .mp-hx .h1{fill:url(#mp-oro)!important}.mp-n.sig .mp-hx .h2{fill:#9C8000!important}.mp-n.sig .mp-hx .h4{stroke:rgba(255,255,255,.85)!important;stroke-width:1.6!important}.mp-n.sig .mp-hx .mp-ic{color:#23212C!important;--ico-a:#0B1F5C!important;filter:none!important}",
    ".mp-n.sig .mp-hx > svg{filter:drop-shadow(0 12px 14px var(--mp-sh)) drop-shadow(0 0 22px rgba(255,210,0,.5))!important}.mp-n.hec .mp-hx .h2{fill:#0F2E8F}.mp-hx .h2{transform:translate(0,8px)}",
    /* ---------- corrección ---------- */
    "#player .fg-fb{grid-template-columns:auto minmax(0,1fr)!important;column-gap:14px!important;align-items:start}#player .fg-fb > *{grid-column:2}#player .fg-fb > .fg-ico{grid-column:1;grid-row:1 / span 2;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;background:#12A150;color:#fff;box-shadow:0 4px 0 #0B7A3B}#player .fg-ico svg{width:26px;height:26px}",
    "#player.ej-mal .fg-ico,#player .pf.bad .fg-ico{background:#E5484D;box-shadow:0 4px 0 #B8363A}#player .fg-eti{font:600 .68rem/1.2 " + F + ";letter-spacing:.18em;text-transform:uppercase;color:var(--ej-mut,#5E5784);align-self:end}#player .fg-fb .ej-ver{font-size:1.7rem!important;align-self:start}",
    /* ---------- tienda ---------- */
    ".tn-i{padding:0 0 12px!important;overflow:hidden}.tn-i .tn-gato,.tn-i .tn-bg{width:100%!important;height:104px!important;border-radius:0!important;background-color:transparent;background-image:linear-gradient(145deg,rgba(47,107,255,.14),rgba(210,195,246,.1));display:grid;place-items:end center;margin-bottom:6px}.tn-i .tn-bg{background-size:cover!important;background-position:center!important}.tn-i .tn-gato svg{width:88px!important;height:88px!important}",
    ".tn-i .tn-pr{background:#0B1F5C!important;color:#fff!important;border-radius:9px!important;padding:6px 9px!important}.tn-i .tn-mio,.tn-i .tn-on,.tn-i .tn-pre{border-radius:9px!important;padding:6px 9px!important}",
    ".tn-tabs button[aria-selected=true]{background:#2F6BFF!important;color:#fff!important;box-shadow:0 3px 0 #1848BD!important}",
    /* ---------- botones con relieve ---------- */
    ".mp-go,#player .tx-sig,#player.ej .pf .pfa .btn:not(.line):not(.ej-porque):not(:disabled){box-shadow:0 3px 0 rgba(8,16,48,.35),0 14px 28px -16px rgba(47,107,255,.7)!important}.mp-go{box-shadow:0 3px 0 #BF9F00,0 14px 28px -16px rgba(255,210,0,.8)!important}",
    /* ---------- escritorio ---------- */
    "@media (min-width:1024px){" + [
      /* riel y panel lateral: más cuerpo, menos reflejo */
      "#px-rail{background:rgba(255,255,255,.76)!important}html.rl-on .ghome .gside{background:rgba(255,255,255,.72)!important}",
      /* la lección, un panel centrado sobre la app desenfocada */
      "#player{background:rgba(35,33,44,.5)!important;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);padding:22px max(24px,calc((100% - 900px)/2)) 22px!important}",
      "#player > .ph{border-radius:24px 24px 0 0!important;overflow:hidden;flex:none}html #player > *:not(.ph),html #player.ej > .pf,html #player.tx > .pf{background:rgba(250,249,255,.98)!important}html #player > .pf{border-radius:0 0 24px 24px!important;box-shadow:0 34px 80px -35px rgba(0,0,0,.6)!important;margin:0!important;max-width:none!important;padding-left:28px!important;padding-right:28px!important;padding-bottom:14px!important}",
      "#player > .ph,#player .phead,#player .ptop{padding-left:22px!important;padding-right:22px!important}#player .pbody .wrap{max-width:720px!important}",
      "html body #player.ej-fb > .pf{border-radius:0 0 24px 24px!important;margin:0!important;max-width:none!important;background:rgba(214,247,227,.99)!important}html body #player.ej-fb.ej-mal > .pf,html body #player.ej-fb > .pf.bad{background:rgba(255,226,226,.99)!important}",
      "#player .fg-fb{grid-template-columns:auto minmax(0,1fr)!important}"
    ].join("") + "}",
    "@media (min-width:1024px){" + oscuro("#px-rail", "background:rgba(24,24,36,.76)!important") + oscuro("&.rl-on .ghome .gside", "background:rgba(31,30,45,.62)!important") +
      oscuro("#player > *:not(.ph),#player.ej > .pf,#player.tx > .pf", "background:rgba(27,27,44,.98)!important") +
      oscuro("body #player.ej-fb > .pf", "background:rgba(18,58,40,.99)!important") + oscuro("body #player.ej-fb.ej-mal > .pf,body #player.ej-fb > .pf.bad", "background:rgba(74,24,32,.99)!important") + "}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "plx98"; st.textContent = css; document.head.appendChild(st);
  try { cabeceras(); } catch (e) {}
})();
