/* PLEX PLAY 4.58 — Sistema de enseñanza: las fichas del curso «Francés B1.1» (b11). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también A2, el curso anterior).
   B1.1 parte de A2: BASE son todos los conceptos de Primeros pasos, A1 y A2, que las fichas dan por enseñados.
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

/* ================================ B1.1·1 · El relato en pasado ================================ */
E["b11-pc-imparfait"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Passé composé ou imparfait ?",
  objetivo: {
    que: "Vas a combinar los dos pasados para contar una historia: el imparfait pinta el decorado y el passé composé cuenta los hechos.",
    corto: "Il pleuvait quand je suis arrivé.",
    podras: ["Usar el imparfait para descripciones, costumbres y acciones en curso.", "Usar el passé composé para los hechos que hacen avanzar la historia.", "Combinar los dos: acción en curso + quand + interrupción."],
    iconos: ["ic2/libro", "ic2/reloj-arena", "ic2/lapiz"],
    previos: ["El imparfait (A2, lección 3) y passé composé o imparfait (A2, lección 14)."],
    capacidad: "Ahora cuentas una historia con decorado y acción."
  },
  requiere: R("pi-decor", "pi-fait", "imp-uso"), recupera: ["pi-decor", "pi-fait"],
  conceptos: {
    "b1pi-decor": { n: "imparfait: decorado, costumbre, acción en curso (d'habitude, à cette époque)", b: "gr" },
    "b1pi-fait": { n: "passé composé: hecho puntual que hace avanzar la historia (soudain, un jour)", b: "gr" }
  },
  video: {
    titulo: "Decorado y hechos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "imparfait · passé composé", seg: [
        { es: "Hola. Una historia tiene un decorado y unos hechos." } ] },
      { v: "frase", filas: [
          { nota: "decorado", p: 1, partes: [["Il pleuvait", "imparfait", 1]] },
          { nota: "hecho", p: 2, partes: [["quand je suis arrivé.", "passé composé", 2]] } ], seg: [
        { es: "El decorado, en imparfait:", p: 1 }, { fr: "Il pleuvait", p: 1 }, { es: "El hecho, en passé composé:", p: 2 }, { fr: "quand je suis arrivé.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«De repente, sonó el teléfono.»", o: ["Soudain, le téléphone a sonné.", "Soudain, le téléphone sonnait."], a: 0,
        bien: "¡Sí! Hecho puntual: passé composé.", mal: "Soudain anuncia un hecho: a sonné.",
        seg: [ { es: "Pausa. De repente." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["d'habitude", "à cette époque", "soudain", "tout à coup", "ce jour-là"], seg: [
        { es: "¿Describes? Imparfait. ¿Avanza la historia? Passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El primer día", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo su primer día en Lyon.",
    pj: PJ,
    lineas: [
      ["camila", "Quand je suis arrivée à la fac, il faisait très froid et je ne connaissais personne.", "Cuando llegué a la universidad, hacía mucho frío y no conocía a nadie."],
      ["hugo", "Et qu'est-ce qui s'est passé ?", "¿Y qué pasó?"],
      ["camila", "J'étais en cours quand ma mère m'a appelée. Soudain, le téléphone a sonné très fort !", "Estaba en clase cuando mi mamá me llamó. ¡De repente, el teléfono sonó muy fuerte!"],
      ["hugo", "Ha ha ! D'habitude, nous déjeunions au restaurant universitaire à midi. Tu es venue ?", "¡Ja, ja! Normalmente almorzábamos en el restaurante universitario a mediodía. ¿Viniste?"]
    ],
    fijate: "Fíjate: faisait, connaissais, étais, déjeunions (decorado y costumbre); suis arrivée, a appelée, a sonné (hechos)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos pasados para contar",
      idea: "¿Describes, cuentas una costumbre o algo que estaba pasando? → imparfait. ¿Es un hecho puntual, terminado, que hace avanzar la historia? → passé composé. Pistas: d'habitude, tous les samedis, à cette époque, autrefois → imparfait; soudain, tout à coup, un jour, ce jour-là → passé composé. Acción en curso (imparfait) + quand + interrupción (passé composé).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["Il pleuvait quand je suis arrivé.", "Llovía cuando llegué.", "decorado + hecho"],
        ["il faisait froid", "hacía frío", "imparfait"],
        ["je ne connaissais personne", "no conocía a nadie", "imparfait"],
        ["D'habitude, je prenais le bus.", "Normalmente tomaba el bus.", "costumbre"],
        ["nous déjeunions", "almorzábamos", "imparfait"],
        ["nous faisions la queue", "hacíamos fila", "imparfait"],
        ["Soudain, le téléphone a sonné.", "De repente, sonó el teléfono.", "hecho"],
        ["l'alarme a sonné", "sonó la alarma", "passé composé"],
        ["une voiture a freiné", "un carro frenó", "passé composé"],
        ["Le voleur est entré, a pris le sac et est parti.", "El ladrón entró, tomó el bolso y se fue.", "serie de hechos"]
      ]],
      ej: [["d'habitude", "normalmente"], ["tous les samedis", "todos los sábados"], ["à cette époque", "en esa época"], ["autrefois", "antes"], ["soudain", "de repente"], ["tout à coup", "de repente"], ["ce jour-là", "ese día"], ["un jour", "un día"], ["tranquillement", "tranquilamente"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand je suis arrivé, il a plu. (si ya llovía)", "Quand je suis arrivé, il pleuvait.", "El decorado va en imparfait."], ["Une voiture freinait devant moi. (de repente)", "Une voiture a freiné devant moi.", "Hecho puntual: passé composé."], ["D'habitude, nous avons déjeuné au restaurant.", "D'habitude, nous déjeunions au restaurant.", "Costumbre: imparfait."]] }
  ],
  ejemplos: [
    { sit: "«Leía tranquilamente cuando sonó la alarma.»", resp: "Je lisais tranquillement quand l'alarme a sonné.", pasos: ["Acción en curso: imparfait.", "Interrupción: passé composé."], porque: "Interrupción." },
    { sit: "«Normalmente almorzábamos a mediodía.»", resp: "D'habitude, nous déjeunions à midi.", pasos: ["Costumbre: imparfait."], porque: "d'habitude." },
    { sit: "«Ese día, el profesor me felicitó.»", resp: "Ce jour-là, le professeur m'a félicité.", pasos: ["Hecho puntual: passé composé."], porque: "ce jour-là." }
  ],
  comprueba: [
    { q: "Una costumbre del pasado va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "d'habitude." },
    { q: "Después de soudain suele ir…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Hecho puntual." },
    { q: "En «acción en curso + quand + interrupción», la interrupción va en…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Hecho." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pi-decor", "b1pi-fait"], k: "sort", ask: "¿Con qué tiempo suele ir?", q: "Clasifica.", cats: ["Suele ir con imparfait", "Suele ir con passé composé"], items: [["d'habitude", 0], ["tous les samedis", 0], ["à cette époque", 0], ["autrefois", 0], ["soudain", 1], ["tout à coup", 1], ["ce jour-là", 1], ["un jour", 1]], pista: "Costumbre o hecho.", why: "Marcadores." },
    { fase: "guiada", c: ["b1pi-decor"], k: "choice", ask: "«Cuando llegué, hacía mucho frío.»", q: "«Quand je suis arrivée à la fac, il ___ très froid.»", o: ["faisait", "a fait"], a: 0, pista: "Decorado.", why: "<b>il faisait</b>: decorado." },
    { fase: "guiada", c: ["b1pi-fait"], k: "fill", ask: "Conjuga sonner.", q: "Je lisais tranquillement quand, tout à coup, l'alarme ___.", acc: ["a sonné"], pista: "Interrupción.", why: "<b>a sonné</b>." },
    { fase: "indep", c: ["b1pi-decor"], k: "fill", ask: "Conjuga déjeuner.", q: "D'habitude, nous ___ au restaurant universitaire à midi.", acc: ["déjeunions"], why: "<b>déjeunions</b>: costumbre." },
    { fase: "indep", c: ["b1pi-fait"], k: "spot", ask: "Encuentra el error.", s: "Je traversais la rue quand , soudain , une voiture [freinait] devant moi .", fix: "a freiné", why: "<b>a freiné</b>: hecho puntual." },
    { fase: "indep", c: ["b1pi-fait"], k: "choice", ask: "¿Qué versión es la correcta?", q: "«___»", o: ["Le voleur est entré, a pris le sac et est parti.", "Le voleur entrait, prenait le sac et partait."], a: 0, why: "Serie de hechos: passé composé." },
    { fase: "aplica", c: ["b1pi-decor"], k: "fill", ask: "Conjuga faire.", q: "Nous ___ la queue à la préfecture quand elle m'a parlé.", acc: ["faisions"], why: "<b>faisions</b>: acción en curso." },
    { fase: "aplica", c: ["b1pi-decor", "b1pi-fait"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Quand j'étais petit,", "je jouais au football tous les jours."], ["Pendant que je dormais,", "quelqu'un a frappé à la porte."], ["Un jour, en cours,", "le professeur m'a félicité."], ["À cette époque, la résidence", "était vieille mais agréable."]], why: "Decorado y hechos." },
    { fase: "dominio", c: ["b1pi-decor", "b1pi-fait"], k: "order", ask: "Ordena: «Estaba en clase cuando mi mamá me llamó».", tokens: ["J'étais en cours", "quand ma mère", "m'a appelée."], why: "<b>J'étais en cours quand ma mère m'a appelée.</b>" },
    { fase: "dominio", c: ["b1pi-decor"], k: "listen", say: "D'habitude, nous déjeunions au restaurant universitaire à midi.", acc: ["D'habitude, nous déjeunions au restaurant universitaire à midi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>D'habitude, nous déjeunions au restaurant universitaire à midi.</b>" },
    { fase: "dominio", c: ["b1pi-decor", "b1pi-fait"], k: "listen", say: "Je lisais tranquillement quand, tout à coup, l'alarme a sonné.", acc: ["Je lisais tranquillement quand, tout à coup, l'alarme a sonné."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je lisais tranquillement quand, tout à coup, l'alarme a sonné.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-plus-que-parfait"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le plus-que-parfait",
  objetivo: {
    que: "Vas a usar el plus-que-parfait (había hecho) para una acción anterior a otra acción pasada.",
    corto: "Le cours avait déjà commencé.",
    podras: ["Formarlo con avoir o être en imparfait + participio.", "Usar el mismo auxiliar y la misma concordancia que en el passé composé.", "Retroceder en un relato: déjà, parce que, la veille."],
    iconos: ["ic2/reloj-arena", "ic2/libro", "ic2/lapiz"],
    previos: ["El passé composé con avoir y con être (A2, lecciones 1 y 2) y passé composé o imparfait (lección 1)."],
    capacidad: "Ahora puedes retroceder en el tiempo dentro de una historia."
  },
  requiere: R("pca-forma", "pce-verbes", "imp-forma", "b1pi-fait"), recupera: ["pce-verbes"],
  conceptos: {
    "b1pq-forme": { n: "avoir / être en imparfait + participio: j'avais fini, j'étais parti(e)", b: "gr" },
    "b1pq-usage": { n: "acción anterior a otra pasada: le cours avait déjà commencé", b: "gr" }
  },
  video: {
    titulo: "El pasado del pasado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "j'avais fini", seg: [
        { es: "Hola. El plus-que-parfait es el había hecho del español." } ] },
      { v: "frase", filas: [
          { nota: "primero", p: 1, partes: [["Le cours avait déjà commencé", "plus-que-parfait", 1]] },
          { nota: "después", p: 2, partes: [["quand je suis entrée.", "passé composé", 2]] } ], seg: [
        { es: "Primero pasó esto:", p: 1 }, { fr: "Le cours avait déjà commencé", p: 1 }, { es: "Después, esto otro:", p: 2 }, { fr: "quand je suis entrée.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando llegamos, el tren ya se había ido.»", o: ["Quand nous sommes arrivés, le train était déjà parti.", "Quand nous sommes arrivés, le train avait déjà parti."], a: 0,
        bien: "¡Sí! partir va con être.", mal: "Mismo auxiliar que en passé composé: était parti.",
        seg: [ { es: "Pausa. Ya se había ido." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'avais fini", "j'étais parti", "déjà", "la veille", "si seulement"], seg: [
        { es: "Auxiliar en imparfait más participio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un día complicado", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo un mal día.",
    pj: PJ,
    lineas: [
      ["camila", "Quand je suis entrée dans l'amphi, le cours avait déjà commencé.", "Cuando entré al auditorio, la clase ya había empezado."],
      ["hugo", "Et l'examen ?", "¿Y el examen?"],
      ["camila", "J'ai raté l'examen parce que je n'avais pas assez révisé.", "Perdí el examen porque no había repasado lo suficiente."],
      ["hugo", "Et Laura ? Elle était bronzée : elle était allée à Marseille la semaine d'avant.", "¿Y Laura? Estaba bronceada: había ido a Marsella la semana anterior."]
    ],
    fijate: "Fíjate: avait commencé, n'avais pas révisé (avoir); était allée (être, con concordancia)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar el plus-que-parfait",
      idea: "Auxiliar avoir o être en imparfait (j'avais, j'étais) + participio: j'avais fini, j'étais parti(e). Mismo auxiliar y misma concordancia que en el passé composé: los verbos de movimiento y los pronominales van con être. Sirve para retroceder en un relato: una acción anterior a otra pasada, con déjà, parce que, la veille.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Auxiliar"], [
        ["j'avais fini", "había terminado", "avoir"],
        ["avait commencé", "había empezado", "avoir"],
        ["je n'avais pas révisé", "no había repasado", "avoir"],
        ["avais", "había (avoir)", "avoir"],
        ["j'avais regardé", "había mirado", "avoir"],
        ["avais regardé", "había mirado", "avoir"],
        ["il avait mal dormi", "había dormido mal", "avoir"],
        ["j'étais parti(e)", "me había ido", "être"],
        ["était parti", "se había ido", "être"],
        ["était allée · était", "había ido · había (être)", "être"],
        ["ils s'étaient réveillés", "se habían despertado", "être"],
        ["s'étaient réveillés", "se habían despertado", "être"]
      ]],
      ej: [["Le cours avait déjà commencé.", "La clase ya había empezado."], ["J'ai raté l'examen parce que je n'avais pas révisé.", "Perdí el examen porque no había repasado."], ["Elle était partie la veille.", "Se había ido la víspera."], ["Si seulement j'avais regardé la météo !", "¡Si tan solo hubiera mirado el pronóstico!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand je suis arrivé, le cours a déjà commencé.", "Quand je suis arrivé, le cours avait déjà commencé.", "Lo anterior a un pasado: plus-que-parfait."], ["Elle avait allée à Marseille.", "Elle était allée à Marseille.", "aller va con être."], ["Le train avait parti.", "Le train était parti.", "partir va con être."]] }
  ],
  ejemplos: [
    { sit: "«La clase ya había empezado.»", resp: "Le cours avait déjà commencé.", pasos: ["avoir en imparfait: avait.", "Participio: commencé."], porque: "Anterioridad." },
    { sit: "«El tren se había ido.»", resp: "Le train était parti.", pasos: ["partir → être.", "était + parti."], porque: "Movimiento." },
    { sit: "«Se habían despertado.»", resp: "Ils s'étaient réveillés.", pasos: ["Pronominal → être."], porque: "Concordancia." }
  ],
  comprueba: [
    { q: "El plus-que-parfait se forma con el auxiliar en…", o: ["imparfait", "presente"], a: 0, b: "gr", porque: "j'avais, j'étais." },
    { q: "Sirve para una acción…", o: ["anterior a otra pasada", "futura"], a: 0, b: "gr", porque: "Retroceder." },
    { q: "Partir en plus-que-parfait lleva…", o: ["être: j'étais parti", "avoir: j'avais parti"], a: 0, b: "gr", porque: "Como en passé composé." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pq-forme"], k: "sort", ask: "¿Con avoir o con être?", q: "Clasifica.", cats: ["Con avoir", "Con être"], items: [["finir", 0], ["écrire", 0], ["voir", 0], ["prendre", 0], ["venir", 1], ["arriver", 1], ["tomber", 1], ["se lever", 1]], pista: "Movimiento y pronominales: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["b1pq-usage"], k: "choice", ask: "«Cuando entré, la clase ya había empezado.»", q: "«Quand je suis entrée dans l'amphi, le cours ___ déjà.»", o: ["avait commencé", "a commencé"], a: 0, pista: "Antes de entrar.", why: "<b>avait commencé</b>." },
    { fase: "guiada", c: ["b1pq-forme"], k: "fill", ask: "Conjuga avoir.", q: "J'ai raté l'examen parce que je n'___ pas assez révisé.", acc: ["avais"], pista: "Imparfait de avoir.", why: "<b>n'avais pas révisé</b>." },
    { fase: "indep", c: ["b1pq-forme"], k: "fill", ask: "Conjuga partir.", q: "Quand nous sommes arrivés à la gare, le train ___ déjà.", acc: ["était parti"], why: "<b>était parti</b>." },
    { fase: "indep", c: ["b1pq-forme"], k: "spot", ask: "Encuentra el error.", s: "Laura était bronzée : elle [avait] allée à Marseille la semaine d'avant .", fix: "était", why: "<b>était allée</b>." },
    { fase: "indep", c: ["b1pq-usage"], k: "match", ask: "Une cada frase con lo que pasó primero.", q: "Frase → primero", pairs: [["Il était fatigué : il avait mal dormi.", "Primero durmió mal."], ["Elle a relu le mail qu'elle avait écrit.", "Primero escribió el correo."], ["Quand je suis arrivé, ils avaient mangé.", "Primero comieron ellos."], ["J'ai reconnu le prof que j'avais vu à Paris.", "Primero lo vi en París."]], why: "Anterioridad." },
    { fase: "aplica", c: ["b1pq-forme"], k: "choice", ask: "«Por suerte, los estudiantes se habían despertado.»", q: "«Heureusement, les étudiants ___ avant l'arrivée des pompiers.»", o: ["s'étaient réveillés", "avaient réveillé"], a: 0, why: "Pronominal: <b>s'étaient réveillés</b>." },
    { fase: "aplica", c: ["b1pq-usage"], k: "fill", ask: "Conjuga regarder.", q: "Si seulement j'___ la météo !", acc: ["avais regardé"], why: "<b>avais regardé</b>." },
    { fase: "dominio", c: ["b1pq-forme", "b1pq-usage"], k: "order", ask: "Ordena: «Ella ya había reservado su habitación».", tokens: ["Elle avait", "déjà réservé", "sa chambre."], why: "<b>Elle avait déjà réservé sa chambre.</b>" },
    { fase: "dominio", c: ["b1pq-forme", "b1pq-usage"], k: "listen", say: "Si seulement j'avais regardé la météo !", acc: ["Si seulement j'avais regardé la météo !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Si seulement j'avais regardé la météo !</b>" },
    { fase: "dominio", c: ["b1pq-forme", "b1pq-usage"], k: "listen", say: "Heureusement, les étudiants s'étaient réveillés avant l'arrivée des pompiers.", acc: ["Heureusement, les étudiants s'étaient réveillés avant l'arrivée des pompiers."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Heureusement, les étudiants s'étaient réveillés avant l'arrivée des pompiers.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura", "Marseille"], previo: [] }
};

E["b11-accord-participe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'accord du participe passé avec avoir",
  objetivo: {
    que: "Vas a hacer concordar el participio con avoir cuando el complemento directo va antes del verbo.",
    corto: "La lettre que j'ai écrite.",
    podras: ["Encontrar el COD preguntando ¿qué? o ¿a quién?", "No concordar si el COD va después: j'ai écrit la lettre.", "Concordar si va antes (la, les, que, quelle): la lettre que j'ai écrite."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["Los pronombres COD (A2, lección 9) y la concordancia con être (A2, lección 29)."],
    capacidad: "Ahora escribes «les photos que j'ai prises» sin error."
  },
  requiere: R("cod-forma", "cod-place", "ae2-forme"), recupera: ["cod-place"],
  conceptos: {
    "b1ap-cod": { n: "con avoir no concuerda con el sujeto: elles ont dansé", b: "gr" },
    "b1ap-avant": { n: "concuerda con el COD si va antes: la lettre que j'ai écrite, je les ai vues", b: "gr" }
  },
  video: {
    titulo: "Concordar con avoir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "écrit · écrite", seg: [
        { es: "Hola. Con avoir, el participio solo concuerda en un caso." } ] },
      { v: "dos",
        a: { tag: "COD después", fr: "J'ai écrit la lettre.", es: "sin concordancia" },
        b: { tag: "COD antes", fr: "La lettre que j'ai écrite", es: "con -e" },
        seg: [ { es: "Complemento después: no cambia.", p: 1 }, { fr: "J'ai écrit la lettre.", p: 1 }, { es: "Complemento antes: concuerda.", p: 2 }, { fr: "La lettre que j'ai écrite", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Tus hermanas? Sí, las vi esta mañana.»", o: ["Tes sœurs ? Oui, je les ai vues ce matin.", "Tes sœurs ? Oui, je les ai vu ce matin."], a: 0,
        bien: "¡Sí! les va antes: vues.", mal: "les (femenino plural) va antes: vues.",
        seg: [ { es: "Pausa. Las vi." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["écrite", "prises", "vues", "mise", "faites"], seg: [
        { es: "El complemento antes del verbo: concuerda.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La disertación", img: "bg-biblioteca", yo: "camila",
    escena: "Camila y Hugo terminan sus trabajos.",
    pj: PJ,
    lineas: [
      ["camila", "Voici la dissertation que j'ai écrite ce week-end.", "Aquí está la disertación que escribí este fin de semana."],
      ["hugo", "Bravo ! Et les photos que tu as prises à Lyon ?", "¡Bravo! ¿Y las fotos que tomaste en Lyon?"],
      ["camila", "Je les ai mises sur mon ordinateur. Merci pour les livres que tu m'as prêtés !", "Las puse en mi computador. ¡Gracias por los libros que me prestaste!"],
      ["hugo", "De rien. Marie et Julie ont fini leur exposé à minuit, elles aussi.", "De nada. Marie y Julie también terminaron su exposición a medianoche."]
    ],
    fijate: "Fíjate: écrite, prises, mises, prêtés (COD antes); ont fini (sin COD antes: no cambia)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "¿Concuerda o no?",
      idea: "Con avoir, el participio no concuerda con el sujeto: elles ont dansé. Busca el COD (¿qué?, ¿a quién?). Si va después del verbo, no concuerda: j'ai écrit la lettre. Si va antes (la, l', les, que, quelle…), concuerda en género y número: la lettre que j'ai écrite, je les ai vues. Lui, leur y en no hacen concordar.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "¿Concuerda?"], [
        ["J'ai écrit la lettre.", "Escribí la carta.", "no: COD después"],
        ["La lettre que j'ai écrite.", "La carta que escribí.", "sí: que = la lettre"],
        ["écrite", "escrita", "femenino"],
        ["Les photos que j'ai prises.", "Las fotos que tomé.", "sí"],
        ["Je les ai vues.", "Las vi.", "sí: les"],
        ["vues", "vistas", "femenino plural"],
        ["les livres que tu m'as prêtés", "los libros que me prestaste", "sí"],
        ["prêtés", "prestados", "masculino plural"],
        ["Je l'ai mise dans l'armoire.", "La puse en el armario.", "sí: l' = ta veste"],
        ["mise", "puesta", "femenino"],
        ["Quelles informations as-tu reçues ?", "¿Qué información recibiste?", "sí: quelles"],
        ["Elles ont fini leur exposé.", "Terminaron su exposición.", "no"],
        ["fini", "terminado", "sin concordancia"],
        ["Je leur ai téléphoné.", "Les llamé.", "no: leur es COI"]
      ]],
      ej: [["La lettre ? Je l'ai écrite.", "¿La carta? La escribí."], ["Les photos que j'ai prises", "Las fotos que tomé"], ["Quelle robe as-tu mise ?", "¿Qué vestido te pusiste?"], ["Oui, je l'ai faite. · Oui, je les ai faites. · Oui, je l'ai fait. · Oui, je les ai faits.", "Sí, la hice. · Sí, las hice. · Sí, lo hice. · Sí, los hice."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La lettre que j'ai écrit.", "La lettre que j'ai écrite.", "COD femenino antes → -e."], ["Marie et Julie ont finies leur exposé.", "Marie et Julie ont fini leur exposé.", "Con avoir no concuerda con el sujeto."], ["Des cafés ? J'en ai bus trois.", "Des cafés ? J'en ai bu trois.", "Con en no hay concordancia."]] }
  ],
  ejemplos: [
    { sit: "«La disertación que escribí»", resp: "la dissertation que j'ai écrite", pasos: ["que = la dissertation (f.), antes.", "écrite."], porque: "COD antes." },
    { sit: "«¿Las llaves? Las puse aquí.»", resp: "Les clés ? Je les ai mises ici.", pasos: ["les = les clés (f. pl.)."], porque: "COD antes." },
    { sit: "«Tomé fotos.»", resp: "J'ai pris des photos.", pasos: ["COD después: pris."], porque: "Sin concordancia." }
  ],
  comprueba: [
    { q: "Con avoir, el participio concuerda con…", o: ["el COD si va antes", "el sujeto"], a: 0, b: "gr", porque: "Regla." },
    { q: "En «J'ai pris des photos», pris…", o: ["no cambia", "se vuelve prises"], a: 0, b: "gr", porque: "COD después." },
    { q: "Con lui y leur…", o: ["no hay concordancia", "hay concordancia"], a: 0, b: "gr", porque: "Son COI." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ap-avant", "b1ap-cod"], k: "sort", ask: "¿El participio concuerda?", q: "Clasifica.", cats: ["Concuerda", "No concuerda"], items: [["Les photos que j'ai prises", 0], ["Cette chanson, je l'ai apprise", 0], ["Quelles villes as-tu visitées ?", 0], ["Les clés, je les ai mises ici", 0], ["J'ai pris des photos", 1], ["Elles ont dansé toute la nuit", 1], ["Je leur ai téléphoné", 1], ["Des cafés ? J'en ai bu trois", 1]], pista: "¿COD antes del verbo?", why: "Concordancia." },
    { fase: "guiada", c: ["b1ap-avant"], k: "choice", ask: "«Aquí está la disertación que escribí.»", q: "«Voici la dissertation que j'ai ___ ce week-end.»", o: ["écrite", "écrit"], a: 0, pista: "que = la dissertation.", why: "<b>écrite</b>." },
    { fase: "guiada", c: ["b1ap-avant"], k: "fill", ask: "Escribe el participio de voir.", q: "Tes sœurs ? Oui, je les ai ___ au marché ce matin.", acc: ["vues"], pista: "les = tes sœurs.", why: "<b>vues</b>." },
    { fase: "indep", c: ["b1ap-cod"], k: "spot", ask: "Encuentra el error.", s: "Marie et Julie ont [finies] leur exposé à minuit .", fix: "fini", why: "<b>ont fini</b>." },
    { fase: "indep", c: ["b1ap-avant"], k: "fill", ask: "Escribe el participio de prêter.", q: "Merci pour les livres que tu m'as ___ !", acc: ["prêtés"], why: "<b>prêtés</b>." },
    { fase: "indep", c: ["b1ap-avant"], k: "choice", ask: "¿Qué frase está bien escrita?", q: "«___»", o: ["Quelles informations as-tu reçues ?", "Quelles informations as-tu reçu ?"], a: 0, why: "<b>reçues</b>: quelles va antes." },
    { fase: "aplica", c: ["b1ap-avant"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu as fait la vaisselle ?", "Oui, je l'ai faite."], ["Tu as fait les courses ?", "Oui, je les ai faites."], ["Tu as fait ton lit ?", "Oui, je l'ai fait."], ["Tu as fait tes devoirs ?", "Oui, je les ai faits."]], why: "Concordancia con el pronombre." },
    { fase: "aplica", c: ["b1ap-avant"], k: "fill", ask: "Escribe el participio de mettre.", q: "Ta veste ? Je l'ai ___ dans l'armoire.", acc: ["mise"], why: "<b>mise</b>." },
    { fase: "dominio", c: ["b1ap-avant", "b1ap-cod"], k: "order", ask: "Ordena: «La puerta, fui yo quien la abrió».", tokens: ["La porte,", "c'est moi", "qui l'ai ouverte."], why: "<b>La porte, c'est moi qui l'ai ouverte.</b>" },
    { fase: "dominio", c: ["b1ap-avant"], k: "listen", say: "Voici la dissertation que j'ai écrite ce week-end.", acc: ["Voici la dissertation que j'ai écrite ce week-end."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Voici la dissertation que j'ai écrite ce week-end.</b>" },
    { fase: "dominio", c: ["b1ap-avant", "b1ap-cod"], k: "listen", say: "Ta veste ? Je l'ai mise dans l'armoire.", acc: ["Ta veste ? Je l'ai mise dans l'armoire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ta veste ? Je l'ai mise dans l'armoire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Julie", "Lyon"], previo: [] }
};

/* ================================ B1.1·2 · Relativos y gerundio ================================ */
E["b11-relatifs"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les pronoms relatifs qui, que, où, dont",
  objetivo: {
    que: "Vas a unir frases con qui, que, où y dont.",
    corto: "le livre dont je t'ai parlé.",
    podras: ["Usar qui (sujeto) y que (complemento).", "Usar où para un lugar o un momento: le jour où…", "Usar dont con los verbos que llevan de: parler de, avoir besoin de."],
    iconos: ["ic2/libro", "ic2/bombilla", "ic2/lapiz"],
    previos: ["Qui y que (A2, lección 43)."],
    capacidad: "Ahora haces frases largas y precisas."
  },
  requiere: R("qq2-qui", "qq2-que"), recupera: ["qq2-que"],
  conceptos: {
    "b1rel-quique": { n: "qui + verbo (sujeto); que + sujeto + verbo (complemento)", b: "gr" },
    "b1rel-oudont": { n: "où: lugar o momento (le jour où); dont: verbo con de (parler de, avoir besoin de)", b: "gr" }
  },
  video: {
    titulo: "Qui, que, où, dont", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "qui · que · où · dont", seg: [
        { es: "Hola. Cuatro palabras para unir dos frases." } ] },
      { v: "frase", filas: [
          { nota: "qui + verbo", p: 1, partes: [["la prof qui parle", "-", 1]] },
          { nota: "que + sujeto", p: 2, partes: [["le livre que je lis", "-", 2]] },
          { nota: "dont = de", p: 3, partes: [["le livre dont je t'ai parlé", "-", 3]] } ], seg: [
        { es: "Después de qui, un verbo:", p: 1 }, { fr: "la prof qui parle", p: 1 }, { es: "Después de que, un sujeto:", p: 2 }, { fr: "le livre que je lis", p: 2 }, { es: "Parler de: dont.", p: 3 }, { fr: "le livre dont je t'ai parlé", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No olvidaré el día en que llegué a París.»", o: ["Je n'oublierai jamais le jour où je suis arrivé à Paris.", "Je n'oublierai jamais le jour que je suis arrivé à Paris."], a: 0,
        bien: "¡Sí! Momento: où.", mal: "Para un momento se usa où.",
        seg: [ { es: "Pausa. El día en que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qui", "que", "où", "dont"], seg: [
        { es: "Verbo con de: dont.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El intercambio", img: "bg-cafe", yo: "camila",
    escena: "Camila le presenta una amiga a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je te présente Inès, une amie qui étudie la biologie à Rennes.", "Te presento a Inès, una amiga que estudia biología en Rennes."],
      ["hugo", "Enchanté ! Le film que nous avons vu hier était en version originale, tu sais.", "¡Encantado! La película que vimos ayer estaba en versión original, ¿sabes?"],
      ["camila", "Besançon est la ville où j'ai passé mon semestre d'échange.", "Besanzón es la ciudad donde pasé mi semestre de intercambio."],
      ["hugo", "Et voilà le dictionnaire dont tu as besoin pour ton cours de traduction.", "Y aquí está el diccionario que necesitas para tu clase de traducción."]
    ],
    fijate: "Fíjate: qui étudie, que nous avons vu, où j'ai passé, dont tu as besoin."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Elegir el relativo",
      idea: "Después viene un verbo → qui (sujeto): la prof qui parle. Después viene un sujeto + verbo → que (complemento): le livre que je lis. Lugar o momento → où: la ville où j'habite, le jour où je suis arrivé. Verbo o expresión con de (parler de, avoir besoin de, se souvenir de, être fier de) → dont: le livre dont je t'ai parlé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Relativo"], [
        ["qui", "que (sujeto)", "+ verbo"],
        ["C'est la prof qui donne le cours.", "Es la profe que da la clase.", "qui"],
        ["que", "que (complemento)", "+ sujeto + verbo"],
        ["Le film que nous avons vu", "La película que vimos", "que"],
        ["où", "donde, en que", "lugar o momento"],
        ["La ville où j'ai fait mon échange", "La ciudad donde hice mi intercambio", "où"],
        ["le jour où je suis arrivé", "el día en que llegué", "où"],
        ["dont", "del que, de la que, cuyo", "verbo con de"],
        ["Le livre dont je t'ai parlé", "El libro del que te hablé", "dont"],
        ["le dictionnaire dont j'ai besoin", "el diccionario que necesito", "dont"]
      ]],
      ej: [["parler de → dont", "hablar de"], ["avoir besoin de → dont", "necesitar"], ["se souvenir de → dont", "acordarse de"], ["être fier de → dont", "estar orgulloso de"], ["C'est une étudiante dont le père est chef.", "Es una estudiante cuyo padre es chef."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le livre que je t'ai parlé.", "Le livre dont je t'ai parlé.", "parler de → dont."], ["le jour que je suis arrivé", "le jour où je suis arrivé", "Momento → où."], ["La fille que parle", "La fille qui parle", "Antes de un verbo: qui."]] }
  ],
  ejemplos: [
    { sit: "«una amiga que estudia biología»", resp: "une amie qui étudie la biologie", pasos: ["Sigue un verbo: qui."], porque: "Sujeto." },
    { sit: "«la película que vimos»", resp: "le film que nous avons vu", pasos: ["Sigue un sujeto: que."], porque: "Complemento." },
    { sit: "«el diccionario que necesito»", resp: "le dictionnaire dont j'ai besoin", pasos: ["avoir besoin de → dont."], porque: "Verbo con de." }
  ],
  comprueba: [
    { q: "Después de qui viene…", o: ["un verbo", "un sujeto"], a: 0, b: "gr", porque: "qui = sujeto." },
    { q: "Para un lugar o un momento se usa…", o: ["où", "que"], a: 0, b: "gr", porque: "le jour où." },
    { q: "Con parler de se usa…", o: ["dont", "que"], a: 0, b: "gr", porque: "de → dont." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rel-quique", "b1rel-oudont"], k: "sort", ask: "¿Le livre que… o le livre dont…?", q: "Clasifica.", cats: ["le livre que…", "le livre dont…"], items: [["j'ai acheté", 0], ["je lis", 0], ["tu m'as prêté", 0], ["je préfère", 0], ["j'ai besoin", 1], ["je t'ai parlé", 1], ["je me souviens", 1], ["il est fier", 1]], pista: "¿El verbo lleva de?", why: "que / dont." },
    { fase: "guiada", c: ["b1rel-quique"], k: "choice", ask: "«una amiga que estudia biología»", q: "«Je te présente Inès, une amie ___ étudie la biologie à Rennes.»", o: ["qui", "que"], a: 0, pista: "Sigue un verbo.", why: "<b>qui</b>." },
    { fase: "guiada", c: ["b1rel-quique"], k: "choice", ask: "«La película que vimos ayer…»", q: "«Le film ___ nous avons vu hier était en version originale.»", o: ["que", "qui"], a: 0, pista: "Sigue un sujeto.", why: "<b>que</b>." },
    { fase: "indep", c: ["b1rel-oudont"], k: "fill", ask: "Completa con el relativo.", q: "Besançon est la ville ___ j'ai passé mon semestre d'échange.", acc: ["où"], why: "<b>où</b>: lugar." },
    { fase: "indep", c: ["b1rel-oudont"], k: "fill", ask: "Completa con el relativo.", q: "C'est le dictionnaire ___ j'ai besoin pour mon cours de traduction.", acc: ["dont"], why: "<b>dont</b>: avoir besoin de." },
    { fase: "indep", c: ["b1rel-oudont"], k: "spot", ask: "Encuentra el error.", s: "Tu as lu l'article [que] le professeur a parlé ce matin ?", fix: "dont", why: "<b>dont</b>: parler de." },
    { fase: "aplica", c: ["b1rel-oudont"], k: "spot", ask: "Encuentra el error.", s: "Je n'oublierai jamais le jour [que] je suis arrivé à Paris .", fix: "où", why: "<b>le jour où</b>." },
    { fase: "aplica", c: ["b1rel-quique", "b1rel-oudont"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["C'est un professeur qui", "explique très clairement."], ["C'est un professeur que", "tous les étudiants apprécient."], ["C'est un professeur dont", "je garde un bon souvenir."], ["C'est la salle où", "il donne ses cours."]], why: "Relativos." },
    { fase: "dominio", c: ["b1rel-oudont"], k: "order", ask: "Ordena: «Es una estudiante cuyo padre es chef».", tokens: ["C'est une étudiante", "dont le père", "est chef."], why: "<b>C'est une étudiante dont le père est chef.</b>" },
    { fase: "dominio", c: ["b1rel-oudont"], k: "listen", say: "Besançon est la ville où j'ai passé mon semestre d'échange.", acc: ["Besançon est la ville où j'ai passé mon semestre d'échange."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Besançon est la ville où j'ai passé mon semestre d'échange.</b>" },
    { fase: "dominio", c: ["b1rel-quique"], k: "listen", say: "Le film que nous avons vu hier était en version originale.", acc: ["Le film que nous avons vu hier était en version originale."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le film que nous avons vu hier était en version originale.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Inès", "Rennes", "Besançon", "Paris"], previo: [] }
};

E["b11-gerondif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le gérondif et le participe présent",
  objetivo: {
    que: "Vas a formar el gerundio francés (en + -ant) para decir cómo, cuándo o con qué condición haces algo.",
    corto: "On progresse en parlant.",
    podras: ["Formar el participio presente con la raíz de nous: parlons → parlant.", "Usar en + -ant para la simultaneidad, la manera y la condición.", "No confundirlo con «estoy haciendo»: je suis en train de…"],
    iconos: ["ic2/audifonos", "ic2/libro", "ic2/rayo"],
    previos: ["El presente de nous en A1 y A2."],
    capacidad: "Ahora dices cómo aprendes: en écoutant, en parlant."
  },
  requiere: R(), recupera: [],
  conceptos: {
    "b1ge-forme": { n: "raíz de nous + -ant: parlant; irregulares: étant, ayant, sachant", b: "gr" },
    "b1ge-usage": { n: "en + -ant: mientras, cómo, si; «estoy haciendo» = je suis en train de", b: "gr" }
  },
  video: {
    titulo: "En + -ant", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "en écoutant", seg: [
        { es: "Hola. El gerundio francés lleva siempre en." } ] },
      { v: "frase", filas: [
          { nota: "nous parlons", p: 1, partes: [["parlant", "-", 1]] },
          { nota: "en + -ant", p: 2, partes: [["en parlant", "-", 2]] },
          { nota: "estoy leyendo", p: 3, partes: [["je suis en train de lire", "-", 3]] } ], seg: [
        { es: "Raíz de nous más a ene te:", p: 1 }, { fr: "parlant", p: 1 }, { es: "Con en delante:", p: 2 }, { fr: "en parlant", p: 2 }, { es: "Y para «estoy haciendo», otra forma:", p: 3 }, { fr: "je suis en train de lire", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aprendió francés viendo series.»", o: ["Il a appris le français en regardant des séries.", "Il a appris le français regardant des séries."], a: 0,
        bien: "¡Sí! Siempre en + -ant.", mal: "Falta en: en regardant.",
        seg: [ { es: "Pausa. Viendo series." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en parlant", "en écoutant", "étant", "ayant", "sachant"], seg: [
        { es: "Raíz de nous, más ant, y en delante.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cómo aprender", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de cómo aprenden idiomas.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai beaucoup progressé en écoutant des podcasts tous les jours.", "Progresé mucho escuchando pódcast todos los días."],
      ["hugo", "Moi, j'écoute des podcasts en cuisinant. Et tu as trouvé ton stage ?", "Yo escucho pódcast mientras cocino. ¿Y encontraste tu práctica?"],
      ["camila", "Oui, en cherchant sur un site spécialisé. Étant étrangère, j'ai besoin d'un visa.", "Sí, buscando en un sitio especializado. Como soy extranjera, necesito una visa."],
      ["hugo", "Désolé, je ne peux pas parler : je suis en train de réviser pour l'examen de demain.", "Perdón, no puedo hablar: estoy repasando para el examen de mañana."]
    ],
    fijate: "Fíjate: en écoutant, en cuisinant, en cherchant (gerundio); étant (participio presente); je suis en train de réviser (acción en curso)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el gerundio",
      idea: "Toma la raíz de nous en presente: nous parlons → parl-. Añade -ant: parlant. Irregulares: être → étant, avoir → ayant, savoir → sachant. El gerundio es en + -ant y dice cuándo (mientras), cómo (manera) o con qué condición (si): en parlant. Ojo: «estoy haciendo» no es gerundio en francés: je fais o je suis en train de faire.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["parlant · en parlant", "hablando", "nous parlons"],
        ["en écoutant", "escuchando", "nous écoutons"],
        ["en cuisinant", "cocinando", "nous cuisinons"],
        ["en cherchant", "buscando", "nous cherchons"],
        ["cherchant", "buscando", "participio"],
        ["en finissant · finissant", "terminando", "nous finissons"],
        ["en faisant", "haciendo", "nous faisons"],
        ["en descendant", "bajando", "nous descendons"],
        ["parlant espagnol", "que habla español", "participio presente"],
        ["étant · ayant · sachant", "siendo · teniendo · sabiendo", "irregulares"],
        ["mangeant · commençant", "comiendo · empezando", "nous mangeons, commençons"],
        ["je suis en train de réviser", "estoy repasando", "acción en curso"],
        ["suis en train de réviser", "estoy repasando", "acción en curso"]
      ]],
      ej: [["J'écoute des podcasts en cuisinant.", "Escucho pódcast mientras cocino."], ["On progresse en parlant.", "Se progresa hablando."], ["Je suis en train de lire.", "Estoy leyendo."], ["Étant étrangère, elle a besoin d'un visa.", "Como es extranjera, necesita una visa."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il a appris le français regardant des séries.", "Il a appris le français en regardant des séries.", "Siempre en + -ant."], ["J'ai trouvé mon stage en cherchent.", "J'ai trouvé mon stage en cherchant.", "-ant, no -ent."], ["Je suis lisant.", "Je suis en train de lire.", "«Estoy leyendo» no es gerundio."]] }
  ],
  ejemplos: [
    { sit: "«Repaso escuchando música.»", resp: "Je révise en écoutant de la musique.", pasos: ["Simultaneidad: en + -ant."], porque: "Mientras." },
    { sit: "«Pagó sus estudios trabajando de noche.»", resp: "Elle a payé ses études en travaillant le soir.", pasos: ["Manera: en travaillant."], porque: "Cómo." },
    { sit: "«Si tomas el tren de las 8, llegarás a tiempo.»", resp: "En prenant le train de 8 h, tu arriveras à temps.", pasos: ["Condición: en prenant."], porque: "Si." }
  ],
  comprueba: [
    { q: "El gerundio francés se forma con…", o: ["en + -ant", "-ant solo"], a: 0, b: "gr", porque: "en parlant." },
    { q: "La raíz se toma de…", o: ["nous en presente", "el infinitivo"], a: 0, b: "gr", porque: "nous parlons → parl-." },
    { q: "«Estoy leyendo» se dice…", o: ["je suis en train de lire", "je suis lisant"], a: 0, b: "gr", porque: "No es gerundio." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ge-usage"], k: "sort", ask: "¿Qué expresa el gerundio?", q: "Clasifica.", cats: ["Simultaneidad (mientras)", "Manera (cómo)", "Condición (si)"], items: [["Je révise en écoutant de la musique.", 0], ["Il m'a salué en entrant dans la salle.", 0], ["Elle a payé ses études en travaillant le soir.", 1], ["On apprend à nager en nageant.", 1], ["En prenant le train de 8 h, tu arriveras à temps.", 2], ["En t'inscrivant avant lundi, tu auras une chambre.", 2]], pista: "¿Cuándo, cómo o si?", why: "Usos del gerundio." },
    { fase: "guiada", c: ["b1ge-forme"], k: "fill", ask: "Forma el gerundio de écouter.", q: "J'ai beaucoup progressé ___ des podcasts tous les jours.", acc: ["en écoutant"], pista: "en + -ant.", why: "<b>en écoutant</b>." },
    { fase: "guiada", c: ["b1ge-forme"], k: "choice", ask: "«Si termino mi trabajo esta noche…»", q: "«En ___ mon mémoire ce soir, je serai libre demain.»", o: ["finissant", "finisant", "finant"], a: 0, pista: "nous finissons.", why: "<b>finissant</b>." },
    { fase: "indep", c: ["b1ge-forme"], k: "match", ask: "Une cada infinitivo con su participio presente.", q: "Infinitivo → -ant", pairs: [["être", "étant"], ["avoir", "ayant"], ["savoir", "sachant"], ["faire", "faisant"], ["manger", "mangeant"], ["commencer", "commençant"]], why: "Formas." },
    { fase: "indep", c: ["b1ge-forme"], k: "spot", ask: "Encuentra el error.", s: "J'ai trouvé mon stage en [cherchent] sur un site spécialisé .", fix: "cherchant", why: "<b>cherchant</b>." },
    { fase: "indep", c: ["b1ge-usage"], k: "choice", ask: "«Lo siento, estoy repasando para el examen.»", q: "«Désolé, je ne peux pas te parler : je ___ pour l'examen de demain.»", o: ["suis en train de réviser", "suis révisant"], a: 0, why: "<b>suis en train de réviser</b>." },
    { fase: "aplica", c: ["b1ge-forme", "b1ge-usage"], k: "fill", ask: "Forma el gerundio de descendre.", q: "Un étudiant s'est blessé ___ l'escalier de la bibliothèque.", acc: ["en descendant"], why: "<b>en descendant</b>." },
    { fase: "aplica", c: ["b1ge-forme"], k: "choice", ask: "«Asociación busca voluntarios que hablen español.»", q: "«Association cherche bénévoles ___ espagnol.»", o: ["parlant", "en parlant"], a: 0, why: "Participio presente: <b>parlant</b>." },
    { fase: "dominio", c: ["b1ge-usage"], k: "fill", ask: "Forma el gerundio de faire.", q: "Tu te feras des amis ___ partie d'un club sportif.", acc: ["en faisant"], why: "<b>en faisant</b>." },
    { fase: "dominio", c: ["b1ge-forme", "b1ge-usage"], k: "order", ask: "Ordena: «Como es extranjera, necesita una visa».", tokens: ["Étant étrangère,", "elle a besoin", "d'un visa."], why: "<b>Étant étrangère, elle a besoin d'un visa.</b>" },
    { fase: "dominio", c: ["b1ge-forme", "b1ge-usage"], k: "listen", say: "J'ai beaucoup progressé en écoutant des podcasts tous les jours.", acc: ["J'ai beaucoup progressé en écoutant des podcasts tous les jours."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai beaucoup progressé en écoutant des podcasts tous les jours.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.1·3 · Subjuntivo, condicional y argumentación ================================ */
E["b11-subjonctif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le subjonctif présent",
  objetivo: {
    que: "Vas a formar y usar el subjuntivo después de il faut que, je veux que, je souhaite que.",
    corto: "Il faut que tu viennes.",
    podras: ["Formar el subjuntivo con la raíz de ils: ils prennent → que je prenne.", "Usar los irregulares: sois, aie, aille, fasse, puisse, sache, veuille.", "Usar el infinitivo cuando el sujeto es el mismo: je veux partir."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/bombilla"],
    previos: ["Il faut + infinitivo (A1, lección 63) y vouloir, pouvoir, devoir (A1, lección 15)."],
    capacidad: "Ahora pides y deseas cosas para otros con el subjuntivo."
  },
  requiere: R("co3-devoir"), recupera: ["co3-devoir"],
  conceptos: {
    "b1sj-forme": { n: "raíz de ils + -e, -es, -e, -ions, -iez, -ent; irregulares: sois, aie, aille, fasse", b: "gr" },
    "b1sj-usage": { n: "il faut que, je veux que, je souhaite que + subjuntivo; mismo sujeto → infinitivo", b: "gr" }
  },
  video: {
    titulo: "El subjuntivo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "il faut que…", seg: [
        { es: "Hola. Cuando quieres que otra persona haga algo, llega el subjuntivo." } ] },
      { v: "frase", filas: [
          { nota: "ils prennent", p: 1, partes: [["que je prenne", "-", 1]] },
          { nota: "obligación", p: 2, partes: [["Il faut que tu viennes.", "-", 2]] },
          { nota: "mismo sujeto", p: 3, partes: [["Je veux partir.", "-", 3]] } ], seg: [
        { es: "Raíz de ils, más las terminaciones:", p: 1 }, { fr: "que je prenne", p: 1 }, { fr: "Il faut que tu viennes.", p: 2 }, { es: "Si el sujeto es el mismo, infinitivo:", p: 3 }, { fr: "Je veux partir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es necesario que vengas.»", o: ["Il faut que tu viennes.", "Il faut que tu viens."], a: 0,
        bien: "¡Sí! il faut que + subjuntivo.", mal: "Después de il faut que: viennes.",
        seg: [ { es: "Pausa. Que vengas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["que je sois", "que j'aie", "que j'aille", "que je fasse", "que je puisse"], seg: [
        { es: "Otra persona, subjuntivo. La misma, infinitivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los trámites", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia explica los trámites del intercambio.",
    pj: PJ,
    lineas: [
      ["sofia", "Il faut que vous remplissiez ce formulaire avant vendredi.", "Es necesario que llenen este formulario antes del viernes."],
      ["camila", "D'accord. Mes parents veulent que je fasse un échange au Québec.", "De acuerdo. Mis papás quieren que haga un intercambio en Quebec."],
      ["sofia", "Je veux que vous soyez à l'heure demain matin. Il faut qu'on aille à la bibliothèque à 14 h.", "Quiero que estén a tiempo mañana por la mañana. Tenemos que ir a la biblioteca a las 2."],
      ["camila", "Et je souhaite que tu réussisses, Hugo !", "¡Y deseo que te vaya bien, Hugo!"]
    ],
    fijate: "Fíjate: il faut que vous remplissiez, veulent que je fasse, je veux que vous soyez, il faut qu'on aille, je souhaite que tu réussisses."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el subjuntivo",
      idea: "Toma la raíz de ils en presente (ils prennent → prenn-) y añade -e, -es, -e, -ions, -iez, -ent: que je prenne, que nous prenions. Irregulares: être → que je sois, avoir → que j'aie, aller → que j'aille, faire → que je fasse, pouvoir → que je puisse, savoir → que je sache, vouloir → que je veuille. Va después de il faut que, je veux que, je voudrais que, je souhaite que. Si el sujeto es el mismo, se usa el infinitivo: je veux partir.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["que je prenne · que nous prenions", "que tome · que tomemos", "prendre: ils prennent"],
        ["que tu viennes", "que vengas", "venir"],
        ["viennes", "vengas", "venir"],
        ["que vous remplissiez", "que llenen", "remplir"],
        ["remplissiez", "llenen", "remplir"],
        ["que tu donnes", "que des", "donner"],
        ["donnes", "des", "donner"],
        ["que vous soyez", "que estén / sean", "être"],
        ["soyez", "estén / sean", "être"],
        ["qu'on aille", "que vayamos", "aller"],
        ["aille", "vaya", "aller"],
        ["que je fasse · que j'aille · que je puisse", "que haga · que vaya · que pueda", "irregulares"],
        ["que je sache · que je veuille · que j'aie", "que sepa · que quiera · que tenga", "irregulares"],
        ["que nous ayons", "que tengamos", "avoir"],
        ["que tu réussisses", "que te vaya bien", "réussir"]
      ]],
      ej: [["Il faut que tu viennes.", "Es necesario que vengas."], ["Mes parents veulent que je fasse un échange.", "Mis papás quieren que haga un intercambio."], ["Je souhaite que tu réussisses.", "Deseo que te vaya bien."], ["Je veux faire un stage en France.", "Quiero hacer una práctica en Francia. (mismo sujeto)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il faut que tu viens.", "Il faut que tu viennes.", "il faut que + subjuntivo."], ["Je souhaite que tu viens me voir.", "Je souhaite que tu viennes me voir.", "souhaiter que + subjuntivo."], ["Je veux que je fasse un stage.", "Je veux faire un stage.", "Mismo sujeto: infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Es necesario que llenen el formulario.»", resp: "Il faut que vous remplissiez le formulaire.", pasos: ["ils remplissent → rempliss-.", "vous → -iez."], porque: "il faut que." },
    { sit: "«Quiero que estén a tiempo.»", resp: "Je veux que vous soyez à l'heure.", pasos: ["être: irregular → soyez."], porque: "Voluntad sobre otros." },
    { sit: "«Quiero hacer una práctica.»", resp: "Je veux faire un stage.", pasos: ["Mismo sujeto: infinitivo."], porque: "Sin subjuntivo." }
  ],
  comprueba: [
    { q: "La raíz del subjuntivo se toma de…", o: ["ils en presente", "el infinitivo"], a: 0, b: "gr", porque: "ils prennent → prenn-." },
    { q: "Después de il faut que va…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Obligación." },
    { q: "«Quiero salir» (yo) se dice…", o: ["Je veux partir.", "Je veux que je parte."], a: 0, b: "gr", porque: "Mismo sujeto." }
  ],
  practica: [
    { fase: "guiada", c: ["b1sj-forme"], k: "sort", ask: "¿Indicativo o subjuntivo?", q: "Clasifica.", cats: ["Indicativo presente", "Subjuntivo presente"], items: [["nous allons", 0], ["vous faites", 0], ["ils peuvent", 0], ["tu sais", 0], ["que nous allions", 1], ["que vous fassiez", 1], ["qu'ils puissent", 1], ["que tu saches", 1]], pista: "Con que delante.", why: "Formas." },
    { fase: "guiada", c: ["b1sj-forme"], k: "fill", ask: "Conjuga remplir en subjuntivo.", q: "Il faut que vous ___ ce formulaire avant vendredi.", acc: ["remplissiez"], pista: "ils remplissent.", why: "<b>remplissiez</b>." },
    { fase: "guiada", c: ["b1sj-usage"], k: "choice", ask: "«Quiero que estén a tiempo.»", q: "«Je veux que vous ___ à l'heure demain matin.»", o: ["soyez", "êtes"], a: 0, pista: "Subjuntivo de être.", why: "<b>soyez</b>." },
    { fase: "indep", c: ["b1sj-forme"], k: "match", ask: "Une cada infinitivo con su subjuntivo.", q: "Infinitivo → subjuntivo", pairs: [["faire", "que je fasse"], ["aller", "que j'aille"], ["pouvoir", "que je puisse"], ["savoir", "que je sache"], ["vouloir", "que je veuille"], ["avoir", "que j'aie"]], why: "Irregulares." },
    { fase: "indep", c: ["b1sj-usage"], k: "spot", ask: "Encuentra el error.", s: "Je souhaite que tu [viens] me voir pendant les vacances .", fix: "viennes", why: "<b>viennes</b>." },
    { fase: "indep", c: ["b1sj-forme"], k: "fill", ask: "Conjuga donner en subjuntivo.", q: "Je voudrais que tu ___ des nouvelles chaque semaine.", acc: ["donnes"], why: "<b>donnes</b>." },
    { fase: "aplica", c: ["b1sj-usage"], k: "choice", ask: "¿Qué frase está bien construida?", q: "«___»", o: ["Je veux faire un stage en France.", "Je veux que je fasse un stage en France."], a: 0, why: "Mismo sujeto: infinitivo." },
    { fase: "aplica", c: ["b1sj-forme"], k: "fill", ask: "Conjuga aller en subjuntivo.", q: "Il faut qu'on ___ à la bibliothèque à 14 h.", acc: ["aille"], why: "<b>aille</b>." },
    { fase: "dominio", c: ["b1sj-forme", "b1sj-usage"], k: "order", ask: "Ordena: «La profesora desea que tengamos buenas notas».", tokens: ["La professeure souhaite", "que nous ayons", "de bonnes notes."], why: "<b>La professeure souhaite que nous ayons de bonnes notes.</b>" },
    { fase: "dominio", c: ["b1sj-forme", "b1sj-usage"], k: "listen", say: "Il faut que vous remplissiez ce formulaire avant vendredi.", acc: ["Il faut que vous remplissiez ce formulaire avant vendredi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut que vous remplissiez ce formulaire avant vendredi.</b>" },
    { fase: "dominio", c: ["b1sj-forme", "b1sj-usage"], k: "listen", say: "Je veux que vous soyez à l'heure demain matin.", acc: ["Je veux que vous soyez à l'heure demain matin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je veux que vous soyez à l'heure demain matin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: [] }
};

E["b11-conditionnel"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le conditionnel présent",
  objetivo: {
    que: "Vas a usar el condicional para pedir con cortesía, expresar deseos y dar consejos.",
    corto: "Je voudrais… · Pourriez-vous… ? · Tu devrais…",
    podras: ["Formarlo con la raíz del futuro + las terminaciones del imparfait.", "Pedir con cortesía: je voudrais, pourriez-vous, j'aimerais.", "Aconsejar: tu devrais, à ta place, je…"],
    iconos: ["ic2/cafe", "ic2/bombilla", "ic2/estrella"],
    previos: ["El futuro simple (A2, lecciones 4 y 60) y los consejos con el condicional (A2, lección 48)."],
    capacidad: "Ahora pides, sueñas y aconsejas con elegancia."
  },
  requiere: R("fu-simple", "fi-racines", "cc-forme", "cc-conseil"), recupera: ["cc-forme"],
  conceptos: {
    "b1co-forme": { n: "raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient: je voudrais, tu pourrais", b: "gr" },
    "b1co-usage": { n: "cortesía (je voudrais), deseo (j'aimerais), consejo (tu devrais), información no confirmada", b: "gr" }
  },
  video: {
    titulo: "El condicional", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/cafe", grande: "je voudrais", seg: [
        { es: "Hola. El condicional es la forma amable del francés." } ] },
      { v: "frase", filas: [
          { nota: "pedir", p: 1, partes: [["Je voudrais un café.", "-", 1]] },
          { nota: "cortesía", p: 2, partes: [["Pourriez-vous m'aider ?", "-", 2]] },
          { nota: "consejo", p: 3, partes: [["Tu devrais te reposer.", "-", 3]] } ], seg: [
        { fr: "Je voudrais un café.", p: 1 }, { fr: "Pourriez-vous m'aider ?", p: 2 }, { fr: "Tu devrais te reposer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera un certificado, por favor.»", o: ["Je voudrais une attestation, s'il vous plaît.", "Je voudrai une attestation, s'il vous plaît."], a: 0,
        bien: "¡Sí! La -s final es el condicional.", mal: "Sin -s es futuro: je voudrais.",
        seg: [ { es: "Pausa. Quisiera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je voudrais", "pourriez-vous", "j'aimerais", "tu devrais", "à ta place"], seg: [
        { es: "Raíz del futuro, terminaciones del imparfait.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la secretaría", img: "bg-universidad", yo: "camila",
    escena: "Camila pide un documento y Hugo le da consejos.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je voudrais une attestation d'inscription, s'il vous plaît.", "Buenos días, quisiera un certificado de matrícula, por favor."],
      ["sofia", "Bien sûr. Pourriez-vous m'envoyer le programme du cours ?", "Claro. ¿Podría enviarme el programa del curso?"],
      ["hugo", "Tu devrais dormir un peu plus, tu sais. Et à ta place, j'ouvrirais un compte bancaire.", "Deberías dormir un poco más, ¿sabes? Y yo en tu lugar abriría una cuenta bancaria."],
      ["camila", "J'aimerais vivre un an à Québec. Un semestre à Bordeaux, ce serait génial aussi !", "Me gustaría vivir un año en Quebec. ¡Un semestre en Burdeos también sería genial!"]
    ],
    fijate: "Fíjate: je voudrais, pourriez-vous (cortesía); tu devrais, j'ouvrirais (consejo); j'aimerais, ce serait (deseo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el condicional",
      idea: "Raíz del futuro (parler-, ser-, aur-, pourr-, voudr-, devr-, fer-, ir-) + terminaciones del imparfait: -ais, -ais, -ait, -ions, -iez, -aient. Usos: cortesía (je voudrais, pourriez-vous, j'aimerais), deseo (j'aimerais vivre…), consejo (tu devrais…, à ta place, je…), información no confirmada (selon la radio, il serait malade). Ojo: je voudrai (futuro) ≠ je voudrais (condicional).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["je voudrais", "quisiera", "cortesía"],
        ["voudrais", "quisiera", "vouloir"],
        ["pourriez-vous", "¿podría usted?", "cortesía"],
        ["Pourriez", "podría (usted)", "pouvoir"],
        ["tu pourrais", "podrías", "pouvoir"],
        ["pourrais", "podrías", "pouvoir"],
        ["tu devrais", "deberías", "consejo"],
        ["devrais", "deberías", "devoir"],
        ["j'ouvrirais", "abriría", "consejo"],
        ["ouvrirais", "abriría", "ouvrir"],
        ["j'aimerais", "me gustaría", "deseo"],
        ["ce serait · serait", "sería", "être"],
        ["nous irions · ils feraient · tu serais", "iríamos · harían · serías", "condicional"],
        ["je voudrai · nous irons · ils feront · tu seras", "querré · iremos · harán · serás", "futuro"]
      ]],
      ej: [["Je voudrais un café, s'il vous plaît.", "Quisiera un café, por favor."], ["Pourriez-vous m'aider ?", "¿Podría ayudarme?"], ["Tu devrais te reposer.", "Deberías descansar."], ["Tu ferais mieux de réserver ton billet maintenant.", "Harías mejor en reservar tu billete ya."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je voudrai une attestation. (al pedir)", "Je voudrais une attestation.", "La -s final es el condicional."], ["Est-ce que tu pourais me prêter tes notes ?", "Est-ce que tu pourrais me prêter tes notes ?", "pouvoir: dos r."], ["Tu devras dormir plus. (consejo)", "Tu devrais dormir plus.", "Consejo: condicional."]] }
  ],
  ejemplos: [
    { sit: "Pides un certificado.", resp: "Je voudrais une attestation, s'il vous plaît.", pasos: ["vouloir → voudr- + -ais."], porque: "Cortesía." },
    { sit: "Aconsejas descansar.", resp: "Tu devrais te reposer.", pasos: ["devoir → devr- + -ais."], porque: "Consejo." },
    { sit: "Sueñas con Quebec.", resp: "J'aimerais vivre un an à Québec.", pasos: ["aimer → aimer- + -ais."], porque: "Deseo." }
  ],
  comprueba: [
    { q: "El condicional usa la raíz del…", o: ["futuro", "presente"], a: 0, b: "gr", porque: "voudr-, pourr-." },
    { q: "Sus terminaciones son las del…", o: ["imparfait", "presente"], a: 0, b: "gr", porque: "-ais, -ait…" },
    { q: "«Deberías» se dice…", o: ["tu devrais", "tu devras"], a: 0, b: "gr", porque: "devras es futuro." }
  ],
  practica: [
    { fase: "guiada", c: ["b1co-forme"], k: "sort", ask: "¿Futuro o condicional?", q: "Clasifica.", cats: ["Futuro simple", "Condicional presente"], items: [["je voudrai", 0], ["nous irons", 0], ["ils feront", 0], ["tu seras", 0], ["je voudrais", 1], ["nous irions", 1], ["ils feraient", 1], ["tu serais", 1]], pista: "-ais, -ions, -aient: condicional.", why: "Futuro / condicional." },
    { fase: "guiada", c: ["b1co-usage"], k: "choice", ask: "«Quisiera un certificado de matrícula.»", q: "«Bonjour, je ___ une attestation d'inscription, s'il vous plaît.»", o: ["voudrais", "voudrai", "veux"], a: 0, pista: "Cortesía.", why: "<b>voudrais</b>." },
    { fase: "guiada", c: ["b1co-forme"], k: "fill", ask: "Conjuga pouvoir (vous) en condicional.", q: "___-vous m'envoyer le programme du cours ?", acc: ["Pourriez"], pista: "pourr- + -iez.", why: "<b>Pourriez</b>-vous." },
    { fase: "indep", c: ["b1co-usage"], k: "fill", ask: "Conjuga devoir (tu) en condicional.", q: "Tu ___ dormir un peu plus, tu sais.", acc: ["devrais"], why: "<b>devrais</b>." },
    { fase: "indep", c: ["b1co-forme"], k: "spot", ask: "Encuentra el error.", s: "Est-ce que tu [pourais] me prêter tes notes de cours ?", fix: "pourrais", why: "<b>pourrais</b>." },
    { fase: "indep", c: ["b1co-usage"], k: "match", ask: "Une cada frase con su uso.", q: "Frase → uso", pairs: [["J'aimerais vivre un an à Québec.", "un deseo"], ["À ta place, je changerais de colocataire.", "un consejo"], ["Pourriez-vous répéter, s'il vous plaît ?", "una petición cortés"], ["Selon la radio, le président serait malade.", "una información no confirmada"]], why: "Usos." },
    { fase: "aplica", c: ["b1co-forme"], k: "fill", ask: "Conjuga ouvrir en condicional.", q: "À ta place, j'___ un compte bancaire dès la première semaine.", acc: ["ouvrirais"], why: "<b>ouvrirais</b>." },
    { fase: "aplica", c: ["b1co-usage"], k: "choice", ask: "«Un semestre en Burdeos sería genial.»", q: "«Un semestre à Bordeaux, ce ___ génial !»", o: ["serait", "sera", "est"], a: 0, why: "<b>serait</b>." },
    { fase: "dominio", c: ["b1co-usage"], k: "order", ask: "Ordena: «Harías mejor en reservar tu billete ya».", tokens: ["Tu ferais mieux", "de réserver ton billet", "maintenant."], why: "<b>Tu ferais mieux de réserver ton billet maintenant.</b>" },
    { fase: "dominio", c: ["b1co-forme", "b1co-usage"], k: "listen", say: "Pourriez-vous m'envoyer le programme du cours ?", acc: ["Pourriez-vous m'envoyer le programme du cours ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pourriez-vous m'envoyer le programme du cours ?</b>" },
    { fase: "dominio", c: ["b1co-forme", "b1co-usage"], k: "listen", say: "Tu devrais dormir un peu plus, tu sais.", acc: ["Tu devrais dormir un peu plus, tu sais."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu devrais dormir un peu plus, tu sais.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Québec", "Bordeaux"], previo: [] }
};

E["b11-opinion"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer son opinion et argumenter",
  objetivo: {
    que: "Vas a dar tu opinión y ordenar tus argumentos con conectores.",
    corto: "À mon avis… · Je ne pense pas que ce soit…",
    podras: ["Opinar con je pense que, je crois que, à mon avis, selon moi.", "Usar el subjuntivo después de una opinión negativa: je ne pense pas que ce soit…", "Ordenar argumentos: d'une part… d'autre part, par exemple, donc, pourtant."],
    iconos: ["ic2/microfono", "ic2/bombilla", "ic2/espadas"],
    previos: ["Estar de acuerdo o no (A2, lección 51), la causa y la consecuencia (A2, lecciones 62 y 63) y el subjuntivo (lección 6)."],
    capacidad: "Ahora defiendes tu punto de vista en francés."
  },
  requiere: R("ad2-accord", "cs2-mots", "b1sj-forme"), recupera: ["ad2-accord"],
  conceptos: {
    "b1op-mode": { n: "je pense que + indicativo; je ne pense pas que + subjuntivo; à mon avis (no «dans mon opinion»)", b: "gr" },
    "b1op-connect": { n: "d'une part… d'autre part, par exemple, donc, mais, pourtant", b: "gr" }
  },
  video: {
    titulo: "Dar tu opinión", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "à mon avis", seg: [
        { es: "Hola. Opinar bien es elegir el modo y ordenar las ideas." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Je pense que c'est utile.", es: "indicativo" },
        b: { tag: "negativo", fr: "Je ne pense pas que ce soit utile.", es: "subjuntivo" },
        seg: [ { es: "Afirmación, indicativo:", p: 1 }, { fr: "Je pense que c'est utile.", p: 1 }, { es: "Negación, subjuntivo:", p: 2 }, { fr: "Je ne pense pas que ce soit utile.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En mi opinión, las residencias son muy caras.»", o: ["À mon avis, les résidences universitaires sont trop chères.", "À mon opinion, les résidences universitaires sont trop chères."], a: 0,
        bien: "¡Sí! À mon avis.", mal: "Se dice à mon avis.",
        seg: [ { es: "Pausa. En mi opinión." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à mon avis", "selon moi", "d'une part", "d'autre part", "donc", "pourtant"], seg: [
        { es: "No pienso que… lleva subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate", img: "bg-universidad", yo: "camila",
    escena: "En clase, Camila y Hugo debaten sobre el teléfono en la universidad.",
    pj: PJ,
    lineas: [
      ["sofia", "Faut-il interdire le téléphone en cours ? Camila ?", "¿Hay que prohibir el teléfono en clase? ¿Camila?"],
      ["camila", "Je ne pense pas que l'interdiction soit la meilleure solution.", "No pienso que la prohibición sea la mejor solución."],
      ["hugo", "À mon avis, je crois que les cours en ligne sont très pratiques pour les étudiants qui travaillent.", "En mi opinión, creo que las clases en línea son muy prácticas para los estudiantes que trabajan."],
      ["camila", "D'une part, on apprend la langue ; d'autre part, on découvre une culture. Je le recommande donc à tous.", "Por una parte, se aprende la lengua; por otra, se descubre una cultura. Por lo tanto, lo recomiendo a todos."]
    ],
    fijate: "Fíjate: je ne pense pas que… soit (subjuntivo); je crois que… sont (indicativo); à mon avis; d'une part… d'autre part; donc."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Opinar y argumentar",
      idea: "Afirmativo + indicativo: je pense que c'est utile, je crois que, je trouve que, il est évident que. Negativo + subjuntivo: je ne pense pas que ce soit utile, je ne crois pas que. Para dar tu opinión: à mon avis, selon moi (nunca «dans mon opinion» ni «à mon opinion»). Para organizar: d'une part… d'autre part (dos argumentos), par exemple (ilustrar), donc (consecuencia), mais (oposición), pourtant (oposición inesperada).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo o función"], [
        ["Je pense que… · Je crois que… · Je trouve que…", "Pienso que… · Creo que… · Me parece que…", "indicativo"],
        ["sont", "son", "indicativo"],
        ["Il est évident que…", "Es evidente que…", "indicativo"],
        ["Je ne pense pas que… · Je ne crois pas que…", "No pienso que… · No creo que…", "subjuntivo"],
        ["soit", "sea", "subjuntivo"],
        ["puissions", "podamos", "subjuntivo"],
        ["à mon avis · avis", "en mi opinión · opinión", "opinión"],
        ["selon moi", "según yo", "opinión"],
        ["d'une part… d'autre part", "por una parte… por otra", "dos argumentos"],
        ["par exemple", "por ejemplo", "ilustrar"],
        ["donc", "por lo tanto", "consecuencia"],
        ["mais · pourtant", "pero · sin embargo", "oposición"]
      ]],
      ej: [["À mon avis, c'est une bonne idée.", "En mi opinión, es una buena idea."], ["Je ne crois pas que ce soit possible.", "No creo que sea posible."], ["D'une part…, d'autre part…", "Por una parte…, por otra…"], ["Il faisait beau ce matin ; pourtant, le festival a été annulé.", "Hacía buen tiempo esta mañana; sin embargo, el festival se canceló."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je ne pense pas que c'est une bonne idée.", "Je ne pense pas que ce soit une bonne idée.", "Negación → subjuntivo."], ["À mon opinion, les résidences sont trop chères.", "À mon avis, les résidences sont trop chères.", "Se dice à mon avis."], ["Je pense que ce soit utile.", "Je pense que c'est utile.", "Afirmación → indicativo."]] }
  ],
  ejemplos: [
    { sit: "Opinas que es útil.", resp: "Je pense que c'est utile.", pasos: ["Afirmativo: indicativo."], porque: "Opinión." },
    { sit: "No crees que sea posible.", resp: "Je ne crois pas que ce soit possible.", pasos: ["Negativo: subjuntivo."], porque: "Duda." },
    { sit: "Das dos argumentos.", resp: "D'une part, on apprend la langue ; d'autre part, on découvre une culture.", pasos: ["d'une part… d'autre part."], porque: "Orden." }
  ],
  comprueba: [
    { q: "Je ne pense pas que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Negación." },
    { q: "«En mi opinión» se dice…", o: ["à mon avis", "dans mon opinion"], a: 0, b: "gr", porque: "Expresión fija." },
    { q: "Pourtant expresa…", o: ["una oposición inesperada", "una consecuencia"], a: 0, b: "gr", porque: "Sin embargo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1op-mode"], k: "sort", ask: "¿Indicativo o subjuntivo?", q: "Clasifica.", cats: ["Va con indicativo", "Va con subjuntivo"], items: [["Je pense que…", 0], ["Je crois que…", 0], ["Je trouve que…", 0], ["Il est évident que…", 0], ["Je ne pense pas que…", 1], ["Je ne crois pas que…", 1], ["Il faut que…", 1], ["Je souhaite que…", 1]], pista: "Negación y voluntad: subjuntivo.", why: "Modo." },
    { fase: "guiada", c: ["b1op-mode"], k: "choice", ask: "«No pienso que la prohibición sea la mejor solución.»", q: "«Je ne pense pas que l'interdiction ___ la meilleure solution.»", o: ["soit", "est"], a: 0, pista: "Negación.", why: "<b>soit</b>." },
    { fase: "guiada", c: ["b1op-mode"], k: "fill", ask: "Conjuga être.", q: "Je crois que les cours en ligne ___ très pratiques pour les étudiants qui travaillent.", acc: ["sont"], pista: "Afirmación.", why: "<b>sont</b>." },
    { fase: "indep", c: ["b1op-mode"], k: "spot", ask: "Encuentra el error.", s: "À mon [opinion] , les résidences universitaires sont trop chères .", fix: "avis", why: "<b>À mon avis</b>." },
    { fase: "indep", c: ["b1op-connect"], k: "choice", ask: "«Hacía buen tiempo; sin embargo, el festival se canceló.»", q: "«Il faisait beau ce matin ; ___, le festival a été annulé.»", o: ["pourtant", "donc", "par exemple"], a: 0, why: "<b>pourtant</b>." },
    { fase: "indep", c: ["b1op-connect"], k: "match", ask: "Une cada conector con su función.", q: "Conector → función", pairs: [["d'une part… d'autre part", "presentar dos argumentos"], ["par exemple", "ilustrar una idea"], ["donc", "introducir una consecuencia"], ["pourtant", "expresar una oposición inesperada"], ["à mon avis", "introducir la opinión"]], why: "Conectores." },
    { fase: "aplica", c: ["b1op-connect"], k: "fill", ask: "Escribe el conector de consecuencia.", q: "Un échange permet de progresser et de devenir autonome ; je le recommande ___ à tous les étudiants.", acc: ["donc"], why: "<b>donc</b>." },
    { fase: "aplica", c: ["b1op-mode"], k: "fill", ask: "Conjuga pouvoir.", q: "Je ne crois pas que nous ___ réviser tout le programme en une nuit.", acc: ["puissions"], why: "<b>puissions</b>." },
    { fase: "dominio", c: ["b1op-connect"], k: "choice", ask: "«La vida es cara en París, pero hay muchas cosas gratis.»", q: "«La vie est chère à Paris, ___ il y a beaucoup de choses gratuites à faire.»", o: ["mais", "donc"], a: 0, why: "<b>mais</b>." },
    { fase: "dominio", c: ["b1op-connect", "b1op-mode"], k: "order", ask: "Ordena: «Por una parte se aprende la lengua; por otra, se descubre una cultura».", tokens: ["D'une part, on apprend la langue ;", "d'autre part,", "on découvre une culture."], why: "<b>D'une part, on apprend la langue ; d'autre part, on découvre une culture.</b>" },
    { fase: "dominio", c: ["b1op-mode", "b1op-connect"], k: "listen", say: "Je ne pense pas que l'interdiction soit la meilleure solution.", acc: ["Je ne pense pas que l'interdiction soit la meilleure solution."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je ne pense pas que l'interdiction soit la meilleure solution.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Paris"], previo: [] }
};

/* ================================ B1.1·4 · Relieve, oposición ================================ */
E["b11-mise-en-relief"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La mise en relief : c'est… qui, c'est… que, ce qui… c'est",
  objetivo: {
    que: "Vas a poner en primer plano lo importante con c'est… qui, c'est… que y ce qui / ce que / ce dont…, c'est…",
    corto: "C'est Laura qui a organisé la fête.",
    podras: ["Destacar el sujeto con c'est… qui (con el verbo concordado).", "Destacar un complemento con c'est… que (nunca où).", "Anunciar una idea con ce qui, ce que, ce dont…, c'est…"],
    iconos: ["ic2/estrella", "ic2/bombilla", "ic2/microfono"],
    previos: ["Los relativos qui, que, où, dont (lección 4)."],
    capacidad: "Ahora resaltas lo que más te importa."
  },
  requiere: R("b1rel-quique", "b1rel-oudont"), recupera: ["b1rel-oudont"],
  conceptos: {
    "b1mr-cest": { n: "c'est… qui (sujeto, verbo concordado) / c'est… que (complemento, nunca où)", b: "gr" },
    "b1mr-ce": { n: "ce qui (sujeto) / ce que (COD) / ce dont (verbo con de)…, c'est…", b: "gr" }
  },
  video: {
    titulo: "Poner en relieve", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "c'est… qui · c'est… que", seg: [
        { es: "Hola. Para subrayar algo al hablar, el francés usa c'est." } ] },
      { v: "frase", filas: [
          { nota: "sujeto", p: 1, partes: [["C'est Laura qui a organisé la fête.", "-", 1]] },
          { nota: "lugar", p: 2, partes: [["C'est ici que j'habite.", "-", 2]] },
          { nota: "idea", p: 3, partes: [["Ce qui me plaît, c'est le calme.", "-", 3]] } ], seg: [
        { fr: "C'est Laura qui a organisé la fête.", p: 1 }, { es: "Para un lugar, que, no où:", p: 2 }, { fr: "C'est ici que j'habite.", p: 2 }, { fr: "Ce qui me plaît, c'est le calme.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Fue en Pamplona donde estudié.»", o: ["C'est à Pamplona que j'ai fait mes études.", "C'est à Pamplona où j'ai fait mes études."], a: 0,
        bien: "¡Sí! Siempre que.", mal: "En la mise en relief: que, no où.",
        seg: [ { es: "Pausa. Fue en Pamplona." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'est… qui", "c'est… que", "ce qui", "ce que", "ce dont"], seg: [
        { es: "C'est moi qui suis: el verbo concuerda con moi.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Hugo cree que Camila organizó la fiesta.",
    pj: PJ,
    lineas: [
      ["hugo", "C'est toi qui as organisé la fête ?", "¿Fuiste tú quien organizó la fiesta?"],
      ["camila", "Non, c'est Laura qui a organisé la fête. Ce qui me plaît, c'est l'ambiance.", "No, fue Laura quien organizó la fiesta. Lo que me gusta es el ambiente."],
      ["hugo", "Et c'est moi qui paie l'addition ce soir !", "¡Y soy yo quien paga la cuenta esta noche!"],
      ["camila", "Merci ! Ce dont j'ai besoin, c'est d'un peu de temps. C'est pour ça que j'étudie le français le soir.", "¡Gracias! Lo que necesito es un poco de tiempo. Por eso estudio francés por la noche."]
    ],
    fijate: "Fíjate: c'est toi qui as, c'est Laura qui a, c'est moi qui paie (el verbo concuerda); ce qui me plaît, ce dont j'ai besoin, c'est pour ça que."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Destacar",
      idea: "Para destacar el sujeto: c'est … qui, y el verbo concuerda con el pronombre: c'est moi qui suis, c'est nous qui avons, c'est toi qui as. Para destacar un complemento: c'est … que, con su preposición delante: c'est à elle que je pense, c'est ici que j'habite (nunca où). Para anunciar la idea: ce qui (sujeto: ce qui me plaît), ce que (COD: ce que j'aime), ce dont (verbo con de: ce dont j'ai besoin)…, c'est…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["C'est Laura qui a organisé la fête.", "Fue Laura quien organizó la fiesta.", "c'est… qui"],
        ["qui", "quien", "sujeto"],
        ["C'est ici que j'habite.", "Es aquí donde vivo.", "c'est… que"],
        ["que", "que", "complemento"],
        ["C'est moi qui paie · paie · paye", "Soy yo quien paga · paga", "verbo concordado"],
        ["C'est nous qui avons gagné. · avons", "Fuimos nosotros quienes ganamos.", "verbo concordado"],
        ["Ce qui me plaît, c'est le calme. · Ce qui", "Lo que me gusta es la calma.", "ce qui"],
        ["Ce que j'adore, c'est la musique. · Ce que", "Lo que adoro es la música.", "ce que"],
        ["Ce dont j'ai besoin, c'est de temps. · Ce dont", "Lo que necesito es tiempo.", "ce dont"],
        ["C'est à mon examen que je pense.", "Es en mi examen en lo que pienso.", "preposición delante"]
      ]],
      ej: [["C'est Laura qui a organisé la fête.", "Fue Laura quien organizó la fiesta."], ["C'est ici que j'habite.", "Es aquí donde vivo."], ["Ce qui me plaît, c'est le calme.", "Lo que me gusta es la calma."], ["C'est pour ça que j'étudie le français.", "Por eso estudio francés."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est ici où j'habite.", "C'est ici que j'habite.", "Siempre que para complementos."], ["C'est nous qui ont gagné le match.", "C'est nous qui avons gagné le match.", "El verbo concuerda con nous."], ["C'est à Pamplona où j'ai fait mes études.", "C'est à Pamplona que j'ai fait mes études.", "c'est… que."]] }
  ],
  ejemplos: [
    { sit: "Destacas quién llamó: Paul.", resp: "C'est Paul qui a appelé.", pasos: ["Sujeto: c'est… qui."], porque: "Relieve." },
    { sit: "Destacas cuándo sales: mañana.", resp: "C'est demain que je pars.", pasos: ["Complemento: c'est… que."], porque: "Relieve." },
    { sit: "Destacas lo que te molesta: el ruido.", resp: "Ce qui me dérange, c'est le bruit.", pasos: ["Sujeto de déranger: ce qui."], porque: "Anuncio." }
  ],
  comprueba: [
    { q: "Para destacar el sujeto se usa…", o: ["c'est… qui", "c'est… que"], a: 0, b: "gr", porque: "qui = sujeto." },
    { q: "«Es aquí donde vivo» se dice…", o: ["C'est ici que j'habite.", "C'est ici où j'habite."], a: 0, b: "gr", porque: "Siempre que." },
    { q: "Con avoir besoin de se usa…", o: ["ce dont", "ce que"], a: 0, b: "gr", porque: "de → dont." }
  ],
  practica: [
    { fase: "guiada", c: ["b1mr-ce"], k: "sort", ask: "¿Ce qui, ce que o ce dont?", q: "Clasifica.", cats: ["ce qui", "ce que", "ce dont"], items: [["… me plaît", 0], ["… j'aime", 1], ["… j'ai besoin", 2], ["… m'inquiète", 0], ["… je veux", 1], ["… je parle", 2], ["… se passe", 0], ["… je préfère", 1]], pista: "¿Sigue un verbo, un sujeto o un verbo con de?", why: "ce qui / ce que / ce dont." },
    { fase: "guiada", c: ["b1mr-cest"], k: "choice", ask: "«No, fue Laura quien organizó la fiesta.»", q: "«Non, c'est Laura ___ a organisé la fête.»", o: ["qui", "que"], a: 0, pista: "Sujeto.", why: "<b>qui</b>." },
    { fase: "guiada", c: ["b1mr-cest"], k: "choice", ask: "«Es este libro el que te recomiendo.»", q: "«C'est ce livre ___ je te recommande.»", o: ["que", "qui"], a: 0, pista: "Sigue un sujeto.", why: "<b>que</b>." },
    { fase: "indep", c: ["b1mr-cest"], k: "fill", ask: "Conjuga payer.", q: "C'est moi qui ___ l'addition ce soir.", acc: ["paie", "paye"], why: "<b>paie</b>: concuerda con moi." },
    { fase: "indep", c: ["b1mr-ce"], k: "fill", ask: "Completa: «Lo que me interesa…».", q: "___ m'intéresse, c'est la littérature québécoise.", acc: ["Ce qui", "ce qui"], why: "<b>Ce qui</b>: sujeto." },
    { fase: "indep", c: ["b1mr-cest"], k: "spot", ask: "Encuentra el error.", s: "C'est à Pamplona [où] j'ai fait mes études .", fix: "que", why: "<b>que</b>." },
    { fase: "aplica", c: ["b1mr-ce"], k: "fill", ask: "Completa: «Lo que necesito…».", q: "___ j'ai besoin, c'est d'un peu de temps.", acc: ["Ce dont", "ce dont"], why: "<b>Ce dont</b>." },
    { fase: "aplica", c: ["b1mr-cest", "b1mr-ce"], k: "match", ask: "Une cada frase con su versión en relieve.", q: "Frase → relieve", pairs: [["Paul a appelé.", "C'est Paul qui a appelé."], ["Je pars demain.", "C'est demain que je pars."], ["Je pense à mon examen.", "C'est à mon examen que je pense."], ["J'adore la musique.", "Ce que j'adore, c'est la musique."], ["Le bruit me dérange.", "Ce qui me dérange, c'est le bruit."]], why: "Mise en relief." },
    { fase: "dominio", c: ["b1mr-cest"], k: "spot", ask: "Encuentra el error.", s: "C'est nous qui [ont] gagné le match .", fix: "avons", why: "<b>avons</b>." },
    { fase: "dominio", c: ["b1mr-ce"], k: "choice", ask: "«Lo que no entiendo es por qué se fue.»", q: "«___ je ne comprends pas, c'est pourquoi il est parti.»", o: ["Ce que", "Ce qui", "Ce dont"], a: 0, why: "<b>Ce que</b>: COD." },
    { fase: "dominio", c: ["b1mr-cest", "b1mr-ce"], k: "listen", say: "C'est toi qui as raison, pas moi.", acc: ["C'est toi qui as raison, pas moi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est toi qui as raison, pas moi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura", "Paul", "Pamplona"], previo: [] }
};

E["b11-opposition-concession"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer l'opposition et la concession",
  objetivo: {
    que: "Vas a oponer y conceder con el conector adecuado: mais, alors que, pourtant, même si, bien que, malgré.",
    corto: "Malgré la pluie… · Bien qu'il soit tard…",
    podras: ["Oponer dos hechos: mais, alors que, tandis que, en revanche.", "Decir «sin embargo»: pourtant, cependant.", "Decir «aunque» y «a pesar de»: même si + indicativo, bien que + subjuntivo, malgré + sustantivo."],
    iconos: ["ic2/espadas", "ic2/bombilla", "ic2/lapiz"],
    previos: ["El subjuntivo (lección 6) y opinar y argumentar (lección 8)."],
    capacidad: "Ahora matizas tus ideas como un hablante avanzado."
  },
  requiere: R("b1sj-forme", "b1op-connect"), recupera: ["b1op-connect"],
  conceptos: {
    "b1oc-oppo": { n: "oponer: mais, alors que, tandis que, en revanche; sin embargo: pourtant, cependant", b: "gr" },
    "b1oc-conc": { n: "aunque: même si + indicativo / bien que + subjuntivo; a pesar de: malgré + sustantivo", b: "gr" }
  },
  video: {
    titulo: "Oponer y conceder", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "malgré · bien que", seg: [
        { es: "Hola. El conector depende de lo que viene detrás." } ] },
      { v: "frase", filas: [
          { nota: "+ indicativo", p: 1, partes: [["Même s'il pleut, je viendrai.", "-", 1]] },
          { nota: "+ subjuntivo", p: 2, partes: [["Bien qu'il soit tard, je continue.", "-", 2]] },
          { nota: "+ sustantivo", p: 3, partes: [["Malgré la pluie, on est sortis.", "-", 3]] } ], seg: [
        { fr: "Même s'il pleut, je viendrai.", p: 1 }, { fr: "Bien qu'il soit tard, je continue.", p: 2 }, { fr: "Malgré la pluie, on est sortis.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«A pesar de la lluvia, el concierto se hizo.»", o: ["Malgré la pluie, le concert a eu lieu.", "Malgré de la pluie, le concert a eu lieu."], a: 0,
        bien: "¡Sí! Malgré sin de.", mal: "Malgré va directo al sustantivo.",
        seg: [ { es: "Pausa. A pesar de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mais", "alors que", "pourtant", "même si", "bien que", "malgré"], seg: [
        { es: "Bien que, subjuntivo; même si, indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Hermanos distintos", img: "bg-cafe", yo: "camila",
    escena: "Hugo habla de su hermano y del clima.",
    pj: PJ,
    lineas: [
      ["hugo", "Mon frère adore le foot, alors que moi, je préfère le basket.", "Mi hermano adora el fútbol, mientras que yo prefiero el baloncesto."],
      ["camila", "Moi, j'aime le café ; ma sœur, en revanche, préfère le thé.", "A mí me gusta el café; mi hermana, en cambio, prefiere el té."],
      ["hugo", "Bien qu'il soit malade, il est venu en cours. Malgré la pluie, le concert a eu lieu !", "Aunque está enfermo, vino a clase. ¡A pesar de la lluvia, el concierto se hizo!"],
      ["camila", "Il a beaucoup étudié ; pourtant, il a raté l'examen. Même s'il pleut, nous allons marcher demain.", "Estudió mucho; sin embargo, perdió el examen. Aunque llueva, vamos a caminar mañana."]
    ],
    fijate: "Fíjate: alors que, en revanche (oponer); bien qu'il soit (subjuntivo); malgré la pluie (sustantivo); pourtant; même s'il pleut (indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El conector según lo que sigue",
      idea: "Para oponer dos hechos: mais, alors que, tandis que (+ indicativo), en revanche, par contre. «Sin embargo»: pourtant, cependant, toutefois, néanmoins. «Aunque»: même si + indicativo (même si tu es fatigué) o bien que / quoique + subjuntivo (bien qu'il soit tard). «A pesar de»: malgré + sustantivo, sin de (malgré la pluie), o en dépit de. «En lugar de»: au lieu de + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sigue"], [
        ["mais · alors que · tandis que", "pero · mientras que", "indicativo"],
        ["en revanche · par contre", "en cambio", "frase"],
        ["pourtant · cependant · toutefois · néanmoins", "sin embargo", "frase"],
        ["même si tu es", "aunque estés", "indicativo"],
        ["es · est", "eres · es", "indicativo"],
        ["bien qu'il soit", "aunque sea", "subjuntivo"],
        ["soit · fasse", "sea · haga", "subjuntivo"],
        ["Malgré la pluie", "A pesar de la lluvia", "sustantivo"],
        ["Malgré · en dépit de", "a pesar de", "sustantivo"],
        ["quoique", "aunque", "subjuntivo"],
        ["au lieu de regarder la télé", "en lugar de ver televisión", "infinitivo"],
        ["regarder la télé", "ver televisión", "infinitivo"]
      ]],
      ej: [["Même s'il pleut, je viendrai.", "Aunque llueva, vendré."], ["Bien qu'il soit tard, je continue.", "Aunque es tarde, sigo."], ["Malgré la pluie, on est sortis.", "A pesar de la lluvia, salimos."], ["Il a étudié ; pourtant, il a raté.", "Estudió; sin embargo, perdió."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Malgré de la pluie", "Malgré la pluie", "malgré, sin de."], ["Bien qu'il fait froid, nous irons à la plage.", "Bien qu'il fasse froid, nous irons à la plage.", "bien que + subjuntivo."], ["Même si elle soit fatiguée, elle travaille.", "Même si elle est fatiguée, elle travaille.", "même si + indicativo."]] }
  ],
  ejemplos: [
    { sit: "«A pesar de la lluvia…»", resp: "Malgré la pluie…", pasos: ["Sustantivo: malgré, sin de."], porque: "Concesión." },
    { sit: "«Aunque está enfermo, vino.»", resp: "Bien qu'il soit malade, il est venu.", pasos: ["bien que + subjuntivo."], porque: "Concesión." },
    { sit: "«Aunque llegues tarde, ven.»", resp: "Même si tu es en retard, viens !", pasos: ["même si + indicativo."], porque: "Concesión." }
  ],
  comprueba: [
    { q: "Bien que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "bien qu'il soit." },
    { q: "Même si va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "même si tu es." },
    { q: "Malgré va seguido de…", o: ["un sustantivo, sin de", "de + sustantivo"], a: 0, b: "gr", porque: "malgré la pluie." }
  ],
  practica: [
    { fase: "guiada", c: ["b1oc-conc", "b1oc-oppo"], k: "sort", ask: "¿Qué va después?", q: "Clasifica.", cats: ["+ indicativo", "+ subjuntivo", "+ sustantivo"], items: [["même si", 0], ["alors que", 0], ["tandis que", 0], ["bien que", 1], ["quoique", 1], ["malgré", 2], ["en dépit de", 2]], pista: "bien que: subjuntivo.", why: "Conectores." },
    { fase: "guiada", c: ["b1oc-conc"], k: "choice", ask: "«A pesar de la lluvia, el concierto se hizo.»", q: "«___ la pluie, le concert a eu lieu.»", o: ["Malgré", "Bien que", "Même si"], a: 0, pista: "Sigue un sustantivo.", why: "<b>Malgré</b>." },
    { fase: "guiada", c: ["b1oc-conc"], k: "choice", ask: "«Aunque está enfermo, vino a clase.»", q: "«Bien qu'il ___ malade, il est venu en cours.»", o: ["soit", "est"], a: 0, pista: "bien que + subjuntivo.", why: "<b>soit</b>." },
    { fase: "indep", c: ["b1oc-conc"], k: "choice", ask: "«Aunque llegues tarde, ¡ven a la fiesta!»", q: "«Même si tu ___ en retard, viens à la fête !»", o: ["es", "sois"], a: 0, why: "<b>es</b>: même si + indicativo." },
    { fase: "indep", c: ["b1oc-oppo"], k: "fill", ask: "Escribe «en cambio».", q: "J'aime le café ; ma sœur, ___, préfère le thé.", acc: ["en revanche", "par contre"], why: "<b>en revanche</b>." },
    { fase: "indep", c: ["b1oc-oppo"], k: "fill", ask: "Escribe «sin embargo».", q: "Il a beaucoup étudié ; ___, il a raté l'examen.", acc: ["pourtant", "cependant", "toutefois", "néanmoins"], why: "<b>pourtant</b>." },
    { fase: "aplica", c: ["b1oc-conc"], k: "spot", ask: "Encuentra el error.", s: "Bien qu'il [fait] froid , nous irons à la plage .", fix: "fasse", why: "<b>fasse</b>." },
    { fase: "aplica", c: ["b1oc-oppo", "b1oc-conc"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["sin embargo", "pourtant"], ["a pesar de", "malgré"], ["mientras que", "alors que"], ["en cambio", "en revanche"], ["aunque (+ indicativo)", "même si"]], why: "Conectores." },
    { fase: "dominio", c: ["b1oc-conc"], k: "spot", ask: "Encuentra el error.", s: "Même si elle [soit] fatiguée , elle travaille ce soir .", fix: "est", why: "<b>est</b>." },
    { fase: "dominio", c: ["b1oc-oppo"], k: "choice", ask: "«Mi hermano adora el fútbol, mientras que yo prefiero el baloncesto.»", q: "«Mon frère adore le foot, ___ moi, je préfère le basket.»", o: ["alors que", "malgré", "bien que"], a: 0, why: "<b>alors que</b>." },
    { fase: "dominio", c: ["b1oc-oppo", "b1oc-conc"], k: "listen", say: "Bien qu'il soit tard, je continue à travailler.", acc: ["Bien qu'il soit tard, je continue à travailler."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bien qu'il soit tard, je continue à travailler.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.1·5 · Preguntar y construir la frase ================================ */
E["b11-interrogation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Poser des questions : intonation, est-ce que, inversion et lequel",
  objetivo: {
    que: "Vas a preguntar en tres registros: entonación (familiar), est-ce que (estándar) e inversión (formal), y a elegir con lequel.",
    corto: "Tu viens ? · Est-ce que tu viens ? · Venez-vous ?",
    podras: ["Preguntar con entonación, con est-ce que o con inversión (a-t-il).", "Decir «¿qué?»: qu'est-ce que…?, …quoi ?, que + inversión.", "Elegir con quel + nombre y lequel sin repetir el nombre."],
    iconos: ["ic2/pregunta", "ic2/microfono", "ic2/libro"],
    previos: ["Las preguntas (A1, lecciones 6 y 57) y quel (A1, lección 56)."],
    capacidad: "Ahora preguntas igual de bien a un amigo que a un profesor."
  },
  requiere: R("pcn-q"), recupera: ["pcn-q"],
  conceptos: {
    "b1in-registre": { n: "familiar (Tu viens ?), estándar (Est-ce que tu viens ?), formal (Venez-vous ?, a-t-il)", b: "gr" },
    "b1in-mots": { n: "qu'est-ce que / quoi / que; quel + nombre; lequel, laquelle para elegir", b: "gr" }
  },
  video: {
    titulo: "Tres formas de preguntar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "? · est-ce que · -vous", seg: [
        { es: "Hola. La misma pregunta, en tres registros." } ] },
      { v: "frase", filas: [
          { nota: "familiar", p: 1, partes: [["Tu viens ?", "-", 1]] },
          { nota: "estándar", p: 2, partes: [["Est-ce que tu viens ?", "-", 2]] },
          { nota: "formal", p: 3, partes: [["Venez-vous ?", "-", 3]] } ], seg: [
        { fr: "Tu viens ?", p: 1 }, { fr: "Est-ce que tu viens ?", p: 2 }, { fr: "Venez-vous ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Adónde vas mañana?»", o: ["Où est-ce que tu vas demain ?", "Où est-ce que vas-tu demain ?"], a: 0,
        bien: "¡Sí! Est-ce que sin inversión.", mal: "No mezcles est-ce que con inversión.",
        seg: [ { es: "Pausa. ¿Adónde vas?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qu'est-ce que", "a-t-il", "quel", "lequel", "laquelle"], seg: [
        { es: "Entre dos vocales, una te: a-t-il.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La entrevista", img: "bg-universidad", yo: "camila",
    escena: "Camila hace preguntas a Hugo y a Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Qu'est-ce que tu fais ce week-end ?", "¿Qué haces este fin de semana?"],
      ["hugo", "Il y a deux séminaires le jeudi. Lequel vas-tu choisir ?", "Hay dos seminarios el jueves. ¿Cuál vas a escoger?"],
      ["camila", "Madame, à quelle heure le cours commence-t-il demain ? Et ton directeur a-t-il lu ton mémoire, Hugo ?", "Señora, ¿a qué hora empieza la clase mañana? ¿Y tu director leyó tu trabajo, Hugo?"],
      ["sofia", "À neuf heures. Pourquoi est-ce que tu étudies le français, Camila ?", "A las nueve. ¿Por qué estudias francés, Camila?"]
    ],
    fijate: "Fíjate: qu'est-ce que tu fais (estándar); lequel vas-tu (inversión); commence-t-il, a-t-il (con -t-); pourquoi est-ce que."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preguntar",
      idea: "Familiar: frase normal + entonación: Tu viens ? On mange où ? C'est quoi ? Estándar: est-ce que + sujeto + verbo: Est-ce que tu viens ? Où est-ce que tu habites ? Formal: inversión verbo-sujeto con guion: Venez-vous ? Où habitez-vous ? Con -t- entre vocales: a-t-il, commence-t-il. Con un sustantivo: Julie vient-elle ? «¿Qué?»: Qu'est-ce que…? / …quoi ? / Que + inversión. Quel + nombre; lequel, laquelle, lesquels para elegir sin repetir el nombre. Nunca mezcles est-ce que con inversión.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Tu viens quand ? · On mange où ? · C'est quoi ?", "¿Cuándo vienes? · ¿Dónde comemos? · ¿Qué es?", "familiar"],
        ["Est-ce que tu viens ?", "¿Vienes?", "estándar"],
        ["Qu'est-ce que tu fais ? · Qu'est-ce que", "¿Qué haces?", "estándar"],
        ["Où est-ce que tu habites ? · tu vas", "¿Dónde vives? · vas", "estándar"],
        ["Venez-vous demain ?", "¿Viene usted mañana?", "formal"],
        ["Parlez-vous espagnol ? · Parlez", "¿Habla usted español? · habla", "formal"],
        ["A-t-elle fini ? · a-t-il · commence-t-il", "¿Terminó ella? · ¿él…?", "formal con -t-"],
        ["Julie vient-elle ?", "¿Viene Julie?", "formal con sustantivo"],
        ["Quel est ton numéro ? · Quel", "¿Cuál es tu número?", "quel + nombre"],
        ["Lequel ? · Laquelle ?", "¿Cuál?", "elegir"]
      ]],
      ej: [["Qu'est-ce que tu fais ce soir ?", "¿Qué haces esta noche?"], ["Où habitez-vous ?", "¿Dónde vive usted?"], ["A-t-elle fini son exposé ?", "¿Terminó ella su exposición?"], ["Deux livres ? Lequel veux-tu ?", "¿Dos libros? ¿Cuál quieres?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Que tu fais ?", "Qu'est-ce que tu fais ?", "Que solo va con inversión: Que fais-tu ?"], ["Où est-ce que vas-tu demain ?", "Où est-ce que tu vas demain ?", "No mezcles est-ce que con inversión."], ["Ton directeur a-il lu ton mémoire ?", "Ton directeur a-t-il lu ton mémoire ?", "Entre dos vocales: -t-."]] }
  ],
  ejemplos: [
    { sit: "Preguntas a un amigo qué hace.", resp: "Tu fais quoi ?", pasos: ["Familiar."], porque: "Entonación." },
    { sit: "Preguntas a un profesor dónde vive.", resp: "Où habitez-vous ?", pasos: ["Formal: inversión."], porque: "Registro." },
    { sit: "Hay dos salas: ¿cuál?", resp: "Laquelle ?", pasos: ["la salle → laquelle."], porque: "Elegir." }
  ],
  comprueba: [
    { q: "Est-ce que corresponde al registro…", o: ["estándar", "formal"], a: 0, b: "gr", porque: "Neutro." },
    { q: "Entre dos vocales en la inversión se añade…", o: ["-t-", "-s-"], a: 0, b: "gr", porque: "a-t-il." },
    { q: "Para elegir sin repetir el nombre se usa…", o: ["lequel", "quel"], a: 0, b: "gr", porque: "Lequel veux-tu ?" }
  ],
  practica: [
    { fase: "guiada", c: ["b1in-registre"], k: "sort", ask: "¿Qué registro es?", q: "Clasifica.", cats: ["Familiar", "Estándar", "Formal"], items: [["Tu viens quand ?", 0], ["On mange où ?", 0], ["C'est quoi, ton adresse ?", 0], ["Est-ce que tu viens ?", 1], ["Où est-ce que tu habites ?", 1], ["Qu'est-ce que vous cherchez ?", 1], ["Venez-vous demain ?", 2], ["Que pensez-vous de ce projet ?", 2]], pista: "Inversión: formal.", why: "Registros." },
    { fase: "guiada", c: ["b1in-mots"], k: "choice", ask: "«¿Qué haces este fin de semana?»", q: "«___ tu fais ce week-end ?»", o: ["Qu'est-ce que", "Que", "Quoi"], a: 0, pista: "Con tu fais (sin inversión).", why: "<b>Qu'est-ce que</b>." },
    { fase: "guiada", c: ["b1in-registre"], k: "choice", ask: "«¿A qué hora empieza la clase?» (formal)", q: "«À quelle heure le cours ___ demain ?»", o: ["commence-t-il", "commence-il"], a: 0, pista: "Entre vocales: -t-.", why: "<b>commence-t-il</b>." },
    { fase: "indep", c: ["b1in-mots"], k: "choice", ask: "«Hay dos seminarios. ¿Cuál vas a escoger?»", q: "«Il y a deux séminaires le jeudi. ___ vas-tu choisir ?»", o: ["Lequel", "Quel", "Laquelle"], a: 0, why: "<b>Lequel</b>: le séminaire." },
    { fase: "indep", c: ["b1in-mots"], k: "fill", ask: "Escribe «cuál» (femenino).", q: "— Je cherche une salle libre. — ___ ? La 204 ou la 310 ?", acc: ["Laquelle", "laquelle"], why: "<b>Laquelle</b>." },
    { fase: "indep", c: ["b1in-registre"], k: "spot", ask: "Encuentra el error.", s: "Où est-ce que [vas-tu] demain ?", fix: "tu vas", why: "<b>tu vas</b>." },
    { fase: "aplica", c: ["b1in-registre"], k: "fill", ask: "Pon la pregunta en registro formal.", q: "Tu parles espagnol ? → ___-vous espagnol ?", acc: ["Parlez", "parlez"], why: "<b>Parlez</b>-vous espagnol ?" },
    { fase: "aplica", c: ["b1in-registre"], k: "match", ask: "Une cada pregunta familiar con su forma formal.", q: "Familiar → formal", pairs: [["Tu fais quoi ?", "Que fais-tu ?"], ["Tu vas où ?", "Où vas-tu ?"], ["Il arrive quand ?", "Quand arrive-t-il ?"], ["Elle a combien de frères ?", "Combien de frères a-t-elle ?"], ["Vous venez comment ?", "Comment venez-vous ?"]], why: "Inversión." },
    { fase: "dominio", c: ["b1in-registre"], k: "spot", ask: "Encuentra el error.", s: "Ton directeur [a-il] lu ton mémoire ?", fix: "a-t-il", why: "<b>a-t-il</b>." },
    { fase: "dominio", c: ["b1in-mots"], k: "choice", ask: "«¿Cuál es tu número de teléfono?»", q: "«___ est ton numéro de téléphone ?»", o: ["Quel", "Lequel", "Qu'est-ce que"], a: 0, why: "<b>Quel</b> + nombre." },
    { fase: "dominio", c: ["b1in-registre", "b1in-mots"], k: "listen", say: "Pourriez-vous m'expliquer cet exercice, s'il vous plaît ?", acc: ["Pourriez-vous m'expliquer cet exercice, s'il vous plaît ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pourriez-vous m'expliquer cet exercice, s'il vous plaît ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Julie"], previo: [] }
};

E["b11-verbes-prepositions"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Verbe + à / de + infinitif : commencer à, décider de…",
  objetivo: {
    que: "Vas a saber qué verbos piden à, de o nada antes de un infinitivo.",
    corto: "commencer à · décider de · vouloir + infinitivo.",
    podras: ["Usar sin preposición vouloir, pouvoir, devoir, aimer, espérer, aller.", "Usar à con commencer, apprendre, réussir, continuer, penser.", "Usar de con décider, essayer, oublier, arrêter, refuser, rêver."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bombilla"],
    previos: ["Vouloir, pouvoir, devoir (A1, lección 15)."],
    capacidad: "Ahora encadenas dos verbos sin dudar de la preposición."
  },
  requiere: R(), recupera: [],
  conceptos: {
    "b1vp-a": { n: "+ à: commencer, apprendre, réussir, continuer, penser, aider qqn", b: "gr" },
    "b1vp-de": { n: "+ de: décider, essayer, oublier, arrêter, refuser, rêver; sin preposición: vouloir, espérer", b: "gr" }
  },
  video: {
    titulo: "¿À, de o nada?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "à · de · —", seg: [
        { es: "Hola. El primer verbo decide la preposición." } ] },
      { v: "frase", filas: [
          { nota: "+ à", p: 1, partes: [["Il a réussi à trouver un stage.", "-", 1]] },
          { nota: "+ de", p: 2, partes: [["Je rêve de vivre à Paris.", "-", 2]] },
          { nota: "sin nada", p: 3, partes: [["J'espère partir en juin.", "-", 3]] } ], seg: [
        { fr: "Il a réussi à trouver un stage.", p: 1 }, { fr: "Je rêve de vivre à Paris.", p: 2 }, { fr: "J'espère partir en juin.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Olvidé traer mi cuaderno.»", o: ["J'ai oublié d'apporter mon cahier.", "J'ai oublié apporter mon cahier."], a: 0,
        bien: "¡Sí! oublier de, y d' ante vocal.", mal: "oublier pide de: d'apporter.",
        seg: [ { es: "Pausa. Olvidé." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["commencer à", "réussir à", "décider de", "oublier de", "arrêter de", "espérer"], seg: [
        { es: "Aprende cada verbo con su preposición.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Buenas noticias", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo se cuentan novedades.",
    pj: PJ,
    lineas: [
      ["camila", "Zut ! J'ai oublié d'apporter mon cahier.", "¡Rayos! Olvidé traer mi cuaderno."],
      ["hugo", "Pas grave. Tu sais, ma sœur a réussi à obtenir une bourse pour Lyon !", "No importa. ¿Sabes? ¡Mi hermana logró obtener una beca para Lyon!"],
      ["camila", "Super ! Moi, je commence à comprendre le subjonctif. Et je rêve de faire un semestre d'échange.", "¡Súper! Yo empiezo a entender el subjuntivo. Y sueño con hacer un semestre de intercambio."],
      ["hugo", "Nous espérons obtenir notre diplôme en juin. Mon père a arrêté de fumer, aussi !", "Esperamos obtener nuestro diploma en junio. ¡Mi papá también dejó de fumar!"]
    ],
    fijate: "Fíjate: oublié d'apporter, réussi à obtenir, commence à comprendre, rêve de faire, espérons obtenir (sin preposición), arrêté de fumer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El verbo decide",
      idea: "Sin preposición: vouloir, pouvoir, devoir, aimer, préférer, espérer, aller. Con à: commencer, apprendre, réussir, continuer, penser, aider quelqu'un. Con de: décider, essayer, oublier, arrêter, refuser, rêver, accepter, conseiller à quelqu'un. De se vuelve d' delante de vocal. Ne pas va junto delante del infinitivo: j'ai décidé de ne pas aller…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Preposición"], [
        ["Je commence à comprendre.", "Empiezo a entender.", "à"],
        ["Elle a réussi à obtenir une bourse.", "Logró obtener una beca.", "à"],
        ["Tu as pensé à réserver ?", "¿Pensaste en reservar?", "à"],
        ["à", "a", "commencer, réussir, penser…"],
        ["J'ai oublié d'apporter mon livre.", "Olvidé traer mi libro.", "de → d'"],
        ["d'", "de (ante vocal)", "de"],
        ["Il a arrêté de fumer.", "Dejó de fumar.", "de"],
        ["Il m'a conseillé de lire.", "Me aconsejó leer.", "de"],
        ["de", "de", "décider, oublier, arrêter…"],
        ["J'ai oublié de l'envoyer.", "Olvidé enviarlo.", "de + pronombre"],
        ["de l'envoyer", "enviarlo", "de"],
        ["J'espère obtenir mon diplôme.", "Espero obtener mi diploma.", "sin preposición"],
        ["obtenir", "obtener", "infinitivo"],
        ["espérer · vouloir · pouvoir · aimer · aller", "esperar · querer · poder · gustar · ir", "sin preposición"],
        ["arrêté", "dejado", "arrêter de"]
      ]],
      ej: [["Je rêve de vivre à Paris.", "Sueño con vivir en París."], ["Il a réussi à trouver un stage.", "Logró encontrar una práctica."], ["J'espère partir en juin.", "Espero irme en junio."], ["J'ai décidé de ne pas aller à la fête.", "Decidí no ir a la fiesta."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai oublié apporter mon livre.", "J'ai oublié d'apporter mon livre.", "oublier de."], ["Il a laissé de fumer.", "Il a arrêté de fumer.", "«Dejar de» = arrêter de."], ["Je rêve à faire un échange.", "Je rêve de faire un échange.", "«Soñar con» = rêver de."]] }
  ],
  ejemplos: [
    { sit: "«Logró encontrar una práctica.»", resp: "Il a réussi à trouver un stage.", pasos: ["réussir + à."], porque: "Verbo con à." },
    { sit: "«Decidí no ir a la fiesta.»", resp: "J'ai décidé de ne pas aller à la fête.", pasos: ["décider + de.", "ne pas junto antes del infinitivo."], porque: "Verbo con de." },
    { sit: "«Espero irme en junio.»", resp: "J'espère partir en juin.", pasos: ["espérer sin preposición."], porque: "Directo." }
  ],
  comprueba: [
    { q: "Commencer va con…", o: ["à", "de"], a: 0, b: "gr", porque: "commencer à." },
    { q: "Oublier va con…", o: ["de", "à"], a: 0, b: "gr", porque: "oublier de." },
    { q: "Espérer va…", o: ["sin preposición", "con de"], a: 0, b: "gr", porque: "J'espère partir." }
  ],
  practica: [
    { fase: "guiada", c: ["b1vp-a", "b1vp-de"], k: "sort", ask: "¿Qué preposición pide?", q: "Clasifica.", cats: ["+ à", "+ de", "sin preposición"], items: [["commencer", 0], ["réussir", 0], ["apprendre", 0], ["essayer", 1], ["décider", 1], ["oublier", 1], ["vouloir", 2], ["espérer", 2]], pista: "Memoriza los grupos.", why: "Preposiciones." },
    { fase: "guiada", c: ["b1vp-de"], k: "choice", ask: "«Olvidé traer mi cuaderno.»", q: "«Zut ! J'ai oublié ___ apporter mon cahier.»", o: ["d'", "à", "—"], a: 0, pista: "oublier de, ante vocal.", why: "<b>d'apporter</b>." },
    { fase: "guiada", c: ["b1vp-a"], k: "choice", ask: "«Empiezo a entender el subjuntivo.»", q: "«Je commence ___ comprendre le subjonctif.»", o: ["à", "de"], a: 0, pista: "commencer…", why: "<b>à</b>." },
    { fase: "indep", c: ["b1vp-de"], k: "choice", ask: "«Esperamos obtener nuestro diploma.»", q: "«Nous espérons ___ notre diplôme en juin.»", o: ["obtenir", "d'obtenir", "à obtenir"], a: 0, why: "espérer: <b>obtenir</b>." },
    { fase: "indep", c: ["b1vp-de"], k: "fill", ask: "Escribe la preposición.", q: "Il a arrêté ___ fumer l'année dernière.", acc: ["de"], why: "<b>arrêter de</b>." },
    { fase: "indep", c: ["b1vp-a"], k: "fill", ask: "Escribe la preposición.", q: "Elle a réussi ___ obtenir une bourse pour Lyon.", acc: ["à"], why: "<b>réussir à</b>." },
    { fase: "aplica", c: ["b1vp-de"], k: "fill", ask: "Escribe la preposición.", q: "Mon professeur m'a conseillé ___ lire la presse française.", acc: ["de"], why: "<b>conseiller de</b>." },
    { fase: "aplica", c: ["b1vp-a"], k: "fill", ask: "Escribe la preposición.", q: "Tu as pensé ___ réserver la salle pour demain ?", acc: ["à"], why: "<b>penser à</b>." },
    { fase: "aplica", c: ["b1vp-de"], k: "spot", ask: "Encuentra el error.", s: "Je rêve [à] faire un semestre d'échange à Lyon .", fix: "de", why: "<b>rêver de</b>." },
    { fase: "dominio", c: ["b1vp-de"], k: "spot", ask: "Encuentra el error.", s: "Il a [laissé] de fumer il y a deux ans .", fix: "arrêté", why: "<b>arrêter de</b>." },
    { fase: "dominio", c: ["b1vp-a", "b1vp-de"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["tratar de", "essayer de"], ["dejar de", "arrêter de"], ["soñar con", "rêver de"], ["aprender a", "apprendre à"], ["lograr", "réussir à"]], why: "Verbos con preposición." },
    { fase: "dominio", c: ["b1vp-de"], k: "choice", ask: "«¿El expediente? Olvidé enviarlo.»", q: "«Le dossier ? J'ai oublié ___.»", o: ["de l'envoyer", "l'envoyer", "à l'envoyer"], a: 0, why: "<b>de l'envoyer</b>." },
    { fase: "dominio", c: ["b1vp-a", "b1vp-de"], k: "listen", say: "Elle a accepté de présenter son projet devant la classe.", acc: ["Elle a accepté de présenter son projet devant la classe."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle a accepté de présenter son projet devant la classe.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Paris"], previo: [] }
};

E["b11-adverbes-ment"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les adverbes en -ment : formation et place",
  objetivo: {
    que: "Vas a formar los adverbios en -ment y ponerlos en su lugar.",
    corto: "lentement · vraiment · couramment · prudemment.",
    podras: ["Formar el adverbio con el femenino + -ment: lentement.", "Aplicar los casos especiales: vraiment, couramment, prudemment, bien, mal.", "Poner el adverbio después del verbo; en tiempo compuesto, los cortos entre auxiliar y participio."],
    iconos: ["ic2/lapiz", "ic2/rayo", "ic2/bombilla"],
    previos: ["Los adverbios de manera (A2, lección 67)."],
    capacidad: "Ahora matizas cómo se hacen las cosas."
  },
  requiere: R("am2-place", "am2-adj"), recupera: ["am2-adj"],
  conceptos: {
    "b1ad-forme": { n: "femenino + -ment; vocal + -ment; -ant → -amment, -ent → -emment; bon → bien", b: "gr" },
    "b1ad-place": { n: "después del verbo; en tiempo compuesto, los cortos entre auxiliar y participio (j'ai bien compris)", b: "gr" }
  },
  video: {
    titulo: "Adverbios en -ment", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "-ment = -mente", seg: [
        { es: "Hola. Los adverbios en -ment son tus «-mente» del español." } ] },
      { v: "frase", filas: [
          { nota: "femenino + -ment", p: 1, partes: [["lente → lentement", "-", 1]] },
          { nota: "-ant → -amment", p: 2, partes: [["courant → couramment", "-", 2]] },
          { nota: "-ent → -emment", p: 3, partes: [["prudent → prudemment", "-", 3]] } ], seg: [
        { fr: "lentement", p: 1 }, { fr: "couramment", p: 2 }, { fr: "prudemment", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Sí, señora, entendí bien la consigna.»", o: ["Oui, madame, j'ai bien compris la consigne.", "Oui, madame, j'ai compris bien la consigne."], a: 0,
        bien: "¡Sí! Adverbio corto entre auxiliar y participio.", mal: "En tiempo compuesto: j'ai bien compris.",
        seg: [ { es: "Pausa. Entendí bien." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["lentement", "vraiment", "couramment", "prudemment", "bien", "mal"], seg: [
        { es: "Bon da bien; mauvais da mal.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Por la carretera", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo viajan en carro con una amiga.",
    pj: PJ,
    lineas: [
      ["hugo", "Conduis prudemment, la route est dangereuse !", "¡Maneja con prudencia, la carretera es peligrosa!"],
      ["camila", "Oui. Notre amie parle couramment le français et l'anglais.", "Sí. Nuestra amiga habla francés e inglés con fluidez."],
      ["hugo", "Heureusement, le cours a été annulé : je n'avais pas fini mon exposé !", "¡Afortunadamente, la clase se canceló: no había terminado mi exposición!"],
      ["camila", "Tu as bien travaillé cette semaine, pourtant. Moi, j'ai complètement oublié le rendez-vous.", "Pero trabajaste bien esta semana. Yo olvidé por completo la cita."]
    ],
    fijate: "Fíjate: prudemment, couramment, heureusement, complètement; as bien travaillé (entre auxiliar y participio)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y colocar",
      idea: "Caso general: femenino + -ment: lente → lentement, sérieuse → sérieusement, heureuse → heureusement, précise → précisément. Adjetivo acabado en vocal: masculino + -ment: vrai → vraiment, poli → poliment, absolu → absolument. -ant → -amment (courant → couramment, suffisant → suffisamment); -ent → -emment (prudent → prudemment, évident → évidemment, patient → patiemment). Especiales: bon → bien, mauvais → mal, gentil → gentiment, bref → brièvement, énorme → énormément. Posición: después del verbo (j'arrive toujours à l'heure); en tiempo compuesto, los cortos van entre auxiliar y participio (j'ai bien compris).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["lentement · doucement · activement", "despacio · suavemente · activamente", "femenino + -ment"],
        ["sérieusement · heureusement · Heureusement", "en serio · afortunadamente", "femenino + -ment"],
        ["précisément · complètement", "precisamente · completamente", "femenino + -ment"],
        ["vraiment · poliment · absolument", "realmente · cortésmente · absolutamente", "vocal + -ment"],
        ["couramment · suffisamment", "con fluidez · suficientemente", "-ant → -amment"],
        ["prudemment · évidemment · patiemment", "con prudencia · evidentemente · con paciencia", "-ent → -emment"],
        ["bien · mal", "bien · mal", "bon, mauvais"],
        ["gentiment · brièvement · énormément", "amablemente · brevemente · enormemente", "especiales"],
        ["j'ai bien compris · bien compris", "entendí bien", "entre auxiliar y participio"],
        ["J'arrive toujours à l'heure.", "Siempre llego a tiempo.", "después del verbo"]
      ]],
      ej: [["Parle plus lentement, s'il te plaît.", "Habla más despacio, por favor."], ["Elle parle couramment anglais.", "Habla inglés con fluidez."], ["J'ai bien compris.", "Entendí bien."], ["Heureusement, il ne pleut pas.", "Afortunadamente, no llueve."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Conduis prudentement.", "Conduis prudemment.", "-ent → -emment."], ["Je toujours arrive en retard.", "J'arrive toujours en retard.", "El adverbio va detrás del verbo."], ["J'ai compris bien la consigne.", "J'ai bien compris la consigne.", "Adverbio corto entre auxiliar y participio."]] }
  ],
  ejemplos: [
    { sit: "«con paciencia» (patient)", resp: "patiemment", pasos: ["-ent → -emment."], porque: "Regla." },
    { sit: "«en serio» (sérieux)", resp: "sérieusement", pasos: ["Femenino sérieuse + -ment."], porque: "Regla general." },
    { sit: "«Trabajaste bien.»", resp: "Tu as bien travaillé.", pasos: ["bien entre as y travaillé."], porque: "Posición." }
  ],
  comprueba: [
    { q: "El caso general se forma con…", o: ["el femenino + -ment", "el masculino + -ment"], a: 0, b: "gr", porque: "lente → lentement." },
    { q: "Prudent da…", o: ["prudemment", "prudentement"], a: 0, b: "gr", porque: "-ent → -emment." },
    { q: "En tiempo compuesto, bien va…", o: ["entre auxiliar y participio", "al final"], a: 0, b: "gr", porque: "j'ai bien compris." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ad-forme"], k: "sort", ask: "¿Qué regla sigue?", q: "Clasifica.", cats: ["femenino + -ment", "masculino en vocal + -ment", "-ant → -amment", "-ent → -emment"], items: [["doucement", 0], ["activement", 0], ["poliment", 1], ["absolument", 1], ["couramment", 2], ["suffisamment", 2], ["évidemment", 3], ["prudemment", 3]], pista: "Mira el adjetivo de base.", why: "Formación." },
    { fase: "guiada", c: ["b1ad-forme"], k: "choice", ask: "«Habla francés con fluidez.»", q: "«Il parle ___ le français.»", o: ["couramment", "courament", "courantement"], a: 0, pista: "courant → -amment.", why: "<b>couramment</b>." },
    { fase: "guiada", c: ["b1ad-forme"], k: "choice", ask: "«Afortunadamente, la clase se canceló.»", q: "«___, le cours a été annulé : je n'avais pas fini mon exposé !»", o: ["Heureusement", "Heureux"], a: 0, pista: "Adverbio.", why: "<b>Heureusement</b>." },
    { fase: "indep", c: ["b1ad-place"], k: "choice", ask: "«¡Trabajaste bien esta semana!»", q: "«Tu as ___ travaillé cette semaine !»", o: ["bien", "bon"], a: 0, why: "<b>bien</b>." },
    { fase: "indep", c: ["b1ad-forme"], k: "fill", ask: "Forma el adverbio de précis.", q: "Réponds ___ à la question.", acc: ["précisément"], why: "<b>précisément</b>." },
    { fase: "indep", c: ["b1ad-forme"], k: "fill", ask: "Forma el adverbio de patient.", q: "Elle a attendu ___ son tour.", acc: ["patiemment"], why: "<b>patiemment</b>." },
    { fase: "aplica", c: ["b1ad-forme"], k: "fill", ask: "Forma el adverbio de sérieux.", q: "Il travaille ___ à son mémoire.", acc: ["sérieusement"], why: "<b>sérieusement</b>." },
    { fase: "aplica", c: ["b1ad-forme"], k: "spot", ask: "Encuentra el error.", s: "Conduis [prudentement] , la route est dangereuse .", fix: "prudemment", why: "<b>prudemment</b>." },
    { fase: "aplica", c: ["b1ad-place"], k: "spot", ask: "Encuentra el error.", s: "Oui , madame , j'ai [compris bien] la consigne .", fix: "bien compris", why: "<b>j'ai bien compris</b>." },
    { fase: "dominio", c: ["b1ad-forme"], k: "match", ask: "Une cada adjetivo con su adverbio.", q: "Adjetivo → adverbio", pairs: [["bon", "bien"], ["mauvais", "mal"], ["gentil", "gentiment"], ["bref", "brièvement"], ["énorme", "énormément"]], why: "Especiales." },
    { fase: "dominio", c: ["b1ad-place"], k: "order", ask: "Ordena: «Siempre llego a tiempo».", tokens: ["J'arrive", "toujours", "à l'heure."], why: "<b>J'arrive toujours à l'heure.</b>" },
    { fase: "dominio", c: ["b1ad-forme", "b1ad-place"], k: "listen", say: "Évidemment, j'ai bien compris la consigne du professeur.", acc: ["Évidemment, j'ai bien compris la consigne du professeur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Évidemment, j'ai bien compris la consigne du professeur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-periphrases"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Venir de, être en train de, être sur le point de",
  objetivo: {
    que: "Vas a situar una acción justo antes, durante o justo después con venir de, être en train de, aller y être sur le point de.",
    corto: "Je viens d'arriver. · Je suis en train de lire.",
    podras: ["Decir que algo acaba de pasar: venir de + infinitivo.", "Decir que algo está pasando: être en train de + infinitivo.", "Decir que algo va a pasar enseguida: être sur le point de + infinitivo; y pasarlo al imparfait en un relato."],
    iconos: ["ic2/reloj-arena", "ic2/rayo", "ic2/libro"],
    previos: ["Venir de (A2, lección 25) y el futuro próximo (A2, lección 4)."],
    capacidad: "Ahora sitúas las acciones con precisión en el tiempo."
  },
  requiere: R("vd-forme", "fu-proche"), recupera: ["vd-forme"],
  conceptos: {
    "b1pe-trois": { n: "venir de (acaba de), être en train de (está), être sur le point de (a punto de)", b: "gr" },
    "b1pe-passe": { n: "en un relato: je venais de…, j'étais en train de…, j'étais sur le point de…", b: "gr" }
  },
  video: {
    titulo: "Antes, durante, después", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "venir de · en train de", seg: [
        { es: "Hola. Tres expresiones para situar una acción en el tiempo." } ] },
      { v: "frase", filas: [
          { nota: "acaba de", p: 1, partes: [["Je viens d'arriver.", "-", 1]] },
          { nota: "está", p: 2, partes: [["Il est en train de travailler.", "-", 2]] },
          { nota: "a punto de", p: 3, partes: [["Le film est sur le point de commencer.", "-", 3]] } ], seg: [
        { fr: "Je viens d'arriver.", p: 1 }, { fr: "Il est en train de travailler.", p: 2 }, { fr: "Le film est sur le point de commencer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No la llames ahora, acaba de llegar.»", o: ["Ne l'appelle pas maintenant, elle vient d'arriver.", "Ne l'appelle pas maintenant, elle termine d'arriver."], a: 0,
        bien: "¡Sí! «Acabar de» = venir de.", mal: "«Acabar de» se dice venir de.",
        seg: [ { es: "Pausa. Acaba de llegar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je viens de", "je suis en train de", "je vais", "je suis sur le point de", "je venais de"], seg: [
        { es: "En un relato, pásalas al imparfait.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Mil cosas a la vez", img: "bg-universidad", yo: "camila",
    escena: "Hugo llama a Camila en mal momento.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as tes résultats ?", "¿Tienes tus resultados?"],
      ["camila", "Oui, je viens de recevoir mes notes : j'ai tout réussi ! Mais pas maintenant, je suis en train de préparer mon exposé.", "¡Sí, acabo de recibir mis notas: aprobé todo! Pero ahora no, estoy preparando mi exposición."],
      ["hugo", "Dépêche-toi, le cours est sur le point de commencer !", "¡Apúrate, la clase está a punto de empezar!"],
      ["camila", "Je venais de sortir quand le téléphone a sonné. Mes parents viennent d'arriver à l'aéroport de Cúcuta.", "Acababa de salir cuando sonó el teléfono. Mis papás acaban de llegar al aeropuerto de Cúcuta."]
    ],
    fijate: "Fíjate: je viens de recevoir, je suis en train de préparer, est sur le point de commencer, je venais de sortir, viennent d'arriver."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres perífrasis",
      idea: "Acaba de pasar: venir de + infinitivo (je viens de manger). Está pasando: être en train de + infinitivo (je suis en train de lire). Va a pasar: aller + infinitivo; enseguida: être sur le point de + infinitivo. En un relato en pasado, pon venir o être en imparfait: je venais de…, j'étais en train de…, nous étions sur le point de…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Momento"], [
        ["je viens de sortir · viens de", "acabo de salir", "pasado reciente"],
        ["Elle vient de téléphoner. · vient", "Acaba de llamar.", "pasado reciente"],
        ["ils viennent d'arriver · viennent d'", "acaban de llegar", "pasado reciente"],
        ["je suis en train de sortir", "estoy saliendo", "en curso"],
        ["je suis en train de préparer · suis en train de préparer", "estoy preparando", "en curso"],
        ["en train de lire", "leyendo", "en curso"],
        ["je suis sur le point de sortir · est sur le point de", "estoy a punto de salir", "inminente"],
        ["je vais sortir", "voy a salir", "futuro próximo"],
        ["je venais de sortir · venais de", "acababa de salir", "relato"],
        ["j'étais en train de dîner", "estaba cenando", "relato"],
        ["nous étions sur le point de partir · étions sur le point de", "estábamos a punto de irnos", "relato"]
      ]],
      ej: [["Je viens d'arriver.", "Acabo de llegar."], ["Il est en train de travailler.", "Está trabajando."], ["Le film est sur le point de commencer.", "La película está a punto de empezar."], ["Je venais de sortir quand il a appelé.", "Acababa de salir cuando llamó."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je termine d'arriver.", "Je viens d'arriver.", "«Acabar de» = venir de."], ["Je suis lisant un roman.", "Je suis en train de lire un roman.", "«Estar + gerundio» = être en train de."], ["Je viens de sortir quand il a appelé. (relato)", "Je venais de sortir quand il a appelé.", "En un relato: imparfait."]] }
  ],
  ejemplos: [
    { sit: "«Acabo de entregar mi trabajo.»", resp: "Je viens de rendre mon mémoire.", pasos: ["venir de + infinitivo."], porque: "Pasado reciente." },
    { sit: "«Estaba cenando cuando llamaste.»", resp: "J'étais en train de dîner quand tu as appelé.", pasos: ["être en imparfait + en train de."], porque: "Relato." },
    { sit: "«El tren está a punto de salir.»", resp: "Le train est sur le point de partir.", pasos: ["être sur le point de."], porque: "Inminente." }
  ],
  comprueba: [
    { q: "«Acabo de llegar» se dice…", o: ["Je viens d'arriver.", "Je termine d'arriver."], a: 0, b: "gr", porque: "venir de." },
    { q: "«Estoy leyendo» se dice…", o: ["Je suis en train de lire.", "Je suis lisant."], a: 0, b: "gr", porque: "en train de." },
    { q: "En un relato, «acababa de» se dice…", o: ["je venais de", "je viens de"], a: 0, b: "gr", porque: "Imparfait." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pe-trois"], k: "sort", ask: "¿Pasado reciente, en curso o a punto de ocurrir?", q: "Clasifica.", cats: ["pasado reciente", "acción en curso", "va a ocurrir"], items: [["Elle vient de téléphoner.", 0], ["On vient de finir le TP.", 0], ["Il est en train de réviser.", 1], ["Nous sommes en train de manger.", 1], ["Je suis en train d'écrire.", 1], ["Le train est sur le point de partir.", 2], ["Je vais m'inscrire demain.", 2], ["Elles sont sur le point de signer.", 2]], pista: "venir de / en train de / sur le point de.", why: "Momentos." },
    { fase: "guiada", c: ["b1pe-trois"], k: "choice", ask: "«La clase está a punto de empezar.»", q: "«Le cours ___ commencer : dépêche-toi !»", o: ["est sur le point de", "vient de", "est en train de"], a: 0, pista: "Inminente.", why: "<b>est sur le point de</b>." },
    { fase: "guiada", c: ["b1pe-trois"], k: "choice", ask: "«Ahora no, estoy preparando mi exposición.»", q: "«Pas maintenant, je ___ mon exposé.»", o: ["suis en train de préparer", "viens de préparer"], a: 0, pista: "En curso.", why: "<b>suis en train de préparer</b>." },
    { fase: "indep", c: ["b1pe-passe"], k: "choice", ask: "«Acababa de salir cuando sonó el teléfono.»", q: "«Je ___ sortir quand le téléphone a sonné.»", o: ["venais de", "viens de"], a: 0, why: "<b>venais de</b>: relato." },
    { fase: "indep", c: ["b1pe-trois"], k: "fill", ask: "venir de, con je.", q: "Je ___ recevoir mes notes : j'ai tout réussi !", acc: ["viens de"], why: "<b>viens de</b>." },
    { fase: "indep", c: ["b1pe-trois"], k: "fill", ask: "venir de, con ils.", q: "Ils ___ arriver à l'aéroport de Cúcuta.", acc: ["viennent d'"], why: "<b>viennent d'</b>arriver." },
    { fase: "aplica", c: ["b1pe-passe"], k: "fill", ask: "être sur le point de, con nous, en imparfait.", q: "Nous ___ partir quand il a commencé à pleuvoir.", acc: ["étions sur le point de"], why: "<b>étions sur le point de</b>." },
    { fase: "aplica", c: ["b1pe-trois"], k: "spot", ask: "Encuentra el error.", s: "Ne l'appelle pas maintenant , elle [termine] d'arriver .", fix: "vient", why: "<b>elle vient d'arriver</b>." },
    { fase: "aplica", c: ["b1pe-trois"], k: "spot", ask: "Encuentra el error.", s: "— Qu'est-ce que tu fais ? — Je suis [lisant] un roman de Camus .", fix: "en train de lire", why: "<b>en train de lire</b>." },
    { fase: "dominio", c: ["b1pe-trois", "b1pe-passe"], k: "match", ask: "Une cada frase con su traducción.", q: "Español → francés", pairs: [["acabo de salir", "je viens de sortir"], ["estoy saliendo", "je suis en train de sortir"], ["estoy a punto de salir", "je suis sur le point de sortir"], ["voy a salir", "je vais sortir"], ["acababa de salir", "je venais de sortir"]], why: "Perífrasis." },
    { fase: "dominio", c: ["b1pe-passe"], k: "order", ask: "Ordena: «Estaba cenando cuando llamaste».", tokens: ["J'étais en train de dîner", "quand", "tu as appelé."], why: "<b>J'étais en train de dîner quand tu as appelé.</b>" },
    { fase: "dominio", c: ["b1pe-trois", "b1pe-passe"], k: "listen", say: "Je viens de rendre mon mémoire à ma directrice.", acc: ["Je viens de rendre mon mémoire à ma directrice."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je viens de rendre mon mémoire à ma directrice.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Cúcuta", "Camus"], previo: [] }
};

E["b11-recit-chronologie"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Raconter : les articulateurs chronologiques",
  objetivo: {
    que: "Vas a ordenar un relato con d'abord, ensuite, puis, enfin, finalement, le lendemain, au bout de…",
    corto: "D'abord… ensuite… enfin.",
    podras: ["Empezar, seguir y terminar un relato con los articuladores adecuados.", "Distinguir enfin (por fin, por último) de finalement (al final).", "Usar avant de + infinitivo y après + infinitivo pasado: après avoir mangé."],
    iconos: ["ic2/pergamino", "ic2/reloj-arena", "ic2/lapiz"],
    previos: ["Los marcadores del pasado (A2, lección 21) y contar el fin de semana (A2, lección 22)."],
    capacidad: "Ahora tus relatos se siguen sin perderse."
  },
  requiere: R("mp-mots", "rw-conn"), recupera: ["rw-conn"],
  conceptos: {
    "b1rc-ordre": { n: "d'abord, ensuite, puis, enfin, finalement; le lendemain, la veille, au bout de, tout à coup", b: "gr" },
    "b1rc-avapres": { n: "avant de + infinitivo; après avoir / être + participio", b: "gr" }
  },
  video: {
    titulo: "Ordenar el relato", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "d'abord · ensuite · enfin", seg: [
        { es: "Hola. Una buena historia tiene principio, medio y final." } ] },
      { v: "frase", filas: [
          { nota: "inicio", p: 1, partes: [["D'abord, j'ai pris le bus.", "-", 1]] },
          { nota: "después", p: 2, partes: [["Après avoir dîné, on est sortis.", "-", 2]] },
          { nota: "al día siguiente", p: 3, partes: [["Le lendemain, il a neigé.", "-", 3]] } ], seg: [
        { fr: "D'abord, j'ai pris le bus.", p: 1 }, { fr: "Après avoir dîné, on est sortis.", p: 2 }, { fr: "Le lendemain, il a neigé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Antes de la clase, tomé un café.»", o: ["Avant le cours, j'ai pris un café.", "Avant de le cours, j'ai pris un café."], a: 0,
        bien: "¡Sí! Avant + sustantivo, sin de.", mal: "Avant de solo va con infinitivo.",
        seg: [ { es: "Pausa. Antes de la clase." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["d'abord", "ensuite", "puis", "enfin", "finalement", "le lendemain", "au bout de"], seg: [
        { es: "Después de cenar: après avoir dîné.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen oral", img: "bg-biblioteca", yo: "camila",
    escena: "Camila cuenta su semana de examen a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "D'abord, j'ai lu le texte, puis j'ai répondu aux questions.", "Primero leí el texto, luego respondí las preguntas."],
      ["hugo", "Et les résultats ?", "¿Y los resultados?"],
      ["camila", "Le 14, j'ai passé l'oral ; le lendemain, j'ai reçu les résultats. Après avoir déjeuné, nous sommes allés à la bibliothèque.", "El 14 presenté el oral; al día siguiente recibí los resultados. Después de almorzar, fuimos a la biblioteca."],
      ["hugo", "Mon frère a cherché un stage pendant six mois. Enfin, il en a trouvé un ! Avant de partir, il a vérifié son passeport.", "Mi hermano buscó una práctica durante seis meses. ¡Por fin encontró una! Antes de irse, revisó su pasaporte."]
    ],
    fijate: "Fíjate: d'abord, puis, le lendemain, après avoir déjeuné, enfin, avant de partir."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los articuladores",
      idea: "Empieza con d'abord, tout d'abord o au début. Sigue con ensuite, puis, après, un peu plus tard. Termina con enfin (por fin / por último) o finalement (al final, a fin de cuentas). Tiempo: le lendemain (al día siguiente), la veille (la víspera), au bout de (al cabo de), tout à coup (de repente), pendant ce temps (mientras tanto). Avant de + infinitivo: avant de partir; avant + sustantivo: avant le cours. Après + infinitivo pasado: après avoir mangé, après être parti(e)s.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Momento"], [
        ["d'abord · au début · tout d'abord", "primero · al principio", "inicio"],
        ["ensuite · puis · un peu plus tard", "luego · después · un poco más tarde", "continuación"],
        ["enfin · Enfin", "por fin · por último", "final"],
        ["finalement", "al final", "final"],
        ["le lendemain", "al día siguiente", "tiempo"],
        ["la veille", "la víspera", "tiempo"],
        ["au bout de vingt minutes · au bout de", "al cabo de veinte minutos", "tiempo"],
        ["tout à coup · pendant ce temps", "de repente · mientras tanto", "tiempo"],
        ["Avant de partir · Avant de", "Antes de irte", "+ infinitivo"],
        ["Avant le cours · Avant", "Antes de la clase", "+ sustantivo"],
        ["Après avoir déjeuné · Après", "Después de almorzar", "+ avoir + participio"],
        ["Après être arrivés · être", "Después de llegar", "+ être + participio"]
      ]],
      ej: [["D'abord, j'ai pris le bus.", "Primero tomé el bus."], ["Le lendemain, il a neigé.", "Al día siguiente nevó."], ["Tout à coup, j'ai entendu un cri.", "De repente oí un grito."], ["Après avoir dîné, on est sortis.", "Después de cenar, salimos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Après de manger, on est sortis.", "Après avoir mangé, on est sortis.", "après + infinitivo pasado."], ["Avant de le cours, j'ai pris un café.", "Avant le cours, j'ai pris un café.", "Avant + sustantivo, sin de."], ["En bout de vingt minutes, il est parti.", "Au bout de vingt minutes, il est parti.", "«Al cabo de» = au bout de."]] }
  ],
  ejemplos: [
    { sit: "«Después de almorzar, fuimos a la biblioteca.»", resp: "Après avoir déjeuné, nous sommes allés à la bibliothèque.", pasos: ["après + avoir + participio."], porque: "Infinitivo pasado." },
    { sit: "«Antes de salir, apagué la luz.»", resp: "Avant de sortir, j'ai éteint la lumière.", pasos: ["avant de + infinitivo."], porque: "Antes de." },
    { sit: "«Al final, nos quedamos en casa.»", resp: "Finalement, on est restés à la maison.", pasos: ["finalement: al final."], porque: "Desenlace." }
  ],
  comprueba: [
    { q: "«Al día siguiente» se dice…", o: ["le lendemain", "la veille"], a: 0, b: "gr", porque: "la veille = la víspera." },
    { q: "«Después de comer» se dice…", o: ["après avoir mangé", "après de manger"], a: 0, b: "gr", porque: "Infinitivo pasado." },
    { q: "«Antes de la clase» se dice…", o: ["avant le cours", "avant de le cours"], a: 0, b: "gr", porque: "Avant + sustantivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rc-ordre"], k: "sort", ask: "¿Inicio, continuación o final?", q: "Clasifica.", cats: ["inicio", "continuación", "final"], items: [["d'abord", 0], ["au début", 0], ["tout d'abord", 0], ["ensuite", 1], ["puis", 1], ["un peu plus tard", 1], ["enfin", 2], ["finalement", 2]], pista: "Principio, medio, fin.", why: "Orden." },
    { fase: "guiada", c: ["b1rc-avapres"], k: "choice", ask: "«Después de almorzar, fuimos a la biblioteca.»", q: "«___ avoir déjeuné, nous sommes allés à la bibliothèque.»", o: ["Après", "Avant de", "Après de"], a: 0, pista: "Después.", why: "<b>Après</b> avoir déjeuné." },
    { fase: "guiada", c: ["b1rc-avapres"], k: "choice", ask: "«Antes de salir, revisa tu pasaporte.»", q: "«___ partir, vérifie que tu as ton passeport.»", o: ["Avant de", "Avant", "Après"], a: 0, pista: "+ infinitivo.", why: "<b>Avant de</b> partir." },
    { fase: "indep", c: ["b1rc-ordre"], k: "choice", ask: "«Pensábamos ir a la playa, pero llovió: al final nos quedamos en casa.»", q: "«On pensait aller à la plage, mais il a plu : ___, on est restés à la maison.»", o: ["finalement", "d'abord", "ensuite"], a: 0, why: "<b>finalement</b>." },
    { fase: "indep", c: ["b1rc-ordre"], k: "fill", ask: "Escribe «por fin».", q: "Il a cherché un stage pendant six mois. ___, il en a trouvé un !", acc: ["Enfin", "enfin"], why: "<b>Enfin</b>." },
    { fase: "indep", c: ["b1rc-ordre"], k: "fill", ask: "Escribe «al día siguiente».", q: "Le 14, j'ai passé l'oral ; ___, j'ai reçu les résultats.", acc: ["le lendemain", "Le lendemain"], why: "<b>le lendemain</b>." },
    { fase: "aplica", c: ["b1rc-avapres"], k: "fill", ask: "Escribe el auxiliar en infinitivo.", q: "Après ___ arrivés à Lyon, nous avons cherché l'hôtel.", acc: ["être"], why: "<b>après être arrivés</b>." },
    { fase: "aplica", c: ["b1rc-avapres"], k: "spot", ask: "Encuentra el error.", s: "[Avant de] le cours , j'ai pris un café avec Laura .", fix: "Avant", why: "<b>Avant le cours</b>." },
    { fase: "aplica", c: ["b1rc-ordre"], k: "spot", ask: "Encuentra el error.", s: "Il a attendu le bus ; [en bout de] vingt minutes , il est parti à pied .", fix: "au bout de", why: "<b>au bout de</b>." },
    { fase: "dominio", c: ["b1rc-ordre"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["al cabo de", "au bout de"], ["de repente", "tout à coup"], ["la víspera", "la veille"], ["al día siguiente", "le lendemain"], ["mientras tanto", "pendant ce temps"]], why: "Tiempo del relato." },
    { fase: "dominio", c: ["b1rc-avapres", "b1rc-ordre"], k: "order", ask: "Ordena: «Antes de salir, apagué la luz».", tokens: ["Avant de sortir,", "j'ai éteint", "la lumière."], why: "<b>Avant de sortir, j'ai éteint la lumière.</b>" },
    { fase: "dominio", c: ["b1rc-ordre", "b1rc-avapres"], k: "listen", say: "D'abord, j'ai lu le texte, puis j'ai répondu aux questions.", acc: ["D'abord, j'ai lu le texte, puis j'ai répondu aux questions."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>D'abord, j'ai lu le texte, puis j'ai répondu aux questions.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura", "Lyon"], previo: [] }
};

E["b11-etudes-travail"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Études et monde du travail : stage, CV et entretien",
  objetivo: {
    que: "Vas a hablar de tus estudios y del trabajo: licence, stage, CV, entretien, sin caer en falsos amigos.",
    corto: "J'ai réussi mon examen. · Je fais un stage.",
    podras: ["Usar el vocabulario de estudios: la licence, le master, un partiel, le mémoire, une bourse.", "No confundir passer (presentar) y réussir (aprobar) un examen.", "Usar el vocabulario del trabajo: un stage, un CV, une lettre de motivation, un entretien d'embauche, postuler à."],
    iconos: ["ic2/birrete", "ic2/laptop", "ic2/medalla"],
    previos: ["El horario y el contrato (A2, lección 40)."],
    capacidad: "Ahora puedes presentarte a una práctica en Francia."
  },
  requiere: R("et-horaire", "et-contrat"), recupera: ["et-contrat"],
  conceptos: {
    "b1et-etudes": { n: "la licence, le master, un partiel, le mémoire, une bourse; passer / réussir / rater un examen", b: "voc" },
    "b1et-travail": { n: "un stage, un CV, une lettre de motivation, un entretien d'embauche, postuler à, travailler comme", b: "voc" }
  },
  video: {
    titulo: "Estudios y trabajo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "stage · CV · entretien", seg: [
        { es: "Hola. Las palabras para tus estudios y tu primer trabajo en Francia." } ] },
      { v: "dos",
        a: { tag: "presentar", fr: "Je passe mon examen.", es: "lo presento" },
        b: { tag: "aprobar", fr: "J'ai réussi mon examen.", es: "lo aprobé" },
        seg: [ { es: "Passer es presentar:", p: 1 }, { fr: "Je passe mon examen.", p: 1 }, { es: "Réussir es aprobar:", p: 2 }, { fr: "J'ai réussi mon examen.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy en tercer año de la carrera de lenguas.»", o: ["Je suis en troisième année de licence de langues.", "Je suis en troisième année de carrière de langues."], a: 0,
        bien: "¡Sí! Carrera universitaria = licence.", mal: "Carrière es la trayectoria profesional.",
        seg: [ { es: "Pausa. La carrera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la licence", "un partiel", "le mémoire", "un stage", "un CV", "un entretien"], seg: [
        { es: "Passer es presentar; réussir es aprobar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La práctica en Lyon", img: "bg-universidad", yo: "camila",
    escena: "Camila prepara su postulación con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Demain, je passe mon examen de phonétique : je suis très stressée !", "Mañana presento mi examen de fonética: ¡estoy muy estresada!"],
      ["hugo", "Courage ! Moi, j'ai eu 16 sur 20 : j'ai réussi mon partiel. Et ton stage ?", "¡Ánimo! Yo saqué 16 sobre 20: aprobé mi parcial. ¿Y tu práctica?"],
      ["camila", "Cet été, je vais faire un stage de deux mois dans une école à Lyon. Je voudrais postuler au poste d'assistant de langue.", "Este verano voy a hacer una práctica de dos meses en un colegio en Lyon. Quisiera postularme al cargo de asistente de idioma."],
      ["hugo", "Il faut envoyer un CV et une lettre de motivation. Moi, j'ai un entretien d'embauche vendredi !", "Hay que enviar una hoja de vida y una carta de motivación. ¡Yo tengo una entrevista de trabajo el viernes!"]
    ],
    fijate: "Fíjate: je passe mon examen (presento), j'ai réussi (aprobé), un stage, postuler au poste, un CV, une lettre de motivation, un entretien d'embauche."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Estudios y trabajo",
      idea: "Estudios: la licence (pregrado), le master, un partiel (parcial), une note, le mémoire (tesis de grado), une bourse (beca). Examen: passer = presentar; réussir = aprobar; rater = perder. Trabajo: un stage (práctica), un poste (cargo), un CV, une lettre de motivation, un entretien d'embauche, un CDI (contrato indefinido), le salaire, un collègue. Postularse = postuler à; trabajar como = travailler comme; je suis professeur (sin artículo).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la licence · le master", es: "el pregrado · la maestría" },
        { fr: "un partiel · une note", es: "un parcial · una calificación" },
        { fr: "le mémoire · une bourse", es: "la tesis de grado · una beca" },
        { fr: "passer un examen · je passe · passe", es: "presentar un examen · presento" },
        { fr: "réussir · j'ai réussi · réussi", es: "aprobar · aprobé" },
        { fr: "rater un examen", es: "perder un examen" },
        { fr: "un stage", es: "una práctica profesional" },
        { fr: "un poste · postuler à · postuler", es: "un cargo · postularse a" },
        { fr: "un CV · une lettre de motivation · motivation", es: "una hoja de vida · una carta de motivación" },
        { fr: "un entretien d'embauche · entretien", es: "una entrevista de trabajo" },
        { fr: "un CDI · le salaire · un collègue", es: "un contrato indefinido · el salario · un colega" },
        { fr: "travailler comme · comme", es: "trabajar como" }
      ],
      ej: [["Je fais un stage dans une école.", "Hago una práctica en un colegio."], ["J'ai réussi mon examen.", "Aprobé mi examen."], ["Je voudrais postuler à ce poste.", "Quisiera postularme a este cargo."], ["Je suis en deuxième année de licence.", "Estoy en segundo año de pregrado."]],
      clave: "Passer = presentar; réussir = aprobar; carrière = trayectoria, no «carrera»." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai passé mon examen. (= lo aprobé)", "J'ai réussi mon examen.", "Passer = presentar."], ["ma carrière de langues étrangères", "ma licence de langues étrangères", "Carrière = trayectoria profesional."], ["J'ai approuvé tous mes examens.", "J'ai réussi tous mes examens.", "Aprobar = réussir."]] }
  ],
  ejemplos: [
    { sit: "«Mañana presento mi examen.»", resp: "Demain, je passe mon examen.", pasos: ["passer = presentar."], porque: "Falso amigo." },
    { sit: "«Aprobé mi parcial.»", resp: "J'ai réussi mon partiel.", pasos: ["réussir = aprobar."], porque: "Falso amigo." },
    { sit: "«Trabaja como profesor.»", resp: "Il travaille comme professeur.", pasos: ["travailler comme, sin artículo."], porque: "Profesión." }
  ],
  comprueba: [
    { q: "«Aprobar un examen» se dice…", o: ["réussir un examen", "passer un examen"], a: 0, b: "voc", porque: "passer = presentar." },
    { q: "Un stage es…", o: ["una práctica profesional", "un escenario"], a: 0, b: "voc", porque: "Práctica." },
    { q: "La «carrera» universitaria se dice…", o: ["la licence", "la carrière"], a: 0, b: "voc", porque: "Falso amigo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1et-etudes", "b1et-travail"], k: "sort", ask: "¿Estudios o trabajo?", q: "Clasifica.", cats: ["Estudios", "Trabajo"], items: [["la licence", 0], ["le mémoire", 0], ["un partiel", 0], ["une bourse", 0], ["un CDI", 1], ["le salaire", 1], ["un entretien d'embauche", 1], ["un collègue", 1]], pista: "Universidad o empresa.", why: "Vocabulario." },
    { fase: "guiada", c: ["b1et-etudes"], k: "choice", ask: "«Mañana presento mi examen de fonética.»", q: "«Demain, je ___ mon examen de phonétique.»", o: ["passe", "réussis"], a: 0, pista: "Presentar.", why: "<b>passe</b>." },
    { fase: "guiada", c: ["b1et-etudes"], k: "choice", ask: "«Saqué 16 sobre 20: ¡aprobé mi parcial!»", q: "«J'ai eu 16 sur 20 : j'ai ___ mon partiel !»", o: ["réussi", "passé"], a: 0, pista: "Aprobar.", why: "<b>réussi</b>." },
    { fase: "indep", c: ["b1et-travail"], k: "choice", ask: "«Quisiera postularme al cargo de asistente.»", q: "«Je voudrais ___ au poste d'assistant de langue en France.»", o: ["postuler", "appliquer"], a: 0, why: "<b>postuler à</b>." },
    { fase: "indep", c: ["b1et-travail"], k: "choice", ask: "«Trabaja como profesor en un liceo.»", q: "«Il travaille ___ professeur dans un lycée de Cúcuta.»", o: ["comme", "de"], a: 0, why: "<b>comme</b>." },
    { fase: "indep", c: ["b1et-travail"], k: "fill", ask: "Escribe «práctica profesional».", q: "Cet été, je vais faire un ___ de deux mois dans une école à Lyon.", acc: ["stage"], why: "<b>stage</b>." },
    { fase: "aplica", c: ["b1et-travail"], k: "fill", ask: "Escribe «motivación».", q: "Pour ce poste, il faut envoyer un CV et une lettre de ___.", acc: ["motivation"], why: "<b>lettre de motivation</b>." },
    { fase: "aplica", c: ["b1et-travail"], k: "fill", ask: "Escribe «entrevista».", q: "J'ai un ___ d'embauche vendredi à dix heures.", acc: ["entretien"], why: "<b>entretien d'embauche</b>." },
    { fase: "aplica", c: ["b1et-etudes"], k: "spot", ask: "Encuentra el error.", s: "Je suis en troisième année de ma [carrière] de langues étrangères .", fix: "licence", why: "<b>licence</b>." },
    { fase: "dominio", c: ["b1et-etudes"], k: "spot", ask: "Encuentra el error.", s: "J'ai [approuvé] tous mes examens ce semestre .", fix: "réussi", why: "<b>réussi</b>." },
    { fase: "dominio", c: ["b1et-etudes", "b1et-travail"], k: "match", ask: "Une cada expresión con su traducción.", q: "Español → francés", pairs: [["aprobar", "réussir"], ["presentar un examen", "passer un examen"], ["práctica profesional", "un stage"], ["tesis de grado", "le mémoire"], ["hoja de vida", "un CV"]], why: "Vocabulario." },
    { fase: "dominio", c: ["b1et-etudes", "b1et-travail"], k: "listen", say: "J'ai obtenu une bourse pour faire mon master en France.", acc: ["J'ai obtenu une bourse pour faire mon master en France."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai obtenu une bourse pour faire mon master en France.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Cúcuta"], previo: [] }
};

/* ================================ B1.1·6 · Contar el pasado con precisión ================================ */
E["b11-imparfait-habitude"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'imparfait : habitudes et descriptions",
  objetivo: {
    que: "Vas a describir cómo eran las cosas y lo que se hacía por costumbre con el imparfait.",
    corto: "Quand j'étais petit, je jouais au foot tous les samedis.",
    podras: ["Formar el imparfait con la raíz de nous: nous finissons → je finissais.", "Usar el único irregular: être → j'étais; y los verbos en -ger / -cer.", "Reconocer los marcadores de costumbre: d'habitude, chaque été, autrefois."],
    iconos: ["ic2/reloj-arena", "ic2/libro", "ic2/corazon"],
    previos: ["El imparfait de las costumbres (A2, lección 23) y passé composé o imparfait (lección 1)."],
    capacidad: "Ahora describes tu infancia con detalle."
  },
  requiere: R("ih-forme", "ih-marq", "b1pi-decor"), recupera: ["ih-forme"],
  conceptos: {
    "b1ih-forme": { n: "raíz de nous + -ais, -ais, -ait, -ions, -iez, -aient; être → j'étais; je mangeais, je commençais", b: "gr" },
    "b1ih-usage": { n: "descripción, estado y costumbre: d'habitude, chaque été, autrefois, à l'époque", b: "gr" }
  },
  video: {
    titulo: "Cómo era antes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "j'étais · je jouais", seg: [
        { es: "Hola. Para contar cómo era tu vida antes, usa el imparfait." } ] },
      { v: "frase", filas: [
          { nota: "nous faisons", p: 1, partes: [["nous faisions", "-", 1]] },
          { nota: "estado", p: 2, partes: [["La maison était grande.", "-", 2]] },
          { nota: "costumbre", p: 3, partes: [["Chaque été, nous allions chez nos grands-parents.", "-", 3]] } ], seg: [
        { fr: "nous faisions", p: 1 }, { fr: "La maison était grande.", p: 2 }, { fr: "Chaque été, nous allions chez nos grands-parents.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando era niña, vivía en Lyon.»", o: ["Quand j'étais petite, j'habitais à Lyon.", "Quand j'ai été petite, j'ai habité à Lyon."], a: 0,
        bien: "¡Sí! Estado del pasado: imparfait.", mal: "Estado y hábito: imparfait.",
        seg: [ { es: "Pausa. Cuando era niña." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'étais", "j'avais", "j'allais", "je voyais", "je buvais"], seg: [
        { es: "Raíz de nous, y être es el único irregular.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La infancia", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo recuerdan su infancia.",
    pj: PJ,
    lineas: [
      ["camila", "Quand j'étais enfant, je passais mes vacances à la campagne. La maison était grande et il y avait un jardin.", "Cuando era niña, pasaba mis vacaciones en el campo. La casa era grande y había un jardín."],
      ["hugo", "Moi, chaque été, nous allions chez nos grands-parents. À l'époque, mon père travaillait en usine.", "Yo, cada verano, íbamos a casa de mis abuelos. En esa época, mi papá trabajaba en una fábrica."],
      ["camila", "Tous les dimanches, on mangeait chez ma tante. Nous commencions à huit heures tous les matins à l'école.", "Todos los domingos comíamos en casa de mi tía. Empezábamos a las ocho todas las mañanas en el colegio."],
      ["hugo", "Autrefois, mon grand-père fumait beaucoup, mais il a arrêté. Avant, il y avait moins de voitures.", "Antes, mi abuelo fumaba mucho, pero dejó. Antes había menos carros."]
    ],
    fijate: "Fíjate: étais, passais, était, il y avait (descripción); allions, travaillait, mangeait, commencions, fumait (costumbre)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar el imparfait",
      idea: "Raíz de nous en presente sin -ons + -ais, -ais, -ait, -ions, -iez, -aient: nous finissons → je finissais, nous faisons → nous faisions. Único irregular: être → j'étais. Verbos en -ger y -cer conservan el sonido: je mangeais, nous commencions (pero je commençais). Usos: descripción y estado (il faisait froid, elle avait les cheveux longs) y costumbre (d'habitude, souvent, tous les jours, le dimanche, chaque été, autrefois, à l'époque).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["j'étais · j'avais · j'allais", "era / estaba · tenía · iba", "irregular / base"],
        ["je voyais · je buvais", "veía · bebía", "nous voyons, buvons"],
        ["faisions", "hacíamos", "nous faisons"],
        ["travaillait", "trabajaba", "costumbre"],
        ["commencions", "empezábamos", "nous commençons"],
        ["fumait", "fumaba", "costumbre"],
        ["je mangeais · on mangeait", "comía · comíamos", "-ger"],
        ["Il faisait froid. · Elle avait les cheveux longs.", "Hacía frío. · Tenía el pelo largo.", "descripción"],
        ["La rue était calme. · J'étais fatigué.", "La calle estaba tranquila. · Estaba cansado.", "estado"],
        ["Je lisais tous les soirs. · On partait chaque été.", "Leía todas las noches. · Salíamos cada verano.", "costumbre"],
        ["Il jouait souvent au tennis. · Nous dînions toujours à 20 h.", "Jugaba a menudo tenis. · Cenábamos siempre a las 8.", "costumbre"],
        ["Quand j'étais petite, j'habitais à Lyon.", "Cuando era niña, vivía en Lyon.", "estado + costumbre"]
      ]],
      ej: [["Autrefois, les gens écrivaient beaucoup de lettres.", "Antes, la gente escribía muchas cartas."], ["Chaque été, nous allions chez nos grands-parents.", "Cada verano íbamos a casa de nuestros abuelos."], ["La maison était grande et il y avait un jardin.", "La casa era grande y había un jardín."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand j'ai été petit, je suis allé à la plage tous les étés.", "Quand j'étais petit, j'allais à la plage tous les étés.", "Estado y hábito del pasado → imparfait."], ["Autrefois, mon grand-père fumé beaucoup.", "Autrefois, mon grand-père fumait beaucoup.", "Costumbre: fumait."], ["nous mangions → je mangais", "je mangeais", "Se conserva la e: mangeais."]] }
  ],
  ejemplos: [
    { sit: "«Antes había menos carros.»", resp: "Avant, il y avait moins de voitures.", pasos: ["Descripción: il y avait."], porque: "Imparfait." },
    { sit: "«Cada verano íbamos a la playa.»", resp: "Chaque été, nous allions à la plage.", pasos: ["Costumbre: allions."], porque: "chaque été." },
    { sit: "«Mi papá trabajaba en una fábrica.»", resp: "Mon père travaillait en usine.", pasos: ["Estado del pasado."], porque: "à l'époque." }
  ],
  comprueba: [
    { q: "La raíz del imparfait se toma de…", o: ["nous en presente", "el infinitivo"], a: 0, b: "gr", porque: "nous finissons → finiss-." },
    { q: "El único irregular es…", o: ["être: j'étais", "avoir: j'avais"], a: 0, b: "gr", porque: "ét-." },
    { q: "«Todos los domingos comíamos en casa de mi tía» expresa…", o: ["un hábito del pasado", "un hecho puntual"], a: 0, b: "gr", porque: "Costumbre." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ih-usage"], k: "sort", ask: "¿Descripción o hábito?", q: "Clasifica.", cats: ["Descripción / estado", "Hábito"], items: [["Il faisait froid.", 0], ["Elle avait les cheveux longs.", 0], ["La rue était calme.", 0], ["J'étais fatigué.", 0], ["Je lisais tous les soirs.", 1], ["On partait chaque été.", 1], ["Il jouait souvent au tennis.", 1], ["Nous dînions toujours à 20 h.", 1]], pista: "¿Cómo era o qué se hacía?", why: "Usos." },
    { fase: "guiada", c: ["b1ih-usage"], k: "choice", ask: "«Cuando era niña, vivía en Lyon.»", q: "«___»", o: ["Quand j'étais petite, j'habitais à Lyon.", "Quand j'ai été petite, j'ai habité à Lyon."], a: 0, pista: "Estado y costumbre.", why: "Imparfait." },
    { fase: "guiada", c: ["b1ih-forme"], k: "choice", ask: "faire, con nous, en imparfait.", q: "«nous ___»", o: ["faisions", "fesions", "faisons"], a: 0, pista: "nous faisons → fais-.", why: "<b>faisions</b>." },
    { fase: "indep", c: ["b1ih-usage"], k: "choice", es: true, ask: "«Tous les dimanches, on mangeait chez ma tante.» expresa…", q: "Elige.", o: ["Un hábito del pasado", "Un hecho puntual"], a: 0, why: "Costumbre." },
    { fase: "indep", c: ["b1ih-forme"], k: "fill", ask: "Conjuga travailler.", q: "À l'époque, mon père ___ en usine.", acc: ["travaillait"], why: "<b>travaillait</b>." },
    { fase: "indep", c: ["b1ih-forme"], k: "fill", ask: "Conjuga commencer.", q: "Nous ___ à huit heures tous les matins.", acc: ["commencions"], why: "<b>commencions</b>." },
    { fase: "aplica", c: ["b1ih-forme"], k: "match", ask: "Une cada infinitivo con su imparfait.", q: "Infinitivo → imparfait", pairs: [["être", "j'étais"], ["avoir", "j'avais"], ["aller", "j'allais"], ["voir", "je voyais"], ["boire", "je buvais"]], why: "Formas." },
    { fase: "aplica", c: ["b1ih-forme"], k: "spot", ask: "Encuentra el error.", s: "Autrefois , mon grand-père [fumé] beaucoup , mais il a arrêté .", fix: "fumait", why: "<b>fumait</b>." },
    { fase: "dominio", c: ["b1ih-usage"], k: "order", ask: "Ordena: «Antes había menos carros».", tokens: ["Avant,", "il y avait", "moins de voitures."], why: "<b>Avant, il y avait moins de voitures.</b>" },
    { fase: "dominio", c: ["b1ih-forme", "b1ih-usage"], k: "choice", ask: "«Cada verano íbamos a casa de nuestros abuelos.»", q: "«Chaque été, nous ___ chez nos grands-parents.»", o: ["allions", "sommes allés"], a: 0, why: "<b>allions</b>." },
    { fase: "dominio", c: ["b1ih-forme", "b1ih-usage"], k: "listen", say: "Quand j'étais enfant, je passais mes vacances à la campagne.", acc: ["Quand j'étais enfant, je passais mes vacances à la campagne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand j'étais enfant, je passais mes vacances à la campagne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: [] }
};

E["b11-action-interrompue"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Action en cours et action qui interrompt",
  objetivo: {
    que: "Vas a contar una acción en curso interrumpida por otra: Je dormais quand le téléphone a sonné.",
    corto: "imparfait (fondo) + passé composé (interrupción).",
    podras: ["Poner la acción de fondo en imparfait: je marchais.", "Poner la acción que irrumpe en passé composé: j'ai vu un accident.", "Insistir en la acción en curso con j'étais en train de… quand…"],
    iconos: ["ic2/rayo", "ic2/reloj-arena", "ic2/libro"],
    previos: ["Passé composé o imparfait (lección 1) y las perífrasis (lección 14)."],
    capacidad: "Ahora cuentas sorpresas e interrupciones con naturalidad."
  },
  requiere: R("b1pi-decor", "b1pi-fait", "b1pe-passe"), recupera: ["b1pi-fait"],
  conceptos: {
    "b1ai-fond": { n: "acción de fondo en curso: imparfait (je dormais, j'étais en train de…)", b: "gr" },
    "b1ai-coupe": { n: "acción que interrumpe: passé composé (quand le téléphone a sonné)", b: "gr" }
  },
  video: {
    titulo: "Interrupciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "je dormais quand…", seg: [
        { es: "Hola. Una acción larga, y otra que la corta de golpe." } ] },
      { v: "frase", filas: [
          { nota: "fondo", p: 1, partes: [["Je dormais", "imparfait", 1]] },
          { nota: "interrupción", p: 2, partes: [["quand le téléphone a sonné.", "passé composé", 2]] } ], seg: [
        { es: "Lo que estaba pasando:", p: 1 }, { fr: "Je dormais", p: 1 }, { es: "Lo que lo interrumpe:", p: 2 }, { fr: "quand le téléphone a sonné.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estaba cocinando cuando llegaste.»", o: ["Je cuisinais quand tu es arrivé.", "J'ai cuisiné quand tu arrivais."], a: 0,
        bien: "¡Sí! Fondo en imparfait, interrupción en passé composé.", mal: "Al revés: cuisinais (fondo), es arrivé (interrupción).",
        seg: [ { es: "Pausa. Estaba cocinando." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je dormais", "il conduisait", "nous dînions", "quand", "soudain"], seg: [
        { es: "Fondo largo, imparfait. Golpe corto, passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una mañana agitada", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta su mañana a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je dormais quand le téléphone a sonné. C'était ma mère !", "Estaba durmiendo cuando sonó el teléfono. ¡Era mi mamá!"],
      ["hugo", "Et après ?", "¿Y después?"],
      ["camila", "Nous prenions le petit-déjeuner quand le facteur a sonné. Puis je lisais tranquillement quand le chat a sauté sur la table !", "Estábamos desayunando cuando el cartero tocó el timbre. ¡Luego estaba leyendo tranquila cuando el gato saltó a la mesa!"],
      ["hugo", "Ha ha ! Hier, mes colocs étaient en train de discuter quand le prof est entré.", "¡Ja, ja! Ayer mis compañeros estaban conversando cuando entró el profe."]
    ],
    fijate: "Fíjate: dormais, prenions, lisais, étaient en train de (fondo); a sonné, a sauté, est entré (interrupción)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fondo e interrupción",
      idea: "Acción de fondo, en curso → imparfait: je marchais, il pleuvait. Acción que irrumpe → passé composé: j'ai vu un accident. Con être en train de en imparfait se insiste en la acción en curso: J'étais en train de cuisiner quand… Conectores: quand, lorsque, soudain, tout à coup, à ce moment-là.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Papel"], [
        ["Je dormais quand le téléphone a sonné.", "Dormía cuando sonó el teléfono.", "fondo + interrupción"],
        ["Je cuisinais quand tu es arrivé.", "Estaba cocinando cuando llegaste.", "fondo + interrupción"],
        ["nous prenions · prenions", "tomábamos", "fondo"],
        ["dormais", "dormía", "fondo"],
        ["ils étaient en train de discuter · étaient", "estaban conversando", "fondo"],
        ["il neigeait · je faisais la queue · on attendait le bus", "nevaba · hacía fila · esperábamos el bus", "fondo"],
        ["le chat a sauté · a sauté", "el gato saltó", "interrupción"],
        ["l'avion a atterri", "el avión aterrizó", "interrupción"],
        ["j'ai glissé · quelqu'un a crié · la porte s'est ouverte", "me resbalé · alguien gritó · la puerta se abrió", "interrupción"],
        ["Il conduisait quand un chat a traversé.", "Manejaba cuando un gato cruzó.", "fondo + interrupción"]
      ]],
      ej: [["Je prenais ma douche quand quelqu'un a frappé à la porte.", "Me estaba duchando cuando alguien llamó a la puerta."], ["Nous regardions un film et soudain, l'électricité a coupé.", "Veíamos una película y de repente se fue la luz."], ["Elle était en train de lire lorsque son frère est entré.", "Estaba leyendo cuando entró su hermano."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai marché dans la rue quand je voyais Paul.", "Je marchais dans la rue quand j'ai vu Paul.", "Fondo en imparfait, acción puntual en passé composé."], ["Je dormi profondément quand le téléphone a sonné.", "Je dormais profondément quand le téléphone a sonné.", "Fondo: dormais."], ["Il pleuvait quand l'avion atterrissait. (golpe)", "Il pleuvait quand l'avion a atterri.", "El aterrizaje es puntual."]] }
  ],
  ejemplos: [
    { sit: "«Manejaba cuando un gato cruzó.»", resp: "Il conduisait quand un chat a traversé.", pasos: ["Fondo: conduisait.", "Golpe: a traversé."], porque: "Interrupción." },
    { sit: "«Cenábamos cuando se apagó la luz.»", resp: "Nous dînions quand la lumière s'est éteinte.", pasos: ["dînions / s'est éteinte."], porque: "Interrupción." },
    { sit: "«Trabajabas cuando te llamé.»", resp: "Tu travaillais quand je t'ai appelé.", pasos: ["travaillais / ai appelé."], porque: "Interrupción." }
  ],
  comprueba: [
    { q: "La acción de fondo va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "En curso." },
    { q: "La acción que interrumpe va en…", o: ["passé composé", "imparfait"], a: 0, b: "gr", porque: "Puntual." },
    { q: "En «Il pleuvait quand l'avion a atterri», la interrupción es…", o: ["l'avion a atterri", "il pleuvait"], a: 0, b: "gr", porque: "Hecho puntual." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ai-fond", "b1ai-coupe"], k: "sort", ask: "¿Fondo o interrupción?", q: "Clasifica.", cats: ["Fondo (imparfait)", "Interrupción (passé composé)"], items: [["il neigeait", 0], ["je faisais la queue", 0], ["on attendait le bus", 0], ["elle téléphonait", 0], ["le bus est arrivé", 1], ["j'ai glissé", 1], ["quelqu'un a crié", 1], ["la porte s'est ouverte", 1]], pista: "¿Duraba o pasó de golpe?", why: "Fondo / interrupción." },
    { fase: "guiada", c: ["b1ai-fond"], k: "choice", ask: "«Estaba cocinando cuando llegaste.»", q: "«___»", o: ["Je cuisinais quand tu es arrivé.", "J'ai cuisiné quand tu arrivais."], a: 0, pista: "Fondo en imparfait.", why: "Fondo + interrupción." },
    { fase: "guiada", c: ["b1ai-fond"], k: "choice", ask: "«Estábamos desayunando cuando el cartero tocó.»", q: "«Nous ___ le petit-déjeuner quand le facteur a sonné.»", o: ["prenions", "avons pris"], a: 0, pista: "Acción en curso.", why: "<b>prenions</b>." },
    { fase: "indep", c: ["b1ai-coupe"], k: "fill", ask: "Conjuga sauter.", q: "Je lisais tranquillement quand le chat ___ sur la table.", acc: ["a sauté"], why: "<b>a sauté</b>." },
    { fase: "indep", c: ["b1ai-fond"], k: "fill", ask: "Conjuga être.", q: "Ils ___ en train de discuter quand le prof est entré.", acc: ["étaient"], why: "<b>étaient</b> en train de." },
    { fase: "indep", c: ["b1ai-coupe"], k: "choice", ask: "En «Il pleuvait quand l'avion a atterri», ¿cuál es la interrupción?", q: "«___»", o: ["l'avion a atterri", "il pleuvait"], a: 0, why: "<b>l'avion a atterri</b>." },
    { fase: "aplica", c: ["b1ai-fond", "b1ai-coupe"], k: "match", ask: "Une cada fondo con su interrupción.", q: "Fondo → interrupción", pairs: [["Je dormais", "quand le réveil a sonné."], ["Il conduisait", "quand un chat a traversé."], ["Nous dînions", "quand la lumière s'est éteinte."], ["Tu travaillais", "quand je t'ai appelé."]], why: "Interrupciones." },
    { fase: "aplica", c: ["b1ai-fond"], k: "spot", ask: "Encuentra el error.", s: "Je [dormi] profondément quand le téléphone a sonné .", fix: "dormais", why: "<b>dormais</b>." },
    { fase: "dominio", c: ["b1ai-fond", "b1ai-coupe"], k: "order", ask: "Ordena: «Dormía cuando sonó el teléfono».", tokens: ["Je dormais", "quand le téléphone", "a sonné."], why: "<b>Je dormais quand le téléphone a sonné.</b>" },
    { fase: "dominio", c: ["b1ai-coupe"], k: "choice", ask: "«Caminaba por la calle cuando vi a Paul.»", q: "«Je marchais dans la rue quand ___ Paul.»", o: ["j'ai vu", "je voyais"], a: 0, why: "<b>j'ai vu</b>." },
    { fase: "dominio", c: ["b1ai-fond", "b1ai-coupe"], k: "listen", say: "J'étais en train de cuisiner quand mes amis sont arrivés.", acc: ["J'étais en train de cuisiner quand mes amis sont arrivés."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'étais en train de cuisiner quand mes amis sont arrivés.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

E["b11-venait-allait"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Venir de et aller à l'imparfait : juste avant, juste après",
  objetivo: {
    que: "Vas a decir en un relato que algo acababa de pasar (venait de) o iba a pasar (allait).",
    corto: "Le train venait de partir. · J'allais sortir.",
    podras: ["Usar venir de en imparfait: il venait d'arriver.", "Usar aller en imparfait: j'allais partir.", "Combinarlos con una acción en passé composé."],
    iconos: ["ic2/reloj-arena", "ic2/rayo", "ic2/pergamino"],
    previos: ["Las perífrasis (lección 14) y las interrupciones (lección 18)."],
    capacidad: "Ahora tus relatos tienen el «justo antes» y el «justo después»."
  },
  requiere: R("b1pe-trois", "b1pe-passe", "b1ai-coupe"), recupera: ["b1pe-passe"],
  conceptos: {
    "b1va-venait": { n: "venait de + infinitivo = acababa de (il venait d'arriver)", b: "gr" },
    "b1va-allait": { n: "allait + infinitivo = iba a (j'allais partir); sinónimo: j'étais sur le point de", b: "gr" }
  },
  video: {
    titulo: "Justo antes, justo después", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "venait de · allait", seg: [
        { es: "Hola. Dos perífrasis para el pasado del pasado y el futuro del pasado." } ] },
      { v: "dos",
        a: { tag: "ya pasó", fr: "Le film venait de commencer.", es: "acababa de" },
        b: { tag: "iba a pasar", fr: "J'allais t'écrire.", es: "iba a" },
        seg: [ { es: "Acababa de:", p: 1 }, { fr: "Le film venait de commencer.", p: 1 }, { es: "Iba a:", p: 2 }, { fr: "J'allais t'écrire.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando llegué, la clase acababa de empezar.»", o: ["Quand je suis arrivé, le cours venait de commencer.", "Quand je suis arrivé, le cours vient de commencer."], a: 0,
        bien: "¡Sí! En el relato: venait de.", mal: "En pasado: venait, no vient.",
        seg: [ { es: "Pausa. Acababa de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il venait de", "j'allais", "j'étais sur le point de", "quand"], seg: [
        { es: "Venait de, ya pasó. Allait, iba a pasar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Llegar tarde", img: "bg-paris", yo: "camila",
    escena: "Camila cuenta a Hugo cómo perdió el tren.",
    pj: PJ,
    lineas: [
      ["camila", "Quand je suis arrivée à la gare, le train venait de partir !", "¡Cuando llegué a la estación, el tren acababa de irse!"],
      ["hugo", "Oh non ! Et après ?", "¡Oh, no! ¿Y después?"],
      ["camila", "J'allais t'appeler quand tu m'as écrit. Quand je suis entrée au café, mes amis venaient de finir le repas.", "Iba a llamarte cuando me escribiste. Cuando entré al café, mis amigos acababan de terminar la comida."],
      ["hugo", "Tu allais dire quelque chose ? Moi, j'allais fermer la porte quand le voisin a frappé.", "¿Ibas a decir algo? Yo iba a cerrar la puerta cuando tocó el vecino."]
    ],
    fijate: "Fíjate: venait de partir, venaient de finir (acababa de); allais t'appeler, allais dire, allais fermer (iba a)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Venait de y allait",
      idea: "venir de en imparfait + infinitivo = pasado reciente dentro del pasado: Il venait d'arriver (acababa de llegar). aller en imparfait + infinitivo = futuro próximo dentro del pasado: J'allais partir (iba a irme). Se combinan con una acción en passé composé: Nous allions manger quand elle a sonné. Être sur le point de en imparfait es un sinónimo de allait: J'étais sur le point de partir.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Momento"], [
        ["il venait de partir · venait", "acababa de irse", "justo antes"],
        ["ils venaient de finir · venaient de", "acababan de terminar", "justo antes"],
        ["elle venait de manger · on venait d'arriver", "acababa de comer · acabábamos de llegar", "justo antes"],
        ["il allait partir", "iba a irse", "justo después"],
        ["tu allais dire · allais", "ibas a decir", "justo después"],
        ["J'allais t'appeler.", "Iba a llamarte.", "justo después"],
        ["il était sur le point de partir", "estaba a punto de irse", "sinónimo"],
        ["il était en train de partir", "se estaba yendo", "en curso"],
        ["Je venais de sortir quand il a commencé à pleuvoir.", "Acababa de salir cuando empezó a llover.", "relato"],
        ["Nous allions partir quand il est arrivé.", "Estábamos a punto de irnos cuando llegó.", "relato"]
      ]],
      ej: [["Quand je suis arrivé, le film venait de commencer.", "Cuando llegué, la película acababa de empezar."], ["J'allais t'écrire quand tu m'as appelé.", "Iba a escribirte cuando me llamaste."], ["Elle venait de se coucher quand l'alarme a sonné.", "Acababa de acostarse cuando sonó la alarma."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le train est venu de partir.", "Le train venait de partir.", "En el relato, venir de va en imparfait."], ["Quand je suis arrivé, le cours vient de commencer.", "Quand je suis arrivé, le cours venait de commencer.", "Relato en pasado: venait."], ["J'ai allé t'appeler.", "J'allais t'appeler.", "«Iba a» = j'allais."]] }
  ],
  ejemplos: [
    { sit: "«Acababa de salir cuando empezó a llover.»", resp: "Je venais de sortir quand il a commencé à pleuvoir.", pasos: ["venais de + infinitivo."], porque: "Justo antes." },
    { sit: "«Iba a llamarte.»", resp: "J'allais t'appeler.", pasos: ["allais + infinitivo."], porque: "Justo después." },
    { sit: "«Estábamos a punto de irnos cuando llegó.»", resp: "Nous allions partir quand il est arrivé.", pasos: ["allions + infinitivo + passé composé."], porque: "Combinación." }
  ],
  comprueba: [
    { q: "«Acababa de» en un relato se dice…", o: ["venait de", "vient de"], a: 0, b: "gr", porque: "Imparfait." },
    { q: "«Iba a irme» se dice…", o: ["j'allais partir", "je suis allé partir"], a: 0, b: "gr", porque: "allait." },
    { q: "Un sinónimo de allait es…", o: ["était sur le point de", "venait de"], a: 0, b: "gr", porque: "Inminente." }
  ],
  practica: [
    { fase: "guiada", c: ["b1va-venait", "b1va-allait"], k: "sort", ask: "¿Justo antes o justo después?", q: "Clasifica.", cats: ["Justo antes (ya pasó)", "Justo después (iba a pasar)"], items: [["elle venait de manger", 0], ["on venait d'arriver", 0], ["tu venais de payer", 0], ["ils venaient de voter", 0], ["elle allait manger", 1], ["on allait arriver", 1], ["tu allais payer", 1], ["ils allaient voter", 1]], pista: "venait / allait.", why: "Antes / después." },
    { fase: "guiada", c: ["b1va-venait"], k: "choice", ask: "«Acababa de salir cuando empezó a llover.»", q: "«___»", o: ["Je venais de sortir quand il a commencé à pleuvoir.", "Je suis venu de sortir quand il a commencé à pleuvoir."], a: 0, pista: "Imparfait.", why: "<b>venais de</b>." },
    { fase: "guiada", c: ["b1va-allait"], k: "choice", ask: "«Iba a llamarte.»", q: "«___»", o: ["J'allais t'appeler.", "Je suis allé t'appeler."], a: 0, pista: "aller en imparfait.", why: "<b>J'allais</b>." },
    { fase: "indep", c: ["b1va-allait"], k: "choice", es: true, ask: "«Nous allions partir quand il est arrivé.» significa…", q: "Elige.", o: ["Estábamos a punto de irnos cuando llegó.", "Nos fuimos cuando llegó."], a: 0, why: "allions = íbamos a." },
    { fase: "indep", c: ["b1va-venait"], k: "fill", ask: "venir de, con ils, en imparfait.", q: "Quand je suis entré, ils ___ finir le repas.", acc: ["venaient de"], why: "<b>venaient de</b>." },
    { fase: "indep", c: ["b1va-allait"], k: "fill", ask: "aller, con tu, en imparfait.", q: "Tu ___ dire quelque chose ?", acc: ["allais"], why: "<b>allais</b>." },
    { fase: "aplica", c: ["b1va-venait", "b1va-allait"], k: "match", ask: "Une cada forma con su traducción.", q: "Francés → español", pairs: [["il venait de partir", "acababa de irse"], ["il allait partir", "iba a irse"], ["il était sur le point de partir", "estaba a punto de irse"], ["il était en train de partir", "se estaba yendo"]], why: "Perífrasis en pasado." },
    { fase: "aplica", c: ["b1va-venait"], k: "spot", ask: "Encuentra el error.", s: "Quand je suis arrivé , le cours [vient] de commencer .", fix: "venait", why: "<b>venait</b>." },
    { fase: "dominio", c: ["b1va-venait"], k: "order", ask: "Ordena: «La película acababa de terminar».", tokens: ["Le film", "venait de", "finir."], why: "<b>Le film venait de finir.</b>" },
    { fase: "dominio", c: ["b1va-allait"], k: "choice", ask: "«Iba a cerrar la puerta cuando tocó el vecino.»", q: "«J'___ fermer la porte quand le voisin a frappé.»", o: ["allais", "venais de"], a: 0, why: "<b>allais</b>." },
    { fase: "dominio", c: ["b1va-venait", "b1va-allait"], k: "listen", say: "J'allais fermer la porte quand le voisin a frappé.", acc: ["J'allais fermer la porte quand le voisin a frappé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'allais fermer la porte quand le voisin a frappé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ───── B1.1·6 · Hablar del futuro ───── */
E["b11-futur-simple"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le futur simple et ses radicaux irréguliers",
  objetivo: {
    que: "Vas a formar el futuro simple, con sus raíces irregulares, y usarlo después de quand.",
    corto: "j'irai · je serai · Quand je serai grand…",
    podras: ["Formar el futuro con el infinitivo + -ai, -as, -a, -ons, -ez, -ont.", "Usar las raíces irregulares: ser-, aur-, ir-, fer-, pourr-, viendr-, verr-.", "Poner futuro después de quand con valor futuro (no subjuntivo)."],
    iconos: ["ic2/estrella", "ic2/mundo", "ic2/lapiz"],
    previos: ["El futuro (A2, lecciones 4 y 60)."],
    capacidad: "Ahora hablas de tus planes con el tiempo correcto."
  },
  requiere: R("fu-simple", "fi-racines", "fi-marq"), recupera: ["fi-racines"],
  conceptos: {
    "b1fs-forme": { n: "infinitivo + -ai, -as, -a, -ons, -ez, -ont; raíces: ser-, aur-, ir-, fer-, pourr-, voudr-, viendr-, verr-, devr-, saur-", b: "gr" },
    "b1fs-quand": { n: "quand + futuro con valor futuro: Quand je serai grand… (español: subjuntivo)", b: "gr" }
  },
  video: {
    titulo: "El futuro simple", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "j'irai · je serai", seg: [
        { es: "Hola. El futuro: infinitivo más terminaciones, y unas raíces especiales." } ] },
      { v: "frase", filas: [
          { nota: "regular", p: 1, partes: [["je parlerai · tu finiras", "-", 1]] },
          { nota: "irregular", p: 2, partes: [["je serai · j'aurai · j'irai", "-", 2]] },
          { nota: "quand + futuro", p: 3, partes: [["Quand tu arriveras, je t'appellerai.", "-", 3]] } ], seg: [
        { fr: "je parlerai, tu finiras", p: 1 }, { fr: "je serai, j'aurai, j'irai", p: 2 }, { es: "Ojo, después de quand, futuro:", p: 3 }, { fr: "Quand tu arriveras, je t'appellerai.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando sea grande, seré médico.»", o: ["Quand je serai grand, je serai médecin.", "Quand je sois grand, je serai médecin."], a: 0,
        bien: "¡Sí! Quand + futuro.", mal: "En francés, después de quand: futuro.",
        seg: [ { es: "Pausa. Cuando sea grande." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je serai", "j'aurai", "j'irai", "je ferai", "je pourrai", "je viendrai"], seg: [
        { es: "Cuando llegues: quand tu arriveras.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planes", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan del futuro.",
    pj: PJ,
    lineas: [
      ["camila", "Demain, j'irai à la banque. L'année prochaine, je serai professeure !", "Mañana iré al banco. ¡El año que viene seré profesora!"],
      ["hugo", "Nous ferons nos devoirs ce soir. Est-ce que vous pourrez venir samedi ?", "Haremos nuestras tareas esta noche. ¿Podrán venir el sábado?"],
      ["camila", "Oui ! Quand j'aurai mon diplôme, je chercherai du travail à Montréal.", "¡Sí! Cuando tenga mi diploma, buscaré trabajo en Montreal."],
      ["hugo", "On se verra la semaine prochaine, alors. Demain, il fera beau sur toute la France.", "Nos veremos la próxima semana, entonces. Mañana hará buen tiempo en toda Francia."]
    ],
    fijate: "Fíjate: irai, serai, ferons, pourrez, aurai, chercherai, verra, fera; quand j'aurai (futuro tras quand)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar el futuro",
      idea: "Regulares: infinitivo + -ai, -as, -a, -ons, -ez, -ont: je parlerai, tu finiras; en -re se quita la e: je prendrai. Raíces irregulares: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, venir → viendr-, voir → verr-, devoir → devr-, savoir → saur-, falloir → faudr-. Las terminaciones son siempre las mismas. Después de quand con valor futuro, el francés usa futuro: Quand je serai grand (el español usa subjuntivo).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Raíz"], [
        ["je parlerai · tu finiras · elle prendra · nous choisirons", "hablaré · terminarás · tomará · elegiremos", "regular"],
        ["je serai · tu auras", "seré · tendrás", "ser- · aur-"],
        ["irai · j'irai", "iré", "ir-"],
        ["ferons · fera", "haremos · hará", "fer-"],
        ["pourrez", "podrán", "pourr-"],
        ["verra · on se verra", "verá · nos veremos", "verr-"],
        ["elle viendra · nous saurons", "vendrá · sabremos", "viendr- · saur-"],
        ["devr- · voudr- · faudr-", "deberé · querré · hará falta", "irregulares"],
        ["Quand tu arriveras, je t'appellerai.", "Cuando llegues, te llamaré.", "quand + futuro"],
        ["Quand j'aurai mon diplôme…", "Cuando tenga mi diploma…", "quand + futuro"]
      ]],
      ej: [["L'année prochaine, j'irai étudier au Canada.", "El año que viene iré a estudiar a Canadá."], ["Quand tu auras le temps, tu m'appelleras.", "Cuando tengas tiempo, me llamarás."], ["Il fera beau demain.", "Mañana hará buen tiempo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand je sois grand, je serai médecin.", "Quand je serai grand, je serai médecin.", "Tras quand con valor futuro: futuro simple."], ["Demain, il faira beau.", "Demain, il fera beau.", "faire → fer-."], ["Quand je vais être grand…", "Quand je serai grand…", "Con quand: futuro simple."]] }
  ],
  ejemplos: [
    { sit: "«Mañana iré al banco.»", resp: "Demain, j'irai à la banque.", pasos: ["aller → ir- + -ai."], porque: "Irregular." },
    { sit: "«Cuando llegues, te llamaré.»", resp: "Quand tu arriveras, je t'appellerai.", pasos: ["quand + futuro.", "futuro en la principal."], porque: "Valor futuro." },
    { sit: "«Haremos los deberes.»", resp: "Nous ferons nos devoirs.", pasos: ["faire → fer- + -ons."], porque: "Irregular." }
  ],
  comprueba: [
    { q: "El futuro de aller es…", o: ["j'irai", "j'allerai"], a: 0, b: "gr", porque: "ir-." },
    { q: "Después de quand con valor futuro va…", o: ["futuro simple", "subjuntivo"], a: 0, b: "gr", porque: "Quand je serai…" },
    { q: "La raíz de faire es…", o: ["fer-", "fair-"], a: 0, b: "gr", porque: "il fera." }
  ],
  practica: [
    { fase: "guiada", c: ["b1fs-forme"], k: "sort", ask: "¿Regular o irregular?", q: "Clasifica.", cats: ["Regular", "Irregular"], items: [["je parlerai", 0], ["tu finiras", 0], ["elle prendra", 0], ["nous choisirons", 0], ["je serai", 1], ["tu auras", 1], ["elle viendra", 1], ["nous saurons", 1]], pista: "¿Se ve el infinitivo?", why: "Raíces." },
    { fase: "guiada", c: ["b1fs-forme"], k: "choice", ask: "«Mañana iré al banco.»", q: "«Demain, j'___ à la banque.»", o: ["irai", "allerai"], a: 0, pista: "aller → ir-.", why: "<b>irai</b>." },
    { fase: "guiada", c: ["b1fs-forme"], k: "choice", ask: "«Nos veremos la próxima semana.»", q: "«On se ___ la semaine prochaine.»", o: ["verra", "voira"], a: 0, pista: "voir → verr-.", why: "<b>verra</b>." },
    { fase: "indep", c: ["b1fs-quand"], k: "choice", ask: "«Cuando llegues, te llamaré.»", q: "«___»", o: ["Quand tu arriveras, je t'appellerai.", "Quand tu arrives, je t'appellerai."], a: 0, why: "Quand + futuro." },
    { fase: "indep", c: ["b1fs-forme"], k: "fill", ask: "Conjuga faire.", q: "Nous ___ nos devoirs ce soir.", acc: ["ferons"], why: "<b>ferons</b>." },
    { fase: "indep", c: ["b1fs-forme"], k: "fill", ask: "Conjuga pouvoir.", q: "Est-ce que vous ___ venir samedi ?", acc: ["pourrez"], why: "<b>pourrez</b>." },
    { fase: "aplica", c: ["b1fs-forme"], k: "match", ask: "Une cada infinitivo con su raíz de futuro.", q: "Infinitivo → raíz", pairs: [["devoir", "devr-"], ["savoir", "saur-"], ["vouloir", "voudr-"], ["venir", "viendr-"], ["falloir", "faudr-"]], why: "Raíces." },
    { fase: "aplica", c: ["b1fs-forme"], k: "spot", ask: "Encuentra el error.", s: "Demain , il [faira] beau sur toute la France .", fix: "fera", why: "<b>fera</b>." },
    { fase: "dominio", c: ["b1fs-forme"], k: "order", ask: "Ordena: «El año que viene seré profesora».", tokens: ["L'année prochaine,", "je serai", "professeure."], why: "<b>L'année prochaine, je serai professeure.</b>" },
    { fase: "dominio", c: ["b1fs-quand"], k: "choice", ask: "«Cuando tengas tiempo, me llamarás.»", q: "«Quand tu ___ le temps, tu m'appelleras.»", o: ["auras", "aies", "as"], a: 0, why: "<b>auras</b>." },
    { fase: "dominio", c: ["b1fs-forme", "b1fs-quand"], k: "listen", say: "Quand j'aurai mon diplôme, je chercherai du travail à Montréal.", acc: ["Quand j'aurai mon diplôme, je chercherai du travail à Montréal."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand j'aurai mon diplôme, je chercherai du travail à Montréal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal"], previo: [] }
};

E["b11-futur-proche-ou-simple"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Futur proche ou futur simple ?",
  objetivo: {
    que: "Vas a elegir entre futur proche (inminente, decidido) y futur simple (predicción, promesa, plan lejano).",
    corto: "Tu vas tomber ! · Un jour, je vivrai à Paris.",
    podras: ["Usar el futur proche para lo inminente, evidente o ya decidido.", "Usar el futur simple para predicciones, promesas y planes lejanos.", "No poner futuro después de si: S'il pleut, on restera."],
    iconos: ["ic2/rayo", "ic2/estrella", "ic2/luna"],
    previos: ["El futuro simple (lección 20) y el futuro próximo (A2, lección 4)."],
    capacidad: "Ahora eliges el futuro que suena natural."
  },
  requiere: R("fu-proche", "b1fs-forme", "sf-sil"), recupera: ["sf-sil"],
  conceptos: {
    "b1fp-choix": { n: "futur proche: inminente, evidente, decidido / futur simple: predicción, promesa, lejano", b: "gr" },
    "b1fp-si": { n: "si + presente, nunca futuro: S'il pleut, on restera à la maison", b: "gr" }
  },
  video: {
    titulo: "¿Qué futuro?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "vas tomber · vivrai", seg: [
        { es: "Hola. Dos futuros, dos sensaciones." } ] },
      { v: "dos",
        a: { tag: "inminente", fr: "Attention, tu vas tomber !", es: "ya mismo" },
        b: { tag: "lejano", fr: "Un jour, je vivrai à Paris.", es: "algún día" },
        seg: [ { es: "Peligro inmediato:", p: 1 }, { fr: "Attention, tu vas tomber !", p: 1 }, { es: "Sueño lejano:", p: 2 }, { fr: "Un jour, je vivrai à Paris.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si vienes mañana, iremos al cine.»", o: ["Si tu viens demain, on ira au cinéma.", "Si tu viendras demain, on ira au cinéma."], a: 0,
        bien: "¡Sí! Si + presente.", mal: "Después de si, nunca futuro.",
        seg: [ { es: "Pausa. Si vienes." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je vais sortir", "il va pleuvoir", "je sortirai", "on verra", "s'il pleut"], seg: [
        { es: "Al hablar, el futur proche es el más común.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Nubes negras", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo pasean cuando se nubla.",
    pj: PJ,
    lineas: [
      ["hugo", "Regarde ces nuages : il va pleuvoir.", "Mira esas nubes: va a llover."],
      ["camila", "Dépêche-toi, le film va commencer ! S'il fait beau demain, on ira à la plage.", "¡Apúrate, la película va a empezar! Si hace buen tiempo mañana, iremos a la playa."],
      ["hugo", "Je te promets : je te rendrai l'argent demain.", "Te lo prometo: te devolveré el dinero mañana."],
      ["camila", "Ne t'inquiète pas, je t'écrirai dès que je serai arrivée. Un jour, les humains vivront sur Mars !", "No te preocupes, te escribiré en cuanto llegue. ¡Un día los humanos vivirán en Marte!"]
    ],
    fijate: "Fíjate: va pleuvoir, va commencer (inminente); rendrai, écrirai (promesa); vivront (predicción); s'il fait beau (si + presente)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Elegir el futuro",
      idea: "Futur proche (aller + infinitivo): inminencia, evidencia o decisión ya tomada: Attention, tu vas tomber ! Je vais déménager en mars. Futur simple: predicción, promesa, condición, plan lejano o texto formal: Je te rembourserai demain, promis. Un jour, je vivrai à Paris. En la lengua oral cotidiana se usa mucho el futur proche. Después de si nunca va el futuro: S'il pleut, on restera à la maison.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Futuro"], [
        ["Attention, tu vas tomber !", "¡Cuidado, te vas a caer!", "proche: inminente"],
        ["Il va pleuvoir. · va", "Va a llover.", "proche: evidencia"],
        ["Je vais appeler ma mère maintenant.", "Voy a llamar a mi madre ahora.", "proche: decisión"],
        ["Je vais sortir. · On va voir. · Tu vas rater le bus.", "Voy a salir. · Vamos a ver. · Vas a perder el bus.", "proche"],
        ["Je te rendrai l'argent.", "Te devolveré el dinero.", "simple: promesa"],
        ["Demain, il pleuvra dans le Nord.", "Mañana lloverá en el norte.", "simple: predicción"],
        ["Un jour, les humains vivront sur Mars. · vivront", "Un día los humanos vivirán en Marte.", "simple: lejano"],
        ["Je sortirai. · On verra. · Tu rateras le bus. · Il neigera.", "Saldré. · Ya veremos. · Perderás el bus. · Nevará.", "simple"],
        ["S'il fait beau, on ira à la plage.", "Si hace buen tiempo, iremos a la playa.", "si + presente"],
        ["Si tu viens demain… · viens", "Si vienes mañana…", "si + presente"]
      ]],
      ej: [["Regarde ces nuages : il va pleuvoir.", "Mira esas nubes: va a llover."], ["Je te promets que je ne recommencerai plus.", "Te prometo que no volveré a hacerlo."], ["Dans cinquante ans, les voitures voleront peut-être.", "Dentro de cincuenta años quizá los carros vuelen."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Attention, tu tomberas !", "Attention, tu vas tomber !", "Peligro inminente → futur proche."], ["Si tu viendras demain, on ira au cinéma.", "Si tu viens demain, on ira au cinéma.", "Si + presente."], ["Dépêche-toi, le film commencera !", "Dépêche-toi, le film va commencer !", "Inminente → futur proche."]] }
  ],
  ejemplos: [
    { sit: "«¡Cuidado, el vaso se va a caer!»", resp: "Attention, le verre va tomber !", pasos: ["Inminente: futur proche."], porque: "Peligro." },
    { sit: "«Te lo juro, no lo repetiré.»", resp: "Je te jure, je ne le répéterai pas.", pasos: ["Promesa: futur simple."], porque: "Compromiso." },
    { sit: "«Si hace buen tiempo, iremos a la playa.»", resp: "S'il fait beau, on ira à la plage.", pasos: ["si + presente.", "futuro en la principal."], porque: "Condición." }
  ],
  comprueba: [
    { q: "Para un peligro inminente se usa…", o: ["futur proche", "futur simple"], a: 0, b: "gr", porque: "Tu vas tomber !" },
    { q: "Para una promesa se usa sobre todo…", o: ["futur simple", "futur proche"], a: 0, b: "gr", porque: "Je te rendrai…" },
    { q: "Después de si va…", o: ["presente", "futuro"], a: 0, b: "gr", porque: "S'il pleut…" }
  ],
  practica: [
    { fase: "guiada", c: ["b1fp-choix"], k: "sort", ask: "¿Futur proche o futur simple?", q: "Clasifica.", cats: ["futur proche", "futur simple"], items: [["Je vais sortir.", 0], ["On va voir.", 0], ["Tu vas rater le bus.", 0], ["Il va neiger.", 0], ["Je sortirai.", 1], ["On verra.", 1], ["Tu rateras le bus.", 1], ["Il neigera.", 1]], pista: "aller + infinitivo: proche.", why: "Formas." },
    { fase: "guiada", c: ["b1fp-choix"], k: "choice", ask: "«¡Cuidado, el vaso se va a caer!»", q: "«___»", o: ["Attention, le verre va tomber !", "Attention, le verre tombera !"], a: 0, pista: "Inminente.", why: "Futur proche." },
    { fase: "guiada", c: ["b1fp-choix"], k: "choice", ask: "«Te lo prometo: te devolveré el dinero.»", q: "«___»", o: ["Je te promets : je te rendrai l'argent.", "Je te promets : je te rends l'argent hier."], a: 0, pista: "Promesa.", why: "Futur simple." },
    { fase: "indep", c: ["b1fp-si"], k: "choice", ask: "«Si hace buen tiempo, iremos a la playa.»", q: "«___»", o: ["S'il fait beau, on ira à la plage.", "S'il fera beau, on ira à la plage."], a: 0, why: "Si + presente." },
    { fase: "indep", c: ["b1fp-choix"], k: "fill", ask: "Futur proche: «va a empezar».", q: "Dépêche-toi, le film ___ commencer !", acc: ["va"], why: "<b>va</b> commencer." },
    { fase: "indep", c: ["b1fp-choix"], k: "fill", ask: "Conjuga vivre en futuro simple.", q: "Un jour, les humains ___ sur Mars.", acc: ["vivront"], why: "<b>vivront</b>." },
    { fase: "aplica", c: ["b1fp-choix"], k: "match", ask: "Une cada frase con su traducción.", q: "Español → francés", pairs: [["¡Cuidado, te vas a caer!", "Attention, tu vas tomber !"], ["Te lo juro, no lo repetiré.", "Je te jure, je ne le répéterai pas."], ["Mañana lloverá en el norte.", "Demain, il pleuvra dans le Nord."], ["Voy a llamar a mi madre ahora.", "Je vais appeler ma mère maintenant."]], why: "Elegir el futuro." },
    { fase: "aplica", c: ["b1fp-si"], k: "spot", ask: "Encuentra el error.", s: "Si tu [viendras] demain , on ira au cinéma .", fix: "viens", why: "<b>Si tu viens</b>." },
    { fase: "dominio", c: ["b1fp-choix"], k: "order", ask: "Ordena: «Mira, va a llover».", tokens: ["Regarde,", "il va", "pleuvoir."], why: "<b>Regarde, il va pleuvoir.</b>" },
    { fase: "dominio", c: ["b1fp-si", "b1fp-choix"], k: "choice", ask: "«Si llueve, nos quedaremos en casa.»", q: "«S'il ___, on restera à la maison.»", o: ["pleut", "pleuvra"], a: 0, why: "<b>S'il pleut</b>." },
    { fase: "dominio", c: ["b1fp-choix", "b1fp-si"], k: "listen", say: "Ne t'inquiète pas, je t'écrirai dès que je serai arrivé.", acc: ["Ne t'inquiète pas, je t'écrirai dès que je serai arrivé.", "Ne t'inquiète pas, je t'écrirai dès que je serai arrivée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ne t'inquiète pas, je t'écrirai dès que je serai arrivé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Mars", "Paris"], previo: [] }
};

E["b11-conditionnel-politesse"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le conditionnel pour demander, conseiller et rêver",
  objetivo: {
    que: "Vas a usar el condicional para suavizar peticiones, dar consejos y expresar deseos en situaciones reales.",
    corto: "Auriez-vous l'heure ? · Vous devriez consulter.",
    podras: ["Pedir con fórmulas corteses: je voudrais, pourriez-vous, auriez-vous, ça vous dérangerait de…", "Aconsejar: tu devrais, vous devriez, il faudrait, à ta place…", "Expresar deseos: j'aimerais, ce serait bien de…"],
    iconos: ["ic2/corazon", "ic2/cafe", "ic2/bombilla"],
    previos: ["El condicional presente (lección 7)."],
    capacidad: "Ahora pides favores y das consejos como un francés educado."
  },
  requiere: R("b1co-forme", "b1co-usage"), recupera: ["b1co-usage"],
  conceptos: {
    "b1cp-demander": { n: "pedir: je voudrais, pourriez-vous, auriez-vous, ça vous dérangerait de…", b: "gr" },
    "b1cp-conseil": { n: "aconsejar: tu devrais, vous devriez, il faudrait, à ta place je…", b: "gr" }
  },
  video: {
    titulo: "Pedir y aconsejar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "auriez-vous… ?", seg: [
        { es: "Hola. El condicional abre puertas: suaviza todo lo que pides." } ] },
      { v: "dos",
        a: { tag: "pedir", fr: "Pourriez-vous m'aider ?", es: "¿podría ayudarme?" },
        b: { tag: "aconsejar", fr: "Vous devriez consulter.", es: "debería consultar" },
        seg: [ { es: "Para pedir:", p: 1 }, { fr: "Pourriez-vous m'aider ?", p: 1 }, { es: "Para aconsejar:", p: 2 }, { fr: "Vous devriez consulter.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quisiera un café, por favor.»", o: ["Je voudrais un café, s'il vous plaît.", "Je voulais un café, s'il vous plaît."], a: 0,
        bien: "¡Sí! Para pedir: voudrais.", mal: "Voulais es pasado: je voudrais.",
        seg: [ { es: "Pausa. Quisiera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je voudrais", "auriez-vous", "vous devriez", "il faudrait", "à ta place"], seg: [
        { es: "Pedir con -rais; aconsejar con devrais.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el hotel", img: "bg-paris", yo: "camila",
    escena: "Camila pide información en un hotel; Hugo la aconseja.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je voudrais une chambre double. Auriez-vous l'heure, aussi ?", "Buenos días, quisiera una habitación doble. ¿Tendría la hora, también?"],
      ["sofia", "Bien sûr. Pourriez-vous parler plus lentement, s'il vous plaît ?", "Claro. ¿Podría hablar más despacio, por favor?"],
      ["hugo", "Tu devrais dormir plus, Camila. À ta place, j'attendrais un peu avant de sortir.", "Deberías dormir más, Camila. Yo en tu lugar esperaría un poco antes de salir."],
      ["camila", "Tu as raison. J'aimerais vivre au bord de la mer… Excusez-moi, pourriez-vous m'indiquer la sortie ?", "Tienes razón. Me gustaría vivir junto al mar… Disculpe, ¿podría indicarme la salida?"]
    ],
    fijate: "Fíjate: je voudrais, auriez-vous, pourriez-vous (pedir); tu devrais, j'attendrais (aconsejar); j'aimerais (desear)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas con el condicional",
      idea: "Formación: raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient: je pourrais, nous ferions. Cortesía: Je voudrais…, Pourriez-vous…?, Auriez-vous…?, Ça vous dérangerait de…? Consejo: devoir en condicional (Tu devrais…, Vous devriez…), Il faudrait…, o À ta place, je… Deseo: J'aimerais…, Ce serait bien de… Para pedir no uses el imparfait (je voulais) sino el condicional (je voudrais).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Je voudrais un renseignement.", "Quisiera una información.", "pedir"],
        ["Je voudrais une chambre double.", "Quisiera una habitación doble.", "pedir"],
        ["Pourriez-vous répéter ? · Pourriez", "¿Podría repetir?", "pedir"],
        ["Auriez-vous l'heure ?", "¿Tendría la hora?", "pedir"],
        ["Ça vous dérangerait de fermer ?", "¿Le molestaría cerrar?", "pedir"],
        ["Tu devrais te reposer. · Tu devrais dormir plus.", "Deberías descansar. · Deberías dormir más.", "aconsejar"],
        ["Vous devriez consulter. · devriez", "Debería consultar.", "aconsejar"],
        ["À ta place, je partirais. · j'attendrais · attendrais", "Yo en tu lugar me iría. · esperaría", "aconsejar"],
        ["Il faudrait réviser.", "Habría que repasar.", "aconsejar"],
        ["J'aimerais vivre au bord de la mer.", "Me gustaría vivir junto al mar.", "desear"],
        ["je voudrais · je pourrais · je serais · j'aurais · je ferais", "querría · podría · sería · tendría · haría", "formas"]
      ]],
      ej: [["Pourriez-vous m'aider, s'il vous plaît ?", "¿Podría ayudarme, por favor?"], ["Tu devrais parler à ton professeur.", "Deberías hablar con tu profesor."], ["À ta place, je prendrais le train.", "Yo en tu lugar tomaría el tren."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je voulais un café, s'il vous plaît.", "Je voudrais un café, s'il vous plaît.", "Para pedir, vouloir en condicional."], ["Vous devrez boire plus d'eau, ce serait mieux.", "Vous devriez boire plus d'eau, ce serait mieux.", "Consejo: devriez (condicional)."], ["Pouvez-vous me passer le sel ? (muy formal)", "Pourriez-vous me passer le sel ?", "El condicional suaviza más."]] }
  ],
  ejemplos: [
    { sit: "Pides una habitación.", resp: "Je voudrais une chambre double.", pasos: ["vouloir → voudrais."], porque: "Cortesía." },
    { sit: "Aconsejas a un amigo cansado.", resp: "Tu devrais dormir plus.", pasos: ["devoir → devrais."], porque: "Consejo." },
    { sit: "Pides la dirección de la estación.", resp: "Pourriez-vous me dire où est la gare ?", pasos: ["pouvoir → pourriez."], porque: "Cortesía." }
  ],
  comprueba: [
    { q: "Para pedir con cortesía se dice…", o: ["je voudrais", "je voulais"], a: 0, b: "gr", porque: "Condicional." },
    { q: "«Usted debería consultar» se dice…", o: ["Vous devriez consulter.", "Vous devrez consulter."], a: 0, b: "gr", porque: "devriez." },
    { q: "«J'aimerais vivre au bord de la mer» expresa…", o: ["un deseo", "una orden"], a: 0, b: "gr", porque: "aimer en condicional." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cp-demander", "b1cp-conseil"], k: "sort", ask: "¿Pedir o aconsejar?", q: "Clasifica.", cats: ["Pedir", "Aconsejar"], items: [["Je voudrais un renseignement.", 0], ["Pourriez-vous répéter ?", 0], ["Auriez-vous l'heure ?", 0], ["Ça vous dérangerait de fermer ?", 0], ["Tu devrais te reposer.", 1], ["Vous devriez consulter.", 1], ["À ta place, je partirais.", 1], ["Il faudrait réviser.", 1]], pista: "devoir, il faudrait: consejo.", why: "Usos." },
    { fase: "guiada", c: ["b1cp-demander"], k: "choice", ask: "«Quisiera una habitación doble.»", q: "«___»", o: ["Je voudrais une chambre double.", "Je veux une chambre double, vite."], a: 0, pista: "Cortesía.", why: "<b>Je voudrais</b>." },
    { fase: "guiada", c: ["b1cp-conseil"], k: "choice", ask: "«Deberías dormir más.»", q: "«___»", o: ["Tu devrais dormir plus.", "Tu devras dormir plus."], a: 0, pista: "Condicional de devoir.", why: "<b>Tu devrais</b>." },
    { fase: "indep", c: ["b1cp-conseil"], k: "choice", es: true, ask: "«J'aimerais vivre au bord de la mer.» expresa…", q: "Elige.", o: ["Un deseo", "Un consejo", "Una orden"], a: 0, why: "Deseo." },
    { fase: "indep", c: ["b1cp-demander"], k: "fill", ask: "Conjuga pouvoir (vous) en condicional.", q: "___-vous me dire où est la gare ?", acc: ["Pourriez"], why: "<b>Pourriez</b>-vous." },
    { fase: "indep", c: ["b1cp-conseil"], k: "fill", ask: "Conjuga attendre en condicional.", q: "À ta place, j'___ un peu.", acc: ["attendrais"], why: "<b>attendrais</b>." },
    { fase: "aplica", c: ["b1cp-demander"], k: "match", ask: "Une cada infinitivo con su condicional.", q: "Infinitivo → condicional", pairs: [["vouloir", "je voudrais"], ["pouvoir", "je pourrais"], ["être", "je serais"], ["avoir", "j'aurais"], ["faire", "je ferais"]], why: "Formas." },
    { fase: "aplica", c: ["b1cp-conseil"], k: "spot", ask: "Encuentra el error.", s: "Vous [devrez] boire plus d'eau , ce serait mieux .", fix: "devriez", why: "<b>devriez</b>." },
    { fase: "dominio", c: ["b1cp-demander"], k: "order", ask: "Ordena: «¿Podría hablar más despacio?».", tokens: ["Pourriez-vous", "parler", "plus lentement ?"], why: "<b>Pourriez-vous parler plus lentement ?</b>" },
    { fase: "dominio", c: ["b1cp-conseil"], k: "choice", ask: "«Yo en tu lugar tomaría el tren.»", q: "«À ta place, je ___ le train.»", o: ["prendrais", "prendrai", "prenais"], a: 0, why: "<b>prendrais</b>." },
    { fase: "dominio", c: ["b1cp-demander", "b1cp-conseil"], k: "listen", say: "Excusez-moi, pourriez-vous m'indiquer la sortie, s'il vous plaît ?", acc: ["Excusez-moi, pourriez-vous m'indiquer la sortie, s'il vous plaît ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Excusez-moi, pourriez-vous m'indiquer la sortie, s'il vous plaît ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: [] }
};

E["b11-regrets"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer un regret : j'aurais dû, j'aurais aimé",
  objetivo: {
    que: "Vas a lamentar algo del pasado con el conditionnel passé: j'aurais dû, j'aurais aimé, tu aurais pu.",
    corto: "J'aurais dû étudier. · Tu aurais pu me prévenir !",
    podras: ["Formar el conditionnel passé: aurais / serais + participio.", "Expresar arrepentimiento y deseos no cumplidos: j'aurais dû, j'aurais aimé.", "Hacer un reproche: tu aurais pu…, vous auriez dû…"],
    iconos: ["ic2/reloj-arena", "ic2/corazon", "ic2/pergamino"],
    previos: ["El condicional presente (lecciones 7 y 22)."],
    capacidad: "Ahora puedes decir lo que deberías haber hecho."
  },
  requiere: R("b1co-forme", "b1cp-conseil"), recupera: ["b1co-forme"],
  conceptos: {
    "b1rg-forme": { n: "conditionnel passé: aurais / serais + participio (j'aurais dû, il serait venu)", b: "gr" },
    "b1rg-usage": { n: "arrepentimiento (j'aurais dû), deseo no cumplido (j'aurais aimé), reproche (tu aurais pu)", b: "gr" }
  },
  video: {
    titulo: "Lamentar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "j'aurais dû", seg: [
        { es: "Hola. Para lo que no hiciste y te habría gustado hacer." } ] },
      { v: "frase", filas: [
          { nota: "arrepentimiento", p: 1, partes: [["J'aurais dû partir plus tôt.", "-", 1]] },
          { nota: "deseo", p: 2, partes: [["J'aurais aimé te voir.", "-", 2]] },
          { nota: "reproche", p: 3, partes: [["Tu aurais pu me prévenir !", "-", 3]] } ], seg: [
        { fr: "J'aurais dû partir plus tôt.", p: 1 }, { fr: "J'aurais aimé te voir.", p: 2 }, { fr: "Tu aurais pu me prévenir !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Debería haber salido antes.»", o: ["J'aurais dû partir plus tôt.", "J'aurais dû de partir plus tôt."], a: 0,
        bien: "¡Sí! Tras devoir, sin de.", mal: "Después de dû no va de.",
        seg: [ { es: "Pausa. Debería haber." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'aurais dû", "j'aurais pu", "j'aurais aimé", "je serais parti", "tu aurais pu"], seg: [
        { es: "Aurais más participio: el pasado de lo posible.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viaje cancelado", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo lamentan un viaje mal organizado.",
    pj: PJ,
    lineas: [
      ["camila", "Nous aurions dû réserver plus tôt. Il n'y a plus de places !", "Deberíamos haber reservado antes. ¡Ya no quedan puestos!"],
      ["hugo", "Tu aurais pu me prévenir ! J'aurais aimé venir avec vous.", "¡Podrías haberme avisado! Me habría gustado ir con ustedes."],
      ["camila", "Pardon. Et Laura ? Elle serait venue si elle avait su.", "Perdón. ¿Y Laura? Habría venido si hubiera sabido."],
      ["hugo", "Bon… J'aurais aimé voyager plus quand j'étais étudiant. Je n'aurais pas dû dire ça.", "Bueno… Me habría gustado viajar más cuando era estudiante. No debí decir eso."]
    ],
    fijate: "Fíjate: aurions dû, aurais pu, aurais aimé, serait venue, n'aurais pas dû: conditionnel passé."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El conditionnel passé",
      idea: "Formación: auxiliar en condicional (aurais, serais…) + participio: j'aurais dû, il serait venu. Arrepentimiento: j'aurais dû + infinitivo = debería haber… Deseo no cumplido: j'aurais aimé / j'aurais voulu + infinitivo. Reproche: Tu aurais pu me prévenir ! = ¡Podrías haberme avisado! Después de dû no va de: j'aurais dû partir.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["j'aurais dû · J'aurais dû t'appeler.", "debería haber · Debería haberte llamado.", "arrepentimiento"],
        ["nous aurions dû · aurions", "deberíamos haber", "arrepentimiento"],
        ["j'aurais pu", "podría haber", "posibilidad"],
        ["Tu aurais pu me prévenir ! · aurais", "¡Podrías haberme avisado!", "reproche"],
        ["Vous auriez dû prévenir. · Il aurait pu dire merci.", "Deberían haber avisado. · Podría haber dicho gracias.", "reproche"],
        ["j'aurais aimé · J'aurais aimé te voir.", "me habría gustado · Me habría gustado verte.", "deseo"],
        ["j'aurais voulu", "habría querido", "deseo"],
        ["je serais parti · elle serait venue · serait", "me habría ido · habría venido", "con être"],
        ["Je n'aurais pas dû crier. · Tu n'aurais pas dû mentir.", "No debí gritar. · No debiste mentir.", "negativo"]
      ]],
      ej: [["J'aurais dû partir plus tôt.", "Debería haber salido antes."], ["Elle aurait aimé faire des études de médecine.", "Le habría gustado estudiar medicina."], ["Vous auriez pu fermer la porte !", "¡Podrían haber cerrado la puerta!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'aurais dû de partir.", "J'aurais dû partir.", "Tras devoir no va de."], ["Tu aurait pu me prévenir !", "Tu aurais pu me prévenir !", "tu → aurais."], ["Elle aurait venue.", "Elle serait venue.", "venir va con être."]] }
  ],
  ejemplos: [
    { sit: "«Debería haberte llamado.»", resp: "J'aurais dû t'appeler.", pasos: ["aurais + dû + infinitivo."], porque: "Arrepentimiento." },
    { sit: "«¡Podrías haberme avisado!»", resp: "Tu aurais pu me prévenir !", pasos: ["aurais + pu."], porque: "Reproche." },
    { sit: "«Me habría gustado verte.»", resp: "J'aurais aimé te voir.", pasos: ["aurais + aimé."], porque: "Deseo." }
  ],
  comprueba: [
    { q: "El conditionnel passé se forma con…", o: ["aurais / serais + participio", "avais + participio"], a: 0, b: "gr", porque: "j'aurais dû." },
    { q: "«J'aurais aimé te voir» significa…", o: ["Me habría gustado verte.", "Me gustaría verte."], a: 0, b: "gr", porque: "Pasado." },
    { q: "«Tu aurais pu m'attendre» es…", o: ["un reproche a otro", "un arrepentimiento propio"], a: 0, b: "gr", porque: "Tu." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rg-usage"], k: "sort", ask: "¿Arrepentimiento propio o reproche?", q: "Clasifica.", cats: ["Arrepentimiento propio", "Reproche a otro"], items: [["J'aurais dû réviser.", 0], ["J'aurais dû me taire.", 0], ["J'aurais pu faire mieux.", 0], ["Je n'aurais pas dû crier.", 0], ["Tu aurais pu m'attendre.", 1], ["Vous auriez dû prévenir.", 1], ["Il aurait pu dire merci.", 1], ["Tu n'aurais pas dû mentir.", 1]], pista: "¿Yo o tú?", why: "Usos." },
    { fase: "guiada", c: ["b1rg-forme"], k: "choice", ask: "«Debería haberte llamado.»", q: "«___»", o: ["J'aurais dû t'appeler.", "Je devrais t'appeler."], a: 0, pista: "Pasado.", why: "<b>J'aurais dû</b>." },
    { fase: "guiada", c: ["b1rg-usage"], k: "choice", ask: "«¡Podrías haberme avisado!»", q: "«___»", o: ["Tu aurais pu me prévenir !", "Tu pourrais me prévenir !"], a: 0, pista: "Reproche en pasado.", why: "<b>Tu aurais pu</b>." },
    { fase: "indep", c: ["b1rg-usage"], k: "choice", es: true, ask: "«J'aurais aimé te voir.» significa…", q: "Elige.", o: ["Me habría gustado verte.", "Me gustaría verte mañana."], a: 0, why: "Deseo no cumplido." },
    { fase: "indep", c: ["b1rg-forme"], k: "fill", ask: "Conjuga avoir (nous) en condicional.", q: "Nous ___ dû réserver plus tôt.", acc: ["aurions"], why: "<b>aurions</b>." },
    { fase: "indep", c: ["b1rg-forme"], k: "fill", ask: "Conjuga être en condicional.", q: "Elle ___ venue si elle avait su.", acc: ["serait"], why: "<b>serait</b> venue." },
    { fase: "aplica", c: ["b1rg-forme"], k: "match", ask: "Une cada forma con su traducción.", q: "Francés → español", pairs: [["j'aurais dû", "debería haber"], ["j'aurais pu", "podría haber"], ["j'aurais voulu", "habría querido"], ["je serais parti", "me habría ido"]], why: "Formas." },
    { fase: "aplica", c: ["b1rg-forme"], k: "spot", ask: "Encuentra el error.", s: "Tu [aurait] pu me prévenir que tu arrivais !", fix: "aurais", why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b1rg-usage"], k: "order", ask: "Ordena: «No debí decir eso».", tokens: ["Je n'aurais", "pas dû", "dire ça."], why: "<b>Je n'aurais pas dû dire ça.</b>" },
    { fase: "dominio", c: ["b1rg-forme", "b1rg-usage"], k: "choice", ask: "«Deberían haber avisado.»", q: "«Vous ___ prévenir.»", o: ["auriez dû", "devriez"], a: 0, why: "<b>auriez dû</b>." },
    { fase: "dominio", c: ["b1rg-forme", "b1rg-usage"], k: "listen", say: "J'aurais aimé voyager plus quand j'étais étudiant.", acc: ["J'aurais aimé voyager plus quand j'étais étudiant.", "J'aurais aimé voyager plus quand j'étais étudiante."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'aurais aimé voyager plus quand j'étais étudiant.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

/* ───── B1.1·6 · Organizar el tiempo del relato ───── */
E["b11-conjonctions-temps"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Quand, lorsque, pendant que, dès que, depuis que",
  objetivo: {
    que: "Vas a unir dos acciones en el tiempo con quand, lorsque, pendant que, dès que y depuis que.",
    corto: "Pendant que tu cuisines, je mets la table.",
    podras: ["Usar quand / lorsque (cuando) y pendant que (mientras).", "Usar dès que (en cuanto) y depuis que (desde que).", "Poner futuro después de la conjunción si la acción es futura: dès que j'arriverai."],
    iconos: ["ic2/reloj-arena", "ic2/rayo", "ic2/lapiz"],
    previos: ["El futuro simple y quand (lección 20) y los articuladores del relato (lección 15)."],
    capacidad: "Ahora encadenas acciones con precisión."
  },
  requiere: R("b1fs-quand", "b1rc-ordre"), recupera: ["b1fs-quand"],
  conceptos: {
    "b1cj-sens": { n: "quand / lorsque (cuando), pendant que (mientras), dès que (en cuanto), depuis que (desde que)", b: "gr" },
    "b1cj-futur": { n: "acción futura tras la conjunción → futuro: dès que j'arriverai, quand tu seras prêt", b: "gr" }
  },
  video: {
    titulo: "Conjunciones de tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "pendant que · dès que", seg: [
        { es: "Hola. Para unir dos acciones en el tiempo." } ] },
      { v: "frase", filas: [
          { nota: "mientras", p: 1, partes: [["Pendant que tu cuisines, je mets la table.", "-", 1]] },
          { nota: "en cuanto", p: 2, partes: [["Dès qu'il est rentré, il s'est couché.", "-", 2]] },
          { nota: "desde que", p: 3, partes: [["Depuis qu'elle habite ici, elle est heureuse.", "-", 3]] } ], seg: [
        { fr: "Pendant que tu cuisines, je mets la table.", p: 1 }, { fr: "Dès qu'il est rentré, il s'est couché.", p: 2 }, { fr: "Depuis qu'elle habite ici, elle est heureuse.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En cuanto esté listo, nos iremos.»", o: ["Dès que tu seras prêt, on partira.", "Dès que tu es prêt, on partira."], a: 0,
        bien: "¡Sí! Acción futura: futuro.", mal: "Futuro después de dès que: seras.",
        seg: [ { es: "Pausa. En cuanto." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quand", "lorsque", "pendant que", "dès que", "depuis que"], seg: [
        { es: "Mañana, en cuanto llegue: dès que j'arriverai.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la cocina", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan la cena.",
    pj: PJ,
    lineas: [
      ["camila", "Pendant que tu fais la vaisselle, je range le salon.", "Mientras lavas los platos, ordeno la sala."],
      ["hugo", "D'accord. Pendant que je dormais, il a neigé ! Dès qu'il a reçu le message, Paul a répondu.", "De acuerdo. ¡Mientras dormía, nevó! En cuanto recibió el mensaje, Paul respondió."],
      ["camila", "Depuis qu'il fait du sport, il dort mieux. Dès que tu seras prêt, on partira.", "Desde que hace deporte, duerme mejor. En cuanto estés listo, nos vamos."],
      ["hugo", "Je te téléphonerai dès que j'arriverai à Paris demain.", "Te llamaré en cuanto llegue a París mañana."]
    ],
    fijate: "Fíjate: pendant que, dès que, depuis que; dès que tu seras, dès que j'arriverai (futuro tras la conjunción)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Unir dos acciones",
      idea: "quand / lorsque: cuando (lorsque es más escrito). pendant que / tandis que: mientras (alors que añade contraste). dès que / aussitôt que / sitôt que / une fois que: en cuanto, inmediatamente después. depuis que: desde que (punto de partida que dura hasta hoy). Si la acción es futura, después de la conjunción va futuro (no presente como en español): Dès que j'arriverai, je t'appellerai.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["Pendant que · pendant que · tandis que", "mientras", "simultaneidad"],
        ["au moment où · en même temps que", "en el momento en que · al mismo tiempo que", "simultaneidad"],
        ["Dès qu' · dès que · aussitôt que", "en cuanto", "sucesión inmediata"],
        ["sitôt que · une fois que", "apenas · una vez que", "sucesión inmediata"],
        ["Depuis qu'il fait du sport, il dort mieux.", "Desde que hace deporte, duerme mejor.", "desde que"],
        ["Lorsque · lorsque · quand", "cuando", "momento"],
        ["alors que", "mientras que", "contraste"],
        ["Dès que tu seras prêt · seras", "En cuanto estés listo", "futuro"],
        ["dès que j'arriverai · arriverai", "en cuanto llegue", "futuro"],
        ["Dès que j'aurai fini ce travail…", "En cuanto haya terminado este trabajo…", "futuro anterior"]
      ]],
      ej: [["Pendant que tu cuisines, je mets la table.", "Mientras cocinas, pongo la mesa."], ["Dès qu'il est rentré, il s'est couché.", "En cuanto volvió, se acostó."], ["Depuis qu'elle habite ici, elle est plus heureuse.", "Desde que vive aquí, está más feliz."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Dès que j'arrive demain, je t'appellerai.", "Dès que j'arriverai demain, je t'appellerai.", "Acción futura tras la conjunción → futuro."], ["Je te téléphonerai dès que j'arrive à Paris demain.", "Je te téléphonerai dès que j'arriverai à Paris demain.", "Futuro."], ["Depuis il fait du sport, il dort mieux.", "Depuis qu'il fait du sport, il dort mieux.", "Con un verbo: depuis que."]] }
  ],
  ejemplos: [
    { sit: "«Mientras lavas los platos, ordeno la sala.»", resp: "Pendant que tu fais la vaisselle, je range le salon.", pasos: ["pendant que: simultaneidad."], porque: "Mientras." },
    { sit: "«En cuanto recibió el mensaje, respondió.»", resp: "Dès qu'il a reçu le message, il a répondu.", pasos: ["dès que: inmediato."], porque: "En cuanto." },
    { sit: "«En cuanto estés listo, nos iremos.»", resp: "Dès que tu seras prêt, on partira.", pasos: ["Acción futura: seras."], porque: "Futuro." }
  ],
  comprueba: [
    { q: "«Mientras» se dice…", o: ["pendant que", "dès que"], a: 0, b: "gr", porque: "Simultaneidad." },
    { q: "«En cuanto» se dice…", o: ["dès que", "depuis que"], a: 0, b: "gr", porque: "Inmediato." },
    { q: "«En cuanto llegue (mañana)» se dice…", o: ["dès que j'arriverai", "dès que j'arrive"], a: 0, b: "gr", porque: "Futuro." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cj-sens"], k: "sort", ask: "¿Simultaneidad o sucesión inmediata?", q: "Clasifica.", cats: ["Simultaneidad", "Sucesión inmediata"], items: [["pendant que", 0], ["tandis que", 0], ["au moment où", 0], ["en même temps que", 0], ["dès que", 1], ["aussitôt que", 1], ["sitôt que", 1], ["une fois que", 1]], pista: "¿A la vez o justo después?", why: "Conjunciones." },
    { fase: "guiada", c: ["b1cj-sens"], k: "choice", ask: "«Mientras lavas los platos, ordeno la sala.»", q: "«___ tu fais la vaisselle, je range le salon.»", o: ["Pendant que", "Dès que", "Depuis que"], a: 0, pista: "A la vez.", why: "<b>Pendant que</b>." },
    { fase: "guiada", c: ["b1cj-sens"], k: "choice", ask: "«En cuanto recibió el mensaje, respondió.»", q: "«___ il a reçu le message, il a répondu.»", o: ["Dès qu'", "Pendant qu'", "Depuis qu'"], a: 0, pista: "Inmediato.", why: "<b>Dès qu'</b>." },
    { fase: "indep", c: ["b1cj-sens"], k: "choice", ask: "«Desde que hace deporte, duerme mejor.»", q: "«___»", o: ["Depuis qu'il fait du sport, il dort mieux.", "Pendant qu'il fait du sport, il dort mieux."], a: 0, why: "<b>Depuis que</b>." },
    { fase: "indep", c: ["b1cj-futur"], k: "fill", ask: "Conjuga être en futuro.", q: "Dès que tu ___ prêt, on partira.", acc: ["seras"], why: "<b>seras</b>." },
    { fase: "indep", c: ["b1cj-sens"], k: "fill", ask: "Escribe «cuando» (registro escrito).", q: "___ le président est entré, tout le monde s'est levé.", acc: ["Lorsque", "lorsque"], why: "<b>Lorsque</b>." },
    { fase: "aplica", c: ["b1cj-sens"], k: "match", ask: "Une cada conjunción con su traducción.", q: "Francés → español", pairs: [["pendant que", "mientras"], ["dès que", "en cuanto"], ["depuis que", "desde que"], ["lorsque", "cuando"], ["alors que", "mientras que (contraste)"]], why: "Conjunciones." },
    { fase: "aplica", c: ["b1cj-futur"], k: "spot", ask: "Encuentra el error.", s: "Je te téléphonerai dès que je [arrive] à Paris demain .", fix: "arriverai", why: "<b>j'arriverai</b>." },
    { fase: "dominio", c: ["b1cj-sens"], k: "order", ask: "Ordena: «Mientras dormía, nevó».", tokens: ["Pendant que", "je dormais,", "il a neigé."], why: "<b>Pendant que je dormais, il a neigé.</b>" },
    { fase: "dominio", c: ["b1cj-futur"], k: "choice", ask: "«En cuanto llegue, te llamaré.»", q: "«Dès que j'___, je t'appellerai.»", o: ["arriverai", "arrive"], a: 0, why: "<b>arriverai</b>." },
    { fase: "dominio", c: ["b1cj-sens", "b1cj-futur"], k: "listen", say: "Dès que j'aurai fini ce travail, je partirai en vacances.", acc: ["Dès que j'aurai fini ce travail, je partirai en vacances."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dès que j'aurai fini ce travail, je partirai en vacances.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Paris"], previo: [] }
};

E["b11-avant-apres"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Avant, après, au bout de, jusqu'à : situer dans le temps",
  objetivo: {
    que: "Vas a situar hechos en el tiempo con avant (de), après, au bout de, jusqu'à, à partir de, la veille y le lendemain.",
    corto: "Au bout de dix minutes… · jusqu'à 20 heures.",
    podras: ["Usar avant + nombre / avant de + infinitivo; après + nombre / après avoir + participio.", "Usar au bout de, jusqu'à y à partir de.", "En un relato pasado, usar la veille y le lendemain en lugar de hier y demain."],
    iconos: ["ic2/reloj-arena", "ic2/pergamino", "ic2/lapiz"],
    previos: ["Los articuladores del relato (lección 15)."],
    capacidad: "Ahora sitúas cada hecho en su momento exacto."
  },
  requiere: R("b1rc-ordre", "b1rc-avapres"), recupera: ["b1rc-avapres"],
  conceptos: {
    "b1aa-prep": { n: "avant (de), après (avoir), au bout de, jusqu'à, à partir de", b: "gr" },
    "b1aa-recit": { n: "en el relato pasado: la veille, le lendemain, ce jour-là, la semaine suivante", b: "gr" }
  },
  video: {
    titulo: "Situar en el tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "au bout de · jusqu'à", seg: [
        { es: "Hola. Pequeñas palabras para decir cuándo exactamente." } ] },
      { v: "frase", filas: [
          { nota: "al cabo de", p: 1, partes: [["Au bout de dix minutes, il est parti.", "-", 1]] },
          { nota: "hasta", p: 2, partes: [["Le magasin est ouvert jusqu'à 20 heures.", "-", 2]] },
          { nota: "al día siguiente", p: 3, partes: [["Nous sommes arrivés le lendemain.", "-", 3]] } ], seg: [
        { fr: "Au bout de dix minutes, il est parti.", p: 1 }, { fr: "Le magasin est ouvert jusqu'à 20 heures.", p: 2 }, { fr: "Nous sommes arrivés le lendemain.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Antes de salir, cierra la ventana.»", o: ["Avant de partir, ferme la fenêtre.", "Avant partir, ferme la fenêtre."], a: 0,
        bien: "¡Sí! Avant + infinitivo lleva de.", mal: "Con infinitivo: avant de.",
        seg: [ { es: "Pausa. Antes de salir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avant de", "après avoir", "au bout de", "jusqu'à", "à partir de", "le lendemain"], seg: [
        { es: "En un relato pasado: la veille y le lendemain.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La respuesta", img: "bg-universidad", yo: "camila",
    escena: "Camila espera la respuesta de una beca.",
    pj: PJ,
    lineas: [
      ["camila", "Au bout de trois jours, nous avons enfin reçu une réponse !", "¡Al cabo de tres días, por fin recibimos una respuesta!"],
      ["hugo", "Génial ! La bibliothèque est ouverte jusqu'à 22 heures ce soir.", "¡Genial! La biblioteca está abierta hasta las 22 h esta noche."],
      ["camila", "Et à partir de lundi, les horaires changent. Avant de manger, je me lave les mains.", "Y a partir del lunes cambian los horarios. Antes de comer, me lavo las manos."],
      ["hugo", "Mon cousin est arrivé à Rome un lundi et il est reparti le lendemain. Après avoir dîné, nous sommes sortis.", "Mi primo llegó a Roma un lunes y se fue al día siguiente. Después de cenar, salimos."]
    ],
    fijate: "Fíjate: au bout de, jusqu'à, à partir de, avant de manger, le lendemain, après avoir dîné."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Preposiciones de tiempo",
      idea: "avant + nombre (avant le cours) / avant de + infinitivo (avant de partir). après + nombre (après le film) / après avoir o être + participio (après avoir mangé, après être sorti). au bout de = tras cierto tiempo (au bout d'une heure). jusqu'à = hasta (jusqu'à 20 heures). à partir de = a partir de (à partir de lundi). En un relato pasado se dice la veille (no hier), le lendemain (no demain), ce jour-là (no aujourd'hui), la semaine suivante (no la semaine prochaine).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["avant le dîner · après la réunion", "antes de la cena · después de la reunión", "+ nombre"],
        ["jusqu'au soir · au bout d'un mois", "hasta la noche · al cabo de un mes", "+ nombre"],
        ["avant de dîner · avant de partir", "antes de cenar · antes de irse", "+ infinitivo"],
        ["après avoir mangé · après être sorti", "después de comer · después de salir", "+ infinitivo pasado"],
        ["Au bout d'une heure…", "Al cabo de una hora…", "duración"],
        ["jusqu'à", "hasta", "límite"],
        ["À partir de", "a partir de", "inicio"],
        ["la veille", "la víspera (≠ hier)", "relato"],
        ["le lendemain · lendemain", "al día siguiente (≠ demain)", "relato"],
        ["ce jour-là · la semaine suivante", "ese día · la semana siguiente", "relato"]
      ]],
      ej: [["Au bout de dix minutes, il est parti.", "Al cabo de diez minutos, se fue."], ["Le magasin est ouvert jusqu'à 20 heures.", "La tienda está abierta hasta las 20 h."], ["Nous sommes arrivés le lendemain.", "Llegamos al día siguiente."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Avant partir, ferme la fenêtre.", "Avant de partir, ferme la fenêtre.", "Avant + infinitivo lleva de."], ["Il est reparti le demain.", "Il est reparti le lendemain.", "En el relato: le lendemain."], ["Après manger, on sort.", "Après avoir mangé, on sort.", "après + infinitivo pasado."]] }
  ],
  ejemplos: [
    { sit: "«Al cabo de una hora…»", resp: "Au bout d'une heure…", pasos: ["au bout de + d' ante vocal."], porque: "Duración." },
    { sit: "«Antes de comer, me lavo las manos.»", resp: "Avant de manger, je me lave les mains.", pasos: ["avant de + infinitivo."], porque: "Antes." },
    { sit: "«El día siguiente» (relato)", resp: "le lendemain", pasos: ["No demain."], porque: "Relato pasado." }
  ],
  comprueba: [
    { q: "«Antes de salir» se dice…", o: ["avant de partir", "avant partir"], a: 0, b: "gr", porque: "avant de." },
    { q: "«Hasta las 22 h» se dice…", o: ["jusqu'à 22 heures", "à partir de 22 heures"], a: 0, b: "gr", porque: "jusqu'à." },
    { q: "En un relato pasado, «al día siguiente» es…", o: ["le lendemain", "demain"], a: 0, b: "gr", porque: "Relato." }
  ],
  practica: [
    { fase: "guiada", c: ["b1aa-prep"], k: "sort", ask: "¿Con nombre o con infinitivo?", q: "Clasifica.", cats: ["+ nombre", "+ infinitivo"], items: [["avant le dîner", 0], ["après la réunion", 0], ["jusqu'au soir", 0], ["au bout d'un mois", 0], ["avant de dîner", 1], ["après avoir mangé", 1], ["avant de partir", 1], ["après être sorti", 1]], pista: "¿Sigue un verbo?", why: "Estructuras." },
    { fase: "guiada", c: ["b1aa-prep"], k: "choice", ask: "«Al cabo de una hora…»", q: "«___»", o: ["Au bout d'une heure…", "À la fin d'une heure…"], a: 0, pista: "au bout de.", why: "<b>Au bout d'une heure</b>." },
    { fase: "guiada", c: ["b1aa-prep"], k: "choice", ask: "«Antes de comer, me lavo las manos.»", q: "«___»", o: ["Avant de manger, je me lave les mains.", "Avant manger, je me lave les mains."], a: 0, pista: "Infinitivo.", why: "<b>Avant de</b>." },
    { fase: "indep", c: ["b1aa-recit"], k: "choice", ask: "«El día siguiente» en un relato pasado.", q: "«___»", o: ["le lendemain", "demain"], a: 0, why: "<b>le lendemain</b>." },
    { fase: "indep", c: ["b1aa-prep"], k: "fill", ask: "Escribe «hasta».", q: "La piscine est ouverte ___ 22 heures.", acc: ["jusqu'à"], why: "<b>jusqu'à</b>." },
    { fase: "indep", c: ["b1aa-prep"], k: "fill", ask: "Escribe «a partir de».", q: "___ lundi, les horaires changent.", acc: ["À partir de", "A partir de", "à partir de"], why: "<b>À partir de</b>." },
    { fase: "aplica", c: ["b1aa-recit"], k: "match", ask: "Une cada expresión con la del relato pasado.", q: "Presente → relato", pairs: [["hier", "la veille"], ["demain", "le lendemain"], ["aujourd'hui", "ce jour-là"], ["la semaine prochaine", "la semaine suivante"]], why: "Relato." },
    { fase: "aplica", c: ["b1aa-recit"], k: "spot", ask: "Encuentra el error.", s: "Il est arrivé à Rome un lundi et il est reparti le [demain] .", fix: "lendemain", why: "<b>le lendemain</b>." },
    { fase: "dominio", c: ["b1aa-prep"], k: "order", ask: "Ordena: «Después de cenar, salimos».", tokens: ["Après avoir dîné,", "nous sommes", "sortis."], why: "<b>Après avoir dîné, nous sommes sortis.</b>" },
    { fase: "dominio", c: ["b1aa-prep", "b1aa-recit"], k: "choice", ask: "«Al cabo de diez minutos, se fue.»", q: "«___ dix minutes, il est parti.»", o: ["Au bout de", "Jusqu'à", "Avant de"], a: 0, why: "<b>Au bout de</b>." },
    { fase: "dominio", c: ["b1aa-prep", "b1aa-recit"], k: "listen", say: "Au bout de trois jours, nous avons enfin reçu une réponse.", acc: ["Au bout de trois jours, nous avons enfin reçu une réponse.", "Au bout de 3 jours, nous avons enfin reçu une réponse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au bout de trois jours, nous avons enfin reçu une réponse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Rome"], previo: [] }
};

E["b11-raconter-souvenir"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Raconter un souvenir marquant",
  objetivo: {
    que: "Vas a contar un recuerdo importante con marco, sucesos, emociones y conclusión.",
    corto: "Je me souviens de… · Je n'oublierai jamais…",
    podras: ["Introducir el recuerdo: je me souviens de…, je n'oublierai jamais le jour où…", "Pintar el marco en imparfait y contar los sucesos en passé composé.", "Expresar emociones y concluir: j'étais ému(e), ce jour-là, j'ai compris que…"],
    iconos: ["ic2/corazon", "ic2/pergamino", "ic2/estrella"],
    previos: ["Los recuerdos de infancia (A2, lección 24), passé composé o imparfait (lección 1) y los articuladores (lección 15)."],
    capacidad: "Ahora cuentas un recuerdo que emociona a quien te escucha."
  },
  requiere: R("so-souvenir", "b1pi-decor", "b1rc-ordre"), recupera: ["so-souvenir"],
  conceptos: {
    "b1rs-intro": { n: "introducir y concluir: je me souviens de…, je n'oublierai jamais…, c'était la première fois que…", b: "gr" },
    "b1rs-structure": { n: "marco en imparfait + sucesos en passé composé + emociones", b: "gr" }
  },
  video: {
    titulo: "Un recuerdo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "je me souviens…", seg: [
        { es: "Hola. Un buen recuerdo tiene marco, hechos y emoción." } ] },
      { v: "frase", filas: [
          { nota: "introducir", p: 1, partes: [["Je me souviens de mon premier jour.", "-", 1]] },
          { nota: "marco", p: 2, partes: [["Il faisait nuit et il pleuvait.", "-", 2]] },
          { nota: "emoción", p: 3, partes: [["Je n'oublierai jamais ce voyage.", "-", 3]] } ], seg: [
        { fr: "Je me souviens de mon premier jour.", p: 1 }, { fr: "Il faisait nuit et il pleuvait.", p: 2 }, { fr: "Je n'oublierai jamais ce voyage.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Recuerdo mi infancia.»", o: ["Je me souviens de mon enfance.", "Je me souviens mon enfance."], a: 0,
        bien: "¡Sí! Se souvenir lleva de.", mal: "Se souvenir de: de mon enfance.",
        seg: [ { es: "Pausa. Recuerdo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je me souviens de", "je n'oublierai jamais", "c'était la première fois", "ce jour-là"], seg: [
        { es: "Marco en imparfait, hechos en passé composé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El primer mar", img: "bg-playa", yo: "camila",
    escena: "Camila cuenta a Hugo un recuerdo de niña.",
    pj: PJ,
    lineas: [
      ["camila", "Je me souviens très bien du jour où j'ai vu la mer pour la première fois.", "Recuerdo muy bien el día en que vi el mar por primera vez."],
      ["hugo", "Raconte !", "¡Cuenta!"],
      ["camila", "C'était la première fois que je voyais la mer, j'avais huit ans. Il faisait chaud. D'abord, on a visité le musée ; ensuite, on a déjeuné au port.", "Era la primera vez que veía el mar, tenía ocho años. Hacía calor. Primero visitamos el museo; luego almorzamos en el puerto."],
      ["camila", "Tout à coup, j'ai couru vers l'eau. J'étais très émue. Je n'oublierai jamais ce moment.", "De repente corrí hacia el agua. Estaba muy emocionada. Nunca olvidaré ese momento."]
    ],
    fijate: "Fíjate: je me souviens du jour où; c'était, j'avais, il faisait (marco); on a visité, j'ai couru (sucesos); j'étais émue (emoción); je n'oublierai jamais."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La estructura del recuerdo",
      idea: "Introducir: Je me souviens très bien de…, Je n'oublierai jamais le jour où… Marco en imparfait: C'était en 2015, il faisait chaud, j'avais seize ans. Sucesos en passé composé, ordenados: d'abord, ensuite, soudain, finalement. Emociones: j'étais ému(e), j'avais le cœur qui battait, j'ai eu très peur. Conclusión: Ce jour-là, j'ai compris que… Ojo: se souvenir lleva de.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Je me souviens de ce jour.", "Recuerdo aquel día.", "introducir"],
        ["Je n'oublierai jamais… · oublierai", "Nunca olvidaré…", "introducir"],
        ["C'était la première fois que je voyais la mer. · était", "Era la primera vez que veía el mar.", "introducir"],
        ["Il faisait nuit et il pleuvait.", "Era de noche y llovía.", "marco"],
        ["j'avais dix ans · il y avait du monde · tout était calme · on était en juillet", "tenía diez años · había gente · todo estaba tranquilo · era julio", "marco"],
        ["j'ai perdu mon sac · un homme m'a aidé · on a appelé la police · je suis rentré tard", "perdí mi bolso · un hombre me ayudó · llamamos a la policía · volví tarde", "sucesos"],
        ["ensuite · puis · après", "luego · después", "sucesos"],
        ["J'étais ému(e). · J'ai eu très peur.", "Estaba emocionado(a). · Tuve mucho miedo.", "emoción"],
        ["Ce jour-là, j'ai compris que…", "Ese día entendí que…", "concluir"]
      ]],
      ej: [["Je me souviens de mon premier jour à l'université.", "Recuerdo mi primer día en la universidad."], ["C'était la première fois que je prenais l'avion.", "Era la primera vez que tomaba el avión."], ["Je n'oublierai jamais ce voyage.", "Nunca olvidaré ese viaje."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je me souviens mon enfance.", "Je me souviens de mon enfance.", "Se souvenir lleva de."], ["C'est la première fois que je voyais la mer.", "C'était la première fois que je voyais la mer.", "En el pasado: c'était."], ["Il a fait nuit et il a plu. (marco)", "Il faisait nuit et il pleuvait.", "El marco va en imparfait."]] }
  ],
  ejemplos: [
    { sit: "«Recuerdo aquel día.»", resp: "Je me souviens de ce jour.", pasos: ["se souvenir de."], porque: "Introducción." },
    { sit: "«Era la primera vez que veía el mar.»", resp: "C'était la première fois que je voyais la mer.", pasos: ["c'était + imparfait."], porque: "Marco." },
    { sit: "«Nunca olvidaré ese momento.»", resp: "Je n'oublierai jamais ce moment.", pasos: ["Futuro de oublier."], porque: "Emoción." }
  ],
  comprueba: [
    { q: "El marco del recuerdo va en…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Descripción." },
    { q: "«Recuerdo mi infancia» se dice…", o: ["Je me souviens de mon enfance.", "Je me souviens mon enfance."], a: 0, b: "gr", porque: "se souvenir de." },
    { q: "«J'ai perdu mon sac» es…", o: ["un suceso", "el marco"], a: 0, b: "gr", porque: "Passé composé." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rs-structure"], k: "sort", ask: "¿Marco o suceso?", q: "Clasifica.", cats: ["Marco (imparfait)", "Sucesos (passé composé)"], items: [["j'avais dix ans", 0], ["il y avait du monde", 0], ["tout était calme", 0], ["on était en juillet", 0], ["j'ai perdu mon sac", 1], ["un homme m'a aidé", 1], ["on a appelé la police", 1], ["je suis rentré tard", 1]], pista: "¿Describe o avanza?", why: "Estructura." },
    { fase: "guiada", c: ["b1rs-intro"], k: "choice", ask: "«Recuerdo aquel día.»", q: "«___»", o: ["Je me souviens de ce jour.", "Je me souviens ce jour."], a: 0, pista: "se souvenir de.", why: "<b>de ce jour</b>." },
    { fase: "guiada", c: ["b1rs-structure"], k: "choice", ask: "¿Cuál describe el contexto?", q: "«___»", o: ["Il faisait nuit et il pleuvait.", "Il a fait nuit et il a plu."], a: 0, pista: "Marco.", why: "Imparfait." },
    { fase: "indep", c: ["b1rs-intro"], k: "choice", ask: "«Era la primera vez que veía el mar.»", q: "«___»", o: ["C'était la première fois que je voyais la mer.", "C'est la première fois que j'ai vu la mer."], a: 0, why: "<b>C'était… voyais</b>." },
    { fase: "indep", c: ["b1rs-intro"], k: "fill", ask: "Conjuga oublier en futuro.", q: "Je n'___ jamais ce moment.", acc: ["oublierai"], why: "<b>oublierai</b>." },
    { fase: "indep", c: ["b1rs-structure"], k: "fill", ask: "Escribe «luego».", q: "D'abord, on a visité le musée ; ___, on a déjeuné au port.", acc: ["ensuite", "puis", "après"], why: "<b>ensuite</b>." },
    { fase: "aplica", c: ["b1rs-intro", "b1rs-structure"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Je me souviens de…", "introducir"], ["Il faisait beau…", "describir el marco"], ["Tout à coup…", "introducir un suceso"], ["Ce jour-là, j'ai compris que…", "concluir"]], why: "Partes del relato." },
    { fase: "aplica", c: ["b1rs-intro"], k: "spot", ask: "Encuentra el error.", s: "C'[est] la première fois que je voyais la mer , j'avais huit ans .", fix: "était", why: "<b>C'était</b>." },
    { fase: "dominio", c: ["b1rs-intro"], k: "order", ask: "Ordena: «Nunca olvidaré ese viaje».", tokens: ["Je n'oublierai", "jamais", "ce voyage."], why: "<b>Je n'oublierai jamais ce voyage.</b>" },
    { fase: "dominio", c: ["b1rs-structure"], k: "choice", ask: "«De repente corrí hacia el agua.»", q: "«Tout à coup, j'___ vers l'eau.»", o: ["ai couru", "courais"], a: 0, why: "<b>ai couru</b>: suceso." },
    { fase: "dominio", c: ["b1rs-intro", "b1rs-structure"], k: "listen", say: "Je me souviens très bien du jour où j'ai eu mon premier vélo.", acc: ["Je me souviens très bien du jour où j'ai eu mon premier vélo."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je me souviens très bien du jour où j'ai eu mon premier vélo.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-accord-etre"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'accord du participe avec être et les pronominaux",
  objetivo: {
    que: "Vas a concordar el participio con être y en los verbos pronominales, y a ver cuándo no se concuerda.",
    corto: "Elle s'est levée. · Elles se sont téléphoné.",
    podras: ["Concordar con el sujeto cuando el auxiliar es être: elle est partie.", "Concordar en los pronominales reflexivos: elle s'est levée.", "No concordar si el pronombre es COI o si hay un COD después: elles se sont parlé, elle s'est lavé les mains."],
    iconos: ["ic2/lapiz", "ic2/amigos", "ic2/bombilla"],
    previos: ["La concordancia con être (A2, lección 29), los pronominales en pasado (A2, lección 20) y la concordancia con avoir (lección 3)."],
    capacidad: "Ahora escribes los pronominales sin errores de concordancia."
  },
  requiere: R("ae2-forme", "pp2-forme", "b1ap-avant"), recupera: ["pp2-forme"],
  conceptos: {
    "b1ae-oui": { n: "être y pronominales reflexivos: concordancia con el sujeto (elle s'est levée)", b: "gr" },
    "b1ae-non": { n: "sin concordancia: pronombre COI (se sont parlé) o COD después (s'est lavé les mains)", b: "gr" }
  },
  video: {
    titulo: "Concordar con être", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "levée · parlé", seg: [
        { es: "Hola. En los pronominales, casi siempre se concuerda… casi." } ] },
      { v: "dos",
        a: { tag: "concuerda", fr: "Elle s'est levée tôt.", es: "se levantó" },
        b: { tag: "no concuerda", fr: "Elles se sont téléphoné.", es: "se llamaron" },
        seg: [ { es: "Se levantó a sí misma: concuerda.", p: 1 }, { fr: "Elle s'est levée tôt.", p: 1 }, { es: "Téléphoner à: el pronombre es COI.", p: 2 }, { fr: "Elles se sont téléphoné.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ella se lavó las manos.»", o: ["Elle s'est lavé les mains.", "Elle s'est lavée les mains."], a: 0,
        bien: "¡Sí! COD después: sin concordancia.", mal: "Les mains va después: lavé.",
        seg: [ { es: "Pausa. Se lavó las manos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["elle s'est levée", "ils se sont rencontrés", "elles se sont parlé", "elle s'est lavé les mains"], seg: [
        { es: "Parler à, téléphoner à: sin concordancia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La boda", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta la boda de su hermana.",
    pj: PJ,
    lineas: [
      ["hugo", "Ma sœur s'est mariée l'été dernier en Bretagne. Elle et son mari se sont rencontrés à Lyon.", "Mi hermana se casó el verano pasado en Bretaña. Ella y su esposo se conocieron en Lyon."],
      ["camila", "Et la fête ?", "¿Y la fiesta?"],
      ["hugo", "Mes amies se sont bien amusées. Julie et Léa se sont couchées très tard !", "Mis amigas se divirtieron mucho. ¡Julie y Léa se acostaron muy tarde!"],
      ["camila", "Moi et Ana, nous nous sommes retrouvées au café. Avant, nous nous étions téléphoné.", "Ana y yo nos encontramos en el café. Antes nos habíamos llamado."]
    ],
    fijate: "Fíjate: mariée, rencontrés, amusées, couchées, retrouvées (concuerdan); téléphoné (COI, no concuerda)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "¿Concuerda?",
      idea: "Con être, el participio concuerda con el sujeto (+e femenino, +s plural): elle est partie, ils sont venus. Pronominales reflexivos o esenciales: igual: elle s'est lavée, ils se sont souvenus, elle s'est endormie. Si el pronombre reflexivo es COI (parler à, téléphoner à, dire à, sourire à, écrire à), no concuerda: elles se sont téléphoné, ils se sont souri. Si hay un COD después del verbo, tampoco: elle s'est lavé les mains, il s'est coupé le doigt.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Concordancia"], [
        ["Elle s'est levée tôt.", "Se levantó temprano.", "sí"],
        ["elle s'est habillée · elle s'est endormie", "se vistió · se durmió", "sí"],
        ["ils se sont disputés · ils se sont rencontrés", "discutieron · se conocieron", "sí"],
        ["amusées · retrouvées · couchées", "divertidas · encontradas · acostadas", "sí (femenino plural)"],
        ["Elles se sont téléphoné.", "Se llamaron.", "no: téléphoner à"],
        ["elles se sont parlé · ils se sont souri · ils se sont dit bonjour", "se hablaron · se sonrieron · se saludaron", "no: COI"],
        ["Elle s'est brossé les dents.", "Se cepilló los dientes.", "no: COD después"],
        ["elle s'est coupé le doigt · Il s'est coupé le doigt.", "se cortó el dedo", "no: COD después"],
        ["Elles se sont écrit pendant des années.", "Se escribieron durante años.", "no: écrire à"]
      ]],
      ej: [["Marie s'est réveillée à sept heures.", "Marie se despertó a las siete."], ["Ils se sont rencontrés à Paris.", "Se conocieron en París."], ["Elles se sont écrit pendant des années.", "Se escribieron durante años."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elle s'est lavée les mains.", "Elle s'est lavé les mains.", "COD después (les mains) → sin concordancia."], ["Julie et Léa se sont couché très tard.", "Julie et Léa se sont couchées très tard.", "Reflexivo: concuerda."], ["Elles se sont téléphonées.", "Elles se sont téléphoné.", "téléphoner à: COI."]] }
  ],
  ejemplos: [
    { sit: "«Ella se levantó temprano.»", resp: "Elle s'est levée tôt.", pasos: ["Reflexivo: levée."], porque: "Concuerda." },
    { sit: "«Se llamaron (ellas).»", resp: "Elles se sont téléphoné.", pasos: ["téléphoner à: COI."], porque: "No concuerda." },
    { sit: "«Se cepilló los dientes (ella).»", resp: "Elle s'est brossé les dents.", pasos: ["COD después: les dents."], porque: "No concuerda." }
  ],
  comprueba: [
    { q: "En «elle s'est levée», el participio…", o: ["concuerda", "no concuerda"], a: 0, b: "gr", porque: "Reflexivo." },
    { q: "Con téléphoner à, el participio…", o: ["no concuerda", "concuerda"], a: 0, b: "gr", porque: "COI." },
    { q: "En «elle s'est lavé les mains»…", o: ["no concuerda: COD después", "concuerda"], a: 0, b: "gr", porque: "les mains." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ae-oui", "b1ae-non"], k: "sort", ask: "¿Concuerda?", q: "Clasifica.", cats: ["Concuerda", "No concuerda"], items: [["elle s'est habillée", 0], ["ils se sont disputés", 0], ["elles se sont levées", 0], ["elle s'est endormie", 0], ["elles se sont parlé", 1], ["ils se sont souri", 1], ["elle s'est coupé le doigt", 1], ["ils se sont dit bonjour", 1]], pista: "¿COI o COD después?", why: "Concordancia." },
    { fase: "guiada", c: ["b1ae-oui"], k: "choice", ask: "«Ella se levantó temprano.»", q: "«___»", o: ["Elle s'est levée tôt.", "Elle s'est levé tôt."], a: 0, pista: "Reflexivo.", why: "<b>levée</b>." },
    { fase: "guiada", c: ["b1ae-non"], k: "choice", ask: "«Se llamaron (ellas) por teléfono.»", q: "«___»", o: ["Elles se sont téléphoné.", "Elles se sont téléphonées."], a: 0, pista: "téléphoner à.", why: "<b>téléphoné</b>." },
    { fase: "indep", c: ["b1ae-non"], k: "choice", ask: "«Se cepilló los dientes (ella).»", q: "«___»", o: ["Elle s'est brossé les dents.", "Elle s'est brossée les dents."], a: 0, why: "COD después: <b>brossé</b>." },
    { fase: "indep", c: ["b1ae-oui"], k: "fill", ask: "Participio de amuser.", q: "Mes amies se sont bien ___ à la fête.", acc: ["amusées"], why: "<b>amusées</b>." },
    { fase: "indep", c: ["b1ae-oui"], k: "fill", ask: "Participio de retrouver (Ana y yo).", q: "Nous nous sommes ___ au café.", acc: ["retrouvées"], why: "<b>retrouvées</b>." },
    { fase: "aplica", c: ["b1ae-oui", "b1ae-non"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Elle s'est", "endormie."], ["Ils se sont", "disputés."], ["Elles se sont", "téléphoné."], ["Il s'est", "coupé le doigt."]], why: "Concordancia." },
    { fase: "aplica", c: ["b1ae-oui"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , Julie et Léa se sont [couché] très tard .", fix: "couchées", why: "<b>couchées</b>." },
    { fase: "dominio", c: ["b1ae-oui"], k: "order", ask: "Ordena: «Se conocieron en Lyon».", tokens: ["Ils se sont", "rencontrés", "à Lyon."], why: "<b>Ils se sont rencontrés à Lyon.</b>" },
    { fase: "dominio", c: ["b1ae-non"], k: "choice", ask: "«Se escribieron durante años (ellas).»", q: "«Elles se sont ___ pendant des années.»", o: ["écrit", "écrites"], a: 0, why: "écrire à: <b>écrit</b>." },
    { fase: "dominio", c: ["b1ae-oui", "b1ae-non"], k: "listen", say: "Ma sœur s'est mariée l'été dernier en Bretagne.", acc: ["Ma sœur s'est mariée l'été dernier en Bretagne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ma sœur s'est mariée l'été dernier en Bretagne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Léa", "Ana", "Marie", "Bretagne", "Lyon", "Paris"], previo: [] }
};

E["b11-imperatif-pronoms"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'impératif avec pronoms : donne-le-moi, ne me le dis pas",
  objetivo: {
    que: "Vas a usar el imperativo con dos pronombres, en afirmativo y en negativo.",
    corto: "Donne-le-moi. · Ne me le donne pas.",
    podras: ["Poner los pronombres detrás en el afirmativo: verbo-COD-COI (donne-le-moi).", "Cambiar me / te por moi / toi al final: lève-toi !", "Volver al orden normal en el negativo: ne me le dis pas; y usar en, y: prends-en, vas-y."],
    iconos: ["ic2/rayo", "ic2/lapiz", "ic2/regalo"],
    previos: ["El imperativo con pronombres (A2, lección 41) y los pronombres COD y COI (lección 29)."],
    capacidad: "Ahora das órdenes y pides cosas con pronombres."
  },
  requiere: R("ipr-pos", "ipr-moi", "pr-place"), recupera: ["ipr-pos"],
  conceptos: {
    "b1ip-aff": { n: "afirmativo: verbo-COD-COI con guiones; me → moi, te → toi (donne-le-moi, lève-toi)", b: "gr" },
    "b1ip-neg": { n: "negativo: orden normal delante (ne me le donne pas); en, y: prends-en, vas-y", b: "gr" }
  },
  video: {
    titulo: "Imperativo con pronombres", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "donne-le-moi", seg: [
        { es: "Hola. En el imperativo afirmativo, los pronombres se van detrás." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Donne-le-moi.", es: "dámelo" },
        b: { tag: "negativo", fr: "Ne me le donne pas.", es: "no me lo des" },
        seg: [ { es: "Afirmativo, detrás:", p: 1 }, { fr: "Donne-le-moi.", p: 1 }, { es: "Negativo, delante:", p: 2 }, { fr: "Ne me le donne pas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Tu cuaderno? Préstamelo.»", o: ["Ton cahier ? Prête-le-moi.", "Ton cahier ? Prête-moi-le."], a: 0,
        bien: "¡Sí! Primero le, después moi.", mal: "Afirmativo: COD primero: prête-le-moi.",
        seg: [ { es: "Pausa. Préstamelo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["donne-le-moi", "lève-toi", "prends-en", "vas-y", "ne me le dis pas"], seg: [
        { es: "Me se vuelve moi al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La llave", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo llegan a casa.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as la clé ? Donne-la-moi, je vais ouvrir.", "¿Tienes la llave? Dámela, voy a abrir."],
      ["camila", "Tiens. Les photos de la fête ? Envoie-les-nous ce soir !", "Toma. ¿Las fotos de la fiesta? ¡Envíanoslas esta noche!"],
      ["hugo", "D'accord. Mais le secret de Laura, ne le lui explique pas, et ne le dis à personne !", "De acuerdo. Pero el secreto de Laura, no se lo expliques, ¡y no se lo digas a nadie!"],
      ["camila", "Promis. Tu as du pain ? Donne-m'en un peu. Et lève-toi, on y va !", "Prometido. ¿Tienes pan? Dame un poco. Y levántate, ¡vamos!"]
    ],
    fijate: "Fíjate: donne-la-moi, envoie-les-nous, donne-m'en, lève-toi (afirmativo); ne le lui explique pas, ne le dis (negativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Orden de los pronombres",
      idea: "Afirmativo: verbo-COD-COI, con guiones: Donne-le-moi, Envoie-la-lui, Montre-les-nous. Me y te se vuelven moi y toi al final: Lève-toi ! Assieds-toi. Negativo: los pronombres vuelven delante, en el orden normal: Ne me le donne pas. Ne te lève pas. Ne le lui dis pas. Con en y y: Donne-m'en, Vas-y, Manges-en (los verbos en -er toman -s delante de en / y).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Donne-le-moi. · Donne-la-moi.", "Dámelo. · Dámela.", "afirmativo"],
        ["Prête-le-moi. · moi", "Préstamelo.", "afirmativo"],
        ["Envoie-les-nous. · les-nous", "Envíanoslas.", "afirmativo"],
        ["Dis-le-lui. · Rends-la-lui.", "Díselo. · Devuélvesela.", "afirmativo"],
        ["Lève-toi ! · Réveille-toi. · Assieds-toi.", "¡Levántate! · Despiértate. · Siéntate.", "me → moi, te → toi"],
        ["Donne-m'en. · en · Prends-en. · Parles-en.", "Dame un poco. · Toma. · Habla de eso.", "con en"],
        ["Vas-y.", "Ve.", "con y"],
        ["Ne me le dis pas. · Ne me le donne pas.", "No me lo digas. · No me lo des.", "negativo"],
        ["Ne le lui dis pas. · Ne la lui rends pas.", "No se lo digas. · No se la devuelvas.", "negativo"],
        ["Ne t'assieds pas. · Ne te réveille pas. · N'y va pas. · N'en prends pas. · N'en parle pas.", "No te sientes. · No te despiertes. · No vayas. · No tomes. · No hables de eso.", "negativo"]
      ]],
      ej: [["Ce livre ? Prête-le-moi, s'il te plaît.", "¿Ese libro? Préstamelo, por favor."], ["Ne le dis à personne.", "No se lo digas a nadie."], ["Tu veux des fraises ? Prends-en !", "¿Quieres fresas? ¡Toma!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Donne-moi-le.", "Donne-le-moi.", "En el afirmativo, el COD va primero."], ["Ton cahier ? Prête-le-me.", "Ton cahier ? Prête-le-moi.", "Al final: moi."], ["Ne donne-le-moi pas.", "Ne me le donne pas.", "Negativo: pronombres delante."]] }
  ],
  ejemplos: [
    { sit: "«Dámelo.»", resp: "Donne-le-moi.", pasos: ["Verbo-COD-COI.", "me → moi."], porque: "Afirmativo." },
    { sit: "«No me lo digas.»", resp: "Ne me le dis pas.", pasos: ["Orden normal delante."], porque: "Negativo." },
    { sit: "«¿Fresas? ¡Toma!»", resp: "Prends-en !", pasos: ["en detrás."], porque: "Con en." }
  ],
  comprueba: [
    { q: "En el afirmativo, los pronombres van…", o: ["detrás del verbo", "delante del verbo"], a: 0, b: "gr", porque: "Donne-le-moi." },
    { q: "Al final del imperativo, me se vuelve…", o: ["moi", "me"], a: 0, b: "gr", porque: "Lève-toi, donne-le-moi." },
    { q: "En el negativo, los pronombres van…", o: ["delante, en el orden normal", "detrás"], a: 0, b: "gr", porque: "Ne me le dis pas." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ip-aff", "b1ip-neg"], k: "sort", ask: "¿Afirmativo o negativo?", q: "Clasifica.", cats: ["Afirmativo", "Negativo"], items: [["Dis-le-moi.", 0], ["Rends-la-lui.", 0], ["Réveille-toi.", 0], ["Parles-en.", 0], ["Ne me le dis pas.", 1], ["Ne la lui rends pas.", 1], ["Ne te réveille pas.", 1], ["N'en parle pas.", 1]], pista: "¿Hay ne?", why: "Formas." },
    { fase: "guiada", c: ["b1ip-aff"], k: "choice", ask: "«Dámelo.»", q: "«___»", o: ["Donne-le-moi.", "Donne-moi-le."], a: 0, pista: "COD primero.", why: "<b>Donne-le-moi</b>." },
    { fase: "guiada", c: ["b1ip-neg"], k: "choice", ask: "«No me lo digas.»", q: "«___»", o: ["Ne me le dis pas.", "Ne dis-le-moi pas."], a: 0, pista: "Negativo: delante.", why: "<b>Ne me le dis pas</b>." },
    { fase: "indep", c: ["b1ip-aff"], k: "choice", ask: "«¡Levántate!»", q: "«___»", o: ["Lève-toi !", "Lève-te !"], a: 0, why: "<b>toi</b>." },
    { fase: "indep", c: ["b1ip-aff"], k: "fill", ask: "«Envíanoslas» (les photos).", q: "Les photos ? Envoie-___ !", acc: ["les-nous"], why: "<b>Envoie-les-nous</b>." },
    { fase: "indep", c: ["b1ip-aff"], k: "fill", ask: "«Dame un poco» (de pan).", q: "Tu as du pain ? Donne-m'___ un peu.", acc: ["en"], why: "<b>Donne-m'en</b>." },
    { fase: "aplica", c: ["b1ip-aff", "b1ip-neg"], k: "match", ask: "Une cada orden con su forma negativa.", q: "Afirmativo → negativo", pairs: [["Dis-le-lui.", "Ne le lui dis pas."], ["Assieds-toi.", "Ne t'assieds pas."], ["Vas-y.", "N'y va pas."], ["Prends-en.", "N'en prends pas."]], why: "Afirmativo / negativo." },
    { fase: "aplica", c: ["b1ip-aff"], k: "spot", ask: "Encuentra el error.", s: "Ton cahier ? Prête-le-[me] , s'il te plaît .", fix: "moi", why: "<b>Prête-le-moi</b>." },
    { fase: "dominio", c: ["b1ip-neg"], k: "order", ask: "Ordena: «No se lo expliques».", tokens: ["Ne le lui", "explique", "pas."], why: "<b>Ne le lui explique pas.</b>" },
    { fase: "dominio", c: ["b1ip-aff"], k: "choice", ask: "«¿Quieres fresas? ¡Toma!»", q: "«Tu veux des fraises ? ___ !»", o: ["Prends-en", "Prends-les-en"], a: 0, why: "<b>Prends-en</b>." },
    { fase: "dominio", c: ["b1ip-aff", "b1ip-neg"], k: "listen", say: "Tu as la clé ? Donne-la-moi, je vais ouvrir.", acc: ["Tu as la clé ? Donne-la-moi, je vais ouvrir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu as la clé ? Donne-la-moi, je vais ouvrir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

/* ================================ B1.1·7 · Los pronombres complemento ================================ */
E["b11-cod-coi"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les pronoms COD et COI : le, la, les, lui, leur",
  objetivo: {
    que: "Vas a elegir entre COD (le, la, les) y COI (lui, leur) según el verbo.",
    corto: "Je la vois. · Je lui parle.",
    podras: ["Usar el COD para un complemento sin preposición: je les invite.", "Usar el COI para una persona con à: je leur écris.", "Recordar los verbos con COI: parler à, téléphoner à, répondre à, plaire à."],
    iconos: ["ic2/amigos", "ic2/movil", "ic2/lapiz"],
    previos: ["El COD (A2, lección 9) y el COI (A2, lección 10)."],
    capacidad: "Ahora no dices «je la téléphone»."
  },
  requiere: R("cod-forma", "coi-forma", "coi-vs"), recupera: ["coi-vs"],
  conceptos: {
    "b1cc-cod": { n: "COD (sin preposición): me, te, le, la, nous, vous, les", b: "gr" },
    "b1cc-coi": { n: "COI (persona con à): me, te, lui, nous, vous, leur; parler à, téléphoner à…", b: "gr" }
  },
  video: {
    titulo: "Le o lui", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "le · la · lui · leur", seg: [
        { es: "Hola. El verbo decide: ¿lleva à o no?" } ] },
      { v: "dos",
        a: { tag: "COD", fr: "J'invite mes amis. Je les invite.", es: "los invito" },
        b: { tag: "COI", fr: "Je parle à mon voisin. Je lui parle.", es: "le hablo" },
        seg: [ { es: "Sin preposición: COD.", p: 1 }, { fr: "Je les invite.", p: 1 }, { es: "Con à: COI.", p: 2 }, { fr: "Je lui parle.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La llamo por teléfono.»", o: ["Je lui téléphone.", "Je la téléphone."], a: 0,
        bien: "¡Sí! Téléphoner à: lui.", mal: "Téléphoner lleva à: lui.",
        seg: [ { es: "Pausa. La llamo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je le connais", "je la regarde", "je lui parle", "je leur écris"], seg: [
        { es: "Leur, sin ese, cuando es pronombre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los vecinos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de amigos y familia.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as vu Claire ?", "¿Viste a Claire?"],
      ["camila", "Oui, je l'ai vue et je lui ai parlé. Tu connais Paul ?", "Sí, la vi y le hablé. ¿Conoces a Paul?"],
      ["hugo", "Oui, je le connais bien. Et tes parents, tu leur as écrit ?", "Sí, lo conozco bien. ¿Y a tus papás, les escribiste?"],
      ["camila", "Je leur ai écrit hier. Mes grands-parents ? Je leur rends visite chaque dimanche.", "Les escribí ayer. ¿Mis abuelos? Los visito cada domingo."]
    ],
    fijate: "Fíjate: l'ai vue, le connais (COD); lui ai parlé, leur as écrit, leur rends visite (COI)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "COD y COI",
      idea: "COD (complemento sin preposición): me, te, le, la, nous, vous, les: Je les invite. COI (persona con à): me, te, lui, nous, vous, leur: Je leur écris. Lui sirve para él y para ella; leur no lleva -s cuando es pronombre. Van delante del verbo conjugado. Verbos con COI: parler à, téléphoner à, répondre à, demander à, offrir à, plaire à, sourire à, obéir à, ressembler à. Verbos con COD: aider, écouter, attendre, remercier, inviter.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Je le connais. · Je la regarde. · la", "Lo conozco. · La miro.", "COD"],
        ["Je les invite. · les", "Los invito.", "COD"],
        ["Je les aide. · Je l'écoute.", "Los ayudo. · La escucho.", "COD"],
        ["aider · écouter · attendre · remercier", "ayudar · escuchar · esperar · agradecer", "verbos con COD"],
        ["Je lui parle. · lui", "Le hablo.", "COI"],
        ["Je lui ai téléphoné.", "La llamé.", "COI"],
        ["Je leur ai répondu. · Je leur souris. · leur", "Les respondí. · Les sonrío.", "COI"],
        ["Je lui obéis.", "La obedezco.", "COI"],
        ["parler à · téléphoner à · répondre à · ressembler à", "hablar · llamar · responder · parecerse", "verbos con COI"],
        ["Cette robe me plaît.", "Este vestido me gusta.", "plaire à"]
      ]],
      ej: [["Tu connais Paul ? Oui, je le connais bien.", "¿Conoces a Paul? Sí, lo conozco bien."], ["J'ai écrit à mes parents. Je leur ai écrit hier.", "Escribí a mis padres. Les escribí ayer."], ["Cette robe me plaît beaucoup.", "Este vestido me gusta mucho."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je la téléphone.", "Je lui téléphone.", "téléphoner à → COI lui."], ["Je leurs rends visite.", "Je leur rends visite.", "Leur pronombre: sin s."], ["Je lui aide.", "Je l'aide.", "aider + COD."]] }
  ],
  ejemplos: [
    { sit: "«Le hablo a mi vecino.»", resp: "Je lui parle.", pasos: ["parler à → lui."], porque: "COI." },
    { sit: "«Invito a mis amigos.»", resp: "Je les invite.", pasos: ["inviter + COD → les."], porque: "COD." },
    { sit: "«Les respondí a mis profesores.»", resp: "Je leur ai répondu.", pasos: ["répondre à → leur."], porque: "COI." }
  ],
  comprueba: [
    { q: "Con téléphoner à se usa…", o: ["lui", "la"], a: 0, b: "gr", porque: "COI." },
    { q: "Con aider se usa…", o: ["le / la / les", "lui / leur"], a: 0, b: "gr", porque: "COD." },
    { q: "Leur como pronombre…", o: ["no lleva s", "lleva s en plural"], a: 0, b: "gr", porque: "Invariable." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cc-cod", "b1cc-coi"], k: "sort", ask: "¿COD o COI?", q: "Clasifica.", cats: ["COD (le/la/les)", "COI (lui/leur)"], items: [["aider", 0], ["écouter", 0], ["attendre", 0], ["remercier", 0], ["parler à", 1], ["téléphoner à", 1], ["répondre à", 1], ["ressembler à", 1]], pista: "¿Lleva à?", why: "Tipos de verbo." },
    { fase: "guiada", c: ["b1cc-coi"], k: "choice", ask: "«Le hablo a mi vecino.»", q: "«Je parle à mon voisin. → Je ___ parle.»", o: ["lui", "le"], a: 0, pista: "parler à.", why: "<b>lui</b>." },
    { fase: "guiada", c: ["b1cc-cod"], k: "choice", ask: "«Invito a mis amigos.»", q: "«J'invite mes amis. → Je ___ invite.»", o: ["les", "leur"], a: 0, pista: "inviter + COD.", why: "<b>les</b>." },
    { fase: "indep", c: ["b1cc-coi"], k: "choice", ask: "«Les respondí a mis profesores.»", q: "«___»", o: ["Je leur ai répondu.", "Je les ai répondu."], a: 0, why: "<b>leur</b>." },
    { fase: "indep", c: ["b1cc-cod"], k: "fill", ask: "Pronombre para la télé.", q: "Tu regardes la télé ? Oui, je ___ regarde.", acc: ["la"], why: "<b>la</b>." },
    { fase: "indep", c: ["b1cc-coi"], k: "fill", ask: "Pronombre para ta mère.", q: "Tu as téléphoné à ta mère ? Oui, je ___ ai téléphoné.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "aplica", c: ["b1cc-cod", "b1cc-coi"], k: "match", ask: "Une cada frase con su forma con pronombre.", q: "Frase → pronombre", pairs: [["J'aide mes voisins.", "Je les aide."], ["Je souris à mes voisins.", "Je leur souris."], ["J'écoute ma mère.", "Je l'écoute."], ["J'obéis à ma mère.", "Je lui obéis."]], why: "COD / COI." },
    { fase: "aplica", c: ["b1cc-coi"], k: "spot", ask: "Encuentra el error.", s: "Mes grands-parents ? Je [leurs] rends visite chaque dimanche .", fix: "leur", why: "<b>leur</b>." },
    { fase: "dominio", c: ["b1cc-coi"], k: "order", ask: "Ordena: «Se lo dije ayer (a él)».", tokens: ["Je lui", "ai dit", "hier."], why: "<b>Je lui ai dit hier.</b>" },
    { fase: "dominio", c: ["b1cc-cod"], k: "choice", ask: "«¿Conoces a Paul? Sí, lo conozco bien.»", q: "«Oui, je ___ connais bien.»", o: ["le", "lui"], a: 0, why: "<b>le</b>." },
    { fase: "dominio", c: ["b1cc-cod", "b1cc-coi"], k: "listen", say: "Tu as vu Claire ? Oui, je l'ai vue et je lui ai parlé.", acc: ["Tu as vu Claire ? Oui, je l'ai vue et je lui ai parlé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu as vu Claire ? Oui, je l'ai vue et je lui ai parlé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Claire", "Paul"], previo: [] }
};

E["b11-pronom-y"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le pronom y : lieu et verbes avec à",
  objetivo: {
    que: "Vas a usar y para un lugar o una cosa introducida por à, y el pronombre tónico para personas.",
    corto: "J'y vais. · J'y pense. · Je pense à elle.",
    podras: ["Reemplazar un lugar con y: j'y vais, j'y habite.", "Reemplazar una cosa con à: j'y pense, j'y ai réfléchi.", "Usar el pronombre tónico para personas: je pense à elle; y las expresiones on y va, ça y est, vas-y."],
    iconos: ["ic2/mundo", "ic2/bombilla", "ic2/rayo"],
    previos: ["El pronombre y (A2, lección 11)."],
    capacidad: "Ahora evitas repetir lugares y cosas."
  },
  requiere: R("y-lieu", "y-pers"), recupera: ["y-lieu"],
  conceptos: {
    "b1y-lieu": { n: "y = lugar (à, en, dans, chez…) o cosa con à (penser à l'examen → j'y pense)", b: "gr" },
    "b1y-pers": { n: "personas con penser à, tenir à: pronombre tónico (je pense à elle); expresiones con y", b: "gr" }
  },
  video: {
    titulo: "El pronombre y", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "j'y vais", seg: [
        { es: "Hola. Y reemplaza un lugar o una cosa con à." } ] },
      { v: "frase", filas: [
          { nota: "lugar", p: 1, partes: [["Tu vas au marché ? Oui, j'y vais.", "-", 1]] },
          { nota: "cosa con à", p: 2, partes: [["Je pense à mon examen. J'y pense.", "-", 2]] },
          { nota: "persona", p: 3, partes: [["Je pense à ma mère. Je pense à elle.", "-", 3]] } ], seg: [
        { fr: "Oui, j'y vais.", p: 1 }, { fr: "J'y pense.", p: 2 }, { es: "Con personas, no: pronombre tónico.", p: 3 }, { fr: "Je pense à elle.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿El museo? Fuimos el domingo.»", o: ["Le musée ? Nous y sommes allés dimanche.", "Le musée ? Nous en sommes allés dimanche."], a: 0,
        bien: "¡Sí! Lugar: y.", mal: "Para un lugar: y.",
        seg: [ { es: "Pausa. Fuimos allí." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'y vais", "j'y pense", "on y va !", "ça y est !", "vas-y !"], seg: [
        { es: "Persona: pienso en ella, je pense à elle.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Marsella", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo hablan de ciudades y planes.",
    pj: PJ,
    lineas: [
      ["camila", "Tu connais Marseille ?", "¿Conoces Marsella?"],
      ["hugo", "Oui, j'y ai vécu pendant trois ans. Et toi, tu es déjà allée au Japon ?", "Sí, viví allí durante tres años. ¿Y tú ya fuiste a Japón?"],
      ["camila", "Non, je n'y suis jamais allée. Tu as réfléchi à ma proposition ?", "No, nunca he ido. ¿Pensaste en mi propuesta?"],
      ["hugo", "Oui, j'y ai réfléchi. Je pense à toi pour le projet. Allez, on y va !", "Sí, lo pensé. Pienso en ti para el proyecto. ¡Vamos, nos vamos!"]
    ],
    fijate: "Fíjate: j'y ai vécu, je n'y suis jamais allée (lugar); j'y ai réfléchi (cosa); je pense à toi (persona); on y va."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuándo usar y",
      idea: "Lugar (introducido por à, en, dans, chez…): Tu vas au marché ? Oui, j'y vais. Cosa introducida por à: penser à, réfléchir à, s'intéresser à, participer à, répondre à (un mail): J'y pense. Para personas con penser à o tenir à se usa el pronombre tónico: Je pense à elle (no j'y pense). Expresiones: Vas-y ! (¡adelante!), On y va ! (¡vamos!), Je n'y peux rien (no puedo hacer nada), Ça y est ! (¡ya está!).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["j'y vais · y", "voy allí", "lugar"],
        ["j'y habite depuis deux ans", "vivo allí desde hace dos años", "lugar"],
        ["je n'y suis jamais allé", "nunca he ido", "lugar"],
        ["aller à la plage · être chez le dentiste", "ir a la playa · estar donde el dentista", "lugar → y"],
        ["je m'y intéresse · j'y ai participé · j'y ai réfléchi", "me interesa · participé · lo pensé", "cosa con à"],
        ["penser à l'avenir · répondre à un mail", "pensar en el futuro · responder un correo", "cosa → y"],
        ["je pense à lui · je pense à elle", "pienso en él · pienso en ella", "persona: tónico"],
        ["penser à Julie · tenir à mon père · s'intéresser à ce chanteur · faire attention aux enfants", "pensar en Julie · querer a mi papá · interesarse en ese cantante · cuidar a los niños", "persona → no y"],
        ["On y va ! · Ça y est ! · Vas-y !", "¡Vamos! · ¡Ya está! · ¡Adelante!", "expresiones"],
        ["Je n'y peux rien.", "No puedo hacer nada.", "expresión"]
      ]],
      ej: [["Tu habites à Lyon ? Oui, j'y habite depuis deux ans.", "¿Vives en Lyon? Sí, vivo allí desde hace dos años."], ["Tu as réfléchi à ma proposition ? Oui, j'y ai réfléchi.", "¿Pensaste en mi propuesta? Sí, lo pensé."], ["On y va ?", "¿Nos vamos?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je pense à ma mère → J'y pense.", "Je pense à elle.", "Con personas, penser à + pronombre tónico."], ["Le musée ? Nous en sommes allés dimanche.", "Le musée ? Nous y sommes allés dimanche.", "Lugar: y."], ["Je ne suis y jamais allé.", "Je n'y suis jamais allé.", "Y va delante del auxiliar."]] }
  ],
  ejemplos: [
    { sit: "«¿Vas a la biblioteca? Sí, voy.»", resp: "Oui, j'y vais.", pasos: ["Lugar → y."], porque: "Lugar." },
    { sit: "«¿Te interesa la política? Sí.»", resp: "Oui, je m'y intéresse.", pasos: ["s'intéresser à + cosa → y."], porque: "Cosa." },
    { sit: "«¿Piensas en tu hermano? Sí.»", resp: "Oui, je pense à lui.", pasos: ["Persona → tónico."], porque: "No y." }
  ],
  comprueba: [
    { q: "Y reemplaza…", o: ["un lugar o una cosa con à", "una persona con à"], a: 0, b: "gr", porque: "Lugar y cosa." },
    { q: "«Pienso en ella» se dice…", o: ["Je pense à elle.", "J'y pense."], a: 0, b: "gr", porque: "Persona." },
    { q: "«¡Ya está!» se dice…", o: ["Ça y est !", "Vas-y !"], a: 0, b: "gr", porque: "Expresión." }
  ],
  practica: [
    { fase: "guiada", c: ["b1y-lieu", "b1y-pers"], k: "sort", ask: "¿Se puede usar y?", q: "Clasifica.", cats: ["Sí (lugar o cosa)", "No (persona)"], items: [["aller à la plage", 0], ["penser à l'avenir", 0], ["répondre à un mail", 0], ["être chez le dentiste", 0], ["penser à Julie", 1], ["tenir à mon père", 1], ["s'intéresser à ce chanteur", 1], ["faire attention aux enfants", 1]], pista: "¿Persona?", why: "y." },
    { fase: "guiada", c: ["b1y-lieu"], k: "choice", ask: "«¿Vas a la biblioteca? Sí, voy.»", q: "«Oui, j'___ vais.»", o: ["y", "en"], a: 0, pista: "Lugar.", why: "<b>y</b>." },
    { fase: "guiada", c: ["b1y-lieu"], k: "choice", ask: "«¿Te interesa la política? Sí.»", q: "«Oui, je m'___ intéresse.»", o: ["y", "en"], a: 0, pista: "s'intéresser à.", why: "<b>y</b>." },
    { fase: "indep", c: ["b1y-pers"], k: "choice", ask: "«¿Piensas en tu hermano? Sí…»", q: "«Oui, ___»", o: ["je pense à lui.", "j'y pense."], a: 0, why: "Persona: <b>à lui</b>." },
    { fase: "indep", c: ["b1y-lieu"], k: "fill", ask: "Pronombre para au Japon.", q: "Tu es déjà allé au Japon ? Non, je n'___ suis jamais allé.", acc: ["y"], why: "<b>n'y</b>." },
    { fase: "indep", c: ["b1y-lieu"], k: "fill", ask: "Pronombre para au concours.", q: "Tu as participé au concours ? Oui, j'___ ai participé.", acc: ["y"], why: "<b>y</b>." },
    { fase: "aplica", c: ["b1y-pers"], k: "match", ask: "Une cada expresión con su sentido.", q: "Expresión → sentido", pairs: [["On y va !", "¡Vamos!"], ["Ça y est !", "¡Ya está!"], ["Je n'y peux rien.", "No puedo hacer nada."], ["Vas-y !", "¡Adelante!"]], why: "Expresiones con y." },
    { fase: "aplica", c: ["b1y-lieu"], k: "spot", ask: "Encuentra el error.", s: "Le musée ? Nous [en] sommes allés dimanche dernier .", fix: "y", why: "<b>y</b>." },
    { fase: "dominio", c: ["b1y-lieu"], k: "order", ask: "Ordena: «Nunca he ido».", tokens: ["Je n'y", "suis jamais", "allé."], why: "<b>Je n'y suis jamais allé.</b>" },
    { fase: "dominio", c: ["b1y-lieu", "b1y-pers"], k: "choice", ask: "«¿Pensaste en mi propuesta? Sí, lo pensé.»", q: "«Oui, j'___ ai réfléchi.»", o: ["y", "en", "le"], a: 0, why: "<b>y</b>." },
    { fase: "dominio", c: ["b1y-lieu", "b1y-pers"], k: "listen", say: "Tu connais Marseille ? Oui, j'y ai vécu pendant trois ans.", acc: ["Tu connais Marseille ? Oui, j'y ai vécu pendant trois ans.", "Tu connais Marseille ? Oui, j'y ai vécu pendant 3 ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu connais Marseille ? Oui, j'y ai vécu pendant trois ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marseille", "Lyon", "Julie"], previo: [] }
};

E["b11-pronom-en"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le pronom en : quantité et verbes avec de",
  objetivo: {
    que: "Vas a usar en para cantidades, partitivos y verbos con de.",
    corto: "J'en veux. · J'en ai trois. · J'en ai besoin.",
    podras: ["Reemplazar un partitivo: Tu veux du café ? Oui, j'en veux.", "Reemplazar una cantidad y repetir el número: j'en ai deux.", "Reemplazar un complemento con de: j'en ai besoin, j'en parle."],
    iconos: ["ic2/croissant", "ic2/moneda", "ic2/bombilla"],
    previos: ["El pronombre en (A2, lección 12) y las cantidades (A2, lección 66)."],
    capacidad: "Ahora hablas de cantidades sin repetir."
  },
  requiere: R("en-part", "en-qte", "qt-nom"), recupera: ["en-qte"],
  conceptos: {
    "b1en-qte": { n: "en = partitivo o cantidad; el número va al final (j'en ai trois)", b: "gr" },
    "b1en-de": { n: "en = complemento con de: parler de, avoir besoin de, avoir envie de", b: "gr" }
  },
  video: {
    titulo: "El pronombre en", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/croissant", grande: "j'en ai deux", seg: [
        { es: "Hola. En reemplaza todo lo que va con de." } ] },
      { v: "frase", filas: [
          { nota: "partitivo", p: 1, partes: [["Tu veux du café ? Oui, j'en veux.", "-", 1]] },
          { nota: "cantidad", p: 2, partes: [["J'ai trois frères. J'en ai trois.", "-", 2]] },
          { nota: "verbo con de", p: 3, partes: [["J'ai besoin de mon ordinateur. J'en ai besoin.", "-", 3]] } ], seg: [
        { fr: "Oui, j'en veux.", p: 1 }, { fr: "J'en ai trois.", p: 2 }, { fr: "J'en ai besoin.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Tomates? Sí, compré un kilo.»", o: ["Des tomates ? Oui, j'en ai acheté un kilo.", "Des tomates ? Oui, je les ai acheté un kilo."], a: 0,
        bien: "¡Sí! Cantidad: en.", mal: "Con una cantidad: en.",
        seg: [ { es: "Pausa. Compré un kilo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'en veux", "j'en ai deux", "il y en a beaucoup", "je n'en ai pas", "j'en ai besoin"], seg: [
        { es: "En delante del verbo, el número al final.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El desayuno", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo preparan el desayuno.",
    pj: PJ,
    lineas: [
      ["hugo", "Des croissants ? J'en ai pris quatre pour le petit-déjeuner.", "¿Croissants? Compré cuatro para el desayuno."],
      ["camila", "Super ! Du sucre ? Il n'y en a plus.", "¡Súper! ¿Azúcar? Ya no hay."],
      ["hugo", "Tu as besoin de ton ordinateur ? Moi, j'en ai besoin ce matin.", "¿Necesitas tu computador? Yo lo necesito esta mañana."],
      ["camila", "Prends-le. Tu as envie de sortir ? J'en ai envie, il y en a beaucoup, des choses à faire !", "Tómalo. ¿Tienes ganas de salir? Yo sí, ¡hay muchas cosas por hacer!"]
    ],
    fijate: "Fíjate: j'en ai pris quatre (cantidad), il n'y en a plus (partitivo), j'en ai besoin, j'en ai envie (verbo con de)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Usos de en",
      idea: "Partitivo (du, de la, des): Tu manges de la viande ? Non, je n'en mange pas. Cantidad: se repite el número o la cantidad al final: J'en ai deux. Il y en a beaucoup. Verbos con de: parler de, avoir besoin de, avoir envie de, s'occuper de: J'en ai besoin. Procedencia: Tu viens de la gare ? Oui, j'en viens. En va delante del verbo conjugado. Con un artículo definido (le, la, les) se usa el COD, no en.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'en ai deux. · en", "Tengo dos.", "cantidad"],
        ["J'en ai beaucoup. · Il y en a beaucoup.", "Tengo muchos. · Hay muchos.", "cantidad"],
        ["J'en ai acheté trois. · J'en ai pris quatre.", "Compré tres. · Tomé cuatro.", "cantidad"],
        ["J'en bois. · J'en veux.", "Bebo. · Quiero.", "partitivo"],
        ["Je n'en ai pas. · Non, je n'en veux pas.", "No tengo. · No, no quiero.", "partitivo negativo"],
        ["Il n'y en a plus.", "Ya no hay.", "partitivo"],
        ["J'en ai besoin. · J'en ai envie.", "Lo necesito. · Tengo ganas.", "verbo con de"],
        ["J'en parle souvent.", "Hablo de eso a menudo.", "parler de"],
        ["Tu veux de la soupe ? · Tu as des frères ? · Tu parles de ce film ? · Tu achètes trois pommes ?", "¿Quieres sopa? · ¿Tienes hermanos? · ¿Hablas de esa película? · ¿Compras tres manzanas?", "→ en"],
        ["Tu veux la soupe ? · Tu vois tes frères ? · Tu regardes ce film ? · Tu achètes ces pommes ?", "¿Quieres la sopa? · ¿Ves a tus hermanos? · ¿Ves esa película? · ¿Compras esas manzanas?", "→ le / la / les"]
      ]],
      ej: [["Des livres ? J'en ai acheté trois.", "¿Libros? Compré tres."], ["Tu as besoin de ton ordinateur ? Oui, j'en ai besoin.", "¿Necesitas tu computador? Sí, lo necesito."], ["Il y en a encore ?", "¿Queda todavía?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai en deux.", "J'en ai deux.", "En va delante del verbo; la cantidad, al final."], ["Des tomates ? Oui, je les ai acheté un kilo.", "Des tomates ? Oui, j'en ai acheté un kilo.", "Cantidad → en."], ["Je n'ai en pas.", "Je n'en ai pas.", "Ne en → n'en, delante del verbo."]] }
  ],
  ejemplos: [
    { sit: "«¿Tienes hijos? Sí, tengo dos.»", resp: "Oui, j'en ai deux.", pasos: ["en + número al final."], porque: "Cantidad." },
    { sit: "«¿Quieres pan? No, no quiero.»", resp: "Non, je n'en veux pas.", pasos: ["Partitivo negativo."], porque: "Partitivo." },
    { sit: "«¿Tienes ganas de salir? Sí.»", resp: "Oui, j'en ai envie.", pasos: ["avoir envie de → en."], porque: "Verbo con de." }
  ],
  comprueba: [
    { q: "En reemplaza…", o: ["un complemento con de o una cantidad", "una persona con à"], a: 0, b: "gr", porque: "de." },
    { q: "«Tengo tres» se dice…", o: ["J'en ai trois.", "J'ai en trois."], a: 0, b: "gr", porque: "Orden." },
    { q: "Con «Tu veux la soupe ?» se responde con…", o: ["la", "en"], a: 0, b: "gr", porque: "Artículo definido." }
  ],
  practica: [
    { fase: "guiada", c: ["b1en-qte", "b1en-de"], k: "sort", ask: "¿Se responde con en o con le / la / les?", q: "Clasifica.", cats: ["en", "le / la / les"], items: [["Tu veux de la soupe ?", 0], ["Tu as des frères ?", 0], ["Tu parles de ce film ?", 0], ["Tu achètes trois pommes ?", 0], ["Tu veux la soupe ?", 1], ["Tu vois tes frères ?", 1], ["Tu regardes ce film ?", 1], ["Tu achètes ces pommes ?", 1]], pista: "¿de / cantidad o artículo definido?", why: "en / COD." },
    { fase: "guiada", c: ["b1en-qte"], k: "choice", ask: "«¿Tienes hijos? Sí, tengo dos.»", q: "«Oui, j'___ ai deux.»", o: ["en", "les"], a: 0, pista: "Cantidad.", why: "<b>en</b>." },
    { fase: "guiada", c: ["b1en-de"], k: "choice", ask: "«¿Tienes ganas de salir? Sí.»", q: "«Oui, j'___ ai envie.»", o: ["en", "y"], a: 0, pista: "avoir envie de.", why: "<b>en</b>." },
    { fase: "indep", c: ["b1en-qte"], k: "choice", ask: "«¿Quieres pan? No, no quiero.»", q: "«___»", o: ["Non, je n'en veux pas.", "Non, je ne le veux pas."], a: 0, why: "Partitivo: <b>n'en</b>." },
    { fase: "indep", c: ["b1en-qte"], k: "fill", ask: "Pronombre para du sucre.", q: "Du sucre ? Il n'y ___ a plus.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["b1en-de"], k: "fill", ask: "Pronombre para de ton travail.", q: "Tu parles souvent de ton travail ? Oui, j'___ parle souvent.", acc: ["en"], why: "<b>en</b>." },
    { fase: "aplica", c: ["b1en-qte", "b1en-de"], k: "match", ask: "Une cada frase con su forma con en.", q: "Frase → en", pairs: [["J'ai beaucoup d'amis.", "J'en ai beaucoup."], ["Je bois de l'eau.", "J'en bois."], ["Je n'ai pas de voiture.", "Je n'en ai pas."], ["J'ai besoin d'aide.", "J'en ai besoin."]], why: "en." },
    { fase: "aplica", c: ["b1en-qte"], k: "spot", ask: "Encuentra el error.", s: "Des tomates ? Oui , j'[les] ai acheté un kilo .", fix: "en", why: "<b>j'en ai acheté</b>." },
    { fase: "dominio", c: ["b1en-qte"], k: "order", ask: "Ordena: «Hay muchos».", tokens: ["Il y", "en a", "beaucoup."], why: "<b>Il y en a beaucoup.</b>" },
    { fase: "dominio", c: ["b1en-de"], k: "choice", ask: "«¿Necesitas tu computador? Sí, lo necesito.»", q: "«Oui, j'___ ai besoin.»", o: ["en", "le"], a: 0, why: "<b>en</b>." },
    { fase: "dominio", c: ["b1en-qte", "b1en-de"], k: "listen", say: "Des croissants ? J'en ai pris quatre pour le petit-déjeuner.", acc: ["Des croissants ? J'en ai pris quatre pour le petit-déjeuner.", "Des croissants ? J'en ai pris 4 pour le petit-déjeuner."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Des croissants ? J'en ai pris quatre pour le petit-déjeuner.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-pronoms-infinitif"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La place des pronoms avec un infinitif et un double verbe",
  objetivo: {
    que: "Vas a colocar el pronombre delante del infinitivo cuando hay dos verbos.",
    corto: "Je vais le faire. · Je peux t'aider.",
    podras: ["Poner el pronombre delante del infinitivo: je veux la voir.", "Poner la negación alrededor del verbo conjugado: je ne vais pas le faire.", "Recordar la excepción de faire, laisser, voir: je le fais réparer."],
    iconos: ["ic2/lapiz", "ic2/engranaje", "ic2/bombilla"],
    previos: ["COD y COI (lección 29), y (lección 30) y en (lección 31)."],
    capacidad: "Ahora tus pronombres van siempre en su sitio."
  },
  requiere: R("b1cc-cod", "b1cc-coi", "b1y-lieu", "b1en-qte"), recupera: ["b1cc-coi"],
  conceptos: {
    "b1pi-place": { n: "verbo conjugado + pronombre + infinitivo: je vais le faire; ne… pas alrededor del conjugado", b: "gr" },
    "b1pi-exc": { n: "excepción: faire, laisser, voir, entendre → pronombre delante del primer verbo (je le fais réparer)", b: "gr" }
  },
  video: {
    titulo: "Dos verbos, un pronombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "je vais le faire", seg: [
        { es: "Hola. El pronombre se pega al verbo que lo necesita: el infinitivo." } ] },
      { v: "frase", filas: [
          { nota: "regla", p: 1, partes: [["Je vais le faire.", "-", 1]] },
          { nota: "negación", p: 2, partes: [["Je ne peux pas t'aider.", "-", 2]] },
          { nota: "excepción", p: 3, partes: [["Je la fais réparer.", "-", 3]] } ], seg: [
        { fr: "Je vais le faire.", p: 1 }, { fr: "Je ne peux pas t'aider.", p: 2 }, { es: "Con faire, delante del primero:", p: 3 }, { fr: "Je la fais réparer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Tu hermana? Voy a llamarla esta noche.»", o: ["Ta sœur ? Je vais lui téléphoner ce soir.", "Ta sœur ? Je vais la téléphoner ce soir."], a: 0,
        bien: "¡Sí! Téléphoner à: lui, delante del infinitivo.", mal: "téléphoner à → lui.",
        seg: [ { es: "Pausa. Llamarla." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je vais le faire", "je peux t'aider", "tu dois y aller", "on peut en boire", "je le fais réparer"], seg: [
        { es: "Con dos verbos, el pronombre va con el segundo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El libro", img: "bg-biblioteca", yo: "camila",
    escena: "Camila recomienda un libro a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Ce livre est génial, tu dois absolument le lire.", "Este libro es genial, tienes que leerlo sí o sí."],
      ["hugo", "D'accord, je vais l'acheter. Mais je ne peux pas t'aider maintenant.", "De acuerdo, voy a comprarlo. Pero no puedo ayudarte ahora."],
      ["camila", "Pas de problème. Paris ? Nous allons y aller en mai. Ton frère, je dois lui téléphoner ce soir.", "No hay problema. ¿París? Vamos a ir en mayo. A tu hermano tengo que llamarlo esta noche."],
      ["hugo", "Et ma voiture ? Je la fais réparer demain.", "¿Y mi carro? Lo mando a arreglar mañana."]
    ],
    fijate: "Fíjate: dois le lire, vais l'acheter, peux pas t'aider, allons y aller, dois lui téléphoner; pero je la fais réparer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dónde va el pronombre",
      idea: "Verbo conjugado + pronombre + infinitivo: Je veux la voir. Je peux t'aider. Tu dois y aller. On peut en boire. La negación rodea el verbo conjugado: Je ne vais pas le faire. Excepción: con faire, laisser y los verbos de percepción (voir, entendre), el pronombre va delante del primer verbo: Je le fais réparer, je la fais venir. En passé composé + infinitivo: J'ai voulu lui parler.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je vais le faire. · Je vais l'appeler.", "Voy a hacerlo. · Voy a llamarla.", "delante del infinitivo"],
        ["Je veux l'acheter. · Je veux la voir.", "Quiero comprarlo. · Quiero verla.", "delante del infinitivo"],
        ["Il va lui parler. · Je dois lui téléphoner. · lui", "Va a hablarle. · Tengo que llamarlo.", "COI"],
        ["On peut en boire. · Tu veux en prendre ?", "Se puede beber. · ¿Quieres tomar?", "en"],
        ["Tu dois y aller. · Nous allons y aller. · y", "Tienes que ir. · Vamos a ir.", "y"],
        ["Je ne veux pas le voir. · Je ne peux pas y aller.", "No quiero verlo. · No puedo ir.", "negación"],
        ["Je la fais réparer. · la fais réparer", "La mando a arreglar.", "excepción: faire"],
        ["Je la fais venir.", "La hago venir.", "excepción"],
        ["J'ai voulu lui parler.", "Quise hablarle.", "passé composé"]
      ]],
      ej: [["Ce film, je vais le voir ce soir.", "Esa película la voy a ver esta noche."], ["Je ne peux pas t'aider maintenant.", "No puedo ayudarte ahora."], ["Ma voiture ? Je la fais réparer.", "¿Mi carro? Lo mando a arreglar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je le vais faire.", "Je vais le faire.", "El pronombre va con el infinitivo."], ["Je ne peux y pas aller.", "Je ne peux pas y aller.", "La negación rodea el verbo conjugado."], ["Je fais la venir.", "Je la fais venir.", "Con faire, delante del primer verbo."]] }
  ],
  ejemplos: [
    { sit: "«Voy a llamarla.»", resp: "Je vais l'appeler.", pasos: ["Pronombre delante de appeler."], porque: "Infinitivo." },
    { sit: "«No quiero verlo.»", resp: "Je ne veux pas le voir.", pasos: ["ne… pas alrededor de veux."], porque: "Negación." },
    { sit: "«Mando a arreglar mi bici.»", resp: "Je la fais réparer.", pasos: ["Excepción de faire."], porque: "Delante del primero." }
  ],
  comprueba: [
    { q: "Con dos verbos, el pronombre va delante…", o: ["del infinitivo", "del verbo conjugado"], a: 0, b: "gr", porque: "Je vais le faire." },
    { q: "La negación rodea…", o: ["el verbo conjugado", "el infinitivo"], a: 0, b: "gr", porque: "Je ne vais pas le faire." },
    { q: "Con faire + infinitivo, el pronombre va…", o: ["delante de faire", "delante del infinitivo"], a: 0, b: "gr", porque: "Je le fais réparer." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pi-place", "b1pi-exc"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Je vais le faire.", 0], ["Je ne peux pas y aller.", 0], ["Je la fais venir.", 0], ["Tu veux en prendre ?", 0], ["Je le vais faire.", 1], ["Je ne peux y pas aller.", 1], ["Je fais la venir.", 1], ["Tu en veux prendre ?", 1]], pista: "¿Junto al infinitivo?", why: "Posición." },
    { fase: "guiada", c: ["b1pi-place"], k: "choice", ask: "«Voy a llamarla.»", q: "«___»", o: ["Je vais l'appeler.", "Je la vais appeler."], a: 0, pista: "Delante del infinitivo.", why: "<b>Je vais l'appeler</b>." },
    { fase: "guiada", c: ["b1pi-place"], k: "choice", ask: "«No quiero verlo.»", q: "«___»", o: ["Je ne veux pas le voir.", "Je ne le veux pas voir."], a: 0, pista: "Negación alrededor de veux.", why: "<b>Je ne veux pas le voir</b>." },
    { fase: "indep", c: ["b1pi-exc"], k: "choice", ask: "«La mando a arreglar» (la bici).", q: "«Je ___.»", o: ["la fais réparer", "fais la réparer"], a: 0, why: "<b>la fais réparer</b>." },
    { fase: "indep", c: ["b1pi-place"], k: "fill", ask: "Pronombre para ton frère.", q: "Ton frère ? Je dois ___ téléphoner ce soir.", acc: ["lui"], why: "<b>lui</b>." },
    { fase: "indep", c: ["b1pi-place"], k: "fill", ask: "Pronombre para Paris.", q: "Paris ? Nous allons ___ aller en mai.", acc: ["y"], why: "<b>y</b>." },
    { fase: "aplica", c: ["b1pi-place"], k: "match", ask: "Une cada frase con su forma con pronombre.", q: "Frase → pronombre", pairs: [["Je veux acheter ce livre.", "Je veux l'acheter."], ["Il va parler à Luc.", "Il va lui parler."], ["On peut boire du café.", "On peut en boire."], ["Tu dois aller à la poste.", "Tu dois y aller."]], why: "Posición." },
    { fase: "aplica", c: ["b1pi-place"], k: "spot", ask: "Encuentra el error.", s: "Ta sœur ? Je vais [la] téléphoner ce soir .", fix: "lui", why: "<b>lui téléphoner</b>." },
    { fase: "dominio", c: ["b1pi-place"], k: "order", ask: "Ordena: «Puedo ayudarte».", tokens: ["Je peux", "t'", "aider."], why: "<b>Je peux t'aider.</b>" },
    { fase: "dominio", c: ["b1pi-place", "b1pi-exc"], k: "choice", ask: "«Esa película la voy a ver esta noche.»", q: "«Ce film, je vais ___ voir ce soir.»", o: ["le", "lui"], a: 0, why: "<b>le voir</b>." },
    { fase: "dominio", c: ["b1pi-place", "b1pi-exc"], k: "listen", say: "Ce livre est génial, tu dois absolument le lire.", acc: ["Ce livre est génial, tu dois absolument le lire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce livre est génial, tu dois absolument le lire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Luc", "Paris"], previo: [] }
};

/* ───── B1.1·7 · Relativos y pronombres neutros ───── */
E["b11-relatifs-composes"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Lequel, auquel, duquel : les relatifs composés",
  objetivo: {
    que: "Vas a usar lequel, auquel y duquel después de una preposición.",
    corto: "la raison pour laquelle · le projet auquel je pense.",
    podras: ["Usar preposición + lequel / laquelle / lesquels / lesquelles para cosas.", "Contraer à + lequel en auquel y de + lequel en duquel.", "Preferir preposición + qui para personas: l'ami avec qui je voyage."],
    iconos: ["ic2/libro", "ic2/engranaje", "ic2/lapiz"],
    previos: ["Los relativos qui, que, où, dont (lección 4)."],
    capacidad: "Ahora construyes frases relativas complejas."
  },
  requiere: R("b1rel-quique", "b1rel-oudont"), recupera: ["b1rel-oudont"],
  conceptos: {
    "b1rc2-lequel": { n: "preposición + lequel / laquelle / lesquels / lesquelles (concuerda con el antecedente)", b: "gr" },
    "b1rc2-contr": { n: "à + lequel = auquel, auxquels, auxquelles; de + lequel = duquel; personas: prep. + qui", b: "gr" }
  },
  video: {
    titulo: "Relativos compuestos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "auquel · duquel", seg: [
        { es: "Hola. Después de una preposición, lequel y sus formas." } ] },
      { v: "frase", filas: [
          { nota: "pour + laquelle", p: 1, partes: [["la raison pour laquelle je suis parti", "-", 1]] },
          { nota: "à + lequel", p: 2, partes: [["le concours auquel j'ai participé", "-", 2]] },
          { nota: "près de + lequel", p: 3, partes: [["le parc près duquel j'habite", "-", 3]] } ], seg: [
        { fr: "la raison pour laquelle je suis parti", p: 1 }, { fr: "le concours auquel j'ai participé", p: 2 }, { fr: "le parc près duquel j'habite", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El proyecto en el que trabajo…»", o: ["Le projet auquel je travaille…", "Le projet à lequel je travaille…"], a: 0,
        bien: "¡Sí! à + lequel = auquel.", mal: "à + lequel se contrae: auquel.",
        seg: [ { es: "Pausa. En el que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["lequel", "laquelle", "auquel", "auxquels", "duquel", "avec qui"], seg: [
        { es: "À laquelle no se contrae.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El proyecto", img: "bg-universidad", yo: "camila",
    escena: "Camila explica su proyecto a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "C'est le projet sur lequel je travaille. Le concours auquel j'ai participé était difficile.", "Es el proyecto en el que trabajo. El concurso en el que participé era difícil."],
      ["hugo", "Et la raison pour laquelle tu as changé de sujet ?", "¿Y la razón por la que cambiaste de tema?"],
      ["camila", "C'est une question à laquelle je ne sais pas répondre ! L'ami avec qui je voyage m'a aidée.", "¡Es una pregunta que no sé responder! El amigo con el que viajo me ayudó."],
      ["hugo", "Le musée près duquel nous habitons est fermé, d'ailleurs.", "Por cierto, el museo cerca del cual vivimos está cerrado."]
    ],
    fijate: "Fíjate: sur lequel, auquel, pour laquelle, à laquelle, avec qui (persona), près duquel."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Lequel y sus formas",
      idea: "Tras una preposición, para cosas: lequel, laquelle, lesquels, lesquelles, que concuerdan con el antecedente: la table sur laquelle, le stylo avec lequel. Con à se contrae: auquel, auxquels, auxquelles (à laquelle no se contrae). Con de tras una locución (près de, à côté de, au milieu de): duquel, desquels: le parc près duquel j'habite. Para personas se prefiere preposición + qui: l'ami avec qui je voyage.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["sur lequel · dans lequel · lequel", "sobre el cual · en el cual", "masculino"],
        ["sur laquelle · dans laquelle · laquelle", "sobre la cual · en la cual", "femenino"],
        ["La chaise sur laquelle je suis assis…", "La silla en la que estoy sentado…", "femenino"],
        ["auquel · auxquels · auxquelles", "al cual · a los cuales · a las cuales", "à + lequel"],
        ["à laquelle", "a la cual", "sin contracción"],
        ["duquel · près duquel · à côté duquel", "del cual · cerca del cual · al lado del cual", "de + lequel"],
        ["à côté de laquelle", "al lado de la cual", "femenino"],
        ["L'ami avec qui je voyage…", "El amigo con el que viajo…", "persona"]
      ]],
      ej: [["C'est la raison pour laquelle je suis parti.", "Es la razón por la que me fui."], ["Le concours auquel j'ai participé était difficile.", "El concurso en el que participé era difícil."], ["Voici la maison à côté de laquelle j'habite.", "Esta es la casa al lado de la cual vivo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le projet à lequel je travaille.", "Le projet auquel je travaille.", "À + lequel se contrae en auquel."], ["la raison pour lequel", "la raison pour laquelle", "Raison es femenino."], ["l'ami avec lequel je voyage (menos natural)", "l'ami avec qui je voyage", "Para personas: prep. + qui."]] }
  ],
  ejemplos: [
    { sit: "«Los problemas en los que pensamos…»", resp: "Les problèmes auxquels nous pensons…", pasos: ["penser à + lesquels → auxquels."], porque: "Contracción." },
    { sit: "«El museo cerca del cual vivimos…»", resp: "Le musée près duquel nous habitons…", pasos: ["près de + lequel → duquel."], porque: "Contracción." },
    { sit: "«El amigo con el que viajo…»", resp: "L'ami avec qui je voyage…", pasos: ["Persona: avec qui."], porque: "Persona." }
  ],
  comprueba: [
    { q: "À + lequel se convierte en…", o: ["auquel", "à lequel"], a: 0, b: "gr", porque: "Contracción." },
    { q: "Para «la razón por la que» se dice…", o: ["la raison pour laquelle", "la raison pour lequel"], a: 0, b: "gr", porque: "Femenino." },
    { q: "Para personas se prefiere…", o: ["preposición + qui", "preposición + lequel"], a: 0, b: "gr", porque: "avec qui." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rc2-lequel", "b1rc2-contr"], k: "sort", ask: "¿Le livre… o la table…?", q: "Clasifica.", cats: ["le livre…", "la table…"], items: [["sur lequel", 0], ["dans lequel", 0], ["auquel", 0], ["à côté duquel", 0], ["sur laquelle", 1], ["dans laquelle", 1], ["à laquelle", 1], ["à côté de laquelle", 1]], pista: "Masculino o femenino.", why: "Concordancia." },
    { fase: "guiada", c: ["b1rc2-lequel"], k: "choice", ask: "«La silla en la que estoy sentado…»", q: "«___»", o: ["La chaise sur laquelle je suis assis…", "La chaise sur lequel je suis assis…"], a: 0, pista: "Chaise: femenino.", why: "<b>laquelle</b>." },
    { fase: "guiada", c: ["b1rc2-contr"], k: "choice", ask: "«Los problemas en los que pensamos…»", q: "«Les problèmes ___ nous pensons…»", o: ["auxquels", "à lesquels", "auquel"], a: 0, pista: "à + lesquels.", why: "<b>auxquels</b>." },
    { fase: "indep", c: ["b1rc2-contr"], k: "choice", ask: "«El amigo con el que viajo…»", q: "«___»", o: ["L'ami avec qui je voyage…", "L'ami avec que je voyage…"], a: 0, why: "<b>avec qui</b>." },
    { fase: "indep", c: ["b1rc2-lequel"], k: "fill", ask: "Escribe el relativo.", q: "C'est le stylo avec ___ j'ai signé le contrat.", acc: ["lequel"], why: "<b>lequel</b>." },
    { fase: "indep", c: ["b1rc2-contr"], k: "fill", ask: "Escribe el relativo.", q: "Le musée près ___ nous habitons est fermé.", acc: ["duquel"], why: "<b>duquel</b>." },
    { fase: "aplica", c: ["b1rc2-contr"], k: "match", ask: "Une cada combinación con su forma.", q: "Combinación → forma", pairs: [["à + lequel", "auquel"], ["à + lesquelles", "auxquelles"], ["de + lequel", "duquel"], ["à + laquelle", "à laquelle"]], why: "Contracciones." },
    { fase: "aplica", c: ["b1rc2-lequel"], k: "spot", ask: "Encuentra el error.", s: "Voici la raison pour [lequel] j'ai démissionné .", fix: "laquelle", why: "<b>laquelle</b>." },
    { fase: "dominio", c: ["b1rc2-lequel"], k: "order", ask: "Ordena: «Es el proyecto en el que trabajo».", tokens: ["C'est le projet", "sur lequel", "je travaille."], why: "<b>C'est le projet sur lequel je travaille.</b>" },
    { fase: "dominio", c: ["b1rc2-contr"], k: "choice", ask: "«El concurso en el que participé…»", q: "«Le concours ___ j'ai participé était difficile.»", o: ["auquel", "duquel", "lequel"], a: 0, why: "participer à: <b>auquel</b>." },
    { fase: "dominio", c: ["b1rc2-lequel", "b1rc2-contr"], k: "listen", say: "C'est une question à laquelle je ne sais pas répondre.", acc: ["C'est une question à laquelle je ne sais pas répondre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est une question à laquelle je ne sais pas répondre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-ce-qui-ce-que"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Ce qui, ce que, ce dont : ce que je veux, c'est…",
  objetivo: {
    que: "Vas a usar ce qui, ce que y ce dont («lo que») en frases y en preguntas indirectas.",
    corto: "Dis-moi ce que tu penses.",
    podras: ["Usar ce qui como sujeto: ce qui me plaît.", "Usar ce que como COD y ce dont con verbos con de.", "Usar ce que en la pregunta indirecta (no qu'est-ce que): je ne sais pas ce que tu veux."],
    iconos: ["ic2/pregunta", "ic2/bombilla", "ic2/lapiz"],
    previos: ["La mise en relief (lección 9) y los relativos (lección 4)."],
    capacidad: "Ahora dices «lo que» en todas sus formas."
  },
  requiere: R("b1mr-ce", "b1rel-oudont"), recupera: ["b1mr-ce"],
  conceptos: {
    "b1cq-forme": { n: "ce qui (sujeto), ce que (COD), ce dont (verbo con de) = lo que", b: "gr" },
    "b1cq-indir": { n: "pregunta indirecta: dis-moi ce que tu veux, je ne sais pas ce qui se passe", b: "gr" }
  },
  video: {
    titulo: "Lo que", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "ce qui · ce que · ce dont", seg: [
        { es: "Hola. Tres formas para decir «lo que»." } ] },
      { v: "frase", filas: [
          { nota: "sujeto", p: 1, partes: [["Ce qui me fait peur, c'est l'avion.", "-", 1]] },
          { nota: "COD", p: 2, partes: [["Je ne comprends pas ce que tu dis.", "-", 2]] },
          { nota: "con de", p: 3, partes: [["C'est ce dont j'avais besoin.", "-", 3]] } ], seg: [
        { fr: "Ce qui me fait peur, c'est l'avion.", p: 1 }, { fr: "Je ne comprends pas ce que tu dis.", p: 2 }, { fr: "C'est ce dont j'avais besoin.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No sé lo que quieres.»", o: ["Je ne sais pas ce que tu veux.", "Je ne sais pas qu'est-ce que tu veux."], a: 0,
        bien: "¡Sí! Pregunta indirecta: ce que.", mal: "En la pregunta indirecta: ce que.",
        seg: [ { es: "Pausa. Lo que quieres." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ce qui", "ce que", "ce dont", "dis-moi ce que"], seg: [
        { es: "Verbo después: ce qui. Sujeto después: ce que.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lo importante", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de lo que les importa.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce qui est important pour moi, c'est la famille.", "Lo que es importante para mí es la familia."],
      ["camila", "Moi, ce que j'aime, c'est cuisiner. Et ce dont j'ai envie, c'est de dormir !", "A mí lo que me gusta es cocinar. ¡Y lo que tengo ganas es de dormir!"],
      ["hugo", "Ha ha ! Dis-moi ce que tu penses de mon projet.", "¡Ja, ja! Dime lo que piensas de mi proyecto."],
      ["camila", "Je ne sais pas ce qui se passe avec l'ordinateur. Voilà ce dont je me souviens.", "No sé lo que pasa con el computador. Esto es lo que recuerdo."]
    ],
    fijate: "Fíjate: ce qui est, ce que j'aime, ce dont j'ai envie, ce que tu penses, ce qui se passe, ce dont je me souviens."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Ce qui, ce que, ce dont",
      idea: "Equivalen a «lo que» y no tienen antecedente concreto. Ce qui = sujeto del verbo que sigue: ce qui me plaît, ce qui se passe. Ce que (ce qu') = complemento directo: ce que je pense, ce que tu dis. Ce dont = complemento con de: ce dont je parle, ce dont j'ai envie, ce dont je me souviens. En la pregunta indirecta se usa ce que / ce qui, nunca qu'est-ce que: Dis-moi ce que tu veux. Je ne sais pas ce qui se passe.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["Ce qui · ce qui me plaît · ce qui se passe", "lo que me gusta · lo que pasa", "sujeto"],
        ["… me dérange · … est important · … arrive · … me fait rire", "molesta · es importante · pasa · hace reír", "ce qui"],
        ["ce que · ce que je pense · ce que tu dis", "lo que pienso · lo que dices", "COD"],
        ["… je veux · … on mange · … elle pense", "quiero · comemos · piensa", "ce que"],
        ["Ce dont · ce dont j'ai envie · ce dont je me souviens", "lo que tengo ganas · lo que recuerdo", "con de"],
        ["Dis-moi ce que tu penses.", "Dime lo que piensas.", "pregunta indirecta"],
        ["Ce qui compte, c'est la santé.", "Lo que cuenta es la salud.", "relieve"]
      ]],
      ej: [["Ce qui me fait peur, c'est l'avion.", "Lo que me da miedo es el avión."], ["Je ne comprends pas ce que tu dis.", "No entiendo lo que dices."], ["C'est exactement ce dont j'avais besoin.", "Es justo lo que necesitaba."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je ne sais pas qu'est-ce que tu veux.", "Je ne sais pas ce que tu veux.", "En la pregunta indirecta: ce que."], ["Explique-moi qu'est-ce que tu veux faire.", "Explique-moi ce que tu veux faire.", "Indirecta: ce que."], ["Ce que m'énerve, c'est le bruit.", "Ce qui m'énerve, c'est le bruit.", "Sigue un verbo: ce qui."]] }
  ],
  ejemplos: [
    { sit: "«Lo que me molesta es el ruido.»", resp: "Ce qui m'énerve, c'est le bruit.", pasos: ["Sujeto: ce qui."], porque: "Sujeto." },
    { sit: "«Dime lo que piensas.»", resp: "Dis-moi ce que tu penses.", pasos: ["COD: ce que."], porque: "Indirecta." },
    { sit: "«Lo que tengo ganas es dormir.»", resp: "Ce dont j'ai envie, c'est de dormir.", pasos: ["avoir envie de → ce dont."], porque: "Con de." }
  ],
  comprueba: [
    { q: "Si después viene un verbo, se usa…", o: ["ce qui", "ce que"], a: 0, b: "gr", porque: "Sujeto." },
    { q: "Con avoir envie de se usa…", o: ["ce dont", "ce que"], a: 0, b: "gr", porque: "de." },
    { q: "«No sé lo que quieres» se dice…", o: ["Je ne sais pas ce que tu veux.", "Je ne sais pas qu'est-ce que tu veux."], a: 0, b: "gr", porque: "Indirecta." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cq-forme"], k: "sort", ask: "¿Ce qui o ce que?", q: "Clasifica.", cats: ["ce qui", "ce que"], items: [["… me dérange", 0], ["… est important", 0], ["… arrive", 0], ["… me fait rire", 0], ["… je veux", 1], ["… tu dis", 1], ["… on mange", 1], ["… elle pense", 1]], pista: "¿Verbo o sujeto después?", why: "ce qui / ce que." },
    { fase: "guiada", c: ["b1cq-forme"], k: "choice", ask: "«Lo que me molesta es el ruido.»", q: "«___ m'énerve, c'est le bruit.»", o: ["Ce qui", "Ce que"], a: 0, pista: "Sigue un verbo.", why: "<b>Ce qui</b>." },
    { fase: "guiada", c: ["b1cq-indir"], k: "choice", ask: "«Dime lo que piensas.»", q: "«Dis-moi ___ tu penses.»", o: ["ce que", "qu'est-ce que"], a: 0, pista: "Indirecta.", why: "<b>ce que</b>." },
    { fase: "indep", c: ["b1cq-forme"], k: "choice", ask: "«Lo que tengo ganas es dormir.»", q: "«___ j'ai envie, c'est de dormir.»", o: ["Ce dont", "Ce que"], a: 0, why: "<b>Ce dont</b>." },
    { fase: "indep", c: ["b1cq-indir"], k: "fill", ask: "Escribe «lo que» (sujeto).", q: "Je ne sais pas ___ se passe.", acc: ["ce qui"], why: "<b>ce qui</b>." },
    { fase: "indep", c: ["b1cq-forme"], k: "fill", ask: "Escribe «lo que» (se souvenir de).", q: "Voilà ___ je me souviens.", acc: ["ce dont"], why: "<b>ce dont</b>." },
    { fase: "aplica", c: ["b1cq-forme"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Ce qui me plaît,", "c'est la mer."], ["Ce que je préfère,", "c'est lire."], ["Ce dont je rêve,", "c'est d'un voyage."], ["Ce qui compte,", "c'est la santé."]], why: "Lo que." },
    { fase: "aplica", c: ["b1cq-indir"], k: "spot", ask: "Encuentra el error.", s: "Explique-moi [qu'est-ce] que tu veux faire .", fix: "ce", why: "<b>ce que</b>." },
    { fase: "dominio", c: ["b1cq-forme"], k: "order", ask: "Ordena: «Lo que me gusta es cocinar».", tokens: ["Ce que j'aime,", "c'est", "cuisiner."], why: "<b>Ce que j'aime, c'est cuisiner.</b>" },
    { fase: "dominio", c: ["b1cq-indir"], k: "choice", ask: "«No entiendo lo que dices.»", q: "«Je ne comprends pas ___ tu dis.»", o: ["ce que", "ce qui"], a: 0, why: "<b>ce que</b>." },
    { fase: "dominio", c: ["b1cq-forme", "b1cq-indir"], k: "listen", say: "Ce qui est important pour moi, c'est la famille.", acc: ["Ce qui est important pour moi, c'est la famille."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce qui est important pour moi, c'est la famille.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-pronoms-toniques"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les pronoms toniques : moi, toi, lui, elle, eux",
  objetivo: {
    que: "Vas a usar los pronombres tónicos para insistir, tras preposición, tras c'est y en respuestas cortas.",
    corto: "Moi, je préfère le thé. · Chez eux. · Moi non plus.",
    podras: ["Insistir: moi, je pense que…", "Usarlos después de preposición y de c'est: avec toi, chez eux, c'est lui.", "Responder: moi aussi, moi non plus, pas moi, moi si."],
    iconos: ["ic2/amigos", "ic2/microfono", "ic2/corazon"],
    previos: ["Los pronombres tónicos (A1, lección 59) y estar de acuerdo (A2, lección 51)."],
    capacidad: "Ahora reaccionas rápido: moi aussi, pas moi."
  },
  requiere: R("ad2-moi"), recupera: ["ad2-moi"],
  conceptos: {
    "b1pt-usage": { n: "insistir, tras preposición y tras c'est: moi, toi, lui, elle, nous, vous, eux, elles", b: "gr" },
    "b1pt-reponse": { n: "respuestas: moi aussi, moi non plus (igual) / pas moi, moi si (diferente)", b: "gr" }
  },
  video: {
    titulo: "Moi, toi, eux", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "moi · toi · eux", seg: [
        { es: "Hola. Los pronombres que se usan solos o tras preposición." } ] },
      { v: "frase", filas: [
          { nota: "insistir", p: 1, partes: [["Moi, je préfère le thé.", "-", 1]] },
          { nota: "preposición", p: 2, partes: [["Je vais avec eux.", "-", 2]] },
          { nota: "respuesta", p: 3, partes: [["Moi non plus.", "-", 3]] } ], seg: [
        { fr: "Moi, je préfère le thé.", p: 1 }, { fr: "Je vais avec eux.", p: 2 }, { fr: "Moi non plus.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy con él.»", o: ["Je vais avec lui.", "Je vais avec il."], a: 0,
        bien: "¡Sí! Tras preposición: lui.", mal: "Después de avec: lui.",
        seg: [ { es: "Pausa. Con él." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["moi aussi", "moi non plus", "pas moi", "c'est moi", "chez eux"], seg: [
        { es: "Il y ils, tras preposición: lui y eux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Gustos", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comparan gustos.",
    pj: PJ,
    lineas: [
      ["hugo", "Je n'aime pas le froid.", "No me gusta el frío."],
      ["camila", "Moi non plus. Moi, je préfère rester à la maison.", "A mí tampoco. Yo prefiero quedarme en casa."],
      ["hugo", "Mes parents ? Je dîne chez eux ce soir. Tu viens avec nous ou tu restes avec eux ?", "¿Mis papás? Ceno en su casa esta noche. ¿Vienes con nosotros o te quedas con ellos?"],
      ["camila", "Je viens avec toi ! Qui c'est ? — C'est moi, Laura !", "¡Voy contigo! ¿Quién es? — ¡Soy yo, Laura!"]
    ],
    fijate: "Fíjate: moi non plus, moi, je…, chez eux, avec nous, avec eux, avec toi, c'est moi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los pronombres tónicos",
      idea: "Moi, toi, lui, elle, nous, vous, eux, elles. Se usan para insistir (Moi, je pense que…), después de preposición (avec toi, pour elle, chez eux), después de c'est / ce sont (C'est moi. Ce sont eux.), en comparaciones (plus grand que lui) y en respuestas cortas: Moi aussi (yo también), Moi non plus (yo tampoco), Pas moi (yo no), Moi, si (yo sí, tras una negación).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["je → moi · tu → toi · il → lui · ils → eux · elles → elles", "yo · tú · él · ellos · ellas", "formas"],
        ["Je vais avec eux. · chez eux · eux", "Voy con ellos. · en su casa", "preposición"],
        ["pour toi · toi", "para ti", "preposición"],
        ["plus grand que lui · lui", "más alto que él", "comparación"],
        ["C'est moi.", "Soy yo.", "c'est"],
        ["Moi non plus.", "Yo tampoco.", "igual (negativo)"],
        ["J'aime lire. — Moi aussi. · — Pas moi.", "Me gusta leer. — Yo también. · — Yo no.", "respuestas"],
        ["Je ne fume pas. — Moi non plus. · — Moi, si.", "No fumo. — Yo tampoco. · — Yo sí.", "respuestas"],
        ["Je suis fatigué. — Nous aussi. · — Pas nous.", "Estoy cansado. — Nosotros también. · — Nosotros no.", "respuestas"],
        ["Je n'ai pas faim. — Lui non plus. · — Lui, si.", "No tengo hambre. — Él tampoco. · — Él sí.", "respuestas"]
      ]],
      ej: [["Toi, tu as toujours raison !", "¡Tú siempre tienes razón!"], ["Je suis allé au cinéma avec eux.", "Fui al cine con ellos."], ["Je n'aime pas le froid. — Moi non plus.", "No me gusta el frío. — A mí tampoco."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais avec il.", "Je vais avec lui.", "Tras preposición, pronombre tónico."], ["Mon frère est plus grand que il.", "Mon frère est plus grand que lui.", "Comparación: lui."], ["Je n'aime pas le café. — Moi aussi.", "Je n'aime pas le café. — Moi non plus.", "Negativo: moi non plus."]] }
  ],
  ejemplos: [
    { sit: "«Voy con ellos.»", resp: "Je vais avec eux.", pasos: ["avec + eux."], porque: "Preposición." },
    { sit: "«¿Quién es? — Soy yo.»", resp: "C'est moi.", pasos: ["c'est + moi."], porque: "c'est." },
    { sit: "«No me gusta el café. — A mí tampoco.»", resp: "Moi non plus.", pasos: ["Negativo igual."], porque: "Respuesta." }
  ],
  comprueba: [
    { q: "Después de una preposición se usa…", o: ["el pronombre tónico", "el pronombre sujeto"], a: 0, b: "gr", porque: "avec lui." },
    { q: "«A mí tampoco» se dice…", o: ["Moi non plus.", "Moi aussi."], a: 0, b: "gr", porque: "Negativo." },
    { q: "El tónico de ils es…", o: ["eux", "leur"], a: 0, b: "gr", porque: "chez eux." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pt-reponse"], k: "sort", ask: "¿De acuerdo o diferente?", q: "Clasifica.", cats: ["De acuerdo (igual)", "Diferente"], items: [["J'aime lire. — Moi aussi.", 0], ["Je ne fume pas. — Moi non plus.", 0], ["Je suis fatigué. — Nous aussi.", 0], ["Je n'ai pas faim. — Lui non plus.", 0], ["J'aime lire. — Pas moi.", 1], ["Je ne fume pas. — Moi, si.", 1], ["Je suis fatigué. — Pas nous.", 1], ["Je n'ai pas faim. — Lui, si.", 1]], pista: "aussi / non plus: igual.", why: "Respuestas." },
    { fase: "guiada", c: ["b1pt-usage"], k: "choice", ask: "«Voy con ellos.»", q: "«___»", o: ["Je vais avec eux.", "Je vais avec ils."], a: 0, pista: "Tónico.", why: "<b>eux</b>." },
    { fase: "guiada", c: ["b1pt-reponse"], k: "choice", ask: "«No me gusta el café. — A mí tampoco.»", q: "«___»", o: ["Moi non plus.", "Moi aussi."], a: 0, pista: "Negativo.", why: "<b>Moi non plus</b>." },
    { fase: "indep", c: ["b1pt-usage"], k: "choice", ask: "«¿Quién es? — Soy yo.»", q: "«___»", o: ["C'est moi.", "C'est je."], a: 0, why: "<b>C'est moi</b>." },
    { fase: "indep", c: ["b1pt-usage"], k: "fill", ask: "Escribe el pronombre (tú).", q: "Ce cadeau est pour ___, ma chérie.", acc: ["toi"], why: "<b>toi</b>." },
    { fase: "indep", c: ["b1pt-usage"], k: "fill", ask: "Escribe el pronombre (ellos).", q: "Mes parents ? Je dîne chez ___ ce soir.", acc: ["eux"], why: "<b>eux</b>." },
    { fase: "aplica", c: ["b1pt-usage"], k: "match", ask: "Une cada sujeto con su pronombre tónico.", q: "Sujeto → tónico", pairs: [["je", "moi"], ["tu", "toi"], ["il", "lui"], ["ils", "eux"], ["elles", "elles"]], why: "Formas." },
    { fase: "aplica", c: ["b1pt-usage"], k: "spot", ask: "Encuentra el error.", s: "Mon frère est plus grand que [il] , mais plus jeune .", fix: "lui", why: "<b>que lui</b>." },
    { fase: "dominio", c: ["b1pt-usage"], k: "order", ask: "Ordena: «Yo prefiero quedarme en casa».", tokens: ["Moi,", "je préfère", "rester à la maison."], why: "<b>Moi, je préfère rester à la maison.</b>" },
    { fase: "dominio", c: ["b1pt-reponse"], k: "choice", ask: "«No fumo. — Yo sí.»", q: "«Je ne fume pas. — ___»", o: ["Moi, si.", "Moi aussi."], a: 0, why: "<b>Moi, si</b>." },
    { fase: "dominio", c: ["b1pt-usage", "b1pt-reponse"], k: "listen", say: "Tu viens avec nous ou tu restes avec eux ?", acc: ["Tu viens avec nous ou tu restes avec eux ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu viens avec nous ou tu restes avec eux ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b11-pronom-on"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le pronom on : nous, les gens, quelqu'un",
  objetivo: {
    que: "Vas a usar on con sus tres sentidos: nosotros, la gente y alguien.",
    corto: "On va au cinéma ? · En France, on mange tard.",
    podras: ["Usar on = nous en la lengua oral: on part demain.", "Usar on = la gente o alguien: ici, on parle français; on m'a volé mon vélo.", "Conjugar siempre en 3.ª persona del singular: on fait, on est."],
    iconos: ["ic2/amigos", "ic2/mundo", "ic2/pregunta"],
    previos: ["El pronombre on (A1, lección 60)."],
    capacidad: "Ahora hablas como los franceses: on y no nous."
  },
  requiere: R(), recupera: [],
  conceptos: {
    "b1on-sens": { n: "on = nous (oral) / la gente / alguien", b: "gr" },
    "b1on-verbe": { n: "verbo siempre en 3.ª singular: on fait, on est; posesivo nos con on = nous", b: "gr" }
  },
  video: {
    titulo: "El pronombre on", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "on", seg: [
        { es: "Hola. On es la palabra más usada del francés oral." } ] },
      { v: "frase", filas: [
          { nota: "nosotros", p: 1, partes: [["On se voit ce soir ?", "-", 1]] },
          { nota: "la gente", p: 2, partes: [["Au Québec, on dit « char ».", "-", 2]] },
          { nota: "alguien", p: 3, partes: [["On m'a volé mon portefeuille.", "-", 3]] } ], seg: [
        { fr: "On se voit ce soir ?", p: 1 }, { fr: "Au Québec, on dit « char ».", p: 2 }, { fr: "On m'a volé mon portefeuille.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vamos al parque.» (oral)", o: ["On va au parc.", "On allons au parc."], a: 0,
        bien: "¡Sí! On + 3.ª persona singular.", mal: "Con on: va.",
        seg: [ { es: "Pausa. Vamos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["on va", "on fait", "on est", "on dit", "on m'a dit"], seg: [
        { es: "On siempre con el verbo de il.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viernes", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo planean la noche.",
    pj: PJ,
    lineas: [
      ["hugo", "Avec mes amis, on va souvent au cinéma le vendredi soir. On se voit demain ?", "Con mis amigos vamos a menudo al cine los viernes por la noche. ¿Nos vemos mañana?"],
      ["camila", "Oui ! Ce soir, on fait une pizza ? Oh non, on a oublié nos billets à la maison !", "¡Sí! ¿Esta noche hacemos una pizza? ¡Ay no, olvidamos nuestros billetes en casa!"],
      ["hugo", "En France, on dîne tard. Et on m'a dit que le film est génial.", "En Francia se cena tarde. Y me dijeron que la película es genial."],
      ["camila", "On a sonné à la porte ! Mon frère et moi, on est très différents, tu sais.", "¡Tocaron la puerta! Mi hermano y yo somos muy diferentes, ¿sabes?"]
    ],
    fijate: "Fíjate: on va, on se voit, on fait, on a oublié nos (nosotros); on dîne (la gente); on m'a dit, on a sonné (alguien); on est."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los tres sentidos de on",
      idea: "on = nous en la lengua oral: On part demain. El adjetivo o el participio pueden concordar: On est contents. on = la gente en general: Ici, on parle français. En France, on mange tard. on = alguien indeterminado: On frappe à la porte. On m'a dit que… El verbo va siempre en 3.ª persona del singular: on fait, on a, on est. Con on = nous, el posesivo es nos / notre.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["On va au parc.", "Vamos al parque.", "nosotros"],
        ["On part demain. = Nous partons demain.", "Nos vamos mañana.", "nosotros"],
        ["on fait · fait · on est · est", "hacemos · somos", "3.ª singular"],
        ["On a oublié nos billets. · nos", "Olvidamos nuestros billetes.", "posesivo"],
        ["En Espagne, on dîne tard.", "En España se cena tarde.", "la gente"],
        ["Ici, on parle anglais. = Ici, les gens parlent anglais.", "Aquí se habla inglés.", "la gente"],
        ["On a sonné à la porte.", "Alguien tocó la puerta.", "alguien"],
        ["On m'a appelé. = Quelqu'un m'a appelé.", "Me llamaron.", "alguien"],
        ["On dit que c'est cher.", "Dicen que es caro.", "la gente"]
      ]],
      ej: [["On se voit ce soir ?", "¿Nos vemos esta noche?"], ["Au Québec, on dit « char » pour « voiture ».", "En Quebec se dice «char» para «carro»."], ["On m'a volé mon portefeuille.", "Me robaron la billetera."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["On allons au parc.", "On va au parc.", "On + 3.ª persona singular."], ["Mon frère et moi, on sommes très différents.", "Mon frère et moi, on est très différents.", "on est."], ["On a oublié ses billets. (los nuestros)", "On a oublié nos billets.", "on = nous → nos."]] }
  ],
  ejemplos: [
    { sit: "«Vamos al parque.» (oral)", resp: "On va au parc.", pasos: ["on = nous, verbo de il."], porque: "Oral." },
    { sit: "«En España se cena tarde.»", resp: "En Espagne, on dîne tard.", pasos: ["on = la gente."], porque: "General." },
    { sit: "«Tocaron la puerta.»", resp: "On a sonné à la porte.", pasos: ["on = alguien."], porque: "Indeterminado." }
  ],
  comprueba: [
    { q: "Con on, el verbo va en…", o: ["3.ª persona singular", "1.ª persona plural"], a: 0, b: "gr", porque: "on va." },
    { q: "En «En Espagne, on dîne tard», on significa…", o: ["la gente en general", "nosotros"], a: 0, b: "gr", porque: "General." },
    { q: "En «On a sonné à la porte», on significa…", o: ["alguien", "nosotros"], a: 0, b: "gr", porque: "Indeterminado." }
  ],
  practica: [
    { fase: "guiada", c: ["b1on-sens"], k: "sort", ask: "¿On = nous o on = alguien / la gente?", q: "Clasifica.", cats: ["= nous", "= alguien / la gente"], items: [["On se retrouve à 8 h ?", 0], ["Avec Paul, on est allés à Rome.", 0], ["On a fini nos devoirs.", 0], ["Ma sœur et moi, on s'adore.", 0], ["On a volé ma voiture.", 1], ["En hiver, on s'habille chaudement.", 1], ["On frappe à la porte.", 1], ["On ne sait jamais.", 1]], pista: "¿Incluye a quien habla?", why: "Sentidos." },
    { fase: "guiada", c: ["b1on-verbe"], k: "choice", ask: "«Vamos al parque.» (oral)", q: "«___»", o: ["On va au parc.", "On allons au parc."], a: 0, pista: "3.ª singular.", why: "<b>On va</b>." },
    { fase: "guiada", c: ["b1on-sens"], k: "choice", es: true, ask: "«En Espagne, on dîne tard.» Aquí on es…", q: "Elige.", o: ["la gente en general", "nosotros", "alguien"], a: 0, pista: "Costumbre de un país.", why: "La gente." },
    { fase: "indep", c: ["b1on-sens"], k: "choice", es: true, ask: "«On a sonné à la porte.» Aquí on es…", q: "Elige.", o: ["alguien", "nosotros"], a: 0, why: "Alguien." },
    { fase: "indep", c: ["b1on-verbe"], k: "fill", ask: "Conjuga faire.", q: "Ce soir, on ___ une pizza ?", acc: ["fait"], why: "<b>fait</b>." },
    { fase: "indep", c: ["b1on-verbe"], k: "fill", ask: "Escribe «nuestros».", q: "On a oublié ___ billets à la maison !", acc: ["nos"], why: "<b>nos</b>." },
    { fase: "aplica", c: ["b1on-sens"], k: "match", ask: "Une cada frase con su equivalente.", q: "on → equivalente", pairs: [["On part demain.", "Nous partons demain."], ["Ici, on parle anglais.", "Ici, les gens parlent anglais."], ["On m'a appelé.", "Quelqu'un m'a appelé."], ["On dit que c'est cher.", "Les gens disent que c'est cher."]], why: "Sentidos." },
    { fase: "aplica", c: ["b1on-verbe"], k: "spot", ask: "Encuentra el error.", s: "Mon frère et moi , on [sommes] très différents .", fix: "est", why: "<b>on est</b>." },
    { fase: "dominio", c: ["b1on-sens"], k: "order", ask: "Ordena: «¿Nos vemos mañana?».", tokens: ["On", "se voit", "demain ?"], why: "<b>On se voit demain ?</b>" },
    { fase: "dominio", c: ["b1on-verbe"], k: "choice", ask: "«Terminamos nuestros deberes.»", q: "«On ___ nos devoirs.»", o: ["a fini", "avons fini"], a: 0, why: "<b>a fini</b>." },
    { fase: "dominio", c: ["b1on-sens", "b1on-verbe"], k: "listen", say: "Avec mes amis, on va souvent au cinéma le vendredi soir.", acc: ["Avec mes amis, on va souvent au cinéma le vendredi soir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Avec mes amis, on va souvent au cinéma le vendredi soir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Rome", "Québec"], previo: [] }
};

/* ───── B1.1·7 · Precisar la frase ───── */
E["b11-tout"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Tout, toute, tous, toutes",
  objetivo: {
    que: "Vas a usar tout como adjetivo, pronombre y adverbio, con su concordancia.",
    corto: "tout le monde · toute la nuit · ils sont tous là.",
    podras: ["Concordar tout con el nombre: tout le temps, toute la nuit, tous les ans, toutes les filles.", "Usar el pronombre tous [tus] y el neutro tout: ils sont tous venus, tout va bien.", "Usar el adverbio tout (muy): tout seul, toute seule."],
    iconos: ["ic2/estrella", "ic2/amigos", "ic2/lapiz"],
    previos: ["Tout (A2, lección 46) y plus, tous (Fonética, lección 63)."],
    capacidad: "Ahora concuerdas tout sin dudar."
  },
  requiere: R("to-forme", "to-expr"), recupera: ["to-forme"],
  conceptos: {
    "b1to-adj": { n: "adjetivo: tout le, toute la, tous les, toutes les + nombre", b: "gr" },
    "b1to-pron": { n: "pronombre: tous [tus] (ils sont tous là), tout (tout va bien); adverbio: tout seul", b: "gr" }
  },
  video: {
    titulo: "Tout", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "tout · toute · tous · toutes", seg: [
        { es: "Hola. Tout cambia según la palabra que acompaña." } ] },
      { v: "frase", filas: [
          { nota: "masc. sing.", p: 1, partes: [["tout le monde", "-", 1]] },
          { nota: "fem. sing.", p: 2, partes: [["toute la journée", "-", 2]] },
          { nota: "plural", p: 3, partes: [["tous les jours · toutes les semaines", "-", 3]] } ], seg: [
        { fr: "tout le monde", p: 1 }, { fr: "toute la journée", p: 2 }, { fr: "tous les jours, toutes les semaines", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Todo el mundo está aquí.»", o: ["Tout le monde est là.", "Tous le monde est là."], a: 0,
        bien: "¡Sí! Le monde: masculino singular.", mal: "Le monde es singular: tout.",
        seg: [ { es: "Pausa. Todo el mundo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tout le temps", "toute la nuit", "tous les ans", "toutes les filles", "ils sont tous là"], seg: [
        { es: "Tous como pronombre: suena la ese.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fiesta", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta la fiesta a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Tout le monde était content et tous les invités ont dansé.", "Todo el mundo estaba contento y todos los invitados bailaron."],
      ["hugo", "Moi, j'ai travaillé toute la journée. Mes amis sont tous partis ?", "Yo trabajé todo el día. ¿Mis amigos se fueron todos?"],
      ["camila", "Oui, ils sont tous venus. Laura a mangé toutes les fraises !", "Sí, vinieron todos. ¡Laura se comió todas las fresas!"],
      ["hugo", "Ha ha ! Tout va bien, alors. Nous allons à la piscine tous les mardis, tu viens ?", "¡Ja, ja! Todo bien, entonces. Vamos a la piscina todos los martes, ¿vienes?"]
    ],
    fijate: "Fíjate: tout le monde, tous les invités, toute la journée, tous partis [tus], toutes les fraises, tout va bien, tous les mardis."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Concordar tout",
      idea: "Adjetivo: concuerda con el nombre: tout le temps, toute la nuit, tous les ans, toutes les filles. Pronombre plural tous: se pronuncia la s [tus]: Ils sont tous venus. Tout neutro = todo: Tout est prêt. Tout va bien. Adverbio (= muy, completamente): invariable, salvo delante de un adjetivo femenino que empieza por consonante: il est tout seul, elle est toute seule.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["tout le monde · tout le temps · Tout", "todo el mundo · todo el tiempo", "masculino singular"],
        ["toute la nuit · toute la journée · toute la semaine", "toda la noche · todo el día · toda la semana", "femenino singular"],
        ["tous les ans · tous les jours · tous les matins · tous les pays · tous les week-ends · tous", "todos los años · días · mañanas · países · fines de semana", "masculino plural"],
        ["tous mes amis", "todos mis amigos", "masculino plural"],
        ["toutes les fraises · toutes les nuits · toutes mes amies · toutes les villes · toutes les semaines · toutes", "todas las fresas · noches · mis amigas · ciudades · semanas", "femenino plural"],
        ["toutes les fois", "todas las veces", "femenino plural"],
        ["Ils sont tous venus.", "Vinieron todos.", "pronombre [tus]"],
        ["Tout va bien. · Tout est prêt.", "Todo va bien. · Todo está listo.", "neutro"],
        ["tout seul · toute seule", "solito · solita", "adverbio"]
      ]],
      ej: [["J'ai travaillé toute la journée.", "Trabajé todo el día."], ["Nous allons à la piscine tous les mardis.", "Vamos a la piscina todos los martes."], ["Mes amis sont tous partis.", "Mis amigos se fueron todos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tous le monde est là.", "Tout le monde est là.", "Le monde: masculino singular → tout."], ["J'ai lu tout ses livres.", "J'ai lu tous ses livres.", "Masculino plural: tous."], ["toute les semaines", "toutes les semaines", "Femenino plural: toutes."]] }
  ],
  ejemplos: [
    { sit: "«toda la noche»", resp: "toute la nuit", pasos: ["nuit: femenino singular."], porque: "Concordancia." },
    { sit: "«todos los años»", resp: "tous les ans", pasos: ["ans: masculino plural."], porque: "Concordancia." },
    { sit: "«Todo va bien.»", resp: "Tout va bien.", pasos: ["Neutro."], porque: "Pronombre." }
  ],
  comprueba: [
    { q: "«Toda la noche» se dice…", o: ["toute la nuit", "tout la nuit"], a: 0, b: "gr", porque: "Femenino." },
    { q: "En «Ils sont tous venus», la s de tous…", o: ["suena", "no suena"], a: 0, b: "gr", porque: "Pronombre." },
    { q: "«Todo el mundo» se dice…", o: ["tout le monde", "tous le monde"], a: 0, b: "gr", porque: "Singular." }
  ],
  practica: [
    { fase: "guiada", c: ["b1to-adj"], k: "sort", ask: "¿Tous o toutes?", q: "Clasifica.", cats: ["tous", "toutes"], items: [["… les matins", 0], ["… les pays", 0], ["… mes amis", 0], ["… les week-ends", 0], ["… les nuits", 1], ["… mes amies", 1], ["… les villes", 1], ["… les semaines", 1]], pista: "Género del nombre.", why: "Concordancia." },
    { fase: "guiada", c: ["b1to-adj"], k: "choice", ask: "«toda la noche»", q: "«___ la nuit»", o: ["toute", "tout"], a: 0, pista: "Femenino.", why: "<b>toute</b>." },
    { fase: "guiada", c: ["b1to-adj"], k: "choice", ask: "«todos los años»", q: "«___ les ans»", o: ["tous", "toutes"], a: 0, pista: "Masculino plural.", why: "<b>tous</b>." },
    { fase: "indep", c: ["b1to-pron"], k: "choice", ask: "«Todo va bien.»", q: "«___»", o: ["Tout va bien.", "Tous va bien."], a: 0, why: "<b>Tout</b>." },
    { fase: "indep", c: ["b1to-adj"], k: "fill", ask: "Escribe la forma de tout.", q: "Elle a mangé ___ les fraises.", acc: ["toutes"], why: "<b>toutes</b>." },
    { fase: "indep", c: ["b1to-adj"], k: "fill", ask: "Escribe la forma de tout.", q: "___ le monde parle de ce film.", acc: ["Tout", "tout"], why: "<b>Tout</b>." },
    { fase: "aplica", c: ["b1to-adj"], k: "match", ask: "Une cada nombre con su tout.", q: "Nombre → tout", pairs: [["le temps", "tout"], ["la semaine", "toute"], ["les jours", "tous"], ["les fois", "toutes"]], why: "Concordancia." },
    { fase: "aplica", c: ["b1to-adj"], k: "spot", ask: "Encuentra el error.", s: "J'ai lu [tout] ses livres pendant les vacances .", fix: "tous", why: "<b>tous</b>." },
    { fase: "dominio", c: ["b1to-pron"], k: "order", ask: "Ordena: «Vinieron todos».", tokens: ["Ils", "sont tous", "venus."], why: "<b>Ils sont tous venus.</b>" },
    { fase: "dominio", c: ["b1to-pron"], k: "choice", ask: "«Ella está solita.»", q: "«Elle est ___ seule.»", o: ["toute", "tout"], a: 0, why: "<b>toute seule</b>." },
    { fase: "dominio", c: ["b1to-adj", "b1to-pron"], k: "listen", say: "Tout le monde était content et tous les invités ont dansé.", acc: ["Tout le monde était content et tous les invités ont dansé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tout le monde était content et tous les invités ont dansé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b11-place-adjectifs"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La place des adjectifs et les adjectifs qui changent de sens",
  objetivo: {
    que: "Vas a colocar el adjetivo antes o después del nombre y a reconocer los que cambian de sentido.",
    corto: "un beau jardin · une voiture rouge · mon ancien professeur.",
    podras: ["Poner detrás colores, nacionalidades y adjetivos largos: une voiture rouge.", "Poner delante los cortos (BAGS): un beau jardin, une jeune fille; y usar bel, nouvel, vieil ante vocal.", "Reconocer los que cambian de sentido: ancien, cher, propre, grand."],
    iconos: ["ic2/flor", "ic2/lapiz", "ic2/bombilla"],
    previos: ["Los adjetivos beau, nouveau, vieux (A1, lección 65)."],
    capacidad: "Ahora describes con el adjetivo en su lugar."
  },
  requiere: R(), recupera: [],
  conceptos: {
    "b1pa-place": { n: "detrás: colores, nacionalidades, largos; delante (BAGS): beau, bon, jeune, petit…; bel, nouvel, vieil ante vocal", b: "gr" },
    "b1pa-sens": { n: "cambian de sentido: ancien (ex / antiguo), cher (querido / caro), propre (propio / limpio), grand", b: "gr" }
  },
  video: {
    titulo: "¿Antes o después?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "un beau jardin", seg: [
        { es: "Hola. Casi todos los adjetivos van detrás… excepto unos cuantos." } ] },
      { v: "frase", filas: [
          { nota: "detrás", p: 1, partes: [["une voiture rouge", "-", 1]] },
          { nota: "delante", p: 2, partes: [["une petite maison", "-", 2]] },
          { nota: "ante vocal", p: 3, partes: [["un nouvel appartement", "-", 3]] } ], seg: [
        { fr: "une voiture rouge", p: 1 }, { fr: "une petite maison", p: 2 }, { fr: "un nouvel appartement", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un hotel viejo»", o: ["un vieil hôtel", "un vieux hôtel"], a: 0,
        bien: "¡Sí! Ante vocal: vieil.", mal: "Delante de vocal: vieil.",
        seg: [ { es: "Pausa. Un hotel viejo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un beau jardin", "une voiture rouge", "un bel homme", "mon ancien patron", "une maison ancienne"], seg: [
        { es: "Ancien delante: ex. Detrás: antiguo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo apartamento", img: "bg-paris", yo: "camila",
    escena: "Camila muestra su apartamento a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Mon nouvel appartement est dans un vieil immeuble du centre.", "Mi nuevo apartamento está en un edificio viejo del centro."],
      ["hugo", "C'est un bel endroit ! Et ta voisine ?", "¡Es un lugar bonito! ¿Y tu vecina?"],
      ["camila", "C'est mon ancien professeur ! Elle habite dans une maison ancienne, une petite maison blanche.", "¡Es mi exprofesora! Vive en una casa antigua, una casita blanca."],
      ["hugo", "Mon cher ami, tu as enfin ta propre chambre !", "¡Querido amigo, por fin tienes tu propia habitación!"]
    ],
    fijate: "Fíjate: nouvel appartement, vieil immeuble, bel endroit (ante vocal); ancien professeur (ex) / maison ancienne (antigua); petite maison blanche; cher ami; propre chambre."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Posición y sentido",
      idea: "Detrás del nombre: colores, nacionalidades, formas, participios y adjetivos largos: une voiture rouge, un plat français, un film intéressant. Delante (BAGS: Beauté, Âge, Goodness, Size): beau, joli, jeune, vieux, nouveau, bon, mauvais, grand, petit: un beau jardin, une jeune fille. Ante vocal: un bel homme, un nouvel ami, un vieil arbre. Cambian de sentido según la posición: ancien (mon ancien patron = ex; une maison ancienne = antigua), cher (mon cher ami = querido; un repas cher = caro), propre (ma propre chambre = propia; une chambre propre = limpia), grand (un grand homme = gran; un homme grand = alto).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Posición"], [
        ["une voiture rouge · un plat français", "un carro rojo · un plato francés", "detrás"],
        ["italien · vert · intéressant · rond", "italiano · verde · interesante · redondo", "detrás"],
        ["petit · jeune · bon · joli", "pequeño · joven · bueno · bonito", "delante"],
        ["une petite maison blanche", "una casita blanca", "delante + detrás"],
        ["un bel endroit · bel", "un lugar bonito", "beau → bel"],
        ["un nouvel ordinateur · nouvel", "un computador nuevo", "nouveau → nouvel"],
        ["un vieil hôtel · un vieil immeuble", "un hotel viejo · un edificio viejo", "vieux → vieil"],
        ["mon ancien patron · une maison ancienne", "mi exjefe · una casa antigua", "cambia de sentido"],
        ["mon cher ami · un repas cher", "mi querido amigo · una comida cara", "cambia de sentido"],
        ["ma propre chambre · une chambre propre", "mi propia habitación · una habitación limpia", "cambia de sentido"],
        ["un grand homme · un homme grand", "un gran hombre · un hombre alto", "cambia de sentido"]
      ]],
      ej: [["C'est mon ancien professeur.", "Es mi exprofesor."], ["J'habite dans une maison ancienne.", "Vivo en una casa antigua."], ["Ma propre chambre / une chambre propre.", "Mi propia habitación / una habitación limpia."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un nouveau appartement", "un nouvel appartement", "Delante de vocal: nouvel, bel, vieil."], ["Nous avons visité un beau hôtel.", "Nous avons visité un bel hôtel.", "beau → bel ante h muda."], ["une rouge voiture", "une voiture rouge", "Los colores van detrás."]] }
  ],
  ejemplos: [
    { sit: "«un hotel viejo»", resp: "un vieil hôtel", pasos: ["Delante + vocal: vieil."], porque: "Forma especial." },
    { sit: "«un carro rojo»", resp: "une voiture rouge", pasos: ["Color: detrás."], porque: "Posición." },
    { sit: "«mi exjefe»", resp: "mon ancien patron", pasos: ["Ancien delante = ex."], porque: "Cambio de sentido." }
  ],
  comprueba: [
    { q: "Los colores van…", o: ["detrás del nombre", "delante del nombre"], a: 0, b: "gr", porque: "une voiture rouge." },
    { q: "Nouveau delante de vocal es…", o: ["nouvel", "nouveau"], a: 0, b: "gr", porque: "un nouvel ami." },
    { q: "«Mon ancien patron» significa…", o: ["mi exjefe", "mi jefe viejo"], a: 0, b: "gr", porque: "Ancien delante." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pa-place"], k: "sort", ask: "¿Delante o detrás del nombre?", q: "Clasifica.", cats: ["Delante del nombre", "Detrás del nombre"], items: [["petit", 0], ["jeune", 0], ["bon", 0], ["joli", 0], ["italien", 1], ["vert", 1], ["intéressant", 1], ["rond", 1]], pista: "BAGS: delante.", why: "Posición." },
    { fase: "guiada", c: ["b1pa-place"], k: "choice", ask: "«un hotel viejo»", q: "«___»", o: ["un vieil hôtel", "un vieux hôtel"], a: 0, pista: "Vocal.", why: "<b>vieil</b>." },
    { fase: "guiada", c: ["b1pa-place"], k: "choice", ask: "«un carro rojo»", q: "«___»", o: ["une voiture rouge", "une rouge voiture"], a: 0, pista: "Color.", why: "Detrás." },
    { fase: "indep", c: ["b1pa-sens"], k: "choice", es: true, ask: "«mon ancien patron» significa…", q: "Elige.", o: ["mi exjefe", "mi jefe anciano"], a: 0, why: "Ex." },
    { fase: "indep", c: ["b1pa-place"], k: "fill", ask: "Forma de beau.", q: "C'est un ___ endroit pour camper.", acc: ["bel"], why: "<b>bel</b>." },
    { fase: "indep", c: ["b1pa-place"], k: "fill", ask: "Forma de nouveau.", q: "J'ai un ___ ordinateur.", acc: ["nouvel"], why: "<b>nouvel</b>." },
    { fase: "aplica", c: ["b1pa-sens"], k: "match", ask: "Une cada expresión con su sentido.", q: "Francés → español", pairs: [["un grand homme", "un gran hombre"], ["un homme grand", "un hombre alto"], ["mon cher ami", "mi querido amigo"], ["un repas cher", "una comida cara"]], why: "Cambio de sentido." },
    { fase: "aplica", c: ["b1pa-place"], k: "spot", ask: "Encuentra el error.", s: "Nous avons visité un [beau] hôtel au bord du lac .", fix: "bel", why: "<b>bel</b>." },
    { fase: "dominio", c: ["b1pa-place"], k: "order", ask: "Ordena: «una casita blanca».", tokens: ["une", "petite maison", "blanche"], why: "<b>une petite maison blanche</b>" },
    { fase: "dominio", c: ["b1pa-sens"], k: "choice", ask: "«mi propia habitación»", q: "«___»", o: ["ma propre chambre", "ma chambre propre"], a: 0, why: "<b>ma propre chambre</b>." },
    { fase: "dominio", c: ["b1pa-place", "b1pa-sens"], k: "listen", say: "Mon nouvel appartement est dans un vieil immeuble du centre.", acc: ["Mon nouvel appartement est dans un vieil immeuble du centre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon nouvel appartement est dans un vieil immeuble du centre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-mieux-meilleur"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Meilleur ou mieux ? Le comparatif et le superlatif",
  objetivo: {
    que: "Vas a elegir entre meilleur (adjetivo) y mieux (adverbio), y formar el superlativo.",
    corto: "un meilleur restaurant · il chante mieux · le meilleur.",
    podras: ["Usar meilleur(e)(s) con un nombre: une meilleure idée.", "Usar mieux con un verbo: je dors mieux.", "Usar pire, plus mal y el superlativo: le meilleur, la ville la plus belle."],
    iconos: ["ic2/trofeo", "ic2/medalla", "ic2/estrella"],
    previos: ["Meilleur o mieux (A2, lección 32) y el comparativo (A2, lección 7)."],
    capacidad: "Ahora comparas sin confundir meilleur y mieux."
  },
  requiere: R("mm-meilleur", "mm-mieux", "cmp-sup"), recupera: ["mm-mieux"],
  conceptos: {
    "b1mm-choix": { n: "bon → meilleur (con nombre); bien → mieux (con verbo); mauvais → pire; mal → plus mal", b: "gr" },
    "b1mm-sup": { n: "superlativo: le / la / les meilleur(e)(s), le mieux, le / la plus + adjetivo", b: "gr" }
  },
  video: {
    titulo: "Meilleur o mieux", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "meilleur · mieux", seg: [
        { es: "Hola. Las dos se traducen «mejor», pero no son iguales." } ] },
      { v: "dos",
        a: { tag: "con nombre", fr: "Ce gâteau est meilleur.", es: "adjetivo" },
        b: { tag: "con verbo", fr: "Elle parle mieux.", es: "adverbio" },
        seg: [ { es: "Bon da meilleur:", p: 1 }, { fr: "Ce gâteau est meilleur.", p: 1 }, { es: "Bien da mieux:", p: 2 }, { fr: "Elle parle mieux.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Habla mejor que yo.»", o: ["Il parle mieux que moi.", "Il parle meilleur que moi."], a: 0,
        bien: "¡Sí! Con un verbo: mieux.", mal: "Con verbo: mieux.",
        seg: [ { es: "Pausa. Habla mejor." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["meilleur", "meilleure", "mieux", "pire", "le meilleur"], seg: [
        { es: "Nombre: meilleur. Verbo: mieux.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mejor café", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo prueban un café nuevo.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce café est bien meilleur, et en plus on y travaille mieux.", "Este café es mucho mejor, y además aquí se trabaja mejor."],
      ["camila", "C'est le meilleur restaurant de la ville ! Aujourd'hui, je me sens mieux.", "¡Es el mejor restaurante de la ciudad! Hoy me siento mejor."],
      ["hugo", "Ma sœur cuisine mieux que ma mère. C'est ma meilleure amie, aussi.", "Mi hermana cocina mejor que mi mamá. También es mi mejor amiga."],
      ["camila", "Avec ses nouvelles lunettes, mon frère voit mieux qu'avant. Mais rater le train, c'est la pire idée !", "Con sus gafas nuevas, mi hermano ve mejor que antes. ¡Pero perder el tren es la peor idea!"]
    ],
    fijate: "Fíjate: meilleur, le meilleur restaurant, ma meilleure amie (nombre); travaille mieux, me sens mieux, cuisine mieux, voit mieux (verbo); la pire idée."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Comparar bien",
      idea: "bon → meilleur(e)(s): acompaña a un nombre: une meilleure idée, un meilleur salaire. bien → mieux: acompaña a un verbo: je dors mieux, ça va mieux. mauvais → pire (o plus mauvais); mal → plus mal. Superlativo: con artículo: le meilleur film, la meilleure solution, le mieux; con otros adjetivos: le / la / les plus + adjetivo: la ville la plus belle, le plus beau pays.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Ce vin est meilleur. · meilleur", "Este vino es mejor.", "adjetivo"],
        ["un meilleur salaire · la meilleure solution · de meilleurs résultats · le meilleur joueur", "un mejor salario · la mejor solución · mejores resultados · el mejor jugador", "con nombre"],
        ["ma meilleure amie · meilleure", "mi mejor amiga", "femenino"],
        ["Je me sens mieux. · mieux", "Me siento mejor.", "adverbio"],
        ["il joue mieux · ça va mieux · j'écris mieux · c'est mieux comme ça", "juega mejor · va mejor · escribo mejor · así es mejor", "con verbo"],
        ["bon → meilleur · bien → mieux", "bueno / bien → mejor", "formas"],
        ["mauvais → pire · mal → plus mal", "malo → peor · mal → peor", "formas"],
        ["C'est la pire idée.", "Es la peor idea.", "pire"],
        ["C'est le meilleur film de l'année.", "Es la mejor película del año.", "superlativo"]
      ]],
      ej: [["Ce gâteau est meilleur que l'autre.", "Este pastel es mejor que el otro."], ["Elle parle mieux français que moi.", "Habla francés mejor que yo."], ["C'est le meilleur film de l'année.", "Es la mejor película del año."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il parle meilleur que moi.", "Il parle mieux que moi.", "Con verbo: mieux."], ["Avec ses lunettes, il voit meilleur.", "Avec ses lunettes, il voit mieux.", "voir: verbo → mieux."], ["C'est plus bon.", "C'est meilleur.", "No se dice plus bon."]] }
  ],
  ejemplos: [
    { sit: "«Este vino es mejor.»", resp: "Ce vin est meilleur.", pasos: ["Adjetivo bon → meilleur."], porque: "Con nombre." },
    { sit: "«Hoy me siento mejor.»", resp: "Aujourd'hui, je me sens mieux.", pasos: ["Verbo → mieux."], porque: "Adverbio." },
    { sit: "«Es la peor idea.»", resp: "C'est la pire idée.", pasos: ["mauvais → pire."], porque: "Superlativo." }
  ],
  comprueba: [
    { q: "Con un verbo se usa…", o: ["mieux", "meilleur"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "El comparativo de bon es…", o: ["meilleur", "plus bon"], a: 0, b: "gr", porque: "Irregular." },
    { q: "«La peor idea» se dice…", o: ["la pire idée", "la plus mal idée"], a: 0, b: "gr", porque: "pire." }
  ],
  practica: [
    { fase: "guiada", c: ["b1mm-choix"], k: "sort", ask: "¿Meilleur(e) o mieux?", q: "Clasifica.", cats: ["meilleur(e)", "mieux"], items: [["un ___ salaire", 0], ["la ___ solution", 0], ["de ___ résultats", 0], ["le ___ joueur", 0], ["il joue ___", 1], ["ça va ___", 1], ["j'écris ___", 1], ["c'est ___ comme ça", 1]], pista: "¿Nombre o verbo?", why: "meilleur / mieux." },
    { fase: "guiada", c: ["b1mm-choix"], k: "choice", ask: "«Este vino es mejor.»", q: "«Ce vin est ___.»", o: ["meilleur", "mieux"], a: 0, pista: "Adjetivo.", why: "<b>meilleur</b>." },
    { fase: "guiada", c: ["b1mm-choix"], k: "choice", ask: "«Hoy me siento mejor.»", q: "«Aujourd'hui, je me sens ___.»", o: ["mieux", "meilleur"], a: 0, pista: "Verbo.", why: "<b>mieux</b>." },
    { fase: "indep", c: ["b1mm-sup"], k: "choice", ask: "«Es la peor idea.»", q: "«C'est la ___ idée.»", o: ["pire", "plus mal"], a: 0, why: "<b>pire</b>." },
    { fase: "indep", c: ["b1mm-choix"], k: "fill", ask: "Escribe «mejor».", q: "Elle cuisine ___ que sa mère.", acc: ["mieux"], why: "<b>mieux</b>." },
    { fase: "indep", c: ["b1mm-sup"], k: "fill", ask: "Escribe «mejor» (femenino).", q: "C'est ma ___ amie.", acc: ["meilleure"], why: "<b>meilleure</b>." },
    { fase: "aplica", c: ["b1mm-choix"], k: "match", ask: "Une cada palabra con su comparativo.", q: "Palabra → comparativo", pairs: [["bon", "meilleur"], ["bien", "mieux"], ["mauvais", "pire"], ["mal", "plus mal"]], why: "Formas." },
    { fase: "aplica", c: ["b1mm-choix"], k: "spot", ask: "Encuentra el error.", s: "Avec ses nouvelles lunettes , il voit [meilleur] qu'avant .", fix: "mieux", why: "<b>mieux</b>." },
    { fase: "dominio", c: ["b1mm-sup"], k: "order", ask: "Ordena: «Es el mejor restaurante de la ciudad».", tokens: ["C'est le meilleur", "restaurant", "de la ville."], why: "<b>C'est le meilleur restaurant de la ville.</b>" },
    { fase: "dominio", c: ["b1mm-choix"], k: "choice", ask: "«Habla francés mejor que yo.»", q: "«Elle parle ___ français que moi.»", o: ["mieux", "meilleur"], a: 0, why: "<b>mieux</b>." },
    { fase: "dominio", c: ["b1mm-choix", "b1mm-sup"], k: "listen", say: "Ce café est bien meilleur, et en plus on y travaille mieux.", acc: ["Ce café est bien meilleur, et en plus on y travaille mieux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce café est bien meilleur, et en plus on y travaille mieux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-negations-complexes"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les négations : ne… plus, jamais, rien, personne, que, ni… ni",
  objetivo: {
    que: "Vas a usar las negaciones específicas y la restricción ne… que, y a colocarlas en los tiempos compuestos.",
    corto: "Je n'ai rien vu. · Je n'ai vu personne. · Je n'ai que dix euros.",
    podras: ["Usar ne… plus, jamais, rien, personne, ni… ni.", "Usar ne… que (solo): je n'ai que dix euros.", "Colocar pas, plus, jamais, rien antes del participio y personne, que después."],
    iconos: ["ic2/candado", "ic2/pregunta", "ic2/lapiz"],
    previos: ["La negación avanzada (A2, lección 64) y déjà / ne… plus (A2, lección 26)."],
    capacidad: "Ahora niegas con precisión en cualquier tiempo."
  },
  requiere: R("na2-mots", "na2-sujet", "de-plus"), recupera: ["na2-mots"],
  conceptos: {
    "b1ng-mots": { n: "ne… plus, jamais, rien, personne, ni… ni; ne… que = solo", b: "gr" },
    "b1ng-place": { n: "tiempo compuesto: pas, plus, jamais, rien antes del participio; personne, que, nulle part después", b: "gr" }
  },
  video: {
    titulo: "Las negaciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "rien · personne · que", seg: [
        { es: "Hola. Más allá de ne… pas, hay negaciones precisas." } ] },
      { v: "dos",
        a: { tag: "antes del participio", fr: "Je n'ai rien vu.", es: "no vi nada" },
        b: { tag: "después del participio", fr: "Je n'ai vu personne.", es: "no vi a nadie" },
        seg: [ { es: "Rien, antes del participio:", p: 1 }, { fr: "Je n'ai rien vu.", p: 1 }, { es: "Personne, después:", p: 2 }, { fr: "Je n'ai vu personne.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Solo tengo cinco minutos.»", o: ["Je n'ai que cinq minutes.", "Je n'ai pas que cinq minutes."], a: 0,
        bien: "¡Sí! ne… que = solo.", mal: "«Solo» = ne… que.",
        seg: [ { es: "Pausa. Solo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ne… plus", "ne… jamais", "ne… rien", "ne… personne", "ne… que", "ni… ni"], seg: [
        { es: "Personne y que, después del participio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un verano tranquilo", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de cambios y vacaciones.",
    pj: PJ,
    lineas: [
      ["hugo", "Mon père ne fume plus depuis un an. Et toi, tu habites toujours rue Pasteur ?", "Mi papá ya no fuma desde hace un año. ¿Y tú, sigues viviendo en la calle Pasteur?"],
      ["camila", "Non, je n'habite plus ici. Je n'ai jamais vu la mer et je ne suis allée nulle part cet été.", "No, ya no vivo allí. Nunca he visto el mar y no fui a ninguna parte este verano."],
      ["hugo", "À la fête, je n'ai vu personne. Personne n'a téléphoné. Je n'ai rien compris !", "En la fiesta no vi a nadie. Nadie llamó. ¡No entendí nada!"],
      ["camila", "Moi, je ne bois ni café ni thé, et je n'ai que cinq minutes : j'y vais !", "Yo no bebo ni café ni té, y solo tengo cinco minutos: ¡me voy!"]
    ],
    fijate: "Fíjate: ne fume plus, n'habite plus, n'ai jamais vu, nulle part, n'ai vu personne, personne n'a, n'ai rien compris, ni… ni, n'ai que."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Negaciones y su lugar",
      idea: "ne… plus (ya no), ne… jamais (nunca), ne… rien (nada), ne… personne (nadie), ne… ni… ni (ni… ni), ne… nulle part (en ninguna parte), ne… aucun(e) (ningún). Ne… que no es negación sino restricción: Je n'ai que dix euros (solo). En tiempos compuestos, pas, plus, jamais, rien van antes del participio (Je n'ai rien vu); personne, que, nulle part, aucun van después (Je n'ai vu personne). Como sujeto: Personne n'est venu. Rien ne va. Tras negación, un / une / des / du → de, salvo con ne… que.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Lugar"], [
        ["Je n'habite plus ici.", "Ya no vivo aquí.", "ne… plus"],
        ["Je n'ai rien compris.", "No entendí nada.", "antes del participio"],
        ["Je n'ai jamais vu la mer.", "Nunca he visto el mar.", "antes del participio"],
        ["pas · plus · jamais · rien", "no · ya no · nunca · nada", "antes del participio"],
        ["Je n'ai vu personne. · personne", "No vi a nadie.", "después del participio"],
        ["personne · que · nulle part · aucun(e)", "nadie · solo · ninguna parte · ningún", "después del participio"],
        ["Je n'ai que cinq minutes.", "Solo tengo cinco minutos.", "ne… que"],
        ["Je ne mange ni viande ni poisson. · ni", "No como ni carne ni pescado.", "ni… ni"],
        ["Personne n'a téléphoné.", "Nadie llamó.", "sujeto"],
        ["ne… jamais = nunca · ne… plus = ya no · ne… rien = nada · ne… que = solo · ne… personne = nadie", "", "resumen"]
      ]],
      ej: [["Il ne fume plus depuis un an.", "Ya no fuma desde hace un año."], ["Je n'ai vu personne dans la rue.", "No vi a nadie en la calle."], ["Elle ne boit ni café ni thé.", "No bebe ni café ni té."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je n'ai personne vu.", "Je n'ai vu personne.", "Personne va después del participio."], ["Je n'ai vu rien.", "Je n'ai rien vu.", "Rien va antes del participio."], ["Je n'ai rencontré rien à la fête.", "Je n'ai rencontré personne à la fête.", "Personas: personne."]] }
  ],
  ejemplos: [
    { sit: "«Ya no vivo aquí.»", resp: "Je n'habite plus ici.", pasos: ["ne… plus."], porque: "Ya no." },
    { sit: "«No entendí nada.»", resp: "Je n'ai rien compris.", pasos: ["rien antes del participio."], porque: "Nada." },
    { sit: "«Solo tengo cinco minutos.»", resp: "Je n'ai que cinq minutes.", pasos: ["ne… que."], porque: "Restricción." }
  ],
  comprueba: [
    { q: "En passé composé, rien va…", o: ["antes del participio", "después del participio"], a: 0, b: "gr", porque: "Je n'ai rien vu." },
    { q: "En passé composé, personne va…", o: ["después del participio", "antes del participio"], a: 0, b: "gr", porque: "Je n'ai vu personne." },
    { q: "Ne… que significa…", o: ["solo", "nunca"], a: 0, b: "gr", porque: "Restricción." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ng-place"], k: "sort", ask: "¿Antes o después del participio?", q: "Clasifica.", cats: ["Antes del participio", "Después del participio"], items: [["pas", 0], ["plus", 0], ["jamais", 0], ["rien", 0], ["personne", 1], ["que", 1], ["nulle part", 1], ["aucun(e)", 1]], pista: "personne, que: después.", why: "Posición." },
    { fase: "guiada", c: ["b1ng-mots"], k: "choice", ask: "«Ya no vivo aquí.»", q: "«___»", o: ["Je n'habite plus ici.", "Je n'habite jamais ici."], a: 0, pista: "Ya no.", why: "<b>ne… plus</b>." },
    { fase: "guiada", c: ["b1ng-place"], k: "choice", ask: "«No entendí nada.»", q: "«___»", o: ["Je n'ai rien compris.", "Je n'ai compris rien."], a: 0, pista: "rien antes.", why: "<b>n'ai rien compris</b>." },
    { fase: "indep", c: ["b1ng-mots"], k: "choice", ask: "«Solo tengo cinco minutos.»", q: "«___»", o: ["Je n'ai que cinq minutes.", "Je n'ai pas cinq minutes."], a: 0, why: "<b>ne… que</b>." },
    { fase: "indep", c: ["b1ng-mots"], k: "fill", ask: "Escribe «nadie».", q: "Il n'y a ___ dans la salle.", acc: ["personne"], why: "<b>personne</b>." },
    { fase: "indep", c: ["b1ng-mots"], k: "fill", ask: "Escribe la palabra que falta (ni… ni).", q: "Je ne mange ___ viande ni poisson.", acc: ["ni"], why: "<b>ni… ni</b>." },
    { fase: "aplica", c: ["b1ng-mots"], k: "match", ask: "Une cada negación con su sentido.", q: "Negación → sentido", pairs: [["ne… jamais", "nunca"], ["ne… plus", "ya no"], ["ne… rien", "nada"], ["ne… que", "solo"], ["ne… personne", "nadie"]], why: "Negaciones." },
    { fase: "aplica", c: ["b1ng-mots"], k: "spot", ask: "Encuentra el error.", s: "Je n'ai rencontré [rien] à la fête , je ne connaissais pas les invités .", fix: "personne", why: "<b>personne</b>." },
    { fase: "dominio", c: ["b1ng-mots"], k: "order", ask: "Ordena: «Nadie llamó».", tokens: ["Personne", "n'a", "téléphoné."], why: "<b>Personne n'a téléphoné.</b>" },
    { fase: "dominio", c: ["b1ng-place"], k: "choice", ask: "«No vi a nadie en la calle.»", q: "«___»", o: ["Je n'ai vu personne dans la rue.", "Je n'ai personne vu dans la rue."], a: 0, why: "<b>n'ai vu personne</b>." },
    { fase: "dominio", c: ["b1ng-mots", "b1ng-place"], k: "listen", say: "Je n'ai jamais vu la mer et je ne suis allé nulle part cet été.", acc: ["Je n'ai jamais vu la mer et je ne suis allé nulle part cet été.", "Je n'ai jamais vu la mer et je ne suis allée nulle part cet été."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je n'ai jamais vu la mer et je ne suis allé nulle part cet été.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pasteur"], previo: [] }
};

/* ================================ B1.1·8 · El subjuntivo en uso ================================ */
E["b11-subjonctif-irreguliers"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les subjonctifs irréguliers : que je sois, que j'aie, que je fasse",
  objetivo: {
    que: "Vas a conjugar completos los subjuntivos irregulares más frecuentes.",
    corto: "que je sois · que j'aie · que j'aille · que je fasse.",
    podras: ["Conjugar être y avoir en subjuntivo en todas las personas.", "Usar las raíces únicas fass-, puiss-, sach-.", "Usar las dos raíces de aller (aill- / all-) y vouloir (veuill- / voul-)."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/engranaje"],
    previos: ["El subjuntivo presente (lección 6)."],
    capacidad: "Ahora ningún subjuntivo irregular te detiene."
  },
  requiere: R("b1sj-forme", "b1sj-usage"), recupera: ["b1sj-forme"],
  conceptos: {
    "b1si-etre": { n: "être: sois, sois, soit, soyons, soyez, soient · avoir: aie, aies, ait, ayons, ayez, aient", b: "gr" },
    "b1si-autres": { n: "fass-, puiss-, sach-; aller: aill- / all- (que nous allions); vouloir: veuill- / voul-", b: "gr" }
  },
  video: {
    titulo: "Subjuntivos irregulares", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "sois · aie · fasse", seg: [
        { es: "Hola. Siete verbos irregulares que usarás todo el tiempo." } ] },
      { v: "frase", filas: [
          { nota: "être", p: 1, partes: [["Il faut que tu sois patient.", "-", 1]] },
          { nota: "faire", p: 2, partes: [["Je veux que vous fassiez attention.", "-", 2]] },
          { nota: "avoir", p: 3, partes: [["Bien qu'il ait peu de temps…", "-", 3]] } ], seg: [
        { fr: "Il faut que tu sois patient.", p: 1 }, { fr: "Je veux que vous fassiez attention.", p: 2 }, { fr: "Bien qu'il ait peu de temps…", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo que ir a correos.»", o: ["Il faut que j'aille à la poste.", "Il faut que je vais à la poste."], a: 0,
        bien: "¡Sí! aller → aille.", mal: "Il faut que + subjuntivo: aille.",
        seg: [ { es: "Pausa. Que vaya." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["que je sois", "que j'aie", "que j'aille", "que je fasse", "que je puisse", "que je sache", "que je veuille"], seg: [
        { es: "Nous y vous de aller: allions, alliez.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reunión", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia organiza una reunión importante.",
    pj: PJ,
    lineas: [
      ["sofia", "Il faut absolument que vous soyez là avant huit heures.", "Es absolutamente necesario que estén aquí antes de las ocho."],
      ["camila", "D'accord. Il faut que nous allions à la réunion demain matin ?", "De acuerdo. ¿Tenemos que ir a la reunión mañana por la mañana?"],
      ["sofia", "Oui. Je veux que vous fassiez vos devoirs avant. Il faut qu'elle ait de la patience, Laura.", "Sí. Quiero que hagan sus deberes antes. Laura necesita tener paciencia."],
      ["camila", "Je doute qu'il sache la réponse, mais il est possible que je puisse venir plus tôt.", "Dudo que él sepa la respuesta, pero es posible que yo pueda venir más temprano."]
    ],
    fijate: "Fíjate: soyez, allions, fassiez, ait, sache, puisse."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las formas irregulares",
      idea: "être: que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient. avoir: que j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient. Raíz única: faire → fass- (que je fasse, que vous fassiez), pouvoir → puiss-, savoir → sach-. Dos raíces: aller → aill- (que j'aille) / all- con nous y vous (que nous allions); vouloir → veuill- / voul- (que nous voulions).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["que je sois · que tu sois · sois", "que yo sea · que tú seas", "être"],
        ["qu'il soit · que vous soyez · qu'ils soient", "que sea · que sean (ustedes) · que sean", "être"],
        ["que j'aie · qu'il ait · ait · que nous ayons", "que tenga · que tenga · que tengamos", "avoir"],
        ["que tu ailles · que j'aille · aille", "que vayas · que vaya", "aller"],
        ["que nous allions · allions", "que vayamos", "aller"],
        ["que vous fassiez · fassiez · qu'elles fassent · fasse", "que hagan · que hagan · que haga", "faire"],
        ["que je puisse · puisse", "que pueda", "pouvoir"],
        ["qu'il sache · sache", "que sepa", "savoir"],
        ["que je veuille · veuille", "que quiera", "vouloir"],
        ["il est · nous avons · tu vas · elles font", "es · tenemos · vas · hacen", "indicativo"]
      ]],
      ej: [["Il faut que tu sois patient.", "Hace falta que seas paciente."], ["Je veux que vous fassiez attention.", "Quiero que presten atención."], ["Bien qu'il ait peu de temps, il nous aide.", "Aunque tiene poco tiempo, nos ayuda."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il faut que je vais à la poste.", "Il faut que j'aille à la poste.", "Il faut que + subjuntivo: aille."], ["Il faut que nous allons à la réunion.", "Il faut que nous allions à la réunion.", "nous: allions."], ["Il faut qu'il a de la patience.", "Il faut qu'il ait de la patience.", "avoir: ait."]] }
  ],
  ejemplos: [
    { sit: "«Hace falta que seas puntual.»", resp: "Il faut que tu sois à l'heure.", pasos: ["être → sois."], porque: "Irregular." },
    { sit: "«Es posible que pueda venir.»", resp: "Il est possible que je puisse venir.", pasos: ["pouvoir → puisse."], porque: "Irregular." },
    { sit: "«Dudo que sepa la respuesta.»", resp: "Je doute qu'il sache la réponse.", pasos: ["savoir → sache."], porque: "Irregular." }
  ],
  comprueba: [
    { q: "El subjuntivo de être con tu es…", o: ["sois", "es"], a: 0, b: "gr", porque: "que tu sois." },
    { q: "El subjuntivo de aller con nous es…", o: ["allions", "aillions"], a: 0, b: "gr", porque: "Dos raíces." },
    { q: "El subjuntivo de avoir con il es…", o: ["ait", "a"], a: 0, b: "gr", porque: "qu'il ait." }
  ],
  practica: [
    { fase: "guiada", c: ["b1si-etre", "b1si-autres"], k: "sort", ask: "¿Subjuntivo o indicativo?", q: "Clasifica.", cats: ["Subjuntivo", "Indicativo"], items: [["qu'il soit", 0], ["que nous ayons", 0], ["que tu ailles", 0], ["qu'elles fassent", 0], ["il est", 1], ["nous avons", 1], ["tu vas", 1], ["elles font", 1]], pista: "Formas especiales.", why: "Modos." },
    { fase: "guiada", c: ["b1si-etre"], k: "choice", ask: "«Hace falta que seas puntual.»", q: "«Il faut que tu ___ à l'heure.»", o: ["sois", "es", "soit"], a: 0, pista: "être, tu.", why: "<b>sois</b>." },
    { fase: "guiada", c: ["b1si-autres"], k: "choice", ask: "«Quiero que hagan sus deberes.»", q: "«Je veux que vous ___ vos devoirs.»", o: ["fassiez", "faites"], a: 0, pista: "faire → fass-.", why: "<b>fassiez</b>." },
    { fase: "indep", c: ["b1si-autres"], k: "choice", ask: "«Es posible que pueda venir.»", q: "«___»", o: ["Il est possible que je puisse venir.", "Il est possible que je peux venir."], a: 0, why: "<b>puisse</b>." },
    { fase: "indep", c: ["b1si-etre"], k: "fill", ask: "Subjuntivo de avoir (elle).", q: "Il faut qu'elle ___ de la patience.", acc: ["ait"], why: "<b>ait</b>." },
    { fase: "indep", c: ["b1si-autres"], k: "fill", ask: "Subjuntivo de savoir (il).", q: "Je doute qu'il ___ la réponse.", acc: ["sache"], why: "<b>sache</b>." },
    { fase: "aplica", c: ["b1si-autres"], k: "match", ask: "Une cada verbo con su subjuntivo (je).", q: "Infinitivo → subjuntivo", pairs: [["aller", "aille"], ["vouloir", "veuille"], ["pouvoir", "puisse"], ["savoir", "sache"], ["faire", "fasse"]], why: "Irregulares." },
    { fase: "aplica", c: ["b1si-autres"], k: "spot", ask: "Encuentra el error.", s: "Il faut que nous [allons] à la réunion demain matin .", fix: "allions", why: "<b>allions</b>." },
    { fase: "dominio", c: ["b1si-etre"], k: "order", ask: "Ordena: «Hace falta que seas valiente».", tokens: ["Il faut", "que tu sois", "courageux."], why: "<b>Il faut que tu sois courageux.</b>" },
    { fase: "dominio", c: ["b1si-etre", "b1si-autres"], k: "choice", ask: "«Aunque tiene poco tiempo, nos ayuda.»", q: "«Bien qu'il ___ peu de temps, il nous aide.»", o: ["ait", "a"], a: 0, why: "<b>ait</b>." },
    { fase: "dominio", c: ["b1si-etre", "b1si-autres"], k: "listen", say: "Il faut absolument que vous soyez là avant huit heures.", acc: ["Il faut absolument que vous soyez là avant huit heures.", "Il faut absolument que vous soyez là avant 8 heures."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut absolument que vous soyez là avant huit heures.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Laura"], previo: [] }
};

E["b11-obligation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer l'obligation et la nécessité",
  objetivo: {
    que: "Vas a expresar obligación, necesidad y prohibición en distintos registros.",
    corto: "Il faut réserver. · Il est interdit de fumer.",
    podras: ["Usar il faut + infinitivo (general) e il faut que + subjuntivo (personal).", "Usar fórmulas formales: il est nécessaire / obligatoire / indispensable de…", "Prohibir (il est interdit de, il ne faut pas) y decir que no hace falta (ce n'est pas la peine de)."],
    iconos: ["ic2/candado", "ic2/pergamino", "ic2/bombilla"],
    previos: ["El subjuntivo (lecciones 6 y 41) y la colocation: devoir, il est interdit (A2, lección 35)."],
    capacidad: "Ahora entiendes y das normas en francés."
  },
  requiere: R("b1sj-usage", "co3-devoir", "co3-interdit"), recupera: ["co3-interdit"],
  conceptos: {
    "b1ob-obl": { n: "obligación: il faut (que), devoir, il est nécessaire / obligatoire / indispensable de", b: "gr" },
    "b1ob-int": { n: "prohibición: il est interdit de, il ne faut pas, défense de; no hace falta: ce n'est pas la peine de, pas besoin de", b: "gr" }
  },
  video: {
    titulo: "Obligación y prohibición", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "il faut · il est interdit", seg: [
        { es: "Hola. Lo que hay que hacer, lo que no hay que hacer, y lo que no hace falta." } ] },
      { v: "frase", filas: [
          { nota: "obligación", p: 1, partes: [["Il faut présenter une pièce d'identité.", "-", 1]] },
          { nota: "prohibición", p: 2, partes: [["Il est interdit de fumer.", "-", 2]] },
          { nota: "no hace falta", p: 3, partes: [["Ce n'est pas la peine de venir.", "-", 3]] } ], seg: [
        { fr: "Il faut présenter une pièce d'identité.", p: 1 }, { fr: "Il est interdit de fumer.", p: 2 }, { fr: "Ce n'est pas la peine de venir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No hace falta traer nada.»", o: ["Ce n'est pas la peine d'apporter quelque chose.", "Il ne faut pas apporter quelque chose."], a: 0,
        bien: "¡Sí! Il ne faut pas es prohibición.", mal: "Il ne faut pas = está prohibido.",
        seg: [ { es: "Pausa. No hace falta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il faut", "tu dois", "il est obligatoire de", "il est interdit de", "ce n'est pas la peine de"], seg: [
        { es: "Il ne faut pas: prohibido. Pas la peine: no hace falta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el museo", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo entran a un museo.",
    pj: PJ,
    lineas: [
      ["hugo", "Pour entrer, il faut présenter une pièce d'identité.", "Para entrar hay que presentar un documento de identidad."],
      ["camila", "D'accord. Il ne faut pas toucher les œuvres, et il est interdit d'utiliser son portable.", "De acuerdo. No se deben tocar las obras, y está prohibido usar el celular."],
      ["hugo", "Il est interdit de stationner ici, aussi. Il faut que vous remplissiez ce formulaire, madame.", "También está prohibido estacionar aquí. Tiene que llenar este formulario, señora."],
      ["camila", "Et toi, il faut que tu prennes tes médicaments ! Ce n'est pas la peine de m'attendre.", "¡Y tú tienes que tomar tus medicamentos! No hace falta que me esperes."]
    ],
    fijate: "Fíjate: il faut présenter; il ne faut pas toucher, il est interdit de (prohibición); il faut que vous remplissiez, que tu prennes; ce n'est pas la peine de."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Hay que, prohibido, no hace falta",
      idea: "General: il faut + infinitivo: Il faut réserver. Personal: il faut que + subjuntivo o devoir: Il faut que tu partes. Tu dois partir. Formal: il est nécessaire / indispensable / obligatoire de…, vous êtes tenus de… Prohibición: il est interdit de…, il ne faut pas…, défense de…, tu ne dois pas… Ojo: il ne faut pas = no se debe (prohibición); para «no hace falta» se dice ce n'est pas la peine de… o pas besoin de…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Il faut payer. · Il faut… = Hay que…", "Hay que pagar.", "obligación"],
        ["Tu dois signer. · Vous êtes tenus de répondre.", "Tienes que firmar. · Están obligados a responder.", "obligación"],
        ["Il est obligatoire de porter un casque.", "Es obligatorio llevar casco.", "obligación"],
        ["Il est indispensable de… = Es imprescindible…", "Es imprescindible…", "obligación"],
        ["Il faut que vous remplissiez · remplissiez", "Tienen que llenar", "personal"],
        ["Il faut que tu prennes · prennes", "Tienes que tomar", "personal"],
        ["Il est interdit de fumer. · interdit", "Está prohibido fumar.", "prohibición"],
        ["Il ne faut pas crier. · Défense d'entrer. · Il est interdit de courir. · Tu ne dois pas mentir.", "No se debe gritar. · Prohibido entrar. · Prohibido correr. · No debes mentir.", "prohibición"],
        ["Ce n'est pas la peine de venir. · Pas besoin de…", "No hace falta venir. · No hace falta…", "no hace falta"]
      ]],
      ej: [["Il faut que je finisse ce rapport ce soir.", "Tengo que terminar este informe esta noche."], ["Il est interdit de fumer dans le bâtiment.", "Está prohibido fumar en el edificio."], ["Ce n'est pas la peine de venir.", "No hace falta que vengas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il ne faut pas venir. (= no hace falta)", "Ce n'est pas la peine de venir.", "Il ne faut pas es prohibición."], ["Il faut que tu prends tes médicaments.", "Il faut que tu prennes tes médicaments.", "Il faut que + subjuntivo."], ["Il est interdit fumer.", "Il est interdit de fumer.", "interdit de + infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Tienes que descansar.»", resp: "Il faut que tu te reposes.", pasos: ["il faut que + subjuntivo."], porque: "Personal." },
    { sit: "«Prohibido estacionar aquí.»", resp: "Il est interdit de stationner ici.", pasos: ["interdit de + infinitivo."], porque: "Prohibición." },
    { sit: "«No hace falta traer nada.»", resp: "Ce n'est pas la peine d'apporter quelque chose.", pasos: ["ce n'est pas la peine de."], porque: "No hace falta." }
  ],
  comprueba: [
    { q: "«Il ne faut pas toucher» significa…", o: ["No se debe tocar.", "No hace falta tocar."], a: 0, b: "gr", porque: "Prohibición." },
    { q: "«No hace falta venir» se dice…", o: ["Ce n'est pas la peine de venir.", "Il ne faut pas venir."], a: 0, b: "gr", porque: "pas la peine." },
    { q: "Il faut que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Personal." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ob-obl", "b1ob-int"], k: "sort", ask: "¿Obligación o prohibición?", q: "Clasifica.", cats: ["Obligación", "Prohibición"], items: [["Il faut payer.", 0], ["Tu dois signer.", 0], ["Il est obligatoire de porter un casque.", 0], ["Vous êtes tenus de répondre.", 0], ["Il ne faut pas crier.", 1], ["Défense d'entrer.", 1], ["Il est interdit de courir.", 1], ["Tu ne dois pas mentir.", 1]], pista: "¿Hacer o no hacer?", why: "Tipos." },
    { fase: "guiada", c: ["b1ob-int"], k: "choice", ask: "«No hace falta traer nada.»", q: "«___»", o: ["Ce n'est pas la peine d'apporter quelque chose.", "Il ne faut pas apporter quelque chose."], a: 0, pista: "No es prohibición.", why: "<b>Ce n'est pas la peine</b>." },
    { fase: "guiada", c: ["b1ob-obl"], k: "choice", ask: "«Tienes que descansar.»", q: "«___»", o: ["Il faut que tu te reposes.", "Il faut que tu te reposer."], a: 0, pista: "Subjuntivo.", why: "<b>que tu te reposes</b>." },
    { fase: "indep", c: ["b1ob-int"], k: "choice", es: true, ask: "«Il ne faut pas toucher les œuvres.» significa…", q: "Elige.", o: ["No se deben tocar las obras.", "No hace falta tocar las obras."], a: 0, why: "Prohibición." },
    { fase: "indep", c: ["b1ob-int"], k: "fill", ask: "Escribe «prohibido».", q: "Il est ___ de stationner ici.", acc: ["interdit"], why: "<b>interdit</b>." },
    { fase: "indep", c: ["b1ob-obl"], k: "fill", ask: "Subjuntivo de remplir (vous).", q: "Il faut que vous ___ ce formulaire.", acc: ["remplissiez"], why: "<b>remplissiez</b>." },
    { fase: "aplica", c: ["b1ob-obl", "b1ob-int"], k: "match", ask: "Une cada fórmula con su traducción.", q: "Francés → español", pairs: [["Il faut…", "Hay que…"], ["Il est interdit de…", "Está prohibido…"], ["Pas besoin de…", "No hace falta…"], ["Il est indispensable de…", "Es imprescindible…"]], why: "Fórmulas." },
    { fase: "aplica", c: ["b1ob-obl"], k: "spot", ask: "Encuentra el error.", s: "Il faut que tu [prends] tes médicaments tous les jours .", fix: "prennes", why: "<b>prennes</b>." },
    { fase: "dominio", c: ["b1ob-int"], k: "order", ask: "Ordena: «Está prohibido usar el celular».", tokens: ["Il est interdit", "d'utiliser", "son portable."], why: "<b>Il est interdit d'utiliser son portable.</b>" },
    { fase: "dominio", c: ["b1ob-obl"], k: "choice", ask: "«Hay que reservar.» (general)", q: "«___»", o: ["Il faut réserver.", "Il faut que réserver."], a: 0, why: "General: infinitivo." },
    { fase: "dominio", c: ["b1ob-obl", "b1ob-int"], k: "listen", say: "Pour entrer, il faut présenter une pièce d'identité.", acc: ["Pour entrer, il faut présenter une pièce d'identité."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pour entrer, il faut présenter une pièce d'identité.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-conseiller"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Conseiller et suggérer",
  objetivo: {
    que: "Vas a aconsejar y sugerir con varias estructuras: tu devrais, je te conseille de, il vaudrait mieux, et si on…",
    corto: "Je te conseille de… · Et si on faisait une pause ?",
    podras: ["Aconsejar con tu devrais, je te conseille de + infinitivo, à ta place / si j'étais toi + condicional.", "Usar il vaudrait mieux + infinitivo o que + subjuntivo.", "Sugerir algo juntos: Et si on + imparfait ?, Ça te dirait de…?"],
    iconos: ["ic2/bombilla", "ic2/amigos", "ic2/corazon"],
    previos: ["El condicional para aconsejar (lección 22) y el subjuntivo (lección 6)."],
    capacidad: "Ahora aconsejas y propones planes con naturalidad."
  },
  requiere: R("b1cp-conseil", "b1sj-usage", "pr2-proposer"), recupera: ["b1cp-conseil"],
  conceptos: {
    "b1cs-conseil": { n: "aconsejar: tu devrais, je te conseille de + inf., il vaudrait mieux (que + subj.), si j'étais toi + condicional", b: "gr" },
    "b1cs-suggest": { n: "sugerir: Et si on + imparfait ?, Ça te dirait de…?, On pourrait…, Pourquoi ne pas…?", b: "gr" }
  },
  video: {
    titulo: "Aconsejar y sugerir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "et si on… ?", seg: [
        { es: "Hola. Muchas formas de aconsejar y de proponer." } ] },
      { v: "frase", filas: [
          { nota: "aconsejar", p: 1, partes: [["Je te conseille de parler à ton chef.", "-", 1]] },
          { nota: "mejor", p: 2, partes: [["Il vaudrait mieux partir tôt.", "-", 2]] },
          { nota: "sugerir", p: 3, partes: [["Et si on faisait une pause ?", "-", 3]] } ], seg: [
        { fr: "Je te conseille de parler à ton chef.", p: 1 }, { fr: "Il vaudrait mieux partir tôt.", p: 2 }, { fr: "Et si on faisait une pause ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Te aconsejo descansar.»", o: ["Je te conseille de te reposer.", "Je te conseille que tu te reposes."], a: 0,
        bien: "¡Sí! Conseiller de + infinitivo.", mal: "Conseiller + de + infinitivo.",
        seg: [ { es: "Pausa. Te aconsejo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tu devrais", "je te conseille de", "il vaudrait mieux", "si j'étais toi", "et si on…"], seg: [
        { es: "Et si on, con imparfait: et si on allait…", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Estrés", img: "bg-cafe", yo: "camila",
    escena: "Hugo está estresado; Camila lo aconseja.",
    pj: PJ,
    lineas: [
      ["hugo", "Je suis épuisé, j'ai trop de travail.", "Estoy agotado, tengo demasiado trabajo."],
      ["camila", "Tu devrais faire du sport. À ta place, je prendrais quelques jours de vacances.", "Deberías hacer deporte. Yo en tu lugar tomaría unos días de vacaciones."],
      ["hugo", "Tu as raison. Si j'étais toi, je changerais de travail, tu vas dire !", "Tienes razón. «Si yo fuera tú, cambiaría de trabajo», ¡vas a decir!"],
      ["camila", "Ha ha ! Il vaudrait mieux que tu partes tôt ce soir. Et si on allait à la plage ce week-end ?", "¡Ja, ja! Sería mejor que salieras temprano esta noche. ¿Y si vamos a la playa este fin de semana?"]
    ],
    fijate: "Fíjate: tu devrais, à ta place je prendrais, si j'étais toi je changerais, il vaudrait mieux que tu partes, et si on allait."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Estructuras para aconsejar",
      idea: "Tu devrais / Vous devriez + infinitivo. Je te conseille de + infinitivo; je te recommande de… Il vaudrait mieux + infinitivo (il vaudrait mieux attendre) o que + subjuntivo (il vaudrait mieux que tu partes). Si j'étais toi, je… / À ta place, je… + condicional. Para sugerir hacer algo juntos: Et si on + imparfait ? (Et si on sortait ?), Ça te dirait de…?, On pourrait…, Pourquoi ne pas…?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Tu devrais consulter un médecin.", "Deberías consultar un médico.", "consejo"],
        ["Je te conseille de te reposer.", "Te aconsejo descansar.", "consejo + de"],
        ["Je te recommande ce livre.", "Te recomiendo este libro.", "consejo"],
        ["Il vaudrait mieux attendre.", "Sería mejor esperar.", "+ infinitivo"],
        ["Il vaudrait mieux que tu partes. · partes", "Sería mejor que salieras.", "+ subjuntivo"],
        ["Si j'étais toi, je changerais… · étais", "Si yo fuera tú, cambiaría…", "+ condicional"],
        ["À ta place, j'accepterais. · À ta place, je dormirais.", "Yo en tu lugar aceptaría. · dormiría.", "+ condicional"],
        ["Et si on allait à la plage ? · Et si on sortait ce soir ?", "¿Y si vamos a la playa? · ¿Y si salimos esta noche?", "sugerencia"],
        ["Pourquoi ne pas aller au parc ? · Ça te dirait de dîner ensemble ? · On pourrait voir un film.", "¿Por qué no ir al parque? · ¿Te apetece cenar juntos? · Podríamos ver una película.", "sugerencia"]
      ]],
      ej: [["Je te conseille de parler à ton chef.", "Te aconsejo hablar con tu jefe."], ["Il vaudrait mieux partir tôt.", "Sería mejor salir temprano."], ["Et si on faisait une pause ?", "¿Y si hacemos una pausa?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je te conseille que tu parles.", "Je te conseille de parler.", "Conseiller + de + infinitivo."], ["Si j'étaient toi, je parlerais…", "Si j'étais toi, je parlerais…", "je → étais."], ["Il vaudrait mieux que tu pars.", "Il vaudrait mieux que tu partes.", "+ subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "«Te aconsejo descansar.»", resp: "Je te conseille de te reposer.", pasos: ["conseiller de + infinitivo."], porque: "Consejo." },
    { sit: "«¿Y si vamos a la playa?»", resp: "Et si on allait à la plage ?", pasos: ["Et si on + imparfait."], porque: "Sugerencia." },
    { sit: "«Yo en tu lugar, aceptaría.»", resp: "À ta place, j'accepterais.", pasos: ["à ta place + condicional."], porque: "Consejo." }
  ],
  comprueba: [
    { q: "Conseiller va seguido de…", o: ["de + infinitivo", "que + indicativo"], a: 0, b: "gr", porque: "Je te conseille de…" },
    { q: "Et si on… va con…", o: ["imparfait", "presente"], a: 0, b: "gr", porque: "Et si on sortait ?" },
    { q: "Il vaudrait mieux que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "que tu partes." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cs-conseil", "b1cs-suggest"], k: "sort", ask: "¿Consejo o sugerencia para hacer algo juntos?", q: "Clasifica.", cats: ["Consejo", "Sugerencia (hacer algo juntos)"], items: [["Tu devrais consulter un médecin.", 0], ["Je te recommande ce livre.", 0], ["À ta place, je dormirais.", 0], ["Il vaudrait mieux attendre.", 0], ["Et si on sortait ce soir ?", 1], ["Pourquoi ne pas aller au parc ?", 1], ["Ça te dirait de dîner ensemble ?", 1], ["On pourrait voir un film.", 1]], pista: "¿Para ti o para nosotros?", why: "Usos." },
    { fase: "guiada", c: ["b1cs-conseil"], k: "choice", ask: "«Te aconsejo descansar.»", q: "«___»", o: ["Je te conseille de te reposer.", "Je te conseille que tu te reposes."], a: 0, pista: "de + infinitivo.", why: "<b>de te reposer</b>." },
    { fase: "guiada", c: ["b1cs-suggest"], k: "choice", ask: "«¿Y si vamos a la playa?»", q: "«___»", o: ["Et si on allait à la plage ?", "Et si on va à la plage ?"], a: 0, pista: "imparfait.", why: "<b>allait</b>." },
    { fase: "indep", c: ["b1cs-conseil"], k: "choice", ask: "«Yo en tu lugar, aceptaría.»", q: "«___»", o: ["À ta place, j'accepterais.", "À ta place, j'accepterai."], a: 0, why: "Condicional." },
    { fase: "indep", c: ["b1cs-conseil"], k: "fill", ask: "Imparfait de être (je).", q: "Si j'___ toi, je changerais de travail.", acc: ["étais"], why: "<b>étais</b>." },
    { fase: "indep", c: ["b1cs-conseil"], k: "fill", ask: "Subjuntivo de partir (tu).", q: "Il vaudrait mieux que tu ___ tôt.", acc: ["partes"], why: "<b>partes</b>." },
    { fase: "aplica", c: ["b1cs-conseil", "b1cs-suggest"], k: "match", ask: "Une cada inicio con lo que lleva detrás.", q: "Estructura → sigue", pairs: [["Je te conseille", "de + infinitivo"], ["Il vaudrait mieux que", "+ subjuntivo"], ["Et si on", "+ imparfait"], ["À ta place, je", "+ condicional"]], why: "Estructuras." },
    { fase: "aplica", c: ["b1cs-conseil"], k: "spot", ask: "Encuentra el error.", s: "Si j'[étaient] toi , je parlerais franchement à ton ami .", fix: "étais", why: "<b>étais</b>." },
    { fase: "dominio", c: ["b1cs-conseil"], k: "order", ask: "Ordena: «Deberías hacer deporte».", tokens: ["Tu devrais", "faire", "du sport."], why: "<b>Tu devrais faire du sport.</b>" },
    { fase: "dominio", c: ["b1cs-suggest"], k: "choice", ask: "«Podríamos ver una película.»", q: "«___»", o: ["On pourrait voir un film.", "On pourra voir un film hier."], a: 0, why: "<b>On pourrait</b>." },
    { fase: "dominio", c: ["b1cs-conseil", "b1cs-suggest"], k: "listen", say: "À ta place, je prendrais quelques jours de vacances.", acc: ["À ta place, je prendrais quelques jours de vacances."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>À ta place, je prendrais quelques jours de vacances.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-sentiments"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer ses sentiments : joie, peur, colère, déception",
  objetivo: {
    que: "Vas a expresar tus sentimientos con adjetivos, verbos y la estructura de + infinitivo / que + subjuntivo.",
    corto: "Je suis content de te voir. · Je suis content que tu sois là.",
    podras: ["Usar adjetivos de sentimiento: ravi, soulagé, déçu, furieux, inquiet.", "Usar de + infinitivo con el mismo sujeto y que + subjuntivo con otro sujeto.", "Usar expresiones: avoir peur de, en avoir marre, être fier de."],
    iconos: ["ic2/corazon", "ic2/llama", "ic2/estrella"],
    previos: ["Los sentimientos (A2, lección 47) y el subjuntivo (lecciones 6 y 41)."],
    capacidad: "Ahora dices exactamente cómo te sientes."
  },
  requiere: R("se-etre", "se-ca", "b1si-etre"), recupera: ["se-etre"],
  conceptos: {
    "b1se-voc": { n: "ravi, fier, soulagé, déçu, furieux, inquiet, gêné; avoir peur de, en avoir marre", b: "voc" },
    "b1se-struct": { n: "mismo sujeto: être + adj. + de + infinitivo; otro sujeto: que + subjuntivo", b: "voc" }
  },
  video: {
    titulo: "Los sentimientos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "ravi · déçu · soulagé", seg: [
        { es: "Hola. Para cada emoción, su palabra, y una regla para el subjuntivo." } ] },
      { v: "dos",
        a: { tag: "mismo sujeto", fr: "Je suis ravi de venir.", es: "de + infinitivo" },
        b: { tag: "otro sujeto", fr: "Je suis ravi que tu viennes.", es: "que + subjuntivo" },
        seg: [ { es: "Yo vengo y yo estoy feliz:", p: 1 }, { fr: "Je suis ravi de venir.", p: 1 }, { es: "Tú vienes y yo estoy feliz:", p: 2 }, { fr: "Je suis ravi que tu viennes.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me alegro de que estés aquí.»", o: ["Je suis heureux que tu sois là.", "Je suis heureux que tu es là."], a: 0,
        bien: "¡Sí! Sentimiento + que → subjuntivo.", mal: "Después de un sentimiento + que: subjuntivo.",
        seg: [ { es: "Pausa. Que estés aquí." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ravi", "soulagé", "déçu", "furieux", "j'en ai marre", "j'ai peur de"], seg: [
        { es: "Otro sujeto, subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La boda", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de una boda y de sus emociones.",
    pj: PJ,
    lineas: [
      ["camila", "Nous sommes très contents que vous veniez à notre mariage ! — dit ma cousine.", "«¡Estamos muy contentos de que vengan a nuestra boda!», dice mi prima."],
      ["hugo", "Super ! Moi, je suis tellement soulagé que tout se soit bien passé à l'examen.", "¡Súper! Yo estoy tan aliviado de que todo haya salido bien en el examen."],
      ["camila", "Je suis fière de toi ! Mais je suis triste que tu doives partir. Et j'ai peur de rater mon avion.", "¡Estoy orgullosa de ti! Pero estoy triste de que tengas que irte. Y tengo miedo de perder mi avión."],
      ["hugo", "Ma sœur est déçue qu'il ne soit pas venu. Et moi, j'en ai marre de ce bruit !", "Mi hermana está decepcionada de que él no viniera. ¡Y yo estoy harto de este ruido!"]
    ],
    fijate: "Fíjate: contents que vous veniez, soulagé que tout se soit, triste que tu doives, déçue qu'il ne soit pas (subjuntivo); fière de toi, peur de rater, marre de (de)."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Palabras de las emociones",
      idea: "Adjetivos: content, heureux, ravi (encantado), fier (orgulloso), soulagé (aliviado), enthousiaste; triste, déçu (decepcionado), fâché o furieux (enfadado), inquiet (preocupado), angoissé, jaloux, gêné (avergonzado, incómodo). Verbos y expresiones: avoir peur de, avoir honte de, en avoir marre (de) (estar harto), s'inquiéter, se sentir seul. Mismo sujeto: être + adjetivo + de + infinitivo (je suis ravi de venir); otro sujeto: que + subjuntivo (je suis ravi que tu viennes). Intensificar: vraiment, tellement, très, super (familiar).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "ravi · fier · soulagé · enthousiaste", es: "encantado · orgulloso · aliviado · entusiasta — positivas" },
        { fr: "déçu · furieux · angoissé · jaloux", es: "decepcionado · furioso · angustiado · celoso — negativas" },
        { fr: "inquiet · fâché · gêné", es: "preocupado · enfadado · avergonzado / incómodo" },
        { fr: "avoir peur de · peur", es: "tener miedo de" },
        { fr: "J'en ai marre !", es: "¡Estoy harto!" },
        { fr: "Je suis fier de toi.", es: "Estoy orgulloso de ti." },
        { fr: "que tu doives · doives", es: "que tengas que" },
        { fr: "que vous veniez · veniez", es: "que vengan" },
        { fr: "Je suis vraiment déçu.", es: "Estoy muy decepcionado." },
        { fr: "Je suis heureux que tu sois là.", es: "Me alegro de que estés aquí." }
      ],
      ej: [["Je suis déçue qu'il ne soit pas venu.", "Estoy decepcionada de que no viniera."], ["J'en ai marre de ce bruit !", "¡Estoy harto de este ruido!"], ["Elle a peur de parler en public.", "Tiene miedo de hablar en público."]],
      clave: "Sentimiento + que + otro sujeto → subjuntivo." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis content que tu es là.", "Je suis content que tu sois là.", "Sentimiento + que → subjuntivo."], ["Nous sommes contents que vous venez.", "Nous sommes contents que vous veniez.", "Subjuntivo: veniez."], ["Je suis content que je viens.", "Je suis content de venir.", "Mismo sujeto: de + infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Me alegro de que estés aquí.»", resp: "Je suis heureux que tu sois là.", pasos: ["Otro sujeto: que + subjuntivo."], porque: "Sentimiento." },
    { sit: "«Estoy harta.»", resp: "J'en ai marre.", pasos: ["Expresión familiar."], porque: "Fastidio." },
    { sit: "«Tiene miedo de hablar en público.»", resp: "Elle a peur de parler en public.", pasos: ["avoir peur de + infinitivo."], porque: "Mismo sujeto." }
  ],
  comprueba: [
    { q: "Con otro sujeto, el sentimiento va seguido de…", o: ["que + subjuntivo", "que + indicativo"], a: 0, b: "voc", porque: "que tu sois." },
    { q: "Soulagé significa…", o: ["aliviado", "decepcionado"], a: 0, b: "voc", porque: "Positivo." },
    { q: "«Je suis vraiment déçu» expresa…", o: ["decepción", "alegría"], a: 0, b: "voc", porque: "déçu." }
  ],
  practica: [
    { fase: "guiada", c: ["b1se-voc"], k: "sort", ask: "¿Emoción positiva o negativa?", q: "Clasifica.", cats: ["Positiva", "Negativa"], items: [["ravi", 0], ["fier", 0], ["soulagé", 0], ["enthousiaste", 0], ["déçu", 1], ["furieux", 1], ["angoissé", 1], ["jaloux", 1]], pista: "¿Te sentirías bien?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1se-struct"], k: "choice", ask: "«Me alegro de que estés aquí.»", q: "«___»", o: ["Je suis heureux que tu sois là.", "Je suis heureux que tu es là."], a: 0, pista: "Subjuntivo.", why: "<b>sois</b>." },
    { fase: "guiada", c: ["b1se-voc"], k: "choice", ask: "«Estoy harta.»", q: "«___»", o: ["J'en ai marre.", "J'ai marre."], a: 0, pista: "en.", why: "<b>J'en ai marre</b>." },
    { fase: "indep", c: ["b1se-voc"], k: "choice", es: true, ask: "«Je suis vraiment déçu.» expresa…", q: "Elige.", o: ["Decepción", "Alivio", "Alegría"], a: 0, why: "Decepción." },
    { fase: "indep", c: ["b1se-voc"], k: "fill", ask: "Escribe «miedo».", q: "J'ai ___ de rater mon avion.", acc: ["peur"], why: "<b>peur</b>." },
    { fase: "indep", c: ["b1se-struct"], k: "fill", ask: "Subjuntivo de devoir (tu).", q: "Je suis triste que tu ___ partir.", acc: ["doives"], why: "<b>doives</b>." },
    { fase: "aplica", c: ["b1se-voc"], k: "match", ask: "Une cada adjetivo con su traducción.", q: "Francés → español", pairs: [["ravi", "encantado"], ["inquiet", "preocupado"], ["fâché", "enfadado"], ["gêné", "avergonzado / incómodo"], ["soulagé", "aliviado"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1se-struct"], k: "spot", ask: "Encuentra el error.", s: "Nous sommes très contents que vous [venez] à notre mariage .", fix: "veniez", why: "<b>veniez</b>." },
    { fase: "dominio", c: ["b1se-voc"], k: "order", ask: "Ordena: «Estoy orgulloso de ti».", tokens: ["Je suis", "fier", "de toi."], why: "<b>Je suis fier de toi.</b>" },
    { fase: "dominio", c: ["b1se-struct"], k: "choice", ask: "«Estoy encantado de venir.» (yo vengo)", q: "«___»", o: ["Je suis ravi de venir.", "Je suis ravi que je vienne."], a: 0, why: "Mismo sujeto: <b>de venir</b>." },
    { fase: "dominio", c: ["b1se-voc", "b1se-struct"], k: "listen", say: "Je suis tellement soulagé que tout se soit bien passé.", acc: ["Je suis tellement soulagé que tout se soit bien passé.", "Je suis tellement soulagée que tout se soit bien passé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je suis tellement soulagé que tout se soit bien passé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-accord-desaccord"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer l'accord et le désaccord",
  objetivo: {
    que: "Vas a expresar acuerdo, acuerdo parcial y desacuerdo con fórmulas graduadas.",
    corto: "Tout à fait. · C'est vrai, mais… · Pas du tout.",
    podras: ["Mostrar acuerdo: je suis tout à fait d'accord, tu as raison, exactement.", "Matizar: c'est vrai, mais…, dans un sens, oui.", "Discrepar con fuerza o con suavidad: pas du tout, au contraire, je vois les choses autrement."],
    iconos: ["ic2/espadas", "ic2/amigos", "ic2/microfono"],
    previos: ["Estar de acuerdo o no (A2, lección 51) y opinar (lección 8)."],
    capacidad: "Ahora participas en un debate con matices."
  },
  requiere: R("ad2-accord", "b1op-mode"), recupera: ["ad2-accord"],
  conceptos: {
    "b1ad-accord": { n: "acuerdo: tout à fait, tu as raison, exactement, bien sûr; parcial: c'est vrai, mais…, dans un sens", b: "gr" },
    "b1ad-desac": { n: "desacuerdo: je ne suis pas d'accord, au contraire, pas du tout, tu as tort; suave: je vois les choses autrement", b: "gr" }
  },
  video: {
    titulo: "Acuerdo y desacuerdo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "d'accord · pas d'accord", seg: [
        { es: "Hola. Entre sí y no, hay muchos matices." } ] },
      { v: "frase", filas: [
          { nota: "acuerdo", p: 1, partes: [["Je suis tout à fait d'accord avec vous.", "-", 1]] },
          { nota: "matiz", p: 2, partes: [["C'est vrai, mais il faut penser au prix.", "-", 2]] },
          { nota: "desacuerdo", p: 3, partes: [["Je ne partage pas ton avis.", "-", 3]] } ], seg: [
        { fr: "Je suis tout à fait d'accord avec vous.", p: 1 }, { fr: "C'est vrai, mais il faut penser au prix.", p: 2 }, { fr: "Je ne partage pas ton avis.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy totalmente de acuerdo contigo.»", o: ["Je suis tout à fait d'accord avec toi.", "Je suis tout à fait d'accord de toi."], a: 0,
        bien: "¡Sí! D'accord avec.", mal: "Se dice d'accord avec.",
        seg: [ { es: "Pausa. De acuerdo contigo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tout à fait", "tu as raison", "c'est vrai, mais", "au contraire", "pas du tout"], seg: [
        { es: "Para suavizar: je vois les choses autrement.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate del alquiler", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo debaten sobre vivir en el centro.",
    pj: PJ,
    lineas: [
      ["hugo", "Vivre au centre, c'est mieux. Tu es d'accord ?", "Vivir en el centro es mejor. ¿Estás de acuerdo?"],
      ["camila", "C'est vrai, mais je vois les choses un peu autrement : c'est très cher.", "Es verdad, pero veo las cosas un poco distinto: es muy caro."],
      ["hugo", "Tu as raison, je me suis trompé sur le prix. Je suis tout à fait d'accord avec toi sur ce point.", "Tienes razón, me equivoqué con el precio. Estoy totalmente de acuerdo contigo en ese punto."],
      ["camila", "Mais vivre loin, c'est mieux ? Pas du tout ! Je ne partage pas ton avis.", "¿Pero vivir lejos es mejor? ¡Para nada! No comparto tu opinión."]
    ],
    fijate: "Fíjate: c'est vrai, mais; je vois les choses autrement; tu as raison; tout à fait d'accord avec toi; pas du tout; je ne partage pas ton avis."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Graduar la respuesta",
      idea: "Acuerdo: Je suis (tout à fait) d'accord avec toi. Tu as raison. Exactement ! Absolument ! Bien sûr. C'est clair. Acuerdo parcial: C'est vrai, mais… Je suis d'accord sur ce point, cependant… Dans un sens, oui. Desacuerdo: Je ne suis pas d'accord. Je ne pense pas. Au contraire ! Pas du tout ! Pas vraiment. Tu as tort. Suavizar: Je ne suis pas sûr que… (+ subjuntivo), Je vois les choses autrement, Je ne partage pas ton avis.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Grado"], [
        ["Tout à fait. · Bien sûr. · Tu as raison. · C'est clair.", "Totalmente. · Claro. · Tienes razón. · Está claro.", "acuerdo"],
        ["Je suis tout à fait d'accord avec toi. · tout · avec", "Estoy totalmente de acuerdo contigo.", "acuerdo"],
        ["raison · Tu as raison.", "razón", "acuerdo"],
        ["Absolument !", "¡Absolutamente!", "acuerdo total"],
        ["C'est vrai, mais… · Dans un sens, oui.", "Es verdad, pero… · En cierto sentido, sí.", "parcial"],
        ["Au contraire ! · Tu as tort. · Pas vraiment. · Je ne crois pas.", "¡Al contrario! · Te equivocas. · No mucho. · No creo.", "desacuerdo"],
        ["Pas du tout !", "¡Para nada!", "desacuerdo total"],
        ["Je ne partage pas ton avis.", "No comparto tu opinión.", "desacuerdo"],
        ["Je vois les choses autrement.", "Veo las cosas de otra manera.", "desacuerdo suave"]
      ]],
      ej: [["Je suis tout à fait d'accord avec vous.", "Estoy totalmente de acuerdo con usted."], ["C'est vrai, mais il faut aussi penser au prix.", "Es verdad, pero también hay que pensar en el precio."], ["Je ne partage pas ton avis.", "No comparto tu opinión."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis d'accord de toi.", "Je suis d'accord avec toi.", "d'accord avec."], ["Tu as la raison.", "Tu as raison.", "Sin artículo."], ["Je suis d'accord avec toi que c'est cher.", "Je suis d'accord avec toi : c'est cher.", "Mejor dos puntos o «pour dire que»."]] }
  ],
  ejemplos: [
    { sit: "«Tienes razón.»", resp: "Tu as raison.", pasos: ["avoir raison, sin artículo."], porque: "Acuerdo." },
    { sit: "Matizas.", resp: "C'est vrai, mais…", pasos: ["Concedes y añades."], porque: "Parcial." },
    { sit: "«No comparto tu opinión.»", resp: "Je ne partage pas ton avis.", pasos: ["partager un avis."], porque: "Desacuerdo." }
  ],
  comprueba: [
    { q: "«De acuerdo contigo» se dice…", o: ["d'accord avec toi", "d'accord de toi"], a: 0, b: "gr", porque: "avec." },
    { q: "«C'est vrai, mais…» expresa…", o: ["acuerdo parcial", "acuerdo total"], a: 0, b: "gr", porque: "Matiz." },
    { q: "«Pas du tout !» expresa…", o: ["desacuerdo total", "acuerdo"], a: 0, b: "gr", porque: "Para nada." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ad-accord", "b1ad-desac"], k: "sort", ask: "¿Acuerdo o desacuerdo?", q: "Clasifica.", cats: ["Acuerdo", "Desacuerdo"], items: [["Tout à fait.", 0], ["Bien sûr.", 0], ["Tu as raison.", 0], ["C'est clair.", 0], ["Au contraire !", 1], ["Tu as tort.", 1], ["Pas vraiment.", 1], ["Je ne crois pas.", 1]], pista: "¿Sí o no?", why: "Grados." },
    { fase: "guiada", c: ["b1ad-accord"], k: "choice", ask: "«Tienes razón.»", q: "«___»", o: ["Tu as raison.", "Tu es raison."], a: 0, pista: "avoir.", why: "<b>Tu as raison</b>." },
    { fase: "guiada", c: ["b1ad-accord"], k: "choice", ask: "¿Cuál matiza?", q: "«___»", o: ["C'est vrai, mais…", "Absolument !"], a: 0, pista: "mais.", why: "Acuerdo parcial." },
    { fase: "indep", c: ["b1ad-desac"], k: "choice", ask: "«No comparto tu opinión.»", q: "«___»", o: ["Je ne partage pas ton avis.", "Je ne partage pas ton opinion de toi."], a: 0, why: "<b>Je ne partage pas ton avis</b>." },
    { fase: "indep", c: ["b1ad-accord"], k: "fill", ask: "Escribe «totalmente» (tout à fait).", q: "Je suis ___ à fait d'accord.", acc: ["tout"], why: "<b>tout à fait</b>." },
    { fase: "indep", c: ["b1ad-accord"], k: "fill", ask: "Escribe «razón».", q: "Tu as ___, je me suis trompé.", acc: ["raison"], why: "<b>raison</b>." },
    { fase: "aplica", c: ["b1ad-accord", "b1ad-desac"], k: "match", ask: "Une cada expresión con su grado.", q: "Expresión → grado", pairs: [["Absolument !", "acuerdo total"], ["Dans un sens, oui.", "acuerdo parcial"], ["Pas du tout !", "desacuerdo total"], ["Je vois les choses autrement.", "desacuerdo suave"]], why: "Grados." },
    { fase: "aplica", c: ["b1ad-accord"], k: "spot", ask: "Encuentra el error.", s: "Je suis tout à fait d'accord [de] toi sur ce point .", fix: "avec", why: "<b>avec toi</b>." },
    { fase: "dominio", c: ["b1ad-desac"], k: "order", ask: "Ordena: «No estoy para nada de acuerdo».", tokens: ["Je ne suis", "pas du tout", "d'accord."], why: "<b>Je ne suis pas du tout d'accord.</b>" },
    { fase: "dominio", c: ["b1ad-desac"], k: "choice", ask: "«¡Al contrario!»", q: "«___»", o: ["Au contraire !", "Le contraire !"], a: 0, why: "<b>Au contraire</b>." },
    { fase: "dominio", c: ["b1ad-accord", "b1ad-desac"], k: "listen", say: "C'est vrai, mais je vois les choses un peu autrement.", acc: ["C'est vrai, mais je vois les choses un peu autrement."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est vrai, mais je vois les choses un peu autrement.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-certitude-doute"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Certitude, probabilité et doute",
  objetivo: {
    que: "Vas a elegir indicativo para lo cierto y probable, y subjuntivo para lo posible y la duda.",
    corto: "Je suis sûr qu'il a raison. · Il se peut qu'il pleuve.",
    podras: ["Usar indicativo con je suis sûr que, il est évident que, il est probable que.", "Usar subjuntivo con il est possible que, il se peut que, je doute que, je ne crois pas que.", "Usar los adverbios peut-être, sans doute, probablement."],
    iconos: ["ic2/pregunta", "ic2/bombilla", "ic2/luna"],
    previos: ["Opinar (lección 8) y los subjuntivos irregulares (lección 41)."],
    capacidad: "Ahora gradúas tu certeza con el modo correcto."
  },
  requiere: R("b1op-mode", "b1si-autres"), recupera: ["b1op-mode"],
  conceptos: {
    "b1cd-indic": { n: "certeza y probabilidad → indicativo: je suis sûr que, il est évident que, il est probable que", b: "gr" },
    "b1cd-subj": { n: "posibilidad y duda → subjuntivo: il est possible que, il se peut que, je doute que, je ne crois pas que", b: "gr" }
  },
  video: {
    titulo: "Cierto, probable, posible", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "sûr · probable · possible", seg: [
        { es: "Hola. Cuanto más dudas, más cerca estás del subjuntivo." } ] },
      { v: "frase", filas: [
          { nota: "certeza", p: 1, partes: [["Il est évident que le climat change.", "-", 1]] },
          { nota: "probable", p: 2, partes: [["Il est probable qu'il neigera.", "-", 2]] },
          { nota: "posible", p: 3, partes: [["Il se peut qu'il soit en retard.", "-", 3]] } ], seg: [
        { fr: "Il est évident que le climat change.", p: 1 }, { fr: "Il est probable qu'il neigera.", p: 2 }, { fr: "Il se peut qu'il soit en retard.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es posible que salgamos antes.»", o: ["Il est possible que nous partions plus tôt.", "Il est possible que nous partirons plus tôt."], a: 0,
        bien: "¡Sí! Posibilidad → subjuntivo.", mal: "Possible → subjuntivo: partions.",
        seg: [ { es: "Pausa. Es posible." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je suis sûr que", "il est probable que", "il est possible que", "je doute que", "peut-être"], seg: [
        { es: "Probable, indicativo; posible, subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pronóstico", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo miran el pronóstico del tiempo.",
    pj: PJ,
    lineas: [
      ["hugo", "Il est probable qu'il neigera demain, mais il se peut que ce soit juste de la pluie.", "Es probable que nieve mañana, pero puede que sea solo lluvia."],
      ["camila", "Je suis sûre qu'il a raison, le météorologue. Il est évident qu'elle a raison aussi, ta mère.", "Estoy segura de que tiene razón el meteorólogo. Es evidente que tu mamá también tiene razón."],
      ["hugo", "Paul viendra sans doute. Mais je doute qu'il dise la vérité sur son retard.", "Paul vendrá sin duda. Pero dudo que diga la verdad sobre su retraso."],
      ["camila", "Je ne crois pas que ce soit vrai. Il est possible que nous partions plus tôt.", "No creo que sea verdad. Es posible que salgamos más temprano."]
    ],
    fijate: "Fíjate: probable qu'il neigera, sûre qu'il a, évident qu'elle a (indicativo); se peut que ce soit, doute qu'il dise, ne crois pas que ce soit, possible que nous partions (subjuntivo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Modo según la certeza",
      idea: "Certeza → indicativo: je suis sûr(e) / certain(e) que, il est évident / clair que, je sais que. Probabilidad → indicativo: il est probable que (il est probable qu'il viendra). Posibilidad y duda → subjuntivo: il est possible que, il se peut que, je doute que. Opinión negativa → subjuntivo: je ne pense pas / je ne crois pas qu'il ait raison. Adverbios (sin cambiar el modo): peut-être, sans doute (probablemente), probablement.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["Je suis sûr qu'il a raison. · a", "Estoy seguro de que tiene razón.", "indicativo"],
        ["il est clair que · je suis sûr que · je pense que", "es claro que · estoy seguro de que · pienso que", "indicativo"],
        ["il est probable que · il est probable qu'il neigera", "es probable que · es probable que nieve", "indicativo"],
        ["je suis certain que = indicativo", "estoy seguro de que", "indicativo"],
        ["Il se peut qu'il pleuve.", "Puede que llueva.", "subjuntivo"],
        ["je doute que · il se peut que · il est possible que · je ne crois pas que", "dudo que · puede que · es posible que · no creo que", "subjuntivo"],
        ["qu'il dise · dise", "que diga", "subjuntivo"],
        ["que nous partions · partions", "que salgamos", "subjuntivo"],
        ["Il viendra sans doute.", "Probablemente vendrá.", "adverbio"]
      ]],
      ej: [["Il est évident que le climat change.", "Es evidente que el clima está cambiando."], ["Il se peut qu'il soit en retard.", "Puede que llegue tarde."], ["Je ne crois pas qu'elle puisse venir.", "No creo que pueda venir."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est possible qu'il viendra.", "Il est possible qu'il vienne.", "Posibilidad → subjuntivo."], ["Il est possible que nous partirons plus tôt.", "Il est possible que nous partions plus tôt.", "Subjuntivo: partions."], ["Je suis sûr qu'il ait raison.", "Je suis sûr qu'il a raison.", "Certeza → indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Estoy seguro de que tiene razón.»", resp: "Je suis sûr qu'il a raison.", pasos: ["Certeza: indicativo."], porque: "Seguro." },
    { sit: "«Puede que llueva.»", resp: "Il se peut qu'il pleuve.", pasos: ["Posibilidad: subjuntivo."], porque: "Duda." },
    { sit: "«Probablemente vendrá.»", resp: "Il viendra sans doute.", pasos: ["sans doute = probablemente."], porque: "Adverbio." }
  ],
  comprueba: [
    { q: "Il est probable que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Probable." },
    { q: "Il est possible que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Posible." },
    { q: "«Sans doute» significa…", o: ["probablemente", "sin ninguna duda, al 100 %"], a: 0, b: "gr", porque: "Falso amigo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cd-indic", "b1cd-subj"], k: "sort", ask: "¿Indicativo o subjuntivo?", q: "Clasifica.", cats: ["Indicativo", "Subjuntivo"], items: [["il est clair que", 0], ["je suis sûr que", 0], ["il est probable que", 0], ["je pense que", 0], ["je doute que", 1], ["il se peut que", 1], ["il est possible que", 1], ["je ne crois pas que", 1]], pista: "Duda y posibilidad: subjuntivo.", why: "Modos." },
    { fase: "guiada", c: ["b1cd-indic"], k: "choice", ask: "«Estoy seguro de que tiene razón.»", q: "«___»", o: ["Je suis sûr qu'il a raison.", "Je suis sûr qu'il ait raison."], a: 0, pista: "Certeza.", why: "<b>a</b>." },
    { fase: "guiada", c: ["b1cd-subj"], k: "choice", ask: "«Puede que llueva.»", q: "«___»", o: ["Il se peut qu'il pleuve.", "Il se peut qu'il pleut."], a: 0, pista: "Posibilidad.", why: "<b>pleuve</b>." },
    { fase: "indep", c: ["b1cd-indic"], k: "choice", es: true, ask: "«Il viendra sans doute.» significa…", q: "Elige.", o: ["Probablemente vendrá.", "No vendrá."], a: 0, why: "sans doute = probablemente." },
    { fase: "indep", c: ["b1cd-subj"], k: "fill", ask: "Subjuntivo de dire (il).", q: "Je doute qu'il ___ la vérité.", acc: ["dise"], why: "<b>dise</b>." },
    { fase: "indep", c: ["b1cd-indic"], k: "fill", ask: "Indicativo de avoir (elle).", q: "Il est évident qu'elle ___ raison.", acc: ["a"], why: "<b>a</b>." },
    { fase: "aplica", c: ["b1cd-indic", "b1cd-subj"], k: "match", ask: "Une cada expresión con su modo.", q: "Expresión → modo", pairs: [["je suis certain que", "indicativo"], ["il est possible que", "subjuntivo"], ["je ne pense pas que", "subjuntivo (neg.)"], ["il est probable que", "indicativo (prob.)"]], why: "Modos." },
    { fase: "aplica", c: ["b1cd-subj"], k: "spot", ask: "Encuentra el error.", s: "Il est possible que nous [partirons] plus tôt que prévu .", fix: "partions", why: "<b>partions</b>." },
    { fase: "dominio", c: ["b1cd-subj"], k: "order", ask: "Ordena: «No creo que sea verdad».", tokens: ["Je ne crois pas", "que ce soit", "vrai."], why: "<b>Je ne crois pas que ce soit vrai.</b>" },
    { fase: "dominio", c: ["b1cd-indic"], k: "choice", ask: "«Es probable que nieve mañana.»", q: "«Il est probable qu'il ___ demain.»", o: ["neigera", "neige (subj.)"], a: 0, why: "Probable: indicativo." },
    { fase: "dominio", c: ["b1cd-indic", "b1cd-subj"], k: "listen", say: "Il est probable qu'il neigera demain, mais il se peut que ce soit juste de la pluie.", acc: ["Il est probable qu'il neigera demain, mais il se peut que ce soit juste de la pluie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il est probable qu'il neigera demain, mais il se peut que ce soit juste de la pluie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

/* ───── B1.1·8 · Los conectores del discurso ───── */
E["b11-reformuler"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Reformuler et préciser : c'est-à-dire, autrement dit",
  objetivo: {
    que: "Vas a aclarar, corregir, precisar y resumir lo que dices con conectores de reformulación.",
    corto: "c'est-à-dire · autrement dit · ou plutôt · bref.",
    podras: ["Explicar: c'est-à-dire, autrement dit, en d'autres termes.", "Corregirte y precisar: ou plutôt, plus précisément, en fait.", "Resumir: bref, en somme, en un mot."],
    iconos: ["ic2/lapiz", "ic2/microfono", "ic2/bombilla"],
    previos: ["Opinar y argumentar (lección 8)."],
    capacidad: "Ahora te explicas mejor cuando no te entienden."
  },
  requiere: R("b1op-connect"), recupera: ["b1op-connect"],
  conceptos: {
    "b1rf-expl": { n: "explicar: c'est-à-dire, autrement dit, en d'autres termes, à savoir", b: "gr" },
    "b1rf-resume": { n: "corregir y resumir: ou plutôt, plus précisément; bref, en somme, en un mot", b: "gr" }
  },
  video: {
    titulo: "Reformular", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "c'est-à-dire", seg: [
        { es: "Hola. Cuando necesitas decirlo de otra forma." } ] },
      { v: "frase", filas: [
          { nota: "explicar", p: 1, partes: [["Il est végétarien, c'est-à-dire qu'il ne mange pas de viande.", "-", 1]] },
          { nota: "corregir", p: 2, partes: [["Je viendrai mardi, ou plutôt mercredi.", "-", 2]] },
          { nota: "resumir", p: 3, partes: [["Bref, c'était une journée horrible.", "-", 3]] } ], seg: [
        { fr: "Il est végétarien, c'est-à-dire qu'il ne mange pas de viande.", p: 1 }, { fr: "Je viendrai mardi, ou plutôt mercredi.", p: 2 }, { fr: "Bref, c'était une journée horrible.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Dicho de otro modo, no hay dinero.»", o: ["Autrement dit, il n'y a pas d'argent.", "Autre dit, il n'y a pas d'argent."], a: 0,
        bien: "¡Sí! Autrement dit.", mal: "Se dice autrement dit.",
        seg: [ { es: "Pausa. Dicho de otro modo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'est-à-dire", "autrement dit", "ou plutôt", "plus précisément", "bref"], seg: [
        { es: "C'est-à-dire lleva guiones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un día horrible", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta su día a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Il a plu, j'ai perdu mes clés… Bref, une journée nulle.", "Llovió, perdí mis llaves… En resumen, un día pésimo."],
      ["hugo", "Le cours est annulé, c'est-à-dire qu'on a une heure libre !", "La clase se canceló, ¡o sea que tenemos una hora libre!"],
      ["camila", "Je t'appelle demain, ou plutôt ce soir. Il faut réduire nos dépenses, autrement dit, moins sortir au restaurant.", "Te llamo mañana, o mejor dicho esta noche. Hay que reducir nuestros gastos, dicho de otro modo, salir menos a restaurantes."],
      ["hugo", "En d'autres termes, nous devons économiser.", "En otras palabras, tenemos que ahorrar."]
    ],
    fijate: "Fíjate: bref, c'est-à-dire, ou plutôt, autrement dit, en d'autres termes."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Conectores de reformulación",
      idea: "Explicar: c'est-à-dire (es decir, con guiones), autrement dit (dicho de otro modo), en d'autres termes (en otras palabras), à savoir (a saber). Corregirse: ou plutôt (o mejor dicho), enfin (oral), je veux dire. Precisar: plus précisément, en fait, en réalité. Resumir: bref (en resumen), en somme, en un mot, en résumé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["c'est-à-dire · c'est", "es decir", "explicar"],
        ["Autrement dit… · autrement dit", "Dicho de otro modo…", "explicar"],
        ["en d'autres termes · termes", "en otras palabras", "explicar"],
        ["à savoir", "a saber", "explicar"],
        ["ou plutôt", "o mejor dicho", "corregirse"],
        ["plus précisément · en fait", "más precisamente · en realidad", "precisar"],
        ["Bref · bref", "En resumen", "resumir"],
        ["en somme · en un mot · en résumé", "en suma · en una palabra · en resumen", "resumir"]
      ]],
      ej: [["Il est parti à l'anglaise, c'est-à-dire sans dire au revoir.", "Se fue a la francesa, es decir, sin despedirse."], ["Je viendrai mardi, ou plutôt mercredi.", "Vendré el martes, o mejor dicho el miércoles."], ["Bref, c'était une journée horrible.", "En resumen, fue un día horrible."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["c'est dire (es decir)", "c'est-à-dire", "Se escribe con guiones."], ["Il est végétarien, c'est-à-dir qu'il ne mange pas de viande.", "Il est végétarien, c'est-à-dire qu'il ne mange pas de viande.", "c'est-à-dire, con e final."], ["En autres mots…", "En d'autres termes…", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«Dicho de otro modo…»", resp: "Autrement dit…", pasos: ["Reformular."], porque: "Explicar." },
    { sit: "«Te llamo mañana, o mejor dicho esta noche.»", resp: "Je t'appelle demain, ou plutôt ce soir.", pasos: ["Corregirse: ou plutôt."], porque: "Corrección." },
    { sit: "«En resumen, un día pésimo.»", resp: "Bref, une journée nulle.", pasos: ["Resumir: bref."], porque: "Resumen." }
  ],
  comprueba: [
    { q: "«Es decir» se escribe…", o: ["c'est-à-dire", "c'est à dire"], a: 0, b: "gr", porque: "Con guiones." },
    { q: "Bref sirve para…", o: ["resumir", "corregirse"], a: 0, b: "gr", porque: "En resumen." },
    { q: "«O mejor dicho» se dice…", o: ["ou plutôt", "autrement dit"], a: 0, b: "gr", porque: "Corrección." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rf-expl", "b1rf-resume"], k: "sort", ask: "¿Explicar o resumir?", q: "Clasifica.", cats: ["Explicar", "Resumir"], items: [["c'est-à-dire", 0], ["autrement dit", 0], ["en d'autres termes", 0], ["à savoir", 0], ["bref", 1], ["en somme", 1], ["en un mot", 1], ["en résumé", 1]], pista: "¿Aclara o cierra?", why: "Funciones." },
    { fase: "guiada", c: ["b1rf-expl"], k: "choice", ask: "«Dicho de otro modo…»", q: "«___»", o: ["Autrement dit…", "Autre dit…"], a: 0, pista: "-ment.", why: "<b>Autrement dit</b>." },
    { fase: "guiada", c: ["b1rf-resume"], k: "choice", ask: "«Te llamo mañana, o mejor dicho esta noche.»", q: "«Je t'appelle demain, ___ ce soir.»", o: ["ou plutôt", "bref"], a: 0, pista: "Corregirse.", why: "<b>ou plutôt</b>." },
    { fase: "indep", c: ["b1rf-resume"], k: "choice", ask: "«Llovió, perdí las llaves… En resumen, un día pésimo.»", q: "«Il a plu, j'ai perdu mes clés… ___, une journée nulle.»", o: ["Bref", "Autrement dit"], a: 0, why: "<b>Bref</b>." },
    { fase: "indep", c: ["b1rf-expl"], k: "fill", ask: "Completa c'est-à-dire.", q: "Le cours est annulé, ___-à-dire qu'on a une heure libre.", acc: ["c'est"], why: "<b>c'est-à-dire</b>." },
    { fase: "indep", c: ["b1rf-expl"], k: "fill", ask: "Escribe «términos».", q: "En d'autres ___, nous devons économiser.", acc: ["termes"], why: "<b>termes</b>." },
    { fase: "aplica", c: ["b1rf-expl", "b1rf-resume"], k: "match", ask: "Une cada conector con su función.", q: "Conector → función", pairs: [["c'est-à-dire", "explicar"], ["ou plutôt", "corregirse"], ["bref", "resumir"], ["plus précisément", "precisar"]], why: "Funciones." },
    { fase: "aplica", c: ["b1rf-expl"], k: "spot", ask: "Encuentra el error.", s: "Il est végétarien , [c'est-à-dir] qu'il ne mange pas de viande .", fix: "c'est-à-dire", why: "<b>c'est-à-dire</b>." },
    { fase: "dominio", c: ["b1rf-expl"], k: "order", ask: "Ordena: «Dicho de otro modo, no hay dinero».", tokens: ["Autrement dit,", "il n'y a pas", "d'argent."], why: "<b>Autrement dit, il n'y a pas d'argent.</b>" },
    { fase: "dominio", c: ["b1rf-resume"], k: "choice", ask: "«Vendré el martes, o mejor dicho el miércoles.»", q: "«Je viendrai mardi, ___ mercredi.»", o: ["ou plutôt", "en somme"], a: 0, why: "<b>ou plutôt</b>." },
    { fase: "dominio", c: ["b1rf-expl", "b1rf-resume"], k: "listen", say: "Il faut réduire nos dépenses, autrement dit, moins sortir au restaurant.", acc: ["Il faut réduire nos dépenses, autrement dit, moins sortir au restaurant."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut réduire nos dépenses, autrement dit, moins sortir au restaurant.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-exemplifier"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Donner des exemples et illustrer",
  objetivo: {
    que: "Vas a ilustrar tus ideas con par exemple, notamment, comme, tel que, ainsi y prenons l'exemple de…",
    corto: "Beaucoup de villes, notamment Paris…",
    podras: ["Dar ejemplos con par exemple, notamment, comme.", "Usar tel que concordado: des activités telles que la natation.", "Desarrollar un ejemplo: prenons l'exemple de…, c'est le cas de…, ainsi…"],
    iconos: ["ic2/bombilla", "ic2/libro", "ic2/mundo"],
    previos: ["Opinar y argumentar (lección 8) y reformular (lección 47)."],
    capacidad: "Ahora tus argumentos tienen ejemplos concretos."
  },
  requiere: R("b1op-connect", "b1rf-expl"), recupera: ["b1op-connect"],
  conceptos: {
    "b1ex-mots": { n: "par exemple, notamment (en particular), comme, ainsi, c'est le cas de", b: "gr" },
    "b1ex-tel": { n: "tel / telle / tels / telles que + lista (concuerda); prenons l'exemple de…", b: "gr" }
  },
  video: {
    titulo: "Dar ejemplos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "par exemple · notamment", seg: [
        { es: "Hola. Un buen argumento siempre lleva un ejemplo." } ] },
      { v: "frase", filas: [
          { nota: "en particular", p: 1, partes: [["Beaucoup de villes, notamment Paris…", "-", 1]] },
          { nota: "como", p: 2, partes: [["Certains sports, tels que le rugby…", "-", 2]] },
          { nota: "desarrollar", p: 3, partes: [["Prenons l'exemple du télétravail.", "-", 3]] } ], seg: [
        { fr: "Beaucoup de villes, notamment Paris…", p: 1 }, { fr: "Certains sports, tels que le rugby…", p: 2 }, { fr: "Prenons l'exemple du télétravail.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«frutas exóticas, como el mango»", o: ["des fruits exotiques, tels que la mangue", "des fruits exotiques, tel que la mangue"], a: 0,
        bien: "¡Sí! Tels concuerda con fruits.", mal: "Tel concuerda con el nombre anterior: tels.",
        seg: [ { es: "Pausa. Como el mango." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["par exemple", "notamment", "comme", "tels que", "prenons l'exemple de"], seg: [
        { es: "Tel que concuerda con el nombre de antes.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La exposición", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta su exposición sobre energía.",
    pj: PJ,
    lineas: [
      ["camila", "Plusieurs pays européens, notamment la Suède, investissent dans l'énergie solaire.", "Varios países europeos, en particular Suecia, invierten en energía solar."],
      ["hugo", "Donne un exemple concret.", "Da un ejemplo concreto."],
      ["camila", "Prenons l'exemple de la France. Des énergies telles que le vent et le soleil sont moins chères.", "Tomemos el ejemplo de Francia. Energías como el viento y el sol son más baratas."],
      ["hugo", "Ainsi, on pollue moins. J'aime les sports d'hiver, par exemple le ski, mais il faut de la neige !", "Así se contamina menos. Me gustan los deportes de invierno, por ejemplo el esquí, ¡pero hace falta nieve!"]
    ],
    fijate: "Fíjate: notamment, prenons l'exemple de, telles que (énergies: femenino plural), ainsi, par exemple."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Ilustrar",
      idea: "par exemple: el más neutro. notamment: en particular, entre otros. comme + lista: des pays comme la France. tel(le)(s) que + lista, concordando con el nombre anterior: des fruits tels que la pomme, des activités telles que la natation. Para desarrollar: Prenons l'exemple de…, C'est le cas de…, Ainsi, … (así).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["par exemple · exemple", "por ejemplo", "neutro"],
        ["notamment", "en particular", "destacar uno"],
        ["comme", "como", "lista"],
        ["tels que · tels", "como (m. pl.)", "concuerda"],
        ["telles que", "como (f. pl.)", "concuerda"],
        ["Prenons l'exemple de…", "Tomemos el ejemplo de…", "desarrollar"],
        ["c'est le cas de · ainsi", "es el caso de · así", "desarrollar"],
        ["mais · pourtant · cependant · en revanche", "pero · sin embargo · en cambio", "oponer (no ejemplo)"]
      ]],
      ej: [["Beaucoup de villes, notamment Paris, ont des vélos en libre-service.", "Muchas ciudades, en particular París, tienen bicicletas compartidas."], ["Prenons l'exemple du télétravail.", "Tomemos el ejemplo del teletrabajo."], ["Certains sports, tels que le rugby, sont dangereux.", "Algunos deportes, como el rugby, son peligrosos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'adore les fruits exotiques, tel que la mangue.", "J'adore les fruits exotiques, tels que la mangue.", "Tel que concuerda con fruits."], ["des activités tels que la natation", "des activités telles que la natation", "activités: femenino."], ["por ejemplo = pour exemple", "par exemple", "Con par."]] }
  ],
  ejemplos: [
    { sit: "«en particular…»", resp: "notamment", pasos: ["Destaca uno de varios."], porque: "Ejemplo." },
    { sit: "«lenguas como el italiano y el español»", resp: "des langues telles que l'italien et l'espagnol", pasos: ["langues: f. pl. → telles."], porque: "Concordancia." },
    { sit: "Desarrollas un argumento.", resp: "Prenons l'exemple de…", pasos: ["Presentar un caso."], porque: "Desarrollo." }
  ],
  comprueba: [
    { q: "Notamment significa…", o: ["en particular", "notablemente mal"], a: 0, b: "gr", porque: "Ejemplo destacado." },
    { q: "Tel que…", o: ["concuerda con el nombre anterior", "es invariable"], a: 0, b: "gr", porque: "tels, telles." },
    { q: "Pourtant sirve para…", o: ["oponer", "dar un ejemplo"], a: 0, b: "gr", porque: "Sin embargo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ex-mots"], k: "sort", ask: "¿Dar ejemplo u oponer?", q: "Clasifica.", cats: ["Dar ejemplo", "Oponer"], items: [["par exemple", 0], ["notamment", 0], ["comme", 0], ["prenons le cas de", 0], ["mais", 1], ["pourtant", 1], ["cependant", 1], ["en revanche", 1]], pista: "¿Ilustra o contradice?", why: "Funciones." },
    { fase: "guiada", c: ["b1ex-mots"], k: "choice", ask: "«En particular…»", q: "«___»", o: ["notamment", "pourtant"], a: 0, pista: "Destacar.", why: "<b>notamment</b>." },
    { fase: "guiada", c: ["b1ex-tel"], k: "choice", ask: "«lenguas como el italiano y el español»", q: "«des langues ___ l'italien et l'espagnol»", o: ["telles que", "tels que", "tel que"], a: 0, pista: "langues: f. pl.", why: "<b>telles que</b>." },
    { fase: "indep", c: ["b1ex-tel"], k: "choice", ask: "Para desarrollar un argumento…", q: "«___»", o: ["Prenons l'exemple de…", "Pourtant…"], a: 0, why: "<b>Prenons l'exemple de</b>." },
    { fase: "indep", c: ["b1ex-mots"], k: "fill", ask: "Escribe «ejemplo».", q: "J'aime les sports d'hiver, par ___ le ski.", acc: ["exemple"], why: "<b>par exemple</b>." },
    { fase: "indep", c: ["b1ex-tel"], k: "fill", ask: "Forma de tel (animaux, m. pl.).", q: "Certains animaux, ___ que le chat, dorment beaucoup.", acc: ["tels"], why: "<b>tels</b>." },
    { fase: "aplica", c: ["b1ex-mots"], k: "match", ask: "Une cada conector con su traducción.", q: "Francés → español", pairs: [["par exemple", "por ejemplo"], ["notamment", "en particular"], ["ainsi", "así"], ["c'est le cas de", "es el caso de"]], why: "Conectores." },
    { fase: "aplica", c: ["b1ex-tel"], k: "spot", ask: "Encuentra el error.", s: "J'adore les fruits exotiques , [tel] que la mangue et l'ananas .", fix: "tels", why: "<b>tels</b>." },
    { fase: "dominio", c: ["b1ex-tel"], k: "order", ask: "Ordena: «Tomemos el ejemplo de Francia».", tokens: ["Prenons", "l'exemple", "de la France."], why: "<b>Prenons l'exemple de la France.</b>" },
    { fase: "dominio", c: ["b1ex-mots"], k: "choice", ask: "«Muchas ciudades, en particular París…»", q: "«Beaucoup de villes, ___ Paris…»", o: ["notamment", "en revanche"], a: 0, why: "<b>notamment</b>." },
    { fase: "dominio", c: ["b1ex-mots", "b1ex-tel"], k: "listen", say: "Plusieurs pays européens, notamment la Suède, investissent dans l'énergie solaire.", acc: ["Plusieurs pays européens, notamment la Suède, investissent dans l'énergie solaire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Plusieurs pays européens, notamment la Suède, investissent dans l'énergie solaire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Suède", "France"], previo: [] }
};

E["b11-connecteurs-addition"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Ajouter un argument : de plus, en outre, par ailleurs",
  objetivo: {
    que: "Vas a añadir argumentos con conectores de adición según el registro.",
    corto: "De plus… · En outre… · Non seulement… mais aussi…",
    podras: ["Añadir con de plus, également, aussi (neutros).", "Usar en outre, par ailleurs, de surcroît (formales) y en plus (oral).", "Usar non seulement… mais aussi…"],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/estrella"],
    previos: ["Opinar y argumentar (lección 8) y dar ejemplos (lección 48)."],
    capacidad: "Ahora acumulas argumentos con elegancia."
  },
  requiere: R("b1op-connect", "b1ex-mots"), recupera: ["b1op-connect"],
  conceptos: {
    "b1ca-mots": { n: "de plus (neutro), en plus (oral), en outre, par ailleurs, de surcroît (formales), également", b: "gr" },
    "b1ca-nonseul": { n: "non seulement… mais aussi…; d'ailleurs (además, apoyando)", b: "gr" }
  },
  video: {
    titulo: "Añadir argumentos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "de plus · en outre", seg: [
        { es: "Hola. Para sumar un argumento, elige según el registro." } ] },
      { v: "frase", filas: [
          { nota: "oral", p: 1, partes: [["En plus, il pleuvait !", "-", 1]] },
          { nota: "neutro", p: 2, partes: [["De plus, c'est moins cher.", "-", 2]] },
          { nota: "formal", p: 3, partes: [["En outre, il réduit la pollution.", "-", 3]] } ], seg: [
        { fr: "En plus, il pleuvait !", p: 1 }, { fr: "De plus, c'est moins cher.", p: 2 }, { fr: "En outre, il réduit la pollution.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No solo es barato, sino también práctico.»", o: ["Non seulement c'est bon marché, mais c'est aussi pratique.", "Pas seulement c'est bon marché, mais pratique aussi pas."], a: 0,
        bien: "¡Sí! Non seulement… mais aussi.", mal: "Estructura: non seulement… mais aussi.",
        seg: [ { es: "Pausa. No solo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["de plus", "en plus", "en outre", "par ailleurs", "non seulement… mais aussi"], seg: [
        { es: "En plus, oral; en outre, formal.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El teletrabajo", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo argumentan sobre el teletrabajo.",
    pj: PJ,
    lineas: [
      ["camila", "Le télétravail fait gagner du temps. En outre, il réduit la pollution.", "El teletrabajo ahorra tiempo. Además, reduce la contaminación."],
      ["hugo", "De plus, c'est moins cher. Le vélo est écologique ; de plus, c'est bon pour la santé.", "Además, es más barato. La bici es ecológica; además, es buena para la salud."],
      ["camila", "Par ailleurs, il faut penser au budget. Ce film est long ; en outre, les acteurs jouent mal.", "Por otra parte, hay que pensar en el presupuesto. Esta película es larga; además, los actores actúan mal."],
      ["hugo", "Ha ha ! Et en plus, il est arrivé en retard ! Non seulement il est drôle, mais il est aussi très gentil, mon ami.", "¡Ja, ja! ¡Y encima llegó tarde! No solo es gracioso, sino también muy amable, mi amigo."]
    ],
    fijate: "Fíjate: en outre, de plus, par ailleurs (formales y neutros); en plus (oral); non seulement… mais aussi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Conectores de adición",
      idea: "Neutros: de plus, également, aussi. Formales: en outre, par ailleurs, de surcroît (muy formal). Oral: en plus: En plus, il pleuvait ! D'ailleurs = además, apoyando lo que se acaba de decir. Estructura doble: non seulement… mais aussi… No confundas con los de conclusión: en conclusion, pour conclure, en définitive, finalement.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Registro"], [
        ["De plus · de plus · plus", "Además", "neutro"],
        ["également · aussi", "también", "neutro"],
        ["En plus, il est arrivé en retard !", "¡Y encima llegó tarde!", "oral"],
        ["En outre · en outre · outre", "Además", "formal"],
        ["Par ailleurs · par ailleurs · ailleurs", "Por otra parte", "formal"],
        ["de surcroît", "por añadidura", "muy formal"],
        ["Non seulement c'est bon marché, mais c'est aussi pratique.", "No solo es barato, sino también práctico.", "doble"],
        ["en conclusion · pour conclure · en définitive · finalement", "en conclusión · para concluir · en definitiva · finalmente", "concluir (no añadir)"]
      ]],
      ej: [["Ce logement est bien situé. De plus, il est lumineux.", "Este apartamento está bien ubicado. Además, es luminoso."], ["Non seulement il est drôle, mais il est aussi très gentil.", "No solo es gracioso, sino también muy amable."], ["En outre, les frais d'inscription ont augmenté.", "Además, los costos de matrícula subieron."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ce film est long. En autre, les acteurs jouent mal.", "Ce film est long. En outre, les acteurs jouent mal.", "Se escribe en outre."], ["Non seulement il chante, mais il danse aussi pas.", "Non seulement il chante, mais il danse aussi.", "Estructura: non seulement… mais aussi."], ["En plus (en una carta formal)", "En outre / De plus", "En plus es oral."]] }
  ],
  ejemplos: [
    { sit: "«Además» (formal)", resp: "En outre,", pasos: ["Registro formal."], porque: "Escrito." },
    { sit: "«No solo es barato, sino también práctico.»", resp: "Non seulement c'est bon marché, mais c'est aussi pratique.", pasos: ["non seulement… mais aussi."], porque: "Doble." },
    { sit: "«¡Y encima llegó tarde!»", resp: "En plus, il est arrivé en retard !", pasos: ["Oral: en plus."], porque: "Conversación." }
  ],
  comprueba: [
    { q: "En outre es…", o: ["formal", "familiar"], a: 0, b: "gr", porque: "Escrito." },
    { q: "En plus es sobre todo…", o: ["oral", "muy formal"], a: 0, b: "gr", porque: "Conversación." },
    { q: "En conclusion sirve para…", o: ["concluir", "añadir"], a: 0, b: "gr", porque: "Cierre." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ca-mots"], k: "sort", ask: "¿Añadir o concluir?", q: "Clasifica.", cats: ["Añadir", "Concluir"], items: [["de plus", 0], ["en outre", 0], ["par ailleurs", 0], ["également", 0], ["en conclusion", 1], ["pour conclure", 1], ["en définitive", 1], ["finalement", 1]], pista: "¿Suma o cierra?", why: "Funciones." },
    { fase: "guiada", c: ["b1ca-mots"], k: "choice", ask: "«Además» (registro formal)…", q: "«___»", o: ["En outre,", "En plus,"], a: 0, pista: "Formal.", why: "<b>En outre</b>." },
    { fase: "guiada", c: ["b1ca-nonseul"], k: "choice", ask: "«No solo es barato, sino también práctico.»", q: "«___»", o: ["Non seulement c'est bon marché, mais c'est aussi pratique.", "Seulement c'est bon marché, aussi pratique."], a: 0, pista: "non seulement… mais aussi.", why: "Estructura doble." },
    { fase: "indep", c: ["b1ca-mots"], k: "choice", ask: "«¡Y encima llegó tarde!»", q: "«___»", o: ["En plus, il est arrivé en retard !", "En outre, il est arrivé en retard !"], a: 0, why: "Oral: <b>en plus</b>." },
    { fase: "indep", c: ["b1ca-mots"], k: "fill", ask: "Completa «de plus».", q: "Le vélo est écologique. De ___, c'est bon pour la santé.", acc: ["plus"], why: "<b>De plus</b>." },
    { fase: "indep", c: ["b1ca-mots"], k: "fill", ask: "Completa «par ailleurs».", q: "Par ___, il faut penser au budget.", acc: ["ailleurs"], why: "<b>Par ailleurs</b>." },
    { fase: "aplica", c: ["b1ca-mots"], k: "match", ask: "Une cada conector con su registro.", q: "Conector → registro", pairs: [["en plus", "oral"], ["de plus", "neutro"], ["en outre", "formal"], ["de surcroît", "muy formal"]], why: "Registros." },
    { fase: "aplica", c: ["b1ca-mots"], k: "spot", ask: "Encuentra el error.", s: "Ce film est long . En [autre] , les acteurs jouent mal .", fix: "outre", why: "<b>En outre</b>." },
    { fase: "dominio", c: ["b1ca-mots"], k: "order", ask: "Ordena: «Además, es más barato».", tokens: ["De plus,", "c'est", "moins cher."], why: "<b>De plus, c'est moins cher.</b>" },
    { fase: "dominio", c: ["b1ca-nonseul"], k: "choice", ask: "«No solo canta, sino que también baila.»", q: "«Non seulement il chante, ___ il danse.»", o: ["mais aussi", "pourtant"], a: 0, why: "<b>mais aussi</b>." },
    { fase: "dominio", c: ["b1ca-mots", "b1ca-nonseul"], k: "listen", say: "Le télétravail fait gagner du temps. En outre, il réduit la pollution.", acc: ["Le télétravail fait gagner du temps. En outre, il réduit la pollution."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le télétravail fait gagner du temps. En outre, il réduit la pollution.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-conclure"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Conclure un texte ou une intervention",
  objetivo: {
    que: "Vas a cerrar un texto o una intervención: resumir, tomar posición y abrir una pregunta.",
    corto: "En conclusion… · Il me semble donc que… · Reste à savoir si…",
    podras: ["Anunciar el cierre: en conclusion, pour conclure, en définitive, en somme.", "Tomar posición: il me semble donc que…, c'est pourquoi je pense que…", "Abrir una pregunta: reste à savoir si…, on peut se demander si…"],
    iconos: ["ic2/pergamino", "ic2/trofeo", "ic2/microfono"],
    previos: ["Opinar (lección 8), reformular (lección 47) y añadir argumentos (lección 49)."],
    capacidad: "Ahora tus textos terminan con fuerza."
  },
  requiere: R("b1op-connect", "b1rf-resume", "b1ca-mots"), recupera: ["b1rf-resume"],
  conceptos: {
    "b1cl-annonce": { n: "anunciar el cierre: en conclusion, pour conclure, en définitive, en somme, pour finir", b: "gr" },
    "b1cl-position": { n: "tomar posición y abrir: il me semble donc que, c'est pourquoi, reste à savoir si, on peut se demander si", b: "gr" }
  },
  video: {
    titulo: "Concluir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "en conclusion", seg: [
        { es: "Hola. Una buena conclusión resume, toma posición y abre." } ] },
      { v: "frase", filas: [
          { nota: "anunciar", p: 1, partes: [["En conclusion, les avantages l'emportent.", "-", 1]] },
          { nota: "posición", p: 2, partes: [["C'est pourquoi je pense qu'il faut agir vite.", "-", 2]] },
          { nota: "abrir", p: 3, partes: [["Reste à savoir si les gens accepteront.", "-", 3]] } ], seg: [
        { fr: "En conclusion, les avantages l'emportent.", p: 1 }, { fr: "C'est pourquoi je pense qu'il faut agir vite.", p: 2 }, { fr: "Reste à savoir si les gens accepteront.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Para concluir, diría que las dos opciones son válidas.»", o: ["Pour conclure, je dirais que les deux options sont valables.", "Pour concluir, je dirais que les deux options sont valables."], a: 0,
        bien: "¡Sí! Conclure, infinitivo francés.", mal: "El infinitivo es conclure.",
        seg: [ { es: "Pausa. Para concluir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en conclusion", "pour conclure", "en définitive", "il me semble donc que", "reste à savoir si"], seg: [
        { es: "Resume, toma posición, abre una pregunta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El cierre del debate", img: "bg-universidad", yo: "camila",
    escena: "Camila cierra su intervención en clase.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, pour finir ?", "Camila, ¿para terminar?"],
      ["camila", "En conclusion, il me semble que cette solution est la plus raisonnable.", "En conclusión, me parece que esta solución es la más razonable."],
      ["camila", "C'est pourquoi je pense qu'il faut changer. En définitive, je suis favorable à ce projet.", "Por eso creo que hay que cambiar. En definitiva, estoy a favor de este proyecto."],
      ["camila", "Reste à savoir si les étudiants accepteront. On peut se demander si cette mesure sera efficace.", "Queda por saber si los estudiantes aceptarán. Uno puede preguntarse si esta medida será eficaz."]
    ],
    fijate: "Fíjate: en conclusion, il me semble que, c'est pourquoi, en définitive, reste à savoir si, on peut se demander si."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las partes del cierre",
      idea: "Anunciar: En conclusion, Pour conclure, En définitive, En somme; oral: Pour finir, Voilà, c'est tout pour moi. Tomar posición: Il me semble donc que…, C'est pourquoi je pense que… Abrir una pregunta: Reste à savoir si…, On peut se demander si… No confundas con la introducción: Tout d'abord, Commençons par…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["En conclusion, · conclusion", "En conclusión,", "anunciar"],
        ["Pour conclure, · conclure", "Para concluir,", "anunciar"],
        ["En définitive, · définitive · En somme, · somme", "En definitiva, · En suma,", "anunciar / resumir"],
        ["Pour finir, · Voilà, c'est tout pour moi.", "Para terminar, · Eso es todo.", "oral"],
        ["Il me semble donc que…", "Me parece entonces que…", "posición"],
        ["C'est pourquoi je pense que…", "Por eso creo que…", "posición"],
        ["Reste à savoir si…", "Queda por saber si…", "abrir"],
        ["On peut se demander si… · demander", "Uno puede preguntarse si…", "abrir"],
        ["Tout d'abord, · Commençons par… · Je vais d'abord présenter…", "Primero, · Empecemos por… · Primero voy a presentar…", "introducción"]
      ]],
      ej: [["En conclusion, les avantages l'emportent sur les inconvénients.", "En conclusión, las ventajas superan a los inconvenientes."], ["C'est pourquoi je pense qu'il faut agir vite.", "Por eso creo que hay que actuar rápido."], ["Reste à savoir si les gens accepteront.", "Queda por saber si la gente aceptará."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Pour concluir…", "Pour conclure…", "Infinitivo francés: conclure."], ["En conclusión, …", "En conclusion, …", "Sin tilde: conclusion."], ["Il reste à savoir si… (largo)", "Reste à savoir si…", "Forma fija, más natural."]] }
  ],
  ejemplos: [
    { sit: "«Para concluir…»", resp: "Pour conclure,", pasos: ["Anunciar."], porque: "Cierre." },
    { sit: "«Queda por saber si…»", resp: "Reste à savoir si…", pasos: ["Abrir una pregunta."], porque: "Apertura." },
    { sit: "«Por eso propongo…»", resp: "C'est pourquoi je propose…", pasos: ["Posición."], porque: "Consecuencia." }
  ],
  comprueba: [
    { q: "«Reste à savoir si…» sirve para…", o: ["abrir una pregunta", "introducir el tema"], a: 0, b: "gr", porque: "Apertura." },
    { q: "«Tout d'abord» pertenece a…", o: ["la introducción", "la conclusión"], a: 0, b: "gr", porque: "Inicio." },
    { q: "El infinitivo de «concluir» es…", o: ["conclure", "concluir"], a: 0, b: "gr", porque: "Francés." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cl-annonce"], k: "sort", ask: "¿Introducción o conclusión?", q: "Clasifica.", cats: ["Introducción", "Conclusión"], items: [["Tout d'abord,", 0], ["Aujourd'hui, on parle beaucoup de…", 0], ["Je vais d'abord présenter…", 0], ["Commençons par…", 0], ["Pour conclure,", 1], ["En définitive,", 1], ["Reste à savoir si…", 1], ["Pour finir,", 1]], pista: "¿Abre o cierra?", why: "Partes." },
    { fase: "guiada", c: ["b1cl-annonce"], k: "choice", ask: "«Para concluir…»", q: "«___»", o: ["Pour conclure,", "Pour finir de commencer,"], a: 0, pista: "conclure.", why: "<b>Pour conclure</b>." },
    { fase: "guiada", c: ["b1cl-position"], k: "choice", ask: "«Queda por saber si…»", q: "«___»", o: ["Reste à savoir si…", "Reste de savoir si…"], a: 0, pista: "à.", why: "<b>Reste à savoir si</b>." },
    { fase: "indep", c: ["b1cl-position"], k: "choice", es: true, ask: "«C'est pourquoi je propose…» sirve para…", q: "Elige.", o: ["Introducir una consecuencia / posición", "Dar un ejemplo"], a: 0, why: "Posición." },
    { fase: "indep", c: ["b1cl-annonce"], k: "fill", ask: "Completa «en conclusión».", q: "En ___, je suis favorable à ce projet.", acc: ["conclusion", "définitive", "somme"], why: "<b>En conclusion</b>." },
    { fase: "indep", c: ["b1cl-position"], k: "fill", ask: "Completa «preguntarse».", q: "On peut se ___ si cette mesure sera efficace.", acc: ["demander"], why: "<b>se demander</b>." },
    { fase: "aplica", c: ["b1cl-annonce", "b1cl-position"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["En conclusion,", "anunciar el cierre"], ["Il me semble donc que…", "tomar posición"], ["Reste à savoir si…", "abrir una pregunta"], ["En somme,", "resumir"]], why: "Funciones." },
    { fase: "aplica", c: ["b1cl-annonce"], k: "spot", ask: "Encuentra el error.", s: "Pour [concluir] , je dirais que les deux options sont valables .", fix: "conclure", why: "<b>conclure</b>." },
    { fase: "dominio", c: ["b1cl-position"], k: "order", ask: "Ordena: «Por eso creo que hay que cambiar».", tokens: ["C'est pourquoi", "je pense", "qu'il faut changer."], why: "<b>C'est pourquoi je pense qu'il faut changer.</b>" },
    { fase: "dominio", c: ["b1cl-annonce"], k: "choice", ask: "«Para terminar…» (oral)", q: "«___»", o: ["Pour finir,", "Tout d'abord,"], a: 0, why: "<b>Pour finir</b>." },
    { fase: "dominio", c: ["b1cl-annonce", "b1cl-position"], k: "listen", say: "En conclusion, il me semble que cette solution est la plus raisonnable.", acc: ["En conclusion, il me semble que cette solution est la plus raisonnable."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En conclusion, il me semble que cette solution est la plus raisonnable.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ───── B1.1·8 · Interactuar en situaciones reales ───── */
E["b11-prendre-parole"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Prendre la parole et interrompre poliment",
  objetivo: {
    que: "Vas a pedir la palabra, interrumpir con cortesía, mantener tu turno y cederlo.",
    corto: "Excusez-moi de vous interrompre… · Laissez-moi finir.",
    podras: ["Pedir la palabra: je peux dire quelque chose ?, si je peux me permettre…", "Interrumpir con cortesía: excusez-moi de vous interrompre, mais…", "Mantener el turno (laissez-moi finir) y cederlo (qu'en pensez-vous ?, je vous écoute)."],
    iconos: ["ic2/microfono", "ic2/amigos", "ic2/espadas"],
    previos: ["Acuerdo y desacuerdo (lección 45)."],
    capacidad: "Ahora participas en un debate sin miedo a interrumpir."
  },
  requiere: R("b1ad-accord", "b1ad-desac"), recupera: ["b1ad-desac"],
  conceptos: {
    "b1pp-prendre": { n: "tomar la palabra: si je peux me permettre, excusez-moi de vous interrompre, pardon, juste un mot", b: "gr" },
    "b1pp-donner": { n: "mantener y ceder: laissez-moi finir, je termine / qu'en pensez-vous ?, je vous écoute, allez-y", b: "gr" }
  },
  video: {
    titulo: "Tomar la palabra", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "si je peux me permettre…", seg: [
        { es: "Hola. En un debate, hay que saber entrar, quedarse y salir." } ] },
      { v: "frase", filas: [
          { nota: "interrumpir", p: 1, partes: [["Excusez-moi de vous interrompre, mais…", "-", 1]] },
          { nota: "mantener", p: 2, partes: [["Laissez-moi finir, s'il vous plaît.", "-", 2]] },
          { nota: "ceder", p: 3, partes: [["Et vous, qu'en pensez-vous ?", "-", 3]] } ], seg: [
        { fr: "Excusez-moi de vous interrompre, mais…", p: 1 }, { fr: "Laissez-moi finir, s'il vous plaît.", p: 2 }, { fr: "Et vous, qu'en pensez-vous ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Disculpe que le interrumpa, pero es importante.»", o: ["Excusez-moi de vous interrompre, mais c'est important.", "Excusez-moi pour vous interrompre, mais c'est important."], a: 0,
        bien: "¡Sí! Excusez-moi de + infinitivo.", mal: "Se dice excusez-moi de.",
        seg: [ { es: "Pausa. Disculpe que le interrumpa." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["si je peux me permettre", "excusez-moi de vous interrompre", "laissez-moi finir", "qu'en pensez-vous ?", "je vous écoute"], seg: [
        { es: "Excusez-moi de, no pour.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reunión", img: "bg-universidad", yo: "camila",
    escena: "Camila participa en una reunión de estudiantes.",
    pj: PJ,
    lineas: [
      ["hugo", "Je pense que le projet est trop cher et que…", "Creo que el proyecto es muy caro y que…"],
      ["camila", "Excusez-moi de vous interrompre, mais je ne suis pas tout à fait d'accord.", "Disculpen que interrumpa, pero no estoy del todo de acuerdo."],
      ["hugo", "Laissez-moi finir, s'il vous plaît. Je termine.", "Déjenme terminar, por favor. Ya termino."],
      ["camila", "Pardon. Si je peux me permettre, je voudrais ajouter un point. Et toi, qu'est-ce que tu en penses ?", "Perdón. Si me permiten, quisiera añadir algo. ¿Y tú qué opinas?"]
    ],
    fijate: "Fíjate: excusez-moi de vous interrompre, laissez-moi finir, je termine, si je peux me permettre, qu'est-ce que tu en penses ?"
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Gestionar el turno",
      idea: "Pedir la palabra: Je peux dire quelque chose ? Si je peux me permettre… J'aimerais ajouter quelque chose. Interrumpir: Excusez-moi de vous interrompre, mais… Excusez-moi de vous couper… Pardon, juste un mot… Mantener el turno: Laissez-moi finir. Je termine. Attendez, ce n'est pas tout. Ceder: Et vous, qu'en pensez-vous ? Je vous écoute. Allez-y. À vous la parole. Ojo: excusez-moi de + infinitivo (no pour).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["Si je peux me permettre… · permettre", "Si me permiten…", "pedir la palabra"],
        ["Pardon, juste un mot. · mot", "Perdón, solo una palabra.", "pedir la palabra"],
        ["J'aimerais ajouter quelque chose. · Moi, je voudrais dire que…", "Me gustaría añadir algo. · Yo quisiera decir que…", "pedir la palabra"],
        ["Excusez-moi de vous interrompre… · de", "Disculpe que le interrumpa…", "interrumpir"],
        ["Excusez-moi de vous couper…", "Disculpe que le corte…", "interrumpir"],
        ["Laissez-moi finir. · Je termine.", "Déjeme terminar. · Ya termino.", "mantener"],
        ["Qu'en pensez-vous ? · Et vous, qu'en pensez-vous ?", "¿Qué opina usted?", "ceder"],
        ["Je vous écoute. · Allez-y. · À vous la parole.", "Lo escucho. · Adelante. · Tiene la palabra.", "ceder"]
      ]],
      ej: [["Excusez-moi de vous interrompre, mais j'ai une question.", "Disculpe que le interrumpa, pero tengo una pregunta."], ["Laissez-moi finir, s'il vous plaît.", "Déjeme terminar, por favor."], ["Et toi, qu'est-ce que tu en penses ?", "¿Y tú qué opinas?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Excusez-moi pour vous interrompre.", "Excusez-moi de vous interrompre.", "Excusez-moi de + infinitivo."], ["Laissez-moi finisser.", "Laissez-moi finir.", "Infinitivo: finir."], ["Qu'est-ce que vous pensez de ça ? (al cortar)", "Qu'en pensez-vous ?", "Más natural y corto."]] }
  ],
  ejemplos: [
    { sit: "Quieres interrumpir con cortesía.", resp: "Excusez-moi de vous interrompre…", pasos: ["excusez-moi de."], porque: "Interrumpir." },
    { sit: "No quieres que te corten.", resp: "Laissez-moi finir.", pasos: ["Mantener el turno."], porque: "Turno." },
    { sit: "Quieres la opinión del otro.", resp: "Qu'en pensez-vous ?", pasos: ["Ceder."], porque: "Ceder." }
  ],
  comprueba: [
    { q: "«Disculpe que le interrumpa» se dice…", o: ["Excusez-moi de vous interrompre.", "Excusez-moi pour vous interrompre."], a: 0, b: "gr", porque: "de." },
    { q: "«Je vous écoute» sirve para…", o: ["ceder la palabra", "interrumpir"], a: 0, b: "gr", porque: "Ceder." },
    { q: "«Laissez-moi finir» sirve para…", o: ["mantener el turno", "ceder la palabra"], a: 0, b: "gr", porque: "Mantener." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pp-prendre", "b1pp-donner"], k: "sort", ask: "¿Tomar o dar la palabra?", q: "Clasifica.", cats: ["Tomar la palabra", "Dar la palabra"], items: [["Si je peux me permettre…", 0], ["Pardon, juste un mot.", 0], ["J'aimerais ajouter quelque chose.", 0], ["Moi, je voudrais dire que…", 0], ["Et vous, qu'en pensez-vous ?", 1], ["Je vous écoute.", 1], ["Allez-y.", 1], ["À vous la parole.", 1]], pista: "¿Hablo yo o el otro?", why: "Turnos." },
    { fase: "guiada", c: ["b1pp-prendre"], k: "choice", ask: "«Disculpe que le interrumpa…»", q: "«___»", o: ["Excusez-moi de vous interrompre…", "Excusez-moi pour vous interrompre…"], a: 0, pista: "de.", why: "<b>de</b>." },
    { fase: "guiada", c: ["b1pp-donner"], k: "choice", ask: "«Déjeme terminar.»", q: "«___»", o: ["Laissez-moi finir.", "Laissez-moi de finir."], a: 0, pista: "Sin de.", why: "<b>Laissez-moi finir</b>." },
    { fase: "indep", c: ["b1pp-donner"], k: "choice", ask: "«¿Qué opina usted?»", q: "«___»", o: ["Qu'en pensez-vous ?", "Que pensez-vous en ?"], a: 0, why: "<b>Qu'en pensez-vous</b>." },
    { fase: "indep", c: ["b1pp-prendre"], k: "fill", ask: "Escribe «permitir».", q: "Si je peux me ___, je voudrais ajouter un point.", acc: ["permettre"], why: "<b>permettre</b>." },
    { fase: "indep", c: ["b1pp-prendre"], k: "fill", ask: "Escribe «palabra».", q: "Pardon, juste un ___ avant de continuer.", acc: ["mot"], why: "<b>un mot</b>." },
    { fase: "aplica", c: ["b1pp-prendre", "b1pp-donner"], k: "match", ask: "Une cada frase con su función.", q: "Frase → función", pairs: [["Je peux dire quelque chose ?", "pedir la palabra"], ["Excusez-moi de vous couper…", "interrumpir"], ["Je termine.", "mantener el turno"], ["Je vous écoute.", "ceder la palabra"]], why: "Funciones." },
    { fase: "aplica", c: ["b1pp-prendre"], k: "spot", ask: "Encuentra el error.", s: "Excusez-moi [pour] vous interrompre , mais c'est important .", fix: "de", why: "<b>de</b>." },
    { fase: "dominio", c: ["b1pp-donner"], k: "order", ask: "Ordena: «¿Y tú qué opinas?».", tokens: ["Et toi,", "qu'est-ce que", "tu en penses ?"], why: "<b>Et toi, qu'est-ce que tu en penses ?</b>" },
    { fase: "dominio", c: ["b1pp-donner"], k: "choice", ask: "Cedes la palabra con amabilidad.", q: "«___»", o: ["Allez-y.", "Laissez-moi finir."], a: 0, why: "<b>Allez-y</b>." },
    { fase: "dominio", c: ["b1pp-prendre", "b1pp-donner"], k: "listen", say: "Excusez-moi de vous interrompre, mais je ne suis pas tout à fait d'accord.", acc: ["Excusez-moi de vous interrompre, mais je ne suis pas tout à fait d'accord."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Excusez-moi de vous interrompre, mais je ne suis pas tout à fait d'accord.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-se-plaindre"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Se plaindre et réclamer",
  objetivo: {
    que: "Vas a presentar una queja con cortesía firme: explicar el problema, expresar descontento y pedir una solución.",
    corto: "Je vous écris au sujet de… · Je souhaiterais être remboursé(e).",
    podras: ["Presentar el motivo: je vous écris au sujet de / concernant…", "Describir el problema: il ne marche pas, il manque une pièce, il est arrivé cassé.", "Pedir una solución: je souhaiterais un échange / un remboursement; y usar se plaindre de."],
    iconos: ["ic2/llama", "ic2/lapiz", "ic2/bolsa"],
    previos: ["La reclamación (A2, lección 37) y los sentimientos (lección 44)."],
    capacidad: "Ahora reclamas y consigues una solución."
  },
  requiere: R("rc-probleme", "rc-demande", "b1se-struct"), recupera: ["rc-demande"],
  conceptos: {
    "b1sp-probleme": { n: "motivo y problema: au sujet de, concernant; il ne marche pas, il manque, abîmé, cassé", b: "voc" },
    "b1sp-demande": { n: "descontento y solución: je trouve anormal que (+ subj.), je souhaiterais un échange / un remboursement; se plaindre de", b: "voc" }
  },
  video: {
    titulo: "Reclamar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/llama", grande: "je souhaiterais…", seg: [
        { es: "Hola. Una buena queja es clara, cortés y firme." } ] },
      { v: "frase", filas: [
          { nota: "motivo", p: 1, partes: [["Je vous contacte au sujet de ma réservation.", "-", 1]] },
          { nota: "problema", p: 2, partes: [["La machine à laver ne fonctionne pas.", "-", 2]] },
          { nota: "solución", p: 3, partes: [["Je souhaiterais être remboursée.", "-", 3]] } ], seg: [
        { fr: "Je vous contacte au sujet de ma réservation.", p: 1 }, { fr: "La machine à laver ne fonctionne pas.", p: 2 }, { fr: "Je souhaiterais être remboursée.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me quejo del ruido.»", o: ["Je me plains du bruit.", "Je me plains le bruit."], a: 0,
        bien: "¡Sí! Se plaindre de.", mal: "Se plaindre lleva de: du bruit.",
        seg: [ { es: "Pausa. Me quejo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["au sujet de", "il ne marche pas", "il manque une pièce", "un remboursement", "un échange"], seg: [
        { es: "Problema, descontento, solución.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El paquete", img: "bg-cafe", yo: "camila",
    escena: "Camila escribe una queja a una tienda en línea.",
    pj: PJ,
    lineas: [
      ["camila", "Madame, je vous écris au sujet d'un colis arrivé abîmé.", "Señora, le escribo sobre un paquete que llegó dañado."],
      ["vendeur", "Quel est le problème exactement ?", "¿Cuál es el problema exactamente?"],
      ["camila", "L'écran est rayé et il manque deux livres. Je trouve anormal que personne ne m'ait répondu.", "La pantalla está rayada y faltan dos libros. Me parece anormal que nadie me haya respondido."],
      ["camila", "Je souhaiterais un échange ou un remboursement, s'il vous plaît.", "Desearía un cambio o un reembolso, por favor."]
    ],
    fijate: "Fíjate: au sujet de, arrivé abîmé, il manque, je trouve anormal que… m'ait (subjuntivo), je souhaiterais un échange."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Reclamar paso a paso",
      idea: "Motivo: Je vous écris au sujet de / concernant ma commande n°… Problema: Le produit est arrivé abîmé (dañado) o cassé (roto). Il ne fonctionne pas / il ne marche pas. Il manque une pièce. Ce n'est pas ma taille. Descontento: Je suis très déçu(e). C'est inadmissible. Je trouve anormal que… (+ subjuntivo). Solución: Je vous demande de… Je souhaiterais un échange / un remboursement / être remboursé(e). Se plaindre de: Je me plains du bruit.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "au sujet de · sujet · concernant", es: "sobre · acerca de" },
        { fr: "abîmé · cassé · rayé", es: "dañado · roto · rayado" },
        { fr: "il ne marche pas · il ne fonctionne pas", es: "no funciona" },
        { fr: "il manque une pièce", es: "falta una pieza" },
        { fr: "ce n'est pas ma taille", es: "no es mi talla" },
        { fr: "C'est inadmissible.", es: "Es inadmisible." },
        { fr: "que personne ne m'ait répondu · m'ait", es: "que nadie me haya respondido" },
        { fr: "un échange · un remboursement · être remboursé(e)", es: "un cambio · un reembolso · ser reembolsado(a)" },
        { fr: "Je me plains du bruit. · se plaindre de · du", es: "Me quejo del ruido. · quejarse de" },
        { fr: "le colis · la commande · la facture", es: "el paquete · el pedido · la factura" }
      ],
      ej: [["Je vous contacte au sujet de ma réservation.", "Me pongo en contacto con usted sobre mi reserva."], ["La machine à laver ne fonctionne pas.", "La lavadora no funciona."], ["Je souhaiterais être remboursée dans les plus brefs délais.", "Desearía que me reembolsaran lo antes posible."]],
      clave: "Motivo, problema, descontento, solución." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je me plains à le bruit.", "Je me plains du bruit.", "se plaindre de."], ["Les clients se plaignent le manque de propreté.", "Les clients se plaignent du manque de propreté.", "se plaindre de → du."], ["Je trouve anormal que personne ne m'a répondu.", "Je trouve anormal que personne ne m'ait répondu.", "Je trouve anormal que + subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "«Me quejo del ruido.»", resp: "Je me plains du bruit.", pasos: ["se plaindre de + le = du."], porque: "Preposición." },
    { sit: "Pides un reembolso.", resp: "Je souhaiterais être remboursé.", pasos: ["Condicional cortés."], porque: "Solución." },
    { sit: "«El paquete llegó dañado.»", resp: "Le colis est arrivé abîmé.", pasos: ["abîmé = dañado."], porque: "Problema." }
  ],
  comprueba: [
    { q: "«Quejarse de» se dice…", o: ["se plaindre de", "se plaindre à"], a: 0, b: "voc", porque: "de." },
    { q: "«Abîmé» significa…", o: ["dañado", "abierto"], a: 0, b: "voc", porque: "Problema." },
    { q: "Je trouve anormal que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "voc", porque: "Sentimiento." }
  ],
  practica: [
    { fase: "guiada", c: ["b1sp-probleme", "b1sp-demande"], k: "sort", ask: "¿Describir el problema o pedir una solución?", q: "Clasifica.", cats: ["Describir el problema", "Pedir una solución"], items: [["L'écran est rayé.", 0], ["La chambre était sale.", 0], ["Le train avait trois heures de retard.", 0], ["Il manque deux livres.", 0], ["Je demande un échange.", 1], ["Je souhaiterais un remboursement.", 1], ["Merci de me renvoyer le produit.", 1], ["Je vous prie de corriger la facture.", 1]], pista: "¿Qué pasa o qué quieres?", why: "Partes." },
    { fase: "guiada", c: ["b1sp-demande"], k: "choice", ask: "«Me quejo del ruido.»", q: "«___»", o: ["Je me plains du bruit.", "Je me plains le bruit."], a: 0, pista: "de.", why: "<b>du bruit</b>." },
    { fase: "guiada", c: ["b1sp-demande"], k: "choice", ask: "Pides un reembolso.", q: "«___»", o: ["Je souhaiterais être remboursé.", "Je veux mon argent tout de suite !"], a: 0, pista: "Cortés.", why: "<b>Je souhaiterais</b>." },
    { fase: "indep", c: ["b1sp-probleme"], k: "choice", es: true, ask: "«Le colis est arrivé abîmé.» Abîmé significa…", q: "Elige.", o: ["dañado", "abierto", "tarde"], a: 0, why: "Dañado." },
    { fase: "indep", c: ["b1sp-probleme"], k: "fill", ask: "Escribe «sobre» (au … de).", q: "Je vous écris au ___ de ma commande.", acc: ["sujet"], why: "<b>au sujet de</b>." },
    { fase: "indep", c: ["b1sp-demande"], k: "fill", ask: "Subjuntivo de avoir (passé, con me).", q: "Je trouve anormal que personne ne ___ répondu.", acc: ["m'ait"], why: "<b>m'ait</b>." },
    { fase: "aplica", c: ["b1sp-probleme"], k: "match", ask: "Une cada problema con su traducción.", q: "Español → francés", pairs: [["no funciona", "il ne marche pas"], ["falta una pieza", "il manque une pièce"], ["llegó roto", "il est arrivé cassé"], ["no es mi talla", "ce n'est pas ma taille"]], why: "Problemas." },
    { fase: "aplica", c: ["b1sp-demande"], k: "spot", ask: "Encuentra el error.", s: "Les clients se plaignent [le] manque de propreté de l'hôtel .", fix: "du", why: "<b>du manque</b>." },
    { fase: "dominio", c: ["b1sp-demande"], k: "order", ask: "Ordena: «Desearía un cambio».", tokens: ["Je", "souhaiterais", "un échange."], why: "<b>Je souhaiterais un échange.</b>" },
    { fase: "dominio", c: ["b1sp-probleme"], k: "choice", ask: "«La lavadora no funciona.»", q: "«La machine à laver ne ___ pas.»", o: ["fonctionne", "fonction"], a: 0, why: "<b>fonctionne</b>." },
    { fase: "dominio", c: ["b1sp-probleme", "b1sp-demande"], k: "listen", say: "Madame, je vous écris au sujet d'un colis arrivé abîmé.", acc: ["Madame, je vous écris au sujet d'un colis arrivé abîmé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Madame, je vous écris au sujet d'un colis arrivé abîmé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: [] }
};

E["b11-permission"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Demander et donner la permission",
  objetivo: {
    que: "Vas a pedir permiso con fórmulas graduadas y a responder, sin caer en la trampa de «Ça vous dérange ?».",
    corto: "Ça vous dérange si j'ouvre la fenêtre ? — Non, pas du tout.",
    podras: ["Pedir permiso: je peux…?, est-ce que je pourrais…?, vous permettez que + subjuntivo?", "Usar ça vous dérange si + presente y responder «non, pas du tout» para decir sí.", "Conceder (allez-y, je vous en prie) y negar (je préférerais que non)."],
    iconos: ["ic2/candado", "ic2/corazon", "ic2/pregunta"],
    previos: ["El condicional de cortesía (lección 22) y el subjuntivo (lección 41)."],
    capacidad: "Ahora pides permiso como alguien educado."
  },
  requiere: R("b1cp-demander", "b1si-etre"), recupera: ["b1cp-demander"],
  conceptos: {
    "b1pm-demander": { n: "pedir: je peux…?, est-ce que je pourrais…?, ça vous dérange si + presente?, vous permettez que + subj.?", b: "gr" },
    "b1pm-repondre": { n: "conceder: allez-y, je vous en prie, bien sûr, non, pas du tout / negar: je préférerais que non", b: "gr" }
  },
  video: {
    titulo: "Pedir permiso", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "ça vous dérange si… ?", seg: [
        { es: "Hola. Ojo: a «¿le molesta?», responder «no» significa «sí, adelante»." } ] },
      { v: "dos",
        a: { tag: "pregunta", fr: "Ça vous dérange si j'ouvre la fenêtre ?", es: "¿le molesta?" },
        b: { tag: "sí, adelante", fr: "Non, pas du tout.", es: "no me molesta" },
        seg: [ { fr: "Ça vous dérange si j'ouvre la fenêtre ?", p: 1 }, { es: "No, para nada: o sea, puedes.", p: 2 }, { fr: "Non, pas du tout.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Le molesta si abro la ventana?»", o: ["Ça vous dérange si j'ouvre la fenêtre ?", "Ça vous dérange si j'ouvrirais la fenêtre ?"], a: 0,
        bien: "¡Sí! Tras si: presente.", mal: "Después de si: presente, j'ouvre.",
        seg: [ { es: "Pausa. Si abro." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je peux… ?", "est-ce que je pourrais… ?", "ça vous dérange si… ?", "allez-y", "je vous en prie"], seg: [
        { es: "Non, pas du tout: adelante.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la oficina", img: "bg-universidad", yo: "camila",
    escena: "Camila pide permisos en la secretaría.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, ça vous dérange si je ferme la porte ?", "Disculpe, ¿le molesta si cierro la puerta?"],
      ["sofia", "Non, pas du tout. Je vous en prie.", "No, para nada. Adelante."],
      ["camila", "Est-ce que je pourrais utiliser votre téléphone ? Et vous permettez que je pose une question ?", "¿Podría usar su teléfono? ¿Y me permite hacer una pregunta?"],
      ["sofia", "Bien sûr, allez-y. Mais partir plus tôt aujourd'hui… je préférerais que non.", "Claro, adelante. Pero irse más temprano hoy… preferiría que no."]
    ],
    fijate: "Fíjate: ça vous dérange si je ferme (presente); non, pas du tout (= sí); est-ce que je pourrais; vous permettez que je pose (subjuntivo); je préférerais que non."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas graduadas",
      idea: "Informal: Je peux ouvrir la fenêtre ? Cortés: Est-ce que je pourrais…? Pourrais-je…? Amable: Ça vous / te dérange si + presente? (Ça vous dérange si je fume ?) — Responder «Non, pas du tout» = sí, adelante. Formal: Vous permettez que + subjuntivo? (Vous permettez que je m'assoie ?) / Vous me permettez de…? Conceder: Allez-y. Je vous en prie. Bien sûr. Negar: Je préférerais que non. Désolé, ce n'est pas possible. Ce n'est pas autorisé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Je peux… ? = informal", "¿Puedo…?", "informal"],
        ["Est-ce que je pourrais partir plus tôt ?", "¿Podría irme antes?", "cortés"],
        ["Ça vous dérange si je m'assois ici ?", "¿Le molesta si me siento aquí?", "amable"],
        ["Ça vous dérange si j'ouvre… · ouvre", "¿Le molesta si abro…?", "si + presente"],
        ["Ça te dérange si… ? = amable, entre amigos", "¿Te molesta si…?", "amigos"],
        ["Vous permettez que je pose une question ? · pose", "¿Me permite hacer una pregunta?", "formal + subjuntivo"],
        ["Vous permettez que… ? = formal", "¿Me permite que…?", "formal"],
        ["Allez-y. · Je vous en prie. · prie · Bien sûr. · Non, pas du tout.", "Adelante. · Con gusto. · Claro. · No, para nada.", "conceder"],
        ["Je préférerais que non. · Désolé, ce n'est pas possible. · Ce n'est pas autorisé. · Plutôt pas, non.", "Preferiría que no. · Lo siento, no es posible. · No está permitido. · Mejor no.", "negar"]
      ]],
      ej: [["Ça vous dérange si j'ouvre la fenêtre ? — Non, pas du tout.", "¿Le molesta si abro la ventana? — No, para nada."], ["Est-ce que je pourrais partir plus tôt ?", "¿Podría irme antes?"], ["Vous permettez que je m'assoie ?", "¿Me permite que me siente?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ça vous dérange si j'ouvrirais la fenêtre ?", "Ça vous dérange si j'ouvre la fenêtre ?", "Tras si: presente."], ["— Ça te dérange si je mets de la musique ? — Oui. (= adelante)", "— Non, pas du tout.", "«No me molesta» = puedes."], ["Vous permettez que je fais une remarque ?", "Vous permettez que je fasse une remarque ?", "permettre que + subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "«¿Le molesta si me siento aquí?»", resp: "Ça vous dérange si je m'assois ici ?", pasos: ["si + presente."], porque: "Amable." },
    { sit: "«¿Podría irme antes?»", resp: "Est-ce que je pourrais partir plus tôt ?", pasos: ["Condicional."], porque: "Cortés." },
    { sit: "Te preguntan «Ça te dérange si je mets de la musique ?». Aceptas.", resp: "Non, pas du tout.", pasos: ["No me molesta."], porque: "Conceder." }
  ],
  comprueba: [
    { q: "Después de «Ça vous dérange si» va…", o: ["presente", "condicional"], a: 0, b: "gr", porque: "si + presente." },
    { q: "«Non, pas du tout» a «Ça vous dérange ?» significa…", o: ["Sí, adelante.", "No, no puede."], a: 0, b: "gr", porque: "No me molesta." },
    { q: "«Vous permettez que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Formal." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pm-repondre"], k: "sort", ask: "¿Concede o niega?", q: "Clasifica.", cats: ["Concede", "Niega"], items: [["Allez-y.", 0], ["Je vous en prie.", 0], ["Bien sûr.", 0], ["Non, pas du tout.", 0], ["Je préférerais que non.", 1], ["Désolé, ce n'est pas possible.", 1], ["Ce n'est pas autorisé.", 1], ["Plutôt pas, non.", 1]], pista: "Ojo con «Non, pas du tout».", why: "Respuestas." },
    { fase: "guiada", c: ["b1pm-demander"], k: "choice", ask: "«¿Le molesta si me siento aquí?»", q: "«___»", o: ["Ça vous dérange si je m'assois ici ?", "Ça vous dérange si je m'assiérais ici ?"], a: 0, pista: "si + presente.", why: "Presente." },
    { fase: "guiada", c: ["b1pm-repondre"], k: "choice", es: true, ask: "«Ça te dérange si je mets de la musique ? — Non, pas du tout.» significa…", q: "Elige.", o: ["Puedes ponerla.", "No la pongas."], a: 0, pista: "No me molesta.", why: "Concede." },
    { fase: "indep", c: ["b1pm-demander"], k: "choice", ask: "Pides irte antes, con cortesía.", q: "«___»", o: ["Est-ce que je pourrais partir plus tôt ?", "Je pars plus tôt."], a: 0, why: "<b>Est-ce que je pourrais</b>." },
    { fase: "indep", c: ["b1pm-demander"], k: "fill", ask: "Subjuntivo de poser (je).", q: "Vous permettez que je ___ une question ?", acc: ["pose"], why: "<b>pose</b>." },
    { fase: "indep", c: ["b1pm-repondre"], k: "fill", ask: "Completa «je vous en…».", q: "Bien sûr, je vous en ___.", acc: ["prie"], why: "<b>je vous en prie</b>." },
    { fase: "aplica", c: ["b1pm-demander"], k: "match", ask: "Une cada fórmula con su registro.", q: "Fórmula → registro", pairs: [["Je peux… ?", "informal"], ["Est-ce que je pourrais… ?", "cortés"], ["Vous permettez que… ?", "formal"], ["Ça te dérange si… ?", "amable, entre amigos"]], why: "Registros." },
    { fase: "aplica", c: ["b1pm-demander"], k: "spot", ask: "Encuentra el error.", s: "Ça vous dérange si j'[ouvrirais] la fenêtre ?", fix: "ouvre", why: "<b>j'ouvre</b>." },
    { fase: "dominio", c: ["b1pm-demander"], k: "order", ask: "Ordena: «¿Podría usar su teléfono?».", tokens: ["Est-ce que je pourrais", "utiliser", "votre téléphone ?"], why: "<b>Est-ce que je pourrais utiliser votre téléphone ?</b>" },
    { fase: "dominio", c: ["b1pm-repondre"], k: "choice", ask: "Niegas con cortesía.", q: "«___»", o: ["Je préférerais que non.", "Allez-y."], a: 0, why: "<b>Je préférerais que non</b>." },
    { fase: "dominio", c: ["b1pm-demander", "b1pm-repondre"], k: "listen", say: "Excusez-moi, ça vous dérange si je ferme la porte ?", acc: ["Excusez-moi, ça vous dérange si je ferme la porte ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Excusez-moi, ça vous dérange si je ferme la porte ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

E["b11-proposer-accepter-refuser"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Proposer, accepter et refuser une invitation",
  objetivo: {
    que: "Vas a invitar, aceptar con entusiasmo y rechazar con amabilidad dando una excusa.",
    corto: "Ça te dirait de… ? · Volontiers ! · C'est gentil, mais…",
    podras: ["Proponer: ça te dirait de + infinitivo ?, ça te tente ?, on pourrait…", "Aceptar: avec plaisir, volontiers, bonne idée, ça marche.", "Rechazar con cortesía: c'est gentil, mais je ne peux pas; je suis déjà pris(e); une autre fois ?"],
    iconos: ["ic2/amigos", "ic2/cafe", "ic2/regalo"],
    previos: ["Proponer (A2, lección 49) y sugerir (lección 43)."],
    capacidad: "Ahora gestionas invitaciones sin quedar mal."
  },
  requiere: R("pr2-proposer", "pr2-repondre", "b1cs-suggest"), recupera: ["pr2-repondre"],
  conceptos: {
    "b1pa-prop": { n: "proponer: ça te dirait de + inf. ?, tu as envie de… ?, ça te tente ?, on pourrait…", b: "gr" },
    "b1pa-rep": { n: "aceptar: avec plaisir, volontiers, ça marche / rechazar: c'est gentil, mais…, je suis déjà pris(e), une autre fois", b: "gr" }
  },
  video: {
    titulo: "Invitaciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "ça te dirait de… ?", seg: [
        { es: "Hola. Invitar, decir que sí, y decir que no sin herir." } ] },
      { v: "frase", filas: [
          { nota: "proponer", p: 1, partes: [["Ça te dirait d'aller au concert samedi ?", "-", 1]] },
          { nota: "aceptar", p: 2, partes: [["Volontiers, à quelle heure ?", "-", 2]] },
          { nota: "rechazar", p: 3, partes: [["C'est gentil, mais j'ai déjà quelque chose de prévu.", "-", 3]] } ], seg: [
        { fr: "Ça te dirait d'aller au concert samedi ?", p: 1 }, { fr: "Volontiers, à quelle heure ?", p: 2 }, { fr: "C'est gentil, mais j'ai déjà quelque chose de prévu.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Te apetece venir a casa el sábado?»", o: ["Ça te dirait de venir à la maison samedi ?", "Ça te dirait à venir à la maison samedi ?"], a: 0,
        bien: "¡Sí! Ça te dirait de.", mal: "Ça te dirait de + infinitivo.",
        seg: [ { es: "Pausa. ¿Te apetece?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ça te dirait de", "volontiers", "avec plaisir", "c'est gentil, mais", "une autre fois"], seg: [
        { es: "Para rechazar: agradece, excúsate y propone otra fecha.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El concierto", img: "bg-cafe", yo: "camila",
    escena: "Hugo invita a Camila; Laura no puede.",
    pj: PJ,
    lineas: [
      ["hugo", "Ça te dirait d'aller au cinéma samedi ?", "¿Te apetece ir al cine el sábado?"],
      ["camila", "Avec plaisir ! Bonne idée. À quelle heure ?", "¡Con mucho gusto! Buena idea. ¿A qué hora?"],
      ["hugo", "Et Laura ? Ça te tente, Laura ?", "¿Y Laura? ¿Te tienta, Laura?"],
      ["camila", "Elle a dit : « C'est très gentil, mais malheureusement je suis déjà prise samedi. Une autre fois, peut-être ? »", "Ella dijo: «Muy amable, pero desafortunadamente ya estoy ocupada el sábado. ¿Otra vez, quizás?»"]
    ],
    fijate: "Fíjate: ça te dirait d'aller, ça te tente (proponer); avec plaisir, bonne idée (aceptar); c'est très gentil, mais… je suis déjà prise, une autre fois (rechazar)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Invitar y responder",
      idea: "Proponer: Ça te dirait de + infinitivo ? Tu as envie de… ? Ça te tente ? On pourrait… Tu es libre samedi ? Aceptar: Avec plaisir ! Volontiers ! Bonne idée ! Pourquoi pas ? Ça marche ! Rechazar con cortesía: agradece, excúsate y da una razón: C'est gentil, mais je ne peux pas. Désolé(e), je ne suis pas libre. J'ai déjà quelque chose de prévu. Je suis pris(e) ce soir. J'ai un empêchement. Une autre fois, peut-être ? Concretar: On se voit quand ?",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["Ça te dirait de dîner avec moi ? · de", "¿Te apetece cenar conmigo?", "proponer"],
        ["Ça te tente ? · Tu as envie de… ?", "¿Te tienta? · ¿Tienes ganas de…?", "proponer"],
        ["Avec plaisir ! · Volontiers !", "¡Con gusto!", "aceptar"],
        ["Bonne idée ! · Pourquoi pas ? · Ça marche !", "¡Buena idea! · ¿Por qué no? · ¡Vale!", "aceptar"],
        ["C'est gentil, mais je ne peux pas.", "Qué amable, pero no puedo.", "rechazar"],
        ["Je suis déjà pris(e). · prise", "Ya estoy ocupado(a).", "excusa"],
        ["J'ai un empêchement. · J'ai déjà un truc de prévu.", "Tengo un imprevisto. · Ya tengo algo.", "excusa"],
        ["Je ne suis pas libre. · Malheureusement, je ne peux pas.", "No estoy libre. · Desafortunadamente, no puedo.", "rechazar"],
        ["Une autre fois, peut-être ? · fois · Ce sera pour une autre fois.", "¿Otra vez, quizás? · Será otra vez.", "rechazar"],
        ["On se voit quand ?", "¿Cuándo nos vemos?", "concretar"]
      ]],
      ej: [["Ça te dirait d'aller au concert samedi ?", "¿Te apetecería ir al concierto el sábado?"], ["Volontiers, à quelle heure ?", "Con gusto, ¿a qué hora?"], ["C'est gentil, mais j'ai déjà quelque chose de prévu.", "Qué amable, pero ya tengo algo previsto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ça te dirait aller au cinéma ?", "Ça te dirait d'aller au cinéma ?", "Ça te dirait de + infinitivo."], ["Ça te dirait à venir à la maison ?", "Ça te dirait de venir à la maison ?", "de, no à."], ["Non. (solo, para rechazar)", "C'est gentil, mais je ne peux pas.", "Agradece y da una razón."]] }
  ],
  ejemplos: [
    { sit: "«¿Te apetece cenar conmigo?»", resp: "Ça te dirait de dîner avec moi ?", pasos: ["Ça te dirait de + infinitivo."], porque: "Proponer." },
    { sit: "Aceptas con entusiasmo.", resp: "Avec plaisir !", pasos: ["Aceptar."], porque: "Sí." },
    { sit: "Rechazas con amabilidad.", resp: "C'est gentil, mais je ne peux pas.", pasos: ["Agradecer + excusa."], porque: "No." }
  ],
  comprueba: [
    { q: "Ça te dirait va seguido de…", o: ["de + infinitivo", "à + infinitivo"], a: 0, b: "gr", porque: "d'aller." },
    { q: "«Volontiers» significa…", o: ["con gusto", "voluntariamente no"], a: 0, b: "gr", porque: "Aceptar." },
    { q: "«Je suis déjà prise» significa…", o: ["Ya estoy ocupada.", "Ya me tomaron."], a: 0, b: "gr", porque: "Excusa." }
  ],
  practica: [
    { fase: "guiada", c: ["b1pa-rep"], k: "sort", ask: "¿Acepta o rechaza?", q: "Clasifica.", cats: ["Acepta", "Rechaza"], items: [["Bonne idée !", 0], ["Pourquoi pas ?", 0], ["Volontiers.", 0], ["Ça marche !", 0], ["Je ne suis pas libre.", 1], ["J'ai déjà un truc de prévu.", 1], ["Ce sera pour une autre fois.", 1], ["Malheureusement, je ne peux pas.", 1]], pista: "¿Sí o no?", why: "Respuestas." },
    { fase: "guiada", c: ["b1pa-prop"], k: "choice", ask: "«¿Te apetece cenar conmigo?»", q: "«___»", o: ["Ça te dirait de dîner avec moi ?", "Ça te dirait dîner avec moi ?"], a: 0, pista: "de.", why: "<b>de dîner</b>." },
    { fase: "guiada", c: ["b1pa-rep"], k: "choice", ask: "Aceptas con entusiasmo.", q: "«___»", o: ["Avec plaisir !", "Je suis déjà pris."], a: 0, pista: "Sí.", why: "<b>Avec plaisir</b>." },
    { fase: "indep", c: ["b1pa-rep"], k: "choice", ask: "Rechazas con amabilidad.", q: "«___»", o: ["C'est gentil, mais je ne peux pas.", "Non."], a: 0, why: "Agradecer + excusa." },
    { fase: "indep", c: ["b1pa-rep"], k: "fill", ask: "Escribe «ocupada».", q: "Désolée, je suis déjà ___ ce soir.", acc: ["prise"], why: "<b>prise</b>." },
    { fase: "indep", c: ["b1pa-rep"], k: "fill", ask: "Escribe «vez».", q: "Une autre ___, peut-être ?", acc: ["fois"], why: "<b>une autre fois</b>." },
    { fase: "aplica", c: ["b1pa-prop", "b1pa-rep"], k: "match", ask: "Une cada frase con su función.", q: "Frase → función", pairs: [["Ça te tente ?", "proponer"], ["Volontiers !", "aceptar"], ["J'ai un empêchement.", "rechazar"], ["On se voit quand ?", "concretar"]], why: "Funciones." },
    { fase: "aplica", c: ["b1pa-prop"], k: "spot", ask: "Encuentra el error.", s: "Ça te dirait [à] venir à la maison samedi soir ?", fix: "de", why: "<b>de venir</b>." },
    { fase: "dominio", c: ["b1pa-prop"], k: "order", ask: "Ordena: «¿Te apetece ir al cine?».", tokens: ["Ça te dirait", "d'aller", "au cinéma ?"], why: "<b>Ça te dirait d'aller au cinéma ?</b>" },
    { fase: "dominio", c: ["b1pa-rep"], k: "choice", ask: "«Ya tengo algo previsto.»", q: "«J'ai déjà quelque chose de ___.»", o: ["prévu", "prévoir"], a: 0, why: "<b>prévu</b>." },
    { fase: "dominio", c: ["b1pa-prop", "b1pa-rep"], k: "listen", say: "C'est très gentil, mais malheureusement je suis déjà pris samedi.", acc: ["C'est très gentil, mais malheureusement je suis déjà pris samedi.", "C'est très gentil, mais malheureusement je suis déjà prise samedi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est très gentil, mais malheureusement je suis déjà pris samedi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

/* ================================ B1.1·9 · El día a día ================================ */
E["b11-logement"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Chercher un logement : annonces, visite et bail",
  objetivo: {
    que: "Vas a entender anuncios de alquiler, visitar, reunir un expediente y firmar un contrato en Francia.",
    corto: "un T2 meublé · le loyer · le bail · l'état des lieux.",
    podras: ["Entender los tipos: studio, T2, colocation, meublé / vide.", "Hablar de dinero: le loyer, les charges, le dépôt de garantie, les frais d'agence.", "Conocer a las personas y los trámites: locataire, propriétaire, garant; signer le bail, l'état des lieux, le préavis."],
    iconos: ["ic2/llama", "ic2/moneda", "ic2/pergamino"],
    previos: ["Buscar vivienda (A2, lección 34) y la colocation (A2, lección 35)."],
    capacidad: "Ahora puedes alquilar un apartamento en Francia."
  },
  requiere: R("la-annonce", "la-visite"), recupera: ["la-annonce"],
  conceptos: {
    "b1lg-argent": { n: "le loyer, les charges (comprises), la caution / le dépôt de garantie, les frais d'agence", b: "voc" },
    "b1lg-demarches": { n: "locataire, propriétaire, garant; meublé, T2; signer le bail, l'état des lieux, le préavis", b: "voc" }
  },
  video: {
    titulo: "Alquilar en Francia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "T2 · loyer · bail", seg: [
        { es: "Hola. El vocabulario para tu primer alquiler en Francia." } ] },
      { v: "frase", filas: [
          { nota: "anuncio", p: 1, partes: [["Je cherche un T2 meublé près de la fac.", "-", 1]] },
          { nota: "dinero", p: 2, partes: [["Le loyer est de 650 euros charges comprises.", "-", 2]] },
          { nota: "trámite", p: 3, partes: [["Il faut un garant pour louer.", "-", 3]] } ], seg: [
        { fr: "Je cherche un T2 meublé près de la fac.", p: 1 }, { fr: "Le loyer est de 650 euros charges comprises.", p: 2 }, { fr: "Il faut un garant pour louer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Quién paga el alquiler?", es: true, o: ["le locataire", "le propriétaire"], a: 0,
        bien: "¡Sí! El inquilino es le locataire.", mal: "Quien alquila es le locataire.",
        seg: [ { es: "Pausa. ¿Quién paga?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le loyer", "les charges", "la caution", "le locataire", "le bail", "l'état des lieux"], seg: [
        { es: "Location es la acción; loyer, lo que pagas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La visita", img: "bg-paris", yo: "camila",
    escena: "Camila visita un apartamento con el agente.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour, je cherche un studio meublé près de la fac.", "Buenos días, busco un estudio amueblado cerca de la universidad."],
      ["vendeur", "L'appartement fait quarante mètres carrés et le loyer est de sept cents euros, charges comprises.", "El apartamento tiene cuarenta metros cuadrados y el alquiler es de setecientos euros, gastos incluidos."],
      ["camila", "Il faut un garant ? Et le dépôt de garantie ?", "¿Hace falta un avalista? ¿Y la fianza?"],
      ["vendeur", "Oui, il faut un garant. Avant d'entrer, on fait l'état des lieux, puis on signe le bail pour un an.", "Sí, hace falta un avalista. Antes de entrar, hacemos el inventario, luego firmamos el contrato por un año."]
    ],
    fijate: "Fíjate: studio meublé, le loyer, charges comprises, un garant, le dépôt de garantie, l'état des lieux, le bail."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El alquiler",
      idea: "Tipos: un studio, un T2 / F2 (sala + 1 habitación), une colocation, un logement meublé (amueblado) o vide. Dinero: le loyer (el alquiler), les charges (gastos; charges comprises = incluidos), la caution o le dépôt de garantie (fianza), les frais d'agence. Personas: le / la locataire (inquilino), le / la propriétaire, le garant (avalista), le colocataire, l'agent immobilier. Trámites: visiter, constituer un dossier, signer le bail (contrato), faire l'état des lieux (inventario), donner son préavis (aviso previo). Ojo: la location es la acción de alquilar; lo que pagas es le loyer.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "un studio · un T2 · une colocation", es: "un estudio · sala + 1 habitación · un piso compartido" },
        { fr: "meublé · vide", es: "amueblado · sin muebles" },
        { fr: "le loyer · loyer", es: "el alquiler (lo que pagas)" },
        { fr: "les charges · charges comprises", es: "los gastos · gastos incluidos" },
        { fr: "la caution · le dépôt de garantie", es: "la fianza" },
        { fr: "les frais d'agence", es: "los gastos de agencia" },
        { fr: "le locataire · le propriétaire", es: "el inquilino · el propietario" },
        { fr: "le garant · le colocataire · l'agent immobilier", es: "el avalista · el compañero de piso · el agente inmobiliario" },
        { fr: "le bail · bail", es: "el contrato de alquiler" },
        { fr: "l'état des lieux · lieux", es: "el inventario de entrada / salida" },
        { fr: "le préavis", es: "el aviso previo" }
      ],
      ej: [["Je cherche un T2 meublé près de la fac.", "Busco un apartamento de una habitación amueblado cerca de la universidad."], ["Le loyer est de 650 euros charges comprises.", "El alquiler es de 650 euros gastos incluidos."], ["Il faut un garant pour louer cet appartement.", "Hace falta un avalista para alquilar este apartamento."]],
      clave: "Le locataire paie le loyer au propriétaire." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le propriétaire paie le loyer.", "Le locataire paie le loyer.", "El que alquila es le locataire."], ["Chaque mois, je paie ma location au propriétaire.", "Chaque mois, je paie mon loyer au propriétaire.", "Lo que pagas: le loyer."], ["le contrat de location = la caution", "le bail", "Contrato: le bail; fianza: la caution."]] }
  ],
  ejemplos: [
    { sit: "Anuncio: «800 € charges comprises».", resp: "gastos incluidos", pasos: ["charges = gastos."], porque: "Dinero." },
    { sit: "¿Quién paga el alquiler?", resp: "le locataire", pasos: ["Inquilino."], porque: "Personas." },
    { sit: "«un T2»", resp: "sala + una habitación", pasos: ["T2 = dos piezas."], porque: "Tipo." }
  ],
  comprueba: [
    { q: "Le loyer es…", o: ["el alquiler que pagas", "el inquilino"], a: 0, b: "voc", porque: "Dinero." },
    { q: "Le bail es…", o: ["el contrato de alquiler", "la fianza"], a: 0, b: "voc", porque: "Trámite." },
    { q: "Le garant es…", o: ["el avalista", "el propietario"], a: 0, b: "voc", porque: "Persona." }
  ],
  practica: [
    { fase: "guiada", c: ["b1lg-argent", "b1lg-demarches"], k: "sort", ask: "¿Personas o dinero?", q: "Clasifica.", cats: ["Personas", "Dinero"], items: [["le locataire", 0], ["le propriétaire", 0], ["le colocataire", 0], ["l'agent immobilier", 0], ["le loyer", 1], ["les charges", 1], ["le dépôt de garantie", 1], ["les frais d'agence", 1]], pista: "¿Quién o cuánto?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1lg-argent"], k: "choice", es: true, ask: "«800 € charges comprises» significa…", q: "Elige.", o: ["gastos incluidos", "gastos aparte"], a: 0, pista: "comprises.", why: "Incluidos." },
    { fase: "guiada", c: ["b1lg-demarches"], k: "choice", ask: "¿Quién paga el alquiler?", q: "«___»", o: ["le locataire", "le propriétaire"], a: 0, pista: "Inquilino.", why: "<b>le locataire</b>." },
    { fase: "indep", c: ["b1lg-demarches"], k: "choice", es: true, ask: "«un T2» es…", q: "Elige.", o: ["sala + una habitación", "dos baños"], a: 0, why: "Dos piezas." },
    { fase: "indep", c: ["b1lg-demarches"], k: "fill", ask: "Completa «el inventario».", q: "Avant d'entrer, on fait l'état des ___.", acc: ["lieux"], why: "<b>l'état des lieux</b>." },
    { fase: "indep", c: ["b1lg-demarches"], k: "fill", ask: "Escribe «el contrato».", q: "Nous avons signé le ___ pour un an.", acc: ["bail"], why: "<b>le bail</b>." },
    { fase: "aplica", c: ["b1lg-argent", "b1lg-demarches"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["le loyer", "el alquiler"], ["la caution", "la fianza"], ["le garant", "el avalista"], ["meublé", "amueblado"], ["le préavis", "el aviso previo"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1lg-argent"], k: "spot", ask: "Encuentra el error.", s: "Chaque mois , je paie mon [location] au propriétaire .", fix: "loyer", why: "<b>loyer</b>." },
    { fase: "dominio", c: ["b1lg-demarches"], k: "order", ask: "Ordena: «Busco un estudio amueblado».", tokens: ["Je cherche", "un studio", "meublé."], why: "<b>Je cherche un studio meublé.</b>" },
    { fase: "dominio", c: ["b1lg-argent"], k: "choice", ask: "«El alquiler es de 650 euros, gastos incluidos.»", q: "«Le ___ est de 650 euros charges comprises.»", o: ["loyer", "bail", "garant"], a: 0, why: "<b>loyer</b>." },
    { fase: "dominio", c: ["b1lg-argent", "b1lg-demarches"], k: "listen", say: "L'appartement fait quarante mètres carrés et le loyer est de sept cents euros.", acc: ["L'appartement fait quarante mètres carrés et le loyer est de sept cents euros.", "L'appartement fait 40 mètres carrés et le loyer est de 700 euros."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'appartement fait quarante mètres carrés et le loyer est de sept cents euros.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: [] }
};

E["b11-sante"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Chez le médecin et à la pharmacie",
  objetivo: {
    que: "Vas a describir síntomas, entender la receta y seguir el tratamiento en francés.",
    corto: "J'ai mal à la gorge. · une ordonnance · trois fois par jour.",
    podras: ["Decir dónde te duele: j'ai mal à la tête, au dos, aux dents.", "Describir síntomas: j'ai de la fièvre, je tousse, je suis enrhumé(e).", "Entender la consulta y la farmacia: une ordonnance, des comprimés, un sirop, à jeun."],
    iconos: ["ic2/corazon", "ic2/pergamino", "ic2/reloj-arena"],
    previos: ["Donde el médico (A2, lección 17) y la salud (A2, lección 42)."],
    capacidad: "Ahora puedes ir al médico en Francia sin traductor."
  },
  requiere: R("me2-mal", "me2-depuis", "sc-conseil"), recupera: ["me2-mal"],
  conceptos: {
    "b1sa-symptomes": { n: "avoir mal à (au, aux); j'ai de la fièvre, je tousse, je suis enrhumé(e), j'ai le nez qui coule", b: "voc" },
    "b1sa-traitement": { n: "une ordonnance, des comprimés, un sirop, une pommade, prendre rendez-vous, à jeun, un arrêt maladie", b: "voc" }
  },
  video: {
    titulo: "En el médico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "j'ai mal à…", seg: [
        { es: "Hola. Lo que necesitas para una consulta médica en Francia." } ] },
      { v: "frase", filas: [
          { nota: "dolor", p: 1, partes: [["J'ai mal à la gorge depuis trois jours.", "-", 1]] },
          { nota: "receta", p: 2, partes: [["Le médecin m'a fait une ordonnance.", "-", 2]] },
          { nota: "tratamiento", p: 3, partes: [["Prenez ce sirop matin et soir.", "-", 3]] } ], seg: [
        { fr: "J'ai mal à la gorge depuis trois jours.", p: 1 }, { fr: "Le médecin m'a fait une ordonnance.", p: 2 }, { fr: "Prenez ce sirop matin et soir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me duele la cabeza.»", o: ["J'ai mal à la tête.", "J'ai mal de tête."], a: 0,
        bien: "¡Sí! Avoir mal à.", mal: "Se dice avoir mal à.",
        seg: [ { es: "Pausa. Me duele." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai mal à la tête", "j'ai de la fièvre", "je tousse", "une ordonnance", "des comprimés"], seg: [
        { es: "Mal à la, au, aux, según la parte del cuerpo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La consulta", img: "bg-universidad", yo: "camila",
    escena: "Camila va al médico de la universidad.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour docteur, j'ai de la fièvre et je tousse beaucoup la nuit.", "Buenos días doctor, tengo fiebre y toso mucho por la noche."],
      ["sofia", "Vous avez mal à la gorge ? Depuis quand ?", "¿Le duele la garganta? ¿Desde cuándo?"],
      ["camila", "Oui, depuis hier. J'ai mal au dos aussi, et j'ai le nez qui coule. Je suis enrhumée.", "Sí, desde ayer. También me duele la espalda y tengo la nariz que moquea. Estoy resfriada."],
      ["sofia", "Voici une ordonnance : des comprimés trois fois par jour et du repos. Je vous fais un arrêt maladie.", "Aquí tiene una receta: pastillas tres veces al día y reposo. Le doy una incapacidad."]
    ],
    fijate: "Fíjate: j'ai de la fièvre, je tousse, mal à la gorge, mal au dos, le nez qui coule, enrhumée; une ordonnance, des comprimés, un arrêt maladie."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Síntomas y tratamiento",
      idea: "Dolor: avoir mal à + parte del cuerpo: j'ai mal à la tête, au dos (à + le), aux dents (à + les). Síntomas: j'ai de la fièvre, je tousse, j'ai le nez qui coule, j'ai des nausées, j'ai des vertiges, je suis enrhumé(e). Consulta: prendre rendez-vous, un médecin généraliste, un spécialiste, une ordonnance (receta), un arrêt maladie (incapacidad). Farmacia: des comprimés, un sirop, une pommade, une piqûre; trois fois par jour, à jeun (en ayunas).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "J'ai mal à la tête. · J'ai mal au dos. · au", "es": "Me duele la cabeza. · Me duele la espalda." },
        { fr: "J'ai mal aux dents. · J'ai mal à la gorge.", es: "Me duelen las muelas. · Me duele la garganta." },
        { fr: "J'ai de la fièvre. · de la", es: "Tengo fiebre." },
        { fr: "je tousse · j'ai le nez qui coule", es: "toso · tengo la nariz que moquea" },
        { fr: "j'ai des vertiges · j'ai des nausées", es: "tengo mareos · tengo náuseas" },
        { fr: "Je suis enrhumé(e).", es: "Estoy resfriado(a)." },
        { fr: "prendre rendez-vous · rendez", es: "pedir cita" },
        { fr: "une ordonnance", es: "una receta" },
        { fr: "un comprimé · un sirop · une pommade · une piqûre", es: "una pastilla · un jarabe · una pomada · una inyección" },
        { fr: "un arrêt maladie · du repos", es: "una incapacidad · reposo" },
        { fr: "à jeun · trois fois par jour", es: "en ayunas · tres veces al día" },
        { fr: "tousser", es: "toser" }
      ],
      ej: [["J'ai mal à la gorge depuis trois jours.", "Me duele la garganta desde hace tres días."], ["Le médecin m'a fait une ordonnance.", "El médico me hizo una receta."], ["Prenez ce sirop matin et soir.", "Tome este jarabe mañana y noche."]],
      clave: "avoir mal à: à la tête, au dos, aux dents." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai mal de tête.", "J'ai mal à la tête.", "avoir mal à."], ["Docteur, j'ai mal de ventre.", "Docteur, j'ai mal au ventre.", "à + le = au."], ["J'ai fièvre.", "J'ai de la fièvre.", "Con partitivo: de la fièvre."]] }
  ],
  ejemplos: [
    { sit: "«Me duele la espalda.»", resp: "J'ai mal au dos.", pasos: ["à + le dos = au dos."], porque: "Dolor." },
    { sit: "«Estoy resfriado.»", resp: "Je suis enrhumé.", pasos: ["Síntoma."], porque: "Estado." },
    { sit: "El médico te da «une ordonnance».", resp: "una receta", pasos: ["Vocabulario."], porque: "Consulta." }
  ],
  comprueba: [
    { q: "«Me duelen las muelas» se dice…", o: ["J'ai mal aux dents.", "J'ai mal des dents."], a: 0, b: "voc", porque: "à + les = aux." },
    { q: "Une ordonnance es…", o: ["una receta", "una orden de compra"], a: 0, b: "voc", porque: "Médico." },
    { q: "«À jeun» significa…", o: ["en ayunas", "en junio"], a: 0, b: "voc", porque: "Farmacia." }
  ],
  practica: [
    { fase: "guiada", c: ["b1sa-symptomes", "b1sa-traitement"], k: "sort", ask: "¿Síntoma o tratamiento?", q: "Clasifica.", cats: ["Síntoma", "Tratamiento"], items: [["j'ai de la fièvre", 0], ["je tousse", 0], ["j'ai des vertiges", 0], ["j'ai le nez qui coule", 0], ["un sirop", 1], ["des comprimés", 1], ["une pommade", 1], ["du repos", 1]], pista: "¿Lo que tienes o lo que tomas?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1sa-symptomes"], k: "choice", ask: "«Me duele la espalda.»", q: "«___»", o: ["J'ai mal au dos.", "J'ai mal de dos."], a: 0, pista: "à + le.", why: "<b>au dos</b>." },
    { fase: "guiada", c: ["b1sa-traitement"], k: "choice", es: true, ask: "«Le médecin donne une ordonnance.» Une ordonnance es…", q: "Elige.", o: ["una receta", "una orden"], a: 0, pista: "Médico.", why: "Receta." },
    { fase: "indep", c: ["b1sa-symptomes"], k: "choice", ask: "«Estoy resfriado.»", q: "«___»", o: ["Je suis enrhumé.", "J'ai enrhumé."], a: 0, why: "<b>Je suis enrhumé</b>." },
    { fase: "indep", c: ["b1sa-symptomes"], k: "fill", ask: "Escribe el partitivo.", q: "J'ai ___ fièvre depuis hier.", acc: ["de la"], why: "<b>de la fièvre</b>." },
    { fase: "indep", c: ["b1sa-traitement"], k: "fill", ask: "Completa «pedir cita».", q: "Il faut prendre ___-vous chez le dentiste.", acc: ["rendez"], why: "<b>rendez-vous</b>." },
    { fase: "aplica", c: ["b1sa-traitement"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un comprimé", "una pastilla"], ["tousser", "toser"], ["un arrêt maladie", "una incapacidad"], ["à jeun", "en ayunas"], ["une piqûre", "una inyección"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1sa-symptomes"], k: "spot", ask: "Encuentra el error.", s: "Docteur , j'ai mal [de] ventre depuis ce matin .", fix: "au", why: "<b>au ventre</b>." },
    { fase: "dominio", c: ["b1sa-symptomes"], k: "order", ask: "Ordena: «Me duelen las muelas».", tokens: ["J'ai", "mal", "aux dents."], why: "<b>J'ai mal aux dents.</b>" },
    { fase: "dominio", c: ["b1sa-traitement"], k: "choice", ask: "«Tome este jarabe mañana y noche.»", q: "«Prenez ce ___ matin et soir.»", o: ["sirop", "comprimé"], a: 0, why: "<b>sirop</b>." },
    { fase: "dominio", c: ["b1sa-symptomes", "b1sa-traitement"], k: "listen", say: "Bonjour docteur, j'ai de la fièvre et je tousse beaucoup la nuit.", acc: ["Bonjour docteur, j'ai de la fièvre et je tousse beaucoup la nuit."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour docteur, j'ai de la fièvre et je tousse beaucoup la nuit.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

E["b11-environnement"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'environnement et l'écologie au quotidien",
  objetivo: {
    que: "Vas a hablar de los problemas del medio ambiente y de las soluciones cotidianas, un tema clave del DELF.",
    corto: "le réchauffement climatique · trier ses déchets · le covoiturage.",
    podras: ["Nombrar los problemas: le réchauffement climatique, la pollution, le gaspillage, la déforestation.", "Nombrar las acciones: trier, recycler, composter, covoiturer, réduire sa consommation.", "Hablar de energía y usar adjetivos: renouvelable, durable, jetable, bio."],
    iconos: ["ic2/mundo", "ic2/flor", "ic2/rayo"],
    previos: ["El tiempo y las previsiones (A2, lección 38) y la consecuencia (A2, lección 63)."],
    capacidad: "Ahora defiendes ideas ecológicas en francés."
  },
  requiere: R("pv-voc", "cs2-mots"), recupera: ["cs2-mots"],
  conceptos: {
    "b1en-probleme": { n: "problemas: le réchauffement climatique, les gaz à effet de serre, la pollution, le gaspillage, la déforestation", b: "voc" },
    "b1en-solution": { n: "soluciones: trier, recycler, composter, le covoiturage, les énergies renouvelables; durable, jetable", b: "voc" }
  },
  video: {
    titulo: "Medio ambiente", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "trier · recycler", seg: [
        { es: "Hola. Problemas y soluciones para el planeta." } ] },
      { v: "frase", filas: [
          { nota: "problema", p: 1, partes: [["Le gaspillage alimentaire est un vrai problème.", "-", 1]] },
          { nota: "solución", p: 2, partes: [["On trie les déchets depuis des années.", "-", 2]] },
          { nota: "transporte", p: 3, partes: [["Je fais du covoiturage.", "-", 3]] } ], seg: [
        { fr: "Le gaspillage alimentaire est un vrai problème.", p: 1 }, { fr: "On trie les déchets depuis des années.", p: 2 }, { fr: "Je fais du covoiturage.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«el calentamiento global»", o: ["le réchauffement climatique", "le réchauffement global"], a: 0,
        bien: "¡Sí! En francés: climatique.", mal: "La expresión habitual es climatique.",
        seg: [ { es: "Pausa. El calentamiento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le réchauffement climatique", "le gaspillage", "trier", "recycler", "le covoiturage", "durable"], seg: [
        { es: "Durable significa sostenible.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Casa verde", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de ecología en casa.",
    pj: PJ,
    lineas: [
      ["hugo", "Chez nous, on trie les déchets depuis des années. Il faut recycler le plastique.", "En casa separamos los residuos desde hace años. Hay que reciclar el plástico."],
      ["camila", "Moi, je fais du covoiturage pour aller au travail. Et j'évite les gobelets jetables en plastique.", "Yo comparto carro para ir al trabajo. Y evito los vasos desechables de plástico."],
      ["hugo", "Le gaspillage alimentaire est un vrai problème. Les gaz à effet de serre réchauffent la planète.", "El desperdicio de comida es un verdadero problema. Los gases de efecto invernadero calientan el planeta."],
      ["camila", "Chacun peut agir en triant ses déchets et en prenant les transports en commun. L'énergie solaire, c'est durable !", "Cada uno puede actuar separando sus residuos y tomando el transporte público. ¡La energía solar es sostenible!"]
    ],
    fijate: "Fíjate: trier, recycler, covoiturage, jetables, gaspillage, gaz à effet de serre, transports en commun, durable."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Problemas y soluciones",
      idea: "Problemas: le réchauffement climatique, les gaz à effet de serre, la pollution de l'air, la déforestation, le gaspillage (desperdicio), la surconsommation. Acciones: trier ses déchets (separar), recycler, composter, faire du covoiturage, prendre les transports en commun, réduire sa consommation, économiser l'énergie. Energía: les énergies renouvelables (solaire, éolienne), le nucléaire, les énergies fossiles. Adjetivos: écologique, durable (sostenible), jetable (desechable), bio.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le réchauffement climatique", es: "el calentamiento global" },
        { fr: "les gaz à effet de serre · serre", es: "los gases de efecto invernadero" },
        { fr: "la pollution · la déforestation", es: "la contaminación · la deforestación" },
        { fr: "le gaspillage · la surconsommation", es: "el desperdicio · el consumo excesivo" },
        { fr: "trier ses déchets · les déchets", es: "separar sus residuos · los residuos" },
        { fr: "recycler · le recyclage · le compost", es: "reciclar · el reciclaje · el compost" },
        { fr: "le covoiturage", es: "compartir carro" },
        { fr: "les transports en commun", es: "el transporte público" },
        { fr: "les énergies renouvelables · l'énergie solaire · l'éolienne", es: "las energías renovables · la energía solar · el aerogenerador" },
        { fr: "durable · jetable · jetables · bio", es: "sostenible · desechable · desechables · orgánico" },
        { fr: "consommer · économiser l'énergie", es: "consumir · ahorrar energía" }
      ],
      ej: [["Chez nous, on trie les déchets depuis des années.", "En casa separamos los residuos desde hace años."], ["Le gaspillage alimentaire est un vrai problème.", "El desperdicio de comida es un verdadero problema."], ["Je fais du covoiturage pour aller au travail.", "Comparto carro para ir al trabajo."]],
      clave: "Durable = sostenible; jetable = desechable." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le réchauffement global", "le réchauffement climatique", "Expresión habitual: climatique."], ["Pour protéger la planète, il faut gaspiller moins d'énergie.", "Pour protéger la planète, il faut consommer moins d'énergie.", "Gaspiller es desperdiciar."], ["durable = que dura mucho (solo)", "durable = sostenible", "En ecología: sostenible."]] }
  ],
  ejemplos: [
    { sit: "«Hay que separar los residuos.»", resp: "Il faut trier ses déchets.", pasos: ["trier = separar."], porque: "Acción." },
    { sit: "«las energías renovables»", resp: "les énergies renouvelables", pasos: ["Energía."], porque: "Vocabulario." },
    { sit: "«el desperdicio de agua»", resp: "le gaspillage de l'eau", pasos: ["gaspillage."], porque: "Problema." }
  ],
  comprueba: [
    { q: "Trier ses déchets significa…", o: ["separar los residuos", "tirar los residuos"], a: 0, b: "voc", porque: "Reciclaje." },
    { q: "Le covoiturage es…", o: ["compartir carro", "alquilar un carro"], a: 0, b: "voc", porque: "Transporte." },
    { q: "Jetable significa…", o: ["desechable", "sostenible"], a: 0, b: "voc", porque: "Un solo uso." }
  ],
  practica: [
    { fase: "guiada", c: ["b1en-probleme", "b1en-solution"], k: "sort", ask: "¿Problema o solución?", q: "Clasifica.", cats: ["Problema", "Solución"], items: [["la déforestation", 0], ["la pollution", 0], ["le gaspillage", 0], ["la surconsommation", 0], ["le recyclage", 1], ["le compost", 1], ["les transports en commun", 1], ["l'énergie solaire", 1]], pista: "¿Daña o ayuda?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1en-solution"], k: "choice", es: true, ask: "«Il faut trier ses déchets.» Trier significa…", q: "Elige.", o: ["separar", "quemar"], a: 0, pista: "Reciclaje.", why: "Separar." },
    { fase: "guiada", c: ["b1en-solution"], k: "choice", ask: "«energías renovables»", q: "«___»", o: ["les énergies renouvelables", "les énergies renouvables"], a: 0, pista: "renouvel-.", why: "<b>renouvelables</b>." },
    { fase: "indep", c: ["b1en-probleme"], k: "choice", es: true, ask: "«le gaspillage de l'eau» significa…", q: "Elige.", o: ["el desperdicio del agua", "la limpieza del agua"], a: 0, why: "Desperdicio." },
    { fase: "indep", c: ["b1en-probleme"], k: "fill", ask: "Completa «efecto invernadero».", q: "Les gaz à effet de ___ réchauffent la planète.", acc: ["serre"], why: "<b>effet de serre</b>." },
    { fase: "indep", c: ["b1en-solution"], k: "fill", ask: "Escribe «desechables».", q: "Évitez les gobelets ___ en plastique.", acc: ["jetables"], why: "<b>jetables</b>." },
    { fase: "aplica", c: ["b1en-solution"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["le covoiturage", "compartir carro"], ["l'éolienne", "el aerogenerador"], ["durable", "sostenible"], ["les déchets", "los residuos"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1en-solution"], k: "spot", ask: "Encuentra el error.", s: "Pour protéger la planète , il faut [gaspiller] moins d'énergie .", fix: "consommer", why: "<b>consommer</b>." },
    { fase: "dominio", c: ["b1en-solution"], k: "order", ask: "Ordena: «Hay que reciclar el plástico».", tokens: ["Il faut", "recycler", "le plastique."], why: "<b>Il faut recycler le plastique.</b>" },
    { fase: "dominio", c: ["b1en-probleme"], k: "choice", ask: "«el calentamiento global»", q: "«___»", o: ["le réchauffement climatique", "le chauffage global"], a: 0, why: "<b>climatique</b>." },
    { fase: "dominio", c: ["b1en-probleme", "b1en-solution"], k: "listen", say: "Chacun peut agir en triant ses déchets et en prenant les transports en commun.", acc: ["Chacun peut agir en triant ses déchets et en prenant les transports en commun."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chacun peut agir en triant ses déchets et en prenant les transports en commun.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-medias-reseaux"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Médias, réseaux sociaux et information",
  objetivo: {
    que: "Vas a hablar de prensa, televisión, redes sociales y de cómo verificar la información.",
    corto: "la une · un abonné · une infox · vérifier ses sources.",
    podras: ["Usar el vocabulario de prensa: un quotidien, un hebdomadaire, la une, un article.", "Usar el de televisión y redes: une chaîne, une émission, publier, partager, s'abonner à.", "Hablar de desinformación: une infox, vérifier une source."],
    iconos: ["ic2/movil", "ic2/libro", "ic2/laptop"],
    previos: ["Las redes sociales (A2, lección 52)."],
    capacidad: "Ahora comentas noticias y redes en francés."
  },
  requiere: R("rs-verbes", "rs-noms"), recupera: ["rs-verbes"],
  conceptos: {
    "b1md-presse": { n: "prensa y tele: un quotidien, un hebdomadaire, la une, un article, une chaîne, une émission, le journal télévisé", b: "voc" },
    "b1md-reseaux": { n: "redes: publier, partager, liker, s'abonner à, un abonné, une publication; une infox, vérifier ses sources", b: "voc" }
  },
  video: {
    titulo: "Medios y redes", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "la une · un abonné", seg: [
        { es: "Hola. Del periódico de papel a las redes sociales." } ] },
      { v: "frase", filas: [
          { nota: "prensa", p: 1, partes: [["J'ai lu un article à la une du journal.", "-", 1]] },
          { nota: "redes", p: 2, partes: [["Elle a plus de dix mille abonnés.", "-", 2]] },
          { nota: "verificar", p: 3, partes: [["Il faut toujours vérifier ses sources.", "-", 3]] } ], seg: [
        { fr: "J'ai lu un article à la une du journal.", p: 1 }, { fr: "Elle a plus de dix mille abonnés.", p: 2 }, { fr: "Il faut toujours vérifier ses sources.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy suscrito a su canal.»", o: ["Je suis abonné à sa chaîne.", "Je suis abonné de sa chaîne."], a: 0,
        bien: "¡Sí! Abonné à.", mal: "Se dice abonné à.",
        seg: [ { es: "Pausa. Suscrito a." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un quotidien", "la une", "une émission", "un abonné", "partager", "une infox"], seg: [
        { es: "Antes de compartir, verifica la fuente.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La noticia falsa", img: "bg-cafe", yo: "camila",
    escena: "Hugo le muestra a Camila una publicación viral.",
    pj: PJ,
    lineas: [
      ["hugo", "Regarde, cette photo a été partagée des milliers de fois !", "¡Mira, esta foto se compartió miles de veces!"],
      ["camila", "C'est une infox ! Avant de partager une information, il faut vérifier la source.", "¡Es una noticia falsa! Antes de compartir una información, hay que verificar la fuente."],
      ["hugo", "Tu as raison. Moi, je lis Le Monde, c'est un quotidien sérieux. Et le journal télévisé commence à 20 heures.", "Tienes razón. Yo leo Le Monde, es un diario serio. Y el noticiero empieza a las 8."],
      ["camila", "Beaucoup de jeunes s'informent surtout sur les réseaux sociaux. Moi, je suis abonnée à une chaîne d'actualités.", "Muchos jóvenes se informan sobre todo en las redes sociales. Yo estoy suscrita a un canal de noticias."]
    ],
    fijate: "Fíjate: partagée, une infox, vérifier la source, un quotidien, le journal télévisé, les réseaux sociaux, abonnée à une chaîne."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Medios e información",
      idea: "Prensa: un quotidien (diario), un hebdomadaire (semanario), un magazine, la une (portada), un titre, un article, un éditorial, un journaliste. Televisión y radio: une chaîne, une émission (programa), le journal télévisé (JT), un animateur. Redes: publier, partager, liker, s'abonner à, un abonné (seguidor), un commentaire, une publication, une story. Información: vérifier une source, une fausse information / une infox, la désinformation.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "un quotidien · un hebdomadaire", es: "un diario · un semanario" },
        { fr: "la une · un éditorial · un journaliste", es: "la portada · un editorial · un periodista" },
        { fr: "une chaîne · une émission", es: "un canal · un programa" },
        { fr: "le journal télévisé · télévisé", es: "el noticiero" },
        { fr: "publier · partager · partagée · liker", es: "publicar · compartir · compartida · dar like" },
        { fr: "s'abonner à · un abonné · une story", es: "suscribirse a · un seguidor · una historia" },
        { fr: "une publication · un commentaire", es: "una publicación · un comentario" },
        { fr: "une infox · une fausse information", es: "una noticia falsa" },
        { fr: "vérifier une source · vérifier", es: "verificar una fuente" },
        { fr: "la désinformation", es: "la desinformación" }
      ],
      ej: [["J'ai lu un article intéressant à la une du journal.", "Leí un artículo interesante en la portada del periódico."], ["Elle a plus de dix mille abonnés.", "Tiene más de diez mil seguidores."], ["Il faut toujours vérifier ses sources.", "Siempre hay que verificar las fuentes."]],
      clave: "s'abonner à; une infox = fake news." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis abonné de cette chaîne.", "Je suis abonné à cette chaîne.", "s'abonner / être abonné à."], ["Avant de partager, il faut vérifié la source.", "Avant de partager, il faut vérifier la source.", "Tras il faut: infinitivo."], ["une émission = una emisión de gas", "une émission = un programa", "En televisión: programa."]] }
  ],
  ejemplos: [
    { sit: "«Le Monde es un diario.»", resp: "Le Monde est un quotidien.", pasos: ["quotidien = diario."], porque: "Prensa." },
    { sit: "«Estoy suscrito a su canal.»", resp: "Je suis abonné à sa chaîne.", pasos: ["abonné à."], porque: "Redes." },
    { sit: "«¡Es una noticia falsa!»", resp: "C'est une infox !", pasos: ["infox."], porque: "Desinformación." }
  ],
  comprueba: [
    { q: "Un quotidien es…", o: ["un diario", "un semanario"], a: 0, b: "voc", porque: "Cada día." },
    { q: "La une es…", o: ["la portada", "la primera página web"], a: 0, b: "voc", porque: "Prensa." },
    { q: "Une infox es…", o: ["una noticia falsa", "un informe"], a: 0, b: "voc", porque: "Desinformación." }
  ],
  practica: [
    { fase: "guiada", c: ["b1md-presse", "b1md-reseaux"], k: "sort", ask: "¿Prensa tradicional o redes sociales?", q: "Clasifica.", cats: ["Prensa tradicional", "Redes sociales"], items: [["un éditorial", 0], ["un quotidien", 0], ["un journaliste", 0], ["la une", 0], ["une story", 1], ["un abonné", 1], ["liker", 1], ["une publication", 1]], pista: "¿Papel o pantalla?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1md-presse"], k: "choice", es: true, ask: "«Le Monde est un quotidien.» Quotidien significa…", q: "Elige.", o: ["un diario", "un semanario"], a: 0, pista: "Cada día.", why: "Diario." },
    { fase: "guiada", c: ["b1md-reseaux"], k: "choice", ask: "«Estoy suscrito a su canal.»", q: "«___»", o: ["Je suis abonné à sa chaîne.", "Je suis abonné de sa chaîne."], a: 0, pista: "à.", why: "<b>à</b>." },
    { fase: "indep", c: ["b1md-reseaux"], k: "choice", es: true, ask: "«C'est une infox !» significa…", q: "Elige.", o: ["¡Es una noticia falsa!", "¡Es un informe!"], a: 0, why: "Noticia falsa." },
    { fase: "indep", c: ["b1md-reseaux"], k: "fill", ask: "Escribe «compartida».", q: "Cette photo a été ___ des milliers de fois.", acc: ["partagée"], why: "<b>partagée</b>." },
    { fase: "indep", c: ["b1md-presse"], k: "fill", ask: "Escribe «televisado».", q: "Le journal ___ commence à 20 heures.", acc: ["télévisé"], why: "<b>télévisé</b>." },
    { fase: "aplica", c: ["b1md-presse", "b1md-reseaux"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un hebdomadaire", "un semanario"], ["la une", "la portada"], ["une émission", "un programa"], ["un abonné", "un seguidor"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1md-reseaux"], k: "spot", ask: "Encuentra el error.", s: "Avant de partager une information , il faut [vérifié] la source .", fix: "vérifier", why: "<b>vérifier</b>." },
    { fase: "dominio", c: ["b1md-reseaux"], k: "order", ask: "Ordena: «Siempre hay que verificar las fuentes».", tokens: ["Il faut", "toujours vérifier", "ses sources."], why: "<b>Il faut toujours vérifier ses sources.</b>" },
    { fase: "dominio", c: ["b1md-presse"], k: "choice", ask: "«un artículo en la portada»", q: "«un article à la ___»", o: ["une", "première"], a: 0, why: "<b>à la une</b>." },
    { fase: "dominio", c: ["b1md-presse", "b1md-reseaux"], k: "listen", say: "Beaucoup de jeunes s'informent surtout sur les réseaux sociaux.", acc: ["Beaucoup de jeunes s'informent surtout sur les réseaux sociaux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Beaucoup de jeunes s'informent surtout sur les réseaux sociaux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Le Monde"], previo: [] }
};

E["b11-voyage-imprevus"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "En voyage : imprévus et solutions",
  objetivo: {
    que: "Vas a explicar un imprevisto de viaje y pedir una solución: vuelo cancelado, maleta perdida, conexión perdida.",
    corto: "Mon vol a été annulé. · J'ai raté ma correspondance.",
    podras: ["Explicar problemas de transporte: un vol retardé / annulé, une grève, rater sa correspondance.", "Explicar problemas de equipaje y hotel: une valise perdue, surréservé.", "Pedir una solución: qu'est-ce que vous me proposez ?, j'ai droit à une indemnisation ?"],
    iconos: ["ic2/mundo", "ic2/bolsa", "ic2/reloj-arena"],
    previos: ["El aeropuerto (A2, lección 56) y la estación (A2, lección 57)."],
    capacidad: "Ahora resuelves los imprevistos de un viaje en francés."
  },
  requiere: R("ae3-etapes", "ga-probleme"), recupera: ["ga-probleme"],
  conceptos: {
    "b1vi-probleme": { n: "un vol retardé / annulé, une grève, rater sa correspondance, une valise perdue, surréservé", b: "voc" },
    "b1vi-solution": { n: "pedir solución: faire une déclaration, changer son billet, qu'est-ce que vous me proposez ?, une indemnisation", b: "voc" }
  },
  video: {
    titulo: "Imprevistos de viaje", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bolsa", grande: "annulé · raté", seg: [
        { es: "Hola. Cuando el viaje se complica, estas frases te salvan." } ] },
      { v: "frase", filas: [
          { nota: "vuelo", p: 1, partes: [["Mon vol a été annulé à cause de la grève.", "-", 1]] },
          { nota: "conexión", p: 2, partes: [["J'ai raté ma correspondance à Lyon.", "-", 2]] },
          { nota: "maleta", p: 3, partes: [["Ma valise n'est pas arrivée.", "-", 3]] } ], seg: [
        { fr: "Mon vol a été annulé à cause de la grève.", p: 1 }, { fr: "J'ai raté ma correspondance à Lyon.", p: 2 }, { fr: "Ma valise n'est pas arrivée.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Perdí el bus.»", o: ["J'ai raté le bus.", "J'ai perdu le bus."], a: 0,
        bien: "¡Sí! Perder un transporte: rater.", mal: "Se dice rater o manquer.",
        seg: [ { es: "Pausa. Perdí el bus." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un vol annulé", "retardé", "une grève", "rater", "une valise perdue", "une indemnisation"], seg: [
        { es: "Perder un tren: rater, no perdre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En el aeropuerto", img: "bg-paris", yo: "camila",
    escena: "Camila tiene problemas con su vuelo y su maleta.",
    pj: PJ,
    lineas: [
      ["camila", "Excusez-moi, mon vol a été annulé. Qu'est-ce que vous me proposez ?", "Disculpe, mi vuelo fue cancelado. ¿Qué me propone?"],
      ["vendeur", "Il y a une grève des contrôleurs. Le vol de 15 h est retardé de deux heures.", "Hay una huelga de controladores. El vuelo de las 3 está retrasado dos horas."],
      ["camila", "Mais j'ai une correspondance à Madrid ! Et ma valise n'est pas arrivée. Où est le service des bagages ?", "¡Pero tengo una conexión en Madrid! Y mi maleta no llegó. ¿Dónde está el servicio de equipajes?"],
      ["vendeur", "Il faut faire une déclaration. Les passagers sont priés de se rendre à la porte d'embarquement.", "Hay que hacer una declaración. Se ruega a los pasajeros dirigirse a la puerta de embarque."]
    ],
    fijate: "Fíjate: vol annulé, grève, retardé, correspondance, valise pas arrivée, service des bagages, faire une déclaration, porte d'embarquement."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Problemas y soluciones",
      idea: "Transporte: un vol retardé (retrasado) o annulé (cancelado), rater / manquer sa correspondance (perder la conexión), une grève (huelga), le guichet, le quai, l'embarquement. Equipaje: une valise perdue / égarée, le service des bagages, faire une déclaration. Hotel: la réservation, surréservé (overbooking), un surclassement. Pedir solución: Qu'est-ce que vous pouvez faire ? Qu'est-ce que vous me proposez ? Est-ce que j'ai droit à une indemnisation ? Ojo: perder un transporte = rater, no perdre.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "un vol retardé · retardé · un vol annulé", es: "un vuelo retrasado · cancelado" },
        { fr: "une grève", es: "una huelga" },
        { fr: "rater sa correspondance · raté · une correspondance", es: "perder la conexión · una conexión" },
        { fr: "J'ai raté le bus. · J'ai raté le train.", es: "Perdí el bus. · Perdí el tren." },
        { fr: "une valise perdue · le service des bagages", es: "una maleta perdida · el servicio de equipajes" },
        { fr: "faire une déclaration", es: "hacer una declaración" },
        { fr: "l'embarquement · la porte d'embarquement · embarquement", es: "el embarque · la puerta de embarque" },
        { fr: "le contrôle de sécurité · la piste · la porte B12", es: "el control de seguridad · la pista · la puerta B12" },
        { fr: "le quai · la voie 3 · composter son billet · le TGV", es: "el andén · la vía 3 · validar el billete · el tren rápido" },
        { fr: "surréservé · une indemnisation", es: "con overbooking · una indemnización" },
        { fr: "changer son billet · demander un autre vol · demander un autre hôtel", es: "cambiar el billete · pedir otro vuelo · pedir otro hotel" }
      ],
      ej: [["Mon vol a été annulé à cause de la grève.", "Mi vuelo fue cancelado por la huelga."], ["J'ai raté ma correspondance à Lyon.", "Perdí mi conexión en Lyon."], ["Ma valise n'est pas arrivée, où dois-je m'adresser ?", "Mi maleta no llegó, ¿a dónde debo dirigirme?"]],
      clave: "Perder un tren o un bus = rater." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai perdu le train.", "J'ai raté le train.", "Perder un transporte = rater / manquer."], ["Je suis arrivé en retard et j'ai perdu mon train.", "Je suis arrivé en retard et j'ai raté mon train.", "rater."], ["Le vol est retardé à deux heures.", "Le vol est retardé de deux heures.", "retardé de + tiempo."]] }
  ],
  ejemplos: [
    { sit: "«Perdí el bus.»", resp: "J'ai raté le bus.", pasos: ["rater."], porque: "Transporte." },
    { sit: "«Hay una huelga de controladores.»", resp: "Il y a une grève des contrôleurs.", pasos: ["grève = huelga."], porque: "Problema." },
    { sit: "«Tengo una conexión en Madrid.»", resp: "J'ai une correspondance à Madrid.", pasos: ["correspondance."], porque: "Viaje." }
  ],
  comprueba: [
    { q: "«Perder el tren» se dice…", o: ["rater le train", "perdre le train"], a: 0, b: "voc", porque: "rater." },
    { q: "Une grève es…", o: ["una huelga", "una grieta"], a: 0, b: "voc", porque: "Problema." },
    { q: "Une correspondance en un viaje es…", o: ["una conexión", "una carta"], a: 0, b: "voc", porque: "Transbordo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1vi-probleme"], k: "sort", ask: "¿Aeropuerto o estación de tren?", q: "Clasifica.", cats: ["Aeropuerto", "Estación de tren"], items: [["l'embarquement", 0], ["la porte B12", 0], ["le contrôle de sécurité", 0], ["la piste", 0], ["le quai", 1], ["composter son billet", 1], ["la voie 3", 1], ["le TGV", 1]], pista: "¿Avión o tren?", why: "Lugares." },
    { fase: "guiada", c: ["b1vi-probleme"], k: "choice", ask: "«Perdí el bus.»", q: "«___»", o: ["J'ai raté le bus.", "J'ai perdu le bus."], a: 0, pista: "rater.", why: "<b>raté</b>." },
    { fase: "guiada", c: ["b1vi-probleme"], k: "choice", es: true, ask: "«Il y a une grève des contrôleurs.» Grève significa…", q: "Elige.", o: ["huelga", "grieta"], a: 0, pista: "Trabajadores.", why: "Huelga." },
    { fase: "indep", c: ["b1vi-probleme"], k: "choice", es: true, ask: "«J'ai une correspondance à Madrid.» significa…", q: "Elige.", o: ["Tengo una conexión en Madrid.", "Tengo una carta en Madrid."], a: 0, why: "Conexión." },
    { fase: "indep", c: ["b1vi-probleme"], k: "fill", ask: "Escribe «retrasado».", q: "Le vol de 15 h est ___ de deux heures.", acc: ["retardé"], why: "<b>retardé</b>." },
    { fase: "indep", c: ["b1vi-solution"], k: "fill", ask: "Escribe «embarque».", q: "Les passagers sont priés de se rendre à la porte d'___.", acc: ["embarquement"], why: "<b>embarquement</b>." },
    { fase: "aplica", c: ["b1vi-solution"], k: "match", ask: "Une cada problema con su solución.", q: "Problema → solución", pairs: [["valise perdue", "faire une déclaration"], ["vol annulé", "demander un autre vol"], ["hôtel complet", "demander un autre hôtel"], ["train raté", "changer son billet"]], why: "Soluciones." },
    { fase: "aplica", c: ["b1vi-probleme"], k: "spot", ask: "Encuentra el error.", s: "Je suis arrivé en retard et j'ai [perdu] mon train de 8 heures .", fix: "raté", why: "<b>raté</b>." },
    { fase: "dominio", c: ["b1vi-probleme"], k: "order", ask: "Ordena: «Mi vuelo fue cancelado».", tokens: ["Mon vol", "a été", "annulé."], why: "<b>Mon vol a été annulé.</b>" },
    { fase: "dominio", c: ["b1vi-solution"], k: "choice", ask: "Pides una solución al empleado.", q: "«___»", o: ["Qu'est-ce que vous me proposez ?", "C'est inadmissible, au revoir."], a: 0, why: "Pedir solución." },
    { fase: "dominio", c: ["b1vi-probleme", "b1vi-solution"], k: "listen", say: "Excusez-moi, ma valise n'est pas arrivée. Où est le service des bagages ?", acc: ["Excusez-moi, ma valise n'est pas arrivée. Où est le service des bagages ?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Excusez-moi, ma valise n'est pas arrivée. Où est le service des bagages ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Madrid", "Lyon"], previo: [] }
};

E["b11-consommation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Consommer : achats, soldes et paiements",
  objetivo: {
    que: "Vas a hablar de compras, precios, formas de pago y posventa, en tienda y en línea.",
    corto: "les soldes · payer par carte · un échange · la livraison.",
    podras: ["Hablar de precios: en promo, bon marché, abordable, hors de prix.", "Pagar: par carte, en espèces, sans contact; la monnaie, le ticket de caisse.", "Gestionar la posventa y la compra en línea: un échange, un remboursement, un avoir, le panier, la livraison."],
    iconos: ["ic2/bolsa", "ic2/moneda", "ic2/laptop"],
    previos: ["Comprar en línea (A2, lección 30) y las rebajas (A2, lección 31)."],
    capacidad: "Ahora compras, pagas y devuelves en francés."
  },
  requiere: R("al-proc", "sd-essayer", "bu-verbes"), recupera: ["al-proc"],
  conceptos: {
    "b1cs-payer": { n: "les soldes, en promo, hors de prix; payer par carte / en espèces, la monnaie, le ticket de caisse", b: "voc" },
    "b1cs-apres": { n: "échanger, un remboursement, un avoir; en línea: le panier, la livraison, le colis, livré", b: "voc" }
  },
  video: {
    titulo: "Comprar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bolsa", grande: "par carte · en espèces", seg: [
        { es: "Hola. De la caja a la entrega a domicilio." } ] },
      { v: "frase", filas: [
          { nota: "pagar", p: 1, partes: [["Je peux payer par carte ?", "-", 1]] },
          { nota: "rebajas", p: 2, partes: [["Les soldes commencent en janvier.", "-", 2]] },
          { nota: "cambio", p: 3, partes: [["Gardez votre ticket pour un échange.", "-", 3]] } ], seg: [
        { fr: "Je peux payer par carte ?", p: 1 }, { fr: "Les soldes commencent en janvier.", p: 2 }, { fr: "Gardez votre ticket pour un échange.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Puedo pagar con tarjeta?»", o: ["Est-ce que je peux payer par carte ?", "Est-ce que je peux payer avec carte ?"], a: 0,
        bien: "¡Sí! Par carte.", mal: "Se dice par carte.",
        seg: [ { es: "Pausa. Con tarjeta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les soldes", "par carte", "en espèces", "un échange", "un remboursement", "la livraison"], seg: [
        { es: "Par carte, pero en espèces.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las rebajas", img: "bg-paris", yo: "camila",
    escena: "Camila compra un abrigo en rebajas.",
    pj: PJ,
    lineas: [
      ["camila", "Pendant les soldes, ce manteau est à moitié prix ! Je peux payer par carte ?", "¡En las rebajas este abrigo está a mitad de precio! ¿Puedo pagar con tarjeta?"],
      ["vendeur", "Bien sûr, ou en espèces. Voici votre ticket de caisse. Gardez-le pour un échange.", "Claro, o en efectivo. Aquí está su tiquete. Guárdelo para un cambio."],
      ["camila", "Et ce pull ? Je voudrais l'échanger, il est trop petit. Est-ce que vous pouvez me rembourser ?", "¿Y este suéter? Quisiera cambiarlo, es muy pequeño. ¿Me puede reembolsar?"],
      ["vendeur", "Je vous fais un avoir. Pour la commande en ligne, votre colis sera livré demain.", "Le doy un vale. Para el pedido en línea, su paquete será entregado mañana."]
    ],
    fijate: "Fíjate: les soldes, à moitié prix, par carte, en espèces, ticket de caisse, échanger, rembourser, un avoir, livré."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Comprar y pagar",
      idea: "Precios: ça coûte…, c'est en promo, -30 %, bon marché, cher, abordable, hors de prix (carísimo), à moitié prix. Pagar: payer par carte / en espèces (efectivo) / sans contact, régler, la monnaie (el cambio), le ticket de caisse. Posventa: un échange, un remboursement, un avoir (vale), la garantie. En línea: commander, le panier (cesta), la livraison, le colis, le code promo, le suivi du colis, le retour gratuit. Tienda: la caisse, la cabine d'essayage, le vendeur, le rayon.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "les soldes · en promo · à moitié prix", es: "las rebajas · en promoción · a mitad de precio" },
        { fr: "bon marché · abordable · hors de prix", es: "barato · asequible · carísimo" },
        { fr: "payer par carte · payer en espèces · sans contact", es: "pagar con tarjeta · en efectivo · sin contacto" },
        { fr: "la monnaie · le ticket de caisse", es: "el cambio · el tiquete" },
        { fr: "échanger · un échange", es: "cambiar · un cambio" },
        { fr: "rembourser · un remboursement · un avoir", es: "reembolsar · un reembolso · un vale" },
        { fr: "la caisse · la cabine d'essayage · le vendeur · le rayon", es: "la caja · el probador · el vendedor · la sección" },
        { fr: "le panier · la livraison · le code promo · le suivi du colis", es: "la cesta · la entrega · el código promocional · el seguimiento del paquete" },
        { fr: "livré · le colis", es: "entregado · el paquete" },
        { fr: "par", es: "con (par carte)" }
      ],
      ej: [["Je peux payer par carte ?", "¿Puedo pagar con tarjeta?"], ["Les soldes commencent en janvier.", "Las rebajas empiezan en enero."], ["Gardez bien votre ticket pour un échange.", "Guarde bien el tiquete para un cambio."]],
      clave: "Payer par carte; payer en espèces." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["payer avec carte", "payer par carte", "par carte, pero en espèces."], ["la monnaie = la moneda del país", "la monnaie = el cambio", "Al pagar: el cambio."], ["Je voudrais changer ce pull. (por otro)", "Je voudrais échanger ce pull.", "En una tienda: échanger."]] }
  ],
  ejemplos: [
    { sit: "«Pagar en efectivo.»", resp: "payer en espèces", pasos: ["en espèces."], porque: "Pago." },
    { sit: "«Es temporada de rebajas.»", resp: "C'est la période des soldes.", pasos: ["les soldes."], porque: "Precios." },
    { sit: "«Este abrigo es carísimo.»", resp: "Ce manteau est hors de prix.", pasos: ["hors de prix."], porque: "Precio." }
  ],
  comprueba: [
    { q: "«Con tarjeta» se dice…", o: ["par carte", "avec carte"], a: 0, b: "voc", porque: "par." },
    { q: "Les soldes son…", o: ["las rebajas", "los saldos bancarios"], a: 0, b: "voc", porque: "Precios." },
    { q: "Un avoir es…", o: ["un vale de la tienda", "un tener"], a: 0, b: "voc", porque: "Posventa." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cs-payer", "b1cs-apres"], k: "sort", ask: "¿Tienda física o en línea?", q: "Clasifica.", cats: ["Tienda física", "En línea"], items: [["la caisse", 0], ["la cabine d'essayage", 0], ["le vendeur", 0], ["le rayon", 0], ["le panier", 1], ["la livraison", 1], ["le code promo", 1], ["le suivi du colis", 1]], pista: "¿Vas o te llega?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1cs-payer"], k: "choice", ask: "«Pagar en efectivo.»", q: "«___»", o: ["payer en espèces", "payer en efectif"], a: 0, pista: "espèces.", why: "<b>en espèces</b>." },
    { fase: "guiada", c: ["b1cs-payer"], k: "choice", es: true, ask: "«Ce manteau est hors de prix.» significa…", q: "Elige.", o: ["Este abrigo es carísimo.", "Este abrigo no tiene precio porque es gratis."], a: 0, pista: "Muy caro.", why: "Carísimo." },
    { fase: "indep", c: ["b1cs-payer"], k: "choice", es: true, ask: "«C'est la période des soldes.» significa…", q: "Elige.", o: ["Es temporada de rebajas.", "Es fin de mes."], a: 0, why: "Rebajas." },
    { fase: "indep", c: ["b1cs-apres"], k: "fill", ask: "Escribe «cambiar».", q: "Je voudrais ___ ce pull, il est trop petit.", acc: ["échanger"], why: "<b>échanger</b>." },
    { fase: "indep", c: ["b1cs-apres"], k: "fill", ask: "Escribe «entregado».", q: "Votre colis sera ___ demain.", acc: ["livré"], why: "<b>livré</b>." },
    { fase: "aplica", c: ["b1cs-payer", "b1cs-apres"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["le ticket de caisse", "el tiquete"], ["un avoir", "un vale"], ["la monnaie", "el cambio (dinero)"], ["le panier", "la cesta (en línea)"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1cs-payer"], k: "spot", ask: "Encuentra el error.", s: "Est-ce que je peux payer [avec] carte bancaire ?", fix: "par", why: "<b>par carte</b>." },
    { fase: "dominio", c: ["b1cs-apres"], k: "order", ask: "Ordena: «¿Me puede reembolsar?».", tokens: ["Est-ce que vous pouvez", "me", "rembourser ?"], why: "<b>Est-ce que vous pouvez me rembourser ?</b>" },
    { fase: "dominio", c: ["b1cs-payer"], k: "choice", ask: "«a mitad de precio»", q: "«à ___ prix»", o: ["moitié", "demi"], a: 0, why: "<b>à moitié prix</b>." },
    { fase: "dominio", c: ["b1cs-payer", "b1cs-apres"], k: "listen", say: "Pendant les soldes, ce manteau est à moitié prix.", acc: ["Pendant les soldes, ce manteau est à moitié prix."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pendant les soldes, ce manteau est à moitié prix.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: [] }
};

E["b11-relations"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les relations : amitié, couple et famille",
  objetivo: {
    que: "Vas a hablar de amistades, pareja y familia: llevarse bien, discutir, reconciliarse, enamorarse, casarse.",
    corto: "s'entendre bien avec · tomber amoureux de · la belle-famille.",
    podras: ["Usar los verbos recíprocos: se rencontrer, se disputer, se réconcilier, se séparer.", "Decir s'entendre bien / mal avec y tomber amoureux de.", "Nombrar la familia política y el estado civil: le beau-père, la belle-sœur, célibataire, veuf, pacsé."],
    iconos: ["ic2/corazon", "ic2/amigos", "ic2/regalo"],
    previos: ["Las relaciones (A2, lección 45), cómo se conocieron (A2, lección 54) y la concordancia con être (lección 27)."],
    capacidad: "Ahora cuentas tu vida afectiva y familiar en francés."
  },
  requiere: R("rl-verbes", "rl-passe", "b1ae-oui"), recupera: ["rl-verbes"],
  conceptos: {
    "b1rl-verbes": { n: "se rencontrer, se disputer, se réconcilier, se séparer; s'entendre bien avec; tomber amoureux de", b: "voc" },
    "b1rl-famille": { n: "le beau-père, la belle-mère, le beau-frère, la belle-sœur; célibataire, veuf, pacsé, un conjoint", b: "voc" }
  },
  video: {
    titulo: "Las relaciones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "s'entendre bien avec", seg: [
        { es: "Hola. Las palabras del amor, la amistad y la familia." } ] },
      { v: "frase", filas: [
          { nota: "llevarse", p: 1, partes: [["Je m'entends très bien avec mes collègues.", "-", 1]] },
          { nota: "pelear", p: 2, partes: [["Ils se sont disputés, puis réconciliés.", "-", 2]] },
          { nota: "amor", p: 3, partes: [["Elle est tombée amoureuse d'un Canadien.", "-", 3]] } ], seg: [
        { fr: "Je m'entends très bien avec mes collègues.", p: 1 }, { fr: "Ils se sont disputés, puis réconciliés.", p: 2 }, { fr: "Elle est tombée amoureuse d'un Canadien.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me llevo bien con mi hermano.»", o: ["Je m'entends bien avec mon frère.", "Je m'entends bien de mon frère."], a: 0,
        bien: "¡Sí! S'entendre avec.", mal: "Se dice s'entendre avec.",
        seg: [ { es: "Pausa. Me llevo bien." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["se rencontrer", "se disputer", "se réconcilier", "tomber amoureux de", "la belle-famille"], seg: [
        { es: "Beau-père: suegro o padrastro.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Historias de familia", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus familias.",
    pj: PJ,
    lineas: [
      ["camila", "Mon frère et sa femme se sont rencontrés à l'université. Il est tombé amoureux d'elle tout de suite !", "Mi hermano y su esposa se conocieron en la universidad. ¡Él se enamoró de ella enseguida!"],
      ["hugo", "Mes parents se sont disputés hier soir, mais ça va mieux. Ils se sont réconciliés.", "Mis papás se pelearon anoche, pero ya va mejor. Se reconciliaron."],
      ["camila", "Moi, je m'entends très bien avec ma belle-famille, heureusement. Ma belle-sœur est adorable.", "Yo me llevo muy bien con mi familia política, por suerte. Mi cuñada es adorable."],
      ["hugo", "Et ta cousine ? Elle n'est pas mariée, elle est célibataire ?", "¿Y tu prima? ¿No está casada, es soltera?"]
    ],
    fijate: "Fíjate: se sont rencontrés, tombé amoureux d'elle, se sont disputés, se sont réconciliés, je m'entends bien avec, belle-famille, belle-sœur, célibataire."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Relaciones y familia",
      idea: "Verbos recíprocos (con être en pasado): se rencontrer, se disputer, se réconcilier, se fiancer, se marier, se séparer, se quitter; también rompre, divorcer. S'entendre bien / mal avec = llevarse bien / mal con. Tomber amoureux / amoureuse de = enamorarse de. Sortir avec = salir con (pareja). Familia política: le beau-père (suegro o padrastro), la belle-mère, le beau-frère, la belle-sœur, la belle-famille. Estado civil: célibataire, marié(e), pacsé(e) (pareja de hecho), divorcé(e), veuf / veuve; un(e) conjoint(e).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "se rencontrer · tomber amoureux · se fiancer · se marier", es: "conocerse · enamorarse · comprometerse · casarse" },
        { fr: "se séparer · divorcer · rompre · se quitter", es: "separarse · divorciarse · romper · dejarse" },
        { fr: "se disputer · se réconcilier · réconciliés · disputés", es: "pelearse · reconciliarse · reconciliados · peleados" },
        { fr: "s'entendre bien avec · avec", es: "llevarse bien con" },
        { fr: "tomber amoureux de · tombé amoureux d'elle", es: "enamorarse de · se enamoró de ella" },
        { fr: "sortir avec", es: "salir con (pareja)" },
        { fr: "le beau-père · la belle-mère", es: "el suegro o padrastro · la suegra o madrastra" },
        { fr: "le beau-frère · la belle-sœur · la belle-famille", es: "el cuñado · la cuñada · la familia política" },
        { fr: "célibataire · veuf · pacsé · un conjoint", es: "soltero · viudo · en pareja de hecho · un cónyuge" }
      ],
      ej: [["Je m'entends très bien avec mes collègues.", "Me llevo muy bien con mis colegas."], ["Ils se sont disputés, puis ils se sont réconciliés.", "Se pelearon y luego se reconciliaron."], ["Elle est tombée amoureuse d'un Canadien.", "Se enamoró de un canadiense."]],
      clave: "s'entendre avec; tomber amoureux de." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je m'entends bien de mon frère.", "Je m'entends bien avec mon frère.", "s'entendre avec."], ["Mes parents se sont disputé hier soir.", "Mes parents se sont disputés hier soir.", "Recíproco: concuerda."], ["Il est tombé amoureux avec elle.", "Il est tombé amoureux d'elle.", "tomber amoureux de."]] }
  ],
  ejemplos: [
    { sit: "«Me llevo bien con mi hermana.»", resp: "Je m'entends bien avec ma sœur.", pasos: ["s'entendre avec."], porque: "Relación." },
    { sit: "«Se enamoró de ella.»", resp: "Il est tombé amoureux d'elle.", pasos: ["tomber amoureux de."], porque: "Amor." },
    { sit: "«mi cuñada»", resp: "ma belle-sœur", pasos: ["Familia política."], porque: "Familia." }
  ],
  comprueba: [
    { q: "«Llevarse bien con» se dice…", o: ["s'entendre bien avec", "s'entendre bien de"], a: 0, b: "voc", porque: "avec." },
    { q: "La belle-sœur es…", o: ["la cuñada", "la hermana bonita"], a: 0, b: "voc", porque: "Familia política." },
    { q: "Célibataire significa…", o: ["soltero(a)", "célebre"], a: 0, b: "voc", porque: "Estado civil." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rl-verbes"], k: "sort", ask: "¿La relación empieza o termina?", q: "Clasifica.", cats: ["Empieza", "Termina"], items: [["se rencontrer", 0], ["tomber amoureux", 0], ["se fiancer", 0], ["se marier", 0], ["se séparer", 1], ["divorcer", 1], ["rompre", 1], ["se quitter", 1]], pista: "¿Inicio o fin?", why: "Verbos." },
    { fase: "guiada", c: ["b1rl-verbes"], k: "choice", ask: "«Me llevo bien con mi hermana.»", q: "«___»", o: ["Je m'entends bien avec ma sœur.", "Je m'entends bien de ma sœur."], a: 0, pista: "avec.", why: "<b>avec</b>." },
    { fase: "guiada", c: ["b1rl-verbes"], k: "choice", ask: "«Se enamoró de ella.»", q: "«___»", o: ["Il est tombé amoureux d'elle.", "Il est tombé amoureux avec elle."], a: 0, pista: "de.", why: "<b>d'elle</b>." },
    { fase: "indep", c: ["b1rl-famille"], k: "choice", es: true, ask: "«ma belle-sœur» significa…", q: "Elige.", o: ["mi cuñada", "mi hermana bonita"], a: 0, why: "Cuñada." },
    { fase: "indep", c: ["b1rl-verbes"], k: "fill", ask: "Participio de se réconcilier (ils).", q: "Après la dispute, ils se sont ___.", acc: ["réconciliés"], why: "<b>réconciliés</b>." },
    { fase: "indep", c: ["b1rl-famille"], k: "fill", ask: "Escribe «soltera».", q: "Elle n'est pas mariée, elle est ___.", acc: ["célibataire"], why: "<b>célibataire</b>." },
    { fase: "aplica", c: ["b1rl-famille"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["le beau-père", "el suegro / padrastro"], ["veuf", "viudo"], ["pacsé", "en pareja de hecho"], ["un conjoint", "un cónyuge"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1rl-verbes"], k: "spot", ask: "Encuentra el error.", s: "Mes parents se sont [disputé] hier soir , mais ça va mieux .", fix: "disputés", why: "<b>disputés</b>." },
    { fase: "dominio", c: ["b1rl-verbes"], k: "order", ask: "Ordena: «Nos conocimos en la universidad».", tokens: ["Nous nous sommes", "rencontrés", "à l'université."], why: "<b>Nous nous sommes rencontrés à l'université.</b>" },
    { fase: "dominio", c: ["b1rl-famille"], k: "choice", ask: "«mi familia política»", q: "«ma ___»", o: ["belle-famille", "famille politique"], a: 0, why: "<b>belle-famille</b>." },
    { fase: "dominio", c: ["b1rl-verbes", "b1rl-famille"], k: "listen", say: "Je m'entends très bien avec ma belle-famille, heureusement.", acc: ["Je m'entends très bien avec ma belle-famille, heureusement."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je m'entends très bien avec ma belle-famille, heureusement.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ───── B1.1·9 · Cultura, cifras y comunicación ───── */
E["b11-critique-culturelle"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Donner son avis sur un film, un livre, un spectacle",
  objetivo: {
    que: "Vas a presentar una obra, valorarla y recomendarla o desaconsejarla.",
    corto: "Il s'agit de… · émouvant · À voir absolument !",
    podras: ["Presentar la obra: il s'agit de…, le film raconte l'histoire de…, ce livre parle de…", "Valorar: le scénario, l'intrigue, les acteurs, la mise en scène, la bande originale.", "Usar adjetivos (captivant, émouvant, décevant, ennuyeux) y recomendar: je vous le recommande vivement, à éviter."],
    iconos: ["ic2/estrella", "ic2/libro", "ic2/nota"],
    previos: ["Contar el fin de semana y dar tu opinión (A2, lección 22) y opinar (lección 8)."],
    capacidad: "Ahora escribes una reseña como en una revista."
  },
  requiere: R("rw-avis", "b1op-mode"), recupera: ["rw-avis"],
  conceptos: {
    "b1cc2-presenter": { n: "presentar: il s'agit de (siempre con il), le film raconte, ce livre parle de; l'intrigue, la mise en scène, la bande originale", b: "voc" },
    "b1cc2-avis": { n: "valorar y recomendar: captivant, émouvant, décevant, ennuyeux, un navet; je vous le recommande vivement, à voir absolument", b: "voc" }
  },
  video: {
    titulo: "Hacer una crítica", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "à voir absolument !", seg: [
        { es: "Hola. Presenta, valora y recomienda." } ] },
      { v: "frase", filas: [
          { nota: "presentar", p: 1, partes: [["Il s'agit d'un roman sur l'immigration.", "-", 1]] },
          { nota: "valorar", p: 2, partes: [["Les acteurs sont excellents, mais l'intrigue est lente.", "-", 2]] },
          { nota: "recomendar", p: 3, partes: [["Je vous le recommande vivement.", "-", 3]] } ], seg: [
        { fr: "Il s'agit d'un roman sur l'immigration.", p: 1 }, { fr: "Les acteurs sont excellents, mais l'intrigue est lente.", p: 2 }, { fr: "Je vous le recommande vivement.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Esta película trata de la amistad.»", o: ["Ce film parle de l'amitié.", "Ce film s'agit de l'amitié."], a: 0,
        bien: "¡Sí! Il s'agit va siempre con il.", mal: "Con el título de sujeto: parle de.",
        seg: [ { es: "Pausa. Trata de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il s'agit de", "l'intrigue", "émouvant", "décevant", "à voir absolument"], seg: [
        { es: "Un navet es una película malísima.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Al salir del cine", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo comentan una película.",
    pj: PJ,
    lineas: [
      ["camila", "C'est un film émouvant, avec des acteurs excellents. À voir absolument !", "Es una película conmovedora, con actores excelentes. ¡Hay que verla!"],
      ["hugo", "Il s'agit d'une histoire vraie, non ? La bande originale est magnifique.", "Se trata de una historia real, ¿no? La banda sonora es magnífica."],
      ["camila", "Oui. Mais l'intrigue est un peu lente au début. Et le livre ? Ce livre parle d'une famille pendant la guerre.", "Sí. Pero la trama es un poco lenta al principio. ¿Y el libro? Este libro habla de una familia durante la guerra."],
      ["hugo", "Le livre est captivant, je te le recommande vivement. Mais le film de la semaine dernière… un vrai navet, décevant !", "El libro es atrapante, te lo recomiendo mucho. Pero la película de la semana pasada… ¡un bodrio, decepcionante!"]
    ],
    fijate: "Fíjate: émouvant, à voir absolument, il s'agit de, la bande originale, l'intrigue, ce livre parle de, captivant, je te le recommande vivement, un navet, décevant."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "La crítica cultural",
      idea: "Presentar: Il s'agit de… (siempre con il: dans ce film, il s'agit de…), Le film raconte l'histoire de…, Ce livre parle de…, C'est un roman de… Valorar: le scénario, l'intrigue (trama), les personnages, la mise en scène (dirección), la bande originale (banda sonora), les effets spéciaux. Adjetivos: captivant, émouvant, bouleversant (conmovedor), drôle, réussi / ennuyeux, décevant, trop long; un navet (bodrio). Recomendar: Je vous le recommande vivement ! À voir absolument ! / Je vous le déconseille. À éviter.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Il s'agit de… · agit", es: "Se trata de…" },
        { fr: "Ce film parle de… · parle", es: "Esta película habla de…" },
        { fr: "l'intrigue · le scénario · les personnages", es: "la trama · el guion · los personajes" },
        { fr: "la mise en scène · la bande originale · originale", es: "la dirección · la banda sonora" },
        { fr: "captivant · émouvant · réussi · drôle", es: "atrapante · emotivo · logrado · gracioso" },
        { fr: "bouleversant", es: "conmovedor" },
        { fr: "ennuyeux · décevant · trop long", es: "aburrido · decepcionante · demasiado largo" },
        { fr: "un navet", es: "un bodrio" },
        { fr: "Je vous le recommande vivement.", es: "Se lo recomiendo mucho." },
        { fr: "À voir absolument ! · À éviter.", es: "¡Hay que verla! · Evítela." }
      ],
      ej: [["Il s'agit d'un roman sur l'immigration.", "Se trata de una novela sobre la inmigración."], ["Les acteurs sont excellents, mais l'intrigue est un peu lente.", "Los actores son excelentes, pero la trama es algo lenta."], ["Je vous le recommande vivement.", "Se lo recomiendo encarecidamente."]],
      clave: "Il s'agit de: el sujeto es siempre il." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ce film s'agit de la guerre.", "Dans ce film, il s'agit de la guerre.", "Il s'agit de siempre con sujeto il."], ["Ce livre s'agit d'une famille.", "Ce livre parle d'une famille.", "Con el título: parle de."], ["l'intrigue = la intriga (solo)", "l'intrigue = la trama", "En una obra: la trama."]] }
  ],
  ejemplos: [
    { sit: "«Esta película trata de la amistad.»", resp: "Ce film parle de l'amitié.", pasos: ["parler de."], porque: "Presentar." },
    { sit: "«una película decepcionante»", resp: "un film décevant", pasos: ["décevant."], porque: "Valorar." },
    { sit: "Recomiendas mucho.", resp: "À voir absolument !", pasos: ["Recomendar."], porque: "Cierre." }
  ],
  comprueba: [
    { q: "Il s'agit de lleva como sujeto…", o: ["siempre il", "el título de la obra"], a: 0, b: "voc", porque: "Impersonal." },
    { q: "Décevant significa…", o: ["decepcionante", "engañoso"], a: 0, b: "voc", porque: "Negativo." },
    { q: "Un navet es…", o: ["una obra malísima", "un nabo de oro"], a: 0, b: "voc", porque: "Coloquial." }
  ],
  practica: [
    { fase: "guiada", c: ["b1cc2-avis"], k: "sort", ask: "¿Valoración positiva o negativa?", q: "Clasifica.", cats: ["Positiva", "Negativa"], items: [["captivant", 0], ["émouvant", 0], ["réussi", 0], ["drôle", 0], ["ennuyeux", 1], ["décevant", 1], ["un navet", 1], ["trop long", 1]], pista: "¿Te gustó?", why: "Adjetivos." },
    { fase: "guiada", c: ["b1cc2-presenter"], k: "choice", ask: "«Esta película trata de la amistad.»", q: "«___»", o: ["Ce film parle de l'amitié.", "Ce film s'agit de l'amitié."], a: 0, pista: "Con el título: parle.", why: "<b>parle de</b>." },
    { fase: "guiada", c: ["b1cc2-avis"], k: "choice", es: true, ask: "«un film décevant» significa…", q: "Elige.", o: ["una película decepcionante", "una película engañosa"], a: 0, pista: "Negativo.", why: "Decepcionante." },
    { fase: "indep", c: ["b1cc2-avis"], k: "choice", ask: "Recomiendas mucho una película.", q: "«___»", o: ["À voir absolument !", "À éviter."], a: 0, why: "<b>À voir absolument</b>." },
    { fase: "indep", c: ["b1cc2-presenter"], k: "fill", ask: "Completa «se trata».", q: "Il s'___ d'une histoire vraie.", acc: ["agit"], why: "<b>il s'agit</b>." },
    { fase: "indep", c: ["b1cc2-presenter"], k: "fill", ask: "Escribe «sonora» (banda…).", q: "La bande ___ est magnifique.", acc: ["originale"], why: "<b>la bande originale</b>." },
    { fase: "aplica", c: ["b1cc2-presenter", "b1cc2-avis"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["l'intrigue", "la trama"], ["la mise en scène", "la dirección / puesta en escena"], ["un navet", "un bodrio"], ["bouleversant", "conmovedor"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1cc2-presenter"], k: "spot", ask: "Encuentra el error.", s: "Ce livre [s'agit] d'une famille pendant la guerre .", fix: "parle", why: "<b>parle</b>." },
    { fase: "dominio", c: ["b1cc2-avis"], k: "order", ask: "Ordena: «Se lo recomiendo mucho».", tokens: ["Je vous", "le recommande", "vivement."], why: "<b>Je vous le recommande vivement.</b>" },
    { fase: "dominio", c: ["b1cc2-avis"], k: "choice", ask: "«Es una película emotiva.»", q: "«C'est un film ___.»", o: ["émouvant", "ennuyeux"], a: 0, why: "<b>émouvant</b>." },
    { fase: "dominio", c: ["b1cc2-presenter", "b1cc2-avis"], k: "listen", say: "C'est un film émouvant, avec des acteurs excellents. À voir absolument !", acc: ["C'est un film émouvant, avec des acteurs excellents. À voir absolument !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est un film émouvant, avec des acteurs excellents. À voir absolument !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-chiffres"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Parler de chiffres : pourcentages, fractions, évolutions",
  objetivo: {
    que: "Vas a leer y decir cifras: porcentajes, fracciones, aproximaciones y evoluciones.",
    corto: "la moitié · un tiers · augmenter de 5 %.",
    podras: ["Decir fracciones: la moitié, un tiers, un quart, les deux tiers, les trois quarts.", "Decir porcentajes y aproximaciones: 25 % des Français, environ, près de, une centaine.", "Hablar de evolución: augmenter / baisser de, doubler, la hausse, la baisse."],
    iconos: ["ic2/moneda", "ic2/rayo", "ic2/libro"],
    previos: ["Las cantidades (A2, lección 66) y los números (A1, lecciones 17 y 18)."],
    capacidad: "Ahora entiendes y comentas estadísticas en francés."
  },
  requiere: R("qt-nom", "qt-verbe"), recupera: ["qt-nom"],
  conceptos: {
    "b1ch-fraction": { n: "la moitié, un tiers, un quart, les deux tiers, les trois quarts; pour cent; environ, près de, une centaine", b: "voc" },
    "b1ch-evolution": { n: "augmenter / baisser / diminuer de + %, doubler, la hausse, la baisse, rester stable", b: "voc" }
  },
  video: {
    titulo: "Cifras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "½ · ⅓ · %", seg: [
        { es: "Hola. Las cifras de las noticias y los informes." } ] },
      { v: "frase", filas: [
          { nota: "fracción", p: 1, partes: [["La moitié des étudiants travaillent.", "-", 1]] },
          { nota: "evolución", p: 2, partes: [["Les prix ont augmenté de 5 %.", "-", 2]] },
          { nota: "aproximación", p: 3, partes: [["Près d'un tiers des jeunes lisent.", "-", 3]] } ], seg: [
        { fr: "La moitié des étudiants travaillent.", p: 1 }, { fr: "Les prix ont augmenté de 5 %.", p: 2 }, { fr: "Près d'un tiers des jeunes lisent.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Los precios bajaron un 10 %.»", o: ["Les prix ont baissé de 10 %.", "Les prix ont baissé en 10 %."], a: 0,
        bien: "¡Sí! Variación: de + porcentaje.", mal: "Se dice baisser de.",
        seg: [ { es: "Pausa. Bajaron un 10 %." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la moitié", "un tiers", "un quart", "les trois quarts", "augmenter de", "une centaine"], seg: [
        { es: "Subir o bajar de un tanto por ciento.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El estudio", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta un estudio en clase.",
    pj: PJ,
    lineas: [
      ["camila", "Selon l'étude, près d'un tiers des Français font du sport chaque semaine.", "Según el estudio, casi un tercio de los franceses hace deporte cada semana."],
      ["hugo", "Et la moitié des étudiants travaillent pendant leurs études, non ?", "¿Y la mitad de los estudiantes trabaja durante sus estudios, no?"],
      ["camila", "Oui. Les prix ont augmenté de 5 % en un an, mais le chômage a diminué de 2 %.", "Sí. Los precios subieron un 5 % en un año, pero el desempleo bajó un 2 %."],
      ["hugo", "Et le nombre de cyclistes a doublé en dix ans ! Une centaine de personnes ont répondu.", "¡Y el número de ciclistas se duplicó en diez años! Unas cien personas respondieron."]
    ],
    fijate: "Fíjate: près d'un tiers, la moitié, augmenté de 5 %, diminué de 2 %, doublé, une centaine."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Fracciones, porcentajes, evolución",
      idea: "Fracciones: la moitié (1/2), un tiers (1/3), un quart (1/4), les deux tiers (2/3), les trois quarts (3/4). Porcentajes: 25 % se dice vingt-cinq pour cent; con un complemento plural, el verbo va en plural (25 % des Français pensent…). Evolución: augmenter / la hausse, baisser / la baisse / la chute, diminuer, reculer, doubler, progresser, rester stable; la variación lleva de: augmenter de 5 %. Aproximación: environ, près de, plus de, moins de, une dizaine, une centaine, un millier.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "la moitié · moitié", es: "la mitad (1/2)" },
        { fr: "un tiers · les deux tiers", es: "un tercio · dos tercios" },
        { fr: "un quart · les trois quarts", es: "un cuarto · tres cuartos" },
        { fr: "trente pour cent (30 %)", es: "treinta por ciento" },
        { fr: "augmenter de · la hausse · doubler · doublé · progresser", es: "subir un · el alza · duplicar · duplicado · progresar" },
        { fr: "baisser de · la baisse · diminuer · la chute · reculer", es: "bajar un · la baja · disminuir · la caída · retroceder" },
        { fr: "rester stable", es: "mantenerse estable" },
        { fr: "environ · près de · plus de · moins de", es: "aproximadamente · casi · más de · menos de" },
        { fr: "une dizaine · une centaine · un millier", es: "unos diez · unos cien · unos mil" },
        { fr: "de", es: "de (variación: de 5 %)" }
      ],
      ej: [["La moitié des étudiants travaillent pendant leurs études.", "La mitad de los estudiantes trabaja durante sus estudios."], ["Les prix ont augmenté de 5 % en un an.", "Los precios subieron un 5 % en un año."], ["Près d'un tiers des jeunes lisent tous les jours.", "Casi un tercio de los jóvenes lee todos los días."]],
      clave: "Variación: augmenter / baisser de + porcentaje." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les prix ont augmenté en 5 %.", "Les prix ont augmenté de 5 %.", "Variación: de + porcentaje."], ["Le chômage a diminué en 2 %.", "Le chômage a diminué de 2 %.", "de."], ["une cent de personnes", "une centaine de personnes", "Aproximación: -aine."]] }
  ],
  ejemplos: [
    { sit: "«una cuarta parte de los habitantes»", resp: "un quart des habitants", pasos: ["1/4 = un quart."], porque: "Fracción." },
    { sit: "«Los precios bajaron un 10 %.»", resp: "Les prix ont baissé de 10 %.", pasos: ["baisser de."], porque: "Evolución." },
    { sit: "«unas cien personas»", resp: "une centaine de personnes", pasos: ["Aproximación."], porque: "Cifra." }
  ],
  comprueba: [
    { q: "Un tiers es…", o: ["1/3", "1/4"], a: 0, b: "voc", porque: "Fracción." },
    { q: "«Subir un 5 %» se dice…", o: ["augmenter de 5 %", "augmenter en 5 %"], a: 0, b: "voc", porque: "de." },
    { q: "Une centaine es…", o: ["unos cien", "un siglo"], a: 0, b: "voc", porque: "Aproximación." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ch-evolution"], k: "sort", ask: "¿Sube o baja?", q: "Clasifica.", cats: ["Sube", "Baja"], items: [["augmenter", 0], ["la hausse", 0], ["doubler", 0], ["progresser", 0], ["baisser", 1], ["diminuer", 1], ["la chute", 1], ["reculer", 1]], pista: "¿Más o menos?", why: "Evolución." },
    { fase: "guiada", c: ["b1ch-fraction"], k: "choice", es: true, ask: "«un quart des habitants» significa…", q: "Elige.", o: ["una cuarta parte de los habitantes", "un cuarto de los habitantes de la casa"], a: 0, pista: "1/4.", why: "Cuarta parte." },
    { fase: "guiada", c: ["b1ch-evolution"], k: "choice", ask: "«Los precios bajaron un 10 %.»", q: "«___»", o: ["Les prix ont baissé de 10 %.", "Les prix ont baissé en 10 %."], a: 0, pista: "de.", why: "<b>de 10 %</b>." },
    { fase: "indep", c: ["b1ch-fraction"], k: "choice", es: true, ask: "«une centaine de personnes» significa…", q: "Elige.", o: ["unas cien personas", "cien años de personas"], a: 0, why: "Unas cien." },
    { fase: "indep", c: ["b1ch-fraction"], k: "fill", ask: "Escribe «mitad».", q: "La ___ des Français part en vacances en été.", acc: ["moitié"], why: "<b>la moitié</b>." },
    { fase: "indep", c: ["b1ch-evolution"], k: "fill", ask: "Escribe «duplicado».", q: "Le nombre de cyclistes a ___ en dix ans.", acc: ["doublé"], why: "<b>doublé</b>." },
    { fase: "aplica", c: ["b1ch-fraction"], k: "match", ask: "Une cada fracción con su nombre.", q: "Fracción → nombre", pairs: [["1/2", "la moitié"], ["1/3", "un tiers"], ["3/4", "les trois quarts"], ["2/3", "les deux tiers"]], why: "Fracciones." },
    { fase: "aplica", c: ["b1ch-evolution"], k: "spot", ask: "Encuentra el error.", s: "Le chômage a diminué [en] 2 % l'année dernière .", fix: "de", why: "<b>de 2 %</b>." },
    { fase: "dominio", c: ["b1ch-fraction"], k: "order", ask: "Ordena: «Casi la mitad de los jóvenes».", tokens: ["Près de", "la moitié", "des jeunes"], why: "<b>Près de la moitié des jeunes</b>" },
    { fase: "dominio", c: ["b1ch-evolution"], k: "choice", ask: "«Los precios subieron un 5 % en un año.»", q: "«Les prix ont ___ de 5 % en un an.»", o: ["augmenté", "baissé"], a: 0, why: "<b>augmenté</b>." },
    { fase: "dominio", c: ["b1ch-fraction", "b1ch-evolution"], k: "listen", say: "Selon l'étude, près d'un tiers des Français font du sport chaque semaine.", acc: ["Selon l'étude, près d'un tiers des Français font du sport chaque semaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Selon l'étude, près d'un tiers des Français font du sport chaque semaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-lettre-amicale"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Écrire un message amical ou une lettre personnelle",
  objetivo: {
    que: "Vas a escribir un mensaje a un amigo: saludo, noticias, preguntas y despedida cálida.",
    corto: "Chère Léa, … Et toi, quoi de neuf ? Grosses bises !",
    podras: ["Saludar: Salut Marie !, Cher Thomas, Chère Julie, Coucou.", "Abrir y preguntar: merci pour ton message, ça fait longtemps, j'espère que tu vas bien, quoi de neuf ?", "Despedirte: donne-moi de tes nouvelles, bises, je t'embrasse, à très vite."],
    iconos: ["ic2/lapiz", "ic2/corazon", "ic2/movil"],
    previos: ["La postal (A1, lección 51) y el correo (A1, lección 67)."],
    capacidad: "Ahora escribes cartas cálidas y bien organizadas."
  },
  requiere: R(), recupera: [],
  conceptos: {
    "b1la-ouverture": { n: "saludo y apertura: Salut, Cher / Chère (concuerda), merci pour ton message, ça fait longtemps, j'espère que tu vas bien", b: "voc" },
    "b1la-cloture": { n: "preguntas y cierre: quoi de neuf ?, donne-moi de tes nouvelles, bises, je t'embrasse, à très vite", b: "voc" }
  },
  video: {
    titulo: "Una carta a un amigo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Chère Léa,", seg: [
        { es: "Hola. Un mensaje amistoso: cálido, pero ordenado." } ] },
      { v: "frase", filas: [
          { nota: "saludo", p: 1, partes: [["Chère Léa, merci pour ta lettre !", "-", 1]] },
          { nota: "pregunta", p: 2, partes: [["Et toi, quoi de neuf ?", "-", 2]] },
          { nota: "despedida", p: 3, partes: [["Donne-moi vite de tes nouvelles. Grosses bises !", "-", 3]] } ], seg: [
        { fr: "Chère Léa, merci pour ta lettre !", p: 1 }, { fr: "Et toi, quoi de neuf ?", p: 2 }, { fr: "Donne-moi vite de tes nouvelles. Grosses bises !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Querida Sophie,»", o: ["Chère Sophie,", "Cher Sophie,"], a: 0,
        bien: "¡Sí! Femenino: chère.", mal: "Cher concuerda: chère.",
        seg: [ { es: "Pausa. Querida." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Salut !", "Chère", "quoi de neuf ?", "bises", "je t'embrasse", "à très vite"], seg: [
        { es: "Bises con amigos; Cordialement solo en lo formal.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mensaje", img: "bg-cafe", yo: "camila",
    escena: "Camila escribe a su amigo Marc.",
    pj: PJ,
    lineas: [
      ["camila", "Salut Marc ! Merci pour ton message, ça m'a fait très plaisir.", "¡Hola Marc! Gracias por tu mensaje, me alegró mucho."],
      ["camila", "Ça fait longtemps qu'on ne s'est pas vus ! J'espère que tu vas bien.", "¡Hace mucho que no nos vemos! Espero que estés bien."],
      ["camila", "Moi, je suis à Lyon, je fais un stage. Et toi, quoi de neuf ?", "Yo estoy en Lyon, haciendo una práctica. ¿Y tú, qué hay de nuevo?"],
      ["camila", "Donne-moi de tes nouvelles. Je t'embrasse, à très vite !", "Escríbeme. Un abrazo, ¡hasta pronto!"]
    ],
    fijate: "Fíjate: Salut Marc !, merci pour ton message, ça fait longtemps, j'espère que tu vas bien, quoi de neuf ?, donne-moi de tes nouvelles, je t'embrasse."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Las partes del mensaje",
      idea: "Saludo: Salut Marie !, Cher Thomas, Chère Julie (cher concuerda), Coucou (muy familiar). Apertura: Merci pour ton message ! Ça fait longtemps ! J'espère que tu vas bien. Cuerpo: noticias, opinión, invitación o consejo, y preguntas: Et toi, quoi de neuf ? Cierre: Donne-moi de tes nouvelles. Bises / Grosses bises / Je t'embrasse / À très vite / À plus ! En una carta formal: Madame, Monsieur, … Cordialement / Veuillez agréer…",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "Salut ! · Coucou !", es: "¡Hola! · ¡Holi! (muy familiar)" },
        { fr: "Cher Thomas, · Chère Julie, · Chère", es: "Querido Thomas, · Querida Julie," },
        { fr: "Merci pour ton message !", es: "¡Gracias por tu mensaje!" },
        { fr: "Ça fait longtemps ! · longtemps", es: "¡Hace mucho tiempo!" },
        { fr: "J'espère que tu vas bien.", es: "Espero que estés bien." },
        { fr: "Et toi, quoi de neuf ?", es: "¿Y tú, qué hay de nuevo?" },
        { fr: "Donne-moi de tes nouvelles. · nouvelles", es: "Escríbeme / Cuéntame cómo estás." },
        { fr: "Bises · Grosses bises · Je t'embrasse · À plus ! · À très vite", es: "Besos · Muchos besos · Un abrazo · ¡Nos vemos! · ¡Hasta muy pronto!" },
        { fr: "Cordialement · Madame, Monsieur, · Veuillez agréer… · Je vous prie de…", es: "Atentamente · Señora, señor: · Reciba… · Le ruego…", nota: "formal" }
      ],
      ej: [["Chère Léa, merci pour ta lettre, ça m'a fait très plaisir !", "Querida Léa, gracias por tu carta, ¡me alegró mucho!"], ["Et toi, quoi de neuf ?", "¿Y tú, qué hay de nuevo?"], ["Donne-moi vite de tes nouvelles. Grosses bises !", "Escríbeme pronto. ¡Besos!"]],
      clave: "Cher / Chère concuerda; el tono es cálido y se tutea." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Cher Marie,", "Chère Marie,", "Cher concuerda: chère en femenino."], ["Cordialement (a un amigo)", "Bises / Je t'embrasse", "Cordialement es formal."], ["Donne-moi tes nouvelles.", "Donne-moi de tes nouvelles.", "Expresión fija: de tes nouvelles."]] }
  ],
  ejemplos: [
    { sit: "«Querida Sophie,»", resp: "Chère Sophie,", pasos: ["Femenino: chère."], porque: "Saludo." },
    { sit: "Cierras un mensaje a un amigo.", resp: "Je t'embrasse.", pasos: ["Despedida cálida."], porque: "Cierre." },
    { sit: "«¿Qué hay de nuevo?»", resp: "Quoi de neuf ?", pasos: ["Pregunta."], porque: "Cuerpo." }
  ],
  comprueba: [
    { q: "«Querida Marie» se escribe…", o: ["Chère Marie", "Cher Marie"], a: 0, b: "voc", porque: "Femenino." },
    { q: "«Cordialement» es…", o: ["formal", "muy familiar"], a: 0, b: "voc", porque: "Registro." },
    { q: "«Quoi de neuf ?» significa…", o: ["¿Qué hay de nuevo?", "¿Qué es nueve?"], a: 0, b: "voc", porque: "Pregunta." }
  ],
  practica: [
    { fase: "guiada", c: ["b1la-ouverture", "b1la-cloture"], k: "sort", ask: "¿Amistoso o formal?", q: "Clasifica.", cats: ["Amistoso", "Formal"], items: [["Bises", 0], ["À plus !", 0], ["Je t'embrasse", 0], ["Salut !", 0], ["Cordialement", 1], ["Madame, Monsieur,", 1], ["Veuillez agréer…", 1], ["Je vous prie de…", 1]], pista: "¿Tú o usted?", why: "Registro." },
    { fase: "guiada", c: ["b1la-ouverture"], k: "choice", ask: "«Querida Sophie,»", q: "«___»", o: ["Chère Sophie,", "Cher Sophie,"], a: 0, pista: "Femenino.", why: "<b>Chère</b>." },
    { fase: "guiada", c: ["b1la-cloture"], k: "choice", ask: "Cierras un mensaje a un amigo.", q: "«___»", o: ["Je t'embrasse.", "Veuillez agréer mes salutations."], a: 0, pista: "Cálido.", why: "<b>Je t'embrasse</b>." },
    { fase: "indep", c: ["b1la-cloture"], k: "choice", ask: "«¿Qué hay de nuevo?»", q: "«___»", o: ["Quoi de neuf ?", "Quoi de nouveau neuf ?"], a: 0, why: "<b>Quoi de neuf ?</b>" },
    { fase: "indep", c: ["b1la-ouverture"], k: "fill", ask: "Escribe «mucho tiempo».", q: "Ça fait ___ qu'on ne s'est pas vus !", acc: ["longtemps"], why: "<b>longtemps</b>." },
    { fase: "indep", c: ["b1la-cloture"], k: "fill", ask: "Escribe «noticias».", q: "Donne-moi de tes ___ !", acc: ["nouvelles"], why: "<b>de tes nouvelles</b>." },
    { fase: "aplica", c: ["b1la-ouverture", "b1la-cloture"], k: "match", ask: "Une cada parte con un ejemplo.", q: "Parte → ejemplo", pairs: [["saludo", "Salut Paul !"], ["apertura", "J'espère que tu vas bien."], ["pregunta", "Et toi, quoi de neuf ?"], ["despedida", "Grosses bises"]], why: "Partes." },
    { fase: "aplica", c: ["b1la-ouverture"], k: "spot", ask: "Encuentra el error.", s: "[Cher] Amélie , merci beaucoup pour ta carte postale !", fix: "Chère", why: "<b>Chère</b>." },
    { fase: "dominio", c: ["b1la-ouverture"], k: "order", ask: "Ordena: «Espero que estés bien».", tokens: ["J'espère", "que tu", "vas bien."], why: "<b>J'espère que tu vas bien.</b>" },
    { fase: "dominio", c: ["b1la-cloture"], k: "choice", ask: "«¡Hasta muy pronto!»", q: "«___»", o: ["À très vite !", "Cordialement."], a: 0, why: "<b>À très vite</b>." },
    { fase: "dominio", c: ["b1la-ouverture", "b1la-cloture"], k: "listen", say: "Salut Marc ! Merci pour ton message, ça m'a fait très plaisir.", acc: ["Salut Marc ! Merci pour ton message, ça m'a fait très plaisir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Salut Marc ! Merci pour ton message, ça m'a fait très plaisir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Marc", "Léa", "Sophie", "Amélie", "Lyon"], previo: [] }
};

E["b11-faits-divers"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Lire un fait divers",
  objetivo: {
    que: "Vas a leer y contar una noticia breve sobre un suceso: robo, accidente, incendio.",
    corto: "Le voleur a été arrêté. · La victime a porté plainte.",
    podras: ["Entender titulares sin verbo: Vol spectaculaire au Louvre, Accident sur l'A7.", "Usar el vocabulario: un vol, un cambriolage, un incendie, un témoin, la victime, les secours.", "Reconocer la voz pasiva: le voleur a été arrêté, deux personnes ont été blessées."],
    iconos: ["ic2/libro", "ic2/llama", "ic2/candado"],
    previos: ["Passé composé o imparfait (lección 1) y la concordancia con être (lección 27)."],
    capacidad: "Ahora entiendes las noticias de sucesos del periódico."
  },
  requiere: R("b1pi-fait", "b1ae-oui"), recupera: ["b1pi-fait"],
  conceptos: {
    "b1fd-voc": { n: "un vol (robo / vuelo), un cambriolage, un incendie, un témoin, la victime, le suspect, les secours, porter plainte", b: "voc" },
    "b1fd-passif": { n: "voz pasiva: a été arrêté, ont été blessées (participio concordado); titulares nominales", b: "voc" }
  },
  video: {
    titulo: "Los sucesos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/llama", grande: "fait divers", seg: [
        { es: "Hola. Las noticias breves de robos, incendios y accidentes." } ] },
      { v: "frase", filas: [
          { nota: "titular", p: 1, partes: [["Incendie dans un immeuble", "-", 1]] },
          { nota: "pasiva", p: 2, partes: [["Un homme a été arrêté hier soir.", "-", 2]] },
          { nota: "denuncia", p: 3, partes: [["La victime a porté plainte.", "-", 3]] } ], seg: [
        { fr: "Incendie dans un immeuble", p: 1 }, { fr: "Un homme a été arrêté hier soir.", p: 2 }, { fr: "La victime a porté plainte.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Dos personas resultaron heridas.»", o: ["Deux personnes ont été blessées.", "Deux personnes ont été blessés."], a: 0,
        bien: "¡Sí! Personnes: femenino plural.", mal: "Pasiva: concuerda: blessées.",
        seg: [ { es: "Pausa. Heridas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un vol", "un cambriolage", "un incendie", "un témoin", "la victime", "les secours"], seg: [
        { es: "Vol: robo o vuelo, según el contexto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El periódico", img: "bg-cafe", yo: "camila",
    escena: "Hugo lee las noticias en voz alta a Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Écoute : « Hier soir, un incendie s'est déclaré dans un immeuble du centre-ville. »", "Escucha: «Anoche se declaró un incendio en un edificio del centro»."],
      ["camila", "Il y a des blessés ?", "¿Hay heridos?"],
      ["hugo", "Deux personnes ont été blessées. Les pompiers sont arrivés rapidement. Et ici : « Vol de bijoux dans une boutique ».", "Dos personas resultaron heridas. Los bomberos llegaron rápido. Y aquí: «Robo de joyas en una tienda»."],
      ["camila", "Un témoin a tout vu, et le voleur a été arrêté. La victime a porté plainte au commissariat.", "Un testigo lo vio todo, y el ladrón fue detenido. La víctima puso una denuncia en la comisaría."]
    ],
    fijate: "Fíjate: un incendie s'est déclaré; ont été blessées, a été arrêté (pasiva); Vol de bijoux (titular); un témoin, la victime, porté plainte."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "El vocabulario del suceso",
      idea: "Titulares sin verbo: Vol spectaculaire au Louvre, Accident sur l'A7, Incendie dans un immeuble. Vocabulario: un vol (robo… o vuelo), un cambriolage (robo en vivienda), un cambrioleur, un incendie, un accident, un témoin (testigo), la victime, le suspect, les secours (servicios de emergencia), les pompiers, une enquête. Verbos: voler, cambrioler, arrêter, blesser, porter plainte (denunciar), enquêter. Voz pasiva (être + participio concordado): Le voleur a été arrêté. Deux personnes ont été blessées.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "un vol · un voleur", es: "un robo (o un vuelo) · un ladrón" },
        { fr: "un cambriolage · cambrioler", es: "un robo en vivienda · robar una casa" },
        { fr: "un incendie · un accident", es: "un incendio · un accidente" },
        { fr: "un témoin · la victime · le suspect", es: "un testigo · la víctima · el sospechoso" },
        { fr: "le pompier · les secours · secours", es: "el bombero · los servicios de emergencia" },
        { fr: "porter plainte · plainte", es: "poner una denuncia" },
        { fr: "une enquête · enquêter", es: "una investigación · investigar" },
        { fr: "blessé · blessées · arrêté", es: "herido · heridas · detenido" },
        { fr: "a été arrêté · ont été blessées", es: "fue detenido · resultaron heridas" },
        { fr: "le commissariat", es: "la comisaría" }
      ],
      ej: [["Un homme a été arrêté hier soir après un cambriolage.", "Un hombre fue detenido anoche tras un robo en una vivienda."], ["Les pompiers sont intervenus rapidement.", "Los bomberos intervinieron rápidamente."], ["La victime a porté plainte au commissariat.", "La víctima puso una denuncia en la comisaría."]],
      clave: "Vol = robo o vuelo; la pasiva concuerda con el sujeto." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un vol = solo un vuelo", "un vol = un vuelo / un robo", "Vol tiene dos sentidos."], ["Deux personnes ont été blessés.", "Deux personnes ont été blessées.", "Pasiva: concuerda con personnes."], ["La victime a mis plainte.", "La victime a porté plainte.", "Expresión fija: porter plainte."]] }
  ],
  ejemplos: [
    { sit: "Titular: «Vol de bijoux dans une boutique».", resp: "robo de joyas", pasos: ["vol = robo."], porque: "Contexto." },
    { sit: "«Un testigo lo vio todo.»", resp: "Un témoin a tout vu.", pasos: ["témoin = testigo."], porque: "Vocabulario." },
    { sit: "«El ladrón fue detenido.»", resp: "Le voleur a été arrêté.", pasos: ["Pasiva: a été + participio."], porque: "Pasiva." }
  ],
  comprueba: [
    { q: "En «Vol de bijoux», vol significa…", o: ["robo", "vuelo"], a: 0, b: "voc", porque: "Contexto." },
    { q: "Un témoin es…", o: ["un testigo", "un sospechoso"], a: 0, b: "voc", porque: "Persona." },
    { q: "«Porter plainte» significa…", o: ["poner una denuncia", "quejarse en voz alta"], a: 0, b: "voc", porque: "Policía." }
  ],
  practica: [
    { fase: "guiada", c: ["b1fd-voc"], k: "sort", ask: "¿Persona o hecho?", q: "Clasifica.", cats: ["Persona", "Hecho"], items: [["le témoin", 0], ["la victime", 0], ["le suspect", 0], ["le pompier", 0], ["le vol", 1], ["l'incendie", 1], ["l'accident", 1], ["le cambriolage", 1]], pista: "¿Quién o qué?", why: "Vocabulario." },
    { fase: "guiada", c: ["b1fd-voc"], k: "choice", es: true, ask: "«Vol de bijoux dans une boutique.» Vol significa…", q: "Elige.", o: ["robo", "vuelo"], a: 0, pista: "Joyas en una tienda.", why: "Robo." },
    { fase: "guiada", c: ["b1fd-passif"], k: "choice", ask: "«El ladrón fue detenido.»", q: "«___»", o: ["Le voleur a été arrêté.", "Le voleur a arrêté."], a: 0, pista: "Pasiva.", why: "<b>a été arrêté</b>." },
    { fase: "indep", c: ["b1fd-voc"], k: "choice", es: true, ask: "«Un témoin a tout vu.» Témoin significa…", q: "Elige.", o: ["testigo", "tomate"], a: 0, why: "Testigo." },
    { fase: "indep", c: ["b1fd-voc"], k: "fill", ask: "Escribe «denuncia».", q: "La victime a porté ___.", acc: ["plainte"], why: "<b>porter plainte</b>." },
    { fase: "indep", c: ["b1fd-voc"], k: "fill", ask: "Escribe «servicios de emergencia».", q: "Les ___ sont arrivés en dix minutes.", acc: ["secours"], why: "<b>les secours</b>." },
    { fase: "aplica", c: ["b1fd-voc"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["un cambriolage", "un robo en vivienda"], ["un incendie", "un incendio"], ["blessé", "herido"], ["une enquête", "una investigación"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b1fd-passif"], k: "spot", ask: "Encuentra el error.", s: "Deux personnes ont été [blessés] dans l'accident de ce matin .", fix: "blessées", why: "<b>blessées</b>." },
    { fase: "dominio", c: ["b1fd-voc"], k: "order", ask: "Ordena: «Los bomberos llegaron rápido».", tokens: ["Les pompiers", "sont arrivés", "rapidement."], why: "<b>Les pompiers sont arrivés rapidement.</b>" },
    { fase: "dominio", c: ["b1fd-passif"], k: "choice", ask: "«Un hombre fue detenido anoche.»", q: "«Un homme ___ hier soir.»", o: ["a été arrêté", "a arrêté"], a: 0, why: "<b>a été arrêté</b>." },
    { fase: "dominio", c: ["b1fd-voc", "b1fd-passif"], k: "listen", say: "Hier soir, un incendie s'est déclaré dans un immeuble du centre-ville.", acc: ["Hier soir, un incendie s'est déclaré dans un immeuble du centre-ville."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Hier soir, un incendie s'est déclaré dans un immeuble du centre-ville.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Louvre"], previo: [] }
};

E["b11-expressions-idiomatiques"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Expressions idiomatiques courantes",
  objetivo: {
    que: "Vas a entender y usar expresiones idiomáticas frecuentes del francés.",
    corto: "poser un lapin · coûter les yeux de la tête · il pleut des cordes.",
    podras: ["Expresar el ánimo: avoir le cafard, être aux anges, avoir la pêche, avoir la flemme.", "Hablar de relaciones y dinero: poser un lapin, avoir un coup de foudre, coûter les yeux de la tête.", "Usar otras expresiones: être dans la lune, il pleut des cordes, ce n'est pas la mer à boire."],
    iconos: ["ic2/estrella", "ic2/corazon", "ic2/luna"],
    previos: ["Los sentimientos (lección 44)."],
    capacidad: "Ahora entiendes el francés de la calle con sus imágenes."
  },
  requiere: R("b1se-voc"), recupera: ["b1se-voc"],
  conceptos: {
    "b1ei-humeur": { n: "ánimo: avoir le cafard, avoir le moral à zéro, être aux anges, avoir la pêche, avoir la flemme", b: "voc" },
    "b1ei-autres": { n: "poser un lapin, un coup de foudre, coûter les yeux de la tête, être dans la lune, il pleut des cordes", b: "voc" }
  },
  video: {
    titulo: "Expresiones", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "poser un lapin", seg: [
        { es: "Hola. Cada idioma tiene sus imágenes: estas son las del francés." } ] },
      { v: "frase", filas: [
          { nota: "plantón", p: 1, partes: [["Il m'a posé un lapin.", "-", 1]] },
          { nota: "caro", p: 2, partes: [["Ce sac coûte les yeux de la tête !", "-", 2]] },
          { nota: "pereza", p: 3, partes: [["J'ai la flemme d'aller au sport.", "-", 3]] } ], seg: [
        { es: "Ponerle un conejo es dejar plantado:", p: 1 }, { fr: "Il m'a posé un lapin.", p: 1 }, { fr: "Ce sac coûte les yeux de la tête !", p: 2 }, { fr: "J'ai la flemme d'aller au sport.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llueve a cántaros.»", o: ["Il pleut des cordes.", "Il pleut des chats et des chiens."], a: 0,
        bien: "¡Sí! En francés llueven cuerdas.", mal: "La imagen francesa: il pleut des cordes.",
        seg: [ { es: "Pausa. Llueve mucho." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir le cafard", "être aux anges", "poser un lapin", "un coup de foudre", "être dans la lune"], seg: [
        { es: "Ce n'est pas la mer à boire: no es para tanto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un día raro", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta su día a Hugo con expresiones.",
    pj: PJ,
    lineas: [
      ["camila", "Hier, mon ami m'a posé un lapin : il n'est jamais venu ! J'ai le cafard.", "Ayer mi amigo me dejó plantada: ¡nunca llegó! Estoy deprimida."],
      ["hugo", "Oh non ! Et il pleut des cordes en plus. Tu étais dans la lune ce matin, aussi.", "¡Ay no! Y además llueve a cántaros. Esta mañana también estabas en las nubes."],
      ["camila", "Oui… et cette veste coûte les yeux de la tête. J'ai la flemme de cuisiner ce soir.", "Sí… y esta chaqueta cuesta un ojo de la cara. Me da pereza cocinar esta noche."],
      ["hugo", "Courage ! Ce n'est pas la mer à boire, tu vas y arriver ! Moi, j'ai eu un coup de foudre pour une fille au café, je suis aux anges !", "¡Ánimo! No es para tanto, ¡lo vas a lograr! Yo tuve un flechazo con una chica en el café, ¡estoy en las nubes de felicidad!"]
    ],
    fijate: "Fíjate: posé un lapin, le cafard, il pleut des cordes, dans la lune, coûte les yeux de la tête, la flemme, ce n'est pas la mer à boire, un coup de foudre, aux anges."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Expresiones frecuentes",
      idea: "Ánimo: avoir le cafard (estar deprimido), avoir le moral à zéro, être aux anges (estar feliz), avoir la pêche (tener energía), avoir la flemme (tener pereza). Relaciones: poser un lapin (dar plantón), avoir un coup de foudre (flechazo), casser les pieds (fastidiar). Dinero: coûter les yeux de la tête (un ojo de la cara), jeter l'argent par les fenêtres (derrochar), être fauché (estar sin plata). Otras: être dans la lune (distraído), il pleut des cordes (llueve a cántaros), ce n'est pas la mer à boire (no es para tanto).",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "avoir le cafard · avoir le moral à zéro", es: "estar deprimido · tener la moral por el piso" },
        { fr: "être aux anges · avoir la pêche", es: "estar feliz · tener energía" },
        { fr: "avoir la flemme", es: "tener pereza" },
        { fr: "poser un lapin · lapin", es: "dejar plantado" },
        { fr: "avoir un coup de foudre · foudre", es: "tener un flechazo" },
        { fr: "casser les pieds", es: "fastidiar" },
        { fr: "coûter les yeux de la tête · tête", es: "costar un ojo de la cara" },
        { fr: "jeter l'argent par les fenêtres · être fauché · payer rubis sur l'ongle", es: "derrochar · estar sin plata · pagar al contado y puntual" },
        { fr: "être dans la lune", es: "estar en las nubes, distraído" },
        { fr: "il pleut des cordes", es: "llueve a cántaros" },
        { fr: "ce n'est pas la mer à boire", es: "no es para tanto" }
      ],
      ej: [["Il m'a posé un lapin hier soir.", "Me dejó plantado anoche."], ["Ce sac coûte les yeux de la tête !", "¡Este bolso cuesta un ojo de la cara!"], ["J'ai la flemme d'aller à la salle de sport.", "Me da pereza ir al gimnasio."]],
      clave: "Cada idioma tiene su imagen: il pleut des cordes." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il pleut des chats et des chiens.", "Il pleut des cordes.", "Imagen francesa: cuerdas."], ["Mon ami m'a posé un chat.", "Mon ami m'a posé un lapin.", "Plantón: un lapin."], ["coûter un œil de la figure", "coûter les yeux de la tête", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«estar deprimido»", resp: "avoir le cafard", pasos: ["Ánimo."], porque: "Expresión." },
    { sit: "«Me dejó plantado.»", resp: "Il m'a posé un lapin.", pasos: ["poser un lapin."], porque: "Relación." },
    { sit: "«Llueve a cántaros.»", resp: "Il pleut des cordes.", pasos: ["Imagen francesa."], porque: "Clima." }
  ],
  comprueba: [
    { q: "«Avoir le cafard» significa…", o: ["estar deprimido", "tener una cucaracha en casa"], a: 0, b: "voc", porque: "Ánimo." },
    { q: "«Être dans la lune» significa…", o: ["estar distraído", "estar feliz"], a: 0, b: "voc", porque: "Distracción." },
    { q: "«Ce n'est pas la mer à boire» significa…", o: ["no es para tanto", "no se puede beber"], a: 0, b: "voc", porque: "Ánimo." }
  ],
  practica: [
    { fase: "guiada", c: ["b1ei-humeur", "b1ei-autres"], k: "sort", ask: "¿Estado de ánimo o dinero?", q: "Clasifica.", cats: ["Estado de ánimo", "Dinero"], items: [["avoir le cafard", 0], ["avoir le moral à zéro", 0], ["être aux anges", 0], ["avoir la pêche", 0], ["coûter les yeux de la tête", 1], ["jeter l'argent par les fenêtres", 1], ["être fauché", 1], ["payer rubis sur l'ongle", 1]], pista: "¿Sentimientos o plata?", why: "Expresiones." },
    { fase: "guiada", c: ["b1ei-humeur"], k: "choice", es: true, ask: "«avoir le cafard» significa…", q: "Elige.", o: ["estar deprimido", "estar contento"], a: 0, pista: "Ánimo bajo.", why: "Deprimido." },
    { fase: "guiada", c: ["b1ei-autres"], k: "choice", es: true, ask: "«Il m'a posé un lapin.» significa…", q: "Elige.", o: ["Me dejó plantado.", "Me regaló un conejo."], a: 0, pista: "Cita.", why: "Plantón." },
    { fase: "indep", c: ["b1ei-autres"], k: "choice", ask: "«Llueve a cántaros.»", q: "«___»", o: ["Il pleut des cordes.", "Il pleut des chats."], a: 0, why: "<b>des cordes</b>." },
    { fase: "indep", c: ["b1ei-autres"], k: "fill", ask: "Completa la expresión.", q: "Cette voiture coûte les yeux de la ___.", acc: ["tête"], why: "<b>de la tête</b>." },
    { fase: "indep", c: ["b1ei-autres"], k: "fill", ask: "Escribe «flechazo» (coup de…).", q: "Ils se sont vus et ça a été le coup de ___.", acc: ["foudre"], why: "<b>coup de foudre</b>." },
    { fase: "aplica", c: ["b1ei-humeur", "b1ei-autres"], k: "match", ask: "Une cada expresión con su sentido.", q: "Expresión → sentido", pairs: [["être dans la lune", "estar distraído"], ["avoir la flemme", "tener pereza"], ["être aux anges", "estar feliz"], ["casser les pieds", "fastidiar"]], why: "Expresiones." },
    { fase: "aplica", c: ["b1ei-autres"], k: "spot", ask: "Encuentra el error.", s: "Hier , mon ami m'a posé un [chat] : il n'est jamais venu .", fix: "lapin", why: "<b>un lapin</b>." },
    { fase: "dominio", c: ["b1ei-humeur"], k: "order", ask: "Ordena: «Me da pereza cocinar».", tokens: ["J'ai la flemme", "de", "cuisiner."], why: "<b>J'ai la flemme de cuisiner.</b>" },
    { fase: "dominio", c: ["b1ei-humeur"], k: "choice", ask: "Animas a un amigo: «No es para tanto».", q: "«___»", o: ["Ce n'est pas la mer à boire.", "Il pleut des cordes."], a: 0, why: "<b>Ce n'est pas la mer à boire</b>." },
    { fase: "dominio", c: ["b1ei-humeur", "b1ei-autres"], k: "listen", say: "Ce n'est pas la mer à boire, tu vas y arriver !", acc: ["Ce n'est pas la mer à boire, tu vas y arriver !"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce n'est pas la mer à boire, tu vas y arriver !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b11-registre-familier"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Français courant et français familier",
  objetivo: {
    que: "Vas a reconocer las palabras del francés familiar y a pasarlas al registro estándar cuando escribes.",
    corto: "le boulot = le travail · bosser = travailler.",
    podras: ["Reconocer nombres familiares: boulot, bouquin, bagnole, fric, pote, mec, gosse.", "Reconocer verbos familiares: bosser, bouffer, piger, se marrer, flipper.", "Elegir el registro courant en un escrito formal o en el DELF."],
    iconos: ["ic2/amigos", "ic2/movil", "ic2/lapiz"],
    previos: ["La e que cae al hablar (Fonética, lección 46) y las muletillas (Fonética, lección 64)."],
    capacidad: "Ahora entiendes a los jóvenes franceses y escribes en el registro adecuado."
  },
  requiere: R("fem-chute", "fem-ecrit", "fij-registre"), recupera: ["fij-registre"],
  conceptos: {
    "b1rf2-noms": { n: "nombres familiares: le boulot, un bouquin, la bagnole, le fric, un pote, un mec, un gosse", b: "voc" },
    "b1rf2-verbes": { n: "verbos familiares: bosser, bouffer, piger, se marrer, flipper; en lo formal: travailler, manger, comprendre, rire", b: "voc" }
  },
  video: {
    titulo: "Familiar y estándar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "boulot · bosser", seg: [
        { es: "Hola. Las palabras de la calle y sus equivalentes estándar." } ] },
      { v: "dos",
        a: { tag: "familiar", fr: "J'ai trop de boulot.", es: "con amigos" },
        b: { tag: "estándar", fr: "J'ai trop de travail.", es: "en un correo formal" },
        seg: [ { es: "Con amigos:", p: 1 }, { fr: "J'ai trop de boulot.", p: 1 }, { es: "En un escrito formal:", p: 2 }, { fr: "J'ai trop de travail.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Escribes a la directora. ¿Qué pones?", es: true, o: ["Je n'ai pas d'argent pour payer.", "Je n'ai pas de fric pour payer."], a: 0,
        bien: "¡Sí! Registro formal: argent.", mal: "Fric es familiar: argent.",
        seg: [ { es: "Pausa. ¿Qué escribes?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le boulot", "un bouquin", "la bagnole", "le fric", "bosser", "piger"], seg: [
        { es: "Entiéndelas al oír; en un examen escrito, el registro estándar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Fin de semana", img: "bg-cafe", yo: "camila",
    escena: "Hugo habla en francés familiar con Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Ce week-end, je bosse, mais après on se fait un ciné avec les potes.", "Este fin de semana trabajo, pero después vamos al cine con los amigos."],
      ["camila", "J'ai rien pigé ! Tu peux parler normalement ?", "¡No entendí nada! ¿Puedes hablar normal?"],
      ["hugo", "Ha ha ! Je travaille, puis on va au cinéma avec les amis. Hier soir, on s'est bien marrés. Et j'ai acheté un bouquin.", "¡Ja, ja! Trabajo, luego vamos al cine con los amigos. Anoche nos reímos mucho. Y compré un libro."],
      ["camila", "T'as pas vu ma bagnole ? Euh… tu n'as pas vu ma voiture ? Je n'ai plus de fric pour l'essence !", "¿No viste mi carro? ¡Ya no tengo plata para la gasolina!"]
    ],
    fijate: "Fíjate: je bosse, un ciné, les potes, pigé, marrés, un bouquin, ma bagnole, du fric (familiar) / travaille, cinéma, amis, voiture (estándar)."
  },
  ensena: [
    { id: "voc", tipo: "vocab", titulo: "Familiar → estándar",
      idea: "Nombres familiares: le boulot (le travail), un bouquin (un livre), la bagnole (la voiture), le fric (l'argent), un pote (un ami, un copain), un mec (un homme), une nana (une femme), un gosse (un enfant). Verbos: bosser (travailler), bouffer (manger), piger (comprendre), se marrer (rire), flipper (avoir peur). Rasgos orales: sin ne (j'ai rien pigé), on por nous, ça por cela, t'as por tu as. En un escrito formal o en el DELF: registro courant o soutenu.",
      intro: "Toca cada tarjeta y escucha.",
      palabras: [
        { fr: "le boulot = le travail · travail", es: "el trabajo" },
        { fr: "un bouquin = un livre", es: "un libro" },
        { fr: "la bagnole = la voiture", es: "el carro" },
        { fr: "le fric = l'argent · argent", es: "la plata · el dinero" },
        { fr: "un pote = un ami · ami · copain", es: "un amigo" },
        { fr: "un mec = un homme · un gosse = un enfant", es: "un tipo · un niño" },
        { fr: "bosser = travailler", es: "trabajar" },
        { fr: "bouffer = manger · piger = comprendre", es: "comer · entender" },
        { fr: "se marrer = rire · flipper = avoir peur", es: "reírse · asustarse" },
        { fr: "J'ai rien pigé. · T'as pas vu ma bagnole ?", es: "No entendí nada. · ¿No viste mi carro?" }
      ],
      ej: [["J'ai trop de boulot cette semaine.", "Tengo demasiado trabajo esta semana."], ["T'as pigé ?", "¿Entendiste?"], ["On s'est bien marrés hier soir.", "Nos reímos mucho anoche."]],
      clave: "Al oír, entiéndelas; al escribir formal, usa la palabra estándar." },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Madame, je n'ai pas de fric pour payer.", "Madame, je n'ai pas d'argent pour payer.", "Registro formal: argent."], ["Madame la directrice, je vous écris au sujet de mon boulot.", "Madame la directrice, je vous écris au sujet de mon travail.", "En formal: travail."], ["piger = pegar", "piger = entender", "Falso amigo."]] }
  ],
  ejemplos: [
    { sit: "«Je dois bosser ce week-end.»", resp: "Je dois travailler ce week-end.", pasos: ["bosser = travailler."], porque: "Estándar." },
    { sit: "«J'ai acheté un bouquin.»", resp: "J'ai acheté un livre.", pasos: ["bouquin = livre."], porque: "Estándar." },
    { sit: "«T'as pas vu ma bagnole ?»", resp: "Tu n'as pas vu ma voiture ?", pasos: ["ne + voiture."], porque: "Estándar." }
  ],
  comprueba: [
    { q: "Bosser significa…", o: ["trabajar", "besar"], a: 0, b: "voc", porque: "Familiar." },
    { q: "Le fric es…", o: ["el dinero", "el frío"], a: 0, b: "voc", porque: "Familiar." },
    { q: "En un correo formal se escribe…", o: ["le travail", "le boulot"], a: 0, b: "voc", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["b1rf2-noms", "b1rf2-verbes"], k: "sort", ask: "¿Familiar o estándar?", q: "Clasifica.", cats: ["Familier", "Courant"], items: [["la bagnole", 0], ["le fric", 0], ["bosser", 0], ["un mec", 0], ["la voiture", 1], ["l'argent", 1], ["travailler", 1], ["un homme", 1]], pista: "¿Con amigos o en un examen?", why: "Registros." },
    { fase: "guiada", c: ["b1rf2-verbes"], k: "choice", es: true, ask: "«Je dois bosser ce week-end.» Bosser significa…", q: "Elige.", o: ["trabajar", "descansar"], a: 0, pista: "Familiar.", why: "Trabajar." },
    { fase: "guiada", c: ["b1rf2-noms"], k: "choice", es: true, ask: "«J'ai acheté un bouquin.» Un bouquin es…", q: "Elige.", o: ["un libro", "un ramo de flores"], a: 0, pista: "Se lee.", why: "Libro." },
    { fase: "indep", c: ["b1rf2-noms"], k: "choice", ask: "Pasa a estándar: «T'as pas vu ma bagnole ?»", q: "«___»", o: ["Tu n'as pas vu ma voiture ?", "T'as pas vu ma voiture ?"], a: 0, why: "Estándar: ne + voiture." },
    { fase: "indep", c: ["b1rf2-noms"], k: "fill", ask: "Equivalente estándar de fric.", q: "le fric = l'___", acc: ["argent"], why: "<b>l'argent</b>." },
    { fase: "indep", c: ["b1rf2-noms"], k: "fill", ask: "Equivalente estándar de pote.", q: "un pote = un ___", acc: ["ami", "copain"], why: "<b>un ami</b>." },
    { fase: "aplica", c: ["b1rf2-noms", "b1rf2-verbes"], k: "match", ask: "Une cada palabra familiar con la estándar.", q: "Familier → courant", pairs: [["le boulot", "le travail"], ["piger", "comprendre"], ["se marrer", "rire"], ["bouffer", "manger"], ["un gosse", "un enfant"]], why: "Equivalencias." },
    { fase: "aplica", c: ["b1rf2-noms"], k: "spot", ask: "Encuentra el error (registro formal).", s: "Madame la directrice , je vous écris au sujet de mon [boulot] au service comptable .", fix: "travail", why: "<b>travail</b>." },
    { fase: "dominio", c: ["b1rf2-verbes"], k: "order", ask: "Ordena (familiar): «No entendí nada».", tokens: ["J'ai", "rien", "pigé."], why: "<b>J'ai rien pigé.</b>" },
    { fase: "dominio", c: ["b1rf2-verbes"], k: "choice", ask: "Correo formal: «Debo trabajar este fin de semana».", q: "«Je dois ___ ce week-end.»", o: ["travailler", "bosser"], a: 0, why: "<b>travailler</b>." },
    { fase: "dominio", c: ["b1rf2-noms", "b1rf2-verbes"], k: "listen", say: "Ce week-end, je bosse, mais après on se fait un ciné avec les potes.", acc: ["Ce week-end, je bosse, mais après on se fait un ciné avec les potes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce week-end, je bosse, mais après on se fait un ciné avec les potes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

})();
