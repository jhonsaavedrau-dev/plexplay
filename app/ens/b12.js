/* PLEX PLAY 4.59 — Sistema de enseñanza: las fichas del curso «Francés B1.2» (b12). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también B1.1, el curso anterior).
   B1.2 parte de B1.1: BASE son todos los conceptos de Primeros pasos, A1, A2 y B1.1, que las fichas dan por enseñados.
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
  "na2-sujet", "pj2-intention", "pj2-compte", "qt-nom", "qt-verbe", "am2-place", "am2-adj",
  "b1pi-decor", "b1pi-fait", "b1pq-forme", "b1pq-usage", "b1ap-cod", "b1ap-avant", "b1rel-quique", "b1rel-oudont", "b1ge-forme", "b1ge-usage", "b1sj-forme", "b1sj-usage", "b1co-forme", "b1co-usage", "b1op-mode", "b1op-connect", "b1mr-cest", "b1mr-ce", "b1oc-oppo", "b1oc-conc", "b1in-registre", "b1in-mots", "b1vp-a", "b1vp-de", "b1ad-forme", "b1ad-place", "b1pe-trois", "b1pe-passe", "b1rc-ordre", "b1rc-avapres", "b1et-etudes", "b1et-travail", "b1ih-forme", "b1ih-usage", "b1ai-fond", "b1ai-coupe", "b1va-venait", "b1va-allait", "b1fs-forme", "b1fs-quand", "b1fp-choix", "b1fp-si", "b1cp-demander", "b1cp-conseil", "b1rg-forme", "b1rg-usage", "b1cj-sens", "b1cj-futur", "b1aa-prep", "b1aa-recit", "b1rs-intro", "b1rs-structure", "b1ae-oui", "b1ae-non", "b1ip-aff", "b1ip-neg", "b1cc-cod", "b1cc-coi", "b1y-lieu", "b1y-pers", "b1en-qte", "b1en-de", "b1pi-place", "b1pi-exc", "b1rc2-lequel", "b1rc2-contr", "b1cq-forme", "b1cq-indir", "b1pt-usage", "b1pt-reponse", "b1on-sens", "b1on-verbe", "b1to-adj", "b1to-pron", "b1pa-place", "b1pa-sens", "b1mm-choix", "b1mm-sup", "b1ng-mots", "b1ng-place", "b1si-etre", "b1si-autres", "b1ob-obl", "b1ob-int", "b1cs-conseil", "b1cs-suggest", "b1se-voc", "b1se-struct", "b1ad-accord", "b1ad-desac", "b1cd-indic", "b1cd-subj", "b1rf-expl", "b1rf-resume", "b1ex-mots", "b1ex-tel", "b1ca-mots", "b1ca-nonseul", "b1cl-annonce", "b1cl-position", "b1pp-prendre", "b1pp-donner", "b1sp-probleme", "b1sp-demande", "b1pm-demander", "b1pm-repondre", "b1pa-prop", "b1pa-rep", "b1lg-argent", "b1lg-demarches", "b1sa-symptomes", "b1sa-traitement", "b1en-probleme", "b1en-solution", "b1md-presse", "b1md-reseaux", "b1vi-probleme", "b1vi-solution", "b1cs-payer", "b1cs-apres", "b1rl-verbes", "b1rl-famille", "b1cc2-presenter", "b1cc2-avis", "b1ch-fraction", "b1ch-evolution", "b1la-ouverture", "b1la-cloture", "b1fd-voc", "b1fd-passif", "b1ei-humeur", "b1ei-autres", "b1rf2-noms", "b1rf2-verbes"];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ B1.2·1 ================================ */
E["b12-hypothese-si"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "L'hypothèse avec si",
  objetivo: {
    que: "Vas a formular hipótesis posibles e imaginarias con si, sin futuro ni condicional después de si.",
    corto: "Si tu as le temps, viens ! · Si j'avais le temps, je viendrais.",
    podras: ["Hipótesis posible: si + presente → presente, futuro o imperativo.", "Hipótesis imaginaria: si + imparfait → condicional.", "Escribir s'il (pero si elle, si on)."],
    iconos: ["ic2/bombilla", "ic2/estrella", "ic2/pregunta"],
    previos: ["Si + presente y futuro (A2, lección 61) y el condicional (B1.1, lección 7)."],
    capacidad: "Ahora imaginas y planeas con la estructura correcta."
  },
  requiere: R("sf-forme", "sf-sil", "b1co-forme"), recupera: ["sf-forme"],
  conceptos: {
    "b2si-possible": { n: "posible: si + presente → presente / futuro / imperativo (s'il pleut, on restera)", b: "gr" },
    "b2si-irreel": { n: "imaginaria: si + imparfait → condicional (si j'avais le temps, je viendrais); nunca futuro ni condicional tras si", b: "gr" }
  },
  video: {
    titulo: "Hipótesis con si", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "si…", seg: [
        { es: "Hola. Dos esquemas fijos para las hipótesis con si." } ] },
      { v: "dos",
        a: { tag: "posible", fr: "Si tu as le temps, viens !", es: "presente" },
        b: { tag: "imaginaria", fr: "Si j'avais le temps, je viendrais.", es: "imparfait + condicional" },
        seg: [ { es: "Puede pasar:", p: 1 }, { fr: "Si tu as le temps, viens !", p: 1 }, { es: "Es imaginario:", p: 2 }, { fr: "Si j'avais le temps, je viendrais.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si fuera ministro, protegería los bosques.»", o: ["Si j'étais ministre, je protégerais les forêts.", "Si je serais ministre, je protégerais les forêts."], a: 0,
        bien: "¡Sí! Si + imparfait.", mal: "Nunca condicional después de si.",
        seg: [ { es: "Pausa. Si fuera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["si tu as", "si j'avais", "je viendrais", "s'il", "si elle"], seg: [
        { es: "Si tuviera: si j'avais.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Si tuviera una beca", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo imaginan su futuro.",
    pj: PJ,
    lineas: [
      ["hugo", "Si tu es libre ce soir, appelle-moi.", "Si estás libre esta noche, llámame."],
      ["camila", "D'accord. Tu sais, si j'avais une bourse, j'étudierais à Lyon.", "De acuerdo. ¿Sabes? Si tuviera una beca, estudiaría en Lyon."],
      ["hugo", "Et si nous prenions le train au lieu de l'avion, nous polluerions moins.", "Y si tomáramos el tren en lugar del avión, contaminaríamos menos."],
      ["camila", "S'il pleut demain, nous annulerons la visite du château. Si j'avais le temps, je ferais du bénévolat.", "Si llueve mañana, cancelaremos la visita al castillo. Si tuviera tiempo, haría voluntariado."]
    ],
    fijate: "Fíjate: si tu es → appelle (posible); si j'avais → j'étudierais, si nous prenions → polluerions (imaginaria); s'il pleut → annulerons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos esquemas",
      idea: "Hipótesis posible: si + presente → presente, futuro o imperativo: S'il pleut, on restera ici. Si tu as besoin d'aide, demande. Hipótesis imaginaria: si + imparfait → condicional: Si j'avais le temps, je viendrais. Justo después de si nunca va futuro ni condicional. Si + il = s'il; pero si elle, si on. Recuerda: «si tuviera» = si j'avais.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Esquema"], [
        ["Si tu es libre, appelle-moi. · es", "Si estás libre, llámame.", "presente → imperativo"],
        ["S'il pleut, nous annulerons la visite. · annulerons · S'il", "Si llueve, cancelaremos la visita.", "presente → futuro"],
        ["Si vous oubliez votre mot de passe, cliquez ici. · oubliez", "Si olvida su contraseña, haga clic aquí.", "presente → imperativo"],
        ["Si j'avais une bourse, j'étudierais à Lyon. · avais", "Si tuviera una beca, estudiaría en Lyon.", "imparfait → condicional"],
        ["Si j'étais ministre… · étais", "Si fuera ministro…", "imparfait"],
        ["nous polluerions moins · polluerions", "contaminaríamos menos", "condicional"],
        ["Si j'étais riche, j'achèterais une maison.", "Si fuera rico, compraría una casa.", "imaginaria"],
        ["si elle · si on · s'il", "si ella · si uno · si él", "elisión solo con il"]
      ]],
      ej: [["Si tu as le temps, viens !", "Si tienes tiempo, ¡ven!"], ["Si j'avais le temps, je viendrais.", "Si tuviera tiempo, vendría."], ["S'il pleut, on restera ici.", "Si llueve, nos quedaremos aquí."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Si j'aurais le temps…", "Si j'avais le temps…", "Nunca condicional después de si."], ["Si je serais ministre, je protégerais les forêts.", "Si j'étais ministre, je protégerais les forêts.", "Si + imparfait."], ["S'il pleuvra demain…", "S'il pleut demain…", "Nunca futuro después de si."]] }
  ],
  ejemplos: [
    { sit: "«Si tienes tiempo, ¡ven!»", resp: "Si tu as le temps, viens !", pasos: ["Posible: presente + imperativo."], porque: "Posible." },
    { sit: "«Si tuviera tiempo, vendría.»", resp: "Si j'avais le temps, je viendrais.", pasos: ["imparfait + condicional."], porque: "Imaginaria." },
    { sit: "«Si hace buen tiempo el sábado, iremos al parque.»", resp: "S'il fait beau samedi, nous irons au parc.", pasos: ["s'il + presente + futuro."], porque: "Posible." }
  ],
  comprueba: [
    { q: "Después de si nunca va…", o: ["futuro ni condicional", "presente"], a: 0, b: "gr", porque: "Regla." },
    { q: "«Si tuviera» se dice…", o: ["si j'avais", "si j'aurais"], a: 0, b: "gr", porque: "imparfait." },
    { q: "Si + imparfait va con…", o: ["condicional", "futuro"], a: 0, b: "gr", porque: "Imaginaria." }
  ],
  practica: [
    { fase: "guiada", c: ["b2si-possible", "b2si-irreel"], k: "sort", ask: "¿Probable o imaginaria?", q: "Clasifica.", cats: ["Probable (si + présent)", "Imaginaria (si + imparfait)"], items: [["Si tu viens, je serai content.", 0], ["S'il fait beau, on sort.", 0], ["Si vous perdez votre passeport, contactez le consulat.", 0], ["Si j'étais riche, j'achèterais une maison.", 1], ["Si nous habitions à Montréal, nous parlerions français tous les jours.", 1], ["Si elle avait un chien, elle se promènerait plus.", 1]], pista: "Presente o imparfait tras si.", why: "Esquemas." },
    { fase: "guiada", c: ["b2si-possible"], k: "choice", ask: "«Si estás libre esta noche, llámame.»", q: "«Si tu ___ libre ce soir, appelle-moi.»", o: ["es", "seras", "serais"], a: 0, pista: "Presente.", why: "<b>es</b>." },
    { fase: "guiada", c: ["b2si-irreel"], k: "fill", ask: "Conjuga avoir.", q: "Si j'___ une bourse, j'étudierais à Lyon.", acc: ["avais"], pista: "imparfait.", why: "<b>avais</b>." },
    { fase: "indep", c: ["b2si-possible"], k: "fill", ask: "Conjuga annuler.", q: "S'il pleut demain, nous ___ la visite du château.", acc: ["annulerons"], why: "<b>annulerons</b>." },
    { fase: "indep", c: ["b2si-irreel"], k: "spot", ask: "Encuentra el error.", s: "Si je [serais] ministre , je protégerais les forêts .", fix: "étais", why: "<b>étais</b>." },
    { fase: "indep", c: ["b2si-irreel"], k: "choice", ask: "«Si tomáramos el tren, contaminaríamos menos.»", q: "«Si nous prenions le train au lieu de l'avion, nous ___ moins.»", o: ["polluerions", "polluerons", "polluons"], a: 0, why: "<b>polluerions</b>." },
    { fase: "aplica", c: ["b2si-possible", "b2si-irreel"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Si tu as besoin d'aide,", "demande à la secrétaire."], ["Si j'étais toi,", "je parlerais au professeur."], ["Si le dossier est complet,", "vous recevrez votre visa en deux semaines."], ["Si on avait une voiture,", "on irait à la mer ce week-end."]], why: "Esquemas." },
    { fase: "aplica", c: ["b2si-possible"], k: "fill", ask: "Conjuga oublier.", q: "Si vous ___ votre mot de passe, cliquez sur « Mot de passe oublié ».", acc: ["oubliez"], why: "<b>oubliez</b>." },
    { fase: "dominio", c: ["b2si-possible"], k: "choice", ask: "«Si hace buen tiempo el sábado, iremos al parque.»", q: "«___ fait beau samedi, nous irons au parc.»", o: ["S'il", "Si il"], a: 0, why: "<b>S'il</b>." },
    { fase: "dominio", c: ["b2si-irreel"], k: "order", ask: "Ordena: «Si tuviera tiempo, haría voluntariado».", tokens: ["Si j'avais le temps,", "je ferais", "du bénévolat."], why: "<b>Si j'avais le temps, je ferais du bénévolat.</b>" },
    { fase: "dominio", c: ["b2si-possible", "b2si-irreel"], k: "listen", say: "Si j'avais une bourse, j'étudierais à Lyon.", acc: ["Si j'avais une bourse, j'étudierais à Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Si j'avais une bourse, j'étudierais à Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Montréal"], previo: [] }
};

E["b12-discours-indirect"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le discours indirect au présent",
  objetivo: {
    que: "Vas a contar lo que alguien dice o pregunta con el verbo introductor en presente.",
    corto: "Il me demande si je viens. · Il me dit de venir.",
    podras: ["Pasar una afirmación: il dit que…", "Pasar preguntas: si (sí / no), ce que, ce qui, où, quand…", "Pasar órdenes: dire de + infinitivo; y adaptar los posesivos y pronombres."],
    iconos: ["ic2/microfono", "ic2/pregunta", "ic2/amigos"],
    previos: ["Ce qui, ce que (B1.1, lección 34) y las preguntas (B1.1, lección 11)."],
    capacidad: "Ahora cuentas conversaciones sin citarlas palabra por palabra."
  },
  requiere: R("b1cq-indir", "b1in-mots"), recupera: ["b1cq-indir"],
  conceptos: {
    "b2di-question": { n: "pregunta sí / no → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui; où, quand, pourquoi se mantienen", b: "gr" },
    "b2di-ordre": { n: "afirmación → que; orden → de + infinitivo (il me dit de venir); cambian posesivos y pronombres", b: "gr" }
  },
  video: {
    titulo: "Discurso indirecto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "il dit que…", seg: [
        { es: "Hola. Para contar lo que otro dice o pregunta." } ] },
      { v: "frase", filas: [
          { nota: "pregunta", p: 1, partes: [["Il me demande si je viens.", "-", 1]] },
          { nota: "qué", p: 2, partes: [["Elle demande ce que tu veux.", "-", 2]] },
          { nota: "orden", p: 3, partes: [["Le prof nous dit de lire le texte.", "-", 3]] } ], seg: [
        { fr: "Il me demande si je viens.", p: 1 }, { fr: "Elle demande ce que tu veux.", p: 2 }, { fr: "Le prof nous dit de lire le texte.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La secretaria me pregunta qué quiero.»", o: ["La secrétaire me demande ce que je veux.", "La secrétaire me demande qu'est-ce que je veux."], a: 0,
        bien: "¡Sí! Qu'est-ce que → ce que.", mal: "En estilo indirecto: ce que.",
        seg: [ { es: "Pausa. Qué quiero." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il dit que", "il demande si", "ce que", "ce qui", "il me dit de venir"], seg: [
        { es: "Con el verbo en presente, los tiempos no cambian.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la prefectura", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo su cita en la prefectura.",
    pj: PJ,
    lineas: [
      ["camila", "L'agent me demande si j'ai mon passeport.", "El agente me pregunta si tengo mi pasaporte."],
      ["hugo", "Et après ?", "¿Y después?"],
      ["camila", "Le fonctionnaire nous dit de remplir ce formulaire. Il me demande pourquoi je suis en retard !", "El funcionario nos dice que llenemos este formulario. ¡Me pregunta por qué llegué tarde!"],
      ["hugo", "Le professeur veut savoir ce que nous étudions. Et mon cousin me demande où je vais en vacances.", "El profesor quiere saber qué estudiamos. Y mi primo me pregunta adónde voy de vacaciones."]
    ],
    fijate: "Fíjate: demande si, dit de remplir, demande pourquoi, veut savoir ce que, demande où."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Pasar al discurso indirecto",
      idea: "Con el verbo introductor en presente (il dit, il demande), los tiempos no cambian. Afirmación: « Je viens. » → Il dit qu'il vient. Pregunta sí / no → si: « Tu viens ? » → Il demande si je viens. Qu'est-ce que → ce que; qu'est-ce qui → ce qui: Il demande ce que j'apporte. Où, quand, pourquoi, comment se mantienen: Il demande quand je viens. Orden → de + infinitivo: « Viens ! » → Il me dit de venir; negativa: de ne pas publier. Cambian los pronombres y posesivos: « mon temps » → son temps.",
      intro: "Toca cada frase.",
      tabla: [["Directo", "Indirecto", "Regla"], [
        ["« Tu viens ? »", "Il demande si je viens. · si", "sí / no → si"],
        ["« Qu'est-ce que tu apportes ? »", "Il demande ce que j'apporte. · ce que", "qu'est-ce que → ce que"],
        ["« Quand viens-tu ? »", "Il demande quand je viens.", "se mantiene"],
        ["« Je viens. »", "Il dit qu'il vient.", "que"],
        ["« Viens ! »", "Il me dit de venir. · de", "orden → de + infinitivo"],
        ["« Ne publie pas cette photo ! »", "Elle me dit de ne pas publier cette photo. · de ne pas publier", "orden negativa"],
        ["« Je perds mon temps. »", "Léa dit qu'elle perd son temps. · son", "posesivo"],
        ["« Où vas-tu en vacances ? »", "Il me demande où je vais en vacances. · où je vais en vacances", "se mantiene"]
      ]],
      ej: [["Il me demande si je viens.", "Me pregunta si vengo."], ["Elle demande ce que tu veux.", "Pregunta qué quieres."], ["Le prof nous dit de lire le texte.", "El profe nos dice que leamos el texto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il me demande qu'est-ce que je veux.", "Il me demande ce que je veux.", "qu'est-ce que → ce que."], ["Il me dit que je viens. (orden)", "Il me dit de venir.", "Orden: de + infinitivo."], ["Il demande est-ce que tu viens.", "Il demande si tu viens.", "Sí / no → si."]] }
  ],
  ejemplos: [
    { sit: "« Tu as ton passeport ? »", resp: "Il me demande si j'ai mon passeport.", pasos: ["sí / no → si."], porque: "Pregunta." },
    { sit: "« Qu'est-ce que vous étudiez ? »", resp: "Il veut savoir ce que nous étudions.", pasos: ["qu'est-ce que → ce que."], porque: "Pregunta." },
    { sit: "« Remplissez ce formulaire ! »", resp: "Il nous dit de remplir ce formulaire.", pasos: ["Orden → de + infinitivo."], porque: "Orden." }
  ],
  comprueba: [
    { q: "Una pregunta sí / no pasa con…", o: ["si", "que"], a: 0, b: "gr", porque: "Il demande si…" },
    { q: "Qu'est-ce que pasa a…", o: ["ce que", "qu'est-ce que"], a: 0, b: "gr", porque: "Indirecto." },
    { q: "Una orden pasa con…", o: ["de + infinitivo", "que + presente"], a: 0, b: "gr", porque: "Il me dit de venir." }
  ],
  practica: [
    { fase: "guiada", c: ["b2di-question", "b2di-ordre"], k: "sort", ask: "¿Cómo pasa al indirecto?", q: "Clasifica.", cats: ["→ si", "→ ce que", "→ de + infinitivo"], items: [["« Tu as faim ? »", 0], ["« Est-ce que le bus est parti ? »", 0], ["« Qu'est-ce que tu lis ? »", 1], ["« Que veux-tu ? »", 1], ["« Qu'est-ce que vous cherchez ? »", 1], ["« Ferme la porte. »", 2], ["« Envoyez vos documents. »", 2]], pista: "¿Sí / no, qué u orden?", why: "Transformaciones." },
    { fase: "guiada", c: ["b2di-question"], k: "choice", ask: "«El agente me pregunta si tengo mi pasaporte.»", q: "«L'agent me demande ___ j'ai mon passeport.»", o: ["si", "que", "ce que"], a: 0, pista: "Sí / no.", why: "<b>si</b>." },
    { fase: "guiada", c: ["b2di-question"], k: "fill", ask: "Escribe «qué» (indirecto).", q: "Le professeur veut savoir ___ nous étudions.", acc: ["ce que"], pista: "qu'est-ce que → …", why: "<b>ce que</b>." },
    { fase: "indep", c: ["b2di-question"], k: "spot", ask: "Encuentra el error.", s: "La secrétaire me demande [qu'est-ce] que je veux .", fix: "ce", why: "<b>ce que</b>." },
    { fase: "indep", c: ["b2di-ordre"], k: "fill", ask: "Escribe la palabra para la orden.", q: "Le fonctionnaire nous dit ___ remplir ce formulaire.", acc: ["de"], why: "<b>dit de</b>." },
    { fase: "indep", c: ["b2di-ordre"], k: "choice", ask: "« Ne publie pas cette photo ! » → indirecto.", q: "«Mon amie me dit ___ cette photo.»", o: ["de ne pas publier", "que je ne publie pas"], a: 0, why: "<b>de ne pas publier</b>." },
    { fase: "aplica", c: ["b2di-question", "b2di-ordre"], k: "match", ask: "Une cada frase directa con su versión indirecta.", q: "Directo → indirecto", pairs: [["« Tu viens ? »", "Il demande si je viens."], ["« Viens ! »", "Il me dit de venir."], ["« Je viens. »", "Il dit qu'il vient."], ["« Quand viens-tu ? »", "Il demande quand je viens."], ["« Qu'est-ce que tu apportes ? »", "Il demande ce que j'apporte."]], why: "Transformaciones." },
    { fase: "aplica", c: ["b2di-ordre"], k: "fill", ask: "« Je perds mon temps. » → Léa dit…", q: "Léa dit qu'elle perd ___ temps sur les réseaux sociaux.", acc: ["son"], why: "<b>son</b>." },
    { fase: "dominio", c: ["b2di-question"], k: "choice", ask: "« Où vas-tu en vacances ? » → Mon cousin me demande…", q: "«Mon cousin me demande ___.»", o: ["où je vais en vacances", "où vas-tu en vacances"], a: 0, why: "Sin inversión." },
    { fase: "dominio", c: ["b2di-question"], k: "order", ask: "Ordena: «Me pregunta por qué llegué tarde».", tokens: ["Il me demande", "pourquoi", "je suis en retard."], why: "<b>Il me demande pourquoi je suis en retard.</b>" },
    { fase: "dominio", c: ["b2di-question", "b2di-ordre"], k: "listen", say: "Le professeur veut savoir ce que nous étudions.", acc: ["Le professeur veut savoir ce que nous étudions."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le professeur veut savoir ce que nous étudions.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Léa"], previo: [] }
};

E["b12-pronoms-doubles"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les doubles pronoms",
  objetivo: {
    que: "Vas a combinar dos pronombres en el orden correcto: je te le donne, je le lui donne, je t'en donne.",
    corto: "Je te le donne. · Je le lui ai prêté.",
    podras: ["Poner me, te, nous, vous antes de le, la, les.", "Poner le, la, les antes de lui, leur.", "Poner y y en al final; y usar el imperativo afirmativo: donne-le-moi."],
    iconos: ["ic2/engranaje", "ic2/regalo", "ic2/lapiz"],
    previos: ["COD y COI (B1.1, lección 29), el imperativo con pronombres (B1.1, lección 28) y los pronombres con infinitivo (B1.1, lección 32)."],
    capacidad: "Ahora combinas pronombres como un francés."
  },
  requiere: R("b1cc-cod", "b1cc-coi", "b1ip-aff", "b1pi-place"), recupera: ["b1cc-coi"],
  conceptos: {
    "b2pd-ordre": { n: "orden: me / te / nous / vous → le / la / les → lui / leur → y → en", b: "gr" },
    "b2pd-temps": { n: "en tiempo compuesto y con infinitivo: je te les ai rendues, je vais vous les expliquer; concordancia con le / la / les", b: "gr" }
  },
  video: {
    titulo: "Dos pronombres", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "te le · le lui", seg: [
        { es: "Hola. Cuando hay dos pronombres, el orden es fijo." } ] },
      { v: "frase", filas: [
          { nota: "me/te + le", p: 1, partes: [["Je te le donne.", "-", 1]] },
          { nota: "le + lui", p: 2, partes: [["Je le lui ai prêté.", "-", 2]] },
          { nota: "en al final", p: 3, partes: [["Je t'en donne.", "-", 3]] } ], seg: [
        { fr: "Je te le donne.", p: 1 }, { fr: "Je le lui ai prêté.", p: 2 }, { fr: "Je t'en donne.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿El diccionario? Te lo presto.»", o: ["Le dictionnaire ? Je te le prête.", "Le dictionnaire ? Je le te prête."], a: 0,
        bien: "¡Sí! Te primero.", mal: "me / te / nous / vous van primero.",
        seg: [ { es: "Pausa. Te lo presto." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je te le donne", "je le lui donne", "je la leur envoie", "je t'en donne", "donne-le-moi"], seg: [
        { es: "Lui y leur, después de le, la, les.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Préstamos", img: "bg-biblioteca", yo: "camila",
    escena: "Camila y Hugo se prestan cosas.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as mon dictionnaire ?", "¿Tienes mi diccionario?"],
      ["camila", "Le dictionnaire ? Je te le prête volontiers. Et tes livres ? Oui, je te les ai rendues… euh, rendus ce matin.", "¿El diccionario? Te lo presto con gusto. ¿Y tus libros? Sí, te los devolví esta mañana."],
      ["hugo", "La nouvelle adresse ? Je la leur ai envoyée hier. Et les règles, je vais vous les expliquer.", "¿La nueva dirección? Se la envié ayer. Y las reglas, se las voy a explicar."],
      ["camila", "Tu as la clé ? Donne-la-moi, s'il te plaît. Et ces vidéos ? Ne me les montre pas !", "¿Tienes la llave? Dámela, por favor. ¿Y esos videos? ¡No me los muestres!"]
    ],
    fijate: "Fíjate: te le prête, te les ai rendus, la leur ai envoyée, vous les expliquer, donne-la-moi, ne me les montre pas."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El orden fijo",
      idea: "Delante del verbo: me / te / nous / vous → le / la / les → lui / leur → y → en. Je te le donne. Je le lui donne. Je la leur envoie. Je t'en donne. Je lui en ai parlé. En tiempo compuesto, los pronombres van delante del auxiliar y el participio concuerda con le / la / les: je te les ai rendues (les photos). Con infinitivo, delante del infinitivo: je vais vous les expliquer. Imperativo afirmativo: verbo-COD-COI: donne-le-moi; negativo, orden normal: ne me les montre pas.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Orden"], [
        ["Je te le prête. · te le", "Te lo presto.", "te + le"],
        ["Je te les ai rendues. · te les", "Te las devolví.", "te + les"],
        ["Je le lui ai prêté.", "Se lo presté.", "le + lui"],
        ["Je la leur ai envoyée. · la leur", "Se la envié (a ellos).", "la + leur"],
        ["Je vais vous les expliquer. · vous les", "Se las voy a explicar.", "vous + les"],
        ["Je lui en ai parlé. · lui en", "Le hablé de eso.", "lui + en"],
        ["Je t'en donne.", "Te doy (de eso).", "te + en"],
        ["Donne-la-moi ! · Donne-le-moi !", "¡Dámela! · ¡Dámelo!", "imperativo"],
        ["Ne me les montre pas ! · Il ne me l'a pas dit.", "¡No me los muestres! · No me lo dijo.", "negativo"],
        ["me · te · nous · vous / lui · leur · y · en", "", "antes / después de le, la, les"]
      ]],
      ej: [["Je te le donne.", "Te lo doy."], ["Je le lui ai prêté.", "Se lo presté."], ["Donne-le-moi !", "¡Dámelo!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je le te donne.", "Je te le donne.", "me / te / nous / vous primero."], ["Je lui le donne.", "Je le lui donne.", "le / la / les antes de lui / leur."], ["Ces photos ? Ma sœur me le a envoyées.", "Ces photos ? Ma sœur me les a envoyées.", "Plural: les."]] }
  ],
  ejemplos: [
    { sit: "«¿El diccionario? Te lo presto.»", resp: "Je te le prête.", pasos: ["te + le."], porque: "Orden." },
    { sit: "«Se la envié (la dirección, a ellos).»", resp: "Je la leur ai envoyée.", pasos: ["la + leur; concordancia."], porque: "Orden." },
    { sit: "«Le hablé de eso la semana pasada.»", resp: "Je lui en ai parlé la semaine dernière.", pasos: ["lui + en."], porque: "En al final." }
  ],
  comprueba: [
    { q: "«Te lo doy» se dice…", o: ["Je te le donne.", "Je le te donne."], a: 0, b: "gr", porque: "te primero." },
    { q: "«Se lo doy (a él)» se dice…", o: ["Je le lui donne.", "Je lui le donne."], a: 0, b: "gr", porque: "le antes de lui." },
    { q: "En va siempre…", o: ["al final", "al principio"], a: 0, b: "gr", porque: "Orden." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pd-ordre"], k: "sort", ask: "¿Antes o después de le / la / les?", q: "Clasifica.", cats: ["Antes de le / la / les", "Después de le / la / les"], items: [["me", 0], ["te", 0], ["nous", 0], ["vous", 0], ["lui", 1], ["leur", 1], ["y", 1], ["en", 1]], pista: "Personas 1.ª y 2.ª primero.", why: "Orden." },
    { fase: "guiada", c: ["b2pd-ordre"], k: "choice", ask: "«¿El diccionario? Te lo presto con gusto.»", q: "«Le dictionnaire ? Je ___ prête volontiers.»", o: ["te le", "le te"], a: 0, pista: "te primero.", why: "<b>te le</b>." },
    { fase: "guiada", c: ["b2pd-ordre"], k: "choice", ask: "«¿La nueva dirección? Se la envié ayer (a ellos).»", q: "«La nouvelle adresse ? Je ___ ai envoyée hier.»", o: ["la leur", "leur la"], a: 0, pista: "la antes de leur.", why: "<b>la leur</b>." },
    { fase: "indep", c: ["b2pd-temps"], k: "fill", ask: "«Te las devolví» (les notes).", q: "— Oui, je ___ ai rendues ce matin.", acc: ["te les"], why: "<b>te les</b>." },
    { fase: "indep", c: ["b2pd-temps"], k: "spot", ask: "Encuentra el error.", s: "Ces photos ? Ma sœur me [le] a envoyées hier .", fix: "les", why: "<b>me les</b>." },
    { fase: "indep", c: ["b2pd-ordre"], k: "choice", ask: "«¿Tienes la llave? ¡Dámela!»", q: "«Tu as la clé ? ___, s'il te plaît !»", o: ["Donne-la-moi", "Donne-moi-la"], a: 0, why: "<b>Donne-la-moi</b>." },
    { fase: "aplica", c: ["b2pd-temps"], k: "fill", ask: "«Se las voy a explicar» (a ustedes, les règles).", q: "Les règles ? Je vais ___ expliquer.", acc: ["vous les"], why: "<b>vous les</b>." },
    { fase: "aplica", c: ["b2pd-ordre"], k: "fill", ask: "«Le hablé de eso».", q: "— Oui, je ___ ai parlé la semaine dernière.", acc: ["lui en"], why: "<b>lui en</b>." },
    { fase: "dominio", c: ["b2pd-ordre"], k: "choice", ask: "«¿Esos videos? ¡No me los muestres!»", q: "«Ces vidéos ? ___ !»", o: ["Ne me les montre pas", "Ne montre-les-moi pas"], a: 0, why: "Negativo: delante." },
    { fase: "dominio", c: ["b2pd-ordre", "b2pd-temps"], k: "order", ask: "Ordena: «No me lo dijo».", tokens: ["Il ne", "me l'a", "pas dit."], why: "<b>Il ne me l'a pas dit.</b>" },
    { fase: "dominio", c: ["b2pd-ordre", "b2pd-temps"], k: "listen", say: "Le dictionnaire ? Je te le prête volontiers.", acc: ["Le dictionnaire ? Je te le prête volontiers."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le dictionnaire ? Je te le prête volontiers.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·2 · Tiempo, causa y voz pasiva ================================ */
E["b12-expression-temps"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer le temps : depuis, il y a, pendant, en, dans, pour",
  objetivo: {
    que: "Vas a elegir entre il y a, depuis, pendant, en, dans y pour según si la acción terminó, sigue o es futura.",
    corto: "il y a deux jours · depuis 2020 · dans une semaine.",
    podras: ["Usar il y a (hace) y depuis (desde, la acción sigue).", "Usar pendant (durante) y pour (duración prevista).", "Usar en (tiempo que se tarda) y dans (dentro de, futuro)."],
    iconos: ["ic2/reloj-arena", "ic2/rayo", "ic2/pergamino"],
    previos: ["Depuis, pendant, il y a (A2, lección 27) y avant, après, au bout de (B1.1, lección 25)."],
    capacidad: "Ahora dices cuándo y cuánto sin confundir las preposiciones."
  },
  requiere: R("dp-depuis", "dp-pendant", "b1aa-prep"), recupera: ["dp-depuis"],
  conceptos: {
    "b2et-passe": { n: "il y a = hace (terminado); depuis = desde (sigue); pendant = durante", b: "gr" },
    "b2et-futur": { n: "en = tiempo que se tarda; dans = dentro de (futuro); pour = duración prevista (partir pour)", b: "gr" }
  },
  video: {
    titulo: "Preposiciones de tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "il y a · depuis · dans", seg: [
        { es: "Hola. La clave: ¿terminó, sigue o va a pasar?" } ] },
      { v: "frase", filas: [
          { nota: "terminó", p: 1, partes: [["Je suis arrivé il y a deux jours.", "-", 1]] },
          { nota: "sigue", p: 2, partes: [["J'habite ici depuis 2020.", "-", 2]] },
          { nota: "futuro", p: 3, partes: [["Je pars dans une semaine.", "-", 3]] } ], seg: [
        { fr: "Je suis arrivé il y a deux jours.", p: 1 }, { fr: "J'habite ici depuis 2020.", p: 2 }, { fr: "Je pars dans une semaine.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Vivió en Lyon tres años, luego volvió.»", o: ["Elle a vécu à Lyon pendant trois ans, puis elle est rentrée.", "Elle a vécu à Lyon depuis trois ans, puis elle est rentrée."], a: 0,
        bien: "¡Sí! Terminó: pendant.", mal: "La acción terminó: pendant.",
        seg: [ { es: "Pausa. Durante tres años." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il y a", "depuis", "pendant", "pour", "en", "dans"], seg: [
        { es: "En: cuánto tardas. Dans: cuándo empieza.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La visa", img: "bg-universidad", yo: "camila",
    escena: "Camila cuenta sus trámites de visa.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai obtenu mon visa il y a trois semaines. Nous attendions la réponse depuis un mois !", "Obtuve mi visa hace tres semanas. ¡Esperábamos la respuesta desde hacía un mes!"],
      ["hugo", "J'ai rempli le formulaire en dix minutes : c'était très simple.", "Llené el formulario en diez minutos: era muy sencillo."],
      ["camila", "Le bus pour l'aéroport part dans vingt minutes. Ma cousine part en France pour un semestre.", "El bus al aeropuerto sale dentro de veinte minutos. Mi prima se va a Francia por un semestre."],
      ["hugo", "Tu habites ici depuis quand ? Moi, j'apprends le français depuis deux ans.", "¿Desde cuándo vives aquí? Yo aprendo francés desde hace dos años."]
    ],
    fijate: "Fíjate: il y a trois semaines, depuis un mois, en dix minutes, dans vingt minutes, pour un semestre, depuis deux ans."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Seis preposiciones",
      idea: "il y a = hace (momento pasado, acción terminada): je suis arrivé il y a deux jours. depuis = desde / desde hace (la acción sigue hasta hoy): j'attends depuis un mois. pendant = durante (duración de una acción, terminada o no): j'ai dansé pendant toute la nuit. pour = duración prevista con partir, venir, aller: je pars pour un semestre. en = tiempo necesario para hacer algo: j'ai fini en dix minutes. dans = dentro de (momento futuro): je pars dans une semaine.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["il y a trois semaines · il y a", "hace tres semanas", "momento pasado"],
        ["depuis un mois · depuis 2020 · depuis", "desde hace un mes · desde 2020", "sigue hasta hoy"],
        ["pendant trois ans · pendant toute la nuit", "durante tres años · durante toda la noche", "duración"],
        ["pour un semestre · pour", "por un semestre", "duración prevista"],
        ["en dix minutes · en", "en diez minutos", "tiempo que se tarda"],
        ["dans vingt minutes · dans une semaine · dans", "dentro de veinte minutos · de una semana", "momento futuro"],
        ["Il neige depuis ce matin. · Je suis malade depuis lundi.", "Nieva desde esta mañana. · Estoy enfermo desde el lunes.", "depuis"],
        ["Le cours a duré trois heures. · Nous avons dansé toute la nuit.", "La clase duró tres horas. · Bailamos toda la noche.", "duración"]
      ]],
      ej: [["Je suis arrivé il y a deux jours.", "Llegué hace dos días."], ["J'habite ici depuis 2020.", "Vivo aquí desde 2020."], ["Je pars dans une semaine.", "Me voy dentro de una semana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis arrivé depuis deux jours.", "Je suis arrivé il y a deux jours.", "Acción terminada → il y a."], ["Elle a vécu à Lyon depuis trois ans, puis elle est rentrée.", "Elle a vécu à Lyon pendant trois ans, puis elle est rentrée.", "Terminó: pendant."], ["Je pars en une semaine. (= dentro de)", "Je pars dans une semaine.", "Futuro: dans."]] }
  ],
  ejemplos: [
    { sit: "«Obtuve la visa hace tres semanas.»", resp: "J'ai obtenu mon visa il y a trois semaines.", pasos: ["Terminado: il y a."], porque: "Pasado." },
    { sit: "«Esperamos desde hace un mes.»", resp: "Nous attendons depuis un mois.", pasos: ["Sigue: depuis + presente."], porque: "Continuidad." },
    { sit: "«Lo llené en diez minutos.»", resp: "Je l'ai rempli en dix minutes.", pasos: ["Tiempo que se tarda: en."], porque: "Duración." }
  ],
  comprueba: [
    { q: "Para una acción que sigue hasta hoy se usa…", o: ["depuis", "il y a"], a: 0, b: "gr", porque: "Continuidad." },
    { q: "«Dentro de una semana» se dice…", o: ["dans une semaine", "en une semaine"], a: 0, b: "gr", porque: "Futuro." },
    { q: "«Lo hice en diez minutos» usa…", o: ["en", "dans"], a: 0, b: "gr", porque: "Tiempo que se tarda." }
  ],
  practica: [
    { fase: "guiada", c: ["b2et-passe", "b2et-futur"], k: "sort", ask: "¿Depuis, pendant o dans?", q: "Clasifica.", cats: ["depuis", "pendant", "dans"], items: [["Il neige ___ ce matin.", 0], ["Je suis malade ___ lundi.", 0], ["Nous avons dansé ___ toute la nuit.", 1], ["Le cours a duré ___ trois heures.", 1], ["Les examens commencent ___ une semaine.", 2], ["Je te rappelle ___ cinq minutes.", 2]], pista: "¿Sigue, duró o será?", why: "Preposiciones." },
    { fase: "guiada", c: ["b2et-passe"], k: "choice", ask: "«Obtuve mi visa hace tres semanas.»", q: "«J'ai obtenu mon visa ___ trois semaines.»", o: ["il y a", "depuis", "dans"], a: 0, pista: "Terminado.", why: "<b>il y a</b>." },
    { fase: "guiada", c: ["b2et-passe"], k: "choice", ask: "«Esperamos la respuesta desde hace un mes.»", q: "«Nous attendons la réponse de l'ambassade ___ un mois.»", o: ["depuis", "il y a", "pendant"], a: 0, pista: "Sigue.", why: "<b>depuis</b>." },
    { fase: "indep", c: ["b2et-futur"], k: "fill", ask: "«dentro de veinte minutos»", q: "Le bus pour l'aéroport part ___ vingt minutes.", acc: ["dans"], why: "<b>dans</b>." },
    { fase: "indep", c: ["b2et-futur"], k: "fill", ask: "«en diez minutos» (tiempo que tardé)", q: "J'ai rempli le formulaire ___ dix minutes : c'était très simple.", acc: ["en"], why: "<b>en</b>." },
    { fase: "indep", c: ["b2et-passe"], k: "spot", ask: "Encuentra el error.", s: "Elle a vécu à Lyon [depuis] trois ans , puis elle est rentrée en Colombie .", fix: "pendant", why: "<b>pendant</b>." },
    { fase: "aplica", c: ["b2et-passe", "b2et-futur"], k: "match", ask: "Une cada preposición con su uso.", q: "Preposición → uso", pairs: [["depuis", "acción que continúa hasta hoy"], ["il y a", "momento del pasado (hace)"], ["dans", "momento del futuro (dentro de)"], ["en", "tiempo necesario para hacer algo"], ["pendant", "duración de una acción"], ["pour", "duración prevista (partir, venir…)"]], why: "Usos." },
    { fase: "aplica", c: ["b2et-futur"], k: "fill", ask: "«por un semestre» (partir)", q: "Ma cousine part en France ___ un semestre.", acc: ["pour"], why: "<b>pour</b>." },
    { fase: "dominio", c: ["b2et-passe"], k: "choice", ask: "«—¿Desde cuándo vives aquí? —Desde enero.»", q: "«— Tu habites ici ___ quand ? — Depuis janvier.»", o: ["depuis", "il y a"], a: 0, why: "<b>depuis quand</b>." },
    { fase: "dominio", c: ["b2et-passe"], k: "order", ask: "Ordena: «Aprendo francés desde hace dos años».", tokens: ["J'apprends", "le français", "depuis deux ans."], why: "<b>J'apprends le français depuis deux ans.</b>" },
    { fase: "dominio", c: ["b2et-passe", "b2et-futur"], k: "listen", say: "Le bus pour l'aéroport part dans vingt minutes.", acc: ["Le bus pour l'aéroport part dans vingt minutes.", "Le bus pour l'aéroport part dans 20 minutes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le bus pour l'aéroport part dans vingt minutes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Colombie"], previo: [] }
};

E["b12-cause-consequence"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer la cause et la conséquence",
  objetivo: {
    que: "Vas a explicar por qué pasa algo y qué resulta, con el conector adecuado según lo que sigue.",
    corto: "grâce à · à cause de · comme · donc · si bien que.",
    podras: ["Expresar la causa con una frase: parce que, car, comme (al inicio).", "Expresar la causa con un nombre: grâce à (positiva), à cause de (negativa), en raison de.", "Expresar la consecuencia: donc, alors, c'est pourquoi, si bien que."],
    iconos: ["ic2/bombilla", "ic2/rayo", "ic2/engranaje"],
    previos: ["La causa (A2, lección 62), la consecuencia (A2, lección 63) y opinar (B1.1, lección 8)."],
    capacidad: "Ahora argumentas con causas y consecuencias claras."
  },
  requiere: R("ca3-frase", "ca3-nom", "cs2-mots", "b1op-connect"), recupera: ["ca3-nom"],
  conceptos: {
    "b2cc-cause": { n: "causa + frase: parce que, car, comme (al inicio) / + nombre: grâce à, à cause de, en raison de", b: "gr" },
    "b2cc-csq": { n: "consecuencia: donc, alors, c'est pourquoi, si bien que", b: "gr" }
  },
  video: {
    titulo: "Causa y consecuencia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "grâce à · à cause de", seg: [
        { es: "Hola. ¿Por qué? ¿Y qué resulta?" } ] },
      { v: "frase", filas: [
          { nota: "causa positiva", p: 1, partes: [["J'ai réussi grâce à mon professeur.", "-", 1]] },
          { nota: "al inicio", p: 2, partes: [["Comme il pleuvait, je suis resté.", "-", 2]] },
          { nota: "consecuencia", p: 3, partes: [["Il était malade, donc il n'est pas venu.", "-", 3]] } ], seg: [
        { fr: "J'ai réussi grâce à mon professeur.", p: 1 }, { fr: "Comme il pleuvait, je suis resté.", p: 2 }, { fr: "Il était malade, donc il n'est pas venu.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aprobé gracias a mi profesor.»", o: ["J'ai réussi grâce à mon professeur.", "J'ai réussi à cause de mon professeur."], a: 0,
        bien: "¡Sí! Causa positiva: grâce à.", mal: "À cause de es para lo negativo.",
        seg: [ { es: "Pausa. Gracias a." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["parce que", "car", "comme", "grâce à", "à cause de", "donc", "c'est pourquoi"], seg: [
        { es: "Solo parce que responde a pourquoi.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La huelga", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo comentan las noticias de la ciudad.",
    pj: PJ,
    lineas: [
      ["camila", "Comme il y avait une grève, les cours ont été annulés.", "Como había una huelga, se cancelaron las clases."],
      ["hugo", "Et la route est fermée à cause de la tempête. Il a beaucoup plu, si bien que la rivière a débordé.", "Y la carretera está cerrada por la tormenta. Llovió mucho, de modo que el río se desbordó."],
      ["camila", "Nous avons réduit nos déchets grâce au tri sélectif. J'ai obtenu ma bourse grâce à mes bonnes notes !", "Redujimos nuestros residuos gracias al reciclaje. ¡Obtuve mi beca gracias a mis buenas notas!"],
      ["hugo", "Les transports sont gratuits ici ; c'est pourquoi beaucoup d'habitants ont laissé leur voiture au garage.", "Aquí el transporte es gratis; por eso muchos habitantes dejaron su carro en el garaje."]
    ],
    fijate: "Fíjate: comme (al inicio), à cause de la tempête, si bien que, grâce au tri, grâce à mes notes, c'est pourquoi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Conectores de causa y consecuencia",
      idea: "Causa + frase: parce que (responde a pourquoi ?), car (escrito), comme (siempre al inicio de la frase). Causa + nombre: grâce à (causa positiva), à cause de (causa negativa), en raison de (neutro, formal). Grâce à + le = grâce au. Consecuencia: donc, alors, c'est pourquoi, si bien que (de modo que).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["parce que · Parce que · car", "porque", "causa + frase"],
        ["Comme il y avait une grève… · Comme", "Como había una huelga…", "causa al inicio"],
        ["grâce à mes notes · grâce au tri · grâce au · à", "gracias a mis notas · gracias al reciclaje", "causa positiva + nombre"],
        ["à cause de la tempête · à cause de · en raison de", "a causa de la tormenta · debido a", "causa negativa / neutra"],
        ["donc · alors", "así que · entonces", "consecuencia"],
        ["c'est pourquoi", "por eso", "consecuencia"],
        ["si bien que · si", "de modo que", "consecuencia"],
        ["Il était malade, donc il n'est pas venu.", "Estaba enfermo, así que no vino.", "consecuencia"]
      ]],
      ej: [["J'ai réussi grâce à mon professeur.", "Aprobé gracias a mi profesor."], ["Comme il pleuvait, je suis resté.", "Como llovía, me quedé."], ["Il était malade, donc il n'est pas venu.", "Estaba enfermo, así que no vino."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai réussi à cause de mon professeur.", "J'ai réussi grâce à mon professeur.", "Causa positiva → grâce à."], ["J'ai obtenu ma bourse grâce de mes notes.", "J'ai obtenu ma bourse grâce à mes notes.", "grâce à."], ["Je suis resté comme il pleuvait.", "Comme il pleuvait, je suis resté.", "Comme va al inicio."]] }
  ],
  ejemplos: [
    { sit: "«Como había una huelga, se cancelaron las clases.»", resp: "Comme il y avait une grève, les cours ont été annulés.", pasos: ["comme al inicio."], porque: "Causa." },
    { sit: "«Gracias al reciclaje…»", resp: "grâce au tri sélectif", pasos: ["grâce à + le = au."], porque: "Causa positiva." },
    { sit: "«Por eso duermen menos.»", resp: "C'est pourquoi ils dorment moins.", pasos: ["Consecuencia."], porque: "Resultado." }
  ],
  comprueba: [
    { q: "Para una causa positiva + nombre se usa…", o: ["grâce à", "à cause de"], a: 0, b: "gr", porque: "Positiva." },
    { q: "Comme va siempre…", o: ["al inicio de la frase", "al final"], a: 0, b: "gr", porque: "Posición." },
    { q: "Si bien que expresa…", o: ["consecuencia", "causa"], a: 0, b: "gr", porque: "De modo que." }
  ],
  practica: [
    { fase: "guiada", c: ["b2cc-cause", "b2cc-csq"], k: "sort", ask: "¿Causa o consecuencia?", q: "Clasifica.", cats: ["Causa", "Consecuencia"], items: [["parce que", 0], ["car", 0], ["comme", 0], ["grâce à", 0], ["donc", 1], ["c'est pourquoi", 1], ["si bien que", 1], ["alors", 1]], pista: "¿Por qué o qué resulta?", why: "Conectores." },
    { fase: "guiada", c: ["b2cc-cause"], k: "choice", ask: "«Como había una huelga, se cancelaron las clases.»", q: "«___ il y avait une grève, les cours ont été annulés.»", o: ["Comme", "Car", "Donc"], a: 0, pista: "Al inicio.", why: "<b>Comme</b>." },
    { fase: "guiada", c: ["b2cc-cause"], k: "choice", ask: "«Redujimos nuestros residuos gracias al reciclaje.»", q: "«Nous avons réduit nos déchets ___ tri sélectif.»", o: ["grâce au", "à cause du"], a: 0, pista: "Positiva.", why: "<b>grâce au</b>." },
    { fase: "indep", c: ["b2cc-cause"], k: "fill", ask: "«a causa de» (negativa)", q: "La route est fermée ___ la tempête.", acc: ["à cause de", "en raison de"], why: "<b>à cause de</b>." },
    { fase: "indep", c: ["b2cc-cause"], k: "spot", ask: "Encuentra el error.", s: "J'ai obtenu ma bourse grâce [de] mes bonnes notes .", fix: "à", why: "<b>grâce à</b>." },
    { fase: "indep", c: ["b2cc-csq"], k: "fill", ask: "Completa «de modo que».", q: "Il a beaucoup plu, ___ bien que la rivière a débordé.", acc: ["si"], why: "<b>si bien que</b>." },
    { fase: "aplica", c: ["b2cc-cause", "b2cc-csq"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Le train avait du retard,", "donc j'ai raté mon rendez-vous à la mairie."], ["Je n'ai pas pu venir en cours", "parce que j'étais malade."], ["Comme la bibliothèque est fermée,", "nous travaillons à la maison."], ["Les jeunes passent beaucoup de temps sur les écrans ;", "c'est pourquoi ils dorment moins."]], why: "Causa y consecuencia." },
    { fase: "aplica", c: ["b2cc-cause"], k: "choice", ask: "«—¿Por qué aprende francés? —Porque quiero estudiar en Montreal.»", q: "«— Pourquoi est-ce que vous apprenez le français ? — ___ je veux étudier à Montréal.»", o: ["Parce que", "Comme"], a: 0, why: "Responde a pourquoi: <b>Parce que</b>." },
    { fase: "dominio", c: ["b2cc-csq"], k: "choice", ask: "«…; por eso muchos habitantes dejaron el carro.»", q: "«Les transports sont gratuits ; ___ beaucoup d'habitants ont laissé leur voiture au garage.»", o: ["c'est pourquoi", "parce que"], a: 0, why: "<b>c'est pourquoi</b>." },
    { fase: "dominio", c: ["b2cc-cause"], k: "order", ask: "Ordena: «No vengo porque estoy cansado».", tokens: ["Je ne viens pas", "car", "je suis fatigué."], why: "<b>Je ne viens pas car je suis fatigué.</b>" },
    { fase: "dominio", c: ["b2cc-cause", "b2cc-csq"], k: "listen", say: "Nous avons réduit nos déchets grâce au tri sélectif.", acc: ["Nous avons réduit nos déchets grâce au tri sélectif."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous avons réduit nos déchets grâce au tri sélectif.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Montréal"], previo: [] }
};

E["b12-voix-passive"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "La voix passive",
  objetivo: {
    que: "Vas a formar la voz pasiva (être + participio concordado) en todos los tiempos.",
    corto: "Les documents ont été envoyés.",
    podras: ["Pasar el tiempo de la frase activa al verbo être.", "Concordar siempre el participio con el sujeto.", "Introducir el autor con par (o de con verbos de sentimiento) y preferir on al hablar."],
    iconos: ["ic2/engranaje", "ic2/libro", "ic2/lapiz"],
    previos: ["La concordancia con être (B1.1, lección 27) y los sucesos (B1.1, lección 65)."],
    capacidad: "Ahora entiendes y escribes textos informativos con la pasiva."
  },
  requiere: R("b1ae-oui", "b1fd-passif"), recupera: ["b1fd-passif"],
  conceptos: {
    "b2vp-forme": { n: "être (en el tiempo de la activa) + participio concordado: est / a été / sera / était + envoyé(e)(s)", b: "gr" },
    "b2vp-agent": { n: "autor con par (de con respecter, aimer, entourer…); al hablar: on + activa", b: "gr" }
  },
  video: {
    titulo: "La voz pasiva", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "être + participe", seg: [
        { es: "Hola. La pasiva pone el resultado en primer plano." } ] },
      { v: "frase", filas: [
          { nota: "passé composé", p: 1, partes: [["Les documents ont été envoyés.", "-", 1]] },
          { nota: "con autor", p: 2, partes: [["La loi a été votée par le Parlement.", "-", 2]] },
          { nota: "al hablar", p: 3, partes: [["On a arrêté trois suspects.", "-", 3]] } ], seg: [
        { fr: "Les documents ont été envoyés.", p: 1 }, { fr: "La loi a été votée par le Parlement.", p: 2 }, { fr: "On a arrêté trois suspects.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Los formularios fueron enviados por la secretaria.»", o: ["Les formulaires ont été envoyés par la secrétaire.", "Les formulaires ont été envoyé par la secrétaire."], a: 0,
        bien: "¡Sí! El participio concuerda.", mal: "Concuerda con el sujeto: envoyés.",
        seg: [ { es: "Pausa. Fueron enviados." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["est réparée", "a été réparée", "sera réparée", "était réparée", "par"], seg: [
        { es: "Être en el tiempo de la frase activa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El festival", img: "bg-paris", yo: "camila",
    escena: "Camila lee la página de la ciudad.",
    pj: PJ,
    lineas: [
      ["camila", "Le festival est organisé par la mairie. Le musée a été construit en 1990.", "El festival es organizado por la alcaldía. El museo fue construido en 1990."],
      ["hugo", "Et les résultats des examens ?", "¿Y los resultados de los exámenes?"],
      ["camila", "Les résultats seront publiés demain sur le site de l'université. Cette photo a été partagée par des milliers d'internautes !", "Los resultados serán publicados mañana en la página de la universidad. ¡Esta foto fue compartida por miles de internautas!"],
      ["hugo", "Ce professeur est très respecté de ses étudiants. Et la ville est entourée de montagnes.", "Este profesor es muy respetado por sus estudiantes. Y la ciudad está rodeada de montañas."]
    ],
    fijate: "Fíjate: est organisé par, a été construit, seront publiés, a été partagée par, respecté de, entourée de."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar la pasiva",
      idea: "Toma el tiempo de la frase activa y ponlo en être; añade el participio concordado con el sujeto: On répare la route → La route est réparée. On a réparé → a été réparée. On réparera → sera réparée. On réparait → était réparée. El autor va con par (la loi a été votée par le Parlement); con verbos de sentimiento o descripción (respecter, aimer, entourer, couvrir) suele ir de: respecté de ses étudiants, entourée de montagnes. Al hablar se prefiere on + activa: On a arrêté trois suspects.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tiempo"], [
        ["La route est réparée. · Le festival est organisé. · est organisé", "La carretera es reparada. · El festival es organizado.", "presente"],
        ["La route a été réparée. · Le colis a été livré.", "La carretera fue reparada. · El paquete fue entregado.", "passé composé"],
        ["Les documents ont été envoyés. · envoyés", "Los documentos fueron enviados.", "passé composé (plural)"],
        ["Cette photo a été partagée. · partagée", "Esta foto fue compartida.", "femenino"],
        ["La route sera réparée. · Les résultats seront publiés. · seront", "La carretera será reparada. · Serán publicados.", "futuro"],
        ["La route était réparée.", "La carretera era reparada.", "imparfait"],
        ["par le Parlement · par la mairie", "por el Parlamento · por la alcaldía", "autor: par"],
        ["respecté de ses étudiants · entourée de montagnes · de", "respetado por sus estudiantes · rodeada de montañas", "autor: de"],
        ["Les arbres sont coupés chaque hiver. · La décision sera prise demain. · Nous sommes invités au mariage.", "Los árboles son cortados cada invierno. · La decisión será tomada mañana. · Estamos invitados a la boda.", "pasivas"],
        ["Le facteur a livré le colis. · Elle est partie à huit heures. · Les étudiants sont arrivés en retard.", "El cartero entregó el paquete. · Se fue a las ocho. · Los estudiantes llegaron tarde.", "activas"]
      ]],
      ej: [["Les documents ont été envoyés.", "Los documentos fueron enviados."], ["La loi a été votée par le Parlement.", "La ley fue votada por el Parlamento."], ["On a arrêté trois suspects.", "Arrestaron a tres sospechosos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les documents ont été envoyé.", "Les documents ont été envoyés.", "El participio concuerda con el sujeto."], ["Mon frère est allé à la plage. (¿pasiva?)", "Es activa: aller va con être.", "Être + participio no siempre es pasiva."], ["La ville est entourée par des montagnes. (raro)", "La ville est entourée de montagnes.", "Descripción: de."]] }
  ],
  ejemplos: [
    { sit: "«Los resultados serán publicados mañana.»", resp: "Les résultats seront publiés demain.", pasos: ["Futuro de être + participio."], porque: "Futuro." },
    { sit: "«El festival es organizado por la alcaldía.»", resp: "Le festival est organisé par la mairie.", pasos: ["Autor: par."], porque: "Presente." },
    { sit: "«Arrestaron a tres sospechosos.» (oral)", resp: "On a arrêté trois suspects.", pasos: ["on + activa."], porque: "Oral." }
  ],
  comprueba: [
    { q: "En la pasiva, el participio…", o: ["concuerda con el sujeto", "nunca cambia"], a: 0, b: "gr", porque: "envoyés." },
    { q: "«La route a été réparée» corresponde a…", o: ["On a réparé la route.", "On réparera la route."], a: 0, b: "gr", porque: "passé composé." },
    { q: "Con respecter, el autor suele ir con…", o: ["de", "par siempre"], a: 0, b: "gr", porque: "Sentimiento." }
  ],
  practica: [
    { fase: "guiada", c: ["b2vp-forme"], k: "sort", ask: "¿Voz activa o pasiva?", q: "Clasifica.", cats: ["Voz activa", "Voz pasiva"], items: [["Le facteur a livré le colis.", 0], ["Elle est partie à huit heures.", 0], ["Les étudiants sont arrivés en retard.", 0], ["Le colis a été livré.", 1], ["Les arbres sont coupés chaque hiver.", 1], ["La décision sera prise demain.", 1], ["Nous sommes invités au mariage.", 1]], pista: "¿Alguien hace la acción sobre el sujeto?", why: "Activa / pasiva." },
    { fase: "guiada", c: ["b2vp-forme"], k: "fill", ask: "Futuro de être (ils).", q: "Les résultats ___ publiés demain sur le site de l'université.", acc: ["seront"], pista: "Futuro.", why: "<b>seront</b>." },
    { fase: "guiada", c: ["b2vp-forme"], k: "choice", ask: "«Esta foto fue compartida por miles.»", q: "«Cette photo a été ___ par des milliers d'internautes.»", o: ["partagée", "partagé"], a: 0, pista: "photo: femenino.", why: "<b>partagée</b>." },
    { fase: "indep", c: ["b2vp-forme"], k: "spot", ask: "Encuentra el error.", s: "Les formulaires ont été [envoyé] par la secrétaire .", fix: "envoyés", why: "<b>envoyés</b>." },
    { fase: "indep", c: ["b2vp-agent"], k: "choice", ask: "«Este profesor es muy respetado por sus estudiantes.»", q: "«Ce professeur est très respecté ___ ses étudiants.»", o: ["de", "à"], a: 0, why: "<b>de</b>." },
    { fase: "indep", c: ["b2vp-forme"], k: "fill", ask: "Pasiva en presente.", q: "Le festival ___ par la mairie.", acc: ["est organisé"], why: "<b>est organisé</b>." },
    { fase: "aplica", c: ["b2vp-forme"], k: "match", ask: "Une cada frase activa con su pasiva.", q: "Activa → pasiva", pairs: [["On répare la route.", "La route est réparée."], ["On a réparé la route.", "La route a été réparée."], ["On réparera la route.", "La route sera réparée."], ["On réparait la route.", "La route était réparée."]], why: "Tiempos." },
    { fase: "aplica", c: ["b2vp-agent"], k: "fill", ask: "«rodeada de montañas»", q: "La ville est entourée ___ montagnes.", acc: ["de"], why: "<b>de</b>." },
    { fase: "dominio", c: ["b2vp-forme"], k: "choice", ask: "¿Qué frase NO es pasiva?", q: "«___»", o: ["Mon frère est allé à la plage.", "Le musée a été construit en 1990."], a: 0, why: "aller con être: activa." },
    { fase: "dominio", c: ["b2vp-forme"], k: "order", ask: "Ordena: «El museo fue construido en 1990».", tokens: ["Le musée", "a été construit", "en 1990."], why: "<b>Le musée a été construit en 1990.</b>" },
    { fase: "dominio", c: ["b2vp-forme", "b2vp-agent"], k: "listen", say: "Le festival est organisé par la mairie.", acc: ["Le festival est organisé par la mairie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le festival est organisé par la mairie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·3 · Hacia la producción escrita del DELF B1 ================================ */
E["b12-possessifs-demonstratifs"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les pronoms possessifs et démonstratifs",
  objetivo: {
    que: "Vas a evitar repetir un nombre con los pronombres posesivos (le mien) y demostrativos (celui de, ceux qui).",
    corto: "le mien · la tienne · celui de Marc · ceux qui…",
    podras: ["Elegir el posesivo según el objeto: le mien, la mienne, les nôtres, le leur.", "Usar celui / celle / ceux / celles + de, qui, que, -ci, -là.", "Escribir le nôtre, le vôtre con acento circunflejo."],
    iconos: ["ic2/regalo", "ic2/amigos", "ic2/lapiz"],
    previos: ["Los relativos (B1.1, lección 4) y los pronombres tónicos (B1.1, lección 35)."],
    capacidad: "Ahora comparas cosas sin repetir palabras."
  },
  requiere: R("b1rel-quique", "b1pt-usage"), recupera: ["b1pt-usage"],
  conceptos: {
    "b2pp-poss": { n: "posesivos: le mien, la mienne, les miens; le tien; le sien; le nôtre, le vôtre, le leur (según el objeto)", b: "gr" },
    "b2pp-dem": { n: "demostrativos: celui / celle / ceux / celles + de, qui, que, -ci, -là", b: "gr" }
  },
  video: {
    titulo: "El mío, el de…", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "le mien · celui de", seg: [
        { es: "Hola. Para no repetir el nombre." } ] },
      { v: "frase", filas: [
          { nota: "posesivo", p: 1, partes: [["Ton projet est bien, mais le mien est plus écologique.", "-", 1]] },
          { nota: "el de", p: 2, partes: [["celui de mon colocataire", "-", 2]] },
          { nota: "los que", p: 3, partes: [["Ceux qui veulent peuvent venir.", "-", 3]] } ], seg: [
        { fr: "Ton projet est bien, mais le mien est plus écologique.", p: 1 }, { fr: "celui de mon colocataire", p: 2 }, { fr: "Ceux qui veulent peuvent venir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Mi computador es lento; el de mi compañero es más rápido.»", o: ["Mon ordinateur est lent ; celui de mon colocataire est plus rapide.", "Mon ordinateur est lent ; le de mon colocataire est plus rapide."], a: 0,
        bien: "¡Sí! «El de» = celui de.", mal: "«El de» se dice celui de.",
        seg: [ { es: "Pausa. El de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le mien", "la tienne", "le nôtre", "le leur", "celui de", "ceux qui", "celles-là"], seg: [
        { es: "Nôtre y vôtre, con circunflejo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las maletas", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo buscan sus maletas en el aeropuerto.",
    pj: PJ,
    lineas: [
      ["hugo", "C'est ton sac ?", "¿Es tu bolso?"],
      ["camila", "Non, ce n'est pas le mien ; c'est celui de Julie. Ma valise est bleue. Et la tienne, elle est de quelle couleur ?", "No, no es el mío; es el de Julie. Mi maleta es azul. ¿Y la tuya, de qué color es?"],
      ["hugo", "Rouge. Ces photos-ci sont floues, mais celles-là sont magnifiques.", "Roja. Estas fotos están borrosas, pero aquellas son magníficas."],
      ["camila", "Ceux qui veulent partir en échange doivent déposer leur dossier avant mars. Votre projet est intéressant, mais le nôtre est plus écologique !", "Los que quieren irse de intercambio deben entregar su expediente antes de marzo. ¡Su proyecto es interesante, pero el nuestro es más ecológico!"]
    ],
    fijate: "Fíjate: le mien, celui de Julie, la tienne, celles-là, ceux qui, le nôtre."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Posesivos y demostrativos",
      idea: "Posesivos (concuerdan con el objeto poseído): le mien / la mienne / les miens / les miennes; le tien / la tienne / les tiennes; le sien / la sienne; le nôtre / la nôtre / les nôtres; le vôtre / les vôtres; le leur / la leur / les leurs. Nôtre y vôtre llevan circunflejo. Demostrativos: celui (m.), celle (f.), ceux (m. pl.), celles (f. pl.) + de (celui de Marc), + qui / que (ceux qui veulent), + -ci / -là (celles-là).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["le mien · la tienne · la sienne", "el mío · la tuya · la suya", "singular"],
        ["la nôtre · le nôtre · le leur", "la nuestra · el nuestro · el suyo (de ellos)", "singular"],
        ["les leurs · les tiennes · les vôtres", "los suyos · las tuyas · los suyos (de usted)", "plural"],
        ["celui de Pedro · celui de Marc · celui", "el de Pedro · el de Marc", "m. singular"],
        ["celle-là · celle de", "aquella · la de", "f. singular"],
        ["ceux qui veulent · ceux", "los que quieren", "m. plural"],
        ["celles-ci · celles-là · celles", "estas · aquellas", "f. plural"],
        ["celui-ci", "este", "m. singular"]
      ]],
      ej: [["Ton projet est bien, mais le mien est plus écologique.", "Tu proyecto está bien, pero el mío es más ecológico."], ["celui de mon colocataire", "el de mi compañero de piso"], ["Ceux qui veulent peuvent venir.", "Los que quieran pueden venir."], ["Ce n'est pas mon vélo, c'est celui de Marc.", "No es mi bici, es la de Marc."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le de mon colocataire", "celui de mon colocataire", "«el de» = celui de."], ["le notre", "le nôtre", "Pronombre: con circunflejo."], ["les que veulent partir", "ceux qui veulent partir", "«los que» = ceux qui."]] }
  ],
  ejemplos: [
    { sit: "«—¿Es tu bolso? —No, no es el mío.»", resp: "Non, ce n'est pas le mien.", pasos: ["mon sac → le mien."], porque: "Posesivo." },
    { sit: "«Mi maleta es azul. ¿Y la tuya?»", resp: "Et la tienne ?", pasos: ["ta valise → la tienne."], porque: "Femenino." },
    { sit: "«el de Pedro» (el bolso, le sac)", resp: "celui de Pedro", pasos: ["le sac: masculino → celui de."], porque: "Demostrativo." }
  ],
  comprueba: [
    { q: "«El de mi compañero» se dice…", o: ["celui de mon colocataire", "le de mon colocataire"], a: 0, b: "gr", porque: "celui de." },
    { q: "El posesivo concuerda con…", o: ["el objeto poseído", "el poseedor"], a: 0, b: "gr", porque: "ma valise → la mienne." },
    { q: "«Los que quieren» se dice…", o: ["ceux qui veulent", "les qui veulent"], a: 0, b: "gr", porque: "ceux qui." }
  ],
  practica: [
    { fase: "guiada", c: ["b2pp-poss", "b2pp-dem"], k: "sort", ask: "¿Masculino singular, femenino singular o plural?", q: "Clasifica.", cats: ["Masculino singular", "Femenino singular", "Plural"], items: [["le mien", 0], ["celui-ci", 0], ["la sienne", 1], ["celle-là", 1], ["la nôtre", 1], ["les vôtres", 2], ["ceux", 2], ["celles", 2]], pista: "Mira el artículo y la terminación.", why: "Formas." },
    { fase: "guiada", c: ["b2pp-poss"], k: "choice", ask: "«—¿Es tu bolso? —No, no es el mío.»", q: "«Non, ce n'est pas ___ ; c'est celui de Julie.»", o: ["le mien", "la mienne"], a: 0, pista: "sac: masculino.", why: "<b>le mien</b>." },
    { fase: "guiada", c: ["b2pp-poss"], k: "fill", ask: "«la tuya» (la valise)", q: "Ma valise est bleue. Et ___, elle est de quelle couleur ?", acc: ["la tienne"], pista: "valise: femenino.", why: "<b>la tienne</b>." },
    { fase: "indep", c: ["b2pp-dem"], k: "choice", ask: "«Estas fotos están borrosas, pero aquellas son magníficas.»", q: "«Ces photos-ci sont floues, mais ___ sont magnifiques.»", o: ["celles-là", "ceux-là"], a: 0, why: "<b>celles-là</b>." },
    { fase: "indep", c: ["b2pp-dem"], k: "spot", ask: "Encuentra el error.", s: "Mon ordinateur est lent ; [le] de mon colocataire est plus rapide .", fix: "celui", why: "<b>celui de</b>." },
    { fase: "indep", c: ["b2pp-dem"], k: "fill", ask: "«Los que»", q: "___ qui veulent partir en échange doivent déposer leur dossier avant mars.", acc: ["Ceux", "ceux"], why: "<b>Ceux qui</b>." },
    { fase: "aplica", c: ["b2pp-poss", "b2pp-dem"], k: "match", ask: "Une cada expresión con su pronombre.", q: "Español → francés", pairs: [["el mío (el libro)", "le mien"], ["la nuestra (la casa)", "la nôtre"], ["los suyos (los amigos de ellos)", "les leurs"], ["las tuyas (las llaves)", "les tiennes"], ["el de Pedro (el carro)", "celui de Pedro"]], why: "Pronombres." },
    { fase: "aplica", c: ["b2pp-poss"], k: "choice", ask: "«Nuestro apartamento es pequeño, pero el de ellos es aún más pequeño.»", q: "«Notre appartement est petit, mais ___ est encore plus petit.»", o: ["le leur", "le sien"], a: 0, why: "<b>le leur</b>." },
    { fase: "dominio", c: ["b2pp-poss"], k: "choice", ask: "«Su proyecto es interesante, pero el nuestro es más ecológico.»", q: "«Votre projet est intéressant, mais ___ est plus écologique.»", o: ["le nôtre", "le notre"], a: 0, why: "<b>le nôtre</b>, con circunflejo." },
    { fase: "dominio", c: ["b2pp-dem"], k: "order", ask: "Ordena: «No es mi bici, es la de Marc».", tokens: ["Ce n'est pas mon vélo,", "c'est celui", "de Marc."], why: "<b>Ce n'est pas mon vélo, c'est celui de Marc.</b>" },
    { fase: "dominio", c: ["b2pp-poss", "b2pp-dem"], k: "listen", say: "Votre projet est intéressant, mais le nôtre est plus écologique.", acc: ["Votre projet est intéressant, mais le nôtre est plus écologique."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Votre projet est intéressant, mais le nôtre est plus écologique.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Marc", "Pedro"], previo: [] }
};

E["b12-courriel-argumentation"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le courriel formel et le texte argumentatif",
  objetivo: {
    que: "Vas a escribir un correo formal y un texto argumentativo con el plan y las fórmulas del DELF B1.",
    corto: "Madame, Monsieur, … Tout d'abord… Cependant… Cordialement.",
    podras: ["Abrir y cerrar un correo formal: Madame, Monsieur, … Cordialement / Je vous prie d'agréer…", "Usar vous y frases completas, sin abreviaturas ni fórmulas familiares.", "Seguir un plan argumentativo con un conector al inicio de cada argumento."],
    iconos: ["ic2/laptop", "ic2/pergamino", "ic2/lapiz"],
    previos: ["La carta amistosa (B1.1, lección 64), opinar (B1.1, lección 8) y concluir (B1.1, lección 50)."],
    capacidad: "Ahora escribes la tarea de producción escrita del DELF B1."
  },
  requiere: R("b1la-cloture", "b1op-connect", "b1cl-annonce"), recupera: ["b1op-connect"],
  conceptos: {
    "b2ce-formules": { n: "Madame, Monsieur, · Je me permets de vous écrire… · Dans l'attente de votre réponse · Cordialement / Je vous prie d'agréer…", b: "gr" },
    "b2ce-plan": { n: "plan: introducción (problema) → tout d'abord / de plus → cependant → en conclusion", b: "gr" }
  },
  video: {
    titulo: "Correo formal y argumentación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "Madame, Monsieur,", seg: [
        { es: "Hola. Las fórmulas fijas del correo formal y el plan del texto argumentativo." } ] },
      { v: "frase", filas: [
          { nota: "inicio", p: 1, partes: [["Madame, Monsieur,", "-", 1]] },
          { nota: "plan", p: 2, partes: [["Tout d'abord… De plus… Cependant…", "-", 2]] },
          { nota: "cierre", p: 3, partes: [["Cordialement,", "-", 3]] } ], seg: [
        { fr: "Madame, Monsieur,", p: 1 }, { fr: "Tout d'abord… De plus… Cependant…", p: 2 }, { fr: "Cordialement,", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Señora, le escribo para pedirle un certificado.»", o: ["Madame, je vous écris pour vous demander une attestation.", "Madame, je vous écris pour te demander une attestation."], a: 0,
        bien: "¡Sí! Vous en todo el correo.", mal: "En formal, siempre vous.",
        seg: [ { es: "Pausa. Le escribo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Madame, Monsieur,", "Je me permets de", "Tout d'abord", "Cependant", "En conclusion", "Cordialement"], seg: [
        { es: "Nada de bisous ni de abreviaturas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El correo a la universidad", img: "bg-universidad", yo: "camila",
    escena: "Camila escribe un correo formal y prepara su ensayo.",
    pj: PJ,
    lineas: [
      ["camila", "Madame, Monsieur, je me permets de vous écrire pour vous demander une attestation d'inscription.", "Señora, señor: me permito escribirles para solicitarles un certificado de matrícula."],
      ["camila", "Je vous remercie par avance. Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.", "Les agradezco de antemano. En espera de su respuesta, le ruego aceptar, señor, mis saludos cordiales."],
      ["hugo", "Et ton essai ? « Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures dans le centre-ville ? »", "¿Y tu ensayo? «Hoy la contaminación es un problema mayor: ¿hay que prohibir los carros en el centro?»"],
      ["camila", "Oui. Les réseaux sociaux permettent de rester en contact ; en revanche, ils peuvent créer une dépendance. Je ne pense pas qu'ils soient dangereux pour tous.", "Sí. Las redes permiten estar en contacto; en cambio, pueden crear dependencia. No pienso que sean peligrosas para todos."]
    ],
    fijate: "Fíjate: Madame, Monsieur, je me permets de vous écrire, je vous remercie par avance, dans l'attente de votre réponse, je vous prie d'agréer…; en revanche; je ne pense pas qu'ils soient."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas y plan",
      idea: "Correo formal. Inicio: Madame, / Monsieur, / Madame, Monsieur, (si no sabes quién lee). Cuerpo: Je me permets de vous écrire…, siempre vous y frases completas, sin abreviaturas. Cierre: Je vous remercie par avance. Dans l'attente de votre réponse, … Cordialement o Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées. Texto argumentativo: introducción (presenta el problema con una pregunta) → argumentos a favor (Tout d'abord, De plus, Par exemple) → objeción (Cependant, En revanche) → conclusión con tu opinión (En conclusion). Ojo: je ne pense pas que + subjuntivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Madame, Monsieur,", "Señora, señor:", "inicio"],
        ["Je me permets de vous écrire…", "Me permito escribirle…", "cuerpo"],
        ["Je vous remercie par avance.", "Le agradezco de antemano.", "cierre"],
        ["Dans l'attente de votre réponse, · dans", "En espera de su respuesta,", "cierre"],
        ["Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.", "Le ruego acepte, señora, mis saludos cordiales.", "fórmula final"],
        ["Cordialement,", "Cordialmente,", "cierre corto"],
        ["Tout d'abord · De plus · Par exemple", "En primer lugar · Además · Por ejemplo", "argumentos"],
        ["Cependant · En revanche", "Sin embargo · En cambio", "objeción"],
        ["En conclusion", "En conclusión", "cierre"],
        ["soient · vous", "sean · usted", "subjuntivo · formal"],
        ["Coucou ! · Bises · C'est super cool · À plus !", "¡Hola! · Besos · Genial · ¡Nos vemos!", "familiar: evitar"]
      ]],
      ej: [["Madame, Monsieur,", "Estimados señores:"], ["Tout d'abord… De plus… Cependant…", "En primer lugar… Además… Sin embargo…"], ["Cordialement,", "Cordialmente,"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Estimé monsieur, … bisous", "Monsieur, … Cordialement", "Usa las fórmulas francesas."], ["Madame, je vous écris pour te demander une attestation.", "Madame, je vous écris pour vous demander une attestation.", "Formal: vous en todo el texto."], ["Je ne pense pas que les réseaux sont dangereux.", "Je ne pense pas que les réseaux soient dangereux.", "Opinión negativa → subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "Saludas en un correo formal.", resp: "Madame, Monsieur,", pasos: ["Sin «estimé»."], porque: "Inicio." },
    { sit: "Cierras un correo formal.", resp: "Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.", pasos: ["Fórmula completa."], porque: "Cierre." },
    { sit: "Introduces el tema del ensayo.", resp: "Aujourd'hui, la pollution est un problème majeur : faut-il interdire les voitures ?", pasos: ["Problema + pregunta."], porque: "Introducción." }
  ],
  comprueba: [
    { q: "En un correo formal se usa…", o: ["vous", "tu"], a: 0, b: "gr", porque: "Formal." },
    { q: "«Cependant» sirve para…", o: ["introducir una objeción", "añadir un argumento"], a: 0, b: "gr", porque: "Sin embargo." },
    { q: "«Bises» es…", o: ["familiar: no va en un correo formal", "formal"], a: 0, b: "gr", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["b2ce-formules"], k: "sort", ask: "¿Formal o familiar?", q: "Clasifica.", cats: ["Formal", "Familiar"], items: [["Je me permets de vous écrire…", 0], ["Cordialement", 0], ["Dans l'attente de votre réponse", 0], ["Je vous remercie par avance", 0], ["Coucou !", 1], ["Bises", 1], ["C'est super cool", 1], ["À plus !", 1]], pista: "¿Lo escribirías a la universidad?", why: "Registro." },
    { fase: "guiada", c: ["b2ce-formules"], k: "choice", ask: "Saludo del correo formal:", q: "«___»", o: ["Madame, Monsieur,", "Salut !"], a: 0, pista: "Formal.", why: "<b>Madame, Monsieur,</b>" },
    { fase: "guiada", c: ["b2ce-formules"], k: "choice", ask: "Fórmula final:", q: "«___»", o: ["Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.", "Grosses bises !"], a: 0, pista: "Formal.", why: "Fórmula final." },
    { fase: "indep", c: ["b2ce-formules"], k: "spot", ask: "Encuentra el error.", s: "Madame , je vous écris pour [te] demander une attestation d'inscription .", fix: "vous", why: "<b>vous</b>." },
    { fase: "indep", c: ["b2ce-plan"], k: "fill", ask: "Subjuntivo de être (ils).", q: "Je ne pense pas que les réseaux sociaux ___ dangereux pour tous les jeunes.", acc: ["soient"], why: "<b>soient</b>." },
    { fase: "indep", c: ["b2ce-formules"], k: "fill", ask: "«En espera de su respuesta»", q: "___ l'attente de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.", acc: ["Dans", "dans"], why: "<b>Dans l'attente</b>." },
    { fase: "aplica", c: ["b2ce-plan"], k: "match", ask: "Une cada conector con su función.", q: "Conector → función", pairs: [["Tout d'abord", "presentar el primer argumento"], ["De plus", "añadir otro argumento"], ["Cependant", "introducir una objeción"], ["Par exemple", "ilustrar con un ejemplo"], ["En conclusion", "cerrar el texto"]], why: "Plan." },
    { fase: "aplica", c: ["b2ce-plan"], k: "choice", ask: "«Las redes permiten estar en contacto. En cambio, pueden crear dependencia.»", q: "«Les réseaux sociaux permettent de rester en contact avec ses proches. ___, ils peuvent créer une dépendance.»", o: ["En revanche", "De plus"], a: 0, why: "<b>En revanche</b>: objeción." },
    { fase: "dominio", c: ["b2ce-plan"], k: "choice", ask: "Introducción del ensayo:", q: "«___»", o: ["Aujourd'hui, la pollution est un problème majeur dans les grandes villes : faut-il pour autant interdire les voitures dans le centre-ville ?", "Bises, à plus !"], a: 0, why: "Problema + pregunta." },
    { fase: "dominio", c: ["b2ce-formules"], k: "order", ask: "Ordena: «Le agradezco de antemano».", tokens: ["Je vous", "remercie", "par avance."], why: "<b>Je vous remercie par avance.</b>" },
    { fase: "dominio", c: ["b2ce-formules", "b2ce-plan"], k: "listen", say: "Je vous prie d'agréer mes salutations distinguées.", acc: ["Je vous prie d'agréer mes salutations distinguées."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vous prie d'agréer mes salutations distinguées.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B1.2·4 · Indefinidos, futuro anterior, discurso referido y finalidad ================================ */
E["b12-indefinis"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Les indéfinis : quelqu'un, personne, rien, chaque, aucun",
  objetivo: {
    que: "Vas a usar los indefinidos positivos y negativos, sin pas con personne, rien y aucun.",
    corto: "quelqu'un / personne · quelque chose / rien · chaque / chacun.",
    podras: ["Usar quelqu'un, quelque chose, quelque part, plusieurs y sus opuestos personne, rien, nulle part, aucun.", "Usar chaque (+ nombre) y chacun (solo).", "Añadir un adjetivo con de: quelque chose de bon, rien de nouveau, quelqu'un de sérieux."],
    iconos: ["ic2/pregunta", "ic2/amigos", "ic2/candado"],
    previos: ["Las negaciones (B1.1, lección 40)."],
    capacidad: "Ahora hablas de personas y cosas sin nombrarlas."
  },
  requiere: R("b1ng-mots", "b1ng-place"), recupera: ["b1ng-mots"],
  conceptos: {
    "b2in-pos": { n: "quelqu'un, quelque chose, quelque part, plusieurs, chaque (+ nombre), chacun; quelque chose de + adjetivo", b: "gr" },
    "b2in-neg": { n: "personne, rien, aucun(e), nulle part con ne y sin pas; je n'ai rien vu / je n'ai vu personne", b: "gr" }
  },
  video: {
    titulo: "Los indefinidos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "quelqu'un · personne", seg: [
        { es: "Hola. Alguien, nadie, algo, nada, cada uno." } ] },
      { v: "frase", filas: [
          { nota: "nadie", p: 1, partes: [["Personne n'est venu.", "-", 1]] },
          { nota: "nada", p: 2, partes: [["Je n'ai rien compris.", "-", 2]] },
          { nota: "cada uno", p: 3, partes: [["Chacun a son opinion.", "-", 3]] } ], seg: [
        { fr: "Personne n'est venu.", p: 1 }, { fr: "Je n'ai rien compris.", p: 2 }, { fr: "Chacun a son opinion.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nadie vino a la reunión.»", o: ["Personne n'est venu à la réunion.", "Personne n'est pas venu à la réunion."], a: 0,
        bien: "¡Sí! Con personne, nunca pas.", mal: "Personne + ne, sin pas.",
        seg: [ { es: "Pausa. Nadie vino." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quelqu'un", "personne", "quelque chose", "rien", "chaque", "chacun", "aucun"], seg: [
        { es: "Algo bueno: quelque chose de bon.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El compañero de piso", img: "bg-cafe", yo: "camila",
    escena: "Camila busca compañero de piso.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as vu quelqu'un à la bibliothèque ?", "¿Viste a alguien en la biblioteca?"],
      ["camila", "Non, je n'ai vu personne. Personne ne m'a appelée aujourd'hui, et je n'ai rien mangé depuis ce matin !", "No, no vi a nadie. Nadie me llamó hoy, ¡y no he comido nada desde esta mañana!"],
      ["hugo", "Il y a quelque chose d'intéressant dans cet article : chaque étudiant doit rendre son mémoire avant juin.", "Hay algo interesante en este artículo: cada estudiante debe entregar su trabajo antes de junio."],
      ["camila", "Moi, je cherche quelqu'un de sérieux pour partager l'appartement. Plusieurs de mes amis parlent très bien français. Vous avez des questions ? Non, aucune !", "Yo busco a alguien serio para compartir el apartamento. Varios de mis amigos hablan muy bien francés. ¿Preguntas? ¡Ninguna!"]
    ],
    fijate: "Fíjate: quelqu'un, je n'ai vu personne, personne ne m'a, je n'ai rien mangé, quelque chose d'intéressant, chaque étudiant, quelqu'un de sérieux, plusieurs, aucune."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Positivos y negativos",
      idea: "Alguien → quelqu'un; nadie → personne. Algo → quelque chose; nada → rien. En alguna parte → quelque part; en ninguna parte → nulle part. Varios → plusieurs; ningún → aucun(e). Cada + nombre → chaque (chaque étudiant); cada uno → chacun. Negación: ne + verbo + personne / rien / aucun, sin pas. En passé composé: je n'ai rien vu (rien antes del participio), je n'ai vu personne (personne después). Como sujeto: Personne n'est venu. Con adjetivo: quelque chose de bon, rien de nouveau, quelqu'un de sérieux.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["quelqu'un · quelque chose · quelque part · plusieurs · Plusieurs", "alguien · algo · en alguna parte · varios", "positivo"],
        ["personne · rien · nulle part · aucun · aucune", "nadie · nada · en ninguna parte · ningún · ninguna", "negativo"],
        ["Personne n'est venu.", "Nadie vino.", "sujeto"],
        ["Je n'ai vu personne.", "No vi a nadie.", "después del participio"],
        ["Je n'ai rien vu. · rien vu", "No vi nada.", "antes del participio"],
        ["Chaque étudiant · Chaque · chaque", "Cada estudiante", "+ nombre"],
        ["Chacun a son opinion. · Chacun", "Cada uno tiene su opinión.", "solo"],
        ["quelque chose d'intéressant · d'", "algo interesante", "+ de + adjetivo"],
        ["quelqu'un de sérieux · de", "alguien serio", "+ de + adjetivo"],
        ["Non, je n'en ai aucune.", "No, no tengo ninguna.", "aucun(e)"]
      ]],
      ej: [["Personne n'est venu.", "Nadie vino."], ["Je n'ai rien compris.", "No entendí nada."], ["Chacun a son opinion.", "Cada uno tiene su opinión."], ["Il y a quelque chose d'intéressant.", "Hay algo interesante."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Personne n'est pas venu.", "Personne n'est venu.", "Con personne, rien, aucun: nunca pas."], ["Chaque un a présenté son projet.", "Chacun a présenté son projet.", "«Cada uno» = chacun."], ["Je n'ai vu rien d'intéressant.", "Je n'ai rien vu d'intéressant.", "rien antes del participio."]] }
  ],
  ejemplos: [
    { sit: "«No vi a nadie.»", resp: "Je n'ai vu personne.", pasos: ["personne después del participio."], porque: "Negativo." },
    { sit: "«Cada estudiante debe entregar su trabajo.»", resp: "Chaque étudiant doit rendre son mémoire.", pasos: ["chaque + nombre."], porque: "Positivo." },
    { sit: "«Busco a alguien serio.»", resp: "Je cherche quelqu'un de sérieux.", pasos: ["quelqu'un de + adjetivo."], porque: "Adjetivo." }
  ],
  comprueba: [
    { q: "Con personne y rien…", o: ["nunca va pas", "siempre va pas"], a: 0, b: "gr", porque: "ne… personne." },
    { q: "«Cada uno» se dice…", o: ["chacun", "chaque un"], a: 0, b: "gr", porque: "Pronombre." },
    { q: "«Algo bueno» se dice…", o: ["quelque chose de bon", "quelque chose bon"], a: 0, b: "gr", porque: "de + adjetivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b2in-pos", "b2in-neg"], k: "sort", ask: "¿Sentido positivo o negativo?", q: "Clasifica.", cats: ["Sentido positivo", "Sentido negativo"], items: [["quelqu'un", 0], ["personne", 1], ["quelque chose", 0], ["rien", 1], ["plusieurs", 0], ["aucun", 1], ["quelque part", 0], ["nulle part", 1]], pista: "¿Hay o no hay?", why: "Indefinidos." },
    { fase: "guiada", c: ["b2in-neg"], k: "choice", ask: "«—¿Viste a alguien? —No, no vi a nadie.»", q: "«Non, je n'ai vu ___.»", o: ["personne", "rien", "quelqu'un"], a: 0, pista: "Persona.", why: "<b>personne</b>." },
    { fase: "guiada", c: ["b2in-neg"], k: "choice", ask: "«Nadie vino a la reunión.»", q: "«___ à la réunion.»", o: ["Personne n'est venu", "Personne n'est pas venu"], a: 0, pista: "Sin pas.", why: "<b>Personne n'est venu</b>." },
    { fase: "indep", c: ["b2in-pos"], k: "fill", ask: "«Cada»", q: "___ étudiant doit rendre son mémoire avant juin.", acc: ["Chaque", "chaque"], why: "<b>Chaque</b>." },
    { fase: "indep", c: ["b2in-pos"], k: "fill", ask: "Escribe la preposición (ante vocal).", q: "Il y a quelque chose ___ intéressant dans cet article.", acc: ["d'", "d’"], why: "<b>d'intéressant</b>." },
    { fase: "indep", c: ["b2in-neg"], k: "spot", ask: "Encuentra el error.", s: "Je n'ai [vu rien] d'intéressant dans ce film .", fix: "rien vu", why: "<b>rien vu</b>." },
    { fase: "aplica", c: ["b2in-pos"], k: "spot", ask: "Encuentra el error.", s: "[Chaque un] a présenté son projet .", fix: "Chacun", why: "<b>Chacun</b>." },
    { fase: "aplica", c: ["b2in-pos", "b2in-neg"], k: "match", ask: "Une cada palabra con su traducción.", q: "Español → francés", pairs: [["alguien", "quelqu'un"], ["nadie", "personne"], ["algo", "quelque chose"], ["nada", "rien"], ["cada uno", "chacun"]], why: "Indefinidos." },
    { fase: "dominio", c: ["b2in-neg"], k: "choice", ask: "«—¿Tienen preguntas? —No, ninguna.»", q: "«Non, je n'en ai ___.»", o: ["aucune", "rien"], a: 0, why: "<b>aucune</b>." },
    { fase: "dominio", c: ["b2in-pos"], k: "fill", ask: "Escribe la preposición.", q: "Je cherche quelqu'un ___ sérieux pour partager l'appartement.", acc: ["de"], why: "<b>de</b>." },
    { fase: "dominio", c: ["b2in-pos", "b2in-neg"], k: "listen", say: "Je n'ai rien mangé depuis ce matin.", acc: ["Je n'ai rien mangé depuis ce matin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je n'ai rien mangé depuis ce matin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b12-futur-anterieur"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le futur antérieur",
  objetivo: {
    que: "Vas a usar el futur antérieur para una acción que ya estará terminada en el futuro, antes de otra.",
    corto: "Quand j'aurai fini, je sortirai.",
    podras: ["Formarlo con avoir o être en futuro + participio: j'aurai fini, elle sera partie.", "Usarlo tras quand, dès que, une fois que para lo que pasa primero.", "Usarlo para suponer: il aura oublié (habrá olvidado)."],
    iconos: ["ic2/reloj-arena", "ic2/estrella", "ic2/lapiz"],
    previos: ["El futuro simple (B1.1, lección 20) y las conjunciones de tiempo (B1.1, lección 24)."],
    capacidad: "Ahora ordenas acciones futuras con precisión."
  },
  requiere: R("b1fs-forme", "b1fs-quand", "b1cj-futur"), recupera: ["b1cj-futur"],
  conceptos: {
    "b2fa-forme": { n: "avoir / être en futuro + participio: j'aurai fini, elle sera partie (concordancia con être)", b: "gr" },
    "b2fa-usage": { n: "tras quand, dès que, une fois que: lo que pasa primero; suposición: il aura oublié", b: "gr" }
  },
  video: {
    titulo: "El futuro anterior", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "j'aurai fini", seg: [
        { es: "Hola. Lo que ya estará hecho en el futuro." } ] },
      { v: "frase", filas: [
          { nota: "primero", p: 1, partes: [["Quand j'aurai fini,", "futur antérieur", 1]] },
          { nota: "después", p: 2, partes: [["je sortirai.", "futur simple", 2]] },
          { nota: "suposición", p: 3, partes: [["Il aura oublié le rendez-vous.", "-", 3]] } ], seg: [
        { fr: "Quand j'aurai fini,", p: 1 }, { fr: "je sortirai.", p: 2 }, { es: "También para suponer:", p: 3 }, { fr: "Il aura oublié le rendez-vous.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Te devolveré el libro cuando lo haya leído.»", o: ["Je te rendrai ton livre quand je l'aurai lu.", "Je te rendrai ton livre quand je l'aie lu."], a: 0,
        bien: "¡Sí! Quand + futur antérieur.", mal: "Después de quand, nunca subjuntivo.",
        seg: [ { es: "Pausa. Cuando lo haya leído." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'aurai fini", "tu auras fait", "elle sera partie", "nous aurons terminé", "il aura oublié"], seg: [
        { es: "«Cuando haya…» = quand j'aurai…", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Planes de fin de año", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus planes.",
    pj: PJ,
    lineas: [
      ["camila", "Je t'appellerai dès que j'aurai fini mon examen.", "Te llamaré en cuanto haya terminado mi examen."],
      ["hugo", "D'ici juin, nous aurons terminé notre mémoire. Une fois que tu auras fait tes valises, on partira.", "Para junio habremos terminado nuestro trabajo. Una vez que hayas hecho tus maletas, nos iremos."],
      ["camila", "Quand ma sœur sera arrivée en France, elle nous écrira. Quand ils seront partis, on rangera la salle.", "Cuando mi hermana haya llegado a Francia, nos escribirá. Cuando se hayan ido, ordenaremos la sala."],
      ["hugo", "Paul n'est pas là ? Il aura raté son bus. Quand tu seras arrivée, envoie-moi un message.", "¿Paul no está? Habrá perdido el bus. Cuando hayas llegado, envíame un mensaje."]
    ],
    fijate: "Fíjate: aurai fini, aurons terminé, auras fait, sera arrivée, seront partis, aura raté (suposición), seras arrivée."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formar y usar el futur antérieur",
      idea: "Avoir o être en futuro (aurai, auras, aura, aurons, aurez, auront / serai, seras, sera…) + participio: j'aurai fini, elle sera partie. Mismo auxiliar y misma concordancia que en el passé composé. Úsalo tras quand, dès que, une fois que, lorsque para la acción que pasa primero; la otra va en futuro simple o en imperativo: Quand tu auras terminé, appelle-moi. También sirve para suponer: Il aura oublié = habrá olvidado. Nunca subjuntivo tras quand.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["j'aurai fini · aurai fini · aurai terminé", "habré terminado", "avoir"],
        ["nous aurons terminé · aurons terminé", "habremos terminado", "avoir"],
        ["tu auras fait · auras fait · tu auras lu", "habrás hecho · habrás leído", "avoir"],
        ["elle sera arrivée · sera arrivée · sera sortie", "habrá llegado · habrá salido", "être"],
        ["ils seront partis · seront partis", "se habrán ido", "être"],
        ["Il aura raté son bus. · aura", "Seguramente perdió el bus.", "suposición"],
        ["je finirai · vous partirez · ils viendront · on lira", "terminaré · se irán · vendrán · leeremos", "futur simple"],
        ["nous serons partis · elle sera venue", "nos habremos ido · habrá venido", "futur antérieur"],
        ["j'aurai fait · je serai allé(e) · j'aurai vu · j'aurai pris · je serai venu(e)", "habré hecho · ido · visto · tomado · venido", "formas"]
      ]],
      ej: [["Quand j'aurai fini, je sortirai.", "Cuando haya terminado, saldré."], ["D'ici juin, nous aurons terminé.", "Para junio habremos terminado."], ["Elle sera partie avant midi.", "Se habrá ido antes del mediodía."], ["Il aura oublié le rendez-vous.", "Habrá olvidado la cita."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["quand j'aie fini", "quand j'aurai fini", "Después de quand, nunca subjuntivo."], ["Je te rendrai ton livre quand je l'aie lu.", "Je te rendrai ton livre quand je l'aurai lu.", "futur antérieur."], ["Dès qu'elle aura sortie, elle t'appellera.", "Dès qu'elle sera sortie, elle t'appellera.", "sortir va con être."]] }
  ],
  ejemplos: [
    { sit: "«Cuando haya terminado, saldré.»", resp: "Quand j'aurai fini, je sortirai.", pasos: ["Primero: futur antérieur.", "Después: futur simple."], porque: "Anterioridad." },
    { sit: "«Cuando haya llegado, nos escribirá.»", resp: "Quand elle sera arrivée, elle nous écrira.", pasos: ["arriver → être; concordancia."], porque: "Être." },
    { sit: "«Habrá perdido el bus.»", resp: "Il aura raté son bus.", pasos: ["Suposición."], porque: "Probabilidad." }
  ],
  comprueba: [
    { q: "El futur antérieur se forma con el auxiliar en…", o: ["futuro", "condicional"], a: 0, b: "gr", porque: "j'aurai, je serai." },
    { q: "Tras quand, para «cuando haya…», va…", o: ["futur antérieur", "subjuntivo"], a: 0, b: "gr", porque: "Nunca subjuntivo." },
    { q: "«Il aura oublié» puede expresar…", o: ["una suposición", "una orden"], a: 0, b: "gr", porque: "Habrá olvidado." }
  ],
  practica: [
    { fase: "guiada", c: ["b2fa-forme"], k: "sort", ask: "¿Futur simple o futur antérieur?", q: "Clasifica.", cats: ["Futur simple", "Futur antérieur"], items: [["je finirai", 0], ["j'aurai fini", 1], ["vous partirez", 0], ["nous serons partis", 1], ["ils viendront", 0], ["elle sera venue", 1], ["on lira", 0], ["tu auras lu", 1]], pista: "¿Auxiliar + participio?", why: "Formas." },
    { fase: "guiada", c: ["b2fa-usage"], k: "choice", ask: "«Te llamaré en cuanto haya terminado mi examen.»", q: "«Je t'appellerai dès que j'___ mon examen.»", o: ["aurai fini", "finirai", "aie fini"], a: 0, pista: "Primero.", why: "<b>aurai fini</b>." },
    { fase: "guiada", c: ["b2fa-forme"], k: "choice", ask: "«Cuando haya llegado a Francia, nos escribirá.»", q: "«Quand elle ___ en France, elle nous écrira.»", o: ["sera arrivée", "aura arrivé"], a: 0, pista: "arriver → être.", why: "<b>sera arrivée</b>." },
    { fase: "indep", c: ["b2fa-forme"], k: "fill", ask: "Futur antérieur de terminer (nous).", q: "D'ici juin, nous ___ notre mémoire.", acc: ["aurons terminé"], why: "<b>aurons terminé</b>." },
    { fase: "indep", c: ["b2fa-usage"], k: "fill", ask: "Futur antérieur de faire (tu).", q: "Une fois que tu ___ tes valises, on partira.", acc: ["auras fait"], why: "<b>auras fait</b>." },
    { fase: "indep", c: ["b2fa-forme"], k: "fill", ask: "Futur antérieur de partir (ils).", q: "Quand ils ___, on rangera la salle.", acc: ["seront partis"], why: "<b>seront partis</b>." },
    { fase: "aplica", c: ["b2fa-usage"], k: "spot", ask: "Encuentra el error.", s: "Je te rendrai ton livre quand je l'[aie] lu .", fix: "aurai", why: "<b>aurai</b>." },
    { fase: "aplica", c: ["b2fa-forme"], k: "spot", ask: "Encuentra el error.", s: "Dès qu'elle [aura sortie] , elle t'appellera .", fix: "sera sortie", why: "<b>sera sortie</b>." },
    { fase: "dominio", c: ["b2fa-usage"], k: "choice", es: true, ask: "«Il aura raté son bus.» significa…", q: "Elige.", o: ["Seguramente perdió el bus.", "Perderá el bus mañana."], a: 0, why: "Suposición." },
    { fase: "dominio", c: ["b2fa-forme", "b2fa-usage"], k: "order", ask: "Ordena: «Cuando hayas terminado, llámame».", tokens: ["Quand tu", "auras terminé,", "appelle-moi."], why: "<b>Quand tu auras terminé, appelle-moi.</b>" },
    { fase: "dominio", c: ["b2fa-forme", "b2fa-usage"], k: "listen", say: "Quand tu seras arrivé, envoie-moi un message.", acc: ["Quand tu seras arrivé, envoie-moi un message.", "Quand tu seras arrivée, envoie-moi un message."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand tu seras arrivé, envoie-moi un message.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

E["b12-discours-indirect-passe"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Le discours indirect au passé",
  objetivo: {
    que: "Vas a contar en pasado lo que alguien dijo: los tiempos retroceden y las palabras de tiempo cambian.",
    corto: "Il a dit qu'il était fatigué. · Elle a dit qu'elle viendrait.",
    podras: ["Retroceder los tiempos: presente → imparfait, passé composé → plus-que-parfait, futuro → condicional.", "Pasar preguntas (si, ce que, ce qui) y órdenes (de + infinitivo).", "Cambiar demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là."],
    iconos: ["ic2/microfono", "ic2/reloj-arena", "ic2/pergamino"],
    previos: ["El discurso indirecto en presente (lección 2), el plus-que-parfait (B1.1, lección 2) y el condicional (B1.1, lección 7)."],
    capacidad: "Ahora cuentas conversaciones pasadas con precisión."
  },
  requiere: R("b2di-question", "b2di-ordre", "b1pq-forme", "b1co-forme", "b1aa-recit"), recupera: ["b2di-question"],
  conceptos: {
    "b2dp-temps": { n: "presente → imparfait; passé composé → plus-que-parfait; futuro → condicional; futur proche → allait + inf.", b: "gr" },
    "b2dp-mots": { n: "demain → le lendemain; hier → la veille; aujourd'hui → ce jour-là; si, ce que, ce qui; de + infinitivo", b: "gr" }
  },
  video: {
    titulo: "Indirecto en pasado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "il a dit que…", seg: [
        { es: "Hola. Si el verbo que introduce está en pasado, los tiempos retroceden." } ] },
      { v: "frase", filas: [
          { nota: "presente → imparfait", p: 1, partes: [["Il a dit qu'il était fatigué.", "-", 1]] },
          { nota: "futuro → condicional", p: 2, partes: [["Elle a dit qu'elle viendrait.", "-", 2]] },
          { nota: "pregunta", p: 3, partes: [["Il m'a demandé si j'avais fini.", "-", 3]] } ], seg: [
        { fr: "Il a dit qu'il était fatigué.", p: 1 }, { fr: "Elle a dit qu'elle viendrait.", p: 2 }, { fr: "Il m'a demandé si j'avais fini.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El profesor me preguntó si había leído el texto.»", o: ["Le professeur m'a demandé si j'avais lu le texte.", "Le professeur m'a demandé que si j'avais lu le texte."], a: 0,
        bien: "¡Sí! Solo si.", mal: "«Que si» no existe en francés.",
        seg: [ { es: "Pausa. Me preguntó si." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["était", "avait perdu", "viendrait", "allaient", "le lendemain", "la veille"], seg: [
        { es: "Mañana se vuelve le lendemain.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lo que dijeron", img: "bg-universidad", yo: "camila",
    escena: "Camila le cuenta a Hugo lo que le dijeron ayer.",
    pj: PJ,
    lineas: [
      ["camila", "Hier, Laura m'a dit qu'elle était malade. Elle a expliqué qu'elle avait perdu ses clés.", "Ayer, Laura me dijo que estaba enferma. Explicó que había perdido sus llaves."],
      ["hugo", "Et ton chef ?", "¿Y tu jefe?"],
      ["camila", "Il a dit qu'il finirait le rapport le lendemain. Il m'a demandé si je venais à la fête et où j'habitais.", "Dijo que terminaría el informe al día siguiente. Me preguntó si iba a la fiesta y dónde vivía."],
      ["hugo", "Le médecin m'a dit de me reposer. Et mes voisins ont annoncé qu'ils allaient déménager.", "El médico me dijo que descansara. Y mis vecinos anunciaron que se iban a mudar."]
    ],
    fijate: "Fíjate: était, avait perdu, finirait le lendemain, si je venais, où j'habitais, de me reposer, allaient déménager."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Retroceder los tiempos",
      idea: "Con el verbo introductor en pasado (il a dit, il m'a demandé), los tiempos retroceden: presente → imparfait (« Je suis fatigué » → il a dit qu'il était fatigué); passé composé → plus-que-parfait (« J'ai perdu » → qu'elle avait perdu); futuro → condicional (« Je viendrai » → qu'elle viendrait); futur proche → aller en imparfait + infinitivo (qu'ils allaient déménager); imperativo → de + infinitivo. Preguntas: sí / no → si (nunca «que si»); qu'est-ce que → ce que; qu'est-ce qui → ce qui. Palabras de tiempo: demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là, la semaine prochaine → la semaine suivante.",
      intro: "Toca cada frase.",
      tabla: [["Directo", "Indirecto en pasado", "Cambio"], [
        ["présent", "imparfait · était", "presente → imparfait"],
        ["passé composé", "plus-que-parfait · avait perdu", "pc → pqp"],
        ["futur simple", "conditionnel présent · finirait · viendrait", "futuro → condicional"],
        ["futur proche", "aller à l'imparfait + infinitif · allaient", "futur proche"],
        ["impératif", "de + infinitif · de me reposer", "orden"],
        ["« Tu viens ? »", "Il m'a demandé si je venais. · si", "sí / no"],
        ["« Qu'est-ce que tu fais ? »", "Elle m'a demandé ce que je faisais. · ce que", "qu'est-ce que"],
        ["« Qu'est-ce qui se passe ? »", "Il a demandé ce qui se passait. · ce qui", "qu'est-ce qui"],
        ["demain · hier · aujourd'hui · la semaine prochaine", "le lendemain · la veille · ce jour-là · la semaine suivante", "palabras de tiempo"]
      ]],
      ej: [["Il a dit qu'il était fatigué.", "Dijo que estaba cansado."], ["Elle a dit qu'elle viendrait.", "Dijo que vendría."], ["Il m'a demandé si j'avais fini.", "Me preguntó si había terminado."], ["Il m'a dit de partir.", "Me dijo que me fuera."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il m'a demandé que si je venais.", "Il m'a demandé si je venais.", "«Que si» no existe en francés."], ["Le médecin m'a dit que je me repose.", "Le médecin m'a dit de me reposer.", "Orden: de + infinitivo."], ["Il a dit qu'il finira le rapport demain.", "Il a dit qu'il finirait le rapport le lendemain.", "Futuro → condicional; demain → le lendemain."]] }
  ],
  ejemplos: [
    { sit: "« Je suis malade. » (Laura, ayer)", resp: "Laura m'a dit qu'elle était malade.", pasos: ["presente → imparfait."], porque: "Retroceso." },
    { sit: "« J'ai perdu mes clés. »", resp: "Elle a expliqué qu'elle avait perdu ses clés.", pasos: ["pc → plus-que-parfait."], porque: "Retroceso." },
    { sit: "« Je finirai le rapport demain. »", resp: "Il a dit qu'il finirait le rapport le lendemain.", pasos: ["futuro → condicional; demain → le lendemain."], porque: "Retroceso." }
  ],
  comprueba: [
    { q: "En el indirecto en pasado, el presente pasa a…", o: ["imparfait", "passé composé"], a: 0, b: "gr", porque: "Retroceso." },
    { q: "El futuro pasa a…", o: ["condicional", "futuro anterior"], a: 0, b: "gr", porque: "viendrait." },
    { q: "«Demain» pasa a…", o: ["le lendemain", "la veille"], a: 0, b: "gr", porque: "Al día siguiente." }
  ],
  practica: [
    { fase: "guiada", c: ["b2dp-mots"], k: "sort", ask: "¿Discurso directo o indirecto en pasado?", q: "Clasifica.", cats: ["Discurso directo", "Discurso indirecto en pasado"], items: [["demain", 0], ["le lendemain", 1], ["hier", 0], ["la veille", 1], ["aujourd'hui", 0], ["ce jour-là", 1], ["la semaine prochaine", 0], ["la semaine suivante", 1]], pista: "¿Desde hoy o desde entonces?", why: "Palabras de tiempo." },
    { fase: "guiada", c: ["b2dp-temps"], k: "choice", ask: "« Je suis malade. » → Hier, Laura m'a dit qu'elle…", q: "«Hier, Laura m'a dit qu'elle ___ malade.»", o: ["était", "est"], a: 0, pista: "presente → imparfait.", why: "<b>était</b>." },
    { fase: "guiada", c: ["b2dp-temps"], k: "choice", ask: "« Je finirai le rapport demain. » → Il a dit qu'il…", q: "«Il a dit qu'il ___ le rapport le lendemain.»", o: ["finirait", "finira"], a: 0, pista: "futuro → condicional.", why: "<b>finirait</b>." },
    { fase: "indep", c: ["b2dp-temps"], k: "fill", ask: "« J'ai perdu mes clés. » → plus-que-parfait.", q: "Elle a expliqué qu'elle ___ ses clés.", acc: ["avait perdu"], why: "<b>avait perdu</b>." },
    { fase: "indep", c: ["b2dp-mots"], k: "fill", ask: "« Tu viens à la fête ? » → indirecto.", q: "Il m'a demandé ___ je venais à la fête.", acc: ["si"], why: "<b>si</b>." },
    { fase: "indep", c: ["b2dp-mots"], k: "fill", ask: "« Qu'est-ce que tu fais ? » → indirecto.", q: "Ma mère m'a demandé ___ je faisais.", acc: ["ce que"], why: "<b>ce que</b>." },
    { fase: "aplica", c: ["b2dp-mots"], k: "spot", ask: "Encuentra el error.", s: "Le professeur m'a demandé [que si] j'avais lu le texte .", fix: "si", why: "<b>si</b>." },
    { fase: "aplica", c: ["b2dp-mots"], k: "spot", ask: "Encuentra el error.", s: "Le médecin m'a dit [que je me repose] .", fix: "de me reposer", why: "<b>de me reposer</b>." },
    { fase: "aplica", c: ["b2dp-temps"], k: "match", ask: "Une cada tiempo directo con su cambio.", q: "Directo → indirecto en pasado", pairs: [["présent", "imparfait"], ["passé composé", "plus-que-parfait"], ["futur simple", "conditionnel présent"], ["futur proche", "aller à l'imparfait + infinitif"], ["impératif", "de + infinitif"]], why: "Retroceso." },
    { fase: "dominio", c: ["b2dp-temps"], k: "choice", ask: "« Nous allons déménager. » → Ils ont annoncé qu'ils…", q: "«Ils ont annoncé qu'ils ___ déménager.»", o: ["allaient", "vont"], a: 0, why: "<b>allaient</b>." },
    { fase: "dominio", c: ["b2dp-mots"], k: "choice", ask: "« Qu'est-ce qui se passe ? » → Il a demandé…", q: "«Il a demandé ___ se passait.»", o: ["ce qui", "ce que"], a: 0, why: "<b>ce qui</b>." },
    { fase: "dominio", c: ["b2dp-temps", "b2dp-mots"], k: "listen", say: "Elle m'a demandé si j'avais fini mon travail.", acc: ["Elle m'a demandé si j'avais fini mon travail."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle m'a demandé si j'avais fini mon travail.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b12-but"] = {
  v: 1, lang: "fr", nivel: "B1", estado: "piloto",
  titulo: "Exprimer le but : pour, afin de, pour que",
  objetivo: {
    que: "Vas a expresar la finalidad: pour / afin de + infinitivo con el mismo sujeto, pour que / afin que + subjuntivo con otro.",
    corto: "J'étudie pour réussir. · Je parle lentement pour que tu comprennes.",
    podras: ["Usar pour / afin de + infinitivo cuando el sujeto es el mismo.", "Usar pour que / afin que + subjuntivo cuando el sujeto cambia.", "Decir «para no» (pour ne pas) y «por miedo a» (de peur de / de peur que)."],
    iconos: ["ic2/estrella", "ic2/bombilla", "ic2/lapiz"],
    previos: ["El subjuntivo (B1.1, lecciones 6 y 41)."],
    capacidad: "Ahora explicas para qué haces las cosas."
  },
  requiere: R("b1sj-forme", "b1si-autres"), recupera: ["b1sj-forme"],
  conceptos: {
    "b2bu-inf": { n: "mismo sujeto: pour / afin de / dans le but de + infinitivo; pour ne pas + infinitivo; de peur de", b: "gr" },
    "b2bu-subj": { n: "otro sujeto: pour que / afin que / de peur que + subjuntivo", b: "gr" }
  },
  video: {
    titulo: "La finalidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "pour · pour que", seg: [
        { es: "Hola. ¿Para qué? Mira si el sujeto es el mismo." } ] },
      { v: "dos",
        a: { tag: "mismo sujeto", fr: "J'étudie pour réussir.", es: "+ infinitivo" },
        b: { tag: "otro sujeto", fr: "Je parle lentement pour que tu comprennes.", es: "+ subjuntivo" },
        seg: [ { es: "Yo estudio, yo apruebo:", p: 1 }, { fr: "J'étudie pour réussir.", p: 1 }, { es: "Yo hablo, tú entiendes:", p: 2 }, { fr: "Je parle lentement pour que tu comprennes.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Te explico la regla para que la entiendas.»", o: ["Je t'explique la règle pour que tu la comprennes.", "Je t'explique la règle pour que tu la comprends."], a: 0,
        bien: "¡Sí! Pour que + subjuntivo.", mal: "Pour que lleva subjuntivo: comprennes.",
        seg: [ { es: "Pausa. Para que entiendas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pour", "afin de", "pour que", "afin que", "pour ne pas", "de peur que"], seg: [
        { es: "Mismo sujeto, infinitivo; otro sujeto, subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El DELF", img: "bg-biblioteca", yo: "camila",
    escena: "Camila se prepara para el DELF.",
    pj: PJ,
    lineas: [
      ["camila", "J'économise pour partir en France l'été prochain. J'étudie le français pour travailler au Canada.", "Ahorro para irme a Francia el próximo verano. Estudio francés para trabajar en Canadá."],
      ["hugo", "Je vais à la bibliothèque afin de réviser au calme. Je te prête mes notes pour que tu puisses réviser.", "Voy a la biblioteca para repasar con calma. Te presto mis apuntes para que puedas repasar."],
      ["camila", "Merci ! Parle plus fort pour que je t'entende. Je note tout pour ne pas oublier mes rendez-vous.", "¡Gracias! Habla más fuerte para que te oiga. Lo anoto todo para no olvidar mis citas."],
      ["hugo", "Le professeur répète la consigne afin que tout le monde comprenne. Je t'écris pour que tu saches la vérité.", "El profesor repite la consigna para que todos entiendan. Te escribo para que sepas la verdad."]
    ],
    fijate: "Fíjate: pour partir, pour travailler, afin de réviser (mismo sujeto); pour que tu puisses, pour que je t'entende, afin que tout le monde comprenne, pour que tu saches (otro sujeto); pour ne pas oublier."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Infinitivo o subjuntivo",
      idea: "Mira los sujetos. Mismo sujeto → pour / afin de / dans le but de + infinitivo: J'étudie pour réussir. Otro sujeto → pour que / afin que + subjuntivo: Je parle lentement pour que tu comprennes. Para no… → pour ne pas + infinitivo (ne pas juntos delante del infinitivo). Para evitar algo: de peur de + infinitivo (mismo sujeto) / de peur que + subjuntivo (otro sujeto).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["J'économise pour partir en France. · pour", "Ahorro para irme a Francia.", "pour + infinitivo"],
        ["afin de réviser · afin de · dans le but de", "para repasar · con el fin de", "+ infinitivo"],
        ["pour ne pas oublier · ne pas", "para no olvidar", "negación"],
        ["de peur d'être mouillé · de peur de", "por miedo a mojarse", "+ infinitivo"],
        ["pour que tu comprennes · comprennes · pour que", "para que entiendas", "+ subjuntivo"],
        ["afin que tout le monde comprenne · afin que", "para que todos entiendan", "+ subjuntivo"],
        ["pour que je t'entende · entende", "para que te oiga", "+ subjuntivo"],
        ["afin que vous ayez le temps · ayez", "para que tengan tiempo", "+ subjuntivo"],
        ["de peur que le chat ne sorte · de peur que · de crainte que", "por miedo a que el gato salga", "+ subjuntivo"],
        ["pour être à l'heure · pour être", "para llegar a tiempo", "mismo sujeto"]
      ]],
      ej: [["J'étudie pour réussir.", "Estudio para aprobar."], ["Je parle lentement pour que tu comprennes.", "Hablo despacio para que entiendas."], ["Je pars tôt pour ne pas être en retard.", "Salgo temprano para no llegar tarde."], ["Elle travaille afin de voyager.", "Trabaja para viajar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["pour que tu comprends", "pour que tu comprennes", "Pour que + subjuntivo."], ["Je me lève tôt pour que je sois à l'heure.", "Je me lève tôt pour être à l'heure.", "Mismo sujeto: infinitivo."], ["pour ne oublier pas", "pour ne pas oublier", "ne pas juntos delante del infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Ahorro para irme a Francia.»", resp: "J'économise pour partir en France.", pasos: ["Mismo sujeto: pour + infinitivo."], porque: "Finalidad." },
    { sit: "«Repite la consigna para que todos entiendan.»", resp: "Il répète la consigne afin que tout le monde comprenne.", pasos: ["Otro sujeto: subjuntivo."], porque: "Finalidad." },
    { sit: "«Lo anoto para no olvidar.»", resp: "Je note tout pour ne pas oublier.", pasos: ["pour ne pas + infinitivo."], porque: "Negación." }
  ],
  comprueba: [
    { q: "Con el mismo sujeto se usa…", o: ["pour + infinitivo", "pour que + subjuntivo"], a: 0, b: "gr", porque: "Mismo sujeto." },
    { q: "Pour que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Otro sujeto." },
    { q: "«Para no olvidar» se dice…", o: ["pour ne pas oublier", "pour ne oublier pas"], a: 0, b: "gr", porque: "ne pas juntos." }
  ],
  practica: [
    { fase: "guiada", c: ["b2bu-inf", "b2bu-subj"], k: "sort", ask: "¿+ infinitivo o + subjuntivo?", q: "Clasifica.", cats: ["+ infinitivo", "+ subjuntivo"], items: [["pour", 0], ["pour que", 1], ["afin de", 0], ["afin que", 1], ["de peur de", 0], ["de peur que", 1], ["dans le but de", 0], ["de crainte que", 1]], pista: "¿Lleva que?", why: "Estructuras." },
    { fase: "guiada", c: ["b2bu-inf"], k: "choice", ask: "«Ahorro para irme a Francia.»", q: "«J'économise ___ partir en France l'été prochain.»", o: ["pour", "pour que"], a: 0, pista: "Mismo sujeto.", why: "<b>pour</b>." },
    { fase: "guiada", c: ["b2bu-subj"], k: "choice", ask: "«El profe repite para que todos entiendan.»", q: "«Le professeur répète la consigne ___ tout le monde comprenne.»", o: ["afin que", "afin de"], a: 0, pista: "Otro sujeto.", why: "<b>afin que</b>." },
    { fase: "indep", c: ["b2bu-subj"], k: "fill", ask: "Subjuntivo de entendre (je).", q: "Parle plus fort pour que je t'___ !", acc: ["entende"], why: "<b>entende</b>." },
    { fase: "indep", c: ["b2bu-subj"], k: "fill", ask: "Subjuntivo de avoir (vous).", q: "Je vous envoie le document afin que vous ___ le temps de le lire.", acc: ["ayez"], why: "<b>ayez</b>." },
    { fase: "indep", c: ["b2bu-inf"], k: "fill", ask: "«para no»", q: "Je note tout dans mon agenda pour ___ oublier mes rendez-vous.", acc: ["ne pas"], why: "<b>pour ne pas</b>." },
    { fase: "aplica", c: ["b2bu-subj"], k: "spot", ask: "Encuentra el error.", s: "Je t'explique la règle pour que tu la [comprends] .", fix: "comprennes", why: "<b>comprennes</b>." },
    { fase: "aplica", c: ["b2bu-inf"], k: "spot", ask: "Encuentra el error.", s: "Je me lève tôt [pour que je sois] à l'heure .", fix: "pour être", why: "<b>pour être</b>." },
    { fase: "aplica", c: ["b2bu-inf", "b2bu-subj"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Je prends un parapluie", "de peur d'être mouillé."], ["Elle révise tous les soirs", "afin de réussir le DELF."], ["Je te prête mes notes", "pour que tu puisses réviser."], ["Il parle doucement", "pour ne pas réveiller le bébé."]], why: "Finalidad." },
    { fase: "dominio", c: ["b2bu-subj"], k: "choice", ask: "«Cierra la ventana por miedo a que salga el gato.»", q: "«Ferme la fenêtre ___ le chat ne sorte.»", o: ["de peur que", "de peur de"], a: 0, why: "<b>de peur que</b>." },
    { fase: "dominio", c: ["b2bu-inf"], k: "order", ask: "Ordena: «Estudio francés para trabajar en Canadá».", tokens: ["J'étudie le français", "pour travailler", "au Canada."], why: "<b>J'étudie le français pour travailler au Canada.</b>" },
    { fase: "dominio", c: ["b2bu-inf", "b2bu-subj"], k: "listen", say: "Je t'écris pour que tu saches la vérité.", acc: ["Je t'écris pour que tu saches la vérité."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je t'écris pour que tu saches la vérité.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Canada", "France"], previo: [] }
};

})();
