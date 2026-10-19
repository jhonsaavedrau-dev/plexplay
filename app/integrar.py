"""Integra los archivos de la app antes de publicar: agrega/actualiza la etiqueta <script> de cada js/plxNN.js con su
?v=<md5 corto>, sube APP_VERSION y la caché CORE del service worker, y pone en PRECACHE los js nuevos y img/ic (las imágenes y sonidos con #md5, ver sw.js 4.47).

Uso: python integrar.py 3.0.0
"""
import glob, hashlib, json, os, re, sys

AQUI = os.path.dirname(os.path.abspath(__file__))
version = sys.argv[1]
idx = os.path.join(AQUI, "index.html"); sw = os.path.join(AQUI, "sw.js")
h = open(idx, encoding="utf8").read(); s = open(sw, encoding="utf8").read()
md5 = lambda f: hashlib.md5(open(os.path.join(AQUI, f), "rb").read()).hexdigest()[:8]

# 4.54: las fichas de cada curso (ens/<curso>.js y ens/audio-<curso>.js) se bajan cuando hacen falta: sus versiones van
# en window.__ENS_V dentro de ensena.js (antes de calcular el ?v= de ensena.js)
ev = {}
# ens/_borrador.txt: cursos a medio hacer (uno por línea). Sus archivos pueden estar en el repositorio, pero la app no los pide.
try: BORRADOR = {x.strip() for x in open(os.path.join(AQUI, "ens", "_borrador.txt"), encoding="utf8") if x.strip()}
except FileNotFoundError: BORRADOR = set()
for f in sorted(glob.glob(os.path.join(AQUI, "ens", "*.js"))):
    b = os.path.basename(f)[:-3]
    if b.replace("audio-", "") in BORRADOR: continue
    if b.startswith("audio-"): ev[b[6:] + "-a"] = md5("ens/" + b + ".js")
    else: ev[b] = md5("ens/" + b + ".js")
ee = open(os.path.join(AQUI, "ensena.js"), encoding="utf8").read()
ee, n = re.subn(r"window\.__ENS_V = \{[^}]*\};", "window.__ENS_V = " + json.dumps(ev, separators=(",", ":")) + ";", ee); assert n == 1
open(os.path.join(AQUI, "ensena.js"), "w", encoding="utf8", newline="").write(ee)
js = sorted((os.path.relpath(f, AQUI).replace("\\", "/") for f in glob.glob(os.path.join(AQUI, "js", "plx*.js"))), key=lambda f: int(re.search(r"plx(\d+)", f)[1]))
ultimo = None
for f in js:
    etiqueta = f'<script src="{f}?v={md5(f)}"></script>'
    pat = re.compile(r'<script src="' + re.escape(f) + r'\?v=[0-9a-f]+"></script>')
    if pat.search(h): h = pat.sub(etiqueta, h)
    elif ultimo: h = h.replace(ultimo, ultimo + etiqueta, 1)
    else: raise SystemExit("no encuentro dónde poner " + f)
    ultimo = etiqueta
# piezas globales (kit.js): va al principio, justo después de pre.js, y no es un plxNN.js
h, n = re.subn(r'<script src="js/kit\.js\?v=[0-9a-f]+"></script>', f'<script src="js/kit.js?v={md5("js/kit.js")}"></script>', h); assert n == 1
# 4.51: el idioma (js/idioma.js) va justo después del núcleo; el contenido del inglés lo pide él con su ?v=
ii = open(os.path.join(AQUI, "js", "idioma.js"), encoding="utf8").read()
ii, n = re.subn(r'var V = \{ cursos: "[^"]*", audio: "[^"]*" \};', f'var V = {{ cursos: "{md5("cursos-en.js")}", audio: "{md5("audio-en.js")}" }};', ii); assert n == 1
open(os.path.join(AQUI, "js", "idioma.js"), "w", encoding="utf8").write(ii)
h, n = re.subn(r'<script src="js/idioma\.js\?v=[0-9a-f]+"></script>', f'<script src="js/idioma.js?v={md5("js/idioma.js")}"></script>', h); assert n == 1
h, n = re.subn(r'<script src="js/pre\.js\?v=[0-9a-f]+"></script>', f'<script src="js/pre.js?v={md5("js/pre.js")}"></script>', h); assert n == 1
# 4.52: el sistema de enseñanza: ensena.js (fichas de las lecciones) y audio-ensena.js (sus audios) van con su ?v=
for f in ("ensena.js", "audio-ensena.js"):
    if os.path.exists(os.path.join(AQUI, f)):
        etq = f'<script src="{f}?v={md5(f)}"></script>'
        h, n = re.subn(r'<script src="' + re.escape(f) + r'\?v=[0-9a-f]+"></script>', etq, h)
        # ensena.js va tras cursos.js (son datos); audio-ensena.js tras audio5.js, porque necesita el AUDIO del núcleo
        # ensena-prog.js (las fichas del C1.1) va justo después de ensena.js
        ant = "audio5" if f.startswith("audio") else ("ensena" if f == "ensena-prog.js" else "cursos")
        if not n: h, n = re.subn(r'(<script src="' + ant + r'\.js\?v=[0-9a-f]+"></script>)', lambda m: m[1] + etq, h)
        assert n == 1, f
h, n = re.subn(r'APP_VERSION="[^"]*"', f'APP_VERSION="{version}"', h); assert n == 1
s, n = re.subn(r'CORE="pc-core-[^"]*"', f'CORE="pc-core-{version}"', s); assert n == 1
m = re.search(r"const PRECACHE=\[(.*?)\];", s, re.S); lista = re.findall(r'"([^"]+)"', m[1])
nuevos = ["js/kit.js"] + [f for f in ("ensena.js", "audio-ensena.js") if os.path.exists(os.path.join(AQUI, f))] + [f for f in js if f not in lista] + [os.path.relpath(f, AQUI).replace("\\", "/") for d in ("ic2", "mz3", "m2d", "juegos", "quiz", "logros", "mzj", "nodos", "mzp") for f in sorted(glob.glob(os.path.join(AQUI, "img", d, "*.webp")))] + [os.path.relpath(f, AQUI).replace("\\", "/") for f in sorted(glob.glob(os.path.join(AQUI, "snd", "*", "*.mp3")))]
lista = [x.split("#")[0] for x in lista]
for f in nuevos:
    if f not in lista: lista.append(f)
# 4.47: imágenes y sonidos llevan «#<md5 corto>»: el service worker los guarda en una caché que no depende de la versión
# y solo vuelve a bajar los que cambian. Los que ya no existen salen de la lista.
MEDIA = re.compile(r"\.(webp|png|jpe?g|mp3|svg)$", re.I)
lista = [(x + "#" + md5(x) if MEDIA.search(x) else x) for x in lista if not MEDIA.search(x) or os.path.exists(os.path.join(AQUI, x))]
s = s[:m.start(1)] + ", ".join('"' + x + '"' for x in lista) + s[m.end(1):]
open(idx, "w", encoding="utf8").write(h); open(sw, "w", encoding="utf8").write(s)
print("versión", version, "·", len(js), "scripts ·", len(lista), "archivos en PRECACHE")
