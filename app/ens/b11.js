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

})();
