"""Integra los archivos de la app antes de publicar: agrega/actualiza la etiqueta <script> de cada js/plxNN.js con su
?v=<md5 corto>, sube APP_VERSION y la caché CORE del service worker, y pone en PRECACHE los js nuevos y img/ic.

Uso: python integrar.py 3.0.0
"""
import glob, hashlib, os, re, sys

AQUI = os.path.dirname(os.path.abspath(__file__))
version = sys.argv[1]
idx = os.path.join(AQUI, "index.html"); sw = os.path.join(AQUI, "sw.js")
h = open(idx, encoding="utf8").read(); s = open(sw, encoding="utf8").read()
md5 = lambda f: hashlib.md5(open(os.path.join(AQUI, f), "rb").read()).hexdigest()[:8]

js = sorted((os.path.relpath(f, AQUI).replace("\\", "/") for f in glob.glob(os.path.join(AQUI, "js", "plx*.js"))), key=lambda f: int(re.search(r"plx(\d+)", f)[1]))
ultimo = None
for f in js:
    etiqueta = f'<script src="{f}?v={md5(f)}"></script>'
    pat = re.compile(r'<script src="' + re.escape(f) + r'\?v=[0-9a-f]+"></script>')
    if pat.search(h): h = pat.sub(etiqueta, h)
    elif ultimo: h = h.replace(ultimo, ultimo + etiqueta, 1)
    else: raise SystemExit("no encuentro dónde poner " + f)
    ultimo = etiqueta
h, n = re.subn(r'APP_VERSION="[^"]*"', f'APP_VERSION="{version}"', h); assert n == 1
s, n = re.subn(r'CORE="pc-core-[^"]*"', f'CORE="pc-core-{version}"', s); assert n == 1
m = re.search(r"const PRECACHE=\[(.*?)\];", s, re.S); lista = re.findall(r'"([^"]+)"', m[1])
nuevos = [f for f in js if f not in lista] + [os.path.relpath(f, AQUI).replace("\\", "/") for d in ("ic", "mz") for f in sorted(glob.glob(os.path.join(AQUI, "img", d, "*.webp")))]
for f in nuevos:
    if f not in lista: lista.append(f)
s = s[:m.start(1)] + ", ".join('"' + x + '"' for x in lista) + s[m.end(1):]
open(idx, "w", encoding="utf8").write(h); open(sw, "w", encoding="utf8").write(s)
print("versión", version, "·", len(js), "scripts ·", len(lista), "archivos en PRECACHE")
