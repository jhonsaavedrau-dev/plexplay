/* PLEX PLAY 4.61 — Sistema de enseñanza: las fichas del curso «Remédiation» (rem). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también B2.1, el curso anterior).
   Remédiation parte de B2.1: BASE son todos los conceptos de Primeros pasos, A1, A2, B1.1, B1.2 y B2.1, que las fichas dan por enseñados.
   El «Examen blanc» no tiene ficha: es un simulacro.
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
  "na2-sujet", "pj2-intention", "pj2-compte", "qt-nom", "qt-verbe", "am2-place", "am2-adj", "b1pi-decor", "b1pi-fait", "b1pq-forme",
  "b1pq-usage", "b1ap-cod", "b1ap-avant", "b1rel-quique", "b1rel-oudont", "b1ge-forme", "b1ge-usage", "b1sj-forme", "b1sj-usage", "b1co-forme",
  "b1co-usage", "b1op-mode", "b1op-connect", "b1mr-cest", "b1mr-ce", "b1oc-oppo", "b1oc-conc", "b1in-registre", "b1in-mots", "b1vp-a",
  "b1vp-de", "b1ad-forme", "b1ad-place", "b1pe-trois", "b1pe-passe", "b1rc-ordre", "b1rc-avapres", "b1et-etudes", "b1et-travail", "b1ih-forme",
  "b1ih-usage", "b1ai-fond", "b1ai-coupe", "b1va-venait", "b1va-allait", "b1fs-forme", "b1fs-quand", "b1fp-choix", "b1fp-si", "b1cp-demander",
  "b1cp-conseil", "b1rg-forme", "b1rg-usage", "b1cj-sens", "b1cj-futur", "b1aa-prep", "b1aa-recit", "b1rs-intro", "b1rs-structure", "b1ae-oui",
  "b1ae-non", "b1ip-aff", "b1ip-neg", "b1cc-cod", "b1cc-coi", "b1y-lieu", "b1y-pers", "b1en-qte", "b1en-de", "b1pi-place",
  "b1pi-exc", "b1rc2-lequel", "b1rc2-contr", "b1cq-forme", "b1cq-indir", "b1pt-usage", "b1pt-reponse", "b1on-sens", "b1on-verbe", "b1to-adj",
  "b1to-pron", "b1pa-place", "b1pa-sens", "b1mm-choix", "b1mm-sup", "b1ng-mots", "b1ng-place", "b1si-etre", "b1si-autres", "b1ob-obl",
  "b1ob-int", "b1cs-conseil", "b1cs-suggest", "b1se-voc", "b1se-struct", "b1ad-accord", "b1ad-desac", "b1cd-indic", "b1cd-subj", "b1rf-expl",
  "b1rf-resume", "b1ex-mots", "b1ex-tel", "b1ca-mots", "b1ca-nonseul", "b1cl-annonce", "b1cl-position", "b1pp-prendre", "b1pp-donner", "b1sp-probleme",
  "b1sp-demande", "b1pm-demander", "b1pm-repondre", "b1pa-prop", "b1pa-rep", "b1lg-argent", "b1lg-demarches", "b1sa-symptomes", "b1sa-traitement", "b1en-probleme",
  "b1en-solution", "b1md-presse", "b1md-reseaux", "b1vi-probleme", "b1vi-solution", "b1cs-payer", "b1cs-apres", "b1rl-verbes", "b1rl-famille", "b1cc2-presenter",
  "b1cc2-avis", "b1ch-fraction", "b1ch-evolution", "b1la-ouverture", "b1la-cloture", "b1fd-voc", "b1fd-passif", "b1ei-humeur", "b1ei-autres", "b1rf2-noms",
  "b1rf2-verbes", "b2si-possible", "b2si-irreel", "b2di-question", "b2di-ordre", "b2pd-ordre", "b2pd-temps", "b2et-passe", "b2et-futur", "b2cc-cause",
  "b2cc-csq", "b2vp-forme", "b2vp-agent", "b2pp-poss", "b2pp-dem", "b2ce-formules", "b2ce-plan", "b2in-pos", "b2in-neg", "b2fa-forme",
  "b2fa-usage", "b2dp-temps", "b2dp-mots", "b2bu-inf", "b2bu-subj", "b2si2-meme", "b2si2-autre", "b2ip-forme", "b2ip-usage", "b2cn-evol",
  "b2cn-egal", "b2cp-forme", "b2cp-si", "b2cj-present", "b2cj-passe", "b2sp-forme", "b2sp-usage", "b2sc-subj", "b2sc-indic", "b2fd-cond",
  "b2fd-passe", "b2ct-anter", "b2ct-poster", "b2pc-forme", "b2pc-sujet", "b2ps-reg", "b2ps-irr", "b2fc-faire", "b2fc-se", "b2vs-compte",
  "b2vs-autres", "b2vc-jouer", "b2vc-manquer", "b2no-suff", "b2no-autres", "b2sr-subj", "b2sr-indic", "b2cd-cas", "b2cd-cond", "b2oi-conj",
  "b2oi-mots", "b2ro-selon", "b2ro-comme", "b2vi-neutre", "b2vi-concede", "b2pe-intro", "b2pe-plan", "b2pb-forme", "b2pb-indir", "b2pg-schema",
  "b2pg-conn", "b2ca-conceder", "b2ca-refuter", "b2lm-plan", "b2lm-formules", "b2cr-regles", "b2cr-verbes", "b2sh-subj", "b2sh-autres", "b2at-cond",
  "b2at-limiter", "b2ii-mots", "b2ii-struct", "b2mt-contrat", "b2mt-droits", "b2ed-etapes", "b2ed-titres", "b2sa-systeme", "b2sa-prev", "b2ti-voc",
  "b2ti-risques", "b2it-pers", "b2it-vote", "b2jd-pers", "b2jd-peine", "b2ec-banque", "b2ec-budget", "b2vu-espaces", "b2vu-mobilite", "b2dv-pers",
  "b2dv-integr", "b2eg-travail", "b2eg-maison", "b2ad-produits", "b2ad-habitudes", "b2tr-probl", "b2tr-sol", "b2bv-pers", "b2bv-actions", "b2fa-corps",
  "b2fa-mots", "b2ps2-pref", "b2ps2-suff", "b2vp2-faire", "b2vp2-autres", "b2an-echelle", "b2an-degre", "b2mo-sens", "b2mo-registre", "b2rs-mots",
  "b2rs-syntaxe", "b2tp-appel", "b2tp-accueil", "b2po-signes", "b2po-maj", "b2ac-demi", "b2ac-couleurs", "b2pl-al", "b2pl-x", "b2ne-s",
  "b2ne-et", "b2fr-belsui", "b2fr-quebec", "b2pv-patience", "b2pv-autres", "b3rc-formes", "b3rc-duquel", "b3cp-valeurs", "b3cp-hyp", "b3sj-passe",
  "b3sj-mode", "b3pg-gerondif", "b3pg-adj", "b3fl-qui", "b3fl-syntaxe", "b3mo-echelle", "b3mo-mode", "b3pr-titre", "b3pr-genres", "b3db-accord",
  "b3db-parole", "b3co-mode", "b3co-autres", "b3cd-mode", "b3cd-autres", "b3ps-formes", "b3ps-usage", "b3no-genre", "b3no-phrase", "b3cl-fonctions",
  "b3cl-or", "b3mr-cest", "b3mr-ce", "b3ap-cod", "b3ap-coi", "b3st-indic", "b3st-subj", "b3pi-forme", "b3pi-accord", "b3ne-emploi",
  "b3ne-sens", "b3si-forme", "b3si-equiv", "b3in-forme", "b3in-oral", "b3ad-fait", "b3ad-mesure", "b3pn-le", "b3pn-eny", "b3oa-metier",
  "b3oa-expr", "b3av-place", "b3av-sens", "b3hm-mixte", "b3hm-meme", "b3ca-phrase", "b3ca-nom", "b3cq-conj", "b3cq-intens", "b3bc-but",
  "b3bc-crainte", "b3es-plan", "b3es-formules", "b3tb-structure", "b3tb-rhetorique", "b3cl2-reagir", "b3cl2-proposer", "b3rp-structure", "b3rp-style", "b3eo-plan",
  "b3eo-debat", "b3ng-proposer", "b3ng-accord", "b3ra-genres", "b3ra-strategie", "b3im-sous", "b3im-ironie", "b3tp-forme", "b3tp-jeux", "b3gr-tendance",
  "b3gr-chiffres", "b3pn2-symboles", "b3pn2-abrev", "b3pf-lexique", "b3pf-structure", "b3ct-direct", "b3ct-indirect", "b3te-climat", "b3te-solutions", "b3mn-acteurs",
  "b3mn-effets", "b3at-tendances", "b3at-bienetre", "b3sc-methode", "b3sc-resultats", "b3be-themes", "b3be-valeurs", "b3pt-patrimoine", "b3pt-acces", "b3ec-problemes",
  "b3ec-solutions", "b3me-deonto", "b3me-desinfo", "b3sp-pratique", "b3sp-valeurs", "b3sm-troubles", "b3sm-soin", "b3cl3-probleme", "b3cl3-politiques", "b3pb-pub",
  "b3pb-conso", "b3eu-institutions", "b3eu-debats", "b3lv-prendre", "b3lv-tenir", "b3co2-prendre", "b3co2-autres", "b3sp2-vue", "b3sp2-ouie", "b3pa-paires",
  "b3pa-droit", "b3hg-quoi", "b3hg-sans", "b3ex-tete", "b3ex-oeil", "b3an-equiv", "b3an-faux", "b3la-temps", "b3la-logique", "b3em-echelle",
  "b3em-etats", "b3eu2-mort", "b3eu2-travail", "b3it-fort", "b3it-faible", "b3vf-monter", "b3vf-baisser", "b3fs-image", "b3fs-intensite"
];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ I · Genre et accords ================================ */



/* ================================ I · Prépositions ================================ */

/* ================================ I · Genre et accords ================================ */
/* ── 1. Le genre des noms ── */
E["genre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le genre des noms",
  objetivo: {
    que: "Vas a corregir el error más frecuente de los hispanohablantes: el género de los nombres que cambian respecto al español.",
    corto: "un article intéressant · une méthode · une équipe · la mer",
    podras: ["Aprender cada nombre con su artículo: une méthode, une valeur, un article, le bonheur.", "Reconocer las terminaciones femeninas (-tion, -sion, -té, -ure, -ance, -ence, -eur abstracto) y masculinas (-ment, -age, -isme, -eau).", "Recordar las excepciones (la page, la plage, l'image, l'eau) y que mon / ton / son delante de vocal no cambian el género."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/pregunta"],
    previos: ["Los artículos (A1, lección 3) y el género de los nombres derivados (B2.1, lección 12)."],
    capacidad: "Ahora pones bien el artículo en las palabras que más traicionan."
  },
  requiere: R("at-genre", "al-genre", "b3no-genre"), recupera: ["at-genre"],
  conceptos: {
    "b4gn-terminaisons": { n: "femeninas: -tion, -sion, -té, -ure, -ance, -ence, -eur abstracto (la valeur, la société, la culture); masculinas: -ment, -age, -isme, -eau (le développement, le voyage, le niveau); excepciones: la page, la plage, l'image, l'eau", b: "gr" },
    "b4gn-pieges": { n: "nombres que cambian respecto al español: un article, une méthode, une valeur, une équipe, la mer, le bonheur; mon / ton / son delante de vocal en femenino (son image, mon amie)", b: "gr" }
  },
  video: {
    titulo: "El género que engaña", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "une méthode", seg: [
        { es: "Hola. Muchas palabras cambian de género al pasar al francés." } ] },
      { v: "frase", filas: [
          { nota: "femenino", p: 1, partes: [["une méthode, une valeur", "-", 1]] },
          { nota: "masculino", p: 2, partes: [["un article intéressant", "-", 2]] },
          { nota: "femenino", p: 3, partes: [["une équipe, la mer", "-", 3]] } ], seg: [
        { fr: "une méthode, une valeur", p: 1 }, { fr: "un article intéressant", p: 2 }, { fr: "une équipe, la mer", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un artículo interesante»", o: ["un article intéressant", "une article intéressante"], a: 0,
        bien: "¡Sí! Article es masculino.", mal: "Article es masculino: un article.",
        seg: [ { es: "Pausa. Un article." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une méthode", "une valeur", "un article", "le bonheur", "la société", "le niveau"], seg: [
        { es: "Aprende cada nombre con su artículo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La corrección", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia devuelve a Camila un texto corregido.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, tu as écrit « une article intéressante ». Article est masculin : un article intéressant.", "Camila, escribiste «una artículo interesante». Article es masculino: un article intéressant."],
      ["camila", "Et « le méthode » ? — Non : la méthode. Il faut changer la méthode de travail.", "¿Y «el método»? — No: la méthode. Hay que cambiar el método de trabajo."],
      ["sofia", "Exactement. La valeur de ce diplôme, la société, la culture : féminin. Le développement, le voyage, le niveau : masculin.", "Exacto. El valor de este diploma, la sociedad, la cultura: femenino. El desarrollo, el viaje, el nivel: masculino."],
      ["camila", "Et « l'équipe » ? — Féminin : la nouvelle équipe de développement. Et cette entreprise soigne son image : image est féminin, mais on dit son.", "¿Y «el equipo»? — Femenino: el nuevo equipo de desarrollo. Y esta empresa cuida su imagen: image es femenino, pero se dice son."]
    ],
    fijate: "Fíjate: un article, la méthode, la valeur, la société, la culture (femenino); le développement, le voyage, le niveau (masculino); la nouvelle équipe; son image (son delante de vocal)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Terminaciones y trampas",
      idea: "Aprende cada nombre con un / une. Femeninas: -tion, -sion, -té, -ure, -ance, -ence y -eur abstracto (la valeur, la société, la culture, la méthode). Masculinas: -ment, -age, -isme, -eau (le développement, le voyage, le niveau, le bonheur). Excepciones: la page, la plage, l'image, l'eau. Trampas frente al español: un article (masculino), une méthode, une valeur, une équipe, la mer. Delante de vocal se usa mon / ton / son también en femenino: son image, mon amie (sigue siendo femenino).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Género"], [
        ["Un article du Monde que j'ai lu hier · Un", "Un artículo de Le Monde que leí ayer", "masculino"],
        ["Il faut changer la méthode de travail. · la", "Hay que cambiar el método de trabajo.", "femenino"],
        ["La valeur de ce diplôme · La", "El valor de este diploma", "femenino"],
        ["Le bonheur au travail · Le", "La felicidad en el trabajo", "masculino"],
        ["Cette entreprise soigne son image. · son", "Esta empresa cuida su imagen.", "son + vocal"],
        ["développement", "desarrollo", "masculino (-ment)"],
        ["La nouvelle équipe de développement", "El nuevo equipo de desarrollo", "femenino"],
        ["une analyse précise · précise", "un análisis preciso", "femenino"],
        ["développement · voyage · bonheur · niveau", "desarrollo · viaje · felicidad · nivel", "le"],
        ["société · culture · valeur · méthode", "sociedad · cultura · valor · método", "la"],
        ["un article intéressant", "un artículo interesante", "masculino"]
      ]],
      ej: [["une méthode, une valeur", "un método, un valor"], ["un article intéressant", "un artículo interesante"], ["une équipe, la mer", "un equipo, el mar"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une article intéressante", "un article intéressant", "article es masculino."], ["le méthode", "la méthode", "méthode es femenino."], ["sa image", "son image", "Delante de vocal: son."]] }
  ],
  ejemplos: [
    { sit: "«Un artículo de Le Monde que leí ayer»", resp: "Un article du Monde que j'ai lu hier", pasos: ["article: masculino."], porque: "Trampa." },
    { sit: "«El valor de este diploma»", resp: "La valeur de ce diplôme", pasos: ["-eur abstracto: femenino."], porque: "Terminación." },
    { sit: "«Esta empresa cuida su imagen.»", resp: "Cette entreprise soigne son image.", pasos: ["son delante de vocal."], porque: "son + vocal." }
  ],
  comprueba: [
    { q: "«Article» es…", o: ["masculino", "femenino"], a: 0, b: "gr", porque: "un article." },
    { q: "Los nombres en -ment son casi siempre…", o: ["masculinos", "femeninos"], a: 0, b: "gr", porque: "le développement." },
    { q: "«Son image» es…", o: ["correcto: son delante de vocal", "un error: debe ser sa"], a: 0, b: "gr", porque: "son + vocal." }
  ],
  practica: [
    { fase: "guiada", c: ["b4gn-terminaisons", "b4gn-pieges"], k: "sort", ask: "¿le o la?", q: "Clasifica.", cats: ["le", "la"], items: [["développement", 0], ["voyage", 0], ["bonheur", 0], ["niveau", 0], ["société", 1], ["culture", 1], ["valeur", 1], ["méthode", 1]], pista: "Mira la terminación.", why: "Género." },
    { fase: "guiada", c: ["b4gn-pieges"], k: "choice", ask: "«Un artículo de Le Monde que leí ayer»", q: "«___ article du Monde que j'ai lu hier»", o: ["Un", "Une"], a: 0, pista: "Masculino.", why: "<b>Un</b> article." },
    { fase: "guiada", c: ["b4gn-pieges"], k: "choice", ask: "«Hay que cambiar el método de trabajo.»", q: "«Il faut changer ___ méthode de travail.»", o: ["la", "le"], a: 0, pista: "Femenino.", why: "<b>la</b> méthode." },
    { fase: "indep", c: ["b4gn-terminaisons"], k: "choice", ask: "«La felicidad en el trabajo»", q: "«___ bonheur au travail»", o: ["Le", "La"], a: 0, why: "<b>Le</b> bonheur." },
    { fase: "indep", c: ["b4gn-terminaisons"], k: "choice", ask: "¿Qué nombre es masculino?", q: "Elige.", o: ["développement", "société"], a: 0, why: "-ment: masculino." },
    { fase: "indep", c: ["b4gn-pieges"], k: "choice", ask: "«Esta empresa cuida su imagen.»", q: "«Cette entreprise soigne ___ image.»", o: ["son", "sa"], a: 0, why: "<b>son</b> + vocal." },
    { fase: "aplica", c: ["b4gn-pieges"], k: "match", ask: "Une cada nombre con su artículo.", q: "Nombre → artículo", pairs: [["article", "un"], ["méthode", "une"], ["valeur", "une"], ["bonheur", "un"]], why: "Géneros." },
    { fase: "aplica", c: ["b4gn-pieges"], k: "spot", ask: "Encuentra el error.", s: "J'ai lu [une] article très intéressant .", fix: "un", why: "<b>un</b> article." },
    { fase: "aplica", c: ["b4gn-terminaisons"], k: "choice", ask: "«El nuevo equipo de desarrollo»", q: "«___ équipe de développement»", o: ["La nouvelle", "Le nouveau"], a: 0, why: "<b>La nouvelle</b> équipe." },
    { fase: "dominio", c: ["b4gn-pieges"], k: "order", ask: "Ordena: «un artículo interesante».", tokens: ["un", "article", "intéressant"], why: "<b>un article intéressant</b>" },
    { fase: "dominio", c: ["b4gn-terminaisons"], k: "choice", ask: "«un análisis preciso»", q: "«une analyse ___»", o: ["précise", "précis"], a: 0, why: "<b>précise</b>." },
    { fase: "dominio", c: ["b4gn-terminaisons", "b4gn-pieges"], k: "listen", say: "Il faut changer la méthode de travail.", acc: ["Il faut changer la méthode de travail."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut changer la méthode de travail.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Monde"], previo: [] }
};

/* ── 2. Accorder l'adjectif ── */
E["accord"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Accorder l'adjectif",
  objetivo: {
    que: "Vas a concordar bien el adjetivo en género y número, también en las terminaciones que cambian.",
    corto: "une étudiante sérieuse · des problèmes sociaux · un nouvel ami",
    podras: ["Hacer el femenino: -if → -ive, -eux → -euse, -el → -elle, -ien → -ienne, -er → -ère.", "Hacer el plural: + s; -al → -aux en masculino (sociaux).", "Usar nouvel, bel, vieil delante de vocal y de + adjetivo plural + nombre en el escrito formal (de nouvelles idées)."],
    iconos: ["ic2/lapiz", "ic2/estrella", "ic2/libro"],
    previos: ["Los adjetivos (A1, lección 10), beau, nouveau, vieux (A1, lección 65) y el lugar del adjetivo (B1.1, lección 38)."],
    capacidad: "Ahora escribes sin faltas de concordancia en el adjetivo."
  },
  requiere: R("ad-accord", "ad-especial", "bn-voyelle", "b1pa-place"), recupera: ["ad-accord"],
  conceptos: {
    "b4ac-fem": { n: "femenino: -if → -ive (créative), -eux → -euse (heureuse), -el → -elle (culturelle), -ien → -ienne, -er → -ère; -t → -te (intéressante, lourde)", b: "gr" },
    "b4ac-plur": { n: "plural: + s (importantes); -al → -aux en masculino (sociaux); nouveau, beau, vieux → nouvel, bel, vieil delante de vocal; escrito formal: de + adjetivo plural + nombre (de nouvelles choses)", b: "gr" }
  },
  video: {
    titulo: "Concordar el adjetivo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "créative", seg: [
        { es: "Hola. El adjetivo copia el género y el número del nombre." } ] },
      { v: "frase", filas: [
          { nota: "-euse", p: 1, partes: [["une étudiante sérieuse", "-", 1]] },
          { nota: "-aux", p: 2, partes: [["des problèmes sociaux", "-", 2]] },
          { nota: "nouvel", p: 3, partes: [["un nouvel ami", "-", 3]] } ], seg: [
        { fr: "une étudiante sérieuse", p: 1 }, { fr: "des problèmes sociaux", p: 2 }, { fr: "un nouvel ami", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un nuevo apartamento»", o: ["un nouvel appartement", "un nouveau appartement"], a: 0,
        bien: "¡Sí! Nouvel delante de vocal.", mal: "Delante de vocal: nouvel.",
        seg: [ { es: "Pausa. Nouvel." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["créative", "heureuse", "culturelle", "sociaux", "nouvel", "vieil"], seg: [
        { es: "Femenino, plural y formas delante de vocal.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El artículo de Camila", img: "bg-cafe", yo: "camila",
    escena: "Hugo relee un artículo que Camila escribió sobre el trabajo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as écrit : « une charge de travail toujours plus lourd ». Charge est féminin : plus lourde.", "Escribiste: «una carga de trabajo cada vez más pesado». Charge es femenino: plus lourde."],
      ["camila", "Ah oui. Et « ces nouvelles technologies sont très créatifs » ? — Créatives : -if devient -ive.", "Ah, sí. ¿Y «estas nuevas tecnologías son muy creativos»? — Créatives: -if pasa a -ive."],
      ["hugo", "Et attention : le document présente de nouvelles choses, pas des nouveaux choses. Et les réseaux sociaux, avec -aux.", "Y ojo: el documento presenta cosas nuevas, no «des nouveaux choses». Y les réseaux sociaux, con -aux."],
      ["camila", "Merci ! Dans mon nouvel appartement, je vais tout relire. C'est un article très intéressant, non ?", "¡Gracias! En mi nuevo apartamento voy a releerlo todo. Es un artículo muy interesante, ¿no?"]
    ],
    fijate: "Fíjate: lourde (femenino), créatives (-if → -ive), de nouvelles choses (de + adjetivo plural), sociaux (-al → -aux), nouvel appartement (delante de vocal), intéressant (masculino)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Femenino, plural y casos especiales",
      idea: "El adjetivo toma el género y el número del nombre. Femenino: + e (intéressante, lourde, importante); -if → -ive (créative); -eux → -euse (heureuse, sérieuse); -el → -elle (culturelle); -ien → -ienne; -er → -ère. Plural: + s; -al → -aux en masculino (des réseaux sociaux; en femenino: sociales). Delante de nombre masculino que empieza por vocal: nouvel, bel, vieil (un nouvel ami, un vieil homme). En el escrito formal, des se vuelve de delante de adjetivo plural: de nouvelles choses.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Regla"], [
        ["C'est un article très intéressant. · intéressant", "Es un artículo muy interesante.", "masculino"],
        ["Le document présente de nouvelles choses. · nouvelles", "El documento presenta cosas nuevas.", "de + adj. plural"],
        ["un nouvel appartement · nouvel", "un apartamento nuevo", "nouvel + vocal"],
        ["Les salariés ressentent une charge de travail toujours plus lourde. · lourde", "Los empleados sienten una carga de trabajo cada vez más pesada.", "femenino"],
        ["les réseaux sociaux · sociaux", "las redes sociales", "-al → -aux"],
        ["des décisions importantes · importantes", "decisiones importantes", "femenino plural"],
        ["Ces nouvelles technologies sont très créatives et utiles. · créatives", "Estas nuevas tecnologías son muy creativas y útiles.", "-if → -ive"],
        ["un vieil homme · vieil", "un hombre viejo", "vieil + vocal"],
        ["intéressant = intéressante · créatif = créative · heureux = heureuse · culturel = culturelle · nouveau = nouvelle", "interesante · creativo · feliz · cultural · nuevo", "femeninos"],
        ["une étudiante sérieuse", "una estudiante seria", "-eux → -euse"]
      ]],
      ej: [["une étudiante sérieuse", "una estudiante seria"], ["des problèmes sociaux", "problemas sociales"], ["un nouvel ami", "un nuevo amigo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["des nouveaux choses", "de nouvelles choses", "chose es femenino; escrito formal: de."], ["un nouveau appartement", "un nouvel appartement", "Delante de vocal: nouvel."], ["des technologies créatifs", "des technologies créatives", "-if → -ive."]] }
  ],
  ejemplos: [
    { sit: "«un nuevo apartamento»", resp: "un nouvel appartement", pasos: ["Vocal: nouvel."], porque: "Forma especial." },
    { sit: "«las redes sociales»", resp: "les réseaux sociaux", pasos: ["-al → -aux."], porque: "Plural." },
    { sit: "«un hombre viejo»", resp: "un vieil homme", pasos: ["h muda: vieil."], porque: "Forma especial." }
  ],
  comprueba: [
    { q: "El femenino de «créatif» es…", o: ["créative", "créatife"], a: 0, b: "gr", porque: "-if → -ive." },
    { q: "El plural de «social» (masculino) es…", o: ["sociaux", "socials"], a: 0, b: "gr", porque: "-al → -aux." },
    { q: "En el escrito formal: «___ nouvelles idées»", o: ["de", "des"], a: 0, b: "gr", porque: "de + adj. plural." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ac-fem"], k: "match", ask: "Une cada adjetivo con su femenino.", q: "Masculino → femenino", pairs: [["intéressant", "intéressante"], ["créatif", "créative"], ["heureux", "heureuse"], ["culturel", "culturelle"]], pista: "-if → -ive, -eux → -euse, -el → -elle.", why: "Femeninos." },
    { fase: "guiada", c: ["b4ac-plur"], k: "choice", ask: "«un nuevo apartamento»", q: "«un ___ appartement»", o: ["nouvel", "nouveau"], a: 0, pista: "Vocal.", why: "<b>nouvel</b>." },
    { fase: "guiada", c: ["b4ac-plur"], k: "choice", ask: "«las redes sociales»", q: "«les réseaux ___»", o: ["sociaux", "socials"], a: 0, pista: "-al.", why: "<b>sociaux</b>." },
    { fase: "indep", c: ["b4ac-fem"], k: "fill", ask: "Concuerda intéressant con «article».", q: "C'est un article très ___ .", acc: ["intéressant"], why: "<b>intéressant</b>." },
    { fase: "indep", c: ["b4ac-plur"], k: "fill", ask: "Concuerda nouveau con «choses» (escrito formal: de …).", q: "Le document présente de ___ choses.", acc: ["nouvelles"], why: "<b>nouvelles</b>." },
    { fase: "indep", c: ["b4ac-fem"], k: "fill", ask: "Concuerda important con «décisions».", q: "des décisions ___", acc: ["importantes"], why: "<b>importantes</b>." },
    { fase: "aplica", c: ["b4ac-fem"], k: "spot", ask: "Encuentra el error.", s: "Les salariés ressentent une charge de travail toujours plus [lourd] .", fix: "lourde", why: "<b>lourde</b>." },
    { fase: "aplica", c: ["b4ac-fem"], k: "spot", ask: "Encuentra el error.", s: "Ces nouvelles technologies sont très [créatifs] et utiles .", fix: "créatives", why: "<b>créatives</b>." },
    { fase: "aplica", c: ["b4ac-plur"], k: "choice", ask: "«un hombre viejo»", q: "«un ___ homme»", o: ["vieil", "vieux"], a: 0, why: "<b>vieil</b>." },
    { fase: "dominio", c: ["b4ac-fem"], k: "order", ask: "Ordena: «una estudiante seria».", tokens: ["une", "étudiante", "sérieuse"], why: "<b>une étudiante sérieuse</b>" },
    { fase: "dominio", c: ["b4ac-fem"], k: "sort", ask: "¿Masculino o femenino?", q: "Clasifica.", cats: ["Masculino", "Femenino"], items: [["créatif", 0], ["heureux", 0], ["culturel", 0], ["intéressant", 0], ["créative", 1], ["heureuse", 1], ["culturelle", 1], ["intéressante", 1]], why: "Formas." },
    { fase: "dominio", c: ["b4ac-fem", "b4ac-plur"], k: "listen", say: "Le document présente de nouvelles choses.", acc: ["Le document présente de nouvelles choses."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le document présente de nouvelles choses.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 3. Le participe passé ── */
E["pp"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le participe passé",
  objetivo: {
    que: "Vas a concordar bien el participio pasado: con être, con el sujeto; con avoir, solo con el COD que va antes.",
    corto: "Elle est arrivée hier. · Les lettres que j'ai reçues · Ils se sont levés tôt.",
    podras: ["Concordar con el sujeto con être: elle est partie, ils se sont levés.", "No concordar nunca con el sujeto con avoir: elle a mangé.", "Concordar con el COD colocado antes (que, l', les): les lettres que j'ai reçues, je l'ai envoyée."],
    iconos: ["ic2/reloj-arena", "ic2/lapiz", "ic2/engranaje"],
    previos: ["El passé composé con être (A2, lección 2), la concordancia del participio (B1.1, lección 3) y los pronominales (B2.1, lección 15)."],
    capacidad: "Ahora concuerdas el participio como en un examen DELF."
  },
  requiere: R("pce-accord", "b1ap-cod", "b1ap-avant", "b3ap-cod"), recupera: ["b1ap-avant"],
  conceptos: {
    "b4pp-etre": { n: "con être (y los pronominales) el participio concuerda con el sujeto: elle est allée, ils se sont levés, les habitants se sont mobilisés", b: "gr" },
    "b4pp-avoir": { n: "con avoir no concuerda con el sujeto (nous avons écrit); concuerda con el COD si va antes (que, l', les): les erreurs qu'elle a faites, je l'ai envoyée, les mesures que la ville a prises; truco: preguntar «¿qué?»", b: "gr" }
  },
  video: {
    titulo: "¿Concuerda o no?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "reçues", seg: [
        { es: "Hola. Todo depende del auxiliar y de dónde está el COD." } ] },
      { v: "frase", filas: [
          { nota: "être", p: 1, partes: [["Elle est arrivée hier.", "-", 1]] },
          { nota: "COD antes", p: 2, partes: [["Les lettres que j'ai reçues", "-", 2]] },
          { nota: "pronominal", p: 3, partes: [["Ils se sont levés tôt.", "-", 3]] } ], seg: [
        { fr: "Elle est arrivée hier.", p: 1 }, { fr: "Les lettres que j'ai reçues", p: 2 }, { fr: "Ils se sont levés tôt.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Esta carta la envié ayer.»", o: ["Cette lettre, je l'ai envoyée hier.", "Cette lettre, je l'ai envoyé hier."], a: 0,
        bien: "¡Sí! L' (la lettre) va antes.", mal: "El COD l' va antes: envoyée.",
        seg: [ { es: "Pausa. ¿El COD va antes?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["allée", "relevées", "écrit", "envoyée", "prises", "mobilisés"], seg: [
        { es: "Être: sujeto. Avoir: COD antes.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La carta al ayuntamiento", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo escriben al ayuntamiento contra una carrera de coches en el barrio.",
    pj: PJ,
    lineas: [
      ["hugo", "Nous avons écrit une lettre à la mairie. Cette lettre, je l'ai envoyée hier.", "Escribimos una carta al ayuntamiento. Esta carta la envié ayer."],
      ["camila", "Les habitants se sont mobilisés contre la course. Ma voisine est allée à la réunion.", "Los vecinos se movilizaron contra la carrera. Mi vecina fue a la reunión."],
      ["hugo", "Et les mesures que la ville a prises ? — Rien encore.", "¿Y las medidas que tomó la ciudad? — Nada todavía."],
      ["camila", "J'ai relu la lettre : les erreurs que la correctrice a relevées sont récurrentes. Les erreurs qu'elle a faites, je les ai corrigées.", "Releí la carta: los errores que señaló la correctora son recurrentes. Los errores que ella cometió, los corregí."]
    ],
    fijate: "Fíjate: avons écrit (sin concordancia), je l'ai envoyée (COD antes), se sont mobilisés y est allée (être), les mesures que la ville a prises, les erreurs… relevées (COD antes)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Être, avoir y el COD",
      idea: "Con être (y con los verbos pronominales) el participio concuerda con el sujeto: Elle est allée à Paris, Ils se sont levés, Les habitants se sont mobilisés. Con avoir nunca concuerda con el sujeto: Elle a mangé, Nous avons écrit une lettre. Pero concuerda con el COD si este va antes del verbo (que, l', les): Les lettres que j'ai reçues, Cette lettre, je l'ai envoyée, Les mesures que la ville a prises. Truco: pregunta «¿qué?»; si la respuesta está antes del verbo, concuerda.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Elle est allée à Paris l'an dernier. · allée", "Fue a París el año pasado.", "être: sujeto"],
        ["Les erreurs que la correctrice a relevées sont récurrentes. · relevées", "Los errores que señaló la correctora son recurrentes.", "COD antes"],
        ["Nous avons écrit une lettre à la mairie. · écrit", "Escribimos una carta al ayuntamiento.", "avoir: sin concordancia"],
        ["Cette lettre, je l'ai envoyée hier. · envoyée", "Esta carta la envié ayer.", "COD antes"],
        ["Les habitants se sont mobilisés contre la course. · mobilisés", "Los vecinos se movilizaron contra la carrera.", "pronominal"],
        ["Les mesures que la ville a prises · prises", "Las medidas que tomó la ciudad", "COD antes"],
        ["La lettre que j'ai écrite · Elle est partie · Les erreurs qu'elle a faites", "La carta que escribí · Se fue · Los errores que cometió", "accord"],
        ["J'ai écrit une lettre · Ils ont mangé · Nous avons fini le rapport", "Escribí una carta · Comieron · Terminamos el informe", "pas d'accord"],
        ["Elle est arrivée hier.", "Llegó ayer.", "être"]
      ]],
      ej: [["Elle est arrivée hier.", "Ella llegó ayer."], ["Les lettres que j'ai reçues", "Las cartas que recibí"], ["Ils se sont levés tôt.", "Se levantaron temprano."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les décisions que vous avez pris", "les décisions que vous avez prises", "COD femenino plural antes → -es."], ["Elle a mangée.", "Elle a mangé.", "Avoir: no concuerda con el sujeto."], ["Les habitants se sont mobilisé.", "Les habitants se sont mobilisés.", "Pronominal: con el sujeto."]] }
  ],
  ejemplos: [
    { sit: "«Escribimos una carta al ayuntamiento.»", resp: "Nous avons écrit une lettre à la mairie.", pasos: ["COD después: sin concordancia."], porque: "avoir." },
    { sit: "«Esta carta la envié ayer.»", resp: "Cette lettre, je l'ai envoyée hier.", pasos: ["l' = la lettre, antes."], porque: "COD antes." },
    { sit: "«Las medidas que tomó la ciudad»", resp: "Les mesures que la ville a prises", pasos: ["que = les mesures."], porque: "COD antes." }
  ],
  comprueba: [
    { q: "Con être, el participio concuerda con…", o: ["el sujeto", "el COD"], a: 0, b: "gr", porque: "elle est partie." },
    { q: "Con avoir, el participio concuerda…", o: ["con el COD si va antes", "siempre con el sujeto"], a: 0, b: "gr", porque: "que j'ai reçues." },
    { q: "«Elle a ___ une pomme.» (manger)", o: ["mangé", "mangée"], a: 0, b: "gr", porque: "COD después." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pp-etre", "b4pp-avoir"], k: "sort", ask: "¿Hay concordancia o no?", q: "Clasifica.", cats: ["accord", "pas d'accord"], items: [["La lettre que j'ai écrite", 0], ["J'ai écrit une lettre", 1], ["Elle est partie", 0], ["Ils ont mangé", 1], ["Les erreurs qu'elle a faites", 0], ["Nous avons fini le rapport", 1]], pista: "¿Être o COD antes?", why: "Reglas." },
    { fase: "guiada", c: ["b4pp-avoir"], k: "choice", ask: "«Escribimos una carta al ayuntamiento.»", q: "«Nous avons ___ une lettre à la mairie.»", o: ["écrit", "écrite"], a: 0, pista: "COD después.", why: "<b>écrit</b>." },
    { fase: "guiada", c: ["b4pp-avoir"], k: "choice", ask: "«Esta carta la envié ayer.»", q: "«Cette lettre, je l'ai ___ hier.»", o: ["envoyée", "envoyé"], a: 0, pista: "l' antes.", why: "<b>envoyée</b>." },
    { fase: "indep", c: ["b4pp-etre"], k: "fill", ask: "Participio de aller (elle).", q: "Elle est ___ à Paris l'an dernier.", acc: ["allée"], why: "<b>allée</b>." },
    { fase: "indep", c: ["b4pp-avoir"], k: "fill", ask: "Participio de relever (les erreurs, antes).", q: "Les erreurs que la correctrice a ___ sont récurrentes.", acc: ["relevées"], why: "<b>relevées</b>." },
    { fase: "indep", c: ["b4pp-avoir"], k: "choice", ask: "«Las medidas que tomó la ciudad»", q: "«Les mesures que la ville a ___»", o: ["prises", "pris"], a: 0, why: "<b>prises</b>." },
    { fase: "aplica", c: ["b4pp-etre"], k: "spot", ask: "Encuentra el error.", s: "Les habitants se sont [mobilisé] contre la course .", fix: "mobilisés", why: "<b>mobilisés</b>." },
    { fase: "aplica", c: ["b4pp-avoir"], k: "spot", ask: "Encuentra el error.", s: "Voici les décisions que vous avez [pris] .", fix: "prises", why: "<b>prises</b>." },
    { fase: "aplica", c: ["b4pp-etre", "b4pp-avoir"], k: "match", ask: "Une cada frase con su regla.", q: "Frase → regla", pairs: [["Elle est arrivée.", "être: con el sujeto"], ["Elle a mangé.", "avoir: sin concordancia"], ["Les lettres que j'ai reçues", "avoir: COD antes"], ["Ils se sont levés.", "pronominal: con el sujeto"]], why: "Reglas." },
    { fase: "dominio", c: ["b4pp-avoir"], k: "order", ask: "Ordena: «Las cartas que recibí».", tokens: ["Les lettres", "que", "j'ai reçues"], why: "<b>Les lettres que j'ai reçues</b>" },
    { fase: "dominio", c: ["b4pp-etre"], k: "choice", ask: "«Se levantaron temprano.»", q: "«Ils se sont ___ tôt.»", o: ["levés", "levé"], a: 0, why: "<b>levés</b>." },
    { fase: "dominio", c: ["b4pp-etre", "b4pp-avoir"], k: "listen", say: "Les habitants se sont mobilisés contre la course.", acc: ["Les habitants se sont mobilisés contre la course."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les habitants se sont mobilisés contre la course.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

/* ================================ I · Prépositions ================================ */
/* ── 4. Prépositions de lieu ── */
E["lieu"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Prépositions de lieu",
  objetivo: {
    que: "Vas a elegir bien la preposición de lugar: à con ciudades, en con países femeninos, au con masculinos y aux con plurales.",
    corto: "J'habite en Colombie. · Il travaille au Canada. · Elle revient des États-Unis.",
    podras: ["Usar à / de con las ciudades: à Bogotá, de Paris.", "Usar en / de con los países femeninos o que empiezan por vocal: en Colombie, d'Espagne.", "Usar au / du con los masculinos (au Japon, du Mexique) y aux / des con los plurales (aux États-Unis)."],
    iconos: ["ic2/mundo", "ic2/globo", "ic2/bandera"],
    previos: ["Los países y nacionalidades (A1, lección 25) y las preposiciones de lugar (A1, lección 32)."],
    capacidad: "Ahora dices de dónde eres y adónde vas sin dudar."
  },
  requiere: R("pn-prep", "pl-sans", "pa-de"), recupera: ["pn-prep"],
  conceptos: {
    "b4li-aller": { n: "ir / estar: à + ciudad (à Bogotá, à Paris); en + país femenino o con vocal (en Colombie, en Espagne, en Iran, en Europe); au + masculino (au Japon, au Canada, au Mexique); aux + plural (aux États-Unis, aux Pays-Bas)", b: "gr" },
    "b4li-venir": { n: "venir de: de + ciudad (de Paris); de / d' + país femenino (d'Espagne); du + masculino (du Mexique); des + plural (des États-Unis)", b: "gr" }
  },
  video: {
    titulo: "à, en, au, aux", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "en Colombie", seg: [
        { es: "Hola. En español todo es «en». En francés, no." } ] },
      { v: "frase", filas: [
          { nota: "femenino", p: 1, partes: [["J'habite en Colombie.", "-", 1]] },
          { nota: "masculino", p: 2, partes: [["Il travaille au Canada.", "-", 2]] },
          { nota: "plural", p: 3, partes: [["Elle revient des États-Unis.", "-", 3]] } ], seg: [
        { fr: "J'habite en Colombie.", p: 1 }, { fr: "Il travaille au Canada.", p: 2 }, { fr: "Elle revient des États-Unis.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nací en Pamplona, en Colombia.»", o: ["Je suis né à Pamplona, en Colombie.", "Je suis né en Pamplona, à Colombie."], a: 0,
        bien: "¡Sí! Ciudad: à. País femenino: en.", mal: "Ciudad: à; país femenino: en.",
        seg: [ { es: "Pausa. ¿Ciudad o país?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à Paris", "en Colombie", "au Japon", "aux États-Unis", "du Mexique", "d'Espagne"], seg: [
        { es: "Ciudad, femenino, masculino, plural.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los compañeros de clase", img: "bg-universidad", yo: "camila",
    escena: "Primer día de clase: cada estudiante dice de dónde viene.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis née à Pamplona, en Colombie. Ma sœur fait ses études aux États-Unis.", "Nací en Pamplona, en Colombia. Mi hermana estudia en Estados Unidos."],
      ["hugo", "Moi, je suis de Lyon. Mon cousin travaille au Canada et ma tante revient du Mexique.", "Yo soy de Lyon. Mi primo trabaja en Canadá y mi tía vuelve de México."],
      ["sofia", "Notre robot de classe a été conçu au Japon, et ce café vient d'Espagne !", "¡Nuestro robot de clase se diseñó en Japón, y este café viene de España!"],
      ["camila", "En Colombie comme au Japon, le télétravail progresse. Et cet été, nous partons en Europe.", "En Colombia como en Japón, el teletrabajo avanza. Y este verano nos vamos a Europa."]
    ],
    fijate: "Fíjate: à Pamplona (ciudad), en Colombie y en Europe (femenino), aux États-Unis (plural), au Canada y au Japon (masculino), du Mexique y d'Espagne (venir de)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La preposición según el lugar",
      idea: "Ciudad: à / de (à Bogotá, de Paris). País femenino (casi todos los que terminan en -e: la Colombie, l'Espagne) o que empieza por vocal: en / de (en Colombie, d'Espagne, en Iran). Continentes: en Europe. País masculino: au / du (au Japon, au Canada, du Mexique; au = à + le, du = de + le). País plural: aux / des (aux États-Unis, aux Pays-Bas, des États-Unis). Nunca «à Colombie».",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Preposición"], [
        ["J'habite en Colombie. · en", "Vivo en Colombia.", "país femenino"],
        ["Ce robot a été conçu au Japon. · au", "Este robot se diseñó en Japón.", "país masculino"],
        ["Il fait ses études aux États-Unis. · aux", "Estudia en Estados Unidos.", "país plural"],
        ["Je suis né à Pamplona, en Colombie. · à / en", "Nací en Pamplona, Colombia.", "ciudad + país"],
        ["Elle revient du Mexique. · du", "Vuelve de México.", "de + masculino"],
        ["En Colombie comme au Japon, le télétravail progresse.", "En Colombia como en Japón, el teletrabajo avanza.", "en / au"],
        ["Ce produit vient d'Espagne. · d'", "Este producto viene de España.", "de + femenino"],
        ["Nous partons en Europe cet été.", "Nos vamos a Europa este verano.", "continente"],
        ["Colombie · Espagne", "Colombia · España", "en"],
        ["Japon · Canada", "Japón · Canadá", "au"],
        ["États-Unis · Pays-Bas", "Estados Unidos · Países Bajos", "aux"],
        ["Paris · Bogotá", "París · Bogotá", "à"]
      ]],
      ej: [["J'habite en Colombie.", "Vivo en Colombia."], ["Il travaille au Canada.", "Trabaja en Canadá."], ["Elle revient des États-Unis.", "Ella vuelve de Estados Unidos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["à Colombie", "en Colombie", "País femenino → en."], ["en Japon", "au Japon", "País masculino → au."], ["à les États-Unis", "aux États-Unis", "Plural → aux."]] }
  ],
  ejemplos: [
    { sit: "«Vivo en Colombia.»", resp: "J'habite en Colombie.", pasos: ["la Colombie: femenino."], porque: "en." },
    { sit: "«Vuelve de México.»", resp: "Elle revient du Mexique.", pasos: ["le Mexique: masculino."], porque: "du." },
    { sit: "«Este producto viene de España.»", resp: "Ce produit vient d'Espagne.", pasos: ["Femenino con vocal."], porque: "d'." }
  ],
  comprueba: [
    { q: "Con una ciudad se usa…", o: ["à", "en"], a: 0, b: "gr", porque: "à Paris." },
    { q: "Con un país masculino se usa…", o: ["au", "en"], a: 0, b: "gr", porque: "au Japon." },
    { q: "«Estados Unidos»: «___ États-Unis»", o: ["aux", "en"], a: 0, b: "gr", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["b4li-aller"], k: "sort", ask: "¿Qué preposición lleva?", q: "Clasifica.", cats: ["en", "au", "aux", "à"], items: [["Colombie", 0], ["Japon", 1], ["États-Unis", 2], ["Paris", 3], ["Espagne", 0], ["Canada", 1], ["Pays-Bas", 2], ["Bogotá", 3]], pista: "¿Ciudad o país? ¿Género?", why: "Preposiciones." },
    { fase: "guiada", c: ["b4li-aller"], k: "choice", ask: "«Vivo en Colombia.»", q: "«J'habite ___ Colombie.»", o: ["en", "à"], a: 0, pista: "Femenino.", why: "<b>en</b>." },
    { fase: "guiada", c: ["b4li-aller"], k: "choice", ask: "«Este robot se diseñó en Japón.»", q: "«Ce robot a été conçu ___ Japon.»", o: ["au", "en"], a: 0, pista: "Masculino.", why: "<b>au</b>." },
    { fase: "indep", c: ["b4li-aller"], k: "fill", ask: "Estados Unidos (plural).", q: "Il fait ses études ___ États-Unis.", acc: ["aux"], why: "<b>aux</b>." },
    { fase: "indep", c: ["b4li-aller"], k: "choice", ask: "«Nací en Pamplona, en Colombia.»", q: "«Je suis né ___ Pamplona, ___ Colombie.»", o: ["à / en", "en / à"], a: 0, why: "<b>à</b> / <b>en</b>." },
    { fase: "indep", c: ["b4li-venir"], k: "choice", ask: "«Vuelve de México.»", q: "«Elle revient ___ Mexique.»", o: ["du", "de"], a: 0, why: "<b>du</b>." },
    { fase: "aplica", c: ["b4li-aller"], k: "spot", ask: "Encuentra el error.", s: "En Colombie comme [a] Japon , le télétravail progresse .", fix: "au", why: "<b>au</b>." },
    { fase: "aplica", c: ["b4li-venir"], k: "fill", ask: "«de España»", q: "Ce produit vient ___ Espagne.", acc: ["d'"], why: "<b>d'</b>Espagne." },
    { fase: "aplica", c: ["b4li-aller"], k: "choice", ask: "«Nos vamos a Europa este verano.»", q: "«Nous partons ___ Europe cet été.»", o: ["en", "au"], a: 0, why: "<b>en</b>." },
    { fase: "dominio", c: ["b4li-aller", "b4li-venir"], k: "match", ask: "Une cada país con su preposición (ir / estar).", q: "País → preposición", pairs: [["Colombie", "en"], ["Japon", "au"], ["États-Unis", "aux"], ["Bogotá", "à"]], why: "Preposiciones." },
    { fase: "dominio", c: ["b4li-aller"], k: "order", ask: "Ordena: «Trabaja en Canadá».", tokens: ["Il travaille", "au", "Canada"], why: "<b>Il travaille au Canada</b>" },
    { fase: "dominio", c: ["b4li-aller", "b4li-venir"], k: "listen", say: "Elle revient des États-Unis.", acc: ["Elle revient des États-Unis."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle revient des États-Unis.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Pamplona", "Colombie", "Bogotá", "Paris", "Lyon", "Japon", "Canada", "Mexique", "Espagne", "États-Unis", "Pays-Bas", "Iran", "Europe"], previo: [] }
};

/* ── 5. Verbe + préposition ── */
E["verbes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Verbe + préposition",
  objetivo: {
    que: "Vas a usar la preposición fija (à o de) que exige cada verbo, sobre todo cuando el español engaña.",
    corto: "Je m'oppose à ce projet. · Cela dépend des relations humaines. · Nous avons besoin d'aide.",
    podras: ["Usar los verbos con à: s'opposer à, participer à, assister à, remédier à, penser à.", "Usar los verbos con de: dépendre de, profiter de, avoir besoin de, se souvenir de, penser de (opinar).", "Hacer las contracciones (au, du, aux, des) y distinguir jouer à (un juego) de jouer de (un instrumento)."],
    iconos: ["ic2/engranaje", "ic2/lapiz", "ic2/nota"],
    previos: ["Los verbos con preposición (B1.1, lección 12) y las construcciones verbales (B1.2, lección 26)."],
    capacidad: "Ahora no confundes à y de detrás de los verbos más frecuentes."
  },
  requiere: R("b1vp-a", "b1vp-de", "b2vc-jouer"), recupera: ["b1vp-de"],
  conceptos: {
    "b4vp-a": { n: "verbos con à: s'opposer à, participer à, assister à (asistir a), remédier à (poner remedio), penser à (tener en mente); jouer à + juego (aux échecs); à + le = au, à + les = aux", b: "gr" },
    "b4vp-de": { n: "verbos con de: dépendre de, profiter de, avoir besoin de, se souvenir de, penser de (opinar: Que pensez-vous de… ?); jouer de + instrumento (de la guitare); de + le = du, de + les = des", b: "gr" }
  },
  video: {
    titulo: "à o de", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "dépendre de", seg: [
        { es: "Hola. Cada verbo trae su preposición." } ] },
      { v: "frase", filas: [
          { nota: "à", p: 1, partes: [["Je m'oppose à ce projet.", "-", 1]] },
          { nota: "de", p: 2, partes: [["Cela dépend des relations humaines.", "-", 2]] },
          { nota: "de", p: 3, partes: [["Nous avons besoin d'aide.", "-", 3]] } ], seg: [
        { fr: "Je m'oppose à ce projet.", p: 1 }, { fr: "Cela dépend des relations humaines.", p: 2 }, { fr: "Nous avons besoin d'aide.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Toco la guitarra.»", o: ["Je joue de la guitare.", "Je joue à la guitare."], a: 0,
        bien: "¡Sí! Instrumento: jouer de.", mal: "Instrumento: jouer de; juego: jouer à.",
        seg: [ { es: "Pausa. ¿Instrumento o juego?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["s'opposer à", "assister à", "remédier à", "dépendre de", "profiter de", "avoir besoin de"], seg: [
        { es: "Aprende el verbo con su preposición.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El consejo municipal", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo salen de una reunión del consejo municipal.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai assisté à la réunion du conseil municipal. Nous nous opposons à l'organisation de cette course.", "Asistí a la reunión del consejo municipal. Nos oponemos a la organización de esta carrera."],
      ["hugo", "Que pensez-vous de ce projet, Madame Sofia ? — Il faut remédier à ce problème de bruit.", "¿Qué piensa de este proyecto, Madame Sofia? — Hay que poner remedio a este problema de ruido."],
      ["camila", "Le bonheur dans le quartier dépend des relations humaines. Nous avons besoin d'aide.", "La felicidad en el barrio depende de las relaciones humanas. Necesitamos ayuda."],
      ["hugo", "Bon, ce soir, je me détends : je joue de la guitare, et après, je joue aux échecs avec mon voisin.", "Bueno, esta noche me relajo: toco la guitarra y luego juego al ajedrez con mi vecino."]
    ],
    fijate: "Fíjate: assisté à, nous opposons à, pensez-vous de (opinar), remédier à, dépend des, besoin d', joue de la guitare (instrumento), joue aux échecs (juego)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Verbos con à y con de",
      idea: "Con à: s'opposer à, participer à, assister à (asistir a un acto), remédier à (poner remedio a), penser à (tener en mente: Je pense à toi). Con de: dépendre de (como «depender de»), profiter de (aprovechar), avoir besoin de, se souvenir de, penser de (opinar: Que pensez-vous de ce projet ?). jouer à + juego o deporte (aux échecs, au football); jouer de + instrumento (de la guitare, du piano). Contracciones: à + le = au, à + les = aux; de + le = du, de + les = des. Aprende cada verbo con su preposición en una frase.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Preposición"], [
        ["Nous nous opposons à l'organisation de cette course. · à", "Nos oponemos a la organización de esta carrera.", "s'opposer à"],
        ["Je joue de la guitare. · de la", "Toco la guitarra.", "jouer de"],
        ["Le soir, je joue aux échecs. · aux", "Por la noche juego al ajedrez.", "jouer à"],
        ["Le bonheur au travail dépend des relations humaines. · des", "La felicidad en el trabajo depende de las relaciones humanas.", "dépendre de"],
        ["Que pensez-vous de ce projet ? · de", "¿Qué opina de este proyecto?", "penser de"],
        ["Il faut remédier à ce problème. · à", "Hay que poner remedio a este problema.", "remédier à"],
        ["J'ai assisté à la réunion du conseil municipal. · à", "Asistí a la reunión del consejo municipal.", "assister à"],
        ["L'examen a eu lieu le 3 septembre. · le", "El examen tuvo lugar el 3 de septiembre.", "fecha: le"],
        ["s'opposer · participer · remédier · assister", "oponerse · participar · remediar · asistir", "à"],
        ["dépendre · profiter · avoir besoin · se souvenir", "depender · aprovechar · necesitar · acordarse", "de"],
        ["Je m'oppose à ce projet", "Me opongo a este proyecto", "à"]
      ]],
      ej: [["Je m'oppose à ce projet.", "Me opongo a este proyecto."], ["Cela dépend des relations humaines.", "Eso depende de las relaciones humanas."], ["Nous avons besoin d'aide.", "Necesitamos ayuda."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["dépendre à", "dépendre de", "Como «depender de»."], ["Je joue à la guitare.", "Je joue de la guitare.", "Instrumento: de."], ["L'examen a eu lieu en 3 septembre.", "L'examen a eu lieu le 3 septembre.", "Fecha: le."]] }
  ],
  ejemplos: [
    { sit: "«Nos oponemos a la organización de esta carrera.»", resp: "Nous nous opposons à l'organisation de cette course.", pasos: ["s'opposer à."], porque: "à." },
    { sit: "«Toco la guitarra.»", resp: "Je joue de la guitare.", pasos: ["Instrumento."], porque: "jouer de." },
    { sit: "«¿Qué opina de este proyecto?»", resp: "Que pensez-vous de ce projet ?", pasos: ["Opinar: penser de."], porque: "de." }
  ],
  comprueba: [
    { q: "«Depender de» se dice…", o: ["dépendre de", "dépendre à"], a: 0, b: "gr", porque: "de." },
    { q: "«Jouer ___ échecs» (juego)", o: ["aux", "des"], a: 0, b: "gr", porque: "jouer à + les." },
    { q: "«Remédier» lleva…", o: ["à", "de"], a: 0, b: "gr", porque: "remédier à." }
  ],
  practica: [
    { fase: "guiada", c: ["b4vp-a", "b4vp-de"], k: "sort", ask: "¿Lleva à o de?", q: "Clasifica.", cats: ["à", "de"], items: [["s'opposer", 0], ["dépendre", 1], ["participer", 0], ["profiter", 1], ["remédier", 0], ["avoir besoin", 1], ["assister", 0], ["se souvenir", 1]], pista: "Piensa en una frase.", why: "Preposiciones." },
    { fase: "guiada", c: ["b4vp-a"], k: "choice", ask: "«Nos oponemos a la organización de esta carrera.»", q: "«Nous nous opposons ___ l'organisation de cette course.»", o: ["à", "de"], a: 0, pista: "s'opposer.", why: "<b>à</b>." },
    { fase: "guiada", c: ["b4vp-de"], k: "choice", ask: "«Toco la guitarra.»", q: "«Je joue ___ guitare.»", o: ["de la", "à la"], a: 0, pista: "Instrumento.", why: "<b>de la</b>." },
    { fase: "indep", c: ["b4vp-a"], k: "choice", ask: "«Por la noche juego al ajedrez.»", q: "«Le soir, je joue ___ échecs.»", o: ["aux", "des"], a: 0, why: "<b>aux</b>." },
    { fase: "indep", c: ["b4vp-de"], k: "fill", ask: "dépendre de + les relations.", q: "Le bonheur au travail dépend ___ relations humaines.", acc: ["des"], why: "<b>des</b>." },
    { fase: "indep", c: ["b4vp-de"], k: "choice", ask: "«¿Qué opina de este proyecto?»", q: "«Que pensez-vous ___ ce projet ?»", o: ["de", "à"], a: 0, why: "<b>de</b>." },
    { fase: "aplica", c: ["b4vp-a"], k: "choice", ask: "«Hay que poner remedio a este problema.»", q: "«Il faut remédier ___ ce problème.»", o: ["à", "de"], a: 0, why: "<b>à</b>." },
    { fase: "aplica", c: ["b4vp-a"], k: "fill", ask: "assister + la réunion.", q: "J'ai assisté ___ la réunion du conseil municipal.", acc: ["à"], why: "<b>à</b>." },
    { fase: "aplica", c: ["b4vp-de"], k: "spot", ask: "Encuentra el error.", s: "Notre réussite dépend [à] notre motivation .", fix: "de", why: "<b>de</b>." },
    { fase: "dominio", c: ["b4vp-a", "b4vp-de"], k: "match", ask: "Une cada verbo con su preposición.", q: "Verbo → preposición", pairs: [["s'opposer", "à"], ["dépendre", "de"], ["remédier", "à"], ["profiter", "de"]], why: "Preposiciones." },
    { fase: "dominio", c: ["b4vp-a"], k: "order", ask: "Ordena: «Me opongo a este proyecto».", tokens: ["Je m'oppose", "à", "ce projet"], why: "<b>Je m'oppose à ce projet</b>" },
    { fase: "dominio", c: ["b4vp-a", "b4vp-de"], k: "listen", say: "Le bonheur au travail dépend des relations humaines.", acc: ["Le bonheur au travail dépend des relations humaines."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le bonheur au travail dépend des relations humaines.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: [] }
};

/* ================================ I · Structures et temps ================================ */
/* ── 6. Ce que, ce qui, si ── */
E["synt"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Ce que, ce qui, si",
  objetivo: {
    que: "Vas a dejar de usar qu'est-ce que dentro de una frase: después de otro verbo se dice ce que, ce qui o si.",
    corto: "Je me demande ce que vous pensez. · Dites-moi ce qui ne va pas. · Je voudrais savoir si…",
    podras: ["Reservar qu'est-ce que para la pregunta directa: Qu'est-ce que tu veux ?", "Usar después de un verbo ce que (complemento), ce qui (sujeto) y si (preguntas de sí o no).", "Usar ce dont con los verbos con de: Ce dont les salariés ont besoin, c'est de reconnaissance."],
    iconos: ["ic2/pregunta", "ic2/engranaje", "ic2/lapiz"],
    previos: ["Ce qui, ce que (B1.1, lección 34) y el discurso indirecto (B1.2, lección 2)."],
    capacidad: "Ahora haces preguntas indirectas como en una carta formal."
  },
  requiere: R("b1cq-forme", "b1cq-indir", "b2di-question"), recupera: ["b1cq-indir"],
  conceptos: {
    "b4sy-indir": { n: "después de un verbo (je me demande, dites-moi, je ne sais pas): ce que (complemento) ← qu'est-ce que; ce qui (sujeto) ← qu'est-ce qui; si (sí/no) ← est-ce que; où ← où est-ce que", b: "gr" },
    "b4sy-dont": { n: "ce que / ce qui / ce dont para poner de relieve: Ce que je retiens, c'est que…; Ce dont les salariés ont besoin, c'est de… (avoir besoin de)", b: "gr" }
  },
  video: {
    titulo: "Preguntas dentro de la frase", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "ce que", seg: [
        { es: "Hola. Qu'est-ce que solo sirve para preguntar directamente." } ] },
      { v: "frase", filas: [
          { nota: "complemento", p: 1, partes: [["Je me demande ce que vous pensez.", "-", 1]] },
          { nota: "sujeto", p: 2, partes: [["Dites-moi ce qui ne va pas.", "-", 2]] },
          { nota: "sí o no", p: 3, partes: [["Je voudrais savoir si le cours est obligatoire.", "-", 3]] } ], seg: [
        { fr: "Je me demande ce que vous pensez.", p: 1 }, { fr: "Dites-moi ce qui ne va pas.", p: 2 }, { fr: "Je voudrais savoir si le cours est obligatoire.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me pregunto qué piensan los jóvenes.»", o: ["Je me demande ce que les jeunes pensent.", "Je me demande qu'est-ce que les jeunes pensent."], a: 0,
        bien: "¡Sí! Después de un verbo: ce que.", mal: "Después de un verbo: ce que.",
        seg: [ { es: "Pausa. Ce que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ce que", "ce qui", "si", "ce dont"], seg: [
        { es: "Complemento, sujeto, sí o no.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La carta al ayuntamiento", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara preguntas para el ayuntamiento sobre la carrera.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Je me demande qu'est-ce que la mairie va faire. »", "Escribí: «Me pregunto qué es lo que el ayuntamiento va a hacer.»"],
      ["hugo", "Non : « Je me demande ce que la mairie va faire. » Et : « Je voudrais savoir si la course aura lieu en centre-ville. »", "No: «Je me demande ce que la mairie va faire.» Y: «Quisiera saber si la carrera tendrá lugar en el centro.»"],
      ["camila", "Et pour le sujet ? — « Expliquez-moi ce qui s'est passé », « Dites-moi ce qui vous intéresse ».", "¿Y para el sujeto? — «Explíqueme qué pasó», «Dígame qué le interesa»."],
      ["hugo", "Et pour conclure : « Ce que je retiens de ce document, c'est que le bonheur est fragile. Ce dont les habitants ont besoin, c'est de calme. »", "Y para concluir: «Lo que retengo de este documento es que la felicidad es frágil. Lo que los vecinos necesitan es calma.»"]
    ],
    fijate: "Fíjate: ce que la mairie va faire (complemento), si la course aura lieu (sí o no), ce qui s'est passé (sujeto), Ce que je retiens, Ce dont… ont besoin (avoir besoin de)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Directa e indirecta",
      idea: "Pregunta directa: Qu'est-ce que tu veux ? Qu'est-ce qui se passe ? Est-ce que c'est possible ? Después de otro verbo (je me demande, dites-moi, je ne sais pas, expliquez-moi, je voudrais savoir) cambia: qu'est-ce que → ce que (complemento: je ne sais pas ce que vous voulez dire); qu'est-ce qui → ce qui (sujeto: expliquez-moi ce qui s'est passé); est-ce que → si (je voudrais savoir si c'est possible); où est-ce que → où. Para poner de relieve: Ce que je retiens, c'est que…; con verbos con de: Ce dont les salariés ont besoin, c'est de reconnaissance.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Je ne sais pas ce que vous voulez dire. · ce que", "No sé qué quiere decir.", "complemento"],
        ["Expliquez-moi ce qui s'est passé. · ce qui", "Explíqueme qué pasó.", "sujeto"],
        ["Je voudrais savoir si la course aura lieu en centre-ville. · si", "Quisiera saber si la carrera será en el centro.", "sí o no"],
        ["Ce dont les salariés ont besoin, c'est de reconnaissance. · ce dont", "Lo que los empleados necesitan es reconocimiento.", "avoir besoin de"],
        ["Dites-moi ce qui vous intéresse.", "Dígame qué le interesa.", "sujeto"],
        ["Qu'est-ce que… ? = ce que · Qu'est-ce qui… ? = ce qui · Est-ce que… ? = si · Où est-ce que… ? = où", "directa → indirecta", "equivalencias"],
        ["Je me demande ce que les jeunes pensent du télétravail.", "Me pregunto qué piensan los jóvenes del teletrabajo.", "complemento"],
        ["Ce que je retiens de ce document, c'est que le bonheur est fragile.", "Lo que retengo de este documento es que la felicidad es frágil.", "relieve"]
      ]],
      ej: [["Je me demande ce que vous pensez.", "Me pregunto qué piensa usted."], ["Dites-moi ce qui ne va pas.", "Dígame qué no va bien."], ["Je voudrais savoir si le cours est obligatoire.", "Quisiera saber si la clase es obligatoria."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je me demande qu'est-ce que vous pensez.", "Je me demande ce que vous pensez.", "Después de un verbo: ce que."], ["Dites-moi ce que vous intéresse.", "Dites-moi ce qui vous intéresse.", "Sujeto: ce qui."], ["Je voudrais savoir est-ce que c'est possible.", "Je voudrais savoir si c'est possible.", "Sí o no: si."]] }
  ],
  ejemplos: [
    { sit: "«No sé qué quiere decir.»", resp: "Je ne sais pas ce que vous voulez dire.", pasos: ["Complemento: ce que."], porque: "Indirecta." },
    { sit: "«Explíqueme qué pasó.»", resp: "Expliquez-moi ce qui s'est passé.", pasos: ["Sujeto: ce qui."], porque: "Indirecta." },
    { sit: "«Quisiera saber si la carrera será en el centro.»", resp: "Je voudrais savoir si la course aura lieu en centre-ville.", pasos: ["Sí o no: si."], porque: "Indirecta." }
  ],
  comprueba: [
    { q: "Después de «je me demande» se usa…", o: ["ce que", "qu'est-ce que"], a: 0, b: "gr", porque: "Indirecta." },
    { q: "Si la palabra es sujeto del verbo siguiente…", o: ["ce qui", "ce que"], a: 0, b: "gr", porque: "ce qui s'est passé." },
    { q: "«Est-ce que» en indirecta se vuelve…", o: ["si", "que"], a: 0, b: "gr", porque: "si c'est possible." }
  ],
  practica: [
    { fase: "guiada", c: ["b4sy-indir"], k: "sort", ask: "¿ce que o ce qui?", q: "Clasifica.", cats: ["ce que", "ce qui"], items: [["Je ne sais pas ___ vous voulez dire.", 0], ["Je me demande ___ les jeunes pensent.", 0], ["Dis-moi ___ tu préfères.", 0], ["Explique-moi ___ tu cherches.", 0], ["Expliquez-moi ___ s'est passé.", 1], ["Dites-moi ___ vous intéresse.", 1], ["Je ne sais pas ___ ne va pas.", 1], ["Racontez ___ est arrivé.", 1]], pista: "¿Lo que sigue tiene sujeto propio?", why: "Complemento o sujeto." },
    { fase: "guiada", c: ["b4sy-indir"], k: "choice", ask: "«No sé qué quiere decir.»", q: "«Je ne sais pas ___ vous voulez dire.»", o: ["ce que", "qu'est-ce que"], a: 0, pista: "Después de un verbo.", why: "<b>ce que</b>." },
    { fase: "guiada", c: ["b4sy-indir"], k: "choice", ask: "«Explíqueme qué pasó.»", q: "«Expliquez-moi ___ s'est passé.»", o: ["ce qui", "ce que"], a: 0, pista: "Sujeto.", why: "<b>ce qui</b>." },
    { fase: "indep", c: ["b4sy-indir"], k: "choice", ask: "«Quisiera saber si la carrera será en el centro.»", q: "«Je voudrais savoir ___ la course aura lieu en centre-ville.»", o: ["si", "est-ce que"], a: 0, why: "<b>si</b>." },
    { fase: "indep", c: ["b4sy-dont"], k: "fill", ask: "avoir besoin de → ce …", q: "___ les salariés ont besoin, c'est de reconnaissance.", acc: ["Ce dont", "ce dont"], why: "<b>Ce dont</b>." },
    { fase: "indep", c: ["b4sy-indir"], k: "choice", ask: "«Dígame qué le interesa.»", q: "«Dites-moi ___ vous intéresse.»", o: ["ce qui", "ce que"], a: 0, why: "<b>ce qui</b>." },
    { fase: "aplica", c: ["b4sy-indir"], k: "match", ask: "Une la pregunta directa con su forma indirecta.", q: "Directa → indirecta", pairs: [["Qu'est-ce que… ?", "ce que"], ["Qu'est-ce qui… ?", "ce qui"], ["Est-ce que… ?", "si"], ["Où est-ce que… ?", "où"]], why: "Equivalencias." },
    { fase: "aplica", c: ["b4sy-indir"], k: "spot", ask: "Encuentra el error.", s: "Je me demande [qu'est-ce que] les jeunes pensent du télétravail .", fix: "ce que", why: "<b>ce que</b>." },
    { fase: "aplica", c: ["b4sy-indir"], k: "choice", ask: "«Me pregunto qué piensa usted.»", q: "«___»", o: ["Je me demande ce que vous pensez.", "Je me demande ce qui vous pensez."], a: 0, why: "Complemento." },
    { fase: "dominio", c: ["b4sy-dont"], k: "order", ask: "Ordena la frase.", tokens: ["Ce que je retiens de ce document,", "c'est que", "le bonheur est fragile."], why: "<b>Ce que je retiens de ce document, c'est que le bonheur est fragile.</b>" },
    { fase: "dominio", c: ["b4sy-indir"], k: "choice", ask: "Después de «je me demande» se usa…", q: "Elige.", o: ["ce que", "qu'est-ce que"], a: 0, why: "Indirecta." },
    { fase: "dominio", c: ["b4sy-indir", "b4sy-dont"], k: "listen", say: "Je voudrais savoir si le cours est obligatoire.", acc: ["Je voudrais savoir si le cours est obligatoire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais savoir si le cours est obligatoire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 7. Le subjonctif ── */
E["subj"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le subjonctif",
  objetivo: {
    que: "Vas a elegir bien entre subjuntivo e indicativo: necesidad, voluntad, duda, finalidad y concesión frente a certeza y opinión afirmativa.",
    corto: "Il faut que nous agissions. · Bien qu'il soit tard, je continue. · J'espère que tu viendras.",
    podras: ["Usar el subjuntivo con il faut que, vouloir que, pour que, bien que, je doute que.", "Usar el indicativo con la certeza, la opinión afirmativa (je pense que) y espérer.", "Recordar las parejas trampa: je pense que + indicativo / je ne pense pas que + subjuntivo; avant que + subjuntivo / après que + indicativo."],
    iconos: ["ic2/engranaje", "ic2/candado", "ic2/pregunta"],
    previos: ["El subjuntivo (B1.1, lección 6), la certeza y la duda (B1.1, lección 46) y las conjunciones con subjuntivo (B1.2, lección 19)."],
    capacidad: "Ahora usas el subjuntivo sin calcar el español."
  },
  requiere: R("b1sj-forme", "b1sj-usage", "b1cd-subj", "b2sc-subj", "b3st-subj"), recupera: ["b2sc-subj"],
  conceptos: {
    "b4sj-quand": { n: "subjuntivo con necesidad, voluntad, duda, finalidad y concesión: il faut que, il est essentiel que, vouloir que, pour que, bien que, je doute que, je ne pense pas que, avant que; formas: prenne, soit, puissent, fasse, agissions", b: "gr" },
    "b4sj-indic": { n: "indicativo con certeza, opinión afirmativa y esperanza: je pense que, il est certain que, j'espère que (+ futuro), après que (+ indicativo: après que la course aura eu lieu)", b: "gr" }
  },
  video: {
    titulo: "¿Subjuntivo o indicativo?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "il faut que", seg: [
        { es: "Hola. El español ayuda, pero no siempre." } ] },
      { v: "frase", filas: [
          { nota: "necesidad", p: 1, partes: [["Il faut que nous agissions.", "-", 1]] },
          { nota: "concesión", p: 2, partes: [["Bien qu'il soit tard, je continue.", "-", 2]] },
          { nota: "esperanza", p: 3, partes: [["J'espère que tu viendras.", "-", 3]] } ], seg: [
        { fr: "Il faut que nous agissions.", p: 1 }, { fr: "Bien qu'il soit tard, je continue.", p: 2 }, { fr: "J'espère que tu viendras.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Espero que vengas.»", o: ["J'espère que tu viendras.", "J'espère que tu viennes."], a: 0,
        bien: "¡Sí! Espérer + indicativo.", mal: "En francés, espérer va con indicativo.",
        seg: [ { es: "Pausa. Espérer: indicativo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il faut que", "bien que", "pour que", "je doute que", "j'espère que", "après que"], seg: [
        { es: "Duda y voluntad: subjuntivo. Certeza: indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate sobre la carrera", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo discuten sobre la carrera de coches del centro.",
    pj: PJ,
    lineas: [
      ["camila", "Il faut que la mairie prenne une décision. Il est essentiel que les habitants puissent s'exprimer.", "Es necesario que el ayuntamiento tome una decisión. Es esencial que los vecinos puedan expresarse."],
      ["hugo", "Bien que le projet soit ambitieux, il reste risqué. Je doute que ce soit une bonne idée.", "Aunque el proyecto sea ambicioso, sigue siendo arriesgado. Dudo que sea una buena idea."],
      ["camila", "J'espère que la mairie nous écoutera. Pour que chacun fasse un effort, il faut l'expliquer.", "Espero que el ayuntamiento nos escuche. Para que cada uno haga un esfuerzo, hay que explicarlo."],
      ["hugo", "Et après que la course aura eu lieu, les rues seront nettoyées. Je pense que c'est le minimum !", "Y después de que la carrera haya tenido lugar, las calles se limpiarán. ¡Creo que es lo mínimo!"]
    ],
    fijate: "Fíjate: il faut que… prenne, il est essentiel que… puissent, bien que… soit, je doute que… soit, pour que… fasse (subjuntivo); j'espère que… écoutera, après que… aura eu lieu, je pense que c'est (indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuándo va el subjuntivo",
      idea: "Subjuntivo: necesidad (il faut que, il est essentiel que), voluntad (vouloir que), duda (je doute que, je ne pense pas que), finalidad (pour que), concesión (bien que) y avant que. Indicativo: certeza (il est certain que), opinión afirmativa (je pense que, je crois que), esperanza (j'espère que + futuro: diferente del español «espero que vengas») y après que (+ indicativo: après que la course aura eu lieu). Formas frecuentes: qu'il prenne, qu'il soit, qu'ils puissent, qu'il fasse, que nous agissions.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["Il faut que la mairie prenne une décision. · prenne", "Es necesario que el ayuntamiento tome una decisión.", "subjuntivo"],
        ["Bien que le projet soit ambitieux, il reste risqué. · soit", "Aunque el proyecto sea ambicioso, sigue siendo arriesgado.", "subjuntivo"],
        ["Je pense que le télétravail est une solution durable. · est", "Creo que el teletrabajo es una solución duradera.", "indicativo"],
        ["Je ne pense pas que le télétravail soit une solution durable.", "No creo que el teletrabajo sea una solución duradera.", "subjuntivo"],
        ["Il est essentiel que les habitants puissent s'exprimer. · puissent", "Es esencial que los vecinos puedan expresarse.", "subjuntivo"],
        ["Après que la course aura eu lieu, les rues seront nettoyées. · aura eu", "Después de que la carrera haya tenido lugar, se limpiarán las calles.", "indicativo"],
        ["Pour que chacun fasse un effort, il faut l'expliquer. · fasse", "Para que cada uno haga un esfuerzo, hay que explicarlo.", "subjuntivo"],
        ["il faut que · bien que · pour que · je doute que", "es necesario que · aunque · para que · dudo que", "subjonctif"],
        ["je pense que · j'espère que · après que · il est certain que", "creo que · espero que · después de que · es seguro que", "indicatif"],
        ["Il faut que nous agissions", "Es necesario que actuemos", "subjuntivo"]
      ]],
      ej: [["Il faut que nous agissions.", "Es necesario que actuemos."], ["Bien qu'il soit tard, je continue.", "Aunque sea tarde, sigo."], ["J'espère que tu viendras.", "Espero que vengas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["après qu'il soit parti", "après qu'il est parti", "après que → indicativo."], ["J'espère que tu viennes.", "J'espère que tu viendras.", "espérer → indicativo."], ["Je pense que ce soit utile.", "Je pense que c'est utile.", "Opinión afirmativa → indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Es necesario que el ayuntamiento tome una decisión.»", resp: "Il faut que la mairie prenne une décision.", pasos: ["il faut que + subjuntivo."], porque: "Necesidad." },
    { sit: "«No creo que el teletrabajo sea una solución duradera.»", resp: "Je ne pense pas que le télétravail soit une solution durable.", pasos: ["Opinión negativa → subjuntivo."], porque: "Duda." },
    { sit: "«Espero que vengas.»", resp: "J'espère que tu viendras.", pasos: ["espérer + indicativo."], porque: "Trampa." }
  ],
  comprueba: [
    { q: "«Je pense que…» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Opinión afirmativa." },
    { q: "«Bien que…» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Concesión." },
    { q: "«Après que…» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Hecho cumplido." }
  ],
  practica: [
    { fase: "guiada", c: ["b4sj-quand", "b4sj-indic"], k: "sort", ask: "¿Subjuntivo o indicativo?", q: "Clasifica.", cats: ["subjonctif", "indicatif"], items: [["il faut que", 0], ["je pense que", 1], ["bien que", 0], ["j'espère que", 1], ["pour que", 0], ["après que", 1], ["je doute que", 0], ["il est certain que", 1]], pista: "¿Duda o certeza?", why: "Modos." },
    { fase: "guiada", c: ["b4sj-quand"], k: "fill", ask: "Subjuntivo de prendre (la mairie).", q: "Il faut que la mairie ___ une décision.", acc: ["prenne"], pista: "Prendre → prenne.", why: "<b>prenne</b>." },
    { fase: "guiada", c: ["b4sj-indic"], k: "choice", ask: "«Creo que el teletrabajo es una solución duradera.»", q: "«Je pense que le télétravail ___ une solution durable.»", o: ["est", "soit"], a: 0, pista: "Opinión afirmativa.", why: "<b>est</b>." },
    { fase: "indep", c: ["b4sj-quand"], k: "choice", ask: "«No creo que el teletrabajo sea una solución duradera.»", q: "«Je ne pense pas que le télétravail ___ une solution durable.»", o: ["soit", "est"], a: 0, why: "<b>soit</b>." },
    { fase: "indep", c: ["b4sj-quand"], k: "fill", ask: "Subjuntivo de être.", q: "Bien que le projet ___ ambitieux, il reste risqué.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "indep", c: ["b4sj-quand"], k: "fill", ask: "Subjuntivo de pouvoir (les habitants).", q: "Il est essentiel que les habitants ___ s'exprimer.", acc: ["puissent"], why: "<b>puissent</b>." },
    { fase: "aplica", c: ["b4sj-indic"], k: "choice", ask: "«Después de que la carrera haya tenido lugar…»", q: "«Après que la course ___ lieu, les rues seront nettoyées.»", o: ["aura eu", "ait eu"], a: 0, why: "<b>aura eu</b>." },
    { fase: "aplica", c: ["b4sj-quand"], k: "fill", ask: "Subjuntivo de faire (chacun).", q: "Pour que chacun ___ un effort, il faut l'expliquer.", acc: ["fasse"], why: "<b>fasse</b>." },
    { fase: "aplica", c: ["b4sj-indic"], k: "spot", ask: "Encuentra el error.", s: "J'espère que tu [viennes] à la réunion .", fix: "viendras", why: "<b>viendras</b>." },
    { fase: "dominio", c: ["b4sj-quand", "b4sj-indic"], k: "match", ask: "Une cada expresión con su modo.", q: "Expresión → modo", pairs: [["il faut que", "subjuntivo"], ["je pense que", "indicativo"], ["bien que", "subjuntivo"], ["après que", "indicativo"]], why: "Modos." },
    { fase: "dominio", c: ["b4sj-quand"], k: "order", ask: "Ordena: «Es necesario que actuemos».", tokens: ["Il faut", "que", "nous agissions"], why: "<b>Il faut que nous agissions</b>" },
    { fase: "dominio", c: ["b4sj-quand", "b4sj-indic"], k: "listen", say: "Bien qu'il soit tard, je continue.", acc: ["Bien qu'il soit tard, je continue."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bien qu'il soit tard, je continue.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 8. Conditionnel et hypothèse ── */
E["cond"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Conditionnel et hypothèse",
  objetivo: {
    que: "Vas a usar el condicional para la cortesía, el consejo, la información no confirmada y la hipótesis, sin ponerlo nunca justo después de si.",
    corto: "Pourriez-vous m'envoyer le dossier ? · Si j'avais le temps, je voyagerais.",
    podras: ["Pedir con cortesía (pourriez-vous, nous souhaiterions) y aconsejar (vous devriez).", "Dar una información no confirmada: Selon les organisateurs, la course attirerait 20 000 visiteurs.", "Construir las hipótesis: si + presente → futuro; si + imparfait → condicional; si + plus-que-parfait → condicional pasado."],
    iconos: ["ic2/bombilla", "ic2/engranaje", "ic2/pregunta"],
    previos: ["El condicional de cortesía (B1.1, lección 22), la hipótesis con si (B1.2, lección 1) y el conditionnel passé (B1.2, lección 16)."],
    capacidad: "Ahora pides, aconsejas e imaginas sin el error «si j'aurais»."
  },
  requiere: R("b1co-forme", "b1cp-demander", "b2si-possible", "b2si-irreel", "b2cp-si"), recupera: ["b2si-irreel"],
  conceptos: {
    "b4cd-usages": { n: "condicional: raíz del futuro + -ais, -ait, -ions…; cortesía (Pourriez-vous… ?, Nous souhaiterions…), consejo (vous devriez), información no confirmada (la course attirerait 20 000 visiteurs)", b: "gr" },
    "b4cd-si": { n: "hipótesis: si + présent → futur; si + imparfait → conditionnel présent (si la mairie consultait…, elle éviterait); si + plus-que-parfait → conditionnel passé (si j'avais su, je serais venu); nunca condicional después de si", b: "gr" }
  },
  video: {
    titulo: "El condicional", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "si j'avais", seg: [
        { es: "Hola. Después de si, nunca condicional." } ] },
      { v: "frase", filas: [
          { nota: "cortesía", p: 1, partes: [["Pourriez-vous m'envoyer le dossier ?", "-", 1]] },
          { nota: "hipótesis", p: 2, partes: [["Si j'avais le temps, je voyagerais.", "-", 2]] },
          { nota: "no confirmado", p: 3, partes: [["Le projet coûterait deux millions.", "-", 3]] } ], seg: [
        { fr: "Pourriez-vous m'envoyer le dossier ?", p: 1 }, { fr: "Si j'avais le temps, je voyagerais.", p: 2 }, { fr: "Le projet coûterait deux millions.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si tuviera más tiempo…»", o: ["Si j'avais plus de temps…", "Si j'aurais plus de temps…"], a: 0,
        bien: "¡Sí! Si + imparfait.", mal: "Después de si, imparfait.",
        seg: [ { es: "Pausa. Si + imparfait." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pourriez-vous", "nous souhaiterions", "si + imparfait", "serais venu", "attirerait"], seg: [
        { es: "Cortesía, consejo, rumor e hipótesis.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El correo al ayuntamiento", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe al ayuntamiento y comenta la noticia con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "« Pourriez-vous m'indiquer la date de la réunion ? Nous souhaiterions connaître les mesures prévues. »", "«¿Podría indicarme la fecha de la reunión? Desearíamos conocer las medidas previstas.»"],
      ["hugo", "Selon les organisateurs, la course attirerait 20 000 visiteurs. Ce n'est pas confirmé.", "Según los organizadores, la carrera atraería a 20 000 visitantes. No está confirmado."],
      ["camila", "Si la mairie consultait les habitants, elle éviterait ce conflit.", "Si el ayuntamiento consultara a los vecinos, evitaría este conflicto."],
      ["hugo", "Si j'avais su, je serais venu plus tôt à la réunion ! Et si j'avais plus de temps, je lirais la presse chaque jour.", "¡Si lo hubiera sabido, habría venido antes a la reunión! Y si tuviera más tiempo, leería la prensa todos los días."]
    ],
    fijate: "Fíjate: Pourriez-vous, Nous souhaiterions (cortesía); attirerait (no confirmado); si… consultait → éviterait; si j'avais su → je serais venu; si j'avais → je lirais."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Usos y concordancia con si",
      idea: "Forma: raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient (pourr-iez, souhaiter-ions). Usos: cortesía (Pourriez-vous… ? Nous souhaiterions…), consejo (Vous devriez…), información no confirmada en la prensa (Selon les organisateurs, la course attirerait…) e hipótesis. Con si: si + présent → futur (Si tu viens, je serai content); si + imparfait → conditionnel présent (Si la mairie consultait les habitants, elle éviterait ce conflit); si + plus-que-parfait → conditionnel passé (Si j'avais su, je serais venu plus tôt). Nunca condicional justo después de si: «si j'aurais» es un error.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Si la mairie consultait les habitants, elle éviterait ce conflit. · consultait", "Si el ayuntamiento consultara a los vecinos, evitaría el conflicto.", "si + imparfait"],
        ["Pourriez-vous m'indiquer la date de la réunion ? · Pourriez · pourriez", "¿Podría indicarme la fecha de la reunión?", "cortesía"],
        ["Si j'avais su, je serais venu plus tôt. · serais venu", "Si lo hubiera sabido, habría venido antes.", "si + plus-que-parfait"],
        ["Si j'avais plus de temps, je lirais la presse chaque jour. · j'avais", "Si tuviera más tiempo, leería la prensa cada día.", "si + imparfait"],
        ["Nous souhaiterions connaître les mesures prévues. · souhaiterions", "Desearíamos conocer las medidas previstas.", "cortesía"],
        ["Selon les organisateurs, la course attirerait 20 000 visiteurs. · attirerait", "Según los organizadores, la carrera atraería a 20 000 visitantes.", "no confirmado"],
        ["Si + présent = futur · Si + imparfait = conditionnel présent · Si + plus-que-parfait = conditionnel passé", "tres tipos de hipótesis", "si"],
        ["Pourriez-vous m'envoyer le dossier ?", "¿Podría enviarme el expediente?", "cortesía"]
      ]],
      ej: [["Pourriez-vous m'envoyer le dossier ?", "¿Podría enviarme el expediente?"], ["Si j'avais le temps, je voyagerais.", "Si tuviera tiempo, viajaría."], ["Le projet coûterait deux millions.", "El proyecto costaría dos millones."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Si j'aurais le temps…", "Si j'avais le temps…", "Después de si, nunca condicional."], ["Si j'avais su, je viendrais plus tôt.", "Si j'avais su, je serais venu plus tôt.", "Pasado irreal: condicional pasado."], ["Pouvez-vous… (carta muy formal)", "Pourriez-vous…", "Cortesía: condicional."]] }
  ],
  ejemplos: [
    { sit: "«Si el ayuntamiento consultara a los vecinos, evitaría el conflicto.»", resp: "Si la mairie consultait les habitants, elle éviterait ce conflit.", pasos: ["si + imparfait → condicional."], porque: "Hipótesis." },
    { sit: "«¿Podría indicarme la fecha?» (cortesía)", resp: "Pourriez-vous m'indiquer la date de la réunion ?", pasos: ["Condicional de pouvoir."], porque: "Cortesía." },
    { sit: "«Si lo hubiera sabido, habría venido antes.»", resp: "Si j'avais su, je serais venu plus tôt.", pasos: ["Plus-que-parfait → condicional pasado."], porque: "Irreal pasado." }
  ],
  comprueba: [
    { q: "Después de si, el condicional…", o: ["nunca va", "siempre va"], a: 0, b: "gr", porque: "si + imparfait." },
    { q: "«La course attirerait 20 000 visiteurs» indica…", o: ["una información no confirmada", "un hecho seguro"], a: 0, b: "gr", porque: "Prensa." },
    { q: "Si + plus-que-parfait →", o: ["conditionnel passé", "futur"], a: 0, b: "gr", porque: "Irreal pasado." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cd-si"], k: "match", ask: "Une cada tipo de si con su consecuencia.", q: "Si + … → …", pairs: [["Si + présent", "futur"], ["Si + imparfait", "conditionnel présent"], ["Si + plus-que-parfait", "conditionnel passé"]], pista: "Cuanto más irreal, más atrás el tiempo.", why: "Hipótesis." },
    { fase: "guiada", c: ["b4cd-si"], k: "choice", ask: "«Si el ayuntamiento consultara a los vecinos, evitaría el conflicto.»", q: "«Si la mairie ___ les habitants, elle éviterait ce conflit.»", o: ["consultait", "consulterait"], a: 0, pista: "Después de si.", why: "<b>consultait</b>." },
    { fase: "guiada", c: ["b4cd-usages"], k: "fill", ask: "Condicional de pouvoir (vous), cortesía.", q: "___ -vous m'indiquer la date de la réunion ?", acc: ["Pourriez", "pourriez"], pista: "pourr- + -iez.", why: "<b>Pourriez</b>." },
    { fase: "indep", c: ["b4cd-si"], k: "choice", ask: "«Si lo hubiera sabido, habría venido antes.»", q: "«Si j'avais su, je ___ plus tôt.»", o: ["serais venu", "viendrais"], a: 0, why: "<b>serais venu</b>." },
    { fase: "indep", c: ["b4cd-usages"], k: "fill", ask: "Condicional de souhaiter (nous).", q: "Nous ___ connaître les mesures prévues.", acc: ["souhaiterions"], why: "<b>souhaiterions</b>." },
    { fase: "indep", c: ["b4cd-usages"], k: "choice", ask: "Información no confirmada: «la carrera atraería…»", q: "«Selon les organisateurs, la course ___ 20 000 visiteurs.»", o: ["attirerait", "attirera"], a: 0, why: "<b>attirerait</b>." },
    { fase: "aplica", c: ["b4cd-si"], k: "spot", ask: "Encuentra el error.", s: "Si [j'aurais] plus de temps , je lirais la presse chaque jour .", fix: "j'avais", why: "<b>j'avais</b>." },
    { fase: "aplica", c: ["b4cd-usages"], k: "choice", ask: "«¿Podría enviarme el expediente?»", q: "«___»", o: ["Pourriez-vous m'envoyer le dossier ?", "Pouvriez-vous m'envoyer le dossier ?"], a: 0, why: "<b>Pourriez</b>." },
    { fase: "aplica", c: ["b4cd-si"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Si j'avais le temps, je voyagerais.", 0], ["Si tu viens, je serai content.", 0], ["Si j'avais su, je serais venu.", 0], ["Si j'aurais le temps, je voyagerais.", 1], ["Si j'aurais su, je serais venu.", 1], ["Si tu viendras, je serai content.", 1]], why: "Concordancia con si." },
    { fase: "dominio", c: ["b4cd-si"], k: "order", ask: "Ordena: «Si tuviera tiempo, viajaría».", tokens: ["Si j'avais", "le temps,", "je voyagerais"], why: "<b>Si j'avais le temps, je voyagerais</b>" },
    { fase: "dominio", c: ["b4cd-si"], k: "choice", ask: "Después de si, el condicional…", q: "Elige.", o: ["nunca va", "siempre va"], a: 0, es: true, why: "Nunca." },
    { fase: "dominio", c: ["b4cd-usages", "b4cd-si"], k: "listen", say: "Si la mairie consultait les habitants, elle éviterait ce conflit.", acc: ["Si la mairie consultait les habitants, elle éviterait ce conflit."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Si la mairie consultait les habitants, elle éviterait ce conflit.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ II · La lettre formelle ================================ */
/* ── 9. Répondre à la consigne ── */
E["consigne"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Répondre à la consigne",
  objetivo: {
    que: "Vas a descifrar la consigna antes de escribir: destinatario, tareas, registro y número de palabras.",
    corto: "Écrivez au maire pour exprimer votre désaccord… et proposez une solution. · 250 mots minimum",
    podras: ["Subrayar el destinatario (¿quién lee?) y decidir el registro (autoridad → formal y vous).", "Subrayar todas las tareas (a menudo dos: desacuerdo + solución) y darle a cada una una parte visible del texto.", "Respetar la extensión (250 palabras mínimo en el DELF B2) y releer la consigna al final."],
    iconos: ["ic2/lapiz", "ic2/medalla", "ic2/reloj-arena"],
    previos: ["El ensayo del DELF B2 (B2.1, lección 29) y el correo argumentativo (B1.2, lección 8)."],
    capacidad: "Ahora no pierdes puntos por olvidar una parte de la consigna."
  },
  requiere: R("b3es-plan", "b2ce-plan", "b3cl2-reagir"), recupera: ["b3es-plan"],
  conceptos: {
    "b4cs-lire": { n: "leer la consigna: el destinatario (le maire), el registro (soutenu, vouvoiement), las tareas (exprimer votre désaccord + proposer une solution de remplacement) y la extensión (250 mots minimum)", b: "gr" },
    "b4cs-oublis": { n: "errores que penalizan: olvidar la propuesta concreta, escribir menos de 250 palabras, tutear a una autoridad; cada tarea = una parte visible del texto; releer la consigna al final", b: "gr" }
  },
  video: {
    titulo: "Leer la consigna", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "la consigne", seg: [
        { es: "Hola. Antes de escribir, subraya." } ] },
      { v: "frase", filas: [
          { nota: "destinatario y tarea 1", p: 1, partes: [["Écrivez au maire pour exprimer votre désaccord…", "-", 1]] },
          { nota: "tarea 2", p: 2, partes: [["… et proposez une solution.", "-", 2]] },
          { nota: "extensión", p: 3, partes: [["250 mots minimum", "-", 3]] } ], seg: [
        { fr: "Écrivez au maire pour exprimer votre désaccord…", p: 1 }, { fr: "… et proposez une solution.", p: 2 }, { fr: "250 mots minimum", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué parte se olvida más a menudo?", o: ["La proposition concrète demandée", "La formule d'appel"], a: 0,
        bien: "¡Sí! La propuesta concreta.", mal: "Lo más olvidado es la propuesta.",
        seg: [ { es: "Pausa. Cada tarea cuenta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le destinataire", "le désaccord", "une solution", "le vouvoiement", "250 mots"], seg: [
        { es: "Destinatario, tareas, registro y extensión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen de práctica", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia reparte una consigna del DELF y la analiza con Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Lisez : « Écrivez au maire pour exprimer votre désaccord avec le projet de course automobile, et proposez une solution de remplacement. 250 mots minimum. »", "Lean: «Escriba al alcalde para expresar su desacuerdo con el proyecto de carrera de coches, y proponga una solución alternativa. 250 palabras mínimo.»"],
      ["camila", "Le destinataire, c'est le maire. Donc le registre est soutenu, avec le vouvoiement.", "El destinatario es el alcalde. Entonces el registro es culto, con el usted."],
      ["sofia", "Et que devez-vous faire en plus d'exprimer votre désaccord ? — Proposer une solution de remplacement.", "¿Y qué deben hacer además de expresar su desacuerdo? — Proponer una solución alternativa."],
      ["camila", "Mon dernier texte avait 180 mots… — Il est pénalisé : il ne respecte pas la consigne. Et la partie la plus souvent oubliée, c'est la proposition concrète demandée.", "Mi último texto tenía 180 palabras… — Se penaliza: no respeta la consigna. Y la parte más olvidada es la propuesta concreta pedida."]
    ],
    fijate: "Fíjate: le destinataire (le maire), le registre soutenu et le vouvoiement, deux tâches (désaccord + solution de remplacement), 250 mots minimum, 180 mots = pénalisé."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro preguntas antes de escribir",
      idea: "1. ¿Quién lee? Subraya el destinatario (Le maire). 2. ¿Qué me piden? Subraya las tareas: a menudo son dos (exprimer votre désaccord + proposer une solution de remplacement); cada una debe ser una parte visible del texto. 3. ¿Qué registro? Una autoridad exige registro soutenu y vouvoiement. 4. ¿Cuántas palabras? 250 mots minimum en el DELF B2: un texto de 180 palabras se penaliza porque no respeta la consigna. Al final, relee la consigna y comprueba cada tarea; la más olvidada es la propuesta concreta.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Pregunta"], [
        ["Écrivez au maire pour exprimer votre désaccord… · Le maire", "Escriba al alcalde para expresar su desacuerdo… · el alcalde", "destinatario"],
        ["… et proposez une solution. · Proposer une solution de remplacement", "… y proponga una solución. · Proponer una solución alternativa", "tarea 2"],
        ["Soutenu, vouvoiement", "Culto, tratamiento de usted", "registro"],
        ["250 mots minimum · 250 mots", "250 palabras mínimo", "extensión"],
        ["Un texte de 180 mots au DELF B2 est pénalisé : il ne respecte pas la consigne.", "Un texto de 180 palabras en el DELF B2 se penaliza: no respeta la consigna.", "extensión"],
        ["La proposition concrète demandée", "La propuesta concreta pedida", "lo más olvidado"],
        ["le destinataire · les tâches · le registre · la longueur", "el destinatario · las tareas · el registro · la extensión", "elementos"],
        ["Il faut relire la consigne", "Hay que releer la consigna", "al final"]
      ]],
      ej: [["Écrivez au maire pour exprimer votre désaccord…", "Escriba al alcalde para expresar su desacuerdo…"], ["… et proposez une solution.", "… y proponga una solución."], ["250 mots minimum", "250 palabras mínimo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Escribir solo el desacuerdo", "Desacuerdo + solución", "Cada tarea = una parte visible del texto."], ["Tutear al alcalde", "Soutenu, vouvoiement", "Una autoridad exige vous."], ["Un texte de 180 mots", "250 mots minimum", "Si no, se penaliza."]] }
  ],
  ejemplos: [
    { sit: "«Écrivez au maire…» ¿Quién es el destinatario?", resp: "Le maire", pasos: ["Subraya a quién escribes."], porque: "Destinatario." },
    { sit: "¿Qué hay que hacer además de expresar el desacuerdo?", resp: "Proposer une solution de remplacement", pasos: ["Segunda tarea."], porque: "Tareas." },
    { sit: "¿Qué registro se espera?", resp: "Soutenu, vouvoiement", pasos: ["Autoridad."], porque: "Registro." }
  ],
  comprueba: [
    { q: "La extensión mínima en el DELF B2 es…", o: ["250 mots", "150 mots"], a: 0, b: "gr", porque: "Consigna." },
    { q: "Un texto de 180 palabras en el DELF B2…", o: ["se penaliza", "está bien"], a: 0, b: "gr", porque: "No respeta la consigna." },
    { q: "Lo que más se olvida es…", o: ["la propuesta concreta", "el saludo"], a: 0, b: "gr", porque: "Segunda tarea." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cs-lire"], k: "match", ask: "Une cada pregunta con la respuesta de la consigna.", q: "Pregunta → respuesta", pairs: [["¿Quién lee?", "Le maire"], ["¿Qué registro?", "Soutenu, vouvoiement"], ["¿Cuántas palabras?", "250 mots"], ["¿Qué tarea se añade?", "Proposer une solution"]], pista: "Lee la consigna con calma.", why: "Consigna." },
    { fase: "guiada", c: ["b4cs-lire"], k: "choice", ask: "«Écrivez au maire…» ¿Quién es el destinatario?", q: "Elige.", o: ["Le maire", "Les habitants"], a: 0, pista: "A quién escribes.", why: "<b>Le maire</b>." },
    { fase: "guiada", c: ["b4cs-lire"], k: "choice", ask: "¿Qué hay que hacer además de expresar el desacuerdo?", q: "Elige.", o: ["Proposer une solution de remplacement", "Raconter sa vie"], a: 0, pista: "Segunda tarea.", why: "Solución." },
    { fase: "indep", c: ["b4cs-lire"], k: "choice", ask: "¿Qué registro se espera?", q: "Elige.", o: ["Soutenu, vouvoiement", "Familier, tutoiement"], a: 0, why: "Formal." },
    { fase: "indep", c: ["b4cs-lire"], k: "choice", ask: "¿Extensión mínima en el DELF B2?", q: "Elige.", o: ["250 mots", "150 mots"], a: 0, why: "<b>250</b>." },
    { fase: "indep", c: ["b4cs-oublis"], k: "choice", ask: "Un texto de 180 palabras en el DELF B2…", q: "Elige.", o: ["est pénalisé : il ne respecte pas la consigne", "est parfait"], a: 0, why: "Penalizado." },
    { fase: "aplica", c: ["b4cs-oublis"], k: "choice", ask: "¿Qué parte se olvida más a menudo?", q: "Elige.", o: ["La proposition concrète demandée", "La formule d'appel"], a: 0, why: "La propuesta." },
    { fase: "aplica", c: ["b4cs-oublis"], k: "sort", ask: "¿Respeta la consigna o no?", q: "Clasifica.", cats: ["Respeta", "No respeta"], items: [["Désaccord + solution", 0], ["Vouvoiement au maire", 0], ["260 mots", 0], ["Relire la consigne", 0], ["Désaccord seul", 1], ["Tutoiement au maire", 1], ["180 mots", 1], ["Oublier la proposition", 1]], why: "Consigna." },
    { fase: "aplica", c: ["b4cs-lire"], k: "fill", ask: "«250 palabras mínimo»", q: "250 ___ minimum", acc: ["mots"], why: "<b>mots</b>." },
    { fase: "dominio", c: ["b4cs-lire"], k: "order", ask: "Ordena la consigna.", tokens: ["Écrivez au maire", "pour exprimer votre désaccord", "et proposez une solution."], why: "<b>Écrivez au maire pour exprimer votre désaccord et proposez une solution.</b>" },
    { fase: "dominio", c: ["b4cs-oublis"], k: "choice", ask: "Al terminar el texto…", q: "Elige.", o: ["Il faut relire la consigne", "Il faut ajouter un dessin"], a: 0, why: "Releer." },
    { fase: "dominio", c: ["b4cs-lire", "b4cs-oublis"], k: "listen", say: "Écrivez au maire pour exprimer votre désaccord et proposez une solution.", acc: ["Écrivez au maire pour exprimer votre désaccord et proposez une solution."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Écrivez au maire pour exprimer votre désaccord et proposez une solution.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "DELF"], previo: [] }
};

/* ── 10. Formules de la lettre ── */
E["lettre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Formules de la lettre",
  objetivo: {
    que: "Vas a escribir la carta formal francesa con sus fórmulas fijas y en su orden: objeto, saludo, introducción y despedida.",
    corto: "Madame la Maire, · Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.",
    podras: ["Ordenar la carta: remitente, destinatario, lugar y fecha (arriba a la derecha), objeto, saludo, cuerpo, despedida, firma.", "Usar el saludo (Madame la Maire,) y la introducción (Je me permets de vous écrire afin de…).", "Cerrar con Dans l'attente de votre réponse, y la fórmula final que repite el saludo, sin «Bonjour» ni exclamaciones."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/corona"],
    previos: ["El correo argumentativo (B1.2, lección 8), la carta de motivación (B1.2, lección 37) y la carta de lectores (B2.1, lección 31)."],
    capacidad: "Ahora escribes una carta formal con todas las fórmulas que puntúan."
  },
  requiere: R("b2ce-formules", "b2lm-formules", "b3cl2-proposer"), recupera: ["b2lm-formules"],
  conceptos: {
    "b4lt-ordre": { n: "orden: remitente, destinatario, lugar y fecha (Pamplona, le 18 septembre 2026: arriba a la derecha, antes del objeto), Objet :, saludo (Madame la Maire,), cuerpo, despedida, firma", b: "gr" },
    "b4lt-formules": { n: "fórmulas: Je me permets de vous écrire afin de vous faire part de…; Dans l'attente de votre réponse,; Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées (repite el saludo); nada de Bonjour, Cordialement !, à plus !", b: "gr" }
  },
  video: {
    titulo: "La carta formal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Madame la Maire,", seg: [
        { es: "Hola. Fórmulas fijas, puntos seguros." } ] },
      { v: "frase", filas: [
          { nota: "objeto", p: 1, partes: [["Objet : projet de course automobile", "-", 1]] },
          { nota: "saludo", p: 2, partes: [["Madame la Maire,", "-", 2]] },
          { nota: "despedida", p: 3, partes: [["Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", "-", 3]] } ], seg: [
        { fr: "Objet : projet de course automobile", p: 1 }, { fr: "Madame la Maire,", p: 2 }, { fr: "Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué fórmula no cabe en esta carta?", o: ["Merci d'avance, à plus !", "Dans l'attente de votre réponse,"], a: 0,
        bien: "¡Sí! Es demasiado familiar.", mal: "«À plus !» es familiar.",
        seg: [ { es: "Pausa. Nada familiar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Objet :", "Madame la Maire,", "Je me permets de vous écrire", "Dans l'attente de votre réponse", "Je vous prie d'agréer"], seg: [
        { es: "Objeto, saludo, introducción y despedida.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La carta a la alcaldesa", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe a la alcaldesa; Madame Sofia revisa las fórmulas.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai commencé par « Bonjour Madame » et j'ai fini par « Cordialement ! ».", "Empecé con «Hola, señora» y terminé con «¡Saludos!»."],
      ["sofia", "Non. En haut à droite : « Pamplona, le 18 septembre 2026 ». Puis « Objet : Opposition à la course automobile en centre-ville ». Puis « Madame la Maire, ».", "No. Arriba a la derecha: «Pamplona, 18 de septiembre de 2026». Luego «Asunto: Oposición a la carrera de coches en el centro». Luego «Señora alcaldesa:»."],
      ["camila", "Et pour commencer ? — « Je me permets de vous écrire afin de vous faire part de mon opposition au projet de course automobile. »", "¿Y para empezar? — «Me permito escribirle para comunicarle mi oposición al proyecto de carrera de coches.»"],
      ["sofia", "Et pour finir : « Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées. » La formule finale reprend la formule d'appel.", "Y para terminar: «En espera de su respuesta, le ruego acepte, señora alcaldesa, mis saludos más distinguidos.» La fórmula final repite el saludo."]
    ],
    fijate: "Fíjate: lugar y fecha arriba a la derecha, Objet :, Madame la Maire, (saludo), Je me permets de vous écrire afin de…, Dans l'attente de votre réponse, Je vous prie d'agréer, Madame la Maire, … (repite el saludo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Orden y fórmulas",
      idea: "Orden: remitente (arriba a la izquierda), destinatario, lugar y fecha (Pamplona, le 18 septembre 2026: arriba a la derecha, antes del objeto), Objet : (asunto), saludo, cuerpo, despedida y firma. Saludo: título + coma: Madame la Maire, / Monsieur le Directeur, Introducción: Je me permets de vous écrire afin de vous faire part de… Antes de terminar: Dans l'attente de votre réponse, Fórmula final larga que repite el saludo: Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées. Nada de «Bonjour», «Cordialement !», «Merci d'avance, à plus !» ni signos de exclamación.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Objet : Opposition à la course automobile en centre-ville · Objet · objet", "Asunto: Oposición a la carrera de coches en el centro", "objeto"],
        ["Madame la Maire,", "Señora alcaldesa:", "Appel"],
        ["Je me permets de vous écrire… · Je me permets de vous écrire afin de vous faire part de mon opposition au projet de course automobile.", "Me permito escribirle para comunicarle mi oposición al proyecto de carrera de coches.", "Introduction"],
        ["Dans l'attente de votre réponse,", "En espera de su respuesta,", "Avant la fin"],
        ["Je vous prie d'agréer… · Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", "Le ruego acepte, señora alcaldesa, mis saludos más distinguidos.", "Formule finale"],
        ["En haut à droite, avant l'objet", "Arriba a la derecha, antes del objeto", "lugar y fecha"],
        ["reprendre la formule d'appel", "repetir el saludo", "regla de la despedida"],
        ["Merci d'avance, à plus !", "¡Gracias de antemano, hasta luego!", "familiar: evitar"]
      ]],
      ej: [["Objet : projet de course automobile", "Asunto: proyecto de carrera de autos"], ["Madame la Maire,", "Señora alcaldesa:"], ["Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", "Atentamente, (fórmula formal)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Bonjour Madame… Cordialement !", "Madame la Maire, … Je vous prie d'agréer…", "Nada de «Bonjour» ni exclamaciones."], ["Je vous prie d'agréer, Madame, … (después de «Madame la Maire,»)", "Je vous prie d'agréer, Madame la Maire, …", "Repite el saludo exacto."], ["La fecha al final de la carta", "En haut à droite, avant l'objet", "Lugar y fecha arriba."]] }
  ],
  ejemplos: [
    { sit: "Saludo para escribir a la alcaldesa:", resp: "Madame la Maire,", pasos: ["Título + coma."], porque: "Appel." },
    { sit: "¿Dónde va «Pamplona, le 18 septembre 2026»?", resp: "En haut à droite, avant l'objet", pasos: ["Arriba."], porque: "Orden." },
    { sit: "La fórmula final debe…", resp: "reprendre la formule d'appel", pasos: ["Madame la Maire, otra vez."], porque: "Regla." }
  ],
  comprueba: [
    { q: "«Objet :» es…", o: ["el asunto de la carta", "la firma"], a: 0, b: "gr", porque: "Asunto." },
    { q: "«Bonjour Madame» en una carta formal…", o: ["no se usa", "es obligatorio"], a: 0, b: "gr", porque: "Madame la Maire," },
    { q: "La fórmula final…", o: ["repite el saludo", "es libre"], a: 0, b: "gr", porque: "Madame la Maire." }
  ],
  practica: [
    { fase: "guiada", c: ["b4lt-formules"], k: "match", ask: "Une cada parte con su fórmula.", q: "Parte → fórmula", pairs: [["Appel", "Madame la Maire,"], ["Introduction", "Je me permets de vous écrire…"], ["Avant la fin", "Dans l'attente de votre réponse,"], ["Formule finale", "Je vous prie d'agréer…"]], pista: "Sigue el orden de la carta.", why: "Partes." },
    { fase: "guiada", c: ["b4lt-formules"], k: "choice", ask: "Saludo para escribir a la alcaldesa:", q: "Elige.", o: ["Madame la Maire,", "Salut Madame !"], a: 0, pista: "Título + coma.", why: "<b>Madame la Maire,</b>" },
    { fase: "guiada", c: ["b4lt-formules"], k: "choice", ask: "¿Qué fórmula no cabe en esta carta?", q: "Elige.", o: ["Merci d'avance, à plus !", "Dans l'attente de votre réponse,"], a: 0, pista: "Familiar.", why: "Familiar." },
    { fase: "indep", c: ["b4lt-ordre"], k: "fill", ask: "«Asunto» (empieza la línea).", q: "___ : Opposition à la course automobile en centre-ville", acc: ["Objet", "objet"], why: "<b>Objet</b>." },
    { fase: "indep", c: ["b4lt-ordre"], k: "choice", ask: "¿Dónde va «Pamplona, le 18 septembre 2026»?", q: "Elige.", o: ["En haut à droite, avant l'objet", "À la fin, après la signature"], a: 0, why: "Arriba." },
    { fase: "indep", c: ["b4lt-formules"], k: "choice", ask: "La fórmula final debe…", q: "Elige.", o: ["reprendre la formule d'appel", "être en majuscules"], a: 0, why: "Repetir el saludo." },
    { fase: "aplica", c: ["b4lt-formules"], k: "order", ask: "Ordena la introducción.", tokens: ["Je me permets de vous écrire", "afin de vous faire part de mon opposition", "au projet de course automobile."], why: "<b>Je me permets de vous écrire afin de vous faire part de mon opposition au projet de course automobile.</b>" },
    { fase: "aplica", c: ["b4lt-formules"], k: "spot", ask: "Encuentra la fórmula fuera de lugar.", s: "[Cordialement] ! Camila Rojas", fix: "Je vous prie d'agréer", why: "La fórmula final formal." },
    { fase: "aplica", c: ["b4lt-ordre"], k: "sort", ask: "¿Formal o familiar?", q: "Clasifica.", cats: ["Formal", "Familiar"], items: [["Madame la Maire,", 0], ["Dans l'attente de votre réponse,", 0], ["Je me permets de vous écrire…", 0], ["Je vous prie d'agréer…", 0], ["Bonjour Madame !", 1], ["Cordialement !", 1], ["Merci d'avance, à plus !", 1], ["Salut !", 1]], why: "Registro." },
    { fase: "dominio", c: ["b4lt-formules"], k: "order", ask: "Ordena la fórmula final.", tokens: ["Je vous prie d'agréer,", "Madame la Maire,", "l'expression de mes salutations distinguées."], why: "<b>Je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.</b>" },
    { fase: "dominio", c: ["b4lt-ordre"], k: "choice", ask: "«Objet :» es…", q: "Elige.", o: ["el asunto de la carta", "la firma"], a: 0, es: true, why: "Asunto." },
    { fase: "dominio", c: ["b4lt-ordre", "b4lt-formules"], k: "listen", say: "Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.", acc: ["Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Maire, l'expression de mes salutations distinguées.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Pamplona", "Rojas"], previo: [] }
};


/* ================================ II · Cohérence ================================ */


/* ================================ II · Orthographe et ponctuation ================================ */

/* ── 11. Le registre soutenu ── */
E["registre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le registre soutenu",
  objetivo: {
    que: "Vas a quitar del texto formal cada palabra familiar y cambiarla por su equivalente culto.",
    corto: "Cela pose un problème. · De nombreux habitants sont inquiets. · Nous ne pouvons pas accepter ce projet.",
    podras: ["Cambiar las palabras familiares: ça → cela, on → nous, les gens → les habitants, boulot → travail.", "Cambiar los intensificadores: super / très → extrêmement, plein de → de nombreux.", "Escribir la negación completa (ne… pas) y sustituir il y a y faire por verbos precisos."],
    iconos: ["ic2/corona", "ic2/pergamino", "ic2/lapiz"],
    previos: ["El registro familiar (B1.1, lección 67) y el registro culto (B1.2, lección 60)."],
    capacidad: "Ahora mantienes el registro formal de principio a fin."
  },
  requiere: R("b1rf2-noms", "b1rf2-verbes", "b2rs-mots", "b2rs-syntaxe"), recupera: ["b2rs-mots"],
  conceptos: {
    "b4rg-mots": { n: "equivalencias: ça → cela, on → nous, les gens → les habitants, boulot → travail, super / très → extrêmement, plein de → de nombreux", b: "gr" },
    "b4rg-phrase": { n: "frase formal: negación completa (ne… pas: Je ne trouve pas…; Nous ne souhaitons pas que…), sin il y a ni faire vagos (Il y a plein de problèmes → De nombreux problèmes se posent), futuro en vez de aller + infinitivo (cela provoquera)", b: "gr" }
  },
  video: {
    titulo: "Subir el registro", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corona", grande: "cela", seg: [
        { es: "Hola. Cada palabra familiar baja la nota." } ] },
      { v: "frase", filas: [
          { nota: "ça → cela", p: 1, partes: [["Cela pose un problème.", "-", 1]] },
          { nota: "plein de → de nombreux", p: 2, partes: [["De nombreux habitants sont inquiets.", "-", 2]] },
          { nota: "ne… pas", p: 3, partes: [["Nous ne pouvons pas accepter ce projet.", "-", 3]] } ], seg: [
        { fr: "Cela pose un problème.", p: 1 }, { fr: "De nombreux habitants sont inquiets.", p: 2 }, { fr: "Nous ne pouvons pas accepter ce projet.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Versión formal de «On veut pas de cette course.»", o: ["Nous ne souhaitons pas que cette course ait lieu.", "On veut vraiment pas de cette course."], a: 0,
        bien: "¡Sí! Nous, ne… pas y verbo preciso.", mal: "Formal: nous, ne… pas.",
        seg: [ { es: "Pausa. Formal de principio a fin." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["cela", "nous", "les habitants", "travail", "extrêmement", "de nombreux"], seg: [
        { es: "Palabras y frases formales.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El borrador", img: "bg-cafe", yo: "camila",
    escena: "Hugo lee el borrador de la carta de Camila a la alcaldesa.",
    pj: PJ,
    lineas: [
      ["hugo", "« Ce projet est super dangereux. Ça va causer plein de problèmes. » C'est trop familier pour une lettre à la mairie.", "«Este proyecto es superpeligroso. Eso va a causar un montón de problemas.» Es demasiado familiar para una carta al ayuntamiento."],
      ["camila", "Alors : « Ce projet est extrêmement dangereux pour les habitants. Cela provoquera de nombreux problèmes. »", "Entonces: «Este proyecto es extremadamente peligroso para los vecinos. Provocará numerosos problemas.»"],
      ["hugo", "Bien. Et « On veut pas de cette course » ? — « Nous ne souhaitons pas que cette course ait lieu. » Avec ne… pas !", "Bien. ¿Y «No queremos esta carrera»? — «No deseamos que esta carrera tenga lugar.» ¡Con ne… pas!"],
      ["camila", "Et « les gens vont au boulot en voiture » devient « beaucoup d'habitants se rendent à leur travail en voiture ».", "Y «la gente va al curro en coche» pasa a «muchos vecinos se desplazan a su trabajo en coche»."]
    ],
    fijate: "Fíjate: super → extrêmement, ça → cela, plein de → de nombreux, on → nous, ne… pas completo, les gens → les habitants, boulot → travail."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Equivalencias familiar → formal",
      idea: "Palabras: ça → cela; on → nous; les gens → les habitants (o les citoyens); boulot → travail; super / très → extrêmement; plein de → de nombreux. Frase: la negación escrita es completa (ne… pas, nunca solo pas: Je ne trouve pas cette décision raisonnable). Evita il y a y faire cuando hay un verbo más preciso: Il y a plein de problèmes → De nombreux problèmes se posent. Usa el futuro y verbos precisos: Ça va causer… → Cela provoquera… El registro tiene que ser formal en todo el texto.",
      intro: "Toca cada equivalencia.",
      tabla: [["Francés", "Español", "Registro"], [
        ["Ce projet est extrêmement dangereux pour les habitants. · extrêmement", "Este proyecto es extremadamente peligroso para los vecinos.", "formal"],
        ["Cela va causer beaucoup de bruit dans le quartier. · Cela", "Eso va a causar mucho ruido en el barrio.", "formal"],
        ["Nous ne souhaitons pas que cette course ait lieu.", "No deseamos que esta carrera tenga lugar.", "formal"],
        ["Je ne trouve pas cette décision raisonnable.", "No encuentro razonable esta decisión.", "negación completa"],
        ["Beaucoup d'habitants se rendent à leur travail en voiture. · travail", "Muchos vecinos van a su trabajo en coche.", "formal"],
        ["De nombreux problèmes se posent.", "Se plantean numerosos problemas.", "formal"],
        ["ça = cela · boulot = travail · super = extrêmement · plein de = de nombreux · les gens = les habitants", "eso · trabajo · extremadamente · numerosos · los vecinos", "equivalencias"],
        ["On veut pas de cette course. · Ça va causer plein de problèmes.", "No queremos esta carrera. · Eso va a causar un montón de problemas.", "familiar: evitar"]
      ]],
      ej: [["Cela pose un problème.", "Eso plantea un problema."], ["De nombreux habitants sont inquiets.", "Numerosos habitantes están preocupados."], ["Nous ne pouvons pas accepter ce projet.", "No podemos aceptar este proyecto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ça va causer plein de problèmes", "cela provoquera de nombreux problèmes", "Registro formal en todo el texto."], ["Je trouve pas cette décision raisonnable.", "Je ne trouve pas cette décision raisonnable.", "Negación escrita completa."], ["Il y a plein de problèmes.", "De nombreux problèmes se posent.", "Sin il y a ni plein de."]] }
  ],
  ejemplos: [
    { sit: "Versión formal de «On veut pas de cette course.»", resp: "Nous ne souhaitons pas que cette course ait lieu.", pasos: ["nous, ne… pas, souhaiter."], porque: "Formal." },
    { sit: "Cambia «Il y a plein de problèmes.»", resp: "De nombreux problèmes se posent.", pasos: ["Sin il y a."], porque: "Formal." },
    { sit: "Cambia «boulot».", resp: "travail", pasos: ["Familiar → formal."], porque: "Léxico." }
  ],
  comprueba: [
    { q: "El equivalente formal de «ça» es…", o: ["cela", "ceci-là"], a: 0, b: "gr", porque: "cela." },
    { q: "En el escrito, la negación es…", o: ["ne… pas", "pas solo"], a: 0, b: "gr", porque: "Completa." },
    { q: "«Plein de» en formal es…", o: ["de nombreux", "un tas de"], a: 0, b: "gr", porque: "de nombreux." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rg-mots"], k: "match", ask: "Une cada palabra familiar con su equivalente formal.", q: "Familiar → formal", pairs: [["ça", "cela"], ["boulot", "travail"], ["super", "extrêmement"], ["plein de", "de nombreux"]], pista: "Piensa en una carta oficial.", why: "Equivalencias." },
    { fase: "guiada", c: ["b4rg-mots"], k: "spot", ask: "Encuentra la palabra familiar.", s: "Ce projet est [super] dangereux pour les habitants .", fix: "extrêmement", pista: "Intensificador familiar.", why: "<b>extrêmement</b>." },
    { fase: "guiada", c: ["b4rg-mots"], k: "spot", ask: "Encuentra la palabra familiar.", s: "[Ça] va causer beaucoup de bruit dans le quartier .", fix: "Cela", pista: "Pronombre familiar.", why: "<b>Cela</b>." },
    { fase: "indep", c: ["b4rg-phrase"], k: "choice", ask: "Versión formal de «On veut pas de cette course.»", q: "Elige.", o: ["Nous ne souhaitons pas que cette course ait lieu.", "On veut vraiment pas de cette course."], a: 0, why: "Formal." },
    { fase: "indep", c: ["b4rg-phrase"], k: "choice", ask: "¿Cuál respeta la negación escrita?", q: "Elige.", o: ["Je ne trouve pas cette décision raisonnable.", "Je trouve pas cette décision raisonnable."], a: 0, why: "<b>ne… pas</b>." },
    { fase: "indep", c: ["b4rg-mots"], k: "fill", ask: "Cambia «boulot».", q: "Beaucoup d'habitants se rendent à leur ___ en voiture.", acc: ["travail"], why: "<b>travail</b>." },
    { fase: "aplica", c: ["b4rg-phrase"], k: "choice", ask: "Cambia «Il y a plein de problèmes.»", q: "Elige.", o: ["De nombreux problèmes se posent.", "Il y a un tas de problèmes."], a: 0, why: "Formal." },
    { fase: "aplica", c: ["b4rg-mots"], k: "sort", ask: "¿Familiar o formal?", q: "Clasifica.", cats: ["Familiar", "Formal"], items: [["ça", 0], ["boulot", 0], ["plein de", 0], ["les gens", 0], ["cela", 1], ["travail", 1], ["de nombreux", 1], ["les habitants", 1]], why: "Registro." },
    { fase: "aplica", c: ["b4rg-mots"], k: "fill", ask: "Formal de «les gens».", q: "Les ___ du quartier sont inquiets.", acc: ["habitants"], why: "<b>habitants</b>." },
    { fase: "dominio", c: ["b4rg-phrase"], k: "order", ask: "Ordena: «No podemos aceptar este proyecto».", tokens: ["Nous ne pouvons pas", "accepter", "ce projet"], why: "<b>Nous ne pouvons pas accepter ce projet</b>" },
    { fase: "dominio", c: ["b4rg-mots"], k: "choice", ask: "El equivalente formal de «ça» es…", q: "Elige.", o: ["cela", "ceci-là"], a: 0, why: "<b>cela</b>." },
    { fase: "dominio", c: ["b4rg-mots", "b4rg-phrase"], k: "listen", say: "De nombreux habitants sont inquiets.", acc: ["De nombreux habitants sont inquiets."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>De nombreux habitants sont inquiets.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ II · Cohérence ================================ */
/* ── 12. Les connecteurs logiques ── */
E["conn"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les connecteurs logiques",
  objetivo: {
    que: "Vas a elegir el conector según la relación lógica (añadir, oponer, conceder, consecuencia, concluir) y a variarlos.",
    corto: "Certes, le projet est ambitieux, mais il est coûteux. · De plus, il pollue. · En définitive, il faut y renoncer.",
    podras: ["Añadir (de plus, en outre), oponer (cependant, en revanche, néanmoins) y sacar consecuencias (par conséquent, c'est pourquoi).", "Conceder: certes… mais; bien que + subjuntivo; même si + indicativo; il n'en demeure pas moins que.", "Concluir (en définitive, en somme), variar los conectores y poner coma después del conector al inicio de frase."],
    iconos: ["ic2/engranaje", "ic2/lapiz", "ic2/libro"],
    previos: ["Los conectores lógicos (B2.1, lección 13), la concesión (B2.1, lección 9) y los conectores de adición (B1.1, lección 49)."],
    capacidad: "Ahora tu texto se lee con señales claras de principio a fin."
  },
  requiere: R("b1ca-mots", "b3cl-fonctions", "b3cl-or", "b3co-mode"), recupera: ["b3cl-fonctions"],
  conceptos: {
    "b4cn-fonctions": { n: "añadir: de plus, en outre; oponer: cependant, en revanche, néanmoins; consecuencia: par conséquent, c'est pourquoi; concluir: en définitive, en somme; coma después del conector inicial", b: "gr" },
    "b4cn-conceder": { n: "conceder: certes… mais; bien que + subjuntivo (Bien que ce projet soit ambitieux…); même si + indicativo; il n'en demeure pas moins que (no es menos cierto que); variar: no repetir el mismo conector", b: "gr" }
  },
  video: {
    titulo: "Las señales del texto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "en définitive", seg: [
        { es: "Hola. Primero la relación lógica, luego el conector." } ] },
      { v: "frase", filas: [
          { nota: "conceder", p: 1, partes: [["Certes, le projet est ambitieux, mais il est coûteux.", "-", 1]] },
          { nota: "añadir", p: 2, partes: [["De plus, il pollue.", "-", 2]] },
          { nota: "concluir", p: 3, partes: [["En définitive, il faut y renoncer.", "-", 3]] } ], seg: [
        { fr: "Certes, le projet est ambitieux, mais il est coûteux.", p: 1 }, { fr: "De plus, il pollue.", p: 2 }, { fr: "En définitive, il faut y renoncer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La carrera atraería turistas. ___, provocaría muchas molestias.»", o: ["Cependant", "De plus"], a: 0,
        bien: "¡Sí! Oposición.", mal: "Hay oposición: cependant.",
        seg: [ { es: "Pausa. ¿Qué relación hay?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["de plus", "en outre", "cependant", "par conséquent", "bien que", "en définitive"], seg: [
        { es: "Añadir, oponer, conceder, concluir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El párrafo de Camila", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia revisa los conectores del texto de Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, tu écris « mais… mais… mais ». Variez : cependant, en revanche, néanmoins.", "Camila, escribes «pero… pero… pero». Varíe: sin embargo, en cambio, no obstante."],
      ["camila", "D'accord. « La course attirerait des touristes. Cependant, elle provoquerait d'importantes nuisances. En outre, la pollution de l'air augmenterait. »", "De acuerdo. «La carrera atraería turistas. Sin embargo, provocaría importantes molestias. Además, la contaminación del aire aumentaría.»"],
      ["sofia", "Très bien. Et « les rues seraient fermées pendant trois jours ; par conséquent, les commerçants perdraient des clients ».", "Muy bien. Y «las calles estarían cerradas tres días; por consiguiente, los comerciantes perderían clientes»."],
      ["camila", "Et pour conclure : « Bien que ce projet soit ambitieux, il ne répond pas aux besoins des habitants. En définitive, ce projet présente plus d'inconvénients que d'avantages. »", "Y para concluir: «Aunque este proyecto sea ambicioso, no responde a las necesidades de los vecinos. En definitiva, este proyecto presenta más inconvenientes que ventajas.»"]
    ],
    fijate: "Fíjate: cependant (oponer), en outre (añadir), par conséquent (consecuencia), bien que + soit (conceder), en définitive (concluir); coma después del conector inicial."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Relación lógica → conector",
      idea: "Añadir: de plus, en outre. Oponer: cependant, en revanche, néanmoins, toutefois. Consecuencia: par conséquent, c'est pourquoi. Conceder: certes… mais; bien que + subjuntivo; même si + indicativo; il n'en demeure pas moins que. Concluir: en définitive, en somme. Primero decide la relación, después el conector. Varía: no repitas el mismo conector en un párrafo. Al inicio de frase, coma después del conector: Cependant, …",
      intro: "Toca cada conector.",
      tabla: [["Francés", "Español", "Relación"], [
        ["La course attirerait des touristes. Cependant, elle provoquerait d'importantes nuisances. · Cependant", "La carrera atraería turistas. Sin embargo, provocaría importantes molestias.", "oponer"],
        ["Les rues seraient fermées pendant trois jours ; par conséquent, les commerçants perdraient des clients.", "Las calles estarían cerradas tres días; por consiguiente, los comerciantes perderían clientes.", "consecuencia"],
        ["Bien que ce projet soit ambitieux, il ne répond pas aux besoins des habitants. · Bien que", "Aunque este proyecto sea ambicioso, no responde a las necesidades de los vecinos.", "conceder"],
        ["Le bruit est un problème. En outre, la pollution de l'air augmenterait. · En outre", "El ruido es un problema. Además, aumentaría la contaminación del aire.", "añadir"],
        ["En définitive, ce projet présente plus d'inconvénients que d'avantages. · En définitive", "En definitiva, este proyecto presenta más inconvenientes que ventajas.", "concluir"],
        ["Certes, la course est populaire, mais elle coûte cher à la ville. · mais", "Es cierto que la carrera es popular, pero le cuesta cara a la ciudad.", "conceder"],
        ["Il n'en demeure pas moins que la sécurité des habitants doit rester la priorité.", "No es menos cierto que la seguridad de los vecinos debe seguir siendo la prioridad.", "conceder"],
        ["en outre · de plus", "además", "ajouter"],
        ["cependant · néanmoins", "sin embargo · no obstante", "opposer"],
        ["par conséquent · c'est pourquoi", "por consiguiente · por eso", "conséquence"],
        ["en définitive · en somme", "en definitiva · en suma", "conclure"]
      ]],
      ej: [["Certes, le projet est ambitieux, mais il est coûteux.", "Es cierto que el proyecto es ambicioso, pero es costoso."], ["De plus, il pollue.", "Además, contamina."], ["En définitive, il faut y renoncer.", "En definitiva, hay que renunciar a él."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mais… mais… mais…", "Cependant… En revanche… Toutefois…", "Varía los conectores."], ["Bien que le projet est ambitieux…", "Bien que le projet soit ambitieux…", "bien que + subjuntivo."], ["Cependant la sécurité reste un problème.", "Cependant, la sécurité reste un problème.", "Coma después del conector."]] }
  ],
  ejemplos: [
    { sit: "«La carrera atraería turistas. ___, provocaría muchas molestias.»", resp: "Cependant", pasos: ["Oposición."], porque: "Oponer." },
    { sit: "«Las calles estarían cerradas; ___, los comerciantes perderían clientes.»", resp: "par conséquent", pasos: ["Consecuencia."], porque: "Consecuencia." },
    { sit: "«___ este proyecto sea ambicioso, …»", resp: "Bien que", pasos: ["+ subjuntivo."], porque: "Conceder." }
  ],
  comprueba: [
    { q: "«En outre» sirve para…", o: ["añadir", "oponer"], a: 0, b: "gr", porque: "Además." },
    { q: "«Bien que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Concesión." },
    { q: "«En définitive» sirve para…", o: ["concluir", "empezar"], a: 0, b: "gr", porque: "Conclusión." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cn-fonctions"], k: "sort", ask: "¿Qué relación expresa?", q: "Clasifica.", cats: ["ajouter", "opposer", "conséquence", "conclure"], items: [["en outre", 0], ["cependant", 1], ["par conséquent", 2], ["en définitive", 3], ["de plus", 0], ["néanmoins", 1], ["c'est pourquoi", 2], ["en somme", 3]], pista: "¿Suma, contrasta, deduce o cierra?", why: "Funciones." },
    { fase: "guiada", c: ["b4cn-fonctions"], k: "choice", ask: "Oposición.", q: "«La course attirerait des touristes. ___, elle provoquerait d'importantes nuisances.»", o: ["Cependant", "De plus"], a: 0, pista: "Contraste.", why: "<b>Cependant</b>." },
    { fase: "guiada", c: ["b4cn-fonctions"], k: "choice", ask: "Consecuencia.", q: "«Les rues seraient fermées pendant trois jours ; ___, les commerçants perdraient des clients.»", o: ["par conséquent", "en revanche"], a: 0, pista: "Resultado.", why: "<b>par conséquent</b>." },
    { fase: "indep", c: ["b4cn-conceder"], k: "choice", ask: "Concesión + subjuntivo.", q: "«___ ce projet soit ambitieux, il ne répond pas aux besoins des habitants.»", o: ["Bien que", "Même si"], a: 0, why: "<b>Bien que</b> + soit." },
    { fase: "indep", c: ["b4cn-fonctions"], k: "choice", ask: "Añadir.", q: "«Le bruit est un problème. ___, la pollution de l'air augmenterait.»", o: ["En outre", "Cependant"], a: 0, why: "<b>En outre</b>." },
    { fase: "indep", c: ["b4cn-conceder"], k: "fill", ask: "Certes… ___", q: "Certes, la course est populaire, ___ elle coûte cher à la ville.", acc: ["mais"], why: "<b>mais</b>." },
    { fase: "aplica", c: ["b4cn-fonctions"], k: "choice", ask: "Concluir.", q: "«___, ce projet présente plus d'inconvénients que d'avantages.»", o: ["En définitive", "De plus"], a: 0, why: "<b>En définitive</b>." },
    { fase: "aplica", c: ["b4cn-conceder"], k: "spot", ask: "Encuentra el error.", s: "Bien que le projet [est] ambitieux , il reste risqué .", fix: "soit", why: "<b>soit</b>." },
    { fase: "aplica", c: ["b4cn-fonctions", "b4cn-conceder"], k: "match", ask: "Une cada conector con su relación.", q: "Conector → relación", pairs: [["de plus", "añadir"], ["cependant", "oponer"], ["par conséquent", "consecuencia"], ["bien que", "conceder"]], why: "Funciones." },
    { fase: "dominio", c: ["b4cn-conceder"], k: "order", ask: "Ordena la frase.", tokens: ["Il n'en demeure pas moins que", "la sécurité des habitants", "doit rester la priorité."], why: "<b>Il n'en demeure pas moins que la sécurité des habitants doit rester la priorité.</b>" },
    { fase: "dominio", c: ["b4cn-fonctions"], k: "choice", ask: "«En outre» sirve para…", q: "Elige.", o: ["añadir", "oponer"], a: 0, es: true, why: "Añadir." },
    { fase: "dominio", c: ["b4cn-fonctions", "b4cn-conceder"], k: "listen", say: "Certes, le projet est ambitieux, mais il est coûteux.", acc: ["Certes, le projet est ambitieux, mais il est coûteux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Certes, le projet est ambitieux, mais il est coûteux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 13. Éviter les répétitions ── */
E["rep"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Éviter les répétitions",
  objetivo: {
    que: "Vas a evitar las repeticiones con pronombres, sinónimos y verbos precisos, como exige el francés escrito.",
    corto: "Le projet est coûteux. Cette initiative est aussi polluante. · Le document indique que…",
    podras: ["Retomar con pronombres: le, la, les, lui, leur, y, en (Les habitants l'ont critiqué. Je vous en propose trois.).", "Retomar un nombre con ce / cette + sinónimo: ce projet → cette initiative; cette chose → ce phénomène.", "Cambiar los verbos vagos (dire, faire, montrer) por verbos precisos (indiquer, organiser, révéler) y poner una sola marca de opinión por frase."],
    iconos: ["ic2/lapiz", "ic2/engranaje", "ic2/libros"],
    previos: ["El pronombre y (B1.1, lección 30), el pronombre en (B1.1, lección 31) y los verbos precisos (B1.2, lección 57)."],
    capacidad: "Ahora escribes con variedad, sin repetir la misma palabra."
  },
  requiere: R("b1y-lieu", "b1y-pers", "b1en-qte", "b1en-de", "b2vp2-faire", "b2vp2-autres"), recupera: ["b1en-qte"],
  conceptos: {
    "b4rp-pronoms": { n: "retomar con pronombres: le, la, les (Les habitants l'ont critiqué), lui, leur, y (Pensez-vous à la sécurité ? — Oui, j'y pense), en (Des solutions ? Je vous en propose trois)", b: "gr" },
    "b4rp-mots": { n: "sinónimos y precisión: ce projet → cette initiative; cette chose → ce phénomène; dire → affirmer, indiquer; faire → organiser; montrer → révéler; problème → enjeu; una sola marca de opinión por frase (À mon avis, … / Je crois que…)", b: "gr" }
  },
  video: {
    titulo: "Sin repetir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "cette initiative", seg: [
        { es: "Hola. En francés escrito, repetir es un error de estilo." } ] },
      { v: "frase", filas: [
          { nota: "sinónimo", p: 1, partes: [["Le projet est coûteux. Cette initiative est aussi polluante.", "-", 1]] },
          { nota: "verbo preciso", p: 2, partes: [["Le document indique que…", "-", 2]] },
          { nota: "una opinión", p: 3, partes: [["À mon avis, c'est utile.", "-", 3]] } ], seg: [
        { fr: "Le projet est coûteux. Cette initiative est aussi polluante.", p: 1 }, { fr: "Le document indique que…", p: 2 }, { fr: "À mon avis, c'est utile.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Soluciones? Le propongo tres.»", o: ["Des solutions ? Je vous en propose trois.", "Des solutions ? Je vous les propose trois."], a: 0,
        bien: "¡Sí! Cantidad: en.", mal: "Con cantidad: en.",
        seg: [ { es: "Pausa. En." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'", "en", "y", "cette initiative", "indique", "organiser"], seg: [
        { es: "Pronombres, sinónimos y verbos precisos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El resumen del documento", img: "bg-biblioteca", yo: "camila",
    escena: "Camila resume un documento; Hugo le señala las repeticiones.",
    pj: PJ,
    lineas: [
      ["camila", "« La mairie a présenté le projet. Les habitants ont critiqué le projet. Le projet est coûteux. »", "«El ayuntamiento presentó el proyecto. Los vecinos criticaron el proyecto. El proyecto es costoso.»"],
      ["hugo", "Trop de « projet » ! « Les habitants l'ont critiqué. Cette initiative est coûteuse. »", "¡Demasiados «proyecto»! «Los vecinos lo criticaron. Esta iniciativa es costosa.»"],
      ["camila", "Et « La mairie veut faire une course » ? — « organiser une course ». Et « le document dit » ? — « le document indique que 69 % des salariés sont heureux ».", "¿Y «El ayuntamiento quiere hacer una carrera»? — «organizar una carrera». ¿Y «el documento dice»? — «el documento indica que el 69 % de los empleados son felices»."],
      ["hugo", "Et pas « À mon avis, je crois que… » : une seule marque d'opinion. Des solutions ? Je t'en propose trois ! Et la sécurité ? J'y pense.", "Y no «En mi opinión, creo que…»: una sola marca de opinión. ¿Soluciones? ¡Te propongo tres! ¿Y la seguridad? Lo tengo en mente."]
    ],
    fijate: "Fíjate: l'ont critiqué (pronombre), cette initiative (sinónimo), organiser, indique (verbos precisos), une seule marque d'opinion, en propose trois, j'y pense."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres técnicas contra la repetición",
      idea: "1. Pronombres: le, la, les (COD: Les habitants l'ont critiqué), lui, leur (COI), y (à + cosa: Pensez-vous à la sécurité ? — Oui, j'y pense), en (de + cosa o cantidad: Des solutions ? Je vous en propose trois). 2. Retomar con ce / cette + sinónimo o palabra más precisa: ce projet → cette initiative; cette chose → ce phénomène. 3. Verbos y palabras precisos en vez de vagos: dire → affirmer, indiquer; faire → organiser; montrer → révéler; problème → enjeu; chose → élément. Y una sola marca de opinión por frase: À mon avis, … o Je crois que…, no las dos.",
      intro: "Toca cada sustitución.",
      tabla: [["Francés", "Español", "Técnica"], [
        ["Les habitants l'ont critiqué.", "Los vecinos lo criticaron.", "pronombre le"],
        ["Des solutions ? Je vous en propose trois. · en", "¿Soluciones? Le propongo tres.", "pronombre en"],
        ["Pensez-vous à la sécurité ? — Oui, j'y pense. · y", "¿Piensa en la seguridad? — Sí, pienso en ella.", "pronombre y"],
        ["Le document indique que 69 % des salariés sont heureux. · indique", "El documento indica que el 69 % de los empleados son felices.", "verbo preciso"],
        ["Ce phénomène inquiète les habitants. · phénomène", "Este fenómeno preocupa a los vecinos.", "sinónimo"],
        ["La mairie veut organiser une course. · organiser", "El ayuntamiento quiere organizar una carrera.", "verbo preciso"],
        ["dire = affirmer · problème = enjeu · faire = organiser · chose = élément · montrer = révéler", "decir · problema · hacer · cosa · mostrar", "equivalencias"],
        ["À mon avis, le télétravail est utile. · Je crois que le télétravail est utile.", "En mi opinión, el teletrabajo es útil. · Creo que el teletrabajo es útil.", "una sola opinión"],
        ["Le projet est coûteux. Cette initiative est aussi polluante.", "El proyecto es costoso. Esta iniciativa también contamina.", "sinónimo"]
      ]],
      ej: [["Le projet est coûteux. Cette initiative est aussi polluante.", "El proyecto es costoso. Esta iniciativa también contamina."], ["Le document indique que…", "El documento indica que…"], ["À mon avis, c'est utile.", "En mi opinión, es útil."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["À mon avis, je crois que…", "À mon avis, …", "Una sola marca de opinión."], ["Les habitants ont critiqué le projet. (repetido)", "Les habitants l'ont critiqué.", "Pronombre."], ["Le document dit que…", "Le document indique que…", "Verbo preciso."]] }
  ],
  ejemplos: [
    { sit: "«La mairie a présenté le projet. Les habitants ont critiqué le projet.» Mejor segunda frase:", resp: "Les habitants l'ont critiqué.", pasos: ["le projet → l'."], porque: "Pronombre." },
    { sit: "«¿Piensa en la seguridad? — Sí, pienso en ella.»", resp: "Pensez-vous à la sécurité ? — Oui, j'y pense.", pasos: ["à + cosa → y."], porque: "y." },
    { sit: "Mejor verbo que «faire» en «La mairie veut faire une course.»", resp: "organiser", pasos: ["Verbo preciso."], porque: "Precisión." }
  ],
  comprueba: [
    { q: "«Des solutions ? Je vous ___ propose trois.»", o: ["en", "les"], a: 0, b: "gr", porque: "Cantidad: en." },
    { q: "«À mon avis, je crois que…» es…", o: ["una repetición", "correcto"], a: 0, b: "gr", porque: "Doble opinión." },
    { q: "Mejor verbo que «dire» en un resumen:", o: ["indiquer", "faire"], a: 0, b: "gr", porque: "Preciso." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rp-mots"], k: "match", ask: "Une cada palabra vaga con su equivalente preciso.", q: "Vaga → precisa", pairs: [["dire", "affirmer"], ["problème", "enjeu"], ["faire", "organiser"], ["montrer", "révéler"]], pista: "Piensa en un informe.", why: "Precisión." },
    { fase: "guiada", c: ["b4rp-pronoms"], k: "choice", ask: "«La mairie a présenté le projet. Les habitants ont critiqué le projet.» Mejor segunda frase:", q: "Elige.", o: ["Les habitants l'ont critiqué.", "Les habitants ont critiqué le projet aussi."], a: 0, pista: "Pronombre.", why: "<b>l'</b>." },
    { fase: "guiada", c: ["b4rp-pronoms"], k: "choice", ask: "«¿Soluciones? Le propongo tres.»", q: "«Des solutions ? Je vous ___ propose trois.»", o: ["en", "les"], a: 0, pista: "Cantidad.", why: "<b>en</b>." },
    { fase: "indep", c: ["b4rp-pronoms"], k: "choice", ask: "«¿Piensa en la seguridad? — Sí, pienso en ella.»", q: "«Pensez-vous à la sécurité ? — Oui, j'___ pense.»", o: ["y", "en"], a: 0, why: "<b>y</b>." },
    { fase: "indep", c: ["b4rp-mots"], k: "choice", ask: "«Le document dit que 69 % des salariés sont heureux.» Mejor verbo:", q: "Elige.", o: ["indique", "fait"], a: 0, why: "<b>indique</b>." },
    { fase: "indep", c: ["b4rp-mots"], k: "choice", ask: "En lugar de «cette chose»:", q: "«Ce ___ inquiète les habitants.»", o: ["phénomène", "truc"], a: 0, why: "<b>phénomène</b>." },
    { fase: "aplica", c: ["b4rp-mots"], k: "choice", ask: "«La mairie veut faire une course.» Mejor verbo:", q: "Elige.", o: ["organiser", "faire"], a: 0, why: "<b>organiser</b>." },
    { fase: "aplica", c: ["b4rp-mots"], k: "spot", ask: "Encuentra el verbo vago.", s: "Le document [dit] que 69 % des salariés sont heureux .", fix: "indique", why: "<b>indique</b>." },
    { fase: "aplica", c: ["b4rp-mots"], k: "choice", ask: "Una sola marca de opinión:", q: "Elige.", o: ["À mon avis, le télétravail est utile.", "À mon avis, je crois que le télétravail est utile."], a: 0, why: "Una sola." },
    { fase: "dominio", c: ["b4rp-mots"], k: "order", ask: "Ordena: «El proyecto es costoso. Esta iniciativa también contamina».", tokens: ["Le projet est coûteux.", "Cette initiative", "est aussi polluante."], why: "<b>Le projet est coûteux. Cette initiative est aussi polluante.</b>" },
    { fase: "dominio", c: ["b4rp-pronoms"], k: "sort", ask: "¿y o en?", q: "Clasifica.", cats: ["y", "en"], items: [["penser à la sécurité", 0], ["aller à Paris", 0], ["réfléchir au projet", 0], ["proposer trois solutions", 1], ["parler du projet", 1], ["avoir besoin d'aide", 1]], why: "à → y; de / cantidad → en." },
    { fase: "dominio", c: ["b4rp-pronoms", "b4rp-mots"], k: "listen", say: "Le projet est coûteux. Cette initiative est aussi polluante.", acc: ["Le projet est coûteux. Cette initiative est aussi polluante."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le projet est coûteux. Cette initiative est aussi polluante.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ II · Orthographe et ponctuation ================================ */
/* ── 14. Orthographe ── */
E["ortho"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Orthographe",
  objetivo: {
    que: "Vas a evitar las faltas que más cuestan: palabras contaminadas por el inglés o el español y los homófonos a / à, ou / où, -er / -é.",
    corto: "Il a une adresse à Paris. · Tu viens ou tu restes ? · Il faut manger / J'ai mangé.",
    podras: ["Escribir bien entreprise, adresse, développement, exemple, environnement (no como en inglés).", "Distinguir a (verbo: se puede decir avait) de à (preposición) y ou (o) de où (lugar o tiempo).", "Elegir -er (si puedes decir prendre) o -é (si puedes decir pris) y escribir bien leur y s'est."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/pregunta"],
    previos: ["Los homófonos gramaticales (B2.1, lección 59) y los falsos amigos (B1.2, lección 55)."],
    capacidad: "Ahora no regalas puntos por faltas de ortografía."
  },
  requiere: R("b3hg-quoi", "b3hg-sans", "b2fa-mots"), recupera: ["b3hg-sans"],
  conceptos: {
    "b4or-mots": { n: "palabras contaminadas por el inglés: entreprise (no enterprise), adresse (una d), développement (dos p, una l), exemple, environnement (nn)", b: "gr" },
    "b4or-homo": { n: "homófonos: a (verbo: avait) / à (preposición); ou (o) / où (lugar o tiempo); -er (prendre) / -é (pris): il faut changer, j'ai changé; leur + nombre; s'est (se + être: elle s'est trompée)", b: "gr" }
  },
  video: {
    titulo: "Faltas que cuestan", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "a / à", seg: [
        { es: "Hola. Muchas faltas vienen del inglés o del español." } ] },
      { v: "frase", filas: [
          { nota: "a / à", p: 1, partes: [["Il a une adresse à Paris.", "-", 1]] },
          { nota: "ou / où", p: 2, partes: [["Tu viens ou tu restes ?", "-", 2]] },
          { nota: "-er / -é", p: 3, partes: [["Il faut manger / J'ai mangé.", "-", 3]] } ], seg: [
        { fr: "Il a une adresse à Paris.", p: 1 }, { fr: "Tu viens ou tu restes ?", p: 2 }, { fr: "Il faut manger. J'ai mangé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuál está bien escrita?", o: ["entreprise", "enterprise"], a: 0,
        bien: "¡Sí! Entreprise.", mal: "Enterprise es inglés.",
        seg: [ { es: "Pausa. Cuidado con el inglés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["entreprise", "adresse", "développement", "environnement", "a / à", "ou / où"], seg: [
        { es: "Palabras trampa y homófonos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La revisión final", img: "bg-biblioteca", yo: "camila",
    escena: "Camila revisa la ortografía de su carta con Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "« Enterprise », « address », « development »… c'est de l'anglais ! En français : entreprise, adresse, développement.", "«Enterprise», «address», «development»… ¡es inglés! En francés: entreprise, adresse, développement."],
      ["camila", "Et « La ville à décidé » ? — Non : la ville a décidé, on peut dire « avait ». Mais « Je m'adresse à vous en tant qu'habitante », avec un accent.", "¿Y «La ville à décidé»? — No: la ville a décidé, se puede decir «avait». Pero «Je m'adresse à vous en tant qu'habitante», con acento."],
      ["hugo", "Et « Le quartier où j'habite est calme » : où, avec un accent, c'est le lieu. Les habitants défendent leur quartier.", "Y «El barrio donde vivo es tranquilo»: où, con acento, es el lugar. Los vecinos defienden su barrio."],
      ["camila", "Il faut changer les horaires : changer, parce qu'on peut dire « prendre ». Et elle s'est trompée de date. L'environnement aussi : deux n !", "Hay que cambiar los horarios: changer, porque se puede decir «prendre». Y ella se equivocó de fecha. L'environnement también: ¡dos n!"]
    ],
    fijate: "Fíjate: entreprise, adresse, développement, environnement; la ville a décidé (avait) / je m'adresse à vous; où (lugar); leur quartier; changer (prendre); s'est trompée."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Palabras trampa y homófonos",
      idea: "Aprende de memoria las palabras contaminadas por el inglés: entreprise (no enterprise), adresse (una sola d), développement (dos p, una l), exemple (no example), environnement (nn). Homófonos: a = verbo avoir (si puedes decir avait: la ville a décidé); à = preposición (je m'adresse à vous). où = lugar o tiempo (le quartier où j'habite); ou = o (tu viens ou tu restes ?). -er = infinitivo (si puedes decir prendre: il faut changer); -é = participio (si puedes decir pris: j'ai changé). leur + nombre (leur quartier); s'est = se + est (elle s'est trompée).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Regla"], [
        ["entreprise · développement · adresse · environnement", "empresa · desarrollo · dirección · medio ambiente", "ortografía"],
        ["enterprise = entreprise · address = adresse · development = développement · example = exemple · environment = environnement", "inglés → francés", "trampa"],
        ["La ville a décidé d'organiser une course. · a", "La ciudad decidió organizar una carrera.", "a = avait"],
        ["Je m'adresse à vous en tant qu'habitant. · à", "Me dirijo a usted como vecino.", "à = preposición"],
        ["Le quartier où j'habite est calme. · où", "El barrio donde vivo es tranquilo.", "où = lugar"],
        ["Les habitants défendent leur quartier. · leur", "Los vecinos defienden su barrio.", "leur + nombre"],
        ["Il faut changer les horaires. · changer", "Hay que cambiar los horarios.", "-er = prendre"],
        ["Elle s'est trompée de date. · s'est", "Se equivocó de fecha.", "se + est"],
        ["Il a une adresse à Paris.", "Tiene una dirección en París.", "a / à"]
      ]],
      ej: [["Il a une adresse à Paris.", "Tiene una dirección en París."], ["Tu viens ou tu restes ?", "¿Vienes o te quedas?"], ["Il faut manger. J'ai mangé.", "Hay que comer. Comí."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["enterprises, addresses", "entreprises, adresses", "Cuidado con el inglés."], ["La ville à décidé.", "La ville a décidé.", "a = avait."], ["Il faut changé les horaires.", "Il faut changer les horaires.", "Infinitivo: prendre → -er."]] }
  ],
  ejemplos: [
    { sit: "«La ciudad decidió…» (a / à)", resp: "La ville a décidé d'organiser une course.", pasos: ["Se puede decir avait."], porque: "a." },
    { sit: "«El barrio donde vivo es tranquilo.»", resp: "Le quartier où j'habite est calme.", pasos: ["Lugar: où."], porque: "où." },
    { sit: "«Hay que cambiar los horarios.»", resp: "Il faut changer les horaires.", pasos: ["Se puede decir prendre."], porque: "-er." }
  ],
  comprueba: [
    { q: "¿Cuál está bien escrita?", o: ["développement", "dévelopement"], a: 0, b: "gr", porque: "Dos p." },
    { q: "«a» sin acento es…", o: ["el verbo avoir", "la preposición"], a: 0, b: "gr", porque: "avait." },
    { q: "«où» con acento indica…", o: ["lugar o tiempo", "una alternativa"], a: 0, b: "gr", porque: "Lugar." }
  ],
  practica: [
    { fase: "guiada", c: ["b4or-mots"], k: "match", ask: "Une la palabra inglesa con su ortografía francesa.", q: "Inglés → francés", pairs: [["enterprise", "entreprise"], ["address", "adresse"], ["development", "développement"], ["environment", "environnement"]], pista: "Fíjate en las letras dobles.", why: "Ortografía." },
    { fase: "guiada", c: ["b4or-mots"], k: "choice", ask: "¿Cuál está bien escrita?", q: "Elige.", o: ["entreprise", "enterprise"], a: 0, pista: "No es inglés.", why: "<b>entreprise</b>." },
    { fase: "guiada", c: ["b4or-homo"], k: "fill", ask: "a o à (¿se puede decir avait?).", q: "La ville ___ décidé d'organiser une course.", acc: ["a"], pista: "avait.", why: "<b>a</b>." },
    { fase: "indep", c: ["b4or-homo"], k: "fill", ask: "a o à.", q: "Je m'adresse ___ vous en tant qu'habitant.", acc: ["à"], why: "<b>à</b>." },
    { fase: "indep", c: ["b4or-homo"], k: "choice", ask: "«El barrio donde vivo es tranquilo.»", q: "«Le quartier ___ j'habite est calme.»", o: ["où", "ou"], a: 0, why: "<b>où</b>." },
    { fase: "indep", c: ["b4or-homo"], k: "choice", ask: "«Hay que cambiar los horarios.»", q: "«Il faut ___ les horaires.»", o: ["changer", "changé"], a: 0, why: "<b>changer</b>." },
    { fase: "aplica", c: ["b4or-homo"], k: "choice", ask: "«Se equivocó de fecha.»", q: "«Elle ___ trompée de date.»", o: ["s'est", "c'est"], a: 0, why: "<b>s'est</b>." },
    { fase: "aplica", c: ["b4or-mots"], k: "choice", ask: "¿Cuál está bien escrita?", q: "Elige.", o: ["environnement", "environement"], a: 0, why: "<b>nn</b>." },
    { fase: "aplica", c: ["b4or-homo"], k: "spot", ask: "Encuentra el error.", s: "La mairie [à] décidé de reporter la course .", fix: "a", why: "<b>a</b>." },
    { fase: "dominio", c: ["b4or-homo"], k: "choice", ask: "«Los vecinos defienden su barrio.»", q: "«Les habitants défendent ___ quartier.»", o: ["leur", "leurs"], a: 0, why: "<b>leur</b>." },
    { fase: "dominio", c: ["b4or-homo"], k: "order", ask: "Ordena: «Tiene una dirección en París».", tokens: ["Il a", "une adresse", "à Paris"], why: "<b>Il a une adresse à Paris</b>" },
    { fase: "dominio", c: ["b4or-mots", "b4or-homo"], k: "listen", say: "Le quartier où j'habite est calme.", acc: ["Le quartier où j'habite est calme."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le quartier où j'habite est calme.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

/* ── 15. Ponctuation française ── */
E["ponct"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Ponctuation française",
  objetivo: {
    que: "Vas a puntuar a la francesa: espacio antes de los signos dobles, nunca coma entre sujeto y verbo y minúsculas en días, meses e idiomas.",
    corto: "Pourquoi ? Parce que c'est important ! · le lundi 3 septembre · Il a dit : « Je viens. »",
    podras: ["Poner un espacio antes de ; : ? ! y ninguno antes de . y ,.", "No poner nunca coma entre el sujeto y el verbo, y sí después del conector inicial (Cependant, …).", "Escribir en minúscula los días, los meses y los idiomas, y usar las comillas francesas « … »."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/nota"],
    previos: ["La puntuación (B1.2, lección 62) y los conectores lógicos (lección 12)."],
    capacidad: "Ahora tu texto tiene la tipografía de un texto francés."
  },
  requiere: R("b2po-signes", "b2po-maj", "b4cn-fonctions"), recupera: ["b2po-signes"],
  conceptos: {
    "b4po-espaces": { n: "espacio antes de los signos dobles ; : ? ! (Pourquoi organiser cette course ?); sin espacio antes de . y ,; comillas francesas « … » con espacios (le maire parle d'« une fête populaire »)", b: "gr" },
    "b4po-regles": { n: "nunca coma entre sujeto y verbo (Les habitants du centre-ville s'opposent…); coma después del conector inicial (Cependant, …); minúsculas en días, meses e idiomas (le mercredi 3 septembre, le français)", b: "gr" }
  },
  video: {
    titulo: "Puntuar a la francesa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "espace + ?", seg: [
        { es: "Hola. En francés, los signos dobles llevan espacio antes." } ] },
      { v: "frase", filas: [
          { nota: "signos dobles", p: 1, partes: [["Pourquoi ? Parce que c'est important !", "-", 1]] },
          { nota: "minúsculas", p: 2, partes: [["le lundi 3 septembre", "-", 2]] },
          { nota: "comillas", p: 3, partes: [["Il a dit : « Je viens. »", "-", 3]] } ], seg: [
        { fr: "Pourquoi ? Parce que c'est important !", p: 1 }, { fr: "le lundi 3 septembre", p: 2 }, { fr: "Il a dit : « Je viens. »", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuál es correcta?", o: ["Les habitants du centre-ville s'opposent au projet.", "Les habitants du centre-ville, s'opposent au projet."], a: 0,
        bien: "¡Sí! Sin coma entre sujeto y verbo.", mal: "Nunca coma entre sujeto y verbo.",
        seg: [ { es: "Pausa. Sujeto y verbo juntos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["espace + ? ! : ;", "« … »", "septembre", "le français", "Cependant,"], seg: [
        { es: "Espacios, comas, minúsculas y comillas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La revisión de la puntuación", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia corrige la puntuación del texto de Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, en français, on met un espace avant le point d'interrogation : « Pourquoi organiser cette course ? »", "Camila, en francés se pone un espacio antes del signo de interrogación: «¿Por qué organizar esta carrera?»"],
      ["camila", "Et j'ai écrit « Les habitants du centre-ville, s'opposent au projet ». — Pas de virgule entre le sujet et le verbe !", "Y escribí «Los vecinos del centro, se oponen al proyecto». — ¡Nada de coma entre el sujeto y el verbo!"],
      ["sofia", "Exactement. Mais après un connecteur, oui : « Cependant, la sécurité reste un problème. » Et les mois en minuscule : « Le mercredi 3 septembre, j'ai passé l'examen. »", "Exacto. Pero después de un conector, sí: «Sin embargo, la seguridad sigue siendo un problema.» Y los meses en minúscula: «El miércoles 3 de septiembre hice el examen.»"],
      ["camila", "Et les langues aussi : « J'étudie le français depuis 2022. » Et les guillemets : le maire parle d'« une fête populaire ».", "Y los idiomas también: «Estudio francés desde 2022.» Y las comillas: el alcalde habla de «una fiesta popular»."]
    ],
    fijate: "Fíjate: espacio antes de ?, sin coma entre sujeto y verbo, Cependant, (coma después del conector), mercredi 3 septembre y le français (minúsculas), d'« une fête populaire » (comillas francesas)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las reglas de la tipografía francesa",
      idea: "Signos dobles ; : ? ! → espacio antes (Pourquoi ? Parce que c'est important !). Signos simples . , → sin espacio antes. Comillas francesas « … » con espacio dentro: le maire parle d'« une fête populaire ». Nunca coma entre el sujeto y el verbo, aunque el sujeto sea largo (Les habitants du centre-ville s'opposent au projet). Sí coma después de un conector al inicio de frase (Cependant, la sécurité reste un problème). Días, meses e idiomas en minúscula: le mercredi 3 septembre, le français.",
      intro: "Toca cada regla.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Pourquoi organiser cette course ?", "¿Por qué organizar esta carrera?", "espacio antes de ?"],
        ["Le mercredi 3 septembre, j'ai passé l'examen.", "El miércoles 3 de septiembre hice el examen.", "minúsculas"],
        ["J'étudie le français depuis 2022.", "Estudio francés desde 2022.", "idioma en minúscula"],
        ["Les habitants du centre-ville s'opposent au projet.", "Los vecinos del centro se oponen al proyecto.", "sin coma sujeto-verbo"],
        ["Cependant, la sécurité reste un problème.", "Sin embargo, la seguridad sigue siendo un problema.", "coma tras conector"],
        ["Le maire parle d'« une fête populaire ».", "El alcalde habla de «una fiesta popular».", "comillas francesas"],
        ["? · ! · : · ;", "signos dobles", "espace avant"],
        [", · .", "signos simples", "pas d'espace"]
      ]],
      ej: [["Pourquoi ? Parce que c'est important !", "¿Por qué? ¡Porque es importante!"], ["le lundi 3 septembre", "el lunes 3 de septiembre"], ["Il a dit : « Je viens. »", "Dijo: «Vengo»."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Pourquoi?", "Pourquoi ?", "Espacio antes de ?"], ["Les habitants, sont inquiets.", "Les habitants sont inquiets.", "Sin coma entre sujeto y verbo."], ["le Mercredi 3 Septembre", "le mercredi 3 septembre", "Días y meses en minúscula."]] }
  ],
  ejemplos: [
    { sit: "¿Qué frase respeta la tipografía francesa?", resp: "Pourquoi organiser cette course ?", pasos: ["Espacio antes de ?"], porque: "Signo doble." },
    { sit: "¿Cuál es correcta? (mes)", resp: "Le mercredi 3 septembre, j'ai passé l'examen.", pasos: ["Minúsculas."], porque: "Mes." },
    { sit: "¿Cuál es correcta? (sujeto largo)", resp: "Les habitants du centre-ville s'opposent au projet.", pasos: ["Sin coma."], porque: "Sujeto-verbo." }
  ],
  comprueba: [
    { q: "Antes de «?» en francés hay…", o: ["un espacio", "nada"], a: 0, b: "gr", porque: "Signo doble." },
    { q: "Entre sujeto y verbo…", o: ["nunca hay coma", "hay coma si el sujeto es largo"], a: 0, b: "gr", porque: "Nunca." },
    { q: "Los meses se escriben…", o: ["en minúscula", "en mayúscula"], a: 0, b: "gr", porque: "septembre." }
  ],
  practica: [
    { fase: "guiada", c: ["b4po-espaces"], k: "sort", ask: "¿Lleva espacio antes o no?", q: "Clasifica.", cats: ["espace avant", "pas d'espace"], items: [["?", 0], ["!", 0], [":", 0], [";", 0], [",", 1], [".", 1]], pista: "¿Signo doble o simple?", why: "Espacios." },
    { fase: "guiada", c: ["b4po-espaces"], k: "choice", ask: "¿Qué frase respeta la tipografía francesa?", q: "Elige.", o: ["Pourquoi organiser cette course ?", "Pourquoi organiser cette course?"], a: 0, pista: "Espacio.", why: "Espacio antes de ?" },
    { fase: "guiada", c: ["b4po-regles"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige.", o: ["Le mercredi 3 septembre, j'ai passé l'examen.", "Le Mercredi 3 Septembre, j'ai passé l'examen."], a: 0, pista: "Minúsculas.", why: "Minúsculas." },
    { fase: "indep", c: ["b4po-regles"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige.", o: ["J'étudie le français depuis 2022.", "J'étudie le Français depuis 2022."], a: 0, why: "Idioma en minúscula." },
    { fase: "indep", c: ["b4po-regles"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige.", o: ["Les habitants du centre-ville s'opposent au projet.", "Les habitants du centre-ville, s'opposent au projet."], a: 0, why: "Sin coma sujeto-verbo." },
    { fase: "indep", c: ["b4po-regles"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige.", o: ["Cependant, la sécurité reste un problème.", "Cependant la sécurité, reste un problème."], a: 0, why: "Coma tras el conector." },
    { fase: "aplica", c: ["b4po-espaces"], k: "choice", ask: "¿Cuál es correcta?", q: "Elige.", o: ["Le maire parle d'« une fête populaire ».", "Le maire parle d'\"une fête populaire\"."], a: 0, why: "Comillas francesas." },
    { fase: "aplica", c: ["b4po-regles"], k: "spot", ask: "Encuentra el error.", s: "Le mercredi 3 [Septembre] , j'ai passé l'examen .", fix: "septembre", why: "Los meses en minúscula: <b>septembre</b>." },
    { fase: "aplica", c: ["b4po-regles"], k: "match", ask: "Une cada caso con su regla.", q: "Caso → regla", pairs: [["avant ? ! : ;", "espacio"], ["sujet + verbe", "sin coma"], ["Cependant", "coma después"], ["septembre", "minúscula"]], why: "Reglas." },
    { fase: "dominio", c: ["b4po-espaces"], k: "order", ask: "Ordena: «¿Por qué? ¡Porque es importante!»", tokens: ["Pourquoi ?", "Parce que", "c'est important !"], why: "<b>Pourquoi ? Parce que c'est important !</b>" },
    { fase: "dominio", c: ["b4po-regles"], k: "choice", ask: "Los meses se escriben…", q: "Elige.", o: ["en minúscula", "en mayúscula"], a: 0, es: true, why: "Minúscula." },
    { fase: "dominio", c: ["b4po-espaces", "b4po-regles"], k: "listen", say: "Le mercredi 3 septembre, j'ai passé l'examen.", acc: ["Le mercredi 3 septembre, j'ai passé l'examen.", "Le mercredi trois septembre, j'ai passé l'examen."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le mercredi 3 septembre, j'ai passé l'examen.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ================================ II · Projet ================================ */
/* ── 16. Écrire la lettre à la mairie ── */
E["p-lettre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Écrire la lettre à la mairie",
  objetivo: {
    que: "Vas a escribir paso a paso la carta al alcalde contra la carrera de coches, revisando los errores más frecuentes del bloque.",
    corto: "Je me permets de vous écrire afin de vous faire part de mon désaccord. · Je vous propose plutôt d'organiser…",
    podras: ["Cumplir las dos tareas (desacuerdo + solución alternativa) con una línea de objeto clara.", "Usar las fórmulas de la carta formal y mantener el registro culto y el vous de principio a fin.", "Releer con la lista de errores: preposiciones, concordancias, ortografía, comas y repeticiones."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/medalla"],
    previos: ["La consigna (lección 9), las fórmulas de la carta (lección 10) y el registro culto (lección 11)."],
    capacidad: "Ahora escribes una carta formal completa, lista para el DELF B2."
  },
  requiere: R("b4cs-lire", "b4lt-ordre", "b4lt-formules", "b4rg-mots", "b4ac-fem", "b4or-mots", "b4po-regles"), recupera: ["b4lt-formules"],
  conceptos: {
    "b4pl-structure": { n: "la carta completa: Objet : Opposition au projet de course automobile en centre-ville; Monsieur le Maire,; desacuerdo argumentado; solución alternativa (Je me permets de vous suggérer une autre solution : …); Dans l'attente de votre réponse,; Je vous prie d'agréer…", b: "gr" },
    "b4pl-relecture": { n: "relectura con la lista de errores: s'opposer à (no a), nuisances importantes (concordancia), entreprises (ortografía), sin coma entre sujeto y verbo, retomar con sinónimos (cette compétition)", b: "gr" }
  },
  video: {
    titulo: "La carta, paso a paso", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Monsieur le Maire,", seg: [
        { es: "Hola. Todo lo del bloque, en una sola carta." } ] },
      { v: "frase", filas: [
          { nota: "introducción", p: 1, partes: [["Je me permets de vous écrire afin de vous faire part de mon désaccord.", "-", 1]] },
          { nota: "solución", p: 2, partes: [["Je vous propose plutôt d'organiser…", "-", 2]] },
          { nota: "cierre", p: 3, partes: [["Dans l'attente de votre réponse, …", "-", 3]] } ], seg: [
        { fr: "Je me permets de vous écrire afin de vous faire part de mon désaccord.", p: 1 }, { fr: "Je vous propose plutôt d'organiser…", p: 2 }, { fr: "Dans l'attente de votre réponse…", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo empieza la carta al alcalde?", o: ["Monsieur le Maire,", "Bonjour Monsieur le Maire !"], a: 0,
        bien: "¡Sí! Formal desde el saludo.", mal: "Nada de Bonjour ni exclamaciones.",
        seg: [ { es: "Pausa. Registro formal desde el saludo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Objet :", "Monsieur le Maire,", "je m'oppose à", "une autre solution", "cette compétition", "Je vous prie d'agréer"], seg: [
        { es: "Tareas, fórmulas, registro y relectura.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La versión final", img: "bg-biblioteca", yo: "camila",
    escena: "Camila relee su carta con Madame Sofia antes de enviarla.",
    pj: PJ,
    lineas: [
      ["camila", "Objet : Opposition au projet de course automobile en centre-ville. Monsieur le Maire, je me permets de vous écrire afin de vous faire part de mon désaccord.", "Asunto: Oposición al proyecto de carrera de coches en el centro. Señor alcalde: me permito escribirle para expresarle mi desacuerdo."],
      ["sofia", "Bien. Mais tu as écrit « Je m'oppose a ce projet » : c'est à, avec un accent. Et « des nuisances importants » : nuisance est féminin, importantes.", "Bien. Pero escribiste «Je m'oppose a ce projet»: es à, con acento. Y «des nuisances importants»: nuisance es femenino, importantes."],
      ["camila", "Et « Les habitants, sont inquiets » : pas de virgule. Pour ne pas répéter « course », j'écris « cette compétition ».", "Y «Les habitants, sont inquiets»: sin coma. Para no repetir «carrera», escribo «esta competición»."],
      ["sofia", "Parfait. Et la solution ? — « Je me permets de vous suggérer une autre solution : organiser la course sur le circuit régional. » Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées.", "Perfecto. ¿Y la solución? — «Me permito sugerirle otra solución: organizar la carrera en el circuito regional.» A la espera de su respuesta, le ruego acepte, señor alcalde, mis saludos más distinguidos."]
    ],
    fijate: "Fíjate: Objet :, Monsieur le Maire,, je m'oppose à, des nuisances importantes, sin coma entre sujeto y verbo, cette compétition, une autre solution, Dans l'attente de votre réponse, Je vous prie d'agréer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La carta y su relectura",
      idea: "1. Tareas: desacuerdo + solución alternativa, cada una en un párrafo visible. 2. Fórmulas: Objet : Opposition au projet de course automobile en centre-ville; Monsieur le Maire,; Je me permets de vous écrire afin de vous faire part de mon désaccord; Je me permets de vous suggérer une autre solution : …; Dans l'attente de votre réponse,; Je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées. 3. Registro formal y vous de principio a fin. 4. Relectura con la lista de errores: preposiciones (s'opposer à), concordancias (des nuisances importantes), ortografía (entreprises), puntuación (sin coma entre sujeto y verbo) y repeticiones (la course → cette compétition).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Objet : Opposition au projet de course automobile en centre-ville", "Asunto: Oposición al proyecto de carrera de coches en el centro", "objeto"],
        ["Je m'oppose à ce projet pour plusieurs raisons. · à", "Me opongo a este proyecto por varias razones.", "preposición"],
        ["Cette course va causer des nuisances importantes. · importantes", "Esta carrera va a causar molestias importantes.", "concordancia"],
        ["Les entreprises du centre-ville devraient fermer. · entreprises", "Las empresas del centro tendrían que cerrar.", "ortografía"],
        ["Les habitants sont inquiets pour leur sécurité. · habitants (sans virgule)", "Los vecinos están preocupados por su seguridad.", "puntuación"],
        ["Je me permets de vous suggérer une autre solution : organiser la course sur le circuit régional.", "Me permito sugerirle otra solución: organizar la carrera en el circuito regional.", "solución"],
        ["cette compétition", "esta competición", "evitar repetir course"],
        ["Dans l'attente de votre réponse, je vous prie d'agréer… · réponse", "A la espera de su respuesta, le ruego acepte…", "cierre"],
        ["Je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées.", "Le ruego acepte, señor alcalde, mis saludos más distinguidos.", "fórmula final"]
      ]],
      ej: [["Je me permets de vous écrire afin de vous faire part de mon désaccord.", "Me permito escribirle para expresarle mi desacuerdo."], ["Je vous propose plutôt d'organiser…", "Le propongo más bien organizar…"], ["Dans l'attente de votre réponse, …", "A la espera de su respuesta, …"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Bonjour Monsieur le Maire !", "Monsieur le Maire,", "Registro formal desde el saludo."], ["Je m'oppose a ce projet.", "Je m'oppose à ce projet.", "Preposición: à."], ["Les habitants, sont inquiets.", "Les habitants sont inquiets.", "Sin coma entre sujeto y verbo."]] }
  ],
  ejemplos: [
    { sit: "Una buena línea de objeto:", resp: "Objet : Opposition au projet de course automobile en centre-ville", pasos: ["Claro y nominal."], porque: "Objeto." },
    { sit: "Para presentar la solución alternativa:", resp: "Je me permets de vous suggérer une autre solution : organiser la course sur le circuit régional.", pasos: ["Fórmula + propuesta concreta."], porque: "Segunda tarea." },
    { sit: "Para no repetir «course»:", resp: "cette compétition", pasos: ["Sinónimo."], porque: "Repetición." }
  ],
  comprueba: [
    { q: "La carta tiene que incluir…", o: ["el desacuerdo y una solución", "solo el desacuerdo"], a: 0, b: "gr", porque: "Dos tareas." },
    { q: "«Je m'oppose ___ ce projet»", o: ["à", "a"], a: 0, b: "gr", porque: "Preposición." },
    { q: "«des nuisances ___»", o: ["importantes", "importants"], a: 0, b: "gr", porque: "nuisance es femenino." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pl-structure"], k: "choice", ask: "¿Qué línea de objeto conviene?", q: "Elige.", o: ["Objet : Opposition au projet de course automobile en centre-ville", "Objet : Coucou, petit problème !"], a: 0, pista: "Formal y claro.", why: "Objeto." },
    { fase: "guiada", c: ["b4pl-relecture"], k: "spot", ask: "Encuentra el error.", s: "Je m'oppose [a] ce projet pour plusieurs raisons .", fix: "à", pista: "Preposición.", why: "<b>à</b>." },
    { fase: "guiada", c: ["b4pl-relecture"], k: "spot", ask: "Encuentra el error.", s: "Cette course va causer des nuisances [importants] .", fix: "importantes", pista: "nuisance es femenino.", why: "<b>importantes</b>." },
    { fase: "indep", c: ["b4pl-relecture"], k: "spot", ask: "Encuentra el error.", s: "Les [enterprises] du centre-ville devraient fermer .", fix: "entreprises", why: "<b>entreprises</b>." },
    { fase: "indep", c: ["b4pl-structure"], k: "choice", ask: "Para presentar la solución alternativa:", q: "Elige.", o: ["Je me permets de vous suggérer une autre solution : organiser la course sur le circuit régional.", "Faites autre chose, c'est mieux."], a: 0, why: "Propuesta formal." },
    { fase: "indep", c: ["b4pl-relecture"], k: "choice", ask: "Para no repetir «course»:", q: "Elige.", o: ["cette compétition", "cette course encore"], a: 0, why: "Sinónimo." },
    { fase: "aplica", c: ["b4pl-structure"], k: "fill", ask: "«A la espera de su …»", q: "Dans l'attente de votre ___, je vous prie d'agréer…", acc: ["réponse"], why: "<b>réponse</b>." },
    { fase: "aplica", c: ["b4pl-relecture"], k: "choice", ask: "¿Cuál está bien puntuada?", q: "Elige.", o: ["Les habitants sont inquiets pour leur sécurité.", "Les habitants, sont inquiets pour leur sécurité."], a: 0, why: "Sin coma." },
    { fase: "aplica", c: ["b4pl-structure", "b4pl-relecture"], k: "sort", ask: "¿Sirve en la carta o no?", q: "Clasifica.", cats: ["Sirve", "No sirve"], items: [["Monsieur le Maire,", 0], ["Je me permets de vous écrire…", 0], ["cette compétition", 0], ["Dans l'attente de votre réponse,", 0], ["Bonjour Monsieur le Maire !", 1], ["Ça va causer plein de bruit.", 1], ["Les habitants, sont inquiets.", 1], ["Cordialement !", 1]], why: "Registro y corrección." },
    { fase: "dominio", c: ["b4pl-structure"], k: "order", ask: "Ordena la fórmula final.", tokens: ["Je vous prie d'agréer,", "Monsieur le Maire,", "l'expression de mes salutations distinguées."], why: "<b>Je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées.</b>" },
    { fase: "dominio", c: ["b4pl-structure"], k: "choice", ask: "La carta tiene que incluir…", q: "Elige.", o: ["el desacuerdo y una solución", "solo el desacuerdo"], a: 0, es: true, why: "Dos tareas." },
    { fase: "dominio", c: ["b4pl-structure", "b4pl-relecture"], k: "listen", say: "Je me permets de vous écrire afin de vous faire part de mon désaccord.", acc: ["Je me permets de vous écrire afin de vous faire part de mon désaccord."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je me permets de vous écrire afin de vous faire part de mon désaccord.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ================================ III · L'exposé ================================ */
/* ── 17. Le plan de l'exposé ── */
E["plan"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le plan de l'exposé",
  objetivo: {
    que: "Vas a organizar el exposé oral del DELF o DALF: presentar el documento, plantear la problemática, desarrollar con orden y concluir.",
    corto: "Le document proposé aborde la question de… · On peut se demander si… · Dans un premier temps…, dans un second temps…",
    podras: ["Presentar el documento (tipo, fuente, tema) y plantear la problemática con una pregunta clara.", "Desarrollar en orden: analizar, comparar con tu país (En Colombie, en revanche…) y dar tu opinión (Pour ma part, j'estime que…).", "Preparar la conclusión antes del desarrollo: síntesis, respuesta y apertura."],
    iconos: ["ic2/microfono", "ic2/libro", "ic2/reloj-arena"],
    previos: ["El exposé oral del DELF (B2.1, lección 33) y la problemática (B1.2, lección 34)."],
    capacidad: "Ahora tu exposé tiene una estructura que el jurado reconoce."
  },
  requiere: R("b2pe-intro", "b2pb-forme", "b3eo-plan"), recupera: ["b3eo-plan"],
  conceptos: {
    "b4pn-etapes": { n: "etapas: presentar el documento (Le document proposé aborde la question de…), la problemática (La question est donc de savoir si… / On peut se demander si…), el análisis (Dans un premier temps…, dans un second temps…), la comparación, la opinión, la conclusión", b: "gr" },
    "b4pn-formules": { n: "comparar: En Colombie, en revanche, …; opinar sin redundancia: Pour ma part, j'estime que…; la conclusión: une synthèse, une réponse à la problématique et une ouverture, preparada antes del desarrollo", b: "gr" }
  },
  video: {
    titulo: "El plan del exposé", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "la problématique", seg: [
        { es: "Hola. El jurado evalúa la estructura." } ] },
      { v: "frase", filas: [
          { nota: "presentar", p: 1, partes: [["Le document proposé aborde la question de…", "-", 1]] },
          { nota: "problemática", p: 2, partes: [["On peut se demander si…", "-", 2]] },
          { nota: "plan", p: 3, partes: [["Dans un premier temps…, dans un second temps…", "-", 3]] } ], seg: [
        { fr: "Le document proposé aborde la question de…", p: 1 }, { fr: "On peut se demander si…", p: 2 }, { fr: "Dans un premier temps…, dans un second temps…", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuándo redactas la conclusión durante la preparación?", o: ["Avant le développement, pour ne jamais l'oublier", "À la toute fin, s'il reste du temps"], a: 0,
        bien: "¡Sí! Antes del desarrollo.", mal: "Se prepara antes, para no olvidarla.",
        seg: [ { es: "Pausa. La conclusión primero." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Le document proposé aborde", "On peut se demander si", "Dans un premier temps", "En Colombie, en revanche", "Pour ma part, j'estime que"], seg: [
        { es: "Presentar, preguntar, desarrollar y concluir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La preparación del oral", img: "bg-biblioteca", yo: "camila",
    escena: "Camila tiene treinta minutos para preparar un exposé sobre la felicidad en el trabajo.",
    pj: PJ,
    lineas: [
      ["camila", "Le document proposé aborde la question du bonheur au travail. La question est donc de savoir si le travail peut rendre heureux.", "El documento propuesto trata la cuestión de la felicidad en el trabajo. La cuestión es, pues, saber si el trabajo puede hacer feliz."],
      ["sofia", "Bien. Et ton plan ? — Présenter le document, poser la problématique, analyser les chiffres, comparer avec la Colombie, donner mon avis, conclure.", "Bien. ¿Y tu plan? — Presentar el documento, plantear la problemática, analizar las cifras, comparar con Colombia, dar mi opinión, concluir."],
      ["camila", "Pour comparer : « En Colombie, en revanche, … ». Pour mon avis : « Pour ma part, j'estime que… ».", "Para comparar: «En Colombia, en cambio, …». Para mi opinión: «Por mi parte, considero que…»."],
      ["sofia", "Et quand rédiges-tu la conclusion ? — Avant le développement, pour ne jamais l'oublier : une synthèse, une réponse à la problématique et une ouverture.", "¿Y cuándo redactas la conclusión? — Antes del desarrollo, para no olvidarla nunca: una síntesis, una respuesta a la problemática y una apertura."]
    ],
    fijate: "Fíjate: Le document proposé aborde, La question est donc de savoir si, el plan en seis pasos, En Colombie, en revanche, Pour ma part, j'estime que, la conclusión antes del desarrollo."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Seis pasos del exposé",
      idea: "1. Presentar el documento: tipo, fuente y tema (Le document proposé aborde la question de…). 2. Plantear la problemática con una pregunta clara (La question est donc de savoir si… / On peut se demander si…). 3. Analizar (Dans un premier temps…, dans un second temps…). 4. Comparar con tu país (En Colombie, en revanche, …). 5. Dar tu opinión sin redundancia (Pour ma part, j'estime que…). 6. Concluir: una síntesis, una respuesta a la problemática y una apertura. Truco: redacta la conclusión antes del desarrollo, para no olvidarla nunca. Nunca termines con «voilà, c'est tout».",
      intro: "Toca cada paso.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Présenter le document · Poser la problématique · Analyser les chiffres · Comparer avec la Colombie · Donner mon avis · Conclure", "Presentar el documento · Plantear la problemática · Analizar las cifras · Comparar con Colombia · Dar mi opinión · Concluir", "plan"],
        ["La question est donc de savoir si le travail peut rendre heureux.", "La cuestión es, pues, saber si el trabajo puede hacer feliz.", "problemática"],
        ["En Colombie, en revanche, …", "En Colombia, en cambio, …", "comparar"],
        ["Pour ma part, j'estime que…", "Por mi parte, considero que…", "opinión"],
        ["Une synthèse, une réponse à la problématique et une ouverture", "Una síntesis, una respuesta a la problemática y una apertura", "conclusión"],
        ["Avant le développement, pour ne jamais l'oublier", "Antes del desarrollo, para no olvidarla nunca", "cuándo redactar la conclusión"],
        ["Le document proposé aborde la question de… · On peut se demander si… · Dans un premier temps…, dans un second temps…", "El documento propuesto trata… · Cabe preguntarse si… · En primer lugar…, en segundo lugar…", "fórmulas"]
      ]],
      ej: [["Le document proposé aborde la question de…", "El documento propuesto trata la cuestión de…"], ["On peut se demander si…", "Cabe preguntarse si…"], ["Dans un premier temps…, dans un second temps…", "En primer lugar…, en segundo lugar…"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Terminar con «voilà, c'est tout»", "En définitive, … Reste à savoir si…", "La conclusión se prepara antes."], ["À mon avis, je pense que…", "Pour ma part, j'estime que…", "Una sola marca de opinión."], ["Empezar a opinar sin presentar el documento", "Le document proposé aborde…", "Primero, el documento."]] }
  ],
  ejemplos: [
    { sit: "¿Qué frase plantea la problemática?", resp: "La question est donc de savoir si le travail peut rendre heureux.", pasos: ["Pregunta clara."], porque: "Problemática." },
    { sit: "Para comparar con tu país:", resp: "En Colombie, en revanche, …", pasos: ["Contraste."], porque: "Comparar." },
    { sit: "¿Qué debe contener la conclusión?", resp: "Une synthèse, une réponse à la problématique et une ouverture", pasos: ["Tres gestos."], porque: "Conclusión." }
  ],
  comprueba: [
    { q: "El primer paso del exposé es…", o: ["presentar el documento", "dar tu opinión"], a: 0, b: "gr", porque: "Primero el documento." },
    { q: "La conclusión se redacta…", o: ["antes del desarrollo", "si sobra tiempo"], a: 0, b: "gr", porque: "Para no olvidarla." },
    { q: "«Pour ma part, j'estime que…» sirve para…", o: ["dar tu opinión", "presentar el documento"], a: 0, b: "gr", porque: "Opinión." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pn-etapes"], k: "order", ask: "Ordena los pasos del exposé.", tokens: ["Présenter le document", "Poser la problématique", "Analyser les chiffres", "Comparer avec la Colombie", "Donner mon avis", "Conclure"], pista: "Del documento a la conclusión.", why: "Plan." },
    { fase: "guiada", c: ["b4pn-etapes"], k: "choice", ask: "¿Qué frase plantea la problemática?", q: "Elige.", o: ["La question est donc de savoir si le travail peut rendre heureux.", "Le travail, c'est la santé."], a: 0, pista: "Una pregunta.", why: "Problemática." },
    { fase: "guiada", c: ["b4pn-formules"], k: "choice", ask: "Para comparar con tu país:", q: "Elige.", o: ["En Colombie, en revanche, …", "Voilà, c'est tout."], a: 0, pista: "Contraste.", why: "<b>en revanche</b>." },
    { fase: "indep", c: ["b4pn-formules"], k: "choice", ask: "Para dar tu opinión sin redundancia:", q: "Elige.", o: ["Pour ma part, j'estime que…", "À mon avis, je pense que…"], a: 0, why: "Una sola marca." },
    { fase: "indep", c: ["b4pn-formules"], k: "choice", ask: "¿Qué debe contener la conclusión?", q: "Elige.", o: ["Une synthèse, une réponse à la problématique et une ouverture", "Un nouvel argument"], a: 0, why: "Tres gestos." },
    { fase: "indep", c: ["b4pn-formules"], k: "choice", ask: "¿Cuándo redactas la conclusión?", q: "Elige.", o: ["Avant le développement, pour ne jamais l'oublier", "À la toute fin, s'il reste du temps"], a: 0, why: "Antes." },
    { fase: "aplica", c: ["b4pn-etapes"], k: "match", ask: "Une cada fórmula con su paso.", q: "Fórmula → paso", pairs: [["Le document proposé aborde…", "presentar"], ["On peut se demander si…", "problemática"], ["Dans un premier temps…", "desarrollo"], ["Pour ma part, j'estime que…", "opinión"]], why: "Pasos." },
    { fase: "aplica", c: ["b4pn-etapes"], k: "fill", ask: "«Cabe preguntarse si…» (On peut se …)", q: "On peut se ___ si le travail rend heureux.", acc: ["demander"], why: "<b>demander</b>." },
    { fase: "aplica", c: ["b4pn-etapes"], k: "spot", ask: "Encuentra la fórmula fuera de lugar.", s: "En conclusion , [voilà] , c'est tout .", fix: "en définitive", why: "Nunca «voilà, c'est tout»." },
    { fase: "dominio", c: ["b4pn-etapes"], k: "sort", ask: "¿Introducción o conclusión?", q: "Clasifica.", cats: ["Introducción", "Conclusión"], items: [["Le document proposé aborde…", 0], ["On peut se demander si…", 0], ["La question est donc de savoir si…", 0], ["Une synthèse", 1], ["Une réponse à la problématique", 1], ["Une ouverture", 1]], why: "Partes." },
    { fase: "dominio", c: ["b4pn-etapes"], k: "choice", ask: "El primer paso del exposé es…", q: "Elige.", o: ["presentar el documento", "dar tu opinión"], a: 0, es: true, why: "El documento." },
    { fase: "dominio", c: ["b4pn-etapes", "b4pn-formules"], k: "listen", say: "La question est donc de savoir si le travail peut rendre heureux.", acc: ["La question est donc de savoir si le travail peut rendre heureux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La question est donc de savoir si le travail peut rendre heureux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Colombie", "DELF", "DALF"], previo: [] }
};

/* ── 18. Toujours conclure ── */
E["concl"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Toujours conclure",
  objetivo: {
    que: "Vas a cerrar siempre con una conclusión de tres gestos: anunciar el final, responder con matiz y abrir una pregunta, sin argumentos nuevos.",
    corto: "En définitive, le télétravail présente des avantages… à condition d'être encadré. Reste à savoir si les entreprises suivront.",
    podras: ["Anunciar el final: en définitive, en conclusion, en somme.", "Responder a la problemática con matiz: oui, mais…, à condition de…, il reste fragile.", "Abrir la reflexión: Reste à savoir si…, On peut dès lors se demander si…, en tres a cinco frases."],
    iconos: ["ic2/medalla", "ic2/bombilla", "ic2/pregunta"],
    previos: ["Concluir (B1.1, lección 50), los conectores lógicos (lección 12) y el plan del exposé (lección 17)."],
    capacidad: "Ahora tus textos y tus exposés terminan con fuerza."
  },
  requiere: R("b1cl-annonce", "b1cl-position", "b4cn-fonctions", "b4pn-formules"), recupera: ["b1cl-annonce"],
  conceptos: {
    "b4cc-gestes": { n: "tres gestos: anunciar (En définitive, En conclusion, En somme), responder con matiz (…, mais il reste fragile; à condition d'être encadré), abrir (Reste à savoir si…; On peut dès lors se demander si…)", b: "gr" },
    "b4cc-regles": { n: "reglas: tres a cinco frases; nunca un argumento nuevo; responder a la problemática planteada (Peut-on vivre sans télé ? → vivre sans télévision n'est plus un renoncement…)", b: "gr" }
  },
  video: {
    titulo: "Siempre concluir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/medalla", grande: "Reste à savoir si…", seg: [
        { es: "Hola. Anunciar, responder y abrir." } ] },
      { v: "frase", filas: [
          { nota: "anunciar", p: 1, partes: [["En définitive, le télétravail présente des avantages…", "-", 1]] },
          { nota: "matizar", p: 2, partes: [["… à condition d'être encadré.", "-", 2]] },
          { nota: "abrir", p: 3, partes: [["Reste à savoir si les entreprises suivront.", "-", 3]] } ], seg: [
        { fr: "En définitive, le télétravail présente des avantages…", p: 1 }, { fr: "… à condition d'être encadré.", p: 2 }, { fr: "Reste à savoir si les entreprises suivront.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Una conclusión no debe…", o: ["introduire un argument nouveau", "répondre à la problématique"], a: 0,
        bien: "¡Sí! Nada nuevo al final.", mal: "La conclusión no añade ideas.",
        seg: [ { es: "Pausa. Nada nuevo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["En définitive", "En somme", "à condition de", "Reste à savoir si", "On peut dès lors se demander si"], seg: [
        { es: "Tres gestos, tres a cinco frases.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El final del exposé", img: "bg-universidad", yo: "camila",
    escena: "Camila ensaya la conclusión de su exposé delante de Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Et pour finir, j'ajoute un dernier argument sur les salaires…", "Y para terminar, añado un último argumento sobre los salarios…"],
      ["hugo", "Non ! Pas d'argument nouveau dans la conclusion. Annonce la fin, réponds et ouvre.", "¡No! Nada de argumentos nuevos en la conclusión. Anuncia el final, responde y abre."],
      ["camila", "D'accord : « En définitive, le bonheur au travail existe bel et bien, mais il reste fragile. »", "Vale: «En definitiva, la felicidad en el trabajo existe realmente, pero sigue siendo frágil.»"],
      ["hugo", "Et l'ouverture ? — « On peut dès lors se demander si l'université pourra concilier ces deux missions. » Ou : « Reste à savoir si les entreprises suivront. »", "¿Y la apertura? — «Cabe entonces preguntarse si la universidad podrá conciliar estas dos misiones.» O: «Queda por saber si las empresas lo seguirán.»"]
    ],
    fijate: "Fíjate: nada de argumento nuevo; En définitive (anunciar), mais il reste fragile (matiz), On peut dès lors se demander si… / Reste à savoir si… (abrir)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los tres gestos",
      idea: "1. Anunciar el final: En définitive, En conclusion, En somme. 2. Responder a la problemática con matiz: …, mais il reste fragile; … à condition d'être encadré; oui, mais… 3. Abrir con una nueva pregunta: Reste à savoir si…; On peut dès lors se demander si… Tres a cinco frases. Una conclusión nunca introduce un argumento nuevo: resume, responde y abre. Ejemplo para «Peut-on vivre sans télé ?»: En définitive, vivre sans télévision n'est plus un renoncement, mais le signe d'une évolution des usages. Reste à savoir si internet nous rend plus libres.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Gesto"], [
        ["En définitive, le bonheur au travail existe bel et bien, mais il reste fragile.", "En definitiva, la felicidad en el trabajo existe realmente, pero sigue siendo frágil.", "anunciar + matizar"],
        ["En définitive, vivre sans télévision n'est plus un renoncement, mais le signe d'une évolution des usages. Reste à savoir si internet nous rend plus libres.", "En definitiva, vivir sin televisión ya no es una renuncia, sino el signo de una evolución de los usos. Queda por saber si internet nos hace más libres.", "conclusión completa"],
        ["Reste à savoir si…", "Queda por saber si…", "abrir"],
        ["introduire un argument nouveau", "introducir un argumento nuevo", "prohibido"],
        ["En définitive, le télétravail est une solution d'avenir, à condition d'en corriger les effets. · définitive · somme", "En definitiva, el teletrabajo es una solución de futuro, siempre que se corrijan sus efectos.", "anunciar + matizar"],
        ["On peut dès lors se demander si l'université pourra concilier ces deux missions.", "Cabe entonces preguntarse si la universidad podrá conciliar estas dos misiones.", "abrir"],
        ["En définitive · En conclusion · En somme", "En definitiva · En conclusión · En suma", "anunciar"]
      ]],
      ej: [["En définitive, le télétravail présente des avantages…", "En definitiva, el teletrabajo tiene ventajas…"], ["… à condition d'être encadré.", "… siempre que esté regulado."], ["Reste à savoir si les entreprises suivront.", "Queda por saber si las empresas lo seguirán."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Un argumento nuevo al final", "Síntesis + respuesta + apertura", "La conclusión no añade ideas."], ["Voilà, c'est tout.", "En définitive, …", "Anunciar con una fórmula."], ["Una respuesta sin matiz: oui, totalement.", "Oui, mais… / à condition de…", "Matizar."]] }
  ],
  ejemplos: [
    { sit: "Mejor conclusión para «Peut-on vivre sans télé ?»", resp: "En définitive, vivre sans télévision n'est plus un renoncement, mais le signe d'une évolution des usages. Reste à savoir si internet nous rend plus libres.", pasos: ["Anuncia, responde, abre."], porque: "Completa." },
    { sit: "¿Qué fórmula abre la reflexión?", resp: "Reste à savoir si…", pasos: ["Nueva pregunta."], porque: "Abrir." },
    { sit: "Una conclusión no debe…", resp: "introduire un argument nouveau", pasos: ["Solo resumir y abrir."], porque: "Regla." }
  ],
  comprueba: [
    { q: "«Reste à savoir si…» sirve para…", o: ["abrir la reflexión", "presentar el documento"], a: 0, b: "gr", porque: "Apertura." },
    { q: "Una buena conclusión tiene…", o: ["tres a cinco frases", "una sola palabra"], a: 0, b: "gr", porque: "Breve." },
    { q: "«À condition de…» sirve para…", o: ["matizar la respuesta", "añadir un argumento"], a: 0, b: "gr", porque: "Matiz." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cc-gestes"], k: "order", ask: "Ordena la conclusión.", tokens: ["En définitive,", "le bonheur au travail existe bel et bien,", "mais il reste fragile."], pista: "Anuncia, afirma, matiza.", why: "<b>En définitive, le bonheur au travail existe bel et bien, mais il reste fragile.</b>" },
    { fase: "guiada", c: ["b4cc-regles"], k: "choice", ask: "Mejor conclusión para «Peut-on vivre sans télé ?»", q: "Elige.", o: ["En définitive, vivre sans télévision n'est plus un renoncement, mais le signe d'une évolution des usages. Reste à savoir si internet nous rend plus libres.", "Voilà, c'est tout, merci."], a: 0, pista: "Tres gestos.", why: "Completa." },
    { fase: "guiada", c: ["b4cc-gestes"], k: "choice", ask: "¿Qué fórmula abre la reflexión?", q: "Elige.", o: ["Reste à savoir si…", "Dans un premier temps…"], a: 0, pista: "Pregunta nueva.", why: "<b>Reste à savoir si</b>." },
    { fase: "indep", c: ["b4cc-regles"], k: "choice", ask: "Una conclusión no debe…", q: "Elige.", o: ["introduire un argument nouveau", "répondre à la problématique"], a: 0, why: "Nada nuevo." },
    { fase: "indep", c: ["b4cc-gestes"], k: "fill", ask: "«En definitiva» (En …)", q: "En ___, le télétravail est une solution d'avenir, à condition d'en corriger les effets.", acc: ["définitive", "somme"], why: "<b>définitive</b>." },
    { fase: "indep", c: ["b4cc-gestes"], k: "choice", ask: "Para matizar la respuesta:", q: "«… le télétravail présente des avantages, ___ d'être encadré.»", o: ["à condition", "en outre"], a: 0, why: "<b>à condition</b>." },
    { fase: "aplica", c: ["b4cc-gestes"], k: "sort", ask: "¿Qué gesto cumple?", q: "Clasifica.", cats: ["anunciar", "matizar", "abrir"], items: [["En définitive,", 0], ["En somme,", 0], ["à condition d'être encadré", 1], ["mais il reste fragile", 1], ["Reste à savoir si…", 2], ["On peut dès lors se demander si…", 2]], why: "Gestos." },
    { fase: "aplica", c: ["b4cc-regles"], k: "spot", ask: "Encuentra lo que sobra en la conclusión.", s: "En définitive , le télétravail est utile . [Enfin] , un nouvel argument : les salaires baissent .", fix: "Reste à savoir si", why: "Nada de argumentos nuevos." },
    { fase: "aplica", c: ["b4cc-gestes"], k: "match", ask: "Une cada fórmula con su gesto.", q: "Fórmula → gesto", pairs: [["En conclusion,", "anunciar"], ["à condition de…", "matizar"], ["Reste à savoir si…", "abrir"]], why: "Gestos." },
    { fase: "dominio", c: ["b4cc-gestes"], k: "order", ask: "Ordena la apertura.", tokens: ["On peut dès lors se demander si", "l'université pourra concilier", "ces deux missions."], why: "<b>On peut dès lors se demander si l'université pourra concilier ces deux missions.</b>" },
    { fase: "dominio", c: ["b4cc-gestes"], k: "choice", ask: "«Reste à savoir si…» sirve para…", q: "Elige.", o: ["abrir la reflexión", "presentar el documento"], a: 0, es: true, why: "Apertura." },
    { fase: "dominio", c: ["b4cc-gestes", "b4cc-regles"], k: "listen", say: "Reste à savoir si les entreprises suivront.", acc: ["Reste à savoir si les entreprises suivront."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Reste à savoir si les entreprises suivront.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 19. Vouvoyer et interagir ── */
E["oral"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Vouvoyer et interagir",
  objetivo: {
    que: "Vas a interactuar con el examinador: tratarlo siempre de vous, pedir que repita, tomar la palabra, ganar tiempo y matizar con cortesía.",
    corto: "Pourriez-vous répéter la question ? · Permettez-moi d'ajouter un exemple. · Je ne suis pas tout à fait d'accord.",
    podras: ["Tratar siempre de vous al examinador (Vous avez raison, no «Tu as raison»).", "Pedir que repita o reformule (Pourriez-vous reformuler la question, s'il vous plaît ?) y ganar tiempo con elegancia.", "Tomar la palabra (Permettez-moi d'ajouter…) y discrepar con cortesía (Je comprends votre point de vue ; cependant, …)."],
    iconos: ["ic2/microfono", "ic2/amigos", "ic2/corona"],
    previos: ["El tratamiento tu / vous (Primeros pasos), el condicional de cortesía (B1.1, lección 22), tomar la palabra (B1.1, lección 51) y el debate con el examinador (B2.1, lección 33)."],
    capacidad: "Ahora dialogas con el jurado con la cortesía que se espera."
  },
  requiere: R("tu-vous", "b1cp-demander", "b1pp-prendre", "b3eo-debat"), recupera: ["b3eo-debat"],
  conceptos: {
    "b4ol-vous": { n: "siempre vous con el examinador: Vous avez raison, Pourriez-vous répéter / reformuler la question, s'il vous plaît ?, Permettez-moi d'ajouter un exemple (imperativo de vous)", b: "gr" },
    "b4ol-interagir": { n: "ganar tiempo: C'est une question intéressante ; permettez-moi d'y réfléchir un instant; matizar con cortesía: Je comprends votre point de vue ; cependant, …; Je ne suis pas tout à fait d'accord avec vous", b: "gr" }
  },
  video: {
    titulo: "Hablar con el jurado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "Pourriez-vous… ?", seg: [
        { es: "Hola. En el examen, siempre usted." } ] },
      { v: "frase", filas: [
          { nota: "repetir", p: 1, partes: [["Pourriez-vous répéter la question ?", "-", 1]] },
          { nota: "tomar la palabra", p: 2, partes: [["Permettez-moi d'ajouter un exemple.", "-", 2]] },
          { nota: "matizar", p: 3, partes: [["Je ne suis pas tout à fait d'accord.", "-", 3]] } ], seg: [
        { fr: "Pourriez-vous répéter la question ?", p: 1 }, { fr: "Permettez-moi d'ajouter un exemple.", p: 2 }, { fr: "Je ne suis pas tout à fait d'accord.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "No entendiste la pregunta. Dices…", o: ["Pourriez-vous reformuler la question, s'il vous plaît ?", "Tu peux répéter ?"], a: 0,
        bien: "¡Sí! Vous y condicional.", mal: "En el examen: vous.",
        seg: [ { es: "Pausa. Vous." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Pourriez-vous", "Permettez-moi", "Vous avez raison", "Je comprends votre point de vue", "pas tout à fait d'accord"], seg: [
        { es: "Vous, cortesía y matiz.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El oral de prueba", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia hace de examinadora en un oral de prueba.",
    pj: PJ,
    lineas: [
      ["sofia", "Selon vous, le télétravail améliore-t-il la qualité de vie ?", "Según usted, ¿el teletrabajo mejora la calidad de vida?"],
      ["camila", "Pourriez-vous reformuler la question, s'il vous plaît ? … Ah, d'accord. C'est une question intéressante ; permettez-moi d'y réfléchir un instant.", "¿Podría reformular la pregunta, por favor? … Ah, de acuerdo. Es una pregunta interesante; permítame pensarlo un momento."],
      ["sofia", "Beaucoup pensent que oui.", "Muchos piensan que sí."],
      ["camila", "Vous avez raison, mais je voudrais nuancer. Je comprends votre point de vue ; cependant, je ne suis pas tout à fait d'accord avec vous. Permettez-moi d'ajouter un exemple.", "Tiene razón, pero quisiera matizar. Entiendo su punto de vista; sin embargo, no estoy del todo de acuerdo con usted. Permítame añadir un ejemplo."]
    ],
    fijate: "Fíjate: Pourriez-vous reformuler, permettez-moi d'y réfléchir, Vous avez raison (siempre vous), Je comprends votre point de vue ; cependant, pas tout à fait d'accord, Permettez-moi d'ajouter."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas con el examinador",
      idea: "Siempre vous con el examinador, aunque sea joven o simpático: Vous avez raison (nunca «Tu as raison»). Pedir que repita o reformule con el condicional de cortesía: Pourriez-vous répéter / reformuler la question, s'il vous plaît ? Ganar tiempo: C'est une question intéressante ; permettez-moi d'y réfléchir un instant. Tomar la palabra con el imperativo de vous: Permettez-moi d'ajouter un exemple. Discrepar con cortesía: Je comprends votre point de vue ; cependant, … / Je ne suis pas tout à fait d'accord avec vous.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Función"], [
        ["Pourriez-vous reformuler la question, s'il vous plaît ?", "¿Podría reformular la pregunta, por favor?", "no entender"],
        ["Vous avez raison, mais je voudrais nuancer. · Vous avez", "Tiene razón, pero quisiera matizar.", "vous"],
        ["C'est une question intéressante ; permettez-moi d'y réfléchir un instant.", "Es una pregunta interesante; permítame pensarlo un momento.", "ganar tiempo"],
        ["Je comprends votre point de vue ; cependant, …", "Entiendo su punto de vista; sin embargo, …", "matizar"],
        ["Permettez-moi d'ajouter un exemple. · permettez · Permettez", "Permítame añadir un ejemplo.", "tomar la palabra"],
        ["Je ne suis pas tout à fait d'accord avec vous. · d'accord", "No estoy del todo de acuerdo con usted.", "discrepar"],
        ["Pourriez-vous répéter la question ?", "¿Podría repetir la pregunta?", "repetir"]
      ]],
      ej: [["Pourriez-vous répéter la question ?", "¿Podría repetir la pregunta?"], ["Permettez-moi d'ajouter un exemple.", "Permítame añadir un ejemplo."], ["Je ne suis pas tout à fait d'accord.", "No estoy del todo de acuerdo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tu peux répéter ?", "Pourriez-vous répéter ?", "En el examen: vous."], ["Tu as raison, mais…", "Vous avez raison, mais…", "Siempre vous."], ["Non, c'est faux.", "Je comprends votre point de vue ; cependant, …", "Discrepar con cortesía."]] }
  ],
  ejemplos: [
    { sit: "No entendiste la pregunta. Dices:", resp: "Pourriez-vous reformuler la question, s'il vous plaît ?", pasos: ["Condicional + vous."], porque: "Cortesía." },
    { sit: "Para ganar tiempo antes de responder:", resp: "C'est une question intéressante ; permettez-moi d'y réfléchir un instant.", pasos: ["Elegante."], porque: "Ganar tiempo." },
    { sit: "Para matizar la opinión del examinador:", resp: "Je comprends votre point de vue ; cependant, …", pasos: ["Concede y matiza."], porque: "Matiz." }
  ],
  comprueba: [
    { q: "Con el examinador se usa…", o: ["siempre vous", "tu si es joven"], a: 0, b: "gr", porque: "Examen." },
    { q: "«Permettez-moi de…» sirve para…", o: ["tomar la palabra", "despedirse"], a: 0, b: "gr", porque: "Pedir permiso." },
    { q: "«Pas tout à fait d'accord» expresa…", o: ["un desacuerdo matizado", "un acuerdo total"], a: 0, b: "gr", porque: "Matiz." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ol-vous"], k: "choice", ask: "No entendiste la pregunta de la examinadora. Dices:", q: "Elige.", o: ["Pourriez-vous reformuler la question, s'il vous plaît ?", "Tu peux répéter ?"], a: 0, pista: "Vous.", why: "Cortesía." },
    { fase: "guiada", c: ["b4ol-vous"], k: "spot", ask: "Encuentra el error.", s: "[Tu as] raison , mais je voudrais nuancer .", fix: "Vous avez", pista: "Examen.", why: "<b>Vous avez</b>." },
    { fase: "guiada", c: ["b4ol-interagir"], k: "choice", ask: "Para ganar tiempo antes de responder:", q: "Elige.", o: ["C'est une question intéressante ; permettez-moi d'y réfléchir un instant.", "Euh… je sais pas."], a: 0, pista: "Elegante.", why: "Ganar tiempo." },
    { fase: "indep", c: ["b4ol-interagir"], k: "choice", ask: "Para matizar con cortesía la opinión del examinador:", q: "Elige.", o: ["Je comprends votre point de vue ; cependant, …", "Vous avez tort."], a: 0, why: "Matiz." },
    { fase: "indep", c: ["b4ol-vous"], k: "fill", ask: "Imperativo de permettre (vous).", q: "___ -moi d'ajouter un exemple.", acc: ["Permettez", "permettez"], why: "<b>Permettez</b>." },
    { fase: "indep", c: ["b4ol-interagir"], k: "fill", ask: "«de acuerdo»", q: "Je ne suis pas tout à fait ___ avec vous.", acc: ["d'accord"], why: "<b>d'accord</b>." },
    { fase: "aplica", c: ["b4ol-vous", "b4ol-interagir"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Pourriez-vous répéter ?", "pedir que repita"], ["Permettez-moi d'ajouter…", "tomar la palabra"], ["permettez-moi d'y réfléchir", "ganar tiempo"], ["Je comprends votre point de vue ; cependant…", "matizar"]], why: "Funciones." },
    { fase: "aplica", c: ["b4ol-vous"], k: "sort", ask: "¿Adecuado en el examen o no?", q: "Clasifica.", cats: ["Adecuado", "No adecuado"], items: [["Pourriez-vous répéter ?", 0], ["Vous avez raison.", 0], ["Permettez-moi d'ajouter…", 0], ["Je comprends votre point de vue.", 0], ["Tu peux répéter ?", 1], ["Tu as raison.", 1], ["Laisse-moi parler !", 1], ["C'est n'importe quoi.", 1]], why: "Registro." },
    { fase: "aplica", c: ["b4ol-interagir"], k: "choice", ask: "«No estoy del todo de acuerdo.»", q: "Elige.", o: ["Je ne suis pas tout à fait d'accord.", "Je ne suis pas tout d'accord à fait."], a: 0, why: "Orden." },
    { fase: "dominio", c: ["b4ol-vous"], k: "order", ask: "Ordena: «¿Podría repetir la pregunta?»", tokens: ["Pourriez-vous", "répéter", "la question ?"], why: "<b>Pourriez-vous répéter la question ?</b>" },
    { fase: "dominio", c: ["b4ol-vous"], k: "choice", ask: "Con el examinador se usa…", q: "Elige.", o: ["siempre vous", "tu si es joven"], a: 0, es: true, why: "Vous." },
    { fase: "dominio", c: ["b4ol-vous", "b4ol-interagir"], k: "listen", say: "Je comprends votre point de vue ; cependant, je ne suis pas tout à fait d'accord avec vous.", acc: ["Je comprends votre point de vue ; cependant, je ne suis pas tout à fait d'accord avec vous.", "Je comprends votre point de vue; cependant, je ne suis pas tout à fait d'accord avec vous."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je comprends votre point de vue ; cependant, je ne suis pas tout à fait d'accord avec vous.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ================================ III · Prononciation ================================ */
/* ── 20. Lettres muettes et liaisons ── */
E["phono"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Lettres muettes et liaisons",
  objetivo: {
    que: "Vas a leer en voz alta sin pronunciar las letras mudas (como el -ent de los verbos) y haciendo las liaisons obligatorias.",
    corto: "ils expérimentent (-ent mudo) · ils‿ont ≠ ils sont · les‿enfants",
    podras: ["Callar el -ent de los verbos (ils parlent, ils arrivent) y pronunciar [ɑ̃] el -ent de nombres y adverbios (le moment, souvent).", "Hacer las liaisons obligatorias: les‿enfants, nous‿avons, ils‿ont [z], y distinguir ils ont [z] de ils sont [s].", "Evitar las liaisons prohibidas: después de et y delante de h aspirada."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/nota"],
    previos: ["Las letras mudas (Fonética, lección 6), la liaison obligatoria (Fonética, lección 41) y la prohibida (Fonética, lección 42)."],
    capacidad: "Ahora lees en voz alta sin los errores que más se oyen."
  },
  requiere: R("mu-final", "mu-h", "fm-ent", "flo-cas", "fli-et"), recupera: ["fm-ent"],
  conceptos: {
    "b4ph-muettes": { n: "-ent verbal mudo (ils parlent, elles lisent, ils arrivent, ils expérimentent); -ent de nombre o adverbio = [ɑ̃] (le moment, souvent, un client); -r final de los infinitivos en -er mudo (parler); consonante final que suena: avec", b: "gr" },
    "b4ph-liaisons": { n: "liaisons obligatorias: les‿enfants, nous‿avons, ils‿ont [z] (≠ ils sont [s]); prohibidas: después de et (un étudiant et | un professeur) y delante de h aspirada", b: "gr" }
  },
  video: {
    titulo: "Lo que no se dice", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "ils parlent", seg: [
        { es: "Hola. El -ent de los verbos no se pronuncia." } ] },
      { v: "frase", filas: [
          { nota: "-ent mudo", p: 1, partes: [["Ils expérimentent de nouvelles méthodes.", "-", 1]] },
          { nota: "liaison [z]", p: 2, partes: [["Ils ont raison.", "-", 2]] },
          { nota: "liaison", p: 3, partes: [["les enfants", "-", 3]] } ], seg: [
        { fr: "Ils expérimentent de nouvelles méthodes.", p: 1 }, { fr: "Ils ont raison.", p: 2 }, { fr: "les enfants", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Ils arrivent souvent en retard»: ¿qué -ent suena [ɑ̃]?", o: ["el de souvent", "el de arrivent"], a: 0, es: true,
        bien: "¡Sí! Souvent es adverbio.", mal: "El -ent verbal es mudo.",
        seg: [ { es: "Pausa. ¿Verbo o adverbio?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ils parlent", "souvent", "ils ont", "ils sont", "les enfants", "et | un"], seg: [
        { es: "Mudas, liaisons obligatorias y prohibidas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La lectura en voz alta", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee un texto en voz alta; Madame Sofia la corrige.",
    pj: PJ,
    lineas: [
      ["camila", "« Les chercheurs expérimentent de nouvelles méthodes. » J'ai dit « expérimen-tent » ?", "«Los investigadores experimentan nuevos métodos.» ¿Dije «experimen-tent»?"],
      ["sofia", "Oui, mais le -ent des verbes est muet : ils expérimentent, ils parlent. Par contre, souvent et moment se prononcent avec [ɑ̃].", "Sí, pero el -ent de los verbos es mudo: ils expérimentent, ils parlent. En cambio, souvent y moment se pronuncian con [ɑ̃]."],
      ["camila", "Et « ils ont raison » et « ils sont prêts » ? — Ils‿ont avec [z], ils sont avec [s]. Ce n'est pas le même verbe !", "¿Y «tienen razón» y «están listos»? — Ils ont con [z], ils sont con [s]. ¡No es el mismo verbo!"],
      ["sofia", "Exactement. Et la liaison est obligatoire dans « les enfants », mais interdite après « et » : un étudiant et | un professeur.", "Exacto. Y la liaison es obligatoria en «les enfants», pero prohibida después de «et»: un étudiant et | un professeur."]
    ],
    fijate: "Fíjate: expérimentent y parlent (-ent mudo), souvent y moment ([ɑ̃]), ils ont [z] ≠ ils sont [s], les‿enfants (obligatoria), et | un (prohibida)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Mudas y liaisons",
      idea: "-ent al final de un verbo en tercera persona plural es mudo: ils parlent [paʁl], elles lisent, ils arrivent, ils expérimentent. -ent al final de un nombre o un adverbio suena [ɑ̃]: le moment, souvent, un client. El -r de los infinitivos en -er es mudo (parler); en cambio, la consonante final de avec suena. Liaisons obligatorias: determinante + nombre (les‿enfants), pronombre + verbo (nous‿avons, ils‿ont [ilzɔ̃]); ils ont [z] ≠ ils sont [s]. Liaisons prohibidas: después de et (un étudiant et | un professeur) y delante de h aspirada.",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Español", "Pronunciación"], [
        ["Ils expérimentent de nouvelles méthodes.", "Experimentan nuevos métodos.", "-ent mudo"],
        ["Ils arrivent souvent en retard.", "Llegan a menudo tarde.", "arrivent mudo · souvent [ɑ̃]"],
        ["Ils ont raison.", "Tienen razón.", "ils ont [z]"],
        ["Ils sont prêts.", "Están listos.", "ils sont [s]"],
        ["un étudiant et | un professeur", "un estudiante y un profesor", "liaison prohibida"],
        ["avec", "con", "la c final suena"],
        ["parler", "hablar", "-r mudo"],
        ["ils parlent · elles lisent · ils arrivent", "hablan · leen · llegan", "muette"],
        ["souvent · moment · client", "a menudo · momento · cliente", "[ɑ̃]"],
        ["les enfants · nous avons", "los niños · tenemos", "liaison obligatoria"]
      ]],
      ej: [["ils expérimentent", "la -ent final no suena"], ["ils ont ≠ ils sont", "tienen ≠ son"], ["les enfants", "los niños (liaison)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ils parlent [paʁlɑ̃]", "ils parlent [paʁl]", "-ent verbal no se pronuncia."], ["ils ont [ilsɔ̃]", "ils ont [ilzɔ̃]", "Liaison en [z]; con [s] es ils sont."], ["un étudiant et‿un professeur", "un étudiant et | un professeur", "Nunca liaison después de et."]] }
  ],
  ejemplos: [
    { sit: "«Ils arrivent souvent en retard»: ¿qué -ent suena [ɑ̃]?", resp: "el de souvent", pasos: ["Adverbio: [ɑ̃]."], porque: "Verbo mudo." },
    { sit: "¿Dónde está prohibida la liaison?", resp: "un étudiant et | un professeur", pasos: ["Después de et."], porque: "Prohibida." },
    { sit: "¿En qué palabra suena la consonante final?", resp: "avec", pasos: ["c final."], porque: "Excepción." }
  ],
  comprueba: [
    { q: "El -ent de «ils parlent»…", o: ["es mudo", "suena [ɑ̃]"], a: 0, b: "gr", porque: "Verbo." },
    { q: "«Ils ont» se pronuncia con…", o: ["[z]", "[s]"], a: 0, b: "gr", porque: "Liaison." },
    { q: "Después de «et», la liaison…", o: ["está prohibida", "es obligatoria"], a: 0, b: "gr", porque: "Regla." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ph-muettes"], k: "sort", ask: "¿-ent mudo o [ɑ̃]?", q: "Clasifica.", cats: ["muette", "[ɑ̃]"], items: [["ils parlent", 0], ["souvent", 1], ["elles lisent", 0], ["moment", 1], ["ils arrivent", 0], ["client", 1]], pista: "¿Verbo o nombre / adverbio?", why: "-ent." },
    { fase: "guiada", c: ["b4ph-muettes"], k: "choice", es: true, say: "Ils expérimentent de nouvelles méthodes.", ask: "Escucha. ¿Cómo suena «ils expérimentent»?", q: "Elige.", o: ["la terminación -ent es muda", "la terminación -ent suena [ɑ̃]"], a: 0, pista: "Verbo.", why: "-ent mudo." },
    { fase: "guiada", c: ["b4ph-muettes"], k: "choice", es: true, say: "Ils arrivent souvent en retard.", ask: "Escucha. ¿Qué -ent suena [ɑ̃]?", q: "Elige.", o: ["el de souvent", "el de arrivent"], a: 0, pista: "Adverbio.", why: "souvent." },
    { fase: "indep", c: ["b4ph-liaisons"], k: "choice", es: true, say: "Ils ont raison.", ask: "Escucha. ¿Qué oíste?", q: "Elige.", o: ["ils ont (tienen), con [z]", "ils sont (son), con [s]"], a: 0, why: "[z]: avoir." },
    { fase: "indep", c: ["b4ph-liaisons"], k: "choice", es: true, say: "Ils sont prêts.", ask: "Escucha. ¿Qué oíste?", q: "Elige.", o: ["ils sont (son / están), con [s]", "ils ont (tienen), con [z]"], a: 0, why: "[s]: être." },
    { fase: "indep", c: ["b4ph-liaisons"], k: "choice", ask: "¿Dónde está prohibida la liaison?", q: "Elige.", o: ["un étudiant et | un professeur", "les enfants"], a: 0, why: "Después de et." },
    { fase: "aplica", c: ["b4ph-muettes"], k: "choice", ask: "¿En qué palabra se pronuncia la consonante final?", q: "Elige.", o: ["avec", "parler"], a: 0, why: "<b>avec</b>." },
    { fase: "aplica", c: ["b4ph-muettes"], k: "choice", es: true, say: "parler", ask: "Escucha. El -r final de «parler»…", q: "Elige.", o: ["es mudo", "se pronuncia fuerte"], a: 0, why: "Mudo." },
    { fase: "aplica", c: ["b4ph-muettes", "b4ph-liaisons"], k: "match", ask: "Une cada ejemplo con su regla.", q: "Ejemplo → regla", pairs: [["ils parlent", "-ent mudo"], ["souvent", "[ɑ̃]"], ["les enfants", "liaison obligatoria"], ["et | un", "liaison prohibida"]], why: "Reglas." },
    { fase: "dominio", c: ["b4ph-liaisons"], k: "spot", ask: "Encuentra el verbo que no corresponde a lo que se oye con [z].", s: "« Ils [sont] raison » : on entend [ilzɔ̃] .", fix: "ont", why: "[z] = <b>ont</b>." },
    { fase: "dominio", c: ["b4ph-liaisons"], k: "order", ask: "Ordena: «Tienen razón».", tokens: ["Ils", "ont", "raison"], why: "<b>Ils ont raison</b>" },
    { fase: "dominio", c: ["b4ph-muettes", "b4ph-liaisons"], k: "listen", say: "Ils arrivent souvent en retard.", acc: ["Ils arrivent souvent en retard."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ils arrivent souvent en retard.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ================================ III · Chiffres et dates ================================ */
/* ── 21. Les nombres qui piègent ── */
E["nombres"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les nombres qui piègent",
  objetivo: {
    que: "Vas a entender y escribir sin error los números del 70 al 99, los años, los decimales y los porcentajes.",
    corto: "soixante-dix-sept = 77 · quatre-vingt-quinze = 95 · mille neuf cent quatre-vingt-dix = 1990",
    podras: ["Formar 70-79 (soixante-dix, soixante et onze…) y 80-99 (quatre-vingts, quatre-vingt-un, quatre-vingt-dix…).", "Entender los años (mille neuf cent cinquante-cinq, deux mille vingt-six).", "Entender los decimales con virgule (trois virgule cinq) y los porcentajes (soixante-neuf pour cent), esperando siempre el final del número."],
    iconos: ["ic2/moneda", "ic2/audifonos", "ic2/lapiz"],
    previos: ["Los números del 70 al 100 (A1, lección 17), los números grandes (A1, lección 18) y las cifras (B1.1, lección 63)."],
    capacidad: "Ahora anotas cualquier cifra que oyes en el examen."
  },
  requiere: R("n7-70", "n7-80", "gn-cent", "gn-mille", "b1ch-fraction"), recupera: ["n7-80"],
  conceptos: {
    "b4nb-70-99": { n: "70 = soixante-dix (60 + 10), 71 = soixante et onze, 77 = soixante-dix-sept; 80 = quatre-vingts (4 × 20), 81 = quatre-vingt-un; 90 = quatre-vingt-dix, 91 = quatre-vingt-onze, 99 = quatre-vingt-dix-neuf", b: "gr" },
    "b4nb-grands": { n: "años: mille neuf cent cinquante-cinq (1955), deux mille vingt-six (2026); decimales con virgule: trois virgule cinq (3,5); porcentajes: soixante-neuf pour cent (69 %); esperar el final antes de escribir", b: "gr" }
  },
  video: {
    titulo: "Números trampa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "quatre-vingts", seg: [
        { es: "Hola. Del 70 al 99 se suma y se multiplica." } ] },
      { v: "frase", filas: [
          { nota: "77", p: 1, partes: [["soixante-dix-sept", "-", 1]] },
          { nota: "95", p: 2, partes: [["quatre-vingt-quinze", "-", 2]] },
          { nota: "1990", p: 3, partes: [["mille neuf cent quatre-vingt-dix", "-", 3]] } ], seg: [
        { fr: "soixante-dix-sept", p: 1 }, { fr: "quatre-vingt-quinze", p: 2 }, { fr: "mille neuf cent quatre-vingt-dix", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Oyes «soixante-dix…». ¿Qué haces?", o: ["Espero el final del número", "Escribo 60 enseguida"], a: 0, es: true,
        bien: "¡Sí! Puede ser 70-79.", mal: "Espera: puede ser 70-79.",
        seg: [ { es: "Pausa. Escucha hasta el final." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["soixante-dix", "soixante et onze", "quatre-vingts", "quatre-vingt-dix", "virgule", "pour cent"], seg: [
        { es: "Espera el final y anota en cifras.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El dictado de cifras", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia dicta cifras a la clase.",
    pj: PJ,
    lineas: [
      ["sofia", "Écrivez en chiffres : soixante-dix-sept.", "Escriban en cifras: setenta y siete."],
      ["camila", "J'ai écrit 60… puis 17 ! — Attendez la fin : soixante-dix-sept, c'est 77.", "Escribí 60… ¡y luego 17! — Espere el final: soixante-dix-sept es 77."],
      ["sofia", "Maintenant : quatre-vingt-dix-neuf. Mille neuf cent cinquante-cinq. Soixante-neuf pour cent.", "Ahora: noventa y nueve. Mil novecientos cincuenta y cinco. Sesenta y nueve por ciento."],
      ["camila", "99, 1955, 69 %. Et trois virgule cinq, c'est 3,5 : en français, on écrit une virgule !", "99, 1955, 69 %. Y trois virgule cinq es 3,5: ¡en francés se escribe una coma!"]
    ],
    fijate: "Fíjate: soixante-dix-sept = 77 (no 60 + 17), quatre-vingt-dix-neuf = 99, mille neuf cent cinquante-cinq = 1955, soixante-neuf pour cent = 69 %, trois virgule cinq = 3,5."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Sumar y multiplicar",
      idea: "70-79: soixante + 10-19: soixante-dix (70), soixante et onze (71), soixante-dix-sept (77). 80-99: quatre-vingts (4 × 20; con s solo cuando termina ahí), quatre-vingt-un (81), quatre-vingt-dix (90), quatre-vingt-onze (91), quatre-vingt-quinze (95), quatre-vingt-dix-neuf (99). Años: mille neuf cent cinquante-cinq (1955), deux mille vingt-six (2026). Decimales con virgule: trois virgule cinq (3,5). Porcentajes: pour cent (69 %). Truco: no escribas nada hasta oír el número completo.",
      intro: "Toca cada número.",
      tabla: [["Francés", "Cifra", "Cálculo"], [
        ["soixante-dix-sept", "77", "60 + 17"],
        ["quatre-vingt-dix-neuf", "99", "4 × 20 + 19"],
        ["soixante-neuf pour cent", "69 %", "porcentaje"],
        ["mille neuf cent cinquante-cinq", "1955", "año"],
        ["deux mille vingt-six", "2026", "año"],
        ["quatre-vingts", "80", "4 × 20"],
        ["trois virgule cinq", "3,5", "decimal"],
        ["soixante et onze", "71", "60 + 11"],
        ["soixante-dix · quatre-vingt-onze · quatre-vingt-quinze", "70 · 91 · 95", "trampas"],
        ["mille neuf cent quatre-vingt-dix", "1990", "año"]
      ]],
      ej: [["soixante-dix-sept", "77"], ["quatre-vingt-quinze", "95"], ["mille neuf cent quatre-vingt-dix", "1990"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Escribir 60 al oír soixante-dix…", "Esperar el final: 70", "Nunca escribas antes de oír todo el número."], ["3.5 (con punto)", "3,5 (trois virgule cinq)", "Decimal con coma."], ["quatre-vingts-un", "quatre-vingt-un", "La s de quatre-vingts solo al final."]] }
  ],
  ejemplos: [
    { sit: "«soixante-dix-sept» en cifras:", resp: "77", pasos: ["60 + 17."], porque: "70-79." },
    { sit: "«quatre-vingt-quinze» en cifras:", resp: "95", pasos: ["4 × 20 + 15."], porque: "80-99." },
    { sit: "«trois virgule cinq» en cifras:", resp: "3,5", pasos: ["virgule = coma."], porque: "Decimal." }
  ],
  comprueba: [
    { q: "«Soixante et onze» es…", o: ["71", "61"], a: 0, b: "gr", porque: "60 + 11." },
    { q: "«Quatre-vingts» es…", o: ["80", "24"], a: 0, b: "gr", porque: "4 × 20." },
    { q: "En francés, los decimales se escriben con…", o: ["coma", "punto"], a: 0, b: "gr", porque: "virgule." }
  ],
  practica: [
    { fase: "guiada", c: ["b4nb-70-99", "b4nb-grands"], k: "match", ask: "Une cada cifra con su forma escrita.", q: "Cifra → francés", pairs: [["70", "soixante-dix"], ["80", "quatre-vingts"], ["91", "quatre-vingt-onze"], ["77", "soixante-dix-sept"], ["1955", "mille neuf cent cinquante-cinq"]], pista: "Suma y multiplica.", why: "Números." },
    { fase: "guiada", c: ["b4nb-70-99"], k: "listen", say: "soixante-dix-sept", acc: ["77", "soixante-dix-sept"], num: true, dict: true, ask: "Escucha y escribe el número (en cifras o en letras).", pista: "Espera el final.", why: "Era <b>soixante-dix-sept</b> = 77." },
    { fase: "guiada", c: ["b4nb-70-99"], k: "listen", say: "quatre-vingt-dix-neuf", acc: ["99", "quatre-vingt-dix-neuf"], num: true, dict: true, ask: "Escucha y escribe el número (en cifras o en letras).", pista: "4 × 20 + 19.", why: "Era <b>quatre-vingt-dix-neuf</b> = 99." },
    { fase: "indep", c: ["b4nb-grands"], k: "listen", say: "soixante-neuf pour cent", acc: ["69", "69 %", "69%", "soixante-neuf pour cent"], num: true, dict: true, ask: "Escucha y escribe el porcentaje (en cifras o en letras).", why: "Era <b>soixante-neuf pour cent</b> = 69 %." },
    { fase: "indep", c: ["b4nb-grands"], k: "listen", say: "mille neuf cent cinquante-cinq", acc: ["1955", "mille neuf cent cinquante-cinq"], num: true, dict: true, ask: "Escucha y escribe el año (en cifras o en letras).", why: "Era <b>mille neuf cent cinquante-cinq</b> = 1955." },
    { fase: "indep", c: ["b4nb-grands"], k: "listen", say: "deux mille vingt-six", acc: ["2026", "deux mille vingt-six"], num: true, dict: true, ask: "Escucha y escribe el año (en cifras o en letras).", why: "Era <b>deux mille vingt-six</b> = 2026." },
    { fase: "aplica", c: ["b4nb-70-99"], k: "listen", say: "quatre-vingts", acc: ["80", "quatre-vingts"], num: true, dict: true, ask: "Escucha y escribe el número (en cifras o en letras).", why: "Era <b>quatre-vingts</b> = 80." },
    { fase: "aplica", c: ["b4nb-grands"], k: "listen", say: "trois virgule cinq", acc: ["3,5", "3.5", "trois virgule cinq"], num: true, dict: true, ask: "Escucha y escribe el número decimal (en cifras o en letras).", why: "Era <b>trois virgule cinq</b> = 3,5." },
    { fase: "aplica", c: ["b4nb-70-99"], k: "listen", say: "soixante et onze", acc: ["71", "soixante et onze"], num: true, dict: true, ask: "Escucha y escribe el número (en cifras o en letras).", why: "Era <b>soixante et onze</b> = 71." },
    { fase: "dominio", c: ["b4nb-70-99"], k: "choice", ask: "«quatre-vingt-quinze» es…", q: "Elige.", o: ["95", "85"], a: 0, why: "4 × 20 + 15." },
    { fase: "dominio", c: ["b4nb-70-99"], k: "sort", ask: "¿Entre 70 y 79 o entre 80 y 99?", q: "Clasifica.", cats: ["70-79", "80-99"], items: [["soixante-dix", 0], ["soixante et onze", 0], ["soixante-dix-sept", 0], ["quatre-vingts", 1], ["quatre-vingt-onze", 1], ["quatre-vingt-dix-neuf", 1]], why: "Familias." },
    { fase: "dominio", c: ["b4nb-grands"], k: "order", ask: "Ordena: 1990.", tokens: ["mille", "neuf cent", "quatre-vingt-dix"], why: "<b>mille neuf cent quatre-vingt-dix</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 22. Dates, heures, détails ── */
E["dates"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Dates, heures, détails",
  objetivo: {
    que: "Vas a anotar en cifras, mientras escuchas, las fechas, las horas, los porcentajes y las proporciones: puntos fáciles en la comprensión oral.",
    corto: "le mercredi trois septembre · à quatorze heures quinze · un étudiant sur trois",
    podras: ["Entender y escribir las fechas sin «de»: le mercredi 3 septembre.", "Entender las horas: onze heures dix = 11 h 10; midi et demi = 12 h 30.", "Entender las proporciones y las evoluciones: un sur trois, plus de la moitié, trente pour cent, de 77 % à 69 % (contre…)."],
    iconos: ["ic2/reloj-arena", "ic2/audifonos", "ic2/nota"],
    previos: ["La fecha (A1, lección 19), la hora oficial (A1, lección 20) y la radio (B2.1, lección 35)."],
    capacidad: "Ahora no se te escapa ni una cifra en la comprensión oral."
  },
  requiere: R("da-forma", "ho2-officielle", "b1ch-fraction", "b3ra-strategie", "b4nb-grands"), recupera: ["da-forma"],
  conceptos: {
    "b4dt-dates": { n: "fecha sin «de»: le mercredi trois septembre (mercredi 3 septembre); hora: onze heures dix = 11 h 10, quatorze heures quinze = 14 h 15, midi et demi = 12 h 30", b: "gr" },
    "b4dt-details": { n: "proporciones y evoluciones: un sur trois, plus de la moitié, trente pour cent d'entre eux, de deux à trois pour cent (2 à 3 %), entre vingt-cinq et trente-cinq ans (25-35 ans); «contre» introduce el valor anterior: 69 % contre 77 % = de 77 % à 69 %", b: "gr" }
  },
  video: {
    titulo: "Anotar en cifras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "11 h 10", seg: [
        { es: "Hola. Fechas y horas: puntos fáciles si anotas en cifras." } ] },
      { v: "frase", filas: [
          { nota: "fecha", p: 1, partes: [["le mercredi trois septembre", "-", 1]] },
          { nota: "hora", p: 2, partes: [["à quatorze heures quinze", "-", 2]] },
          { nota: "proporción", p: 3, partes: [["un étudiant sur trois", "-", 3]] } ], seg: [
        { fr: "le mercredi trois septembre", p: 1 }, { fr: "à quatorze heures quinze", p: 2 }, { fr: "un étudiant sur trois", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«69 %… contre 77 % l'année précédente.» ¿Qué evolución es?", o: ["de 77 % à 69 %", "de 69 % à 77 %"], a: 0,
        bien: "¡Sí! Contre = valor anterior.", mal: "Contre introduce el valor antiguo.",
        seg: [ { es: "Pausa. ¿Qué dice contre?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mercredi 3 septembre", "11 h 10", "un sur trois", "30 %", "contre", "25-35 ans"], seg: [
        { es: "Anota siempre en cifras.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La escucha del DELF", img: "bg-biblioteca", yo: "camila",
    escena: "Camila hace un ejercicio de comprensión oral con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["sofia", "Écoutez : « L'épreuve écrite a lieu le mercredi trois septembre. Rendez-vous samedi à onze heures dix. »", "Escuchen: «La prueba escrita tiene lugar el miércoles 3 de septiembre. Cita el sábado a las 11:10.»"],
      ["camila", "J'ai noté : mercredi 3 septembre, 11 h 10. En chiffres, c'est plus rapide.", "Anoté: miércoles 3 de septiembre, 11:10. En cifras es más rápido."],
      ["sofia", "« Soixante-neuf pour cent des salariés se disent heureux, contre soixante-dix-sept pour cent l'année précédente. »", "«El 69 % de los asalariados se dicen felices, frente al 77 % del año anterior.»"],
      ["camila", "Donc de 77 % à 69 % : une baisse ! « Contre » introduit l'ancienne valeur. Et le stress touche trente pour cent d'entre eux.", "¡Entonces del 77 % al 69 %: una bajada! «Contre» introduce el valor antiguo. Y el estrés afecta al 30 % de ellos."]
    ],
    fijate: "Fíjate: le mercredi trois septembre (sin «de»), onze heures dix = 11 h 10, contre = valor anterior (de 77 % à 69 %), trente pour cent d'entre eux = 30 %."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fechas, horas y proporciones",
      idea: "Fecha sin «de»: le mercredi trois septembre → mercredi 3 septembre. Hora: onze heures dix = 11 h 10; quatorze heures quinze = 14 h 15; midi et demi = 12 h 30. Proporciones: un sur trois (uno de cada tres), plus de la moitié, trente pour cent d'entre eux, de deux à trois pour cent (2 à 3 %), entre vingt-cinq et trente-cinq ans (25-35 ans). Evolución: «contre» introduce el valor anterior: 69 % contre 77 % l'année précédente = de 77 % à 69 % (una bajada). Anota siempre en cifras durante la escucha.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Cifra", "Tipo"], [
        ["L'épreuve écrite a lieu le mercredi trois septembre.", "mercredi 3 septembre", "fecha"],
        ["Rendez-vous samedi à onze heures dix, salle RG deux cent quatre.", "11 h 10", "hora"],
        ["Le stress touche trente pour cent d'entre eux.", "30 %", "porcentaje"],
        ["Soixante-neuf pour cent des salariés se disent heureux, contre soixante-dix-sept pour cent l'année précédente.", "de 77 % à 69 %", "evolución"],
        ["Chez Alcatel, le télétravail concerne vingt-cinq pour cent des effectifs.", "25 %", "porcentaje"],
        ["Deux à trois pour cent des Français refusent d'avoir la télévision chez eux.", "2 à 3 %", "intervalo"],
        ["Les plus jeunes réfractaires ont entre vingt-cinq et trente-cinq ans.", "25-35 ans", "edad"],
        ["un étudiant sur trois · plus de la moitié", "1 de cada 3 · más del 50 %", "proporción"],
        ["à quatorze heures quinze · midi et demi", "14 h 15 · 12 h 30", "hora"]
      ]],
      ej: [["le mercredi trois septembre", "el miércoles 3 de septiembre"], ["à quatorze heures quinze", "a las 14:15"], ["un étudiant sur trois", "uno de cada tres estudiantes"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le trois de septembre", "le trois septembre", "Sin «de» en la fecha."], ["69 % contre 77 % = de 69 % à 77 %", "= de 77 % à 69 %", "Contre introduce el valor anterior."], ["Anotar en letras durante la escucha", "Anotar en cifras", "Más rápido y sin errores."]] }
  ],
  ejemplos: [
    { sit: "«L'épreuve écrite a lieu le mercredi trois septembre.» ¿Qué fecha?", resp: "mercredi 3 septembre", pasos: ["Día + número + mes."], porque: "Fecha." },
    { sit: "«… samedi à onze heures dix.» ¿A qué hora?", resp: "11 h 10", pasos: ["Primero la hora."], porque: "Hora." },
    { sit: "«69 %… contre 77 %…» ¿Qué evolución?", resp: "de 77 % à 69 %", pasos: ["Contre = antes."], porque: "Evolución." }
  ],
  comprueba: [
    { q: "En las fechas francesas…", o: ["no se pone «de»", "se pone «de»"], a: 0, b: "gr", porque: "le 3 septembre." },
    { q: "«Onze heures dix» es…", o: ["11 h 10", "10 h 11"], a: 0, b: "gr", porque: "Hora + minutos." },
    { q: "«Contre» introduce…", o: ["el valor anterior", "el valor nuevo"], a: 0, b: "gr", porque: "Comparación." }
  ],
  practica: [
    { fase: "guiada", c: ["b4dt-dates"], k: "choice", say: "L'épreuve écrite a lieu le mercredi trois septembre.", ask: "Escucha. ¿Qué fecha oíste?", q: "Elige.", o: ["mercredi 3 septembre", "mardi 13 septembre"], a: 0, pista: "Día, número, mes.", why: "<b>mercredi 3 septembre</b>." },
    { fase: "guiada", c: ["b4dt-dates"], k: "choice", say: "Rendez-vous samedi à onze heures dix, salle RG deux cent quatre.", ask: "Escucha. ¿A qué hora es la cita?", q: "Elige.", o: ["11 h 10", "10 h 11"], a: 0, pista: "Primero la hora.", why: "<b>11 h 10</b>." },
    { fase: "guiada", c: ["b4dt-details"], k: "listen", say: "Le stress touche trente pour cent d'entre eux.", acc: ["Le stress touche trente pour cent d'entre eux.", "Le stress touche 30 % d'entre eux.", "Le stress touche 30% d'entre eux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", pista: "Puedes escribir el número en cifras.", why: "Era <b>Le stress touche trente pour cent d'entre eux.</b>" },
    { fase: "indep", c: ["b4dt-details"], k: "choice", say: "Soixante-neuf pour cent des salariés se disent heureux, contre soixante-dix-sept pour cent l'année précédente.", ask: "Escucha. ¿Qué evolución oíste?", q: "Elige.", o: ["de 77 % à 69 %", "de 69 % à 77 %"], a: 0, why: "Contre = antes." },
    { fase: "indep", c: ["b4dt-details"], k: "choice", say: "Chez Alcatel, le télétravail concerne vingt-cinq pour cent des effectifs.", ask: "Escucha. ¿Qué proporción teletrabaja?", q: "Elige.", o: ["25 %", "35 %"], a: 0, why: "<b>25 %</b>." },
    { fase: "indep", c: ["b4dt-details"], k: "choice", say: "Deux à trois pour cent des Français refusent d'avoir la télévision chez eux.", ask: "Escucha. ¿Qué proporción rechaza la tele?", q: "Elige.", o: ["2 à 3 %", "12 à 13 %"], a: 0, why: "<b>2 à 3 %</b>." },
    { fase: "aplica", c: ["b4dt-details"], k: "choice", say: "Les plus jeunes réfractaires ont entre vingt-cinq et trente-cinq ans.", ask: "Escucha. ¿Qué edad tienen los más jóvenes?", q: "Elige.", o: ["25-35 ans", "25-65 ans"], a: 0, why: "<b>25-35 ans</b>." },
    { fase: "aplica", c: ["b4dt-dates", "b4dt-details"], k: "match", ask: "Une cada expresión con su cifra.", q: "Francés → cifra", pairs: [["onze heures dix", "11 h 10"], ["quatorze heures quinze", "14 h 15"], ["midi et demi", "12 h 30"], ["un sur trois", "1 de cada 3"]], why: "Cifras." },
    { fase: "aplica", c: ["b4dt-dates"], k: "spot", ask: "Encuentra el error.", s: "L'examen a lieu le [trois de] septembre .", fix: "trois", why: "Sin «de»: <b>le trois septembre</b>." },
    { fase: "dominio", c: ["b4dt-dates"], k: "order", ask: "Ordena la fecha.", tokens: ["le mercredi", "trois", "septembre"], why: "<b>le mercredi trois septembre</b>" },
    { fase: "dominio", c: ["b4dt-details"], k: "choice", ask: "«Contre» introduce…", q: "Elige.", o: ["el valor anterior", "el valor nuevo"], a: 0, es: true, why: "Antes." },
    { fase: "dominio", c: ["b4dt-dates", "b4dt-details"], k: "listen", say: "L'épreuve écrite a lieu le mercredi trois septembre.", acc: ["L'épreuve écrite a lieu le mercredi trois septembre.", "L'épreuve écrite a lieu le mercredi 3 septembre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'épreuve écrite a lieu le mercredi trois septembre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Alcatel", "RG", "DELF"], previo: [] }
};

/* ================================ III · Projet ================================ */
/* ── 23. Exposé : Le travail, c'est le bonheur ? ── */
E["p-expose"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Exposé : Le travail, c'est le bonheur ?",
  objetivo: {
    que: "Vas a preparar un exposé completo del DELF B2 a partir de un barómetro sobre la felicidad en el trabajo: de la escucha a la conclusión.",
    corto: "Selon ce baromètre, 69 % des salariés se disent heureux. · Il n'en demeure pas moins que le stress touche 30 % d'entre eux.",
    podras: ["Anotar las cifras mientras escuchas y presentar el documento (Le document proposé aborde…).", "Analizar y matizar las cifras (Il n'en demeure pas moins que…, toutefois) y compararlas con Colombia.", "Hablar al jurado de vous y concluir con síntesis, respuesta y apertura."],
    iconos: ["ic2/microfono", "ic2/medalla", "ic2/moneda"],
    previos: ["El plan del exposé (lección 17), concluir (lección 18), interactuar con el jurado (lección 19) y las fechas y cifras (lección 22)."],
    capacidad: "Ahora haces un exposé completo del DELF B2 de principio a fin."
  },
  requiere: R("b4pn-etapes", "b4pn-formules", "b4cc-gestes", "b4ol-vous", "b4cn-conceder", "b4dt-details"), recupera: ["b4pn-etapes"],
  conceptos: {
    "b4px-analyse": { n: "presentar y analizar: Le document proposé aborde la question du bonheur au travail à partir de données chiffrées; Selon le baromètre, 69 % des salariés se disent heureux; matizar: Il n'en demeure pas moins que…; les relations avec les collègues arrivent en tête", b: "gr" },
    "b4px-conclure": { n: "comparar (En Colombie, par exemple, …), hablar al jurado con vous (On constate que…, no «Tu vois»), concluir (En définitive, …) y abrir (Reste à savoir si le télétravail renforcera ou fragilisera ces relations)", b: "gr" }
  },
  video: {
    titulo: "¿El trabajo es la felicidad?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "69 %", seg: [
        { es: "Hola. Un exposé completo, paso a paso." } ] },
      { v: "frase", filas: [
          { nota: "cifra", p: 1, partes: [["Selon ce baromètre, 69 % des salariés se disent heureux.", "-", 1]] },
          { nota: "matiz", p: 2, partes: [["Il n'en demeure pas moins que le stress touche 30 % d'entre eux.", "-", 2]] },
          { nota: "comparar", p: 3, partes: [["En Colombie, par exemple, …", "-", 3]] } ], seg: [
        { fr: "Selon ce baromètre, 69 % des salariés se disent heureux.", p: 1 }, { fr: "Il n'en demeure pas moins que le stress touche 30 % d'entre eux.", p: 2 }, { fr: "En Colombie, par exemple…", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo presentas el documento?", o: ["Le document proposé aborde la question du bonheur au travail à partir de données chiffrées.", "Le document, il parle du travail."], a: 0,
        bien: "¡Sí! Sin repetir el sujeto.", mal: "Nada de «le document, il…».",
        seg: [ { es: "Pausa. Le document aborde…" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Le document proposé aborde", "Selon le baromètre", "Il n'en demeure pas moins que", "En Colombie", "En définitive", "Reste à savoir si"], seg: [
        { es: "Escuchar, presentar, matizar, comparar y concluir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El exposé final", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta su exposé ante Madame Sofia, que hace de jurado.",
    pj: PJ,
    lineas: [
      ["camila", "Le document proposé aborde la question du bonheur au travail à partir de données chiffrées. Selon le baromètre, soixante-neuf pour cent des salariés se disent heureux au travail.", "El documento propuesto trata la cuestión de la felicidad en el trabajo a partir de datos numéricos. Según el barómetro, el 69 % de los asalariados se dicen felices en el trabajo."],
      ["camila", "Les relations avec les collègues arrivent en tête des facteurs de satisfaction. Il n'en demeure pas moins que ce tableau doit être nuancé : le stress touche 30 % des salariés.", "Las relaciones con los compañeros encabezan los factores de satisfacción. No es menos cierto que este panorama debe matizarse: el estrés afecta al 30 % de los asalariados."],
      ["sofia", "Et dans votre pays ?", "¿Y en su país?"],
      ["camila", "En Colombie, par exemple, on constate que la famille compte beaucoup. En définitive, le bonheur au travail existe bel et bien, mais il dépend de la qualité des relations humaines. Reste à savoir si le télétravail renforcera ou fragilisera ces relations.", "En Colombia, por ejemplo, se constata que la familia cuenta mucho. En definitiva, la felicidad en el trabajo existe realmente, pero depende de la calidad de las relaciones humanas. Queda por saber si el teletrabajo reforzará o debilitará esas relaciones."]
    ],
    fijate: "Fíjate: Le document proposé aborde, Selon le baromètre, arrivent en tête, Il n'en demeure pas moins que, En Colombie, par exemple, on constate que, En définitive, Reste à savoir si."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Del barómetro a la conclusión",
      idea: "1. Escucha y anota las cifras en números (69 %, 30 %). 2. Presenta el documento sin repetir el sujeto: Le document proposé aborde la question du bonheur au travail à partir de données chiffrées (nunca «Le document, il parle de…»). 3. Analiza: Selon le baromètre, 69 % des salariés se disent heureux; les relations avec les collègues arrivent en tête des facteurs de satisfaction. 4. Matiza: Il n'en demeure pas moins que ce tableau doit être nuancé : le stress touche 30 % des salariés. 5. Compara con tu país: En Colombie, par exemple, … 6. Dirígete al jurado con vous o en impersonal (On constate que…, Vous voyez…, no «Tu vois»). 7. Concluye y abre: En définitive, … Reste à savoir si…",
      intro: "Toca cada paso.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Selon le baromètre, soixante-neuf pour cent des salariés se disent heureux au travail.", "Según el barómetro, el 69 % de los asalariados se dicen felices en el trabajo.", "cifra"],
        ["les relations avec les collègues", "las relaciones con los compañeros", "factor principal"],
        ["Le document proposé aborde la question du bonheur au travail à partir de données chiffrées.", "El documento propuesto trata la felicidad en el trabajo a partir de datos numéricos.", "presentar"],
        ["Il n'en demeure pas moins que ce tableau doit être nuancé : le stress touche 30 % des salariés. · Il n'en demeure pas moins que", "No es menos cierto que este panorama debe matizarse: el estrés afecta al 30 %.", "matizar"],
        ["Vous voyez · On constate que", "Ve usted · Se constata que", "al jurado"],
        ["En définitive, le bonheur au travail existe bel et bien, mais il dépend de la qualité des relations humaines.", "En definitiva, la felicidad en el trabajo existe realmente, pero depende de la calidad de las relaciones humanas.", "concluir"],
        ["Reste à savoir si le télétravail renforcera ou fragilisera ces relations.", "Queda por saber si el teletrabajo reforzará o debilitará esas relaciones.", "abrir"],
        ["En Colombie, par exemple, …", "En Colombia, por ejemplo, …", "comparar"]
      ]],
      ej: [["Selon ce baromètre, 69 % des salariés se disent heureux.", "Según este barómetro, el 69 % de los asalariados se dicen felices."], ["Il n'en demeure pas moins que le stress touche 30 % d'entre eux.", "No es menos cierto que el estrés afecta al 30 %."], ["En Colombie, par exemple, …", "En Colombia, por ejemplo, …"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le document, il parle de…", "Le document aborde…", "Sin repetir el sujeto con un pronombre."], ["Tu vois, les salariés…", "On constate que les salariés…", "Al jurado: vous o impersonal."], ["Terminar sin apertura", "Reste à savoir si…", "Conclusión completa."]] }
  ],
  ejemplos: [
    { sit: "¿Qué factor encabeza la satisfacción según el barómetro?", resp: "les relations avec les collègues", pasos: ["arrivent en tête."], porque: "Análisis." },
    { sit: "Para matizar el panorama:", resp: "Il n'en demeure pas moins que", pasos: ["No es menos cierto que."], porque: "Matiz." },
    { sit: "Frase de apertura para terminar:", resp: "Reste à savoir si le télétravail renforcera ou fragilisera ces relations.", pasos: ["Nueva pregunta."], porque: "Abrir." }
  ],
  comprueba: [
    { q: "«Le document, il parle de…» es…", o: ["un error de registro", "correcto"], a: 0, b: "gr", porque: "Le document aborde." },
    { q: "«Il n'en demeure pas moins que» sirve para…", o: ["matizar", "presentar"], a: 0, b: "gr", porque: "Concesión." },
    { q: "Con el jurado se usa…", o: ["vous o lo impersonal", "tu"], a: 0, b: "gr", porque: "Examen." }
  ],
  practica: [
    { fase: "guiada", c: ["b4px-analyse"], k: "listen", say: "Selon le baromètre, soixante-neuf pour cent des salariés se disent heureux au travail.", acc: ["Selon le baromètre, soixante-neuf pour cent des salariés se disent heureux au travail.", "Selon le baromètre, 69 % des salariés se disent heureux au travail.", "Selon le baromètre, 69% des salariés se disent heureux au travail."], num: false, dict: true, ask: "Escucha la frase y escríbela.", pista: "Puedes escribir el número en cifras.", why: "Era <b>Selon le baromètre, soixante-neuf pour cent des salariés se disent heureux au travail.</b>" },
    { fase: "guiada", c: ["b4px-analyse"], k: "choice", say: "Les collègues arrivent en tête des facteurs de satisfaction.", ask: "Escucha. ¿Qué factor encabeza la satisfacción?", q: "Elige.", o: ["les relations avec les collègues", "le salaire"], a: 0, pista: "Collègues.", why: "Los compañeros." },
    { fase: "guiada", c: ["b4px-analyse"], k: "choice", ask: "¿Cuál es la mejor frase para presentar el documento?", q: "Elige.", o: ["Le document proposé aborde la question du bonheur au travail à partir de données chiffrées.", "Le document, il parle du travail."], a: 0, pista: "Sin repetir el sujeto.", why: "Presentar." },
    { fase: "indep", c: ["b4px-analyse"], k: "choice", ask: "Para matizar:", q: "«___ ce tableau doit être nuancé : le stress touche 30 % des salariés.»", o: ["Il n'en demeure pas moins que", "Voilà pourquoi"], a: 0, why: "Matiz." },
    { fase: "indep", c: ["b4px-conclure"], k: "spot", ask: "Encuentra el error de registro.", s: "[Tu vois] , les salariés sont moins heureux qu'avant .", fix: "On constate que", why: "<b>On constate que</b> / Vous voyez." },
    { fase: "indep", c: ["b4px-conclure"], k: "choice", ask: "Frase de apertura para terminar el exposé:", q: "Elige.", o: ["Reste à savoir si le télétravail renforcera ou fragilisera ces relations.", "Voilà, c'est tout."], a: 0, why: "Apertura." },
    { fase: "aplica", c: ["b4px-conclure"], k: "order", ask: "Ordena la conclusión.", tokens: ["En définitive,", "le bonheur au travail existe bel et bien,", "mais il dépend de la qualité des relations humaines."], why: "<b>En définitive, le bonheur au travail existe bel et bien, mais il dépend de la qualité des relations humaines.</b>" },
    { fase: "aplica", c: ["b4px-analyse", "b4px-conclure"], k: "match", ask: "Une cada fórmula con su paso.", q: "Fórmula → paso", pairs: [["Le document proposé aborde…", "presentar"], ["Il n'en demeure pas moins que…", "matizar"], ["En Colombie, par exemple, …", "comparar"], ["Reste à savoir si…", "abrir"]], why: "Pasos." },
    { fase: "aplica", c: ["b4px-conclure"], k: "sort", ask: "¿Adecuado para el jurado o no?", q: "Clasifica.", cats: ["Adecuado", "No adecuado"], items: [["On constate que…", 0], ["Vous voyez…", 0], ["Le document aborde…", 0], ["Tu vois…", 1], ["Le document, il parle de…", 1], ["Voilà, c'est tout.", 1]], why: "Registro." },
    { fase: "dominio", c: ["b4px-analyse"], k: "fill", ask: "«Según» (… le baromètre)", q: "___ le baromètre, 69 % des salariés se disent heureux.", acc: ["Selon", "selon"], why: "<b>Selon</b>." },
    { fase: "dominio", c: ["b4px-conclure"], k: "choice", ask: "Con el jurado se usa…", q: "Elige.", o: ["vous o lo impersonal", "tu"], a: 0, es: true, why: "Vous." },
    { fase: "dominio", c: ["b4px-analyse", "b4px-conclure"], k: "listen", say: "Il n'en demeure pas moins que le stress touche trente pour cent d'entre eux.", acc: ["Il n'en demeure pas moins que le stress touche trente pour cent d'entre eux.", "Il n'en demeure pas moins que le stress touche 30 % d'entre eux.", "Il n'en demeure pas moins que le stress touche 30% d'entre eux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il n'en demeure pas moins que le stress touche trente pour cent d'entre eux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Colombie", "DELF"], previo: [] }
};

/* ================================ B2.2·4 · Determinantes y construcciones ================================ */
/* ── 25. Du, de la, des… et de après la négation ── */
E["rem-partitifs"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Du, de la, des… et de après la négation",
  objetivo: {
    que: "Vas a poner siempre un determinante delante del nombre (donde el español no lo pone) y a cambiarlo por de después de una negación.",
    corto: "Tu veux de l'eau ? · Je n'ai pas de voiture. · J'aime le chocolat, alors j'achète du chocolat.",
    podras: ["Usar du, de la, de l', des para una cantidad indeterminada: Je mange du pain.", "Usar le, la, les con los verbos de gusto: J'aime le thé.", "Pasar a de / d' después de la negación (Je n'ai pas de frères), salvo con être (Ce n'est pas du sucre), y usar de sin artículo con las cantidades (beaucoup de monde)."],
    iconos: ["ic2/croissant", "ic2/cafe", "ic2/bolsa"],
    previos: ["Los partitivos (A1, lección 44), pas de (A1, lección 45) y los partitivos (A2, lección 6)."],
    capacidad: "Ahora no se te escapa ni un determinante en el francés escrito."
  },
  requiere: R("pa2-forma", "pa2-gusto", "pd-de", "pd-excep", "cq-de", "pt3-choix"), recupera: ["pd-de"],
  conceptos: {
    "b4pa-partitif": { n: "cantidad indeterminada: du, de la, de l', des (Je mange du pain, Tu veux de l'eau ?); gustos: le, la, les (J'aime le thé, Je déteste la viande); cantidad precisa: beaucoup de, un peu de, trop de, un kilo de (Il y a beaucoup de monde)", b: "gr" },
    "b4pa-negation": { n: "después de la negación: pas de / pas d' (Je n'ai pas de frères, Il ne boit pas de café, nous n'avons plus de pain); excepción con être: Ce n'est pas du sucre", b: "gr" }
  },
  video: {
    titulo: "Siempre un determinante", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/croissant", grande: "du pain", seg: [
        { es: "Hola. El francés casi nunca deja un nombre solo." } ] },
      { v: "frase", filas: [
          { nota: "partitivo", p: 1, partes: [["Tu veux de l'eau ?", "-", 1]] },
          { nota: "negación", p: 2, partes: [["Je n'ai pas de voiture.", "-", 2]] },
          { nota: "gusto / compra", p: 3, partes: [["J'aime le chocolat, alors j'achète du chocolat.", "-", 3]] } ], seg: [
        { fr: "Tu veux de l'eau ?", p: 1 }, { fr: "Je n'ai pas de voiture.", p: 2 }, { fr: "J'aime le chocolat, alors j'achète du chocolat.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No tengo hermanos.»", o: ["Je n'ai pas de frères.", "Je n'ai pas des frères."], a: 0,
        bien: "¡Sí! Negación: de.", mal: "Después de la negación: de.",
        seg: [ { es: "Pausa. Pas de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["du", "de la", "de l'", "des", "pas de", "beaucoup de"], seg: [
        { es: "Partitivo, negación y cantidad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la panadería", img: "bg-cafe", yo: "camila",
    escena: "Camila compra el desayuno en una panadería de Lyon.",
    pj: PJ,
    lineas: [
      ["camila", "Bonjour ! Je voudrais du pain, du fromage et un peu de beurre. Et de la confiture, s'il vous plaît.", "¡Buenos días! Quisiera pan, queso y un poco de mantequilla. Y mermelada, por favor."],
      ["vendeur", "Désolé, nous n'avons plus de pain aujourd'hui. Il y a beaucoup de monde ce matin !", "Lo siento, hoy ya no nos queda pan. ¡Hay mucha gente esta mañana!"],
      ["camila", "Ah… Alors des croissants. Et vous avez du jus d'orange ? — Ce n'est pas du jus d'orange, c'est du jus de pomme.", "Ah… Entonces cruasanes. ¿Y tiene zumo de naranja? — No es zumo de naranja, es zumo de manzana."],
      ["vendeur", "Vous voulez de l'eau aussi ? — Non merci, je ne bois pas d'eau gazeuse. J'aime le thé : je vais acheter du thé.", "¿Quiere agua también? — No, gracias, no bebo agua con gas. Me gusta el té: voy a comprar té."]
    ],
    fijate: "Fíjate: du pain, du fromage, de la confiture (cantidad indeterminada); un peu de beurre, beaucoup de monde (cantidad); plus de pain, pas d'eau (negación); ce n'est pas du jus (être); j'aime le thé (gusto)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Artículo partitivo y negación",
      idea: "El francés necesita un determinante donde el español no lo pone. Cantidad indeterminada: du (masculino), de la (femenino), de l' (delante de vocal), des (plural): Je mange du pain, Tu veux de l'eau ?, On achète des pommes. Con los verbos de gusto (aimer, adorer, détester, préférer) va el artículo definido: J'aime le thé. Después de una negación, du / de la / des / un / une → de / d': Je n'ai pas de frères, Il ne boit pas de café, Nous n'avons plus de pain. Excepción con être: Ce n'est pas du vin, c'est du jus. Con una cantidad precisa, de sin artículo: beaucoup de monde, un peu de beurre, un kilo de pommes.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Je mange du pain.", "Como pan.", "partitivo"],
        ["Je n'ai pas de frères.", "No tengo hermanos.", "negación"],
        ["J'aime le thé.", "Me gusta el té.", "gusto"],
        ["Il y a beaucoup de monde ici. · de", "Hay mucha gente aquí.", "cantidad"],
        ["Je voudrais de la confiture, s'il vous plaît. · de la", "Quisiera mermelada, por favor.", "partitivo"],
        ["J'ai des amis. = Je n'ai pas d'amis. · Il boit du café. = Il ne boit pas de café. · On a de la chance. = On n'a pas de chance. · C'est du sucre. = Ce n'est pas du sucre.", "afirmativa → negativa", "negación"],
        ["Je bois ___ lait. · Il mange ___ viande. · On achète ___ pommes. · Tu veux ___ eau ?", "bebo leche · come carne · compramos manzanas · ¿quieres agua?", "du / de la / des"],
        ["J'adore ___ lait. · Je déteste ___ viande. · Je préfère ___ pommes vertes. · J'aime ___ eau pétillante.", "me encanta la leche · odio la carne · prefiero las manzanas verdes · me gusta el agua con gas", "le / la / les"],
        ["Désolé, nous n'avons plus de pain aujourd'hui.", "Lo siento, hoy ya no tenemos pan.", "negación"],
        ["Il n'y a pas de lait", "No hay leche", "negación"],
        ["Je voudrais du pain, du fromage et un peu de beurre.", "Quisiera pan, queso y un poco de mantequilla.", "partitivo + cantidad"]
      ]],
      ej: [["Tu veux de l'eau ?", "¿Quieres agua?"], ["Je n'ai pas de voiture.", "No tengo coche."], ["J'aime le chocolat, alors j'achète du chocolat.", "Me gusta el chocolate, así que compro chocolate."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je bois eau.", "Je bois de l'eau.", "Siempre un determinante."], ["Je ne bois pas de l'eau.", "Je ne bois pas d'eau.", "Tras negación, de."], ["Il y a beaucoup du monde.", "Il y a beaucoup de monde.", "Cantidad + de."]] }
  ],
  ejemplos: [
    { sit: "«Como pan.»", resp: "Je mange du pain.", pasos: ["Cantidad indeterminada."], porque: "du." },
    { sit: "«No tengo hermanos.»", resp: "Je n'ai pas de frères.", pasos: ["Negación → de."], porque: "pas de." },
    { sit: "«Me gusta el té.»", resp: "J'aime le thé.", pasos: ["Gusto → le."], porque: "Definido." }
  ],
  comprueba: [
    { q: "Después de «ne… pas», «des» se vuelve…", o: ["de", "des"], a: 0, b: "gr", porque: "pas de." },
    { q: "Con «aimer» se usa…", o: ["le / la / les", "du / de la"], a: 0, b: "gr", porque: "Gusto." },
    { q: "«Ce n'est pas ___ sucre» (con être)", o: ["du", "de"], a: 0, b: "gr", porque: "Excepción." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pa-partitif"], k: "sort", ask: "¿du / de la / des o le / la / les?", q: "Clasifica.", cats: ["du / de la / des", "le / la / les"], items: [["Je bois ___ lait.", 0], ["Il mange ___ viande.", 0], ["On achète ___ pommes.", 0], ["Tu veux ___ eau ?", 0], ["J'adore ___ lait.", 1], ["Je déteste ___ viande.", 1], ["Je préfère ___ pommes vertes.", 1], ["J'aime ___ eau pétillante.", 1]], pista: "¿Cantidad o gusto?", why: "Partitivo o definido." },
    { fase: "guiada", c: ["b4pa-partitif"], k: "choice", ask: "«Como pan.»", q: "Elige.", o: ["Je mange du pain.", "Je mange pain."], a: 0, pista: "Determinante.", why: "<b>du</b>." },
    { fase: "guiada", c: ["b4pa-negation"], k: "choice", ask: "«No tengo hermanos.»", q: "Elige.", o: ["Je n'ai pas de frères.", "Je n'ai pas des frères."], a: 0, pista: "Negación.", why: "<b>de</b>." },
    { fase: "indep", c: ["b4pa-partitif"], k: "choice", ask: "«Me gusta el té.»", q: "Elige.", o: ["J'aime le thé.", "J'aime du thé."], a: 0, why: "<b>le</b>." },
    { fase: "indep", c: ["b4pa-partitif"], k: "fill", ask: "Cantidad: beaucoup …", q: "Il y a beaucoup ___ monde ici.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["b4pa-partitif"], k: "fill", ask: "Partitivo femenino.", q: "Je voudrais ___ confiture, s'il vous plaît.", acc: ["de la"], why: "<b>de la</b>." },
    { fase: "aplica", c: ["b4pa-negation"], k: "match", ask: "Une la afirmativa con su negativa.", q: "Afirmativa → negativa", pairs: [["J'ai des amis.", "Je n'ai pas d'amis."], ["Il boit du café.", "Il ne boit pas de café."], ["On a de la chance.", "On n'a pas de chance."], ["C'est du sucre.", "Ce n'est pas du sucre."]], why: "Negación." },
    { fase: "aplica", c: ["b4pa-negation"], k: "spot", ask: "Encuentra el error.", s: "Désolé , nous n'avons plus [du] pain aujourd'hui .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["b4pa-negation"], k: "choice", ask: "Con être: «No es azúcar.»", q: "«Ce n'est pas ___ sucre.»", o: ["du", "de"], a: 0, why: "Excepción: <b>du</b>." },
    { fase: "dominio", c: ["b4pa-negation"], k: "order", ask: "Ordena: «No hay leche».", tokens: ["Il n'y a", "pas de", "lait"], why: "<b>Il n'y a pas de lait</b>" },
    { fase: "dominio", c: ["b4pa-negation"], k: "choice", ask: "Después de «ne… pas», «des» se vuelve…", q: "Elige.", o: ["de", "des"], a: 0, why: "<b>de</b>." },
    { fase: "dominio", c: ["b4pa-partitif", "b4pa-negation"], k: "listen", say: "Je voudrais du pain, du fromage et un peu de beurre.", acc: ["Je voudrais du pain, du fromage et un peu de beurre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais du pain, du fromage et un peu de beurre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Lyon"], previo: [] }
};

/* ── 26. Son, sa, ses, leur, leurs : les possessifs ── */
E["rem-possessifs-leur"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Son, sa, ses, leur, leurs : les possessifs",
  objetivo: {
    que: "Vas a concordar el posesivo con el objeto poseído (no con el poseedor) y a usar leur / leurs con varios poseedores.",
    corto: "Marie a perdu son sac. · Les enfants aiment leur école. · Ils ont appelé leurs parents.",
    podras: ["Usar son, sa, ses según el objeto: son livre, sa maison (de él o de ella).", "Usar leur (un objeto) y leurs (varios objetos) con varios poseedores.", "Usar mon / ton / son delante de vocal o h muda (son école, mon amie) y votre / vos para «su» de usted."],
    iconos: ["ic2/amigos", "ic2/regalo", "ic2/libro"],
    previos: ["Los posesivos (A1, lección 9) y el género de los nombres (lección 1)."],
    capacidad: "Ahora el «su» del español ya no te confunde en francés."
  },
  requiere: R("po-sing", "po-plur", "po-concord", "b4gn-pieges"), recupera: ["po-concord"],
  conceptos: {
    "b4ps-un": { n: "un poseedor: son (objeto masculino o femenino con vocal: son sac, son école, son amie), sa (objeto femenino: sa sœur, sa maison), ses (plural); concuerda con el objeto, no con el poseedor; «su» de usted: votre / vos", b: "gr" },
    "b4ps-plusieurs": { n: "varios poseedores: leur + un objeto (Les enfants aiment leur école; Mes voisins vendent leur maison), leurs + varios objetos (Ils ont appelé leurs parents; les élèves et leurs livres)", b: "gr" }
  },
  video: {
    titulo: "Son, sa, leur, leurs", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "leurs", seg: [
        { es: "Hola. En francés, el posesivo mira al objeto." } ] },
      { v: "frase", filas: [
          { nota: "un poseedor", p: 1, partes: [["Marie a perdu son sac.", "-", 1]] },
          { nota: "varios · un objeto", p: 2, partes: [["Les enfants aiment leur école.", "-", 2]] },
          { nota: "varios · varios", p: 3, partes: [["Ils ont appelé leurs parents.", "-", 3]] } ], seg: [
        { fr: "Marie a perdu son sac.", p: 1 }, { fr: "Les enfants aiment leur école.", p: 2 }, { fr: "Ils ont appelé leurs parents.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«su escuela» (de él)", o: ["son école", "sa école"], a: 0,
        bien: "¡Sí! Delante de vocal: son.", mal: "Delante de vocal: son.",
        seg: [ { es: "Pausa. Son + vocal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["son", "sa", "ses", "leur", "leurs", "vos"], seg: [
        { es: "Uno o varios poseedores, uno o varios objetos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los vecinos se mudan", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo comentan la mudanza de sus vecinos.",
    pj: PJ,
    lineas: [
      ["hugo", "Mes voisins vendent leur maison. Ils ont déjà emballé leurs affaires.", "Mis vecinos venden su casa. Ya han embalado sus cosas."],
      ["camila", "Et leurs enfants ? — Ils aiment leur école, ils sont tristes. Julie est partie en vacances avec son ami Paul.", "¿Y sus hijos? — Les gusta su escuela, están tristes. Julie se fue de vacaciones con su amigo Paul."],
      ["hugo", "Son ami ? Elle a dit « sa amie » ! — Non, devant une voyelle, c'est son : son amie, son école.", "¿Su amigo? ¡Ella dijo «sa amie»! — No, delante de vocal es son: son amie, son école."],
      ["camila", "Et le voisin du dessus m'a donné ses clés. Monsieur, voici vos clés ! Les étudiants, eux, ont oublié leurs cahiers dans leur salle de classe.", "Y el vecino de arriba me dio sus llaves. ¡Señor, aquí tiene sus llaves! Los estudiantes, ellos, olvidaron sus cuadernos en su aula."]
    ],
    fijate: "Fíjate: leur maison, leur école (un objeto), leurs affaires, leurs enfants, leurs cahiers (varios), son ami, son amie, son école (vocal), ses clés (un poseedor, plural), vos clés (de usted)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Un poseedor o varios",
      idea: "El posesivo concuerda con el objeto poseído, no con el poseedor: son livre, sa maison (de él o de ella, da igual). Un poseedor: son (objeto masculino), sa (objeto femenino), ses (varios objetos). Delante de vocal o h muda, mon / ton / son también en femenino: son école, son amie. Varios poseedores: leur (un objeto: leur maison, leur école), leurs (varios objetos: leurs parents, leurs livres). «Su» de usted: votre (un objeto), vos (varios: Monsieur, voici vos clés).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["Pedro et sa sœur", "Pedro y su hermana", "sa"],
        ["les élèves et leurs livres", "los alumnos y sus libros", "leurs"],
        ["son école", "su escuela (de él)", "son + vocal"],
        ["Mes voisins vendent leur maison. · leur", "Mis vecinos venden su casa.", "leur"],
        ["Monsieur, voici vos clés. · vos", "Señor, aquí tiene sus llaves.", "vos"],
        ["un poseedor, un objeto masc. = son · un poseedor, un objeto fem. = sa · varios poseedores, un objeto = leur · varios poseedores, varios objetos = leurs", "reglas", "resumen"],
        ["Ils prennent ___ voiture. · Elles aiment ___ travail. · Ils ont perdu ___ chien. · Elles attendent ___ bus.", "Toman su coche · Les gusta su trabajo · Perdieron a su perro · Esperan su bus", "leur"],
        ["Ils invitent ___ amis. · Elles rangent ___ affaires. · Ils aident ___ enfants. · Elles lisent ___ messages.", "Invitan a sus amigos · Ordenan sus cosas · Ayudan a sus hijos · Leen sus mensajes", "leurs"],
        ["Julie est partie en vacances avec son ami Paul.", "Julie se fue de vacaciones con su amigo Paul.", "son"],
        ["Ils ont appelé leurs parents", "Llamaron a sus padres", "leurs"],
        ["Les étudiants ont oublié leurs cahiers dans leur salle de classe.", "Los estudiantes olvidaron sus cuadernos en su aula.", "leurs / leur"]
      ]],
      ej: [["Marie a perdu son sac.", "Marie perdió su bolso."], ["Les enfants aiment leur école.", "A los niños les gusta su escuela."], ["Ils ont appelé leurs parents.", "Llamaron a sus padres."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["sa amie", "son amie", "Delante de vocal: son."], ["Ils vendent sa maison. (la de ellos)", "Ils vendent leur maison.", "Varios poseedores: leur."], ["Ils ont appelé leur parents.", "Ils ont appelé leurs parents.", "Varios objetos: leurs."]] }
  ],
  ejemplos: [
    { sit: "«Pedro y su hermana»", resp: "Pedro et sa sœur", pasos: ["sœur: femenino."], porque: "sa." },
    { sit: "«Los alumnos y sus libros»", resp: "les élèves et leurs livres", pasos: ["Varios + varios."], porque: "leurs." },
    { sit: "«su escuela» (de él)", resp: "son école", pasos: ["Vocal."], porque: "son." }
  ],
  comprueba: [
    { q: "El posesivo concuerda con…", o: ["el objeto poseído", "el poseedor"], a: 0, b: "gr", porque: "son / sa." },
    { q: "Varios poseedores y un objeto:", o: ["leur", "leurs"], a: 0, b: "gr", porque: "leur maison." },
    { q: "«Sus llaves» (de usted)", o: ["vos clés", "ses clés"], a: 0, b: "gr", porque: "vous → vos." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ps-plusieurs"], k: "sort", ask: "¿leur o leurs?", q: "Clasifica.", cats: ["leur", "leurs"], items: [["Ils prennent ___ voiture.", 0], ["Elles aiment ___ travail.", 0], ["Ils ont perdu ___ chien.", 0], ["Elles attendent ___ bus.", 0], ["Ils invitent ___ amis.", 1], ["Elles rangent ___ affaires.", 1], ["Ils aident ___ enfants.", 1], ["Elles lisent ___ messages.", 1]], pista: "¿Un objeto o varios?", why: "leur / leurs." },
    { fase: "guiada", c: ["b4ps-un"], k: "choice", ask: "«Pedro y su hermana»", q: "Elige.", o: ["Pedro et sa sœur", "Pedro et son sœur"], a: 0, pista: "sœur: femenino.", why: "<b>sa</b>." },
    { fase: "guiada", c: ["b4ps-plusieurs"], k: "choice", ask: "«Los alumnos y sus libros»", q: "Elige.", o: ["les élèves et leurs livres", "les élèves et ses livres"], a: 0, pista: "Varios poseedores.", why: "<b>leurs</b>." },
    { fase: "indep", c: ["b4ps-un"], k: "choice", ask: "«su escuela» (de él)", q: "Elige.", o: ["son école", "sa école"], a: 0, why: "<b>son</b>." },
    { fase: "indep", c: ["b4ps-plusieurs"], k: "fill", ask: "Varios poseedores, un objeto.", q: "Mes voisins vendent ___ maison.", acc: ["leur"], why: "<b>leur</b>." },
    { fase: "indep", c: ["b4ps-un"], k: "fill", ask: "«sus» de usted (varios objetos).", q: "Monsieur, voici ___ clés.", acc: ["vos"], why: "<b>vos</b>." },
    { fase: "aplica", c: ["b4ps-un", "b4ps-plusieurs"], k: "match", ask: "Une cada caso con su posesivo.", q: "Caso → posesivo", pairs: [["un poseedor, un objeto masc.", "son"], ["un poseedor, un objeto fem.", "sa"], ["varios poseedores, un objeto", "leur"], ["varios poseedores, varios objetos", "leurs"]], why: "Reglas." },
    { fase: "aplica", c: ["b4ps-un"], k: "spot", ask: "Encuentra el error.", s: "Julie est partie en vacances avec [sa] ami Paul .", fix: "son", why: "<b>son</b>." },
    { fase: "aplica", c: ["b4ps-plusieurs"], k: "spot", ask: "Encuentra el error.", s: "Ils ont appelé [leur] parents hier soir .", fix: "leurs", why: "<b>leurs</b>." },
    { fase: "dominio", c: ["b4ps-plusieurs"], k: "order", ask: "Ordena: «Llamaron a sus padres».", tokens: ["Ils ont appelé", "leurs", "parents"], why: "<b>Ils ont appelé leurs parents</b>" },
    { fase: "dominio", c: ["b4ps-un"], k: "choice", ask: "El posesivo concuerda con…", q: "Elige.", o: ["el objeto poseído", "el poseedor"], a: 0, es: true, why: "El objeto." },
    { fase: "dominio", c: ["b4ps-un", "b4ps-plusieurs"], k: "listen", say: "Les étudiants ont oublié leurs cahiers dans leur salle de classe.", acc: ["Les étudiants ont oublié leurs cahiers dans leur salle de classe."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les étudiants ont oublié leurs cahiers dans leur salle de classe.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Pedro", "Julie", "Paul"], previo: [] }
};

/* ── 27. Verbes à construction différente de l'espagnol ── */
E["rem-regime-verbes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Verbes à construction différente de l'espagnol",
  objetivo: {
    que: "Vas a construir bien los verbos que rigen distinto en francés y en español: sin preposición, con à, con de, con dans.",
    corto: "J'attends le bus. · Je rêve de voyager. · Elle entre dans le bureau.",
    podras: ["Usar sin preposición aider, attendre, écouter, regarder, chercher, payer qqch (J'attends le bus, Je cherche mes clés).", "Usar con à téléphoner à, obéir à, répondre à, ressembler à, penser à; con de rêver de, se souvenir de, se moquer de, dépendre de.", "Usar entrer dans, se marier avec y demander à quelqu'un de faire algo."],
    iconos: ["ic2/engranaje", "ic2/pregunta", "ic2/lapiz"],
    previos: ["Verbo + preposición (lección 5) y los verbos con preposición (B1.1, lección 12)."],
    capacidad: "Ahora no calcas del español la construcción de los verbos."
  },
  requiere: R("b1vp-a", "b1vp-de", "b4vp-a", "b4vp-de"), recupera: ["b4vp-de"],
  conceptos: {
    "b4rv-sans": { n: "sin preposición en francés (con preposición en español): attendre le bus (esperar el), chercher mes clés (buscar), écouter la radio, regarder la télé, payer l'addition (pagar la cuenta), aider quelqu'un", b: "gr" },
    "b4rv-avec": { n: "con preposición distinta: rêver de (soñar con), entrer dans (entrar en), se marier avec, obéir à, répondre à, se moquer de, dépendre de; demander à quelqu'un de + infinitivo (Je lui ai demandé de venir)", b: "gr" }
  },
  video: {
    titulo: "Verbos que rigen distinto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "rêver de", seg: [
        { es: "Hola. El verbo francés no siempre lleva la preposición del español." } ] },
      { v: "frase", filas: [
          { nota: "sin preposición", p: 1, partes: [["J'attends le bus.", "-", 1]] },
          { nota: "de", p: 2, partes: [["Je rêve de voyager.", "-", 2]] },
          { nota: "dans", p: 3, partes: [["Elle entre dans le bureau.", "-", 3]] } ], seg: [
        { fr: "J'attends le bus.", p: 1 }, { fr: "Je rêve de voyager.", p: 2 }, { fr: "Elle entre dans le bureau.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Sueño con ir a París.»", o: ["Je rêve d'aller à Paris.", "Je rêve avec aller à Paris."], a: 0,
        bien: "¡Sí! Rêver de.", mal: "«Soñar con» = rêver de.",
        seg: [ { es: "Pausa. Rêver de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["attendre", "chercher", "payer l'addition", "rêver de", "entrer dans", "se marier avec"], seg: [
        { es: "Aprende el verbo con su construcción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cita en el cine", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo esperan a sus amigos en la puerta del cine.",
    pj: PJ,
    lineas: [
      ["camila", "Nous attendons nos amis devant le cinéma depuis dix minutes. Ils sont toujours en retard !", "Esperamos a nuestros amigos delante del cine desde hace diez minutos. ¡Siempre llegan tarde!"],
      ["hugo", "Je lui ai demandé de venir à l'heure… Ça dépend de la météo, il pleut !", "Le pedí que viniera a la hora… Depende del tiempo, ¡está lloviendo!"],
      ["camila", "Je cherche mes clés… Ah, les voilà. Tu sais, je rêve d'aller à Paris pour voir les vieux cinémas.", "Busco mis llaves… Ah, aquí están. ¿Sabes?, sueño con ir a París para ver los cines antiguos."],
      ["hugo", "Les voilà ! Paul entre dans le cinéma sans nous attendre… Bon, j'ai payé l'addition du café, on y va.", "¡Ahí están! Paul entra en el cine sin esperarnos… Bueno, pagué la cuenta del café, vamos."]
    ],
    fijate: "Fíjate: attendons nos amis, cherche mes clés, payé l'addition (sin preposición); rêve d'aller (de), entre dans (dans), dépend de, demandé de venir."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Construcciones que cambian",
      idea: "Sin preposición en francés (aunque el español diga «a» o «con»): attendre quelqu'un / le bus (esperar a), chercher (buscar), écouter, regarder, aider quelqu'un, payer qqch (payer l'addition = pagar la cuenta). Con à: téléphoner à, obéir à, répondre à, ressembler à, penser à (pensar en). Con de: rêver de (soñar con), se souvenir de, avoir besoin de, dépendre de, se moquer de. Con dans: entrer dans (entrar en). Con avec: se marier avec. Demander à quelqu'un de + infinitivo: Je demande à Paul de venir → Je lui ai demandé de venir.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["Je cherche mes clés.", "Busco mis llaves.", "sin preposición"],
        ["Je rêve d'aller à Paris.", "Sueño con ir a París.", "rêver de"],
        ["Il entre dans la salle.", "Entra en la sala.", "entrer dans"],
        ["Ça dépend de la météo. · de", "Depende del tiempo.", "dépendre de"],
        ["J'ai payé l'addition. · l'", "Pagué la cuenta.", "payer + COD"],
        ["écouter = + COD · obéir = à + nombre · se moquer = de + nombre · se marier = avec + nombre", "escuchar · obedecer · burlarse · casarse", "regímenes"],
        ["attendre le train · regarder la télé · payer le repas · écouter la radio", "esperar el tren · ver la tele · pagar la comida · escuchar la radio", "Sin preposición"],
        ["penser à l'examen · rêver de vacances · entrer dans le magasin · répondre à la question", "pensar en el examen · soñar con vacaciones · entrar en la tienda · responder a la pregunta", "Con preposición"],
        ["Il est entré dans la salle sans frapper. · dans", "Entró en la sala sin llamar.", "entrer dans"],
        ["Je lui ai demandé de venir", "Le pedí que viniera", "demander à… de"],
        ["Nous attendons nos amis devant le cinéma depuis dix minutes.", "Esperamos a nuestros amigos delante del cine desde hace diez minutos.", "attendre + COD"]
      ]],
      ej: [["J'attends le bus.", "Espero el autobús."], ["Je rêve de voyager.", "Sueño con viajar."], ["Elle entre dans le bureau.", "Entra en la oficina."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je rêve avec toi.", "Je rêve de toi.", "rêver de."], ["J'attends à mes amis.", "J'attends mes amis.", "attendre + COD."], ["Il entre en la salle.", "Il entre dans la salle.", "entrer dans."]] }
  ],
  ejemplos: [
    { sit: "«Busco mis llaves.»", resp: "Je cherche mes clés.", pasos: ["Sin preposición."], porque: "chercher." },
    { sit: "«Sueño con ir a París.»", resp: "Je rêve d'aller à Paris.", pasos: ["rêver de."], porque: "de." },
    { sit: "«Entra en la sala.»", resp: "Il entre dans la salle.", pasos: ["entrer dans."], porque: "dans." }
  ],
  comprueba: [
    { q: "«Esperar a alguien» se dice…", o: ["attendre quelqu'un", "attendre à quelqu'un"], a: 0, b: "gr", porque: "Sin preposición." },
    { q: "«Soñar con» se dice…", o: ["rêver de", "rêver avec"], a: 0, b: "gr", porque: "de." },
    { q: "«Casarse con» se dice…", o: ["se marier avec", "se marier à"], a: 0, b: "gr", porque: "avec." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rv-sans", "b4rv-avec"], k: "sort", ask: "¿Sin preposición o con preposición?", q: "Clasifica.", cats: ["Sin preposición", "Con preposición"], items: [["attendre le train", 0], ["regarder la télé", 0], ["payer le repas", 0], ["écouter la radio", 0], ["penser à l'examen", 1], ["rêver de vacances", 1], ["entrer dans le magasin", 1], ["répondre à la question", 1]], pista: "No pienses en el español.", why: "Regímenes." },
    { fase: "guiada", c: ["b4rv-sans"], k: "choice", ask: "«Busco mis llaves.»", q: "Elige.", o: ["Je cherche mes clés.", "Je cherche pour mes clés."], a: 0, pista: "Sin preposición.", why: "<b>chercher</b> + COD." },
    { fase: "guiada", c: ["b4rv-avec"], k: "choice", ask: "«Sueño con ir a París.»", q: "Elige.", o: ["Je rêve d'aller à Paris.", "Je rêve avec aller à Paris."], a: 0, pista: "rêver…", why: "<b>rêver de</b>." },
    { fase: "indep", c: ["b4rv-avec"], k: "choice", ask: "«Entra en la sala.»", q: "Elige.", o: ["Il entre dans la salle.", "Il entre en la salle."], a: 0, why: "<b>dans</b>." },
    { fase: "indep", c: ["b4rv-avec"], k: "fill", ask: "dépendre …", q: "Ça dépend ___ la météo.", acc: ["de"], why: "<b>de</b>." },
    { fase: "indep", c: ["b4rv-sans"], k: "fill", ask: "payer + COD (escribe l' si hace falta).", q: "J'ai payé ___ addition.", acc: ["l'"], why: "<b>l'</b>addition." },
    { fase: "aplica", c: ["b4rv-sans", "b4rv-avec"], k: "match", ask: "Une cada verbo con su construcción.", q: "Verbo → construcción", pairs: [["écouter", "+ COD"], ["obéir", "à + nombre"], ["se moquer", "de + nombre"], ["se marier", "avec + nombre"]], why: "Regímenes." },
    { fase: "aplica", c: ["b4rv-avec"], k: "spot", ask: "Encuentra el error.", s: "Il est entré [en] la salle sans frapper .", fix: "dans", why: "<b>dans</b>." },
    { fase: "aplica", c: ["b4rv-sans"], k: "spot", ask: "Encuentra el error.", s: "Nous [attendons à] nos amis devant le cinéma .", fix: "attendons", why: "attendre + COD: <b>attendons nos amis</b>." },
    { fase: "dominio", c: ["b4rv-avec"], k: "order", ask: "Ordena: «Le pedí que viniera».", tokens: ["Je lui", "ai demandé", "de venir"], why: "<b>Je lui ai demandé de venir</b>" },
    { fase: "dominio", c: ["b4rv-avec"], k: "choice", ask: "«Casarse con» se dice…", q: "Elige.", o: ["se marier avec", "se marier à"], a: 0, why: "<b>avec</b>." },
    { fase: "dominio", c: ["b4rv-sans", "b4rv-avec"], k: "listen", say: "Nous attendons nos amis devant le cinéma depuis dix minutes.", acc: ["Nous attendons nos amis devant le cinéma depuis dix minutes.", "Nous attendons nos amis devant le cinéma depuis 10 minutes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous attendons nos amis devant le cinéma depuis dix minutes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Paris"], previo: [] }
};

/* ── 28. Depuis, il y a, pendant, pour : les pièges du temps ── */
E["rem-depuis-pendant"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Depuis, il y a, pendant, pour : les pièges du temps",
  objetivo: {
    que: "Vas a distinguir los marcadores de tiempo que el español resuelve con «desde hace», «hace» y «durante».",
    corto: "J'habite à Madrid depuis cinq ans. · J'ai vu ce film il y a une semaine. · Il a plu pendant tout le week-end.",
    podras: ["Usar depuis + presente para algo que empezó y continúa: J'apprends le français depuis un an.", "Usar il y a + pasado para un momento terminado (Il est parti il y a une heure) y pendant para una duración cerrada.", "Usar pour para una duración prevista (Je pars pour un mois) y en para el tiempo necesario (en trois heures)."],
    iconos: ["ic2/reloj-arena", "ic2/engranaje", "ic2/globo"],
    previos: ["Depuis y pendant (A2, lección 27) y las expresiones de tiempo (B1.2, lección 4)."],
    capacidad: "Ahora sitúas cualquier acción en el tiempo sin dudar."
  },
  requiere: R("dp-depuis", "dp-pendant", "b2et-passe", "b2et-futur"), recupera: ["dp-depuis"],
  conceptos: {
    "b4dp-depuis": { n: "depuis + presente: algo que empezó y continúa (J'habite ici depuis 2020, Je le connais depuis dix ans); il y a + pasado: momento terminado (Il est arrivé il y a une heure); nunca «depuis il y a»", b: "gr" },
    "b4dp-pendant": { n: "pendant: duración delimitada (J'ai vécu à Paris pendant deux ans); pour: duración prevista (Je pars à Rome pour une semaine); en: tiempo necesario (J'ai fait le travail en trois heures)", b: "gr" }
  },
  video: {
    titulo: "Trampas del tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "depuis", seg: [
        { es: "Hola. ¿Sigue pasando o ya terminó?" } ] },
      { v: "frase", filas: [
          { nota: "continúa", p: 1, partes: [["J'habite à Madrid depuis cinq ans.", "-", 1]] },
          { nota: "momento pasado", p: 2, partes: [["J'ai vu ce film il y a une semaine.", "-", 2]] },
          { nota: "duración cerrada", p: 3, partes: [["Il a plu pendant tout le week-end.", "-", 3]] } ], seg: [
        { fr: "J'habite à Madrid depuis cinq ans.", p: 1 }, { fr: "J'ai vu ce film il y a une semaine.", p: 2 }, { fr: "Il a plu pendant tout le week-end.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estudio francés desde hace dos años.»", o: ["J'étudie le français depuis deux ans.", "J'étudie le français il y a deux ans."], a: 0,
        bien: "¡Sí! Sigue: depuis.", mal: "Sigue estudiando: depuis.",
        seg: [ { es: "Pausa. ¿Continúa?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["depuis", "il y a", "pendant", "pour", "en"], seg: [
        { es: "Continúa, terminó, duró, durará, tardó.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La entrevista de trabajo", img: "bg-universidad", yo: "camila",
    escena: "Camila ensaya una entrevista de trabajo con Hugo.",
    pj: PJ,
    lineas: [
      ["hugo", "Depuis combien de temps habitez-vous en France ?", "¿Desde cuándo vive en Francia?"],
      ["camila", "Je vis à Lyon depuis trois ans, mais j'ai habité à Paris pendant deux ans. Je suis arrivée en France il y a cinq ans.", "Vivo en Lyon desde hace tres años, pero viví en París durante dos años. Llegué a Francia hace cinco años."],
      ["hugo", "Et le français ? — J'étudie le français depuis deux ans. Le mois dernier, j'ai fait un rapport en trois heures !", "¿Y el francés? — Estudio francés desde hace dos años. ¡El mes pasado hice un informe en tres horas!"],
      ["camila", "Et cet été, je pars à Rome pour une semaine. L'année dernière, nous avons voyagé pendant un mois en Asie.", "Y este verano me voy a Roma una semana. El año pasado viajamos durante un mes por Asia."]
    ],
    fijate: "Fíjate: depuis trois ans, depuis deux ans (continúa); il y a cinq ans (momento pasado); pendant deux ans, pendant un mois (duración cerrada); pour une semaine (prevista); en trois heures (tiempo necesario)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cinco marcadores",
      idea: "depuis + presente = algo que empezó y sigue: J'apprends le français depuis un an (desde hace), Elle travaille ici depuis mars (desde). il y a + pasado = un momento terminado: Il est parti il y a une heure (hace). pendant = duración cerrada: J'ai vécu à Lyon pendant trois ans. pour = duración prevista: Je suis à Paris pour une semaine. en = tiempo que se tarda: J'ai fait le travail en trois heures. Nunca «depuis il y a»: J'habite ici depuis deux ans.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Marcador"], [
        ["J'étudie le français depuis deux ans.", "Estudio francés desde hace dos años.", "depuis"],
        ["Il est arrivé il y a une heure.", "Llegó hace una hora.", "il y a"],
        ["J'ai fait le travail en trois heures.", "Hice el trabajo en tres horas.", "en"],
        ["Nous avons voyagé pendant un mois en Asie. · pendant", "Viajamos durante un mes por Asia.", "pendant"],
        ["Je pars à Rome pour une semaine. · pour", "Me voy a Roma por una semana.", "pour"],
        ["depuis = inicio que continúa · il y a = momento pasado · pendant = duración delimitada · en = tiempo necesario", "definiciones", "resumen"],
        ["Je le connais ___ dix ans. · Elle travaille ici ___ mars. · On attend ___ midi. · Il pleut ___ ce matin.", "Lo conozco desde hace diez años · Trabaja aquí desde marzo · Esperamos desde el mediodía · Llueve desde esta mañana", "depuis"],
        ["Je l'ai rencontré ___ dix ans. · Elle a commencé ___ un mois. · On est arrivés ___ une heure. · Il a plu ___ deux jours.", "Lo conocí hace diez años · Empezó hace un mes · Llegamos hace una hora · Llovió hace dos días", "il y a"],
        ["Je travaille dans cette entreprise depuis 2019, et j'y suis toujours. · depuis", "Trabajo en esta empresa desde 2019 y sigo en ella.", "depuis"],
        ["J'habite ici depuis 2020", "Vivo aquí desde 2020", "depuis"],
        ["Je vis à Lyon depuis trois ans, mais j'ai habité à Paris pendant deux ans.", "Vivo en Lyon desde hace tres años, pero viví en París durante dos años.", "depuis / pendant"]
      ]],
      ej: [["J'habite à Madrid depuis cinq ans.", "Vivo en Madrid desde hace cinco años."], ["J'ai vu ce film il y a une semaine.", "Vi esa película hace una semana."], ["Il a plu pendant tout le week-end.", "Llovió durante todo el fin de semana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'habite ici depuis il y a deux ans.", "J'habite ici depuis deux ans.", "Nunca «depuis il y a»."], ["J'habite ici il y a deux ans.", "J'habite ici depuis deux ans.", "Sigue: depuis + presente."], ["Je travaille ici pendant 2019 (y sigo).", "Je travaille ici depuis 2019.", "Continúa: depuis."]] }
  ],
  ejemplos: [
    { sit: "«Estudio francés desde hace dos años.»", resp: "J'étudie le français depuis deux ans.", pasos: ["Continúa."], porque: "depuis." },
    { sit: "«Llegó hace una hora.»", resp: "Il est arrivé il y a une heure.", pasos: ["Momento pasado."], porque: "il y a." },
    { sit: "«Hice el trabajo en tres horas.»", resp: "J'ai fait le travail en trois heures.", pasos: ["Tiempo necesario."], porque: "en." }
  ],
  comprueba: [
    { q: "Depuis va con…", o: ["una acción que continúa", "una acción terminada"], a: 0, b: "gr", porque: "Sigue." },
    { q: "«Hace una semana» se dice…", o: ["il y a une semaine", "depuis une semaine"], a: 0, b: "gr", porque: "Momento pasado." },
    { q: "«Me voy una semana» (prevista)", o: ["pour une semaine", "depuis une semaine"], a: 0, b: "gr", porque: "pour." }
  ],
  practica: [
    { fase: "guiada", c: ["b4dp-depuis"], k: "sort", ask: "¿depuis o il y a?", q: "Clasifica.", cats: ["depuis", "il y a"], items: [["Je le connais ___ dix ans.", 0], ["Elle travaille ici ___ mars.", 0], ["On attend ___ midi.", 0], ["Il pleut ___ ce matin.", 0], ["Je l'ai rencontré ___ dix ans.", 1], ["Elle a commencé ___ un mois.", 1], ["On est arrivés ___ une heure.", 1], ["Il a plu ___ deux jours.", 1]], pista: "¿Presente o pasado?", why: "Continúa o terminó." },
    { fase: "guiada", c: ["b4dp-depuis"], k: "choice", ask: "«Estudio francés desde hace dos años.»", q: "Elige.", o: ["J'étudie le français depuis deux ans.", "J'étudie le français il y a deux ans."], a: 0, pista: "Continúa.", why: "<b>depuis</b>." },
    { fase: "guiada", c: ["b4dp-depuis"], k: "choice", ask: "«Llegó hace una hora.»", q: "Elige.", o: ["Il est arrivé il y a une heure.", "Il est arrivé depuis une heure."], a: 0, pista: "Momento pasado.", why: "<b>il y a</b>." },
    { fase: "indep", c: ["b4dp-pendant"], k: "choice", ask: "«Hice el trabajo en tres horas.»", q: "Elige.", o: ["J'ai fait le travail en trois heures.", "J'ai fait le travail pour trois heures."], a: 0, why: "<b>en</b>." },
    { fase: "indep", c: ["b4dp-pendant"], k: "fill", ask: "«durante»", q: "Nous avons voyagé ___ un mois en Asie.", acc: ["pendant"], why: "<b>pendant</b>." },
    { fase: "indep", c: ["b4dp-pendant"], k: "fill", ask: "Duración prevista.", q: "Je pars à Rome ___ une semaine.", acc: ["pour"], why: "<b>pour</b>." },
    { fase: "aplica", c: ["b4dp-depuis", "b4dp-pendant"], k: "match", ask: "Une cada marcador con su sentido.", q: "Marcador → sentido", pairs: [["depuis", "inicio que continúa"], ["il y a", "momento pasado"], ["pendant", "duración delimitada"], ["en", "tiempo necesario"]], why: "Marcadores." },
    { fase: "aplica", c: ["b4dp-depuis"], k: "spot", ask: "Encuentra el error.", s: "Je travaille dans cette entreprise [pendant] 2019 , et j'y suis toujours .", fix: "depuis", why: "<b>depuis</b>." },
    { fase: "aplica", c: ["b4dp-depuis"], k: "choice", ask: "«Vivo aquí desde hace dos años.»", q: "Elige.", o: ["J'habite ici depuis deux ans.", "J'habite ici depuis il y a deux ans."], a: 0, why: "Sin il y a." },
    { fase: "dominio", c: ["b4dp-depuis"], k: "order", ask: "Ordena: «Vivo aquí desde 2020».", tokens: ["J'habite", "ici", "depuis 2020"], why: "<b>J'habite ici depuis 2020</b>" },
    { fase: "dominio", c: ["b4dp-depuis"], k: "choice", ask: "Depuis va con…", q: "Elige.", o: ["una acción que continúa", "una acción terminada"], a: 0, es: true, why: "Continúa." },
    { fase: "dominio", c: ["b4dp-depuis", "b4dp-pendant"], k: "listen", say: "Je vis à Lyon depuis trois ans, mais j'ai habité à Paris pendant deux ans.", acc: ["Je vis à Lyon depuis trois ans, mais j'ai habité à Paris pendant deux ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vis à Lyon depuis trois ans, mais j'ai habité à Paris pendant deux ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Madrid", "Lyon", "Paris", "Rome", "Asie", "France"], previo: [] }
};

/* ================================ B2.2·4 · Estructuras que confunden ================================ */
/* ── 29. C'est ou il est ? ── */
E["rem-cest-il-est"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "C'est ou il est ?",
  objetivo: {
    que: "Vas a elegir entre c'est e il / elle est, una duda constante del hispanohablante.",
    corto: "Il est professeur. C'est un professeur passionné. · Voyager, c'est génial ! · C'est ma sœur.",
    podras: ["Usar il / elle est + adjetivo o + profesión / nacionalidad sin artículo: Elle est infirmière.", "Usar c'est + determinante + nombre (C'est un bon médecin), + pronombre tónico (C'est moi) o + nombre propio.", "Usar c'est + adjetivo masculino para valorar una idea o situación: Skier, c'est génial !"],
    iconos: ["ic2/amigos", "ic2/pregunta", "ic2/estrella"],
    previos: ["C'est o il est (A1, lección 29) y los pronombres tónicos (B1.1, lección 35)."],
    capacidad: "Ahora presentas y describes a las personas sin dudar."
  },
  requiere: R("ci-cest", "ci-ilest"), recupera: ["ci-cest"],
  conceptos: {
    "b4ce-ilest": { n: "il / elle est + adjetivo (Il est sympathique, très fatigué) o + profesión / nacionalidad sin artículo (Elle est infirmière, Il est architecte, Il est espagnol)", b: "gr" },
    "b4ce-cest": { n: "c'est + determinante + nombre (C'est un bon médecin, C'est une belle ville), + pronombre tónico (C'est moi), + nombre propio (C'est Pierre), + adjetivo masculino para una idea (Skier, c'est génial !)", b: "gr" }
  },
  video: {
    titulo: "C'est o il est", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "c'est un…", seg: [
        { es: "Hola. ¿Hay artículo? Entonces c'est." } ] },
      { v: "frase", filas: [
          { nota: "profesión / nombre", p: 1, partes: [["Il est professeur. C'est un professeur passionné.", "-", 1]] },
          { nota: "idea", p: 2, partes: [["Voyager, c'est génial !", "-", 2]] },
          { nota: "identificar", p: 3, partes: [["Qui est-ce ? — C'est ma sœur.", "-", 3]] } ], seg: [
        { fr: "Il est professeur. C'est un professeur passionné.", p: 1 }, { fr: "Voyager, c'est génial !", p: 2 }, { fr: "Qui est-ce ? — C'est ma sœur.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es un buen médico.»", o: ["C'est un bon médecin.", "Il est un bon médecin."], a: 0,
        bien: "¡Sí! Con artículo: c'est.", mal: "Con artículo: c'est.",
        seg: [ { es: "Pausa. ¿Hay artículo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il est + adjetivo", "elle est + profesión", "c'est un / une", "c'est moi", "c'est génial"], seg: [
        { es: "Adjetivo o profesión: il est. Artículo: c'est.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La foto de familia", img: "bg-cafe", yo: "camila",
    escena: "Camila le enseña a Hugo una foto de su familia.",
    pj: PJ,
    lineas: [
      ["camila", "Qui est-ce ? — C'est ma sœur. Elle est infirmière. Et lui, c'est mon oncle : il est cuisinier.", "¿Quién es? — Es mi hermana. Es enfermera. Y él es mi tío: es cocinero."],
      ["hugo", "Ton oncle est cuisinier ? — Oui, c'est un cuisinier très talentueux !", "¿Tu tío es cocinero? — ¡Sí, es un cocinero con mucho talento!"],
      ["camila", "Et mon père ? Il est ingénieur chez Airbus. C'est un bon ingénieur, il est très sympathique.", "¿Y mi padre? Es ingeniero en Airbus. Es un buen ingeniero, es muy simpático."],
      ["hugo", "Et ça, c'est Pamplona ? — Oui, c'est une belle ville. La vie à la campagne, c'est facile !", "¿Y eso es Pamplona? — Sí, es una ciudad bonita. ¡La vida en el campo es fácil!"]
    ],
    fijate: "Fíjate: C'est ma sœur, c'est mon oncle, c'est un cuisinier, c'est un bon ingénieur, c'est une belle ville (determinante); elle est infirmière, il est cuisinier, il est ingénieur, il est très sympathique (sin artículo); c'est facile (idea)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Con o sin artículo",
      idea: "il / elle est + adjetivo (para una persona o cosa concreta): Il est grand. Elle est gentille. il / elle est + profesión o nacionalidad sin artículo: Il est ingénieur. Elle est avocate. Il est français. c'est + determinante (un, une, le, ma…) + nombre: C'est un ingénieur brillant. C'est une avocate connue. C'est ma sœur. c'est + pronombre tónico o nombre propio: C'est moi. C'est Pierre. c'est + adjetivo masculino para valorar una idea o situación: Paris, c'est magnifique ! Voyager, c'est génial !",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["C'est un bon médecin.", "Es un buen médico.", "c'est + artículo"],
        ["Elle est infirmière.", "Es enfermera.", "profesión sin artículo"],
        ["Skier, c'est génial !", "¡Esquiar es genial!", "idea"],
        ["Regarde ce garçon : il est très grand. · il est", "Mira a ese chico: es muy alto.", "adjetivo"],
        ["Qui a appelé ? C'est ton frère. · C'est", "¿Quién llamó? Es tu hermano.", "identificar"],
        ["Il est = français. · C'est un = Français célèbre. · Elle est = avocate. · C'est une = avocate connue.", "es francés · es un francés famoso · es abogada · es una abogada conocida", "pares"],
        ["___ un ami. · ___ moi. · ___ facile, la vie à la campagne ! · ___ Pierre.", "es un amigo · soy yo · ¡es fácil la vida en el campo! · es Pierre", "C'est"],
        ["___ architecte. · ___ sympathique. · ___ espagnol. · ___ très fatigué.", "es arquitecto · es simpático · es español · está muy cansado", "Il est"],
        ["Mon père ? Il est ingénieur chez Airbus.", "¿Mi padre? Es ingeniero en Airbus.", "profesión"],
        ["C'est une belle ville", "Es una ciudad bonita", "c'est + artículo"],
        ["Mon oncle est cuisinier ; c'est un cuisinier très talentueux.", "Mi tío es cocinero; es un cocinero con mucho talento.", "las dos"]
      ]],
      ej: [["Il est professeur. C'est un professeur passionné.", "Es profesor. Es un profesor apasionado."], ["Voyager, c'est génial !", "¡Viajar es genial!"], ["Qui est-ce ? — C'est ma sœur.", "¿Quién es? — Es mi hermana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il est un bon médecin.", "C'est un bon médecin.", "Con artículo: c'est."], ["Elle est une infirmière.", "Elle est infirmière.", "Profesión sin artículo."], ["Mon père ? C'est ingénieur.", "Mon père ? Il est ingénieur.", "Profesión: il est."]] }
  ],
  ejemplos: [
    { sit: "«Es un buen médico.»", resp: "C'est un bon médecin.", pasos: ["Artículo."], porque: "c'est." },
    { sit: "«Es enfermera.»", resp: "Elle est infirmière.", pasos: ["Sin artículo."], porque: "elle est." },
    { sit: "«¡Esquiar es genial!»", resp: "Skier, c'est génial !", pasos: ["Idea."], porque: "c'est." }
  ],
  comprueba: [
    { q: "Profesión sin artículo:", o: ["il / elle est", "c'est"], a: 0, b: "gr", porque: "Il est ingénieur." },
    { q: "Con un determinante (un, ma…):", o: ["c'est", "il est"], a: 0, b: "gr", porque: "C'est un…" },
    { q: "«___ moi.»", o: ["C'est", "Il est"], a: 0, b: "gr", porque: "Pronombre tónico." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ce-ilest", "b4ce-cest"], k: "sort", ask: "¿C'est o Il est?", q: "Clasifica.", cats: ["C'est", "Il est"], items: [["___ un ami.", 0], ["___ moi.", 0], ["___ facile, la vie à la campagne !", 0], ["___ Pierre.", 0], ["___ architecte.", 1], ["___ sympathique.", 1], ["___ espagnol.", 1], ["___ très fatigué.", 1]], pista: "¿Hay determinante?", why: "c'est / il est." },
    { fase: "guiada", c: ["b4ce-cest"], k: "choice", ask: "«Es un buen médico.»", q: "Elige.", o: ["C'est un bon médecin.", "Il est un bon médecin."], a: 0, pista: "Artículo.", why: "<b>C'est</b>." },
    { fase: "guiada", c: ["b4ce-ilest"], k: "choice", ask: "«Es enfermera.»", q: "Elige.", o: ["Elle est infirmière.", "C'est infirmière."], a: 0, pista: "Profesión.", why: "<b>Elle est</b>." },
    { fase: "indep", c: ["b4ce-cest"], k: "choice", ask: "«¡Esquiar es genial!»", q: "Elige.", o: ["Skier, c'est génial !", "Skier, il est génial !"], a: 0, why: "Idea: <b>c'est</b>." },
    { fase: "indep", c: ["b4ce-ilest"], k: "fill", ask: "Adjetivo.", q: "Regarde ce garçon : ___ très grand.", acc: ["il est"], why: "<b>il est</b>." },
    { fase: "indep", c: ["b4ce-cest"], k: "fill", ask: "Identificar a una persona.", q: "Qui a appelé ? ___ ton frère.", acc: ["C'est", "c'est"], why: "<b>C'est</b>." },
    { fase: "aplica", c: ["b4ce-ilest", "b4ce-cest"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Il est", "français."], ["C'est un", "Français célèbre."], ["Elle est", "avocate."], ["C'est une", "avocate connue."]], why: "Pares." },
    { fase: "aplica", c: ["b4ce-ilest"], k: "spot", ask: "Encuentra el error.", s: "Mon père ? [C'est] ingénieur chez Airbus .", fix: "Il est", why: "<b>Il est</b>." },
    { fase: "aplica", c: ["b4ce-cest"], k: "spot", ask: "Encuentra el error.", s: "Ma voisine ? [Elle est] une avocate très connue .", fix: "C'est", why: "<b>C'est</b> une…" },
    { fase: "dominio", c: ["b4ce-cest"], k: "order", ask: "Ordena: «Es una ciudad bonita».", tokens: ["C'est", "une belle", "ville"], why: "<b>C'est une belle ville</b>" },
    { fase: "dominio", c: ["b4ce-ilest"], k: "choice", ask: "Profesión sin artículo:", q: "Elige.", o: ["il / elle est", "c'est"], a: 0, why: "<b>il est</b>." },
    { fase: "dominio", c: ["b4ce-ilest", "b4ce-cest"], k: "listen", say: "Mon oncle est cuisinier ; c'est un cuisinier très talentueux.", acc: ["Mon oncle est cuisinier ; c'est un cuisinier très talentueux.", "Mon oncle est cuisinier; c'est un cuisinier très talentueux.", "Mon oncle est cuisinier, c'est un cuisinier très talentueux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon oncle est cuisinier ; c'est un cuisinier très talentueux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pierre", "Airbus", "Pamplona"], previo: [] }
};

/* ── 30. Dont, que, où : le relatif qui manque en espagnol ── */
E["rem-dont"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Dont, que, où : le relatif qui manque en espagnol",
  objetivo: {
    que: "Vas a usar dont cuando el verbo o el adjetivo llevan de, y a no confundirlo con que ni con où.",
    corto: "Voici le film dont je t'ai parlé. · C'est l'outil dont j'ai besoin. · J'ai une amie dont le père est pilote.",
    podras: ["Usar dont con los verbos y adjetivos con de: parler de, avoir besoin de, se souvenir de, être fier de.", "Usar dont para la posesión (cuyo): une fille dont la mère est actrice.", "Distinguir dont de que (COD sin preposición: le livre que je lis), où (lugar o tiempo) y qui (sujeto)."],
    iconos: ["ic2/engranaje", "ic2/libro", "ic2/amigos"],
    previos: ["Qui y que (A2, lección 43), los relativos (B1.1, lección 4) y ce que, ce qui, ce dont (lección 6)."],
    capacidad: "Ahora usas dont con naturalidad, como un francés."
  },
  requiere: R("qq2-qui", "qq2-que", "b1rel-quique", "b1rel-oudont", "b4sy-dont"), recupera: ["b1rel-oudont"],
  conceptos: {
    "b4do-dont": { n: "dont = de + antecedente: le film dont tout le monde parle (parler de), l'argent dont j'ai besoin (avoir besoin de), le prof dont je me souviens, le résultat dont il est fier; posesión: une fille dont la mère est actrice (cuya)", b: "gr" },
    "b4do-autres": { n: "que = COD sin preposición (le film que j'ai vu, la chanson que j'écoute); où = lugar o tiempo (le pays où je suis né, le jour où…); qui = sujeto (l'étudiant qui a gagné)", b: "gr" }
  },
  video: {
    titulo: "El relativo dont", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "dont", seg: [
        { es: "Hola. Dont no tiene equivalente directo en español." } ] },
      { v: "frase", filas: [
          { nota: "parler de", p: 1, partes: [["Voici le film dont je t'ai parlé.", "-", 1]] },
          { nota: "avoir besoin de", p: 2, partes: [["C'est l'outil dont j'ai besoin.", "-", 2]] },
          { nota: "cuyo", p: 3, partes: [["J'ai une amie dont le père est pilote.", "-", 3]] } ], seg: [
        { fr: "Voici le film dont je t'ai parlé.", p: 1 }, { fr: "C'est l'outil dont j'ai besoin.", p: 2 }, { fr: "J'ai une amie dont le père est pilote.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El libro del que hablo…»", o: ["le livre dont je parle", "le livre que je parle"], a: 0,
        bien: "¡Sí! Parler de → dont.", mal: "Parler de → dont.",
        seg: [ { es: "Pausa. ¿El verbo lleva de?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["dont", "ce dont", "que", "où", "qui"], seg: [
        { es: "Si el verbo lleva de, dont.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La película", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de cine y de sus recuerdos.",
    pj: PJ,
    lineas: [
      ["camila", "Voici le film dont je t'ai parlé ! Tout le monde en parle : c'est le film dont tout le monde parle.", "¡Esta es la película de la que te hablé! Todo el mundo habla de ella: es la película de la que todo el mundo habla."],
      ["hugo", "Ah oui, le film que j'ai vu hier ? C'est l'histoire d'une fille dont la mère est actrice.", "Ah, sí, ¿la película que vi ayer? Es la historia de una chica cuya madre es actriz."],
      ["camila", "Exactement. Et la chanson du film, c'est la chanson que j'écoute tous les jours.", "Exacto. Y la canción de la película es la canción que escucho todos los días."],
      ["hugo", "Moi, mon meilleur souvenir, c'est le pays où je suis né. C'est le souvenir dont je suis le plus fier. Et un travail créatif, c'est exactement le genre de travail dont je rêvais.", "Para mí, mi mejor recuerdo es el país donde nací. Es el recuerdo del que estoy más orgulloso. Y un trabajo creativo es exactamente el tipo de trabajo con el que soñaba."]
    ],
    fijate: "Fíjate: le film dont je t'ai parlé, dont tout le monde parle (parler de), une fille dont la mère (cuya), le souvenir dont je suis fier (fier de), dont je rêvais (rêver de); que j'ai vu, que j'écoute (COD); où je suis né (lugar)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dont, que, où, qui",
      idea: "dont sustituye a de + antecedente. Se usa con los verbos y adjetivos que llevan de: parler de (le livre dont je parle), avoir besoin de (l'outil dont j'ai besoin; ce dont j'ai besoin = lo que necesito), se souvenir de (le prof dont je me souviens), rêver de (le travail dont je rêvais), être fier de (le résultat dont il est fier). Expresa también la posesión (cuyo): une fille dont la mère est actrice. que = COD sin preposición: le film que j'ai vu, la chanson que j'écoute. où = lugar o tiempo: le pays où je suis né. qui = sujeto: l'étudiant qui a gagné.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Relativo"], [
        ["le livre dont je parle", "el libro del que hablo", "parler de"],
        ["ce dont j'ai besoin", "lo que necesito", "avoir besoin de"],
        ["une fille dont la mère est actrice", "una chica cuya madre es actriz", "posesión"],
        ["C'est le souvenir dont je suis le plus fier. · dont", "Es el recuerdo del que estoy más orgulloso.", "fier de"],
        ["C'est la chanson que j'écoute tous les jours. · que", "Es la canción que escucho todos los días.", "COD"],
        ["le pays = où je suis né · la personne = dont je parle · le cadeau = que j'ai reçu · l'étudiant = qui a gagné", "el país donde nací · la persona de la que hablo · el regalo que recibí · el estudiante que ganó", "relativos"],
        ["le film ___ tout le monde parle · l'argent ___ j'ai besoin · le prof ___ je me souviens · le résultat ___ il est fier", "la película de la que todos hablan · el dinero que necesito · el profe del que me acuerdo · el resultado del que está orgulloso", "dont"],
        ["le film ___ j'ai vu · l'argent ___ j'ai gagné · le prof ___ j'adore · le résultat ___ il attend", "la película que vi · el dinero que gané · el profe que adoro · el resultado que espera", "que"],
        ["Voici le dictionnaire dont j'ai besoin pour l'examen.", "Este es el diccionario que necesito para el examen.", "avoir besoin de"],
        ["C'est la fille dont je t'ai parlé", "Es la chica de la que te hablé", "parler de"],
        ["C'est exactement le genre de travail dont je rêvais.", "Es exactamente el tipo de trabajo con el que soñaba.", "rêver de"]
      ]],
      ej: [["Voici le film dont je t'ai parlé.", "Esta es la película de la que te hablé."], ["C'est l'outil dont j'ai besoin.", "Es la herramienta que necesito."], ["J'ai une amie dont le père est pilote.", "Tengo una amiga cuyo padre es piloto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le livre que je t'ai parlé", "le livre dont je t'ai parlé", "parler de → dont."], ["l'argent que j'ai besoin", "l'argent dont j'ai besoin", "avoir besoin de → dont."], ["le film dont j'ai vu", "le film que j'ai vu", "voir + COD → que."]] }
  ],
  ejemplos: [
    { sit: "«El libro del que hablo…»", resp: "le livre dont je parle", pasos: ["parler de."], porque: "dont." },
    { sit: "«Lo que necesito…»", resp: "ce dont j'ai besoin", pasos: ["avoir besoin de."], porque: "ce dont." },
    { sit: "«Una chica cuya madre es actriz»", resp: "une fille dont la mère est actrice", pasos: ["Posesión."], porque: "dont = cuyo." }
  ],
  comprueba: [
    { q: "Dont se usa cuando el verbo lleva…", o: ["de", "à"], a: 0, b: "gr", porque: "de + antecedente." },
    { q: "«La película que vi»", o: ["le film que j'ai vu", "le film dont j'ai vu"], a: 0, b: "gr", porque: "COD." },
    { q: "«Cuyo» se dice…", o: ["dont", "où"], a: 0, b: "gr", porque: "Posesión." }
  ],
  practica: [
    { fase: "guiada", c: ["b4do-dont", "b4do-autres"], k: "sort", ask: "¿dont o que?", q: "Clasifica.", cats: ["dont", "que"], items: [["le film ___ tout le monde parle", 0], ["l'argent ___ j'ai besoin", 0], ["le prof ___ je me souviens", 0], ["le résultat ___ il est fier", 0], ["le film ___ j'ai vu", 1], ["l'argent ___ j'ai gagné", 1], ["le prof ___ j'adore", 1], ["le résultat ___ il attend", 1]], pista: "¿El verbo lleva de?", why: "dont / que." },
    { fase: "guiada", c: ["b4do-dont"], k: "choice", ask: "«El libro del que hablo…»", q: "Elige.", o: ["le livre dont je parle", "le livre que je parle"], a: 0, pista: "parler de.", why: "<b>dont</b>." },
    { fase: "guiada", c: ["b4do-dont"], k: "choice", ask: "«Lo que necesito…»", q: "Elige.", o: ["ce dont j'ai besoin", "ce que j'ai besoin"], a: 0, pista: "avoir besoin de.", why: "<b>ce dont</b>." },
    { fase: "indep", c: ["b4do-dont"], k: "choice", ask: "«Una chica cuya madre es actriz»", q: "Elige.", o: ["une fille dont la mère est actrice", "une fille que la mère est actrice"], a: 0, why: "<b>dont</b> = cuyo." },
    { fase: "indep", c: ["b4do-dont"], k: "fill", ask: "être fier de → …", q: "C'est le souvenir ___ je suis le plus fier.", acc: ["dont"], why: "<b>dont</b>." },
    { fase: "indep", c: ["b4do-autres"], k: "fill", ask: "écouter + COD → …", q: "C'est la chanson ___ j'écoute tous les jours.", acc: ["que"], why: "<b>que</b>." },
    { fase: "aplica", c: ["b4do-dont", "b4do-autres"], k: "match", ask: "Une cada antecedente con su relativo.", q: "Antecedente → relativa", pairs: [["le pays", "où je suis né"], ["la personne", "dont je parle"], ["le cadeau", "que j'ai reçu"], ["l'étudiant", "qui a gagné"]], why: "Relativos." },
    { fase: "aplica", c: ["b4do-dont"], k: "spot", ask: "Encuentra el error.", s: "Voici le dictionnaire [que] j'ai besoin pour l'examen .", fix: "dont", why: "<b>dont</b>." },
    { fase: "aplica", c: ["b4do-autres"], k: "spot", ask: "Encuentra el error.", s: "C'est le film [dont] j'ai vu hier soir .", fix: "que", why: "<b>que</b>." },
    { fase: "dominio", c: ["b4do-dont"], k: "order", ask: "Ordena: «Es la chica de la que te hablé».", tokens: ["C'est la fille", "dont", "je t'ai parlé"], why: "<b>C'est la fille dont je t'ai parlé</b>" },
    { fase: "dominio", c: ["b4do-dont"], k: "choice", ask: "Dont se usa cuando el verbo lleva…", q: "Elige.", o: ["de", "à"], a: 0, why: "<b>de</b>." },
    { fase: "dominio", c: ["b4do-dont", "b4do-autres"], k: "listen", say: "C'est exactement le genre de travail dont je rêvais.", acc: ["C'est exactement le genre de travail dont je rêvais."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est exactement le genre de travail dont je rêvais.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 31. É, er, ez, ais : écrire le son [e] ── */
E["rem-e-er-ez"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "É, er, ez, ais : écrire le son [e]",
  objetivo: {
    que: "Vas a escribir bien el sonido [e] final: -é (participio), -er (infinitivo), -ez (vous) o -ais / -ait (imparfait).",
    corto: "Il faut étudier. · Elle a étudié toute la nuit. · Vous étudiez le français ?",
    podras: ["Escribir el infinitivo -er después de una preposición o de un verbo conjugado (Je vais manger, Il faut étudier).", "Escribir el participio -é(e)(s) después de avoir o être (J'ai mangé, Elle est arrivée).", "Escribir -ez con vous y -ais / -ait en el imparfait, y usar el truco de vendre / vendu."],
    iconos: ["ic2/lapiz", "ic2/engranaje", "ic2/pregunta"],
    previos: ["El passé composé (A2, lección 1) y la ortografía (lección 14)."],
    capacidad: "Ahora no confundes manger, mangé y mangez al escribir."
  },
  requiere: R("pca-forma", "b4or-homo", "b4pp-avoir"), recupera: ["b4or-homo"],
  conceptos: {
    "b4ee-er-e": { n: "-er (infinitivo) después de preposición o verbo conjugado: je vais appeler, il faut parler, pour jouer, sans penser, tu peux m'aider; -é(e)(s) (participio) después de avoir / être: j'ai terminé, elle est arrivée, nous avons payé; truco: vendre (infinitivo) / vendu (participio)", b: "gr" },
    "b4ee-ez-ais": { n: "-ez con vous (Vous parlez anglais ?, vous étudiez); -ais / -ait en el imparfait (je mangeais, il mangeait)", b: "gr" }
  },
  video: {
    titulo: "Escribir el sonido [e]", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "-er / -é", seg: [
        { es: "Hola. Suenan igual, pero se escriben distinto." } ] },
      { v: "frase", filas: [
          { nota: "infinitivo", p: 1, partes: [["Il faut étudier.", "-", 1]] },
          { nota: "participio", p: 2, partes: [["Elle a étudié toute la nuit.", "-", 2]] },
          { nota: "vous", p: 3, partes: [["Vous étudiez le français ?", "-", 3]] } ], seg: [
        { fr: "Il faut étudier.", p: 1 }, { fr: "Elle a étudié toute la nuit.", p: 2 }, { fr: "Vous étudiez le français ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a llamar.»", o: ["Je vais appeler.", "Je vais appelé."], a: 0,
        bien: "¡Sí! Tras aller: infinitivo.", mal: "Truco: je vais vendre → -er.",
        seg: [ { es: "Pausa. ¿Vendre o vendu?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["-er", "-é", "-ez", "-ais", "vendre / vendu"], seg: [
        { es: "Infinitivo, participio, vous, imparfait.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mensaje de Camila", img: "bg-cafe", yo: "camila",
    escena: "Hugo corrige un mensaje que Camila escribió deprisa.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as écrit « Hier, nous avons travailler jusqu'à minuit ». C'est travaillé : après avoir, le participe.", "Escribiste «Ayer trabajar hasta medianoche». Es travaillé: después de avoir, el participio."],
      ["camila", "Comment savoir ? — Remplace par vendre : « nous avons vendu ». Donc -é. Et « je vais vendre » : donc -er.", "¿Cómo saberlo? — Sustitúyelo por vendre: «nous avons vendu». Entonces -é. Y «je vais vendre»: entonces -er."],
      ["hugo", "Exactement. Elle est arrivée tôt ce matin. Tu peux m'aider ? Je veux apprendre à cuisiner.", "Exacto. Ella llegó temprano esta mañana. ¿Me puedes ayudar? Quiero aprender a cocinar."],
      ["camila", "Et avec vous : « Vous avez oublié de fermer la porte avant de partir. » — Avez, oublié, fermer, partir : quatre sons [e] différents… enfin, presque !", "Y con vous: «Olvidaron cerrar la puerta antes de salir.» — Avez, oublié, fermer, partir: cuatro sonidos distintos… ¡bueno, casi!"]
    ],
    fijate: "Fíjate: avons travaillé (participio tras avoir), est arrivée (participio tras être), m'aider, apprendre à cuisiner, de fermer (infinitivo), vous avez (-ez); truco vendre / vendu."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro terminaciones, un sonido",
      idea: "-er (infinitivo): después de una preposición (pour jouer, sans penser, avant de partir) o de un verbo conjugado (je vais appeler, il faut parler, tu peux m'aider, je dois payer). -é(e)(s) (participio): después de avoir o être (j'ai terminé, elle est arrivée, nous avons payé). -ez: con vous (vous parlez, vous étudiez). -ais / -ait: imparfait (je mangeais, il mangeait). Truco: sustituye por vendre / vendu: «je vais (vendre)» → manger; «j'ai (vendu)» → mangé.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Terminación"], [
        ["Je vais appeler.", "Voy a llamar.", "-er"],
        ["J'ai terminé.", "He terminado.", "-é"],
        ["Vous parlez anglais ?", "¿Ustedes hablan inglés?", "-ez"],
        ["Elle est arrivée tôt ce matin. · arrivée", "Llegó temprano esta mañana.", "-ée"],
        ["Tu peux m'aider ? · aider", "¿Me puedes ayudar?", "-er"],
        ["après « je vais » = -er · après « j'ai » = -é · avec « vous » = -ez · imparfait « je » = -ais", "reglas", "resumen"],
        ["Il faut ___ (parler) · pour ___ (jouer) · sans ___ (penser) · je dois ___ (payer)", "hay que hablar · para jugar · sin pensar · debo pagar", "-er"],
        ["j'ai ___ (parler) · il est ___ (tomber) · elle a ___ (jouer) · nous avons ___ (payer)", "hablé · se cayó · jugó · pagamos", "-é"],
        ["Hier, nous avons travaillé jusqu'à minuit. · travaillé", "Ayer trabajamos hasta medianoche.", "-é"],
        ["Je veux apprendre à cuisiner", "Quiero aprender a cocinar", "-er"],
        ["Vous avez oublié de fermer la porte avant de partir.", "Olvidaron cerrar la puerta antes de salir.", "-ez · -é · -er"]
      ]],
      ej: [["Il faut étudier.", "Hay que estudiar."], ["Elle a étudié toute la nuit.", "Estudió toda la noche."], ["Vous étudiez le français ?", "¿Estudian francés?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais mangé.", "Je vais manger.", "Tras aller: infinitivo (je vais vendre)."], ["Nous avons travailler.", "Nous avons travaillé.", "Tras avoir: participio (avons vendu)."], ["Vous parler anglais ?", "Vous parlez anglais ?", "Con vous: -ez."]] }
  ],
  ejemplos: [
    { sit: "«Voy a llamar.»", resp: "Je vais appeler.", pasos: ["je vais vendre → -er."], porque: "Infinitivo." },
    { sit: "«He terminado.»", resp: "J'ai terminé.", pasos: ["j'ai vendu → -é."], porque: "Participio." },
    { sit: "«¿Ustedes hablan inglés?»", resp: "Vous parlez anglais ?", pasos: ["vous → -ez."], porque: "Presente." }
  ],
  comprueba: [
    { q: "Después de «je vais» va…", o: ["el infinitivo -er", "el participio -é"], a: 0, b: "gr", porque: "je vais vendre." },
    { q: "Después de «j'ai» va…", o: ["el participio -é", "el infinitivo -er"], a: 0, b: "gr", porque: "j'ai vendu." },
    { q: "Con «vous» el presente termina en…", o: ["-ez", "-er"], a: 0, b: "gr", porque: "vous parlez." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ee-er-e"], k: "sort", ask: "¿-er o -é?", q: "Clasifica.", cats: ["-er", "-é"], items: [["Il faut ___ (parler)", 0], ["pour ___ (jouer)", 0], ["sans ___ (penser)", 0], ["je dois ___ (payer)", 0], ["j'ai ___ (parler)", 1], ["il est ___ (tomber)", 1], ["elle a ___ (jouer)", 1], ["nous avons ___ (payer)", 1]], pista: "¿Vendre o vendu?", why: "Infinitivo o participio." },
    { fase: "guiada", c: ["b4ee-er-e"], k: "choice", ask: "«Voy a llamar.»", q: "Elige.", o: ["Je vais appeler.", "Je vais appelé."], a: 0, pista: "je vais vendre.", why: "<b>appeler</b>." },
    { fase: "guiada", c: ["b4ee-er-e"], k: "choice", ask: "«He terminado.»", q: "Elige.", o: ["J'ai terminé.", "J'ai terminer."], a: 0, pista: "j'ai vendu.", why: "<b>terminé</b>." },
    { fase: "indep", c: ["b4ee-ez-ais"], k: "choice", ask: "«¿Ustedes hablan inglés?»", q: "Elige.", o: ["Vous parlez anglais ?", "Vous parler anglais ?"], a: 0, why: "<b>parlez</b>." },
    { fase: "indep", c: ["b4ee-er-e"], k: "fill", ask: "Participio de arriver (elle).", q: "Elle est ___ tôt ce matin.", acc: ["arrivée"], why: "<b>arrivée</b>." },
    { fase: "indep", c: ["b4ee-er-e"], k: "fill", ask: "Infinitivo de aider.", q: "Tu peux m'___ ?", acc: ["aider"], why: "<b>aider</b>." },
    { fase: "aplica", c: ["b4ee-er-e", "b4ee-ez-ais"], k: "match", ask: "Une cada contexto con su terminación.", q: "Contexto → terminación", pairs: [["après « je vais »", "-er"], ["après « j'ai »", "-é"], ["avec « vous »", "-ez"], ["imparfait « je »", "-ais"]], why: "Reglas." },
    { fase: "aplica", c: ["b4ee-er-e"], k: "spot", ask: "Encuentra el error.", s: "Hier , nous avons [travailler] jusqu'à minuit .", fix: "travaillé", why: "<b>travaillé</b>." },
    { fase: "aplica", c: ["b4ee-er-e"], k: "spot", ask: "Encuentra el error.", s: "Demain , je vais [préparé] le rapport .", fix: "préparer", why: "<b>préparer</b>." },
    { fase: "dominio", c: ["b4ee-er-e"], k: "order", ask: "Ordena: «Quiero aprender a cocinar».", tokens: ["Je veux", "apprendre", "à cuisiner"], why: "<b>Je veux apprendre à cuisiner</b>" },
    { fase: "dominio", c: ["b4ee-er-e"], k: "choice", ask: "Después de «je vais» va…", q: "Elige.", o: ["el infinitivo -er", "el participio -é"], a: 0, es: true, why: "Infinitivo." },
    { fase: "dominio", c: ["b4ee-er-e", "b4ee-ez-ais"], k: "listen", say: "Vous avez oublié de fermer la porte avant de partir.", acc: ["Vous avez oublié de fermer la porte avant de partir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vous avez oublié de fermer la porte avant de partir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};


/* ================================ B2.2·4 · Léxico que se confunde ================================ */



/* ================================ B2.2·5 · Cartas y correos útiles ================================ */

/* ── 32. Si + présent / imparfait : jamais de futur ni de conditionnel ── */
E["rem-si-temps"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Si + présent / imparfait : jamais de futur ni de conditionnel",
  objetivo: {
    que: "Vas a eliminar el error de poner futuro o condicional después del si de condición, y a reconocer el si interrogativo que sí los admite.",
    corto: "S'il pleut, on restera à la maison. · Si j'étais toi, je partirais. · Je ne sais pas s'il viendra.",
    podras: ["Usar si + presente → futuro, presente o imperativo (Si tu veux, on peut sortir).", "Usar si + imparfait → conditionnel présent y si + plus-que-parfait → conditionnel passé.", "Distinguir el si interrogativo (= whether), que sí admite futuro: Je me demande s'il viendra; y escribir s'il, no «si il»."],
    iconos: ["ic2/engranaje", "ic2/candado", "ic2/bombilla"],
    previos: ["Conditionnel et hypothèse (lección 8) y la hipótesis con si (B1.2, lección 1)."],
    capacidad: "Ahora construyes cualquier condición sin el calco «si j'aurais»."
  },
  requiere: R("b2si-possible", "b2si-irreel", "b1fp-si", "b4cd-si"), recupera: ["b4cd-si"],
  conceptos: {
    "b4st-condition": { n: "si de condición: si + présent → futur / présent / impératif (S'il fait beau demain, on ira à la plage; Si tu es fatigué, repose-toi); si + imparfait → conditionnel présent; si + plus-que-parfait → conditionnel passé; nunca futuro ni condicional tras si; si + il = s'il", b: "gr" },
    "b4st-question": { n: "si interrogativo indirecto (= whether), después de savoir, se demander: admite futuro o condicional (Je ne sais pas s'il viendra; Je me demande s'il viendra)", b: "gr" }
  },
  video: {
    titulo: "Después de si", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "si + imparfait", seg: [
        { es: "Hola. Tras el si de condición, ni futuro ni condicional." } ] },
      { v: "frase", filas: [
          { nota: "presente → futuro", p: 1, partes: [["S'il pleut, on restera à la maison.", "-", 1]] },
          { nota: "imparfait → condicional", p: 2, partes: [["Si j'étais toi, je partirais.", "-", 2]] },
          { nota: "si interrogativo", p: 3, partes: [["Je ne sais pas s'il viendra.", "-", 3]] } ], seg: [
        { fr: "S'il pleut, on restera à la maison.", p: 1 }, { fr: "Si j'étais toi, je partirais.", p: 2 }, { fr: "Je ne sais pas s'il viendra.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si tuviera tiempo, viajaría.»", o: ["Si j'avais le temps, je voyagerais.", "Si j'aurais le temps, je voyagerais."], a: 0,
        bien: "¡Sí! Si + imparfait.", mal: "Tras si: imparfait.",
        seg: [ { es: "Pausa. ¿Condición o pregunta?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["si + présent", "si + imparfait", "si + plus-que-parfait", "s'il", "je me demande s'il"], seg: [
        { es: "Condición: sin futuro. Pregunta: sí.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los planes del fin de semana", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo hacen planes para el fin de semana.",
    pj: PJ,
    lineas: [
      ["hugo", "S'il fait beau demain, on ira à la plage. Si tu veux, on peut partir tôt.", "Si hace buen tiempo mañana, iremos a la playa. Si quieres, podemos salir temprano."],
      ["camila", "Et s'il pleut, on restera à la maison. Je ne sais pas s'il fera beau…", "Y si llueve, nos quedaremos en casa. No sé si hará buen tiempo…"],
      ["hugo", "Ma sœur, elle, si elle avait su, elle serait venue avec nous. Si nous étions partis plus tôt la dernière fois, nous aurions eu le train !", "Mi hermana, si lo hubiera sabido, habría venido con nosotros. ¡Si hubiéramos salido antes la última vez, habríamos cogido el tren!"],
      ["camila", "Moi, si j'avais plus de temps libre, j'apprendrais à jouer du piano. Et si j'étais riche, j'achèterais une île !", "Yo, si tuviera más tiempo libre, aprendería a tocar el piano. ¡Y si fuera rica, me compraría una isla!"]
    ],
    fijate: "Fíjate: S'il fait beau → on ira; si tu veux → on peut; s'il pleut → on restera; si elle avait su → elle serait venue; si j'avais → j'apprendrais; Je ne sais pas s'il fera (si interrogativo: futuro permitido)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El si de condición",
      idea: "Si + présent → futur, présent o impératif: S'il pleut, on restera à la maison; Si tu viens, je te le montre; Si tu es fatigué, repose-toi. Si + imparfait → conditionnel présent: Si j'étais toi, je partirais. Si + plus-que-parfait → conditionnel passé: Si elle avait su, elle serait venue. Nunca futuro ni condicional justo después de si: «S'il pleuvra», «Si j'aurais» son errores. Excepción: el si interrogativo indirecto (= whether), después de savoir o se demander, sí admite futuro: Je ne sais pas s'il viendra. Ortografía: si + il = s'il (pero si elle).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["Si j'avais le temps, je voyagerais.", "Si tuviera tiempo, viajaría.", "imparfait → conditionnel"],
        ["Si tu viens, je te le montre.", "Si vienes, te lo enseño.", "présent → présent"],
        ["Je ne sais pas s'il viendra.", "No sé si vendrá.", "si interrogativo"],
        ["Si tu es fatigué, repose-toi. · es", "Si estás cansado, descansa.", "présent → impératif"],
        ["Si nous étions partis plus tôt, nous aurions eu le train. · étions partis", "Si hubiéramos salido antes, habríamos cogido el tren.", "plus-que-parfait → conditionnel passé"],
        ["Si tu veux, = on peut sortir. · Si j'étais riche, = j'achèterais une île. · Si elle avait su, = elle serait venue. · S'il fait beau demain, = on ira à la plage.", "pares", "ejemplos"],
        ["S'il pleut, je reste. · Si j'étais toi, j'irais. · Si tu avais appelé, je serais venu. · Je me demande s'il viendra.", "frases correctas", "Correcta"],
        ["S'il pleuvra, je reste. · Si j'aurais su, je serais venu. · Si tu serais là, ce serait mieux. · Si il vient, dis-le-moi.", "frases con error", "Incorrecta"],
        ["Si j'étais ministre, je baisserais les impôts. · étais", "Si fuera ministro, bajaría los impuestos.", "imparfait"],
        ["S'il fait beau, nous sortirons", "Si hace buen tiempo, saldremos", "présent → futur"],
        ["Si j'avais plus de temps libre, j'apprendrais à jouer du piano.", "Si tuviera más tiempo libre, aprendería a tocar el piano.", "imparfait → conditionnel"]
      ]],
      ej: [["S'il pleut, on restera à la maison.", "Si llueve, nos quedaremos en casa."], ["Si j'étais toi, je partirais.", "Si yo fuera tú, me iría."], ["Je ne sais pas s'il viendra.", "No sé si vendrá."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Si j'aurais de l'argent, …", "Si j'avais de l'argent, …", "Tras si: nunca condicional."], ["S'il pleuvra, je reste.", "S'il pleut, je reste.", "Tras si: nunca futuro."], ["Si il vient…", "S'il vient…", "si + il = s'il."]] }
  ],
  ejemplos: [
    { sit: "«Si tuviera tiempo, viajaría.»", resp: "Si j'avais le temps, je voyagerais.", pasos: ["imparfait → conditionnel."], porque: "Condición." },
    { sit: "«Si vienes, te lo enseño.»", resp: "Si tu viens, je te le montre.", pasos: ["présent → présent."], porque: "Condición real." },
    { sit: "«No sé si vendrá.»", resp: "Je ne sais pas s'il viendra.", pasos: ["si interrogativo: futuro permitido."], porque: "Pregunta indirecta." }
  ],
  comprueba: [
    { q: "Tras el si de condición…", o: ["nunca va futuro ni condicional", "va siempre condicional"], a: 0, b: "gr", porque: "Regla." },
    { q: "«Je me demande s'il viendra» es…", o: ["correcta: si interrogativo", "incorrecta"], a: 0, b: "gr", porque: "Excepción." },
    { q: "si + il se escribe…", o: ["s'il", "si il"], a: 0, b: "gr", porque: "Elisión." }
  ],
  practica: [
    { fase: "guiada", c: ["b4st-condition", "b4st-question"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["S'il pleut, je reste.", 0], ["Si j'étais toi, j'irais.", 0], ["Si tu avais appelé, je serais venu.", 0], ["Je me demande s'il viendra.", 0], ["S'il pleuvra, je reste.", 1], ["Si j'aurais su, je serais venu.", 1], ["Si tu serais là, ce serait mieux.", 1], ["Si il vient, dis-le-moi.", 1]], pista: "¿Condición o pregunta?", why: "Concordancia con si." },
    { fase: "guiada", c: ["b4st-condition"], k: "choice", ask: "«Si tuviera tiempo, viajaría.»", q: "Elige.", o: ["Si j'avais le temps, je voyagerais.", "Si j'aurais le temps, je voyagerais."], a: 0, pista: "Tras si.", why: "<b>avais</b>." },
    { fase: "guiada", c: ["b4st-question"], k: "choice", ask: "«No sé si vendrá.»", q: "Elige.", o: ["Je ne sais pas s'il viendra.", "Je ne sais pas s'il vient demain si."], a: 0, pista: "Si interrogativo.", why: "Futuro permitido." },
    { fase: "indep", c: ["b4st-condition"], k: "choice", ask: "«Si vienes, te lo enseño.»", q: "Elige.", o: ["Si tu viens, je te le montre.", "Si tu viendras, je te le montre."], a: 0, why: "<b>viens</b>." },
    { fase: "indep", c: ["b4st-condition"], k: "fill", ask: "Presente de être (tu).", q: "Si tu ___ fatigué, repose-toi.", acc: ["es"], why: "<b>es</b>." },
    { fase: "indep", c: ["b4st-condition"], k: "fill", ask: "Plus-que-parfait de partir (nous).", q: "Si nous ___ plus tôt, nous aurions eu le train.", acc: ["étions partis"], why: "<b>étions partis</b>." },
    { fase: "aplica", c: ["b4st-condition"], k: "match", ask: "Une cada condición con su consecuencia.", q: "Si… → …", pairs: [["Si tu veux,", "on peut sortir."], ["Si j'étais riche,", "j'achèterais une île."], ["Si elle avait su,", "elle serait venue."], ["S'il fait beau demain,", "on ira à la plage."]], why: "Concordancias." },
    { fase: "aplica", c: ["b4st-condition"], k: "spot", ask: "Encuentra el error.", s: "Si je [serais] ministre , je baisserais les impôts .", fix: "étais", why: "<b>étais</b>." },
    { fase: "aplica", c: ["b4st-condition"], k: "spot", ask: "Encuentra el error.", s: "S'il [pleuvra] demain , nous resterons à la maison .", fix: "pleut", why: "<b>pleut</b>." },
    { fase: "dominio", c: ["b4st-condition"], k: "order", ask: "Ordena: «Si hace buen tiempo, saldremos».", tokens: ["S'il fait beau,", "nous", "sortirons"], why: "<b>S'il fait beau, nous sortirons</b>" },
    { fase: "dominio", c: ["b4st-question"], k: "choice", ask: "«Me pregunto si vendrá.» (si interrogativo)", q: "Elige.", o: ["Je me demande s'il viendra.", "Je me demande s'il vienne."], a: 0, why: "Si interrogativo: futuro permitido." },
    { fase: "dominio", c: ["b4st-condition", "b4st-question"], k: "listen", say: "Si j'avais plus de temps libre, j'apprendrais à jouer du piano.", acc: ["Si j'avais plus de temps libre, j'apprendrais à jouer du piano."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Si j'avais plus de temps libre, j'apprendrais à jouer du piano.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B2.2·4 · Léxico que se confunde ================================ */
/* ── 33. Amener, emmener, apporter, emporter ── */
E["rem-amener-emmener"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Amener, emmener, apporter, emporter",
  objetivo: {
    que: "Vas a elegir entre los cuatro verbos de «llevar / traer»: -mener con personas, -porter con cosas; a- hacia el destino, em- al salir.",
    corto: "Tu peux amener ta sœur ce soir. · J'emmène mon fils chez le médecin. · Une pizza à emporter, s'il vous plaît.",
    podras: ["Usar amener (traer a una persona) y emmener (llevarse a una persona).", "Usar apporter (traer una cosa) y emporter (llevarse una cosa).", "Usar à emporter (para llevar) y recordar la regla: personas → -mener; cosas → -porter."],
    iconos: ["ic2/amigos", "ic2/bolsa", "ic2/regalo"],
    previos: ["Ir y venir (A1, lección 35) y los verbos precisos (B1.2, lección 57)."],
    capacidad: "Ahora dices bien quién trae o se lleva a quién y qué."
  },
  requiere: R("av2-venir", "b2vp2-autres"), recupera: ["b2vp2-autres"],
  conceptos: {
    "b4am-personnes": { n: "personas (-mener): amener qqn = traer a alguien (Amène ton ami à la fête); emmener qqn = llevarse a alguien (J'emmène les enfants à l'école, j'emmène ma copine au restaurant)", b: "gr" },
    "b4am-choses": { n: "cosas (-porter): apporter qqch = traer algo (Apporte le dessert, Apporte ta guitare !); emporter qqch = llevarse algo (emporter son parapluie, son passeport); à emporter = para llevar", b: "gr" }
  },
  video: {
    titulo: "Llevar y traer", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "emmener", seg: [
        { es: "Hola. Personas con -mener, cosas con -porter." } ] },
      { v: "frase", filas: [
          { nota: "traer persona", p: 1, partes: [["Tu peux amener ta sœur ce soir.", "-", 1]] },
          { nota: "llevarse persona", p: 2, partes: [["J'emmène mon fils chez le médecin.", "-", 2]] },
          { nota: "para llevar", p: 3, partes: [["Une pizza à emporter, s'il vous plaît.", "-", 3]] } ], seg: [
        { fr: "Tu peux amener ta sœur ce soir.", p: 1 }, { fr: "J'emmène mon fils chez le médecin.", p: 2 }, { fr: "Une pizza à emporter, s'il vous plaît.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llevo a mi hija al colegio.»", o: ["J'emmène ma fille à l'école.", "J'apporte ma fille à l'école."], a: 0,
        bien: "¡Sí! Persona: -mener.", mal: "Persona: emmener.",
        seg: [ { es: "Pausa. ¿Persona o cosa?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["amener", "emmener", "apporter", "emporter", "à emporter"], seg: [
        { es: "Persona o cosa; hacia aquí o hacia fuera.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pícnic", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo organizan un pícnic en el parque con amigos.",
    pj: PJ,
    lineas: [
      ["hugo", "Je peux amener mon copain ? — Bien sûr ! Et tu peux apporter des fleurs pour la table.", "¿Puedo traer a mi novio? — ¡Claro! Y puedes traer flores para la mesa."],
      ["camila", "Moi, j'emmène les enfants de ma voisine au parc et j'apporte un goûter. Apporte ta guitare !", "Yo llevo a los hijos de mi vecina al parque y llevo una merienda. ¡Trae tu guitarra!"],
      ["hugo", "Et le dessert ? — J'achète une tarte à emporter à la boulangerie.", "¿Y el postre? — Compro una tarta para llevar en la panadería."],
      ["camila", "N'oublie pas d'emporter ton parapluie, on ne sait jamais. Et ce soir, tu m'emmènes au restaurant italien ?", "No olvides llevarte el paraguas, nunca se sabe. ¿Y esta noche me llevas al restaurante italiano?"]
    ],
    fijate: "Fíjate: amener mon copain, j'emmène les enfants, tu m'emmènes (personas); apporter des fleurs, j'apporte un goûter, apporte ta guitare, emporter ton parapluie (cosas); à emporter (para llevar)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro verbos, dos reglas",
      idea: "Regla 1: personas (y animales) → -mener; cosas → -porter. Regla 2: a- = hacia aquí, hacia el destino (traer); em- = salir con ello (llevarse). amener qqn = traer a alguien (Amène ton ami à la fête). emmener qqn = llevarse a alguien (J'emmène les enfants à l'école). apporter qqch = traer algo (Apporte du vin). emporter qqch = llevarse algo (N'oublie pas d'emporter ton parapluie). En la tienda: à emporter = para llevar.",
      intro: "Toca cada verbo.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["J'emmène ma fille à l'école.", "Llevo a mi hija al colegio.", "emmener"],
        ["Apporte le dessert.", "Trae el postre.", "apporter"],
        ["à emporter", "para llevar", "emporter"],
        ["Tu peux amener ton copain à la soirée. · amener", "Puedes traer a tu novio a la fiesta.", "amener"],
        ["N'oublie pas d'emporter ton passeport en voyage. · emporter", "No olvides llevarte el pasaporte de viaje.", "emporter"],
        ["amener = traer a una persona · emmener = llevarse a una persona · apporter = traer una cosa · emporter = llevarse una cosa", "definiciones", "resumen"],
        ["___ un ami · ___ les enfants · ___ sa grand-mère · ___ le chien", "a un amigo · a los niños · a su abuela · al perro", "Persona (-mener)"],
        ["___ un gâteau · ___ des fleurs · ___ son ordinateur · ___ une valise", "un pastel · flores · su ordenador · una maleta", "Cosa (-porter)"],
        ["Ce soir, j'emmène ma copine au restaurant italien. · emmène", "Esta noche llevo a mi novia al restaurante italiano.", "emmener"],
        ["Apporte ta guitare !", "¡Trae tu guitarra!", "apporter"],
        ["J'emmène les enfants au parc et j'apporte un goûter.", "Llevo a los niños al parque y llevo una merienda.", "emmener / apporter"]
      ]],
      ej: [["Tu peux amener ta sœur ce soir.", "Puedes traer a tu hermana esta noche."], ["J'emmène mon fils chez le médecin.", "Llevo a mi hijo al médico."], ["Une pizza à emporter, s'il vous plaît.", "Una pizza para llevar, por favor."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'apporte les enfants à l'école.", "J'emmène les enfants à l'école.", "Personas: -mener."], ["J'emporte ma copine au restaurant.", "J'emmène ma copine au restaurant.", "Persona: emmener."], ["Une pizza à emmener", "Une pizza à emporter", "Cosa: -porter."]] }
  ],
  ejemplos: [
    { sit: "«Llevo a mi hija al colegio.»", resp: "J'emmène ma fille à l'école.", pasos: ["Persona + me la llevo."], porque: "emmener." },
    { sit: "«Trae el postre.»", resp: "Apporte le dessert.", pasos: ["Cosa + hacia aquí."], porque: "apporter." },
    { sit: "«Para llevar»", resp: "à emporter", pasos: ["Cosa que sale."], porque: "emporter." }
  ],
  comprueba: [
    { q: "Con personas se usa…", o: ["-mener", "-porter"], a: 0, b: "gr", porque: "amener, emmener." },
    { q: "«Traer una cosa» es…", o: ["apporter", "amener"], a: 0, b: "gr", porque: "Cosa + a-." },
    { q: "«Llevarse a alguien» es…", o: ["emmener", "emporter"], a: 0, b: "gr", porque: "Persona + em-." }
  ],
  practica: [
    { fase: "guiada", c: ["b4am-personnes", "b4am-choses"], k: "sort", ask: "¿Persona (-mener) o cosa (-porter)?", q: "Clasifica.", cats: ["Persona (-mener)", "Cosa (-porter)"], items: [["___ un ami", 0], ["___ les enfants", 0], ["___ sa grand-mère", 0], ["___ le chien", 0], ["___ un gâteau", 1], ["___ des fleurs", 1], ["___ son ordinateur", 1], ["___ une valise", 1]], pista: "¿Camina solo?", why: "Persona o cosa." },
    { fase: "guiada", c: ["b4am-personnes"], k: "choice", ask: "«Llevo a mi hija al colegio.»", q: "Elige.", o: ["J'emmène ma fille à l'école.", "J'apporte ma fille à l'école."], a: 0, pista: "Persona.", why: "<b>emmène</b>." },
    { fase: "guiada", c: ["b4am-choses"], k: "choice", ask: "«Trae el postre.»", q: "Elige.", o: ["Apporte le dessert.", "Amène le dessert."], a: 0, pista: "Cosa.", why: "<b>Apporte</b>." },
    { fase: "indep", c: ["b4am-choses"], k: "choice", ask: "«Para llevar»", q: "Elige.", o: ["à emporter", "à emmener"], a: 0, why: "<b>à emporter</b>." },
    { fase: "indep", c: ["b4am-personnes"], k: "fill", ask: "Traer a una persona.", q: "Tu peux ___ ton copain à la soirée.", acc: ["amener"], why: "<b>amener</b>." },
    { fase: "indep", c: ["b4am-choses"], k: "fill", ask: "Llevarse una cosa.", q: "N'oublie pas d'___ ton passeport en voyage.", acc: ["emporter"], why: "<b>emporter</b>." },
    { fase: "aplica", c: ["b4am-personnes", "b4am-choses"], k: "match", ask: "Une cada verbo con su sentido.", q: "Verbo → sentido", pairs: [["amener", "traer a una persona"], ["emmener", "llevarse a una persona"], ["apporter", "traer una cosa"], ["emporter", "llevarse una cosa"]], why: "Verbos." },
    { fase: "aplica", c: ["b4am-personnes"], k: "spot", ask: "Encuentra el error.", s: "Ce soir , j'[emporte] ma copine au restaurant italien .", fix: "emmène", why: "<b>emmène</b>." },
    { fase: "aplica", c: ["b4am-choses"], k: "spot", ask: "Encuentra el error.", s: "Pour le pique-nique , j'[amène] un gâteau au chocolat .", fix: "apporte", why: "<b>apporte</b>." },
    { fase: "dominio", c: ["b4am-choses"], k: "order", ask: "Ordena: «¡Trae tu guitarra!»", tokens: ["Apporte", "ta guitare", "!"], why: "<b>Apporte ta guitare !</b>" },
    { fase: "dominio", c: ["b4am-personnes"], k: "choice", ask: "Con personas se usa…", q: "Elige.", o: ["-mener", "-porter"], a: 0, es: true, why: "-mener." },
    { fase: "dominio", c: ["b4am-personnes", "b4am-choses"], k: "listen", say: "J'emmène les enfants au parc et j'apporte un goûter.", acc: ["J'emmène les enfants au parc et j'apporte un goûter."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'emmène les enfants au parc et j'apporte un goûter.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 34. Savoir ou connaître ? ── */
E["rem-savoir-connaitre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Savoir ou connaître ?",
  objetivo: {
    que: "Vas a elegir entre savoir (un dato, una información, una habilidad) y connaître (personas, lugares, obras).",
    corto: "Tu sais où est la gare ? · Je connais très bien ce quartier. · Elle sait parler quatre langues.",
    podras: ["Usar savoir + infinitivo para una habilidad: Il sait conduire, Je sais nager.", "Usar savoir + que, si, où, pourquoi, quand: Je ne sais pas où il habite.", "Usar connaître + nombre (personas, lugares, obras): Tu connais Marie ? Je connais Paris; y savoir + nombre solo con datos aprendidos (savoir la réponse)."],
    iconos: ["ic2/bombilla", "ic2/amigos", "ic2/mundo"],
    previos: ["Savoir y connaître (A1, lección 61)."],
    capacidad: "Ahora no dices nunca «je sais Paris»."
  },
  requiere: R("sc-savoir", "sc-conn"), recupera: ["sc-conn"],
  conceptos: {
    "b4sv-savoir": { n: "savoir + infinitivo (habilidad: savoir conduire, nager, jouer du piano), + que / si / où / pourquoi (Je ne sais pas où il habite, s'il viendra), + nombre de un dato aprendido (savoir la réponse, la date)", b: "gr" },
    "b4sv-connaitre": { n: "connaître + nombre: personas (Tu connais mon frère ? Tu connais Julie ?), lugares (Lyon, ce quartier, un bon hôtel), obras (ce film, ce roman, ce chanteur); nous connaissons", b: "gr" }
  },
  video: {
    titulo: "Saber o conocer", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "je connais", seg: [
        { es: "Hola. Datos y habilidades: savoir. Personas y lugares: connaître." } ] },
      { v: "frase", filas: [
          { nota: "información", p: 1, partes: [["Tu sais où est la gare ?", "-", 1]] },
          { nota: "lugar", p: 2, partes: [["Je connais très bien ce quartier.", "-", 2]] },
          { nota: "habilidad", p: 3, partes: [["Elle sait parler quatre langues.", "-", 3]] } ], seg: [
        { fr: "Tu sais où est la gare ?", p: 1 }, { fr: "Je connais très bien ce quartier.", p: 2 }, { fr: "Elle sait parler quatre langues.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Conoces a mi hermano?»", o: ["Tu connais mon frère ?", "Tu sais mon frère ?"], a: 0,
        bien: "¡Sí! Persona: connaître.", mal: "Persona: connaître.",
        seg: [ { es: "Pausa. ¿Persona o dato?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["savoir + infinitivo", "savoir où / si", "connaître + persona", "connaître + lugar"], seg: [
        { es: "Savoir: dato. Connaître: persona, lugar, obra.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Perdidos en Nice", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo están de viaje en Nice.",
    pj: PJ,
    lineas: [
      ["camila", "Je connais bien cette ville, mais je ne sais pas où se trouve le musée.", "Conozco bien esta ciudad, pero no sé dónde está el museo."],
      ["hugo", "Moi, je connais un bon hôtel à Nice. Et je sais conduire : on peut louer une voiture.", "Yo conozco un buen hotel en Niza. Y sé conducir: podemos alquilar un coche."],
      ["camila", "Tu connais Julie, la nouvelle collègue ? Elle sait parler quatre langues !", "¿Conoces a Julie, la nueva compañera? ¡Sabe hablar cuatro idiomas!"],
      ["hugo", "Non, je ne la connais pas. Mais je sais qu'elle vient de Belgique. Tu sais la date de son anniversaire ?", "No, no la conozco. Pero sé que viene de Bélgica. ¿Sabes la fecha de su cumpleaños?"]
    ],
    fijate: "Fíjate: je connais cette ville, un bon hôtel, Julie (lugares y personas); je ne sais pas où, je sais conduire, elle sait parler, je sais qu'elle…, tu sais la date (dato, habilidad)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dato o persona",
      idea: "savoir = saber un dato, una información o una habilidad. savoir + infinitivo (habilidad aprendida): Il sait conduire, Je sais nager, Je sais jouer du piano. savoir + que / si / où / pourquoi / quand: Je sais que c'est vrai, Je ne sais pas où il habite, Je ne sais pas s'il viendra. savoir + nombre solo con datos aprendidos: savoir sa leçon, savoir la réponse, savoir la date. connaître = conocer personas, lugares u obras, siempre + nombre: Tu connais Marie ? Je connais Paris, Je connais ce livre, Nous connaissons un bon hôtel.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["Tu connais mon frère ?", "¿Conoces a mi hermano?", "connaître + persona"],
        ["Je sais nager.", "Sé nadar.", "savoir + infinitivo"],
        ["Je ne sais pas s'il viendra.", "No sé si vendrá.", "savoir + si"],
        ["Tu sais la réponse ? · sais", "¿Sabes la respuesta?", "savoir + dato"],
        ["Nous connaissons un bon hôtel à Nice. · connaissons", "Conocemos un buen hotel en Niza.", "connaître + lugar"],
        ["Je sais = jouer du piano. · Je connais = ce film. · Je ne sais pas = pourquoi il pleure. · Tu connais = tes voisins ?", "sé tocar el piano · conozco esta película · no sé por qué llora · ¿conoces a tus vecinos?", "pares"],
        ["___ conduire · ___ que c'est vrai · ___ où il habite · ___ la date", "conducir · que es verdad · dónde vive · la fecha", "savoir"],
        ["___ Lyon · ___ ce chanteur · ___ un bon médecin · ___ ce roman", "Lyon · a este cantante · a un buen médico · esta novela", "connaître"],
        ["Est-ce que tu connais Julie, la nouvelle collègue ? · connais", "¿Conoces a Julie, la nueva compañera?", "connaître + persona"],
        ["Je ne sais pas où il habite", "No sé dónde vive", "savoir + où"],
        ["Je connais bien cette ville, mais je ne sais pas où se trouve le musée.", "Conozco bien esta ciudad, pero no sé dónde está el museo.", "los dos"]
      ]],
      ej: [["Tu sais où est la gare ?", "¿Sabes dónde está la estación?"], ["Je connais très bien ce quartier.", "Conozco muy bien este barrio."], ["Elle sait parler quatre langues.", "Sabe hablar cuatro idiomas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je sais Paris.", "Je connais Paris.", "Lugares: connaître."], ["Tu sais Julie ?", "Tu connais Julie ?", "Personas: connaître."], ["Je connais nager.", "Je sais nager.", "Habilidad: savoir."]] }
  ],
  ejemplos: [
    { sit: "«¿Conoces a mi hermano?»", resp: "Tu connais mon frère ?", pasos: ["Persona."], porque: "connaître." },
    { sit: "«Sé nadar.»", resp: "Je sais nager.", pasos: ["Habilidad."], porque: "savoir." },
    { sit: "«No sé si vendrá.»", resp: "Je ne sais pas s'il viendra.", pasos: ["+ si."], porque: "savoir." }
  ],
  comprueba: [
    { q: "Con una persona se usa…", o: ["connaître", "savoir"], a: 0, b: "gr", porque: "Tu connais Marie ?" },
    { q: "Con un infinitivo se usa…", o: ["savoir", "connaître"], a: 0, b: "gr", porque: "Je sais nager." },
    { q: "«Je ne ___ pas où il habite.»", o: ["sais", "connais"], a: 0, b: "gr", porque: "+ où." }
  ],
  practica: [
    { fase: "guiada", c: ["b4sv-savoir", "b4sv-connaitre"], k: "sort", ask: "¿savoir o connaître?", q: "Clasifica.", cats: ["savoir", "connaître"], items: [["___ conduire", 0], ["___ que c'est vrai", 0], ["___ où il habite", 0], ["___ la date", 0], ["___ Lyon", 1], ["___ ce chanteur", 1], ["___ un bon médecin", 1], ["___ ce roman", 1]], pista: "¿Dato o persona / lugar / obra?", why: "savoir / connaître." },
    { fase: "guiada", c: ["b4sv-connaitre"], k: "choice", ask: "«¿Conoces a mi hermano?»", q: "Elige.", o: ["Tu connais mon frère ?", "Tu sais mon frère ?"], a: 0, pista: "Persona.", why: "<b>connais</b>." },
    { fase: "guiada", c: ["b4sv-savoir"], k: "choice", ask: "«Sé nadar.»", q: "Elige.", o: ["Je sais nager.", "Je connais nager."], a: 0, pista: "Habilidad.", why: "<b>sais</b>." },
    { fase: "indep", c: ["b4sv-savoir"], k: "choice", ask: "«No sé si vendrá.»", q: "Elige.", o: ["Je ne sais pas s'il viendra.", "Je ne connais pas s'il viendra."], a: 0, why: "<b>sais</b> + si." },
    { fase: "indep", c: ["b4sv-savoir"], k: "fill", ask: "«sabes» (dato).", q: "Tu ___ la réponse ?", acc: ["sais"], why: "<b>sais</b>." },
    { fase: "indep", c: ["b4sv-connaitre"], k: "fill", ask: "«conocemos» (lugar).", q: "Nous ___ un bon hôtel à Nice.", acc: ["connaissons"], why: "<b>connaissons</b>." },
    { fase: "aplica", c: ["b4sv-savoir", "b4sv-connaitre"], k: "match", ask: "Une cada inicio con su final.", q: "Inicio → final", pairs: [["Je sais", "jouer du piano."], ["Je connais", "ce film."], ["Je ne sais pas", "pourquoi il pleure."], ["Tu connais", "tes voisins ?"]], why: "Pares." },
    { fase: "aplica", c: ["b4sv-connaitre"], k: "spot", ask: "Encuentra el error.", s: "Est-ce que tu [sais] Julie , la nouvelle collègue ?", fix: "connais", why: "<b>connais</b>." },
    { fase: "aplica", c: ["b4sv-savoir"], k: "spot", ask: "Encuentra el error.", s: "Mon frère [connaît] parler trois langues .", fix: "sait", why: "<b>sait</b>." },
    { fase: "dominio", c: ["b4sv-savoir"], k: "order", ask: "Ordena: «No sé dónde vive».", tokens: ["Je ne sais pas", "où", "il habite"], why: "<b>Je ne sais pas où il habite</b>" },
    { fase: "dominio", c: ["b4sv-connaitre"], k: "choice", ask: "Con una persona se usa…", q: "Elige.", o: ["connaître", "savoir"], a: 0, why: "<b>connaître</b>." },
    { fase: "dominio", c: ["b4sv-savoir", "b4sv-connaitre"], k: "listen", say: "Je connais bien cette ville, mais je ne sais pas où se trouve le musée.", acc: ["Je connais bien cette ville, mais je ne sais pas où se trouve le musée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je connais bien cette ville, mais je ne sais pas où se trouve le musée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Julie", "Nice", "Belgique", "Lyon", "Paris", "Marie"], previo: [] }
};

/* ── 35. Très, beaucoup, trop, tellement : ne pas les confondre ── */
E["rem-tres-beaucoup"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Très, beaucoup, trop, tellement : ne pas les confondre",
  objetivo: {
    que: "Vas a distinguir très (con adjetivos y adverbios), beaucoup (con verbos y, con de, con nombres) y trop (exceso), sin decir nunca «très beaucoup».",
    corto: "Ce film est très drôle. · J'aime beaucoup la musique. · Il y a trop de voitures en ville.",
    podras: ["Usar très + adjetivo o adverbio: très intéressant, très vite.", "Usar verbo + beaucoup (J'aime beaucoup ce film) y beaucoup de + nombre (beaucoup de travail).", "Usar trop (demasiado: trop cher, trop de bruit) y très con las expresiones con avoir en registro corriente (j'ai très faim)."],
    iconos: ["ic2/rayo", "ic2/estrella", "ic2/lapiz"],
    previos: ["La cantidad (A2, lección 66) y los adverbios de intensidad (B2.1, lección 65)."],
    capacidad: "Ahora intensificas cualquier palabra con el adverbio correcto."
  },
  requiere: R("qt-nom", "qt-verbe", "b3it-fort", "b3it-faible"), recupera: ["qt-verbe"],
  conceptos: {
    "b4tb-tres": { n: "très + adjetivo o adverbio: très beau, très loin, très gentil, très souvent, très intéressant; también j'ai très faim (registro corriente); nunca «très beaucoup»", b: "gr" },
    "b4tb-beaucoup": { n: "verbo + beaucoup: travailler, manger, aimer, voyager beaucoup; beaucoup de + nombre: beaucoup de travail, beaucoup de parcs; trop = exceso: trop cher, trop vite, trop de bruit", b: "gr" }
  },
  video: {
    titulo: "Muy, mucho, demasiado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "très / beaucoup", seg: [
        { es: "Hola. Muy y mucho no se dicen igual en francés." } ] },
      { v: "frase", filas: [
          { nota: "adjetivo", p: 1, partes: [["Ce film est très drôle.", "-", 1]] },
          { nota: "verbo", p: 2, partes: [["J'aime beaucoup la musique.", "-", 2]] },
          { nota: "exceso", p: 3, partes: [["Il y a trop de voitures en ville.", "-", 3]] } ], seg: [
        { fr: "Ce film est très drôle.", p: 1 }, { fr: "J'aime beaucoup la musique.", p: 2 }, { fr: "Il y a trop de voitures en ville.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me gusta mucho.»", o: ["J'aime beaucoup.", "J'aime très beaucoup."], a: 0,
        bien: "¡Sí! Nunca très beaucoup.", mal: "Verbo + beaucoup, sin très.",
        seg: [ { es: "Pausa. ¿Adjetivo o verbo?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["très + adjetivo", "verbo + beaucoup", "beaucoup de + nombre", "trop", "trop de"], seg: [
        { es: "Adjetivo: très. Verbo: beaucoup. Exceso: trop.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo barrio", img: "bg-paris", yo: "camila",
    escena: "Camila le describe a Hugo su nuevo barrio.",
    pj: PJ,
    lineas: [
      ["camila", "J'aime beaucoup ce quartier : il est très calme et il y a beaucoup de parcs.", "Me gusta mucho este barrio: es muy tranquilo y hay muchos parques."],
      ["hugo", "Le mien, il y a trop de bruit et trop de voitures. Et les loyers sont trop chers !", "En el mío hay demasiado ruido y demasiados coches. ¡Y los alquileres son demasiado caros!"],
      ["camila", "Cette semaine, j'ai beaucoup travaillé, je suis épuisée. Mais mon voisin est très gentil.", "Esta semana trabajé mucho, estoy agotada. Pero mi vecino es muy amable."],
      ["hugo", "Ton voisin parle très vite, non ? — Oui, trop vite : je ne comprends rien !", "Tu vecino habla muy rápido, ¿no? — Sí, demasiado rápido: ¡no entiendo nada!"]
    ],
    fijate: "Fíjate: aime beaucoup, ai beaucoup travaillé (verbo); très calme, très gentil, très vite (adjetivo, adverbio); beaucoup de parcs (nombre); trop de bruit, trop chers, trop vite (exceso)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Qué modifica cada uno",
      idea: "très modifica adjetivos y adverbios: très grand, très intéressant, très vite, très souvent. beaucoup modifica verbos (Il travaille beaucoup, J'aime beaucoup ce film; en los tiempos compuestos va entre el auxiliar y el participio: J'ai beaucoup travaillé) y, con de, nombres (beaucoup de travail, beaucoup d'amis). trop = demasiado, exceso: trop cher, trop vite, trop de bruit. Nunca se dice «très beaucoup»: J'aime beaucoup / J'aime vraiment beaucoup. Con avoir faim, peur, envie, en registro corriente: j'ai très faim.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["J'aime beaucoup.", "Me gusta mucho.", "verbo"],
        ["très intéressant", "muy interesante", "adjetivo"],
        ["beaucoup de travail", "mucho trabajo", "nombre"],
        ["Ce pull est trop cher, je ne peux pas l'acheter. · trop", "Este jersey es demasiado caro, no puedo comprarlo.", "exceso"],
        ["Il parle très vite, je ne comprends rien. · très · trop", "Habla muy rápido, no entiendo nada.", "adverbio"],
        ["très = adjetivo / adverbio · beaucoup = verbo · beaucoup de = nombre · trop = exceso", "reglas", "resumen"],
        ["___ beau · ___ loin · ___ gentil · ___ souvent", "muy bonito · muy lejos · muy amable · muy a menudo", "très"],
        ["travailler ___ · manger ___ · aimer ___ · voyager ___", "trabajar mucho · comer mucho · gustar mucho · viajar mucho", "beaucoup"],
        ["J'ai beaucoup travaillé cette semaine, je suis épuisé. · beaucoup", "Trabajé mucho esta semana, estoy agotado.", "verbo"],
        ["Il y a trop de bruit", "Hay demasiado ruido", "exceso"],
        ["J'aime beaucoup ce quartier : il est très calme et il y a beaucoup de parcs.", "Me gusta mucho este barrio: es muy tranquilo y hay muchos parques.", "los tres"]
      ]],
      ej: [["Ce film est très drôle.", "Esta película es muy divertida."], ["J'aime beaucoup la musique.", "Me gusta mucho la música."], ["Il y a trop de voitures en ville.", "Hay demasiados coches en la ciudad."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'aime très beaucoup…", "J'aime beaucoup… / J'aime vraiment beaucoup…", "No combinar très con beaucoup."], ["J'ai très travaillé.", "J'ai beaucoup travaillé.", "Verbo: beaucoup."], ["beaucoup des amis", "beaucoup d'amis", "beaucoup de + nombre."]] }
  ],
  ejemplos: [
    { sit: "«Me gusta mucho.»", resp: "J'aime beaucoup.", pasos: ["Verbo."], porque: "beaucoup." },
    { sit: "«Muy interesante»", resp: "très intéressant", pasos: ["Adjetivo."], porque: "très." },
    { sit: "«Mucho trabajo»", resp: "beaucoup de travail", pasos: ["Nombre."], porque: "beaucoup de." }
  ],
  comprueba: [
    { q: "Con un adjetivo se usa…", o: ["très", "beaucoup"], a: 0, b: "gr", porque: "très beau." },
    { q: "Con un verbo se usa…", o: ["beaucoup", "très"], a: 0, b: "gr", porque: "J'aime beaucoup." },
    { q: "«Très beaucoup» es…", o: ["incorrecto", "correcto"], a: 0, b: "gr", porque: "No se combinan." }
  ],
  practica: [
    { fase: "guiada", c: ["b4tb-tres", "b4tb-beaucoup"], k: "sort", ask: "¿très o beaucoup?", q: "Clasifica.", cats: ["très", "beaucoup"], items: [["___ beau", 0], ["___ loin", 0], ["___ gentil", 0], ["___ souvent", 0], ["travailler ___", 1], ["manger ___", 1], ["aimer ___", 1], ["voyager ___", 1]], pista: "¿Adjetivo / adverbio o verbo?", why: "très / beaucoup." },
    { fase: "guiada", c: ["b4tb-beaucoup"], k: "choice", ask: "«Me gusta mucho.»", q: "Elige.", o: ["J'aime beaucoup.", "J'aime très beaucoup."], a: 0, pista: "Verbo.", why: "<b>beaucoup</b>." },
    { fase: "guiada", c: ["b4tb-tres"], k: "choice", ask: "«Muy interesante»", q: "Elige.", o: ["très intéressant", "beaucoup intéressant"], a: 0, pista: "Adjetivo.", why: "<b>très</b>." },
    { fase: "indep", c: ["b4tb-beaucoup"], k: "choice", ask: "«Mucho trabajo»", q: "Elige.", o: ["beaucoup de travail", "très de travail"], a: 0, why: "<b>beaucoup de</b>." },
    { fase: "indep", c: ["b4tb-beaucoup"], k: "fill", ask: "«demasiado»", q: "Ce pull est ___ cher, je ne peux pas l'acheter.", acc: ["trop"], why: "<b>trop</b>." },
    { fase: "indep", c: ["b4tb-tres"], k: "fill", ask: "«muy» (o «demasiado»)", q: "Il parle ___ vite, je ne comprends rien.", acc: ["très", "trop"], why: "<b>très</b> (o trop)." },
    { fase: "aplica", c: ["b4tb-tres", "b4tb-beaucoup"], k: "match", ask: "Une cada palabra con lo que modifica.", q: "Palabra → uso", pairs: [["très", "adjetivo / adverbio"], ["beaucoup", "verbo"], ["beaucoup de", "nombre"], ["trop", "exceso"]], why: "Usos." },
    { fase: "aplica", c: ["b4tb-beaucoup"], k: "spot", ask: "Encuentra el error.", s: "J'ai [très] travaillé cette semaine , je suis épuisé .", fix: "beaucoup", why: "<b>beaucoup</b>." },
    { fase: "aplica", c: ["b4tb-beaucoup"], k: "spot", ask: "Encuentra el error.", s: "Dans mon quartier , il y a [beaucoup des] parcs .", fix: "beaucoup de", why: "<b>beaucoup de</b>." },
    { fase: "dominio", c: ["b4tb-beaucoup"], k: "order", ask: "Ordena: «Hay demasiado ruido».", tokens: ["Il y a", "trop de", "bruit"], why: "<b>Il y a trop de bruit</b>" },
    { fase: "dominio", c: ["b4tb-tres"], k: "choice", ask: "Con un adjetivo se usa…", q: "Elige.", o: ["très", "beaucoup"], a: 0, why: "<b>très</b>." },
    { fase: "dominio", c: ["b4tb-tres", "b4tb-beaucoup"], k: "listen", say: "J'aime beaucoup ce quartier : il est très calme et il y a beaucoup de parcs.", acc: ["J'aime beaucoup ce quartier : il est très calme et il y a beaucoup de parcs.", "J'aime beaucoup ce quartier: il est très calme et il y a beaucoup de parcs."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'aime beaucoup ce quartier : il est très calme et il y a beaucoup de parcs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B2.2·5 · Cartas y correos útiles ================================ */
/* ── 36. Demander des informations par écrit ── */
E["rem-demande-information"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Demander des informations par écrit",
  objetivo: {
    que: "Vas a escribir un correo breve y claro para pedir información: asunto preciso, presentación en una frase, preguntas indirectas y agradecimiento.",
    corto: "Pourriez-vous m'indiquer les dates d'inscription ? · Je souhaiterais savoir si ce cours est accessible en ligne.",
    podras: ["Escribir un asunto preciso (Objet : Demande d'informations – Master de traduction) y presentarte en una frase.", "Hacer las preguntas en forma indirecta: Pourriez-vous m'indiquer… ? Je souhaiterais savoir si / combien / quand…", "Agradecer por anticipado: Je vous remercie par avance de votre réponse."],
    iconos: ["ic2/laptop", "ic2/pregunta", "ic2/pergamino"],
    previos: ["Ce que, ce qui, si (lección 6), las fórmulas de la carta (lección 10) y el correo argumentativo (B1.2, lección 8)."],
    capacidad: "Ahora pides información a una universidad o una empresa como es debido."
  },
  requiere: R("b1cp-demander", "b2ce-formules", "b4sy-indir", "b4lt-formules"), recupera: ["b4sy-indir"],
  conceptos: {
    "b4di-structure": { n: "estructura: Objet : Demande d'informations – … ; saludo formal; presentación en una frase (Étudiante colombienne, je souhaiterais obtenir des informations sur…); preguntas; Je vous remercie par avance de votre réponse; despedida", b: "gr" },
    "b4di-questions": { n: "preguntas indirectas: Pourriez-vous m'indiquer… ?, Je souhaiterais savoir si / combien / quand / ce que…, Merci de m'indiquer où…; nunca «savoir est-ce que» ni «qu'est-ce que» después de un verbo", b: "gr" }
  },
  video: {
    titulo: "Pedir información", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "Pourriez-vous m'indiquer… ?", seg: [
        { es: "Hola. Un correo breve, claro y cortés." } ] },
      { v: "frase", filas: [
          { nota: "pregunta", p: 1, partes: [["Pourriez-vous m'indiquer les dates d'inscription ?", "-", 1]] },
          { nota: "indirecta", p: 2, partes: [["Je souhaiterais savoir si ce cours est accessible en ligne.", "-", 2]] },
          { nota: "agradecer", p: 3, partes: [["Je vous remercie par avance de votre réponse.", "-", 3]] } ], seg: [
        { fr: "Pourriez-vous m'indiquer les dates d'inscription ?", p: 1 }, { fr: "Je souhaiterais savoir si ce cours est accessible en ligne.", p: 2 }, { fr: "Je vous remercie par avance de votre réponse.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Desearía saber si quedan plazas.»", o: ["Je souhaiterais savoir s'il reste des places.", "Je souhaiterais savoir est-ce qu'il reste des places."], a: 0,
        bien: "¡Sí! Indirecta: si.", mal: "Pregunta indirecta: si.",
        seg: [ { es: "Pausa. Si, no est-ce que." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Objet : Demande d'informations", "Pourriez-vous m'indiquer", "Je souhaiterais savoir si", "par avance"], seg: [
        { es: "Asunto, presentación, preguntas, gracias.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El máster de traducción", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe a una universidad para pedir información sobre un máster.",
    pj: PJ,
    lineas: [
      ["camila", "Objet : Demande d'informations – Master de traduction. Madame, Monsieur, étudiante colombienne, je souhaiterais obtenir des informations sur votre master.", "Asunto: Solicitud de información – Máster de traducción. Señora, señor: estudiante colombiana, desearía obtener información sobre su máster."],
      ["hugo", "Et tes questions ? Pas « Je voudrais savoir est-ce que… » !", "¿Y tus preguntas? ¡No «Quisiera saber es que…»!"],
      ["camila", "« Pourriez-vous m'indiquer les dates d'inscription ? Je souhaiterais savoir s'il reste des places et combien coûte l'inscription. »", "«¿Podría indicarme las fechas de inscripción? Desearía saber si quedan plazas y cuánto cuesta la inscripción.»"],
      ["hugo", "Parfait. Et pour finir ? — « Je vous remercie par avance de l'attention que vous porterez à ma demande. »", "Perfecto. ¿Y para terminar? — «Le agradezco de antemano la atención que preste a mi solicitud.»"]
    ],
    fijate: "Fíjate: Objet : Demande d'informations, étudiante colombienne, je souhaiterais…, Pourriez-vous m'indiquer, savoir s'il reste, combien coûte (indirectas), Je vous remercie par avance."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Estructura y preguntas indirectas",
      idea: "1. Asunto preciso: Objet : Demande d'informations – Licence de droit. 2. Saludo formal: Madame, Monsieur, 3. Presentación en una frase: Étudiante colombienne / Étudiant en master, je souhaiterais obtenir des informations sur… 4. Preguntas concretas, separadas o numeradas, en forma indirecta: Pourriez-vous m'indiquer… ? Je souhaiterais savoir si… / combien… / quand… Merci de m'indiquer où… (nunca «savoir est-ce que», «qu'est-ce que» ni inversión dentro de la indirecta). 5. Agradecimiento: Je vous remercie par avance de votre réponse. 6. Despedida formal.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Je souhaiterais savoir s'il reste des places.", "Desearía saber si quedan plazas.", "pregunta"],
        ["Je vous remercie par avance.", "Le agradezco de antemano.", "agradecer"],
        ["Objet : Demande d'informations – Licence de droit", "Asunto: Solicitud de información – Grado en Derecho", "asunto"],
        ["Pourriez-vous m'indiquer les horaires d'ouverture ? · indiquer", "¿Podría indicarme el horario de apertura?", "pregunta"],
        ["Je voudrais savoir combien coûte l'inscription. · combien", "Quisiera saber cuánto cuesta la inscripción.", "pregunta"],
        ["asunto = Objet : Demande d'informations · presentación = Étudiant en master, je… · pregunta = Pourriez-vous m'indiquer… ? · agradecimiento = Je vous remercie par avance.", "partes", "resumen"],
        ["Je voudrais savoir si… · Pourriez-vous me dire quand… · J'aimerais savoir combien… · Merci de m'indiquer où…", "Quisiera saber si… · ¿Podría decirme cuándo…? · Me gustaría saber cuánto… · Le ruego me indique dónde…", "Correcta"],
        ["Je voudrais savoir est-ce que… · Pourriez-vous me dire quand est-ce que… · J'aimerais savoir combien ça coûte-t-il… · Merci de m'indiquer où est-ce que…", "formas mezcladas", "Incorrecta"],
        ["Je souhaiterais savoir ce que je dois apporter le jour de l'examen. · ce", "Desearía saber qué debo llevar el día del examen.", "ce que"],
        ["Pourriez-vous m'indiquer le prix ?", "¿Podría indicarme el precio?", "pregunta"],
        ["Je vous remercie par avance de l'attention que vous porterez à ma demande.", "Le agradezco de antemano la atención que preste a mi solicitud.", "agradecer"]
      ]],
      ej: [["Pourriez-vous m'indiquer les dates d'inscription ?", "¿Podría indicarme las fechas de inscripción?"], ["Je souhaiterais savoir si ce cours est accessible en ligne.", "Desearía saber si este curso está disponible en línea."], ["Je vous remercie par avance de votre réponse.", "Le agradezco de antemano su respuesta."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je voudrais savoir est-ce que le cours est en ligne.", "Je voudrais savoir si le cours est en ligne.", "Pregunta indirecta: si."], ["Je souhaiterais savoir qu'est-ce que je dois apporter.", "Je souhaiterais savoir ce que je dois apporter.", "Indirecta: ce que."], ["Objet : Question", "Objet : Demande d'informations – Master de traduction", "Asunto preciso."]] }
  ],
  ejemplos: [
    { sit: "«Desearía saber si quedan plazas.»", resp: "Je souhaiterais savoir s'il reste des places.", pasos: ["si + frase."], porque: "Indirecta." },
    { sit: "«De antemano…» (agradecer)", resp: "Je vous remercie par avance.", pasos: ["par avance."], porque: "Agradecer." },
    { sit: "Asunto para un correo a una universidad:", resp: "Objet : Demande d'informations – Licence de droit", pasos: ["Preciso."], porque: "Asunto." }
  ],
  comprueba: [
    { q: "Después de «savoir» va…", o: ["si", "est-ce que"], a: 0, b: "gr", porque: "Indirecta." },
    { q: "«Pourriez-vous m'indiquer… ?» es…", o: ["una pregunta cortés", "una despedida"], a: 0, b: "gr", porque: "Condicional." },
    { q: "El asunto debe ser…", o: ["preciso", "muy general"], a: 0, b: "gr", porque: "Claridad." }
  ],
  practica: [
    { fase: "guiada", c: ["b4di-questions"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Je voudrais savoir si…", 0], ["Pourriez-vous me dire quand…", 0], ["J'aimerais savoir combien…", 0], ["Merci de m'indiquer où…", 0], ["Je voudrais savoir est-ce que…", 1], ["Pourriez-vous me dire quand est-ce que…", 1], ["J'aimerais savoir combien ça coûte-t-il…", 1], ["Merci de m'indiquer où est-ce que…", 1]], pista: "Indirecta: sin est-ce que ni inversión.", why: "Preguntas indirectas." },
    { fase: "guiada", c: ["b4di-questions"], k: "choice", ask: "«Desearía saber si quedan plazas.»", q: "Elige.", o: ["Je souhaiterais savoir s'il reste des places.", "Je souhaiterais savoir est-ce qu'il reste des places."], a: 0, pista: "si.", why: "<b>s'il</b>." },
    { fase: "guiada", c: ["b4di-structure"], k: "choice", ask: "«Le agradezco de antemano.»", q: "Elige.", o: ["Je vous remercie par avance.", "Merci d'avance, bisous !"], a: 0, pista: "Formal.", why: "<b>par avance</b>." },
    { fase: "indep", c: ["b4di-structure"], k: "choice", ask: "Asunto para un correo a una universidad:", q: "Elige.", o: ["Objet : Demande d'informations – Licence de droit", "Objet : Salut !"], a: 0, why: "Preciso." },
    { fase: "indep", c: ["b4di-questions"], k: "fill", ask: "«indicar»", q: "Pourriez-vous m'___ les horaires d'ouverture ?", acc: ["indiquer"], why: "<b>indiquer</b>." },
    { fase: "indep", c: ["b4di-questions"], k: "fill", ask: "«cuánto»", q: "Je voudrais savoir ___ coûte l'inscription.", acc: ["combien"], why: "<b>combien</b>." },
    { fase: "aplica", c: ["b4di-structure"], k: "match", ask: "Une cada parte con su fórmula.", q: "Parte → fórmula", pairs: [["asunto", "Objet : Demande d'informations"], ["presentación", "Étudiant en master, je…"], ["pregunta", "Pourriez-vous m'indiquer… ?"], ["agradecimiento", "Je vous remercie par avance."]], why: "Partes." },
    { fase: "aplica", c: ["b4di-questions"], k: "spot", ask: "Encuentra el error.", s: "Je souhaiterais savoir [qu'est-ce] que je dois apporter le jour de l'examen .", fix: "ce", why: "<b>ce</b> que." },
    { fase: "aplica", c: ["b4di-questions"], k: "spot", ask: "Encuentra el error.", s: "Je voudrais savoir [est-ce que] le cours est en ligne .", fix: "si", why: "<b>si</b>." },
    { fase: "dominio", c: ["b4di-questions"], k: "order", ask: "Ordena: «¿Podría indicarme el precio?»", tokens: ["Pourriez-vous", "m'indiquer", "le prix ?"], why: "<b>Pourriez-vous m'indiquer le prix ?</b>" },
    { fase: "dominio", c: ["b4di-questions"], k: "choice", ask: "Después de «savoir» va…", q: "Elige.", o: ["si", "est-ce que"], a: 0, why: "<b>si</b>." },
    { fase: "dominio", c: ["b4di-structure", "b4di-questions"], k: "listen", say: "Je vous remercie par avance de l'attention que vous porterez à ma demande.", acc: ["Je vous remercie par avance de l'attention que vous porterez à ma demande."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vous remercie par avance de l'attention que vous porterez à ma demande.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 37. Présenter ses excuses par écrit ── */
E["rem-lettre-excuse"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Présenter ses excuses par écrit",
  objetivo: {
    que: "Vas a escribir una disculpa formal: reconocer el problema, explicar la causa, proponer una solución y comprometerte a que no se repita.",
    corto: "Je vous prie de bien vouloir excuser mon absence. · Ce retard est dû à un problème technique.",
    podras: ["Reconocer y disculparte en registro formal: Je tiens à vous présenter mes excuses pour…; Je vous prie de bien vouloir excuser…", "Explicar la causa (Ce retard est dû à…, En raison de…) y reparar (Afin de réparer cette erreur, je vous propose…).", "Comprometerte con el subjuntivo: Je veillerai à ce que cela ne se reproduise pas."],
    iconos: ["ic2/pergamino", "ic2/corazon", "ic2/candado"],
    previos: ["Disculparse (A2, lección 50), las fórmulas de la carta (lección 10) y el subjuntivo (lección 7)."],
    capacidad: "Ahora pides disculpas por escrito sin perder la compostura."
  },
  requiere: R("ex-pardon", "ex-repondre", "b4lt-formules", "b4sj-quand"), recupera: ["ex-pardon"],
  conceptos: {
    "b4ex-reconnaitre": { n: "reconocer y disculparse: Je tiens à vous présenter mes (plus sincères) excuses pour…; Je vous prie de bien vouloir excuser…; Veuillez accepter mes excuses; Je regrette sincèrement…; explicar: Ce retard est dû à… (dû con acento), En raison de…", b: "gr" },
    "b4ex-reparer": { n: "reparar y comprometerse: Afin de réparer cette erreur, je vous propose…; Je veillerai à ce que cela ne se reproduise pas (+ subjuntivo); Cela ne se reproduira plus", b: "gr" }
  },
  video: {
    titulo: "Pedir disculpas por escrito", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Je vous prie d'excuser", seg: [
        { es: "Hola. Reconocer, explicar, reparar y comprometerse." } ] },
      { v: "frase", filas: [
          { nota: "disculparse", p: 1, partes: [["Je vous prie de bien vouloir excuser mon absence.", "-", 1]] },
          { nota: "causa", p: 2, partes: [["Ce retard est dû à un problème technique.", "-", 2]] },
          { nota: "compromiso", p: 3, partes: [["Je veillerai à ce que cela ne se reproduise pas.", "-", 3]] } ], seg: [
        { fr: "Je vous prie de bien vouloir excuser mon absence.", p: 1 }, { fr: "Ce retard est dû à un problème technique.", p: 2 }, { fr: "Je veillerai à ce que cela ne se reproduise pas.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Disculpa formal:", o: ["Je vous prie de bien vouloir excuser ce retard.", "Oups, désolé !"], a: 0,
        bien: "¡Sí! Registro formal.", mal: "En una carta: Je vous prie d'excuser…",
        seg: [ { es: "Pausa. Formal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["mes excuses", "Je vous prie d'excuser", "est dû à", "Afin de réparer", "Je veillerai à ce que"], seg: [
        { es: "Cuatro pasos de una buena disculpa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pedido retrasado", img: "bg-biblioteca", yo: "camila",
    escena: "Camila trabaja en una tienda en línea y escribe a un cliente cuyo pedido llegó tarde.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu réponds au client mécontent ? Pas de « Oups, désolé ! », hein.", "¿Respondes al cliente descontento? Nada de «¡Uy, perdón!», eh."],
      ["camila", "Non : « Madame, je tiens à vous présenter mes plus sincères excuses pour ce retard de livraison. Ce retard est dû à une grève des transports. »", "No: «Señora, deseo presentarle mis más sinceras disculpas por este retraso en la entrega. Este retraso se debe a una huelga de transportes.»"],
      ["hugo", "Et ensuite ? — « Afin de réparer cette erreur, je vous propose un remboursement des frais de port. »", "¿Y luego? — «A fin de reparar este error, le propongo el reembolso de los gastos de envío.»"],
      ["camila", "Et pour finir : « Je veillerai à ce que cela ne se reproduise pas. Je vous prie de bien vouloir excuser ce désagrément. »", "Y para terminar: «Me aseguraré de que no vuelva a ocurrir. Le ruego disculpe esta molestia.»"]
    ],
    fijate: "Fíjate: je tiens à vous présenter mes excuses (reconocer), est dû à (causa), Afin de réparer… je vous propose (reparar), Je veillerai à ce que cela ne se reproduise pas (compromiso + subjuntivo), Je vous prie de bien vouloir excuser."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los cuatro pasos",
      idea: "1. Reconocer: Je tiens à vous présenter mes (plus sincères) excuses pour…; Je regrette sincèrement… 2. Explicar brevemente, sin excusas largas: Ce retard est dû à… (participio de devoir: dû, con acento); En raison de… 3. Reparar: Afin de réparer cette erreur, je vous propose… 4. Comprometerse: Je veillerai à ce que cela ne se reproduise pas (veiller à ce que + subjuntivo); Cela ne se reproduira plus. En registro formal se pide ser excusado: Je vous prie de bien vouloir excuser…; Veuillez accepter mes excuses. «Je m'excuse» se acepta en oral.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Je vous prie de bien vouloir excuser ce retard.", "Le ruego disculpe este retraso.", "disculparse"],
        ["C'est dû à une erreur.", "Se debe a un error.", "explicar"],
        ["Je veillerai à ce que cela ne se reproduise pas.", "Me aseguraré de que no se repita.", "comprometerse"],
        ["Je tiens à vous présenter mes excuses. · excuses", "Deseo presentarle mis disculpas.", "reconocer"],
        ["Afin de réparer cette erreur, je vous rembourse. · réparer", "A fin de reparar este error, le reembolso.", "reparar"],
        ["reconocer = Je tiens à m'excuser pour… · explicar = Ce retard est dû à… · reparar = Je vous propose… · comprometerse = Cela ne se reproduira plus.", "pasos", "resumen"],
        ["Je vous prie d'excuser… · Veuillez accepter mes excuses. · Je regrette sincèrement… · Je tiens à m'excuser…", "Le ruego disculpe… · Acepte mis disculpas · Lamento sinceramente… · Deseo disculparme…", "Formal"],
        ["Désolé ! · Pardon, hein ! · Oups ! · Excuse-moi, j'ai zappé.", "¡Perdón! · ¡Uy! · Perdona, se me pasó", "Oral / familiar"],
        ["Ce retard est dû à une grève des transports. · dû", "Este retraso se debe a una huelga de transportes.", "explicar"],
        ["Je vous prie de bien vouloir excuser mon absence", "Le ruego disculpe mi ausencia", "disculparse"],
        ["Je tiens à vous présenter mes plus sincères excuses pour ce malentendu.", "Deseo presentarle mis más sinceras disculpas por este malentendido.", "reconocer"]
      ]],
      ej: [["Je vous prie de bien vouloir excuser mon absence.", "Le ruego disculpe mi ausencia."], ["Ce retard est dû à un problème technique.", "Este retraso se debe a un problema técnico."], ["Je veillerai à ce que cela ne se reproduise pas.", "Me aseguraré de que no vuelva a ocurrir."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je m'excuse pour mon retard. (carta formal)", "Je vous prie d'excuser mon retard.", "En registro formal, se pide ser excusado."], ["Ce retard est du à…", "Ce retard est dû à…", "dû con acento."], ["Je veillerai à ce que cela ne se reproduit pas.", "… ne se reproduise pas.", "veiller à ce que + subjuntivo."]] }
  ],
  ejemplos: [
    { sit: "Disculparse en una carta formal:", resp: "Je vous prie de bien vouloir excuser ce retard.", pasos: ["Pedir ser excusado."], porque: "Formal." },
    { sit: "«Se debe a un error.»", resp: "C'est dû à une erreur.", pasos: ["dû à."], porque: "Causa." },
    { sit: "«Me aseguraré de que no se repita.»", resp: "Je veillerai à ce que cela ne se reproduise pas.", pasos: ["+ subjuntivo."], porque: "Compromiso." }
  ],
  comprueba: [
    { q: "«Oups, désolé !» en una carta formal…", o: ["no sirve", "es perfecto"], a: 0, b: "gr", porque: "Familiar." },
    { q: "«Veiller à ce que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "reproduise." },
    { q: "«Est dû à» explica…", o: ["la causa", "la solución"], a: 0, b: "gr", porque: "Causa." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ex-reconnaitre"], k: "sort", ask: "¿Formal u oral / familiar?", q: "Clasifica.", cats: ["Formal", "Oral / familiar"], items: [["Je vous prie d'excuser…", 0], ["Veuillez accepter mes excuses.", 0], ["Je regrette sincèrement…", 0], ["Je tiens à m'excuser…", 0], ["Désolé !", 1], ["Pardon, hein !", 1], ["Oups !", 1], ["Excuse-moi, j'ai zappé.", 1]], pista: "¿Carta o conversación?", why: "Registro." },
    { fase: "guiada", c: ["b4ex-reconnaitre"], k: "choice", ask: "Disculparse en una carta formal:", q: "Elige.", o: ["Je vous prie de bien vouloir excuser ce retard.", "Oups, désolé pour le retard !"], a: 0, pista: "Formal.", why: "Formal." },
    { fase: "guiada", c: ["b4ex-reconnaitre"], k: "choice", ask: "«Se debe a un error.»", q: "Elige.", o: ["C'est dû à une erreur.", "C'est du à une erreur."], a: 0, pista: "Acento.", why: "<b>dû</b>." },
    { fase: "indep", c: ["b4ex-reparer"], k: "choice", ask: "«Me aseguraré de que no se repita.»", q: "Elige.", o: ["Je veillerai à ce que cela ne se reproduise pas.", "Je veillerai que cela ne se reproduit pas."], a: 0, why: "<b>à ce que</b> + subjuntivo." },
    { fase: "indep", c: ["b4ex-reconnaitre"], k: "fill", ask: "«disculpas»", q: "Je tiens à vous présenter mes ___ .", acc: ["excuses"], why: "<b>excuses</b>." },
    { fase: "indep", c: ["b4ex-reparer"], k: "fill", ask: "«reparar»", q: "Afin de ___ cette erreur, je vous rembourse.", acc: ["réparer"], why: "<b>réparer</b>." },
    { fase: "aplica", c: ["b4ex-reconnaitre", "b4ex-reparer"], k: "match", ask: "Une cada paso con su fórmula.", q: "Paso → fórmula", pairs: [["reconocer", "Je tiens à m'excuser pour…"], ["explicar", "Ce retard est dû à…"], ["reparar", "Je vous propose…"], ["comprometerse", "Cela ne se reproduira plus."]], why: "Pasos." },
    { fase: "aplica", c: ["b4ex-reconnaitre"], k: "spot", ask: "Encuentra el error.", s: "Ce retard est [du] à une grève des transports .", fix: "dû", why: "<b>dû</b>." },
    { fase: "aplica", c: ["b4ex-reparer"], k: "spot", ask: "Encuentra el error.", s: "Je veillerai à ce que cela ne se [reproduit] pas .", fix: "reproduise", why: "<b>reproduise</b>." },
    { fase: "dominio", c: ["b4ex-reconnaitre"], k: "order", ask: "Ordena la disculpa.", tokens: ["Je vous prie", "de bien vouloir excuser", "mon absence"], why: "<b>Je vous prie de bien vouloir excuser mon absence</b>" },
    { fase: "dominio", c: ["b4ex-reparer"], k: "choice", ask: "«Veiller à ce que» va con…", q: "Elige.", o: ["subjuntivo", "indicativo"], a: 0, es: true, why: "Subjuntivo." },
    { fase: "dominio", c: ["b4ex-reconnaitre", "b4ex-reparer"], k: "listen", say: "Je tiens à vous présenter mes plus sincères excuses pour ce malentendu.", acc: ["Je tiens à vous présenter mes plus sincères excuses pour ce malentendu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je tiens à vous présenter mes plus sincères excuses pour ce malentendu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 38. Remercier par écrit ── */
E["rem-lettre-remerciement"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Remercier par écrit",
  objetivo: {
    que: "Vas a escribir un agradecimiento formal, breve y concreto: qué agradeces, por qué fue importante y una perspectiva de futuro.",
    corto: "Je vous remercie de m'avoir accordé cet entretien. · Je vous suis très reconnaissante de votre aide.",
    podras: ["Usar remercier de + infinitivo pasado (Je vous remercie de m'avoir reçu) y pour / de + nombre (pour votre accueil).", "Intensificar (chaleureusement, vivement, sincèrement) y expresar gratitud: Je vous suis très reconnaissant(e) de…", "Valorar (Votre aide m'a été précieuse), proyectar (J'espère avoir l'occasion de…) y despedirte (Au plaisir de vous revoir)."],
    iconos: ["ic2/corazon", "ic2/regalo", "ic2/pergamino"],
    previos: ["El infinitivo pasado (B1.2, lección 14) y el participio pasado (lección 3)."],
    capacidad: "Ahora agradeces por escrito después de una entrevista o una ayuda."
  },
  requiere: R("b2ip-forme", "b2ip-usage", "b4pp-avoir", "b4lt-formules"), recupera: ["b2ip-forme"],
  conceptos: {
    "b4rm-remercier": { n: "remercier de + infinitivo pasado (Je vous remercie de m'avoir reçu / accordé cet entretien; merci d'être venu) o pour / de + nombre (pour votre accueil, votre réponse); intensidad: chaleureusement, vivement, sincèrement; participio sin concordancia si el COD va detrás o es masculino (m'avoir reçu, dicho por un hombre)", b: "gr" },
    "b4rm-formules": { n: "fórmulas: Je vous suis très reconnaissant(e) de…; Votre aide m'a été précieuse (valorar); J'espère avoir l'occasion de… (proyectar); Au plaisir de vous revoir (prochainement)", b: "gr" }
  },
  video: {
    titulo: "Agradecer por escrito", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "reconnaissante", seg: [
        { es: "Hola. Un buen agradecimiento es breve y concreto." } ] },
      { v: "frase", filas: [
          { nota: "infinitivo pasado", p: 1, partes: [["Je vous remercie de m'avoir accordé cet entretien.", "-", 1]] },
          { nota: "gratitud", p: 2, partes: [["Je vous suis très reconnaissante de votre aide.", "-", 2]] },
          { nota: "despedida", p: 3, partes: [["Au plaisir de vous revoir prochainement.", "-", 3]] } ], seg: [
        { fr: "Je vous remercie de m'avoir accordé cet entretien.", p: 1 }, { fr: "Je vous suis très reconnaissante de votre aide.", p: 2 }, { fr: "Au plaisir de vous revoir prochainement.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Gracias por haberme ayudado.»", o: ["Merci de m'avoir aidé.", "Merci de m'aider hier."], a: 0,
        bien: "¡Sí! Acción pasada: infinitivo pasado.", mal: "Acción pasada: m'avoir aidé.",
        seg: [ { es: "Pausa. Avoir + participio." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["remercier de", "m'avoir reçu", "reconnaissant", "chaleureusement", "Au plaisir de"], seg: [
        { es: "Agradecer, valorar, proyectar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Después de la entrevista", img: "bg-cafe", yo: "camila",
    escena: "Camila escribe a la empresa que la entrevistó ayer.",
    pj: PJ,
    lineas: [
      ["camila", "« Madame, je vous remercie de me recevoir hier »… ça va ?", "«Señora, le agradezco recibirme ayer»… ¿está bien?"],
      ["hugo", "Non : l'action est passée. « Je vous remercie de m'avoir reçue hier. » Et ajoute « chaleureusement » ou « vivement ».", "No: la acción es pasada. «Le agradezco haberme recibido ayer.» Y añade «calurosamente» o «vivamente»."],
      ["camila", "« Je vous remercie chaleureusement de m'avoir accordé cet entretien. Je vous suis très reconnaissante pour votre accueil. Vos conseils m'ont été précieux. »", "«Le agradezco calurosamente haberme concedido esta entrevista. Le estoy muy agradecida por su acogida. Sus consejos me han sido muy valiosos.»"],
      ["hugo", "Et pour finir ? — « J'espère avoir l'occasion de rejoindre votre équipe. Au plaisir de vous revoir prochainement. »", "¿Y para terminar? — «Espero tener la oportunidad de unirme a su equipo. Un placer volver a verla pronto.»"]
    ],
    fijate: "Fíjate: de m'avoir reçue, de m'avoir accordé (infinitivo pasado), chaleureusement (intensidad), reconnaissante pour votre accueil, précieux (valorar), J'espère avoir l'occasion de, Au plaisir de vous revoir."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Agradecer, valorar, proyectar",
      idea: "remercier de + infinitivo pasado para una acción ya hecha: Je vous remercie de m'avoir reçu / accordé cet entretien; Merci de m'avoir aidé; Merci d'être venu. remercier pour (o de) + nombre: Je vous remercie pour votre accueil, merci pour votre réponse. Intensidad: chaleureusement, vivement, sincèrement. Gratitud: Je vous suis très reconnaissant(e) de / pour… Valorar: Votre aide m'a été précieuse. Proyectar: J'espère avoir l'occasion de… Despedirse: Au plaisir de vous revoir (prochainement). Ojo con la concordancia: un hombre escribe «m'avoir reçu»; una mujer, «m'avoir reçue».",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Función"], [
        ["Merci de m'avoir aidé.", "Gracias por haberme ayudado.", "agradecer"],
        ["Je vous suis reconnaissant.", "Le estoy agradecido.", "gratitud"],
        ["Au plaisir de vous revoir.", "Un placer volver a verle.", "despedirse"],
        ["Je vous remercie pour votre accueil chaleureux. · pour · de", "Le agradezco su calurosa acogida.", "pour + nombre"],
        ["Je tiens à vous remercier sincèrement pour votre patience. · sincèrement · vivement · chaleureusement", "Deseo agradecerle sinceramente su paciencia.", "intensidad"],
        ["Je vous remercie de… = agradecer · Votre aide m'a été précieuse. = valorar · J'espère avoir l'occasion de… = proyectar · Au plaisir de… = despedirse", "funciones", "resumen"],
        ["merci ___ m'avoir invité · merci ___ être venu · merci ___ m'avoir répondu · merci ___ avoir attendu", "gracias por haberme invitado · por haber venido · por haberme respondido · por haber esperado", "de + infinitivo"],
        ["merci ___ l'invitation · merci ___ votre visite · merci ___ votre réponse · merci ___ ce cadeau", "gracias por la invitación · por su visita · por su respuesta · por este regalo", "pour + nombre"],
        ["Je vous remercie de m'avoir reçu, Monsieur ; votre accueil m'a touché. · reçu", "Le agradezco haberme recibido, señor; su acogida me conmovió.", "concordancia"],
        ["Je vous remercie pour votre aide", "Le agradezco su ayuda", "pour + nombre"],
        ["Je vous remercie chaleureusement de m'avoir accueilli dans votre équipe.", "Le agradezco calurosamente haberme acogido en su equipo.", "agradecer"]
      ]],
      ej: [["Je vous remercie de m'avoir accordé cet entretien.", "Le agradezco haberme concedido esta entrevista."], ["Je vous suis très reconnaissante de votre aide.", "Le estoy muy agradecida por su ayuda."], ["Au plaisir de vous revoir prochainement.", "Un placer volver a verle pronto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vous remercie de me recevoir hier.", "Je vous remercie de m'avoir reçu hier.", "Acción pasada: infinitivo pasado."], ["Je vous remercie pour m'avoir aidé.", "Je vous remercie de m'avoir aidé.", "Con infinitivo: de."], ["Je suis reconnaissant à vous.", "Je vous suis reconnaissant.", "Pronombre delante: vous suis."]] }
  ],
  ejemplos: [
    { sit: "«Gracias por haberme ayudado.»", resp: "Merci de m'avoir aidé.", pasos: ["de + infinitivo pasado."], porque: "Acción pasada." },
    { sit: "«Le estoy agradecido.»", resp: "Je vous suis reconnaissant.", pasos: ["être reconnaissant."], porque: "Gratitud." },
    { sit: "«Esperando volver a verle»", resp: "Au plaisir de vous revoir.", pasos: ["Despedida."], porque: "Proyectar." }
  ],
  comprueba: [
    { q: "Con un infinitivo, remercier va con…", o: ["de", "pour"], a: 0, b: "gr", porque: "remercier de." },
    { q: "Para una acción pasada se usa…", o: ["el infinitivo pasado", "el infinitivo presente"], a: 0, b: "gr", porque: "m'avoir reçu." },
    { q: "«Votre aide m'a été précieuse» sirve para…", o: ["valorar", "despedirse"], a: 0, b: "gr", porque: "Valorar." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rm-remercier"], k: "sort", ask: "¿de + infinitivo o pour + nombre?", q: "Clasifica.", cats: ["de + infinitivo", "pour + nombre"], items: [["merci ___ m'avoir invité", 0], ["merci ___ être venu", 0], ["merci ___ m'avoir répondu", 0], ["merci ___ avoir attendu", 0], ["merci ___ l'invitation", 1], ["merci ___ votre visite", 1], ["merci ___ votre réponse", 1], ["merci ___ ce cadeau", 1]], pista: "¿Verbo o nombre?", why: "de / pour." },
    { fase: "guiada", c: ["b4rm-remercier"], k: "choice", ask: "«Gracias por haberme ayudado.»", q: "Elige.", o: ["Merci de m'avoir aidé.", "Merci pour m'aider."], a: 0, pista: "Infinitivo pasado.", why: "<b>de m'avoir aidé</b>." },
    { fase: "guiada", c: ["b4rm-formules"], k: "choice", ask: "«Le estoy agradecido.»", q: "Elige.", o: ["Je vous suis reconnaissant.", "Je suis reconnaissant à vous."], a: 0, pista: "Pronombre delante.", why: "<b>Je vous suis</b>." },
    { fase: "indep", c: ["b4rm-formules"], k: "choice", ask: "«Esperando volver a verle»", q: "Elige.", o: ["Au plaisir de vous revoir.", "À plus !"], a: 0, why: "Formal." },
    { fase: "indep", c: ["b4rm-remercier"], k: "fill", ask: "remercier … + nombre", q: "Je vous remercie ___ votre accueil chaleureux.", acc: ["pour", "de"], why: "<b>pour</b> (o de)." },
    { fase: "indep", c: ["b4rm-remercier"], k: "fill", ask: "Adverbio de intensidad (sinceramente, vivamente…).", q: "Je tiens à vous remercier ___ pour votre patience.", acc: ["sincèrement", "vivement", "chaleureusement"], why: "<b>sincèrement</b>." },
    { fase: "aplica", c: ["b4rm-formules"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Je vous remercie de…", "agradecer"], ["Votre aide m'a été précieuse.", "valorar"], ["J'espère avoir l'occasion de…", "proyectar"], ["Au plaisir de…", "despedirse"]], why: "Funciones." },
    { fase: "aplica", c: ["b4rm-remercier"], k: "spot", ask: "Encuentra el error (escribe un hombre).", s: "Je vous remercie de m'avoir [reçue] , Monsieur ; votre accueil m'a touché .", fix: "reçu", why: "<b>reçu</b>." },
    { fase: "aplica", c: ["b4rm-remercier"], k: "spot", ask: "Encuentra el error.", s: "Je vous remercie de me [recevoir] hier .", fix: "m'avoir reçu", why: "<b>m'avoir reçu</b>." },
    { fase: "dominio", c: ["b4rm-remercier"], k: "order", ask: "Ordena: «Le agradezco su ayuda».", tokens: ["Je vous remercie", "pour", "votre aide"], why: "<b>Je vous remercie pour votre aide</b>" },
    { fase: "dominio", c: ["b4rm-remercier"], k: "choice", ask: "Con un infinitivo, remercier va con…", q: "Elige.", o: ["de", "pour"], a: 0, why: "<b>de</b>." },
    { fase: "dominio", c: ["b4rm-remercier", "b4rm-formules"], k: "listen", say: "Je vous remercie chaleureusement de m'avoir accueilli dans votre équipe.", acc: ["Je vous remercie chaleureusement de m'avoir accueilli dans votre équipe."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je vous remercie chaleureusement de m'avoir accueilli dans votre équipe.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 39. Résilier un abonnement ou un contrat ── */
E["rem-resiliation"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Résilier un abonnement ou un contrat",
  objetivo: {
    que: "Vas a escribir la carta para dar de baja una suscripción o un contrato: referencias, decisión explícita, fecha de efecto y petición de confirmación.",
    corto: "Par la présente, je résilie mon contrat d'assurance. · La résiliation prendra effet à compter du 1er juin.",
    podras: ["Poner las referencias (N° d'abonné) y anunciar la decisión: Par la présente, je vous informe de ma décision de résilier…", "Indicar la fecha de efecto: à compter du 1er mars, à l'issue du préavis, à l'échéance.", "Pedir una confirmación (Merci de m'adresser un accusé de réception) y conocer el vocabulario: résilier, le préavis, l'échéance, lettre recommandée."],
    iconos: ["ic2/candado", "ic2/pergamino", "ic2/moneda"],
    previos: ["Las fórmulas de la carta (lección 10) y la economía cotidiana (B1.2, lección 48)."],
    capacidad: "Ahora te das de baja de un servicio en Francia sin problemas."
  },
  requiere: R("b2ec-banque", "b2ec-budget", "b4lt-ordre", "b4lt-formules"), recupera: ["b4lt-ordre"],
  conceptos: {
    "b4rs-vocab": { n: "vocabulario: résilier (dar de baja, rescindir), la résiliation, un abonné (suscriptor), N° d'abonné, le préavis (plazo de aviso previo), l'échéance (vencimiento), prendre effet (entrar en vigor), lettre recommandée avec accusé de réception", b: "gr" },
    "b4rs-structure": { n: "estructura: N° d'abonné y Objet : Résiliation arriba; Par la présente, je vous informe de ma décision de résilier…; à compter du 1er mars; Je vous remercie de bien vouloir m'adresser une confirmation écrite; Veuillez agréer…; firma", b: "gr" }
  },
  video: {
    titulo: "Darse de baja", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "résilier", seg: [
        { es: "Hola. Una carta clara para cancelar un contrato." } ] },
      { v: "frase", filas: [
          { nota: "decisión", p: 1, partes: [["Par la présente, je résilie mon contrat d'assurance.", "-", 1]] },
          { nota: "fecha", p: 2, partes: [["La résiliation prendra effet à compter du 1er juin.", "-", 2]] },
          { nota: "confirmación", p: 3, partes: [["Merci de m'adresser un accusé de réception.", "-", 3]] } ], seg: [
        { fr: "Par la présente, je résilie mon contrat d'assurance.", p: 1 }, { fr: "La résiliation prendra effet à compter du premier juin.", p: 2 }, { fr: "Merci de m'adresser un accusé de réception.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Dar de baja un contrato»", o: ["résilier", "résister"], a: 0,
        bien: "¡Sí! Résilier.", mal: "El término exacto es résilier.",
        seg: [ { es: "Pausa. Résilier." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Par la présente", "résilier", "à compter du", "le préavis", "accusé de réception"], seg: [
        { es: "Referencias, decisión, fecha y confirmación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El gimnasio", img: "bg-cafe", yo: "camila",
    escena: "Camila quiere dar de baja la suscripción al gimnasio; Hugo la ayuda.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Je veux annuler mon abonnement. » C'est bon ?", "Escribí: «Quiero anular mi suscripción.» ¿Está bien?"],
      ["hugo", "C'est trop oral. Le terme exact, c'est résilier. Commence par ton numéro d'abonné et « Objet : Résiliation ».", "Es demasiado oral. El término exacto es résilier. Empieza con tu número de abonada y «Asunto: Baja»."],
      ["camila", "« Par la présente, je vous informe de ma décision de résilier mon abonnement, à compter du 1er mars, à l'issue du préavis d'un mois. »", "«Por la presente, les informo de mi decisión de dar de baja mi suscripción, a partir del 1 de marzo, al término del preaviso de un mes.»"],
      ["hugo", "Et envoie-la par lettre recommandée avec accusé de réception. Termine par « Je vous remercie de bien vouloir m'adresser une confirmation écrite. »", "Y envíala por carta certificada con acuse de recibo. Termina con «Les ruego me envíen una confirmación por escrito.»"]
    ],
    fijate: "Fíjate: résilier (no annuler), numéro d'abonné, Objet : Résiliation, Par la présente, à compter du 1er mars, à l'issue du préavis, lettre recommandée avec accusé de réception, confirmation écrite."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La carta de baja",
      idea: "Arriba: tus datos, N° d'abonné : 123456 (o número de cliente o de contrato) y Objet : Résiliation de mon abonnement. Saludo: Madame, Monsieur, Decisión explícita: Par la présente, je vous informe de ma décision de résilier mon abonnement / contrat. Fecha: à compter du 1er mars, à l'issue du préavis (plazo de aviso), à l'échéance (al vencimiento). Petición: Je vous remercie de bien vouloir m'adresser une confirmation écrite / un accusé de réception. Despedida y firma. Envío: par lettre recommandée avec accusé de réception. Vocabulario: un abonné (suscriptor), la résiliation (la baja), prendre effet (entrar en vigor). En la carta, résilier, no «annuler».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Parte"], [
        ["résilier", "dar de baja un contrato", "verbo"],
        ["un préavis d'un mois", "el plazo de aviso previo de un mes", "vocabulario"],
        ["à compter du 1er mars", "a partir del 1 de marzo", "fecha"],
        ["Par la présente, je vous informe de ma décision. · présente", "Por la presente, le informo de mi decisión.", "decisión"],
        ["Lettre recommandée avec accusé de réception. · réception", "Carta certificada con acuse de recibo.", "envío"],
        ["un abonné = un suscriptor · l'échéance = el vencimiento · la résiliation = la baja / rescisión · prendre effet = entrar en vigor", "vocabulario", "resumen"],
        ["N° d'abonné : … · Objet : Résiliation · Madame, Monsieur, · Par la présente,", "N.º de abonado · Asunto: Baja · Señora, señor: · Por la presente,", "Inicio"],
        ["Merci de me confirmer… · Veuillez agréer… · Signature · Je vous remercie par avance.", "Les ruego me confirmen… · Atentamente · Firma · Gracias de antemano", "Final"],
        ["Je souhaite résilier mon contrat de téléphone à compter du 1er avril. · résilier", "Deseo dar de baja mi contrato de teléfono a partir del 1 de abril.", "decisión"],
        ["Je souhaite résilier mon contrat", "Deseo dar de baja mi contrato", "decisión"],
        ["Par la présente, je vous informe de ma décision de résilier mon abonnement.", "Por la presente, les informo de mi decisión de dar de baja mi suscripción.", "decisión"]
      ]],
      ej: [["Par la présente, je résilie mon contrat d'assurance.", "Por la presente, rescindo mi contrato de seguro."], ["La résiliation prendra effet à compter du 1er juin.", "La baja será efectiva a partir del 1 de junio."], ["Merci de m'adresser un accusé de réception.", "Les ruego me envíen un acuse de recibo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je veux annuler mon abonnement (oral).", "Je souhaite résilier mon abonnement.", "Término exacto: résilier."], ["Je souhaite résister mon contrat.", "Je souhaite résilier mon contrat.", "résister = resistir."], ["Sin fecha de efecto", "à compter du 1er mars", "Indica siempre la fecha."]] }
  ],
  ejemplos: [
    { sit: "«Dar de baja un contrato»", resp: "résilier", pasos: ["Término exacto."], porque: "Verbo." },
    { sit: "«un préavis d'un mois» es…", resp: "el plazo de aviso previo", pasos: ["Antes de la baja."], porque: "Vocabulario." },
    { sit: "«A partir del 1 de marzo»", resp: "à compter du 1er mars", pasos: ["Fecha de efecto."], porque: "Fecha." }
  ],
  comprueba: [
    { q: "«Résilier» significa…", o: ["dar de baja un contrato", "resistir"], a: 0, b: "gr", porque: "Rescindir." },
    { q: "«Par la présente» va…", o: ["al inicio de la decisión", "en la firma"], a: 0, b: "gr", porque: "Inicio." },
    { q: "«L'échéance» es…", o: ["el vencimiento", "el descuento"], a: 0, b: "gr", porque: "Fecha límite." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rs-structure"], k: "sort", ask: "¿Va al inicio o al final de la carta?", q: "Clasifica.", cats: ["Inicio", "Final"], items: [["N° d'abonné : …", 0], ["Objet : Résiliation", 0], ["Madame, Monsieur,", 0], ["Par la présente,", 0], ["Merci de me confirmer…", 1], ["Veuillez agréer…", 1], ["Signature", 1], ["Je vous remercie par avance.", 1]], pista: "Referencias arriba, petición abajo.", why: "Estructura." },
    { fase: "guiada", c: ["b4rs-vocab"], k: "choice", ask: "«Dar de baja un contrato»", q: "Elige.", o: ["résilier", "résister"], a: 0, pista: "Término exacto.", why: "<b>résilier</b>." },
    { fase: "guiada", c: ["b4rs-vocab"], k: "choice", es: true, ask: "«un préavis d'un mois» es…", q: "Elige.", o: ["el plazo de aviso previo", "un descuento de un mes"], a: 0, pista: "Antes de la baja.", why: "Preaviso." },
    { fase: "indep", c: ["b4rs-structure"], k: "choice", ask: "«A partir del 1 de marzo»", q: "Elige.", o: ["à compter du 1er mars", "à compter le 1er mars"], a: 0, why: "<b>à compter du</b>." },
    { fase: "indep", c: ["b4rs-structure"], k: "fill", ask: "Par la …", q: "Par la ___ , je vous informe de ma décision.", acc: ["présente"], why: "<b>présente</b>." },
    { fase: "indep", c: ["b4rs-vocab"], k: "fill", ask: "accusé de …", q: "Lettre recommandée avec accusé de ___ .", acc: ["réception"], why: "<b>réception</b>." },
    { fase: "aplica", c: ["b4rs-vocab"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["un abonné", "un suscriptor"], ["l'échéance", "el vencimiento"], ["la résiliation", "la baja / rescisión"], ["prendre effet", "entrar en vigor"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b4rs-vocab"], k: "spot", ask: "Encuentra el error.", s: "Je souhaite [résister] mon contrat de téléphone à compter du 1er avril .", fix: "résilier", why: "<b>résilier</b>." },
    { fase: "aplica", c: ["b4rs-structure"], k: "choice", ask: "Petición de confirmación:", q: "Elige.", o: ["Je vous remercie de bien vouloir m'adresser une confirmation écrite.", "Envoyez-moi un truc pour confirmer."], a: 0, why: "Formal." },
    { fase: "dominio", c: ["b4rs-vocab"], k: "order", ask: "Ordena: «Deseo dar de baja mi contrato».", tokens: ["Je souhaite", "résilier", "mon contrat"], why: "<b>Je souhaite résilier mon contrat</b>" },
    { fase: "dominio", c: ["b4rs-vocab"], k: "choice", ask: "«L'échéance» es…", q: "Elige.", o: ["el vencimiento", "el descuento"], a: 0, es: true, why: "Vencimiento." },
    { fase: "dominio", c: ["b4rs-vocab", "b4rs-structure"], k: "listen", say: "Par la présente, je vous informe de ma décision de résilier mon abonnement.", acc: ["Par la présente, je vous informe de ma décision de résilier mon abonnement."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Par la présente, je vous informe de ma décision de résilier mon abonnement.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B2.2·5 · Proponer y presentarse ================================ */
/* ── 40. Proposer un projet à une institution ── */
E["rem-proposer-projet"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Proposer un projet à une institution",
  objetivo: {
    que: "Vas a proponer un proyecto por escrito a una institución: contexto, proyecto, beneficios, recursos y petición de reunión.",
    corto: "Je souhaiterais vous proposer la création d'un jardin partagé. · Ce projet permettrait de renforcer les liens entre voisins.",
    podras: ["Presentar el contexto (Habitant du quartier depuis dix ans, je constate que…) y el proyecto (Je souhaiterais vous proposer la création de…).", "Presentar los beneficios en condicional (permettrait, favoriserait, contribuerait à) y los recursos (Il nécessiterait un budget de…).", "Pedir una reunión: Je sollicite un rendez-vous afin de vous présenter le projet."],
    iconos: ["ic2/flor", "ic2/bombilla", "ic2/amigos"],
    previos: ["Conditionnel et hypothèse (lección 8), la carta de motivación (B1.2, lección 37) y negociar (B2.1, lección 34)."],
    capacidad: "Ahora presentas una idea a una alcaldía o una asociación de forma convincente."
  },
  requiere: R("b2lm-plan", "b3ng-proposer", "b4cd-usages", "b4lt-formules"), recupera: ["b4cd-usages"],
  conceptos: {
    "b4pj-structure": { n: "estructura: contexto (Habitant du quartier, je constate que…), proyecto (Je souhaiterais vous proposer la création de…), beneficios, recursos, petición (Je sollicite un rendez-vous afin de…)", b: "gr" },
    "b4pj-conditionnel": { n: "condicional para proponer con prudencia: Ce projet permettrait de…, favoriserait…, contribuerait à…, nécessiterait un budget de…; beneficios (créer du lien social, réduire les déchets) y recursos (un budget, un local, des bénévoles, l'accord de la mairie)", b: "gr" }
  },
  video: {
    titulo: "Proponer un proyecto", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "permettrait", seg: [
        { es: "Hola. El condicional suaviza la propuesta." } ] },
      { v: "frase", filas: [
          { nota: "proyecto", p: 1, partes: [["Je souhaiterais vous proposer la création d'un jardin partagé.", "-", 1]] },
          { nota: "beneficio", p: 2, partes: [["Ce projet permettrait de renforcer les liens entre voisins.", "-", 2]] },
          { nota: "petición", p: 3, partes: [["Je sollicite un rendez-vous afin d'en discuter.", "-", 3]] } ], seg: [
        { fr: "Je souhaiterais vous proposer la création d'un jardin partagé.", p: 1 }, { fr: "Ce projet permettrait de renforcer les liens entre voisins.", p: 2 }, { fr: "Je sollicite un rendez-vous afin d'en discuter.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Este proyecto permitiría…» (propuesta)", o: ["Ce projet permettrait de…", "Ce projet permettra de…"], a: 0,
        bien: "¡Sí! Condicional de propuesta.", mal: "En una propuesta: condicional.",
        seg: [ { es: "Pausa. Condicional." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je constate que", "la création de", "permettrait", "contribuerait", "Je sollicite un rendez-vous"], seg: [
        { es: "Contexto, proyecto, beneficios, recursos, petición.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El huerto compartido", img: "bg-paris", yo: "camila",
    escena: "Camila escribe a la alcaldía para proponer un huerto compartido en su barrio.",
    pj: PJ,
    lineas: [
      ["camila", "« Habitante du quartier depuis trois ans, je constate qu'il n'existe aucun espace de rencontre. Je souhaiterais vous proposer la création d'un jardin partagé. »", "«Vecina del barrio desde hace tres años, constato que no existe ningún espacio de encuentro. Desearía proponerle la creación de un huerto compartido.»"],
      ["hugo", "Et les avantages ? — « Ce projet permettrait de créer du lien social et contribuerait à réduire les déchets. »", "¿Y las ventajas? — «Este proyecto permitiría crear lazos sociales y contribuiría a reducir los residuos.»"],
      ["camila", "« Il nécessiterait un budget de 5 000 €, un local et quelques bénévoles. »", "«Requeriría un presupuesto de 5 000 €, un local y algunos voluntarios.»"],
      ["hugo", "Et pour finir ? — « Je sollicite un rendez-vous afin de vous présenter le projet. Ce projet permettrait de créer un espace de rencontre pour tous les habitants. »", "¿Y para terminar? — «Solicito una cita para presentarle el proyecto. Este proyecto permitiría crear un espacio de encuentro para todos los vecinos.»"]
    ],
    fijate: "Fíjate: je constate que (contexto), Je souhaiterais vous proposer la création de (proyecto), permettrait, contribuerait, nécessiterait (condicional), Je sollicite un rendez-vous afin de (petición)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cinco partes y el condicional",
      idea: "1. Contexto: Habitant du quartier depuis dix ans, je constate que… 2. Proyecto: Je souhaiterais vous proposer la création d'un / d'une… 3. Beneficios, en condicional (propuesta, no certeza): Ce projet permettrait de…, favoriserait…, contribuerait à… 4. Recursos: Il nécessiterait un budget de…, un local, des bénévoles, l'accord de la mairie. 5. Petición: Je sollicite un rendez-vous afin de vous présenter le projet. El condicional suaviza: «permettra» suena a certeza; «permettrait», a propuesta.",
      intro: "Toca cada parte.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Ce projet permettrait de…", "Este proyecto permitiría…", "beneficio"],
        ["Je sollicite un rendez-vous.", "Solicito una cita.", "petición"],
        ["Habitant du quartier, je constate que…", "Vecino del barrio, constato que…", "contexto"],
        ["Ce projet contribuerait à améliorer la vie du quartier. · contribuerait", "Este proyecto contribuiría a mejorar la vida del barrio.", "beneficio"],
        ["Je souhaiterais vous proposer la création d'une bibliothèque. · création", "Desearía proponerle la creación de una biblioteca.", "proyecto"],
        ["contexto = Je constate que… · proyecto = Je souhaiterais proposer… · beneficios = Cela permettrait de… · petición = Je sollicite un rendez-vous.", "partes", "resumen"],
        ["créer du lien social · embellir le quartier · sensibiliser les jeunes · réduire les déchets", "crear lazos sociales · embellecer el barrio · sensibilizar a los jóvenes · reducir los residuos", "Beneficio"],
        ["un budget de 5 000 € · un local · des bénévoles · l'accord de la mairie", "un presupuesto · un local · voluntarios · el acuerdo de la alcaldía", "Recurso"],
        ["Ce jardin partagé favoriserait la rencontre entre générations. · favoriserait", "Este huerto compartido favorecería el encuentro entre generaciones.", "beneficio"],
        ["Je sollicite un rendez-vous afin de vous présenter le projet", "Solicito una cita para presentarle el proyecto", "petición"],
        ["Ce projet permettrait de créer un espace de rencontre pour tous les habitants.", "Este proyecto permitiría crear un espacio de encuentro para todos los vecinos.", "beneficio"]
      ]],
      ej: [["Je souhaiterais vous proposer la création d'un jardin partagé.", "Desearía proponerle la creación de un huerto compartido."], ["Ce projet permettrait de renforcer les liens entre voisins.", "Este proyecto permitiría reforzar los lazos entre vecinos."], ["Je sollicite un rendez-vous afin d'en discuter.", "Solicito una cita para hablarlo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ce projet permettra (seguro)", "Ce projet permettrait (propuesta)", "El condicional suaviza la propuesta."], ["Je veux un rendez-vous.", "Je sollicite un rendez-vous.", "Petición formal."], ["Sin recursos ni presupuesto", "Il nécessiterait un budget de…", "Muestra que es realista."]] }
  ],
  ejemplos: [
    { sit: "«Este proyecto permitiría…»", resp: "Ce projet permettrait de…", pasos: ["Condicional."], porque: "Beneficio." },
    { sit: "«Solicito una cita.»", resp: "Je sollicite un rendez-vous.", pasos: ["solliciter."], porque: "Petición." },
    { sit: "Para presentar el contexto:", resp: "Habitant du quartier, je constate que…", pasos: ["Quién eres + qué ves."], porque: "Contexto." }
  ],
  comprueba: [
    { q: "En una propuesta, los beneficios van en…", o: ["condicional", "futuro"], a: 0, b: "gr", porque: "Prudencia." },
    { q: "«Un local» es…", o: ["un recurso", "un beneficio"], a: 0, b: "gr", porque: "Medio." },
    { q: "«Je sollicite un rendez-vous» es…", o: ["la petición final", "el contexto"], a: 0, b: "gr", porque: "Cierre." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pj-conditionnel"], k: "sort", ask: "¿Beneficio o recurso?", q: "Clasifica.", cats: ["Beneficio", "Recurso"], items: [["créer du lien social", 0], ["embellir le quartier", 0], ["sensibiliser les jeunes", 0], ["réduire les déchets", 0], ["un budget de 5 000 €", 1], ["un local", 1], ["des bénévoles", 1], ["l'accord de la mairie", 1]], pista: "¿Lo que se gana o lo que se necesita?", why: "Beneficios y recursos." },
    { fase: "guiada", c: ["b4pj-conditionnel"], k: "choice", ask: "«Este proyecto permitiría…»", q: "Elige.", o: ["Ce projet permettrait de…", "Ce projet permettra sûrement de…"], a: 0, pista: "Condicional.", why: "<b>permettrait</b>." },
    { fase: "guiada", c: ["b4pj-structure"], k: "choice", ask: "«Solicito una cita.»", q: "Elige.", o: ["Je sollicite un rendez-vous.", "Je veux vous voir vite."], a: 0, pista: "Formal.", why: "<b>Je sollicite</b>." },
    { fase: "indep", c: ["b4pj-structure"], k: "choice", ask: "Para presentar el contexto:", q: "Elige.", o: ["Habitant du quartier, je constate que…", "Salut, moi j'habite là."], a: 0, why: "Contexto." },
    { fase: "indep", c: ["b4pj-conditionnel"], k: "fill", ask: "Condicional de contribuer.", q: "Ce projet ___ à améliorer la vie du quartier.", acc: ["contribuerait"], why: "<b>contribuerait</b>." },
    { fase: "indep", c: ["b4pj-structure"], k: "fill", ask: "«creación»", q: "Je souhaiterais vous proposer la ___ d'une bibliothèque.", acc: ["création"], why: "<b>création</b>." },
    { fase: "aplica", c: ["b4pj-structure"], k: "match", ask: "Une cada parte con su fórmula.", q: "Parte → fórmula", pairs: [["contexto", "Je constate que…"], ["proyecto", "Je souhaiterais proposer…"], ["beneficios", "Cela permettrait de…"], ["petición", "Je sollicite un rendez-vous."]], why: "Partes." },
    { fase: "aplica", c: ["b4pj-conditionnel"], k: "spot", ask: "Encuentra el error.", s: "Ce jardin partagé [favorisera] peut-être la rencontre entre générations , si vous l'acceptiez .", fix: "favoriserait", why: "<b>favoriserait</b>." },
    { fase: "aplica", c: ["b4pj-conditionnel"], k: "choice", ask: "Recursos necesarios:", q: "Elige.", o: ["Il nécessiterait un budget de 5 000 €.", "Il coûte rien du tout."], a: 0, why: "Condicional." },
    { fase: "dominio", c: ["b4pj-structure"], k: "order", ask: "Ordena la petición.", tokens: ["Je sollicite un rendez-vous", "afin de vous présenter", "le projet"], why: "<b>Je sollicite un rendez-vous afin de vous présenter le projet</b>" },
    { fase: "dominio", c: ["b4pj-conditionnel"], k: "choice", ask: "En una propuesta, los beneficios van en…", q: "Elige.", o: ["condicional", "futuro"], a: 0, es: true, why: "Condicional." },
    { fase: "dominio", c: ["b4pj-structure", "b4pj-conditionnel"], k: "listen", say: "Ce projet permettrait de créer un espace de rencontre pour tous les habitants.", acc: ["Ce projet permettrait de créer un espace de rencontre pour tous les habitants."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce projet permettrait de créer un espace de rencontre pour tous les habitants.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 41. Le CV à la française ── */
E["rem-cv-francais"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le CV à la française",
  objetivo: {
    que: "Vas a redactar un CV a la francesa: una página, ordenado, con frases nominales y verbos de acción.",
    corto: "Français : niveau C1 (DALF obtenu en 2024). · Coordination de projets internationaux. · Centres d'intérêt : randonnée, photographie.",
    podras: ["Ordenar las secciones: datos, titre du poste visé, Expérience professionnelle (de lo más reciente a lo más antiguo), Formation, Compétences, Centres d'intérêt.", "Describir las misiones con frases nominales: Gestion d'un budget, Rédaction de rapports mensuels.", "Presentar los idiomas (espagnol : langue maternelle; anglais : courant) y las equivalencias (Bac + 5)."],
    iconos: ["ic2/laptop", "ic2/birrete", "ic2/medalla"],
    previos: ["La carta de motivación (B1.2, lección 37), el sistema educativo (B1.2, lección 43) y la nominalización (B2.1, lección 12)."],
    capacidad: "Ahora tu CV está listo para una empresa francesa."
  },
  requiere: R("b2lm-plan", "b2lm-formules", "b2ed-titres", "b3no-phrase"), recupera: ["b2ed-titres"],
  conceptos: {
    "b4cv-rubriques": { n: "secciones: Expérience professionnelle (puestos y misiones, de lo más reciente a lo más antiguo: 2022-2024 : chargée de projet chez…), Formation (títulos: Master, Licence, Bac + 5 = cinco años de estudios superiores), Compétences (idiomas, informática), Centres d'intérêt (aficiones; no «hobbies»)", b: "gr" },
    "b4cv-style": { n: "estilo: frases nominales y verbos de acción (Gestion d'un budget, Suivi des clients, Rédaction de rapports mensuels, Coordination de projets); idiomas: espagnol (langue maternelle), français (C1 – DALF), anglais (courant); nada familiar ni exagerado, una página", b: "gr" }
  },
  video: {
    titulo: "El CV francés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "une page", seg: [
        { es: "Hola. Breve, claro y en frases nominales." } ] },
      { v: "frase", filas: [
          { nota: "idiomas", p: 1, partes: [["Français : niveau C1 (DALF obtenu en 2024).", "-", 1]] },
          { nota: "misión", p: 2, partes: [["Coordination de projets internationaux.", "-", 2]] },
          { nota: "aficiones", p: 3, partes: [["Centres d'intérêt : randonnée, photographie.", "-", 3]] } ], seg: [
        { fr: "Français : niveau C1, DALF obtenu en 2024.", p: 1 }, { fr: "Coordination de projets internationaux.", p: 2 }, { fr: "Centres d'intérêt : randonnée, photographie.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aficiones» en un CV francés:", o: ["Centres d'intérêt", "Hobbies"], a: 0,
        bien: "¡Sí! Término francés.", mal: "Se usa Centres d'intérêt.",
        seg: [ { es: "Pausa. Centres d'intérêt." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Expérience professionnelle", "Formation", "Compétences", "Centres d'intérêt", "Bac + 5", "courant"], seg: [
        { es: "Secciones, frases nominales y una página.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El CV de Camila", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo revisa el CV de Camila antes de enviarlo a una empresa de Lyon.",
    pj: PJ,
    lineas: [
      ["hugo", "Trois pages ? En France, un CV tient sur une page. Et « Hobbies », on dit « Centres d'intérêt ».", "¿Tres páginas? En Francia un CV ocupa una página. Y «Hobbies» se dice «Centres d'intérêt»."],
      ["camila", "D'accord. Expérience professionnelle : « 2022-2024 : chargée de projet chez Lumen. Gestion d'un budget, suivi des clients, rédaction de rapports mensuels. »", "Vale. Experiencia profesional: «2022-2024: encargada de proyecto en Lumen. Gestión de un presupuesto, seguimiento de clientes, redacción de informes mensuales.»"],
      ["hugo", "Bien, des phrases nominales. Et la formation ? — Master en marketing, Bac + 5. Et « J'ai fait plein de trucs », tu l'enlèves !", "Bien, frases nominales. ¿Y la formación? — Máster en marketing, Bac + 5. ¡Y «Hice un montón de cosas», lo quitas!"],
      ["camila", "Compétences : espagnol, langue maternelle ; français, niveau C1 ; anglais, courant. « Titulaire d'un master en marketing, je parle couramment espagnol, français et anglais. »", "Competencias: español, lengua materna; francés, nivel C1; inglés, fluido. «Titular de un máster en marketing, hablo con fluidez español, francés e inglés.»"]
    ],
    fijate: "Fíjate: une page, Centres d'intérêt, 2022-2024 : chargée de projet chez…, Gestion / Suivi / Rédaction (frases nominales), Bac + 5, langue maternelle, courant, Titulaire d'un master."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Secciones y estilo",
      idea: "Una página. Encabezado: nombre, contacto y titre du poste visé. Expérience professionnelle: de lo más reciente a lo más antiguo, con fechas – puesto – empresa – misiones (2022-2024 : chargée de projet chez Lumen). Las misiones van en frases nominales con verbos de acción nominalizados: Gestion d'un budget, Suivi des clients, Organisation d'événements, Rédaction de rapports mensuels, Coordination de projets internationaux. Formation: títulos y equivalencias (Master, Licence; Bac + 5 = cinco años de estudios superiores). Compétences: idiomas (espagnol : langue maternelle; français : C1 – DALF; anglais : courant) e informática. Centres d'intérêt (no «hobbies»): randonnée, photographie. Nada familiar, nada exagerado, sin foto inadecuada.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Sección"], [
        ["Formation : Bac + 5", "cinco años de estudios superiores", "formación"],
        ["Centres d'intérêt", "Aficiones", "aficiones"],
        ["Rédaction de rapports mensuels", "Redacción de informes mensuales", "misión"],
        ["Espagnol : langue maternelle. · maternelle", "Español: lengua materna.", "idiomas"],
        ["Anglais : courant · courant", "Inglés: fluido", "idiomas"],
        ["Expérience professionnelle = puestos y misiones · Formation = títulos · Compétences = idiomas, informática · Centres d'intérêt = aficiones", "secciones", "resumen"],
        ["Gestion d'un budget · Suivi des clients · Organisation d'événements · Traduction de documents", "Gestión de un presupuesto · Seguimiento de clientes · Organización de eventos · Traducción de documentos", "Adecuado"],
        ["J'ai fait plein de trucs · Je suis super motivé !!! · Photo en maillot de bain · Trois pages de détails", "Hice un montón de cosas · ¡¡¡Estoy supermotivado!!! · Foto en bañador · Tres páginas de detalles", "Inadecuado"],
        ["Compétences : français (niveau C1), anglais (courant).", "Competencias: francés (nivel C1), inglés (fluido).", "idiomas"],
        ["2022-2024 : chargée de projet chez Lumen", "2022-2024: encargada de proyecto en Lumen", "experiencia"],
        ["Titulaire d'un master en marketing, je parle couramment espagnol, français et anglais.", "Titular de un máster en marketing, hablo con fluidez español, francés e inglés.", "perfil"]
      ]],
      ej: [["Français : niveau C1 (DALF obtenu en 2024).", "Francés: nivel C1 (DALF obtenido en 2024)."], ["Coordination de projets internationaux.", "Coordinación de proyectos internacionales."], ["Centres d'intérêt : randonnée, photographie.", "Aficiones: senderismo, fotografía."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Hobbies : …", "Centres d'intérêt : …", "Término francés habitual."], ["J'ai géré un budget et j'ai suivi les clients…", "Gestion d'un budget, suivi des clients", "Frases nominales."], ["Anglais : corriente", "Anglais : courant", "Término francés."]] }
  ],
  ejemplos: [
    { sit: "«Formation : Bac + 5» significa…", resp: "cinco años de estudios superiores", pasos: ["Bac + años."], porque: "Equivalencia." },
    { sit: "«Aficiones» en el CV:", resp: "Centres d'intérêt", pasos: ["No hobbies."], porque: "Sección." },
    { sit: "Una misión bien escrita:", resp: "Rédaction de rapports mensuels", pasos: ["Frase nominal."], porque: "Estilo." }
  ],
  comprueba: [
    { q: "Un CV francés ocupa…", o: ["una página", "tres páginas"], a: 0, b: "gr", porque: "Breve." },
    { q: "La experiencia se ordena…", o: ["de lo más reciente a lo más antiguo", "de lo más antiguo a lo más reciente"], a: 0, b: "gr", porque: "Orden." },
    { q: "«Langue maternelle» significa…", o: ["lengua materna", "lengua aprendida"], a: 0, b: "gr", porque: "Idiomas." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cv-style"], k: "sort", ask: "¿Adecuado o inadecuado en un CV?", q: "Clasifica.", cats: ["Adecuado", "Inadecuado"], items: [["Gestion d'un budget", 0], ["Suivi des clients", 0], ["Organisation d'événements", 0], ["Traduction de documents", 0], ["J'ai fait plein de trucs", 1], ["Je suis super motivé !!!", 1], ["Photo en maillot de bain", 1], ["Trois pages de détails", 1]], pista: "¿Profesional y breve?", why: "Estilo." },
    { fase: "guiada", c: ["b4cv-rubriques"], k: "choice", es: true, ask: "«Formation : Bac + 5» significa…", q: "Elige.", o: ["cinco años de estudios superiores", "cinco años de experiencia"], a: 0, pista: "Bac + años.", why: "Equivalencia." },
    { fase: "guiada", c: ["b4cv-rubriques"], k: "choice", ask: "«Aficiones» en un CV francés:", q: "Elige.", o: ["Centres d'intérêt", "Hobbies"], a: 0, pista: "Término francés.", why: "<b>Centres d'intérêt</b>." },
    { fase: "indep", c: ["b4cv-style"], k: "choice", ask: "Una misión bien escrita:", q: "Elige.", o: ["Rédaction de rapports mensuels", "J'écrivais des rapports, c'était long"], a: 0, why: "Frase nominal." },
    { fase: "indep", c: ["b4cv-style"], k: "fill", ask: "«materna»", q: "Espagnol : langue ___ .", acc: ["maternelle"], why: "<b>maternelle</b>." },
    { fase: "indep", c: ["b4cv-style"], k: "fill", ask: "«fluido»", q: "Anglais : ___", acc: ["courant"], why: "<b>courant</b>." },
    { fase: "aplica", c: ["b4cv-rubriques"], k: "match", ask: "Une cada sección con su contenido.", q: "Sección → contenido", pairs: [["Expérience professionnelle", "puestos y misiones"], ["Formation", "títulos"], ["Compétences", "idiomas, informática"], ["Centres d'intérêt", "aficiones"]], why: "Secciones." },
    { fase: "aplica", c: ["b4cv-style"], k: "spot", ask: "Encuentra el error.", s: "Compétences : français ( niveau C1 ) , anglais ( [corriente] ) .", fix: "courant", why: "<b>courant</b>." },
    { fase: "aplica", c: ["b4cv-rubriques"], k: "choice", ask: "La experiencia se ordena…", q: "Elige.", o: ["de lo más reciente a lo más antiguo", "de lo más antiguo a lo más reciente"], a: 0, es: true, why: "Lo más reciente primero." },
    { fase: "dominio", c: ["b4cv-rubriques"], k: "order", ask: "Ordena la línea de experiencia.", tokens: ["2022-2024 :", "chargée de projet", "chez Lumen"], why: "<b>2022-2024 : chargée de projet chez Lumen</b>" },
    { fase: "dominio", c: ["b4cv-rubriques"], k: "choice", ask: "Un CV francés ocupa…", q: "Elige.", o: ["una página", "tres páginas"], a: 0, es: true, why: "Una página." },
    { fase: "dominio", c: ["b4cv-rubriques", "b4cv-style"], k: "listen", say: "Titulaire d'un master en marketing, je parle couramment espagnol, français et anglais.", acc: ["Titulaire d'un master en marketing, je parle couramment espagnol, français et anglais."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Titulaire d'un master en marketing, je parle couramment espagnol, français et anglais.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lumen", "DALF", "Lyon"], previo: [] }
};

/* ── 42. L'objet et la structure d'un courriel professionnel ── */
E["rem-objet-courriel"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'objet et la structure d'un courriel professionnel",
  objetivo: {
    que: "Vas a escribir un correo profesional eficaz: asunto informativo, saludo adaptado, motivo en la primera frase, acción esperada y cierre.",
    corto: "Je vous écris afin de confirmer notre rendez-vous. · Vous trouverez ci-joint le document demandé.",
    podras: ["Escribir un asunto informativo (Réunion du 12 mars – ordre du jour) y un saludo adaptado (Madame, / Bonjour Madame Roy, / Bonjour à toutes et à tous,).", "Decir el motivo en la primera frase (Je vous écris afin de…) y adjuntar con ci-joint (invariable antes del nombre).", "Pedir una acción clara (Merci de me confirmer… avant vendredi) y cerrar (Bien cordialement,)."],
    iconos: ["ic2/laptop", "ic2/pergamino", "ic2/reloj-arena"],
    previos: ["Pedir información por escrito (lección 36) y el correo argumentativo (B1.2, lección 8)."],
    capacidad: "Ahora tus correos de trabajo son claros y profesionales."
  },
  requiere: R("b2ce-formules", "b2ce-plan", "b4lt-ordre", "b4di-structure"), recupera: ["b4di-structure"],
  conceptos: {
    "b4oc-structure": { n: "objet informativo (Réunion du 12 mars – ordre du jour; Candidature – poste d'assistant), saludo (Madame, / Bonjour Madame Roy, / Bonjour à toutes et à tous,), motivo en la 1.ª frase (Je vous écris afin de…), párrafos cortos, acción esperada (Merci de me confirmer… / de me répondre avant lundi), cierre (Bien cordialement, / Cordialement,)", b: "gr" },
    "b4oc-cijoint": { n: "adjuntar: Vous trouverez ci-joint le document / la facture (ci-joint invariable delante del nombre); Merci de me tenir informé(e); nada familiar (Coucou, stp, Bisous, mayúsculas)", b: "gr" }
  },
  video: {
    titulo: "El correo profesional", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "ci-joint", seg: [
        { es: "Hola. Asunto claro, motivo arriba, acción clara." } ] },
      { v: "frase", filas: [
          { nota: "motivo", p: 1, partes: [["Je vous écris afin de confirmer notre rendez-vous.", "-", 1]] },
          { nota: "adjunto", p: 2, partes: [["Vous trouverez ci-joint le document demandé.", "-", 2]] },
          { nota: "acción", p: 3, partes: [["Merci de me tenir informé.", "-", 3]] } ], seg: [
        { fr: "Je vous écris afin de confirmer notre rendez-vous.", p: 1 }, { fr: "Vous trouverez ci-joint le document demandé.", p: 2 }, { fr: "Merci de me tenir informé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué asunto es mejor?", o: ["Réunion du 12 mars – ordre du jour", "Bonjour !"], a: 0,
        bien: "¡Sí! Informativo.", mal: "El asunto informa, no saluda.",
        seg: [ { es: "Pausa. El asunto informa." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Objet :", "Bonjour Madame Roy,", "Je vous écris afin de", "ci-joint", "Bien cordialement,"], seg: [
        { es: "Asunto, saludo, motivo, acción, cierre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El acta de la reunión", img: "bg-universidad", yo: "camila",
    escena: "Camila envía al equipo el acta de una reunión.",
    pj: PJ,
    lineas: [
      ["camila", "Objet : Réunion du 12 mars – compte rendu. « Bonjour à toutes et à tous, vous trouverez ci-joint le compte rendu de la réunion de ce matin. »", "Asunto: Reunión del 12 de marzo – acta. «Hola a todas y a todos: adjunto encontrarán el acta de la reunión de esta mañana.»"],
      ["hugo", "Et à Madame Roy, la directrice ? — « Bonjour Madame Roy, je vous écris afin de fixer une date pour la prochaine réunion. »", "¿Y a la señora Roy, la directora? — «Buenos días, señora Roy: le escribo para fijar una fecha para la próxima reunión.»"],
      ["camila", "« Merci de me confirmer votre présence avant vendredi et de me tenir informée. Bien cordialement, Camila Rojas. »", "«Le ruego me confirme su asistencia antes del viernes y me mantenga informada. Atentamente, Camila Rojas.»"],
      ["hugo", "Parfait. Et surtout, pas de « Coucou », pas de « Bisous » et pas de majuscules partout !", "Perfecto. ¡Y sobre todo, nada de «Holi», nada de «Besos» y nada de mayúsculas por todas partes!"]
    ],
    fijate: "Fíjate: Objet : Réunion du 12 mars – …, Bonjour à toutes et à tous, Bonjour Madame Roy, vous trouverez ci-joint, je vous écris afin de, Merci de me confirmer… avant vendredi, me tenir informée, Bien cordialement."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Seis piezas del correo",
      idea: "1. Asunto informativo, sin saludo: Réunion du 12 mars – ordre du jour; Candidature – poste d'assistant. 2. Saludo adaptado: Madame, (muy formal) / Bonjour Madame Roy, (formal y cordial) / Bonjour à toutes et à tous, (grupo). 3. Motivo en la primera frase: Je vous écris afin de… 4. Párrafos cortos; para adjuntar: Vous trouverez ci-joint le document / la facture (ci-joint, invariable delante del nombre). 5. Acción esperada clara: Merci de me confirmer votre présence avant vendredi; Merci de me tenir informé(e). 6. Cierre: Bien cordialement, / Cordialement, + firma completa. Nada de Coucou, stp, Bisous ni mayúsculas.",
      intro: "Toca cada pieza.",
      tabla: [["Francés", "Español", "Pieza"], [
        ["Vous trouverez ci-joint…", "Adjunto encontrará…", "adjunto"],
        ["Réunion du 12 mars – ordre du jour", "Reunión del 12 de marzo – orden del día", "asunto"],
        ["Bien cordialement,", "Atentamente,", "cierre"],
        ["Je vous écris afin de fixer une date. · afin", "Le escribo para fijar una fecha.", "motivo"],
        ["Merci de me tenir informé. · informé · informée", "Gracias por mantenerme informado.", "acción"],
        ["objet = Candidature – poste d'assistant · salutation = Bonjour Madame Roy, · action attendue = Merci de me répondre avant lundi. · formule finale = Bien cordialement,", "piezas", "resumen"],
        ["Bonjour Monsieur Martin, · Vous trouverez ci-joint… · Merci de me confirmer… · Cordialement,", "fórmulas profesionales", "Sí"],
        ["Coucou ! · Réponds vite stp · Bisous · MAJUSCULES PARTOUT", "fórmulas inadecuadas", "No"],
        ["Vous trouverez ci-joint la facture de février. · ci-joint", "Adjunto encontrará la factura de febrero.", "adjunto"],
        ["Je vous écris afin de confirmer le rendez-vous", "Le escribo para confirmar la cita", "motivo"],
        ["Vous trouverez ci-joint le compte rendu de la réunion de ce matin.", "Adjunto encontrará el acta de la reunión de esta mañana.", "adjunto"]
      ]],
      ej: [["Je vous écris afin de confirmer notre rendez-vous.", "Le escribo para confirmar nuestra cita."], ["Vous trouverez ci-joint le document demandé.", "Adjunto encontrará el documento solicitado."], ["Merci de me tenir informé.", "Gracias por mantenerme informado."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Vous trouverez ci-joints le document.", "Vous trouverez ci-joint le document.", "Ci-joint antes del nombre: invariable."], ["Objet : Bonjour", "Objet : Réunion du 12 mars – ordre du jour", "El asunto informa."], ["Réponds vite stp", "Merci de me répondre avant lundi.", "Acción clara y cortés."]] }
  ],
  ejemplos: [
    { sit: "«Adjunto encontrará…»", resp: "Vous trouverez ci-joint…", pasos: ["ci-joint invariable."], porque: "Adjunto." },
    { sit: "Un buen asunto:", resp: "Réunion du 12 mars – ordre du jour", pasos: ["Informativo."], porque: "Asunto." },
    { sit: "Un cierre profesional:", resp: "Bien cordialement,", pasos: ["Cordial."], porque: "Cierre." }
  ],
  comprueba: [
    { q: "El asunto del correo debe…", o: ["informar del contenido", "saludar"], a: 0, b: "gr", porque: "Informativo." },
    { q: "«Ci-joint» delante del nombre…", o: ["es invariable", "concuerda"], a: 0, b: "gr", porque: "ci-joint la facture." },
    { q: "El motivo del correo va…", o: ["en la primera frase", "al final"], a: 0, b: "gr", porque: "Claridad." }
  ],
  practica: [
    { fase: "guiada", c: ["b4oc-structure", "b4oc-cijoint"], k: "sort", ask: "¿Sí o no en un correo profesional?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Bonjour Monsieur Martin,", 0], ["Vous trouverez ci-joint…", 0], ["Merci de me confirmer…", 0], ["Cordialement,", 0], ["Coucou !", 1], ["Réponds vite stp", 1], ["Bisous", 1], ["MAJUSCULES PARTOUT", 1]], pista: "¿Profesional?", why: "Registro." },
    { fase: "guiada", c: ["b4oc-cijoint"], k: "choice", ask: "«Adjunto encontrará…»", q: "Elige.", o: ["Vous trouverez ci-joint…", "Vous trouverez ci-joints…"], a: 0, pista: "Invariable.", why: "<b>ci-joint</b>." },
    { fase: "guiada", c: ["b4oc-structure"], k: "choice", ask: "¿Qué asunto es mejor?", q: "Elige.", o: ["Réunion du 12 mars – ordre du jour", "Bonjour !"], a: 0, pista: "Informativo.", why: "Asunto." },
    { fase: "indep", c: ["b4oc-structure"], k: "choice", ask: "Un cierre profesional:", q: "Elige.", o: ["Bien cordialement,", "Bisous !"], a: 0, why: "<b>Bien cordialement</b>." },
    { fase: "indep", c: ["b4oc-structure"], k: "fill", ask: "«con el fin de»", q: "Je vous écris ___ de fixer une date.", acc: ["afin"], why: "<b>afin</b>." },
    { fase: "indep", c: ["b4oc-cijoint"], k: "fill", ask: "«informado»", q: "Merci de me tenir ___ .", acc: ["informé", "informée"], why: "<b>informé</b>." },
    { fase: "aplica", c: ["b4oc-structure"], k: "match", ask: "Une cada pieza con su ejemplo.", q: "Pieza → ejemplo", pairs: [["objet", "Candidature – poste d'assistant"], ["salutation", "Bonjour Madame Roy,"], ["action attendue", "Merci de me répondre avant lundi."], ["formule finale", "Bien cordialement,"]], why: "Piezas." },
    { fase: "aplica", c: ["b4oc-cijoint"], k: "spot", ask: "Encuentra el error.", s: "Vous trouverez [ci-jointe] la facture de février .", fix: "ci-joint", why: "<b>ci-joint</b>." },
    { fase: "aplica", c: ["b4oc-structure"], k: "choice", ask: "Acción esperada clara:", q: "Elige.", o: ["Merci de me confirmer votre présence avant vendredi.", "Bon, tu me dis."], a: 0, why: "Clara." },
    { fase: "dominio", c: ["b4oc-structure"], k: "order", ask: "Ordena: «Le escribo para confirmar la cita».", tokens: ["Je vous écris", "afin de confirmer", "le rendez-vous"], why: "<b>Je vous écris afin de confirmer le rendez-vous</b>" },
    { fase: "dominio", c: ["b4oc-structure"], k: "choice", ask: "El asunto del correo debe…", q: "Elige.", o: ["informar del contenido", "saludar"], a: 0, es: true, why: "Informar." },
    { fase: "dominio", c: ["b4oc-structure", "b4oc-cijoint"], k: "listen", say: "Vous trouverez ci-joint le compte rendu de la réunion de ce matin.", acc: ["Vous trouverez ci-joint le compte rendu de la réunion de ce matin."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vous trouverez ci-joint le compte rendu de la réunion de ce matin.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Roy", "Martin", "Rojas"], previo: [] }
};

/* ── 43. Inviter et répondre à une invitation formelle ── */
E["rem-invitation-formelle"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Inviter et répondre à une invitation formelle",
  objetivo: {
    que: "Vas a redactar una invitación formal y a responderla: aceptar con gusto o declinar con pesar.",
    corto: "Nous avons le plaisir de vous convier à l'inauguration. · Je suis au regret de ne pouvoir être présent.",
    podras: ["Invitar: Nous avons le plaisir / l'honneur de vous convier / inviter à…, qui aura lieu le 5 juin à 18 h.", "Pedir respuesta: Merci de confirmer votre présence avant le 1er juin.", "Aceptar (C'est avec plaisir que j'accepte votre invitation) o declinar (Je suis au regret de ne pouvoir y assister)."],
    iconos: ["ic2/regalo", "ic2/corona", "ic2/pergamino"],
    previos: ["Proponer, aceptar y rechazar (B1.1, lección 54) y las fórmulas de la carta (lección 10)."],
    capacidad: "Ahora invitas y respondes a invitaciones oficiales con elegancia."
  },
  requiere: R("b1pa-prop", "b1pa-rep", "b4lt-formules"), recupera: ["b1pa-rep"],
  conceptos: {
    "b4iv-inviter": { n: "invitar: avoir le plaisir de vous convier à… (convier = invitar), avoir l'honneur de vous inviter à…; datos: qui aura lieu le 5 juin à 18 h, salle Molière (avoir lieu); pedir respuesta: Merci de confirmer votre présence avant…", b: "gr" },
    "b4iv-repondre": { n: "aceptar: C'est avec plaisir que j'accepte votre invitation; J'ai le plaisir d'accepter…; Je serai ravi(e) d'être présent(e); declinar: Je suis au regret de ne pouvoir / ne pas pouvoir y assister; Un empêchement m'oblige à décliner…", b: "gr" }
  },
  video: {
    titulo: "Invitaciones formales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/regalo", grande: "vous convier", seg: [
        { es: "Hola. Invitar, aceptar y declinar con elegancia." } ] },
      { v: "frase", filas: [
          { nota: "invitar", p: 1, partes: [["Nous avons le plaisir de vous convier à l'inauguration.", "-", 1]] },
          { nota: "aceptar", p: 2, partes: [["C'est avec plaisir que j'accepte votre invitation.", "-", 2]] },
          { nota: "declinar", p: 3, partes: [["Je suis au regret de ne pouvoir être présent.", "-", 3]] } ], seg: [
        { fr: "Nous avons le plaisir de vous convier à l'inauguration.", p: 1 }, { fr: "C'est avec plaisir que j'accepte votre invitation.", p: 2 }, { fr: "Je suis au regret de ne pouvoir être présent.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Nous vous convions à la soirée.» Convier significa…", o: ["invitar", "convencer"], a: 0, es: true,
        bien: "¡Sí! Convier = invitar.", mal: "Convier = invitar.",
        seg: [ { es: "Pausa. Convier." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vous convier", "qui aura lieu", "confirmer votre présence", "j'accepte avec plaisir", "au regret de"], seg: [
        { es: "Invitar, datos, respuesta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La entrega de diplomas", img: "bg-universidad", yo: "camila",
    escena: "Camila recibe una invitación oficial de la universidad y la comenta con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Écoute : « Le directeur a le plaisir de vous convier à la remise des diplômes, qui aura lieu le 5 juin à 18 h, salle Molière. Merci de confirmer votre présence avant le 1er juin. »", "Escucha: «El director tiene el placer de invitarle a la entrega de diplomas, que tendrá lugar el 5 de junio a las 18 h, sala Molière. Le rogamos confirme su asistencia antes del 1 de junio.»"],
      ["hugo", "Tu réponds quoi ? — « C'est avec plaisir que j'accepte votre invitation. Je serai ravie d'être présente. »", "¿Qué respondes? — «Acepto con gusto su invitación. Estaré encantada de asistir.»"],
      ["camila", "Et toi ? — Moi, j'ai un examen ce jour-là : « Je suis au regret de ne pouvoir y assister. Un empêchement m'oblige à décliner votre invitation. »", "¿Y tú? — Yo tengo un examen ese día: «Lamento no poder asistir. Un impedimento me obliga a declinar su invitación.»"],
      ["hugo", "Dommage ! Et la cérémonie de la mairie aura lieu le 12 mai à 17 h : là, je confirme ma présence.", "¡Qué pena! Y la ceremonia del ayuntamiento tendrá lugar el 12 de mayo a las 17 h: ahí sí confirmo mi asistencia."]
    ],
    fijate: "Fíjate: a le plaisir de vous convier, qui aura lieu le…, Merci de confirmer votre présence avant…, C'est avec plaisir que j'accepte, Je serai ravie, Je suis au regret de ne pouvoir, Un empêchement m'oblige à décliner."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Invitar y responder",
      idea: "Invitar: Le directeur a le plaisir de vous convier à… / Nous avons l'honneur de vous inviter à… (convier = invitar, más formal). Datos: qui aura lieu le 5 juin à 18 h, salle Molière (avoir lieu = tener lugar; nunca «avoir place»). Pedir respuesta (RSVP): Merci de confirmer votre présence avant le 1er juin. Aceptar: C'est avec plaisir que j'accepte votre invitation; J'ai le plaisir d'accepter…; Je serai ravi(e) d'être présent(e); Je m'y rendrai avec plaisir. Declinar: Je suis au regret de ne pouvoir (o de ne pas pouvoir) y assister; Je ne pourrai malheureusement pas…; Un empêchement m'oblige à décliner… «Ne pouvoir» sin pas es registro culto; las dos son correctas.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Función"], [
        ["Nous vous convions à la soirée.", "Les invitamos a la velada.", "invitar"],
        ["C'est avec plaisir que j'accepte votre invitation.", "Acepto con gusto su invitación.", "aceptar"],
        ["Je suis au regret de ne pouvoir y assister.", "Lamento no poder asistir.", "declinar"],
        ["Merci de confirmer votre présence avant vendredi. · confirmer", "Le rogamos confirme su asistencia antes del viernes.", "pedir respuesta"],
        ["La cérémonie aura lieu le 12 mai à 17 h. · lieu", "La ceremonia tendrá lugar el 12 de mayo a las 17 h.", "datos"],
        ["avoir le plaisir de vous convier = invitar · qui aura lieu le… = dar datos · merci de confirmer = pedir respuesta · être au regret de = declinar", "funciones", "resumen"],
        ["J'ai le plaisir d'accepter… · Je serai ravi d'être présent. · Je confirme ma présence. · Je m'y rendrai avec plaisir.", "Tengo el placer de aceptar · Estaré encantado de asistir · Confirmo mi asistencia · Iré con gusto", "Acepta"],
        ["Je suis au regret de… · Je ne pourrai malheureusement pas… · Un empêchement m'oblige à décliner… · Je dois me faire excuser.", "Lamento… · Lamentablemente no podré… · Un impedimento me obliga a declinar… · Debo excusarme", "Declina"],
        ["La réunion aura lieu le lundi 3 mars à 10 h.", "La reunión tendrá lugar el lunes 3 de marzo a las 10 h.", "datos"],
        ["C'est avec plaisir que j'accepte votre invitation", "Acepto con gusto su invitación", "aceptar"],
        ["Nous avons le plaisir de vous convier à la remise des diplômes.", "Tenemos el placer de invitarle a la entrega de diplomas.", "invitar"]
      ]],
      ej: [["Nous avons le plaisir de vous convier à l'inauguration.", "Tenemos el placer de invitarle a la inauguración."], ["C'est avec plaisir que j'accepte votre invitation.", "Acepto con gusto su invitación."], ["Je suis au regret de ne pouvoir être présent.", "Lamento no poder estar presente."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La réunion aura place le 3 mars.", "La réunion aura lieu le 3 mars.", "avoir lieu."], ["Je suis au regret de ne pas pouvoir… / de ne pouvoir…", "Ambas correctas", "Ne pouvoir sin pas es registro culto."], ["Je ne viens pas, désolé.", "Je suis au regret de ne pouvoir y assister.", "Declinar con cortesía."]] }
  ],
  ejemplos: [
    { sit: "«Nous vous convions à la soirée.» Convier es…", resp: "invitar", pasos: ["Formal."], porque: "Invitar." },
    { sit: "Aceptar una invitación formal:", resp: "C'est avec plaisir que j'accepte votre invitation.", pasos: ["Con gusto."], porque: "Aceptar." },
    { sit: "Declinar una invitación formal:", resp: "Je suis au regret de ne pouvoir y assister.", pasos: ["Con pesar."], porque: "Declinar." }
  ],
  comprueba: [
    { q: "«Tener lugar» se dice…", o: ["avoir lieu", "avoir place"], a: 0, b: "gr", porque: "aura lieu." },
    { q: "«Être au regret de» sirve para…", o: ["declinar", "aceptar"], a: 0, b: "gr", porque: "Pesar." },
    { q: "«Merci de confirmer votre présence» pide…", o: ["una respuesta", "un pago"], a: 0, b: "gr", porque: "RSVP." }
  ],
  practica: [
    { fase: "guiada", c: ["b4iv-repondre"], k: "sort", ask: "¿Acepta o declina?", q: "Clasifica.", cats: ["Acepta", "Declina"], items: [["J'ai le plaisir d'accepter…", 0], ["Je serai ravi d'être présent.", 0], ["Je confirme ma présence.", 0], ["Je m'y rendrai avec plaisir.", 0], ["Je suis au regret de…", 1], ["Je ne pourrai malheureusement pas…", 1], ["Un empêchement m'oblige à décliner…", 1], ["Je dois me faire excuser.", 1]], pista: "¿Plaisir o regret?", why: "Respuestas." },
    { fase: "guiada", c: ["b4iv-inviter"], k: "choice", es: true, ask: "«Nous vous convions à la soirée.» Convier significa…", q: "Elige.", o: ["invitar", "convencer"], a: 0, pista: "Formal.", why: "Invitar." },
    { fase: "guiada", c: ["b4iv-repondre"], k: "choice", ask: "Aceptar una invitación formal:", q: "Elige.", o: ["C'est avec plaisir que j'accepte votre invitation.", "Ouais, je viens."], a: 0, pista: "Con gusto.", why: "Formal." },
    { fase: "indep", c: ["b4iv-repondre"], k: "choice", ask: "Declinar una invitación formal:", q: "Elige.", o: ["Je suis au regret de ne pouvoir y assister.", "Non merci, pas envie."], a: 0, why: "Con pesar." },
    { fase: "indep", c: ["b4iv-inviter"], k: "fill", ask: "«confirmar»", q: "Merci de ___ votre présence avant vendredi.", acc: ["confirmer"], why: "<b>confirmer</b>." },
    { fase: "indep", c: ["b4iv-inviter"], k: "fill", ask: "«tendrá lugar» (aura …)", q: "La cérémonie aura ___ le 12 mai à 17 h.", acc: ["lieu"], why: "<b>lieu</b>." },
    { fase: "aplica", c: ["b4iv-inviter", "b4iv-repondre"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["avoir le plaisir de vous convier", "invitar"], ["qui aura lieu le…", "dar datos"], ["merci de confirmer", "pedir respuesta"], ["être au regret de", "declinar"]], why: "Funciones." },
    { fase: "aplica", c: ["b4iv-inviter"], k: "spot", ask: "Encuentra el error.", s: "La réunion aura [place] le lundi 3 mars à 10 h .", fix: "lieu", why: "<b>lieu</b>." },
    { fase: "aplica", c: ["b4iv-repondre"], k: "choice", ask: "«Estaré encantada de asistir.»", q: "Elige.", o: ["Je serai ravie d'être présente.", "Je serai ravie de être présente."], a: 0, why: "<b>d'être</b>." },
    { fase: "dominio", c: ["b4iv-repondre"], k: "order", ask: "Ordena: «Acepto con gusto su invitación».", tokens: ["C'est avec plaisir", "que j'accepte", "votre invitation"], why: "<b>C'est avec plaisir que j'accepte votre invitation</b>" },
    { fase: "dominio", c: ["b4iv-repondre"], k: "choice", ask: "«Être au regret de» sirve para…", q: "Elige.", o: ["declinar", "aceptar"], a: 0, es: true, why: "Declinar." },
    { fase: "dominio", c: ["b4iv-inviter", "b4iv-repondre"], k: "listen", say: "Nous avons le plaisir de vous convier à la remise des diplômes.", acc: ["Nous avons le plaisir de vous convier à la remise des diplômes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous avons le plaisir de vous convier à la remise des diplômes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Molière"], previo: [] }
};

/* ================================ B2.2·5 · Situaciones delicadas ================================ */
/* ── 44. Adoucir une demande : conditionnel et formules ── */
E["rem-attenuer-demande"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Adoucir une demande : conditionnel et formules",
  objetivo: {
    que: "Vas a pedir sin sonar brusco: condicional, fórmulas de cortesía y una escala que va de lo directo a lo muy cortés.",
    corto: "Serait-il possible de décaler la réunion ? · Je vous serais reconnaissant de me répondre rapidement.",
    podras: ["Usar Pourriez-vous… ?, Serait-il possible de… ?, Vous serait-il possible de… ?", "Usar Je vous serais reconnaissant(e) de + infinitivo y Je vous saurais gré de…", "Graduar la petición: Envoyez-moi… (directa) < Pouvez-vous… ? < Pourriez-vous… ? < Auriez-vous l'amabilité de… ? (muy cortés)."],
    iconos: ["ic2/corona", "ic2/amigos", "ic2/flor"],
    previos: ["El condicional de cortesía (B1.1, lección 22), atenuar (B1.2, lección 40) y el condicional (lección 8)."],
    capacidad: "Ahora pides lo que necesitas sin parecer brusco."
  },
  requiere: R("b1cp-demander", "b2at-cond", "b4cd-usages"), recupera: ["b2at-cond"],
  conceptos: {
    "b4ad-formules": { n: "fórmulas: Pourriez-vous + inf. ?, Serait-il possible de + inf. ?, Vous serait-il possible de… ?, Je vous serais reconnaissant(e) de + inf. (no «si»), Je vous saurais gré de…, Auriez-vous l'amabilité de + inf. ?", b: "gr" },
    "b4ad-echelle": { n: "escala: Envoyez-moi… (directa) < Pouvez-vous… ? (neutra) < Pourriez-vous… ? (cortés) < Auriez-vous l'amabilité de… ? (muy cortés); suavizadores: éventuellement, si possible; brusco: J'exige…, Faites-le maintenant", b: "gr" }
  },
  video: {
    titulo: "Pedir con suavidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corona", grande: "Serait-il possible… ?", seg: [
        { es: "Hola. El condicional suaviza cualquier petición." } ] },
      { v: "frase", filas: [
          { nota: "posible", p: 1, partes: [["Serait-il possible de décaler la réunion ?", "-", 1]] },
          { nota: "agradecido", p: 2, partes: [["Je vous serais reconnaissant de me répondre rapidement.", "-", 2]] },
          { nota: "amabilidad", p: 3, partes: [["Auriez-vous l'amabilité de me rappeler ?", "-", 3]] } ], seg: [
        { fr: "Serait-il possible de décaler la réunion ?", p: 1 }, { fr: "Je vous serais reconnaissant de me répondre rapidement.", p: 2 }, { fr: "Auriez-vous l'amabilité de me rappeler ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Le agradecería que me enviara el documento.»", o: ["Je vous serais reconnaissant de m'envoyer le document.", "Je vous serais reconnaissant si vous m'envoyez le document."], a: 0,
        bien: "¡Sí! De + infinitivo.", mal: "Construcción: de + infinitivo.",
        seg: [ { es: "Pausa. De + infinitivo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Pourriez-vous", "Serait-il possible de", "Je vous serais reconnaissant de", "Auriez-vous l'amabilité de"], seg: [
        { es: "De lo directo a lo muy cortés.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cambiar la cita", img: "bg-biblioteca", yo: "camila",
    escena: "Camila necesita cambiar una cita con su directora de tesis y escribe un correo.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Changez la date de notre rendez-vous. » C'est trop direct ?", "Escribí: «Cambie la fecha de nuestra cita.» ¿Es demasiado directo?"],
      ["hugo", "Oui ! « Serait-il possible de reporter notre rendez-vous à la semaine prochaine ? »", "¡Sí! «¿Sería posible aplazar nuestra cita a la semana próxima?»"],
      ["camila", "Et pour le document ? — « Je vous serais reconnaissante de m'envoyer le document. Pourriez-vous m'envoyer le lien ? »", "¿Y para el documento? — «Le agradecería que me enviara el documento. ¿Podría enviarme el enlace?»"],
      ["hugo", "Parfait. Et si c'est très délicat : « Auriez-vous l'amabilité de me rappeler ? » Jamais « J'exige une réponse » !", "Perfecto. Y si es muy delicado: «¿Tendría la amabilidad de llamarme?» ¡Nunca «Exijo una respuesta»!"]
    ],
    fijate: "Fíjate: Changez… (directo) → Serait-il possible de reporter… ?; Je vous serais reconnaissante de m'envoyer (de + infinitivo); Pourriez-vous… ?; Auriez-vous l'amabilité de… ? (muy cortés)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fórmulas y escala de cortesía",
      idea: "Fórmulas con condicional: Pourriez-vous + infinitivo ? (¿Podría…?); Serait-il possible de + infinitivo ? / Vous serait-il possible de… ? (¿Sería posible…?); Je vous serais reconnaissant(e) de + infinitivo (Le agradecería que…; nunca «si vous…»; serais en condicional, no «serai»); Je vous saurais gré de… (muy formal); Auriez-vous l'amabilité de + infinitivo ? (¿Tendría la amabilidad de…?). Escala: Envoyez-moi… (directa) < Pouvez-vous… ? (neutra) < Pourriez-vous… ? (cortés) < Auriez-vous l'amabilité de… ? (muy cortés). Suavizadores: éventuellement, si possible.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Nivel"], [
        ["Serait-il possible de changer la date ?", "¿Sería posible cambiar la fecha?", "cortés"],
        ["Je vous serais reconnaissant de m'envoyer le document.", "Le agradecería que me enviara el documento.", "cortés"],
        ["Auriez-vous l'amabilité de m'aider ?", "¿Tendría la amabilidad de ayudarme?", "muy cortés"],
        ["Pourriez-vous m'envoyer le lien ? · Pourriez", "¿Podría enviarme el enlace?", "cortés"],
        ["Serait-il possible de recevoir une facture ? · possible", "¿Sería posible recibir una factura?", "cortés"],
        ["Envoyez-moi… = directa · Pouvez-vous… ? = neutra · Pourriez-vous… ? = cortés · Auriez-vous l'amabilité de… ? = muy cortés", "escala", "resumen"],
        ["Serait-il possible de… · Je vous saurais gré de… · Pourriez-vous éventuellement… · Si possible, merci de…", "¿Sería posible…? · Le agradecería… · ¿Podría eventualmente…? · Si es posible…", "Suave"],
        ["Faites-le maintenant. · J'exige une réponse. · Répondez ! · C'est urgent, bougez-vous.", "Hágalo ya · Exijo una respuesta · ¡Responda! · Es urgente, muévase", "Brusca"],
        ["Je vous serais reconnaissant de bien vouloir me rappeler. · serais", "Le agradecería que tuviera a bien llamarme.", "condicional"],
        ["Auriez-vous l'amabilité de m'aider ?", "¿Tendría la amabilidad de ayudarme?", "muy cortés"],
        ["Serait-il possible de reporter notre rendez-vous à la semaine prochaine ?", "¿Sería posible aplazar nuestra cita a la semana próxima?", "cortés"]
      ]],
      ej: [["Serait-il possible de décaler la réunion ?", "¿Sería posible aplazar la reunión?"], ["Je vous serais reconnaissant de me répondre rapidement.", "Le agradecería que me respondiera pronto."], ["Auriez-vous l'amabilité de me rappeler ?", "¿Tendría la amabilidad de llamarme?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vous serais reconnaissant si vous me répondez.", "Je vous serais reconnaissant de me répondre.", "Construcción: de + infinitivo."], ["Je vous serai reconnaissant…", "Je vous serais reconnaissant…", "Condicional: serais."], ["J'exige une réponse.", "Je vous serais reconnaissant de me répondre.", "Nunca exigir."]] }
  ],
  ejemplos: [
    { sit: "«¿Sería posible cambiar la fecha?»", resp: "Serait-il possible de changer la date ?", pasos: ["Condicional de être."], porque: "Cortés." },
    { sit: "«Le agradecería que me enviara el documento.»", resp: "Je vous serais reconnaissant de m'envoyer le document.", pasos: ["de + infinitivo."], porque: "Cortés." },
    { sit: "Petición muy cortés:", resp: "Auriez-vous l'amabilité de m'aider ?", pasos: ["Amabilidad."], porque: "Muy cortés." }
  ],
  comprueba: [
    { q: "«Je vous serais reconnaissant» va con…", o: ["de + infinitivo", "si + presente"], a: 0, b: "gr", porque: "de me répondre." },
    { q: "La fórmula más cortés es…", o: ["Auriez-vous l'amabilité de… ?", "Pouvez-vous… ?"], a: 0, b: "gr", porque: "Escala." },
    { q: "«J'exige une réponse» es…", o: ["brusca", "suave"], a: 0, b: "gr", porque: "Exigir." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ad-echelle"], k: "sort", ask: "¿Suave o brusca?", q: "Clasifica.", cats: ["Suave", "Brusca"], items: [["Serait-il possible de…", 0], ["Je vous saurais gré de…", 0], ["Pourriez-vous éventuellement…", 0], ["Si possible, merci de…", 0], ["Faites-le maintenant.", 1], ["J'exige une réponse.", 1], ["Répondez !", 1], ["C'est urgent, bougez-vous.", 1]], pista: "¿Condicional o imperativo?", why: "Escala." },
    { fase: "guiada", c: ["b4ad-formules"], k: "choice", ask: "«¿Sería posible cambiar la fecha?»", q: "Elige.", o: ["Serait-il possible de changer la date ?", "Sera-t-il possible changer la date ?"], a: 0, pista: "Condicional + de.", why: "<b>Serait-il possible de</b>." },
    { fase: "guiada", c: ["b4ad-formules"], k: "choice", ask: "«Le agradecería que me enviara el documento.»", q: "Elige.", o: ["Je vous serais reconnaissant de m'envoyer le document.", "Je vous serais reconnaissant si vous m'envoyez le document."], a: 0, pista: "de + infinitivo.", why: "<b>de m'envoyer</b>." },
    { fase: "indep", c: ["b4ad-formules"], k: "choice", ask: "Petición muy cortés:", q: "Elige.", o: ["Auriez-vous l'amabilité de m'aider ?", "Aidez-moi."], a: 0, why: "Muy cortés." },
    { fase: "indep", c: ["b4ad-formules"], k: "fill", ask: "Condicional de pouvoir (vous).", q: "___ -vous m'envoyer le lien ?", acc: ["Pourriez", "pourriez"], why: "<b>Pourriez</b>." },
    { fase: "indep", c: ["b4ad-formules"], k: "fill", ask: "«posible»", q: "Serait-il ___ de recevoir une facture ?", acc: ["possible"], why: "<b>possible</b>." },
    { fase: "aplica", c: ["b4ad-echelle"], k: "match", ask: "Une cada fórmula con su nivel.", q: "Fórmula → nivel", pairs: [["Envoyez-moi…", "directa"], ["Pouvez-vous… ?", "neutra"], ["Pourriez-vous… ?", "cortés"], ["Auriez-vous l'amabilité de… ?", "muy cortés"]], why: "Escala." },
    { fase: "aplica", c: ["b4ad-formules"], k: "spot", ask: "Encuentra el error.", s: "Je vous [serai] reconnaissant de bien vouloir me rappeler .", fix: "serais", why: "<b>serais</b>." },
    { fase: "aplica", c: ["b4ad-formules"], k: "spot", ask: "Encuentra el error.", s: "Je vous serais reconnaissant [si] me répondre rapidement .", fix: "de", why: "<b>de</b> + infinitivo." },
    { fase: "dominio", c: ["b4ad-formules"], k: "order", ask: "Ordena: «¿Tendría la amabilidad de ayudarme?»", tokens: ["Auriez-vous", "l'amabilité", "de m'aider ?"], why: "<b>Auriez-vous l'amabilité de m'aider ?</b>" },
    { fase: "dominio", c: ["b4ad-echelle"], k: "choice", ask: "La fórmula más cortés es…", q: "Elige.", o: ["Auriez-vous l'amabilité de… ?", "Pouvez-vous… ?"], a: 0, why: "Muy cortés." },
    { fase: "dominio", c: ["b4ad-formules", "b4ad-echelle"], k: "listen", say: "Serait-il possible de reporter notre rendez-vous à la semaine prochaine ?", acc: ["Serait-il possible de reporter notre rendez-vous à la semaine prochaine ?", "Serait-il possible de reporter notre rendez-vous à la semaine prochaine?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Serait-il possible de reporter notre rendez-vous à la semaine prochaine ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 45. Relancer poliment : quand on n'a pas de réponse ── */
E["rem-relancer"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Relancer poliment : quand on n'a pas de réponse",
  objetivo: {
    que: "Vas a volver a escribir cuando no te responden, sin acusar: recordar el primer mensaje, suavizar, repetir la petición y facilitar la respuesta.",
    corto: "Je me permets de revenir vers vous au sujet de ma candidature. · Sauf erreur de ma part, je n'ai pas reçu de réponse.",
    podras: ["Retomar el contacto: Je me permets de revenir vers vous concernant mon courriel du 3 mai.", "Suavizar sin acusar: Sauf erreur de ma part, …; Il est possible que mon message vous ait échappé (+ subjuntivo).", "Repetir la petición (Pourriez-vous me faire savoir si… ?) y facilitar: Je reste à votre disposition pour tout complément d'information."],
    iconos: ["ic2/laptop", "ic2/reloj-arena", "ic2/flor"],
    previos: ["Pedir información (lección 36), el subjuntivo pasado (B1.2, lección 18) y suavizar una petición (lección 44)."],
    capacidad: "Ahora insistes sin molestar y consigues tu respuesta."
  },
  requiere: R("b2sp-forme", "b4di-questions", "b4ad-formules"), recupera: ["b4ad-formules"],
  conceptos: {
    "b4rl-relance": { n: "retomar: Je me permets de revenir vers vous / de vous relancer au sujet de / concernant mon courriel du…; suavizar: Sauf erreur de ma part, je n'ai pas reçu de réponse; Il est possible que mon message vous ait échappé (subjuntivo pasado); Je comprends que vous soyez occupé(e)", b: "gr" },
    "b4rl-faciliter": { n: "repetir la petición: Pourriez-vous me faire savoir si…; dans les meilleurs délais (lo antes posible); facilitar: Je reste à votre disposition pour tout complément d'information / renseignement; nunca acusar (C'est la troisième fois que j'écris !)", b: "gr" }
  },
  video: {
    titulo: "Insistir con cortesía", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "Sauf erreur de ma part", seg: [
        { es: "Hola. Sin respuesta, se relanza: nunca se acusa." } ] },
      { v: "frase", filas: [
          { nota: "retomar", p: 1, partes: [["Je me permets de revenir vers vous au sujet de ma candidature.", "-", 1]] },
          { nota: "suavizar", p: 2, partes: [["Sauf erreur de ma part, je n'ai pas reçu de réponse.", "-", 2]] },
          { nota: "subjuntivo", p: 3, partes: [["Il est possible que mon message vous ait échappé.", "-", 3]] } ], seg: [
        { fr: "Je me permets de revenir vers vous au sujet de ma candidature.", p: 1 }, { fr: "Sauf erreur de ma part, je n'ai pas reçu de réponse.", p: 2 }, { fr: "Il est possible que mon message vous ait échappé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "No hay respuesta. Escribes…", o: ["Sauf erreur de ma part, je n'ai pas reçu de réponse.", "Vous ne m'avez pas répondu !"], a: 0,
        bien: "¡Sí! Sin acusar.", mal: "Nunca acusar.",
        seg: [ { es: "Pausa. Sin acusar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["revenir vers vous", "Sauf erreur de ma part", "vous ait échappé", "dans les meilleurs délais", "à votre disposition"], seg: [
        { es: "Recordar, suavizar, repetir, facilitar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La candidatura sin respuesta", img: "bg-cafe", yo: "camila",
    escena: "Camila no ha recibido respuesta a su candidatura y quiere volver a escribir.",
    pj: PJ,
    lineas: [
      ["camila", "Ça fait trois semaines ! J'ai envie d'écrire : « C'est la troisième fois que j'écris, répondez enfin ! »", "¡Hace tres semanas! Me dan ganas de escribir: «¡Es la tercera vez que escribo, respondan de una vez!»"],
      ["hugo", "Surtout pas. « Je me permets de revenir vers vous au sujet de mon courriel du 10 mars. Sauf erreur de ma part, je n'ai pas reçu de réponse. »", "Para nada. «Me permito volver a contactarles en relación con mi correo del 10 de marzo. Salvo error por mi parte, no he recibido respuesta.»"],
      ["camila", "Et pour adoucir ? — « Il est possible que mon message vous ait échappé. Je comprends que vous soyez très occupés. »", "¿Y para suavizar? — «Es posible que mi mensaje se les haya pasado. Entiendo que estén muy ocupados.»"],
      ["hugo", "Puis : « Pourriez-vous me faire savoir si ma candidature est toujours à l'étude ? Je reste à votre disposition pour tout complément d'information. »", "Luego: «¿Podrían indicarme si mi candidatura sigue en estudio? Quedo a su disposición para cualquier información adicional.»"]
    ],
    fijate: "Fíjate: Je me permets de revenir vers vous au sujet de, Sauf erreur de ma part, vous ait échappé (subjuntivo), soyez occupés, Pourriez-vous me faire savoir si, Je reste à votre disposition."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Relanzar en cuatro pasos",
      idea: "1. Recordar el primer mensaje: Je me permets de revenir vers vous (o de vous relancer) au sujet de / concernant mon courriel du 3 mai. 2. Suavizar, sin acusar: Sauf erreur de ma part, je n'ai pas reçu de réponse; Il est possible que mon message vous ait échappé (il est possible que + subjuntivo: ait); Je comprends que vous soyez occupé(e). 3. Repetir la petición: Pourriez-vous me faire savoir si… ?; dans les meilleurs délais (lo antes posible). 4. Facilitar: Je reste à votre disposition pour tout complément d'information. Nunca: «Vous ne m'avez pas répondu !», «C'est la troisième fois que j'écris !».",
      intro: "Toca cada paso.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Je me permets de revenir vers vous.", "Me permito volver a contactarle.", "retomar"],
        ["Sauf erreur de ma part, je n'ai pas reçu de réponse.", "Salvo error por mi parte, no he recibido respuesta.", "suavizar"],
        ["dans les meilleurs délais", "lo antes posible", "plazo"],
        ["Il est possible que mon message vous ait échappé. · ait", "Es posible que mi mensaje se le haya pasado.", "suavizar"],
        ["Je reste à votre disposition pour tout renseignement. · disposition", "Quedo a su disposición para cualquier información.", "facilitar"],
        ["Je me permets de revenir vers vous = retomar el contacto · Sauf erreur de ma part = suavizar · Pourriez-vous me faire savoir si… = repetir la petición · Je reste à votre disposition = facilitar", "pasos", "resumen"],
        ["Je me permets de vous relancer… · Mon message a peut-être été perdu. · N'hésitez pas à me contacter. · Je comprends que vous soyez occupé.", "Me permito insistir… · Quizá mi mensaje se perdió · No dude en contactarme · Entiendo que esté ocupado", "Cortés"],
        ["C'est la troisième fois que j'écris ! · Répondez enfin ! · Vous êtes inefficaces. · Je vais me plaindre.", "¡Es la tercera vez que escribo! · ¡Respondan de una vez! · Son ineficaces · Voy a quejarme", "Agresivo"],
        ["Je me permets de revenir vers vous concernant ma demande. · permets", "Me permito volver a contactarle sobre mi solicitud.", "retomar"],
        ["Sauf erreur de ma part", "Salvo error por mi parte", "suavizar"],
        ["Je me permets de revenir vers vous au sujet de mon courriel du 10 mars.", "Me permito volver a contactarle en relación con mi correo del 10 de marzo.", "retomar"]
      ]],
      ej: [["Je me permets de revenir vers vous au sujet de ma candidature.", "Me permito volver a contactarle sobre mi candidatura."], ["Sauf erreur de ma part, je n'ai pas reçu de réponse.", "Salvo error por mi parte, no he recibido respuesta."], ["Il est possible que mon message vous ait échappé.", "Es posible que mi mensaje se le haya pasado."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Vous ne m'avez pas répondu !", "Sauf erreur de ma part, je n'ai pas reçu de réponse.", "Nunca acusar."], ["Il est possible que mon message vous a échappé.", "… vous ait échappé.", "il est possible que + subjuntivo."], ["Je me permis de revenir vers vous.", "Je me permets de revenir vers vous.", "Presente: permets."]] }
  ],
  ejemplos: [
    { sit: "«Me permito volver a contactarle.»", resp: "Je me permets de revenir vers vous.", pasos: ["Retomar."], porque: "Relanzar." },
    { sit: "No hay respuesta (sin acusar):", resp: "Sauf erreur de ma part, je n'ai pas reçu de réponse.", pasos: ["Suavizar."], porque: "Cortés." },
    { sit: "«Lo antes posible»", resp: "dans les meilleurs délais", pasos: ["Plazo formal."], porque: "Plazo." }
  ],
  comprueba: [
    { q: "«Il est possible que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "ait échappé." },
    { q: "«Sauf erreur de ma part» sirve para…", o: ["suavizar", "acusar"], a: 0, b: "gr", porque: "Prudencia." },
    { q: "«Je reste à votre disposition» sirve para…", o: ["facilitar la respuesta", "despedirse con enfado"], a: 0, b: "gr", porque: "Facilitar." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rl-relance", "b4rl-faciliter"], k: "sort", ask: "¿Cortés o agresivo?", q: "Clasifica.", cats: ["Cortés", "Agresivo"], items: [["Je me permets de vous relancer…", 0], ["Mon message a peut-être été perdu.", 0], ["N'hésitez pas à me contacter.", 0], ["Je comprends que vous soyez occupé.", 0], ["C'est la troisième fois que j'écris !", 1], ["Répondez enfin !", 1], ["Vous êtes inefficaces.", 1], ["Je vais me plaindre.", 1]], pista: "¿Acusa?", why: "Tono." },
    { fase: "guiada", c: ["b4rl-relance"], k: "choice", ask: "«Me permito volver a contactarle.»", q: "Elige.", o: ["Je me permets de revenir vers vous.", "Je reviens vers vous parce que rien."], a: 0, pista: "Fórmula.", why: "Retomar." },
    { fase: "guiada", c: ["b4rl-relance"], k: "choice", ask: "No hay respuesta (sin acusar):", q: "Elige.", o: ["Sauf erreur de ma part, je n'ai pas reçu de réponse.", "Vous ne m'avez pas répondu !"], a: 0, pista: "Suavizar.", why: "Cortés." },
    { fase: "indep", c: ["b4rl-faciliter"], k: "choice", ask: "«Lo antes posible»", q: "Elige.", o: ["dans les meilleurs délais", "tout de suite, vite"], a: 0, why: "Formal." },
    { fase: "indep", c: ["b4rl-relance"], k: "fill", ask: "Subjuntivo de avoir (mon message).", q: "Il est possible que mon message vous ___ échappé.", acc: ["ait"], why: "<b>ait</b>." },
    { fase: "indep", c: ["b4rl-faciliter"], k: "fill", ask: "«a su disposición»", q: "Je reste à votre ___ pour tout renseignement.", acc: ["disposition"], why: "<b>disposition</b>." },
    { fase: "aplica", c: ["b4rl-relance", "b4rl-faciliter"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Je me permets de revenir vers vous", "retomar el contacto"], ["Sauf erreur de ma part", "suavizar"], ["Pourriez-vous me faire savoir si…", "repetir la petición"], ["Je reste à votre disposition", "facilitar"]], why: "Pasos." },
    { fase: "aplica", c: ["b4rl-relance"], k: "spot", ask: "Encuentra el error.", s: "Je me [permis] de revenir vers vous concernant ma demande .", fix: "permets", why: "<b>permets</b>." },
    { fase: "aplica", c: ["b4rl-relance"], k: "spot", ask: "Encuentra el error.", s: "Il est possible que mon message vous [a] échappé .", fix: "ait", why: "<b>ait</b>." },
    { fase: "dominio", c: ["b4rl-relance"], k: "order", ask: "Ordena: «Salvo error por mi parte».", tokens: ["Sauf", "erreur", "de ma part"], why: "<b>Sauf erreur de ma part</b>" },
    { fase: "dominio", c: ["b4rl-relance"], k: "choice", ask: "«Il est possible que» va con…", q: "Elige.", o: ["subjuntivo", "indicativo"], a: 0, es: true, why: "Subjuntivo." },
    { fase: "dominio", c: ["b4rl-relance", "b4rl-faciliter"], k: "listen", say: "Je me permets de revenir vers vous au sujet de mon courriel du 10 mars.", acc: ["Je me permets de revenir vers vous au sujet de mon courriel du 10 mars.", "Je me permets de revenir vers vous au sujet de mon courriel du dix mars."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je me permets de revenir vers vous au sujet de mon courriel du 10 mars.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 46. Annoncer une mauvaise nouvelle ou refuser par écrit ── */
E["rem-mauvaise-nouvelle"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Annoncer une mauvaise nouvelle ou refuser par écrit",
  objetivo: {
    que: "Vas a comunicar una negativa con tacto: agradecer, anunciar la noticia, explicar brevemente y abrir una perspectiva.",
    corto: "Nous avons le regret de vous informer que votre candidature n'a pas été retenue. · Malheureusement, l'événement est annulé en raison de la météo.",
    podras: ["Agradecer: Nous vous remercions de l'intérêt que vous portez à…", "Anunciar con tacto: Nous avons le regret de vous informer que…; Malheureusement, nous ne pouvons pas donner suite à…", "Explicar (En raison de…, Compte tenu de…) y abrir una perspectiva (Nous conservons votre dossier…, Nous espérons avoir l'occasion de…)."],
    iconos: ["ic2/pergamino", "ic2/corazon", "ic2/flor"],
    previos: ["Las disculpas por escrito (lección 37), los eufemismos (B2.1, lección 64) y la causa (B2.1, lección 26)."],
    capacidad: "Ahora das una mala noticia por escrito sin herir."
  },
  requiere: R("b3eu2-travail", "b3ca-nom", "b4ex-reconnaitre"), recupera: ["b3eu2-travail"],
  conceptos: {
    "b4mn-annoncer": { n: "agradecer (Nous vous remercions de l'intérêt que vous portez à…), anunciar (Nous avons le regret de vous informer que… — informer que, sin de; Malheureusement, …; Nous ne pouvons pas donner suite à… = no seguir adelante; Votre candidature n'a pas été retenue)", b: "gr" },
    "b4mn-perspective": { n: "explicar: En raison de…, Compte tenu de…; perspectiva: Nous conservons votre dossier pour de futures offres; Nous espérons avoir l'occasion de…; frente a la respuesta positiva: Nous avons le plaisir de vous informer…, Votre candidature a été retenue", b: "gr" }
  },
  video: {
    titulo: "Dar una mala noticia", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Nous avons le regret", seg: [
        { es: "Hola. Agradecer, anunciar, explicar y abrir." } ] },
      { v: "frase", filas: [
          { nota: "anunciar", p: 1, partes: [["Nous avons le regret de vous informer que votre candidature n'a pas été retenue.", "-", 1]] },
          { nota: "explicar", p: 2, partes: [["Malheureusement, l'événement est annulé en raison de la météo.", "-", 2]] },
          { nota: "rechazar", p: 3, partes: [["Nous ne pouvons pas donner une suite favorable à votre demande.", "-", 3]] } ], seg: [
        { fr: "Nous avons le regret de vous informer que votre candidature n'a pas été retenue.", p: 1 }, { fr: "Malheureusement, l'événement est annulé en raison de la météo.", p: 2 }, { fr: "Nous ne pouvons pas donner une suite favorable à votre demande.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Lamentamos informarle de que…»", o: ["Nous avons le regret de vous informer que…", "Nous avons le regret de vous informer de que…"], a: 0,
        bien: "¡Sí! Informer que, sin de.", mal: "En francés: informer que.",
        seg: [ { es: "Pausa. Sin «de»." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Nous vous remercions de", "Nous avons le regret de", "retenue", "Malheureusement", "Nous conservons votre dossier"], seg: [
        { es: "Con tacto y con perspectiva.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La respuesta de la empresa", img: "bg-cafe", yo: "camila",
    escena: "Camila recibe una respuesta negativa a su candidatura y la lee con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "« Nous vous remercions de l'intérêt que vous portez à notre entreprise. Nous avons le regret de vous informer que votre candidature n'a pas été retenue. »", "«Le agradecemos el interés que muestra por nuestra empresa. Lamentamos informarle de que su candidatura no ha sido seleccionada.»"],
      ["hugo", "C'est poli, au moins. Et la suite ? — « Compte tenu du nombre de candidatures, nous ne pouvons pas donner suite à votre demande. »", "Al menos es educado. ¿Y luego? — «Dado el número de candidaturas, no podemos dar curso a su solicitud.»"],
      ["camila", "« Nous conservons votre dossier pour de futures offres et espérons avoir l'occasion de vous rencontrer. »", "«Conservamos su expediente para futuras ofertas y esperamos tener la ocasión de conocerle.»"],
      ["hugo", "Bon, il y a une perspective. Et regarde, l'école de langues aussi : « Nous avons le regret de vous informer que la formation est complète. Malheureusement, le concert de fin d'année est annulé. »", "Bueno, hay una perspectiva. Y mira, la escuela de idiomas también: «Lamentamos informarle de que la formación está completa. Lamentablemente, el concierto de fin de curso se cancela.»"]
    ],
    fijate: "Fíjate: Nous vous remercions de l'intérêt (agradecer), Nous avons le regret de vous informer que (anunciar), n'a pas été retenue, Compte tenu de (explicar), donner suite, Nous conservons votre dossier (perspectiva), Malheureusement."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro pasos con tacto",
      idea: "1. Agradecer: Nous vous remercions de l'intérêt que vous portez à… 2. Anunciar con tacto: Nous avons le regret de vous informer que… (informer que, sin «de»); Malheureusement, …; Nous ne pouvons pas donner suite à votre candidature (no seguir adelante con ella) / donner une suite favorable à votre demande; Votre candidature n'a pas été retenue (no ha sido seleccionada). 3. Explicar brevemente: En raison de…, Compte tenu de… 4. Abrir una perspectiva: Nous conservons votre dossier pour de futures offres; Nous espérons avoir l'occasion de… Contraste positivo: Nous avons le plaisir de vous informer…; Votre candidature a été retenue.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Paso"], [
        ["Nous avons le regret de vous informer que…", "Lamentamos informarle de que…", "anunciar"],
        ["Nous ne pouvons pas donner suite à votre candidature.", "no seguir adelante con ella", "anunciar"],
        ["Nous conservons votre dossier pour de futures offres.", "Conservamos su expediente para futuras ofertas.", "perspectiva"],
        ["Votre candidature n'a pas été retenue. · retenue", "Su candidatura no ha sido seleccionada.", "anunciar"],
        ["Malheureusement, le concert est annulé. · Malheureusement", "Lamentablemente, el concierto se cancela.", "anunciar"],
        ["Nous vous remercions de… = agradecer · Nous avons le regret de… = anunciar · En raison de… = explicar · Nous espérons… = perspectiva", "pasos", "resumen"],
        ["Nous avons le plaisir de vous informer… · Votre candidature a été retenue. · Nous donnons une suite favorable… · Félicitations !", "Tenemos el placer de informarle · Su candidatura ha sido seleccionada · Damos una respuesta favorable · ¡Enhorabuena!", "Respuesta positiva"],
        ["Nous avons le regret de… · Nous ne pouvons pas donner suite… · Votre dossier n'a pas été retenu. · Malheureusement,", "Lamentamos… · No podemos dar curso… · Su expediente no ha sido seleccionado · Lamentablemente,", "Respuesta negativa"],
        ["Nous avons le regret de vous informer que votre demande est refusée. · regret", "Lamentamos informarle de que su solicitud ha sido rechazada.", "anunciar"],
        ["Votre candidature n'a pas été retenue", "Su candidatura no ha sido seleccionada", "anunciar"],
        ["Nous avons le regret de vous informer que la formation est complète.", "Lamentamos informarle de que la formación está completa.", "anunciar"]
      ]],
      ej: [["Nous avons le regret de vous informer que votre candidature n'a pas été retenue.", "Lamentamos informarle de que su candidatura no ha sido seleccionada."], ["Malheureusement, l'événement est annulé en raison de la météo.", "Lamentablemente, el evento se cancela por el tiempo."], ["Nous ne pouvons pas donner une suite favorable à votre demande.", "No podemos dar una respuesta favorable a su petición."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Nous avons le regret de vous informer de que…", "Nous avons le regret de vous informer que…", "informer que (sin de)."], ["Nous avons le plaisir de vous informer que votre demande est refusée.", "Nous avons le regret de vous informer que…", "Mala noticia: regret."], ["Votre candidature est nulle.", "Votre candidature n'a pas été retenue.", "Con tacto."]] }
  ],
  ejemplos: [
    { sit: "«Lamentamos informarle de que…»", resp: "Nous avons le regret de vous informer que…", pasos: ["Sin de."], porque: "Anunciar." },
    { sit: "«Nous ne pouvons pas donner suite à votre candidature.» significa…", resp: "no seguir adelante con ella", pasos: ["donner suite."], porque: "Negativa." },
    { sit: "Perspectiva tras la negativa:", resp: "Nous conservons votre dossier pour de futures offres.", pasos: ["Abrir."], porque: "Perspectiva." }
  ],
  comprueba: [
    { q: "«Informer» va seguido de…", o: ["que", "de que"], a: 0, b: "gr", porque: "informer que." },
    { q: "«Retenue» (candidatura) significa…", o: ["seleccionada", "retenida en la frontera"], a: 0, b: "gr", porque: "Selección." },
    { q: "Una mala noticia se anuncia con…", o: ["Nous avons le regret de…", "Nous avons le plaisir de…"], a: 0, b: "gr", porque: "regret." }
  ],
  practica: [
    { fase: "guiada", c: ["b4mn-annoncer", "b4mn-perspective"], k: "sort", ask: "¿Respuesta positiva o negativa?", q: "Clasifica.", cats: ["Respuesta positiva", "Respuesta negativa"], items: [["Nous avons le plaisir de vous informer…", 0], ["Votre candidature a été retenue.", 0], ["Nous donnons une suite favorable…", 0], ["Félicitations !", 0], ["Nous avons le regret de…", 1], ["Nous ne pouvons pas donner suite…", 1], ["Votre dossier n'a pas été retenu.", 1], ["Malheureusement,", 1]], pista: "¿Plaisir o regret?", why: "Respuestas." },
    { fase: "guiada", c: ["b4mn-annoncer"], k: "choice", ask: "«Lamentamos informarle de que…»", q: "Elige.", o: ["Nous avons le regret de vous informer que…", "Nous avons le regret de vous informer de que…"], a: 0, pista: "Sin de.", why: "<b>informer que</b>." },
    { fase: "guiada", c: ["b4mn-annoncer"], k: "choice", es: true, ask: "«Nous ne pouvons pas donner suite à votre candidature.» significa…", q: "Elige.", o: ["no seguir adelante con ella", "darle una respuesta rápida"], a: 0, pista: "donner suite.", why: "Negativa." },
    { fase: "indep", c: ["b4mn-perspective"], k: "choice", ask: "Perspectiva tras la negativa:", q: "Elige.", o: ["Nous conservons votre dossier pour de futures offres.", "Ne nous écrivez plus."], a: 0, why: "Perspectiva." },
    { fase: "indep", c: ["b4mn-annoncer"], k: "fill", ask: "«seleccionada» (retenir).", q: "Votre candidature n'a pas été ___ .", acc: ["retenue"], why: "<b>retenue</b>." },
    { fase: "indep", c: ["b4mn-annoncer"], k: "fill", ask: "«Lamentablemente»", q: "___ , le concert est annulé.", acc: ["Malheureusement", "malheureusement"], why: "<b>Malheureusement</b>." },
    { fase: "aplica", c: ["b4mn-annoncer", "b4mn-perspective"], k: "match", ask: "Une cada fórmula con su paso.", q: "Fórmula → paso", pairs: [["Nous vous remercions de…", "agradecer"], ["Nous avons le regret de…", "anunciar"], ["En raison de…", "explicar"], ["Nous espérons…", "perspectiva"]], why: "Pasos." },
    { fase: "aplica", c: ["b4mn-annoncer"], k: "spot", ask: "Encuentra el error.", s: "Nous avons le [plaisir] de vous informer que votre demande est refusée .", fix: "regret", why: "<b>regret</b>." },
    { fase: "aplica", c: ["b4mn-perspective"], k: "choice", ask: "Explicar brevemente:", q: "Elige.", o: ["Compte tenu du nombre de candidatures, …", "Parce que c'est comme ça."], a: 0, why: "Explicación formal." },
    { fase: "dominio", c: ["b4mn-annoncer"], k: "order", ask: "Ordena: «Su candidatura no ha sido seleccionada».", tokens: ["Votre candidature", "n'a pas été", "retenue"], why: "<b>Votre candidature n'a pas été retenue</b>" },
    { fase: "dominio", c: ["b4mn-annoncer"], k: "choice", ask: "«Informer» va seguido de…", q: "Elige.", o: ["que", "de que"], a: 0, why: "<b>que</b>." },
    { fase: "dominio", c: ["b4mn-annoncer", "b4mn-perspective"], k: "listen", say: "Nous avons le regret de vous informer que la formation est complète.", acc: ["Nous avons le regret de vous informer que la formation est complète."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Nous avons le regret de vous informer que la formation est complète.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B2.2·6 · Ortografía que penaliza ================================ */




/* ================================ B2.2·6 · Concordancias y escritura ================================ */

/* ================================ B2.2·6 · Ortografía que penaliza ================================ */
/* ── 47. Les accents : é, è, ê, à, ù ── */
E["rem-accents"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les accents : é, è, ê, à, ù",
  objetivo: {
    que: "Vas a poner bien los acentos franceses, que no marcan la sílaba tónica sino el sonido o la diferencia entre palabras.",
    corto: "Mon père habite près de la forêt. · Où vas-tu ? À la plage ou à la piscine ? · L'État a voté une loi.",
    podras: ["Usar é [e] cerrado al final de sílaba abierta (été, café, école) y è [ɛ] abierto delante de sílaba con e muda (père, mère, il achète).", "Usar ê donde había una s latina (forêt, fête, hôpital, côte).", "Distinguir con el acento grave à / a, où / ou, là / la."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/nota"],
    previos: ["Los acentos y el sonido (Fonética, lección 26) y la ortografía (lección 14)."],
    capacidad: "Ahora no pierdes puntos por acentos olvidados o mal puestos."
  },
  requiere: R("fac-e", "fac-mots", "b4or-homo"), recupera: ["fac-e"],
  conceptos: {
    "b4ac2-aigu-grave": { n: "é [e] al final de sílaba abierta (é-té, ca-fé, é-cole, musée); è [ɛ] delante de sílaba con e muda (père, mère, frère, il achète, problème, très)", b: "gr" },
    "b4ac2-circ": { n: "ê / ô / î donde había una s latina: forêt (floresta), fête (fiesta), hôpital (hospital), côte (costa), l'État; à / a, où / ou, là / la distinguen homófonos (Où vas-tu ? À la plage ou à la piscine ?)", b: "gr" }
  },
  video: {
    titulo: "Los acentos franceses", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "é · è · ê", seg: [
        { es: "Hola. En francés el acento cambia el sonido, no la sílaba tónica." } ] },
      { v: "frase", filas: [
          { nota: "è y ê", p: 1, partes: [["Mon père habite près de la forêt.", "-", 1]] },
          { nota: "où / à / ou", p: 2, partes: [["Où vas-tu ? À la plage ou à la piscine ?", "-", 2]] },
          { nota: "s latina", p: 3, partes: [["L'État a voté une loi.", "-", 3]] } ], seg: [
        { fr: "Mon père habite près de la forêt.", p: 1 }, { fr: "Où vas-tu ? À la plage ou à la piscine ?", p: 2 }, { fr: "L'État a voté une loi.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«padre»", o: ["père", "pére"], a: 0,
        bien: "¡Sí! È abierto.", mal: "Delante de sílaba con e muda: è.",
        seg: [ { es: "Pausa. È." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["été", "père", "forêt", "hôpital", "à", "où"], seg: [
        { es: "Agudo, grave y circunflejo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La postal de las vacaciones", img: "bg-playa", yo: "camila",
    escena: "Camila escribe una postal; Hugo revisa los acentos.",
    pj: PJ,
    lineas: [
      ["camila", "« L'été dernier, mon pére et ma mére sont allés à la mer. Mon frére travaille à l'hopital. »", "«El verano pasado, mi padre y mi madre fueron al mar. Mi hermano trabaja en el hospital.»"],
      ["hugo", "Attention : père, mère, frère avec un accent grave. Et hôpital avec un accent circonflexe : avant, on écrivait « hospital ».", "Ojo: père, mère, frère con acento grave. Y hôpital con acento circunflejo: antes se escribía «hospital»."],
      ["camila", "Ah, comme forêt, fête et côte : forest, feste, coste… C'est le s latin !", "Ah, como forêt, fête y côte: forest, feste, coste… ¡Es la s latina!"],
      ["hugo", "Exactement. Et « Où vas-tu ? À la plage ou à la piscine ? » : où et à avec un accent, ou sans accent. Il achète du pain : è aussi.", "Exacto. Y «¿Adónde vas? ¿A la playa o a la piscina?»: où y à con acento, ou sin acento. Il achète du pain: también è."]
    ],
    fijate: "Fíjate: été (é), père, mère, frère, achète (è), hôpital, forêt, fête, côte (antigua s), où / ou, à / a."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres acentos, tres funciones",
      idea: "Acento agudo é = [e] cerrado, al final de una sílaba abierta: é-té, ca-fé, é-cole, mu-sée. Acento grave è = [ɛ] abierto, sobre todo delante de una sílaba con e muda: père, mère, frère, il achète, problème; también très. Acento circunflejo ê, ô, î: marca a menudo una s latina desaparecida: forêt (forest → floresta, bosque), fête (fiesta), hôpital (hospital), côte (costa), l'État. Acento grave sobre a, u: distingue homófonos: à (preposición) / a (verbo), où (dónde) / ou (o), là (allí) / la (artículo).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Acento"], [
        ["père", "padre", "è"],
        ["forêt", "bosque", "ê (s latina)"],
        ["Où vas-tu ?", "¿Adónde vas?", "où"],
        ["Il achète du pain. · achète", "Compra pan.", "è"],
        ["L'été dernier, il a fait chaud. · été", "El verano pasado hizo calor.", "é"],
        ["fête = fiesta · hôpital = hospital · forêt = floresta / bosque · côte = costa", "s latina", "circunflejo"],
        ["café · école · été · musée", "café · escuela · verano · museo", "é"],
        ["mère · frère · très · problème", "madre · hermano · muy · problema", "è"],
        ["Mon frère travaille à l'hôpital. · frère", "Mi hermano trabaja en el hospital.", "è · ô"],
        ["Je vais à la fête", "Voy a la fiesta", "à · ê"],
        ["L'été dernier, mon père et ma mère sont allés à la mer.", "El verano pasado, mi padre y mi madre fueron al mar.", "é · è · à"]
      ]],
      ej: [["Mon père habite près de la forêt.", "Mi padre vive cerca del bosque."], ["Où vas-tu ? À la plage ou à la piscine ?", "¿Adónde vas? ¿A la playa o a la piscina?"], ["L'État a voté une loi.", "El Estado votó una ley."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le pére, la fôret", "le père, la forêt", "è abierto; ê de la antigua s."], ["Il achete du pain.", "Il achète du pain.", "è delante de sílaba con e muda."], ["Ou vas-tu ?", "Où vas-tu ?", "Lugar: où."]] }
  ],
  ejemplos: [
    { sit: "«padre»", resp: "père", pasos: ["è abierto."], porque: "Grave." },
    { sit: "«bosque»", resp: "forêt", pasos: ["forest → forêt."], porque: "Circunflejo." },
    { sit: "«¿Adónde vas?»", resp: "Où vas-tu ?", pasos: ["Lugar."], porque: "où." }
  ],
  comprueba: [
    { q: "El circunflejo marca a menudo…", o: ["una s latina desaparecida", "la sílaba tónica"], a: 0, b: "gr", porque: "forêt." },
    { q: "«é» suena…", o: ["[e] cerrado", "[ɛ] abierto"], a: 0, b: "gr", porque: "été." },
    { q: "«Où» con acento significa…", o: ["dónde", "o"], a: 0, b: "gr", porque: "Lugar." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ac2-aigu-grave"], k: "sort", ask: "¿é o è?", q: "Clasifica.", cats: ["é", "è"], items: [["café", 0], ["école", 0], ["été", 0], ["musée", 0], ["mère", 1], ["frère", 1], ["très", 1], ["problème", 1]], pista: "¿Sílaba abierta o e muda después?", why: "Agudo y grave." },
    { fase: "guiada", c: ["b4ac2-aigu-grave"], k: "choice", ask: "«padre»", q: "Elige.", o: ["père", "pére"], a: 0, pista: "Abierto.", why: "<b>père</b>." },
    { fase: "guiada", c: ["b4ac2-circ"], k: "choice", ask: "«bosque»", q: "Elige.", o: ["forêt", "fôret"], a: 0, pista: "forest.", why: "<b>forêt</b>." },
    { fase: "indep", c: ["b4ac2-circ"], k: "choice", ask: "«¿Adónde vas?»", q: "Elige.", o: ["Où vas-tu ?", "Ou vas-tu ?"], a: 0, why: "<b>Où</b>." },
    { fase: "indep", c: ["b4ac2-aigu-grave"], k: "fill", ask: "achète / achete", q: "Il ___ du pain.", acc: ["achète"], why: "<b>achète</b>." },
    { fase: "indep", c: ["b4ac2-aigu-grave"], k: "fill", ask: "«verano»", q: "L'___ dernier, il a fait chaud.", acc: ["été"], why: "<b>été</b>." },
    { fase: "aplica", c: ["b4ac2-circ"], k: "match", ask: "Une cada palabra con su traducción (s latina).", q: "Francés → español", pairs: [["fête", "fiesta"], ["hôpital", "hospital"], ["forêt", "floresta / bosque"], ["côte", "costa"]], why: "Circunflejo." },
    { fase: "aplica", c: ["b4ac2-aigu-grave"], k: "spot", ask: "Encuentra el error.", s: "Mon [frére] travaille à l'hôpital .", fix: "frère", why: "<b>frère</b>." },
    { fase: "aplica", c: ["b4ac2-circ"], k: "spot", ask: "Encuentra el error.", s: "Il travaille à l'[hopital] depuis dix ans .", fix: "hôpital", why: "<b>hôpital</b>." },
    { fase: "dominio", c: ["b4ac2-circ"], k: "order", ask: "Ordena: «Voy a la fiesta».", tokens: ["Je vais", "à la", "fête"], why: "<b>Je vais à la fête</b>" },
    { fase: "dominio", c: ["b4ac2-circ"], k: "choice", ask: "El circunflejo marca a menudo…", q: "Elige.", o: ["una s latina desaparecida", "la sílaba tónica"], a: 0, es: true, why: "s latina." },
    { fase: "dominio", c: ["b4ac2-aigu-grave", "b4ac2-circ"], k: "listen", say: "L'été dernier, mon père et ma mère sont allés à la mer.", acc: ["L'été dernier, mon père et ma mère sont allés à la mer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'été dernier, mon père et ma mère sont allés à la mer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "État"], previo: [] }
};

/* ── 48. La cédille et le tréma : ça, reçu, Noël ── */
E["rem-cedille-trema"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La cédille et le tréma : ça, reçu, Noël",
  objetivo: {
    que: "Vas a usar bien la cedilla (ç = [s] delante de a, o, u) y la diéresis (la vocal se pronuncia aparte).",
    corto: "Nous commençons le cours à neuf heures. · J'ai reçu ta lettre. · Joyeux Noël !",
    podras: ["Poner ç solo delante de a, o, u: ça, garçon, leçon, reçu, français.", "Conjugar los verbos en -cer: nous commençons, il commençait, nous avançons.", "Usar la diéresis: Noël, maïs, naïf, égoïste, Israël, aïe; y no poner nunca ç delante de e, i (ce, ici, merci)."],
    iconos: ["ic2/lapiz", "ic2/regalo", "ic2/libro"],
    previos: ["Deletrear y los signos (Fonética, lección 65) y la ortografía (lección 14)."],
    capacidad: "Ahora escribes ç y ë donde van, y solo donde van."
  },
  requiere: R("fep-signes", "fep-accents", "b4or-mots"), recupera: ["fep-signes"],
  conceptos: {
    "b4ct-cedille": { n: "ç = [s] solo delante de a, o, u: ça, garçon, leçon, français, reçu, façade; verbos en -cer: nous commençons, il commençait / lançait, nous avançons; nunca ç delante de e, i (ce, ici, cinéma, cent, merci)", b: "gr" },
    "b4ct-trema": { n: "diéresis (tréma): la vocal se pronuncia aparte: Noël, maïs (maíz), naïf (ingenuo), égoïste, Israël, aïe", b: "gr" }
  },
  video: {
    titulo: "Cedilla y diéresis", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "ç · ë", seg: [
        { es: "Hola. Dos signos pequeños que cuentan." } ] },
      { v: "frase", filas: [
          { nota: "-cer", p: 1, partes: [["Nous commençons le cours à neuf heures.", "-", 1]] },
          { nota: "participio", p: 2, partes: [["J'ai reçu ta lettre.", "-", 2]] },
          { nota: "diéresis", p: 3, partes: [["Joyeux Noël !", "-", 3]] } ], seg: [
        { fr: "Nous commençons le cours à neuf heures.", p: 1 }, { fr: "J'ai reçu ta lettre.", p: 2 }, { fr: "Joyeux Noël !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«nosotros empezamos»", o: ["nous commençons", "nous commencons"], a: 0,
        bien: "¡Sí! Delante de o: ç.", mal: "Delante de o: ç.",
        seg: [ { es: "Pausa. ¿A, o, u?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ça", "garçon", "reçu", "commençons", "Noël", "naïf"], seg: [
        { es: "Ç delante de a, o, u. Ë: vocal aparte.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La cena de Navidad", img: "bg-noche", yo: "camila",
    escena: "Camila escribe a su familia en Colombia sobre la Navidad en Francia.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Nous commencons toujours le repas par des huîtres. »", "Escribí: «Siempre empezamos la comida con ostras.»"],
      ["hugo", "Commençons, avec une cédille : devant o, le c doit faire [s]. Comme garçon, leçon, français.", "Commençons, con cedilla: delante de o, la c tiene que sonar [s]. Como garçon, leçon, français."],
      ["camila", "Et « J'ai recu ton message » ? — Reçu, avec ç. Mais « ici » et « merci », jamais de cédille : devant i et e, c'est inutile.", "¿Y «Recibí tu mensaje»? — Reçu, con ç. Pero «ici» y «merci», nunca cedilla: delante de i y e no hace falta."],
      ["hugo", "Et Noël avec un tréma : on prononce No-ël. Comme maïs et naïf. À Noël, nous commençons toujours le repas par des huîtres !", "Y Noël con diéresis: se pronuncia No-ël. Como maïs y naïf. ¡En Navidad siempre empezamos la comida con ostras!"]
    ],
    fijate: "Fíjate: commençons, reçu, garçon, leçon, français (ç delante de o, u, a); ici, merci (sin ç); Noël, maïs, naïf (diéresis)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "ç y ë",
      idea: "La cedilla ç hace que c suene [s] delante de a, o, u (donde sonaría [k]): ça, garçon, leçon, français, reçu, façade. Verbos en -cer: la c lleva cedilla delante de a y o: nous commençons, il commençait, nous avançons, il lançait. Nunca ç delante de e o i, porque ya suena [s]: ce, ici, cinéma, cent, merci. La diéresis (le tréma) indica que la vocal se pronuncia aparte de la anterior: Noël (No-ël), maïs (ma-ïs), naïf, égoïste, Israël, aïe.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Signo"], [
        ["nous commençons", "nosotros empezamos", "ç"],
        ["reçu", "recibido", "ç"],
        ["Noël", "Navidad", "ë"],
        ["Il lançait tous les matins. · lançait", "Lanzaba todas las mañanas.", "ç"],
        ["Mon fils est un petit garçon. · garçon", "Mi hijo es un niño pequeño.", "ç"],
        ["leçon = lección · maïs = maíz · façade = fachada · naïf = ingenuo", "vocabulario", "ç · ï"],
        ["gar_on · le_on · fran_ais · re_u", "garçon · leçon · français · reçu", "Sí"],
        ["i_i · _inéma · _ent · mer_i", "ici · cinéma · cent · merci", "No"],
        ["Nous avançons vite dans le programme. · avançons", "Avanzamos rápido en el programa.", "ç"],
        ["J'ai reçu ton message", "Recibí tu mensaje", "ç"],
        ["À Noël, nous commençons toujours le repas par des huîtres.", "En Navidad siempre empezamos la comida con ostras.", "ë · ç"]
      ]],
      ej: [["Nous commençons le cours à neuf heures.", "Empezamos la clase a las nueve."], ["J'ai reçu ta lettre.", "Recibí tu carta."], ["Joyeux Noël !", "¡Feliz Navidad!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["nous commencons", "nous commençons", "Delante de o: ç."], ["merçi, içi", "merci, ici", "Delante de e, i: nunca ç."], ["Noel", "Noël", "Diéresis: No-ël."]] }
  ],
  ejemplos: [
    { sit: "«nosotros empezamos»", resp: "nous commençons", pasos: ["c + o → ç."], porque: "Cedilla." },
    { sit: "«recibido»", resp: "reçu", pasos: ["c + u → ç."], porque: "Cedilla." },
    { sit: "«Navidad»", resp: "Noël", pasos: ["Vocal aparte."], porque: "Diéresis." }
  ],
  comprueba: [
    { q: "La ç solo va delante de…", o: ["a, o, u", "e, i"], a: 0, b: "gr", porque: "Sonido [s]." },
    { q: "«Merci» lleva cedilla…", o: ["no", "sí"], a: 0, b: "gr", porque: "Delante de i." },
    { q: "La diéresis indica que la vocal…", o: ["se pronuncia aparte", "es muda"], a: 0, b: "gr", porque: "No-ël." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ct-cedille"], k: "sort", ask: "¿Lleva ç en el hueco?", q: "Clasifica.", cats: ["Sí", "No"], items: [["gar_on", 0], ["le_on", 0], ["fran_ais", 0], ["re_u", 0], ["i_i", 1], ["_inéma", 1], ["_ent", 1], ["mer_i", 1]], pista: "¿Qué vocal sigue?", why: "Cedilla." },
    { fase: "guiada", c: ["b4ct-cedille"], k: "choice", ask: "«nosotros empezamos»", q: "Elige.", o: ["nous commençons", "nous commencons"], a: 0, pista: "c + o.", why: "<b>ç</b>." },
    { fase: "guiada", c: ["b4ct-cedille"], k: "choice", ask: "«recibido»", q: "Elige.", o: ["reçu", "recu"], a: 0, pista: "c + u.", why: "<b>reçu</b>." },
    { fase: "indep", c: ["b4ct-trema"], k: "choice", ask: "«Navidad»", q: "Elige.", o: ["Noël", "Noel"], a: 0, why: "<b>Noël</b>." },
    { fase: "indep", c: ["b4ct-cedille"], k: "fill", ask: "lançait / lancait", q: "Il ___ tous les matins.", acc: ["lançait"], why: "<b>lançait</b>." },
    { fase: "indep", c: ["b4ct-cedille"], k: "fill", ask: "garçon / garcon", q: "Mon fils est un petit ___ .", acc: ["garçon"], why: "<b>garçon</b>." },
    { fase: "aplica", c: ["b4ct-cedille", "b4ct-trema"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["leçon", "lección"], ["maïs", "maíz"], ["façade", "fachada"], ["naïf", "ingenuo"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b4ct-cedille"], k: "spot", ask: "Encuentra el error.", s: "Nous [avancons] vite dans le programme .", fix: "avançons", why: "<b>avançons</b>." },
    { fase: "aplica", c: ["b4ct-cedille"], k: "spot", ask: "Encuentra el error.", s: "[Merçi] pour ton message !", fix: "Merci", why: "<b>Merci</b>." },
    { fase: "dominio", c: ["b4ct-cedille"], k: "order", ask: "Ordena: «Recibí tu mensaje».", tokens: ["J'ai", "reçu", "ton message"], why: "<b>J'ai reçu ton message</b>" },
    { fase: "dominio", c: ["b4ct-trema"], k: "choice", ask: "La diéresis indica que la vocal…", q: "Elige.", o: ["se pronuncia aparte", "es muda"], a: 0, es: true, why: "Aparte." },
    { fase: "dominio", c: ["b4ct-cedille", "b4ct-trema"], k: "listen", say: "À Noël, nous commençons toujours le repas par des huîtres.", acc: ["À Noël, nous commençons toujours le repas par des huîtres.", "A Noël, nous commençons toujours le repas par des huîtres."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>À Noël, nous commençons toujours le repas par des huîtres.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Noël", "Israël", "Colombie", "France"], previo: [] }
};

/* ── 49. A / à, et / est, son / sont, ou / où, on / ont ── */
E["rem-homophones-base"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "A / à, et / est, son / sont, ou / où, on / ont",
  objetivo: {
    que: "Vas a distinguir los homófonos básicos con el truco de sustitución.",
    corto: "Il a un rendez-vous à midi. · Elle est grande et brune. · Ils ont perdu leur chien ; on le cherche.",
    podras: ["Distinguir a (verbo = avait) / à y est (= était) / et (= et puis).", "Distinguir sont (= étaient) / son (= mon) y ont (= avaient) / on (= il).", "Distinguir ou (= ou bien) / où (lugar o tiempo)."],
    iconos: ["ic2/lapiz", "ic2/pregunta", "ic2/engranaje"],
    previos: ["La ortografía (lección 14), los posesivos (lección 26) y los homófonos gramaticales (B2.1, lección 59)."],
    capacidad: "Ahora escribes sin las faltas de homófonos más comunes."
  },
  requiere: R("b3hg-sans", "b4or-homo", "b4ps-un"), recupera: ["b4or-homo"],
  conceptos: {
    "b4hb-verbes": { n: "verbos: a (avoir → avait: Il a vingt ans), est (être → était: Paul est malade), sont (être → étaient: Ses amis sont sympas; Les enfants sont partis), ont (avoir → avaient: Ils ont fini)", b: "gr" },
    "b4hb-autres": { n: "las otras palabras: à (preposición: à midi, à Paris), et (= et puis), son (posesivo = mon: son sac), on (pronombre = il: on le cherche), ou (= ou bien), où (lugar: Où est-il ?)", b: "gr" }
  },
  video: {
    titulo: "Homófonos básicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "a → avait", seg: [
        { es: "Hola. Cambia la palabra: si funciona, es el verbo." } ] },
      { v: "frase", filas: [
          { nota: "a / à", p: 1, partes: [["Il a un rendez-vous à midi.", "-", 1]] },
          { nota: "est / et", p: 2, partes: [["Elle est grande et brune.", "-", 2]] },
          { nota: "ont / on", p: 3, partes: [["Ils ont perdu leur chien ; on le cherche.", "-", 3]] } ], seg: [
        { fr: "Il a un rendez-vous à midi.", p: 1 }, { fr: "Elle est grande et brune.", p: 2 }, { fr: "Ils ont perdu leur chien ; on le cherche.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tiene veinte años.»", o: ["Il a vingt ans.", "Il à vingt ans."], a: 0,
        bien: "¡Sí! Il avait → a.", mal: "Se puede decir avait: a.",
        seg: [ { es: "Pausa. ¿Avait?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["a = avait", "est = était", "sont = étaient", "ont = avaient", "on = il", "où"], seg: [
        { es: "El truco de sustitución.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El perro perdido", img: "bg-paris", yo: "camila",
    escena: "Los vecinos de Camila han perdido a su perro.",
    pj: PJ,
    lineas: [
      ["camila", "Mes voisins ont perdu leur chien ; on le cherche partout. Il a cinq ans et il est tout petit.", "Mis vecinos perdieron a su perro; lo buscamos por todas partes. Tiene cinco años y es muy pequeño."],
      ["hugo", "Où est-il ? Ici ou là-bas ? — Leurs enfants sont partis à l'école à huit heures, il était avec eux.", "¿Dónde está? ¿Aquí o allí? — Sus hijos se fueron al colegio a las ocho, estaba con ellos."],
      ["camila", "Paul est malade aujourd'hui et sa sœur est grande et brune : elle a vu le chien près du parc !", "Paul está enfermo hoy y su hermana es alta y morena: ¡vio al perro cerca del parque!"],
      ["hugo", "Où est son sac ? Il est à la maison ou à l'école ? — Ils ont fini leur recherche : on a retrouvé le chien !", "¿Dónde está su bolsa? ¿Está en casa o en el colegio? — Terminaron la búsqueda: ¡encontramos al perro!"]
    ],
    fijate: "Fíjate: ont perdu (avaient), on le cherche (il), il a (avait), il est (était), où (lugar) / ou (o bien), sont partis (étaient), à l'école (preposición), son sac (mon)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El truco de sustitución",
      idea: "Sustituye para comprobar: a → avait (verbo avoir: Il a vingt ans; si no funciona, es à: à midi). est → était (verbo être: Paul est malade; si no, et = et puis). sont → étaient (verbo être: Ses amis sont sympas; si no, son = mon: son sac). ont → avaient (verbo avoir: Ils ont fini; si no, on = il: on le cherche). ou → ou bien (alternativa: ici ou là-bas); si no, où (lugar o tiempo: Où est-il ?).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Truco"], [
        ["Il a vingt ans.", "Tiene veinte años.", "a = avait"],
        ["Ses amis sont sympas.", "Sus amigos son simpáticos.", "sont = étaient"],
        ["Où est-il ? Ici ou là-bas ?", "¿Dónde está? ¿Aquí o allí?", "où / ou"],
        ["Ils ont fini leur travail. · ont", "Terminaron su trabajo.", "ont = avaient"],
        ["Paul est malade aujourd'hui. · est", "Paul está enfermo hoy.", "est = était"],
        ["a = avait · est = était · sont = étaient · ont = avaient · on = il", "sustituciones", "resumen"],
        ["Il ___ froid. · Elle ___ raison. · On ___ gagné. · Paul ___ un chien.", "tiene frío · tiene razón · ganamos · tiene un perro", "a"],
        ["Je vais ___ Paris. · C'est ___ toi. · un verre ___ vin · ___ demain !", "voy a París · es tuyo · un vaso de vino · ¡hasta mañana!", "à"],
        ["Les enfants sont partis à l'école à huit heures. · sont", "Los niños se fueron al colegio a las ocho.", "sont = étaient"],
        ["On a fini et on part", "Terminamos y nos vamos", "on = il"],
        ["Où est son sac ? Il est à la maison ou à l'école ?", "¿Dónde está su bolsa? ¿Está en casa o en el colegio?", "todas"]
      ]],
      ej: [["Il a un rendez-vous à midi.", "Tiene una cita a mediodía."], ["Elle est grande et brune.", "Es alta y morena."], ["Ils ont perdu leur chien ; on le cherche.", "Perdieron a su perro; lo buscamos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il à faim.", "Il a faim.", "Verbo avoir (= avait): a."], ["Les enfants son partis.", "Les enfants sont partis.", "= étaient: sont."], ["Ils on fini.", "Ils ont fini.", "= avaient: ont."]] }
  ],
  ejemplos: [
    { sit: "«Tiene veinte años.»", resp: "Il a vingt ans.", pasos: ["Il avait vingt ans."], porque: "a." },
    { sit: "«Sus amigos son simpáticos.»", resp: "Ses amis sont sympas.", pasos: ["étaient."], porque: "sont." },
    { sit: "«¿Dónde está? ¿Aquí o allí?»", resp: "Où est-il ? Ici ou là-bas ?", pasos: ["Lugar / alternativa."], porque: "où / ou." }
  ],
  comprueba: [
    { q: "Si se puede decir «avait», se escribe…", o: ["a", "à"], a: 0, b: "gr", porque: "Verbo." },
    { q: "Si se puede decir «il», se escribe…", o: ["on", "ont"], a: 0, b: "gr", porque: "Pronombre." },
    { q: "Si se puede decir «mon», se escribe…", o: ["son", "sont"], a: 0, b: "gr", porque: "Posesivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b4hb-verbes", "b4hb-autres"], k: "sort", ask: "¿a o à?", q: "Clasifica.", cats: ["a", "à"], items: [["Il ___ froid.", 0], ["Elle ___ raison.", 0], ["On ___ gagné.", 0], ["Paul ___ un chien.", 0], ["Je vais ___ Paris.", 1], ["C'est ___ toi.", 1], ["un verre ___ vin", 1], ["___ demain !", 1]], pista: "¿Funciona avait?", why: "a / à." },
    { fase: "guiada", c: ["b4hb-verbes"], k: "choice", ask: "«Tiene veinte años.»", q: "Elige.", o: ["Il a vingt ans.", "Il à vingt ans."], a: 0, pista: "avait.", why: "<b>a</b>." },
    { fase: "guiada", c: ["b4hb-verbes"], k: "choice", ask: "«Sus amigos son simpáticos.»", q: "Elige.", o: ["Ses amis sont sympas.", "Ses amis son sympas."], a: 0, pista: "étaient.", why: "<b>sont</b>." },
    { fase: "indep", c: ["b4hb-autres"], k: "choice", ask: "«¿Dónde está? ¿Aquí o allí?»", q: "Elige.", o: ["Où est-il ? Ici ou là-bas ?", "Ou est-il ? Ici où là-bas ?"], a: 0, why: "<b>Où</b> / <b>ou</b>." },
    { fase: "indep", c: ["b4hb-verbes"], k: "fill", ask: "ont / on (= avaient)", q: "Ils ___ fini leur travail.", acc: ["ont"], why: "<b>ont</b>." },
    { fase: "indep", c: ["b4hb-verbes"], k: "fill", ask: "est / et (= était)", q: "Paul ___ malade aujourd'hui.", acc: ["est"], why: "<b>est</b>." },
    { fase: "aplica", c: ["b4hb-verbes", "b4hb-autres"], k: "match", ask: "Une cada palabra con su sustituto.", q: "Palabra → sustituto", pairs: [["a", "avait"], ["est", "était"], ["sont", "étaient"], ["ont", "avaient"], ["on", "il"]], why: "Sustitución." },
    { fase: "aplica", c: ["b4hb-verbes"], k: "spot", ask: "Encuentra el error.", s: "Les enfants [son] partis à l'école à huit heures .", fix: "sont", why: "<b>sont</b>." },
    { fase: "aplica", c: ["b4hb-verbes"], k: "spot", ask: "Encuentra el error.", s: "Mes voisins [on] perdu leur chien .", fix: "ont", why: "<b>ont</b>." },
    { fase: "dominio", c: ["b4hb-autres"], k: "order", ask: "Ordena: «Terminamos y nos vamos».", tokens: ["On a fini", "et", "on part"], why: "<b>On a fini et on part</b>" },
    { fase: "dominio", c: ["b4hb-autres"], k: "choice", ask: "Si se puede decir «mon», se escribe…", q: "Elige.", o: ["son", "sont"], a: 0, why: "<b>son</b>." },
    { fase: "dominio", c: ["b4hb-verbes", "b4hb-autres"], k: "listen", say: "Où est son sac ? Il est à la maison ou à l'école ?", acc: ["Où est son sac ? Il est à la maison ou à l'école ?", "Où est son sac? Il est à la maison ou à l'école?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Où est son sac ? Il est à la maison ou à l'école ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Paris"], previo: [] }
};

/* ── 50. Ce, se, ces, ses, c'est, s'est ── */
E["rem-ce-se-ces-ses"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Ce, se, ces, ses, c'est, s'est",
  objetivo: {
    que: "Vas a distinguir seis formas que suenan casi igual: ce, se, ces, ses, c'est, s'est.",
    corto: "Ce livre est à lui : ce sont ses livres. · Il se réveille tôt. · Elle s'est trompée ; c'est normal.",
    podras: ["Distinguir ce (determinante o pronombre: ce livre, ce que) de se (reflexivo delante de verbo: il se lève).", "Distinguir ces (estos, esos: señalar) de ses (sus, de él o de ella).", "Distinguir c'est (= cela est) de s'est (pronominal en passé composé: il s'est levé)."],
    iconos: ["ic2/lapiz", "ic2/engranaje", "ic2/pregunta"],
    previos: ["El participio pasado (lección 3), la ortografía (lección 14) y los posesivos (lección 26)."],
    capacidad: "Ahora no confundes c'est y s'est ni ces y ses."
  },
  requiere: R("b4pp-etre", "b4or-homo", "b4ps-un"), recupera: ["b4ps-un"],
  conceptos: {
    "b4cs2-ce-se": { n: "ce + nombre masculino o ce qui / ce que (ce livre); se delante de verbo (il se lève, il se promène; se conjuga: je me lève); c'est = cela est (C'est vrai, C'est difficile); s'est = pronominal en passé composé (il s'est levé, elle s'est trompée = je me suis…)", b: "gr" },
    "b4cs2-ces-ses": { n: "ces = estos / esos, para señalar (Ces chaussures sont chères = ces… -là); ses = sus, de él o de ella (Marie a oublié ses clés = mes)", b: "gr" }
  },
  video: {
    titulo: "Ce, se, ces, ses", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "c'est / s'est", seg: [
        { es: "Hola. Seis formas, un truco para cada una." } ] },
      { v: "frase", filas: [
          { nota: "ce / ses", p: 1, partes: [["Ce livre est à lui : ce sont ses livres.", "-", 1]] },
          { nota: "se", p: 2, partes: [["Il se réveille tôt.", "-", 2]] },
          { nota: "s'est / c'est", p: 3, partes: [["Elle s'est trompée ; c'est normal.", "-", 3]] } ], seg: [
        { fr: "Ce livre est à lui : ce sont ses livres.", p: 1 }, { fr: "Il se réveille tôt.", p: 2 }, { fr: "Elle s'est trompée ; c'est normal.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Se levantó temprano.»", o: ["Il s'est levé tôt.", "Il c'est levé tôt."], a: 0,
        bien: "¡Sí! Je me suis levé → s'est.", mal: "Pronominal: s'est.",
        seg: [ { es: "Pausa. ¿Je me suis…?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ce", "se", "ces", "ses", "c'est", "s'est"], seg: [
        { es: "Sustituye para comprobar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El día de Paul", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo el mal día de su compañero Paul.",
    pj: PJ,
    lineas: [
      ["camila", "Paul s'est levé tard. Il s'est trompé de train et il a oublié ses clés chez moi.", "Paul se levantó tarde. Se equivocó de tren y olvidó sus llaves en mi casa."],
      ["hugo", "C'est pas de chance ! Et ces documents sur la table, ce sont les siens ?", "¡Qué mala suerte! ¿Y esos documentos de la mesa son suyos?"],
      ["camila", "Oui, ce sont ses dossiers. C'est Paul qui s'est occupé de ces documents et de ses dossiers.", "Sí, son sus carpetas. Es Paul quien se ocupó de esos documentos y de sus carpetas."],
      ["hugo", "Bon, il se promène dans le parc pour se détendre. Et sa sœur, elle s'est beaucoup amusée à la fête : c'est normal, c'est son anniversaire !", "Bueno, se pasea por el parque para relajarse. Y su hermana se divirtió mucho en la fiesta: ¡es normal, es su cumpleaños!"]
    ],
    fijate: "Fíjate: s'est levé, s'est trompé, s'est occupé, s'est amusée (pronominal); ses clés, ses dossiers (sus); ces documents (esos); c'est pas de chance, c'est normal (cela est); se promène, se détendre (se)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Un truco para cada forma",
      idea: "ce: determinante delante de un nombre masculino (ce livre) o pronombre (ce qui, ce que, ce sont). se: pronombre reflexivo delante de un verbo; truco: se puede conjugar (il se lève → je me lève). ces: demostrativo plural, para señalar (estos, esos); truco: se puede añadir -là (ces chaussures-là). ses: posesivo plural (sus, de él o de ella); truco: se puede cambiar por mes. c'est = cela est (C'est vrai); truco: se puede decir cela est / c'était. s'est: verbo pronominal en passé composé (il s'est levé); truco: je me suis levé.",
      intro: "Toca cada forma.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Il s'est levé tôt.", "Se levantó temprano.", "s'est"],
        ["Ces chaussures sont chères.", "Esos zapatos son caros.", "ces"],
        ["C'est vrai.", "Es verdad.", "c'est"],
        ["Il se promène dans le parc. · se", "Se pasea por el parque.", "se"],
        ["Marie a oublié ses clés chez moi. · ses", "Marie olvidó sus llaves en mi casa.", "ses"],
        ["c'est = cela est · s'est = je me suis · ses = mes · ces = ces… -là", "trucos", "resumen"],
        ["___ difficile. · ___ mon frère. · ___ fini. · ___ à toi.", "es difícil · es mi hermano · se acabó · es tuyo", "c'est"],
        ["Il ___ perdu. · Elle ___ amusée. · Paul ___ blessé. · On ___ bien entendus.", "se perdió · se divirtió · se lastimó · nos llevamos bien", "s'est"],
        ["Julie s'est trompée de train ce matin. · s'est", "Julie se equivocó de tren esta mañana.", "s'est"],
        ["Elle s'est beaucoup amusée", "Se divirtió mucho", "s'est"],
        ["C'est Paul qui s'est occupé de ces documents et de ses dossiers.", "Es Paul quien se ocupó de esos documentos y de sus carpetas.", "todas"]
      ]],
      ej: [["Ce livre est à lui : ce sont ses livres.", "Este libro es suyo: son sus libros."], ["Il se réveille tôt.", "Se despierta temprano."], ["Elle s'est trompée ; c'est normal.", "Se equivocó; es normal."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il c'est levé tôt.", "Il s'est levé tôt.", "Pronominal: s'est (je me suis levé)."], ["Marie a oublié ces clés. (las suyas)", "Marie a oublié ses clés.", "Posesivo: ses (= mes)."], ["S'est vrai.", "C'est vrai.", "= cela est."]] }
  ],
  ejemplos: [
    { sit: "«Se levantó temprano.»", resp: "Il s'est levé tôt.", pasos: ["je me suis levé."], porque: "s'est." },
    { sit: "«Esos zapatos son caros.»", resp: "Ces chaussures sont chères.", pasos: ["Señalar."], porque: "ces." },
    { sit: "«Es verdad.»", resp: "C'est vrai.", pasos: ["cela est."], porque: "c'est." }
  ],
  comprueba: [
    { q: "Si se puede cambiar por «mes», se escribe…", o: ["ses", "ces"], a: 0, b: "gr", porque: "Posesivo." },
    { q: "Si se puede decir «je me suis…», se escribe…", o: ["s'est", "c'est"], a: 0, b: "gr", porque: "Pronominal." },
    { q: "«Se» va siempre delante de…", o: ["un verbo", "un nombre"], a: 0, b: "gr", porque: "Reflexivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cs2-ce-se"], k: "sort", ask: "¿c'est o s'est?", q: "Clasifica.", cats: ["c'est", "s'est"], items: [["___ difficile.", 0], ["___ mon frère.", 0], ["___ fini.", 0], ["___ à toi.", 0], ["Il ___ perdu.", 1], ["Elle ___ amusée.", 1], ["Paul ___ blessé.", 1], ["On ___ bien entendus.", 1]], pista: "¿Cela est o je me suis?", why: "c'est / s'est." },
    { fase: "guiada", c: ["b4cs2-ce-se"], k: "choice", ask: "«Se levantó temprano.»", q: "Elige.", o: ["Il s'est levé tôt.", "Il c'est levé tôt."], a: 0, pista: "je me suis.", why: "<b>s'est</b>." },
    { fase: "guiada", c: ["b4cs2-ces-ses"], k: "choice", ask: "«Esos zapatos son caros.»", q: "Elige.", o: ["Ces chaussures sont chères.", "Ses chaussures sont chères."], a: 0, pista: "Señalar.", why: "<b>Ces</b>." },
    { fase: "indep", c: ["b4cs2-ce-se"], k: "choice", ask: "«Es verdad.»", q: "Elige.", o: ["C'est vrai.", "S'est vrai."], a: 0, why: "<b>C'est</b>." },
    { fase: "indep", c: ["b4cs2-ce-se"], k: "fill", ask: "Reflexivo.", q: "Il ___ promène dans le parc.", acc: ["se"], why: "<b>se</b>." },
    { fase: "indep", c: ["b4cs2-ces-ses"], k: "fill", ask: "«sus» (de Marie).", q: "Marie a oublié ___ clés chez moi.", acc: ["ses"], why: "<b>ses</b>." },
    { fase: "aplica", c: ["b4cs2-ce-se", "b4cs2-ces-ses"], k: "match", ask: "Une cada forma con su truco.", q: "Forma → truco", pairs: [["c'est", "cela est"], ["s'est", "je me suis"], ["ses", "mes"], ["ces", "ces… -là"]], why: "Trucos." },
    { fase: "aplica", c: ["b4cs2-ce-se"], k: "spot", ask: "Encuentra el error.", s: "Julie [c'est] trompée de train ce matin .", fix: "s'est", why: "<b>s'est</b>." },
    { fase: "aplica", c: ["b4cs2-ces-ses"], k: "spot", ask: "Encuentra el error.", s: "Paul a perdu [ces] clés ; il les cherche partout .", fix: "ses", why: "<b>ses</b>." },
    { fase: "dominio", c: ["b4cs2-ce-se"], k: "order", ask: "Ordena: «Se divirtió mucho».", tokens: ["Elle", "s'est beaucoup", "amusée"], why: "<b>Elle s'est beaucoup amusée</b>" },
    { fase: "dominio", c: ["b4cs2-ces-ses"], k: "choice", ask: "Si se puede cambiar por «mes», se escribe…", q: "Elige.", o: ["ses", "ces"], a: 0, es: true, why: "Posesivo." },
    { fase: "dominio", c: ["b4cs2-ce-se", "b4cs2-ces-ses"], k: "listen", say: "C'est Paul qui s'est occupé de ces documents et de ses dossiers.", acc: ["C'est Paul qui s'est occupé de ces documents et de ses dossiers."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est Paul qui s'est occupé de ces documents et de ses dossiers.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Marie", "Julie"], previo: [] }
};

/* ================================ B2.2·6 · Concordancias y escritura ================================ */
/* ── 51. Accord avec la plupart, beaucoup de, la moitié, chacun ── */
E["rem-sujets-collectifs"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Accord avec la plupart, beaucoup de, la moitié, chacun",
  objetivo: {
    que: "Vas a concordar el verbo con los sujetos de cantidad: plural con la plupart y beaucoup de, singular con tout le monde y chacun.",
    corto: "La plupart des Français partent en août. · Tout le monde est d'accord. · Beaucoup de jeunes utilisent TikTok.",
    podras: ["Poner el verbo en plural con la plupart (des), beaucoup de, peu de, trop de + plural.", "Poner el verbo en singular con tout le monde, chacun, personne, rien.", "Saber que con la moitié, une partie, un grand nombre de + plural la concordancia es libre (más frecuente en plural)."],
    iconos: ["ic2/amigos", "ic2/engranaje", "ic2/lapiz"],
    previos: ["Los indefinidos (B1.2, lección 9), el pronombre on (B1.1, lección 36) y très / beaucoup (lección 35)."],
    capacidad: "Ahora concuerdas el verbo con cualquier sujeto colectivo."
  },
  requiere: R("b2in-pos", "b2in-neg", "b1on-verbe", "b4tb-beaucoup"), recupera: ["b2in-pos"],
  conceptos: {
    "b4sc-pluriel": { n: "plural: la plupart (des) + verbo en plural (La plupart pensent que…, La plupart des habitants habitent en banlieue); beaucoup de, peu de, trop de + nombre plural → plural (Beaucoup de gens pensent…); la moitié, un grand nombre de + plural: concordancia libre", b: "gr" },
    "b4sc-singulier": { n: "singular: tout le monde (Tout le monde est d'accord, est venu), chacun (Chacun a son opinion), personne (Personne n'a répondu), rien", b: "gr" }
  },
  video: {
    titulo: "Sujetos colectivos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/amigos", grande: "la plupart", seg: [
        { es: "Hola. La mayoría: plural. Todo el mundo: singular." } ] },
      { v: "frase", filas: [
          { nota: "plural", p: 1, partes: [["La plupart des Français partent en août.", "-", 1]] },
          { nota: "singular", p: 2, partes: [["Tout le monde est d'accord.", "-", 2]] },
          { nota: "plural", p: 3, partes: [["Beaucoup de jeunes utilisent TikTok.", "-", 3]] } ], seg: [
        { fr: "La plupart des Français partent en août.", p: 1 }, { fr: "Tout le monde est d'accord.", p: 2 }, { fr: "Beaucoup de jeunes utilisent TikTok.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La mayoría piensa que…»", o: ["La plupart pensent que…", "La plupart pense que…"], a: 0,
        bien: "¡Sí! La plupart: plural.", mal: "Con la plupart, plural.",
        seg: [ { es: "Pausa. Plural." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la plupart", "beaucoup de", "tout le monde", "chacun", "personne"], seg: [
        { es: "Mira el sujeto antes del verbo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La encuesta de la clase", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta los resultados de una encuesta entre sus compañeros.",
    pj: PJ,
    lineas: [
      ["camila", "La plupart des étudiants travaillent le week-end. Beaucoup de gens pensent que c'est trop cher de vivre à Lyon.", "La mayoría de los estudiantes trabaja el fin de semana. Mucha gente piensa que vivir en Lyon es demasiado caro."],
      ["hugo", "Et le reste ? — Tout le monde est d'accord sur un point : les loyers sont trop élevés. Chacun a son opinion sur les solutions.", "¿Y lo demás? — Todo el mundo está de acuerdo en un punto: los alquileres son demasiado altos. Cada uno tiene su opinión sobre las soluciones."],
      ["camila", "Peu de personnes savent nager, curieusement ! Et personne n'a répondu à la dernière question.", "¡Curiosamente, poca gente sabe nadar! Y nadie respondió a la última pregunta."],
      ["hugo", "Bonne présentation ! La plupart des gens pensent que tout le monde a le droit de s'exprimer.", "¡Buena presentación! La mayoría de la gente piensa que todo el mundo tiene derecho a expresarse."]
    ],
    fijate: "Fíjate: La plupart des étudiants travaillent, Beaucoup de gens pensent, Peu de personnes savent (plural); Tout le monde est, Chacun a, personne n'a répondu (singular)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Plural o singular",
      idea: "Plural: la plupart (sola o con des + nombre): La plupart pensent que…, La plupart des habitants habitent en banlieue (aunque en español se diga «la mayoría piensa»). beaucoup de, peu de, trop de, assez de + nombre plural → plural: Beaucoup de gens pensent…, Peu de personnes savent nager. Singular: tout le monde (Tout le monde est venu, nunca «sont venus»), chacun (Chacun a son opinion), personne (Personne n'a répondu), rien. Concordancia libre: la moitié, une partie, un grand nombre de + plural (singular o plural según el sentido; el plural es más frecuente).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Concordancia"], [
        ["La plupart pensent que…", "La mayoría piensa que…", "plural"],
        ["Tout le monde le sait.", "Todo el mundo lo sabe.", "singular"],
        ["Chacun a son opinion.", "Cada uno tiene su opinión.", "singular"],
        ["Beaucoup de gens pensent que c'est cher. · pensent", "Mucha gente piensa que es caro.", "plural"],
        ["Personne n'a répondu. · a", "Nadie respondió.", "singular"],
        ["La plupart des élèves = sont absents. · Tout le monde = est présent. · Peu de personnes = savent nager. · Chacun = fait ce qu'il veut.", "pares", "ejemplos"],
        ["tout le monde · chacun · personne · rien", "todo el mundo · cada uno · nadie · nada", "Singular"],
        ["la plupart · beaucoup de gens · les gens · peu d'étudiants", "la mayoría · mucha gente · la gente · pocos estudiantes", "Plural"],
        ["La plupart des habitants habitent en banlieue. · habitent", "La mayoría de los vecinos vive en las afueras.", "plural"],
        ["La plupart des étudiants travaillent", "La mayoría de los estudiantes trabaja", "plural"],
        ["La plupart des gens pensent que tout le monde a le droit de s'exprimer.", "La mayoría de la gente piensa que todo el mundo tiene derecho a expresarse.", "plural / singular"]
      ]],
      ej: [["La plupart des Français partent en août.", "La mayoría de los franceses se van en agosto."], ["Tout le monde est d'accord.", "Todo el mundo está de acuerdo."], ["Beaucoup de jeunes utilisent TikTok.", "Muchos jóvenes usan TikTok."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tout le monde sont venus.", "Tout le monde est venu.", "Singular."], ["La plupart des habitants habite en banlieue.", "La plupart des habitants habitent en banlieue.", "Plural."], ["Chacun ont leur opinion.", "Chacun a son opinion.", "Singular."]] }
  ],
  ejemplos: [
    { sit: "«La mayoría piensa que…»", resp: "La plupart pensent que…", pasos: ["la plupart → plural."], porque: "Plural." },
    { sit: "«Todo el mundo lo sabe.»", resp: "Tout le monde le sait.", pasos: ["tout le monde → singular."], porque: "Singular." },
    { sit: "«Cada uno tiene su opinión.»", resp: "Chacun a son opinion.", pasos: ["chacun → singular."], porque: "Singular." }
  ],
  comprueba: [
    { q: "Con «la plupart» el verbo va en…", o: ["plural", "singular"], a: 0, b: "gr", porque: "La plupart pensent." },
    { q: "Con «tout le monde» el verbo va en…", o: ["singular", "plural"], a: 0, b: "gr", porque: "Tout le monde est." },
    { q: "Con «beaucoup de gens» el verbo va en…", o: ["plural", "singular"], a: 0, b: "gr", porque: "Beaucoup de gens pensent." }
  ],
  practica: [
    { fase: "guiada", c: ["b4sc-pluriel", "b4sc-singulier"], k: "sort", ask: "¿Verbo en singular o en plural?", q: "Clasifica.", cats: ["Singular", "Plural"], items: [["tout le monde", 0], ["chacun", 0], ["personne", 0], ["rien", 0], ["la plupart", 1], ["beaucoup de gens", 1], ["les gens", 1], ["peu d'étudiants", 1]], pista: "No pienses en el español.", why: "Concordancia." },
    { fase: "guiada", c: ["b4sc-pluriel"], k: "choice", ask: "«La mayoría piensa que…»", q: "Elige.", o: ["La plupart pensent que…", "La plupart pense que…"], a: 0, pista: "Plural.", why: "<b>pensent</b>." },
    { fase: "guiada", c: ["b4sc-singulier"], k: "choice", ask: "«Todo el mundo lo sabe.»", q: "Elige.", o: ["Tout le monde le sait.", "Tout le monde le savent."], a: 0, pista: "Singular.", why: "<b>sait</b>." },
    { fase: "indep", c: ["b4sc-singulier"], k: "choice", ask: "«Cada uno tiene su opinión.»", q: "Elige.", o: ["Chacun a son opinion.", "Chacun ont leur opinion."], a: 0, why: "<b>a</b>." },
    { fase: "indep", c: ["b4sc-pluriel"], k: "fill", ask: "Presente de penser.", q: "Beaucoup de gens ___ que c'est cher.", acc: ["pensent"], why: "<b>pensent</b>." },
    { fase: "indep", c: ["b4sc-singulier"], k: "fill", ask: "Presente de avoir (personne).", q: "Personne n'___ répondu.", acc: ["a"], why: "<b>a</b>." },
    { fase: "aplica", c: ["b4sc-pluriel", "b4sc-singulier"], k: "match", ask: "Une cada sujeto con su verbo.", q: "Sujeto → verbo", pairs: [["La plupart des élèves", "sont absents."], ["Tout le monde", "est présent."], ["Peu de personnes", "savent nager."], ["Chacun", "fait ce qu'il veut."]], why: "Concordancia." },
    { fase: "aplica", c: ["b4sc-pluriel"], k: "spot", ask: "Encuentra el error.", s: "La plupart des habitants [habite] en banlieue .", fix: "habitent", why: "<b>habitent</b>." },
    { fase: "aplica", c: ["b4sc-singulier"], k: "spot", ask: "Encuentra el error.", s: "Hier soir , tout le monde [sont] venus à la fête .", fix: "est", why: "<b>est</b> venu." },
    { fase: "dominio", c: ["b4sc-pluriel"], k: "order", ask: "Ordena: «La mayoría de los estudiantes trabaja».", tokens: ["La plupart", "des étudiants", "travaillent"], why: "<b>La plupart des étudiants travaillent</b>" },
    { fase: "dominio", c: ["b4sc-pluriel"], k: "choice", ask: "Con «la plupart» el verbo va en…", q: "Elige.", o: ["plural", "singular"], a: 0, es: true, why: "Plural." },
    { fase: "dominio", c: ["b4sc-pluriel", "b4sc-singulier"], k: "listen", say: "La plupart des gens pensent que tout le monde a le droit de s'exprimer.", acc: ["La plupart des gens pensent que tout le monde a le droit de s'exprimer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La plupart des gens pensent que tout le monde a le droit de s'exprimer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "TikTok", "Lyon"], previo: [] }
};

/* ── 52. Les consonnes doubles : personne, adresse, appeler ── */
E["rem-doubles-consonnes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les consonnes doubles : personne, adresse, appeler",
  objetivo: {
    que: "Vas a escribir las consonantes dobles que el español escribe simples: personne, adresse, appartement, environnement…",
    corto: "Donne-moi ton adresse. · Je t'appelle ce soir. · Il y a beaucoup de personnes.",
    podras: ["Escribir bien las palabras frecuentes: personne, adresse, appartement, apprendre, attendre, occasion, commerce, différent, environnement.", "Usar los sufijos con doble consonante: -onne, -enne, -elle, -ette (bonne, ancienne, belle).", "Conjugar appeler y jeter (j'appelle, je jette; nous appelons) y recordar la excepción acheter (j'achète)."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/movil"],
    previos: ["La ortografía (lección 14) y los acentos (lección 47)."],
    capacidad: "Ahora no se te escapa ninguna doble consonante."
  },
  requiere: R("b4or-mots", "b4ac2-aigu-grave"), recupera: ["b4or-mots"],
  conceptos: {
    "b4dc-mots": { n: "palabras con consonante doble: personne, adresse, appartement, apprendre, attendre, occasion, commerce, commencer, connaître, différent, développer, environnement, colline; sufijos -onne, -enne, -elle, -ette (bonne, ancienne, belle)", b: "gr" },
    "b4dc-verbes": { n: "appeler y jeter duplican la consonante delante de e muda: je m'appelle, je t'appelle, il jette (pero nous appelons, vous jetez); excepción: acheter → j'achète (acento, no doble); sin doble: numéro, image, ami", b: "gr" }
  },
  video: {
    titulo: "Consonantes dobles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "adresse", seg: [
        { es: "Hola. Donde el español escribe una, el francés a veces escribe dos." } ] },
      { v: "frase", filas: [
          { nota: "ss", p: 1, partes: [["Donne-moi ton adresse.", "-", 1]] },
          { nota: "pp · ll", p: 2, partes: [["Je t'appelle ce soir.", "-", 2]] },
          { nota: "nn", p: 3, partes: [["Il y a beaucoup de personnes.", "-", 3]] } ], seg: [
        { fr: "Donne-moi ton adresse.", p: 1 }, { fr: "Je t'appelle ce soir.", p: 2 }, { fr: "Il y a beaucoup de personnes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Me llamo…»", o: ["Je m'appelle…", "Je m'apelle…"], a: 0,
        bien: "¡Sí! Doble p y doble l.", mal: "Appeler: pp y ll delante de e muda.",
        seg: [ { es: "Pausa. Pp, ll." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["personne", "adresse", "appartement", "environnement", "j'appelle", "je jette"], seg: [
        { es: "Palabras, sufijos y verbos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El nuevo apartamento", img: "bg-paris", yo: "camila",
    escena: "Camila le manda a Hugo su nueva dirección por mensaje.",
    pj: PJ,
    lineas: [
      ["camila", "Je t'envoie mon adrese pour le nouvel apartement…", "Te envío mi direción para el nuevo apartamento…"],
      ["hugo", "Adresse avec deux s, appartement avec deux p ! Et tu as écrit « je t'apelle » : appelle, avec deux p et deux l.", "¡Adresse con dos s, appartement con dos p! Y escribiste «je t'apelle»: appelle, con dos p y dos l."],
      ["camila", "Mais « nous appelons », avec un seul l ? — Oui : devant un e muet, on double ; sinon, non. Comme jeter : je jette, nous jetons.", "¿Pero «nous appelons», con una sola l? — Sí: delante de e muda se duplica; si no, no. Como jeter: je jette, nous jetons."],
      ["hugo", "Et acheter, c'est l'exception : j'achète, avec un accent. Envoie-moi ton adresse et je t'appelle en arrivant !", "Y acheter es la excepción: j'achète, con acento. ¡Envíame tu dirección y te llamo al llegar!"]
    ],
    fijate: "Fíjate: adresse (ss), appartement (pp), je t'appelle (pp, ll), nous appelons (una l), je jette / nous jetons, j'achète (acento, no doble)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dónde se duplica",
      idea: "Palabras frecuentes con consonante doble (simple en español): personne, adresse, appartement, apprendre, attendre, occasion, commerce, commencer, connaître, différent, développer, environnement, colline. Sufijos femeninos: -onne (bonne), -enne (ancienne), -elle (belle), -ette (chouette). Verbos appeler y jeter: duplican la consonante delante de una e muda: je m'appelle, je t'appelle, ils appellent, il jette; pero nous appelons, vous jetez. Excepción: acheter → j'achète (acento grave, no doble). Sin doble: numéro, image, ami.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Doble"], [
        ["adresse", "dirección", "ss"],
        ["Je m'appelle…", "Me llamo…", "pp · ll"],
        ["environnement", "medio ambiente", "nn"],
        ["Il jette ses papiers à la poubelle. · jette", "Tira sus papeles a la basura.", "tt"],
        ["C'est une bonne occasion. · occasion", "Es una buena ocasión.", "cc · nn"],
        ["persona = personne · apartamento = appartement · comercio = commerce · diferente = différent", "equivalencias", "dobles"],
        ["personne · attendre · colline · développer", "persona · esperar · colina · desarrollar", "Sí"],
        ["acheter · numéro · image · ami", "comprar · número · imagen · amigo", "No"],
        ["Nous appelons le médecin tout de suite. · appelons", "Llamamos al médico enseguida.", "pp · l"],
        ["Je t'appelle demain", "Te llamo mañana", "pp · ll"],
        ["Envoie-moi ton adresse et je t'appelle en arrivant.", "Envíame tu dirección y te llamo al llegar.", "ss · pp · ll"]
      ]],
      ej: [["Donne-moi ton adresse.", "Dame tu dirección."], ["Je t'appelle ce soir.", "Te llamo esta noche."], ["Il y a beaucoup de personnes.", "Hay mucha gente."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["mon adrese / j'apelle", "mon adresse / j'appelle", "Doble ss, doble pp y ll."], ["nous appellons", "nous appelons", "Sin e muda: una l."], ["j'achette", "j'achète", "acheter: acento, no doble."]] }
  ],
  ejemplos: [
    { sit: "«dirección»", resp: "adresse", pasos: ["Una d, dos s."], porque: "Doble." },
    { sit: "«Me llamo…»", resp: "Je m'appelle…", pasos: ["pp y ll."], porque: "appeler." },
    { sit: "«medio ambiente»", resp: "environnement", pasos: ["nn."], porque: "Doble." }
  ],
  comprueba: [
    { q: "«Nosotros llamamos» se escribe…", o: ["nous appelons", "nous appellons"], a: 0, b: "gr", porque: "Sin e muda." },
    { q: "«Yo compro» se escribe…", o: ["j'achète", "j'achette"], a: 0, b: "gr", porque: "Excepción." },
    { q: "«Persona» en francés:", o: ["personne", "persone"], a: 0, b: "gr", porque: "nn." }
  ],
  practica: [
    { fase: "guiada", c: ["b4dc-mots", "b4dc-verbes"], k: "sort", ask: "¿Lleva consonante doble?", q: "Clasifica.", cats: ["Sí", "No"], items: [["personne", 0], ["attendre", 0], ["colline", 0], ["développer", 0], ["acheter", 1], ["numéro", 1], ["image", 1], ["ami", 1]], pista: "Piensa en la palabra escrita.", why: "Dobles." },
    { fase: "guiada", c: ["b4dc-mots"], k: "choice", ask: "«dirección»", q: "Elige.", o: ["adresse", "adrese"], a: 0, pista: "ss.", why: "<b>adresse</b>." },
    { fase: "guiada", c: ["b4dc-verbes"], k: "choice", ask: "«Me llamo…»", q: "Elige.", o: ["Je m'appelle…", "Je m'apelle…"], a: 0, pista: "pp, ll.", why: "<b>appelle</b>." },
    { fase: "indep", c: ["b4dc-mots"], k: "choice", ask: "«medio ambiente»", q: "Elige.", o: ["environnement", "environement"], a: 0, why: "<b>nn</b>." },
    { fase: "indep", c: ["b4dc-verbes"], k: "fill", ask: "jeter (il).", q: "Il ___ ses papiers à la poubelle.", acc: ["jette"], why: "<b>jette</b>." },
    { fase: "indep", c: ["b4dc-mots"], k: "fill", ask: "«ocasión»", q: "C'est une bonne ___ .", acc: ["occasion"], why: "<b>occasion</b>." },
    { fase: "aplica", c: ["b4dc-mots"], k: "match", ask: "Une cada palabra con su forma francesa.", q: "Español → francés", pairs: [["persona", "personne"], ["apartamento", "appartement"], ["comercio", "commerce"], ["diferente", "différent"]], why: "Dobles." },
    { fase: "aplica", c: ["b4dc-verbes"], k: "spot", ask: "Encuentra el error.", s: "Nous [apelons] le médecin tout de suite .", fix: "appelons", why: "<b>appelons</b>." },
    { fase: "aplica", c: ["b4dc-verbes"], k: "spot", ask: "Encuentra el error.", s: "Demain , j'[achette] le pain pour tout le monde .", fix: "achète", why: "<b>achète</b>." },
    { fase: "dominio", c: ["b4dc-verbes"], k: "order", ask: "Ordena: «Te llamo mañana».", tokens: ["Je", "t'appelle", "demain"], why: "<b>Je t'appelle demain</b>" },
    { fase: "dominio", c: ["b4dc-verbes"], k: "choice", ask: "«Nosotros llamamos» se escribe…", q: "Elige.", o: ["nous appelons", "nous appellons"], a: 0, why: "Una l." },
    { fase: "dominio", c: ["b4dc-mots", "b4dc-verbes"], k: "listen", say: "Envoie-moi ton adresse et je t'appelle en arrivant.", acc: ["Envoie-moi ton adresse et je t'appelle en arrivant."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Envoie-moi ton adresse et je t'appelle en arrivant.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 53. Chaque / chacun, même / mêmes, quelque / quelques ── */
E["rem-chaque-meme-quelque"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Chaque / chacun, même / mêmes, quelque / quelques",
  objetivo: {
    que: "Vas a distinguir chaque (determinante) de chacun (pronombre), même adjetivo (concuerda) de même adverbio (invariable) y quelques de quelque.",
    corto: "Chaque étudiant reçoit un livre ; chacun le lit. · Ils font toujours les mêmes erreurs. · J'ai invité quelques amis.",
    podras: ["Usar chaque + nombre singular (chaque jour) y chacun(e) solo como pronombre (chacun de nous).", "Concordar même adjetivo (les mêmes problèmes, eux-mêmes) y dejar invariable même = incluso (même les enfants).", "Usar quelques + plural (algunos) y quelque en singular (quelque temps)."],
    iconos: ["ic2/engranaje", "ic2/amigos", "ic2/lapiz"],
    previos: ["Los indefinidos (B1.2, lección 9), tout (B1.1, lección 37) y los sujetos colectivos (lección 51)."],
    capacidad: "Ahora usas estos indefinidos sin faltas de concordancia."
  },
  requiere: R("b2in-pos", "b1to-adj", "b4sc-singulier"), recupera: ["b2in-pos"],
  conceptos: {
    "b4cm-chaque": { n: "chaque + nombre singular (determinante: chaque jour, chaque élève, chaque fois); chacun / chacune (pronombre, solo: chacun de vous, chacun son tour, à chacun sa vérité); nunca «chaque un»", b: "gr" },
    "b4cm-meme": { n: "même(s) adjetivo, concuerda: les mêmes erreurs, eux-mêmes, moi-même; même adverbio (= incluso), invariable: Même les enfants le savent; quelques + plural (algunos: quelques amis, quelques pages); quelque + singular (quelque temps)", b: "gr" }
  },
  video: {
    titulo: "Chaque, même, quelques", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "chacun", seg: [
        { es: "Hola. Determinante, pronombre, adjetivo o adverbio." } ] },
      { v: "frase", filas: [
          { nota: "chaque / chacun", p: 1, partes: [["Chaque étudiant reçoit un livre ; chacun le lit.", "-", 1]] },
          { nota: "mêmes", p: 2, partes: [["Ils font toujours les mêmes erreurs.", "-", 2]] },
          { nota: "quelques", p: 3, partes: [["J'ai invité quelques amis.", "-", 3]] } ], seg: [
        { fr: "Chaque étudiant reçoit un livre ; chacun le lit.", p: 1 }, { fr: "Ils font toujours les mêmes erreurs.", p: 2 }, { fr: "J'ai invité quelques amis.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Incluso los niños lo saben.»", o: ["Même les enfants le savent.", "Mêmes les enfants le savent."], a: 0,
        bien: "¡Sí! Incluso: invariable.", mal: "Même = incluso: sin s.",
        seg: [ { es: "Pausa. ¿Incluso o los mismos?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["chaque jour", "chacun", "les mêmes", "même les enfants", "quelques amis"], seg: [
        { es: "Mira qué función cumple la palabra.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La clase de la mañana", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia reparte libros y comenta los errores frecuentes.",
    pj: PJ,
    lineas: [
      ["sofia", "Chaque étudiant reçoit un livre ; chacun le lit chez soi. Chaque semaine, nous ferons un test.", "Cada estudiante recibe un libro; cada uno lo lee en casa. Cada semana haremos un examen."],
      ["camila", "Chaque année, quelques étudiants font les mêmes erreurs, non ?", "Cada año, algunos estudiantes cometen los mismos errores, ¿no?"],
      ["sofia", "Oui ! Même les meilleurs se trompent. Ils l'ont fait eux-mêmes, sans aide.", "¡Sí! Incluso los mejores se equivocan. Lo hicieron ellos mismos, sin ayuda."],
      ["hugo", "Moi, j'ai lu quelques pages seulement… Mais chacun son rythme ! À chacun sa vérité.", "Yo solo leí algunas páginas… ¡Pero cada uno a su ritmo! A cada cual su verdad."]
    ],
    fijate: "Fíjate: Chaque étudiant, chaque semaine, chaque année (determinante); chacun le lit, chacun son rythme (pronombre); les mêmes erreurs, eux-mêmes (adjetivo); Même les meilleurs (incluso); quelques étudiants, quelques pages (algunos)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Función de cada palabra",
      idea: "chaque es un determinante: va delante de un nombre en singular (chaque jour, chaque élève, chaque fois). chacun / chacune es un pronombre: va solo (chacun de nous, chacun son tour, Chacun a le droit de…); nunca «chaque un». même como adjetivo (= mismo) concuerda: les mêmes erreurs; con pronombre tónico: moi-même, eux-mêmes. même como adverbio (= incluso) es invariable: Même les enfants le savent. quelques + plural = algunos (quelques amis, quelques pages); quelque + singular = algún, cierto (quelque temps).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["chaque jour", "cada día", "determinante"],
        ["les mêmes problèmes", "los mismos problemas", "adjetivo"],
        ["Même les enfants le savent.", "Incluso los niños lo saben.", "adverbio"],
        ["J'ai lu quelques pages seulement. · quelques", "Solo leí algunas páginas.", "algunos"],
        ["Ils l'ont fait eux-mêmes. · mêmes", "Lo hicieron ellos mismos.", "pronombre + même"],
        ["chaque = determinante · chacun = pronombre · même (incluso) = invariable · mêmes (los mismos) = concuerda", "funciones", "resumen"],
        ["___ matin · ___ semaine · ___ élève · ___ fois", "cada mañana · cada semana · cada alumno · cada vez", "chaque"],
        ["___ de vous · ___ son tour · ___ pour soi · À ___ sa vérité", "cada uno de ustedes · cada uno a su turno · cada cual por su lado · a cada cual su verdad", "chacun"],
        ["Chacun a le droit de donner son avis. · Chacun", "Cada uno tiene derecho a dar su opinión.", "pronombre"],
        ["Nous faisons les mêmes erreurs", "Cometemos los mismos errores", "adjetivo"],
        ["Chaque année, quelques étudiants font les mêmes erreurs.", "Cada año, algunos estudiantes cometen los mismos errores.", "todos"]
      ]],
      ej: [["Chaque étudiant reçoit un livre ; chacun le lit.", "Cada estudiante recibe un libro; cada uno lo lee."], ["Ils font toujours les mêmes erreurs.", "Siempre cometen los mismos errores."], ["J'ai invité quelques amis.", "Invité a algunos amigos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["chaque un", "chacun", "Pronombre en una palabra: chacun."], ["Chaque a le droit…", "Chacun a le droit…", "Solo: pronombre."], ["Mêmes les enfants le savent.", "Même les enfants le savent.", "Incluso: invariable."]] }
  ],
  ejemplos: [
    { sit: "«Cada día»", resp: "chaque jour", pasos: ["Determinante + nombre."], porque: "chaque." },
    { sit: "«los mismos problemas»", resp: "les mêmes problèmes", pasos: ["Adjetivo: concuerda."], porque: "mêmes." },
    { sit: "«Incluso los niños lo saben.»", resp: "Même les enfants le savent.", pasos: ["Adverbio: invariable."], porque: "même." }
  ],
  comprueba: [
    { q: "«Chaque» va siempre…", o: ["delante de un nombre", "solo"], a: 0, b: "gr", porque: "Determinante." },
    { q: "«Même» = incluso es…", o: ["invariable", "variable"], a: 0, b: "gr", porque: "Adverbio." },
    { q: "«Algunos amigos»", o: ["quelques amis", "quelque amis"], a: 0, b: "gr", porque: "Plural." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cm-chaque"], k: "sort", ask: "¿chaque o chacun?", q: "Clasifica.", cats: ["chaque", "chacun"], items: [["___ matin", 0], ["___ semaine", 0], ["___ élève", 0], ["___ fois", 0], ["___ de vous", 1], ["___ son tour", 1], ["___ pour soi", 1], ["À ___ sa vérité", 1]], pista: "¿Hay un nombre detrás?", why: "chaque / chacun." },
    { fase: "guiada", c: ["b4cm-chaque"], k: "choice", ask: "«Cada día»", q: "Elige.", o: ["chaque jour", "chacun jour"], a: 0, pista: "Determinante.", why: "<b>chaque</b>." },
    { fase: "guiada", c: ["b4cm-meme"], k: "choice", ask: "«los mismos problemas»", q: "Elige.", o: ["les mêmes problèmes", "les même problèmes"], a: 0, pista: "Adjetivo.", why: "<b>mêmes</b>." },
    { fase: "indep", c: ["b4cm-meme"], k: "choice", ask: "«Incluso los niños lo saben.»", q: "Elige.", o: ["Même les enfants le savent.", "Mêmes les enfants le savent."], a: 0, why: "<b>Même</b>." },
    { fase: "indep", c: ["b4cm-meme"], k: "fill", ask: "«algunas»", q: "J'ai lu ___ pages seulement.", acc: ["quelques"], why: "<b>quelques</b>." },
    { fase: "indep", c: ["b4cm-meme"], k: "fill", ask: "eux-…", q: "Ils l'ont fait eux-___ .", acc: ["mêmes"], why: "<b>mêmes</b>." },
    { fase: "aplica", c: ["b4cm-chaque", "b4cm-meme"], k: "match", ask: "Une cada palabra con su función.", q: "Palabra → función", pairs: [["chaque", "determinante"], ["chacun", "pronombre"], ["même (incluso)", "invariable"], ["mêmes (los mismos)", "concuerda"]], why: "Funciones." },
    { fase: "aplica", c: ["b4cm-chaque"], k: "spot", ask: "Encuentra el error.", s: "[Chaque] a le droit de donner son avis .", fix: "Chacun", why: "<b>Chacun</b>." },
    { fase: "aplica", c: ["b4cm-meme"], k: "spot", ask: "Encuentra el error.", s: "Ils font toujours les [même] erreurs .", fix: "mêmes", why: "<b>mêmes</b>." },
    { fase: "dominio", c: ["b4cm-meme"], k: "order", ask: "Ordena: «Cometemos los mismos errores».", tokens: ["Nous faisons", "les mêmes", "erreurs"], why: "<b>Nous faisons les mêmes erreurs</b>" },
    { fase: "dominio", c: ["b4cm-chaque"], k: "choice", ask: "«Chaque» va siempre…", q: "Elige.", o: ["delante de un nombre", "solo"], a: 0, es: true, why: "Determinante." },
    { fase: "dominio", c: ["b4cm-chaque", "b4cm-meme"], k: "listen", say: "Chaque année, quelques étudiants font les mêmes erreurs.", acc: ["Chaque année, quelques étudiants font les mêmes erreurs."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chaque année, quelques étudiants font les mêmes erreurs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: [] }
};

/* ── 54. Reprendre sans répéter : celui-ci, ce dernier, ce phénomène ── */
E["rem-anaphores"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Reprendre sans répéter : celui-ci, ce dernier, ce phénomène",
  objetivo: {
    que: "Vas a retomar lo ya dicho sin repetirlo: pronombres (celui-ci, ce dernier), sinónimos, hiperónimos y nominalizaciones que resumen.",
    corto: "Marc a appelé Luc ; ce dernier n'a pas répondu. · Le télétravail se développe. Ce phénomène touche tous les secteurs.",
    podras: ["Usar las anáforas pronominales: il, elle, celui-ci, celle-ci, ce dernier / cette dernière (el último mencionado).", "Usar las anáforas léxicas: sinónimos (Paris → la capitale) e hiperónimos (le chien → l'animal, le tramway → ce moyen de transport).", "Resumir con una nominalización: ce phénomène, cette tendance, cette hausse, cette mesure, cette décision."],
    iconos: ["ic2/libro", "ic2/engranaje", "ic2/lapiz"],
    previos: ["Evitar repeticiones (lección 13) y la nominalización (B2.1, lección 12)."],
    capacidad: "Ahora tus textos fluyen sin repetir la misma palabra."
  },
  requiere: R("b3no-phrase", "b4rp-pronoms", "b4rp-mots"), recupera: ["b4rp-mots"],
  conceptos: {
    "b4an-pronoms": { n: "anáforas pronominales: il, elle, celui-ci / celle-ci, ce dernier / cette dernière (= el último mencionado: Marc a parlé à Paul ; ce dernier était content)", b: "gr" },
    "b4an-lexicales": { n: "anáforas léxicas: sinónimos (Paris → la capitale, la Ville lumière), hiperónimos (le chien → l'animal, la Seine → ce fleuve, le tramway → ce moyen de transport, Victor Hugo → l'écrivain), resumen (ce phénomène, cette hausse, cette mesure, cette décision); cet delante de vocal (cet écrivain)", b: "gr" }
  },
  video: {
    titulo: "Retomar sin repetir", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "ce dernier", seg: [
        { es: "Hola. Paris, la capitale, la Ville lumière…" } ] },
      { v: "frase", filas: [
          { nota: "pronombre", p: 1, partes: [["Marc a appelé Luc ; ce dernier n'a pas répondu.", "-", 1]] },
          { nota: "resumen", p: 2, partes: [["Le télétravail se développe. Ce phénomène touche tous les secteurs.", "-", 2]] },
          { nota: "hiperónimo", p: 3, partes: [["J'ai adopté un chat. L'animal est très calme.", "-", 3]] } ], seg: [
        { fr: "Marc a appelé Luc ; ce dernier n'a pas répondu.", p: 1 }, { fr: "Le télétravail se développe. Ce phénomène touche tous les secteurs.", p: 2 }, { fr: "J'ai adopté un chat. L'animal est très calme.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Los precios suben. ___ preocupa a las familias.»", o: ["Cette hausse", "Ce prix"], a: 0,
        bien: "¡Sí! Una nominalización que resume.", mal: "Resume la idea: cette hausse.",
        seg: [ { es: "Pausa. Resumir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ce dernier", "celui-ci", "la capitale", "l'animal", "ce phénomène", "cette mesure"], seg: [
        { es: "Pronombres, sinónimos y resúmenes.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El resumen de la noticia", img: "bg-biblioteca", yo: "camila",
    escena: "Camila resume una noticia sobre la lectura; Hugo le ayuda a variar.",
    pj: PJ,
    lineas: [
      ["camila", "« Les jeunes lisent moins. Les jeunes lisent moins de romans. Les jeunes… » Trop de répétitions !", "«Los jóvenes leen menos. Los jóvenes leen menos novelas. Los jóvenes…» ¡Demasiadas repeticiones!"],
      ["hugo", "« Les jeunes lisent moins ; ce phénomène inquiète les enseignants. » Ce phénomène résume toute l'idée.", "«Los jóvenes leen menos; este fenómeno preocupa a los profesores.» Este fenómeno resume toda la idea."],
      ["camila", "Et « J'ai lu un roman de Zola. Cette écrivain… » ? — Cet écrivain : devant une voyelle, cet. Ou l'auteur.", "¿Y «Leí una novela de Zola. Esta escritora…»? — Cet écrivain: delante de vocal, cet. O l'auteur."],
      ["hugo", "Et pour deux personnes : « Julie a rencontré Anne ; cette dernière est avocate. » Cette dernière, c'est Anne, la dernière nommée.", "Y para dos personas: «Julie conoció a Anne; esta última es abogada.» Esta última es Anne, la última nombrada."]
    ],
    fijate: "Fíjate: ce phénomène (resumen), cet écrivain / l'auteur (hiperónimo, cet + vocal), cette dernière (la última mencionada)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro maneras de retomar",
      idea: "1. Pronombres: il, elle, celui-ci, celle-ci; ce dernier / cette dernière = el último mencionado (Marc a parlé à Paul ; ce dernier était content → Paul). 2. Sinónimos: Paris → la capitale, la Ville lumière. 3. Hiperónimos (palabra más general): le chien → l'animal; la Seine → ce fleuve; le tramway → ce moyen de transport; Victor Hugo → l'écrivain, l'auteur. 4. Nominalización que resume una idea: Les prix augmentent. Cette hausse inquiète les familles; Le télétravail se développe. Ce phénomène…; la réforme → cette mesure. Recuerda: cet delante de nombre masculino con vocal (cet écrivain).",
      intro: "Toca cada anáfora.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Marc a parlé à Paul ; ce dernier était content.", "Marc habló con Paul; este último estaba contento.", "pronominal"],
        ["Les prix augmentent. Cette hausse inquiète les familles. · Cette hausse", "Los precios suben. Esta subida preocupa a las familias.", "resumen"],
        ["le tramway → ce moyen de transport", "el tranvía → este medio de transporte", "hiperónimo"],
        ["La Seine traverse Paris. Ce fleuve mesure 777 km. · fleuve", "El Sena atraviesa París. Este río mide 777 km.", "hiperónimo"],
        ["Julie a rencontré Anne ; cette dernière est avocate. · dernière", "Julie conoció a Anne; esta última es abogada.", "pronominal"],
        ["le chien = l'animal · Paris = la capitale · Victor Hugo = l'écrivain · la réforme = cette mesure", "retomas", "léxica"],
        ["il · celui-ci · ce dernier · elle", "él · este · este último · ella", "Pronominal"],
        ["l'auteur · ce phénomène · la capitale · cette décision", "el autor · este fenómeno · la capital · esta decisión", "Léxica"],
        ["J'ai lu un roman de Zola. Cet écrivain décrit la société du XIXe siècle. · Cet", "Leí una novela de Zola. Este escritor describe la sociedad del siglo XIX.", "cet + vocal"],
        ["Ce phénomène inquiète les experts", "Este fenómeno preocupa a los expertos", "resumen"],
        ["Les jeunes lisent moins ; ce phénomène inquiète les enseignants.", "Los jóvenes leen menos; este fenómeno preocupa a los profesores.", "resumen"]
      ]],
      ej: [["Marc a appelé Luc ; ce dernier n'a pas répondu.", "Marc llamó a Luc; este no contestó."], ["Le télétravail se développe. Ce phénomène touche tous les secteurs.", "El teletrabajo se desarrolla. Este fenómeno afecta a todos los sectores."], ["J'ai adopté un chat. L'animal est très calme.", "Adopté un gato. El animal es muy tranquilo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Paris… Paris… Paris…", "Paris… la capitale… la Ville lumière…", "Variar las referencias."], ["Cette écrivain…", "Cet écrivain…", "Masculino con vocal: cet."], ["Ce dernier (para el primero nombrado)", "Ce dernier = el último mencionado", "Si no, usa il o el nombre."]] }
  ],
  ejemplos: [
    { sit: "«Marc habló con Paul; este último estaba contento.»", resp: "Marc a parlé à Paul ; ce dernier était content.", pasos: ["El último nombrado."], porque: "ce dernier." },
    { sit: "«Los precios suben. ___ preocupa a las familias.»", resp: "Cette hausse", pasos: ["Resumir."], porque: "Nominalización." },
    { sit: "Retomar «le tramway»:", resp: "ce moyen de transport", pasos: ["Palabra más general."], porque: "Hiperónimo." }
  ],
  comprueba: [
    { q: "«Ce dernier» designa…", o: ["al último mencionado", "al primero mencionado"], a: 0, b: "gr", porque: "dernier." },
    { q: "«Ce phénomène» sirve para…", o: ["resumir una idea", "presentar a alguien"], a: 0, b: "gr", porque: "Resumen." },
    { q: "«L'animal» para «le chien» es…", o: ["un hiperónimo", "un sinónimo exacto"], a: 0, b: "gr", porque: "Más general." }
  ],
  practica: [
    { fase: "guiada", c: ["b4an-pronoms", "b4an-lexicales"], k: "sort", ask: "¿Anáfora pronominal o léxica?", q: "Clasifica.", cats: ["Pronominal", "Léxica"], items: [["il", 0], ["celui-ci", 0], ["ce dernier", 0], ["elle", 0], ["l'auteur", 1], ["ce phénomène", 1], ["la capitale", 1], ["cette décision", 1]], pista: "¿Pronombre o nombre?", why: "Tipos." },
    { fase: "guiada", c: ["b4an-pronoms"], k: "choice", ask: "«Marc habló con Paul; este último estaba contento.»", q: "Elige.", o: ["Marc a parlé à Paul ; ce dernier était content.", "Marc a parlé à Paul ; ce premier était content."], a: 0, pista: "El último.", why: "<b>ce dernier</b>." },
    { fase: "guiada", c: ["b4an-lexicales"], k: "choice", ask: "«Los precios suben. ___ preocupa a las familias.»", q: "«Les prix augmentent. ___ inquiète les familles.»", o: ["Cette hausse", "Ce prix"], a: 0, pista: "Resumir.", why: "<b>Cette hausse</b>." },
    { fase: "indep", c: ["b4an-lexicales"], k: "choice", ask: "Retomar «le tramway»:", q: "Elige.", o: ["ce moyen de transport", "ce tramway encore"], a: 0, why: "Hiperónimo." },
    { fase: "indep", c: ["b4an-lexicales"], k: "fill", ask: "«río» (la Seine).", q: "La Seine traverse Paris. Ce ___ mesure 777 km.", acc: ["fleuve"], why: "<b>fleuve</b>." },
    { fase: "indep", c: ["b4an-pronoms"], k: "fill", ask: "«esta última»", q: "Julie a rencontré Anne ; cette ___ est avocate.", acc: ["dernière"], why: "<b>dernière</b>." },
    { fase: "aplica", c: ["b4an-lexicales"], k: "match", ask: "Une cada palabra con su retoma.", q: "Palabra → retoma", pairs: [["le chien", "l'animal"], ["Paris", "la capitale"], ["Victor Hugo", "l'écrivain"], ["la réforme", "cette mesure"]], why: "Anáforas." },
    { fase: "aplica", c: ["b4an-lexicales"], k: "spot", ask: "Encuentra el error.", s: "J'ai lu un roman de Zola . [Cette] écrivain décrit la société du XIXe siècle .", fix: "Cet", why: "<b>Cet</b>." },
    { fase: "aplica", c: ["b4an-pronoms"], k: "choice", ask: "«Ce dernier» designa…", q: "Elige.", o: ["al último mencionado", "al primero mencionado"], a: 0, es: true, why: "El último." },
    { fase: "dominio", c: ["b4an-lexicales"], k: "order", ask: "Ordena: «Este fenómeno preocupa a los expertos».", tokens: ["Ce phénomène", "inquiète", "les experts"], why: "<b>Ce phénomène inquiète les experts</b>" },
    { fase: "dominio", c: ["b4an-lexicales"], k: "choice", ask: "«Ce phénomène» sirve para…", q: "Elige.", o: ["resumir una idea", "presentar a alguien"], a: 0, es: true, why: "Resumir." },
    { fase: "dominio", c: ["b4an-pronoms", "b4an-lexicales"], k: "listen", say: "Les jeunes lisent moins ; ce phénomène inquiète les enseignants.", acc: ["Les jeunes lisent moins ; ce phénomène inquiète les enseignants.", "Les jeunes lisent moins; ce phénomène inquiète les enseignants.", "Les jeunes lisent moins, ce phénomène inquiète les enseignants."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les jeunes lisent moins ; ce phénomène inquiète les enseignants.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marc", "Luc", "Paul", "Julie", "Anne", "Zola", "Victor Hugo", "Seine", "Paris"], previo: [] }
};

/* ================================ B2.2·6 · Revisar el texto ================================ */
/* ── 55. Organiser ses paragraphes ── */
E["rem-paragraphe"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Organiser ses paragraphes",
  objetivo: {
    que: "Vas a organizar el texto en párrafos: una idea por párrafo, frase principal al inicio, argumento, ejemplo y transición.",
    corto: "Tout d'abord, le vélo permet de faire des économies. · Par exemple, un abonnement coûte 40 euros par an. · Par ailleurs, il est bon pour la santé.",
    podras: ["Dedicar cada párrafo a una sola idea, anunciada en la frase principal al inicio.", "Desarrollarla con un argumento y un ejemplo (Par exemple, …).", "Enlazar los párrafos con transiciones (Tout d'abord, Par ailleurs, En outre) y marcarlos con un salto de línea y una sangría (alinéa)."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/engranaje"],
    previos: ["El párrafo argumentativo (B1.2, lección 35) y los conectores lógicos (lección 12)."],
    capacidad: "Ahora tus textos se leen con claridad, párrafo a párrafo."
  },
  requiere: R("b2pg-schema", "b2pg-conn", "b4cn-fonctions"), recupera: ["b2pg-schema"],
  conceptos: {
    "b4pg-structure": { n: "un párrafo = una idea; frase principal al inicio (anunciar la idea), argumento (justificar), ejemplo (ilustrar), transición (enlazar); salto de línea y sangría (faire un alinéa)", b: "gr" },
    "b4pg-liens": { n: "transiciones: Tout d'abord (en primer lugar), Par exemple, Par ailleurs (además, por otra parte), En outre; párrafos equilibrados; nada de un solo bloque, párrafos de una frase ni tres ideas mezcladas", b: "gr" }
  },
  video: {
    titulo: "Un párrafo, una idea", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "une idée", seg: [
        { es: "Hola. Un párrafo, una idea." } ] },
      { v: "frase", filas: [
          { nota: "frase principal", p: 1, partes: [["Tout d'abord, le vélo permet de faire des économies.", "-", 1]] },
          { nota: "ejemplo", p: 2, partes: [["Par exemple, un abonnement coûte 40 euros par an.", "-", 2]] },
          { nota: "transición", p: 3, partes: [["Par ailleurs, il est bon pour la santé.", "-", 3]] } ], seg: [
        { fr: "Tout d'abord, le vélo permet de faire des économies.", p: 1 }, { fr: "Par exemple, un abonnement coûte 40 euros par an.", p: 2 }, { fr: "Par ailleurs, il est bon pour la santé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántas ideas por párrafo?", o: ["una", "tres"], a: 0, es: true,
        bien: "¡Sí! Una sola idea.", mal: "Una idea por párrafo.",
        seg: [ { es: "Pausa. Una." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une idée", "phrase principale", "argument", "exemple", "Tout d'abord", "Par ailleurs"], seg: [
        { es: "Idea, argumento, ejemplo, transición.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El artículo sobre la bici", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia revisa la estructura de un artículo de Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, ton texte est un seul bloc, et ce paragraphe mélange trois idées : l'argent, la santé et l'environnement.", "Camila, tu texto es un solo bloque, y este párrafo mezcla tres ideas: el dinero, la salud y el medio ambiente."],
      ["camila", "Alors je fais trois paragraphes ? — Oui, un par idée, avec la phrase principale au début.", "¿Entonces hago tres párrafos? — Sí, uno por idea, con la frase principal al principio."],
      ["camila", "« Tout d'abord, le vélo est économique. Par exemple, il ne consomme pas d'essence. » Puis : « Par ailleurs, il est bon pour la santé. »", "«En primer lugar, la bici es económica. Por ejemplo, no consume gasolina.» Luego: «Además, es buena para la salud.»"],
      ["sofia", "Parfait. Et n'oublie pas de faire un alinéa au début de chaque paragraphe. Tout d'abord, le vélo est économique ; par ailleurs, il est bon pour la santé.", "Perfecto. Y no olvides hacer una sangría al principio de cada párrafo. En primer lugar, la bici es económica; además, es buena para la salud."]
    ],
    fijate: "Fíjate: un seul bloc y trois idées (lo que hay que evitar); un par idée, la phrase principale au début, Tout d'abord, Par exemple, Par ailleurs, faire un alinéa."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La estructura del párrafo",
      idea: "Un párrafo = una idea. 1. Frase principal al inicio, que anuncia la idea: Tout d'abord, le vélo est économique. 2. Argumento, que la justifica: il ne consomme pas d'essence. 3. Ejemplo, que la ilustra: Par exemple, un abonnement coûte 40 euros par an. 4. Transición hacia la siguiente idea: Par ailleurs, …; En outre, … Los párrafos se marcan con un salto de línea y, en el francés escolar, con una sangría (faire un alinéa). Deben estar equilibrados: ni un solo bloque, ni párrafos de una frase, ni varias ideas mezcladas.",
      intro: "Toca cada pieza.",
      tabla: [["Francés", "Español", "Pieza"], [
        ["une", "una idea por párrafo", "regla"],
        ["au début", "al inicio", "frase principal"],
        ["faire un alinéa", "una sangría al inicio del párrafo", "forma"],
        ["Par ailleurs, ce moyen de transport est rapide. · ailleurs", "Además, este medio de transporte es rápido.", "transición"],
        ["Tout d'abord, il faut définir le problème. · abord", "En primer lugar, hay que definir el problema.", "transición"],
        ["phrase principale = anunciar la idea · argument = justificar · exemple = ilustrar · transition = enlazar", "piezas", "resumen"],
        ["une idée par paragraphe · des connecteurs · des exemples précis · des paragraphes équilibrés", "una idea por párrafo · conectores · ejemplos precisos · párrafos equilibrados", "Sí"],
        ["un seul bloc de texte · des paragraphes d'une phrase · mélanger trois idées · aucun connecteur", "un solo bloque · párrafos de una frase · mezclar tres ideas · ningún conector", "No"],
        ["Tout d'abord, présentons le contexte.", "En primer lugar, presentemos el contexto.", "transición"],
        ["Tout d'abord, le vélo est économique. Par exemple, il ne consomme pas d'essence. Par ailleurs, il est bon pour la santé.", "En primer lugar, la bici es económica. Por ejemplo, no consume gasolina. Además, es buena para la salud.", "párrafo completo"]
      ]],
      ej: [["Tout d'abord, le vélo permet de faire des économies.", "En primer lugar, la bici permite ahorrar."], ["Par exemple, un abonnement coûte 40 euros par an.", "Por ejemplo, un abono cuesta 40 euros al año."], ["Par ailleurs, il est bon pour la santé.", "Además, es bueno para la salud."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Un párrafo con tres ideas mezcladas", "Tres párrafos, uno por idea", "Separar ideas."], ["Tout d'abort", "Tout d'abord", "Ortografía: abord."], ["La idea principal al final del párrafo", "La phrase principale au début", "Anunciar primero."]] }
  ],
  ejemplos: [
    { sit: "¿Cuántas ideas por párrafo?", resp: "une", pasos: ["Regla de oro."], porque: "Una idea." },
    { sit: "¿Dónde va la frase principal?", resp: "au début", pasos: ["Anuncia la idea."], porque: "Inicio." },
    { sit: "«faire un alinéa» es…", resp: "una sangría al inicio del párrafo", pasos: ["Forma."], porque: "Alinéa." }
  ],
  comprueba: [
    { q: "«Par ailleurs» sirve para…", o: ["añadir otra idea", "concluir"], a: 0, b: "gr", porque: "Transición." },
    { q: "El ejemplo sirve para…", o: ["ilustrar", "anunciar"], a: 0, b: "gr", porque: "Ilustrar." },
    { q: "Un texto de un solo bloque…", o: ["es un error", "es lo ideal"], a: 0, b: "gr", porque: "Párrafos." }
  ],
  practica: [
    { fase: "guiada", c: ["b4pg-structure", "b4pg-liens"], k: "sort", ask: "¿Sí o no en un buen texto?", q: "Clasifica.", cats: ["Sí", "No"], items: [["une idée par paragraphe", 0], ["des connecteurs", 0], ["des exemples précis", 0], ["des paragraphes équilibrés", 0], ["un seul bloc de texte", 1], ["des paragraphes d'une phrase", 1], ["mélanger trois idées", 1], ["aucun connecteur", 1]], pista: "¿Claro y ordenado?", why: "Estructura." },
    { fase: "guiada", c: ["b4pg-structure"], k: "choice", es: true, ask: "¿Cuántas ideas por párrafo?", q: "Elige.", o: ["una", "tres"], a: 0, pista: "Regla de oro.", why: "Una." },
    { fase: "guiada", c: ["b4pg-structure"], k: "choice", es: true, ask: "¿Dónde va la frase principal?", q: "Elige.", o: ["al inicio", "al final"], a: 0, pista: "Anuncia.", why: "Al inicio." },
    { fase: "indep", c: ["b4pg-structure"], k: "choice", es: true, ask: "«faire un alinéa» es…", q: "Elige.", o: ["una sangría al inicio del párrafo", "un punto final"], a: 0, why: "Sangría." },
    { fase: "indep", c: ["b4pg-liens"], k: "fill", ask: "«Además» (Par …)", q: "Par ___ , ce moyen de transport est rapide.", acc: ["ailleurs"], why: "<b>ailleurs</b>." },
    { fase: "indep", c: ["b4pg-liens"], k: "fill", ask: "«En primer lugar» (Tout d'…)", q: "Tout d'___ , il faut définir le problème.", acc: ["abord"], why: "<b>abord</b>." },
    { fase: "aplica", c: ["b4pg-structure"], k: "match", ask: "Une cada pieza con su función.", q: "Pieza → función", pairs: [["phrase principale", "anunciar la idea"], ["argument", "justificar"], ["exemple", "ilustrar"], ["transition", "enlazar"]], why: "Piezas." },
    { fase: "aplica", c: ["b4pg-liens"], k: "spot", ask: "Encuentra el error.", s: "Tout d'[abort] , présentons le contexte .", fix: "abord", why: "<b>abord</b>." },
    { fase: "aplica", c: ["b4pg-liens"], k: "choice", ask: "«Par ailleurs» sirve para…", q: "Elige.", o: ["añadir otra idea", "concluir"], a: 0, es: true, why: "Añadir." },
    { fase: "dominio", c: ["b4pg-structure", "b4pg-liens"], k: "order", ask: "Ordena el párrafo.", tokens: ["Tout d'abord, le vélo est économique.", "Par exemple, il ne consomme pas d'essence.", "Par ailleurs, il est bon pour la santé."], why: "<b>Tout d'abord… Par exemple… Par ailleurs…</b>" },
    { fase: "dominio", c: ["b4pg-structure"], k: "choice", ask: "Un texto de un solo bloque…", q: "Elige.", o: ["es un error", "es lo ideal"], a: 0, es: true, why: "Error." },
    { fase: "dominio", c: ["b4pg-structure", "b4pg-liens"], k: "listen", say: "Tout d'abord, le vélo est économique ; par ailleurs, il est bon pour la santé.", acc: ["Tout d'abord, le vélo est économique ; par ailleurs, il est bon pour la santé.", "Tout d'abord, le vélo est économique; par ailleurs, il est bon pour la santé.", "Tout d'abord, le vélo est économique, par ailleurs, il est bon pour la santé."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tout d'abord, le vélo est économique ; par ailleurs, il est bon pour la santé.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 56. Se relire : la check-list anti-fautes ── */
E["rem-relecture"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Se relire : la check-list anti-fautes",
  objetivo: {
    que: "Vas a releer tu texto con una lista de control antes de entregarlo: verbos, concordancias, homófonos, determinantes y calcos del español.",
    corto: "Je relis toujours mes accords. · J'ai vérifié les homophones. · Il reste deux fautes d'accent.",
    podras: ["Revisar primero los verbos (concordancia, tiempo, é / er) y las concordancias (adjetivos y participios).", "Revisar los homófonos (a / à, et / est, ce / se) y los determinantes (no omitir el artículo; pas de).", "Revisar las preposiciones calcadas del español, la puntuación y los acentos, reservando 5-10 minutos."],
    iconos: ["ic2/lapiz", "ic2/reloj-arena", "ic2/medalla"],
    previos: ["El participio pasado (lección 3), los verbos que rigen distinto (lección 27), é / er (lección 31) y los homófonos (lección 49)."],
    capacidad: "Ahora entregas textos limpios y sumas los puntos de la corrección."
  },
  requiere: R("b4pp-etre", "b4pa-negation", "b4rv-avec", "b4ee-er-e", "b4hb-verbes"), recupera: ["b4hb-verbes"],
  conceptos: {
    "b4rl2-liste": { n: "la lista de control: 1. verbos (concordancia, tiempo, é / er: nous avons mangé); 2. concordancias de adjetivos y participios (Elle est partie, Mes amies sont arrivées); 3. homófonos (a / à, et / est, ce / se, c'est / s'est); 4. determinantes (je mange du pain; Il n'a pas de voiture); 5. calcos (Je rêve de toi, no «avec»)", b: "gr" },
    "b4rl2-methode": { n: "método: reservar 5-10 minutos, empezar por lo que más cuesta (verbos y concordancias), releer varias veces con un objetivo distinto cada vez", b: "gr" }
  },
  video: {
    titulo: "Releer antes de entregar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "la check-list", seg: [
        { es: "Hola. Cinco minutos de relectura valen puntos." } ] },
      { v: "frase", filas: [
          { nota: "concordancias", p: 1, partes: [["Je relis toujours mes accords.", "-", 1]] },
          { nota: "homófonos", p: 2, partes: [["J'ai vérifié les homophones.", "-", 2]] },
          { nota: "acentos", p: 3, partes: [["Il reste deux fautes d'accent.", "-", 3]] } ], seg: [
        { fr: "Je relis toujours mes accords.", p: 1 }, { fr: "J'ai vérifié les homophones.", p: 2 }, { fr: "Il reste deux fautes d'accent.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué revisas primero?", o: ["verbos y concordancias", "la tipografía del título"], a: 0, es: true,
        bien: "¡Sí! Lo que más penaliza.", mal: "Primero verbos y concordancias.",
        seg: [ { es: "Pausa. Prioridades." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["accords", "é / er", "a / à", "pas de", "rêver de", "5-10 minutes"], seg: [
        { es: "Verbos, concordancias, homófonos, determinantes, calcos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los últimos minutos del examen", img: "bg-universidad", yo: "camila",
    escena: "Quedan diez minutos en el examen de práctica; Camila relee su texto.",
    pj: PJ,
    lineas: [
      ["camila", "Il me reste dix minutes. Je relis toujours ma copie : d'abord les verbes et les accords.", "Me quedan diez minutos. Siempre releo mi examen: primero los verbos y las concordancias."],
      ["camila", "« Mes amies sont arrivé en retard » : arrivées, féminin pluriel ! « Nous avons manger » : mangé, après avoir.", "«Mes amies sont arrivé en retard»: arrivées, ¡femenino plural! «Nous avons manger»: mangé, después de avoir."],
      ["camila", "Ensuite les homophones : « Il à faim » → il a faim. « S'est à toi » → c'est à toi. Et « Il n'a pas une voiture » → pas de voiture.", "Luego los homófonos: «Il à faim» → il a faim. «S'est à toi» → c'est à toi. Y «Il n'a pas une voiture» → pas de voiture."],
      ["sofia", "Très bien. Et les calques ? « Je rêve avec toi » → je rêve de toi. Avant de rendre ta copie, vérifie les accords et les homophones.", "Muy bien. ¿Y los calcos? «Je rêve avec toi» → je rêve de toi. Antes de entregar tu examen, revisa las concordancias y los homófonos."]
    ],
    fijate: "Fíjate: arrivées (concordancia), mangé (é tras avoir), il a (homófono), c'est (homófono), pas de voiture (determinante), je rêve de toi (calco)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La lista anti-faltas",
      idea: "Reserva 5-10 minutos y relee con una lista, un objetivo cada vez. 1. Verbos: concordancia sujeto-verbo, tiempo, é / er (Nous avons mangé, je vais manger). 2. Concordancias: femenino y plural de adjetivos y participios (Elle est partie; Mes amies sont arrivées). 3. Homófonos: a / à, et / est, son / sont, ce / se, c'est / s'est, ou / où. 4. Determinantes: no omitir el artículo (je mange du pain) y pas de tras negación (Il n'a pas de voiture). 5. Calcos del español: rêver de (no «avec»), entrer dans… 6. Puntuación, mayúsculas y acentos. Prioridad: verbos y concordancias, lo que más penaliza.",
      intro: "Toca cada punto.",
      tabla: [["Francés", "Español", "Punto"], [
        ["verbos y concordancias", "lo primero que se revisa", "prioridad"],
        ["Je rêve avec toi.", "Calco del español", "calco"],
        ["5-10 minutos", "tiempo de relectura", "método"],
        ["Elles sont parties hier. · parties", "Se fueron ayer.", "participio"],
        ["Il a faim. · a", "Tiene hambre.", "homófono"],
        ["il à = homófono · je vais mangé = é / er · les fille = concordancia · je mange pain = determinante", "tipos de falta", "resumen"],
        ["Elle est partie. · Nous avons mangé. · Il n'a pas de voiture. · C'est à toi.", "frases correctas", "Correcto"],
        ["Elle est parti. · Nous avons manger. · Il n'a pas une voiture. · S'est à toi.", "frases con falta", "Con falta"],
        ["Mes amies sont arrivées en retard à la soirée. · arrivées", "Mis amigas llegaron tarde a la fiesta.", "concordancia"],
        ["Je relis toujours ma copie", "Siempre releo mi examen", "método"],
        ["Avant de rendre ma copie, je vérifie les accords et les homophones.", "Antes de entregar mi examen, reviso las concordancias y los homófonos.", "método"]
      ]],
      ej: [["Je relis toujours mes accords.", "Siempre reviso mis concordancias."], ["J'ai vérifié les homophones.", "He comprobado los homófonos."], ["Il reste deux fautes d'accent.", "Quedan dos faltas de acento."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Entregar sin releer", "Reservar 5-10 minutos para releer", "La relectura sube la nota."], ["Releerlo todo de una vez, sin objetivo", "Una pasada por cada punto de la lista", "Más eficaz."], ["Mes amies sont arrivé.", "Mes amies sont arrivées.", "Concordancia con el sujeto."]] }
  ],
  ejemplos: [
    { sit: "¿Qué revisas primero?", resp: "verbos y concordancias", pasos: ["Lo que más penaliza."], porque: "Prioridad." },
    { sit: "Un calco del español:", resp: "Je rêve avec toi.", pasos: ["→ rêver de."], porque: "Calco." },
    { sit: "¿Cuánto tiempo reservar?", resp: "5-10 minutos", pasos: ["Al final."], porque: "Método." }
  ],
  comprueba: [
    { q: "«Il à faim» es una falta de…", o: ["homófono", "acento"], a: 0, b: "gr", porque: "a / à." },
    { q: "«Je mange pain» es una falta de…", o: ["determinante", "concordancia"], a: 0, b: "gr", porque: "du pain." },
    { q: "«Nous avons manger» es una falta de…", o: ["é / er", "puntuación"], a: 0, b: "gr", porque: "mangé." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rl2-liste"], k: "sort", ask: "¿Correcto o con falta?", q: "Clasifica.", cats: ["Correcto", "Con falta"], items: [["Elle est partie.", 0], ["Nous avons mangé.", 0], ["Il n'a pas de voiture.", 0], ["C'est à toi.", 0], ["Elle est parti.", 1], ["Nous avons manger.", 1], ["Il n'a pas une voiture.", 1], ["S'est à toi.", 1]], pista: "Aplica la lista.", why: "Faltas." },
    { fase: "guiada", c: ["b4rl2-methode"], k: "choice", es: true, ask: "¿Qué revisas primero?", q: "Elige.", o: ["verbos y concordancias", "la tipografía del título"], a: 0, pista: "Lo que más penaliza.", why: "Prioridad." },
    { fase: "guiada", c: ["b4rl2-liste"], k: "choice", ask: "¿Cuál es un calco del español?", q: "Elige.", o: ["Je rêve avec toi.", "Je rêve de toi."], a: 0, pista: "Soñar con.", why: "Calco." },
    { fase: "indep", c: ["b4rl2-methode"], k: "choice", es: true, ask: "¿Cuánto tiempo reservar para releer?", q: "Elige.", o: ["5-10 minutos", "30 segundos"], a: 0, why: "5-10 minutos." },
    { fase: "indep", c: ["b4rl2-liste"], k: "fill", ask: "Participio de partir (elles).", q: "Elles sont ___ hier.", acc: ["parties"], why: "<b>parties</b>." },
    { fase: "indep", c: ["b4rl2-liste"], k: "fill", ask: "a / à", q: "Il ___ faim.", acc: ["a"], why: "<b>a</b>." },
    { fase: "aplica", c: ["b4rl2-liste"], k: "match", ask: "Une cada falta con su tipo.", q: "Falta → tipo", pairs: [["il à", "homófono"], ["je vais mangé", "é / er"], ["les fille", "concordancia"], ["je mange pain", "determinante"]], why: "Tipos." },
    { fase: "aplica", c: ["b4rl2-liste"], k: "spot", ask: "Encuentra el error.", s: "Mes amies sont [arrivé] en retard à la soirée .", fix: "arrivées", why: "<b>arrivées</b>." },
    { fase: "aplica", c: ["b4rl2-liste"], k: "spot", ask: "Encuentra el error.", s: "Hier , nous avons [manger] au restaurant .", fix: "mangé", why: "<b>mangé</b>." },
    { fase: "dominio", c: ["b4rl2-methode"], k: "order", ask: "Ordena: «Siempre releo mi examen».", tokens: ["Je relis", "toujours", "ma copie"], why: "<b>Je relis toujours ma copie</b>" },
    { fase: "dominio", c: ["b4rl2-liste"], k: "choice", ask: "«Je mange pain» es una falta de…", q: "Elige.", o: ["determinante", "concordancia"], a: 0, es: true, why: "Determinante." },
    { fase: "dominio", c: ["b4rl2-liste", "b4rl2-methode"], k: "listen", say: "Avant de rendre ma copie, je vérifie les accords et les homophones.", acc: ["Avant de rendre ma copie, je vérifie les accords et les homophones."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Avant de rendre ma copie, je vérifie les accords et les homophones.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};


/* ================================ B2.2·7 · Pronunciación que se nota ================================ */

/* ── 57. Mots qui s'écrivent autrement qu'en espagnol ── */
E["rem-mots-ortho-espagnol"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Mots qui s'écrivent autrement qu'en espagnol",
  objetivo: {
    que: "Vas a escribir bien las palabras transparentes que cambian de grafía: ph, th, y griega, consonantes dobles y -age.",
    corto: "Voici un exemple de problème. · J'étudie la philosophie. · Le rythme de la musique est rapide.",
    podras: ["Escribir ph por f (photo, philosophie, téléphone) y th (théâtre, thème, méthode, mathématiques).", "Escribir la y griega de système, rythme, analyse, style y las dobles de littérature, possible.", "Recordar que las palabras en -age son masculinas (le message, le voyage) y que exemple y problème cambian respecto al español."],
    iconos: ["ic2/lapiz", "ic2/libros", "ic2/libro"],
    previos: ["El género de los nombres (lección 1), la ortografía (lección 14) y los falsos amigos (B1.2, lección 55)."],
    capacidad: "Ahora escribes las palabras cultas con su grafía francesa."
  },
  requiere: R("b2fa-mots", "b4gn-terminaisons", "b4or-mots"), recupera: ["b4or-mots"],
  conceptos: {
    "b4me-phth": { n: "ph = f (photo, philosophie, téléphone); th (théâtre, thème, méthode, mathématiques); y griega (système, rythme, analyse, style)", b: "gr" },
    "b4me-autres": { n: "otras diferencias: exemple (no ejemplo), problème, littérature (tt), possible, responsable (ss); -age masculino (le message, le voyage, le langage, le mariage); le système, le problème, le thème (masculinos)", b: "gr" }
  },
  video: {
    titulo: "Grafías francesas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "ph · th · y", seg: [
        { es: "Hola. Palabras que entiendes, pero que se escriben distinto." } ] },
      { v: "frase", filas: [
          { nota: "x · è", p: 1, partes: [["Voici un exemple de problème.", "-", 1]] },
          { nota: "ph", p: 2, partes: [["J'étudie la philosophie.", "-", 2]] },
          { nota: "y · th", p: 3, partes: [["Le rythme de la musique est rapide.", "-", 3]] } ], seg: [
        { fr: "Voici un exemple de problème.", p: 1 }, { fr: "J'étudie la philosophie.", p: 2 }, { fr: "Le rythme de la musique est rapide.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«el sistema»", o: ["le système", "la système"], a: 0,
        bien: "¡Sí! Masculino, con y.", mal: "Système es masculino: le système.",
        seg: [ { es: "Pausa. Grafía y género." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["exemple", "problème", "système", "théâtre", "philosophie", "rythme"], seg: [
        { es: "Ph, th, y griega, dobles y -age.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El trabajo de literatura", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo relee un trabajo de Camila sobre teatro.",
    pj: PJ,
    lineas: [
      ["hugo", "« Un ejemple de la sistema du teatro »… Camila, c'est de l'espagnol !", "«Un ejemple de la sistema du teatro»… ¡Camila, eso es español!"],
      ["camila", "Oups ! Un exemple, le système, le théâtre. Avec th et y.", "¡Uy! Un exemple, le système, le théâtre. Con th e y."],
      ["hugo", "Et « filosofía » ? — Philosophie, avec ph. Et littérature avec deux t, méthode avec th, analyse avec un y.", "¿Y «filosofía»? — Philosophie, con ph. Y littérature con dos t, méthode con th, analyse con y."],
      ["camila", "Et « le message » est masculin, comme tous les mots en -age. Ce thème philosophique pose un problème de méthode !", "Y «le message» es masculino, como todas las palabras en -age. ¡Este tema filosófico plantea un problema de método!"]
    ],
    fijate: "Fíjate: exemple, système, théâtre, philosophie, littérature, méthode, analyse, le message (-age masculino), thème, problème."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Grafías que cambian",
      idea: "ph = sonido f (de origen griego): photo, philosophie, téléphone, phrase. th: théâtre, thème, méthode, mathématiques, rythme. y griega: système, rythme, analyse, style. Dobles: littérature, possible, responsable, message. -age: masculino (le message, le voyage, le fromage, le langage, le mariage). Otras: exemple (con x), problème. Muchas de estas palabras son masculinas en francés: le système, le problème, le thème, le programme.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Grafía"], [
        ["exemple", "ejemplo", "x"],
        ["le système", "el sistema", "y"],
        ["théâtre", "teatro", "th"],
        ["le rythme", "el ritmo", "y · th"],
        ["la philosophie", "la filosofía", "ph"],
        ["méthode = método · analyse = análisis · message = mensaje · littérature = literatura", "equivalencias", "grafías"],
        ["photo · théâtre · méthode · téléphone", "foto · teatro · método · teléfono", "ph / th"],
        ["système · rythme · style · analyse", "sistema · ritmo · estilo · análisis", "y"],
        ["C'est un bon exemple de coopération internationale.", "Es un buen ejemplo de cooperación internacional.", "x"],
        ["le problème du système", "el problema del sistema", "è · y"],
        ["Ce thème philosophique pose un problème de méthode.", "Este tema filosófico plantea un problema de método.", "th · ph"]
      ]],
      ej: [["Voici un exemple de problème.", "Este es un ejemplo de problema."], ["J'étudie la philosophie.", "Estudio filosofía."], ["Le rythme de la musique est rapide.", "El ritmo de la música es rápido."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un ejemple, un problema, la sistema", "un exemple, un problème, le système", "Grafía y género franceses."], ["filosophie", "philosophie", "ph = f."], ["la message", "le message", "-age: masculino."]] }
  ],
  ejemplos: [
    { sit: "«ejemplo»", resp: "exemple", pasos: ["Con x."], porque: "Grafía." },
    { sit: "«el sistema»", resp: "le système", pasos: ["y y masculino."], porque: "Grafía." },
    { sit: "«teatro»", resp: "théâtre", pasos: ["th."], porque: "Grafía." }
  ],
  comprueba: [
    { q: "El sonido f de origen griego se escribe…", o: ["ph", "f"], a: 0, b: "gr", porque: "philosophie." },
    { q: "Las palabras en -age son…", o: ["masculinas", "femeninas"], a: 0, b: "gr", porque: "le message." },
    { q: "«Ritmo» se escribe…", o: ["rythme", "ritme"], a: 0, b: "gr", porque: "y · th." }
  ],
  practica: [
    { fase: "guiada", c: ["b4me-phth"], k: "sort", ask: "¿Lleva ph / th o y griega?", q: "Clasifica.", cats: ["ph / th", "y"], items: [["photo", 0], ["théâtre", 0], ["méthode", 0], ["téléphone", 0], ["système", 1], ["rythme", 1], ["style", 1], ["analyse", 1]], pista: "Mira la palabra.", why: "Grafías." },
    { fase: "guiada", c: ["b4me-autres"], k: "choice", ask: "«ejemplo»", q: "Elige.", o: ["exemple", "exemplo"], a: 0, pista: "Con x y e final.", why: "<b>exemple</b>." },
    { fase: "guiada", c: ["b4me-phth"], k: "choice", ask: "«el sistema»", q: "Elige.", o: ["le système", "la système"], a: 0, pista: "y, masculino.", why: "<b>le système</b>." },
    { fase: "indep", c: ["b4me-phth"], k: "choice", ask: "«teatro»", q: "Elige.", o: ["théâtre", "téatre"], a: 0, why: "<b>théâtre</b>." },
    { fase: "indep", c: ["b4me-phth"], k: "fill", ask: "«el ritmo»", q: "le ___", acc: ["rythme"], why: "<b>rythme</b>." },
    { fase: "indep", c: ["b4me-phth"], k: "fill", ask: "«la filosofía»", q: "la ___", acc: ["philosophie"], why: "<b>philosophie</b>." },
    { fase: "aplica", c: ["b4me-phth", "b4me-autres"], k: "match", ask: "Une cada palabra con su forma francesa.", q: "Español → francés", pairs: [["método", "méthode"], ["análisis", "analyse"], ["mensaje", "message"], ["literatura", "littérature"]], why: "Grafías." },
    { fase: "aplica", c: ["b4me-autres"], k: "spot", ask: "Encuentra el error.", s: "C'est un bon [exemplo] de coopération internationale .", fix: "exemple", why: "<b>exemple</b>." },
    { fase: "aplica", c: ["b4me-autres"], k: "spot", ask: "Encuentra el error.", s: "J'ai reçu [la] message de Paul hier soir .", fix: "le", why: "<b>le</b> message." },
    { fase: "dominio", c: ["b4me-autres"], k: "order", ask: "Ordena: «el problema del sistema».", tokens: ["le problème", "du", "système"], why: "<b>le problème du système</b>" },
    { fase: "dominio", c: ["b4me-autres"], k: "choice", ask: "Las palabras en -age son…", q: "Elige.", o: ["masculinas", "femeninas"], a: 0, es: true, why: "Masculinas." },
    { fase: "dominio", c: ["b4me-phth", "b4me-autres"], k: "listen", say: "Ce thème philosophique pose un problème de méthode.", acc: ["Ce thème philosophique pose un problème de méthode."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce thème philosophique pose un problème de méthode.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

/* ================================ B2.2·7 · Pronunciación que se nota ================================ */
/* ── 58. Distinguer [y] et [u] : dessus / dessous ── */
E["rem-u-ou"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Distinguer [y] et [u] : dessus / dessous",
  objetivo: {
    que: "Vas a distinguir la u francesa [y] (que no existe en español) de ou [u], porque confundirlas cambia el sentido.",
    corto: "Le livre est sur la table, pas dessous. · J'habite dans cette rue. · Tu as tout vu ?",
    podras: ["Pronunciar [y]: di i y redondea los labios (tu, rue, sûr, vu, salut, musique).", "Pronunciar [u] como la u española (tout, roue, sous, vous, bonjour).", "Distinguir los pares mínimos: dessus / dessous, rue / roue, pur / pour, vu / vous."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/nota"],
    previos: ["El sonido u de Primeros pasos y ou / oi (Fonética, lección 20)."],
    capacidad: "Ahora dices dessus y dessous sin que te malinterpreten."
  },
  requiere: R("so-u", "fou-ou"), recupera: ["so-u"],
  conceptos: {
    "b4uo-y": { n: "[y] = letra u: lengua en posición de i y labios redondeados (tu, rue, sûr, vu, salut, musique, bus); no existe en español", b: "gr" },
    "b4uo-u": { n: "[u] = ou, como la u española (tout, roue, sous, vous, pour, nous, soupe, bonjour, toujours); pares mínimos: dessus (encima) / dessous (debajo), rue (calle) / roue (rueda), pur / pour, vu / vous", b: "gr" }
  },
  video: {
    titulo: "U y ou", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "rue / roue", seg: [
        { es: "Hola. Di i y redondea los labios: esa es la u francesa." } ] },
      { v: "frase", filas: [
          { nota: "dessus / dessous", p: 1, partes: [["Le livre est sur la table, pas dessous.", "-", 1]] },
          { nota: "[y]", p: 2, partes: [["J'habite dans cette rue.", "-", 2]] },
          { nota: "[y] y [u]", p: 3, partes: [["Tu as tout vu ?", "-", 3]] } ], seg: [
        { fr: "Le livre est sur la table, pas dessous.", p: 1 }, { fr: "J'habite dans cette rue.", p: 2 }, { fr: "Tu as tout vu ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«dessous» significa…", o: ["debajo", "encima"], a: 0, es: true,
        bien: "¡Sí! Dessous [u] = debajo.", mal: "Dessous = debajo; dessus = encima.",
        seg: [ { es: "Pausa. Dessous." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["tu", "rue", "sûr", "tout", "roue", "dessous"], seg: [
        { es: "U francesa: i con labios redondos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La bici rota", img: "bg-paris", yo: "camila",
    escena: "La bici de Camila se rompe en la calle y llama a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai perdu une roue de mon vélo dans la rue ! — Une roue ou une rue ? Prononce bien !", "¡Perdí una rueda de mi bici en la calle! — ¿Una rueda o una calle? ¡Pronuncia bien!"],
      ["camila", "Une roue, [u]. Dans la rue, [y]. Tu as vu ? — Oui, j'ai tout vu.", "Una rueda, [u]. En la calle, [y]. ¿Lo viste? — Sí, lo vi todo."],
      ["hugo", "Tu es sûr que la clé n'est pas dessous ? — Non, elle est dessus, sur le panier.", "¿Seguro que la llave no está debajo? — No, está encima, en la cesta."],
      ["camila", "Je dis « Je suis sûre », pas « je suis sourde » ! Tu as vu la roue du bus dans la rue ?", "¡Digo «Estoy segura», no «estoy sorda»! ¿Viste la rueda del autobús en la calle?"]
    ],
    fijate: "Fíjate: roue [u] / rue [y], tu as vu [y] / tout [u], sûr [y] / sourd [u], dessous (debajo) / dessus (encima)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos sonidos, sentidos distintos",
      idea: "[y] se escribe u: pon la lengua como para decir i y redondea los labios como para u: tu, rue, sûr, vu, salut, musique, bus. No existe en español. [u] se escribe ou y suena como la u española: tout, roue, sous, vous, pour, nous, soupe, bonjour, toujours. Confundirlos cambia la palabra: dessus (encima) / dessous (debajo), rue (calle) / roue (rueda), pur (puro) / pour (para), vu (visto) / vous (usted), sûr (seguro) / sourd (sordo). eu / œu es otro sonido distinto (deux, peur).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Sonido"], [
        ["rue", "calle", "[y]"],
        ["dessous", "debajo", "[u]"],
        ["pour", "para", "[u]"],
        ["Il est sûr de lui. · û", "Está seguro de sí mismo.", "[y]"],
        ["J'ai perdu une roue de mon vélo. · ou", "Perdí una rueda de mi bici.", "[u]"],
        ["dessus = dessous · rue = roue · pur = pour · vu = vous", "pares mínimos", "[y] / [u]"],
        ["salut · musique · tu · bus", "hola · música · tú · autobús", "[y] (u)"],
        ["bonjour · nous · soupe · toujours", "hola · nosotros · sopa · siempre", "[u] (ou)"],
        ["Tu as vu la nouvelle voiture de Paul ? · vu", "¿Viste el coche nuevo de Paul?", "[y]"],
        ["Tu es sûr ?", "¿Estás seguro?", "[y]"],
        ["Tu as vu la roue du bus dans la rue ?", "¿Viste la rueda del autobús en la calle?", "[y] / [u]"]
      ]],
      ej: [["Le livre est sur la table, pas dessous.", "El libro está sobre la mesa, no debajo."], ["J'habite dans cette rue.", "Vivo en esta calle."], ["Tu as tout vu ?", "¿Lo has visto todo?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis sour (= sûr pronunciado [u])", "Je suis sûr [y]", "Con [u] se entiende otra palabra (sourd = sordo)."], ["Tu as vou ?", "Tu as vu ?", "Participio de voir: [y]."], ["la rue (por la rueda)", "la roue", "Rueda: [u]."]] }
  ],
  ejemplos: [
    { sit: "¿Qué palabra tiene el sonido [y]?", resp: "rue", pasos: ["Letra u."], porque: "[y]." },
    { sit: "«dessous» significa…", resp: "debajo", pasos: ["[u]."], porque: "Par mínimo." },
    { sit: "¿Qué palabra tiene el sonido [u]?", resp: "pour", pasos: ["ou."], porque: "[u]." }
  ],
  comprueba: [
    { q: "La letra u en francés suena…", o: ["[y]: i con labios redondos", "como la u española"], a: 0, b: "gr", porque: "[y]." },
    { q: "«ou» suena…", o: ["como la u española", "como la i"], a: 0, b: "gr", porque: "[u]." },
    { q: "«dessus» significa…", o: ["encima", "debajo"], a: 0, b: "gr", porque: "[y]." }
  ],
  practica: [
    { fase: "guiada", c: ["b4uo-y", "b4uo-u"], k: "sort", ask: "¿[y] (u) o [u] (ou)?", q: "Clasifica.", cats: ["[y] (u)", "[u] (ou)"], items: [["salut", 0], ["musique", 0], ["tu", 0], ["bus", 0], ["bonjour", 1], ["nous", 1], ["soupe", 1], ["toujours", 1]], pista: "¿Se escribe u u ou?", why: "Sonidos." },
    { fase: "guiada", c: ["b4uo-y"], k: "choice", es: true, say: "rue", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["la calle (rue)", "la rueda (roue)"], a: 0, pista: "Labios redondos, lengua de i.", why: "<b>rue</b> [y]." },
    { fase: "guiada", c: ["b4uo-u"], k: "choice", es: true, say: "dessous", ask: "Escucha. ¿Encima o debajo?", q: "Elige.", o: ["debajo (dessous)", "encima (dessus)"], a: 0, pista: "Como la u española.", why: "<b>dessous</b> [u]." },
    { fase: "indep", c: ["b4uo-u"], k: "choice", es: true, say: "pour", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["para (pour)", "puro (pur)"], a: 0, why: "<b>pour</b> [u]." },
    { fase: "indep", c: ["b4uo-y"], k: "fill", ask: "«seguro» (s_r).", q: "Il est s___r de lui.", acc: ["û"], why: "<b>sûr</b>." },
    { fase: "indep", c: ["b4uo-u"], k: "fill", ask: "«rueda» (r_e).", q: "J'ai perdu une r___e de mon vélo.", acc: ["ou"], why: "<b>roue</b>." },
    { fase: "aplica", c: ["b4uo-y", "b4uo-u"], k: "match", ask: "Une cada palabra con su pareja.", q: "[y] → [u]", pairs: [["dessus", "dessous"], ["rue", "roue"], ["pur", "pour"], ["vu", "vous"]], why: "Pares mínimos." },
    { fase: "aplica", c: ["b4uo-y"], k: "spot", ask: "Encuentra el error.", s: "Tu as [vou] la nouvelle voiture de Paul ?", fix: "vu", why: "<b>vu</b>." },
    { fase: "aplica", c: ["b4uo-y"], k: "choice", es: true, say: "Tu es sûr ?", ask: "Escucha. ¿Qué pregunta?", q: "Elige.", o: ["¿Estás seguro? (sûr)", "¿Estás sordo? (sourd)"], a: 0, why: "<b>sûr</b> [y]." },
    { fase: "dominio", c: ["b4uo-y"], k: "order", ask: "Ordena: «¿Estás seguro?»", tokens: ["Tu", "es", "sûr ?"], why: "<b>Tu es sûr ?</b>" },
    { fase: "dominio", c: ["b4uo-y"], k: "choice", ask: "La letra u en francés suena…", q: "Elige.", o: ["[y]: i con labios redondos", "como la u española"], a: 0, es: true, why: "[y]." },
    { fase: "dominio", c: ["b4uo-y", "b4uo-u"], k: "listen", say: "Tu as vu la roue du bus dans la rue ?", acc: ["Tu as vu la roue du bus dans la rue ?", "Tu as vu la roue du bus dans la rue?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu as vu la roue du bus dans la rue ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

/* ── 59. Les voyelles nasales : an, on, in ── */
E["rem-nasales"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les voyelles nasales : an, on, in",
  objetivo: {
    que: "Vas a pronunciar las vocales nasales sin decir la n, y a reconocer cuándo dejan de ser nasales.",
    corto: "Un bon vin blanc. · Mon enfant a cinq ans. · C'est une bonne année.",
    podras: ["Pronunciar [ɑ̃] (an, am, en, em: enfant, temps, chambre), [ɔ̃] (on, om: bon, nom, maison) y [ɛ̃] (in, im, ain, ein, un: vin, pain, plein).", "Hacer salir el aire por la nariz sin pronunciar la n como consonante.", "Desnasalizar delante de vocal o de doble n: bon → bonne, fin → fine, américain → américaine."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/croissant"],
    previos: ["Las vocales nasales (Fonética, lección 3), an, on, in (Fonética, lección 9) y la desnasalización (Fonética, lección 24)."],
    capacidad: "Ahora tus nasales suenan francesas y no españolas."
  },
  requiere: R("fn-nasal", "fna-grafias", "fdn-regle"), recupera: ["fn-nasal"],
  conceptos: {
    "b4na-trois": { n: "[ɑ̃] an, am, en, em (enfant, temps, chambre, plan); [ɔ̃] on, om (bon, nom, maison, long, bonbon); [ɛ̃] in, im, ain, ein, un (vin, pain, plein, jardin, brun); la n no suena: el aire sale por la nariz", b: "gr" },
    "b4na-denasal": { n: "deja de ser nasal si sigue una vocal o una doble n / m: bon → bonne, fin → fine, brun → brune, plan → plane, vin → vinaigre, américain → américaine, an → année", b: "gr" }
  },
  video: {
    titulo: "Las nasales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "un bon vin blanc", seg: [
        { es: "Hola. La n no se pronuncia: el aire sale por la nariz." } ] },
      { v: "frase", filas: [
          { nota: "[ɔ̃] [ɛ̃] [ɑ̃]", p: 1, partes: [["Un bon vin blanc.", "-", 1]] },
          { nota: "[ɑ̃]", p: 2, partes: [["Mon enfant a cinq ans.", "-", 2]] },
          { nota: "sin nasal", p: 3, partes: [["C'est une bonne année.", "-", 3]] } ], seg: [
        { fr: "Un bon vin blanc.", p: 1 }, { fr: "Mon enfant a cinq ans.", p: 2 }, { fr: "C'est une bonne année.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué palabra NO es nasal?", o: ["bonne", "bon"], a: 0,
        bien: "¡Sí! Doble n: no nasal.", mal: "Con nn: no nasal.",
        seg: [ { es: "Pausa. ¿Vocal o nn detrás?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["enfant", "bon", "vin", "pain", "bonne", "américaine"], seg: [
        { es: "Tres nasales y su desnasalización.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la panadería", img: "bg-cafe", yo: "camila",
    escena: "Camila practica las nasales mientras hace la compra con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je voudrais du pain et un bon vin blanc. — Tu dis « bon » avec un n espagnol : on dit [bɔ̃], sans n !", "Quisiera pan y un buen vino blanco. — Dices «bon» con n española: se dice [bɔ̃], ¡sin n!"],
      ["camila", "D'accord : bon, vin, pain, blanc. L'air passe par le nez. Mon enfant… non, mon neveu a cinq ans.", "Vale: bon, vin, pain, blanc. El aire pasa por la nariz. Mi hijo… no, mi sobrino tiene cinco años."],
      ["hugo", "Et attention : bonne, ce n'est plus nasal. Bon → bonne, américain → américaine.", "Y ojo: bonne ya no es nasal. Bon → bonne, américain → américaine."],
      ["camila", "C'est une très bonne idée ! Mon enfant mange du pain blanc et un bonbon.", "¡Es una idea muy buena! Mi hijo come pan blanco y un caramelo."]
    ],
    fijate: "Fíjate: bon, vin, pain, blanc, enfant, cinq, bonbon (nasales, sin n); bonne, américaine, année (sin nasal: vocal o nn detrás)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres nasales",
      idea: "[ɑ̃]: an, am, en, em (enfant, temps, chambre, plan). [ɔ̃]: on, om (bon, nom, maison, long, bonbon). [ɛ̃]: in, im, ain, ein, un (vin, pain, plein, jardin, brun, cinq). La n (o m) no se pronuncia como consonante: solo indica que el aire sale por la nariz. Desnasalización: si después viene una vocal o una doble n / m, la vocal deja de ser nasal y la n suena: bon → bonne, fin → fine, brun → brune, plan → plane, vin → vinaigre, américain → américaine, an → année.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Pronunciación", "Tipo"], [
        ["maison", "nasal [ɔ̃]", "[ɔ̃]"],
        ["bonne", "sin nasal", "nn"],
        ["pain", "nasal [ɛ̃]", "[ɛ̃]"],
        ["américain → américaine · aine", "nasal → sin nasal", "desnasalización"],
        ["Il fait beau temps aujourd'hui. · em", "Hace buen tiempo hoy.", "[ɑ̃]"],
        ["enfant = [ɑ̃] · bonbon = [ɔ̃] · jardin = [ɛ̃] · chambre = [ɑ̃] (am)", "ejemplos", "nasales"],
        ["vin · plan · long · brun", "vino · plan · largo · moreno", "Nasal"],
        ["vinaigre · plane · bonne · brune", "vinagre · plana · buena · morena", "No nasal"],
        ["C'est une très bonne idée !", "¡Es una muy buena idea!", "sin nasal"],
        ["un bon vin blanc", "un buen vino blanco", "nasales"],
        ["Mon enfant mange du pain blanc et un bonbon.", "Mi hijo come pan blanco y un caramelo.", "nasales"]
      ]],
      ej: [["Un bon vin blanc.", "Un buen vino blanco."], ["Mon enfant a cinq ans.", "Mi hijo tiene cinco años."], ["C'est une bonne année.", "Es un buen año."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["[bon] con n española", "[bɔ̃] nasal, sin n", "La n solo nasaliza."], ["une bone idée", "une bonne idée", "Femenino: nn."], ["américaine nasal", "américaine sin nasal", "Vocal detrás: se desnasaliza."]] }
  ],
  ejemplos: [
    { sit: "¿Qué palabra tiene [ɔ̃]?", resp: "maison", pasos: ["on."], porque: "Nasal." },
    { sit: "¿Qué palabra no es nasal?", resp: "bonne", pasos: ["nn."], porque: "Desnasalización." },
    { sit: "¿Qué palabra tiene [ɛ̃]?", resp: "pain", pasos: ["ain."], porque: "Nasal." }
  ],
  comprueba: [
    { q: "En una vocal nasal, la n…", o: ["no se pronuncia", "se pronuncia fuerte"], a: 0, b: "gr", porque: "Nariz." },
    { q: "«Bonne» es…", o: ["no nasal", "nasal"], a: 0, b: "gr", porque: "nn." },
    { q: "«ain» en pain suena…", o: ["[ɛ̃]", "[ɑ̃]"], a: 0, b: "gr", porque: "in / ain." }
  ],
  practica: [
    { fase: "guiada", c: ["b4na-trois", "b4na-denasal"], k: "sort", ask: "¿Nasal o no nasal?", q: "Clasifica.", cats: ["Nasal", "No nasal"], items: [["vin", 0], ["plan", 0], ["long", 0], ["brun", 0], ["vinaigre", 1], ["plane", 1], ["bonne", 1], ["brune", 1]], pista: "¿Hay vocal o nn después?", why: "Nasal o no." },
    { fase: "guiada", c: ["b4na-trois"], k: "choice", es: true, say: "maison", ask: "Escucha. ¿Qué nasal tiene «maison»?", q: "Elige.", o: ["la de bon (on)", "la de vin (in)"], a: 0, pista: "on.", why: "[ɔ̃]." },
    { fase: "guiada", c: ["b4na-denasal"], k: "choice", ask: "¿Qué palabra NO es nasal?", q: "Elige.", o: ["bonne", "bon"], a: 0, pista: "nn.", why: "<b>bonne</b>." },
    { fase: "indep", c: ["b4na-trois"], k: "choice", es: true, say: "pain", ask: "Escucha. ¿Qué nasal tiene «pain»?", q: "Elige.", o: ["la de vin (in)", "la de blanc (an)"], a: 0, why: "[ɛ̃]." },
    { fase: "indep", c: ["b4na-denasal"], k: "fill", ask: "Femenino de américain.", q: "américain → améric___", acc: ["aine"], why: "<b>américaine</b>." },
    { fase: "indep", c: ["b4na-trois"], k: "fill", ask: "«tiempo» (t__ps).", q: "Il fait beau t___ps aujourd'hui.", acc: ["em"], why: "<b>temps</b>." },
    { fase: "aplica", c: ["b4na-trois"], k: "match", ask: "Une cada palabra con su nasal.", q: "Palabra → nasal", pairs: [["enfant", "[ɑ̃]"], ["bonbon", "[ɔ̃]"], ["jardin", "[ɛ̃]"], ["chambre", "[ɑ̃] (am)"]], why: "Nasales." },
    { fase: "aplica", c: ["b4na-denasal"], k: "spot", ask: "Encuentra el error.", s: "C'est une très [bone] idée !", fix: "bonne", why: "<b>bonne</b>." },
    { fase: "aplica", c: ["b4na-trois"], k: "choice", ask: "En una vocal nasal, la n…", q: "Elige.", o: ["no se pronuncia", "se pronuncia fuerte"], a: 0, es: true, why: "No suena." },
    { fase: "dominio", c: ["b4na-trois"], k: "order", ask: "Ordena: «un buen vino blanco».", tokens: ["un bon", "vin", "blanc"], why: "<b>un bon vin blanc</b>" },
    { fase: "dominio", c: ["b4na-denasal"], k: "choice", ask: "«Bonne» es…", q: "Elige.", o: ["no nasal", "nasal"], a: 0, es: true, why: "No nasal." },
    { fase: "dominio", c: ["b4na-trois", "b4na-denasal"], k: "listen", say: "Mon enfant mange du pain blanc et un bonbon.", acc: ["Mon enfant mange du pain blanc et un bonbon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon enfant mange du pain blanc et un bonbon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 60. Le e muet : quand il tombe ── */
E["rem-e-muet"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le e muet : quand il tombe",
  objetivo: {
    que: "Vas a dejar caer la e muda donde los franceses la dejan caer, para hablar con un ritmo natural y no lento.",
    corto: "Samedi, je vais au marché. · Je ne sais pas. · Maintenant, on peut partir.",
    podras: ["No pronunciar la e final (table, rose, porte, vivre).", "Dejar caer la e dentro de la palabra tras una sola consonante: sam(e)di, p(e)tit, maint(e)nant, ach(e)ter, méd(e)cin.", "Mantenerla si caerían tres consonantes (vendredi, appartement, gouvernement) y alternar en je ne, je te: j(e) n(e) sais pas."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/reloj-arena"],
    previos: ["La e caduca (Fonética, lección 10) y la e muda en el oral (Fonética, lección 46)."],
    capacidad: "Ahora hablas con el ritmo de un francés, sin pronunciar cada e."
  },
  requiere: R("fec-final", "fec-chute", "fem-chute"), recupera: ["fec-chute"],
  conceptos: {
    "b4em-tombe": { n: "la e muda cae: al final de palabra (table, rose, porte); dentro de la palabra tras una sola consonante: samedi [samdi] (dos sílabas), petit [pti], maintenant, acheter, médecin, mademoiselle, tout de suite; en el habla, Je ne sais pas → j(e) n(e) sais pas", b: "gr" },
    "b4em-reste": { n: "la e se mantiene si al caer se juntarían tres consonantes: vendredi, appartement, gouvernement, exactement; en la escritura la e siempre se escribe (samedi, no «samdi»)", b: "gr" }
  },
  video: {
    titulo: "La e que cae", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "sam(e)di", seg: [
        { es: "Hola. Pronunciar cada e suena extranjero y lento." } ] },
      { v: "frase", filas: [
          { nota: "sam(e)di", p: 1, partes: [["Samedi, je vais au marché.", "-", 1]] },
          { nota: "j(e) n(e)", p: 2, partes: [["Je ne sais pas.", "-", 2]] },
          { nota: "maint(e)nant", p: 3, partes: [["Maintenant, on peut partir.", "-", 3]] } ], seg: [
        { fr: "Samedi, je vais au marché.", p: 1 }, { fr: "Je ne sais pas.", p: 2 }, { fr: "Maintenant, on peut partir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántas sílabas tiene «samedi» al hablar?", o: ["2", "3"], a: 0,
        bien: "¡Sí! Sam-di.", mal: "La e cae: sam-di.",
        seg: [ { es: "Pausa. Sam-di." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sam(e)di", "p(e)tit", "maint(e)nant", "vendredi", "je n(e) sais pas"], seg: [
        { es: "Cae tras una consonante; se queda entre tres.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mercado del sábado", img: "bg-paris", yo: "camila",
    escena: "Camila practica la pronunciación con Hugo camino del mercado.",
    pj: PJ,
    lineas: [
      ["camila", "Sa-me-di, je-vais-a-che-ter un pe-tit ca-deau…", "Sá-ba-do, voy-a-com-prar-un-pe-que-ño-re-ga-lo…"],
      ["hugo", "Trop lent ! On dit « samdi », « achter », « un ptit cadeau ». Le e tombe.", "¡Demasiado lento! Se dice «samdi», «achter», «un ptit cadeau». La e cae."],
      ["camila", "Et « vendredi » ? — Là, non : « vendr-di » serait impossible, trois consonnes. Et « appartement » aussi.", "¿Y «vendredi»? — Ahí no: «vendr-di» sería imposible, tres consonantes. Y «appartement» también."],
      ["hugo", "Exactement. Et « je ne sais pas », on dit souvent « j'sais pas ». Mais à l'écrit, on écrit toujours samedi ! Samedi, je vais acheter un petit cadeau.", "Exacto. Y «je ne sais pas» se dice a menudo «j'sais pas». ¡Pero por escrito siempre se escribe samedi! El sábado voy a comprar un pequeño regalo."]
    ],
    fijate: "Fíjate: samedi → «samdi», acheter → «achter», petit → «ptit» (la e cae); vendredi, appartement (se mantiene: tres consonantes); je ne sais pas → «j'sais pas» (oral familiar); por escrito, la e siempre se escribe."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuándo cae la e",
      idea: "La e sin acento [ə] (e caduc) cae a menudo al hablar. Al final de palabra casi nunca se pronuncia: table, rose, porte, vivre. Dentro de la palabra cae tras una sola consonante: sam(e)di [samdi], p(e)tit [pti], maint(e)nant, ach(e)ter, méd(e)cin, made-moiselle [madmwazɛl], tout d(e) suite. Se mantiene si al caer se juntarían tres consonantes: vendredi, appartement, gouvernement, exactement. En las cadenas je ne, je te, ce que cae una de cada dos: j(e) n(e) sais pas, y en lo familiar [ʃɛpa]. Por escrito, la e siempre se escribe.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Pronunciación", "Regla"], [
        ["samedi", "2 sílabas: [samdi]", "cae"],
        ["rose", "la e final no suena", "final"],
        ["je ne sais pas", "[ʃɛpa] en lo familiar", "cadena"],
        ["maintenant · te", "[mɛ̃tnɑ̃]", "cae"],
        ["acheter · e", "[aʃte]", "cae"],
        ["samedi = [samdi] · petit = [pti] · mademoiselle = [madmwazɛl] · tout de suite = [tutswit]", "pronunciaciones", "cae"],
        ["sam(e)di · p(e)tit · maint(e)nant · méd(e)cin", "sábado · pequeño · ahora · médico", "Cae"],
        ["vendr(e)di · appart(e)ment · gouvern(e)ment · exact(e)ment", "viernes · piso · gobierno · exactamente", "Se mantiene"],
        ["Je te vois samedi au marché. · samedi", "Te veo el sábado en el mercado.", "escritura"],
        ["Je ne sais pas", "No sé", "cadena"],
        ["Samedi, je vais acheter un petit cadeau.", "El sábado voy a comprar un pequeño regalo.", "cae"]
      ]],
      ej: [["Samedi, je vais au marché.", "El sábado voy al mercado."], ["Je ne sais pas.", "No sé."], ["Maintenant, on peut partir.", "Ahora podemos irnos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["sa-me-di (tres sílabas)", "sam-di (dos sílabas)", "La e cae."], ["Escribir «samdi»", "Escribir samedi", "Al escribir, la e siempre aparece."], ["vendr-di", "vendredi (se mantiene)", "Tres consonantes: no cae."]] }
  ],
  ejemplos: [
    { sit: "¿Cuántas sílabas tiene «samedi» al hablar?", resp: "2", pasos: ["sam-di."], porque: "La e cae." },
    { sit: "¿Se pronuncia la e final de «rose»?", resp: "no", pasos: ["Final de palabra."], porque: "Muda." },
    { sit: "«Je ne sais pas» en lo familiar:", resp: "[ʃɛpa]", pasos: ["Caen las e."], porque: "Cadena." }
  ],
  comprueba: [
    { q: "La e final de «table»…", o: ["no se pronuncia", "se pronuncia"], a: 0, b: "gr", porque: "Final." },
    { q: "En «vendredi» la e…", o: ["se mantiene", "cae"], a: 0, b: "gr", porque: "Tres consonantes." },
    { q: "Al escribir, la e muda…", o: ["se escribe siempre", "se quita"], a: 0, b: "gr", porque: "samedi." }
  ],
  practica: [
    { fase: "guiada", c: ["b4em-tombe", "b4em-reste"], k: "sort", ask: "¿La e cae o se mantiene?", q: "Clasifica.", cats: ["Cae", "Se mantiene"], items: [["sam(e)di", 0], ["p(e)tit", 0], ["maint(e)nant", 0], ["méd(e)cin", 0], ["vendr(e)di", 1], ["appart(e)ment", 1], ["gouvern(e)ment", 1], ["exact(e)ment", 1]], pista: "¿Se juntarían tres consonantes?", why: "Regla." },
    { fase: "guiada", c: ["b4em-tombe"], k: "choice", ask: "¿Cuántas sílabas tiene «samedi» al hablar?", q: "Elige.", o: ["2", "3"], a: 0, pista: "sam-di.", why: "<b>2</b>." },
    { fase: "guiada", c: ["b4em-tombe"], k: "choice", es: true, say: "rose", ask: "Escucha. ¿Se pronuncia la e final?", q: "Elige.", o: ["no", "sí"], a: 0, pista: "Final.", why: "No." },
    { fase: "indep", c: ["b4em-tombe"], k: "choice", es: true, say: "Je ne sais pas.", ask: "Escucha. En lo familiar, «je ne sais pas» suena…", q: "Elige.", o: ["casi «chépa»: caen las e", "je-ne-sais-pas, sílaba por sílaba"], a: 0, why: "Caen." },
    { fase: "indep", c: ["b4em-tombe"], k: "fill", ask: "Escribe la sílaba que falta (maintenant).", q: "main___nant", acc: ["te"], why: "<b>maintenant</b>: se escribe aunque no suene." },
    { fase: "indep", c: ["b4em-tombe"], k: "fill", ask: "Escribe la letra que falta (acheter).", q: "ach___ter", acc: ["e"], why: "<b>acheter</b>." },
    { fase: "aplica", c: ["b4em-tombe"], k: "match", ask: "Une cada palabra con su pronunciación.", q: "Palabra → pronunciación", pairs: [["samedi", "[samdi]"], ["petit", "[pti]"], ["mademoiselle", "[madmwazɛl]"], ["tout de suite", "[tutswit]"]], why: "Pronunciación." },
    { fase: "aplica", c: ["b4em-reste"], k: "spot", ask: "Encuentra el error de escritura.", s: "Je te vois [samdi] au marché .", fix: "samedi", why: "Se escribe <b>samedi</b>." },
    { fase: "aplica", c: ["b4em-reste"], k: "choice", es: true, ask: "En «vendredi» la e…", q: "Elige.", o: ["se mantiene", "cae"], a: 0, why: "Tres consonantes." },
    { fase: "dominio", c: ["b4em-tombe"], k: "order", ask: "Ordena: «No sé».", tokens: ["Je", "ne sais", "pas"], why: "<b>Je ne sais pas</b>" },
    { fase: "dominio", c: ["b4em-reste"], k: "choice", ask: "Al escribir, la e muda…", q: "Elige.", o: ["se escribe siempre", "se quita"], a: 0, es: true, why: "Se escribe." },
    { fase: "dominio", c: ["b4em-tombe", "b4em-reste"], k: "listen", say: "Samedi, je vais acheter un petit cadeau.", acc: ["Samedi, je vais acheter un petit cadeau."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Samedi, je vais acheter un petit cadeau.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 61. Les liaisons obligatoires et interdites ── */
E["rem-liaisons"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les liaisons obligatoires et interdites",
  objetivo: {
    que: "Vas a dominar la liaison: cuándo es obligatoria, cuándo está prohibida y cuándo es opcional.",
    corto: "Les‿enfants sont‿arrivés. · Ils‿ont‿un grand‿appartement. · Les / héros (sin liaison).",
    podras: ["Hacer las obligatorias: determinante + nombre (les‿enfants), pronombre + verbo (nous‿avons), tras monosílabos (chez‿eux, très‿important) y en expresiones fijas (tout‿à fait).", "Evitar las prohibidas: tras et, delante de h aspirada (les / héros, les / haricots) y tras un nombre singular.", "Pronunciar bien el sonido: s, x, z → [z]; d → [t] (grand‿homme); y saber que tras los verbos es opcional (je suis‿allé)."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/engranaje"],
    previos: ["Letras mudas y liaisons (lección 20), la liaison obligatoria (Fonética, lección 41), la prohibida (Fonética, lección 42) y la h (Fonética, lección 25)."],
    capacidad: "Ahora enlazas las palabras como un francés, sin errores que se notan."
  },
  requiere: R("flo-cas", "flo-son", "fli-et", "fli-autres", "fhh-aspire", "b4ph-liaisons"), recupera: ["b4ph-liaisons"],
  conceptos: {
    "b4li2-oblig": { n: "obligatoria: determinante + nombre (les‿amis [lezami], des‿arbres), pronombre + verbo (nous‿avons, ils‿ont [ilzɔ̃], vous‿êtes), tras monosílabos (chez‿elle, très‿utile), expresiones fijas (tout‿à fait); sonidos: s, x, z → [z]; d → [t] (un grand‿homme [ɡʁɑ̃tɔm]); n → [n]", b: "gr" },
    "b4li2-interdit": { n: "prohibida: tras et (et / il, et / après), delante de h aspirada (les / héros, les / haricots, les / hiboux, les / hauts), tras un nombre singular (un chat / énorme, Paul / arrive); opcional: tras los verbos (je suis‿allé), registro cuidado", b: "gr" }
  },
  video: {
    titulo: "La liaison", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "les‿enfants", seg: [
        { es: "Hola. Unas liaisons son obligatorias; otras, prohibidas." } ] },
      { v: "frase", filas: [
          { nota: "obligatoria", p: 1, partes: [["Les enfants sont arrivés.", "-", 1]] },
          { nota: "[z] y [t]", p: 2, partes: [["Ils ont un grand appartement.", "-", 2]] },
          { nota: "prohibida (h aspirada)", p: 3, partes: [["les héros", "-", 3]] } ], seg: [
        { fr: "Les enfants sont arrivés.", p: 1 }, { fr: "Ils ont un grand appartement.", p: 2 }, { fr: "les héros", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«et il part»: ¿liaison después de et?", o: ["no, nunca tras «et»", "sí, siempre"], a: 0, es: true,
        bien: "¡Sí! Nunca tras et.", mal: "Tras et: nunca liaison.",
        seg: [ { es: "Pausa. Et: nunca." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les‿amis", "nous‿avons", "grand‿homme [t]", "et / il", "les / héros"], seg: [
        { es: "Obligatoria, prohibida, opcional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La visita a la familia de Hugo", img: "bg-paris", yo: "camila",
    escena: "Camila conoce a la familia de Hugo y cuida su pronunciación.",
    pj: PJ,
    lineas: [
      ["hugo", "Mes cousins ont deux enfants. Les‿enfants et leurs‿amis sont‿arrivés chez‿eux hier.", "Mis primos tienen dos hijos. Los niños y sus amigos llegaron a su casa ayer."],
      ["camila", "J'ai dit « les z-haricots » au marché… — Non ! Haricot a un h aspiré : les / haricots, sans liaison. Comme les / héros.", "Dije «les z-haricots» en el mercado… — ¡No! Haricot tiene h aspirada: les / haricots, sin liaison. Como les / héros."],
      ["hugo", "Et après « et », jamais : « et / il part ». Mais « un grand homme », avec un [t] : grand‿homme.", "Y después de «et», nunca: «et / il part». Pero «un grand homme», con [t]: grand‿homme."],
      ["camila", "Tout‿à fait ! Ils‿ont deux‿enfants, et ils‿ont‿un grand‿appartement.", "¡Totalmente! Tienen dos hijos y tienen un piso grande."]
    ],
    fijate: "Fíjate: les‿enfants, leurs‿amis, sont‿arrivés, chez‿eux, ils‿ont, deux‿enfants, tout‿à fait, grand‿homme [t] (obligatorias); les / haricots, les / héros, et / il (prohibidas)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obligatoria, prohibida, opcional",
      idea: "La liaison pronuncia una consonante final muda delante de vocal o h muda. Obligatoria: determinante + nombre (les‿amis [lezami], des‿arbres, un‿ami), pronombre + verbo (nous‿avons, ils‿ont [ilzɔ̃], vous‿êtes), tras monosílabos (chez‿elle, très‿utile) y en expresiones fijas (tout‿à fait). Prohibida: tras et (et / il part), delante de h aspirada (les / héros, les / haricots, les / hiboux) y tras un nombre singular (un chat / énorme, Paul / arrive). Opcional: tras los verbos (je suis‿allé), en registro cuidado. Sonidos: s, x, z → [z]; d → [t] (un grand‿homme [ɡʁɑ̃tɔm]); n → [n].",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Liaison", "Tipo"], [
        ["les amis", "sí: [lezami]", "obligatoria"],
        ["et il part", "no, nunca tras «et»", "prohibida"],
        ["les héros", "no (h aspirada)", "prohibida"],
        ["ils ont · z", "[ilzɔ̃]", "obligatoria [z]"],
        ["un grand homme · t", "[ɡʁɑ̃tɔm]", "d → [t]"],
        ["nous avons = obligatorio · et elle = prohibido · les hiboux = prohibido (h aspirada) · je suis allé = opcional", "casos", "resumen"],
        ["des‿arbres · vous‿êtes · très‿utile · chez‿elle", "con liaison", "Obligatorio"],
        ["et / après · les / hauts · un chat / énorme · Paul / arrive", "sin liaison", "Prohibido"],
        ["Au marché, j'ai acheté des haricots verts. · haricots", "En el mercado compré judías verdes.", "h aspirada"],
        ["Ils ont deux enfants", "Tienen dos hijos", "obligatorias"],
        ["Les enfants et leurs amis sont arrivés chez eux.", "Los niños y sus amigos llegaron a su casa.", "obligatorias"]
      ]],
      ej: [["Les enfants sont arrivés.", "Los niños han llegado."], ["Ils ont un grand appartement.", "Tienen un piso grande."], ["les héros (sin liaison)", "Sin enlace delante de h aspirada."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les‿haricots [lezariko]", "les / haricots [leariko]", "Haricot tiene h aspirada."], ["et‿il part", "et / il part", "Nunca tras et."], ["un grand‿homme con [d]", "un grand‿homme con [t]", "d → [t]."]] }
  ],
  ejemplos: [
    { sit: "«les amis»: ¿liaison?", resp: "sí: [lezami]", pasos: ["Determinante + nombre."], porque: "Obligatoria." },
    { sit: "«et il part»: ¿liaison?", resp: "no, nunca tras «et»", pasos: ["Tras et."], porque: "Prohibida." },
    { sit: "«les héros»: ¿liaison?", resp: "no (h aspirada)", pasos: ["h aspirada."], porque: "Prohibida." }
  ],
  comprueba: [
    { q: "Entre determinante y nombre la liaison es…", o: ["obligatoria", "prohibida"], a: 0, b: "gr", porque: "les‿amis." },
    { q: "Después de «et» la liaison es…", o: ["prohibida", "obligatoria"], a: 0, b: "gr", porque: "Regla." },
    { q: "En «grand‿homme» la d suena…", o: ["[t]", "[d]"], a: 0, b: "gr", porque: "d → [t]." }
  ],
  practica: [
    { fase: "guiada", c: ["b4li2-oblig", "b4li2-interdit"], k: "sort", ask: "¿Liaison obligatoria o prohibida?", q: "Clasifica.", cats: ["Obligatorio", "Prohibido"], items: [["des‿arbres", 0], ["vous‿êtes", 0], ["très‿utile", 0], ["chez‿elle", 0], ["et / après", 1], ["les / hauts", 1], ["un chat / énorme", 1], ["Paul / arrive", 1]], pista: "¿Et, h aspirada, nombre singular?", why: "Liaisons." },
    { fase: "guiada", c: ["b4li2-oblig"], k: "choice", es: true, say: "les amis", ask: "Escucha. ¿Hay liaison en «les amis»?", q: "Elige.", o: ["sí, con [z]", "no"], a: 0, pista: "Determinante + nombre.", why: "Obligatoria." },
    { fase: "guiada", c: ["b4li2-interdit"], k: "choice", es: true, ask: "«et il part»: ¿liaison después de et?", q: "Elige.", o: ["no, nunca tras «et»", "sí, siempre"], a: 0, pista: "Et.", why: "Prohibida." },
    { fase: "indep", c: ["b4li2-interdit"], k: "choice", es: true, say: "les héros", ask: "Escucha. ¿Hay liaison en «les héros»?", q: "Elige.", o: ["no (h aspirada)", "sí, con [z]"], a: 0, why: "h aspirada." },
    { fase: "indep", c: ["b4li2-oblig"], k: "fill", ask: "Letra del sonido de enlace en «ils ont».", q: "ils ont → [il ___ ɔ̃]", acc: ["z"], why: "<b>[z]</b>." },
    { fase: "indep", c: ["b4li2-oblig"], k: "fill", ask: "Letra del sonido de enlace en «grand homme».", q: "un grand homme → [ɡʁɑ̃ ___ ɔm]", acc: ["t"], why: "<b>[t]</b>." },
    { fase: "aplica", c: ["b4li2-oblig", "b4li2-interdit"], k: "match", ask: "Une cada ejemplo con su tipo de liaison.", q: "Ejemplo → tipo", pairs: [["nous avons", "obligatorio"], ["et elle", "prohibido"], ["les hiboux", "prohibido (h aspirada)"], ["je suis allé", "opcional"]], why: "Tipos." },
    { fase: "aplica", c: ["b4li2-interdit"], k: "spot", ask: "Encuentra el error (escrito como se pronuncia mal).", s: "Au marché , j'ai acheté des [zaricots] verts .", fix: "haricots", why: "Sin liaison: <b>haricots</b>." },
    { fase: "aplica", c: ["b4li2-oblig"], k: "choice", ask: "Entre determinante y nombre la liaison es…", q: "Elige.", o: ["obligatoria", "prohibida"], a: 0, es: true, why: "Obligatoria." },
    { fase: "dominio", c: ["b4li2-oblig"], k: "order", ask: "Ordena: «Tienen dos hijos».", tokens: ["Ils ont", "deux", "enfants"], why: "<b>Ils ont deux enfants</b>" },
    { fase: "dominio", c: ["b4li2-interdit"], k: "choice", ask: "Después de «et» la liaison es…", q: "Elige.", o: ["prohibida", "obligatoria"], a: 0, es: true, why: "Prohibida." },
    { fase: "dominio", c: ["b4li2-oblig", "b4li2-interdit"], k: "listen", say: "Les enfants et leurs amis sont arrivés chez eux.", acc: ["Les enfants et leurs amis sont arrivés chez eux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les enfants et leurs amis sont arrivés chez eux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};



/* ================================ B2.2·7 · Interacción en el examen ================================ */

/* ── 62. Le r français et les sons difficiles ── */
E["rem-r-francais"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le r français et les sons difficiles",
  objetivo: {
    que: "Vas a pronunciar la r francesa (al fondo de la garganta) y a distinguir [z] / [s] y [ʒ] / [ʃ], que cambian el sentido.",
    corto: "Un poisson rouge. · Attention, c'est du poison ! · Je rentre à Paris ce soir.",
    podras: ["Pronunciar la r uvular [ʁ], al fondo de la garganta, sin vibrar la punta de la lengua (Paris, rouge, merci).", "Distinguir la s entre vocales [z] (poison, maison, rose) de ss [s] (poisson, tasse, russe).", "Distinguir [ʒ] sonoro (je, jour, rouge) de ch [ʃ] (chat, chou)."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/nota"],
    previos: ["La r francesa (Fonética, lección 29) y letras mudas y liaisons (lección 20)."],
    capacidad: "Ahora no confundes poisson y poison, ni tu r suena española."
  },
  requiere: R("frr-lieu", "frr-places", "b4ph-liaisons"), recupera: ["frr-lieu"],
  conceptos: {
    "b4rf-r": { n: "r francesa [ʁ]: uvular, al fondo de la garganta, como una j española suave, sin vibrar la punta de la lengua (Paris, rouge, merci, rentrer)", b: "gr" },
    "b4rf-sons": { n: "s entre vocales = [z] (poison = veneno, maison, rose, cousin, chemise); ss o s inicial = [s] (poisson = pez, tasse, sac, penser); j / g + e, i = [ʒ] (je, jour, rouge); ch = [ʃ] (chat, chou)", b: "gr" }
  },
  video: {
    titulo: "La r y los sonidos difíciles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "poisson / poison", seg: [
        { es: "Hola. Una s entre vocales cambia el pez por el veneno." } ] },
      { v: "frase", filas: [
          { nota: "ss = [s]", p: 1, partes: [["Un poisson rouge.", "-", 1]] },
          { nota: "s = [z]", p: 2, partes: [["Attention, c'est du poison !", "-", 2]] },
          { nota: "r [ʁ]", p: 3, partes: [["Je rentre à Paris ce soir.", "-", 3]] } ], seg: [
        { fr: "Un poisson rouge.", p: 1 }, { fr: "Attention, c'est du poison !", p: 2 }, { fr: "Je rentre à Paris ce soir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«poison» significa…", o: ["veneno", "pez"], a: 0, es: true,
        bien: "¡Sí! Poison [z] = veneno.", mal: "Poison [z] = veneno; poisson [s] = pez.",
        seg: [ { es: "Pausa. ¿S o ss?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Paris", "rouge", "maison", "poisson", "je", "chat"], seg: [
        { es: "R de garganta, s y ss, j y ch.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El acuario", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo que compró un pez.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai acheté un poison rouge pour mon aquarium !", "¡Compré un veneno rojo para mi acuario!"],
      ["hugo", "Un poison ? Du poison, c'est mortel ! Tu veux dire un poisson, avec ss : [s].", "¿Un veneno? ¡El veneno es mortal! Quieres decir un pez, con ss: [s]."],
      ["camila", "Ah ! Poisson [s], poison [z]. Comme maison et rose : une seule s entre deux voyelles, c'est [z].", "¡Ah! Poisson [s], poison [z]. Como maison y rose: una sola s entre dos vocales es [z]."],
      ["hugo", "Et ton r est trop espagnol : rouge, Paris, merci… au fond de la gorge ! Mon cousin a un poisson rouge dans sa maison.", "Y tu r es demasiado española: rouge, Paris, merci… ¡al fondo de la garganta! Mi primo tiene un pez rojo en su casa."]
    ],
    fijate: "Fíjate: poisson [s] (pez) / poison [z] (veneno); maison, rose, cousin [z]; rouge, Paris, merci (r de garganta)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres contrastes",
      idea: "La r francesa [ʁ] es uvular: se produce al fondo de la garganta, como una j española suave con algo de vibración, sin mover la punta de la lengua (Paris, rouge, merci). La s entre dos vocales suena [z] (poison = veneno, maison, rose, cousin, chemise); ss o s inicial suena [s] (poisson = pez, tasse, russe, sac, penser). j y g + e, i suenan [ʒ], sonoro (je, jour, rouge, gilet), distinto de ch [ʃ] (chat, chien, chou).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Sonido"], [
        ["poison", "veneno", "[z]"],
        ["maison", "casa", "[z]"],
        ["[ʁ]", "al fondo de la garganta", "r francesa"],
        ["un poisson · ss", "un pez", "[s]"],
        ["une maison · s", "una casa", "[z]"],
        ["rose = [z] (s entre vocales) · russe = [s] (ss) · jour = [ʒ] · chou = [ʃ]", "contrastes", "resumen"],
        ["maison · rose · cousin · chemise", "casa · rosa · primo · camisa", "[z]"],
        ["poisson · tasse · sac · penser", "pez · taza · bolso · pensar", "[s]"],
        ["J'ai acheté un poisson rouge pour mon aquarium. · poisson", "Compré un pez rojo para mi acuario.", "[s]"],
        ["Je rentre à Paris", "Vuelvo a París", "[ʁ]"],
        ["Mon cousin a un poisson rouge dans sa maison.", "Mi primo tiene un pez rojo en su casa.", "[z] / [s]"]
      ]],
      ej: [["Un poisson rouge.", "Un pez rojo."], ["Attention, c'est du poison !", "¡Cuidado, es veneno!"], ["Je rentre à Paris ce soir.", "Vuelvo a París esta noche."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["poisson = poison", "poisson [s] = pez / poison [z] = veneno", "Una s entre vocales suena [z]."], ["r vibrante española en Paris", "r de garganta [ʁ]", "Sin la punta de la lengua."], ["maison con [s]", "maison con [z]", "s entre vocales."]] }
  ],
  ejemplos: [
    { sit: "«poison» significa…", resp: "veneno", pasos: ["s entre vocales: [z]."], porque: "Par mínimo." },
    { sit: "¿Cómo suena la s de «maison»?", resp: "[z]", pasos: ["Entre vocales."], porque: "[z]." },
    { sit: "¿Dónde se produce la r francesa?", resp: "al fondo de la garganta", pasos: ["Uvular."], porque: "[ʁ]." }
  ],
  comprueba: [
    { q: "«Poisson» significa…", o: ["pez", "veneno"], a: 0, b: "gr", porque: "ss = [s]." },
    { q: "Una s entre dos vocales suena…", o: ["[z]", "[s]"], a: 0, b: "gr", porque: "maison." },
    { q: "La r francesa se hace…", o: ["al fondo de la garganta", "con la punta de la lengua"], a: 0, b: "gr", porque: "Uvular." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rf-sons"], k: "sort", ask: "¿[z] o [s]?", q: "Clasifica.", cats: ["[z]", "[s]"], items: [["maison", 0], ["rose", 0], ["cousin", 0], ["chemise", 0], ["poisson", 1], ["tasse", 1], ["sac", 1], ["penser", 1]], pista: "¿Una s entre vocales?", why: "[z] / [s]." },
    { fase: "guiada", c: ["b4rf-sons"], k: "choice", es: true, say: "poison", ask: "Escucha. ¿Qué palabra es?", q: "Elige.", o: ["veneno (poison)", "pez (poisson)"], a: 0, pista: "[z].", why: "<b>poison</b>." },
    { fase: "guiada", c: ["b4rf-sons"], k: "choice", es: true, say: "maison", ask: "Escucha. ¿Cómo suena la s de «maison»?", q: "Elige.", o: ["como una z zumbada [z]", "como una s española [s]"], a: 0, pista: "Entre vocales.", why: "[z]." },
    { fase: "indep", c: ["b4rf-r"], k: "choice", es: true, ask: "¿Dónde se produce la r francesa?", q: "Elige.", o: ["al fondo de la garganta", "con la punta de la lengua"], a: 0, why: "[ʁ]." },
    { fase: "indep", c: ["b4rf-sons"], k: "fill", ask: "«un pez» (poi__on).", q: "un poi___on", acc: ["ss"], why: "<b>poisson</b>." },
    { fase: "indep", c: ["b4rf-sons"], k: "fill", ask: "«una casa» (mai_on).", q: "une mai___on", acc: ["s"], why: "<b>maison</b>." },
    { fase: "aplica", c: ["b4rf-sons"], k: "match", ask: "Une cada palabra con su sonido.", q: "Palabra → sonido", pairs: [["rose", "[z] (s entre vocales)"], ["russe", "[s] (ss)"], ["jour", "[ʒ]"], ["chou", "[ʃ]"]], why: "Sonidos." },
    { fase: "aplica", c: ["b4rf-sons"], k: "spot", ask: "Encuentra el error.", s: "J'ai acheté un [poison] rouge pour mon aquarium .", fix: "poisson", why: "<b>poisson</b>." },
    { fase: "aplica", c: ["b4rf-r"], k: "choice", es: true, say: "Je rentre à Paris.", ask: "Escucha. ¿Cómo es la r?", q: "Elige.", o: ["de garganta, sin vibrar la punta de la lengua", "vibrante, como en español"], a: 0, why: "[ʁ]." },
    { fase: "dominio", c: ["b4rf-r"], k: "order", ask: "Ordena: «Vuelvo a París».", tokens: ["Je", "rentre", "à Paris"], why: "<b>Je rentre à Paris</b>" },
    { fase: "dominio", c: ["b4rf-sons"], k: "choice", ask: "«Poisson» significa…", q: "Elige.", o: ["pez", "veneno"], a: 0, es: true, why: "Pez." },
    { fase: "dominio", c: ["b4rf-r", "b4rf-sons"], k: "listen", say: "Mon cousin a un poisson rouge dans sa maison.", acc: ["Mon cousin a un poisson rouge dans sa maison."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon cousin a un poisson rouge dans sa maison.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

/* ── 63. Le rythme du français : l'accent en fin de groupe ── */
E["rem-accent-rythme"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le rythme du français : l'accent en fin de groupe",
  objetivo: {
    que: "Vas a hablar con el ritmo francés: el acento cae en la última sílaba de cada grupo de sentido, no en cada palabra.",
    corto: "Je voudrais un café | et un croissant. · Ma sœur habite à Paris | depuis deux ans. · C'est incroyable !",
    podras: ["Poner el acento en la última sílaba pronunciada del grupo (un appartement IMMENSE, ca-FÉ, Pa-RIS).", "Cortar la frase en grupos de 3-7 sílabas separados por pausas breves.", "Hacer las sílabas regulares y alargar un poco, sin fuerza, la sílaba acentuada."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/reloj-arena"],
    previos: ["El ritmo y la entonación (Fonética, lección 8), el acento de grupo (Fonética, lección 11) y el acento final (Fonética, lección 48)."],
    capacidad: "Ahora tu francés tiene la música de un francés."
  },
  requiere: R("fr-accent", "fag-groupes", "fag-final", "faf-espagnol"), recupera: ["fag-final"],
  conceptos: {
    "b4ar-final": { n: "el acento cae en la última sílaba pronunciada (ca-FÉ, Pa-RIS, mer-CI, a-mi-TIÉ; appartement → -MENT; chocolat → -LAT; restaurant → -RANT; téléphone → -PHONE; difficile → -CILE), y solo al final del grupo de sentido", b: "gr" },
    "b4ar-groupes": { n: "grupos rítmicos de 3-7 sílabas con pausas breves (Je pars demain | pour Lyon | avec ma sœur = 3 grupos); sílabas regulares de igual duración; la sílaba acentuada es un poco más larga, no más fuerte", b: "gr" }
  },
  video: {
    titulo: "El ritmo francés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "ca-FÉ", seg: [
        { es: "Hola. En francés el acento va al final del grupo." } ] },
      { v: "frase", filas: [
          { nota: "dos grupos", p: 1, partes: [["Je voudrais un café | et un croissant.", "-", 1]] },
          { nota: "dos grupos", p: 2, partes: [["Ma sœur habite à Paris | depuis deux ans.", "-", 2]] },
          { nota: "un grupo", p: 3, partes: [["C'est incroyable !", "-", 3]] } ], seg: [
        { fr: "Je voudrais un café, et un croissant.", p: 1 }, { fr: "Ma sœur habite à Paris, depuis deux ans.", p: 2 }, { fr: "C'est incroyable !", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Dónde va el acento en «appartement»?", o: ["en la última sílaba (-ment)", "en «-ta-»"], a: 0, es: true,
        bien: "¡Sí! Al final.", mal: "En francés, al final: -ment.",
        seg: [ { es: "Pausa. Al final." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["ca-FÉ", "Pa-RIS", "mer-CI", "groupe rythmique", "un peu plus long"], seg: [
        { es: "Último, regular, un poco más largo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Pedir en el café", img: "bg-cafe", yo: "camila",
    escena: "Camila pide en un café de Lyon y Hugo le corrige el ritmo.",
    pj: PJ,
    lineas: [
      ["camila", "Je voudrais un CA-fé et un CROIS-sant… — Tu accentues comme en espagnol !", "Quisiera un CA-fé y un CRUA-sán… — ¡Acentúas como en español!"],
      ["hugo", "En français : « Je voudrais un ca-FÉ | et un croissant au BEURRE. » L'accent tombe à la fin du groupe.", "En francés: «Quisiera un ca-FÉ | y un cruasán de MANTEQUILLA.» El acento cae al final del grupo."],
      ["camila", "Et « appartement » ? — Ap-par-te-MENT, pas a-par-TA-mento ! Et toutes les syllabes ont la même durée.", "¿Y «appartement»? — Ap-par-te-MENT, ¡no a-par-TA-mento! Y todas las sílabas duran lo mismo."],
      ["hugo", "Exactement. Je voudrais un café et un croissant au beurre, s'il vous plaît.", "Exacto. Quisiera un café y un cruasán de mantequilla, por favor."]
    ],
    fijate: "Fíjate: ca-FÉ, BEURRE, ap-par-te-MENT (acento al final del grupo), sílabas de igual duración, pausas breves entre grupos."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Acento de grupo",
      idea: "En español cada palabra tiene su sílaba tónica. En francés, el acento cae en la última sílaba pronunciada de cada grupo de sentido (groupe rythmique): Je voudrais un caFÉ | et un croissant au BEURRE. Dentro del grupo, las palabras pierden su acento propio. Los grupos tienen de 3 a 7 sílabas y se separan con pausas breves. Las sílabas son regulares, de igual duración; la sílaba acentuada es un poco más larga, no más fuerte. Palabras aisladas: ca-FÉ, Pa-RIS, mer-CI, a-mi-TIÉ, appartement (-MENT), chocolat (-LAT), restaurant (-RANT), téléphone (-PHONE), difficile (-CILE), université (-TÉ).",
      intro: "Toca cada ejemplo.",
      tabla: [["Francés", "Acento", "Regla"], [
        ["appartement", "en la última sílaba (-ment)", "final"],
        ["Il a acheté un appartement immense.", "en «-mense»: un solo grupo", "grupo"],
        ["un peu plus long", "la sílaba acentuada", "duración"],
        ["Je pars demain | pour Lyon | avec ma sœur. · 3 · trois", "3 grupos", "grupos"],
        ["université · té", "-té", "final"],
        ["chocolat = -lat · restaurant = -rant · téléphone = -phone · difficile = -cile", "sílaba final", "final"],
        ["ca-FÉ · Pa-RIS · mer-CI · a-mi-TIÉ", "acento francés", "Última sílaba"],
        ["CA-fé · PA-ris · MER-ci · a-MI-tié", "acento español", "Otra sílaba (acento español)"],
        ["J'habite dans un grand appartement au centre-ville. · appartement", "Vivo en un piso grande en el centro.", "final"],
        ["Je voudrais un café et un croissant · groupe rythmique", "Quisiera un café y un cruasán · grupo rítmico", "grupos"],
        ["Je voudrais un café et un croissant au beurre, s'il vous plaît.", "Quisiera un café y un cruasán de mantequilla, por favor.", "grupos"]
      ]],
      ej: [["Je voudrais un café | et un croissant.", "Querría un café y un cruasán."], ["Ma sœur habite à Paris | depuis deux ans.", "Mi hermana vive en París desde hace dos años."], ["C'est incroyable !", "¡Es increíble!"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["a-par-TA-ment (acento español)", "ap-par-te-MENT", "Acento al final."], ["Acentuar cada palabra", "Acentuar solo el final del grupo", "Acento de grupo."], ["La sílaba acentuada más fuerte", "Un poco más larga", "Duración, no fuerza."]] }
  ],
  ejemplos: [
    { sit: "¿Dónde va el acento en «appartement»?", resp: "en la última sílaba (-ment)", pasos: ["Final."], porque: "Acento final." },
    { sit: "«Il a acheté un appartement immense»: ¿dónde va el acento del grupo?", resp: "en «-mense»: un solo grupo", pasos: ["Final del grupo."], porque: "Grupo." },
    { sit: "La sílaba acentuada francesa es…", resp: "un peu plus long", pasos: ["Duración."], porque: "No fuerza." }
  ],
  comprueba: [
    { q: "El acento francés cae…", o: ["al final del grupo", "en cada palabra"], a: 0, b: "gr", porque: "Grupo rítmico." },
    { q: "Las sílabas francesas son…", o: ["regulares", "muy desiguales"], a: 0, b: "gr", porque: "Ritmo silábico." },
    { q: "«Chocolat» lleva el acento en…", o: ["-lat", "cho-"], a: 0, b: "gr", porque: "Final." }
  ],
  practica: [
    { fase: "guiada", c: ["b4ar-final"], k: "sort", ask: "¿Acento francés (última sílaba) o español?", q: "Clasifica.", cats: ["Última sílaba", "Otra sílaba (acento español)"], items: [["ca-FÉ", 0], ["Pa-RIS", 0], ["mer-CI", 0], ["a-mi-TIÉ", 0], ["CA-fé", 1], ["PA-ris", 1], ["MER-ci", 1], ["a-MI-tié", 1]], pista: "¿Mayúsculas al final?", why: "Acento final." },
    { fase: "guiada", c: ["b4ar-final"], k: "choice", es: true, ask: "¿Dónde va el acento en «appartement»?", q: "Elige.", o: ["en la última sílaba (-ment)", "en «-ta-»"], a: 0, pista: "Final.", why: "-ment." },
    { fase: "guiada", c: ["b4ar-groupes"], k: "choice", es: true, say: "Il a acheté un appartement immense.", ask: "Escucha. ¿Dónde cae el acento?", q: "Elige.", o: ["en «-mense»: un solo grupo", "en cada palabra"], a: 0, pista: "Final del grupo.", why: "Grupo." },
    { fase: "indep", c: ["b4ar-groupes"], k: "choice", es: true, ask: "La sílaba acentuada francesa es…", q: "Elige.", o: ["un poco más larga", "mucho más fuerte"], a: 0, why: "Duración." },
    { fase: "indep", c: ["b4ar-groupes"], k: "fill", ask: "¿Cuántos grupos? (en cifra o letra)", q: "Je pars demain | pour Lyon | avec ma sœur. → ___ groupes", acc: ["3", "trois"], why: "<b>3</b>." },
    { fase: "indep", c: ["b4ar-final"], k: "fill", ask: "Última sílaba de université.", q: "univer-si-___", acc: ["té"], why: "<b>-té</b>." },
    { fase: "aplica", c: ["b4ar-final"], k: "match", ask: "Une cada palabra con su sílaba acentuada.", q: "Palabra → sílaba", pairs: [["chocolat", "-lat"], ["restaurant", "-rant"], ["téléphone", "-phone"], ["difficile", "-cile"]], why: "Final." },
    { fase: "aplica", c: ["b4ar-final"], k: "spot", ask: "Encuentra el error de ortografía.", s: "J'habite dans un grand [apartement] au centre-ville .", fix: "appartement", why: "<b>appartement</b>." },
    { fase: "aplica", c: ["b4ar-groupes"], k: "choice", ask: "El acento francés cae…", q: "Elige.", o: ["al final del grupo", "en cada palabra"], a: 0, es: true, why: "Grupo." },
    { fase: "dominio", c: ["b4ar-groupes"], k: "order", ask: "Ordena: «Quisiera un café y un cruasán».", tokens: ["Je voudrais", "un café", "et un croissant"], why: "<b>Je voudrais un café et un croissant</b>" },
    { fase: "dominio", c: ["b4ar-groupes"], k: "choice", ask: "Las sílabas francesas son…", q: "Elige.", o: ["regulares", "muy desiguales"], a: 0, es: true, why: "Regulares." },
    { fase: "dominio", c: ["b4ar-final", "b4ar-groupes"], k: "listen", say: "Je voudrais un café et un croissant au beurre, s'il vous plaît.", acc: ["Je voudrais un café et un croissant au beurre, s'il vous plaît."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je voudrais un café et un croissant au beurre, s'il vous plaît.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Lyon"], previo: [] }
};

/* ================================ B2.2·7 · Interacción en el examen ================================ */
/* ── 64. Gagner du temps à l'oral sans se bloquer ── */
E["rem-gagner-temps"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Gagner du temps à l'oral sans se bloquer",
  objetivo: {
    que: "Vas a ganar tiempo en el oral sin quedarte en silencio: pensar en voz alta, reformular la pregunta y describir la palabra que no encuentras.",
    corto: "C'est une bonne question, laissez-moi réfléchir. · Je ne trouve pas le mot, c'est un outil qui sert à couper.",
    podras: ["Pensar en voz alta: Laissez-moi réfléchir un instant. Voyons…", "Verificar o pedir que reformulen: Si je comprends bien, vous me demandez si… / Pourriez-vous reformuler, s'il vous plaît ?", "Describir la palabra que falta: C'est une sorte de…, un outil qui sert à…, Comment dit-on… ?; y usar los rellenos franceses (euh, alors, disons que)."],
    iconos: ["ic2/reloj-arena", "ic2/microfono", "ic2/bombilla"],
    previos: ["Reformular (B1.1, lección 47), el debate con el examinador (B2.1, lección 33) y vouvoyer et interagir (lección 19)."],
    capacidad: "Ahora nunca te quedas en blanco en el oral."
  },
  requiere: R("b1rf-expl", "b3eo-debat", "b4ol-interagir"), recupera: ["b4ol-interagir"],
  conceptos: {
    "b4gt-penser": { n: "ganar tiempo: Laissez-moi réfléchir un instant; Voyons…; C'est une bonne question; Disons que…; En fait…; rellenos: euh, alors, bon (no «eh»); verificar: Si je comprends bien, vous me demandez si…; Pourriez-vous reformuler / répéter ?", b: "gr" },
    "b4gt-mot": { n: "buscar una palabra: Je ne trouve pas le mot; Comment dit-on… en français ?; C'est une sorte de…; C'est un objet / un outil qui sert à (servir à: qui sert à couper, à ouvrir les bouteilles)", b: "gr" }
  },
  video: {
    titulo: "Ganar tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "Laissez-moi réfléchir", seg: [
        { es: "Hola. Dudar es normal; el silencio, no." } ] },
      { v: "frase", filas: [
          { nota: "pensar", p: 1, partes: [["C'est une bonne question, laissez-moi réfléchir.", "-", 1]] },
          { nota: "describir", p: 2, partes: [["Je ne trouve pas le mot, c'est un outil qui sert à couper.", "-", 2]] },
          { nota: "reformular", p: 3, partes: [["Pourriez-vous reformuler, s'il vous plaît ?", "-", 3]] } ], seg: [
        { fr: "C'est une bonne question, laissez-moi réfléchir.", p: 1 }, { fr: "Je ne trouve pas le mot, c'est un outil qui sert à couper.", p: 2 }, { fr: "Pourriez-vous reformuler, s'il vous plaît ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "No encuentras la palabra «abrebotellas». Dices…", o: ["C'est un outil qui sert à ouvrir les bouteilles.", "Euh… je ne sais pas."], a: 0,
        bien: "¡Sí! Describe la palabra.", mal: "Describe lo que hace el objeto.",
        seg: [ { es: "Pausa. Describe." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Laissez-moi réfléchir", "Voyons…", "Si je comprends bien", "C'est une sorte de", "qui sert à"], seg: [
        { es: "Pensar, verificar, describir.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Bloqueada en el oral", img: "bg-universidad", yo: "camila",
    escena: "En un oral de prueba, Camila no encuentra una palabra.",
    pj: PJ,
    lineas: [
      ["sofia", "Quel objet utilisez-vous pour bricoler à la maison ?", "¿Qué objeto usa para hacer bricolaje en casa?"],
      ["camila", "C'est une bonne question. Laissez-moi réfléchir un instant… Comment dit-on « destornillador » en français ?", "Es una buena pregunta. Déjeme pensar un momento… ¿Cómo se dice «destornillador» en francés?"],
      ["camila", "Je ne trouve pas le mot : c'est un outil qui sert à visser… Et pour ouvrir les bouteilles, c'est une sorte de… — Un tire-bouchon !", "No encuentro la palabra: es una herramienta que sirve para atornillar… Y para abrir las botellas, es una especie de… — ¡Un sacacorchos!"],
      ["sofia", "Très bien, vous ne vous êtes pas bloquée. — Si je comprends bien, vous me demandez aussi mon avis ? C'est une bonne question. Laissez-moi réfléchir un instant.", "Muy bien, no se bloqueó. — Si entiendo bien, ¿también me pide mi opinión? Es una buena pregunta. Déjeme pensar un momento."]
    ],
    fijate: "Fíjate: C'est une bonne question, Laissez-moi réfléchir un instant, Comment dit-on… ?, Je ne trouve pas le mot, un outil qui sert à, une sorte de, Si je comprends bien."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Pensar, verificar, describir",
      idea: "Pensar: C'est une bonne question; Laissez-moi réfléchir un instant; Voyons…; Disons que…; En fait… Verificar o pedir reformulación: Si je comprends bien, vous me demandez si…; Pourriez-vous reformuler / répéter, s'il vous plaît ? Buscar una palabra (circunloquio): Je ne trouve pas le mot; Comment dit-on « … » en français ?; C'est une sorte de…; C'est un objet / un outil qui sert à + infinitivo (servir à: il sert, no «sirve»). Rellenos franceses, con moderación: euh, alors, bon (nunca el «eh» español). Lo que no sirve: callarse mucho rato, pasar al español, decir «je ne sais pas» y pararse.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Función"], [
        ["Laissez-moi réfléchir un instant.", "Déjeme pensar un momento.", "pensar"],
        ["C'est un objet qui sert à…", "Es un objeto que sirve para…", "circunloquio"],
        ["Pourriez-vous reformuler la question ?", "¿Podría reformular la pregunta?", "reformular"],
        ["Comment dit-on « destornillador » en français ? · dit", "¿Cómo se dice «destornillador» en francés?", "buscar palabra"],
        ["Si je comprends bien, vous me demandez mon avis. · comprends", "Si entiendo bien, me pide mi opinión.", "verificar"],
        ["Voyons… = pensar · C'est une sorte de… = describir una palabra · Pourriez-vous répéter ? = pedir repetición · Si je comprends bien… = verificar", "funciones", "resumen"],
        ["reformuler · décrire le mot · demander de répéter · utiliser un synonyme", "reformular · describir la palabra · pedir que repitan · usar un sinónimo", "Útil"],
        ["se taire longtemps · passer à l'espagnol · dire « je ne sais pas » et s'arrêter · répondre au hasard", "callarse mucho · pasar al español · decir «no sé» y pararse · responder al azar", "Poco útil"],
        ["C'est un outil qui sert à ouvrir les bouteilles. · sert", "Es una herramienta que sirve para abrir botellas.", "circunloquio"],
        ["Laissez-moi réfléchir un instant", "Déjeme pensar un momento", "pensar"],
        ["C'est une bonne question. Laissez-moi réfléchir un instant.", "Es una buena pregunta. Déjeme pensar un momento.", "pensar"]
      ]],
      ej: [["C'est une bonne question, laissez-moi réfléchir.", "Es una buena pregunta, déjeme pensar."], ["Je ne trouve pas le mot, c'est un outil qui sert à couper.", "No encuentro la palabra, es una herramienta que sirve para cortar."], ["Pourriez-vous reformuler, s'il vous plaît ?", "¿Podría reformular, por favor?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["¿Eh…? (en español)", "Euh… / Alors…", "Rellenos franceses: euh, no «eh»."], ["un outil qui sirve à…", "un outil qui sert à…", "servir: il sert."], ["Quedarse en silencio", "Laissez-moi réfléchir un instant.", "Nunca el silencio largo."]] }
  ],
  ejemplos: [
    { sit: "Pensar un momento:", resp: "Laissez-moi réfléchir un instant.", pasos: ["Fórmula cortés."], porque: "Pensar." },
    { sit: "Describir una palabra que no sabes:", resp: "C'est un objet qui sert à…", pasos: ["Circunloquio."], porque: "Describir." },
    { sit: "«¿Podría reformular?»", resp: "Pourriez-vous reformuler la question ?", pasos: ["Condicional."], porque: "Reformular." }
  ],
  comprueba: [
    { q: "El relleno francés para dudar es…", o: ["euh", "eh"], a: 0, b: "gr", porque: "euh." },
    { q: "«Qui sert à» sirve para…", o: ["describir para qué sirve algo", "pedir permiso"], a: 0, b: "gr", porque: "Circunloquio." },
    { q: "Pasar al español en el oral es…", o: ["poco útil", "útil"], a: 0, b: "gr", porque: "Evitarlo." }
  ],
  practica: [
    { fase: "guiada", c: ["b4gt-penser", "b4gt-mot"], k: "sort", ask: "¿Útil o poco útil para no bloquearse?", q: "Clasifica.", cats: ["Útil", "Poco útil"], items: [["reformuler", 0], ["décrire le mot", 0], ["demander de répéter", 0], ["utiliser un synonyme", 0], ["se taire longtemps", 1], ["passer à l'espagnol", 1], ["dire « je ne sais pas » et s'arrêter", 1], ["répondre au hasard", 1]], pista: "¿Mantiene la comunicación?", why: "Estrategias." },
    { fase: "guiada", c: ["b4gt-penser"], k: "choice", ask: "Pensar un momento:", q: "Elige.", o: ["Laissez-moi réfléchir un instant.", "Attends, attends !"], a: 0, pista: "Cortés.", why: "Pensar." },
    { fase: "guiada", c: ["b4gt-mot"], k: "choice", ask: "Describir una palabra que no sabes:", q: "Elige.", o: ["C'est un objet qui sert à…", "C'est un truc espagnol…"], a: 0, pista: "Para qué sirve.", why: "Circunloquio." },
    { fase: "indep", c: ["b4gt-penser"], k: "choice", ask: "«¿Podría reformular?»", q: "Elige.", o: ["Pourriez-vous reformuler la question ?", "Quoi ?"], a: 0, why: "Cortés." },
    { fase: "indep", c: ["b4gt-mot"], k: "fill", ask: "«¿Cómo se dice…?» (Comment … -on)", q: "Comment ___ -on « destornillador » en français ?", acc: ["dit"], why: "<b>dit</b>." },
    { fase: "indep", c: ["b4gt-penser"], k: "fill", ask: "«Si entiendo bien» (comprendre).", q: "Si je ___ bien, vous me demandez mon avis.", acc: ["comprends"], why: "<b>comprends</b>." },
    { fase: "aplica", c: ["b4gt-penser", "b4gt-mot"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Voyons…", "pensar"], ["C'est une sorte de…", "describir una palabra"], ["Pourriez-vous répéter ?", "pedir repetición"], ["Si je comprends bien…", "verificar"]], why: "Funciones." },
    { fase: "aplica", c: ["b4gt-mot"], k: "spot", ask: "Encuentra el error.", s: "C'est un outil qui [sirve] à ouvrir les bouteilles .", fix: "sert", why: "<b>sert</b>." },
    { fase: "aplica", c: ["b4gt-penser"], k: "choice", ask: "El relleno francés para dudar es…", q: "Elige.", o: ["euh", "eh"], a: 0, why: "<b>euh</b>." },
    { fase: "dominio", c: ["b4gt-penser"], k: "order", ask: "Ordena: «Déjeme pensar un momento».", tokens: ["Laissez-moi", "réfléchir", "un instant"], why: "<b>Laissez-moi réfléchir un instant</b>" },
    { fase: "dominio", c: ["b4gt-mot"], k: "choice", ask: "«Qui sert à» sirve para…", q: "Elige.", o: ["describir para qué sirve algo", "pedir permiso"], a: 0, es: true, why: "Describir." },
    { fase: "dominio", c: ["b4gt-penser", "b4gt-mot"], k: "listen", say: "C'est une bonne question. Laissez-moi réfléchir un instant.", acc: ["C'est une bonne question. Laissez-moi réfléchir un instant."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>C'est une bonne question. Laissez-moi réfléchir un instant.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 65. Se présenter à l'oral d'examen ── */
E["rem-se-presenter-oral"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Se présenter à l'oral d'examen",
  objetivo: {
    que: "Vas a presentarte en 30-60 segundos al empezar el oral: saludo, identidad, actividad, relación con el francés y un proyecto.",
    corto: "Je m'appelle Ana, je suis mexicaine et j'ai vingt-quatre ans. · J'apprends le français depuis trois ans.",
    podras: ["Saludar con cortesía (Bonjour Madame, bonjour Monsieur) y presentarte: Je m'appelle…, je suis colombien(ne), j'ai 25 ans.", "Decir tu actividad: Je suis étudiant(e) en…, je travaille comme…", "Explicar tu relación con el francés (J'apprends le français depuis…) y tu proyecto (J'aimerais poursuivre mes études en France)."],
    iconos: ["ic2/microfono", "ic2/amigos", "ic2/bandera"],
    previos: ["Presentarse (Primeros pasos), la edad (A1, lección 2), depuis (lección 28) y vouvoyer et interagir (lección 19)."],
    capacidad: "Ahora empiezas el oral con buen pie."
  },
  requiere: R("pr-nom", "na-age", "b4dp-depuis", "b4ol-vous"), recupera: ["na-age"],
  conceptos: {
    "b4sp2-identite": { n: "saludo (Bonjour Madame, bonjour Monsieur.), identidad (Je m'appelle…, je suis colombien(ne) / chilien / péruvien, j'ai trente ans — edad con avoir, nunca «je suis 25 ans»)", b: "gr" },
    "b4sp2-projet": { n: "actividad (Je suis étudiant(e) en droit, Je travaille comme infirmière / architecte), francés (J'apprends le français depuis deux ans parce que…), proyecto (J'aimerais poursuivre / continuer mes études en France; Je voudrais travailler à Montréal); frases completas, vouvoiement", b: "gr" }
  },
  video: {
    titulo: "Presentarse en el oral", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "Je m'appelle…", seg: [
        { es: "Hola. La primera impresión cuenta: 30 a 60 segundos." } ] },
      { v: "frase", filas: [
          { nota: "identidad", p: 1, partes: [["Je m'appelle Ana, je suis mexicaine et j'ai vingt-quatre ans.", "-", 1]] },
          { nota: "actividad", p: 2, partes: [["Je travaille comme ingénieure dans une entreprise de logiciels.", "-", 2]] },
          { nota: "francés", p: 3, partes: [["J'apprends le français depuis trois ans.", "-", 3]] } ], seg: [
        { fr: "Je m'appelle Ana, je suis mexicaine et j'ai vingt-quatre ans.", p: 1 }, { fr: "Je travaille comme ingénieure dans une entreprise de logiciels.", p: 2 }, { fr: "J'apprends le français depuis trois ans.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo 30 años.»", o: ["J'ai trente ans.", "Je suis trente ans."], a: 0,
        bien: "¡Sí! Edad con avoir.", mal: "La edad va con avoir.",
        seg: [ { es: "Pausa. Avoir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Bonjour Madame", "Je m'appelle", "j'ai … ans", "je travaille comme", "depuis", "J'aimerais"], seg: [
        { es: "Saludo, identidad, actividad, francés, proyecto.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El primer minuto del oral", img: "bg-universidad", yo: "camila",
    escena: "Camila ensaya su presentación con Madame Sofia como jurado.",
    pj: PJ,
    lineas: [
      ["camila", "Salut, moi c'est Camila, je suis vingt-six ans…", "Hola, yo soy Camila, soy veintiséis años…"],
      ["sofia", "Non ! D'abord : « Bonjour Madame, bonjour Monsieur. » Puis « Je m'appelle Camila » et « J'ai vingt-six ans » : l'âge, c'est avec avoir.", "¡No! Primero: «Buenos días, señora; buenos días, señor.» Luego «Me llamo Camila» y «Tengo veintiséis años»: la edad va con avoir."],
      ["camila", "Bonjour Madame, bonjour Monsieur. Je m'appelle Camila, je suis colombienne et j'ai vingt-six ans. Je suis étudiante en droit et je travaille comme assistante.", "Buenos días, señora; buenos días, señor. Me llamo Camila, soy colombiana y tengo veintiséis años. Soy estudiante de derecho y trabajo como asistente."],
      ["sofia", "Et le français ? — J'apprends le français depuis deux ans parce que j'aimerais poursuivre mes études en France.", "¿Y el francés? — Aprendo francés desde hace dos años porque me gustaría continuar mis estudios en Francia."]
    ],
    fijate: "Fíjate: Bonjour Madame, bonjour Monsieur (saludo), Je m'appelle, je suis colombienne, j'ai vingt-six ans (avoir), je suis étudiante en, je travaille comme, depuis deux ans, j'aimerais poursuivre mes études."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cinco pasos en un minuto",
      idea: "1. Saludo: Bonjour Madame, bonjour Monsieur. 2. Identidad: Je m'appelle…, je suis colombien(ne), j'ai 25 ans (edad con avoir: nunca «je suis 25 ans»). 3. Actividad: Je suis étudiant(e) en droit / médecine…; Je travaille comme infirmière / architecte (comme, sin artículo). 4. Francés: J'apprends le français depuis deux ans parce que… 5. Proyecto: J'aimerais poursuivre / continuer mes études en France; Je voudrais travailler à Montréal. Frases completas, tono natural, vouvoiement; nada de «Salut, moi c'est…» ni «Euh… voilà… c'est tout».",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Paso"], [
        ["J'ai trente ans.", "Tengo 30 años.", "edad"],
        ["Je travaille comme infirmière.", "Trabajo de enfermera.", "actividad"],
        ["Bonjour Madame, bonjour Monsieur.", "Buenos días, señora; buenos días, señor.", "saludo"],
        ["J'apprends le français depuis deux ans. · depuis", "Aprendo francés desde hace dos años.", "francés"],
        ["J'aimerais poursuivre mes études en France. · poursuivre · continuer", "Me gustaría continuar mis estudios en Francia.", "proyecto"],
        ["identidad = Je m'appelle Luis. · origen = Je suis chilien. · actividad = Je suis étudiant en droit. · proyecto = Je voudrais travailler à Montréal.", "pasos", "resumen"],
        ["Je m'appelle… · J'ai vingt ans. · Je suis étudiante. · J'aimerais vivre en France.", "presentación correcta", "Adecuado"],
        ["Je suis vingt ans. · Salut, moi c'est… · Euh… voilà… c'est tout. · Tu vas bien ?", "presentación inadecuada", "Inadecuado"],
        ["Ma sœur a dix-neuf ans et elle étudie le droit. · a", "Mi hermana tiene diecinueve años y estudia derecho.", "edad"],
        ["J'apprends le français depuis deux ans", "Aprendo francés desde hace dos años", "francés"],
        ["Bonjour, je m'appelle Carlos, je suis péruvien et je travaille comme architecte.", "Buenos días, me llamo Carlos, soy peruano y trabajo como arquitecto.", "presentación"]
      ]],
      ej: [["Je m'appelle Ana, je suis mexicaine et j'ai vingt-quatre ans.", "Me llamo Ana, soy mexicana y tengo veinticuatro años."], ["Je travaille comme ingénieure dans une entreprise de logiciels.", "Trabajo como ingeniera en una empresa de software."], ["J'apprends le français depuis trois ans.", "Aprendo francés desde hace tres años."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis 25 ans.", "J'ai 25 ans.", "Edad: avoir."], ["Salut, moi c'est…", "Bonjour Madame, bonjour Monsieur. Je m'appelle…", "Registro de examen."], ["Je travaille comme une infirmière.", "Je travaille comme infirmière.", "Comme + profesión sin artículo."]] }
  ],
  ejemplos: [
    { sit: "«Tengo 30 años.»", resp: "J'ai trente ans.", pasos: ["avoir."], porque: "Edad." },
    { sit: "«Trabajo de enfermera.»", resp: "Je travaille comme infirmière.", pasos: ["comme + profesión."], porque: "Actividad." },
    { sit: "Saludo al jurado:", resp: "Bonjour Madame, bonjour Monsieur.", pasos: ["Cortés."], porque: "Saludo." }
  ],
  comprueba: [
    { q: "La edad se dice con…", o: ["avoir", "être"], a: 0, b: "gr", porque: "J'ai 25 ans." },
    { q: "La presentación dura…", o: ["30-60 segundos", "10 minutos"], a: 0, b: "gr", porque: "Breve." },
    { q: "«Salut, moi c'est…» en el examen es…", o: ["inadecuado", "perfecto"], a: 0, b: "gr", porque: "Registro." }
  ],
  practica: [
    { fase: "guiada", c: ["b4sp2-identite", "b4sp2-projet"], k: "sort", ask: "¿Adecuado o inadecuado en el oral?", q: "Clasifica.", cats: ["Adecuado", "Inadecuado"], items: [["Je m'appelle…", 0], ["J'ai vingt ans.", 0], ["Je suis étudiante.", 0], ["J'aimerais vivre en France.", 0], ["Je suis vingt ans.", 1], ["Salut, moi c'est…", 1], ["Euh… voilà… c'est tout.", 1], ["Tu vas bien ?", 1]], pista: "¿Correcto y cortés?", why: "Registro." },
    { fase: "guiada", c: ["b4sp2-identite"], k: "choice", ask: "«Tengo 30 años.»", q: "Elige.", o: ["J'ai trente ans.", "Je suis trente ans."], a: 0, pista: "avoir.", why: "<b>J'ai</b>." },
    { fase: "guiada", c: ["b4sp2-projet"], k: "choice", ask: "«Trabajo de enfermera.»", q: "Elige.", o: ["Je travaille comme infirmière.", "Je travaille de infirmière."], a: 0, pista: "comme.", why: "<b>comme</b>." },
    { fase: "indep", c: ["b4sp2-identite"], k: "choice", ask: "Saludo al jurado:", q: "Elige.", o: ["Bonjour Madame, bonjour Monsieur.", "Salut tout le monde !"], a: 0, why: "Cortés." },
    { fase: "indep", c: ["b4sp2-projet"], k: "fill", ask: "«desde hace»", q: "J'apprends le français ___ deux ans.", acc: ["depuis"], why: "<b>depuis</b>." },
    { fase: "indep", c: ["b4sp2-projet"], k: "fill", ask: "«continuar» (poursuivre o continuer).", q: "J'aimerais ___ mes études en France.", acc: ["poursuivre", "continuer"], why: "<b>poursuivre</b>." },
    { fase: "aplica", c: ["b4sp2-identite", "b4sp2-projet"], k: "match", ask: "Une cada paso con su frase.", q: "Paso → frase", pairs: [["identidad", "Je m'appelle Luis."], ["origen", "Je suis chilien."], ["actividad", "Je suis étudiant en droit."], ["proyecto", "Je voudrais travailler à Montréal."]], why: "Pasos." },
    { fase: "aplica", c: ["b4sp2-identite"], k: "spot", ask: "Encuentra el error.", s: "Ma sœur [est] dix-neuf ans et elle étudie le droit .", fix: "a", why: "<b>a</b>." },
    { fase: "aplica", c: ["b4sp2-identite"], k: "choice", ask: "La edad se dice con…", q: "Elige.", o: ["avoir", "être"], a: 0, why: "<b>avoir</b>." },
    { fase: "dominio", c: ["b4sp2-projet"], k: "order", ask: "Ordena: «Aprendo francés desde hace dos años».", tokens: ["J'apprends", "le français", "depuis deux ans"], why: "<b>J'apprends le français depuis deux ans</b>" },
    { fase: "dominio", c: ["b4sp2-identite"], k: "choice", ask: "«Salut, moi c'est…» en el examen es…", q: "Elige.", o: ["inadecuado", "perfecto"], a: 0, es: true, why: "Inadecuado." },
    { fase: "dominio", c: ["b4sp2-identite", "b4sp2-projet"], k: "listen", say: "Bonjour, je m'appelle Carlos, je suis péruvien et je travaille comme architecte.", acc: ["Bonjour, je m'appelle Carlos, je suis péruvien et je travaille comme architecte."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonjour, je m'appelle Carlos, je suis péruvien et je travaille comme architecte.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Ana", "Carlos", "Luis", "Montréal", "France"], previo: [] }
};

/* ── 66. Réagir aux questions et objections du jury ── */
E["rem-reagir-jury"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Réagir aux questions et objections du jury",
  objetivo: {
    que: "Vas a reaccionar a las preguntas y objeciones del jurado: reconocer, matizar, defender tu postura y pedir precisión, sin perder la cortesía.",
    corto: "Je comprends votre point de vue, mais je ne suis pas tout à fait d'accord. · Qu'entendez-vous par « liberté » ? · Je maintiens que c'est une bonne solution.",
    podras: ["Reconocer un buen argumento: C'est vrai, je n'y avais pas pensé; Vous avez raison sur ce point.", "Matizar (Dans une certaine mesure, oui, mais…; Permettez-moi de nuancer) y defender tu postura (Je maintiens que…, car…).", "Pedir precisión: Qu'entendez-vous par… ? — con firmeza y sin agresividad."],
    iconos: ["ic2/espadas", "ic2/microfono", "ic2/corona"],
    previos: ["Debatir (B2.1, lección 8), vouvoyer et interagir (lección 19) y el exposé (lección 23)."],
    capacidad: "Ahora defiendes tu postura ante el jurado con firmeza y cortesía."
  },
  requiere: R("b3db-accord", "b3eo-debat", "b4ol-interagir", "b4px-conclure"), recupera: ["b3db-accord"],
  conceptos: {
    "b4rj-reconnaitre": { n: "reconocer y matizar: C'est vrai, je n'y avais pas pensé; Vous avez raison sur ce point, cependant…; C'est un bon argument; Dans une certaine mesure, oui, mais…; Permettez-moi de nuancer; Je comprends votre point de vue / votre objection, mais…", b: "gr" },
    "b4rj-defendre": { n: "defender y precisar: Je maintiens que… (maintenir: je maintiens), car…; Je reste convaincu(e) que…; Qu'entendez-vous par… ? (pedir precisión); nunca: N'importe quoi !, Vous ne comprenez rien, Tu as tort", b: "gr" }
  },
  video: {
    titulo: "Responder al jurado", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "Je maintiens que…", seg: [
        { es: "Hola. El jurado te contradice a propósito: firmeza con cortesía." } ] },
      { v: "frase", filas: [
          { nota: "matizar", p: 1, partes: [["Je comprends votre point de vue, mais je ne suis pas tout à fait d'accord.", "-", 1]] },
          { nota: "precisar", p: 2, partes: [["Qu'entendez-vous par « liberté » ?", "-", 2]] },
          { nota: "defender", p: 3, partes: [["Je maintiens que c'est une bonne solution.", "-", 3]] } ], seg: [
        { fr: "Je comprends votre point de vue, mais je ne suis pas tout à fait d'accord.", p: 1 }, { fr: "Qu'entendez-vous par « liberté » ?", p: 2 }, { fr: "Je maintiens que c'est une bonne solution.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El jurado te contradice. Respondes…", o: ["Je comprends votre point de vue, mais…", "Non, vous avez tort !"], a: 0,
        bien: "¡Sí! Firmeza con cortesía.", mal: "Nunca agresivo con el jurado.",
        seg: [ { es: "Pausa. Cortesía." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je n'y avais pas pensé", "Vous avez raison sur ce point", "Dans une certaine mesure", "Je maintiens que", "Qu'entendez-vous par"], seg: [
        { es: "Reconocer, matizar, defender, precisar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las preguntas del jurado", img: "bg-universidad", yo: "camila",
    escena: "Tras el exposé sobre el transporte gratuito, Madame Sofia hace de jurado exigente.",
    pj: PJ,
    lineas: [
      ["sofia", "Mais la gratuité des transports coûterait très cher aux contribuables, non ?", "Pero la gratuidad del transporte costaría muy cara a los contribuyentes, ¿no?"],
      ["camila", "C'est vrai, je n'y avais pas pensé sous cet angle. Vous avez raison sur ce point ; cependant, la pollution coûte cher aussi.", "Es cierto, no lo había pensado desde ese ángulo. Tiene razón en ese punto; sin embargo, la contaminación también cuesta cara."],
      ["sofia", "Vous parlez de « liberté de circuler ». Mais c'est un peu vague…", "Usted habla de «libertad de circular». Pero es un poco vago…"],
      ["camila", "Qu'entendez-vous par « vague » ? … Je comprends votre objection, mais je maintiens que cette mesure est nécessaire, car elle aide les familles modestes.", "¿Qué entiende por «vago»? … Entiendo su objeción, pero mantengo que esta medida es necesaria, porque ayuda a las familias humildes."]
    ],
    fijate: "Fíjate: C'est vrai, je n'y avais pas pensé (reconocer), Vous avez raison sur ce point ; cependant (matizar), Qu'entendez-vous par… ? (precisar), Je comprends votre objection, mais je maintiens que… car (defender)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro reacciones",
      idea: "Tras el monólogo, el jurado pregunta y a veces te contradice a propósito para ver cómo reaccionas. 1. Reconocer: C'est vrai, je n'y avais pas pensé; Vous avez raison sur ce point; C'est un bon argument. 2. Matizar: Dans une certaine mesure, oui, mais…; Permettez-moi de nuancer; Je comprends votre point de vue / votre objection, mais… 3. Defender: Je maintiens que… (presente de maintenir: je maintiens), car…; Je reste convaincu(e) que… 4. Pedir precisión: Qu'entendez-vous par « … » ? Firmeza con cortesía: nunca N'importe quoi !, Vous ne comprenez rien, Je ne veux pas répondre, Tu as tort.",
      intro: "Toca cada fórmula.",
      tabla: [["Francés", "Español", "Reacción"], [
        ["Je comprends votre point de vue, mais…", "Entiendo su punto de vista, pero…", "matizar"],
        ["Qu'entendez-vous par… ?", "¿Qué entiende por…?", "pedir precisión"],
        ["Je maintiens que…", "Mantengo que…", "defender"],
        ["Vous avez raison sur ce point. · raison", "Tiene razón en ese punto.", "reconocer"],
        ["C'est vrai, je n'y avais pas pensé. · pensé", "Es cierto, no lo había pensado.", "reconocer"],
        ["C'est vrai, je n'y avais pas pensé. = reconocer · Dans une certaine mesure… = matizar · Je maintiens que… = defender · Qu'entendez-vous par… ? = pedir precisión", "reacciones", "resumen"],
        ["Je comprends, mais… · C'est un bon argument. · Permettez-moi de nuancer. · Je reste convaincu que…", "Entiendo, pero… · Es un buen argumento · Permítame matizar · Sigo convencido de que…", "Adecuada"],
        ["N'importe quoi ! · Vous ne comprenez rien. · Je ne veux pas répondre. · Tu as tort.", "¡Tonterías! · No entiende nada · No quiero responder · Te equivocas", "Inadecuada"],
        ["Je maintiens que les transports publics doivent être gratuits. · maintiens", "Mantengo que el transporte público debe ser gratuito.", "defender"],
        ["Vous avez raison sur ce point", "Tiene razón en ese punto", "reconocer"],
        ["Je comprends votre objection, mais je maintiens que cette mesure est nécessaire.", "Entiendo su objeción, pero mantengo que esta medida es necesaria.", "matizar + defender"]
      ]],
      ej: [["Je comprends votre point de vue, mais je ne suis pas tout à fait d'accord.", "Entiendo su punto de vista, pero no estoy del todo de acuerdo."], ["Qu'entendez-vous par « liberté » ?", "¿Qué entiende por «libertad»?"], ["Je maintiens que c'est une bonne solution.", "Mantengo que es una buena solución."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Non, vous avez tort !", "Je comprends, mais je vois les choses autrement.", "Firmeza con cortesía."], ["Je maintenu que…", "Je maintiens que…", "Presente de maintenir."], ["Ceder siempre: «Oui, oui, vous avez raison.»", "Je maintiens que…, car…", "Defender con argumentos."]] }
  ],
  ejemplos: [
    { sit: "«Entiendo su punto de vista, pero…»", resp: "Je comprends votre point de vue, mais…", pasos: ["Concede y matiza."], porque: "Matizar." },
    { sit: "«¿Qué entiende por…?»", resp: "Qu'entendez-vous par… ?", pasos: ["Precisión."], porque: "Precisar." },
    { sit: "«Mantengo que…»", resp: "Je maintiens que…", pasos: ["Defender."], porque: "Defender." }
  ],
  comprueba: [
    { q: "«Qu'entendez-vous par… ?» sirve para…", o: ["pedir precisión", "despedirse"], a: 0, b: "gr", porque: "Precisar." },
    { q: "«Je maintiens que…» sirve para…", o: ["defender tu postura", "rendirte"], a: 0, b: "gr", porque: "Defender." },
    { q: "«N'importe quoi !» ante el jurado es…", o: ["inadecuado", "adecuado"], a: 0, b: "gr", porque: "Agresivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b4rj-reconnaitre", "b4rj-defendre"], k: "sort", ask: "¿Reacción adecuada o inadecuada?", q: "Clasifica.", cats: ["Adecuada", "Inadecuada"], items: [["Je comprends, mais…", 0], ["C'est un bon argument.", 0], ["Permettez-moi de nuancer.", 0], ["Je reste convaincu que…", 0], ["N'importe quoi !", 1], ["Vous ne comprenez rien.", 1], ["Je ne veux pas répondre.", 1], ["Tu as tort.", 1]], pista: "¿Cortés?", why: "Tono." },
    { fase: "guiada", c: ["b4rj-reconnaitre"], k: "choice", ask: "«Entiendo su punto de vista, pero…»", q: "Elige.", o: ["Je comprends votre point de vue, mais…", "Je comprends ton point de vue, mais…"], a: 0, pista: "Vous.", why: "<b>votre</b>." },
    { fase: "guiada", c: ["b4rj-defendre"], k: "choice", ask: "«¿Qué entiende por…?»", q: "Elige.", o: ["Qu'entendez-vous par… ?", "Vous voulez dire quoi ?"], a: 0, pista: "Formal.", why: "Precisar." },
    { fase: "indep", c: ["b4rj-defendre"], k: "choice", ask: "«Mantengo que…»", q: "Elige.", o: ["Je maintiens que…", "Je maintenu que…"], a: 0, why: "<b>maintiens</b>." },
    { fase: "indep", c: ["b4rj-reconnaitre"], k: "fill", ask: "«razón»", q: "Vous avez ___ sur ce point.", acc: ["raison"], why: "<b>raison</b>." },
    { fase: "indep", c: ["b4rj-reconnaitre"], k: "fill", ask: "«pensado»", q: "C'est vrai, je n'y avais pas ___ .", acc: ["pensé"], why: "<b>pensé</b>." },
    { fase: "aplica", c: ["b4rj-reconnaitre", "b4rj-defendre"], k: "match", ask: "Une cada fórmula con su reacción.", q: "Fórmula → reacción", pairs: [["C'est vrai, je n'y avais pas pensé.", "reconocer"], ["Dans une certaine mesure…", "matizar"], ["Je maintiens que…", "defender"], ["Qu'entendez-vous par… ?", "pedir precisión"]], why: "Reacciones." },
    { fase: "aplica", c: ["b4rj-defendre"], k: "spot", ask: "Encuentra el error.", s: "Je [maintenu] que les transports publics doivent être gratuits .", fix: "maintiens", why: "<b>maintiens</b>." },
    { fase: "aplica", c: ["b4rj-defendre"], k: "choice", ask: "«N'importe quoi !» ante el jurado es…", q: "Elige.", o: ["inadecuado", "adecuado"], a: 0, es: true, why: "Inadecuado." },
    { fase: "dominio", c: ["b4rj-reconnaitre"], k: "order", ask: "Ordena: «Tiene razón en ese punto».", tokens: ["Vous avez", "raison", "sur ce point"], why: "<b>Vous avez raison sur ce point</b>" },
    { fase: "dominio", c: ["b4rj-defendre"], k: "choice", ask: "«Qu'entendez-vous par… ?» sirve para…", q: "Elige.", o: ["pedir precisión", "despedirse"], a: 0, es: true, why: "Precisar." },
    { fase: "dominio", c: ["b4rj-reconnaitre", "b4rj-defendre"], k: "listen", say: "Je comprends votre objection, mais je maintiens que cette mesure est nécessaire.", acc: ["Je comprends votre objection, mais je maintiens que cette mesure est nécessaire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je comprends votre objection, mais je maintiens que cette mesure est nécessaire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 67. Les calques de l'espagnol à l'oral ── */
E["rem-calques-oraux"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les calques de l'espagnol à l'oral",
  objetivo: {
    que: "Vas a eliminar los calcos del español que se cuelan al hablar: edad y sensaciones con avoir, el tiempo con il fait, poser une question, avoir lieu, se rendre compte.",
    corto: "J'ai froid, il fait moins cinq. · La réunion aura lieu demain. · Je me suis rendu compte de mon erreur.",
    podras: ["Usar avoir para la edad y las sensaciones: j'ai faim, j'ai froid, j'ai sommeil, j'ai peur, j'ai 20 ans.", "Usar il fait para el tiempo (il fait chaud, il fait beau) y las colocaciones correctas: poser une question, avoir lieu.", "Usar se rendre compte (darse cuenta), se souvenir (acordarse) y tu me manques (te echo de menos)."],
    iconos: ["ic2/microfono", "ic2/pregunta", "ic2/bandera"],
    previos: ["Las expresiones con avoir (A1, lección 64), las colocaciones (B2.1, lección 56) y los verbos que rigen distinto (lección 27)."],
    capacidad: "Ahora hablas francés sin traducir del español."
  },
  requiere: R("ae-sens", "ae-besoin", "ms-fait", "b3co2-prendre", "b4rv-avec"), recupera: ["ae-sens"],
  conceptos: {
    "b4cq-avoir": { n: "sensaciones y edad con avoir: j'ai faim, j'ai soif, j'ai froid, j'ai sommeil, j'ai peur, j'ai 20 ans (nunca «je suis froid / peur / 20 ans»); el tiempo con il fait: il fait chaud, il fait froid, il fait très beau (nunca «il y a froid»)", b: "gr" },
    "b4cq-expressions": { n: "colocaciones y verbos: poser une question (no «faire»), avoir lieu (tener lugar), se rendre compte (darse cuenta: je me suis rendu compte), se souvenir (je me souviens; no «je me recuerdo»), tu me manques (te echo de menos: el sujeto es la persona que falta)", b: "gr" }
  },
  video: {
    titulo: "Calcos del español", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "j'ai froid", seg: [
        { es: "Hola. El español se cuela al hablar; aquí lo frenamos." } ] },
      { v: "frase", filas: [
          { nota: "avoir · il fait", p: 1, partes: [["J'ai froid, il fait moins cinq.", "-", 1]] },
          { nota: "avoir lieu", p: 2, partes: [["La réunion aura lieu demain.", "-", 2]] },
          { nota: "se rendre compte", p: 3, partes: [["Je me suis rendu compte de mon erreur.", "-", 3]] } ], seg: [
        { fr: "J'ai froid, il fait moins cinq.", p: 1 }, { fr: "La réunion aura lieu demain.", p: 2 }, { fr: "Je me suis rendu compte de mon erreur.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tengo hambre.»", o: ["J'ai faim.", "Je suis faim."], a: 0,
        bien: "¡Sí! Sensación: avoir.", mal: "Sensaciones con avoir.",
        seg: [ { es: "Pausa. Avoir." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai faim", "il fait chaud", "poser une question", "avoir lieu", "se rendre compte", "tu me manques"], seg: [
        { es: "Avoir, il fait y las colocaciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El invierno en Lyon", img: "bg-noche", yo: "camila",
    escena: "Camila habla con Hugo de su primer invierno en Lyon.",
    pj: PJ,
    lineas: [
      ["camila", "Je suis froid ! Il y a beaucoup de froid ici…", "¡Soy frío! Aquí hay mucho frío…"],
      ["hugo", "On dit « J'ai froid » et « Il fait froid ». Ferme la fenêtre, s'il te plaît : j'ai froid aussi !", "Se dice «J'ai froid» y «Il fait froid». Cierra la ventana, por favor: ¡yo también tengo frío!"],
      ["camila", "D'accord. Je voudrais poser une question : la fête aura lieu samedi ? Je me suis rendu compte que je n'ai pas l'adresse.", "Vale. Quisiera hacer una pregunta: ¿la fiesta será el sábado? Me di cuenta de que no tengo la dirección."],
      ["hugo", "Oui, samedi. Et ta famille ? — Elle me manque beaucoup. Tu me manques aussi quand tu pars ! En été, il fait très chaud ici et on a soif.", "Sí, el sábado. ¿Y tu familia? — La echo mucho de menos. ¡Tú también me haces falta cuando te vas! En verano aquí hace mucho calor y se tiene sed."]
    ],
    fijate: "Fíjate: j'ai froid / il fait froid (no «je suis froid», «il y a froid»), poser une question, aura lieu, je me suis rendu compte, elle me manque / tu me manques."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Lo que no se traduce palabra por palabra",
      idea: "Sensaciones y edad con avoir: j'ai faim, j'ai soif, j'ai froid, j'ai chaud, j'ai sommeil, j'ai peur, j'ai 20 ans (nunca «je suis froid / peur / 20 ans»). El tiempo atmosférico con il fait: il fait chaud, il fait froid, il fait très beau (nunca «il y a froid»). Colocaciones: poser une question (hacer una pregunta), prendre une décision, avoir lieu (tener lugar). Verbos: se rendre compte (darse cuenta: je me suis rendu compte), se souvenir (acordarse: je me souviens; no «je me recuerdo»). Echar de menos: tu me manques = te echo de menos (el sujeto es quien falta: «je te manque» = tú me echas de menos).",
      intro: "Toca cada expresión.",
      tabla: [["Francés", "Español", "Calco evitado"], [
        ["J'ai faim.", "Tengo hambre.", "avoir"],
        ["Il fait chaud.", "Hace calor.", "il fait"],
        ["Je me suis rendu compte.", "Me di cuenta.", "se rendre compte"],
        ["Le concert aura lieu samedi. · lieu", "El concierto será el sábado.", "avoir lieu"],
        ["Je voudrais poser une question. · poser", "Quisiera hacer una pregunta.", "poser"],
        ["je suis froid = j'ai froid · il y a du soleil fort = il fait très beau · faire une question = poser une question · je me recuerdo = je me souviens", "calco → francés", "resumen"],
        ["J'ai sommeil. · Il fait froid. · J'ai peur. · Tu me manques.", "Tengo sueño · Hace frío · Tengo miedo · Te echo de menos", "Correcto"],
        ["Je suis sommeil. · Il y a froid. · Je suis peur. · Je te manque (= te echo de menos).", "calcos", "Calco"],
        ["Ferme la fenêtre, s'il te plaît, j'ai froid.", "Cierra la ventana, por favor, tengo frío.", "avoir"],
        ["Tu me manques", "Te echo de menos", "manquer"],
        ["Il fait très chaud aujourd'hui et j'ai soif.", "Hoy hace mucho calor y tengo sed.", "il fait · avoir"]
      ]],
      ej: [["J'ai froid, il fait moins cinq.", "Tengo frío, hace cinco bajo cero."], ["La réunion aura lieu demain.", "La reunión tendrá lugar mañana."], ["Je me suis rendu compte de mon erreur.", "Me di cuenta de mi error."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis froid.", "J'ai froid.", "Sensación: avoir."], ["Il y a froid.", "Il fait froid.", "Tiempo: il fait."], ["Je te manque. (para «te echo de menos»)", "Tu me manques.", "El sujeto es quien falta."]] }
  ],
  ejemplos: [
    { sit: "«Tengo hambre.»", resp: "J'ai faim.", pasos: ["avoir."], porque: "Sensación." },
    { sit: "«Hace calor.»", resp: "Il fait chaud.", pasos: ["il fait."], porque: "Tiempo." },
    { sit: "«Me di cuenta.»", resp: "Je me suis rendu compte.", pasos: ["se rendre compte."], porque: "Verbo." }
  ],
  comprueba: [
    { q: "«Tengo sueño» se dice…", o: ["J'ai sommeil.", "Je suis sommeil."], a: 0, b: "gr", porque: "avoir." },
    { q: "«Hace frío» se dice…", o: ["Il fait froid.", "Il y a froid."], a: 0, b: "gr", porque: "il fait." },
    { q: "«Te echo de menos» se dice…", o: ["Tu me manques.", "Je te manque."], a: 0, b: "gr", porque: "Sujeto: quien falta." }
  ],
  practica: [
    { fase: "guiada", c: ["b4cq-avoir", "b4cq-expressions"], k: "sort", ask: "¿Correcto o calco?", q: "Clasifica.", cats: ["Correcto", "Calco"], items: [["J'ai sommeil.", 0], ["Il fait froid.", 0], ["J'ai peur.", 0], ["Tu me manques.", 0], ["Je suis sommeil.", 1], ["Il y a froid.", 1], ["Je suis peur.", 1], ["Je te manque (= te echo de menos).", 1]], pista: "¿Avoir, il fait, manquer?", why: "Calcos." },
    { fase: "guiada", c: ["b4cq-avoir"], k: "choice", ask: "«Tengo hambre.»", q: "Elige.", o: ["J'ai faim.", "Je suis faim."], a: 0, pista: "avoir.", why: "<b>J'ai faim</b>." },
    { fase: "guiada", c: ["b4cq-avoir"], k: "choice", ask: "«Hace calor.»", q: "Elige.", o: ["Il fait chaud.", "Il y a chaud."], a: 0, pista: "il fait.", why: "<b>Il fait</b>." },
    { fase: "indep", c: ["b4cq-expressions"], k: "choice", ask: "«Me di cuenta.»", q: "Elige.", o: ["Je me suis rendu compte.", "Je me suis donné compte."], a: 0, why: "<b>rendu compte</b>." },
    { fase: "indep", c: ["b4cq-expressions"], k: "fill", ask: "«tendrá lugar» (aura …)", q: "Le concert aura ___ samedi.", acc: ["lieu"], why: "<b>lieu</b>." },
    { fase: "indep", c: ["b4cq-expressions"], k: "fill", ask: "«hacer (una pregunta)»", q: "Je voudrais ___ une question.", acc: ["poser"], why: "<b>poser</b>." },
    { fase: "aplica", c: ["b4cq-avoir", "b4cq-expressions"], k: "match", ask: "Une cada calco con su forma correcta.", q: "Calco → francés", pairs: [["je suis froid", "j'ai froid"], ["il y a du soleil fort", "il fait très beau"], ["faire une question", "poser une question"], ["je me recuerdo", "je me souviens"]], why: "Calcos." },
    { fase: "aplica", c: ["b4cq-avoir"], k: "spot", ask: "Encuentra el error.", s: "Ferme la fenêtre , s'il te plaît , je [suis] froid .", fix: "j'ai", why: "<b>j'ai</b> froid." },
    { fase: "aplica", c: ["b4cq-expressions"], k: "choice", ask: "«Te echo de menos» se dice…", q: "Elige.", o: ["Tu me manques.", "Je te manque."], a: 0, why: "<b>Tu me manques</b>." },
    { fase: "dominio", c: ["b4cq-expressions"], k: "order", ask: "Ordena: «Te echo de menos».", tokens: ["Tu", "me", "manques"], why: "<b>Tu me manques</b>" },
    { fase: "dominio", c: ["b4cq-avoir"], k: "choice", ask: "«Tengo sueño» se dice…", q: "Elige.", o: ["J'ai sommeil.", "Je suis sommeil."], a: 0, why: "<b>avoir</b>." },
    { fase: "dominio", c: ["b4cq-avoir", "b4cq-expressions"], k: "listen", say: "Il fait très chaud aujourd'hui et j'ai soif.", acc: ["Il fait très chaud aujourd'hui et j'ai soif."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il fait très chaud aujourd'hui et j'ai soif.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: [] }
};

})();
