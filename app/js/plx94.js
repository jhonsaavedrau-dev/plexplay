/* PLEX PLAY 3.16.0 — Escritorio de verdad
   Jhon: «en PC las cosas se ven como en celular». Mismos diseños, pero pensados para pantalla ancha (desde 1024 px):
   - Lección: sin el riel encima (tapaba el contenido y los botones), columna de lectura centrada y los botones de
     abajo con ancho de botón, no de pantalla completa.
   - 1 vs 1: dos columnas, los duelos a la izquierda y la liga a la derecha, en vez de una pila centrada.
   - Tienda: tu gato y tu saldo fijos a la izquierda; a la derecha, las pestañas y la rejilla.
   - Perfil y curso: anchos de lectura, sin estirar todo de lado a lado.
   En el teléfono no cambia nada: todo va dentro de la consulta de ancho. */
(function(){
  "use strict";
  /* el fondo cubre toda la ventana aunque la vista sea corta */
  var css = "html.mk body{min-height:100vh;min-height:100dvh}" + "@media (min-width:1024px){" + [
    /* ---------- lección ---------- */
    "html:has(#player:not([hidden])) #px-rail{display:none!important}",
    "#player .pf{padding-left:max(18px,calc((100% - 760px)/2))!important;padding-right:max(18px,calc((100% - 760px)/2))!important}#player .pf .btn{min-height:50px}",
    "#player .phead,#player .ptop{padding-left:max(18px,calc((100% - 900px)/2))!important;padding-right:max(18px,calc((100% - 900px)/2))!important}",
    "#player .pbody .wrap{max-width:760px!important}#player .opt{transition:transform .15s,box-shadow .15s}#player .opt:hover{transform:translateY(-1px)}",
    /* ---------- 1 vs 1 ---------- */
    "html.rl-on:not(.rk-solo) #view:has(> .dv){display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,440px);gap:26px;align-items:start}",
    "html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv{margin:0}html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv .dv-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv .dv-c{min-height:190px;padding:20px}html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv .dv-c b{font-size:1.2rem}html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv .dv-c small{font-size:.9rem}html.rl-on:not(.rk-solo) #view:has(> .dv) > .dv .dv-c .ev-sello{width:60px;height:60px}",
    "html.rl-on:not(.rk-solo) #view:has(> .dv) > .rkv{position:sticky;top:70px;margin:0;max-width:none;padding:14px;border-radius:22px;background:linear-gradient(170deg,var(--gl-2a),var(--gl-2b));box-shadow:inset 0 0 0 1px var(--gl-bd2),inset 0 1px 0 var(--gl-bd),0 30px 60px -34px var(--gl-sh);-webkit-backdrop-filter:blur(26px) saturate(1.5);backdrop-filter:blur(26px) saturate(1.5)}",
    "html.rl-on.rk-solo #view > .rkv{max-width:760px;margin:0 auto}",
    ".dv-c{transition:transform .18s,box-shadow .18s}.dv-c:hover{transform:translateY(-3px);box-shadow:0 22px 34px -20px rgba(14,26,58,.7)}",
    /* ---------- Tienda ---------- */
    ".tn{max-width:1160px!important;grid-template-columns:280px minmax(0,1fr);column-gap:24px;align-items:start}",
    ".tn .tn-h{grid-column:1;grid-row:1 / span 6;position:sticky;top:70px;flex-direction:column;text-align:center;padding:24px 18px}.tn .tn-yo{width:170px;height:170px}.tn .tn-h > div{flex:none}.tn .tn-saldo{width:100%;grid-auto-flow:column;justify-content:center;align-items:center;gap:8px;padding:12px}",
    ".tn .tn-tabs,.tn .tn-g,.tn .tn-nota{grid-column:2}.tn .tn-tabs{max-width:420px}.tn .tn-g{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}.tn .tn-gato{width:92px;height:92px}",
    /* ---------- Perfil y curso: ancho de lectura ---------- */
    "html.rl-on #view > .lx2,html.rl-on #view > .gpath{max-width:1040px;margin-left:auto;margin-right:auto}",
    /* ---------- Perfil: tú a la izquierda (fijo), lo que haces a la derecha ---------- */
    "html.rl-on #view > .gperfil{max-width:1200px;margin:0 auto;display:grid!important;grid-template-columns:350px minmax(0,1fr);column-gap:24px;row-gap:14px;align-items:start}",
    "html.rl-on .gperfil > .prof-head{grid-column:1;grid-row:1;margin:0!important}html.rl-on .gperfil > .av-prog{grid-column:1;grid-row:2;margin:0!important}html.rl-on .gperfil > .plx-acad{grid-column:1;grid-row:3;margin:0!important;display:block!important}",
    "html.rl-on .gperfil > .ptabs{grid-column:2;grid-row:1;align-self:start;margin:0!important}html.rl-on .gperfil > .ptab-body{grid-column:2;grid-row:1 / span 6;margin:68px 0 0!important;align-self:start}html.rl-on .gperfil > :not(.prof-head):not(.av-prog):not(.plx-acad):not(.ptabs):not(.ptab-body){grid-column:1 / -1}",
    "html.rl-on .gperfil .ph-stats{grid-template-columns:repeat(2,minmax(0,1fr))!important;max-width:none!important;width:100%}html.rl-on .gperfil .av-pg{grid-template-columns:repeat(2,minmax(0,1fr))!important}html.rl-on .gperfil .plx-acad .pa-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important;margin-top:12px}html.rl-on .gperfil .plx-acad .pa-h{flex-wrap:wrap}",
    /* la cabecera es transparente en escritorio: si se queda fija, las cápsulas flotan encima del contenido al bajar */
    "html.rl-on.mk body header#topbar.top{position:relative!important}html.rl-on .ghome .gside,html.rl-on:not(.rk-solo) #view:has(> .dv) > .rkv,.tn .tn-h{top:16px!important}html.rl-on .gperfil > .prof-head{position:static}",
    /* ---------- PLEX Quiz ---------- */
    ".kq .kq-top,.kq .kq-body{max-width:1120px!important}.kq .kq-body{grid-template-columns:minmax(0,380px) minmax(0,1fr)!important;column-gap:30px;align-items:start;align-content:start}",
    ".kq .kq-body > .kq-hero{grid-column:1;grid-row:1;text-align:left}.kq .kq-body > .kq-hero .kq-hero-fig{margin-left:0}.kq .kq-body > .kq-pin{grid-column:1;grid-row:2}.kq .kq-body > .kq-stats{grid-column:1;grid-row:3;grid-template-columns:repeat(2,minmax(0,1fr))!important}",
    ".kq .kq-body > .kq-modos{grid-column:2;grid-row:1 / span 3;align-self:start}.kq .kq-body > .kq-modos .kq-modo{min-height:86px;transition:transform .18s,filter .18s}.kq .kq-body > .kq-modos .kq-modo:hover{transform:translateX(4px);filter:brightness(1.08)}.kq .kq-body > :not(.kq-hero):not(.kq-pin):not(.kq-stats):not(.kq-modos){grid-column:1 / -1}",
    ".kq .kq-q,.kq .kq-ops{max-width:1000px!important}.kq .kq-ops .kq-op{min-height:112px;font-size:1.25rem}.kq .kq-card{font-size:1.5rem;padding:30px!important}.kq .kq-ops .kq-op:hover{filter:brightness(1.08)}",
    /* ---------- portada de un juego: el juego a la izquierda, cómo se juega a la derecha ---------- */
    "#plxg .plxg-wrap.pt{max-width:1080px!important;display:grid!important;grid-template-columns:minmax(0,440px) minmax(0,1fr);column-gap:28px;row-gap:14px;align-items:start;align-content:start}",
    "#plxg .plxg-wrap.pt > .hb-top{grid-column:1 / -1;grid-row:1}#plxg .plxg-wrap.pt > .pt5-hero{grid-column:1;grid-row:2 / span 8;align-self:start;height:340px;margin:0!important}",
    "#plxg .plxg-wrap.pt > .pt-go{grid-column:1;grid-row:2 / span 8;align-self:start;position:static!important;margin:354px 0 0!important;width:100%}#plxg .plxg-wrap.pt > :not(.hb-top):not(.pt5-hero):not(.pt-go){grid-column:2;margin:0!important}",
    /* ---------- partida: el marcador acompaña al campo, no se estira de lado a lado ---------- */
    "#plxg.plxg-juego .plxg-hud{left:max(10px,calc(50% - 420px))!important;right:max(10px,calc(50% - 420px))!important;width:auto!important}"
  ].join("") + "}";
  var st = document.createElement("style"); st.id = "plx94"; st.textContent = css; document.head.appendChild(st);
})();
