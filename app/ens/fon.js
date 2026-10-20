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

})();
