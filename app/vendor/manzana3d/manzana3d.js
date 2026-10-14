// Manzana 3D (camino B): el gato hecho con piezas simples de three.js.
// Sigue la ficha de mascota: colores planos sin contorno, cabeza ancha y redondeada,
// orejas grandes (la derecha gris), parche gris arriba a la derecha, ojos ovalados,
// boca roja abierta, dos bigotes gruesos por lado y cola gris corta en «C».
// Cada parte es una pieza aparte, así que se anima con código, sin rig.
// API: const m = crearManzana(canvas); m.estado("acierto"); m.mirar(x, y); m.tecla(); m.destruir();
import * as THREE from "./three.module.min.js";

const COL = {
  blanco: new THREE.Color("#FFFDF9"),
  gris: new THREE.Color("#9AA0A6"),
  rosa: new THREE.Color("#FF7E98"),
  ojo: new THREE.Color("#1F2430"),
  boca: new THREE.Color("#E8264F"),
  lengua: new THREE.Color("#FF8FA6"),
  nariz: new THREE.Color("#FF8FA6"),
};

// ---------- material ----------
// Plano con una sombra muy suave (como la ficha). Modo de parche 1 = el gris de la cabeza:
// se proyecta de frente, así que también aparece por detrás, como en la vista de espalda.
function plano2(base, parche) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uBase: { value: base.clone() },
      uGris: { value: COL.gris.clone() },
      uParche: { value: parche ? 1 : 0 },
      uLuz: { value: new THREE.Vector3(-0.45, 0.65, 0.65).normalize() },
    },
    vertexShader: `
      varying vec3 vN; varying vec3 vObj;
      void main(){
        vObj = position;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      uniform vec3 uBase, uGris, uLuz; uniform float uParche;
      varying vec3 vN; varying vec3 vObj;
      void main(){
        vec3 base = uBase;
        if (uParche > 0.5) {
          // cuarto superior derecho con la esquina redondeada y el borde un poco ondulado
          vec2 q = vec2(vObj.x - 0.08, vObj.y - 0.12);
          q += vec2(sin(vObj.y*7.0)*0.025, sin(vObj.x*6.0+1.0)*0.02);
          float r = 0.42, g;
          if (q.x < r && q.y < r) g = r - length(vec2(r) - q); else g = min(q.x, q.y);
          base = mix(base, uGris, smoothstep(-0.006, 0.006, g));
        }
        vec3 n = normalize(vN);
        float d = dot(n, uLuz);
        float luz = smoothstep(-0.35, 0.15, d);
        vec3 c = mix(base * vec3(0.90, 0.895, 0.915), base, luz);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
}

const liso = (c, extra) => new THREE.MeshBasicMaterial(Object.assign({ color: c }, extra || {}));

// Superelipsoide: esfera «cuadrada» (p > 2) con la costura girada hacia atrás.
function superElipsoide(ax, ay, az, p, deformar, seg) {
  const g = new THREE.SphereGeometry(1, seg || 72, Math.round((seg || 72) * 0.75));
  g.rotateY(-Math.PI / 2);
  const pos = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const k = Math.pow(Math.pow(Math.abs(v.x), p) + Math.pow(Math.abs(v.y), p) + Math.pow(Math.abs(v.z), p), -1 / p);
    v.multiplyScalar(k);
    const o = { x: v.x * ax, y: v.y * ay, z: v.z * az, u: v };
    if (deformar) deformar(o);
    pos.setXYZ(i, o.x, o.y, o.z);
  }
  g.computeVertexNormals();
  return g;
}

function elipsoide(a, b, c, seg) {
  const g = new THREE.SphereGeometry(1, seg || 40, Math.round((seg || 40) * 0.75));
  g.rotateY(-Math.PI / 2);
  g.scale(a, b, c);
  return g;
}

// Oreja: triángulo alto de punta apenas redondeada, aplanado.
function geoOreja(r, h, plano) {
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const rr = r * (1 - t) * (1 - 0.25 * Math.pow(t, 6)) + 0.035 * Math.sin(t * Math.PI) * t;
    pts.push(new THREE.Vector2(Math.max(rr, 0.0001), t * h));
  }
  const g = new THREE.LatheGeometry(pts, 40);
  g.scale(1, 1, plano);
  g.computeVertexNormals();
  return g;
}

function arco(r, grosor, desde, largo, color) {
  const g = new THREE.TorusGeometry(r, grosor, 12, 32, largo);
  g.rotateZ(desde);
  return new THREE.Mesh(g, liso(color));
}

function textura(dibujar, w, h) {
  const c = document.createElement("canvas");
  c.width = w || 128; c.height = h || 128;
  dibujar(c.getContext("2d"), c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Estrella de cuatro puntas (brillo de ojos al celebrar, como el Manzana vectorial).
function geoDestello(r) {
  const s = new THREE.Shape();
  s.moveTo(0, r);
  s.quadraticCurveTo(r * 0.12, r * 0.12, r, 0);
  s.quadraticCurveTo(r * 0.12, -r * 0.12, 0, -r);
  s.quadraticCurveTo(-r * 0.12, -r * 0.12, -r, 0);
  s.quadraticCurveTo(-r * 0.12, r * 0.12, 0, r);
  return new THREE.ShapeGeometry(s, 12);
}

// ---------- construcción ----------
function construir() {
  const raiz = new THREE.Group();       // salta y se aplasta
  const cuerpoG = new THREE.Group();    // respira
  const cabezaG = new THREE.Group();    // mira e inclina
  raiz.add(cuerpoG);
  cabezaG.position.set(0, 0, 0);
  raiz.add(cabezaG);

  const blanco = plano2(COL.blanco);
  const gris = plano2(COL.gris);

  // Cabeza: ancha, casi cuadrada, con cachetes abajo y la base algo plana.
  const geoCab = superElipsoide(1.17, 1.0, 0.88, 2.35, (o) => {
    o.x *= 1 + 0.06 * Math.exp(-Math.pow((o.u.y + 0.3) / 0.4, 2)) - 0.08 * Math.max(0, o.u.y);
    if (o.y < -0.8) o.y = -0.8 + (o.y + 0.8) * 0.7;
  }, 96);
  const cabeza = new THREE.Mesh(geoCab, plano2(COL.blanco, true));
  cabezaG.add(cabeza);
  cabeza.updateMatrixWorld();

  // Pegar piezas planas sobre la cara: rayo de frente contra la cabeza.
  const rayo = new THREE.Raycaster();
  const Z = new THREE.Vector3(0, 0, 1);
  function enCara(x, y, sobre) {
    rayo.set(new THREE.Vector3(x, y, 5), new THREE.Vector3(0, 0, -1));
    const h = rayo.intersectObject(cabeza, false)[0];
    const n = h ? h.face.normal.clone() : Z.clone();
    const p = h ? h.point.clone() : new THREE.Vector3(x, y, 0.8);
    return { p: p.addScaledVector(n, sobre || 0), n };
  }
  function pegar(obj, x, y, sobre) {
    const { p, n } = enCara(x, y, sobre);
    obj.position.copy(p);
    obj.quaternion.setFromUnitVectors(Z, n);
    return obj;
  }

  // Orejas grandes que salen de las esquinas de la cabeza.
  const orejas = [];
  [[-1, blanco], [1, gris]].forEach(([lado, mat]) => {
    const piv = new THREE.Group();
    piv.position.set(0.66 * lado, 0.45, -0.1);
    piv.rotation.z = -0.24 * lado;
    const o = new THREE.Mesh(geoOreja(0.5, 1.02, 0.5), mat);
    piv.add(o);
    const dentro = new THREE.Mesh(geoOreja(0.27, 0.56, 0.3), plano2(COL.rosa));
    dentro.position.set(0.03 * lado, 0.24, 0.14);
    piv.add(dentro);
    piv.userData = { lado, base: piv.rotation.z };
    cabezaG.add(piv);
    orejas.push(piv);
  });

  // Ojos: óvalos altos y oscuros, como la ficha. Al celebrar llevan un destello.
  const ojos = [];
  [-1, 1].forEach((lado) => {
    const g = new THREE.Group();
    pegar(g, 0.43 * lado, -0.06, 0.006);
    const abierto = new THREE.Group();
    const ov = new THREE.Mesh(new THREE.CircleGeometry(1, 48), liso(COL.ojo));
    ov.scale.set(0.165, 0.235, 1);
    abierto.add(ov);
    const destello = new THREE.Mesh(geoDestello(0.085), liso(COL.blanco));
    destello.position.set(0.015, 0.03, 0.003);
    const punto = new THREE.Mesh(new THREE.CircleGeometry(0.022, 16), liso(COL.blanco));
    punto.position.set(-0.05, -0.08, 0.003);
    destello.visible = punto.visible = false;
    abierto.add(destello, punto);
    abierto.userData = { destello, punto };
    const feliz = arco(0.13, 0.036, 0, Math.PI, COL.ojo);
    feliz.position.y = -0.05;
    const cerrado = arco(0.12, 0.032, Math.PI, Math.PI, COL.ojo);
    cerrado.position.y = 0.03;
    g.add(abierto, feliz, cerrado);
    g.userData = { abierto, feliz, cerrado };
    cabezaG.add(g);
    ojos.push(g);
  });

  // Nariz: triángulo rosa redondeado.
  const tn = new THREE.Shape();
  tn.moveTo(-0.05, 0.022);
  tn.quadraticCurveTo(0, 0.04, 0.05, 0.022);
  tn.quadraticCurveTo(0.03, -0.02, 0, -0.032);
  tn.quadraticCurveTo(-0.03, -0.02, -0.05, 0.022);
  const nariz = new THREE.Mesh(new THREE.ShapeGeometry(tn, 12), liso(COL.nariz));
  pegar(nariz, 0, -0.16, 0.008);
  cabezaG.add(nariz);

  // Bigotes: dos rayitas gruesas por lado, montadas sobre el borde de la cara.
  [-1, 1].forEach((lado) => {
    [[-0.06, 0.1], [-0.22, -0.28]].forEach(([y, ang]) => {
      const w = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.15, 6, 12), liso(COL.ojo));
      w.rotation.z = Math.PI / 2 + ang * lado;
      const borde = enCara(1.1 * lado, y - 0.04, 0).p;
      w.position.set(1.21 * lado, y - 0.04, Math.max(borde.z, 0.2) * 0.85);
      cabezaG.add(w);
    });
  });

  // Bocas.
  function formaBoca(s) {
    const f = new THREE.Shape();
    f.moveTo(-0.15 * s, 0);
    f.quadraticCurveTo(-0.075 * s, 0.032 * s, 0, -0.004 * s);
    f.quadraticCurveTo(0.075 * s, 0.032 * s, 0.15 * s, 0);
    f.bezierCurveTo(0.15 * s, -0.22 * s, -0.15 * s, -0.22 * s, -0.15 * s, 0);
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.ShapeGeometry(f, 24), liso(COL.boca)));
    const l = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(COL.lengua));
    l.scale.set(0.085 * s, 0.045 * s, 1);
    l.position.set(0, -0.112 * s, 0.002);
    g.add(l);
    return g;
  }
  const bocas = {};
  bocas.w = pegar(formaBoca(0.85), 0, -0.22, 0.01);
  bocas.abierta = pegar(formaBoca(1.15), 0, -0.22, 0.012);
  const o = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(COL.boca));
  o.scale.set(0.06, 0.075, 1);
  bocas.o = pegar(o, 0, -0.3, 0.01);
  bocas.triste = pegar(arco(0.075, 0.022, 0, Math.PI, COL.ojo), 0, -0.32, 0.01);
  Object.values(bocas).forEach((b) => cabezaG.add(b));

  const lagrima = new THREE.Mesh(elipsoide(0.045, 0.065, 0.03, 16),
    liso(new THREE.Color("#7FB6FF"), { transparent: true, opacity: 0.9 }));
  lagrima.visible = false;
  cabezaG.add(lagrima);

  // Cuerpo pequeño, más ancho abajo, con dos patitas delanteras como columnas.
  const cuerpo = new THREE.Mesh(superElipsoide(0.56, 0.62, 0.48, 2.5, (o) => {
    o.x *= 1 + 0.12 * Math.max(0, -o.u.y);
  }, 56), blanco);
  cuerpo.position.set(0, -1.26, -0.08);
  cuerpoG.add(cuerpo);
  [-1, 1].forEach((lado) => {
    const pata = new THREE.Mesh(new THREE.CapsuleGeometry(0.165, 0.42, 8, 24), blanco);
    pata.position.set(0.22 * lado, -1.53, 0.24);
    cuerpoG.add(pata);
    const muslo = new THREE.Mesh(elipsoide(0.22, 0.26, 0.34, 32), blanco);
    muslo.position.set(0.5 * lado, -1.64, -0.22);
    cuerpoG.add(muslo);
  });

  // Cola gris corta en «C», a la derecha.
  const cola = new THREE.Group();
  const colaM = new THREE.Mesh(new THREE.BufferGeometry(), gris);
  const punta = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 18), gris);
  cola.add(colaM, punta);
  raiz.add(cola);
  const PC = [
    [0.3, -1.74, -0.42], [0.78, -1.76, -0.36], [1.12, -1.58, -0.3], [1.2, -1.3, -0.24], [1.04, -1.12, -0.2],
  ].map((p) => new THREE.Vector3(...p));
  function rehacerCola(t, fuerza) {
    const pts = PC.map((p, i) => {
      const k = i / (PC.length - 1);
      return new THREE.Vector3(
        p.x + Math.sin(t * 2.2 - i * 0.8) * 0.1 * k * fuerza,
        p.y + Math.cos(t * 2.2 - i * 0.8) * 0.06 * k * fuerza,
        p.z);
    });
    const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.17, 18, false);
    colaM.geometry.dispose();
    colaM.geometry = g;
    punta.position.copy(pts[pts.length - 1]);
  }

  // Sombra plana en el piso, como en la ficha.
  const sombra = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.0),
    new THREE.MeshBasicMaterial({
      transparent: true, depthWrite: false,
      map: textura((x, w, h) => {
        x.fillStyle = "rgba(150,160,182,.30)";
        x.beginPath(); x.ellipse(w / 2, h / 2, w / 2 - 6, h / 2 - 6, 0, 0, Math.PI * 2); x.fill();
      }, 256, 80),
    }));
  sombra.rotation.x = -Math.PI / 2;
  sombra.position.set(0.1, -1.9, 0);

  return { raiz, cuerpoG, cabezaG, orejas, ojos, bocas, lagrima, rehacerCola, sombra, enCara };
}

// ---------- partículas (estrellas, corazones, zzz) ----------
const texEstrella = textura((x, w, h) => {
  // destello de cuatro puntas dorado, como los de la ficha
  x.translate(w / 2, h / 2);
  x.fillStyle = "#FFB800";
  x.beginPath();
  x.moveTo(0, -58); x.quadraticCurveTo(8, -8, 58, 0); x.quadraticCurveTo(8, 8, 0, 58);
  x.quadraticCurveTo(-8, 8, -58, 0); x.quadraticCurveTo(-8, -8, 0, -58); x.fill();
});
const texZ = textura((x, w, h) => {
  x.font = "800 96px Poppins, system-ui, sans-serif";
  x.fillStyle = "#6E7FB8"; x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("z", w / 2, h / 2);
});
const texChispa = textura((x, w, h) => {
  x.translate(w / 2, h / 2);
  x.fillStyle = "#FFB800";
  x.beginPath();
  x.arc(0, 0, 30, 0, Math.PI * 2); x.fill();
  x.beginPath();
  x.moveTo(0, -50); x.quadraticCurveTo(6, -6, 50, 0); x.quadraticCurveTo(6, 6, 0, 50);
  x.quadraticCurveTo(-6, 6, -50, 0); x.quadraticCurveTo(-6, -6, 0, -50); x.fill();
});

// ---------- motor ----------
export function crearManzana(canvas, opciones) {
  const op = Object.assign({ fondo: null, lejos: 1 }, opciones || {});
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  r.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  r.outputColorSpace = THREE.SRGBColorSpace;
  const escena = new THREE.Scene();
  if (op.fondo) escena.background = new THREE.Color(op.fondo);
  const cam = new THREE.PerspectiveCamera(20, 1, 0.1, 60);
  cam.position.set(0, 0.2, 13);
  cam.lookAt(0, -0.3, 0);

  const M = construir();
  escena.add(M.raiz, M.sombra);
  const parts = [];

  // Estado y valores suavizados.
  let velocidad = 1;
  let est = "reposo", t0 = 0, reloj = 0, ultimo = performance.now();
  let proxParpadeo = 1.5, parpadeo = -1, proxOreja = 2.5, orejaT = -1, orejaLado = 0;
  let nod = 0;
  const mira = new THREE.Vector2(0, 0);
  const S = { yaw: 0, pitch: 0, roll: 0, salto: 0, aplasta: 1, orejaZ: 0, orejaX: 0, giro: 0, ojoS: 1 };
  const ease = (a, b, k) => a + (b - a) * k;

  function ponerCara(ojo, boca, brillo) {
    M.ojos.forEach((g) => {
      g.userData.abierto.userData.destello.visible = brillo;
      g.userData.abierto.userData.punto.visible = brillo;
      g.userData.abierto.visible = ojo === "abierto";
      g.userData.feliz.visible = ojo === "feliz";
      g.userData.cerrado.visible = ojo === "cerrado";
    });
    Object.entries(M.bocas).forEach(([k, b]) => (b.visible = k === boca));
  }

  function soltar(tex, n, opc) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      const a = (opc.abanico ? -Math.PI / 2 + (Math.random() - 0.5) * 2.6 : Math.random() * Math.PI * 2);
      s.position.copy(opc.desde).add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 0, 0.4));
      const v = opc.vel * (0.7 + Math.random() * 0.6);
      s.userData = {
        v: new THREE.Vector3(Math.cos(a) * v * (opc.abanico ? -1 : 1), Math.abs(Math.sin(a)) * v + opc.sube, 0),
        vida: opc.vida, max: opc.vida, tam: opc.tam * (0.7 + Math.random() * 0.6), g: opc.g, giro: (Math.random() - 0.5) * 6,
      };
      s.scale.setScalar(0.001);
      escena.add(s);
      parts.push(s);
    }
  }

  function estado(nombre) {
    est = nombre; t0 = reloj;
    if (nombre === "acierto" || nombre === "celebrar")
      soltar(texEstrella, nombre === "celebrar" ? 16 : 8, { desde: new THREE.Vector3(0, 0.3, 0), vel: 3.2, sube: 1.5, vida: 1.3, tam: 0.32, g: -5, abanico: true });
    if (nombre === "celebrar")
      soltar(texChispa, 10, { desde: new THREE.Vector3(0, 0.4, 0), vel: 2.6, sube: 1, vida: 1.4, tam: 0.22, g: -4, abanico: true });
  }

  function mirar(x, y) { mira.set(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y))); }
  function tecla() { nod = 1; if (est !== "escribiendo") estado("escribiendo"); }

  function tam() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    r.setSize(w, h, false);
    cam.aspect = w / h;
    // en pantallas angostas se aleja la cámara para que entre la cola
    cam.position.z = (w / h < 0.8 ? 14.5 : 13) * op.lejos;
    cam.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(tam);
  ro.observe(canvas);
  tam();

  // Tocar a Manzana = salto feliz.
  const ray = new THREE.Raycaster();
  function toque(e) {
    const b = canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
    ray.setFromCamera(p, cam);
    if (ray.intersectObject(M.raiz, true).length) {
      estado("acierto");
      op.alTocar && op.alTocar();
    }
  }
  canvas.addEventListener("pointerdown", toque);

  let rafId = 0, vivo = true;
  function cuadro(ahora) {
    if (!vivo) return;
    rafId = requestAnimationFrame(cuadro);
    const dt = Math.min((ahora - ultimo) / 1000, 0.05) * velocidad;
    ultimo = ahora;
    reloj += quieto ? dt * 0.35 : dt;
    const t = reloj, e = t - t0;
    const k = 1 - Math.pow(0.0008, dt); // suavizado independiente del fps

    // valores objetivo por estado
    let yaw = mira.x * 0.35, pitch = -mira.y * 0.2, roll = mira.x * -0.05;
    let salto = 0, aplasta = 1, orejaZ = 0, orejaX = 0, giro = 0, ojoS = 1, colaF = 1;
    let ojo = "abierto", boca = "w", brillo = false;
    M.lagrima.visible = false;

    switch (est) {
      case "escribiendo":
        yaw = -0.18 + mira.x * 0.1; pitch = 0.22; roll = 0.06; colaF = 0.6;
        if (e > 6) estado("reposo");
        break;
      case "casi":
        ojoS = 1.15; boca = "o"; orejaZ = -0.12; roll = 0.18 * Math.sin(e * 7) * Math.exp(-e * 2) + 0.14; pitch = -0.05;
        if (e > 2.2) estado("reposo");
        break;
      case "acierto": {
        const s = Math.min(e / 0.55, 1);
        salto = Math.sin(s * Math.PI) * 0.55;
        aplasta = e < 0.08 ? 0.86 : (s < 1 ? 1.06 : 1 - 0.08 * Math.sin((e - 0.55) * 18) * Math.exp(-(e - 0.55) * 7));
        ojo = "feliz"; boca = "abierta"; orejaZ = -0.1; pitch = -0.12; colaF = 2.2;
        if (e > 1.8) estado("reposo");
        break;
      }
      case "error":
        ojoS = 0.85; boca = "triste"; orejaZ = 0.55; orejaX = 0.25; pitch = 0.18; roll = -0.1;
        yaw = Math.sin(e * 16) * 0.12 * Math.exp(-e * 3);
        colaF = 0.3;
        M.lagrima.visible = e < 2.2;
        if (M.lagrima.visible) {
          const p = M.enCara(0.5, -0.26 - Math.min(e, 1.6) * 0.16, 0.04).p;
          M.lagrima.position.copy(p);
          M.lagrima.material.opacity = 0.9 * Math.min(1, (2.2 - e) * 2);
        }
        if (e > 2.6) estado("reposo");
        break;
      case "celebrar": {
        const n = Math.floor(e / 0.6), s = (e % 0.6) / 0.6;
        if (n < 2) { salto = Math.sin(s * Math.PI) * (n === 0 ? 0.6 : 0.4); aplasta = s < 0.12 ? 0.88 : 1.05; }
        giro = n === 0 ? s * Math.PI * 2 : 0;
        brillo = true; ojoS = 1.12; boca = "abierta"; orejaZ = -0.15; colaF = 2.5; pitch = -0.12;
        if (e > 2.6) estado("reposo");
        break;
      }
      case "dormir":
        ojo = "cerrado"; boca = "o"; pitch = 0.3; roll = 0.12; yaw = 0.05; orejaZ = 0.18; colaF = 0.15;
        if (Math.floor(t * 1.1) !== Math.floor((t - dt) * 1.1))
          soltar(texZ, 1, { desde: new THREE.Vector3(0.7, 0.9, 0), vel: 0.15, sube: 0.55, vida: 2.4, tam: 0.3, g: 0, abanico: false });
        break;
      default: break;
    }

    // parpadeo y tic de oreja (solo con ojos abiertos)
    if (t > proxParpadeo && ojo === "abierto") { parpadeo = t; proxParpadeo = t + 2 + Math.random() * 3.5; }
    let cierre = 1;
    if (parpadeo > 0) {
      const p = (t - parpadeo) / 0.16;
      if (p < 1) cierre = Math.max(0.08, Math.abs(1 - 2 * p)); else parpadeo = -1;
    }
    if (t > proxOreja) { orejaT = t; orejaLado = Math.random() < 0.5 ? 0 : 1; proxOreja = t + 3 + Math.random() * 4; }

    S.yaw = ease(S.yaw, yaw, k); S.pitch = ease(S.pitch, pitch, k); S.roll = ease(S.roll, roll, k);
    S.orejaZ = ease(S.orejaZ, orejaZ, k); S.orejaX = ease(S.orejaX, orejaX, k); S.ojoS = ease(S.ojoS, ojoS, k);
    S.salto = salto; S.aplasta = ease(S.aplasta, aplasta, Math.min(1, k * 3)); S.giro = giro;
    nod *= Math.pow(0.002, dt);

    // aplicar
    const resp = Math.sin(t * 2.4);
    M.raiz.position.y = S.salto;
    M.raiz.scale.set(1 + (1 - S.aplasta) * 0.6, S.aplasta, 1 + (1 - S.aplasta) * 0.6);
    M.raiz.rotation.y = S.giro;
    M.cuerpoG.scale.set(1 + resp * 0.008, 1 + resp * 0.015, 1);
    M.cabezaG.position.y = 0.02 + resp * 0.018;
    M.cabezaG.rotation.set(S.pitch + nod * 0.12, S.yaw, S.roll + Math.sin(t * 0.9) * 0.025);
    M.orejas.forEach((o, i) => {
      const tic = orejaT > 0 && i === orejaLado && t - orejaT < 0.35 ? Math.sin(((t - orejaT) / 0.35) * Math.PI * 3) * 0.18 : 0;
      o.rotation.z = o.userData.base - o.userData.lado * S.orejaZ + tic * o.userData.lado;
      o.rotation.x = -S.orejaX;
    });
    ponerCara(ojo, boca, brillo);
    M.ojos.forEach((g) => {
      g.scale.set(S.ojoS, S.ojoS * (ojo === "abierto" ? cierre : 1), 1);
      g.userData.abierto.position.set(mira.x * 0.025, mira.y * 0.02, 0);
    });
    M.rehacerCola(t, colaF);
    const sm = 1 - Math.min(S.salto, 1) * 0.45;
    M.sombra.scale.set(sm, sm, 1);
    M.sombra.material.opacity = sm;

    for (let i = parts.length - 1; i >= 0; i--) {
      const s = parts[i], u = s.userData;
      u.vida -= dt;
      if (u.vida <= 0) { escena.remove(s); s.material.dispose(); parts.splice(i, 1); continue; }
      u.v.y += u.g * dt;
      s.position.addScaledVector(u.v, dt);
      const p = 1 - u.vida / u.max;
      s.scale.setScalar(u.tam * Math.min(1, p * 6) * (1 - Math.max(0, p - 0.7) / 0.3 * 0.6));
      s.material.rotation += u.giro * dt;
      s.material.opacity = Math.min(1, u.vida * 2);
    }
    r.render(escena, cam);
  }
  rafId = requestAnimationFrame(cuadro);

  // pausa con la app oculta
  const vis = () => {
    if (document.hidden) { cancelAnimationFrame(rafId); }
    else if (vivo) { ultimo = performance.now(); rafId = requestAnimationFrame(cuadro); }
  };
  document.addEventListener("visibilitychange", vis);

  return {
    estado, mirar, tecla,
    get actual() { return est; },
    get velocidad() { return velocidad; },
    set velocidad(v) { velocidad = v; }, // 0 congela (para capturas)
    destruir() {
      vivo = false; cancelAnimationFrame(rafId); ro.disconnect();
      document.removeEventListener("visibilitychange", vis);
      canvas.removeEventListener("pointerdown", toque);
      r.dispose();
      try { r.forceContextLoss(); } catch (e) {}
    },
  };
}

export function hayWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch (e) { return false; }
}
