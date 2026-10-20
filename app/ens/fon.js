/* PLEX PLAY 4.57 — Sistema de enseñanza: las fichas del curso «Fonética y ortografía» (fon). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también A2, el curso anterior).
   Fonética parte de A2: BASE son todos los conceptos de Primeros pasos, A1 y A2, que las fichas dan por enseñados.
   Las transcripciones [ ] van en las explicaciones en español; los ejercicios evalúan palabras francesas y sonidos grabados.
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
  "if-inf", "if-neg", "ae-sens", "ae-besoin", "bn-voyelle", "bn-fem", "pl2-s", "pl2-x", "cm-corps", "cm-cadre",
  "pca-forma", "pca-irreg", "pca-neg", "pce-verbes", "pce-accord", "imp-forma", "imp-uso", "fu-proche", "fu-simple", "fu-irreg",
  "pn-pres", "pn-pc", "pt3-choix", "pt3-gout", "cmp-adj", "cmp-nom", "cmp-sup", "pr-mapa", "pr-place", "cod-forma",
  "cod-place", "coi-forma", "coi-vs", "y-lieu", "y-pers", "en-part", "en-qte", "ch-arbre", "ch-pc", "pi-decor",
  "pi-fait", "ip-irreg", "ip-pron", "vo-aller", "vo-venir", "me2-mal", "me2-depuis", "pi2-u", "pi2-is", "pcn-neg",
  "pcn-q", "pp2-forme", "pp2-neg", "mp-mots", "mp-ilya", "rw-conn", "rw-avis", "ih-forme", "ih-marq", "so-souvenir",
  "so-voc", "vd-forme", "vd-oppose", "de-deja", "de-plus", "dp-depuis", "dp-pendant", "bi-verbes", "bi-dates", "ae2-forme",
  "ae2-mixte", "al-proc", "al-prob", "sd-essayer", "sd-avis", "mm-meilleur", "mm-mieux", "bu-verbes", "bu-noms", "la-annonce",
  "la-visite", "co3-devoir", "co3-interdit", "ob2-mat", "ob2-usage", "rc-probleme", "rc-demande", "pv-futur", "pv-voc", "tr-fetes",
  "tr-faire", "et-horaire", "et-contrat", "ipr-pos", "ipr-moi", "sc-conseil", "sc-eviter", "qq2-qui", "qq2-que", "po2-air",
  "po2-carac", "rl-verbes", "rl-passe", "to-forme", "to-expr", "se-etre", "se-ca", "cc-forme", "cc-conseil", "pr2-proposer",
  "pr2-repondre", "ex-pardon", "ex-repondre", "ad2-moi", "ad2-accord", "rs-verbes", "rs-noms", "vc2-verbes", "vc2-pron", "rc2-decor",
  "rc2-action", "rv-billet", "rv-vol", "ae3-etapes", "ae3-annonce", "ga-lieux", "ga-probleme", "dv-adj", "dv-onpeut", "rv2-structure",
  "rv2-conclusion", "fi-racines", "fi-marq", "sf-forme", "sf-sil", "ca3-frase", "ca3-nom", "cs2-mots", "cs2-vs", "na2-mots",
  "na2-sujet", "pj2-intention", "pj2-compte", "qt-nom", "qt-verbe", "am2-place", "am2-adj"];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ FON·1 a FON·3 ================================ */

E["fon-voyelles-orales"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "El sistema vocálico: [y] y [u]",
  objetivo: {
    que: "Vas a distinguir y pronunciar [y] (tu, rue) y [u] (tout, roue), el par de vocales que más cambia el significado.",
    corto: "tu ≠ tout, rue ≠ roue.",
    podras: ["Pronunciar [y]: lengua de «i», labios de «u».", "Leer u como [y] y ou como [u].", "Distinguir al oído tu / tout, rue / roue, dessus / dessous."],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/pensativo"],
    previos: ["Los sonidos del francés (Primeros pasos) y todo el vocabulario de A1 y A2."],
    capacidad: "Ahora ya no confundes la calle con la rueda."
  },
  requiere: R(), recupera: ["so-u"],
  conceptos: {
    "fv-y": { n: "[y]: la letra u (tu, rue, sûr)", b: "phono" },
    "fv-u": { n: "[u]: las letras ou (tout, roue, sous)", b: "phono" }
  },
  video: {
    titulo: "La u francesa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "tu ≠ tout", seg: [
        { es: "Hola. El francés tiene una vocal que el español no tiene: la u de tu." } ] },
      { v: "frase", filas: [
          { nota: "1. di «i»", p: 1, partes: [["i", "-", 1]] },
          { nota: "2. redondea los labios", p: 2, partes: [["tu", "-", 2]] },
          { nota: "3. compara", p: 3, partes: [["tu · tout", "-", 3]] } ], seg: [
        { es: "Di i, sin mover la lengua,", p: 1 }, { es: "y redondea los labios como para u. Eso es la u francesa:", p: 2 }, { fr: "tu", p: 2 }, { es: "Y compárala con ou:", p: 3 }, { fr: "tu, tout", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vivo en una calle pequeña.»", o: ["J'habite dans une petite rue.", "J'habite dans une petite roue."], a: 0,
        bien: "¡Sí! Rue, con u.", mal: "Roue es la rueda. La calle es rue.",
        seg: [ { es: "Pausa. ¿Calle o rueda?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tu", "tout", "rue", "roue", "dessus", "dessous", "sûr"], seg: [
        { es: "u suena como tu; ou, como la u española.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La dirección", img: "bg-paris", yo: "camila",
    escena: "Camila le da su dirección a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu habites où ?", "¿Dónde vives?"],
      ["camila", "J'habite rue Pasteur. La rue, pas la roue !", "Vivo en la calle Pasteur. ¡La calle, no la rueda!"],
      ["hugo", "Et ton vélo ? — Il est sous la table, pas dessus !", "¿Y tu bicicleta? — ¡Está debajo de la mesa, no encima!"],
      ["camila", "Tu es sûr ? — Oui, je suis sûr. Tout va bien.", "¿Estás seguro? — Sí, estoy seguro. Todo va bien."]
    ],
    fijate: "Fíjate: tu, rue, sûr con [y]; tout, roue, sous con [u]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[y] y [u]",
      idea: "La letra u suena [y]: lengua de «i» y labios redondos (tu, rue, dessus, sûr). Las letras ou suenan [u], la u española (tout, vous, roue, dessous). Cambiar una por otra cambia la palabra.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "tu", es: "tú — [y]" },
        { fr: "tout", es: "todo — [u]" },
        { fr: "la rue", es: "la calle — [y]", ej: ["J'habite rue Pasteur.", "Vivo en la calle Pasteur."] },
        { fr: "la roue", es: "la rueda — [u]" },
        { fr: "dessus", es: "encima — [y]" },
        { fr: "dessous", es: "debajo — [u]" },
        { fr: "sûr", es: "seguro — [y]", ej: ["C'est sûr ! L'examen est lundi.", "¡Es seguro! El examen es el lunes."] },
        { fr: "sous", es: "debajo de — [u]", ej: ["Le chat dort sous la table.", "El gato duerme debajo de la mesa."] },
        { fr: "lu", es: "leído — [y]" },
        { fr: "le loup", es: "el lobo — [u]" },
        { fr: "le goût", es: "el gusto, el sabor — [u]" },
        { fr: "le jour", es: "el día — [u]" }
      ],
      clave: "Truco: di «i» y pon los labios de «u» → [y]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["tu (dicho con la u española)", "tu", "Con la u española se oye tout (todo). Labios redondos y lengua de i."], ["J'habite dans une petite roue.", "J'habite dans une petite rue.", "rue = calle; roue = rueda."], ["dessous (para decir encima)", "dessus", "Encima: dessus, con la u de tu."]] }
  ],
  ejemplos: [
    { sit: "Quieres decir «la calle».", resp: "la rue", pasos: ["u → [y]: labios redondos, lengua de i."], porque: "rue ≠ roue." },
    { sit: "Quieres decir «todo».", resp: "tout", pasos: ["ou → [u], como en español."], porque: "tout ≠ tu." },
    { sit: "«El gato duerme debajo de la mesa.»", resp: "Le chat dort sous la table.", pasos: ["sous: ou → [u]."], porque: "sous ≠ sur." }
  ],
  comprueba: [
    { q: "Para pronunciar [y] hay que…", o: ["poner la lengua como para [i] y redondear los labios", "decir la u española"], a: 0, b: "phono", porque: "Lengua de i, labios de u." },
    { q: "Las letras ou suenan…", o: ["como la u española", "como la u de tu"], a: 0, b: "phono", porque: "ou = [u]." },
    { q: "La palabra jour tiene el sonido…", o: ["[u], como la u española", "[y], como tu"], a: 0, b: "phono", porque: "ou." }
  ],
  practica: [
    { fase: "guiada", c: ["fv-y"], k: "choice", es: true, say: "la rue", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la calle (rue)", "la rueda (roue)"], a: 0, pista: "Labios redondos y lengua de i.", why: "<b>rue</b> [y]." },
    { fase: "guiada", c: ["fv-y", "fv-u"], k: "sort", ask: "¿[y] como tu o [u] como tout?", q: "Clasifica.", cats: ["[y] (u)", "[u] (ou)"], items: [["tu", 0], ["dessus", 0], ["sûr", 0], ["lu", 0], ["tout", 1], ["dessous", 1], ["goût", 1], ["loup", 1]], pista: "u = [y]; ou = [u].", why: "Grafía y sonido." },
    { fase: "guiada", c: ["fv-u"], k: "choice", es: true, say: "tout", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["todo (tout)", "tú (tu)"], a: 0, pista: "Suena como la u española.", why: "<b>tout</b> [u]." },
    { fase: "indep", c: ["fv-y", "fv-u"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["la rue", "la calle"], ["la roue", "la rueda"], ["dessus", "encima"], ["dessous", "debajo"]], why: "Pares mínimos." },
    { fase: "indep", c: ["fv-y"], k: "spot", ask: "Encuentra el error.", s: "J'habite dans une petite [roue] près de la mairie .", fix: "rue", why: "<b>rue</b>." },
    { fase: "indep", c: ["fv-u"], k: "fill", ask: "Escribe «debajo de» (se pronuncia [su]).", q: "Le chat dort ___ la table.", acc: ["sous"], why: "<b>sous</b>." },
    { fase: "aplica", c: ["fv-y"], k: "fill", ask: "Escribe «seguro» (con acento circunflejo).", q: "C'est ___ ! L'examen est lundi.", acc: ["sûr"], why: "<b>sûr</b>." },
    { fase: "aplica", c: ["fv-y", "fv-u"], k: "choice", es: true, say: "dessous", ask: "Escucha. ¿Encima o debajo?", q: "Elige.", o: ["debajo (dessous)", "encima (dessus)"], a: 0, why: "<b>dessous</b> [u]." },
    { fase: "dominio", c: ["fv-u"], k: "choice", ask: "¿En qué palabra la u NO suena [y]?", q: "«___»", o: ["jour", "rue", "tu"], a: 0, why: "En <b>jour</b> va ou → [u]." },
    { fase: "dominio", c: ["fv-y", "fv-u"], k: "order", ask: "Ordena: «La calle, no la rueda».", tokens: ["La rue,", "pas", "la roue !"], why: "<b>La rue, pas la roue !</b>" },
    { fase: "dominio", c: ["fv-y", "fv-u"], k: "listen", say: "Tu es sûr ? Tout va bien.", acc: ["Tu es sûr ? Tout va bien.", "Tu es sûr? Tout va bien.", "Tu es sûr ? Tout va bien !"], num: false, dict: true, ask: "Escucha y escribe.", why: "Era <b>Tu es sûr ? Tout va bien.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pasteur"], previo: ["habites", "j'habite", "où", "pas", "vélo", "table", "chat", "dort", "mairie", "petite", "près", "examen", "lundi", "va", "bien", "suis", "es"] }
};

E["fon-e-eu"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Las vocales [e], [ɛ], [ə], [ø] y [œ]",
  objetivo: {
    que: "Vas a distinguir las «e» del francés: cerrada [e], abierta [ɛ], débil [ə], y las eu [ø] / [œ].",
    corto: "le ≠ les, peu ≠ peur.",
    podras: ["Leer é como [e] y è, ê, ai como [ɛ].", "Pronunciar la e débil de le, de, ce.", "Distinguir le / les y de / des al oído."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/lapiz"],
    previos: ["La u francesa (lección 1)."],
    capacidad: "Ahora distingues el singular del plural solo por el sonido."
  },
  requiere: R("fv-y", "fv-u"), recupera: ["fv-y"],
  conceptos: {
    "fe-e": { n: "é [e] / è, ê, ai [ɛ] / e débil [ə]", b: "phono" },
    "fe-eu": { n: "eu: [ø] (deux, bleu) / [œ] (peur, fleur)", b: "phono" }
  },
  video: {
    titulo: "Las e del francés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "le ≠ les", seg: [
        { es: "Hola. En francés, una e mal dicha cambia el número." } ] },
      { v: "dos",
        a: { tag: "e débil [ə]", fr: "le livre", es: "singular" },
        b: { tag: "e cerrada [e]", fr: "les livres", es: "plural" },
        seg: [ { es: "Una e débil, casi sin abrir la boca:", p: 1 }, { fr: "le livre", p: 1 }, { es: "Una e cerrada, con sonrisa:", p: 2 }, { fr: "les livres", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Compro los libros de francés.»", o: ["J'achète les livres de français.", "J'achète le livres de français."], a: 0,
        bien: "¡Sí! Les, con [e].", mal: "Plural: les [le].",
        seg: [ { es: "Pausa. Los libros." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["été", "mère", "fête", "lait", "le", "deux", "peur"], seg: [
        { es: "é cerrada, è abierta, e débil, y eu en dos versiones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las compras", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo compran libros.",
    pj: PJ,
    lineas: [
      ["camila", "J'achète le livre de grammaire et les livres de français.", "Compro el libro de gramática y los libros de francés."],
      ["hugo", "Et le café ? — Un café au lait, s'il vous plaît.", "¿Y el café? — Un café con leche, por favor."],
      ["camila", "Ma mère arrive demain. C'est la fête !", "Mi mamá llega mañana. ¡Es una fiesta!"],
      ["hugo", "Tu as peur ? — Un peu… mais je suis heureuse !", "¿Tienes miedo? — Un poco… ¡pero estoy feliz!"]
    ],
    fijate: "Fíjate: le [ə] / les [e]; café, été [e]; mère, fête, lait [ɛ]; peu [ø] / peur [œ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Las e y las eu",
      idea: "é → [e] cerrada (café, été). è, ê, ai → [ɛ] abierta (mère, fête, lait). e sin acento al final de sílaba → [ə] débil (le, de, ce). eu → [ø] en sílaba abierta (deux, bleu) y [œ] en sílaba cerrada (peur, fleur).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le / les", es: "el [lə] / los [le]" },
        { fr: "de / des", es: "de [də] / unos, de los [de]" },
        { fr: "l'été", es: "el verano — [e]" },
        { fr: "parler · le nez · et", es: "hablar · la nariz · y — [e]" },
        { fr: "la mère", es: "la madre — [ɛ]" },
        { fr: "la fête", es: "la fiesta — [ɛ]" },
        { fr: "le lait", es: "la leche — [ɛ]" },
        { fr: "belle", es: "bella — [ɛ]" },
        { fr: "deux · bleu · peu", es: "dos · azul · poco — [ø]" },
        { fr: "heureuse · heureux", es: "feliz — [ø]" },
        { fr: "la peur", es: "el miedo — [œ]" },
        { fr: "la fleur · la sœur · jeune", es: "la flor · la hermana · joven — [œ]" },
        { fr: "demain", es: "mañana — e débil [ə]" }
      ],
      clave: "Sílaba abierta (termina en vocal): [ø]; cerrada (termina en consonante que suena): [œ].",
      ej: [["é · è · ê · ai · e · eu", "las grafías de las e"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le livre (dicho como les)", "le livre", "Con e cerrada se oye un plural: la e de le es débil."], ["J'achète le livres.", "J'achète les livres.", "Plural: les."], ["mère (con e cerrada)", "mère", "è es abierta, como en fête."]] }
  ],
  ejemplos: [
    { sit: "Oyes una e débil, casi sin abrir la boca.", resp: "le livre", pasos: ["e débil = le, singular."], porque: "Singular." },
    { sit: "Oyes una e cerrada, con sonrisa.", resp: "les livres", pasos: ["e cerrada = les, plural."], porque: "Plural." },
    { sit: "Dices «una flor azul».", resp: "une fleur bleue", pasos: ["fleur: sílaba cerrada → [œ].", "bleue: sílaba abierta → [ø]."], porque: "Tipo de sílaba." }
  ],
  comprueba: [
    { q: "La letra é suena…", o: ["[e] cerrada", "[ɛ] abierta"], a: 0, b: "phono", porque: "é = [e]." },
    { q: "Con [lə] se oye…", o: ["le (singular)", "les (plural)"], a: 0, b: "phono", porque: "e débil." },
    { q: "Fleur tiene [œ] porque…", o: ["su sílaba termina en consonante pronunciada", "lleva acento"], a: 0, b: "phono", porque: "Sílaba cerrada." }
  ],
  practica: [
    { fase: "guiada", c: ["fe-e"], k: "choice", es: true, say: "les livres", ask: "Escucha. ¿Singular o plural?", q: "Elige.", o: ["Plural (les)", "Singular (le)"], a: 0, pista: "e cerrada, con sonrisa.", why: "<b>les</b> [le]." },
    { fase: "guiada", c: ["fe-e"], k: "sort", ask: "¿[e] cerrada o [ɛ] abierta?", q: "Clasifica.", cats: ["[e] cerrada", "[ɛ] abierta"], items: [["été", 0], ["parler", 0], ["nez", 0], ["et", 0], ["mère", 1], ["fête", 1], ["lait", 1], ["belle", 1]], pista: "é, -er, -ez, et: cerrada.", why: "Grafías." },
    { fase: "guiada", c: ["fe-eu"], k: "sort", ask: "¿[ø] o [œ]?", q: "Clasifica.", cats: ["[ø] (sílaba abierta)", "[œ] (sílaba cerrada)"], items: [["peu", 0], ["deux", 0], ["bleu", 0], ["heureuse", 0], ["peur", 1], ["fleur", 1], ["sœur", 1], ["jeune", 1]], pista: "¿Termina en consonante que suena?", why: "Sílaba." },
    { fase: "indep", c: ["fe-e"], k: "spot", ask: "Encuentra el error.", s: "J'achète [le] livres de français pour le semestre .", fix: "les", why: "<b>les</b>." },
    { fase: "indep", c: ["fe-e"], k: "fill", ask: "Escribe «madre» (con [ɛ]).", q: "Ma ___ habite à Lyon.", acc: ["mère"], why: "<b>mère</b>." },
    { fase: "indep", c: ["fe-eu"], k: "fill", ask: "Escribe «felices» (masc. plural).", q: "Ils sont très ___ ensemble.", acc: ["heureux"], why: "<b>heureux</b>." },
    { fase: "aplica", c: ["fe-e", "fe-eu"], k: "match", ask: "Une cada grafía con su sonido.", q: "Grafía → sonido", pairs: [["é (été)", "[e]"], ["è (mère)", "[ɛ]"], ["e (le)", "[ə]"], ["eu (deux)", "[ø]"], ["eu (peur)", "[œ]"]], why: "El sistema." },
    { fase: "aplica", c: ["fe-eu"], k: "choice", es: true, say: "la peur", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el miedo (peur)", "poco (peu)"], a: 0, why: "<b>peur</b> [œ]." },
    { fase: "dominio", c: ["fe-e"], k: "choice", ask: "¿Qué palabra tiene una e débil [ə]?", q: "«___»", o: ["demain", "été", "mère"], a: 0, why: "<b>demain</b>: de- débil." },
    { fase: "dominio", c: ["fe-e"], k: "order", ask: "Ordena: «Un café con leche, por favor».", tokens: ["Un café", "au lait,", "s'il vous plaît."], why: "<b>Un café au lait, s'il vous plaît.</b>" },
    { fase: "dominio", c: ["fe-e", "fe-eu"], k: "listen", say: "Ma mère est heureuse.", acc: ["Ma mère est heureuse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma mère est heureuse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["j'achète", "livre", "livres", "grammaire", "français", "café", "lait", "ma", "arrive", "c'est", "as", "un", "mais", "suis", "semestre", "pour", "habite", "ils", "sont", "très", "ensemble", "est", "s'il", "vous", "plaît"] }
};

E["fon-voyelles-nasales"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Las vocales nasales y cuándo no hay nasal",
  objetivo: {
    que: "Vas a pronunciar las nasales sin decir la n, y saber cuándo no hay nasal (bonne, une, âne).",
    corto: "bon ≠ bonne.",
    podras: ["Pronunciar [ɑ̃], [ɔ̃], [ɛ̃] sin n.", "Saber que n + vocal o nn quita la nasal.", "Distinguir vin, vent, vont."],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/pensativo"],
    previos: ["Las vocales (lecciones 1 y 2)."],
    capacidad: "Ahora pronuncias bon y bonne de forma distinta."
  },
  requiere: R("fv-y", "fe-e"), recupera: ["fe-e"],
  conceptos: {
    "fn-nasal": { n: "n o m al final o antes de consonante → vocal nasal", b: "phono" },
    "fn-pas": { n: "n + vocal o nn / mm → sin nasal (bonne, une)", b: "phono" }
  },
  video: {
    titulo: "Las nasales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "bon ≠ bonne", seg: [
        { es: "Hola. En bon no se oye ninguna ene: el aire sale por la nariz." } ] },
      { v: "dos",
        a: { tag: "nasal", fr: "bon", es: "sin n" },
        b: { tag: "no nasal", fr: "bonne", es: "la n suena" },
        seg: [ { es: "Nasal, sin ene:", p: 1 }, { fr: "bon", p: 1 }, { es: "Con vocal después, la ene suena:", p: 2 }, { fr: "bonne", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi vecina es muy buena cocinera.»", o: ["Ma voisine est une très bonne cuisinière.", "Ma voisine est une très bon cuisinière."], a: 0,
        bien: "¡Sí! Bonne, sin nasal.", mal: "Femenino: bonne, y la n suena.",
        seg: [ { es: "Pausa. Buena." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vin", "vent", "vont", "un", "une", "bon", "bonne"], seg: [
        { es: "Tres nasales: vin, vent, vont.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el restaurante", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo cenan.",
    pj: PJ,
    lineas: [
      ["hugo", "Un verre de vin ? Il fait du vent ce soir !", "¿Una copa de vino? ¡Hace viento esta noche!"],
      ["camila", "Non merci, une limonade. Ce restaurant est bon.", "No gracias, una limonada. Este restaurante es bueno."],
      ["hugo", "Oui, et la cuisinière est très bonne. Mes amis vont venir.", "Sí, y la cocinera es muy buena. Mis amigos van a venir."],
      ["camila", "Notre professeure est américaine, elle vient avec eux ? — Bien sûr !", "Nuestra profesora es americana, ¿viene con ellos? — ¡Claro!"]
    ],
    fijate: "Fíjate: vin, vent, vont, bon, bien con nasal; une, bonne, américaine sin nasal."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Nasal o no",
      idea: "n o m al final de palabra o antes de consonante → la vocal es nasal y la n no suena (bon, chambre). n + vocal o nn / mm → no hay nasal y la n suena (bonne, âne, une). Tres nasales: [ɛ̃] vin, [ɑ̃] vent, [ɔ̃] vont.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "bon / bonne", es: "bueno [bɔ̃] / buena [bɔn]" },
        { fr: "le vin", es: "el vino — [ɛ̃]" },
        { fr: "le vent", es: "el viento — [ɑ̃]" },
        { fr: "ils vont", es: "van — [ɔ̃]" },
        { fr: "un / une", es: "uno [œ̃] / una [yn]" },
        { fr: "fin / fine", es: "fin [ɛ̃] / fina [in]" },
        { fr: "an / l'âne", es: "año [ɑ̃] / el burro [an]" },
        { fr: "le parfum", es: "el perfume — nasal" },
        { fr: "l'enfant · le temps · la chambre", es: "el niño · el tiempo · la habitación — [ɑ̃]" },
        { fr: "le nom · l'ombre", es: "el nombre · la sombra — [ɔ̃]" },
        { fr: "le pain · bien · simple", es: "el pan · bien · simple — [ɛ̃]" },
        { fr: "américain / américaine", es: "americano [ɛ̃] / americana [ɛn]" },
        { fr: "vingt", es: "veinte — [vɛ̃]" },
        { fr: "moyen", es: "medio — [ɛ̃]" }
      ],
      clave: "Si después de la n viene vocal, la n suena y no hay nasal." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["bon (diciendo la n)", "bon", "La vocal ya es nasal: no se dice la n."], ["une très bon cuisinière", "une très bonne cuisinière", "Femenino: bonne."], ["âne (con nasal)", "âne", "n + e: la n suena y no hay nasal."]] }
  ],
  ejemplos: [
    { sit: "Lees bonne.", resp: "bonne", pasos: ["nn + e → la n suena, sin nasal."], porque: "No nasal." },
    { sit: "Lees chambre.", resp: "chambre", pasos: ["m + consonante → nasal, sin m."], porque: "Nasal." },
    { sit: "«Nuestra profesora es americana.»", resp: "Notre professeure est américaine.", pasos: ["-aine: sin nasal [ɛn]."], porque: "Femenino." }
  ],
  comprueba: [
    { q: "En bon, la n…", o: ["no suena: la vocal es nasal", "suena como en español"], a: 0, b: "phono", porque: "Nasal." },
    { q: "En âne no hay nasal porque…", o: ["la n va seguida de vocal", "lleva acento"], a: 0, b: "phono", porque: "n + vocal." },
    { q: "Vin, vent y vont tienen…", o: ["tres nasales distintas", "la misma nasal"], a: 0, b: "phono", porque: "[ɛ̃], [ɑ̃], [ɔ̃]." }
  ],
  practica: [
    { fase: "guiada", c: ["fn-pas"], k: "choice", es: true, say: "bonne", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["buena (bonne)", "bueno (bon)"], a: 0, pista: "¿Se oye la n?", why: "<b>bonne</b>: la n suena." },
    { fase: "guiada", c: ["fn-nasal", "fn-pas"], k: "sort", ask: "¿Vocal nasal o no?", q: "Clasifica.", cats: ["Vocal nasal", "Sin vocal nasal"], items: [["bon", 0], ["an", 0], ["fin", 0], ["parfum", 0], ["bonne", 1], ["âne", 1], ["fine", 1], ["une", 1]], pista: "n + vocal: no nasal.", why: "Regla." },
    { fase: "guiada", c: ["fn-nasal"], k: "sort", ask: "¿Qué nasal?", q: "Clasifica.", cats: ["[ɑ̃] (vent)", "[ɔ̃] (vont)", "[ɛ̃] (vin)"], items: [["enfant", 0], ["temps", 0], ["chambre", 0], ["nom", 1], ["ombre", 1], ["pain", 2], ["bien", 2], ["simple", 2]], pista: "en, an: [ɑ̃].", why: "Tres nasales." },
    { fase: "indep", c: ["fn-pas"], k: "spot", ask: "Encuentra el error.", s: "Ma voisine est une très [bon] cuisinière .", fix: "bonne", why: "<b>bonne</b>." },
    { fase: "indep", c: ["fn-pas"], k: "fill", ask: "Escribe «americana».", q: "Notre professeure est ___ .", acc: ["américaine"], why: "<b>américaine</b>." },
    { fase: "indep", c: ["fn-nasal"], k: "fill", ask: "Escribe 20 en letras.", q: "Le train part dans ___ minutes.", acc: ["vingt"], why: "<b>vingt</b>." },
    { fase: "aplica", c: ["fn-nasal"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le vin", "el vino"], ["le vent", "el viento"], ["ils vont", "van"], ["un", "uno"], ["une", "una"]], why: "Nasales." },
    { fase: "aplica", c: ["fn-nasal"], k: "choice", es: true, say: "le vent", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el viento (vent)", "el vino (vin)", "van (vont)"], a: 0, why: "<b>vent</b> [ɑ̃]." },
    { fase: "dominio", c: ["fn-nasal"], k: "choice", ask: "¿Dónde suena [ɛ̃], como en vin?", q: "«___»", o: ["moyen", "bonne", "âne"], a: 0, why: "<b>moyen</b>: -en tras i → [ɛ̃]." },
    { fase: "dominio", c: ["fn-pas"], k: "order", ask: "Ordena: «La cocinera es muy buena».", tokens: ["La cuisinière", "est", "très bonne."], why: "<b>La cuisinière est très bonne.</b>" },
    { fase: "dominio", c: ["fn-nasal", "fn-pas"], k: "listen", say: "Mes amis vont venir.", acc: ["Mes amis vont venir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes amis vont venir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["verre", "fait", "ce", "soir", "non", "merci", "limonade", "restaurant", "oui", "cuisinière", "très", "mes", "amis", "venir", "notre", "professeure", "vient", "avec", "eux", "bien", "sûr", "ma", "voisine", "est", "train", "part", "dans", "minutes"] }
};

E["fon-consonnes"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Consonantes difíciles: [ʁ], [z], [ʒ], [v] y la h",
  objetivo: {
    que: "Vas a pronunciar las consonantes que no existen en el español de Colombia: [z], [ʒ], [v], la r de garganta y la h muda.",
    corto: "poisson ≠ poison.",
    podras: ["Distinguir s [s] / s entre vocales [z]: poisson / poison.", "Pronunciar v con los dientes: vol ≠ bol.", "Saber que la h no suena (h muda y h aspirada)."],
    iconos: ["ic2/microfono", "ic2/audifonos", "m2d/pensativo"],
    previos: ["Las vocales (lecciones 1 a 3)."],
    capacidad: "Ahora ya no pides veneno en el restaurante."
  },
  requiere: R("fv-y", "fe-e"), recupera: ["fe-e"],
  conceptos: {
    "fc-sz": { n: "ss [s] / s entre vocales [z]; ch [ʃ] / j [ʒ]; v / b", b: "phono" },
    "fc-h": { n: "la h no suena: muda (l'homme) / aspirada (le héros)", b: "phono" }
  },
  video: {
    titulo: "Consonantes difíciles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "poisson ≠ poison", seg: [
        { es: "Hola. Una s puede cambiar el pescado por el veneno." } ] },
      { v: "dos",
        a: { tag: "ss = [s]", fr: "le poisson", es: "el pescado" },
        b: { tag: "s entre vocales = [z]", fr: "le poison", es: "el veneno" },
        seg: [ { es: "Doble s, sonido de s:", p: 1 }, { fr: "le poisson", p: 1 }, { es: "Una s entre vocales zumba:", p: 2 }, { fr: "le poison", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera el pescado a la parrilla.»", o: ["Je voudrais le poisson grillé.", "Je voudrais le poison grillé."], a: 0,
        bien: "¡Sí! Poisson con ss.", mal: "Poison es veneno. Pescado: poisson.",
        seg: [ { es: "Pausa. Pescado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["poisson", "poison", "vol", "bol", "chat", "jour", "l'homme"], seg: [
        { es: "Y la h nunca suena.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El menú", img: "bg-cafe", yo: "camila",
    escena: "Camila pide en un restaurante.",
    pj: PJ,
    lineas: [
      ["camila", "Je voudrais le poisson grillé, s'il vous plaît.", "Quisiera el pescado a la parrilla, por favor."],
      ["hugo", "Le poisson, pas le poison ! Et comme dessert ?", "¡El pescado, no el veneno! ¿Y de postre?"],
      ["camila", "Une mousse au chocolat. Quelle heure est-il ? Mon vol part à huit heures.", "Una mousse de chocolate. ¿Qué hora es? Mi vuelo sale a las ocho."],
      ["hugo", "C'est l'histoire de ma vie : le jour où tu pars, il pleut !", "Es la historia de mi vida: ¡el día que te vas, llueve!"]
    ],
    fijate: "Fíjate: poisson [s] / poison [z], vol [v], jour [ʒ], l'heure, l'histoire (h muda)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Consonantes nuevas",
      idea: "s entre vocales = [z] (poison, rose, maison); ss = [s] (poisson, dessert). v: dientes de arriba sobre el labio de abajo; b: dos labios (vol ≠ bol). ch = [ʃ] (chat); j, ge = [ʒ] (jour). La h nunca suena: h muda (l'homme) y h aspirada (le héros, sin elisión).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le poisson", es: "el pescado — [s]" },
        { fr: "le poison", es: "el veneno — [z]" },
        { fr: "le dessert", es: "el postre — [s]" },
        { fr: "la rose · la maison · zéro", es: "la rosa · la casa · cero — [z]" },
        { fr: "le garçon · le cinéma", es: "el muchacho · el cine — [s]" },
        { fr: "le vol / le bol", es: "el vuelo / el tazón" },
        { fr: "le vent / le banc", es: "el viento / el banco (asiento)" },
        { fr: "le vin / le bain", es: "el vino / el baño" },
        { fr: "le chat", es: "el gato — [ʃ]" },
        { fr: "le jour · la joue", es: "el día · la mejilla — [ʒ]" },
        { fr: "la chose", es: "la cosa — [ʃ] y [z]" },
        { fr: "l'homme · l'hôtel · l'heure · l'histoire", es: "h muda: con elisión" },
        { fr: "le héros · la honte · le haricot · la hauteur", es: "h aspirada: sin elisión" }
      ],
      clave: "La r francesa: con el fondo de la lengua cerca de la garganta, sin vibrar la punta." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["poisson (con s que zumba)", "poisson", "Con [z] pides veneno: poison."], ["C'est la histoire de ma famille.", "C'est l'histoire de ma famille.", "h muda: elisión."], ["vol (dicho como bol)", "vol", "v: dientes sobre el labio de abajo."]] }
  ],
  ejemplos: [
    { sit: "Pides pescado.", resp: "le poisson", pasos: ["ss → [s]."], porque: "No veneno." },
    { sit: "«Es la historia de mi familia.»", resp: "C'est l'histoire de ma famille.", pasos: ["h muda → l'."], porque: "Elisión." },
    { sit: "Practicas la r francesa.", resp: "la rue, Paris, merci", pasos: ["Dorso de la lengua cerca de la garganta.", "La punta no vibra."], porque: "[ʁ]." }
  ],
  comprueba: [
    { q: "Una s entre dos vocales suena…", o: ["[z], zumbando", "[s]"], a: 0, b: "phono", porque: "poison, maison." },
    { q: "La [ʁ] francesa se hace…", o: ["con el fondo de la lengua, sin vibrar la punta", "vibrando la punta como la r española"], a: 0, b: "phono", porque: "Garganta." },
    { q: "La h francesa…", o: ["no suena nunca", "suena como la j española"], a: 0, b: "phono", porque: "Muda o aspirada, no suena." }
  ],
  practica: [
    { fase: "guiada", c: ["fc-sz"], k: "choice", es: true, say: "le poisson", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el pescado (poisson)", "el veneno (poison)"], a: 0, pista: "¿[s] o [z]?", why: "<b>poisson</b> [s]." },
    { fase: "guiada", c: ["fc-sz"], k: "sort", ask: "¿[s] o [z]?", q: "Clasifica.", cats: ["[s]", "[z]"], items: [["poisson", 0], ["dessert", 0], ["garçon", 0], ["cinéma", 0], ["poison", 1], ["rose", 1], ["zéro", 1], ["maison", 1]], pista: "s entre vocales: [z].", why: "Sordas y sonoras." },
    { fase: "guiada", c: ["fc-sz"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le vol", "el vuelo"], ["le bol", "el tazón"], ["le vent", "el viento"], ["le banc", "el banco"], ["le bain", "el baño"]], pista: "v ≠ b.", why: "Pares mínimos." },
    { fase: "indep", c: ["fc-h"], k: "sort", ask: "¿h muda (l') o aspirada (le / la)?", q: "Clasifica.", cats: ["H muda (l')", "H aspirada (le / la)"], items: [["homme", 0], ["hôtel", 0], ["heure", 0], ["histoire", 0], ["héros", 1], ["honte", 1], ["haricot", 1], ["hauteur", 1]], why: "Elisión o no." },
    { fase: "indep", c: ["fc-h"], k: "spot", ask: "Encuentra el error.", s: "C'est [la] histoire de ma famille .", fix: "l'", why: "<b>l'histoire</b>." },
    { fase: "indep", c: ["fc-sz"], k: "fill", ask: "Escribe «postre» (con ss).", q: "Comme ___ , je prends une mousse au chocolat.", acc: ["dessert"], why: "<b>dessert</b>." },
    { fase: "aplica", c: ["fc-sz"], k: "choice", ask: "Pides pescado en el restaurante.", q: "«Je voudrais le ___ grillé, s'il vous plaît.»", o: ["poisson", "poison"], a: 0, why: "<b>poisson</b>." },
    { fase: "aplica", c: ["fc-sz"], k: "choice", ask: "¿Qué palabra empieza por [ʒ]?", q: "«___»", o: ["joue", "chat", "zéro"], a: 0, why: "<b>joue</b>: j → [ʒ]." },
    { fase: "dominio", c: ["fc-sz"], k: "choice", ask: "¿Dónde suena [z]?", q: "«___»", o: ["chose", "dessert", "garçon"], a: 0, why: "<b>chose</b>: s entre vocales." },
    { fase: "dominio", c: ["fc-sz", "fc-h"], k: "order", ask: "Ordena: «El pescado, no el veneno».", tokens: ["Le poisson,", "pas", "le poison !"], why: "<b>Le poisson, pas le poison !</b>" },
    { fase: "dominio", c: ["fc-sz", "fc-h"], k: "listen", say: "Mon vol part à huit heures.", acc: ["Mon vol part à huit heures.", "Mon vol part à 8 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon vol part à huit heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["voudrais", "grillé", "s'il", "vous", "plaît", "pas", "comme", "mousse", "chocolat", "quelle", "est-il", "mon", "part", "huit", "heures", "c'est", "ma", "vie", "où", "tu", "pars", "pleut", "famille", "prends", "une", "au"] }
};

E["fon-graphies"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "De la grafía al sonido",
  objetivo: {
    que: "Vas a leer en voz alta palabras nuevas gracias a las combinaciones de letras: ou, au, eau, oi, ai, ch, gn, qu, ç, ill.",
    corto: "eau = [o], oi = [wa].",
    podras: ["Leer ou, au, eau, oi, ai, ei.", "Leer ch, gn, qu, ç, ge.", "Leer ill como [j] (salvo ville, mille, tranquille)."],
    iconos: ["ic2/libros", "ic2/lapiz", "ic2/audifonos"],
    previos: ["Las vocales y consonantes (lecciones 1 a 4)."],
    capacidad: "Ahora puedes leer en voz alta cualquier palabra nueva."
  },
  requiere: R("fv-u", "fe-e", "fc-sz"), recupera: ["fv-u"],
  conceptos: {
    "fg-voy": { n: "ou [u], au / eau [o], oi [wa], ai / ei [ɛ]", b: "phono" },
    "fg-cons": { n: "ch [ʃ], gn [ɲ], qu [k], ç / ge, ill [j]", b: "phono" }
  },
  video: {
    titulo: "Letras y sonidos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "eau = [o]", seg: [
        { es: "Hola. Varias letras juntas, un solo sonido." } ] },
      { v: "frase", filas: [
          { nota: "eau, au", p: 1, partes: [["beau · chaud · l'eau", "-", 1]] },
          { nota: "oi", p: 2, partes: [["le roi", "-", 2]] },
          { nota: "gn", p: 3, partes: [["la montagne", "-", 3]] } ], seg: [
        { es: "Eau y au suenan o:", p: 1 }, { fr: "beau, chaud, l'eau", p: 1 }, { es: "Oi suena ua:", p: 2 }, { fr: "le roi", p: 2 }, { es: "Gn suena como la eñe:", p: 3 }, { fr: "la montagne", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la hija»", o: ["la fille", "la file"], a: 0,
        bien: "¡Sí! Fille: ill suena [j].", mal: "Fille se dice [fij]; file es una fila.",
        seg: [ { es: "Pausa. La hija." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ou", "au", "eau", "oi", "ai", "ch", "gn", "qu", "ill"], seg: [
        { es: "Con esto lees casi todo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un paseo", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo pasean por la montaña.",
    pj: PJ,
    lineas: [
      ["hugo", "Il fait beau et chaud ! Tu veux de l'eau ?", "¡Hace buen tiempo y calor! ¿Quieres agua?"],
      ["camila", "Oui, merci. La montagne est magnifique !", "Sí, gracias. ¡La montaña es magnífica!"],
      ["hugo", "Ma fille adore ce village. Mais il fait froid : il y a de la neige.", "A mi hija le encanta este pueblo. Pero hace frío: hay nieve."],
      ["camila", "Ce soir, nous mangeons au restaurant avec le petit garçon ?", "Esta noche comemos en el restaurante con el niño?"]
    ],
    fijate: "Fíjate: beau, chaud, eau [o]; montagne [ɲ]; fille [j] / village [l]; neige [ɛ]; mangeons, garçon."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Combinaciones de letras",
      idea: "ou [u] · au, eau [o] · oi [wa] · ai, ei [ɛ]. ch [ʃ] · gn [ɲ] (como ñ) · qu [k]. ç y ge mantienen [s] y [ʒ]: garçon, mangeons. ill suena [j]: fille, travailler (salvo ville, mille, tranquille).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "beau · chaud · l'eau", es: "bonito · caliente · el agua — [o]" },
        { fr: "le bateau", es: "el barco — [o]" },
        { fr: "le roi", es: "el rey — [wa]" },
        { fr: "la neige", es: "la nieve — [ɛ]" },
        { fr: "la montagne", es: "la montaña — [ɲ]" },
        { fr: "le chat", es: "el gato — [ʃ]" },
        { fr: "la fille · la famille", es: "la hija · la familia — [j]" },
        { fr: "travailler · gentille", es: "trabajar · amable — [j]" },
        { fr: "la ville · mille · tranquille", es: "la ciudad · mil · tranquilo — [l]" },
        { fr: "le village", es: "el pueblo — [l]" },
        { fr: "le garçon", es: "el niño — ç = [s]" },
        { fr: "nous mangeons", es: "comemos — ge = [ʒ]" },
        { fr: "l'orchestre", es: "la orquesta — ch = [k]" },
        { fr: "la cerise · le ciel · le cygne", es: "la cereza · el cielo · el cisne — c = [s]" },
        { fr: "la cour · la crème · la culture", es: "el patio · la crema · la cultura — c = [k]" }
      ],
      clave: "c + e, i, y = [s]; c + a, o, u = [k].",
      ej: [["ou · au · eau · oi · ai · ei", "grafías de vocales"], ["ch · gn · qu · ç · ge · ill", "grafías de consonantes"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la file (para decir la hija)", "la fille", "file es una fila; la hija es fille."], ["fille (leído con l)", "fille", "Con l se oye fil (hilo): ill suena como y."], ["Il y a de la nèje.", "Il y a de la neige.", "ei se escribe ei."], ["nous mangons", "nous mangeons", "ge para conservar el sonido de j."]] }
  ],
  ejemplos: [
    { sit: "Lees montagne.", resp: "montagne", pasos: ["gn suena como la ñ."], porque: "Combinación." },
    { sit: "Lees roi.", resp: "roi", pasos: ["oi suena ua."], porque: "Combinación." },
    { sit: "Escribes «comemos» (manger).", resp: "nous mangeons", pasos: ["ge antes de o para [ʒ]."], porque: "Ortografía." }
  ],
  comprueba: [
    { q: "Fille se pronuncia…", o: ["con [j] al final, como «fiy»", "con l al final, como «fil»"], a: 0, b: "phono", porque: "ill = [j]." },
    { q: "Las letras eau suenan…", o: ["[o]", "[eau], letra por letra"], a: 0, b: "phono", porque: "Una vocal." },
    { q: "Las letras ou suenan…", o: ["como la u española", "como o"], a: 0, b: "phono", porque: "ou = [u]." }
  ],
  practica: [
    { fase: "guiada", c: ["fg-voy", "fg-cons"], k: "match", ask: "Une cada grafía con su sonido.", q: "Grafía → sonido", pairs: [["oi (roi)", "[wa]"], ["gn (montagne)", "[ɲ]"], ["eau (bateau)", "[o]"], ["ch (chat)", "[ʃ]"], ["ill (fille)", "[j]"], ["ou (tout)", "[u]"]], pista: "gn = ñ.", why: "Combinaciones." },
    { fase: "guiada", c: ["fg-cons"], k: "choice", es: true, say: "la fille", ask: "Escucha. ¿Qué oyes al final?", q: "Elige.", o: ["un sonido [j], como «y»", "un sonido [l]"], a: 0, pista: "ill.", why: "<b>fille</b> [fij]." },
    { fase: "guiada", c: ["fg-cons"], k: "sort", ask: "¿ill suena [j] o [l]?", q: "Clasifica.", cats: ["[j]", "[l]"], items: [["fille", 0], ["famille", 0], ["travailler", 0], ["gentille", 0], ["ville", 1], ["mille", 1], ["tranquille", 1], ["village", 1]], pista: "ville, mille, tranquille: excepciones.", why: "ill." },
    { fase: "indep", c: ["fg-cons"], k: "fill", ask: "Escribe manger (nous), conservando [ʒ].", q: "Ce soir, nous ___ au restaurant.", acc: ["mangeons"], why: "<b>mangeons</b>." },
    { fase: "indep", c: ["fg-cons"], k: "fill", ask: "Escribe «niño» (con ç).", q: "Le petit ___ joue dans la cour.", acc: ["garçon"], why: "<b>garçon</b>." },
    { fase: "indep", c: ["fg-voy"], k: "spot", ask: "Encuentra el error.", s: "Il fait froid : il y a de la [nèje] sur la montagne .", fix: "neige", why: "<b>neige</b>." },
    { fase: "aplica", c: ["fg-cons"], k: "sort", ask: "¿c suena [k] o [s]?", q: "Clasifica.", cats: ["[k]", "[s]"], items: [["café", 0], ["cour", 0], ["crème", 0], ["culture", 0], ["cinéma", 1], ["cerise", 1], ["ciel", 1], ["cygne", 1]], why: "c + e, i, y = [s]." },
    { fase: "aplica", c: ["fg-cons"], k: "choice", ask: "¿Dónde suena [k]?", q: "«___»", o: ["orchestre", "chat", "cinéma"], a: 0, why: "<b>orchestre</b>: ch = [k]." },
    { fase: "dominio", c: ["fg-voy"], k: "choice", ask: "¿Cuál NO suena [o]?", q: "«___»", o: ["ou", "eau", "au"], a: 0, why: "<b>ou</b> = [u]." },
    { fase: "dominio", c: ["fg-voy", "fg-cons"], k: "order", ask: "Ordena: «La montaña es magnífica».", tokens: ["La montagne", "est", "magnifique !"], why: "<b>La montagne est magnifique !</b>" },
    { fase: "dominio", c: ["fg-voy", "fg-cons"], k: "listen", say: "Il fait beau et chaud.", acc: ["Il fait beau et chaud.", "Il fait beau et chaud !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il fait beau et chaud.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["fait", "veux", "oui", "merci", "magnifique", "ma", "adore", "ce", "mais", "froid", "sur", "soir", "restaurant", "avec", "petit", "joue", "dans", "est", "café", "tout", "une", "il", "y", "a", "de"] }
};

E["fon-lettres-muettes"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Letras finales mudas y la e caduca",
  objetivo: {
    que: "Vas a saber qué letras finales no se pronuncian, por qué la -ent de los verbos es muda y cuándo cae la e débil.",
    corto: "Ils parlent = il parle.",
    podras: ["Aplicar la regla CaReFuL (c, r, f, l suelen sonar).", "Saber que la -e final hace sonar la consonante: petit / petite.", "Leer -ent muda en los verbos y la e que cae: samedi → sam'di."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "m2d/pensativo"],
    previos: ["Las grafías (lección 5)."],
    capacidad: "Ahora ya no pronuncias las letras que sobran."
  },
  requiere: R("fg-voy", "fg-cons", "fe-e"), recupera: ["fe-e"],
  conceptos: {
    "fm-finales": { n: "consonantes finales mudas; CaReFuL; -e hace sonar la consonante", b: "phono" },
    "fm-ent": { n: "-ent muda en verbos; la e débil que cae", b: "phono" }
  },
  video: {
    titulo: "Las letras mudas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "ils parlent", seg: [
        { es: "Hola. En francés se escriben letras que no se dicen." } ] },
      { v: "dos",
        a: { tag: "masculino", fr: "petit", es: "la t no suena" },
        b: { tag: "femenino", fr: "petite", es: "la t suena" },
        seg: [ { es: "Sin e, la t final es muda:", p: 1 }, { fr: "petit", p: 1 }, { es: "Con e, la t suena:", p: 2 }, { fr: "petite", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo suena ils parlent?", o: ["Igual que il parle", "Con «ent» al final"], a: 0, es: true,
        bien: "¡Sí! La -ent del verbo es muda.", mal: "La -ent de los verbos no se pronuncia.",
        seg: [ { es: "Pausa. Ils parlent." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sac", "neuf", "journal", "hiver", "blanc", "gentil", "parler", "trop"], seg: [
        { es: "CaReFuL: c, r, f, l suelen sonar al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El sábado", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan del fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Samedi, mes parents arrivent. Ils habitent à Bogotá depuis dix ans.", "El sábado llegan mis papás. Viven en Bogotá desde hace diez años."],
      ["camila", "Super ! Mon frère est petit et ma sœur est petite aussi.", "¡Genial! Mi hermano es bajito y mi hermana también."],
      ["hugo", "Dans ce village, les enfants jouent au foot tous les soirs.", "En este pueblo, los niños juegan fútbol todas las noches."],
      ["camila", "Il fait froid en hiver ? — Oui, et le parc est blanc !", "¿Hace frío en invierno? — ¡Sí, y el parque está blanco!"]
    ],
    fijate: "Fíjate: arrivent, habitent, jouent (-ent muda); petit / petite; hiver, parc (r y c suenan); blanc (c muda)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Lo que no se pronuncia",
      idea: "La consonante final casi nunca suena; las que suelen sonar: c, r, f, l (CaReFuL). Con -e final, la consonante sí suena: petit [pəti] / petite [pətit]. -ent de verbo = muda (ils parlent [paʁl]); -ent de nombre o adverbio = [ɑ̃] (lentement). La e débil cae en el habla rápida: samedi → sam'di.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le sac · neuf · le journal · l'hiver", es: "c, f, l, r finales: suenan" },
        { fr: "blanc · gentil · parler · trop", es: "excepciones: la consonante no suena" },
        { fr: "le parc", es: "el parque — la c suena" },
        { fr: "petit / petite", es: "pequeño [pəti] / pequeña [pətit]" },
        { fr: "grand / grande", es: "grande [gʁɑ̃] / [gʁɑ̃d]" },
        { fr: "il parle / ils parlent", es: "suenan igual" },
        { fr: "ils habitent · ils jouent · ils arrivent", es: "-ent muda" },
        { fr: "souvent · lentement", es: "-ent de adverbio: [ɑ̃]" },
        { fr: "samedi", es: "se dice [samdi]: la e cae" },
        { fr: "vendredi · mercredi", es: "la e se mantiene: [vɑ̃dʁədi]" },
        { fr: "la fenêtre · maintenant", es: "la e puede caer" },
        { fr: "l'appartement · le gouvernement", es: "la e se mantiene" },
        { fr: "les poules couvent", es: "las gallinas empollan — [kuv]" }
      ],
      clave: "Si la e débil cae y quedan tres consonantes juntas, se mantiene: vendredi." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils parlent (diciendo -ent)", "ils parlent", "La -ent del verbo es muda."], ["Mes parents habite à Bogotá.", "Mes parents habitent à Bogotá.", "ils: -ent (aunque no suene)."], ["blanc (diciendo la c)", "blanc", "Excepción a CaReFuL: la c no suena."]] }
  ],
  ejemplos: [
    { sit: "Lees ils jouent.", resp: "ils jouent", pasos: ["Suena igual que il joue: -ent muda."], porque: "Verbo." },
    { sit: "Lees petite.", resp: "petite", pasos: ["La -e hace sonar la t."], porque: "Femenino." },
    { sit: "Lees souvent.", resp: "souvent", pasos: ["Adverbio: -ent suena nasal."], porque: "No es verbo." }
  ],
  comprueba: [
    { q: "La -ent de ils parlent…", o: ["no suena", "suena [ɑ̃]"], a: 0, b: "phono", porque: "Verbo." },
    { q: "La -ent de souvent…", o: ["suena [ɑ̃]", "no suena"], a: 0, b: "phono", porque: "Adverbio." },
    { q: "En petite, la t…", o: ["suena", "no suena"], a: 0, b: "phono", porque: "La -e hace sonar la consonante." }
  ],
  practica: [
    { fase: "guiada", c: ["fm-finales"], k: "sort", ask: "¿La consonante final se pronuncia?", q: "Clasifica.", cats: ["Se pronuncia", "Es muda"], items: [["sac", 0], ["neuf", 0], ["journal", 0], ["hiver", 0], ["blanc", 1], ["gentil", 1], ["parler", 1], ["trop", 1]], pista: "CaReFuL, con excepciones.", why: "Finales." },
    { fase: "guiada", c: ["fm-ent"], k: "choice", es: true, say: "ils parlent", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["Igual que il parle", "Con un sonido [ɑ̃] al final"], a: 0, pista: "-ent de verbo.", why: "-ent muda." },
    { fase: "guiada", c: ["fm-finales", "fm-ent"], k: "match", ask: "Une cada palabra con su pronunciación.", q: "Palabra → pronunciación", pairs: [["petit", "[pəti]"], ["petite", "[pətit]"], ["samedi", "[samdi]"], ["vendredi", "[vɑ̃dʁədi]"], ["souvent", "[suvɑ̃]"]], pista: "La e de samedi cae.", why: "Pronunciación." },
    { fase: "indep", c: ["fm-finales"], k: "fill", ask: "Escribe petit en femenino.", q: "Mon frère est petit et ma sœur est ___ aussi.", acc: ["petite"], why: "<b>petite</b>." },
    { fase: "indep", c: ["fm-ent"], k: "spot", ask: "Encuentra el error.", s: "Mes parents [habite] à Bogotá depuis dix ans .", fix: "habitent", why: "<b>habitent</b>." },
    { fase: "indep", c: ["fm-ent"], k: "fill", ask: "Escribe jouer (ils).", q: "Dans ce village, les enfants ___ au foot tous les soirs.", acc: ["jouent"], why: "<b>jouent</b>." },
    { fase: "aplica", c: ["fm-ent"], k: "sort", ask: "¿La e débil cae o se mantiene?", q: "Clasifica.", cats: ["Cae", "Se mantiene"], items: [["samedi", 0], ["la fenêtre", 0], ["maintenant", 0], ["tout le monde", 0], ["vendredi", 1], ["mercredi", 1], ["appartement", 1], ["gouvernement", 1]], why: "Tres consonantes juntas: se mantiene." },
    { fase: "aplica", c: ["fm-ent"], k: "choice", ask: "¿Dónde suena [ɑ̃]?", q: "«___»", o: ["Il vient souvent.", "Ils parlent.", "Elles jouent."], a: 0, why: "<b>souvent</b>: adverbio." },
    { fase: "dominio", c: ["fm-ent"], k: "choice", es: true, say: "Les poules couvent leurs œufs.", ask: "Escucha. ¿Cómo suena couvent aquí?", q: "Elige.", o: ["[kuv], porque es un verbo", "[kuvɑ̃], porque es un nombre"], a: 0, why: "Verbo: -ent muda." },
    { fase: "dominio", c: ["fm-finales"], k: "order", ask: "Ordena: «El parque está blanco».", tokens: ["Le parc", "est", "blanc."], why: "<b>Le parc est blanc.</b>" },
    { fase: "dominio", c: ["fm-finales", "fm-ent"], k: "listen", say: "Mes parents habitent à Bogotá.", acc: ["Mes parents habitent à Bogotá."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes parents habitent à Bogotá.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Bogotá"], previo: ["mes", "parents", "arrivent", "depuis", "dix", "ans", "super", "mon", "frère", "ma", "sœur", "aussi", "dans", "ce", "enfants", "foot", "tous", "soirs", "fait", "froid", "en", "oui", "monde", "tout", "le", "il", "vient", "elles", "poules", "leurs", "œufs", "est"] }
};

E["fon-liaison"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Liaison, encadenamiento y elisión",
  objetivo: {
    que: "Vas a unir las palabras como un francés: liaison (les‿amis), encadenamiento (il‿arrive) y elisión (l'école).",
    corto: "les‿amis, il‿arrive, l'école.",
    podras: ["Hacer la liaison: s, x → [z]; d → [t]; f → [v].", "Saber cuándo es obligatoria y cuándo está prohibida.", "Encadenar y elidir: il‿arrive, j'ai, s'il."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/engranaje"],
    previos: ["Las letras mudas (lección 6) y la h muda (lección 4)."],
    capacidad: "Ahora tu francés suena unido, sin cortes."
  },
  requiere: R("fm-finales", "fc-h", "fn-nasal"), recupera: ["fm-finales", "fc-h"],
  conceptos: {
    "fl-liaison": { n: "liaison: les‿amis [z], grand‿homme [t], neuf‿heures [v]", b: "phono" },
    "fl-interdit": { n: "obligatoria / prohibida (et, h aspirada); encadenamiento; elisión", b: "phono" }
  },
  video: {
    titulo: "Las palabras se unen", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "les‿amis", seg: [
        { es: "Hola. En francés, una letra muda despierta cuando la siguiente palabra empieza por vocal." } ] },
      { v: "frase", filas: [
          { nota: "liaison", p: 1, partes: [["les amis", "-", 1]] },
          { nota: "encadenamiento", p: 2, partes: [["il arrive", "-", 2]] },
          { nota: "elisión", p: 3, partes: [["l'école", "-", 3]] } ], seg: [
        { es: "La s de les suena z:", p: 1 }, { fr: "les amis", p: 1 }, { es: "La l de il se pega a la vocal:", p: 2 }, { fr: "il arrive", p: 2 }, { es: "Y la vocal se cae:", p: 3 }, { fr: "l'école", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde está prohibida la liaison?", o: ["les haricots", "les amis"], a: 0,
        bien: "¡Sí! H aspirada: sin liaison.", mal: "Delante de h aspirada no hay liaison.",
        seg: [ { es: "Pausa. ¿Dónde no se une?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les amis", "nous avons", "un ami", "deux heures", "neuf ans", "les héros"], seg: [
        { es: "Prohibida después de et y delante de h aspirada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los amigos", img: "bg-cafe", yo: "camila",
    escena: "Camila presenta a sus amigos.",
    pj: PJ,
    lineas: [
      ["camila", "Je te présente mes amis. Nous avons un ami en commun !", "Te presento a mis amigos. ¡Tenemos un amigo en común!"],
      ["hugo", "Il arrive à deux heures ? Il a neuf ans de plus que moi.", "¿Llega a las dos? Tiene nueve años más que yo."],
      ["camila", "C'est un grand homme. Je ne sais pas s'il pourra venir.", "Es un gran hombre. No sé si podrá venir."],
      ["hugo", "Les enfants et les héros du film sont là !", "¡Los niños y los héroes de la película están aquí!"]
    ],
    fijate: "Fíjate: mes‿amis, nous‿avons, un‿ami, deux‿heures, neuf‿ans, grand‿homme; pero les | héros."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Unir las palabras",
      idea: "Liaison: la consonante muda suena si sigue una vocal: s, x → [z] (les‿amis); d → [t] (grand‿homme); f → [v] (neuf‿heures). Obligatoria entre artículo y nombre y entre pronombre y verbo. Prohibida después de et y delante de h aspirada. Encadenamiento: la consonante que ya suena se une (il‿arrive). Elisión: l', d', j', s'.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "les amis", es: "los amigos — s suena [z]" },
        { fr: "nous avons", es: "tenemos — s suena [z]" },
        { fr: "un ami", es: "un amigo — n se une" },
        { fr: "les enfants", es: "los niños — [z]" },
        { fr: "deux heures", es: "las dos — x suena [z]" },
        { fr: "un grand homme", es: "un gran hombre — d suena [t]" },
        { fr: "neuf ans", es: "nueve años — f suena [v]" },
        { fr: "en été", es: "en verano — liaison obligatoria" },
        { fr: "les héros", es: "los héroes — h aspirada: sin liaison" },
        { fr: "et alors", es: "y entonces — después de et: sin liaison" },
        { fr: "il arrive", es: "llega — encadenamiento" },
        { fr: "avec elle", es: "con ella — encadenamiento" },
        { fr: "l'école · j'ai · s'il", es: "elisión" },
        { fr: "un bon ami", es: "un buen amigo — bon pierde la nasal" }
      ],
      clave: "Liaison facultativa (registro cuidado): je suis‿allé, pas‿encore.",
      ej: [["un étudiant anglais", "un estudiante inglés: sin liaison entre nombre y adjetivo"], ["les haricots", "los fríjoles: sin liaison"], ["Je ne sais pas s'il pourra venir.", "No sé si podrá venir."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les amis (cortado, sin z)", "les amis", "Sin liaison suena cortado."], ["Je ne ai pas faim.", "Je n'ai pas faim.", "Elisión: n'."], ["les héros (con z)", "les héros", "h aspirada: sin liaison."]] }
  ],
  ejemplos: [
    { sit: "Dices «los amigos».", resp: "les amis", pasos: ["La s suena [z] y se une."], porque: "Liaison obligatoria." },
    { sit: "Dices «a las dos».", resp: "à deux heures", pasos: ["La x suena [z]."], porque: "Liaison." },
    { sit: "Dices «tiene nueve años».", resp: "Il a neuf ans.", pasos: ["La f suena [v]."], porque: "Liaison." }
  ],
  comprueba: [
    { q: "En les amis, la s suena…", o: ["[z]", "no suena"], a: 0, b: "phono", porque: "Liaison." },
    { q: "Después de et, la liaison…", o: ["está prohibida", "es obligatoria"], a: 0, b: "phono", porque: "Regla." },
    { q: "En il arrive, la l se une a la vocal siguiente. Es…", o: ["un encadenamiento", "una elisión"], a: 0, b: "phono", porque: "La l ya suena." }
  ],
  practica: [
    { fase: "guiada", c: ["fl-liaison"], k: "choice", es: true, say: "les amis", ask: "Escucha. ¿Qué oyes entre les y amis?", q: "Elige.", o: ["un sonido [z]", "una pausa", "un sonido [s]"], a: 0, pista: "s + vocal.", why: "<b>les‿amis</b> [z]." },
    { fase: "guiada", c: ["fl-liaison", "fl-interdit"], k: "sort", ask: "¿Liaison obligatoria, prohibida o facultativa?", q: "Clasifica.", cats: ["Obligatoria", "Prohibida", "Facultativa"], items: [["les amis", 0], ["nous avons", 0], ["en été", 0], ["un étudiant anglais", 1], ["les héros", 1], ["et alors", 1], ["je suis allé", 2], ["pas encore", 2]], pista: "et y h aspirada: prohibida.", why: "Tipos." },
    { fase: "guiada", c: ["fl-liaison"], k: "choice", es: true, say: "deux heures", ask: "Escucha. ¿Cómo suena la x?", q: "Elige.", o: ["[z]", "[ks]", "no suena"], a: 0, pista: "x + vocal, como s.", why: "<b>deux‿heures</b> [z]." },
    { fase: "indep", c: ["fl-interdit"], k: "spot", ask: "Encuentra el error.", s: "Je [ne] ai pas faim ce matin .", fix: "n'", why: "<b>n'ai</b>." },
    { fase: "indep", c: ["fl-interdit"], k: "fill", ask: "Escribe si + il.", q: "Je ne sais pas ___ pourra venir.", acc: ["s'il", "s’il"], why: "<b>s'il</b>." },
    { fase: "indep", c: ["fl-liaison"], k: "choice", es: true, say: "Il a neuf ans.", ask: "Escucha. ¿Cómo suena la f de neuf?", q: "Elige.", o: ["[v]", "[f]", "no suena"], a: 0, why: "<b>neuf‿ans</b> [v]." },
    { fase: "aplica", c: ["fl-liaison", "fl-interdit"], k: "match", ask: "Une cada fenómeno con su ejemplo.", q: "Ejemplo → fenómeno", pairs: [["les enfants", "liaison"], ["avec elle", "encadenamiento"], ["l'école", "elisión"], ["un bon ami", "desnasalización"]], why: "Cuatro fenómenos." },
    { fase: "aplica", c: ["fl-interdit"], k: "choice", ask: "¿Dónde está prohibida la liaison?", q: "«___»", o: ["les haricots", "les amis", "nous avons"], a: 0, why: "h aspirada." },
    { fase: "dominio", c: ["fl-liaison"], k: "choice", es: true, say: "un grand homme", ask: "Escucha. ¿Cómo suena la d de grand?", q: "Elige.", o: ["[t]", "[d]", "no suena"], a: 0, why: "<b>grand‿homme</b> [t]." },
    { fase: "dominio", c: ["fl-liaison"], k: "order", ask: "Ordena: «Tenemos un amigo en común».", tokens: ["Nous avons", "un ami", "en commun."], why: "<b>Nous avons un ami en commun.</b>" },
    { fase: "dominio", c: ["fl-liaison", "fl-interdit"], k: "listen", say: "Les enfants arrivent à deux heures.", acc: ["Les enfants arrivent à deux heures.", "Les enfants arrivent à 2 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les enfants arrivent à deux heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["présente", "te", "mes", "commun", "plus", "que", "moi", "c'est", "sais", "pourra", "venir", "film", "sont", "là", "du", "faim", "ce", "matin", "arrivent", "à", "pas", "je", "ne", "ai"] }
};

E["fon-rythme-intonation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Ritmo, acento y entonación",
  objetivo: {
    que: "Vas a poner el acento al final del grupo y hacer subir o bajar la voz según preguntes o afirmes.",
    corto: "ca-FÉ, Tu viens ? ↗",
    podras: ["Acentuar la última sílaba pronunciada: pro-BLÈME.", "Subir la voz en las preguntas de sí o no.", "Bajar la voz al afirmar, ordenar y en las preguntas con où, quand…"],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/pensativo"],
    previos: ["Las preguntas (A1, lección 57) y las letras mudas (lección 6)."],
    capacidad: "Ahora tus frases suenan con la melodía francesa."
  },
  requiere: R("it-mots", "it-reg", "fm-finales"), recupera: ["it-reg"],
  conceptos: {
    "fr-accent": { n: "acento en la última sílaba del grupo", b: "phono" },
    "fr-melodie": { n: "pregunta sí / no ↗; afirmación, orden y pregunta con où ↘", b: "phono" }
  },
  video: {
    titulo: "La melodía", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "pro-BLÈME", seg: [
        { es: "Hola. En francés la fuerza cae siempre al final." } ] },
      { v: "dos",
        a: { tag: "sube", fr: "Tu viens ?", es: "pregunta sí / no" },
        b: { tag: "baja", fr: "Où tu vas ?", es: "pregunta con où" },
        seg: [ { es: "Para preguntar sí o no, la voz sube:", p: 1 }, { fr: "Tu viens ?", p: 1 }, { es: "Con où, quand, la voz baja:", p: 2 }, { fr: "Où tu vas ?", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En «Je voudrais un café», el acento cae en…", o: ["la última sílaba: -fé", "la primera: ca-"], a: 0, es: true,
        bien: "¡Sí! Al final del grupo.", mal: "El acento cae al final: ca-FÉ.",
        seg: [ { es: "Pausa. ¿Dónde cae el acento?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un problème", "un café", "Tu viens ?", "Où tu vas ?", "Ferme la porte !"], seg: [
        { es: "Al final del grupo, siempre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preguntas", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo practican la entonación.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu viens ce soir ?", "¿Vienes esta noche?"],
      ["camila", "Oui. Où tu vas après ?", "Sí. ¿Adónde vas después?"],
      ["hugo", "Le soir, je lis. Je voudrais un café.", "Por la noche leo. Quisiera un café."],
      ["camila", "Pas de problème ! Ferme la porte, il fait froid.", "¡No hay problema! Cierra la puerta, hace frío."]
    ],
    fijate: "Fíjate: Tu viens ce soir ? ↗ / Où tu vas après ? ↘ / Le soir ↗, je lis ↘."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Acento y melodía",
      idea: "El acento cae en la última sílaba pronunciada del grupo: pro-BLÈME, ca-FÉ. En una frase, solo se alarga el final de cada grupo. Pregunta sí / no: la voz sube ↗. Pregunta con où, quand…: baja ↘. Afirmación y orden: baja ↘. Grupo que continúa: sube ↗.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "un problème", es: "un problema — pro-BLÈME" },
        { fr: "un café", es: "un café — ca-FÉ" },
        { fr: "l'université", es: "la universidad — u-ni-ver-si-TÉ" },
        { fr: "un appartement moderne", es: "un apartamento moderno — mo-DERNE" },
        { fr: "Tu viens ?", es: "¿Vienes? — sube ↗" },
        { fr: "Est-ce que tu viens ?", es: "¿Vienes? — sube ↗" },
        { fr: "Viens-tu ?", es: "¿Vienes? — sube ↗" },
        { fr: "Où tu vas ?", es: "¿Adónde vas? — baja ↘" },
        { fr: "Il fait beau.", es: "Hace buen tiempo. — baja ↘" },
        { fr: "Ferme la porte !", es: "¡Cierra la puerta! — baja ↘" },
        { fr: "Le soir, je lis.", es: "Por la noche leo. — sube ↗, baja ↘" },
        { fr: "Parlez-vous français ?", es: "¿Habla francés? — formal, sube ↗" },
        { fr: "Où va-t-il ce soir ?", es: "¿Adónde va esta noche? — baja ↘" }
      ],
      clave: "En español el acento distingue palabras; en francés cae en la última sílaba del grupo." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un problème (acento al principio)", "un problème", "El acento cae al final: pro-BLÈME."], ["Où va-il ce soir ?", "Où va-t-il ce soir ?", "Se añade -t- entre dos vocales."], ["Tu viens ? (bajando la voz)", "Tu viens ?", "Pregunta sí / no: la voz sube."]] }
  ],
  ejemplos: [
    { sit: "Preguntas «¿vienes?» con entonación.", resp: "Tu viens ?", pasos: ["La voz sube al final ↗."], porque: "Pregunta total." },
    { sit: "Dices «Por la noche, leo».", resp: "Le soir, je lis.", pasos: ["Le soir ↗ (continúa).", "je lis ↘ (termina)."], porque: "Dos grupos." },
    { sit: "Preguntas formalmente si habla francés.", resp: "Parlez-vous français ?", pasos: ["Inversión.", "La voz sube."], porque: "Formal." }
  ],
  comprueba: [
    { q: "El acento francés cae…", o: ["en la última sílaba del grupo", "en la penúltima, como en español"], a: 0, b: "phono", porque: "Al final." },
    { q: "En una pregunta de sí o no, la voz…", o: ["sube", "baja"], a: 0, b: "phono", porque: "↗" },
    { q: "En «Où tu vas ?», la voz…", o: ["baja", "sube"], a: 0, b: "phono", porque: "Pregunta parcial ↘." }
  ],
  practica: [
    { fase: "guiada", c: ["fr-melodie"], k: "sort", ask: "¿La voz sube o baja al final?", q: "Clasifica.", cats: ["Sube ↗", "Baja ↘"], items: [["Tu as faim ?", 0], ["Est-ce que vous êtes prêts ?", 0], ["Vient-il demain ?", 0], ["Il fait beau.", 1], ["Ferme la porte !", 1], ["Je m'appelle Ana.", 1], ["Où habites-tu ?", 1]], pista: "Sí / no: sube.", why: "Melodía." },
    { fase: "guiada", c: ["fr-accent"], k: "choice", es: true, say: "un problème", ask: "Escucha. ¿Dónde cae la fuerza?", q: "Elige.", o: ["Al final: -blème", "Al principio: pro-"], a: 0, pista: "Siempre al final.", why: "pro-<b>BLÈME</b>." },
    { fase: "guiada", c: ["fr-accent"], k: "choice", es: true, say: "l'université", ask: "Escucha. ¿Qué sílaba se alarga?", q: "Elige.", o: ["-té, la última", "-ver-, la del medio", "u-, la primera"], a: 0, pista: "Al final del grupo.", why: "u-ni-ver-si-<b>TÉ</b>." },
    { fase: "indep", c: ["fr-melodie"], k: "fill", ask: "Escribe parler (vous), con inversión formal.", q: "___-vous français ?", acc: ["Parlez"], why: "<b>Parlez</b>-vous." },
    { fase: "indep", c: ["fr-melodie"], k: "spot", ask: "Encuentra el error.", s: "Où [va-il] ce soir ?", fix: "va-t-il", why: "<b>va-t-il</b>." },
    { fase: "indep", c: ["fr-melodie"], k: "choice", es: true, say: "Tu viens ?", ask: "Escucha. ¿Es pregunta o afirmación?", q: "Elige.", o: ["Pregunta: la voz sube", "Afirmación: la voz baja"], a: 0, why: "↗ = pregunta." },
    { fase: "aplica", c: ["fr-accent", "fr-melodie"], k: "match", ask: "Une cada concepto con su definición.", q: "Concepto → definición", pairs: [["le groupe rythmique", "palabras unidas sin pausa"], ["l'accent final", "alargar la última sílaba"], ["la continuation", "la voz sube en un grupo no final"], ["la conclusion", "la voz baja al terminar"]], why: "Vocabulario de la prosodia." },
    { fase: "aplica", c: ["fr-melodie"], k: "choice", es: true, say: "Le soir, je lis.", ask: "Escucha. ¿Cómo va la voz?", q: "Elige.", o: ["Sube en le soir, baja en je lis", "Baja en los dos grupos", "Sube en los dos grupos"], a: 0, why: "Continuación ↗, conclusión ↘." },
    { fase: "dominio", c: ["fr-accent"], k: "choice", es: true, say: "un appartement moderne", ask: "Escucha. ¿Qué sílaba del grupo se alarga?", q: "Elige.", o: ["-derne, la última", "a-, la primera", "-ment"], a: 0, why: "Fin del grupo: mo-<b>DERNE</b>." },
    { fase: "dominio", c: ["fr-melodie"], k: "order", ask: "Ordena las tres formas de «¿Vienes?» de la más oral a la más formal.", tokens: ["Tu viens ?", "Est-ce que tu viens ?", "Viens-tu ?"], why: "Oral → neutro → formal." },
    { fase: "dominio", c: ["fr-accent", "fr-melodie"], k: "listen", say: "Le soir, je lis.", acc: ["Le soir, je lis.", "Le soir je lis."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le soir, je lis.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Ana"], previo: ["viens", "ce", "soir", "oui", "où", "tu", "vas", "après", "lis", "voudrais", "pas", "de", "ferme", "porte", "fait", "froid", "beau", "as", "faim", "êtes", "prêts", "vient-il", "demain", "m'appelle", "habites-tu", "groupe", "rythmique", "accent", "final", "continuation", "conclusion", "l'accent", "le", "la"] }
};

E["fon-nasales-an-on-in"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les voyelles nasales [ɑ̃], [ɔ̃], [ɛ̃]",
  objetivo: {
    que: "Vas a reconocer las grafías de cada nasal y distinguir [ɑ̃], [ɔ̃] y [ɛ̃].",
    corto: "an, on, in.",
    podras: ["Leer an, am, en, em → [ɑ̃].", "Leer on, om → [ɔ̃].", "Leer in, ain, aim, ein, un → [ɛ̃]."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/lapiz"],
    previos: ["Las vocales nasales (lección 3)."],
    capacidad: "Ahora lees cualquier nasal sin pronunciar la n."
  },
  requiere: R("fn-nasal", "fn-pas"), recupera: ["fn-nasal"],
  conceptos: {
    "fna-grafias": { n: "an/en [ɑ̃], on [ɔ̃], in/ain/un [ɛ̃]", b: "phono" },
    "fna-pares": { n: "vent / vont / vin; blanc / blond", b: "phono" }
  },
  video: {
    titulo: "Tres nasales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "an · on · in", seg: [
        { es: "Hola. La n escrita no suena: solo avisa que la vocal es nasal." } ] },
      { v: "frase", filas: [
          { nota: "[ɑ̃]", p: 1, partes: [["enfant · temps", "-", 1]] },
          { nota: "[ɔ̃]", p: 2, partes: [["bon · nom", "-", 2]] },
          { nota: "[ɛ̃]", p: 3, partes: [["vin · pain · lundi", "-", 3]] } ], seg: [
        { es: "Boca abierta:", p: 1 }, { fr: "enfant, temps", p: 1 }, { es: "Labios redondos:", p: 2 }, { fr: "bon, nom", p: 2 }, { es: "Sonrisa:", p: 3 }, { fr: "vin, pain, lundi", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mis hijos están en la escuela.»", o: ["Mes enfants sont à l'école.", "Mes anfants sont à l'école."], a: 0,
        bien: "¡Sí! Enfants se escribe con en.", mal: "Se escribe enfants, aunque suene [ɑ̃].",
        seg: [ { es: "Pausa. Mis hijos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vent", "vont", "vin", "blanc", "blond", "cent", "nom"], seg: [
        { es: "Cent enfants chantent: tres veces la misma nasal.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan una fiesta.",
    pj: PJ,
    lineas: [
      ["hugo", "Le vin blanc est bon. Mon nom est sur la liste ?", "El vino blanco es bueno. ¿Mi nombre está en la lista?"],
      ["camila", "Oui. Cent enfants chantent une chanson à l'école !", "Sí. ¡Cien niños cantan una canción en la escuela!"],
      ["hugo", "J'ai faim le matin. Il y a du pain ?", "Tengo hambre por la mañana. ¿Hay pan?"],
      ["camila", "Oui, et il y a du vent : prends un manteau !", "Sí, y hace viento: ¡lleva un abrigo!"]
    ],
    fijate: "Fíjate: blanc, cent, enfants, chantent, vent [ɑ̃]; bon, nom, chanson [ɔ̃]; vin, faim, pain, matin [ɛ̃]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Las grafías de las nasales",
      idea: "an, am, en, em → [ɑ̃]: enfant, temps. on, om → [ɔ̃]: bon, nom. in, ain, aim, ein, un → [ɛ̃]: vin, pain, faim, lundi. Si sigue vocal o nn / mm, no hay nasal: bonne, femme.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'enfant · le temps · la chambre", es: "[ɑ̃]" },
        { fr: "le vent · cent · blanc", es: "el viento · cien · blanco — [ɑ̃]" },
        { fr: "ils chantent", es: "cantan — [ɑ̃] (-ent muda)" },
        { fr: "bon · le nom · onze", es: "bueno · el nombre · once — [ɔ̃]" },
        { fr: "la maison · le nombre · la chanson", es: "la casa · el número · la canción — [ɔ̃]" },
        { fr: "blond · long", es: "rubio · largo — [ɔ̃]" },
        { fr: "le vin · le pain · la faim", es: "el vino · el pan · el hambre — [ɛ̃]" },
        { fr: "lundi · le matin · vingt", es: "lunes · la mañana · veinte — [ɛ̃]" },
        { fr: "ils vont", es: "van — [ɔ̃]" },
        { fr: "bonne · la femme", es: "buena · la mujer — sin nasal" }
      ],
      clave: "Cent enfants chantent une chanson: [ɑ̃] tres veces y [ɔ̃] al final." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mes anfants sont à l'école.", "Mes enfants sont à l'école.", "Se escribe en aunque suene [ɑ̃]."], ["Il y a sant étudiants.", "Il y a cent étudiants.", "Cien = cent."], ["enfant (diciendo las n)", "enfant", "La n no suena: vocal nasal."]] }
  ],
  ejemplos: [
    { sit: "«Tengo veinte años.»", resp: "J'ai vingt ans.", pasos: ["vingt: [ɛ̃]; ans: [ɑ̃]."], porque: "Dos nasales." },
    { sit: "«Mi nombre es Laura.»", resp: "Mon nom est Laura.", pasos: ["mon, nom: [ɔ̃]."], porque: "on." },
    { sit: "«El vino blanco es bueno.»", resp: "Le vin blanc est bon.", pasos: ["vin [ɛ̃], blanc [ɑ̃], bon [ɔ̃]."], porque: "Las tres." }
  ],
  comprueba: [
    { q: "Las letras en suenan…", o: ["[ɑ̃], como an", "[ɛ̃], como in"], a: 0, b: "phono", porque: "en = an." },
    { q: "Pain tiene la nasal…", o: ["[ɛ̃], como vin", "[ɑ̃], como vent"], a: 0, b: "phono", porque: "ain." },
    { q: "La vocal NO es nasal en…", o: ["bonne", "bon"], a: 0, b: "phono", porque: "nn + e." }
  ],
  practica: [
    { fase: "guiada", c: ["fna-grafias"], k: "sort", ask: "¿Qué nasal tiene cada palabra?", q: "Clasifica.", cats: ["[ɑ̃]", "[ɔ̃]", "[ɛ̃]"], items: [["temps", 0], ["chambre", 0], ["vent", 0], ["maison", 1], ["nombre", 1], ["onze", 1], ["matin", 2], ["faim", 2]], pista: "en, an: [ɑ̃].", why: "Grafías." },
    { fase: "guiada", c: ["fna-pares"], k: "choice", es: true, say: "le vin", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el vino (vin)", "el viento (vent)", "van (vont)"], a: 0, pista: "Sonrisa.", why: "<b>vin</b> [ɛ̃]." },
    { fase: "guiada", c: ["fna-pares"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["vent", "viento"], ["vont", "van"], ["vin", "vino"], ["blanc", "blanco"], ["blond", "rubio"]], pista: "blond = rubio.", why: "Pares mínimos." },
    { fase: "indep", c: ["fna-grafias"], k: "fill", ask: "Escribe 20 en letras.", q: "J'ai ___ ans.", acc: ["vingt"], why: "<b>vingt</b>." },
    { fase: "indep", c: ["fna-grafias"], k: "fill", ask: "Escribe «nombre».", q: "Mon ___ est Laura.", acc: ["nom"], why: "<b>nom</b>." },
    { fase: "indep", c: ["fna-grafias"], k: "spot", ask: "Encuentra el error.", s: "Mes [anfants] sont à l'école .", fix: "enfants", why: "<b>enfants</b>." },
    { fase: "aplica", c: ["fna-grafias"], k: "spot", ask: "Encuentra el error.", s: "Il y a [sant] étudiants dans l'amphi .", fix: "cent", why: "<b>cent</b>." },
    { fase: "aplica", c: ["fna-pares"], k: "choice", es: true, say: "blond", ask: "Escucha. ¿Blanco o rubio?", q: "Elige.", o: ["rubio (blond)", "blanco (blanc)"], a: 0, why: "<b>blond</b> [ɔ̃]." },
    { fase: "dominio", c: ["fna-grafias"], k: "choice", ask: "¿En qué palabra la vocal NO es nasal?", q: "«___»", o: ["bonne", "long", "pain"], a: 0, why: "<b>bonne</b>: nn + e." },
    { fase: "dominio", c: ["fna-grafias"], k: "order", ask: "Ordena: «Cien niños cantan una canción».", tokens: ["Cent enfants", "chantent", "une chanson."], why: "<b>Cent enfants chantent une chanson.</b>" },
    { fase: "dominio", c: ["fna-grafias", "fna-pares"], k: "listen", say: "Le vin blanc est bon.", acc: ["Le vin blanc est bon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le vin blanc est bon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: ["mon", "est", "sur", "liste", "oui", "une", "l'école", "école", "j'ai", "il", "y", "a", "du", "prends", "manteau", "ans", "mes", "sont", "étudiants", "dans", "l'amphi", "amphi", "le", "la"] }
};

E["fon-e-caduc"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le e muet (e caduc)",
  objetivo: {
    que: "Vas a saber cuándo la e sin tilde se pronuncia [ə] y cuándo desaparece.",
    corto: "samedi → sam'di.",
    podras: ["Saber que é, è, ê siempre suenan.", "Callar la e final: table [tabl].", "Dejar caer la e si queda una sola consonante, y mantenerla si se juntarían tres."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "m2d/pensativo"],
    previos: ["Las e del francés (lección 2) y las letras mudas (lección 6)."],
    capacidad: "Ahora hablas con el ritmo natural del francés."
  },
  requiere: R("fe-e", "fm-finales", "fm-ent"), recupera: ["fm-ent"],
  conceptos: {
    "fec-final": { n: "e final muda: table, petite", b: "phono" },
    "fec-chute": { n: "la e cae con una consonante delante; se queda con tres", b: "phono" }
  },
  video: {
    titulo: "La e que cae", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "sam'di", seg: [
        { es: "Hola. La e sin tilde es tímida: muchas veces desaparece." } ] },
      { v: "dos",
        a: { tag: "cae", fr: "samedi", es: "dos sílabas" },
        b: { tag: "se queda", fr: "vendredi", es: "tres consonantes juntas" },
        seg: [ { es: "Aquí la e cae:", p: 1 }, { fr: "samedi", p: 1 }, { es: "Aquí se queda, si no se juntarían tres consonantes:", p: 2 }, { fr: "vendredi", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántas sílabas tiene samedi en la conversación?", o: ["Dos", "Tres"], a: 0, es: true,
        bien: "¡Sí! Sam-di.", mal: "La e cae: sam-di, dos sílabas.",
        seg: [ { es: "Pausa. Samedi." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le", "les", "ce", "ces", "de", "table", "petite"], seg: [
        { es: "é, è, ê nunca caen.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viernes", img: "bg-cafe", yo: "camila",
    escena: "Camila organiza su fin de semana.",
    pj: PJ,
    lineas: [
      ["camila", "Vendredi, je vais acheter du pain. Samedi, je reste à la maison.", "El viernes voy a comprar pan. El sábado me quedo en casa."],
      ["hugo", "Tu parles français maintenant ! Je ne sais pas comment tu fais.", "¡Ya hablas francés! No sé cómo lo haces."],
      ["camila", "J'ai acheté le livre et une petite table pour étudier.", "Compré el libro y una mesita para estudiar."],
      ["hugo", "Ferme la fenêtre, il fait froid.", "Cierra la ventana, hace frío."]
    ],
    fijate: "Fíjate: vendredi (se queda), samedi, maintenant, je ne sais pas, petite, fenêtre (la e cae)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "La e caduca",
      idea: "é, è, ê siempre suenan. La e sin tilde al final de palabra no suena: table [tabl]. Dentro de la frase cae si queda una sola consonante delante: samedi [samdi]. Se queda si se juntarían tres consonantes: vendredi [vɑ̃dʁədi].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "samedi", es: "sábado — se dice sam'di" },
        { fr: "vendredi · mercredi", es: "viernes · miércoles — la e se queda" },
        { fr: "la table", es: "la mesa — e final muda" },
        { fr: "une petite table", es: "una mesita — pe-tite, la e puede caer" },
        { fr: "maintenant", es: "ahora — la e puede caer" },
        { fr: "la fenêtre", es: "la ventana — la e puede caer" },
        { fr: "acheter", es: "comprar — la e puede caer" },
        { fr: "l'appartement · quelquefois", es: "el apartamento · a veces — la e se queda" },
        { fr: "le / les", es: "e débil / e cerrada" },
        { fr: "ce / ces", es: "este / estos" },
        { fr: "de / des", es: "de / unos" },
        { fr: "Je ne sais pas.", es: "No sé. — en rápido: j'sais pas" }
      ],
      clave: "Regla de las tres consonantes: si al caer la e se juntan tres, la e se queda." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["table (diciendo la e final)", "table", "La e final no suena."], ["J'ai acheté les livre.", "J'ai acheté le livre.", "Singular: le livre."], ["Tu parle français ?", "Tu parles français ?", "tu: -es (la e no suena, pero se escribe)."]] }
  ],
  ejemplos: [
    { sit: "Dices «sábado» en la conversación.", resp: "samedi", pasos: ["La e cae: sam-di."], porque: "Una consonante delante." },
    { sit: "Dices «viernes».", resp: "vendredi", pasos: ["La e se queda: d-r-d."], porque: "Tres consonantes." },
    { sit: "Dices «una mesita».", resp: "une petite table", pasos: ["table: e final muda."], porque: "e caduca." }
  ],
  comprueba: [
    { q: "La e de é, è, ê…", o: ["siempre suena", "puede caer"], a: 0, b: "phono", porque: "Con tilde, suena." },
    { q: "En vendredi la e se queda porque…", o: ["si cayera se juntarían tres consonantes", "lleva acento"], a: 0, b: "phono", porque: "Tres consonantes." },
    { q: "La e final de table…", o: ["no suena", "suena [ə]"], a: 0, b: "phono", porque: "Final." }
  ],
  practica: [
    { fase: "guiada", c: ["fec-chute"], k: "choice", es: true, say: "samedi", ask: "Escucha. ¿Cuántas sílabas oyes?", q: "Elige.", o: ["Dos", "Tres"], a: 0, pista: "La e cae.", why: "sam-di." },
    { fase: "guiada", c: ["fec-chute"], k: "sort", ask: "¿La e se pronuncia o cae?", q: "Clasifica.", cats: ["La e se pronuncia [ə]", "La e cae"], items: [["vendredi", 0], ["mercredi", 0], ["appartement", 0], ["quelquefois", 0], ["samedi", 1], ["la fenêtre", 1], ["acheter", 1], ["maintenant", 1]], pista: "Tres consonantes: se queda.", why: "Regla." },
    { fase: "guiada", c: ["fec-final"], k: "match", ask: "Une cada palabra con su pareja de plural o demostrativo.", q: "Singular → plural", pairs: [["le", "les"], ["ce", "ces"], ["de", "des"]], pista: "e débil / e cerrada.", why: "Pares." },
    { fase: "indep", c: ["fec-final"], k: "spot", ask: "Encuentra el error.", s: "J'ai acheté [les] livre .", fix: "le", why: "<b>le livre</b>." },
    { fase: "indep", c: ["fec-final"], k: "spot", ask: "Encuentra el error.", s: "Tu [parle] français ?", fix: "parles", why: "<b>parles</b>." },
    { fase: "indep", c: ["fec-final"], k: "choice", es: true, say: "la table", ask: "Escucha. ¿Se oye la e final?", q: "Elige.", o: ["No", "Sí"], a: 0, why: "e final muda." },
    { fase: "aplica", c: ["fec-chute"], k: "choice", es: true, say: "Je ne sais pas.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["No sé.", "No soy.", "No está."], a: 0, why: "<b>Je ne sais pas</b> = No sé." },
    { fase: "aplica", c: ["fec-chute"], k: "choice", ask: "¿Qué palabra tiene una e que cae en la conversación?", q: "«___»", o: ["samedi", "été", "mère"], a: 0, why: "<b>samedi</b>." },
    { fase: "dominio", c: ["fec-chute"], k: "choice", ask: "¿En qué palabra la e se queda?", q: "«___»", o: ["vendredi", "samedi", "maintenant"], a: 0, why: "<b>vendredi</b>: tres consonantes." },
    { fase: "dominio", c: ["fec-chute"], k: "order", ask: "Ordena: «El viernes voy a comprar pan».", tokens: ["Vendredi,", "je vais", "acheter", "du pain."], why: "<b>Vendredi, je vais acheter du pain.</b>" },
    { fase: "dominio", c: ["fec-final", "fec-chute"], k: "listen", say: "Vendredi, je vais acheter du pain.", acc: ["Vendredi, je vais acheter du pain.", "Vendredi je vais acheter du pain."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vendredi, je vais acheter du pain.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["je", "vais", "du", "pain", "reste", "maison", "tu", "parles", "français", "sais", "comment", "fais", "j'ai", "acheté", "livre", "une", "pour", "étudier", "ferme", "fait", "froid", "été", "mère", "parle", "ne", "pas"] }
};

E["fon-accent-groupe"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'intonation et le rythme : l'accent de groupe",
  objetivo: {
    que: "Vas a dividir la frase en grupos rítmicos y alargar solo la última sílaba de cada uno.",
    corto: "Mon ami colombien / habite à Paris.",
    podras: ["Dividir una frase en grupos de sentido.", "Alargar solo la última sílaba de cada grupo.", "Dar a las demás sílabas la misma duración."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/estrella"],
    previos: ["Ritmo, acento y entonación (lección 8)."],
    capacidad: "Ahora lees frases largas con ritmo francés."
  },
  requiere: R("fr-accent", "fr-melodie"), recupera: ["fr-accent"],
  conceptos: {
    "fag-groupes": { n: "dividir la frase en grupos rítmicos", b: "phono" },
    "fag-final": { n: "última sílaba de cada grupo; sílabas iguales", b: "phono" }
  },
  video: {
    titulo: "El ritmo de grupo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "pa-RIS", seg: [
        { es: "Hola. Las sílabas francesas duran lo mismo, menos la última del grupo." } ] },
      { v: "frase", filas: [
          { nota: "grupo 1", p: 1, partes: [["Mon ami colombien", "-", 1]] },
          { nota: "grupo 2", p: 2, partes: [["habite à Paris.", "-", 2]] } ], seg: [
        { es: "Primer grupo, se alarga bien:", p: 1 }, { fr: "Mon ami colombien", p: 1 }, { es: "Segundo grupo, se alarga ris:", p: 2 }, { fr: "habite à Paris.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde se alarga la voz en Paris?", o: ["En -ris", "En Pa-"], a: 0, es: true,
        bien: "¡Sí! pa-RIS.", mal: "Siempre al final: pa-RIS.",
        seg: [ { es: "Pausa. Paris." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Paris", "Canada", "chocolat", "Colombie", "restaurant"], seg: [
        { es: "Todas con la fuerza al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Presentación", img: "bg-universidad", yo: "camila",
    escena: "Camila practica una presentación oral.",
    pj: PJ,
    lineas: [
      ["camila", "J'étudie à l'université. Mon ami colombien habite à Paris.", "Estudio en la universidad. Mi amigo colombiano vive en París."],
      ["sofia", "Très bien. Et le matin ?", "Muy bien. ¿Y por la mañana?"],
      ["camila", "Le matin, je prends un café et je pars.", "Por la mañana tomo un café y salgo."],
      ["sofia", "Parfait ! Vous parlez espagnol ? — Oui, c'est ma langue.", "¡Perfecto! ¿Habla español? — Sí, es mi lengua."]
    ],
    fijate: "Fíjate: Mon ami colombien / habite à Paris. Le matin / je prends un café / et je pars."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Grupos rítmicos",
      idea: "Divide la frase en grupos de sentido. Solo la última sílaba pronunciada de cada grupo se alarga; las demás duran lo mismo. Pregunta sí / no ↗; afirmación ↘; grupo que continúa ↗.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Paris", es: "pa-RIS" },
        { fr: "le Canada", es: "ca-na-DA" },
        { fr: "le chocolat", es: "cho-co-LAT" },
        { fr: "la Colombie", es: "co-lom-BIE" },
        { fr: "le restaurant", es: "res-tau-RANT" },
        { fr: "colombien", es: "co-lom-BIEN" },
        { fr: "l'université", es: "u-ni-ver-si-TÉ" },
        { fr: "Mon ami colombien / habite à Paris.", es: "dos grupos" },
        { fr: "Le matin / je prends un café / et je pars.", es: "tres grupos" },
        { fr: "Mon frère / habite à Lyon.", es: "dos grupos, dos acentos" },
        { fr: "Tu viens ce soir ?", es: "sube al final ↗" },
        { fr: "Vous parlez espagnol ?", es: "sube al final ↗" }
      ],
      clave: "Cuantos grupos, tantos acentos." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Paris (con fuerza en Pa-)", "Paris", "Al final: pa-RIS."], ["colombien (con fuerza en -lom-)", "colombien", "Al final: co-lom-BIEN."], ["l'université (con fuerza en -ver-)", "l'université", "Al final: -TÉ."]] }
  ],
  ejemplos: [
    { sit: "Lees «Mon ami colombien habite à Paris».", resp: "Mon ami colombien / habite à Paris.", pasos: ["Dos grupos.", "Se alargan -bien y -ris."], porque: "Grupos." },
    { sit: "Lees «Le matin, je prends un café».", resp: "Le matin / je prends un café.", pasos: ["Le matin ↗.", "café ↘."], porque: "Continuación y fin." },
    { sit: "Preguntas «¿Hablas español?» con entonación.", resp: "Vous parlez espagnol ?", pasos: ["La voz sube al final."], porque: "Sí / no." }
  ],
  comprueba: [
    { q: "En francés, las sílabas que no están al final del grupo…", o: ["duran lo mismo", "se acentúan como en español"], a: 0, b: "phono", porque: "Ritmo regular." },
    { q: "En «Mon frère habite à Lyon» hay…", o: ["dos acentos, uno por grupo", "un acento por palabra"], a: 0, b: "phono", porque: "Dos grupos." },
    { q: "En «Tu viens ce soir ?», la voz…", o: ["sube al final", "baja al final"], a: 0, b: "phono", porque: "Pregunta sí / no." }
  ],
  practica: [
    { fase: "guiada", c: ["fag-final"], k: "choice", es: true, say: "Paris", ask: "Escucha. ¿Qué sílaba se alarga?", q: "Elige.", o: ["-ris", "Pa-"], a: 0, pista: "Al final.", why: "pa-<b>RIS</b>." },
    { fase: "guiada", c: ["fag-final"], k: "match", ask: "Une cada palabra con su sílaba acentuada.", q: "Palabra → sílaba", pairs: [["Paris", "-ris"], ["Canada", "-da"], ["chocolat", "-lat"], ["Colombie", "-bie"], ["restaurant", "-rant"]], pista: "Siempre la última.", why: "Acento final." },
    { fase: "guiada", c: ["fag-groupes"], k: "sort", ask: "¿Sube o baja al final?", q: "Clasifica.", cats: ["↗ sube", "↘ baja"], items: [["Tu as faim ?", 0], ["Vous parlez espagnol ?", 0], ["C'est ton frère ?", 0], ["Est-ce que tu viens ?", 0], ["J'habite à Pamplona.", 1], ["Qu'est-ce que tu fais ?", 1], ["Où habitez-vous ?", 1], ["Ferme la porte !", 1]], pista: "Sí / no: sube.", why: "Melodía." },
    { fase: "indep", c: ["fag-final"], k: "spot", ask: "Encuentra la palabra mal acentuada (la mayúscula marca la fuerza).", s: "J'habite à [PAris] depuis deux ans .", fix: "paRIS", why: "pa-<b>RIS</b>." },
    { fase: "indep", c: ["fag-final"], k: "spot", ask: "Encuentra la palabra mal acentuada.", s: "Mon ami est [coLOMbien] .", fix: "colomBIEN", why: "co-lom-<b>BIEN</b>." },
    { fase: "indep", c: ["fag-groupes"], k: "choice", es: true, say: "Mon ami colombien habite à Paris.", ask: "Escucha. ¿Cuántos grupos rítmicos oyes?", q: "Elige.", o: ["Dos", "Una palabra por grupo", "Uno solo"], a: 0, why: "Mon ami colombien / habite à Paris." },
    { fase: "aplica", c: ["fag-groupes"], k: "choice", ask: "¿Cómo se divide esta frase?", q: "«Mon ami colombien habite à Paris.»", o: ["Mon ami colombien / habite à Paris.", "Mon / ami colombien habite / à Paris.", "Mon ami / colombien habite à / Paris."], a: 0, why: "Grupos de sentido." },
    { fase: "aplica", c: ["fag-final"], k: "choice", es: true, say: "l'université", ask: "Escucha. ¿Qué sílaba se alarga?", q: "Elige.", o: ["-té", "-ver-", "u-"], a: 0, why: "u-ni-ver-si-<b>TÉ</b>." },
    { fase: "dominio", c: ["fag-groupes"], k: "order", ask: "Ordena los grupos: «Por la mañana tomo un café y salgo».", tokens: ["Le matin,", "je prends un café", "et je pars."], why: "Tres grupos." },
    { fase: "dominio", c: ["fag-groupes"], k: "choice", es: true, say: "Tu viens ce soir ?", ask: "Escucha. ¿Cómo termina la voz?", q: "Elige.", o: ["Sube", "Baja"], a: 0, why: "Pregunta sí / no ↗." },
    { fase: "dominio", c: ["fag-groupes", "fag-final"], k: "listen", say: "Mon ami colombien habite à Paris.", acc: ["Mon ami colombien habite à Paris."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon ami colombien habite à Paris.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Paris", "Canada", "Colombie", "Lyon", "Pamplona"], previo: ["j'étudie", "mon", "ami", "habite", "très", "bien", "matin", "prends", "café", "pars", "parfait", "parlez", "espagnol", "oui", "c'est", "ma", "langue", "frère", "viens", "ce", "soir", "as", "faim", "ton", "est-ce", "que", "j'habite", "qu'est-ce", "fais", "habitez-vous", "ferme", "porte", "depuis", "deux", "ans", "est", "chocolat", "restaurant", "colombien", "PAris", "coLOMbien", "paRIS", "colomBIEN", "où", "tu", "vous", "à", "le", "la"] }
};

E["fon-o-ouvert-ferme"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le o ouvert et le o fermé : [o] et [ɔ]",
  objetivo: {
    que: "Vas a distinguir la o cerrada [o] (beau, mot) de la o abierta [ɔ] (porte, homme).",
    corto: "pomme ≠ paume.",
    podras: ["Usar [o] al final de palabra y con au, eau, ô.", "Usar [ɔ] cuando suena una consonante después.", "Usar [o] delante de [z]: rose, chose."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/lapiz"],
    previos: ["Las grafías (lección 5)."],
    capacidad: "Ahora pronuncias bien la manzana y la palma."
  },
  requiere: R("fg-voy", "fm-finales"), recupera: ["fg-voy"],
  conceptos: {
    "fo-ferme": { n: "[o]: final de palabra, au, eau, ô, o + [z]", b: "phono" },
    "fo-ouvert": { n: "[ɔ]: o + consonante pronunciada (porte, homme)", b: "phono" }
  },
  video: {
    titulo: "Dos o", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "pomme ≠ paume", seg: [
        { es: "Hola. El francés tiene una o cerrada y una o abierta." } ] },
      { v: "dos",
        a: { tag: "cerrada [o]", fr: "la paume · chaud · beau", es: "labios redondos y tensos" },
        b: { tag: "abierta [ɔ]", fr: "la pomme · la porte · l'homme", es: "boca más abierta" },
        seg: [ { es: "Cerrada:", p: 1 }, { fr: "la paume, chaud, beau", p: 1 }, { es: "Abierta, con consonante después:", p: 2 }, { fr: "la pomme, la porte", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera una manzana, por favor.»", o: ["Je voudrais une pomme, s'il vous plaît.", "Je voudrais une paume, s'il vous plaît."], a: 0,
        bien: "¡Sí! Pomme, con o abierta.", mal: "La paume es la palma de la mano.",
        seg: [ { es: "Pausa. La manzana." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mot", "beau", "rose", "côte", "porte", "homme", "école"], seg: [
        { es: "au, eau y ô: casi siempre o cerrada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las vacaciones", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo planean un viaje.",
    pj: PJ,
    lineas: [
      ["hugo", "Cet été, je vais sur la côte d'Azur. Il fait chaud !", "Este verano voy a la Costa Azul. ¡Hace calor!"],
      ["camila", "Super ! Laure porte une robe jaune et elle mange une pomme.", "¡Genial! Laure lleva un vestido amarillo y come una manzana."],
      ["hugo", "Un verre d'eau, s'il vous plaît. Et tu veux de la sauce tomate ?", "Un vaso de agua, por favor. ¿Y quieres salsa de tomate?"],
      ["camila", "Oui. Cette voiture n'est pas à eux, c'est la nôtre.", "Sí. Este carro no es de ellos, es el nuestro."]
    ],
    fijate: "Fíjate: côte, chaud, jaune, eau, sauce, nôtre [o]; porte, robe, pomme [ɔ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[o] y [ɔ]",
      idea: "Si la palabra termina en sonido de vocal → [o]: mot, trop, vélo. Si después de la o suena una consonante → [ɔ]: porte, bol, homme. au, eau y ô casi siempre → [o]: chaud, beau, côte. o + sonido [z] → [o]: rose, chose.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le mot · trop · le vélo", es: "la palabra · demasiado · la bicicleta — [o]" },
        { fr: "chaud · beau · l'eau", es: "caliente · bonito · el agua — [o]" },
        { fr: "la côte", es: "la costa — [o]" },
        { fr: "la rose · la chose", es: "la rosa · la cosa — [o]" },
        { fr: "jaune · la sauce", es: "amarillo · la salsa — [o]" },
        { fr: "la nôtre", es: "la nuestra — [o]" },
        { fr: "la paume", es: "la palma de la mano — [o]" },
        { fr: "la pomme", es: "la manzana — [ɔ]" },
        { fr: "la porte · l'homme", es: "la puerta · el hombre — [ɔ]" },
        { fr: "l'école · le bol · la robe", es: "la escuela · el tazón · el vestido — [ɔ]" },
        { fr: "il saute / sotte", es: "salta [sot] / tonta [sɔt]" }
      ],
      clave: "Laure porte une robe jaune: [o] [ɔ] [ɔ] [o]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la cote d'Azur","la côte d'Azur","La costa lleva ô."], ["auto (diciendo a-u)", "auto", "au es una sola vocal: [o]."], ["Cette voiture, c'est la notre.", "Cette voiture, c'est la nôtre.", "Pronombre: nôtre, con ô."], ["Tu veux de la soce tomate ?", "Tu veux de la sauce tomate ?", "Se escribe au."]] }
  ],
  ejemplos: [
    { sit: "«Hoy hace mucho calor.»", resp: "Aujourd'hui, il fait très chaud.", pasos: ["chaud: au → [o]."], porque: "Cerrada." },
    { sit: "«Quisiera una manzana.»", resp: "Je voudrais une pomme.", pasos: ["pomme: o + m que suena → [ɔ]."], porque: "Abierta." },
    { sit: "«Un vaso de agua, por favor.»", resp: "Un verre d'eau, s'il vous plaît.", pasos: ["eau → [o]."], porque: "Cerrada." }
  ],
  comprueba: [
    { q: "Si después de la o suena una consonante, la o es…", o: ["abierta [ɔ]", "cerrada [o]"], a: 0, b: "phono", porque: "porte." },
    { q: "Las letras au y eau suenan…", o: ["[o] cerrada", "[ɔ] abierta"], a: 0, b: "phono", porque: "chaud, beau." },
    { q: "En rose, la o es cerrada porque…", o: ["va delante del sonido [z]", "lleva acento"], a: 0, b: "phono", porque: "o + [z]." }
  ],
  practica: [
    { fase: "guiada", c: ["fo-ferme", "fo-ouvert"], k: "sort", ask: "¿[o] cerrada o [ɔ] abierta?", q: "Clasifica.", cats: ["[o] cerrada", "[ɔ] abierta"], items: [["mot", 0], ["beau", 0], ["rose", 0], ["côte", 0], ["porte", 1], ["homme", 1], ["école", 1], ["bol", 1]], pista: "¿Suena una consonante después?", why: "Reglas." },
    { fase: "guiada", c: ["fo-ouvert"], k: "choice", es: true, say: "la pomme", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la manzana (pomme)", "la palma (paume)"], a: 0, pista: "o abierta.", why: "<b>pomme</b> [ɔ]." },
    { fase: "guiada", c: ["fo-ferme", "fo-ouvert"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["la paume", "la palma"], ["la pomme", "la manzana"], ["la côte", "la costa"], ["il saute", "salta"]], pista: "paume = palma.", why: "Pares." },
    { fase: "indep", c: ["fo-ferme"], k: "fill", ask: "Escribe «caliente» (con au).", q: "Aujourd'hui, il fait très ___ .", acc: ["chaud"], why: "<b>chaud</b>." },
    { fase: "indep", c: ["fo-ferme"], k: "fill", ask: "Escribe «agua».", q: "Un verre d'___ , s'il vous plaît.", acc: ["eau"], why: "<b>eau</b>." },
    { fase: "indep", c: ["fo-ferme"], k: "spot", ask: "Encuentra el error.", s: "Cette voiture n'est pas à eux , c'est la [notre] .", fix: "nôtre", why: "<b>nôtre</b>." },
    { fase: "aplica", c: ["fo-ferme"], k: "spot", ask: "Encuentra el error.", s: "Tu veux de la [soce] tomate avec tes pâtes ?", fix: "sauce", why: "<b>sauce</b>." },
    { fase: "aplica", c: ["fo-ferme"], k: "choice", ask: "¿Dónde aparece la o cerrada [o]?", q: "«___»", o: ["jaune", "porte", "robe"], a: 0, why: "<b>jaune</b>: au." },
    { fase: "dominio", c: ["fo-ferme"], k: "choice", ask: "Cet été, je vais sur la ___ d'Azur.", q: "«___»", o: ["côte", "cote"], a: 0, why: "<b>côte</b>." },
    { fase: "dominio", c: ["fo-ferme", "fo-ouvert"], k: "order", ask: "Ordena: «Laure lleva un vestido amarillo».", tokens: ["Laure", "porte", "une robe", "jaune."], why: "<b>Laure porte une robe jaune.</b>" },
    { fase: "dominio", c: ["fo-ferme", "fo-ouvert"], k: "listen", say: "Laure porte une robe jaune.", acc: ["Laure porte une robe jaune."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Laure porte une robe jaune.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laure", "Azur", "côte d'Azur"], previo: ["cet", "été", "vais", "sur", "fait", "super", "mange", "verre", "veux", "tomate", "oui", "cette", "voiture", "eux", "aujourd'hui", "très", "voudrais", "tes", "pâtes", "avec", "auto", "d'eau", "d'azur", "s'il", "vous", "plaît"] }
};

/* ================================ FON·5 y FON·6 ================================ */

E["fon-semi-voyelles"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les semi-voyelles [j], [w] et [ɥ]",
  objetivo: {
    que: "Vas a pronunciar las semivocales [j] (pied, fille), [w] (oui, moi) y [ɥ] (huit, lui), que se pegan a la vocal siguiente.",
    corto: "oui ≠ huit, Louis ≠ lui.",
    podras: ["Leer i + vocal, y, -ill- como [j].", "Leer ou + vocal, oi, oin como [w].", "Pronunciar [ɥ] con labios de tu: huit, nuit, lui."],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/pensativo"],
    previos: ["La u francesa (lección 1) y las grafías (lección 5)."],
    capacidad: "Ahora distingues oui de huit y Louis de lui."
  },
  requiere: R("fv-y", "fg-voy", "fg-cons"), recupera: ["fv-y", "fg-cons"],
  conceptos: {
    "fsv-j": { n: "[j]: pied, yeux, fille, travail, soleil", b: "phono" },
    "fsv-wq": { n: "[w]: oui, moi, loin / [ɥ]: huit, nuit, lui", b: "phono" }
  },
  video: {
    titulo: "Las semivocales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "oui · huit", seg: [
        { es: "Hola. Tres sonidos rápidos que se pegan a la vocal." } ] },
      { v: "frase", filas: [
          { nota: "[j]", p: 1, partes: [["le pied · la fille", "-", 1]] },
          { nota: "[w]", p: 2, partes: [["oui · moi · loin", "-", 2]] },
          { nota: "[ɥ]", p: 3, partes: [["huit · la nuit · lui", "-", 3]] } ], seg: [
        { es: "Como la y:", p: 1 }, { fr: "le pied, la fille", p: 1 }, { es: "Como la u de huevo:", p: 2 }, { fr: "oui, moi, loin", p: 2 }, { es: "Y una nueva, con labios de tu:", p: 3 }, { fr: "huit, la nuit, lui", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Le dijo que sí.» ¿Cuál es lui?", o: ["la que tiene labios de tu", "la que suena como oui"], a: 0, es: true,
        bien: "¡Sí! Lui con [ɥ].", mal: "Lui lleva [ɥ], con labios de tu; Louis lleva [w].",
        seg: [ { es: "Pausa. Lui." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["oui", "huit", "fille", "moi", "juin", "soleil", "cuisine"], seg: [
        { es: "Ojo: ville, mille y tranquille van con l.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lejos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de horarios.",
    pj: PJ,
    lineas: [
      ["hugo", "J'habite loin de l'université. Le cours commence à huit heures.", "Vivo lejos de la universidad. La clase empieza a las ocho."],
      ["camila", "Moi, je travaille la nuit depuis juin. Ma fille dort.", "Yo trabajo de noche desde junio. Mi hija duerme."],
      ["hugo", "Louis lui a dit oui ?", "¿Louis le dijo que sí?"],
      ["camila", "Oui ! Et il fait beau, le soleil brille. On mange dans la cuisine ?", "¡Sí! Y hace buen tiempo, brilla el sol. ¿Comemos en la cocina?"]
    ],
    fijate: "Fíjate: loin, moi, oui [w]; huit, nuit, juin, lui, cuisine [ɥ]; fille, soleil, travaille [j]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[j], [w] y [ɥ]",
      idea: "i + vocal, y, -ill-, -il final → [j]: pied, yeux, fille, soleil. ou + vocal → [w]; oi → [wa]; oin → [wɛ̃]: oui, moi, loin. u + vocal → [ɥ] con labios de tu: huit, nuit, lui. Excepciones con l: ville, mille, tranquille.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le pied · les yeux", es: "el pie · los ojos — [j]" },
        { fr: "la fille · la famille", es: "la hija · la familia — [j]" },
        { fr: "le travail · le soleil", es: "el trabajo · el sol — [j]" },
        { fr: "oui", es: "sí — [w]" },
        { fr: "moi · trois", es: "yo · tres — [wa]" },
        { fr: "loin", es: "lejos — [wɛ̃]" },
        { fr: "huit", es: "ocho — [ɥ]" },
        { fr: "la nuit", es: "la noche — [ɥ]" },
        { fr: "lui", es: "él, le — [ɥ]" },
        { fr: "Louis", es: "Luis — [w]" },
        { fr: "juin", es: "junio — [ɥ]" },
        { fr: "la cuisine", es: "la cocina — [ɥ], dos sílabas" },
        { fr: "la ville", es: "la ciudad — l (excepción)" }
      ],
      clave: "Louis lui a dit oui: [w], [ɥ], [w]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["lui (dicho como Louis)", "lui", "ui ≠ oui: labios de tu para lui."], ["Ma fiye étudie à Pamplona.", "Ma fille étudie à Pamplona.", "Se escribe ille."], ["Le solei brille.", "Le soleil brille.", "Se escribe eil."]] }
  ],
  ejemplos: [
    { sit: "«Le dijo que sí.»", resp: "Il lui a dit oui.", pasos: ["lui [ɥ], oui [w]."], porque: "Dos semivocales." },
    { sit: "«Vivo lejos.»", resp: "J'habite loin.", pasos: ["oin → [wɛ̃]."], porque: "[w]." },
    { sit: "«Mi hija trabaja de noche.»", resp: "Ma fille travaille la nuit.", pasos: ["fille, travaille [j]; nuit [ɥ]."], porque: "Las tres." }
  ],
  comprueba: [
    { q: "Huit, nuit y lui tienen…", o: ["[ɥ], con labios de tu", "[w], como oui"], a: 0, b: "phono", porque: "u + vocal." },
    { q: "Ville se pronuncia con…", o: ["l", "[j]"], a: 0, b: "phono", porque: "Excepción." },
    { q: "Cuisine tiene…", o: ["dos sílabas: cui-sine", "tres sílabas: cu-i-sine"], a: 0, b: "phono", porque: "[ɥ] no forma sílaba." }
  ],
  practica: [
    { fase: "guiada", c: ["fsv-wq"], k: "choice", es: true, say: "huit", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["ocho (huit)", "sí (oui)"], a: 0, pista: "Labios de tu.", why: "<b>huit</b> [ɥ]." },
    { fase: "guiada", c: ["fsv-j", "fsv-wq"], k: "sort", ask: "¿[j], [w] o [ɥ]?", q: "Clasifica.", cats: ["[j]", "[w]", "[ɥ]"], items: [["pied", 0], ["yeux", 0], ["famille", 0], ["oui", 1], ["moi", 1], ["loin", 1], ["nuit", 2], ["cuisine", 2]], pista: "u + vocal: [ɥ].", why: "Semivocales." },
    { fase: "guiada", c: ["fsv-wq"], k: "choice", es: true, say: "Louis", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["Luis (Louis)", "él (lui)"], a: 0, pista: "Suena como oui.", why: "<b>Louis</b> [w]." },
    { fase: "indep", c: ["fsv-wq"], k: "fill", ask: "Escribe 8 en letras.", q: "Le cours commence à ___ heures.", acc: ["huit"], why: "<b>huit</b>." },
    { fase: "indep", c: ["fsv-wq"], k: "fill", ask: "Escribe «lejos».", q: "J'habite ___ de l'université.", acc: ["loin"], why: "<b>loin</b>." },
    { fase: "indep", c: ["fsv-j"], k: "spot", ask: "Encuentra el error.", s: "Ma [fiye] étudie à Pamplona .", fix: "fille", why: "<b>fille</b>." },
    { fase: "aplica", c: ["fsv-j"], k: "spot", ask: "Encuentra el error.", s: "Il fait beau , le [solei] brille .", fix: "soleil", why: "<b>soleil</b>." },
    { fase: "aplica", c: ["fsv-j", "fsv-wq"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["oui", "sí"], ["huit", "ocho"], ["moi", "yo"], ["juin", "junio"], ["la fille", "la hija"]], why: "Semivocales." },
    { fase: "dominio", c: ["fsv-j"], k: "choice", ask: "¿En qué palabra ill suena con l?", q: "ill = [l] o [j]", o: ["ville", "fille", "famille"], a: 0, why: "<b>ville</b>: excepción." },
    { fase: "dominio", c: ["fsv-j", "fsv-wq"], k: "order", ask: "Ordena: «Trabajo de noche desde junio».", tokens: ["Je travaille", "la nuit", "depuis juin."], why: "<b>Je travaille la nuit depuis juin.</b>" },
    { fase: "dominio", c: ["fsv-j", "fsv-wq"], k: "listen", say: "Louis lui a dit oui.", acc: ["Louis lui a dit oui."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Louis lui a dit oui.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pamplona"], previo: ["j'habite", "de", "l'université", "cours", "commence", "heures", "je", "travaille", "depuis", "ma", "dort", "a", "dit", "il", "fait", "beau", "brille", "on", "mange", "dans", "étudie", "à"] }
};

E["fon-sourdes-sonores"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Sourdes ou sonores ? [s] / [z] et [ʃ] / [ʒ]",
  objetivo: {
    que: "Vas a distinguir las parejas sorda / sonora: [s] / [z] y [ʃ] / [ʒ], que cambian el sentido.",
    corto: "cousin ≠ coussin, chou ≠ joue.",
    podras: ["Leer s entre vocales como [z] y ss como [s].", "Pronunciar ch como [ʃ] (sin t).", "Pronunciar j y ge / gi como [ʒ]."],
    iconos: ["ic2/audifonos", "ic2/microfono", "m2d/pensativo"],
    previos: ["Las consonantes difíciles (lección 4)."],
    capacidad: "Ahora haces vibrar la garganta cuando toca."
  },
  requiere: R("fc-sz", "fg-cons"), recupera: ["fc-sz"],
  conceptos: {
    "fss-sz": { n: "[s] (ss, ç) / [z] (s entre vocales, z)", b: "phono" },
    "fss-chj": { n: "[ʃ] (ch) / [ʒ] (j, ge, gi)", b: "phono" }
  },
  video: {
    titulo: "Sordas y sonoras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "cousin ≠ coussin", seg: [
        { es: "Hola. Pon la mano en la garganta: la z y la j vibran." } ] },
      { v: "dos",
        a: { tag: "sin vibrar", fr: "le chou", es: "[ʃ]" },
        b: { tag: "vibra", fr: "la joue", es: "[ʒ]" },
        seg: [ { es: "Sin vibrar la garganta:", p: 1 }, { fr: "le chou", p: 1 }, { es: "Vibrando:", p: 2 }, { fr: "la joue", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi primo Paul es el hijo de mi tía.»", o: ["Mon cousin Paul est le fils de ma tante.", "Mon coussin Paul est le fils de ma tante."], a: 0,
        bien: "¡Sí! Cousin, con [z].", mal: "Un coussin es un cojín. Primo: cousin.",
        seg: [ { es: "Pausa. Mi primo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["poisson", "poison", "chou", "joue", "bouche", "bouge", "douze"], seg: [
        { es: "Una letra cambia todo: bouche, bouge.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el jardín", img: "bg-cafe", yo: "camila",
    escena: "Camila habla de su familia.",
    pj: PJ,
    lineas: [
      ["camila", "Mon cousin mange du poisson. Ils ont douze ans.", "Mi primo come pescado. Tienen doce años."],
      ["hugo", "Le chat joue dans le jardin. Tu cherches quoi ?", "El gato juega en el jardín. ¿Qué buscas?"],
      ["camila", "Je cherche mon coussin rouge ! Il est dans la maison ?", "¡Busco mi cojín rojo! ¿Está en la casa?"],
      ["hugo", "Comme dessert, je voudrais une mousse au chocolat.", "De postre, quisiera una mousse de chocolate."]
    ],
    fijate: "Fíjate: cousin, maison, douze [z]; poisson, coussin, dessert [s]; chat, cherche [ʃ]; joue, jardin, rouge [ʒ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Parejas que cambian el sentido",
      idea: "s sola entre dos vocales → [z]: maison, cousin. ss entre vocales → [s]: poisson, dessert, coussin. ch → [ʃ] («shh», sin t): chat, chercher. j y g + e / i → [ʒ]: jour, rouge.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le cousin", es: "el primo — [z]" },
        { fr: "le coussin", es: "el cojín — [s]" },
        { fr: "le poisson / le poison", es: "el pescado [s] / el veneno [z]" },
        { fr: "le désert / le dessert", es: "el desierto [z] / el postre [s]" },
        { fr: "la maison · la rose · zéro · douze", es: "la casa · la rosa · cero · doce — [z]" },
        { fr: "le garçon", es: "el niño — [s]" },
        { fr: "le chou", es: "el repollo — [ʃ]" },
        { fr: "la joue", es: "la mejilla — [ʒ]" },
        { fr: "la bouche", es: "la boca — [ʃ]" },
        { fr: "il bouge", es: "se mueve — [ʒ]" },
        { fr: "chercher", es: "buscar — [ʃ] dos veces" },
        { fr: "le jardin · rouge · le jour", es: "el jardín · rojo · el día — [ʒ]" },
        { fr: "l'orchestre", es: "la orquesta — ch = [k]" },
        { fr: "Ils ont deux frères.", es: "Tienen dos hermanos. — ils‿ont [z]" }
      ],
      clave: "ils sont [s] (son) / ils ont [z] (tienen): ¡cambia el verbo!" },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mon coussin Paul est le fils de ma tante.", "Mon cousin Paul est le fils de ma tante.", "Primo: cousin [z]."], ["Le Sahara est un grand dessert.", "Le Sahara est un grand désert.", "Desierto: désert [z]."], ["chat (dicho con t)", "chat", "ch = [ʃ], sin t."]] }
  ],
  ejemplos: [
    { sit: "«Mi primo vive en Lyon.»", resp: "Mon cousin habite à Lyon.", pasos: ["s entre vocales: [z]."], porque: "cousin." },
    { sit: "«Los viernes comemos pescado.»", resp: "Le vendredi, on mange du poisson.", pasos: ["ss: [s]."], porque: "poisson." },
    { sit: "«Tienen dos hermanos.»", resp: "Ils ont deux frères.", pasos: ["ils‿ont: [z]."], porque: "Liaison." }
  ],
  comprueba: [
    { q: "La s sola entre dos vocales suena…", o: ["[z]", "[s]"], a: 0, b: "phono", porque: "maison." },
    { q: "Ch se pronuncia…", o: ["[ʃ], como «shh», sin t", "como la ch española"], a: 0, b: "phono", porque: "chat." },
    { q: "En orchestre, ch suena…", o: ["[k]", "[ʃ]"], a: 0, b: "phono", porque: "Palabra de origen griego." }
  ],
  practica: [
    { fase: "guiada", c: ["fss-sz"], k: "choice", es: true, say: "le cousin", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el primo (cousin)", "el cojín (coussin)"], a: 0, pista: "¿Vibra la garganta?", why: "<b>cousin</b> [z]." },
    { fase: "guiada", c: ["fss-sz", "fss-chj"], k: "sort", ask: "¿Qué sonido?", q: "Clasifica.", cats: ["[s]", "[z]", "[ʃ]", "[ʒ]"], items: [["poisson", 0], ["garçon", 0], ["rose", 1], ["zéro", 1], ["chat", 2], ["bouche", 2], ["jour", 3], ["rouge", 3]], pista: "s entre vocales: [z].", why: "Cuatro sonidos." },
    { fase: "guiada", c: ["fss-chj"], k: "choice", es: true, say: "la joue", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la mejilla (joue)", "el repollo (chou)"], a: 0, pista: "Vibra.", why: "<b>joue</b> [ʒ]." },
    { fase: "indep", c: ["fss-sz"], k: "fill", ask: "Escribe «primo».", q: "Mon ___ habite à Lyon.", acc: ["cousin"], why: "<b>cousin</b>." },
    { fase: "indep", c: ["fss-sz"], k: "fill", ask: "Escribe «pescado».", q: "Le vendredi, on mange du ___ .", acc: ["poisson"], why: "<b>poisson</b>." },
    { fase: "indep", c: ["fss-sz"], k: "spot", ask: "Encuentra el error.", s: "Mon [coussin] Paul est le fils de ma tante .", fix: "cousin", why: "<b>cousin</b>." },
    { fase: "aplica", c: ["fss-sz"], k: "spot", ask: "Encuentra el error.", s: "Le Sahara est un grand [dessert] .", fix: "désert", why: "<b>désert</b>." },
    { fase: "aplica", c: ["fss-chj"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le chou", "el repollo"], ["la joue", "la mejilla"], ["la bouche", "la boca"], ["il bouge", "se mueve"], ["douze", "doce"]], why: "Pares." },
    { fase: "dominio", c: ["fss-sz"], k: "choice", es: true, say: "Ils ont deux frères.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Tienen dos hermanos.", "Son dos hermanos."], a: 0, why: "ils‿ont [z] = tienen." },
    { fase: "dominio", c: ["fss-chj"], k: "choice", ask: "¿Dónde suena [k]?", q: "«___»", o: ["orchestre", "chercher", "chat"], a: 0, why: "<b>orchestre</b>." },
    { fase: "dominio", c: ["fss-sz", "fss-chj"], k: "listen", say: "Mon cousin choisit le poisson.", acc: ["Mon cousin choisit le poisson."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon cousin choisit le poisson.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon", "Sahara"], previo: ["mon", "mange", "du", "ils", "ont", "ans", "chat", "joue", "dans", "cherches", "quoi", "cherche", "est", "comme", "voudrais", "mousse", "chocolat", "habite", "vendredi", "on", "fils", "ma", "tante", "grand", "choisit", "deux", "frères", "sont"] }
};

E["fon-nombres"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Prononcer les nombres : six, dix, huit, vingt, cent",
  objetivo: {
    que: "Vas a pronunciar los números cuyo final cambia: solos, ante consonante y ante vocal.",
    corto: "six [sis], six livres [si], dix amis [diz].",
    podras: ["Decir six, dix, huit solos con su consonante.", "Callarla ante consonante: six livres.", "Unirla ante vocal: dix amis, huit ans, neuf ans."],
    iconos: ["ic2/moneda", "ic2/audifonos", "ic2/lapiz"],
    previos: ["Los números (A1, lecciones 2, 17 y 18) y la liaison (lección 7)."],
    capacidad: "Ahora dices los números sin dudar."
  },
  requiere: R("fl-liaison", "fm-finales"), recupera: ["na-num", "fl-liaison"],
  conceptos: {
    "fnb-final": { n: "six, dix, huit: solos suenan; ante consonante, mudos", b: "phono" },
    "fnb-liaison": { n: "ante vocal: dix‿amis [z], neuf‿ans [v]; vingt y cent", b: "phono" }
  },
  video: {
    titulo: "Los números", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "six · six livres", seg: [
        { es: "Hola. Six cambia de sonido según lo que viene después." } ] },
      { v: "frase", filas: [
          { nota: "solo", p: 1, partes: [["six", "-", 1]] },
          { nota: "+ consonante", p: 2, partes: [["six livres", "-", 2]] },
          { nota: "+ vocal", p: 3, partes: [["six amis", "-", 3]] } ], seg: [
        { es: "Solo, se oye la s:", p: 1 }, { fr: "six", p: 1 }, { es: "Ante consonante, se calla:", p: 2 }, { fr: "six livres", p: 2 }, { es: "Ante vocal, suena z:", p: 3 }, { fr: "six amis", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo veinte euros en la billetera.»", o: ["J'ai vingt euros dans mon portefeuille.", "J'ai vin euros dans mon portefeuille."], a: 0,
        bien: "¡Sí! Vingt se escribe con gt.", mal: "Vin es vino. Veinte: vingt.",
        seg: [ { es: "Pausa. Veinte." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["six", "dix", "huit", "neuf", "vingt", "cent", "sept"], seg: [
        { es: "La x de six y dix nunca suena ks.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cita", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hablan de edades y horas.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai vingt ans et ma sœur en a six. Mon frère a huit ans.", "Tengo veinte años y mi hermana tiene seis. Mi hermano tiene ocho."],
      ["hugo", "Rendez-vous à dix heures ? La bibliothèque ouvre à dix heures.", "¿Nos vemos a las diez? La biblioteca abre a las diez."],
      ["camila", "D'accord. Le livre coûte vingt euros… j'ai six livres à acheter !", "De acuerdo. El libro cuesta veinte euros… ¡tengo seis libros por comprar!"],
      ["hugo", "Et le sept mars, c'est mon anniversaire : j'aurai vingt-deux ans.", "Y el siete de marzo es mi cumpleaños: cumpliré veintidós."]
    ],
    fijate: "Fíjate: six [sis] / six livres [si]; huit‿ans, dix‿heures; vingt [vɛ̃] / vingt-deux [vɛ̃t]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Números que cambian",
      idea: "six, dix, huit solos: [sis], [dis], [ɥit]. Ante consonante se callan: six livres [si livʁ]. Ante vocal se unen: dix‿amis [z], huit‿ans [t], neuf‿ans [v]. vingt [vɛ̃] y cent [sɑ̃]: t muda, salvo en liaison y de 21 a 29.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "six · dix · huit", es: "solos: se oye la consonante" },
        { fr: "six livres", es: "seis libros — la x se calla" },
        { fr: "dix stylos", es: "diez bolígrafos — la x se calla" },
        { fr: "huit jours", es: "ocho días — la t se calla" },
        { fr: "dix amis", es: "diez amigos — [z]" },
        { fr: "huit ans", es: "ocho años — [t]" },
        { fr: "neuf ans · neuf heures", es: "nueve años · las nueve — [v]" },
        { fr: "dix heures", es: "las diez — [z]" },
        { fr: "vingt · cent", es: "veinte · cien — t muda" },
        { fr: "vingt-deux", es: "veintidós — [vɛ̃t]" },
        { fr: "dix-sept · dix-huit · dix-neuf", es: "17 [s] · 18 [z] · 19 [z]" },
        { fr: "soixante", es: "sesenta — [swasɑ̃t]" },
        { fr: "quatre-vingt-un", es: "ochenta y uno — sin t" },
        { fr: "sept", es: "siete — la p no suena" }
      ],
      clave: "Ça coûte vingt euros: aquí sí suena la t, por la liaison." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["six (dicho con ks)", "six", "La x de six y dix nunca es ks."], ["J'ai vin euros.", "J'ai vingt euros.", "Veinte: vingt."], ["le set mars", "le sept mars", "Siete: sept (la p no suena)."]] }
  ],
  ejemplos: [
    { sit: "Cuentas: cinco, seis.", resp: "cinq, six", pasos: ["six solo: se oye la s."], porque: "Solo." },
    { sit: "«Tengo seis libros.»", resp: "J'ai six livres.", pasos: ["Ante consonante: six se calla."], porque: "Consonante." },
    { sit: "«Nos vemos a las diez.»", resp: "Rendez-vous à dix heures.", pasos: ["Ante vocal: [z]."], porque: "Liaison." }
  ],
  comprueba: [
    { q: "En six livres, la x…", o: ["no suena", "suena [s]"], a: 0, b: "phono", porque: "Ante consonante." },
    { q: "En dix amis, la x suena…", o: ["[z]", "[ks]"], a: 0, b: "phono", porque: "Liaison." },
    { q: "La x de six y dix suena [ks]…", o: ["nunca", "siempre"], a: 0, b: "phono", porque: "Nunca." }
  ],
  practica: [
    { fase: "guiada", c: ["fnb-final"], k: "sort", ask: "¿Se oye la consonante final?", q: "Clasifica.", cats: ["Suena", "No suena"], items: [["J'en ai six.", 0], ["huit ans", 0], ["J'en ai dix.", 0], ["neuf", 0], ["six livres", 1], ["huit jours", 1], ["dix stylos", 1], ["cent", 1]], pista: "Ante consonante: se calla.", why: "Regla." },
    { fase: "guiada", c: ["fnb-liaison"], k: "choice", es: true, say: "dix amis", ask: "Escucha. ¿Cómo suena la x?", q: "Elige.", o: ["[z]", "[ks]", "no suena"], a: 0, pista: "Ante vocal.", why: "<b>dix‿amis</b> [z]." },
    { fase: "guiada", c: ["fnb-final"], k: "choice", es: true, say: "six livres", ask: "Escucha. ¿Se oye la x de six?", q: "Elige.", o: ["No", "Sí, como [s]"], a: 0, pista: "Ante consonante.", why: "six livres [si]." },
    { fase: "indep", c: ["fnb-liaison"], k: "fill", ask: "Escribe 8 en letras.", q: "Mon frère a ___ ans.", acc: ["huit"], why: "<b>huit</b>." },
    { fase: "indep", c: ["fnb-liaison"], k: "fill", ask: "Escribe 10 en letras.", q: "La bibliothèque ouvre à ___ heures.", acc: ["dix"], why: "<b>dix</b>." },
    { fase: "indep", c: ["fnb-final"], k: "spot", ask: "Encuentra el error.", s: "J'ai [vin] euros dans mon portefeuille .", fix: "vingt", why: "<b>vingt</b>." },
    { fase: "aplica", c: ["fnb-final"], k: "spot", ask: "Encuentra el error.", s: "Rendez-vous le [set] mars à la fac .", fix: "sept", why: "<b>sept</b>." },
    { fase: "aplica", c: ["fnb-liaison"], k: "match", ask: "Une cada número con su pronunciación.", q: "Número → pronunciación", pairs: [["dix-sept", "[disɛt]"], ["dix-huit", "[dizɥit]"], ["dix-neuf", "[diznœf]"], ["vingt-deux", "[vɛ̃tdø]"]], why: "Números compuestos." },
    { fase: "dominio", c: ["fnb-liaison"], k: "choice", es: true, say: "Il a neuf ans.", ask: "Escucha. ¿Cómo suena la f?", q: "Elige.", o: ["[v]", "[f]"], a: 0, why: "<b>neuf‿ans</b> [v]." },
    { fase: "dominio", c: ["fnb-final", "fnb-liaison"], k: "order", ask: "Ordena: «Tengo veinte años y mi hermana tiene seis».", tokens: ["J'ai vingt ans", "et ma sœur", "en a six."], why: "<b>J'ai vingt ans et ma sœur en a six.</b>" },
    { fase: "dominio", c: ["fnb-final", "fnb-liaison"], k: "listen", say: "Rendez-vous à dix heures.", acc: ["Rendez-vous à dix heures.", "Rendez-vous à 10 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Rendez-vous à dix heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["j'ai", "ans", "ma", "sœur", "en", "a", "mon", "frère", "rendez-vous", "heures", "bibliothèque", "ouvre", "d'accord", "livre", "coûte", "euros", "livres", "acheter", "mars", "anniversaire", "j'aurai", "c'est", "dans", "portefeuille", "fac", "cinq", "il", "stylos", "jours", "amis", "à", "le", "la", "et"] }
};

E["fon-homophones"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Un son, plusieurs mots : les homophones grammaticaux",
  objetivo: {
    que: "Vas a escribir bien las palabras que suenan igual: a / à, et / est, son / sont, on / ont, ou / où.",
    corto: "a / à, et / est, son / sont.",
    podras: ["Elegir a / à con el truco de avait.", "Elegir est / et con était.", "Elegir sont / son, ont / on y ou / où."],
    iconos: ["ic2/lapiz", "ic2/bombilla", "m2d/pensativo"],
    previos: ["Las e (lección 2) y el imparfait (A2, lección 3)."],
    capacidad: "Ahora escribes sin las faltas más comunes."
  },
  requiere: R("imp-forma", "fe-e"), recupera: ["imp-forma"],
  conceptos: {
    "fh-truc": { n: "a/à (avait), est/et (était), sont/son (étaient), ont/on (avaient)", b: "ortho" },
    "fh-ou": { n: "ou (o) / où (donde)", b: "ortho" }
  },
  video: {
    titulo: "Suenan igual", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "a · à", seg: [
        { es: "Hola. Suenan igual, se escriben distinto. Hay un truco." } ] },
      { v: "frase", filas: [
          { nota: "¿avait?", p: 1, partes: [["Il a un cours à midi.", "-", 1]] },
          { nota: "¿était?", p: 2, partes: [["Mon frère est étudiant.", "-", 2]] },
          { nota: "¿étaient?", p: 3, partes: [["Mes amis sont contents.", "-", 3]] } ], seg: [
        { es: "Si puedes decir avait, es a sin acento:", p: 1 }, { es: "Si puedes decir était, es est:", p: 2 }, { es: "Si puedes decir étaient, es sont:", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mis amigos están contentos.»", o: ["Mes amis sont contents.", "Mes amis son contents."], a: 0,
        bien: "¡Sí! Sont = verbo.", mal: "Se puede decir étaient: sont.",
        seg: [ { es: "Pausa. ¿Son o sont?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["a / à", "et / est", "son / sont", "on / ont", "ou / où"], seg: [
        { es: "Cambia al imperfecto y mira si funciona.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un correo", img: "bg-universidad", yo: "camila",
    escena: "Camila revisa la ortografía de un correo.",
    pj: PJ,
    lineas: [
      ["camila", "Mon frère est étudiant à Pamplona et il a un cours à midi.", "Mi hermano es estudiante en Pamplona y tiene una clase a mediodía."],
      ["hugo", "Mes amis sont contents : on dit qu'ils ont raison.", "Mis amigos están contentos: dicen que tienen razón."],
      ["camila", "Tu viens avec nous ou tu restes ici ?", "¿Vienes con nosotros o te quedas aquí?"],
      ["hugo", "Où ? À la bibliothèque. C'est la première fois que je viens !", "¿Adónde? A la biblioteca. ¡Es la primera vez que vengo!"]
    ],
    fijate: "Fíjate: est / et, a / à, sont, ont / on, ou / où."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "El truco del imperfecto",
      idea: "Si puedes decir avait → a; si no → à. Si puedes decir était → est; si no → et. Si puedes decir étaient → sont; si no → son (su). Si puedes decir avaient → ont; si no → on. ou = o; où = donde.",
      intro: "Toca cada tarjeta.",
      palabras: [
        { fr: "il a (avait)", es: "tiene — verbo avoir" },
        { fr: "à", es: "a, en — preposición" },
        { fr: "il est (était)", es: "es, está — verbo être" },
        { fr: "et", es: "y — conjunción" },
        { fr: "ils sont (étaient)", es: "son, están — verbo être" },
        { fr: "son", es: "su — posesivo" },
        { fr: "ils ont (avaient)", es: "tienen — verbo avoir" },
        { fr: "on", es: "se, nosotros — pronombre" },
        { fr: "ou", es: "o" },
        { fr: "où", es: "donde, adónde" },
        { fr: "c'est / s'est", es: "es / se (verbo pronominal)" },
        { fr: "tu peux / un peu", es: "puedes / un poco" }
      ],
      clave: "Ils sont à la bibliothèque: sont (étaient) y à (no se puede decir avait)." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mes amis son contents.", "Mes amis sont contents.", "sont = étaient."], ["Mon frère et étudiant.", "Mon frère est étudiant.", "est = était."], ["Je vais a Bogotá.", "Je vais à Bogotá.", "No se puede decir avait: à."]] }
  ],
  ejemplos: [
    { sit: "«Tiene un examen mañana.»", resp: "Il a un examen demain.", pasos: ["¿Il avait? Sí → a."], porque: "Verbo." },
    { sit: "«Voy a Bogotá.»", resp: "Je vais à Bogotá.", pasos: ["¿avait? No → à."], porque: "Preposición." },
    { sit: "«¿Vienes o te quedas?»", resp: "Tu viens ou tu restes ?", pasos: ["o = ou, sin acento."], porque: "Conjunción." }
  ],
  comprueba: [
    { q: "Si se puede cambiar por était, se escribe…", o: ["est", "et"], a: 0, b: "ortho", porque: "Verbo être." },
    { q: "Où con acento significa…", o: ["donde", "o"], a: 0, b: "ortho", porque: "Lugar." },
    { q: "Si se puede cambiar por avaient, se escribe…", o: ["ont", "on"], a: 0, b: "ortho", porque: "Verbo avoir." }
  ],
  practica: [
    { fase: "guiada", c: ["fh-truc"], k: "choice", ask: "«Tiene un examen mañana.»", q: "«Il ___ un examen demain.»", o: ["a", "à"], a: 0, pista: "¿Il avait…?", why: "<b>a</b>." },
    { fase: "guiada", c: ["fh-truc"], k: "choice", ask: "«Mis amigos llegan tarde.»", q: "«Mes amis ___ en retard.»", o: ["sont", "son"], a: 0, pista: "¿étaient?", why: "<b>sont</b>." },
    { fase: "guiada", c: ["fh-truc"], k: "sort", ask: "¿a (verbo) o à (preposición)?", q: "Clasifica.", cats: ["a (verbo avoir)", "à (preposición)"], items: [["Il ___ vingt ans.", 0], ["Elle ___ un chat.", 0], ["Paul ___ raison.", 0], ["Je pense ___ toi.", 1], ["On va ___ la plage.", 1], ["C'est ___ moi !", 1]], pista: "¿avait?", why: "Truco." },
    { fase: "indep", c: ["fh-truc"], k: "fill", ask: "Escribe on u ont.", q: "Ils ___ fini leurs devoirs.", acc: ["ont"], why: "<b>ont</b>." },
    { fase: "indep", c: ["fh-truc"], k: "fill", ask: "Escribe a o à.", q: "Je vais ___ Bogotá la semaine prochaine.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["fh-truc"], k: "spot", ask: "Encuentra el error.", s: "Mon frère [et] étudiant à Pamplona .", fix: "est", why: "<b>est</b>." },
    { fase: "aplica", c: ["fh-truc"], k: "spot", ask: "Encuentra el error.", s: "Les étudiants [son] contents de leurs notes .", fix: "sont", why: "<b>sont</b>." },
    { fase: "aplica", c: ["fh-ou"], k: "choice", ask: "«¿Vienes con nosotros o te quedas aquí?»", q: "«Tu viens avec nous ___ tu restes ici ?»", o: ["ou", "où"], a: 0, why: "o = <b>ou</b>." },
    { fase: "dominio", c: ["fh-truc", "fh-ou"], k: "match", ask: "Une cada palabra con su truco.", q: "Palabra → truco", pairs: [["a", "se puede cambiar por avait"], ["est", "se puede cambiar por était"], ["sont", "se puede cambiar por étaient"], ["ont", "se puede cambiar por avaient"], ["où", "indica un lugar o un momento"]], why: "Los trucos." },
    { fase: "dominio", c: ["fh-truc"], k: "choice", ask: "«Es la primera vez que vengo a París.»", q: "«___ la première fois que je viens à Paris.»", o: ["C'est", "S'est", "Ces"], a: 0, why: "<b>C'est</b>." },
    { fase: "dominio", c: ["fh-truc", "fh-ou"], k: "listen", say: "Ils sont à la bibliothèque.", acc: ["Ils sont à la bibliothèque."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ils sont à la bibliothèque.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pamplona", "Bogotá", "Paris", "Paul"], previo: ["mon", "frère", "étudiant", "étudiants", "il", "un", "cours", "midi", "mes", "amis", "contents", "dit", "qu'ils", "raison", "tu", "viens", "avec", "nous", "restes", "ici", "bibliothèque", "c'est", "première", "fois", "que", "je", "examen", "demain", "vais", "semaine", "prochaine", "retard", "vingt", "ans", "elle", "chat", "pense", "toi", "va", "plage", "moi", "fini", "leurs", "devoirs", "notes", "ils", "s'est", "ces", "la", "les", "en", "de"] }
};

E["fon-graphies-e"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les graphies de [e] : é, -er, -ez, -et",
  objetivo: {
    que: "Vas a reconocer las formas de escribir [e]: é, -er y -ez finales, et, y -ai de j'ai.",
    corto: "é, -er, -ez, et.",
    podras: ["Leer é, -er (parler), -ez (nez) como [e].", "Saber que la r de -er y la z de -ez no suenan.", "Distinguir parler / parlez al escribir."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Las e del francés (lección 2)."],
    capacidad: "Ahora sabes cómo escribir lo que oyes como [e]."
  },
  requiere: R("fe-e", "fm-finales"), recupera: ["fe-e"],
  conceptos: {
    "fge-grafias": { n: "é, -er, -ez, et, -ai (j'ai) → [e]", b: "phono" },
    "fge-verbe": { n: "parler / parlez / parlé: mismo sonido, distinta forma", b: "phono" }
  },
  video: {
    titulo: "Las grafías de [e]", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "é · -er · -ez", seg: [
        { es: "Hola. Un solo sonido, varias formas de escribirlo." } ] },
      { v: "frase", filas: [
          { nota: "é", p: 1, partes: [["l'été · le café", "-", 1]] },
          { nota: "-er", p: 2, partes: [["parler · manger", "-", 2]] },
          { nota: "-ez", p: 3, partes: [["vous parlez · le nez · chez", "-", 3]] } ], seg: [
        { es: "Con é:", p: 1 }, { fr: "l'été, le café", p: 1 }, { es: "Con er, la r no suena:", p: 2 }, { fr: "parler, manger", p: 2 }, { es: "Con ez, la z no suena:", p: 3 }, { fr: "vous parlez, le nez", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ustedes hablan muy bien francés.»", o: ["Vous parlez très bien français.", "Vous parler très bien français."], a: 0,
        bien: "¡Sí! Vous → -ez.", mal: "Con vous: parlez.",
        seg: [ { es: "Pausa. Ustedes hablan." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["été", "parler", "parlez", "parlé", "nez", "et", "j'ai"], seg: [
        { es: "Suenan igual: parler, parlez, parlé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cena", img: "bg-cafe", yo: "camila",
    escena: "Hugo invita a Camila y a su hermana.",
    pj: PJ,
    lineas: [
      ["hugo", "Vous allez manger chez moi ce soir ?", "¿Van a comer en mi casa esta noche?"],
      ["camila", "Oui ! J'ai étudié le français toute la journée.", "¡Sí! He estudiado francés todo el día."],
      ["hugo", "Le café et le thé sont prêts. Vous parlez très bien !", "El café y el té están listos. ¡Hablan muy bien!"],
      ["camila", "Merci. Cet été, je vais parler français tous les jours.", "Gracias. Este verano voy a hablar francés todos los días."]
    ],
    fijate: "Fíjate: allez, manger, chez, j'ai, étudié, café, et, parlez, été, parler: todos con [e]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Escribir [e]",
      idea: "é: été, café, étudiant. -er final de verbo: parler, manger (la r no suena). -ez: vous parlez, le nez, chez (la z no suena). et (conjunción). -ai en j'ai, je parlerai. Ojo: mer, hiver, cher, fer suenan [ɛʁ]: no es el -er de los verbos.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'été · le café", es: "el verano · el café — é" },
        { fr: "l'étudiant", es: "el estudiante — é" },
        { fr: "parler · manger · chanter · aller", es: "infinitivos — -er" },
        { fr: "vous parlez", es: "ustedes hablan — -ez" },
        { fr: "le nez · chez · assez", es: "la nariz · en casa de · bastante — -ez" },
        { fr: "et", es: "y" },
        { fr: "j'ai", es: "tengo, he — [e]" },
        { fr: "parlé · étudié", es: "hablado · estudiado — é" },
        { fr: "la mer · l'hiver · cher · le fer", es: "el mar · el invierno · caro · el hierro — [ɛʁ]" },
        { fr: "les / le lait", es: "los [e] / la leche [ɛ]" }
      ],
      clave: "parler, parlez, parlé: mismo sonido, tres formas." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["parler (diciendo la r)", "parler", "La r del infinitivo en -er no suena."], ["Vous parler très bien français.", "Vous parlez très bien français.", "vous: -ez."], ["la mer (dicha como parler)", "la mer", "mer suena [ɛʁ], con r."]] }
  ],
  ejemplos: [
    { sit: "«Van a comer en mi casa.»", resp: "Vous allez manger chez moi.", pasos: ["allez, manger, chez: [e]."], porque: "Tres grafías." },
    { sit: "«He estudiado francés.»", resp: "J'ai étudié le français.", pasos: ["j'ai, étudié: [e]."], porque: "Grafías." },
    { sit: "«el café y el té»", resp: "le café et le thé", pasos: ["é, et, é: [e]."], porque: "Mismo sonido." }
  ],
  comprueba: [
    { q: "La r de parler…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "-er de verbo." },
    { q: "Mer, hiver y cher terminan en…", o: ["[ɛʁ], con r", "[e], sin r"], a: 0, b: "phono", porque: "No son verbos en -er." },
    { q: "Con vous, el verbo termina en…", o: ["-ez", "-er"], a: 0, b: "phono", porque: "vous parlez." }
  ],
  practica: [
    { fase: "guiada", c: ["fge-grafias"], k: "sort", ask: "¿Suena [e] como é u otro sonido?", q: "Clasifica.", cats: ["[e] como é", "Otro sonido"], items: [["aller", 0], ["assez", 0], ["et", 0], ["été", 0], ["mer", 1], ["hiver", 1], ["cher", 1], ["fer", 1]], pista: "mer, cher: con r.", why: "Grafías." },
    { fase: "guiada", c: ["fge-verbe"], k: "choice", ask: "«Ustedes hablan.»", q: "«vous ___»", o: ["parlez", "parler", "parlé"], a: 0, pista: "vous: -ez.", why: "<b>vous parlez</b>." },
    { fase: "guiada", c: ["fge-grafias"], k: "choice", es: true, say: "le nez", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la nariz (nez)", "nacido (né)", "la nieve (neige)"], a: 0, pista: "La z no suena.", why: "<b>le nez</b>." },
    { fase: "indep", c: ["fge-verbe"], k: "spot", ask: "Encuentra el error.", s: "Vous [parler] très bien français .", fix: "parlez", why: "<b>parlez</b>." },
    { fase: "indep", c: ["fge-grafias"], k: "choice", ask: "Busca la intrusa: ¿cuál NO suena [e] al final?", q: "«___»", o: ["mer", "parler", "nez"], a: 0, why: "<b>mer</b> [mɛʁ]." },
    { fase: "indep", c: ["fge-grafias"], k: "fill", ask: "Escribe «y».", q: "le café ___ le thé", acc: ["et"], why: "<b>et</b>." },
    { fase: "aplica", c: ["fge-grafias", "fge-verbe"], k: "match", ask: "Une las palabras que suenan igual.", q: "Palabra → homófona", pairs: [["parler", "parlé"], ["et", "é"], ["les", "lé"], ["chez", "chai"]], why: "Mismo sonido." },
    { fase: "aplica", c: ["fge-verbe"], k: "choice", es: true, say: "chanter", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["Con [e], sin r", "Con [ɛʁ], con r"], a: 0, why: "<b>chanter</b>: -er muda." },
    { fase: "dominio", c: ["fge-grafias"], k: "choice", ask: "«He estudiado francés.»", q: "«J'ai ___ le français.»", o: ["étudié", "étudier", "étudiez"], a: 0, why: "Participio: <b>étudié</b>." },
    { fase: "dominio", c: ["fge-grafias"], k: "order", ask: "Ordena: «Van a comer en mi casa».", tokens: ["Vous allez", "manger", "chez moi."], why: "<b>Vous allez manger chez moi.</b>" },
    { fase: "dominio", c: ["fge-grafias", "fge-verbe"], k: "listen", say: "Vous allez manger chez moi.", acc: ["Vous allez manger chez moi.", "Vous allez manger chez moi ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vous allez manger chez moi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["vous", "moi", "ce", "soir", "oui", "français", "toute", "journée", "le", "thé", "sont", "prêts", "très", "bien", "merci", "cet", "je", "vais", "tous", "jours", "né", "neige", "étudiez", "lé", "chai", "é", "mangez"] }
};

E["fon-graphies-e-ouvert"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les graphies de [ɛ] : è, ê, ai, ei, -et",
  objetivo: {
    que: "Vas a reconocer las formas de escribir [ɛ]: è, ê, ai, ei, -et final y e ante dos consonantes.",
    corto: "è, ê, ai, ei.",
    podras: ["Leer è, ê, ai, ei como [ɛ].", "Leer -et final de nombre como [ɛ] (poulet).", "Leer e ante dos consonantes como [ɛ] (merci, belle)."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Las grafías de [e] (lección 17)."],
    capacidad: "Ahora escribes bien neige, fête y mère."
  },
  requiere: R("fge-grafias", "fe-e"), recupera: ["fge-grafias"],
  conceptos: {
    "fgo-grafias": { n: "è, ê, ai, ei → [ɛ]", b: "phono" },
    "fgo-autres": { n: "-et final (poulet), e + dos consonantes (merci, belle)", b: "phono" }
  },
  video: {
    titulo: "Las grafías de [ɛ]", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "è · ê · ai · ei", seg: [
        { es: "Hola. La e abierta también tiene muchas caras." } ] },
      { v: "frase", filas: [
          { nota: "è, ê", p: 1, partes: [["la mère · la fête", "-", 1]] },
          { nota: "ai, ei", p: 2, partes: [["le lait · la neige", "-", 2]] },
          { nota: "-et, e + 2 consonantes", p: 3, partes: [["le poulet · merci", "-", 3]] } ], seg: [
        { es: "Con acento grave o circunflejo:", p: 1 }, { fr: "la mère, la fête", p: 1 }, { es: "Con ai o ei:", p: 2 }, { fr: "le lait, la neige", p: 2 }, { es: "Con et final y ante dos consonantes:", p: 3 }, { fr: "le poulet, merci", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nieva mucho en invierno.»", o: ["Il neige beaucoup en hiver.", "Il nège beaucoup en hiver."], a: 0,
        bien: "¡Sí! Neige, con ei.", mal: "Neige se escribe con ei.",
        seg: [ { es: "Pausa. Nieva." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["père", "forêt", "maison", "seize", "poulet", "belle", "avec"], seg: [
        { es: "Todas con la misma e abierta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta de mamá", img: "bg-cafe", yo: "camila",
    escena: "Camila organiza una fiesta para su madre.",
    pj: PJ,
    lineas: [
      ["camila", "Ma mère fait la fête samedi ! Elle a seize invités.", "¡Mi mamá hace una fiesta el sábado! Tiene dieciséis invitados."],
      ["hugo", "Super ! Il neige en février, faites attention.", "¡Genial! Nieva en febrero, tengan cuidado."],
      ["camila", "Il y a du poulet, du lait et une belle tarte. Merci pour ton aide !", "Hay pollo, leche y una tarta bonita. ¡Gracias por tu ayuda!"],
      ["hugo", "Avec plaisir. Je viens avec mon père.", "Con gusto. Voy con mi papá."]
    ],
    fijate: "Fíjate: mère, fête, seize, neige, février, faites, poulet, lait, belle, merci, avec, père: [ɛ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Escribir [ɛ]",
      idea: "è: père, mère, très. ê: fête, tête, forêt. ai: maison, lait, faire. ei: neige, seize, treize. e + dos consonantes o consonante final: merci, belle, avec, sel. -et final: poulet, jouet, alphabet (la t no suena).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le père · la mère · très", es: "el padre · la madre · muy — è" },
        { fr: "la fête · la tête · la forêt", es: "la fiesta · la cabeza · el bosque — ê" },
        { fr: "la maison · le lait · faire", es: "la casa · la leche · hacer — ai" },
        { fr: "la neige · seize · treize", es: "la nieve · 16 · 13 — ei" },
        { fr: "merci · belle · avec · le sel", es: "gracias · bella · con · la sal — e + consonantes" },
        { fr: "le poulet · le jouet · l'alphabet", es: "el pollo · el juguete · el alfabeto — -et" },
        { fr: "février", es: "febrero" },
        { fr: "faites attention", es: "tengan cuidado" }
      ],
      clave: "Ma mère fait la fête: [ɛ] tres veces." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il nège beaucoup.", "Il neige beaucoup.", "Nieva: neige, con ei."], ["la tète", "la tête", "Cabeza: tête, con ê."], ["le poulet (diciendo la t)", "le poulet", "-et final: la t no suena."]] }
  ],
  ejemplos: [
    { sit: "«Mi mamá hace una fiesta.»", resp: "Ma mère fait la fête.", pasos: ["è, ai, ê: [ɛ]."], porque: "Tres grafías." },
    { sit: "«Nieva en febrero.»", resp: "Il neige en février.", pasos: ["ei: [ɛ]."], porque: "neige." },
    { sit: "«Gracias por la leche.»", resp: "Merci pour le lait.", pasos: ["merci: e + rc; lait: ai."], porque: "[ɛ]." }
  ],
  comprueba: [
    { q: "Las letras ei de neige suenan…", o: ["[ɛ], e abierta", "[e], e cerrada"], a: 0, b: "phono", porque: "ei." },
    { q: "En poulet, la t final…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "-et." },
    { q: "En merci, la e suena abierta porque…", o: ["va ante dos consonantes", "lleva acento"], a: 0, b: "phono", porque: "e + rc." }
  ],
  practica: [
    { fase: "guiada", c: ["fgo-grafias"], k: "sort", ask: "¿[e] cerrada o [ɛ] abierta?", q: "Clasifica.", cats: ["[e] cerrada", "[ɛ] abierta"], items: [["été", 0], ["parler", 0], ["nez", 0], ["et", 0], ["père", 1], ["fête", 1], ["lait", 1], ["neige", 1]], pista: "è, ê, ai, ei: abierta.", why: "Grafías." },
    { fase: "guiada", c: ["fgo-grafias"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le père", "el padre"], ["la forêt", "el bosque"], ["la maison", "la casa"], ["seize", "dieciséis"]], pista: "seize: con ei.", why: "Las cuatro suenan con [ɛ]." },
    { fase: "guiada", c: ["fgo-grafias"], k: "choice", es: true, say: "treize", ask: "Escucha. ¿Qué número oyes?", q: "Elige.", o: ["13", "16", "3"], a: 0, pista: "trei-.", why: "<b>treize</b>." },
    { fase: "indep", c: ["fgo-grafias"], k: "fill", ask: "Escribe la letra que falta en «cabeza».", q: "la t___te", acc: ["ê"], why: "<b>tête</b>." },
    { fase: "indep", c: ["fgo-grafias"], k: "spot", ask: "Encuentra el error.", s: "Il [nège] beaucoup en hiver .", fix: "neige", why: "<b>neige</b>." },
    { fase: "indep", c: ["fgo-grafias"], k: "choice", es: true, say: "la fête", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la fiesta (fête)", "la cabeza (tête)", "el hecho (fait)"], a: 0, why: "<b>fête</b>." },
    { fase: "aplica", c: ["fgo-autres"], k: "choice", ask: "¿Qué palabra suena con [ɛ] por ir ante dos consonantes?", q: "«___»", o: ["belle", "été", "le"], a: 0, why: "<b>belle</b>: e + ll." },
    { fase: "aplica", c: ["fgo-autres"], k: "choice", es: true, say: "le poulet", ask: "Escucha. ¿Se oye la t final?", q: "Elige.", o: ["No", "Sí"], a: 0, why: "-et: t muda." },
    { fase: "dominio", c: ["fgo-grafias"], k: "choice", ask: "«la nieve»", q: "«___»", o: ["la neige", "la nège", "la nêge"], a: 0, why: "<b>neige</b>." },
    { fase: "dominio", c: ["fgo-grafias", "fgo-autres"], k: "order", ask: "Ordena: «Mi mamá hace una fiesta».", tokens: ["Ma mère", "fait", "la fête."], why: "<b>Ma mère fait la fête.</b>" },
    { fase: "dominio", c: ["fgo-grafias", "fgo-autres"], k: "listen", say: "Il neige en février.", acc: ["Il neige en février."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il neige en février.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ma", "fait", "samedi", "elle", "a", "invités", "super", "il", "en", "faites", "attention", "y", "du", "une", "tarte", "pour", "ton", "aide", "plaisir", "je", "viens", "mon", "beaucoup", "hiver", "été", "parler", "nez", "et", "le", "nège", "nêge"] }
};

/* ───── FON·6 · Una vocal, varias grafías (lecciones 19 a 22) ───── */
E["fon-graphies-o"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les graphies de [o] : o, ô, au, eau",
  objetivo: {
    que: "Vas a reconocer las cuatro formas de escribir [o]: o final, ô, au y eau.",
    corto: "vélo, hôtel, chaud, beau.",
    podras: ["Leer o final, ô, au y eau como [o].", "Escribir -eau al final de nombres como château o bateau.", "Escribir bien chaud, jaune, hôtel y bientôt."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/libro"],
    previos: ["La o abierta y la o cerrada (lección 12) y de la grafía al sonido (lección 5)."],
    capacidad: "Ahora escribes bien lo que oyes como [o]."
  },
  requiere: R("fo-ferme", "fg-voy"), recupera: ["fo-ferme"],
  conceptos: {
    "fgr-o": { n: "o final, ô, au, eau → [o] cerrada", b: "phono" },
    "fgr-eau": { n: "-eau al final de nombres: beau, château, bateau", b: "phono" }
  },
  video: {
    titulo: "Las grafías de [o]", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "o · ô · au · eau", seg: [
        { es: "Hola. Un solo sonido, cuatro formas de escribirlo." } ] },
      { v: "frase", filas: [
          { nota: "o, ô", p: 1, partes: [["le vélo · l'hôtel", "-", 1]] },
          { nota: "au", p: 2, partes: [["chaud · jaune", "-", 2]] },
          { nota: "eau", p: 3, partes: [["beau · le château", "-", 3]] } ], seg: [
        { es: "Con o final o con ô:", p: 1 }, { fr: "le vélo, l'hôtel", p: 1 }, { es: "Con a u:", p: 2 }, { fr: "chaud, jaune", p: 2 }, { es: "Con e a u, la e no suena:", p: 3 }, { fr: "beau, le château", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El castillo es muy bonito.»", o: ["Le château est très beau.", "Le châtau est très beau."], a: 0,
        bien: "¡Sí! Château, con eau.", mal: "Al final del nombre: -eau.",
        seg: [ { es: "Pausa. El castillo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vélo", "hôtel", "chaud", "jaune", "beau", "château", "l'eau"], seg: [
        { es: "Al final de un nombre, piensa primero en e a u.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un día de calor", img: "bg-paris", yo: "camila",
    escena: "Hugo propone un paseo a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Il fait chaud aujourd'hui ! On va au bord de l'eau ?", "¡Hace calor hoy! ¿Vamos a orillas del agua?"],
      ["camila", "Oui ! On prend le vélo ou le métro ?", "¡Sí! ¿Tomamos la bici o el metro?"],
      ["hugo", "Le vélo. Après, on visite le château : il est très beau.", "La bici. Después visitamos el castillo: es muy bonito."],
      ["camila", "Et on mange un gâteau à l'hôtel. À bientôt !", "Y comemos un pastel en el hotel. ¡Hasta pronto!"]
    ],
    fijate: "Fíjate: chaud, au, l'eau, vélo, métro, château, beau, gâteau, hôtel, bientôt: todas con [o]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Escribir [o]",
      idea: "o al final de sílaba o ante [z]: vélo, métro, rose. ô: hôtel, côte, drôle. au: auto, chaud, jaune. eau: beau, gâteau, l'eau (la e no suena). Muchos nombres terminan en -eau: château, bateau, bureau.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le vélo · le métro · la photo", es: "la bici · el metro · la foto — o final" },
        { fr: "la rose", es: "la rosa — o + s [z]" },
        { fr: "l'hôtel · bientôt · drôle", es: "el hotel · pronto · gracioso — ô" },
        { fr: "l'auto · jaune · pauvre", es: "el auto · amarillo · pobre — au" },
        { fr: "chaud · faux · haut", es: "caliente · falso · alto — au" },
        { fr: "beau · nouveau", es: "bonito · nuevo — eau" },
        { fr: "le château · le gâteau", es: "el castillo · el pastel — eau" },
        { fr: "le bateau · le bureau", es: "el barco · la oficina — eau" },
        { fr: "l'eau", es: "el agua — [o]" },
        { fr: "le mot · les maux", es: "la palabra · los males — mismo sonido" }
      ],
      ej: [["Il fait chaud au bord de l'eau.", "Hace calor a orillas del agua."], ["Le château est très beau.", "El castillo es muy bonito."], ["À bientôt à l'hôtel !", "¡Hasta pronto en el hotel!"]],
      clave: "Mismo sonido, cuatro grafías: vélo, hôtel, chaud, beau." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le châtau", "le château", "[o] al final de un nombre: muchas veces -eau."], ["Il fait cho.", "Il fait chaud.", "Caliente: chaud, con au y d muda."], ["l'hotel", "l'hôtel", "Hotel lleva ô."]] }
  ],
  ejemplos: [
    { sit: "«Hace calor hoy.»", resp: "Il fait chaud aujourd'hui.", pasos: ["chaud: au, y la d no suena."], porque: "au = [o]." },
    { sit: "«el castillo y el barco»", resp: "le château et le bateau", pasos: ["Nombres en [o] final: -eau."], porque: "-eau." },
    { sit: "«¡Hasta pronto!»", resp: "À bientôt !", pasos: ["bientôt: ô y t muda."], porque: "ô = [o]." }
  ],
  comprueba: [
    { q: "En beau, la e…", o: ["no suena", "suena [e]"], a: 0, b: "phono", porque: "eau = [o]." },
    { q: "Au y eau suenan…", o: ["[o]", "[au]"], a: 0, b: "phono", porque: "Un solo sonido." },
    { q: "Muchos nombres terminados en [o] se escriben…", o: ["-eau", "-au"], a: 0, b: "phono", porque: "château, bateau, bureau." }
  ],
  practica: [
    { fase: "guiada", c: ["fgr-o", "fgr-eau"], k: "sort", ask: "¿Con au o con eau?", q: "Clasifica.", cats: ["au", "eau"], items: [["chaud", 0], ["jaune", 0], ["l'auto", 0], ["pauvre", 0], ["beau", 1], ["le château", 1], ["nouveau", 1], ["le bureau", 1]], pista: "Al final de un nombre: eau.", why: "Grafías de [o]." },
    { fase: "guiada", c: ["fgr-eau"], k: "choice", es: true, say: "le bateau", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el barco (bateau)", "el castillo (château)", "el pastel (gâteau)"], a: 0, pista: "ba-.", why: "<b>le bateau</b>." },
    { fase: "guiada", c: ["fgr-o"], k: "choice", es: true, say: "jaune", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["amarillo (jaune)", "caliente (chaud)", "alto (haut)"], a: 0, pista: "Empieza con [ʒ].", why: "<b>jaune</b>." },
    { fase: "indep", c: ["fgr-eau"], k: "fill", ask: "Escribe «pastel».", q: "un ___ au chocolat", acc: ["gâteau"], why: "<b>gâteau</b>, con eau." },
    { fase: "indep", c: ["fgr-o"], k: "choice", ask: "«Hace calor.»", q: "«Il fait ___.»", o: ["chaud", "haut", "faux"], a: 0, why: "<b>chaud</b>: caliente." },
    { fase: "indep", c: ["fgr-o"], k: "spot", ask: "Encuentra el error.", s: "Il fait très [cho] aujourd'hui .", fix: "chaud", why: "<b>chaud</b>." },
    { fase: "aplica", c: ["fgr-o", "fgr-eau"], k: "match", ask: "Une las palabras que terminan con el mismo sonido.", q: "Palabra → rima", pairs: [["beau", "le vélo"], ["chaud", "faux"], ["l'eau", "haut"], ["le mot", "les maux"]], why: "Todas terminan en [o]." },
    { fase: "aplica", c: ["fgr-eau"], k: "order", ask: "Ordena: «El castillo es muy bonito».", tokens: ["Le château", "est très", "beau."], why: "<b>Le château est très beau.</b>" },
    { fase: "dominio", c: ["fgr-eau"], k: "choice", es: true, say: "le bureau", ask: "Escucha. ¿Cómo se escribe el final?", q: "Elige.", o: ["-eau", "-o", "-ô"], a: 0, why: "<b>le bureau</b>." },
    { fase: "dominio", c: ["fgr-o"], k: "order", ask: "Ordena: «Hace calor a orillas del agua».", tokens: ["Il fait chaud", "au bord", "de l'eau."], why: "<b>Il fait chaud au bord de l'eau.</b>" },
    { fase: "dominio", c: ["fgr-o", "fgr-eau"], k: "listen", say: "Le bateau est beau et il fait chaud.", acc: ["Le bateau est beau et il fait chaud."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le bateau est beau et il fait chaud.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["il", "fait", "aujourd'hui", "on", "va", "au", "bord", "de", "oui", "prend", "le", "ou", "après", "visite", "est", "très", "et", "mange", "un", "à", "chocolat", "la", "les"] }
};

E["fon-ou-oi"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Ou [u], oi [wa], oin [wɛ̃]",
  objetivo: {
    que: "Vas a leer ou como [u], oi como [wa], oy como [waj] y oin como [wɛ̃].",
    corto: "vous [u], moi [wa], loin [wɛ̃].",
    podras: ["Leer ou, où y oû como un solo sonido [u].", "Leer oi como [wa] y oy como [waj]: moi, voyage.", "Leer oin como [wɛ̃]: loin, point, moins."],
    iconos: ["ic2/audifonos", "ic2/libro", "ic2/bombilla"],
    previos: ["La vocal [u] (lección 1), de la grafía al sonido (lección 5) y las semivocales (lección 13)."],
    capacidad: "Ahora lees ou, oi y oin sin separar las letras."
  },
  requiere: R("fv-u", "fg-voy", "fsv-wq"), recupera: ["fv-u"],
  conceptos: {
    "fou-ou": { n: "ou, où, oû → [u]: vous, où, goût", b: "phono" },
    "fou-oi": { n: "oi → [wa], oy + vocal → [waj], oin → [wɛ̃]", b: "phono" }
  },
  video: {
    titulo: "Ou, oi, oin", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "ou · oi · oin", seg: [
        { es: "Hola. Estas letras van juntas: nunca se leen por separado." } ] },
      { v: "frase", filas: [
          { nota: "ou", p: 1, partes: [["vous · rouge", "-", 1]] },
          { nota: "oi", p: 2, partes: [["moi · la voiture", "-", 2]] },
          { nota: "oin", p: 3, partes: [["loin · le coin", "-", 3]] } ], seg: [
        { es: "O u es una u:", p: 1 }, { fr: "vous, rouge", p: 1 }, { es: "O i suena ua:", p: 2 }, { fr: "moi, la voiture", p: 2 }, { es: "O i n suena uan, nasal:", p: 3 }, { fr: "loin, le coin", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Vienes conmigo esta noche?»", o: ["Tu viens avec moi ce soir ?", "Tu viens avec toi ce soir ?"], a: 0,
        bien: "¡Sí! Conmigo: avec moi.", mal: "Conmigo: avec moi.",
        seg: [ { es: "Pausa. Conmigo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vous", "où", "moi", "trois", "voyage", "loin", "moins"], seg: [
        { es: "Ou, u. Oi, ua. Oin, uan.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Está lejos?", img: "bg-universidad", yo: "camila",
    escena: "Camila invita a Hugo a una fiesta.",
    pj: PJ,
    lineas: [
      ["camila", "Tu viens avec moi ce soir ?", "¿Vienes conmigo esta noche?"],
      ["hugo", "Où ? C'est loin d'ici ?", "¿Adónde? ¿Está lejos de aquí?"],
      ["camila", "Non, c'est au coin de la rue, à trois minutes.", "No, es en la esquina de la calle, a tres minutos."],
      ["hugo", "D'accord. Et ce mois-ci, nous voyageons en voiture ?", "De acuerdo. ¿Y este mes viajamos en carro?"]
    ],
    fijate: "Fíjate: vous, où, rouge [u]; moi, soir, trois, mois, voiture [wa]; voyageons [waj]; loin, coin [wɛ̃]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "ou, oi, oy, oin",
      idea: "ou, où y oû suenan [u]: vous, où, goût. oi suena [wa]: moi, toi, voiture, trois. oy + vocal suena [waj]: voyage, moyen. oin suena [wɛ̃]: loin, point, moins. Las letras nunca se leen por separado.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "vous · tout · sous", es: "ustedes · todo · debajo — [u]" },
        { fr: "où · le goût", es: "dónde · el gusto — [u]" },
        { fr: "rouge · le jour", es: "rojo · el día — [u]" },
        { fr: "mou · fou", es: "blando · loco — [u]" },
        { fr: "moi · toi · soi", es: "yo · tú · uno mismo — [wa]" },
        { fr: "trois · le mois", es: "tres · el mes — [wa]" },
        { fr: "la voiture · le soir · noir", es: "el carro · la noche · negro — [wa]" },
        { fr: "le toit · la foi", es: "el techo · la fe — [wa]" },
        { fr: "le voyage · moyen", es: "el viaje · medio — [waj]" },
        { fr: "loin · le point · moins · le coin", es: "lejos · el punto · menos · la esquina — [wɛ̃]" }
      ],
      ej: [["Tu viens avec moi ?", "¿Vienes conmigo?"], ["C'est loin d'ici ?", "¿Está lejos de aquí?"], ["Nous voyageons en voiture.", "Viajamos en carro."]],
      clave: "ou = [u], oi = [wa], oin = [wɛ̃]: las letras van siempre juntas." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["moi (dicho mo-i)", "moi", "oi se lee [wa]."], ["C'est louin.", "C'est loin.", "Lejos: loin, con oin [wɛ̃]."], ["vous (dicho vo-us)", "vous", "ou es un solo sonido [u]."]] }
  ],
  ejemplos: [
    { sit: "«¿Vienes conmigo?»", resp: "Tu viens avec moi ?", pasos: ["moi: [mwa]."], porque: "oi = [wa]." },
    { sit: "«¿Está lejos?»", resp: "C'est loin ?", pasos: ["loin: [lwɛ̃]."], porque: "oin = [wɛ̃]." },
    { sit: "«Viajamos en carro.»", resp: "Nous voyageons en voiture.", pasos: ["voyageons [waj], voiture [wa]."], porque: "oy + vocal." }
  ],
  comprueba: [
    { q: "Las letras ou suenan…", o: ["[u]", "[ou]"], a: 0, b: "phono", porque: "vous [vu]." },
    { q: "Moi suena…", o: ["[mwa]", "[moi]"], a: 0, b: "phono", porque: "oi = [wa]." },
    { q: "Loin termina con…", o: ["[wɛ̃], nasal", "[oin]"], a: 0, b: "phono", porque: "oin = [wɛ̃]." }
  ],
  practica: [
    { fase: "guiada", c: ["fou-ou", "fou-oi"], k: "sort", ask: "¿[u] o [wa]?", q: "Clasifica.", cats: ["[u]", "[wa]"], items: [["vous", 0], ["tout", 0], ["sous", 0], ["le jour", 0], ["toi", 1], ["le soir", 1], ["noir", 1], ["le mois", 1]], pista: "oi: [wa].", why: "ou / oi." },
    { fase: "guiada", c: ["fou-oi"], k: "choice", es: true, say: "trois", ask: "Escucha. ¿Qué número oyes?", q: "Elige.", o: ["3", "13", "30"], a: 0, pista: "[tʁwa].", why: "<b>trois</b>." },
    { fase: "guiada", c: ["fou-oi"], k: "choice", es: true, say: "loin", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["lejos (loin)", "el punto (point)", "menos (moins)"], a: 0, pista: "Empieza con l.", why: "<b>loin</b>." },
    { fase: "indep", c: ["fou-oi"], k: "fill", ask: "Escribe 3 en letras.", q: "Il a ___ frères.", acc: ["trois"], why: "<b>trois</b>." },
    { fase: "indep", c: ["fou-oi"], k: "choice", ask: "«¿Vienes conmigo?»", q: "«Tu viens avec ___ ?»", o: ["moi", "toi", "vous"], a: 0, why: "Conmigo: <b>avec moi</b>." },
    { fase: "indep", c: ["fou-oi"], k: "spot", ask: "Encuentra el error.", s: "C'est [louin] de la gare ?", fix: "loin", why: "<b>loin</b>." },
    { fase: "aplica", c: ["fou-ou", "fou-oi"], k: "match", ask: "Une cada palabra en [u] con su pareja en [wa].", q: "[u] → [wa]", pairs: [["tout", "le toit"], ["sous", "soi"], ["mou", "moi"], ["fou", "la foi"]], why: "ou / oi." },
    { fase: "aplica", c: ["fou-ou"], k: "choice", es: true, say: "Où est la voiture ?", ask: "Escucha. ¿Qué pregunta?", q: "Elige.", o: ["¿Dónde está el carro?", "¿O es el carro?"], a: 0, why: "<b>Où</b>: dónde, [u]." },
    { fase: "dominio", c: ["fou-oi"], k: "order", ask: "Ordena: «Viajamos en carro».", tokens: ["Nous voyageons", "en", "voiture."], why: "<b>Nous voyageons en voiture.</b>" },
    { fase: "dominio", c: ["fou-ou"], k: "choice", es: true, say: "Tout le jour, sous le soleil.", ask: "Escucha. ¿Cuántas veces oyes [u]?", q: "Elige.", o: ["3", "2", "1"], a: 0, why: "<b>tout, jour, sous</b>: tres veces." },
    { fase: "dominio", c: ["fou-ou", "fou-oi"], k: "listen", say: "Nous voyageons en voiture pendant trois jours.", acc: ["Nous voyageons en voiture pendant trois jours.", "Nous voyageons en voiture pendant 3 jours."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous voyageons en voiture pendant trois jours.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "viens", "avec", "ce", "c'est", "d'ici", "non", "au", "de", "la", "rue", "à", "minutes", "d'accord", "et", "nous", "en", "il", "a", "frères", "gare", "pendant", "jours", "est", "le", "soleil", "ci"] }
};

E["fon-eu-ouvert-ferme"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Peu ou peur ? [ø] et [œ]",
  objetivo: {
    que: "Vas a distinguir eu cerrada [ø] (peu, deux) de eu abierta [œ] (peur, heure).",
    corto: "peu [ø] / peur [œ].",
    podras: ["Decir [ø] cuando eu cierra la sílaba: peu, deux, bleu.", "Decir [œ] cuando sigue una consonante que suena: peur, fleur, jeune.", "Pronunciar bien sœur, cœur, un œuf y les œufs."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/corazon"],
    previos: ["Las vocales [ø] y [œ] (lección 2)."],
    capacidad: "Ahora dices peu y peur sin confundirlas."
  },
  requiere: R("fe-eu"), recupera: ["fe-eu"],
  conceptos: {
    "feu-ferme": { n: "[ø] cerrada: eu al final de sílaba (peu, deux, bleu)", b: "phono" },
    "feu-ouvert": { n: "[œ] abierta: eu + consonante que suena (peur, heure, sœur)", b: "phono" }
  },
  video: {
    titulo: "Peu o peur", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "peu · peur", seg: [
        { es: "Hola. La misma e u, con la boca más cerrada o más abierta." } ] },
      { v: "dos",
        a: { tag: "cerrada [ø]", fr: "peu", es: "poco" },
        b: { tag: "abierta [œ]", fr: "la peur", es: "el miedo" },
        seg: [ { es: "Labios redondos, boca casi cerrada:", p: 1 }, { fr: "peu", p: 1 }, { es: "Con r detrás, la boca se abre:", p: 2 }, { fr: "la peur", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo un poco de miedo.»", o: ["J'ai un peu peur.", "J'ai un peur peu."], a: 0,
        bien: "¡Sí! Un peu: un poco.", mal: "Primero un peu, luego peur.",
        seg: [ { es: "Pausa. Un poco de miedo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["peu", "deux", "bleu", "la peur", "l'heure", "la sœur", "jeune"], seg: [
        { es: "Si después suena una consonante, la boca se abre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Antes del examen", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo y Camila esperan un examen oral.",
    pj: PJ,
    lineas: [
      ["hugo", "Il est deux heures. Tu as peur de l'examen ?", "Son las dos. ¿Tienes miedo del examen?"],
      ["camila", "Un peu… Ma sœur est sérieuse, elle étudie avec moi.", "Un poco… Mi hermana es seria, estudia conmigo."],
      ["hugo", "Elle est jeune, ta sœur ? Elle a les yeux bleus ?", "¿Es joven tu hermana? ¿Tiene los ojos azules?"],
      ["camila", "Oui, elle a dix-neuf ans. Et après l'examen, je serai heureuse !", "Sí, tiene diecinueve años. ¡Y después del examen estaré feliz!"]
    ],
    fijate: "Fíjate: deux, peu, sérieuse, bleus, heureuse [ø]; heures, peur, sœur, jeune, neuf [œ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[ø] y [œ]",
      idea: "[ø] cerrada: cuando eu termina la sílaba (peu, deux, bleu, jeu, cheveux) y ante [z] (heureuse). [œ] abierta: cuando sigue una consonante que suena (peur, fleur, heure, jeune, neuf). œu también: sœur, cœur, un œuf [œ]; pero les œufs [ø], porque la f no suena. Truco: redondea los labios como para decir o y di e ([ø]) o è ([œ]).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "peu · deux · bleu", es: "poco · dos · azul — [ø]" },
        { fr: "le jeu · les cheveux", es: "el juego · el pelo — [ø]" },
        { fr: "heureuse · sérieuse", es: "feliz · seria — [ø] ante [z]" },
        { fr: "le nœud · les œufs", es: "el nudo · los huevos — [ø]" },
        { fr: "la peur · la fleur", es: "el miedo · la flor — [œ]" },
        { fr: "l'heure · jeune", es: "la hora · joven — [œ]" },
        { fr: "neuf", es: "nueve — [œ]" },
        { fr: "la sœur · le cœur", es: "la hermana · el corazón — [œ]" },
        { fr: "un œuf", es: "un huevo — [œ], la f suena" },
        { fr: "les yeux bleus", es: "los ojos azules" }
      ],
      ej: [["J'ai un peu peur.", "Tengo un poco de miedo."], ["Ma sœur a les yeux bleus.", "Mi hermana tiene los ojos azules."], ["Il est deux heures.", "Son las dos."]],
      clave: "La r de peur abre la vocal: peu [pø], peur [pœʁ]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la peur (dicha como peu)", "la peur", "La r abre la vocal: [pœʁ]."], ["ma seur", "ma sœur", "Hermana: sœur, con œu."], ["deux (con la boca abierta)", "deux", "Final de sílaba: [ø] cerrada."]] }
  ],
  ejemplos: [
    { sit: "«Tengo un poco de miedo.»", resp: "J'ai un peu peur.", pasos: ["peu [ø], peur [œ]."], porque: "La r abre." },
    { sit: "«Son las dos.»", resp: "Il est deux heures.", pasos: ["deux [ø], heures [œ]."], porque: "Dos sonidos." },
    { sit: "«Mi hermana es joven.»", resp: "Ma sœur est jeune.", pasos: ["sœur y jeune: [œ]."], porque: "Consonante detrás." }
  ],
  comprueba: [
    { q: "En deux, eu suena…", o: ["[ø], cerrada", "[œ], abierta"], a: 0, b: "phono", porque: "Final de sílaba." },
    { q: "En peur, eu suena…", o: ["[œ], abierta", "[ø], cerrada"], a: 0, b: "phono", porque: "Le sigue una r." },
    { q: "En les œufs, la f…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "Plural: [lezø]." }
  ],
  practica: [
    { fase: "guiada", c: ["feu-ferme", "feu-ouvert"], k: "sort", ask: "¿Como peu o como peur?", q: "Clasifica.", cats: ["[ø] como peu", "[œ] como peur"], items: [["deux", 0], ["bleu", 0], ["le jeu", 0], ["le nœud", 0], ["l'heure", 1], ["jeune", 1], ["la fleur", 1], ["neuf", 1]], pista: "¿Suena una consonante después?", why: "[ø] / [œ]." },
    { fase: "guiada", c: ["feu-ouvert"], k: "choice", es: true, say: "la peur", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el miedo (peur)", "poco (peu)"], a: 0, pista: "Se oye la r.", why: "<b>la peur</b>." },
    { fase: "guiada", c: ["feu-ferme"], k: "choice", es: true, say: "deux", ask: "Escucha. ¿La vocal es abierta o cerrada?", q: "Elige.", o: ["[ø] cerrada", "[œ] abierta"], a: 0, pista: "No hay consonante después.", why: "<b>deux</b> [dø]." },
    { fase: "indep", c: ["feu-ouvert"], k: "fill", ask: "Escribe «hermana».", q: "ma ___", acc: ["sœur"], why: "<b>sœur</b>." },
    { fase: "indep", c: ["feu-ferme"], k: "choice", ask: "«Tengo un poco de miedo.»", q: "«J'ai un ___ peur.»", o: ["peu", "deux", "jeu"], a: 0, why: "<b>un peu</b>: un poco." },
    { fase: "indep", c: ["feu-ouvert"], k: "spot", ask: "Encuentra el error.", s: "Ma [seur] habite à Lyon .", fix: "sœur", why: "<b>sœur</b>." },
    { fase: "aplica", c: ["feu-ferme", "feu-ouvert"], k: "match", ask: "Une cada palabra con [ø] con su pareja con [œ].", q: "[ø] → [œ]", pairs: [["peu", "la peur"], ["le jeu", "jeune"], ["deux", "l'heure"], ["les œufs", "un œuf"]], why: "Cerrada / abierta." },
    { fase: "aplica", c: ["feu-ouvert"], k: "choice", es: true, say: "un œuf", ask: "Escucha. ¿La vocal es abierta o cerrada?", q: "Elige.", o: ["[œ] abierta", "[ø] cerrada"], a: 0, why: "<b>un œuf</b> [œf]: la f suena." },
    { fase: "dominio", c: ["feu-ferme"], k: "choice", es: true, say: "les œufs", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[ø] cerrada: la f no suena", "[œ] abierta: la f suena"], a: 0, why: "<b>les œufs</b> [lezø]." },
    { fase: "dominio", c: ["feu-ferme", "feu-ouvert"], k: "order", ask: "Ordena: «Mi hermana tiene los ojos azules».", tokens: ["Ma sœur", "a les yeux", "bleus."], why: "<b>Ma sœur a les yeux bleus.</b>" },
    { fase: "dominio", c: ["feu-ferme", "feu-ouvert"], k: "listen", say: "Il est deux heures et j'ai un peu peur.", acc: ["Il est deux heures et j'ai un peu peur.", "Il est 2 heures et j'ai un peu peur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il est deux heures et j'ai un peu peur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["il", "est", "tu", "as", "de", "l'examen", "un", "ma", "elle", "étudie", "avec", "moi", "ta", "a", "les", "oui", "dix", "ans", "et", "après", "je", "serai", "j'ai", "habite", "à"] }
};

E["fon-e-fin-mot"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Parlé ou parlait ? é / ai en fin de mot",
  objetivo: {
    que: "Vas a distinguir al oído y al escribir j'ai parlé [e] de je parlais [ɛ].",
    corto: "j'ai parlé / je parlais.",
    podras: ["Oír la diferencia entre -é [e] y -ais / -ait [ɛ].", "Elegir la forma escrita con el truco de prendre: j'ai pris / je prenais.", "Escribir -er después de aller y de una preposición: je vais parler."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Las grafías de [e] (lección 17), las de [ɛ] (lección 18) y el imparfait (A2, lección 3)."],
    capacidad: "Ahora no confundes j'ai mangé y je mangeais al escribir."
  },
  requiere: R("fge-grafias", "fge-verbe", "fgo-grafias"), recupera: ["fge-verbe"],
  conceptos: {
    "fef-son": { n: "j'ai parlé [e] / je parlais [ɛ]", b: "phono" },
    "fef-truc": { n: "truco: j'ai pris / je prenais; aller o preposición + infinitivo -er", b: "phono" }
  },
  video: {
    titulo: "Parlé o parlais", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "parlé · parlais", seg: [
        { es: "Hola. Suenan casi igual, pero se escriben muy distinto." } ] },
      { v: "dos",
        a: { tag: "passé composé [e]", fr: "j'ai parlé", es: "hablé" },
        b: { tag: "imparfait [ɛ]", fr: "je parlais", es: "hablaba" },
        seg: [ { es: "E cerrada, con sonrisa:", p: 1 }, { fr: "j'ai parlé", p: 1 }, { es: "E abierta:", p: 2 }, { fr: "je parlais", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ayer comí con Léa.»", o: ["Hier, j'ai mangé avec Léa.", "Hier, j'ai mangeais avec Léa."], a: 0,
        bien: "¡Sí! Después de j'ai: participio.", mal: "Truco: j'ai pris, no j'ai prenais.",
        seg: [ { es: "Pausa. Ayer comí." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai parlé", "je parlais", "j'ai pris", "je prenais", "je vais parler"], seg: [
        { es: "¿Dudas? Cambia por prendre: pris o prenais.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Antes y ayer", img: "bg-cafe", yo: "camila",
    escena: "Hugo pregunta a Camila por su día.",
    pj: PJ,
    lineas: [
      ["hugo", "Hier, tu as mangé où ?", "Ayer, ¿dónde comiste?"],
      ["camila", "J'ai mangé avec Léa. Avant, je mangeais à la cantine.", "Comí con Léa. Antes comía en el comedor."],
      ["hugo", "Et ce soir, on va danser ? Hier, nous avons dansé toute la nuit !", "¿Y esta noche vamos a bailar? ¡Ayer bailamos toda la noche!"],
      ["camila", "Non. Avant, je travaillais le soir, mais hier j'ai travaillé le matin.", "No. Antes trabajaba por la noche, pero ayer trabajé por la mañana."]
    ],
    fijate: "Fíjate: mangé, dansé, travaillé [e]; mangeais, travaillais [ɛ]; danser [e]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "-é, -er o -ais",
      idea: "En la norma cuidada, el participio -é suena [e] cerrada y el imparfait -ais / -ait suena [ɛ] abierta: j'ai parlé [paʁle] / je parlais [paʁlɛ]. Muchos franceses ya no los distinguen al hablar, pero al escribir son muy distintos. Truco: cambia por prendre. Si dices j'ai pris, escribe -é; si dices je prenais, escribe -ais. Después de aller o de una preposición (à, de, pour) va el infinitivo -er: je vais parler, pour manger.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "j'ai parlé", es: "hablé — [e]" },
        { fr: "je parlais", es: "hablaba — [ɛ]" },
        { fr: "j'ai mangé · je mangeais", es: "comí · comía" },
        { fr: "j'ai pris · je prenais", es: "tomé · tomaba — el truco" },
        { fr: "il a mangé · il a pris", es: "comió · tomó" },
        { fr: "je vais parler", es: "voy a hablar — -er [e]" },
        { fr: "pour manger · pour prendre", es: "para comer · para tomar" },
        { fr: "il faut chanter · pour chanter", es: "hay que cantar · para cantar" },
        { fr: "j'ai chanté · tu as chanté", es: "canté · cantaste" },
        { fr: "je chantais · tu chantais · il chantait · ils chantaient", es: "cantaba, cantabas… — todos [ɛ]" },
        { fr: "danser · nous avons dansé · il dansait", es: "bailar · bailamos · bailaba" },
        { fr: "regarder · j'ai regardé · je regardais", es: "mirar · miré · miraba" },
        { fr: "appeler · j'ai appelé · j'appelais", es: "llamar · llamé · llamaba" },
        { fr: "habiter · j'ai habité · j'habitais", es: "vivir · viví · vivía" }
      ],
      ej: [["Hier, j'ai mangé avec Léa.", "Ayer comí con Léa."], ["Avant, je mangeais à la cantine.", "Antes comía en el comedor."], ["Je vais manger.", "Voy a comer."]],
      clave: "j'ai + -é; je + -ais; aller o preposición + -er." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Hier, j'ai mangeais.", "Hier, j'ai mangé.", "Después de j'ai: participio -é."], ["Je vais mangé.", "Je vais manger.", "Después de aller: infinitivo -er."], ["Avant, je jouer au tennis.", "Avant, je jouais au tennis.", "Costumbre pasada: imparfait -ais."]] }
  ],
  ejemplos: [
    { sit: "«Ayer comí con Léa.»", resp: "Hier, j'ai mangé avec Léa.", pasos: ["Truco: j'ai pris → -é."], porque: "Passé composé." },
    { sit: "«Antes comía en el comedor.»", resp: "Avant, je mangeais à la cantine.", pasos: ["Truco: je prenais → -ais."], porque: "Imparfait." },
    { sit: "«Voy a comer.»", resp: "Je vais manger.", pasos: ["Truco: je vais prendre → -er."], porque: "Infinitivo." }
  ],
  comprueba: [
    { q: "Después de j'ai va…", o: ["el participio -é", "el imparfait -ais"], a: 0, b: "phono", porque: "j'ai parlé." },
    { q: "Je parlais termina en…", o: ["[ɛ], abierta", "[e], cerrada"], a: 0, b: "phono", porque: "Imparfait." },
    { q: "Si dudas entre -é y -er, cambia por…", o: ["prendre: pris / prendre", "être: été / être"], a: 0, b: "phono", porque: "j'ai pris / pour prendre." }
  ],
  practica: [
    { fase: "guiada", c: ["fef-son"], k: "sort", ask: "¿[e] cerrada o [ɛ] abierta?", q: "Clasifica.", cats: ["[e]: participio o infinitivo", "[ɛ]: imparfait"], items: [["j'ai chanté", 0], ["pour chanter", 0], ["il faut chanter", 0], ["tu as chanté", 0], ["je chantais", 1], ["tu chantais", 1], ["il chantait", 1], ["ils chantaient", 1]], pista: "-ais, -ait, -aient: abierta.", why: "[e] / [ɛ]." },
    { fase: "guiada", c: ["fef-son"], k: "choice", es: true, say: "je parlais", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["je parlais (imparfait)", "j'ai parlé (passé composé)"], a: 0, pista: "No se oye j'ai.", why: "<b>je parlais</b>." },
    { fase: "guiada", c: ["fef-truc"], k: "choice", ask: "«Ayer miré una película.»", q: "«Hier, j'ai ___ un film.»", o: ["regardé", "regarder", "regardais"], a: 0, pista: "Truco: j'ai pris.", why: "<b>j'ai regardé</b>." },
    { fase: "indep", c: ["fef-truc"], k: "fill", ask: "Completa con jouer en imparfait.", q: "Avant, je ___ au tennis.", acc: ["jouais"], why: "<b>je jouais</b>: costumbre pasada." },
    { fase: "indep", c: ["fef-truc"], k: "choice", ask: "«Voy a llamar a mis amigos.»", q: "«Je vais ___ mes amis.»", o: ["appeler", "appelé", "appelais"], a: 0, why: "Después de aller: <b>appeler</b>." },
    { fase: "indep", c: ["fef-son"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , nous avons [dansait] toute la nuit .", fix: "dansé", why: "<b>nous avons dansé</b>." },
    { fase: "aplica", c: ["fef-truc"], k: "match", ask: "Une cada forma con la del truco.", q: "manger → prendre", pairs: [["j'ai mangé", "j'ai pris"], ["je mangeais", "je prenais"], ["pour manger", "pour prendre"], ["il a mangé", "il a pris"]], why: "El truco de prendre." },
    { fase: "aplica", c: ["fef-son"], k: "choice", es: true, say: "j'ai parlé", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["j'ai parlé (passé composé)", "je parlais (imparfait)"], a: 0, why: "<b>j'ai parlé</b>." },
    { fase: "dominio", c: ["fef-truc"], k: "order", ask: "Ordena: «Antes vivía en Cali».", tokens: ["Avant,", "j'habitais", "à Cali."], why: "<b>Avant, j'habitais à Cali.</b>" },
    { fase: "dominio", c: ["fef-son", "fef-truc"], k: "choice", ask: "«Ayer trabajé por la mañana.»", q: "«Hier, j'ai ___ le matin.»", o: ["travaillé", "travaillais"], a: 0, why: "<b>j'ai travaillé</b>." },
    { fase: "dominio", c: ["fef-son", "fef-truc"], k: "listen", say: "Avant, je travaillais le soir, mais hier j'ai travaillé le matin.", acc: ["Avant, je travaillais le soir, mais hier j'ai travaillé le matin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Avant, je travaillais le soir, mais hier j'ai travaillé le matin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa", "Cali"], previo: ["hier", "tu", "as", "où", "avec", "avant", "à", "la", "cantine", "et", "ce", "soir", "on", "va", "nous", "avons", "toute", "nuit", "non", "le", "mais", "matin", "un", "film", "mes", "amis", "au", "tennis", "je", "vais", "il", "a", "ils", "faut", "pour"] }
};

/* ───── FON·6 · Nasales y h (lecciones 23 y 24) ───── */
E["fon-nasales-graphies"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les graphies des nasales : an, en, in, ain, un, on",
  objetivo: {
    que: "Vas a escribir bien las vocales nasales: an y en, in y ain, on, y la m delante de p y b.",
    corto: "vent, vin, bon · chambre.",
    podras: ["Reconocer las grafías de [ɑ̃]: an, am, en, em.", "Reconocer las de [ɛ̃]: in, im, ain, ein, un; y las de [ɔ̃]: on, om.", "Escribir m delante de p y b: chambre, simple, tomber."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/libro"],
    previos: ["Las vocales nasales (lecciones 3 y 9)."],
    capacidad: "Ahora escribes las nasales sin dudar entre n y m."
  },
  requiere: R("fn-nasal", "fna-grafias", "fna-pares"), recupera: ["fna-grafias"],
  conceptos: {
    "fngr-tabla": { n: "[ɑ̃] an, am, en, em · [ɛ̃] in, im, ain, ein, un · [ɔ̃] on, om", b: "phono" },
    "fngr-m": { n: "delante de p y b se escribe m: chambre, simple, tomber", b: "phono" }
  },
  video: {
    titulo: "Escribir las nasales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "an · in · on", seg: [
        { es: "Hola. Tres sonidos nasales, muchas formas de escribirlos." } ] },
      { v: "frase", filas: [
          { nota: "[ɑ̃]", p: 1, partes: [["l'enfant · le temps", "-", 1]] },
          { nota: "[ɛ̃]", p: 2, partes: [["le vin · le pain", "-", 2]] },
          { nota: "m + p, b", p: 3, partes: [["la chambre · simple", "-", 3]] } ], seg: [
        { es: "A n y e n suenan igual:", p: 1 }, { fr: "l'enfant, le temps", p: 1 }, { es: "I n y a i n, también:", p: 2 }, { fr: "le vin, le pain", p: 2 }, { es: "Delante de pe y be, se escribe eme:", p: 3 }, { fr: "la chambre, simple", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La habitación es grande.»", o: ["La chambre est grande.", "La chanbre est grande."], a: 0,
        bien: "¡Sí! Delante de b: m.", mal: "Delante de b se escribe m.",
        seg: [ { es: "Pausa. La habitación." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'enfant", "le temps", "le vin", "le pain", "bon", "la chambre", "ensemble"], seg: [
        { es: "Antes de pe o be, siempre eme.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pícnic", img: "bg-paris", yo: "camila",
    escena: "Hugo y Camila preparan un pícnic.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as le temps ? On mange ensemble ?", "¿Tienes tiempo? ¿Comemos juntos?"],
      ["camila", "Oui ! J'ai du pain et un bon vin.", "¡Sí! Tengo pan y un buen vino."],
      ["hugo", "Attention, le pain va tomber de ta main !", "¡Cuidado, el pan se te va a caer de la mano!"],
      ["camila", "Pas de problème. C'est simple : on mange dans le champ, il n'y a pas de vent.", "No hay problema. Es sencillo: comemos en el campo, no hay viento."]
    ],
    fijate: "Fíjate: temps, ensemble, champ, vent [ɑ̃]; pain, vin, main, simple [ɛ̃]; bon [ɔ̃]. Y m en ensemble, tomber, simple, champ."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Las grafías de las nasales",
      idea: "[ɑ̃] se escribe an, am, en o em: enfant, chambre, temps, ensemble. [ɛ̃] se escribe in, im, ain, ein o un: vin, simple, pain, plein, lundi. [ɔ̃] se escribe on u om: bon, nombre. Regla de la m: delante de p o b se escribe m: chambre, jambe, simple, tomber, ensemble.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'enfant · le temps", es: "el niño · el tiempo — [ɑ̃]: an, en" },
        { fr: "la chambre · le champ · la jambe", es: "la habitación · el campo · la pierna — [ɑ̃]: am" },
        { fr: "ensemble", es: "juntos — [ɑ̃]: en, em" },
        { fr: "le vent · la dent · cent · sans", es: "el viento · el diente · cien · sin — [ɑ̃]" },
        { fr: "le vin · vingt", es: "el vino · veinte — [ɛ̃]: in" },
        { fr: "simple", es: "sencillo — [ɛ̃]: im" },
        { fr: "le pain · la main", es: "el pan · la mano — [ɛ̃]: ain" },
        { fr: "le pin", es: "el pino — [ɛ̃], igual que pain" },
        { fr: "plein", es: "lleno — [ɛ̃]: ein" },
        { fr: "lundi · un", es: "lunes · un — [ɛ̃]: un" },
        { fr: "bon · le son · ils sont", es: "bueno · el sonido · son — [ɔ̃]: on" },
        { fr: "le nombre · tomber", es: "el número · caer — [ɔ̃]: om" }
      ],
      ej: [["Mon enfant a un bon vin.", "Mi hijo tiene un buen vino."], ["Il tombe dans la chambre.", "Se cae en la habitación."], ["Le pain est dans la main.", "El pan está en la mano."]],
      clave: "Delante de p o b: m. chambre, simple, tomber." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la chanbre", "la chambre", "Delante de b: m."], ["enssemble", "ensemble", "Delante de b: m, y una sola s."], ["tonber", "tomber", "Delante de b: m."], ["le vin (diciendo la n)", "le vin", "Nasal: la n no suena."]] }
  ],
  ejemplos: [
    { sit: "«la habitación»", resp: "la chambre", pasos: ["[ɑ̃] delante de b: am."], porque: "Regla de la m." },
    { sit: "«Comemos juntos.»", resp: "On mange ensemble.", pasos: ["mange: an; ensemble: en y em."], porque: "Dos grafías de [ɑ̃]." },
    { sit: "«el pan y el vino»", resp: "le pain et le vin", pasos: ["ain e in: [ɛ̃]."], porque: "Mismo sonido." }
  ],
  comprueba: [
    { q: "An y en suenan…", o: ["igual: [ɑ̃]", "distinto"], a: 0, b: "phono", porque: "enfant, temps." },
    { q: "Delante de p o b se escribe…", o: ["m", "n"], a: 0, b: "phono", porque: "chambre, simple." },
    { q: "Pain y vin tienen…", o: ["el mismo sonido [ɛ̃]", "sonidos distintos"], a: 0, b: "phono", porque: "ain = in." }
  ],
  practica: [
    { fase: "guiada", c: ["fngr-tabla"], k: "sort", ask: "¿Como vent o como vin?", q: "Clasifica.", cats: ["[ɑ̃] como vent", "[ɛ̃] como vin"], items: [["l'enfant", 0], ["le temps", 0], ["le champ", 0], ["la dent", 0], ["le vin", 1], ["la main", 1], ["plein", 1], ["simple", 1]], pista: "in, im, ain, ein: [ɛ̃].", why: "Grafías nasales." },
    { fase: "guiada", c: ["fngr-tabla"], k: "choice", es: true, say: "le vent", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el viento (vent)", "el vino (vin)", "el sonido (son)"], a: 0, pista: "[ɑ̃].", why: "<b>le vent</b>." },
    { fase: "guiada", c: ["fngr-m"], k: "choice", ask: "¿Cuál está bien escrita? «la habitación»", q: "«la ___»", o: ["chambre", "chanbre"], a: 0, pista: "Delante de b.", why: "<b>chambre</b>." },
    { fase: "indep", c: ["fngr-tabla"], k: "fill", ask: "Escribe «lleno».", q: "Le café est ___.", acc: ["plein"], why: "<b>plein</b>, con ein." },
    { fase: "indep", c: ["fngr-tabla"], k: "choice", es: true, say: "le temps", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el tiempo (temps)", "el vino (vin)", "el sonido (son)"], a: 0, why: "<b>le temps</b>." },
    { fase: "indep", c: ["fngr-m"], k: "spot", ask: "Encuentra el error.", s: "Nous partons [enssemble] en vacances .", fix: "ensemble", why: "<b>ensemble</b>." },
    { fase: "aplica", c: ["fngr-tabla"], k: "match", ask: "Une las palabras que suenan igual.", q: "Palabra → homófona", pairs: [["sans", "cent"], ["le vin", "vingt"], ["le pain", "le pin"], ["le son", "ils sont"]], why: "Mismo sonido, otra grafía." },
    { fase: "aplica", c: ["fngr-m"], k: "choice", ask: "¿Cuál está bien escrita? «caer»", q: "«___»", o: ["tomber", "tonber"], a: 0, why: "Delante de b: <b>tomber</b>." },
    { fase: "dominio", c: ["fngr-tabla"], k: "choice", es: true, say: "simple", ask: "Escucha. ¿Qué sonido nasal oyes?", q: "Elige.", o: ["[ɛ̃] como vin", "[ɑ̃] como vent", "[ɔ̃] como bon"], a: 0, why: "<b>simple</b>: im = [ɛ̃]." },
    { fase: "dominio", c: ["fngr-m"], k: "order", ask: "Ordena: «Se cae en la habitación».", tokens: ["Il tombe", "dans", "la chambre."], why: "<b>Il tombe dans la chambre.</b>" },
    { fase: "dominio", c: ["fngr-tabla", "fngr-m"], k: "listen", say: "Mon enfant mange du pain dans la chambre.", acc: ["Mon enfant mange du pain dans la chambre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon enfant mange du pain dans la chambre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "as", "on", "mange", "oui", "j'ai", "du", "et", "un", "attention", "va", "de", "ta", "pas", "problème", "c'est", "dans", "il", "n'y", "a", "est", "café", "nous", "partons", "en", "vacances", "mon", "la", "le", "tombe", "grande"] }
};

E["fon-denasalisation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Bon / bonne, plein / pleine : nasale ou pas ?",
  objetivo: {
    que: "Vas a saber cuándo la vocal deja de ser nasal y la n o la m se pronuncian: bon / bonne, un / une.",
    corto: "bon [bɔ̃] / bonne [bɔn].",
    podras: ["Ver que n o m + vocal no hace nasal: une, ami, fine.", "Ver que nn o mm tampoco: bonne, homme, année.", "Pronunciar los femeninos: brun / brune, italien / italienne."],
    iconos: ["ic2/audifonos", "ic2/amigos", "ic2/bombilla"],
    previos: ["Las vocales nasales y cuándo no hay nasal (lección 3) y las grafías de las nasales (lección 23)."],
    capacidad: "Ahora pronuncias bien los femeninos y palabras como ami u homme."
  },
  requiere: R("fn-nasal", "fn-pas", "fngr-tabla"), recupera: ["fn-pas"],
  conceptos: {
    "fdn-regle": { n: "n / m + vocal, o nn / mm: sin nasal (une, ami, bonne, homme)", b: "phono" },
    "fdn-fem": { n: "femeninos: bon / bonne, brun / brune, italien / italienne", b: "phono" }
  },
  video: {
    titulo: "¿Nasal o no?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "bon · bonne", seg: [
        { es: "Hola. Si después viene una vocal, la nasal desaparece." } ] },
      { v: "dos",
        a: { tag: "nasal", fr: "un bon ami", es: "un buen amigo" },
        b: { tag: "no nasal", fr: "une bonne amie", es: "una buena amiga" },
        seg: [ { es: "Bon, nasal:", p: 1 }, { fr: "un bon ami", p: 1 }, { es: "Bonne, la ene suena:", p: 2 }, { fr: "une bonne amie", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es una buena amiga italiana.»", o: ["C'est une bonne amie italienne.", "C'est une bon amie italien."], a: 0,
        bien: "¡Sí! Femenino: bonne, italienne.", mal: "Amiga es femenino: bonne, italienne.",
        seg: [ { es: "Pausa. Una buena amiga." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bon", "bonne", "un", "une", "brun", "brune", "un homme"], seg: [
        { es: "Ene más vocal, o doble ene: la ene suena.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Amigos de todas partes", img: "bg-universidad", yo: "camila",
    escena: "Hugo presenta a sus amigos a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Je te présente Giulia, une bonne amie italienne.", "Te presento a Giulia, una buena amiga italiana."],
      ["camila", "Enchantée ! Moi, je suis colombienne. Et lui, c'est Paul ?", "¡Encantada! Yo soy colombiana. ¿Y él es Paul?"],
      ["hugo", "Oui, un bon ami canadien. Il est brun, et sa sœur est brune aussi.", "Sí, un buen amigo canadiense. Es moreno, y su hermana también es morena."],
      ["camila", "Cette année, la classe est pleine de nationalités !", "¡Este año la clase está llena de nacionalidades!"]
    ],
    fijate: "Fíjate: bon, canadien, brun [nasal]; bonne, italienne, colombienne, brune, année, pleine [la n suena]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Nasal o no nasal",
      idea: "Hay nasal cuando la n o la m van al final o antes de consonante: bon, un, vin, brun. No hay nasal cuando sigue una vocal (une, ami, fine) o cuando la n o la m van dobles (bonne, homme, année): la vocal es oral y la n se pronuncia. Por eso los femeninos cambian de sonido: brun / brune, italien / italienne, américain / américaine.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "bon · bonne", es: "bueno · buena — [bɔ̃] / [bɔn]" },
        { fr: "un · une", es: "un · una — nasal / sin nasal" },
        { fr: "plein · pleine", es: "lleno · llena" },
        { fr: "fin · fine", es: "fino · fina" },
        { fr: "brun · brune", es: "moreno · morena" },
        { fr: "italien · italienne", es: "italiano · italiana" },
        { fr: "canadien · canadienne", es: "canadiense (m. / f.)" },
        { fr: "colombien · colombienne", es: "colombiano · colombiana" },
        { fr: "américain · américaine", es: "estadounidense (m. / f.)" },
        { fr: "un ami · une amie", es: "un amigo · una amiga — a + m + vocal" },
        { fr: "un homme · une femme", es: "un hombre · una mujer — mm: sin nasal" },
        { fr: "l'année · un animal", es: "el año · un animal — sin nasal" },
        { fr: "l'huile", es: "el aceite" }
      ],
      ej: [["un bon ami, une bonne amie", "un buen amigo, una buena amiga"], ["un vin fin, une huile fine", "un vino fino, un aceite fino"], ["un homme, une femme", "un hombre, una mujer"]],
      clave: "n + vocal o nn: la n suena y la vocal deja de ser nasal." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["bonne (dicha nasal)", "bonne", "Con nn no hay nasal: [bɔn]."], ["une bon amie", "une bonne amie", "Femenino: bonne."], ["une femme (con nasal)", "une femme", "mm: sin nasal; femme suena [fam]."], ["une Colombien", "une Colombienne", "Femenino: -ienne, la n suena."]] }
  ],
  ejemplos: [
    { sit: "«una buena amiga»", resp: "une bonne amie", pasos: ["une y bonne: la n suena."], porque: "Femenino." },
    { sit: "«Ella es colombiana.»", resp: "Elle est colombienne.", pasos: ["-ienne: [jɛn]."], porque: "nn: sin nasal." },
    { sit: "«un hombre»", resp: "un homme", pasos: ["un: nasal; homme: [ɔm]."], porque: "mm: sin nasal." }
  ],
  comprueba: [
    { q: "En bonne, la vocal…", o: ["no es nasal: la n suena", "es nasal"], a: 0, b: "phono", porque: "nn." },
    { q: "En une, la n…", o: ["suena", "no suena"], a: 0, b: "phono", porque: "Le sigue una vocal." },
    { q: "Italien → italienne: el femenino…", o: ["pierde la nasal", "sigue nasal"], a: 0, b: "phono", porque: "[italjɛ̃] / [italjɛn]." }
  ],
  practica: [
    { fase: "guiada", c: ["fdn-regle"], k: "sort", ask: "¿Nasal o no nasal?", q: "Clasifica.", cats: ["Nasal", "No nasal"], items: [["plein", 0], ["bon", 0], ["un", 0], ["américain", 0], ["pleine", 1], ["bonne", 1], ["une", 1], ["américaine", 1]], pista: "¿Sigue una vocal o nn?", why: "Nasal / no nasal." },
    { fase: "guiada", c: ["fdn-regle"], k: "choice", es: true, say: "bonne", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["bonne: la n suena", "bon: nasal, sin n"], a: 0, pista: "Se oye la n.", why: "<b>bonne</b> [bɔn]." },
    { fase: "guiada", c: ["fdn-fem"], k: "choice", es: true, say: "italienne", ask: "Escucha. ¿Masculino o femenino?", q: "Elige.", o: ["italienne (femenino)", "italien (masculino)"], a: 0, pista: "Se oye la n.", why: "<b>italienne</b>." },
    { fase: "indep", c: ["fdn-fem"], k: "fill", ask: "Escribe el femenino.", q: "un Colombien → une ___", acc: ["Colombienne", "colombienne"], why: "<b>Colombienne</b>." },
    { fase: "indep", c: ["fdn-regle"], k: "choice", ask: "¿Cuál NO tiene vocal nasal?", q: "«___»", o: ["homme", "brun", "bon"], a: 0, why: "<b>homme</b>: mm, sin nasal." },
    { fase: "indep", c: ["fdn-fem"], k: "spot", ask: "Encuentra el error.", s: "C'est une [bon] amie italienne .", fix: "bonne", why: "<b>une bonne amie</b>." },
    { fase: "aplica", c: ["fdn-fem"], k: "match", ask: "Une el masculino con el femenino.", q: "Masculino → femenino", pairs: [["fin", "fine"], ["plein", "pleine"], ["brun", "brune"], ["canadien", "canadienne"]], why: "Femenino: la n suena." },
    { fase: "aplica", c: ["fdn-regle"], k: "choice", es: true, say: "un homme", ask: "Escucha. ¿La o de homme es nasal?", q: "Elige.", o: ["No: [ɔm]", "Sí: [ɔ̃]"], a: 0, why: "<b>homme</b> [ɔm]." },
    { fase: "dominio", c: ["fdn-fem"], k: "choice", ask: "«Es una buena amiga.»", q: "«C'est une ___ amie.»", o: ["bonne", "bon"], a: 0, why: "<b>une bonne amie</b>." },
    { fase: "dominio", c: ["fdn-regle", "fdn-fem"], k: "order", ask: "Ordena: «una buena amiga italiana».", tokens: ["une bonne", "amie", "italienne"], why: "<b>une bonne amie italienne</b>" },
    { fase: "dominio", c: ["fdn-regle", "fdn-fem"], k: "listen", say: "Une bonne amie italienne et un bon ami canadien.", acc: ["Une bonne amie italienne et un bon ami canadien."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Une bonne amie italienne et un bon ami canadien.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Giulia", "Paul"], previo: ["je", "te", "présente", "enchantée", "moi", "suis", "et", "lui", "c'est", "oui", "il", "est", "sa", "sœur", "aussi", "cette", "la", "classe", "de", "nationalités", "elle"] }
};

E["fon-h"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le h muet et le h aspiré",
  objetivo: {
    que: "Vas a distinguir la h muda (l'homme, les‿hôtels) de la h aspirada (le héros, les | haricots).",
    corto: "l'hôtel / le héros.",
    podras: ["Saber que la h nunca se pronuncia.", "Hacer elisión y liaison con la h muda: l'hôtel, les‿hommes.", "No hacerlas con la h aspirada: le héros, le hasard, les | haricots."],
    iconos: ["ic2/libro", "ic2/audifonos", "ic2/candado"],
    previos: ["Consonantes difíciles y la h (lección 4) y la liaison (lección 7)."],
    capacidad: "Ahora sabes cuándo decir l' y cuándo le delante de una h."
  },
  requiere: R("fc-h", "fl-liaison", "fl-interdit"), recupera: ["fc-h"],
  conceptos: {
    "fhh-muet": { n: "h muda: elisión y liaison (l'hôtel, les‿hommes)", b: "phono" },
    "fhh-aspire": { n: "h aspirada: sin elisión ni liaison (le héros, les | haricots)", b: "phono" }
  },
  video: {
    titulo: "Las dos h", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "l'hôtel · le héros", seg: [
        { es: "Hola. La h nunca suena, pero hay dos tipos." } ] },
      { v: "dos",
        a: { tag: "h muda", fr: "les hôtels", es: "con liaison" },
        b: { tag: "h aspirada", fr: "les héros", es: "sin liaison" },
        seg: [ { es: "H muda: se une con zeta:", p: 1 }, { fr: "les hôtels", p: 1 }, { es: "H aspirada: un pequeño corte:", p: 2 }, { fr: "les héros", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es el héroe de la película.»", o: ["C'est le héros du film.", "C'est l'héros du film."], a: 0,
        bien: "¡Sí! Héros tiene h aspirada.", mal: "Con h aspirada no hay elisión: le héros.",
        seg: [ { es: "Pausa. El héroe." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'homme", "l'hôtel", "l'heure", "le héros", "le hasard", "le haricot"], seg: [
        { es: "Casi todas son mudas. Aprende las aspiradas de memoria.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el hotel", img: "bg-paris", yo: "camila",
    escena: "Camila llega a un hotel con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "L'hôtel est en face de l'hôpital ?", "¿El hotel está frente al hospital?"],
      ["hugo", "Oui. Les habitants disent que c'est le meilleur hôtel de la ville.", "Sí. Los habitantes dicen que es el mejor hotel de la ciudad."],
      ["camila", "Par hasard, il y a un restaurant ? J'ai faim : des haricots, un hamburger…", "¿Por casualidad hay un restaurante? Tengo hambre: frijoles, una hamburguesa…"],
      ["hugo", "Oui, en haut. Le dîner commence à huit heures.", "Sí, arriba. La cena empieza a las ocho."]
    ],
    fijate: "Fíjate: l'hôtel, l'hôpital, les‿habitants (h muda); hasard, des | haricots, un | hamburger, en | haut, huit (h aspirada)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "H muda y h aspirada",
      idea: "La h nunca se pronuncia. La h muda (la mayoría) deja hacer elisión y liaison: l'hôtel, l'heure, les‿habitants [lezabitɑ̃]. La h aspirada (en el diccionario suele llevar *) las impide: le héros, le hasard, les | haricots. Las más frecuentes: héros, hasard, haut, huit, haricot, hamburger, hockey, honte, hibou.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'homme · les hommes", es: "el hombre · los hombres — h muda" },
        { fr: "l'hôtel · les hôtels", es: "el hotel · los hoteles — h muda" },
        { fr: "l'heure · l'histoire", es: "la hora · la historia — h muda" },
        { fr: "l'hôpital · l'hiver", es: "el hospital · el invierno — h muda" },
        { fr: "les habitants", es: "los habitantes — [lezabitɑ̃]" },
        { fr: "le héros · les héros", es: "el héroe · los héroes — h aspirada" },
        { fr: "le hasard", es: "el azar — h aspirada" },
        { fr: "le haricot · les haricots", es: "el frijol · los frijoles — h aspirada" },
        { fr: "le hibou · la honte", es: "el búho · la vergüenza — h aspirada" },
        { fr: "le hamburger · le haut", es: "la hamburguesa · lo alto — h aspirada" },
        { fr: "huit", es: "ocho — sin elisión: le huit mars" }
      ],
      ej: [["L'hôtel est en face de l'hôpital.", "El hotel está frente al hospital."], ["Le héros de l'histoire.", "El héroe de la historia."], ["J'ai acheté des haricots.", "Compré frijoles."]],
      clave: "La h no suena nunca; la aspirada solo impide l' y la liaison." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["l'héros", "le héros", "Héros tiene h aspirada: no hay elisión."], ["les‿haricots (con z)", "les haricots", "H aspirada: sin liaison."], ["le hôtel", "l'hôtel", "H muda: elisión."]] }
  ],
  ejemplos: [
    { sit: "«el hotel»", resp: "l'hôtel", pasos: ["h muda: elisión."], porque: "l'." },
    { sit: "«el héroe»", resp: "le héros", pasos: ["h aspirada: sin elisión."], porque: "le." },
    { sit: "«los hoteles» / «los frijoles»", resp: "les‿hôtels / les | haricots", pasos: ["Liaison solo con la h muda."], porque: "Dos h." }
  ],
  comprueba: [
    { q: "La h francesa…", o: ["nunca se pronuncia", "se pronuncia como j"], a: 0, b: "phono", porque: "Siempre muda." },
    { q: "Con h aspirada…", o: ["no hay elisión ni liaison", "hay elisión"], a: 0, b: "phono", porque: "le héros." },
    { q: "Hôtel tiene h…", o: ["muda", "aspirada"], a: 0, b: "phono", porque: "l'hôtel." }
  ],
  practica: [
    { fase: "guiada", c: ["fhh-muet", "fhh-aspire"], k: "sort", ask: "¿H muda o aspirada?", q: "Clasifica.", cats: ["Muda (l')", "Aspirada (le, la)"], items: [["homme", 0], ["heure", 0], ["histoire", 0], ["hiver", 0], ["héros", 1], ["hasard", 1], ["haricot", 1], ["hibou", 1]], pista: "Las aspiradas son pocas.", why: "H muda / aspirada." },
    { fase: "guiada", c: ["fhh-muet"], k: "choice", es: true, say: "les hôtels", ask: "Escucha. ¿Hay liaison?", q: "Elige.", o: ["Sí: [lezotɛl]", "No: [le otɛl]"], a: 0, pista: "Hôtel: h muda.", why: "<b>les‿hôtels</b>." },
    { fase: "guiada", c: ["fhh-aspire"], k: "choice", es: true, say: "les héros", ask: "Escucha. ¿Hay liaison?", q: "Elige.", o: ["No: [le eʁo]", "Sí: [lezeʁo]"], a: 0, pista: "Héros: h aspirada.", why: "<b>les | héros</b>." },
    { fase: "indep", c: ["fhh-aspire"], k: "fill", ask: "Escribe el artículo: «el frijol».", q: "___ haricot", acc: ["le"], why: "<b>le haricot</b>: h aspirada." },
    { fase: "indep", c: ["fhh-muet"], k: "choice", ask: "«el hotel»", q: "«___»", o: ["l'hôtel", "le hôtel"], a: 0, why: "<b>l'hôtel</b>: h muda." },
    { fase: "indep", c: ["fhh-aspire"], k: "spot", ask: "Encuentra el error.", s: "C'est [l'héros] du film .", fix: "le héros", why: "<b>le héros</b>." },
    { fase: "aplica", c: ["fhh-muet", "fhh-aspire"], k: "match", ask: "Une cada palabra con su artículo.", q: "Palabra → con artículo", pairs: [["hôpital", "l'hôpital"], ["haut", "le haut"], ["honte", "la honte"], ["hamburger", "le hamburger"]], why: "Muda: l'; aspirada: le, la." },
    { fase: "aplica", c: ["fhh-aspire"], k: "choice", ask: "«por casualidad»", q: "«par ___»", o: ["hasard", "l'hasard"], a: 0, why: "<b>par hasard</b>." },
    { fase: "dominio", c: ["fhh-muet"], k: "order", ask: "Ordena: «El hotel está frente al hospital».", tokens: ["L'hôtel est", "en face de", "l'hôpital."], why: "<b>L'hôtel est en face de l'hôpital.</b>" },
    { fase: "dominio", c: ["fhh-aspire"], k: "choice", es: true, say: "J'ai acheté des haricots.", ask: "Escucha. ¿Hay liaison entre des y haricots?", q: "Elige.", o: ["No", "Sí, con [z]"], a: 0, why: "<b>des | haricots</b>: h aspirada." },
    { fase: "dominio", c: ["fhh-muet", "fhh-aspire"], k: "listen", say: "L'homme est entré dans l'hôtel à huit heures.", acc: ["L'homme est entré dans l'hôtel à huit heures.", "L'homme est entré dans l'hôtel à 8 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'homme est entré dans l'hôtel à huit heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["est", "en", "face", "de", "oui", "disent", "que", "c'est", "le", "meilleur", "la", "ville", "par", "il", "y", "a", "un", "restaurant", "j'ai", "faim", "des", "dîner", "commence", "à", "heures", "du", "film", "acheté", "entré", "dans", "mars"] }
};

E["fon-accents-son"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les accents et le son : é, è, ê, à, ù",
  objetivo: {
    que: "Vas a entender para qué sirven los acentos franceses: cambiar el sonido de la e o distinguir palabras.",
    corto: "é, è, ê · a / à · ou / où.",
    podras: ["Leer é como [e] y è, ê como [ɛ].", "Distinguir a / à, ou / où, la / là al escribir.", "Saber que el acento no marca la sílaba fuerte."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["Los homófonos (lección 16) y las grafías de [e] y [ɛ] (lecciones 17 y 18)."],
    capacidad: "Ahora pones los acentos donde cambian el sonido o el sentido."
  },
  requiere: R("fh-truc", "fh-ou", "fge-grafias", "fgo-grafias"), recupera: ["fh-ou"],
  conceptos: {
    "fac-e": { n: "é [e], è y ê [ɛ]: el acento cambia la e", b: "ortho" },
    "fac-mots": { n: "à / a, où / ou, là / la: el acento distingue palabras", b: "ortho" }
  },
  video: {
    titulo: "Los acentos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "é · è · ê · à · où", seg: [
        { es: "Hola. En francés, el acento no marca la sílaba fuerte." } ] },
      { v: "frase", filas: [
          { nota: "é", p: 1, partes: [["l'été", "-", 1]] },
          { nota: "è, ê", p: 2, partes: [["la mère · la fête", "-", 2]] },
          { nota: "à, où", p: 3, partes: [["à Paris · où ?", "-", 3]] } ], seg: [
        { es: "Agudo, e cerrada:", p: 1 }, { fr: "l'été", p: 1 }, { es: "Grave o circunflejo, e abierta:", p: 2 }, { fr: "la mère, la fête", p: 2 }, { es: "Sobre a y u, distingue palabras:", p: 3 }, { fr: "à Paris, où ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Va a París.»", o: ["Il va à Paris.", "Il va a Paris."], a: 0,
        bien: "¡Sí! La preposición lleva acento.", mal: "Preposición: à, con acento.",
        seg: [ { es: "Pausa. A París." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["été", "mère", "fête", "à", "où", "là", "déjà"], seg: [
        { es: "El acento cambia el sonido o el sentido, nunca la fuerza.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta del bosque", img: "bg-universidad", yo: "camila",
    escena: "Camila busca la fiesta de la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Où est la fête ?", "¿Dónde es la fiesta?"],
      ["hugo", "Elle est là, à côté de la forêt.", "Es allá, al lado del bosque."],
      ["camila", "Tu veux du thé ou du café ? Ma mère a fait un gâteau.", "¿Quieres té o café? Mi mamá hizo un pastel."],
      ["hugo", "Du café ! Et cet été, tu vas à Paris ?", "¡Café! ¿Y este verano vas a París?"]
    ],
    fijate: "Fíjate: où (dónde) / ou (o); là (allá) / la (la); à (preposición) / a (verbo); fête, forêt, mère [ɛ]; été, thé, café [e]."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "Para qué sirven los acentos",
      idea: "El acento francés no marca la sílaba fuerte (siempre es la última). é (agudo) = [e]: été, café. è (grave) = [ɛ]: mère, père. ê (circunflejo) = [ɛ] y a menudo recuerda una s antigua: fête (fiesta), forêt (floresta). Sobre a y u, el acento solo distingue palabras: a (verbo) / à (preposición), ou (o) / où (dónde), la (artículo) / là (allá). ë marca una vocal que se lee aparte: Noël.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'été · le café · le thé", es: "el verano · el café · el té — é [e]" },
        { fr: "la mère · le père", es: "la madre · el padre — è [ɛ]" },
        { fr: "la fête · la forêt", es: "la fiesta · el bosque — ê [ɛ]" },
        { fr: "il a · à Paris", es: "tiene · a París" },
        { fr: "ou · où", es: "o · dónde" },
        { fr: "la · là", es: "la · allá" },
        { fr: "déjà · ça", es: "ya · eso" },
        { fr: "Noël", es: "Navidad — ë: o-el" }
      ],
      ej: [["Il a un chat. Il va à Paris.", "Tiene un gato. Va a París."], ["Tu veux du thé ou du café ? Où vas-tu ?", "¿Quieres té o café? ¿Adónde vas?"], ["La fête est dans la forêt.", "La fiesta es en el bosque."]],
      clave: "é cerrada, è y ê abiertas; à, où y là distinguen palabras." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il va a Paris.", "Il va à Paris.", "La preposición lleva acento: à."], ["Ou est la gare ?", "Où est la gare ?", "Dónde: où, con acento."], ["la mére", "la mère", "Madre: è, e abierta."]] }
  ],
  ejemplos: [
    { sit: "«Vive en Lyon.»", resp: "Il habite à Lyon.", pasos: ["Preposición: à."], porque: "à / a." },
    { sit: "«¿Dónde está la estación?»", resp: "Où est la gare ?", pasos: ["Dónde: où."], porque: "où / ou." },
    { sit: "«Ella tiene veinte años.»", resp: "Elle a vingt ans.", pasos: ["Verbo avoir: a, sin acento."], porque: "a / à." }
  ],
  comprueba: [
    { q: "En francés, el acento escrito…", o: ["no marca la sílaba fuerte", "marca la sílaba fuerte"], a: 0, b: "ortho", porque: "La fuerte siempre es la última." },
    { q: "La è de mère suena…", o: ["[ɛ], abierta", "[e], cerrada"], a: 0, b: "ortho", porque: "Grave = abierta." },
    { q: "Où con acento significa…", o: ["dónde", "o"], a: 0, b: "ortho", porque: "ou = o." }
  ],
  practica: [
    { fase: "guiada", c: ["fac-mots"], k: "sort", ask: "¿Con acento o sin acento?", q: "Clasifica.", cats: ["Con acento", "Sin acento"], items: [["à (preposición)", 0], ["où (dónde)", 0], ["là (allá)", 0], ["déjà", 0], ["a (verbo)", 1], ["ou (o)", 1], ["la (artículo)", 1], ["il a", 1]], pista: "à, où, là: con acento.", why: "Acento que distingue." },
    { fase: "guiada", c: ["fac-mots"], k: "choice", ask: "«Vive en Lyon.»", q: "«Il habite ___ Lyon.»", o: ["à", "a"], a: 0, pista: "Preposición.", why: "<b>à Lyon</b>." },
    { fase: "guiada", c: ["fac-e"], k: "choice", es: true, say: "la fête", ask: "Escucha. ¿Qué e oyes?", q: "Elige.", o: ["[ɛ] abierta", "[e] cerrada"], a: 0, pista: "ê.", why: "<b>la fête</b> [fɛt]." },
    { fase: "indep", c: ["fac-mots"], k: "choice", ask: "«¿Dónde está la estación?»", q: "«___ est la gare ?»", o: ["Où", "Ou"], a: 0, why: "<b>Où</b>: dónde." },
    { fase: "indep", c: ["fac-mots"], k: "fill", ask: "Completa: «Ella tiene veinte años».", q: "Elle ___ vingt ans.", acc: ["a"], why: "Verbo avoir: <b>a</b>, sin acento." },
    { fase: "indep", c: ["fac-mots"], k: "spot", ask: "Encuentra el error.", s: "Je vais [a] la bibliothèque .", fix: "à", why: "<b>à la bibliothèque</b>." },
    { fase: "aplica", c: ["fac-e"], k: "match", ask: "Une cada acento con lo que hace.", q: "Acento → efecto", pairs: [["l'été", "é: [e] cerrada"], ["la mère", "è: [ɛ] abierta"], ["la forêt", "ê: [ɛ] y una s antigua"], ["Noël", "ë: vocal que se lee aparte"]], why: "Los acentos de la e." },
    { fase: "aplica", c: ["fac-e"], k: "choice", ask: "«la madre»", q: "«la ___»", o: ["mère", "mére"], a: 0, why: "<b>mère</b>: è." },
    { fase: "dominio", c: ["fac-e"], k: "choice", es: true, say: "l'été", ask: "Escucha. ¿Qué e oyes dos veces?", q: "Elige.", o: ["[e] cerrada: é", "[ɛ] abierta: è"], a: 0, why: "<b>l'été</b>." },
    { fase: "dominio", c: ["fac-mots"], k: "order", ask: "Ordena: «¿Quieres té o café?».", tokens: ["Tu veux", "du thé", "ou du café ?"], why: "<b>Tu veux du thé ou du café ?</b>" },
    { fase: "dominio", c: ["fac-e", "fac-mots"], k: "listen", say: "Où est la fête ? Elle est là, à côté de la forêt.", acc: ["Où est la fête ? Elle est là, à côté de la forêt."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Où est la fête ? Elle est là, à côté de la forêt.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Lyon"], previo: ["est", "elle", "côté", "de", "tu", "veux", "du", "ma", "fait", "un", "gâteau", "et", "cet", "vas", "il", "va", "habite", "gare", "vingt", "ans", "je", "vais", "bibliothèque", "chat", "dans", "vas-tu"] }
};

E["fon-ien-ain"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "-ien / -ienne, -ain / -aine, -in / -ine",
  objetivo: {
    que: "Vas a pronunciar los pares masculino / femenino que pasan de nasal a no nasal: voisin / voisine, mexicain / mexicaine.",
    corto: "-ien / -ienne · -ain / -aine · -in / -ine.",
    podras: ["Decir -ien [jɛ̃] / -ienne [jɛn]: italien, italienne.", "Decir -ain [ɛ̃] / -aine [ɛn]: mexicain, mexicaine.", "Decir -in [ɛ̃] / -ine [in]: cousin, cousine."],
    iconos: ["ic2/amigos", "ic2/mundo", "ic2/audifonos"],
    previos: ["Nasal o no nasal (lección 24)."],
    capacidad: "Ahora dices bien las nacionalidades y los oficios en femenino."
  },
  requiere: R("fdn-regle", "fdn-fem"), recupera: ["fdn-fem"],
  conceptos: {
    "fia-ien": { n: "-ien [jɛ̃] / -ienne [jɛn]; -ain [ɛ̃] / -aine [ɛn]", b: "phono" },
    "fia-in": { n: "-in [ɛ̃] / -ine [in]: voisin / voisine, cousin / cousine", b: "phono" }
  },
  video: {
    titulo: "Masculino nasal, femenino no", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "voisin · voisine", seg: [
        { es: "Hola. El masculino es nasal; el femenino no." } ] },
      { v: "frase", filas: [
          { nota: "-ien", p: 1, partes: [["italien · italienne", "-", 1]] },
          { nota: "-ain", p: 2, partes: [["mexicain · mexicaine", "-", 2]] },
          { nota: "-in", p: 3, partes: [["cousin · cousine", "-", 3]] } ], seg: [
        { fr: "italien, italienne", p: 1 }, { fr: "mexicain, mexicaine", p: 2 }, { es: "Ojo: i n e suena in, como en español:", p: 3 }, { fr: "cousin, cousine", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi vecina es mexicana.»", o: ["Ma voisine est mexicaine.", "Ma voisin est mexicain."], a: 0,
        bien: "¡Sí! Femenino: voisine, mexicaine.", mal: "Vecina: voisine, mexicaine.",
        seg: [ { es: "Pausa. Mi vecina." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["italien", "italienne", "mexicain", "mexicaine", "cousin", "cousine"], seg: [
        { es: "En femenino la ene suena.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mis vecinos", img: "bg-cafe", yo: "camila",
    escena: "Camila le habla a Hugo de su edificio.",
    pj: PJ,
    lineas: [
      ["camila", "Mon voisin est mexicain, et ma voisine est mexicaine aussi.", "Mi vecino es mexicano, y mi vecina también es mexicana."],
      ["hugo", "Et ton cousin ? Il est musicien, non ?", "¿Y tu primo? Es músico, ¿no?"],
      ["camila", "Oui, et ma cousine est musicienne aussi. Elle habite avec une amie italienne.", "Sí, y mi prima también es música. Vive con una amiga italiana."],
      ["hugo", "Moi, j'ai un ami marocain et une amie chilienne. Le monde entier !", "Yo tengo un amigo marroquí y una amiga chilena. ¡El mundo entero!"]
    ],
    fijate: "Fíjate: voisin, mexicain, cousin, musicien, marocain [ɛ̃]; voisine [in], mexicaine [ɛn], musicienne, italienne, chilienne [jɛn]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Pares nasal / no nasal",
      idea: "-ien [jɛ̃] → -ienne [jɛn]: italien / italienne. -ain [ɛ̃] → -aine [ɛn]: mexicain / mexicaine. -in [ɛ̃] → -ine [in]: voisin / voisine, cousin / cousine. -an [ɑ̃] → -ane [an]: persan / persane. En el femenino la n suena y la vocal deja de ser nasal.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "italien · italienne", es: "italiano · italiana — [jɛ̃] / [jɛn]" },
        { fr: "canadien · canadienne", es: "canadiense (m. / f.)" },
        { fr: "chilien · chilienne", es: "chileno · chilena" },
        { fr: "colombien · colombienne", es: "colombiano · colombiana" },
        { fr: "musicien · musicienne", es: "músico · música" },
        { fr: "pharmacien · pharmacienne", es: "farmaceuta (m. / f.)" },
        { fr: "mexicain · mexicaine", es: "mexicano · mexicana — [ɛ̃] / [ɛn]" },
        { fr: "américain · américaine", es: "estadounidense (m. / f.)" },
        { fr: "marocain · marocaine", es: "marroquí (m. / f.)" },
        { fr: "voisin · voisine", es: "vecino · vecina — [ɛ̃] / [in]" },
        { fr: "cousin · cousine", es: "primo · prima — [ɛ̃] / [in]" },
        { fr: "persan · persane", es: "persa (m. / f.) — [ɑ̃] / [an]" }
      ],
      ej: [["Mon voisin est mexicain, ma voisine est mexicaine.", "Mi vecino es mexicano; mi vecina, mexicana."], ["un musicien, une musicienne", "un músico, una música"], ["Mon cousin et ma cousine", "Mi primo y mi prima"]],
      clave: "-ine suena [in], como en español: cousine, voisine." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["cousine (con nasal)", "cousine", "-ine suena [in], sin nasal."], ["Ma voisine est colombiene.", "Ma voisine est colombienne.", "-ienne lleva dos n."], ["une Américaine (con nasal)", "une Américaine", "-aine: [ɛn], la n suena."]] }
  ],
  ejemplos: [
    { sit: "«mi vecina»", resp: "ma voisine", pasos: ["-ine: [in]."], porque: "Femenino." },
    { sit: "«Ella es música.»", resp: "Elle est musicienne.", pasos: ["-ienne: [jɛn]."], porque: "Dos n." },
    { sit: "«un amigo marroquí»", resp: "un ami marocain", pasos: ["-ain: nasal [ɛ̃]."], porque: "Masculino." }
  ],
  comprueba: [
    { q: "Cousine termina en…", o: ["[in], como en español", "[ɛ̃], nasal"], a: 0, b: "phono", porque: "-ine." },
    { q: "El femenino de italien se escribe…", o: ["italienne, con dos n", "italiene, con una n"], a: 0, b: "phono", porque: "-ienne." },
    { q: "Mexicain termina en…", o: ["nasal [ɛ̃]", "[ɛn]"], a: 0, b: "phono", porque: "Masculino." }
  ],
  practica: [
    { fase: "guiada", c: ["fia-ien", "fia-in"], k: "sort", ask: "¿Nasal o no nasal?", q: "Clasifica.", cats: ["Nasal [ɛ̃]", "No nasal [ɛn] / [in]"], items: [["canadien", 0], ["américain", 0], ["voisin", 0], ["musicien", 0], ["canadienne", 1], ["américaine", 1], ["voisine", 1], ["musicienne", 1]], pista: "Masculino: nasal.", why: "Pares." },
    { fase: "guiada", c: ["fia-ien"], k: "choice", es: true, say: "mexicaine", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["mexicaine (femenino)", "mexicain (masculino)"], a: 0, pista: "Se oye la n.", why: "<b>mexicaine</b>." },
    { fase: "guiada", c: ["fia-in"], k: "choice", es: true, say: "cousin", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["cousin (primo)", "cousine (prima)"], a: 0, pista: "Nasal: masculino.", why: "<b>cousin</b>." },
    { fase: "indep", c: ["fia-ien"], k: "fill", ask: "Escribe el femenino.", q: "un Américain → une ___", acc: ["Américaine", "américaine"], why: "<b>Américaine</b>." },
    { fase: "indep", c: ["fia-ien"], k: "choice", ask: "«una farmaceuta»", q: "«une ___»", o: ["pharmacienne", "pharmacien"], a: 0, why: "<b>pharmacienne</b>." },
    { fase: "indep", c: ["fia-ien"], k: "spot", ask: "Encuentra el error.", s: "Ma voisine est [colombiene] .", fix: "colombienne", why: "<b>colombienne</b>." },
    { fase: "aplica", c: ["fia-ien", "fia-in"], k: "match", ask: "Une el masculino con el femenino.", q: "Masculino → femenino", pairs: [["italien", "italienne"], ["marocain", "marocaine"], ["cousin", "cousine"], ["chilien", "chilienne"]], why: "Pares." },
    { fase: "aplica", c: ["fia-in"], k: "choice", es: true, say: "ma voisine", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[in], como en español", "[ɛ̃], nasal"], a: 0, why: "<b>voisine</b> [vwazin]." },
    { fase: "dominio", c: ["fia-in"], k: "choice", ask: "«Mi prima es música.»", q: "«Ma ___ est musicienne.»", o: ["cousine", "cousin"], a: 0, why: "<b>Ma cousine</b>." },
    { fase: "dominio", c: ["fia-ien", "fia-in"], k: "order", ask: "Ordena: «Mi vecino es mexicano».", tokens: ["Mon voisin", "est", "mexicain."], why: "<b>Mon voisin est mexicain.</b>" },
    { fase: "dominio", c: ["fia-ien", "fia-in"], k: "listen", say: "Mon cousin est canadien et ma cousine est italienne.", acc: ["Mon cousin est canadien et ma cousine est italienne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon cousin est canadien et ma cousine est italienne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["mon", "est", "et", "ma", "aussi", "ton", "il", "non", "oui", "elle", "habite", "avec", "une", "amie", "moi", "j'ai", "un", "ami", "le", "monde", "entier"] }
};

E["fon-a-graphies"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le son [a] : a, à, â, et e de femme",
  objetivo: {
    que: "Vas a reconocer las grafías de [a]: a, à, â, y la e que suena [a] en femme y en -emment.",
    corto: "chat, là, pâte · femme [fam].",
    podras: ["Leer a, à y â como [a].", "Pronunciar femme [fam].", "Pronunciar los adverbios en -emment y -amment: [amɑ̃]."],
    iconos: ["ic2/libro", "ic2/audifonos", "ic2/lapiz"],
    previos: ["De la grafía al sonido (lección 5) y los acentos (lección 26)."],
    capacidad: "Ahora lees femme y évidemment sin tropezar."
  },
  requiere: R("fg-voy", "fac-e", "fac-mots"), recupera: ["fg-voy"],
  conceptos: {
    "fag-a": { n: "a, à, â → [a]; e de femme → [a]", b: "phono" },
    "fag-emment": { n: "-emment y -amment → [amɑ̃]: évidemment, couramment", b: "phono" }
  },
  video: {
    titulo: "El sonido [a]", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "a · à · â · femme", seg: [
        { es: "Hola. A veces la a se escribe con e." } ] },
      { v: "frase", filas: [
          { nota: "a, à, â", p: 1, partes: [["le chat · là · les pâtes", "-", 1]] },
          { nota: "e = [a]", p: 2, partes: [["la femme", "-", 2]] },
          { nota: "-emment", p: 3, partes: [["évidemment · récemment", "-", 3]] } ], seg: [
        { fr: "le chat, là, les pâtes", p: 1 }, { es: "En femme, la e suena a:", p: 2 }, { fr: "la femme", p: 2 }, { es: "E m m e n t suena aman:", p: 3 }, { fr: "évidemment, récemment", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi esposa habla francés con fluidez.»", o: ["Ma femme parle couramment français.", "Ma femme parle courant français."], a: 0,
        bien: "¡Sí! Couramment, con dos m.", mal: "Con fluidez: couramment.",
        seg: [ { es: "Pausa. Con fluidez." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le chat", "là", "les pâtes", "la femme", "évidemment", "couramment"], seg: [
        { es: "Femme suena fam.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La nueva vecina", img: "bg-cafe", yo: "camila",
    escena: "Hugo habla de su vecino y su esposa.",
    pj: PJ,
    lineas: [
      ["hugo", "Mon voisin est arrivé récemment. Sa femme parle couramment espagnol.", "Mi vecino llegó hace poco. Su esposa habla español con fluidez."],
      ["camila", "Évidemment ! Elle est mexicaine, non ?", "¡Evidentemente! Es mexicana, ¿no?"],
      ["hugo", "Oui. Ce soir, elle prépare des pâtes. Tu viens ?", "Sí. Esta noche prepara pasta. ¿Vienes?"],
      ["camila", "Avec plaisir ! Mais je conduis prudemment, j'arrive à neuf heures.", "¡Con gusto! Pero manejo con prudencia, llego a las nueve."]
    ],
    fijate: "Fíjate: femme [fam]; récemment, couramment, évidemment, prudemment [amɑ̃]; pâtes, à, plaisir [a]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Escribir [a]",
      idea: "[a] se escribe a, à o â: chat, là, pâte (la â era más abierta, pero hoy casi no se distingue). También se escribe e en femme [fam] y en los adverbios en -emment: évidemment, récemment, prudemment [amɑ̃]. Los adverbios en -amment suenan igual: couramment, suffisamment.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le chat · là · les pâtes", es: "el gato · allá · la pasta — a, à, â" },
        { fr: "la femme", es: "la mujer, la esposa — [fam]" },
        { fr: "évident · évidemment", es: "evidente · evidentemente — [amɑ̃]" },
        { fr: "récent · récemment", es: "reciente · recientemente" },
        { fr: "prudent · prudemment", es: "prudente · con prudencia" },
        { fr: "courant · couramment", es: "corriente · con fluidez — -amment" },
        { fr: "suffisamment", es: "suficientemente" },
        { fr: "ferme · la mer", es: "firme · el mar — aquí la e suena [ɛ]" },
        { fr: "la fête · l'été", es: "la fiesta · el verano — [ɛ] / [e]" }
      ],
      ej: [["Ma femme parle couramment français.", "Mi esposa habla francés con fluidez."], ["Évidemment, il est arrivé récemment.", "Evidentemente, llegó hace poco."], ["Les pâtes sont prêtes.", "La pasta está lista."]],
      clave: "femme = [fam]; -emment = -amment = [amɑ̃]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["femme (dicha [fɛm])", "femme", "En femme, la e suena [a]."], ["Il parle couramant.", "Il parle couramment.", "-amment: dos m."], ["évidemment (dicho evidément)", "évidemment", "-emment suena [amɑ̃]."]] }
  ],
  ejemplos: [
    { sit: "«la mujer»", resp: "la femme", pasos: ["e = [a]: [fam]."], porque: "Excepción." },
    { sit: "«evidentemente»", resp: "évidemment", pasos: ["évident → -emment [amɑ̃]."], porque: "-ent → -emment." },
    { sit: "«con fluidez»", resp: "couramment", pasos: ["courant → -amment."], porque: "-ant → -amment." }
  ],
  comprueba: [
    { q: "Femme se pronuncia…", o: ["[fam]", "[fɛm]"], a: 0, b: "phono", porque: "e = [a]." },
    { q: "-emment y -amment suenan…", o: ["igual: [amɑ̃]", "distinto"], a: 0, b: "phono", porque: "évidemment, couramment." },
    { q: "Courant da el adverbio…", o: ["couramment", "courament"], a: 0, b: "phono", porque: "-ant → -amment." }
  ],
  practica: [
    { fase: "guiada", c: ["fag-a", "fag-emment"], k: "sort", ask: "¿La e suena [a]?", q: "Clasifica.", cats: ["Suena [a]", "Suena [ɛ] o [e]"], items: [["femme", 0], ["prudemment", 0], ["récemment", 0], ["évidemment", 0], ["ferme", 1], ["la fête", 1], ["l'été", 1], ["la mer", 1]], pista: "femme y -emment: [a].", why: "e = [a]." },
    { fase: "guiada", c: ["fag-a"], k: "choice", es: true, say: "la femme", ask: "Escucha. ¿Cómo se pronuncia?", q: "Elige.", o: ["[fam]", "[fɛm]", "[fem]"], a: 0, pista: "Como si fuera con a.", why: "<b>femme</b> [fam]." },
    { fase: "guiada", c: ["fag-emment"], k: "choice", es: true, say: "récemment", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["recientemente (récemment)", "evidentemente (évidemment)", "con prudencia (prudemment)"], a: 0, pista: "Empieza con r.", why: "<b>récemment</b>." },
    { fase: "indep", c: ["fag-emment"], k: "fill", ask: "Escribe «con fluidez».", q: "Il parle ___ français.", acc: ["couramment"], why: "<b>couramment</b>." },
    { fase: "indep", c: ["fag-a"], k: "choice", ask: "«la pasta»", q: "«___»", o: ["les pâtes", "la fête"], a: 0, why: "<b>les pâtes</b>." },
    { fase: "indep", c: ["fag-emment"], k: "spot", ask: "Encuentra el error.", s: "Il parle [couramant] l'espagnol .", fix: "couramment", why: "<b>couramment</b>." },
    { fase: "aplica", c: ["fag-emment"], k: "match", ask: "Une cada adjetivo con su adverbio.", q: "Adjetivo → adverbio", pairs: [["évident", "évidemment"], ["récent", "récemment"], ["courant", "couramment"], ["prudent", "prudemment"]], why: "-ent → -emment; -ant → -amment." },
    { fase: "aplica", c: ["fag-a"], k: "choice", es: true, say: "Ma femme a raison.", ask: "Escucha. ¿Cuántas veces oyes [a]?", q: "Elige.", o: ["4", "2", "3"], a: 0, why: "<b>ma, femme, a, raison</b>." },
    { fase: "dominio", c: ["fag-emment"], k: "choice", ask: "«Evidentemente, llegó hace poco.»", q: "«___, il est arrivé récemment.»", o: ["Évidemment", "Prudemment"], a: 0, why: "<b>Évidemment</b>." },
    { fase: "dominio", c: ["fag-a"], k: "order", ask: "Ordena: «Mi esposa habla francés con fluidez».", tokens: ["Ma femme", "parle couramment", "français."], why: "<b>Ma femme parle couramment français.</b>" },
    { fase: "dominio", c: ["fag-a", "fag-emment"], k: "listen", say: "Évidemment, ma femme parle couramment trois langues.", acc: ["Évidemment, ma femme parle couramment trois langues.", "Évidemment, ma femme parle couramment 3 langues."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Évidemment, ma femme parle couramment trois langues.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["mon", "voisin", "est", "arrivé", "sa", "parle", "espagnol", "l'espagnol", "elle", "mexicaine", "non", "oui", "ce", "soir", "prépare", "des", "tu", "viens", "avec", "plaisir", "mais", "je", "conduis", "j'arrive", "à", "neuf", "heures", "ma", "français", "il", "sont", "prêtes", "a", "raison", "trois", "langues"] }
};

/* ───── FON·7 · Consonantes que cuestan (lecciones 29 y 30) ───── */
E["fon-r"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le R français [ʁ] partout",
  objetivo: {
    que: "Vas a pronunciar la r francesa [ʁ] al principio, en medio y al final de la palabra.",
    corto: "[ʁ] en la garganta: Paris, trois, bonjour.",
    podras: ["Colocar la lengua abajo y sacar la [ʁ] de la garganta.", "Decirla detrás de consonante: grand, trois, prix.", "Decirla entre vocales y al final: Paris, bonjour, sœur."],
    iconos: ["ic2/microfono", "ic2/audifonos", "ic2/rayo"],
    previos: ["Consonantes difíciles (lección 4)."],
    capacidad: "Ahora tu r suena francesa, no española."
  },
  requiere: R("fc-sz"), recupera: ["fc-sz"],
  conceptos: {
    "frr-lieu": { n: "[ʁ]: lengua abajo, sonido de la garganta, sin vibrar la punta", b: "phono" },
    "frr-places": { n: "igual al principio, en medio y al final: rouge, Paris, bonjour", b: "phono" }
  },
  video: {
    titulo: "La r francesa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "[ʁ]", seg: [
        { es: "Hola. La r francesa no vibra con la lengua: sale de la garganta." } ] },
      { v: "frase", filas: [
          { nota: "tras consonante", p: 1, partes: [["trois · grand", "-", 1]] },
          { nota: "entre vocales", p: 2, partes: [["Paris · arriver", "-", 2]] },
          { nota: "al final", p: 3, partes: [["bonjour · la sœur", "-", 3]] } ], seg: [
        { es: "Empieza detrás de consonante:", p: 1 }, { fr: "trois, grand", p: 1 }, { es: "Entre vocales:", p: 2 }, { fr: "Paris, arriver", p: 2 }, { es: "Y al final, suave:", p: 3 }, { fr: "bonjour, la sœur", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde se hace la r francesa?", es: true, o: ["Al fondo de la boca, en la garganta", "Con la punta de la lengua"], a: 0,
        bien: "¡Sí! En la garganta.", mal: "La punta de la lengua se queda abajo.",
        seg: [ { es: "Pausa. ¿Dónde se hace?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["rouge", "trois", "Paris", "bonjour", "la sœur", "merci"], seg: [
        { es: "Lengua abajo, sonido atrás.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El regreso", img: "bg-paris", yo: "camila",
    escena: "Camila practica la r con Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Répète : trois gros rats gris.", "Repite: tres ratas grandes grises."],
      ["camila", "Trois gros rats gris… C'est difficile !", "Tres ratas grandes grises… ¡Es difícil!"],
      ["hugo", "C'est très bien ! Tu rentres à Paris ce soir ?", "¡Muy bien! ¿Vuelves a París esta noche?"],
      ["camila", "Oui, avec ma sœur. Merci pour le cadeau rouge !", "Sí, con mi hermana. ¡Gracias por el regalo rojo!"]
    ],
    fijate: "Fíjate: répète, rats, rentres, rouge (al principio); trois, gros, gris, très (tras consonante); Paris (en medio); sœur (al final)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "La [ʁ]",
      idea: "La r francesa [ʁ] se hace al fondo de la boca, cerca de donde hacemos la j española, pero más suave y con vibración en la garganta. La punta de la lengua se queda abajo, detrás de los dientes. Suena igual al principio, en medio y al final. Practica primero detrás de consonante (trois, grand, prix), luego entre vocales (Paris) y al final (bonjour). Ojo: en los infinitivos en -er la r no suena (manger, parler).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "rouge · rire · le roi", es: "rojo · reír · el rey — al principio" },
        { fr: "trois · grand · le prix", es: "tres · grande · el precio — tras consonante" },
        { fr: "gros · gris · froid", es: "gordo · gris · frío" },
        { fr: "Paris · arriver", es: "París · llegar — entre vocales" },
        { fr: "bonjour · la sœur · noir", es: "buenos días · la hermana · negro — al final" },
        { fr: "l'hiver · merci", es: "el invierno · gracias" },
        { fr: "manger · premier · le boulanger · le dîner", es: "comer · primero · el panadero · la cena — -er: la r no suena" },
        { fr: "lire · la loi · le pli · le gant", es: "leer · la ley · el pliegue · el guante — con l" },
        { fr: "le rat · les rats", es: "la rata · las ratas" }
      ],
      ej: [["Trois gros rats gris.", "Tres ratas grandes grises."], ["Je rentre à Paris ce soir.", "Vuelvo a París esta noche."], ["Merci pour le cadeau rouge.", "Gracias por el regalo rojo."]],
      clave: "La punta de la lengua no se mueve: la [ʁ] sale de atrás." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Paris (con r vibrante española)", "Paris", "La [ʁ] se hace en la garganta, sin vibrar la lengua."], ["Il fait froi.", "Il fait froid.", "Frío: froid, con r tras f."], ["manger (diciendo la r)", "manger", "En -er de infinitivo la r no suena."]] }
  ],
  ejemplos: [
    { sit: "«tres»", resp: "trois", pasos: ["t + [ʁ]: la r sale de atrás."], porque: "Tras consonante." },
    { sit: "«París»", resp: "Paris", pasos: ["[ʁ] suave entre vocales; la s no suena."], porque: "En medio." },
    { sit: "«buenos días»", resp: "bonjour", pasos: ["[ʁ] final, suave."], porque: "Al final." }
  ],
  comprueba: [
    { q: "La r francesa se hace…", o: ["en la garganta", "con la punta de la lengua"], a: 0, b: "phono", porque: "[ʁ] uvular." },
    { q: "La punta de la lengua…", o: ["se queda abajo", "toca el paladar"], a: 0, b: "phono", porque: "No vibra." },
    { q: "En manger, la r…", o: ["no suena", "suena [ʁ]"], a: 0, b: "phono", porque: "-er de infinitivo." }
  ],
  practica: [
    { fase: "guiada", c: ["frr-places"], k: "sort", ask: "¿Se oye la r final?", q: "Clasifica.", cats: ["Sí", "No"], items: [["bonjour", 0], ["la sœur", 0], ["l'hiver", 0], ["noir", 0], ["manger", 1], ["premier", 1], ["le boulanger", 1], ["le dîner", 1]], pista: "-er de infinitivo y oficios: muda.", why: "r final." },
    { fase: "guiada", c: ["frr-places"], k: "choice", es: true, say: "rouge", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["rojo (rouge)", "el rey (roi)", "reír (rire)"], a: 0, pista: "[ʁuʒ].", why: "<b>rouge</b>." },
    { fase: "guiada", c: ["frr-lieu"], k: "choice", es: true, ask: "¿Dónde se hace la [ʁ]?", q: "Elige.", o: ["Al fondo de la boca, en la garganta", "Con la punta de la lengua en los dientes"], a: 0, pista: "Cerca de la j.", why: "En la garganta." },
    { fase: "indep", c: ["frr-places"], k: "fill", ask: "Escribe «rojo».", q: "Le drapeau est bleu, blanc et ___.", acc: ["rouge"], why: "<b>rouge</b>." },
    { fase: "indep", c: ["frr-lieu"], k: "choice", es: true, say: "trois", ask: "Escucha. ¿Qué número oyes?", q: "Elige.", o: ["3", "2", "13"], a: 0, why: "<b>trois</b>." },
    { fase: "indep", c: ["frr-lieu"], k: "spot", ask: "Encuentra el error.", s: "Il fait [froi] ce matin .", fix: "froid", why: "<b>froid</b>." },
    { fase: "aplica", c: ["frr-lieu"], k: "match", ask: "Une cada palabra con r con su pareja con l.", q: "r → l", pairs: [["rire", "lire"], ["le roi", "la loi"], ["le prix", "le pli"], ["grand", "le gant"]], why: "[ʁ] / [l]." },
    { fase: "aplica", c: ["frr-places"], k: "choice", es: true, say: "parler", ask: "Escucha. ¿Se oye la r final?", q: "Elige.", o: ["No", "Sí"], a: 0, why: "<b>parler</b>: -er sin r." },
    { fase: "dominio", c: ["frr-lieu", "frr-places"], k: "order", ask: "Ordena el trabalenguas: «Tres ratas grandes grises».", tokens: ["Trois", "gros rats", "gris."], why: "<b>Trois gros rats gris.</b>" },
    { fase: "dominio", c: ["frr-lieu"], k: "choice", ask: "«Gracias por el regalo rojo.»", q: "«Merci pour le cadeau ___.»", o: ["rouge", "gris", "noir"], a: 0, why: "<b>rouge</b>." },
    { fase: "dominio", c: ["frr-lieu", "frr-places"], k: "listen", say: "Je rentre à Paris avec ma sœur.", acc: ["Je rentre à Paris avec ma sœur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je rentre à Paris avec ma sœur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: ["répète", "c'est", "difficile", "très", "bien", "tu", "rentres", "rentre", "à", "ce", "soir", "oui", "avec", "ma", "pour", "le", "cadeau", "il", "fait", "matin", "drapeau", "est", "bleu", "blanc", "et", "je", "parler"] }
};

E["fon-consonnes-finales"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Consonnes finales : la règle CaReFuL",
  objetivo: {
    que: "Vas a saber qué consonantes finales suenan: casi nunca, salvo c, r, f y l (CaReFuL).",
    corto: "petit [pəti] · avec [avɛk].",
    podras: ["Callar las consonantes finales en general: petit, grand, vous.", "Pronunciar c, r, f, l finales: avec, bonjour, chef, sel.", "Recordar las excepciones: blanc, tabac, clef, gentil y los infinitivos en -er."],
    iconos: ["ic2/bombilla", "ic2/audifonos", "ic2/candado"],
    previos: ["Letras finales mudas (lección 6)."],
    capacidad: "Ahora sabes cuándo se oye la última letra."
  },
  requiere: R("fm-finales"), recupera: ["fm-finales"],
  conceptos: {
    "fcf-muettes": { n: "consonantes finales mudas en general: petit, grand, gros", b: "phono" },
    "fcf-careful": { n: "c, r, f, l finales suenan: avec, mer, chef, sel; excepciones: blanc, clef, -er", b: "phono" }
  },
  video: {
    titulo: "CaReFuL", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "C · R · F · L", seg: [
        { es: "Hola. Las consonantes finales casi nunca suenan. Casi." } ] },
      { v: "dos",
        a: { tag: "muda", fr: "petit", es: "pequeño" },
        b: { tag: "CaReFuL", fr: "avec", es: "con" },
        seg: [ { es: "La te final no suena:", p: 1 }, { fr: "petit", p: 1 }, { es: "La ce final sí:", p: 2 }, { fr: "avec", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Con un amigo y un perro.»", o: ["Avec un ami et un chien.", "Avec une ami et un chien."], a: 0,
        bien: "¡Sí! Y en avec, la c suena.", mal: "Amigo es masculino: un ami.",
        seg: [ { es: "Pausa. Con un amigo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["petit", "grand", "avec", "bonjour", "chef", "le sel"], seg: [
        { es: "Recuerda la palabra inglesa careful: c, r, f, l.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la cocina", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo cocinan con un chef.",
    pj: PJ,
    lineas: [
      ["hugo", "Le chef met du sel avec un petit peu de poivre.", "El chef pone sal con un poquito de pimienta."],
      ["camila", "Il est grand, le chef ! Et il parle trop vite.", "¡Es alto el chef! Y habla demasiado rápido."],
      ["hugo", "Il est gentil. Il a un sac blanc pour le pain.", "Es amable. Tiene una bolsa blanca para el pan."],
      ["camila", "Bon, le bus arrive à neuf heures. On y va ?", "Bueno, el bus llega a las nueve. ¿Vamos?"]
    ],
    fijate: "Fíjate: chef, sel, avec, sac, bus, neuf (suenan); petit, grand, trop, gentil, blanc (mudas)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "¿Suena la última letra?",
      idea: "En general, las consonantes finales no suenan: petit, gros, vous, nez, chaud, grand, trop. Pero c, r, f y l finales sí suelen sonar (CaReFuL, como el inglés careful): avec, bonjour, chef, sel. Excepciones: -er de infinitivos y oficios (manger, boulanger), blanc y tabac (sin c), clef (sin f), gentil y outil (sin l). Las palabras extranjeras suelen pronunciarla: bus, sport, test.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "petit · gros · grand", es: "pequeño · gordo · grande — mudas" },
        { fr: "vous · trop · le nez", es: "ustedes · demasiado · la nariz — mudas" },
        { fr: "avec · le sac · le parc", es: "con · la bolsa · el parque — c suena" },
        { fr: "bonjour · la mer", es: "buenos días · el mar — r suena" },
        { fr: "le chef · neuf", es: "el chef · nueve — f suena" },
        { fr: "le sel · l'avril", es: "la sal · abril — l suena" },
        { fr: "blanc · le tabac", es: "blanco · el tabaco — sin c" },
        { fr: "la clef", es: "la llave — sin f [kle]" },
        { fr: "gentil · l'outil", es: "amable · la herramienta — sin l" },
        { fr: "chanter · le boulanger", es: "cantar · el panadero — sin r" },
        { fr: "le bus · le sport · le test", es: "el bus · el deporte · el examen — palabras extranjeras" },
        { fr: "le chien · le poivre", es: "el perro · la pimienta" }
      ],
      ej: [["Avec un sac, un chef et du sel.", "Con una bolsa, un chef y sal."], ["Il est petit et gros.", "Es pequeño y gordo."], ["Le bus arrive à neuf heures.", "El bus llega a las nueve."]],
      clave: "Muda por defecto; c, r, f, l suenan; y ojo con las excepciones." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["petit (diciendo la t)", "petit", "La t final no suena."], ["Mon frère est très peti.", "Mon frère est très petit.", "Se escribe con t, aunque no suene."], ["blanc (diciendo la c)", "blanc", "Excepción: blanc sin c."]] }
  ],
  ejemplos: [
    { sit: "«pequeño»", resp: "petit", pasos: ["t final: muda."], porque: "Regla general." },
    { sit: "«con»", resp: "avec", pasos: ["c final: suena [avɛk]."], porque: "CaReFuL." },
    { sit: "«blanco»", resp: "blanc", pasos: ["c final, pero excepción: [blɑ̃]."], porque: "Excepción." }
  ],
  comprueba: [
    { q: "Por regla general, la consonante final…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "petit, grand." },
    { q: "Las consonantes finales que suelen sonar son…", o: ["c, r, f, l", "t, d, s, x"], a: 0, b: "phono", porque: "CaReFuL." },
    { q: "En blanc, la c…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "Excepción." }
  ],
  practica: [
    { fase: "guiada", c: ["fcf-muettes", "fcf-careful"], k: "sort", ask: "¿Suena la última letra?", q: "Clasifica.", cats: ["Sí", "No"], items: [["le sel", 0], ["le chef", 0], ["la mer", 0], ["le sac", 0], ["petit", 1], ["vous", 1], ["le tabac", 1], ["chanter", 1]], pista: "CaReFuL, con excepciones.", why: "Consonantes finales." },
    { fase: "guiada", c: ["fcf-careful"], k: "choice", es: true, say: "avec", ask: "Escucha. ¿Suena la última letra?", q: "Elige.", o: ["Sí, [avɛk]", "No, [avɛ]"], a: 0, pista: "c: CaReFuL.", why: "<b>avec</b>." },
    { fase: "guiada", c: ["fcf-muettes"], k: "choice", es: true, say: "grand", ask: "Escucha. ¿Suena la d?", q: "Elige.", o: ["No, [gʁɑ̃]", "Sí, [gʁɑ̃d]"], a: 0, pista: "d final: muda.", why: "<b>grand</b>." },
    { fase: "indep", c: ["fcf-muettes"], k: "fill", ask: "Escribe «grande» (masculino).", q: "Il est ___.", acc: ["grand"], why: "<b>grand</b>: la d no suena, pero se escribe." },
    { fase: "indep", c: ["fcf-careful"], k: "choice", ask: "¿En cuál suena la última letra?", q: "«___»", o: ["neuf", "blanc", "petit"], a: 0, why: "<b>neuf</b>: f suena." },
    { fase: "indep", c: ["fcf-muettes"], k: "spot", ask: "Encuentra el error.", s: "Mon frère est très [peti] pour son âge .", fix: "petit", why: "<b>petit</b>." },
    { fase: "aplica", c: ["fcf-careful"], k: "match", ask: "Une cada palabra con su pronunciación.", q: "Palabra → sonido", pairs: [["le chef", "[ʃɛf]"], ["la clef", "[kle]"], ["le sac", "[sak]"], ["le tabac", "[taba]"]], why: "CaReFuL y excepciones." },
    { fase: "aplica", c: ["fcf-careful"], k: "choice", es: true, say: "gentil", ask: "Escucha. ¿Suena la l?", q: "Elige.", o: ["No", "Sí"], a: 0, why: "<b>gentil</b>: excepción." },
    { fase: "dominio", c: ["fcf-muettes", "fcf-careful"], k: "order", ask: "Ordena: «Con un amigo y un perro».", tokens: ["Avec", "un ami", "et un chien."], why: "<b>Avec un ami et un chien.</b>" },
    { fase: "dominio", c: ["fcf-muettes"], k: "choice", es: true, say: "Il parle trop vite.", ask: "Escucha. ¿Se oye la p de trop?", q: "Elige.", o: ["No", "Sí"], a: 0, why: "<b>trop</b>: p muda." },
    { fase: "dominio", c: ["fcf-muettes", "fcf-careful"], k: "listen", say: "Le chef met du sel avec un petit peu de poivre.", acc: ["Le chef met du sel avec un petit peu de poivre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le chef met du sel avec un petit peu de poivre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["met", "du", "un", "peu", "de", "il", "est", "et", "parle", "vite", "a", "pour", "pain", "bon", "arrive", "à", "heures", "on", "y", "va", "mon", "frère", "très", "son", "âge", "ami"] }
};

E["fon-s-z"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Une ou deux s ? [s] et [z]",
  objetivo: {
    que: "Vas a saber cuándo la s suena [z] y cuándo [s], y escribir s o ss entre vocales.",
    corto: "poison [z] / poisson [s].",
    podras: ["Leer s entre vocales como [z]: rose, maison.", "Escribir ss para [s] entre vocales: poisson, dessert.", "No confundir poison / poisson, désert / dessert, cousin / coussin."],
    iconos: ["ic2/lapiz", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Sordas y sonoras: [s] y [z] (lección 14)."],
    capacidad: "Ahora no pides veneno cuando quieres pescado."
  },
  requiere: R("fss-sz", "fc-sz"), recupera: ["fss-sz"],
  conceptos: {
    "fsz-s": { n: "s entre vocales = [z]: rose, maison, cuisine", b: "phono" },
    "fsz-ss": { n: "ss entre vocales = [s]: poisson, dessert, russe", b: "phono" }
  },
  video: {
    titulo: "Una s o dos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "s · ss", seg: [
        { es: "Hola. Una s entre vocales zumba; dos s silban." } ] },
      { v: "dos",
        a: { tag: "una s [z]", fr: "le poison", es: "el veneno" },
        b: { tag: "dos s [s]", fr: "le poisson", es: "el pescado" },
        seg: [ { es: "Una s, zumba:", p: 1 }, { fr: "le poison", p: 1 }, { es: "Dos s, silba:", p: 2 }, { fr: "le poisson", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Como pescado.»", o: ["Je mange du poisson.", "Je mange du poison."], a: 0,
        bien: "¡Sí! Pescado: poisson, con ss.", mal: "¡Cuidado! Poison es veneno.",
        seg: [ { es: "Pausa. Pescado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la rose", "la maison", "le poisson", "le dessert", "le cousin", "le coussin"], seg: [
        { es: "Entre vocales: s es zeta, ss es ese.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El menú", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo piden en un restaurante.",
    pj: PJ,
    lineas: [
      ["camila", "Qu'est-ce qu'il y a dans la cuisine aujourd'hui ?", "¿Qué hay hoy en la cocina?"],
      ["hugo", "Du poisson. Et comme dessert, une glace à la rose.", "Pescado. Y de postre, un helado de rosa."],
      ["camila", "Du poisson ? Pas du poison, j'espère !", "¿Pescado? ¡No veneno, espero!"],
      ["hugo", "Ha ha ! Mon cousin dit toujours ça. La maison est sérieuse.", "¡Ja, ja! Mi primo siempre dice eso. La casa es seria."]
    ],
    fijate: "Fíjate: cuisine, rose, poison, cousin, maison, sérieuse [z]; poisson, dessert [s]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "s o ss",
      idea: "Una s entre dos vocales suena [z]: rose, maison, cuisine, désert. Para [s] entre vocales se escribe ss: poisson, dessert, russe. La z siempre suena [z]: zéro, douze. Al principio o junto a consonante, la s suena [s]: sac, penser.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la rose · la maison", es: "la rosa · la casa — [z]" },
        { fr: "la cuisine · la musique", es: "la cocina · la música — [z]" },
        { fr: "le poison", es: "el veneno — [z]" },
        { fr: "le poisson", es: "el pescado — [s]" },
        { fr: "le désert", es: "el desierto — [z]" },
        { fr: "le dessert", es: "el postre — [s]" },
        { fr: "le cousin", es: "el primo — [z]" },
        { fr: "le coussin", es: "el cojín — [s]" },
        { fr: "russe · la tasse · la classe", es: "ruso · la taza · la clase — [s]" },
        { fr: "zéro · douze", es: "cero · doce — z = [z]" },
        { fr: "le sac · penser", es: "la bolsa · pensar — [s]" }
      ],
      ej: [["Je mange du poisson au dessert ? Non !", "¿Como pescado de postre? ¡No!"], ["La maison est rose.", "La casa es rosada."], ["Mon cousin a un coussin.", "Mi primo tiene un cojín."]],
      clave: "Entre vocales: s = [z], ss = [s]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je mange du poison.", "Je mange du poisson.", "Pescado: poisson, con ss. Poison es veneno."], ["Comme désert, une glace.", "Comme dessert, une glace.", "Postre: dessert, con ss."], ["la maisson", "la maison", "Casa: una s, suena [z]."]] }
  ],
  ejemplos: [
    { sit: "«el pescado»", resp: "le poisson", pasos: ["[s] entre vocales: ss."], porque: "ss = [s]." },
    { sit: "«la casa»", resp: "la maison", pasos: ["[z] entre vocales: una s."], porque: "s = [z]." },
    { sit: "«De postre, un helado.»", resp: "Comme dessert, une glace.", pasos: ["dessert: [s], ss."], porque: "No désert." }
  ],
  comprueba: [
    { q: "Una s entre vocales suena…", o: ["[z]", "[s]"], a: 0, b: "phono", porque: "rose, maison." },
    { q: "Para [s] entre vocales se escribe…", o: ["ss", "s"], a: 0, b: "phono", porque: "poisson." },
    { q: "Poison significa…", o: ["veneno", "pescado"], a: 0, b: "phono", porque: "Pescado: poisson." }
  ],
  practica: [
    { fase: "guiada", c: ["fsz-s", "fsz-ss"], k: "sort", ask: "¿[z] o [s]?", q: "Clasifica.", cats: ["[z]", "[s]"], items: [["la rose", 0], ["la cuisine", 0], ["le cousin", 0], ["la musique", 0], ["russe", 1], ["le poisson", 1], ["la tasse", 1], ["la classe", 1]], pista: "Una s entre vocales: [z].", why: "s / ss." },
    { fase: "guiada", c: ["fsz-ss"], k: "choice", es: true, say: "le poisson", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el pescado (poisson)", "el veneno (poison)"], a: 0, pista: "Silba: [s].", why: "<b>le poisson</b>." },
    { fase: "guiada", c: ["fsz-s"], k: "choice", es: true, say: "le désert", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el desierto (désert)", "el postre (dessert)"], a: 0, pista: "Zumba: [z].", why: "<b>le désert</b>." },
    { fase: "indep", c: ["fsz-ss"], k: "fill", ask: "Escribe «el cojín».", q: "un ___", acc: ["coussin"], why: "<b>coussin</b>, con ss." },
    { fase: "indep", c: ["fsz-ss"], k: "choice", ask: "«el postre»", q: "«le ___»", o: ["dessert", "désert"], a: 0, why: "<b>le dessert</b>." },
    { fase: "indep", c: ["fsz-ss"], k: "spot", ask: "Encuentra el error.", s: "Comme [désert] , je voudrais une glace .", fix: "dessert", why: "<b>dessert</b>." },
    { fase: "aplica", c: ["fsz-s", "fsz-ss"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le poison", "el veneno"], ["le poisson", "el pescado"], ["le cousin", "el primo"], ["le coussin", "el cojín"]], why: "Una s o dos." },
    { fase: "aplica", c: ["fsz-s"], k: "choice", es: true, say: "La maison est rose.", ask: "Escucha. ¿Cuántas veces oyes [z]?", q: "Elige.", o: ["2", "1", "3"], a: 0, why: "<b>maison, rose</b>." },
    { fase: "dominio", c: ["fsz-s"], k: "choice", ask: "«La casa es rosada.»", q: "«La ___ est rose.»", o: ["maison", "maisson"], a: 0, why: "<b>maison</b>: una s." },
    { fase: "dominio", c: ["fsz-s", "fsz-ss"], k: "order", ask: "Ordena: «Mi primo come pescado».", tokens: ["Mon cousin", "mange", "du poisson."], why: "<b>Mon cousin mange du poisson.</b>" },
    { fase: "dominio", c: ["fsz-s", "fsz-ss"], k: "listen", say: "Mon cousin mange du poisson dans la cuisine.", acc: ["Mon cousin mange du poisson dans la cuisine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon cousin mange du poisson dans la cuisine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["qu'est-ce", "qu'il", "y", "a", "dans", "la", "aujourd'hui", "du", "et", "comme", "une", "glace", "à", "pas", "j'espère", "ha", "mon", "dit", "toujours", "ça", "est", "sérieuse", "je", "mange", "voudrais", "non", "au", "un"] }
};

E["fon-c-g"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "C et g : doux ou durs ? (ça, ge, gu)",
  objetivo: {
    que: "Vas a leer c y g suaves o duros según la vocal, y usar ç, ge y gu para cambiarlos.",
    corto: "café / cinéma · gare / girafe · ça, mangeons, guitare.",
    podras: ["Leer c y g duros ante a, o, u y suaves ante e, i.", "Escribir ç para [s] ante a, o, u: ça, garçon, commençons.", "Escribir ge y gu: nous mangeons, la guitare."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["De la grafía al sonido (lección 5)."],
    capacidad: "Ahora escribes commençons y mangeons sin dudar."
  },
  requiere: R("fg-cons"), recupera: ["fg-cons"],
  conceptos: {
    "fcg-c": { n: "c + a, o, u = [k]; c + e, i = [s]; ç + a, o, u = [s]", b: "phono" },
    "fcg-g": { n: "g + a, o, u = [g]; g + e, i = [ʒ]; ge + a, o = [ʒ]; gu + e, i = [g]", b: "phono" }
  },
  video: {
    titulo: "C y g", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "ça · ge · gu", seg: [
        { es: "Hola. La vocal que sigue decide si c y g son duras o suaves." } ] },
      { v: "frase", filas: [
          { nota: "c", p: 1, partes: [["le café · le cinéma", "-", 1]] },
          { nota: "ç", p: 2, partes: [["ça · le garçon", "-", 2]] },
          { nota: "ge, gu", p: 3, partes: [["nous mangeons · la guitare", "-", 3]] } ], seg: [
        { es: "Ante a, dura; ante i, suave:", p: 1 }, { fr: "le café, le cinéma", p: 1 }, { es: "La cedilla la suaviza ante a, o, u:", p: 2 }, { fr: "ça, le garçon", p: 2 }, { es: "La e suaviza la g; la u la endurece:", p: 3 }, { fr: "nous mangeons, la guitare", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Comemos en el restaurante.»", o: ["Nous mangeons au restaurant.", "Nous mangons au restaurant."], a: 0,
        bien: "¡Sí! Ge mantiene el sonido suave.", mal: "Sin e, la g sería dura: mangeons.",
        seg: [ { es: "Pausa. Comemos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ça", "le garçon", "commençons", "mangeons", "la guitare", "la gare"], seg: [
        { es: "Cedilla y e suavizan; u endurece.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La clase de música", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia empieza la clase.",
    pj: PJ,
    lineas: [
      ["sofia", "Nous commençons la leçon à huit heures.", "Empezamos la lección a las ocho."],
      ["camila", "Madame, le garçon là-bas joue de la guitare ?", "Señora, ¿el chico de allá toca la guitarra?"],
      ["sofia", "Oui, c'est Hugo. Après, nous mangeons au restaurant de la gare.", "Sí, es Hugo. Después comemos en el restaurante de la estación."],
      ["hugo", "Ça me va ! Et ce soir, on va au cinéma ?", "¡Me parece bien! ¿Y esta noche vamos al cine?"]
    ],
    fijate: "Fíjate: commençons, leçon, garçon, ça (ç = [s]); mangeons (ge = [ʒ]); guitare (gu = [g]); gare [g]; cinéma [s]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Duras y suaves",
      idea: "c + a, o, u = [k]: café, code, cube. c + e, i = [s]: ceci, cinéma. ç + a, o, u = [s]: ça, garçon, reçu. g + a, o, u = [g]: gare. g + e, i = [ʒ]: genou, girafe. ge + a, o = [ʒ]: nous mangeons, nous voyageons. gu + e, i = [g]: guitare, guerre.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le café · le code · le cube", es: "el café · el código · el cubo — [k]" },
        { fr: "la classe · l'école", es: "la clase · la escuela — [k]" },
        { fr: "ceci · le cinéma", es: "esto · el cine — [s]" },
        { fr: "ça · le garçon · reçu", es: "eso · el chico · recibido — ç = [s]" },
        { fr: "la leçon · nous commençons", es: "la lección · empezamos — ç" },
        { fr: "la gare", es: "la estación — [g]" },
        { fr: "le genou · la girafe", es: "la rodilla · la jirafa — [ʒ]" },
        { fr: "nous mangeons · nous voyageons", es: "comemos · viajamos — ge = [ʒ]" },
        { fr: "la guitare · la guerre", es: "la guitarra · la guerra — gu = [g]" }
      ],
      ej: [["Nous commençons à huit heures.", "Empezamos a las ocho."], ["Nous mangeons au restaurant.", "Comemos en el restaurante."], ["Le garçon joue de la guitare.", "El chico toca la guitarra."]],
      clave: "ç y ge suavizan ante a, o, u; gu endurece ante e, i." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["nous mangons", "nous mangeons", "Para mantener [ʒ] ante o, se añade e."], ["le garcon", "le garçon", "Ante o, para [s]: ç."], ["Nous voyagons en train.", "Nous voyageons en train.", "voyageons, con ge."], ["nous commencons", "nous commençons", "Ante o, para [s]: ç."]] }
  ],
  ejemplos: [
    { sit: "«empezamos»", resp: "nous commençons", pasos: ["[s] ante o: ç."], porque: "Cedilla." },
    { sit: "«comemos»", resp: "nous mangeons", pasos: ["[ʒ] ante o: ge."], porque: "e suavizadora." },
    { sit: "«la guitarra»", resp: "la guitare", pasos: ["[g] ante i: gu."], porque: "u endurecedora." }
  ],
  comprueba: [
    { q: "C ante e o i suena…", o: ["[s]", "[k]"], a: 0, b: "phono", porque: "cinéma." },
    { q: "La ç sirve para…", o: ["[s] ante a, o, u", "[k] ante e, i"], a: 0, b: "phono", porque: "ça, garçon." },
    { q: "En guitare, la u…", o: ["no suena: endurece la g", "suena [y]"], a: 0, b: "phono", porque: "gu = [g]." }
  ],
  practica: [
    { fase: "guiada", c: ["fcg-c"], k: "sort", ask: "¿[k] o [s]?", q: "Clasifica.", cats: ["[k]", "[s]"], items: [["le café", 0], ["le cube", 0], ["la classe", 0], ["l'école", 0], ["le cinéma", 1], ["ça", 1], ["reçu", 1], ["ceci", 1]], pista: "c + e, i y ç: [s].", why: "c dura / suave." },
    { fase: "guiada", c: ["fcg-c"], k: "choice", es: true, say: "le garçon", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el chico (garçon)", "la estación (gare)", "la guitarra (guitare)"], a: 0, pista: "Termina en [sɔ̃].", why: "<b>le garçon</b>." },
    { fase: "guiada", c: ["fcg-g"], k: "choice", es: true, say: "la guerre", ask: "Escucha. ¿Cómo suena la g?", q: "Elige.", o: ["[g], dura", "[ʒ], suave"], a: 0, pista: "gu.", why: "<b>la guerre</b>." },
    { fase: "indep", c: ["fcg-c"], k: "fill", ask: "Escribe «el chico».", q: "Le ___ est grand.", acc: ["garçon"], why: "<b>garçon</b>, con ç." },
    { fase: "indep", c: ["fcg-c"], k: "choice", ask: "«Empezamos a las ocho.»", q: "«Nous ___ à huit heures.»", o: ["commençons", "commencons"], a: 0, why: "<b>commençons</b>." },
    { fase: "indep", c: ["fcg-g"], k: "spot", ask: "Encuentra el error.", s: "Nous [voyagons] en train .", fix: "voyageons", why: "<b>voyageons</b>." },
    { fase: "aplica", c: ["fcg-c", "fcg-g"], k: "match", ask: "Une cada palabra con su sonido.", q: "Palabra → sonido", pairs: [["ça", "[s]"], ["la gare", "[g]"], ["nous mangeons", "[ʒ]"], ["la guitare", "[g] sin u"]], why: "c y g." },
    { fase: "aplica", c: ["fcg-g"], k: "choice", ask: "«Comemos en el restaurante.»", q: "«Nous ___ au restaurant.»", o: ["mangeons", "mangons"], a: 0, why: "<b>mangeons</b>." },
    { fase: "dominio", c: ["fcg-g"], k: "choice", es: true, say: "la girafe", ask: "Escucha. ¿Cómo suena la g?", q: "Elige.", o: ["[ʒ], suave", "[g], dura"], a: 0, why: "<b>girafe</b>: g + i." },
    { fase: "dominio", c: ["fcg-c", "fcg-g"], k: "order", ask: "Ordena: «El chico toca la guitarra».", tokens: ["Le garçon", "joue de", "la guitare."], why: "<b>Le garçon joue de la guitare.</b>" },
    { fase: "dominio", c: ["fcg-c", "fcg-g"], k: "listen", say: "Nous commençons la leçon et nous mangeons après.", acc: ["Nous commençons la leçon et nous mangeons après."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous commençons la leçon et nous mangeons après.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: ["nous", "la", "à", "huit", "heures", "madame", "le", "là-bas", "joue", "de", "oui", "c'est", "après", "au", "restaurant", "me", "va", "et", "ce", "soir", "on", "est", "grand", "en", "train"] }
};

E["fon-ch-j"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Ch [ʃ] et j / g [ʒ]",
  objetivo: {
    que: "Vas a pronunciar ch como [ʃ] (sin t) y j, ge, gi como [ʒ].",
    corto: "chat [ʃa] · jour [ʒuʁ].",
    podras: ["Decir ch como sh: chat, chercher, chaud.", "Decir j y g + e, i como [ʒ]: jour, rouge, gilet.", "Distinguir chou / joue, cheveux / jeux."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/pata"],
    previos: ["Consonantes difíciles (lección 4) y sordas y sonoras (lección 14)."],
    capacidad: "Ahora tu ch suena francesa."
  },
  requiere: R("fss-chj", "fc-sz"), recupera: ["fss-chj"],
  conceptos: {
    "fcj-ch": { n: "ch = [ʃ], sin t: chat, chercher; a veces [k]: orchestre", b: "phono" },
    "fcj-j": { n: "j y g + e, i = [ʒ]: jour, rouge, gilet", b: "phono" }
  },
  video: {
    titulo: "Ch y j", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pata", grande: "ch · j", seg: [
        { es: "Hola. La ch francesa no lleva te: es como pedir silencio." } ] },
      { v: "dos",
        a: { tag: "[ʃ] sorda", fr: "le chou", es: "el repollo" },
        b: { tag: "[ʒ] sonora", fr: "la joue", es: "la mejilla" },
        seg: [ { es: "Sin voz, como sh:", p: 1 }, { fr: "le chou", p: 1 }, { es: "Con voz, como la ye argentina:", p: 2 }, { fr: "la joue", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El gato busca su juguete.»", o: ["Le chat cherche son jouet.", "Le chat cherche son chou."], a: 0,
        bien: "¡Sí! chat [ʃ], jouet [ʒ].", mal: "Chou es repollo; juguete: jouet, con [ʒ].",
        seg: [ { es: "Pausa. El gato." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le chat", "chercher", "le chou", "la joue", "le jour", "rouge"], seg: [
        { es: "Ch sin voz, j con voz.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El gato de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Camila visita a Hugo y a su gato.",
    pj: PJ,
    lineas: [
      ["camila", "Qu'est-ce que le chat cherche ?", "¿Qué busca el gato?"],
      ["hugo", "Son jouet rouge. Il est sous la chaise, je crois.", "Su juguete rojo. Está debajo de la silla, creo."],
      ["camila", "Il fait chaud chez toi ! J'ai les joues rouges.", "¡Hace calor en tu casa! Tengo las mejillas rojas."],
      ["hugo", "Bonjour la chaleur ! Tu veux manger une soupe aux choux ?", "¡Hola, calor! ¿Quieres comer una sopa de repollo?"]
    ],
    fijate: "Fíjate: chat, cherche, chaise, chaud, chez, choux [ʃ]; jouet, je, joues, bonjour, rouge, manger [ʒ]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[ʃ] y [ʒ]",
      idea: "ch suena [ʃ], como la sh inglesa: chat, chose, chaud. Nunca [tʃ] como en español. En palabras de origen griego a veces suena [k]: orchestre, chorale. j suena [ʒ]: jour, je, jaune. g + e, i también: page, rouge, gilet. Pares: chou [ʃu] / joue [ʒu], cheveux / jeux.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le chat · la chose · chaud", es: "el gato · la cosa · caliente — [ʃ]" },
        { fr: "chercher · la chaise · chez", es: "buscar · la silla · en casa de — [ʃ]" },
        { fr: "riche · la chemise", es: "rico · la camisa — [ʃ]" },
        { fr: "l'orchestre · la chorale", es: "la orquesta · el coro — ch = [k]" },
        { fr: "le jour · je · jaune", es: "el día · yo · amarillo — [ʒ]" },
        { fr: "rouge · la page · le gilet", es: "rojo · la página · el chaleco — [ʒ]" },
        { fr: "le chou · la joue", es: "el repollo · la mejilla" },
        { fr: "les cheveux · les jeux", es: "el pelo · los juegos" },
        { fr: "la bouche · il bouge", es: "la boca · se mueve" },
        { fr: "la hache · l'âge", es: "el hacha · la edad" },
        { fr: "le jouet", es: "el juguete — [ʒ]" }
      ],
      ej: [["Le chat cherche son jouet.", "El gato busca su juguete."], ["Je mange du chou.", "Como repollo."], ["J'ai les joues rouges.", "Tengo las mejillas rojas."]],
      clave: "ch = sh sin t; j y ge, gi = [ʒ], la misma posición con voz." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["chat (con ch española)", "chat", "Ch francesa = [ʃ], sin t."], ["Le shat dort sur le lit.", "Le chat dort sur le lit.", "En francés se escribe ch."], ["Bonchour !", "Bonjour !", "Buenos días: j, con voz."]] }
  ],
  ejemplos: [
    { sit: "«el gato»", resp: "le chat", pasos: ["ch = [ʃ]."], porque: "Sin t." },
    { sit: "«el día»", resp: "le jour", pasos: ["j = [ʒ]."], porque: "Con voz." },
    { sit: "«la orquesta»", resp: "l'orchestre", pasos: ["Palabra griega: ch = [k]."], porque: "Excepción." }
  ],
  comprueba: [
    { q: "La ch de chat suena…", o: ["[ʃ], como sh", "[tʃ], como en español"], a: 0, b: "phono", porque: "Sin t." },
    { q: "La g de rouge suena…", o: ["[ʒ]", "[g]"], a: 0, b: "phono", porque: "g + e." },
    { q: "En orchestre, ch suena…", o: ["[k]", "[ʃ]"], a: 0, b: "phono", porque: "Origen griego." }
  ],
  practica: [
    { fase: "guiada", c: ["fcj-ch", "fcj-j"], k: "sort", ask: "¿[ʃ] o [ʒ]?", q: "Clasifica.", cats: ["[ʃ]", "[ʒ]"], items: [["le chat", 0], ["chaud", 0], ["riche", 0], ["la chemise", 0], ["le jour", 1], ["rouge", 1], ["le gilet", 1], ["la page", 1]], pista: "ch: [ʃ].", why: "[ʃ] / [ʒ]." },
    { fase: "guiada", c: ["fcj-ch"], k: "choice", es: true, say: "le chou", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el repollo (chou)", "la mejilla (joue)"], a: 0, pista: "Sin voz: [ʃ].", why: "<b>le chou</b>." },
    { fase: "guiada", c: ["fcj-j"], k: "choice", es: true, say: "la joue", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la mejilla (joue)", "el repollo (chou)"], a: 0, pista: "Con voz: [ʒ].", why: "<b>la joue</b>." },
    { fase: "indep", c: ["fcj-j"], k: "fill", ask: "Escribe el saludo «¡Buenos días!».", q: "___ !", acc: ["Bonjour", "bonjour"], why: "<b>Bonjour</b>." },
    { fase: "indep", c: ["fcj-ch"], k: "choice", ask: "¿En cuál ch suena [k]?", q: "«___»", o: ["l'orchestre", "la chemise", "le chat"], a: 0, why: "<b>orchestre</b>: palabra griega." },
    { fase: "indep", c: ["fcj-ch"], k: "spot", ask: "Encuentra el error.", s: "Le [shat] dort sur le lit .", fix: "chat", why: "<b>chat</b>." },
    { fase: "aplica", c: ["fcj-ch", "fcj-j"], k: "match", ask: "Une cada palabra con [ʃ] con su pareja con [ʒ].", q: "[ʃ] → [ʒ]", pairs: [["le chou", "la joue"], ["les cheveux", "les jeux"], ["la bouche", "il bouge"], ["la hache", "l'âge"]], why: "Sorda / sonora." },
    { fase: "aplica", c: ["fcj-ch"], k: "choice", es: true, say: "chercher", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[ʃɛʁʃe]", "[tʃɛʁtʃe]"], a: 0, why: "<b>chercher</b>." },
    { fase: "dominio", c: ["fcj-j"], k: "choice", ask: "«Tengo las mejillas rojas.»", q: "«J'ai les ___ rouges.»", o: ["joues", "choux"], a: 0, why: "<b>les joues</b>." },
    { fase: "dominio", c: ["fcj-ch", "fcj-j"], k: "order", ask: "Ordena: «El gato busca su juguete».", tokens: ["Le chat", "cherche", "son jouet."], why: "<b>Le chat cherche son jouet.</b>" },
    { fase: "dominio", c: ["fcj-ch", "fcj-j"], k: "listen", say: "Le chat cherche son jouet sous la chaise.", acc: ["Le chat cherche son jouet sous la chaise."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le chat cherche son jouet sous la chaise.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["qu'est-ce", "que", "le", "son", "il", "est", "sous", "la", "crois", "fait", "toi", "j'ai", "les", "tu", "veux", "manger", "une", "soupe", "aux", "choux", "dort", "sur", "lit", "mange", "du", "chaleur", "cherche"] }
};

E["fon-gn-ill"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Gn [ɲ] et ill [j] : montagne, fille",
  objetivo: {
    que: "Vas a leer gn como ñ e ill como y, con sus excepciones: ville, mille, tranquille.",
    corto: "montagne [ɲ] · fille [j] · ville [l].",
    podras: ["Leer gn como la ñ: montagne, Espagne.", "Leer ill como [j]: fille, famille, juillet.", "Leer -ail, -eil, -euil: travail, soleil, fauteuil; y las excepciones con [l]."],
    iconos: ["ic2/mundo", "ic2/audifonos", "ic2/flor"],
    previos: ["Las semivocales (lección 13) y de la grafía al sonido (lección 5)."],
    capacidad: "Ahora lees famille y montagne sin dudar."
  },
  requiere: R("fsv-j", "fg-cons"), recupera: ["fsv-j"],
  conceptos: {
    "fgi-gn": { n: "gn = [ɲ], como la ñ: montagne, Espagne, oignon", b: "phono" },
    "fgi-ill": { n: "ill = [j]: fille, famille; -ail, -eil; excepciones [l]: ville, mille", b: "phono" }
  },
  video: {
    titulo: "Gn e ill", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "gn · ill", seg: [
        { es: "Hola. Ge ene es una eñe, e i ele ele es una ye." } ] },
      { v: "frase", filas: [
          { nota: "gn = ñ", p: 1, partes: [["la montagne · l'Espagne", "-", 1]] },
          { nota: "ill = y", p: 2, partes: [["la fille · la famille", "-", 2]] },
          { nota: "ill = l", p: 3, partes: [["la ville · mille", "-", 3]] } ], seg: [
        { fr: "la montagne, l'Espagne", p: 1 }, { fr: "la fille, la famille", p: 2 }, { es: "Excepciones, con ele:", p: 3 }, { fr: "la ville, mille", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi familia vive en el campo.»", o: ["Ma famille habite à la campagne.", "Ma famile habite à la campagne."], a: 0,
        bien: "¡Sí! Famille, con ill.", mal: "Familia: famille, con dos l.",
        seg: [ { es: "Pausa. Mi familia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la montagne", "la fille", "la famille", "le soleil", "la ville", "mille"], seg: [
        { es: "Ville, mille, tranquille: con ele.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las vacaciones", img: "bg-paris", yo: "camila",
    escena: "Hugo cuenta sus planes de julio.",
    pj: PJ,
    lineas: [
      ["hugo", "En juillet, ma famille part à la montagne.", "En julio, mi familia se va a la montaña."],
      ["camila", "Moi, je vais en Espagne avec une fille de ma classe.", "Yo voy a España con una chica de mi clase."],
      ["hugo", "Le village de mes grands-parents est tranquille : il y a mille habitants.", "El pueblo de mis abuelos es tranquilo: hay mil habitantes."],
      ["camila", "Et le soleil brille ? Moi, je veux du soleil et pas de travail !", "¿Y brilla el sol? ¡Yo quiero sol y nada de trabajo!"]
    ],
    fijate: "Fíjate: montagne, Espagne, campagne [ɲ]; juillet, famille, fille, brille, soleil, travail [j]; village, tranquille, mille [l]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "gn, ill y sus excepciones",
      idea: "gn suena [ɲ], como la ñ: montagne, Espagne, gagner, ligne, oignon. ill suena [j], como la y: fille, famille, juillet, travailler. Al final: -ail [aj], -eil [ɛj], -euil [œj]: travail, soleil, fauteuil. Excepciones con [l]: ville, village, mille, tranquille, Lille.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la montagne · la campagne", es: "la montaña · el campo — [ɲ]" },
        { fr: "l'Espagne · gagner · la ligne", es: "España · ganar · la línea — [ɲ]" },
        { fr: "l'oignon", es: "la cebolla — [ɔɲɔ̃]" },
        { fr: "la fille · la famille", es: "la chica · la familia — [j]" },
        { fr: "juillet · briller · travailler", es: "julio · brillar · trabajar — [j]" },
        { fr: "le travail · le soleil", es: "el trabajo · el sol — [aj] · [ɛj]" },
        { fr: "le réveil · le fauteuil", es: "el despertador · el sillón — [ɛj] · [œj]" },
        { fr: "la ville · le village", es: "la ciudad · el pueblo — [l]" },
        { fr: "mille · tranquille", es: "mil · tranquilo — [l]" }
      ],
      ej: [["La famille part à la montagne en juillet.", "La familia va a la montaña en julio."], ["Il y a mille habitants dans ce village.", "Hay mil habitantes en este pueblo."], ["Le soleil brille.", "El sol brilla."]],
      clave: "gn = ñ; ill = y; ville, mille, tranquille = l." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ville (dicha [vij])", "ville", "Ville, mille y tranquille son excepciones: [l]."], ["Ma famile habite à la campagne.", "Ma famille habite à la campagne.", "Familia: famille, con ill."], ["la montagne (con g y n separadas)", "la montagne", "gn = ñ."]] }
  ],
  ejemplos: [
    { sit: "«la montaña»", resp: "la montagne", pasos: ["gn = ñ."], porque: "[ɲ]." },
    { sit: "«la chica»", resp: "la fille", pasos: ["ill = [j]: [fij]."], porque: "[j]." },
    { sit: "«la ciudad»", resp: "la ville", pasos: ["Excepción: [vil]."], porque: "[l]." }
  ],
  comprueba: [
    { q: "Gn suena…", o: ["como la ñ", "como g + n"], a: 0, b: "phono", porque: "montagne." },
    { q: "Ill en fille suena…", o: ["[j], como y", "[l]"], a: 0, b: "phono", porque: "[fij]." },
    { q: "Ville se pronuncia…", o: ["[vil]", "[vij]"], a: 0, b: "phono", porque: "Excepción." }
  ],
  practica: [
    { fase: "guiada", c: ["fgi-ill"], k: "sort", ask: "¿ill suena [j] o [l]?", q: "Clasifica.", cats: ["[j]", "[l]"], items: [["la fille", 0], ["la famille", 0], ["juillet", 0], ["briller", 0], ["la ville", 1], ["mille", 1], ["tranquille", 1], ["le village", 1]], pista: "Las excepciones son pocas.", why: "ill." },
    { fase: "guiada", c: ["fgi-gn"], k: "choice", es: true, say: "la montagne", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la montaña (montagne)", "el campo (campagne)"], a: 0, pista: "mon-.", why: "<b>la montagne</b>." },
    { fase: "guiada", c: ["fgi-ill"], k: "choice", es: true, say: "la fille", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[j], como y", "[l]"], a: 0, pista: "No es excepción.", why: "<b>la fille</b> [fij]." },
    { fase: "indep", c: ["fgi-gn"], k: "fill", ask: "Escribe «España».", q: "Je vais en ___.", acc: ["Espagne"], why: "<b>Espagne</b>." },
    { fase: "indep", c: ["fgi-ill"], k: "choice", es: true, say: "la ville", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[l]", "[j]"], a: 0, why: "<b>ville</b>: excepción." },
    { fase: "indep", c: ["fgi-ill"], k: "spot", ask: "Encuentra el error.", s: "Ma [famile] habite à la campagne .", fix: "famille", why: "<b>famille</b>." },
    { fase: "aplica", c: ["fgi-gn", "fgi-ill"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le soleil", "el sol"], ["le réveil", "el despertador"], ["le fauteuil", "el sillón"], ["l'oignon", "la cebolla"]], why: "-eil, -euil, gn." },
    { fase: "aplica", c: ["fgi-ill"], k: "choice", es: true, say: "le travail", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[aj]", "[al]"], a: 0, why: "<b>travail</b> [tʁavaj]." },
    { fase: "dominio", c: ["fgi-gn"], k: "choice", ask: "«Mi familia vive en el campo.»", q: "«Ma famille habite à la ___.»", o: ["campagne", "montagne", "ville"], a: 0, why: "<b>la campagne</b>." },
    { fase: "dominio", c: ["fgi-gn", "fgi-ill"], k: "order", ask: "Ordena: «La familia va a la montaña en julio».", tokens: ["La famille part", "à la montagne", "en juillet."], why: "<b>La famille part à la montagne en juillet.</b>" },
    { fase: "dominio", c: ["fgi-gn", "fgi-ill"], k: "listen", say: "En juillet, ma famille part à la montagne.", acc: ["En juillet, ma famille part à la montagne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En juillet, ma famille part à la montagne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lille"], previo: ["en", "ma", "part", "à", "la", "moi", "je", "vais", "avec", "une", "de", "classe", "le", "mes", "grands-parents", "est", "il", "y", "a", "habitants", "et", "brille", "veux", "du", "pas", "habite", "dans", "ce"] }
};

E["fon-th-ph-qu"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Th, ph, qu : des lettres pour un son",
  objetivo: {
    que: "Vas a leer th como [t], ph como [f] y qu como [k], sin pronunciar la u.",
    corto: "thé [te] · photo [fɔto] · quatre [katʁ].",
    podras: ["Leer th como [t]: thé, théâtre.", "Leer ph como [f]: photo, pharmacie.", "Leer qu como [k]: qui, quand, quatre."],
    iconos: ["ic2/libro", "ic2/cafe", "ic2/movil"],
    previos: ["De la grafía al sonido (lección 5)."],
    capacidad: "Ahora lees quatre, théâtre y photo sin tropezar."
  },
  requiere: R("fg-cons"), recupera: ["fg-cons"],
  conceptos: {
    "ftp-thph": { n: "th = [t]: thé, théâtre · ph = [f]: photo, pharmacie", b: "phono" },
    "ftp-qu": { n: "qu = [k], sin u: qui, quand, quatre, musique", b: "phono" }
  },
  video: {
    titulo: "Th, ph, qu", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "th · ph · qu", seg: [
        { es: "Hola. Dos letras, un solo sonido." } ] },
      { v: "frase", filas: [
          { nota: "th = t", p: 1, partes: [["le thé · le théâtre", "-", 1]] },
          { nota: "ph = f", p: 2, partes: [["la photo · la pharmacie", "-", 2]] },
          { nota: "qu = k", p: 3, partes: [["qui · quatre", "-", 3]] } ], seg: [
        { fr: "le thé, le théâtre", p: 1 }, { fr: "la photo, la pharmacie", p: 2 }, { es: "Y la u de qu no suena:", p: 3 }, { fr: "qui, quatre", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Quién tomó la foto?»", o: ["Qui a pris la photo ?", "Quand a pris la photo ?"], a: 0,
        bien: "¡Sí! Qui [k], photo [f].", mal: "¿Quién?: qui. Quand es cuándo.",
        seg: [ { es: "Pausa. La foto." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le thé", "le théâtre", "la photo", "la pharmacie", "qui", "quatre"], seg: [
        { es: "Qu siempre ka, sin u.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el teatro", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo van al teatro.",
    pj: PJ,
    lineas: [
      ["camila", "Quand est-ce que la pièce commence ?", "¿Cuándo empieza la obra?"],
      ["hugo", "À quatre heures. On boit un thé au théâtre ?", "A las cuatro. ¿Tomamos un té en el teatro?"],
      ["camila", "Oui. Qui prend des photos ? Moi, j'ai mon téléphone.", "Sí. ¿Quién toma fotos? Yo tengo mi teléfono."],
      ["hugo", "Pas de photos pendant la pièce ! Mais la musique est géniale.", "¡Nada de fotos durante la obra! Pero la música es genial."]
    ],
    fijate: "Fíjate: thé, théâtre [t]; photos, téléphone [f]; quand, quatre, qui, musique [k]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "th, ph, qu",
      idea: "th se lee [t]: thé, théâtre, mathématiques, rythme. ph se lee [f]: photo, pharmacie, philosophie, téléphone. qu se lee [k], sin la u: qui, que, quand, quatre, musique. Excepciones con [kw]: aquarium, équateur.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le thé · le théâtre", es: "el té · el teatro — [t]" },
        { fr: "le thème · le rythme", es: "el tema · el ritmo — [t]" },
        { fr: "la table · la fête", es: "la mesa · la fiesta — t, f normales" },
        { fr: "la photo · la phrase", es: "la foto · la frase — [f]" },
        { fr: "la pharmacie · la physique", es: "la farmacia · la física — [f]" },
        { fr: "la philosophie · le téléphone", es: "la filosofía · el teléfono — [f]" },
        { fr: "la photographie", es: "la fotografía" },
        { fr: "qui · que · quand", es: "quién · que · cuándo — [k]" },
        { fr: "quatre · la musique", es: "cuatro · la música — [k]" },
        { fr: "l'aquarium", es: "el acuario — [kw]" }
      ],
      ej: [["Je bois du thé au théâtre.", "Tomo té en el teatro."], ["Qui a pris la photo ?", "¿Quién tomó la foto?"], ["Quand est-ce que tu viens ?", "¿Cuándo vienes?"]],
      clave: "th = t, ph = f, qu = k." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["quatre (dicho [kwatʁ])", "quatre", "Qu = [k], sin la u."], ["J'adore la fotografie.", "J'adore la photographie.", "Foto: ph."], ["le téatre", "le théâtre", "Teatro: th y â."]] }
  ],
  ejemplos: [
    { sit: "«el té»", resp: "le thé", pasos: ["th = [t]."], porque: "[te]." },
    { sit: "«la farmacia»", resp: "la pharmacie", pasos: ["ph = [f]."], porque: "[faʁmasi]." },
    { sit: "«¿Cuándo?»", resp: "Quand ?", pasos: ["qu = [k]."], porque: "[kɑ̃]." }
  ],
  comprueba: [
    { q: "Ph suena…", o: ["[f]", "[p]"], a: 0, b: "phono", porque: "photo." },
    { q: "Th suena…", o: ["[t]", "como la th inglesa"], a: 0, b: "phono", porque: "thé." },
    { q: "En quatre, la u…", o: ["no suena", "suena [w]"], a: 0, b: "phono", porque: "[katʁ]." }
  ],
  practica: [
    { fase: "guiada", c: ["ftp-thph"], k: "sort", ask: "¿[f] o [t]?", q: "Clasifica.", cats: ["[f]", "[t]"], items: [["la photo", 0], ["la phrase", 0], ["la physique", 0], ["la fête", 0], ["le thé", 1], ["le théâtre", 1], ["le thème", 1], ["la table", 1]], pista: "ph: [f]; th: [t].", why: "th / ph." },
    { fase: "guiada", c: ["ftp-qu"], k: "choice", es: true, say: "quatre", ask: "Escucha. ¿Qué número oyes?", q: "Elige.", o: ["4", "14", "40"], a: 0, pista: "[katʁ].", why: "<b>quatre</b>." },
    { fase: "guiada", c: ["ftp-thph"], k: "choice", es: true, say: "la pharmacie", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la farmacia (pharmacie)", "la filosofía (philosophie)", "la física (physique)"], a: 0, pista: "far-.", why: "<b>la pharmacie</b>." },
    { fase: "indep", c: ["ftp-thph"], k: "fill", ask: "Escribe «foto».", q: "une ___", acc: ["photo"], why: "<b>photo</b>, con ph." },
    { fase: "indep", c: ["ftp-qu"], k: "choice", ask: "«¿Cuándo vienes?»", q: "«___ est-ce que tu viens ?»", o: ["Quand", "Qui", "Que"], a: 0, why: "<b>Quand</b>: cuándo." },
    { fase: "indep", c: ["ftp-thph"], k: "spot", ask: "Encuentra el error.", s: "J'adore la [fotografie] .", fix: "photographie", why: "<b>photographie</b>." },
    { fase: "aplica", c: ["ftp-thph", "ftp-qu"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le rythme", "el ritmo"], ["la philosophie", "la filosofía"], ["la musique", "la música"], ["le théâtre", "el teatro"]], why: "th, ph, qu." },
    { fase: "aplica", c: ["ftp-qu"], k: "choice", es: true, say: "l'aquarium", ask: "Escucha. ¿Cómo suena qu aquí?", q: "Elige.", o: ["[kw]: excepción", "[k]"], a: 0, why: "<b>aquarium</b>: excepción." },
    { fase: "dominio", c: ["ftp-qu", "ftp-thph"], k: "choice", ask: "«¿Quién toma té?»", q: "«___ prend du thé ?»", o: ["Qui", "Quand", "Quatre"], a: 0, why: "<b>Qui</b>: quién." },
    { fase: "dominio", c: ["ftp-thph", "ftp-qu"], k: "order", ask: "Ordena: «¿Quién tomó la foto?».", tokens: ["Qui", "a pris", "la photo ?"], why: "<b>Qui a pris la photo ?</b>" },
    { fase: "dominio", c: ["ftp-thph", "ftp-qu"], k: "listen", say: "Quand est-ce que tu prends des photos au théâtre ?", acc: ["Quand est-ce que tu prends des photos au théâtre ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand est-ce que tu prends des photos au théâtre ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["est-ce", "la", "pièce", "commence", "à", "heures", "on", "boit", "un", "au", "oui", "prend", "des", "moi", "j'ai", "mon", "pas", "de", "pendant", "mais", "est", "géniale", "je", "bois", "du", "a", "pris", "tu", "viens", "prends", "j'adore", "une"] }
};

E["fon-x"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "La lettre x : [ks], [gz], [s], [z] ou muette",
  objetivo: {
    que: "Vas a leer los cinco sonidos de la x: [ks], [gz], [s], [z] y muda.",
    corto: "taxi [ks] · exemple [gz] · six [s] · sixième [z] · deux.",
    podras: ["Leer [ks] en taxi, texte; y [gz] en ex- + vocal: exemple, exercice.", "Leer [s] en six, dix, soixante y [z] en sixième, deux‿amis.", "Callar la x final: deux livres, le prix, heureux."],
    iconos: ["ic2/libro", "ic2/audifonos", "ic2/pregunta"],
    previos: ["Los números (lección 15) y la liaison (lección 7)."],
    capacidad: "Ahora lees exemple y soixante sin dudar."
  },
  requiere: R("fnb-final", "fnb-liaison", "fl-liaison"), recupera: ["fnb-final"],
  conceptos: {
    "fx-ksgz": { n: "x = [ks] (taxi, texte); ex- + vocal = [gz] (exemple, exercice)", b: "phono" },
    "fx-sz": { n: "x = [s] (six, soixante), [z] (sixième, deux‿amis) o muda (deux, prix)", b: "phono" }
  },
  video: {
    titulo: "La x", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "x", seg: [
        { es: "Hola. La x francesa tiene cinco sonidos." } ] },
      { v: "frase", filas: [
          { nota: "[ks] · [gz]", p: 1, partes: [["le taxi · l'exemple", "-", 1]] },
          { nota: "[s] · [z]", p: 2, partes: [["six · sixième", "-", 2]] },
          { nota: "muda", p: 3, partes: [["le prix · heureux", "-", 3]] } ], seg: [
        { fr: "le taxi, l'exemple", p: 1 }, { fr: "six, sixième", p: 2 }, { es: "Al final, casi siempre muda:", p: 3 }, { fr: "le prix, heureux", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aquí tienes un ejemplo.»", o: ["Voici un exemple.", "Voici un egzemple."], a: 0,
        bien: "¡Sí! Se escribe x y suena [gz].", mal: "Se escribe exemple, con x.",
        seg: [ { es: "Pausa. Un ejemplo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le taxi", "l'exemple", "six", "sixième", "le prix", "heureux"], seg: [
        { es: "Ex más vocal: ge zeta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara un examen con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["sofia", "Voici un exemple d'exercice pour l'examen.", "Aquí tienes un ejemplo de ejercicio para el examen."],
      ["camila", "Merci ! L'examen est à six heures ?", "¡Gracias! ¿El examen es a las seis?"],
      ["sofia", "Oui, dans la salle six, au sixième étage. C'est excellent, ton texte.", "Sí, en el salón seis, en el sexto piso. Tu texto es excelente."],
      ["camila", "Je suis heureuse ! Après, je prends un taxi à deux heures.", "¡Estoy feliz! Después tomo un taxi a las dos."]
    ],
    fijate: "Fíjate: exemple, exercice, examen [gz]; excellent, texte, taxi [ks]; six [s]; sixième [z]; deux heures [z]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Los sonidos de la x",
      idea: "[ks]: taxi, texte, excellent, Mexique. [gz] en ex- + vocal: exemple, exercice, examen. [s]: six, dix, soixante, Bruxelles. [z]: sixième, dixième y en liaison: deux‿amis. Muda al final: deux livres, le prix, heureux.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le taxi · le texte", es: "el taxi · el texto — [ks]" },
        { fr: "excellent · le Mexique", es: "excelente · México — [ks]" },
        { fr: "l'exemple · l'exercice · l'examen", es: "el ejemplo · el ejercicio · el examen — [gz]" },
        { fr: "six · dix · soixante", es: "seis · diez · sesenta — [s]" },
        { fr: "sixième · dixième", es: "sexto · décimo — [z]" },
        { fr: "deux amis", es: "dos amigos — [z] en liaison" },
        { fr: "deux livres · le prix · heureux", es: "dos libros · el precio · feliz — muda" }
      ],
      ej: [["Voici un exemple d'exercice.", "Aquí tienes un ejemplo de ejercicio."], ["J'ai six ans, pas dix !", "¡Tengo seis años, no diez!"], ["Je prends un taxi à deux heures.", "Tomo un taxi a las dos."]],
      clave: "ex- + vocal = [gz]; final de palabra = casi siempre muda." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["exemple (dicho [ɛksɑ̃pl])", "exemple", "ex- + vocal suena [gz]."], ["Voici un egzemple de phrase.", "Voici un exemple de phrase.", "Suena [gz], pero se escribe x."], ["six (dicho [siks])", "six", "Solo: [sis]."]] }
  ],
  ejemplos: [
    { sit: "«el ejemplo»", resp: "l'exemple", pasos: ["ex + vocal: [gz]."], porque: "[ɛgzɑ̃pl]." },
    { sit: "«el taxi»", resp: "le taxi", pasos: ["[ks]."], porque: "Como en español." },
    { sit: "«el sexto piso»", resp: "le sixième étage", pasos: ["sixième: [z]."], porque: "[sizjɛm]." }
  ],
  comprueba: [
    { q: "En exemple, la x suena…", o: ["[gz]", "[ks]"], a: 0, b: "phono", porque: "ex- + vocal." },
    { q: "En le prix, la x…", o: ["no suena", "suena [ks]"], a: 0, b: "phono", porque: "Final." },
    { q: "En sixième, la x suena…", o: ["[z]", "[s]"], a: 0, b: "phono", porque: "[sizjɛm]." }
  ],
  practica: [
    { fase: "guiada", c: ["fx-ksgz", "fx-sz"], k: "sort", ask: "¿Cómo suena la x?", q: "Clasifica.", cats: ["[ks] o [gz]", "[s], [z] o muda"], items: [["le taxi", 0], ["le texte", 0], ["l'exercice", 0], ["l'examen", 0], ["six", 1], ["dixième", 1], ["deux", 1], ["le prix", 1]], pista: "Números y final: [s], [z] o muda.", why: "La x." },
    { fase: "guiada", c: ["fx-ksgz"], k: "choice", es: true, say: "l'exemple", ask: "Escucha. ¿Cómo suena la x?", q: "Elige.", o: ["[gz]", "[ks]", "muda"], a: 0, pista: "ex- + vocal.", why: "<b>exemple</b>." },
    { fase: "guiada", c: ["fx-sz"], k: "choice", es: true, say: "J'en ai six.", ask: "Escucha. ¿Cómo suena la x de six?", q: "Elige.", o: ["[s]", "[ks]", "muda"], a: 0, pista: "Solo, al final.", why: "<b>six</b> [sis]." },
    { fase: "indep", c: ["fx-sz"], k: "fill", ask: "Escribe 6 en letras.", q: "J'ai ___ ans.", acc: ["six"], why: "<b>six</b>." },
    { fase: "indep", c: ["fx-sz"], k: "choice", ask: "¿En cuál la x NO suena?", q: "«___»", o: ["heureux", "le taxi", "l'examen"], a: 0, why: "<b>heureux</b>: x final muda." },
    { fase: "indep", c: ["fx-ksgz"], k: "spot", ask: "Encuentra el error.", s: "Voici un [egzemple] de phrase .", fix: "exemple", why: "<b>exemple</b>." },
    { fase: "aplica", c: ["fx-ksgz", "fx-sz"], k: "match", ask: "Une cada palabra con el sonido de su x.", q: "Palabra → sonido", pairs: [["excellent", "[ks]"], ["l'exercice", "[gz]"], ["soixante", "[s]"], ["sixième", "[z]"]], why: "Cuatro sonidos." },
    { fase: "aplica", c: ["fx-ksgz"], k: "choice", es: true, say: "le taxi", ask: "Escucha. ¿Cómo suena la x?", q: "Elige.", o: ["[ks]", "[gz]"], a: 0, why: "<b>taxi</b>." },
    { fase: "dominio", c: ["fx-sz"], k: "choice", es: true, say: "deux amis", ask: "Escucha. ¿Cómo suena la x de deux?", q: "Elige.", o: ["[z], en liaison", "muda", "[ks]"], a: 0, why: "<b>deux‿amis</b>." },
    { fase: "dominio", c: ["fx-ksgz"], k: "order", ask: "Ordena: «Aquí tienes un ejemplo de ejercicio».", tokens: ["Voici", "un exemple", "d'exercice."], why: "<b>Voici un exemple d'exercice.</b>" },
    { fase: "dominio", c: ["fx-ksgz", "fx-sz"], k: "listen", say: "Je fais un exercice d'examen à six heures.", acc: ["Je fais un exercice d'examen à six heures.", "Je fais un exercice d'examen à 6 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je fais un exercice d'examen à six heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["voici", "un", "d'exercice", "pour", "merci", "est", "à", "heures", "oui", "dans", "la", "salle", "au", "étage", "c'est", "ton", "je", "suis", "heureuse", "après", "prends", "j'en", "ai", "j'ai", "ans", "pas", "de", "phrase", "fais", "d'examen", "d'exercice"] }
};

E["fon-b-v"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "[b] et [v] : bien ou viens ?",
  objetivo: {
    que: "Vas a pronunciar distinto [b] (con los labios) y [v] (con los dientes), que en español suenan igual.",
    corto: "bain [b] / vin [v].",
    podras: ["Decir [b] cerrando los dos labios: bon, boire.", "Decir [v] con los dientes sobre el labio de abajo: vous, vin, voir.", "Distinguir bain / vin, bol / vol, boire / voir."],
    iconos: ["ic2/microfono", "ic2/audifonos", "ic2/cafe"],
    previos: ["Consonantes difíciles (lección 4)."],
    capacidad: "Ahora no pides un baño cuando quieres vino."
  },
  requiere: R("fc-sz"), recupera: ["fc-sz"],
  conceptos: {
    "fbv-lieu": { n: "[b] con los dos labios / [v] con dientes sobre el labio inferior", b: "phono" },
    "fbv-paires": { n: "pares: bain / vin, bol / vol, banc / vent, boire / voir", b: "phono" }
  },
  video: {
    titulo: "B y v", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "b · v", seg: [
        { es: "Hola. En francés, be y ve son dos sonidos distintos." } ] },
      { v: "dos",
        a: { tag: "[b] labios", fr: "le bain", es: "el baño" },
        b: { tag: "[v] dientes", fr: "le vin", es: "el vino" },
        seg: [ { es: "Cierra los labios:", p: 1 }, { fr: "le bain", p: 1 }, { es: "Dientes de arriba sobre el labio de abajo, y que vibre:", p: 2 }, { fr: "le vin", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a beber vino.»", o: ["Je vais boire du vin.", "Je vais voir du bain."], a: 0,
        bien: "¡Sí! boire [b], vin [v].", mal: "Voir es ver; bain es baño.",
        seg: [ { es: "Pausa. Beber vino." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bon", "boire", "le bain", "vous", "voir", "le vin"], seg: [
        { es: "Para la ve, muérdete un poco el labio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el barco", img: "bg-paris", yo: "camila",
    escena: "Hugo y Camila pasean en barco por el río.",
    pj: PJ,
    lineas: [
      ["hugo", "Vous voyez le bateau ? On monte !", "¿Ven el barco? ¡Subamos!"],
      ["camila", "Il y a du vent ! Je vais m'asseoir sur le banc.", "¡Hace viento! Me voy a sentar en la banca."],
      ["hugo", "Tu veux boire un verre de vin blanc ?", "¿Quieres tomar una copa de vino blanco?"],
      ["camila", "Bonne idée ! Et ce soir, on va voir un film ?", "¡Buena idea! ¿Y esta noche vamos a ver una película?"]
    ],
    fijate: "Fíjate: bateau, banc, boire, blanc, bonne [b]; vous, voyez, vent, veux, verre, vin, voir, va [v]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[b] y [v]",
      idea: "[b]: cierra los dos labios y suéltalos: bon, beau, boire. [v]: apoya los dientes de arriba sobre el labio de abajo y deja vibrar: vous, vin, voir. En español b y v suenan igual; en francés cambian el sentido: bain / vin, bol / vol, banc / vent, boire / voir. La w de wagon suena [v].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "bon · beau · boire", es: "bueno · bonito · beber — [b]" },
        { fr: "le bain · le vin", es: "el baño · el vino" },
        { fr: "le bol · le vol", es: "el tazón · el vuelo" },
        { fr: "le banc · le vent", es: "la banca · el viento" },
        { fr: "boire · voir", es: "beber · ver" },
        { fr: "vous · vous voyez · je vois", es: "ustedes · ustedes ven · yo veo — [v]" },
        { fr: "tu bois · tu vois", es: "bebes · ves" },
        { fr: "un verre · blanc", es: "una copa · blanco" },
        { fr: "le wagon", es: "el vagón — w = [v]" }
      ],
      ej: [["Je vais boire du vin.", "Voy a beber vino."], ["Il y a du vent sur le banc.", "Hace viento en la banca."], ["Vous voyez le bateau ?", "¿Ven el barco?"]],
      clave: "[b] con los labios; [v] con los dientes." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le vin (dicho con [b])", "le vin", "La v francesa se hace con los dientes."], ["Tu bois le film ce soir ?", "Tu vois le film ce soir ?", "Ver: voir, con v. Boire es beber."], ["Je prends un vain.", "Je prends un bain.", "Baño: bain, con b."]] }
  ],
  ejemplos: [
    { sit: "«el vino»", resp: "le vin", pasos: ["[v]: dientes sobre el labio."], porque: "No bain." },
    { sit: "«¿Ves la película?»", resp: "Tu vois le film ?", pasos: ["voir: [v]."], porque: "No boire." },
    { sit: "«un vuelo»", resp: "un vol", pasos: ["[v]."], porque: "bol es tazón." }
  ],
  comprueba: [
    { q: "La [v] francesa se hace…", o: ["con los dientes sobre el labio de abajo", "cerrando los dos labios"], a: 0, b: "phono", porque: "Labiodental." },
    { q: "Bain y vin significan…", o: ["baño y vino", "lo mismo"], a: 0, b: "phono", porque: "Pares." },
    { q: "Boire significa…", o: ["beber", "ver"], a: 0, b: "phono", porque: "voir = ver." }
  ],
  practica: [
    { fase: "guiada", c: ["fbv-paires"], k: "sort", ask: "¿[b] o [v]?", q: "Clasifica.", cats: ["[b]", "[v]"], items: [["bon", 0], ["beau", 0], ["le bol", 0], ["le banc", 0], ["vous", 1], ["le vin", 1], ["le vol", 1], ["le vent", 1]], pista: "b o v escrita.", why: "[b] / [v]." },
    { fase: "guiada", c: ["fbv-paires"], k: "choice", es: true, say: "le vin", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el vino (vin)", "el baño (bain)"], a: 0, pista: "Dientes: [v].", why: "<b>le vin</b>." },
    { fase: "guiada", c: ["fbv-lieu"], k: "choice", es: true, ask: "¿Cómo se hace la [v]?", q: "Elige.", o: ["Dientes de arriba sobre el labio de abajo", "Cerrando los dos labios"], a: 0, pista: "Muerde un poco el labio.", why: "Labiodental." },
    { fase: "indep", c: ["fbv-paires"], k: "fill", ask: "Escribe «veo».", q: "Je ___ le film ce soir.", acc: ["vois"], why: "<b>je vois</b>." },
    { fase: "indep", c: ["fbv-lieu"], k: "choice", es: true, say: "boire", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["beber (boire)", "ver (voir)"], a: 0, why: "<b>boire</b>." },
    { fase: "indep", c: ["fbv-paires"], k: "spot", ask: "Encuentra el error.", s: "Tu [bois] le film ce soir ?", fix: "vois", why: "<b>Tu vois le film</b>." },
    { fase: "aplica", c: ["fbv-paires"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le bain", "el baño"], ["le vin", "el vino"], ["le bol", "el tazón"], ["le vol", "el vuelo"]], why: "[b] / [v] cambian el sentido." },
    { fase: "aplica", c: ["fbv-lieu"], k: "choice", es: true, say: "le banc", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la banca (banc)", "el viento (vent)"], a: 0, why: "<b>le banc</b>." },
    { fase: "dominio", c: ["fbv-paires"], k: "choice", ask: "«Hace viento.»", q: "«Il y a du ___.»", o: ["vent", "banc"], a: 0, why: "<b>du vent</b>." },
    { fase: "dominio", c: ["fbv-lieu", "fbv-paires"], k: "order", ask: "Ordena: «Voy a beber vino».", tokens: ["Je vais", "boire", "du vin."], why: "<b>Je vais boire du vin.</b>" },
    { fase: "dominio", c: ["fbv-lieu", "fbv-paires"], k: "listen", say: "Vous voulez boire un verre de vin blanc ?", acc: ["Vous voulez boire un verre de vin blanc ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vous voulez boire un verre de vin blanc ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["le", "bateau", "on", "monte", "il", "y", "a", "du", "je", "vais", "m'asseoir", "sur", "tu", "veux", "de", "bonne", "idée", "et", "ce", "soir", "va", "un", "film", "voulez", "prends"] }
};

E["fon-sourdes-occlusives"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "P / b, t / d, k / g : sourdes et sonores",
  objetivo: {
    que: "Vas a distinguir las oclusivas sordas [p, t, k] de las sonoras [b, d, g]: pain / bain, coûter / goûter.",
    corto: "pain / bain · tout / doux · car / gare.",
    podras: ["Decir [p, t, k] sin aspiración.", "Hacer vibrar [b, d, g] desde el principio.", "No confundir coûter (costar) y goûter (probar)."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/croissant"],
    previos: ["Sordas y sonoras: [s] / [z] y [ʃ] / [ʒ] (lección 14)."],
    capacidad: "Ahora una vibración ya no te cambia el sentido de la frase."
  },
  requiere: R("fss-sz", "fss-chj"), recupera: ["fss-sz"],
  conceptos: {
    "fso-paires": { n: "sordas [p, t, k] / sonoras [b, d, g]: pain / bain, tout / doux", b: "phono" },
    "fso-sens": { n: "una vibración cambia el sentido: coûter / goûter, pont / bon", b: "phono" }
  },
  video: {
    titulo: "Sordas y sonoras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/croissant", grande: "p · b · t · d · k · g", seg: [
        { es: "Hola. Pon la mano en la garganta: con las sonoras, vibra." } ] },
      { v: "dos",
        a: { tag: "sorda [k]", fr: "coûter", es: "costar" },
        b: { tag: "sonora [g]", fr: "goûter", es: "probar" },
        seg: [ { es: "Sin vibrar:", p: 1 }, { fr: "coûter", p: 1 }, { es: "Vibrando:", p: 2 }, { fr: "goûter", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Quieres probar este pastel?»", o: ["Tu veux goûter ce gâteau ?", "Tu veux coûter ce gâteau ?"], a: 0,
        bien: "¡Sí! Probar: goûter.", mal: "Coûter es costar; probar es goûter.",
        seg: [ { es: "Pausa. Probar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le pain", "le bain", "tout", "doux", "coûter", "goûter"], seg: [
        { es: "Mano en la garganta: si vibra, es sonora.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la panadería", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo compran pan.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux goûter ce pain ? Il est tout chaud.", "¿Quieres probar este pan? Está muy caliente."],
      ["camila", "Oui ! Il coûte cher ?", "¡Sí! ¿Cuesta caro?"],
      ["hugo", "Non, il ne coûte pas cher. Et il est doux, comme un gâteau.", "No, no cuesta caro. Y es suave, como un pastel."],
      ["camila", "C'est bon ! Après, on va à la gare en car ?", "¡Está rico! Después, ¿vamos a la estación en autobús?"]
    ],
    fijate: "Fíjate: pain, tout, coûte, car [p, t, k]; bon, doux, goûter, gâteau, gare [b, d, g]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "[p, t, k] y [b, d, g]",
      idea: "Las oclusivas van en pares: sordas [p, t, k] y sonoras [b, d, g]. Las sordas francesas no llevan soplo; las sonoras vibran desde el principio (pon la mano en la garganta). Pares: pain / bain, tout / doux, car / gare, pont / bon, thé / dé, quand / gant, coûter / goûter.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le pain · le bain", es: "el pan · el baño — [p] / [b]" },
        { fr: "tout · doux", es: "todo · suave — [t] / [d]" },
        { fr: "le car · la gare", es: "el autobús · la estación — [k] / [g]" },
        { fr: "le pont · bon", es: "el puente · bueno — [p] / [b]" },
        { fr: "le thé · le dé", es: "el té · el dado — [t] / [d]" },
        { fr: "quand · le gant", es: "cuando · el guante — [k] / [g]" },
        { fr: "coûter · goûter", es: "costar · probar, merendar — [k] / [g]" },
        { fr: "le cou · le goût", es: "el cuello · el gusto — [k] / [g]" },
        { fr: "la robe", es: "el vestido — [b] final" }
      ],
      ej: [["Le pain est dans le bain !", "¡El pan está en la bañera!"], ["C'est tout doux.", "Es muy suave."], ["Tu veux goûter ? Ça coûte cher.", "¿Quieres probar? Cuesta caro."]],
      clave: "Una vibración cambia la palabra: coûter / goûter." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tu veux coûter ce gâteau ?", "Tu veux goûter ce gâteau ?", "Probar: goûter, con [g]."], ["Je prends un pain chaud. (baño)", "Je prends un bain chaud.", "Baño: bain, con [b]."], ["le pont (con soplo, [pʰ])", "le pont", "La p francesa no lleva soplo."]] }
  ],
  ejemplos: [
    { sit: "«¿Quieres probar?»", resp: "Tu veux goûter ?", pasos: ["[g] sonora."], porque: "No coûter." },
    { sit: "«Cuesta caro.»", resp: "Ça coûte cher.", pasos: ["[k] sorda."], porque: "coûter = costar." },
    { sit: "«la estación»", resp: "la gare", pasos: ["[g] sonora."], porque: "car es autobús." }
  ],
  comprueba: [
    { q: "Las consonantes sonoras…", o: ["hacen vibrar la garganta", "llevan un soplo"], a: 0, b: "phono", porque: "[b, d, g]." },
    { q: "Goûter significa…", o: ["probar, merendar", "costar"], a: 0, b: "phono", porque: "coûter = costar." },
    { q: "Le car es…", o: ["el autobús", "la estación"], a: 0, b: "phono", porque: "la gare = la estación." }
  ],
  practica: [
    { fase: "guiada", c: ["fso-paires"], k: "sort", ask: "¿Sorda o sonora?", q: "Clasifica.", cats: ["Sorda (p, t, k)", "Sonora (b, d, g)"], items: [["le pain", 0], ["tout", 0], ["le car", 0], ["le pont", 0], ["le bain", 1], ["doux", 1], ["la gare", 1], ["bon", 1]], pista: "Mano en la garganta.", why: "Pares." },
    { fase: "guiada", c: ["fso-paires"], k: "choice", es: true, say: "doux", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["suave (doux)", "todo (tout)"], a: 0, pista: "Vibra: [d].", why: "<b>doux</b>." },
    { fase: "guiada", c: ["fso-sens"], k: "choice", es: true, say: "la gare", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la estación (gare)", "el autobús (car)"], a: 0, pista: "Vibra: [g].", why: "<b>la gare</b>." },
    { fase: "indep", c: ["fso-paires"], k: "fill", ask: "Escribe «baño».", q: "Je prends un ___ chaud.", acc: ["bain"], why: "<b>un bain</b>." },
    { fase: "indep", c: ["fso-sens"], k: "choice", ask: "«Cuesta caro.»", q: "«Ça ___ cher.»", o: ["coûte", "goûte"], a: 0, why: "<b>coûte</b>: costar." },
    { fase: "indep", c: ["fso-sens"], k: "spot", ask: "Encuentra el error.", s: "Tu veux [coûter] ce gâteau au chocolat ?", fix: "goûter", why: "<b>goûter</b>." },
    { fase: "aplica", c: ["fso-sens"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le pont", "el puente"], ["bon", "bueno"], ["coûter", "costar"], ["goûter", "probar"]], why: "Sorda / sonora." },
    { fase: "aplica", c: ["fso-paires"], k: "choice", es: true, say: "le thé", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el té (thé)", "el dado (dé)"], a: 0, why: "<b>le thé</b>: [t]." },
    { fase: "dominio", c: ["fso-sens"], k: "choice", es: true, say: "le goût", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el gusto (goût)", "el cuello (cou)"], a: 0, why: "<b>le goût</b>." },
    { fase: "dominio", c: ["fso-paires", "fso-sens"], k: "order", ask: "Ordena: «El pan está en la bañera».", tokens: ["Le pain", "est dans", "le bain !"], why: "<b>Le pain est dans le bain !</b>" },
    { fase: "dominio", c: ["fso-paires", "fso-sens"], k: "listen", say: "Tu veux goûter ce pain ? Il ne coûte pas cher.", acc: ["Tu veux goûter ce pain ? Il ne coûte pas cher."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu veux goûter ce pain ? Il ne coûte pas cher.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "veux", "ce", "il", "est", "chaud", "oui", "cher", "non", "ne", "pas", "et", "comme", "un", "gâteau", "c'est", "après", "on", "va", "à", "en", "ça", "je", "prends", "dans", "au", "chocolat"] }
};

E["fon-consonnes-doubles"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les consonnes doubles : une seule prononciation",
  objetivo: {
    que: "Vas a pronunciar las consonantes dobles como una sola y escribir bien las palabras frecuentes que las llevan.",
    corto: "appeler [aple] · adresse: una d, dos s.",
    podras: ["Pronunciar ll, tt, pp, mm, nn como una sola consonante.", "Escribir adresse, appartement, attention, personne.", "Duplicar en j'appelle y je jette."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["Una o dos s (lección 31) y las grafías de [ɛ] (lección 18)."],
    capacidad: "Ahora escribes adresse y appartement sin dudar."
  },
  requiere: R("fsz-ss", "fgo-grafias"), recupera: ["fsz-ss"],
  conceptos: {
    "fcd-simple": { n: "ll, tt, pp, mm, nn se pronuncian como una sola consonante", b: "ortho" },
    "fcd-mots": { n: "palabras frecuentes: adresse, appartement, attention, personne; j'appelle", b: "ortho" }
  },
  video: {
    titulo: "Consonantes dobles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "pp · tt · nn", seg: [
        { es: "Hola. Se escriben dos, se pronuncia una." } ] },
      { v: "frase", filas: [
          { nota: "pp", p: 1, partes: [["l'appartement", "-", 1]] },
          { nota: "tt", p: 2, partes: [["attendre · attention", "-", 2]] },
          { nota: "dd? no", p: 3, partes: [["l'adresse", "-", 3]] } ], seg: [
        { fr: "l'appartement", p: 1 }, { fr: "attendre, attention", p: 2 }, { es: "Ojo: adresse lleva una de y dos eses:", p: 3 }, { fr: "l'adresse", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llamo a mi madre.»", o: ["J'appelle ma mère.", "J'apelle ma mère."], a: 0,
        bien: "¡Sí! J'appelle, con pp y ll.", mal: "Llamo: j'appelle, con pp y ll.",
        seg: [ { es: "Pausa. Llamo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'adresse", "l'appartement", "attention", "personne", "j'appelle"], seg: [
        { es: "Dos letras, un solo sonido.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La mudanza", img: "bg-universidad", yo: "camila",
    escena: "Camila le da su nueva dirección a Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Quelle est ton adresse ?", "¿Cuál es tu dirección?"],
      ["camila", "Mon adresse est dans l'agenda. L'appartement est au deuxième étage.", "Mi dirección está en la agenda. El apartamento está en el segundo piso."],
      ["hugo", "Attention à la marche ! Il n'y a personne ?", "¡Cuidado con el escalón! ¿No hay nadie?"],
      ["camila", "Non, j'attends ma sœur. Je l'appelle tout de suite.", "No, espero a mi hermana. La llamo ya mismo."]
    ],
    fijate: "Fíjate: adresse, appartement, attention, personne, j'attends, j'appelle: se escriben con dobles, pero suenan con una."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "Dobles que suenan simples",
      idea: "Las consonantes dobles (ll, tt, pp, mm, nn, rr) se pronuncian como una sola: appeler [aple], attendre [atɑ̃dʁ], homme [ɔm]. ss sí cambia algo: [s] frente a la s simple [z] entre vocales. Algunos verbos duplican al conjugar: appeler → j'appelle, jeter → je jette. Ojo con adresse: una d y dos s, al revés que en inglés.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'adresse", es: "la dirección — una d, dos s" },
        { fr: "l'appartement", es: "el apartamento — pp, una t" },
        { fr: "attention · attendre", es: "cuidado · esperar — tt" },
        { fr: "j'attends", es: "espero" },
        { fr: "personne · l'homme", es: "nadie · el hombre — nn, mm" },
        { fr: "appeler · j'appelle", es: "llamar · llamo" },
        { fr: "jeter · je jette", es: "tirar · tiro" },
        { fr: "commencer · l'honneur", es: "empezar · el honor" },
        { fr: "comment · bonne", es: "cómo · buena" },
        { fr: "l'âme · l'atelier · l'image · le numéro", es: "el alma · el taller · la imagen · el número — simples" }
      ],
      ej: [["J'appelle ma sœur.", "Llamo a mi hermana."], ["Mon adresse est dans l'agenda.", "Mi dirección está en la agenda."], ["Attention à la marche !", "¡Cuidado con el escalón!"]],
      clave: "Se escriben dobles, se dicen simples." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["l'addresse", "l'adresse", "Una d y dos s, al revés que en inglés."], ["Mon appartemment est au deuxième étage.", "Mon appartement est au deuxième étage.", "appartement: pp y una m."], ["J'apelle ma mère.", "J'appelle ma mère.", "Llamo: j'appelle."]] }
  ],
  ejemplos: [
    { sit: "«la dirección»", resp: "l'adresse", pasos: ["Una d, dos s."], porque: "No como en inglés." },
    { sit: "«Llamo a mi madre.»", resp: "J'appelle ma mère.", pasos: ["appeler → j'appelle."], porque: "Se duplica la l." },
    { sit: "«No hay nadie.»", resp: "Il n'y a personne.", pasos: ["personne: nn."], porque: "Una sola n al oído." }
  ],
  comprueba: [
    { q: "Las consonantes dobles se pronuncian…", o: ["como una sola", "más largas"], a: 0, b: "ortho", porque: "appeler [aple]." },
    { q: "Adresse se escribe con…", o: ["una d y dos s", "dos d y dos s"], a: 0, b: "ortho", porque: "Al revés que address." },
    { q: "Appeler en presente (je)…", o: ["j'appelle", "j'appele"], a: 0, b: "ortho", porque: "Se duplica la l." }
  ],
  practica: [
    { fase: "guiada", c: ["fcd-simple"], k: "sort", ask: "¿Lleva consonante doble?", q: "Clasifica.", cats: ["Consonante doble", "Consonante simple"], items: [["l'appartement", 0], ["attendre", 0], ["l'homme", 0], ["personne", 0], ["l'âme", 1], ["l'atelier", 1], ["l'image", 1], ["le numéro", 1]], pista: "Fíjate en la escritura.", why: "Dobles / simples." },
    { fase: "guiada", c: ["fcd-mots"], k: "choice", ask: "«la dirección»", q: "«l'___»", o: ["adresse", "addresse"], a: 0, pista: "Una d.", why: "<b>adresse</b>." },
    { fase: "guiada", c: ["fcd-simple"], k: "choice", es: true, say: "appeler", ask: "Escucha. ¿Cuántas p oyes?", q: "Elige.", o: ["Una sola", "Dos"], a: 0, pista: "Doble = simple al oído.", why: "<b>appeler</b> [aple]." },
    { fase: "indep", c: ["fcd-mots"], k: "fill", ask: "Escribe «¡Cuidado!».", q: "___ !", acc: ["Attention", "attention"], why: "<b>Attention</b>." },
    { fase: "indep", c: ["fcd-mots"], k: "choice", ask: "«No hay nadie.»", q: "«Il n'y a ___.»", o: ["personne", "l'atelier"], a: 0, why: "<b>personne</b>." },
    { fase: "indep", c: ["fcd-mots"], k: "spot", ask: "Encuentra el error.", s: "Mon [appartemment] est au deuxième étage .", fix: "appartement", why: "<b>appartement</b>." },
    { fase: "aplica", c: ["fcd-mots"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["attendre", "esperar"], ["appeler", "llamar"], ["commencer", "empezar"], ["l'honneur", "el honor"]], why: "Dobles." },
    { fase: "aplica", c: ["fcd-simple"], k: "choice", es: true, say: "l'homme", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[ɔm], una m", "[ɔmm], dos m"], a: 0, why: "<b>homme</b>." },
    { fase: "dominio", c: ["fcd-mots"], k: "choice", ask: "«Llamo a mi hermana.»", q: "«J'___ ma sœur.»", o: ["appelle", "apelle"], a: 0, why: "<b>J'appelle</b>." },
    { fase: "dominio", c: ["fcd-simple", "fcd-mots"], k: "order", ask: "Ordena: «Mi dirección está en la agenda».", tokens: ["Mon adresse", "est dans", "l'agenda."], why: "<b>Mon adresse est dans l'agenda.</b>" },
    { fase: "dominio", c: ["fcd-simple", "fcd-mots"], k: "listen", say: "J'attends ma sœur devant l'appartement.", acc: ["J'attends ma sœur devant l'appartement."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'attends ma sœur devant l'appartement.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["quelle", "est", "ton", "mon", "dans", "l'agenda", "au", "deuxième", "étage", "à", "la", "marche", "il", "n'y", "a", "non", "ma", "sœur", "je", "l'appelle", "tout", "de", "suite", "mère", "devant"] }
};

E["fon-lettres-grecques"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Y, œ, æ et les voyelles écrites à part",
  objetivo: {
    que: "Vas a leer la y entre vocales (voyage), la œ (sœur, œil) y la diéresis (Noël, maïs).",
    corto: "voyage [vwajaʒ] · Noël [nɔɛl] · maïs [mais].",
    podras: ["Leer y entre vocales como dos i: voyage, crayon, payer.", "Leer y sola como [i]: stylo, il y a.", "Leer aparte la vocal con diéresis: Noël, maïs, naïf."],
    iconos: ["ic2/libro", "ic2/regalo", "ic2/lapiz"],
    previos: ["Las semivocales (lección 13) y los acentos (lección 26)."],
    capacidad: "Ahora lees voyage, maïs y Noël sin tropezar."
  },
  requiere: R("fsv-j", "fac-e"), recupera: ["fsv-j"],
  conceptos: {
    "flg-y": { n: "y entre vocales = dos i (voyage [vwajaʒ]); y sola = [i] (stylo)", b: "ortho" },
    "flg-trema": { n: "œ: sœur, œil · diéresis: se lee aparte (Noël, maïs, naïf)", b: "ortho" }
  },
  video: {
    titulo: "Y, œ y diéresis", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "y · œ · ë · ï", seg: [
        { es: "Hola. Letras raras con reglas sencillas." } ] },
      { v: "frase", filas: [
          { nota: "y = i + i", p: 1, partes: [["le voyage · payer", "-", 1]] },
          { nota: "œ", p: 2, partes: [["la sœur · l'œil", "-", 2]] },
          { nota: "ë, ï", p: 3, partes: [["Noël · le maïs", "-", 3]] } ], seg: [
        { es: "Entre vocales, la y vale dos i:", p: 1 }, { fr: "le voyage, payer", p: 1 }, { fr: "la sœur, l'œil", p: 2 }, { es: "Los dos puntos separan las vocales:", p: 3 }, { fr: "Noël, le maïs", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¡Feliz Navidad!»", o: ["Joyeux Noël !", "Joyeux Noel !"], a: 0,
        bien: "¡Sí! Noël, con diéresis.", mal: "Noël lleva ë: se lee o-el.",
        seg: [ { es: "Pausa. Feliz Navidad." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le voyage", "le crayon", "le stylo", "la sœur", "Noël", "le maïs"], seg: [
        { es: "Diéresis: lee cada vocal por separado.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Navidad", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan Navidad.",
    pj: PJ,
    lineas: [
      ["hugo", "Joyeux Noël ! Tu pars en voyage ?", "¡Feliz Navidad! ¿Te vas de viaje?"],
      ["camila", "Oui, chez ma sœur. Je paie le voyage avec ma carte.", "Sí, a casa de mi hermana. Pago el viaje con mi tarjeta."],
      ["hugo", "Il y a du maïs grillé au marché de Noël. Tu aimes ?", "Hay maíz asado en el mercado de Navidad. ¿Te gusta?"],
      ["camila", "J'adore ! Bon voyage à toute la famille, et à ton cœur naïf !", "¡Me encanta! ¡Buen viaje a toda la familia, y a tu corazón ingenuo!"]
    ],
    fijate: "Fíjate: voyage, paie [j]; il y a [i]; Noël, maïs, naïf (diéresis); sœur, cœur (œ)."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "y, œ y la diéresis",
      idea: "La y entre vocales vale por dos i: voyage = voi-iage [vwajaʒ], crayon [kʁɛjɔ̃], payer [peje]. La y sola suena [i]: stylo, il y a, cycle, type. œ se lee [œ] o [ø]: sœur, cœur, œil, œuvre; æ es rara (curriculum vitæ). La diéresis (ë, ï) obliga a leer la vocal aparte: Noël [nɔɛl], maïs [mais], naïf.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le voyage · le crayon", es: "el viaje · el lápiz — y = dos i" },
        { fr: "payer · je paie · joyeux", es: "pagar · pago · alegre — [j]" },
        { fr: "le stylo · il y a", es: "el bolígrafo · hay — y = [i]" },
        { fr: "le cycle · le type", es: "el ciclo · el tipo — [i]" },
        { fr: "la sœur · le cœur · l'œil", es: "la hermana · el corazón · el ojo — œ" },
        { fr: "Noël", es: "Navidad — [nɔɛl]" },
        { fr: "le maïs", es: "el maíz — [mais]" },
        { fr: "naïf", es: "ingenuo — [naif]" },
        { fr: "mais", es: "pero — [mɛ], sin diéresis" }
      ],
      ej: [["Je paie avec mon crayon ? Non, avec ma carte !", "¿Pago con mi lápiz? ¡No, con mi tarjeta!"], ["Joyeux Noël !", "¡Feliz Navidad!"], ["J'aime le maïs grillé.", "Me gusta el maíz asado."]],
      clave: "maïs [mais] (maíz) ≠ mais [mɛ] (pero): la diéresis cambia todo." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le maïs (dicho [mɛ])", "le maïs", "La diéresis separa a e i: [mais]."], ["Joyeux Noel !", "Joyeux Noël !", "Navidad: Noël, con ë."], ["le voyage (dicho voy-a-ge)", "le voyage", "y entre vocales: [vwajaʒ]."]] }
  ],
  ejemplos: [
    { sit: "«el viaje»", resp: "le voyage", pasos: ["y = dos i: voi-iage."], porque: "[vwajaʒ]." },
    { sit: "«el maíz»", resp: "le maïs", pasos: ["ï: se lee aparte."], porque: "[mais]." },
    { sit: "«pero»", resp: "mais", pasos: ["Sin diéresis: [mɛ]."], porque: "ai = [ɛ]." }
  ],
  comprueba: [
    { q: "La y entre vocales vale…", o: ["dos i", "una i"], a: 0, b: "ortho", porque: "voyage." },
    { q: "La diéresis sirve para…", o: ["leer la vocal aparte", "cerrar la vocal"], a: 0, b: "ortho", porque: "Noël, maïs." },
    { q: "Mais (sin diéresis) significa…", o: ["pero", "maíz"], a: 0, b: "ortho", porque: "maïs = maíz." }
  ],
  practica: [
    { fase: "guiada", c: ["flg-y"], k: "sort", ask: "¿La y vale dos i o una?", q: "Clasifica.", cats: ["Dos i (entre vocales)", "Una i"], items: [["le voyage", 0], ["le crayon", 0], ["payer", 0], ["joyeux", 0], ["le stylo", 1], ["il y a", 1], ["le cycle", 1], ["le type", 1]], pista: "¿Hay vocal antes y después?", why: "y." },
    { fase: "guiada", c: ["flg-trema"], k: "choice", es: true, say: "le maïs", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[mais]", "[mɛ]"], a: 0, pista: "Diéresis.", why: "<b>maïs</b>." },
    { fase: "guiada", c: ["flg-trema"], k: "choice", es: true, say: "Noël", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[nɔɛl]", "[nœl]"], a: 0, pista: "o y e separadas.", why: "<b>Noël</b>." },
    { fase: "indep", c: ["flg-trema"], k: "fill", ask: "Escribe «ingenuo».", q: "Il est ___.", acc: ["naïf"], why: "<b>naïf</b>, con ï." },
    { fase: "indep", c: ["flg-trema"], k: "choice", ask: "«Pero no tengo tiempo.»", q: "«___ je n'ai pas le temps.»", o: ["Mais", "Maïs"], a: 0, why: "<b>Mais</b>: pero." },
    { fase: "indep", c: ["flg-trema"], k: "spot", ask: "Encuentra el error.", s: "Joyeux [Noel] à toute la famille !", fix: "Noël", why: "<b>Noël</b>." },
    { fase: "aplica", c: ["flg-y", "flg-trema"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le crayon", "el lápiz"], ["l'œil", "el ojo"], ["le cœur", "el corazón"], ["naïf", "ingenuo"]], why: "y, œ, ï." },
    { fase: "aplica", c: ["flg-y"], k: "choice", es: true, say: "le voyage", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[vwajaʒ]", "[vojaʒ]"], a: 0, why: "<b>voyage</b>." },
    { fase: "dominio", c: ["flg-y"], k: "choice", ask: "«Pago el viaje.»", q: "«Je paie le ___.»", o: ["voyage", "crayon", "stylo"], a: 0, why: "<b>le voyage</b>." },
    { fase: "dominio", c: ["flg-y", "flg-trema"], k: "order", ask: "Ordena: «¡Feliz Navidad y buen viaje!».", tokens: ["Joyeux Noël", "et", "bon voyage !"], why: "<b>Joyeux Noël et bon voyage !</b>" },
    { fase: "dominio", c: ["flg-y", "flg-trema"], k: "listen", say: "Joyeux Noël et bon voyage à toute la famille !", acc: ["Joyeux Noël et bon voyage à toute la famille !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Joyeux Noël et bon voyage à toute la famille !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "pars", "en", "oui", "chez", "ma", "je", "avec", "carte", "du", "grillé", "au", "marché", "de", "aimes", "j'adore", "bon", "à", "toute", "la", "famille", "et", "ton", "il", "est", "n'ai", "pas", "le", "temps", "mon", "non", "j'aime"] }
};

/* ───── FON·8 · Las palabras se unen (lecciones 41 y 42) ───── */
E["fon-liaison-obligatoire"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les liaisons obligatoires",
  objetivo: {
    que: "Vas a hacer las liaisons obligatorias: determinante + nombre, pronombre + verbo y preposición corta + palabra.",
    corto: "les‿amis · nous‿avons · en‿avion.",
    podras: ["Unir determinante y nombre: les‿enfants, un‿ami.", "Unir pronombre y verbo: nous‿avons, vous‿êtes, ils‿ont.", "Saber qué sonido da cada letra: s, x → [z]; d → [t]; n → [n]."],
    iconos: ["ic2/amigos", "ic2/audifonos", "ic2/rayo"],
    previos: ["La liaison (lección 7) y los números (lección 15)."],
    capacidad: "Ahora tus frases suenan unidas, como las de un francés."
  },
  requiere: R("fl-liaison", "fnb-liaison"), recupera: ["fl-liaison"],
  conceptos: {
    "flo-cas": { n: "obligatoria: determinante + nombre, pronombre + verbo, preposición corta", b: "phono" },
    "flo-son": { n: "sonido de liaison: s, x, z → [z]; d → [t]; n → [n]; t → [t]", b: "phono" }
  },
  video: {
    titulo: "Liaisons obligatorias", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "les‿amis", seg: [
        { es: "Hola. Hay uniones que nunca se pueden saltar." } ] },
      { v: "frase", filas: [
          { nota: "det. + nombre", p: 1, partes: [["les amis · un ami", "-", 1]] },
          { nota: "pron. + verbo", p: 2, partes: [["nous avons · vous êtes", "-", 2]] },
          { nota: "prep. corta", p: 3, partes: [["en avion · chez elle", "-", 3]] } ], seg: [
        { fr: "les amis, un ami", p: 1 }, { fr: "nous avons, vous êtes", p: 2 }, { fr: "en avion, chez elle", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo suena «les enfants»?", es: true, o: ["[lezɑ̃fɑ̃], con z", "[le ɑ̃fɑ̃], sin unir"], a: 0,
        bien: "¡Sí! Liaison obligatoria.", mal: "Determinante + nombre: siempre se une.",
        seg: [ { es: "Pausa. Los niños." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les amis", "nous avons", "vous êtes", "ils ont", "en avion", "deux heures"], seg: [
        { es: "Ese y equis suenan zeta; de suena te.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La familia de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Hugo habla de su familia y sus amigos.",
    pj: PJ,
    lineas: [
      ["hugo", "Mes amis sont arrivés ! Nous allons au café.", "¡Mis amigos llegaron! Vamos al café."],
      ["camila", "Vous êtes combien ? Vous avez des enfants ?", "¿Cuántos son? ¿Tienen hijos?"],
      ["hugo", "Ma sœur et son mari ont deux enfants. Ils habitent en Italie.", "Mi hermana y su esposo tienen dos hijos. Viven en Italia."],
      ["camila", "Ils viennent en avion ? Dans un mois, je vais chez eux !", "¿Vienen en avión? ¡En un mes voy a su casa!"]
    ],
    fijate: "Fíjate: mes‿amis, sont‿arrivés, nous‿allons, vous‿êtes, vous‿avez, des‿enfants, deux‿enfants, ils‿habitent, en‿Italie, en‿avion, dans‿un mois, chez‿eux."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Las liaisons obligatorias",
      idea: "La liaison une una consonante final muda con la vocal siguiente. Es obligatoria entre determinante y nombre (les‿enfants, un‿ami, mes‿amis, deux‿heures), entre pronombre y verbo (nous‿allons, vous‿êtes, ils‿ont, on‿a) y tras preposiciones cortas (dans‿un mois, en‿avion, chez‿elle). Sonidos: s, x, z → [z]; d → [t]: un grand‿homme [gʁɑ̃tɔm]; n → [n]: un‿ami [œ̃nami]; t → [t]: vingt‿ans.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "les enfants · des enfants", es: "los niños · unos niños — [z]" },
        { fr: "mes amis · un ami", es: "mis amigos · un amigo — [z] · [n]" },
        { fr: "deux ans · deux euros · deux heures", es: "dos años · dos euros · las dos — [z]" },
        { fr: "nous avons · nous allons", es: "tenemos · vamos — [z]" },
        { fr: "vous êtes · vous avez", es: "ustedes son · ustedes tienen — [z]" },
        { fr: "ils ont · ils habitent · on a", es: "tienen · viven · tenemos — [z] · [n]" },
        { fr: "en avion · en Italie · en Espagne", es: "en avión · en Italia · en España — [n]" },
        { fr: "chez elle · chez eux · dans un mois", es: "en casa de ella · en casa de ellos · en un mes" },
        { fr: "un grand homme · un petit enfant", es: "un gran hombre · un niño pequeño — [t]" },
        { fr: "vingt ans", es: "veinte años — [t]" }
      ],
      ej: [["Les amis sont arrivés.", "Los amigos llegaron."], ["Nous avons deux enfants.", "Tenemos dos hijos."], ["Ils habitent en Espagne.", "Viven en España."]],
      clave: "Determinante, pronombre o preposición corta + vocal: se une siempre." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les | amis (sin unir)", "les amis [lezami]", "Determinante + nombre: liaison obligatoria."], ["Nous zavons deux enfants.", "Nous avons deux enfants.", "La z se oye, pero no se escribe."], ["un grand homme (con [d])", "un grand homme [gʁɑ̃tɔm]", "En liaison, d suena [t]."]] }
  ],
  ejemplos: [
    { sit: "«los amigos»", resp: "les amis [lezami]", pasos: ["Determinante + nombre: [z]."], porque: "Obligatoria." },
    { sit: "«Ustedes son…»", resp: "vous êtes [vuzɛt]", pasos: ["Pronombre + verbo: [z]."], porque: "Obligatoria." },
    { sit: "«un gran hombre»", resp: "un grand homme [gʁɑ̃tɔm]", pasos: ["d → [t]."], porque: "Sonido de liaison." }
  ],
  comprueba: [
    { q: "Entre determinante y nombre, la liaison es…", o: ["obligatoria", "prohibida"], a: 0, b: "phono", porque: "les‿amis." },
    { q: "En liaison, la s suena…", o: ["[z]", "[s]"], a: 0, b: "phono", porque: "les‿enfants." },
    { q: "En liaison, la d suena…", o: ["[t]", "[d]"], a: 0, b: "phono", porque: "grand‿homme." }
  ],
  practica: [
    { fase: "guiada", c: ["flo-cas"], k: "sort", ask: "¿Hay liaison?", q: "Clasifica.", cats: ["Sí", "No"], items: [["nous avons", 0], ["les hôtels", 0], ["deux euros", 0], ["chez elle", 0], ["et après", 1], ["Paul arrive", 1], ["un héros", 1], ["les haricots", 1]], pista: "Ojo con et y la h aspirada.", why: "Liaison." },
    { fase: "guiada", c: ["flo-son"], k: "choice", es: true, say: "les enfants", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[lezɑ̃fɑ̃]", "[le ɑ̃fɑ̃]"], a: 0, pista: "Se une con [z].", why: "<b>les‿enfants</b>." },
    { fase: "guiada", c: ["flo-cas"], k: "choice", es: true, say: "vous êtes", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[vuzɛt]", "[vu ɛt]"], a: 0, pista: "Pronombre + verbo.", why: "<b>vous‿êtes</b>." },
    { fase: "indep", c: ["flo-son"], k: "choice", es: true, say: "un grand homme", ask: "Escucha. ¿Qué sonido une grand y homme?", q: "Elige.", o: ["[t]", "[d]", "ninguno"], a: 0, why: "<b>grand‿homme</b>: [t]." },
    { fase: "indep", c: ["flo-cas"], k: "choice", ask: "¿Dónde es obligatoria la liaison?", q: "«___»", o: ["mes amis", "et elle", "un héros"], a: 0, why: "<b>mes‿amis</b>." },
    { fase: "indep", c: ["flo-cas"], k: "spot", ask: "Encuentra el error.", s: "Nous [zavons] deux enfants .", fix: "avons", why: "<b>Nous avons</b>: la z se oye, no se escribe." },
    { fase: "aplica", c: ["flo-son"], k: "match", ask: "Une cada grupo con su pronunciación.", q: "Grupo → sonido", pairs: [["deux ans", "[døzɑ̃]"], ["un ami", "[œ̃nami]"], ["un petit enfant", "[pətitɑ̃fɑ̃]"], ["vingt ans", "[vɛ̃tɑ̃]"]], why: "[z], [n], [t]." },
    { fase: "aplica", c: ["flo-cas", "flo-son"], k: "choice", es: true, say: "Ils habitent en Italie.", ask: "Escucha. ¿Cuántas liaisons oyes?", q: "Elige.", o: ["2", "1", "0"], a: 0, why: "<b>ils‿habitent en‿Italie</b>." },
    { fase: "dominio", c: ["flo-cas"], k: "choice", ask: "«Tienen dos hijos.»", q: "«Ils ont deux ___.»", o: ["enfants", "héros"], a: 0, why: "<b>deux‿enfants</b>." },
    { fase: "dominio", c: ["flo-cas", "flo-son"], k: "order", ask: "Ordena: «Los amigos llegaron».", tokens: ["Les amis", "sont", "arrivés."], why: "<b>Les‿amis sont‿arrivés.</b>" },
    { fase: "dominio", c: ["flo-cas", "flo-son"], k: "listen", say: "Nous avons trois enfants et ils habitent en Italie.", acc: ["Nous avons trois enfants et ils habitent en Italie.", "Nous avons 3 enfants et ils habitent en Italie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous avons trois enfants et ils habitent en Italie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: ["sont", "arrivés", "au", "café", "combien", "ma", "sœur", "et", "son", "mari", "viennent", "je", "vais", "après", "trois", "les", "hôtels", "héros", "haricots", "arrive", "un", "elle"] }
};

E["fon-liaison-interdite"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les liaisons interdites",
  objetivo: {
    que: "Vas a saber dónde nunca se hace liaison: después de et, después de un nombre en singular, ante h aspirada y tras un nombre propio.",
    corto: "toi et | elle · les | héros.",
    podras: ["No unir nunca después de et: et | alors.", "No unir tras un nombre singular: un étudiant | italien.", "No unir ante h aspirada ni tras nombre propio: les | héros, Paris | est beau."],
    iconos: ["ic2/candado", "ic2/audifonos", "ic2/espadas"],
    previos: ["Las liaisons obligatorias (lección 41) y la h aspirada (lección 25)."],
    capacidad: "Ahora no unes donde un francés nunca uniría."
  },
  requiere: R("flo-cas", "fhh-aspire", "fl-interdit"), recupera: ["fl-interdit"],
  conceptos: {
    "fli-et": { n: "nunca tras et: toi et | elle, et | alors", b: "phono" },
    "fli-autres": { n: "nunca tras nombre singular, ante h aspirada, tras nombre propio, ante onze", b: "phono" }
  },
  video: {
    titulo: "Liaisons prohibidas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "et | elle", seg: [
        { es: "Hola. Hay uniones que suenan muy mal en francés." } ] },
      { v: "frase", filas: [
          { nota: "tras et", p: 1, partes: [["toi et elle", "-", 1]] },
          { nota: "h aspirada", p: 2, partes: [["les héros", "-", 2]] },
          { nota: "nombre singular", p: 3, partes: [["un étudiant italien", "-", 3]] } ], seg: [
        { es: "La te de et nunca suena:", p: 1 }, { fr: "toi et elle", p: 1 }, { es: "Ante h aspirada, un corte:", p: 2 }, { fr: "les héros", p: 2 }, { es: "Tras un nombre en singular:", p: 3 }, { fr: "un étudiant italien", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo suena «et alors»?", es: true, o: ["[e alɔʁ], sin unir", "[etalɔʁ], con t"], a: 0,
        bien: "¡Sí! Tras et, nunca.", mal: "La t de et nunca suena.",
        seg: [ { es: "Pausa. Et alors." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["et alors", "toi et elle", "les héros", "Paris est beau", "les onze"], seg: [
        { es: "Et, nunca. H aspirada, nunca.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Después del partido", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comentan un partido.",
    pj: PJ,
    lineas: [
      ["camila", "Les héros du match sont fatigués !", "¡Los héroes del partido están cansados!"],
      ["hugo", "Oui, les onze joueurs ont couru. Et alors, on fête ça ?", "Sí, los once jugadores corrieron. ¿Y entonces, lo celebramos?"],
      ["camila", "Avec toi et elle ? Et ton ami, l'étudiant italien ?", "¿Contigo y con ella? ¿Y tu amigo, el estudiante italiano?"],
      ["hugo", "Il arrive ! Paris est beau ce soir.", "¡Ya llega! París está bonito esta noche."]
    ],
    fijate: "Fíjate: les | héros, les | onze, et | alors, toi et | elle, étudiant | italien, Paris | est: sin liaison."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Dónde no se une",
      idea: "Nunca hay liaison después de et (la t de et no suena jamás): toi et | elle, et | alors. Tampoco después de un nombre en singular: un étudiant | italien, un chat | énorme. Ni delante de h aspirada: les | héros, les | haricots, en | haut. Ni después de un nombre propio: Paris | est beau, Jean | arrive. Ni delante de onze y oui: les | onze joueurs.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "et alors · toi et elle", es: "¿y entonces? · tú y ella — tras et" },
        { fr: "un étudiant italien", es: "un estudiante italiano — nombre singular" },
        { fr: "un chat énorme", es: "un gato enorme — nombre singular" },
        { fr: "les héros · les haricots · les haches", es: "los héroes · los frijoles · las hachas — h aspirada" },
        { fr: "Paris est beau · Jean arrive", es: "París es bonito · Jean llega — nombre propio" },
        { fr: "les onze joueurs", es: "los once jugadores — ante onze" },
        { fr: "fatigués", es: "cansados" },
        { fr: "un étudiant anglais", es: "un estudiante inglés" }
      ],
      ej: [["Marie et Anne sont là.", "Marie y Anne están."], ["Les héros du film", "Los héroes de la película"], ["Un étudiant italien", "Un estudiante italiano"]],
      clave: "Tras et, ante h aspirada, tras nombre singular o propio: nunca." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["et‿alors [etalɔʁ]", "et alors [e alɔʁ]", "La t de et nunca suena."], ["Les z'héros du match sont fatigués.", "Les héros du match sont fatigués.", "H aspirada: sin liaison."], ["les‿onze [lezɔ̃z]", "les onze [le ɔ̃z]", "Ante onze no hay liaison."]] }
  ],
  ejemplos: [
    { sit: "«tú y ella»", resp: "toi et elle [twa e ɛl]", pasos: ["Tras et: nunca."], porque: "La t no suena." },
    { sit: "«los héroes»", resp: "les héros [le eʁo]", pasos: ["h aspirada."], porque: "Sin liaison." },
    { sit: "«París es bonito»", resp: "Paris est beau", pasos: ["Nombre propio: sin unir."], porque: "Prohibida." }
  ],
  comprueba: [
    { q: "Después de et, la liaison…", o: ["nunca se hace", "es obligatoria"], a: 0, b: "phono", porque: "et | alors." },
    { q: "Ante h aspirada…", o: ["no hay liaison", "hay liaison con [z]"], a: 0, b: "phono", porque: "les | héros." },
    { q: "En un étudiant italien…", o: ["no se une: nombre singular", "se une con [t]"], a: 0, b: "phono", porque: "Prohibida." }
  ],
  practica: [
    { fase: "guiada", c: ["fli-et", "fli-autres"], k: "sort", ask: "¿Obligatoria o prohibida?", q: "Clasifica.", cats: ["Obligatoria", "Prohibida"], items: [["les amis", 0], ["vous êtes", 0], ["en avion", 0], ["chez eux", 0], ["et après", 1], ["les héros", 1], ["Jean arrive", 1], ["les onze", 1]], pista: "et, h aspirada, nombre propio, onze.", why: "Liaison." },
    { fase: "guiada", c: ["fli-et"], k: "choice", es: true, say: "toi et elle", ask: "Escucha. ¿Hay liaison tras et?", q: "Elige.", o: ["No, nunca", "Sí, con [t]"], a: 0, pista: "La t de et.", why: "<b>toi et | elle</b>." },
    { fase: "guiada", c: ["fli-autres"], k: "choice", es: true, say: "les héros", ask: "Escucha. ¿Hay liaison?", q: "Elige.", o: ["No: h aspirada", "Sí, con [z]"], a: 0, pista: "Héros.", why: "<b>les | héros</b>." },
    { fase: "indep", c: ["fli-et"], k: "fill", ask: "Escribe «y».", q: "toi ___ moi", acc: ["et"], why: "<b>et</b>: su t nunca suena." },
    { fase: "indep", c: ["fli-autres"], k: "choice", es: true, say: "un chat énorme", ask: "Escucha. ¿Hay liaison entre chat y énorme?", q: "Elige.", o: ["No: nombre singular", "Sí, con [t]"], a: 0, why: "<b>un chat | énorme</b>." },
    { fase: "indep", c: ["fli-autres"], k: "spot", ask: "Encuentra el error.", s: "Les [z'héros] du match sont fatigués .", fix: "héros", why: "<b>Les héros</b>." },
    { fase: "aplica", c: ["fli-et", "fli-autres"], k: "match", ask: "Une cada grupo con la razón.", q: "Grupo → por qué no se une", pairs: [["toi et elle", "nunca tras et"], ["les haches", "h aspirada"], ["Paris est beau", "nombre propio"], ["un étudiant anglais", "nombre singular"]], why: "Liaisons prohibidas." },
    { fase: "aplica", c: ["fli-et"], k: "choice", es: true, say: "Et alors ?", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[e alɔʁ]", "[etalɔʁ]"], a: 0, why: "<b>et | alors</b>." },
    { fase: "dominio", c: ["fli-autres"], k: "choice", ask: "¿En cuál NO se hace liaison?", q: "«___»", o: ["les onze joueurs", "les amis", "vous êtes"], a: 0, why: "<b>les | onze</b>: ante onze, nunca." },
    { fase: "dominio", c: ["fli-et", "fli-autres"], k: "order", ask: "Ordena: «Los héroes del partido están cansados».", tokens: ["Les héros", "du match", "sont fatigués."], why: "<b>Les héros du match sont fatigués.</b>" },
    { fase: "dominio", c: ["fli-et", "fli-autres"], k: "listen", say: "Mon frère et elle sont les héros de l'histoire.", acc: ["Mon frère et elle sont les héros de l'histoire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon frère et elle sont les héros de l'histoire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Anne", "Jean", "Paris"], previo: ["les", "du", "match", "sont", "oui", "ont", "couru", "on", "fête", "ça", "avec", "toi", "ton", "ami", "l'étudiant", "il", "arrive", "est", "beau", "ce", "soir", "là", "film", "mon", "frère", "de", "l'histoire", "moi"] }
};

E["fon-liaison-facultative"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Liaisons facultatives et registre",
  objetivo: {
    que: "Vas a reconocer las liaisons opcionales y a elegir cuántas hacer según la situación.",
    corto: "c'est‿important · pas‿encore · ils sont (‿) arrivés.",
    podras: ["Hacer la liaison frecuente tras c'est: c'est‿important.", "Saber que tras pas, très y los verbos la liaison es opcional.", "Hacer pocas en la conversación y más en un discurso o una lectura."],
    iconos: ["ic2/microfono", "ic2/audifonos", "ic2/pergamino"],
    previos: ["Las liaisons obligatorias (lección 41) y las prohibidas (lección 42)."],
    capacidad: "Ahora adaptas tus liaisons a la situación."
  },
  requiere: R("flo-cas", "flo-son", "fli-et"), recupera: ["flo-cas"],
  conceptos: {
    "flf-cas": { n: "facultativa: tras c'est, pas, très, trop y verbos (ils sont‿arrivés)", b: "phono" },
    "flf-registre": { n: "más liaisons = más formal: discurso y poesía, muchas; charla, pocas", b: "phono" }
  },
  video: {
    titulo: "Liaisons opcionales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "c'est‿important", seg: [
        { es: "Hola. Algunas uniones son opcionales: dependen de la situación." } ] },
      { v: "dos",
        a: { tag: "charla", fr: "Ils sont arrivés.", es: "sin unir" },
        b: { tag: "discurso", fr: "Ils sont arrivés.", es: "con [t]" },
        seg: [ { es: "Con amigos, casi no se une:", p: 1 }, { fr: "Ils sont arrivés.", p: 1 }, { es: "En la radio, se une más:", p: 2 }, { fr: "Ils sont arrivés.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde harías más liaisons facultativas?", es: true, o: ["En un discurso formal", "En un mensaje a un amigo"], a: 0,
        bien: "¡Sí! Más liaisons, más formal.", mal: "Al revés: el discurso formal lleva más.",
        seg: [ { es: "Pausa. ¿Dónde?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'est important", "pas encore", "très intéressant", "ils sont arrivés"], seg: [
        { es: "C'est más vocal: casi siempre se une.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El ensayo", img: "bg-universidad", yo: "camila",
    escena: "Camila ensaya un discurso con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["sofia", "C'est important : demain, tu fais un discours devant la classe.", "Es importante: mañana das un discurso frente a la clase."],
      ["camila", "Je ne suis pas encore prête, madame.", "Todavía no estoy lista, señora."],
      ["sofia", "Ton texte est très intéressant. Fais plus de liaisons, c'est un discours.", "Tu texto es muy interesante. Haz más liaisons, es un discurso."],
      ["camila", "D'accord. Mes amis vont arriver pour m'écouter !", "De acuerdo. ¡Mis amigos van a llegar para escucharme!"]
    ],
    fijate: "Fíjate: c'est‿important (casi siempre); pas‿encore, très‿intéressant, vont‿arriver (opcionales); mes‿amis (obligatoria)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Liaisons opcionales",
      idea: "Algunas liaisons son facultativas. Tras c'est casi siempre se hace: c'est‿important. Tras pas, trop, très: pas‿encore, très‿intéressant. Tras un verbo en plural: ils vont‿arriver, ils sont‿arrivés (formal). Cuantas más hagas, más formal suena: en la conversación diaria se hacen pocas; en la radio, en un discurso o leyendo poesía, muchas.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "c'est important · c'est utile", es: "es importante · es útil — casi siempre [t]" },
        { fr: "pas encore", es: "todavía no — opcional [z]" },
        { fr: "très intéressant", es: "muy interesante — opcional [z]" },
        { fr: "ils sont arrivés", es: "llegaron — opcional [t]" },
        { fr: "ils vont arriver", es: "van a llegar — opcional [t]" },
        { fr: "prêt · prête · fini", es: "listo · lista · terminado" },
        { fr: "le discours", es: "el discurso" },
        { fr: "ils ont · en été", es: "tienen · en verano — obligatorias" }
      ],
      ej: [["C'est important.", "Es importante."], ["Je ne suis pas encore prêt.", "Todavía no estoy listo."], ["Ils sont arrivés.", "Llegaron (con o sin liaison)."]],
      clave: "Obligatorias siempre; facultativas según el registro." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Todas las liaisons facultativas en una charla", "Elegir según el registro", "Demasiadas liaisons suenan afectadas."], ["Ce film est trézintéressant.", "Ce film est très intéressant.", "La z se oye, pero se escribe très."], ["c'est | important (con pausa)", "c'est important [sɛtɛ̃pɔʁtɑ̃]", "Tras c'est, la liaison es casi automática."]] }
  ],
  ejemplos: [
    { sit: "«Es importante.»", resp: "C'est‿important.", pasos: ["Tras c'est: [t]."], porque: "Casi siempre." },
    { sit: "«Todavía no.» (charla)", resp: "pas encore [pa ɑ̃kɔʁ]", pasos: ["Opcional: sin unir en una charla."], porque: "Registro familiar." },
    { sit: "«Llegaron.» (noticiero)", resp: "Ils sont‿arrivés.", pasos: ["Formal: se une."], porque: "Registro formal." }
  ],
  comprueba: [
    { q: "Tras pas, la liaison es…", o: ["facultativa", "obligatoria"], a: 0, b: "phono", porque: "pas‿encore / pas | encore." },
    { q: "Hacer muchas liaisons facultativas suena…", o: ["más formal", "más familiar"], a: 0, b: "phono", porque: "Registro." },
    { q: "Ils ont es una liaison…", o: ["obligatoria", "facultativa"], a: 0, b: "phono", porque: "Pronombre + verbo." }
  ],
  practica: [
    { fase: "guiada", c: ["flf-cas"], k: "sort", ask: "¿Obligatoria o facultativa?", q: "Clasifica.", cats: ["Obligatoria", "Facultativa"], items: [["les enfants", 0], ["nous avons", 0], ["un ami", 0], ["en été", 0], ["c'est utile", 1], ["pas encore", 1], ["très intéressant", 1], ["ils sont arrivés", 1]], pista: "Determinante y pronombre: obligatorias.", why: "Tipos de liaison." },
    { fase: "guiada", c: ["flf-cas"], k: "choice", es: true, say: "C'est important.", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[sɛtɛ̃pɔʁtɑ̃]", "[sɛ ɛ̃pɔʁtɑ̃]"], a: 0, pista: "Tras c'est, casi siempre.", why: "<b>c'est‿important</b>." },
    { fase: "guiada", c: ["flf-registre"], k: "choice", es: true, ask: "¿Dónde se hacen más liaisons facultativas?", q: "Elige.", o: ["En un discurso formal", "En una charla entre amigos"], a: 0, pista: "Más liaisons, más formal.", why: "Registro formal." },
    { fase: "indep", c: ["flf-cas"], k: "choice", ask: "¿Cuál es obligatoria (no facultativa)?", q: "«___»", o: ["ils ont", "pas encore", "très intéressant"], a: 0, why: "<b>ils‿ont</b>: pronombre + verbo." },
    { fase: "indep", c: ["flf-cas"], k: "fill", ask: "Escribe «todavía no» (dos palabras).", q: "Il n'est ___ prêt.", acc: ["pas encore"], why: "<b>pas encore</b>." },
    { fase: "indep", c: ["flf-cas"], k: "spot", ask: "Encuentra el error.", s: "Ce film est [trézintéressant] .", fix: "très intéressant", why: "<b>très intéressant</b>." },
    { fase: "aplica", c: ["flf-cas"], k: "match", ask: "Une cada grupo con su tipo de liaison.", q: "Grupo → liaison", pairs: [["c'est important", "casi siempre"], ["pas encore", "opcional"], ["les enfants", "obligatoria"], ["et alors", "prohibida"]], why: "Tres tipos de liaison." },
    { fase: "aplica", c: ["flf-cas", "flf-registre"], k: "choice", es: true, say: "Ils sont arrivés.", ask: "Escucha. ¿Hay liaison entre sont y arrivés?", q: "Elige.", o: ["Sí: registro cuidado", "No: imposible"], a: 0, why: "Facultativa: aquí se hizo." },
    { fase: "dominio", c: ["flf-cas"], k: "choice", ask: "«Todavía no estoy lista.»", q: "«Je ne suis pas encore ___.»", o: ["prête", "fini"], a: 0, why: "<b>prête</b>." },
    { fase: "dominio", c: ["flf-cas", "flf-registre"], k: "order", ask: "Ordena: «Es muy importante».", tokens: ["C'est", "très", "important."], why: "<b>C'est très important.</b>" },
    { fase: "dominio", c: ["flf-cas", "flf-registre"], k: "listen", say: "C'est très important, mais ce n'est pas encore fini.", acc: ["C'est très important, mais ce n'est pas encore fini."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est très important, mais ce n'est pas encore fini.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["demain", "tu", "fais", "un", "devant", "la", "classe", "je", "ne", "suis", "madame", "ton", "texte", "est", "plus", "de", "liaisons", "d'accord", "mes", "amis", "pour", "m'écouter", "ce", "film", "mais", "n'est", "il", "fais"] }
};

E["fon-enchainement"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'enchaînement : il‿arrive, une‿amie",
  objetivo: {
    que: "Vas a encadenar la consonante final que ya suena con la vocal siguiente: il‿arrive, une‿amie.",
    corto: "avec‿elle [a-vɛ-kɛl].",
    podras: ["Unir sin pausa: il‿arrive, avec‿elle.", "Distinguir encadenamiento (la consonante ya sonaba) de liaison (era muda).", "Decir neuf‿heures [nœvœʁ]: f → v."],
    iconos: ["ic2/rayo", "ic2/audifonos", "ic2/amigos"],
    previos: ["Las liaisons obligatorias (lección 41) y las consonantes finales (lección 30)."],
    capacidad: "Ahora tus frases fluyen sin cortes."
  },
  requiere: R("flo-cas", "fcf-careful"), recupera: ["fcf-careful"],
  conceptos: {
    "fen-regle": { n: "consonante que ya suena + vocal = nueva sílaba: il‿arrive [i-la-ʁiv]", b: "phono" },
    "fen-diff": { n: "encadenamiento ≠ liaison: en la liaison la consonante era muda", b: "phono" }
  },
  video: {
    titulo: "El encadenamiento", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "il‿arrive", seg: [
        { es: "Hola. En francés las palabras se pegan, sin pausa." } ] },
      { v: "frase", filas: [
          { nota: "il + arrive", p: 1, partes: [["il arrive", "-", 1]] },
          { nota: "une + amie", p: 2, partes: [["une amie", "-", 2]] },
          { nota: "f → v", p: 3, partes: [["neuf heures", "-", 3]] } ], seg: [
        { es: "La ele se va con la vocal siguiente:", p: 1 }, { fr: "il arrive", p: 1 }, { fr: "une amie", p: 2 }, { es: "Y una excepción: la efe se vuelve ve:", p: 3 }, { fr: "neuf heures", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo se divide «avec elle»?", es: true, o: ["a-vɛ-kɛl", "a-vɛk / ɛl"], a: 0,
        bien: "¡Sí! La k va con la vocal siguiente.", mal: "Sin pausa: a-vɛ-kɛl.",
        seg: [ { es: "Pausa. Con ella." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il arrive", "avec elle", "une amie", "pour elle", "neuf heures"], seg: [
        { es: "Truco: lee la frase sin espacios.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La llegada", img: "bg-cafe", yo: "camila",
    escena: "Camila espera a Hugo en un café.",
    pj: PJ,
    lineas: [
      ["camila", "Hugo arrive à quelle heure ?", "¿A qué hora llega Hugo?"],
      ["sofia", "Il arrive avec une amie à neuf heures.", "Llega con una amiga a las nueve."],
      ["camila", "Une amie italienne ? Il aime cette école de langues.", "¿Una amiga italiana? A él le encanta esta escuela de idiomas."],
      ["sofia", "Oui. J'ai un cadeau pour elle.", "Sí. Tengo un regalo para ella."]
    ],
    fijate: "Fíjate: il‿arrive, avec‿une‿amie, neuf‿heures, une‿amie, il‿aime, cette‿école, pour‿elle: sin pausas."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Encadenar",
      idea: "El encadenamiento une la consonante final que ya se pronuncia con la vocal siguiente: il‿arrive [i-la-ʁiv], une‿amie [y-na-mi], avec‿elle [a-vɛ-kɛl]. A diferencia de la liaison, el sonido no cambia y la consonante ya sonaba. Excepción: neuf‿heures [nœvœʁ], f → v. Truco: lee la frase como si no tuviera espacios.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "il arrive · il aime", es: "llega · le gusta — [i-la-ʁiv] · [i-lɛm]" },
        { fr: "une amie", es: "una amiga — [y-na-mi]" },
        { fr: "avec elle · avec eux", es: "con ella · con ellos — [a-vɛ-kɛl]" },
        { fr: "pour elle", es: "para ella — [pu-ʁɛl]" },
        { fr: "cette école", es: "esta escuela — [sɛ-te-kɔl]" },
        { fr: "neuf heures", es: "las nueve — [nœ-vœʁ]" },
        { fr: "les amis · deux heures", es: "los amigos · las dos — liaison: la s era muda" }
      ],
      ej: [["Il arrive avec elle.", "Llega con ella."], ["Une amie italienne.", "Una amiga italiana."], ["Il est neuf heures.", "Son las nueve."]],
      clave: "Encadenamiento: la consonante ya sonaba; liaison: estaba muda." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["avec | elle (con pausa)", "avec elle [avɛkɛl]", "El encadenamiento no hace pausa."], ["Il larrive avec elle.", "Il arrive avec elle.", "Se oye junto, pero se escribe separado."], ["neuf heures (con [f])", "neuf heures [nœvœʁ]", "Aquí la f suena [v]."]] }
  ],
  ejemplos: [
    { sit: "«Llega.»", resp: "Il arrive. [i-la-ʁiv]", pasos: ["La l pasa a la sílaba siguiente."], porque: "Encadenamiento." },
    { sit: "«con ella»", resp: "avec elle [a-vɛ-kɛl]", pasos: ["La k se une a elle."], porque: "Sin pausa." },
    { sit: "«los amigos»", resp: "les amis [le-za-mi]", pasos: ["La s era muda: liaison."], porque: "No es encadenamiento." }
  ],
  comprueba: [
    { q: "En el encadenamiento, la consonante…", o: ["ya se pronunciaba", "era muda"], a: 0, b: "phono", porque: "il, avec." },
    { q: "Avec elle se dice…", o: ["sin pausa: [avɛkɛl]", "con una pausa"], a: 0, b: "phono", porque: "Encadenamiento." },
    { q: "Neuf heures suena…", o: ["[nœvœʁ]", "[nœfœʁ]"], a: 0, b: "phono", porque: "f → v." }
  ],
  practica: [
    { fase: "guiada", c: ["fen-diff"], k: "sort", ask: "¿Encadenamiento o liaison?", q: "Clasifica.", cats: ["Encadenamiento", "Liaison"], items: [["il arrive", 0], ["avec eux", 0], ["une amie", 0], ["pour elle", 0], ["les amis", 1], ["nous avons", 1], ["un ami", 1], ["deux heures", 1]], pista: "¿La consonante ya sonaba?", why: "Encadenamiento / liaison." },
    { fase: "guiada", c: ["fen-regle"], k: "choice", es: true, say: "avec elle", ask: "Escucha. ¿Cómo se divide en sílabas?", q: "Elige.", o: ["a-vɛ-kɛl", "a-vɛk-ɛl"], a: 0, pista: "La k va con la vocal.", why: "<b>avec‿elle</b>." },
    { fase: "guiada", c: ["fen-regle"], k: "choice", es: true, say: "neuf heures", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[nœvœʁ]", "[nœfœʁ]"], a: 0, pista: "f → v.", why: "<b>neuf‿heures</b>." },
    { fase: "indep", c: ["fen-diff"], k: "choice", es: true, ask: "En el encadenamiento…", q: "Elige.", o: ["La consonante ya se pronunciaba", "La consonante era muda"], a: 0, why: "Esa es la diferencia con la liaison." },
    { fase: "indep", c: ["fen-regle"], k: "choice", ask: "¿Cuál es un encadenamiento?", q: "«___»", o: ["il arrive", "les amis", "nous avons"], a: 0, why: "<b>il‿arrive</b>: la l ya sonaba." },
    { fase: "indep", c: ["fen-regle"], k: "spot", ask: "Encuentra el error.", s: "Il [larrive] avec elle à neuf heures .", fix: "arrive", why: "<b>Il arrive</b>: se escribe separado." },
    { fase: "aplica", c: ["fen-regle"], k: "match", ask: "Une cada grupo con sus sílabas.", q: "Grupo → sílabas", pairs: [["une amie", "[y-na-mi]"], ["il aime", "[i-lɛm]"], ["cette école", "[sɛ-te-kɔl]"], ["pour elle", "[pu-ʁɛl]"]], why: "Encadenamiento." },
    { fase: "aplica", c: ["fen-regle", "fen-diff"], k: "choice", es: true, say: "Une amie arrive avec lui.", ask: "Escucha. ¿Cuántos encadenamientos oyes?", q: "Elige.", o: ["2", "0", "4"], a: 0, why: "<b>une‿amie‿arrive</b>." },
    { fase: "dominio", c: ["fen-regle"], k: "fill", ask: "Escribe «para ella».", q: "J'ai un cadeau ___ elle.", acc: ["pour"], why: "<b>pour‿elle</b>." },
    { fase: "dominio", c: ["fen-regle", "fen-diff"], k: "order", ask: "Ordena: «Llega con ella».", tokens: ["Il arrive", "avec", "elle."], why: "<b>Il arrive avec elle.</b>" },
    { fase: "dominio", c: ["fen-regle", "fen-diff"], k: "listen", say: "Il arrive avec une amie à neuf heures.", acc: ["Il arrive avec une amie à neuf heures.", "Il arrive avec une amie à 9 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il arrive avec une amie à neuf heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: ["à", "quelle", "heure", "italienne", "de", "langues", "oui", "j'ai", "un", "cadeau", "il", "est", "lui", "nous", "avons", "ami"] }
};

E["fon-elision"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'élision : l', d', j', qu', s'",
  objetivo: {
    que: "Vas a hacer la elisión: le, la, je, de, que, si… pierden su vocal delante de vocal o h muda.",
    corto: "l'ami · j'aime · qu'il · s'il.",
    podras: ["Escribir l', j', m', t', s', n', d' delante de vocal.", "Escribir qu' delante de vocal y s' solo delante de il / ils.", "No hacer elisión delante de h aspirada: le héros."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["La liaison y la elisión (lección 7) y la h muda y aspirada (lección 25)."],
    capacidad: "Ahora escribes j'aime y s'il sin errores."
  },
  requiere: R("fl-liaison", "fhh-muet", "fhh-aspire"), recupera: ["fhh-muet"],
  conceptos: {
    "fel-courts": { n: "le, la, je, me, te, se, ne, de → l', j', m', t', s', n', d' ante vocal o h muda", b: "ortho" },
    "fel-que-si": { n: "que → qu' ante vocal; si → s' solo ante il / ils (si elle)", b: "ortho" }
  },
  video: {
    titulo: "La elisión", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "l' · j' · qu' · s'", seg: [
        { es: "Hola. Las palabras cortas pierden su vocal y ponen un apóstrofo." } ] },
      { v: "frase", filas: [
          { nota: "le, la → l'", p: 1, partes: [["l'ami · l'école", "-", 1]] },
          { nota: "je → j'", p: 2, partes: [["j'aime · j'habite", "-", 2]] },
          { nota: "que, si", p: 3, partes: [["qu'il · s'il", "-", 3]] } ], seg: [
        { fr: "l'ami, l'école", p: 1 }, { fr: "j'aime, j'habite", p: 2 }, { es: "Si solo se corta ante il:", p: 3 }, { fr: "qu'il, s'il", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si llueve, no voy.»", o: ["S'il pleut, je n'y vais pas.", "Si il pleut, je ne y vais pas."], a: 0,
        bien: "¡Sí! s'il y n'y.", mal: "Ante il: s'il; ante y: n'y.",
        seg: [ { es: "Pausa. Si llueve." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'ami", "j'aime", "qu'il", "s'il", "si elle", "le héros"], seg: [
        { es: "Si elle, sin apóstrofo. S'il, con apóstrofo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El invierno", img: "bg-paris", yo: "camila",
    escena: "Camila habla del clima con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "J'aime l'hiver, mais s'il neige, je n'aime pas sortir.", "Me gusta el invierno, pero si nieva, no me gusta salir."],
      ["hugo", "Je pense qu'il va neiger ce soir.", "Creo que va a nevar esta noche."],
      ["camila", "Et si elle vient, ton amie ? J'habite loin de l'école.", "¿Y si viene tu amiga? Vivo lejos de la escuela."],
      ["hugo", "Elle m'appelle demain. Ce n'est pas le héros de l'hiver !", "Ella me llama mañana. ¡No es la heroína del invierno!"]
    ],
    fijate: "Fíjate: j'aime, l'hiver, s'il, n'aime, qu'il, j'habite, l'école, m'appelle, n'est, l'hiver; pero si elle y le héros, sin apóstrofo."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "Cuándo va el apóstrofo",
      idea: "Las palabras cortas le, la, je, me, te, se, ne, de y que pierden su vocal delante de vocal o h muda y se escriben con apóstrofo: l'ami, l'école, l'hôtel, j'aime, il m'appelle, qu'il, qu'elle. Si → s' solo delante de il / ils: s'il, s'ils; pero si elle. No hay elisión delante de h aspirada: le héros, la haine. Ni delante de onze: le onze.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'ami · l'école · l'arbre", es: "el amigo · la escuela · el árbol" },
        { fr: "l'hiver · l'hôtel", es: "el invierno · el hotel — h muda" },
        { fr: "j'aime · j'habite · j'écoute", es: "me gusta · vivo · escucho" },
        { fr: "il m'appelle · il s'appelle", es: "me llama · se llama" },
        { fr: "je n'aime pas · il n'a pas", es: "no me gusta · no tiene" },
        { fr: "qu'il · qu'elle", es: "que él · que ella" },
        { fr: "s'il · s'ils", es: "si él · si ellos" },
        { fr: "si elle", es: "si ella — sin elisión" },
        { fr: "le héros · la haine · le onze", es: "el héroe · el odio · el once — sin elisión" },
        { fr: "neiger · il neige", es: "nevar · nieva" }
      ],
      ej: [["J'aime l'hiver.", "Me gusta el invierno."], ["Je pense qu'il est là.", "Creo que está ahí."], ["S'il pleut, je n'y vais pas.", "Si llueve, no voy."]],
      clave: "Vocal o h muda: apóstrofo; si → s' solo ante il." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["je aime", "j'aime", "Ante vocal, je → j'."], ["Je habite à Pamplona.", "J'habite à Pamplona.", "Ante h muda, je → j'."], ["s'elle vient", "si elle vient", "Si solo se corta ante il / ils."]] }
  ],
  ejemplos: [
    { sit: "«Me gusta el invierno.»", resp: "J'aime l'hiver.", pasos: ["je → j'; le → l'."], porque: "Vocal y h muda." },
    { sit: "«Creo que está ahí.»", resp: "Je pense qu'il est là.", pasos: ["que → qu'."], porque: "Ante il." },
    { sit: "«Si ella viene…»", resp: "Si elle vient…", pasos: ["si no se corta ante elle."], porque: "Solo s'il." }
  ],
  comprueba: [
    { q: "Ante vocal, je se escribe…", o: ["j'", "je"], a: 0, b: "ortho", porque: "j'aime." },
    { q: "Si se corta en s'…", o: ["solo ante il / ils", "ante cualquier vocal"], a: 0, b: "ortho", porque: "si elle." },
    { q: "Ante h aspirada…", o: ["no hay elisión", "hay elisión"], a: 0, b: "ortho", porque: "le héros." }
  ],
  practica: [
    { fase: "guiada", c: ["fel-courts", "fel-que-si"], k: "sort", ask: "¿Con elisión o sin elisión?", q: "Clasifica.", cats: ["Con elisión", "Sin elisión"], items: [["l'arbre", 0], ["j'habite", 0], ["qu'elle", 0], ["s'il", 0], ["le héros", 1], ["si elle", 1], ["la haine", 1], ["le onze", 1]], pista: "h aspirada, si elle, onze: sin.", why: "Elisión." },
    { fase: "guiada", c: ["fel-courts"], k: "choice", ask: "«la escuela»", q: "«___ école»", o: ["l'", "la", "le"], a: 0, pista: "Ante vocal.", why: "<b>l'école</b>." },
    { fase: "guiada", c: ["fel-que-si"], k: "choice", ask: "«Si ella viene…»", q: "«___ elle vient…»", o: ["Si", "S'"], a: 0, pista: "Solo s'il.", why: "<b>Si elle</b>." },
    { fase: "indep", c: ["fel-courts"], k: "fill", ask: "Escribe «tengo» (je + ai).", q: "___ai faim.", acc: ["J'", "j'"], why: "<b>J'ai</b> faim." },
    { fase: "indep", c: ["fel-que-si"], k: "choice", ask: "«Creo que tiene razón.»", q: "«Je pense ___ il a raison.»", o: ["qu'", "que"], a: 0, why: "<b>qu'il</b>." },
    { fase: "indep", c: ["fel-courts"], k: "spot", ask: "Encuentra el error.", s: "[Je] habite à Pamplona depuis deux ans .", fix: "J'", why: "<b>J'habite</b>." },
    { fase: "aplica", c: ["fel-courts", "fel-que-si"], k: "match", ask: "Une cada grupo con su forma con apóstrofo.", q: "Grupo → elisión", pairs: [["le + ami", "l'ami"], ["je + écoute", "j'écoute"], ["que + il", "qu'il"], ["ne + a", "n'a"]], why: "Elisión." },
    { fase: "aplica", c: ["fel-courts"], k: "choice", ask: "«Se llama Marc.»", q: "«Il ___ appelle Marc.»", o: ["s'", "se"], a: 0, why: "<b>Il s'appelle</b>." },
    { fase: "dominio", c: ["fel-que-si"], k: "choice", ask: "«Si nieva, no salgo.»", q: "«___ neige, je ne sors pas.»", o: ["S'il", "Si il"], a: 0, why: "<b>S'il</b> neige." },
    { fase: "dominio", c: ["fel-courts", "fel-que-si"], k: "order", ask: "Ordena: «Creo que está ahí».", tokens: ["Je pense", "qu'il", "est là."], why: "<b>Je pense qu'il est là.</b>" },
    { fase: "dominio", c: ["fel-courts", "fel-que-si"], k: "listen", say: "J'aime l'hiver, mais s'il neige, je n'aime pas sortir.", acc: ["J'aime l'hiver, mais s'il neige, je n'aime pas sortir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'aime l'hiver, mais s'il neige, je n'aime pas sortir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marc", "Pamplona"], previo: ["mais", "il", "je", "pas", "sortir", "pense", "va", "ce", "soir", "et", "elle", "vient", "ton", "amie", "loin", "de", "demain", "ce", "n'est", "est", "là", "pleut", "n'y", "vais", "faim", "a", "raison", "à", "depuis", "deux", "ans", "sors", "ne", "y"] }
};

E["fon-e-muet-oral"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le e qui tombe à l'oral : j'sais pas, p'tit",
  objetivo: {
    que: "Vas a entender el francés hablado, donde la e cae y el ne desaparece: j'sais pas, p'tit, sam'di.",
    corto: "je ne sais pas → j'sais pas.",
    podras: ["Reconocer la e que cae: p'tit, sam'di, maint'nant.", "Entender que el ne de la negación desaparece al hablar: c'est pas grave.", "Escribir siempre la forma completa: je ne sais pas."],
    iconos: ["ic2/audifonos", "ic2/movil", "ic2/lapiz"],
    previos: ["La e caduca (lección 10)."],
    capacidad: "Ahora entiendes a los franceses cuando hablan rápido."
  },
  requiere: R("fec-chute", "fec-final"), recupera: ["fec-chute"],
  conceptos: {
    "fem-chute": { n: "la e cae al hablar: p'tit, sam'di, j'sais pas", b: "co" },
    "fem-ecrit": { n: "oral familiar ≠ escrito: c'est pas grave / ce n'est pas grave", b: "co" }
  },
  video: {
    titulo: "La e que cae", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "j'sais pas", seg: [
        { es: "Hola. Al hablar, los franceses se comen la e, y a veces el ne." } ] },
      { v: "dos",
        a: { tag: "escrito", fr: "Je ne sais pas.", es: "forma completa" },
        b: { tag: "oral", fr: "J'sais pas.", es: "forma hablada" },
        seg: [ { es: "Así se escribe:", p: 1 }, { fr: "Je ne sais pas.", p: 1 }, { es: "Así se oye en la calle:", p: 2 }, { fr: "J'sais pas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En un examen escrito, ¿qué pones?", es: true, o: ["Je ne sais pas.", "J'sais pas."], a: 0,
        bien: "¡Sí! La caída de la e es oral.", mal: "Por escrito, la forma completa.",
        seg: [ { es: "Pausa. ¿Qué escribes?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'sais pas", "p'tit", "samedi", "c'est pas grave", "t'as vu ?"], seg: [
        { es: "Entiéndelo al oír, pero escribe completo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mensajes de voz", img: "bg-universidad", yo: "camila",
    escena: "Camila escucha mensajes de voz de Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Salut ! On s'voit samedi ? J'sais pas encore l'heure.", "¡Hola! ¿Nos vemos el sábado? Todavía no sé la hora."],
      ["camila", "Samedi ? Je ne sais pas si je peux venir.", "¿El sábado? No sé si puedo ir."],
      ["hugo", "C'est pas grave ! T'as vu le p'tit café près d'la gare ?", "¡No importa! ¿Viste el cafecito cerca de la estación?"],
      ["camila", "Oui. Y a personne le matin, c'est parfait.", "Sí. No hay nadie por la mañana, es perfecto."]
    ],
    fijate: "Fíjate: s'voit, j'sais pas, c'est pas, t'as vu, p'tit, d'la, y a personne: así se habla. Camila responde con la forma completa."
  },
  ensena: [
    { id: "co", tipo: "vocab", titulo: "Oral y escrito",
      idea: "En el francés hablado, la e caduca desaparece muy a menudo: petit → p'tit, samedi → sam'di, maintenant → maint'nant. En una cadena de palabras cortas cae una de cada dos: je ne sais pas → j'sais pas. Se mantiene si caería un grupo difícil: vendredi. Además, el ne de la negación desaparece al hablar: je sais pas, c'est pas grave. Por escrito, siempre la forma completa.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "je ne sais pas · j'sais pas", es: "no sé — escrito · oral" },
        { fr: "ce n'est pas grave · c'est pas grave", es: "no importa — escrito · oral" },
        { fr: "tu as vu ? · t'as vu ?", es: "¿viste? — escrito · oral" },
        { fr: "il n'y a personne · y a personne", es: "no hay nadie — escrito · oral" },
        { fr: "tu es où ? · t'es où ?", es: "¿dónde estás? — escrito · oral" },
        { fr: "petit · p'tit", es: "pequeño — escrito · oral" },
        { fr: "samedi · maintenant", es: "sábado · ahora — [samdi] · [mɛ̃tnɑ̃]" },
        { fr: "vendredi", es: "viernes — aquí la e se queda" },
        { fr: "chais pas", es: "no sé — muy familiar" },
        { fr: "il y a · y a", es: "hay — escrito · oral" }
      ],
      ej: [["J'sais pas.", "No sé."], ["C'est pas grave.", "No importa."], ["On s'voit samedi ?", "¿Nos vemos el sábado?"]],
      clave: "Al oír: entiende la forma corta. Al escribir: la forma completa." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'sais pas. (en un examen)", "Je ne sais pas.", "La caída de la e es oral, no escrita."], ["Madame, je sais pas si je peux venir.", "Madame, je ne sais pas si je peux venir.", "Por escrito y en registro formal: ne."], ["samedi (en tres sílabas)", "samedi [samdi]", "Al hablar, la e cae: dos sílabas."]] }
  ],
  ejemplos: [
    { sit: "Oyes «j'sais pas».", resp: "Je ne sais pas.", pasos: ["Cayeron la e y el ne."], porque: "No sé." },
    { sit: "Oyes «t'as vu ?».", resp: "Tu as vu ?", pasos: ["tu → t' al hablar."], porque: "¿Viste?" },
    { sit: "Escribes «no importa» en un correo formal.", resp: "Ce n'est pas grave.", pasos: ["Forma completa."], porque: "Escrito." }
  ],
  comprueba: [
    { q: "J'sais pas quiere decir…", o: ["No sé.", "Lo sé."], a: 0, b: "co", porque: "Cayó el ne, no la negación." },
    { q: "Samedi, al hablar, tiene…", o: ["dos sílabas: sam-di", "tres sílabas"], a: 0, b: "co", porque: "La e cae." },
    { q: "Por escrito se pone…", o: ["la forma completa", "la forma oral"], a: 0, b: "co", porque: "je ne sais pas." }
  ],
  practica: [
    { fase: "guiada", c: ["fem-ecrit"], k: "sort", ask: "¿Oral familiar o escrito correcto?", q: "Clasifica.", cats: ["Oral familiar", "Escrito correcto"], items: [["j'sais pas", 0], ["c'est pas grave", 0], ["t'as vu ?", 0], ["y a personne", 0], ["je ne sais pas", 1], ["ce n'est pas grave", 1], ["tu as vu ?", 1], ["il n'y a personne", 1]], pista: "¿Falta ne o una e?", why: "Oral / escrito." },
    { fase: "guiada", c: ["fem-chute"], k: "choice", es: true, say: "J'sais pas.", ask: "Escucha. ¿Qué quiere decir?", q: "Elige.", o: ["No sé.", "Ya sé.", "Lo sabes."], a: 0, pista: "Cayó el ne.", why: "<b>Je ne sais pas.</b>" },
    { fase: "guiada", c: ["fem-chute"], k: "choice", es: true, say: "samedi", ask: "Escucha. ¿Cuántas sílabas oyes?", q: "Elige.", o: ["dos: sam-di", "tres: sa-me-di"], a: 0, pista: "La e cae.", why: "<b>samedi</b> [samdi]." },
    { fase: "indep", c: ["fem-ecrit"], k: "fill", ask: "Escribe la forma completa de «j'sais pas».", q: "je ne ___ pas", acc: ["sais"], why: "<b>je ne sais pas</b>." },
    { fase: "indep", c: ["fem-chute"], k: "choice", ask: "Oyes «p'tit». ¿Qué palabra es?", q: "«___»", o: ["petit", "partie"], a: 0, why: "<b>petit</b>." },
    { fase: "indep", c: ["fem-ecrit"], k: "spot", ask: "Encuentra el error (registro formal).", s: "Madame , je [sais] pas si je peux venir .", fix: "ne sais", why: "<b>je ne sais pas</b>." },
    { fase: "aplica", c: ["fem-chute", "fem-ecrit"], k: "match", ask: "Une cada forma oral con la escrita.", q: "Oral → escrito", pairs: [["t'es où ?", "tu es où ?"], ["y a", "il y a"], ["chais pas", "je ne sais pas"], ["p'tit", "petit"]], why: "Oral / escrito." },
    { fase: "aplica", c: ["fem-chute"], k: "choice", es: true, say: "C'est pas grave.", ask: "Escucha. ¿Qué quiere decir?", q: "Elige.", o: ["No importa.", "Es grave."], a: 0, why: "<b>Ce n'est pas grave.</b>" },
    { fase: "dominio", c: ["fem-ecrit"], k: "choice", ask: "Escribes un correo formal: «No sé si puedo ir».", q: "«Je ___ si je peux venir.»", o: ["ne sais pas", "sais pas"], a: 0, why: "Forma completa: <b>je ne sais pas</b>." },
    { fase: "dominio", c: ["fem-chute", "fem-ecrit"], k: "order", ask: "Ordena la forma escrita: «No hay nadie».", tokens: ["Il", "n'y a", "personne."], why: "<b>Il n'y a personne.</b>" },
    { fase: "dominio", c: ["fem-chute", "fem-ecrit"], k: "listen", say: "Je ne sais pas si on se voit samedi.", acc: ["Je ne sais pas si on se voit samedi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne sais pas si on se voit samedi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["salut", "on", "s'voit", "encore", "l'heure", "je", "si", "peux", "venir", "le", "café", "près", "d'la", "gare", "oui", "matin", "c'est", "parfait", "madame", "se", "voit", "partie", "vu"] }
};

E["fon-syllabes"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "La syllabe ouverte : le français aime les voyelles",
  objetivo: {
    que: "Vas a dividir las palabras y las frases en sílabas abiertas, como lo hace el francés.",
    corto: "il‿est‿à Paris = i-lɛ-ta-pa-ʁi.",
    podras: ["Contar sílabas por vocales pronunciadas: u-ni-ver-si-té (5).", "No contar la e muda final: table = 1 sílaba.", "Agrupar consonante + vocal también entre palabras."],
    iconos: ["ic2/audifonos", "ic2/libro", "ic2/nota"],
    previos: ["El encadenamiento (lección 44) y el acento de grupo (lección 11)."],
    capacidad: "Ahora tu francés tiene el ritmo regular de las sílabas abiertas."
  },
  requiere: R("fen-regle", "fag-groupes", "fec-final"), recupera: ["fen-regle"],
  conceptos: {
    "fsy-compter": { n: "contar sílabas por vocales pronunciadas; la e muda final no cuenta", b: "phono" },
    "fsy-ouverte": { n: "sílaba abierta: consonante + vocal, también entre palabras", b: "phono" }
  },
  video: {
    titulo: "Sílabas abiertas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "u-ni-ver-si-té", seg: [
        { es: "Hola. El francés prefiere sílabas que terminan en vocal." } ] },
      { v: "frase", filas: [
          { nota: "5 sílabas", p: 1, partes: [["université", "-", 1]] },
          { nota: "1 sílaba", p: 2, partes: [["la table", "-", 2]] },
          { nota: "en la frase", p: 3, partes: [["Il est à Paris.", "-", 3]] } ], seg: [
        { fr: "université", p: 1 }, { es: "La e final no cuenta:", p: 2 }, { fr: "la table", p: 2 }, { es: "Entre palabras, también:", p: 3 }, { fr: "Il est à Paris.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántas sílabas tiene «étudiant»?", es: true, o: ["3", "4"], a: 0,
        bien: "¡Sí! é-tu-diant.", mal: "é-tu-diant: tres vocales que suenan.",
        seg: [ { es: "Pausa. Cuenta las vocales." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["université", "étudiant", "la table", "le cinéma", "la famille"], seg: [
        { es: "Todas las sílabas casi iguales; la última, un poco más larga.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La universidad", img: "bg-universidad", yo: "camila",
    escena: "Camila se presenta en clase.",
    pj: PJ,
    lineas: [
      ["camila", "J'étudie à l'université de Pamplona.", "Estudio en la universidad de Pamplona."],
      ["sofia", "Très bien. Et ta famille est à Paris ?", "Muy bien. ¿Y tu familia está en París?"],
      ["camila", "Non, mon frère est à Paris. Il est étudiant en cinéma.", "No, mi hermano está en París. Es estudiante de cine."],
      ["sofia", "Bravo. Votre table est là, avec le téléphone.", "Bravo. Su mesa está allá, con el teléfono."]
    ],
    fijate: "Fíjate: u-ni-ver-si-té, i-lɛ-ta-pa-ʁi, é-tu-diant, ci-né-ma, té-lé-phone; table: una sílaba."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Contar sílabas",
      idea: "El francés prefiere las sílabas abiertas (consonante + vocal): é-tu-diant, u-ni-ver-si-té. En la frase, las consonantes finales que suenan se unen a la vocal siguiente: il‿est‿à Paris [i-lɛ-ta-pa-ʁi]. Cuenta las sílabas por las vocales que suenan: bibliothèque = bi-bli-o-thèque (4). La e muda final no cuenta: table = 1 sílaba. Todas las sílabas duran casi lo mismo, salvo la última del grupo.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "l'université", es: "la universidad — 5 sílabas" },
        { fr: "l'étudiant · l'étudiante", es: "el estudiante · la estudiante — 3 sílabas" },
        { fr: "le téléphone · le chocolat · le cinéma", es: "el teléfono · el chocolate · el cine — 3 sílabas" },
        { fr: "la maison · merci · bonjour · le café", es: "la casa · gracias · buenos días · el café — 2 sílabas" },
        { fr: "la famille", es: "la familia — 2 sílabas: fa-mille" },
        { fr: "la table", es: "la mesa — 1 sílaba" },
        { fr: "la bibliothèque", es: "la biblioteca — 4 sílabas" },
        { fr: "J'étudie", es: "estudio" }
      ],
      ej: [["U-ni-ver-si-té.", "Universidad (5 sílabas)."], ["Il est à Paris.", "Está en París."], ["Ma-da-me Du-rand.", "La señora Durand."]],
      clave: "Una vocal que suena = una sílaba; la e final muda no cuenta." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["table (en dos sílabas: ta-ble)", "table (una sílaba)", "La e final no se pronuncia."], ["J'étudie à l'univercité de Pamplona.", "J'étudie à l'université de Pamplona.", "université: con s."], ["il | est | à Paris (con pausas)", "il‿est‿à Paris [i-lɛ-ta-pa-ʁi]", "Las sílabas se unen entre palabras."]] }
  ],
  ejemplos: [
    { sit: "Cuenta: université.", resp: "u-ni-ver-si-té (5)", pasos: ["Cinco vocales que suenan."], porque: "Sílabas abiertas." },
    { sit: "Cuenta: table.", resp: "table (1)", pasos: ["La e final no suena."], porque: "No cuenta." },
    { sit: "Divide: Il est à Paris.", resp: "i-lɛ-ta-pa-ʁi", pasos: ["Las consonantes pasan a la vocal siguiente."], porque: "Entre palabras." }
  ],
  comprueba: [
    { q: "Las sílabas francesas suelen terminar en…", o: ["vocal", "consonante"], a: 0, b: "phono", porque: "Sílaba abierta." },
    { q: "Table tiene…", o: ["1 sílaba", "2 sílabas"], a: 0, b: "phono", porque: "e muda." },
    { q: "Bibliothèque tiene…", o: ["4 sílabas", "5 sílabas"], a: 0, b: "phono", porque: "bi-bli-o-thèque." }
  ],
  practica: [
    { fase: "guiada", c: ["fsy-compter"], k: "sort", ask: "¿Dos o tres sílabas?", q: "Clasifica.", cats: ["2 sílabas", "3 sílabas"], items: [["la maison", 0], ["merci", 0], ["bonjour", 0], ["le café", 0], ["l'étudiant", 1], ["le téléphone", 1], ["le chocolat", 1], ["le cinéma", 1]], pista: "Cuenta las vocales que suenan.", why: "Sílabas." },
    { fase: "guiada", c: ["fsy-compter"], k: "choice", es: true, say: "l'université", ask: "Escucha. ¿Cuántas sílabas?", q: "Elige.", o: ["5", "4", "6"], a: 0, pista: "u-ni-…", why: "<b>u-ni-ver-si-té</b>." },
    { fase: "guiada", c: ["fsy-compter"], k: "choice", es: true, say: "la table", ask: "Escucha. ¿Cuántas sílabas tiene table?", q: "Elige.", o: ["1", "2"], a: 0, pista: "La e final no suena.", why: "<b>table</b>: una." },
    { fase: "indep", c: ["fsy-compter"], k: "fill", ask: "Escribe el número.", q: "« étudiant » tiene ___ sílabas.", acc: ["3", "trois"], why: "<b>é-tu-diant</b>: 3." },
    { fase: "indep", c: ["fsy-ouverte"], k: "choice", es: true, say: "Il est à Paris.", ask: "Escucha. ¿Cómo se divide?", q: "Elige.", o: ["i-lɛ-ta-pa-ʁi", "il-ɛt-a-pa-ʁis"], a: 0, why: "Sílabas abiertas." },
    { fase: "indep", c: ["fsy-compter"], k: "spot", ask: "Encuentra el error.", s: "J'étudie à l' [univercité] de Pamplona .", fix: "université", why: "<b>université</b>." },
    { fase: "aplica", c: ["fsy-compter"], k: "match", ask: "Une cada palabra con su número de sílabas.", q: "Palabra → sílabas", pairs: [["le cinéma", "3 sílabas"], ["bonjour", "2 sílabas"], ["la table", "1 sílaba"], ["la bibliothèque", "4 sílabas"]], why: "Contar." },
    { fase: "aplica", c: ["fsy-ouverte"], k: "choice", es: true, ask: "¿Cómo terminan casi todas las sílabas francesas?", q: "Elige.", o: ["En vocal", "En consonante"], a: 0, why: "Sílaba abierta." },
    { fase: "dominio", c: ["fsy-ouverte", "fsy-compter"], k: "choice", es: true, say: "la famille", ask: "Escucha. ¿Cuántas sílabas?", q: "Elige.", o: ["2: fa-mille", "3: fa-mi-lle"], a: 0, why: "<b>fa-mille</b>." },
    { fase: "dominio", c: ["fsy-ouverte"], k: "order", ask: "Ordena: «Estudio en la universidad».", tokens: ["J'étudie", "à", "l'université."], why: "<b>J'étudie à l'université.</b>" },
    { fase: "dominio", c: ["fsy-ouverte", "fsy-compter"], k: "listen", say: "J'étudie à l'université de Pamplona.", acc: ["J'étudie à l'université de Pamplona."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'étudie à l'université de Pamplona.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Pamplona", "Paris", "Durand"], previo: ["à", "de", "très", "bien", "et", "ta", "est", "non", "mon", "frère", "il", "étudiant", "en", "bravo", "votre", "là", "avec", "madame"] }
};

/* ───── FON·8 · Ritmo y melodía (lección 48) ───── */
E["fon-accent-final"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'accent sur la dernière syllabe",
  objetivo: {
    que: "Vas a poner el acento en la última sílaba, que es más larga, no más fuerte.",
    corto: "chocoLAT · musiQUE · un petit caFÉ.",
    podras: ["Alargar la última sílaba de la palabra: chocolat, restaurant.", "Pasar el acento al final del grupo: un petit café.", "Corregir las palabras que en español llevan el acento en otro sitio: musique, famille."],
    iconos: ["ic2/nota", "ic2/audifonos", "ic2/microfono"],
    previos: ["Ritmo, acento y entonación (lección 8) y el acento de grupo (lección 11)."],
    capacidad: "Ahora tu francés no suena con acento español."
  },
  requiere: R("fr-accent", "fag-final"), recupera: ["fr-accent"],
  conceptos: {
    "faf-mot": { n: "última sílaba pronunciada, más larga: chocolat, restaurant", b: "phono" },
    "faf-espagnol": { n: "cuidado con las palabras que en español se acentúan antes: música → musique", b: "phono" }
  },
  video: {
    titulo: "El acento final", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "chocoLAT", seg: [
        { es: "Hola. En francés, el acento siempre va al final." } ] },
      { v: "frase", filas: [
          { nota: "palabra", p: 1, partes: [["le chocolat", "-", 1]] },
          { nota: "grupo", p: 2, partes: [["un petit café", "-", 2]] },
          { nota: "¡ojo!", p: 3, partes: [["la musique · la famille", "-", 3]] } ], seg: [
        { es: "La última, más larga:", p: 1 }, { fr: "le chocolat", p: 1 }, { es: "En el grupo, al final del grupo:", p: 2 }, { fr: "un petit café", p: 2 }, { es: "Aunque en español sea música:", p: 3 }, { fr: "la musique, la famille", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde va el acento de «animal»?", es: true, o: ["En -mal, al final", "En la i"], a: 0,
        bien: "¡Sí! Siempre al final.", mal: "En francés nunca en medio: aniMAL.",
        seg: [ { es: "Pausa. Animal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le chocolat", "le restaurant", "la musique", "la famille", "le téléphone"], seg: [
        { es: "Más larga, no más fuerte.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cena", img: "bg-cafe", yo: "camila",
    escena: "Camila invita a Hugo a cenar.",
    pj: PJ,
    lineas: [
      ["camila", "Je vais au restaurant avec ma famille. Tu viens ?", "Voy al restaurante con mi familia. ¿Vienes?"],
      ["hugo", "Oui ! C'est un grand restaurant italien ?", "¡Sí! ¿Es un restaurante italiano grande?"],
      ["camila", "Non, il est petit, mais la musique est géniale.", "No, es pequeño, pero la música es genial."],
      ["hugo", "Parfait. Et après, un petit café ou un chocolat chaud !", "Perfecto. ¡Y después, un cafecito o un chocolate caliente!"]
    ],
    fijate: "Fíjate: restauRANT, faMILLE, musiQUE, caFÉ, chocoLAT: la última sílaba, más larga."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Siempre al final",
      idea: "En francés el acento cae siempre en la última sílaba pronunciada: chocolat, animal, restaurant. En la frase, pasa al final del grupo: un petit café. La sílaba acentuada es más larga, no más fuerte. Los acentos escritos (é, è) no marcan el acento. Ojo con las palabras que en español se acentúan antes: música → musique, familia → famille, problema → problème, teléfono → téléphone.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le chocolat · le restaurant", es: "el chocolate · el restaurante — -lat, -rant" },
        { fr: "l'animal · l'hôtel · le café", es: "el animal · el hotel · el café — como en español" },
        { fr: "la télévision", es: "la televisión — -sion" },
        { fr: "la musique · la famille", es: "la música · la familia — -sique, -mille" },
        { fr: "le problème · le téléphone", es: "el problema · el teléfono — -blème, -phone" },
        { fr: "difficile", es: "difícil — -cile" },
        { fr: "le cinéma", es: "el cine — -ma" },
        { fr: "un petit café", es: "un cafecito — acento en -fé" }
      ],
      ej: [["Je voudrais un chocolat.", "Quisiera un chocolate."], ["C'est un animal.", "Es un animal."], ["On va au restaurant.", "Vamos al restaurante."]],
      clave: "Última sílaba del grupo: más larga." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["animal (con acento en la i)", "animal (acento en -mal)", "Siempre al final."], ["J'adore la músique française.", "J'adore la musique française.", "musique no lleva tilde; acento al final."], ["téléphone (acento en -lé-)", "téléphone (acento en -phone)", "Los acentos escritos no marcan la fuerza."]] }
  ],
  ejemplos: [
    { sit: "Di «chocolat».", resp: "chocolat: -lat más larga", pasos: ["Última sílaba."], porque: "Acento final." },
    { sit: "Di «un petit café».", resp: "acento en -fé", pasos: ["Final del grupo."], porque: "Acento de grupo." },
    { sit: "Di «musique».", resp: "acento en -sique", pasos: ["No como música."], porque: "Diferente del español." }
  ],
  comprueba: [
    { q: "El acento francés cae…", o: ["en la última sílaba", "en la penúltima"], a: 0, b: "phono", porque: "Siempre al final." },
    { q: "La sílaba acentuada es…", o: ["más larga", "más fuerte"], a: 0, b: "phono", porque: "Duración." },
    { q: "La é de téléphone…", o: ["no marca el acento", "marca el acento"], a: 0, b: "phono", porque: "Acentos escritos." }
  ],
  practica: [
    { fase: "guiada", c: ["faf-espagnol"], k: "sort", ask: "¿El acento cae igual que en español?", q: "Clasifica.", cats: ["Igual que en español", "Diferente del español"], items: [["le café", 0], ["l'hôtel", 0], ["l'animal", 0], ["la télévision", 0], ["la famille", 1], ["le problème", 1], ["la musique", 1], ["le téléphone", 1]], pista: "música, familia: en español, antes.", why: "Acento final." },
    { fase: "guiada", c: ["faf-mot"], k: "choice", es: true, say: "le chocolat", ask: "Escucha. ¿Qué sílaba es más larga?", q: "Elige.", o: ["La última: -lat", "La primera: cho-"], a: 0, pista: "Siempre al final.", why: "<b>chocolat</b>." },
    { fase: "guiada", c: ["faf-mot"], k: "choice", es: true, say: "un petit café", ask: "Escucha. ¿Dónde está el acento del grupo?", q: "Elige.", o: ["En -fé", "En pe-"], a: 0, pista: "Final del grupo.", why: "<b>un petit café</b>." },
    { fase: "indep", c: ["faf-mot"], k: "fill", ask: "Escribe «el cine».", q: "Je vais au ___.", acc: ["cinéma"], why: "<b>cinéma</b>: acento en -ma." },
    { fase: "indep", c: ["faf-mot"], k: "choice", es: true, ask: "¿Un acento escrito (é) marca dónde va la fuerza?", q: "Elige.", o: ["No, el acento siempre es final", "Sí, como en español"], a: 0, why: "Siempre final." },
    { fase: "indep", c: ["faf-espagnol"], k: "spot", ask: "Encuentra el error.", s: "J'adore la [músique] française .", fix: "musique", why: "<b>musique</b>." },
    { fase: "aplica", c: ["faf-espagnol"], k: "match", ask: "Une cada palabra con su sílaba acentuada.", q: "Palabra → sílaba fuerte", pairs: [["la musique", "-sique"], ["la famille", "-mille"], ["le téléphone", "-phone"], ["difficile", "-cile"]], why: "Al final." },
    { fase: "aplica", c: ["faf-mot"], k: "choice", es: true, say: "le restaurant", ask: "Escucha. ¿Qué sílaba es más larga?", q: "Elige.", o: ["-rant", "res-", "-tau-"], a: 0, why: "<b>restaurant</b>." },
    { fase: "dominio", c: ["faf-espagnol"], k: "choice", es: true, say: "le problème", ask: "Escucha. ¿Dónde va el acento?", q: "Elige.", o: ["En -blème", "En pro-"], a: 0, why: "<b>problème</b>." },
    { fase: "dominio", c: ["faf-mot", "faf-espagnol"], k: "order", ask: "Ordena: «Voy al restaurante con mi familia».", tokens: ["Je vais", "au restaurant", "avec ma famille."], why: "<b>Je vais au restaurant avec ma famille.</b>" },
    { fase: "dominio", c: ["faf-mot", "faf-espagnol"], k: "listen", say: "Je vais au restaurant avec ma famille.", acc: ["Je vais au restaurant avec ma famille."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vais au restaurant avec ma famille.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["je", "vais", "au", "avec", "ma", "tu", "viens", "oui", "c'est", "un", "grand", "italien", "non", "il", "est", "petit", "mais", "géniale", "parfait", "et", "après", "ou", "chaud", "j'adore", "française", "voudrais", "on", "va"] }
};

E["fon-intonation-question"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "L'intonation de la question",
  objetivo: {
    que: "Vas a hacer subir la voz en la pregunta sí / no y bajarla en la pregunta con palabra interrogativa.",
    corto: "Tu viens ? ↗ · Où tu vas ? ↘",
    podras: ["Subir la voz al final de una pregunta sí / no: Tu es prêt ? ↗", "Empezar alto y bajar con qui, où, quand: Où est la gare ? ↘", "Distinguir pregunta y afirmación solo por la melodía."],
    iconos: ["ic2/pregunta", "ic2/audifonos", "ic2/microfono"],
    previos: ["Ritmo, acento y entonación (lección 8)."],
    capacidad: "Ahora tus preguntas suenan a preguntas."
  },
  requiere: R("fr-melodie", "fr-accent"), recupera: ["fr-melodie"],
  conceptos: {
    "fiq-totale": { n: "pregunta sí / no (también con est-ce que): la voz sube ↗", b: "phono" },
    "fiq-partielle": { n: "pregunta con qui, où, quand…: empieza alta y baja ↘; afirmación: baja", b: "phono" }
  },
  video: {
    titulo: "La melodía de la pregunta", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "↗ · ↘", seg: [
        { es: "Hola. La misma frase puede ser pregunta o afirmación: depende de la voz." } ] },
      { v: "dos",
        a: { tag: "pregunta ↗", fr: "Tu viens ce soir ?", es: "sube" },
        b: { tag: "afirmación ↘", fr: "Tu viens ce soir.", es: "baja" },
        seg: [ { es: "Pregunta, la voz sube:", p: 1 }, { fr: "Tu viens ce soir ?", p: 1 }, { es: "Afirmación, la voz baja:", p: 2 }, { fr: "Tu viens ce soir.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Dónde está la estación?»: ¿cómo va la voz?", es: true, o: ["Empieza alta y baja", "Sube al final"], a: 0,
        bien: "¡Sí! Con où, la voz baja.", mal: "Con palabra interrogativa, la voz baja.",
        seg: [ { es: "Pausa. ¿Dónde está?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Tu viens ?", "Est-ce que tu viens ?", "Où vas-tu ?", "Pourquoi ?"], seg: [
        { es: "Sí o no: sube. Qué, dónde, cuándo: baja.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El plan de la noche", img: "bg-cafe", yo: "camila",
    escena: "Hugo propone salir.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu viens au cinéma ce soir ?", "¿Vienes al cine esta noche?"],
      ["camila", "Oui ! Où est le cinéma ? Et quand commence le film ?", "¡Sí! ¿Dónde está el cine? ¿Y cuándo empieza la película?"],
      ["hugo", "À huit heures. Est-ce que tu as faim ?", "A las ocho. ¿Tienes hambre?"],
      ["camila", "Un peu. Tu parles anglais ? Le film est en anglais.", "Un poco. ¿Hablas inglés? La película es en inglés."]
    ],
    fijate: "Fíjate: Tu viens… ? Est-ce que tu as faim ? Tu parles anglais ? suben ↗. Où est… ? Quand commence… ? bajan ↘."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Subir o bajar",
      idea: "Pregunta total (se responde sí o no): la voz sube al final: Tu es prêt ? ↗ También con est-ce que: Est-ce que tu viens ? ↗ Pregunta parcial (qui, où, quand, comment, pourquoi): la voz empieza alta y baja: Où est la gare ? ↘ La afirmación baja: Tu es prêt. ↘ Si una pregunta sí / no no sube, suena a afirmación.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Tu es prêt ?", es: "¿Estás listo? — sube" },
        { fr: "Tu es prêt.", es: "Estás listo. — baja" },
        { fr: "Est-ce que tu viens ?", es: "¿Vienes? — sube" },
        { fr: "Il pleut ? · C'est vrai ?", es: "¿Llueve? · ¿Es verdad? — suben" },
        { fr: "Où vas-tu ? · Qui est là ?", es: "¿Adónde vas? · ¿Quién está? — bajan" },
        { fr: "Pourquoi ? · Comment tu t'appelles ?", es: "¿Por qué? · ¿Cómo te llamas? — bajan" },
        { fr: "Tu as froid ? · Tu as froid.", es: "¿Tienes frío? · Tienes frío." },
        { fr: "Pourquoi tu as froid ? · Tu as froid !", es: "¿Por qué tienes frío? · ¡Tienes frío!" },
        { fr: "Je suis prêt.", es: "Estoy listo. — baja" }
      ],
      ej: [["Tu parles français ?", "¿Hablas francés? ↗"], ["Comment tu t'appelles ?", "¿Cómo te llamas? ↘"], ["Tu parles français.", "Hablas francés. ↘"]],
      clave: "Sí / no: ↗. Palabra interrogativa: ↘." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tu viens ce soir ? (con la voz bajando)", "Tu viens ce soir ? ↗", "Si no sube, suena a afirmación."], ["Ets-ce que tu viens avec nous ?", "Est-ce que tu viens avec nous ?", "Se escribe est-ce que."], ["Où est la gare ? (subiendo al final)", "Où est la gare ? ↘", "Con où, la voz baja."]] }
  ],
  ejemplos: [
    { sit: "Preguntas si viene.", resp: "Tu viens ? ↗", pasos: ["Sí / no: sube."], porque: "Pregunta total." },
    { sit: "Preguntas dónde.", resp: "Où tu vas ? ↘", pasos: ["Palabra interrogativa: baja."], porque: "Pregunta parcial." },
    { sit: "Afirmas que viene.", resp: "Tu viens. ↘", pasos: ["Baja."], porque: "Afirmación." }
  ],
  comprueba: [
    { q: "En una pregunta sí / no, la voz…", o: ["sube al final", "baja al final"], a: 0, b: "phono", porque: "↗" },
    { q: "En «Où est la gare ?», la voz…", o: ["empieza alta y baja", "sube al final"], a: 0, b: "phono", porque: "↘" },
    { q: "Con est-ce que, la voz…", o: ["sube al final", "baja"], a: 0, b: "phono", porque: "Sigue siendo sí / no." }
  ],
  practica: [
    { fase: "guiada", c: ["fiq-totale", "fiq-partielle"], k: "sort", ask: "¿La voz sube o baja al final?", q: "Clasifica.", cats: ["Sube ↗", "Baja ↘"], items: [["Tu es prêt ?", 0], ["Est-ce que tu viens ?", 0], ["Il pleut ?", 0], ["C'est vrai ?", 0], ["Où vas-tu ?", 1], ["Qui est là ?", 1], ["Pourquoi ?", 1], ["Je suis prêt.", 1]], pista: "Sí / no: sube.", why: "Melodía." },
    { fase: "guiada", c: ["fiq-totale"], k: "choice", es: true, say: "Tu viens ce soir ?", ask: "Escucha. ¿Es pregunta o afirmación?", q: "Elige.", o: ["Pregunta: sube", "Afirmación: baja"], a: 0, pista: "Escucha el final.", why: "<b>Tu viens ce soir ? ↗</b>" },
    { fase: "guiada", c: ["fiq-partielle"], k: "choice", es: true, say: "Tu viens ce soir.", ask: "Escucha. ¿Es pregunta o afirmación?", q: "Elige.", o: ["Afirmación: baja", "Pregunta: sube"], a: 0, pista: "Escucha el final.", why: "<b>Tu viens ce soir. ↘</b>" },
    { fase: "indep", c: ["fiq-totale"], k: "fill", ask: "Completa.", q: "___-ce que tu aimes le café ?", acc: ["Est", "est"], why: "<b>Est-ce que</b>." },
    { fase: "indep", c: ["fiq-partielle"], k: "choice", es: true, ask: "En una pregunta con qui, où o quand, la voz…", q: "Elige.", o: ["Empieza alta y baja", "Sube al final"], a: 0, why: "Pregunta parcial ↘." },
    { fase: "indep", c: ["fiq-totale"], k: "spot", ask: "Encuentra el error.", s: "[Ets-ce] que tu viens avec nous ?", fix: "Est-ce", why: "<b>Est-ce que</b>." },
    { fase: "aplica", c: ["fiq-totale", "fiq-partielle"], k: "match", ask: "Une cada frase con su tipo.", q: "Frase → tipo", pairs: [["Tu as froid ?", "pregunta sí / no"], ["Tu as froid.", "afirmación"], ["Pourquoi tu as froid ?", "pregunta parcial"], ["Tu as froid !", "exclamación"]], why: "Melodías." },
    { fase: "aplica", c: ["fiq-partielle"], k: "choice", es: true, say: "Où est le cinéma ?", ask: "Escucha. ¿Cómo va la voz?", q: "Elige.", o: ["Empieza alta y baja", "Sube al final"], a: 0, why: "<b>Où…</b> ↘" },
    { fase: "dominio", c: ["fiq-totale"], k: "choice", ask: "Pregunta a un amigo si tiene hambre.", q: "«___»", o: ["Tu as faim ?", "Tu as faim."], a: 0, why: "<b>Tu as faim ?</b> ↗" },
    { fase: "dominio", c: ["fiq-totale", "fiq-partielle"], k: "order", ask: "Ordena: «¿Hablas inglés?».", tokens: ["Est-ce que", "tu parles", "anglais ?"], why: "<b>Est-ce que tu parles anglais ?</b>" },
    { fase: "dominio", c: ["fiq-totale", "fiq-partielle"], k: "listen", say: "Tu viens au cinéma ce soir ?", acc: ["Tu viens au cinéma ce soir ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu viens au cinéma ce soir ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "viens", "au", "cinéma", "ce", "soir", "oui", "où", "est", "le", "et", "quand", "commence", "film", "à", "huit", "heures", "as", "faim", "un", "peu", "parles", "anglais", "en", "aimes", "café", "avec", "nous", "gare", "la", "français"] }
};

E["fon-intonation-emotions"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Exclamer, ordonner, s'étonner : la voix",
  objetivo: {
    que: "Vas a expresar emociones con la voz: exclamación, orden, sorpresa y duda.",
    corto: "C'est génial ! · Viens ici ! · Ah bon ?! · Peut-être…",
    podras: ["Marcar el pico de la exclamación en la palabra clave: Quelle belle maison !", "Dar una orden con voz que baja fuerte y corta: Viens ici !", "Mostrar sorpresa (Ah bon ?!) y duda (Peut-être…) con la melodía."],
    iconos: ["ic2/corazon", "ic2/microfono", "ic2/rayo"],
    previos: ["La entonación de la pregunta (lección 49)."],
    capacidad: "Ahora tu voz dice lo que sientes."
  },
  requiere: R("fiq-totale", "fiq-partielle"), recupera: ["fiq-totale"],
  conceptos: {
    "fie-excl": { n: "exclamación: pico alto en la palabra clave; orden: bajada fuerte y corta", b: "phono" },
    "fie-surprise": { n: "sorpresa: subida alta (Ah bon ?!); duda: voz en suspenso (Peut-être…)", b: "phono" }
  },
  video: {
    titulo: "La voz de las emociones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "! · ?! · …", seg: [
        { es: "Hola. Con la misma voz no se puede sorprender y mandar." } ] },
      { v: "frase", filas: [
          { nota: "exclamación", p: 1, partes: [["C'est génial !", "-", 1]] },
          { nota: "orden", p: 2, partes: [["Viens ici !", "-", 2]] },
          { nota: "sorpresa", p: 3, partes: [["Ah bon ?", "-", 3]] } ], seg: [
        { es: "Exclamación, con un pico:", p: 1 }, { fr: "C'est génial !", p: 1 }, { es: "Orden, corta y hacia abajo:", p: 2 }, { fr: "Viens ici !", p: 2 }, { es: "Sorpresa, muy arriba:", p: 3 }, { fr: "Ah bon ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/sorpresa", q: "«Ah bon ?» expresa…", es: true, o: ["Sorpresa", "Una orden"], a: 0,
        bien: "¡Sí! ¿Ah, sí?", mal: "Ah bon con la voz arriba es sorpresa.",
        seg: [ { es: "Pausa. Ah bon." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["C'est génial !", "Bravo !", "Viens ici !", "Ah bon ?", "Peut-être…"], seg: [
        { es: "Sin melodía, la emoción se pierde.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La sorpresa", img: "bg-cafe", yo: "camila",
    escena: "Hugo llega de sorpresa a la fiesta de Camila.",
    pj: PJ,
    lineas: [
      ["camila", "Quelle bonne surprise ! Tu es arrivé quand ?", "¡Qué buena sorpresa! ¿Cuándo llegaste?"],
      ["hugo", "Ce matin ! Et je pars demain.", "¡Esta mañana! Y me voy mañana."],
      ["camila", "Ah bon ? Tu pars demain ? Mince !", "¿Ah, sí? ¿Te vas mañana? ¡Qué lástima!"],
      ["hugo", "Peut-être… je reste un jour de plus. Viens ici, on danse !", "Quizás… me quedo un día más. ¡Ven aquí, bailemos!"]
    ],
    fijate: "Fíjate: Quelle bonne surprise ! (pico); Ah bon ? (sorpresa); Mince ! (fastidio); Peut-être… (duda); Viens ici ! (orden)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Emociones en la voz",
      idea: "Exclamación: un pico alto en la palabra clave: Quelle belle maison ! Orden: bajada rápida y corta: Viens ici ! Assieds-toi. Sorpresa: subida muy alta: Ah bon ? Vraiment ? Duda: melodía que se queda arriba o se alarga: Euh… peut-être… Algunas interjecciones: Chouette ! (alegría), Mince ! (fastidio leve), Bof… (indiferencia).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "C'est génial ! · Super ! · Bravo !", es: "¡Genial! · ¡Súper! · ¡Bravo! — alegría" },
        { fr: "Quelle bonne idée ! · Quelle belle journée !", es: "¡Qué buena idea! · ¡Qué día tan bonito!" },
        { fr: "C'est magnifique !", es: "¡Es magnífico!" },
        { fr: "Viens ici ! · Tais-toi ! · Arrête !", es: "¡Ven aquí! · ¡Cállate! · ¡Para! — órdenes" },
        { fr: "Sors d'ici ! · Ça suffit !", es: "¡Sal de aquí! · ¡Basta! — enfado" },
        { fr: "Ah bon ? · Vraiment ?", es: "¿Ah, sí? · ¿En serio? — sorpresa" },
        { fr: "Peut-être…", es: "Quizás… — duda" },
        { fr: "Chouette ! · Mince ! · Bof…", es: "¡Genial! · ¡Vaya! · Bah… — alegría · fastidio · indiferencia" }
      ],
      ej: [["C'est magnifique !", "¡Es magnífico!"], ["Ah bon ? Tu pars demain ?", "¿Ah, sí? ¿Te vas mañana?"], ["Tais-toi !", "¡Cállate!"]],
      clave: "Cada emoción tiene su melodía." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est génial ! (con voz plana)", "C'est génial ! (con pico en -nial)", "Sin melodía, la emoción se pierde."], ["Quel belle surprise !", "Quelle belle surprise !", "Surprise es femenino: quelle."], ["Viens ici ? (subiendo)", "Viens ici ! (bajando)", "La orden baja fuerte y corta."]] }
  ],
  ejemplos: [
    { sit: "Te encanta una idea.", resp: "Quelle bonne idée !", pasos: ["Pico en bonne."], porque: "Exclamación." },
    { sit: "Te dan una noticia inesperada.", resp: "Ah bon ? Vraiment ?", pasos: ["Voz muy arriba."], porque: "Sorpresa." },
    { sit: "Quieres que alguien se acerque ya.", resp: "Viens ici !", pasos: ["Corta, hacia abajo."], porque: "Orden." }
  ],
  comprueba: [
    { q: "Una orden se dice…", o: ["con una bajada fuerte y corta", "con la voz muy arriba"], a: 0, b: "phono", porque: "Viens ici !" },
    { q: "Peut-être… con la voz en suspenso expresa…", o: ["duda", "alegría"], a: 0, b: "phono", porque: "Suspenso." },
    { q: "Mince ! expresa…", o: ["un fastidio leve", "una gran alegría"], a: 0, b: "phono", porque: "¡Vaya!" }
  ],
  practica: [
    { fase: "guiada", c: ["fie-excl"], k: "sort", ask: "¿Emoción positiva u orden y enfado?", q: "Clasifica.", cats: ["Emoción positiva", "Orden o enfado"], items: [["C'est génial !", 0], ["Super !", 0], ["Quelle bonne idée !", 0], ["Bravo !", 0], ["Tais-toi !", 1], ["Arrête !", 1], ["Sors d'ici !", 1], ["Ça suffit !", 1]], pista: "¿Alegra o manda?", why: "Emociones." },
    { fase: "guiada", c: ["fie-surprise"], k: "choice", es: true, say: "Ah bon ?", ask: "Escucha. ¿Qué expresa?", q: "Elige.", o: ["Sorpresa", "Una orden", "Enfado"], a: 0, pista: "Voz muy arriba.", why: "<b>Ah bon ?</b>" },
    { fase: "guiada", c: ["fie-excl"], k: "choice", es: true, say: "Viens ici !", ask: "Escucha. ¿Qué expresa?", q: "Elige.", o: ["Una orden", "Una duda", "Sorpresa"], a: 0, pista: "Corta y hacia abajo.", why: "<b>Viens ici !</b>" },
    { fase: "indep", c: ["fie-excl"], k: "fill", ask: "Escribe «Qué» (femenino).", q: "___ belle journée !", acc: ["Quelle", "quelle"], why: "<b>Quelle</b> belle journée !" },
    { fase: "indep", c: ["fie-surprise"], k: "choice", ask: "Te sorprende una noticia. ¿Qué dices?", q: "«___»", o: ["Vraiment ?", "Tais-toi !", "Bof…"], a: 0, why: "<b>Vraiment ?</b>: sorpresa." },
    { fase: "indep", c: ["fie-excl"], k: "spot", ask: "Encuentra el error.", s: "[Quel] belle surprise !", fix: "Quelle", why: "<b>Quelle</b> belle surprise." },
    { fase: "aplica", c: ["fie-excl", "fie-surprise"], k: "match", ask: "Une cada interjección con la emoción.", q: "Interjección → emoción", pairs: [["Chouette !", "alegría"], ["Mince !", "fastidio leve"], ["Ah bon ?", "sorpresa"], ["Bof…", "indiferencia"]], why: "Interjecciones." },
    { fase: "aplica", c: ["fie-surprise"], k: "choice", es: true, say: "Peut-être…", ask: "Escucha. ¿Cómo queda la voz?", q: "Elige.", o: ["Alargada, en suspenso", "Corta y abajo"], a: 0, why: "Duda." },
    { fase: "dominio", c: ["fie-excl"], k: "choice", ask: "Tu amigo propone una idea buenísima.", q: "«___»", o: ["Quelle bonne idée !", "Ça suffit !"], a: 0, why: "<b>Quelle bonne idée !</b>" },
    { fase: "dominio", c: ["fie-excl", "fie-surprise"], k: "order", ask: "Ordena: «¡Qué buena sorpresa!».", tokens: ["Quelle", "bonne", "surprise !"], why: "<b>Quelle bonne surprise !</b>" },
    { fase: "dominio", c: ["fie-excl", "fie-surprise"], k: "listen", say: "Quelle bonne surprise ! Tu es arrivé quand ?", acc: ["Quelle bonne surprise ! Tu es arrivé quand ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quelle bonne surprise ! Tu es arrivé quand ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "es", "arrivé", "quand", "ce", "matin", "et", "je", "pars", "demain", "reste", "un", "jour", "de", "plus", "on", "danse", "belle", "surprise", "maison", "assieds-toi", "euh"] }
};

E["fon-groupes-rythmiques"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les groupes rythmiques",
  objetivo: {
    que: "Vas a dividir la frase en grupos de sentido, con el acento al final de cada grupo.",
    corto: "Ce matin / j'ai pris le bus / pour aller à la fac.",
    podras: ["Cortar la frase en grupos de una idea (3 a 7 sílabas).", "Subir un poco la voz al final de cada grupo y bajarla en el último.", "No cortar entre determinante y nombre ni entre pronombre y verbo."],
    iconos: ["ic2/nota", "ic2/audifonos", "ic2/libro"],
    previos: ["El acento de grupo (lección 11) y el acento final (lección 48)."],
    capacidad: "Ahora lees frases largas con el ritmo francés."
  },
  requiere: R("fag-groupes", "fag-final", "faf-mot"), recupera: ["fag-groupes"],
  conceptos: {
    "fgr-couper": { n: "un grupo = una idea; no cortar entre ma / sœur ni nous / avons", b: "phono" },
    "fgr-melodie": { n: "acento al final de cada grupo; los grupos no finales suben ↗, el último baja ↘", b: "phono" }
  },
  video: {
    titulo: "Grupos rítmicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "… / … / …", seg: [
        { es: "Hola. La frase francesa se dice por bloques de sentido." } ] },
      { v: "frase", filas: [
          { nota: "grupo 1 ↗", p: 1, partes: [["Ce matin", "-", 1]] },
          { nota: "grupo 2 ↗", p: 2, partes: [["j'ai pris le bus", "-", 2]] },
          { nota: "grupo 3 ↘", p: 3, partes: [["pour aller à la fac.", "-", 3]] } ], seg: [
        { fr: "Ce matin", p: 1 }, { fr: "j'ai pris le bus", p: 2 }, { fr: "pour aller à la fac.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué corte es correcto?", es: true, o: ["Ma sœur / habite à Lyon.", "Ma / sœur habite / à Lyon."], a: 0,
        bien: "¡Sí! Ma y sœur van juntos.", mal: "No se corta entre ma y sœur.",
        seg: [ { es: "Pausa. ¿Dónde cortas?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Ce matin", "j'ai pris le bus", "Ma sœur", "habite à Lyon"], seg: [
        { es: "Grupos que suben, y el último baja.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo su fin de semana.",
    pj: PJ,
    lineas: [
      ["camila", "Le week-end dernier, je suis allé au cinéma.", "El fin de semana pasado fui al cine."],
      ["hugo", "Hier soir, mes amis et moi sommes allés au concert.", "Anoche, mis amigos y yo fuimos al concierto."],
      ["camila", "Ce matin, j'ai pris le bus pour aller à la fac.", "Esta mañana tomé el bus para ir a la universidad."],
      ["hugo", "Moi, quand il pleut, je reste à la maison.", "Yo, cuando llueve, me quedo en casa."]
    ],
    fijate: "Fíjate: Le week-end dernier / je suis allé / au cinéma. Hier soir / mes amis et moi / sommes allés / au concert."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Cortar en grupos",
      idea: "La frase se divide en grupos de sentido de 3 a 7 sílabas. Cada grupo lleva el acento en su última sílaba: derNIER / alLÉ / ciNÉma. Los grupos que no terminan la frase suben un poco ↗; el último baja ↘. No se corta entre el determinante y el nombre (ma / sœur) ni entre el pronombre y el verbo (nous / avons).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Le week-end dernier / je suis allé / au cinéma.", es: "El fin de semana pasado / fui / al cine. — 3 grupos" },
        { fr: "Ma sœur / habite à Lyon.", es: "Mi hermana / vive en Lyon. — 2 grupos" },
        { fr: "Mon ami / arrive demain.", es: "Mi amigo / llega mañana." },
        { fr: "Le soir / je lis.", es: "Por la noche / leo." },
        { fr: "À Paris / il fait froid.", es: "En París / hace frío." },
        { fr: "Nous avons / deux chats.", es: "Tenemos / dos gatos." },
        { fr: "Hier soir · mes amis et moi · sommes allés · au concert", es: "tiempo · sujeto · verbo · lugar" },
        { fr: "Quand il pleut / je reste à la maison.", es: "Cuando llueve / me quedo en casa." }
      ],
      ej: [["Ce matin / j'ai pris le bus / pour aller à la fac.", "Esta mañana / tomé el bus / para ir a la universidad."], ["Ma sœur / habite à Lyon.", "Mi hermana / vive en Lyon."], ["Quand il pleut / je reste à la maison.", "Cuando llueve / me quedo en casa."]],
      clave: "Una idea por grupo; nunca cortes ma / sœur ni nous / avons." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ma / sœur habite / à Lyon.", "Ma sœur / habite à Lyon.", "No se corta entre ma y sœur."], ["Ce matin, j'ai pri le bus.", "Ce matin, j'ai pris le bus.", "Pris lleva s, aunque no suene."], ["Nous / avons deux chats.", "Nous avons / deux chats.", "No se corta entre pronombre y verbo."]] }
  ],
  ejemplos: [
    { sit: "Divide: Ma sœur habite à Lyon.", resp: "Ma sœur / habite à Lyon.", pasos: ["Sujeto / verbo + lugar."], porque: "2 grupos." },
    { sit: "Divide: Le soir je lis.", resp: "Le soir / je lis.", pasos: ["Tiempo / acción."], porque: "2 grupos." },
    { sit: "¿Cómo va la voz al final de «Ce matin»?", resp: "Sube un poco ↗", pasos: ["La frase no ha terminado."], porque: "Grupo no final." }
  ],
  comprueba: [
    { q: "Un grupo rítmico tiene el acento…", o: ["en su última sílaba", "en su primera sílaba"], a: 0, b: "phono", porque: "Final de grupo." },
    { q: "Al final de un grupo que no termina la frase, la voz…", o: ["sube un poco", "baja mucho"], a: 0, b: "phono", porque: "↗" },
    { q: "Entre ma y sœur…", o: ["no se corta", "se corta"], a: 0, b: "phono", porque: "Determinante + nombre." }
  ],
  practica: [
    { fase: "guiada", c: ["fgr-couper"], k: "sort", ask: "¿Corte correcto o incorrecto?", q: "Clasifica.", cats: ["Correcto", "Incorrecto"], items: [["Mon ami / arrive demain", 0], ["Le soir / je lis", 0], ["À Paris / il fait froid", 0], ["Nous avons / deux chats", 0], ["Mon / ami arrive", 1], ["Le / soir je lis", 1], ["Nous / avons deux chats", 1], ["Il fait / froid à / Paris", 1]], pista: "No cortes determinante + nombre.", why: "Grupos." },
    { fase: "guiada", c: ["fgr-couper"], k: "choice", es: true, say: "Le week-end dernier, je suis allé au cinéma.", ask: "Escucha. ¿Cuántos grupos oyes?", q: "Elige.", o: ["3", "2", "5"], a: 0, pista: "Cuándo / qué / dónde.", why: "Tres grupos." },
    { fase: "guiada", c: ["fgr-melodie"], k: "choice", es: true, ask: "Al final de «Ce matin,», la voz…", q: "Elige.", o: ["Sube un poco", "Baja del todo"], a: 0, pista: "La frase sigue.", why: "↗" },
    { fase: "indep", c: ["fgr-couper"], k: "choice", ask: "¿Qué corte es correcto?", q: "«___»", o: ["Ma sœur / habite à Lyon.", "Ma / sœur habite / à Lyon."], a: 0, why: "<b>Ma sœur / habite à Lyon.</b>" },
    { fase: "indep", c: ["fgr-couper"], k: "fill", ask: "Completa el primer grupo: «Mi hermana / vive en Lyon».", q: "Ma ___ / habite à Lyon.", acc: ["sœur"], why: "<b>Ma sœur</b>: ma y sœur no se separan." },
    { fase: "indep", c: ["fgr-couper"], k: "spot", ask: "Encuentra el error.", s: "Ce matin , j'ai [pri] le bus .", fix: "pris", why: "<b>pris</b>." },
    { fase: "aplica", c: ["fgr-couper"], k: "match", ask: "Une cada grupo con su función.", q: "Grupo → función", pairs: [["Hier soir", "tiempo"], ["mes amis et moi", "sujeto"], ["sommes allés", "verbo"], ["au concert", "lugar"]], why: "Un grupo = una idea." },
    { fase: "aplica", c: ["fgr-melodie"], k: "choice", es: true, say: "Ma sœur habite à Lyon.", ask: "Escucha. ¿Dónde está el acento del primer grupo?", q: "Elige.", o: ["En sœur", "En ma"], a: 0, why: "<b>Ma sœur</b>: final del grupo." },
    { fase: "dominio", c: ["fgr-melodie"], k: "choice", es: true, ask: "En el último grupo de la frase, la voz…", q: "Elige.", o: ["Baja ↘", "Sube ↗"], a: 0, why: "Cierre de la frase." },
    { fase: "dominio", c: ["fgr-couper", "fgr-melodie"], k: "order", ask: "Ordena los grupos: «Esta mañana tomé el bus para ir a la universidad».", tokens: ["Ce matin,", "j'ai pris le bus", "pour aller à la fac."], why: "<b>Ce matin, j'ai pris le bus pour aller à la fac.</b>" },
    { fase: "dominio", c: ["fgr-couper", "fgr-melodie"], k: "listen", say: "Ce matin, j'ai pris le bus pour aller à la fac.", acc: ["Ce matin, j'ai pris le bus pour aller à la fac."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce matin, j'ai pris le bus pour aller à la fac.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Paris"], previo: ["le", "week-end", "dernier", "je", "suis", "allé", "au", "cinéma", "hier", "soir", "mes", "amis", "et", "moi", "sommes", "allés", "concert", "ce", "matin", "j'ai", "pris", "bus", "pour", "aller", "à", "la", "fac", "quand", "il", "pleut", "reste", "maison"] }
};

E["fon-mots-outils"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les petits mots sans accent : de, le, et, à",
  objetivo: {
    que: "Vas a pronunciar rápido y débil las palabras herramienta (le, de, à, et, je) y a fijar el oído en las palabras llenas.",
    corto: "du pain et de la confiture.",
    podras: ["Decir le, la, de, à, et, je sin acento, pegados a la palabra siguiente.", "Distinguir palabras llenas (nombres, verbos, adjetivos) de palabras herramienta.", "Usar las palabras llenas para entender lo esencial."],
    iconos: ["ic2/audifonos", "ic2/bombilla", "ic2/libro"],
    previos: ["La e que cae al hablar (lección 46) y los grupos rítmicos (lección 51)."],
    capacidad: "Ahora entiendes lo esencial aunque no oigas cada palabrita."
  },
  requiere: R("fem-chute", "fgr-couper"), recupera: ["fem-chute"],
  conceptos: {
    "fmo-faible": { n: "le, la, de, à, et, je, ne, que: sin acento, rápidos y pegados", b: "phono" },
    "fmo-plein": { n: "palabras llenas (nombres, verbos, adjetivos): llevan el sentido", b: "phono" }
  },
  video: {
    titulo: "Palabras herramienta", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "de · le · et · à", seg: [
        { es: "Hola. Las palabras pequeñas se dicen rápido; las importantes, claras." } ] },
      { v: "frase", filas: [
          { nota: "llenas", p: 1, partes: [["pain · confiture", "-", 1]] },
          { nota: "frase", p: 2, partes: [["du pain et de la confiture", "-", 2]] } ], seg: [
        { es: "Las palabras llenas se oyen claras:", p: 1 }, { fr: "pain, confiture", p: 1 }, { es: "Las demás, débiles y pegadas:", p: 2 }, { fr: "du pain et de la confiture", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué palabras llevan el sentido?", es: true, o: ["Nombres y verbos", "Artículos y preposiciones"], a: 0,
        bien: "¡Sí! Las palabras llenas.", mal: "Las pequeñas no llevan el sentido.",
        seg: [ { es: "Pausa. ¿Cuáles?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le", "de", "et", "à", "je", "voyage", "partir"], seg: [
        { es: "Escucha las palabras llenas; las demás, adivínalas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El desayuno", img: "bg-cafe", yo: "camila",
    escena: "Camila desayuna con Hugo antes de la playa.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu veux du pain et de la confiture ?", "¿Quieres pan y mermelada?"],
      ["camila", "Oui, merci. Après, je vais à la plage avec ma sœur et mon frère.", "Sí, gracias. Después voy a la playa con mi hermana y mi hermano."],
      ["hugo", "Ma sœur parle de son travail tout le temps.", "Mi hermana habla de su trabajo todo el tiempo."],
      ["camila", "Toi et moi, nous partons en vacances demain !", "¡Tú y yo nos vamos de vacaciones mañana!"]
    ],
    fijate: "Fíjate: pain, confiture, plage, sœur, frère, travail, vacances: claras. du, et, de la, à la, avec, son: débiles."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Llenas y herramienta",
      idea: "Las palabras gramaticales cortas (artículos, preposiciones, pronombres sujeto, conjunciones: le, la, de, à, et, je, ne, que) nunca llevan acento: se dicen rápido y débil, pegadas a la palabra siguiente: [dəlapɛ̃]. Su vocal se reduce o cae: je, le, de → [ʒ], [l], [d]. Por eso el oído debe fijarse en las palabras llenas: nombres, verbos y adjetivos.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le · la · de · à · et", es: "palabras herramienta — sin acento" },
        { fr: "du pain · de la confiture", es: "pan · mermelada" },
        { fr: "la plage · la voiture", es: "la playa · el carro" },
        { fr: "le voyage · rapide · partir · demain", es: "el viaje · rápido · irse · mañana — palabras llenas" },
        { fr: "Je mange du pain.", es: "Como pan. — llenas: mange, pain" },
        { fr: "Il va à la gare.", es: "Va a la estación. — llenas: va, gare" },
        { fr: "Elle parle de son travail.", es: "Habla de su trabajo. — llenas: parle, travail" },
        { fr: "Nous partons en vacances.", es: "Nos vamos de vacaciones. — llenas: partons, vacances" }
      ],
      ej: [["Je vais à la plage.", "Voy a la playa."], ["Il parle de son travail.", "Habla de su trabajo."], ["Toi et moi.", "Tú y yo."]],
      clave: "Palabras herramienta: rápidas; palabras llenas: claras." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["DE la confiture (acentuando de)", "de la confiture", "de y le son átonos: rápidos y débiles."], ["Il parle du sa famille.", "Il parle de sa famille.", "Ante sa: de, no du."], ["Querer oír cada palabrita", "Fijarse en las palabras llenas", "Las llenas llevan el sentido."]] }
  ],
  ejemplos: [
    { sit: "Oyes: «Il va à la gare».", resp: "va, gare", pasos: ["Palabras llenas: verbo y nombre."], porque: "El sentido." },
    { sit: "Di: «Je vais à la plage».", resp: "je, à, la: rápidos; vais, plage: claros", pasos: ["Átonas pegadas."], porque: "Ritmo." },
    { sit: "Di: «Toi et moi».", resp: "et: débil, pegado", pasos: ["Conjunción átona."], porque: "Sin acento." }
  ],
  comprueba: [
    { q: "Le, de, à, et se pronuncian…", o: ["rápido y débil", "fuerte y claro"], a: 0, b: "phono", porque: "Átonas." },
    { q: "El sentido de la frase lo llevan…", o: ["nombres, verbos y adjetivos", "artículos y preposiciones"], a: 0, b: "phono", porque: "Palabras llenas." },
    { q: "La palabra herramienta se pega…", o: ["a la palabra siguiente", "a la anterior, con pausa"], a: 0, b: "phono", porque: "de la confiture." }
  ],
  practica: [
    { fase: "guiada", c: ["fmo-plein", "fmo-faible"], k: "sort", ask: "¿Palabra llena o herramienta?", q: "Clasifica.", cats: ["Palabra llena", "Palabra herramienta"], items: [["le voyage", 0], ["rapide", 0], ["partir", 0], ["demain", 0], ["le", 1], ["de", 1], ["et", 1], ["à", 1]], pista: "¿Lleva sentido por sí sola?", why: "Llenas / herramienta." },
    { fase: "guiada", c: ["fmo-plein"], k: "choice", es: true, say: "du pain et de la confiture", ask: "Escucha. ¿Qué palabras oyes más claras?", q: "Elige.", o: ["pain y confiture", "du y de la"], a: 0, pista: "Las llenas.", why: "<b>pain, confiture</b>." },
    { fase: "guiada", c: ["fmo-faible"], k: "choice", ask: "¿Cuál es una palabra herramienta?", q: "«___»", o: ["le", "la voiture", "partir"], a: 0, pista: "Artículo.", why: "<b>le</b>: sin acento." },
    { fase: "indep", c: ["fmo-faible"], k: "fill", ask: "Escribe la preposición «a».", q: "Je vais ___ la bibliothèque.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["fmo-plein"], k: "choice", es: true, ask: "Para entender lo esencial, fíjate en…", q: "Elige.", o: ["Nombres y verbos", "Artículos y preposiciones"], a: 0, why: "Palabras llenas." },
    { fase: "indep", c: ["fmo-faible"], k: "spot", ask: "Encuentra el error.", s: "Il parle [du] sa famille .", fix: "de", why: "<b>de sa famille</b>." },
    { fase: "aplica", c: ["fmo-plein"], k: "match", ask: "Une cada frase con sus palabras llenas.", q: "Frase → palabras llenas", pairs: [["Je mange du pain.", "mange, pain"], ["Il va à la gare.", "va, gare"], ["Elle parle de son travail.", "parle, travail"], ["Nous partons en vacances.", "partons, vacances"]], why: "Las que llevan el sentido." },
    { fase: "aplica", c: ["fmo-faible", "fmo-plein"], k: "choice", es: true, say: "Toi et moi, nous partons en vacances demain.", ask: "Escucha. ¿Qué entiendes?", q: "Elige.", o: ["Tú y yo nos vamos de vacaciones mañana.", "Tú y yo trabajamos mañana."], a: 0, why: "partons, vacances, demain." },
    { fase: "dominio", c: ["fmo-plein"], k: "choice", ask: "¿Cuál es una palabra llena?", q: "«___»", o: ["la voiture", "de", "et"], a: 0, why: "<b>voiture</b>: nombre." },
    { fase: "dominio", c: ["fmo-faible", "fmo-plein"], k: "order", ask: "Ordena: «Voy a la playa con mi hermana».", tokens: ["Je vais", "à la plage", "avec ma sœur."], why: "<b>Je vais à la plage avec ma sœur.</b>" },
    { fase: "dominio", c: ["fmo-faible", "fmo-plein"], k: "listen", say: "Je vais à la plage avec ma sœur et mon frère.", acc: ["Je vais à la plage avec ma sœur et mon frère."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vais à la plage avec ma sœur et mon frère.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["tu", "veux", "oui", "merci", "après", "je", "vais", "avec", "ma", "sœur", "mon", "frère", "parle", "son", "tout", "temps", "toi", "moi", "nous", "partons", "en", "sa", "famille", "bibliothèque", "il", "va", "elle"] }
};

E["fon-lire-ponctuation"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Lire à voix haute : pauses et ponctuation",
  objetivo: {
    que: "Vas a leer en voz alta respetando la puntuación: coma, punto, dos puntos y puntos suspensivos.",
    corto: "Il pleut, ↗ donc je reste ici. ↘",
    podras: ["Hacer una pausa breve con la voz arriba en la coma.", "Hacer una pausa larga con la voz abajo en el punto.", "Leer los dos puntos como anuncio y los puntos suspensivos en suspenso."],
    iconos: ["ic2/libro", "ic2/microfono", "ic2/pergamino"],
    previos: ["Los grupos rítmicos (lección 51)."],
    capacidad: "Ahora lees en voz alta para que te entiendan."
  },
  requiere: R("fgr-couper", "fgr-melodie"), recupera: ["fgr-melodie"],
  conceptos: {
    "flp-pauses": { n: "coma: pausa breve, voz arriba; punto: pausa larga, voz abajo", b: "phono" },
    "flp-signes": { n: "dos puntos: anuncio; puntos suspensivos: suspenso; espacio antes de ; : ! ?", b: "phono" }
  },
  video: {
    titulo: "Leer con la puntuación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: ", · . · : · …", seg: [
        { es: "Hola. La puntuación te dice cuándo respirar y hacia dónde va la voz." } ] },
      { v: "frase", filas: [
          { nota: "coma ↗", p: 1, partes: [["Il pleut,", "-", 1]] },
          { nota: "punto ↘", p: 2, partes: [["donc je reste ici.", "-", 2]] },
          { nota: "suspenso", p: 3, partes: [["Bon… on verra.", "-", 3]] } ], seg: [
        { fr: "Il pleut,", p: 1 }, { fr: "donc je reste ici.", p: 2 }, { fr: "Bon… on verra.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En una coma, la voz…", es: true, o: ["Sube un poco y se detiene brevemente", "Baja del todo y para mucho"], a: 0,
        bien: "¡Sí! La coma no cierra.", mal: "Eso es el punto.",
        seg: [ { es: "Pausa. La coma." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la virgule", "le point", "les deux-points", "le point-virgule"], seg: [
        { es: "Coma, breve y arriba. Punto, largo y abajo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La lectura en clase", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee un texto en voz alta.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, lis le texte, s'il te plaît.", "Camila, lee el texto, por favor."],
      ["camila", "Il pleut, donc je reste à la maison ce soir.", "Llueve, así que me quedo en casa esta noche."],
      ["camila", "Mon frère a dit : « Je reviens demain. » Bon… on verra.", "Mi hermano dijo: «Vuelvo mañana». Bueno… ya veremos."],
      ["sofia", "Bravo ! Tu respectes les virgules et les points. C'est fini.", "¡Bravo! Respetas las comas y los puntos. Terminamos."]
    ],
    fijate: "Fíjate: pleut, (pausa breve ↗) · ce soir. (pausa larga ↘) · a dit : (anuncio) · Bon… (suspenso)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Los signos y la voz",
      idea: "La virgule (,): pausa breve, voz un poco arriba. Le point (.): pausa larga, voz abajo. Les deux-points (:): pausa y tono de anuncio, antes de una explicación o una cita. Les points de suspension (…): voz en suspenso. En la tipografía francesa hay un espacio antes de ; : ! ? y las comillas son « ».",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la virgule", es: "la coma — pausa breve ↗" },
        { fr: "le point", es: "el punto — pausa larga ↘" },
        { fr: "les deux-points", es: "los dos puntos — anuncio" },
        { fr: "le point-virgule", es: "el punto y coma" },
        { fr: "Il pleut, · Quand il fait beau, · D'abord, · Si tu veux,", es: "Llueve, · Cuando hace buen tiempo, · Primero, · Si quieres, — siguen ↗" },
        { fr: "Il pleut. · C'est fini. · À demain. · Merci beaucoup.", es: "Llueve. · Se terminó. · Hasta mañana. · Muchas gracias. — cierran ↘" },
        { fr: "donc · Bon… on verra.", es: "así que · Bueno… ya veremos." },
        { fr: "Je reviens.", es: "Vuelvo." }
      ],
      ej: [["Il pleut, donc je reste ici.", "Llueve, así que me quedo aquí."], ["Il a dit : « Je reviens. »", "Dijo: «Vuelvo»."], ["Bon… on verra.", "Bueno… ya veremos."]],
      clave: "Coma: breve y arriba. Punto: largo y abajo. Dos puntos: anuncio." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Leer sin pausas en las comas", "Respetar la puntuación", "Las pausas ayudan a entender."], ["Il a dis : « Je reviens demain. »", "Il a dit : « Je reviens demain. »", "Participio de dire: dit."], ["Il a dit: «Je reviens.» (sin espacios)", "Il a dit : « Je reviens. »", "En francés: espacio antes de : y dentro de « »."]] }
  ],
  ejemplos: [
    { sit: "Lees: «Il pleut, donc je reste ici.»", resp: "pausa breve tras pleut", pasos: ["Coma: voz arriba."], porque: "La frase sigue." },
    { sit: "Lees: «C'est fini.»", resp: "voz abajo, pausa larga", pasos: ["Punto."], porque: "Cierra." },
    { sit: "Lees: «Il a dit : …»", resp: "pausa y tono de anuncio", pasos: ["Dos puntos."], porque: "Viene una cita." }
  ],
  comprueba: [
    { q: "En el punto, la voz…", o: ["baja y hace una pausa larga", "sube y sigue"], a: 0, b: "phono", porque: "Cierre." },
    { q: "Los dos puntos anuncian…", o: ["una explicación o una cita", "el final del texto"], a: 0, b: "phono", porque: "Anuncio." },
    { q: "En francés, antes de ? y ! se pone…", o: ["un espacio", "nada"], a: 0, b: "phono", porque: "Tipografía francesa." }
  ],
  practica: [
    { fase: "guiada", c: ["flp-pauses"], k: "sort", ask: "¿Sigue o cierra?", q: "Clasifica.", cats: ["Sigue (coma, pausa corta)", "Cierra (punto, pausa larga)"], items: [["Il pleut,", 0], ["Quand il fait beau,", 0], ["D'abord,", 0], ["Si tu veux,", 0], ["Il pleut.", 1], ["C'est fini.", 1], ["À demain.", 1], ["Merci beaucoup.", 1]], pista: "Mira el signo.", why: "Coma / punto." },
    { fase: "guiada", c: ["flp-pauses"], k: "choice", es: true, say: "Il pleut, donc je reste ici.", ask: "Escucha. ¿Dónde está la pausa?", q: "Elige.", o: ["Después de «pleut»", "Después de «reste»"], a: 0, pista: "Donde va la coma.", why: "<b>Il pleut,</b> ↗" },
    { fase: "guiada", c: ["flp-signes"], k: "choice", es: true, ask: "Los dos puntos anuncian…", q: "Elige.", o: ["Una explicación o una cita", "Una pregunta"], a: 0, pista: "Il a dit : …", why: "Anuncio." },
    { fase: "indep", c: ["flp-signes"], k: "choice", es: true, ask: "En francés, ¿qué va antes de ? y de !?", q: "Elige.", o: ["un espacio", "nada", "una coma"], a: 0, why: "Tipografía francesa." },
    { fase: "indep", c: ["flp-pauses"], k: "choice", ask: "¿Qué frase pide una voz que baja y una pausa larga?", q: "«___»", o: ["C'est fini.", "D'abord,"], a: 0, why: "<b>C'est fini.</b>: punto." },
    { fase: "indep", c: ["flp-signes"], k: "spot", ask: "Encuentra el error.", s: "Il a [dis] : « Je reviens demain . »", fix: "dit", why: "<b>Il a dit</b>." },
    { fase: "aplica", c: ["flp-signes"], k: "match", ask: "Une cada nombre con su signo.", q: "Nombre → signo", pairs: [["la virgule", ","], ["le point", "."], ["les deux-points", ":"], ["le point-virgule", ";"]], why: "Signos." },
    { fase: "aplica", c: ["flp-signes"], k: "choice", es: true, say: "Bon… on verra.", ask: "Escucha. ¿Cómo queda la voz en «Bon…»?", q: "Elige.", o: ["En suspenso", "Cortada y abajo"], a: 0, why: "Puntos suspensivos." },
    { fase: "dominio", c: ["flp-pauses"], k: "choice", es: true, say: "Quand il fait beau, je vais à la plage.", ask: "Escucha. ¿Cómo va la voz en «beau,»?", q: "Elige.", o: ["Sube un poco: la frase sigue", "Baja: la frase termina"], a: 0, why: "Coma ↗." },
    { fase: "dominio", c: ["flp-pauses", "flp-signes"], k: "order", ask: "Ordena: «Dijo: Vuelvo mañana».", tokens: ["Il a dit :", "« Je reviens", "demain. »"], why: "<b>Il a dit : « Je reviens demain. »</b>" },
    { fase: "dominio", c: ["flp-pauses", "flp-signes"], k: "listen", say: "Il pleut, donc je reste à la maison ce soir.", acc: ["Il pleut, donc je reste à la maison ce soir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il pleut, donc je reste à la maison ce soir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["lis", "le", "texte", "s'il", "te", "plaît", "je", "reste", "à", "la", "maison", "ce", "soir", "mon", "frère", "a", "dit", "demain", "bravo", "tu", "respectes", "les", "virgules", "et", "points", "il", "ici", "vais", "plage", "beau", "fait"] }
};

E["fon-nombres-liaison"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les nombres et les liaisons",
  objetivo: {
    que: "Vas a decir los números con su liaison: deux‿ans, six‿heures, vingt‿euros, y callar la consonante ante otra consonante.",
    corto: "deux‿ans · six livres · huit jours.",
    podras: ["Hacer la liaison de un, deux, trois ante vocal: deux‿euros.", "Decir six y dix en sus tres formas: [sis], [si], [siz].", "Decir huit, neuf y vingt según lo que sigue."],
    iconos: ["ic2/moneda", "ic2/reloj-arena", "ic2/audifonos"],
    previos: ["Pronunciar los números (lección 15) y las liaisons obligatorias (lección 41)."],
    capacidad: "Ahora dices precios, horas y edades con naturalidad."
  },
  requiere: R("fnb-final", "fnb-liaison", "flo-son"), recupera: ["fnb-liaison"],
  conceptos: {
    "fnl-liaison": { n: "un, deux, trois, six, dix, vingt + vocal: liaison (deux‿ans, vingt‿euros)", b: "phono" },
    "fnl-consonne": { n: "ante consonante: six, dix, huit callan su final (six livres, huit jours)", b: "phono" }
  },
  video: {
    titulo: "Números y liaison", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "six · six livres · six‿ans", seg: [
        { es: "Hola. El número cambia según la palabra que lo sigue." } ] },
      { v: "frase", filas: [
          { nota: "+ vocal", p: 1, partes: [["deux ans · vingt euros", "-", 1]] },
          { nota: "+ consonante", p: 2, partes: [["six livres · huit jours", "-", 2]] },
          { nota: "f → v", p: 3, partes: [["neuf heures", "-", 3]] } ], seg: [
        { es: "Ante vocal, se une:", p: 1 }, { fr: "deux ans, vingt euros", p: 1 }, { es: "Ante consonante, se calla:", p: 2 }, { fr: "six livres, huit jours", p: 2 }, { fr: "neuf heures", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo veinte años.»", o: ["J'ai vingt ans.", "J'ai vin ans."], a: 0,
        bien: "¡Sí! Vingt‿ans, con [t].", mal: "Veinte: vingt.",
        seg: [ { es: "Pausa. Veinte años." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["deux ans", "six heures", "dix euros", "huit jours", "neuf heures", "vingt ans"], seg: [
        { es: "Vocal: une. Consonante: calla.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el mercado", img: "bg-paris", yo: "camila",
    escena: "Camila compra en el mercado con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Il est six heures et j'ai vingt euros.", "Son las seis y tengo veinte euros."],
      ["hugo", "Les pommes coûtent deux euros. Prends deux pommes !", "Las manzanas cuestan dos euros. ¡Toma dos manzanas!"],
      ["camila", "Et ce livre ? Ça coûte dix euros. J'ai six livres à acheter pour huit jours de cours !", "¿Y este libro? Cuesta diez euros. ¡Tengo seis libros que comprar para ocho días de clase!"],
      ["hugo", "Mon frère a dix-huit ans et il achète ses livres d'occasion.", "Mi hermano tiene dieciocho años y compra sus libros de segunda mano."]
    ],
    fijate: "Fíjate: six‿heures, vingt‿euros, deux‿euros, dix‿euros [z/t]; deux pommes, six livres, huit jours (sin liaison); dix-huit [dizɥit]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Números según lo que sigue",
      idea: "un, deux, trois: liaison ante vocal: un‿an, deux‿euros, trois‿heures. six y dix: [sis], [dis] solos; [si], [di] ante consonante; [siz], [diz] ante vocal. huit: [ɥit] solo o ante vocal; [ɥi] ante consonante: huit jours. neuf: [nœf], pero [nœv] en neuf‿ans, neuf‿heures. vingt: [vɛ̃]; [vɛ̃t] ante vocal y de 21 a 29.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "deux ans · deux euros", es: "dos años · dos euros — [z]" },
        { fr: "deux pommes", es: "dos manzanas — sin liaison" },
        { fr: "six heures · six euros", es: "las seis · seis euros — [z]" },
        { fr: "six livres · six chats", es: "seis libros · seis gatos — [si]" },
        { fr: "dix ans · dix euros", es: "diez años · diez euros — [z]" },
        { fr: "dix livres", es: "diez libros — [di]" },
        { fr: "huit · huit ans · huit jours", es: "ocho · ocho años · ocho días — [ɥit] · [ɥit] · [ɥi]" },
        { fr: "neuf heures", es: "las nueve — [nœvœʁ]" },
        { fr: "vingt ans · vingt euros", es: "veinte años · veinte euros — [vɛ̃t]" },
        { fr: "dix-huit", es: "dieciocho — [dizɥit]" }
      ],
      ej: [["J'ai vingt ans.", "Tengo veinte años."], ["Il est six heures.", "Son las seis."], ["Ça coûte dix euros.", "Cuesta diez euros."]],
      clave: "Ante vocal se une; ante consonante se calla." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["dix livres [dis livʁ]", "dix livres [di livʁ]", "Ante consonante, la x de dix no suena."], ["Mon frère a dis-huit ans.", "Mon frère a dix-huit ans.", "Dieciocho: dix-huit."], ["huit jours [ɥit ʒuʁ]", "huit jours [ɥi ʒuʁ]", "Ante consonante, la t de huit se calla."]] }
  ],
  ejemplos: [
    { sit: "«Tengo veinte años.»", resp: "J'ai vingt‿ans.", pasos: ["vingt + vocal: [t]."], porque: "Liaison." },
    { sit: "«seis libros»", resp: "six livres [si livʁ]", pasos: ["Ante consonante: x muda."], porque: "Se calla." },
    { sit: "«Son las nueve.»", resp: "Il est neuf‿heures.", pasos: ["f → v."], porque: "[nœvœʁ]." }
  ],
  comprueba: [
    { q: "En six ans, six suena…", o: ["[siz]", "[si]"], a: 0, b: "phono", porque: "Ante vocal." },
    { q: "En huit jours, huit suena…", o: ["[ɥi]", "[ɥit]"], a: 0, b: "phono", porque: "Ante consonante." },
    { q: "En vingt euros, la t…", o: ["suena", "no suena"], a: 0, b: "phono", porque: "Liaison." }
  ],
  practica: [
    { fase: "guiada", c: ["fnl-liaison", "fnl-consonne"], k: "sort", ask: "¿Se oye la consonante final del número?", q: "Clasifica.", cats: ["Sí", "No"], items: [["dix ans", 0], ["six euros", 0], ["huit", 0], ["neuf heures", 0], ["dix livres", 1], ["six chats", 1], ["huit jours", 1], ["deux pommes", 1]], pista: "¿Vocal o consonante después?", why: "Números." },
    { fase: "guiada", c: ["fnl-consonne"], k: "choice", es: true, say: "six livres", ask: "Escucha. ¿Cómo suena six?", q: "Elige.", o: ["[si]", "[sis]", "[siz]"], a: 0, pista: "Ante consonante.", why: "<b>six livres</b>." },
    { fase: "guiada", c: ["fnl-liaison"], k: "choice", es: true, say: "six ans", ask: "Escucha. ¿Cómo suena six?", q: "Elige.", o: ["[siz]", "[si]", "[sis]"], a: 0, pista: "Ante vocal.", why: "<b>six‿ans</b>." },
    { fase: "indep", c: ["fnl-liaison"], k: "fill", ask: "Escribe 20 en letras.", q: "J'ai ___ ans.", acc: ["vingt"], why: "<b>vingt‿ans</b>." },
    { fase: "indep", c: ["fnl-liaison"], k: "choice", es: true, say: "neuf heures", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[nœvœʁ]", "[nœfœʁ]"], a: 0, why: "<b>neuf‿heures</b>." },
    { fase: "indep", c: ["fnl-consonne"], k: "spot", ask: "Encuentra el error.", s: "Mon frère a [dis-huit] ans .", fix: "dix-huit", why: "<b>dix-huit</b>." },
    { fase: "aplica", c: ["fnl-liaison"], k: "match", ask: "Une cada grupo con su pronunciación.", q: "Grupo → sonido", pairs: [["deux ans", "[døzɑ̃]"], ["dix euros", "[dizøʁo]"], ["huit ans", "[ɥitɑ̃]"], ["vingt euros", "[vɛ̃tøʁo]"]], why: "Liaison de números." },
    { fase: "aplica", c: ["fnl-consonne"], k: "choice", es: true, say: "huit jours", ask: "Escucha. ¿Se oye la t de huit?", q: "Elige.", o: ["No: [ɥi ʒuʁ]", "Sí: [ɥit ʒuʁ]"], a: 0, why: "<b>huit jours</b>." },
    { fase: "dominio", c: ["fnl-consonne"], k: "choice", ask: "«Las manzanas cuestan dos euros.»", q: "«Les pommes coûtent ___ euros.»", o: ["deux", "dix"], a: 0, why: "<b>deux‿euros</b>." },
    { fase: "dominio", c: ["fnl-liaison", "fnl-consonne"], k: "order", ask: "Ordena: «Son las seis y tengo veinte euros».", tokens: ["Il est six heures", "et j'ai", "vingt euros."], why: "<b>Il est six heures et j'ai vingt euros.</b>" },
    { fase: "dominio", c: ["fnl-liaison", "fnl-consonne"], k: "listen", say: "Il est six heures et j'ai vingt euros.", acc: ["Il est six heures et j'ai vingt euros.", "Il est 6 heures et j'ai 20 euros."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il est six heures et j'ai vingt euros.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["il", "est", "et", "j'ai", "les", "coûtent", "prends", "ce", "livre", "ça", "coûte", "à", "acheter", "pour", "de", "cours", "mon", "frère", "a", "achète", "ses", "d'occasion"] }
};

/* ───── FON·9 · Gramática que se oye (o no) (lecciones 55 a 59) ───── */
E["fon-3e-pluriel"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Il parle / ils parlent : même son",
  objetivo: {
    que: "Vas a saber que la -ent de los verbos nunca suena y en qué verbos el plural sí se oye.",
    corto: "il parle = ils parlent · il finit ≠ ils finissent.",
    podras: ["Callar siempre la -ent verbal: ils chantent [ʃɑ̃t].", "Oír el plural en verbos como finir, prendre, boire, venir.", "Pronunciar la -ent de adverbios y nombres: souvent, le vent."],
    iconos: ["ic2/amigos", "ic2/audifonos", "ic2/lapiz"],
    previos: ["Letras finales mudas: la -ent de los verbos (lección 6)."],
    capacidad: "Ahora no dices «parlent» con -ent sonora."
  },
  requiere: R("fm-ent", "fm-finales"), recupera: ["fm-ent"],
  conceptos: {
    "f3p-muet": { n: "-ent verbal muda: il parle = ils parlent [paʁl]", b: "phono" },
    "f3p-audible": { n: "plural audible: ils finissent, ils prennent, ils boivent; souvent sí suena", b: "phono" }
  },
  video: {
    titulo: "Il parle, ils parlent", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "-ent", seg: [
        { es: "Hola. La e ene te de los verbos nunca se pronuncia." } ] },
      { v: "dos",
        a: { tag: "singular", fr: "Il chante.", es: "canta" },
        b: { tag: "plural", fr: "Ils chantent.", es: "cantan" },
        seg: [ { es: "Singular:", p: 1 }, { fr: "Il chante.", p: 1 }, { es: "Plural, suena igual:", p: 2 }, { fr: "Ils chantent.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mis amigos hablan muy bien francés.»", o: ["Mes amis parlent très bien français.", "Mes amis parle très bien français."], a: 0,
        bien: "¡Sí! Se escribe -ent, aunque no suene.", mal: "Plural: parlent.",
        seg: [ { es: "Pausa. Hablan." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ils chantent", "ils finissent", "ils prennent", "ils boivent", "souvent"], seg: [
        { es: "En el verbo, -ent muda. En souvent, suena.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El coro", img: "bg-universidad", yo: "camila",
    escena: "Camila habla con Hugo del coro de la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Mes amis chantent souvent dans le chœur.", "Mis amigos cantan a menudo en el coro."],
      ["hugo", "Et ils finissent tard ?", "¿Y terminan tarde?"],
      ["camila", "Oui. Après, ils prennent le bus et ils boivent un café.", "Sí. Después toman el bus y se toman un café."],
      ["hugo", "Mes parents viennent ce soir. Ils veulent écouter le concert !", "Mis papás vienen esta noche. ¡Quieren escuchar el concierto!"]
    ],
    fijate: "Fíjate: chantent [ʃɑ̃t] (como chante); finissent, prennent, boivent, viennent, veulent (el plural se oye); souvent [suvɑ̃]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Singular y plural",
      idea: "La -ent del verbo nunca suena: ils chantent [ʃɑ̃t]. En los verbos en -er, singular y plural suenan igual; el plural se nota en el sujeto o en la liaison: il‿aime / ils‿aiment [ilzɛm]. En los verbos en -ir (-iss-) y en muchos irregulares, el plural sí se oye: il finit / ils finissent, il prend / ils prennent, il boit / ils boivent. Ojo: la -ent de adverbios y nombres sí suena: souvent, le vent.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "il chante · ils chantent", es: "canta · cantan — suenan igual" },
        { fr: "il parle · ils parlent", es: "habla · hablan — suenan igual" },
        { fr: "elles jouent · ils travaillent · elles regardent", es: "juegan · trabajan · miran — -ent muda" },
        { fr: "ils mangent · ils arrivent", es: "comen · llegan — -ent muda" },
        { fr: "il finit · ils finissent", es: "termina · terminan — se oye [s]" },
        { fr: "il prend · ils prennent", es: "toma · toman — se oye [n]" },
        { fr: "il boit · ils boivent", es: "bebe · beben — se oye [v]" },
        { fr: "il vient · ils viennent", es: "viene · vienen" },
        { fr: "il peut · ils peuvent · il veut · ils veulent", es: "puede · pueden · quiere · quieren" },
        { fr: "il fait · ils font · il va · ils vont", es: "hace · hacen · va · van" },
        { fr: "il écrit · elles écrivent", es: "escribe · escriben — se oye [v]" },
        { fr: "souvent · le vent", es: "a menudo · el viento — aquí -ent suena [ɑ̃]" }
      ],
      ej: [["Il chante. Ils chantent.", "Canta. Cantan. (suenan igual)"], ["Elle écrit. Elles écrivent.", "Escribe. Escriben. (se oye la v)"], ["Ils arrivent souvent en retard.", "A menudo llegan tarde."]],
      clave: "-ent de verbo: muda. -ent de souvent: suena." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils parlent [paʁlɑ̃]", "ils parlent [paʁl]", "La -ent del verbo no se pronuncia."], ["Mes amis parle très bien français.", "Mes amis parlent très bien français.", "No suena, pero se escribe: -ent."], ["souvent [suv]", "souvent [suvɑ̃]", "No es un verbo: -ent suena."]] }
  ],
  ejemplos: [
    { sit: "«Cantan.»", resp: "Ils chantent. [ʃɑ̃t]", pasos: ["-ent muda."], porque: "Igual que il chante." },
    { sit: "«Terminan.»", resp: "Ils finissent. [finis]", pasos: ["El plural se oye."], porque: "Verbo en -iss-." },
    { sit: "«a menudo»", resp: "souvent [suvɑ̃]", pasos: ["Adverbio: -ent suena."], porque: "No es verbo." }
  ],
  comprueba: [
    { q: "La -ent de ils chantent…", o: ["no suena", "suena [ɑ̃]"], a: 0, b: "phono", porque: "Verbo." },
    { q: "En ils finissent, el plural…", o: ["se oye", "no se oye"], a: 0, b: "phono", porque: "[finis]." },
    { q: "La -ent de souvent…", o: ["suena [ɑ̃]", "no suena"], a: 0, b: "phono", porque: "Adverbio." }
  ],
  practica: [
    { fase: "guiada", c: ["f3p-muet", "f3p-audible"], k: "sort", ask: "¿El plural cambia el sonido?", q: "Clasifica.", cats: ["No (suena igual)", "Sí (cambia)"], items: [["ils chantent", 0], ["elles jouent", 0], ["ils travaillent", 0], ["elles regardent", 0], ["ils prennent", 1], ["ils finissent", 1], ["ils veulent", 1], ["ils viennent", 1]], pista: "Verbos en -er: igual.", why: "Plural oral." },
    { fase: "guiada", c: ["f3p-muet"], k: "choice", es: true, say: "Ils mangent.", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[mɑ̃ʒ]", "[mɑ̃ʒɑ̃]"], a: 0, pista: "-ent muda.", why: "<b>ils mangent</b>." },
    { fase: "guiada", c: ["f3p-audible"], k: "choice", es: true, say: "Ils finissent.", ask: "Escucha. ¿Singular o plural?", q: "Elige.", o: ["Plural: se oye [s]", "Singular"], a: 0, pista: "-iss-.", why: "<b>ils finissent</b>." },
    { fase: "indep", c: ["f3p-audible"], k: "fill", ask: "Escribe el plural.", q: "il écrit → ils ___", acc: ["écrivent"], why: "<b>écrivent</b>." },
    { fase: "indep", c: ["f3p-audible"], k: "choice", ask: "¿En qué par se oye la diferencia?", q: "«___»", o: ["il boit / ils boivent", "il chante / ils chantent"], a: 0, why: "<b>boivent</b>: se oye la v." },
    { fase: "indep", c: ["f3p-muet"], k: "spot", ask: "Encuentra el error.", s: "Mes amis [parle] très bien français .", fix: "parlent", why: "<b>parlent</b>." },
    { fase: "aplica", c: ["f3p-audible"], k: "match", ask: "Une cada singular con su plural.", q: "Singular → plural", pairs: [["il vient", "ils viennent"], ["il peut", "ils peuvent"], ["il fait", "ils font"], ["il va", "ils vont"]], why: "Plurales que se oyen." },
    { fase: "aplica", c: ["f3p-muet", "f3p-audible"], k: "choice", es: true, say: "souvent", ask: "Escucha. ¿Suena la -ent?", q: "Elige.", o: ["Sí, [suvɑ̃]", "No, [suv]"], a: 0, why: "<b>souvent</b>: adverbio." },
    { fase: "dominio", c: ["f3p-muet"], k: "choice", ask: "«Cantan a menudo.»", q: "«Ils ___ souvent.»", o: ["chantent", "chante"], a: 0, why: "<b>Ils chantent</b>." },
    { fase: "dominio", c: ["f3p-muet", "f3p-audible"], k: "order", ask: "Ordena: «Mis papás beben café».", tokens: ["Mes parents", "boivent", "du café."], why: "<b>Mes parents boivent du café.</b>" },
    { fase: "dominio", c: ["f3p-muet", "f3p-audible"], k: "listen", say: "Mes amis chantent souvent et ils finissent tard.", acc: ["Mes amis chantent souvent et ils finissent tard."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes amis chantent souvent et ils finissent tard.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["mes", "amis", "dans", "le", "chœur", "et", "tard", "oui", "après", "bus", "un", "café", "parents", "ce", "soir", "écouter", "concert", "très", "bien", "français", "du", "en", "retard", "elle", "il", "aime", "aiment"] }
};

E["fon-pluriel-oral"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le pluriel à l'oral : écouter le déterminant",
  objetivo: {
    que: "Vas a oír el plural en el determinante y en la liaison, porque la s final no suena.",
    corto: "le livre / les livres: [lə] / [le].",
    podras: ["Saber que livre y livres suenan igual.", "Oír el plural en le / les, un / des, mon / mes y en la liaison.", "Reconocer los plurales que sí se oyen: des yeux, des chevaux, des travaux."],
    iconos: ["ic2/libros", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Las liaisons obligatorias (lección 41) y il parle / ils parlent (lección 55)."],
    capacidad: "Ahora sabes si te hablan de uno o de varios."
  },
  requiere: R("flo-cas", "f3p-muet"), recupera: ["flo-cas"],
  conceptos: {
    "fpo-det": { n: "la s del plural no suena: se oye le / les, un / des, mon / mes y la liaison", b: "phono" },
    "fpo-irreg": { n: "plurales que se oyen: un œil / des yeux, un cheval / des chevaux, un travail / des travaux", b: "phono" }
  },
  video: {
    titulo: "El plural se oye antes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "le · les", seg: [
        { es: "Hola. En francés, la ese del plural no suena." } ] },
      { v: "dos",
        a: { tag: "singular [lə]", fr: "le livre", es: "el libro" },
        b: { tag: "plural [le]", fr: "les livres", es: "los libros" },
        seg: [ { es: "Escucha el artículo:", p: 1 }, { fr: "le livre", p: 1 }, { es: "Livre suena igual; cambia les:", p: 2 }, { fr: "les livres", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Compré dos libros ayer.»", o: ["J'ai acheté deux livres hier.", "J'ai acheté deux livre hier."], a: 0,
        bien: "¡Sí! La s no suena, pero se escribe.", mal: "Plural: livres, con s.",
        seg: [ { es: "Pausa. Dos libros." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le livre", "les livres", "mon ami", "mes amis", "des yeux", "des chevaux"], seg: [
        { es: "Escucha el artículo, no el final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La granja", img: "bg-paris", yo: "camila",
    escena: "Hugo habla de sus amigos que viven en el campo.",
    pj: PJ,
    lineas: [
      ["hugo", "Mes amis ont des chiens et des chevaux à la campagne.", "Mis amigos tienen perros y caballos en el campo."],
      ["camila", "Des chevaux ! Et ils font des travaux dans la maison ?", "¡Caballos! ¿Y hacen obras en la casa?"],
      ["hugo", "Oui. Et ils ont acheté des livres et des journaux pour l'hiver.", "Sí. Y compraron libros y periódicos para el invierno."],
      ["camila", "Moi, j'ai un chat. Il a les yeux verts !", "Yo tengo un gato. ¡Tiene los ojos verdes!"]
    ],
    fijate: "Fíjate: mes‿amis, des chiens, des chevaux, des travaux, des livres, des journaux, les‿yeux: el plural se oye en el determinante o en la palabra."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Dónde se oye el plural",
      idea: "La s del plural no suena: livre y livres se pronuncian igual [livʁ]. El plural se oye en el determinante: le [lə] / les [le], un / des, mon / mes, ce / ces; y en la liaison: les‿enfants, mes‿amis. Algunos plurales cambian el sonido: un œil / des yeux, un cheval / des chevaux, un travail / des travaux, un journal / des journaux. Ojo: un bœuf / des bœufs [bø].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le livre · les livres", es: "el libro · los libros — [lə] / [le]" },
        { fr: "le chien · les chiens", es: "el perro · los perros" },
        { fr: "la maison · les maisons", es: "la casa · las casas" },
        { fr: "mon ami · mes amis", es: "mi amigo · mis amigos — liaison [z]" },
        { fr: "ce garçon · ces garçons", es: "este chico · estos chicos" },
        { fr: "un chat · des chats", es: "un gato · gatos — [ʃa]" },
        { fr: "un œil · des yeux", es: "un ojo · ojos" },
        { fr: "un cheval · des chevaux", es: "un caballo · caballos" },
        { fr: "un travail · des travaux", es: "un trabajo · obras" },
        { fr: "un journal · des journaux", es: "un periódico · periódicos" },
        { fr: "un bœuf · des bœufs", es: "un buey · bueyes — [bœf] / [bø]" }
      ],
      ej: [["Le livre. Les livres.", "El libro. Los libros."], ["Mon ami. Mes amis.", "Mi amigo. Mis amigos."], ["Un journal. Des journaux.", "Un periódico. Periódicos."]],
      clave: "Para saber si es plural, escucha el artículo." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les livres (pronunciando la s)", "les livres [le livʁ]", "La s final del plural es muda."], ["J'ai acheté deux livre hier.", "J'ai acheté deux livres hier.", "No suena, pero se escribe."], ["des travails", "des travaux", "Plural de travail: travaux."]] }
  ],
  ejemplos: [
    { sit: "Oyes [le livʁ].", resp: "les livres: plural", pasos: ["[le] = les."], porque: "Determinante." },
    { sit: "Oyes [mezami].", resp: "mes amis: plural", pasos: ["Liaison [z]."], porque: "Liaison." },
    { sit: "«caballos»", resp: "des chevaux", pasos: ["-al → -aux: se oye."], porque: "Plural irregular." }
  ],
  comprueba: [
    { q: "Livre y livres…", o: ["suenan igual", "suenan distinto"], a: 0, b: "phono", porque: "s muda." },
    { q: "El plural se oye sobre todo en…", o: ["el determinante y la liaison", "la s final"], a: 0, b: "phono", porque: "le / les." },
    { q: "El plural de un cheval es…", o: ["des chevaux", "des chevals"], a: 0, b: "phono", porque: "-al → -aux." }
  ],
  practica: [
    { fase: "guiada", c: ["fpo-det"], k: "sort", ask: "¿Singular o plural?", q: "Clasifica.", cats: ["Singular", "Plural"], items: [["le chien", 0], ["la maison", 0], ["mon ami", 0], ["ce garçon", 0], ["les chiens", 1], ["les maisons", 1], ["mes amis", 1], ["ces garçons", 1]], pista: "Mira el determinante.", why: "Determinante." },
    { fase: "guiada", c: ["fpo-det"], k: "choice", es: true, say: "les livres", ask: "Escucha. ¿Singular o plural?", q: "Elige.", o: ["Plural: se oye [le]", "Singular"], a: 0, pista: "Escucha el artículo.", why: "<b>les livres</b>." },
    { fase: "guiada", c: ["fpo-det"], k: "choice", es: true, say: "mes amis", ask: "Escucha. ¿Singular o plural?", q: "Elige.", o: ["Plural: liaison [z]", "Singular"], a: 0, pista: "Liaison.", why: "<b>mes‿amis</b>." },
    { fase: "indep", c: ["fpo-irreg"], k: "fill", ask: "Escribe el plural.", q: "un travail → des ___", acc: ["travaux"], why: "<b>travaux</b>." },
    { fase: "indep", c: ["fpo-det"], k: "choice", es: true, say: "des chats", ask: "Escucha. ¿Cómo suena chats?", q: "Elige.", o: ["[ʃa]", "[ʃas]"], a: 0, why: "La s no suena." },
    { fase: "indep", c: ["fpo-det"], k: "spot", ask: "Encuentra el error.", s: "J'ai acheté deux [livre] hier .", fix: "livres", why: "<b>deux livres</b>." },
    { fase: "aplica", c: ["fpo-irreg"], k: "match", ask: "Une cada singular con su plural.", q: "Singular → plural", pairs: [["un œil", "des yeux"], ["un cheval", "des chevaux"], ["un journal", "des journaux"], ["un bœuf", "des bœufs"]], why: "Plurales especiales." },
    { fase: "aplica", c: ["fpo-irreg"], k: "choice", ask: "¿Cuál es plural?", q: "«___»", o: ["des chevaux", "un cheval"], a: 0, why: "<b>des chevaux</b>." },
    { fase: "dominio", c: ["fpo-det", "fpo-irreg"], k: "choice", es: true, say: "Il a les yeux verts.", ask: "Escucha. ¿Cuántos ojos?", q: "Elige.", o: ["Dos: les yeux", "Uno: l'œil"], a: 0, why: "<b>les‿yeux</b>." },
    { fase: "dominio", c: ["fpo-det"], k: "order", ask: "Ordena: «Mis amigos tienen perros».", tokens: ["Mes amis", "ont", "des chiens."], why: "<b>Mes amis ont des chiens.</b>" },
    { fase: "dominio", c: ["fpo-det", "fpo-irreg"], k: "listen", say: "Mes amis ont acheté des livres et des journaux.", acc: ["Mes amis ont acheté des livres et des journaux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mes amis ont acheté des livres et des journaux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ont", "et", "à", "la", "campagne", "ils", "font", "dans", "oui", "acheté", "pour", "l'hiver", "moi", "j'ai", "il", "a", "verts", "deux", "hier"] }
};

E["fon-feminin-oral"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Le féminin à l'oral : petit / petite",
  objetivo: {
    que: "Vas a oír el femenino cuando la consonante final empieza a sonar: petit / petite, grand / grande.",
    corto: "petit [pəti] / petite [pətit].",
    podras: ["Pronunciar la consonante del femenino: petite, grande, grise, française.", "Pronunciar los cambios mayores: blanc / blanche, vieux / vieille.", "Saber que joli / jolie y noir / noire suenan igual."],
    iconos: ["ic2/amigos", "ic2/audifonos", "ic2/flor"],
    previos: ["Las consonantes finales (lección 30) y nasal o no nasal (lección 24)."],
    capacidad: "Ahora tus femeninos se oyen."
  },
  requiere: R("fcf-muettes", "fdn-fem"), recupera: ["fcf-muettes"],
  conceptos: {
    "ffo-consonne": { n: "la consonante muda suena en femenino: petit / petite, grand / grande", b: "phono" },
    "ffo-autres": { n: "cambios mayores (blanc / blanche, vieux / vieille) y femeninos que no se oyen (joli / jolie)", b: "phono" }
  },
  video: {
    titulo: "El femenino se oye", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "petit · petite", seg: [
        { es: "Hola. En femenino, la consonante dormida se despierta." } ] },
      { v: "dos",
        a: { tag: "masculino", fr: "un petit chat", es: "t muda" },
        b: { tag: "femenino", fr: "une petite chatte", es: "t suena" },
        seg: [ { es: "Masculino, sin te:", p: 1 }, { fr: "un petit chat", p: 1 }, { es: "Femenino, se oye la te:", p: 2 }, { fr: "une petite chatte", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi hermana es muy alta para su edad.»", o: ["Ma sœur est très grande pour son âge.", "Ma sœur est très grand pour son âge."], a: 0,
        bien: "¡Sí! Femenino: grande, se oye la d.", mal: "Hermana: grande.",
        seg: [ { es: "Pausa. Alta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["petite", "grande", "française", "blanche", "jolie", "noire"], seg: [
        { es: "Petite suena te; jolie suena igual que joli.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La hermana de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Hugo le muestra una foto a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Voici ma petite sœur. Elle est française, mais elle habite à Bogotá.", "Esta es mi hermana pequeña. Es francesa, pero vive en Bogotá."],
      ["camila", "Elle est très grande ! Et sa robe est jolie.", "¡Es muy alta! Y su vestido es bonito."],
      ["hugo", "Oui, une robe blanche et une veste grise.", "Sí, un vestido blanco y una chaqueta gris."],
      ["camila", "Et la maison derrière, elle est vieille ?", "¿Y la casa de atrás, es vieja?"]
    ],
    fijate: "Fíjate: petite, française, grande, blanche, grise, vieille (el femenino se oye); jolie (suena igual que joli)."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Masculino y femenino",
      idea: "En muchos adjetivos el femenino se oye porque la consonante final muda empieza a sonar: petit [pəti] / petite [pətit], grand / grande, gris [gʁi] / grise [gʁiz], français / française. Otros cambian la nasal (bon / bonne) o cambian más: blanc / blanche, frais / fraîche, vieux / vieille, long / longue, gros / grosse. Algunos no cambian al oído: joli / jolie, bleu / bleue, noir / noire, vrai / vraie, un ami / une amie.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "petit · petite", es: "pequeño · pequeña — se oye la t" },
        { fr: "grand · grande", es: "grande, alto · alta — se oye la d" },
        { fr: "gris · grise", es: "gris (m. / f.) — se oye [z]" },
        { fr: "vert · verte", es: "verde (m. / f.) — se oye la t" },
        { fr: "français · française", es: "francés · francesa — [fʁɑ̃sɛz]" },
        { fr: "blanc · blanche", es: "blanco · blanca" },
        { fr: "frais · fraîche", es: "fresco · fresca" },
        { fr: "vieux · vieille", es: "viejo · vieja" },
        { fr: "long · longue · gros · grosse", es: "largo · larga · gordo · gorda" },
        { fr: "joli · jolie · bleu · bleue", es: "bonito · bonita · azul — suenan igual" },
        { fr: "noir · noire · vrai · vraie", es: "negro · negra · verdadero · verdadera — suenan igual" },
        { fr: "une chatte · la robe · la veste", es: "una gata · el vestido · la chaqueta" }
      ],
      ej: [["Un petit chat, une petite chatte.", "Un gato pequeño, una gata pequeña."], ["Il est français, elle est française.", "Él es francés, ella es francesa."], ["Un ami, une amie.", "Un amigo, una amiga (suenan igual)."]],
      clave: "Si el masculino termina en consonante muda, el femenino la hace sonar." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["petite (dicha [pəti])", "petite [pətit]", "En femenino, la t suena."], ["Ma sœur est très gran pour son âge.", "Ma sœur est très grande pour son âge.", "Femenino: grande."], ["une robe blanc", "une robe blanche", "Femenino de blanc: blanche."]] }
  ],
  ejemplos: [
    { sit: "«una gata pequeña»", resp: "une petite chatte", pasos: ["petite: la t suena."], porque: "Femenino." },
    { sit: "«Ella es francesa.»", resp: "Elle est française.", pasos: ["[fʁɑ̃sɛz]: se oye [z]."], porque: "Femenino." },
    { sit: "«una casa bonita»", resp: "une jolie maison", pasos: ["jolie suena como joli."], porque: "No se oye." }
  ],
  comprueba: [
    { q: "En petite, la t…", o: ["suena", "no suena"], a: 0, b: "phono", porque: "[pətit]." },
    { q: "Joli y jolie…", o: ["suenan igual", "suenan distinto"], a: 0, b: "phono", porque: "e final muda." },
    { q: "El femenino de blanc es…", o: ["blanche", "blance"], a: 0, b: "phono", porque: "Cambio mayor." }
  ],
  practica: [
    { fase: "guiada", c: ["ffo-consonne", "ffo-autres"], k: "sort", ask: "¿El femenino se oye?", q: "Clasifica.", cats: ["Sí", "No"], items: [["petite", 0], ["grande", 0], ["grise", 0], ["verte", 0], ["jolie", 1], ["noire", 1], ["bleue", 1], ["vraie", 1]], pista: "¿Suena una consonante nueva?", why: "Femenino oral." },
    { fase: "guiada", c: ["ffo-consonne"], k: "choice", es: true, say: "grande", ask: "Escucha. ¿Masculino o femenino?", q: "Elige.", o: ["Femenino: se oye la d", "Masculino"], a: 0, pista: "¿Se oye la d?", why: "<b>grande</b>." },
    { fase: "guiada", c: ["ffo-autres"], k: "choice", es: true, say: "joli", ask: "Escucha. ¿Se puede saber el género por el sonido?", q: "Elige.", o: ["No: joli y jolie suenan igual", "Sí: es femenino"], a: 0, pista: "e final muda.", why: "<b>joli / jolie</b>." },
    { fase: "indep", c: ["ffo-autres"], k: "fill", ask: "Escribe el femenino.", q: "blanc → ___", acc: ["blanche"], why: "<b>blanche</b>." },
    { fase: "indep", c: ["ffo-consonne"], k: "choice", es: true, say: "française", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[fʁɑ̃sɛz]", "[fʁɑ̃sɛ]"], a: 0, why: "<b>française</b>." },
    { fase: "indep", c: ["ffo-consonne"], k: "spot", ask: "Encuentra el error.", s: "Ma sœur est très [gran] pour son âge .", fix: "grande", why: "<b>grande</b>." },
    { fase: "aplica", c: ["ffo-autres"], k: "match", ask: "Une cada masculino con su femenino.", q: "Masculino → femenino", pairs: [["long", "longue"], ["frais", "fraîche"], ["gros", "grosse"], ["vieux", "vieille"]], why: "Femeninos." },
    { fase: "aplica", c: ["ffo-consonne"], k: "choice", ask: "«una chaqueta gris»", q: "«une veste ___»", o: ["grise", "gris"], a: 0, why: "<b>grise</b>." },
    { fase: "dominio", c: ["ffo-autres"], k: "choice", ask: "«un vestido blanco»", q: "«une robe ___»", o: ["blanche", "blanc"], a: 0, why: "<b>une robe blanche</b>." },
    { fase: "dominio", c: ["ffo-consonne", "ffo-autres"], k: "order", ask: "Ordena: «una casa blanca y grande».", tokens: ["une maison", "blanche", "et grande"], why: "<b>une maison blanche et grande</b>" },
    { fase: "dominio", c: ["ffo-consonne", "ffo-autres"], k: "listen", say: "Ma petite sœur est française et elle est très grande.", acc: ["Ma petite sœur est française et elle est très grande."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma petite sœur est française et elle est très grande.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Bogotá"], previo: ["voici", "ma", "sœur", "elle", "est", "mais", "habite", "à", "très", "et", "sa", "oui", "une", "la", "maison", "derrière", "un", "chat", "il", "pour", "son", "âge"] }
};

E["fon-homophones-vert"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Vert, verre, vers, ver : les homophones",
  objetivo: {
    que: "Vas a distinguir por el contexto y la ortografía palabras que suenan igual: vert, verre, vers, ver; mer, mère, maire.",
    corto: "Un verre vert · la mère du maire aime la mer.",
    podras: ["Escribir bien vert, verre, vers y ver.", "Escribir bien mer, mère y maire.", "Escribir bien sans, cent, sang y il sent."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/pregunta"],
    previos: ["Los homófonos gramaticales (lección 16)."],
    capacidad: "Ahora no confundes un vaso verde con un gusano."
  },
  requiere: R("fh-truc", "fh-ou"), recupera: ["fh-truc"],
  conceptos: {
    "fhv-ver": { n: "[vɛʁ]: vert (verde), verre (vaso), vers (hacia), ver (gusano)", b: "ortho" },
    "fhv-autres": { n: "[mɛʁ]: mer, mère, maire · [sɑ̃]: sans, cent, sang, sent", b: "ortho" }
  },
  video: {
    titulo: "Suenan igual", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "vert · verre · vers · ver", seg: [
        { es: "Hola. Cuatro palabras, un solo sonido." } ] },
      { v: "frase", filas: [
          { nota: "[vɛʁ]", p: 1, partes: [["un verre vert", "-", 1]] },
          { nota: "[mɛʁ]", p: 2, partes: [["la mère du maire aime la mer", "-", 2]] },
          { nota: "[sɑ̃]", p: 3, partes: [["cent euros, sans problème", "-", 3]] } ], seg: [
        { fr: "un verre vert", p: 1 }, { fr: "la mère du maire aime la mer", p: 2 }, { fr: "cent euros, sans problème", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera un vaso de agua.»", o: ["Je voudrais un verre d'eau.", "Je voudrais un vert d'eau."], a: 0,
        bien: "¡Sí! Vaso: verre.", mal: "Vert es verde; vaso es verre.",
        seg: [ { es: "Pausa. Un vaso." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vert", "verre", "vers", "la mer", "la mère", "le maire"], seg: [
        { es: "El sentido de la frase te dice cómo se escribe.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la playa", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo pasan el día junto al mar.",
    pj: PJ,
    lineas: [
      ["camila", "Ma mère boit un verre d'eau au bord de la mer.", "Mi mamá se toma un vaso de agua a orillas del mar."],
      ["hugo", "Et le maire de la ville nage vers la plage !", "¡Y el alcalde de la ciudad nada hacia la playa!"],
      ["camila", "Regarde, un ver dans le sable vert !", "¡Mira, un gusano en la arena verde!"],
      ["hugo", "Ce maillot coûte cent euros… sans problème, il est joli !", "Este traje de baño cuesta cien euros… ¡sin problema, es bonito!"]
    ],
    fijate: "Fíjate: mère, mer, maire [mɛʁ]; verre, vers, ver, vert [vɛʁ]; cent, sans [sɑ̃]."
  },
  ensena: [
    { id: "ortho", tipo: "vocab", titulo: "Homófonos",
      idea: "Muchas palabras suenan igual y se escriben distinto; el contexto y la ortografía las distinguen. [vɛʁ]: vert (verde), verre (vaso), vers (hacia; también verso), ver (gusano). [mɛʁ]: mer (mar), mère (madre), maire (alcalde). [sɑ̃]: sans (sin), cent (cien), sang (sangre), il sent (huele). [so]: sot (tonto), seau (balde), saut (salto).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "vert", es: "verde" },
        { fr: "le verre", es: "el vaso" },
        { fr: "vers", es: "hacia" },
        { fr: "le ver", es: "el gusano" },
        { fr: "la mer · les mers", es: "el mar · los mares" },
        { fr: "la mère", es: "la madre" },
        { fr: "le maire", es: "el alcalde" },
        { fr: "sans · cent", es: "sin · cien" },
        { fr: "le sang · il sent", es: "la sangre · huele" },
        { fr: "sot · le seau · le saut", es: "tonto · el balde · el salto" }
      ],
      ej: [["Un verre vert.", "Un vaso verde."], ["La mère du maire aime la mer.", "La madre del alcalde ama el mar."], ["Cent euros, sans problème.", "Cien euros, sin problema."]],
      clave: "Mismo sonido: el sentido decide la ortografía." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un vert d'eau", "un verre d'eau", "Vaso = verre."], ["Ma mer prépare le dîner.", "Ma mère prépare le dîner.", "Madre = mère."], ["Il a sans ans.", "Il a cent ans.", "Cien = cent."]] }
  ],
  ejemplos: [
    { sit: "«un vaso de agua»", resp: "un verre d'eau", pasos: ["Vaso: verre."], porque: "Contexto." },
    { sit: "«Nadamos en el mar.»", resp: "Nous nageons dans la mer.", pasos: ["Mar: mer."], porque: "Contexto." },
    { sit: "«Va hacia la estación.»", resp: "Il va vers la gare.", pasos: ["Hacia: vers."], porque: "Preposición." }
  ],
  comprueba: [
    { q: "Verre significa…", o: ["vaso", "verde"], a: 0, b: "ortho", porque: "vert = verde." },
    { q: "Le maire es…", o: ["el alcalde", "la madre"], a: 0, b: "ortho", porque: "la mère = la madre." },
    { q: "Sans significa…", o: ["sin", "cien"], a: 0, b: "ortho", porque: "cent = cien." }
  ],
  practica: [
    { fase: "guiada", c: ["fhv-ver", "fhv-autres"], k: "sort", ask: "¿[vɛʁ] o [mɛʁ]?", q: "Clasifica.", cats: ["[vɛʁ]", "[mɛʁ]"], items: [["vert", 0], ["le verre", 0], ["vers", 0], ["le ver", 0], ["la mer", 1], ["la mère", 1], ["le maire", 1], ["les mers", 1]], pista: "Empieza con v o con m.", why: "Homófonos." },
    { fase: "guiada", c: ["fhv-ver"], k: "choice", es: true, say: "Je voudrais un verre d'eau.", ask: "Escucha. ¿Qué es [vɛʁ] aquí?", q: "Elige.", o: ["un vaso", "verde", "un gusano"], a: 0, pista: "d'eau: de agua.", why: "<b>un verre d'eau</b>." },
    { fase: "guiada", c: ["fhv-autres"], k: "choice", es: true, say: "Le maire parle aux habitants.", ask: "Escucha. ¿Qué es [mɛʁ] aquí?", q: "Elige.", o: ["el alcalde", "la madre", "el mar"], a: 0, pista: "le: masculino.", why: "<b>le maire</b>." },
    { fase: "indep", c: ["fhv-autres"], k: "fill", ask: "Escribe «mar».", q: "Nous nageons dans la ___.", acc: ["mer"], why: "<b>la mer</b>." },
    { fase: "indep", c: ["fhv-ver"], k: "choice", ask: "«Va hacia la estación.»", q: "«Il va ___ la gare.»", o: ["vers", "verre", "vert"], a: 0, why: "<b>vers</b>: hacia." },
    { fase: "indep", c: ["fhv-autres"], k: "spot", ask: "Encuentra el error.", s: "Ma [mer] prépare le dîner .", fix: "mère", why: "<b>Ma mère</b>." },
    { fase: "aplica", c: ["fhv-autres"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["sans", "sin"], ["cent", "cien"], ["le sang", "la sangre"], ["il sent", "huele"]], why: "[sɑ̃]." },
    { fase: "aplica", c: ["fhv-ver"], k: "choice", ask: "«un vaso verde»", q: "«un ___ vert»", o: ["verre", "ver"], a: 0, why: "<b>un verre vert</b>." },
    { fase: "dominio", c: ["fhv-autres"], k: "choice", ask: "«Tiene cien años.»", q: "«Il a ___ ans.»", o: ["cent", "sans", "sang"], a: 0, why: "<b>cent ans</b>." },
    { fase: "dominio", c: ["fhv-ver", "fhv-autres"], k: "order", ask: "Ordena: «La madre del alcalde ama el mar».", tokens: ["La mère", "du maire", "aime la mer."], why: "<b>La mère du maire aime la mer.</b>" },
    { fase: "dominio", c: ["fhv-ver", "fhv-autres"], k: "listen", say: "Ma mère boit un verre d'eau au bord de la mer.", acc: ["Ma mère boit un verre d'eau au bord de la mer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma mère boit un verre d'eau au bord de la mer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ma", "boit", "un", "d'eau", "au", "bord", "de", "la", "et", "le", "ville", "nage", "plage", "regarde", "dans", "sable", "ce", "maillot", "coûte", "euros", "problème", "il", "est", "joli", "je", "voudrais", "parle", "aux", "habitants", "nous", "nageons", "va", "gare", "prépare", "dîner", "a", "ans", "du", "aime"] }
};

E["fon-mots-pieges"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Mots pièges : monsieur, femme, second, oignon",
  objetivo: {
    que: "Vas a pronunciar bien las palabras frecuentes que no se leen como se escriben: monsieur, femme, second, oignon, août, fils.",
    corto: "monsieur [məsjø] · oignon [ɔɲɔ̃] · fils [fis].",
    podras: ["Decir monsieur [məsjø] y messieurs [mesjø].", "Decir second [səgɔ̃], oignon [ɔɲɔ̃], sept [sɛt], fils [fis].", "Decir août [u] y j'ai eu [ʒe y]."],
    iconos: ["ic2/candado", "ic2/audifonos", "ic2/bombilla"],
    previos: ["El sonido [a] y femme (lección 28), gn (lección 34) y las consonantes finales (lección 30)."],
    capacidad: "Ahora no caes en las trampas de pronunciación más comunes."
  },
  requiere: R("fag-a", "fgi-gn", "fcf-careful"), recupera: ["fag-a"],
  conceptos: {
    "fmp-mots": { n: "monsieur [məsjø], second [səgɔ̃], oignon [ɔɲɔ̃], femme [fam]", b: "phono" },
    "fmp-fin": { n: "sept [sɛt], fils [fis], août [u], tabac [taba], j'ai eu [y]", b: "phono" }
  },
  video: {
    titulo: "Palabras trampa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "monsieur", seg: [
        { es: "Hola. Algunas palabras muy comunes son trampas." } ] },
      { v: "frase", filas: [
          { nota: "[məsjø]", p: 1, partes: [["Bonjour, monsieur !", "-", 1]] },
          { nota: "[ɔɲɔ̃]", p: 2, partes: [["un oignon", "-", 2]] },
          { nota: "[fis] · [sɛt]", p: 3, partes: [["Mon fils a sept ans.", "-", 3]] } ], seg: [
        { es: "No digas mon-sieur:", p: 1 }, { fr: "Bonjour, monsieur !", p: 1 }, { es: "La i no suena:", p: 2 }, { fr: "un oignon", p: 2 }, { es: "Fils con ese, sept sin pe:", p: 3 }, { fr: "Mon fils a sept ans.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo se dice «monsieur»?", es: true, o: ["[məsjø]", "[mɔ̃sjœʁ]"], a: 0,
        bien: "¡Sí! Me-sié.", mal: "Casi nada se lee como se escribe: [məsjø].",
        seg: [ { es: "Pausa. Señor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["monsieur", "la femme", "second", "l'oignon", "sept", "le fils", "août"], seg: [
        { es: "Estas, apréndelas de memoria.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la tienda", img: "bg-cafe", yo: "camila",
    escena: "Camila compra en una tienda con su vendedor.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, monsieur ! Je voudrais un oignon, s'il vous plaît.", "¡Buenos días, señor! Quisiera una cebolla, por favor."],
      ["vendeur", "Voilà. C'est pour une recette ?", "Aquí tiene. ¿Es para una receta?"],
      ["camila", "Oui, pour l'anniversaire de mon fils. Il a sept ans en août.", "Sí, para el cumpleaños de mi hijo. Cumple siete años en agosto."],
      ["vendeur", "Bravo ! Ma femme et moi, on a eu un second enfant en août aussi.", "¡Bravo! Mi esposa y yo tuvimos un segundo hijo en agosto también."]
    ],
    fijate: "Fíjate: monsieur [məsjø], oignon [ɔɲɔ̃], fils [fis], sept [sɛt], août [u], femme [fam], eu [y], second [səgɔ̃]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Las trampas",
      idea: "monsieur [məsjø] y messieurs [mesjø]. second [səgɔ̃]: la c suena [g]. oignon [ɔɲɔ̃]: sin i. femme [fam]. fils (hijo) [fis]. sept [sɛt]: sin p. août [u] o [ut]. tabac [taba]. El participio de avoir: j'ai eu [ʒe y].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "monsieur · messieurs", es: "señor · señores — [məsjø] · [mesjø]" },
        { fr: "second · seconde", es: "segundo · segunda — [səgɔ̃]" },
        { fr: "l'oignon", es: "la cebolla — [ɔɲɔ̃]" },
        { fr: "la femme", es: "la mujer, la esposa — [fam]" },
        { fr: "le fils", es: "el hijo — [fis]" },
        { fr: "sept", es: "siete — [sɛt]" },
        { fr: "août", es: "agosto — [u] o [ut]" },
        { fr: "le tabac", es: "el tabaco — [taba]" },
        { fr: "j'ai eu", es: "tuve — [ʒe y]" },
        { fr: "la table · le chocolat · la musique · parler", es: "la mesa · el chocolate · la música · hablar — sin trampa" }
      ],
      ej: [["Bonjour, monsieur !", "¡Buenos días, señor!"], ["Mon fils a sept ans.", "Mi hijo tiene siete años."], ["J'ai eu de la chance en août.", "Tuve suerte en agosto."]],
      clave: "monsieur, oignon, fils, sept, août: de memoria." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["monsieur (dicho mon-sieur)", "monsieur [məsjø]", "Casi nada se lee como se escribe."], ["Bonjour monsieu Martin !", "Bonjour monsieur Martin !", "Se escribe monsieur, aunque la r no suene."], ["le fils (dicho [fil])", "le fils [fis]", "Hijo: [fis]."]] }
  ],
  ejemplos: [
    { sit: "Saludas a un señor.", resp: "Bonjour, monsieur !", pasos: ["[məsjø]."], porque: "Trampa." },
    { sit: "«Mi hijo tiene siete años.»", resp: "Mon fils a sept ans.", pasos: ["fils [fis], sept [sɛt]."], porque: "Trampas." },
    { sit: "«la segunda vez»", resp: "la seconde fois", pasos: ["c = [g]."], porque: "[səgɔ̃d]." }
  ],
  comprueba: [
    { q: "Monsieur se pronuncia…", o: ["[məsjø]", "[mɔ̃sjœʁ]"], a: 0, b: "phono", porque: "Trampa." },
    { q: "En oignon, la i…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "[ɔɲɔ̃]." },
    { q: "Fils (hijo) suena…", o: ["[fis]", "[fil]"], a: 0, b: "phono", porque: "Trampa." }
  ],
  practica: [
    { fase: "guiada", c: ["fmp-mots", "fmp-fin"], k: "sort", ask: "¿Se lee como se escribe?", q: "Clasifica.", cats: ["Sí, bastante", "No, es una trampa"], items: [["la table", 0], ["le chocolat", 0], ["la musique", 0], ["parler", 0], ["monsieur", 1], ["l'oignon", 1], ["second", 1], ["la femme", 1]], pista: "Las de esta lección son trampas.", why: "Trampas." },
    { fase: "guiada", c: ["fmp-mots"], k: "choice", es: true, say: "monsieur", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[məsjø]", "[mɔ̃sjœʁ]"], a: 0, pista: "me-sié.", why: "<b>monsieur</b>." },
    { fase: "guiada", c: ["fmp-fin"], k: "choice", es: true, say: "sept", ask: "Escucha. ¿Qué número oyes?", q: "Elige.", o: ["7", "17", "70"], a: 0, pista: "[sɛt].", why: "<b>sept</b>." },
    { fase: "indep", c: ["fmp-mots"], k: "fill", ask: "Escribe «cebolla».", q: "Je coupe un ___.", acc: ["oignon"], why: "<b>oignon</b>." },
    { fase: "indep", c: ["fmp-mots"], k: "choice", es: true, say: "second", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[səgɔ̃]", "[səkɔ̃d]"], a: 0, why: "<b>second</b>: c = [g]." },
    { fase: "indep", c: ["fmp-mots"], k: "spot", ask: "Encuentra el error.", s: "Bonjour [monsieu] Martin !", fix: "monsieur", why: "<b>monsieur</b>." },
    { fase: "aplica", c: ["fmp-fin", "fmp-mots"], k: "match", ask: "Une cada palabra con su pronunciación.", q: "Palabra → sonido", pairs: [["la femme", "[fam]"], ["août", "[u]"], ["le tabac", "[taba]"], ["j'ai eu", "[ʒe y]"]], why: "Trampas." },
    { fase: "aplica", c: ["fmp-fin"], k: "choice", es: true, say: "le fils", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["el hijo (fils)", "el hilo (fil)"], a: 0, why: "<b>le fils</b> [fis]." },
    { fase: "dominio", c: ["fmp-fin"], k: "choice", ask: "«Mi hijo tiene siete años.»", q: "«Mon ___ a sept ans.»", o: ["fils", "fille"], a: 0, why: "<b>Mon fils</b>." },
    { fase: "dominio", c: ["fmp-mots", "fmp-fin"], k: "order", ask: "Ordena: «Señor, mi hijo cumple siete años en agosto».", tokens: ["Monsieur,", "mon fils a sept ans", "en août."], why: "<b>Monsieur, mon fils a sept ans en août.</b>" },
    { fase: "dominio", c: ["fmp-mots", "fmp-fin"], k: "listen", say: "Bonjour, monsieur ! Mon fils a sept ans.", acc: ["Bonjour, monsieur ! Mon fils a sept ans.", "Bonjour monsieur ! Mon fils a sept ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour, monsieur ! Mon fils a sept ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Martin"], previo: ["bonjour", "je", "voudrais", "un", "s'il", "vous", "plaît", "voilà", "c'est", "pour", "une", "recette", "oui", "l'anniversaire", "de", "mon", "il", "a", "ans", "en", "bravo", "ma", "et", "moi", "on", "enfant", "aussi", "coupe", "la", "chance", "fois", "fille"] }
};

/* ───── FON·9 · Palabras especiales y lectura (lección 60) ───── */
E["fon-sigles"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les sigles : la SNCF, l'ONU, le PDG",
  objetivo: {
    que: "Vas a leer las siglas francesas letra por letra o como palabra, con el alfabeto francés.",
    corto: "la SNCF [ɛsɛnseɛf] · l'ONU [ɔny].",
    podras: ["Leer siglas letra por letra con el alfabeto francés: SNCF, PDG, TVA.", "Leer como palabra las que se pueden: ONU, OTAN, UNESCO.", "Conocer las siglas de la vida estudiante: la fac, le BAC, le CROUS, le DELF."],
    iconos: ["ic2/libro", "ic2/birrete", "ic2/mundo"],
    previos: ["De la grafía al sonido (lección 5) y las sílabas (lección 47)."],
    capacidad: "Ahora entiendes las siglas que aparecen en todas partes."
  },
  requiere: R("fg-voy", "fsy-compter"), recupera: ["fsy-compter"],
  conceptos: {
    "fsi-lettres": { n: "letra por letra con el alfabeto francés: la SNCF, le PDG, la TVA, le RER", b: "phono" },
    "fsi-mot": { n: "como palabra: l'ONU, l'OTAN, l'UNESCO; siglas de estudiante: le BAC, le DELF", b: "phono" }
  },
  video: {
    titulo: "Las siglas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "SNCF · ONU", seg: [
        { es: "Hola. Unas siglas se deletrean; otras se leen como palabra." } ] },
      { v: "dos",
        a: { tag: "letra por letra", fr: "la SNCF", es: "trenes" },
        b: { tag: "como palabra", fr: "l'ONU", es: "Naciones Unidas" },
        seg: [ { es: "Con el alfabeto francés:", p: 1 }, { fr: "la SNCF", p: 1 }, { es: "Como una palabra:", p: 2 }, { fr: "l'ONU", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la SNCF» es…", es: true, o: ["La empresa de trenes", "Un examen de francés"], a: 0,
        bien: "¡Sí! Los trenes franceses.", mal: "Es la empresa de trenes.",
        seg: [ { es: "Pausa. La SNCF." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la SNCF", "le RER", "le PDG", "l'ONU", "le DELF", "la fac"], seg: [
        { es: "Usa el alfabeto francés, no el español.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Rumbo al aeropuerto", img: "bg-paris", yo: "camila",
    escena: "Camila le cuenta a Hugo cómo viaja y qué estudia.",
    pj: PJ,
    lineas: [
      ["camila", "Je prends le RER pour aller à l'aéroport.", "Tomo el RER para ir al aeropuerto."],
      ["hugo", "Et ensuite un train de la SNCF ? Le billet est cher ?", "¿Y después un tren de la SNCF? ¿El billete es caro?"],
      ["camila", "Cent euros TTC. Mais j'ai réussi le DELF B2 !", "Cien euros con impuestos. ¡Pero aprobé el DELF B2!"],
      ["hugo", "Bravo ! Le CROUS de la fac t'aide pour le logement ?", "¡Bravo! ¿El CROUS de la universidad te ayuda con el alojamiento?"]
    ],
    fijate: "Fíjate: RER, SNCF, TTC: letra por letra; DELF, CROUS, fac: como palabra."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Leer siglas",
      idea: "Muchas siglas se leen letra por letra con el alfabeto francés: la SNCF [ɛsɛnseɛf] (trenes), le PDG (director general), la TVA (IVA), le RER (tren de cercanías), TTC (impuestos incluidos), les JO (Juegos Olímpicos). Otras se leen como palabra: l'ONU [ɔny], l'OTAN, l'UNESCO, le SIDA. El género es el de la palabra principal: la SNCF (la société), le RER (le réseau). Siglas de estudiante: la fac, le BAC, le CROUS, le DELF.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la SNCF", es: "la empresa de trenes" },
        { fr: "le RER", es: "el tren de cercanías de París" },
        { fr: "le PDG", es: "el director general de una empresa" },
        { fr: "la TVA · TTC", es: "el IVA · impuestos incluidos" },
        { fr: "l'ONU · l'OTAN", es: "la ONU · la OTAN — como palabra" },
        { fr: "l'UNESCO · le SIDA", es: "la Unesco · el sida — como palabra" },
        { fr: "la fac", es: "la universidad" },
        { fr: "le BAC", es: "el examen de fin de secundaria" },
        { fr: "le CROUS", es: "el servicio de vida estudiantil" },
        { fr: "le DELF · les JO", es: "el diploma de francés · los Juegos Olímpicos" }
      ],
      ej: [["Je prends le RER pour aller à l'aéroport.", "Tomo el RER para ir al aeropuerto."], ["Le prix est de cent euros TTC.", "El precio es de 100 € con impuestos."], ["J'ai réussi le DELF B2.", "Aprobé el DELF B2."]],
      clave: "Letra por letra con el alfabeto francés, o como palabra si se puede." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la SNCF (leída «esnecefe»)", "la SNCF [ɛsɛnseɛf]", "Usa el alfabeto francés."], ["Je prends le SNCF pour aller à Lyon.", "Je prends la SNCF pour aller à Lyon.", "La SNCF: la société, femenino."], ["l'ONU (deletreada)", "l'ONU [ɔny]", "Se lee como palabra."]] }
  ],
  ejemplos: [
    { sit: "Tomas el tren de cercanías.", resp: "Je prends le RER.", pasos: ["[ɛʁøɛʁ]: letra por letra."], porque: "Sigla deletreada." },
    { sit: "Hablas de la ONU.", resp: "l'ONU [ɔny]", pasos: ["Como palabra."], porque: "Se puede leer." },
    { sit: "Aprobaste el examen de francés.", resp: "J'ai réussi le DELF.", pasos: ["Como palabra: [dɛlf]."], porque: "Sigla de estudiante." }
  ],
  comprueba: [
    { q: "La SNCF se lee…", o: ["letra por letra", "como palabra"], a: 0, b: "phono", porque: "[ɛsɛnseɛf]." },
    { q: "L'ONU se lee…", o: ["como palabra: [ɔny]", "letra por letra"], a: 0, b: "phono", porque: "Se puede pronunciar." },
    { q: "TTC significa…", o: ["impuestos incluidos", "tren de cercanías"], a: 0, b: "phono", porque: "Toutes taxes comprises." }
  ],
  practica: [
    { fase: "guiada", c: ["fsi-lettres", "fsi-mot"], k: "sort", ask: "¿Letra por letra o como palabra?", q: "Clasifica.", cats: ["Letra por letra", "Como palabra"], items: [["la SNCF", 0], ["le PDG", 0], ["la TVA", 0], ["le RER", 0], ["l'ONU", 1], ["l'OTAN", 1], ["l'UNESCO", 1], ["le SIDA", 1]], pista: "¿Se puede pronunciar como palabra?", why: "Siglas." },
    { fase: "guiada", c: ["fsi-lettres"], k: "choice", es: true, say: "la SNCF", ask: "Escucha. ¿Qué es?", q: "Elige.", o: ["La empresa de trenes", "La universidad", "El IVA"], a: 0, pista: "Trenes.", why: "<b>la SNCF</b>." },
    { fase: "guiada", c: ["fsi-mot"], k: "choice", es: true, say: "l'ONU", ask: "Escucha. ¿Cómo se lee?", q: "Elige.", o: ["Como palabra: [ɔny]", "Letra por letra"], a: 0, pista: "Se pronuncia.", why: "<b>l'ONU</b>." },
    { fase: "indep", c: ["fsi-mot"], k: "fill", ask: "Escribe la sigla del diploma de francés.", q: "J'ai passé le ___ B1.", acc: ["DELF", "delf"], why: "<b>le DELF</b>." },
    { fase: "indep", c: ["fsi-lettres"], k: "choice", es: true, ask: "TTC quiere decir…", q: "Elige.", o: ["Impuestos incluidos", "Tren de cercanías"], a: 0, why: "Toutes taxes comprises." },
    { fase: "indep", c: ["fsi-lettres"], k: "spot", ask: "Encuentra el error.", s: "Je prends [le] SNCF pour aller à Lyon .", fix: "la", why: "<b>la SNCF</b>." },
    { fase: "aplica", c: ["fsi-mot"], k: "match", ask: "Une cada sigla con su significado.", q: "Sigla → significado", pairs: [["la fac", "la universidad"], ["le BAC", "el examen de fin de secundaria"], ["le CROUS", "el servicio de vida estudiantil"], ["les JO", "los Juegos Olímpicos"]], why: "Siglas útiles." },
    { fase: "aplica", c: ["fsi-lettres"], k: "choice", es: true, say: "le PDG", ask: "Escucha. ¿Quién es?", q: "Elige.", o: ["El director general de una empresa", "Un profesor"], a: 0, why: "<b>le PDG</b>." },
    { fase: "dominio", c: ["fsi-lettres"], k: "choice", ask: "«Tomo el tren de cercanías para ir al aeropuerto.»", q: "«Je prends le ___ pour aller à l'aéroport.»", o: ["RER", "BAC", "DELF"], a: 0, why: "<b>le RER</b>." },
    { fase: "dominio", c: ["fsi-lettres", "fsi-mot"], k: "order", ask: "Ordena: «Aprobé el DELF B2».", tokens: ["J'ai réussi", "le DELF", "B2."], why: "<b>J'ai réussi le DELF B2.</b>" },
    { fase: "dominio", c: ["fsi-lettres", "fsi-mot"], k: "listen", say: "Je prends le RER et ensuite un train de la SNCF.", acc: ["Je prends le RER et ensuite un train de la SNCF."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je prends le RER et ensuite un train de la SNCF.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: ["je", "prends", "pour", "aller", "à", "l'aéroport", "et", "ensuite", "un", "train", "de", "billet", "est", "cher", "cent", "euros", "mais", "j'ai", "réussi", "b2", "b1", "bravo", "t'aide", "logement", "passé", "prix"] }
};

E["fon-emprunts"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Les mots étrangers : parking, week-end, pizza",
  objetivo: {
    que: "Vas a pronunciar a la francesa las palabras que el francés tomó de otras lenguas.",
    corto: "le parking [paʁkiŋ] · le week-end [wikɛnd].",
    podras: ["Poner el acento final también en los préstamos: parking, week-end.", "Usar la r francesa en ellos: le leader, le football.", "Conocer los falsos anglicismos: le parking, le footing, le brushing."],
    iconos: ["ic2/mundo", "ic2/audifonos", "ic2/bolsa"],
    previos: ["El acento final (lección 48) y la r francesa (lección 29)."],
    capacidad: "Ahora dices week-end y parking como un francés."
  },
  requiere: R("faf-mot", "frr-lieu"), recupera: ["faf-mot"],
  conceptos: {
    "fem-prononcer": { n: "préstamos a la francesa: acento final, [ʁ], -ing = [iŋ]", b: "phono" },
    "fem-faux": { n: "falsos anglicismos: le parking (parqueadero), le footing (trotar), le brushing", b: "phono" }
  },
  video: {
    titulo: "Préstamos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "parking · week-end", seg: [
        { es: "Hola. El francés toma palabras de otros idiomas, pero las dice a su manera." } ] },
      { v: "frase", filas: [
          { nota: "acento final", p: 1, partes: [["le parking · le week-end", "-", 1]] },
          { nota: "del italiano", p: 2, partes: [["la pizza · le piano", "-", 2]] } ], seg: [
        { es: "Acento al final:", p: 1 }, { fr: "le parking, le week-end", p: 1 }, { fr: "la pizza, le piano", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«le parking» es…", es: true, o: ["el parqueadero", "el parque"], a: 0,
        bien: "¡Sí! Un falso anglicismo.", mal: "Le parking es el parqueadero.",
        seg: [ { es: "Pausa. Le parking." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le parking", "le week-end", "le shopping", "le camping", "la pizza"], seg: [
        { es: "Aunque venga del inglés, el acento va al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El fin de semana", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo planean el fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce week-end, je fais du camping. Et toi ?", "Este fin de semana voy de camping. ¿Y tú?"],
      ["camila", "Moi, je fais du shopping et je mange une pizza.", "Yo voy de compras y me como una pizza."],
      ["hugo", "Attention, le parking du centre commercial est complet le samedi.", "Cuidado, el parqueadero del centro comercial está lleno los sábados."],
      ["camila", "Pas de problème, je fais du footing jusqu'au centre !", "¡No hay problema, voy trotando hasta el centro!"]
    ],
    fijate: "Fíjate: week-end [wikɛnd], camping [kɑ̃piŋ], shopping, pizza [pidza], parking, footing: acento al final."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Palabras prestadas",
      idea: "El francés adopta palabras extranjeras pero las pronuncia a la francesa: acento final (parKING, weekEND), r francesa (le leader [lidœʁ]), -ing = [iŋ] (le camping, le shopping). Algunos son falsos anglicismos, que no significan lo mismo en inglés: le parking (parqueadero), le footing (trotar), le brushing (secado de pelo), le smoking (esmoquin).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le parking", es: "el parqueadero — [paʁkiŋ]" },
        { fr: "le week-end", es: "el fin de semana — [wikɛnd]" },
        { fr: "le sandwich · le football", es: "el sándwich · el fútbol — del inglés" },
        { fr: "le shopping · le camping", es: "las compras · el camping — -ing [iŋ]" },
        { fr: "le footing", es: "salir a trotar" },
        { fr: "le brushing · le smoking", es: "el secado de pelo · el esmoquin" },
        { fr: "le baby-sitter", es: "la niñera" },
        { fr: "la pizza · le piano", es: "la pizza · el piano — del italiano" },
        { fr: "l'opéra · les spaghetti", es: "la ópera · los espaguetis — del italiano" },
        { fr: "complet", es: "lleno, completo" }
      ],
      ej: [["Je fais du shopping le week-end.", "Voy de compras el fin de semana."], ["Le parking est complet.", "El parqueadero está lleno."], ["On mange une pizza ?", "¿Comemos una pizza?"]],
      clave: "Préstamo o no, el acento va al final." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["parking (acento en par-)", "parking (acento en -king)", "Acento final, incluso en préstamos."], ["Ce weekend, je vais faire du camping.", "Ce week-end, je vais faire du camping.", "week-end lleva guion."], ["le footing = el fútbol", "le footing = trotar", "Fútbol es le football."]] }
  ],
  ejemplos: [
    { sit: "«el fin de semana»", resp: "le week-end", pasos: ["[wikɛnd], con guion."], porque: "Préstamo." },
    { sit: "«Voy de compras.»", resp: "Je fais du shopping.", pasos: ["-ing = [iŋ]."], porque: "Del inglés." },
    { sit: "«el parqueadero»", resp: "le parking", pasos: ["Falso anglicismo."], porque: "En inglés es car park." }
  ],
  comprueba: [
    { q: "En los préstamos, el acento va…", o: ["al final", "donde va en inglés"], a: 0, b: "phono", porque: "A la francesa." },
    { q: "Le footing es…", o: ["salir a trotar", "el fútbol"], a: 0, b: "phono", porque: "football = fútbol." },
    { q: "Week-end se escribe…", o: ["con guion", "junto"], a: 0, b: "phono", porque: "week-end." }
  ],
  practica: [
    { fase: "guiada", c: ["fem-prononcer"], k: "sort", ask: "¿Del inglés o del italiano?", q: "Clasifica.", cats: ["Del inglés", "Del italiano"], items: [["le parking", 0], ["le week-end", 0], ["le sandwich", 0], ["le football", 0], ["la pizza", 1], ["l'opéra", 1], ["le piano", 1], ["les spaghetti", 1]], pista: "-ing, week-: inglés.", why: "Préstamos." },
    { fase: "guiada", c: ["fem-prononcer"], k: "choice", es: true, say: "le week-end", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[wikɛnd]", "[ˈwiːkend]"], a: 0, pista: "Acento final.", why: "<b>le week-end</b>." },
    { fase: "guiada", c: ["fem-faux"], k: "choice", es: true, say: "le footing", ask: "Escucha. ¿Qué es?", q: "Elige.", o: ["salir a trotar", "el fútbol"], a: 0, pista: "Falso anglicismo.", why: "<b>le footing</b>." },
    { fase: "indep", c: ["fem-faux"], k: "fill", ask: "Escribe «parqueadero».", q: "Le ___ est complet, je me gare dans la rue.", acc: ["parking"], why: "<b>le parking</b>." },
    { fase: "indep", c: ["fem-prononcer"], k: "choice", es: true, say: "le camping", ask: "Escucha. ¿Cómo termina?", q: "Elige.", o: ["[iŋ]", "[in]"], a: 0, why: "<b>camping</b>." },
    { fase: "indep", c: ["fem-prononcer"], k: "spot", ask: "Encuentra el error.", s: "Ce [weekend] , je vais faire du camping .", fix: "week-end", why: "<b>week-end</b>." },
    { fase: "aplica", c: ["fem-faux"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le shopping", "las compras"], ["le brushing", "el secado de pelo"], ["le baby-sitter", "la niñera"], ["le smoking", "el esmoquin"]], why: "Préstamos." },
    { fase: "aplica", c: ["fem-prononcer"], k: "choice", ask: "«¿Comemos una pizza?»", q: "«On mange une ___ ?»", o: ["pizza", "parking"], a: 0, why: "<b>une pizza</b>." },
    { fase: "dominio", c: ["fem-faux"], k: "choice", ask: "«El parqueadero está lleno.»", q: "«Le ___ est complet.»", o: ["parking", "footing", "camping"], a: 0, why: "<b>Le parking est complet.</b>" },
    { fase: "dominio", c: ["fem-prononcer", "fem-faux"], k: "order", ask: "Ordena: «Voy de compras el fin de semana».", tokens: ["Je fais", "du shopping", "le week-end."], why: "<b>Je fais du shopping le week-end.</b>" },
    { fase: "dominio", c: ["fem-prononcer", "fem-faux"], k: "listen", say: "Ce week-end, je fais du shopping et je mange une pizza.", acc: ["Ce week-end, je fais du shopping et je mange une pizza."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce week-end, je fais du shopping et je mange une pizza.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ce", "je", "fais", "du", "et", "toi", "moi", "mange", "une", "attention", "centre", "commercial", "est", "samedi", "pas", "de", "problème", "jusqu'au", "on", "me", "gare", "dans", "la", "rue", "vais", "faire"] }
};

E["fon-noms-propres"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Prononcer les noms propres : Paris, Reims, Saint-Saëns",
  objetivo: {
    que: "Vas a pronunciar bien nombres de ciudades y de personas francesas, con sus excepciones.",
    corto: "Paris [paʁi] · Reims [ʁɛ̃s] · Hugo [ygo].",
    podras: ["Aplicar las reglas generales: Paris, Bordeaux, Nantes.", "Recordar las excepciones: Reims, Metz, Caen.", "Pronunciar autores: Victor Hugo, Camus, Descartes."],
    iconos: ["ic2/torre-eiffel", "ic2/mundo", "ic2/libro"],
    previos: ["Las consonantes finales (lección 30) y las palabras trampa (lección 59)."],
    capacidad: "Ahora hablas de ciudades y autores franceses sin dudar."
  },
  requiere: R("fcf-muettes", "fmp-mots"), recupera: ["fcf-muettes"],
  conceptos: {
    "fnp-villes": { n: "ciudades: reglas generales (Paris, Bordeaux) y excepciones (Reims, Metz, Caen)", b: "phono" },
    "fnp-gens": { n: "personas: Victor Hugo [ygo], Camus [kamy], Descartes [dekaʁt]", b: "phono" }
  },
  video: {
    titulo: "Nombres propios", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "Paris · Reims", seg: [
        { es: "Hola. Los nombres propios siguen las reglas… casi siempre." } ] },
      { v: "frase", filas: [
          { nota: "regla", p: 1, partes: [["Paris · Bordeaux", "-", 1]] },
          { nota: "excepción", p: 2, partes: [["Reims · Metz", "-", 2]] },
          { nota: "autores", p: 3, partes: [["Victor Hugo · Camus", "-", 3]] } ], seg: [
        { es: "La ese de París no suena:", p: 1 }, { fr: "Paris, Bordeaux", p: 1 }, { es: "Aquí sí suena una ese:", p: 2 }, { fr: "Reims, Metz", p: 2 }, { fr: "Victor Hugo, Camus", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Victor Hugo nació en Besanzón.»", o: ["Victor Hugo est né à Besançon.", "Victor Hugo est née à Besançon."], a: 0,
        bien: "¡Sí! Y Hugo suena [ygo].", mal: "Hugo es hombre: né.",
        seg: [ { es: "Pausa. Victor Hugo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Paris", "Bordeaux", "Reims", "Metz", "Hugo", "Camus"], seg: [
        { es: "Reims y Metz terminan en ese.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viaje por Francia", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta su viaje a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai visité Reims et Bordeaux. Après, Metz et Caen !", "Visité Reims y Burdeos. ¡Después, Metz y Caen!"],
      ["hugo", "Et à Besançon, tu as vu la maison de Victor Hugo ?", "¿Y en Besanzón viste la casa de Victor Hugo?"],
      ["camila", "Oui ! Il est né à Besançon et il est mort à Paris.", "¡Sí! Nació en Besanzón y murió en París."],
      ["hugo", "Mon auteur préféré, c'est Albert Camus. Il a écrit L'Étranger.", "Mi autor preferido es Albert Camus. Escribió El extranjero."]
    ],
    fijate: "Fíjate: Reims [ʁɛ̃s], Bordeaux [bɔʁdo], Metz [mɛs], Caen [kɑ̃], Hugo [ygo], Paris [paʁi], Camus [kamy]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Ciudades y personas",
      idea: "Los nombres propios siguen las reglas generales: Paris [paʁi], Bordeaux [bɔʁdo], Nantes [nɑ̃t]. Pero hay excepciones: Reims [ʁɛ̃s], Metz [mɛs], Lens [lɑ̃s], Caen [kɑ̃], Saint-Saëns [sɛ̃sɑ̃s]. Personas: Victor Hugo [ygo], Descartes [dekaʁt], Camus [kamy]. Los nombres extranjeros se afrancesan: Mexico [mɛksiko].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Paris · Bordeaux · Nantes", es: "París · Burdeos · Nantes — reglas generales" },
        { fr: "Reims · Metz · Lens", es: "con s final que suena" },
        { fr: "Caen · Saint-Saëns", es: "[kɑ̃] · [sɛ̃sɑ̃s]" },
        { fr: "Victor Hugo", es: "[viktɔʁ ygo]" },
        { fr: "Albert Camus · Descartes", es: "[kamy] · [dekaʁt]" },
        { fr: "Besançon", es: "Besanzón" },
        { fr: "Genève · Bruxelles", es: "Ginebra · Bruselas — [bʁysɛl]" },
        { fr: "Québec · Dakar", es: "Quebec · Dakar" },
        { fr: "la Suisse · la Belgique", es: "Suiza · Bélgica" },
        { fr: "le Canada · le Sénégal", es: "Canadá · Senegal" },
        { fr: "la capitale de la France", es: "la capital de Francia" }
      ],
      ej: [["J'ai visité Reims et Bordeaux.", "Visité Reims y Burdeos."], ["Victor Hugo est né à Besançon.", "Victor Hugo nació en Besanzón."], ["Albert Camus a écrit L'Étranger.", "Albert Camus escribió El extranjero."]],
      clave: "Paris sin s; Reims y Metz con s." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Paris (con s)", "Paris [paʁi]", "La s final no suena."], ["Bruxelle est la capitale de la Belgique.", "Bruxelles est la capitale de la Belgique.", "Bruxelles lleva s final, que no suena."], ["Hugo (con j española)", "Hugo [ygo]", "La h no suena y la u es [y]."]] }
  ],
  ejemplos: [
    { sit: "«París»", resp: "Paris [paʁi]", pasos: ["s final muda."], porque: "Regla." },
    { sit: "«Reims»", resp: "Reims [ʁɛ̃s]", pasos: ["Excepción: s suena."], porque: "Excepción." },
    { sit: "«Victor Hugo»", resp: "Victor Hugo [ygo]", pasos: ["h muda, u = [y]."], porque: "Persona." }
  ],
  comprueba: [
    { q: "En Paris, la s…", o: ["no suena", "suena"], a: 0, b: "phono", porque: "[paʁi]." },
    { q: "Reims se pronuncia…", o: ["[ʁɛ̃s]", "[ʁɛ̃ms]"], a: 0, b: "phono", porque: "Excepción." },
    { q: "Camus se pronuncia…", o: ["[kamy]", "[kamus]"], a: 0, b: "phono", porque: "s muda." }
  ],
  practica: [
    { fase: "guiada", c: ["fnp-villes", "fnp-gens"], k: "sort", ask: "¿Suena la consonante final?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Reims", 0], ["Metz", 0], ["Saint-Saëns", 0], ["Lens", 0], ["Paris", 1], ["Bordeaux", 1], ["Camus", 1], ["Descartes", 1]], pista: "Reims, Metz, Lens: excepciones.", why: "Nombres propios." },
    { fase: "guiada", c: ["fnp-villes"], k: "choice", es: true, say: "Reims", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[ʁɛ̃s]", "[ʁɛjms]"], a: 0, pista: "Nasal + s.", why: "<b>Reims</b>." },
    { fase: "guiada", c: ["fnp-gens"], k: "choice", es: true, say: "Victor Hugo", ask: "Escucha. ¿Cómo suena el apellido?", q: "Elige.", o: ["[ygo]", "[ugo]", "[xugo]"], a: 0, pista: "u = [y].", why: "<b>Hugo</b> [ygo]." },
    { fase: "indep", c: ["fnp-villes"], k: "fill", ask: "Escribe la capital de Francia.", q: "___ est la capitale de la France.", acc: ["Paris"], why: "<b>Paris</b>." },
    { fase: "indep", c: ["fnp-gens"], k: "choice", es: true, say: "Albert Camus", ask: "Escucha. ¿Cómo suena Camus?", q: "Elige.", o: ["[kamy]", "[kamus]"], a: 0, why: "<b>Camus</b>." },
    { fase: "indep", c: ["fnp-villes"], k: "spot", ask: "Encuentra el error.", s: "[Bruxelle] est la capitale de la Belgique .", fix: "Bruxelles", why: "<b>Bruxelles</b>." },
    { fase: "aplica", c: ["fnp-villes"], k: "match", ask: "Une cada ciudad con su país.", q: "Ciudad → país", pairs: [["Genève", "la Suisse"], ["Bruxelles", "la Belgique"], ["Québec", "le Canada"], ["Dakar", "le Sénégal"]], why: "Francofonía." },
    { fase: "aplica", c: ["fnp-villes"], k: "choice", es: true, say: "Metz", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[mɛs]", "[mɛtz]"], a: 0, why: "<b>Metz</b> [mɛs]." },
    { fase: "dominio", c: ["fnp-gens"], k: "choice", ask: "«Albert Camus escribió El extranjero.»", q: "«Albert ___ a écrit L'Étranger.»", o: ["Camus", "Hugo"], a: 0, why: "<b>Camus</b>." },
    { fase: "dominio", c: ["fnp-villes", "fnp-gens"], k: "order", ask: "Ordena: «Victor Hugo nació en Besanzón».", tokens: ["Victor Hugo", "est né", "à Besançon."], why: "<b>Victor Hugo est né à Besançon.</b>" },
    { fase: "dominio", c: ["fnp-villes", "fnp-gens"], k: "listen", say: "Victor Hugo est né à Besançon et il est mort à Paris.", acc: ["Victor Hugo est né à Besançon et il est mort à Paris."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Victor Hugo est né à Besançon et il est mort à Paris.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Mexico", "L'Étranger"], previo: ["j'ai", "visité", "et", "après", "à", "tu", "as", "vu", "la", "maison", "de", "oui", "il", "est", "né", "mort", "mon", "auteur", "préféré", "c'est", "a", "écrit", "née"] }
};

E["fon-plus-tous"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Plus, tous, six, dix : prononcer ou non la fin",
  objetivo: {
    que: "Vas a pronunciar plus y tous según su sentido: [ply] o [plys], [tu] o [tus].",
    corto: "Je n'en veux plus [ply] · J'en veux plus ! [plys]",
    podras: ["Decir [ply] en la negación y ante adjetivo: je n'en veux plus, plus grand.", "Decir [plys] cuando significa «más» al final o en una suma: deux plus deux.", "Decir tous [tu] ante nombre y [tus] como pronombre."],
    iconos: ["ic2/bombilla", "ic2/audifonos", "ic2/pregunta"],
    previos: ["Los números (lección 15) y los números con liaison (lección 54)."],
    capacidad: "Ahora no dices «ya no quiero» cuando quieres más."
  },
  requiere: R("fnb-final", "fnl-liaison"), recupera: ["fnb-final"],
  conceptos: {
    "fpt-plus": { n: "plus [ply]: negación y ante adjetivo · plus [plys]: «más» al final o en sumas", b: "phono" },
    "fpt-tous": { n: "tous [tu] + nombre (tous les jours) · tous [tus] pronombre (ils sont tous là)", b: "phono" }
  },
  video: {
    titulo: "Plus y tous", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "plus · tous", seg: [
        { es: "Hola. Una ese que suena o no cambia todo el sentido." } ] },
      { v: "dos",
        a: { tag: "[ply]", fr: "Je n'en veux plus.", es: "Ya no quiero." },
        b: { tag: "[plys]", fr: "J'en veux plus !", es: "¡Quiero más!" },
        seg: [ { es: "Sin ese: ya no.", p: 1 }, { fr: "Je n'en veux plus.", p: 1 }, { es: "Con ese: más.", p: 2 }, { fr: "J'en veux plus !", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vinieron todos.»", o: ["Ils sont tous venus.", "Ils sont tout venus."], a: 0,
        bien: "¡Sí! Tous, y aquí la s suena.", mal: "Pronombre plural: tous [tus].",
        seg: [ { es: "Pausa. Todos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["plus [ply]", "plus [plys]", "tous les jours", "ils sont tous là"], seg: [
        { es: "Ya no: ply. Más: plys.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Hugo y Camila están en una fiesta de cumpleaños.",
    pj: PJ,
    lineas: [
      ["hugo", "Ils sont tous venus ! Tu veux du gâteau ?", "¡Vinieron todos! ¿Quieres pastel?"],
      ["camila", "Merci, mais je n'en veux plus. J'ai trop mangé.", "Gracias, pero ya no quiero. Comí demasiado."],
      ["hugo", "Moi, j'en veux plus ! C'est plus grand que l'autre gâteau.", "¡Yo quiero más! Es más grande que el otro pastel."],
      ["camila", "Tous les jours, tu manges du gâteau, toi !", "¡Tú comes pastel todos los días!"]
    ],
    fijate: "Fíjate: tous venus [tus]; n'en veux plus [ply]; j'en veux plus [plys]; plus grand [ply]; tous les jours [tu]."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Según el sentido",
      idea: "plus [ply]: en la negación (je n'en veux plus) y ante adjetivo o adverbio (plus grand). plus [plys]: «más» al final de la frase o con un verbo, y en matemáticas (j'en veux plus, deux plus deux, de plus). tous [tu] ante nombre: tous les jours; tous [tus] como pronombre: ils sont tous là. Y recuerda six y dix: [sis] solos, [si] ante consonante, [siz] ante vocal.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Je n'en veux plus.", es: "Ya no quiero. — [ply]" },
        { fr: "J'en veux plus !", es: "¡Quiero más! — [plys]" },
        { fr: "Il n'y a plus de pain. · Je ne fume plus.", es: "Ya no hay pan. · Ya no fumo. — [ply]" },
        { fr: "C'est plus grand. · plus intéressant", es: "Es más grande. · más interesante — [ply], [plyz]" },
        { fr: "trois plus deux · deux plus deux", es: "tres más dos · dos más dos — [plys]" },
        { fr: "Il travaille plus. · de plus", es: "Trabaja más. · además — [plys]" },
        { fr: "Il n'y en a plus. · Il y en a plus.", es: "No queda. · Hay más." },
        { fr: "tous les jours · tous les amis", es: "todos los días · todos los amigos — [tu]" },
        { fr: "Ils sont tous là. · Ils sont tous venus.", es: "Están todos. · Vinieron todos. — [tus]" },
        { fr: "quatre · font", es: "cuatro · hacen" }
      ],
      ej: [["Je n'en veux plus.", "Ya no quiero más. [ply]"], ["J'en veux plus !", "¡Quiero más! [plys]"], ["Ils sont tous venus.", "Vinieron todos. [tus]"]],
      clave: "Ya no: [ply]. Más, al final: [plys]. Tous solo: [tus]." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ils sont tous là. (dicho [tu])", "Ils sont tous là. [tus]", "Como pronombre, tous hace sonar la s."], ["Mes amis sont tout venus à la fête.", "Mes amis sont tous venus à la fête.", "Plural masculino: tous."], ["J'en veux plus ! (dicho [ply])", "J'en veux plus ! [plys]", "Para decir «más», suena la s."]] }
  ],
  ejemplos: [
    { sit: "«Ya no quiero.»", resp: "Je n'en veux plus. [ply]", pasos: ["Negación: sin s."], porque: "[ply]." },
    { sit: "«¡Quiero más!»", resp: "J'en veux plus ! [plys]", pasos: ["«Más» al final: s."], porque: "[plys]." },
    { sit: "«Están todos.»", resp: "Ils sont tous là. [tus]", pasos: ["Pronombre: s."], porque: "[tus]." }
  ],
  comprueba: [
    { q: "En «Je n'en veux plus», plus suena…", o: ["[ply]", "[plys]"], a: 0, b: "phono", porque: "Negación." },
    { q: "En «deux plus deux», plus suena…", o: ["[plys]", "[ply]"], a: 0, b: "phono", porque: "Suma." },
    { q: "En «tous les jours», tous suena…", o: ["[tu]", "[tus]"], a: 0, b: "phono", porque: "Ante nombre." }
  ],
  practica: [
    { fase: "guiada", c: ["fpt-plus"], k: "sort", ask: "¿Suena la s de plus?", q: "Clasifica.", cats: ["No [ply]", "Sí [plys]"], items: [["Il n'y a plus de pain.", 0], ["C'est plus grand.", 0], ["Je ne fume plus.", 0], ["Je n'en veux plus.", 0], ["J'en veux plus !", 1], ["trois plus deux", 1], ["Il travaille plus.", 1], ["de plus", 1]], pista: "Negación: sin s.", why: "plus." },
    { fase: "guiada", c: ["fpt-plus"], k: "choice", es: true, say: "J'en veux plus !", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Quiero más", "Ya no quiero"], a: 0, pista: "Se oye la s.", why: "<b>J'en veux plus !</b> [plys]" },
    { fase: "guiada", c: ["fpt-plus"], k: "choice", es: true, say: "Je n'en veux plus.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Ya no quiero", "Quiero más"], a: 0, pista: "ne… plus.", why: "<b>Je n'en veux plus.</b> [ply]" },
    { fase: "indep", c: ["fpt-plus"], k: "fill", ask: "Escribe «más».", q: "Deux ___ deux font quatre.", acc: ["plus"], why: "<b>plus</b> [plys]." },
    { fase: "indep", c: ["fpt-tous"], k: "choice", es: true, say: "Ils sont tous là.", ask: "Escucha. ¿Cómo suena tous?", q: "Elige.", o: ["[tus]", "[tu]"], a: 0, why: "Pronombre: <b>[tus]</b>." },
    { fase: "indep", c: ["fpt-tous"], k: "spot", ask: "Encuentra el error.", s: "Mes amis sont [tout] venus à la fête .", fix: "tous", why: "<b>tous</b>." },
    { fase: "aplica", c: ["fpt-plus", "fpt-tous"], k: "match", ask: "Une cada frase con su significado.", q: "Francés → español", pairs: [["Il n'y en a plus.", "No queda."], ["Il y en a plus.", "Hay más."], ["tous les amis", "todos los amigos"], ["Ils sont tous là.", "Están todos."]], why: "Sentido." },
    { fase: "aplica", c: ["fpt-tous"], k: "choice", es: true, say: "tous les jours", ask: "Escucha. ¿Cómo suena tous?", q: "Elige.", o: ["[tu]", "[tus]"], a: 0, why: "Ante nombre: <b>[tu]</b>." },
    { fase: "dominio", c: ["fpt-tous"], k: "choice", ask: "«Vinieron todos.»", q: "«Ils sont ___ venus.»", o: ["tous", "tout"], a: 0, why: "<b>tous</b> [tus]." },
    { fase: "dominio", c: ["fpt-plus", "fpt-tous"], k: "order", ask: "Ordena: «Todos los días quiero más».", tokens: ["Tous les jours,", "j'en veux", "plus."], why: "<b>Tous les jours, j'en veux plus.</b>" },
    { fase: "dominio", c: ["fpt-plus", "fpt-tous"], k: "listen", say: "Ils sont tous venus et je n'en veux plus.", acc: ["Ils sont tous venus et je n'en veux plus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ils sont tous venus et je n'en veux plus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["ils", "sont", "tu", "veux", "du", "gâteau", "merci", "mais", "j'ai", "trop", "mangé", "moi", "c'est", "que", "l'autre", "manges", "toi", "mes", "amis", "à", "la", "fête", "et", "je", "n'en", "j'en"] }
};

E["fon-interjections"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Euh, ben, bah, ouais, hein : l'oral spontané",
  objetivo: {
    que: "Vas a entender las muletillas del francés hablado y a saber cuándo no usarlas.",
    corto: "Euh… · Ben, pourquoi pas ? · Ouais. · Hein ?",
    podras: ["Entender euh, ben, bah, ouais, hein y quoi.", "Distinguir el registro familiar (ouais) del neutro (oui).", "Usar oui, pardon ?, eh bien en situaciones formales."],
    iconos: ["ic2/movil", "ic2/audifonos", "ic2/amigos"],
    previos: ["La e que cae al hablar (lección 46) y la voz de las emociones (lección 50)."],
    capacidad: "Ahora entiendes una conversación espontánea."
  },
  requiere: R("fem-chute", "fem-ecrit", "fie-surprise"), recupera: ["fem-ecrit"],
  conceptos: {
    "fij-sens": { n: "euh (duda), ben / bah (pues), ouais (sí), hein ? (¿eh?), bof (meh), quoi (o sea)", b: "co" },
    "fij-registre": { n: "familiar (ouais, bof, hein) / neutro y formal (oui, pardon ?, eh bien)", b: "co" }
  },
  video: {
    titulo: "Muletillas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "euh · ben · ouais", seg: [
        { es: "Hola. Así suena una conversación real entre franceses." } ] },
      { v: "dos",
        a: { tag: "familiar", fr: "Ouais, d'accord.", es: "con amigos" },
        b: { tag: "neutro", fr: "Oui, d'accord.", es: "en un examen" },
        seg: [ { es: "Con amigos:", p: 1 }, { fr: "Ouais, d'accord.", p: 1 }, { es: "En un examen o en el trabajo:", p: 2 }, { fr: "Oui, d'accord.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ben, je sais pas» significa…", es: true, o: ["Pues, no sé.", "Bien, lo sé."], a: 0,
        bien: "¡Sí! Ben = pues.", mal: "Ben no es bien: es pues.",
        seg: [ { es: "Pausa. Ben." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["euh…", "ben", "bah", "ouais", "hein ?", "bof", "quoi"], seg: [
        { es: "Entiéndelas; en un examen, di oui.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Charla de pasillo", img: "bg-universidad", yo: "camila",
    escena: "Hugo invita a Camila; ella duda.",
    pj: PJ,
    lineas: [
      ["hugo", "On va au concert demain, hein ?", "Vamos al concierto mañana, ¿eh?"],
      ["camila", "Euh… ben, je ne sais pas, peut-être demain.", "Eh… pues, no sé, quizás mañana."],
      ["hugo", "Bah, pourquoi pas ? C'était sympa la dernière fois, quoi.", "Pues, ¿por qué no? La última vez estuvo chévere, o sea."],
      ["camila", "Ouais, d'accord ! Mais le film d'hier… bof.", "¡Sí, de acuerdo! Pero la película de ayer… meh."]
    ],
    fijate: "Fíjate: hein ?, euh…, ben, bah, quoi, ouais, bof: todo familiar."
  },
  ensena: [
    { id: "co", tipo: "vocab", titulo: "Muletillas e interjecciones",
      idea: "En la conversación real aparecen muletillas: euh… (duda, busca la palabra), ben / bah (pues: Ben, je sais pas), ouais (sí, familiar; mouais: sí poco convencido), hein ? (¿eh?, ¿qué?), bof (meh, poco entusiasmo), quoi al final (o sea: C'était bien, quoi). Son familiares: en un examen oral o en el trabajo usa oui, pardon ?, eh bien.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "euh…", es: "eh… — duda" },
        { fr: "ben · bah", es: "pues — para empezar una respuesta" },
        { fr: "ouais · mouais", es: "sí · sí, poco convencido — familiar" },
        { fr: "hein ?", es: "¿eh? / ¿qué? — familiar" },
        { fr: "bof", es: "meh — indiferencia" },
        { fr: "quoi (al final)", es: "o sea — resume" },
        { fr: "oui · pardon ? · eh bien", es: "sí · ¿perdón? · pues bien — neutro, formal" },
        { fr: "peut-être · pourquoi pas ?", es: "quizás · ¿por qué no?" },
        { fr: "C'était sympa.", es: "Estuvo chévere." },
        { fr: "la réunion · présent", es: "la reunión · presente" }
      ],
      ej: [["Euh… je crois que oui.", "Eh… creo que sí."], ["Ben, pourquoi pas ?", "Pues, ¿por qué no?"], ["C'était sympa, quoi.", "Estuvo chévere, o sea."]],
      clave: "Familiar con amigos; oui y pardon en registro formal." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ouais, je serai présent à la réunion.", "Oui, je serai présent à la réunion.", "Las muletillas son familiares."], ["ben = bien", "ben = pues", "Ben no significa bien."], ["Hein ? (al profesor)", "Pardon ?", "Hein es familiar; pardon es cortés."]] }
  ],
  ejemplos: [
    { sit: "Dudas antes de responder.", resp: "Euh…", pasos: ["Busca la palabra."], porque: "Duda." },
    { sit: "Aceptas con un amigo.", resp: "Ouais, d'accord.", pasos: ["Familiar."], porque: "Entre amigos." },
    { sit: "No oíste al profesor.", resp: "Pardon ?", pasos: ["Formal."], porque: "No hein." }
  ],
  comprueba: [
    { q: "Ouais es…", o: ["familiar", "formal"], a: 0, b: "co", porque: "Con amigos." },
    { q: "Ben, al empezar una respuesta, significa…", o: ["pues", "bien"], a: 0, b: "co", porque: "Muletilla." },
    { q: "Bof expresa…", o: ["poco entusiasmo", "mucha alegría"], a: 0, b: "co", porque: "Meh." }
  ],
  practica: [
    { fase: "guiada", c: ["fij-registre"], k: "sort", ask: "¿Familiar o neutro / formal?", q: "Clasifica.", cats: ["Familiar", "Neutro / formal"], items: [["ouais", 0], ["bof", 0], ["ben", 0], ["hein ?", 0], ["oui", 1], ["pardon ?", 1], ["eh bien", 1], ["peut-être", 1]], pista: "¿Lo dirías en un examen?", why: "Registro." },
    { fase: "guiada", c: ["fij-sens"], k: "choice", es: true, say: "Bof…", ask: "Escucha. ¿Qué expresa?", q: "Elige.", o: ["Poco entusiasmo", "Gran alegría", "Sorpresa"], a: 0, pista: "Meh.", why: "<b>Bof</b>." },
    { fase: "guiada", c: ["fij-registre"], k: "choice", es: true, say: "Ouais, d'accord.", ask: "Escucha. ¿Qué registro es?", q: "Elige.", o: ["Familiar", "Formal"], a: 0, pista: "ouais.", why: "<b>Ouais</b>: familiar." },
    { fase: "indep", c: ["fij-registre"], k: "fill", ask: "Escribe «sí» en registro neutro.", q: "___, je viens avec toi.", acc: ["Oui", "oui"], why: "<b>Oui</b>." },
    { fase: "indep", c: ["fij-sens"], k: "choice", es: true, say: "Hein ?", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["¿Eh? / ¿Qué?", "Sí"], a: 0, why: "<b>Hein ?</b>" },
    { fase: "indep", c: ["fij-registre"], k: "spot", ask: "Encuentra el error (registro formal).", s: "[Ouais] , je serai présent à la réunion .", fix: "Oui", why: "<b>Oui</b>." },
    { fase: "aplica", c: ["fij-sens"], k: "match", ask: "Une cada muletilla con su uso.", q: "Muletilla → uso", pairs: [["euh", "dudar"], ["ben", "introducir una respuesta"], ["quoi", "resumir al final"], ["bof", "mostrar indiferencia"]], why: "Usos." },
    { fase: "aplica", c: ["fij-sens"], k: "choice", es: true, say: "Ben, je sais pas.", ask: "Escucha. ¿Qué significa?", q: "Elige.", o: ["Pues, no sé.", "Bien, lo sé."], a: 0, why: "<b>Ben</b> = pues." },
    { fase: "dominio", c: ["fij-registre"], k: "choice", ask: "No oíste lo que dijo el profesor. ¿Qué dices?", q: "«___»", o: ["Pardon ?", "Hein ?"], a: 0, why: "<b>Pardon ?</b>: cortés." },
    { fase: "dominio", c: ["fij-sens", "fij-registre"], k: "order", ask: "Ordena: «Pues, ¿por qué no?».", tokens: ["Ben,", "pourquoi", "pas ?"], why: "<b>Ben, pourquoi pas ?</b>" },
    { fase: "dominio", c: ["fij-sens", "fij-registre"], k: "listen", say: "Euh, ben, je ne sais pas, peut-être demain.", acc: ["Euh, ben, je ne sais pas, peut-être demain.", "Euh… ben, je ne sais pas, peut-être demain."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Euh, ben, je ne sais pas, peut-être demain.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["on", "va", "au", "concert", "demain", "je", "ne", "sais", "pas", "c'était", "la", "dernière", "fois", "d'accord", "mais", "le", "film", "d'hier", "crois", "que", "viens", "avec", "toi", "serai", "à"] }
};

E["fon-epeler"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Épeler vite : accents, doubles lettres, tirets",
  objetivo: {
    que: "Vas a deletrear en francés con las letras, los acentos y los signos: e accent aigu, deux « l », arobase.",
    corto: "ana point lopez arobase mail point com.",
    podras: ["Precisar acentos al deletrear: e accent aigu, e accent grave, c cédille.", "Decir las dobles: deux « p ».", "Dictar un correo con point, arobase, tiret bas y trait d'union."],
    iconos: ["ic2/lapiz", "ic2/movil", "ic2/laptop"],
    previos: ["El alfabeto (Primeros pasos, lección 4) y los acentos (lección 26)."],
    capacidad: "Ahora deletreas tu nombre y tu correo por teléfono."
  },
  requiere: R("al-dificiles", "fac-e"), recupera: ["al-dificiles"],
  conceptos: {
    "fep-accents": { n: "e accent aigu (é), e accent grave (è), e accent circonflexe (ê), c cédille (ç), deux « l »", b: "phono" },
    "fep-signes": { n: "arobase (@), point (.), tiret bas (_), trait d'union (-), apostrophe (')", b: "phono" }
  },
  video: {
    titulo: "Deletrear", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "@ · é · ç", seg: [
        { es: "Hola. Para dictar un correo, necesitas los nombres de los signos." } ] },
      { v: "frase", filas: [
          { nota: "é", p: 1, partes: [["e accent aigu", "-", 1]] },
          { nota: "@", p: 2, partes: [["arobase", "-", 2]] },
          { nota: "-", p: 3, partes: [["trait d'union", "-", 3]] } ], seg: [
        { fr: "e accent aigu", p: 1 }, { fr: "arobase", p: 2 }, { fr: "trait d'union", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo se dice @ en francés?", es: true, o: ["arobase", "arroba"], a: 0,
        bien: "¡Sí! Arobase.", mal: "En francés: arobase.",
        seg: [ { es: "Pausa. La arroba." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["arobase", "point", "tiret bas", "trait d'union", "c cédille"], seg: [
        { es: "Arobase, point, com.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La inscripción", img: "bg-universidad", yo: "camila",
    escena: "Camila se inscribe por teléfono con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["sofia", "Votre nom, s'il vous plaît ?", "¿Su apellido, por favor?"],
      ["camila", "Gómez : G, O accent aigu… pardon, O, M, E, Z.", "Gómez: G, O con tilde… perdón, O, M, E, Z."],
      ["sofia", "Et votre adresse e-mail ?", "¿Y su correo electrónico?"],
      ["camila", "Mon adresse, c'est ana point lopez arobase mail point com.", "Mi correo es ana punto lopez arroba mail punto com."]
    ],
    fijate: "Fíjate: accent aigu, point, arobase: así se dicta un correo."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Letras y signos",
      idea: "Para deletrear se dicen las letras del alfabeto francés y se precisan los signos: e accent aigu (é), e accent grave (è), e accent circonflexe (ê), c cédille (ç), deux « l » (ll). Signos: arobase (@), point (.), tiret bas (_), trait d'union (-), apostrophe ('). Letras que confunden a los hispanos: E [ə], I [i], G [ʒe], J [ʒi], U [y], W [dubləve].",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "e accent aigu · e accent grave", es: "é · è" },
        { fr: "e accent circonflexe", es: "ê" },
        { fr: "c cédille", es: "ç" },
        { fr: "deux « p » · deux « l »", es: "dos p · dos l" },
        { fr: "arobase", es: "@" },
        { fr: "point", es: "." },
        { fr: "tiret bas", es: "_" },
        { fr: "trait d'union", es: "-" },
        { fr: "apostrophe", es: "'" },
        { fr: "mail point com", es: "mail.com" },
        { fr: "pardon", es: "perdón" }
      ],
      ej: [["Gómez : G, O accent aigu… pardon, O, M, E, Z.", "Gómez: G, O con tilde…"], ["Mon adresse, c'est ana point lopez arobase mail point com.", "Mi correo es ana.lopez@mail.com."], ["Deux « p », un « t ».", "Dos p, una t."]],
      clave: "@ = arobase; . = point; - = trait d'union." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mon adresse, c'est paul arroba mail point com.", "Mon adresse, c'est paul arobase mail point com.", "@ = arobase en francés."], ["guion (para -)", "trait d'union", "El guion se llama trait d'union."], ["e con acento", "e accent aigu", "Precisa cuál acento."]] }
  ],
  ejemplos: [
    { sit: "Dictas «ana.lopez@mail.com».", resp: "ana point lopez arobase mail point com", pasos: ["point, arobase."], porque: "Signos." },
    { sit: "Deletreas «é».", resp: "e accent aigu", pasos: ["Precisa el acento."], porque: "Acento." },
    { sit: "Deletreas «ç».", resp: "c cédille", pasos: ["Cedilla."], porque: "Signo." }
  ],
  comprueba: [
    { q: "@ en francés se dice…", o: ["arobase", "arroba"], a: 0, b: "phono", porque: "arobase." },
    { q: "El guion (-) se llama…", o: ["trait d'union", "tiret bas"], a: 0, b: "phono", porque: "tiret bas = _." },
    { q: "è se deletrea…", o: ["e accent grave", "e accent aigu"], a: 0, b: "phono", porque: "grave." }
  ],
  practica: [
    { fase: "guiada", c: ["fep-signes"], k: "sort", ask: "¿Acento o signo?", q: "Clasifica.", cats: ["Acento o letra especial", "Signo"], items: [["e accent aigu", 0], ["e accent grave", 0], ["c cédille", 0], ["e accent circonflexe", 0], ["arobase", 1], ["trait d'union", 1], ["apostrophe", 1], ["point", 1]], pista: "¿Va sobre una letra?", why: "Deletrear." },
    { fase: "guiada", c: ["fep-signes"], k: "choice", es: true, say: "arobase", ask: "Escucha. ¿Qué signo es?", q: "Elige.", o: ["@", ".", "-"], a: 0, pista: "Correos.", why: "<b>arobase</b>." },
    { fase: "guiada", c: ["fep-accents"], k: "choice", es: true, say: "e accent grave", ask: "Escucha. ¿Qué letra es?", q: "Elige.", o: ["è", "é", "ê"], a: 0, pista: "Grave.", why: "<b>è</b>." },
    { fase: "indep", c: ["fep-signes"], k: "fill", ask: "Escribe cómo se dice «.».", q: "ana ___ lopez", acc: ["point"], why: "<b>point</b>." },
    { fase: "indep", c: ["fep-signes"], k: "choice", ask: "¿Cómo se dice «-» al deletrear?", q: "«___»", o: ["trait d'union", "tiret bas", "point"], a: 0, why: "<b>trait d'union</b>." },
    { fase: "indep", c: ["fep-signes"], k: "spot", ask: "Encuentra el error.", s: "Mon adresse , c'est paul [arroba] mail point com .", fix: "arobase", why: "<b>arobase</b>." },
    { fase: "aplica", c: ["fep-accents", "fep-signes"], k: "match", ask: "Une cada nombre con su signo.", q: "Nombre → signo", pairs: [["c cédille", "ç"], ["apostrophe", "'"], ["tiret bas", "_"], ["e accent circonflexe", "ê"]], why: "Signos." },
    { fase: "aplica", c: ["fep-accents"], k: "choice", es: true, say: "e accent aigu", ask: "Escucha. ¿Qué letra es?", q: "Elige.", o: ["é", "è"], a: 0, why: "<b>é</b>." },
    { fase: "dominio", c: ["fep-accents"], k: "choice", ask: "Deletreas «ç».", q: "«___»", o: ["c cédille", "c accent"], a: 0, why: "<b>c cédille</b>." },
    { fase: "dominio", c: ["fep-signes"], k: "order", ask: "Ordena el dictado de «ana.lopez@mail.com».", tokens: ["ana point lopez", "arobase", "mail point com"], why: "<b>ana point lopez arobase mail point com</b>" },
    { fase: "dominio", c: ["fep-accents", "fep-signes"], k: "listen", say: "Mon adresse, c'est ana point lopez arobase mail point com.", acc: ["Mon adresse, c'est ana point lopez arobase mail point com."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon adresse, c'est ana point lopez arobase mail point com.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Gómez", "ana", "lopez", "paul"], previo: ["votre", "nom", "s'il", "vous", "plaît", "et", "adresse", "e-mail", "mon", "c'est", "mail", "com", "un", "o", "m", "e", "z", "g", "t"] }
};

E["fon-mots-universite"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Mots de la fac : bibliothèque, exercice, examen",
  objetivo: {
    que: "Vas a pronunciar bien las palabras de la universidad: bibliothèque, exercice, examen, université, professeur.",
    corto: "examen [ɛgzamɛ̃] · bibliothèque [biblijɔtɛk].",
    podras: ["Decir bibliothèque con th = [t] y -que = [k].", "Decir ex- + vocal = [ɛgz]: exercice, examen; y examen terminado en [ɛ̃].", "Usar el vocabulario de clase: le cours, le devoir, la note."],
    iconos: ["ic2/birrete", "ic2/libros", "ic2/lapiz"],
    previos: ["La x (lección 36) y th, ph, qu (lección 35)."],
    capacidad: "Ahora hablas de tus estudios sin tropezar."
  },
  requiere: R("fx-ksgz", "ftp-thph", "ftp-qu"), recupera: ["fx-ksgz"],
  conceptos: {
    "fmu-mots": { n: "bibliothèque [biblijɔtɛk], université, professeur, étudiant", b: "phono" },
    "fmu-ex": { n: "ex- + vocal = [ɛgz] (exercice, examen); ex- + consonante = [ɛks]; examen termina en [ɛ̃]", b: "phono" }
  },
  video: {
    titulo: "Palabras de la universidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "la fac", seg: [
        { es: "Hola. Las palabras que usas cada día en la universidad." } ] },
      { v: "frase", filas: [
          { nota: "th = t", p: 1, partes: [["la bibliothèque", "-", 1]] },
          { nota: "ex = egz", p: 2, partes: [["l'exercice · l'examen", "-", 2]] },
          { nota: "-en = [ɛ̃]", p: 3, partes: [["l'examen", "-", 3]] } ], seg: [
        { fr: "la bibliothèque", p: 1 }, { fr: "l'exercice, l'examen", p: 2 }, { es: "Examen termina como vin:", p: 3 }, { fr: "l'examen", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mañana tengo un examen de fonética.»", o: ["Demain, j'ai un examen de phonétique.", "Demain, j'ai un exament de phonétique."], a: 0,
        bien: "¡Sí! Examen, sin t.", mal: "Se escribe examen.",
        seg: [ { es: "Pausa. Un examen." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la bibliothèque", "l'exercice", "l'examen", "l'université", "le professeur"], seg: [
        { es: "Examen suena egzamán con nasal de vin.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Antes del examen", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara su examen con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je vais à la bibliothèque pour préparer l'examen de phonétique.", "Voy a la biblioteca a preparar el examen de fonética."],
      ["hugo", "Le professeur explique l'exercice demain, au cours du lundi.", "El profesor explica el ejercicio mañana, en la clase del lunes."],
      ["camila", "J'ai beaucoup de devoirs ce semestre !", "¡Tengo muchas tareas este semestre!"],
      ["hugo", "Courage ! Les étudiants de l'université ont tous une bonne note avec lui.", "¡Ánimo! Los estudiantes de la universidad sacan todos buena nota con él."]
    ],
    fijate: "Fíjate: bibliothèque [biblijɔtɛk], examen [ɛgzamɛ̃], exercice [ɛgzɛʁsis], explique [ɛks], université, professeur, étudiants."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "La fac",
      idea: "bibliothèque [biblijɔtɛk]: th = [t], -que = [k]. ex- + vocal = [ɛgz]: exercice, examen, exemple, exact. ex- + consonante = [ɛks]: excellent, expliquer, extérieur, expérience. examen termina en [ɛ̃], como vin, no en [ɑ̃]. La u siempre es [y]: université, lundi.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la bibliothèque", es: "la biblioteca — [biblijɔtɛk]" },
        { fr: "l'université · le professeur", es: "la universidad · el profesor" },
        { fr: "l'étudiant · les étudiants", es: "el estudiante · los estudiantes" },
        { fr: "l'examen · l'exercice", es: "el examen · el ejercicio — [ɛgz]" },
        { fr: "l'exemple · exact", es: "el ejemplo · exacto — [ɛgz]" },
        { fr: "excellent · expliquer", es: "excelente · explicar — [ɛks]" },
        { fr: "l'extérieur · l'expérience", es: "el exterior · la experiencia — [ɛks]" },
        { fr: "le cours · le devoir", es: "la clase · la tarea" },
        { fr: "la note · le semestre", es: "la calificación · el semestre" },
        { fr: "la phonétique · réviser", es: "la fonética · repasar" }
      ],
      ej: [["Je vais à la bibliothèque pour réviser l'examen.", "Voy a la biblioteca a repasar para el examen."], ["Le professeur donne un exercice.", "El profesor da un ejercicio."], ["Les étudiants de l'université", "Los estudiantes de la universidad"]],
      clave: "Examen [ɛgzamɛ̃]: egz al principio, nasal de vin al final." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["examen [ɛgzamɑ̃]", "examen [ɛgzamɛ̃]", "La terminación -en de examen suena [ɛ̃]."], ["Demain, j'ai un exament de phonétique.", "Demain, j'ai un examen de phonétique.", "examen, sin t."], ["bibliothèque (con th inglesa)", "bibliothèque [biblijɔtɛk]", "th = [t]."]] }
  ],
  ejemplos: [
    { sit: "«el examen»", resp: "l'examen [ɛgzamɛ̃]", pasos: ["ex + vocal: [ɛgz]; -en: [ɛ̃]."], porque: "Dos trampas." },
    { sit: "«la biblioteca»", resp: "la bibliothèque", pasos: ["th = [t]."], porque: "[biblijɔtɛk]." },
    { sit: "«El profesor explica.»", resp: "Le professeur explique.", pasos: ["ex + consonante: [ɛks]."], porque: "[ɛksplik]." }
  ],
  comprueba: [
    { q: "Examen termina en…", o: ["[ɛ̃], como vin", "[ɑ̃], como vent"], a: 0, b: "phono", porque: "Excepción." },
    { q: "En exercice, ex- suena…", o: ["[ɛgz]", "[ɛks]"], a: 0, b: "phono", porque: "ex + vocal." },
    { q: "En expliquer, ex- suena…", o: ["[ɛks]", "[ɛgz]"], a: 0, b: "phono", porque: "ex + consonante." }
  ],
  practica: [
    { fase: "guiada", c: ["fmu-ex"], k: "sort", ask: "¿[ɛgz] o [ɛks]?", q: "Clasifica.", cats: ["[ɛgz]", "[ɛks]"], items: [["l'examen", 0], ["l'exercice", 0], ["l'exemple", 0], ["exact", 0], ["excellent", 1], ["expliquer", 1], ["l'extérieur", 1], ["l'expérience", 1]], pista: "¿Vocal después de ex?", why: "ex-." },
    { fase: "guiada", c: ["fmu-ex"], k: "choice", es: true, say: "l'examen", ask: "Escucha. ¿Qué oyes al final?", q: "Elige.", o: ["[ɛ̃], como vin", "[ɑ̃], como vent"], a: 0, pista: "Excepción.", why: "<b>examen</b> [ɛgzamɛ̃]." },
    { fase: "guiada", c: ["fmu-mots"], k: "choice", es: true, say: "la bibliothèque", ask: "Escucha. ¿Qué oyes?", q: "Elige.", o: ["[biblijɔtɛk]", "[biblioθek]"], a: 0, pista: "th = t.", why: "<b>bibliothèque</b>." },
    { fase: "indep", c: ["fmu-mots"], k: "fill", ask: "Escribe «biblioteca».", q: "Je révise à la ___.", acc: ["bibliothèque"], why: "<b>bibliothèque</b>." },
    { fase: "indep", c: ["fmu-ex"], k: "choice", es: true, say: "l'exercice", ask: "Escucha. ¿Cómo suena?", q: "Elige.", o: ["[ɛgzɛʁsis]", "[ɛksɛʁsis]"], a: 0, why: "<b>exercice</b>." },
    { fase: "indep", c: ["fmu-ex"], k: "spot", ask: "Encuentra el error.", s: "Demain , j'ai un [exament] de phonétique .", fix: "examen", why: "<b>examen</b>." },
    { fase: "aplica", c: ["fmu-mots"], k: "match", ask: "Une cada palabra con su significado.", q: "Francés → español", pairs: [["le cours", "la clase"], ["le devoir", "la tarea"], ["la note", "la calificación"], ["le semestre", "el semestre"]], why: "Vocabulario de clase." },
    { fase: "aplica", c: ["fmu-mots"], k: "choice", es: true, say: "l'université", ask: "Escucha. ¿Cómo suena la u?", q: "Elige.", o: ["[y]", "[u]"], a: 0, why: "<b>université</b>." },
    { fase: "dominio", c: ["fmu-ex"], k: "choice", ask: "«El profesor explica el ejercicio.»", q: "«Le professeur explique l'___.»", o: ["exercice", "examen"], a: 0, why: "<b>l'exercice</b>." },
    { fase: "dominio", c: ["fmu-mots", "fmu-ex"], k: "order", ask: "Ordena: «Voy a la biblioteca a preparar el examen».", tokens: ["Je vais à la bibliothèque", "pour préparer", "l'examen."], why: "<b>Je vais à la bibliothèque pour préparer l'examen.</b>" },
    { fase: "dominio", c: ["fmu-mots", "fmu-ex"], k: "listen", say: "Je vais à la bibliothèque pour préparer l'examen de phonétique.", acc: ["Je vais à la bibliothèque pour préparer l'examen de phonétique."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vais à la bibliothèque pour préparer l'examen de phonétique.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: ["je", "vais", "à", "pour", "préparer", "de", "explique", "demain", "au", "du", "lundi", "j'ai", "beaucoup", "devoirs", "ce", "courage", "ont", "tous", "une", "bonne", "avec", "lui", "révise", "donne", "un"] }
};

E["fon-lecture-voix-haute"] = {
  v: 1, lang: "fr", nivel: "A2", estado: "piloto",
  titulo: "Lire un texte à voix haute",
  objetivo: {
    que: "Vas a preparar y leer un texto en voz alta: grupos, liaisons, puntuación y acento final.",
    corto: "Chaque matin, / les‿étudiants / arrivent‿à la fac.",
    podras: ["Preparar el texto: leer en silencio y marcar grupos (/) y liaisons (‿).", "Leer despacio y claro, respetando la puntuación.", "Acentuar el final de cada grupo y bajar la voz al final de cada frase."],
    iconos: ["ic2/pergamino", "ic2/microfono", "ic2/trofeo"],
    previos: ["Los grupos rítmicos (lección 51), la lectura con puntuación (lección 53) y las liaisons (lecciones 41 a 43)."],
    capacidad: "Ahora lees en voz alta como un lector francés."
  },
  requiere: R("fgr-couper", "flp-pauses", "flo-cas", "flf-cas"), recupera: ["fgr-couper"],
  conceptos: {
    "flv-preparer": { n: "preparar: leer en silencio, marcar grupos (/) y liaisons (‿)", b: "phono" },
    "flv-lire": { n: "leer despacio y claro; acento al final del grupo; voz abajo al final de la frase", b: "phono" }
  },
  video: {
    titulo: "Leer en voz alta", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "/ · ‿ · ↘", seg: [
        { es: "Hola. Última lección: junta todo lo que aprendiste." } ] },
      { v: "frase", filas: [
          { nota: "grupo 1", p: 1, partes: [["Chaque matin,", "-", 1]] },
          { nota: "grupo 2", p: 2, partes: [["les étudiants", "-", 2]] },
          { nota: "grupo 3 ↘", p: 3, partes: [["arrivent à la fac.", "-", 3]] } ], seg: [
        { fr: "Chaque matin,", p: 1 }, { fr: "les étudiants", p: 2 }, { fr: "arrivent à la fac.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué haces primero?", es: true, o: ["Leer en silencio y marcar grupos y liaisons", "Leer rápido en voz alta"], a: 0,
        bien: "¡Sí! Primero se prepara.", mal: "Antes de leer, prepara el texto.",
        seg: [ { es: "Pausa. ¿Qué haces primero?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["/", "‿", "↗", "↘"], seg: [
        { es: "Claro antes que rápido. ¡Felicidades por terminar Fonética!", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La lectura final", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee un texto frente a la clase.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, lis le texte à voix haute. Prends ton temps.", "Camila, lee el texto en voz alta. Tómate tu tiempo."],
      ["camila", "Chaque matin, les étudiants arrivent à la fac en bus.", "Cada mañana, los estudiantes llegan a la universidad en bus."],
      ["camila", "Il fait beau, alors on sort. Nous avons lu un texte important.", "Hace buen tiempo, entonces salimos. Leímos un texto importante."],
      ["sofia", "Excellent ! Tu lis lentement, mais clairement.", "¡Excelente! Lees despacio, pero con claridad."]
    ],
    fijate: "Fíjate: Chaque matin, / les‿étudiants / arrivent‿à la fac / en bus. Il fait beau, / alors‿on sort."
  },
  ensena: [
    { id: "phono", tipo: "vocab", titulo: "Cuatro pasos",
      idea: "1. Lee el texto en silencio y busca las palabras difíciles. 2. Marca los grupos rítmicos (/) y las liaisons y encadenamientos (‿). 3. Lee despacio: mejor claro que rápido. 4. Acentúa la última sílaba de cada grupo, sube un poco la voz en las comas (↗) y bájala al final de cada frase (↘).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Chaque matin, / les étudiants / arrivent à la fac.", es: "Cada mañana, / los estudiantes / llegan a la universidad." },
        { fr: "Il fait beau, / alors on sort.", es: "Hace buen tiempo, / entonces salimos." },
        { fr: "Nous avons lu / un texte important.", es: "Leímos / un texto importante." },
        { fr: "à voix haute", es: "en voz alta" },
        { fr: "lentement · clairement", es: "despacio · con claridad" },
        { fr: "chaque · alors", es: "cada · entonces" }
      ],
      ej: [["Chaque matin, les étudiants arrivent à la fac.", "Cada mañana, los estudiantes llegan a la universidad."], ["Il fait beau, alors on sort.", "Hace buen tiempo, entonces salimos."], ["Nous avons lu un texte important.", "Leímos un texto importante."]],
      clave: "/ fin de grupo · ‿ unión · ↗ la voz sube · ↘ la voz baja." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Leer rápido para parecer fluido", "Leer claro y con ritmo", "La claridad cuenta más que la velocidad."], ["Les étudiants arrive à la fac à huit heures.", "Les étudiants arrivent à la fac à huit heures.", "Plural: arrivent, aunque la -ent no suene."], ["Acentuar cada palabra", "Acentuar el final de cada grupo", "El acento es de grupo."]] }
  ],
  ejemplos: [
    { sit: "Preparas «Il fait beau, alors on sort».", resp: "Il fait beau, / alors‿on sort.", pasos: ["Grupo, coma, liaison."], porque: "Preparación." },
    { sit: "Lees la coma.", resp: "pausa breve, voz ↗", pasos: ["La frase sigue."], porque: "Coma." },
    { sit: "Terminas la frase.", resp: "voz ↘, pausa larga", pasos: ["Punto."], porque: "Cierre." }
  ],
  comprueba: [
    { q: "Antes de leer en voz alta…", o: ["lees en silencio y marcas grupos y liaisons", "empiezas a leer rápido"], a: 0, b: "phono", porque: "Preparación." },
    { q: "El acento va…", o: ["al final de cada grupo", "en cada palabra"], a: 0, b: "phono", porque: "Acento de grupo." },
    { q: "Al final de la frase, la voz…", o: ["baja", "sube"], a: 0, b: "phono", porque: "↘" }
  ],
  practica: [
    { fase: "guiada", c: ["flv-preparer", "flv-lire"], k: "sort", ask: "¿Grupos bien marcados o mal marcados?", q: "Clasifica.", cats: ["Bien marcados", "Mal marcados"], items: [["Il fait beau, / alors on sort.", 0], ["Ma sœur / habite à Lyon.", 0], ["Chaque matin, / les étudiants", 0], ["Nous avons lu / un texte important.", 0], ["Il / fait beau alors / on sort.", 1], ["Ma / sœur habite à Lyon.", 1], ["Chaque / matin les étudiants", 1], ["Nous / avons lu un / texte", 1]], pista: "Un grupo = una idea.", why: "Marcar grupos." },
    { fase: "guiada", c: ["flv-preparer"], k: "choice", es: true, say: "Chaque matin, les étudiants arrivent à la fac.", ask: "Escucha. ¿Cuántas liaisons oyes?", q: "Elige.", o: ["2: les‿étudiants, arrivent‿à", "0", "4"], a: 0, pista: "les + vocal; arrivent + à.", why: "Dos liaisons." },
    { fase: "guiada", c: ["flv-preparer"], k: "choice", es: true, ask: "¿Qué haces primero con un texto?", q: "Elige.", o: ["Leerlo en silencio y marcar grupos y liaisons", "Leerlo rápido en voz alta"], a: 0, pista: "Preparar.", why: "Preparación." },
    { fase: "indep", c: ["flv-lire"], k: "choice", es: true, ask: "¿Dónde va el acento al leer?", q: "Elige.", o: ["al final de cada grupo", "en cada palabra", "al principio de la frase"], a: 0, why: "Acento de grupo." },
    { fase: "indep", c: ["flv-lire"], k: "fill", ask: "Escribe «despacio».", q: "Tu lis ___, mais clairement.", acc: ["lentement"], why: "<b>lentement</b>." },
    { fase: "indep", c: ["flv-lire"], k: "spot", ask: "Encuentra el error.", s: "Les étudiants [arrive] à la fac à huit heures .", fix: "arrivent", why: "<b>arrivent</b>." },
    { fase: "aplica", c: ["flv-preparer"], k: "match", ask: "Une cada marca con su sentido.", q: "Marca → sentido", pairs: [["/", "fin de grupo rítmico"], ["‿", "liaison o encadenamiento"], ["↗", "la voz sube"], ["↘", "la voz baja"]], why: "Marcas de lectura." },
    { fase: "aplica", c: ["flv-lire"], k: "choice", es: true, say: "Il fait beau, alors on sort.", ask: "Escucha. ¿Cómo va la voz al final?", q: "Elige.", o: ["Baja", "Sube"], a: 0, why: "Final de frase ↘." },
    { fase: "dominio", c: ["flv-preparer", "flv-lire"], k: "choice", ask: "¿Qué frase está bien marcada?", q: "«___»", o: ["Il fait beau, / alors on sort.", "Il / fait beau alors / on sort."], a: 0, why: "Un grupo = una idea." },
    { fase: "dominio", c: ["flv-preparer", "flv-lire"], k: "order", ask: "Ordena los grupos: «Cada mañana, los estudiantes llegan a la universidad».", tokens: ["Chaque matin,", "les étudiants", "arrivent à la fac."], why: "<b>Chaque matin, les étudiants arrivent à la fac.</b>" },
    { fase: "dominio", c: ["flv-preparer", "flv-lire"], k: "listen", say: "Chaque matin, les étudiants arrivent à la fac en bus.", acc: ["Chaque matin, les étudiants arrivent à la fac en bus."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chaque matin, les étudiants arrivent à la fac en bus.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: ["lis", "le", "texte", "à", "prends", "ton", "temps", "en", "bus", "il", "fait", "beau", "on", "sort", "nous", "avons", "lu", "un", "important", "excellent", "tu", "mais", "huit", "heures", "la", "fac", "les"] }
};

})();
