/* PLEX PLAY 1.12 — Perfil académico: semestre visible y fácil de elegir
   4.28: es una sección más del Perfil (etiqueta + lista, como «Resumen» o «Logros»), justo debajo del resumen. El
   semestre se elige en una pantalla propia con los diez semestres y el curso de francés de cada uno (antes: una
   rejilla de diez números sin contexto). El aspecto lo ponen las piezas globales (kit.js) y plx105. */
(function(){
  "use strict";
  if(typeof render!=="function"||typeof TRACKS==="undefined") return;
  var N=10;
  var IC_OK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var IC_SIGUE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  function courses(n){ return TRACKS.filter(function(t){ return +t.semN===+n; }); }
  function nombres(n){ var cs=courses(n); return cs.length?cs.map(function(t){ return gh(t.label); }).join(" · "):"Sin curso de francés en la app"; }
  function card(){
    var G=gEnsure(), g=G.grp||"", cs=g?courses(g):[];
    var h='<section class="plx-acad'+(g?"":" empty")+'" aria-label="Perfil académico"><h2 class="p5-pf-h">Perfil académico</h2>';
    if(!g) return h+'<div class="pz-card pa-vacio"><img src="img/ic2/birrete.webp" alt="" width="48" height="48"><div class="pa-vt"><b>¿En qué semestre estás?</b>'+
      '<p>Así apareces en la liga de tu semestre y tu docente ve tu avance.</p></div><button type="button" class="pz-btn pz-btn--oro pz-btn--ancho" data-pa-sem>Elegir mi semestre</button></div></section>';
    h+='<div class="pz-lista"><button type="button" class="pz-fila pa-sem" data-pa-sem><span class="pz-fila__ic pa-num" aria-hidden="true">'+g+'</span>'+
      '<span class="pz-fila__tx"><b>Semestre '+g+'</b><small>Licenciatura en Lenguas Extranjeras</small></span><span class="pz-fila__fin pz-fila__fin--accion">Cambiar</span></button>';
    h+=cs.map(function(t){ return '<button type="button" class="pz-fila pa-course" data-track="'+t.id+'"><span class="pz-fila__ic pz-fila__ic--oro"><img src="img/ic2/libro.webp" alt=""></span>'+
      '<span class="pz-fila__tx"><b>'+gh(t.label)+'</b><small>Tu curso de este semestre</small></span><span class="pz-fila__fin" aria-hidden="true">'+IC_SIGUE+"</span></button>"; }).join("");
    return h+"</div></section>";
  }
  /* pantalla para elegir: los diez semestres con su curso; el elegido lleva la marca */
  function eleccion(){
    var G=gEnsure(), g=String(G.grp||""), filas="";
    for(var i=1;i<=N;i++){ var el=String(i)===g;
      filas+='<button type="button" class="pz-fila" role="radio" aria-checked="'+el+'" data-pgrp="'+i+'"><span class="pz-fila__ic pa-num" aria-hidden="true">'+i+'</span>'+
        '<span class="pz-fila__tx"><b>Semestre '+i+'</b><small>'+nombres(i)+'</small></span><span class="pz-fila__fin" aria-hidden="true">'+(el?IC_OK:"")+"</span></button>"; }
    return '<div class="pa-sel"><p class="pa-sel-q">Licenciatura en Lenguas Extranjeras. Elige el semestre que cursas: así apareces en la liga de tu semestre y tu docente ve tu avance.</p>'+
      '<div class="pz-lista" role="radiogroup" aria-label="Semestre">'+filas+"</div>"+
      (g?'<button type="button" class="pz-btn pz-btn--texto pa-quitar" data-pgrp="">Quitar semestre</button>':"")+"</div>";
  }
  function abrir(){
    if(window.PLX_UI&&PLX_UI.pantalla) PLX_UI.pantalla(eleccion(),{titulo:"Tu semestre",clase:"pa-pant"});
    else { var v=document.getElementById("view"); v&&v.insertAdjacentHTML("afterbegin",eleccion()); }
    setTimeout(function(){ var b=document.querySelector('.pa-sel [aria-checked="true"]')||document.querySelector(".pa-sel [data-pgrp]"); b&&b.focus({preventScroll:true}); },60);
  }
  function inject(){
    if(view!=="perfil") return;
    var v=document.getElementById("view"), head=v&&v.querySelector(".gperfil .prof-head"); if(!head) return;
    /* 3.9.0: la tarjeta se cambia en su sitio (antes se quitaba y se ponía pegada a la cabecera, y en cada visita
       cambiaba de lugar con «Tu progreso»: la pantalla saltaba) */
    var old=v.querySelector(".plx-acad");
    if(old){ old.insertAdjacentHTML("afterend",card()); old.remove(); }
    else (v.querySelector(".gperfil .av-prog")||head).insertAdjacentHTML("afterend",card());
    var G=gEnsure(), sub=head.querySelector(".ph-sub");
    if(sub&&G.grp&&!sub.querySelector(".pa-chip")) sub.insertAdjacentHTML("beforeend",' <span class="pa-chip">· Semestre '+G.grp+"</span>");
  }
  var _rd=render; render=function(){ var r=_rd.apply(this,arguments); try{ inject(); }catch(e){} return r; };
  document.addEventListener("click",function(e){
    if(e.target.closest&&e.target.closest("[data-pa-sem]")){ e.preventDefault(); abrir(); return; }
    var b=e.target.closest&&e.target.closest("[data-pgrp]"); if(!b) return;
    e.preventDefault();
    var G=gEnsure(), v=b.dataset.pgrp, enPant=!!b.closest(".pa-sel");
    if(enPant) try{ PLX_UI.cerrar(); }catch(x){}
    if(String(G.grp||"")===v) return;
    G.grp=v; save(!0); try{ typeof gPush==="function"&&gPush(!0); }catch(x){}
    try{ typeof SFX!=="undefined"&&SFX.ok&&SFX.ok(); }catch(x){}
    toast(v?"Semestre "+v+" guardado":"Semestre quitado"); render();
  });
  /* el curso del semestre abre ese curso en el recorrido */
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest(".pa-course"); if(!b) return;
    e.preventDefault(); e.stopPropagation();
    try{ track=b.dataset.track; lsSet("cr-track",track); }catch(x){}
    go("parcours");
  },true);
  window.PLX_SEMESTRE={ abrir:abrir };
})();
