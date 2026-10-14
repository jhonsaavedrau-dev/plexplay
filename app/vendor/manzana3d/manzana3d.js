// Manzana 3D v3: el gato de PLEX PLAY hecho con piezas simples de three.js, animado por código (sin rig).
// Sigue la ficha de mascota (sin contorno, blanco con parche y oreja grises, ojos ovalados, boca roja) y toma de
// la mascota de Epop lo que la hace expresiva: ojos grandes con brillo, párpados y cejas que cambian la emoción,
// mejillas, una patita que saluda y movimientos con anticipación, estiramiento y rebote.
// API: const m = crearManzana(canvas, {lejos, fondo, alTocar}); m.pausa(true|false);
//      m.estado("acierto"); m.mirar(x, y); m.tecla(); m.hablar(true|false); m.actual; m.velocidad = 0; m.destruir();
// Estados: reposo, escribiendo, casi, acierto, error, celebrar, dormir,
//          sorpresa, curioso, pensativo, triste, enojado, carinoso, guino, saludar.
import * as THREE from "./three.module.min.js";

export const ESTADOS = ["reposo", "escribiendo", "casi", "acierto", "error", "celebrar", "dormir",
  "sorpresa", "curioso", "pensativo", "triste", "enojado", "carinoso", "guino", "saludar"];

const COL = {
  blanco: new THREE.Color("#FFFDF9"),
  gris: new THREE.Color("#9AA0A6"),
  rosa: new THREE.Color("#FF7E98"),
  ojo: new THREE.Color("#1F2430"),
  boca: new THREE.Color("#E8264F"),
  bocaDentro: new THREE.Color("#B81840"),
  lengua: new THREE.Color("#FF8FA6"),
  nariz: new THREE.Color("#FF8FA6"),
};

// ---------- material ----------
// Casi plano, como la ficha, pero pulido: sombra suave y fría del lado contrario a la luz, un poco más oscuro
// abajo (como si el piso no rebotara luz) y un borde apenas más oscuro hacia la silueta, que da volumen sin contorno.
// Parche = el gris de la cabeza, calculado en coordenadas de la cabeza (uLocal), así los párpados lo comparten.
function plano2(base, parche, corte) {
  return new THREE.ShaderMaterial({
    defines: corte ? { CORTE: 1 } : {},
    uniforms: {
      uBase: { value: base.clone() },
      uGris: { value: COL.gris.clone() },
      uParche: { value: parche ? 1 : 0 },
      uLuz: { value: new THREE.Vector3(-0.45, 0.65, 0.65).normalize() },
      uLocal: { value: new THREE.Matrix4() },
      uCorte: { value: new THREE.Vector2(9, 0) },
    },
    vertexShader: `
      uniform mat4 uLocal;
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      #ifdef CORTE
      attribute vec2 aLoc; varying vec2 vLoc;
      #endif
      void main(){
        #ifdef CORTE
        vLoc = aLoc;
        #endif
        vObj = (uLocal * vec4(position,1.0)).xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: `
      uniform vec3 uBase, uGris, uLuz; uniform float uParche; uniform vec2 uCorte;
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      #ifdef CORTE
      varying vec2 vLoc;
      #endif
      void main(){
        #ifdef CORTE
        if (vLoc.y < uCorte.x + vLoc.x * uCorte.y) discard;
        #endif
        vec3 base = uBase;
        if (uParche > 0.5) {
          vec2 q = vec2(vObj.x - 0.08, vObj.y - 0.12);
          q += vec2(sin(vObj.y*7.0)*0.025, sin(vObj.x*6.0+1.0)*0.02);
          float r = 0.42, g;
          if (q.x < r && q.y < r) g = r - length(vec2(r) - q); else g = min(q.x, q.y);
          base = mix(base, uGris, smoothstep(-0.006, 0.006, g));
        }
        vec3 n = normalize(vN);
        vec3 v = normalize(cameraPosition - vW);
        float d = dot(n, uLuz);
        float luz = smoothstep(-0.4, 0.25, d);
        vec3 sombra = base * vec3(0.86, 0.87, 0.94);
        vec3 c = mix(sombra, base, luz);
        c *= mix(0.93, 1.0, smoothstep(-0.9, 0.1, n.y));
        float borde = pow(1.0 - max(dot(n, v), 0.0), 2.5);
        c *= 1.0 - borde * 0.10;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
}

const liso = (c, extra) => new THREE.MeshBasicMaterial(Object.assign({ color: c }, extra || {}));

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

// Oreja: triángulo alto con la punta redondeada, aplanado.
function geoOreja(r, h, plano) {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const rr = r * Math.pow(1 - t, 0.92) * (1 - 0.3 * Math.pow(t, 5)) + 0.05 * Math.sin(t * Math.PI) * t;
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

function geoDestello(r) {
  const s = new THREE.Shape();
  s.moveTo(0, r);
  s.quadraticCurveTo(r * 0.12, r * 0.12, r, 0);
  s.quadraticCurveTo(r * 0.12, -r * 0.12, 0, -r);
  s.quadraticCurveTo(-r * 0.12, -r * 0.12, -r, 0);
  s.quadraticCurveTo(-r * 0.12, r * 0.12, 0, r);
  return new THREE.ShapeGeometry(s, 12);
}

// Ojo: óvalo oscuro con el fondo un poco azulado (da profundidad, como el iris de Epop sin perder el negro de la ficha).
const texOjo = textura((x, w, h) => {
  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#1A1E29"); g.addColorStop(0.55, "#1F2430"); g.addColorStop(1, "#3A4772");
  x.fillStyle = g;
  x.beginPath(); x.ellipse(w / 2, h / 2, w / 2 - 1, h / 2 - 1, 0, 0, Math.PI * 2); x.fill();
  // reflejo suave abajo, en media luna
  x.globalCompositeOperation = "source-atop";
  const r = x.createRadialGradient(w * 0.5, h * 0.98, 4, w * 0.5, h * 0.98, w * 0.55);
  r.addColorStop(0, "rgba(120,150,230,.55)"); r.addColorStop(1, "rgba(120,150,230,0)");
  x.fillStyle = r; x.fillRect(0, 0, w, h);
}, 128, 176);

const texMejilla = textura((x, w, h) => {
  const r = x.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
  r.addColorStop(0, "rgba(255,120,150,.85)"); r.addColorStop(0.55, "rgba(255,120,150,.35)"); r.addColorStop(1, "rgba(255,120,150,0)");
  x.fillStyle = r; x.fillRect(0, 0, w, h);
}, 128, 128);

const texSombraPecho = textura((x, w, h) => {
  const r = x.createRadialGradient(w / 2, h * 0.2, 4, w / 2, h * 0.2, w * 0.5);
  r.addColorStop(0, "rgba(120,128,170,.30)"); r.addColorStop(1, "rgba(120,128,170,0)");
  x.fillStyle = r; x.fillRect(0, 0, w, h);
}, 128, 96);

// ---------- construcción ----------
const CACHE = {};
function construir() {
  const raiz = new THREE.Group();       // salta, se estira y se aplasta
  const cuerpoG = new THREE.Group();    // respira
  const cabezaG = new THREE.Group();    // mira e inclina
  raiz.add(cuerpoG, cabezaG);

  const blanco = plano2(COL.blanco);
  const gris = plano2(COL.gris);

  // Cabeza: ancha, casi cuadrada, con cachetes abajo y la base algo plana.
  // La geometría pesada se calcula una vez y la comparten todos los Manzana de la página (CACHE).
  const formaCab = (o) => {
    o.x *= 1 + 0.07 * Math.exp(-Math.pow((o.u.y + 0.3) / 0.4, 2)) - 0.08 * Math.max(0, o.u.y);
    if (o.y < -0.8) o.y = -0.8 + (o.y + 0.8) * 0.7;
  };
  const geoCab = CACHE.cab || (CACHE.cab = superElipsoide(1.17, 1.0, 0.88, 2.35, formaCab, 96));
  const matCab = plano2(COL.blanco, true);
  const cabeza = new THREE.Mesh(geoCab, matCab);
  cabezaG.add(cabeza);
  cabeza.updateMatrixWorld();
  // para pegar piezas a la cara basta una cabeza de baja resolución (los rayos contra la de 96 segmentos eran lo
  // que más tardaba al crear a Manzana)
  const cabezaRayo = new THREE.Mesh(CACHE.cabRayo || (CACHE.cabRayo = superElipsoide(1.17, 1.0, 0.88, 2.35, formaCab, 40)));
  cabezaRayo.updateMatrixWorld();

  const rayo = new THREE.Raycaster();
  const Z = new THREE.Vector3(0, 0, 1);
  function enCara(x, y, sobre) {
    rayo.set(new THREE.Vector3(x, y, 5), new THREE.Vector3(0, 0, -1));
    const h = rayo.intersectObject(cabezaRayo, false)[0];
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

  // Orejas grandes; la derecha gris. Cada una tiene su pivote para el tic y para bajarse o pararse.
  const orejas = [];
  [[-1, blanco], [1, gris]].forEach(([lado, mat]) => {
    const piv = new THREE.Group();
    piv.position.set(0.66 * lado, 0.45, -0.1);
    piv.rotation.z = -0.24 * lado;
    const o = new THREE.Mesh(geoOreja(0.52, 1.04, 0.5), mat);
    piv.add(o);
    const dentro = new THREE.Mesh(geoOreja(0.29, 0.6, 0.3), plano2(COL.rosa));
    dentro.position.set(0.03 * lado, 0.22, 0.15);
    piv.add(dentro);
    piv.userData = { lado, base: piv.rotation.z };
    cabezaG.add(piv);
    orejas.push(piv);
  });

  // Ojos: el ojo (se achica al parpadear) y, aparte, párpados y ceja (no se achican con él).
  const ojos = [];
  [-1, 1].forEach((lado) => {
    const g = new THREE.Group();
    pegar(g, 0.43 * lado, -0.05, 0.006);
    const marco = new THREE.Group();          // mismo lugar que el ojo, sin escala
    marco.position.copy(g.position); marco.quaternion.copy(g.quaternion);

    const abierto = new THREE.Group();
    const ov = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: texOjo, transparent: true }));
    ov.scale.set(0.37, 0.5, 1);
    abierto.add(ov);
    // brillos: uno grande arriba y uno pequeño abajo, del lado de la luz. Se mueven poco al mirar.
    const brillos = new THREE.Group();
    const b1 = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(new THREE.Color("#FFFFFF")));
    b1.scale.set(0.062, 0.07, 1); b1.position.set(-0.052, 0.085, 0.004);
    const b2 = new THREE.Mesh(new THREE.CircleGeometry(0.026, 18), liso(new THREE.Color("#FFFFFF")));
    b2.position.set(0.05, -0.095, 0.004);
    brillos.add(b1, b2);
    abierto.add(brillos);
    const destello = new THREE.Mesh(geoDestello(0.09), liso(new THREE.Color("#FFFFFF")));
    destello.position.set(0.03, 0.02, 0.005);
    destello.visible = false;
    abierto.add(destello);
    abierto.userData = { ov, brillos, destello };

    const feliz = arco(0.14, 0.038, 0, Math.PI, COL.ojo);
    feliz.position.y = -0.06;
    const cerrado = arco(0.13, 0.034, Math.PI, Math.PI, COL.ojo);
    cerrado.position.y = 0.04;
    // «> <» de risa fuerte
    const apretado = new THREE.Group();
    [0.5, -0.5].forEach((a) => {
      const c = new THREE.Mesh(new THREE.CapsuleGeometry(0.034, 0.15, 6, 10), liso(COL.ojo));
      c.rotation.z = Math.PI / 2 + a * -lado;
      c.position.set(-0.045 * lado, a * 0.075, 0);
      apretado.add(c);
    });
    g.add(abierto, feliz, cerrado, apretado);
    g.userData = { abierto, feliz, cerrado, apretado, lado };

    // párpado: copia de la piel de la cabeza alrededor del ojo, un poco por delante; el shader la corta
    // por debajo de una línea (alto y ángulo en coordenadas del ojo), así no deja bordes ni cambia de sombra.
    marco.updateMatrix();
    let gp = CACHE["parp" + lado];
    if (!gp) {
      gp = CACHE["parp" + lado] = new THREE.PlaneGeometry(0.66, 0.66, 12, 12);
      const loc = [], pos = gp.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i); loc.push(v.x, v.y);
        v.applyMatrix4(marco.matrix);
        const h = enCara(v.x, v.y, 0.03).p;
        pos.setXYZ(i, h.x, h.y, h.z);
      }
      gp.setAttribute("aLoc", new THREE.Float32BufferAttribute(loc, 2));
      gp.computeVertexNormals();
    }
    const matP = plano2(COL.blanco, true, true);
    const parpado = new THREE.Mesh(gp, matP);
    parpado.renderOrder = 2;
    parpado.visible = false;
    cabezaG.add(parpado);
    // ceja
    const ceja = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.17, 6, 12), liso(COL.ojo));
    ceja.rotation.order = "ZYX";
    ceja.position.set(0, 0.34, 0.06);
    ceja.visible = false;
    marco.add(ceja);
    marco.userData = { parpado, ceja, matP };

    cabezaG.add(g, marco);
    ojos.push({ g, marco, lado });
  });

  // Mejillas rosadas, suaves.
  const mejillas = [-1, 1].map((lado) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.26),
      new THREE.MeshBasicMaterial({ map: texMejilla, transparent: true, depthWrite: false, opacity: 0.35 }));
    pegar(m, 0.74 * lado, -0.3, 0.012);
    cabezaG.add(m);
    return m;
  });

  // Nariz.
  const tn = new THREE.Shape();
  tn.moveTo(-0.055, 0.024);
  tn.quadraticCurveTo(0, 0.044, 0.055, 0.024);
  tn.quadraticCurveTo(0.032, -0.022, 0, -0.034);
  tn.quadraticCurveTo(-0.032, -0.022, -0.055, 0.024);
  const nariz = new THREE.Mesh(new THREE.ShapeGeometry(tn, 12), liso(COL.nariz));
  pegar(nariz, 0, -0.15, 0.01);
  cabezaG.add(nariz);

  // Bigotes: dos rayitas gruesas por lado. Van en un grupo por lado para moverse un poco.
  const bigotes = [-1, 1].map((lado) => {
    const bg = new THREE.Group();
    [[-0.06, 0.1], [-0.22, -0.28]].forEach(([y, ang]) => {
      const w = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.16, 6, 12), liso(COL.ojo));
      w.rotation.z = Math.PI / 2 + ang * lado;
      const borde = enCara(1.1 * lado, y - 0.04, 0).p;
      w.position.set(1.22 * lado, y - 0.04, Math.max(borde.z, 0.2) * 0.85);
      bg.add(w);
    });
    bg.userData = { lado };
    cabezaG.add(bg);
    return bg;
  });

  // Bocas. «abierta» se abre más o menos (para hablar) escalando su grupo interno.
  function formaBoca(s) {
    const f = new THREE.Shape();
    f.moveTo(-0.15 * s, 0);
    f.quadraticCurveTo(-0.075 * s, 0.034 * s, 0, -0.004 * s);
    f.quadraticCurveTo(0.075 * s, 0.034 * s, 0.15 * s, 0);
    f.bezierCurveTo(0.16 * s, -0.24 * s, -0.16 * s, -0.24 * s, -0.15 * s, 0);
    const g = new THREE.Group();
    const dentro = new THREE.Group();
    dentro.add(new THREE.Mesh(new THREE.ShapeGeometry(f, 28), liso(COL.boca)));
    const fondo = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(COL.bocaDentro));
    fondo.scale.set(0.1 * s, 0.05 * s, 1); fondo.position.set(0, -0.055 * s, 0.001);
    const l = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(COL.lengua));
    l.scale.set(0.088 * s, 0.05 * s, 1);
    l.position.set(0, -0.122 * s, 0.002);
    dentro.add(fondo, l);
    g.add(dentro);
    g.userData.dentro = dentro;
    return g;
  }
  const bocas = {};
  bocas.w = pegar(formaBoca(0.8), 0, -0.22, 0.01);
  bocas.abierta = pegar(formaBoca(1.18), 0, -0.22, 0.012);
  const o = new THREE.Mesh(new THREE.CircleGeometry(1, 28), liso(COL.boca));
  o.scale.set(0.065, 0.08, 1);
  bocas.o = pegar(o, 0, -0.31, 0.01);
  bocas.triste = pegar(arco(0.08, 0.024, 0, Math.PI, COL.ojo), 0, -0.34, 0.01);
  // «ω» cerrada: dos arquitos
  const omega = new THREE.Group();
  [-1, 1].forEach((l) => { const a = arco(0.055, 0.02, Math.PI, Math.PI, COL.ojo); a.position.x = 0.055 * l; omega.add(a); });
  bocas.omega = pegar(omega, 0, -0.22, 0.01);
  // ondulada (duda / casi)
  const pts = [];
  for (let i = 0; i <= 24; i++) { const t = i / 24; pts.push(new THREE.Vector3((t - 0.5) * 0.26, Math.sin(t * Math.PI * 2) * 0.022, 0)); }
  bocas.onda = pegar(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 0.018, 8, false), liso(COL.ojo)), 0, -0.3, 0.012);
  Object.values(bocas).forEach((b) => cabezaG.add(b));

  const lagrima = new THREE.Mesh(elipsoide(0.05, 0.072, 0.03, 16),
    liso(new THREE.Color("#7FB6FF"), { transparent: true, opacity: 0.9 }));
  lagrima.visible = false;
  cabezaG.add(lagrima);

  // Cuerpo: frijol pequeño, más ancho abajo, con una sombra suave bajo la barbilla.
  const cuerpo = new THREE.Mesh(superElipsoide(0.58, 0.62, 0.5, 2.4, (o) => {
    o.x *= 1 + 0.14 * Math.max(0, -o.u.y);
    o.z *= 1 + 0.08 * Math.max(0, -o.u.y);
  }, 56), blanco);
  cuerpo.position.set(0, -1.26, -0.08);
  cuerpoG.add(cuerpo);
  const pecho = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.5),
    new THREE.MeshBasicMaterial({ map: texSombraPecho, transparent: true, depthWrite: false }));
  pecho.position.set(0, -0.98, 0.43);
  cuerpoG.add(pecho);

  // Patas delanteras con pivote en el hombro (saludan, celebran, se llevan a la barbilla).
  const patas = [-1, 1].map((lado) => {
    const piv = new THREE.Group();
    piv.position.set(0.24 * lado, -1.18, 0.2);
    const pata = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.4, 8, 24), blanco);
    pata.position.set(0, -0.36, 0.03);
    piv.add(pata);
    // dedos: dos rayitas lilas en la punta
    [-1, 1].forEach((d) => {
      const r = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.05, 4, 8), liso(new THREE.Color("#C9CCE0")));
      r.position.set(d * 0.045, -0.66, 0.17);
      piv.add(r);
    });
    piv.userData = { lado };
    cuerpoG.add(piv);
    return piv;
  });
  [-1, 1].forEach((lado) => {
    const muslo = new THREE.Mesh(elipsoide(0.24, 0.27, 0.36, 32), blanco);
    muslo.position.set(0.52 * lado, -1.64, -0.2);
    cuerpoG.add(muslo);
  });

  // Cola gris gruesa en «C».
  const cola = new THREE.Group();
  const colaM = new THREE.Mesh(new THREE.BufferGeometry(), gris);
  const punta = new THREE.Mesh(new THREE.SphereGeometry(0.18, 24, 18), gris);
  cola.add(colaM, punta);
  raiz.add(cola);
  const PC = [
    [0.3, -1.74, -0.42], [0.8, -1.76, -0.36], [1.14, -1.58, -0.3], [1.22, -1.3, -0.24], [1.06, -1.1, -0.2],
  ].map((p) => new THREE.Vector3(...p));
  const colaPts = PC.map((p) => p.clone());
  const colaCurva = new THREE.CatmullRomCurve3(colaPts);
  // La cola es un tubo de topología fija: cada cuadro solo se mueven sus vértices (antes se creaba un TubeGeometry
  // nuevo por cuadro, que era lo más caro de todo el modelo).
  const SEG = 28, RAD = 12, RT = 0.18;
  const colaGeo = new THREE.TubeGeometry(colaCurva, SEG, RT, RAD, false);
  colaM.geometry.dispose();
  colaM.geometry = colaGeo;
  const cPos = colaGeo.attributes.position, cNor = colaGeo.attributes.normal;
  const _p = new THREE.Vector3(), _n = new THREE.Vector3();
  function rehacerCola(t, fuerza, alza) {
    PC.forEach((p, i) => {
      const k = i / (PC.length - 1);
      colaPts[i].set(
        p.x + Math.sin(t * 2.4 - i * 0.85) * 0.11 * k * fuerza,
        p.y + Math.cos(t * 2.4 - i * 0.85) * 0.06 * k * fuerza + alza * k * k * 0.5,
        p.z);
    });
    colaCurva.updateArcLengths();
    const fr = colaCurva.computeFrenetFrames(SEG, false);
    let v = 0;
    for (let i = 0; i <= SEG; i++) {
      colaCurva.getPointAt(i / SEG, _p);
      const N = fr.normals[i], B = fr.binormals[i];
      for (let j = 0; j <= RAD; j++) {
        const a = (j / RAD) * Math.PI * 2, sn = Math.sin(a), cs = -Math.cos(a);
        _n.set(cs * N.x + sn * B.x, cs * N.y + sn * B.y, cs * N.z + sn * B.z).normalize();
        cNor.setXYZ(v, _n.x, _n.y, _n.z);
        cPos.setXYZ(v, _p.x + RT * _n.x, _p.y + RT * _n.y, _p.z + RT * _n.z);
        v++;
      }
    }
    cPos.needsUpdate = true; cNor.needsUpdate = true;
    colaGeo.computeBoundingSphere();
    punta.position.copy(colaPts[colaPts.length - 1]);
  }

  const sombra = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.0),
    new THREE.MeshBasicMaterial({
      transparent: true, depthWrite: false,
      map: textura((x, w, h) => {
        const r = x.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2);
        r.addColorStop(0, "rgba(130,140,175,.42)"); r.addColorStop(0.6, "rgba(130,140,175,.22)"); r.addColorStop(1, "rgba(130,140,175,0)");
        x.setTransform(1, 0, 0, h / w, 0, 0);
        x.fillStyle = r; x.fillRect(0, 0, w, w);
      }, 256, 80),
    }));
  sombra.rotation.x = -Math.PI / 2;
  sombra.position.set(0.1, -1.9, 0);

  return { raiz, cuerpoG, cabezaG, orejas, ojos, mejillas, bigotes, bocas, patas, lagrima, rehacerCola, sombra, enCara };
}

// ---------- partículas y símbolos ----------
const estrella = (x, w, h, col) => {
  x.translate(w / 2, h / 2); x.fillStyle = col;
  x.beginPath();
  x.moveTo(0, -58); x.quadraticCurveTo(8, -8, 58, 0); x.quadraticCurveTo(8, 8, 0, 58);
  x.quadraticCurveTo(-8, 8, -58, 0); x.quadraticCurveTo(-8, -8, 0, -58); x.fill();
};
const texEstrella = textura((x, w, h) => estrella(x, w, h, "#FFC83D"));
const texChispa = textura((x, w, h) => { estrella(x, w, h, "#FFC83D"); x.beginPath(); x.arc(0, 0, 22, 0, Math.PI * 2); x.fill(); });
const texZ = textura((x, w, h) => {
  x.font = "800 96px Poppins, system-ui, sans-serif";
  x.fillStyle = "#6E7FB8"; x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("z", w / 2, h / 2);
});
const signo = (s, col) => textura((x, w, h) => {
  x.font = "900 110px Poppins, system-ui, sans-serif";
  x.textAlign = "center"; x.textBaseline = "middle";
  x.lineWidth = 14; x.strokeStyle = "#FFFFFF"; x.lineJoin = "round";
  x.strokeText(s, w / 2, h / 2 + 6); x.fillStyle = col; x.fillText(s, w / 2, h / 2 + 6);
});
const texPregunta = signo("?", "#2F6BFF");
const texExclama = signo("!", "#FFB000");
const texCorazon = textura((x, w, h) => {
  x.translate(w / 2, h / 2 + 6); x.fillStyle = "#FF5C80";
  x.beginPath(); x.moveTo(0, 40);
  x.bezierCurveTo(-70, -6, -38, -62, 0, -28); x.bezierCurveTo(38, -62, 70, -6, 0, 40); x.fill();
  x.fillStyle = "rgba(255,255,255,.7)"; x.beginPath(); x.ellipse(-24, -22, 9, 6, -0.6, 0, Math.PI * 2); x.fill();
});
const texGota = textura((x, w, h) => {
  x.translate(w / 2, h / 2); x.fillStyle = "#8EC5FF";
  x.beginPath(); x.moveTo(0, -48); x.quadraticCurveTo(36, 4, 30, 22); x.arc(0, 22, 30, 0, Math.PI); x.quadraticCurveTo(-36, 4, 0, -48); x.fill();
  x.fillStyle = "rgba(255,255,255,.8)"; x.beginPath(); x.ellipse(-10, 18, 6, 10, 0.3, 0, Math.PI * 2); x.fill();
});
const texEnojo = textura((x, w, h) => {
  x.translate(w / 2, h / 2); x.strokeStyle = "#F0304F"; x.lineWidth = 15; x.lineCap = "round";
  for (let i = 0; i < 4; i++) {
    x.save(); x.rotate(i * Math.PI / 2 + Math.PI / 4);
    x.beginPath(); x.moveTo(14, -34); x.quadraticCurveTo(14, -14, 34, -14); x.stroke(); x.restore();
  }
});

// ---------- motor ----------
// Objetivos por estado (todo se suaviza hacia aquí). ceja: [visible 0–1, alto, ángulo (+ = punta de adentro abajo)]
// párpado: [cierre 0–1, ángulo]. Para la cara: ojo «abierto|feliz|cerrado|apretado|guino», boca, mejilla 0–1.
const CARAS = {
  reposo:     { ojo: "abierto", boca: "w", mej: 0.35 },
  escribiendo:{ ojo: "abierto", boca: "omega", mej: 0.3, ceja: [0.8, -0.02, 0.12], parp: [0.18, 0] },
  casi:       { ojo: "abierto", boca: "onda", mej: 0.3, ceja: [1, 0.04, -0.3], cejaAsim: 0.12, ojoS: 1.08 },
  acierto:    { ojo: "feliz", boca: "abierta", mej: 0.8 },
  error:      { ojo: "abierto", boca: "triste", mej: 0.2, ceja: [1, 0.0, -0.42], parp: [0.32, -0.32], ojoS: 0.95 },
  celebrar:   { ojo: "apretado", boca: "abierta", mej: 1, brillo: true },
  dormir:     { ojo: "cerrado", boca: "o", mej: 0.45 },
  sorpresa:   { ojo: "abierto", boca: "o", mej: 0.3, ceja: [1, 0.12, -0.15], ojoS: 1.2, chico: true },
  curioso:    { ojo: "abierto", boca: "w", mej: 0.35, ceja: [1, 0.04, 0], cejaAsim: 0.14, ojoS: 1.05 },
  pensativo:  { ojo: "abierto", boca: "omega", mej: 0.3, ceja: [0.9, 0.02, -0.1], parp: [0.28, 0.06] },
  triste:     { ojo: "abierto", boca: "triste", mej: 0.25, ceja: [1, 0.02, -0.5], parp: [0.3, -0.38], ojoS: 1.06 },
  enojado:    { ojo: "abierto", boca: "onda", mej: 0.15, ceja: [1, -0.06, 0.55], parp: [0.36, 0.42], ojoS: 0.92 },
  carinoso:   { ojo: "feliz", boca: "w", mej: 1 },
  guino:      { ojo: "guino", boca: "abierta", mej: 0.7 },
  saludar:    { ojo: "feliz", boca: "abierta", mej: 0.7 },
};

export function crearManzana(canvas, opciones) {
  const op = Object.assign({ fondo: null, lejos: 1 }, opciones || {});
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tactil = matchMedia("(pointer: coarse)").matches;
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  r.setPixelRatio(Math.min(devicePixelRatio || 1, tactil ? 1.5 : 2));
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.debug.checkShaderErrors = false;   // la comprobación pide el registro de cada shader de forma síncrona: frena la creación
  const escena = new THREE.Scene();
  if (op.fondo) escena.background = new THREE.Color(op.fondo);
  const cam = new THREE.PerspectiveCamera(20, 1, 0.1, 60);
  cam.position.set(0, 0.2, 13);
  cam.lookAt(0, -0.3, 0);

  const M = construir();
  escena.add(M.raiz, M.sombra);
  const parts = [];

  let velocidad = 1, habla = false;
  let est = "reposo", t0 = 0, reloj = 0, ultimo = performance.now();
  let proxParpadeo = 1.5, parpadeo = -1, dobleParpadeo = false, proxOreja = 2.5, orejaT = -1, orejaLado = 0;
  let proxMirada = 1.2, nod = 0, yawAntes = 0, orejaLag = 0;
  const mira = new THREE.Vector2(0, 0), miraIdle = new THREE.Vector2(0, 0), miraS = new THREE.Vector2(0, 0);
  const S = { yaw: 0, pitch: 0, roll: 0, salto: 0, estira: 1, orejaZ: 0, orejaX: 0, giro: 0, ojoS: 1, mej: 0.35,
    ceja: 0, cejaY: 0, cejaA: 0, cejaAsim: 0, parp: 0, parpA: 0, pataI: 0, pataD: 0, boca: 0.5, colaAlza: 0, cuerpoX: 0 };
  const ease = (a, b, k) => a + (b - a) * k;
  const R0 = M.patas.map((p) => p.rotation.z);

  function ponerCara(c, brillo, cierre) {
    M.ojos.forEach(({ g, lado }) => {
      const u = g.userData;
      let ojo = c.ojo;
      if (ojo === "guino") ojo = lado < 0 ? "feliz" : "abierto";
      u.abierto.visible = ojo === "abierto";
      u.feliz.visible = ojo === "feliz";
      u.cerrado.visible = ojo === "cerrado";
      u.apretado.visible = ojo === "apretado";
      u.abierto.userData.destello.visible = !!brillo;
      u.abierto.userData.brillos.visible = !brillo;
      u.abierto.userData.ov.scale.set(c.chico ? 0.33 : 0.37, c.chico ? 0.46 : 0.5, 1);
      g.userData.cierre = ojo === "abierto" ? cierre : 1;
    });
    Object.entries(M.bocas).forEach(([k, b]) => (b.visible = k === c.boca));
  }

  function soltar(tex, n, o) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      const a = (o.abanico ? -Math.PI / 2 + (Math.random() - 0.5) * 2.6 : (o.ang != null ? o.ang : Math.random() * Math.PI * 2));
      s.position.copy(o.desde).add(new THREE.Vector3((Math.random() - 0.5) * (o.disp != null ? o.disp : 0.4), 0, 0.5));
      const v = o.vel * (0.7 + Math.random() * 0.6);
      s.userData = {
        v: new THREE.Vector3(Math.cos(a) * v * (o.abanico ? -1 : 1), Math.abs(Math.sin(a)) * v + o.sube, 0),
        vida: o.vida, max: o.vida, tam: o.tam * (o.fijo ? 1 : 0.7 + Math.random() * 0.6), g: o.g,
        giro: o.sinGiro ? 0 : (Math.random() - 0.5) * 6, pop: !!o.pop, bamboleo: o.bamboleo || 0, fase: Math.random() * 6,
      };
      s.scale.setScalar(0.001);
      escena.add(s);
      parts.push(s);
    }
  }
  // símbolo que aparece junto a la cabeza con un «pop» y flota
  const simbolo = (tex, x, y, tam, vida) => soltar(tex, 1, { desde: new THREE.Vector3(x, y, 0), vel: 0.12, ang: Math.PI / 2, sube: 0.12, vida: vida || 1.8, tam: tam || 0.5, g: 0, disp: 0, fijo: true, sinGiro: true, pop: true, bamboleo: 0.08 });

  function estado(nombre) {
    if (!CARAS[nombre]) nombre = "reposo";
    const antes = est;
    est = nombre; t0 = reloj;
    if (nombre !== antes) { parpadeo = -1; proxParpadeo = Math.max(proxParpadeo, reloj + 1.1); }
    if (nombre === "acierto" || nombre === "celebrar")
      soltar(texEstrella, nombre === "celebrar" ? 16 : 8, { desde: new THREE.Vector3(0, 0.3, 0), vel: 3.2, sube: 1.5, vida: 1.3, tam: 0.32, g: -5, abanico: true });
    if (nombre === "celebrar")
      soltar(texChispa, 10, { desde: new THREE.Vector3(0, 0.4, 0), vel: 2.6, sube: 1, vida: 1.4, tam: 0.22, g: -4, abanico: true });
    if (nombre === "casi") simbolo(texGota, 1.05, 0.75, 0.36, 1.6);
    if (nombre === "sorpresa") simbolo(texExclama, 1.1, 1.25, 0.62, 1.5);
    if (nombre === "curioso") simbolo(texPregunta, 1.12, 1.2, 0.62, 2.2);
    if (nombre === "pensativo") simbolo(texPregunta, -1.15, 1.15, 0.45, 2.4);
    if (nombre === "enojado") simbolo(texEnojo, 0.98, 1.0, 0.5, 2);
    if (nombre === "carinoso") { soltar(texCorazon, 5, { desde: new THREE.Vector3(0, 0.9, 0), vel: 0.9, sube: 0.9, vida: 2, tam: 0.38, g: -0.2, abanico: true, sinGiro: true, bamboleo: 0.25 }); }
    if (nombre === "guino") soltar(texChispa, 1, { desde: new THREE.Vector3(0.7, 0.35, 0), vel: 0.2, sube: 0.15, vida: 0.9, tam: 0.3, g: 0, disp: 0, fijo: true, pop: true });
    if (nombre === "escribiendo" && antes === "escribiendo") t0 = reloj;
  }

  function mirar(x, y) { mira.set(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y))); }
  function tecla() { nod = 1; if (est !== "escribiendo") estado("escribiendo"); else t0 = reloj; }
  function hablar(si) { habla = !!si; }

  function tam() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    r.setSize(w, h, false);
    cam.aspect = w / h;
    cam.position.z = (w / h < 0.8 ? 14.5 : 13) * op.lejos;
    cam.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(tam);
  ro.observe(canvas);
  tam();

  // Tocar a Manzana: la primera vez se alegra; si insisten, guiña o se ríe.
  const ray = new THREE.Raycaster();
  let toques = 0, ultToque = 0, abajo = null;
  const baja = (e) => { abajo = { x: e.clientX, y: e.clientY, t: performance.now() }; };
  // solo cuenta como toque si el dedo no se movió (al desplazar la página no reacciona)
  function toque(e) {
    if (!abajo) return;
    const mov = Math.hypot(e.clientX - abajo.x, e.clientY - abajo.y), dur = performance.now() - abajo.t;
    abajo = null;
    if (mov > 10 || dur > 450 || reloj - ultToque < 0.6) return;
    const b = canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
    ray.setFromCamera(p, cam);
    if (ray.intersectObject(M.raiz, true).length) {
      toques = reloj - ultToque < 2.5 ? toques + 1 : 0; ultToque = reloj;
      estado(["acierto", "guino", "carinoso", "saludar"][toques % 4]);
      op.alTocar && op.alTocar();
    }
  }
  const suelta = () => { abajo = null; };
  canvas.addEventListener("pointerdown", baja);
  canvas.addEventListener("pointerup", toque);
  canvas.addEventListener("pointercancel", suelta);

  // curvas de tiempo
  const salta = (e, d, alto) => {               // anticipación → vuelo → aterrizaje con rebote
    const ant = 0.12;
    if (e < ant) return { y: 0, est: 1 - 0.14 * Math.sin((e / ant) * Math.PI / 2) };
    const s = (e - ant) / d;
    if (s < 1) return { y: Math.sin(s * Math.PI) * alto, est: 1 + 0.12 * Math.cos(s * Math.PI) * (s < 0.5 ? 1 : -0.2) };
    const a = e - ant - d;
    return { y: 0, est: 1 - 0.12 * Math.exp(-a * 9) * Math.cos(a * 22) };
  };

  let rafId = 0, vivo = true;
  // En los estados tranquilos basta con 30 cuadros por segundo; las reacciones van a 60.
  const TRANQUILO = { reposo: 1, dormir: 1, triste: 1, pensativo: 1 };
  let ultPinta = 0;
  function cuadro(ahora) {
    if (!vivo) return;
    rafId = requestAnimationFrame(cuadro);
    if (TRANQUILO[est] && !parts.length && !habla && ahora - ultPinta < 31) return;
    ultPinta = ahora;
    const dt = Math.min((ahora - ultimo) / 1000, 0.05) * velocidad;
    ultimo = ahora;
    paso(dt);
    r.render(escena, cam);
  }
  // avanza el tiempo a pasos fijos (para capturas deterministas)
  function simular(seg) { for (let i = 0; i < Math.round(seg * 60); i++) paso(1 / 60); r.render(escena, cam); }
  function paso(dt) {
    reloj += quieto ? dt * 0.35 : dt;
    const t = reloj, e = t - t0;
    const k = 1 - Math.pow(0.0008, dt);
    const c = CARAS[est];

    // mirada: la que piden de fuera + vistazos sueltos cuando está en reposo
    if (est === "reposo" && t > proxMirada) {
      miraIdle.set((Math.random() - 0.5) * 0.9, (Math.random() - 0.4) * 0.6);
      if (Math.random() < 0.35) miraIdle.set(0, 0);
      proxMirada = t + 1.2 + Math.random() * 2.6;
    }
    if (est !== "reposo") miraIdle.set(0, 0);
    const mx = Math.max(-1, Math.min(1, mira.x + miraIdle.x)), my = Math.max(-1, Math.min(1, mira.y + miraIdle.y));
    miraS.x = ease(miraS.x, mx, Math.min(1, k * 2.2)); miraS.y = ease(miraS.y, my, Math.min(1, k * 2.2));

    let yaw = miraS.x * 0.35, pitch = -miraS.y * 0.2, roll = miraS.x * -0.05;
    let salto = 0, estira = 1, orejaZ = 0, orejaX = 0, giro = 0, ojoS = c.ojoS || 1, colaF = 1, colaAlza = 0;
    let pataI = 0, pataD = 0, brillo = !!c.brillo, cuerpoX = 0;
    M.lagrima.visible = false;

    switch (est) {
      case "reposo":
        roll += Math.sin(t * 0.7) * 0.03;
        break;
      case "escribiendo":
        yaw = -0.12 + miraS.x * 0.15; pitch = 0.24; roll = 0.07; colaF = 0.6;
        pataI = 0.18 + Math.max(0, Math.sin(t * 22)) * nod * 0.25; pataD = 0.18 + Math.max(0, Math.sin(t * 22 + 1.6)) * nod * 0.25;
        if (e > 6) estado("reposo");
        break;
      case "casi":
        orejaZ = -0.1; roll = 0.2 * Math.sin(e * 7) * Math.exp(-e * 2) + 0.16; pitch = -0.04; yaw = 0.12;
        if (e > 2.4) estado("reposo");
        break;
      case "acierto": {
        const j = salta(e, 0.48, 0.6);
        salto = j.y; estira = j.est; orejaZ = -0.12; pitch = -0.12; colaF = 2.2; colaAlza = 0.4;
        pataI = pataD = e > 0.1 && e < 1.1 ? 2.2 : 0;
        if (e > 1.9) estado("reposo");
        break;
      }
      case "error":
        orejaZ = 0.6; orejaX = 0.25; pitch = 0.2; roll = -0.1; colaF = 0.25; colaAlza = -0.15;
        yaw = Math.sin(e * 16) * 0.12 * Math.exp(-e * 3);
        estira = 1 - 0.05 * Math.min(1, e * 4);
        M.lagrima.visible = e < 2.2;
        if (M.lagrima.visible) {
          const p = M.enCara(0.52, -0.3 - Math.min(e, 1.6) * 0.16, 0.04).p;
          M.lagrima.position.copy(p);
          M.lagrima.material.opacity = 0.9 * Math.min(1, (2.2 - e) * 2);
        }
        if (e > 2.8) estado("reposo");
        break;
      case "celebrar": {
        const n = Math.floor(e / 0.62), s = (e % 0.62) / 0.62;
        if (n < 2) { const j = salta(e % 0.62, 0.42, n === 0 ? 0.7 : 0.45); salto = j.y; estira = j.est; }
        giro = Math.sin(e * 9) * 0.22 * Math.exp(-e * 0.9);   // meneo de alegría (antes daba una vuelta entera)
        orejaZ = -0.16; colaF = 2.6; pitch = -0.14; colaAlza = 0.5;
        pataI = 2.5 + Math.sin(e * 14) * 0.25; pataD = 2.5 + Math.sin(e * 14 + 2) * 0.25;
        if (e > 2.7) estado("reposo");
        break;
      }
      case "dormir":
        pitch = 0.32; roll = 0.14; yaw = 0.05; orejaZ = 0.2; colaF = 0.15;
        estira = 1 + Math.sin(t * 1.6) * 0.02;
        if (Math.floor(t * 1.1) !== Math.floor((t - dt) * 1.1))
          soltar(texZ, 1, { desde: new THREE.Vector3(0.7, 0.9, 0), vel: 0.15, sube: 0.55, vida: 2.4, tam: 0.3, g: 0, abanico: false });
        break;
      case "sorpresa": {
        const j = salta(e, 0.25, 0.22);
        salto = j.y; estira = j.est; orejaZ = -0.28; orejaX = -0.1; pitch = -0.1; colaAlza = 0.35; colaF = 0.5;
        pataI = pataD = Math.min(1, e * 6) * 0.55;
        if (e > 2.2) estado("reposo");
        break;
      }
      case "curioso":
        roll = 0.26 + Math.sin(e * 2) * 0.03; yaw = 0.15; pitch = -0.05; orejaZ = -0.12; colaF = 1.4;
        if (e > 2.8) estado("reposo");
        break;
      case "pensativo":
        roll = -0.12; yaw = -0.18; pitch = -0.12; colaF = 0.5;
        pataI = -2.55; // la pata a la barbilla
        mira.set(-0.5, 0.6);
        if (e > 3.2) { mira.set(0, 0); estado("reposo"); }
        break;
      case "triste":
        orejaZ = 0.65; orejaX = 0.3; pitch = 0.24; roll = -0.06; colaF = 0.2; colaAlza = -0.2;
        estira = 0.96;
        break;
      case "enojado":
        orejaZ = 0.35; orejaX = 0.35; pitch = 0.1; colaF = 1.8;
        yaw = Math.sin(e * 3) * 0.05; cuerpoX = Math.sin(e * 30) * 0.015 * Math.exp(-e * 2);
        if (e > 2.6) estado("reposo");
        break;
      case "carinoso":
        roll = 0.2 * Math.sin(e * 2.2); pitch = -0.05; orejaZ = -0.05; colaF = 1.6; colaAlza = 0.3;
        estira = 1 + Math.sin(e * 4.4) * 0.02;
        if (e > 3) estado("reposo");
        break;
      case "guino":
        roll = 0.15; yaw = 0.12; pitch = -0.06; colaF = 1.6;
        if (e > 1.6) estado("reposo");
        break;
      case "saludar":
        roll = 0.1 + Math.sin(e * 3) * 0.05; pitch = -0.08; orejaZ = -0.1; colaF = 1.8; colaAlza = 0.3;
        pataI = 2.6 + Math.sin(e * 11) * 0.32;
        if (e > 2.6) estado("reposo");
        break;
      default: break;
    }

    // parpadeo (a veces doble) y tic de oreja
    if (t > proxParpadeo && c.ojo === "abierto") {
      parpadeo = t; dobleParpadeo = Math.random() < 0.25; proxParpadeo = t + 2 + Math.random() * 3.5;
    }
    let cierre = 1;
    if (parpadeo > 0) {
      const p = (t - parpadeo) / 0.15;
      if (p < 1) cierre = Math.max(0.06, Math.abs(1 - 2 * p));
      else if (dobleParpadeo && p < 2.3) cierre = p < 1.3 ? 1 : Math.max(0.06, Math.abs(1 - 2 * (p - 1.3)));
      else parpadeo = -1;
    }
    if (t > proxOreja) { orejaT = t; orejaLado = Math.random() < 0.5 ? 0 : 1; proxOreja = t + 3 + Math.random() * 4; }

    // suavizado
    S.yaw = ease(S.yaw, yaw, k); S.pitch = ease(S.pitch, pitch, k); S.roll = ease(S.roll, roll, k);
    S.orejaZ = ease(S.orejaZ, orejaZ, k); S.orejaX = ease(S.orejaX, orejaX, k); S.ojoS = ease(S.ojoS, ojoS, Math.min(1, k * 1.6));
    S.salto = salto; S.estira = ease(S.estira, estira, Math.min(1, k * 4)); S.giro = giro;
    S.mej = ease(S.mej, c.mej, k);
    const cj = c.ceja || [0, 0, 0], pp = c.parp || [0, 0];
    S.ceja = ease(S.ceja, cj[0], Math.min(1, k * 1.5)); S.cejaY = ease(S.cejaY, cj[1], k); S.cejaA = ease(S.cejaA, cj[2], k);
    S.cejaAsim = ease(S.cejaAsim, c.cejaAsim || 0, k);
    S.parp = ease(S.parp, c.ojo === "abierto" ? pp[0] : 0, Math.min(1, k * 1.4)); S.parpA = ease(S.parpA, pp[1], k);
    S.pataI = ease(S.pataI, pataI, Math.min(1, k * 1.6)); S.pataD = ease(S.pataD, pataD, Math.min(1, k * 1.6));
    S.colaAlza = ease(S.colaAlza, colaAlza, k); S.cuerpoX = cuerpoX;
    const abreBoca = habla && c.boca !== "triste" ? 0.35 + 0.65 * Math.abs(Math.sin(t * 13) * Math.sin(t * 7.3 + 1)) : 1;
    S.boca = ease(S.boca, abreBoca, Math.min(1, k * 5));
    nod *= Math.pow(0.002, dt);
    // las orejas se quedan un poco atrás cuando la cabeza gira (movimiento secundario)
    const dYaw = dt > 0 ? (S.yaw - yawAntes) / dt : 0; yawAntes = S.yaw;
    orejaLag = ease(orejaLag, -dYaw * 0.06, Math.min(1, k * 2));

    // aplicar
    const resp = Math.sin(t * 2.4);
    M.raiz.position.set(S.cuerpoX, S.salto, 0);
    const ancho = 1 + (1 - S.estira) * 0.7;
    M.raiz.scale.set(ancho, S.estira, ancho);
    M.raiz.rotation.y = S.giro;
    M.cuerpoG.scale.set(1 + resp * 0.01, 1 + resp * 0.018, 1);
    M.cabezaG.position.y = 0.02 + resp * 0.02;
    M.cabezaG.rotation.set(S.pitch + nod * 0.12, S.yaw, S.roll + Math.sin(t * 0.9) * 0.02);
    M.orejas.forEach((o, i) => {
      const tic = orejaT > 0 && i === orejaLado && t - orejaT < 0.35 ? Math.sin(((t - orejaT) / 0.35) * Math.PI * 3) * 0.18 : 0;
      o.rotation.z = o.userData.base - o.userData.lado * S.orejaZ + tic * o.userData.lado + orejaLag;
      o.rotation.x = -S.orejaX;
    });
    ponerCara(habla && (c.boca === "w" || c.boca === "omega") ? Object.assign({}, c, { boca: "abierta" }) : c, brillo, cierre);
    M.bocas.abierta.userData.dentro.scale.y = S.boca;
    M.bocas.w.userData.dentro.scale.y = S.boca;
    M.ojos.forEach(({ g, marco, lado }) => {
      const u = g.userData;
      g.scale.set(S.ojoS, S.ojoS * u.cierre, 1);
      u.abierto.userData.ov.position.set(miraS.x * 0.035, miraS.y * 0.03, 0);
      u.abierto.userData.brillos.position.set(miraS.x * 0.012, miraS.y * 0.01, 0);
      const m = marco.userData;
      // párpado: borde de abajo baja desde encima del ojo hasta cubrir «parp»
      m.parpado.visible = S.parp > 0.02 && u.abierto.visible;
      m.matP.uniforms.uCorte.value.set(0.27 * S.ojoS - S.parp * 0.5 * S.ojoS, Math.tan(S.parpA * lado));
      // ceja: aparece creciendo; la asimetría sube la de un lado (curioso, casi)
      m.ceja.visible = S.ceja > 0.03;
      m.ceja.scale.setScalar(Math.max(0.001, S.ceja));
      m.ceja.position.y = 0.31 * S.ojoS + S.cejaY + (lado > 0 ? S.cejaAsim : -S.cejaAsim * 0.3);
      m.ceja.rotation.z = Math.PI / 2 + S.cejaA * lado;
    });
    marcoMatrices();
    M.mejillas.forEach((m) => { m.material.opacity = S.mej * 0.85; });
    M.bigotes.forEach((b) => { b.rotation.z = Math.sin(t * 1.3 + b.userData.lado) * 0.03 + (habla ? Math.sin(t * 13) * 0.02 : 0); });
    // patas: la izquierda (de quien mira) saluda y se lleva a la barbilla
    M.patas.forEach((p, i) => {
      const a = i === 0 ? S.pataI : S.pataD;
      // al subir, la pata se adelanta para pasar por delante de los cachetes
      const aa = Math.abs(a), sube = Math.max(0, Math.min(1, (aa - 1.2) / 1.1));
      p.rotation.z = R0[i] + a * p.userData.lado;
      p.rotation.x = -0.3 * Math.min(aa, 1.2) + 1.05 * sube;
      p.position.z = 0.2 + 0.5 * sube;
      p.scale.set(1, 1 + 0.3 * sube, 1);
    });
    M.rehacerCola(t, colaF, S.colaAlza);
    const sm = 1 - Math.min(S.salto, 1) * 0.5;
    M.sombra.scale.set(sm * (0.9 + 0.1 * ancho), sm, 1);
    M.sombra.material.opacity = sm;

    for (let i = parts.length - 1; i >= 0; i--) {
      const s = parts[i], u = s.userData;
      u.vida -= dt;
      if (u.vida <= 0) { escena.remove(s); s.material.dispose(); parts.splice(i, 1); continue; }
      u.v.y += u.g * dt;
      s.position.addScaledVector(u.v, dt);
      if (u.bamboleo) s.position.x += Math.sin(t * 5 + u.fase) * u.bamboleo * dt;
      const p = 1 - u.vida / u.max;
      const crece = u.pop ? (p < 0.12 ? (p / 0.12) * 1.25 : p < 0.2 ? 1.25 - (p - 0.12) / 0.08 * 0.25 : 1) : Math.min(1, p * 6);
      s.scale.setScalar(u.tam * crece * (1 - Math.max(0, p - 0.75) / 0.25 * (u.pop ? 0.3 : 0.6)));
      s.material.rotation += u.giro * dt;
      s.material.opacity = Math.min(1, u.vida * 2.5);
    }
  }
  function marcoMatrices() { M.ojos.forEach(({ marco }) => marco.updateMatrix()); }
  marcoMatrices();
  rafId = requestAnimationFrame(cuadro);

  // pausa con la app oculta o cuando quien lo usa lo pide (fuera de pantalla)
  let pausado = false;
  const vis = () => {
    cancelAnimationFrame(rafId);
    if (!document.hidden && vivo && !pausado) { ultimo = performance.now(); rafId = requestAnimationFrame(cuadro); }
  };
  function pausa(si) { if (!!si === pausado) return; pausado = !!si; vis(); }
  document.addEventListener("visibilitychange", vis);

  return {
    estado, mirar, tecla, hablar, simular, pausa,
    get actual() { return est; },
    get velocidad() { return velocidad; },
    set velocidad(v) { velocidad = v; },
    destruir() {
      vivo = false; cancelAnimationFrame(rafId); ro.disconnect();
      document.removeEventListener("visibilitychange", vis);
      canvas.removeEventListener("pointerdown", baja);
      canvas.removeEventListener("pointerup", toque);
      canvas.removeEventListener("pointercancel", suelta);
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
