# PLEX PLAY — paquete para publicar la app

Esta carpeta es PLEX PLAY como **aplicación web instalable (PWA)**: funciona sin conexión, se instala en el móvil desde el navegador y está lista para convertirse en app de Google Play.

## Qué hay dentro

| Archivo / carpeta | Para qué sirve |
|---|---|
| `index.html` | La app completa (lecciones, ejercicios, repaso espaciado, guía, perfil) |
| `manifest.webmanifest` | Nombre, colores, iconos y capturas para instalarla |
| `sw.js` | Service worker: guarda la app para usarla sin internet |
| `icons/` | Iconos 192, 512, maskable, Apple y favicon |
| `img/`, `audio/` | Ilustraciones y audios de las lecciones (el audio se guarda al escucharlo) |
| `privacy.html` | Política de privacidad (obligatoria en las tiendas) |
| `store/` | Capturas 1080×1920, imagen destacada 1024×500 y textos de la ficha |

## Diferencias con la versión de claude.ai

La versión instalable no tiene servidor: el progreso vive en el dispositivo. **No incluye** la corrección con IA del Taller, la explicación «¿Por qué?» ni la clasificación compartida (dependen de claude.ai). Todo lo demás funciona igual, incluido el código de progreso para pasar de un dispositivo a otro.

## Dónde está publicada

La app vive en el repositorio `jhonsaavedrau-dev/plexplay`, en la carpeta `app/`, junto a la landing:

- App: https://jhonsaavedrau-dev.github.io/plexplay/app/
- Landing: https://jhonsaavedrau-dev.github.io/plexplay/

Cada push a `main` la publica con GitHub Pages. Hasta la versión 2.9.4 estuvo en `portfolio-francais-c1-1/plexplay/`; esa dirección ahora redirige aquí.

## Publicarla en Google Play (cuando quieras)

1. Ve a **pwabuilder.com**, pega la dirección pública y elige *Package for stores → Android*. Descargarás un `.aab` y un archivo `assetlinks.json`.
2. Sube `assetlinks.json` a `/.well-known/assetlinks.json` del dominio (en GitHub Pages hace falta un repositorio `jhonsaavedrau-dev.github.io` para la raíz del dominio, o un dominio propio).
3. En Google Play Console (pago único de 25 USD): crea la app, sube el `.aab`, completa la ficha con los textos de `store/listing.md`, las capturas y la URL de `privacy.html`, el formulario *Seguridad de los datos* y la clasificación de contenido.
4. Las cuentas personales nuevas deben hacer una **prueba cerrada con 12 testers durante 14 días** antes de publicar: tus compañeros de clase sirven.

**App Store (iPhone):** Apple rechaza apps que solo envuelven una web (norma 4.2). Por ahora, en iPhone se instala desde Safari → Compartir → *Añadir a pantalla de inicio*.

## Antes de publicar en tiendas

- [ ] Poner un correo de contacto real en `privacy.html` (sección 1).
- [ ] Revisar que la dirección pública carga por HTTPS y funciona sin conexión.
- [ ] Probar la instalación en un Android y en un iPhone.
- [ ] Opcional: dominio propio (p. ej. petitchat.app) para Play Store y enlaces más cortos.
