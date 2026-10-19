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

})();
