/* PLEX PLAY 4.111 — Más liviana al tocar y al desplazarse
   Pedido de Jhon (25-oct-2026): «la app se siente lenta y pesada al dar clic en paneles o lecciones».
   - El mapa de Inicio mide unos 8 400 px y tiene 17 unidades con sus nodos e imágenes: el navegador las dibujaba todas
     en cada repintada. Con content-visibility las que no están en pantalla no se dibujan hasta que llegas a ellas
     (contain-intrinsic-size guarda su alto para que la barra de desplazamiento no salte).
   - Lo mismo con las secciones largas de la guía y las listas de lecciones.
   (Las otras dos partes del arreglo están en pre.js —los vigilantes de la página ignoran [data-mo-no]— y en plx116,
   donde el paso entre pestañas bajó de 440 a 300 ms.) Solo CSS, en la capa pz. */
(function(){
  "use strict";
  var st = document.createElement("style"); st.id = "plx125";
  st.textContent = "@layer pz{" +
    "#view .p5-ruta > .p5-u{content-visibility:auto;contain-intrinsic-size:auto 440px}" +
    "#view .ix-sec,#view .av-mapa{content-visibility:auto;contain-intrinsic-size:auto 600px}" +
    "}";
  document.head.appendChild(st);
})();
