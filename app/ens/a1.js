/* PLEX PLAY 4.54 — Sistema de enseñanza: las fichas del curso «Francés A1» (a1). Solo datos (los pinta js/plx122.js).
   La piloto a1-saluer sigue en ensena.js. La app baja este archivo al abrir una lección del curso.
   A1 parte de «Primeros pasos»: BASE son los conceptos de ese curso que todas las fichas dan por enseñados.
   Personajes: Camila, estudiante colombiana en Lyon; Hugo, su amigo francés; Madame Sofia, la profesora. */
(function(){
window.__ENSENA = window.__ENSENA || {};
var E = window.__ENSENA;
var PJ = {
  camila: { n: "Camila", voz: "fr-FR-VivienneMultilingualNeural", rol: "estudiante" },
  hugo: { n: "Hugo", voz: "fr-FR-HenriNeural", rol: "su amigo francés" },
  sofia: { n: "Madame Sofia", voz: "fr-FR-DeniseNeural", rol: "la profesora" },
  vendeur: { n: "El vendedor", voz: "fr-FR-RemyMultilingualNeural", rol: "vendedor" }
};
var REP = { dias: [1, 3, 7, 16, 35] }, DOM = { criterio: 0.75, min: 2 };
var BASE = ["ho-llegar", "ho-irse", "ho-salut", "me-merci", "me-svp", "me-oui", "pr-nom", "pr-q", "pr-ench", "ar-le", "ar-un",
  "fa-voc", "fa-mon", "am-ami", "vo-presentar", "av-formas", "av-neg", "et-formas", "et-nat", "n1-05", "n1-610", "n2-num", "n2-age",
  "n6-dec", "n6-comp", "jo-dias", "jo-hoy", "mo-meses", "mo-est", "he-decir", "he-preg", "re-comprendre", "re-pedir", "np-regla",
  "np-vocal", "qq-palabras", "qq-frases", "pa2-formas", "pa2-nivel", "ha-a", "ha-ou", "ai-formas", "ai-preg", "es-etudier", "es-voc",
  "li-voc", "li-ou", "cv-preg", "cv-resp", "ma-voc", "ma-dans", "mg-voc", "mg-du", "bo-voc", "co-basicos", "gp-adj", "gp-fem"];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ A1·1 y A1·2 ================================ */

E["a1-nombres-age"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les nombres, l'âge et l'alphabet",
  objetivo: {
    que: "Vas a repasar los números hasta 69, decir y preguntar la edad (también de usted) y deletrear.",
    corto: "Números, edad y deletrear.",
    podras: ["Decir y preguntar la edad: Vous avez quel âge ?", "Formar números hasta 69.", "Deletrear y preguntar Comment ça s'écrit ?"],
    iconos: ["ic2/regalo", "ic2/lapiz", "ic2/moneda"],
    previos: ["Los números (Primeros pasos) y la piloto Saluer (lección 1)."],
    capacidad: "Ahora puedes dar tus datos básicos en una inscripción."
  },
  requiere: R("al-dificiles"), recupera: ["n2-age", "al-dificiles"],
  conceptos: {
    "na-age": { n: "La edad con avoir: j'ai, il a, vous avez", b: "age" },
    "na-num": { n: "Números hasta 69", b: "num" },
    "na-ecrire": { n: "Comment ça s'écrit ? Deletrear", b: "age" }
  },
  video: {
    titulo: "Edad y números", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "Vous avez quel âge ?", seg: [
        { es: "Hola. En una inscripción te piden la edad y que deletrees tu nombre." } ] },
      { v: "dos",
        a: { tag: "de tú", fr: "Tu as quel âge ?", es: "¿Cuántos años tienes?" },
        b: { tag: "de usted", fr: "Vous avez quel âge ?", es: "¿Qué edad tiene usted?" },
        seg: [ { es: "A un amigo:", p: 1 }, { fr: "Tu as quel âge ?", p: 1 }, { es: "De usted:", p: 2 }, { fr: "Vous avez quel âge ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermano tiene 20 años.»", o: ["Mon frère a vingt ans.", "Mon frère est vingt ans."], a: 0,
        bien: "¡Sí! La edad se tiene.", mal: "La edad va con avoir: il a vingt ans.",
        seg: [ { es: "Pausa. ¿Tener o ser?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai… ans", "vous avez", "vingt et un", "quarante-huit", "Comment ça s'écrit ?"], seg: [
        { es: "Y para que te deletreen algo:", p: 1 }, { fr: "Comment ça s'écrit ?", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La inscripción", img: "bg-universidad", yo: "camila",
    escena: "Camila se inscribe en la biblioteca de la universidad.",
    pj: PJ,
    lineas: [
      ["sofia", "Vous vous appelez comment ?", "¿Cómo se llama usted?"],
      ["camila", "Camila Ríos. J'ai dix-neuf ans.", "Camila Ríos. Tengo diecinueve años."],
      ["sofia", "Ríos ? Comment ça s'écrit ?", "¿Ríos? ¿Cómo se escribe?"],
      ["camila", "R, I, O, S.", "R, I, O, S."]
    ],
    fijate: "Fíjate: Comment ça s'écrit ? = ¿Cómo se escribe?"
  },
  ensena: [
    { id: "age", tipo: "gram", titulo: "La edad y deletrear",
      idea: "La edad se dice con avoir y siempre con ans: j'ai, il a, vous avez + número + ans.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'ai dix-neuf ans.", "Tengo diecinueve años.", "yo"],
        ["Ma sœur a vingt-deux ans.", "Mi hermana tiene veintidós años.", "ella"],
        ["Vous avez quel âge, Madame ?", "¿Qué edad tiene usted, señora?", "de usted"],
        ["Comment ça s'écrit ?", "¿Cómo se escribe?", "deletrear"],
        ["Pardon, comment ça s'écrit ?", "Perdón, ¿cómo se escribe?", "deletrear"]
      ]],
      regla: ["vous avez = usted tiene.", "Nunca «je suis 20 ans»."] },
    { id: "num", tipo: "vocab", titulo: "Números hasta 69",
      idea: "21, 31, 41, 51, 61: et un. Los demás con guion: vingt-deux, quarante-huit.",
      intro: "Toca cada número.",
      palabras: [
        { fr: "vingt et un", es: "21" }, { fr: "vingt-deux", es: "22" }, { fr: "trente-cinq", es: "35" },
        { fr: "quarante-huit", es: "48" }, { fr: "cinquante et un", es: "51" }, { fr: "soixante-neuf", es: "69" }
      ] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mon frère est 20 ans.", "Mon frère a 20 ans.", "La edad va con avoir."], ["vingt-un", "vingt et un", "21 lleva et."]] }
  ],
  ejemplos: [
    { sit: "Preguntas la edad a una señora.", resp: "Vous avez quel âge, Madame ?", pasos: ["De usted: vous avez."], porque: "Cortesía." },
    { sit: "«Paula tiene 21 años.»", resp: "Paula a vingt et un ans.", pasos: ["il / elle a.", "vingt et un."], porque: "Edad." },
    { sit: "No sabes cómo se escribe un nombre.", resp: "Comment ça s'écrit ?", pasos: ["Frase fija."], porque: "Deletrear." }
  ],
  comprueba: [
    { q: "«Vous avez quel âge ?» es…", o: ["de usted", "de tú"], a: 0, b: "age", porque: "vous." },
    { q: "48 en letras…", o: ["quarante-huit", "quatre-huit"], a: 0, b: "num", porque: "Decena + guion." },
    { q: "«Comment ça s'écrit ?» significa…", o: ["¿Cómo se escribe?", "¿Cómo se dice?"], a: 0, b: "age", porque: "Deletrear." }
  ],
  practica: [
    { fase: "guiada", c: ["na-age"], k: "fill", ask: "Escribe avoir (yo).", q: "Je m'appelle Sofía et j'___ dix-neuf ans.", acc: ["ai"], pista: "j' + ai.", why: "<b>j'ai</b>." },
    { fase: "guiada", c: ["na-num"], k: "match", ask: "Une cada número.", q: "Francés → cifra", pairs: [["vingt et un", "21"], ["trente-cinq", "35"], ["quarante-huit", "48"], ["soixante-neuf", "69"]], pista: "et un con el 1.", why: "Números." },
    { fase: "guiada", c: ["na-ecrire"], k: "choice", ask: "No entiendes cómo se escribe un apellido.", q: "Tú: «Pardon, ___»", o: ["comment ça s'écrit ?", "comment tu t'appelles ?", "quel âge ?"], a: 0, pista: "Escribir.", why: "<b>comment ça s'écrit ?</b>" },
    { fase: "indep", c: ["na-age"], k: "spot", ask: "Encuentra el error.", s: "Mon frère [est] 20 ans .", fix: "a", why: "<b>Mon frère a 20 ans.</b>" },
    { fase: "indep", c: ["na-age"], k: "fill", ask: "Escribe avoir (vous).", q: "Vous ___ quel âge, Madame ?", acc: ["avez"], why: "<b>vous avez</b>." },
    { fase: "indep", c: ["na-num"], k: "choice", ask: "Paula tiene 21 años.", q: "«Paula a ___ ans.»", o: ["vingt et un", "vingt-un", "un-vingt"], a: 0, why: "<b>vingt et un</b>." },
    { fase: "aplica", c: ["na-num"], k: "fill", ask: "Escribe 48 en letras.", q: "Mon professeur a ___ ans.", acc: ["quarante-huit"], why: "<b>quarante-huit</b>." },
    { fase: "aplica", c: ["na-age"], k: "order", ask: "Ordena: «Mi hermana tiene veintidós años».", tokens: ["Ma sœur", "a", "vingt-deux", "ans."], why: "<b>Ma sœur a vingt-deux ans.</b>" },
    { fase: "dominio", c: ["na-ecrire"], k: "choice", es: true, ask: "En francés, la J se pronuncia…", q: "Elige.", o: ["«yi»", "«yé»", "«jota»"], a: 0, why: "J = «yi»." },
    { fase: "dominio", c: ["na-ecrire", "na-num"], k: "listen", say: "Comment ça s'écrit ?", acc: ["Comment ça s'écrit ?", "Comment ça s'écrit?", "Comment ça s'écrit"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Comment ça s'écrit ?</b>" },
    { fase: "dominio", c: ["na-age", "na-num"], k: "listen", say: "Aujourd'hui, Paula a vingt et un ans.", acc: ["Aujourd'hui, Paula a vingt et un ans.", "Aujourd'hui, Paula a 21 ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Aujourd'hui, Paula a vingt et un ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Ríos", "Sofía", "Paula", "R", "I", "O", "S"], previo: ["professeur", "aujourd'hui"] }
};

E["a1-articles"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les articles et le genre des noms",
  objetivo: {
    que: "Vas a usar los artículos le, la, l', les, un, une, des y a aprender cada nombre con su género, que a veces no es el del español.",
    corto: "El artículo dice el género y el número.",
    podras: ["Usar le, la, l', les.", "Usar un, une, des.", "No copiar el género del español: le lait, la mer."],
    iconos: ["ic2/libro", "ic2/lapiz", "m2d/pensativo"],
    previos: ["le, la, un, une (Primeros pasos, lección 10)."],
    capacidad: "Ahora puedes nombrar cosas en singular y plural con su artículo."
  },
  requiere: R("ob-voc", "cl-voc"), recupera: ["ar-le", "ar-un"],
  conceptos: {
    "at-def": { n: "le, la, l', les", b: "art" },
    "at-indef": { n: "un, une, des", b: "art" },
    "at-genre": { n: "Género distinto del español", b: "genre" }
  },
  video: {
    titulo: "Los artículos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le lait · la mer", seg: [
        { es: "Hola. En francés casi todo nombre lleva artículo. ¡Y el género a veces cambia!" } ] },
      { v: "dos",
        a: { tag: "español: la leche", fr: "le lait", es: "masculino en francés" },
        b: { tag: "español: el mar", fr: "la mer", es: "femenino en francés" },
        seg: [ { es: "La leche, en francés, es masculina:", p: 1 }, { fr: "le lait", p: 1 }, { es: "Y el mar, femenino:", p: 2 }, { fr: "la mer", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«unos libros»", o: ["des livres", "un livres"], a: 0,
        bien: "¡Sí! Plural: des.", mal: "En plural, un y une se vuelven des.",
        seg: [ { es: "Pausa. Varios libros." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le", "la", "l'", "les", "un", "une", "des"], seg: [
        { es: "Aprende cada palabra con su artículo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi cuarto", img: "bg-cafe", yo: "camila",
    escena: "Camila describe su cuarto a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Dans ma chambre, il y a un lit, une table et des livres.", "En mi cuarto hay una cama, una mesa y libros."],
      ["hugo", "Et la fenêtre ?", "¿Y la ventana?"],
      ["camila", "La fenêtre est grande. J'étudie à l'université.", "La ventana es grande. Estudio en la universidad."],
      ["hugo", "Où est le lait ? — Dans la cuisine !", "¿Dónde está la leche? — ¡En la cocina!"]
    ],
    fijate: "Fíjate: des livres (unos libros), le lait (masculino)."
  },
  ensena: [
    { id: "art", tipo: "gram", titulo: "Los artículos",
      idea: "Definidos: le, la, l', les (el, la, los). Indefinidos: un, une, des (un, una, unos).",
      intro: "Toca cada ejemplo.",
      tabla: [["Singular", "Plural", "Español"], [
        ["le livre", "les livres", "el libro, los libros"],
        ["la table", "les tables", "la mesa, las mesas"],
        ["l'hôtel", "les hôtels", "el hotel, los hoteles"],
        ["un stylo", "des stylos", "un bolígrafo, unos bolígrafos"],
        ["une amie", "des amies", "una amiga, unas amigas"],
        ["J'ai une sœur et deux frères.", "—", "Tengo una hermana y dos hermanos."]
      ]],
      regla: ["En plural la s no suena: el artículo te dice si es plural.", "l' delante de vocal: l'école, l'université."] },
    { id: "genre", tipo: "gram", titulo: "Género distinto",
      idea: "Algunos nombres cambian de género: le lait (la leche), la mer (el mar), la voiture (el carro). Apréndelos con su artículo.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Ojo"], [
        ["le lait", "la leche", "masculino"],
        ["le fromage", "el queso", "—"],
        ["le voyage", "el viaje", "-age: masculino"],
        ["la mer", "el mar", "femenino"],
        ["la voiture", "el carro", "femenino"],
        ["la nation", "la nación", "-tion: femenino"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la lait", "le lait", "Masculino en francés."], ["un voiture", "une voiture", "Femenino en francés."]] }
  ],
  ejemplos: [
    { sit: "«¿Dónde está la leche?»", resp: "Où est le lait ?", pasos: ["lait es masculino → le."], porque: "Género francés." },
    { sit: "«Hay unos libros.»", resp: "Il y a des livres.", pasos: ["Plural indefinido → des."], porque: "Plural." },
    { sit: "«Estudio en la universidad.»", resp: "J'étudie à l'université.", pasos: ["Vocal → l'."], porque: "Elisión." }
  ],
  comprueba: [
    { q: "«le lait» es…", o: ["masculino", "femenino"], a: 0, b: "genre", porque: "Le." },
    { q: "El plural de «un stylo» es…", o: ["des stylos", "les stylo"], a: 0, b: "art", porque: "des." },
    { q: "Delante de vocal, le y la se vuelven…", o: ["l'", "les"], a: 0, b: "art", porque: "Elisión." }
  ],
  practica: [
    { fase: "guiada", c: ["at-genre"], k: "choice", ask: "«¿Dónde está la leche?»", q: "«Où est ___ lait ?»", o: ["le", "la", "l'"], a: 0, pista: "Masculino en francés.", why: "<b>le lait</b>." },
    { fase: "guiada", c: ["at-indef"], k: "fill", ask: "Escribe el artículo indefinido.", q: "J'ai ___ sœur et deux frères.", acc: ["une"], pista: "sœur es femenina.", why: "<b>une sœur</b>." },
    { fase: "guiada", c: ["at-def", "at-indef"], k: "match", ask: "Une singular y plural.", q: "Singular → plural", pairs: [["le livre", "les livres"], ["une amie", "des amies"], ["l'hôtel", "les hôtels"], ["un stylo", "des stylos"]], pista: "un → des; le → les.", why: "Plurales." },
    { fase: "indep", c: ["at-genre"], k: "sort", ask: "¿Masculino o femenino?", q: "Clasifica.", cats: ["Masculino (le / un)", "Femenino (la / une)"], items: [["fromage", 0], ["voyage", 0], ["lait", 0], ["nation", 1], ["voiture", 1], ["mer", 1]], why: "-age masculino; -tion femenino." },
    { fase: "indep", c: ["at-genre"], k: "spot", ask: "Encuentra el error.", s: "Il y a [un] voiture devant la maison .", fix: "une", why: "<b>une voiture</b>." },
    { fase: "indep", c: ["at-def"], k: "choice", ask: "«Estudio en la universidad de Pamplona.»", q: "«J'étudie à ___ université de Pamplona.»", o: ["l'", "la", "le"], a: 0, why: "<b>l'université</b>." },
    { fase: "aplica", c: ["at-indef"], k: "fill", ask: "Escribe el artículo indefinido.", q: "Dans mon sac, il y a ___ livres et un cahier.", acc: ["des"], why: "<b>des livres</b>." },
    { fase: "aplica", c: ["at-def"], k: "choice", ask: "Vives en Pamplona. «La ciudad es pequeña.»", q: "«___ ville est petite et jolie.»", o: ["La", "Le", "Les"], a: 0, why: "<b>La ville</b>." },
    { fase: "dominio", c: ["at-indef"], k: "choice", ask: "«—¿Qué es? —Es un bolígrafo.»", q: "«C'est ___ stylo.»", o: ["un", "une", "des"], a: 0, why: "<b>un stylo</b>." },
    { fase: "dominio", c: ["at-genre"], k: "choice", ask: "«el mar»", q: "«___»", o: ["la mer", "le mer"], a: 0, why: "<b>la mer</b>." },
    { fase: "dominio", c: ["at-def", "at-indef"], k: "listen", say: "J'ai une sœur et deux frères.", acc: ["J'ai une sœur et deux frères.", "J'ai une soeur et deux frères."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai une sœur et deux frères.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pamplona"], previo: ["sac", "cahier", "devant", "il", "y", "a", "soeur", "école", "jolie", "ville"] }
};

E["a1-verbes-er"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le présent des verbes en -er et la négation",
  objetivo: {
    que: "Vas a conjugar en presente los verbos en -er con todas las personas y negarlos con ne… pas.",
    corto: "La mayoría de verbos se conjugan igual.",
    podras: ["Conjugar parler, habiter, écouter con je… ils.", "Saber qué terminaciones no suenan.", "Negar con ne… pas y n'."],
    iconos: ["m2d/escribiendo", "ic2/lapiz", "m2d/pensativo"],
    previos: ["je parle, tu parles (Primeros pasos) y ne… pas."],
    capacidad: "Ahora puedes contar tu día con cualquier verbo en -er."
  },
  requiere: R("lo-verbos"), recupera: ["pa2-formas", "np-regla"],
  conceptos: {
    "er-term": { n: "Terminaciones -e, -es, -e, -ons, -ez, -ent", b: "conj" },
    "er-oral": { n: "Lo que suena y lo que no", b: "conj" },
    "er-neg": { n: "ne… pas / n'", b: "neg" }
  },
  video: {
    titulo: "Verbos en -er", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "parler", seg: [
        { es: "Hola. Casi todos los verbos franceses terminan en e erre, y se conjugan igual." } ] },
      { v: "frase", filas: [
          { nota: "suenan igual", p: 1, partes: [["je parle · tu parles · ils parlent", "-", 1]] },
          { nota: "se oyen", p: 2, partes: [["nous parlons · vous parlez", "-", 2]] } ], seg: [
        { es: "Estas tres suenan igual, aunque se escriben distinto.", p: 1 },
        { es: "Solo nosotros y ustedes se oyen distinto.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Comemos»", o: ["nous mangeons", "nous mangons"], a: 0,
        bien: "¡Sí! La e mantiene el sonido de la g.", mal: "Con manger se añade e: mangeons.",
        seg: [ { es: "Pausa. Cuidado con este verbo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je parle", "tu parles", "nous parlons", "vous parlez", "ils parlent", "ne… pas"], seg: [
        { es: "Y para negar, ne y pas alrededor del verbo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Nuestra semana", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comparan sus semanas.",
    pj: PJ,
    lineas: [
      ["hugo", "En classe, nous parlons français.", "En clase hablamos francés."],
      ["camila", "Et vous travaillez le samedi ?", "¿Y ustedes trabajan el sábado?"],
      ["hugo", "Non, je ne travaille pas le samedi.", "No, no trabajo el sábado."],
      ["camila", "Moi, j'habite à Lyon et j'étudie le français.", "Yo vivo en Lyon y estudio francés."]
    ],
    fijate: "Fíjate: nous parlons, vous travaillez: esas sí se oyen."
  },
  ensena: [
    { id: "conj", tipo: "gram", titulo: "La conjugación",
      idea: "Quita -er y añade -e, -es, -e, -ons, -ez, -ent. -e, -es y -ent no suenan.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "¿Se oye?"], [
        ["j'écoute", "escucho", "no"],
        ["tu écoutes", "escuchas", "no"],
        ["il écoute", "escucha", "no"],
        ["nous écoutons", "escuchamos", "sí: -ons"],
        ["vous écoutez", "escuchan / escucha usted", "sí: -ez"],
        ["ils écoutent", "escuchan", "no"],
        ["nous mangeons", "comemos", "manger + e"],
        ["nous commençons", "empezamos", "commencer + ç"]
      ]],
      ej: [["je parle", "hablo"], ["tu parles", "hablas"], ["nous parlons", "hablamos"], ["vous parlez", "ustedes hablan"], ["ils parlent", "ellos hablan"], ["ils mangent", "ellos comen"], ["vous mangez", "ustedes comen"]],
      regla: ["j' delante de vocal: j'habite, j'écoute."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Nous mangons.", "Nous mangeons.", "Con manger se añade e."], ["Je ne aime pas le café.", "Je n'aime pas le café.", "n' + vocal."]] },
    { id: "neg", tipo: "gram", titulo: "La negación",
      idea: "ne + verbo + pas; delante de vocal, n'.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je ne travaille pas le dimanche.", "No trabajo el domingo.", "ne… pas"],
        ["Elle n'habite pas à Paris.", "Ella no vive en París.", "n' + vocal"],
        ["Je n'aime pas le café.", "No me gusta el café.", "n' + vocal"]
      ]] }
  ],
  ejemplos: [
    { sit: "«Hablamos francés.»", resp: "Nous parlons français.", pasos: ["parl- + ons."], porque: "nous." },
    { sit: "«¿Vives en Pamplona?»", resp: "Tu habites à Pamplona ?", pasos: ["habit- + es."], porque: "tu." },
    { sit: "«Ella no vive en París.»", resp: "Elle n'habite pas à Paris.", pasos: ["n' delante de habite."], porque: "Vocal." }
  ],
  comprueba: [
    { q: "«ils parlent» y «il parle»…", o: ["suenan igual", "suenan distinto"], a: 0, b: "conj", porque: "-ent no suena." },
    { q: "La terminación de nous es…", o: ["-ons", "-ez"], a: 0, b: "conj", porque: "nous -ons." },
    { q: "«Je ne aime pas» está…", o: ["mal: je n'aime pas", "bien"], a: 0, b: "neg", porque: "n' + vocal." }
  ],
  practica: [
    { fase: "guiada", c: ["er-term"], k: "fill", ask: "Conjuga parler (nous).", q: "En classe, nous ___ français.", acc: ["parlons"], pista: "-ons.", why: "<b>parlons</b>." },
    { fase: "guiada", c: ["er-term"], k: "match", ask: "Une cada persona con su forma.", q: "Persona → écouter", pairs: [["j'", "écoute"], ["tu", "écoutes"], ["nous", "écoutons"], ["vous", "écoutez"], ["ils", "écoutent"]], pista: "nous -ons, vous -ez.", why: "Conjugación." },
    { fase: "guiada", c: ["er-neg"], k: "choice", ask: "«Ella no vive en París.»", q: "«Elle ___ pas à Paris.»", o: ["n'habite", "ne habite", "habite"], a: 0, pista: "Vocal.", why: "<b>n'habite</b>." },
    { fase: "indep", c: ["er-term"], k: "fill", ask: "Conjuga habiter (tu).", q: "Tu ___ à Pamplona ?", acc: ["habites"], why: "<b>habites</b>." },
    { fase: "indep", c: ["er-term"], k: "spot", ask: "Encuentra el error.", s: "Nous [mangons] à midi avec nos amis .", fix: "mangeons", why: "<b>mangeons</b>." },
    { fase: "indep", c: ["er-oral"], k: "sort", ask: "¿La terminación suena?", q: "Clasifica.", cats: ["Muda", "Se oye"], items: [["tu parles", 0], ["ils parlent", 0], ["je parle", 0], ["nous parlons", 1], ["vous parlez", 1]], why: "-ons y -ez se oyen." },
    { fase: "aplica", c: ["er-term"], k: "choice", ask: "Ellos comen en el restaurante.", q: "«Ils ___ au restaurant.»", o: ["mangent", "mangez", "mangeons"], a: 0, why: "<b>mangent</b>." },
    { fase: "aplica", c: ["er-neg"], k: "order", ask: "Ordena: «No trabajo el domingo».", tokens: ["Je ne", "travaille", "pas", "le dimanche."], why: "<b>Je ne travaille pas le dimanche.</b>" },
    { fase: "dominio", c: ["er-neg"], k: "fill", ask: "Escribe la palabra que falta.", q: "— Tu parles anglais ? — Non, je ___ parle pas anglais.", acc: ["ne"], why: "<b>ne</b>." },
    { fase: "dominio", c: ["er-term", "er-oral"], k: "fill", ask: "Conjuga commencer (nous).", q: "Le lundi, nous ___ le cours à huit heures.", acc: ["commençons"], why: "<b>commençons</b>: con ç." },
    { fase: "dominio", c: ["er-term", "er-neg"], k: "listen", say: "En classe, nous parlons français.", acc: ["En classe, nous parlons français.", "En classe nous parlons français."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En classe, nous parlons français.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Pamplona", "Paris"], previo: ["en", "classe", "travaillez", "samedi", "dimanche", "midi", "nos", "amis", "restaurant", "anglais", "cours", "huit", "heures", "lundi"] }
};

E["a1-irreguliers"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Être, avoir, aller, faire",
  objetivo: {
    que: "Vas a conjugar los cuatro verbos irregulares más usados: être, avoir, aller y faire.",
    corto: "Los cuatro verbos que más usarás.",
    podras: ["Conjugar être y avoir completos.", "Conjugar aller y faire.", "No confundir ils sont e ils ont."],
    iconos: ["m2d/senalar", "m2d/correr", "ic2/estrella"],
    previos: ["je suis, j'ai (Primeros pasos) y los verbos en -er (lección 4)."],
    capacidad: "Ahora puedes decir cómo eres, qué tienes, adónde vas y qué haces."
  },
  requiere: R("er-term", "fs-faim", "me-fait", "sp-jouer", "mg2-ouv"), recupera: ["et-formas", "av-formas"],
  conceptos: {
    "ir-etre-avoir": { n: "être y avoir completos", b: "conj" },
    "ir-aller-faire": { n: "aller y faire", b: "conj" }
  },
  video: {
    titulo: "Cuatro verbos clave", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "être · avoir · aller · faire", seg: [
        { es: "Hola. Ser, tener, ir y hacer: los verbos más usados, y los cuatro irregulares." } ] },
      { v: "dos",
        a: { tag: "ser", fr: "ils sont", es: "suena con «s»" },
        b: { tag: "tener", fr: "ils ont", es: "suena con «z»" },
        seg: [ { es: "Ellos son:", p: 1 }, { fr: "ils sont", p: 1 }, { es: "Ellos tienen:", p: 2 }, { fr: "ils ont", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ustedes hacen»", o: ["vous faites", "vous faisez"], a: 0,
        bien: "¡Sí! Faites.", mal: "Es irregular: vous faites.",
        seg: [ { es: "Pausa. Hacer, con ustedes." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je suis", "j'ai", "je vais", "je fais", "nous sommes", "vous faites", "ils vont"], seg: [
        { es: "Hay que memorizarlos. ¡Los usarás todo el tiempo!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila su fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Le samedi, nous faisons les courses au supermarché.", "Los sábados hacemos las compras en el supermercado."],
      ["camila", "Et vous faites du sport ?", "¿Y hacen deporte?"],
      ["hugo", "Oui ! Mes amis vont au stade. Ils sont très sportifs.", "¡Sí! Mis amigos van al estadio. Son muy deportistas."],
      ["camila", "Moi, je vais à l'université en bus. Et j'ai faim !", "Yo voy a la universidad en bus. ¡Y tengo hambre!"]
    ],
    fijate: "Fíjate: nous faisons, vous faites, ils vont, ils sont."
  },
  ensena: [
    { id: "conj", tipo: "gram", titulo: "Los cuatro irregulares",
      idea: "être: suis, es, est, sommes, êtes, sont. avoir: ai, as, a, avons, avez, ont. aller: vais, vas, va, allons, allez, vont. faire: fais, fais, fait, faisons, faites, font.",
      intro: "Toca cada forma.",
      tabla: [["Persona", "être / avoir", "aller / faire"], [
        ["je / j'", "je suis · j'ai", "je vais · je fais"],
        ["tu", "tu es · tu as", "tu vas · tu fais"],
        ["il / elle", "il est · il a", "il va · il fait"],
        ["nous", "nous sommes · nous avons", "nous allons · nous faisons"],
        ["vous", "vous êtes · vous avez", "vous allez · vous faites"],
        ["ils / elles", "ils sont · ils ont", "ils vont · ils font"]
      ]],
      ej: [["être", "ser, estar"], ["avoir", "tener"], ["aller", "ir"], ["faire", "hacer"], ["nous sommes", "somos"], ["vous êtes", "ustedes son"], ["ils sont", "ellos son"], ["nous avons", "tenemos"], ["vous avez", "ustedes tienen"], ["ils ont", "ellos tienen"], ["je vais", "voy"], ["tu vas", "vas"], ["il va", "va"], ["nous allons", "vamos"], ["vous allez", "ustedes van"], ["ils vont", "ellos van"], ["je fais", "hago"], ["il fait", "hace"], ["nous faisons", "hacemos"], ["vous faites", "ustedes hacen"], ["ils font", "ellos hacen"]],
      regla: ["ils sont («s») ≠ ils ont («z»).", "avoir para el hambre, el frío y la edad: j'ai faim."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis faim.", "J'ai faim.", "El hambre se tiene."], ["Vous faisez du sport ?", "Vous faites du sport ?", "Irregular."]] }
  ],
  ejemplos: [
    { sit: "«Hacemos las compras.»", resp: "Nous faisons les courses.", pasos: ["faire → nous faisons."], porque: "Irregular." },
    { sit: "«Voy a la universidad en bus.»", resp: "Je vais à l'université en bus.", pasos: ["aller → je vais."], porque: "Irregular." },
    { sit: "«Hoy hace mucho calor en Cúcuta.»", resp: "Aujourd'hui, il fait très chaud à Cúcuta.", pasos: ["il fait + clima."], porque: "faire." }
  ],
  comprueba: [
    { q: "«ils ont» significa…", o: ["ellos tienen", "ellos son"], a: 0, b: "conj", porque: "avoir." },
    { q: "«vous faites» es de…", o: ["faire", "aller"], a: 0, b: "conj", porque: "hacer." },
    { q: "«nous allons» significa…", o: ["vamos", "somos"], a: 0, b: "conj", porque: "aller." }
  ],
  practica: [
    { fase: "guiada", c: ["ir-aller-faire"], k: "fill", ask: "Conjuga faire (nous).", q: "Le samedi, nous ___ les courses au supermarché.", acc: ["faisons"], pista: "fais-ons.", why: "<b>faisons</b>." },
    { fase: "guiada", c: ["ir-etre-avoir", "ir-aller-faire"], k: "match", ask: "Une cada verbo con «ellos…».", q: "Verbo → ils", pairs: [["être", "ils sont"], ["avoir", "ils ont"], ["aller", "ils vont"], ["faire", "ils font"]], pista: "sont con s; ont con z.", why: "Tercera del plural." },
    { fase: "guiada", c: ["ir-etre-avoir"], k: "choice", ask: "«Tengo hambre.»", q: "«___»", o: ["J'ai faim.", "Je suis faim.", "Je fais faim."], a: 0, pista: "Se tiene.", why: "<b>J'ai faim.</b>" },
    { fase: "indep", c: ["ir-aller-faire"], k: "spot", ask: "Encuentra el error.", s: "Vous [faisez] du sport le week-end ?", fix: "faites", why: "<b>faites</b>." },
    { fase: "indep", c: ["ir-aller-faire"], k: "fill", ask: "Conjuga aller (je).", q: "Le lundi, je ___ à l'université en bus.", acc: ["vais"], why: "<b>vais</b>." },
    { fase: "indep", c: ["ir-etre-avoir"], k: "fill", ask: "Conjuga avoir (ils).", q: "Mes voisins ___ deux enfants.", acc: ["ont"], why: "<b>ont</b>." },
    { fase: "aplica", c: ["ir-etre-avoir", "ir-aller-faire"], k: "sort", ask: "¿Qué verbo es?", q: "Clasifica.", cats: ["être", "avoir", "aller", "faire"], items: [["je suis", 0], ["vous êtes", 0], ["tu as", 1], ["ils ont", 1], ["nous allons", 2], ["ils vont", 2], ["vous faites", 3], ["ils font", 3]], why: "Los cuatro irregulares." },
    { fase: "aplica", c: ["ir-aller-faire"], k: "choice", ask: "Hoy hace mucho calor en Cúcuta.", q: "«Aujourd'hui, il ___ très chaud à Cúcuta.»", o: ["fait", "est", "a"], a: 0, why: "<b>il fait</b>." },
    { fase: "dominio", c: ["ir-etre-avoir"], k: "fill", ask: "Conjuga être (nous).", q: "Nous ___ étudiants.", acc: ["sommes"], why: "<b>sommes</b>." },
    { fase: "dominio", c: ["ir-aller-faire"], k: "choice", ask: "«Ellos van al estadio.»", q: "«Ils ___ au stade.»", o: ["vont", "font", "sont"], a: 0, why: "<b>vont</b>." },
    { fase: "dominio", c: ["ir-etre-avoir", "ir-aller-faire"], k: "listen", say: "Le samedi, nous faisons les courses au supermarché.", acc: ["Le samedi, nous faisons les courses au supermarché.", "Le samedi nous faisons les courses au supermarché."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le samedi, nous faisons les courses au supermarché.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cúcuta"], previo: ["courses", "supermarché", "week-end", "voisins", "enfants", "stade", "sportifs", "mes", "deux", "étudiants", "aujourd'hui", "très", "chaud", "bus", "en", "université"] }
};

E["a1-questions"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Poser des questions",
  objetivo: {
    que: "Vas a preguntar de tres maneras (voz, est-ce que, inversión) y con las palabras interrogativas.",
    corto: "Tres maneras de preguntar.",
    podras: ["Preguntar con la voz, con est-ce que y con inversión.", "Usar où, quand, combien, qu'est-ce que.", "Responder a pourquoi con parce que."],
    iconos: ["ic2/pregunta", "m2d/pensativo", "ic2/estrella"],
    previos: ["Preguntas de sí o no y qui, quoi, où (Primeros pasos)."],
    capacidad: "Ahora puedes hacer preguntas en cualquier registro."
  },
  requiere: R("qo-voz", "qo-estce", "er-term", "ir-aller-faire"), recupera: ["qo-estce", "qq-palabras"],
  conceptos: {
    "qu-tres": { n: "Voz, est-ce que, inversión", b: "tres" },
    "qu-mots": { n: "où, quand, combien, qu'est-ce que, pourquoi", b: "mots" }
  },
  video: {
    titulo: "Preguntar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "Où est-ce que tu habites ?", seg: [
        { es: "Hola. Hay tres maneras de hacer la misma pregunta." } ] },
      { v: "frase", filas: [
          { nota: "familiar", p: 1, partes: [["Tu habites où ?", "-", 1]] },
          { nota: "corriente", p: 2, partes: [["Où est-ce que tu habites ?", "-", 2]] },
          { nota: "formal", p: 3, partes: [["Où habitez-vous ?", "-", 3]] } ], seg: [
        { es: "Con la voz, entre amigos.", p: 1 }, { es: "Con est-ce que, sirve siempre.", p: 2 }, { es: "Con inversión, más formal.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Qué haces esta noche?»", o: ["Qu'est-ce que tu fais ce soir ?", "Qu'est-ce que tu habites ?"], a: 0,
        bien: "¡Sí! Qu'est-ce que = qué.", mal: "Qu'est-ce que es qué: Qu'est-ce que tu fais ?",
        seg: [ { es: "Pausa. ¿Cómo preguntas qué?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["où", "quand", "combien", "qu'est-ce que", "pourquoi", "parce que"], seg: [
        { es: "Y a por qué se responde con porque.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Conocerse", img: "bg-universidad", yo: "camila",
    escena: "Una estudiante nueva le hace preguntas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Où est-ce que tu habites ?", "¿Dónde vives?"],
      ["camila", "À Lyon. Et le cours commence quand ?", "En Lyon. ¿Y cuándo empieza la clase?"],
      ["hugo", "À neuf heures. Pourquoi tu étudies le français ?", "A las nueve. ¿Por qué estudias francés?"],
      ["camila", "Parce que j'aime la culture française.", "Porque me gusta la cultura francesa."]
    ],
    fijate: "Fíjate: pourquoi → parce que."
  },
  ensena: [
    { id: "tres", tipo: "gram", titulo: "Tres maneras",
      idea: "Voz (Tu viens ?), est-ce que (Est-ce que tu viens ?), inversión (Viens-tu ? / Parlez-vous… ?).",
      intro: "Toca cada pregunta.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Tu viens ce soir ?", "¿Vienes esta noche?", "voz · familiar"],
        ["Est-ce que tu viens ?", "¿Vienes?", "est-ce que · corriente"],
        ["Est-ce qu'elle travaille ?", "¿Trabaja?", "est-ce qu' + vocal"],
        ["Parlez-vous anglais ?", "¿Habla usted inglés?", "inversión · formal"],
        ["Où habitez-vous ?", "¿Dónde vive usted?", "inversión · formal"],
        ["Est-ce que vous aimez le cinéma ?", "¿Le gusta el cine?", "est-ce que"]
      ]] },
    { id: "mots", tipo: "gram", titulo: "Palabras interrogativas",
      idea: "où (dónde), quand (cuándo), comment (cómo), combien (cuánto), pourquoi (por qué), qui (quién), qu'est-ce que (qué).",
      intro: "Toca cada pregunta.",
      tabla: [["Francés", "Español", "Pregunta por"], [
        ["Où est-ce que tu habites ?", "¿Dónde vives?", "lugar"],
        ["Le cours commence quand ?", "¿Cuándo empieza la clase?", "tiempo"],
        ["Combien coûte le café ?", "¿Cuánto cuesta el café?", "precio"],
        ["Qu'est-ce que tu fais ce soir ?", "¿Qué haces esta noche?", "cosa"],
        ["Pourquoi tu étudies le français ?", "¿Por qué estudias francés?", "causa"],
        ["Parce que j'aime la culture française.", "Porque me gusta la cultura francesa.", "respuesta"],
        ["Où est-ce que vous travaillez ?", "¿Dónde trabaja usted?", "lugar"]
      ]],
      regla: ["Qu'est-ce que = qué. Para lugares, où."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Qu'est-ce que tu habites ?", "Où est-ce que tu habites ?", "Para lugares, où."], ["Tu arrives comment ? — Demain.", "Tu arrives quand ? — Demain.", "Tiempo: quand."]] }
  ],
  ejemplos: [
    { sit: "Preguntas dónde vive (corriente).", resp: "Où est-ce que tu habites ?", pasos: ["Où + est-ce que + frase."], porque: "Lugar." },
    { sit: "Preguntas cuánto cuesta el café.", resp: "Combien coûte le café ?", pasos: ["Combien + coûte."], porque: "Precio." },
    { sit: "Preguntas a un profesor si habla inglés (formal).", resp: "Parlez-vous anglais ?", pasos: ["Inversión: verbo-sujeto."], porque: "Formal." }
  ],
  comprueba: [
    { q: "«Qu'est-ce que» significa…", o: ["qué", "dónde"], a: 0, b: "mots", porque: "Qué." },
    { q: "«Parlez-vous anglais ?» es…", o: ["formal (inversión)", "familiar"], a: 0, b: "tres", porque: "Inversión." },
    { q: "«combien» significa…", o: ["cuánto", "cómo"], a: 0, b: "mots", porque: "Cantidad." }
  ],
  practica: [
    { fase: "guiada", c: ["qu-mots"], k: "choice", ask: "—¿Dónde vives? —Vivo en Pamplona.", q: "«— ___ tu habites ?»", o: ["Où est-ce que", "Qu'est-ce que", "Quand est-ce que"], a: 0, pista: "Lugar.", why: "<b>Où est-ce que</b>." },
    { fase: "guiada", c: ["qu-mots"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["où", "dónde"], ["quand", "cuándo"], ["comment", "cómo"], ["combien", "cuánto"], ["pourquoi", "por qué"]], pista: "quand = cuándo.", why: "Interrogativos." },
    { fase: "guiada", c: ["qu-tres"], k: "sort", ask: "¿Qué forma es?", q: "Clasifica.", cats: ["Voz", "Est-ce que", "Inversión"], items: [["Tu viens ce soir ?", 0], ["Tu habites où ?", 0], ["Est-ce que tu viens ?", 1], ["Est-ce qu'elle travaille ?", 1], ["Parlez-vous anglais ?", 2], ["Où habitez-vous ?", 2]], pista: "Inversión: verbo-sujeto.", why: "Tres formas." },
    { fase: "indep", c: ["qu-mots"], k: "fill", ask: "Escribe «qué» (dos palabras unidas).", q: "___ tu fais ce soir ? — Je regarde un film.", acc: ["Qu'est-ce que", "Qu’est-ce que"], why: "<b>Qu'est-ce que</b>." },
    { fase: "indep", c: ["qu-mots"], k: "spot", ask: "Encuentra el error.", s: "— Tu arrives [comment] ? — Demain , à neuf heures .", fix: "quand", why: "Tiempo: <b>quand</b>." },
    { fase: "indep", c: ["qu-mots"], k: "choice", ask: "—¿Por qué estudias francés? —Porque me gusta la cultura.", q: "«— ___ j'aime la culture française.»", o: ["Parce que", "Pourquoi", "Quand"], a: 0, why: "<b>Parce que</b>." },
    { fase: "aplica", c: ["qu-tres"], k: "order", ask: "Pregunta a un profesor dónde trabaja (con est-ce que).", tokens: ["Où", "est-ce que", "vous", "travaillez ?"], why: "<b>Où est-ce que vous travaillez ?</b>" },
    { fase: "aplica", c: ["qu-mots"], k: "fill", ask: "Escribe «cuánto».", q: "— ___ coûte le café ? — Deux euros.", acc: ["Combien"], why: "<b>Combien</b>." },
    { fase: "dominio", c: ["qu-tres"], k: "choice", ask: "¿Cuál es correcta?", q: "«___»", o: ["Est-ce que vous aimez le cinéma ?", "Est-ce vous aimez le cinéma ?", "Que est-ce vous aimez le cinéma ?"], a: 0, why: "<b>Est-ce que…</b>" },
    { fase: "dominio", c: ["qu-mots"], k: "fill", ask: "Escribe «cuándo».", q: "— ___ est ton anniversaire ? — Le 12 mai.", acc: ["Quand"], why: "<b>Quand</b>." },
    { fase: "dominio", c: ["qu-tres", "qu-mots"], k: "listen", say: "Combien coûte le café ?", acc: ["Combien coûte le café ?", "Combien coûte le café?", "Combien coûte le café"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Combien coûte le café ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Pamplona"], previo: ["neuf", "heures", "culture", "française", "ce", "soir", "regarde", "film", "arrives", "demain", "deux", "euros", "ton", "anniversaire", "12", "mai", "cinéma", "anglais", "viens", "travaille"] }
};

E["a1-ville"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Se situer en ville",
  objetivo: {
    que: "Vas a decir adónde vas y dónde está algo, con au, aux, du, des y las preposiciones de lugar.",
    corto: "Ubicarte en la ciudad.",
    podras: ["Contraer à + le = au, de + le = du.", "Usar à côté de, en face de, près de, loin de.", "Explicar dónde está un lugar."],
    iconos: ["ic2/mundo", "m2d/senalar", "ic2/torre-eiffel"],
    previos: ["Los lugares y las direcciones (Primeros pasos)."],
    capacidad: "Ahora puedes explicar dónde está algo en tu ciudad."
  },
  requiere: R("di-lados", "di-dist", "mg2-ouv", "ir-aller-faire", "rv-donde"), recupera: ["mg2-ouv", "rv-donde"],
  conceptos: {
    "vi-contr": { n: "au, aux, du, des", b: "contr" },
    "vi-lugar": { n: "à côté de, en face de, près de, loin de", b: "lugar" }
  },
  video: {
    titulo: "En la ciudad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "Je vais au cinéma.", seg: [
        { es: "Hola. Como en español «a el» se vuelve «al», en francés hay contracciones." } ] },
      { v: "frase", filas: [
          { nota: "à + le", p: 1, partes: [["au cinéma", "-", 1]] },
          { nota: "de + le", p: 2, partes: [["à côté du parc", "-", 2]] },
          { nota: "à + les", p: 3, partes: [["aux toilettes", "-", 3]] } ], seg: [
        { es: "A más le, au.", p: 1 }, { es: "De más le, du.", p: 2 }, { es: "A más les, aux.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«frente a la alcaldía»", o: ["en face de la mairie", "à côté de la mairie"], a: 0,
        bien: "¡Sí! En face de = frente a.", mal: "À côté es al lado. Frente a: en face de.",
        seg: [ { es: "Pausa. ¿Frente a o al lado de?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au", "aux", "du", "des", "à côté de", "en face de", "près de", "loin de"], seg: [
        { es: "Con la y l' no cambia nada: à la, de l'.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Dónde está el correo?", img: "bg-paris", yo: "camila",
    escena: "Camila busca la oficina de correos.",
    pj: PJ,
    lineas: [
      ["camila", "Pardon, où est la poste ?", "Perdón, ¿dónde está el correo?"],
      ["vendeur", "Elle est en face de la mairie, à côté du café.", "Está frente a la alcaldía, al lado del café."],
      ["camila", "C'est loin ?", "¿Está lejos?"],
      ["vendeur", "Non, c'est près du parc. Vous allez au parc ?", "No, está cerca del parque. ¿Va al parque?"]
    ],
    fijate: "Fíjate: à côté du café, près du parc, au parc."
  },
  ensena: [
    { id: "contr", tipo: "gram", titulo: "Contracciones",
      idea: "à + le = au, à + les = aux, de + le = du, de + les = des. À la, à l', de la, de l' no cambian.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je vais au cinéma.", "Voy al cine.", "à + le = au"],
        ["Tu vas aux toilettes ?", "¿Vas al baño?", "à + les = aux"],
        ["La banque est à côté du parc.", "El banco está al lado del parque.", "de + le = du"],
        ["à côté des salles de cours", "al lado de los salones", "de + les = des"],
        ["Je vais à la banque.", "Voy al banco.", "sin cambio"],
        ["près de l'église", "cerca de la iglesia", "sin cambio"]
      ]] },
    { id: "lugar", tipo: "gram", titulo: "Preposiciones de lugar",
      idea: "à côté de (al lado), en face de (frente a), près de (cerca), loin de (lejos); devant y derrière sin de.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Ejemplo"], [
        ["à côté de", "al lado de", "La pharmacie est à côté de la banque."],
        ["en face de", "frente a", "La poste est en face de la mairie."],
        ["près de", "cerca de", "L'hôtel est près de la gare."],
        ["loin de", "lejos de", "L'aéroport est loin de la ville."],
        ["devant · derrière", "delante · detrás", "Le café est devant le parc."]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais à le cinéma.", "Je vais au cinéma.", "à + le = au."], ["à côté de le parc", "à côté du parc", "de + le = du."]] }
  ],
  ejemplos: [
    { sit: "«Voy al cine con Léa.»", resp: "Je vais au cinéma avec Léa.", pasos: ["à + le cinéma → au."], porque: "Contracción." },
    { sit: "«La farmacia está al lado del supermercado.»", resp: "La pharmacie est à côté du supermarché.", pasos: ["de + le → du."], porque: "Contracción." },
    { sit: "«El correo está frente a la alcaldía.»", resp: "La poste est en face de la mairie.", pasos: ["la → sin cambio."], porque: "Femenino." }
  ],
  comprueba: [
    { q: "à + le = …", o: ["au", "à le"], a: 0, b: "contr", porque: "Contracción." },
    { q: "«en face de» significa…", o: ["frente a", "al lado de"], a: 0, b: "lugar", porque: "Frente." },
    { q: "de + les = …", o: ["des", "du"], a: 0, b: "contr", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["vi-contr"], k: "choice", ask: "«Esta noche voy al cine con Léa.»", q: "«Ce soir, je vais ___ cinéma avec Léa.»", o: ["au", "à le", "du"], a: 0, pista: "à + le.", why: "<b>au</b>." },
    { fase: "guiada", c: ["vi-lugar"], k: "match", ask: "Une cada preposición.", q: "Francés → español", pairs: [["à côté de", "al lado de"], ["en face de", "frente a"], ["près de", "cerca de"], ["loin de", "lejos de"]], pista: "près = cerca.", why: "Lugar." },
    { fase: "guiada", c: ["vi-contr"], k: "fill", ask: "Escribe de + le.", q: "La pharmacie est à côté ___ supermarché.", acc: ["du"], pista: "de + le.", why: "<b>du</b>." },
    { fase: "indep", c: ["vi-contr"], k: "sort", ask: "¿au, à la, à l' o aux?", q: "Clasifica.", cats: ["au", "à la", "à l'", "aux"], items: [["cinéma", 0], ["parc", 0], ["banque", 1], ["piscine", 1], ["hôpital", 2], ["aéroport", 2], ["toilettes", 3], ["magasins", 3]], why: "Según el artículo." },
    { fase: "indep", c: ["vi-lugar"], k: "spot", ask: "Encuentra el error (el hotel está a dos minutos).", s: "L'hôtel est [loin] de la gare , à deux minutes à pied .", fix: "près", why: "A dos minutos: <b>près</b>." },
    { fase: "indep", c: ["vi-contr"], k: "fill", ask: "Escribe à + les.", q: "Tu vas ___ toilettes ?", acc: ["aux"], why: "<b>aux</b>." },
    { fase: "aplica", c: ["vi-lugar"], k: "order", ask: "Di: «El correo está frente a la alcaldía».", tokens: ["La poste", "est", "en face de", "la mairie."], why: "<b>La poste est en face de la mairie.</b>" },
    { fase: "aplica", c: ["vi-contr"], k: "choice", ask: "«El parque está cerca de la iglesia.»", q: "«Le parc est près ___ église.»", o: ["de l'", "du", "de la"], a: 0, why: "<b>de l'église</b>." },
    { fase: "dominio", c: ["vi-contr"], k: "fill", ask: "Escribe de + les.", q: "Le restaurant est à côté ___ salles de cours.", acc: ["des"], why: "<b>des</b>." },
    { fase: "dominio", c: ["vi-lugar"], k: "choice", ask: "«La farmacia está al lado del banco.»", q: "«La pharmacie est ___ la banque.»", o: ["à côté de", "en face", "loin"], a: 0, why: "<b>à côté de</b>." },
    { fase: "dominio", c: ["vi-contr", "vi-lugar"], k: "listen", say: "La pharmacie est à côté du supermarché.", acc: ["La pharmacie est à côté du supermarché."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La pharmacie est à côté du supermarché.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Léa"], previo: ["l'hôtel", "hôtel", "gare", "poste", "mairie", "café", "parc", "cinéma", "toilettes", "piscine", "aéroport", "magasins", "église", "salles", "cours", "restaurant", "minutes", "pied", "ville", "ce", "soir", "avec", "allez", "elle", "deux", "non"] }
};

E["a1-gouts-heure"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les goûts, l'heure et les jours",
  objetivo: {
    que: "Vas a hablar de gustos con el artículo correcto, decir la hora con y cuarto y menos cuarto, y organizar tu semana.",
    corto: "Gustos, horas y días.",
    podras: ["Usar aimer, adorer, préférer, détester + le / la / les.", "Decir et quart, et demie, moins le quart.", "Decir le lundi (todos los lunes)."],
    iconos: ["ic2/corazon", "m2d/reloj", "ic2/reloj-arena"],
    previos: ["Tus gustos, la hora y los días (Primeros pasos)."],
    capacidad: "Ahora puedes organizar tu semana con amigos."
  },
  requiere: R("ai-formas", "he-decir", "jo-dias", "er-term", "in-resp", "ir-aller-faire"), recupera: ["ai-formas", "he-decir"],
  conceptos: {
    "gh-gustos": { n: "aimer, adorer, préférer, détester + le / la / les", b: "gustos" },
    "gh-hora": { n: "et quart, et demie, moins le quart", b: "hora" },
    "gh-dias": { n: "le lundi = todos los lunes", b: "hora" }
  },
  video: {
    titulo: "Gustos y horas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "J'adore la musique.", seg: [
        { es: "Hola. Con los gustos se usa el artículo, como en español." } ] },
      { v: "dos",
        a: { tag: "así no", fr: "Je n'aime pas de football.", es: "no cambies el artículo" },
        b: { tag: "así sí", fr: "Je n'aime pas le football.", es: "el artículo se queda" },
        seg: [ { es: "Así no.", p: 1 }, { es: "Así sí: con gustos, el artículo se queda en la negación.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "10:45", o: ["onze heures moins le quart", "dix heures moins le quart"], a: 0,
        bien: "¡Sí! Las once menos cuarto.", mal: "10:45 son las once menos cuarto: onze heures moins le quart.",
        seg: [ { es: "Pausa. ¿Cómo se dice?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["et quart", "et demie", "moins le quart", "le lundi", "je préfère"], seg: [
        { es: "Y le lundi significa todos los lunes.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planear la semana", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo organizan su semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu préfères le rap ou le reggaeton ?", "¿Prefieres el rap o el reguetón?"],
      ["camila", "J'adore la salsa ! Mais je n'aime pas le froid.", "¡Me encanta la salsa! Pero no me gusta el frío."],
      ["hugo", "Le lundi, j'ai cours à huit heures et quart.", "Los lunes tengo clase a las ocho y cuarto."],
      ["camila", "On se voit samedi à quatre heures et demie ?", "¿Nos vemos el sábado a las cuatro y media?"]
    ],
    fijate: "Fíjate: le lundi (todos los lunes), samedi (este sábado)."
  },
  ensena: [
    { id: "gustos", tipo: "gram", titulo: "Gustos",
      idea: "aimer, adorer, préférer, détester + le, la, les (también en negativo) o + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Grado"], [
        ["J'adore la salsa.", "Me encanta la salsa.", "++"],
        ["J'aime bien le cinéma.", "Me gusta el cine.", "+"],
        ["Tu préfères le rap ou le reggaeton ?", "¿Prefieres el rap o el reguetón?", "elegir"],
        ["Je n'aime pas le thé.", "No me gusta el té.", "−"],
        ["Je déteste le froid.", "Odio el frío.", "−−"],
        ["J'adore le chocolat !", "¡Me encanta el chocolate!", "++"]
      ]],
      ej: [["je préfère", "prefiero"], ["tu préfères", "prefieres"]],
      regla: ["préférer: je préfère, tu préfères."] },
    { id: "hora", tipo: "gram", titulo: "La hora y los días",
      idea: "et quart (y cuarto), et demie (y media), moins le quart (menos cuarto). Le lundi = todos los lunes.",
      intro: "Toca cada hora.",
      tabla: [["Francés", "Reloj", "—"], [
        ["Il est huit heures et quart.", "8:15", "y cuarto"],
        ["Il est neuf heures et demie.", "9:30", "y media"],
        ["Il est onze heures moins le quart.", "10:45", "menos cuarto"],
        ["Il est une heure et demie.", "1:30", "una (sin s)"],
        ["Le lundi, j'ai cours à huit heures.", "lunes", "todos los lunes"],
        ["Le cours commence à neuf heures.", "9:00", "à + hora"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'aime pas de football.", "Je n'aime pas le football.", "Con gustos, el artículo se queda."], ["Il est un heure et demie.", "Il est une heure et demie.", "heure es femenina."]] }
  ],
  ejemplos: [
    { sit: "«No me gusta el fútbol.»", resp: "Je n'aime pas le football.", pasos: ["ne… pas + le."], porque: "El artículo se queda." },
    { sit: "Son las 7:15.", resp: "Il est sept heures et quart.", pasos: ["+ et quart."], porque: "Y cuarto." },
    { sit: "«Los lunes tengo clase.»", resp: "Le lundi, j'ai cours.", pasos: ["le + día = cada semana."], porque: "Costumbre." }
  ],
  comprueba: [
    { q: "«moins le quart» significa…", o: ["menos cuarto", "y cuarto"], a: 0, b: "hora", porque: "Menos." },
    { q: "«Le lundi» significa…", o: ["todos los lunes", "el lunes que viene"], a: 0, b: "hora", porque: "Costumbre." },
    { q: "En negativo, con aimer…", o: ["el artículo se queda: pas le", "se usa de: pas de"], a: 0, b: "gustos", porque: "Gustos." }
  ],
  practica: [
    { fase: "guiada", c: ["gh-gustos"], k: "choice", ask: "«¡Me encanta el chocolate!»", q: "«J'adore ___ chocolat !»", o: ["le", "du", "de"], a: 0, pista: "Artículo definido.", why: "<b>le chocolat</b>." },
    { fase: "guiada", c: ["gh-hora"], k: "match", ask: "Une cada hora.", es: true, q: "Francés → reloj", pairs: [["neuf heures et demie", "9:30"], ["onze heures moins le quart", "10:45"], ["sept heures et quart", "7:15"], ["une heure et demie", "1:30"]], pista: "moins = menos.", why: "La hora." },
    { fase: "guiada", c: ["gh-hora"], k: "fill", ask: "Completa (8:15).", q: "— Quelle heure est-il ? — Il est huit heures et ___ .", acc: ["quart"], pista: "y cuarto.", why: "<b>et quart</b>." },
    { fase: "indep", c: ["gh-gustos"], k: "spot", ask: "Encuentra el error.", s: "Désolé , je n'aime pas [de] football .", fix: "le", why: "<b>le football</b>." },
    { fase: "indep", c: ["gh-gustos"], k: "fill", ask: "Conjuga préférer (tu).", q: "Tu ___ le rap ou le reggaeton ?", acc: ["préfères"], why: "<b>préfères</b>." },
    { fase: "indep", c: ["gh-dias"], k: "choice", ask: "«Los lunes tengo clase de francés a las diez.»", q: "«___ , j'ai cours de français à dix heures.»", o: ["Le lundi", "Lundi", "Au lundi"], a: 0, why: "<b>Le lundi</b>." },
    { fase: "aplica", c: ["gh-gustos"], k: "sort", ask: "¿Le gusta o no?", q: "Clasifica.", cats: ["Me gusta", "No me gusta"], items: [["J'adore la salsa.", 0], ["J'aime bien le cinéma.", 0], ["Je déteste le froid.", 1], ["Je n'aime pas le thé.", 1]], why: "Gustos." },
    { fase: "aplica", c: ["gh-dias"], k: "order", ask: "Di: «Los sábados hago deporte con mis amigos».", tokens: ["Le samedi,", "je fais du sport", "avec mes amis."], why: "<b>Le samedi, je fais du sport avec mes amis.</b>" },
    { fase: "dominio", c: ["gh-hora"], k: "spot", ask: "Encuentra el error.", s: "Il est [un] heure et demie .", fix: "une", why: "<b>une heure</b>." },
    { fase: "dominio", c: ["gh-hora"], k: "choice", ask: "«La clase de fonética empieza a las nueve.»", q: "«Le cours de phonétique commence ___ neuf heures.»", o: ["à", "en", "de"], a: 0, why: "<b>à neuf heures</b>." },
    { fase: "dominio", c: ["gh-gustos", "gh-hora"], k: "listen", say: "Tu préfères le rap ou le reggaeton ?", acc: ["Tu préfères le rap ou le reggaeton ?", "Tu préfères le rap ou le reggaeton?", "Tu préfères le rap ou le reggaeton"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Tu préfères le rap ou le reggaeton ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["rap", "ou", "reggaeton", "salsa", "mais", "froid", "cours", "on", "se", "voit", "samedi", "quatre", "sport", "avec", "mes", "amis", "phonétique", "commence", "neuf", "dix", "sept", "huit", "onze", "une", "chocolat", "cinéma", "thé", "football", "bien"] }
};

E["a1-possessifs-famille"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les adjectifs possessifs et la famille",
  objetivo: {
    que: "Vas a usar todos los posesivos (mon, ton, son, notre, votre, leur…) concordando con lo que se posee.",
    corto: "Mi, tu, su, nuestro…",
    podras: ["Usar mon / ton / son, ma / ta / sa, mes / tes / ses.", "Usar notre, votre, leur y sus plurales.", "Saber que son mère es «su mamá» (de él o de ella)."],
    iconos: ["ic2/corazon", "ic2/amigos", "m2d/senalar"],
    previos: ["mon, ma, mes y la familia (Primeros pasos)."],
    capacidad: "Ahora puedes hablar de las familias y las cosas de todos."
  },
  requiere: R("am-mon", "er-term"), recupera: ["fa-mon", "fa-voc"],
  conceptos: {
    "po-sing": { n: "mon/ton/son, ma/ta/sa, mes/tes/ses", b: "pos" },
    "po-plur": { n: "notre/nos, votre/vos, leur/leurs", b: "pos" },
    "po-concord": { n: "Concuerda con lo poseído", b: "pos" }
  },
  video: {
    titulo: "Los posesivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "son père · sa mère", seg: [
        { es: "Hola. El posesivo concuerda con la cosa o persona que se tiene, no con el dueño." } ] },
      { v: "dos",
        a: { tag: "el papá de Andrés", fr: "son père", es: "su papá" },
        b: { tag: "la mamá de Andrés", fr: "sa mère", es: "su mamá" },
        seg: [ { es: "El papá de Andrés:", p: 1 }, { fr: "son père", p: 1 }, { es: "La mamá de Andrés: mère es femenina.", p: 2 }, { fr: "sa mère", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Andrés adora a su mamá.»", o: ["Andrés adore sa mère.", "Andrés adore son mère."], a: 0,
        bien: "¡Sí! Mère es femenina: sa.", mal: "Concuerda con mère, femenina: sa mère.",
        seg: [ { es: "Pausa. Mira la palabra mère." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mon · ma · mes", "ton · ta · tes", "son · sa · ses", "notre · nos", "votre · vos", "leur · leurs"], seg: [
        { es: "Y delante de vocal, mon, ton, son también para mujeres.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las familias", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus familias.",
    pj: PJ,
    lineas: [
      ["camila", "Voici ma sœur, elle s'appelle Ana. Et c'est mon amie Laura.", "Esta es mi hermana, se llama Ana. Y esta es mi amiga Laura."],
      ["hugo", "Mes cousins adorent leur grand-mère.", "Mis primos adoran a su abuela."],
      ["camila", "Nous habitons avec nos grands-parents.", "Vivimos con nuestros abuelos."],
      ["hugo", "Madame, c'est votre sac ?", "Señora, ¿es su bolso?"]
    ],
    fijate: "Fíjate: mon amie (vocal), leur grand-mère, votre sac."
  },
  ensena: [
    { id: "pos", tipo: "gram", titulo: "Los posesivos",
      idea: "Mira quién posee (je, tu, il…) y qué se posee (masculino, femenino, plural).",
      intro: "Toca cada forma.",
      tabla: [["Quién posee", "Masc. · Fem. · Plural", "Ejemplo"], [
        ["je", "mon · ma · mes", "mon frère, ma sœur, mes parents"],
        ["tu", "ton · ta · tes", "ton père, ta mère, tes amis"],
        ["il / elle", "son · sa · ses", "son père, sa mère, ses amis"],
        ["nous", "notre · notre · nos", "notre maison, nos grands-parents"],
        ["vous", "votre · votre · vos", "votre sac, vos livres"],
        ["ils / elles", "leur · leur · leurs", "leur fille, leurs enfants"]
      ]],
      ej: [["ton", "tu (masculino)"], ["ta", "tu (femenino)"], ["tes", "tus"], ["ses", "sus (de él o de ella)"], ["vos", "sus (de usted o de ustedes)"], ["nos", "nuestros"], ["leurs", "sus (de ellos)"], ["mon amie", "mi amiga (vocal → mon)"], ["son histoire", "su historia (vocal → son)"], ["Andrés adore sa mère.", "Andrés adora a su mamá."], ["Pierre et Anne adorent leur fille.", "Pierre y Anne adoran a su hija."], ["Mon frère habite avec ses amis.", "Mi hermano vive con sus amigos."], ["notre", "nuestro, nuestra"], ["votre", "su, de usted"], ["leur", "su, de ellos"]],
      regla: ["Femenino + vocal → mon, ton, son: mon amie, son école."] },
    { id: "fam", tipo: "vocab", titulo: "La familia",
      idea: "le père / la mère, le frère / la sœur, l'oncle / la tante, le grand-père / la grand-mère, le fils / la fille, les cousins.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "l'oncle", es: "el tío" }, { fr: "la tante", es: "la tía" }, { fr: "le grand-père", es: "el abuelo" },
        { fr: "la grand-mère", es: "la abuela" }, { fr: "le fils", es: "el hijo", nota: "«le FIS»" }, { fr: "la fille", es: "la hija" },
        { fr: "les cousins", es: "los primos" }, { fr: "la famille", es: "la familia" }
      ] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ma amie Laura", "Mon amie Laura", "Vocal → mon."], ["Andrés adore son mère.", "Andrés adore sa mère.", "Concuerda con mère."], ["Mes cousins adorent leurs grand-mère.", "Mes cousins adorent leur grand-mère.", "Una abuela: leur."]] }
  ],
  ejemplos: [
    { sit: "«Su mamá» (la de Andrés).", resp: "sa mère", pasos: ["mère es femenina → sa."], porque: "Concuerda con lo poseído." },
    { sit: "«Nuestros abuelos.»", resp: "nos grands-parents", pasos: ["nous + plural → nos."], porque: "Plural." },
    { sit: "«Señora, ¿es su bolso?»", resp: "Madame, c'est votre sac ?", pasos: ["De usted → votre."], porque: "vous." }
  ],
  comprueba: [
    { q: "«sa mère» puede ser…", o: ["su mamá (de él o de ella)", "solo la mamá de ella"], a: 0, b: "pos", porque: "Concuerda con mère." },
    { q: "De usted, su bolso se dice…", o: ["votre sac", "son sac"], a: 0, b: "pos", porque: "vous." },
    { q: "«leurs» se usa con…", o: ["varias cosas de ellos", "una cosa de ellos"], a: 0, b: "pos", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["po-sing"], k: "choice", ask: "«Esta es mi hermana, se llama Camila.»", q: "«Voici ___ sœur.»", o: ["ma", "mon", "mes"], a: 0, pista: "sœur es femenina.", why: "<b>ma sœur</b>." },
    { fase: "guiada", c: ["po-concord"], k: "choice", ask: "«Es mi amiga Laura.»", q: "«C'est ___ amie Laura.»", o: ["mon", "ma", "mes"], a: 0, pista: "Vocal.", why: "<b>mon amie</b>." },
    { fase: "guiada", c: ["po-plur"], k: "fill", ask: "De usted: «¿Es su bolso?»", q: "Madame, c'est ___ sac ?", acc: ["votre"], pista: "vous.", why: "<b>votre</b>." },
    { fase: "indep", c: ["po-concord"], k: "choice", ask: "«Andrés adora a su mamá.»", q: "«Andrés adore ___ mère.»", o: ["sa", "son", "ses"], a: 0, why: "<b>sa mère</b>." },
    { fase: "indep", c: ["po-plur"], k: "fill", ask: "De nosotros, plural.", q: "Nous habitons avec ___ grands-parents.", acc: ["nos"], why: "<b>nos</b>." },
    { fase: "indep", c: ["po-plur"], k: "spot", ask: "Encuentra el error.", s: "Mes cousins adorent [leurs] grand-mère .", fix: "leur", why: "Una abuela: <b>leur</b>." },
    { fase: "aplica", c: ["po-sing"], k: "sort", ask: "¿mon, ma o mes?", q: "Clasifica.", cats: ["mon", "ma", "mes"], items: [["père", 0], ["amie", 0], ["école", 0], ["mère", 1], ["sœur", 1], ["famille", 1], ["parents", 2], ["cousins", 2]], why: "Vocal → mon." },
    { fase: "aplica", c: ["po-plur"], k: "choice", ask: "«Pierre y Anne adoran a su hija.»", q: "«Pierre et Anne adorent ___ fille.»", o: ["leur", "son", "leurs"], a: 0, why: "<b>leur fille</b>." },
    { fase: "dominio", c: ["po-concord"], k: "fill", ask: "De ella: «su historia».", q: "Elle raconte ___ histoire de famille.", acc: ["son"], why: "Vocal: <b>son histoire</b>." },
    { fase: "dominio", c: ["po-sing"], k: "order", ask: "Ordena: «Mi hermano vive con sus amigos».", tokens: ["Mon frère", "habite", "avec", "ses amis."], why: "<b>Mon frère habite avec ses amis.</b>" },
    { fase: "dominio", c: ["po-sing", "po-plur"], k: "listen", say: "Ma mère et mon père habitent à Pamplona.", acc: ["Ma mère et mon père habitent à Pamplona."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma mère et mon père habitent à Pamplona.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Ana", "Laura", "Andrés", "Pierre", "Anne", "Pamplona"], previo: ["habitent", "adore", "adorent", "raconte", "histoire", "école", "sac", "enfants", "livres", "habitons", "avec", "grand-mère", "grands-parents"] }
};

E["a1-adjectifs-description"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les adjectifs qualificatifs : accord et place",
  objetivo: {
    que: "Vas a concordar los adjetivos (femenino y plural), aprender los femeninos especiales y saber dónde van.",
    corto: "Describir bien: concordancia y lugar.",
    podras: ["Añadir -e y -s.", "Formar sérieuse, sportive, italienne, belle, vieille.", "Saber qué adjetivos van antes del nombre."],
    iconos: ["m2d/senalar", "ic2/estrella", "m2d/escribiendo"],
    previos: ["grand, petit (Primeros pasos) y los colores."],
    capacidad: "Ahora puedes describir personas y cosas con precisión."
  },
  requiere: R("cc-orden", "cc-fem", "co2-cara", "em-voc", "et-nat"), recupera: ["gp-fem", "cc-fem"],
  conceptos: {
    "ad-accord": { n: "-e femenino, -s plural", b: "accord" },
    "ad-especial": { n: "Femeninos especiales", b: "especial" },
    "ad-place": { n: "Antes o después del nombre", b: "accord" }
  },
  video: {
    titulo: "Los adjetivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "une petite maison blanche", seg: [
        { es: "Hola. El adjetivo cambia con el nombre: e para el femenino, ese para el plural." } ] },
      { v: "dos",
        a: { tag: "antes", fr: "une petite maison", es: "grand, petit, joli, nouveau" },
        b: { tag: "después", fr: "une maison blanche", es: "colores, nacionalidades…" },
        seg: [ { es: "Algunos cortos van antes:", p: 1 }, { fr: "une petite maison", p: 1 }, { es: "La mayoría, después:", p: 2 }, { fr: "une maison blanche", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Laura es muy deportista.»", o: ["Laura est très sportive.", "Laura est très sportif."], a: 0,
        bien: "¡Sí! -if → -ive.", mal: "Femenino de sportif: sportive.",
        seg: [ { es: "Pausa. Laura es mujer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["grande", "courts", "sérieuse", "sportive", "italienne", "belle", "vieille"], seg: [
        { es: "Y los femeninos especiales hay que aprenderlos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi familia", img: "bg-cafe", yo: "camila",
    escena: "Camila describe a su familia.",
    pj: PJ,
    lineas: [
      ["camila", "Ma sœur est petite et très sportive.", "Mi hermana es pequeña y muy deportista."],
      ["hugo", "Et ton frère ?", "¿Y tu hermano?"],
      ["camila", "Mon frère est grand et il a les yeux bleus.", "Mi hermano es alto y tiene los ojos azules."],
      ["camila", "Ma grand-mère est vieille et très gentille.", "Mi abuela es mayor y muy amable."]
    ],
    fijate: "Fíjate: petite, sportive, vieille: femeninos."
  },
  ensena: [
    { id: "accord", tipo: "gram", titulo: "Concordancia y lugar",
      idea: "Femenino: +e (grand → grande). Plural: +s (courts, grandes). La mayoría va después; grand, petit, joli, nouveau, beau, jeune, antes.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Ma sœur est petite.", "Mi hermana es pequeña.", "+e"],
        ["Il a les cheveux courts.", "Tiene el pelo corto.", "+s (cheveux es plural)"],
        ["une fille intelligente", "una chica inteligente", "después"],
        ["une petite maison", "una casita", "antes"],
        ["Mon père a les yeux verts.", "Mi papá tiene los ojos verdes.", "+s"],
        ["Elle a une robe blanche.", "Tiene un vestido blanco.", "blanc → blanche"],
        ["J'ai une nouvelle voisine très sympathique.", "Tengo una vecina nueva muy simpática.", "nouvelle antes"]
      ]],
      ej: [["petits", "pequeños"], ["courte", "corta"], ["grand", "alto, grande"], ["joli", "bonito"], ["nouveau", "nuevo"], ["rouge", "rojo"], ["colombien", "colombiano"], ["intelligent", "inteligente"], ["sympathique", "simpático"], ["court", "corto"], ["vert", "verde"]] },
    { id: "especial", tipo: "gram", titulo: "Femeninos especiales",
      idea: "-eux → -euse, -if → -ive, -ien → -ienne, bon → bonne, beau → belle, vieux → vieille.",
      intro: "Toca cada pareja.",
      tabla: [["Masculino", "Femenino", "Español"], [
        ["heureux", "heureuse", "feliz"],
        ["sérieux", "sérieuse", "serio, seria"],
        ["sportif", "sportive", "deportista"],
        ["italien", "italienne", "italiano, italiana"],
        ["bon", "bonne", "bueno, buena"],
        ["beau", "belle", "bello, bella"],
        ["vieux", "vieille", "viejo, vieja"]
      ]],
      ej: [["sérieuse", "seria"], ["heureuse", "feliz (mujer)"], ["sérieuses", "serias"], ["sportive", "deportista (mujer)"], ["italienne", "italiana"], ["bonne", "buena"], ["belle", "bella"], ["vieille", "vieja, mayor"], ["Ma grand-mère est vieille et très gentille.", "Mi abuela es mayor y muy amable."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une maison petite", "une petite maison", "petit va antes."], ["Il a les cheveux court.", "Il a les cheveux courts.", "Plural."], ["Mon père a les yeux verte.", "Mon père a les yeux verts.", "yeux es masculino plural."], ["Elle a une robe blanc.", "Elle a une robe blanche.", "blanc → blanche."]] }
  ],
  ejemplos: [
    { sit: "«Mis amigas son serias.»", resp: "Mes amies sont sérieuses.", pasos: ["sérieux → sérieuse.", "+s."], porque: "Femenino plural." },
    { sit: "«Una casita blanca.»", resp: "une petite maison blanche", pasos: ["petite antes; blanche después."], porque: "Lugar." },
    { sit: "«Mi abuela es mayor.»", resp: "Ma grand-mère est vieille.", pasos: ["vieux → vieille."], porque: "Especial." }
  ],
  comprueba: [
    { q: "El femenino de «sportif» es…", o: ["sportive", "sportife"], a: 0, b: "especial", porque: "-if → -ive." },
    { q: "«petit» va…", o: ["antes del nombre", "después del nombre"], a: 0, b: "accord", porque: "Corto y frecuente." },
    { q: "«les cheveux» lleva el adjetivo…", o: ["en plural: courts", "en singular: court"], a: 0, b: "accord", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["ad-accord"], k: "choice", ask: "«Mi hermana es muy pequeña.»", q: "«Ma sœur est très ___.»", o: ["petite", "petit", "petits"], a: 0, pista: "Femenino.", why: "<b>petite</b>." },
    { fase: "guiada", c: ["ad-especial"], k: "match", ask: "Une masculino y femenino.", q: "Masculino → femenino", pairs: [["heureux", "heureuse"], ["sportif", "sportive"], ["italien", "italienne"], ["bon", "bonne"], ["beau", "belle"]], pista: "-if → -ive.", why: "Femeninos especiales." },
    { fase: "guiada", c: ["ad-accord"], k: "choice", ask: "«Mi profesor tiene el pelo corto.»", q: "«Mon professeur a les cheveux ___.»", o: ["courts", "court", "courte"], a: 0, pista: "cheveux es plural.", why: "<b>courts</b>." },
    { fase: "indep", c: ["ad-especial"], k: "fill", ask: "Escribe sportif en femenino.", q: "Laura est très ___ .", acc: ["sportive"], why: "<b>sportive</b>." },
    { fase: "indep", c: ["ad-especial"], k: "fill", ask: "Escribe sérieux en femenino plural.", q: "Mes amies sont ___ .", acc: ["sérieuses"], why: "<b>sérieuses</b>." },
    { fase: "indep", c: ["ad-accord"], k: "spot", ask: "Encuentra el error.", s: "Mon père a les yeux [verte] .", fix: "verts", why: "<b>verts</b>." },
    { fase: "aplica", c: ["ad-place"], k: "sort", ask: "¿Antes o después del nombre?", q: "Clasifica.", cats: ["Antes", "Después"], items: [["grand", 0], ["petit", 0], ["joli", 0], ["nouveau", 0], ["rouge", 1], ["colombien", 1], ["intelligent", 1], ["sympathique", 1]], why: "Cortos y frecuentes, antes." },
    { fase: "aplica", c: ["ad-place"], k: "choice", ask: "«Vivimos en una casita.»", q: "«Nous habitons dans ___.»", o: ["une petite maison", "une maison petite", "un petit maison"], a: 0, why: "<b>une petite maison</b>." },
    { fase: "dominio", c: ["ad-especial"], k: "fill", ask: "Escribe vieux en femenino.", q: "Ma grand-mère est ___ et très gentille.", acc: ["vieille"], why: "<b>vieille</b>." },
    { fase: "dominio", c: ["ad-accord"], k: "spot", ask: "Encuentra el error.", s: "Elle a une robe [blanc] .", fix: "blanche", why: "<b>blanche</b>." },
    { fase: "dominio", c: ["ad-accord", "ad-place"], k: "listen", say: "Mon frère est grand et il a les yeux bleus.", acc: ["Mon frère est grand et il a les yeux bleus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon frère est grand et il a les yeux bleus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: ["nous", "très", "gentille", "fille", "maison", "voisine", "cheveux", "professeur", "habitons", "dans", "ton", "robe", "grand-mère", "amies"] }
};

E["a1-logement"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le logement et les meubles",
  objetivo: {
    que: "Vas a describir tu casa con il y a y decir dónde están los muebles con sur, sous, devant, derrière, entre y chez.",
    corto: "Tu casa y tus muebles.",
    podras: ["Decir il y a / il n'y a pas de.", "Usar sur, sous, devant, derrière, entre.", "Usar chez + persona."],
    iconos: ["ic2/cofre", "m2d/dormir", "ic2/bombilla"],
    previos: ["La casa y los objetos (Primeros pasos) y las contracciones (lección 7)."],
    capacidad: "Ahora puedes describir tu casa y decir dónde está cada cosa."
  },
  requiere: R("ob-voc", "vi-contr", "vi-lugar", "an-voc", "ir-aller-faire"), recupera: ["ma-voc", "ob-voc"],
  conceptos: {
    "lg-ilya": { n: "il y a / il n'y a pas de", b: "ilya" },
    "lg-prep": { n: "sur, sous, devant, derrière, entre, chez", b: "prep" }
  },
  video: {
    titulo: "Los muebles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "Il y a un lit.", seg: [
        { es: "Hola. Para decir lo que hay en tu casa: il y a." } ] },
      { v: "dos",
        a: { tag: "encima", fr: "sur le lit", es: "encima de la cama" },
        b: { tag: "debajo", fr: "sous le lit", es: "debajo de la cama" },
        seg: [ { es: "Encima:", p: 1 }, { fr: "Le livre est sur le lit.", p: 1 }, { es: "Debajo:", p: 2 }, { fr: "Le chat est sous le lit.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No hay garaje.»", o: ["Il n'y a pas de garage.", "Il n'y a pas un garage."], a: 0,
        bien: "¡Sí! Pas de.", mal: "En negativo: il n'y a pas de.",
        seg: [ { es: "Pausa. En negativo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il y a", "sur", "sous", "devant", "derrière", "entre", "chez moi"], seg: [
        { es: "Y chez significa en casa de:", p: 1 }, { fr: "chez moi", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El apartamento", img: "bg-cafe", yo: "camila",
    escena: "Camila muestra su apartamento a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Il y a deux chambres chez moi.", "Hay dos habitaciones en mi casa."],
      ["hugo", "Et dans le salon ?", "¿Y en la sala?"],
      ["camila", "Dans le salon, il y a un canapé devant la télé.", "En la sala hay un sofá delante de la tele."],
      ["hugo", "Et ton chat ? — Il dort sous le lit !", "¿Y tu gato? — ¡Duerme debajo de la cama!"]
    ],
    fijate: "Fíjate: il y a = hay; chez moi = en mi casa."
  },
  ensena: [
    { id: "ilya", tipo: "gram", titulo: "Hay: il y a",
      idea: "Il y a + un / une / des = hay. Negativo: il n'y a pas de.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Dans ma chambre, il y a un lit et un bureau.", "En mi cuarto hay una cama y un escritorio.", "il y a"],
        ["Il y a une armoire à côté de la porte.", "Hay un armario al lado de la puerta.", "il y a"],
        ["Il n'y a pas de garage dans mon immeuble.", "No hay garaje en mi edificio.", "pas de"],
        ["Dans la cuisine, il y a une grande table.", "En la cocina hay una mesa grande.", "il y a"]
      ]],
      ej: [["le canapé", "el sofá"], ["l'armoire", "el armario"], ["le bureau", "el escritorio"], ["la télé", "la tele"]] },
    { id: "prep", tipo: "gram", titulo: "Dónde está",
      idea: "sur (encima), sous (debajo), devant (delante), derrière (detrás), entre (entre), chez + persona (en casa de).",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Ejemplo"], [
        ["sur", "encima de", "Le livre est sur la table."],
        ["sous", "debajo de", "Le chat dort sous le lit."],
        ["devant", "delante de", "Le canapé est devant la télé."],
        ["derrière", "detrás de", "Le jardin est derrière la maison."],
        ["entre", "entre", "Mon bureau est entre la porte et la fenêtre."],
        ["chez", "en casa de", "Je vais chez mes grands-parents."],
        ["à côté du canapé", "al lado del sofá", "La lampe est à côté du canapé."]
      ]],
      ej: [["Ce soir, on étudie chez moi ?", "¿Esta noche estudiamos en mi casa?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est une table.", "Il y a une table.", "Hay = il y a."], ["à côté de le canapé", "à côté du canapé", "de + le = du."]] }
  ],
  ejemplos: [
    { sit: "«Hay dos habitaciones en mi casa.»", resp: "Il y a deux chambres chez moi.", pasos: ["il y a + des / número.", "chez moi."], porque: "Existencia." },
    { sit: "«El gato está debajo de la cama.»", resp: "Le chat est sous le lit.", pasos: ["sous = debajo."], porque: "Lugar." },
    { sit: "«No hay garaje.»", resp: "Il n'y a pas de garage.", pasos: ["n'y a pas de."], porque: "Negación." }
  ],
  comprueba: [
    { q: "«sous» significa…", o: ["debajo de", "encima de"], a: 0, b: "prep", porque: "Debajo." },
    { q: "«chez moi» significa…", o: ["en mi casa", "cerca de mí"], a: 0, b: "prep", porque: "En casa de." },
    { q: "Negativo de «il y a un garage»:", o: ["il n'y a pas de garage", "il n'y a pas un garage"], a: 0, b: "ilya", porque: "pas de." }
  ],
  practica: [
    { fase: "guiada", c: ["lg-ilya"], k: "choice", ask: "«En mi cuarto hay una cama y un escritorio.»", q: "«Dans ma chambre, ___ un lit et un bureau.»", o: ["il y a", "il est", "c'est"], a: 0, pista: "Hay.", why: "<b>il y a</b>." },
    { fase: "guiada", c: ["lg-prep"], k: "match", ask: "Une cada preposición.", q: "Francés → español", pairs: [["sur", "encima de"], ["sous", "debajo de"], ["devant", "delante de"], ["derrière", "detrás de"], ["à côté de", "al lado de"]], pista: "sous = debajo.", why: "Lugar." },
    { fase: "guiada", c: ["lg-prep"], k: "choice", ask: "«El gato duerme debajo de la cama.»", q: "«Le chat dort ___ le lit.»", o: ["sous", "sur", "devant"], a: 0, pista: "Debajo.", why: "<b>sous</b>." },
    { fase: "indep", c: ["lg-ilya"], k: "fill", ask: "Completa la negación.", q: "Il n'y a pas ___ garage dans mon immeuble.", acc: ["de"], why: "<b>pas de</b>." },
    { fase: "indep", c: ["lg-prep"], k: "fill", ask: "Escribe «en mi casa» (una palabra + moi).", q: "Ce soir, on étudie ___ moi ?", acc: ["chez"], why: "<b>chez</b>." },
    { fase: "indep", c: ["lg-prep"], k: "spot", ask: "Encuentra el error.", s: "La lampe est à côté [de le] canapé .", fix: "du", why: "<b>du</b>." },
    { fase: "aplica", c: ["lg-ilya"], k: "spot", ask: "Encuentra el error.", s: "Dans la cuisine , [il est] une grande table .", fix: "il y a", why: "<b>il y a</b>." },
    { fase: "aplica", c: ["lg-prep"], k: "choice", ask: "«Mi escritorio está entre la puerta y la ventana.»", q: "«Mon bureau est ___ la porte et la fenêtre.»", o: ["entre", "sous", "chez"], a: 0, why: "<b>entre</b>." },
    { fase: "dominio", c: ["lg-prep"], k: "fill", ask: "Escribe «detrás de».", q: "Le jardin est ___ la maison.", acc: ["derrière"], why: "<b>derrière</b>." },
    { fase: "dominio", c: ["lg-ilya", "lg-prep"], k: "order", ask: "Ordena: «En la sala hay un sofá delante de la tele».", tokens: ["Dans le salon", "il y a", "un canapé", "devant la télé."], why: "<b>Dans le salon il y a un canapé devant la télé.</b>" },
    { fase: "dominio", c: ["lg-ilya", "lg-prep"], k: "listen", say: "Il y a une armoire à côté de la porte.", acc: ["Il y a une armoire à côté de la porte."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il y a une armoire à côté de la porte.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["deux", "chambres", "immeuble", "garage", "dort", "dans", "grands-parents", "on", "étudie", "ce", "soir", "ton", "grande"] }
};

E["a1-cafe-restaurant"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Commander au café et au restaurant",
  objetivo: {
    que: "Vas a pedir en un café o restaurante, entender al mesero y pagar con precios hasta 100.",
    corto: "Pedir, entender y pagar.",
    podras: ["Pedir con Je voudrais, Je vais prendre, Pour moi.", "Entender Vous désirez ?, Sur place ou à emporter ?", "Decir precios de 70 a 100."],
    iconos: ["ic2/cafe", "ic2/croissant", "ic2/moneda"],
    previos: ["En el café (Primeros pasos) y los números hasta 69."],
    capacidad: "Ahora puedes comer en un restaurante francés y pagar la cuenta."
  },
  requiere: R("ca-pedir", "ca-pagar", "na-num", "ar2-voc"), recupera: ["ca-pedir", "ca-pagar"],
  conceptos: {
    "cr-pedir": { n: "Je voudrais / Je vais prendre / Pour moi", b: "pedir" },
    "cr-mesero": { n: "Vous désirez ? Sur place ou à emporter ?", b: "pedir" },
    "cr-num": { n: "70, 80, 90, 100", b: "num" }
  },
  video: {
    titulo: "En el restaurante", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cafe", grande: "Pour moi, le plat du jour.", seg: [
        { es: "Hola. Hoy pides en un restaurante, como un francés." } ] },
      { v: "frase", filas: [
          { nota: "70", p: 1, partes: [["soixante-dix", "-", 1]] },
          { nota: "80", p: 2, partes: [["quatre-vingts", "-", 2]] },
          { nota: "90", p: 3, partes: [["quatre-vingt-dix", "-", 3]] } ], seg: [
        { es: "Desde setenta, los números suman: sesenta más diez.", p: 1 },
        { es: "Ochenta es cuatro veces veinte.", p: 2 },
        { es: "Y noventa, cuatro veces veinte más diez.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El mesero dice «Vous désirez ?». Respondes…", o: ["Je voudrais un café.", "Je veux café."], a: 0,
        bien: "¡Sí! Amable.", mal: "Lo cortés es Je voudrais un café.",
        seg: [ { es: "Pausa. Contestas al mesero." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je voudrais…", "Je vais prendre…", "Pour moi, …", "L'addition", "soixante-dix", "quatre-vingts", "quatre-vingt-dix"], seg: [
        { es: "Quisiera, voy a tomar, para mí, y la cuenta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Le plat du jour", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo almuerzan en un restaurante.",
    pj: PJ,
    lineas: [
      ["vendeur", "Bonjour ! Vous désirez ?", "¡Buenos días! ¿Qué desean?"],
      ["camila", "Je vais prendre le plat du jour.", "Voy a tomar el plato del día."],
      ["hugo", "Pour moi, une salade et une eau minérale.", "Para mí, una ensalada y un agua mineral."],
      ["vendeur", "Ça fait quatre-vingt-cinq euros.", "Son ochenta y cinco euros."]
    ],
    fijate: "Fíjate: quatre-vingt-cinq = 85."
  },
  ensena: [
    { id: "pedir", tipo: "gram", titulo: "Pedir y entender",
      idea: "Cliente: Je voudrais…, Je vais prendre…, Pour moi, … Mesero: Vous désirez ?, Et comme boisson ?, Sur place ou à emporter ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Quién"], [
        ["Je voudrais un chocolat chaud, s'il vous plaît.", "Quisiera un chocolate caliente.", "cliente"],
        ["Je vais prendre le plat du jour.", "Voy a tomar el plato del día.", "cliente"],
        ["Pour moi, une mousse au chocolat.", "Para mí, una mousse de chocolate.", "cliente"],
        ["L'addition, s'il vous plaît.", "La cuenta, por favor.", "cliente"],
        ["Vous désirez ?", "¿Qué desea?", "mesero"],
        ["Et comme boisson ?", "¿Y de beber?", "mesero"],
        ["Sur place ou à emporter ?", "¿Para comer aquí o para llevar?", "mesero"],
        ["Je vous apporte la carte.", "Le traigo la carta.", "mesero"]
      ]] },
    { id: "num", tipo: "vocab", titulo: "De 70 a 100",
      idea: "70 = soixante-dix, 71 = soixante et onze, 80 = quatre-vingts, 85 = quatre-vingt-cinq, 90 = quatre-vingt-dix, 100 = cent.",
      intro: "Toca cada número.",
      palabras: [
        { fr: "soixante-dix", es: "70" }, { fr: "soixante et onze", es: "71" }, { fr: "soixante-quinze", es: "75" },
        { fr: "quatre-vingts", es: "80", nota: "Con s solo cuando va sola." }, { fr: "quatre-vingt-cinq", es: "85" },
        { fr: "quatre-vingt-dix", es: "90" }, { fr: "cent", es: "100" }, { fr: "douze euros cinquante", es: "12,50 €" }
      ] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je veux un café.", "Je voudrais un café.", "Más amable."], ["Le compte, s'il vous plaît.", "L'addition, s'il vous plaît.", "La cuenta = l'addition."], ["Ça fait quatre-vingt euros.", "Ça fait quatre-vingts euros.", "80 sola lleva s."]] }
  ],
  ejemplos: [
    { sit: "Pides el plato del día.", resp: "Je vais prendre le plat du jour.", pasos: ["Je vais prendre + plato."], porque: "Pedir." },
    { sit: "«Son ochenta y cinco euros.»", resp: "Ça fait quatre-vingt-cinq euros.", pasos: ["4 × 20 + 5."], porque: "Número." },
    { sit: "El mesero: «Sur place ou à emporter ?» Comes allí.", resp: "Sur place, merci.", pasos: ["sur place = aquí."], porque: "Respuesta." }
  ],
  comprueba: [
    { q: "«quatre-vingts» es…", o: ["80", "24"], a: 0, b: "num", porque: "4 × 20." },
    { q: "«à emporter» significa…", o: ["para llevar", "para comer aquí"], a: 0, b: "pedir", porque: "Llevar." },
    { q: "«Vous désirez ?» lo dice…", o: ["el mesero", "el cliente"], a: 0, b: "pedir", porque: "¿Qué desea?" }
  ],
  practica: [
    { fase: "guiada", c: ["cr-pedir"], k: "choice", ask: "Pides un chocolate caliente.", q: "«Bonjour, ___ un chocolat chaud, s'il vous plaît.»", o: ["je voudrais", "je veux", "voilà"], a: 0, pista: "Cortés.", why: "<b>je voudrais</b>." },
    { fase: "guiada", c: ["cr-num"], k: "match", ask: "Une cada número.", q: "Francés → cifra", pairs: [["soixante-dix", "70"], ["soixante-quinze", "75"], ["quatre-vingts", "80"], ["quatre-vingt-dix", "90"], ["cent", "100"]], pista: "quatre-vingts = 80.", why: "De 70 a 100." },
    { fase: "guiada", c: ["cr-pedir"], k: "choice", ask: "Pides la cuenta.", q: "«Monsieur, ___ , s'il vous plaît !»", o: ["l'addition", "le compte", "la carte"], a: 0, pista: "La cuenta.", why: "<b>l'addition</b>." },
    { fase: "indep", c: ["cr-num"], k: "fill", ask: "Escribe 71 en letras.", q: "Le menu coûte ___ euros.", acc: ["soixante et onze"], why: "<b>soixante et onze</b>." },
    { fase: "indep", c: ["cr-num"], k: "fill", ask: "Escribe 85 en letras.", q: "Ça fait ___ euros.", acc: ["quatre-vingt-cinq"], why: "<b>quatre-vingt-cinq</b>." },
    { fase: "indep", c: ["cr-mesero"], k: "fill", ask: "Completa la pregunta del mesero.", q: "— Sur place ou à ___ ? — Sur place, merci.", acc: ["emporter"], why: "<b>à emporter</b>." },
    { fase: "aplica", c: ["cr-mesero", "cr-pedir"], k: "sort", ask: "¿Mesero o cliente?", q: "Clasifica.", cats: ["Mesero", "Cliente"], items: [["Vous désirez ?", 0], ["Et comme boisson ?", 0], ["Sur place ou à emporter ?", 0], ["Je voudrais une limonade.", 1], ["Pour moi, le plat du jour.", 1], ["L'addition, s'il vous plaît.", 1]], why: "Cada uno su frase." },
    { fase: "aplica", c: ["cr-pedir"], k: "choice", ask: "—¿Y de postre? —Para mí, una mousse.", q: "«— ___ une mousse au chocolat.»", o: ["Pour moi,", "Pour toi,", "Voilà,"], a: 0, why: "<b>Pour moi</b>." },
    { fase: "dominio", c: ["cr-num"], k: "spot", ask: "Encuentra el error.", s: "L'addition , ça fait [quatre-vingt] euros .", fix: "quatre-vingts", why: "<b>quatre-vingts</b>." },
    { fase: "dominio", c: ["cr-pedir"], k: "order", ask: "Ordena: «Voy a tomar el plato del día».", tokens: ["Je vais", "prendre", "le plat", "du jour."], why: "<b>Je vais prendre le plat du jour.</b>" },
    { fase: "dominio", c: ["cr-pedir", "cr-num"], k: "listen", say: "Ça fait quatre-vingt-dix euros, s'il vous plaît.", acc: ["Ça fait quatre-vingt-dix euros, s'il vous plaît.", "Ça fait 90 euros, s'il vous plaît."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ça fait quatre-vingt-dix euros, s'il vous plaît.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["chocolat", "chaud", "plat", "jour", "mousse", "salade", "eau", "minérale", "limonade", "menu", "coûte", "euros", "carte", "boisson", "dessert", "comme", "ça", "fait", "pour", "toi"] }
};

E["a1-meteo-saisons"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le temps qu'il fait, les saisons et les mois",
  objetivo: {
    que: "Vas a describir el clima con il fait, il y a, il pleut, il neige, y a decir fechas.",
    corto: "El clima y las fechas.",
    podras: ["Usar il fait + adjetivo o grados.", "Usar il y a du soleil / du vent / des nuages.", "Decir la fecha: le 14 juillet."],
    iconos: ["ic2/luna", "ic2/estrella", "ic2/flor"],
    previos: ["El clima, los meses y las estaciones (Primeros pasos)."],
    capacidad: "Ahora puedes hablar del clima y de las fechas."
  },
  requiere: R("me-fait", "me-pleut", "fs-froid", "an-fecha", "ir-aller-faire"), recupera: ["me-fait", "mo-est"],
  conceptos: {
    "ms-fait": { n: "il fait / il y a / il pleut", b: "clima" },
    "ms-fecha": { n: "au printemps, en été; le 14 juillet", b: "fecha" }
  },
  video: {
    titulo: "El clima", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "Il fait beau.", seg: [
        { es: "Hola. Para el clima hay tres fórmulas." } ] },
      { v: "frase", filas: [
          { nota: "il fait", p: 1, partes: [["Il fait chaud. Il fait 30 degrés.", "-", 1]] },
          { nota: "il y a", p: 2, partes: [["Il y a du soleil. Il y a du vent.", "-", 2]] },
          { nota: "un verbo", p: 3, partes: [["Il pleut. Il neige.", "-", 3]] } ], seg: [
        { es: "Hace calor, hace treinta grados.", p: 1 }, { es: "Hay sol, hay viento.", p: 2 }, { es: "Llueve, nieva.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo frío.» (tú, no el clima)", o: ["J'ai froid.", "Il fait froid."], a: 0,
        bien: "¡Sí! Lo que tú sientes: j'ai.", mal: "Il fait froid es el clima. Tú sientes: j'ai froid.",
        seg: [ { es: "Pausa. ¿El clima o lo que sientes?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il fait beau", "il y a du vent", "il pleut", "il neige", "au printemps", "le 14 juillet"], seg: [
        { es: "Y la fecha: le, número y mes en minúscula.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Llamada a Bogotá", img: "bg-cafe", yo: "camila",
    escena: "Camila habla con su familia sobre el clima.",
    pj: PJ,
    lineas: [
      ["camila", "Aujourd'hui, à Lyon, il fait froid et il pleut.", "Hoy, en Lyon, hace frío y llueve."],
      ["hugo", "En décembre, à Paris, il neige souvent.", "En diciembre, en París, nieva a menudo."],
      ["camila", "Au printemps, il fait beau et il y a du soleil.", "En primavera hace buen tiempo y hay sol."],
      ["hugo", "Et la fête nationale, c'est le 14 juillet !", "¡Y la fiesta nacional es el 14 de julio!"]
    ],
    fijate: "Fíjate: au printemps, pero en décembre."
  },
  ensena: [
    { id: "clima", tipo: "gram", titulo: "El clima",
      idea: "il fait + beau / chaud / froid / mauvais / grados; il y a + du soleil / du vent / des nuages; il pleut, il neige.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Fórmula"], [
        ["Il fait chaud à Cúcuta.", "Hace calor en Cúcuta.", "il fait"],
        ["Il fait 30 degrés.", "Hace 30 grados.", "il fait"],
        ["Il y a du soleil.", "Hay sol.", "il y a"],
        ["Il y a du vent sur la plage.", "Hay viento en la playa.", "il y a"],
        ["Il y a des nuages.", "Hay nubes.", "il y a"],
        ["Il pleut, prends ton parapluie !", "Llueve, ¡lleva el paraguas!", "verbo"],
        ["En décembre, il neige souvent.", "En diciembre nieva a menudo.", "verbo"]
      ]],
      ej: [["beau", "buen tiempo"], ["mauvais", "mal tiempo"], ["du brouillard", "niebla"], ["30 degrés", "30 grados"]] },
    { id: "fecha", tipo: "gram", titulo: "Estaciones y fechas",
      idea: "en été, en automne, en hiver; au printemps. La fecha: le + número + mes (en minúscula).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Au printemps, les arbres sont en fleurs.", "En primavera los árboles están en flor.", "au"],
        ["En été, il fait chaud.", "En verano hace calor.", "en"],
        ["Mon anniversaire est le 3 juin.", "Mi cumpleaños es el 3 de junio.", "le + número"],
        ["La fête nationale, c'est le 14 juillet.", "La fiesta nacional es el 14 de julio.", "minúscula"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est froid.", "Il fait froid.", "Clima = faire."], ["le 3 de Juin", "le 3 juin", "Sin de y en minúscula."], ["En été, à Cartagena, il est très chaud.", "En été, à Cartagena, il fait très chaud.", "Clima = faire."]] }
  ],
  ejemplos: [
    { sit: "«Hoy en Bogotá hace frío.»", resp: "Aujourd'hui à Bogotá, il fait froid.", pasos: ["il fait + froid."], porque: "Clima." },
    { sit: "«Hay viento.»", resp: "Il y a du vent.", pasos: ["il y a + du."], porque: "Fenómeno." },
    { sit: "«El 14 de julio.»", resp: "le 14 juillet", pasos: ["le + 14 + juillet."], porque: "Fecha." }
  ],
  comprueba: [
    { q: "«Il y a des nuages» significa…", o: ["Hay nubes.", "Hay niebla."], a: 0, b: "clima", porque: "nuages = nubes." },
    { q: "En primavera se dice…", o: ["au printemps", "en printemps"], a: 0, b: "fecha", porque: "Excepción." },
    { q: "Los meses en francés van…", o: ["en minúscula", "en mayúscula"], a: 0, b: "fecha", porque: "juin." }
  ],
  practica: [
    { fase: "guiada", c: ["ms-fait"], k: "choice", ask: "«Hoy en Bogotá hace frío.»", q: "«Aujourd'hui à Bogotá, il ___ froid.»", o: ["fait", "est", "a"], a: 0, pista: "Clima.", why: "<b>il fait</b>." },
    { fase: "guiada", c: ["ms-fecha"], k: "choice", ask: "«En primavera, los árboles están en flor.»", q: "«___ printemps, les arbres sont en fleurs.»", o: ["Au", "En", "Le"], a: 0, pista: "Excepción.", why: "<b>Au printemps</b>." },
    { fase: "guiada", c: ["ms-fait"], k: "sort", ask: "¿Il fait… o Il y a…?", q: "Clasifica.", cats: ["Il fait…", "Il y a…"], items: [["beau", 0], ["chaud", 0], ["mauvais", 0], ["30 degrés", 0], ["du soleil", 1], ["du vent", 1], ["des nuages", 1], ["du brouillard", 1]], pista: "Adjetivo: il fait.", why: "Dos fórmulas." },
    { fase: "indep", c: ["ms-fait"], k: "fill", ask: "Conjuga neiger.", q: "En décembre, à Paris, il ___ souvent.", acc: ["neige"], why: "<b>neige</b>." },
    { fase: "indep", c: ["ms-fait"], k: "fill", ask: "Conjuga pleuvoir.", q: "Prends ton parapluie : il ___ !", acc: ["pleut"], why: "<b>pleut</b>." },
    { fase: "indep", c: ["ms-fecha"], k: "spot", ask: "Encuentra el error.", s: "Mon anniversaire est le 3 [Juin] .", fix: "juin", why: "Minúscula: <b>juin</b>." },
    { fase: "aplica", c: ["ms-fait"], k: "spot", ask: "Encuentra el error.", s: "En été , à Cartagena , [il est] très chaud .", fix: "il fait", why: "<b>il fait</b>." },
    { fase: "aplica", c: ["ms-fecha"], k: "choice", ask: "La fiesta nacional francesa es…", q: "«La fête nationale française, c'est ___.»", o: ["le 14 juillet", "le 14 de juillet", "le juillet 14"], a: 0, why: "<b>le 14 juillet</b>." },
    { fase: "dominio", c: ["ms-fait"], k: "fill", ask: "Escribe el artículo.", q: "Il y a ___ vent sur la plage.", acc: ["du"], why: "<b>du vent</b>." },
    { fase: "dominio", c: ["ms-fait"], k: "choice", ask: "¡Brrr! Tienes frío.", q: "«Brr, ___ froid ! Je vais mettre un pull.»", o: ["j'ai", "il fait", "je suis"], a: 0, why: "Lo que sientes: <b>j'ai froid</b>." },
    { fase: "dominio", c: ["ms-fait", "ms-fecha"], k: "listen", say: "Aujourd'hui, il fait beau et il y a du soleil.", acc: ["Aujourd'hui, il fait beau et il y a du soleil.", "Aujourd'hui il fait beau et il y a du soleil."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Aujourd'hui, il fait beau et il y a du soleil.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Paris", "Bogotá", "Cúcuta", "Cartagena"], previo: ["souvent", "fête", "nationale", "française", "arbres", "sont", "fleurs", "prends", "parapluie", "plage", "pull", "mettre", "brr", "vais", "anniversaire", "est", "14", "3", "30", "sur"] }
};

E["a1-demonstratifs-vetements"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les démonstratifs et les vêtements",
  objetivo: {
    que: "Vas a señalar con ce, cet, cette, ces y a comprar ropa: probarte algo, preguntar la talla y el precio.",
    corto: "Este, esta, estos… en la tienda.",
    podras: ["Elegir ce, cet, cette o ces.", "Decir Je voudrais essayer…", "Entender Vous faites quelle taille ? y Je regarde."],
    iconos: ["ic2/bolsa", "m2d/senalar", "ic2/moneda"],
    previos: ["La ropa y comprar (Primeros pasos)."],
    capacidad: "Ahora puedes comprar ropa en una tienda francesa."
  },
  requiere: R("ve-voc", "cb-comprar", "cb-cher", "cc-orden"), recupera: ["ve-voc"],
  conceptos: {
    "de-forma": { n: "ce, cet, cette, ces", b: "dem" },
    "de-tienda": { n: "essayer, la taille, Je regarde", b: "tienda" }
  },
  video: {
    titulo: "Este, esta, estos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "cette robe", seg: [
        { es: "Hola. Para señalar algo en una tienda hay cuatro formas." } ] },
      { v: "frase", filas: [
          { nota: "masculino", p: 1, partes: [["ce pull", "-", 1]] },
          { nota: "masculino + vocal", p: 2, partes: [["cet anorak", "-", 2]] },
          { nota: "femenino", p: 3, partes: [["cette robe", "-", 3]] },
          { nota: "plural", p: 4, partes: [["ces chaussures", "-", 4]] } ], seg: [
        { es: "Ce con masculino,", p: 1 }, { es: "cet si empieza por vocal,", p: 2 }, { es: "cette con femenino,", p: 3 }, { es: "y ces en plural.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«este anorak»", o: ["cet anorak", "ce anorak"], a: 0,
        bien: "¡Sí! Vocal: cet.", mal: "Anorak empieza por vocal: cet anorak.",
        seg: [ { es: "Pausa. Anorak empieza por vocal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ce", "cet", "cette", "ces", "Je voudrais essayer…", "Je regarde."], seg: [
        { es: "Y si solo miras: no, gracias, solo estoy mirando.", p: 1 }, { fr: "Non, merci, je regarde.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "De compras", img: "bg-paris", yo: "camila",
    escena: "Camila busca una chaqueta en una tienda.",
    pj: PJ,
    lineas: [
      ["vendeur", "Bonjour, je peux vous aider ?", "Buenos días, ¿le puedo ayudar?"],
      ["camila", "Je voudrais essayer cette veste noire.", "Quisiera probarme esta chaqueta negra."],
      ["vendeur", "Vous faites quelle taille ?", "¿Qué talla usa?"],
      ["camila", "Je fais du 38. Combien coûte ce pull ?", "Uso la 38. ¿Cuánto cuesta este suéter?"]
    ],
    fijate: "Fíjate: cette veste (femenino), ce pull (masculino)."
  },
  ensena: [
    { id: "dem", tipo: "gram", titulo: "Los demostrativos",
      idea: "ce + masculino; cet + masculino con vocal; cette + femenino; ces + plural.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Combien coûte ce pull ?", "¿Cuánto cuesta este suéter?", "ce"],
        ["J'aime cet anorak.", "Me gusta ese anorak.", "cet + vocal"],
        ["Je voudrais essayer cette veste.", "Quisiera probarme esta chaqueta.", "cette"],
        ["Ces baskets sont trop petites.", "Estos tenis son muy pequeños.", "ces"],
        ["ce pantalon", "este pantalón", "ce (masculino)"],
        ["cet article", "este artículo", "cet"],
        ["cette chemise", "esta camisa", "cette"],
        ["ces chaussettes", "estas medias", "ces"]
      ]],
      ej: [["ce", "este, ese"], ["cet", "este (ante vocal)"], ["cette", "esta, esa"], ["ces", "estos, estas"], ["la jupe", "la falda"], ["la veste", "la chaqueta"], ["le pull", "el suéter"]] },
    { id: "tienda", tipo: "gram", titulo: "En la tienda",
      idea: "Je voudrais essayer… (probarme), Vous faites quelle taille ? (¿qué talla?), Je fais du 38, Non, merci, je regarde.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Quién"], [
        ["Je peux vous aider ?", "¿Le puedo ayudar?", "vendedor"],
        ["Non, merci, je regarde.", "No, gracias, solo miro.", "cliente"],
        ["Vous faites quelle taille ?", "¿Qué talla usa?", "vendedor"],
        ["Je fais du 38.", "Uso la 38.", "cliente"],
        ["Combien coûtent ces baskets ?", "¿Cuánto cuestan estos tenis?", "cliente"],
        ["C'est trop cher !", "¡Es demasiado caro!", "cliente"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ce anorak", "cet anorak", "Vocal → cet."], ["cette pantalon", "ce pantalon", "pantalon es masculino."], ["Je voudrais essayer ce veste.", "Je voudrais essayer cette veste.", "veste es femenina."], ["Cette anorak est trop cher.", "Cet anorak est trop cher.", "anorak es masculino."]] }
  ],
  ejemplos: [
    { sit: "«¿Cuánto cuesta este suéter?»", resp: "Combien coûte ce pull ?", pasos: ["pull es masculino → ce."], porque: "Demostrativo." },
    { sit: "«Quisiera probarme esta falda.»", resp: "Je voudrais essayer cette jupe.", pasos: ["jupe es femenina → cette."], porque: "Femenino." },
    { sit: "El vendedor: «Je peux vous aider ?» Solo miras.", resp: "Non, merci, je regarde.", pasos: ["je regarde = miro."], porque: "Fórmula." }
  ],
  comprueba: [
    { q: "Con «anorak» se usa…", o: ["cet", "ce"], a: 0, b: "dem", porque: "Vocal." },
    { q: "«ces» es…", o: ["plural", "femenino singular"], a: 0, b: "dem", porque: "Plural." },
    { q: "«essayer» en una tienda es…", o: ["probarse", "ensayar"], a: 0, b: "tienda", porque: "Probar." }
  ],
  practica: [
    { fase: "guiada", c: ["de-forma"], k: "choice", ask: "«¿Cuánto cuesta este suéter?»", q: "«Combien coûte ___ pull ?»", o: ["ce", "cet", "cette"], a: 0, pista: "pull es masculino.", why: "<b>ce pull</b>." },
    { fase: "guiada", c: ["de-forma"], k: "choice", ask: "«Quisiera probarme este anorak azul.»", q: "«Je voudrais essayer ___ anorak bleu.»", o: ["cet", "ce", "cette"], a: 0, pista: "Vocal.", why: "<b>cet anorak</b>." },
    { fase: "guiada", c: ["de-tienda"], k: "match", ask: "Une cada prenda.", q: "Francés → español", pairs: [["la veste", "la chaqueta"], ["le pull", "el suéter"], ["la jupe", "la falda"], ["les chaussures", "los zapatos"]], pista: "veste = chaqueta.", why: "Ropa." },
    { fase: "indep", c: ["de-forma"], k: "fill", ask: "Escribe el demostrativo.", q: "J'adore ___ robe !", acc: ["cette"], why: "<b>cette robe</b>." },
    { fase: "indep", c: ["de-forma"], k: "fill", ask: "Escribe el demostrativo.", q: "Combien coûtent ___ chaussures ?", acc: ["ces"], why: "<b>ces</b>." },
    { fase: "indep", c: ["de-forma"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais essayer [ce] veste noire , s'il vous plaît .", fix: "cette", why: "<b>cette veste</b>." },
    { fase: "aplica", c: ["de-forma"], k: "sort", ask: "¿ce, cet, cette o ces?", q: "Clasifica.", cats: ["ce", "cet", "cette", "ces"], items: [["pantalon", 0], ["manteau", 0], ["anorak", 1], ["article", 1], ["chemise", 2], ["jupe", 2], ["baskets", 3], ["chaussettes", 3]], why: "Según género, número y vocal." },
    { fase: "aplica", c: ["de-tienda"], k: "choice", ask: "—¿Qué talla usa?", q: "«— Vous faites quelle taille ? — ___»", o: ["Je fais du 38.", "Je suis 38.", "J'ai 38 ans."], a: 0, why: "<b>Je fais du 38.</b>" },
    { fase: "dominio", c: ["de-tienda"], k: "choice", ask: "—¿Le puedo ayudar? Solo estás mirando.", q: "«— Bonjour, je peux vous aider ? — ___»", o: ["Non, merci, je regarde.", "Oui, je regarde.", "Non, je fais du 38."], a: 0, why: "<b>Non, merci, je regarde.</b>" },
    { fase: "dominio", c: ["de-forma"], k: "spot", ask: "Encuentra el error.", s: "[Cette] anorak est trop cher .", fix: "Cet", why: "<b>Cet anorak</b>." },
    { fase: "dominio", c: ["de-forma", "de-tienda"], k: "listen", say: "Je voudrais essayer cette robe rouge.", acc: ["Je voudrais essayer cette robe rouge."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais essayer cette robe rouge.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["anorak", "bleu", "noire", "baskets", "trop", "petites", "manteau", "article", "chaussettes", "38", "aider", "peux", "vous", "combien"] }
};

E["a1-vouloir-pouvoir-devoir"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Vouloir, pouvoir, devoir",
  objetivo: {
    que: "Vas a usar querer, poder y tener que + infinitivo para invitar, aceptar y rechazar.",
    corto: "Querer, poder, tener que.",
    podras: ["Conjugar vouloir, pouvoir y devoir.", "Poner el infinitivo después: je veux sortir.", "Rechazar: Je ne peux pas, je dois étudier."],
    iconos: ["ic2/amigos", "m2d/pensativo", "m2d/estudiar"],
    previos: ["Invitar y rechazar (Primeros pasos)."],
    capacidad: "Ahora puedes hacer planes y explicar por qué no puedes."
  },
  requiere: R("in-invitar", "in-resp", "ir-aller-faire", "sp-jouer"), recupera: ["in-invitar", "in-resp"],
  conceptos: {
    "vp-conj": { n: "veux, peux, dois…", b: "conj" },
    "vp-uso": { n: "+ infinitivo; invitar y rechazar", b: "conj" }
  },
  video: {
    titulo: "Querer, poder, deber", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Tu veux venir ?", seg: [
        { es: "Hola. Tres verbos para hacer planes." } ] },
      { v: "dos",
        a: { tag: "invitar", fr: "Tu veux venir au cinéma ?", es: "¿Quieres venir al cine?" },
        b: { tag: "rechazar", fr: "Je ne peux pas, je dois étudier.", es: "No puedo, tengo que estudiar." },
        seg: [ { es: "Para invitar:", p: 1 }, { fr: "Tu veux venir au cinéma ?", p: 1 }, { es: "Para rechazar y explicar:", p: 2 }, { fr: "Je ne peux pas, je dois étudier.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo que trabajar.»", o: ["Je dois travailler.", "J'ai que travailler."], a: 0,
        bien: "¡Sí! Tener que = devoir.", mal: "«Tener que» se dice devoir: je dois travailler.",
        seg: [ { es: "Pausa. ¿Cómo dices tener que?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je veux", "je peux", "je dois", "nous devons", "ils veulent", "vous pouvez"], seg: [
        { es: "Siempre con un infinitivo después.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planes del sábado", img: "bg-cafe", yo: "camila",
    escena: "Hugo invita a Camila al cine.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux venir au cinéma samedi ?", "¿Quieres venir al cine el sábado?"],
      ["camila", "Désolée, je ne peux pas, j'ai un examen. Je dois étudier.", "Lo siento, no puedo, tengo un examen. Tengo que estudiar."],
      ["hugo", "Et dimanche ? Nous pouvons jouer au foot.", "¿Y el domingo? Podemos jugar fútbol."],
      ["camila", "Avec plaisir ! Bonne idée !", "¡Con mucho gusto! ¡Buena idea!"]
    ],
    fijate: "Fíjate: je ne peux pas + je dois étudier."
  },
  ensena: [
    { id: "conj", tipo: "gram", titulo: "Los tres verbos",
      idea: "vouloir (querer), pouvoir (poder), devoir (tener que) + infinitivo, sin preposición.",
      intro: "Toca cada forma.",
      tabla: [["vouloir", "pouvoir", "devoir"], [
        ["je veux", "je peux", "je dois"],
        ["tu veux", "tu peux", "tu dois"],
        ["il veut", "il peut", "il doit"],
        ["nous voulons", "nous pouvons", "nous devons"],
        ["vous voulez", "vous pouvez", "vous devez"],
        ["ils veulent", "ils peuvent", "ils doivent"]
      ]],
      ej: [["je peux", "puedo"], ["tu peux", "puedes"], ["il peut", "puede"], ["nous pouvons", "podemos"], ["vous pouvez", "pueden / puede usted"], ["ils peuvent", "pueden"], ["je dois", "tengo que"], ["tu dois", "tienes que"], ["il doit", "tiene que"], ["nous devons", "tenemos que"], ["vous devez", "tienen que"], ["ils doivent", "tienen que"], ["ils veulent", "quieren"], ["vous voulez", "quieren"], ["nous voulons", "queremos"], ["il veut", "quiere"]] },
    { id: "uso", tipo: "gram", titulo: "Hacer planes",
      idea: "Invitar: Tu veux + infinitivo ? Aceptar: Avec plaisir ! Rechazar: Désolé, je ne peux pas.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu veux venir au cinéma ?", "¿Quieres venir al cine?", "invitar"],
        ["Avec plaisir !", "¡Con mucho gusto!", "aceptar"],
        ["Bonne idée !", "¡Buena idea!", "aceptar"],
        ["Je ne peux pas venir samedi.", "No puedo venir el sábado.", "rechazar"],
        ["Je dois partir.", "Tengo que irme.", "explicar"],
        ["Vous pouvez répéter ?", "¿Puede repetir?", "pedir"],
        ["Elle ne peut pas sortir ce soir.", "Ella no puede salir esta noche.", "negativo"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai que travailler.", "Je dois travailler.", "Tener que = devoir."], ["Tu veut venir ?", "Tu veux venir ?", "tu veux, con x."]] }
  ],
  ejemplos: [
    { sit: "«¿Quieres venir al cine?»", resp: "Tu veux venir au cinéma ?", pasos: ["tu veux + venir."], porque: "Invitar." },
    { sit: "«No puedo, tengo que estudiar.»", resp: "Je ne peux pas, je dois étudier.", pasos: ["ne peux pas.", "dois + infinitivo."], porque: "Rechazar." },
    { sit: "«Quieren salir esta noche.»", resp: "Ils veulent sortir ce soir.", pasos: ["ils veulent."], porque: "Querer." }
  ],
  comprueba: [
    { q: "«devoir» significa…", o: ["tener que", "deber dinero solamente"], a: 0, b: "conj", porque: "Obligación." },
    { q: "Después de vouloir, pouvoir, devoir va…", o: ["un infinitivo", "de + infinitivo"], a: 0, b: "conj", porque: "Sin preposición." },
    { q: "«ils peuvent» significa…", o: ["pueden", "quieren"], a: 0, b: "conj", porque: "pouvoir." }
  ],
  practica: [
    { fase: "guiada", c: ["vp-uso"], k: "choice", ask: "«¿Quieres venir al cine el sábado?»", q: "«Tu ___ venir au cinéma samedi ?»", o: ["veux", "peux", "dois"], a: 0, pista: "Querer.", why: "<b>veux</b>." },
    { fase: "guiada", c: ["vp-conj"], k: "sort", ask: "¿Qué verbo es?", q: "Clasifica.", cats: ["vouloir", "pouvoir", "devoir"], items: [["veux", 0], ["voulons", 0], ["veulent", 0], ["peux", 1], ["pouvez", 1], ["peuvent", 1], ["dois", 2], ["doivent", 2]], pista: "v-, p-, d-.", why: "Los tres verbos." },
    { fase: "guiada", c: ["vp-uso"], k: "choice", ask: "«Lo siento, no puedo, tengo un examen mañana.»", q: "«Désolée, je ne ___ pas, j'ai un examen demain.»", o: ["peux", "veux", "dois"], a: 0, pista: "Poder.", why: "<b>peux</b>." },
    { fase: "indep", c: ["vp-conj"], k: "fill", ask: "Conjuga devoir (nous).", q: "Nous ___ rendre le devoir lundi.", acc: ["devons"], why: "<b>devons</b>." },
    { fase: "indep", c: ["vp-conj"], k: "fill", ask: "Conjuga vouloir (ils).", q: "Ils ___ jouer au foot ce soir.", acc: ["veulent"], why: "<b>veulent</b>." },
    { fase: "indep", c: ["vp-conj"], k: "fill", ask: "Conjuga pouvoir (vous).", q: "Vous ___ répéter, s'il vous plaît ?", acc: ["pouvez"], why: "<b>pouvez</b>." },
    { fase: "aplica", c: ["vp-uso"], k: "spot", ask: "Encuentra el error.", s: "Je ne peux pas sortir , [j'ai que] travailler .", fix: "je dois", why: "<b>je dois</b> travailler." },
    { fase: "aplica", c: ["vp-uso"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Avec plaisir !", "¡Con mucho gusto!"], ["Je ne peux pas.", "No puedo."], ["Je dois partir.", "Tengo que irme."], ["Bonne idée !", "¡Buena idea!"]], why: "Planes." },
    { fase: "dominio", c: ["vp-conj"], k: "spot", ask: "Encuentra el error.", s: "Salut Hugo ! Tu [veut] venir chez moi ce soir ?", fix: "veux", why: "<b>tu veux</b>." },
    { fase: "dominio", c: ["vp-uso"], k: "choice", ask: "Ella está enferma.", q: "«Elle ___ sortir ce soir : elle est malade.»", o: ["ne peut pas", "ne veut", "doit pas"], a: 0, why: "<b>ne peut pas</b>." },
    { fase: "dominio", c: ["vp-conj", "vp-uso"], k: "listen", say: "Tu veux venir au cinéma ce soir ?", acc: ["Tu veux venir au cinéma ce soir ?", "Tu veux venir au cinéma ce soir?", "Tu veux venir au cinéma ce soir"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Tu veux venir au cinéma ce soir ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["venir", "sortir", "étudier", "partir", "rendre", "devoir", "travailler", "répéter", "jouer", "foot", "chez", "moi", "malade", "cinéma", "samedi", "dimanche", "lundi", "examen", "demain", "désolée", "ce", "soir"] }
};

E["a1-loisirs"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les loisirs : jouer à, jouer de, faire de",
  objetivo: {
    que: "Vas a hablar de pasatiempos: jouer à (deportes y juegos), jouer de (instrumentos) y faire de (otras actividades).",
    corto: "Jugar a, tocar, hacer.",
    podras: ["Usar jouer au / aux con deportes y juegos.", "Usar jouer du / de la con instrumentos.", "Negar: je ne fais pas de sport."],
    iconos: ["ic2/nota", "ic2/mando", "m2d/correr"],
    previos: ["Los deportes y pasatiempos (Primeros pasos) y las contracciones (lección 7)."],
    capacidad: "Ahora puedes contar qué haces en tu tiempo libre."
  },
  requiere: R("sp-jouer", "sp-voc", "lo-verbos", "vi-contr", "ir-aller-faire"), recupera: ["sp-jouer"],
  conceptos: {
    "lo2-jouer": { n: "jouer à / jouer de", b: "jouer" },
    "lo2-faire": { n: "faire du / de la; pas de", b: "jouer" }
  },
  video: {
    titulo: "Jugar, tocar, hacer", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "Je joue de la guitare.", seg: [
        { es: "Hola. Jugar y tocar se dicen igual en francés: jouer. Cambia la preposición." } ] },
      { v: "dos",
        a: { tag: "deporte o juego", fr: "Je joue au basket.", es: "Juego baloncesto." },
        b: { tag: "instrumento", fr: "Elle joue de la guitare.", es: "Ella toca la guitarra." },
        seg: [ { es: "Con un deporte, a:", p: 1 }, { fr: "Je joue au basket.", p: 1 }, { es: "Con un instrumento, de:", p: 2 }, { fr: "Elle joue de la guitare.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Toco el piano.»", o: ["Je joue du piano.", "Je touche le piano."], a: 0,
        bien: "¡Sí! Jouer de.", mal: "Tocar un instrumento: jouer de. Je joue du piano.",
        seg: [ { es: "Pausa. ¿Cómo dices tocar el piano?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["jouer au", "jouer aux", "jouer du", "jouer de la", "faire du", "pas de"], seg: [
        { es: "Y en negativo: no hago deporte.", p: 1 }, { fr: "Je ne fais pas de sport.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Pasatiempos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de lo que hacen en su tiempo libre.",
    pj: PJ,
    lineas: [
      ["hugo", "Le samedi, je joue au football avec mes amis.", "Los sábados juego fútbol con mis amigos."],
      ["camila", "Moi, je joue de la guitare. Et mon frère joue du piano.", "Yo toco la guitarra. Y mi hermano toca el piano."],
      ["hugo", "Tu fais du vélo ?", "¿Montas en bicicleta?"],
      ["camila", "Non, je ne fais pas de sport. Je n'ai pas le temps !", "No, no hago deporte. ¡No tengo tiempo!"]
    ],
    fijate: "Fíjate: joue au football, joue de la guitare."
  },
  ensena: [
    { id: "jouer", tipo: "gram", titulo: "Jouer y faire",
      idea: "Deporte o juego: jouer à (au, aux). Instrumento: jouer de (du, de la). Otras actividades: faire de (du, de la, de l'). Negativo: pas de.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je joue au basket le samedi.", "Juego baloncesto los sábados.", "jouer au"],
        ["Nous jouons aux cartes le soir.", "Jugamos a las cartas.", "jouer aux"],
        ["Elle joue de la guitare.", "Ella toca la guitarra.", "jouer de la"],
        ["Mon frère joue du piano.", "Mi hermano toca el piano.", "jouer du"],
        ["Nous faisons du vélo.", "Montamos en bicicleta.", "faire du"],
        ["Elle fait de la natation.", "Ella hace natación.", "faire de la"],
        ["Il fait de l'escalade.", "Hace escalada.", "faire de l'"],
        ["Je ne fais pas de sport.", "No hago deporte.", "pas de"]
      ]],
      ej: [["le tennis", "el tenis"], ["les échecs", "el ajedrez"], ["les jeux vidéo", "los videojuegos"], ["le piano", "el piano"], ["la guitare", "la guitarra"], ["la batterie", "la batería"], ["le violon", "el violín"], ["la danse", "la danza"], ["jouer au basket", "jugar baloncesto"], ["jouer du piano", "tocar el piano"], ["faire du vélo", "montar en bicicleta"], ["faire de la danse", "bailar, hacer danza"], ["jouer aux jeux vidéo", "jugar videojuegos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je joue le football.", "Je joue au football.", "Deporte: jouer à."], ["Je touche la guitare.", "Je joue de la guitare.", "Tocar = jouer de."], ["Je ne fais pas du sport.", "Je ne fais pas de sport.", "Negativo: pas de."]] }
  ],
  ejemplos: [
    { sit: "«Juego tenis los domingos.»", resp: "Le dimanche, je joue au tennis.", pasos: ["jouer à + le = au."], porque: "Deporte." },
    { sit: "«Mi hermana hace danza.»", resp: "Ma sœur fait de la danse.", pasos: ["faire de la."], porque: "Actividad." },
    { sit: "«No hago deporte.»", resp: "Je ne fais pas de sport.", pasos: ["pas de."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Con un instrumento se usa…", o: ["jouer de", "jouer à"], a: 0, b: "jouer", porque: "Instrumento." },
    { q: "«Je joue aux cartes» significa…", o: ["Juego a las cartas.", "Toco las cartas."], a: 0, b: "jouer", porque: "Juego." },
    { q: "Negativo de «je fais du sport»:", o: ["je ne fais pas de sport", "je ne fais pas du sport"], a: 0, b: "jouer", porque: "pas de." }
  ],
  practica: [
    { fase: "guiada", c: ["lo2-jouer"], k: "choice", ask: "«Los sábados juego fútbol.»", q: "«Le samedi, je joue ___ football avec mes amis.»", o: ["au", "du", "le"], a: 0, pista: "Deporte.", why: "<b>au football</b>." },
    { fase: "guiada", c: ["lo2-jouer"], k: "choice", ask: "«Mi hermano toca la guitarra.»", q: "«Mon frère joue ___ guitare.»", o: ["de la", "à la", "la"], a: 0, pista: "Instrumento.", why: "<b>de la guitare</b>." },
    { fase: "guiada", c: ["lo2-jouer", "lo2-faire"], k: "match", ask: "Une cada actividad.", q: "Francés → español", pairs: [["jouer au basket", "jugar baloncesto"], ["jouer du piano", "tocar el piano"], ["faire du vélo", "montar en bicicleta"], ["faire de la danse", "hacer danza"], ["jouer aux jeux vidéo", "jugar videojuegos"]], pista: "du piano: instrumento.", why: "Pasatiempos." },
    { fase: "indep", c: ["lo2-faire"], k: "fill", ask: "Escribe de + le.", q: "Tu fais ___ vélo le dimanche ?", acc: ["du"], why: "<b>du vélo</b>." },
    { fase: "indep", c: ["lo2-jouer"], k: "fill", ask: "Escribe à + les.", q: "Nous jouons ___ cartes le soir.", acc: ["aux"], why: "<b>aux cartes</b>." },
    { fase: "indep", c: ["lo2-jouer"], k: "spot", ask: "Encuentra el error.", s: "Je [touche] de la guitare dans un groupe .", fix: "joue", why: "<b>joue</b>." },
    { fase: "aplica", c: ["lo2-jouer"], k: "sort", ask: "¿Jouer à o jouer de?", q: "Clasifica.", cats: ["jouer à", "jouer de"], items: [["le tennis", 0], ["le basket", 0], ["les échecs", 0], ["les jeux vidéo", 0], ["le piano", 1], ["la guitare", 1], ["la batterie", 1], ["le violon", 1]], why: "Deporte o instrumento." },
    { fase: "aplica", c: ["lo2-faire"], k: "spot", ask: "Encuentra el error.", s: "Je ne fais pas [du] sport , je n'ai pas le temps .", fix: "de", why: "<b>pas de</b>." },
    { fase: "dominio", c: ["lo2-faire"], k: "fill", ask: "Escribe de + la.", q: "Elle fait ___ natation trois fois par semaine.", acc: ["de la"], why: "<b>de la natation</b>." },
    { fase: "dominio", c: ["lo2-jouer"], k: "order", ask: "Ordena: «Toco la batería los sábados».", tokens: ["Je joue", "de la", "batterie", "le samedi."], why: "<b>Je joue de la batterie le samedi.</b>" },
    { fase: "dominio", c: ["lo2-jouer", "lo2-faire"], k: "listen", say: "Le dimanche, je joue au tennis.", acc: ["Le dimanche, je joue au tennis.", "Le dimanche je joue au tennis."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le dimanche, je joue au tennis.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["cartes", "groupe", "temps", "trois", "fois", "par", "semaine", "escalade", "natation", "football", "vélo", "sport", "avec", "mes", "amis", "moi", "frère", "sœur", "soir"] }
};

/* ================================ A1·6 ================================ */

E["a1-nombres-70-100"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les nombres de 70 à 100",
  objetivo: {
    que: "Vas a dominar del 70 al 99, que en francés se cuentan por veintenas.",
    corto: "70, 80, 90: la cuenta francesa.",
    podras: ["Formar 70-79 con soixante + 10-19.", "Formar 80-99 con quatre-vingt(s).", "Saber cuándo va et y cuándo la s."],
    iconos: ["ic2/moneda", "ic2/lapiz", "m2d/pensativo"],
    previos: ["Los números hasta 69 y de 70 a 100 en el restaurante (lección 12)."],
    capacidad: "Ahora puedes entender cualquier número de teléfono o precio francés."
  },
  requiere: R("na-num", "cr-num", "ad-orden"), recupera: ["cr-num"],
  conceptos: {
    "n7-70": { n: "70-79: soixante-dix…", b: "num" },
    "n7-80": { n: "80-99: quatre-vingt(s)…", b: "num" }
  },
  video: {
    titulo: "De 70 a 99", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "quatre-vingt-dix-neuf", seg: [
        { es: "Hola. Desde setenta, el francés de Francia cuenta por veintenas." } ] },
      { v: "frase", filas: [
          { nota: "77 = 60 + 17", p: 1, partes: [["soixante-dix-sept", "-", 1]] },
          { nota: "84 = 4 × 20 + 4", p: 2, partes: [["quatre-vingt-quatre", "-", 2]] },
          { nota: "93 = 4 × 20 + 13", p: 3, partes: [["quatre-vingt-treize", "-", 3]] } ], seg: [
        { es: "Setenta y siete: sesenta más diecisiete.", p: 1 },
        { es: "Ochenta y cuatro: cuatro veintes más cuatro.", p: 2 },
        { es: "Noventa y tres: cuatro veintes más trece.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "71 =", o: ["soixante et onze", "soixante-onze"], a: 0,
        bien: "¡Sí! 71 lleva et.", mal: "71 lleva et: soixante et onze.",
        seg: [ { es: "Pausa. ¿Cómo se escribe setenta y uno?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["soixante-dix", "soixante et onze", "quatre-vingts", "quatre-vingt-un", "quatre-vingt-dix", "quatre-vingt-dix-neuf"], seg: [
        { es: "Ochenta lleva ese solo cuando va solo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi número", img: "bg-cafe", yo: "camila",
    escena: "Camila le da su número de teléfono a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "C'est quoi, ton numéro ?", "¿Cuál es tu número?"],
      ["camila", "Zéro six, soixante-douze, quatre-vingt-un, quatre-vingt-dix, quinze.", "06 72 81 90 15."],
      ["hugo", "Soixante-douze ou quatre-vingt-douze ?", "¿Setenta y dos o noventa y dos?"],
      ["camila", "Soixante-douze !", "¡Setenta y dos!"]
    ],
    fijate: "Fíjate: soixante-douze = 72; quatre-vingt-douze = 92."
  },
  ensena: [
    { id: "num", tipo: "vocab", titulo: "De 70 a 99",
      idea: "70-79: soixante + 10-19. 80: quatre-vingts (con s). 81-99: quatre-vingt + 1-19 (sin s). 71 lleva et; 81 y 91 no.",
      intro: "Toca cada número.",
      palabras: [
        { fr: "soixante-dix", es: "70" }, { fr: "soixante et onze", es: "71" }, { fr: "soixante-douze", es: "72" },
        { fr: "soixante-dix-sept", es: "77" }, { fr: "quatre-vingts", es: "80" }, { fr: "quatre-vingt-un", es: "81" },
        { fr: "quatre-vingt-quatre", es: "84" }, { fr: "quatre-vingt-cinq", es: "85" }, { fr: "quatre-vingt-dix", es: "90" },
        { fr: "quatre-vingt-onze", es: "91" }, { fr: "quatre-vingt-douze", es: "92" }, { fr: "quatre-vingt-treize", es: "93" },
        { fr: "quatre-vingt-dix-neuf", es: "99" }
      ],
      clave: "quatre-vingts (80) pierde la s si sigue otro número: quatre-vingt-deux." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["quatre-vingts-deux", "quatre-vingt-deux", "La s desaparece si sigue un número."], ["Mon oncle a quatre-vingts-cinq ans.", "Mon oncle a quatre-vingt-cinq ans.", "Sin s."], ["soixante-onze", "soixante et onze", "71 lleva et."]] }
  ],
  ejemplos: [
    { sit: "«Mi abuelo tiene 82 años.»", resp: "Mon grand-père a quatre-vingt-deux ans.", pasos: ["4 × 20 + 2.", "Sin s."], porque: "80 + número." },
    { sit: "«Cuesta 70 euros.»", resp: "Ça coûte soixante-dix euros.", pasos: ["60 + 10."], porque: "70." },
    { sit: "«Hay 75 alumnos.»", resp: "Il y a soixante-quinze élèves.", pasos: ["60 + 15."], porque: "70-79." }
  ],
  comprueba: [
    { q: "«soixante-dix-sept» es…", o: ["77", "67"], a: 0, b: "num", porque: "60 + 17." },
    { q: "80 se escribe…", o: ["quatre-vingts", "huitante"], a: 0, b: "num", porque: "En Francia." },
    { q: "«quatre-vingt-dix» es…", o: ["90", "84"], a: 0, b: "num", porque: "4 × 20 + 10." }
  ],
  practica: [
    { fase: "guiada", c: ["n7-70"], k: "choice", es: true, ask: "soixante-dix-sept = ?", q: "Elige.", o: ["77", "67", "87"], a: 0, pista: "60 + 17.", why: "<b>77</b>." },
    { fase: "guiada", c: ["n7-80"], k: "choice", ask: "93 = ?", q: "«___»", o: ["quatre-vingt-treize", "quatre-vingts-treize", "soixante-treize"], a: 0, pista: "4 × 20 + 13.", why: "<b>quatre-vingt-treize</b>." },
    { fase: "guiada", c: ["n7-70", "n7-80"], k: "match", ask: "Une cada número.", q: "Francés → cifra", pairs: [["soixante-dix", "70"], ["quatre-vingts", "80"], ["quatre-vingt-un", "81"], ["quatre-vingt-dix", "90"], ["quatre-vingt-dix-neuf", "99"]], pista: "Veintenas.", why: "De 70 a 99." },
    { fase: "indep", c: ["n7-80"], k: "fill", ask: "Escribe 80 en letras.", q: "Ma mère a ___ ans.", acc: ["quatre-vingts"], why: "<b>quatre-vingts</b>." },
    { fase: "indep", c: ["n7-80"], k: "fill", ask: "Escribe 90 en letras.", q: "Le livre coûte ___ euros.", acc: ["quatre-vingt-dix"], why: "<b>quatre-vingt-dix</b>." },
    { fase: "indep", c: ["n7-80"], k: "choice", es: true, say: "quatre-vingt-quatre", ask: "Escucha. ¿Qué número es?", q: "Elige.", o: ["84", "24", "94"], a: 0, why: "<b>84</b>." },
    { fase: "aplica", c: ["n7-80"], k: "spot", ask: "Encuentra el error.", s: "Mon oncle a [quatre-vingts-cinq] ans .", fix: "quatre-vingt-cinq", why: "<b>quatre-vingt-cinq</b>." },
    { fase: "aplica", c: ["n7-70"], k: "fill", ask: "Completa 71.", q: "71 = soixante et ___", acc: ["onze"], why: "<b>soixante et onze</b>." },
    { fase: "dominio", c: ["n7-80"], k: "choice", ask: "92 = ?", q: "«___»", o: ["quatre-vingt-douze", "soixante-douze"], a: 0, why: "<b>quatre-vingt-douze</b>." },
    { fase: "dominio", c: ["n7-70"], k: "choice", es: true, say: "soixante-douze", ask: "Escucha. ¿Qué número es?", q: "Elige.", o: ["72", "92", "62"], a: 0, why: "<b>72</b>." },
    { fase: "dominio", c: ["n7-70", "n7-80"], k: "listen", say: "J'ai quatre-vingt-dix euros dans mon sac.", acc: ["J'ai quatre-vingt-dix euros dans mon sac.", "J'ai 90 euros dans mon sac."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai quatre-vingt-dix euros dans mon sac.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["numéro", "ton", "zéro", "quinze", "élèves", "coûte", "euros", "livre", "oncle", "sac", "grand-père"] }
};

E["a1-grands-nombres"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Cent, mille : les grands nombres et les prix",
  objetivo: {
    que: "Vas a decir centenas, miles, años y precios.",
    corto: "Cien, mil y los años.",
    podras: ["Usar cent y mille sin un.", "Saber cuándo cent lleva s.", "Decir años: deux mille vingt-six."],
    iconos: ["ic2/moneda", "ic2/cofre", "ic2/reloj-arena"],
    previos: ["Del 70 al 99 (lección 17)."],
    capacidad: "Ahora puedes decir precios, años y cantidades grandes."
  },
  requiere: R("n7-70", "n7-80", "ar2-voc"), recupera: ["n7-80"],
  conceptos: {
    "gn-cent": { n: "cent, deux cents, deux cent cinquante", b: "num" },
    "gn-mille": { n: "mille, deux mille; los años", b: "num" }
  },
  video: {
    titulo: "Cien y mil", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "deux mille vingt-six", seg: [
        { es: "Hola. Cien y mil funcionan casi como en español." } ] },
      { v: "dos",
        a: { tag: "redondo", fr: "deux cents", es: "con s" },
        b: { tag: "con otro número", fr: "deux cent cinquante", es: "sin s" },
        seg: [ { es: "Doscientos redondo lleva ese:", p: 1 }, { fr: "deux cents", p: 1 }, { es: "Si sigue otro número, sin ese:", p: 2 }, { fr: "deux cent cinquante", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«cien euros»", o: ["cent euros", "un cent euros"], a: 0,
        bien: "¡Sí! Sin un.", mal: "Delante de cent no va un: cent euros.",
        seg: [ { es: "Pausa. ¿Lleva un delante?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["cent", "deux cents", "mille", "deux mille", "deux mille vingt-six"], seg: [
        { es: "Mil nunca lleva ese.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una bicicleta", img: "bg-paris", yo: "camila",
    escena: "Camila quiere comprar una bicicleta de segunda mano.",
    pj: PJ,
    lineas: [
      ["camila", "Ce vélo coûte combien ?", "¿Cuánto cuesta esta bici?"],
      ["vendeur", "Trois cents euros.", "Trescientos euros."],
      ["camila", "Trois cents ? Et celui-là ?", "¿Trescientos? ¿Y esa?"],
      ["vendeur", "Deux cent soixante euros.", "Doscientos sesenta euros."]
    ],
    fijate: "Fíjate: trois cents (redondo), deux cent soixante (sin s)."
  },
  ensena: [
    { id: "num", tipo: "vocab", titulo: "Centenas y miles",
      idea: "cent (100), deux cents (200), deux cent cinquante (250), mille (1 000), deux mille (2 000). Sin un delante.",
      intro: "Toca cada número.",
      palabras: [
        { fr: "cent", es: "100" }, { fr: "deux cents", es: "200" }, { fr: "trois cents", es: "300" },
        { fr: "quatre cent cinquante", es: "450" }, { fr: "cinq cents", es: "500" }, { fr: "mille", es: "1 000" },
        { fr: "mille cinq cents", es: "1 500" }, { fr: "deux mille", es: "2 000" }, { fr: "dix mille", es: "10 000" },
        { fr: "deux mille vingt-six", es: "2026" }, { fr: "mille neuf cent quatre-vingt-dix-huit", es: "1998" },
        { fr: "deux euros cinquante", es: "2,50 €" }
      ],
      clave: "cents con s solo si es redondo; mille nunca lleva s." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un cent euros", "cent euros", "Sin un."], ["Il y a milles livres.", "Il y a mille livres.", "mille no lleva s."]] }
  ],
  ejemplos: [
    { sit: "«300 estudiantes»", resp: "trois cents étudiants", pasos: ["Redondo → cents."], porque: "Plural." },
    { sit: "«Estamos en 2026.»", resp: "Nous sommes en deux mille vingt-six.", pasos: ["deux mille + vingt-six."], porque: "Año." },
    { sit: "«1 200 pesos»", resp: "mille deux cents pesos", pasos: ["mille sin un.", "deux cents redondo."], porque: "Precio." }
  ],
  comprueba: [
    { q: "2 000 =", o: ["deux mille", "deux milles"], a: 0, b: "num", porque: "mille no cambia." },
    { q: "250 =", o: ["deux cent cinquante", "deux cents cinquante"], a: 0, b: "num", porque: "Sin s si sigue número." },
    { q: "«cent euros» lleva un delante…", o: ["no", "sí"], a: 0, b: "num", porque: "Sin un." }
  ],
  practica: [
    { fase: "guiada", c: ["gn-cent"], k: "choice", ask: "300 = ?", q: "«___»", o: ["trois cents", "trois cent", "un trois cents"], a: 0, pista: "Redondo.", why: "<b>trois cents</b>." },
    { fase: "guiada", c: ["gn-mille"], k: "choice", ask: "2 000 = ?", q: "«___»", o: ["deux mille", "deux milles", "deux cents"], a: 0, pista: "Nunca s.", why: "<b>deux mille</b>." },
    { fase: "guiada", c: ["gn-cent", "gn-mille"], k: "match", ask: "Une cada número.", q: "Francés → cifra", pairs: [["cent", "100"], ["cinq cents", "500"], ["mille", "1 000"], ["mille cinq cents", "1 500"], ["dix mille", "10 000"]], pista: "mille = 1 000.", why: "Grandes números." },
    { fase: "indep", c: ["gn-cent"], k: "choice", ask: "450 = ?", q: "«___»", o: ["quatre cent cinquante", "quatre cents cinquante"], a: 0, why: "Sin s." },
    { fase: "indep", c: ["gn-mille"], k: "fill", ask: "Naciste en 2005.", q: "Je suis né en deux mille ___ .", acc: ["cinq"], why: "<b>deux mille cinq</b>." },
    { fase: "indep", c: ["gn-mille"], k: "choice", es: true, say: "mille neuf cent quatre-vingt-dix-huit", ask: "Escucha. ¿Qué año es?", q: "Elige.", o: ["1998", "1988", "2098"], a: 0, why: "<b>1998</b>." },
    { fase: "aplica", c: ["gn-mille"], k: "spot", ask: "Encuentra el error.", s: "Il y a [milles] livres dans la bibliothèque .", fix: "mille", why: "<b>mille</b>." },
    { fase: "aplica", c: ["gn-cent"], k: "fill", ask: "Escribe el precio (2,50 €).", q: "Le café coûte deux euros ___ .", acc: ["cinquante"], why: "<b>cinquante</b>." },
    { fase: "dominio", c: ["gn-cent"], k: "fill", ask: "Completa 200.", q: "200 = deux ___", acc: ["cents"], why: "<b>deux cents</b>." },
    { fase: "dominio", c: ["gn-mille"], k: "choice", ask: "1 500 = ?", q: "«___»", o: ["mille cinq cents", "un mille cinq cents"], a: 0, why: "<b>mille cinq cents</b>." },
    { fase: "dominio", c: ["gn-cent", "gn-mille"], k: "listen", say: "Le vélo coûte deux cent soixante euros.", acc: ["Le vélo coûte deux cent soixante euros.", "Le vélo coûte 260 euros."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le vélo coûte deux cent soixante euros.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["vélo", "coûte", "combien", "euros", "celui-là", "étudiants", "pesos", "sommes", "né", "livres", "bibliothèque", "café"] }
};

E["a1-date"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Dire la date : le premier mai",
  objetivo: {
    que: "Vas a decir la fecha completa: le premier mai, le 14 juillet, y a preguntar qué día es.",
    corto: "La fecha con le y premier.",
    podras: ["Decir le + número + mes.", "Usar le premier para el día 1.", "Preguntar On est le combien ?"],
    iconos: ["ic2/regalo", "ic2/reloj-arena", "m2d/reloj"],
    previos: ["Los meses y el cumpleaños (Primeros pasos)."],
    capacidad: "Ahora puedes decir y preguntar cualquier fecha."
  },
  requiere: R("an-fecha", "ms-fecha"), recupera: ["an-fecha"],
  conceptos: {
    "da-forma": { n: "le + número + mes; le premier", b: "fecha" },
    "da-preg": { n: "On est le combien ? / en + mes o año", b: "fecha" }
  },
  video: {
    titulo: "La fecha", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "le premier mai", seg: [
        { es: "Hola. Para la fecha: le, el número y el mes." } ] },
      { v: "dos",
        a: { tag: "día 1", fr: "le premier janvier", es: "primero" },
        b: { tag: "los demás", fr: "le deux février", es: "número normal" },
        seg: [ { es: "El día uno se dice primero:", p: 1 }, { fr: "le premier janvier", p: 1 }, { es: "Los demás, con el número:", p: 2 }, { fr: "le deux février", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nací en 2006.»", o: ["Je suis né en 2006.", "Je suis né le 2006."], a: 0,
        bien: "¡Sí! Con año o mes: en.", mal: "Con un año o un mes: en.",
        seg: [ { es: "Pausa. Solo el año." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le premier mai", "le 14 juillet", "On est le combien ?", "en août", "en 2006"], seg: [
        { es: "Le con la fecha completa; en con solo el mes o el año.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen", img: "bg-universidad", yo: "camila",
    escena: "Camila pregunta la fecha del examen.",
    pj: PJ,
    lineas: [
      ["camila", "On est le combien aujourd'hui ?", "¿A cuántos estamos hoy?"],
      ["hugo", "On est le dix octobre.", "Estamos a diez de octubre."],
      ["camila", "Et l'examen ? — L'examen est le mardi 12 juin.", "¿Y el examen? — El examen es el martes 12 de junio."],
      ["hugo", "Et les vacances commencent en juillet !", "¡Y las vacaciones empiezan en julio!"]
    ],
    fijate: "Fíjate: le 12 juin (fecha), en juillet (mes)."
  },
  ensena: [
    { id: "fecha", tipo: "gram", titulo: "Decir la fecha",
      idea: "le + número + mes (en minúscula). El día 1: le premier. Solo mes o año: en.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["le premier janvier", "el 1 de enero", "premier"],
        ["le deux février", "el 2 de febrero", "número"],
        ["Noël, c'est le 25 décembre.", "Navidad es el 25 de diciembre.", "le"],
        ["Mon anniversaire, c'est le premier avril.", "Mi cumpleaños es el 1 de abril.", "premier"],
        ["On est le combien aujourd'hui ?", "¿A cuántos estamos hoy?", "pregunta"],
        ["On est le 14 juillet.", "Estamos a 14 de julio.", "respuesta"],
        ["Les vacances commencent en juillet.", "Las vacaciones empiezan en julio.", "en + mes"],
        ["Je suis né en 2006.", "Nací en 2006.", "en + año"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le un mai", "le premier mai", "El día 1 es premier."], ["Mon anniversaire est le un juin.", "Mon anniversaire est le premier juin.", "premier."]] }
  ],
  ejemplos: [
    { sit: "«El 1 de mayo.»", resp: "le premier mai", pasos: ["Día 1 → premier."], porque: "Excepción." },
    { sit: "«Estamos a 3 de marzo.»", resp: "On est le trois mars.", pasos: ["On est le + número + mes."], porque: "Fecha." },
    { sit: "«Me voy en agosto.»", resp: "Je pars en août.", pasos: ["Solo el mes → en."], porque: "Mes." }
  ],
  comprueba: [
    { q: "El 1 de enero se dice…", o: ["le premier janvier", "le un janvier"], a: 0, b: "fecha", porque: "premier." },
    { q: "«On est le combien ?» pregunta…", o: ["la fecha", "el precio"], a: 0, b: "fecha", porque: "A cuántos." },
    { q: "Con solo un año se usa…", o: ["en", "le"], a: 0, b: "fecha", porque: "en 2006." }
  ],
  practica: [
    { fase: "guiada", c: ["da-forma"], k: "choice", ask: "El 1 de enero.", q: "«___»", o: ["le premier janvier", "le un janvier", "le janvier un"], a: 0, pista: "Día 1.", why: "<b>le premier janvier</b>." },
    { fase: "guiada", c: ["da-forma"], k: "choice", ask: "El 2 de febrero.", q: "«___»", o: ["le deux février", "le février deux", "le premier février"], a: 0, pista: "Número normal.", why: "<b>le deux février</b>." },
    { fase: "guiada", c: ["da-preg"], k: "choice", ask: "«Nací en 2006.»", q: "«Je suis né ___ 2006.»", o: ["en", "le", "à"], a: 0, pista: "Solo el año.", why: "<b>en 2006</b>." },
    { fase: "indep", c: ["da-preg"], k: "choice", ask: "«Las vacaciones empiezan en julio.»", q: "«Les vacances commencent ___ juillet.»", o: ["en", "le", "au"], a: 0, why: "<b>en juillet</b>." },
    { fase: "indep", c: ["da-forma"], k: "fill", ask: "Escribe el artículo.", q: "Noël, c'est ___ 25 décembre.", acc: ["le"], why: "<b>le 25 décembre</b>." },
    { fase: "indep", c: ["da-forma"], k: "spot", ask: "Encuentra el error.", s: "Mon anniversaire est le [un] juin .", fix: "premier", why: "<b>le premier juin</b>." },
    { fase: "aplica", c: ["da-preg"], k: "fill", ask: "Responde la fecha.", q: "— On est le combien aujourd'hui ? — On est ___ 14 juillet.", acc: ["le"], why: "<b>le 14 juillet</b>." },
    { fase: "aplica", c: ["da-forma"], k: "order", ask: "Ordena: «Hoy estamos a lunes 3 de marzo».", tokens: ["Aujourd'hui,", "on est", "lundi", "3 mars."], why: "<b>Aujourd'hui, on est lundi 3 mars.</b>" },
    { fase: "dominio", c: ["da-forma"], k: "fill", ask: "Escribe el mes de la fiesta nacional.", q: "Nous sommes le quatorze ___ , c'est la fête nationale.", acc: ["juillet"], why: "<b>juillet</b>." },
    { fase: "dominio", c: ["da-preg"], k: "choice", ask: "Preguntas qué fecha es hoy.", q: "Tú: «___»", o: ["On est le combien aujourd'hui ?", "C'est combien aujourd'hui ?", "Quelle heure est-il ?"], a: 0, why: "<b>On est le combien…?</b>" },
    { fase: "dominio", c: ["da-forma", "da-preg"], k: "listen", say: "Mon examen de français est le premier juin.", acc: ["Mon examen de français est le premier juin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon examen de français est le premier juin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Noël"], previo: ["nous", "aujourd'hui", "examen", "mardi", "lundi", "vacances", "commencent", "né", "pars", "anniversaire", "fête", "nationale", "sommes", "on", "est", "dix", "trois", "quatorze", "25", "14", "12", "3", "2006"] }
};

E["a1-heure-officielle"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Quelle heure est-il ? L'heure officielle et courante",
  objetivo: {
    que: "Vas a decir la hora de dos maneras: la corriente (y cuarto, y media) y la oficial de 24 horas (trenes, clases).",
    corto: "Hora corriente y hora oficial.",
    podras: ["Decir la hora corriente.", "Decir la hora oficial: dix-huit heures vingt.", "Usar il est, nunca c'est, para la hora."],
    iconos: ["m2d/reloj", "ic2/reloj-arena", "m2d/correr"],
    previos: ["La hora con et quart, et demie (lección 8)."],
    capacidad: "Ahora entiendes los horarios de trenes y de clases."
  },
  requiere: R("gh-hora", "n7-70"), recupera: ["gh-hora"],
  conceptos: {
    "ho2-courante": { n: "Hora corriente: et quart, moins le quart, midi et demi", b: "hora" },
    "ho2-officielle": { n: "Hora oficial: seize heures trente", b: "hora" }
  },
  video: {
    titulo: "Dos maneras de decir la hora", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/reloj", grande: "dix-huit heures vingt", seg: [
        { es: "Hola. En los horarios de trenes y de clases, la hora va de cero a veinticuatro." } ] },
      { v: "dos",
        a: { tag: "corriente", fr: "sept heures et demie", es: "las siete y media" },
        b: { tag: "oficial", fr: "dix-neuf heures trente", es: "las 19:30" },
        seg: [ { es: "Entre amigos:", p: 1 }, { fr: "sept heures et demie", p: 1 }, { es: "En un horario de tren:", p: 2 }, { fr: "dix-neuf heures trente", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Perdone, ¿qué hora es?»", o: ["Quelle heure est-il ?", "C'est quelle heure ?"], a: 0,
        bien: "¡Sí! Con il est.", mal: "La hora se dice con il est: Quelle heure est-il ?",
        seg: [ { es: "Pausa. ¿Il est o c'est?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["et quart", "moins le quart", "midi et demi", "dix-huit heures vingt", "à neuf heures"], seg: [
        { es: "Y mediodía y media se dice midi et demi, sin e.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El tren a París", img: "bg-paris", yo: "camila",
    escena: "Camila consulta el horario del tren.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, il est quelle heure ?", "Disculpe, ¿qué hora es?"],
      ["vendeur", "Il est quatre heures moins le quart.", "Son las cuatro menos cuarto."],
      ["camila", "Et le train pour Paris ?", "¿Y el tren a París?"],
      ["vendeur", "Il part à dix-huit heures vingt.", "Sale a las 18:20."]
    ],
    fijate: "Fíjate: hora corriente para conversar, oficial para el tren."
  },
  ensena: [
    { id: "hora", tipo: "gram", titulo: "Dos maneras",
      idea: "Corriente: et quart, et demie, moins le quart, midi, minuit. Oficial: de 0 a 24 y los minutos tal cual.",
      intro: "Toca cada hora.",
      tabla: [["Francés", "Reloj", "Tipo"], [
        ["Il est dix heures et quart.", "10:15", "corriente"],
        ["Il est cinq heures moins le quart.", "4:45", "corriente"],
        ["Il est midi et demi.", "12:30", "corriente"],
        ["dix-neuf heures trente", "19:30", "oficial"],
        ["Le train part à dix-huit heures vingt.", "18:20", "oficial"],
        ["Il est onze heures vingt.", "11:20", "minutos"],
        ["Le film commence à huit heures et demie.", "8:30", "à + hora"]
      ]],
      ej: [["deux heures et demie", "2:30"], ["six heures et quart", "6:15"], ["neuf heures moins le quart", "8:45"], ["seize heures trente", "16:30"]],
      regla: ["La hora va con il est, nunca con c'est.", "midi et demi (sin e final)."] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est trois heures.", "Il est trois heures.", "La hora va con il est."], ["Excusez-moi, c'est quelle heure ?", "Excusez-moi, il est quelle heure ?", "il est."]] }
  ],
  ejemplos: [
    { sit: "Son las 10:15.", resp: "Il est dix heures et quart.", pasos: ["et quart."], porque: "Corriente." },
    { sit: "El tren sale a las 19:30.", resp: "Le train part à dix-neuf heures trente.", pasos: ["19 + 30."], porque: "Oficial." },
    { sit: "Son las 3:45.", resp: "Il est quatre heures moins le quart.", pasos: ["Las 4 menos cuarto."], porque: "Corriente." }
  ],
  comprueba: [
    { q: "La hora se dice con…", o: ["il est", "c'est"], a: 0, b: "hora", porque: "il est." },
    { q: "«dix-neuf heures trente» es…", o: ["19:30", "9:30"], a: 0, b: "hora", porque: "Oficial." },
    { q: "12:30 en hora corriente:", o: ["midi et demi", "douze heures et demie"], a: 0, b: "hora", porque: "midi." }
  ],
  practica: [
    { fase: "guiada", c: ["ho2-courante"], k: "choice", ask: "10:15", q: "«Il est ___.»", o: ["dix heures et quart", "dix heures moins le quart", "dix heures et demie"], a: 0, pista: "y cuarto.", why: "<b>et quart</b>." },
    { fase: "guiada", c: ["ho2-officielle"], k: "choice", ask: "19:30 (horario de tren)", q: "«___»", o: ["dix-neuf heures trente", "sept heures et demie du soir", "neuf heures trente"], a: 0, pista: "De 0 a 24.", why: "<b>dix-neuf heures trente</b>." },
    { fase: "guiada", c: ["ho2-courante"], k: "match", ask: "Une cada hora.", es: true, q: "Francés → reloj", pairs: [["midi", "12:00"], ["minuit", "00:00"], ["deux heures et demie", "2:30"], ["six heures et quart", "6:15"], ["neuf heures moins le quart", "8:45"]], pista: "moins le quart = menos cuarto.", why: "La hora." },
    { fase: "indep", c: ["ho2-courante"], k: "choice", ask: "4:45", q: "«Il est ___.»", o: ["cinq heures moins le quart", "quatre heures moins le quart", "quatre heures et quart"], a: 0, why: "<b>cinq heures moins le quart</b>." },
    { fase: "indep", c: ["ho2-courante"], k: "fill", ask: "Completa la pregunta.", q: "Quelle heure ___-il ?", acc: ["est"], why: "<b>est-il</b>." },
    { fase: "indep", c: ["ho2-officielle"], k: "choice", es: true, say: "Il est onze heures vingt.", ask: "Escucha. ¿Qué hora es?", q: "Elige.", o: ["11:20", "10:40", "11:12"], a: 0, why: "<b>11:20</b>." },
    { fase: "aplica", c: ["ho2-courante"], k: "spot", ask: "Encuentra el error.", s: "Excusez-moi , [c'est] quelle heure ?", fix: "il est", why: "<b>il est</b>." },
    { fase: "aplica", c: ["ho2-courante"], k: "fill", ask: "Escribe la preposición.", q: "Le cours de français commence ___ neuf heures.", acc: ["à"], why: "<b>à</b>." },
    { fase: "dominio", c: ["ho2-courante"], k: "fill", ask: "Escribe «media» (con midi).", q: "Il est midi et ___ .", acc: ["demi"], why: "<b>midi et demi</b>." },
    { fase: "dominio", c: ["ho2-officielle"], k: "order", ask: "Ordena: «La película empieza a las ocho y media».", tokens: ["Le film", "commence", "à huit heures", "et demie."], why: "<b>Le film commence à huit heures et demie.</b>" },
    { fase: "dominio", c: ["ho2-courante", "ho2-officielle"], k: "listen", say: "Il est midi et demi, on va manger ?", acc: ["Il est midi et demi, on va manger ?", "Il est midi et demi, on va manger?", "Il est midi et demi on va manger ?"], num: false, dict: true, ask: "Escucha y escribe.", why: "Era <b>Il est midi et demi, on va manger ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Paris"], previo: ["excusez-moi", "train", "pour", "part", "film", "commence", "cours", "on", "va", "manger", "du", "soir"] }
};

E["a1-routine"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Ma journée : se lever, se préparer, se coucher",
  objetivo: {
    que: "Vas a contar tu rutina con verbos pronominales: je me lève, tu te douches, il se couche.",
    corto: "Tu día con verbos pronominales.",
    podras: ["Usar me, te, se, nous, vous con el verbo.", "Apostrofar: je m'habille.", "Negar: je ne me lève pas."],
    iconos: ["m2d/dormir", "m2d/reloj", "m2d/correr"],
    previos: ["Je m'appelle (lección 1) y la hora (lección 20)."],
    capacidad: "Ahora puedes contar tu día de la mañana a la noche."
  },
  requiere: R("ho2-courante", "er-term", "er-neg", "mm-partes"), recupera: ["pr-nom", "mm-partes"],
  conceptos: {
    "ro-pron": { n: "je me, tu te, il se, nous nous, vous vous, ils se", b: "pron" },
    "ro-verbos": { n: "se réveiller, se lever, se doucher, s'habiller, se coucher", b: "voc" }
  },
  video: {
    titulo: "Mi rutina", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/dormir", grande: "Je me lève.", seg: [
        { es: "Hola. Como en español, levantarse lleva un pronombre:" }, { fr: "Je me lève à sept heures.", p: 1 } ] },
      { v: "frase", filas: [
          { nota: "yo", p: 1, partes: [["je me lève", "-", 1]] },
          { nota: "tú", p: 2, partes: [["tu te lèves", "-", 2]] },
          { nota: "nosotros", p: 3, partes: [["nous nous levons", "-", 3]] } ], seg: [
        { es: "Yo me levanto,", p: 1 }, { es: "tú te levantas,", p: 2 }, { es: "nosotros nos levantamos.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me levanto a las siete.»", o: ["Je me lève à sept heures.", "Je lève à sept heures."], a: 0,
        bien: "¡Sí! Con me.", mal: "Sin me significa levantar algo. Je me lève.",
        seg: [ { es: "Pausa. ¿Falta algo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je me réveille", "je me lève", "je me douche", "je m'habille", "je me couche"], seg: [
        { es: "Despertarse, levantarse, ducharse, vestirse y acostarse.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi día", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su rutina.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu te lèves à quelle heure ?", "¿A qué hora te levantas?"],
      ["camila", "Je me réveille à six heures et je me lève à six heures et demie.", "Me despierto a las seis y me levanto a las seis y media."],
      ["hugo", "Tu te douches le matin ou le soir ?", "¿Te duchas por la mañana o por la noche?"],
      ["camila", "Le matin. Et le dimanche, je ne me lève pas tôt !", "Por la mañana. ¡Y los domingos no me levanto temprano!"]
    ],
    fijate: "Fíjate: je ne me lève pas: ne antes del pronombre."
  },
  ensena: [
    { id: "pron", tipo: "gram", titulo: "Los verbos pronominales",
      idea: "El pronombre cambia con la persona: je me, tu te, il se, nous nous, vous vous, ils se. Delante de vocal: m', t', s'.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["je me lève", "me levanto", "me"],
        ["tu te lèves", "te levantas", "te"],
        ["elle se lève", "se levanta", "se"],
        ["nous nous levons", "nos levantamos", "nous"],
        ["vous vous levez", "se levantan", "vous"],
        ["ils se lèvent", "se levantan", "se"],
        ["je m'habille", "me visto", "m' + vocal"],
        ["Je ne me lève pas tôt.", "No me levanto temprano.", "ne + pronombre + verbo + pas"]
      ]],
      regla: ["se lever cambia: je me lève (è), nous nous levons (e)."] },
    { id: "voc", tipo: "vocab", titulo: "Tu día",
      idea: "se réveiller (despertarse), se lever (levantarse), se doucher (ducharse), s'habiller (vestirse), se coucher (acostarse).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "se réveiller", ic: "m2d/reloj", es: "despertarse", ej: ["Je me réveille à six heures.", "Me despierto a las seis."] },
        { fr: "se lever", es: "levantarse", ej: ["Je me lève à sept heures.", "Me levanto a las siete."] },
        { fr: "se doucher", es: "ducharse", ej: ["Elle se douche le matin.", "Ella se ducha por la mañana."] },
        { fr: "s'habiller", es: "vestirse", ej: ["Je m'habille vite.", "Me visto rápido."] },
        { fr: "se coucher", ic: "m2d/dormir", es: "acostarse", ej: ["Nous nous couchons tard le samedi.", "Nos acostamos tarde los sábados."] },
        { fr: "se laver", es: "lavarse" },
        { fr: "je prends le petit-déjeuner", es: "desayuno" },
        { fr: "je me couche", es: "me acuesto" },
        { fr: "je dîne", es: "ceno" }
      ] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je lève à sept heures.", "Je me lève à sept heures.", "Sin me: levantar algo."], ["Le dimanche, nous se levons à dix heures.", "Le dimanche, nous nous levons à dix heures.", "nous nous."]] }
  ],
  ejemplos: [
    { sit: "«Me ducho.»", resp: "Je me douche.", pasos: ["je + me + verbo."], porque: "Pronominal." },
    { sit: "«Nos acostamos a las once.»", resp: "Nous nous couchons à onze heures.", pasos: ["nous nous."], porque: "Plural." },
    { sit: "«No me levanto temprano.»", resp: "Je ne me lève pas tôt.", pasos: ["ne antes del pronombre."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Con nous, el pronombre es…", o: ["nous", "se"], a: 0, b: "pron", porque: "nous nous." },
    { q: "«s'habiller» significa…", o: ["vestirse", "hablar"], a: 0, b: "voc", porque: "Vestirse." },
    { q: "En la negación, ne va…", o: ["antes del pronombre", "después del pronombre"], a: 0, b: "pron", porque: "ne me lève pas." }
  ],
  practica: [
    { fase: "guiada", c: ["ro-pron"], k: "choice", ask: "«Nos acostamos a las once.»", q: "«Nous ___ couchons à onze heures.»", o: ["nous", "se", "vous"], a: 0, pista: "nous nous.", why: "<b>nous nous</b>." },
    { fase: "guiada", c: ["ro-verbos"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["se réveiller", "despertarse"], ["se lever", "levantarse"], ["se laver", "lavarse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"]], pista: "coucher = acostar.", why: "Rutina." },
    { fase: "guiada", c: ["ro-pron"], k: "choice", ask: "«Ella se levanta a las siete.»", q: "«Elle ___ à sept heures.»", o: ["se lève", "me lève", "lève"], a: 0, pista: "elle → se.", why: "<b>se lève</b>." },
    { fase: "indep", c: ["ro-pron"], k: "fill", ask: "Escribe el pronombre (tú).", q: "Tu ___ douches le matin ?", acc: ["te"], why: "<b>te</b>." },
    { fase: "indep", c: ["ro-pron"], k: "fill", ask: "Escribe me apostrofado.", q: "Je ___habille vite.", acc: ["m'"], why: "<b>m'habille</b>." },
    { fase: "indep", c: ["ro-verbos"], k: "sort", ask: "¿Mañana o noche?", q: "Clasifica.", cats: ["Por la mañana", "Por la noche"], items: [["je me réveille", 0], ["je prends le petit-déjeuner", 0], ["je me lève", 0], ["je dîne", 1], ["je me couche", 1]], why: "Rutina." },
    { fase: "aplica", c: ["ro-pron"], k: "spot", ask: "Encuentra el error.", s: "Le dimanche , nous [se] levons à dix heures .", fix: "nous", why: "<b>nous nous levons</b>." },
    { fase: "aplica", c: ["ro-pron"], k: "choice", ask: "Los sábados no te levantas temprano.", q: "«Le samedi, je ___.»", o: ["ne me lève pas tôt", "me ne lève pas tôt", "ne lève me pas tôt"], a: 0, why: "<b>ne me lève pas</b>." },
    { fase: "dominio", c: ["ro-verbos"], k: "fill", ask: "Conjuga se lever (tú).", q: "Tu te ___ à quelle heure ?", acc: ["lèves"], why: "<b>lèves</b>." },
    { fase: "dominio", c: ["ro-verbos"], k: "order", ask: "Ordena: «Me visto y desayuno».", tokens: ["Je m'habille", "et", "je prends", "le petit-déjeuner."], why: "<b>Je m'habille et je prends le petit-déjeuner.</b>" },
    { fase: "dominio", c: ["ro-pron", "ro-verbos"], k: "listen", say: "Le matin, je me lève à six heures et demie.", acc: ["Le matin, je me lève à six heures et demie.", "Le matin je me lève à six heures et demie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le matin, je me lève à six heures et demie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tôt", "tard", "vite", "ou", "onze", "dix", "six", "sept", "dimanche", "samedi", "matin", "soir"] }
};

E["a1-frequence"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Toujours, souvent, parfois, jamais",
  objetivo: {
    que: "Vas a decir con qué frecuencia haces algo y dónde va el adverbio.",
    corto: "Siempre, a menudo, a veces, nunca.",
    podras: ["Usar toujours, souvent, parfois, rarement.", "Poner el adverbio después del verbo.", "Usar ne… jamais."],
    iconos: ["ic2/reloj-arena", "m2d/reloj", "ic2/estrella"],
    previos: ["La rutina (lección 21) y ne… pas."],
    capacidad: "Ahora puedes decir con qué frecuencia haces las cosas."
  },
  requiere: R("ro-pron", "er-term", "er-neg", "ir-aller-faire", "fs-faim"), recupera: ["er-neg"],
  conceptos: {
    "fq-escala": { n: "toujours > souvent > parfois > rarement > jamais", b: "gr" },
    "fq-lugar": { n: "Después del verbo; ne… jamais", b: "gr" }
  },
  video: {
    titulo: "La frecuencia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "souvent", seg: [
        { es: "Hola. ¿Con qué frecuencia haces las cosas?" } ] },
      { v: "frase", filas: [
          { nota: "siempre", p: 1, partes: [["toujours", "-", 1]] },
          { nota: "a menudo · a veces", p: 2, partes: [["souvent · parfois", "-", 2]] },
          { nota: "nunca", p: 3, partes: [["ne… jamais", "-", 3]] } ], seg: [
        { es: "Siempre,", p: 1 }, { es: "a menudo y a veces,", p: 2 }, { es: "y nunca, con ne delante del verbo.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nunca bebo café.»", o: ["Je ne bois jamais de café.", "Je jamais bois café."], a: 0,
        bien: "¡Sí! ne… jamais.", mal: "Jamais va después del verbo, con ne delante.",
        seg: [ { es: "Pausa. ¿Dónde va nunca?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["toujours", "souvent", "parfois", "rarement", "ne… jamais", "deux fois par semaine"], seg: [
        { es: "Y para contar veces: dos veces por semana.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Hábitos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comparan sus hábitos.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu vas souvent à la bibliothèque ?", "¿Vas a menudo a la biblioteca?"],
      ["camila", "Oui, tous les jours ! Et je fais du sport deux fois par semaine.", "¡Sí, todos los días! Y hago deporte dos veces por semana."],
      ["hugo", "Moi, je mange parfois à la cafétéria.", "Yo a veces como en la cafetería."],
      ["camila", "Et tu ne regardes jamais la télé ?", "¿Y nunca ves la tele?"]
    ],
    fijate: "Fíjate: vas souvent, mange parfois, ne regardes jamais."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La frecuencia",
      idea: "toujours (siempre), souvent (a menudo), parfois (a veces), rarement (rara vez), ne… jamais (nunca). Van después del verbo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Frecuencia"], [
        ["J'arrive toujours à l'heure.", "Siempre llego a tiempo.", "siempre"],
        ["Je vais souvent au cinéma.", "Voy a menudo al cine.", "a menudo"],
        ["Il travaille souvent le soir.", "Trabaja a menudo por la noche.", "a menudo"],
        ["Je mange parfois à la cafétéria.", "A veces como en la cafetería.", "a veces"],
        ["Je vais au cinéma rarement.", "Voy al cine rara vez.", "rara vez"],
        ["Je ne bois jamais de café.", "Nunca bebo café.", "nunca"],
        ["Il ne fume jamais.", "Nunca fuma.", "nunca"]
      ]],
      ej: [["tous les jours", "todos los días"], ["deux fois par semaine", "dos veces por semana"], ["une fois par an", "una vez al año"], ["d'habitude", "normalmente"], ["presque jamais", "casi nunca"], ["le week-end", "los fines de semana"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je jamais mange de viande.", "Je ne mange jamais de viande.", "ne + verbo + jamais."], ["Il ne travaille toujours le dimanche.", "Il ne travaille jamais le dimanche.", "Con ne va jamais."]] }
  ],
  ejemplos: [
    { sit: "«Voy a menudo a la biblioteca.»", resp: "Je vais souvent à la bibliothèque.", pasos: ["Verbo + souvent."], porque: "Lugar del adverbio." },
    { sit: "«Nunca come carne.»", resp: "Il ne mange jamais de viande.", pasos: ["ne + mange + jamais + de."], porque: "Negación." },
    { sit: "«Hago deporte tres veces por semana.»", resp: "Je fais du sport trois fois par semaine.", pasos: ["fois par semaine."], porque: "Veces." }
  ],
  comprueba: [
    { q: "«parfois» significa…", o: ["a veces", "por fin"], a: 0, b: "gr", porque: "A veces." },
    { q: "El adverbio va…", o: ["después del verbo", "antes del sujeto siempre"], a: 0, b: "gr", porque: "Verbo + adverbio." },
    { q: "Nunca se dice…", o: ["ne… jamais", "jamais solo antes del verbo"], a: 0, b: "gr", porque: "ne… jamais." }
  ],
  practica: [
    { fase: "guiada", c: ["fq-lugar"], k: "choice", ask: "¿Cuál es correcta?", q: "«___»", o: ["Il travaille souvent le soir.", "Il souvent travaille le soir.", "Souvent il travaille ne le soir."], a: 0, pista: "Después del verbo.", why: "<b>travaille souvent</b>." },
    { fase: "guiada", c: ["fq-escala"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["parfois", "a veces"], ["souvent", "a menudo"], ["tous les jours", "todos los días"], ["le week-end", "los fines de semana"], ["deux fois par semaine", "dos veces por semana"]], pista: "souvent = a menudo.", why: "Frecuencia." },
    { fase: "guiada", c: ["fq-lugar"], k: "choice", ask: "«Nunca bebo café.»", q: "«___»", o: ["Je ne bois jamais de café.", "Je jamais bois de café.", "Je ne jamais bois café."], a: 0, pista: "ne + verbo + jamais.", why: "<b>ne bois jamais</b>." },
    { fase: "indep", c: ["fq-escala"], k: "choice", ask: "«Siempre llego a tiempo.»", q: "«J'arrive ___ à l'heure.»", o: ["toujours", "jamais", "parfois"], a: 0, why: "<b>toujours</b>." },
    { fase: "indep", c: ["fq-escala"], k: "fill", ask: "Escribe «rara vez».", q: "Je vais au cinéma ___ , une fois par an.", acc: ["rarement"], why: "<b>rarement</b>." },
    { fase: "indep", c: ["fq-lugar"], k: "fill", ask: "Escribe «nunca».", q: "Il ne fume ___ .", acc: ["jamais"], why: "<b>jamais</b>." },
    { fase: "aplica", c: ["fq-escala"], k: "sort", ask: "¿Mucho o poco?", q: "Clasifica.", cats: ["Mucho", "Poco o nada"], items: [["toujours", 0], ["souvent", 0], ["tous les jours", 0], ["rarement", 1], ["presque jamais", 1], ["une fois par an", 1]], why: "Escala." },
    { fase: "aplica", c: ["fq-lugar"], k: "spot", ask: "Encuentra el error.", s: "Il ne travaille [toujours] le dimanche .", fix: "jamais", why: "<b>ne… jamais</b>." },
    { fase: "dominio", c: ["fq-escala"], k: "fill", ask: "Escribe «a menudo».", q: "Je vais ___ à la piscine, deux fois par semaine.", acc: ["souvent"], why: "<b>souvent</b>." },
    { fase: "dominio", c: ["fq-lugar"], k: "order", ask: "Ordena: «A veces como en la cafetería».", tokens: ["Je mange", "parfois", "à la", "cafétéria."], why: "<b>Je mange parfois à la cafétéria.</b>" },
    { fase: "dominio", c: ["fq-escala", "fq-lugar"], k: "listen", say: "Je fais du sport trois fois par semaine.", acc: ["Je fais du sport trois fois par semaine.", "Je fais du sport 3 fois par semaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je fais du sport trois fois par semaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["bibliothèque", "cafétéria", "piscine", "télé", "regardes", "viande", "bois", "fume", "arrive", "heure", "travaille", "dimanche", "trois", "fois", "par", "semaine", "an", "cinéma"] }
};

E["a1-verbes-ir"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les verbes en -ir : finir, choisir, réussir",
  objetivo: {
    que: "Vas a conjugar los verbos regulares en -ir, que añaden -iss- en plural.",
    corto: "finir: nous finissons.",
    podras: ["Conjugar je finis… ils finissent.", "Reconocer los verbos como finir.", "No confundirlos con partir o dormir."],
    iconos: ["m2d/escribiendo", "ic2/trofeo", "ic2/lapiz"],
    previos: ["Los verbos en -er (lección 4)."],
    capacidad: "Ahora puedes usar finir, choisir, réussir y sus compañeros."
  },
  requiere: R("er-term"), recupera: ["er-term"],
  conceptos: {
    "ir2-conj": { n: "-is, -is, -it, -issons, -issez, -issent", b: "conj" },
    "ir2-grupo": { n: "Como finir o no", b: "conj" }
  },
  video: {
    titulo: "Verbos en -ir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/escribiendo", grande: "nous finissons", seg: [
        { es: "Hola. Los verbos como terminar añaden i, doble ese en plural." } ] },
      { v: "dos",
        a: { tag: "singular", fr: "je finis · tu finis · il finit", es: "suenan igual" },
        b: { tag: "plural", fr: "nous finissons · ils finissent", es: "con -iss-" },
        seg: [ { es: "En singular suenan igual:", p: 1 }, { fr: "je finis, il finit", p: 1 }, { es: "En plural aparece i, doble ese:", p: 2 }, { fr: "nous finissons", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Terminamos.»", o: ["Nous finissons.", "Nous finons."], a: 0,
        bien: "¡Sí! Con -iss-.", mal: "En plural: finissons.",
        seg: [ { es: "Pausa. Terminamos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["finir", "choisir", "réussir", "grandir", "réfléchir", "nous finissons"], seg: [
        { es: "Partir, salir y dormir no van así: son de otro grupo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los deberes", img: "bg-biblioteca", yo: "camila",
    escena: "Camila y Hugo estudian juntos.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu finis tes devoirs ce soir ?", "¿Terminas tus deberes esta noche?"],
      ["camila", "Oui, je finis avant le dîner.", "Sí, termino antes de la cena."],
      ["hugo", "Nous finissons le travail à dix-sept heures.", "Terminamos el trabajo a las diecisiete."],
      ["camila", "Et tu choisis quel menu ? — Je choisis le menu du jour.", "¿Y qué menú eliges? — Elijo el menú del día."]
    ],
    fijate: "Fíjate: je finis, nous finissons."
  },
  ensena: [
    { id: "conj", tipo: "gram", titulo: "Como finir",
      idea: "Singular: -is, -is, -it. Plural: -issons, -issez, -issent.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Terminación"], [
        ["je finis", "termino", "-is"],
        ["tu finis", "terminas", "-is"],
        ["il finit", "termina", "-it"],
        ["nous finissons", "terminamos", "-issons"],
        ["vous finissez", "terminan", "-issez"],
        ["ils finissent", "terminan", "-issent"],
        ["Je choisis le menu du jour.", "Elijo el menú del día.", "choisir"],
        ["Elle choisit une robe rouge.", "Elige un vestido rojo.", "choisir"],
        ["Ils réussissent leur examen.", "Aprueban su examen.", "réussir"],
        ["Vous réfléchissez bien.", "Reflexionan bien.", "réfléchir"],
        ["Les enfants grandissent très vite.", "Los niños crecen muy rápido.", "grandir"],
        ["Ils choisissent un dessert.", "Eligen un postre.", "choisir"]
      ]],
      ej: [["finir", "terminar"], ["choisir", "elegir"], ["réussir", "aprobar, lograr"], ["grandir", "crecer"], ["réfléchir", "reflexionar"], ["remplir", "llenar"], ["partir", "irse (otro grupo)"], ["dormir", "dormir (otro grupo)"], ["sortir", "salir (otro grupo)"], ["venir", "venir (otro grupo)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils réussent", "ils réussissent", "Plural con -iss-."], ["ils réussit", "ils réussissent", "Con ils: -issent."], ["nous finons", "nous finissons", "Plural con -iss-."], ["Les enfants grandent très vite.", "Les enfants grandissent très vite.", "-issent."]] }
  ],
  ejemplos: [
    { sit: "«Terminamos la clase a mediodía.»", resp: "Nous finissons le cours à midi.", pasos: ["fin- + issons."], porque: "Plural." },
    { sit: "«Elige un vestido rojo.»", resp: "Elle choisit une robe rouge.", pasos: ["chois- + it."], porque: "Singular." },
    { sit: "«Aprueban el examen.»", resp: "Ils réussissent leur examen.", pasos: ["réuss- + issent."], porque: "Plural." }
  ],
  comprueba: [
    { q: "«nous finissons» significa…", o: ["terminamos", "fingimos"], a: 0, b: "conj", porque: "finir." },
    { q: "«choisir» significa…", o: ["elegir", "chocar"], a: 0, b: "conj", porque: "Elegir." },
    { q: "¿Cuál NO se conjuga como finir?", o: ["dormir", "réussir"], a: 0, b: "conj", porque: "Otro grupo." }
  ],
  practica: [
    { fase: "guiada", c: ["ir2-conj"], k: "choice", ask: "«Terminamos la clase a mediodía.»", q: "«Nous ___ le cours à midi.»", o: ["finissons", "finons", "finissez"], a: 0, pista: "-issons.", why: "<b>finissons</b>." },
    { fase: "guiada", c: ["ir2-grupo"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["finir", "terminar"], ["choisir", "elegir"], ["réussir", "aprobar"], ["grandir", "crecer"], ["réfléchir", "reflexionar"]], pista: "choisir = elegir.", why: "Verbos en -ir." },
    { fase: "guiada", c: ["ir2-conj"], k: "choice", ask: "«Elige un vestido rojo.»", q: "«Elle ___ une robe rouge.»", o: ["choisit", "choisissent", "choisis"], a: 0, pista: "elle → -it.", why: "<b>choisit</b>." },
    { fase: "indep", c: ["ir2-conj"], k: "fill", ask: "Conjuga finir (tú).", q: "Tu ___ tes devoirs ce soir ?", acc: ["finis"], why: "<b>finis</b>." },
    { fase: "indep", c: ["ir2-conj"], k: "fill", ask: "Conjuga réfléchir (vous).", q: "Vous ___ bien avant de répondre.", acc: ["réfléchissez"], why: "<b>réfléchissez</b>." },
    { fase: "indep", c: ["ir2-grupo"], k: "sort", ask: "¿Como finir o de otro grupo?", q: "Clasifica.", cats: ["Como finir", "Otro grupo"], items: [["choisir", 0], ["réussir", 0], ["grandir", 0], ["partir", 1], ["dormir", 1], ["sortir", 1]], why: "partir, dormir, sortir sin -iss-." },
    { fase: "aplica", c: ["ir2-conj"], k: "spot", ask: "Encuentra el error.", s: "Les enfants [grandent] très vite .", fix: "grandissent", why: "<b>grandissent</b>." },
    { fase: "aplica", c: ["ir2-conj"], k: "choice", ask: "«Aprueban su examen.»", q: "«Ils ___ leur examen.»", o: ["réussissent", "réussent", "réussit"], a: 0, why: "<b>réussissent</b>." },
    { fase: "dominio", c: ["ir2-conj"], k: "fill", ask: "Conjuga choisir (ils).", q: "Ils ___ un dessert.", acc: ["choisissent"], why: "<b>choisissent</b>." },
    { fase: "dominio", c: ["ir2-conj"], k: "order", ask: "Ordena: «Elijo el menú del día».", tokens: ["Je", "choisis", "le menu", "du jour."], why: "<b>Je choisis le menu du jour.</b>" },
    { fase: "dominio", c: ["ir2-conj", "ir2-grupo"], k: "listen", say: "Nous finissons le travail à dix-sept heures.", acc: ["Nous finissons le travail à dix-sept heures.", "Nous finissons le travail à 17 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous finissons le travail à dix-sept heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["devoirs", "tes", "ce", "soir", "avant", "dîner", "travail", "menu", "jour", "quel", "dessert", "enfants", "vite", "examen", "leur", "répondre", "midi", "cours"] }
};

E["a1-verbes-re"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les verbes en -re : prendre, attendre, comprendre",
  objetivo: {
    que: "Vas a conjugar attendre (y vendre, répondre…) y prendre (y apprendre, comprendre).",
    corto: "attendre y prendre.",
    podras: ["Conjugar j'attends… ils attendent.", "Conjugar prendre con su doble n.", "Usar apprendre y comprendre."],
    iconos: ["m2d/reloj", "ic2/libros", "m2d/correr"],
    previos: ["Je prends le bus (Primeros pasos) y los verbos en -er."],
    capacidad: "Ahora puedes decir que esperas, tomas, aprendes y entiendes."
  },
  requiere: R("er-term", "tr-en", "re-comprendre"), recupera: ["tr-en"],
  conceptos: {
    "re2-attendre": { n: "attendre, vendre, répondre", b: "conj" },
    "re2-prendre": { n: "prendre, apprendre, comprendre", b: "conj" }
  },
  video: {
    titulo: "Verbos en -re", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/reloj", grande: "j'attends", seg: [
        { es: "Hola. Dos modelos de verbos en erre e." } ] },
      { v: "dos",
        a: { tag: "esperar", fr: "ils attendent", es: "regular" },
        b: { tag: "tomar", fr: "ils prennent", es: "doble n" },
        seg: [ { es: "Esperar:", p: 1 }, { fr: "j'attends, ils attendent", p: 1 }, { es: "Tomar, con doble ene en plural:", p: 2 }, { fr: "ils prennent", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ellos toman el metro.»", o: ["Ils prennent le métro.", "Ils prendent le métro."], a: 0,
        bien: "¡Sí! Doble n.", mal: "Prendre en plural: ils prennent.",
        seg: [ { es: "Pausa. Ellos toman." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'attends", "il attend", "nous prenons", "ils prennent", "j'apprends", "tu comprends"], seg: [
        { es: "Aprender y entender se conjugan como tomar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la parada", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo esperan el bus.",
    pj: PJ,
    lineas: [
      ["hugo", "Nous attendons le bus depuis dix minutes !", "¡Esperamos el bus desde hace diez minutos!"],
      ["camila", "Je prends le bus tous les matins.", "Tomo el bus todas las mañanas."],
      ["hugo", "Mes amis prennent le train pour Paris.", "Mis amigos toman el tren a París."],
      ["camila", "Tu comprends la question ? — Oui, je comprends.", "¿Entiendes la pregunta? — Sí, entiendo."]
    ],
    fijate: "Fíjate: nous attendons, ils prennent."
  },
  ensena: [
    { id: "conj", tipo: "gram", titulo: "Dos modelos",
      idea: "attendre: -s, -s, —, -ons, -ez, -ent. prendre: prends, prends, prend, prenons, prenez, prennent.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Modelo"], [
        ["j'attends", "espero", "attendre"],
        ["il attend", "espera", "attendre"],
        ["nous attendons", "esperamos", "attendre"],
        ["ils attendent", "esperan", "attendre"],
        ["je prends", "tomo", "prendre"],
        ["il prend", "toma", "prendre"],
        ["nous prenons", "tomamos", "prendre"],
        ["vous prenez", "toman", "prendre"],
        ["ils prennent", "toman", "prendre (doble n)"],
        ["Nous apprenons le français.", "Aprendemos francés.", "apprendre"],
        ["Tu comprends la question ?", "¿Entiendes la pregunta?", "comprendre"],
        ["Vous comprenez le français ?", "¿Entienden francés?", "comprendre"],
        ["Vous répondez au téléphone ?", "¿Contestan el teléfono?", "répondre"]
      ]],
      ej: [["attendre", "esperar"], ["vendre", "vender"], ["répondre", "responder"], ["entendre", "oír"], ["perdre", "perder"], ["descendre", "bajar"], ["apprendre", "aprender"], ["comprendre", "entender"], ["reprendre", "retomar"], ["surprendre", "sorprender"], ["je comprends", "entiendo"], ["Il attend sa sœur devant l'école.", "Espera a su hermana delante de la escuela."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils prenent", "ils prennent", "Doble n."], ["il attende", "il attend", "Sin terminación."], ["il attent", "il attend", "Con d."], ["nous apprendons", "nous apprenons", "Como prendre."], ["nous apprennons", "nous apprenons", "Una sola n con nous."], ["j'apprends", "j'apprends", "apprendre como prendre: aprendo."], ["ils prendent", "ils prennent", "Doble n."], ["Est-ce que tu entends le texte en français ?", "Est-ce que tu comprends le texte en français ?", "Entender = comprendre; entendre = oír."]] }
  ],
  ejemplos: [
    { sit: "«Espero el autobús.»", resp: "J'attends le bus.", pasos: ["attend- + s."], porque: "attendre." },
    { sit: "«Ellos toman el tren.»", resp: "Ils prennent le train.", pasos: ["prennent con doble n."], porque: "prendre." },
    { sit: "«No entiendo la pregunta.»", resp: "Je ne comprends pas la question.", pasos: ["comprendre como prendre."], porque: "Negación." }
  ],
  comprueba: [
    { q: "«ils prennent» lleva…", o: ["doble n", "una n"], a: 0, b: "conj", porque: "prendre." },
    { q: "«entendre» significa…", o: ["oír", "entender"], a: 0, b: "conj", porque: "Falso amigo." },
    { q: "«il attend» termina en…", o: ["d (sin terminación)", "-e"], a: 0, b: "conj", porque: "attendre." }
  ],
  practica: [
    { fase: "guiada", c: ["re2-prendre"], k: "choice", ask: "«Ellos toman el metro.»", q: "«Ils ___ le métro.»", o: ["prennent", "prendent", "prenent"], a: 0, pista: "Doble n.", why: "<b>prennent</b>." },
    { fase: "guiada", c: ["re2-attendre"], k: "choice", ask: "«Espera a su hermana delante de la escuela.»", q: "«Il ___ sa sœur devant l'école.»", o: ["attend", "attende", "attent"], a: 0, pista: "Sin terminación.", why: "<b>attend</b>." },
    { fase: "guiada", c: ["re2-attendre", "re2-prendre"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["attendre", "esperar"], ["vendre", "vender"], ["perdre", "perder"], ["entendre", "oír"], ["descendre", "bajar"]], pista: "entendre = oír.", why: "Verbos en -re." },
    { fase: "indep", c: ["re2-prendre"], k: "choice", ask: "«Aprendemos francés en la universidad.»", q: "«Nous ___ le français à l'université.»", o: ["apprenons", "apprendons", "apprennons"], a: 0, why: "<b>apprenons</b>." },
    { fase: "indep", c: ["re2-prendre"], k: "fill", ask: "Conjuga comprendre (je).", q: "Je ne ___ pas la question.", acc: ["comprends"], why: "<b>comprends</b>." },
    { fase: "indep", c: ["re2-attendre"], k: "fill", ask: "Conjuga répondre (vous).", q: "Vous ___ au téléphone ?", acc: ["répondez"], why: "<b>répondez</b>." },
    { fase: "aplica", c: ["re2-attendre", "re2-prendre"], k: "sort", ask: "¿Como attendre o como prendre?", q: "Clasifica.", cats: ["Como attendre", "Como prendre"], items: [["vendre", 0], ["répondre", 0], ["entendre", 0], ["apprendre", 1], ["comprendre", 1], ["reprendre", 1]], why: "Dos modelos." },
    { fase: "aplica", c: ["re2-prendre"], k: "spot", ask: "Encuentra el error (quieres decir «entender»).", s: "Est-ce que tu [entends] le texte en français ? Oui , je le comprends .", fix: "comprends", why: "<b>comprends</b>." },
    { fase: "dominio", c: ["re2-prendre"], k: "fill", ask: "Conjuga comprendre (vous).", q: "Vous ___ le français ?", acc: ["comprenez"], why: "<b>comprenez</b>." },
    { fase: "dominio", c: ["re2-attendre"], k: "order", ask: "Ordena: «Esperamos el tren en la estación».", tokens: ["Nous attendons", "le train", "à la", "gare."], why: "<b>Nous attendons le train à la gare.</b>" },
    { fase: "dominio", c: ["re2-attendre", "re2-prendre"], k: "listen", say: "Mes amis prennent le train pour Paris.", acc: ["Mes amis prennent le train pour Paris."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes amis prennent le train pour Paris.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: ["depuis", "dix", "minutes", "tous", "matins", "train", "pour", "question", "texte", "téléphone", "université", "gare", "devant", "école", "sa", "le"] }
};

E["a1-pays-nationalites"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Pays et nationalités : je viens du Mexique",
  objetivo: {
    que: "Vas a decir de dónde vienes y dónde vives con en / au / aux y de / du / des, y a formar nacionalidades.",
    corto: "Países y nacionalidades.",
    podras: ["Usar en / au / aux con países.", "Usar de / du / des para el origen.", "Formar nacionalidades en femenino."],
    iconos: ["ic2/mundo", "ic2/bandera", "ic2/torre-eiffel"],
    previos: ["Los países y Je viens de (Primeros pasos)."],
    capacidad: "Ahora puedes hablar de países y nacionalidades sin errores."
  },
  requiere: R("pa-de", "pa-voc", "vi-contr", "ad-especial"), recupera: ["pa-de"],
  conceptos: {
    "pn-prep": { n: "en/au/aux · de/du/des", b: "prep" },
    "pn-nat": { n: "Nacionalidades: colombien(ne), espagnol(e)…", b: "nat" }
  },
  video: {
    titulo: "Países", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "au Mexique", seg: [
        { es: "Hola. La preposición depende del género del país." } ] },
      { v: "frase", filas: [
          { nota: "femenino", p: 1, partes: [["en Colombie · de Colombie", "-", 1]] },
          { nota: "masculino", p: 2, partes: [["au Pérou · du Pérou", "-", 2]] },
          { nota: "plural", p: 3, partes: [["aux États-Unis · des États-Unis", "-", 3]] } ], seg: [
        { es: "Países femeninos:", p: 1 }, { es: "masculinos:", p: 2 }, { es: "y en plural.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vengo de Perú.»", o: ["Je viens du Pérou.", "Je viens de le Pérou."], a: 0,
        bien: "¡Sí! de + le = du.", mal: "de + le se junta: du Pérou.",
        seg: [ { es: "Pausa. Perú es masculino." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en", "au", "aux", "de", "du", "des", "colombienne", "espagnole"], seg: [
        { es: "Y las ciudades, siempre con a: à Bogotá.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Estudiantes del mundo", img: "bg-universidad", yo: "camila",
    escena: "En clase, cada uno dice de dónde viene.",
    pj: PJ,
    lineas: [
      ["camila", "Je viens de Colombie, j'habite à Cúcuta.", "Vengo de Colombia, vivo en Cúcuta."],
      ["hugo", "Mon correspondant vit au Canada.", "Mi amigo por correspondencia vive en Canadá."],
      ["sofia", "Et Carlos ? — Il vient des États-Unis.", "¿Y Carlos? — Viene de Estados Unidos."],
      ["camila", "Ma meilleure amie vient du Chili. Elle est chilienne.", "Mi mejor amiga viene de Chile. Es chilena."]
    ],
    fijate: "Fíjate: de Colombie, du Chili, des États-Unis."
  },
  ensena: [
    { id: "prep", tipo: "gram", titulo: "Preposiciones con países",
      idea: "Femenino: en / de. Masculino: au / du. Plural: aux / des. Ciudades: à / de.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["J'habite en Colombie.", "Vivo en Colombia.", "en + femenino"],
        ["Je viens de Colombie.", "Vengo de Colombia.", "de + femenino"],
        ["J'habite au Brésil.", "Vivo en Brasil.", "au + masculino"],
        ["Nous venons du Pérou.", "Venimos de Perú.", "du + masculino"],
        ["Il habite aux États-Unis.", "Vive en Estados Unidos.", "aux + plural"],
        ["Il vient des États-Unis.", "Viene de Estados Unidos.", "des + plural"],
        ["Nous allons en Italie cet été.", "Vamos a Italia este verano.", "en"],
        ["Ma meilleure amie vient du Chili.", "Mi mejor amiga viene de Chile.", "du"]
      ]],
      ej: [["France", "Francia (fem.)"], ["Espagne", "España (fem.)"], ["Argentine", "Argentina (fem.)"], ["Pérou", "Perú (masc.)"], ["Canada", "Canadá (masc.)"], ["Japon", "Japón (masc.)"], ["Portugal", "Portugal (masc.)"], ["Venezuela", "Venezuela (masc.)"]] },
    { id: "nat", tipo: "gram", titulo: "Nacionalidades",
      idea: "Como los adjetivos: colombien → colombienne, espagnol → espagnole, mexicain → mexicaine; belge no cambia.",
      intro: "Toca cada pareja.",
      tabla: [["Masculino", "Femenino", "País"], [
        ["colombien", "colombienne", "Colombie"],
        ["péruvien", "péruvienne", "Pérou"],
        ["espagnol", "espagnole", "Espagne"],
        ["mexicain", "mexicaine", "Mexique"],
        ["allemand", "allemande", "Allemagne"],
        ["anglais", "anglaise", "Angleterre"],
        ["chinois", "chinoise", "Chine"],
        ["belge", "belge", "Belgique"]
      ]],
      ej: [["colombienne", "colombiana"], ["péruvienne", "peruana"], ["espagnole", "española"], ["brésilienne", "brasileña"], ["chilienne", "chilena"], ["Allemagne", "Alemania"], ["Angleterre", "Inglaterra"], ["Chine", "China"], ["Mexique", "México"], ["Belgique", "Bélgica"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je viens de le Pérou.", "Je viens du Pérou.", "de + le = du."], ["Mon cousin travaille en Canada.", "Mon cousin travaille au Canada.", "Canada es masculino."]] }
  ],
  ejemplos: [
    { sit: "«Vivo en Brasil.»", resp: "J'habite au Brésil.", pasos: ["Brésil masculino → au."], porque: "Masculino." },
    { sit: "«Viene de Estados Unidos.»", resp: "Il vient des États-Unis.", pasos: ["Plural → des."], porque: "Plural." },
    { sit: "«Soy peruana y vivo en Francia.»", resp: "Je suis péruvienne et j'habite en France.", pasos: ["péruvien + ne.", "en France."], porque: "Femenino." }
  ],
  comprueba: [
    { q: "Con un país masculino, «en» se dice…", o: ["au", "en"], a: 0, b: "prep", porque: "au." },
    { q: "«de + les» = …", o: ["des", "du"], a: 0, b: "prep", porque: "Plural." },
    { q: "El femenino de «espagnol» es…", o: ["espagnole", "espagnolle"], a: 0, b: "nat", porque: "+e." }
  ],
  practica: [
    { fase: "guiada", c: ["pn-prep"], k: "choice", ask: "«Vivo en Brasil.»", q: "«J'habite ___ Brésil.»", o: ["au", "en", "à"], a: 0, pista: "Masculino.", why: "<b>au Brésil</b>." },
    { fase: "guiada", c: ["pn-prep"], k: "choice", ask: "«Vamos a Italia este verano.»", q: "«Nous allons ___ Italie cet été.»", o: ["en", "au", "aux"], a: 0, pista: "Femenino.", why: "<b>en Italie</b>." },
    { fase: "guiada", c: ["pn-nat"], k: "match", ask: "Une país y nacionalidad.", q: "País → nacionalidad", pairs: [["Allemagne", "allemand"], ["Angleterre", "anglais"], ["Chine", "chinois"], ["Mexique", "mexicain"], ["Belgique", "belge"]], pista: "Mexique → mexicain.", why: "Nacionalidades." },
    { fase: "indep", c: ["pn-prep"], k: "choice", ask: "«Viene de Estados Unidos.»", q: "«Il vient ___ États-Unis.»", o: ["des", "du", "de"], a: 0, why: "<b>des</b>." },
    { fase: "indep", c: ["pn-prep"], k: "fill", ask: "de + le Venezuela.", q: "Je viens ___ Venezuela.", acc: ["du"], why: "<b>du</b>." },
    { fase: "indep", c: ["pn-nat"], k: "fill", ask: "Femenino de colombien.", q: "Carlos est colombien et Ana est ___ .", acc: ["colombienne"], why: "<b>colombienne</b>." },
    { fase: "aplica", c: ["pn-prep"], k: "sort", ask: "¿en o au?", q: "Clasifica.", cats: ["en", "au"], items: [["France", 0], ["Colombie", 0], ["Espagne", 0], ["Argentine", 0], ["Pérou", 1], ["Canada", 1], ["Japon", 1], ["Portugal", 1]], why: "Femenino: en; masculino: au." },
    { fase: "aplica", c: ["pn-prep"], k: "spot", ask: "Encuentra el error.", s: "Mon cousin travaille [en] Canada .", fix: "au", why: "<b>au Canada</b>." },
    { fase: "dominio", c: ["pn-nat"], k: "fill", ask: "Femenino de espagnol.", q: "Elle est ___ , elle vient d'Espagne.", acc: ["espagnole"], why: "<b>espagnole</b>." },
    { fase: "dominio", c: ["pn-nat", "pn-prep"], k: "order", ask: "Ordena: «Soy peruana y vivo en Francia».", tokens: ["Je suis", "péruvienne", "et j'habite", "en France."], why: "<b>Je suis péruvienne et j'habite en France.</b>" },
    { fase: "dominio", c: ["pn-prep", "pn-nat"], k: "listen", say: "Ma meilleure amie vient du Chili.", acc: ["Ma meilleure amie vient du Chili."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma meilleure amie vient du Chili.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Carlos", "Ana", "Cúcuta", "Bogotá", "Brésil", "Italie", "Chili", "États-Unis"], previo: ["correspondant", "vit", "meilleure", "cousin", "travaille", "cet", "été", "allons", "venons", "d'Espagne"] }
};

E["a1-professions"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les professions au masculin et au féminin",
  objetivo: {
    que: "Vas a decir profesiones en masculino y femenino, y sin artículo después de être.",
    corto: "Las profesiones.",
    podras: ["Decir Elle est médecin (sin artículo).", "Formar -euse, -trice, -ienne, -ière.", "Usar C'est un bon professeur."],
    iconos: ["ic2/birrete", "m2d/laptop", "ic2/libros"],
    previos: ["Los adjetivos y sus femeninos (lección 10)."],
    capacidad: "Ahora puedes decir a qué se dedica cada persona."
  },
  requiere: R("ad-accord", "ad-especial", "vo-presentar", "ir-etre-avoir"), recupera: ["ad-especial"],
  conceptos: {
    "pf-sinart": { n: "Je suis professeur (sin artículo); C'est un…", b: "gr" },
    "pf-fem": { n: "-eur → -euse, -teur → -trice, -ien → -ienne, -ier → -ière", b: "fem" }
  },
  video: {
    titulo: "Las profesiones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "Elle est médecin.", seg: [
        { es: "Hola. Después de ser, la profesión va sin artículo." } ] },
      { v: "dos",
        a: { tag: "être", fr: "Il est cuisinier.", es: "sin un" },
        b: { tag: "c'est", fr: "C'est un bon cuisinier.", es: "con un" },
        seg: [ { es: "Con ser, sin artículo:", p: 1 }, { fr: "Il est cuisinier.", p: 1 }, { es: "Con c'est, con artículo:", p: 2 }, { fr: "C'est un bon cuisinier.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermana es actriz.»", o: ["Ma sœur est actrice.", "Ma sœur est une acteur."], a: 0,
        bien: "¡Sí! -teur → -trice.", mal: "Femenino de acteur: actrice, y sin artículo.",
        seg: [ { es: "Pausa. Femenino de actor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["serveuse", "actrice", "directrice", "infirmière", "informaticienne", "journaliste"], seg: [
        { es: "Algunas no cambian: periodista, arquitecto, médico.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿A qué se dedican?", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus familias.",
    pj: PJ,
    lineas: [
      ["hugo", "Ta mère travaille ?", "¿Tu mamá trabaja?"],
      ["camila", "Oui, ma mère est infirmière. Et mon père est boulanger.", "Sí, mi mamá es enfermera. Y mi papá es panadero."],
      ["hugo", "Ma tante est avocate. C'est une avocate très connue.", "Mi tía es abogada. Es una abogada muy conocida."],
      ["camila", "Plus tard, je voudrais être traductrice.", "Más adelante quisiera ser traductora."]
    ],
    fijate: "Fíjate: est infirmière (sin une), c'est une avocate (con une)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Sin artículo",
      idea: "Il / elle est + profesión, sin artículo. C'est + un / une + profesión (con adjetivo o para presentar).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je suis professeur.", "Soy profesor.", "sin artículo"],
        ["Elle est médecin.", "Es médica.", "sin artículo"],
        ["Ma mère est infirmière.", "Mi mamá es enfermera.", "sin artículo"],
        ["Il est boulanger.", "Es panadero.", "sin artículo"],
        ["C'est un bon cuisinier.", "Es un buen cocinero.", "c'est un"],
        ["C'est une avocate très connue.", "Es una abogada muy conocida.", "c'est une"],
        ["Elle travaille comme avocate.", "Trabaja como abogada.", "comme"]
      ]] },
    { id: "fem", tipo: "gram", titulo: "El femenino",
      idea: "-eur → -euse; -teur → -trice; -ien → -ienne; -ier → -ière; -e no cambia.",
      intro: "Toca cada pareja.",
      tabla: [["Masculino", "Femenino", "Español"], [
        ["serveur", "serveuse", "mesero, mesera"],
        ["vendeur", "vendeuse", "vendedor, vendedora"],
        ["acteur", "actrice", "actor, actriz"],
        ["directeur", "directrice", "director, directora"],
        ["traducteur", "traductrice", "traductor, traductora"],
        ["informaticien", "informaticienne", "informático, informática"],
        ["infirmier", "infirmière", "enfermero, enfermera"],
        ["avocat", "avocate", "abogado, abogada"],
        ["journaliste", "journaliste", "periodista"]
      ]],
      ej: [["serveuse", "mesera"], ["vendeuse", "vendedora"], ["actrice", "actriz"], ["directrice", "directora"], ["traductrice", "traductora"], ["infirmière", "enfermera"], ["musicien", "músico"], ["coiffeur", "peluquero"], ["architecte", "arquitecto"], ["secrétaire", "secretario"], ["dentiste", "dentista"], ["ingénieur", "ingeniero"], ["agriculteur", "agricultor"], ["cuisinier", "cocinero"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une acteuse", "une actrice", "-teur → -trice."], ["une serveure", "une serveuse", "-eur → -euse."], ["une servrice", "une serveuse", "-eur → -euse."], ["une informaticien", "une informaticienne", "-ien → -ienne."], ["Elle est une médecin.", "Elle est médecin.", "Sin artículo con être."], ["Ma tante est vendeur.", "Ma tante est vendeuse.", "Femenino."]] }
  ],
  ejemplos: [
    { sit: "«Es enfermera.»", resp: "Elle est infirmière.", pasos: ["Sin artículo.", "-ier → -ière."], porque: "Profesión." },
    { sit: "«Es un buen cocinero.»", resp: "C'est un bon cuisinier.", pasos: ["Con adjetivo: c'est un."], porque: "c'est." },
    { sit: "«Quisiera ser traductora.»", resp: "Je voudrais être traductrice.", pasos: ["-teur → -trice."], porque: "Femenino." }
  ],
  comprueba: [
    { q: "«Elle est médecin» lleva artículo…", o: ["no", "sí"], a: 0, b: "gr", porque: "Sin artículo." },
    { q: "Femenino de «acteur»:", o: ["actrice", "acteuse"], a: 0, b: "fem", porque: "-trice." },
    { q: "«journaliste» en femenino…", o: ["no cambia", "journalistesse"], a: 0, b: "fem", porque: "Termina en -e." }
  ],
  practica: [
    { fase: "guiada", c: ["pf-fem"], k: "choice", ask: "«Mi hermana es actriz.»", q: "«Ma sœur est ___.»", o: ["actrice", "une actrice", "acteuse"], a: 0, pista: "Sin artículo; -trice.", why: "<b>actrice</b>." },
    { fase: "guiada", c: ["pf-fem"], k: "choice", ask: "un serveur → une…", q: "«une ___»", o: ["serveuse", "serveure", "servrice"], a: 0, pista: "-eur → -euse.", why: "<b>serveuse</b>." },
    { fase: "guiada", c: ["pf-sinart"], k: "choice", ask: "¿Cuál es correcta?", q: "«___»", o: ["C'est un bon cuisinier.", "Il est un bon cuisinier.", "C'est bon cuisinier."], a: 0, pista: "Con adjetivo: c'est un.", why: "<b>C'est un bon cuisinier.</b>" },
    { fase: "indep", c: ["pf-fem"], k: "fill", ask: "Femenino de infirmier.", q: "Paul est infirmier et Julie est ___ .", acc: ["infirmière"], why: "<b>infirmière</b>." },
    { fase: "indep", c: ["pf-fem"], k: "fill", ask: "Femenino de directeur.", q: "Il est directeur et elle est ___ .", acc: ["directrice"], why: "<b>directrice</b>." },
    { fase: "indep", c: ["pf-fem"], k: "sort", ask: "¿Cambia en femenino?", q: "Clasifica.", cats: ["Cambia", "No cambia"], items: [["vendeur", 0], ["musicien", 0], ["avocat", 0], ["coiffeur", 0], ["journaliste", 1], ["architecte", 1], ["secrétaire", 1], ["dentiste", 1]], why: "Los terminados en -e no cambian." },
    { fase: "aplica", c: ["pf-fem"], k: "spot", ask: "Encuentra el error.", s: "Ma tante est [vendeur] dans un magasin de vêtements .", fix: "vendeuse", why: "<b>vendeuse</b>." },
    { fase: "aplica", c: ["pf-sinart"], k: "choice", ask: "«Ella es actriz.»", q: "«___»", o: ["Elle est actrice.", "Elle est une actrice.", "C'est actrice."], a: 0, why: "Sin artículo." },
    { fase: "dominio", c: ["pf-sinart"], k: "match", ask: "Une cada profesión.", q: "Francés → español", pairs: [["avocat", "abogado"], ["ingénieur", "ingeniero"], ["boulanger", "panadero"], ["agriculteur", "agricultor"], ["informaticien", "informático"]], why: "Profesiones." },
    { fase: "dominio", c: ["pf-sinart"], k: "order", ask: "Ordena: «Mi mamá es profesora de inglés».", tokens: ["Ma mère", "est", "professeure", "d'anglais."], why: "<b>Ma mère est professeure d'anglais.</b>" },
    { fase: "dominio", c: ["pf-sinart", "pf-fem"], k: "listen", say: "Plus tard, je voudrais être traductrice.", acc: ["Plus tard, je voudrais être traductrice.", "Plus tard je voudrais être traductrice."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Plus tard, je voudrais être traductrice.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Julie"], previo: ["travaille", "tante", "connue", "plus", "tard", "magasin", "vêtements", "professeure", "d'anglais", "comme", "boulanger", "médecin", "bon"] }
};

E["a1-physique"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Décrire le physique : grand, brun, les yeux bleus",
  objetivo: {
    que: "Vas a describir el físico: être + adjetivo y avoir + ojos o pelo.",
    corto: "Describir a una persona.",
    podras: ["Decir Il est grand et mince.", "Decir Il a les yeux verts / les cheveux longs.", "Concordar: roux → rousse; marron no cambia."],
    iconos: ["m2d/senalar", "ic2/estrella", "m2d/sorpresa"],
    previos: ["El cuerpo (Primeros pasos) y los adjetivos (lección 10)."],
    capacidad: "Ahora puedes describir a cualquier persona."
  },
  requiere: R("co2-cara", "ad-accord", "ad-especial", "ir-etre-avoir"), recupera: ["co2-cara", "ad-accord"],
  conceptos: {
    "ph-etre": { n: "être + grand, mince, brun…", b: "gr" },
    "ph-avoir": { n: "avoir + les yeux / les cheveux", b: "gr" }
  },
  video: {
    titulo: "El físico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Il a les yeux bleus.", seg: [
        { es: "Hola. Para describir a alguien, dos verbos." } ] },
      { v: "dos",
        a: { tag: "être", fr: "Elle est petite et brune.", es: "cómo es" },
        b: { tag: "avoir", fr: "Elle a les cheveux longs.", es: "ojos y pelo" },
        seg: [ { es: "Con ser, el cuerpo:", p: 1 }, { fr: "Elle est petite et brune.", p: 1 }, { es: "Con tener, los ojos y el pelo:", p: 2 }, { fr: "Elle a les cheveux longs.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tiene los ojos azules.»", o: ["Il a les yeux bleus.", "Il est les yeux bleus."], a: 0,
        bien: "¡Sí! Ojos y pelo con avoir.", mal: "Ojos y pelo van con avoir: il a.",
        seg: [ { es: "Pausa. ¿Ser o tener?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["grand", "mince", "brune", "les yeux marron", "les cheveux courts", "des lunettes"], seg: [
        { es: "Marrón no cambia nunca: des yeux marron.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Cómo es?", img: "bg-cafe", yo: "camila",
    escena: "Camila describe a su hermano a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Il est comment, ton frère ?", "¿Cómo es tu hermano?"],
      ["camila", "Mon frère est grand et il a les cheveux noirs.", "Mi hermano es alto y tiene el pelo negro."],
      ["hugo", "Et ta sœur ?", "¿Y tu hermana?"],
      ["camila", "Elle est petite et mince. Elle a les yeux verts.", "Es baja y delgada. Tiene los ojos verdes."]
    ],
    fijate: "Fíjate: est grand, a les cheveux noirs."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Ser y tener",
      idea: "être + adjetivo (il est grand). avoir + les yeux / les cheveux + adjetivo (il a les yeux verts).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["Il est grand et mince.", "Es alto y delgado.", "être"],
        ["Elle est petite, mince et brune.", "Es baja, delgada y morena.", "être"],
        ["Ma cousine est grande.", "Mi prima es alta.", "être"],
        ["Il a les yeux marron.", "Tiene los ojos cafés.", "avoir"],
        ["Elle a les cheveux longs.", "Tiene el pelo largo.", "avoir"],
        ["Elle a les cheveux courts.", "Tiene el pelo corto.", "avoir"],
        ["Il porte des lunettes et une barbe.", "Lleva gafas y barba.", "porter"]
      ]],
      ej: [["mince", "delgado"], ["gros", "gordo"], ["roux", "pelirrojo"], ["rousse", "pelirroja"], ["blonds", "rubios"], ["frisé", "rizado"], ["raide", "liso"], ["chauve", "calvo"], ["les yeux noirs", "los ojos negros"], ["les cheveux frisés", "el pelo rizado"], ["une barbe", "una barba"], ["des lunettes", "unas gafas"], ["brune", "morena"], ["petit", "bajo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des yeux marronne", "des yeux marron", "marron no cambia."], ["Il est les yeux bleus.", "Il a les yeux bleus.", "Ojos con avoir."], ["Ma sœur est les cheveux blonds.", "Ma sœur a les cheveux blonds.", "Pelo con avoir."], ["des yeux marrons", "des yeux marron", "marron no cambia."]] }
  ],
  ejemplos: [
    { sit: "«Es alto y delgado.»", resp: "Il est grand et mince.", pasos: ["être + adjetivos."], porque: "Cuerpo." },
    { sit: "«Tiene los ojos verdes.»", resp: "Elle a les yeux verts.", pasos: ["avoir + les yeux + verts."], porque: "Ojos." },
    { sit: "«Mi tía es pelirroja.»", resp: "Ma tante est rousse.", pasos: ["roux → rousse."], porque: "Femenino especial." }
  ],
  comprueba: [
    { q: "Ojos y pelo van con…", o: ["avoir", "être"], a: 0, b: "gr", porque: "avoir." },
    { q: "«mince» significa…", o: ["delgado", "pequeño"], a: 0, b: "gr", porque: "Delgado." },
    { q: "«marron» en plural…", o: ["no cambia", "marrons"], a: 0, b: "gr", porque: "Invariable." }
  ],
  practica: [
    { fase: "guiada", c: ["ph-avoir"], k: "choice", ask: "«Tiene el pelo largo.»", q: "«Elle ___ les cheveux longs.»", o: ["a", "est", "as"], a: 0, pista: "Pelo: avoir.", why: "<b>a</b>." },
    { fase: "guiada", c: ["ph-etre"], k: "choice", ask: "«Mi prima es alta.»", q: "«Ma cousine est ___.»", o: ["grande", "grand", "grands"], a: 0, pista: "Femenino.", why: "<b>grande</b>." },
    { fase: "guiada", c: ["ph-etre"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["mince", "delgado"], ["gros", "gordo"], ["frisé", "rizado"], ["raide", "liso"], ["chauve", "calvo"]], pista: "raide = liso.", why: "Físico." },
    { fase: "indep", c: ["ph-avoir"], k: "choice", ask: "«Tiene los ojos cafés.»", q: "«Il a les yeux ___.»", o: ["marron", "marrons", "marronne"], a: 0, why: "<b>marron</b>." },
    { fase: "indep", c: ["ph-etre"], k: "fill", ask: "Femenino de roux.", q: "Mon oncle est roux et ma tante est ___ aussi.", acc: ["rousse"], why: "<b>rousse</b>." },
    { fase: "indep", c: ["ph-avoir"], k: "fill", ask: "Conjuga avoir (tú).", q: "Tu ___ les yeux bleus comme ta mère.", acc: ["as"], why: "<b>as</b>." },
    { fase: "aplica", c: ["ph-etre", "ph-avoir"], k: "sort", ask: "¿être o avoir?", q: "Clasifica.", cats: ["être + …", "avoir + …"], items: [["grand", 0], ["mince", 0], ["brune", 0], ["petit", 0], ["les yeux noirs", 1], ["une barbe", 1], ["les cheveux frisés", 1], ["des lunettes", 1]], why: "Ojos, pelo, barba, gafas: avoir." },
    { fase: "aplica", c: ["ph-avoir"], k: "spot", ask: "Encuentra el error.", s: "Ma sœur [est] les cheveux blonds .", fix: "a", why: "<b>a les cheveux</b>." },
    { fase: "dominio", c: ["ph-avoir"], k: "fill", ask: "Escribe «rubios».", q: "Elle a les cheveux ___ .", acc: ["blonds"], why: "<b>blonds</b>." },
    { fase: "dominio", c: ["ph-etre"], k: "order", ask: "Ordena: «Es bajo y tiene los ojos negros».", tokens: ["Il est petit", "et il a", "les yeux", "noirs."], why: "<b>Il est petit et il a les yeux noirs.</b>" },
    { fase: "dominio", c: ["ph-etre", "ph-avoir"], k: "listen", say: "Mon meilleur ami est grand et il a les cheveux courts.", acc: ["Mon meilleur ami est grand et il a les cheveux courts."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon meilleur ami est grand et il a les cheveux courts.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["cheveux", "longs", "noirs", "porte", "comme", "ta", "oncle", "tante", "cousine", "aussi", "meilleur", "comment", "ton", "verts", "bleus", "courts"] }
};

E["a1-caractere"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le caractère : sympa, timide, bavard",
  objetivo: {
    que: "Vas a describir el carácter con adjetivos y sus femeninos.",
    corto: "Cómo es la gente por dentro.",
    podras: ["Usar gentil, drôle, timide, bavard, sérieux…", "Formar femeninos: gentille, paresseuse, travailleuse.", "Distinguir cualidades y defectos."],
    iconos: ["ic2/corazon", "m2d/celebrar", "m2d/enojado"],
    previos: ["Los femeninos especiales (lección 10)."],
    capacidad: "Ahora puedes describir la personalidad de tus amigos."
  },
  requiere: R("ad-accord", "ad-especial", "ph-etre"), recupera: ["ad-especial"],
  conceptos: {
    "ca2-voc": { n: "gentil, drôle, timide, bavard, curieux…", b: "voc" },
    "ca2-fem": { n: "-eux → -euse, -il → -ille, -eur → -euse", b: "voc" }
  },
  video: {
    titulo: "El carácter", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "Il est drôle.", seg: [
        { es: "Hola. Hoy describes cómo es la gente por dentro." } ] },
      { v: "dos",
        a: { tag: "hombre", fr: "Il est gentil.", es: "amable" },
        b: { tag: "mujer", fr: "Elle est gentille.", es: "doble ele y e" },
        seg: [ { es: "Amable:", p: 1 }, { fr: "Il est gentil.", p: 1 }, { es: "En femenino, doble ele y una e:", p: 2 }, { fr: "Elle est gentille.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ella es muy trabajadora.»", o: ["Elle est très travailleuse.", "Elle est très travailleur."], a: 0,
        bien: "¡Sí! -eur → -euse.", mal: "Femenino: travailleuse.",
        seg: [ { es: "Pausa. Ella." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["gentille", "sérieuse", "paresseuse", "sportive", "drôle", "timide", "bavarde"], seg: [
        { es: "Los que terminan en e no cambian: drôle, timide, calme.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La nueva compañera", img: "bg-cafe", yo: "camila",
    escena: "Camila habla de su compañera de piso.",
    pj: PJ,
    lineas: [
      ["hugo", "Elle est comment, ta colocataire ?", "¿Cómo es tu compañera de piso?"],
      ["camila", "Ma colocataire est très gentille et un peu timide.", "Mi compañera es muy amable y un poco tímida."],
      ["hugo", "Mon ami est drôle mais un peu paresseux.", "Mi amigo es gracioso pero un poco perezoso."],
      ["camila", "Et tes professeurs ? — Ils sont patients.", "¿Y tus profesores? — Son pacientes."]
    ],
    fijate: "Fíjate: gentille (femenino), timide (no cambia)."
  },
  ensena: [
    { id: "voc", tipo: "gram", titulo: "Adjetivos de carácter",
      idea: "-eux → -euse (paresseux → paresseuse), -if → -ive, -il → -ille (gentil → gentille), -eur → -euse; los que terminan en -e no cambian.",
      intro: "Toca cada pareja.",
      tabla: [["Masculino", "Femenino", "Español"], [
        ["gentil", "gentille", "amable"],
        ["sérieux", "sérieuse", "serio"],
        ["paresseux", "paresseuse", "perezoso"],
        ["curieux", "curieuse", "curioso"],
        ["généreux", "généreuse", "generoso"],
        ["sportif", "sportive", "deportista"],
        ["travailleur", "travailleuse", "trabajador"],
        ["bavard", "bavarde", "hablador"],
        ["drôle", "drôle", "gracioso"],
        ["timide", "timide", "tímido"]
      ]],
      ej: [["gentille", "amable (mujer)"], ["sérieuse", "seria"], ["paresseuse", "perezosa"], ["curieuses", "curiosas"], ["généreuse", "generosa"], ["sportive", "deportista (mujer)"], ["travailleuse", "trabajadora"], ["bavarde", "habladora"], ["patient", "paciente"], ["impatient", "impaciente"], ["honnête", "honesto"], ["égoïste", "egoísta"], ["menteur", "mentiroso"], ["têtu", "terco"], ["sociable", "sociable"], ["sympathique", "simpático"], ["calme", "tranquilo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["sérieuxe", "sérieuse", "-eux → -euse."], ["sportife", "sportive", "-if → -ive."], ["Elle est très gentil.", "Elle est très gentille.", "Concuerda con la persona."], ["Mes deux sœurs sont très curieux.", "Mes deux sœurs sont très curieuses.", "Femenino plural."]] }
  ],
  ejemplos: [
    { sit: "«Ella es seria.»", resp: "Elle est sérieuse.", pasos: ["-eux → -euse."], porque: "Femenino." },
    { sit: "«Es un poco tímida.»", resp: "Elle est un peu timide.", pasos: ["timide no cambia."], porque: "Termina en e." },
    { sit: "«Mi mejor amiga es graciosa y muy generosa.»", resp: "Ma meilleure amie est drôle et très généreuse.", pasos: ["drôle igual.", "généreuse."], porque: "Concordancia." }
  ],
  comprueba: [
    { q: "Femenino de «gentil»:", o: ["gentille", "gentile"], a: 0, b: "voc", porque: "Doble l." },
    { q: "«bavard» significa…", o: ["hablador", "baboso"], a: 0, b: "voc", porque: "Hablador." },
    { q: "«timide» en femenino…", o: ["no cambia", "timidée"], a: 0, b: "voc", porque: "Termina en e." }
  ],
  practica: [
    { fase: "guiada", c: ["ca2-fem"], k: "choice", ask: "Él es serio; ella es…", q: "«Il est sérieux ; elle est ___.»", o: ["sérieuse", "sérieux", "sérieuxe"], a: 0, pista: "-eux → -euse.", why: "<b>sérieuse</b>." },
    { fase: "guiada", c: ["ca2-fem"], k: "choice", ask: "Él es deportista; ella es…", q: "«Il est sportif ; elle est ___.»", o: ["sportive", "sportife", "sportif"], a: 0, pista: "-if → -ive.", why: "<b>sportive</b>." },
    { fase: "guiada", c: ["ca2-voc"], k: "match", ask: "Une cada adjetivo.", q: "Francés → español", pairs: [["bavard", "hablador"], ["drôle", "gracioso"], ["timide", "tímido"], ["têtu", "terco"], ["curieux", "curioso"]], pista: "drôle = gracioso.", why: "Carácter." },
    { fase: "indep", c: ["ca2-fem"], k: "fill", ask: "Femenino de gentil.", q: "Ma grand-mère est très ___ .", acc: ["gentille"], why: "<b>gentille</b>." },
    { fase: "indep", c: ["ca2-fem"], k: "fill", ask: "Femenino de travailleur.", q: "Julie est ___ , elle travaille beaucoup.", acc: ["travailleuse"], why: "<b>travailleuse</b>." },
    { fase: "indep", c: ["ca2-voc"], k: "choice", ask: "No es tímido, es…", q: "«Il n'est pas timide, il est ___.»", o: ["sociable", "timide", "paresseux"], a: 0, why: "<b>sociable</b>." },
    { fase: "aplica", c: ["ca2-voc"], k: "sort", ask: "¿Cualidad o defecto?", q: "Clasifica.", cats: ["Cualidad", "Defecto"], items: [["généreux", 0], ["patient", 0], ["honnête", 0], ["drôle", 0], ["égoïste", 1], ["paresseux", 1], ["menteur", 1], ["impatient", 1]], why: "Cualidades y defectos." },
    { fase: "aplica", c: ["ca2-fem"], k: "spot", ask: "Encuentra el error.", s: "Mes deux sœurs sont très [curieux] .", fix: "curieuses", why: "<b>curieuses</b>." },
    { fase: "dominio", c: ["ca2-fem"], k: "choice", ask: "«Ella es habladora.»", q: "«___»", o: ["Elle est bavarde.", "Elle est bavard.", "Elle a bavarde."], a: 0, why: "<b>bavarde</b>." },
    { fase: "dominio", c: ["ca2-voc"], k: "order", ask: "Ordena: «Mi profesor es paciente y un poco serio».", tokens: ["Mon professeur", "est patient", "et un peu", "sérieux."], why: "<b>Mon professeur est patient et un peu sérieux.</b>" },
    { fase: "dominio", c: ["ca2-voc", "ca2-fem"], k: "listen", say: "Ma meilleure amie est drôle et très généreuse.", acc: ["Ma meilleure amie est drôle et très généreuse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma meilleure amie est drôle et très généreuse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie"], previo: ["colocataire", "un", "peu", "mais", "tes", "professeurs", "sont", "patients", "beaucoup", "travaille", "meilleure", "grand-mère", "comment", "ta"] }
};

E["a1-cest-il-est"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "C'est ou il est ? Il y a ?",
  objetivo: {
    que: "Vas a elegir entre c'est, il / elle est e il y a.",
    corto: "C'est, il est, il y a.",
    podras: ["Usar c'est + artículo + nombre.", "Usar il / elle est + adjetivo o profesión.", "Usar il y a para lo que existe."],
    iconos: ["m2d/pensativo", "m2d/senalar", "ic2/bombilla"],
    previos: ["Las profesiones (lección 26) y il y a (lección 11)."],
    capacidad: "Ahora eliges bien entre c'est, il est e il y a."
  },
  requiere: R("pf-sinart", "lg-ilya", "vo-presentar"), recupera: ["pf-sinart", "lg-ilya"],
  conceptos: {
    "ci-cest": { n: "c'est / ce sont + artículo + nombre", b: "gr" },
    "ci-ilest": { n: "il est / ils sont + adjetivo o profesión", b: "gr" },
    "ci-ilya": { n: "il y a / il n'y a pas de", b: "gr" }
  },
  video: {
    titulo: "C'est o il est", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "C'est Paul. Il est étudiant.", seg: [
        { es: "Hola. Tres fórmulas que en español a veces son la misma." } ] },
      { v: "frase", filas: [
          { nota: "+ artículo + nombre", p: 1, partes: [["C'est un ami.", "-", 1]] },
          { nota: "+ adjetivo o profesión", p: 2, partes: [["Il est grand. Il est médecin.", "-", 2]] },
          { nota: "lo que existe", p: 3, partes: [["Il y a un parc.", "-", 3]] } ], seg: [
        { es: "Con un nombre y su artículo, c'est.", p: 1 },
        { es: "Con un adjetivo o una profesión, il est.", p: 2 },
        { es: "Para decir que algo existe, il y a.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es un buen amigo.»", o: ["C'est un bon ami.", "Il est un bon ami."], a: 0,
        bien: "¡Sí! Artículo + nombre: c'est.", mal: "Con un + nombre: c'est un bon ami.",
        seg: [ { es: "Pausa. Hay artículo y nombre." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'est", "ce sont", "il est", "ils sont", "il y a"], seg: [
        { es: "En plural: ce sont y ils sont.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El vecino", img: "bg-paris", yo: "camila",
    escena: "Camila presenta a su vecino.",
    pj: PJ,
    lineas: [
      ["camila", "C'est mon voisin, il est italien.", "Es mi vecino, es italiano."],
      ["hugo", "Il y a un parc près d'ici ?", "¿Hay un parque cerca de aquí?"],
      ["camila", "Oui. C'est un bon restaurant aussi. Il est ouvert le dimanche.", "Sí. También es un buen restaurante. Abre el domingo."],
      ["hugo", "Ce sont tes amis ? — Oui, ils sont très sympas.", "¿Son tus amigos? — Sí, son muy simpáticos."]
    ],
    fijate: "Fíjate: c'est mon voisin / il est italien."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las tres fórmulas",
      idea: "c'est + artículo + nombre o nombre propio; il / elle est + adjetivo o profesión sin artículo; il y a = hay.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Fórmula"], [
        ["C'est Paul. Il est étudiant.", "Es Paul. Es estudiante.", "c'est / il est"],
        ["C'est un film génial.", "Es una película genial.", "c'est + un"],
        ["C'est ma cousine, elle est infirmière.", "Es mi prima, es enfermera.", "c'est / elle est"],
        ["Ce sont mes parents.", "Son mis papás.", "ce sont"],
        ["Ils sont sympas.", "Son simpáticos.", "ils sont"],
        ["Il y a trois chambres dans l'appartement.", "Hay tres habitaciones en el apartamento.", "il y a"],
        ["Il y a beaucoup de monde dans le bus.", "Hay mucha gente en el bus.", "il y a"],
        ["Il n'y a pas de café dans la cuisine.", "No hay café en la cocina.", "il n'y a pas de"],
        ["Regarde ce tableau : il est magnifique !", "Mira este cuadro: ¡es magnífico!", "il est + adj."],
        ["C'est une belle journée !", "¡Es un día bonito!", "c'est + une"]
      ]],
      ej: [["c'est", "es (+ nombre)"], ["il est", "es (+ adjetivo)"], ["ce sont", "son (+ nombre)"], ["il y a", "hay"], ["un professeur", "un profesor"], ["professeur", "profesor (sin artículo)"], ["une bonne idée", "una buena idea"], ["en retard", "tarde"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est un bon ami.", "C'est un bon ami.", "Artículo + nombre: c'est."], ["Il n'y a pas du pain.", "Il n'y a pas de pain.", "pas de."]] }
  ],
  ejemplos: [
    { sit: "«Es Paul. Es estudiante.»", resp: "C'est Paul. Il est étudiant.", pasos: ["Nombre propio → c'est.", "Profesión → il est."], porque: "Dos fórmulas." },
    { sit: "«Hay un parque cerca.»", resp: "Il y a un parc près d'ici.", pasos: ["Existencia → il y a."], porque: "Hay." },
    { sit: "«Son mis amigos.»", resp: "Ce sont mes amis.", pasos: ["Plural + nombre → ce sont."], porque: "Plural." }
  ],
  comprueba: [
    { q: "Con artículo + nombre se usa…", o: ["c'est", "il est"], a: 0, b: "gr", porque: "c'est un…" },
    { q: "Con un adjetivo solo se usa…", o: ["il / elle est", "c'est un"], a: 0, b: "gr", porque: "Il est grand." },
    { q: "Hay se dice…", o: ["il y a", "il est"], a: 0, b: "gr", porque: "Existencia." }
  ],
  practica: [
    { fase: "guiada", c: ["ci-cest"], k: "choice", ask: "Esta es Léa: «Es mi vecina».", q: "«Voici Léa. ___ ma voisine.»", o: ["C'est", "Elle est", "Il y a"], a: 0, pista: "ma + nombre.", why: "<b>C'est ma voisine</b>." },
    { fase: "guiada", c: ["ci-ilest"], k: "choice", ask: "Mira este cuadro: ¡es magnífico!", q: "«Regarde ce tableau : ___ magnifique !»", o: ["il est", "c'est un", "il y a"], a: 0, pista: "Adjetivo.", why: "<b>il est</b>." },
    { fase: "guiada", c: ["ci-ilya"], k: "choice", ask: "Hay mucha gente en el bus.", q: "«___ beaucoup de monde dans le bus.»", o: ["Il y a", "C'est", "Il est"], a: 0, pista: "Existencia.", why: "<b>Il y a</b>." },
    { fase: "indep", c: ["ci-cest"], k: "fill", ask: "Son mis papás (ce o ils).", q: "___ sont mes parents.", acc: ["Ce"], why: "<b>Ce sont</b>." },
    { fase: "indep", c: ["ci-ilya"], k: "fill", ask: "Completa la negación.", q: "Il n'y a pas ___ café dans la cuisine.", acc: ["de"], why: "<b>pas de</b>." },
    { fase: "indep", c: ["ci-ilest"], k: "choice", ask: "«Es profesor.»", q: "«___»", o: ["Il est professeur.", "C'est professeur.", "Il est un professeur."], a: 0, why: "<b>Il est professeur.</b>" },
    { fase: "aplica", c: ["ci-cest", "ci-ilest"], k: "sort", ask: "¿C'est… o Il / Elle est…?", q: "Clasifica.", cats: ["C'est…", "Il / Elle est…"], items: [["… un professeur", 0], ["… mon frère", 0], ["… une bonne idée", 0], ["… professeur", 1], ["… colombien", 1], ["… en retard", 1]], why: "Nombre con artículo: c'est." },
    { fase: "aplica", c: ["ci-ilya"], k: "spot", ask: "Encuentra el error.", s: "Il n'y a pas [du] pain dans la cuisine .", fix: "de", why: "<b>pas de</b>." },
    { fase: "dominio", c: ["ci-cest"], k: "fill", ask: "¡Es un día bonito! (c'est o il est)", q: "___ une belle journée !", acc: ["C'est"], why: "<b>C'est une…</b>" },
    { fase: "dominio", c: ["ci-ilya"], k: "order", ask: "Ordena: «Hay un parque cerca de mi casa».", tokens: ["Il y a", "un parc", "près de", "chez moi."], why: "<b>Il y a un parc près de chez moi.</b>" },
    { fase: "dominio", c: ["ci-cest", "ci-ilest"], k: "listen", say: "C'est ma cousine, elle est infirmière à Lyon.", acc: ["C'est ma cousine, elle est infirmière à Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est ma cousine, elle est infirmière à Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Léa", "Lyon"], previo: ["voisin", "voisine", "italien", "parc", "près", "d'ici", "restaurant", "ouvert", "tes", "sympas", "film", "génial", "trois", "appartement", "beaucoup", "monde", "bus", "tableau", "regarde", "magnifique", "belle", "journée", "pain", "chez", "moi", "cousine", "parents", "aussi", "bon"] }
};

/* ================================ A1·7 · Moverse por la ciudad ================================ */

E["a1-transports"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les transports : en bus, à pied, à vélo",
  objetivo: {
    que: "Vas a decir cómo vas a los sitios: en con los transportes cerrados, à con los abiertos.",
    corto: "¿En bus o a pie?",
    podras: ["Usar en bus, en voiture, en avion.", "Usar à pied, à vélo, à moto.", "Preguntar Comment tu vas à la fac ?"],
    iconos: ["m2d/correr", "ic2/mundo", "ic2/moneda"],
    previos: ["Los transportes (Primeros pasos) y prendre (lección 24)."],
    capacidad: "Ahora puedes explicar cómo te mueves."
  },
  requiere: R("tr-voc", "tr-en", "re2-prendre", "ir-aller-faire"), recupera: ["tr-en"],
  conceptos: {
    "tp-en": { n: "en + transporte cerrado", b: "gr" },
    "tp-a": { n: "à + transporte abierto; prendre le…", b: "gr" }
  },
  video: {
    titulo: "Cómo te mueves", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "à pied · en bus", seg: [
        { es: "Hola. ¿Vas dentro del vehículo o encima?" } ] },
      { v: "dos",
        a: { tag: "dentro", fr: "en bus · en train · en avion", es: "en" },
        b: { tag: "encima o sin vehículo", fr: "à pied · à vélo · à moto", es: "à" },
        seg: [ { es: "Si vas dentro, en:", p: 1 }, { fr: "en bus, en avion", p: 1 }, { es: "Si vas encima, o a pie, a:", p: 2 }, { fr: "à pied, à vélo", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a pie.»", o: ["Je vais à pied.", "Je vais en pied."], a: 0,
        bien: "¡Sí! À pied.", mal: "A pie es siempre à pied.",
        seg: [ { es: "Pausa. A pie." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en bus", "en voiture", "en avion", "en taxi", "à pied", "à vélo", "à moto"], seg: [
        { es: "Y con tomar, el artículo: je prends le bus.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Cómo vas a la universidad?", img: "bg-universidad", yo: "camila",
    escena: "Hugo le pregunta a Camila cómo va a clase.",
    pj: PJ,
    lineas: [
      ["hugo", "Comment tu vas à la fac ?", "¿Cómo vas a la universidad?"],
      ["camila", "J'y vais à pied. Et toi ?", "Voy a pie. ¿Y tú?"],
      ["hugo", "Je vais au travail en métro.", "Voy al trabajo en metro."],
      ["camila", "Et en vacances ? — Nous voyageons en train.", "¿Y en vacaciones? — Viajamos en tren."]
    ],
    fijate: "Fíjate: à pied, en métro, en train."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "en o à",
      idea: "en + transporte en el que vas dentro; à + transporte en el que vas encima, o a pie.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je vais au travail en métro.", "Voy al trabajo en metro.", "en"],
        ["Ils partent en vacances en avion.", "Se van de vacaciones en avión.", "en"],
        ["Nous voyageons en train.", "Viajamos en tren.", "en"],
        ["Je vais à l'université à pied.", "Voy a la universidad a pie.", "à"],
        ["Elle rentre à pied.", "Vuelve a pie.", "à"],
        ["Tu prends le métro ou le bus ?", "¿Tomas el metro o el bus?", "prendre + le"],
        ["Comment tu vas à la fac ? — J'y vais en bus.", "¿Cómo vas a la universidad? — Voy en bus.", "pregunta"]
      ]],
      ej: [["en bus", "en bus"], ["en voiture", "en carro"], ["en taxi", "en taxi"], ["en avion", "en avión"], ["à vélo", "en bicicleta"], ["à moto", "en moto"], ["à cheval", "a caballo"], ["le métro", "el metro"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais en pied.", "Je vais à pied.", "A pie: à pied."], ["Je vais en vélo.", "Je vais à vélo.", "Bicicleta: à."], ["Je prends bus.", "Je prends le bus.", "Con prendre, artículo."]] }
  ],
  ejemplos: [
    { sit: "«Voy en carro.»", resp: "Je vais en voiture.", pasos: ["Dentro → en."], porque: "Cerrado." },
    { sit: "«Voy en bicicleta.»", resp: "Je vais à vélo.", pasos: ["Encima → à."], porque: "Abierto." },
    { sit: "«Tomo el bus.»", resp: "Je prends le bus.", pasos: ["prendre + le."], porque: "Tomar." }
  ],
  comprueba: [
    { q: "Con el avión se usa…", o: ["en", "à"], a: 0, b: "gr", porque: "Dentro." },
    { q: "Con la bicicleta se usa…", o: ["à", "en"], a: 0, b: "gr", porque: "Encima." },
    { q: "A pie se dice…", o: ["à pied", "en pied"], a: 0, b: "gr", porque: "Siempre à." }
  ],
  practica: [
    { fase: "guiada", c: ["tp-a"], k: "choice", ask: "«Voy a la universidad a pie.»", q: "«Je vais à l'université ___ pied.»", o: ["à", "en", "au"], a: 0, pista: "Siempre à.", why: "<b>à pied</b>." },
    { fase: "guiada", c: ["tp-en"], k: "choice", ask: "«Se van en avión.»", q: "«Ils partent ___ avion.»", o: ["en", "à", "au"], a: 0, pista: "Dentro.", why: "<b>en avion</b>." },
    { fase: "guiada", c: ["tp-en", "tp-a"], k: "sort", ask: "¿en o à?", q: "Clasifica.", cats: ["en", "à"], items: [["bus", 0], ["voiture", 0], ["train", 0], ["taxi", 0], ["pied", 1], ["vélo", 1], ["moto", 1], ["cheval", 1]], pista: "Dentro: en.", why: "Dentro o encima." },
    { fase: "indep", c: ["tp-en"], k: "fill", ask: "Escribe la preposición.", q: "Je vais au travail ___ métro.", acc: ["en"], why: "<b>en métro</b>." },
    { fase: "indep", c: ["tp-a"], k: "fill", ask: "Escribe la preposición.", q: "Elle va à la fac ___ vélo.", acc: ["à"], why: "<b>à vélo</b>." },
    { fase: "indep", c: ["tp-a"], k: "spot", ask: "Encuentra el error.", s: "Le dimanche , je vais au parc [en] pied .", fix: "à", why: "<b>à pied</b>." },
    { fase: "aplica", c: ["tp-a"], k: "choice", ask: "¿Tomas el metro o el bus?", q: "«Tu prends ___ ou le bus ?»", o: ["le métro", "en métro", "à métro"], a: 0, why: "<b>prendre le métro</b>." },
    { fase: "aplica", c: ["tp-en"], k: "choice", es: true, say: "Nous voyageons en train.", ask: "Escucha. ¿Cómo viajan?", q: "Elige.", o: ["En tren", "En avión", "A pie"], a: 0, why: "<b>en train</b>." },
    { fase: "dominio", c: ["tp-en"], k: "fill", ask: "Escribe la preposición.", q: "Ils partent en vacances ___ voiture.", acc: ["en"], why: "<b>en voiture</b>." },
    { fase: "dominio", c: ["tp-a"], k: "order", ask: "Ordena: «Voy a la universidad a pie».", tokens: ["Je vais", "à l'université", "à", "pied."], why: "<b>Je vais à l'université à pied.</b>" },
    { fase: "dominio", c: ["tp-en", "tp-a"], k: "listen", say: "Je vais au travail en métro.", acc: ["Je vais au travail en métro."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vais au travail en métro.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["fac", "j'y", "vais", "travail", "partent", "vacances", "voyageons", "rentre", "parc", "dimanche", "comment", "université"] }
};

E["a1-chemin"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Demander et indiquer le chemin",
  objetivo: {
    que: "Vas a preguntar el camino y entender las indicaciones: allez tout droit, tournez à gauche, prenez la deuxième rue.",
    corto: "Preguntar y dar indicaciones.",
    podras: ["Preguntar Pour aller à…, s'il vous plaît ?", "Entender tournez, prenez, traversez.", "Situar: au bout de la rue, au coin."],
    iconos: ["m2d/senalar", "ic2/mundo", "ic2/torre-eiffel"],
    previos: ["Las direcciones (Primeros pasos) y la ciudad (lección 7)."],
    capacidad: "Ahora puedes llegar a cualquier lugar preguntando."
  },
  requiere: R("di-lados", "di-dist", "vi-lugar", "li-ou"), recupera: ["di-lados"],
  conceptos: {
    "ch-preg": { n: "Où est… ? Pour aller à… ?", b: "gr" },
    "ch-indic": { n: "Allez, tournez, prenez, traversez", b: "gr" }
  },
  video: {
    titulo: "El camino", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Tournez à gauche.", seg: [
        { es: "Hola. Pregunta el camino y entiende la respuesta." } ] },
      { v: "frase", filas: [
          { nota: "recto", p: 1, partes: [["Allez tout droit.", "-", 1]] },
          { nota: "girar", p: 2, partes: [["Tournez à gauche.", "-", 2]] },
          { nota: "calle", p: 3, partes: [["Prenez la deuxième rue à droite.", "-", 3]] } ], seg: [
        { es: "Siga recto,", p: 1 }, { es: "gire a la izquierda,", p: 2 }, { es: "tome la segunda calle a la derecha.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Gire a la derecha.»", o: ["Tournez à droite.", "Tournez à droit."], a: 0,
        bien: "¡Sí! Derecha lleva e.", mal: "Derecha: à droite, con e.",
        seg: [ { es: "Pausa. Derecha." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Pour aller à…", "Allez tout droit", "Tournez à gauche", "Prenez la première rue", "Traversez la place", "au bout de la rue"], seg: [
        { es: "Recto, girar, tomar, cruzar: todo de usted.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La biblioteca", img: "bg-paris", yo: "camila",
    escena: "Camila busca la biblioteca.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, où est la bibliothèque ?", "Disculpe, ¿dónde está la biblioteca?"],
      ["vendeur", "Continuez tout droit jusqu'au feu.", "Siga todo recto hasta el semáforo."],
      ["vendeur", "Tournez à gauche après la pharmacie. C'est au bout de la rue.", "Gire a la izquierda después de la farmacia. Está al final de la calle."],
      ["camila", "C'est loin ? — Non, c'est à cinq minutes.", "¿Está lejos? — No, está a cinco minutos."]
    ],
    fijate: "Fíjate: las indicaciones van de usted: continuez, tournez."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preguntar e indicar",
      idea: "Preguntar: Où est… ? / Pour aller à…, s'il vous plaît ? Indicar: Allez tout droit, Tournez à gauche, Prenez la première rue, Traversez la place.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Pour aller à la poste, s'il vous plaît ?", "¿Para ir a correos, por favor?", "preguntar"],
        ["Excusez-moi, où est la gare ?", "Perdone, ¿dónde está la estación?", "preguntar"],
        ["Allez tout droit.", "Siga todo recto.", "indicar"],
        ["Continuez tout droit jusqu'au feu.", "Siga recto hasta el semáforo.", "indicar"],
        ["Tournez à droite.", "Gire a la derecha.", "indicar"],
        ["Prenez la première rue à gauche.", "Tome la primera calle a la izquierda.", "indicar"],
        ["C'est la deuxième rue à gauche.", "Es la segunda calle a la izquierda.", "indicar"],
        ["Traversez la place.", "Cruce la plaza.", "indicar"],
        ["C'est au bout de la rue.", "Está al final de la calle.", "situar"],
        ["C'est au coin.", "Está en la esquina.", "situar"],
        ["C'est à cinq minutes.", "Está a cinco minutos.", "situar"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tournez à droit.", "Tournez à droite.", "Derecha = droite."], ["Allez tout droite.", "Allez tout droit.", "Recto = droit."]] }
  ],
  ejemplos: [
    { sit: "Preguntas cómo ir a correos.", resp: "Pour aller à la poste, s'il vous plaît ?", pasos: ["Pour aller à + lugar."], porque: "Preguntar." },
    { sit: "«Tome la primera calle a la izquierda.»", resp: "Prenez la première rue à gauche.", pasos: ["Prenez + calle."], porque: "Indicar." },
    { sit: "«Está al final de la calle.»", resp: "C'est au bout de la rue.", pasos: ["au bout de."], porque: "Situar." }
  ],
  comprueba: [
    { q: "«Traversez la place» significa…", o: ["Cruce la plaza.", "Rodee la plaza."], a: 0, b: "gr", porque: "Cruzar." },
    { q: "«au bout de la rue» es…", o: ["al final de la calle", "al principio de la calle"], a: 0, b: "gr", porque: "Al final." },
    { q: "«le feu» en la calle es…", o: ["el semáforo", "el fuego"], a: 0, b: "gr", porque: "Semáforo." }
  ],
  practica: [
    { fase: "guiada", c: ["ch-preg"], k: "choice", ask: "Preguntas por la estación.", q: "Tú: «___»", o: ["Excusez-moi, où est la gare ?", "Où la gare est ?", "La gare, c'est quoi ?"], a: 0, pista: "Où est…", why: "<b>Où est la gare ?</b>" },
    { fase: "guiada", c: ["ch-indic"], k: "match", ask: "Une cada indicación.", q: "Francés → español", pairs: [["Allez tout droit.", "Siga todo recto."], ["Tournez à gauche.", "Gire a la izquierda."], ["Traversez la place.", "Cruce la plaza."], ["C'est au coin.", "Está en la esquina."]], pista: "tournez = gire.", why: "Indicaciones." },
    { fase: "guiada", c: ["ch-indic"], k: "choice", ask: "«Gire a la derecha.»", q: "«Tournez à ___.»", o: ["droite", "droit"], a: 0, pista: "Con e.", why: "<b>à droite</b>." },
    { fase: "indep", c: ["ch-indic"], k: "choice", es: true, say: "Prenez la deuxième rue à gauche.", ask: "Escucha. ¿Qué calle?", q: "Elige.", o: ["La segunda a la izquierda", "La segunda a la derecha", "La primera a la izquierda"], a: 0, why: "<b>deuxième</b> a la <b>gauche</b>." },
    { fase: "indep", c: ["ch-preg"], k: "fill", ask: "Completa.", q: "Pour ___ à la poste, s'il vous plaît ?", acc: ["aller"], why: "<b>Pour aller à…</b>" },
    { fase: "indep", c: ["ch-indic"], k: "spot", ask: "Encuentra el error.", s: "Tournez à [droit] après la banque .", fix: "droite", why: "<b>à droite</b>." },
    { fase: "aplica", c: ["ch-indic"], k: "choice", es: true, say: "Continuez tout droit jusqu'au feu.", ask: "Escucha. ¿Hasta dónde sigues recto?", q: "Elige.", o: ["Hasta el semáforo", "Hasta el fuego", "Hasta la plaza"], a: 0, why: "<b>le feu</b> = el semáforo." },
    { fase: "aplica", c: ["ch-indic"], k: "order", ask: "Ordena: «Gire a la izquierda después de la farmacia».", tokens: ["Tournez", "à gauche", "après", "la pharmacie."], why: "<b>Tournez à gauche après la pharmacie.</b>" },
    { fase: "dominio", c: ["ch-indic"], k: "fill", ask: "Escribe «final» (al final de la calle).", q: "C'est au ___ de la rue.", acc: ["bout"], why: "<b>au bout</b>." },
    { fase: "dominio", c: ["ch-preg"], k: "choice", ask: "«¿Está lejos?»", q: "«___»", o: ["C'est loin ?", "C'est au coin ?"], a: 0, why: "<b>C'est loin ?</b>" },
    { fase: "dominio", c: ["ch-preg", "ch-indic"], k: "listen", say: "Allez tout droit et tournez à droite.", acc: ["Allez tout droit et tournez à droite."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Allez tout droit et tournez à droite.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["bibliothèque", "continuez", "jusqu'au", "feu", "après", "pharmacie", "cinq", "minutes", "poste", "banque", "première", "deuxième", "place"] }
};

E["a1-prepositions-lieu"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Sur, sous, devant, derrière, à côté de",
  objetivo: {
    que: "Vas a situar cosas con todas las preposiciones de lugar y sus contracciones.",
    corto: "¿Dónde está?",
    podras: ["Usar sur, sous, devant, derrière, dans, entre.", "Usar à côté de, en face de, près de, loin de.", "Contraer: à côté du, près des."],
    iconos: ["m2d/senalar", "ic2/cofre", "ic2/bombilla"],
    previos: ["Los muebles (lección 11) y la ciudad (lección 7)."],
    capacidad: "Ahora puedes decir exactamente dónde está cualquier cosa."
  },
  requiere: R("lg-prep", "vi-lugar", "vi-contr", "ob-voc"), recupera: ["lg-prep", "vi-lugar"],
  conceptos: {
    "pl-sans": { n: "sur, sous, devant, derrière, dans, entre", b: "gr" },
    "pl-de": { n: "à côté de, en face de, près de, loin de (du, des)", b: "gr" }
  },
  video: {
    titulo: "Dónde está", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "sur · sous", seg: [
        { es: "Hola. Cuidado con estas dos: solo cambia una vocal." } ] },
      { v: "dos",
        a: { tag: "encima", fr: "Le livre est sur le lit.", es: "sobre" },
        b: { tag: "debajo", fr: "Le chat est sous la table.", es: "debajo" },
        seg: [ { es: "Sobre:", p: 1 }, { fr: "sur le lit", p: 1 }, { es: "Debajo:", p: 2 }, { fr: "sous la table", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«cerca del centro»", o: ["près du centre", "près de le centre"], a: 0,
        bien: "¡Sí! de + le = du.", mal: "de + le se contrae: près du centre.",
        seg: [ { es: "Pausa. De más le." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sur", "sous", "devant", "derrière", "dans", "entre", "à côté de", "en face de", "près de", "loin de"], seg: [
        { es: "Las que terminan en de se contraen.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Dónde está mi teléfono?", img: "bg-cafe", yo: "camila",
    escena: "Camila busca su teléfono en casa.",
    pj: PJ,
    lineas: [
      ["camila", "Où est mon portable ? Sur la table ?", "¿Dónde está mi celular? ¿Sobre la mesa?"],
      ["hugo", "Non, il est sous le livre, à côté du lit.", "No, está debajo del libro, al lado de la cama."],
      ["camila", "Et mes clés ? — Dans ton sac.", "¿Y mis llaves? — En tu bolso."],
      ["hugo", "J'habite près du centre, en face de la banque.", "Vivo cerca del centro, frente al banco."]
    ],
    fijate: "Fíjate: à côté du lit, près du centre."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preposiciones de lugar",
      idea: "Sin de: sur, sous, devant, derrière, dans, entre. Con de (y contracción): à côté de, en face de, près de, loin de.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Preposición"], [
        ["Le livre est sur le lit.", "El libro está sobre la cama.", "sur"],
        ["Le chat est sous la table.", "El gato está debajo de la mesa.", "sous"],
        ["Les clés sont dans ton sac.", "Las llaves están en tu bolso.", "dans"],
        ["La lampe est entre le lit et la fenêtre.", "La lámpara está entre la cama y la ventana.", "entre"],
        ["La banque est à côté de la poste.", "El banco está al lado de correos.", "à côté de"],
        ["La banque est en face de la mairie.", "El banco está enfrente de la alcaldía.", "en face de"],
        ["J'habite près du centre.", "Vivo cerca del centro.", "près de + le"],
        ["à côté du cinéma", "al lado del cine", "de + le = du"],
        ["près des arbres", "cerca de los árboles", "de + les = des"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["à côté de le lit", "à côté du lit", "de + le = du."], ["près de les magasins", "près des magasins", "de + les = des."]] }
  ],
  ejemplos: [
    { sit: "«El gato está debajo de la mesa.»", resp: "Le chat est sous la table.", pasos: ["sous = debajo."], porque: "Sin de." },
    { sit: "«al lado del cine»", resp: "à côté du cinéma", pasos: ["de + le = du."], porque: "Contracción." },
    { sit: "«cerca de las tiendas»", resp: "près des magasins", pasos: ["de + les = des."], porque: "Plural." }
  ],
  comprueba: [
    { q: "«sous» significa…", o: ["debajo de", "sobre"], a: 0, b: "gr", porque: "sous ≠ sur." },
    { q: "«en face de» significa…", o: ["enfrente de", "al lado de"], a: 0, b: "gr", porque: "Frente." },
    { q: "de + les = …", o: ["des", "du"], a: 0, b: "gr", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["pl-sans"], k: "choice", ask: "«El gato está debajo de la mesa.»", q: "«Le chat est ___ la table.»", o: ["sous", "sur", "dans"], a: 0, pista: "Debajo.", why: "<b>sous</b>." },
    { fase: "guiada", c: ["pl-de"], k: "choice", ask: "«Vivo cerca del centro.»", q: "«J'habite ___ centre.»", o: ["près du", "près de le", "près des"], a: 0, pista: "de + le.", why: "<b>près du</b>." },
    { fase: "guiada", c: ["pl-sans", "pl-de"], k: "match", ask: "Une cada preposición.", q: "Francés → español", pairs: [["sur", "sobre"], ["sous", "debajo de"], ["dans", "dentro de"], ["entre", "entre"], ["en face de", "enfrente de"]], pista: "sur ≠ sous.", why: "Lugar." },
    { fase: "indep", c: ["pl-sans"], k: "fill", ask: "Escribe «sobre».", q: "Le livre est ___ le lit.", acc: ["sur"], why: "<b>sur</b>." },
    { fase: "indep", c: ["pl-de"], k: "fill", ask: "Escribe de + le.", q: "La lampe est à côté ___ lit.", acc: ["du"], why: "<b>du</b>." },
    { fase: "indep", c: ["pl-de"], k: "spot", ask: "Encuentra el error.", s: "J'habite près [de les] magasins .", fix: "des", why: "<b>des</b>." },
    { fase: "aplica", c: ["pl-de"], k: "choice", ask: "«El banco está enfrente de la alcaldía.»", q: "«La banque est ___ la mairie.»", o: ["en face de", "sous", "dans"], a: 0, why: "<b>en face de</b>." },
    { fase: "aplica", c: ["pl-sans"], k: "order", ask: "Ordena: «Las llaves están en tu bolso».", tokens: ["Les clés", "sont", "dans", "ton sac."], why: "<b>Les clés sont dans ton sac.</b>" },
    { fase: "dominio", c: ["pl-sans"], k: "choice", ask: "«La lámpara está entre la cama y la ventana.»", q: "«La lampe est ___ le lit et la fenêtre.»", o: ["entre", "devant", "sur"], a: 0, why: "<b>entre</b>." },
    { fase: "dominio", c: ["pl-de"], k: "fill", ask: "Escribe de + les.", q: "Le parc est près ___ arbres.", acc: ["des"], why: "<b>des</b>." },
    { fase: "dominio", c: ["pl-sans", "pl-de"], k: "listen", say: "La banque est à côté de la poste.", acc: ["La banque est à côté de la poste."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La banque est à côté de la poste.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["portable", "clés", "ton", "sac", "centre", "arbres", "magasins", "mairie", "poste", "banque", "cinéma", "lampe", "parc"] }
};

E["a1-au-du"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "À et de avec l'article : au, aux, du, des",
  objetivo: {
    que: "Vas a dominar las contracciones de à y de con el artículo, para ir a un sitio y venir de un sitio.",
    corto: "au, aux, du, des.",
    podras: ["Ir: au marché, aux toilettes.", "Venir: du bureau, des cours.", "Saber que à la, à l', de la, de l' no cambian."],
    iconos: ["m2d/correr", "ic2/mundo", "m2d/senalar"],
    previos: ["Las contracciones en la ciudad (lección 7)."],
    capacidad: "Ahora no fallas al decir adónde vas y de dónde vienes."
  },
  requiere: R("vi-contr", "ir-aller-faire", "pa-de"), recupera: ["vi-contr"],
  conceptos: {
    "ad-a": { n: "à + le = au; à + les = aux", b: "gr" },
    "ad-de": { n: "de + le = du; de + les = des", b: "gr" }
  },
  video: {
    titulo: "au, aux, du, des", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "au marché · du bureau", seg: [
        { es: "Hola. Ir a y venir de: con le y les se juntan." } ] },
      { v: "dos",
        a: { tag: "ir a", fr: "Je vais au marché.", es: "à + le = au" },
        b: { tag: "venir de", fr: "Elle revient du bureau.", es: "de + le = du" },
        seg: [ { es: "Voy al mercado:", p: 1 }, { fr: "Je vais au marché.", p: 1 }, { es: "Vuelve de la oficina:", p: 2 }, { fr: "Elle revient du bureau.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Hablo a los estudiantes.»", o: ["Je parle aux étudiants.", "Je parle à les étudiants."], a: 0,
        bien: "¡Sí! à + les = aux.", mal: "à + les se junta: aux.",
        seg: [ { es: "Pausa. A los." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au", "aux", "du", "des", "à la", "de l'"], seg: [
        { es: "Con la y l' no cambia nada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Esta noche", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hacen planes.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce soir, on va au restaurant ?", "¿Esta noche vamos al restaurante?"],
      ["camila", "D'accord ! Je rentre de l'université à six heures.", "¡De acuerdo! Vuelvo de la universidad a las seis."],
      ["hugo", "Moi, je reviens du bureau à sept heures.", "Yo vuelvo de la oficina a las siete."],
      ["camila", "Et après, on va aux toilettes… non, au cinéma !", "Y después vamos al baño… ¡no, al cine!"]
    ],
    fijate: "Fíjate: au restaurant, de l'université, du bureau."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las contracciones",
      idea: "à + le = au, à + les = aux, de + le = du, de + les = des. Con la y l' no cambian.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je vais au marché.", "Voy al mercado.", "à + le = au"],
        ["Tu vas aux toilettes ?", "¿Vas al baño?", "à + les = aux"],
        ["Je parle aux étudiants.", "Hablo a los estudiantes.", "à + les = aux"],
        ["Nous allons à la plage.", "Vamos a la playa.", "à la"],
        ["Il va à l'école.", "Va a la escuela.", "à l'"],
        ["Elle revient du bureau.", "Vuelve de la oficina.", "de + le = du"],
        ["Il sort des cours à midi.", "Sale de clases a mediodía.", "de + les = des"],
        ["Elle rentre de l'université à six heures.", "Vuelve de la universidad a las seis.", "de l'"],
        ["Je viens de la gare.", "Vengo de la estación.", "de la"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais à le cinéma.", "Je vais au cinéma.", "à + le = au."], ["Je viens de le bureau.", "Je viens du bureau.", "de + le = du."], ["Je parle à les enfants.", "Je parle aux enfants.", "à + les = aux."]] }
  ],
  ejemplos: [
    { sit: "«Vamos al restaurante.»", resp: "On va au restaurant.", pasos: ["à + le = au."], porque: "Masculino." },
    { sit: "«Vuelve de la oficina.»", resp: "Elle revient du bureau.", pasos: ["de + le = du."], porque: "Masculino." },
    { sit: "«Hablamos con los niños.»", resp: "Nous parlons aux enfants.", pasos: ["à + les = aux."], porque: "Plural." }
  ],
  comprueba: [
    { q: "à + les = …", o: ["aux", "au"], a: 0, b: "gr", porque: "Plural." },
    { q: "de + le = …", o: ["du", "de le"], a: 0, b: "gr", porque: "Contracción." },
    { q: "à + la …", o: ["no cambia", "se vuelve au"], a: 0, b: "gr", porque: "Solo le y les." }
  ],
  practica: [
    { fase: "guiada", c: ["ad-a"], k: "choice", ask: "«Voy al mercado.»", q: "«Je vais ___ marché.»", o: ["au", "à le", "du"], a: 0, pista: "à + le.", why: "<b>au</b>." },
    { fase: "guiada", c: ["ad-de"], k: "choice", ask: "«Vuelve de la oficina.»", q: "«Elle revient ___ bureau.»", o: ["du", "de le", "au"], a: 0, pista: "de + le.", why: "<b>du</b>." },
    { fase: "guiada", c: ["ad-a", "ad-de"], k: "match", ask: "Une cada contracción.", q: "Suma → forma", pairs: [["à + le", "au"], ["à + les", "aux"], ["de + le", "du"], ["de + les", "des"]], pista: "Solo con le y les.", why: "Contracciones." },
    { fase: "indep", c: ["ad-a"], k: "fill", ask: "Escribe à + les.", q: "Je parle ___ étudiants.", acc: ["aux"], why: "<b>aux</b>." },
    { fase: "indep", c: ["ad-de"], k: "fill", ask: "Escribe de + les.", q: "Il sort ___ cours à midi.", acc: ["des"], why: "<b>des</b>." },
    { fase: "indep", c: ["ad-a"], k: "spot", ask: "Encuentra el error.", s: "Ce soir , je vais [à le] cinéma .", fix: "au", why: "<b>au</b>." },
    { fase: "aplica", c: ["ad-a", "ad-de"], k: "sort", ask: "¿Cambia o no?", q: "Clasifica.", cats: ["Se contrae", "No cambia"], items: [["à + le marché", 0], ["de + les cours", 0], ["à + les toilettes", 0], ["à + la plage", 1], ["de + l'université", 1], ["de + la gare", 1]], why: "Solo le y les." },
    { fase: "aplica", c: ["ad-de"], k: "choice", ask: "«Vuelvo de la universidad a las seis.»", q: "«Je rentre ___ université à six heures.»", o: ["de l'", "du", "des"], a: 0, why: "<b>de l'</b>." },
    { fase: "dominio", c: ["ad-a"], k: "fill", ask: "Escribe à + le.", q: "On va ___ restaurant ce soir ?", acc: ["au"], why: "<b>au</b>." },
    { fase: "dominio", c: ["ad-de"], k: "spot", ask: "Encuentra el error.", s: "Je viens [de le] bureau .", fix: "du", why: "<b>du</b>." },
    { fase: "dominio", c: ["ad-a", "ad-de"], k: "listen", say: "Elle rentre de l'université à six heures.", acc: ["Elle rentre de l'université à six heures.", "Elle rentre de l'université à 6 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle rentre de l'université à six heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["restaurant", "rentre", "reviens", "revient", "bureau", "toilettes", "cinéma", "après", "étudiants", "sort", "cours", "midi", "enfants", "parlons", "plage", "école", "gare", "marché", "d'accord", "on", "va"] }
};

E["a1-lieux-ville"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les lieux de la ville",
  objetivo: {
    que: "Vas a nombrar los lugares de la ciudad con su género y describir tu barrio.",
    corto: "Tu barrio.",
    podras: ["Nombrar mairie, musée, stade, bibliothèque, église…", "Decir Dans mon quartier, il y a…", "No confundir librairie y bibliothèque."],
    iconos: ["ic2/torre-eiffel", "ic2/mundo", "ic2/libros"],
    previos: ["Los lugares (Primeros pasos) e il y a (lección 11)."],
    capacidad: "Ahora puedes describir tu barrio y tu ciudad."
  },
  requiere: R("li-voc", "mg2-voc", "lg-ilya"), recupera: ["li-voc"],
  conceptos: {
    "lv-masc": { n: "le marché, le musée, le stade, l'hôpital…", b: "voc" },
    "lv-fem": { n: "la mairie, la poste, la bibliothèque, l'église…", b: "voc" }
  },
  video: {
    titulo: "La ciudad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "Dans mon quartier, il y a…", seg: [
        { es: "Hola. ¿Qué hay en tu barrio?" } ] },
      { v: "dos",
        a: { tag: "se compran libros", fr: "la librairie", es: "librería" },
        b: { tag: "se estudia", fr: "la bibliothèque", es: "biblioteca" },
        seg: [ { es: "Donde se compran libros:", p: 1 }, { fr: "la librairie", p: 1 }, { es: "Donde se estudia:", p: 2 }, { fr: "la bibliothèque", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la alcaldía»", o: ["la mairie", "le marché"], a: 0,
        bien: "¡Sí! La mairie.", mal: "Le marché es el mercado. La alcaldía: la mairie.",
        seg: [ { es: "Pausa. ¿Cómo se dice la alcaldía?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la mairie", "le musée", "le stade", "la bibliothèque", "l'église", "le quartier"], seg: [
        { es: "Alcaldía, museo, estadio, biblioteca, iglesia y barrio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi barrio", img: "bg-paris", yo: "camila",
    escena: "Camila describe su barrio a su familia.",
    pj: PJ,
    lineas: [
      ["camila", "Dans mon quartier, il y a un grand parc.", "En mi barrio hay un gran parque."],
      ["hugo", "Et la mairie ?", "¿Y la alcaldía?"],
      ["camila", "La mairie est sur la place principale. Le musée est fermé le lundi.", "La alcaldía está en la plaza principal. El museo cierra los lunes."],
      ["hugo", "Il n'y a pas de stade ? — Non, mais il y a une bibliothèque !", "¿No hay estadio? — No, ¡pero hay una biblioteca!"]
    ],
    fijate: "Fíjate: il y a un grand parc / il n'y a pas de stade."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Lugares",
      idea: "Masculinos: le marché, le musée, le parc, le stade, l'hôpital, le commissariat. Femeninos: la mairie, la gare, la poste, la bibliothèque, l'église.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "la mairie", es: "la alcaldía", ej: ["La mairie est sur la place.", "La alcaldía está en la plaza."] },
        { fr: "le musée", es: "el museo", ej: ["Le musée est fermé le lundi.", "El museo cierra los lunes."] },
        { fr: "le stade", ic: "ic2/trofeo", es: "el estadio" },
        { fr: "le commissariat", es: "la comisaría" },
        { fr: "la poste", es: "correos" },
        { fr: "la bibliothèque", ic: "ic2/libros", es: "la biblioteca" },
        { fr: "la librairie", es: "la librería" },
        { fr: "l'église", es: "la iglesia" },
        { fr: "le quartier", es: "el barrio", ej: ["Dans mon quartier, il y a un grand parc.", "En mi barrio hay un gran parque."] },
        { fr: "la place", es: "la plaza" }
      ],
      clave: "librairie = se compran libros; bibliothèque = se estudia." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais à la librairie pour étudier.", "Je vais à la bibliothèque pour étudier.", "Se estudia en la bibliothèque."], ["le mairie", "la mairie", "Femenina."]] }
  ],
  ejemplos: [
    { sit: "«En mi barrio hay un estadio.»", resp: "Dans mon quartier, il y a un stade.", pasos: ["Dans mon quartier, il y a…"], porque: "Describir." },
    { sit: "Quieres comprar un libro.", resp: "Je vais à la librairie.", pasos: ["Comprar → librairie."], porque: "Tienda." },
    { sit: "«No hay museo.»", resp: "Il n'y a pas de musée.", pasos: ["pas de."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Para estudiar vas a…", o: ["la bibliothèque", "la librairie"], a: 0, b: "voc", porque: "Biblioteca." },
    { q: "«le quartier» es…", o: ["el barrio", "el cuarto"], a: 0, b: "voc", porque: "Barrio." },
    { q: "«la mairie» es…", o: ["la alcaldía", "el mar"], a: 0, b: "voc", porque: "Alcaldía." }
  ],
  practica: [
    { fase: "guiada", c: ["lv-fem"], k: "choice", es: true, say: "la bibliothèque", ask: "Escucha. ¿Qué lugar es?", q: "Elige.", o: ["la biblioteca", "la librería", "la iglesia"], a: 0, pista: "Se estudia.", why: "<b>la bibliothèque</b>." },
    { fase: "guiada", c: ["lv-masc", "lv-fem"], k: "match", ask: "Une cada lugar.", q: "Francés → español", pairs: [["la mairie", "la alcaldía"], ["le musée", "el museo"], ["le stade", "el estadio"], ["l'église", "la iglesia"], ["le commissariat", "la comisaría"]], pista: "mairie = alcaldía.", why: "Lugares." },
    { fase: "guiada", c: ["lv-masc"], k: "choice", ask: "«En mi barrio hay un gran parque.»", q: "«Dans mon ___ , il y a un grand parc.»", o: ["quartier", "musée", "stade"], a: 0, pista: "Barrio.", why: "<b>quartier</b>." },
    { fase: "indep", c: ["lv-masc", "lv-fem"], k: "sort", ask: "¿Masculino o femenino?", q: "Clasifica.", cats: ["le / l' (masc.)", "la / l' (fem.)"], items: [["marché", 0], ["musée", 0], ["stade", 0], ["mairie", 1], ["poste", 1], ["bibliothèque", 1]], why: "Género." },
    { fase: "indep", c: ["lv-fem"], k: "spot", ask: "Encuentra el error.", s: "Je vais à la [librairie] pour étudier .", fix: "bibliothèque", why: "<b>bibliothèque</b>." },
    { fase: "indep", c: ["lv-fem"], k: "choice", ask: "«La alcaldía está en la plaza principal.»", q: "«La mairie est sur la ___ principale.»", o: ["place", "plage", "poste"], a: 0, why: "<b>place</b>." },
    { fase: "aplica", c: ["lv-masc"], k: "choice", es: true, say: "Le musée est fermé le lundi.", ask: "Escucha. ¿Qué pasa el lunes?", q: "Elige.", o: ["El museo está cerrado.", "El museo está abierto.", "El estadio está cerrado."], a: 0, why: "<b>fermé</b>." },
    { fase: "aplica", c: ["lv-masc"], k: "order", ask: "Di: «No hay estadio en mi barrio».", tokens: ["Il n'y a pas", "de stade", "dans mon", "quartier."], why: "<b>Il n'y a pas de stade dans mon quartier.</b>" },
    { fase: "dominio", c: ["lv-fem"], k: "fill", ask: "Escribe «iglesia».", q: "Le parc est à côté de l'___ .", acc: ["église"], why: "<b>église</b>." },
    { fase: "dominio", c: ["lv-masc"], k: "fill", ask: "Escribe «museo».", q: "Le ___ est fermé le lundi.", acc: ["musée"], why: "<b>musée</b>." },
    { fase: "dominio", c: ["lv-masc", "lv-fem"], k: "listen", say: "Dans mon quartier, il y a un grand parc.", acc: ["Dans mon quartier, il y a un grand parc.", "Dans mon quartier il y a un grand parc."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans mon quartier, il y a un grand parc.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["parc", "principale", "fermé", "lundi", "étudier", "pour", "plage", "marché", "grand", "mais", "non"] }
};

E["a1-aller-venir"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Aller et venir : où vas-tu ? d'où viens-tu ?",
  objetivo: {
    que: "Vas a conjugar aller y venir, y usarlos con à, de y chez.",
    corto: "Ir a, venir de.",
    podras: ["Conjugar venir completo.", "Usar aller à y venir de con contracciones.", "Decir aller chez Paul."],
    iconos: ["m2d/correr", "ic2/mundo", "ic2/amigos"],
    previos: ["aller (lección 5) y las contracciones (lección 33)."],
    capacidad: "Ahora puedes decir adónde vas y de dónde vienes."
  },
  requiere: R("ir-aller-faire", "ad-a", "ad-de", "lg-prep"), recupera: ["ir-aller-faire"],
  conceptos: {
    "av2-venir": { n: "je viens… ils viennent", b: "gr" },
    "av2-chez": { n: "aller à / venir de / chez + persona", b: "gr" }
  },
  video: {
    titulo: "Ir y venir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Où vas-tu ?", seg: [
        { es: "Hola. Ir y venir, los dos irregulares." } ] },
      { v: "dos",
        a: { tag: "ir", fr: "Je vais chez Marie.", es: "Voy a casa de Marie." },
        b: { tag: "venir", fr: "Ils viennent du Brésil.", es: "Vienen de Brasil." },
        seg: [ { es: "A casa de alguien, chez:", p: 1 }, { fr: "Je vais chez Marie.", p: 1 }, { es: "Venir de, con sus contracciones:", p: 2 }, { fr: "Ils viennent du Brésil.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a casa de Paul.»", o: ["Je vais chez Paul.", "Je vais à la maison de Paul."], a: 0,
        bien: "¡Sí! Chez + persona.", mal: "A casa de alguien: chez Paul.",
        seg: [ { es: "Pausa. A casa de Paul." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je viens", "nous venons", "vous venez", "ils viennent", "chez Paul"], seg: [
        { es: "Ellos vienen lleva doble ene.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Adónde vas?", img: "bg-cafe", yo: "camila",
    escena: "Hugo se cruza con Camila en la calle.",
    pj: PJ,
    lineas: [
      ["hugo", "Où vas-tu ce soir ?", "¿Adónde vas esta noche?"],
      ["camila", "Je vais chez Marie. Vous venez avec nous ?", "Voy a casa de Marie. ¿Vienen con nosotros?"],
      ["hugo", "Oui ! Mes amis viennent du Brésil, ils arrivent demain.", "¡Sí! Mis amigos vienen de Brasil, llegan mañana."],
      ["camila", "Super ! Nous allons à la plage samedi.", "¡Genial! Vamos a la playa el sábado."]
    ],
    fijate: "Fíjate: chez Marie, du Brésil, à la plage."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Venir y chez",
      idea: "venir: viens, viens, vient, venons, venez, viennent. aller à + lugar; venir de + lugar; chez + persona.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Uso"], [
        ["je viens", "vengo", "venir"],
        ["tu viens", "vienes", "venir"],
        ["il vient", "viene", "venir"],
        ["nous venons", "venimos", "venir"],
        ["vous venez", "vienen", "venir"],
        ["ils viennent", "vienen (doble n)", "venir"],
        ["Où vas-tu ce soir ?", "¿Adónde vas esta noche?", "aller"],
        ["Je vais chez Marie.", "Voy a casa de Marie.", "chez"],
        ["Je viens de Madrid.", "Vengo de Madrid.", "venir de"],
        ["Vous venez avec nous ?", "¿Vienen con nosotros?", "venir"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils venent","ils viennent","Doble n."], ["Je vais à la maison de Paul.", "Je vais chez Paul.", "A casa de = chez."], ["ils vienent", "ils viennent", "Doble n."]] }
  ],
  ejemplos: [
    { sit: "«Vienen de Brasil.»", resp: "Ils viennent du Brésil.", pasos: ["viennent.", "de + le = du."], porque: "Origen." },
    { sit: "«Voy a casa de Marie.»", resp: "Je vais chez Marie.", pasos: ["chez + persona."], porque: "Casa." },
    { sit: "«¿Vienen con nosotros?»", resp: "Vous venez avec nous ?", pasos: ["vous venez."], porque: "Pregunta." }
  ],
  comprueba: [
    { q: "«ils viennent» lleva…", o: ["doble n", "una n"], a: 0, b: "gr", porque: "viennent." },
    { q: "«chez Paul» significa…", o: ["a casa de Paul", "cerca de Paul"], a: 0, b: "gr", porque: "chez." },
    { q: "Con venir se usa…", o: ["de", "à"], a: 0, b: "gr", porque: "venir de." }
  ],
  practica: [
    { fase: "guiada", c: ["av2-venir"], k: "choice", ask: "«Vienen de Brasil.»", q: "«Ils ___ du Brésil.»", o: ["viennent", "vienent", "venent"], a: 0, pista: "Doble n.", why: "<b>viennent</b>." },
    { fase: "guiada", c: ["av2-chez"], k: "choice", ask: "«Voy a casa de Marie.»", q: "«Je vais ___ Marie.»", o: ["chez", "à", "de"], a: 0, pista: "Persona.", why: "<b>chez</b>." },
    { fase: "guiada", c: ["av2-venir"], k: "match", ask: "Une cada forma.", q: "Francés → español", pairs: [["je viens", "vengo"], ["nous venons", "venimos"], ["vous venez", "vienen"], ["ils viennent", "vienen (ellos)"]], pista: "venons = venimos.", why: "venir." },
    { fase: "indep", c: ["av2-venir"], k: "fill", ask: "Conjuga venir (vous).", q: "Vous ___ avec nous ?", acc: ["venez"], why: "<b>venez</b>." },
    { fase: "indep", c: ["av2-chez"], k: "spot", ask: "Encuentra el error.", s: "Ce soir , je vais [à la maison de] Paul .", fix: "chez", why: "<b>chez Paul</b>." },
    { fase: "indep", c: ["av2-chez"], k: "choice", ask: "«Vengo de la oficina.»", q: "«Je viens ___ bureau.»", o: ["du", "au", "chez"], a: 0, why: "<b>du bureau</b>." },
    { fase: "aplica", c: ["av2-chez"], k: "choice", ask: "Hugo: «Où vas-tu ?» Vas a la playa.", q: "Tú: «Je vais ___ plage.»", o: ["à la", "de la", "chez la"], a: 0, why: "<b>à la plage</b>." },
    { fase: "aplica", c: ["av2-venir"], k: "order", ask: "Ordena: «¿De dónde vienes?».", tokens: ["D'où", "viens-tu", "?"], why: "<b>D'où viens-tu ?</b>" },
    { fase: "dominio", c: ["av2-venir"], k: "fill", ask: "Conjuga venir (nous).", q: "Nous ___ de Colombie.", acc: ["venons"], why: "<b>venons</b>." },
    { fase: "dominio", c: ["av2-chez"], k: "choice", ask: "«Vamos a casa de mis abuelos.»", q: "«Nous allons ___ mes grands-parents.»", o: ["chez", "à", "aux"], a: 0, why: "<b>chez</b>." },
    { fase: "dominio", c: ["av2-venir", "av2-chez"], k: "listen", say: "Où vas-tu ce soir ?", acc: ["Où vas-tu ce soir ?", "Où vas-tu ce soir?", "Où vas-tu ce soir"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Où vas-tu ce soir ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Paul", "Madrid", "Brésil", "Colombie"], previo: ["ce", "soir", "avec", "arrivent", "demain", "super", "plage", "samedi", "bureau", "grands-parents", "d'où", "viens-tu", "vas-tu", "maison"] }
};

E["a1-imperatif-indications"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "L'impératif : tournez, prenez, allez",
  objetivo: {
    que: "Vas a dar instrucciones con el imperativo (tú, nosotros, usted) y en negativo.",
    corto: "Dar órdenes e instrucciones.",
    podras: ["Formar el imperativo sin sujeto.", "Quitar la s en -er con tú: regarde, tourne, va.", "Negar: Ne tourne pas !"],
    iconos: ["m2d/senalar", "m2d/correr", "ic2/lapiz"],
    previos: ["El camino (lección 31) e instrucciones de clase (Primeros pasos)."],
    capacidad: "Ahora puedes dar indicaciones y consejos."
  },
  requiere: R("ch-indic", "cs-verbos", "cs-tu", "er-term", "re2-prendre", "ir-aller-faire"), recupera: ["ch-indic"],
  conceptos: {
    "im-forma": { n: "prends / prenons / prenez", b: "gr" },
    "im-er": { n: "-er sin s con tú; negativo ne… pas", b: "gr" }
  },
  video: {
    titulo: "El imperativo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Tournez à gauche !", seg: [
        { es: "Hola. El imperativo es el presente sin el sujeto." } ] },
      { v: "frase", filas: [
          { nota: "tú", p: 1, partes: [["Prends le bus !", "-", 1]] },
          { nota: "nosotros", p: 2, partes: [["Prenons le bus !", "-", 2]] },
          { nota: "usted / ustedes", p: 3, partes: [["Prenez le bus !", "-", 3]] } ], seg: [
        { es: "Toma el bus,", p: 1 }, { es: "tomemos el bus,", p: 2 }, { es: "tome el bus.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Gira a la derecha!» (tú)", o: ["Tourne à droite !", "Tournes à droite !"], a: 0,
        bien: "¡Sí! Sin s.", mal: "Con verbos en -er, el imperativo de tú pierde la s.",
        seg: [ { es: "Pausa. Tú, verbo en e erre." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Écoute !", "Tourne !", "Va !", "Allons !", "Prenez !", "Ne tourne pas !"], seg: [
        { es: "Y en negativo: ne antes y pas después.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Instrucciones", img: "bg-paris", yo: "camila",
    escena: "Hugo guía a Camila por teléfono.",
    pj: PJ,
    lineas: [
      ["hugo", "Écoute bien ! Va tout droit et tourne à gauche.", "¡Escucha bien! Ve recto y gira a la izquierda."],
      ["camila", "D'accord. Et après ?", "De acuerdo. ¿Y después?"],
      ["hugo", "Ne tourne pas à droite ! Traverse le pont.", "¡No gires a la derecha! Cruza el puente."],
      ["camila", "Allons au parc ensemble !", "¡Vamos juntos al parque!"]
    ],
    fijate: "Fíjate: va, tourne, traverse: sin s."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar el imperativo",
      idea: "Presente sin sujeto: tu prends → prends, nous prenons → prenons, vous prenez → prenez. En -er (y aller), tú pierde la s: tourne, va.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Persona"], [
        ["Prends le bus !", "¡Toma el bus!", "tú"],
        ["Prenons le bus !", "¡Tomemos el bus!", "nosotros"],
        ["Prenez la première rue.", "Tome la primera calle.", "usted"],
        ["Tournez à droite.", "Gire a la derecha.", "usted"],
        ["Tourne à gauche !", "¡Gira a la izquierda!", "tú, sin s"],
        ["Écoute bien !", "¡Escucha bien!", "tú, sin s"],
        ["Va tout droit !", "¡Ve recto!", "tú, sin s"],
        ["Allons au parc !", "¡Vamos al parque!", "nosotros"],
        ["Traversez le pont.", "Cruce el puente.", "usted"],
        ["Ne tourne pas !", "¡No gires!", "negativo"],
        ["Ne parlez pas !", "¡No hablen!", "negativo"]
      ]],
      ej: [["Regarde !", "¡Mira!"], ["Traverse le pont.", "Cruza el puente."], ["sois", "sé (être)"], ["soyez", "sean (être)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tournes à droite !", "Tourne à droite !", "Sin s en -er."], ["Vas tout droit !", "Va tout droit !", "aller: va."], ["Tu tourne à gauche !", "Tourne à gauche !", "Sin sujeto."]] }
  ],
  ejemplos: [
    { sit: "«¡Escucha bien!» (tú)", resp: "Écoute bien !", pasos: ["tu écoutes → écoute."], porque: "Sin s." },
    { sit: "«Tome la primera calle.»", resp: "Prenez la première rue.", pasos: ["vous prenez → prenez."], porque: "Usted." },
    { sit: "«¡No gires a la derecha!»", resp: "Ne tourne pas à droite !", pasos: ["ne + tourne + pas."], porque: "Negativo." }
  ],
  comprueba: [
    { q: "El imperativo lleva sujeto…", o: ["no", "sí"], a: 0, b: "gr", porque: "Sin sujeto." },
    { q: "Con tú, en -er, la s…", o: ["desaparece", "se queda"], a: 0, b: "gr", porque: "tourne." },
    { q: "«Allons !» significa…", o: ["¡Vamos!", "¡Vayan!"], a: 0, b: "gr", porque: "nous." }
  ],
  practica: [
    { fase: "guiada", c: ["im-er"], k: "choice", ask: "«¡Gira a la derecha!» (tú)", q: "«___ à droite !»", o: ["Tourne", "Tournes", "Tu tournes"], a: 0, pista: "Sin s, sin sujeto.", why: "<b>Tourne</b>." },
    { fase: "guiada", c: ["im-forma"], k: "choice", ask: "«Tome la primera calle.» (usted)", q: "«___ la première rue.»", o: ["Prenez", "Prends", "Vous prenez"], a: 0, pista: "Usted.", why: "<b>Prenez</b>." },
    { fase: "guiada", c: ["im-forma"], k: "match", ask: "Une cada orden.", q: "Francés → español", pairs: [["Écoute !", "¡Escucha!"], ["Allons !", "¡Vamos!"], ["Traversez !", "¡Cruce!"], ["Regarde !", "¡Mira!"]], pista: "allons = vamos.", why: "Imperativo." },
    { fase: "indep", c: ["im-er"], k: "spot", ask: "Encuentra el error.", s: "[Tournes] à droite après la banque !", fix: "Tourne", why: "<b>Tourne</b>." },
    { fase: "indep", c: ["im-er"], k: "fill", ask: "Imperativo de aller (tú).", q: "___ tout droit !", acc: ["Va"], why: "<b>Va</b>." },
    { fase: "indep", c: ["im-forma"], k: "fill", ask: "Imperativo de aller (nosotros).", q: "___ au parc !", acc: ["Allons"], why: "<b>Allons</b>." },
    { fase: "aplica", c: ["im-er"], k: "choice", ask: "«¡No gires a la derecha!»", q: "«___»", o: ["Ne tourne pas à droite !", "Tourne pas ne à droite !", "Ne tournes à droite !"], a: 0, why: "<b>Ne tourne pas</b>." },
    { fase: "aplica", c: ["im-forma"], k: "order", ask: "Ordena: «Gire a la izquierda y tome la calle Pasteur».", tokens: ["Tournez", "à gauche", "et prenez", "la rue Pasteur."], why: "<b>Tournez à gauche et prenez la rue Pasteur.</b>" },
    { fase: "dominio", c: ["im-forma"], k: "fill", ask: "Imperativo de traverser (usted).", q: "___ le pont.", acc: ["Traversez"], why: "<b>Traversez</b>." },
    { fase: "dominio", c: ["im-er"], k: "choice", ask: "«¡Escucha bien!»", q: "«___ bien !»", o: ["Écoute", "Écoutes", "Tu écoutes"], a: 0, why: "<b>Écoute</b>." },
    { fase: "dominio", c: ["im-forma", "im-er"], k: "listen", say: "Tournez à droite et prenez la première rue.", acc: ["Tournez à droite et prenez la première rue."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tournez à droite et prenez la première rue.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pasteur"], previo: ["bien", "après", "d'accord", "pont", "parc", "ensemble", "banque", "rue", "première"] }
};

E["a1-commerces"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les commerces : chez le boulanger, à la boucherie",
  objetivo: {
    que: "Vas a nombrar las tiendas de dos maneras: por el lugar (à la boulangerie) o por la persona (chez le boulanger).",
    corto: "¿À la o chez le?",
    podras: ["Decir à la boulangerie, à la boucherie, au supermarché.", "Decir chez le boulanger, chez le coiffeur.", "Comprar: Je voudrais une baguette. Ça fait…"],
    iconos: ["ic2/moneda", "m2d/senalar", "ic2/cofre"],
    previos: ["Pedir en el café (Primeros pasos) y las contracciones (lección 33)."],
    capacidad: "Ahora puedes hacer compras en las tiendas de barrio."
  },
  requiere: R("ca-pedir", "ca-pagar", "cb-comprar", "ad-a", "av2-chez", "mg-voc", "mg-du"), recupera: ["av2-chez"],
  conceptos: {
    "co-lieu": { n: "à la boulangerie, à la boucherie…", b: "voc" },
    "co-chez": { n: "chez le boulanger, chez le boucher…", b: "voc" }
  },
  video: {
    titulo: "Las tiendas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "chez le boulanger", seg: [
        { es: "Hola. La tienda tiene dos nombres: el lugar y la persona." } ] },
      { v: "dos",
        a: { tag: "el lugar", fr: "à la boulangerie", es: "à la / au" },
        b: { tag: "la persona", fr: "chez le boulanger", es: "chez" },
        seg: [ { es: "Si dices el lugar, à la:", p: 1 }, { fr: "à la boulangerie", p: 1 }, { es: "Si dices la persona, chez:", p: 2 }, { fr: "chez le boulanger", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a la peluquería.»", o: ["Je vais chez le coiffeur.", "Je vais au coiffeur."], a: 0,
        bien: "¡Sí! Persona: chez.", mal: "Le coiffeur es una persona: chez le coiffeur.",
        seg: [ { es: "Pausa. El peluquero es una persona." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la boulangerie", "la pâtisserie", "la boucherie", "la poissonnerie", "l'épicerie", "chez le coiffeur"], seg: [
        { es: "Pan, pasteles, carne, pescado, y de todo un poco.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la panadería", img: "bg-cafe", yo: "camila",
    escena: "Camila compra el desayuno.",
    pj: PJ,
    lineas: [
      ["vendeur", "Bonjour, madame. Vous désirez ?", "Buenos días, señora. ¿Qué desea?"],
      ["camila", "Je voudrais une baguette et deux croissants, s'il vous plaît.", "Quisiera una baguette y dos cruasanes, por favor."],
      ["vendeur", "Ça fait trois euros.", "Son tres euros."],
      ["camila", "Merci ! Après, je vais chez le boucher.", "¡Gracias! Después voy a la carnicería."]
    ],
    fijate: "Fíjate: Ça fait… para el precio; chez le boucher."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Las tiendas",
      idea: "Lugar: à la boulangerie, au supermarché. Persona: chez le boulanger, chez le boucher, chez le coiffeur.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "la boulangerie", es: "la panadería", ej: ["À la boulangerie, j'achète deux croissants.", "En la panadería compro dos cruasanes."] },
        { fr: "le boulanger", es: "el panadero" },
        { fr: "la pâtisserie", es: "la pastelería (les gâteaux)" },
        { fr: "la boucherie", es: "la carnicería (la viande)" },
        { fr: "le boucher", es: "el carnicero", ej: ["Je vais chez le boucher pour acheter du poulet.", "Voy a la carnicería a comprar pollo."] },
        { fr: "la poissonnerie", es: "la pescadería (le poisson)" },
        { fr: "la fromagerie", es: "la quesería (le fromage)" },
        { fr: "l'épicerie", es: "la tienda de barrio" },
        { fr: "la pharmacie", es: "la farmacia" },
        { fr: "le pharmacien", es: "el farmaceuta" },
        { fr: "le coiffeur", es: "el peluquero", ej: ["Elle va chez le coiffeur samedi.", "Va a la peluquería el sábado."] },
        { fr: "le supermarché", es: "el supermercado" }
      ],
      clave: "Ça fait trois euros. = Son tres euros." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais au boulanger.", "Je vais chez le boulanger.", "Con la persona, chez."], ["Je vais au coiffeur.", "Je vais chez le coiffeur.", "Persona."], ["Je vais chez la pharmacie.", "Je vais à la pharmacie.", "Con el lugar, à la."]] }
  ],
  ejemplos: [
    { sit: "«Voy a la farmacia.»", resp: "Je vais à la pharmacie.", pasos: ["Lugar → à la."], porque: "Lugar." },
    { sit: "«Voy donde el carnicero.»", resp: "Je vais chez le boucher.", pasos: ["Persona → chez."], porque: "Persona." },
    { sit: "Pides una baguette.", resp: "Je voudrais une baguette, s'il vous plaît.", pasos: ["Je voudrais…"], porque: "Cortés." }
  ],
  comprueba: [
    { q: "Para comprar pescado vas a…", o: ["la poissonnerie", "la pâtisserie"], a: 0, b: "voc", porque: "Pescado." },
    { q: "Con una persona (le boucher) se usa…", o: ["chez", "à la"], a: 0, b: "voc", porque: "chez." },
    { q: "«Ça fait trois euros» significa…", o: ["Son tres euros.", "Hace tres euros."], a: 0, b: "voc", porque: "Precio." }
  ],
  practica: [
    { fase: "guiada", c: ["co-chez"], k: "choice", ask: "«Voy a la carnicería.» (persona)", q: "«Je vais ___ boucher.»", o: ["chez le", "au", "à la"], a: 0, pista: "Persona.", why: "<b>chez le boucher</b>." },
    { fase: "guiada", c: ["co-lieu"], k: "choice", ask: "«Voy a la farmacia.»", q: "«Je vais ___ pharmacie.»", o: ["à la", "chez la", "au"], a: 0, pista: "Lugar.", why: "<b>à la pharmacie</b>." },
    { fase: "guiada", c: ["co-lieu"], k: "match", ask: "¿Qué se compra en cada tienda?", q: "Tienda → producto", pairs: [["la boulangerie", "le pain"], ["la pâtisserie", "les gâteaux"], ["la boucherie", "la viande"], ["la fromagerie", "le fromage"]], pista: "boulangerie = pan.", why: "Tiendas." },
    { fase: "indep", c: ["co-lieu", "co-chez"], k: "sort", ask: "¿Lugar o persona?", q: "Clasifica.", cats: ["Lugar (à la…)", "Persona (chez le…)"], items: [["boulangerie", 0], ["boucherie", 0], ["pharmacie", 0], ["poissonnerie", 0], ["boulanger", 1], ["boucher", 1], ["pharmacien", 1], ["coiffeur", 1]], why: "Lugar o persona." },
    { fase: "indep", c: ["co-chez"], k: "spot", ask: "Encuentra el error.", s: "Samedi , je vais [au] coiffeur .", fix: "chez le", why: "<b>chez le coiffeur</b>." },
    { fase: "indep", c: ["co-lieu"], k: "fill", ask: "Escribe la tienda de los pasteles.", q: "J'achète des gâteaux à la ___ .", acc: ["pâtisserie"], why: "<b>pâtisserie</b>." },
    { fase: "aplica", c: ["co-lieu"], k: "choice", ask: "Necesitas pescado.", q: "«Je vais ___»", o: ["à la poissonnerie", "à la boulangerie", "chez le coiffeur"], a: 0, why: "<b>la poissonnerie</b>." },
    { fase: "aplica", c: ["co-lieu"], k: "order", ask: "Ordena: «Quisiera una baguette, por favor».", tokens: ["Je voudrais", "une baguette,", "s'il vous plaît."], why: "<b>Je voudrais une baguette, s'il vous plaît.</b>" },
    { fase: "dominio", c: ["co-lieu"], k: "choice", es: true, say: "Ça fait trois euros.", ask: "Escucha. ¿Cuánto es?", q: "Elige.", o: ["Tres euros", "Trece euros", "Treinta euros"], a: 0, why: "<b>trois</b>." },
    { fase: "dominio", c: ["co-chez"], k: "fill", ask: "Escribe la preposición.", q: "Elle va ___ le boulanger.", acc: ["chez"], why: "<b>chez</b>." },
    { fase: "dominio", c: ["co-lieu", "co-chez"], k: "listen", say: "Je voudrais une baguette et deux croissants.", acc: ["Je voudrais une baguette et deux croissants."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais une baguette et deux croissants.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["madame", "désirez", "baguette", "croissants", "ça", "fait", "trois", "euros", "après", "achète", "acheter", "gâteaux", "viande", "poisson", "samedi", "deux", "pain", "fromage", "poulet"] }
};

E["a1-courses-quantites"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Faire les courses : un kilo de, une bouteille de",
  objetivo: {
    que: "Vas a pedir cantidades: después de una cantidad va solo de (d'), sin artículo.",
    corto: "Un kilo de…",
    podras: ["Pedir un kilo de, un litre de, une bouteille de.", "Usar beaucoup de, un peu de, trop de.", "Escribir d' delante de vocal: une bouteille d'eau."],
    iconos: ["ic2/moneda", "ic2/cofre", "m2d/senalar"],
    previos: ["Los partitivos (Primeros pasos) y las tiendas (lección 37)."],
    capacidad: "Ahora puedes hacer la lista del mercado."
  },
  requiere: R("mg-voc", "mg-du", "ca-pedir", "co-lieu"), recupera: ["mg-du"],
  conceptos: {
    "cq-de": { n: "cantidad + de (d') sin artículo", b: "gr" },
    "cq-adv": { n: "beaucoup de, un peu de, trop de", b: "gr" }
  },
  video: {
    titulo: "Las cantidades", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "un kilo de pommes", seg: [
        { es: "Hola. Después de una cantidad, el artículo desaparece." } ] },
      { v: "dos",
        a: { tag: "sin cantidad", fr: "des pommes", es: "unas manzanas" },
        b: { tag: "con cantidad", fr: "un kilo de pommes", es: "solo de" },
        seg: [ { es: "Sin cantidad:", p: 1 }, { fr: "des pommes", p: 1 }, { es: "Con cantidad, solo de:", p: 2 }, { fr: "un kilo de pommes", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«una botella de agua»", o: ["une bouteille d'eau", "une bouteille de l'eau"], a: 0,
        bien: "¡Sí! d' delante de vocal.", mal: "Tras la cantidad, solo d': une bouteille d'eau.",
        seg: [ { es: "Pausa. Una botella de agua." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un kilo de", "un litre de", "une bouteille de", "un paquet de", "beaucoup de", "un peu de"], seg: [
        { es: "Y lo mismo con mucho, poco y demasiado.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el mercado", img: "bg-paris", yo: "camila",
    escena: "Camila compra frutas en el mercado.",
    pj: PJ,
    lineas: [
      ["vendeur", "Bonjour ! Qu'est-ce que vous voulez ?", "¡Buenos días! ¿Qué quiere?"],
      ["camila", "Je voudrais un kilo de pommes et un litre de lait.", "Quisiera un kilo de manzanas y un litro de leche."],
      ["vendeur", "Et avec ça ?", "¿Y algo más?"],
      ["camila", "Une bouteille d'eau et une douzaine d'œufs. Il y a beaucoup de monde !", "Una botella de agua y una docena de huevos. ¡Hay mucha gente!"]
    ],
    fijate: "Fíjate: un kilo de, une bouteille d', beaucoup de."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cantidad + de",
      idea: "Cantidad + de + nombre, sin artículo: un kilo de tomates, un litre de lait. Delante de vocal: d'.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je voudrais un kilo de pommes.", "Quisiera un kilo de manzanas.", "kilo + de"],
        ["un litre de lait", "un litro de leche", "litre + de"],
        ["Achète une bouteille d'eau.", "Compra una botella de agua.", "d' + vocal"],
        ["Il faut deux paquets de pâtes.", "Hacen falta dos paquetes de pasta.", "paquet + de"],
        ["une douzaine d'œufs", "una docena de huevos", "d' + vocal"],
        ["deux tranches de jambon", "dos tajadas de jamón", "tranche + de"],
        ["un pot de confiture", "un frasco de mermelada", "pot + de"],
        ["Il y a beaucoup de monde au marché.", "Hay mucha gente en el mercado.", "beaucoup de"],
        ["un peu de sucre", "un poco de azúcar", "un peu de"],
        ["trop de sel", "demasiada sal", "trop de"]
      ]],
      ej: [["une boîte de thon", "una lata de atún"], ["une tablette de chocolat", "una tableta de chocolate"], ["un demi-kilo de fraises", "medio kilo de fresas"], ["des tomates", "tomates"], ["les carottes", "las zanahorias"], ["un paquet de riz", "un paquete de arroz"], ["une bouteille d'huile", "una botella de aceite"], ["une bouteille de vin", "una botella de vino"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un kilo des pommes", "un kilo de pommes", "Tras la cantidad, solo de."], ["une bouteille de l'eau", "une bouteille d'eau", "Sin artículo: d'."], ["beaucoup des fruits", "beaucoup de fruits", "beaucoup de."]] }
  ],
  ejemplos: [
    { sit: "«un litro de leche»", resp: "un litre de lait", pasos: ["litre + de."], porque: "Sin artículo." },
    { sit: "«una docena de huevos»", resp: "une douzaine d'œufs", pasos: ["Vocal → d'."], porque: "Elisión." },
    { sit: "«un poco de azúcar»", resp: "un peu de sucre", pasos: ["un peu de."], porque: "Adverbio." }
  ],
  comprueba: [
    { q: "Tras una cantidad se usa…", o: ["solo de", "de + artículo"], a: 0, b: "gr", porque: "Sin artículo." },
    { q: "Delante de vocal, de se vuelve…", o: ["d'", "des"], a: 0, b: "gr", porque: "Elisión." },
    { q: "«trop de» significa…", o: ["demasiado", "muy poco"], a: 0, b: "gr", porque: "Exceso." }
  ],
  practica: [
    { fase: "guiada", c: ["cq-de"], k: "choice", ask: "«un litro de leche»", q: "«Je voudrais un litre ___ lait.»", o: ["de", "du", "des"], a: 0, pista: "Solo de.", why: "<b>de</b>." },
    { fase: "guiada", c: ["cq-de"], k: "choice", ask: "«una botella de agua»", q: "«Achète une bouteille ___ eau.»", o: ["d'", "de l'", "des"], a: 0, pista: "Vocal.", why: "<b>d'eau</b>." },
    { fase: "guiada", c: ["cq-de"], k: "match", ask: "Une cada envase.", q: "Envase → producto", pairs: [["une bouteille de", "vin"], ["un paquet de", "pâtes"], ["un pot de", "confiture"], ["une boîte de", "thon"], ["une tablette de", "chocolat"]], pista: "pot = frasco.", why: "Envases." },
    { fase: "indep", c: ["cq-adv"], k: "sort", ask: "¿Mucho o poco?", q: "Clasifica.", cats: ["Mucho", "Poco"], items: [["beaucoup de", 0], ["trop de", 0], ["un peu de", 1], ["peu de", 1]], why: "Cantidad." },
    { fase: "indep", c: ["cq-de"], k: "fill", ask: "Completa.", q: "Je prends deux tranches ___ jambon.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["cq-de"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais un kilo [des] carottes .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["cq-adv"], k: "choice", ask: "«Hay mucha gente en el mercado.»", q: "«Il y a ___ monde au marché.»", o: ["beaucoup de", "beaucoup des", "un peu"], a: 0, why: "<b>beaucoup de</b>." },
    { fase: "aplica", c: ["cq-de"], k: "fill", ask: "Escribe «botella».", q: "Je voudrais une ___ de lait.", acc: ["bouteille"], why: "<b>bouteille</b>." },
    { fase: "dominio", c: ["cq-adv"], k: "choice", ask: "«un poco de azúcar»", q: "«___»", o: ["un peu de sucre", "un peu du sucre", "trop de sucre"], a: 0, why: "<b>un peu de sucre</b>." },
    { fase: "dominio", c: ["cq-de"], k: "order", ask: "Ordena: «Quisiera medio kilo de fresas».", tokens: ["Je voudrais", "un demi-kilo", "de", "fraises."], why: "<b>Je voudrais un demi-kilo de fraises.</b>" },
    { fase: "dominio", c: ["cq-de", "cq-adv"], k: "listen", say: "J'achète un paquet de riz et une bouteille d'huile.", acc: ["J'achète un paquet de riz et une bouteille d'huile."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'achète un paquet de riz et une bouteille d'huile.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["qu'est-ce", "que", "voulez", "avec", "ça", "monde", "marché", "lait", "pommes", "eau", "œufs", "pâtes", "jambon", "sucre", "sel", "fruits", "achète", "j'achète", "deux", "il", "faut", "peu", "prends"] }
};

E["a1-poste-banque"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "À la poste et à la banque",
  objetivo: {
    que: "Vas a enviar una carta o un paquete y a sacar dinero o abrir una cuenta.",
    corto: "Trámites básicos.",
    podras: ["Pedir Je voudrais envoyer ce colis.", "Decir retirer de l'argent, ouvrir un compte.", "Pagar par carte o en espèces."],
    iconos: ["ic2/moneda", "ic2/lapiz", "ic2/mundo"],
    previos: ["El dinero (Primeros pasos) y vouloir (lección 15)."],
    capacidad: "Ahora puedes hacer trámites en correos y en el banco."
  },
  requiere: R("ar2-voc", "ar2-payer", "ca-pedir", "co-lieu", "vp-uso"), recupera: ["ar2-payer"],
  conceptos: {
    "pb-poste": { n: "envoyer, le timbre, le colis, l'enveloppe", b: "voc" },
    "pb-banque": { n: "ouvrir un compte, retirer, le distributeur", b: "voc" }
  },
  video: {
    titulo: "Correos y banco", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "la poste · la banque", seg: [
        { es: "Hola. Dos trámites: enviar y sacar dinero." } ] },
      { v: "dos",
        a: { tag: "correos", fr: "Je voudrais envoyer ce colis.", es: "enviar" },
        b: { tag: "banco", fr: "Je retire de l'argent.", es: "sacar dinero" },
        seg: [ { es: "En correos:", p: 1 }, { fr: "Je voudrais envoyer ce colis.", p: 1 }, { es: "En el banco:", p: 2 }, { fr: "Je retire de l'argent.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«pagar con tarjeta»", o: ["payer par carte", "payer avec carte"], a: 0,
        bien: "¡Sí! Par carte.", mal: "Se dice par carte y en espèces.",
        seg: [ { es: "Pausa. Con tarjeta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le timbre", "l'enveloppe", "le colis", "le compte", "le distributeur", "en espèces"], seg: [
        { es: "Sello, sobre, paquete, cuenta, cajero y efectivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En correos", img: "bg-paris", yo: "camila",
    escena: "Camila envía un paquete a Colombia.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je voudrais envoyer ce colis en Colombie.", "Buenos días, quisiera enviar este paquete a Colombia."],
      ["vendeur", "Bien sûr. Vous payez en espèces ou par carte ?", "Claro. ¿Paga en efectivo o con tarjeta?"],
      ["camila", "En espèces. Il y a un distributeur près d'ici ?", "En efectivo. ¿Hay un cajero cerca?"],
      ["vendeur", "Oui, à côté de la banque.", "Sí, al lado del banco."]
    ],
    fijate: "Fíjate: envoyer ce colis, en espèces, par carte."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Correos y banco",
      idea: "Correos: envoyer une lettre, un colis, un timbre. Banco: ouvrir un compte, retirer de l'argent, le distributeur.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "envoyer", es: "enviar", ej: ["Je voudrais envoyer ce colis.", "Quisiera enviar este paquete."] },
        { fr: "une lettre", es: "una carta" },
        { fr: "un colis", es: "un paquete" },
        { fr: "un timbre", es: "un sello", ej: ["Il faut un timbre pour la lettre.", "Hace falta un sello para la carta."] },
        { fr: "une enveloppe", es: "un sobre" },
        { fr: "le code postal", es: "el código postal" },
        { fr: "le guichet", es: "la ventanilla" },
        { fr: "le reçu", es: "el recibo" },
        { fr: "ouvrir un compte", es: "abrir una cuenta", ej: ["Je voudrais ouvrir un compte.", "Quisiera abrir una cuenta."] },
        { fr: "retirer de l'argent", es: "sacar dinero" },
        { fr: "le distributeur", es: "el cajero automático" },
        { fr: "la carte bancaire", es: "la tarjeta bancaria" },
        { fr: "la monnaie", es: "el cambio, las monedas" }
      ],
      clave: "Combien ça coûte pour envoyer une lettre ? = ¿Cuánto cuesta enviar una carta?" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["payer avec carte", "payer par carte", "Por carte."], ["envoier", "envoyer", "Con y."]] }
  ],
  ejemplos: [
    { sit: "«Quisiera tres sellos para Europa.»", resp: "Je voudrais trois timbres pour l'Europe.", pasos: ["timbre = sello."], porque: "Correos." },
    { sit: "«Saco dinero.»", resp: "Je retire de l'argent.", pasos: ["retirer."], porque: "Banco." },
    { sit: "«¿Paga en efectivo o con tarjeta?»", resp: "Vous payez en espèces ou par carte ?", pasos: ["en espèces / par carte."], porque: "Pagar." }
  ],
  comprueba: [
    { q: "Para sacar dinero usas…", o: ["le distributeur", "le guichet"], a: 0, b: "voc", porque: "Cajero." },
    { q: "«un colis» es…", o: ["un paquete", "una col"], a: 0, b: "voc", porque: "Paquete." },
    { q: "Con tarjeta se dice…", o: ["par carte", "en carte"], a: 0, b: "voc", porque: "par." }
  ],
  practica: [
    { fase: "guiada", c: ["pb-poste"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["le timbre", "el sello"], ["l'enveloppe", "el sobre"], ["le guichet", "la ventanilla"], ["le reçu", "el recibo"]], pista: "timbre = sello.", why: "Correos." },
    { fase: "guiada", c: ["pb-banque"], k: "choice", ask: "Quieres sacar dinero. ¿Qué usas?", q: "«___»", o: ["le distributeur", "le timbre", "le colis"], a: 0, pista: "Cajero.", why: "<b>le distributeur</b>." },
    { fase: "guiada", c: ["pb-poste", "pb-banque"], k: "sort", ask: "¿Correos o banco?", q: "Clasifica.", cats: ["La poste", "La banque"], items: [["le timbre", 0], ["l'enveloppe", 0], ["le colis", 0], ["le code postal", 0], ["le compte", 1], ["la carte bancaire", 1], ["le distributeur", 1], ["retirer de l'argent", 1]], pista: "timbre: correos.", why: "Trámites." },
    { fase: "indep", c: ["pb-banque"], k: "fill", ask: "Escribe «efectivo».", q: "Vous payez en ___ ?", acc: ["espèces"], why: "<b>en espèces</b>." },
    { fase: "indep", c: ["pb-banque"], k: "fill", ask: "Escribe «abrir».", q: "Je voudrais ___ un compte.", acc: ["ouvrir"], why: "<b>ouvrir</b>." },
    { fase: "indep", c: ["pb-poste"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais [envoier] ce colis en Colombie .", fix: "envoyer", why: "<b>envoyer</b>." },
    { fase: "aplica", c: ["pb-poste"], k: "choice", ask: "«Quisiera enviar una carta.»", q: "«___»", o: ["Je voudrais envoyer une lettre.", "Je voudrais retirer une lettre.", "Je voudrais ouvrir une lettre."], a: 0, why: "<b>envoyer</b>." },
    { fase: "aplica", c: ["pb-banque"], k: "choice", es: true, say: "Il y a un distributeur près d'ici ?", ask: "Escucha. ¿Qué busca?", q: "Elige.", o: ["Un cajero", "Una ventanilla", "Un sobre"], a: 0, why: "<b>distributeur</b>." },
    { fase: "dominio", c: ["pb-poste"], k: "fill", ask: "Escribe «sello».", q: "Il faut un ___ pour la lettre.", acc: ["timbre"], why: "<b>timbre</b>." },
    { fase: "dominio", c: ["pb-poste"], k: "order", ask: "Ordena: «¿Cuánto cuesta enviar esta carta?».", tokens: ["Combien", "ça coûte", "pour envoyer", "cette lettre ?"], why: "<b>Combien ça coûte pour envoyer cette lettre ?</b>" },
    { fase: "dominio", c: ["pb-poste", "pb-banque"], k: "listen", say: "Je voudrais retirer de l'argent.", acc: ["Je voudrais retirer de l'argent."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais retirer de l'argent.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Colombie", "Europe"], previo: ["ce", "cette", "bien", "sûr", "payez", "près", "d'ici", "côté", "banque", "trois", "pour", "combien", "coûte", "retire", "compte", "il", "faut", "l'argent", "argent"] }
};

E["a1-hotel"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Réserver une chambre d'hôtel",
  objetivo: {
    que: "Vas a reservar una habitación con fórmulas formales y preguntar lo básico.",
    corto: "Reservar en el hotel.",
    podras: ["Decir Je voudrais réserver une chambre pour deux nuits.", "Preguntar Le petit-déjeuner est compris ?", "Responder C'est à quel nom ? — Au nom de…"],
    iconos: ["ic2/cofre", "ic2/moneda", "m2d/senalar"],
    previos: ["Je voudrais (lección 12) y la fecha (lección 19)."],
    capacidad: "Ahora puedes reservar alojamiento en francés."
  },
  requiere: R("ca-pedir", "cr-pedir", "da-forma", "vp-conj", "qu-mots"), recupera: ["cr-pedir", "da-forma"],
  conceptos: {
    "ho-reserver": { n: "Je voudrais réserver une chambre pour…", b: "voc" },
    "ho-recep": { n: "C'est à quel nom ? la clé, compris", b: "voc" }
  },
  video: {
    titulo: "En el hotel", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "une chambre double", seg: [
        { es: "Hola. Para reservar, siempre de usted y con voudrais." } ] },
      { v: "dos",
        a: { tag: "brusco", fr: "Je veux une chambre.", es: "quiero" },
        b: { tag: "cortés", fr: "Je voudrais une chambre.", es: "quisiera" },
        seg: [ { es: "Je veux suena brusco.", p: 1 }, { es: "Mejor:", p: 2 }, { fr: "Je voudrais une chambre.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Está incluido el desayuno?»", o: ["Le petit-déjeuner est compris ?", "Le petit-déjeuner est servi ?"], a: 0,
        bien: "¡Sí! Compris = incluido.", mal: "Incluido se dice compris.",
        seg: [ { es: "Pausa. Incluido." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une chambre simple", "une chambre double", "pour deux nuits", "compris", "la clé", "la réception"], seg: [
        { es: "Individual, doble, noches, incluido, llave y recepción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la recepción", img: "bg-paris", yo: "camila",
    escena: "Camila llega a un hotel en París.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je voudrais réserver une chambre double pour deux nuits.", "Buenos días, quisiera reservar una habitación doble para dos noches."],
      ["vendeur", "Bien sûr. C'est à quel nom ?", "Claro. ¿A nombre de quién?"],
      ["camila", "Au nom de Torres. Le petit-déjeuner est compris ?", "A nombre de Torres. ¿El desayuno está incluido?"],
      ["vendeur", "Oui, il est servi de sept heures à dix heures. Voici votre clé.", "Sí, se sirve de siete a diez. Aquí tiene su llave."]
    ],
    fijate: "Fíjate: réserver, à quel nom, compris, voici votre clé."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El hotel",
      idea: "Pedir: Je voudrais réserver une chambre pour… Preguntar: Le petit-déjeuner est compris ? Datos: C'est à quel nom ?",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "réserver", es: "reservar", ej: ["Je voudrais réserver une chambre pour ce soir.", "Quisiera reservar una habitación para esta noche."] },
        { fr: "une chambre simple", es: "una habitación individual" },
        { fr: "une chambre double", es: "una habitación doble" },
        { fr: "une nuit", es: "una noche", ej: ["Vous restez combien de nuits ?", "¿Cuántas noches se queda?"] },
        { fr: "le petit-déjeuner", es: "el desayuno" },
        { fr: "compris", es: "incluido" },
        { fr: "C'est à quel nom ?", es: "¿A nombre de quién?" },
        { fr: "Au nom de Torres.", es: "A nombre de Torres." },
        { fr: "la clé", es: "la llave", ej: ["Voici votre clé.", "Aquí tiene su llave."] },
        { fr: "la réception", es: "la recepción" },
        { fr: "l'ascenseur", es: "el ascensor" },
        { fr: "le séjour", es: "la estancia" },
        { fr: "libre", es: "libre, disponible", ej: ["Vous avez une chambre libre ?", "¿Tiene una habitación libre?"] }
      ],
      clave: "Quel est le prix de la chambre ? = ¿Cuál es el precio de la habitación?" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je veux une chambre.", "Je voudrais une chambre.", "Más cortés."], ["une chambre double pour une personne", "une chambre simple pour une personne", "Una persona: simple."]] }
  ],
  ejemplos: [
    { sit: "Reservas para tres noches.", resp: "Je voudrais réserver une chambre pour trois nuits.", pasos: ["pour + noches."], porque: "Duración." },
    { sit: "Preguntas el precio.", resp: "Quel est le prix de la chambre ?", pasos: ["Quel est le prix…"], porque: "Precio." },
    { sit: "«¿Tiene una habitación libre?»", resp: "Vous avez une chambre libre ?", pasos: ["libre."], porque: "Disponible." }
  ],
  comprueba: [
    { q: "«compris» significa…", o: ["incluido", "comprado"], a: 0, b: "voc", porque: "Incluido." },
    { q: "Para una persona pides…", o: ["une chambre simple", "une chambre double"], a: 0, b: "voc", porque: "Individual." },
    { q: "«la clé» es…", o: ["la llave", "la clave del wifi"], a: 0, b: "voc", porque: "Llave." }
  ],
  practica: [
    { fase: "guiada", c: ["ho-reserver"], k: "choice", ask: "Llegas a la recepción.", q: "Tú: «___»", o: ["Je voudrais une chambre pour deux nuits.", "Je veux chambre deux nuits.", "Une chambre, vite !"], a: 0, pista: "Cortés.", why: "<b>Je voudrais une chambre pour deux nuits.</b>" },
    { fase: "guiada", c: ["ho-recep"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["la chambre simple", "la habitación individual"], ["la clé", "la llave"], ["la réception", "la recepción"], ["l'ascenseur", "el ascensor"], ["le séjour", "la estancia"]], pista: "clé = llave.", why: "Hotel." },
    { fase: "guiada", c: ["ho-recep"], k: "choice", ask: "«C'est à quel nom ?»", q: "Tú: «___»", o: ["Au nom de Torres.", "C'est Torres nom.", "À Torres."], a: 0, pista: "Au nom de…", why: "<b>Au nom de Torres.</b>" },
    { fase: "indep", c: ["ho-reserver"], k: "fill", ask: "Escribe la preposición.", q: "Je voudrais réserver une chambre ___ trois nuits.", acc: ["pour"], why: "<b>pour</b>." },
    { fase: "indep", c: ["ho-reserver", "ho-recep"], k: "sort", ask: "¿Lo dice el cliente o la recepción?", q: "Clasifica.", cats: ["Cliente", "Recepción"], items: [["Je voudrais réserver.", 0], ["Le petit-déjeuner est compris ?", 0], ["Quel est le prix de la chambre ?", 0], ["C'est à quel nom ?", 1], ["Voici votre clé.", 1], ["Vous restez combien de nuits ?", 1]], why: "Roles." },
    { fase: "indep", c: ["ho-reserver"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais une chambre [double] pour une personne .", fix: "simple", why: "<b>simple</b>." },
    { fase: "aplica", c: ["ho-recep"], k: "choice", es: true, say: "Le petit-déjeuner est servi de sept heures à dix heures.", ask: "Escucha. ¿Cuándo es el desayuno?", q: "Elige.", o: ["De 7 a 10", "De 6 a 10", "De 7 a 12"], a: 0, why: "<b>sept</b> a <b>dix</b>." },
    { fase: "aplica", c: ["ho-reserver"], k: "fill", ask: "Escribe «reservar».", q: "Je voudrais ___ une chambre pour ce soir.", acc: ["réserver"], why: "<b>réserver</b>." },
    { fase: "dominio", c: ["ho-recep"], k: "choice", ask: "«¿Tiene una habitación libre?»", q: "«___»", o: ["Vous avez une chambre libre ?", "Vous avez une chambre compris ?"], a: 0, why: "<b>libre</b>." },
    { fase: "dominio", c: ["ho-reserver"], k: "order", ask: "Ordena: «¿Cuál es el precio de la habitación?».", tokens: ["Quel est", "le prix", "de la chambre", "?"], why: "<b>Quel est le prix de la chambre ?</b>" },
    { fase: "dominio", c: ["ho-reserver", "ho-recep"], k: "listen", say: "Je voudrais réserver une chambre double.", acc: ["Je voudrais réserver une chambre double."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais réserver une chambre double.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Torres", "Paris"], previo: ["bien", "sûr", "voici", "votre", "servi", "sept", "dix", "heures", "nuits", "deux", "trois", "ce", "soir", "prix", "quel", "personne", "restez", "combien", "veux", "vite"] }
};

E["a1-telephone"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Au téléphone : allô, c'est de la part de qui ?",
  objetivo: {
    que: "Vas a llamar por teléfono: saludar, pedir hablar con alguien y dejar un mensaje.",
    corto: "Llamar por teléfono.",
    podras: ["Decir Allô, c'est Camila.", "Pedir Je voudrais parler à Madame Dupont.", "Entender C'est de la part de qui ? Ne quittez pas."],
    iconos: ["ic2/amigos", "m2d/senalar", "ic2/mundo"],
    previos: ["Saludar (Primeros pasos) y la tecnología (Primeros pasos)."],
    capacidad: "Ahora puedes hacer una llamada en francés."
  },
  requiere: R("ca-pedir", "tc-voc", "vp-conj", "cs-tu"), recupera: ["tc-voc"],
  conceptos: {
    "te-appel": { n: "Allô ? C'est… Je voudrais parler à…", b: "gr" },
    "te-recep": { n: "C'est de la part de qui ? Ne quittez pas.", b: "gr" }
  },
  video: {
    titulo: "Al teléfono", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Allô ?", seg: [
        { es: "Hola. Allô solo se dice al teléfono." } ] },
      { v: "frase", filas: [
          { nota: "saludar", p: 1, partes: [["Allô, bonjour, c'est Camila.", "-", 1]] },
          { nota: "pedir", p: 2, partes: [["Je voudrais parler à Madame Dupont.", "-", 2]] },
          { nota: "esperar", p: 3, partes: [["Ne quittez pas.", "-", 3]] } ], seg: [
        { es: "Aló, habla Camila.", p: 1 }, { es: "Quisiera hablar con la señora Dupont.", p: 2 }, { es: "No cuelgue.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera hablar con el señor Martin.»", o: ["Je voudrais parler à Monsieur Martin.", "Je voudrais parler avec Monsieur Martin."], a: 0,
        bien: "¡Sí! Parler à.", mal: "Al teléfono: parler à quelqu'un.",
        seg: [ { es: "Pausa. Hablar con alguien." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Allô ?", "C'est de la part de qui ?", "Ne quittez pas.", "Il n'est pas là.", "laisser un message", "Je rappelle plus tard."], seg: [
        { es: "Y si no está, deja un mensaje.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una llamada", img: "bg-universidad", yo: "camila",
    escena: "Camila llama a la secretaría de la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Allô, bonjour, c'est Camila Torres. Je voudrais parler à Madame Dupont, s'il vous plaît.", "Aló, buenos días, habla Camila Torres. Quisiera hablar con la señora Dupont, por favor."],
      ["vendeur", "C'est de la part de qui ? — Ah, oui. Un instant, ne quittez pas.", "¿De parte de quién? — Ah, sí. Un momento, no cuelgue."],
      ["vendeur", "Elle est absente. Vous voulez laisser un message ?", "No está. ¿Quiere dejar un mensaje?"],
      ["camila", "Non, merci. Je rappelle plus tard.", "No, gracias. Vuelvo a llamar más tarde."]
    ],
    fijate: "Fíjate: parler à, ne quittez pas, je rappelle."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas del teléfono",
      idea: "Allô ? C'est… / Ici… Je voudrais parler à… — C'est de la part de qui ? — Ne quittez pas. Si no está: Il n'est pas là. Vous voulez laisser un message ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Quién"], [
        ["Allô, bonjour, c'est Marie.", "Aló, buenos días, habla Marie.", "llama"],
        ["Ici Paul.", "Habla Paul.", "llama"],
        ["Je voudrais parler à Madame Dupont.", "Quisiera hablar con la señora Dupont.", "llama"],
        ["C'est de la part de qui ?", "¿De parte de quién?", "responde"],
        ["Un instant, ne quittez pas.", "Un momento, no cuelgue.", "responde"],
        ["Il n'est pas là.", "No está.", "responde"],
        ["Elle est absente.", "No está (ausente).", "responde"],
        ["Vous voulez laisser un message ?", "¿Quiere dejar un mensaje?", "responde"],
        ["Je peux laisser un message ?", "¿Puedo dejar un mensaje?", "llama"],
        ["Je rappelle plus tard.", "Vuelvo a llamar más tarde.", "llama"],
        ["Je te rappelle.", "Te devuelvo la llamada.", "informal"],
        ["Salut, c'est moi !", "¡Hola, soy yo!", "informal"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je voudrais parler avec Madame Roux.", "Je voudrais parler à Madame Roux.", "parler à."], ["Je rapelle plus tard.", "Je rappelle plus tard.", "Doble p."]] }
  ],
  ejemplos: [
    { sit: "Contestas el teléfono.", resp: "Allô ?", pasos: ["Solo al teléfono."], porque: "Saludo." },
    { sit: "«¿De parte de quién?»", resp: "C'est de la part de qui ?", pasos: ["de la part de."], porque: "Recepción." },
    { sit: "«Vuelvo a llamar más tarde.»", resp: "Je rappelle plus tard.", pasos: ["rappeler."], porque: "Despedida." }
  ],
  comprueba: [
    { q: "«Ne quittez pas» significa…", o: ["No cuelgue.", "No se vaya de la ciudad."], a: 0, b: "gr", porque: "Esperar." },
    { q: "«Allô» se usa…", o: ["solo al teléfono", "en la calle"], a: 0, b: "gr", porque: "Teléfono." },
    { q: "Hablar con alguien se dice parler…", o: ["à", "avec"], a: 0, b: "gr", porque: "parler à." }
  ],
  practica: [
    { fase: "guiada", c: ["te-recep"], k: "choice", es: true, say: "C'est de la part de qui ?", ask: "Escucha. ¿Qué te preguntan?", q: "Elige.", o: ["¿De parte de quién?", "¿Dónde está?", "¿Quiere dejar un mensaje?"], a: 0, pista: "de la part.", why: "<b>de la part de qui</b>." },
    { fase: "guiada", c: ["te-appel"], k: "choice", ask: "«Quisiera hablar con la señora Petit.»", q: "«Je voudrais parler ___ Madame Petit.»", o: ["à", "avec", "de"], a: 0, pista: "parler…", why: "<b>parler à</b>." },
    { fase: "guiada", c: ["te-appel", "te-recep"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Allô ?", "¿Aló?"], ["Ici Paul.", "Habla Paul."], ["Il n'est pas là.", "No está."], ["Ne quittez pas.", "No cuelgue."]], pista: "Ici = habla.", why: "Teléfono." },
    { fase: "indep", c: ["te-appel"], k: "fill", ask: "Escribe «vuelvo a llamar».", q: "Je ___ plus tard.", acc: ["rappelle"], why: "<b>rappelle</b>." },
    { fase: "indep", c: ["te-appel"], k: "spot", ask: "Encuentra el error.", s: "Bonjour , je voudrais parler [avec] Madame Roux .", fix: "à", why: "<b>à</b>." },
    { fase: "indep", c: ["te-appel", "te-recep"], k: "sort", ask: "¿Formal o informal?", q: "Clasifica.", cats: ["Formal", "Informal"], items: [["Je voudrais parler à Madame Dupont.", 0], ["Ne quittez pas.", 0], ["Vous voulez laisser un message ?", 0], ["Salut, c'est moi !", 1], ["Je te rappelle.", 1]], why: "Registro." },
    { fase: "aplica", c: ["te-recep"], k: "choice", ask: "«Elle est absente. Vous voulez laisser un message ?»", q: "Tú: «___»", o: ["Non, merci. Je rappelle plus tard.", "Ne quittez pas.", "C'est de la part de qui ?"], a: 0, why: "Respondes como quien llama." },
    { fase: "aplica", c: ["te-appel"], k: "fill", ask: "Escribe el saludo del teléfono.", q: "___ , bonjour, c'est Paul.", acc: ["Allô"], why: "<b>Allô</b>." },
    { fase: "dominio", c: ["te-recep"], k: "choice", ask: "«¿De parte de quién?»", q: "«___»", o: ["C'est de la part de qui ?", "C'est qui la part ?", "De qui c'est ?"], a: 0, why: "<b>C'est de la part de qui ?</b>" },
    { fase: "dominio", c: ["te-recep"], k: "order", ask: "Ordena: «Un momento, no cuelgue».", tokens: ["Un instant,", "ne quittez", "pas."], why: "<b>Un instant, ne quittez pas.</b>" },
    { fase: "dominio", c: ["te-appel", "te-recep"], k: "listen", say: "Bonjour, je voudrais parler à Madame Dupont, s'il vous plaît.", acc: ["Bonjour, je voudrais parler à Madame Dupont, s'il vous plaît.", "Bonjour je voudrais parler à Madame Dupont s'il vous plaît."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour, je voudrais parler à Madame Dupont, s'il vous plaît.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Torres", "Marie", "Paul", "Dupont", "Petit", "Roux", "Martin"], previo: ["madame", "monsieur", "ah", "instant", "voulez", "peux", "plus", "tard", "moi", "salut", "non", "merci", "message", "laisser", "qui"] }
};

E["a1-ordinaux"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Premier, deuxième, troisième : les ordinaux",
  objetivo: {
    que: "Vas a formar los ordinales con -ième y usarlos para pisos, calles y veces.",
    corto: "Primero, segundo, tercero…",
    podras: ["Formar deuxième, troisième, dixième.", "Escribir bien cinquième, neuvième, quatrième.", "Usar premier / première y le rez-de-chaussée."],
    iconos: ["ic2/trofeo", "m2d/senalar", "ic2/lapiz"],
    previos: ["Los números (lecciones 2, 17 y 18)."],
    capacidad: "Ahora puedes decir el piso, la calle o el puesto."
  },
  requiere: R("na-num", "n7-70", "da-forma", "ch-indic"), recupera: ["na-num"],
  conceptos: {
    "or-ieme": { n: "número + -ième; cinquième, neuvième", b: "gr" },
    "or-premier": { n: "premier / première; le rez-de-chaussée", b: "gr" }
  },
  video: {
    titulo: "Los ordinales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "le troisième étage", seg: [
        { es: "Hola. Casi todos se forman igual: número más ième." } ] },
      { v: "frase", filas: [
          { nota: "normal", p: 1, partes: [["deux → deuxième", "-", 1]] },
          { nota: "quita la e", p: 2, partes: [["quatre → quatrième", "-", 2]] },
          { nota: "cambia", p: 3, partes: [["cinq → cinquième · neuf → neuvième", "-", 3]] } ], seg: [
        { es: "Dos, segundo.", p: 1 }, { es: "Si termina en e, se quita.", p: 2 }, { es: "Cinco añade u; nueve cambia a v.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la primera vez»", o: ["la première fois", "la premier fois"], a: 0,
        bien: "¡Sí! Femenino: première.", mal: "Fois es femenino: la première fois.",
        seg: [ { es: "Pausa. La primera vez." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["premier", "première", "deuxième", "troisième", "cinquième", "neuvième", "le rez-de-chaussée"], seg: [
        { es: "Y la planta baja es el rez-de-chaussée.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿En qué piso?", img: "bg-universidad", yo: "camila",
    escena: "Camila busca su salón en la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, la salle de cours est à quel étage ?", "Disculpe, ¿en qué piso está el salón?"],
      ["hugo", "Au deuxième étage. La bibliothèque est au rez-de-chaussée.", "En el segundo piso. La biblioteca está en la planta baja."],
      ["camila", "Merci ! C'est la première fois que je viens ici.", "¡Gracias! Es la primera vez que vengo aquí."],
      ["hugo", "Mon bureau est au cinquième étage.", "Mi oficina está en el quinto piso."]
    ],
    fijate: "Fíjate: au deuxième étage, la première fois."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar los ordinales",
      idea: "Número + -ième: deuxième, troisième, dixième. Si termina en -e, se quita: quatrième. cinq → cinquième, neuf → neuvième. 1.º: premier / première.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["premier / première", "primero / primera", "irregular"],
        ["deuxième", "segundo", "+ ième"],
        ["troisième", "tercero", "+ ième"],
        ["quatrième", "cuarto", "sin e"],
        ["cinquième", "quinto", "+ u"],
        ["sixième", "sexto", "+ ième"],
        ["neuvième", "noveno", "f → v"],
        ["dixième", "décimo", "+ ième"],
        ["onzième", "undécimo", "sin e"],
        ["vingtième", "vigésimo", "+ ième"],
        ["J'habite au troisième étage.", "Vivo en el tercer piso.", "piso"],
        ["C'est la première fois.", "Es la primera vez.", "fem."],
        ["au rez-de-chaussée", "en la planta baja", "piso 0"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["cinquème","cinquième","Sin u no: cinquième."], ["premièr","première","Termina en -ère."], ["nevième","neuvième","neuf → neuv."], ["le cinqième", "le cinquième", "Cinq añade u."], ["la premier fois", "la première fois", "Femenino."], ["le neufième", "le neuvième", "f → v."], ["le quatreième", "le quatrième", "Se quita la e."]] }
  ],
  ejemplos: [
    { sit: "«Vivo en el quinto piso.»", resp: "J'habite au cinquième étage.", pasos: ["cinq + u + ième."], porque: "Cambio." },
    { sit: "«Tome la tercera calle a la derecha.»", resp: "Prenez la troisième rue à droite.", pasos: ["trois + ième."], porque: "Calle." },
    { sit: "«Es la primera vez.»", resp: "C'est la première fois.", pasos: ["fois es femenino."], porque: "première." }
  ],
  comprueba: [
    { q: "5.º se escribe…", o: ["cinquième", "cinqième"], a: 0, b: "gr", porque: "Con u." },
    { q: "9.º se escribe…", o: ["neuvième", "neufième"], a: 0, b: "gr", porque: "f → v." },
    { q: "La planta baja es…", o: ["le rez-de-chaussée", "le premier étage"], a: 0, b: "gr", porque: "Piso 0." }
  ],
  practica: [
    { fase: "guiada", c: ["or-ieme"], k: "choice", ask: "5.º", q: "«___»", o: ["cinquième", "cinqième", "cinquème"], a: 0, pista: "Con u.", why: "<b>cinquième</b>." },
    { fase: "guiada", c: ["or-ieme"], k: "match", ask: "Une cada número con su ordinal.", q: "Número → ordinal", pairs: [["2", "deuxième"], ["3", "troisième"], ["10", "dixième"], ["11", "onzième"], ["20", "vingtième"]], pista: "+ ième.", why: "Ordinales." },
    { fase: "guiada", c: ["or-premier"], k: "choice", ask: "«la primera lección»", q: "«la ___ leçon»", o: ["première", "premier", "premièr"], a: 0, pista: "Femenino.", why: "<b>première</b>." },
    { fase: "indep", c: ["or-ieme"], k: "fill", ask: "Escribe 4.º", q: "J'habite au ___ étage.", acc: ["quatrième"], why: "<b>quatrième</b>." },
    { fase: "indep", c: ["or-premier"], k: "fill", ask: "Escribe 1.º (masculino).", q: "C'est le ___ jour du mois.", acc: ["premier"], why: "<b>premier</b>." },
    { fase: "indep", c: ["or-premier"], k: "spot", ask: "Encuentra el error.", s: "C'est la [premier] fois que je prends l'avion .", fix: "première", why: "<b>première</b>." },
    { fase: "aplica", c: ["or-ieme"], k: "choice", es: true, say: "Mon bureau est au sixième étage.", ask: "Escucha. ¿En qué piso está la oficina?", q: "Elige.", o: ["6.º", "16.º", "10.º"], a: 0, why: "<b>sixième</b>." },
    { fase: "aplica", c: ["or-ieme"], k: "choice", ask: "9.º", q: "«___»", o: ["neuvième", "neufième", "nevième"], a: 0, why: "<b>neuvième</b>." },
    { fase: "dominio", c: ["or-ieme"], k: "order", ask: "Ordena: «Tome la quinta calle a la derecha».", tokens: ["Prenez", "la cinquième", "rue", "à droite."], why: "<b>Prenez la cinquième rue à droite.</b>" },
    { fase: "dominio", c: ["or-premier"], k: "fill", ask: "Escribe «primera».", q: "C'est la ___ fois que je viens.", acc: ["première"], why: "<b>première</b>." },
    { fase: "dominio", c: ["or-ieme", "or-premier"], k: "listen", say: "La salle de cours est au deuxième étage.", acc: ["La salle de cours est au deuxième étage."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La salle de cours est au deuxième étage.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["salle", "cours", "étage", "quel", "bibliothèque", "fois", "viens", "ici", "bureau", "mon", "jour", "mois", "leçon", "avion", "prends", "habite", "rue", "droite", "que"] }
};

/* ================================ A1·8 · A la mesa ================================ */

E["a1-aliments"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les aliments et les boissons",
  objetivo: {
    que: "Vas a nombrar comidas y bebidas con su artículo, porque el género no siempre es el del español.",
    corto: "La comida con su género.",
    podras: ["Nombrar frutas, verduras y bebidas.", "Recordar le lait, la viande, le sel.", "Decir lo que comes y bebes."],
    iconos: ["ic2/cofre", "m2d/celebrar", "ic2/moneda"],
    previos: ["Comer y beber (Primeros pasos) y las frutas (Primeros pasos)."],
    capacidad: "Ahora puedes hablar de lo que comes cada día."
  },
  requiere: R("mg-voc", "mg-du", "bo-voc", "fr-voc", "ai-formas"), recupera: ["mg-voc", "bo-voc"],
  conceptos: {
    "al-genre": { n: "le lait, la viande, le sel: género francés", b: "voc" },
    "al-cat": { n: "frutas, verduras y bebidas", b: "voc" }
  },
  video: {
    titulo: "La comida", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "le lait · la viande", seg: [
        { es: "Hola. Aprende cada comida con su artículo." } ] },
      { v: "dos",
        a: { tag: "en español, femenino", fr: "le lait · le sel", es: "la leche · la sal" },
        b: { tag: "igual que en español", fr: "la viande · la salade", es: "la carne · la ensalada" },
        seg: [ { es: "Cuidado: la leche y la sal son masculinas.", p: 1 }, { fr: "le lait, le sel", p: 1 }, { es: "Otras coinciden:", p: 2 }, { fr: "la viande, la salade", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la leche»", o: ["le lait", "la lait"], a: 0,
        bien: "¡Sí! Masculino.", mal: "Leche es masculino: le lait.",
        seg: [ { es: "Pausa. La leche." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le pain", "le fromage", "le poisson", "la pomme de terre", "les haricots", "le jus d'orange"], seg: [
        { es: "Pan, queso, pescado, papa, fríjoles y jugo de naranja.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la cocina", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan el desayuno.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux du thé ou du café ?", "¿Quieres té o café?"],
      ["camila", "Du café, merci. Le lait est dans le frigo ?", "Café, gracias. ¿La leche está en la nevera?"],
      ["hugo", "Oui. Je mange une pomme tous les matins.", "Sí. Como una manzana todas las mañanas."],
      ["camila", "Moi, j'aime les fruits et les légumes. Le fromage est délicieux !", "A mí me gustan las frutas y las verduras. ¡El queso está delicioso!"]
    ],
    fijate: "Fíjate: le lait, les légumes, le fromage."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Comidas y bebidas",
      idea: "Cada palabra con su artículo: le lait (la leche), le sel (la sal), la viande (la carne).",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "le lait", es: "la leche", ej: ["Le lait est dans le frigo.", "La leche está en la nevera."] },
        { fr: "le sel", es: "la sal" },
        { fr: "le beurre", es: "la mantequilla" },
        { fr: "le sucre", es: "el azúcar" },
        { fr: "le poisson", es: "el pescado" },
        { fr: "la pomme de terre", es: "la papa" },
        { fr: "la carotte", es: "la zanahoria" },
        { fr: "les haricots", es: "los fríjoles" },
        { fr: "l'oignon", es: "la cebolla" },
        { fr: "le raisin", es: "las uvas" },
        { fr: "les légumes", es: "las verduras", ej: ["J'aime les fruits et les légumes.", "Me gustan las frutas y las verduras."] },
        { fr: "le jus d'orange", es: "el jugo de naranja", ej: ["Elle boit du jus d'orange.", "Toma jugo de naranja."] },
        { fr: "le vin", es: "el vino" },
        { fr: "un verre d'eau", es: "un vaso de agua" }
      ],
      clave: "le frigo = la nevera; délicieux = delicioso." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la lait", "le lait", "Masculino."], ["la sel", "le sel", "Masculino."], ["le poison", "le poisson", "poison es veneno; pescado lleva ss."]] }
  ],
  ejemplos: [
    { sit: "«Tomo un vaso de agua.»", resp: "Je bois un verre d'eau.", pasos: ["un verre d'eau."], porque: "Bebida." },
    { sit: "«Como pan con mantequilla.»", resp: "Je mange du pain avec du beurre.", pasos: ["le beurre → du beurre."], porque: "Masculino." },
    { sit: "«El queso está delicioso.»", resp: "Le fromage est délicieux.", pasos: ["le fromage."], porque: "Masculino." }
  ],
  comprueba: [
    { q: "La leche en francés es…", o: ["masculina: le lait", "femenina: la lait"], a: 0, b: "voc", porque: "le lait." },
    { q: "«le poisson» es…", o: ["el pescado", "el veneno"], a: 0, b: "voc", porque: "ss." },
    { q: "«la pomme de terre» es…", o: ["la papa", "la manzana"], a: 0, b: "voc", porque: "Manzana de tierra." }
  ],
  practica: [
    { fase: "guiada", c: ["al-genre"], k: "choice", ask: "«la leche»", q: "«___ lait»", o: ["le", "la", "l'"], a: 0, pista: "Masculino.", why: "<b>le lait</b>." },
    { fase: "guiada", c: ["al-genre"], k: "match", ask: "Une cada comida.", q: "Francés → español", pairs: [["le fromage", "el queso"], ["le poulet", "el pollo"], ["le beurre", "la mantequilla"], ["le sucre", "el azúcar"], ["le riz", "el arroz"]], pista: "beurre = mantequilla.", why: "Comidas." },
    { fase: "guiada", c: ["al-cat"], k: "sort", ask: "¿Fruta o verdura?", q: "Clasifica.", cats: ["Fruta", "Verdura"], items: [["la pomme", 0], ["la fraise", 0], ["la banane", 0], ["le raisin", 0], ["la carotte", 1], ["les haricots", 1], ["la salade", 1], ["l'oignon", 1]], pista: "fraise = fresa.", why: "Frutas y verduras." },
    { fase: "indep", c: ["al-cat"], k: "fill", ask: "Escribe «agua».", q: "Je bois un verre d'___ .", acc: ["eau"], why: "<b>eau</b>." },
    { fase: "indep", c: ["al-genre"], k: "fill", ask: "Escribe «pan».", q: "Je mange du ___ avec du beurre.", acc: ["pain"], why: "<b>pain</b>." },
    { fase: "indep", c: ["al-genre"], k: "spot", ask: "Encuentra el error.", s: "Il y a du [poison] au menu .", fix: "poisson", why: "<b>poisson</b>." },
    { fase: "aplica", c: ["al-cat"], k: "choice", ask: "Quieres una bebida.", q: "«Je voudrais ___»", o: ["un jus d'orange", "une pomme de terre", "du beurre"], a: 0, why: "<b>un jus d'orange</b>." },
    { fase: "aplica", c: ["al-genre"], k: "choice", es: true, say: "Le lait est dans le frigo.", ask: "Escucha. ¿Dónde está la leche?", q: "Elige.", o: ["En la nevera", "En la mesa", "En el bolso"], a: 0, why: "<b>le frigo</b>." },
    { fase: "dominio", c: ["al-cat"], k: "fill", ask: "Escribe «frutas».", q: "Les pommes et les fraises sont des ___ .", acc: ["fruits"], why: "<b>fruits</b>." },
    { fase: "dominio", c: ["al-genre"], k: "order", ask: "Ordena: «Me gusta el queso francés».", tokens: ["J'aime", "le fromage", "français."], why: "<b>J'aime le fromage français.</b>" },
    { fase: "dominio", c: ["al-genre", "al-cat"], k: "listen", say: "Au marché, j'achète des tomates et des pommes.", acc: ["Au marché, j'achète des tomates et des pommes.", "Au marché j'achète des tomates et des pommes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au marché, j'achète des tomates et des pommes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["thé", "café", "frigo", "tous", "matins", "moi", "délicieux", "fruits", "pomme", "pommes", "fraises", "fraise", "banane", "salade", "tomates", "marché", "j'achète", "menu", "poulet", "riz", "pain", "eau", "verre", "bois", "mange", "français", "fromage"] }
};

E["a1-partitifs-intro"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Du pain, de la confiture, de l'eau : les partitifs",
  objetivo: {
    que: "Vas a usar du, de la, de l' y des para cantidades que no cuentas: je mange du pain.",
    corto: "du, de la, de l', des.",
    podras: ["Elegir du / de la / de l' según el género.", "Usar des con el plural.", "No dejar el nombre solo: je mange du riz."],
    iconos: ["ic2/cofre", "m2d/senalar", "ic2/bombilla"],
    previos: ["Je mange du… (Primeros pasos) y las comidas (lección 43)."],
    capacidad: "Ahora puedes decir lo que comes y bebes sin errores de artículo."
  },
  requiere: R("mg-du", "al-genre", "bo-bois"), recupera: ["mg-du"],
  conceptos: {
    "pa2-forma": { n: "du (masc.), de la (fem.), de l' (vocal), des (plural)", b: "gr" },
    "pa2-gusto": { n: "con aimer: le / la / les, no du", b: "gr" }
  },
  video: {
    titulo: "Los partitivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "du pain", seg: [
        { es: "Hola. En español dices «como pan». En francés, el pan necesita un artículo." } ] },
      { v: "frase", filas: [
          { nota: "masculino", p: 1, partes: [["Je mange du riz.", "-", 1]] },
          { nota: "femenino", p: 2, partes: [["Tu veux de la soupe ?", "-", 2]] },
          { nota: "vocal", p: 3, partes: [["Il boit de l'eau.", "-", 3]] } ], seg: [
        { es: "Masculino, du.", p: 1 }, { es: "Femenino, de la.", p: 2 }, { es: "Con vocal, de ele.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me encanta el chocolate.»", o: ["J'adore le chocolat.", "J'adore du chocolat."], a: 0,
        bien: "¡Sí! Con gustos, le.", mal: "Con aimer y adorer va el artículo definido: le chocolat.",
        seg: [ { es: "Pausa. Los gustos son distintos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["du fromage", "de la viande", "de l'huile", "des pâtes", "J'aime le café."], seg: [
        { es: "Para comer, partitivo; para gustos, le, la, les.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Qué comemos?", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo planean la cena.",
    pj: PJ,
    lineas: [
      ["hugo", "On mange des pâtes ce soir ?", "¿Comemos pasta esta noche?"],
      ["camila", "Oui ! Avec du fromage et de la salade.", "¡Sí! Con queso y ensalada."],
      ["hugo", "Tu veux de la tarte après ?", "¿Quieres tarta después?"],
      ["camila", "Non, merci. Je bois de l'eau. J'adore le chocolat, mais pas ce soir.", "No, gracias. Tomo agua. Me encanta el chocolate, pero esta noche no."]
    ],
    fijate: "Fíjate: du fromage, de la salade, de l'eau, pero j'adore le chocolat."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los partitivos",
      idea: "du + masculino, de la + femenino, de l' + vocal, des + plural. Con aimer, adorer, détester: le, la, les.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Je mange du riz.", "Como arroz.", "du"],
        ["Le matin, je bois du café.", "Por la mañana tomo café.", "du"],
        ["Tu veux de la soupe ?", "¿Quieres sopa?", "de la"],
        ["Tu veux de la tarte ?", "¿Quieres tarta?", "de la"],
        ["Il boit de l'eau.", "Toma agua.", "de l'"],
        ["de l'huile", "aceite", "de l'"],
        ["On mange des pâtes ce soir.", "Esta noche comemos pasta.", "des"],
        ["On achète des fraises.", "Compramos fresas.", "des"],
        ["J'adore le chocolat.", "Me encanta el chocolate.", "gusto: le"]
      ]],
      ej: [["du beurre", "mantequilla"], ["de la crème", "crema"], ["de la confiture", "mermelada"], ["du lait chaud", "leche caliente"], ["des frites", "papas fritas"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je mange pain.", "Je mange du pain.", "El nombre no va solo."], ["Je bois de lait.", "Je bois du lait.", "Masculino: du."], ["J'adore du chocolat.", "J'adore le chocolat.", "Gusto: le."]] }
  ],
  ejemplos: [
    { sit: "«Como pasta.»", resp: "Je mange des pâtes.", pasos: ["Plural → des."], porque: "Plural." },
    { sit: "«¿Quieres sopa?»", resp: "Tu veux de la soupe ?", pasos: ["la soupe → de la."], porque: "Femenino." },
    { sit: "«Quisiera pan, queso y agua.»", resp: "Je voudrais du pain, du fromage et de l'eau.", pasos: ["du, du, de l'."], porque: "Cada uno el suyo." }
  ],
  comprueba: [
    { q: "Con un nombre masculino se usa…", o: ["du", "de la"], a: 0, b: "gr", porque: "du." },
    { q: "Delante de vocal se usa…", o: ["de l'", "du"], a: 0, b: "gr", porque: "de l'." },
    { q: "Con aimer se usa…", o: ["le / la / les", "du / de la"], a: 0, b: "gr", porque: "Gusto." }
  ],
  practica: [
    { fase: "guiada", c: ["pa2-forma"], k: "choice", ask: "«Como arroz.»", q: "«Je mange ___ riz.»", o: ["du", "de la", "des"], a: 0, pista: "Masculino.", why: "<b>du riz</b>." },
    { fase: "guiada", c: ["pa2-forma"], k: "choice", ask: "«Toma agua.»", q: "«Elle boit ___ eau.»", o: ["de l'", "du", "de la"], a: 0, pista: "Vocal.", why: "<b>de l'eau</b>." },
    { fase: "guiada", c: ["pa2-forma"], k: "sort", ask: "¿du o de la?", q: "Clasifica.", cats: ["du", "de la"], items: [["pain", 0], ["fromage", 0], ["beurre", 0], ["poulet", 0], ["viande", 1], ["salade", 1], ["confiture", 1], ["crème", 1]], pista: "Mira el género.", why: "Género." },
    { fase: "indep", c: ["pa2-forma"], k: "fill", ask: "Escribe el partitivo (la soupe).", q: "Tu veux ___ soupe ?", acc: ["de la"], why: "<b>de la</b>." },
    { fase: "indep", c: ["pa2-forma"], k: "fill", ask: "Escribe el partitivo (les fraises).", q: "On achète ___ fraises.", acc: ["des"], why: "<b>des</b>." },
    { fase: "indep", c: ["pa2-forma"], k: "spot", ask: "Encuentra el error.", s: "Le matin , je bois [de] lait chaud .", fix: "du", why: "<b>du lait</b>." },
    { fase: "aplica", c: ["pa2-gusto"], k: "choice", ask: "«Me encanta el chocolate.»", q: "«J'adore ___ chocolat.»", o: ["le", "du", "de"], a: 0, why: "Gusto: <b>le</b>." },
    { fase: "aplica", c: ["pa2-forma"], k: "match", ask: "Une cada comida con su partitivo.", q: "Comida → partitivo", pairs: [["huile", "de l'"], ["sucre", "du"], ["tarte", "de la"], ["pâtes", "des"]], why: "Partitivos." },
    { fase: "dominio", c: ["pa2-forma"], k: "order", ask: "Ordena: «Comemos pollo con arroz».", tokens: ["On mange", "du poulet", "avec", "du riz."], why: "<b>On mange du poulet avec du riz.</b>" },
    { fase: "dominio", c: ["pa2-gusto", "pa2-forma"], k: "choice", ask: "«Como pasta.»", q: "«___»", o: ["Je mange des pâtes.", "Je mange pâtes.", "Je mange les pâtes."], a: 0, why: "<b>des pâtes</b>." },
    { fase: "dominio", c: ["pa2-forma", "pa2-gusto"], k: "listen", say: "Je voudrais du pain, du fromage et de l'eau.", acc: ["Je voudrais du pain, du fromage et de l'eau.", "Je voudrais du pain du fromage et de l'eau."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais du pain, du fromage et de l'eau.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["pâtes", "ce", "soir", "avec", "fromage", "salade", "tarte", "après", "chocolat", "mais", "matin", "riz", "soupe", "eau", "huile", "fraises", "achète", "pain", "beurre", "poulet", "viande", "crème", "confiture", "sucre", "lait", "chaud", "café", "frites", "boit", "bois", "mange"] }
};

E["a1-pas-de"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "La négation avec les quantités : pas de, pas d'",
  objetivo: {
    que: "Vas a negar cantidades: en negación, un, une, des, du, de la y de l' se vuelven de (d').",
    corto: "Je n'ai pas de…",
    podras: ["Decir Je n'ai pas de voiture.", "Decir Il n'y a pas d'eau.", "Saber cuándo no cambia: ce n'est pas un, je n'aime pas le."],
    iconos: ["ic2/bombilla", "m2d/pensativo", "ic2/cofre"],
    previos: ["ne… pas (Primeros pasos) y los partitivos (lección 44)."],
    capacidad: "Ahora puedes decir lo que no tienes y lo que no hay."
  },
  requiere: R("pa2-forma", "pa2-gusto", "np-regla", "np-vocal", "ci-ilya", "ci-cest"), recupera: ["pa2-forma", "np-regla"],
  conceptos: {
    "pd-de": { n: "pas de / pas d' tras negación", b: "gr" },
    "pd-excep": { n: "no cambia: ce n'est pas un, je n'aime pas le", b: "gr" }
  },
  video: {
    titulo: "pas de", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Je n'ai pas de voiture.", seg: [
        { es: "Hola. Al negar una cantidad, todo se vuelve de." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Je bois du café.", es: "du" },
        b: { tag: "negativo", fr: "Je ne bois pas de café.", es: "de" },
        seg: [ { es: "Tomo café:", p: 1 }, { fr: "Je bois du café.", p: 1 }, { es: "No tomo café:", p: 2 }, { fr: "Je ne bois pas de café.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No es un problema.»", o: ["Ce n'est pas un problème.", "Ce n'est pas de problème."], a: 0,
        bien: "¡Sí! Con être no cambia.", mal: "Con être el artículo se queda: ce n'est pas un problème.",
        seg: [ { es: "Pausa. Con ser, ¿cambia?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pas de pain", "pas d'eau", "pas de frères", "Ce n'est pas un…", "Je n'aime pas le…"], seg: [
        { es: "Con être y con los gustos, no cambia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La nevera vacía", img: "bg-cafe", yo: "camila",
    escena: "Camila abre la nevera.",
    pj: PJ,
    lineas: [
      ["camila", "Il n'y a pas de lait dans le frigo !", "¡No hay leche en la nevera!"],
      ["hugo", "Et il n'y a pas d'eau. Je n'ai pas de temps pour faire les courses.", "Y no hay agua. No tengo tiempo para hacer las compras."],
      ["camila", "Ce n'est pas un problème. Je vais au marché.", "No es un problema. Voy al mercado."],
      ["hugo", "Merci ! Mais je n'aime pas le poisson, d'accord ?", "¡Gracias! Pero no me gusta el pescado, ¿vale?"]
    ],
    fijate: "Fíjate: pas de lait, pas d'eau, pero ce n'est pas un, je n'aime pas le."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "pas de",
      idea: "un / une / des / du / de la / de l' → de (d') en negación. Con être y con le / la / les no cambia.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je n'ai pas de voiture.", "No tengo carro.", "une → de"],
        ["Je n'ai pas de frères.", "No tengo hermanos.", "des → de"],
        ["Je ne bois pas de café.", "No tomo café.", "du → de"],
        ["Il ne mange pas de viande.", "No come carne.", "de la → de"],
        ["Il n'y a pas d'eau.", "No hay agua.", "de l' → d'"],
        ["Nous n'avons pas d'enfants.", "No tenemos hijos.", "des → d'"],
        ["Je n'ai pas de temps.", "No tengo tiempo.", "du → de"],
        ["Ce n'est pas un problème.", "No es un problema.", "être: no cambia"],
        ["Ce n'est pas un livre, c'est un cahier.", "No es un libro, es un cuaderno.", "être: no cambia"],
        ["Je n'aime pas le poisson.", "No me gusta el pescado.", "gusto: no cambia"]
      ]],
      ej: [["Je n'ai pas de vélo.", "No tengo bicicleta."], ["Elle n'a pas de cousins.", "No tiene primos."], ["Ce n'est pas un sac.", "No es un bolso."], ["Je n'aime pas le thé.", "No me gusta el té."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'ai pas des amis ici.", "Je n'ai pas d'amis ici.", "des → d'."], ["Nous n'avons pas du pain.", "Nous n'avons pas de pain.", "du → de."], ["Ce n'est pas de problème.", "Ce n'est pas un problème.", "Con être no cambia."]] }
  ],
  ejemplos: [
    { sit: "«No hay pan.»", resp: "Il n'y a pas de pain.", pasos: ["du → de."], porque: "Negación." },
    { sit: "«No tenemos hijos.»", resp: "Nous n'avons pas d'enfants.", pasos: ["Vocal → d'."], porque: "Elisión." },
    { sit: "«No me gusta el té.»", resp: "Je n'aime pas le thé.", pasos: ["Gusto → le."], porque: "No cambia." }
  ],
  comprueba: [
    { q: "En negación, du se vuelve…", o: ["de", "le"], a: 0, b: "gr", porque: "de." },
    { q: "Con être, el artículo…", o: ["no cambia", "se vuelve de"], a: 0, b: "gr", porque: "No cambia." },
    { q: "Con je n'aime pas, el artículo…", o: ["no cambia", "se vuelve de"], a: 0, b: "gr", porque: "Gusto." }
  ],
  practica: [
    { fase: "guiada", c: ["pd-de"], k: "choice", ask: "«No tengo carro.»", q: "«Je n'ai pas ___ voiture.»", o: ["de", "une", "la"], a: 0, pista: "Negación.", why: "<b>pas de</b>." },
    { fase: "guiada", c: ["pd-excep"], k: "choice", ask: "«No es un problema.»", q: "«Ce n'est pas ___ problème.»", o: ["un", "de", "d'"], a: 0, pista: "Con être.", why: "<b>un</b>: con être no cambia." },
    { fase: "guiada", c: ["pd-de"], k: "match", ask: "Une cada frase con su negación.", q: "Afirmativo → negativo", pairs: [["J'ai un vélo.", "Je n'ai pas de vélo."], ["Il boit du café.", "Il ne boit pas de café."], ["Elle a des cousins.", "Elle n'a pas de cousins."], ["C'est un sac.", "Ce n'est pas un sac."]], pista: "Con être no cambia.", why: "Negación." },
    { fase: "indep", c: ["pd-de"], k: "fill", ask: "Completa.", q: "Il n'y a pas ___ eau dans la bouteille.", acc: ["d'"], why: "<b>d'</b>." },
    { fase: "indep", c: ["pd-excep"], k: "fill", ask: "Escribe el artículo (el).", q: "Je n'aime pas ___ poisson.", acc: ["le"], why: "<b>le</b>." },
    { fase: "indep", c: ["pd-de"], k: "spot", ask: "Encuentra el error.", s: "Désolé , nous n'avons pas [du] pain aujourd'hui .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["pd-de", "pd-excep"], k: "sort", ask: "¿Cambia a de o no?", q: "Clasifica.", cats: ["Cambia a de / d'", "No cambia"], items: [["Je n'ai pas … chat.", 0], ["Il n'y a pas … lait.", 0], ["Elle ne boit pas … eau.", 0], ["Ce n'est pas … stylo.", 1], ["Je n'aime pas … thé.", 1]], why: "être y gustos no cambian." },
    { fase: "aplica", c: ["pd-de"], k: "choice", ask: "«No tengo tiempo.»", q: "«___»", o: ["Je n'ai pas de temps.", "Je n'ai pas du temps.", "Je n'ai pas le temps de."], a: 0, why: "<b>pas de temps</b>." },
    { fase: "dominio", c: ["pd-de"], k: "fill", ask: "Completa.", q: "Il ne mange pas ___ viande.", acc: ["de"], why: "<b>de</b>." },
    { fase: "dominio", c: ["pd-de"], k: "order", ask: "Ordena: «No tenemos hijos».", tokens: ["Nous", "n'avons pas", "d'enfants."], why: "<b>Nous n'avons pas d'enfants.</b>" },
    { fase: "dominio", c: ["pd-de", "pd-excep"], k: "listen", say: "Il n'y a pas de lait dans le frigo.", acc: ["Il n'y a pas de lait dans le frigo."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il n'y a pas de lait dans le frigo.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["lait", "frigo", "eau", "temps", "pour", "faire", "courses", "problème", "marché", "merci", "mais", "poisson", "d'accord", "voiture", "frères", "café", "viande", "enfants", "livre", "cahier", "vélo", "cousins", "sac", "thé", "amis", "ici", "pain", "désolé", "aujourd'hui", "bouteille", "chat", "stylo", "boit", "bois", "mange", "avons"] }
};

E["a1-repas"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les repas de la journée",
  objetivo: {
    que: "Vas a nombrar las comidas del día y las partes de un menú.",
    corto: "Desayuno, almuerzo y cena.",
    podras: ["Distinguir le petit-déjeuner, le déjeuner, le dîner.", "Conjugar déjeuner y dîner.", "Pedir l'entrée, le plat principal, le dessert."],
    iconos: ["ic2/cofre", "m2d/celebrar", "ic2/bombilla"],
    previos: ["La hora (lección 8) y los partitivos (lección 44)."],
    capacidad: "Ahora puedes hablar de tus comidas y leer un menú."
  },
  requiere: R("mm-partes", "gh-hora", "er-term", "pa2-forma", "re2-prendre"), recupera: ["gh-hora", "er-term"],
  conceptos: {
    "rp-repas": { n: "le petit-déjeuner, le déjeuner, le goûter, le dîner", b: "voc" },
    "rp-menu": { n: "l'entrée, le plat principal, le dessert", b: "voc" }
  },
  video: {
    titulo: "Las comidas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "le petit-déjeuner", seg: [
        { es: "Hola. Cuidado: le déjeuner no es el desayuno." } ] },
      { v: "dos",
        a: { tag: "mañana", fr: "le petit-déjeuner", es: "el desayuno" },
        b: { tag: "mediodía", fr: "le déjeuner", es: "el almuerzo" },
        seg: [ { es: "Por la mañana:", p: 1 }, { fr: "le petit-déjeuner", p: 1 }, { es: "A mediodía:", p: 2 }, { fr: "le déjeuner", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«l'entrée» en un menú es…", o: ["el entrante", "el plato principal"], a: 0, es: true,
        bien: "¡Sí! El primer plato.", mal: "L'entrée es el primer plato, no el principal.",
        seg: [ { es: "Pausa. La entrada." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le petit-déjeuner", "le déjeuner", "le goûter", "le dîner", "l'entrée", "le dessert"], seg: [
        { es: "Y en Francia se cena hacia las ocho.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El domingo", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su domingo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu prends le petit-déjeuner à quelle heure ?", "¿A qué hora desayunas?"],
      ["camila", "À huit heures. Le dimanche, nous déjeunons chez mes grands-parents.", "A las ocho. Los domingos almorzamos en casa de mis abuelos."],
      ["hugo", "Et le soir ?", "¿Y por la noche?"],
      ["camila", "Je dîne avec ma famille à vingt heures. Comme dessert, une mousse au chocolat !", "Ceno con mi familia a las ocho. ¡De postre, una mousse de chocolate!"]
    ],
    fijate: "Fíjate: prendre le petit-déjeuner, déjeuner, dîner."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Comidas y menú",
      idea: "le petit-déjeuner (mañana), le déjeuner (mediodía), le goûter (merienda), le dîner (noche). Menú: l'entrée, le plat principal, le dessert.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "le petit-déjeuner", es: "el desayuno", ej: ["Je prends le petit-déjeuner à huit heures.", "Desayuno a las ocho."] },
        { fr: "le déjeuner", es: "el almuerzo" },
        { fr: "déjeuner", es: "almorzar", ej: ["Nous déjeunons à midi.", "Almorzamos a mediodía."] },
        { fr: "le goûter", es: "la merienda" },
        { fr: "le dîner", es: "la cena", ej: ["Le dîner est prêt.", "La cena está lista."] },
        { fr: "dîner", es: "cenar", ej: ["En France, on dîne vers vingt heures.", "En Francia se cena hacia las ocho."] },
        { fr: "le repas", es: "la comida (cada una)" },
        { fr: "l'entrée", es: "el entrante, primer plato" },
        { fr: "le plat principal", es: "el plato principal" },
        { fr: "le dessert", es: "el postre", ej: ["Comme dessert, je voudrais une glace.", "De postre, quisiera un helado."] }
      ],
      clave: "dessert (postre) ≠ désert (desierto)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je prends le déjeuner à 7 h.", "Je prends le petit-déjeuner à 7 h.", "Desayuno: petit-déjeuner."], ["le désert", "le dessert", "Postre: ss."]] }
  ],
  ejemplos: [
    { sit: "«Almuerzo en el restaurante universitario.»", resp: "Je déjeune au restaurant universitaire.", pasos: ["déjeuner = almorzar."], porque: "Mediodía." },
    { sit: "«Ceno con mi familia.»", resp: "Je dîne avec ma famille.", pasos: ["dîner = cenar."], porque: "Noche." },
    { sit: "«De postre, un helado.»", resp: "Comme dessert, une glace.", pasos: ["Comme dessert…"], porque: "Menú." }
  ],
  comprueba: [
    { q: "«le déjeuner» es…", o: ["el almuerzo", "el desayuno"], a: 0, b: "voc", porque: "Mediodía." },
    { q: "«le goûter» es…", o: ["la merienda", "la cena"], a: 0, b: "voc", porque: "Tarde." },
    { q: "«le dessert» es…", o: ["el postre", "el desierto"], a: 0, b: "voc", porque: "ss." }
  ],
  practica: [
    { fase: "guiada", c: ["rp-repas"], k: "choice", ask: "«el desayuno»", q: "«___»", o: ["le petit-déjeuner", "le déjeuner", "le dîner"], a: 0, pista: "Petit.", why: "<b>le petit-déjeuner</b>." },
    { fase: "guiada", c: ["rp-repas"], k: "match", ask: "Une cada comida con su hora.", q: "Comida → hora", pairs: [["le petit-déjeuner", "7 h"], ["le déjeuner", "12 h 30"], ["le goûter", "16 h 30"], ["le dîner", "20 h"]], pista: "goûter = merienda.", why: "Horarios." },
    { fase: "guiada", c: ["rp-menu"], k: "choice", ask: "Quieres pedir el postre.", q: "«Comme ___ , je voudrais une glace.»", o: ["dessert", "entrée", "plat"], a: 0, pista: "Postre.", why: "<b>dessert</b>." },
    { fase: "indep", c: ["rp-repas"], k: "fill", ask: "Conjuga déjeuner (nous).", q: "Nous ___ à midi.", acc: ["déjeunons"], why: "<b>déjeunons</b>." },
    { fase: "indep", c: ["rp-menu"], k: "spot", ask: "Encuentra el error.", s: "Après le plat principal , on prend le [désert] .", fix: "dessert", why: "<b>dessert</b>." },
    { fase: "indep", c: ["rp-repas"], k: "fill", ask: "Escribe «cena».", q: "Le soir, nous prenons le ___ .", acc: ["dîner"], why: "<b>dîner</b>." },
    { fase: "aplica", c: ["rp-repas"], k: "choice", es: true, say: "En France, on dîne vers vingt heures.", ask: "Escucha. ¿A qué hora se cena en Francia?", q: "Elige.", o: ["Hacia las 8 de la noche", "Hacia las 6 de la tarde", "Hacia las 10 de la noche"], a: 0, why: "<b>vingt heures</b>." },
    { fase: "aplica", c: ["rp-menu"], k: "sort", ask: "¿Primer plato o postre?", q: "Clasifica.", cats: ["l'entrée", "le dessert"], items: [["une salade", 0], ["une soupe", 0], ["une glace", 1], ["une mousse au chocolat", 1], ["une tarte", 1]], why: "Menú." },
    { fase: "dominio", c: ["rp-repas"], k: "order", ask: "Ordena: «Ceno con mi familia a las ocho».", tokens: ["Je dîne", "avec ma famille", "à vingt heures."], why: "<b>Je dîne avec ma famille à vingt heures.</b>" },
    { fase: "dominio", c: ["rp-menu"], k: "choice", ask: "En el menú, el primer plato es…", q: "«___»", o: ["l'entrée", "le plat principal", "le dessert"], a: 0, why: "<b>l'entrée</b>." },
    { fase: "dominio", c: ["rp-repas", "rp-menu"], k: "listen", say: "Le dimanche, nous déjeunons chez mes grands-parents.", acc: ["Le dimanche, nous déjeunons chez mes grands-parents.", "Le dimanche nous déjeunons chez mes grands-parents."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le dimanche, nous déjeunons chez mes grands-parents.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "France"], previo: ["quelle", "heure", "huit", "dimanche", "grands-parents", "soir", "avec", "famille", "vingt", "heures", "comme", "mousse", "chocolat", "midi", "prêt", "vers", "glace", "restaurant", "universitaire", "après", "prend", "prenons", "salade", "soupe", "tarte", "plat", "principal"] }
};

E["a1-restaurant-avis"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Donner son avis sur un plat : c'est bon, c'est trop salé",
  objetivo: {
    que: "Vas a opinar sobre la comida y distinguir bon (sabor) de bien (manera).",
    corto: "¡Está delicioso!",
    podras: ["Decir C'est bon ! C'est délicieux !", "Quejarte: c'est trop salé, c'est froid.", "No confundir bon y bien."],
    iconos: ["m2d/celebrar", "m2d/pensativo", "ic2/moneda"],
    previos: ["El café y el restaurante (lecciones 12 y 46)."],
    capacidad: "Ahora puedes decir lo que piensas de un plato."
  },
  requiere: R("cr-pedir", "ca-pagar", "ad-accord", "rp-menu", "cq-adv"), recupera: ["ca-pagar"],
  conceptos: {
    "ra-avis": { n: "bon, délicieux, trop salé, sucré, épicé", b: "voc" },
    "ra-bonbien": { n: "bon (sabor) / bien (manera)", b: "voc" }
  },
  video: {
    titulo: "Opinar sobre un plato", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "C'est délicieux !", seg: [
        { es: "Hola. ¿Te gusta el plato? Dilo en francés." } ] },
      { v: "dos",
        a: { tag: "sabor", fr: "C'est très bon !", es: "bon" },
        b: { tag: "manera", fr: "On mange bien ici.", es: "bien" },
        seg: [ { es: "Para el sabor:", p: 1 }, { fr: "C'est très bon !", p: 1 }, { es: "Para la manera:", p: 2 }, { fr: "On mange bien ici.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡La sopa está muy buena!»", o: ["La soupe est très bonne !", "La soupe est très bien !"], a: 0,
        bien: "¡Sí! Sabor: bonne.", mal: "Para el sabor, bon; con soupe, bonne.",
        seg: [ { es: "Pausa. El sabor de la sopa." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["C'est bon !", "délicieux", "trop salé", "trop sucré", "épicé", "L'addition, s'il vous plaît."], seg: [
        { es: "Y al final, la cuenta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cena", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo cenan en un restaurante.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce plat est délicieux, mais un peu trop salé.", "Este plato está delicioso, pero un poco salado."],
      ["camila", "Ma soupe est trop froide. Mais le dessert est très bon !", "Mi sopa está demasiado fría. ¡Pero el postre está muy bueno!"],
      ["hugo", "On mange très bien dans ce restaurant.", "Se come muy bien en este restaurante."],
      ["camila", "Oui ! L'addition, s'il vous plaît.", "¡Sí! La cuenta, por favor."]
    ],
    fijate: "Fíjate: très bon (sabor), très bien (manera)."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Opinar",
      idea: "Positivo: c'est bon, délicieux, excellent. Negativo: trop salé, trop sucré, trop épicé, froid, pas assez cuit. bon = sabor; bien = manera.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "C'est bon !", es: "¡Está bueno!" },
        { fr: "délicieux", es: "delicioso", ej: ["Ce gâteau est délicieux !", "¡Este pastel está delicioso!"] },
        { fr: "salé", es: "salado", ej: ["La soupe est un peu trop salée.", "La sopa está un poco salada."] },
        { fr: "sucré", es: "dulce" },
        { fr: "épicé", es: "picante" },
        { fr: "amer", es: "amargo" },
        { fr: "acide", es: "ácido" },
        { fr: "froid", es: "frío", ej: ["La soupe est trop froide.", "La sopa está demasiado fría."] },
        { fr: "pas assez cuit", es: "poco cocido", ej: ["La viande n'est pas assez cuite.", "La carne está poco cocida."] },
        { fr: "parfait", es: "perfecto" },
        { fr: "On mange bien ici.", es: "Aquí se come bien." },
        { fr: "L'addition, s'il vous plaît.", es: "La cuenta, por favor." }
      ],
      clave: "bon / bonne concuerda: ta tarte est très bonne." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est très bien, ce gâteau !", "C'est très bon, ce gâteau !", "Sabor: bon."], ["La soupe est très bien !", "La soupe est très bonne !", "Sabor + femenino."], ["On mange bon ici.", "On mange bien ici.", "Manera: bien."]] }
  ],
  ejemplos: [
    { sit: "Pruebas un plato y te gusta.", resp: "C'est bon !", pasos: ["Sabor → bon."], porque: "Positivo." },
    { sit: "«Está demasiado salado.»", resp: "C'est trop salé.", pasos: ["trop + adjetivo."], porque: "Queja." },
    { sit: "Pides la cuenta.", resp: "L'addition, s'il vous plaît.", pasos: ["l'addition."], porque: "Final." }
  ],
  comprueba: [
    { q: "«épicé» es…", o: ["picante", "especial"], a: 0, b: "voc", porque: "Picante." },
    { q: "Para el sabor se usa…", o: ["bon", "bien"], a: 0, b: "voc", porque: "Adjetivo." },
    { q: "«C'est trop sucré» significa…", o: ["Está demasiado dulce.", "Está demasiado seco."], a: 0, b: "voc", porque: "sucre = azúcar." }
  ],
  practica: [
    { fase: "guiada", c: ["ra-avis"], k: "choice", ask: "Pruebas un plato y te gusta.", q: "Tú: «___»", o: ["C'est bon !", "C'est bien !", "C'est froid !"], a: 0, pista: "Sabor.", why: "<b>C'est bon !</b>" },
    { fase: "guiada", c: ["ra-avis"], k: "match", ask: "Une cada sabor.", q: "Francés → español", pairs: [["salé", "salado"], ["sucré", "dulce"], ["amer", "amargo"], ["acide", "ácido"], ["épicé", "picante"]], pista: "sucre = azúcar.", why: "Sabores." },
    { fase: "guiada", c: ["ra-bonbien"], k: "choice", ask: "«Aquí se come bien.»", q: "«On mange ___ ici.»", o: ["bien", "bon", "bonne"], a: 0, pista: "Manera.", why: "<b>bien</b>." },
    { fase: "indep", c: ["ra-bonbien"], k: "fill", ask: "Escribe «buena» (la tarte).", q: "Ta tarte est très ___ !", acc: ["bonne"], why: "<b>bonne</b>." },
    { fase: "indep", c: ["ra-bonbien"], k: "spot", ask: "Encuentra el error.", s: "Merci , la soupe est très [bien] !", fix: "bonne", why: "<b>bonne</b>." },
    { fase: "indep", c: ["ra-avis"], k: "sort", ask: "¿Positivo o negativo?", q: "Clasifica.", cats: ["Positivo", "Negativo"], items: [["C'est délicieux.", 0], ["C'est parfait.", 0], ["C'est bon !", 0], ["C'est trop salé.", 1], ["C'est froid.", 1], ["Ce n'est pas assez cuit.", 1]], why: "Opiniones." },
    { fase: "aplica", c: ["ra-avis"], k: "choice", es: true, say: "La soupe est trop froide.", ask: "Escucha. ¿Qué problema tiene la sopa?", q: "Elige.", o: ["Está demasiado fría.", "Está demasiado salada.", "Está demasiado picante."], a: 0, why: "<b>froide</b>." },
    { fase: "aplica", c: ["ra-avis"], k: "fill", ask: "Escribe «delicioso».", q: "Ce gâteau est ___ !", acc: ["délicieux"], why: "<b>délicieux</b>." },
    { fase: "dominio", c: ["ra-avis"], k: "choice", ask: "Terminas de comer.", q: "Tú: «___»", o: ["L'addition, s'il vous plaît.", "Le dessert, c'est tout.", "C'est trop épicé."], a: 0, why: "<b>L'addition</b>." },
    { fase: "dominio", c: ["ra-avis"], k: "order", ask: "Ordena: «La carne está poco cocida».", tokens: ["La viande", "n'est pas", "assez cuite."], why: "<b>La viande n'est pas assez cuite.</b>" },
    { fase: "dominio", c: ["ra-avis", "ra-bonbien"], k: "listen", say: "Ce plat est délicieux, mais un peu trop salé.", acc: ["Ce plat est délicieux, mais un peu trop salé.", "Ce plat est délicieux mais un peu trop salé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce plat est délicieux, mais un peu trop salé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ce", "ma", "ta", "plat", "mais", "peu", "soupe", "dessert", "très", "restaurant", "gâteau", "tarte", "viande", "salée", "froide", "cuite", "bonne", "merci", "tout", "excellent"] }
};

E["a1-vetements-couleurs"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les vêtements et les couleurs : l'accord",
  objetivo: {
    que: "Vas a describir la ropa con colores que concuerdan: une robe verte, des chaussures noires.",
    corto: "Colores que concuerdan.",
    podras: ["Poner el color después de la prenda.", "Concordar: verte, blanche, violette.", "Saber que marron, orange y bleu foncé no cambian."],
    iconos: ["ic2/lapiz", "m2d/senalar", "ic2/bombilla"],
    previos: ["Los colores y la ropa (Primeros pasos) y los adjetivos (lección 10)."],
    capacidad: "Ahora puedes decir qué llevas puesto."
  },
  requiere: R("co-basicos", "co-otros", "cc-orden", "cc-fem", "ve-voc", "ve-porte", "ad-accord"), recupera: ["cc-fem", "ve-voc"],
  conceptos: {
    "vc-accord": { n: "verte, blanche, violette; rouge no cambia en fem.", b: "gr" },
    "vc-invar": { n: "marron, orange, bleu foncé: invariables", b: "gr" }
  },
  video: {
    titulo: "Ropa y colores", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "une robe verte", seg: [
        { es: "Hola. El color se pone de acuerdo con la prenda." } ] },
      { v: "frase", filas: [
          { nota: "cambia", p: 1, partes: [["Il porte une chemise blanche.", "-", 1]] },
          { nota: "ya termina en e", p: 2, partes: [["Elle porte une robe rouge.", "-", 2]] },
          { nota: "no cambia nunca", p: 3, partes: [["J'aime tes chaussures marron.", "-", 3]] } ], seg: [
        { es: "Blanco, blanche.", p: 1 }, { es: "Rojo ya termina en e.", p: 2 }, { es: "Marrón no cambia.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«una falda verde»", o: ["une jupe verte", "une jupe vert"], a: 0,
        bien: "¡Sí! Femenino.", mal: "Jupe es femenino: verte.",
        seg: [ { es: "Pausa. La falda es femenina." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["verte", "blanche", "noire", "violette", "marron", "bleu foncé"], seg: [
        { es: "Los compuestos, como azul oscuro, tampoco cambian.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo se preparan para una fiesta.",
    pj: PJ,
    lineas: [
      ["hugo", "Qu'est-ce que tu portes ce soir ?", "¿Qué te pones esta noche?"],
      ["camila", "Une robe verte et des chaussures noires. Et toi ?", "Un vestido verde y unos zapatos negros. ¿Y tú?"],
      ["hugo", "Un pantalon gris et une chemise blanche.", "Un pantalón gris y una camisa blanca."],
      ["camila", "J'aime tes chaussures marron !", "¡Me gustan tus zapatos marrones!"]
    ],
    fijate: "Fíjate: robe verte, chaussures noires, chaussures marron."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La concordancia del color",
      idea: "El color va después y concuerda: vert → verte, verts, vertes; blanc → blanche; violet → violette. rouge, jaune, rose: igual en femenino. marron, orange, bleu foncé: no cambian nunca.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["un pull vert / une robe verte", "un suéter verde / un vestido verde", "+ e"],
        ["des chaussures noires", "unos zapatos negros", "+ es"],
        ["Il porte une chemise blanche.", "Lleva una camisa blanca.", "blanc → blanche"],
        ["une veste violette", "una chaqueta morada", "violet → violette"],
        ["Elle porte une robe rouge.", "Lleva un vestido rojo.", "ya en -e"],
        ["deux chemises rouges", "dos camisas rojas", "plural: + s"],
        ["J'aime tes chaussures marron.", "Me gustan tus zapatos marrones.", "invariable"],
        ["des chaussettes orange", "unas medias naranjas", "invariable"],
        ["Elle a une jupe bleu foncé.", "Tiene una falda azul oscuro.", "compuesto"],
        ["un pantalon gris", "un pantalón gris", "termina en s"]
      ]],
      ej: [["la chemise", "la camisa"], ["le pull", "el suéter"], ["la jupe", "la falda"], ["les chaussures", "los zapatos"], ["le manteau", "el abrigo"], ["le bonnet", "el gorro"], ["la veste", "la chaqueta"], ["un jean", "un jean"], ["vert clair", "verde claro"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une veste blance","une veste blanche","blanc → blanche, con h."], ["des chaussures marronnes","des chaussures marron","marron no cambia."], ["une jupe bleue foncée","une jupe bleu foncé","Compuesto: no cambia."], ["une robe vert", "une robe verte", "Concuerda."], ["une jupe blanc", "une jupe blanche", "blanc → blanche."], ["des chaussures marrons", "des chaussures marron", "marron no cambia."]] }
  ],
  ejemplos: [
    { sit: "«una camisa blanca»", resp: "une chemise blanche", pasos: ["blanc → blanche."], porque: "Femenino." },
    { sit: "«dos camisas negras»", resp: "deux chemises noires", pasos: ["noir + es."], porque: "Fem. plural." },
    { sit: "«unos zapatos marrones»", resp: "des chaussures marron", pasos: ["marron no cambia."], porque: "Invariable." }
  ],
  comprueba: [
    { q: "El color va…", o: ["después de la prenda", "antes de la prenda"], a: 0, b: "gr", porque: "Después." },
    { q: "blanc en femenino es…", o: ["blanche", "blance"], a: 0, b: "gr", porque: "blanche." },
    { q: "«marron»…", o: ["no cambia", "se vuelve marronne"], a: 0, b: "gr", porque: "Invariable." }
  ],
  practica: [
    { fase: "guiada", c: ["vc-accord"], k: "choice", ask: "«una chaqueta blanca»", q: "«une veste ___»", o: ["blanche", "blanc", "blance"], a: 0, pista: "Femenino.", why: "<b>blanche</b>." },
    { fase: "guiada", c: ["vc-invar"], k: "choice", ask: "«unas medias marrones»", q: "«des chaussettes ___»", o: ["marron", "marrons", "marronnes"], a: 0, pista: "No cambia.", why: "<b>marron</b>." },
    { fase: "guiada", c: ["vc-accord", "vc-invar"], k: "match", ask: "Une cada prenda.", q: "Francés → español", pairs: [["la chemise", "la camisa"], ["le pull", "el suéter"], ["la jupe", "la falda"], ["les chaussures", "los zapatos"], ["le manteau", "el abrigo"]], pista: "jupe = falda.", why: "Ropa." },
    { fase: "indep", c: ["vc-accord"], k: "fill", ask: "Escribe vert concordado.", q: "Elle porte une robe ___ .", acc: ["verte"], why: "<b>verte</b>." },
    { fase: "indep", c: ["vc-accord"], k: "fill", ask: "Escribe noir concordado.", q: "J'ai deux chemises ___ .", acc: ["noires"], why: "<b>noires</b>." },
    { fase: "indep", c: ["vc-accord"], k: "spot", ask: "Encuentra el error.", s: "Pour la fête , elle porte une jupe [blanc] .", fix: "blanche", why: "<b>blanche</b>." },
    { fase: "aplica", c: ["vc-accord", "vc-invar"], k: "sort", ask: "En femenino, ¿cambia o no?", q: "Clasifica.", cats: ["Cambia", "No cambia"], items: [["vert", 0], ["blanc", 0], ["noir", 0], ["violet", 0], ["rouge", 1], ["jaune", 1], ["orange", 1], ["marron", 1]], why: "Concordancia." },
    { fase: "aplica", c: ["vc-invar"], k: "choice", ask: "«una falda azul oscuro»", q: "«une jupe ___»", o: ["bleu foncé", "bleue foncée", "bleu foncée"], a: 0, why: "Compuesto: <b>bleu foncé</b>." },
    { fase: "dominio", c: ["vc-accord"], k: "fill", ask: "Escribe «negro».", q: "Il porte un pantalon ___ .", acc: ["noir"], why: "<b>noir</b>." },
    { fase: "dominio", c: ["vc-accord"], k: "order", ask: "Ordena: «Lleva un abrigo negro y un gorro rojo».", tokens: ["Il porte", "un manteau noir", "et un bonnet", "rouge."], why: "<b>Il porte un manteau noir et un bonnet rouge.</b>" },
    { fase: "dominio", c: ["vc-accord", "vc-invar"], k: "listen", say: "Aujourd'hui, je porte un jean et un pull vert.", acc: ["Aujourd'hui, je porte un jean et un pull vert.", "Aujourd'hui je porte un jean et un pull vert."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Aujourd'hui, je porte un jean et un pull vert.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["qu'est-ce", "que", "portes", "porte", "ce", "soir", "robe", "chaussettes", "pantalon", "tes", "fête", "pour", "aujourd'hui", "deux", "bleu", "gris", "rose", "jaune", "rouge", "noir", "blanc", "vert", "violet", "orange"] }
};

E["a1-gouts-infinitif"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Aimer, adorer, préférer, détester",
  objetivo: {
    que: "Vas a expresar gustos con artículo definido o con infinitivo, y conjugar préférer.",
    corto: "Me gusta, me encanta, prefiero.",
    podras: ["Usar la escala adorer > aimer bien > détester.", "Decir J'aime le cinéma / J'adore danser.", "Conjugar préférer con sus tildes."],
    iconos: ["m2d/celebrar", "m2d/pensativo", "ic2/amigos"],
    previos: ["Los gustos (lección 8) y los partitivos (lección 44)."],
    capacidad: "Ahora puedes hablar de lo que te gusta y lo que no."
  },
  requiere: R("gh-gustos", "ai-formas", "ai-preg", "lo-verbos", "pa2-gusto", "er-term"), recupera: ["gh-gustos", "pa2-gusto"],
  conceptos: {
    "gi-art": { n: "aimer + le / la / les o + infinitivo", b: "gr" },
    "gi-pref": { n: "préférer: je préfère, nous préférons", b: "gr" }
  },
  video: {
    titulo: "Los gustos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "J'adore danser.", seg: [
        { es: "Hola. Tras me gusta va el artículo, o un verbo." } ] },
      { v: "dos",
        a: { tag: "+ artículo", fr: "J'aime le chocolat.", es: "le / la / les" },
        b: { tag: "+ verbo", fr: "J'adore danser.", es: "infinitivo" },
        seg: [ { es: "Con una cosa:", p: 1 }, { fr: "J'aime le chocolat.", p: 1 }, { es: "Con una acción:", p: 2 }, { fr: "J'adore danser.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Preferimos leer.»", o: ["Nous préférons lire.", "Nous préfèrons lire."], a: 0,
        bien: "¡Sí! Nous: é.", mal: "Con nous y vous la tilde es é: préférons.",
        seg: [ { es: "Pausa. Preferimos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'adore", "j'aime beaucoup", "j'aime bien", "je n'aime pas", "je déteste", "je préfère"], seg: [
        { es: "Préférer cambia la tilde: je préfère, nous préférons.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Gustos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus gustos.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu aimes le cinéma français ?", "¿Te gusta el cine francés?"],
      ["camila", "J'aime bien, mais je préfère lire. Et j'adore la musique colombienne !", "Me gusta, pero prefiero leer. ¡Y me encanta la música colombiana!"],
      ["hugo", "Moi, je déteste attendre. Je préfère le thé au café.", "Yo odio esperar. Prefiero el té al café."],
      ["camila", "Nous n'aimons pas la pluie !", "¡No nos gusta la lluvia!"]
    ],
    fijate: "Fíjate: j'aime le cinéma, je préfère lire, je déteste attendre."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Gustos y préférer",
      idea: "adorer > aimer beaucoup > aimer bien > ne pas aimer > détester. + le / la / les o + infinitivo. préférer: préfère, préfères, préfère, préférons, préférez, préfèrent.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'adore la musique colombienne.", "Me encanta la música colombiana.", "+ la"],
        ["J'aime le cinéma français.", "Me gusta el cine francés.", "+ le"],
        ["Je déteste la pluie.", "Odio la lluvia.", "+ la"],
        ["J'adore danser.", "Me encanta bailar.", "+ infinitivo"],
        ["Il déteste attendre.", "Odia esperar.", "+ infinitivo"],
        ["je préfère", "prefiero", "préférer"],
        ["tu préfères", "prefieres", "préférer"],
        ["il préfère", "prefiere", "préférer"],
        ["nous préférons", "preferimos", "préférer"],
        ["vous préférez", "prefieren", "préférer"],
        ["ils préfèrent", "prefieren (ellos)", "préférer"],
        ["Il préfère le thé au café.", "Prefiere el té al café.", "comparar"]
      ]],
      ej: [["J'aime bien", "me gusta"], ["J'aime beaucoup", "me gusta mucho"], ["Je suis fan de", "soy fan de"], ["J'ai horreur de", "me horroriza"], ["Je ne supporte pas", "no soporto"], ["Je préfère lire plutôt que regarder la télé.", "Prefiero leer antes que ver televisión."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["elle préfére","elle préfère","Con il / elle: è."], ["J'aime du chocolat.", "J'aime le chocolat.", "Gusto: artículo definido."], ["Mon frère aime du football.", "Mon frère aime le football.", "le."], ["nous préfèrons", "nous préférons", "nous: é."]] }
  ],
  ejemplos: [
    { sit: "«Me encanta viajar.»", resp: "J'adore voyager.", pasos: ["+ infinitivo."], porque: "Acción." },
    { sit: "«Ella prefiere el té.»", resp: "Elle préfère le thé.", pasos: ["il / elle préfère."], porque: "è." },
    { sit: "«Odio el frío.»", resp: "Je déteste le froid.", pasos: ["+ le."], porque: "Cosa." }
  ],
  comprueba: [
    { q: "Tras aimer va…", o: ["le / la / les o un infinitivo", "du / de la"], a: 0, b: "gr", porque: "Definido." },
    { q: "«nous» de préférer es…", o: ["préférons", "préfèrons"], a: 0, b: "gr", porque: "é." },
    { q: "Lo más fuerte es…", o: ["j'adore", "j'aime bien"], a: 0, b: "gr", porque: "Escala." }
  ],
  practica: [
    { fase: "guiada", c: ["gi-art"], k: "choice", ask: "«Me gusta el cine francés.»", q: "«J'aime ___ cinéma français.»", o: ["le", "du", "de"], a: 0, pista: "Gusto.", why: "<b>le</b>." },
    { fase: "guiada", c: ["gi-pref"], k: "choice", ask: "«Ella prefiere el té.»", q: "«Elle ___ le thé.»", o: ["préfère", "préfére", "préférons"], a: 0, pista: "è.", why: "<b>préfère</b>." },
    { fase: "guiada", c: ["gi-art"], k: "sort", ask: "¿Me gusta o no me gusta?", q: "Clasifica.", cats: ["Me gusta", "No me gusta"], items: [["J'adore", 0], ["J'aime beaucoup", 0], ["J'aime bien", 0], ["Je suis fan de", 0], ["Je déteste", 1], ["Je n'aime pas", 1], ["J'ai horreur de", 1], ["Je ne supporte pas", 1]], pista: "horreur = horror.", why: "Escala." },
    { fase: "indep", c: ["gi-pref"], k: "fill", ask: "Conjuga préférer (nous).", q: "Nous ___ la plage.", acc: ["préférons"], why: "<b>préférons</b>." },
    { fase: "indep", c: ["gi-art"], k: "fill", ask: "Escribe «bailar».", q: "J'adore ___ .", acc: ["danser"], why: "<b>danser</b>." },
    { fase: "indep", c: ["gi-art"], k: "spot", ask: "Encuentra el error.", s: "Mon frère aime [du] football et le basket .", fix: "le", why: "<b>le</b>." },
    { fase: "aplica", c: ["gi-art"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["J'aime bien", "me gusta"], ["J'adore", "me encanta"], ["Je préfère", "prefiero"], ["Je déteste", "detesto"]], why: "Gustos." },
    { fase: "aplica", c: ["gi-art"], k: "fill", ask: "Escribe el artículo.", q: "Je déteste ___ pluie.", acc: ["la"], why: "<b>la</b>." },
    { fase: "dominio", c: ["gi-pref"], k: "order", ask: "Ordena: «Prefiero leer antes que ver televisión».", tokens: ["Je préfère", "lire", "plutôt que", "regarder la télé."], why: "<b>Je préfère lire plutôt que regarder la télé.</b>" },
    { fase: "dominio", c: ["gi-art"], k: "choice", ask: "«Me encanta viajar.»", q: "«___»", o: ["J'adore voyager.", "J'adore de voyager.", "J'adore le voyager."], a: 0, why: "<b>+ infinitivo</b>." },
    { fase: "dominio", c: ["gi-art", "gi-pref"], k: "listen", say: "J'aime beaucoup lire, mais je déteste faire la cuisine.", acc: ["J'aime beaucoup lire, mais je déteste faire la cuisine.", "J'aime beaucoup lire mais je déteste faire la cuisine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'aime beaucoup lire, mais je déteste faire la cuisine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["cinéma", "français", "mais", "lire", "musique", "colombienne", "moi", "attendre", "thé", "café", "pluie", "aimons", "chocolat", "voyager", "froid", "plage", "danser", "frère", "mon", "football", "basket", "regarder", "télé", "faire", "cuisine", "plutôt"] }
};

E["a1-sorties"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Sortir : cinéma, concert, musée, exposition",
  objetivo: {
    que: "Vas a proponer una salida, aceptar o rechazar, y preguntar por las entradas.",
    corto: "¿Vamos al cine?",
    podras: ["Proponer On va au cinéma ? Ça te dit de… ?", "Aceptar o rechazar con cortesía.", "Preguntar por le tarif étudiant y decir c'est gratuit."],
    iconos: ["ic2/amigos", "m2d/celebrar", "ic2/moneda"],
    previos: ["Invitar (Primeros pasos) y vouloir / pouvoir (lección 15)."],
    capacidad: "Ahora puedes organizar una salida con amigos."
  },
  requiere: R("in-invitar", "in-resp", "vp-uso", "ad-a", "lv-masc"), recupera: ["in-invitar", "in-resp"],
  conceptos: {
    "so-proposer": { n: "On va… ? Ça te dit de… ? Tu es libre… ?", b: "voc" },
    "so-repondre": { n: "Avec plaisir ! / Désolé, je ne peux pas.", b: "voc" }
  },
  video: {
    titulo: "Salir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Ça te dit ?", seg: [
        { es: "Hola. Propón un plan y responde con cortesía." } ] },
      { v: "dos",
        a: { tag: "aceptar", fr: "Avec plaisir !", es: "con gusto" },
        b: { tag: "rechazar", fr: "Désolé, je ne peux pas.", es: "no puedo" },
        seg: [ { es: "Si aceptas:", p: 1 }, { fr: "Avec plaisir !", p: 1 }, { es: "Si no puedes:", p: 2 }, { fr: "Désolé, je ne peux pas. Une autre fois ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Vamos al teatro?»", o: ["On va au théâtre ?", "On va à le théâtre ?"], a: 0,
        bien: "¡Sí! à + le = au.", mal: "à + le se contrae: au théâtre.",
        seg: [ { es: "Pausa. Al teatro." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le cinéma", "le théâtre", "le concert", "l'exposition", "le tarif étudiant", "gratuit"], seg: [
        { es: "Y pregunta siempre por la tarifa de estudiante.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El sábado", img: "bg-cafe", yo: "camila",
    escena: "Hugo invita a Camila a salir.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu es libre samedi soir ? Ça te dit d'aller au cinéma ?", "¿Estás libre el sábado por la noche? ¿Te apetece ir al cine?"],
      ["camila", "Désolé, je ne peux pas samedi. Une autre fois ?", "Lo siento, el sábado no puedo. ¿Otro día?"],
      ["hugo", "Dimanche, alors ? Le musée est gratuit le premier dimanche du mois.", "¿El domingo, entonces? El museo es gratis el primer domingo del mes."],
      ["camila", "Bonne idée ! Avec plaisir !", "¡Buena idea! ¡Con gusto!"]
    ],
    fijate: "Fíjate: Ça te dit de…, Une autre fois ?, Avec plaisir !"
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Proponer y responder",
      idea: "Proponer: On va… ? Ça te dit de… ? Tu es libre… ? Aceptar: D'accord ! Bonne idée ! Avec plaisir ! Rechazar: Désolé, je ne peux pas. Une autre fois ?",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "On va au cinéma ce soir ?", es: "¿Vamos al cine esta noche?" },
        { fr: "Ça te dit ?", es: "¿Te apetece?", ej: ["Ça te dit d'aller à un concert ce soir ?", "¿Te apetece ir a un concierto esta noche?"] },
        { fr: "Tu es libre samedi ?", es: "¿Estás libre el sábado?" },
        { fr: "Avec plaisir !", es: "¡Con gusto!" },
        { fr: "Bonne idée !", es: "¡Buena idea!" },
        { fr: "Pourquoi pas ?", es: "¿Por qué no?" },
        { fr: "Une autre fois ?", es: "¿Otro día?" },
        { fr: "Je suis occupé.", es: "Estoy ocupado." },
        { fr: "le théâtre", es: "el teatro" },
        { fr: "le concert", es: "el concierto", ej: ["Le concert commence à vingt heures.", "El concierto empieza a las ocho."] },
        { fr: "l'exposition", es: "la exposición" },
        { fr: "un billet", es: "una entrada" },
        { fr: "le tarif étudiant", es: "la tarifa de estudiante" },
        { fr: "gratuit / gratuite", es: "gratis" },
        { fr: "commencer", es: "empezar" }
      ],
      clave: "L'entrée est gratuite pour les étudiants. = La entrada es gratis para estudiantes." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["On va à le théâtre ?", "On va au théâtre ?", "à + le = au."], ["L'entrée est gratuit.", "L'entrée est gratuite.", "Entrée es femenino."]] }
  ],
  ejemplos: [
    { sit: "Propones ir al concierto.", resp: "On va au concert ?", pasos: ["On va au…"], porque: "Proponer." },
    { sit: "Aceptas con gusto.", resp: "Avec plaisir !", pasos: ["Avec plaisir."], porque: "Aceptar." },
    { sit: "No puedes y propones otro día.", resp: "Désolé, je ne peux pas. Une autre fois ?", pasos: ["Rechazar + proponer."], porque: "Cortés." }
  ],
  comprueba: [
    { q: "«Ça te dit ?» significa…", o: ["¿Te apetece?", "¿Te lo dijo?"], a: 0, b: "voc", porque: "Proponer." },
    { q: "«gratuit» significa…", o: ["gratis", "agradecido"], a: 0, b: "voc", porque: "Gratis." },
    { q: "«Une autre fois ?» sirve para…", o: ["rechazar con cortesía", "aceptar"], a: 0, b: "voc", porque: "Otro día." }
  ],
  practica: [
    { fase: "guiada", c: ["so-proposer"], k: "choice", ask: "«¿Vamos al teatro esta noche?»", q: "«On va ___ théâtre ce soir ?»", o: ["au", "à le", "du"], a: 0, pista: "à + le.", why: "<b>au</b>." },
    { fase: "guiada", c: ["so-repondre"], k: "sort", ask: "¿Aceptar o rechazar?", q: "Clasifica.", cats: ["Aceptar", "Rechazar"], items: [["D'accord !", 0], ["Bonne idée !", 0], ["Avec plaisir !", 0], ["Pourquoi pas ?", 0], ["Désolé, je suis occupé.", 1], ["Je ne peux pas.", 1], ["Une autre fois ?", 1]], pista: "plaisir = gusto.", why: "Respuestas." },
    { fase: "guiada", c: ["so-proposer"], k: "match", ask: "¿Qué se ve en cada lugar?", q: "Lugar → actividad", pairs: [["le cinéma", "un film"], ["le musée", "une exposition"], ["le théâtre", "une pièce"], ["le concert", "un groupe"]], pista: "pièce = obra.", why: "Salidas." },
    { fase: "indep", c: ["so-repondre"], k: "fill", ask: "Completa: «¡Con gusto!».", q: "Avec ___ !", acc: ["plaisir"], why: "<b>plaisir</b>." },
    { fase: "indep", c: ["so-proposer"], k: "fill", ask: "Escribe «empieza».", q: "Le film ___ à vingt heures.", acc: ["commence"], why: "<b>commence</b>." },
    { fase: "indep", c: ["so-proposer"], k: "spot", ask: "Encuentra el error.", s: "L'entrée du musée est [gratuit] pour les étudiants .", fix: "gratuite", why: "<b>gratuite</b>." },
    { fase: "aplica", c: ["so-repondre"], k: "choice", ask: "Hugo: «On va au musée samedi ?» No puedes.", q: "Tú: «___»", o: ["Désolé, je ne peux pas.", "Avec plaisir !", "Bonne idée !"], a: 0, why: "Rechazas con cortesía." },
    { fase: "aplica", c: ["so-proposer"], k: "choice", es: true, say: "Le musée est gratuit le premier dimanche du mois.", ask: "Escucha. ¿Cuándo es gratis el museo?", q: "Elige.", o: ["El primer domingo del mes", "Todos los domingos", "El primer sábado del mes"], a: 0, why: "<b>le premier dimanche</b>." },
    { fase: "dominio", c: ["so-proposer"], k: "order", ask: "Ordena: «¿Estás libre el sábado por la noche?».", tokens: ["Tu es", "libre", "samedi soir ?"], why: "<b>Tu es libre samedi soir ?</b>" },
    { fase: "dominio", c: ["so-proposer"], k: "choice", ask: "«la tarifa de estudiante»", q: "«___»", o: ["le tarif étudiant", "le billet gratuit", "la place libre"], a: 0, why: "<b>le tarif étudiant</b>." },
    { fase: "dominio", c: ["so-proposer", "so-repondre"], k: "listen", say: "Ça te dit d'aller au cinéma samedi soir ?", acc: ["Ça te dit d'aller au cinéma samedi soir ?", "Ça te dit d'aller au cinéma samedi soir?", "Ça te dit d'aller au cinéma samedi soir"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Ça te dit d'aller au cinéma samedi soir ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["samedi", "soir", "dimanche", "alors", "musée", "premier", "mois", "d'aller", "aller", "cinéma", "film", "pièce", "groupe", "étudiants", "entrée", "place", "vingt", "heures", "désolé", "peux", "d'accord", "un", "une"] }
};

E["a1-carte-postale"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Écrire une carte postale",
  objetivo: {
    que: "Vas a escribir una postal: saludo, dónde estás, qué haces, qué tiempo hace y despedida.",
    corto: "Una postal de vacaciones.",
    podras: ["Saludar con Cher / Chère.", "Contar dónde estás y qué tiempo hace.", "Despedirte con Bisous, Je t'embrasse, À bientôt."],
    iconos: ["ic2/lapiz", "ic2/mundo", "m2d/celebrar"],
    previos: ["El tiempo (lección 13) y las vacaciones (Primeros pasos)."],
    capacidad: "Ahora puedes escribir una postal o un mensaje corto de viaje."
  },
  requiere: R("ms-fait", "me-fait", "va-voc", "va-gr", "vi-lugar"), recupera: ["ms-fait", "va-voc"],
  conceptos: {
    "cp-salut": { n: "Cher / Chère + nombre", b: "voc" },
    "cp-fin": { n: "Bisous, Je t'embrasse, À bientôt, Grosses bises", b: "voc" }
  },
  video: {
    titulo: "La postal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Chère Julie,", seg: [
        { es: "Hola. Una postal tiene cinco partes." } ] },
      { v: "frase", filas: [
          { nota: "saludo", p: 1, partes: [["Chère Julie,", "-", 1]] },
          { nota: "lugar y tiempo", p: 2, partes: [["Je suis à Nice. Il fait beau.", "-", 2]] },
          { nota: "despedida", p: 3, partes: [["Bisous, Ana", "-", 3]] } ], seg: [
        { es: "Querida Julie,", p: 1 }, { es: "estoy en Niza, hace buen tiempo,", p: 2 }, { es: "besos, Ana.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Querida Claire,»", o: ["Chère Claire,", "Cher Claire,"], a: 0,
        bien: "¡Sí! Femenino: chère.", mal: "Para una mujer: chère.",
        seg: [ { es: "Pausa. Claire es una mujer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Cher Marc,", "Chère Julie,", "Je suis à…", "Il fait beau.", "Bisous,", "À bientôt !"], seg: [
        { es: "Saludo, lugar, actividad, tiempo y despedida.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Desde Niza", img: "bg-paris", yo: "camila",
    escena: "Camila escribe una postal a su abuela.",
    pj: PJ,
    lineas: [
      ["camila", "Chère Mamie, je suis à Nice avec mes amis.", "Querida abuelita, estoy en Niza con mis amigos."],
      ["camila", "Il fait beau et la mer est chaude. Je vais à la plage tous les jours.", "Hace buen tiempo y el mar está caliente. Voy a la playa todos los días."],
      ["camila", "Je pense à toi.", "Pienso en ti."],
      ["camila", "Je t'embrasse très fort. Camila", "Un abrazo muy fuerte. Camila"]
    ],
    fijate: "Fíjate: Chère Mamie, Il fait beau, Je t'embrasse."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Partes de la postal",
      idea: "Saludo: Cher Paul, / Chère Julie, / Salut les amis ! Lugar: Je suis à… Tiempo: Il fait beau. Despedida: Bisous, Je t'embrasse, À bientôt, Grosses bises.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Cher Marc,", es: "Querido Marc," },
        { fr: "Chère Julie,", es: "Querida Julie," },
        { fr: "Chers parents,", es: "Queridos padres," },
        { fr: "Coucou !", es: "¡Holi!" },
        { fr: "Je suis à Nice.", es: "Estoy en Niza.", ej: ["Je suis à Lyon pour une semaine.", "Estoy en Lyon por una semana."] },
        { fr: "Il fait beau.", es: "Hace buen tiempo." },
        { fr: "Je pense à toi.", es: "Pienso en ti." },
        { fr: "Bisous,", es: "Besos," },
        { fr: "Grosses bises,", es: "Muchos besos," },
        { fr: "Je t'embrasse,", es: "Te mando un abrazo," },
        { fr: "À bientôt !", es: "¡Hasta pronto!" },
        { fr: "Bonnes vacances !", es: "¡Buenas vacaciones!" }
      ],
      clave: "Cher (masc.), chère (fem.)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Cher Julie,", "Chère Julie,", "Concuerda: chère."], ["Cher Claire,", "Chère Claire,", "Mujer: chère."], ["Je suis en Nice.", "Je suis à Nice.", "Ciudad: à."]] }
  ],
  ejemplos: [
    { sit: "Empiezas una postal a Sophie.", resp: "Chère Sophie,", pasos: ["Mujer → chère."], porque: "Saludo." },
    { sit: "«Hace mucho calor.»", resp: "Il fait très chaud.", pasos: ["Il fait…"], porque: "Tiempo." },
    { sit: "Te despides de un amigo.", resp: "Bisous !", pasos: ["Informal."], porque: "Despedida." }
  ],
  comprueba: [
    { q: "Para una mujer el saludo es…", o: ["Chère", "Cher"], a: 0, b: "voc", porque: "Femenino." },
    { q: "«Je t'embrasse» al final significa…", o: ["Te mando un abrazo.", "Te beso en la mano."], a: 0, b: "voc", porque: "Despedida." },
    { q: "Con una ciudad se usa…", o: ["à", "en"], a: 0, b: "voc", porque: "à Nice." }
  ],
  practica: [
    { fase: "guiada", c: ["cp-salut"], k: "choice", ask: "Escribes a tu amiga Sophie.", q: "«___ Sophie,»", o: ["Chère", "Cher", "Chers"], a: 0, pista: "Mujer.", why: "<b>Chère</b>." },
    { fase: "guiada", c: ["cp-salut", "cp-fin"], k: "sort", ask: "¿Saludo o despedida?", q: "Clasifica.", cats: ["Saludo", "Despedida"], items: [["Cher Marc,", 0], ["Salut Julie !", 0], ["Chers parents,", 0], ["Coucou !", 0], ["Grosses bises,", 1], ["À bientôt !", 1], ["Je t'embrasse,", 1], ["Bisous,", 1]], pista: "bises = besos.", why: "Partes." },
    { fase: "guiada", c: ["cp-fin"], k: "match", ask: "Une cada fórmula.", q: "Francés → español", pairs: [["Je t'embrasse", "te mando un abrazo"], ["À bientôt", "hasta pronto"], ["Grosses bises", "muchos besos"], ["Bonnes vacances", "buenas vacaciones"]], pista: "bientôt = pronto.", why: "Fórmulas." },
    { fase: "indep", c: ["cp-salut"], k: "fill", ask: "Escribe «Querido».", q: "___ Marc,", acc: ["Cher"], why: "<b>Cher</b>." },
    { fase: "indep", c: ["cp-salut"], k: "spot", ask: "Encuentra el error.", s: "[Cher] Claire , je suis en vacances en Bretagne .", fix: "Chère", why: "<b>Chère</b>." },
    { fase: "indep", c: ["cp-fin"], k: "fill", ask: "Escribe la preposición.", q: "Je suis ___ Marseille avec mes amis.", acc: ["à"], why: "<b>à</b>." },
    { fase: "aplica", c: ["cp-fin"], k: "fill", ask: "Escribe «buen tiempo».", q: "Il fait très ___ ici.", acc: ["beau"], why: "<b>beau</b>." },
    { fase: "aplica", c: ["cp-fin"], k: "choice", es: true, say: "Il fait beau et la mer est chaude.", ask: "Escucha. ¿Cómo está el mar?", q: "Elige.", o: ["Caliente", "Frío", "Agitado"], a: 0, why: "<b>chaude</b>." },
    { fase: "dominio", c: ["cp-salut", "cp-fin"], k: "order", ask: "Ordena la postal.", tokens: ["Salut Léo !", "Je suis à Nice.", "Il fait beau.", "Bisous, Ana"], why: "Saludo, lugar, tiempo, despedida." },
    { fase: "dominio", c: ["cp-fin"], k: "choice", ask: "Te despides de tu abuela con cariño.", q: "«___»", o: ["Je t'embrasse très fort.", "Chère Mamie,", "Je suis à Nice."], a: 0, why: "<b>Je t'embrasse</b>." },
    { fase: "dominio", c: ["cp-salut", "cp-fin"], k: "listen", say: "Chère Julie, je suis à Nice et il fait très beau.", acc: ["Chère Julie, je suis à Nice et il fait très beau.", "Chère Julie je suis à Nice et il fait très beau."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chère Julie, je suis à Nice et il fait très beau.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Nice", "Lyon", "Marseille", "Bretagne", "Julie", "Marc", "Sophie", "Claire", "Léo", "Ana", "Mamie"], previo: ["avec", "mes", "amis", "mer", "chaude", "chaud", "plage", "tous", "jours", "toi", "très", "fort", "salut", "parents", "pour", "semaine", "vacances", "ici", "beau"] }
};

E["a1-fetes"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les fêtes et les vœux : bon anniversaire !",
  objetivo: {
    que: "Vas a felicitar y desear cosas con bon / bonne / joyeux, y conocer fiestas francesas.",
    corto: "¡Feliz cumpleaños!",
    podras: ["Decir Bon anniversaire !, Joyeux Noël !, Bonne année !", "Desear Bonne chance !, Bon courage !, Bon voyage !", "Concordar bon / bonne con la palabra."],
    iconos: ["m2d/celebrar", "ic2/amigos", "ic2/trofeo"],
    previos: ["El cumpleaños (Primeros pasos) y la fecha (lección 19)."],
    capacidad: "Ahora puedes felicitar en cualquier ocasión."
  },
  requiere: R("an-feliz", "an-fecha", "an-cosas", "mm-saludos", "da-forma"), recupera: ["an-feliz", "mm-saludos"],
  conceptos: {
    "fe-voeux": { n: "Bon anniversaire, Joyeux Noël, Félicitations", b: "voc" },
    "fe-bonne": { n: "bon + masc. / bonne + fem.", b: "voc" }
  },
  video: {
    titulo: "Felicitar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "Bonne année !", seg: [
        { es: "Hola. Para desear algo: bon o bonne, según la palabra." } ] },
      { v: "dos",
        a: { tag: "masculino", fr: "Bon anniversaire ! Bon voyage !", es: "bon" },
        b: { tag: "femenino", fr: "Bonne année ! Bonne chance !", es: "bonne" },
        seg: [ { es: "Con masculino:", p: 1 }, { fr: "Bon voyage !", p: 1 }, { es: "Con femenino:", p: 2 }, { fr: "Bonne chance !", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Feliz Navidad!»", o: ["Joyeux Noël !", "Bon Noël !"], a: 0,
        bien: "¡Sí! Joyeux Noël.", mal: "Para Navidad se dice Joyeux Noël.",
        seg: [ { es: "Pausa. Navidad." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Bon anniversaire !", "Joyeux Noël !", "Bonne année !", "Bonne chance !", "Bon courage !", "Félicitations !"], seg: [
        { es: "Y el 14 de julio es la fiesta nacional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El cumpleaños", img: "bg-cafe", yo: "camila",
    escena: "Es el cumpleaños de Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Joyeux anniversaire, Hugo ! Tu as quel âge ?", "¡Feliz cumpleaños, Hugo! ¿Cuántos años cumples?"],
      ["hugo", "Merci ! J'ai vingt-cinq ans.", "¡Gracias! Cumplo veinticinco años."],
      ["camila", "Et félicitations pour ton diplôme ! Je te souhaite une très belle journée.", "¡Y felicitaciones por tu título! Te deseo un día muy bonito."],
      ["hugo", "Merci, Camila. Et bon courage pour ton examen !", "Gracias, Camila. ¡Y ánimo con tu examen!"]
    ],
    fijate: "Fíjate: joyeux anniversaire, félicitations, bon courage."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Felicitaciones y deseos",
      idea: "bon + masculino (anniversaire, voyage, courage, appétit); bonne + femenino (année, chance, journée, soirée). Joyeux Noël, joyeux anniversaire.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Bon anniversaire !", es: "¡Feliz cumpleaños!" },
        { fr: "Joyeux anniversaire !", es: "¡Feliz cumpleaños!" },
        { fr: "Joyeux Noël !", es: "¡Feliz Navidad!" },
        { fr: "Bonne année !", es: "¡Feliz año nuevo!", ej: ["Bonne année à tous !", "¡Feliz año a todos!"] },
        { fr: "Bonne chance !", es: "¡Suerte!" },
        { fr: "Bon courage !", es: "¡Ánimo!" },
        { fr: "Bon appétit !", es: "¡Buen provecho!" },
        { fr: "Bon voyage !", es: "¡Buen viaje!" },
        { fr: "Félicitations !", es: "¡Felicitaciones!", ej: ["Félicitations pour ton diplôme !", "¡Felicitaciones por tu título!"] },
        { fr: "Je te souhaite…", es: "Te deseo…" },
        { fr: "la fête nationale", es: "la fiesta nacional (le 14 juillet)" },
        { fr: "la Fête de la musique", es: "la Fiesta de la Música (le 21 juin)" },
        { fr: "le jour de l'An", es: "el primero de enero" }
      ],
      clave: "Bonne journée ! Bonne soirée ! (femeninos)" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Bon année !", "Bonne année !", "Année es femenino."], ["Bon journée !", "Bonne journée !", "Femenino."], ["Bonne voyage !", "Bon voyage !", "Voyage es masculino."]] }
  ],
  ejemplos: [
    { sit: "Tu amigo tiene un examen.", resp: "Bonne chance !", pasos: ["chance es femenino."], porque: "Deseo." },
    { sit: "Tu amiga se gradúa.", resp: "Félicitations !", pasos: ["Éxito."], porque: "Felicitar." },
    { sit: "Es el 1 de enero.", resp: "Bonne année !", pasos: ["année → bonne."], porque: "Año nuevo." }
  ],
  comprueba: [
    { q: "«Bon courage !» significa…", o: ["¡Ánimo!", "¡Qué valiente!"], a: 0, b: "voc", porque: "Ánimo." },
    { q: "Con année se usa…", o: ["bonne", "bon"], a: 0, b: "voc", porque: "Femenino." },
    { q: "La fiesta nacional francesa es…", o: ["el 14 de julio", "el 21 de junio"], a: 0, b: "voc", porque: "le 14 juillet." }
  ],
  practica: [
    { fase: "guiada", c: ["fe-voeux"], k: "choice", ask: "«¡Feliz Navidad!»", q: "«___ Noël !»", o: ["Joyeux", "Bon", "Bonne"], a: 0, pista: "Navidad.", why: "<b>Joyeux Noël</b>." },
    { fase: "guiada", c: ["fe-bonne"], k: "sort", ask: "¿bon o bonne?", q: "Clasifica.", cats: ["bon…", "bonne…"], items: [["anniversaire", 0], ["appétit", 0], ["courage", 0], ["voyage", 0], ["année", 1], ["chance", 1], ["journée", 1], ["soirée", 1]], pista: "Mira el género.", why: "Concordancia." },
    { fase: "guiada", c: ["fe-voeux"], k: "match", ask: "Une cada fecha.", q: "Fecha → fiesta", pairs: [["le 14 juillet", "la fête nationale"], ["le 21 juin", "la Fête de la musique"], ["le 25 décembre", "Noël"], ["le 1er janvier", "le jour de l'An"]], pista: "14 de julio.", why: "Fiestas." },
    { fase: "indep", c: ["fe-voeux"], k: "fill", ask: "Escribe «viaje».", q: "Bon ___ !", acc: ["voyage"], why: "<b>Bon voyage</b>." },
    { fase: "indep", c: ["fe-bonne"], k: "spot", ask: "Encuentra el error.", s: "[Bon] journée et à demain !", fix: "Bonne", why: "<b>Bonne journée</b>." },
    { fase: "indep", c: ["fe-bonne"], k: "fill", ask: "Escribe «año».", q: "Bonne ___ !", acc: ["année"], why: "<b>année</b>." },
    { fase: "aplica", c: ["fe-voeux"], k: "choice", ask: "Tu amigo tiene un examen mañana.", q: "Tú: «___»", o: ["Bonne chance !", "Bon appétit !", "Joyeux Noël !"], a: 0, why: "<b>Bonne chance</b>." },
    { fase: "aplica", c: ["fe-voeux"], k: "choice", ask: "Tu amiga terminó su carrera.", q: "Tú: «___»", o: ["Félicitations !", "Bon voyage !", "Bonne année !"], a: 0, why: "<b>Félicitations</b>." },
    { fase: "dominio", c: ["fe-voeux"], k: "order", ask: "Ordena: «¡Feliz cumpleaños, mi querido amigo!».", tokens: ["Joyeux", "anniversaire,", "mon cher ami !"], why: "<b>Joyeux anniversaire, mon cher ami !</b>" },
    { fase: "dominio", c: ["fe-voeux"], k: "choice", es: true, say: "Bon courage pour ton examen !", ask: "Escucha. ¿Qué te desean?", q: "Elige.", o: ["Ánimo con el examen", "Buen provecho", "Feliz año"], a: 0, why: "<b>Bon courage</b>." },
    { fase: "dominio", c: ["fe-voeux", "fe-bonne"], k: "listen", say: "Bon anniversaire ! Je te souhaite une très belle journée.", acc: ["Bon anniversaire ! Je te souhaite une très belle journée.", "Bon anniversaire! Je te souhaite une très belle journée.", "Bon anniversaire Je te souhaite une très belle journée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bon anniversaire ! Je te souhaite une très belle journée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Noël"], previo: ["quel", "âge", "merci", "vingt-cinq", "ans", "pour", "ton", "diplôme", "très", "belle", "examen", "tous", "demain", "mon", "cher", "ami", "soirée", "journée", "juillet", "juin", "décembre", "janvier", "1er", "14", "21", "25"] }
};

E["a1-animaux"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les animaux",
  objetivo: {
    que: "Vas a nombrar animales domésticos, de granja y salvajes, y sus plurales especiales.",
    corto: "Los animales.",
    podras: ["Nombrar le chien, la vache, le singe…", "Formar chevaux, oiseaux.", "Hablar de tu mascota."],
    iconos: ["m2d/celebrar", "ic2/mundo", "m2d/senalar"],
    previos: ["Los animales (Primeros pasos)."],
    capacidad: "Ahora puedes hablar de animales y de tu mascota."
  },
  requiere: R("an-voc", "an-nom", "lg-ilya", "ci-ilya"), recupera: ["an-voc"],
  conceptos: {
    "am-voc": { n: "granja y salvajes con su artículo", b: "voc" },
    "am-plur": { n: "cheval → chevaux, oiseau → oiseaux", b: "voc" }
  },
  video: {
    titulo: "Los animales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/celebrar", grande: "le chat Manzana", seg: [
        { es: "Hola. Yo soy un gato. Hoy, todos los animales." } ] },
      { v: "dos",
        a: { tag: "-al", fr: "un cheval → des chevaux", es: "-aux" },
        b: { tag: "-eau", fr: "un oiseau → des oiseaux", es: "-x" },
        seg: [ { es: "Los que terminan en a ele:", p: 1 }, { fr: "des chevaux", p: 1 }, { es: "Los que terminan en e a u:", p: 2 }, { fr: "des oiseaux", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«dos caballos»", o: ["deux chevaux", "deux chevals"], a: 0,
        bien: "¡Sí! -al → -aux.", mal: "El plural de cheval es chevaux.",
        seg: [ { es: "Pausa. Dos caballos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la vache", "le cheval", "le cochon", "la poule", "le singe", "l'ours"], seg: [
        { es: "Vaca, caballo, cerdo, gallina, mono y oso.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La granja", img: "bg-paris", yo: "camila",
    escena: "Camila visita la granja del vecino.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai un chat qui s'appelle Manzana.", "Tengo un gato que se llama Manzana."],
      ["hugo", "Mon voisin a deux chiens et une ferme.", "Mi vecino tiene dos perros y una granja."],
      ["camila", "Il y a des vaches dans le champ ! Et le cheval est dans le pré.", "¡Hay vacas en el campo! Y el caballo está en el prado."],
      ["hugo", "Oui, et les oiseaux chantent le matin.", "Sí, y los pájaros cantan por la mañana."]
    ],
    fijate: "Fíjate: des vaches, le cheval, les oiseaux."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Los animales",
      idea: "Granja: la vache, le cheval, le cochon, le mouton, la poule. Salvajes: le lion, l'éléphant, le singe, l'ours. Plurales: chevaux, oiseaux.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "la vache", es: "la vaca", ej: ["Il y a des vaches dans le champ.", "Hay vacas en el campo."] },
        { fr: "le cheval / les chevaux", es: "el caballo / los caballos" },
        { fr: "le cochon", es: "el cerdo" },
        { fr: "le mouton", es: "la oveja" },
        { fr: "la poule", es: "la gallina" },
        { fr: "le canard", es: "el pato" },
        { fr: "l'oiseau / les oiseaux", es: "el pájaro / los pájaros", ej: ["Les oiseaux chantent le matin.", "Los pájaros cantan por la mañana."] },
        { fr: "la souris", es: "el ratón" },
        { fr: "le lion", es: "el león" },
        { fr: "le singe", es: "el mono", ej: ["Les singes mangent des bananes.", "Los monos comen bananas."] },
        { fr: "l'ours", es: "el oso" },
        { fr: "le loup", es: "el lobo" },
        { fr: "le serpent", es: "la serpiente" },
        { fr: "la tortue", es: "la tortuga" },
        { fr: "le requin", es: "el tiburón" },
        { fr: "la girafe", es: "la jirafa" },
        { fr: "la ferme", es: "la granja" }
      ],
      clave: "Le chien aboie. = El perro ladra." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des chevaus","des chevaux","-al → -aux, con x."], ["des chevals", "des chevaux", "-al → -aux."], ["des oiseaus", "des oiseaux", "-eau → -eaux."], ["la serpent", "le serpent", "Masculino."]] }
  ],
  ejemplos: [
    { sit: "«Tengo un perro y dos gatos.»", resp: "J'ai un chien et deux chats.", pasos: ["chat + s."], porque: "Plural normal." },
    { sit: "«Hay caballos en la granja.»", resp: "Il y a des chevaux dans la ferme.", pasos: ["cheval → chevaux."], porque: "Plural especial." },
    { sit: "«Mi gato duerme todo el día.»", resp: "Mon chat dort toute la journée.", pasos: ["dort."], porque: "Mascota." }
  ],
  comprueba: [
    { q: "«le singe» es…", o: ["el mono", "el cisne"], a: 0, b: "voc", porque: "Mono." },
    { q: "El plural de cheval es…", o: ["chevaux", "chevals"], a: 0, b: "voc", porque: "-aux." },
    { q: "«l'ours» es…", o: ["el oso", "el oro"], a: 0, b: "voc", porque: "Oso." }
  ],
  practica: [
    { fase: "guiada", c: ["am-plur"], k: "choice", ask: "un cheval → des…", q: "«des ___»", o: ["chevaux", "chevals", "chevaus"], a: 0, pista: "-aux.", why: "<b>chevaux</b>." },
    { fase: "guiada", c: ["am-voc"], k: "match", ask: "Une cada animal.", q: "Francés → español", pairs: [["le cochon", "el cerdo"], ["la souris", "el ratón"], ["le serpent", "la serpiente"], ["la tortue", "la tortuga"], ["le canard", "el pato"]], pista: "souris = ratón.", why: "Animales." },
    { fase: "guiada", c: ["am-voc"], k: "sort", ask: "¿De granja o salvaje?", q: "Clasifica.", cats: ["Doméstico o de granja", "Salvaje"], items: [["la vache", 0], ["le mouton", 0], ["la poule", 0], ["le lapin", 0], ["le lion", 1], ["le loup", 1], ["le requin", 1], ["la girafe", 1]], pista: "loup = lobo.", why: "Tipos." },
    { fase: "indep", c: ["am-plur"], k: "fill", ask: "Plural de oiseau.", q: "J'ai deux ___ .", acc: ["oiseaux"], why: "<b>oiseaux</b>." },
    { fase: "indep", c: ["am-voc"], k: "fill", ask: "Escribe «perro».", q: "Le ___ aboie.", acc: ["chien"], why: "<b>chien</b>." },
    { fase: "indep", c: ["am-plur"], k: "spot", ask: "Encuentra el error.", s: "Dans la ferme , il y a des [chevals] et des vaches .", fix: "chevaux", why: "<b>chevaux</b>." },
    { fase: "aplica", c: ["am-voc"], k: "choice", es: true, say: "Les singes mangent des bananes.", ask: "Escucha. ¿Quién come bananas?", q: "Elige.", o: ["Los monos", "Los cerdos", "Los osos"], a: 0, why: "<b>singes</b>." },
    { fase: "aplica", c: ["am-voc"], k: "choice", ask: "«el pájaro»", q: "«___»", o: ["l'oiseau", "l'ours", "le loup"], a: 0, why: "<b>l'oiseau</b>." },
    { fase: "dominio", c: ["am-voc"], k: "order", ask: "Ordena: «Mi gato duerme todo el día».", tokens: ["Mon chat", "dort", "toute la journée."], why: "<b>Mon chat dort toute la journée.</b>" },
    { fase: "dominio", c: ["am-plur"], k: "fill", ask: "Plural de cheval.", q: "un cheval → des ___", acc: ["chevaux"], why: "<b>chevaux</b>." },
    { fase: "dominio", c: ["am-voc", "am-plur"], k: "listen", say: "Mon voisin a deux chiens et un chat noir.", acc: ["Mon voisin a deux chiens et un chat noir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon voisin a deux chiens et un chat noir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Manzana"], previo: ["qui", "s'appelle", "mon", "voisin", "deux", "champ", "pré", "chantent", "matin", "mangent", "bananes", "dort", "toute", "journée", "aboie", "chiens", "chats", "chat", "chien", "lapin", "noir"] }
};

E["a1-nature"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "La nature et les paysages",
  objetivo: {
    que: "Vas a describir paisajes con il y a, c'est y las preposiciones à la montagne, à la mer, en forêt.",
    corto: "Montaña, mar y bosque.",
    podras: ["Nombrar la mer, la montagne, la forêt, le lac.", "Distinguir le fleuve y la rivière.", "Decir à la mer, à la campagne, en forêt."],
    iconos: ["ic2/mundo", "m2d/celebrar", "m2d/correr"],
    previos: ["Las vacaciones (Primeros pasos) e il y a (lección 11)."],
    capacidad: "Ahora puedes describir un paisaje o tu región."
  },
  requiere: R("va-voc", "va-gr", "lg-ilya", "ci-ilya", "cq-adv", "ad-place"), recupera: ["va-voc"],
  conceptos: {
    "na-voc": { n: "la mer, la montagne, la forêt, le lac, le fleuve", b: "voc" },
    "na-prep": { n: "à la mer, à la montagne, à la campagne, en forêt", b: "voc" }
  },
  video: {
    titulo: "Los paisajes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "la mer · la montagne", seg: [
        { es: "Hola. Cuidado: el mar es femenino en francés." } ] },
      { v: "dos",
        a: { tag: "va al mar", fr: "le fleuve", es: "río grande" },
        b: { tag: "va a otro río", fr: "la rivière", es: "río afluente" },
        seg: [ { es: "Si llega al mar:", p: 1 }, { fr: "le fleuve", p: 1 }, { es: "Si llega a otro río:", p: 2 }, { fr: "la rivière", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me encanta nadar en el mar.»", o: ["J'adore nager dans la mer.", "J'adore nager dans le mer."], a: 0,
        bien: "¡Sí! La mer.", mal: "Mar es femenino: la mer.",
        seg: [ { es: "Pausa. El mar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la mer", "la montagne", "la forêt", "le lac", "la campagne", "magnifique"], seg: [
        { es: "Y para describir: magnifique, calme, sauvage.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mi región", img: "bg-paris", yo: "camila",
    escena: "Camila describe su región a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Cet été, je vais à la mer. Et toi ?", "Este verano voy al mar. ¿Y tú?"],
      ["camila", "Moi, je vais à la montagne. Dans ma région, il y a beaucoup de montagnes.", "Yo voy a la montaña. En mi región hay muchas montañas."],
      ["hugo", "Il y a un lac ?", "¿Hay un lago?"],
      ["camila", "Oui, près du village. Le paysage est magnifique !", "Sí, cerca del pueblo. ¡El paisaje es magnífico!"]
    ],
    fijate: "Fíjate: à la mer, à la montagne, il y a un lac."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La naturaleza",
      idea: "la mer (femenino), la montagne, la forêt, la plage, la campagne, le lac, la rivière, le fleuve. à la mer, à la montagne, à la campagne, en forêt.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "la mer", es: "el mar", ej: ["Cet été, je vais à la mer.", "Este verano voy al mar."] },
        { fr: "la montagne", es: "la montaña", ej: ["Nous allons à la montagne pour faire du ski.", "Vamos a la montaña a esquiar."] },
        { fr: "la forêt", es: "el bosque", ej: ["Nous marchons dans la forêt.", "Caminamos por el bosque."] },
        { fr: "la campagne", es: "el campo" },
        { fr: "le lac", es: "el lago" },
        { fr: "le fleuve", es: "el río (que llega al mar)" },
        { fr: "la rivière", es: "el río (afluente)" },
        { fr: "la colline", es: "la colina" },
        { fr: "la vallée", es: "el valle" },
        { fr: "le désert", es: "el desierto" },
        { fr: "l'île", es: "la isla" },
        { fr: "la cascade", es: "la cascada" },
        { fr: "le sommet", es: "la cima" },
        { fr: "le paysage", es: "el paisaje" },
        { fr: "magnifique", es: "magnífico" }
      ],
      clave: "en forêt (sin artículo) = en el bosque." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le mer", "la mer", "Femenino."], ["Je vais à le montagne.", "Je vais à la montagne.", "Femenino."]] }
  ],
  ejemplos: [
    { sit: "«Pasamos el fin de semana en el campo.»", resp: "Nous passons le week-end à la campagne.", pasos: ["à la campagne."], porque: "Lugar." },
    { sit: "«Hay un lago cerca del pueblo.»", resp: "Il y a un lac près du village.", pasos: ["il y a."], porque: "Describir." },
    { sit: "«El paisaje es magnífico.»", resp: "Le paysage est magnifique.", pasos: ["c'est / est + adjetivo."], porque: "Opinar." }
  ],
  comprueba: [
    { q: "«la forêt» es…", o: ["el bosque", "la flor"], a: 0, b: "voc", porque: "Bosque." },
    { q: "El mar en francés es…", o: ["femenino", "masculino"], a: 0, b: "voc", porque: "la mer." },
    { q: "Un río que llega al mar es…", o: ["le fleuve", "la rivière"], a: 0, b: "voc", porque: "Fleuve." }
  ],
  practica: [
    { fase: "guiada", c: ["na-voc"], k: "choice", ask: "«el mar»", q: "«___ mer»", o: ["la", "le", "l'"], a: 0, pista: "Femenino.", why: "<b>la mer</b>." },
    { fase: "guiada", c: ["na-voc"], k: "sort", ask: "¿Agua o tierra?", q: "Clasifica.", cats: ["Agua", "Tierra"], items: [["la mer", 0], ["le lac", 0], ["la rivière", 0], ["le fleuve", 0], ["la montagne", 1], ["la colline", 1], ["le désert", 1], ["la vallée", 1]], pista: "lac = lago.", why: "Paisajes." },
    { fase: "guiada", c: ["na-voc"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["la plage", "la playa"], ["l'île", "la isla"], ["le champ", "el campo de cultivo"], ["la cascade", "la cascada"], ["le sommet", "la cima"]], pista: "île = isla.", why: "Naturaleza." },
    { fase: "indep", c: ["na-prep"], k: "fill", ask: "Escribe la preposición y el artículo.", q: "Nous allons ___ montagne pour faire du ski.", acc: ["à la"], why: "<b>à la</b>." },
    { fase: "indep", c: ["na-voc"], k: "spot", ask: "Encuentra el error.", s: "J'adore nager dans [le] mer .", fix: "la", why: "<b>la mer</b>." },
    { fase: "indep", c: ["na-voc"], k: "fill", ask: "Escribe «bosque».", q: "Il y a beaucoup d'arbres dans la ___ .", acc: ["forêt"], why: "<b>forêt</b>." },
    { fase: "aplica", c: ["na-prep"], k: "choice", ask: "«Pasamos el fin de semana en el campo.»", q: "«Nous passons le week-end ___ campagne.»", o: ["à la", "en", "au"], a: 0, why: "<b>à la campagne</b>." },
    { fase: "aplica", c: ["na-voc"], k: "choice", es: true, say: "Dans ma région, il y a beaucoup de montagnes.", ask: "Escucha. ¿Qué hay en su región?", q: "Elige.", o: ["Muchas montañas", "Muchos lagos", "Muchas playas"], a: 0, why: "<b>montagnes</b>." },
    { fase: "dominio", c: ["na-voc"], k: "order", ask: "Ordena: «En mi región hay un gran lago».", tokens: ["Dans ma région,", "il y a", "un grand lac."], why: "<b>Dans ma région, il y a un grand lac.</b>" },
    { fase: "dominio", c: ["na-voc"], k: "fill", ask: "Escribe «mar».", q: "L'île est entourée par la ___ .", acc: ["mer"], why: "<b>mer</b>." },
    { fase: "dominio", c: ["na-voc", "na-prep"], k: "listen", say: "Le paysage est magnifique, il y a des montagnes et un lac.", acc: ["Le paysage est magnifique, il y a des montagnes et un lac.", "Le paysage est magnifique il y a des montagnes et un lac."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le paysage est magnifique, il y a des montagnes et un lac.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["cet", "été", "toi", "moi", "ma", "région", "montagnes", "près", "village", "nager", "arbres", "d'arbres", "passons", "week-end", "entourée", "par", "ski", "faire", "marchons", "champ", "plage", "grand", "calme", "sauvage", "allons"] }
};

E["a1-taches"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Les tâches ménagères : faire la vaisselle, passer l'aspirateur",
  objetivo: {
    que: "Vas a hablar de las tareas de la casa, sobre todo con faire.",
    corto: "Las tareas de la casa.",
    podras: ["Decir faire la vaisselle, le ménage, la lessive.", "Decir passer l'aspirateur, sortir la poubelle, ranger.", "Usar Il faut + infinitivo."],
    iconos: ["ic2/cofre", "m2d/correr", "ic2/bombilla"],
    previos: ["faire (lección 5), la casa (Primeros pasos) y la frecuencia (lección 22)."],
    capacidad: "Ahora puedes repartir las tareas de la casa."
  },
  requiere: R("ir-aller-faire", "ma-voc", "fq-escala", "gh-dias", "er-term"), recupera: ["ir-aller-faire", "fq-escala"],
  conceptos: {
    "ta-faire": { n: "faire la vaisselle, le ménage, la lessive", b: "voc" },
    "ta-autres": { n: "passer l'aspirateur, ranger, sortir la poubelle; il faut", b: "voc" }
  },
  video: {
    titulo: "Las tareas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "faire la vaisselle", seg: [
        { es: "Hola. Casi todas las tareas van con faire." } ] },
      { v: "frase", filas: [
          { nota: "platos", p: 1, partes: [["Je fais la vaisselle.", "-", 1]] },
          { nota: "limpiar", p: 2, partes: [["Nous faisons le ménage.", "-", 2]] },
          { nota: "aspiradora", p: 3, partes: [["Il passe l'aspirateur.", "-", 3]] } ], seg: [
        { es: "Lavo los platos.", p: 1 }, { es: "Hacemos la limpieza.", p: 2 }, { es: "Pasa la aspiradora.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Esta noche lavas tú los platos!»", o: ["Ce soir, c'est toi qui fais la vaisselle !", "Ce soir, c'est toi qui fait la vaisselle !"], a: 0,
        bien: "¡Sí! Toi qui fais.", mal: "Con toi qui, el verbo va con tú: fais.",
        seg: [ { es: "Pausa. Tú lavas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["faire la vaisselle", "faire le ménage", "faire la lessive", "passer l'aspirateur", "sortir la poubelle", "mettre la table"], seg: [
        { es: "Y para obligar: il faut ranger ta chambre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En casa", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo reparten las tareas.",
    pj: PJ,
    lineas: [
      ["hugo", "Qui sort la poubelle ce soir ?", "¿Quién saca la basura esta noche?"],
      ["camila", "C'est moi. Et toi, tu fais la vaisselle après le dîner.", "Yo. Y tú lavas los platos después de la cena."],
      ["hugo", "D'accord. Je passe l'aspirateur le samedi.", "De acuerdo. Yo paso la aspiradora los sábados."],
      ["camila", "Et il faut ranger la cuisine ! Nous faisons le ménage ensemble.", "¡Y hay que ordenar la cocina! Hacemos la limpieza juntos."]
    ],
    fijate: "Fíjate: faire la vaisselle, passer l'aspirateur, il faut ranger."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Tareas de la casa",
      idea: "Con faire: la vaisselle, le ménage, la lessive, la cuisine, les courses, son lit. Otros: passer l'aspirateur, ranger, sortir la poubelle, mettre la table. Il faut + infinitivo.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "faire la vaisselle", es: "lavar los platos", ej: ["Je fais la vaisselle après le dîner.", "Lavo los platos después de la cena."] },
        { fr: "faire le ménage", es: "limpiar la casa", ej: ["Nous faisons le ménage ensemble.", "Hacemos la limpieza juntos."] },
        { fr: "faire la lessive", es: "lavar la ropa" },
        { fr: "faire son lit", es: "hacer la cama" },
        { fr: "passer l'aspirateur", es: "pasar la aspiradora", ej: ["Il passe l'aspirateur le samedi.", "Pasa la aspiradora los sábados."] },
        { fr: "ranger sa chambre", es: "ordenar su cuarto" },
        { fr: "sortir la poubelle", es: "sacar la basura" },
        { fr: "mettre la table", es: "poner la mesa" },
        { fr: "Il faut ranger la cuisine.", es: "Hay que ordenar la cocina." },
        { fr: "C'est moi qui…", es: "Soy yo quien…" }
      ],
      clave: "C'est toi qui fais… (con toi, el verbo de tú)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je fais le lavage des plats.", "Je fais la vaisselle.", "Platos: la vaisselle."], ["C'est toi qui fait la vaisselle.", "C'est toi qui fais la vaisselle.", "toi qui fais."]] }
  ],
  ejemplos: [
    { sit: "«Lavo la ropa.»", resp: "Je fais la lessive.", pasos: ["faire la lessive."], porque: "Con faire." },
    { sit: "«Saco la basura.»", resp: "Je sors la poubelle.", pasos: ["sortir."], porque: "Otro verbo." },
    { sit: "«Hay que ordenar tu cuarto.»", resp: "Il faut ranger ta chambre.", pasos: ["il faut + infinitivo."], porque: "Obligación." }
  ],
  comprueba: [
    { q: "«faire la lessive» es…", o: ["lavar la ropa", "leer"], a: 0, b: "voc", porque: "Ropa." },
    { q: "«mettre la table» es…", o: ["poner la mesa", "comprar una mesa"], a: 0, b: "voc", porque: "Mesa." },
    { q: "Tras il faut va…", o: ["un infinitivo", "un verbo conjugado"], a: 0, b: "voc", porque: "Infinitivo." }
  ],
  practica: [
    { fase: "guiada", c: ["ta-faire"], k: "choice", ask: "«lavar los platos»", q: "«___»", o: ["faire la vaisselle", "faire la lessive", "passer l'aspirateur"], a: 0, pista: "Platos.", why: "<b>faire la vaisselle</b>." },
    { fase: "guiada", c: ["ta-faire", "ta-autres"], k: "sort", ask: "¿Va con faire o con otro verbo?", q: "Clasifica.", cats: ["Con faire", "Con otro verbo"], items: [["la vaisselle", 0], ["le ménage", 0], ["la lessive", 0], ["les courses", 0], ["l'aspirateur", 1], ["la poubelle", 1], ["la table", 1], ["sa chambre", 1]], pista: "aspirateur: passer.", why: "Verbos." },
    { fase: "guiada", c: ["ta-autres"], k: "match", ask: "Une cada tarea.", q: "Francés → español", pairs: [["faire le ménage", "limpiar la casa"], ["ranger sa chambre", "ordenar su cuarto"], ["sortir la poubelle", "sacar la basura"], ["faire son lit", "hacer la cama"]], pista: "ranger = ordenar.", why: "Tareas." },
    { fase: "indep", c: ["ta-autres"], k: "fill", ask: "Escribe «aspiradora».", q: "Je passe l'___ dans le salon.", acc: ["aspirateur"], why: "<b>aspirateur</b>." },
    { fase: "indep", c: ["ta-faire"], k: "fill", ask: "Conjuga faire (nous).", q: "Nous ___ le ménage le dimanche.", acc: ["faisons"], why: "<b>faisons</b>." },
    { fase: "indep", c: ["ta-faire"], k: "spot", ask: "Encuentra el error.", s: "Ce soir , c'est toi qui [fait] la vaisselle !", fix: "fais", why: "<b>fais</b>." },
    { fase: "aplica", c: ["ta-autres"], k: "choice", es: true, say: "Qui sort la poubelle ce soir ?", ask: "Escucha. ¿Qué preguntan?", q: "Elige.", o: ["¿Quién saca la basura?", "¿Quién pone la mesa?", "¿Quién lava la ropa?"], a: 0, why: "<b>sortir la poubelle</b>." },
    { fase: "aplica", c: ["ta-autres"], k: "fill", ask: "Conjuga passer (il).", q: "Il ___ l'aspirateur le samedi.", acc: ["passe"], why: "<b>passe</b>." },
    { fase: "dominio", c: ["ta-autres"], k: "order", ask: "Ordena: «Hay que ordenar la cocina».", tokens: ["Il faut", "ranger", "la cuisine."], why: "<b>Il faut ranger la cuisine.</b>" },
    { fase: "dominio", c: ["ta-faire"], k: "choice", ask: "«Friego los platos.»", q: "«___»", o: ["Je fais la vaisselle.", "Je fais le lavage des plats.", "Je passe la vaisselle."], a: 0, why: "<b>Je fais la vaisselle.</b>" },
    { fase: "dominio", c: ["ta-faire", "ta-autres"], k: "listen", say: "Le samedi, je fais le ménage et la lessive.", acc: ["Le samedi, je fais le ménage et la lessive.", "Le samedi je fais le ménage et la lessive."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le samedi, je fais le ménage et la lessive.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["qui", "sort", "sors", "ce", "soir", "moi", "toi", "après", "dîner", "d'accord", "samedi", "dimanche", "cuisine", "ensemble", "salon", "courses", "sa", "ta", "chambre", "faisons", "fais", "fait", "passe"] }
};

/* ================================ A1·9 · Preguntar y conversar ================================ */

E["a1-quel"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Quel, quelle, quels, quelles",
  objetivo: {
    que: "Vas a preguntar con quel y concordarlo con el nombre: quel âge, quelle heure, quels films.",
    corto: "¿Qué? ¿Cuál?",
    podras: ["Elegir quel / quelle / quels / quelles.", "Concordar con el nombre que viene detrás de est.", "Saber que las cuatro formas suenan igual."],
    iconos: ["m2d/pensativo", "ic2/bombilla", "ic2/lapiz"],
    previos: ["Las preguntas (lección 6) y el género (lección 3)."],
    capacidad: "Ahora puedes preguntar datos con quel sin errores."
  },
  requiere: R("qu-tres", "qu-mots", "na-age", "ad-voc", "ad-orden"), recupera: ["qu-mots"],
  conceptos: {
    "ql-forma": { n: "quel / quelle / quels / quelles", b: "gr" },
    "ql-est": { n: "Quelle est ta… ? concuerda con lo de detrás", b: "gr" }
  },
  video: {
    titulo: "quel", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Quelle heure est-il ?", seg: [
        { es: "Hola. Quel cambia según el nombre, aunque suena igual." } ] },
      { v: "dos",
        a: { tag: "masculino", fr: "Quel âge as-tu ?", es: "quel" },
        b: { tag: "femenino", fr: "Quelle heure est-il ?", es: "quelle" },
        seg: [ { es: "Edad es masculino:", p: 1 }, { fr: "Quel âge as-tu ?", p: 1 }, { es: "Hora es femenino:", p: 2 }, { fr: "Quelle heure est-il ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Cuál es tu dirección?»", o: ["Quelle est ton adresse ?", "Quel est ton adresse ?"], a: 0,
        bien: "¡Sí! Adresse es femenino.", mal: "Adresse es femenino: quelle.",
        seg: [ { es: "Pausa. La dirección." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quel âge", "quelle heure", "quels films", "quelles langues"], seg: [
        { es: "Mira siempre el nombre que viene.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un formulario", img: "bg-universidad", yo: "camila",
    escena: "Hugo ayuda a Camila con un formulario.",
    pj: PJ,
    lineas: [
      ["hugo", "Quel est ton nom ? Et quelle est ta nationalité ?", "¿Cuál es tu apellido? ¿Y cuál es tu nacionalidad?"],
      ["camila", "Torres. Je suis colombienne.", "Torres. Soy colombiana."],
      ["hugo", "Quelle est ton adresse à Pamplona ?", "¿Cuál es tu dirección en Pamplona?"],
      ["camila", "Rue 5, numéro 12. — Et quelles langues tu parles ? — Espagnol et français !", "Calle 5, número 12. — ¿Y qué idiomas hablas? — ¡Español y francés!"]
    ],
    fijate: "Fíjate: quel est ton nom, quelle est ta nationalité, quelles langues."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las cuatro formas",
      idea: "quel + masc. sing., quelle + fem. sing., quels + masc. pl., quelles + fem. pl. Con est, mira el nombre de detrás: Quelle est ta couleur préférée ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Quel âge as-tu ?", "¿Cuántos años tienes?", "quel"],
        ["Quel est ton numéro de téléphone ?", "¿Cuál es tu número de teléfono?", "quel"],
        ["Tu habites dans quel quartier ?", "¿En qué barrio vives?", "quel"],
        ["Quelle heure est-il ?", "¿Qué hora es?", "quelle"],
        ["Quelle est ta nationalité ?", "¿Cuál es tu nacionalidad?", "quelle"],
        ["Quelle est ta couleur préférée ?", "¿Cuál es tu color favorito?", "quelle"],
        ["Quels films tu aimes ?", "¿Qué películas te gustan?", "quels"],
        ["Tu aimes quels sports ?", "¿Qué deportes te gustan?", "quels"],
        ["Quelles langues parles-tu ?", "¿Qué idiomas hablas?", "quelles"],
        ["Quelles couleurs préfères-tu ?", "¿Qué colores prefieres?", "quelles"]
      ]],
      ej: [["Quel jour sommes-nous ?", "¿Qué día es hoy?"], ["Nous sommes lundi.", "Hoy es lunes."], ["Il est midi.", "Es mediodía."], ["Quelle musique tu écoutes ?", "¿Qué música escuchas?"], ["Quel film ?", "¿Qué película?"], ["J'ai vingt ans.", "Tengo veinte años."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quel est ton adresse ?", "Quelle est ton adresse ?", "Adresse: femenino."], ["Quel est ta couleur préférée ?", "Quelle est ta couleur préférée ?", "Couleur: femenino."], ["Quel langues ?", "Quelles langues ?", "Fem. plural."]] }
  ],
  ejemplos: [
    { sit: "«¿Qué hora es?»", resp: "Quelle heure est-il ?", pasos: ["heure es femenino."], porque: "quelle." },
    { sit: "«¿Qué películas te gustan?»", resp: "Quels films tu aimes ?", pasos: ["films: masc. plural."], porque: "quels." },
    { sit: "«¿Cuál es tu nacionalidad?»", resp: "Quelle est ta nationalité ?", pasos: ["nationalité es femenino."], porque: "quelle." }
  ],
  comprueba: [
    { q: "Las cuatro formas de quel…", o: ["suenan igual", "suenan distinto"], a: 0, b: "gr", porque: "Solo cambia la escritura." },
    { q: "Con «langues» (fem. pl.) se usa…", o: ["quelles", "quels"], a: 0, b: "gr", porque: "Fem. plural." },
    { q: "En «___ est ta couleur ?», quel concuerda con…", o: ["couleur", "est"], a: 0, b: "gr", porque: "El nombre." }
  ],
  practica: [
    { fase: "guiada", c: ["ql-forma"], k: "choice", ask: "«¿Cuántos años tienes?»", q: "«___ âge as-tu ?»", o: ["Quel", "Quelle", "Quels"], a: 0, pista: "âge: masc.", why: "<b>Quel âge</b>." },
    { fase: "guiada", c: ["ql-forma"], k: "choice", ask: "«¿Qué hora es?»", q: "«___ heure est-il ?»", o: ["Quelle", "Quel", "Quelles"], a: 0, pista: "heure: fem.", why: "<b>Quelle heure</b>." },
    { fase: "guiada", c: ["ql-forma"], k: "sort", ask: "¿quel o quelle?", q: "Clasifica.", cats: ["quel", "quelle"], items: [["âge", 0], ["prénom", 0], ["pays", 0], ["jour", 0], ["adresse", 1], ["couleur", 1], ["date", 1], ["profession", 1]], pista: "Mira el género.", why: "Concordancia." },
    { fase: "indep", c: ["ql-forma"], k: "fill", ask: "Escribe quel concordado (sports).", q: "Tu aimes ___ sports ?", acc: ["quels"], why: "<b>quels</b>." },
    { fase: "indep", c: ["ql-est"], k: "spot", ask: "Encuentra el error.", s: "[Quel] est ta couleur préférée ?", fix: "Quelle", why: "<b>Quelle</b>." },
    { fase: "indep", c: ["ql-est"], k: "fill", ask: "Escribe quel concordado (numéro).", q: "___ est ton numéro de téléphone ?", acc: ["Quel"], why: "<b>Quel</b>." },
    { fase: "aplica", c: ["ql-forma", "ql-est"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Quel âge as-tu ?", "J'ai vingt ans."], ["Quelle heure est-il ?", "Il est midi."], ["Quel jour sommes-nous ?", "Nous sommes lundi."], ["Quelle est ta nationalité ?", "Je suis colombienne."]], why: "Preguntas con quel." },
    { fase: "aplica", c: ["ql-forma"], k: "fill", ask: "Escribe quel concordado (couleurs).", q: "___ couleurs préfères-tu ?", acc: ["Quelles"], why: "<b>Quelles</b>." },
    { fase: "dominio", c: ["ql-forma"], k: "choice", ask: "«¿Qué película?»", q: "«___»", o: ["Quel film ?", "Quelle film ?", "Quels film ?"], a: 0, why: "<b>Quel film</b>." },
    { fase: "dominio", c: ["ql-forma"], k: "order", ask: "Ordena: «¿Qué música escuchas?».", tokens: ["Quelle", "musique", "tu écoutes ?"], why: "<b>Quelle musique tu écoutes ?</b>" },
    { fase: "dominio", c: ["ql-forma", "ql-est"], k: "listen", say: "Quelle est ton adresse à Pamplona ?", acc: ["Quelle est ton adresse à Pamplona ?", "Quelle est ton adresse à Pamplona?", "Quelle est ton adresse à Pamplona"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Quelle est ton adresse à Pamplona ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Torres", "Pamplona"], previo: ["nom", "ton", "ta", "nationalité", "colombienne", "adresse", "rue", "numéro", "langues", "parles", "espagnol", "français", "âge", "as-tu", "heure", "est-il", "téléphone", "habites", "quartier", "couleur", "préférée", "films", "aimes", "sports", "préfères-tu", "couleurs", "parles-tu", "prénom", "pays", "jour", "date", "profession", "sommes-nous", "lundi", "midi", "musique", "écoutes", "film", "vingt", "ans", "douze", "cinq"] }
};

E["a1-interrogatifs"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Où, quand, comment, combien, pourquoi",
  objetivo: {
    que: "Vas a usar todas las palabras interrogativas en tres registros y a responder con parce que.",
    corto: "¿Dónde, cuándo, cómo, por qué?",
    podras: ["Usar où, quand, comment, combien, pourquoi, qui.", "Preguntar en oral, neutro y formal.", "Decir combien de y responder parce que."],
    iconos: ["m2d/pensativo", "ic2/bombilla", "ic2/mundo"],
    previos: ["Las preguntas (lección 6)."],
    capacidad: "Ahora puedes hacer cualquier pregunta básica."
  },
  requiere: R("qu-tres", "qu-mots", "ql-forma", "cq-de"), recupera: ["qu-tres", "qu-mots"],
  conceptos: {
    "it-mots": { n: "où, quand, comment, combien de, pourquoi, qui", b: "gr" },
    "it-reg": { n: "Tu vas où ? / Où est-ce que tu vas ? / Où vas-tu ?", b: "gr" }
  },
  video: {
    titulo: "Preguntar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Pourquoi ?", seg: [
        { es: "Hola. Una pregunta, tres maneras de hacerla." } ] },
      { v: "frase", filas: [
          { nota: "oral", p: 1, partes: [["Tu vas où ?", "-", 1]] },
          { nota: "neutro", p: 2, partes: [["Où est-ce que tu vas ?", "-", 2]] },
          { nota: "formal", p: 3, partes: [["Où vas-tu ?", "-", 3]] } ], seg: [
        { es: "Con amigos,", p: 1 }, { es: "en cualquier lugar,", p: 2 }, { es: "y por escrito o formal.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Cuántos hermanos tienes?»", o: ["Combien de frères as-tu ?", "Combien des frères as-tu ?"], a: 0,
        bien: "¡Sí! Combien de.", mal: "Tras combien va solo de.",
        seg: [ { es: "Pausa. Cuántos hermanos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["où", "quand", "comment", "combien de", "pourquoi", "parce que"], seg: [
        { es: "A pourquoi se responde con parce que.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preguntas", img: "bg-cafe", yo: "camila",
    escena: "Hugo entrevista a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Pourquoi tu apprends le français ?", "¿Por qué aprendes francés?"],
      ["camila", "Parce que je veux étudier à Lyon.", "Porque quiero estudiar en Lyon."],
      ["hugo", "Quand est-ce que tu pars ?", "¿Cuándo te vas?"],
      ["camila", "En juillet. — Et tu habites où, là-bas ? — Je ne sais pas encore !", "En julio. — ¿Y dónde vives allá? — ¡Todavía no lo sé!"]
    ],
    fijate: "Fíjate: pourquoi → parce que; quand est-ce que; tu habites où."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las interrogativas",
      idea: "où (dónde), quand (cuándo), comment (cómo), combien (cuánto), pourquoi (por qué), qui (quién). Tres registros: oral, est-ce que, inversión. Combien de + nombre. Pourquoi → parce que.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Tu habites où ?", "¿Dónde vives?", "oral"],
        ["Où est-ce que tu habites ?", "¿Dónde vives?", "neutro"],
        ["Où habites-tu ?", "¿Dónde vives?", "formal"],
        ["Quand est-ce que tu pars ?", "¿Cuándo te vas?", "neutro"],
        ["Quand arrives-tu ?", "¿Cuándo llegas?", "formal"],
        ["Comment vas-tu ?", "¿Cómo estás?", "formal"],
        ["Tu t'appelles comment ?", "¿Cómo te llamas?", "oral"],
        ["Combien coûte ce livre ?", "¿Cuánto cuesta este libro?", "formal"],
        ["Combien de frères as-tu ?", "¿Cuántos hermanos tienes?", "combien de"],
        ["Pourquoi tu apprends le français ?", "¿Por qué aprendes francés?", "oral"],
        ["Parce que je veux étudier à Lyon.", "Porque quiero estudiar en Lyon.", "respuesta"],
        ["Qui est-ce ?", "¿Quién es?", "qui"]
      ]],
      ej: [["Tu vas où ?", "¿Adónde vas?"], ["C'est combien ?", "¿Cuánto es?"], ["Tu pars quand ?", "¿Cuándo te vas?"], ["Où allez-vous ?", "¿Adónde va usted?"], ["Comment vous appelez-vous ?", "¿Cómo se llama usted?"], ["Quand partez-vous ?", "¿Cuándo se va usted?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Combien des frères ?", "Combien de frères ?", "combien de."], ["Combien des étudiants ?", "Combien d'étudiants ?", "Vocal: d'."], ["Pourquoi je travaille beaucoup.", "Parce que je travaille beaucoup.", "Respuesta: parce que."]] }
  ],
  ejemplos: [
    { sit: "«¿Cuándo llegas?» (formal)", resp: "Quand arrives-tu ?", pasos: ["Inversión."], porque: "Formal." },
    { sit: "«¿Cuántos primos tienes?»", resp: "Combien de cousins as-tu ?", pasos: ["combien de."], porque: "Cantidad." },
    { sit: "«¿Por qué estás cansado?» — «Porque trabajo mucho.»", resp: "Parce que je travaille beaucoup.", pasos: ["parce que."], porque: "Respuesta." }
  ],
  comprueba: [
    { q: "A pourquoi se responde con…", o: ["parce que", "pourquoi"], a: 0, b: "gr", porque: "Porque." },
    { q: "«Tu vas où ?» es…", o: ["oral, informal", "formal"], a: 0, b: "gr", porque: "Al final, oral." },
    { q: "Tras combien va…", o: ["de", "des"], a: 0, b: "gr", porque: "combien de." }
  ],
  practica: [
    { fase: "guiada", c: ["it-mots"], k: "choice", ask: "— «___ tu habites ?» — «À Cúcuta.»", q: "«___ tu habites ?»", o: ["Où", "Quand", "Comment"], a: 0, pista: "Lugar.", why: "<b>Où</b>." },
    { fase: "guiada", c: ["it-mots"], k: "match", ask: "Une cada palabra.", q: "Francés → español", pairs: [["où", "dónde"], ["quand", "cuándo"], ["combien", "cuánto"], ["pourquoi", "por qué"], ["qui", "quién"]], pista: "quand = cuándo.", why: "Interrogativas." },
    { fase: "guiada", c: ["it-mots"], k: "choice", ask: "— «___ tu pars en vacances ?» — «En juillet.»", q: "«___ tu pars en vacances ?»", o: ["Quand", "Où", "Pourquoi"], a: 0, pista: "Tiempo.", why: "<b>Quand</b>." },
    { fase: "indep", c: ["it-mots"], k: "fill", ask: "Responde a pourquoi.", q: "— Pourquoi tu es fatigué ? — ___ je travaille beaucoup.", acc: ["Parce que"], why: "<b>Parce que</b>." },
    { fase: "indep", c: ["it-mots"], k: "fill", ask: "Escribe «cómo».", q: "___ vas-tu ? — Très bien, merci.", acc: ["Comment"], why: "<b>Comment</b>." },
    { fase: "indep", c: ["it-mots"], k: "spot", ask: "Encuentra el error.", s: "Combien [des] étudiants il y a dans la classe ?", fix: "d'", why: "<b>d'étudiants</b>." },
    { fase: "aplica", c: ["it-reg"], k: "sort", ask: "¿Oral o formal?", q: "Clasifica.", cats: ["Oral informal", "Formal"], items: [["Tu vas où ?", 0], ["Tu t'appelles comment ?", 0], ["C'est combien ?", 0], ["Tu pars quand ?", 0], ["Où allez-vous ?", 1], ["Comment vous appelez-vous ?", 1], ["Quand partez-vous ?", 1]], why: "Registro." },
    { fase: "aplica", c: ["it-reg"], k: "choice", ask: "«¿Cuándo llegas?» (formal)", q: "«___»", o: ["Quand arrives-tu ?", "Tu arrives quand pourquoi ?", "Quand tu arrives est-ce que ?"], a: 0, why: "<b>Inversión</b>." },
    { fase: "dominio", c: ["it-mots"], k: "fill", ask: "Escribe «cuántos».", q: "___ de cousins as-tu ?", acc: ["Combien"], why: "<b>Combien</b>." },
    { fase: "dominio", c: ["it-reg"], k: "order", ask: "Ordena: «¿Por qué estudias francés?».", tokens: ["Pourquoi", "est-ce que", "tu étudies", "le français ?"], why: "<b>Pourquoi est-ce que tu étudies le français ?</b>" },
    { fase: "dominio", c: ["it-mots", "it-reg"], k: "listen", say: "Où est-ce que tu habites ?", acc: ["Où est-ce que tu habites ?", "Où est-ce que tu habites?", "Où est-ce que tu habites"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Où est-ce que tu habites ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Cúcuta"], previo: ["apprends", "français", "veux", "étudier", "pars", "juillet", "habites", "là-bas", "sais", "encore", "vas-tu", "arrives-tu", "t'appelles", "coûte", "ce", "livre", "frères", "as-tu", "cousins", "est-ce", "vacances", "fatigué", "travaille", "beaucoup", "très", "bien", "merci", "étudiants", "classe", "étudies", "allez-vous", "appelez-vous", "partez-vous", "vas", "pars"] }
};

E["a1-politesse"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Demander poliment : je voudrais, pourriez-vous",
  objetivo: {
    que: "Vas a pedir con cortesía con je voudrais y pourriez-vous, y responder a un gracias.",
    corto: "Pedir con cortesía.",
    podras: ["Pedir Je voudrais… y Pourriez-vous… ?", "Responder Je vous en prie.", "Distinguir el registro vous del tu."],
    iconos: ["ic2/amigos", "m2d/senalar", "ic2/bombilla"],
    previos: ["Merci y s'il vous plaît (Primeros pasos) y pouvoir (lección 15)."],
    capacidad: "Ahora puedes pedir cualquier cosa con cortesía."
  },
  requiere: R("me-svp", "me-merci", "re-pedir", "ca-pedir", "vp-conj", "cs-tu"), recupera: ["me-svp", "re-pedir"],
  conceptos: {
    "pz-cond": { n: "Je voudrais… / Pourriez-vous… ?", b: "gr" },
    "pz-reg": { n: "vous / tu: Excusez-moi / Excuse-moi; Je vous en prie / De rien", b: "gr" }
  },
  video: {
    titulo: "La cortesía", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Pourriez-vous… ?", seg: [
        { es: "Hola. Con desconocidos, condicional y usted." } ] },
      { v: "dos",
        a: { tag: "brusco", fr: "Je veux un café.", es: "quiero" },
        b: { tag: "cortés", fr: "Je voudrais un café.", es: "quisiera" },
        seg: [ { es: "Esto suena brusco:", p: 1 }, { fr: "Je veux un café.", p: 1 }, { es: "Mejor:", p: 2 }, { fr: "Je voudrais un café, s'il vous plaît.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Te dicen «Merci beaucoup !». Respondes…", o: ["Je vous en prie.", "Pourriez-vous ?"], a: 0,
        bien: "¡Sí! Es «de nada».", mal: "A un gracias se responde Je vous en prie o De rien.",
        seg: [ { es: "Pausa. De nada, formal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je voudrais…", "Pourriez-vous… ?", "Excusez-moi", "Je vous en prie", "De rien", "Je suis désolé"], seg: [
        { es: "Con amigos: excuse-moi, de rien, tu peux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la secretaría", img: "bg-universidad", yo: "camila",
    escena: "Camila pide información en la secretaría.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, madame. Je voudrais une information.", "Disculpe, señora. Quisiera una información."],
      ["vendeur", "Bien sûr. Je vous écoute.", "Claro. La escucho."],
      ["camila", "Pourriez-vous parler plus lentement, s'il vous plaît ?", "¿Podría hablar más despacio, por favor?"],
      ["camila", "Merci beaucoup ! — Je vous en prie.", "¡Muchas gracias! — De nada."]
    ],
    fijate: "Fíjate: je voudrais, pourriez-vous, je vous en prie."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Pedir con cortesía",
      idea: "Je voudrais + nombre o infinitivo. Pourriez-vous + infinitivo ? Responder a merci: Je vous en prie (formal), De rien.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Je voudrais un café, s'il vous plaît.", "Quisiera un café, por favor.", "pedir"],
        ["Je voudrais parler au directeur.", "Quisiera hablar con el director.", "pedir"],
        ["Je voudrais réserver une table pour deux.", "Quisiera reservar una mesa para dos.", "pedir"],
        ["Pourriez-vous répéter, s'il vous plaît ?", "¿Podría repetir, por favor?", "formal"],
        ["Pourriez-vous m'aider ?", "¿Podría ayudarme?", "formal"],
        ["Vous pouvez parler plus lentement ?", "¿Puede hablar más despacio?", "neutro"],
        ["Excusez-moi…", "Disculpe…", "vous"],
        ["Excuse-moi…", "Disculpa…", "tu"],
        ["Je vous en prie.", "De nada.", "vous"],
        ["De rien.", "De nada.", "tu / neutro"],
        ["Tu peux m'aider ?", "¿Puedes ayudarme?", "tu"],
        ["Je suis désolé.", "Lo siento.", "disculparse"]
      ]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je veux un café.", "Je voudrais un café.", "Más cortés."], ["Madame, peux-tu m'aider ?", "Madame, pouvez-vous m'aider ?", "Con madame: vous."]] }
  ],
  ejemplos: [
    { sit: "No entiendes al profesor.", resp: "Pourriez-vous répéter, s'il vous plaît ?", pasos: ["Pourriez-vous + infinitivo."], porque: "Formal." },
    { sit: "Te dan las gracias.", resp: "Je vous en prie.", pasos: ["De nada, formal."], porque: "Respuesta." },
    { sit: "Pides un té en una cafetería.", resp: "Je voudrais un thé, s'il vous plaît.", pasos: ["Je voudrais."], porque: "Cortés." }
  ],
  comprueba: [
    { q: "«Pourriez-vous… ?» significa…", o: ["¿Podría…?", "¿Puedo…?"], a: 0, b: "gr", porque: "Condicional." },
    { q: "«Je vous en prie» responde a…", o: ["merci", "bonjour"], a: 0, b: "gr", porque: "De nada." },
    { q: "Con desconocidos se usa…", o: ["vous", "tu"], a: 0, b: "gr", porque: "Formal." }
  ],
  practica: [
    { fase: "guiada", c: ["pz-cond"], k: "choice", ask: "En una cafetería.", q: "Tú: «___»", o: ["Je voudrais un thé, s'il vous plaît.", "Je veux thé.", "Un thé, vite !"], a: 0, pista: "Cortés.", why: "<b>Je voudrais</b>." },
    { fase: "guiada", c: ["pz-cond"], k: "choice", ask: "No entiendes al profesor.", q: "Tú: «___»", o: ["Pourriez-vous répéter, s'il vous plaît ?", "Répète !", "Je suis désolé."], a: 0, pista: "Podría.", why: "<b>Pourriez-vous répéter</b>." },
    { fase: "guiada", c: ["pz-reg"], k: "sort", ask: "¿Formal o informal?", q: "Clasifica.", cats: ["Formal (vous)", "Informal (tu)"], items: [["S'il vous plaît", 0], ["Je vous en prie", 0], ["Excusez-moi", 0], ["Pourriez-vous… ?", 0], ["S'il te plaît", 1], ["De rien", 1], ["Excuse-moi", 1], ["Tu peux… ?", 1]], pista: "vous = formal.", why: "Registro." },
    { fase: "indep", c: ["pz-cond"], k: "fill", ask: "Escribe «Podría».", q: "___-vous parler plus lentement ?", acc: ["Pourriez"], why: "<b>Pourriez</b>." },
    { fase: "indep", c: ["pz-cond"], k: "fill", ask: "Escribe «quisiera».", q: "Je ___ réserver une table pour deux.", acc: ["voudrais"], why: "<b>voudrais</b>." },
    { fase: "indep", c: ["pz-reg"], k: "spot", ask: "Encuentra el error.", s: "Madame , [peux-tu] m'aider , s'il vous plaît ?", fix: "pouvez-vous", why: "<b>pouvez-vous</b>." },
    { fase: "aplica", c: ["pz-reg"], k: "match", ask: "¿Para qué sirve cada fórmula?", q: "Fórmula → uso", pairs: [["Excusez-moi", "llamar la atención"], ["Pardon ?", "pedir que repitan"], ["Je vous en prie", "responder a un gracias"], ["Je suis désolé", "disculparse"]], why: "Fórmulas." },
    { fase: "aplica", c: ["pz-reg"], k: "fill", ask: "Completa: «De nada».", q: "Merci ! — De ___ .", acc: ["rien"], why: "<b>De rien</b>." },
    { fase: "dominio", c: ["pz-cond"], k: "order", ask: "Ordena: «¿Podría ayudarme, por favor?».", tokens: ["Pourriez-vous", "m'aider,", "s'il vous plaît ?"], why: "<b>Pourriez-vous m'aider, s'il vous plaît ?</b>" },
    { fase: "dominio", c: ["pz-reg"], k: "choice", es: true, say: "Merci beaucoup ! — Je vous en prie.", ask: "Escucha. ¿Qué significa la respuesta?", q: "Elige.", o: ["De nada", "Por favor", "Lo siento"], a: 0, why: "<b>Je vous en prie</b> = de nada." },
    { fase: "dominio", c: ["pz-cond", "pz-reg"], k: "listen", say: "Excusez-moi, pourriez-vous répéter la question ?", acc: ["Excusez-moi, pourriez-vous répéter la question ?", "Excusez-moi, pourriez-vous répéter la question?", "Excusez-moi pourriez-vous répéter la question ?"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Excusez-moi, pourriez-vous répéter la question ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: ["madame", "information", "bien", "sûr", "écoute", "parler", "plus", "lentement", "merci", "beaucoup", "directeur", "réserver", "table", "pour", "deux", "répéter", "m'aider", "pouvez", "pouvez-vous", "peux", "peux-tu", "thé", "café", "vite", "répète", "question", "pardon", "te"] }
};

E["a1-pronoms-toniques"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Moi, toi, lui, elle, nous, vous, eux, elles",
  objetivo: {
    que: "Vas a usar los pronombres tónicos: solos, después de preposición y para insistir.",
    corto: "Moi, toi, lui…",
    podras: ["Responder Moi ! y preguntar Et toi ?", "Decir avec moi, chez lui, pour eux.", "Insistir: Moi, je préfère le thé."],
    iconos: ["ic2/amigos", "m2d/senalar", "m2d/pensativo"],
    previos: ["Los pronombres sujeto (lección 4) y chez (lección 35)."],
    capacidad: "Ahora puedes decir con quién, para quién y en casa de quién."
  },
  requiere: R("av2-chez", "er-term", "ci-cest", "gi-pref"), recupera: ["av2-chez"],
  conceptos: {
    "pt-forma": { n: "moi, toi, lui, elle, nous, vous, eux, elles", b: "gr" },
    "pt-uso": { n: "solos, tras preposición, para insistir", b: "gr" }
  },
  video: {
    titulo: "Los tónicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Et toi ?", seg: [
        { es: "Hola. Después de con, para o en casa de, va un tónico." } ] },
      { v: "dos",
        a: { tag: "sujeto", fr: "je · tu · il · ils", es: "antes del verbo" },
        b: { tag: "tónico", fr: "moi · toi · lui · eux", es: "solo o tras preposición" },
        seg: [ { es: "Delante del verbo:", p: 1 }, { fr: "je, tu, il, ils", p: 1 }, { es: "Solos o tras preposición:", p: 2 }, { fr: "moi, toi, lui, eux", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Quieres ir al cine con ellos?»", o: ["Tu veux venir au cinéma avec eux ?", "Tu veux venir au cinéma avec ils ?"], a: 0,
        bien: "¡Sí! Tras avec: eux.", mal: "Tras preposición: eux, nunca ils.",
        seg: [ { es: "Pausa. Con ellos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["moi", "toi", "lui", "elle", "nous", "vous", "eux", "elles"], seg: [
        { es: "Y con c'est: c'est lui, c'est moi.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Quién viene?", img: "bg-cafe", yo: "camila",
    escena: "Camila organiza una cena.",
    pj: PJ,
    lineas: [
      ["camila", "Qui veut du café ? — Moi !", "¿Quién quiere café? — ¡Yo!"],
      ["hugo", "Moi, je préfère le thé. Tu viens avec nous ce soir ?", "Yo prefiero té. ¿Vienes con nosotros esta noche?"],
      ["camila", "Oui. On dîne chez lui ou chez elle ?", "Sí. ¿Cenamos en casa de él o de ella?"],
      ["hugo", "Chez Sofia. Et ce cadeau, c'est pour eux.", "En casa de Sofía. Y este regalo es para ellos."]
    ],
    fijate: "Fíjate: Moi !, avec nous, chez lui, pour eux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los pronombres tónicos",
      idea: "moi, toi, lui, elle, nous, vous, eux, elles. Solos (Moi !), tras preposición (avec moi, chez lui) o para insistir (Moi, je…). C'est lui.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Qui veut du café ? — Moi !", "¿Quién quiere café? — ¡Yo!", "solo"],
        ["Je m'appelle Laura. Et toi ?", "Me llamo Laura. ¿Y tú?", "solo"],
        ["Tu viens avec moi ?", "¿Vienes conmigo?", "avec"],
        ["Je travaille avec lui.", "Trabajo con él.", "avec"],
        ["C'est pour elle.", "Es para ella.", "pour"],
        ["Tu viens avec nous ?", "¿Vienes con nosotros?", "avec"],
        ["Ce cadeau est pour eux.", "Este regalo es para ellos.", "pour"],
        ["Moi, j'habite chez mes parents.", "Yo vivo en casa de mis padres.", "insistir"],
        ["Moi, je préfère le thé.", "Yo prefiero té.", "insistir"],
        ["C'est lui qui a les clés.", "Es él quien tiene las llaves.", "c'est"]
      ]],
      ej: [["je → moi", "yo"], ["tu → toi", "tú"], ["il → lui", "él"], ["ils → eux", "ellos"], ["sans elle", "sin ella"], ["chez vous", "en su casa"], ["avec elles", "con ellas"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["avec je", "avec moi", "Tras preposición: tónico."], ["avec ils", "avec eux", "ils → eux."], ["pour tu", "pour toi", "tu → toi."], ["chez il", "chez lui", "il → lui."]] }
  ],
  ejemplos: [
    { sit: "«Voy con él.»", resp: "Je vais avec lui.", pasos: ["il → lui."], porque: "Preposición." },
    { sit: "«¿Es para ti, este regalo?»", resp: "C'est pour toi, ce cadeau ?", pasos: ["tu → toi."], porque: "Preposición." },
    { sit: "«Yo vivo en casa de mis padres. ¿Y tú?»", resp: "Moi, j'habite chez mes parents. Et toi ?", pasos: ["Moi para insistir."], porque: "Énfasis." }
  ],
  comprueba: [
    { q: "Tras una preposición va…", o: ["un pronombre tónico", "un pronombre sujeto"], a: 0, b: "gr", porque: "avec moi." },
    { q: "El tónico de ils es…", o: ["eux", "lui"], a: 0, b: "gr", porque: "eux." },
    { q: "El tónico de il es…", o: ["lui", "le"], a: 0, b: "gr", porque: "lui." }
  ],
  practica: [
    { fase: "guiada", c: ["pt-uso"], k: "choice", ask: "«¿Vienes a mi casa esta noche?»", q: "«Tu viens chez ___ ce soir ?»", o: ["moi", "je", "me"], a: 0, pista: "Tras chez.", why: "<b>chez moi</b>." },
    { fase: "guiada", c: ["pt-forma"], k: "match", ask: "Une cada sujeto con su tónico.", q: "Sujeto → tónico", pairs: [["je", "moi"], ["tu", "toi"], ["il", "lui"], ["ils", "eux"]], pista: "il → lui.", why: "Tónicos." },
    { fase: "guiada", c: ["pt-uso"], k: "choice", ask: "«Me llamo Laura. ¿Y tú?»", q: "«Je m'appelle Laura. Et ___ ?»", o: ["toi", "tu", "te"], a: 0, pista: "Solo.", why: "<b>Et toi ?</b>" },
    { fase: "indep", c: ["pt-forma"], k: "fill", ask: "Escribe «él».", q: "Je travaille avec ___ .", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "indep", c: ["pt-uso"], k: "fill", ask: "Escribe «Yo» para insistir.", q: "___ , je préfère le thé.", acc: ["Moi"], why: "<b>Moi</b>." },
    { fase: "indep", c: ["pt-forma"], k: "spot", ask: "Encuentra el error.", s: "Tu veux venir au cinéma avec [ils] ?", fix: "eux", why: "<b>eux</b>." },
    { fase: "aplica", c: ["pt-forma"], k: "sort", ask: "¿Sujeto o tónico?", q: "Clasifica.", cats: ["Sujeto", "Tónico"], items: [["je", 0], ["tu", 0], ["il", 0], ["ils", 0], ["moi", 1], ["toi", 1], ["lui", 1], ["eux", 1]], why: "Pronombres." },
    { fase: "aplica", c: ["pt-uso"], k: "choice", ask: "«Este libro es para ellos.»", q: "«Ce livre est pour ___ .»", o: ["eux", "ils", "leur"], a: 0, why: "<b>eux</b>." },
    { fase: "dominio", c: ["pt-uso"], k: "fill", ask: "Escribe «ti».", q: "C'est pour ___ , ce cadeau ?", acc: ["toi"], why: "<b>toi</b>." },
    { fase: "dominio", c: ["pt-uso"], k: "order", ask: "Ordena: «Es él quien tiene las llaves».", tokens: ["C'est lui", "qui a", "les clés."], why: "<b>C'est lui qui a les clés.</b>" },
    { fase: "dominio", c: ["pt-forma", "pt-uso"], k: "listen", say: "Moi, j'habite chez mes parents. Et toi ?", acc: ["Moi, j'habite chez mes parents. Et toi ?", "Moi, j'habite chez mes parents. Et toi?", "Moi j'habite chez mes parents. Et toi ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Moi, j'habite chez mes parents. Et toi ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Laura"], previo: ["qui", "veut", "café", "thé", "préfère", "viens", "ce", "soir", "dîne", "cadeau", "travaille", "m'appelle", "j'habite", "parents", "clés", "livre", "veux", "venir", "cinéma", "sans", "me", "te", "leur", "mes"] }
};

E["a1-on"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le pronom on : on va au cinéma ?",
  objetivo: {
    que: "Vas a usar on como «nosotros» en el habla y como «la gente, se» en lo general.",
    corto: "On va au parc ?",
    podras: ["Conjugar con on en tercera persona singular.", "Usar on = nosotros (oral).", "Usar on = se (En France, on dîne tard)."],
    iconos: ["ic2/amigos", "m2d/correr", "ic2/mundo"],
    previos: ["Los verbos en -er (lección 4) y aller (lección 5)."],
    capacidad: "Ahora hablas como los franceses: con on."
  },
  requiere: R("er-term", "ir-aller-faire", "ir-etre-avoir", "so-proposer"), recupera: ["er-term"],
  conceptos: {
    "on-forma": { n: "on + 3.ª persona singular", b: "gr" },
    "on-sens": { n: "on = nosotros / on = la gente, se", b: "gr" }
  },
  video: {
    titulo: "on", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "On y va !", seg: [
        { es: "Hola. On es la palabra más oída en Francia." } ] },
      { v: "dos",
        a: { tag: "= nosotros", fr: "On va au parc ?", es: "¿Vamos al parque?" },
        b: { tag: "= se, la gente", fr: "En France, on dit bonjour.", es: "En Francia se dice bonjour." },
        seg: [ { es: "Nosotros, en el habla:", p: 1 }, { fr: "On va au parc ?", p: 1 }, { es: "La gente en general:", p: 2 }, { fr: "En France, on dit bonjour.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vamos al parque.»", o: ["On va au parc.", "On allons au parc."], a: 0,
        bien: "¡Sí! Singular.", mal: "Con on, el verbo va como il: on va.",
        seg: [ { es: "Pausa. On con aller." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["on va", "on mange", "on est", "on a", "On y va !", "On verra."], seg: [
        { es: "El verbo siempre como con il.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hacen planes.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce week-end, on va chez mes grands-parents.", "Este fin de semana vamos a casa de mis abuelos."],
      ["camila", "Super ! On mange ensemble ?", "¡Genial! ¿Comemos juntos?"],
      ["hugo", "Oui. Mais en France, on dîne tard, vers vingt heures.", "Sí. Pero en Francia se cena tarde, hacia las ocho."],
      ["camila", "En Colombie, on boit beaucoup de café ! — On est en retard, on y va !", "¡En Colombia se toma mucho café! — Llegamos tarde, ¡vamos!"]
    ],
    fijate: "Fíjate: on va, on mange (nosotros); on dîne, on boit (la gente)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El pronombre on",
      idea: "on + verbo como il: on va, on mange, on est. Sentido 1: nosotros (oral). Sentido 2: la gente, se.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["On va au cinéma ce soir ?", "¿Vamos al cine esta noche?", "nosotros"],
        ["On mange ensemble ce soir.", "Comemos juntos esta noche.", "nosotros"],
        ["On est en retard !", "¡Llegamos tarde!", "nosotros"],
        ["On se voit demain ?", "¿Nos vemos mañana?", "nosotros"],
        ["Paul et moi, on travaille ensemble.", "Paul y yo trabajamos juntos.", "nosotros"],
        ["En France, on dit bonjour.", "En Francia se dice bonjour.", "la gente"],
        ["En Colombie, on boit beaucoup de café.", "En Colombia se toma mucho café.", "la gente"],
        ["Ici, on parle français.", "Aquí se habla francés.", "la gente"],
        ["On y va !", "¡Vamos!", "expresión"],
        ["On verra.", "Ya veremos.", "expresión"]
      ]],
      ej: [["On ne sait jamais.", "Nunca se sabe."], ["On se tutoie ?", "¿Nos tuteamos?"], ["En France, on dîne tard.", "En Francia se cena tarde."], ["Ici, on ne fume pas.", "Aquí no se fuma."], ["Au Mexique, on mange épicé.", "En México se come picante."], ["On part à huit heures, d'accord ?", "Salimos a las ocho, ¿vale?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["On allons au parc.", "On va au parc.", "Singular."], ["Demain, on partons tôt.", "Demain, on part tôt.", "on part."], ["On mangeons ensemble ?", "On mange ensemble ?", "on mange."]] }
  ],
  ejemplos: [
    { sit: "«Vamos al mercado.» (oral)", resp: "On va au marché.", pasos: ["on va."], porque: "Nosotros." },
    { sit: "«En Quebec se habla francés.»", resp: "Au Québec, on parle français.", pasos: ["on parle."], porque: "La gente." },
    { sit: "«Estamos cansados después de la clase.»", resp: "On est fatigués après le cours.", pasos: ["on est."], porque: "Nosotros." }
  ],
  comprueba: [
    { q: "Con on el verbo va como con…", o: ["il", "nous"], a: 0, b: "gr", porque: "3.ª singular." },
    { q: "«Ici, on parle français» significa…", o: ["Aquí se habla francés.", "Aquí hablo francés."], a: 0, b: "gr", porque: "La gente." },
    { q: "«On y va !» significa…", o: ["¡Vamos!", "¡Allá va!"], a: 0, b: "gr", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["on-forma"], k: "choice", ask: "«¿Vamos a la playa mañana?»", q: "«On ___ à la plage demain ?»", o: ["va", "allons", "vont"], a: 0, pista: "Como il.", why: "<b>on va</b>." },
    { fase: "guiada", c: ["on-sens"], k: "choice", es: true, say: "Au Québec, on parle français.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["En Quebec se habla francés.", "En Quebec hablamos francés.", "En Quebec habla francés."], a: 0, pista: "La gente.", why: "<b>on</b> = se." },
    { fase: "guiada", c: ["on-sens"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["On y va !", "¡Vamos!"], ["On verra.", "Ya veremos."], ["On ne sait jamais.", "Nunca se sabe."], ["On se tutoie ?", "¿Nos tuteamos?"]], pista: "verra = veremos.", why: "Expresiones." },
    { fase: "indep", c: ["on-forma"], k: "fill", ask: "Conjuga manger con on.", q: "Ce soir, on ___ au restaurant.", acc: ["mange"], why: "<b>mange</b>." },
    { fase: "indep", c: ["on-forma"], k: "fill", ask: "Conjuga être con on.", q: "On ___ fatigués après le cours.", acc: ["est"], why: "<b>est</b>." },
    { fase: "indep", c: ["on-forma"], k: "spot", ask: "Encuentra el error.", s: "Demain , on [partons] tôt pour Lyon .", fix: "part", why: "<b>part</b>." },
    { fase: "aplica", c: ["on-sens"], k: "sort", ask: "¿Nosotros o la gente?", q: "Clasifica.", cats: ["= nosotros", "= la gente / se"], items: [["On va au parc, toi et moi ?", 0], ["On se voit demain !", 0], ["On part à huit heures, d'accord ?", 0], ["En France, on dîne tard.", 1], ["Ici, on ne fume pas.", 1], ["Au Mexique, on mange épicé.", 1]], why: "Dos sentidos." },
    { fase: "aplica", c: ["on-forma"], k: "choice", ask: "«Vamos al mercado.» (oral)", q: "«___»", o: ["On va au marché.", "On allons au marché.", "Nous va au marché."], a: 0, why: "<b>On va</b>." },
    { fase: "dominio", c: ["on-forma"], k: "order", ask: "Ordena: «¿Nos vemos mañana en la biblioteca?».", tokens: ["On se voit", "demain", "à la bibliothèque ?"], why: "<b>On se voit demain à la bibliothèque ?</b>" },
    { fase: "dominio", c: ["on-sens"], k: "fill", ask: "Conjuga boire con on.", q: "En Colombie, on ___ beaucoup de café.", acc: ["boit"], why: "<b>boit</b>." },
    { fase: "dominio", c: ["on-forma", "on-sens"], k: "listen", say: "Ce week-end, on va chez mes grands-parents.", acc: ["Ce week-end, on va chez mes grands-parents.", "Ce week-end on va chez mes grands-parents."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce week-end, on va chez mes grands-parents.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "France", "Colombie", "Québec", "Mexique", "Lyon"], previo: ["week-end", "grands-parents", "super", "ensemble", "mais", "dîne", "tard", "vers", "vingt", "heures", "boit", "beaucoup", "café", "retard", "y", "cinéma", "soir", "se", "voit", "demain", "travaille", "dit", "ici", "parle", "français", "verra", "sait", "jamais", "tutoie", "fume", "épicé", "part", "huit", "d'accord", "marché", "plage", "restaurant", "fatigués", "après", "cours", "tôt", "pour", "parc", "toi", "moi", "bibliothèque", "mange", "allons", "partons", "vont", "mangeons"] }
};

E["a1-savoir-connaitre"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Savoir ou connaître ?",
  objetivo: {
    que: "Vas a distinguir savoir (saber algo o saber hacer) de connaître (conocer personas y lugares).",
    corto: "¿Saber o conocer?",
    podras: ["Usar savoir + infinitivo y savoir où / si / que.", "Usar connaître + persona, lugar u obra.", "Conjugar los dos verbos."],
    iconos: ["ic2/bombilla", "m2d/pensativo", "ic2/libros"],
    previos: ["Las preguntas (lección 57) y los irregulares (lección 5)."],
    capacidad: "Ahora ya no confundes saber y conocer."
  },
  requiere: R("np-vocal", "it-mots", "vp-uso", "ad-orden"), recupera: ["np-vocal"],
  conceptos: {
    "sc-savoir": { n: "savoir + infinitivo / où / si / que", b: "gr" },
    "sc-conn": { n: "connaître + persona, lugar u obra", b: "gr" }
  },
  video: {
    titulo: "Saber o conocer", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "Je sais nager.", seg: [
        { es: "Hola. Como en español: saber y conocer." } ] },
      { v: "dos",
        a: { tag: "saber", fr: "Je sais nager.", es: "savoir" },
        b: { tag: "conocer", fr: "Je connais Paris.", es: "connaître" },
        seg: [ { es: "Saber hacer algo:", p: 1 }, { fr: "Je sais nager.", p: 1 }, { es: "Conocer un lugar o una persona:", p: 2 }, { fr: "Je connais Paris.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Conoces al nuevo profesor?»", o: ["Tu connais le nouveau professeur ?", "Tu sais le nouveau professeur ?"], a: 0,
        bien: "¡Sí! Una persona se connaît.", mal: "A las personas se las conoce: connaître.",
        seg: [ { es: "Pausa. Conocer a una persona." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je sais", "nous savons", "ils savent", "je connais", "il connaît", "nous connaissons"], seg: [
        { es: "Connaître lleva doble ese con nous.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Conoces un café?", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo buscan dónde tomar algo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu connais ce quartier ?", "¿Conoces este barrio?"],
      ["camila", "Oui, je connais un bon café, mais je ne sais pas s'il est ouvert.", "Sí, conozco un buen café, pero no sé si está abierto."],
      ["hugo", "Tu sais où est la gare ? — Oui, c'est tout droit.", "¿Sabes dónde está la estación? — Sí, todo recto."],
      ["camila", "Et tu connais mon frère ? Il sait parler trois langues !", "¿Y conoces a mi hermano? ¡Sabe hablar tres idiomas!"]
    ],
    fijate: "Fíjate: je connais un café, je ne sais pas si…, il sait parler."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Savoir y connaître",
      idea: "savoir + infinitivo / où / si / que / la réponse. connaître + persona, lugar u obra. savoir: sais, sais, sait, savons, savez, savent. connaître: connais, connais, connaît, connaissons, connaissez, connaissent.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["je sais", "sé", "savoir"],
        ["il sait", "sabe", "savoir"],
        ["nous savons", "sabemos", "savoir"],
        ["vous savez", "saben", "savoir"],
        ["ils savent", "saben (ellos)", "savoir"],
        ["Je sais nager.", "Sé nadar.", "+ infinitivo"],
        ["Tu sais où est la gare ?", "¿Sabes dónde está la estación?", "+ où"],
        ["Je ne sais pas s'il vient ce soir.", "No sé si viene esta noche.", "+ si"],
        ["je connais", "conozco", "connaître"],
        ["il connaît", "conoce", "connaître"],
        ["nous connaissons", "conocemos", "connaître"],
        ["Tu connais Lyon ?", "¿Conoces Lyon?", "+ lugar"],
        ["Je connais ton frère.", "Conozco a tu hermano.", "+ persona"]
      ]],
      ej: [["vous connaissez", "conocen"], ["ils connaissent", "conocen (ellos)"], ["Elle ne sait pas la réponse.", "No sabe la respuesta."], ["Je sais jouer de la guitare.", "Sé tocar la guitarra."], ["Tu connais ce film ?", "¿Conoces esta película?"], ["Je sais que tu es malade.", "Sé que estás enfermo."], ["Je sais si le musée est ouvert.", "Sé si el museo está abierto."], ["Je connais un bon restaurant.", "Conozco un buen restaurante."], ["Je connais ton cousin.", "Conozco a tu primo."], ["Je connais Madrid.", "Conozco Madrid."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["nous connaîtons","nous connaissons","nous: -ssons."], ["Je sais Paris.", "Je connais Paris.", "Lugar: connaître."], ["Tu sais le professeur ?", "Tu connais le professeur ?", "Persona: connaître."], ["Je connais nager.", "Je sais nager.", "Saber hacer: savoir."]] }
  ],
  ejemplos: [
    { sit: "«Sé hablar tres idiomas.»", resp: "Je sais parler trois langues.", pasos: ["savoir + infinitivo."], porque: "Saber hacer." },
    { sit: "«¿Conoce a mi profesor?»", resp: "Vous connaissez mon professeur ?", pasos: ["Persona."], porque: "connaître." },
    { sit: "«No sé a qué hora empieza la película.»", resp: "Je ne sais pas à quelle heure commence le film.", pasos: ["savoir + pregunta."], porque: "Información." }
  ],
  comprueba: [
    { q: "Para un lugar se usa…", o: ["connaître", "savoir"], a: 0, b: "gr", porque: "Conocer." },
    { q: "Para saber hacer algo se usa…", o: ["savoir", "connaître"], a: 0, b: "gr", porque: "+ infinitivo." },
    { q: "«nous» de connaître es…", o: ["connaissons", "connaîtons"], a: 0, b: "gr", porque: "ss." }
  ],
  practica: [
    { fase: "guiada", c: ["sc-savoir"], k: "choice", ask: "«Sé nadar.»", q: "«Je ___ nager.»", o: ["sais", "connais", "sait"], a: 0, pista: "Saber hacer.", why: "<b>sais</b>." },
    { fase: "guiada", c: ["sc-conn"], k: "choice", ask: "«¿Conoces a Marie?»", q: "«Tu ___ Marie ?»", o: ["connais", "sais", "connaît"], a: 0, pista: "Persona.", why: "<b>connais</b>." },
    { fase: "guiada", c: ["sc-savoir", "sc-conn"], k: "sort", ask: "¿savoir o connaître?", q: "Clasifica.", cats: ["savoir", "connaître"], items: [["… jouer de la guitare", 0], ["… que tu es malade", 0], ["… si le musée est ouvert", 0], ["… la réponse", 0], ["… Madrid", 1], ["… ton cousin", 1], ["… ce film", 1], ["… un bon restaurant", 1]], pista: "Lugar o persona: connaître.", why: "Uso." },
    { fase: "indep", c: ["sc-savoir"], k: "fill", ask: "Conjuga savoir (vous).", q: "Vous ___ où est la bibliothèque ?", acc: ["savez"], why: "<b>savez</b>." },
    { fase: "indep", c: ["sc-conn"], k: "fill", ask: "Conjuga connaître (nous).", q: "Nous ___ bien cette ville.", acc: ["connaissons"], why: "<b>connaissons</b>." },
    { fase: "indep", c: ["sc-conn"], k: "spot", ask: "Encuentra el error.", s: "Tu [sais] le nouveau professeur de français ?", fix: "connais", why: "<b>connais</b>." },
    { fase: "aplica", c: ["sc-savoir"], k: "match", ask: "Une cada persona con savoir.", q: "Sujeto → forma", pairs: [["je", "sais"], ["il", "sait"], ["nous", "savons"], ["vous", "savez"], ["ils", "savent"]], why: "savoir." },
    { fase: "aplica", c: ["sc-savoir"], k: "fill", ask: "Conjuga savoir (ils).", q: "Ils ne ___ pas la réponse.", acc: ["savent"], why: "<b>savent</b>." },
    { fase: "dominio", c: ["sc-conn"], k: "choice", ask: "«Conozco a tu hermano.»", q: "«___»", o: ["Je connais ton frère.", "Je sais ton frère.", "Je connais à ton frère."], a: 0, why: "<b>Je connais ton frère.</b>" },
    { fase: "dominio", c: ["sc-savoir"], k: "order", ask: "Ordena: «No sé si viene esta noche».", tokens: ["Je ne sais pas", "s'il vient", "ce soir."], why: "<b>Je ne sais pas s'il vient ce soir.</b>" },
    { fase: "dominio", c: ["sc-savoir", "sc-conn"], k: "listen", say: "Je connais un bon café, mais je ne sais pas s'il est ouvert.", acc: ["Je connais un bon café, mais je ne sais pas s'il est ouvert.", "Je connais un bon café mais je ne sais pas s'il est ouvert."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je connais un bon café, mais je ne sais pas s'il est ouvert.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Lyon", "Madrid", "Marie"], previo: ["ce", "quartier", "bon", "café", "mais", "s'il", "ouvert", "gare", "tout", "droit", "mon", "frère", "parler", "trois", "langues", "nager", "vient", "soir", "ton", "réponse", "jouer", "guitare", "film", "malade", "musée", "restaurant", "cousin", "bibliothèque", "cette", "ville", "nouveau", "professeur", "français", "quelle", "heure", "commence", "à"] }
};

E["a1-partir-sortir-dormir"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Partir, sortir, dormir : les verbes en -ir sans -iss-",
  objetivo: {
    que: "Vas a conjugar partir, sortir y dormir: pierden la consonante en singular y la recuperan en plural.",
    corto: "Je pars, nous partons.",
    podras: ["Conjugar je pars, je sors, je dors.", "Conjugar nous partons, ils dorment.", "No poner -iss- en estos verbos."],
    iconos: ["m2d/correr", "ic2/bombilla", "m2d/pensativo"],
    previos: ["Los verbos en -er (lección 4) y la rutina (lección 21)."],
    capacidad: "Ahora puedes decir cuándo sales, te vas y duermes."
  },
  requiere: R("er-term", "ro-verbos", "gh-dias", "na-num"), recupera: ["er-term"],
  conceptos: {
    "ps-sing": { n: "je pars, je sors, je dors (sin consonante)", b: "gr" },
    "ps-plur": { n: "nous partons, ils dorment (con consonante, sin -iss-)", b: "gr" }
  },
  video: {
    titulo: "partir, sortir, dormir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "je pars · nous partons", seg: [
        { es: "Hola. Estos verbos esconden una letra en singular." } ] },
      { v: "dos",
        a: { tag: "singular", fr: "je dors · tu dors · il dort", es: "sin m" },
        b: { tag: "plural", fr: "nous dormons · ils dorment", es: "vuelve la m" },
        seg: [ { es: "En singular, la eme desaparece:", p: 1 }, { fr: "je dors", p: 1 }, { es: "En plural, vuelve:", p: 2 }, { fr: "nous dormons", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mis amigos salen los viernes.»", o: ["Mes amis sortent le vendredi.", "Mes amis sortissent le vendredi."], a: 0,
        bien: "¡Sí! Sin -iss-.", mal: "Sortir no lleva -iss-: ils sortent.",
        seg: [ { es: "Pausa. Ellos salen." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je pars", "il part", "nous partons", "je sors", "nous sortons", "ils dorment"], seg: [
        { es: "Lo mismo con sentir y servir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viaje", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta sus planes a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je pars pour Montréal demain !", "¡Me voy a Montreal mañana!"],
      ["hugo", "Super ! Le train part à quelle heure ?", "¡Genial! ¿A qué hora sale el tren?"],
      ["camila", "À sept heures. Ce soir, je ne sors pas, je dors tôt.", "A las siete. Esta noche no salgo, me acuesto temprano."],
      ["hugo", "Moi, le samedi, nous sortons avec nos amis.", "Yo, los sábados, salimos con nuestros amigos."]
    ],
    fijate: "Fíjate: je pars, il part, je sors, je dors, nous sortons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La conjugación",
      idea: "Singular sin la consonante: je pars, je sors, je dors. Plural con ella: nous partons, nous sortons, nous dormons. Nunca -iss-.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Persona"], [
        ["je pars", "me voy", "je"],
        ["tu pars", "te vas", "tu"],
        ["il part", "se va", "il"],
        ["nous partons", "nos vamos", "nous"],
        ["vous partez", "se van", "vous"],
        ["ils partent", "se van (ellos)", "ils"],
        ["je sors / nous sortons", "salgo / salimos", "sortir"],
        ["ils sortent", "salen", "sortir"],
        ["je dors / il dort", "duermo / duerme", "dormir"],
        ["nous dormons / ils dorment", "dormimos / duermen", "dormir"]
      ]],
      ej: [["partir", "irse"], ["sortir", "salir"], ["dormir", "dormir"], ["sentir", "sentir, oler"], ["servir", "servir"], ["Tu dors combien d'heures ?", "¿Cuántas horas duermes?"], ["Les enfants dorment bien.", "Los niños duermen bien."], ["choisir", "elegir (con -iss-)"], ["finir", "terminar (con -iss-)"], ["réussir", "lograr (con -iss-)"], ["grandir", "crecer (con -iss-)"], ["Je rentre le soir.", "Vuelvo por la noche."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["il partit","il part","Presente: il part."], ["nous dorissons", "nous dormons", "Sin -iss-."], ["ils sortissent", "ils sortent", "Sin -iss-."], ["je dorm", "je dors", "Singular sin m."], ["nous partissons", "nous partons", "Sin -iss-."]] }
  ],
  ejemplos: [
    { sit: "«El tren sale a las diez.»", resp: "Le train part à dix heures.", pasos: ["il part."], porque: "Singular." },
    { sit: "«Dormimos ocho horas.»", resp: "Nous dormons huit heures.", pasos: ["nous dormons."], porque: "Plural." },
    { sit: "«¿Sales esta noche?»", resp: "Tu sors ce soir ?", pasos: ["tu sors."], porque: "Singular." }
  ],
  comprueba: [
    { q: "«je dors»: la m…", o: ["desaparece en singular", "se queda siempre"], a: 0, b: "gr", porque: "Singular." },
    { q: "partir, sortir y dormir llevan -iss-…", o: ["no", "sí"], a: 0, b: "gr", porque: "No son como finir." },
    { q: "«sortir» significa…", o: ["salir", "sortear"], a: 0, b: "gr", porque: "Salir." }
  ],
  practica: [
    { fase: "guiada", c: ["ps-sing"], k: "choice", ask: "«El tren sale a las diez.»", q: "«Le train ___ à dix heures.»", o: ["part", "pars", "partit"], a: 0, pista: "il.", why: "<b>part</b>." },
    { fase: "guiada", c: ["ps-plur"], k: "choice", ask: "«Dormimos ocho horas por noche.»", q: "«Nous ___ huit heures par nuit.»", o: ["dormons", "dorissons", "dors"], a: 0, pista: "Plural, sin -iss-.", why: "<b>dormons</b>." },
    { fase: "guiada", c: ["ps-plur"], k: "sort", ask: "¿Lleva -iss- como finir?", q: "Clasifica.", cats: ["Sí (como finir)", "No (como partir)"], items: [["choisir", 0], ["finir", 0], ["réussir", 0], ["grandir", 0], ["sortir", 1], ["dormir", 1], ["sentir", 1], ["servir", 1]], pista: "partir no.", why: "Dos grupos." },
    { fase: "indep", c: ["ps-sing"], k: "fill", ask: "Conjuga sortir (tu).", q: "Tu ___ ce soir ?", acc: ["sors"], why: "<b>sors</b>." },
    { fase: "indep", c: ["ps-plur"], k: "fill", ask: "Conjuga partir (ils).", q: "Ils ___ en vacances en août.", acc: ["partent"], why: "<b>partent</b>." },
    { fase: "indep", c: ["ps-plur"], k: "spot", ask: "Encuentra el error.", s: "Mes amis [sortissent] tous les vendredis .", fix: "sortent", why: "<b>sortent</b>." },
    { fase: "aplica", c: ["ps-sing"], k: "fill", ask: "Conjuga dormir (je).", q: "Je ne ___ pas bien quand il fait chaud.", acc: ["dors"], why: "<b>dors</b>." },
    { fase: "aplica", c: ["ps-sing", "ps-plur"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["partir", "irse"], ["sortir", "salir"], ["sentir", "sentir, oler"], ["servir", "servir"]], why: "Verbos." },
    { fase: "dominio", c: ["ps-plur"], k: "fill", ask: "Conjuga sortir (nous).", q: "Nous ___ ce soir.", acc: ["sortons"], why: "<b>sortons</b>." },
    { fase: "dominio", c: ["ps-sing"], k: "order", ask: "Ordena: «Me voy a las siete y vuelvo por la noche».", tokens: ["Je pars", "à sept heures", "et je rentre", "le soir."], why: "<b>Je pars à sept heures et je rentre le soir.</b>" },
    { fase: "dominio", c: ["ps-sing", "ps-plur"], k: "listen", say: "Nous sortons du cinéma à dix heures.", acc: ["Nous sortons du cinéma à dix heures.", "Nous sortons du cinéma à 10 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous sortons du cinéma à dix heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal"], previo: ["pour", "demain", "super", "train", "quelle", "heure", "sept", "heures", "ce", "soir", "tôt", "moi", "samedi", "nos", "amis", "mes", "dix", "huit", "par", "nuit", "vacances", "août", "vendredis", "tous", "quand", "fait", "chaud", "cinéma", "combien", "d'heures", "enfants", "bien", "rentre"] }
};

E["a1-il-faut"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Il faut + infinitif : l'obligation",
  objetivo: {
    que: "Vas a expresar obligaciones generales con il faut + infinitivo, y prohibiciones con il ne faut pas.",
    corto: "Hay que…",
    podras: ["Decir Il faut étudier.", "Decir Il ne faut pas fumer ici.", "Usar il faut + nombre: Il faut trois œufs."],
    iconos: ["ic2/bombilla", "ic2/lapiz", "m2d/senalar"],
    previos: ["devoir (lección 15) y ne… pas (Primeros pasos)."],
    capacidad: "Ahora puedes dar consejos y reglas."
  },
  requiere: R("vp-conj", "vp-uso", "np-regla", "cq-de", "ta-autres"), recupera: ["vp-uso", "np-regla"],
  conceptos: {
    "if-inf": { n: "il faut + infinitivo directo", b: "gr" },
    "if-neg": { n: "il ne faut pas; il faut + nombre", b: "gr" }
  },
  video: {
    titulo: "il faut", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "Il faut étudier.", seg: [
        { es: "Hola. Il faut es hay que. Siempre con il." } ] },
      { v: "dos",
        a: { tag: "hay que", fr: "Il faut réviser.", es: "obligación" },
        b: { tag: "no hay que", fr: "Il ne faut pas crier.", es: "prohibición" },
        seg: [ { es: "Obligación:", p: 1 }, { fr: "Il faut réviser.", p: 1 }, { es: "Prohibición:", p: 2 }, { fr: "Il ne faut pas crier.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Hay que estudiar.»", o: ["Il faut étudier.", "Il faut de étudier."], a: 0,
        bien: "¡Sí! Infinitivo directo.", mal: "Tras il faut, el infinitivo va sin de.",
        seg: [ { es: "Pausa. Hay que estudiar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Il faut…", "Il ne faut pas…", "Il faut trois œufs.", "Je dois partir."], seg: [
        { es: "Para ti en concreto: je dois.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Antes del examen", img: "bg-universidad", yo: "camila",
    escena: "Hugo le da consejos a Camila.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai un examen lundi. Qu'est-ce qu'il faut faire ?", "Tengo un examen el lunes. ¿Qué hay que hacer?"],
      ["hugo", "Pour réussir l'examen, il faut réviser tous les jours.", "Para aprobar el examen, hay que repasar todos los días."],
      ["hugo", "Et il faut dormir huit heures par nuit. Il ne faut pas oublier ton passeport !", "Y hay que dormir ocho horas por noche. ¡No hay que olvidar tu pasaporte!"],
      ["camila", "Merci ! Il faut combien de temps pour aller à la fac ? — Vingt minutes.", "¡Gracias! ¿Cuánto tiempo se necesita para ir a la universidad? — Veinte minutos."]
    ],
    fijate: "Fíjate: il faut réviser, il ne faut pas oublier, il faut combien de temps."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Il faut",
      idea: "Il faut + infinitivo (sin de). Il ne faut pas + infinitivo = no hay que. Il faut + nombre = se necesita. Personal: je dois.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Il faut étudier.", "Hay que estudiar.", "obligación"],
        ["Il faut boire de l'eau.", "Hay que tomar agua.", "obligación"],
        ["Il faut partir maintenant.", "Hay que irse ahora.", "obligación"],
        ["Il faut arriver à l'heure.", "Hay que llegar a tiempo.", "obligación"],
        ["Il ne faut pas fumer ici.", "No se puede fumar aquí.", "prohibición"],
        ["Il ne faut pas parler pendant le film.", "No hay que hablar durante la película.", "prohibición"],
        ["Il faut trois œufs.", "Se necesitan tres huevos.", "+ nombre"],
        ["Il faut deux heures pour aller à Lyon.", "Se necesitan dos horas para ir a Lyon.", "+ nombre"],
        ["Je dois partir.", "Tengo que irme.", "personal"]
      ]],
      ej: [["écouter le professeur", "escuchar al profesor"], ["faire les devoirs", "hacer las tareas"], ["lever la main", "levantar la mano"], ["copier sur le voisin", "copiarle al compañero"], ["utiliser le portable", "usar el celular"], ["crier", "gritar"], ["manger en classe", "comer en clase"], ["réviser", "repasar"], ["Il faut te dépêcher.", "Tienes que apurarte."], ["courir dans les couloirs", "correr por los pasillos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il faut de étudier.", "Il faut étudier.", "Sin de."], ["Il faut parlez.", "Il faut parler.", "Infinitivo."], ["Je faut partir.", "Il faut partir.", "Siempre il."]] }
  ],
  ejemplos: [
    { sit: "«Hay que comprar pan.»", resp: "Il faut acheter du pain.", pasos: ["il faut + infinitivo."], porque: "Obligación." },
    { sit: "«No hay que correr por los pasillos.»", resp: "Il ne faut pas courir dans les couloirs.", pasos: ["il ne faut pas."], porque: "Prohibición." },
    { sit: "Estás cansado.", resp: "Il faut dormir.", pasos: ["Consejo."], porque: "Obligación." }
  ],
  comprueba: [
    { q: "Tras il faut va…", o: ["un infinitivo sin de", "de + infinitivo"], a: 0, b: "gr", porque: "Directo." },
    { q: "«Il faut trois œufs» significa…", o: ["Se necesitan tres huevos.", "Faltan tres huevos."], a: 0, b: "gr", porque: "+ nombre." },
    { q: "Il faut cambia de persona…", o: ["nunca", "con je y tu"], a: 0, b: "gr", porque: "Impersonal." }
  ],
  practica: [
    { fase: "guiada", c: ["if-inf"], k: "choice", ask: "«Hay que llegar a tiempo.»", q: "«___»", o: ["Il faut arriver à l'heure.", "Il faut de arriver à l'heure.", "Je faut arriver à l'heure."], a: 0, pista: "Sin de.", why: "<b>Il faut arriver</b>." },
    { fase: "guiada", c: ["if-neg"], k: "choice", es: true, say: "Il ne faut pas parler pendant le film.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["No hay que hablar durante la película.", "Hay que hablar de la película.", "No hay película."], a: 0, pista: "ne… pas.", why: "Prohibición." },
    { fase: "guiada", c: ["if-inf", "if-neg"], k: "sort", ask: "En clase: ¿hay que o no hay que?", q: "Clasifica.", cats: ["Il faut…", "Il ne faut pas…"], items: [["écouter le professeur", 0], ["faire les devoirs", 0], ["arriver à l'heure", 0], ["lever la main", 0], ["copier sur le voisin", 1], ["utiliser le portable", 1], ["crier", 1], ["manger en classe", 1]], pista: "Reglas de clase.", why: "Reglas." },
    { fase: "indep", c: ["if-inf"], k: "fill", ask: "Escribe el verbo.", q: "Il ___ dormir huit heures par nuit.", acc: ["faut"], why: "<b>faut</b>." },
    { fase: "indep", c: ["if-neg"], k: "fill", ask: "Completa la negación.", q: "Il ne faut ___ courir dans les couloirs.", acc: ["pas"], why: "<b>pas</b>." },
    { fase: "indep", c: ["if-inf"], k: "spot", ask: "Encuentra el error.", s: "Pour apprendre une langue , il faut [parlez] tous les jours .", fix: "parler", why: "<b>parler</b>." },
    { fase: "aplica", c: ["if-inf"], k: "match", ask: "Une cada problema con su consejo.", q: "Problema → consejo", pairs: [["Tu es fatigué.", "Il faut dormir."], ["Tu as faim.", "Il faut manger."], ["Tu as un examen.", "Il faut réviser."], ["Tu es en retard.", "Il faut te dépêcher."]], why: "Consejos." },
    { fase: "aplica", c: ["if-neg"], k: "choice", ask: "«Se necesitan tres huevos.»", q: "«___»", o: ["Il faut trois œufs.", "Il faut de trois œufs.", "Il ne faut pas trois œufs."], a: 0, why: "<b>Il faut + nombre</b>." },
    { fase: "dominio", c: ["if-inf"], k: "fill", ask: "Escribe «hay que» (il ___).", q: "Il ___ partir tôt.", acc: ["faut"], why: "<b>faut</b>." },
    { fase: "dominio", c: ["if-inf"], k: "order", ask: "Ordena: «Hay que comprar pan».", tokens: ["Il faut", "acheter", "du pain."], why: "<b>Il faut acheter du pain.</b>" },
    { fase: "dominio", c: ["if-inf", "if-neg"], k: "listen", say: "Pour réussir l'examen, il faut réviser tous les jours.", acc: ["Pour réussir l'examen, il faut réviser tous les jours.", "Pour réussir l'examen il faut réviser tous les jours."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pour réussir l'examen, il faut réviser tous les jours.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["examen", "lundi", "qu'est-ce", "qu'il", "faire", "pour", "réussir", "tous", "jours", "dormir", "huit", "heures", "par", "nuit", "oublier", "ton", "passeport", "merci", "combien", "temps", "aller", "fac", "vingt", "minutes", "boire", "eau", "partir", "maintenant", "arriver", "heure", "fumer", "ici", "parler", "pendant", "film", "trois", "œufs", "deux", "fatigué", "faim", "retard", "acheter", "pain", "apprendre", "langue", "tôt", "dois", "étudier"] }
};

E["a1-avoir-expressions"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Avoir faim, avoir froid, avoir besoin de",
  objetivo: {
    que: "Vas a usar avoir para sensaciones y necesidades: avoir faim, froid, peur, raison, besoin de, envie de.",
    corto: "J'ai faim, j'ai froid.",
    podras: ["Decir j'ai faim, soif, chaud, froid, sommeil, peur.", "Decir tu as raison / tort.", "Decir j'ai besoin de, j'ai envie de."],
    iconos: ["m2d/pensativo", "ic2/bombilla", "m2d/celebrar"],
    previos: ["J'ai faim, j'ai froid (Primeros pasos) y avoir (lección 5)."],
    capacidad: "Ahora puedes decir cómo te sientes y lo que necesitas."
  },
  requiere: R("fs-faim", "fs-froid", "ir-etre-avoir", "pa2-forma"), recupera: ["fs-faim", "fs-froid"],
  conceptos: {
    "ae-sens": { n: "avoir faim, soif, chaud, froid, sommeil, peur", b: "voc" },
    "ae-besoin": { n: "avoir raison / tort, besoin de, envie de", b: "voc" }
  },
  video: {
    titulo: "Expresiones con avoir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "J'ai froid.", seg: [
        { es: "Hola. Como en español: tener frío, tener hambre." } ] },
      { v: "dos",
        a: { tag: "error típico", fr: "Je suis froid.", es: "soy frío" },
        b: { tag: "correcto", fr: "J'ai froid.", es: "tengo frío" },
        seg: [ { es: "Je suis froid quiere decir soy una persona fría.", p: 1 }, { es: "Para la sensación:", p: 2 }, { fr: "J'ai froid.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Necesito un diccionario.»", o: ["J'ai besoin d'un dictionnaire.", "J'ai besoin un dictionnaire."], a: 0,
        bien: "¡Sí! Besoin de.", mal: "Avoir besoin lleva de: j'ai besoin d'un…",
        seg: [ { es: "Pausa. Necesitar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir faim", "avoir soif", "avoir sommeil", "avoir peur", "avoir raison", "avoir envie de"], seg: [
        { es: "Sin artículo: j'ai faim, nunca j'ai la faim.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Después de clase", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo salen de clase.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai faim ! On mange ? J'ai très envie d'une pizza.", "¡Tengo hambre! ¿Comemos? Tengo muchas ganas de una pizza."],
      ["hugo", "Tu as raison. Et j'ai très soif, tu as de l'eau ?", "Tienes razón. Y tengo mucha sed, ¿tienes agua?"],
      ["camila", "Oui. Tu as froid ? Mets un pull !", "Sí. ¿Tienes frío? ¡Ponte un suéter!"],
      ["hugo", "Non, j'ai sommeil. J'ai besoin de dormir !", "No, tengo sueño. ¡Necesito dormir!"]
    ],
    fijate: "Fíjate: j'ai faim, j'ai envie de, tu as raison, j'ai besoin de."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Expresiones con avoir",
      idea: "avoir faim, soif, chaud, froid, sommeil, peur (sin artículo). avoir raison / tort. avoir besoin de, avoir envie de.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "avoir faim", es: "tener hambre", ej: ["J'ai faim, on mange ?", "Tengo hambre, ¿comemos?"] },
        { fr: "avoir soif", es: "tener sed", ej: ["J'ai très soif, tu as de l'eau ?", "Tengo mucha sed, ¿tienes agua?"] },
        { fr: "avoir chaud", es: "tener calor" },
        { fr: "avoir froid", es: "tener frío", ej: ["Elle a froid.", "Tiene frío."] },
        { fr: "avoir sommeil", es: "tener sueño" },
        { fr: "avoir peur", es: "tener miedo" },
        { fr: "avoir raison", es: "tener razón", ej: ["Tu as raison.", "Tienes razón."] },
        { fr: "avoir tort", es: "estar equivocado" },
        { fr: "avoir besoin de", es: "necesitar", ej: ["Nous avons besoin d'aide.", "Necesitamos ayuda."] },
        { fr: "avoir envie de", es: "tener ganas de", ej: ["J'ai envie d'une glace.", "Tengo ganas de un helado."] }
      ],
      clave: "Sin artículo: j'ai faim (no «j'ai la faim»)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis froid.", "J'ai froid.", "Sensación: avoir."], ["Nous sommes très chaud.", "Nous avons très chaud.", "avoir chaud."], ["J'ai la faim.", "J'ai faim.", "Sin artículo."], ["J'ai besoin un dictionnaire.", "J'ai besoin d'un dictionnaire.", "besoin de."]] }
  ],
  ejemplos: [
    { sit: "«Tengo sed.»", resp: "J'ai soif.", pasos: ["avoir soif."], porque: "Sensación." },
    { sit: "«Necesito un diccionario.»", resp: "J'ai besoin d'un dictionnaire.", pasos: ["besoin de."], porque: "Necesidad." },
    { sit: "«¿Tienes ganas de ir al cine?»", resp: "Tu as envie d'aller au cinéma ?", pasos: ["envie de + infinitivo."], porque: "Ganas." }
  ],
  comprueba: [
    { q: "Tengo frío se dice…", o: ["J'ai froid.", "Je suis froid."], a: 0, b: "voc", porque: "avoir." },
    { q: "«avoir tort» significa…", o: ["estar equivocado", "tener tortas"], a: 0, b: "voc", porque: "≠ raison." },
    { q: "«avoir envie de» significa…", o: ["tener ganas de", "tener envidia de"], a: 0, b: "voc", porque: "Ganas." }
  ],
  practica: [
    { fase: "guiada", c: ["ae-sens"], k: "choice", ask: "«Tengo frío.»", q: "«___»", o: ["J'ai froid.", "Je suis froid.", "J'ai le froid."], a: 0, pista: "avoir.", why: "<b>J'ai froid.</b>" },
    { fase: "guiada", c: ["ae-sens", "ae-besoin"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["avoir faim", "tener hambre"], ["avoir soif", "tener sed"], ["avoir peur", "tener miedo"], ["avoir tort", "estar equivocado"], ["avoir chaud", "tener calor"]], pista: "tort ≠ raison.", why: "Expresiones." },
    { fase: "guiada", c: ["ae-besoin"], k: "choice", ask: "«Tienes razón.»", q: "«Tu as ___ .»", o: ["raison", "tort", "besoin"], a: 0, pista: "Razón.", why: "<b>raison</b>." },
    { fase: "indep", c: ["ae-sens"], k: "fill", ask: "Escribe «sueño».", q: "Les enfants ont ___ , ils veulent dormir.", acc: ["sommeil"], why: "<b>sommeil</b>." },
    { fase: "indep", c: ["ae-besoin"], k: "fill", ask: "Escribe «necesito» (j'ai ___ de).", q: "J'ai ___ de ton aide.", acc: ["besoin"], why: "<b>besoin</b>." },
    { fase: "indep", c: ["ae-sens"], k: "spot", ask: "Encuentra el error.", s: "Il fait 35 degrés : nous [sommes] très chaud .", fix: "avons", why: "<b>avons chaud</b>." },
    { fase: "aplica", c: ["ae-sens", "ae-besoin"], k: "sort", ask: "¿Comer y beber o descansar?", q: "Clasifica.", cats: ["Comer o beber", "Descansar"], items: [["J'ai faim.", 0], ["J'ai soif.", 0], ["J'ai envie d'un café.", 0], ["J'ai sommeil.", 1], ["J'ai besoin de dormir.", 1], ["Je suis fatigué.", 1]], why: "Necesidades." },
    { fase: "aplica", c: ["ae-sens"], k: "fill", ask: "Escribe «frío».", q: "Tu as ___ ? Mets un pull.", acc: ["froid"], why: "<b>froid</b>." },
    { fase: "dominio", c: ["ae-besoin"], k: "choice", es: true, say: "J'ai envie d'une glace.", ask: "Escucha. ¿Qué le pasa?", q: "Elige.", o: ["Tiene ganas de un helado.", "Tiene envidia de un helado.", "Necesita hielo."], a: 0, why: "<b>envie de</b>." },
    { fase: "dominio", c: ["ae-besoin"], k: "order", ask: "Ordena: «¿Tienes ganas de ir al cine?».", tokens: ["Tu as", "envie", "d'aller", "au cinéma ?"], why: "<b>Tu as envie d'aller au cinéma ?</b>" },
    { fase: "dominio", c: ["ae-sens", "ae-besoin"], k: "listen", say: "J'ai faim et j'ai très envie d'une pizza.", acc: ["J'ai faim et j'ai très envie d'une pizza."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai faim et j'ai très envie d'une pizza.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["on", "mange", "très", "d'une", "pizza", "eau", "mets", "pull", "non", "dormir", "aide", "d'aide", "glace", "dictionnaire", "d'un", "enfants", "ont", "veulent", "ton", "fait", "degrés", "avons", "café", "fatigué", "d'aller", "cinéma", "35"] }
};

E["a1-beau-nouveau-vieux"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Beau, nouveau, vieux : bel, nouvel, vieil",
  objetivo: {
    que: "Vas a usar beau, nouveau y vieux con su forma especial delante de vocal: bel, nouvel, vieil.",
    corto: "Un bel homme, un nouvel ami.",
    podras: ["Usar bel, nouvel, vieil delante de vocal.", "Formar belle, nouvelle, vieille.", "Ponerlos delante del nombre."],
    iconos: ["ic2/bombilla", "m2d/senalar", "ic2/torre-eiffel"],
    previos: ["Los adjetivos (lección 10)."],
    capacidad: "Ahora puedes describir con los adjetivos más frecuentes."
  },
  requiere: R("ad-accord", "ad-especial", "ad-place"), recupera: ["ad-place", "ad-especial"],
  conceptos: {
    "bn-voyelle": { n: "bel, nouvel, vieil + vocal", b: "gr" },
    "bn-fem": { n: "belle, nouvelle, vieille; beaux, nouveaux", b: "gr" }
  },
  video: {
    titulo: "bel, nouvel, vieil", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "un nouvel ami", seg: [
        { es: "Hola. Tres adjetivos tienen una forma especial ante vocal." } ] },
      { v: "dos",
        a: { tag: "consonante", fr: "un beau jardin", es: "beau" },
        b: { tag: "vocal o h muda", fr: "un bel hôtel", es: "bel" },
        seg: [ { es: "Delante de consonante:", p: 1 }, { fr: "un beau jardin", p: 1 }, { es: "Delante de vocal, para que suene bien:", p: 2 }, { fr: "un bel hôtel", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un amigo nuevo»", o: ["un nouvel ami", "un nouveau ami"], a: 0,
        bien: "¡Sí! Ante vocal: nouvel.", mal: "Ami empieza por vocal: nouvel.",
        seg: [ { es: "Pausa. Un amigo nuevo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["beau · bel · belle", "nouveau · nouvel · nouvelle", "vieux · vieil · vieille"], seg: [
        { es: "Bel, nouvel y vieil suenan como el femenino.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El apartamento", img: "bg-paris", yo: "camila",
    escena: "Camila visita el nuevo apartamento de Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "C'est un bel appartement !", "¡Es un apartamento bonito!"],
      ["hugo", "Merci ! J'ai aussi un nouvel ordinateur.", "¡Gracias! También tengo un computador nuevo."],
      ["camila", "Le quartier est vieux, mais c'est une belle ville.", "El barrio es viejo, pero es una ciudad bonita."],
      ["hugo", "Oui, ma voisine est une vieille dame très gentille.", "Sí, mi vecina es una señora mayor muy amable."]
    ],
    fijate: "Fíjate: un bel appartement, un nouvel ordinateur, une vieille dame."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las formas",
      idea: "Masc.: beau, nouveau, vieux; ante vocal o h muda: bel, nouvel, vieil. Fem.: belle, nouvelle, vieille. Plural: beaux, nouveaux, vieux / belles, nouvelles, vieilles. Van delante del nombre.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["un beau jardin", "un jardín bonito", "beau"],
        ["un bel appartement", "un apartamento bonito", "bel + vocal"],
        ["un bel homme", "un hombre guapo", "bel + h muda"],
        ["une belle ville", "una ciudad bonita", "belle"],
        ["un nouveau livre", "un libro nuevo", "nouveau"],
        ["un nouvel ami", "un amigo nuevo", "nouvel + vocal"],
        ["J'ai un nouvel ordinateur.", "Tengo un computador nuevo.", "nouvel + vocal"],
        ["une nouvelle voiture", "un carro nuevo", "nouvelle"],
        ["le vieux quartier", "el barrio viejo", "vieux"],
        ["un vieil hôtel", "un hotel viejo", "vieil + h muda"],
        ["un vieil arbre", "un árbol viejo", "vieil + vocal"],
        ["une vieille maison", "una casa vieja", "vieille"],
        ["de beaux tableaux", "cuadros bonitos", "plural"]
      ]],
      ej: [["un beau garçon", "un muchacho guapo"], ["un bel endroit", "un lugar bonito"], ["une vieille dame", "una señora mayor"], ["nouveaux", "nuevos"], ["belles", "bonitas"], ["Mon oncle a acheté un appartement.", "Mi tío compró un apartamento."], ["un étudiant", "un estudiante"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un beau hôtel", "un bel hôtel", "Ante vocal o h muda: bel."], ["un nouveau étudiant", "un nouvel étudiant", "nouvel."], ["un vieux arbre", "un vieil arbre", "vieil."], ["une vieux voiture", "une vieille voiture", "Femenino."]] }
  ],
  ejemplos: [
    { sit: "«un hombre guapo»", resp: "un bel homme", pasos: ["h muda → bel."], porque: "Forma especial." },
    { sit: "«una casa vieja»", resp: "une vieille maison", pasos: ["vieux → vieille."], porque: "Femenino." },
    { sit: "«Es una ciudad vieja y bonita.»", resp: "C'est une vieille et belle ville.", pasos: ["Delante del nombre."], porque: "Femenino." }
  ],
  comprueba: [
    { q: "Ante vocal, beau se vuelve…", o: ["bel", "belle"], a: 0, b: "gr", porque: "Masculino especial." },
    { q: "El femenino de vieux es…", o: ["vieille", "vieuse"], a: 0, b: "gr", porque: "vieille." },
    { q: "beau, nouveau y vieux van…", o: ["delante del nombre", "detrás del nombre"], a: 0, b: "gr", porque: "Como grand." }
  ],
  practica: [
    { fase: "guiada", c: ["bn-voyelle"], k: "choice", ask: "«un amigo nuevo»", q: "«un ___ ami»", o: ["nouvel", "nouveau", "nouvelle"], a: 0, pista: "Vocal.", why: "<b>nouvel</b>." },
    { fase: "guiada", c: ["bn-fem"], k: "choice", ask: "«una ciudad bonita»", q: "«une ___ ville»", o: ["belle", "bel", "beau"], a: 0, pista: "Femenino.", why: "<b>belle</b>." },
    { fase: "guiada", c: ["bn-voyelle"], k: "sort", ask: "¿beau o bel?", q: "Clasifica.", cats: ["beau", "bel"], items: [["garçon", 0], ["tableau", 0], ["jardin", 0], ["livre", 0], ["homme", 1], ["endroit", 1], ["appartement", 1], ["hôtel", 1]], pista: "Vocal o h muda: bel.", why: "Forma especial." },
    { fase: "indep", c: ["bn-voyelle"], k: "fill", ask: "Escribe beau en su forma correcta.", q: "C'est un ___ homme.", acc: ["bel"], why: "<b>bel</b>." },
    { fase: "indep", c: ["bn-fem"], k: "fill", ask: "Escribe vieux en femenino.", q: "Mes grands-parents ont une ___ voiture.", acc: ["vieille"], why: "<b>vieille</b>." },
    { fase: "indep", c: ["bn-voyelle"], k: "spot", ask: "Encuentra el error.", s: "Nous avons un [nouveau] étudiant dans la classe .", fix: "nouvel", why: "<b>nouvel</b>." },
    { fase: "aplica", c: ["bn-fem"], k: "match", ask: "Une cada masculino con su femenino.", q: "Masc. → fem.", pairs: [["beau", "belle"], ["nouveau", "nouvelle"], ["vieux", "vieille"], ["bon", "bonne"]], why: "Femeninos." },
    { fase: "aplica", c: ["bn-voyelle"], k: "choice", ask: "«un árbol viejo»", q: "«un ___ arbre»", o: ["vieil", "vieux", "vieille"], a: 0, why: "<b>vieil</b>." },
    { fase: "dominio", c: ["bn-fem"], k: "fill", ask: "Escribe «mayor» (vieja).", q: "Ma grand-mère est une ___ dame.", acc: ["vieille"], why: "<b>vieille</b>." },
    { fase: "dominio", c: ["bn-fem"], k: "order", ask: "Ordena: «Es una ciudad vieja y bonita».", tokens: ["C'est une", "vieille", "et belle", "ville."], why: "<b>C'est une vieille et belle ville.</b>" },
    { fase: "dominio", c: ["bn-voyelle", "bn-fem"], k: "listen", say: "Mon oncle a acheté un bel appartement dans le vieux quartier.", acc: ["Mon oncle a acheté un bel appartement dans le vieux quartier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon oncle a acheté un bel appartement dans le vieux quartier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["merci", "aussi", "ordinateur", "quartier", "mais", "ville", "ma", "voisine", "dame", "très", "gentille", "jardin", "appartement", "homme", "livre", "voiture", "hôtel", "arbre", "maison", "tableaux", "garçon", "endroit", "tableau", "mon", "oncle", "acheté", "étudiant", "classe", "avons", "grands-parents", "ont", "grand-mère", "bon", "bonne", "mes", "nous"] }
};

E["a1-pluriel"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Le pluriel des noms : -s, -x, -aux",
  objetivo: {
    que: "Vas a formar el plural de los nombres: + s casi siempre, + x en -eau y -eu, y -al → -aux.",
    corto: "-s, -x, -aux.",
    podras: ["Formar el plural con -s (que no suena).", "Formar gâteaux, jeux, journaux.", "Saber que pays, prix y nez no cambian."],
    iconos: ["ic2/lapiz", "ic2/bombilla", "ic2/libros"],
    previos: ["Los animales (lección 53) y los artículos (lección 3)."],
    capacidad: "Ahora escribes bien los plurales."
  },
  requiere: R("am-plur", "ad-accord", "lg-ilya"), recupera: ["am-plur"],
  conceptos: {
    "pl2-s": { n: "+ s; -s, -x, -z no cambian", b: "gr" },
    "pl2-x": { n: "-eau, -eu → + x; -al → -aux", b: "gr" }
  },
  video: {
    titulo: "El plural", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "des gâteaux", seg: [
        { es: "Hola. La ese del plural no suena: la diferencia está en le y les." } ] },
      { v: "frase", filas: [
          { nota: "normal", p: 1, partes: [["un livre → des livres", "-", 1]] },
          { nota: "-eau, -eu", p: 2, partes: [["un gâteau → des gâteaux", "-", 2]] },
          { nota: "-al", p: 3, partes: [["un journal → des journaux", "-", 3]] } ], seg: [
        { es: "Casi siempre, una ese.", p: 1 }, { es: "Con e a u, una equis.", p: 2 }, { es: "Con a ele, a u equis.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«los animales»", o: ["les animaux", "les animals"], a: 0,
        bien: "¡Sí! -al → -aux.", mal: "Animal termina en -al: animaux.",
        seg: [ { es: "Pausa. Los animales." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["des livres", "des pays", "des gâteaux", "des jeux", "des journaux", "des yeux"], seg: [
        { es: "Y un plural muy raro: un œil, des yeux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta infantil", img: "bg-cafe", yo: "camila",
    escena: "Camila organiza una fiesta para sus sobrinos.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai acheté trois gâteaux et des jeux.", "Compré tres pasteles y juegos."],
      ["hugo", "Les enfants adorent les jeux ! Et les journaux ?", "¡A los niños les encantan los juegos! ¿Y los periódicos?"],
      ["camila", "C'est pour les chapeaux en papier !", "¡Son para los sombreros de papel!"],
      ["hugo", "Les enfants mangent des gâteaux et jouent à des jeux.", "Los niños comen pasteles y juegan."]
    ],
    fijate: "Fíjate: gâteaux, jeux, journaux, chapeaux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar el plural",
      idea: "+ s (no suena). -s, -x, -z no cambian. -eau, -eu → + x. -al → -aux (excepto festivals, bals).",
      intro: "Toca cada forma.",
      tabla: [["Singular", "Plural", "Regla"], [
        ["un livre", "des livres", "+ s"],
        ["une table", "des tables", "+ s"],
        ["un pays", "des pays", "no cambia"],
        ["un prix", "des prix", "no cambia"],
        ["un nez", "des nez", "no cambia"],
        ["un gâteau", "des gâteaux", "-eau + x"],
        ["un bateau", "des bateaux", "-eau + x"],
        ["un château", "des châteaux", "-eau + x"],
        ["un jeu", "des jeux", "-eu + x"],
        ["un neveu", "des neveux", "-eu + x"],
        ["un journal", "des journaux", "-al → -aux"],
        ["un hôpital", "des hôpitaux", "-al → -aux"],
        ["un festival", "des festivals", "excepción"],
        ["un œil", "des yeux", "irregular"]
      ]],
      ej: [["des livres", "unos libros"], ["des tables", "unas mesas"], ["un cheveu", "des cheveux"], ["un tableau", "des tableaux"], ["un pneu", "des pneus (excepción)"], ["un bijou", "des bijoux"], ["un chapeau", "des chapeaux"], ["Il lit deux journaux par jour.", "Lee dos periódicos al día."], ["Elle a les yeux bleus.", "Tiene los ojos azules."], ["Les châteaux de la Loire sont beaux.", "Los castillos del Loira son bonitos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des journeaux","des journaux","journal → journaux."], ["des bateaus","des bateaux","-eau + x."], ["des œils","des yeux","Irregular: yeux."], ["des animals", "des animaux", "-al → -aux."], ["des gâteaus", "des gâteaux", "-eau + x."], ["des payss", "des pays", "Ya termina en s."], ["des journals", "des journaux", "-al → -aux."]] }
  ],
  ejemplos: [
    { sit: "«Compré tres pasteles.»", resp: "J'ai acheté trois gâteaux.", pasos: ["-eau + x."], porque: "Plural en x." },
    { sit: "«Visité tres países.»", resp: "J'ai visité trois pays.", pasos: ["-s no cambia."], porque: "Invariable." },
    { sit: "«Leemos los periódicos.»", resp: "Nous lisons les journaux.", pasos: ["-al → -aux."], porque: "Plural en -aux." }
  ],
  comprueba: [
    { q: "La s del plural…", o: ["no se pronuncia", "se pronuncia"], a: 0, b: "gr", porque: "Muda." },
    { q: "El plural de jeu es…", o: ["jeux", "jeus"], a: 0, b: "gr", porque: "-eu + x." },
    { q: "El plural de œil es…", o: ["yeux", "œils"], a: 0, b: "gr", porque: "Irregular." }
  ],
  practica: [
    { fase: "guiada", c: ["pl2-x"], k: "choice", ask: "un journal → des…", q: "«des ___»", o: ["journaux", "journals", "journeaux"], a: 0, pista: "-al.", why: "<b>journaux</b>." },
    { fase: "guiada", c: ["pl2-x"], k: "choice", ask: "un bateau → des…", q: "«des ___»", o: ["bateaux", "bateaus"], a: 0, pista: "-eau.", why: "<b>bateaux</b>." },
    { fase: "guiada", c: ["pl2-s", "pl2-x"], k: "match", ask: "Une cada singular con su plural.", q: "Singular → plural", pairs: [["un cheval", "des chevaux"], ["un neveu", "des neveux"], ["un nez", "des nez"], ["un bijou", "des bijoux"]], pista: "nez no cambia.", why: "Plurales." },
    { fase: "indep", c: ["pl2-x"], k: "fill", ask: "Plural de jeu.", q: "Les enfants adorent les ___ .", acc: ["jeux"], why: "<b>jeux</b>." },
    { fase: "indep", c: ["pl2-s"], k: "fill", ask: "Plural de pays.", q: "J'ai visité trois ___ .", acc: ["pays"], why: "<b>pays</b>." },
    { fase: "indep", c: ["pl2-x"], k: "spot", ask: "Encuentra el error.", s: "Dans ce parc , il y a beaucoup d' [animals] .", fix: "animaux", why: "<b>animaux</b>." },
    { fase: "aplica", c: ["pl2-s", "pl2-x"], k: "sort", ask: "¿+ s o + x / -aux?", q: "Clasifica.", cats: ["+ s", "+ x / -aux"], items: [["livre", 0], ["table", 0], ["festival", 0], ["pneu", 0], ["cheveu", 1], ["hôpital", 1], ["tableau", 1], ["château", 1]], why: "Reglas y excepciones." },
    { fase: "aplica", c: ["pl2-x"], k: "choice", ask: "un œil → des…", q: "«des ___»", o: ["yeux", "œils"], a: 0, why: "<b>yeux</b>." },
    { fase: "dominio", c: ["pl2-x"], k: "fill", ask: "Plural de gâteau.", q: "un gâteau → des ___", acc: ["gâteaux"], why: "<b>gâteaux</b>." },
    { fase: "dominio", c: ["pl2-x"], k: "order", ask: "Ordena: «Los castillos del Loira son bonitos».", tokens: ["Les châteaux", "de la Loire", "sont beaux."], why: "<b>Les châteaux de la Loire sont beaux.</b>" },
    { fase: "dominio", c: ["pl2-s", "pl2-x"], k: "listen", say: "Les enfants mangent des gâteaux et jouent à des jeux.", acc: ["Les enfants mangent des gâteaux et jouent à des jeux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les enfants mangent des gâteaux et jouent à des jeux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Loire"], previo: ["acheté", "j'ai", "trois", "enfants", "adorent", "pour", "papier", "mangent", "jouent", "visité", "lit", "deux", "par", "jour", "bleus", "sont", "beaux", "lisons", "parc", "beaucoup", "d'", "animal", "ce", "œil"] }
};

E["a1-courriel"] = {
  v: 1, lang: "fr", nivel: "A1", estado: "piloto",
  titulo: "Écrire un courriel pour se présenter",
  objetivo: {
    que: "Vas a escribir un correo para presentarte: saludo, quién eres, qué haces, gustos, pregunta y despedida.",
    corto: "Tu correo de presentación.",
    podras: ["Saludar con Bonjour Madame, o Salut Léa,", "Presentarte con edad, estudios y gustos.", "Cerrar con À bientôt o Bien cordialement."],
    iconos: ["ic2/lapiz", "ic2/amigos", "m2d/celebrar"],
    previos: ["Presentarse (Primeros pasos), la edad (lección 2) y la postal (lección 51)."],
    capacidad: "Ahora puedes escribir a tu familia de acogida o a un compañero."
  },
  requiere: R("pt-yo", "pt-vida", "na-age", "cp-salut", "cp-fin", "pz-reg"), recupera: ["pt-yo", "na-age"],
  conceptos: {
    "cm-corps": { n: "Je m'appelle…, j'ai… ans, j'étudie…", b: "voc" },
    "cm-cadre": { n: "saludo y cierre: tu / vous", b: "voc" }
  },
  video: {
    titulo: "El correo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Bonjour Madame,", seg: [
        { es: "Hola. Con un desconocido, vous; con un compañero, tu." } ] },
      { v: "dos",
        a: { tag: "formal", fr: "Bonjour Madame, … Bien cordialement,", es: "vous" },
        b: { tag: "informal", fr: "Salut Léa, … À bientôt !", es: "tu" },
        seg: [ { es: "A tu familia de acogida:", p: 1 }, { fr: "Bonjour Madame,", p: 1 }, { es: "A un compañero:", p: 2 }, { fr: "Salut Léa,", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo diecinueve años.»", o: ["J'ai dix-neuf ans.", "Je suis dix-neuf ans."], a: 0,
        bien: "¡Sí! Edad con avoir.", mal: "La edad se dice con avoir: j'ai… ans.",
        seg: [ { es: "Pausa. La edad." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je m'appelle…", "J'ai… ans", "J'étudie…", "J'aime…", "Et toi ?", "À bientôt !"], seg: [
        { es: "Saludo, quién eres, gustos, una pregunta y despedida.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un correo a Hugo", img: "bg-universidad", yo: "camila",
    escena: "Camila escribe a su nuevo compañero de intercambio.",
    pj: PJ,
    lineas: [
      ["camila", "Salut Hugo, je m'appelle Camila et j'ai dix-neuf ans.", "Hola Hugo, me llamo Camila y tengo diecinueve años."],
      ["camila", "J'étudie les langues étrangères à l'université de Pamplona. J'habite avec ma famille.", "Estudio lenguas extranjeras en la Universidad de Pamplona. Vivo con mi familia."],
      ["camila", "J'aime la musique et le cinéma. Et toi, qu'est-ce que tu aimes ?", "Me gusta la música y el cine. ¿Y a ti qué te gusta?"],
      ["camila", "Écris-moi vite ! À bientôt, Camila", "¡Escríbeme pronto! Hasta pronto, Camila"]
    ],
    fijate: "Fíjate: Salut…, je m'appelle, j'ai… ans, Et toi ?, À bientôt."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Partes del correo",
      idea: "Saludo: Bonjour Madame, / Salut Léa, Presentación: Je m'appelle…, j'ai… ans, j'étudie… Gustos: J'aime… Pregunta: Et toi ? Cierre: J'attends ta réponse. À bientôt ! / Bien cordialement,",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "Bonjour Madame,", es: "Buenos días, señora," },
        { fr: "Bonjour Monsieur,", es: "Buenos días, señor," },
        { fr: "Salut Léa,", es: "Hola Léa," },
        { fr: "Je m'appelle Laura et j'ai vingt ans.", es: "Me llamo Laura y tengo veinte años." },
        { fr: "J'étudie le français à l'université.", es: "Estudio francés en la universidad." },
        { fr: "J'habite à Bogotá avec ma famille.", es: "Vivo en Bogotá con mi familia." },
        { fr: "Je vous écris pour…", es: "Le escribo para…" },
        { fr: "Et toi, qu'est-ce que tu aimes ?", es: "¿Y a ti qué te gusta?" },
        { fr: "J'attends ta réponse.", es: "Espero tu respuesta." },
        { fr: "Écris-moi vite !", es: "¡Escríbeme pronto!" },
        { fr: "Merci d'avance.", es: "Gracias de antemano." },
        { fr: "Bien cordialement,", es: "Cordialmente," },
        { fr: "Cordialement,", es: "Cordialmente," }
      ],
      clave: "La edad con avoir: j'ai dix-neuf ans." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis dix-neuf ans.", "J'ai dix-neuf ans.", "Edad: avoir."], ["Ma sœur est seize ans.", "Ma sœur a seize ans.", "Edad: avoir."], ["Salut Madame,", "Bonjour Madame,", "Con desconocidos: Bonjour."]] }
  ],
  ejemplos: [
    { sit: "Escribes a la madre de tu familia de acogida.", resp: "Bonjour Madame,", pasos: ["Formal."], porque: "Desconocida." },
    { sit: "Te presentas.", resp: "Je m'appelle Andrés et j'étudie le français à Pamplona.", pasos: ["Nombre + estudios."], porque: "Presentación." },
    { sit: "Cierras un correo formal.", resp: "Bien cordialement,", pasos: ["Formal."], porque: "Cierre." }
  ],
  comprueba: [
    { q: "A un desconocido se le escribe…", o: ["de vous", "de tu"], a: 0, b: "voc", porque: "Formal." },
    { q: "«Bien cordialement» va…", o: ["al final de un correo formal", "al principio"], a: 0, b: "voc", porque: "Cierre." },
    { q: "«J'attends ta réponse» significa…", o: ["Espero tu respuesta.", "Atiendo tu respuesta."], a: 0, b: "voc", porque: "attendre = esperar." }
  ],
  practica: [
    { fase: "guiada", c: ["cm-cadre"], k: "choice", ask: "Escribes a la madre de tu familia de acogida.", q: "«___»", o: ["Bonjour Madame,", "Salut Madame,", "Coucou !"], a: 0, pista: "Formal.", why: "<b>Bonjour Madame,</b>" },
    { fase: "guiada", c: ["cm-corps"], k: "choice", ask: "«Tengo veinte años y soy estudiante.»", q: "«J'___ vingt ans et je suis étudiant.»", o: ["ai", "suis", "a"], a: 0, pista: "Edad.", why: "<b>J'ai</b>." },
    { fase: "guiada", c: ["cm-corps", "cm-cadre"], k: "sort", ask: "¿Presentarse o terminar?", q: "Clasifica.", cats: ["Presentarse", "Terminar"], items: [["Je m'appelle Laura.", 0], ["J'ai vingt et un ans.", 0], ["Je suis colombienne.", 0], ["J'habite à Cúcuta.", 0], ["J'attends ta réponse.", 1], ["À bientôt !", 1], ["Écris-moi vite.", 1], ["Bien cordialement,", 1]], pista: "bientôt = pronto.", why: "Partes." },
    { fase: "indep", c: ["cm-corps"], k: "fill", ask: "Escribe la preposición.", q: "J'étudie le français ___ l'université de Pamplona.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["cm-corps"], k: "fill", ask: "Escribe «llamo».", q: "Je m'___ Carlos.", acc: ["appelle"], why: "<b>appelle</b>." },
    { fase: "indep", c: ["cm-corps"], k: "spot", ask: "Encuentra el error.", s: "Ma sœur [est] seize ans et elle est au lycée .", fix: "a", why: "<b>a seize ans</b>." },
    { fase: "aplica", c: ["cm-cadre"], k: "match", ask: "¿Para qué sirve cada fórmula?", q: "Fórmula → uso", pairs: [["Bonjour Monsieur,", "saludar"], ["Je vous écris pour…", "explicar el motivo"], ["Merci d'avance.", "agradecer"], ["Cordialement,", "despedirse"]], why: "Correo formal." },
    { fase: "aplica", c: ["cm-cadre"], k: "choice", ask: "Escribes a un compañero.", q: "«___»", o: ["Salut Julie !", "Bonjour Madame,", "Bien cordialement,"], a: 0, why: "<b>Salut</b>." },
    { fase: "dominio", c: ["cm-corps", "cm-cadre"], k: "order", ask: "Ordena el correo.", tokens: ["Salut Hugo,", "je m'appelle Ana.", "J'aime la musique.", "Et toi ?", "À bientôt !"], why: "Saludo, quién eres, gustos, pregunta, despedida." },
    { fase: "dominio", c: ["cm-cadre"], k: "choice", es: true, say: "J'attends ta réponse.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Espero tu respuesta.", "Atiendo tu pregunta.", "Te respondo pronto."], a: 0, why: "<b>attendre</b> = esperar." },
    { fase: "dominio", c: ["cm-corps", "cm-cadre"], k: "listen", say: "Bonjour, je m'appelle Andrés et j'étudie le français à Pamplona.", acc: ["Bonjour, je m'appelle Andrés et j'étudie le français à Pamplona.", "Bonjour je m'appelle Andrés et j'étudie le français à Pamplona."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour, je m'appelle Andrés et j'étudie le français à Pamplona.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pamplona", "Léa", "Laura", "Bogotá", "Andrés", "Carlos", "Julie", "Ana", "Cúcuta"], previo: ["dix-neuf", "ans", "étudie", "j'étudie", "langues", "étrangères", "université", "l'université", "habite", "j'habite", "avec", "ma", "famille", "musique", "cinéma", "toi", "qu'est-ce", "que", "aimes", "vingt", "et", "un", "colombienne", "étudiant", "sœur", "seize", "lycée", "coucou", "écris", "vous", "pour", "français"] }
};

})();
