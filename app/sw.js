/* PLEX PLAY — service worker (v1.12.0) */
const CORE="pc-core-4.99.0", AUDIO="pc-audio-1", FOTOS="pc-fotos-2";
const PRECACHE=["./", "index.html", "fonts/figtree-latin.woff2", "fonts/figtree-latin-ext.woff2", "fonts/bricolage-latin.woff2", "fonts/bricolage-latin-ext.woff2", "fonts/barlow-300.woff2", "fonts/barlow-400.woff2", "fonts/barlow-500.woff2", "fonts/barlow-600.woff2", "fonts/barlow-700.woff2", "cursos.js", "explica.js", "teoria.js", "audio2.js", "audio3.js", "audio4.js", "audio5.js", "extra.js", "js/plx18.js", "js/plx19.js", "js/plx20.js", "js/plx21.js", "js/plx22.js", "js/plx23.js", "js/plx24.js", "js/plx25.js", "js/plx26.js", "js/plx27.js", "js/plx28.js", "js/plx29.js", "js/plx30.js", "js/plx31.js", "js/plx32.js", "js/plx33.js", "js/plx34.js", "js/plx35.js", "js/plx36.js", "js/plx37.js", "js/plx38.js", "js/plx39.js", "js/plx40.js", "js/plx41.js", "js/plx42.js", "js/plx43.js", "js/plx44.js", "js/plx45.js", "js/plx46.js", "js/plx47.js", "js/plx48.js", "js/plx49.js", "js/plx50.js", "js/plx51.js", "js/plx52.js", "js/plx53.js", "js/plx54.js", "js/plx55.js", "js/plx56.js", "js/plx57.js", "js/plx58.js", "js/plx59.js", "js/plx60.js", "js/plx61.js", "js/plx62.js", "js/plx63.js", "js/plx64.js", "js/plx65.js", "js/plx66.js", "js/plx67.js", "js/plx68.js", "banco-a1.js", "img/runner/basura.webp#a181218c", "img/runner/caja.webp#a3fab223", "img/runner/celebra.webp#96ddccb4", "img/runner/charco.webp#1934fd96", "img/runner/cono.webp#9645405a", "img/runner/corre.webp#e6ab629a", "img/runner/duda.webp#f68477cb", "img/runner/estrella.webp#9887caf2", "img/runner/gema.webp#5ee871dd", "img/runner/jardinera.webp#6405d61a", "img/runner/maletas.webp#ff8b7873", "img/runner/mareo.webp#47be1a5a", "img/runner/meta.webp#95f4befc", "img/runner/moneda.webp#666a880d", "img/runner/paloma.webp#290973ef", "img/runner/paris-tira.webp#13001242", "img/runner/salta.webp#915cdb49", "img/runner/valla.webp#379bbd2d", "img/arcade/bb-logo.webp#cb0c57cb", "img/arcade/heroe.webp#d35831cd", "img/arcade/jefe-ataque.webp#73fb32a4", "img/arcade/jefe-derrota.webp#37501284", "img/arcade/jefe-mago.webp#f65b95cb", "img/arcade/jefe-noir.webp#408dde5d", "img/arcade/jefe-rey.webp#7a938783", "vocab.js", "js/pre.js", "carnet.html", "config.js", "backend.js", "vendor/supabase.js", "manifest.webmanifest", "privacy.html", "terminos.html", "icons/m4-icon-192.png#9c82b2ab", "icons/m4-icon-512.png#06a7e166", "icons/m4-maskable-512.png#e7e730a4", "icons/m4-apple-touch-icon.png#e6e9f204", "icons/m4-favicon-32.png#2b887d60", "img/atras.webp#d2e9cb4e", "img/b-bronce.webp#7d2bfcfc", "img/b-diamante.webp#6c68ecfd", "img/b-legendario.webp#ca881a04", "img/b-oro.webp#ea7f7dd7", "img/b-plata.webp#18f245f5", "img/bg-biblioteca.webp#64eeda04", "img/bg-cafe.webp#8ea29a76", "img/bg-montana.webp#8cdbe98b", "img/bg-noche.webp#d7f7d781", "img/bg-paris.webp#479c7c94", "img/bg-playa.webp#960ae8a3", "img/bg-universidad.webp#53ca0b14", "img/bloqueado.webp#3d139dbd", "img/calendario.webp#88d6d417", "img/card-dia.webp#a81ac3be", "img/card-noche.webp#7e499831", "img/completado.webp#d24c9d00", "img/conversacion.webp#d1e18cde", "img/crown.webp#18d1608b", "img/d-bench.webp#a1a60c6b", "img/d-bridge.webp#c12f2cb1", "img/d-cloud.webp#5b8e6ab5", "img/d-flowers.webp#14545708", "img/d-lamp.webp#10b4caf2", "img/d-leaves.webp#6993ab49", "img/d-sign.webp#1bc66fac", "img/d-sparkle.webp#8dc34576", "img/d-trees.webp#833f27c2", "img/dificil.webp#319ee65e", "img/encurso.webp#9b3893da", "img/escritura.webp#bf6a5347", "img/escucha.webp#2dfeddf6", "img/escudo.webp#3d928bdd", "img/estrella.webp#3c639675", "img/facil.webp#826a2eca", "img/favorito.webp#ea1f5c9a", "img/flame.webp#24cbebeb", "img/gear.webp#33d49d68", "img/gem.webp#766db713", "img/gramatica.webp#eecf8af3", "img/guardar.webp#5f1221bc", "img/hito.webp#51c861fb", "img/home.webp#5b821f9a", "img/lecciones.webp#d1063db9", "img/lectura.webp#bd4c3242", "img/logro.webp#37ffcde3", "img/m-actualidad.webp#266389df", "img/m-cafe.webp#ee33a973", "img/m-cultura.webp#fbeb93b5", "img/m-francia.webp#29007ac8", "img/m-inicio.webp#4957feec", "img/m-trabajo.webp#448b889f", "img/m-viajes.webp#d287df1f", "img/m4-logo.webp#f3f8c198", "img/mascota.webp#c1e84a58", "img/media.webp#158655df", "img/music.webp#337dd3a2", "img/mz-curioso.webp#1b978326", "img/mz-duerme.webp#1a5e669a", "img/mz-feliz.webp#40ed1e23", "img/mz-gafas.webp#38549825", "img/mz-hero.webp#4ccdd8a9", "img/mz-hola.webp#1d87d1c3", "img/mz-juega.webp#e9ab158a", "img/mz-lado.webp#b7eed57b", "img/mz-vamos.webp#b14cb15b", "img/pausa.webp#9540731b", "img/perfil.webp#cfc14213", "img/regalo.webp#69d90cd3", "img/repetir.webp#44c6f983", "img/reto.webp#39b97bc2", "img/retos.webp#0b279ae5", "img/siguiente.webp#ffe52739", "img/stats.webp#6a4616e7", "img/c-paris.webp#127afa42", "img/c-cafe.webp#7afe1464", "img/c-fonetica.webp#39f2084d", "img/c-calle.webp#c17952f8", "img/c-playa.webp#be5a5d84", "img/c-montana.webp#b94c6f65", "img/c-bandera.webp#eebff327", "img/c-libros.webp#8e118803", "img/c-noche.webp#fc334ada", "img/c-teatro.webp#527d2b99", "img/th-acentos.webp#ce9dc172", "img/ilus/c-paris.webp#f59f7721", "img/ilus/c-cafe.webp#237a33c7", "img/ilus/c-fonetica.webp#820a58bb", "img/ilus/c-calle.webp#d6f1bdbf", "img/ilus/c-playa.webp#47388e38", "img/ilus/c-montana.webp#adf900c8", "img/ilus/c-bandera.webp#e9983d8a", "img/ilus/c-libros.webp#9d1b58e4", "img/ilus/c-noche.webp#7c190b1b", "img/ilus/c-teatro.webp#280e5e5e", "img/th-fonetica.webp#347e28e0", "img/th-fundamentos.webp#2eceb3d4", "img/th-literatura.webp#20aeed3e", "img/tienda.webp#c43fd45e", "img/vida-off.webp#a8377973", "img/vida.webp#8ec34501", "js/plx69.js", "img/ic/audifonos.webp#a4b678c8", "img/ic/baguette.webp#8d7ce77d", "img/ic/bandera.webp#085f50ae", "img/ic/birrete.webp#3506375c", "img/ic/boina.webp#9d4a1c0b", "img/ic/bombilla.webp#5670c296", "img/ic/cafe.webp#b17d43ae", "img/ic/corazon.webp#2f901a81", "img/ic/corona.webp#7ddf328e", "img/ic/croissant.webp#581d22d6", "img/ic/estrella.webp#8cd31619", "img/ic/flor.webp#5081ca66", "img/ic/globo.webp#b29d5dee", "img/ic/lapiz.webp#f1452f11", "img/ic/laptop.webp#3d06777e", "img/ic/libro.webp#ca932d21", "img/ic/libros.webp#ffb6afe6", "img/ic/llama.webp#10e28a10", "img/ic/luna.webp#97536936", "img/ic/mando.webp#d5908dec", "img/ic/microfono.webp#3773ffca", "img/ic/movil.webp#4e93bcce", "img/ic/nota.webp#6bd70906", "img/ic/pata.webp#7f096591", "img/ic/pergamino.webp#4b2df9cb", "img/ic/pregunta.webp#9044a93c", "img/ic/regalo.webp#16e525e8", "img/ic/reloj-arena.webp#3b7f5714", "img/ic/torre-eiffel.webp#d29491e5", "img/ic/trofeo.webp#4174b463", "js/plx70.js", "js/plx71.js", "img/mz/alerta.webp#fff6b815", "img/mz/bandera.webp#6bafcb6a", "img/mz/celebra.webp#ae30dada", "img/mz/corre.webp#ea72dbf3", "img/mz/croissant-boina.webp#eb3d41fe", "img/mz/dormido.webp#81cad664", "img/mz/duda.webp#d3ff9a32", "img/mz/escribe.webp#804c90e3", "img/mz/examen-susto.webp#4a1fbac1", "img/mz/feliz.webp#9ae67999", "img/mz/graduado.webp#57b2869b", "img/mz/guino-pulgar.webp#e815716f", "img/mz/lupa.webp#f30014af", "img/mz/ovillo.webp#8147a5eb", "img/mz/pensando.webp#1b27a23e", "img/mz/pulgar.webp#a2d5f488", "img/mz/racha-fuego.webp#497159be", "img/mz/saluda.webp#044370e7", "img/mz/senala-arriba.webp#b824dea4", "img/mz/sentado.webp#0e6b652f", "img/mz/sorpresa.webp#46ad1449", "img/mz/taza-cafe.webp#c83e3cb1", "img/mz/trofeo.webp#66dbee04", "img/mz/tumbado-corazon.webp#46588ea4", "js/plx72.js", "js/plx73.js", "js/plx74.js", "js/plx75.js", "js/plx76.js", "js/plx77.js", "js/plx78.js", "js/plx79.js", "js/plx80.js", "js/plx81.js", "js/plx82.js", "js/plx83.js", "js/plx84.js", "js/plx85.js", "js/plx86.js", "js/plx87.js", "js/plx88.js", "js/plx89.js", "js/plx90.js", "js/plx91.js", "js/plx92.js", "js/plx93.js", "js/plx94.js", "js/plx95.js", "js/plx96.js", "js/plx97.js", "js/plx98.js", "js/plx99.js", "js/plx100.js", "js/plx101.js", "img/mz2/alerta.webp#7587f244", "img/mz2/bandera.webp#29b820b2", "img/mz2/celebra.webp#57b84e31", "img/mz2/corre.webp#b1d028ef", "img/mz2/croissant-boina.webp#07c35895", "img/mz2/dormido.webp#a201d566", "img/mz2/duda.webp#fa0744a8", "img/mz2/escribe.webp#a920ea90", "img/mz2/examen-susto.webp#70faf5b7", "img/mz2/feliz.webp#e8c3fbd5", "img/mz2/graduado.webp#1613cf01", "img/mz2/guino-pulgar.webp#fd7cbddc", "img/mz2/lupa.webp#d7d8f671", "img/mz2/mascota.webp#f8a60f62", "img/mz2/mz-curioso.webp#e713741b", "img/mz2/mz-duerme.webp#1afca728", "img/mz2/mz-feliz.webp#e1684c1e", "img/mz2/mz-gafas.webp#57da5f28", "img/mz2/mz-hero.webp#25ea04b7", "img/mz2/mz-hola.webp#93bc5146", "img/mz2/mz-juega.webp#c0abcd08", "img/mz2/mz-lado.webp#00e8f5ed", "img/mz2/mz-vamos.webp#a6babe48", "img/mz2/ovillo.webp#e207ba70", "img/mz2/pensando.webp#fa0744a8", "img/mz2/pulgar.webp#a6c07f3e", "img/mz2/racha-fuego.webp#67b695ff", "img/mz2/saluda.webp#fd7cbddc", "img/mz2/senala-arriba.webp#a6c07f3e", "img/mz2/sentado.webp#8395976b", "img/mz2/sorpresa.webp#7587f244", "img/mz2/taza-cafe.webp#cba4b510", "img/mz2/trofeo.webp#1613cf01", "img/mz2/tumbado-corazon.webp#67ba6e35", "img/ic2/audifonos.webp#cd07ee17", "img/ic2/baguette.webp#510347e0", "img/ic2/bandera.webp#d35722a0", "img/ic2/birrete.webp#f1122bae", "img/ic2/boina.webp#4e976d0a", "img/ic2/bolsa.webp#77c0b42c", "img/ic2/bombilla.webp#8db21ca2", "img/ic2/cafe.webp#9dd1c3ac", "img/ic2/candado.webp#a2f5f104", "img/ic2/cofre-abierto.webp#ff477f16", "img/ic2/cofre.webp#cd684bb1", "img/ic2/corazon.webp#ff6295b6", "img/ic2/corona.webp#51739552", "img/ic2/croissant.webp#5920e355", "img/ic2/engranaje.webp#3f984a54", "img/ic2/espadas.webp#c4ce7fac", "img/ic2/estrella.webp#5c4db872", "img/ic2/flor.webp#387a0cd5", "img/ic2/globo.webp#6cfc0054", "img/ic2/lapiz.webp#8e9ee993", "img/ic2/laptop.webp#3b91067e", "img/ic2/libro.webp#22705515", "img/ic2/libros.webp#82ba4903", "img/ic2/llama.webp#28a1c360", "img/ic2/luna.webp#da76ac08", "img/ic2/mando.webp#fbee1be4", "img/ic2/microfono.webp#4945a4f2", "img/ic2/moneda.webp#f190c252", "img/ic2/movil.webp#f46ec02d", "img/ic2/nota.webp#29929f3a", "img/ic2/pata.webp#553289cc", "img/ic2/pergamino.webp#81b8d762", "img/ic2/pregunta.webp#a93c197f", "img/ic2/rayo.webp#c43e5dd8", "img/ic2/regalo.webp#4f9d627b", "img/ic2/reloj-arena.webp#47dc4f4f", "img/ic2/torre-eiffel.webp#faed8341", "img/ic2/trofeo.webp#2abbdfee", "img/mz3/alerta.webp#7587f244", "img/mz3/audifonos.webp#c419aecc", "img/mz3/bandera.webp#2ced3901", "img/mz3/celebra.webp#57b84e31", "img/mz3/corre.webp#85f58c8e", "img/mz3/croissant-boina.webp#07c35895", "img/mz3/dormido.webp#c36c4ec6", "img/mz3/duda.webp#cffd9519", "img/mz3/enojado.webp#b9fbc3f3", "img/mz3/escribe.webp#05ae6c17", "img/mz3/examen-susto.webp#86478ff9", "img/mz3/feliz.webp#e8c3fbd5", "img/mz3/graduado.webp#813f950c", "img/mz3/guino-pulgar.webp#57d6dff4", "img/mz3/llama.webp#9d1d33de", "img/mz3/lupa.webp#8dece645", "img/mz3/mascota.webp#f8a60f62", "img/mz3/mz-curioso.webp#8dece645", "img/mz3/mz-duerme.webp#c36c4ec6", "img/mz3/mz-feliz.webp#e1684c1e", "img/mz3/mz-gafas.webp#57da5f28", "img/mz3/mz-hero.webp#25ea04b7", "img/mz3/mz-hola.webp#5940b346", "img/mz3/mz-juega.webp#c0abcd08", "img/mz3/mz-lado.webp#00e8f5ed", "img/mz3/mz-vamos.webp#85f58c8e", "img/mz3/ovillo.webp#e207ba70", "img/mz3/pensando.webp#cffd9519", "img/mz3/pulgar.webp#57d6dff4", "img/mz3/racha-fuego.webp#67b695ff", "img/mz3/saluda.webp#5940b346", "img/mz3/senala-arriba.webp#57d6dff4", "img/mz3/sentado.webp#8395976b", "img/mz3/sorpresa.webp#7587f244", "img/mz3/taza-cafe.webp#05ae6c17", "img/mz3/triste.webp#86478ff9", "img/mz3/trofeo.webp#813f950c", "img/mz3/tumbado-corazon.webp#a9f205b8", "img/juegos/ah.webp#58335aed", "img/juegos/bb.webp#a8c2dd65", "img/juegos/bc.webp#5057b66c", "img/juegos/cc.webp#60bd49a1", "img/juegos/cm.webp#23831b48", "img/juegos/ff.webp#433877f3", "img/juegos/gr.webp#9884d4f7", "img/juegos/la.webp#2f646756", "img/juegos/ld.webp#368847aa", "img/juegos/mc.webp#b614ff43", "img/juegos/mr.webp#0051788d", "img/juegos/pb.webp#7c5ce4d3", "img/juegos/rq.webp#3dd4ddb4", "img/juegos/sb.webp#62fc484f", "img/juegos/sr.webp#c0fc0848", "img/juegos/tc.webp#0aa53acb", "img/juegos/tw.webp#2a932814", "img/juegos/vd.webp#75a1ecf4", "img/juegos/wb.webp#12b2fa37", "img/juegos/wc.webp#6c9d5f24", "img/quiz/clasico.webp#2e6d3764", "img/quiz/contrarreloj.webp#f84e8edb", "img/quiz/duelo.webp#1ec09596", "img/quiz/f0.webp#02d6448a", "img/quiz/f1.webp#faa02d50", "img/quiz/f2.webp#489d5213", "img/quiz/f3.webp#0ba15570", "img/quiz/grupo.webp#b04d268f", "img/quiz/megafono.webp#deb2758b", "img/quiz/podio.webp#87c1b542", "img/quiz/vf.webp#360d1efe", "img/logros/l00.webp#4f28ef3d", "img/logros/l01.webp#6a78aa3f", "img/logros/l02.webp#559a9126", "img/logros/l03.webp#6643101a", "img/logros/l04.webp#366bf7ab", "img/logros/l05.webp#7def4d9d", "img/logros/l06.webp#05f88338", "img/logros/l07.webp#2db5ed6a", "img/logros/l08.webp#97d8bd85", "img/logros/l09.webp#7d2b403b", "img/logros/l10.webp#933e8be8", "img/logros/l11.webp#328b7d8c", "img/logros/l12.webp#5ced8732", "img/logros/l13.webp#aa7b7877", "img/logros/l14.webp#c0ff1562", "img/logros/l15.webp#16964872", "img/logros/l16.webp#e3d6f683", "img/logros/l17.webp#f425087d", "img/logros/l18.webp#2f8157e9", "img/mzj/ah.webp#4b441248", "img/mzj/bb.webp#e2991059", "img/mzj/bc.webp#32b068cd", "img/mzj/cc.webp#30a6db48", "img/mzj/cm.webp#34fc9bdc", "img/mzj/ff.webp#2c6cb606", "img/mzj/gr.webp#cfa3c7fe", "img/mzj/la.webp#226d3962", "img/mzj/ld.webp#1b41e657", "img/mzj/mc.webp#d4ed0926", "img/mzj/mr.webp#ad2067ca", "img/mzj/pb.webp#1fd95528", "img/mzj/rq.webp#8ec90ffc", "img/mzj/sb.webp#08472062", "img/mzj/sr.webp#b0b89121", "img/mzj/tc.webp#36d2f3d1", "img/mzj/tw.webp#7dfc389e", "img/mzj/vd.webp#4919dac7", "img/mzj/wb.webp#d168a3e6", "img/mzj/wc.webp#86fd03da", "img/ic2/amigos.webp#67cf9982", "img/ic2/medalla.webp#e629486a", "img/ic2/mundo.webp#6c55820f", "img/nodos/bloqueado.webp#21b89e86", "img/nodos/cofre-abierto.webp#5d5a9cc0", "img/nodos/cofre.webp#f5fcb778", "img/nodos/conjugacion.webp#081c654e", "img/nodos/escritura.webp#f4d0b8b4", "img/nodos/escucha.webp#14b4e8bb", "img/nodos/examen.webp#090c6c7c", "img/nodos/gramatica.webp#a0615b13", "img/nodos/habla.webp#0e295b88", "img/nodos/hecho.webp#e7a4a225", "img/nodos/lectura.webp#34b1dd5d", "img/nodos/proyecto.webp#9e052419", "img/nodos/vocabulario.webp#4bff275c", "img/mzp/arte.webp#544ddd06", "img/mzp/canta.webp#72a9be39", "img/mzp/ciencia.webp#a94e16bb", "img/mzp/detective.webp#e95d72a4", "img/mzp/digital.webp#1a97c80c", "img/mzp/entrenador.webp#33c80246", "img/mzp/escucha.webp#2c5fc770", "img/mzp/estudia.webp#ddd07b65", "img/mzp/explora.webp#2f8039e0", "img/mzp/frances.webp#e7122223", "img/mzp/graduado.webp#f3222011", "img/mzp/idea.webp#2ec94a41", "img/mzp/idiomas.webp#b90bc0a6", "img/mzp/libros.webp#ba88da82", "img/mzp/nota.webp#c4c8770d", "img/mzp/pizarra.webp#7a18721a", "img/mzp/presenta.webp#50ececf5", "img/mzp/profesor.webp#e2a9e3bb", "img/mzp/rey.webp#73ffb24a", "img/mzp/tarea.webp#7c409fbc", "js/plx102.js", "js/plx103.js", "js/plx104.js", "js/kit.js", "js/plx105.js", "js/plx106.js", "js/plx107.js", "js/plx108.js", "js/plx109.js", "js/plx110.js", "js/plx111.js", "img/juegos/ty.webp#2d2b82b5", "img/mzj/ty.webp#31aadc7f", "snd/cream/press-BACKSPACE.mp3#e195a2b1", "snd/cream/press-ENTER.mp3#6e38ecdb", "snd/cream/press-GENERIC_R0.mp3#ab355b98", "snd/cream/press-GENERIC_R1.mp3#d6c302bb", "snd/cream/press-GENERIC_R2.mp3#a7e5f709", "snd/cream/press-GENERIC_R3.mp3#7f8025d6", "snd/cream/press-GENERIC_R4.mp3#6131527c", "snd/cream/press-SPACE.mp3#ad9636ff", "snd/cream/release-BACKSPACE.mp3#d1b99872", "snd/cream/release-ENTER.mp3#a953b51a", "snd/cream/release-GENERIC.mp3#06909180", "snd/cream/release-SPACE.mp3#01fc7461", "js/plx112.js", "js/plx113.js", "js/plx114.js", "js/plx116.js", "js/plx117.js", "js/plx118.js", "img/m2d/asomandose.webp#7ce4c717", "img/m2d/campeon.webp#e1628be9", "img/m2d/celebrar.webp#8c82995a", "img/m2d/corazones.webp#deace5ba", "img/m2d/correr.webp#7d8f7324", "img/m2d/croissant.webp#780e5378", "img/m2d/dormir.webp#4b291d67", "img/m2d/duelo.webp#a9c43ef5", "img/m2d/duelo_rival.webp#b532949f", "img/m2d/duelo_yo.webp#5345e1e0", "img/m2d/en_guardia.webp#f9b2a374", "img/m2d/enojado.webp#ab747ab2", "img/m2d/escribiendo.webp#8dc69804", "img/m2d/estrella.webp#623331ce", "img/m2d/estudiar.webp#137ca993", "img/m2d/facepalm.webp#a9122dff", "img/m2d/lista.webp#86be14a7", "img/m2d/pensativo.webp#b406f393", "img/m2d/pulgar.webp#64eb3255", "img/m2d/pulgar_abajo.webp#7f00b120", "img/m2d/reloj.webp#1ed309e3", "img/m2d/saludar.webp#ba6cdc1e", "img/m2d/senalar.webp#1674688a", "img/m2d/sorpresa.webp#4d6956b7", "img/m2d/triste.webp#fc5d4404", "img/m2d/trofeo.webp#517632ff", "js/plx119.js", "img/m2d/audifonos.webp#5609f42d", "img/m2d/cartel.webp#300b8742", "img/m2d/laptop.webp#330154fe", "js/plx120.js", "js/plx121.js", "ensena.js", "audio-ensena.js", "js/plx122.js", "js/plx123.js", "img/m2d/agobiado.webp#c7a22dfe", "img/m2d/alerta.webp#c82e09e1", "img/m2d/birrete.webp#372c0d8a", "img/m2d/confundido.webp#fc764f00", "img/m2d/explica.webp#c02510cb", "img/m2d/laptop_estudia.webp#8a426060", "img/m2d/lupa.webp#acab81d3", "img/m2d/negando.webp#90ceaa41", "img/m2d/puntero.webp#3fb7998f"];
/* 4.47: instalación liviana. Antes cada versión volvía a bajar los ~14 MB del PRECACHE y lanzaba ~480 descargas a la vez
   (en Android, con datos, la app se arrastraba los primeros minutos) y guardaba los js sin el ?v= con que los pide la página,
   así que al usarlos se bajaban otra vez. Ahora:
   1) lo que lleva ?v= no cambia nunca: se copia de la caché de la versión anterior en vez de bajarlo;
   2) el código sale de los <script> de index.html, con su ?v= exacto (si falta uno, la instalación falla, como antes);
   3) imágenes y sonidos van a MEDIOS, que no depende de la versión (clave = ruta + hash que pone integrar.py): se guardan al
      usarlos y el resto se baja de 2 en 2 cuando la página lo pide (mensaje «precarga», 20 s después de abrir). */
const MEDIOS="pc-medios-1", MEDIA=/\.(webp|png|jpe?g|mp3|svg)$/i;
const RAIZ=new URL("./",self.location).pathname;
const HASH=new Map(PRECACHE.filter(f=>f.includes("#")).map(f=>{ const i=f.lastIndexOf("#"); return [RAIZ+f.slice(0,i),f.slice(i+1)]; }));
const clave=(p,h)=>p+"?h="+h;
const FIJA=/\/fonts\/[^/]+\.woff2$/;   // las fuentes no cambian: se copian como lo que lleva ?v=
const DATOS=/^(cursos|explica|teoria|audio\d|extra|banco-[a-z0-9]+|vocab)\.js$|^js\//;   // la página los pide con ?v=: sin él no sirven
const tandas=async(lista,n,f)=>{ let i=0, malos=[]; await Promise.all(Array.from({length:n},async()=>{ while(i<lista.length){ const x=lista[i++]; try{ await f(x); }catch(e){ malos.push(x); } } })); return malos; };
self.addEventListener("install",e=>{ e.waitUntil((async()=>{
  const c=await caches.open(CORE), m=await caches.open(MEDIOS);
  for(const k of (await caches.keys()).filter(k=>k.startsWith("pc-core-")&&k!==CORE)){
    const v=await caches.open(k);
    for(const r of await v.keys()){
      const u=new URL(r.url); if(u.origin!==location.origin) continue;
      if((u.search&&!u.searchParams.has("src"))||FIJA.test(u.pathname)){ if(!(await c.match(r))){ const x=await v.match(r); if(x) await c.put(r,x); } }
      else if(HASH.has(u.pathname)){ const kk=clave(u.pathname,HASH.get(u.pathname)); if(!(await m.match(kk))){ const x=await v.match(r); if(x) await m.put(kk,x); } }
    }
  }
  const idx=await fetch("./",{cache:"no-cache"}); if(!idx.ok) throw new Error("index "+idx.status);
  const html=await idx.clone().text(); await c.put("index.html",idx.clone()); await c.put("./",idx);
  const src=[...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(x=>x[1]).filter(s=>!/^(https?:)?\/\//.test(s));
  const fijos=PRECACHE.filter(f=>!f.includes("#")&&!MEDIA.test(f)&&f!=="./"&&f!=="index.html"&&f!=="carnet.html"&&!DATOS.test(f));
  const falta=[]; for(const f of new Set([...src,...fijos])){ const uf=new URL(f,self.location); if(!((uf.search||FIJA.test(uf.pathname))&&await c.match(f))) falta.push(f); }
  // con ?v= el contenido es fijo: vale lo que el navegador ya bajó al abrir la página (si no, se bajaba dos veces)
  const malos=await tandas(falta,4,async f=>{ const r=await fetch(f,{cache:new URL(f,self.location).search?"default":"no-cache"}); if(!r.ok) throw new Error(f); await c.put(f,r); });
  if(malos.length) throw new Error("faltan "+malos.join(", "));
  await self.skipWaiting();
})()); });
self.addEventListener("activate",e=>{ e.waitUntil((async()=>{
  await Promise.all((await caches.keys()).filter(k=>![CORE,AUDIO,FOTOS,MEDIOS,"plx-state"].includes(k)).map(k=>caches.delete(k)));
  const m=await caches.open(MEDIOS), vivas=new Set([...HASH].map(([p,h])=>clave(p,h)));
  for(const r of await m.keys()){ const u=new URL(r.url); if(!vivas.has(u.pathname+u.search)) await m.delete(r); }
  await self.clients.claim();
})()); });
let precargando=null;
const precarga=()=>precargando||(precargando=(async()=>{
  const m=await caches.open(MEDIOS), falta=[];
  for(const [p,h] of HASH){ if(!(await m.match(clave(p,h)))) falta.push([p,h]); }
  await tandas(falta,2,async([p,h])=>{ const r=await fetch(p); if(r.ok) await m.put(clave(p,h),r); });
})().finally(()=>{ precargando=null; }));
self.addEventListener("message",e=>{ if(e.data&&e.data.plx==="precarga") e.waitUntil(precarga()); });
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  const u=new URL(r.url);
  if(u.origin!==location.origin){   // polices Google : réseau puis cache
    if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) e.respondWith(caches.open(CORE).then(c=>fetch(r).then(res=>{ c.put(r,res.clone()); return res; }).catch(()=>c.match(r))));
    return;
  }
  if(u.pathname.includes("/audio/")){   // audio : cache à la demande (les fichiers ne changent pas)
    if(r.headers.has("range")) return;
    e.respondWith(caches.open(AUDIO).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok) c.put(r,res.clone()); return res; }))));
    return;
  }
  if(u.pathname.includes("/img/u/")){   // fotos de las unidades (1.22): cache a demanda, no cambian
    e.respondWith(caches.open(FOTOS).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok) c.put(r,res.clone()); return res; }))));
    return;
  }
  if(u.pathname.includes("/img/pf4/")||u.pathname.includes("/fonts/barlow-")){   // fotos de profesores y Barlow (3.9): sin query, así que el caso general nunca las guardaba
    e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok){ const cp=res.clone(); caches.open(FOTOS).then(c=>c.put(r,cp)); } return res; })));
    return;
  }
  if(HASH.has(u.pathname)&&!u.search){   // 4.47: imágenes y sonidos de la app, guardados al usarlos en MEDIOS
    const k=clave(u.pathname,HASH.get(u.pathname));
    e.respondWith(caches.open(MEDIOS).then(m=>m.match(k).then(hit=>hit||fetch(r).then(res=>{ if(res.ok) m.put(k,res.clone()); return res; }))));
    return;
  }
  if(r.mode==="navigate"){
    /* 4.45: red primero, pero con señal lenta (más de 3 s) se abre la copia guardada y la red la actualiza por detrás.
       Antes se esperaba la red sin límite (index.html pesa ~330 KB comprimido) y con mala señal la app se quedaba en blanco.
       Solo se guardan respuestas buenas: un 404/500 pasajero ya no reemplaza la copia que funciona sin conexión. */
    const red=fetch(r);
    e.waitUntil(red.then(res=>{ if(res.ok){ const cp=res.clone(); return caches.open(CORE).then(c=>c.put(r,cp)); } }).catch(()=>{}));
    const copia=()=>caches.match(r,{ignoreSearch:true}).then(h=>h||caches.match(u.pathname.endsWith("carnet.html")?"carnet.html":"index.html"));
    e.respondWith(new Promise(ok=>{
      let listo=false; const da=x=>{ if(!listo&&x){ listo=true; ok(x); } };
      const reloj=setTimeout(()=>copia().then(da),3000);
      red.then(res=>{ clearTimeout(reloj); da(res); }).catch(()=>{ clearTimeout(reloj); copia().then(h=>{ da(h||Response.error()); }); });
    }));
    return;
  }
  e.respondWith(caches.open(CORE).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok&&u.search) c.put(r,res.clone()); return res; }).catch(()=>c.match(r,{ignoreSearch:true}).then(h=>h||Response.error())))));
});

/* recordatorio diario en la web (1.17): el service worker avisa si hoy no has practicado */
const ymd=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
async function remCheck(){
  const c=await caches.open("plx-state"), r=await c.match("__plx/remind"); if(!r) return;
  const s=await r.json(), now=new Date(), today=ymd(now);
  if(!s.on||s.done===today||s.notified===today) return;
  if(now.getHours()*60+now.getMinutes()<(s.h|0)*60+(s.m|0)) return;
  s.notified=today; await c.put("__plx/remind",new Response(JSON.stringify(s)));
  const st=(s.at===today||s.at===ymd(new Date(now.getTime()-864e5)))?(s.streak|0):0;
  await self.registration.showNotification(st>0?"¡Tu racha de "+st+" días te espera!":"¡Manzana te espera!",{
    body:st>0?"Haz una lección corta hoy para no perderla. Con 5 minutos basta.":"Haz una lección corta hoy y empieza tu racha.",
    icon:"icons/m4-icon-192.png",badge:"icons/m4-favicon-32.png",tag:"plx-remind",data:{url:"./",destino:"practicar",id:"r"+today},actions:[{action:"practicar",title:"▶ Practicar"}]});
  await enBandeja({id:"r"+today,tipo:st>0?"racha":"dia",ti:st>0?"¡Tu racha de "+st+" días te espera!":"¡Manzana te espera!",tx:"Haz una lección corta hoy.",d:"practicar"});
}
self.addEventListener("periodicsync",e=>{ if(e.tag==="plx-remind") e.waitUntil(remCheck()); });
/* 4.48: cada aviso lleva destino (practicar, racha, palabra, 1v1, avisos) y queda en la bandeja de la app.
   Antes, tocar un aviso solo enfocaba la ventana abierta (o abría el inicio): nunca llevaba a la pantalla del aviso. */
const BANDEJA="__plx/avisos";
async function enBandeja(it,leido){
  try{
    const c=await caches.open("plx-state"), r=await c.match(BANDEJA); let l=r?await r.json():[];
    if(!Array.isArray(l)) l=[];
    const i=l.findIndex(x=>x.id===it.id);
    if(i>=0) l[i].leido=l[i].leido||!!leido; else l.unshift(Object.assign({t:Date.now(),leido:!!leido},it));
    await c.put(BANDEJA,new Response(JSON.stringify(l.slice(0,40)),{headers:{"Content-Type":"application/json"}}));
  }catch(x){}
}
async function mostrar(d){
  const id=d.id||("w"+Date.now()), destino=d.destino||(d.tag==="plx-social"?"":"practicar");
  await enBandeja({id,tipo:d.tipo||"social",ti:d.title||"PLEX PLAY",tx:d.body||"",d:destino});
  const op={body:d.body||"",icon:d.icon||"icons/m4-icon-192.png",badge:"icons/m4-favicon-32.png",tag:d.tag||("plx-"+(d.tipo||"aviso")),renotify:!!d.renotify,data:{destino,id,url:"./"}};
  if(d.img) op.image=d.img;
  if(destino) op.actions=[{action:destino==="racha"?"racha":"practicar",title:destino==="racha"?"🩹 Recuperar":"▶ Practicar"}];
  await self.registration.showNotification(d.title||"PLEX PLAY",op);
  const ws=await self.clients.matchAll({type:"window",includeUncontrolled:true});
  ws.forEach(w=>{ try{ w.postMessage({plx:"aviso",id}); }catch(x){} });
}
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  const d=e.notification.data||{}, destino=e.action||d.destino||"";
  e.waitUntil((async()=>{
    if(d.id) await enBandeja({id:d.id},true);
    const ws=await self.clients.matchAll({type:"window",includeUncontrolled:true});
    for(const w of ws){
      if(!("focus" in w)) continue;
      await w.focus();
      w.postMessage({plx:"abrir",destino,id:d.id||""});
      return;
    }
    return self.clients.openWindow("./"+(destino?"?abrir="+encodeURIComponent(destino):""));
  })());
});
/* avisos al teléfono (4.19 social; 4.48 recordatorios con la app cerrada): los envían plx-push y plx-recordatorios */
self.addEventListener("push",e=>{
  let d={}; try{ d=e.data?e.data.json():{}; }catch(x){ try{ d={body:e.data.text()}; }catch(y){} }
  e.waitUntil(mostrar(d));
});
