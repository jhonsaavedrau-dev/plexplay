/* PLEX PLAY 4.55 — Sistema de enseñanza: las fichas del curso «Francés A2» (a2). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también A1, el curso anterior).
   A2 parte de A1: BASE son todos los conceptos de Primeros pasos y de A1, que las fichas dan por enseñados.
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
var BASE = [
  "saludar", "despedirse", "tratamiento", "tu-vous", "presentarse", "preguntar-nombre", "enchante", "pron", "ho-llegar", "ho-irse",
  "ho-salut", "me-merci", "me-svp", "me-oui", "pr-nom", "pr-q", "pr-ench", "al-dificiles", "al-otras", "so-u",
  "so-grupos", "so-nariz", "mu-final", "mu-h", "mu-careful", "n1-05", "n1-610", "n2-num", "n2-age", "co-basicos",
  "co-otros", "ar-le", "ar-un", "cv-preg", "cv-resp", "re-comprendre", "re-pedir", "fa-voc", "fa-mon", "am-ami",
  "am-copain", "am-mon", "vo-presentar", "vo-resp", "av-formas", "av-neg", "et-formas", "et-nat", "ma-voc", "ma-dans",
  "ob-voc", "ob-q", "gp-adj", "gp-fem", "an-voc", "an-nom", "cc-orden", "cc-fem", "jo-dias", "jo-hoy",
  "mo-meses", "mo-est", "he-decir", "he-preg", "mm-partes", "mm-saludos", "me-fait", "me-pleut", "mg-voc", "mg-du",
  "bo-voc", "bo-bois", "ca-pedir", "ca-pagar", "fr-voc", "fr-des", "ai-formas", "ai-preg", "n6-dec", "n6-comp",
  "li-voc", "li-ou", "di-lados", "di-dist", "tr-voc", "tr-en", "pa-voc", "pa-de", "mg2-voc", "mg2-ouv",
  "cb-comprar", "cb-cher", "ar2-voc", "ar2-payer", "ai-aide", "ai-perdu", "ai-appel", "ad-voc", "ad-orden", "ho-reserva",
  "ho-servicios", "co2-cuerpo", "co2-cara", "ml-mal", "ml-malade", "em-voc", "em-fem", "fs-faim", "fs-froid", "ve-voc",
  "ve-porte", "sp-voc", "sp-jouer", "lo-verbos", "lo-activ", "va-voc", "va-gr", "cl-voc", "cl-pedir", "cs-verbos",
  "cs-tu", "es-etudier", "es-voc", "an-feliz", "an-fecha", "an-cosas", "pa2-formas", "pa2-nivel", "ha-a", "ha-ou",
  "qo-voz", "qo-estce", "np-regla", "np-vocal", "qq-palabras", "qq-frases", "te-llamada", "te-cierre", "in-invitar", "in-resp",
  "rv-donde", "rv-hora", "ar3-cuando", "ar3-registro", "tc-voc", "tc-wifi", "pt-yo", "pt-vida", "dl-abrir", "dl-seguir",
  "na-age", "na-num", "na-ecrire", "at-def", "at-indef", "at-genre", "er-term", "er-oral", "er-neg", "ir-etre-avoir",
  "ir-aller-faire", "qu-tres", "qu-mots", "vi-contr", "vi-lugar", "gh-gustos", "gh-hora", "gh-dias", "po-sing", "po-plur",
  "po-concord", "ad-accord", "ad-especial", "ad-place", "lg-ilya", "lg-prep", "cr-pedir", "cr-mesero", "cr-num", "ms-fait",
  "ms-fecha", "de-forma", "de-tienda", "vp-conj", "vp-uso", "lo2-jouer", "lo2-faire", "n7-70", "n7-80", "gn-cent",
  "gn-mille", "da-forma", "da-preg", "ho2-courante", "ho2-officielle", "ro-pron", "ro-verbos", "fq-escala", "fq-lugar", "ir2-conj",
  "ir2-grupo", "re2-attendre", "re2-prendre", "pn-prep", "pn-nat", "pf-sinart", "pf-fem", "ph-etre", "ph-avoir", "ca2-voc",
  "ca2-fem", "ci-cest", "ci-ilest", "ci-ilya", "tp-en", "tp-a", "ch-preg", "ch-indic", "pl-sans", "pl-de",
  "ad-a", "ad-de", "lv-masc", "lv-fem", "av2-venir", "av2-chez", "im-forma", "im-er", "co-lieu", "co-chez",
  "cq-de", "cq-adv", "pb-poste", "pb-banque", "ho-reserver", "ho-recep", "te-appel", "te-recep", "or-ieme", "or-premier",
  "al-genre", "al-cat", "pa2-forma", "pa2-gusto", "pd-de", "pd-excep", "rp-repas", "rp-menu", "ra-avis", "ra-bonbien",
  "vc-accord", "vc-invar", "gi-art", "gi-pref", "so-proposer", "so-repondre", "cp-salut", "cp-fin", "fe-voeux", "fe-bonne",
  "am-voc", "am-plur", "na-voc", "na-prep", "ta-faire", "ta-autres", "ql-forma", "ql-est", "it-mots", "it-reg",
  "pz-cond", "pz-reg", "pt-forma", "pt-uso", "on-forma", "on-sens", "sc-savoir", "sc-conn", "ps-sing", "ps-plur",
  "if-inf", "if-neg", "ae-sens", "ae-besoin", "bn-voyelle", "bn-fem", "pl2-s", "pl2-x", "cm-corps", "cm-cadre"];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ A2·1 a A2·3 ================================ */

E["a2-passe-compose-avoir"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé avec avoir",
  objetivo: {
    que: "Vas a contar acciones terminadas con avoir + participio: j'ai mangé, nous avons fini.",
    corto: "J'ai mangé, j'ai fait.",
    podras: ["Formar el passé composé con avoir.", "Formar participios regulares: parlé, fini, attendu.", "Usar los irregulares: fait, pris, vu, bu, écrit…"],
    iconos: ["ic2/reloj-arena", "ic2/lapiz", "ic2/libros"],
    previos: ["avoir en presente (A1, lección 5) y los verbos en -er (A1, lección 4)."],
    capacidad: "Ahora puedes contar lo que hiciste ayer o el fin de semana."
  },
  requiere: R(), recupera: ["ir-etre-avoir", "er-term"],
  conceptos: {
    "pca-forma": { n: "avoir + participio; -é, -i, -u", b: "gr" },
    "pca-irreg": { n: "fait, pris, vu, eu, été, bu, lu, dit, écrit, mis", b: "gr" },
    "pca-neg": { n: "je n'ai pas + participio", b: "gr" }
  },
  video: {
    titulo: "El passé composé", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "J'ai mangé.", seg: [
        { es: "Hola. Para contar lo que pasó, avoir más el participio." } ] },
      { v: "frase", filas: [
          { nota: "-er → -é", p: 1, partes: [["j'ai parlé", "-", 1]] },
          { nota: "-ir → -i", p: 2, partes: [["nous avons fini", "-", 2]] },
          { nota: "-re → -u", p: 3, partes: [["il a attendu", "-", 3]] } ], seg: [
        { es: "Hablé,", p: 1 }, { es: "terminamos,", p: 2 }, { es: "esperó.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tomé el bus.»", o: ["J'ai pris le bus.", "J'ai prendu le bus."], a: 0,
        bien: "¡Sí! Pris es irregular.", mal: "Prendre tiene un participio irregular: pris.",
        seg: [ { es: "Pausa. Tomar es irregular." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["fait", "pris", "vu", "eu", "été", "bu", "lu", "dit", "écrit", "mis"], seg: [
        { es: "Estos diez se aprenden de memoria.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-cafe", yo: "camila",
    escena: "El lunes, Hugo le pregunta a Camila por su fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Qu'est-ce que tu as fait ce week-end ?", "¿Qué hiciste este fin de semana?"],
      ["camila", "Samedi, j'ai fait du sport et j'ai écrit à ma mère.", "El sábado hice deporte y le escribí a mi mamá."],
      ["hugo", "Et dimanche ? Tu as vu le film de Céline Sciamma ?", "¿Y el domingo? ¿Viste la película de Céline Sciamma?"],
      ["camila", "Non, je n'ai pas vu le film. J'ai fini mes devoirs !", "No, no vi la película. ¡Terminé mis tareas!"]
    ],
    fijate: "Fíjate: j'ai fait, j'ai écrit, je n'ai pas vu, j'ai fini."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Avoir + participio",
      idea: "avoir en presente + participio. -er → -é (parlé), -ir → -i (fini), -re → -u (attendu). La negación rodea al auxiliar: je n'ai pas mangé.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["j'ai parlé", "hablé / he hablado", "-er → -é"],
        ["tu as mangé", "comiste", "-er → -é"],
        ["Nous avons fini l'examen.", "Terminamos el examen.", "-ir → -i"],
        ["il a attendu", "esperó", "-re → -u"],
        ["Samedi, j'ai fait du sport.", "El sábado hice deporte.", "faire → fait"],
        ["Paul a pris le train.", "Paul tomó el tren.", "prendre → pris"],
        ["Hier soir, j'ai vu un film.", "Anoche vi una película.", "voir → vu"],
        ["Qu'est-ce que vous avez bu ?", "¿Qué tomaron?", "boire → bu"],
        ["Ma sœur a écrit une lettre.", "Mi hermana escribió una carta.", "écrire → écrit"],
        ["Hier, j'ai été malade.", "Ayer estuve enfermo.", "être → été"],
        ["Je n'ai pas vu le film.", "No vi la película.", "negación"],
        ["Nous n'avons pas mangé au restaurant.", "No comimos en el restaurante.", "negación"]
      ]],
      ej: [["eu (avoir)", "tenido"], ["lu (lire)", "leído"], ["dit (dire)", "dicho"], ["mis (mettre)", "puesto"], ["toute la journée", "todo el día"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai prendu le bus.", "J'ai pris le bus.", "prendre → pris."], ["J'ai faisé du sport.", "J'ai fait du sport.", "faire → fait."], ["Je n'ai vu pas le film.", "Je n'ai pas vu le film.", "ne… pas rodea al auxiliar."], ["J'ai voir un film.", "J'ai vu un film.", "Participio, no infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Comimos una pizza en casa.»", resp: "Nous avons mangé une pizza à la maison.", pasos: ["nous avons.", "manger → mangé."], porque: "Regular." },
    { sit: "«Mi hermana le escribió a su abuela.»", resp: "Ma sœur a écrit à sa grand-mère.", pasos: ["elle a.", "écrire → écrit."], porque: "Irregular." },
    { sit: "«No terminé mis tareas.»", resp: "Je n'ai pas fini mes devoirs.", pasos: ["n'ai pas + fini."], porque: "Negación." }
  ],
  comprueba: [
    { q: "El participio de prendre es…", o: ["pris", "prendu"], a: 0, b: "gr", porque: "Irregular." },
    { q: "En negación, ne… pas rodea…", o: ["al auxiliar", "al participio"], a: 0, b: "gr", porque: "je n'ai pas vu." },
    { q: "El participio de los verbos en -ir como finir es…", o: ["-i", "-é"], a: 0, b: "gr", porque: "fini." }
  ],
  practica: [
    { fase: "guiada", c: ["pca-irreg"], k: "choice", ask: "«Anoche vi una película en la tele.»", q: "«Hier soir, j'ai ___ un film à la télé.»", o: ["vu", "voir", "voyé"], a: 0, pista: "voir → ?", why: "<b>vu</b>." },
    { fase: "guiada", c: ["pca-forma"], k: "choice", ask: "«Comimos una pizza en casa.»", q: "«Samedi, nous ___ une pizza à la maison.»", o: ["avons mangé", "sommes mangé", "avons manger"], a: 0, pista: "avoir + -é.", why: "<b>avons mangé</b>." },
    { fase: "guiada", c: ["pca-irreg"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["faire", "fait"], ["prendre", "pris"], ["boire", "bu"], ["mettre", "mis"], ["écrire", "écrit"], ["lire", "lu"]], pista: "De memoria.", why: "Irregulares." },
    { fase: "indep", c: ["pca-forma", "pca-irreg"], k: "sort", ask: "¿Regular o irregular?", q: "Clasifica.", cats: ["Participio regular", "Participio irregular"], items: [["parlé (parler)", 0], ["fini (finir)", 0], ["attendu (attendre)", 0], ["dit (dire)", 1], ["eu (avoir)", 1], ["été (être)", 1], ["mis (mettre)", 1]], why: "Regulares e irregulares." },
    { fase: "indep", c: ["pca-irreg"], k: "spot", ask: "Encuentra el error.", s: "Dimanche , Paul a [prendu] le train pour Lyon .", fix: "pris", why: "<b>pris</b>." },
    { fase: "indep", c: ["pca-irreg"], k: "fill", ask: "Escribe écrire en passé composé (elle).", q: "Ma sœur ___ une lettre à sa grand-mère.", acc: ["a écrit"], why: "<b>a écrit</b>." },
    { fase: "aplica", c: ["pca-neg"], k: "choice", ask: "— «Vous avez mangé au restaurant ?» — «No.»", q: "«Non, nous ___ au restaurant.»", o: ["n'avons pas mangé", "avons pas mangé", "n'avons mangé pas"], a: 0, why: "<b>n'avons pas mangé</b>." },
    { fase: "aplica", c: ["pca-irreg"], k: "fill", ask: "Escribe être en passé composé (je).", q: "Hier, j'___ malade toute la journée.", acc: ["ai été"], why: "<b>ai été</b>." },
    { fase: "dominio", c: ["pca-irreg"], k: "choice", ask: "«¿Qué tomaron en el café?»", q: "«Qu'est-ce que vous avez ___ au café ?»", o: ["bu", "boire", "buvé"], a: 0, why: "<b>bu</b>." },
    { fase: "dominio", c: ["pca-neg"], k: "order", ask: "Ordena: «No terminé mis tareas».", tokens: ["Je", "n'ai pas", "fini", "mes devoirs."], why: "<b>Je n'ai pas fini mes devoirs.</b>" },
    { fase: "dominio", c: ["pca-forma", "pca-irreg", "pca-neg"], k: "listen", say: "Hier, j'ai été malade toute la journée.", acc: ["Hier, j'ai été malade toute la journée.", "Hier j'ai été malade toute la journée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, j'ai été malade toute la journée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon", "Céline", "Sciamma"], previo: ["hier", "week-end", "sport", "écrit", "mère", "film", "devoirs", "examen", "lettre", "grand-mère", "malade", "maison", "télé", "train", "voir", "écrire", "faire", "prendre", "mettre", "lire", "voyé", "buvé", "boire", "manger", "sommes"] }
};

E["a2-passe-compose-etre"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé avec être",
  objetivo: {
    que: "Vas a usar être con los verbos de movimiento o cambio y con los pronominales, y a concordar el participio.",
    corto: "Elle est partie.",
    podras: ["Reconocer los verbos con être (aller, venir, partir, naître…).", "Concordar: elle est allée, ils sont venus.", "Usar être con los pronominales: je me suis levé."],
    iconos: ["m2d/correr", "ic2/reloj-arena", "ic2/bombilla"],
    previos: ["El passé composé con avoir (lección 1) y être (A1)."],
    capacidad: "Ahora puedes contar adónde fuiste y cuándo llegaste."
  },
  requiere: R("pca-forma", "pca-irreg", "pca-neg"), recupera: ["pca-forma"],
  conceptos: {
    "pce-verbes": { n: "aller, venir, partir, arriver, naître, mourir… + être", b: "gr" },
    "pce-accord": { n: "concordancia: allée, venus, parties", b: "gr" }
  },
  video: {
    titulo: "El passé composé con être", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Je suis allée.", seg: [
        { es: "Hola. Unos pocos verbos usan être. Y entonces el participio concuerda." } ] },
      { v: "dos",
        a: { tag: "con avoir", fr: "Elle a mangé.", es: "no concuerda" },
        b: { tag: "con être", fr: "Elle est partie.", es: "concuerda: +e" },
        seg: [ { es: "Con avoir, no cambia:", p: 1 }, { fr: "Elle a mangé.", p: 1 }, { es: "Con être, concuerda con el sujeto:", p: 2 }, { fr: "Elle est partie.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Fui al cine.»", o: ["Je suis allé au cinéma.", "J'ai allé au cinéma."], a: 0,
        bien: "¡Sí! Aller va con être.", mal: "Aller siempre va con être.",
        seg: [ { es: "Pausa. Ir es movimiento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["aller", "venir", "partir", "arriver", "rester", "tomber", "naître", "mourir", "se lever"], seg: [
        { es: "Movimiento, cambio y todos los pronominales.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las vacaciones", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta sus vacaciones en Colombia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu es allée où en vacances ?", "¿Adónde fuiste de vacaciones?"],
      ["camila", "Je suis allée à Santa Marta. Mes parents sont arrivés en avion.", "Fui a Santa Marta. Mis padres llegaron en avión."],
      ["hugo", "Et ta cousine ?", "¿Y tu prima?"],
      ["camila", "Elle est restée à Bogotá. Elle est née là-bas, en 2005.", "Se quedó en Bogotá. Nació allá, en 2005."]
    ],
    fijate: "Fíjate: je suis allée (Camila es mujer), ils sont arrivés, elle est née."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Être + participio",
      idea: "Verbos de movimiento o cambio (aller, venir, partir, arriver, entrer, sortir, rester, tomber, naître, mourir…) y todos los pronominales van con être. El participio concuerda con el sujeto: +e, +s, +es.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Concordancia"], [
        ["Je suis allé à Santa Marta.", "Fui a Santa Marta. (hombre)", "—"],
        ["Je suis allée à Santa Marta.", "Fui a Santa Marta. (mujer)", "+ e"],
        ["Elle est partie.", "Se fue.", "+ e"],
        ["Nous sommes arrivés le soir.", "Llegamos por la noche.", "+ s"],
        ["Elles sont rentrées à minuit.", "Volvieron a medianoche.", "+ es"],
        ["Elle est née à Cúcuta.", "Nació en Cúcuta.", "+ e"],
        ["Il est resté à la maison.", "Se quedó en casa.", "—"],
        ["Paul et Sophie sont allés au Mexique.", "Paul y Sophie fueron a México.", "grupo mixto: + s"],
        ["Ce matin, je me suis levée à six heures.", "Esta mañana me levanté a las seis.", "pronominal"],
        ["Nous ne sommes pas sortis.", "No salimos.", "negación"]
      ]],
      ej: [["naître → né", "nacer → nacido"], ["mourir → mort", "morir → muerto"], ["venir → venu", "venir → venido"], ["descendre → descendu", "bajar → bajado"], ["rester → resté", "quedarse"], ["tomber", "caerse"], ["l'été dernier", "el verano pasado"], ["très tôt", "muy temprano"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elles sont allés.","Elles sont allées.","Solo mujeres: + es."], ["J'ai allé au cinéma.", "Je suis allé(e) au cinéma.", "aller: être."], ["Nous avons partis très tôt.", "Nous sommes partis très tôt.", "partir: être."], ["Ma cousine est né à Bogotá.", "Ma cousine est née à Bogotá.", "Concuerda: + e."], ["Elles sont rentré.", "Elles sont rentrées.", "+ es."]] }
  ],
  ejemplos: [
    { sit: "«Mis padres llegaron en avión.»", resp: "Mes parents sont arrivés en avion.", pasos: ["sont + arrivé.", "+ s."], porque: "Plural." },
    { sit: "«Léa fue al mercado.»", resp: "Léa est allée au marché.", pasos: ["est + allé.", "+ e."], porque: "Femenino." },
    { sit: "«No salimos de casa.»", resp: "Nous ne sommes pas sortis de la maison.", pasos: ["ne sommes pas + sortis."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Con être, el participio…", o: ["concuerda con el sujeto", "no cambia nunca"], a: 0, b: "gr", porque: "+e, +s." },
    { q: "Un grupo de hombres y mujeres lleva…", o: ["masculino plural", "femenino plural"], a: 0, b: "gr", porque: "allés." },
    { q: "Los verbos pronominales en passé composé van con…", o: ["être", "avoir"], a: 0, b: "gr", porque: "Siempre être." }
  ],
  practica: [
    { fase: "guiada", c: ["pce-accord"], k: "choice", ask: "«Léa fue al mercado con su madre.»", q: "«Samedi, Léa ___ au marché avec sa mère.»", o: ["est allée", "a allé", "est allé"], a: 0, pista: "être + concordancia.", why: "<b>est allée</b>." },
    { fase: "guiada", c: ["pce-verbes"], k: "sort", ask: "¿Con avoir o con être?", q: "Clasifica.", cats: ["con avoir", "con être"], items: [["manger", 0], ["voir", 0], ["faire", 0], ["boire", 0], ["partir", 1], ["tomber", 1], ["rester", 1], ["se réveiller", 1]], pista: "Movimiento y pronominales: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["pce-verbes"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["naître", "né"], ["mourir", "mort"], ["venir", "venu"], ["descendre", "descendu"], ["rester", "resté"]], pista: "naître → né.", why: "Participios." },
    { fase: "indep", c: ["pce-accord"], k: "fill", ask: "Escribe arriver en passé composé (ils).", q: "Mes parents ___ à Cartagena en avion.", acc: ["sont arrivés"], why: "<b>sont arrivés</b>." },
    { fase: "indep", c: ["pce-verbes"], k: "spot", ask: "Encuentra el error.", s: "Hier , nous [avons] partis très tôt .", fix: "sommes", why: "<b>sommes partis</b>." },
    { fase: "indep", c: ["pce-accord"], k: "spot", ask: "Encuentra el error.", s: "Ma cousine est [né] à Bogotá en 2005 .", fix: "née", why: "<b>née</b>." },
    { fase: "aplica", c: ["pce-verbes", "pce-accord"], k: "fill", ask: "Escribe se lever en passé composé (je, mujer).", q: "Ce matin, je ___ à six heures.", acc: ["me suis levée"], why: "<b>me suis levée</b>." },
    { fase: "aplica", c: ["pce-accord"], k: "choice", ask: "«Paul y Sophie fueron a México.»", q: "«Paul et Sophie sont ___ au Mexique l'été dernier.»", o: ["allés", "allées", "allé"], a: 0, why: "Grupo mixto: <b>allés</b>." },
    { fase: "dominio", c: ["pce-verbes"], k: "fill", ask: "Escribe sortir en negativo (nous).", q: "Dimanche, nous ___ de la maison.", acc: ["ne sommes pas sortis"], why: "<b>ne sommes pas sortis</b>." },
    { fase: "dominio", c: ["pce-accord"], k: "order", ask: "Ordena: «Volvieron a medianoche» (ellas).", tokens: ["Elles", "sont", "rentrées", "à minuit."], why: "<b>Elles sont rentrées à minuit.</b>" },
    { fase: "dominio", c: ["pce-verbes", "pce-accord"], k: "listen", say: "Mes parents sont arrivés à Cartagena en avion.", acc: ["Mes parents sont arrivés à Cartagena en avion."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes parents sont arrivés à Cartagena en avion.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Santa Marta", "Bogotá", "Cúcuta", "Cartagena", "Léa", "Paul", "Sophie", "Mexique"], previo: ["vacances", "parents", "avion", "cousine", "là-bas", "minuit", "marché", "mère", "dernier", "tôt", "matin", "maison", "2005", "allé", "a"] }
};

E["a2-imparfait"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'imparfait pour décrire",
  objetivo: {
    que: "Vas a formar el imparfait y usarlo para describir el pasado y las costumbres.",
    corto: "Quand j'étais petit…",
    podras: ["Formar el imparfait desde nous: parl- + -ais.", "Usar la excepción j'étais.", "Distinguir descripción (imparfait) de acción puntual (passé composé)."],
    iconos: ["ic2/reloj-arena", "m2d/pensativo", "ic2/libros"],
    previos: ["El passé composé (lecciones 1 y 2)."],
    capacidad: "Ahora puedes describir cómo eran las cosas antes."
  },
  requiere: R("pca-forma", "pce-verbes"), recupera: ["er-term"],
  conceptos: {
    "imp-forma": { n: "radical de nous + -ais, -ait, -ions, -aient; j'étais", b: "gr" },
    "imp-uso": { n: "descripción y hábito vs. acción puntual", b: "gr" }
  },
  video: {
    titulo: "El imparfait", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Il faisait beau.", seg: [
        { es: "Hola. El imparfait es tu imperfecto: hablaba, comía, era." } ] },
      { v: "frase", filas: [
          { nota: "nous parlons", p: 1, partes: [["parl-", "-", 1]] },
          { nota: "+ terminación", p: 2, partes: [["je parlais · nous parlions", "-", 2]] },
          { nota: "excepción", p: 3, partes: [["j'étais", "-", 3]] } ], seg: [
        { es: "Toma nous en presente, quita ons,", p: 1 }, { es: "y añade las terminaciones.", p: 2 }, { es: "Solo être es distinto.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando era pequeño…»", o: ["Quand j'étais petit…", "Quand j'ai été petit…"], a: 0,
        bien: "¡Sí! Descripción: imparfait.", mal: "Para describir el pasado: imparfait.",
        seg: [ { es: "Pausa. Cuando era." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je parlais", "il parlait", "nous parlions", "ils parlaient", "j'étais"], seg: [
        { es: "Lo que pasó una vez, passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Recuerdos", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su infancia en Cali.",
    pj: PJ,
    lineas: [
      ["camila", "Quand j'étais petite, j'habitais à Cali.", "Cuando era pequeña, vivía en Cali."],
      ["hugo", "Il faisait chaud ?", "¿Hacía calor?"],
      ["camila", "Oui, toujours ! Tous les samedis, je jouais au foot avec mon frère.", "¡Sí, siempre! Todos los sábados jugaba fútbol con mi hermano."],
      ["camila", "Un jour, je regardais la télé quand mon père est arrivé avec un chat.", "Un día, veía la tele cuando mi papá llegó con un gato."]
    ],
    fijate: "Fíjate: j'étais, j'habitais, je jouais (descripción) / est arrivé (una vez)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el imparfait",
      idea: "Radical de nous en presente (nous parlons → parl-) + -ais, -ais, -ait, -ions, -iez, -aient. Excepción: être → j'étais. Descripción o hábito → imparfait; acción puntual → passé composé.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["je parlais", "hablaba", "-ais"],
        ["il parlait", "hablaba", "-ait"],
        ["nous parlions", "hablábamos", "-ions"],
        ["ils parlaient", "hablaban", "-aient"],
        ["nous faisons → je faisais", "hacía", "radical fais-"],
        ["nous prenons → je prenais", "tomaba", "radical pren-"],
        ["nous buvons → je buvais", "bebía", "radical buv-"],
        ["j'étais / nous étions", "era / éramos", "excepción"],
        ["Il faisait beau.", "Hacía buen tiempo.", "descripción"],
        ["D'habitude, je prenais le bus.", "Normalmente tomaba el bus.", "hábito"],
        ["Je regardais la télé quand le téléphone a sonné.", "Veía la tele cuando sonó el teléfono.", "fondo + acción"]
      ]],
      ej: [["nous allions", "íbamos"], ["elle était", "era"], ["elle avait", "tenía"], ["nous finissons → je finissais", "terminaba"], ["nous mangeons → je mangeais", "comía"], ["j'avais", "tenía"], ["il pleuvait", "llovía"], ["soudain", "de repente"], ["d'habitude", "normalmente"], ["les bonbons", "los dulces"], ["les cheveux longs", "el pelo largo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand j'ai été petit…", "Quand j'étais petit…", "Descripción: imparfait."], ["Mes grands-parents habitait…", "Mes grands-parents habitaient…", "ils: -aient."], ["je mangais", "je mangeais", "Se conserva la e de nous mangeons."]] }
  ],
  ejemplos: [
    { sit: "«Jugaba al fútbol todos los sábados.»", resp: "Je jouais au foot tous les samedis.", pasos: ["Hábito → imparfait."], porque: "Costumbre." },
    { sit: "«Ayer hacía frío en París.»", resp: "Hier, il faisait froid à Paris.", pasos: ["Descripción → imparfait."], porque: "Tiempo." },
    { sit: "«Veía la tele cuando llegó mi hermano.»", resp: "Je regardais la télé quand mon frère est arrivé.", pasos: ["Fondo: imparfait.", "Acción: passé composé."], porque: "Los dos." }
  ],
  comprueba: [
    { q: "El imparfait se forma desde…", o: ["nous en presente", "el infinitivo"], a: 0, b: "gr", porque: "nous parlons → parl-." },
    { q: "La única excepción es…", o: ["être (j'étais)", "avoir (j'avais)"], a: 0, b: "gr", porque: "ét-." },
    { q: "Una acción puntual (de repente sonó) va en…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Una vez." }
  ],
  practica: [
    { fase: "guiada", c: ["imp-forma"], k: "choice", ask: "«Cuando era pequeño, jugaba al fútbol.»", q: "«Quand j'étais petit, je ___ au foot tous les samedis.»", o: ["jouais", "ai joué", "jouait"], a: 0, pista: "je → -ais.", why: "<b>jouais</b>." },
    { fase: "guiada", c: ["imp-forma"], k: "match", ask: "Une cada presente con su imparfait.", q: "nous… → je…", pairs: [["nous faisons", "je faisais"], ["nous prenons", "je prenais"], ["nous buvons", "je buvais"], ["nous finissons", "je finissais"], ["nous mangeons", "je mangeais"]], pista: "Radical de nous.", why: "Formación." },
    { fase: "guiada", c: ["imp-forma"], k: "choice", ask: "«Íbamos a casa de los abuelos.»", q: "«Quand nous étions enfants, nous ___ chez nos grands-parents.»", o: ["allions", "allons", "sommes allés"], a: 0, pista: "nous → -ions.", why: "<b>allions</b>." },
    { fase: "indep", c: ["imp-forma"], k: "spot", ask: "Encuentra el error.", s: "Mes grands-parents [habitait] dans une petite maison .", fix: "habitaient", why: "<b>habitaient</b>." },
    { fase: "indep", c: ["imp-forma"], k: "fill", ask: "Escribe faire en imparfait (il).", q: "Hier, il ___ froid à Paris.", acc: ["faisait"], why: "<b>faisait</b>." },
    { fase: "indep", c: ["imp-uso"], k: "sort", ask: "¿Imparfait o passé composé?", q: "Clasifica.", cats: ["Imparfait (descripción / hábito)", "Passé composé (acción puntual)"], items: [["Il faisait beau.", 0], ["D'habitude, je prenais le bus.", 0], ["La maison était grande.", 0], ["Soudain, le téléphone a sonné.", 1], ["Samedi dernier, j'ai acheté un vélo.", 1], ["Un jour, nous avons rencontré un acteur.", 1]], why: "Usos." },
    { fase: "aplica", c: ["imp-uso"], k: "choice", ask: "«Veía la tele cuando llegó mi hermano.»", q: "«Je regardais la télé quand mon frère ___ .»", o: ["est arrivé", "arrivait", "arrive"], a: 0, why: "Acción puntual: <b>est arrivé</b>." },
    { fase: "aplica", c: ["imp-forma"], k: "fill", ask: "Escribe être en imparfait (nous).", q: "Nous ___ très contents de notre voyage.", acc: ["étions"], why: "<b>étions</b>." },
    { fase: "dominio", c: ["imp-forma"], k: "choice", ask: "«Mi madre tenía el pelo largo.»", q: "«Quand elle était jeune, ma mère ___ les cheveux longs.»", o: ["avait", "a eu", "avais"], a: 0, why: "Descripción: <b>avait</b>." },
    { fase: "dominio", c: ["imp-uso"], k: "order", ask: "Ordena: «Llovía cuando salí».", tokens: ["Il pleuvait", "quand", "je suis sorti."], why: "<b>Il pleuvait quand je suis sorti.</b>" },
    { fase: "dominio", c: ["imp-forma", "imp-uso"], k: "listen", say: "Nous étions très contents de notre voyage.", acc: ["Nous étions très contents de notre voyage."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous étions très contents de notre voyage.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cali", "Paris"], previo: ["petite", "petit", "toujours", "foot", "frère", "jour", "télé", "père", "chat", "grands-parents", "enfants", "maison", "hier", "contents", "notre", "voyage", "jeune", "mère", "téléphone", "sonné", "vélo", "rencontré", "acteur", "acheté", "joué", "allons", "jouait", "avais", "arrive", "arrivait", "sorti"] }
};

E["a2-futur"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Futur proche et futur simple",
  objetivo: {
    que: "Vas a hablar del futuro: futur proche para planes cercanos y futur simple para proyectos y predicciones.",
    corto: "Je vais partir / je partirai.",
    podras: ["Formar aller + infinitivo sin à.", "Formar el futur simple: infinitivo + -ai, -as, -a…", "Usar los irregulares: serai, aurai, irai, ferai, pourrai, viendrai."],
    iconos: ["ic2/reloj-arena", "m2d/correr", "ic2/mundo"],
    previos: ["aller (A1, lección 5)."],
    capacidad: "Ahora puedes contar tus planes y tus proyectos."
  },
  requiere: R(), recupera: ["ir-aller-faire"],
  conceptos: {
    "fu-proche": { n: "aller + infinitivo (sin à)", b: "gr" },
    "fu-simple": { n: "infinitivo + -ai, -as, -a, -ons, -ez, -ont", b: "gr" },
    "fu-irreg": { n: "serai, aurai, irai, ferai, pourrai, viendrai", b: "gr" }
  },
  video: {
    titulo: "El futuro", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Je vais partir.", seg: [
        { es: "Hola. Dos futuros: voy a irme, y me iré." } ] },
      { v: "dos",
        a: { tag: "plan cercano", fr: "Je vais étudier ce soir.", es: "voy a estudiar" },
        b: { tag: "proyecto", fr: "L'année prochaine, j'habiterai à Lyon.", es: "viviré" },
        seg: [ { es: "Un plan cercano:", p: 1 }, { fr: "Je vais étudier ce soir.", p: 1 }, { es: "Un proyecto o predicción:", p: 2 }, { fr: "J'habiterai à Lyon.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a estudiar.»", o: ["Je vais étudier.", "Je vais à étudier."], a: 0,
        bien: "¡Sí! Sin à.", mal: "Entre aller y el infinitivo no va à.",
        seg: [ { es: "Pausa. Voy a estudiar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je serai", "j'aurai", "j'irai", "je ferai", "je pourrai", "je viendrai"], seg: [
        { es: "Seis irregulares que se usan mucho.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planes", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hablan del futuro.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce soir, nous allons regarder un film chez Paul. Tu viendras ?", "Esta noche vamos a ver una película en casa de Paul. ¿Vienes?"],
      ["camila", "Non, je vais étudier. Demain, j'ai un examen.", "No, voy a estudiar. Mañana tengo un examen."],
      ["hugo", "Et l'année prochaine ?", "¿Y el año que viene?"],
      ["camila", "J'irai en France pour étudier. Quand je serai à Lyon, je ferai beaucoup de choses !", "Iré a Francia a estudiar. ¡Cuando esté en Lyon, haré muchas cosas!"]
    ],
    fijate: "Fíjate: nous allons regarder, je vais étudier / j'irai, je serai, je ferai."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos futuros",
      idea: "Futur proche: aller + infinitivo (sin à). Futur simple: infinitivo + -ai, -as, -a, -ons, -ez, -ont. Irregulares: serai, aurai, irai, ferai, pourrai, viendrai. Tras quand, futuro.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Futuro"], [
        ["Je vais étudier ce soir.", "Voy a estudiar esta noche.", "proche"],
        ["Nous allons regarder un film.", "Vamos a ver una película.", "proche"],
        ["Je ne vais pas travailler dimanche.", "No voy a trabajar el domingo.", "proche neg."],
        ["je parlerai", "hablaré", "simple"],
        ["L'année prochaine, j'habiterai à Lyon.", "El año que viene viviré en Lyon.", "simple"],
        ["nous partirons", "partiremos", "simple"],
        ["être → je serai", "seré", "irregular"],
        ["avoir → j'aurai", "tendré", "irregular"],
        ["aller → j'irai", "iré", "irregular"],
        ["faire → je ferai / il fera", "haré / hará", "irregular"],
        ["pouvoir → je pourrai", "podré", "irregular"],
        ["venir → je viendrai", "vendré", "irregular"],
        ["Quand je serai en vacances, je dormirai beaucoup.", "Cuando esté de vacaciones, dormiré mucho.", "quand + futuro"]
      ]],
      ej: [["Il fera chaud demain.", "Hará calor mañana."], ["Tu viendras à la fête ?", "¿Vendrás a la fiesta?"], ["Vous pourrez m'aider ?", "¿Podrán ayudarme?"], ["Nous ferons nos devoirs.", "Haremos nuestras tareas."], ["tu auras", "tendrás"], ["il pourra", "podrá"], ["on ira", "iremos"], ["on va sortir", "vamos a salir"], ["vous allez voir", "van a ver"], ["elles vont manger", "van a comer"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais à étudier.", "Je vais étudier.", "Sin à."], ["Demain, il fairera beau.", "Demain, il fera beau.", "faire → fer-."], ["Quand je suis en vacances, je dormirai.", "Quand je serai en vacances, je dormirai.", "quand + futuro."], ["tu venirás", "tu viendras", "venir → viendr-."]] }
  ],
  ejemplos: [
    { sit: "«Esta noche vamos a ver una película.»", resp: "Ce soir, nous allons regarder un film.", pasos: ["aller + infinitivo."], porque: "Plan cercano." },
    { sit: "«El año que viene iré a Francia.»", resp: "L'année prochaine, j'irai en France.", pasos: ["aller → ir-."], porque: "Proyecto." },
    { sit: "«Haremos las tareas después de la cena.»", resp: "Nous ferons nos devoirs après le dîner.", pasos: ["faire → fer- + ons."], porque: "Irregular." }
  ],
  comprueba: [
    { q: "Entre aller y el infinitivo va…", o: ["nada", "à"], a: 0, b: "gr", porque: "Je vais étudier." },
    { q: "El futur simple de être es…", o: ["je serai", "je êtrai"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Después de quand, en francés va…", o: ["futuro", "presente"], a: 0, b: "gr", porque: "Quand je serai…" }
  ],
  practica: [
    { fase: "guiada", c: ["fu-proche"], k: "choice", ask: "«Esta noche vamos a ver una película.»", q: "«Ce soir, nous ___ un film chez Paul.»", o: ["allons regarder", "allons à regarder", "regarderons à"], a: 0, pista: "aller + infinitivo.", why: "<b>allons regarder</b>." },
    { fase: "guiada", c: ["fu-irreg"], k: "match", ask: "Une cada infinitivo con su futuro.", q: "Infinitivo → futuro", pairs: [["être", "je serai"], ["avoir", "j'aurai"], ["faire", "je ferai"], ["pouvoir", "je pourrai"], ["venir", "je viendrai"], ["aller", "j'irai"]], pista: "De memoria.", why: "Irregulares." },
    { fase: "guiada", c: ["fu-proche", "fu-simple"], k: "sort", ask: "¿Futur proche o futur simple?", q: "Clasifica.", cats: ["Futur proche", "Futur simple"], items: [["je vais partir", 0], ["elles vont manger", 0], ["vous allez voir", 0], ["on va sortir", 0], ["nous partirons", 1], ["tu auras", 1], ["il pourra", 1], ["on ira", 1]], pista: "aller + infinitivo = proche.", why: "Dos futuros." },
    { fase: "indep", c: ["fu-irreg"], k: "fill", ask: "Escribe aller en futur simple (je).", q: "L'année prochaine, j'___ en France pour étudier.", acc: ["irai"], why: "<b>irai</b>." },
    { fase: "indep", c: ["fu-irreg"], k: "spot", ask: "Encuentra el error.", s: "Demain , il [fairera] beau à Bogotá .", fix: "fera", why: "<b>fera</b>." },
    { fase: "indep", c: ["fu-irreg"], k: "fill", ask: "Escribe venir en futur simple (tu).", q: "Tu ___ à la fête samedi ?", acc: ["viendras"], why: "<b>viendras</b>." },
    { fase: "aplica", c: ["fu-simple"], k: "choice", ask: "«Cuando esté de vacaciones, dormiré mucho.»", q: "«Quand je ___ en vacances, je dormirai beaucoup.»", o: ["serai", "suis", "vais être à"], a: 0, why: "quand + <b>futuro</b>." },
    { fase: "aplica", c: ["fu-irreg"], k: "fill", ask: "Escribe faire en futur simple (nous).", q: "Nous ___ nos devoirs après le dîner.", acc: ["ferons"], why: "<b>ferons</b>." },
    { fase: "dominio", c: ["fu-irreg"], k: "choice", ask: "«¿Podrán ayudarme mañana?»", q: "«Vous ___ m'aider demain ?»", o: ["pourrez", "pouvrez", "pourrons"], a: 0, why: "<b>pourrez</b>." },
    { fase: "dominio", c: ["fu-proche"], k: "order", ask: "Ordena: «No voy a trabajar el domingo».", tokens: ["Je ne vais pas", "travailler", "dimanche."], why: "<b>Je ne vais pas travailler dimanche.</b>" },
    { fase: "dominio", c: ["fu-proche", "fu-simple", "fu-irreg"], k: "listen", say: "L'année prochaine, j'irai en France pour étudier.", acc: ["L'année prochaine, j'irai en France pour étudier.", "L'année prochaine j'irai en France pour étudier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'année prochaine, j'irai en France pour étudier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon", "France", "Bogotá"], previo: ["film", "examen", "année", "prochaine", "choses", "étudier", "travailler", "dormirai", "dormir", "vacances", "fête", "devoirs", "dîner", "chaud", "m'aider", "regarderons", "pouvrez", "pourrons"] }
};

E["a2-pronominaux"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les verbes pronominaux et la routine",
  objetivo: {
    que: "Vas a usar los verbos pronominales en presente, en negativo, en futur proche y en passé composé.",
    corto: "Je me suis levée.",
    podras: ["Poner el pronombre correcto: me, te, se, nous, vous.", "Negar: je ne me lève pas.", "Formar el passé composé con être: elle s'est levée."],
    iconos: ["ic2/reloj-arena", "m2d/correr", "ic2/bombilla"],
    previos: ["La rutina (A1, lección 21) y el passé composé con être (lección 2)."],
    capacidad: "Ahora puedes contar tu rutina de ayer, hoy y mañana."
  },
  requiere: R("pce-verbes", "pce-accord", "fu-proche"), recupera: ["ro-pron", "ro-verbos"],
  conceptos: {
    "pn-pres": { n: "me, te, se, nous, vous en presente y negación", b: "gr" },
    "pn-pc": { n: "passé composé con être + concordancia", b: "gr" }
  },
  video: {
    titulo: "Los pronominales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "Je me lève.", seg: [
        { es: "Hola. Levantarse, ducharse: el pronombre cambia con la persona." } ] },
      { v: "frase", filas: [
          { nota: "presente", p: 1, partes: [["Je me lève.", "-", 1]] },
          { nota: "negación", p: 2, partes: [["Je ne me lève pas.", "-", 2]] },
          { nota: "passé composé", p: 3, partes: [["Je me suis levée.", "-", 3]] } ], seg: [
        { es: "Me levanto,", p: 1 }, { es: "no me levanto,", p: 2 }, { es: "me levanté.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me levanté tarde.»", o: ["Je me suis levé tard.", "Je m'ai levé tard."], a: 0,
        bien: "¡Sí! Pronominal: être.", mal: "Los pronominales van con être.",
        seg: [ { es: "Pausa. Me levanté." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["se réveiller", "se lever", "s'habiller", "se coucher", "se promener", "se brosser les dents"], seg: [
        { es: "Ne va antes del pronombre: je ne me lève pas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La rutina", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comparan sus mañanas.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu te réveilles à quelle heure ?", "¿A qué hora te despiertas?"],
      ["camila", "Je me réveille à six heures et demie. Mais le dimanche, je ne me lève pas tôt !", "Me despierto a las seis y media. ¡Pero el domingo no me levanto temprano!"],
      ["hugo", "Hier, je me suis couché très tard.", "Ayer me acosté muy tarde."],
      ["camila", "Ce soir, tu vas te coucher tôt ! Hier, nous nous sommes promenés dans le parc.", "¡Esta noche te vas a acostar temprano! Ayer paseamos por el parque."]
    ],
    fijate: "Fíjate: je ne me lève pas, je me suis couché, tu vas te coucher."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los pronominales",
      idea: "je me, tu te, il se, nous nous, vous vous, ils se. Negación: je ne me lève pas. Futur proche: je vais me coucher. Passé composé: être + concordancia: elle s'est levée.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["Je me réveille à six heures.", "Me despierto a las seis.", "presente"],
        ["Tu te couches à quelle heure ?", "¿A qué hora te acuestas?", "presente"],
        ["Elle se douche le soir.", "Se ducha por la noche.", "presente"],
        ["Nous nous habillons avant le petit-déjeuner.", "Nos vestimos antes del desayuno.", "presente"],
        ["Je ne me lève pas tôt le dimanche.", "No me levanto temprano el domingo.", "negación"],
        ["Ce soir, je vais me coucher tôt.", "Esta noche me voy a acostar temprano.", "futur proche"],
        ["Elle s'est habillée vite.", "Se vistió rápido.", "passé composé"],
        ["Nous nous sommes promenés dans le parc.", "Paseamos por el parque.", "passé composé"],
        ["Mes sœurs se sont levées à sept heures.", "Mis hermanas se levantaron a las siete.", "passé composé"],
        ["Je ne me suis pas levé avant midi.", "No me levanté antes del mediodía.", "pc negativo"]
      ]],
      ej: [["se lever", "levantarse"], ["se réveiller", "despertarse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"], ["se promener", "pasear"], ["se brosser les dents", "cepillarse los dientes"], ["se reposer", "descansar"], ["Ils se réveillent tard.", "Se despiertan tarde."], ["Je me brosse les dents.", "Me cepillo los dientes."], ["Tu te reposes le dimanche ?", "¿Descansas el domingo?"], ["Nous nous promenons au parc.", "Paseamos por el parque."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mes sœurs se sont levés.","Mes sœurs se sont levées.","Solo mujeres: + es."], ["Je m'ai levé tard.", "Je me suis levé(e) tard.", "Pronominal: être."], ["Camille s'est couché.", "Camille s'est couchée.", "Concuerda: + e."], ["Je me ne lève pas.", "Je ne me lève pas.", "ne antes del pronombre."], ["Ce soir, je vais se coucher.", "Ce soir, je vais me coucher.", "El pronombre cambia: me."]] }
  ],
  ejemplos: [
    { sit: "«Me despierto a las seis y media.»", resp: "Je me réveille à six heures et demie.", pasos: ["je me."], porque: "Presente." },
    { sit: "«Ayer paseamos por el parque.»", resp: "Hier, nous nous sommes promenés dans le parc.", pasos: ["nous nous sommes + promenés."], porque: "Passé composé." },
    { sit: "«No me levanto temprano el domingo.»", resp: "Je ne me lève pas tôt le dimanche.", pasos: ["ne + me + lève + pas."], porque: "Negación." }
  ],
  comprueba: [
    { q: "En passé composé, los pronominales van con…", o: ["être", "avoir"], a: 0, b: "gr", porque: "Siempre." },
    { q: "En negación, ne va…", o: ["antes del pronombre", "después del pronombre"], a: 0, b: "gr", porque: "je ne me lève pas." },
    { q: "Con nous, el pronombre es…", o: ["nous", "se"], a: 0, b: "gr", porque: "nous nous." }
  ],
  practica: [
    { fase: "guiada", c: ["pn-pres"], k: "choice", ask: "«Me despierto a las seis y media.»", q: "«Le matin, je ___ à six heures et demie.»", o: ["me réveille", "se réveille", "réveille"], a: 0, pista: "je → me.", why: "<b>me réveille</b>." },
    { fase: "guiada", c: ["pn-pres"], k: "sort", ask: "¿Qué pronombre falta?", q: "Clasifica.", cats: ["me", "te", "se", "nous"], items: [["Je ___ lève tôt.", 0], ["Je ___ brosse les dents.", 0], ["Tu ___ couches à quelle heure ?", 1], ["Tu ___ reposes le dimanche ?", 1], ["Elle ___ douche le soir.", 2], ["Ils ___ réveillent tard.", 2], ["Nous ___ promenons au parc.", 3], ["Nous ___ couchons à minuit.", 3]], pista: "Mira el sujeto.", why: "Pronombres." },
    { fase: "guiada", c: ["pn-pres"], k: "match", ask: "Une cada verbo.", q: "Francés → español", pairs: [["se lever", "levantarse"], ["se réveiller", "despertarse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"], ["se promener", "pasear"]], pista: "se coucher = acostarse.", why: "Verbos." },
    { fase: "indep", c: ["pn-pres"], k: "fill", ask: "Escribe s'habiller (nous).", q: "Nous ___ toujours avant le petit-déjeuner.", acc: ["nous habillons"], why: "<b>nous habillons</b>." },
    { fase: "indep", c: ["pn-pc"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , Camille s' est [couché] très tard .", fix: "couchée", why: "<b>couchée</b>." },
    { fase: "indep", c: ["pn-pres"], k: "fill", ask: "Escribe se coucher en futur proche (je).", q: "Ce soir, je vais ___ tôt parce que je suis fatigué.", acc: ["me coucher"], why: "<b>me coucher</b>." },
    { fase: "aplica", c: ["pn-pc"], k: "choice", ask: "«Ayer paseamos por el parque.»", q: "«Hier, nous ___ dans le parc.»", o: ["nous sommes promenés", "nous avons promenés", "sommes promenés"], a: 0, why: "<b>nous sommes promenés</b>." },
    { fase: "aplica", c: ["pn-pc"], k: "fill", ask: "Escribe se lever en passé composé negativo (je, hombre).", q: "Samedi, je ___ avant midi.", acc: ["ne me suis pas levé"], why: "<b>ne me suis pas levé</b>." },
    { fase: "dominio", c: ["pn-pc"], k: "choice", ask: "«Mis dos hermanas se levantaron a las siete.»", q: "«Ce matin, mes deux sœurs ___ à 7 heures.»", o: ["se sont levées", "se sont levés", "ont levées"], a: 0, why: "<b>se sont levées</b>." },
    { fase: "dominio", c: ["pn-pres"], k: "order", ask: "Ordena: «No me levanto temprano el domingo».", tokens: ["Je ne", "me lève", "pas tôt", "le dimanche."], why: "<b>Je ne me lève pas tôt le dimanche.</b>" },
    { fase: "dominio", c: ["pn-pres", "pn-pc"], k: "listen", say: "Hier, nous nous sommes promenés dans le parc.", acc: ["Hier, nous nous sommes promenés dans le parc.", "Hier nous nous sommes promenés dans le parc."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, nous nous sommes promenés dans le parc.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Camille"], previo: ["quelle", "heure", "demie", "mais", "tôt", "tard", "hier", "très", "ce", "soir", "parc", "petit-déjeuner", "toujours", "vite", "sœurs", "midi", "dents", "minuit", "fatigué", "parce", "matin", "samedi", "deux", "avons", "ont", "réveille", "lève"] }
};

E["a2-partitifs"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Articles partitifs et quantités",
  objetivo: {
    que: "Vas a repasar y combinar los partitivos, la negación pas de, las cantidades y los gustos.",
    corto: "du, pas de, un kilo de, j'adore le.",
    podras: ["Elegir du / de la / de l' / des.", "Usar pas de y cantidad + de.", "No confundir el partitivo con el artículo de los gustos."],
    iconos: ["ic2/cofre", "ic2/moneda", "ic2/bombilla"],
    previos: ["Los partitivos, pas de y las cantidades (A1, lecciones 38, 44 y 45)."],
    capacidad: "Ahora no fallas con los artículos de la comida."
  },
  requiere: R(), recupera: ["pa2-forma", "pd-de", "cq-de"],
  conceptos: {
    "pt3-choix": { n: "partitivo / pas de / cantidad + de", b: "gr" },
    "pt3-gout": { n: "gustos: le / la / les", b: "gr" }
  },
  video: {
    titulo: "Los partitivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "du pain · pas de pain", seg: [
        { es: "Hola. Cuatro casos, cuatro artículos." } ] },
      { v: "frase", filas: [
          { nota: "cantidad no precisa", p: 1, partes: [["Je voudrais du pain.", "-", 1]] },
          { nota: "negación", p: 2, partes: [["Il n'y a pas de lait.", "-", 2]] },
          { nota: "gusto", p: 3, partes: [["J'adore le chocolat.", "-", 3]] } ], seg: [
        { es: "Quiero pan,", p: 1 }, { es: "no hay leche,", p: 2 }, { es: "me encanta el chocolate.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No como pan.»", o: ["Je ne mange pas de pain.", "Je ne mange pas du pain."], a: 0,
        bien: "¡Sí! Tras pas: de.", mal: "Después de pas, el partitivo se vuelve de.",
        seg: [ { es: "Pausa. No como pan." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["du", "de la", "de l'", "des", "pas de", "un kilo de", "j'adore le"], seg: [
        { es: "Con cantidad precisa, solo de.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El desayuno", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan una receta.",
    pj: PJ,
    lineas: [
      ["hugo", "Au petit-déjeuner, je bois du café. Tu veux de l'eau ?", "En el desayuno tomo café. ¿Quieres agua?"],
      ["camila", "Oui, merci. Oh, il n'y a pas de lait dans le frigo !", "Sí, gracias. ¡Oh, no hay leche en la nevera!"],
      ["hugo", "Pour la recette, il faut beaucoup de sucre et un kilo de tomates.", "Para la receta hacen falta mucho azúcar y un kilo de tomates."],
      ["camila", "Moi, je ne mange pas de viande. Mais j'adore le chocolat !", "Yo no como carne. ¡Pero me encanta el chocolate!"]
    ],
    fijate: "Fíjate: du café, de l'eau, pas de lait, beaucoup de sucre, j'adore le chocolat."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Elegir el artículo",
      idea: "Cantidad no precisa: du, de la, de l', des. Negación: pas de. Cantidad precisa: beaucoup de, un kilo de. Gustos: le, la, les.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Caso"], [
        ["Je voudrais du pain et de l'eau.", "Quisiera pan y agua.", "partitivo"],
        ["Au petit-déjeuner, je bois du café.", "En el desayuno tomo café.", "partitivo"],
        ["de la confiture / des pommes", "mermelada / manzanas", "partitivo"],
        ["Il n'y a pas de lait.", "No hay leche.", "pas de"],
        ["Elle n'a pas de frères.", "No tiene hermanos.", "pas de"],
        ["Un kilo de tomates, s'il vous plaît.", "Un kilo de tomates, por favor.", "cantidad"],
        ["Il y a beaucoup de sucre.", "Hay mucho azúcar.", "cantidad"],
        ["une tranche de jambon / un morceau de fromage", "una tajada de jamón / un pedazo de queso", "cantidad"],
        ["J'adore le chocolat !", "¡Me encanta el chocolate!", "gusto"]
      ]],
      ej: [["beaucoup de", "mucho / mucha"], ["un peu de", "un poco de"], ["trop de", "demasiado"], ["assez de", "suficiente"], ["une tranche de", "una tajada de"], ["un morceau de", "un pedazo de"], ["de l'eau minérale", "agua mineral"], ["la recette", "la receta"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je ne mange pas du pain.", "Je ne mange pas de pain.", "Tras pas: de."], ["beaucoup du sucre", "beaucoup de sucre", "Cantidad: de."], ["J'adore du chocolat.", "J'adore le chocolat.", "Gusto: le."]] }
  ],
  ejemplos: [
    { sit: "«Tomo café.»", resp: "Je bois du café.", pasos: ["café: masc. → du."], porque: "Partitivo." },
    { sit: "«No como carne.»", resp: "Je ne mange pas de viande.", pasos: ["pas de."], porque: "Negación." },
    { sit: "«Hay mucho azúcar en la receta.»", resp: "Il y a beaucoup de sucre dans la recette.", pasos: ["beaucoup de."], porque: "Cantidad." }
  ],
  comprueba: [
    { q: "Después de pas va…", o: ["de", "du"], a: 0, b: "gr", porque: "pas de." },
    { q: "Después de un kilo va…", o: ["de", "des"], a: 0, b: "gr", porque: "Cantidad." },
    { q: "Con adorer va…", o: ["le / la / les", "du / de la"], a: 0, b: "gr", porque: "Gusto." }
  ],
  practica: [
    { fase: "guiada", c: ["pt3-choix"], k: "choice", ask: "«En el desayuno tomo café.»", q: "«Au petit-déjeuner, je bois ___ café.»", o: ["du", "de", "le"], a: 0, pista: "Masculino.", why: "<b>du</b>." },
    { fase: "guiada", c: ["pt3-choix"], k: "sort", ask: "¿du, de la, de l' o des?", q: "Clasifica.", cats: ["du", "de la", "de l'", "des"], items: [["pain", 0], ["fromage", 0], ["confiture", 1], ["viande", 1], ["huile", 2], ["eau minérale", 2], ["pommes", 3], ["œufs", 3]], pista: "Género, vocal o plural.", why: "Partitivos." },
    { fase: "guiada", c: ["pt3-choix"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["beaucoup de", "mucho / mucha"], ["un peu de", "un poco de"], ["trop de", "demasiado"], ["assez de", "suficiente"], ["un morceau de", "un pedazo de"]], pista: "assez = suficiente.", why: "Cantidades." },
    { fase: "indep", c: ["pt3-choix"], k: "fill", ask: "Escribe el partitivo.", q: "Tu veux ___ eau ?", acc: ["de l'", "de l’"], why: "<b>de l'</b>." },
    { fase: "indep", c: ["pt3-choix"], k: "spot", ask: "Encuentra el error.", s: "Il n'y a pas [du] lait dans le frigo .", fix: "de", why: "<b>pas de</b>." },
    { fase: "indep", c: ["pt3-choix"], k: "fill", ask: "Escribe una sola palabra.", q: "Je voudrais un kilo ___ tomates, s'il vous plaît.", acc: ["de"], why: "<b>de</b>." },
    { fase: "aplica", c: ["pt3-choix"], k: "choice", ask: "«En esta receta hay mucho azúcar.»", q: "«Dans cette recette, il y a beaucoup ___ sucre.»", o: ["de", "du", "le"], a: 0, why: "<b>beaucoup de</b>." },
    { fase: "aplica", c: ["pt3-gout"], k: "choice", ask: "«¡Me encanta el chocolate!»", q: "«J'adore ___ chocolat !»", o: ["le", "du", "de"], a: 0, why: "Gusto: <b>le</b>." },
    { fase: "dominio", c: ["pt3-choix"], k: "fill", ask: "Escribe una sola palabra.", q: "Elle n'a pas ___ frères.", acc: ["de"], why: "<b>de</b>." },
    { fase: "dominio", c: ["pt3-choix", "pt3-gout"], k: "order", ask: "Ordena: «No como carne».", tokens: ["Je ne mange", "pas", "de viande."], why: "<b>Je ne mange pas de viande.</b>" },
    { fase: "dominio", c: ["pt3-choix", "pt3-gout"], k: "listen", say: "Au petit-déjeuner, je bois du café.", acc: ["Au petit-déjeuner, je bois du café.", "Au petit-déjeuner je bois du café."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au petit-déjeuner, je bois du café.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["petit-déjeuner", "bois", "café", "veux", "merci", "oh", "lait", "frigo", "recette", "sucre", "tomates", "viande", "mais", "chocolat", "pain", "eau", "confiture", "pommes", "frères", "jambon", "fromage", "minérale", "huile", "œufs", "cette", "voudrais", "mange"] }
};

E["a2-comparatif"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Comparatif et superlatif",
  objetivo: {
    que: "Vas a comparar con plus, moins, aussi + adjetivo + que, y con plus de / autant de + nombre; y a usar el superlativo.",
    corto: "Plus grand que, le meilleur.",
    podras: ["Comparar adjetivos: plus cher que, aussi grand que.", "Comparar cantidades: plus de livres que.", "Usar meilleur, mieux y le plus…"],
    iconos: ["ic2/trofeo", "m2d/pensativo", "ic2/moneda"],
    previos: ["Los adjetivos (A1, lecciones 10 y 65)."],
    capacidad: "Ahora puedes comparar precios, ciudades y personas."
  },
  requiere: R(), recupera: ["ad-accord", "ra-bonbien"],
  conceptos: {
    "cmp-adj": { n: "plus / moins / aussi + adjetivo + que", b: "gr" },
    "cmp-nom": { n: "plus de / moins de / autant de + nombre", b: "gr" },
    "cmp-sup": { n: "meilleur, mieux; le plus + adjetivo (+ de)", b: "gr" }
  },
  video: {
    titulo: "Comparar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "plus rapide que", seg: [
        { es: "Hola. Más, menos, tan: plus, moins, aussi." } ] },
      { v: "frase", filas: [
          { nota: "más", p: 1, partes: [["Le TGV est plus rapide que le bus.", "-", 1]] },
          { nota: "menos", p: 2, partes: [["Ce vol est moins cher.", "-", 2]] },
          { nota: "tan", p: 3, partes: [["Ma sœur est aussi grande que moi.", "-", 3]] } ], seg: [
        { es: "El tren es más rápido que el bus,", p: 1 }, { es: "este vuelo es menos caro,", p: 2 }, { es: "mi hermana es tan alta como yo.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Esta pizza es mejor.»", o: ["Cette pizza est meilleure.", "Cette pizza est plus bonne."], a: 0,
        bien: "¡Sí! Bon → meilleur.", mal: "No se dice plus bon: meilleur(e).",
        seg: [ { es: "Pausa. Más buena, mejor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["plus… que", "moins… que", "aussi… que", "plus de… que", "meilleur", "mieux", "le plus…"], seg: [
        { es: "Con un verbo, mieux: elle parle mieux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Viajar a Lyon", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo comparan cómo ir a Lyon.",
    pj: PJ,
    lineas: [
      ["hugo", "Le TGV est plus rapide que le bus, mais il est plus cher.", "El TGV es más rápido que el bus, pero es más caro."],
      ["camila", "Et l'avion ? — Ce vol est moins cher, mais l'aéroport est plus loin.", "¿Y el avión? — Este vuelo es menos caro, pero el aeropuerto está más lejos."],
      ["hugo", "À Lyon, il y a le meilleur restaurant de la ville !", "¡En Lyon está el mejor restaurante de la ciudad!"],
      ["camila", "Super ! Tu parles français mieux que moi : tu commandes !", "¡Genial! Hablas francés mejor que yo: ¡pides tú!"]
    ],
    fijate: "Fíjate: plus rapide que, moins cher, le meilleur restaurant, mieux que moi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Comparativo y superlativo",
      idea: "plus / moins / aussi + adjetivo + que. plus de / moins de / autant de + nombre + que. bon → meilleur; bien → mieux. Superlativo: le / la / les plus + adjetivo (+ de).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Le TGV est plus rapide que le bus.", "El TGV es más rápido que el bus.", "plus… que"],
        ["Ce vol est moins cher.", "Este vuelo es menos caro.", "moins"],
        ["Ma sœur est aussi grande que moi.", "Mi hermana es tan alta como yo.", "aussi… que"],
        ["J'ai plus de livres que toi.", "Tengo más libros que tú.", "plus de + nombre"],
        ["Il a autant d'amis que moi.", "Tiene tantos amigos como yo.", "autant de"],
        ["Cette pizza est meilleure que l'autre.", "Esta pizza es mejor que la otra.", "bon → meilleur"],
        ["Ana parle anglais mieux que moi.", "Ana habla inglés mejor que yo.", "bien → mieux"],
        ["C'est le meilleur restaurant de la ville.", "Es el mejor restaurante de la ciudad.", "superlativo"],
        ["C'est la plus belle plage de Colombie.", "Es la playa más bonita de Colombia.", "le plus + adj."],
        ["le moins loin", "el menos lejos", "superlativo"]
      ]],
      ej: [["plus cher que", "más caro que"], ["le plus cher", "el más caro"], ["la meilleure", "la mejor"], ["les plus jolies", "las más bonitas"], ["aussi beau que", "tan bonito como"], ["moins loin que", "menos lejos que"], ["le meilleur joueur du monde", "el mejor jugador del mundo"], ["Nous mesurons tous les deux 1,75 m.", "Los dos medimos 1,75 m."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["plus bon", "meilleur", "bon → meilleur."], ["plus bien", "mieux", "bien → mieux."], ["Marie est aussi sympa comme sa sœur.", "Marie est aussi sympa que sa sœur.", "aussi… que."], ["J'ai plus des livres.", "J'ai plus de livres.", "plus de."]] }
  ],
  ejemplos: [
    { sit: "«El TGV es más rápido que el bus.»", resp: "Le TGV est plus rapide que le bus.", pasos: ["plus + adjetivo + que."], porque: "Comparativo." },
    { sit: "«Tengo más libros que tú.»", resp: "J'ai plus de livres que toi.", pasos: ["plus de + nombre."], porque: "Cantidad." },
    { sit: "«Es la playa más bonita de Colombia.»", resp: "C'est la plus belle plage de Colombie.", pasos: ["la plus + adjetivo + de."], porque: "Superlativo." }
  ],
  comprueba: [
    { q: "Más bueno se dice…", o: ["meilleur", "plus bon"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Con un verbo (habla mejor) se usa…", o: ["mieux", "meilleur"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "Tan alta como se dice…", o: ["aussi grande que", "aussi grande comme"], a: 0, b: "gr", porque: "aussi… que." }
  ],
  practica: [
    { fase: "guiada", c: ["cmp-adj"], k: "choice", ask: "«El TGV es más rápido que el bus.»", q: "«Le TGV est ___ rapide que le bus.»", o: ["plus", "aussi", "moins"], a: 0, pista: "Más.", why: "<b>plus</b>." },
    { fase: "guiada", c: ["cmp-sup"], k: "choice", ask: "«Esta pizza es mejor que la otra.»", q: "«Cette pizza est ___ que l'autre.»", o: ["meilleure", "plus bonne", "mieux"], a: 0, pista: "bon → ?", why: "<b>meilleure</b>." },
    { fase: "guiada", c: ["cmp-adj", "cmp-sup"], k: "match", ask: "Une cada forma.", q: "Francés → español", pairs: [["plus… que", "más… que"], ["moins… que", "menos… que"], ["aussi… que", "tan… como"], ["mieux", "mejor (con verbo)"], ["le plus…", "el más…"]], pista: "aussi = tan.", why: "Formas." },
    { fase: "indep", c: ["cmp-adj"], k: "fill", ask: "Escribe una palabra (los dos miden 1,75 m).", q: "Mon frère est ___ grand que moi.", acc: ["aussi"], why: "<b>aussi</b>." },
    { fase: "indep", c: ["cmp-sup"], k: "choice", ask: "«Ana habla inglés mejor que yo.»", q: "«Ana parle anglais ___ que moi.»", o: ["mieux", "meilleur", "plus bien"], a: 0, why: "Con verbo: <b>mieux</b>." },
    { fase: "indep", c: ["cmp-adj"], k: "spot", ask: "Encuentra el error.", s: "Marie est aussi sympa [comme] sa sœur .", fix: "que", why: "<b>que</b>." },
    { fase: "aplica", c: ["cmp-nom"], k: "fill", ask: "Tienes 50 libros y tu amigo 20. Escribe dos palabras.", q: "J'ai ___ livres que toi.", acc: ["plus de"], why: "<b>plus de</b>." },
    { fase: "aplica", c: ["cmp-adj", "cmp-sup"], k: "sort", ask: "¿Comparativo o superlativo?", q: "Clasifica.", cats: ["Comparativo", "Superlativo"], items: [["plus cher que", 0], ["meilleur que", 0], ["moins loin que", 0], ["aussi beau que", 0], ["le plus cher", 1], ["la meilleure", 1], ["le moins loin", 1], ["les plus jolies", 1]], why: "Dos grados." },
    { fase: "dominio", c: ["cmp-sup"], k: "fill", ask: "Escribe el superlativo de bon (dos palabras).", q: "Pour moi, c'est ___ joueur du monde.", acc: ["le meilleur"], why: "<b>le meilleur</b>." },
    { fase: "dominio", c: ["cmp-sup"], k: "order", ask: "Ordena: «Es la playa más bonita de Colombia».", tokens: ["C'est", "la plus belle", "plage", "de Colombie."], why: "<b>C'est la plus belle plage de Colombie.</b>" },
    { fase: "dominio", c: ["cmp-adj", "cmp-nom", "cmp-sup"], k: "listen", say: "Le TGV est plus rapide que le bus.", acc: ["Le TGV est plus rapide que le bus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le TGV est plus rapide que le bus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Ana", "Marie", "Colombie", "TGV"], previo: ["rapide", "bus", "mais", "cher", "avion", "vol", "aéroport", "loin", "restaurant", "ville", "super", "parles", "français", "commandes", "sœur", "grande", "livres", "amis", "pizza", "l'autre", "autre", "anglais", "belle", "plage", "joueur", "monde", "sympa", "frère", "mesurons", "deux", "jolies", "beau", "toi", "moi"] }
};

/* ================================ A2·3 y A2·4 · Pronombres ================================ */

E["a2-pronoms"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les pronoms COD, COI, y et en",
  objetivo: {
    que: "Vas a conocer los cuatro grupos de pronombres complemento y cuándo se usa cada uno.",
    corto: "le, lui, y, en: el mapa.",
    podras: ["Ver qué viene tras el verbo: nada, à o de.", "Elegir le / la / les, lui / leur, y o en.", "Poner el pronombre delante del verbo."],
    iconos: ["ic2/bombilla", "m2d/pensativo", "ic2/engranaje"],
    previos: ["Los pronombres tónicos (A1, lección 59)."],
    capacidad: "Ahora tienes el mapa de los pronombres; las próximas lecciones van uno por uno."
  },
  requiere: R("pca-forma"), recupera: ["pt-forma"],
  conceptos: {
    "pr-mapa": { n: "sin preposición / à + persona / lugar / de o cantidad", b: "gr" },
    "pr-place": { n: "el pronombre va delante del verbo", b: "gr" }
  },
  video: {
    titulo: "El mapa de los pronombres", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "le · lui · y · en", seg: [
        { es: "Hola. Para elegir el pronombre, mira lo que viene después del verbo." } ] },
      { v: "frase", filas: [
          { nota: "sin preposición", p: 1, partes: [["Julie ? Je la connais.", "-", 1]] },
          { nota: "à + persona", p: 2, partes: [["Je lui téléphone.", "-", 2]] },
          { nota: "lugar", p: 3, partes: [["J'y vais.", "-", 3]] },
          { nota: "de o cantidad", p: 4, partes: [["J'en ai deux.", "-", 4]] } ], seg: [
        { es: "Sin preposición, le, la, les.", p: 1 }, { es: "A una persona, lui, leur.", p: 2 }, { es: "Un lugar, y.", p: 3 }, { es: "De o una cantidad, en.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Lo llamo esta noche.» (téléphoner à)", o: ["Je lui téléphone ce soir.", "Je le téléphone ce soir."], a: 0,
        bien: "¡Sí! Téléphoner à → lui.", mal: "Téléphoner lleva à: lui.",
        seg: [ { es: "Pausa. Téléphoner lleva à." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le / la / les", "lui / leur", "y", "en"], seg: [
        { es: "Y siempre delante del verbo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preguntas rápidas", img: "bg-cafe", yo: "camila",
    escena: "Hugo le hace preguntas rápidas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu connais Julie ?", "¿Conoces a Julie?"],
      ["camila", "Oui, je la connais bien. Je lui téléphone ce soir.", "Sí, la conozco bien. La llamo esta noche."],
      ["hugo", "Tu vas au supermarché ? — Oui, j'y vais maintenant.", "¿Vas al supermercado? — Sí, voy ahora."],
      ["camila", "Tu as des frères ? — Oui, j'en ai deux.", "¿Tienes hermanos? — Sí, tengo dos."]
    ],
    fijate: "Fíjate: je la connais, je lui téléphone, j'y vais, j'en ai deux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro grupos",
      idea: "Sin preposición → le, la, les (COD). à + persona → lui, leur (COI). Lugar o à + cosa → y. du, de la, des, cantidad o de + cosa → en. El pronombre va delante del verbo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["Julie ? Je la connais bien.", "¿Julie? La conozco bien.", "COD"],
        ["Tu aimes ce livre ? — Oui, je l'aime beaucoup.", "¿Te gusta este libro? — Sí, me gusta mucho.", "COD"],
        ["Tu invites Sophie et Léa ? — Oui, je les invite.", "¿Invitas a Sophie y Léa? — Sí, las invito.", "COD"],
        ["Je lui téléphone ce soir.", "Lo llamo esta noche.", "COI"],
        ["Je leur parle souvent.", "Les hablo a menudo.", "COI"],
        ["Tu vas à la plage ? — Oui, j'y vais demain.", "¿Vas a la playa? — Sí, voy mañana.", "y"],
        ["Des frères ? J'en ai deux.", "¿Hermanos? Tengo dos.", "en"],
        ["Tu bois du thé ? — Non, je n'en bois pas.", "¿Tomas té? — No, no tomo.", "en"],
        ["Les devoirs ? Je vais les faire ce soir.", "¿Las tareas? Las voy a hacer esta noche.", "delante del infinitivo"],
        ["Tu as vu le film ? — Oui, je l'ai vu.", "¿Viste la película? — Sí, la vi.", "delante del auxiliar"]
      ]],
      ej: [["Je lui écris chaque semaine.", "Le escribo cada semana."], ["la voiture", "el carro"], ["les clés", "las llaves"], ["à mes amis", "a mis amigos"], ["à mon frère", "a mi hermano"], ["du pain", "pan"], ["des pommes", "manzanas"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je le téléphone.", "Je lui téléphone.", "téléphoner à → lui."], ["Je le parle.", "Je lui parle.", "parler à → lui."], ["Je connais la.", "Je la connais.", "Delante del verbo."]] }
  ],
  ejemplos: [
    { sit: "«¿Tus padres? Los llamo esta noche.»", resp: "Je leur téléphone ce soir.", pasos: ["téléphoner à + varias personas → leur."], porque: "COI." },
    { sit: "«¿Vas al supermercado? — Sí, voy.»", resp: "Oui, j'y vais.", pasos: ["Lugar → y."], porque: "Lugar." },
    { sit: "«¿Viste la película? — Sí, la vi.»", resp: "Oui, je l'ai vu.", pasos: ["Delante del auxiliar."], porque: "COD." }
  ],
  comprueba: [
    { q: "Con à + persona se usa…", o: ["lui / leur", "le / la"], a: 0, b: "gr", porque: "COI." },
    { q: "Con una cantidad se usa…", o: ["en", "y"], a: 0, b: "gr", porque: "J'en ai deux." },
    { q: "El pronombre va…", o: ["delante del verbo", "detrás del verbo"], a: 0, b: "gr", porque: "Je la connais." }
  ],
  practica: [
    { fase: "guiada", c: ["pr-mapa"], k: "choice", ask: "— «¿Conoces a Julie?» — «Sí, la conozco bien.»", q: "«Oui, je ___ connais bien.»", o: ["la", "lui", "en"], a: 0, pista: "Sin preposición.", why: "<b>la</b>." },
    { fase: "guiada", c: ["pr-mapa"], k: "choice", ask: "— «¿Llamas a tus padres?» — «Sí, los llamo.»", q: "«Oui, je ___ téléphone.»", o: ["leur", "les", "y"], a: 0, pista: "téléphoner à.", why: "<b>leur</b>." },
    { fase: "guiada", c: ["pr-mapa"], k: "sort", ask: "¿Qué pronombre reemplaza cada complemento?", q: "Clasifica.", cats: ["le / la / les", "lui / leur", "y", "en"], items: [["(je prends) la voiture", 0], ["(je cherche) les clés", 0], ["(je parle) à mon frère", 1], ["(j'écris) à mes amis", 1], ["(je vais) à Paris", 2], ["(je vais) au cinéma", 2], ["(je mange) du pain", 3], ["(j'achète) des pommes", 3]], pista: "Mira la preposición.", why: "El mapa." },
    { fase: "indep", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu vas au supermarché ? — Oui, j'___ vais maintenant.", acc: ["y"], why: "<b>y</b>." },
    { fase: "indep", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as des frères ? — Oui, j'___ ai deux.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["pr-mapa"], k: "spot", ask: "Encuentra el error.", s: "— Tu parles à Marc ? — Oui , je [le] parle tous les jours .", fix: "lui", why: "<b>lui</b>." },
    { fase: "aplica", c: ["pr-mapa"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu aimes ce livre ?", "Oui, je l'aime beaucoup."], ["Tu parles à tes voisins ?", "Oui, je leur parle souvent."], ["Tu vas à la plage ?", "Oui, j'y vais demain."], ["Tu bois du thé ?", "Non, je n'en bois pas."]], why: "Cuatro pronombres." },
    { fase: "aplica", c: ["pr-place"], k: "choice", ask: "— «¿Viste la película?» — «Sí, la vi.»", q: "«Oui, ___ .»", o: ["je l'ai vu", "j'ai le vu", "j'ai vu le"], a: 0, why: "Delante del auxiliar: <b>je l'ai vu</b>." },
    { fase: "dominio", c: ["pr-mapa"], k: "fill", ask: "Escribe un pronombre (escribir a la abuela).", q: "— Tu écris souvent à ta grand-mère ? — Oui, je ___ écris chaque semaine.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "dominio", c: ["pr-place"], k: "order", ask: "Ordena: «Las voy a hacer esta noche».", tokens: ["Je vais", "les", "faire", "ce soir."], why: "<b>Je vais les faire ce soir.</b>" },
    { fase: "dominio", c: ["pr-mapa", "pr-place"], k: "listen", say: "Oui, je la connais bien.", acc: ["Oui, je la connais bien.", "Oui je la connais bien."], num: false, dict: true, ask: "Escucha la respuesta y escríbela.", why: "Era <b>Oui, je la connais bien.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Marc", "Sophie", "Léa", "Paris"], previo: ["connais", "téléphone", "téléphones", "ce", "soir", "supermarché", "maintenant", "frères", "deux", "livre", "aime", "beaucoup", "invite", "invites", "parle", "parles", "souvent", "voisins", "plage", "demain", "bois", "thé", "devoirs", "faire", "film", "vu", "écris", "chaque", "semaine", "grand-mère", "parents", "voiture", "clés", "prends", "cherche", "amis", "frère", "cinéma", "mange", "pain", "achète", "pommes", "tous", "jours"] }
};

E["a2-cod"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom COD : le, la, l', les",
  objetivo: {
    que: "Vas a reemplazar el complemento directo por le, la, l' o les y ponerlo en su sitio.",
    corto: "Je la regarde.",
    podras: ["Reconocer el COD (sin preposición).", "Elegir le / la / l' / les.", "Ponerlo delante del verbo, del infinitivo o del auxiliar (y detrás en el imperativo)."],
    iconos: ["ic2/bombilla", "m2d/senalar", "ic2/engranaje"],
    previos: ["El mapa de los pronombres (lección 8)."],
    capacidad: "Ahora puedes no repetir las cosas y personas."
  },
  requiere: R("pr-mapa", "pr-place", "pca-forma", "im-forma"), recupera: ["pr-mapa"],
  conceptos: {
    "cod-forma": { n: "le, la, l', les: sin preposición", b: "gr" },
    "cod-place": { n: "delante del verbo / infinitivo / auxiliar; Prends-le !", b: "gr" }
  },
  video: {
    titulo: "El COD", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Je la regarde.", seg: [
        { es: "Hola. El COD recibe la acción sin preposición." } ] },
      { v: "frase", filas: [
          { nota: "presente", p: 1, partes: [["Je l'attends.", "-", 1]] },
          { nota: "+ infinitivo", p: 2, partes: [["Je vais les faire.", "-", 2]] },
          { nota: "passé composé", p: 3, partes: [["Je l'ai vue.", "-", 3]] } ], seg: [
        { es: "Lo espero,", p: 1 }, { es: "las voy a hacer,", p: 2 }, { es: "la vi.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La voy a hacer mañana.»", o: ["Je vais la faire demain.", "Je vais faire la demain."], a: 0,
        bien: "¡Sí! Delante del infinitivo.", mal: "El pronombre va delante del infinitivo.",
        seg: [ { es: "Pausa. ¿Dónde va el pronombre?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le", "la", "l'", "les", "Prends-le !"], seg: [
        { es: "Solo en el imperativo afirmativo va detrás.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La serie", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de una serie.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu regardes la série « Lupin » ?", "¿Ves la serie «Lupin»?"],
      ["camila", "Oui, je la regarde tous les soirs ! Tu cherches tes clés ?", "¡Sí, la veo todas las noches! ¿Buscas tus llaves?"],
      ["hugo", "Oui, je les cherche partout ! Et mes devoirs… je vais les faire demain.", "¡Sí, las busco por todas partes! Y mis tareas… las voy a hacer mañana."],
      ["camila", "Tu as vu la nouvelle professeure ? — Oui, je l'ai vue ce matin.", "¿Viste a la nueva profesora? — Sí, la vi esta mañana."]
    ],
    fijate: "Fíjate: je la regarde, je les cherche, je vais les faire, je l'ai vue."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "le, la, l', les",
      idea: "Sin à ni de → COD. Masculino le, femenino la, vocal l', plural les. Delante del verbo, del infinitivo o del auxiliar. Imperativo afirmativo: detrás (Prends-le !). Con el auxiliar avoir, el participio concuerda con el COD: je l'ai vue.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["La série ? Je la regarde.", "¿La serie? La veo.", "la"],
        ["Tu prends le métro ? — Oui, je le prends.", "¿Tomas el metro? — Sí, lo tomo.", "le"],
        ["J'attends le bus → Je l'attends.", "Espero el bus → Lo espero.", "l' + vocal"],
        ["Je les cherche partout.", "Las busco por todas partes.", "les"],
        ["Les devoirs ? Je vais les faire.", "¿Las tareas? Las voy a hacer.", "+ infinitivo"],
        ["Je ne le bois pas.", "No lo tomo.", "negación"],
        ["Je l'ai vue ce matin.", "La vi esta mañana.", "pc: + e"],
        ["Ce livre est génial : lis-le !", "Este libro es genial: ¡léelo!", "imperativo"],
        ["Tu m'entends ? — Oui, je t'entends bien.", "¿Me oyes? — Sí, te oigo bien.", "me / te"],
        ["Vous nous attendez ? — Oui, nous vous attendons.", "¿Nos esperan? — Sí, los esperamos.", "nous / vous"]
      ]],
      ej: [["Je regarde la télé.", "Veo la tele."], ["J'écoute mes parents.", "Escucho a mis padres."], ["J'aide mon frère.", "Ayudo a mi hermano."], ["Je pense à mon examen.", "Pienso en mi examen."], ["Je téléphone à Luc.", "Llamo a Luc."], ["Je parle à Marie.", "Hablo con Marie."], ["Je vais à la plage.", "Voy a la playa."], ["depuis vingt minutes", "desde hace veinte minutos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vois lui.", "Je le vois.", "Delante del verbo."], ["Je vais faire le.", "Je vais le faire.", "Delante del infinitivo."], ["Je lui attends.", "Je l'attends.", "attendre sin à: COD."], ["Je l'ai vu (la professeure).", "Je l'ai vue.", "Concuerda con el COD."]] }
  ],
  ejemplos: [
    { sit: "«¿Invitas a Marie y Paul? — Sí, los invito.»", resp: "Oui, je les invite.", pasos: ["Plural → les."], porque: "COD." },
    { sit: "«¿Tomas este café? — No, no lo tomo.»", resp: "Non, je ne le bois pas.", pasos: ["ne + le + bois + pas."], porque: "Negación." },
    { sit: "«¡Léelo!»", resp: "Lis-le !", pasos: ["Imperativo: detrás, con guion."], porque: "Excepción." }
  ],
  comprueba: [
    { q: "Delante de vocal, le y la se vuelven…", o: ["l'", "lui"], a: 0, b: "gr", porque: "Elisión." },
    { q: "En el imperativo afirmativo el COD va…", o: ["detrás, con guion", "delante"], a: 0, b: "gr", porque: "Prends-le !" },
    { q: "Attendre lleva preposición…", o: ["no: es COD", "sí: es COI"], a: 0, b: "gr", porque: "Je l'attends." }
  ],
  practica: [
    { fase: "guiada", c: ["cod-forma"], k: "choice", ask: "— «¿Ves la serie?» — «Sí, la veo.»", q: "«Oui, je ___ regarde tous les soirs.»", o: ["la", "le", "lui"], a: 0, pista: "Femenino.", why: "<b>la</b>." },
    { fase: "guiada", c: ["cod-forma"], k: "choice", ask: "— «¿Buscas tus llaves?» — «Sí, las busco.»", q: "«Oui, je ___ cherche partout !»", o: ["les", "leur", "la"], a: 0, pista: "Plural.", why: "<b>les</b>." },
    { fase: "guiada", c: ["cod-forma"], k: "sort", ask: "¿Es COD o lleva preposición?", q: "Clasifica.", cats: ["COD (sin preposición)", "No es COD (lleva preposición)"], items: [["Je regarde la télé.", 0], ["J'attends le bus.", 0], ["J'écoute mes parents.", 0], ["J'aide mon frère.", 0], ["Je parle à Marie.", 1], ["Je pense à mon examen.", 1], ["Je téléphone à Luc.", 1], ["Je vais à la plage.", 1]], pista: "¿Hay à?", why: "COD o no." },
    { fase: "indep", c: ["cod-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu prends le métro ? — Oui, je ___ prends tous les jours.", acc: ["le"], why: "<b>le</b>." },
    { fase: "indep", c: ["cod-forma"], k: "spot", ask: "Encuentra el error.", s: "— Tu attends Sophie ? — Oui , je [lui] attends depuis vingt minutes .", fix: "l'", why: "<b>l'attends</b>." },
    { fase: "indep", c: ["cod-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu invites Marie et Paul ? — Oui, je ___ invite samedi.", acc: ["les"], why: "<b>les</b>." },
    { fase: "aplica", c: ["cod-place"], k: "choice", ask: "— «¿Viste a la nueva profesora?» — «Sí, la vi.»", q: "«Oui, je l'ai ___ ce matin.»", o: ["vue", "vu", "voir"], a: 0, why: "Concuerda con <b>la</b>: <b>vue</b>." },
    { fase: "aplica", c: ["cod-place"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu fais tes devoirs ?", "Oui, je les fais."], ["Tu aimes cette ville ?", "Oui, je l'aime beaucoup."], ["Tu connais mon frère ?", "Non, je ne le connais pas."], ["Tu m'entends ?", "Oui, je t'entends bien."]], why: "COD." },
    { fase: "dominio", c: ["cod-place"], k: "choice", ask: "— «¿Tomas este café?» — «No.»", q: "«Non, ___ .»", o: ["je ne le bois pas", "je le ne bois pas", "je ne bois pas le"], a: 0, why: "<b>je ne le bois pas</b>." },
    { fase: "dominio", c: ["cod-place"], k: "order", ask: "Ordena: «Lo voy a hacer mañana».", tokens: ["Je vais", "le", "faire", "demain."], why: "<b>Je vais le faire demain.</b>" },
    { fase: "dominio", c: ["cod-forma", "cod-place"], k: "listen", say: "Ce livre est génial : lis-le !", acc: ["Ce livre est génial : lis-le !", "Ce livre est génial: lis-le!", "Ce livre est génial, lis-le !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce livre est génial : lis-le !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lupin", "Sophie", "Marie", "Paul", "Luc"], previo: ["regardes", "regarde", "série", "tous", "soirs", "cherches", "cherche", "tes", "clés", "partout", "mes", "devoirs", "demain", "nouvelle", "professeure", "matin", "métro", "prends", "attends", "attendez", "attendons", "bus", "bois", "café", "livre", "génial", "lis", "entends", "invites", "invite", "samedi", "depuis", "vingt", "minutes", "fais", "aimes", "cette", "ville", "connais", "frère", "télé", "écoute", "parents", "aide", "examen", "voir", "vu", "pense"] }
};

E["a2-coi"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom COI : lui, leur",
  objetivo: {
    que: "Vas a reemplazar à + persona por lui (una) o leur (varias).",
    corto: "Je lui parle.",
    podras: ["Reconocer verbos con à: parler à, téléphoner à, écrire à…", "Elegir lui o leur (sin s).", "Saber que con COI el participio no concuerda."],
    iconos: ["ic2/amigos", "m2d/senalar", "ic2/movil"],
    previos: ["El COD (lección 9)."],
    capacidad: "Ahora puedes decir a quién hablas, escribes o llamas."
  },
  requiere: R("pr-mapa", "cod-forma", "cod-place", "pca-forma", "pca-irreg"), recupera: ["cod-forma"],
  conceptos: {
    "coi-forma": { n: "à + persona → lui / leur", b: "gr" },
    "coi-vs": { n: "COD (regarder) vs. COI (parler à)", b: "gr" }
  },
  video: {
    titulo: "El COI", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "Je lui parle.", seg: [
        { es: "Hola. El COI es la persona con à. En español es le o les." } ] },
      { v: "dos",
        a: { tag: "una persona", fr: "Je parle à Julie → Je lui parle.", es: "lui" },
        b: { tag: "varias", fr: "Je téléphone à mes parents → Je leur téléphone.", es: "leur" },
        seg: [ { es: "Una persona, hombre o mujer:", p: 1 }, { fr: "Je lui parle.", p: 1 }, { es: "Varias personas:", p: 2 }, { fr: "Je leur téléphone.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Les escribo a mis primos.»", o: ["Je leur écris.", "Je leurs écris."], a: 0,
        bien: "¡Sí! Leur sin s.", mal: "El pronombre leur nunca lleva s.",
        seg: [ { es: "Pausa. Leur." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["parler à", "téléphoner à", "écrire à", "répondre à", "offrir à", "ressembler à"], seg: [
        { es: "Y el participio no concuerda: je lui ai écrit.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La familia", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pregunta a Camila por su familia en Colombia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu téléphones à ta mère ?", "¿Llamas a tu mamá?"],
      ["camila", "Oui, je lui téléphone ce soir. Et j'écris souvent à mes grands-parents.", "Sí, la llamo esta noche. Y les escribo seguido a mis abuelos."],
      ["hugo", "Tu leur écris en français ?", "¿Les escribes en francés?"],
      ["camila", "Non ! Et ma sœur ? Je lui ressemble beaucoup. Je lui ai écrit hier.", "¡No! ¿Y mi hermana? Me parezco mucho a ella. Le escribí ayer."]
    ],
    fijate: "Fíjate: je lui téléphone, je leur écris, je lui ai écrit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "lui y leur",
      idea: "Verbo + à + persona (parler à, téléphoner à, écrire à, répondre à, offrir à, ressembler à). Una persona → lui; varias → leur (sin s). Delante del verbo o del auxiliar. Con COI el participio no concuerda.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je parle à Julie → Je lui parle.", "Hablo con Julie → Le hablo.", "lui"],
        ["Je lui téléphone ce soir.", "La llamo esta noche.", "lui"],
        ["Je téléphone à mes parents → Je leur téléphone.", "Llamo a mis padres → Los llamo.", "leur"],
        ["Je leur écris souvent.", "Les escribo a menudo.", "leur"],
        ["Je leur offre un livre.", "Les regalo un libro.", "leur"],
        ["Je lui ai répondu hier.", "Le respondí ayer.", "pc"],
        ["Je lui ai écrit hier.", "Le escribí ayer.", "no concuerda"],
        ["Tu lui ressembles beaucoup !", "¡Te pareces mucho a ella!", "ressembler à"],
        ["Je vais leur écrire ce soir.", "Les voy a escribir esta noche.", "+ infinitivo"],
        ["Je ne leur ai pas répondu.", "No les respondí.", "negación"]
      ]],
      ej: [["Je regarde mon voisin.", "Miro a mi vecino."], ["Je parle à mon voisin.", "Hablo con mi vecino."], ["J'appelle Sophie.", "Llamo a Sophie."], ["Je téléphone à Sophie.", "Llamo a Sophie."], ["J'obéis à mes parents.", "Obedezco a mis padres."], ["J'aide mes amis.", "Ayudo a mis amigos."], ["Je souris à mes amis.", "Les sonrío a mis amigos."], ["J'aide mon frère avec ses devoirs.", "Ayudo a mi hermano con sus tareas."], ["une carte postale", "una postal"], ["envoie", "envío"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je la téléphone.", "Je lui téléphone.", "téléphoner à."], ["Je leurs écris.", "Je leur écris.", "Sin s."], ["Je la parle.", "Je lui parle.", "parler à."], ["Je lui aide.", "Je l'aide.", "aider sin à: COD."]] }
  ],
  ejemplos: [
    { sit: "«¿Respondiste al profesor? — Sí, le respondí.»", resp: "Oui, je lui ai répondu.", pasos: ["répondre à + una persona → lui."], porque: "COI." },
    { sit: "«Les regalo un libro a mis amigos.»", resp: "Je leur offre un livre.", pasos: ["offrir à + varias → leur."], porque: "COI." },
    { sit: "«Ayudo a mi hermano.»", resp: "Je l'aide.", pasos: ["aider sin à → COD."], porque: "No es COI." }
  ],
  comprueba: [
    { q: "Lui sirve para…", o: ["un hombre o una mujer", "solo un hombre"], a: 0, b: "gr", porque: "Ambos." },
    { q: "Leur (pronombre) lleva s…", o: ["nunca", "en plural"], a: 0, b: "gr", porque: "Invariable." },
    { q: "Aider se usa con…", o: ["COD: je l'aide", "COI: je lui aide"], a: 0, b: "gr", porque: "aider quelqu'un." }
  ],
  practica: [
    { fase: "guiada", c: ["coi-forma"], k: "choice", ask: "— «¿Llamas a tu madre?» — «Sí, la llamo esta noche.»", q: "«Oui, je ___ téléphone ce soir.»", o: ["lui", "la", "leur"], a: 0, pista: "téléphoner à + una.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["coi-forma"], k: "choice", ask: "— «¿Escribes a tus abuelos?» — «Sí, les escribo a menudo.»", q: "«Oui, je ___ écris souvent.»", o: ["leur", "les", "leurs"], a: 0, pista: "Varias, sin s.", why: "<b>leur</b>." },
    { fase: "guiada", c: ["coi-vs"], k: "sort", ask: "¿COD o COI?", q: "Clasifica.", cats: ["COD : le, la, les", "COI : lui, leur"], items: [["Je regarde mon voisin.", 0], ["J'appelle Sophie.", 0], ["J'écoute mes parents.", 0], ["J'aide mes amis.", 0], ["Je parle à mon voisin.", 1], ["Je téléphone à Sophie.", 1], ["J'obéis à mes parents.", 1], ["Je souris à mes amis.", 1]], pista: "¿Hay à?", why: "COD o COI." },
    { fase: "indep", c: ["coi-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as répondu au professeur ? — Oui, je ___ ai répondu hier.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "indep", c: ["coi-forma"], k: "spot", ask: "Encuentra el error.", s: "— Tu parles à Julie ? — Oui , je [la] parle tous les jours .", fix: "lui", why: "<b>lui</b>." },
    { fase: "indep", c: ["coi-forma"], k: "spot", ask: "Encuentra el error.", s: "Mes cousins ? Je [leurs] envoie une carte postale .", fix: "leur", why: "<b>leur</b>." },
    { fase: "aplica", c: ["coi-vs"], k: "choice", ask: "— «¿Ayudas a tu hermano?» — «Sí, lo ayudo.»", q: "«Oui, je ___ aide avec ses devoirs.»", o: ["l'", "lui", "leur"], a: 0, why: "aider sin à: <b>l'</b>." },
    { fase: "aplica", c: ["coi-forma"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu offres un cadeau à tes amis ? — Oui, je ___ offre un livre.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "dominio", c: ["coi-forma"], k: "choice", ask: "«¿Tu hermana? ¡Te pareces mucho a ella!»", q: "«Ta sœur ? Tu ___ ressembles beaucoup !»", o: ["lui", "la", "leur"], a: 0, why: "ressembler à: <b>lui</b>." },
    { fase: "dominio", c: ["coi-forma"], k: "order", ask: "Ordena: «Les voy a escribir esta noche».", tokens: ["Je vais", "leur", "écrire", "ce soir."], why: "<b>Je vais leur écrire ce soir.</b>" },
    { fase: "dominio", c: ["coi-forma", "coi-vs"], k: "listen", say: "Je ne leur ai pas répondu.", acc: ["Je ne leur ai pas répondu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne leur ai pas répondu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Sophie"], previo: ["téléphones", "téléphone", "ta", "mère", "ce", "soir", "écris", "souvent", "mes", "grands-parents", "français", "sœur", "ressemble", "ressembles", "beaucoup", "écrit", "hier", "parle", "parles", "parents", "offre", "offres", "livre", "cadeau", "tes", "amis", "répondu", "professeur", "tous", "jours", "cousins", "aide", "ses", "devoirs", "frère", "écrire", "regarde", "voisin", "appelle", "écoute", "obéis", "souris", "téléphoner", "offrir", "ressembler", "parler", "écrire", "répondre"] }
};

E["a2-y"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom y",
  objetivo: {
    que: "Vas a reemplazar un lugar o à + cosa por y, y conocer expresiones con y.",
    corto: "J'y vais.",
    podras: ["Decir J'y vais, j'y habite.", "Decir J'y pense (à + cosa).", "Usar On y va !, Vas-y !, Ça y est !"],
    iconos: ["ic2/mundo", "m2d/correr", "ic2/bombilla"],
    previos: ["El COI (lección 10)."],
    capacidad: "Ahora puedes hablar de lugares sin repetirlos."
  },
  requiere: R("pr-mapa", "coi-forma", "pt-uso", "fu-irreg", "pce-verbes"), recupera: ["pr-mapa"],
  conceptos: {
    "y-lieu": { n: "lugar o à + cosa → y", b: "gr" },
    "y-pers": { n: "à + persona: no y (lui o à elle); j'irai sin y", b: "gr" }
  },
  video: {
    titulo: "El pronombre y", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/correr", grande: "On y va !", seg: [
        { es: "Hola. Y es «allí», aunque en español casi nunca lo decimos." } ] },
      { v: "dos",
        a: { tag: "lugar", fr: "Tu vas à la fac ? — Oui, j'y vais.", es: "allí" },
        b: { tag: "à + cosa", fr: "Je pense à mon examen → J'y pense.", es: "en eso" },
        seg: [ { es: "Un lugar:", p: 1 }, { fr: "Oui, j'y vais.", p: 1 }, { es: "à más una cosa:", p: 2 }, { fr: "J'y pense.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Vas a la biblioteca? — Sí, voy.»", o: ["Oui, j'y vais.", "Oui, je vais."], a: 0,
        bien: "¡Sí! Aller necesita y.", mal: "En francés, aller necesita y: j'y vais.",
        seg: [ { es: "Pausa. Voy." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'y vais", "j'y pense", "On y va !", "Vas-y !", "Ça y est !", "il y a"], seg: [
        { es: "Con personas, no: je pense à elle.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Vamos?", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo salen de clase.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu vas à la bibliothèque ?", "¿Vas a la biblioteca?"],
      ["camila", "Oui, j'y vais cet après-midi. Je pense à mon examen, j'y pense tout le temps !", "Sí, voy esta tarde. Pienso en mi examen, ¡pienso en eso todo el tiempo!"],
      ["hugo", "Et le concert ce soir ? Nous y sommes allés hier, c'était super.", "¿Y el concierto de esta noche? Fuimos ayer, estuvo genial."],
      ["camila", "Ça y est, j'ai fini ! On y va !", "¡Listo, terminé! ¡Vamos!"]
    ],
    fijate: "Fíjate: j'y vais, j'y pense, nous y sommes allés, on y va."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El pronombre y",
      idea: "Lugar (à, en, chez, dans…) → y: j'y vais. à + cosa (penser à, répondre à une question) → y: j'y pense. à + persona → no y: lui / leur o à elle. En futuro de aller: j'irai (sin y).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu vas à la fac ? — Oui, j'y vais.", "¿Vas a la u? — Sí, voy.", "lugar"],
        ["Tu habites en Colombie ? — Oui, j'y habite.", "¿Vives en Colombia? — Sí, vivo allí.", "lugar"],
        ["Je pense à mon examen → J'y pense.", "Pienso en mi examen → Pienso en eso.", "à + cosa"],
        ["Je réponds à la question → J'y réponds.", "Respondo a la pregunta.", "à + cosa"],
        ["Je pense à ma sœur → Je pense à elle.", "Pienso en mi hermana.", "persona: no y"],
        ["Je n'y vais pas.", "No voy.", "negación"],
        ["Nous y sommes allés hier.", "Fuimos ayer.", "pc"],
        ["Tu iras à Paris ? — Oui, j'irai.", "¿Irás a París? — Sí, iré.", "futuro: sin y"],
        ["On y va !", "¡Vamos!", "expresión"],
        ["Vas-y !", "¡Dale! ¡Adelante!", "expresión"],
        ["Ça y est !", "¡Listo! ¡Ya está!", "expresión"],
        ["Je n'y comprends rien.", "No entiendo nada de eso.", "expresión"]
      ]],
      ej: [["à la plage", "a la playa"], ["au Mexique", "a México"], ["chez le médecin", "al médico"], ["à ce problème", "en ese problema"], ["à mon père", "a mi papá"], ["à mes amies", "a mis amigas"], ["à ma professeure", "a mi profesora"], ["tout de suite", "enseguida"], ["depuis toujours", "desde siempre"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Oui, je vais.", "Oui, j'y vais.", "aller necesita y."], ["Je lui réponds (à la question).", "J'y réponds.", "Cosa: y."], ["J'y pense (à ma sœur).", "Je pense à elle.", "Persona: no y."], ["Oui, j'y irai.", "Oui, j'irai.", "Futuro de aller: sin y."]] }
  ],
  ejemplos: [
    { sit: "«¿Vas al cine esta noche? — No, no voy.»", resp: "Non, je n'y vais pas.", pasos: ["ne + y + vais + pas."], porque: "Negación." },
    { sit: "«¡El concierto empieza! ¡Rápido, dale!»", resp: "Vas-y vite !", pasos: ["Vas-y."], porque: "Expresión." },
    { sit: "«¿Piensas en tu hermana? — Sí, pienso en ella.»", resp: "Oui, je pense à elle.", pasos: ["Persona → à elle."], porque: "No y." }
  ],
  comprueba: [
    { q: "Y reemplaza…", o: ["un lugar o à + cosa", "à + persona"], a: 0, b: "gr", porque: "Lugar o cosa." },
    { q: "«Ça y est !» significa…", o: ["¡Listo!", "¡Ahí está él!"], a: 0, b: "gr", porque: "Expresión." },
    { q: "Con el futuro de aller (iré) se dice…", o: ["j'irai", "j'y irai"], a: 0, b: "gr", porque: "Sin y." }
  ],
  practica: [
    { fase: "guiada", c: ["y-lieu"], k: "choice", ask: "— «¿Vas a la biblioteca?» — «Sí, voy esta tarde.»", q: "«Oui, j'___ vais cet après-midi.»", o: ["y", "en", "lui"], a: 0, pista: "Lugar.", why: "<b>y</b>." },
    { fase: "guiada", c: ["y-lieu"], k: "choice", ask: "— «¿Piensas en tu examen?» — «Sí, todo el tiempo.»", q: "«Oui, j'___ pense tout le temps.»", o: ["y", "le", "lui"], a: 0, pista: "à + cosa.", why: "<b>y</b>." },
    { fase: "guiada", c: ["y-lieu", "y-pers"], k: "sort", ask: "¿y o lui / leur?", q: "Clasifica.", cats: ["y", "lui / leur"], items: [["à la plage", 0], ["au Mexique", 0], ["à ce problème", 0], ["chez le médecin", 0], ["à mon père", 1], ["à mes amies", 1], ["à ma professeure", 1]], pista: "¿Persona?", why: "y o COI." },
    { fase: "indep", c: ["y-lieu"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu habites en Colombie ? — Oui, j'___ habite depuis toujours.", acc: ["y"], why: "<b>y</b>." },
    { fase: "indep", c: ["y-lieu"], k: "spot", ask: "Encuentra el error.", s: "— Tu réponds à la question ? — Oui , je [lui] réponds tout de suite .", fix: "y", why: "<b>y</b>." },
    { fase: "indep", c: ["y-pers"], k: "choice", ask: "— «¿Piensas en tu hermana?» — «Sí, pienso en ella.»", q: "«Oui, je pense ___ .»", o: ["à elle", "y", "lui"], a: 0, why: "Persona: <b>à elle</b>." },
    { fase: "aplica", c: ["y-lieu"], k: "choice", ask: "— «¿Vas al cine esta noche?» — «No.»", q: "«Non, je ___ vais pas.»", o: ["n'y", "ne", "n'en"], a: 0, why: "<b>n'y vais pas</b>." },
    { fase: "aplica", c: ["y-pers"], k: "choice", ask: "— «¿Irás a París el próximo verano?» — «Sí, iré.»", q: "«Oui, ___ .»", o: ["j'irai", "j'y irai", "j'y vais irai"], a: 0, why: "Futuro de aller: <b>j'irai</b>." },
    { fase: "dominio", c: ["y-lieu"], k: "match", ask: "Une cada expresión.", q: "Francés → español", pairs: [["Il y a", "hay"], ["Ça y est !", "¡Listo!"], ["On y va !", "¡Vamos!"], ["Vas-y !", "¡Dale!"], ["Je n'y comprends rien.", "No entiendo nada de eso."]], why: "Expresiones." },
    { fase: "dominio", c: ["y-lieu"], k: "order", ask: "Ordena: «Fuimos ayer».", tokens: ["Nous", "y sommes", "allés", "hier."], why: "<b>Nous y sommes allés hier.</b>" },
    { fase: "dominio", c: ["y-lieu", "y-pers"], k: "listen", say: "Le concert commence ! Vas-y vite !", acc: ["Le concert commence ! Vas-y vite !", "Le concert commence! Vas-y vite!", "Le concert commence. Vas-y vite !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le concert commence ! Vas-y vite !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Colombie", "Mexique"], previo: ["bibliothèque", "cet", "après-midi", "pense", "examen", "tout", "temps", "concert", "ce", "soir", "hier", "c'était", "super", "fini", "fac", "habite", "réponds", "question", "sœur", "elle", "iras", "l'été", "prochain", "vite", "commence", "comprends", "rien", "vais", "cinéma", "toujours", "suite", "plage", "médecin", "problème", "père", "amies", "professeure", "irai"] }
};

E["a2-en"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pronom en",
  objetivo: {
    que: "Vas a reemplazar du, de la, des, una cantidad o de + cosa por en.",
    corto: "J'en ai deux.",
    podras: ["Decir J'en veux, je n'en ai pas.", "Repetir la cantidad: j'en ai deux.", "No usar en con le, la, les, mon, ma…"],
    iconos: ["ic2/cofre", "ic2/bombilla", "ic2/moneda"],
    previos: ["Los partitivos (lección 6) y el pronombre y (lección 11)."],
    capacidad: "Ahora puedes hablar de cantidades sin repetir la cosa."
  },
  requiere: R("pr-mapa", "pt3-choix", "cod-forma", "ae-besoin", "av2-venir"), recupera: ["pt3-choix"],
  conceptos: {
    "en-part": { n: "du, de la, des, de + cosa → en", b: "gr" },
    "en-qte": { n: "cantidad: j'en ai deux; no con le / la / les", b: "gr" }
  },
  video: {
    titulo: "El pronombre en", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cofre", grande: "J'en ai deux.", seg: [
        { es: "Hola. En es «de eso». En español casi nunca lo decimos." } ] },
      { v: "dos",
        a: { tag: "partitivo", fr: "Tu veux du café ? — Oui, j'en veux.", es: "quiero" },
        b: { tag: "cantidad", fr: "Des frères ? J'en ai deux.", es: "tengo dos" },
        seg: [ { es: "Con du, de la, des:", p: 1 }, { fr: "Oui, j'en veux.", p: 1 }, { es: "Con una cantidad, se repite el número:", p: 2 }, { fr: "J'en ai deux.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Tienes un carro? — No, no tengo.»", o: ["Non, je n'en ai pas.", "Non, je n'ai pas."], a: 0,
        bien: "¡Sí! N'en ai pas.", mal: "Necesitas en: je n'en ai pas.",
        seg: [ { es: "Pausa. No tengo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'en veux", "j'en ai deux", "je n'en ai pas", "j'en ai besoin", "j'en viens"], seg: [
        { es: "Con le, la, les: je le veux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El café", img: "bg-cafe", yo: "camila",
    escena: "Camila visita a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux du café ?", "¿Quieres café?"],
      ["camila", "Oui, j'en veux bien. Tu as des frères, toi ?", "Sí, con gusto. ¿Tú tienes hermanos?"],
      ["hugo", "Oui, j'en ai deux. Tu as une voiture ? — Non, je n'en ai pas.", "Sí, tengo dos. ¿Tienes carro? — No, no tengo."],
      ["camila", "Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin !", "¿Necesitas tu diccionario? — ¡Sí, lo necesito!"]
    ],
    fijate: "Fíjate: j'en veux, j'en ai deux, je n'en ai pas, j'en ai besoin."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El pronombre en",
      idea: "du, de la, des → en: j'en mange. Cantidad → en + la cantidad: j'en ai deux. de + cosa o lugar (besoin de, venir de) → en. Con le, la, les, mon, ma… → COD: je le veux.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu veux du café ? — Oui, j'en veux.", "¿Quieres café? — Sí, quiero.", "partitivo"],
        ["Tu manges des fruits ? — Oui, j'en mange tous les jours.", "¿Comes frutas? — Sí, todos los días.", "partitivo"],
        ["Des frères ? J'en ai deux.", "¿Hermanos? Tengo dos.", "cantidad"],
        ["Tu as combien de cours ? — J'en ai cinq.", "¿Cuántas clases tienes? — Tengo cinco.", "cantidad"],
        ["J'en achète un kilo.", "Compro un kilo.", "cantidad"],
        ["Non, je n'en ai pas.", "No, no tengo.", "negación"],
        ["Tu as besoin de ton dictionnaire ? — Oui, j'en ai besoin.", "¿Necesitas tu diccionario? — Sí, lo necesito.", "de + cosa"],
        ["Tu viens de la bibliothèque ? — Oui, j'en viens.", "¿Vienes de la biblioteca? — Sí, vengo de allí.", "de + lugar"],
        ["Il reste du lait ? — Oui, il en reste un peu.", "¿Queda leche? — Sí, queda un poco.", "cantidad"],
        ["Tu veux le gâteau ? — Oui, je le veux !", "¿Quieres el pastel? — ¡Sí, lo quiero!", "le: no en"]
      ]],
      ej: [["du pain", "pan"], ["le pain", "el pan"], ["des photos", "fotos"], ["ces photos", "esas fotos"], ["beaucoup d'amis", "muchos amigos"], ["la pizza", "la pizza"], ["de la musique", "música"], ["mes livres", "mis libros"], ["Tu te souviens de ce voyage ? — Oui, je m'en souviens.", "¿Te acuerdas de ese viaje? — Sí, me acuerdo."], ["Tu prends de l'eau ? — Non, je n'en prends pas.", "¿Tomas agua? — No, no tomo."], ["Nous parlons d'elle.", "Hablamos de ella."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Oui, j'ai deux.", "Oui, j'en ai deux.", "La cantidad sola necesita en."], ["J'les ai lu trois.", "J'en ai lu trois.", "Cantidad: en."], ["J'en veux (le gâteau).", "Je le veux.", "Con le: COD."], ["Nous parlons en (de la professeure).", "Nous parlons d'elle.", "Persona: d'elle."]] }
  ],
  ejemplos: [
    { sit: "«¿Tienes hermanos? — Sí, tengo dos.»", resp: "Oui, j'en ai deux.", pasos: ["en + cantidad."], porque: "Cantidad." },
    { sit: "«¿Comes frutas? — Sí, todos los días.»", resp: "Oui, j'en mange tous les jours.", pasos: ["des fruits → en."], porque: "Partitivo." },
    { sit: "«¿Quieres el pastel de chocolate? — Sí, lo quiero.»", resp: "Oui, je le veux !", pasos: ["le gâteau → le."], porque: "COD, no en." }
  ],
  comprueba: [
    { q: "Con una cantidad, después de en…", o: ["se repite la cantidad", "no se dice nada"], a: 0, b: "gr", porque: "J'en ai deux." },
    { q: "Con le gâteau se usa…", o: ["le", "en"], a: 0, b: "gr", porque: "Artículo definido." },
    { q: "Con avoir besoin de se usa…", o: ["en", "y"], a: 0, b: "gr", porque: "de + cosa." }
  ],
  practica: [
    { fase: "guiada", c: ["en-part"], k: "choice", ask: "— «¿Quieres café?» — «Sí, con gusto.»", q: "«Oui, j'___ veux bien.»", o: ["en", "y", "le"], a: 0, pista: "du café.", why: "<b>en</b>." },
    { fase: "guiada", c: ["en-qte"], k: "choice", ask: "— «¿Tienes hermanos?» — «Sí, tengo dos.»", q: "«Oui, ___ deux.»", o: ["j'en ai", "j'ai", "je les ai"], a: 0, pista: "Cantidad.", why: "<b>j'en ai</b>." },
    { fase: "guiada", c: ["en-part", "en-qte"], k: "sort", ask: "¿en o le / la / les?", q: "Clasifica.", cats: ["en", "le / la / les"], items: [["du pain", 0], ["des photos", 0], ["beaucoup d'amis", 0], ["de la musique", 0], ["le pain", 1], ["ces photos", 1], ["la pizza", 1], ["mes livres", 1]], pista: "¿du, des, cantidad?", why: "en o COD." },
    { fase: "indep", c: ["en-part"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as besoin de ton dictionnaire ? — Oui, j'___ ai besoin.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["en-qte"], k: "spot", ask: "Encuentra el error.", s: "— Combien de livres tu as lus ? — J' [les] ai lu trois .", fix: "en", why: "<b>en</b>." },
    { fase: "indep", c: ["en-qte"], k: "choice", ask: "— «¿Tienes un carro?» — «No.»", q: "«Non, ___ .»", o: ["je n'en ai pas", "je n'ai pas", "je ne l'ai pas"], a: 0, why: "<b>je n'en ai pas</b>." },
    { fase: "aplica", c: ["en-qte"], k: "choice", ask: "— «¿Quieres el pastel de chocolate?» — «¡Sí!»", q: "«Oui, je ___ veux !»", o: ["le", "en", "y"], a: 0, why: "le gâteau: <b>le</b>." },
    { fase: "aplica", c: ["en-part"], k: "fill", ask: "Escribe un pronombre (venir de).", q: "— Tu viens de la bibliothèque ? — Oui, j'___ viens.", acc: ["en"], why: "<b>en</b>." },
    { fase: "dominio", c: ["en-part"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu manges des fruits ?", "Oui, j'en mange tous les jours."], ["Tu as combien de cours ?", "J'en ai cinq."], ["Tu prends de l'eau ?", "Non, je n'en prends pas."], ["Il reste du lait ?", "Oui, il en reste un peu."]], why: "en." },
    { fase: "dominio", c: ["en-qte"], k: "order", ask: "Ordena: «Compro un kilo».", tokens: ["J'en", "achète", "un kilo."], why: "<b>J'en achète un kilo.</b>" },
    { fase: "dominio", c: ["en-part", "en-qte"], k: "listen", say: "Des frères ? J'en ai deux.", acc: ["Des frères ? J'en ai deux.", "Des frères? J'en ai deux.", "Des frères ? J'en ai 2."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Des frères ? J'en ai deux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["veux", "café", "bien", "frères", "toi", "deux", "voiture", "besoin", "ton", "dictionnaire", "manges", "mange", "fruits", "tous", "jours", "combien", "cours", "cinq", "achète", "kilo", "viens", "bibliothèque", "reste", "lait", "peu", "gâteau", "chocolat", "pain", "photos", "ces", "beaucoup", "d'amis", "pizza", "musique", "mes", "livres", "lus", "lu", "trois", "souviens", "voyage", "prends", "eau", "parlons", "d'elle", "votre", "professeure"] }
};

E["a2-pronoms-choisir"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "COD, COI, y ou en ? Choisir le bon pronom",
  objetivo: {
    que: "Vas a elegir el pronombre correcto en cualquier frase, siguiendo el árbol de decisión.",
    corto: "El árbol de los pronombres.",
    podras: ["Aplicar el árbol: nada, à + persona, lugar o à + cosa, de o cantidad.", "Usarlo en presente y passé composé.", "No dejarte engañar por el español."],
    iconos: ["ic2/engranaje", "m2d/pensativo", "ic2/trofeo"],
    previos: ["COD, COI, y y en (lecciones 9 a 12)."],
    capacidad: "Ahora dominas los cuatro pronombres complemento."
  },
  requiere: R("pr-mapa", "pr-place", "cod-forma", "cod-place", "coi-forma", "coi-vs", "y-lieu", "y-pers", "en-part", "en-qte"), recupera: ["cod-forma", "coi-forma", "y-lieu", "en-part"],
  conceptos: {
    "ch-arbre": { n: "el árbol: nada → le; à + persona → lui; lugar → y; de → en", b: "gr" },
    "ch-pc": { n: "los pronombres en passé composé y en negación", b: "gr" }
  },
  video: {
    titulo: "Elegir el pronombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "le? lui? y? en?", seg: [
        { es: "Hola. Mira el verbo francés, no el español." } ] },
      { v: "frase", filas: [
          { nota: "connaître (sin à)", p: 1, partes: [["Je le connais.", "-", 1]] },
          { nota: "parler à", p: 2, partes: [["Je lui parle.", "-", 2]] },
          { nota: "aller à", p: 3, partes: [["J'y vais.", "-", 3]] },
          { nota: "boire de l'eau", p: 4, partes: [["J'en bois.", "-", 4]] } ], seg: [
        { es: "Lo conozco,", p: 1 }, { es: "le hablo,", p: 2 }, { es: "voy,", p: 3 }, { es: "tomo.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿El director? Lo conozco bien.»", o: ["Je le connais bien.", "Je lui connais bien."], a: 0,
        bien: "¡Sí! Connaître sin à.", mal: "Connaître no lleva à: le.",
        seg: [ { es: "Pausa. Conocer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Je le connais.", "Je lui parle.", "J'y vais.", "J'en bois."], seg: [
        { es: "Cuatro preguntas, cuatro respuestas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El compañero de piso", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pregunta a Camila por su compañero de piso.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu parles à ton colocataire ?", "¿Hablas con tu compañero de piso?"],
      ["camila", "Oui, je lui parle tous les soirs. Il fait du sport, il en fait trois fois par semaine.", "Sí, le hablo todas las noches. Hace deporte, tres veces por semana."],
      ["hugo", "Il va à la fac en bus ? — Oui, il y va en bus.", "¿Va a la u en bus? — Sí, va en bus."],
      ["camila", "Et il lit le journal ? — Oui, il le lit le matin.", "¿Y lee el periódico? — Sí, lo lee por la mañana."]
    ],
    fijate: "Fíjate: je lui parle, il en fait, il y va, il le lit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El árbol",
      idea: "1. ¿Sin preposición? → le, la, les. 2. ¿à + persona? → lui, leur. 3. ¿Lugar o à + cosa? → y. 4. ¿du, de la, des, cantidad o de + cosa? → en.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["Je regarde le film → Je le regarde.", "Veo la película → La veo.", "le"],
        ["Il lit le journal ? — Oui, il le lit.", "¿Lee el periódico? — Sí, lo lee.", "le"],
        ["Je parle à Léa → Je lui parle.", "Hablo con Léa → Le hablo.", "lui"],
        ["Tu as parlé à tes profs ? — Oui, je leur ai parlé.", "¿Hablaste con tus profes? — Sí, les hablé.", "leur"],
        ["Tu vas à la fac en bus ? — Oui, j'y vais en bus.", "¿Vas a la u en bus? — Sí.", "y"],
        ["Je bois de l'eau → J'en bois.", "Tomo agua → Tomo.", "en"],
        ["Tu fais du sport ? — Oui, j'en fais trois fois par semaine.", "¿Haces deporte? — Sí, tres veces por semana.", "en"],
        ["Tu as mangé des crêpes ? — Oui, j'en ai mangé deux.", "¿Comiste crepes? — Sí, dos.", "en + pc"],
        ["Tu as vu Léa et Marie ? — Oui, je les ai vues au café.", "¿Viste a Léa y Marie? — Sí, las vi en el café.", "les + pc"],
        ["Je ne leur ai pas répondu.", "No les respondí.", "negación"],
        ["C'est un secret : ne lui dis rien !", "Es un secreto: ¡no le digas nada!", "imperativo negativo"]
      ]],
      ej: [["regarder la télé", "ver la tele"], ["parler à ses amis", "hablar con sus amigos"], ["aller au cinéma", "ir al cine"], ["boire de l'eau", "tomar agua"], ["penser au futur", "pensar en el futuro"], ["écrire à sa mère", "escribirle a su mamá"], ["acheter trois livres", "comprar tres libros"], ["inviter ses voisins", "invitar a sus vecinos"], ["des stylos", "bolígrafos"], ["le directeur", "el director"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je lui connais bien.", "Je le connais bien.", "connaître sin à."], ["J'les ai trois (stylos).", "J'en ai trois.", "Cantidad: en."], ["Je le parle.", "Je lui parle.", "parler à."], ["Je lui vais.", "J'y vais.", "Lugar: y."]] }
  ],
  ejemplos: [
    { sit: "«¿Hiciste deporte? — Sí, tres veces.»", resp: "Oui, j'en ai fait trois fois.", pasos: ["du sport → en."], porque: "Partitivo." },
    { sit: "«¿Hablaste con tus profes? — Sí.»", resp: "Oui, je leur ai parlé.", pasos: ["parler à + varios → leur."], porque: "COI." },
    { sit: "«¡No le digas nada a tu hermana!»", resp: "Ne lui dis rien !", pasos: ["dire à → lui."], porque: "COI." }
  ],
  comprueba: [
    { q: "Connaître quelqu'un usa…", o: ["le / la", "lui"], a: 0, b: "gr", porque: "Sin à." },
    { q: "Penser au futur usa…", o: ["y", "lui"], a: 0, b: "gr", porque: "à + cosa." },
    { q: "Acheter trois livres usa…", o: ["en", "les"], a: 0, b: "gr", porque: "Cantidad." }
  ],
  practica: [
    { fase: "guiada", c: ["ch-arbre"], k: "choice", ask: "— «¿Hablas con tu compañero de piso?» — «Sí, todas las noches.»", q: "«Oui, je ___ parle tous les soirs.»", o: ["lui", "le", "y"], a: 0, pista: "parler à.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["ch-arbre"], k: "choice", ask: "— «¿Haces deporte?» — «Sí, tres veces por semana.»", q: "«Oui, j'___ fais trois fois par semaine.»", o: ["en", "le", "y"], a: 0, pista: "du sport.", why: "<b>en</b>." },
    { fase: "guiada", c: ["ch-arbre"], k: "sort", ask: "¿Qué pronombre?", q: "Clasifica.", cats: ["le / la / les", "lui / leur", "y", "en"], items: [["regarder la télé", 0], ["inviter ses voisins", 0], ["parler à ses amis", 1], ["écrire à sa mère", 1], ["aller au cinéma", 2], ["penser au futur", 2], ["boire de l'eau", 3], ["acheter trois livres", 3]], pista: "El árbol.", why: "Cuatro pronombres." },
    { fase: "indep", c: ["ch-arbre"], k: "choice", ask: "— «¿Vas a la u en bus?» — «Sí.»", q: "«Oui, j'___ vais en bus.»", o: ["y", "en", "la"], a: 0, why: "<b>y</b>." },
    { fase: "indep", c: ["ch-arbre"], k: "choice", ask: "— «¿Lee el periódico?» — «Sí, por la mañana.»", q: "«Oui, il ___ lit le matin.»", o: ["le", "lui", "en"], a: 0, why: "<b>le</b>." },
    { fase: "indep", c: ["ch-arbre"], k: "spot", ask: "Encuentra el error.", s: "— Tu connais le directeur ? — Oui , je [lui] connais bien .", fix: "le", why: "<b>le</b>." },
    { fase: "aplica", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as parlé à tes profs ? — Oui, je ___ ai parlé.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "aplica", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as mangé des crêpes ? — Oui, j'___ ai mangé deux.", acc: ["en"], why: "<b>en</b>." },
    { fase: "dominio", c: ["ch-pc"], k: "fill", ask: "Escribe un pronombre.", q: "— Tu as vu Léa et Marie ? — Oui, je ___ ai vues au café.", acc: ["les"], why: "<b>les</b>." },
    { fase: "dominio", c: ["ch-arbre"], k: "spot", ask: "Encuentra el error.", s: "— Tu as des stylos ? — Oui , j' [les] ai trois .", fix: "en", why: "<b>en</b>." },
    { fase: "dominio", c: ["ch-arbre", "ch-pc"], k: "listen", say: "Je ne leur ai pas répondu.", acc: ["Je ne leur ai pas répondu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne leur ai pas répondu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Marie"], previo: ["parles", "parle", "ton", "colocataire", "tous", "soirs", "fait", "fais", "sport", "trois", "fois", "par", "semaine", "va", "vais", "fac", "bus", "lit", "journal", "matin", "regarde", "film", "parlé", "tes", "profs", "bois", "eau", "mangé", "crêpes", "deux", "vu", "vues", "café", "répondu", "secret", "dis", "rien", "connais", "directeur", "stylos", "télé", "ses", "amis", "sa", "mère", "cinéma", "futur", "livres", "voisins", "inviter", "acheter", "boire", "aller", "penser", "écrire", "parler", "regarder"] }
};

/* ================================ A2·5 y A2·6 ================================ */

E["a2-pc-ou-imparfait"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Passé composé ou imparfait ? Raconter un souvenir",
  objetivo: {
    que: "Vas a contar un recuerdo mezclando el decorado (imparfait) con los hechos (passé composé).",
    corto: "Llovía cuando sonó el teléfono.",
    podras: ["Usar imparfait para describir y para costumbres.", "Usar passé composé para hechos puntuales.", "Reconocer las palabras pista: d'habitude, soudain, un jour…"],
    iconos: ["ic2/reloj-arena", "ic2/libros", "m2d/pensativo"],
    previos: ["El passé composé y el imparfait (lecciones 1 a 3)."],
    capacidad: "Ahora puedes contar un recuerdo como un francés."
  },
  requiere: R("pca-forma", "pca-irreg", "pce-verbes", "pce-accord", "imp-forma", "imp-uso"), recupera: ["imp-uso"],
  conceptos: {
    "pi-decor": { n: "imparfait: decorado, costumbre, acción en curso", b: "gr" },
    "pi-fait": { n: "passé composé: hecho puntual o serie de hechos", b: "gr" }
  },
  video: {
    titulo: "Contar un recuerdo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "Il pleuvait…", seg: [
        { es: "Hola. Un recuerdo tiene decorado y tiene hechos." } ] },
      { v: "dos",
        a: { tag: "decorado", fr: "Il pleuvait et je lisais.", es: "imparfait" },
        b: { tag: "hecho", fr: "Soudain, le téléphone a sonné.", es: "passé composé" },
        seg: [ { es: "El decorado:", p: 1 }, { fr: "Il pleuvait et je lisais.", p: 1 }, { es: "Lo que pasó:", p: 2 }, { fr: "Soudain, le téléphone a sonné.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando llegué a Bogotá, hacía mucho frío.»", o: ["Quand je suis arrivé à Bogotá, il faisait très froid.", "Quand je suis arrivé à Bogotá, il a fait très froid."], a: 0,
        bien: "¡Sí! El clima es decorado.", mal: "El tiempo que hacía es decorado: imparfait.",
        seg: [ { es: "Pausa. Hacía frío." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["d'habitude", "autrefois", "tous les étés", "soudain", "tout à coup", "un jour", "une fois"], seg: [
        { es: "Truco: imperfecto español, imparfait; pretérito, passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Villa de Leyva", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta un viaje a Villa de Leyva.",
    pj: PJ,
    lineas: [
      ["camila", "Samedi dernier, il faisait beau, alors nous sommes allés à Villa de Leyva.", "El sábado pasado hacía buen tiempo, así que fuimos a Villa de Leyva."],
      ["camila", "Ce jour-là, nous avons pris le bus. J'étais fatiguée, mais contente.", "Ese día tomamos el bus. Estaba cansada, pero contenta."],
      ["hugo", "Et le soir ?", "¿Y por la noche?"],
      ["camila", "J'étais en train de cuisiner quand mes amis sont arrivés. Puis il a commencé à pleuvoir !", "Estaba cocinando cuando llegaron mis amigos. ¡Luego empezó a llover!"]
    ],
    fijate: "Fíjate: il faisait, j'étais (decorado) / nous sommes allés, nous avons pris, sont arrivés (hechos)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Decorado y hechos",
      idea: "Imparfait: tiempo, lugar, sentimientos, costumbres, acción en curso. Passé composé: hecho puntual o serie de hechos. Acción en curso interrumpida: la larga en imparfait, la que interrumpe en passé composé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["Il pleuvait et je lisais.", "Llovía y yo leía.", "imparfait"],
        ["Il faisait beau.", "Hacía sol.", "imparfait"],
        ["J'étais fatiguée.", "Estaba cansada.", "imparfait"],
        ["Je vivais à Pamplona.", "Vivía en Pamplona.", "imparfait"],
        ["Tous les dimanches, ma grand-mère préparait des arepas.", "Todos los domingos mi abuela preparaba arepas.", "costumbre"],
        ["Soudain, le téléphone a sonné.", "De repente, sonó el teléfono.", "passé composé"],
        ["J'ai vécu deux ans à Pamplona.", "Viví dos años en Pamplona.", "passé composé"],
        ["Il a commencé à pleuvoir.", "Empezó a llover.", "passé composé"],
        ["Nous dormions quand l'alarme a sonné.", "Dormíamos cuando sonó la alarma.", "interrupción"],
        ["J'étais en train de cuisiner quand mes amis sont arrivés.", "Estaba cocinando cuando llegaron mis amigos.", "interrupción"]
      ]],
      ej: [["d'habitude", "normalmente"], ["autrefois", "antes, en otros tiempos"], ["tous les étés", "todos los veranos"], ["quand j'étais enfant", "cuando era niño"], ["tout à coup", "de repente"], ["soudain", "de repente"], ["un jour", "un día"], ["une fois", "una vez"], ["ce jour-là", "ese día"], ["être en train de", "estar haciendo algo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand je suis arrivé, il a fait froid.", "Quand je suis arrivé, il faisait froid.", "Clima: imparfait."], ["Tous les dimanches, ma grand-mère a préparé des arepas.", "Tous les dimanches, ma grand-mère préparait des arepas.", "Costumbre: imparfait."], ["Soudain, le téléphone sonnait.", "Soudain, le téléphone a sonné.", "Hecho puntual: passé composé."]] }
  ],
  ejemplos: [
    { sit: "«Cuando era pequeña, vivía en Cúcuta.»", resp: "Quand j'étais petite, je vivais à Cúcuta.", pasos: ["Descripción → imparfait."], porque: "Decorado." },
    { sit: "«Ese día tomamos el bus.»", resp: "Ce jour-là, nous avons pris le bus.", pasos: ["Hecho → passé composé."], porque: "Una vez." },
    { sit: "«Dormíamos cuando sonó la alarma.»", resp: "Nous dormions quand l'alarme a sonné.", pasos: ["Larga: imparfait.", "Corta: passé composé."], porque: "Interrupción." }
  ],
  comprueba: [
    { q: "El tiempo que hacía va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Decorado." },
    { q: "Después de soudain suele ir…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Hecho puntual." },
    { q: "Una costumbre del pasado va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Hábito." }
  ],
  practica: [
    { fase: "guiada", c: ["pi-decor"], k: "choice", ask: "«Cuando era pequeño, jugaba fútbol todos los sábados.»", q: "«Quand j'étais petit, je ___ au foot tous les samedis.»", o: ["jouais", "ai joué", "joue"], a: 0, pista: "Costumbre.", why: "<b>jouais</b>." },
    { fase: "guiada", c: ["pi-fait"], k: "choice", ask: "«Veía la tele cuando, de repente, sonó el teléfono.»", q: "«Je regardais la télé quand tout à coup, le téléphone ___ .»", o: ["a sonné", "sonnait", "sonne"], a: 0, pista: "Hecho.", why: "<b>a sonné</b>." },
    { fase: "guiada", c: ["pi-decor", "pi-fait"], k: "sort", ask: "¿Pista de imparfait o de passé composé?", q: "Clasifica.", cats: ["Imparfait (costumbre, decorado)", "Passé composé (hecho puntual)"], items: [["d'habitude", 0], ["autrefois", 0], ["tous les étés", 0], ["quand j'étais enfant", 0], ["tout à coup", 1], ["soudain", 1], ["un jour", 1], ["une fois", 1]], pista: "soudain = de repente.", why: "Palabras pista." },
    { fase: "indep", c: ["pi-decor"], k: "fill", ask: "Escribe pleuvoir en imparfait.", q: "Hier soir, il ___ quand je suis sorti de la bibliothèque.", acc: ["pleuvait"], why: "<b>pleuvait</b>." },
    { fase: "indep", c: ["pi-fait"], k: "fill", ask: "Escribe prendre en passé composé (nous).", q: "Ce jour-là, nous ___ le bus pour aller à Villa de Leyva.", acc: ["avons pris"], why: "<b>avons pris</b>." },
    { fase: "indep", c: ["pi-decor"], k: "spot", ask: "Encuentra el error.", s: "Quand je suis arrivé à Bogotá , il [a fait] très froid .", fix: "faisait", why: "<b>faisait</b>." },
    { fase: "aplica", c: ["pi-decor"], k: "spot", ask: "Encuentra el error.", s: "Tous les dimanches , ma grand-mère [a préparé] des arepas .", fix: "préparait", why: "<b>préparait</b>." },
    { fase: "aplica", c: ["pi-decor", "pi-fait"], k: "match", ask: "Une cada frase con su traducción.", q: "Francés → español", pairs: [["Je vivais à Pamplona.", "Vivía en Pamplona."], ["J'ai vécu deux ans à Pamplona.", "Viví dos años en Pamplona."], ["Il faisait beau.", "Hacía sol."], ["Il a commencé à pleuvoir.", "Empezó a llover."]], why: "Dos tiempos." },
    { fase: "dominio", c: ["pi-decor", "pi-fait"], k: "choice", ask: "«El sábado pasado hacía buen tiempo, así que fuimos a la playa.»", q: "«Samedi dernier, il ___ beau, alors nous ___ à la plage.»", o: ["faisait / sommes allés", "a fait / allions", "faisait / allions"], a: 0, why: "Decorado + hecho." },
    { fase: "dominio", c: ["pi-decor"], k: "fill", ask: "Escribe dormir en imparfait (nous).", q: "Nous ___ quand l'alarme a sonné.", acc: ["dormions"], why: "<b>dormions</b>." },
    { fase: "dominio", c: ["pi-decor", "pi-fait"], k: "listen", say: "Quand j'étais petite, je vivais à Cúcuta.", acc: ["Quand j'étais petite, je vivais à Cúcuta.", "Quand j'étais petite je vivais à Cúcuta."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand j'étais petite, je vivais à Cúcuta.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Villa de Leyva", "Bogotá", "Pamplona", "Cúcuta"], previo: ["samedi", "dernier", "beau", "alors", "plage", "jour-là", "ce", "bus", "fatiguée", "contente", "soir", "cuisiner", "amis", "puis", "commencé", "pleuvoir", "lisais", "téléphone", "sonné", "vivais", "vécu", "deux", "ans", "dimanches", "grand-mère", "arepas", "dormions", "alarme", "l'alarme", "foot", "samedis", "télé", "bibliothèque", "sorti", "froid", "petit", "petite", "aller", "joue", "joué", "sonnait", "sonne", "allions"] }
};

E["a2-imperatif"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'impératif pour donner des conseils",
  objetivo: {
    que: "Vas a aconsejar con el imperativo: formas irregulares, verbos pronominales y pronombres.",
    corto: "Repose-toi !",
    podras: ["Usar sois, aie, sache, soyez.", "Formar repose-toi, dépêchons-nous.", "Poner el pronombre detrás (prends-le) o delante (ne le prends pas)."],
    iconos: ["m2d/senalar", "ic2/bombilla", "ic2/corazon"],
    previos: ["El imperativo de A1 (lección 36) y los pronombres (lecciones 9 a 12)."],
    capacidad: "Ahora puedes dar consejos y órdenes con pronombres."
  },
  requiere: R("im-forma", "im-er", "cod-forma", "cod-place", "coi-forma", "y-lieu", "pn-pres"), recupera: ["im-forma", "im-er"],
  conceptos: {
    "ip-irreg": { n: "sois, aie, sache, soyez; -er sin -s", b: "gr" },
    "ip-pron": { n: "afirmativo: prends-le, lève-toi; negativo: ne le prends pas", b: "gr" }
  },
  video: {
    titulo: "El imperativo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/senalar", grande: "Repose-toi !", seg: [
        { es: "Hola. Para aconsejar: el presente sin sujeto." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Prends-le ! Lève-toi !", es: "pronombre detrás" },
        b: { tag: "negativo", fr: "Ne le prends pas ! Ne te lève pas !", es: "pronombre delante" },
        seg: [ { es: "En afirmativo, el pronombre va detrás:", p: 1 }, { fr: "Prends-le !", p: 1 }, { es: "En negativo, delante:", p: 2 }, { fr: "Ne le prends pas !", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Escúchame!»", o: ["Écoute-moi !", "Écoutes-me !"], a: 0,
        bien: "¡Sí! Sin s, y me → moi.", mal: "Sin s en -er, y me se vuelve moi detrás.",
        seg: [ { es: "Pausa. Escúchame." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sois", "soyez", "aie", "sache", "va", "vas-y !", "dépêchons-nous"], seg: [
        { es: "Ojo: va, pero vas-y.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Consejos", img: "bg-universidad", yo: "camila",
    escena: "Camila está estresada antes del examen.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai mal à la tête et j'ai un examen demain !", "¡Me duele la cabeza y tengo un examen mañana!"],
      ["hugo", "Ne t'inquiète pas. Repose-toi un peu.", "No te preocupes. Descansa un poco."],
      ["hugo", "Révise tes notes, mais ne te couche pas tard. Et ne mange pas trop de sucre !", "Repasa tus apuntes, pero no te acuestes tarde. ¡Y no comas demasiado azúcar!"],
      ["camila", "Merci ! Bon, nous sommes en retard : dépêchons-nous !", "¡Gracias! Bueno, vamos tarde: ¡apurémonos!"]
    ],
    fijate: "Fíjate: ne t'inquiète pas, repose-toi, ne te couche pas, dépêchons-nous."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Imperativo con pronombres",
      idea: "Presente sin sujeto (tu, nous, vous). -er y aller: sin -s con tu (parle, va). Irregulares: sois / soyez, aie / ayez, sache / sachez. Afirmativo: pronombre detrás con guion (prends-le, lève-toi; me → moi, te → toi). Negativo: delante (ne le prends pas).",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Écoute-moi !", "¡Escúchame!", "me → moi"],
        ["Repose-toi.", "Descansa.", "te → toi"],
        ["Ne t'inquiète pas.", "No te preocupes.", "negativo"],
        ["Ne mange pas trop de sucre.", "No comas demasiado azúcar.", "-er sin s"],
        ["Il fait froid : prends ton manteau !", "Hace frío: ¡toma tu abrigo!", "prendre"],
        ["Soyez à l'heure.", "Sean puntuales.", "être"],
        ["Monsieur, soyez patient.", "Señor, sea paciente.", "être"],
        ["Sois sage !", "¡Pórtate bien!", "être"],
        ["Aie confiance.", "Ten confianza.", "avoir"],
        ["Sache que…", "Que sepas que…", "savoir"],
        ["Ce gâteau est délicieux : goûte-le !", "Este pastel está delicioso: ¡pruébalo!", "pronombre detrás"],
        ["Tu veux y aller ? Oui, vas-y !", "¿Quieres ir? ¡Sí, ve!", "va → vas-y"],
        ["Dépêchons-nous !", "¡Apurémonos!", "nous"]
      ]],
      ej: [["Prends-le.", "Tómalo."], ["Ne le prends pas.", "No lo tomes."], ["Lève-toi.", "Levántate."], ["Ne te lève pas.", "No te levantes."], ["Parle-lui.", "Háblale."], ["Ne lui parle pas.", "No le hables."], ["Aide-moi.", "Ayúdame."], ["Ne m'oublie pas.", "No me olvides."], ["fais", "haz"], ["révise tes notes", "repasa tus apuntes"], ["restez avec le groupe", "quédense con el grupo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Écoutes-me !", "Écoute-moi !", "Sin s; me → moi."], ["Ne te couches pas tard.", "Ne te couche pas tard.", "-er sin s."], ["Le goûte !", "Goûte-le !", "Afirmativo: detrás."], ["Soyes patient.", "Soyez patient.", "être: soyez."]] }
  ],
  ejemplos: [
    { sit: "Tu amigo tiene dolor de cabeza.", resp: "Repose-toi un peu !", pasos: ["se reposer → repose-toi."], porque: "Pronominal." },
    { sit: "«Niños, ¡pórtense bien!»", resp: "Les enfants, soyez sages !", pasos: ["être → soyez."], porque: "Irregular." },
    { sit: "«No lo tomes.»", resp: "Ne le prends pas.", pasos: ["Negativo: delante."], porque: "Pronombre." }
  ],
  comprueba: [
    { q: "En imperativo afirmativo, el pronombre va…", o: ["detrás, con guion", "delante"], a: 0, b: "gr", porque: "Prends-le." },
    { q: "El imperativo de être con vous es…", o: ["soyez", "êtes"], a: 0, b: "gr", porque: "Irregular." },
    { q: "Detrás del verbo, me se vuelve…", o: ["moi", "me"], a: 0, b: "gr", porque: "Écoute-moi." }
  ],
  practica: [
    { fase: "guiada", c: ["ip-pron"], k: "choice", ask: "¿Te duele la cabeza? ¡Descansa un poco!", q: "«Tu as mal à la tête ? ___ un peu !»", o: ["Repose-toi", "Te repose", "Reposes-toi"], a: 0, pista: "Pronombre detrás.", why: "<b>Repose-toi</b>." },
    { fase: "guiada", c: ["ip-irreg"], k: "match", ask: "Une cada infinitivo con su imperativo (tu).", q: "Infinitivo → imperativo", pairs: [["aller", "va"], ["être", "sois"], ["avoir", "aie"], ["faire", "fais"], ["savoir", "sache"]], pista: "être → sois.", why: "Irregulares." },
    { fase: "guiada", c: ["ip-irreg"], k: "choice", ask: "Para aprobar, ¡repasa tus apuntes!", q: "«Pour réussir l'examen, ___ tes notes tous les jours.»", o: ["révise", "révises", "tu révises"], a: 0, pista: "-er sin s.", why: "<b>révise</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "fill", ask: "Escribe prendre en imperativo (tu).", q: "Il fait froid : ___ ton manteau !", acc: ["prends"], why: "<b>prends</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "fill", ask: "Escribe être en imperativo (vous).", q: "Monsieur, ___ patient, s'il vous plaît.", acc: ["soyez"], why: "<b>soyez</b>." },
    { fase: "indep", c: ["ip-irreg"], k: "spot", ask: "Encuentra el error.", s: "Si tu es fatiguée , ne te [couches] pas tard .", fix: "couche", why: "<b>couche</b>." },
    { fase: "aplica", c: ["ip-pron"], k: "sort", ask: "¿Pronombre detrás o delante?", q: "Clasifica.", cats: ["Pronombre detrás (afirmativo)", "Pronombre delante (negativo)"], items: [["Prends-le.", 0], ["Lève-toi.", 0], ["Parle-lui.", 0], ["Aide-moi.", 0], ["Ne le prends pas.", 1], ["Ne te lève pas.", 1], ["Ne lui parle pas.", 1], ["Ne m'oublie pas.", 1]], why: "Posición." },
    { fase: "aplica", c: ["ip-pron"], k: "spot", ask: "Encuentra el error.", s: "Ce gâteau est délicieux : [le goûte] !", fix: "goûte-le", why: "<b>goûte-le</b>." },
    { fase: "dominio", c: ["ip-pron"], k: "choice", ask: "¿Quieres ir a la biblioteca? ¡Sí, ve!", q: "«Tu veux aller à la bibliothèque ? Oui, ___ !»", o: ["vas-y", "va-y", "y va"], a: 0, why: "<b>vas-y</b>." },
    { fase: "dominio", c: ["ip-pron"], k: "fill", ask: "Escribe se dépêcher en imperativo (nous).", q: "Nous sommes en retard : ___ !", acc: ["dépêchons-nous"], why: "<b>dépêchons-nous</b>." },
    { fase: "dominio", c: ["ip-irreg", "ip-pron"], k: "listen", say: "Ne t'inquiète pas pour l'examen.", acc: ["Ne t'inquiète pas pour l'examen."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ne t'inquiète pas pour l'examen.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["mal", "tête", "examen", "demain", "peu", "tes", "notes", "mais", "tard", "trop", "sucre", "merci", "bon", "retard", "froid", "ton", "manteau", "heure", "monsieur", "patient", "sage", "sages", "confiance", "gâteau", "délicieux", "veux", "aller", "bibliothèque", "enfants", "groupe", "fatiguée", "réussir", "tous", "jours", "pour", "goûte", "révises", "reposes", "va-y", "savoir", "aller", "être", "avoir", "faire"] }
};

E["a2-voyager"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Voyager : pays, villes et transports",
  objetivo: {
    que: "Vas a elegir la preposición de ciudades y países (à, en, au, aux; de, du, des) y de los transportes.",
    corto: "En France, au Canada, à Paris.",
    podras: ["Decir à Paris, en France, au Canada, aux États-Unis.", "Decir de dónde vienes: de France, du Mexique.", "Combinar con en bus, à pied."],
    iconos: ["ic2/mundo", "m2d/correr", "ic2/bandera"],
    previos: ["Los países (A1, lección 25) y los transportes (A1, lección 30)."],
    capacidad: "Ahora puedes hablar de tus viajes sin fallar las preposiciones."
  },
  requiere: R(), recupera: ["pn-prep", "tp-en", "tp-a"],
  conceptos: {
    "vo-aller": { n: "à + ciudad; en + país fem.; au + masc.; aux + plural", b: "gr" },
    "vo-venir": { n: "de + ciudad / país fem.; du, des", b: "gr" }
  },
  video: {
    titulo: "Ciudades y países", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "en France · au Canada", seg: [
        { es: "Hola. La preposición depende del lugar." } ] },
      { v: "frase", filas: [
          { nota: "ciudad", p: 1, partes: [["à Paris", "-", 1]] },
          { nota: "país femenino", p: 2, partes: [["en France · en Colombie", "-", 2]] },
          { nota: "país masculino", p: 3, partes: [["au Canada · au Mexique", "-", 3]] },
          { nota: "plural", p: 4, partes: [["aux États-Unis", "-", 4]] } ], seg: [
        { es: "Ciudad, à.", p: 1 }, { es: "País femenino, en.", p: 2 }, { es: "País masculino, au.", p: 3 }, { es: "Plural, aux.", p: 4 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera estudiar en Francia.»", o: ["Je voudrais étudier en France.", "Je voudrais étudier au France."], a: 0,
        bien: "¡Sí! France es femenino.", mal: "France termina en -e: femenino, en.",
        seg: [ { es: "Pausa. Francia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à Paris", "en France", "au Canada", "aux États-Unis", "de France", "du Mexique"], seg: [
        { es: "Para venir de: de, du, des.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Viajes", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo hablan de sus viajes.",
    pj: PJ,
    lineas: [
      ["hugo", "Cet été, je vais au Canada. Nous allons à Montréal en avion.", "Este verano voy a Canadá. Vamos a Montreal en avión."],
      ["camila", "Super ! Mon cousin habite aux États-Unis, et ma sœur vit en Espagne.", "¡Genial! Mi primo vive en Estados Unidos, y mi hermana vive en España."],
      ["hugo", "Et Luis ? — Il vient du Mexique. Il fait ses études à Lyon.", "¿Y Luis? — Viene de México. Estudia en Lyon."],
      ["camila", "Moi, je reviens du Chili la semaine prochaine.", "Yo vuelvo de Chile la semana que viene."]
    ],
    fijate: "Fíjate: au Canada, à Montréal, aux États-Unis, en Espagne, du Mexique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preposiciones de lugar",
      idea: "Ciudad: à / de. País femenino (casi todos en -e): en / de. País masculino: au / du. Plural: aux / des. Transporte: en si vas dentro (en bus), à si vas encima (à vélo, à pied).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["J'habite à Bogotá.", "Vivo en Bogotá.", "ciudad: à"],
        ["Elle fait ses études à Lyon.", "Estudia en Lyon.", "ciudad: à"],
        ["Je voudrais étudier en France.", "Quisiera estudiar en Francia.", "fem.: en"],
        ["Ma sœur vit en Espagne.", "Mi hermana vive en España.", "fem.: en"],
        ["Je vais au Mexique en avion.", "Voy a México en avión.", "masc.: au"],
        ["Cet été, je vais au Canada.", "Este verano voy a Canadá.", "masc.: au"],
        ["Mon cousin habite aux États-Unis.", "Mi primo vive en Estados Unidos.", "plural: aux"],
        ["Elle vient d'Espagne.", "Viene de España.", "fem.: de / d'"],
        ["Luis vient du Mexique.", "Luis viene de México.", "masc.: du"],
        ["Il revient des États-Unis.", "Vuelve de Estados Unidos.", "plural: des"],
        ["Je vais à la fac à pied.", "Voy a la universidad a pie.", "à pied"]
      ]],
      ej: [["la Colombie", "Colombia"], ["l'Italie", "Italia"], ["l'Allemagne", "Alemania"], ["le Brésil", "Brasil"], ["le Pérou", "Perú"], ["le Chili", "Chile"], ["les Pays-Bas", "los Países Bajos"], ["en train", "en tren"], ["à vélo", "en bicicleta"], ["à moto", "en moto"], ["le centre-ville", "el centro"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais en Paris en pied.", "Je vais à Paris à pied.", "Ciudad: à; a pie: à pied."], ["étudier au France", "étudier en France", "France es femenino."], ["Je vais en Canada.", "Je vais au Canada.", "Canada es masculino."], ["Il vient de Mexique.", "Il vient du Mexique.", "Masculino: du."]] }
  ],
  ejemplos: [
    { sit: "«Este verano voy a Canadá.»", resp: "Cet été, je vais au Canada.", pasos: ["Canada: masc. → au."], porque: "País masculino." },
    { sit: "«Mi hermana vive en España.»", resp: "Ma sœur vit en Espagne.", pasos: ["Espagne: fem. → en."], porque: "País femenino." },
    { sit: "«Vuelvo de Chile la semana que viene.»", resp: "Je reviens du Chili la semaine prochaine.", pasos: ["Chili: masc. → du."], porque: "Venir de." }
  ],
  comprueba: [
    { q: "Con una ciudad se usa…", o: ["à", "en"], a: 0, b: "gr", porque: "à Paris." },
    { q: "Con un país masculino se usa…", o: ["au", "en"], a: 0, b: "gr", porque: "au Canada." },
    { q: "Venir de un país masculino es…", o: ["du", "de"], a: 0, b: "gr", porque: "du Mexique." }
  ],
  practica: [
    { fase: "guiada", c: ["vo-aller"], k: "choice", ask: "«Este verano voy a Canadá.»", q: "«Cet été, je vais ___ Canada.»", o: ["au", "en", "à"], a: 0, pista: "Masculino.", why: "<b>au</b>." },
    { fase: "guiada", c: ["vo-aller"], k: "choice", ask: "«Mi primo vive en Estados Unidos.»", q: "«Mon cousin habite ___ États-Unis.»", o: ["aux", "au", "en"], a: 0, pista: "Plural.", why: "<b>aux</b>." },
    { fase: "guiada", c: ["vo-aller"], k: "sort", ask: "¿en, au o aux?", q: "Clasifica.", cats: ["en", "au", "aux"], items: [["Colombie", 0], ["Italie", 0], ["Allemagne", 0], ["Brésil", 1], ["Pérou", 1], ["Mexique", 1], ["Pays-Bas", 2], ["États-Unis", 2]], pista: "-e: femenino.", why: "Género del país." },
    { fase: "indep", c: ["vo-aller"], k: "fill", ask: "Escribe una palabra.", q: "Elle fait ses études ___ Lyon.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["vo-aller"], k: "fill", ask: "Escribe una palabra.", q: "Ma sœur vit ___ Espagne depuis deux ans.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["vo-venir"], k: "fill", ask: "Escribe una palabra.", q: "Luis vient ___ Mexique.", acc: ["du"], why: "<b>du</b>." },
    { fase: "aplica", c: ["vo-aller"], k: "spot", ask: "Encuentra el error.", s: "L'année prochaine , je voudrais étudier [au] France .", fix: "en", why: "<b>en France</b>." },
    { fase: "aplica", c: ["vo-aller"], k: "spot", ask: "Encuentra el error.", s: "Je vais à l'université [en] pied tous les jours .", fix: "à", why: "<b>à pied</b>." },
    { fase: "dominio", c: ["vo-venir"], k: "choice", ask: "«Vuelvo de Chile la semana que viene.»", q: "«Je reviens ___ Chili la semaine prochaine.»", o: ["du", "de", "au"], a: 0, why: "<b>du</b>." },
    { fase: "dominio", c: ["vo-aller"], k: "choice", ask: "«¿Vamos al centro en bus o a pie?»", q: "«On va au centre-ville ___ bus ou ___ pied ?»", o: ["en / à", "à / en", "en / en"], a: 0, why: "<b>en bus</b>, <b>à pied</b>." },
    { fase: "dominio", c: ["vo-aller", "vo-venir"], k: "listen", say: "Nous allons à Montréal en avion.", acc: ["Nous allons à Montréal en avion."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous allons à Montréal en avion.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal", "Luis", "Lyon", "Bogotá", "Paris", "Canada", "États-Unis", "Espagne", "Mexique", "Chili", "France", "Colombie", "Italie", "Allemagne", "Brésil", "Pérou", "Pays-Bas"], previo: ["cet", "été", "vais", "allons", "avion", "super", "mon", "cousin", "habite", "ma", "sœur", "vit", "vient", "fait", "ses", "études", "reviens", "revient", "semaine", "prochaine", "étudier", "voudrais", "année", "université", "l'université", "pied", "tous", "jours", "depuis", "deux", "ans", "centre-ville", "bus", "va", "fac", "vélo", "train", "moto"] }
};

E["a2-medecin"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Chez le médecin : le corps, avoir mal à, depuis et il y a",
  objetivo: {
    que: "Vas a decir qué te duele con avoir mal à + artículo, y desde cuándo con depuis o il y a.",
    corto: "J'ai mal à la gorge depuis hier.",
    podras: ["Decir j'ai mal au dos, à la gorge, aux dents.", "Usar depuis (sigue) e il y a (terminó).", "Entender al médico: Qu'est-ce qui ne va pas ? une ordonnance."],
    iconos: ["ic2/corazon", "m2d/triste", "ic2/bombilla"],
    previos: ["El cuerpo (Primeros pasos) y avoir (A1)."],
    capacidad: "Ahora puedes explicar tus síntomas en una consulta."
  },
  requiere: R("y-pers"), recupera: ["co2-cuerpo", "ad-a"],
  conceptos: {
    "me2-mal": { n: "avoir mal au / à la / à l' / aux + cuerpo", b: "gr" },
    "me2-depuis": { n: "depuis (sigue) / il y a (terminó)", b: "gr" }
  },
  video: {
    titulo: "En el médico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/triste", grande: "J'ai mal à la tête.", seg: [
        { es: "Hola. Para el dolor: avoir mal à, con artículo, nunca con posesivo." } ] },
      { v: "dos",
        a: { tag: "sigue hoy", fr: "Je tousse depuis trois jours.", es: "depuis" },
        b: { tag: "pasó y terminó", fr: "Je suis tombé il y a une semaine.", es: "il y a" },
        seg: [ { es: "Si todavía sigue:", p: 1 }, { fr: "Je tousse depuis trois jours.", p: 1 }, { es: "Si ya terminó:", p: 2 }, { fr: "Je suis tombé il y a une semaine.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Doctor, me duele la cabeza.»", o: ["Docteur, j'ai mal à la tête.", "Docteur, j'ai mal à ma tête."], a: 0,
        bien: "¡Sí! Con artículo.", mal: "No se usa posesivo: à la tête.",
        seg: [ { es: "Pausa. La cabeza." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au dos", "à la gorge", "à l'oreille", "aux dents", "depuis", "il y a"], seg: [
        { es: "Al, a la, a l', a los: como siempre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La consulta", img: "bg-universidad", yo: "camila",
    escena: "Camila va al médico.",
    pj: PJ,
    lineas: [
      ["sofia", "Bonjour. Qu'est-ce qui ne va pas ?", "Buenos días. ¿Qué le pasa?"],
      ["camila", "J'ai mal à la gorge et je tousse depuis trois jours.", "Me duele la garganta y toso desde hace tres días."],
      ["sofia", "Vous avez de la fièvre ? — Oui, ça fait deux jours que j'ai de la fièvre.", "¿Tiene fiebre? — Sí, hace dos días que tengo fiebre."],
      ["sofia", "Voici une ordonnance pour la pharmacie. Reposez-vous !", "Aquí tiene una receta para la farmacia. ¡Descanse!"]
    ],
    fijate: "Fíjate: j'ai mal à la gorge, depuis trois jours, ça fait deux jours que."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El dolor y el tiempo",
      idea: "avoir mal au / à la / à l' / aux + parte del cuerpo (artículo, nunca posesivo). depuis: empezó y sigue. il y a: pasó y terminó. Ça fait + tiempo + que = depuis.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["J'ai mal au ventre.", "Me duele el estómago.", "au"],
        ["J'ai mal à la gorge.", "Me duele la garganta.", "à la"],
        ["J'ai mal à l'oreille gauche.", "Me duele el oído izquierdo.", "à l'"],
        ["J'ai mal aux dents.", "Me duelen los dientes.", "aux"],
        ["J'ai mal au dos.", "Me duele la espalda.", "au"],
        ["Je tousse depuis trois jours.", "Toso desde hace tres días.", "depuis: sigue"],
        ["J'ai mal à la tête depuis hier.", "Me duele la cabeza desde ayer.", "depuis"],
        ["Je suis tombé il y a une semaine.", "Me caí hace una semana.", "il y a: terminó"],
        ["Je me suis cassé le bras il y a deux mois.", "Me rompí el brazo hace dos meses.", "il y a"],
        ["Ça fait deux jours que j'ai de la fièvre.", "Hace dos días que tengo fiebre.", "ça fait… que"],
        ["Qu'est-ce qui ne va pas ?", "¿Qué le pasa?", "médico"],
        ["une ordonnance", "una receta médica", "médico"]
      ]],
      ej: [["la gorge", "la garganta"], ["le dos", "la espalda"], ["le genou", "la rodilla"], ["le ventre", "el vientre, la barriga"], ["l'épaule", "el hombro"], ["la jambe", "la pierna"], ["l'estomac", "el estómago"], ["les pieds", "los pies"], ["les yeux", "los ojos"], ["tousser", "toser"], ["la fièvre", "la fiebre"], ["Ça continue.", "Sigue."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai mal à ma tête.", "J'ai mal à la tête.", "Artículo, no posesivo."], ["J'ai de la fièvre il y a trois jours.", "J'ai de la fièvre depuis trois jours.", "Sigue: depuis."], ["J'ai mal à le dos.", "J'ai mal au dos.", "à + le = au."]] }
  ],
  ejemplos: [
    { sit: "«Me duelen los dientes.»", resp: "J'ai mal aux dents.", pasos: ["à + les = aux."], porque: "Plural." },
    { sit: "«Toso desde hace una semana, y sigue.»", resp: "Je tousse depuis une semaine.", pasos: ["Sigue → depuis."], porque: "Duración." },
    { sit: "«Me rompí el brazo hace dos meses.»", resp: "Je me suis cassé le bras il y a deux mois.", pasos: ["Terminó → il y a."], porque: "Momento." }
  ],
  comprueba: [
    { q: "Con avoir mal à se usa…", o: ["el artículo", "el posesivo"], a: 0, b: "gr", porque: "à la tête." },
    { q: "Si el dolor todavía sigue, se usa…", o: ["depuis", "il y a"], a: 0, b: "gr", porque: "Sigue." },
    { q: "«une ordonnance» es…", o: ["una receta médica", "una orden de la policía"], a: 0, b: "gr", porque: "Médico." }
  ],
  practica: [
    { fase: "guiada", c: ["me2-mal"], k: "choice", ask: "«Doctor, me duele el estómago.»", q: "«Docteur, j'ai mal ___ ventre.»", o: ["au", "à le", "à la"], a: 0, pista: "le ventre.", why: "<b>au</b>." },
    { fase: "guiada", c: ["me2-mal"], k: "choice", ask: "«Le duelen los dientes.»", q: "«Elle a mal ___ dents.»", o: ["aux", "à les", "des"], a: 0, pista: "Plural.", why: "<b>aux</b>." },
    { fase: "guiada", c: ["me2-mal"], k: "sort", ask: "¿au, à la, à l' o aux?", q: "Clasifica.", cats: ["au", "à la", "à l'", "aux"], items: [["le dos", 0], ["le genou", 0], ["la gorge", 1], ["la jambe", 1], ["l'épaule", 2], ["l'estomac", 2], ["les pieds", 3], ["les yeux", 3]], pista: "Mira el artículo.", why: "Contracciones." },
    { fase: "indep", c: ["me2-mal"], k: "fill", ask: "Escribe à + artículo.", q: "J'ai mal ___ oreille gauche.", acc: ["à l'", "à l’"], why: "<b>à l'</b>." },
    { fase: "indep", c: ["me2-depuis"], k: "fill", ask: "Escribe una palabra (y sigue).", q: "Je tousse ___ une semaine, et ça continue.", acc: ["depuis"], why: "<b>depuis</b>." },
    { fase: "indep", c: ["me2-mal"], k: "spot", ask: "Encuentra el error.", s: "Docteur , j'ai mal à [ma] tête .", fix: "la", why: "<b>la</b>." },
    { fase: "aplica", c: ["me2-depuis"], k: "choice", ask: "«Me rompí el brazo hace dos meses.»", q: "«Je me suis cassé le bras ___ deux mois.»", o: ["il y a", "depuis", "pendant"], a: 0, why: "Terminó: <b>il y a</b>." },
    { fase: "aplica", c: ["me2-depuis"], k: "spot", ask: "Encuentra el error.", s: "J'ai de la fièvre [il y a] trois jours .", fix: "depuis", why: "<b>depuis</b>." },
    { fase: "dominio", c: ["me2-mal"], k: "match", ask: "Une cada parte del cuerpo.", q: "Francés → español", pairs: [["la gorge", "la garganta"], ["le dos", "la espalda"], ["le genou", "la rodilla"], ["le ventre", "el vientre"], ["l'épaule", "el hombro"]], why: "El cuerpo." },
    { fase: "dominio", c: ["me2-depuis"], k: "fill", ask: "Escribe una palabra.", q: "Ça fait deux jours ___ j'ai de la fièvre.", acc: ["que"], why: "<b>que</b>." },
    { fase: "dominio", c: ["me2-mal", "me2-depuis"], k: "listen", say: "J'ai mal à la tête depuis hier.", acc: ["J'ai mal à la tête depuis hier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai mal à la tête depuis hier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["qu'est-ce", "qui", "va", "pas", "tousse", "trois", "jours", "avez", "fièvre", "fait", "deux", "voici", "pour", "pharmacie", "reposez-vous", "mal", "tête", "oreille", "gauche", "dents", "semaine", "tombé", "cassé", "bras", "mois", "hier", "docteur", "continue", "pendant", "une"] }
};

E["a2-participes-irreguliers"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les participes passés irréguliers",
  objetivo: {
    que: "Vas a dominar los participios irregulares agrupados por terminación: -u, -is / -it y otros.",
    corto: "vu, pris, fait, été.",
    podras: ["Recordar los participios en -u: eu, vu, lu, bu, pu, voulu, venu.", "Recordar los de -is / -it: pris, mis, dit, écrit, fait.", "Recordar été, né, mort, ouvert."],
    iconos: ["ic2/libros", "ic2/lapiz", "ic2/trofeo"],
    previos: ["El passé composé (lecciones 1 y 2)."],
    capacidad: "Ahora no te equivocas con los participios más usados."
  },
  requiere: R("pca-forma", "pca-irreg", "pce-verbes"), recupera: ["pca-irreg"],
  conceptos: {
    "pi2-u": { n: "-u: eu, vu, lu, bu, pu, voulu, venu", b: "gr" },
    "pi2-is": { n: "-is / -it: pris, mis, dit, écrit, fait; été, né, mort, ouvert", b: "gr" }
  },
  video: {
    titulo: "Participios irregulares", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "j'ai pris", seg: [
        { es: "Hola. Los irregulares se aprenden en familias." } ] },
      { v: "frase", filas: [
          { nota: "en -u", p: 1, partes: [["eu · vu · lu · bu · pu · voulu · venu", "-", 1]] },
          { nota: "en -is / -it", p: 2, partes: [["pris · mis · dit · écrit · fait", "-", 2]] },
          { nota: "otros", p: 3, partes: [["été · né · mort · ouvert", "-", 3]] } ], seg: [
        { es: "La familia de la u,", p: 1 }, { es: "la familia de is e it,", p: 2 }, { es: "y unos sueltos.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vimos una película muy buena.»", o: ["Nous avons vu un très bon film.", "Nous avons voyé un très bon film."], a: 0,
        bien: "¡Sí! Voir → vu.", mal: "El participio de voir es vu.",
        seg: [ { es: "Pausa. Ver." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir → eu", "être → été", "mettre → mis", "lire → lu", "dire → dit", "ouvrir → ouvert"], seg: [
        { es: "Eu suena como la u francesa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen", img: "bg-universidad", yo: "camila",
    escena: "Camila cuenta su día a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Hier, j'ai pris le train pour Lyon. Nous avons eu un examen difficile.", "Ayer tomé el tren a Lyon. Tuvimos un examen difícil."],
      ["hugo", "Tu as lu le livre avant ?", "¿Leíste el libro antes?"],
      ["camila", "Oui, je l'ai lu. Le soir, nous avons vu un très bon film et nous avons bu du vin rouge.", "Sí, lo leí. Por la noche vimos una película muy buena y tomamos vino tinto."],
      ["hugo", "Tu as écrit à ta mère ? — Oui, elle a dit : bravo !", "¿Le escribiste a tu mamá? — Sí, dijo: ¡bravo!"]
    ],
    fijate: "Fíjate: pris, eu, lu, vu, bu, écrit, dit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Familias de participios",
      idea: "-u: avoir → eu, voir → vu, lire → lu, boire → bu, pouvoir → pu, vouloir → voulu, venir → venu. -is / -it: prendre → pris, mettre → mis, dire → dit, écrire → écrit, faire → fait. Otros: être → été, naître → né, mourir → mort, ouvrir → ouvert.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Familia"], [
        ["Nous avons eu un examen difficile.", "Tuvimos un examen difícil.", "-u"],
        ["Hier soir, nous avons vu un film.", "Anoche vimos una película.", "-u"],
        ["Tu as lu ce livre ?", "¿Leíste este libro?", "-u"],
        ["Nous avons bu du vin rouge.", "Tomamos vino tinto.", "-u"],
        ["Je n'ai pas pu venir.", "No pude venir.", "-u"],
        ["Il a voulu partir.", "Quiso irse.", "-u"],
        ["Hier, j'ai pris le train pour Lyon.", "Ayer tomé el tren a Lyon.", "-is"],
        ["J'ai mis mon manteau.", "Me puse el abrigo.", "-is"],
        ["Elle a dit : bravo !", "Dijo: ¡bravo!", "-it"],
        ["Elle a écrit une lettre.", "Escribió una carta.", "-it"],
        ["Hier, j'ai fait du sport.", "Ayer hice deporte.", "-ait"],
        ["J'ai été malade.", "Estuve enfermo.", "otros"],
        ["Il a ouvert la fenêtre.", "Abrió la ventana.", "otros"]
      ]],
      ej: [["venir → venu", "venido"], ["naître → né", "nacido"], ["mourir → mort", "muerto"], ["prendre", "tomar"], ["voir", "ver"], ["avoir", "tener"], ["être", "ser, estar"], ["mettre", "poner"], ["lire", "leer"], ["dire", "decir"], ["écrire", "escribir"], ["boire", "beber"], ["le journal", "el periódico"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["j'ai prendu", "j'ai pris", "prendre → pris."], ["nous avons voyé", "nous avons vu", "voir → vu."], ["j'ai mettu", "j'ai mis", "mettre → mis."], ["il a ouvri", "il a ouvert", "ouvrir → ouvert."]] }
  ],
  ejemplos: [
    { sit: "«Ayer hice deporte.»", resp: "Hier, j'ai fait du sport.", pasos: ["faire → fait."], porque: "Irregular." },
    { sit: "«Tomamos vino tinto.»", resp: "Nous avons bu du vin rouge.", pasos: ["boire → bu."], porque: "-u." },
    { sit: "«¿Leíste el periódico?»", resp: "Tu as lu le journal ?", pasos: ["lire → lu."], porque: "-u." }
  ],
  comprueba: [
    { q: "El participio de avoir es…", o: ["eu", "avu"], a: 0, b: "gr", porque: "eu." },
    { q: "El participio de mettre es…", o: ["mis", "mettu"], a: 0, b: "gr", porque: "-is." },
    { q: "El participio de ouvrir es…", o: ["ouvert", "ouvri"], a: 0, b: "gr", porque: "Otros." }
  ],
  practica: [
    { fase: "guiada", c: ["pi2-is"], k: "choice", ask: "prendre → ?", q: "«j'ai ___»", o: ["pris", "prendu", "prit"], a: 0, pista: "-is.", why: "<b>pris</b>." },
    { fase: "guiada", c: ["pi2-u"], k: "choice", ask: "voir → ?", q: "«j'ai ___»", o: ["vu", "voyé", "vi"], a: 0, pista: "-u.", why: "<b>vu</b>." },
    { fase: "guiada", c: ["pi2-u", "pi2-is"], k: "sort", ask: "¿En -u o en -is / -it?", q: "Clasifica.", cats: ["en -u", "en -is / -it"], items: [["vu", 0], ["lu", 0], ["bu", 0], ["voulu", 0], ["pris", 1], ["mis", 1], ["dit", 1], ["écrit", 1]], pista: "Mira la terminación.", why: "Familias." },
    { fase: "indep", c: ["pi2-is"], k: "fill", ask: "Escribe el participio de écrire.", q: "Elle a ___ une lettre à sa grand-mère.", acc: ["écrit"], why: "<b>écrit</b>." },
    { fase: "indep", c: ["pi2-u"], k: "fill", ask: "Escribe el participio de boire.", q: "Nous avons ___ du vin rouge.", acc: ["bu"], why: "<b>bu</b>." },
    { fase: "indep", c: ["pi2-u"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , nous avons [voyé] un très bon film .", fix: "vu", why: "<b>vu</b>." },
    { fase: "aplica", c: ["pi2-u", "pi2-is"], k: "match", ask: "Une cada infinitivo con su participio.", q: "Infinitivo → participio", pairs: [["avoir", "eu"], ["être", "été"], ["mettre", "mis"], ["lire", "lu"], ["dire", "dit"]], why: "Irregulares." },
    { fase: "aplica", c: ["pi2-is"], k: "choice", ask: "«Ayer hice deporte.»", q: "«___»", o: ["Hier, j'ai fait du sport.", "Hier, j'ai faisé du sport.", "Hier, j'ai faire du sport."], a: 0, why: "<b>fait</b>." },
    { fase: "dominio", c: ["pi2-is"], k: "fill", ask: "Escribe el participio de ouvrir.", q: "Il a ___ la fenêtre.", acc: ["ouvert"], why: "<b>ouvert</b>." },
    { fase: "dominio", c: ["pi2-u"], k: "order", ask: "Ordena: «¿Leíste el periódico?».", tokens: ["Tu as", "lu", "le journal ?"], why: "<b>Tu as lu le journal ?</b>" },
    { fase: "dominio", c: ["pi2-u", "pi2-is"], k: "listen", say: "Hier, j'ai pris le train pour Lyon.", acc: ["Hier, j'ai pris le train pour Lyon.", "Hier j'ai pris le train pour Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier, j'ai pris le train pour Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["hier", "train", "pour", "examen", "difficile", "livre", "avant", "soir", "très", "bon", "film", "vin", "rouge", "ta", "mère", "bravo", "venir", "partir", "manteau", "lettre", "sa", "grand-mère", "sport", "malade", "fenêtre", "voyé", "prendu", "prit", "vi", "faisé", "faire"] }
};

E["a2-pc-negation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le passé composé : négation et questions",
  objetivo: {
    que: "Vas a negar y preguntar en passé composé: je n'ai pas mangé, as-tu mangé ?",
    corto: "Je n'ai jamais vu la mer.",
    podras: ["Poner ne… pas alrededor del auxiliar.", "Usar jamais, rien, personne, pas encore.", "Preguntar en tres registros: Tu as mangé ? / Est-ce que… / As-tu mangé ? A-t-il… ?"],
    iconos: ["m2d/pensativo", "ic2/pregunta", "ic2/reloj-arena"],
    previos: ["El passé composé (lecciones 1, 2 y 18) y las preguntas (A1, lección 57)."],
    capacidad: "Ahora puedes preguntar y negar en pasado con cualquier registro."
  },
  requiere: R("pca-forma", "pca-neg", "pca-irreg", "pce-verbes", "pce-accord", "pi2-u", "pi2-is"), recupera: ["pca-neg", "it-reg"],
  conceptos: {
    "pcn-neg": { n: "ne + auxiliar + pas / jamais / rien + participio", b: "gr" },
    "pcn-q": { n: "Tu as… ? / Est-ce que… ? / As-tu… ? A-t-il… ?", b: "gr" }
  },
  video: {
    titulo: "Negar y preguntar en pasado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "m2d/pensativo", grande: "Je n'ai pas mangé.", seg: [
        { es: "Hola. Ne y pas abrazan al auxiliar, no al participio." } ] },
      { v: "frase", filas: [
          { nota: "oral", p: 1, partes: [["Tu as mangé ?", "-", 1]] },
          { nota: "neutro", p: 2, partes: [["Est-ce que tu as mangé ?", "-", 2]] },
          { nota: "formal", p: 3, partes: [["As-tu mangé ? A-t-il compris ?", "-", 3]] } ], seg: [
        { es: "Con amigos,", p: 1 }, { es: "en cualquier lugar,", p: 2 }, { es: "formal: con il, se añade te.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No comí.»", o: ["Je n'ai pas mangé.", "Je n'ai mangé pas."], a: 0,
        bien: "¡Sí! Pas antes del participio.", mal: "Pas va justo después del auxiliar.",
        seg: [ { es: "Pausa. No comí." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["n'ai pas", "n'ai jamais", "n'ai rien", "n'ai vu personne", "pas encore", "A-t-il… ?"], seg: [
        { es: "Ojo: personne va después del participio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Has ido a Francia?", img: "bg-cafe", yo: "camila",
    escena: "Hugo le hace preguntas a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Avez-vous déjà visité Paris ?", "¿Ya ha visitado París? (en broma, formal)"],
      ["camila", "Non, je n'ai jamais visité Paris ! Et ma sœur n'est jamais allée en France.", "¡No, nunca he visitado París! Y mi hermana nunca ha ido a Francia."],
      ["hugo", "Tu as mangé ? — Non, je n'ai pas encore mangé.", "¿Comiste? — No, todavía no he comido."],
      ["camila", "Et Paul ? A-t-il compris la question ? — Non, il n'a rien dit.", "¿Y Paul? ¿Entendió la pregunta? — No, no dijo nada."]
    ],
    fijate: "Fíjate: je n'ai jamais visité, je n'ai pas encore mangé, a-t-il compris, il n'a rien dit."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Negación y preguntas",
      idea: "Negación: ne + auxiliar + pas / jamais / rien / plus + participio. Personne va después del participio. Preguntas: Tu as mangé ? (oral) / Est-ce que tu as mangé ? (neutro) / As-tu mangé ? (formal); con il / elle: A-t-il compris ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Je n'ai pas fini.", "No he terminado.", "ne… pas"],
        ["Je n'ai pas compris la question.", "No entendí la pregunta.", "ne… pas"],
        ["Elle n'est pas venue.", "No vino.", "être"],
        ["Elle n'est jamais allée en France.", "Nunca ha ido a Francia.", "jamais"],
        ["Nous n'avons rien acheté.", "No compramos nada.", "rien"],
        ["Je n'ai vu personne.", "No vi a nadie.", "personne: después"],
        ["Je n'ai pas encore mangé.", "Todavía no he comido.", "pas encore"],
        ["Je ne l'ai jamais vu.", "Nunca lo he visto.", "con pronombre"],
        ["Tu as mangé ?", "¿Comiste?", "oral"],
        ["Est-ce que tu as mangé ?", "¿Comiste?", "neutro"],
        ["As-tu mangé ?", "¿Comiste?", "formal"],
        ["Avez-vous déjà visité Paris ?", "¿Ya ha visitado París?", "formal"],
        ["A-t-il compris ?", "¿Entendió?", "-t-"]
      ]],
      ej: [["T'as vu le film ?", "¿Viste la peli?"], ["Vous avez fini ?", "¿Terminaron?"], ["Il est parti ?", "¿Se fue?"], ["Avez-vous fini ?", "¿Han terminado?"], ["Est-il parti ?", "¿Se fue?"], ["A-t-elle répondu ?", "¿Respondió?"], ["Je n'ai rien vu.", "No vi nada."], ["la mer", "el mar"], ["déjà", "ya"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'ai mangé pas.", "Je n'ai pas mangé.", "pas antes del participio."], ["Elle n'a pas venue.", "Elle n'est pas venue.", "venir: être."], ["Je n'ai personne vu.", "Je n'ai vu personne.", "personne: después."], ["A il compris ?", "A-t-il compris ?", "Se añade -t-."]] }
  ],
  ejemplos: [
    { sit: "«Nunca he visitado Canadá.»", resp: "Nous n'avons jamais visité le Canada.", pasos: ["ne + avons + jamais + visité."], porque: "jamais." },
    { sit: "«No vi a nadie.»", resp: "Je n'ai vu personne.", pasos: ["personne después."], porque: "Excepción." },
    { sit: "«¿Entendió él?» (formal)", resp: "A-t-il compris ?", pasos: ["Inversión + -t-."], porque: "Formal." }
  ],
  comprueba: [
    { q: "En passé composé, pas va…", o: ["después del auxiliar", "después del participio"], a: 0, b: "gr", porque: "n'ai pas mangé." },
    { q: "Personne va…", o: ["después del participio", "antes del participio"], a: 0, b: "gr", porque: "n'ai vu personne." },
    { q: "En «A-t-il compris ?», la -t- sirve…", o: ["para unir dos vocales", "para el plural"], a: 0, b: "gr", porque: "Sonido." }
  ],
  practica: [
    { fase: "guiada", c: ["pcn-neg"], k: "choice", ask: "«No he terminado.»", q: "«___»", o: ["Je n'ai pas fini.", "Je n'ai fini pas.", "Je ne pas ai fini."], a: 0, pista: "Alrededor del auxiliar.", why: "<b>Je n'ai pas fini.</b>" },
    { fase: "guiada", c: ["pcn-neg"], k: "choice", ask: "«Ella no vino.»", q: "«___»", o: ["Elle n'est pas venue.", "Elle n'a pas venue.", "Elle n'est venue pas."], a: 0, pista: "venir: être.", why: "<b>Elle n'est pas venue.</b>" },
    { fase: "guiada", c: ["pcn-q"], k: "sort", ask: "¿Oral o formal?", q: "Clasifica.", cats: ["Oral", "Formal"], items: [["Tu as mangé ?", 0], ["T'as vu le film ?", 0], ["Vous avez fini ?", 0], ["Il est parti ?", 0], ["As-tu mangé ?", 1], ["Avez-vous fini ?", 1], ["Est-il parti ?", 1], ["A-t-elle répondu ?", 1]], pista: "Inversión: formal.", why: "Registros." },
    { fase: "indep", c: ["pcn-neg"], k: "fill", ask: "Completa la negación.", q: "Nous ___ avons rien acheté.", acc: ["n'"], why: "<b>n'</b>." },
    { fase: "indep", c: ["pcn-neg"], k: "fill", ask: "Escribe «nunca».", q: "Il n'a ___ vu la mer.", acc: ["jamais"], why: "<b>jamais</b>." },
    { fase: "indep", c: ["pcn-neg"], k: "spot", ask: "Encuentra el error.", s: "Elle [n'a] pas venue à la fête .", fix: "n'est", why: "<b>n'est</b>." },
    { fase: "aplica", c: ["pcn-q"], k: "choice", ask: "«¿Ha comprendido él?» (formal)", q: "«___»", o: ["A-t-il compris ?", "A il compris ?", "Il a-t-compris ?"], a: 0, why: "<b>A-t-il</b>." },
    { fase: "aplica", c: ["pcn-neg"], k: "match", ask: "Une cada frase.", q: "Francés → español", pairs: [["Je n'ai rien vu.", "No vi nada."], ["Je n'ai vu personne.", "No vi a nadie."], ["Je ne l'ai jamais vu.", "Nunca lo he visto."], ["Je n'ai pas encore mangé.", "Todavía no he comido."]], why: "Negaciones." },
    { fase: "dominio", c: ["pcn-neg"], k: "choice", ask: "«No vi a nadie.»", q: "«___»", o: ["Je n'ai vu personne.", "Je n'ai personne vu.", "Je n'ai pas vu personne."], a: 0, why: "<b>Je n'ai vu personne.</b>" },
    { fase: "dominio", c: ["pcn-neg"], k: "order", ask: "Ordena: «Nunca hemos visitado Canadá».", tokens: ["Nous", "n'avons jamais", "visité", "le Canada."], why: "<b>Nous n'avons jamais visité le Canada.</b>" },
    { fase: "dominio", c: ["pcn-neg", "pcn-q"], k: "listen", say: "Avez-vous déjà visité Paris ?", acc: ["Avez-vous déjà visité Paris ?", "Avez-vous déjà visité Paris?", "Avez-vous déjà visité Paris"], num: false, dict: true, ask: "Escucha la pregunta y escríbela.", why: "Era <b>Avez-vous déjà visité Paris ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Paris", "France", "Canada"], previo: ["visité", "ma", "sœur", "allée", "mangé", "encore", "compris", "question", "dit", "fini", "venue", "acheté", "vu", "mer", "film", "parti", "répondu", "fête", "ai", "avons", "a", "est", "ne", "pas"] }
};

})();
