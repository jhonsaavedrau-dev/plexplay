/* PLEX PLAY 4.60 — Sistema de enseñanza: las fichas del curso «Francés B2.1» (b21). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también B1.2, el curso anterior).
   B2.1 parte de B1.2: BASE son todos los conceptos de Primeros pasos, A1, A2, B1.1 y B1.2, que las fichas dan por enseñados.
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
  "b1pi-decor", "b1pi-fait", "b1pq-forme", "b1pq-usage", "b1ap-cod", "b1ap-avant", "b1rel-quique", "b1rel-oudont", "b1ge-forme", "b1ge-usage", "b1sj-forme", "b1sj-usage", "b1co-forme", "b1co-usage", "b1op-mode", "b1op-connect", "b1mr-cest", "b1mr-ce", "b1oc-oppo", "b1oc-conc", "b1in-registre", "b1in-mots", "b1vp-a", "b1vp-de", "b1ad-forme", "b1ad-place", "b1pe-trois", "b1pe-passe", "b1rc-ordre", "b1rc-avapres", "b1et-etudes", "b1et-travail", "b1ih-forme", "b1ih-usage", "b1ai-fond", "b1ai-coupe", "b1va-venait", "b1va-allait", "b1fs-forme", "b1fs-quand", "b1fp-choix", "b1fp-si", "b1cp-demander", "b1cp-conseil", "b1rg-forme", "b1rg-usage", "b1cj-sens", "b1cj-futur", "b1aa-prep", "b1aa-recit", "b1rs-intro", "b1rs-structure", "b1ae-oui", "b1ae-non", "b1ip-aff", "b1ip-neg", "b1cc-cod", "b1cc-coi", "b1y-lieu", "b1y-pers", "b1en-qte", "b1en-de", "b1pi-place", "b1pi-exc", "b1rc2-lequel", "b1rc2-contr", "b1cq-forme", "b1cq-indir", "b1pt-usage", "b1pt-reponse", "b1on-sens", "b1on-verbe", "b1to-adj", "b1to-pron", "b1pa-place", "b1pa-sens", "b1mm-choix", "b1mm-sup", "b1ng-mots", "b1ng-place", "b1si-etre", "b1si-autres", "b1ob-obl", "b1ob-int", "b1cs-conseil", "b1cs-suggest", "b1se-voc", "b1se-struct", "b1ad-accord", "b1ad-desac", "b1cd-indic", "b1cd-subj", "b1rf-expl", "b1rf-resume", "b1ex-mots", "b1ex-tel", "b1ca-mots", "b1ca-nonseul", "b1cl-annonce", "b1cl-position", "b1pp-prendre", "b1pp-donner", "b1sp-probleme", "b1sp-demande", "b1pm-demander", "b1pm-repondre", "b1pa-prop", "b1pa-rep", "b1lg-argent", "b1lg-demarches", "b1sa-symptomes", "b1sa-traitement", "b1en-probleme", "b1en-solution", "b1md-presse", "b1md-reseaux", "b1vi-probleme", "b1vi-solution", "b1cs-payer", "b1cs-apres", "b1rl-verbes", "b1rl-famille", "b1cc2-presenter", "b1cc2-avis", "b1ch-fraction", "b1ch-evolution", "b1la-ouverture", "b1la-cloture", "b1fd-voc", "b1fd-passif", "b1ei-humeur", "b1ei-autres", "b1rf2-noms", "b1rf2-verbes",
  "b2si-possible", "b2si-irreel", "b2di-question", "b2di-ordre", "b2pd-ordre", "b2pd-temps", "b2et-passe", "b2et-futur", "b2cc-cause", "b2cc-csq",
  "b2vp-forme", "b2vp-agent", "b2pp-poss", "b2pp-dem", "b2ce-formules", "b2ce-plan", "b2in-pos", "b2in-neg", "b2fa-forme", "b2fa-usage",
  "b2dp-temps", "b2dp-mots", "b2bu-inf", "b2bu-subj", "b2si2-meme", "b2si2-autre", "b2ip-forme", "b2ip-usage", "b2cn-evol", "b2cn-egal",
  "b2cp-forme", "b2cp-si", "b2cj-present", "b2cj-passe", "b2sp-forme", "b2sp-usage", "b2sc-subj", "b2sc-indic", "b2fd-cond", "b2fd-passe",
  "b2ct-anter", "b2ct-poster", "b2pc-forme", "b2pc-sujet", "b2ps-reg", "b2ps-irr", "b2fc-faire", "b2fc-se", "b2vs-compte", "b2vs-autres",
  "b2vc-jouer", "b2vc-manquer", "b2no-suff", "b2no-autres", "b2sr-subj", "b2sr-indic", "b2cd-cas", "b2cd-cond", "b2oi-conj", "b2oi-mots",
  "b2ro-selon", "b2ro-comme", "b2vi-neutre", "b2vi-concede", "b2pe-intro", "b2pe-plan", "b2pb-forme", "b2pb-indir", "b2pg-schema", "b2pg-conn",
  "b2ca-conceder", "b2ca-refuter", "b2lm-plan", "b2lm-formules", "b2cr-regles", "b2cr-verbes", "b2sh-subj", "b2sh-autres", "b2at-cond", "b2at-limiter",
  "b2ii-mots", "b2ii-struct", "b2mt-contrat", "b2mt-droits", "b2ed-etapes", "b2ed-titres", "b2sa-systeme", "b2sa-prev", "b2ti-voc", "b2ti-risques",
  "b2it-pers", "b2it-vote", "b2jd-pers", "b2jd-peine", "b2ec-banque", "b2ec-budget", "b2vu-espaces", "b2vu-mobilite", "b2dv-pers", "b2dv-integr",
  "b2eg-travail", "b2eg-maison", "b2ad-produits", "b2ad-habitudes", "b2tr-probl", "b2tr-sol", "b2bv-pers", "b2bv-actions", "b2fa-corps", "b2fa-mots",
  "b2ps2-pref", "b2ps2-suff", "b2vp2-faire", "b2vp2-autres", "b2an-echelle", "b2an-degre", "b2mo-sens", "b2mo-registre", "b2rs-mots", "b2rs-syntaxe",
  "b2tp-appel", "b2tp-accueil", "b2po-signes", "b2po-maj", "b2ac-demi", "b2ac-couleurs", "b2pl-al", "b2pl-x", "b2ne-s", "b2ne-et",
  "b2fr-belsui", "b2fr-quebec", "b2pv-patience", "b2pv-autres"
];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ B2.1·1 · Relatifs et modes ================================ */
E["b21-relatifs-composes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les pronoms relatifs composés",
  objetivo: {
    que: "Vas a dominar lequel y sus formas después de una preposición: pour laquelle, auquel, au bord duquel, parmi lesquels.",
    corto: "la raison pour laquelle · le projet auquel je participe · le lac au bord duquel…",
    podras: ["Usar preposición + lequel / laquelle / lesquels / lesquelles para una cosa: la raison pour laquelle.", "Contraer con à y de: auquel, auxquels, auxquelles; duquel, desquels, desquelles (con locuciones como au bord de, près de).", "Distinguir dont (verbo + de) de duquel (locución + de) y usar preposición + qui para personas."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/engranaje"],
    previos: ["Lequel, auquel, duquel (B1.1, lección 33) y los pronombres relativos (B1.1, lección 4)."],
    capacidad: "Ahora escribes frases complejas como en un ensayo."
  },
  requiere: R("b1rc2-lequel", "b1rc2-contr", "b1rel-oudont"), recupera: ["b1rc2-contr"],
  conceptos: {
    "b3rc-formes": { n: "preposición + lequel / laquelle / lesquels / lesquelles (cosa); auquel, auxquels, auxquelles; à laquelle; parmi lesquels", b: "gr" },
    "b3rc-duquel": { n: "locución con de (au bord de, près de, en face de) → duquel / de laquelle / desquels; verbo + de → dont; persona → prép. + qui", b: "gr" }
  },
  video: {
    titulo: "Lequel y sus formas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "pour laquelle", seg: [
        { es: "Hola. Después de una preposición, para una cosa: lequel." } ] },
      { v: "frase", filas: [
          { nota: "pour + laquelle", p: 1, partes: [["la raison pour laquelle il est parti", "-", 1]] },
          { nota: "à + lequel", p: 2, partes: [["le projet auquel je participe", "-", 2]] },
          { nota: "au bord de + lequel", p: 3, partes: [["le lac au bord duquel on a dormi", "-", 3]] } ], seg: [
        { fr: "la raison pour laquelle il est parti", p: 1 }, { fr: "le projet auquel je participe", p: 2 }, { fr: "le lac au bord duquel on a dormi", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Las razones por las cuales se fue siguen siendo oscuras.»", o: ["Les raisons pour lesquelles il est parti restent obscures.", "Les raisons pour lesquels il est parti restent obscures."], a: 0,
        bien: "¡Sí! Raisons es femenino plural.", mal: "Concuerda con raisons: lesquelles.",
        seg: [ { es: "Pausa. Por las cuales." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pour laquelle", "auquel", "à laquelle", "duquel", "lesquels"], seg: [
        { es: "Lequel concuerda con la cosa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La memoria de grado", img: "bg-biblioteca", yo: "camila",
    escena: "Camila le muestra a Hugo su memoria de grado.",
    pj: PJ,
    lineas: [
      ["camila", "C'est l'ordinateur sur lequel j'ai rédigé tout mon mémoire. L'économie circulaire est un sujet auquel je m'intéresse beaucoup.", "Es el computador en el que redacté toda mi memoria. La economía circular es un tema que me interesa mucho."],
      ["hugo", "Et la conférence à laquelle tu as assisté ?", "¿Y la conferencia a la que asististe?"],
      ["camila", "Il y avait vingt finalistes, parmi lesquels trois Colombiens ! Voici le stylo avec lequel j'ai signé mon contrat.", "¡Había veinte finalistas, entre los cuales tres colombianos! Este es el bolígrafo con el que firmé mi contrato."],
      ["hugo", "Et le parc près duquel tu habites ? — Il est magnifique au printemps. C'est la raison pour laquelle j'ai choisi ce quartier.", "¿Y el parque cerca del cual vives? — Es precioso en primavera. Es la razón por la que elegí este barrio."]
    ],
    fijate: "Fíjate: sur lequel, auquel (s'intéresser à), à laquelle (assister à), parmi lesquels, avec lequel, près duquel, pour laquelle."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Lequel, auquel, duquel",
      idea: "Preposición + cosa → lequel, laquelle, lesquels, lesquelles, que concuerdan con el antecedente: la raison pour laquelle, l'ordinateur sur lequel. Con à se contraen: auquel, auxquels, auxquelles (pero à laquelle): le projet auquel je participe. Con una locución que termina en de (près de, au bord de, en face de, au pied de) → duquel, de laquelle, desquels, desquelles: le lac au bord duquel on a dormi. Si el de pertenece al verbo (parler de, être fier de), se usa dont: le livre dont je te parle. Para personas, preposición + qui: la femme avec qui je travaille.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["la raison pour laquelle · pour laquelle · laquelle", "la razón por la cual", "prép. + laquelle"],
        ["les raisons pour lesquelles · lesquelles", "las razones por las cuales", "femenino plural"],
        ["le stylo avec lequel · lequel · sur lequel", "el bolígrafo con el que", "prép. + lequel"],
        ["parmi lesquels · lesquels", "entre los cuales", "masculino plural"],
        ["le projet auquel je participe · auquel · un sujet auquel je m'intéresse", "el proyecto en el que participo", "à + lequel"],
        ["une question à laquelle · à laquelle", "una pregunta en la que", "à laquelle (sin contracción)"],
        ["les conférences auxquelles j'ai assisté · auxquelles · les outils grâce auxquels · auxquels", "las conferencias a las que asistí · las herramientas gracias a las cuales", "à + lesquel(le)s"],
        ["le parc près duquel · duquel · le bâtiment en face duquel", "el parque cerca del cual · el edificio frente al cual", "locución + de"],
        ["les montagnes au pied desquelles · desquelles", "las montañas al pie de las cuales", "locución + de"],
        ["La rivière au bord ___ · L'arbre à l'ombre ___ · Le quartier au centre ___ · Les pays au milieu ___", "locución con de", "duquel / de laquelle / desquels…"],
        ["Le livre ___ je te parle · Le collègue ___ le fils est médecin · Le succès ___ elle est fière · L'accident ___ tu m'as parlé", "verbo o nombre + de", "dont"]
      ]],
      ej: [["la raison pour laquelle il est parti", "la razón por la cual se fue"], ["le projet auquel je participe", "el proyecto en el que participo"], ["le lac au bord duquel on a dormi", "el lago a orillas del cual dormimos"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la raison pour quoi…", "la raison pour laquelle…", "Preposición + cosa → lequel."], ["les raisons pour lesquels", "les raisons pour lesquelles", "Concuerda con raisons (femenino)."], ["le parc près dont…", "le parc près duquel…", "Locución con de → duquel."]] }
  ],
  ejemplos: [
    { sit: "«una pregunta en la que todavía no he pensado» (réfléchir à)", resp: "une question à laquelle je n'ai pas encore réfléchi", pasos: ["réfléchir à + question (fem.)."], porque: "à laquelle." },
    { sit: "«el parque cerca del cual vivimos»", resp: "le parc près duquel nous habitons", pasos: ["près de + parc (masc.)."], porque: "duquel." },
    { sit: "«veinte finalistas, entre los cuales tres colombianos»", resp: "vingt finalistes, parmi lesquels trois Colombiens", pasos: ["parmi + masculino plural."], porque: "lesquels." }
  ],
  comprueba: [
    { q: "Después de una preposición, para una cosa, se usa…", o: ["lequel y sus formas", "qui"], a: 0, b: "gr", porque: "pour laquelle." },
    { q: "à + lequel da…", o: ["auquel", "à lequel"], a: 0, b: "gr", porque: "Contracción." },
    { q: "Con una locución como au bord de se usa…", o: ["duquel", "dont"], a: 0, b: "gr", porque: "au bord duquel." }
  ],
  practica: [
    { fase: "guiada", c: ["b3rc-duquel"], k: "sort", ask: "¿Dont o duquel / de laquelle…?", q: "Clasifica.", cats: ["dont", "duquel / de laquelle / desquels…"], items: [["Le livre ___ je te parle", 0], ["Le collègue ___ le fils est médecin", 0], ["Le succès ___ elle est fière", 0], ["L'accident ___ tu m'as parlé", 0], ["La rivière au bord ___ nous avons pique-niqué", 1], ["L'arbre à l'ombre ___ il dort", 1], ["Le quartier au centre ___ se trouve la gare", 1], ["Les pays au milieu ___ se trouve la Suisse", 1]], pista: "¿El de es del verbo o de una locución?", why: "dont / duquel." },
    { fase: "guiada", c: ["b3rc-formes"], k: "choice", ask: "«Es una pregunta en la que todavía no he pensado» (réfléchir à).", q: "«C'est une question ___ je n'ai pas encore réfléchi.»", o: ["à laquelle", "auquel"], a: 0, pista: "Question: femenino.", why: "<b>à laquelle</b>." },
    { fase: "guiada", c: ["b3rc-duquel"], k: "choice", ask: "«El parque cerca del cual vivimos.»", q: "«Le parc près ___ nous habitons est magnifique au printemps.»", o: ["duquel", "dont"], a: 0, pista: "Locución.", why: "<b>duquel</b>." },
    { fase: "indep", c: ["b3rc-formes"], k: "choice", ask: "«Había veinte finalistas, entre los cuales tres colombianos.»", q: "«Il y avait vingt finalistes, parmi ___ trois Colombiens.»", o: ["lesquels", "lesquelles"], a: 0, why: "<b>lesquels</b>." },
    { fase: "indep", c: ["b3rc-formes"], k: "fill", ask: "Relativo después de avec (le stylo).", q: "Voici le stylo avec ___ le traité a été signé.", acc: ["lequel"], why: "<b>lequel</b>." },
    { fase: "indep", c: ["b3rc-formes"], k: "fill", ask: "s'intéresser à + un sujet.", q: "L'économie circulaire est un sujet ___ je m'intéresse beaucoup.", acc: ["auquel"], why: "<b>auquel</b>." },
    { fase: "aplica", c: ["b3rc-formes", "b3rc-duquel"], k: "match", ask: "Une cada principio con su relativo.", q: "Antecedente → relativo", pairs: [["Le bâtiment en face ___ je travaille", "duquel"], ["Les conférences ___ j'ai assisté", "auxquelles"], ["La raison pour ___ je refuse", "laquelle"], ["Les outils grâce ___ nous avançons", "auxquels"], ["Les montagnes au pied ___ se trouve le village", "desquelles"]], why: "Formas." },
    { fase: "aplica", c: ["b3rc-formes"], k: "spot", ask: "Encuentra el error.", s: "Les raisons pour [lesquels] il est parti restent obscures .", fix: "lesquelles", why: "<b>lesquelles</b>." },
    { fase: "aplica", c: ["b3rc-duquel"], k: "spot", ask: "Encuentra el error.", s: "Le lac au bord [dont] on a dormi était gelé .", fix: "duquel", why: "<b>duquel</b>." },
    { fase: "dominio", c: ["b3rc-formes"], k: "order", ask: "Ordena: «Es el computador en el que redacté toda mi memoria».", tokens: ["C'est l'ordinateur", "sur lequel", "j'ai rédigé tout mon mémoire."], why: "<b>C'est l'ordinateur sur lequel j'ai rédigé tout mon mémoire.</b>" },
    { fase: "dominio", c: ["b3rc-formes"], k: "choice", ask: "«La razón por la cual se fue.»", q: "«la raison pour ___ il est parti»", o: ["laquelle", "quoi"], a: 0, why: "<b>laquelle</b>." },
    { fase: "dominio", c: ["b3rc-formes", "b3rc-duquel"], k: "listen", say: "L'économie circulaire est un sujet auquel je m'intéresse beaucoup.", acc: ["L'économie circulaire est un sujet auquel je m'intéresse beaucoup."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'économie circulaire est un sujet auquel je m'intéresse beaucoup.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Suisse"], previo: [] }
};

E["b21-conditionnel-passe"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le conditionnel passé : regret, reproche, information non confirmée",
  objetivo: {
    que: "Vas a usar el conditionnel passé con todos sus valores: arrepentimiento, reproche, consejo a posteriori, hipótesis irreal y rumor de prensa.",
    corto: "J'aurais aimé venir. · Tu aurais dû me le dire ! · L'incendie aurait fait trois victimes.",
    podras: ["Expresar arrepentimiento y consejo a posteriori: j'aurais aimé, à ta place, j'aurais refusé.", "Hacer un reproche: tu aurais pu m'appeler !, vous auriez dû…", "Combinar la hipótesis irreal (si + plus-que-parfait) y el condicional presente para una consecuencia actual: si j'avais accepté, je vivrais à Lyon."],
    iconos: ["ic2/reloj-arena", "ic2/pergamino", "ic2/libro"],
    previos: ["El conditionnel passé (B1.2, lección 16) y el condicional de la prensa (B1.2, lección 17)."],
    capacidad: "Ahora matizas lo que pudo ser y no fue."
  },
  requiere: R("b2cp-forme", "b2cp-si", "b2cj-passe"), recupera: ["b2cp-si"],
  conceptos: {
    "b3cp-valeurs": { n: "valores: regret (j'aurais aimé), reproche (tu aurais pu / dû), conseil après coup (à ta place, j'aurais…), information non confirmée (aurait fait)", b: "gr" },
    "b3cp-hyp": { n: "si + plus-que-parfait → conditionnel passé (irréel du passé) o conditionnel présent (consecuencia actual: je vivrais); auxiliar être / avoir", b: "gr" }
  },
  video: {
    titulo: "Lo que habría sido", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "tu aurais dû", seg: [
        { es: "Hola. Un tiempo, cinco usos." } ] },
      { v: "frase", filas: [
          { nota: "reproche", p: 1, partes: [["Tu aurais dû me le dire plus tôt !", "-", 1]] },
          { nota: "rumor", p: 2, partes: [["L'incendie aurait fait trois victimes.", "-", 2]] },
          { nota: "efecto hoy", p: 3, partes: [["Si j'avais accepté ce poste, je vivrais à Lyon.", "-", 3]] } ], seg: [
        { fr: "Tu aurais dû me le dire plus tôt !", p: 1 }, { fr: "L'incendie aurait fait trois victimes.", p: 2 }, { fr: "Si j'avais accepté ce poste, je vivrais à Lyon.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Si hubiera sabido, no habría venido.»", o: ["Si j'avais su, je ne serais pas venu.", "Si j'aurais su, je ne serais pas venu."], a: 0,
        bien: "¡Sí! Nunca condicional tras si.", mal: "Tras si: plus-que-parfait.",
        seg: [ { es: "Pausa. Si hubiera sabido." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'aurais aimé", "tu aurais dû", "vous auriez pu", "il aurait fait", "je serais venu"], seg: [
        { es: "Regret, reproche, rumeur.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El concierto perdido", img: "bg-cafe", yo: "camila",
    escena: "Camila llegó tarde al concierto.",
    pj: PJ,
    lineas: [
      ["camila", "J'aurais tant aimé voir ce spectacle ! Si nous étions partis plus tôt, nous n'aurions pas raté le début.", "¡Me habría gustado tanto ver ese espectáculo! Si hubiéramos salido antes, no nos habríamos perdido el comienzo."],
      ["hugo", "Tu aurais dû me le dire plus tôt ! Si tu m'avais prévenu, je serais venu te chercher.", "¡Debiste decírmelo antes! Si me hubieras avisado, habría ido a buscarte."],
      ["camila", "À ta place, j'aurais refusé ce travail du soir. Si j'avais accepté le poste à Lyon l'an dernier, aujourd'hui je vivrais là-bas.", "Yo que tú, habría rechazado ese trabajo nocturno. Si hubiera aceptado el puesto en Lyon el año pasado, hoy viviría allá."],
      ["hugo", "Tu as lu ? Selon plusieurs témoins, le conducteur du bus aurait grillé le feu rouge. Le suspect se serait enfui vers la frontière.", "¿Leíste? Según varios testigos, el conductor del bus se habría pasado el semáforo en rojo. El sospechoso habría huido hacia la frontera."]
    ],
    fijate: "Fíjate: j'aurais aimé (regret), tu aurais dû (reproche), à ta place, j'aurais refusé (conseil), je serais venu, je vivrais (efecto hoy), aurait grillé, se serait enfui (rumor)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los valores del conditionnel passé",
      idea: "Forma: aurais / serais + participio (mismo auxiliar y concordancia que el passé composé). Valores: arrepentimiento (J'aurais aimé venir. J'aurais dû réviser), reproche (Tu aurais pu m'appeler ! Vous auriez pu frapper avant d'entrer !), consejo a posteriori (À ta place, j'aurais refusé), información no confirmada en la prensa (L'incendie aurait fait trois victimes) e irreal del pasado: si + plus-que-parfait → conditionnel passé (Si j'avais su, je ne serais pas venu). Si la consecuencia es actual, conditionnel présent: Si j'avais accepté ce poste, aujourd'hui je vivrais à Lyon.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Valor"], [
        ["J'aurais tant aimé voir ce spectacle. · j'aurais aimé", "Me habría gustado tanto ver ese espectáculo.", "regret"],
        ["Tu aurais dû me le dire plus tôt ! · aurais dû · tu aurais dû", "¡Debiste decírmelo antes!", "reproche"],
        ["Vous auriez pu frapper avant d'entrer ! · vous auriez pu", "¡Podrían haber tocado antes de entrar!", "reproche"],
        ["À ta place, j'aurais refusé cette offre.", "Yo que tú, habría rechazado esa oferta.", "conseil après coup"],
        ["Le suspect se serait enfui vers la frontière. · il aurait fait · aurait grillé", "El sospechoso habría huido hacia la frontera.", "information non confirmée"],
        ["Si elle avait pris le train, elle serait arrivée à l'heure.", "Si hubiera tomado el tren, habría llegado a tiempo.", "irréel du passé"],
        ["Si j'avais su, je ne serais pas venu. · avais · serais venu · je serais venu", "Si hubiera sabido, no habría venido.", "si + pqp"],
        ["Si j'avais accepté ce poste, je vivrais à Lyon. · vivrais", "Si hubiera aceptado el puesto, viviría en Lyon.", "consecuencia actual"],
        ["partir · se tromper · naître · rester → il serait…", "irse · equivocarse · nacer · quedarse", "être"],
        ["pouvoir · prendre · démissionner · réussir → il aurait…", "poder · tomar · renunciar · lograr", "avoir"],
        ["une information non confirmée", "una información no confirmada", "prensa"]
      ]],
      ej: [["J'aurais aimé venir.", "Me habría gustado venir."], ["Tu aurais dû réviser.", "Deberías haber repasado."], ["Si j'avais su, je ne serais pas venu.", "Si hubiera sabido, no habría venido."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Si j'aurais su…", "Si j'avais su…", "Nunca condicional después de si."], ["Il aurait parti plus tôt.", "Il serait parti plus tôt.", "partir va con être."], ["Si j'avais accepté, aujourd'hui j'aurais vécu à Lyon.", "Si j'avais accepté, aujourd'hui je vivrais à Lyon.", "Consecuencia actual: condicional presente."]] }
  ],
  ejemplos: [
    { sit: "«Según una nota de la AFP, el incendio habría dejado tres víctimas.»", resp: "Une information non confirmée", pasos: ["Prensa + condicional."], porque: "Rumor." },
    { sit: "«¡Debiste decírmelo antes!»", resp: "Tu aurais dû me le dire plus tôt !", pasos: ["devoir en conditionnel passé."], porque: "Reproche." },
    { sit: "«Si hubiera aceptado ese puesto el año pasado, hoy viviría en Lyon.»", resp: "Si j'avais accepté ce poste l'an dernier, aujourd'hui je vivrais à Lyon.", pasos: ["Hipótesis pasada.", "Consecuencia actual."], porque: "Hipótesis mixta." }
  ],
  comprueba: [
    { q: "«Tu aurais pu m'appeler !» expresa…", o: ["un reproche", "una promesa"], a: 0, b: "gr", porque: "Reproche." },
    { q: "Tras si, en la hipótesis irreal del pasado, va…", o: ["plus-que-parfait", "conditionnel passé"], a: 0, b: "gr", porque: "si j'avais su." },
    { q: "«Il aurait grillé le feu rouge» (prensa) significa…", o: ["que no está confirmado", "que es seguro"], a: 0, b: "gr", porque: "Rumor." }
  ],
  practica: [
    { fase: "guiada", c: ["b3cp-hyp"], k: "sort", ask: "¿Il serait… o il aurait…?", q: "Clasifica.", cats: ["Il serait… (être)", "Il aurait… (avoir)"], items: [["partir", 0], ["se tromper", 0], ["naître", 0], ["rester", 0], ["pouvoir", 1], ["prendre", 1], ["démissionner", 1], ["réussir", 1]], pista: "Movimiento y pronominales: être.", why: "Auxiliares." },
    { fase: "guiada", c: ["b3cp-valeurs"], k: "choice", ask: "«¡Debiste decírmelo antes!»", q: "«Tu ___ me le dire plus tôt !»", o: ["aurais dû", "avais dû"], a: 0, pista: "Reproche.", why: "<b>aurais dû</b>." },
    { fase: "guiada", c: ["b3cp-valeurs"], k: "choice", es: true, ask: "«Selon une dépêche de l'AFP, l'incendie aurait fait trois victimes.» Es…", q: "Elige.", o: ["Une information non confirmée", "Un hecho confirmado"], a: 0, pista: "Prensa.", why: "Rumor." },
    { fase: "indep", c: ["b3cp-hyp"], k: "choice", ask: "«Si hubiera aceptado ese puesto el año pasado, hoy viviría en Lyon.»", q: "«Si j'avais accepté ce poste l'an dernier, aujourd'hui je ___ à Lyon.»", o: ["vivrais", "aurais vécu"], a: 0, why: "Consecuencia actual: <b>vivrais</b>." },
    { fase: "indep", c: ["b3cp-hyp"], k: "fill", ask: "Conditionnel passé de venir (je).", q: "Si tu m'avais prévenu, je ___ te chercher à l'aéroport.", acc: ["serais venu", "serais venue"], why: "<b>serais venu</b>." },
    { fase: "indep", c: ["b3cp-valeurs"], k: "fill", ask: "Conditionnel passé de griller (información no confirmada).", q: "Selon plusieurs témoins, le conducteur ___ le feu rouge.", acc: ["aurait grillé"], why: "<b>aurait grillé</b>." },
    { fase: "aplica", c: ["b3cp-valeurs", "b3cp-hyp"], k: "match", ask: "Une cada frase con su valor.", q: "Frase → valor", pairs: [["J'aurais tant aimé voir ce spectacle.", "regret"], ["Vous auriez pu frapper avant d'entrer !", "reproche"], ["Le suspect se serait enfui vers la frontière.", "information non confirmée"], ["Si elle avait pris le train, elle serait arrivée à l'heure.", "irréel du passé"], ["À ta place, j'aurais refusé cette offre.", "conseil après coup"]], why: "Valores." },
    { fase: "aplica", c: ["b3cp-hyp"], k: "spot", ask: "Encuentra el error.", s: "Si j' [aurais] su , je ne serais pas venu .", fix: "avais", why: "<b>avais</b>." },
    { fase: "aplica", c: ["b3cp-hyp"], k: "spot", ask: "Encuentra el error.", s: "Sans ce retard , il [aurait] parti à l'heure .", fix: "serait", why: "<b>serait</b>." },
    { fase: "dominio", c: ["b3cp-hyp"], k: "order", ask: "Ordena: «Si hubiéramos salido antes, no nos habríamos perdido el comienzo de la película».", tokens: ["Si nous étions partis plus tôt,", "nous n'aurions pas raté", "le début du film"], why: "<b>Si nous étions partis plus tôt, nous n'aurions pas raté le début du film</b>" },
    { fase: "dominio", c: ["b3cp-valeurs"], k: "choice", ask: "«¡Podrían haber tocado antes de entrar!»", q: "«Vous ___ frapper avant d'entrer !»", o: ["auriez pu", "aviez pu"], a: 0, why: "<b>auriez pu</b>." },
    { fase: "dominio", c: ["b3cp-valeurs", "b3cp-hyp"], k: "listen", say: "Tu aurais dû me le dire plus tôt !", acc: ["Tu aurais dû me le dire plus tôt !", "Tu aurais dû me le dire plus tôt!", "Tu aurais dû me le dire plus tôt"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu aurais dû me le dire plus tôt !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "AFP"], previo: [] }
};

E["b21-subjonctif-passe"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le subjonctif passé ; indicatif ou subjonctif après l'opinion et le sentiment",
  objetivo: {
    que: "Vas a reaccionar a algo ya ocurrido con el subjuntivo pasado y a elegir bien entre indicativo y subjuntivo tras los verbos de opinión.",
    corto: "Je suis heureux que tu aies réussi. · Je crois qu'il viendra. · Je ne pense pas qu'il soit parti.",
    podras: ["Formar el subjuntivo pasado: aie / sois + participio, también con pronominales (qu'il se soit levé).", "Usar subjuntivo tras sentimiento, duda y opinión negativa (je ne pense pas que, je doute que).", "Usar indicativo tras certeza y opinión afirmativa (je pense que, il est évident que) y tras espérer que."],
    iconos: ["ic2/corazon", "ic2/pregunta", "ic2/bombilla"],
    previos: ["El subjuntivo pasado (B1.2, lección 18) y subjuntivo o infinitivo (B1.2, lección 13)."],
    capacidad: "Ahora no dudas entre «je pense qu'il soit» y «je pense qu'il est»."
  },
  requiere: R("b2sp-forme", "b2sp-usage", "b2si2-autre"), recupera: ["b2sp-forme"],
  conceptos: {
    "b3sj-passe": { n: "subjuntivo pasado: aie / sois + participio (qu'il ait eu, qu'il soit parti, qu'il se soit levé); acción anterior al sentimiento", b: "gr" },
    "b3sj-mode": { n: "+ subjuntivo: je ne pense pas que, je doute que, je regrette que, je suis surpris que; + indicativo: je pense que, il est évident que, il me semble que, j'espère que", b: "gr" }
  },
  video: {
    titulo: "Opinión y modo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "je pense que / je ne pense pas que", seg: [
        { es: "Hola. La negación cambia el modo." } ] },
      { v: "dos",
        a: { tag: "afirmativo", fr: "Je crois que ce projet est une bonne idée.", es: "indicativo" },
        b: { tag: "negativo", fr: "Je ne pense pas qu'il ait raison.", es: "subjuntivo" },
        seg: [ { es: "Opinión afirmativa:", p: 1 }, { fr: "Je crois que ce projet est une bonne idée.", p: 1 }, { es: "Opinión negativa:", p: 2 }, { fr: "Je ne pense pas qu'il ait raison.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Espero que hayas descansado bien en las vacaciones.»", o: ["J'espère que tu t'es bien reposé pendant les vacances.", "J'espère que tu te sois bien reposé pendant les vacances."], a: 0,
        bien: "¡Sí! Espérer: indicativo.", mal: "Espérer que + indicativo, aunque el español use subjuntivo.",
        seg: [ { es: "Pausa. Espero que hayas descansado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qu'il ait eu", "qu'il soit parti", "je ne pense pas que", "je doute que", "j'espère que"], seg: [
        { es: "Duda y sentimiento: subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La sustentación de Camila", img: "bg-universidad", yo: "camila",
    escena: "Hugo felicita a Camila después de su sustentación.",
    pj: PJ,
    lineas: [
      ["hugo", "Je suis heureux que tu aies obtenu ton diplôme ! Je suis désolé de ne pas avoir pu venir à ta soutenance.", "¡Me alegra que hayas obtenido tu título! Siento no haber podido ir a tu sustentación."],
      ["camila", "Merci ! Nous regrettons que le directeur ne soit pas venu à la réunion d'hier. Je doute fort qu'ils aient reçu le message.", "¡Gracias! Lamentamos que el director no haya venido a la reunión de ayer. Dudo mucho que hayan recibido el mensaje."],
      ["hugo", "Je crois que ton projet est une bonne idée. Mais je ne pense pas que Paul ait raison sur ce point.", "Creo que tu proyecto es una buena idea. Pero no creo que Paul tenga razón en ese punto."],
      ["camila", "J'espère que tu t'es bien reposé pendant les vacances, toi ! Je suis ravie que vous ayez accepté notre invitation hier soir.", "¡Espero que tú hayas descansado bien en las vacaciones! Me encanta que hayan aceptado nuestra invitación anoche."]
    ],
    fijate: "Fíjate: que tu aies obtenu, ne soit pas venu, qu'ils aient reçu, que Paul ait raison, que vous ayez accepté (subjuntivo); je crois que… est, j'espère que tu t'es (indicativo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Subjuntivo pasado y elección del modo",
      idea: "Subjuntivo pasado: aie / sois + participio: que tu aies réussi, qu'il soit parti, qu'il se soit levé. Sirve para reaccionar a algo ya ocurrido: Je suis heureux que tu aies obtenu ton diplôme. Modo tras la opinión y el sentimiento: sentimiento, duda u opinión negativa → subjuntivo (je regrette que, je doute que, je suis surpris que, je ne pense pas que); certeza u opinión afirmativa → indicativo (je pense que, je crois que, il est évident que, il me semble que). Y, a diferencia del español, espérer que + indicativo: J'espère qu'il viendra.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["Je pense que… · Il est évident que… · J'espère que… · Il me semble que…", "Pienso que… · Es evidente que… · Espero que… · Me parece que…", "+ indicatif"],
        ["Je ne pense pas que… · Je doute que… · Je regrette que… · Je suis surpris que…", "No creo que… · Dudo que… · Lamento que… · Me sorprende que…", "+ subjonctif"],
        ["partir → qu'il soit parti · avoir → qu'il ait eu · être → qu'il ait été", "que se haya ido · que haya tenido · que haya sido", "subjuntivo pasado"],
        ["faire → qu'il ait fait · se lever → qu'il se soit levé", "que haya hecho · que se haya levantado", "subjuntivo pasado"],
        ["que vous ayez accepté · ayez accepté", "que hayan aceptado", "avoir"],
        ["qu'ils aient reçu · aient reçu", "que hayan recibido", "avoir"],
        ["qu'il ne soit pas venu · soit", "que no haya venido", "être"],
        ["Je ne pense pas qu'il ait raison. · ait", "No creo que tenga razón.", "subjuntivo"],
        ["Je crois que ce projet est une bonne idée. · est", "Creo que este proyecto es una buena idea.", "indicativo"],
        ["J'espère que tu t'es bien reposé. · t'es", "Espero que hayas descansado bien.", "indicativo"],
        ["J'espère qu'il viendra.", "Espero que venga.", "indicativo"]
      ]],
      ej: [["Je suis heureux que tu aies obtenu ton diplôme.", "Me alegra que hayas obtenido tu título."], ["J'espère qu'il viendra.", "Espero que venga."], ["Je ne pense pas qu'il soit parti.", "No creo que se haya ido."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'espère qu'il vienne.", "J'espère qu'il viendra.", "espérer → indicativo."], ["Je ne pense pas qu'il a raison.", "Je ne pense pas qu'il ait raison.", "Opinión negativa → subjuntivo."], ["Je crois que ce projet soit une bonne idée.", "Je crois que ce projet est une bonne idée.", "Opinión afirmativa → indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Espero que hayas descansado bien en las vacaciones.»", resp: "J'espère que tu t'es bien reposé pendant les vacances.", pasos: ["espérer → indicativo."], porque: "Excepción." },
    { sit: "«Dudo mucho que hayan recibido el mensaje antes de la reunión de ayer.»", resp: "Je doute fort qu'ils aient reçu le message avant la réunion d'hier.", pasos: ["Duda → subjuntivo pasado."], porque: "Duda." },
    { sit: "«Creo que este proyecto es una buena idea.»", resp: "Je crois que ce projet est une bonne idée.", pasos: ["Opinión afirmativa → indicativo."], porque: "Certeza." }
  ],
  comprueba: [
    { q: "«Je ne pense pas que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Opinión negativa." },
    { q: "«J'espère que» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Excepción." },
    { q: "El subjuntivo pasado de se lever (il) es…", o: ["qu'il se soit levé", "qu'il s'ait levé"], a: 0, b: "gr", porque: "Pronominal → être." }
  ],
  practica: [
    { fase: "guiada", c: ["b3sj-mode"], k: "sort", ask: "¿+ indicativo o + subjuntivo?", q: "Clasifica.", cats: ["+ indicatif", "+ subjonctif"], items: [["Je pense que…", 0], ["Il est évident que…", 0], ["J'espère que…", 0], ["Il me semble que…", 0], ["Je ne pense pas que…", 1], ["Je doute que…", 1], ["Je regrette que…", 1], ["Je suis surpris que…", 1]], pista: "¿Certeza o duda / sentimiento?", why: "Modos." },
    { fase: "guiada", c: ["b3sj-mode"], k: "choice", ask: "«Espero que hayas descansado bien en las vacaciones.»", q: "«J'espère que tu ___ bien reposé pendant les vacances.»", o: ["t'es", "te sois"], a: 0, pista: "espérer.", why: "<b>t'es</b>." },
    { fase: "guiada", c: ["b3sj-mode"], k: "choice", ask: "«Creo que este proyecto es una buena idea.»", q: "«Je crois que ce projet ___ une bonne idée.»", o: ["est", "soit"], a: 0, pista: "Afirmativo.", why: "<b>est</b>." },
    { fase: "indep", c: ["b3sj-passe"], k: "choice", ask: "«Dudo mucho que hayan recibido el mensaje antes de la reunión de ayer.»", q: "«Je doute fort qu'ils ___ le message avant la réunion d'hier.»", o: ["aient reçu", "ont reçu"], a: 0, why: "<b>aient reçu</b>." },
    { fase: "indep", c: ["b3sj-passe"], k: "fill", ask: "Subjuntivo pasado de accepter (vous).", q: "Je suis ravie que vous ___ notre invitation hier soir.", acc: ["ayez accepté"], why: "<b>ayez accepté</b>." },
    { fase: "indep", c: ["b3sj-passe"], k: "fill", ask: "Subjuntivo de être (auxiliar).", q: "Nous regrettons que le directeur ne ___ pas venu à la réunion d'hier.", acc: ["soit"], why: "<b>soit</b>." },
    { fase: "aplica", c: ["b3sj-passe"], k: "match", ask: "Une cada verbo con su subjuntivo pasado.", q: "Infinitivo → subjuntivo pasado (il)", pairs: [["partir", "qu'il soit parti"], ["avoir", "qu'il ait eu"], ["être", "qu'il ait été"], ["faire", "qu'il ait fait"], ["se lever", "qu'il se soit levé"]], why: "Formas." },
    { fase: "aplica", c: ["b3sj-mode"], k: "spot", ask: "Encuentra el error.", s: "Je ne pense pas qu'il [a] raison sur ce point .", fix: "ait", why: "<b>ait</b>." },
    { fase: "aplica", c: ["b3sj-mode"], k: "spot", ask: "Encuentra el error.", s: "J'espère qu'il [vienne] à la fête samedi .", fix: "viendra", why: "<b>viendra</b>." },
    { fase: "dominio", c: ["b3sj-passe"], k: "order", ask: "Ordena: «Siento que no hayas podido venir a mi sustentación».", tokens: ["Je suis désolé", "que tu n'aies pas pu venir", "à ma soutenance"], why: "<b>Je suis désolé que tu n'aies pas pu venir à ma soutenance</b>" },
    { fase: "dominio", c: ["b3sj-mode"], k: "choice", ask: "«No creo que se haya ido.»", q: "«Je ne pense pas qu'il ___ parti.»", o: ["soit", "est"], a: 0, why: "<b>soit</b>." },
    { fase: "dominio", c: ["b3sj-passe", "b3sj-mode"], k: "listen", say: "J'espère que tu t'es bien reposé pendant les vacances.", acc: ["J'espère que tu t'es bien reposé pendant les vacances.", "J'espère que tu t'es bien reposée pendant les vacances."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'espère que tu t'es bien reposé pendant les vacances.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

/* ================================ Les formes en -ant ================================ */
E["b21-participe-gerondif"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Participe présent, gérondif et adjectif verbal",
  objetivo: {
    que: "Vas a distinguir las tres formas en -ant: el participio presente (invariable), el gerundio (en + -ant) y el adjetivo verbal (concuerda y a veces cambia de ortografía).",
    corto: "Il est parti en courant. · des arguments convaincants · en convainquant le juge",
    podras: ["Usar el gerundio para simultaneidad, medio, condición u oposición (tout en…).", "Usar el participio presente, invariable y formal: les candidats ayant réussi, étant malade.", "Concordar el adjetivo verbal y escribirlo bien: convaincant / convainquant, fatigant / fatiguant, différent / différant."],
    iconos: ["ic2/lapiz", "ic2/rayo", "ic2/engranaje"],
    previos: ["El gerundio y el participio presente (B1.1, lección 5) y el participio compuesto (B1.2, lección 22)."],
    capacidad: "Ahora no escribes «des arguments convainquants»."
  },
  requiere: R("b1ge-forme", "b1ge-usage", "b2pc-forme"), recupera: ["b1ge-usage"],
  conceptos: {
    "b3pg-gerondif": { n: "gérondif en + -ant, mismo sujeto: simultaneidad, medio, condición (en partant maintenant…), oposición (tout en étant…); «estoy -ando» = en train de", b: "gr" },
    "b3pg-adj": { n: "participe présent invariable (ayant, étant, négligeant) vs. adjectif verbal que concuerda y cambia: convaincant(e)s, fatigant, différent, influent", b: "gr" }
  },
  video: {
    titulo: "Las formas en -ant", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "convaincant · convainquant", seg: [
        { es: "Hola. Tres formas que se parecen mucho." } ] },
      { v: "frase", filas: [
          { nota: "gérondif", p: 1, partes: [["Il est parti en courant.", "-", 1]] },
          { nota: "participe", p: 2, partes: [["Les étudiants ayant réussi l'examen…", "-", 2]] },
          { nota: "adjectif", p: 3, partes: [["des arguments convaincants", "-", 3]] } ], seg: [
        { fr: "Il est parti en courant.", p: 1 }, { fr: "Les étudiants ayant réussi l'examen…", p: 2 }, { fr: "des arguments convaincants", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Los resultados de este estudio son muy convincentes.»", o: ["Les résultats de cette étude sont très convaincants.", "Les résultats de cette étude sont très convainquants."], a: 0,
        bien: "¡Sí! Adjetivo: convaincant.", mal: "El adjetivo se escribe con c: convaincants.",
        seg: [ { es: "Pausa. Convincentes." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en courant", "en faisant", "étant", "convaincants", "fatigant", "différant"], seg: [
        { es: "El adjetivo concuerda; el participio no.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El trayecto diario", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de su rutina.",
    pj: PJ,
    lineas: [
      ["camila", "Ce trajet quotidien de deux heures est vraiment fatigant. J'écoute de la musique en faisant mes devoirs dans le train.", "Este trayecto diario de dos horas es realmente cansador. Escucho música mientras hago mis tareas en el tren."],
      ["hugo", "Moi, j'ai trouvé un emploi en lisant les petites annonces ! En partant maintenant, tu arriveras à l'heure.", "¡Yo encontré trabajo leyendo los avisos clasificados! Si sales ahora, llegarás a tiempo."],
      ["camila", "Ma sœur, étant malade, n'a pas pu passer l'examen. Elle s'est cassé la jambe en skiant !", "Mi hermana, como estaba enferma, no pudo presentar el examen. ¡Se rompió la pierna esquiando!"],
      ["hugo", "Les résultats de l'étude sont très convaincants. Mais les deux versions différant sur plusieurs points, il faut les comparer.", "Los resultados del estudio son muy convincentes. Pero como las dos versiones difieren en varios puntos, hay que compararlas."]
    ],
    fijate: "Fíjate: en faisant, en lisant, en partant, en skiant (gérondif); étant, différant (participe présent, invariable); fatigant, convaincants (adjectif verbal)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres usos de -ant",
      idea: "Gérondif: en + -ant, con el mismo sujeto que el verbo principal; expresa simultaneidad (il s'est cassé la jambe en skiant), medio (elle a appris en regardant des séries), condición (en partant maintenant, tu arriveras à l'heure) u oposición con tout en (tout en étant riche, il vit simplement). Participe présent: invariable y formal: les candidats ayant réussi, étant malade, les jours précédant l'examen. Adjectif verbal: concuerda como un adjetivo y a veces cambia de ortografía: convaincant (≠ convainquant), fatigant (≠ fatiguant), différent (≠ différant), précédent (≠ précédant). «Estoy trabajando» = je suis en train de travailler, nunca «je suis travaillant».",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Forma"], [
        ["Il est parti en courant. · en courant", "Se fue corriendo.", "gérondif (simultaneidad)"],
        ["Il écoute de la musique en faisant ses devoirs. · en faisant", "Escucha música mientras hace sus tareas.", "gérondif"],
        ["En partant maintenant, tu arriveras à l'heure.", "Si sales ahora, llegarás a tiempo.", "condition"],
        ["Il s'est cassé la jambe en skiant.", "Se rompió la pierna esquiando.", "simultanéité"],
        ["Elle a appris le français en regardant des séries.", "Aprendió francés viendo series.", "moyen"],
        ["Tout en étant très riche, il vit simplement.", "Aunque es muy rico, vive con sencillez.", "opposition"],
        ["Étant malade, elle n'a pas pu passer l'examen. · étant", "Como estaba enferma, no pudo presentar el examen.", "participe présent"],
        ["une personne négligeant ses devoirs · les jours précédant l'examen · les élèves n'ayant pas rendu leur copie · deux sommes équivalant à mille euros", "una persona que descuida · los días previos · los alumnos que no entregaron · dos sumas que equivalen", "participe présent (invariable)"],
        ["des arguments convaincants · convaincants · des personnes influentes · une odeur suffocante · des nouvelles surprenantes", "argumentos convincentes · personas influyentes · un olor sofocante · noticias sorprendentes", "adjectif verbal (variable)"],
        ["fatigant (adj.) / fatiguant (part.) · fatigant", "cansador / cansando", "ortografía"],
        ["convaincant (adj.) / en convainquant (part.) · convainquant", "convincente / convenciendo", "ortografía"],
        ["différent (adj.) / différant (part.) · différant", "diferente / difiriendo", "ortografía"]
      ]],
      ej: [["Il est parti en courant.", "Se fue corriendo."], ["Les étudiants ayant réussi l'examen…", "Los estudiantes que aprobaron el examen…"], ["un travail fatigant", "un trabajo cansador"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis travaillant.", "Je suis en train de travailler.", "-ant nunca expresa «estoy …-ando»."], ["des résultats convainquants", "des résultats convaincants", "Adjetivo: con c."], ["un trajet fatiguant", "un trajet fatigant", "Adjetivo: sin u."]] }
  ],
  ejemplos: [
    { sit: "«Este trayecto de dos horas es realmente cansador.»", resp: "Ce trajet quotidien de deux heures est vraiment fatigant.", pasos: ["Adjetivo: fatigant."], porque: "Adjectif verbal." },
    { sit: "«Convenciendo al juez de su buena fe, ganó el caso.»", resp: "C'est en convainquant le juge de sa bonne foi qu'il a obtenu gain de cause.", pasos: ["Gérondif: convainquant."], porque: "Participio." },
    { sit: "«Escucha música mientras hace sus tareas.»", resp: "Il écoute de la musique en faisant ses devoirs.", pasos: ["en + -ant."], porque: "Gérondif." }
  ],
  comprueba: [
    { q: "El gerundio francés se forma con…", o: ["en + -ant", "être + -ant"], a: 0, b: "gr", porque: "en courant." },
    { q: "El participio presente es…", o: ["invariable", "variable"], a: 0, b: "gr", porque: "les candidats ayant réussi." },
    { q: "«Argumentos convincentes» se escribe…", o: ["des arguments convaincants", "des arguments convainquants"], a: 0, b: "gr", porque: "Adjetivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pg-adj"], k: "sort", ask: "¿Participio presente (invariable) o adjetivo verbal (variable)?", q: "Clasifica.", cats: ["Participe présent (invariable)", "Adjectif verbal (variable)"], items: [["une personne négligeant ses devoirs", 0], ["les jours précédant l'examen", 0], ["les élèves n'ayant pas rendu leur copie", 0], ["deux sommes équivalant à mille euros", 0], ["des arguments convaincants", 1], ["des personnes influentes", 1], ["une odeur suffocante", 1], ["des nouvelles surprenantes", 1]], pista: "¿Tiene complemento (verbo) o describe (adjetivo)?", why: "Formas." },
    { fase: "guiada", c: ["b3pg-adj"], k: "choice", ask: "«Este trayecto diario de dos horas es realmente cansador.»", q: "«Ce trajet quotidien de deux heures est vraiment ___.»", o: ["fatigant", "fatiguant"], a: 0, pista: "Adjetivo.", why: "<b>fatigant</b>." },
    { fase: "guiada", c: ["b3pg-adj"], k: "choice", ask: "«Convenciendo al juez de su buena fe, ganó el caso.»", q: "«C'est en ___ le juge de sa bonne foi qu'il a obtenu gain de cause.»", o: ["convainquant", "convaincant"], a: 0, pista: "Gérondif.", why: "<b>convainquant</b>." },
    { fase: "indep", c: ["b3pg-adj"], k: "choice", ask: "«Como las dos versiones difieren en varios puntos, hay que compararlas.»", q: "«Les deux versions ___ sur plusieurs points, il faut les comparer attentivement.»", o: ["différant", "différent"], a: 0, why: "Participe: <b>différant</b>." },
    { fase: "indep", c: ["b3pg-gerondif"], k: "fill", ask: "Gerundio de faire.", q: "Il écoute de la musique ___ ses devoirs.", acc: ["en faisant"], why: "<b>en faisant</b>." },
    { fase: "indep", c: ["b3pg-adj"], k: "fill", ask: "Participio presente de être.", q: "___ malade, elle n'a pas pu passer l'examen.", acc: ["Étant", "étant", "Etant"], why: "<b>Étant</b>." },
    { fase: "aplica", c: ["b3pg-gerondif"], k: "match", ask: "Une cada frase con el valor del gerundio.", q: "Frase → valor", pairs: [["En partant maintenant, tu arriveras à l'heure.", "condition"], ["Il s'est cassé la jambe en skiant.", "simultanéité"], ["Elle a appris le français en regardant des séries.", "moyen"], ["Tout en étant très riche, il vit simplement.", "opposition"]], why: "Valores." },
    { fase: "aplica", c: ["b3pg-adj"], k: "spot", ask: "Encuentra el error.", s: "Les résultats de cette étude sont très [convainquants] .", fix: "convaincants", why: "<b>convaincants</b>." },
    { fase: "aplica", c: ["b3pg-gerondif"], k: "spot", ask: "Encuentra el error (= estoy trabajando).", s: "Ne me dérange pas , [je suis travaillant] .", fix: "je suis en train de travailler", why: "<b>je suis en train de travailler</b>." },
    { fase: "dominio", c: ["b3pg-gerondif"], k: "order", ask: "Ordena: «Encontró trabajo leyendo los avisos clasificados».", tokens: ["Elle a trouvé un emploi", "en lisant", "les petites annonces"], why: "<b>Elle a trouvé un emploi en lisant les petites annonces</b>" },
    { fase: "dominio", c: ["b3pg-gerondif"], k: "choice", ask: "«Se fue corriendo.»", q: "«Il est parti ___.»", o: ["en courant", "courant"], a: 0, why: "<b>en courant</b>." },
    { fase: "dominio", c: ["b3pg-gerondif", "b3pg-adj"], k: "listen", say: "Étant malade, elle n'a pas pu passer l'examen.", acc: ["Étant malade, elle n'a pas pu passer l'examen.", "Etant malade, elle n'a pas pu passer l'examen.", "étant malade, elle n'a pas pu passer l'examen."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Étant malade, elle n'a pas pu passer l'examen.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ================================ B2.1·2 · Nuancer l'action et le propos ================================ */
E["b21-faire-laisser"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Faire et laisser + infinitif",
  objetivo: {
    que: "Vas a dominar faire / se faire / laisser + infinitivo, con los pronombres, el segundo complemento con à y el participio fait invariable.",
    corto: "Je l'ai fait réparer. · Je le lui ai fait lire. · J'ai fait visiter la ville à mes cousins.",
    podras: ["Distinguir hacerlo uno mismo, encargarlo (faire) y permitirlo (laisser).", "Usar se faire + infinitivo para un servicio o algo sufrido: il s'est fait opérer, il s'est fait renvoyer.", "Colocar dos pronombres (je le lui ai fait lire), introducir al que hace la acción con à y dejar fait invariable (la robe que j'ai fait faire)."],
    iconos: ["ic2/engranaje", "ic2/amigos", "ic2/lapiz"],
    previos: ["Faire faire et se faire (B1.2, lección 24) y los pronombres dobles (B1.2, lección 3)."],
    capacidad: "Ahora explicas quién hizo realmente cada cosa."
  },
  requiere: R("b2fc-faire", "b2fc-se", "b2pd-ordre"), recupera: ["b2fc-se"],
  conceptos: {
    "b3fl-qui": { n: "el sujeto mismo (je répare) / otra persona (je fais réparer, je me fais masser) / permiso (je laisse mon fils réparer); se faire = sufrir o encargar", b: "gr" },
    "b3fl-syntaxe": { n: "pronombres delante de faire (je l'ai fait réparer, je le lui ai fait lire); agente con à (faire visiter la ville à…); fait invariable (la robe que j'ai fait faire)", b: "gr" }
  },
  video: {
    titulo: "Faire y laisser", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "je l'ai fait réparer", seg: [
        { es: "Hola. ¿Quién hace la acción?" } ] },
      { v: "frase", filas: [
          { nota: "yo mismo", p: 1, partes: [["Je répare mon vélo.", "-", 1]] },
          { nota: "otro (faire)", p: 2, partes: [["Je fais réparer mon vélo.", "-", 2]] },
          { nota: "permiso (laisser)", p: 3, partes: [["Je laisse mon fils réparer son vélo.", "-", 3]] } ], seg: [
        { fr: "Je répare mon vélo.", p: 1 }, { fr: "Je fais réparer mon vélo.", p: 2 }, { fr: "Je laisse mon fils réparer son vélo.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El vestido que mandé hacer es precioso.»", o: ["La robe que j'ai fait faire est magnifique.", "La robe que j'ai faite faire est magnifique."], a: 0,
        bien: "¡Sí! Fait + infinitivo no concuerda.", mal: "Fait seguido de infinitivo es invariable.",
        seg: [ { es: "Pausa. Que mandé hacer." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je l'ai fait réparer", "je me suis fait couper", "laissez-le entrer", "fait visiter à", "il s'est fait renvoyer"], seg: [
        { es: "Fait + infinitivo: invariable.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un fin de semana ocupado", img: "bg-cafe", yo: "camila",
    escena: "Camila le cuenta a Hugo su fin de semana.",
    pj: PJ,
    lineas: [
      ["camila", "Mon ordinateur ne marchait plus, alors je l'ai fait réparer. Et hier, je me suis fait couper les cheveux chez le coiffeur.", "Mi computador ya no funcionaba, así que lo mandé reparar. Y ayer me corté el pelo en la peluquería."],
      ["hugo", "Ça te va bien ! Le week-end dernier, j'ai fait visiter la ville à mes cousins. Mon frère, lui, s'est fait opérer du genou.", "¡Te queda bien! El fin de semana pasado les mostré la ciudad a mis primos. Mi hermano se operó de la rodilla."],
      ["camila", "Oh ! Et le chien de ta voisine ? Ne le laissez pas sous la pluie : laissez-le entrer !", "¡Uy! ¿Y el perro de tu vecina? No lo dejen bajo la lluvia: ¡déjenlo entrar!"],
      ["hugo", "Ha ha ! Tu connais le texte du professeur ? Il le fait lire à voix haute aux élèves. Je le lui ai fait lire aussi.", "¡Ja, ja! ¿Conoces el texto del profesor? Se lo hace leer en voz alta a los alumnos. Yo también se lo hice leer."]
    ],
    fijate: "Fíjate: je l'ai fait réparer, je me suis fait couper, j'ai fait visiter la ville à mes cousins, s'est fait opérer, laissez-le entrer, il le fait lire aux élèves, je le lui ai fait lire."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "¿Quién hace la acción?",
      idea: "Faire + infinitivo: otra persona hace la acción por encargo del sujeto: Je fais réparer mon ordinateur. Se faire + infinitivo: el sujeto recibe la acción, como servicio (je me suis fait couper les cheveux) o como algo sufrido (il s'est fait renvoyer). Laisser + infinitivo: permitir: laisse-le dormir, laissez-le entrer. Sintaxis: los pronombres van delante de faire (je l'ai fait réparer; je le lui ai fait lire); quien realiza la acción va con à si hay otro complemento (j'ai fait visiter la ville à mes cousins). Fait seguido de infinitivo no concuerda: la robe que j'ai fait faire.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "¿Quién?"], [
        ["Je me lave les mains. · Elle se maquille avant de sortir. · Ils ont peint leur salon eux-mêmes. · Il se rase tous les matins.", "Me lavo las manos. · Se maquilla. · Pintaron su sala ellos mismos. · Se afeita.", "le sujet lui-même"],
        ["Je me fais masser le dos. · Il s'est fait opérer du genou. · Nous avons fait construire une maison. · Tu t'es fait voler ton portefeuille ?", "Me hago masajear la espalda. · Se operó de la rodilla. · Mandamos construir una casa. · ¿Te robaron la billetera?", "quelqu'un d'autre"],
        ["Je fais réparer mon vélo. · Un réparateur s'en occupe pour moi.", "Mando reparar mi bici.", "faire"],
        ["Je répare mon vélo. · Je m'en occupe moi-même.", "Reparo mi bici yo mismo.", "yo"],
        ["Je laisse mon fils réparer son vélo. · J'autorise mon fils à le faire.", "Dejo que mi hijo repare su bici.", "laisser"],
        ["Je me suis fait expliquer la règle. · Quelqu'un m'a expliqué la règle.", "Me hice explicar la regla.", "se faire"],
        ["Il s'est fait renvoyer. · Il a été renvoyé.", "Lo echaron.", "se faire (sufrido)"],
        ["je me suis fait couper · me suis fait couper", "me corté (en la peluquería)", "se faire"],
        ["Je l'ai fait réparer. · fait · je l'ai fait", "Lo mandé reparar.", "pronombre + faire"],
        ["Le professeur fait lire le texte aux élèves. · fait", "El profesor hace leer el texto a los alumnos.", "agente con à"],
        ["j'ai fait visiter la ville à mes cousins · à", "les mostré la ciudad a mis primos", "agente con à"],
        ["Ne le laissez pas sous la pluie : laissez-le entrer !", "No lo dejen bajo la lluvia: ¡déjenlo entrar!", "laisser"],
        ["la robe que j'ai fait faire", "el vestido que mandé hacer", "fait invariable"]
      ]],
      ej: [["Je fais réparer mon ordinateur.", "Mando reparar mi computador."], ["Je me suis fait couper les cheveux.", "Me corté el pelo (en la peluquería)."], ["Laisse-le dormir.", "Déjalo dormir."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je me suis coupé les cheveux chez le coiffeur.", "Je me suis fait couper les cheveux.", "Si lo hizo otro → se faire."], ["La robe que j'ai faite faire…", "La robe que j'ai fait faire…", "Fait + infinitivo: invariable."], ["J'ai fait visiter mes cousins la ville.", "J'ai fait visiter la ville à mes cousins.", "Agente con à."]] }
  ],
  ejemplos: [
    { sit: "«Ayer me corté el pelo en la peluquería.»", resp: "Hier, je me suis fait couper les cheveux chez le coiffeur.", pasos: ["Lo hizo otro → se faire."], porque: "Servicio." },
    { sit: "«No lo dejen bajo la lluvia: ¡déjenlo entrar!»", resp: "Ne le laissez pas sous la pluie : laissez-le entrer !", pasos: ["laisser = permitir."], porque: "Permiso." },
    { sit: "«Se lo hice leer.»", resp: "Je le lui ai fait lire.", pasos: ["Dos pronombres delante de faire."], porque: "Sintaxis." }
  ],
  comprueba: [
    { q: "«Il s'est fait renvoyer» significa…", o: ["Il a été renvoyé.", "Il a renvoyé quelqu'un."], a: 0, b: "gr", porque: "Sufrido." },
    { q: "«La robe que j'ai ___ faire»", o: ["fait", "faite"], a: 0, b: "gr", porque: "Invariable." },
    { q: "Laisser + infinitivo significa…", o: ["permitir", "encargar"], a: 0, b: "gr", porque: "Permiso." }
  ],
  practica: [
    { fase: "guiada", c: ["b3fl-qui"], k: "sort", ask: "¿Lo hace el sujeto mismo o alguien más?", q: "Clasifica.", cats: ["Le sujet lui-même", "Quelqu'un d'autre"], items: [["Je me lave les mains.", 0], ["Elle se maquille avant de sortir.", 0], ["Ils ont peint leur salon eux-mêmes.", 0], ["Il se rase tous les matins.", 0], ["Je me fais masser le dos.", 1], ["Il s'est fait opérer du genou.", 1], ["Nous avons fait construire une maison.", 1], ["Tu t'es fait voler ton portefeuille ?", 1]], pista: "¿Hay faire?", why: "¿Quién?" },
    { fase: "guiada", c: ["b3fl-qui"], k: "choice", ask: "«Ayer me corté el pelo en la peluquería.»", q: "«Hier, je ___ les cheveux chez le coiffeur.»", o: ["me suis fait couper", "me suis coupé"], a: 0, pista: "Lo hizo otro.", why: "<b>me suis fait couper</b>." },
    { fase: "guiada", c: ["b3fl-qui"], k: "choice", ask: "«No lo dejen bajo la lluvia: ¡déjenlo entrar!»", q: "«Ne le laissez pas sous la pluie : ___ !»", o: ["laissez-le entrer", "faites-le entrer"], a: 0, pista: "Permitir.", why: "<b>laissez-le entrer</b>." },
    { fase: "indep", c: ["b3fl-syntaxe"], k: "choice", ask: "«El fin de semana pasado les mostré la ciudad a mis primos.»", q: "«Le week-end dernier, j'ai fait visiter la ville ___ mes cousins.»", o: ["à", "par"], a: 0, why: "<b>à</b>." },
    { fase: "indep", c: ["b3fl-syntaxe"], k: "fill", ask: "Presente de faire (il).", q: "Le professeur ___ lire le texte à voix haute aux élèves.", acc: ["fait"], why: "<b>fait</b>." },
    { fase: "indep", c: ["b3fl-syntaxe"], k: "fill", ask: "Participio de faire (invariable).", q: "Mon ordinateur ne marchait plus, alors je l'ai ___ réparer.", acc: ["fait"], why: "<b>fait</b>." },
    { fase: "aplica", c: ["b3fl-qui"], k: "match", ask: "Une cada frase con su sentido.", q: "Frase → sentido", pairs: [["Je fais réparer mon vélo.", "Un réparateur s'en occupe pour moi."], ["Je répare mon vélo.", "Je m'en occupe moi-même."], ["Je laisse mon fils réparer son vélo.", "J'autorise mon fils à le faire."], ["Je me suis fait expliquer la règle.", "Quelqu'un m'a expliqué la règle."], ["Il s'est fait renvoyer.", "Il a été renvoyé."]], why: "Sentidos." },
    { fase: "aplica", c: ["b3fl-syntaxe"], k: "spot", ask: "Encuentra el error.", s: "La robe que j'ai [faite] faire est magnifique .", fix: "fait", why: "<b>fait</b>." },
    { fase: "aplica", c: ["b3fl-qui"], k: "spot", ask: "Encuentra el error (lo hizo el peluquero).", s: "Hier , je [me suis coupé] les cheveux chez le coiffeur .", fix: "me suis fait couper", why: "<b>me suis fait couper</b>." },
    { fase: "dominio", c: ["b3fl-syntaxe"], k: "order", ask: "Ordena: «Se lo hice leer».", tokens: ["Je", "le lui ai fait", "lire"], why: "<b>Je le lui ai fait lire</b>" },
    { fase: "dominio", c: ["b3fl-qui"], k: "choice", ask: "«Mandamos construir una casa.»", q: "«___»", o: ["Nous avons fait construire une maison.", "Nous avons laissé construire une maison."], a: 0, why: "<b>fait construire</b>." },
    { fase: "dominio", c: ["b3fl-qui", "b3fl-syntaxe"], k: "listen", say: "Mon ordinateur ne marchait plus, alors je l'ai fait réparer.", acc: ["Mon ordinateur ne marchait plus, alors je l'ai fait réparer."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon ordinateur ne marchait plus, alors je l'ai fait réparer.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b21-modalisation"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La modalisation : certitude, probabilité et doute",
  objetivo: {
    que: "Vas a graduar tu grado de certeza: certeza y probabilidad con indicativo, posibilidad y duda con subjuntivo.",
    corto: "Il est probable qu'il viendra. · Il se peut qu'il vienne. · Il viendra sans doute.",
    podras: ["Expresar certeza y fuerte probabilidad con indicativo: il est indéniable que, il est probable que, vraisemblablement.", "Expresar posibilidad y duda con subjuntivo: il se peut que, il est peu probable que, il semble que.", "Distinguir sans doute (probablemente) de sans aucun doute (sin duda) y suavizar con el condicional: cela pourrait expliquer…"],
    iconos: ["ic2/bombilla", "ic2/pregunta", "ic2/estrella"],
    previos: ["La certeza y la duda (B1.1, lección 46) y atenuar (B1.2, lección 40)."],
    capacidad: "Ahora dices exactamente qué tan seguro estás."
  },
  requiere: R("b1cd-indic", "b1cd-subj", "b2at-cond"), recupera: ["b1cd-subj"],
  conceptos: {
    "b3mo-echelle": { n: "escala: certitude (il est indéniable que, sans aucun doute), forte probabilité (il est probable que, sans doute, vraisemblablement), possibilité (il se peut que, peut-être)", b: "gr" },
    "b3mo-mode": { n: "certeza / probabilidad + indicativo (il est probable qu'il viendra, il est évident que… aura); posibilidad / duda + subjuntivo (il se peut qu'il vienne, il est peu probable que… aillent, il semble que… soient)", b: "gr" }
  },
  video: {
    titulo: "¿Qué tan seguro estás?", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "il se peut que…", seg: [
        { es: "Hola. La seguridad decide el modo." } ] },
      { v: "dos",
        a: { tag: "probable", fr: "Il est probable qu'il viendra.", es: "indicativo" },
        b: { tag: "posible", fr: "Il se peut qu'il vienne.", es: "subjuntivo" },
        seg: [ { es: "Probable:", p: 1 }, { fr: "Il est probable qu'il viendra.", p: 1 }, { es: "Posible:", p: 2 }, { fr: "Il se peut qu'il vienne.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Puede que llueva mañana en el norte del país.»", o: ["Il se peut qu'il pleuve demain dans le nord du pays.", "Il se peut qu'il pleuvra demain dans le nord du pays."], a: 0,
        bien: "¡Sí! Il se peut que + subjuntivo.", mal: "Posibilidad: subjuntivo, pleuve.",
        seg: [ { es: "Pausa. Puede que llueva." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["sans aucun doute", "sans doute", "il est probable que", "il se peut que", "peut-être"], seg: [
        { es: "Sans doute = probablemente.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las noticias de la mañana", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comentan las noticias.",
    pj: PJ,
    lineas: [
      ["hugo", "Il est probable que le gouvernement prendra de nouvelles mesures la semaine prochaine.", "Es probable que el gobierno tome nuevas medidas la semana que viene."],
      ["camila", "Il est évident que cette décision aura des conséquences sur l'emploi. Mais il est peu probable que les choses aillent mieux avant la fin de l'année.", "Es evidente que esta decisión tendrá consecuencias en el empleo. Pero es poco probable que las cosas mejoren antes de fin de año."],
      ["hugo", "Il semble que les deux parties soient parvenues à un accord. Et Marie ? Elle viendra sans doute à la réunion.", "Parece que las dos partes llegaron a un acuerdo. ¿Y Marie? Probablemente vendrá a la reunión."],
      ["camila", "Il se peut que le train ait du retard ce soir. Sans aucun doute, c'est le pire trajet de la semaine !", "Puede que el tren llegue tarde esta noche. ¡Sin ninguna duda, es el peor trayecto de la semana!"]
    ],
    fijate: "Fíjate: il est probable que… prendra, il est évident que… aura (indicativo); il est peu probable que… aillent, il semble que… soient, il se peut que… ait (subjuntivo); sans doute (probablemente), sans aucun doute (sin duda)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La escala de la certeza",
      idea: "Certeza: il est indéniable que, il est évident que, sans aucun doute (sin ninguna duda) + indicativo. Fuerte probabilidad: il est probable que, vraisemblablement, sans doute (= probablemente, ¡no «sin duda»!) + indicativo: Il est probable qu'il viendra. Posibilidad o duda: il se peut que, il est possible que, il est peu probable que, il semble que + subjuntivo: Il se peut qu'il vienne. Peut-être va sin que. El condicional suaviza: Cela pourrait expliquer la baisse.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Grado"], [
        ["Il est indéniable que… · Sans aucun doute · sans aucun doute", "Es innegable que… · Sin ninguna duda", "certitude"],
        ["Vraisemblablement · Il est probable que… · Sans doute · sans doute · il est probable que", "Verosímilmente · Es probable que… · Probablemente", "forte probabilité"],
        ["Il se peut que… · Il est peu probable que… · Peut-être · il se peut que · peut-être", "Puede que… · Es poco probable que… · Quizá", "possibilité ou doute"],
        ["Il est probable que le gouvernement prendra… · prendra", "Es probable que el gobierno tome…", "+ indicatif"],
        ["Il est évident que cette décision aura… · aura", "Es evidente que esta decisión tendrá…", "+ indicatif"],
        ["Il se peut que le train ait du retard. · ait", "Puede que el tren llegue tarde.", "+ subjonctif"],
        ["Il se peut qu'il pleuve demain. · pleuve", "Puede que llueva mañana.", "+ subjonctif"],
        ["Il est peu probable que les choses aillent mieux. · aillent", "Es poco probable que las cosas mejoren.", "+ subjonctif"],
        ["Il semble que les deux parties soient parvenues à un accord.", "Parece que las dos partes llegaron a un acuerdo.", "+ subjonctif"],
        ["Il viendra probablement, mais ce n'est pas certain.", "Vendrá probablemente, pero no es seguro.", "sans doute"],
        ["Il a vraisemblablement raté son train.", "Verosímilmente perdió el tren.", "probabilité"]
      ]],
      ej: [["Il viendra sans doute.", "Probablemente vendrá."], ["Il se peut qu'il pleuve.", "Puede que llueva."], ["Sans aucun doute, c'est le meilleur.", "Sin ninguna duda, es el mejor."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["sans doute = «sin duda»", "sans doute = «probablemente»", "Para certeza: sans aucun doute."], ["Il se peut qu'il pleuvra.", "Il se peut qu'il pleuve.", "Posibilidad → subjuntivo."], ["Peut-être qu'il vienne.", "Peut-être qu'il viendra.", "Peut-être que + indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Marie viendra sans doute.» ¿Qué quiere decir?", resp: "Il viendra probablement, mais ce n'est pas certain.", pasos: ["sans doute = probablemente."], porque: "Probabilidad." },
    { sit: "«Il est probable qu'il a raté son train.» =", resp: "Il a vraisemblablement raté son train.", pasos: ["Misma probabilidad."], porque: "Equivalencia." },
    { sit: "«Puede que el tren llegue tarde esta noche.»", resp: "Il se peut que le train ait du retard ce soir.", pasos: ["Posibilidad → subjuntivo."], porque: "Posibilidad." }
  ],
  comprueba: [
    { q: "«Sans doute» significa…", o: ["probablemente", "sin ninguna duda"], a: 0, b: "gr", porque: "Falso amigo." },
    { q: "«Il se peut que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "Posibilidad." },
    { q: "«Il est probable que» va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Probabilidad." }
  ],
  practica: [
    { fase: "guiada", c: ["b3mo-echelle"], k: "sort", ask: "¿Certeza, fuerte probabilidad o posibilidad?", q: "Clasifica.", cats: ["Certitude", "Forte probabilité", "Possibilité ou doute"], items: [["Il est indéniable que…", 0], ["Sans aucun doute", 0], ["Vraisemblablement", 1], ["Il est probable que…", 1], ["Sans doute", 1], ["Il se peut que…", 2], ["Il est peu probable que…", 2], ["Peut-être", 2]], pista: "Sans doute: probablemente.", why: "Escala." },
    { fase: "guiada", c: ["b3mo-mode"], k: "choice", ask: "«Es probable que el gobierno tome nuevas medidas la semana que viene.»", q: "«Il est probable que le gouvernement ___ de nouvelles mesures la semaine prochaine.»", o: ["prendra", "prenne"], a: 0, pista: "Probable: indicativo.", why: "<b>prendra</b>." },
    { fase: "guiada", c: ["b3mo-echelle"], k: "choice", ask: "«Marie viendra sans doute.» ¿Qué quiere decir Marie?", q: "«Marie viendra sans doute.»", o: ["Il viendra probablement, mais ce n'est pas certain.", "C'est absolument certain."], a: 0, pista: "sans doute.", why: "Probablemente." },
    { fase: "indep", c: ["b3mo-echelle"], k: "choice", ask: "«Il est probable qu'il a raté son train.» =", q: "«___»", o: ["Il a vraisemblablement raté son train.", "Il a certainement raté son train."], a: 0, why: "<b>vraisemblablement</b>." },
    { fase: "indep", c: ["b3mo-mode"], k: "fill", ask: "Subjuntivo de avoir.", q: "Il se peut que le train ___ du retard ce soir.", acc: ["ait"], why: "<b>ait</b>." },
    { fase: "indep", c: ["b3mo-mode"], k: "fill", ask: "Subjuntivo de aller (les choses).", q: "Il est peu probable que les choses ___ mieux avant la fin de l'année.", acc: ["aillent"], why: "<b>aillent</b>." },
    { fase: "aplica", c: ["b3mo-mode"], k: "fill", ask: "Futuro de avoir (certeza).", q: "Il est évident que cette décision ___ des conséquences sur l'emploi.", acc: ["aura"], why: "<b>aura</b>." },
    { fase: "aplica", c: ["b3mo-mode"], k: "spot", ask: "Encuentra el error.", s: "Il se peut qu'il [pleuvra] demain dans le nord du pays .", fix: "pleuve", why: "<b>pleuve</b>." },
    { fase: "aplica", c: ["b3mo-mode"], k: "spot", ask: "Encuentra el error.", s: "Il est peu probable que la réunion [aura] lieu demain .", fix: "ait", why: "<b>ait</b>." },
    { fase: "dominio", c: ["b3mo-mode"], k: "order", ask: "Ordena: «Parece que las dos partes llegaron a un acuerdo».", tokens: ["Il semble que", "les deux parties soient parvenues", "à un accord"], why: "<b>Il semble que les deux parties soient parvenues à un accord</b>" },
    { fase: "dominio", c: ["b3mo-echelle"], k: "choice", ask: "«Sin ninguna duda, es el mejor.»", q: "«___, c'est le meilleur.»", o: ["Sans aucun doute", "Sans doute"], a: 0, why: "<b>Sans aucun doute</b>." },
    { fase: "dominio", c: ["b3mo-echelle", "b3mo-mode"], k: "listen", say: "Il se peut que le train ait du retard ce soir.", acc: ["Il se peut que le train ait du retard ce soir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il se peut que le train ait du retard ce soir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie"], previo: [] }
};

/* ================================ B2.1·3 · La presse et le débat ================================ */
E["b21-presse"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Lire un article de presse",
  objetivo: {
    que: "Vas a leer la prensa con estrategia: título y chapeau, títulos nominales, condicional de distancia y géneros que informan u opinan.",
    corto: "Hausse des loyers à Paris · Selon la police, le suspect se serait enfui.",
    podras: ["Leer primero el título y el chapeau (la entradilla), que resumen el artículo.", "Entender los títulos nominales: augmenter → augmentation, démissionner → démission.", "Distinguir los géneros que informan (la dépêche, le reportage, la brève) de los que opinan (l'éditorial, la chronique, la tribune)."],
    iconos: ["ic2/libro", "ic2/movil", "ic2/pergamino"],
    previos: ["La nominalización (B1.2, lección 27), el condicional de la prensa (B1.2, lección 17) y los medios (B1.1, lección 58)."],
    capacidad: "Ahora entiendes un artículo de Le Monde en pocos minutos."
  },
  requiere: R("b2no-suff", "b2cj-present", "b1md-presse"), recupera: ["b2no-suff"],
  conceptos: {
    "b3pr-titre": { n: "título nominal (Hausse des loyers, Démission du maire, Adoption de la loi): augmentation, démission, fermeture, découverte, arrestation, lancement; le chapeau resume", b: "gr" },
    "b3pr-genres": { n: "informar: la dépêche, le reportage, la brève, le fait divers; opinar: l'éditorial, la chronique, la tribune, le billet d'humeur; selon + condicional = sin garantía", b: "gr" }
  },
  video: {
    titulo: "Leer la prensa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le chapeau", seg: [
        { es: "Hola. Un artículo se lee empezando por arriba." } ] },
      { v: "frase", filas: [
          { nota: "título", p: 1, partes: [["Hausse des loyers à Paris", "-", 1]] },
          { nota: "rumor", p: 2, partes: [["Selon la police, le suspect se serait enfui.", "-", 2]] },
          { nota: "título", p: 3, partes: [["Adoption de la loi sur le climat", "-", 3]] } ], seg: [
        { fr: "Hausse des loyers à Paris", p: 1 }, { fr: "Selon la police, le suspect se serait enfui.", p: 2 }, { fr: "Adoption de la loi sur le climat", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Título: «Aumento de los arriendos: los estudiantes protestan».", o: ["Augmentation des loyers : les étudiants protestent", "Augmentement des loyers : les étudiants protestent"], a: 0,
        bien: "¡Sí! El sufijo es -ation.", mal: "augmenter → augmentation.",
        seg: [ { es: "Pausa. Aumento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le chapeau", "augmentation", "démission", "la dépêche", "l'éditorial", "la tribune"], seg: [
        { es: "Informar no es opinar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El periódico del domingo", img: "bg-cafe", yo: "camila",
    escena: "Hugo le enseña a Camila a leer el periódico.",
    pj: PJ,
    lineas: [
      ["hugo", "Lis d'abord le titre et le chapeau : « Augmentation des loyers : les étudiants protestent ». Le chapeau résume tout l'article.", "Lee primero el título y la entradilla: «Aumento de los arriendos: los estudiantes protestan». La entradilla resume todo el artículo."],
      ["camila", "Et ce titre sans verbe ? « Démission du maire de Lyon ». C'est un titre nominal ?", "¿Y este título sin verbo? «Renuncia del alcalde de Lyon». ¿Es un título nominal?"],
      ["hugo", "Exactement : démissionner, la démission. Ici : « Selon une étude publiée hier, les jeunes liraient de moins en moins la presse papier. » Le journaliste ne garantit pas l'information.", "Exacto: renunciar, la renuncia. Aquí: «Según un estudio publicado ayer, los jóvenes leerían cada vez menos la prensa en papel». El periodista no garantiza la información."],
      ["camila", "D'accord. Et la mairie a annoncé la hausse des tarifs du métro. Mais l'éditorial, c'est l'opinion du journal, pas une dépêche.", "Bueno. Y la alcaldía anunció el alza de las tarifas del metro. Pero el editorial es la opinión del periódico, no una nota de agencia."]
    ],
    fijate: "Fíjate: le titre, le chapeau, augmentation, démission, la hausse (títulos nominales); liraient (condicional, sin garantía); l'éditorial (opina) ≠ une dépêche (informa)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las claves del artículo",
      idea: "Lee primero el título y el chapeau (la entradilla en negrita): resumen todo el artículo. Los títulos suelen ser nominales: el verbo se vuelve nombre: augmenter → augmentation, démissionner → démission, fermer → fermeture, découvrir → découverte, arrêter un suspect → arrestation, lancer → lancement. Hausse / baisse = subida / bajada. Selon, d'après + condicional = el periodista informa sin garantizar. Distingue los géneros que informan (la dépêche, le reportage, la brève, le fait divers) de los que opinan (l'éditorial, la chronique, la tribune, le billet d'humeur).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["le titre · le chapeau", "el título · la entradilla", "leer primero"],
        ["augmenter → augmentation · Augmentation", "aumentar → aumento", "título nominal"],
        ["démissionner → démission · fermer → fermeture · découvrir → découverte", "renuncia · cierre · descubrimiento", "título nominal"],
        ["arrêter (un suspect) → arrestation · lancer → lancement", "arresto · lanzamiento", "título nominal"],
        ["Hausse des loyers à Paris · baisse · « Baisse des prix de l'essence »", "Suben los arriendos en París · bajada", "título"],
        ["Adoption de la loi sur le climat par le Parlement", "Se aprueba la ley del clima", "título"],
        ["un titre nominal · nominal · nominalisé", "un título sin verbo conjugado", "tipo"],
        ["Selon la police, le suspect se serait enfui. · Il rapporte une information sans la garantir lui-même.", "Según la policía, el sospechoso habría huido.", "condicional de distancia"],
        ["la dépêche · le reportage · la brève · le fait divers", "la nota de agencia · el reportaje · la breve · el suceso", "Informer (faits)"],
        ["l'éditorial · la chronique · la tribune · le billet d'humeur", "el editorial · la crónica · la columna de opinión · la columna de humor", "Commenter (opinion)"],
        ["La mairie a annoncé la hausse des tarifs. · La mairie", "La alcaldía anunció el alza de las tarifas.", "quién informa"]
      ]],
      ej: [["Hausse des loyers à Paris", "Suben los arriendos en París"], ["Selon la police, le suspect se serait enfui.", "Según la policía, el sospechoso habría huido."], ["Adoption de la loi", "Se aprueba la ley"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Augmentement des loyers", "Augmentation des loyers", "El sufijo correcto es -ation."], ["Leer el editorial como un hecho", "L'éditorial = l'opinion du journal", "Distingue informar de opinar."], ["Le suspect s'est enfui (según la policía, sin confirmar)", "Le suspect se serait enfui", "Condicional de distancia."]] }
  ],
  ejemplos: [
    { sit: "«El Parlamento aprobó la ley del clima.» ¿Qué título corresponde?", resp: "Adoption de la loi sur le climat par le Parlement", pasos: ["adopter → adoption."], porque: "Título nominal." },
    { sit: "«Selon une étude, les jeunes liraient moins.» ¿Qué hace el periodista?", resp: "Il rapporte une information sans la garantir lui-même.", pasos: ["selon + condicional."], porque: "Distancia." },
    { sit: "Título: «Baja de los precios de la gasolina»", resp: "« Baisse des prix de l'essence »", pasos: ["baisser → baisse."], porque: "Título nominal." }
  ],
  comprueba: [
    { q: "Le chapeau es…", o: ["la entradilla que resume el artículo", "el sombrero del periodista"], a: 0, b: "gr", porque: "Prensa." },
    { q: "El nombre de augmenter es…", o: ["augmentation", "augmentement"], a: 0, b: "gr", porque: "-ation." },
    { q: "L'éditorial…", o: ["opina", "informa de hechos"], a: 0, b: "gr", porque: "Género de opinión." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pr-genres"], k: "sort", ask: "¿Informa (hechos) u opina?", q: "Clasifica.", cats: ["Informer (faits)", "Commenter (opinion)"], items: [["la dépêche", 0], ["le reportage", 0], ["la brève", 0], ["le fait divers", 0], ["l'éditorial", 1], ["la chronique", 1], ["la tribune", 1], ["le billet d'humeur", 1]], pista: "¿Hechos u opinión?", why: "Géneros." },
    { fase: "guiada", c: ["b3pr-titre"], k: "choice", ask: "«El Parlamento aprobó la ley del clima.» ¿Qué título corresponde?", q: "«___»", o: ["Adoption de la loi sur le climat par le Parlement", "Le Parlement adopter la loi sur le climat"], a: 0, pista: "Sin verbo.", why: "Título nominal." },
    { fase: "guiada", c: ["b3pr-genres"], k: "choice", ask: "«Selon une étude, les jeunes liraient moins.» ¿Qué hace el periodista?", q: "«les jeunes liraient moins»", o: ["Il rapporte une information sans la garantir lui-même.", "Il donne son opinion personnelle."], a: 0, pista: "Condicional.", why: "Distancia." },
    { fase: "indep", c: ["b3pr-titre"], k: "choice", ask: "«La alcaldía anunció el alza de las tarifas.» ¿Quién la anunció?", q: "«La mairie a annoncé la hausse des tarifs.»", o: ["La mairie", "Les usagers"], a: 0, why: "<b>La mairie</b>." },
    { fase: "indep", c: ["b3pr-titre"], k: "fill", ask: "Título: «Bajada de los precios de la gasolina».", q: "Titre : « ___ des prix de l'essence »", acc: ["baisse", "Baisse"], why: "<b>Baisse</b>." },
    { fase: "indep", c: ["b3pr-titre"], k: "fill", ask: "Un título sin verbo conjugado es…", q: "« Hausse des loyers » : un titre sans verbe conjugué est un titre ___ .", acc: ["nominal", "nominalisé"], why: "<b>nominal</b>." },
    { fase: "aplica", c: ["b3pr-titre"], k: "match", ask: "Une cada verbo con su nombre de título.", q: "Verbo → nombre", pairs: [["augmenter", "augmentation"], ["démissionner", "démission"], ["fermer", "fermeture"], ["découvrir", "découverte"], ["arrêter (un suspect)", "arrestation"], ["lancer", "lancement"]], why: "Nominalización." },
    { fase: "aplica", c: ["b3pr-titre"], k: "spot", ask: "Encuentra el error.", s: "[Augmentement] des loyers : les étudiants protestent", fix: "Augmentation", why: "<b>Augmentation</b>." },
    { fase: "aplica", c: ["b3pr-genres"], k: "spot", ask: "Encuentra el error (información sin confirmar).", s: "Selon la police , le suspect [s'est enfui] vers la frontière .", fix: "se serait enfui", why: "<b>se serait enfui</b>." },
    { fase: "dominio", c: ["b3pr-genres"], k: "order", ask: "Ordena: «Según un estudio publicado ayer, los jóvenes leerían cada vez menos la prensa en papel».", tokens: ["Selon une étude publiée hier,", "les jeunes liraient", "de moins en moins la presse papier"], why: "<b>Selon une étude publiée hier, les jeunes liraient de moins en moins la presse papier</b>" },
    { fase: "dominio", c: ["b3pr-titre"], k: "choice", ask: "La entradilla del artículo.", q: "«___»", o: ["le chapeau", "le chapitre"], a: 0, why: "<b>le chapeau</b>." },
    { fase: "dominio", c: ["b3pr-titre", "b3pr-genres"], k: "listen", say: "Selon une étude publiée hier, les jeunes liraient de moins en moins la presse papier.", acc: ["Selon une étude publiée hier, les jeunes liraient de moins en moins la presse papier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Selon une étude publiée hier, les jeunes liraient de moins en moins la presse papier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Paris", "Le Monde"], previo: [] }
};

E["b21-debattre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Débattre : accord, désaccord et nuance",
  objetivo: {
    que: "Vas a debatir con cortesía: aprobar, matizar (accord partiel), contradecir e interrumpir con las fórmulas del francés.",
    corto: "Je vous l'accorde, mais… · Il n'en reste pas moins que… · Je ne partage pas votre avis.",
    podras: ["Aprobar: vous avez tout à fait raison, je partage entièrement votre avis, je suis du même avis.", "Matizar: certes… mais, je vous l'accorde, il n'en reste pas moins que, dans une certaine mesure.", "Contradecir e interrumpir con cortesía: je ne partage pas du tout votre point de vue; excusez-moi de vous interrompre, mais…"],
    iconos: ["ic2/microfono", "ic2/espadas", "ic2/amigos"],
    previos: ["El acuerdo y el desacuerdo (B1.1, lección 45) y refutar y conceder (B1.2, lección 36)."],
    capacidad: "Ahora defiendes tu postura en el oral del DELF B2."
  },
  requiere: R("b1ad-accord", "b1ad-desac", "b2ca-conceder"), recupera: ["b1ad-desac"],
  conceptos: {
    "b3db-accord": { n: "accord (vous avez raison, je suis du même avis), accord partiel (certes… mais, je vous l'accorde, il n'en reste pas moins que, dans une certaine mesure), désaccord (je ne partage pas votre avis)", b: "gr" },
    "b3db-parole": { n: "interrumpir y retomar: excusez-moi de vous interrompre, mais…; vocabulario del debate (le réchauffement climatique, le développement durable, le pouvoir d'achat)", b: "gr" }
  },
  video: {
    titulo: "Debatir con matices", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "je vous l'accorde", seg: [
        { es: "Hola. Un buen debate es sobre todo matizar." } ] },
      { v: "frase", filas: [
          { nota: "acuerdo", p: 1, partes: [["Vous avez tout à fait raison.", "-", 1]] },
          { nota: "matiz", p: 2, partes: [["Je vous l'accorde, pourtant la question reste ouverte.", "-", 2]] },
          { nota: "desacuerdo", p: 3, partes: [["Je ne partage pas du tout votre point de vue.", "-", 3]] } ], seg: [
        { fr: "Vous avez tout à fait raison.", p: 1 }, { fr: "Je vous l'accorde, pourtant la question reste ouverte.", p: 2 }, { fr: "Je ne partage pas du tout votre point de vue.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy totalmente de acuerdo: usted tiene razón.»", o: ["Je suis tout à fait d'accord : vous avez raison.", "Je suis tout à fait d'accord : vous êtes raison."], a: 0,
        bien: "¡Sí! Avoir raison.", mal: "«Tener razón» = avoir raison.",
        seg: [ { es: "Pausa. Tiene razón." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["vous avez raison", "je vous l'accorde", "il n'en reste pas moins que", "je ne partage pas", "du même avis"], seg: [
        { es: "Avoir raison, como «tener razón».", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate sobre el teletrabajo", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo debaten en clase.",
    pj: PJ,
    lineas: [
      ["hugo", "Le télétravail réduit les déplacements : c'est bon pour la planète et pour le pouvoir d'achat.", "El teletrabajo reduce los desplazamientos: es bueno para el planeta y para el poder adquisitivo."],
      ["camila", "Certes, le télétravail réduit les déplacements. Il n'en reste pas moins qu'il isole certains salariés.", "Es cierto que el teletrabajo reduce los desplazamientos. No es menos cierto que aísla a algunos empleados."],
      ["hugo", "Je vous l'accorde, cette mesure a un coût, mais elle reste indispensable. — Excusez-moi de vous interrompre, mais…", "Se lo concedo, esta medida tiene un costo, pero sigue siendo indispensable. — Perdone que lo interrumpa, pero…"],
      ["camila", "Je ne partage pas votre avis sur ce point. Dans une certaine mesure, oui… mais je suis du même avis que Sofia : il faut un équilibre.", "No comparto su opinión en este punto. Hasta cierto punto, sí… pero opino lo mismo que Sofia: hace falta un equilibrio."]
    ],
    fijate: "Fíjate: certes… il n'en reste pas moins que, je vous l'accorde… mais, excusez-moi de vous interrompre, je ne partage pas votre avis, dans une certaine mesure, du même avis."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Aprobar, matizar, contradecir",
      idea: "Aprobar: Vous avez (tout à fait) raison (avoir raison, nunca «être raison»). Je partage entièrement votre avis. C'est exactement ce que je pense. Je suis du même avis. Matizar (acuerdo parcial): Certes…, mais… Je vous l'accorde, pourtant… Il n'en reste pas moins que… (no es menos cierto que). Dans une certaine mesure, oui. Contradecir: Je ne partage pas (du tout) votre point de vue. Je ne vois absolument pas les choses ainsi. Interrumpir con cortesía: Excusez-moi de vous interrompre, mais…",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Postura"], [
        ["Je partage entièrement votre avis. · C'est exactement ce que je pense. · Vous avez tout à fait raison.", "Comparto totalmente su opinión. · Es exactamente lo que pienso. · Tiene toda la razón.", "Accord"],
        ["Certes, mais il faut aussi considérer le coût. · Je vous l'accorde, pourtant la question reste ouverte. · Dans une certaine mesure, oui.", "Es cierto, pero hay que considerar el costo. · Se lo concedo, sin embargo la pregunta sigue abierta. · Hasta cierto punto, sí.", "Accord partiel (nuance)"],
        ["Je ne partage pas du tout votre point de vue. · Je ne vois absolument pas les choses ainsi.", "No comparto en absoluto su punto de vista. · No veo las cosas así en absoluto.", "Désaccord"],
        ["vous avez raison · avez", "tiene razón", "avoir raison"],
        ["Je ne partage pas votre avis. · partage", "No comparto su opinión.", "désaccord"],
        ["Il n'en reste pas moins que… · que", "No es menos cierto que…", "nuance"],
        ["Je suis du même avis que vous. · avis", "Opino lo mismo que usted.", "accord"],
        ["Certes, … · certes", "Es cierto que…", "nuance"],
        ["« Excusez-moi de vous interrompre, mais… »", "«Perdone que lo interrumpa, pero…»", "interrompre"],
        ["Un accord partiel", "un acuerdo parcial", "postura"],
        ["le réchauffement climatique · les énergies renouvelables · la biodiversité · le développement durable · le pouvoir d'achat · les gaz à effet de serre", "el calentamiento global · las energías renovables · la biodiversidad · el desarrollo sostenible · el poder adquisitivo · los gases de efecto invernadero", "vocabulario del debate"]
      ]],
      ej: [["Vous avez raison, mais…", "Tiene razón, pero…"], ["Certes, c'est cher, mais c'est utile.", "Es cierto que es caro, pero es útil."], ["Je suis du même avis.", "Opino lo mismo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Vous êtes raison.", "Vous avez raison.", "avoir raison, como «tener razón»."], ["Je pense le même.", "Je suis du même avis.", "Fórmula fija."], ["Je suis d'accord avec toi. (debate formal con un desconocido)", "Je suis d'accord avec vous.", "En un debate formal se usa vous."]] }
  ],
  ejemplos: [
    { sit: "Quieres interrumpir con cortesía. ¿Qué dices?", resp: "« Excusez-moi de vous interrompre, mais… »", pasos: ["Fórmula de cortesía."], porque: "Tomar la palabra." },
    { sit: "«Je vous l'accorde, pourtant la question reste ouverte.» ¿Qué expresa?", resp: "Un accord partiel", pasos: ["Concede y matiza."], porque: "Nuance." },
    { sit: "«Opino lo mismo que usted.»", resp: "Je suis du même avis que vous.", pasos: ["être du même avis."], porque: "Acuerdo." }
  ],
  comprueba: [
    { q: "«Tener razón» se dice…", o: ["avoir raison", "être raison"], a: 0, b: "gr", porque: "avoir." },
    { q: "«Je vous l'accorde, mais…» expresa…", o: ["un acuerdo parcial", "un desacuerdo total"], a: 0, b: "gr", porque: "Matiz." },
    { q: "«Il n'en reste pas moins que» significa…", o: ["no es menos cierto que", "ya no queda nada"], a: 0, b: "gr", porque: "Matiz." }
  ],
  practica: [
    { fase: "guiada", c: ["b3db-accord"], k: "sort", ask: "¿Acuerdo, acuerdo parcial o desacuerdo?", q: "Clasifica.", cats: ["Accord", "Accord partiel (nuance)", "Désaccord"], items: [["Je partage entièrement votre avis.", 0], ["C'est exactement ce que je pense.", 0], ["Vous avez tout à fait raison.", 0], ["Certes, mais il faut aussi considérer le coût.", 1], ["Je vous l'accorde, pourtant la question reste ouverte.", 1], ["Dans une certaine mesure, oui.", 1], ["Je ne partage pas du tout votre point de vue.", 2], ["Je ne vois absolument pas les choses ainsi.", 2]], pista: "¿Concede algo?", why: "Posturas." },
    { fase: "guiada", c: ["b3db-accord"], k: "choice", ask: "«Es cierto que el teletrabajo reduce los desplazamientos. No es menos cierto que aísla a algunos empleados.»", q: "«Certes, le télétravail réduit les déplacements. Il n'en reste pas moins ___ il isole certains salariés.»", o: ["que", "qui"], a: 0, pista: "Conjunción.", why: "<b>que</b>." },
    { fase: "guiada", c: ["b3db-parole"], k: "choice", ask: "Quieres interrumpir con cortesía. ¿Qué dices?", q: "«___»", o: ["« Excusez-moi de vous interrompre, mais… »", "« Tais-toi, c'est mon tour ! »"], a: 0, pista: "Cortesía.", why: "Fórmula." },
    { fase: "indep", c: ["b3db-accord"], k: "choice", ask: "«Je vous l'accorde, pourtant la question reste ouverte.» ¿Qué expresa?", q: "«Je vous l'accorde, pourtant…»", o: ["Un accord partiel", "Un désaccord total"], a: 0, why: "Matiz." },
    { fase: "indep", c: ["b3db-accord"], k: "fill", ask: "Presente de partager (je).", q: "Je ne ___ pas votre avis sur ce point.", acc: ["partage"], why: "<b>partage</b>." },
    { fase: "indep", c: ["b3db-accord"], k: "fill", ask: "«Opino lo mismo que usted.»", q: "Je suis du même ___ que vous.", acc: ["avis"], why: "<b>avis</b>." },
    { fase: "aplica", c: ["b3db-parole"], k: "match", ask: "Une cada término del debate con su definición.", q: "Término → definición", pairs: [["le réchauffement climatique", "la hausse des températures moyennes de la planète"], ["les énergies renouvelables", "les énergies issues de sources qui ne s'épuisent pas, comme le soleil ou le vent"], ["la biodiversité", "la diversité des espèces vivantes"], ["le pouvoir d'achat", "la quantité de biens et de services qu'on peut acheter avec son revenu"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3db-accord"], k: "spot", ask: "Encuentra el error.", s: "Je suis tout à fait d'accord : vous [êtes] raison .", fix: "avez", why: "<b>avez</b>." },
    { fase: "aplica", c: ["b3db-accord"], k: "fill", ask: "«Es cierto» (para conceder).", q: "___ , les voitures électriques polluent moins en ville ; mais leur fabrication a un fort impact environnemental.", acc: ["Certes", "certes"], why: "<b>Certes</b>." },
    { fase: "dominio", c: ["b3db-accord"], k: "order", ask: "Ordena: «Se lo concedo, esta medida tiene un costo, pero sigue siendo indispensable».", tokens: ["Je vous l'accorde,", "cette mesure a un coût,", "mais elle reste indispensable"], why: "<b>Je vous l'accorde, cette mesure a un coût, mais elle reste indispensable</b>" },
    { fase: "dominio", c: ["b3db-accord"], k: "choice", ask: "«No comparto en absoluto su punto de vista.»", q: "«___»", o: ["Je ne partage pas du tout votre point de vue.", "Je ne divise pas du tout votre point de vue."], a: 0, why: "<b>partager</b>." },
    { fase: "dominio", c: ["b3db-accord", "b3db-parole"], k: "listen", say: "Je suis du même avis que vous.", acc: ["Je suis du même avis que vous."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je suis du même avis que vous.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia"], previo: [] }
};

/* ================================ B2.1·4 · Les outils de l'écrit argumenté ================================ */
E["b21-concession-opposition"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Concession et opposition : bien que, même si, alors que, pourtant",
  objetivo: {
    que: "Vas a decir «aunque» y oponer ideas con la estructura correcta: bien que + subjuntivo, même si + indicativo, malgré + nombre, avoir beau + infinitivo.",
    corto: "Bien qu'il soit tard… · Même s'il pleut… · Malgré la grève… · J'ai beau essayer…",
    podras: ["Usar bien que / quoique / encore que + subjuntivo y même si + indicativo.", "Oponer dos hechos con alors que / tandis que + indicativo, y usar malgré / en dépit de + nombre.", "Usar los conectores entre frases (pourtant, cependant, en revanche) y la estructura avoir beau + infinitivo (por más que)."],
    iconos: ["ic2/espadas", "ic2/lapiz", "ic2/bombilla"],
    previos: ["Oponer dos ideas (B1.2, lección 30), las conjunciones con subjuntivo (B1.2, lección 19) y la concesión (B1.1, lección 10)."],
    capacidad: "Ahora tus concesiones suenan a francés escrito."
  },
  requiere: R("b2oi-conj", "b2sc-subj", "b1oc-conc"), recupera: ["b1oc-conc"],
  conceptos: {
    "b3co-mode": { n: "+ subjuntivo: bien que, quoique, encore que; + indicativo: même si, alors que, tandis que; + nombre: malgré, en dépit de (nunca «malgré que»)", b: "gr" },
    "b3co-autres": { n: "entre frases: pourtant (sin embargo), cependant, en revanche (en cambio); avoir beau + infinitivo = por más que (j'ai beau réviser…)", b: "gr" }
  },
  video: {
    titulo: "Decir «aunque»", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/espadas", grande: "bien que · même si", seg: [
        { es: "Hola. Cada «aunque» tiene su modo." } ] },
      { v: "dos",
        a: { tag: "bien que", fr: "Bien qu'il soit malade, il travaille.", es: "+ subjuntivo" },
        b: { tag: "même si", fr: "Même s'il pleut, je sortirai.", es: "+ indicativo" },
        seg: [ { es: "Con bien que:", p: 1 }, { fr: "Bien qu'il soit malade, il travaille.", p: 1 }, { es: "Con même si:", p: 2 }, { fr: "Même s'il pleut, je sortirai.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aunque está enfermo, vino a clase.»", o: ["Bien qu'il soit malade, il est venu en cours.", "Malgré qu'il soit malade, il est venu en cours."], a: 0,
        bien: "¡Sí! Malgré va con un nombre.", mal: "«Malgré que» no es correcto en registro cuidado: bien que.",
        seg: [ { es: "Pausa. Aunque está enfermo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["bien que", "même si", "malgré", "pourtant", "en revanche", "j'ai beau"], seg: [
        { es: "Bien que: subjuntivo; même si: indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El examen de historia", img: "bg-biblioteca", yo: "camila",
    escena: "Camila estudia para un examen difícil.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai beau réviser, je n'arrive pas à retenir ces dates ! Bien qu'il soit tard, je continue à travailler.", "¡Por más que repaso, no logro retener esas fechas! Aunque es tarde, sigo trabajando."],
      ["hugo", "Courage ! Mon frère adore l'histoire, alors que moi, je la déteste. Même s'il pleut, on ira se promener après.", "¡Ánimo! A mi hermano le encanta la historia, mientras que yo la detesto. Aunque llueva, saldremos a caminar después."],
      ["camila", "Malgré la grève, les cours ont eu lieu. Bien qu'elle ait beaucoup travaillé, Laura n'a pas réussi l'an dernier.", "A pesar de la huelga, hubo clases. Aunque trabajó mucho, Laura no aprobó el año pasado."],
      ["hugo", "Le projet de Laura était ambitieux ; en revanche, son coût était très élevé. Quoiqu'elle ait raison, personne ne l'écoute.", "El proyecto de Laura era ambicioso; en cambio, su costo era muy alto. Aunque tiene razón, nadie la escucha."]
    ],
    fijate: "Fíjate: j'ai beau réviser; bien qu'il soit, bien qu'elle ait, quoiqu'elle ait (subjuntivo); alors que, même s'il pleut (indicativo); malgré la grève (nombre); en revanche."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cada estructura con su modo",
      idea: "Bien que / quoique / encore que + subjuntivo: Bien qu'il soit tard, elle travaille. Même si + indicativo (como «aunque» + indicativo o subjuntivo hipotético): Même s'il pleut, je sortirai. Alors que / tandis que + indicativo: oponen dos hechos (mientras que). Malgré / en dépit de + nombre: malgré la pluie (nunca «malgré que» en registro cuidado). Entre dos frases: pourtant (sin embargo), cependant, en revanche (en cambio). Avoir beau + infinitivo = por más que: J'ai beau essayer, je n'y arrive pas.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["bien que · quoique · encore que", "aunque (hecho real)", "+ subjuntivo"],
        ["même si · alors que · tandis que", "aunque · mientras que", "+ indicativo"],
        ["malgré · en dépit de · Malgré", "a pesar de", "+ nombre"],
        ["Bien qu'il soit tard… · Bien qu'il", "Aunque es tarde…", "subjuntivo"],
        ["Bien qu'elle ait beaucoup travaillé… · Quoiqu'il ait raison… · ait", "Aunque trabajó mucho… · Aunque tiene razón…", "subjuntivo"],
        ["Même s'il pleut, nous irons au match. · pleut · Même s'il est", "Aunque llueva, iremos al partido.", "indicativo"],
        ["Mon frère adore les maths, alors que moi, je les déteste. · alors que · tandis que", "A mi hermano le encantan las matemáticas, mientras que yo las detesto.", "oposición"],
        ["Malgré la grève, les cours ont eu lieu.", "A pesar de la huelga, hubo clases.", "nombre"],
        ["pourtant · cependant · en revanche", "sin embargo · no obstante · en cambio", "entre frases"],
        ["J'ai beau réviser, je n'y arrive pas. · ai · j'ai beau", "Por más que repaso, no lo logro.", "avoir beau + inf."]
      ]],
      ej: [["Bien qu'il soit malade, il travaille.", "Aunque está enfermo, trabaja."], ["Même s'il pleut, je sortirai.", "Aunque llueva, saldré."], ["Malgré la grève, il y a cours.", "A pesar de la huelga, hay clase."], ["J'ai beau essayer, je n'y arrive pas.", "Por más que lo intento, no lo logro."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Bien qu'il est tard.", "Bien qu'il soit tard.", "Bien que + subjuntivo."], ["Même s'il soit tard.", "Même s'il est tard.", "Même si + indicativo."], ["Malgré qu'il soit malade…", "Bien qu'il soit malade…", "Malgré + nombre."]] }
  ],
  ejemplos: [
    { sit: "«Aunque trabajó mucho, no aprobó.»", resp: "Bien qu'elle ait beaucoup travaillé, elle n'a pas réussi.", pasos: ["bien que + subjuntivo pasado."], porque: "Concesión." },
    { sit: "«Aunque llueva, iremos al partido.»", resp: "Même s'il pleut, nous irons au match.", pasos: ["même si + indicativo."], porque: "Concesión." },
    { sit: "«El proyecto es ambicioso; en cambio, su costo es muy alto.»", resp: "Le projet est ambitieux ; en revanche, son coût est très élevé.", pasos: ["en revanche entre frases."], porque: "Oposición." }
  ],
  comprueba: [
    { q: "Bien que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "bien qu'il soit." },
    { q: "Même si va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "même s'il pleut." },
    { q: "«J'ai beau essayer» significa…", o: ["por más que lo intento", "intento bien"], a: 0, b: "gr", porque: "avoir beau." }
  ],
  practica: [
    { fase: "guiada", c: ["b3co-mode"], k: "sort", ask: "¿+ subjuntivo, + indicativo o + nombre?", q: "Clasifica.", cats: ["+ subjuntivo", "+ indicativo", "+ nombre"], items: [["bien que", 0], ["quoique", 0], ["encore que", 0], ["même si", 1], ["alors que", 1], ["tandis que", 1], ["malgré", 2], ["en dépit de", 2]], pista: "Malgré: nombre.", why: "Construcciones." },
    { fase: "guiada", c: ["b3co-mode"], k: "choice", ask: "«Aunque trabajó mucho, no aprobó.»", q: "«Bien qu'elle ___ beaucoup travaillé, elle n'a pas réussi.»", o: ["ait", "a"], a: 0, pista: "Subjuntivo.", why: "<b>ait</b>." },
    { fase: "guiada", c: ["b3co-mode"], k: "choice", ask: "«Aunque llueva, iremos al partido.»", q: "«Même s'il ___ , nous irons au match.»", o: ["pleut", "pleuve"], a: 0, pista: "Indicativo.", why: "<b>pleut</b>." },
    { fase: "indep", c: ["b3co-mode"], k: "choice", ask: "«A pesar de la huelga, hubo clases.»", q: "«___ la grève, les cours ont eu lieu.»", o: ["Malgré", "Bien que"], a: 0, why: "<b>Malgré</b>." },
    { fase: "indep", c: ["b3co-mode"], k: "fill", ask: "«mientras que» (oposición)", q: "Mon frère adore les maths, ___ moi, je les déteste.", acc: ["alors que", "tandis que"], why: "<b>alors que</b>." },
    { fase: "indep", c: ["b3co-mode"], k: "fill", ask: "Subjuntivo de avoir.", q: "Quoiqu'il ___ raison, personne ne l'écoute.", acc: ["ait"], why: "<b>ait</b>." },
    { fase: "aplica", c: ["b3co-autres"], k: "fill", ask: "avoir en presente (j').", q: "J'___ beau réviser, je n'arrive pas à retenir ces dates.", acc: ["ai"], why: "<b>J'ai beau</b>." },
    { fase: "aplica", c: ["b3co-mode"], k: "spot", ask: "Encuentra el error.", s: "[Malgré qu'il] soit malade , il est venu en cours .", fix: "Bien qu'il", why: "<b>Bien qu'il</b>." },
    { fase: "aplica", c: ["b3co-mode"], k: "spot", ask: "Encuentra el error.", s: "[Même s'il soit] tard , je vais finir ce chapitre .", fix: "Même s'il est", why: "<b>Même s'il est</b>." },
    { fase: "dominio", c: ["b3co-autres"], k: "match", ask: "Une cada expresión española con la francesa.", q: "Español → francés", pairs: [["sin embargo", "pourtant"], ["en cambio", "en revanche"], ["a pesar de", "malgré"], ["aunque (hecho real)", "bien que"], ["por más que estudie", "j'ai beau étudier"]], why: "Equivalencias." },
    { fase: "dominio", c: ["b3co-autres"], k: "choice", ask: "«El proyecto es ambicioso; en cambio, su costo es muy alto.»", q: "«Le projet est ambitieux ; ___ , son coût est très élevé.»", o: ["en revanche", "malgré"], a: 0, why: "<b>en revanche</b>." },
    { fase: "dominio", c: ["b3co-mode", "b3co-autres"], k: "listen", say: "Bien qu'il soit tard, elle continue à travailler.", acc: ["Bien qu'il soit tard, elle continue à travailler."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bien qu'il soit tard, elle continue à travailler.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura"], previo: [] }
};

E["b21-condition"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La condition sans si : à condition que, au cas où, à moins que",
  objetivo: {
    que: "Vas a poner condiciones, prever un caso y señalar excepciones, cada una con su modo: subjuntivo, condicional o indicativo.",
    corto: "à condition que tu sois là · au cas où tu aurais faim · à moins qu'il ne pleuve · sauf si…",
    podras: ["Usar la condición necesaria con subjuntivo: à condition que, pourvu que, en admettant que.", "Prever un caso con condicional (au cas où, dans l'hypothèse où) o con un nombre (en cas de).", "Expresar la excepción: à moins que (ne) + subjuntivo, sauf si / si jamais + indicativo; y con el mismo sujeto, à condition de / à moins de + infinitivo."],
    iconos: ["ic2/bombilla", "ic2/candado", "ic2/pregunta"],
    previos: ["Expresar la condición (B1.2, lección 29) y las conjunciones con subjuntivo (B1.2, lección 19)."],
    capacidad: "Ahora redactas condiciones como en un contrato."
  },
  requiere: R("b2cd-cas", "b2cd-cond", "b2sc-subj"), recupera: ["b2cd-cas"],
  conceptos: {
    "b3cd-mode": { n: "+ subjuntivo: à condition que, pourvu que, à moins que (ne), en admettant que; + condicional: au cas où, dans l'hypothèse où; + indicativo: sauf si, si jamais", b: "gr" },
    "b3cd-autres": { n: "en cas de + nombre; mismo sujeto: à condition de / à moins de + infinitivo; sans + nombre (sans ton aide, je n'aurais…)", b: "gr" }
  },
  video: {
    titulo: "Condiciones sin si", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "au cas où", seg: [
        { es: "Hola. Tres tipos de condición, tres modos." } ] },
      { v: "frase", filas: [
          { nota: "condición", p: 1, partes: [["Je viendrai à condition que tu sois là.", "-", 1]] },
          { nota: "por si", p: 2, partes: [["Au cas où tu aurais faim, il y a du pain.", "-", 2]] },
          { nota: "excepción", p: 3, partes: [["On sortira, à moins qu'il ne pleuve.", "-", 3]] } ], seg: [
        { fr: "Je viendrai à condition que tu sois là.", p: 1 }, { fr: "Au cas où tu aurais faim, il y a du pain.", p: 2 }, { fr: "On sortira, à moins qu'il ne pleuve.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llámame por si necesitas ayuda.»", o: ["Appelle-moi au cas où tu aurais besoin d'aide.", "Appelle-moi au cas où tu as besoin d'aide."], a: 0,
        bien: "¡Sí! Au cas où + condicional.", mal: "Au cas où va con condicional: aurais.",
        seg: [ { es: "Pausa. Por si necesitas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["à condition que", "au cas où", "à moins que", "sauf si", "en cas de", "à moins de"], seg: [
        { es: "Subjuntivo, condicional, indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El intercambio", img: "bg-universidad", yo: "camila",
    escena: "Camila pregunta por el semestre de intercambio.",
    pj: PJ,
    lineas: [
      ["camila", "Je pourrai partir en échange ?", "¿Podré irme de intercambio?"],
      ["hugo", "Oui, à condition que tu finisses ton mémoire. Et tu ne réussiras pas à moins de travailler davantage !", "Sí, siempre que termines tu memoria. ¡Y no lo lograrás a menos que trabajes más!"],
      ["camila", "Je viendrai à la soutenance, sauf si mon vol a du retard. Appelle-moi au cas où tu aurais besoin d'aide.", "Iré a la sustentación, salvo si mi vuelo se retrasa. Llámame por si necesitas ayuda."],
      ["hugo", "D'accord. Nous irons à la plage, à moins qu'il ne fasse mauvais. Sans ton aide, je n'aurais jamais fini à temps !", "De acuerdo. Iremos a la playa, a menos que haga mal tiempo. ¡Sin tu ayuda, nunca habría terminado a tiempo!"]
    ],
    fijate: "Fíjate: à condition que tu finisses, à moins qu'il ne fasse (subjuntivo); au cas où tu aurais (condicional); sauf si mon vol a (indicativo); à moins de travailler (infinitivo); sans ton aide."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Condición, previsión, excepción",
      idea: "Condición necesaria: à condition que / pourvu que / en admettant que + subjuntivo: Je viendrai à condition que tu sois là. Por si acaso: au cas où / dans l'hypothèse où + condicional (au cas où tu aurais faim) o en cas de + nombre (en cas de problème). Excepción: à moins que (ne) + subjuntivo (à moins qu'il ne pleuve) o sauf si / si jamais + indicativo (sauf si mon vol a du retard). Con el mismo sujeto: à condition de / à moins de + infinitivo. Sans + nombre también puede expresar una condición: Sans ton aide, je n'aurais jamais fini.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["à condition que · pourvu que · à moins que · en admettant que", "siempre que · con tal de que · a menos que · suponiendo que", "+ subjuntivo"],
        ["au cas où · dans l'hypothèse où", "por si · en el caso de que", "+ condicional"],
        ["sauf si · si jamais", "salvo si · si por casualidad", "+ indicativo"],
        ["à condition que tu sois prudent · sois", "siempre que seas prudente", "subjuntivo"],
        ["à condition que tu finisses ton mémoire · finisses", "siempre que termines tu memoria", "subjuntivo"],
        ["à moins qu'il ne fasse mauvais · fasse", "a menos que haga mal tiempo", "subjuntivo (+ ne)"],
        ["au cas où il pleuvrait · pleuvrait · au cas où tu aurais besoin d'aide · aurais", "por si llueve · por si necesitas ayuda", "condicional"],
        ["sauf si mon vol a du retard · a", "salvo si mi vuelo se retrasa", "indicativo"],
        ["En cas d'incendie, n'utilisez pas l'ascenseur. · En cas · en cas", "En caso de incendio, no usen el ascensor.", "+ nombre"],
        ["à moins de travailler davantage · à moins", "a menos que trabajes más (mismo sujeto)", "+ infinitivo"],
        ["Sans ton aide, je n'aurais jamais fini à temps. · Sans", "Sin tu ayuda, nunca habría terminado a tiempo.", "sans + nombre"]
      ]],
      ej: [["Je viendrai à condition que tu sois là.", "Iré siempre que estés."], ["Au cas où tu aurais faim, il y a du pain.", "Por si tienes hambre, hay pan."], ["On sortira, à moins qu'il ne pleuve.", "Saldremos, a menos que llueva."], ["En cas de problème, appelle-moi.", "En caso de problema, llámame."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["au cas où il pleuve", "au cas où il pleuvrait", "Au cas où + condicional, no subjuntivo."], ["à condition que tu finis", "à condition que tu finisses", "Subjuntivo."], ["sauf s'il ait du retard", "sauf s'il a du retard", "Sauf si + indicativo."]] }
  ],
  ejemplos: [
    { sit: "«Lleva tu paraguas por si llueve.»", resp: "Prends ton parapluie au cas où il pleuvrait.", pasos: ["au cas où + condicional."], porque: "Previsión." },
    { sit: "«Te presto mi carro siempre que seas prudente.»", resp: "Je te prête ma voiture à condition que tu sois prudent.", pasos: ["à condition que + subjuntivo."], porque: "Condición." },
    { sit: "«No lo lograrás a menos que trabajes más.» (mismo sujeto)", resp: "Tu ne réussiras pas à moins de travailler davantage.", pasos: ["à moins de + infinitivo."], porque: "Excepción." }
  ],
  comprueba: [
    { q: "Au cas où va con…", o: ["condicional", "subjuntivo"], a: 0, b: "gr", porque: "au cas où il pleuvrait." },
    { q: "À moins que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "à moins qu'il ne pleuve." },
    { q: "Sauf si va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "sauf si mon vol a…" }
  ],
  practica: [
    { fase: "guiada", c: ["b3cd-mode"], k: "sort", ask: "¿+ subjuntivo, + condicional o + indicativo?", q: "Clasifica.", cats: ["+ subjuntivo", "+ condicional", "+ indicativo"], items: [["à condition que", 0], ["pourvu que", 0], ["à moins que", 0], ["en admettant que", 0], ["au cas où", 1], ["dans l'hypothèse où", 1], ["sauf si", 2], ["si jamais", 2]], pista: "Au cas où: condicional.", why: "Modos." },
    { fase: "guiada", c: ["b3cd-mode"], k: "choice", ask: "«Lleva tu paraguas por si llueve.»", q: "«Prends ton parapluie au cas où il ___ .»", o: ["pleuvrait", "pleuve"], a: 0, pista: "Condicional.", why: "<b>pleuvrait</b>." },
    { fase: "guiada", c: ["b3cd-mode"], k: "choice", ask: "«Te presto mi carro siempre que seas prudente.»", q: "«Je te prête ma voiture à condition que tu ___ prudent.»", o: ["sois", "es"], a: 0, pista: "Subjuntivo.", why: "<b>sois</b>." },
    { fase: "indep", c: ["b3cd-autres"], k: "choice", ask: "«No lo lograrás a menos que trabajes más.» (mismo sujeto)", q: "«Tu ne réussiras pas ___ de travailler davantage.»", o: ["à moins", "sauf"], a: 0, why: "<b>à moins de</b>." },
    { fase: "indep", c: ["b3cd-mode"], k: "fill", ask: "Subjuntivo de faire.", q: "Nous irons à la plage, à moins qu'il ne ___ mauvais.", acc: ["fasse"], why: "<b>fasse</b>." },
    { fase: "indep", c: ["b3cd-autres"], k: "fill", ask: "«En caso de» (+ nombre)", q: "___ d'incendie, n'utilisez pas l'ascenseur.", acc: ["En cas", "en cas"], why: "<b>En cas</b>." },
    { fase: "aplica", c: ["b3cd-mode"], k: "fill", ask: "avoir en presente (sauf si).", q: "Je viendrai à la soutenance, sauf si mon vol ___ du retard.", acc: ["a"], why: "<b>a</b>." },
    { fase: "aplica", c: ["b3cd-mode"], k: "spot", ask: "Encuentra el error.", s: "Tu pourras partir en échange à condition que tu [finis] ton mémoire .", fix: "finisses", why: "<b>finisses</b>." },
    { fase: "aplica", c: ["b3cd-mode"], k: "spot", ask: "Encuentra el error.", s: "Appelle-moi au cas où tu [as] besoin d'aide .", fix: "aurais", why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b3cd-mode"], k: "match", ask: "Une cada expresión española con la francesa.", q: "Español → francés", pairs: [["en caso de que", "au cas où"], ["a menos que", "à moins que"], ["con tal de que", "pourvu que"], ["salvo si", "sauf si"], ["siempre y cuando", "à condition que"]], why: "Equivalencias." },
    { fase: "dominio", c: ["b3cd-autres"], k: "choice", ask: "«¡Sin tu ayuda, nunca habría terminado a tiempo!»", q: "«___ ton aide, je n'aurais jamais fini à temps.»", o: ["Sans", "Sauf"], a: 0, why: "<b>Sans</b>." },
    { fase: "dominio", c: ["b3cd-mode", "b3cd-autres"], k: "listen", say: "Je viendrai à condition que tu m'attendes.", acc: ["Je viendrai à condition que tu m'attendes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je viendrai à condition que tu m'attendes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b21-passe-simple"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le passé simple : reconnaître et comprendre",
  objetivo: {
    que: "Vas a leer relatos en passé simple con soltura, distinguir el passé simple (acciones) del imparfait (decorado) y escribir sus formas más frecuentes.",
    corto: "Il entra et s'assit. · Elle naquit en 1940. · Ils eurent peur.",
    podras: ["Reconocer las terminaciones: -a / -èrent (il parla, ils quittèrent), -it (il finit, il prit), -ut (il voulut, il lut).", "Memorizar los irregulares clave: fut, eut, fit, vint, naquit.", "Usar el passé simple para las acciones del relato y el imparfait para el decorado; y el passé composé al hablar."],
    iconos: ["ic2/libro", "ic2/pergamino", "ic2/lapiz"],
    previos: ["Reconocer el passé simple (B1.2, lección 23) y la concordancia de tiempos en el relato (B1.2, lección 21)."],
    capacidad: "Ahora lees un cuento de Maupassant sin perderte."
  },
  requiere: R("b2ps-reg", "b2ps-irr", "b2ct-anter"), recupera: ["b2ps-irr"],
  conceptos: {
    "b3ps-formes": { n: "-er: -a, -èrent (il parla, ils quittèrent); -ir / -re: -it, -irent (il ouvrit, il prit); -ut (il lut, il voulut); fut, eut (sin acento circunflejo: ils eurent), fit, vint, naquit", b: "gr" },
    "b3ps-usage": { n: "passé simple = acciones del relato escrito; imparfait = decorado (il faisait nuit quand le train arriva); al hablar: passé composé (je suis allé)", b: "gr" }
  },
  video: {
    titulo: "El tiempo de los libros", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "il entra et s'assit", seg: [
        { es: "Hola. Ahora vas a leer el passé simple con soltura." } ] },
      { v: "dos",
        a: { tag: "decorado", fr: "Il faisait nuit…", es: "imparfait" },
        b: { tag: "acción", fr: "…quand le train arriva en gare.", es: "passé simple" },
        seg: [ { es: "El decorado:", p: 1 }, { fr: "Il faisait nuit…", p: 1 }, { es: "La acción:", p: 2 }, { fr: "quand le train arriva en gare.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tuvieron miedo y huyeron.»", o: ["Ils eurent peur et s'enfuirent.", "Ils eûrent peur et s'enfuirent."], a: 0,
        bien: "¡Sí! Eurent, sin acento.", mal: "Ils eurent, sin circunflejo.",
        seg: [ { es: "Pausa. Tuvieron miedo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il fut", "il eut", "il fit", "il vint", "il naquit", "ils quittèrent"], seg: [
        { es: "Acción: passé simple; decorado: imparfait.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El cuento de la noche", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee un cuento en voz alta.",
    pj: PJ,
    lineas: [
      ["camila", "« Il faisait nuit quand le train arriva soudain en gare. Soudain, la porte s'ouvrit et un homme entra. »", "«Era de noche cuando el tren llegó de repente a la estación. De repente, la puerta se abrió y entró un hombre»."],
      ["hugo", "Et ensuite ?", "¿Y luego?"],
      ["camila", "« Il ouvrit la fenêtre et regarda la mer. Elle prit son manteau et sortit sans rien dire. Elle lut la lettre et se mit à pleurer. »", "«Abrió la ventana y miró el mar. Ella tomó su abrigo y salió sin decir nada. Leyó la carta y se puso a llorar»."],
      ["hugo", "Comme dans les livres d'histoire : « Victor Hugo naquit en 1802 à Besançon. » Mais à l'oral, on dit : « Samedi, je suis allé au musée d'Orsay. »", "Como en los libros de historia: «Victor Hugo nació en 1802 en Besanzón». Pero al hablar se dice: «El sábado fui al museo de Orsay»."]
    ],
    fijate: "Fíjate: il faisait nuit (decorado, imparfait); arriva, s'ouvrit, entra, ouvrit, regarda, prit, sortit, lut, naquit (acciones, passé simple); je suis allé (oral)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formas y uso del passé simple",
      idea: "Verbos en -er: -a, -èrent (il parla, ils parlèrent, ils quittèrent). Verbos en -ir / -re: -it, -irent (il finit, il ouvrit, il prit, elle sortit). Otros en -ut: il voulut, il lut, il put. Irregulares clave: il fut (être), il eut / ils eurent (avoir, sin circunflejo), il fit (faire), il vint (venir), il naquit (naître). Uso: el passé simple cuenta las acciones del relato escrito; el imparfait pinta el decorado: Il faisait nuit quand le train arriva. Al hablar se usa el passé composé: Samedi, je suis allé au musée.",
      intro: "Toca cada frase.",
      tabla: [["Passé simple", "Infinitivo / Español", "Grupo"], [
        ["il fut · il eut · il fit · il vint · il naquit", "être · avoir · faire · venir · naître", "irregulares"],
        ["« il fut » · fue / estuvo", "être", "irregular"],
        ["la porte s'ouvrit · ouvrit", "se abrió", "-it"],
        ["Ils quittèrent la ville à l'aube. · quittèrent", "Dejaron la ciudad al alba.", "-èrent"],
        ["Victor Hugo naquit en 1802. · naquit", "Victor Hugo nació en 1802.", "irregular"],
        ["Elle lut la lettre. · lut", "Leyó la carta.", "-ut"],
        ["Le roi fit un long discours. · fit", "El rey pronunció un largo discurso.", "irregular"],
        ["il marcha · elles furent · nous prîmes · ils virent", "caminó · fueron · tomamos · vieron", "Passé simple"],
        ["il marchait · elles étaient · nous prenions · ils voyaient", "caminaba · eran · tomábamos · veían", "Imparfait"],
        ["le train arriva · arriva", "el tren llegó", "acción"],
        ["Ils eurent peur. · eurent", "Tuvieron miedo.", "sin circunflejo"],
        ["Samedi, je suis allé au musée d'Orsay. · suis allé", "El sábado fui al museo de Orsay.", "oral: passé composé"]
      ]],
      ej: [["Il entra et s'assit.", "Entró y se sentó."], ["Elle naquit en 1940.", "Nació en 1940."], ["Ils eurent peur.", "Tuvieron miedo."], ["Il fit un discours.", "Hizo un discurso."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Hier, j'allai au cinéma. (oral)", "Hier, je suis allé au cinéma.", "El passé simple es para el relato escrito."], ["Ils eûrent peur.", "Ils eurent peur.", "Sin circunflejo."], ["Il faisait nuit quand le train arrivait soudain.", "Il faisait nuit quand le train arriva soudain.", "Acción puntual: passé simple."]] }
  ],
  ejemplos: [
    { sit: "«De repente, la puerta se abrió y un hombre entró.»", resp: "Soudain, la porte s'ouvrit et un homme entra.", pasos: ["ouvrir → ouvrit."], porque: "Acción." },
    { sit: "«Dejaron la ciudad al alba.»", resp: "Ils quittèrent la ville à l'aube.", pasos: ["-er → -èrent."], porque: "Plural." },
    { sit: "«El sábado fui al museo de Orsay.» (oral)", resp: "Samedi, je suis allé au musée d'Orsay.", pasos: ["Oral: passé composé."], porque: "Registro." }
  ],
  comprueba: [
    { q: "«il fut» significa…", o: ["fue / estuvo", "hizo"], a: 0, b: "gr", porque: "être." },
    { q: "El decorado de un relato va en…", o: ["imparfait", "passé simple"], a: 0, b: "gr", porque: "il faisait nuit." },
    { q: "Al hablar se usa…", o: ["el passé composé", "el passé simple"], a: 0, b: "gr", porque: "Oral." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ps-usage"], k: "sort", ask: "¿Passé simple o imparfait?", q: "Clasifica.", cats: ["Passé simple", "Imparfait"], items: [["il marcha", 0], ["il marchait", 1], ["elles furent", 0], ["elles étaient", 1], ["nous prîmes", 0], ["nous prenions", 1], ["ils virent", 0], ["ils voyaient", 1]], pista: "-ait, -aient: imparfait.", why: "Tiempos." },
    { fase: "guiada", c: ["b3ps-formes"], k: "choice", ask: "«De repente, la puerta se abrió y entró un hombre.»", q: "«Soudain, la porte s'___ et un homme entra.»", o: ["ouvrit", "ouvra"], a: 0, pista: "ouvrir.", why: "<b>ouvrit</b>." },
    { fase: "guiada", c: ["b3ps-formes"], k: "choice", ask: "«Dejaron la ciudad al alba.»", q: "«Ils ___ la ville à l'aube.»", o: ["quittèrent", "quittirent"], a: 0, pista: "-er.", why: "<b>quittèrent</b>." },
    { fase: "indep", c: ["b3ps-formes"], k: "choice", es: true, ask: "«il fut» significa…", q: "Elige.", o: ["fue / estuvo", "hizo"], a: 0, why: "être." },
    { fase: "indep", c: ["b3ps-formes"], k: "fill", ask: "Passé simple de naître.", q: "Victor Hugo ___ en 1802 à Besançon.", acc: ["naquit"], why: "<b>naquit</b>." },
    { fase: "indep", c: ["b3ps-formes"], k: "fill", ask: "Passé simple de lire.", q: "Elle ___ la lettre et se mit à pleurer.", acc: ["lut"], why: "<b>lut</b>." },
    { fase: "aplica", c: ["b3ps-formes"], k: "match", ask: "Une cada forma con su infinitivo.", q: "Passé simple → infinitivo", pairs: [["il fut", "être"], ["il eut", "avoir"], ["il fit", "faire"], ["il vint", "venir"], ["il naquit", "naître"]], why: "Irregulares." },
    { fase: "aplica", c: ["b3ps-usage"], k: "spot", ask: "Encuentra el error.", s: "Il faisait nuit quand le train [arrivait] soudain en gare .", fix: "arriva", why: "<b>arriva</b>." },
    { fase: "aplica", c: ["b3ps-formes"], k: "spot", ask: "Encuentra el error.", s: "Ils [eûrent] peur et s'enfuirent .", fix: "eurent", why: "<b>eurent</b>." },
    { fase: "dominio", c: ["b3ps-usage"], k: "choice", ask: "«El sábado fui al museo de Orsay.» (oral)", q: "«Samedi, je ___ au musée d'Orsay.»", o: ["suis allé", "allai"], a: 0, why: "Oral: <b>suis allé</b>." },
    { fase: "dominio", c: ["b3ps-formes"], k: "fill", ask: "Passé simple de faire.", q: "Le roi ___ un long discours.", acc: ["fit"], why: "<b>fit</b>." },
    { fase: "dominio", c: ["b3ps-formes", "b3ps-usage"], k: "listen", say: "Elle prit son manteau et sortit sans rien dire.", acc: ["Elle prit son manteau et sortit sans rien dire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elle prit son manteau et sortit sans rien dire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Victor Hugo", "Besançon", "Orsay", "Maupassant"], previo: [] }
};

E["b21-nominalisation"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La nominalisation et le registre soutenu",
  objetivo: {
    que: "Vas a transformar frases completas en grupos nominales formales: Les prix augmentent → l'augmentation des prix.",
    corto: "Les prix ont fortement augmenté. → La forte augmentation des prix.",
    podras: ["Encontrar el nombre del verbo o del adjetivo (-tion, -ment, -age, -ure, -ée, -ité) y su género.", "Pasar el sujeto a complemento con de (du, des) y el adverbio a adjetivo: fortement → forte.", "Subir el registro con verbos precisos: faire des tests → effectuer des tests."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/libro"],
    previos: ["La nominalización (B1.2, lección 27) y los verbos precisos (B1.2, lección 57)."],
    capacidad: "Ahora escribes informes y titulares en registro formal."
  },
  requiere: R("b2no-suff", "b2no-autres", "b2vp2-faire"), recupera: ["b2no-autres"],
  conceptos: {
    "b3no-genre": { n: "sufijos y género: -tion, -ure, -ée, -ité, la hausse (femenino: la fermeture, l'arrivée, la réduction, l'efficacité); -ment, -age (masculino: le licenciement, le chômage); le départ, le choix, la vente, la naissance", b: "gr" },
    "b3no-phrase": { n: "transformar la frase: sujeto → de / du / des (la baisse des inscriptions); adverbio → adjetivo (la forte augmentation); registro: effectuer, affirmer", b: "gr" }
  },
  video: {
    titulo: "De la frase al grupo nominal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "l'augmentation des prix", seg: [
        { es: "Hola. Escribir más formal y más corto." } ] },
      { v: "frase", filas: [
          { nota: "frase", p: 1, partes: [["Les prix ont fortement augmenté.", "-", 1]] },
          { nota: "→ nombre", p: 2, partes: [["La forte augmentation des prix.", "-", 2]] },
          { nota: "título", p: 3, partes: [["Forte baisse du chômage en Colombie", "-", 3]] } ], seg: [
        { fr: "Les prix ont fortement augmenté.", p: 1 }, { fr: "La forte augmentation des prix.", p: 2 }, { fr: "Forte baisse du chômage en Colombie", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El desarrollo del turismo preocupa a los habitantes.»", o: ["Le développement du tourisme inquiète les habitants.", "Le développation du tourisme inquiète les habitants."], a: 0,
        bien: "¡Sí! Développer → le développement.", mal: "El sufijo es -ment.",
        seg: [ { es: "Pausa. El desarrollo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'augmentation", "la fermeture", "la baisse", "le licenciement", "l'efficacité", "effectuer"], seg: [
        { es: "Sujeto con de; adverbio en adjetivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El informe de prácticas", img: "bg-biblioteca", yo: "camila",
    escena: "Hugo ayuda a Camila a escribir su informe.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Les prix ont fortement augmenté et les usines ferment. »", "Escribí: «Los precios subieron mucho y las fábricas cierran»."],
      ["hugo", "Plus formel : « La forte augmentation des prix et la fermeture des usines. » Et le titre : « Forte baisse du chômage en Colombie ».", "Más formal: «El fuerte aumento de los precios y el cierre de las fábricas». Y el título: «Fuerte baja del desempleo en Colombia»."],
      ["camila", "Et « Le gouvernement réduit les impôts » ? — « La réduction des impôts. » On observe aussi une baisse des inscriptions à l'université.", "¿Y «El gobierno reduce los impuestos»? — «La reducción de los impuestos». También se observa una baja de las inscripciones en la universidad."],
      ["hugo", "Parfait. Et pas « on a fait des tests », mais : « Le laboratoire a effectué des tests. » La hausse des prix inquiète les consommateurs.", "Perfecto. Y no «hicimos pruebas», sino: «El laboratorio efectuó pruebas». El alza de los precios preocupa a los consumidores."]
    ],
    fijate: "Fíjate: la forte augmentation des prix (fortement → forte), la fermeture des usines, la baisse du chômage, la réduction des impôts, des inscriptions, a effectué."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cómo nominalizar una frase",
      idea: "1. Busca el nombre del verbo o del adjetivo: -tion (réduction), -ment (développement), -age (nettoyage), -ure (fermeture), -ée (arrivée), -ité (efficacité). 2. Revisa el género: -tion, -ure, -ée, -ité son femeninos; -ment, -age, masculinos. 3. El sujeto pasa a complemento con de (de + le = du, de + les = des): Les usines ferment → la fermeture des usines. 4. El adverbio se vuelve adjetivo: fortement → forte: la forte augmentation. 5. Sube el registro: faire → effectuer, dire → affirmer.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Transformación"], [
        ["Les prix augmentent → l'augmentation des prix · augmentation", "el aumento de los precios", "-ation"],
        ["Les usines ferment → la fermeture des usines · fermeture", "el cierre de las fábricas", "-ure"],
        ["Le chômage baisse → la baisse du chômage", "la baja del desempleo", "nombre sin sufijo"],
        ["Le musée ouvre → Ouverture du musée · Ouverture", "Apertura del museo", "-ure"],
        ["Le président arrive → l'arrivée du président · Arrivée · L'arrivée · arrivée", "la llegada del presidente", "-ée"],
        ["Le gouvernement réduit les impôts → la réduction des impôts · réduction", "la reducción de los impuestos", "-tion"],
        ["Ce système est efficace → l'efficacité de ce système · efficacité", "la eficacia de este sistema", "-ité (adjetivo)"],
        ["fermeture · arrivée · réduction · hausse", "cierre · llegada · reducción · alza", "Femenino (la)"],
        ["licenciement · chômage · départ · développement", "despido · desempleo · salida · desarrollo", "Masculino (le)"],
        ["choisir → le choix · vendre → la vente · partir → le départ · naître → la naissance · nettoyer → le nettoyage", "la elección · la venta · la salida · el nacimiento · la limpieza", "irregulares"],
        ["une baisse des inscriptions · des", "una baja de las inscripciones", "de + les = des"],
        ["Le laboratoire a effectué des tests.", "El laboratorio efectuó pruebas.", "registro soutenu"]
      ]],
      ej: [["Les prix augmentent → l'augmentation des prix", "el aumento de los precios"], ["Les usines ferment → la fermeture des usines", "el cierre de las fábricas"], ["Le chômage baisse → la baisse du chômage", "la baja del desempleo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["l'augmentement de les prix", "l'augmentation des prix", "Verifica el sufijo y contrae de + les."], ["le développation du tourisme", "le développement du tourisme", "Sufijo -ment."], ["la fortement augmentation", "la forte augmentation", "El adverbio se vuelve adjetivo."]] }
  ],
  ejemplos: [
    { sit: "«Les prix ont fortement augmenté.» →", resp: "La forte augmentation des prix.", pasos: ["augmenter → augmentation.", "fortement → forte."], porque: "Nominalización." },
    { sit: "«Le musée ouvre le 3 mai.» →", resp: "Ouverture du musée le 3 mai.", pasos: ["ouvrir → ouverture."], porque: "Título." },
    { sit: "Registro soutenu de «le labo a fait des tests»", resp: "Le laboratoire a effectué des tests.", pasos: ["faire → effectuer."], porque: "Registro." }
  ],
  comprueba: [
    { q: "Los nombres en -tion son…", o: ["femeninos", "masculinos"], a: 0, b: "gr", porque: "la réduction." },
    { q: "Al nominalizar, «fortement» se vuelve…", o: ["forte", "fortement"], a: 0, b: "gr", porque: "Adjetivo." },
    { q: "«de + les» da…", o: ["des", "de les"], a: 0, b: "gr", porque: "Contracción." }
  ],
  practica: [
    { fase: "guiada", c: ["b3no-genre"], k: "sort", ask: "¿Femenino (la) o masculino (le)?", q: "Clasifica.", cats: ["Femenino (la)", "Masculino (le)"], items: [["fermeture", 0], ["licenciement", 1], ["arrivée", 0], ["chômage", 1], ["réduction", 0], ["départ", 1], ["hausse", 0], ["développement", 1]], pista: "-ment, -age: masculino.", why: "Géneros." },
    { fase: "guiada", c: ["b3no-phrase"], k: "choice", ask: "«Les prix ont fortement augmenté.» →", q: "«La forte ___ des prix.»", o: ["augmentation", "augmentement"], a: 0, pista: "-ation.", why: "<b>augmentation</b>." },
    { fase: "guiada", c: ["b3no-phrase"], k: "choice", ask: "«Le musée ouvre le 3 mai.» →", q: "«___ du musée le 3 mai.»", o: ["Ouverture", "Ouvrement"], a: 0, pista: "-ure.", why: "<b>Ouverture</b>." },
    { fase: "indep", c: ["b3no-phrase"], k: "choice", ask: "Registro soutenu de «le labo a fait des tests».", q: "«___»", o: ["Le laboratoire a effectué des tests.", "Le laboratoire a fait des tests."], a: 0, why: "<b>effectué</b>." },
    { fase: "indep", c: ["b3no-phrase"], k: "fill", ask: "«Le président arrive à Bogotá.» → título", q: "« ___ du président à Bogotá »", acc: ["Arrivée", "L'arrivée", "arrivée", "L’arrivée"], why: "<b>Arrivée</b>." },
    { fase: "indep", c: ["b3no-phrase"], k: "fill", ask: "«Le gouvernement réduit les impôts.» →", q: "La ___ des impôts", acc: ["réduction"], why: "<b>réduction</b>." },
    { fase: "aplica", c: ["b3no-phrase"], k: "fill", ask: "«Ce système est efficace.» →", q: "L'___ de ce système", acc: ["efficacité"], why: "<b>efficacité</b>." },
    { fase: "aplica", c: ["b3no-phrase"], k: "spot", ask: "Encuentra el error.", s: "On observe une baisse [de les] inscriptions à l'université .", fix: "des", why: "<b>des</b>." },
    { fase: "aplica", c: ["b3no-genre"], k: "spot", ask: "Encuentra el error.", s: "Le [développation] du tourisme inquiète les habitants .", fix: "développement", why: "<b>développement</b>." },
    { fase: "dominio", c: ["b3no-genre"], k: "match", ask: "Une cada verbo con su nombre.", q: "Verbo → nombre", pairs: [["choisir", "le choix"], ["vendre", "la vente"], ["partir", "le départ"], ["naître", "la naissance"], ["nettoyer", "le nettoyage"]], why: "Nominalización." },
    { fase: "dominio", c: ["b3no-phrase"], k: "fill", ask: "«Les usines ferment.» →", q: "La ___ des usines", acc: ["fermeture"], why: "<b>fermeture</b>." },
    { fase: "dominio", c: ["b3no-genre", "b3no-phrase"], k: "listen", say: "La hausse des prix inquiète les consommateurs.", acc: ["La hausse des prix inquiète les consommateurs."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La hausse des prix inquiète les consommateurs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Bogotá", "Colombie"], previo: [] }
};

/* ================================ B2.1·5 · Argumentar, destacar y situar en el tiempo ================================ */
E["b21-connecteurs-logiques"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Structurer un raisonnement : en effet, or, en outre, par conséquent",
  objetivo: {
    que: "Vas a elegir el conector según la relación lógica: añadir, justificar, deducir, oponer o concluir; y a usar or y au contraire sin errores.",
    corto: "En effet… · En outre… · Par conséquent… · Or… · En revanche…",
    podras: ["Añadir (de plus, en outre, de surcroît) y justificar (en effet, car).", "Deducir (donc, par conséquent, c'est pourquoi) y oponer (en revanche, cependant; au contraire tras una negación).", "Usar or (= ahora bien, introduce un dato que cambia el razonamiento) y d'une part… d'autre part."],
    iconos: ["ic2/engranaje", "ic2/lapiz", "ic2/pergamino"],
    previos: ["El párrafo argumentativo (B1.2, lección 35), oponer dos ideas (B1.2, lección 30) y la causa y la consecuencia (B1.2, lección 5)."],
    capacidad: "Ahora tu ensayo tiene una lógica impecable."
  },
  requiere: R("b2pg-conn", "b2oi-mots", "b2cc-csq"), recupera: ["b2pg-conn"],
  conceptos: {
    "b3cl-fonctions": { n: "añadir: de plus, en outre, de surcroît; justificar: en effet, car; consecuencia: donc, par conséquent, c'est pourquoi; oposición: en revanche, cependant", b: "gr" },
    "b3cl-or": { n: "or = ahora bien (dato que hace avanzar el razonamiento), nunca «ahora» (actuellement); au contraire corrige una negación; d'une part… d'autre part; en somme", b: "gr" }
  },
  video: {
    titulo: "Los conectores lógicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "en effet · or · en outre", seg: [
        { es: "Hola. Elige el conector por su función, no por la traducción." } ] },
      { v: "frase", filas: [
          { nota: "justificar", p: 1, partes: [["Il faut agir. En effet, la situation empire.", "-", 1]] },
          { nota: "oponer", p: 2, partes: [["Lyon est cher ; en revanche, Nancy est abordable.", "-", 2]] },
          { nota: "concluir", p: 3, partes: [["Il convient donc d'agir rapidement.", "-", 3]] } ], seg: [
        { fr: "Il faut agir. En effet, la situation empire.", p: 1 }, { fr: "Lyon est cher ; en revanche, Nancy est abordable.", p: 2 }, { fr: "Il convient donc d'agir rapidement.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«No es tímido; al contrario, habla con todo el mundo.»", o: ["Il n'est pas timide ; au contraire, il parle à tout le monde.", "Il n'est pas timide ; en revanche, il parle à tout le monde."], a: 0,
        bien: "¡Sí! Tras una negación: au contraire.", mal: "Para corregir una negación: au contraire.",
        seg: [ { es: "Pausa. Al contrario." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en effet", "en outre", "par conséquent", "or", "en revanche", "au contraire"], seg: [
        { es: "Or = ahora bien.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El ensayo sobre los carros", img: "bg-biblioteca", yo: "camila",
    escena: "Camila redacta un ensayo y Hugo revisa los conectores.",
    pj: PJ,
    lineas: [
      ["camila", "« Il faut limiter l'usage de la voiture en ville. En effet, la pollution y cause des milliers de décès chaque année. »", "«Hay que limitar el uso del carro en la ciudad. En efecto, la contaminación causa allí miles de muertes cada año»."],
      ["hugo", "Bien. Ajoute un exemple : « Les bus sont devenus gratuits à Dunkerque. Par conséquent, leur fréquentation a fortement augmenté. »", "Bien. Agrega un ejemplo: «Los buses se volvieron gratuitos en Dunkerque. Por consiguiente, su uso aumentó mucho»."],
      ["camila", "« Le télétravail réduit les trajets. En outre, il permet de mieux concilier vie privée et vie professionnelle. » Et « D'une part, c'est coûteux ; d'autre part, c'est peu utile. »", "«El teletrabajo reduce los trayectos. Además, permite conciliar mejor vida privada y vida profesional». Y «Por una parte, es costoso; por otra, es poco útil»."],
      ["hugo", "Parfait. Attention : « Or » ne veut pas dire « ahora ». Pour le présent : « Actuellement, je travaille à Bogotá. » Les loyers ont augmenté ; en revanche, les salaires stagnent.", "Perfecto. Ojo: «Or» no quiere decir «ahora». Para el presente: «Actuellement, je travaille à Bogotá». Los arriendos subieron; en cambio, los salarios se estancan."]
    ],
    fijate: "Fíjate: en effet (justifica), par conséquent (consecuencia), en outre (añade), d'une part… d'autre part, en revanche (opone), actuellement (≠ or)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Un conector para cada relación",
      idea: "Añadir: de plus, en outre, de surcroît. Justificar: en effet, car. Consecuencia: donc, par conséquent, c'est pourquoi. Oponer dos hechos: en revanche, par contre (oral), cependant. Corregir una negación: au contraire (Il n'est pas timide ; au contraire…). Or = «ahora bien»: introduce un dato que hace avanzar el razonamiento (Tous doivent réussir le DELF. Or, Laura ne l'a pas réussi. Elle ne peut donc pas être diplômée), nunca «ahora» temporal (= actuellement). Organizar: d'une part… d'autre part; concluir: en somme.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Función"], [
        ["de plus · en outre · En outre · De surcroît", "además · además · además (formal)", "añadir"],
        ["en effet · En effet · car", "en efecto, de hecho · porque", "justificar"],
        ["par conséquent · Par conséquent · c'est pourquoi · donc", "por consiguiente · por eso · por lo tanto", "consecuencia"],
        ["en revanche · cependant · par contre", "en cambio · sin embargo · en cambio (oral)", "oposición"],
        ["Il n'est pas timide ; au contraire, il parle à tout le monde. · au contraire", "No es tímido; al contrario, habla con todo el mundo.", "corregir una negación"],
        ["Or · or · Tous les étudiants doivent réussir le DELF. Or, Laura ne l'a pas réussi.", "Ahora bien · Todos deben aprobar el DELF. Ahora bien, Laura no lo aprobó.", "dato que cambia el razonamiento"],
        ["Actuellement, je travaille à Bogotá. · Actuellement", "Ahora (actualmente) trabajo en Bogotá.", "≠ or"],
        ["D'une part…, d'autre part… · D'une · d'une", "Por una parte…, por otra…", "organizar"],
        ["Il n'a pas révisé ; il a donc échoué. · donc", "No repasó; así que reprobó.", "consecuencia"],
        ["Il convient donc d'agir rapidement.", "Por lo tanto, conviene actuar rápido.", "concluir"],
        ["en somme", "en resumen", "concluir"]
      ]],
      ej: [["Il faut agir. En effet, la situation empire.", "Hay que actuar. De hecho, la situación empeora."], ["Lyon est cher ; en revanche, Nancy est abordable.", "Lyon es caro; en cambio, Nancy es asequible."], ["Il convient donc d'agir.", "Por lo tanto, conviene actuar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Or, je travaille à Bogotá. (= ahora)", "Actuellement, je travaille à Bogotá.", "Or = «ahora bien», no temporal."], ["Il n'est pas timide ; en revanche, il parle…", "Il n'est pas timide ; au contraire, il parle…", "Tras una negación: au contraire."], ["En effet (para dar un ejemplo)", "Par exemple", "En effet justifica."]] }
  ],
  ejemplos: [
    { sit: "«Hay que limitar el carro en la ciudad. ___, la contaminación causa miles de muertes.»", resp: "En effet", pasos: ["Justifica la idea."], porque: "Justificar." },
    { sit: "«Todos deben aprobar el DELF. ___, Laura no lo aprobó. No puede graduarse.»", resp: "Or", pasos: ["Dato que cambia el razonamiento."], porque: "Or." },
    { sit: "«Este sistema es injusto. ___, le cuesta muy caro al Estado.» (añadir, formal)", resp: "De surcroît", pasos: ["Añadir en registro formal."], porque: "Añadir." }
  ],
  comprueba: [
    { q: "«Or» significa…", o: ["ahora bien", "ahora (en este momento)"], a: 0, b: "gr", porque: "Falso amigo." },
    { q: "Para justificar se usa…", o: ["en effet", "par conséquent"], a: 0, b: "gr", porque: "Justificar." },
    { q: "Tras una negación, para corregir, se usa…", o: ["au contraire", "en revanche"], a: 0, b: "gr", porque: "Corrección." }
  ],
  practica: [
    { fase: "guiada", c: ["b3cl-fonctions"], k: "sort", ask: "¿Añadir, justificar, consecuencia u oposición?", q: "Clasifica.", cats: ["añadir", "justificar", "consecuencia", "oposición"], items: [["de plus", 0], ["en outre", 0], ["en effet", 1], ["car", 1], ["par conséquent", 2], ["c'est pourquoi", 2], ["en revanche", 3], ["cependant", 3]], pista: "¿Qué relación hay?", why: "Funciones." },
    { fase: "guiada", c: ["b3cl-fonctions"], k: "choice", ask: "«Hay que limitar el carro en la ciudad. De hecho, la contaminación causa miles de muertes cada año.»", q: "«Il faut limiter l'usage de la voiture en ville. ___, la pollution y cause des milliers de décès chaque année.»", o: ["En effet", "Par conséquent"], a: 0, pista: "Justifica.", why: "<b>En effet</b>." },
    { fase: "guiada", c: ["b3cl-fonctions"], k: "choice", ask: "«Los buses se volvieron gratuitos en Dunkerque. Por consiguiente, su uso aumentó mucho.»", q: "«Les bus sont devenus gratuits à Dunkerque. ___, leur fréquentation a fortement augmenté.»", o: ["Par conséquent", "En effet"], a: 0, pista: "Consecuencia.", why: "<b>Par conséquent</b>." },
    { fase: "indep", c: ["b3cl-fonctions"], k: "choice", ask: "«El teletrabajo reduce los trayectos. Además, permite conciliar mejor…»", q: "«Le télétravail réduit les trajets. ___, il permet de mieux concilier vie privée et vie professionnelle.»", o: ["En outre", "Or"], a: 0, why: "<b>En outre</b>." },
    { fase: "indep", c: ["b3cl-or"], k: "choice", ask: "«Todos deben aprobar el DELF B2 para graduarse. Ahora bien, Laura no lo aprobó. Así que no puede graduarse.»", q: "«Tous les étudiants doivent réussir le DELF B2 pour obtenir leur diplôme. ___, Laura ne l'a pas réussi. Elle ne peut donc pas être diplômée.»", o: ["Or", "En outre"], a: 0, why: "<b>Or</b>." },
    { fase: "indep", c: ["b3cl-fonctions"], k: "fill", ask: "«en cambio»", q: "Mon frère adore les mathématiques ; ___, ma sœur les déteste.", acc: ["en revanche", "par contre"], why: "<b>en revanche</b>." },
    { fase: "aplica", c: ["b3cl-or"], k: "fill", ask: "«Por una parte» (dos palabras)", q: "___ part, ce projet est très coûteux ; d'autre part, il est peu utile.", acc: ["D'une", "D’une", "d'une", "d’une"], why: "<b>D'une</b>." },
    { fase: "aplica", c: ["b3cl-fonctions"], k: "fill", ask: "«así que»", q: "Il n'a pas du tout révisé ; il a ___ échoué à l'examen.", acc: ["donc"], why: "<b>donc</b>." },
    { fase: "aplica", c: ["b3cl-or"], k: "spot", ask: "Encuentra el error.", s: "Il n'est pas timide ; [en revanche] , il parle à tout le monde .", fix: "au contraire", why: "<b>au contraire</b>." },
    { fase: "dominio", c: ["b3cl-or"], k: "spot", ask: "Encuentra el error (= ahora, actualmente).", s: "J'ai fait mes études à Pamplona . [Or] , je travaille dans une entreprise française .", fix: "Actuellement", why: "<b>Actuellement</b>." },
    { fase: "dominio", c: ["b3cl-fonctions", "b3cl-or"], k: "match", ask: "Une cada conector español con el francés.", q: "Español → francés", pairs: [["además", "en outre"], ["por lo tanto", "par conséquent"], ["en cambio", "en revanche"], ["ahora bien", "or"], ["en resumen", "en somme"]], why: "Equivalencias." },
    { fase: "dominio", c: ["b3cl-fonctions", "b3cl-or"], k: "listen", say: "Les loyers ont augmenté ; en revanche, les salaires stagnent.", acc: ["Les loyers ont augmenté ; en revanche, les salaires stagnent.", "Les loyers ont augmenté; en revanche, les salaires stagnent.", "Les loyers ont augmenté, en revanche, les salaires stagnent."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les loyers ont augmenté ; en revanche, les salaires stagnent.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura", "Dunkerque", "Lyon", "Nancy", "Bogotá", "Pamplona"], previo: [] }
};

E["b21-mise-en-relief-avancee"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La mise en relief avancée : dislocation, c'est… que, ce à quoi",
  objetivo: {
    que: "Vas a destacar una información: sacándola al principio con un pronombre (dislocación) o encuadrándola con c'est… que / ce… c'est.",
    corto: "Ce livre, je l'ai lu trois fois. · C'est à Marie que j'ai parlé. · Ce dont j'ai besoin, c'est de temps.",
    podras: ["Dislocar y retomar con el pronombre adecuado: Ces photos, je les trouve magnifiques; Le Canada, j'y suis allée.", "Usar c'est + (preposición) + elemento + que sin repetir la preposición, y c'est moi qui ai… con concordancia.", "Elegir ce que / ce dont / ce à quoi según el verbo: ce dont j'ai besoin, ce à quoi je pense."],
    iconos: ["ic2/rayo", "ic2/estrella", "ic2/microfono"],
    previos: ["La mise en relief (B1.1, lección 9) y ce qui, ce que, ce dont (B1.1, lección 34)."],
    capacidad: "Ahora pones el foco donde quieres, como un francés."
  },
  requiere: R("b1mr-cest", "b1mr-ce", "b1cq-forme"), recupera: ["b1mr-ce"],
  conceptos: {
    "b3mr-cest": { n: "dislocación con pronombre (ce film, je l'ai adoré; le Canada, j'y suis allée); c'est + prép. + elemento + que (c'est avec lui que…, sin repetir la prép.); c'est moi qui ai", b: "gr" },
    "b3mr-ce": { n: "ce… c'est: ce que (verbo directo: vouloir, détester), ce dont (verbo + de: avoir besoin, parler, rêver), ce à quoi (verbo + à: penser, s'intéresser, s'attendre)", b: "gr" }
  },
  video: {
    titulo: "Poner el foco", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "c'est… que", seg: [
        { es: "Hola. El francés destaca con la sintaxis." } ] },
      { v: "frase", filas: [
          { nota: "dislocación", p: 1, partes: [["Ce livre, je l'ai lu trois fois.", "-", 1]] },
          { nota: "c'est… que", p: 2, partes: [["C'est à Marie que j'ai parlé.", "-", 2]] },
          { nota: "ce dont", p: 3, partes: [["Ce dont j'ai besoin, c'est de temps.", "-", 3]] } ], seg: [
        { fr: "Ce livre, je l'ai lu trois fois.", p: 1 }, { fr: "C'est à Marie que j'ai parlé.", p: 2 }, { fr: "Ce dont j'ai besoin, c'est de temps.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Es con Paul con quien trabajo este año.»", o: ["C'est avec Paul que je travaille cette année.", "C'est avec Paul avec qui je travaille cette année."], a: 0,
        bien: "¡Sí! La preposición va una sola vez.", mal: "No repitas la preposición: que.",
        seg: [ { es: "Pausa. Con quien." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["c'est… que", "c'est moi qui", "ce dont", "ce à quoi", "je l'ai", "j'y suis"], seg: [
        { es: "Ce que, ce dont, ce à quoi: mira el verbo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La entrevista de prácticas", img: "bg-universidad", yo: "camila",
    escena: "Camila prepara respuestas para una entrevista.",
    pj: PJ,
    lineas: [
      ["hugo", "Qu'est-ce qui t'intéresse dans ce poste ?", "¿Qué te interesa de este puesto?"],
      ["camila", "Ce à quoi je m'intéresse, c'est la sociolinguistique. C'est en 2020 que j'ai commencé mes études de langues.", "Lo que me interesa es la sociolingüística. Fue en 2020 cuando empecé mis estudios de idiomas."],
      ["hugo", "Bien. Et la fête de l'équipe ? — Non, c'est moi qui ai organisé la fête ! C'est à Marie que j'ai confié le dossier.", "Bien. ¿Y la fiesta del equipo? — ¡No, fui yo quien organizó la fiesta! Fue a Marie a quien le confié el expediente."],
      ["camila", "Le Canada, j'y suis allée l'année dernière. Ces photos, je les trouve magnifiques. Ce dont j'ai besoin, c'est d'un peu de calme. Ce qui me plaît le plus, c'est de voyager.", "A Canadá fui el año pasado. Esas fotos me parecen preciosas. Lo que necesito es un poco de calma. Lo que más me gusta es viajar."]
    ],
    fijate: "Fíjate: ce à quoi je m'intéresse; c'est en 2020 que; c'est moi qui ai; c'est à Marie que; le Canada, j'y; ces photos, je les; ce dont j'ai besoin; ce qui me plaît."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dislocar y encuadrar",
      idea: "Dislocación: se saca el elemento al principio y se retoma con un pronombre: Ce film, je l'ai adoré. Mon frère, je ne lui ai rien dit. Le Canada, j'y suis allée. Encuadre: c'est + (preposición) + elemento + que: C'est avec lui que je travaille; la preposición va una sola vez (no «c'est avec Paul avec qui»). Para el sujeto: c'est moi qui ai…, c'est nous qui avons… (el verbo concuerda con el pronombre). Ce… c'est: según el verbo: ce que (vouloir, détester), ce dont (avoir besoin de, parler de, rêver de), ce à quoi (penser à, s'intéresser à, s'attendre à).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["Ce livre, je l'ai lu trois fois.", "Ese libro lo he leído tres veces.", "dislocación (le)"],
        ["Ces photos, je les trouve magnifiques. · les", "Esas fotos me parecen preciosas.", "dislocación (les)"],
        ["Le Canada, j'y suis allée. · y", "A Canadá fui.", "dislocación (y)"],
        ["Mon frère, je ne lui ai rien dit.", "A mi hermano no le dije nada.", "dislocación (lui)"],
        ["C'est à Marie que j'ai parlé. · que · C'est en 2020 que…", "Fue a Marie a quien hablé. · Fue en 2020 cuando…", "c'est… que"],
        ["C'est avec Paul que je travaille.", "Es con Paul con quien trabajo.", "sin repetir la prép."],
        ["C'est moi qui ai organisé la fête. · ai · C'est nous qui avons gagné. · avons", "Fui yo quien organizó la fiesta. · Fuimos nosotros quienes ganamos.", "c'est… qui"],
        ["vouloir · détester", "querer · detestar", "ce que"],
        ["avoir besoin · parler (de) · rêver (de) · Ce dont · ce dont", "necesitar · hablar de · soñar con", "ce dont"],
        ["penser (à) · s'intéresser (à) · s'attendre (à) · Ce à quoi · ce à quoi", "pensar en · interesarse por · esperar", "ce à quoi"],
        ["Ce dont j'ai besoin, c'est de temps.", "Lo que necesito es tiempo.", "ce dont"],
        ["Ce à quoi je pense, c'est à toi.", "En lo que pienso es en ti.", "ce à quoi"],
        ["C'est à toi que je parle. · C'est pour ça que je suis venu. · Moi, j'adore le café.", "Es a ti a quien hablo. · Por eso vine. · A mí me encanta el café.", "ejemplos"],
        ["Ce qui me plaît le plus, c'est de voyager.", "Lo que más me gusta es viajar.", "ce qui"]
      ]],
      ej: [["Ce livre, je l'ai lu trois fois.", "Ese libro lo he leído tres veces."], ["C'est à Marie que j'ai parlé.", "Es a María a quien le hablé."], ["Ce dont j'ai besoin, c'est de temps.", "Lo que necesito es tiempo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["C'est à Marie à qui j'ai parlé.", "C'est à Marie que j'ai parlé.", "La preposición va una sola vez."], ["C'est nous qui ont gagné.", "C'est nous qui avons gagné.", "El verbo concuerda con nous."], ["Ce que j'ai besoin, c'est de temps.", "Ce dont j'ai besoin, c'est de temps.", "avoir besoin de → ce dont."]] }
  ],
  ejemplos: [
    { sit: "«Fue a Marie a quien le confié el expediente.»", resp: "C'est à Marie que j'ai confié le dossier.", pasos: ["c'est à… que."], porque: "Encuadre." },
    { sit: "«Lo que me interesa es la sociolingüística.»", resp: "Ce à quoi je m'intéresse, c'est la sociolinguistique.", pasos: ["s'intéresser à → ce à quoi."], porque: "ce à quoi." },
    { sit: "«¡No, fui yo quien organizó la fiesta!»", resp: "Non, c'est moi qui ai organisé la fête !", pasos: ["c'est moi qui + ai."], porque: "Sujeto." }
  ],
  comprueba: [
    { q: "Con avoir besoin de se usa…", o: ["ce dont", "ce que"], a: 0, b: "gr", porque: "Verbo + de." },
    { q: "Con penser à se usa…", o: ["ce à quoi", "ce dont"], a: 0, b: "gr", porque: "Verbo + à." },
    { q: "«C'est avec Paul ___ je travaille.»", o: ["que", "avec qui"], a: 0, b: "gr", porque: "Una sola preposición." }
  ],
  practica: [
    { fase: "guiada", c: ["b3mr-ce"], k: "sort", ask: "¿Ce que, ce dont o ce à quoi?", q: "Clasifica.", cats: ["ce que", "ce dont", "ce à quoi"], items: [["vouloir", 0], ["détester", 0], ["avoir besoin", 1], ["parler (de)", 1], ["rêver (de)", 1], ["penser (à)", 2], ["s'intéresser (à)", 2], ["s'attendre (à)", 2]], pista: "¿De, à o nada?", why: "Relativos." },
    { fase: "guiada", c: ["b3mr-cest"], k: "choice", ask: "«Fue a Marie a quien le confié el expediente.»", q: "«C'est à Marie ___ j'ai confié le dossier.»", o: ["que", "à qui"], a: 0, pista: "Una sola preposición.", why: "<b>que</b>." },
    { fase: "guiada", c: ["b3mr-cest"], k: "choice", ask: "«Fue en 2020 cuando empecé mis estudios de idiomas.»", q: "«C'est en 2020 ___ j'ai commencé mes études de langues.»", o: ["que", "quand"], a: 0, pista: "c'est… que.", why: "<b>que</b>." },
    { fase: "indep", c: ["b3mr-ce"], k: "choice", ask: "«Lo que me interesa es la sociolingüística.»", q: "«___ je m'intéresse, c'est la sociolinguistique.»", o: ["Ce à quoi", "Ce que"], a: 0, why: "<b>Ce à quoi</b>." },
    { fase: "indep", c: ["b3mr-cest"], k: "choice", ask: "«¡No, fui yo quien organizó la fiesta!»", q: "«Non, c'est moi qui ___ organisé la fête !»", o: ["ai", "a"], a: 0, why: "<b>ai</b>." },
    { fase: "indep", c: ["b3mr-cest"], k: "fill", ask: "Pronombre (ces photos).", q: "Ces photos, je ___ trouve magnifiques.", acc: ["les"], why: "<b>les</b>." },
    { fase: "aplica", c: ["b3mr-cest"], k: "fill", ask: "Pronombre (le Canada).", q: "Le Canada, j'___ suis allée l'année dernière.", acc: ["y"], why: "<b>y</b>." },
    { fase: "aplica", c: ["b3mr-ce"], k: "fill", ask: "avoir besoin de (dos palabras).", q: "___ j'ai besoin, c'est d'un peu de calme.", acc: ["Ce dont", "ce dont"], why: "<b>Ce dont</b>." },
    { fase: "aplica", c: ["b3mr-cest"], k: "spot", ask: "Encuentra el error.", s: "C'est avec Paul [avec qui] je travaille cette année .", fix: "que", why: "<b>que</b>." },
    { fase: "dominio", c: ["b3mr-cest"], k: "spot", ask: "Encuentra el error.", s: "C'est nous qui [ont] gagné le concours d'éloquence .", fix: "avons", why: "<b>avons</b>." },
    { fase: "dominio", c: ["b3mr-cest", "b3mr-ce"], k: "match", ask: "Une cada frase con su traducción.", q: "Español → francés", pairs: [["Es a ti a quien hablo.", "C'est à toi que je parle."], ["Por eso vine.", "C'est pour ça que je suis venu."], ["Lo que necesito es tiempo.", "Ce dont j'ai besoin, c'est de temps."], ["En lo que pienso es en ti.", "Ce à quoi je pense, c'est à toi."], ["A mí me encanta el café.", "Moi, j'adore le café."]], why: "Mise en relief." },
    { fase: "dominio", c: ["b3mr-cest", "b3mr-ce"], k: "listen", say: "Ce qui me plaît le plus, c'est de voyager.", acc: ["Ce qui me plaît le plus, c'est de voyager."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce qui me plaît le plus, c'est de voyager.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Paul", "Canada"], previo: [] }
};

E["b21-accord-pronominaux"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'accord du participe passé des verbes pronominaux",
  objetivo: {
    que: "Vas a concordar el participio de los verbos pronominales: concuerda si se es complemento directo, no cambia si se es indirecto o si hay un COD después.",
    corto: "Elle s'est levée. · Elles se sont téléphoné. · Elle s'est lavé les mains.",
    podras: ["Preguntar si se es COD (laver qqn → elle s'est lavée) o COI (parler à qqn → elles se sont parlé).", "Dejar el participio invariable si hay un COD después (elle s'est lavé les mains) y concordarlo si el COD va antes (les photos qu'ils se sont envoyées).", "Recordar los casos fijos: se rendre compte (rendu), se plaire (plu); y los pronominales puros, que concuerdan (ils se sont souvenus, elles se sont enfuies)."],
    iconos: ["ic2/lapiz", "ic2/amigos", "ic2/engranaje"],
    previos: ["La concordancia con être (B1.1, lección 27) y los verbos pronominales que cambian de sentido (B1.2, lección 25)."],
    capacidad: "Ahora escribes sin fallar «elles se sont parlé»."
  },
  requiere: R("b1ae-oui", "b1ae-non", "b2vs-compte"), recupera: ["b1ae-oui"],
  conceptos: {
    "b3ap-cod": { n: "se = COD (laver, rencontrer, regarder, habiller qqn) → concuerda: elle s'est levée, elles se sont rencontrées; pronominales puros (se souvenir, s'enfuir) → concuerdan", b: "gr" },
    "b3ap-coi": { n: "se = COI (parler à, téléphoner à, sourire à, ressembler à, écrire à) → invariable; COD después (les mains, la main) → invariable; COD antes → concuerda; se rendre compte → rendu", b: "gr" }
  },
  video: {
    titulo: "Concordancia de los pronominales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "elles se sont parlé", seg: [
        { es: "Hola. Pregunta: ¿se es directo o indirecto?" } ] },
      { v: "frase", filas: [
          { nota: "COD → concuerda", p: 1, partes: [["Elle s'est levée tôt.", "-", 1]] },
          { nota: "COI → invariable", p: 2, partes: [["Elles se sont téléphoné.", "-", 2]] },
          { nota: "COD después", p: 3, partes: [["Elle s'est lavé les mains.", "-", 3]] } ], seg: [
        { fr: "Elle s'est levée tôt.", p: 1 }, { fr: "Elles se sont téléphoné.", p: 2 }, { fr: "Elle s'est lavé les mains.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Se llamaron todas las noches durante un año.» (ellas)", o: ["Elles se sont téléphoné tous les soirs pendant un an.", "Elles se sont téléphonées tous les soirs pendant un an."], a: 0,
        bien: "¡Sí! Téléphoner à: se es indirecto.", mal: "Téléphoner à quelqu'un: invariable.",
        seg: [ { es: "Pausa. Se llamaron." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["levée", "parlé", "lavé les mains", "rendu compte", "rencontrées", "souvenus"], seg: [
        { es: "COD antes: concuerda; COI: no.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La historia de Laura", img: "bg-cafe", yo: "camila",
    escena: "Camila cuenta cómo se conocieron dos amigas.",
    pj: PJ,
    lineas: [
      ["camila", "Laura et Julie se sont rencontrées pendant un échange à Lyon. Ensuite, elles se sont téléphoné tous les soirs pendant un an !", "Laura y Julie se conocieron durante un intercambio en Lyon. ¡Luego se llamaron todas las noches durante un año!"],
      ["hugo", "Et elles se sont écrit ? — Oui, elles se sont écrit des cartes postales tout l'été. Les photos qu'elles se sont envoyées sont magnifiques.", "¿Y se escribieron? — Sí, se escribieron postales todo el verano. Las fotos que se enviaron son preciosas."],
      ["camila", "Ce matin, Laura s'est levée à six heures. Avant l'entretien, elle s'est lavé les cheveux. Heureusement, elle s'est rendu compte de son erreur avant la soutenance.", "Esta mañana, Laura se levantó a las seis. Antes de la entrevista, se lavó el pelo. Por suerte, se dio cuenta de su error antes de la sustentación."],
      ["hugo", "Ils se sont souvenus de leur professeur de primaire, les deux présidents se sont serré la main… Ils se sont rendu compte trop tard !", "Se acordaron de su profesor de primaria, los dos presidentes se dieron la mano… ¡Se dieron cuenta demasiado tarde!"]
    ],
    fijate: "Fíjate: rencontrées, levée, envoyées, souvenus (concuerdan); téléphoné, écrit, lavé les cheveux, serré la main, rendu compte (invariables)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "¿Se es COD o COI?",
      idea: "Cambia mentalmente être por avoir y pregunta qué es se. Se = COD (laver qqn, rencontrer qqn, regarder qqn, habiller qqn, lever qqn) → el participio concuerda con el sujeto: elle s'est levée, elles se sont rencontrées. Se = COI (parler à, téléphoner à, sourire à, ressembler à, écrire à) → invariable: elles se sont parlé, téléphoné. Si hay un COD después del verbo → invariable: elle s'est lavé les mains; ils se sont serré la main. Si el COD va antes (que) → concuerda con él: les photos qu'ils se sont envoyées. Pronominales puros (se souvenir, s'enfuir) → concuerdan: ils se sont souvenus. Se rendre compte → siempre rendu; se plaire → plu.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["se laver · se regarder · se rencontrer · s'habiller", "lavarse · mirarse · conocerse · vestirse", "se = COD → concuerda"],
        ["se parler · se téléphoner · se sourire · se ressembler", "hablarse · llamarse · sonreírse · parecerse", "se = COI → invariable"],
        ["Laura s'est levée à six heures. · levée · se lever=levées", "Laura se levantó a las seis.", "concuerda"],
        ["Mes amies se sont rencontrées à Montpellier. · rencontrées", "Mis amigas se conocieron en Montpellier.", "concuerda"],
        ["Mes sœurs se sont parlé au téléphone. · parlé · se parler=parlé", "Mis hermanas se hablaron por teléfono.", "invariable"],
        ["Elles se sont téléphoné. · téléphoné", "Se llamaron por teléfono.", "invariable"],
        ["Nous nous sommes écrit des cartes postales. · écrit", "Nos escribimos postales.", "invariable"],
        ["Elle s'est lavé les cheveux. · lavé · les deux présidents se sont serré la main · serré", "Se lavó el pelo. · Los dos presidentes se dieron la mano.", "COD después → invariable"],
        ["les photos qu'ils se sont envoyées · envoyées", "las fotos que se enviaron", "COD antes → concuerda"],
        ["Elle s'est rendu compte de son erreur. · rendu · se rendre compte=rendu compte", "Se dio cuenta de su error.", "siempre rendu"],
        ["Ils se sont souvenus de leur professeur. · souvenus · s'enfuir=enfuies", "Se acordaron de su profesor. · huyeron", "pronominal puro → concuerda"],
        ["se plaire=plu", "gustarse", "invariable"],
        ["Ils se sont rendu compte trop tard.", "Se dieron cuenta demasiado tarde.", "ejemplo"]
      ]],
      ej: [["Elle s'est levée tôt.", "Ella se levantó temprano."], ["Elles se sont téléphoné.", "Ellas se llamaron por teléfono."], ["Elle s'est lavé les mains.", "Ella se lavó las manos."], ["Ils se sont rendu compte.", "Se dieron cuenta."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elles se sont parlées.", "Elles se sont parlé.", "parler à → se es COI: invariable."], ["Elle s'est lavée les mains.", "Elle s'est lavé les mains.", "COD después: invariable."], ["Les photos qu'ils se sont envoyé…", "Les photos qu'ils se sont envoyées…", "COD antes: concuerda."]] }
  ],
  ejemplos: [
    { sit: "«Esta mañana Laura se levantó a las seis.»", resp: "Ce matin, Laura s'est levée à six heures.", pasos: ["lever qqn: se = COD."], porque: "Concuerda." },
    { sit: "«Mis dos hermanas se hablaron durante horas por teléfono.»", resp: "Mes deux sœurs se sont parlé pendant des heures au téléphone.", pasos: ["parler à: se = COI."], porque: "Invariable." },
    { sit: "«Por suerte, se dio cuenta de su error.»", resp: "Heureusement, elle s'est rendu compte de son erreur.", pasos: ["Siempre rendu."], porque: "Caso fijo." }
  ],
  comprueba: [
    { q: "Si se es complemento indirecto, el participio…", o: ["no cambia", "concuerda"], a: 0, b: "gr", porque: "se parler." },
    { q: "«Elle s'est ___ les mains.»", o: ["lavé", "lavée"], a: 0, b: "gr", porque: "COD después." },
    { q: "«Ils se sont ___ compte.»", o: ["rendu", "rendus"], a: 0, b: "gr", porque: "Caso fijo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ap-cod", "b3ap-coi"], k: "sort", ask: "¿Se es COD (concuerda) o COI (invariable)?", q: "Clasifica.", cats: ["se = COD → concuerda", "se = COI → invariable"], items: [["se laver", 0], ["se regarder", 0], ["se rencontrer", 0], ["s'habiller", 0], ["se parler", 1], ["se téléphoner", 1], ["se sourire", 1], ["se ressembler", 1]], pista: "¿Verbo con à?", why: "Concordancia." },
    { fase: "guiada", c: ["b3ap-cod"], k: "choice", ask: "«Esta mañana Laura se levantó a las seis.»", q: "«Ce matin, Laura s'est ___ à six heures.»", o: ["levée", "levé"], a: 0, pista: "COD.", why: "<b>levée</b>." },
    { fase: "guiada", c: ["b3ap-coi"], k: "choice", ask: "«Mis dos hermanas se hablaron durante horas por teléfono.»", q: "«Mes deux sœurs se sont ___ pendant des heures au téléphone.»", o: ["parlé", "parlées"], a: 0, pista: "parler à.", why: "<b>parlé</b>." },
    { fase: "indep", c: ["b3ap-coi"], k: "choice", ask: "«Antes de la entrevista, se lavó el pelo.»", q: "«Avant l'entretien, elle s'est ___ les cheveux.»", o: ["lavé", "lavée"], a: 0, why: "<b>lavé</b>." },
    { fase: "indep", c: ["b3ap-coi"], k: "choice", ask: "«Por suerte, se dio cuenta de su error antes de la sustentación.»", q: "«Heureusement, elle s'est ___ compte de son erreur avant la soutenance.»", o: ["rendu", "rendue"], a: 0, why: "<b>rendu</b>." },
    { fase: "indep", c: ["b3ap-coi"], k: "fill", ask: "Participio de serrer (COD después).", q: "Les deux présidents se sont ___ la main.", acc: ["serré"], why: "<b>serré</b>." },
    { fase: "aplica", c: ["b3ap-cod"], k: "fill", ask: "Participio de rencontrer (amies).", q: "Mes amies se sont ___ à Montpellier en 2024.", acc: ["rencontrées"], why: "<b>rencontrées</b>." },
    { fase: "aplica", c: ["b3ap-coi"], k: "fill", ask: "Participio de écrire (écrire à).", q: "Nous nous sommes ___ des cartes postales tout l'été.", acc: ["écrit"], why: "<b>écrit</b>." },
    { fase: "aplica", c: ["b3ap-cod"], k: "fill", ask: "Participio de se souvenir (ils).", q: "Ils se sont ___ de leur professeur de primaire.", acc: ["souvenus"], why: "<b>souvenus</b>." },
    { fase: "dominio", c: ["b3ap-coi"], k: "spot", ask: "Encuentra el error.", s: "Elles se sont [téléphonées] tous les soirs pendant un an .", fix: "téléphoné", why: "<b>téléphoné</b>." },
    { fase: "dominio", c: ["b3ap-cod"], k: "spot", ask: "Encuentra el error (COD antes).", s: "Les photos qu'ils se sont [envoyé] sont magnifiques .", fix: "envoyées", why: "<b>envoyées</b>." },
    { fase: "dominio", c: ["b3ap-cod", "b3ap-coi"], k: "listen", say: "Elles se sont rencontrées pendant un échange à Lyon.", acc: ["Elles se sont rencontrées pendant un échange à Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Elles se sont rencontrées pendant un échange à Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Laura", "Julie", "Lyon", "Montpellier"], previo: [] }
};

E["b21-subordonnees-temps"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les subordonnées de temps : quand, après que, avant que, jusqu'à ce que",
  objetivo: {
    que: "Vas a situar acciones en el tiempo con el modo correcto: indicativo (futuro) tras quand, dès que, après que; subjuntivo tras avant que, jusqu'à ce que, en attendant que.",
    corto: "Quand tu viendras… · Dès que j'aurai fini… · Reste jusqu'à ce que je revienne.",
    podras: ["Usar el futuro tras quand y dès que si la acción es futura, y el futuro anterior para lo terminado antes.", "Usar el indicativo tras après que (nunca subjuntivo) y tant que (mientras).", "Usar el subjuntivo tras avant que (ne), jusqu'à ce que, en attendant que; y avant de + infinitivo con el mismo sujeto."],
    iconos: ["ic2/reloj-arena", "ic2/pergamino", "ic2/bombilla"],
    previos: ["Las conjunciones de tiempo (B1.1, lección 24), el futuro anterior (B1.2, lección 10) y las conjunciones con subjuntivo (B1.2, lección 19)."],
    capacidad: "Ahora no dices «quand tu viennes»."
  },
  requiere: R("b1cj-futur", "b2fa-usage", "b2sc-subj"), recupera: ["b1cj-futur"],
  conceptos: {
    "b3st-indic": { n: "+ indicativo: quand, dès que, après que, pendant que, depuis que, tant que; futuro si es futuro (quand tu viendras) y futuro anterior para lo terminado antes (dès que j'aurai fini, après que… seront partis)", b: "gr" },
    "b3st-subj": { n: "+ subjuntivo: avant que (ne), jusqu'à ce que, en attendant que (avant qu'il ne commence, jusqu'à ce que je revienne); mismo sujeto: avant de + infinitivo", b: "gr" }
  },
  video: {
    titulo: "Situar en el tiempo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/reloj-arena", grande: "quand tu viendras", seg: [
        { es: "Hola. En francés, «cuando vengas» va en futuro." } ] },
      { v: "frase", filas: [
          { nota: "quand + futuro", p: 1, partes: [["Quand tu viendras, on ira au musée.", "-", 1]] },
          { nota: "dès que + fut. ant.", p: 2, partes: [["Dès que j'aurai fini, je t'appellerai.", "-", 2]] },
          { nota: "jusqu'à ce que + subj.", p: 3, partes: [["Reste jusqu'à ce que je revienne.", "-", 3]] } ], seg: [
        { fr: "Quand tu viendras, on ira au musée.", p: 1 }, { fr: "Dès que j'aurai fini, je t'appellerai.", p: 2 }, { fr: "Reste jusqu'à ce que je revienne.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Cuando vengas a Pamplona, te mostraré la ciudad.»", o: ["Quand tu viendras à Pamplona, je te montrerai la ville.", "Quand tu viennes à Pamplona, je te montrerai la ville."], a: 0,
        bien: "¡Sí! Quand + futuro.", mal: "Tras quand, futuro: viendras.",
        seg: [ { es: "Pausa. Cuando vengas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quand tu viendras", "dès que j'aurai fini", "après que", "avant que", "jusqu'à ce que", "tant que"], seg: [
        { es: "Après que: indicativo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El viaje a Lyon", img: "bg-paris", yo: "camila",
    escena: "Camila organiza su viaje con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je t'appellerai dès que je serai arrivée à Lyon. Dès que j'aurai fini mes examens, je partirai à la plage.", "Te llamaré en cuanto llegue a Lyon. En cuanto termine mis exámenes, me iré a la playa."],
      ["hugo", "Quand tu auras ton diplôme, tu pourras enseigner au lycée. Mais tu ne sortiras pas tant que tu n'auras pas fini tes devoirs !", "Cuando tengas tu título, podrás enseñar en el liceo. ¡Pero no saldrás mientras no hayas terminado tus deberes!"],
      ["camila", "Ha ha ! Rentrons avant qu'il ne commence à pleuvoir. Attends-moi jusqu'à ce que je finisse mon café.", "¡Ja, ja! Volvamos antes de que empiece a llover. Espérame hasta que termine mi café."],
      ["hugo", "D'accord. On sortira après que les invités seront partis. Nous attendrons jusqu'à ce qu'il arrête de pleuvoir.", "De acuerdo. Saldremos después de que se hayan ido los invitados. Esperaremos hasta que deje de llover."]
    ],
    fijate: "Fíjate: dès que je serai arrivée, dès que j'aurai fini, quand tu auras, tant que tu n'auras pas, après que… seront partis (indicativo); avant qu'il ne commence, jusqu'à ce que je finisse, jusqu'à ce qu'il arrête (subjuntivo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Indicativo o subjuntivo según la conjunción",
      idea: "Con quand, lorsque, dès que, pendant que, depuis que, tant que y après que: indicativo. Si la acción es futura, futuro (a diferencia del español): Quand tu viendras… Si la acción estará terminada antes de otra futura, futuro anterior: Dès que j'aurai fini, je t'appellerai. On sortira après que les invités seront partis. Après que nunca va con subjuntivo. Con avant que, jusqu'à ce que, en attendant que: subjuntivo: Reste jusqu'à ce que je revienne. Avant qu'il ne commence (ne expletivo, registro cuidado). Con el mismo sujeto: avant de + infinitivo.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Modo"], [
        ["quand · dès que · après que · pendant que · depuis que", "cuando · en cuanto · después de que · mientras · desde que", "+ indicativo"],
        ["avant que · jusqu'à ce que · en attendant que", "antes de que · hasta que · mientras esperamos que", "+ subjuntivo"],
        ["Quand tu viendras, on ira au musée. · viendras", "Cuando vengas, iremos al museo.", "futuro"],
        ["Quand tu auras ton diplôme… · auras", "Cuando tengas tu título…", "futuro"],
        ["Dès que j'aurai fini mes examens… · aurai fini", "En cuanto termine mis exámenes…", "futuro anterior"],
        ["On sortira après que les invités seront partis. · seront · se seront", "Saldremos después de que se hayan ido los invitados.", "futuro anterior"],
        ["Reste ici jusqu'à ce que je revienne. · revienne", "Quédate aquí hasta que vuelva.", "subjuntivo"],
        ["Attends-moi jusqu'à ce que je finisse. · finisse", "Espérame hasta que termine.", "subjuntivo"],
        ["Rentrons avant qu'il ne commence à pleuvoir. · ne commence", "Volvamos antes de que empiece a llover.", "subjuntivo + ne"],
        ["avant que vous partiez · partiez · ne partiez", "antes de que se vayan", "subjuntivo"],
        ["tant que tu n'auras pas fini · tant que", "mientras no hayas terminado", "indicativo"],
        ["quand tu arriveras · jusqu'à ce que tu arrives · avant que tu n'arrives · après que tu seras arrivé · en attendant que tu arrives", "cuando llegues · hasta que llegues · antes de que llegues · después de que llegues · mientras esperamos que llegues", "equivalencias"],
        ["Je t'appellerai dès que je serai arrivée à Lyon.", "Te llamaré en cuanto llegue a Lyon.", "ejemplo"]
      ]],
      ej: [["Quand tu viendras, on ira au musée.", "Cuando vengas, iremos al museo."], ["Reste jusqu'à ce que je revienne.", "Quédate hasta que vuelva."], ["Dès que j'aurai fini, je t'appellerai.", "En cuanto termine, te llamaré."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand tu viennes…", "Quand tu viendras…", "Futuro tras quand."], ["après qu'il soit parti", "après qu'il sera parti / après qu'il est parti", "Indicativo tras après que."], ["jusqu'à ce que je reviens", "jusqu'à ce que je revienne", "Subjuntivo tras jusqu'à ce que."]] }
  ],
  ejemplos: [
    { sit: "«Cuando tengas tu título, podrás enseñar en el liceo.»", resp: "Quand tu auras ton diplôme, tu pourras enseigner au lycée.", pasos: ["quand + futuro."], porque: "Futuro." },
    { sit: "«Saldremos después de que se hayan ido los invitados.»", resp: "On sortira après que les invités seront partis.", pasos: ["après que + futuro anterior."], porque: "Indicativo." },
    { sit: "«Volvamos antes de que empiece a llover.»", resp: "Rentrons avant qu'il ne commence à pleuvoir.", pasos: ["avant que (ne) + subjuntivo."], porque: "Subjuntivo." }
  ],
  comprueba: [
    { q: "«Cuando vengas» en francés va en…", o: ["futuro", "subjuntivo"], a: 0, b: "gr", porque: "quand tu viendras." },
    { q: "Après que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Nunca subjuntivo." },
    { q: "Jusqu'à ce que va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "jusqu'à ce que je revienne." }
  ],
  practica: [
    { fase: "guiada", c: ["b3st-indic", "b3st-subj"], k: "sort", ask: "¿+ indicativo o + subjuntivo?", q: "Clasifica.", cats: ["+ indicativo", "+ subjuntivo"], items: [["quand", 0], ["dès que", 0], ["après que", 0], ["pendant que", 0], ["depuis que", 0], ["avant que", 1], ["jusqu'à ce que", 1], ["en attendant que", 1]], pista: "Après que: indicativo.", why: "Modos." },
    { fase: "guiada", c: ["b3st-indic"], k: "choice", ask: "«Cuando tengas tu título, podrás enseñar en el liceo.»", q: "«Quand tu ___ ton diplôme, tu pourras enseigner au lycée.»", o: ["auras", "aies"], a: 0, pista: "Futuro.", why: "<b>auras</b>." },
    { fase: "guiada", c: ["b3st-indic"], k: "choice", ask: "«Saldremos después de que se hayan ido los invitados.»", q: "«On sortira après que les invités ___ partis.»", o: ["seront", "soient"], a: 0, pista: "Indicativo.", why: "<b>seront</b>." },
    { fase: "indep", c: ["b3st-subj"], k: "choice", ask: "«Quédate aquí hasta que vuelva.»", q: "«Reste ici jusqu'à ce que je ___ .»", o: ["revienne", "reviens"], a: 0, why: "<b>revienne</b>." },
    { fase: "indep", c: ["b3st-subj"], k: "choice", ask: "«Volvamos antes de que empiece a llover.»", q: "«Rentrons avant qu'il ___ à pleuvoir.»", o: ["ne commence", "commencera"], a: 0, why: "<b>ne commence</b>." },
    { fase: "indep", c: ["b3st-subj"], k: "fill", ask: "Subjuntivo de finir (je).", q: "Attends-moi jusqu'à ce que je ___ mon café.", acc: ["finisse"], why: "<b>finisse</b>." },
    { fase: "aplica", c: ["b3st-indic"], k: "fill", ask: "Futuro anterior de finir (je).", q: "Dès que j'___ mes examens, je partirai à la plage.", acc: ["aurai fini"], why: "<b>aurai fini</b>." },
    { fase: "aplica", c: ["b3st-subj"], k: "fill", ask: "Subjuntivo de partir (vous).", q: "Le directeur signera le contrat avant que vous ___ .", acc: ["partiez", "ne partiez"], why: "<b>partiez</b>." },
    { fase: "aplica", c: ["b3st-indic"], k: "fill", ask: "«mientras» (+ futuro)", q: "Tu ne sortiras pas ___ tu n'auras pas fini tes devoirs.", acc: ["tant que"], why: "<b>tant que</b>." },
    { fase: "dominio", c: ["b3st-indic"], k: "spot", ask: "Encuentra el error.", s: "Nous dînerons après que les enfants [se soient] couchés .", fix: "se seront", why: "<b>se seront</b>." },
    { fase: "dominio", c: ["b3st-indic"], k: "spot", ask: "Encuentra el error.", s: "Quand tu [viennes] à Pamplona , je te montrerai la ville .", fix: "viendras", why: "<b>viendras</b>." },
    { fase: "dominio", c: ["b3st-indic", "b3st-subj"], k: "listen", say: "Je t'appellerai dès que je serai arrivée à Lyon.", acc: ["Je t'appellerai dès que je serai arrivée à Lyon.", "Je t'appellerai dès que je serai arrivé à Lyon."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je t'appellerai dès que je serai arrivée à Lyon.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon", "Pamplona"], previo: [] }
};

/* ================================ B2.1·6 · Estructuras de la frase ================================ */
E["b21-propositions-infinitives"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Je l'entends chanter : la proposition infinitive",
  objetivo: {
    que: "Vas a usar el infinitivo con su propio sujeto tras los verbos de percepción y laisser: J'entends les oiseaux chanter. Je les vois jouer.",
    corto: "J'entends le train arriver. · Je les vois jouer. · Laisse passer les gens.",
    podras: ["Construir verbo de percepción (voir, entendre, regarder, écouter, sentir) + COD + infinitivo.", "Usar el orden libre con un sujeto nominal (j'entends chanter les oiseaux / les oiseaux chanter) y el pronombre delante del verbo de percepción (je les entends rire).", "Concordar el participio cuando el COD hace la acción: les musiciens que j'ai entendus jouer; ta sœur, je l'ai entendue chanter."],
    iconos: ["ic2/audifonos", "ic2/estrella", "ic2/lapiz"],
    previos: ["Faire et laisser + infinitif (lección 5) y los pronombres COD (B1.1, lección 29)."],
    capacidad: "Ahora describes lo que ves y oyes con naturalidad."
  },
  requiere: R("b3fl-syntaxe", "b1cc-cod"), recupera: ["b1cc-cod"],
  conceptos: {
    "b3pi-forme": { n: "verbo de percepción + COD + infinitivo (je vois le train arriver), nunca verbo conjugado (*le bus part); orden libre (j'ai vu partir le bus); pronombre delante (je les entends rire)", b: "gr" },
    "b3pi-accord": { n: "en passé composé, el participio concuerda si el COD hace la acción del infinitivo (je l'ai entendue chanter, les musiciens que j'ai entendus jouer); laisser + infinitivo (laisse-le dormir)", b: "gr" }
  },
  video: {
    titulo: "Ver, oír + infinitivo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "je les entends chanter", seg: [
        { es: "Hola. Tras ver u oír, el infinitivo tiene su propio sujeto." } ] },
      { v: "frase", filas: [
          { nota: "nombre", p: 1, partes: [["J'entends le train arriver.", "-", 1]] },
          { nota: "pronombre", p: 2, partes: [["Je les vois jouer.", "-", 2]] },
          { nota: "laisser", p: 3, partes: [["Laisse passer les gens.", "-", 3]] } ], seg: [
        { fr: "J'entends le train arriver.", p: 1 }, { fr: "Je les vois jouer.", p: 2 }, { fr: "Laisse passer les gens.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Oí a los vecinos gritar toda la noche.»", o: ["J'ai entendu les voisins crier toute la nuit.", "J'ai entendu les voisins crient toute la nuit."], a: 0,
        bien: "¡Sí! Infinitivo tras entendre.", mal: "Tras un verbo de percepción: infinitivo.",
        seg: [ { es: "Pausa. Gritar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je les entends rire", "j'ai vu partir le bus", "laisse-le dormir", "je l'ai entendue chanter"], seg: [
        { es: "El pronombre va delante del verbo de percepción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Desde la ventana", img: "bg-paris", yo: "camila",
    escena: "Camila describe lo que ve desde su ventana en Lyon.",
    pj: PJ,
    lineas: [
      ["camila", "De ma fenêtre, je regarde les passants marcher sous la pluie. On entend la pluie tomber.", "Desde mi ventana miro a la gente caminar bajo la lluvia. Se oye caer la lluvia."],
      ["hugo", "Et les enfants du voisin ? — Je les vois jouer dans la cour. Je les entends rire.", "¿Y los niños del vecino? — Los veo jugar en el patio. Los oigo reír."],
      ["camila", "Ta sœur ? Je l'ai entendue chanter hier : quelle voix ! J'ai vu les enfants traverser la rue avec elle.", "¿Tu hermana? La oí cantar ayer: ¡qué voz! Vi a los niños cruzar la calle con ella."],
      ["hugo", "Hier soir, j'ai entendu les voisins crier toute la nuit… On sentait la tension monter dans l'immeuble !", "Anoche oí a los vecinos gritar toda la noche… ¡Se sentía subir la tensión en el edificio!"]
    ],
    fijate: "Fíjate: je regarde les passants marcher, on entend la pluie tomber, je les vois jouer, je les entends rire, je l'ai entendue chanter (concordancia), les voisins crier, la tension monter."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La proposición infinitiva",
      idea: "Tras voir, entendre, regarder, écouter, sentir y laisser, el infinitivo puede tener su propio sujeto: J'entends les oiseaux chanter. Con un nombre, el orden es libre: J'entends chanter les oiseaux / J'entends les oiseaux chanter. Con un pronombre, va delante del verbo de percepción: Je les entends chanter (nunca «j'entends les rire»). Tras el verbo de percepción va el infinitivo, nunca un verbo conjugado: J'ai vu le bus partir (no «le bus part»). En passé composé, el participio concuerda si el COD hace la acción: Ta sœur ? Je l'ai entendue chanter. Les musiciens que j'ai entendus jouer.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["J'entends le train arriver.", "Oigo llegar el tren.", "COD + infinitivo"],
        ["Je les vois jouer.", "Los veo jugar.", "pronombre delante"],
        ["Laisse passer les gens.", "Deja pasar a la gente.", "laisser + inf."],
        ["Je les entends rire. · J'ai vu partir le bus. · Laisse-le dormir. · On voit la mer briller.", "Los oigo reír. · Vi salir el bus. · Déjalo dormir. · Se ve brillar el mar.", "Correcta"],
        ["J'entends les rire. · J'ai vu le bus part. · Laisse dormir-le. · On voit la mer brille.", "pronombre mal puesto · verbo conjugado", "Incorrecta"],
        ["On sent la tension monter. · monter", "Se siente subir la tensión.", "sentir + inf."],
        ["J'ai entendu les voisins crier. · crier", "Oí a los vecinos gritar.", "infinitivo"],
        ["Ta sœur ? Je l'ai entendue chanter. · l'", "¿Tu hermana? La oí cantar.", "concordancia"],
        ["Les musiciens que j'ai entendus jouer. · entendus", "Los músicos que oí tocar.", "concordancia"],
        ["J'écoute le vent souffler. · Elle regarde les nuages passer. · Nous sentons la terre trembler. · Il voit la nuit tomber.", "Escucho soplar el viento. · Mira pasar las nubes. · Sentimos temblar la tierra. · Ve caer la noche.", "ejemplos"],
        ["Je vois la neige tomber.", "Veo caer la nieve.", "ejemplo"]
      ]],
      ej: [["J'ai vu les enfants traverser la rue.", "Vi a los niños cruzar la calle."], ["On entend la pluie tomber.", "Se oye caer la lluvia."], ["Je la regarde danser.", "La miro bailar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vois le soleil qui se lever.", "Je vois le soleil se lever.", "Tras verbo de percepción: infinitivo."], ["J'entends les rire.", "Je les entends rire.", "Pronombre delante del verbo de percepción."], ["J'ai entendu les voisins crient.", "J'ai entendu les voisins crier.", "Infinitivo, no verbo conjugado."]] }
  ],
  ejemplos: [
    { sit: "«Oigo llegar el tren.»", resp: "J'entends le train arriver.", pasos: ["entendre + COD + infinitivo."], porque: "Percepción." },
    { sit: "«Los veo jugar.»", resp: "Je les vois jouer.", pasos: ["Pronombre delante de voir."], porque: "Pronombre." },
    { sit: "«Deja pasar a la gente.»", resp: "Laisse passer les gens.", pasos: ["laisser + infinitivo."], porque: "Permiso." }
  ],
  comprueba: [
    { q: "Tras un verbo de percepción va…", o: ["el infinitivo", "un verbo conjugado"], a: 0, b: "gr", porque: "J'entends le train arriver." },
    { q: "«Los oigo reír» se dice…", o: ["Je les entends rire.", "J'entends les rire."], a: 0, b: "gr", porque: "Pronombre delante." },
    { q: "«Ta sœur ? Je l'ai ___ chanter.»", o: ["entendue", "entendu"], a: 0, b: "gr", porque: "Ella canta: concordancia." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pi-forme"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Je les entends rire.", 0], ["J'ai vu partir le bus.", 0], ["Laisse-le dormir.", 0], ["On voit la mer briller.", 0], ["J'entends les rire.", 1], ["J'ai vu le bus part.", 1], ["Laisse dormir-le.", 1], ["On voit la mer brille.", 1]], pista: "Infinitivo y pronombre delante.", why: "Estructura." },
    { fase: "guiada", c: ["b3pi-forme"], k: "choice", ask: "«Oigo llegar el tren.»", q: "«___»", o: ["J'entends le train arriver.", "J'entends le train arrive."], a: 0, pista: "Infinitivo.", why: "<b>arriver</b>." },
    { fase: "guiada", c: ["b3pi-forme"], k: "choice", ask: "«Los veo jugar.»", q: "«___»", o: ["Je les vois jouer.", "Je vois les jouer."], a: 0, pista: "Pronombre delante.", why: "<b>Je les vois jouer.</b>" },
    { fase: "indep", c: ["b3pi-accord"], k: "choice", ask: "«Deja pasar a la gente.»", q: "«___»", o: ["Laisse passer les gens.", "Laisse les gens passent."], a: 0, why: "<b>Laisse passer les gens.</b>" },
    { fase: "indep", c: ["b3pi-forme"], k: "fill", ask: "Infinitivo de monter.", q: "On sent la tension ___ dans la salle.", acc: ["monter"], why: "<b>monter</b>." },
    { fase: "indep", c: ["b3pi-accord"], k: "fill", ask: "Pronombre (ta sœur).", q: "Ta sœur ? Je ___ ai entendue chanter hier.", acc: ["l'", "l’"], why: "<b>l'</b>." },
    { fase: "aplica", c: ["b3pi-forme"], k: "match", ask: "Une cada principio con su infinitivo.", q: "Percepción → infinitivo", pairs: [["J'écoute le vent", "souffler."], ["Elle regarde les nuages", "passer."], ["Nous sentons la terre", "trembler."], ["Il voit la nuit", "tomber."]], why: "Proposición infinitiva." },
    { fase: "aplica", c: ["b3pi-forme"], k: "spot", ask: "Encuentra el error.", s: "J'ai entendu les voisins [crient] toute la nuit .", fix: "crier", why: "<b>crier</b>." },
    { fase: "aplica", c: ["b3pi-forme"], k: "spot", ask: "Encuentra el error.", s: "Les enfants ? [J'entends les] rire dans la cour .", fix: "Je les entends", why: "<b>Je les entends</b>." },
    { fase: "dominio", c: ["b3pi-forme"], k: "order", ask: "Ordena: «Veo caer la nieve».", tokens: ["Je vois", "la neige", "tomber"], why: "<b>Je vois la neige tomber</b>" },
    { fase: "dominio", c: ["b3pi-accord"], k: "choice", ask: "«Los músicos que oí tocar eran excelentes.»", q: "«Les musiciens que j'ai ___ jouer étaient excellents.»", o: ["entendus", "entendu"], a: 0, why: "Ellos tocan: <b>entendus</b>." },
    { fase: "dominio", c: ["b3pi-forme", "b3pi-accord"], k: "listen", say: "De ma fenêtre, je regarde les passants marcher sous la pluie.", acc: ["De ma fenêtre, je regarde les passants marcher sous la pluie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>De ma fenêtre, je regarde les passants marcher sous la pluie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Lyon"], previo: [] }
};

E["b21-ne-expletif"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le ne explétif : avant qu'il ne parte",
  objetivo: {
    que: "Vas a reconocer y usar el ne expletivo, que no niega: je crains qu'il ne pleuve (temo que llueva).",
    corto: "Partons avant qu'il ne fasse nuit. · Je crains qu'elle ne soit malade. · Il est plus riche qu'on ne le croit.",
    podras: ["Usarlo, en registro cuidado, tras avant que, à moins que, de peur que, de crainte que.", "Usarlo tras los verbos de temor (craindre, avoir peur, redouter que) y en las comparaciones de desigualdad (plus… que je ne pensais).", "Distinguir el ne expletivo (afirmativo) de la negación real con pas: je crains qu'il ne vienne pas = temo que no venga."],
    iconos: ["ic2/pergamino", "ic2/pregunta", "ic2/lapiz"],
    previos: ["Las conjunciones con subjuntivo (B1.2, lección 19) y las subordinadas de tiempo (lección 16)."],
    capacidad: "Ahora no confundes «je crains qu'il ne vienne» con una negación."
  },
  requiere: R("b2sc-subj", "b3st-subj"), recupera: ["b3st-subj"],
  conceptos: {
    "b3ne-emploi": { n: "ne expletivo (opcional, registro cuidado) tras avant que, à moins que, de peur que, craindre / avoir peur que y en comparaciones (plus loin que je ne le pensais); va con subjuntivo", b: "gr" },
    "b3ne-sens": { n: "no niega: je crains qu'il ne parte = temo que se vaya; la negación real lleva pas: je crains qu'il ne parte pas = temo que no se vaya", b: "gr" }
  },
  video: {
    titulo: "Un ne que no niega", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "avant qu'il ne parte", seg: [
        { es: "Hola. Este ne es solo elegancia: no niega nada." } ] },
      { v: "dos",
        a: { tag: "expletivo", fr: "Je crains qu'il ne vienne.", es: "temo que venga" },
        b: { tag: "negación", fr: "Je crains qu'il ne vienne pas.", es: "temo que no venga" },
        seg: [ { es: "Sin pas, afirmativo:", p: 1 }, { fr: "Je crains qu'il ne vienne.", p: 1 }, { es: "Con pas, negativo:", p: 2 }, { fr: "Je crains qu'il ne vienne pas.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«J'ai peur qu'il ne tombe.» significa…", o: ["Tengo miedo de que se caiga.", "Tengo miedo de que no se caiga."], a: 0,
        bien: "¡Sí! Sin pas no hay negación.", mal: "El ne solo no niega.",
        seg: [ { es: "Pausa. ¿Se cae o no?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avant qu'il ne", "à moins qu'il ne", "de peur que", "je crains qu'il ne", "plus que je ne"], seg: [
        { es: "Sin pas, no hay negación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La tormenta", img: "bg-playa", yo: "camila",
    escena: "Camila y Hugo están en la playa y se acerca una tormenta.",
    pj: PJ,
    lineas: [
      ["camila", "Rentrons avant qu'il ne pleuve ! Partons avant qu'il ne fasse nuit.", "¡Volvamos antes de que llueva! Vámonos antes de que se haga de noche."],
      ["hugo", "Tu as raison. Je crains que ta sœur ne soit malade : elle était toute pâle. J'ai peur qu'elle ne se perde en rentrant.", "Tienes razón. Temo que tu hermana esté enferma: estaba muy pálida. Tengo miedo de que se pierda al volver."],
      ["camila", "C'est plus loin que je ne le pensais ! On ira demain, à moins qu'il ne pleuve encore.", "¡Es más lejos de lo que pensaba! Iremos mañana, a menos que vuelva a llover."],
      ["hugo", "Il faut réagir avant que la situation ne devienne incontrôlable. Agissons avant qu'il ne soit trop tard !", "Hay que reaccionar antes de que la situación se vuelva incontrolable. ¡Actuemos antes de que sea demasiado tarde!"]
    ],
    fijate: "Fíjate: avant qu'il ne pleuve, je crains que… ne soit, j'ai peur qu'elle ne se perde, plus loin que je ne le pensais, à moins qu'il ne pleuve: el ne no niega."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El ne expletivo",
      idea: "El ne expletivo no niega: es una marca de registro cuidado, opcional (su ausencia no es un error). Aparece tras avant que, à moins que, de peur que, de crainte que (avant qu'il ne soit trop tard), tras los verbos de temor craindre, avoir peur, redouter que (j'ai peur qu'il ne se perde) y en las comparaciones de desigualdad (C'est plus facile que je ne pensais). Va con subjuntivo tras las conjunciones y los verbos de temor. Para negar de verdad hace falta pas: Je crains qu'il ne vienne pas = temo que no venga.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["Rentrons avant qu'il ne pleuve. · ne · avant que", "Volvamos antes de que llueva.", "avant que + ne"],
        ["à moins qu'il ne pleuve · de peur qu'on ne le voie", "a menos que llueva · por miedo a que lo vean", "conjunción + ne"],
        ["Je crains qu'elle ne soit malade.", "Temo que esté enferma.", "temor + ne"],
        ["J'ai peur qu'il ne tombe. · Tengo miedo de que se caiga.", "Tengo miedo de que se caiga.", "afirmativo"],
        ["Je crains qu'il ne vienne pas. · Temo que no venga.", "Temo que no venga.", "negativo (pas)"],
        ["C'est plus loin que je ne le pensais. · pensais", "Es más lejos de lo que pensaba.", "comparación"],
        ["Je crains qu'il ne parte. · avant qu'il ne soit tard · à moins qu'elle ne refuse · plus grand qu'on ne pense", "temo que se vaya · antes de que sea tarde · a menos que se niegue · más grande de lo que se piensa", "Afirmativa (ne expletivo)"],
        ["Je crains qu'il ne parte pas. · Il ne part pas. · Elle ne refuse jamais. · On ne pense rien.", "temo que no se vaya · no se va · nunca se niega · no se piensa nada", "Negativa"],
        ["Je crains qu'il ne vienne trop tard. · vienne", "Temo que llegue demasiado tarde.", "subjuntivo"],
        ["avant qu'il ne parte · je crains qu'il ne mente", "antes de que se vaya · temo que mienta", "ejemplos"],
        ["Agissons avant qu'il ne soit trop tard.", "Actuemos antes de que sea demasiado tarde.", "ejemplo"]
      ]],
      ej: [["Partons avant qu'il ne fasse nuit.", "Vámonos antes de que se haga de noche."], ["Je crains qu'elle ne soit malade.", "Temo que esté enferma."], ["Il est plus riche qu'on ne le croit.", "Es más rico de lo que se cree."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je crains qu'il ne vienne = temo que no venga", "Je crains qu'il ne vienne = temo que venga", "El ne solo no niega."], ["Je crains qu'il ne vient trop tard.", "Je crains qu'il ne vienne trop tard.", "Subjuntivo tras craindre que."], ["Il faut que tu ne viennes. (= que vengas)", "Il faut que tu viennes.", "Il faut que no lleva ne expletivo."]] }
  ],
  ejemplos: [
    { sit: "«J'ai peur qu'il ne tombe.»", resp: "Tengo miedo de que se caiga.", pasos: ["Sin pas: afirmativo."], porque: "Expletivo." },
    { sit: "«Je crains qu'il ne vienne pas.»", resp: "Temo que no venga.", pasos: ["Con pas: negación."], porque: "Negación." },
    { sit: "¿Tras qué conjunción aparece el ne expletivo?", resp: "avant que", pasos: ["avant que, à moins que, de peur que."], porque: "Conjunciones." }
  ],
  comprueba: [
    { q: "El ne expletivo…", o: ["no niega", "niega"], a: 0, b: "gr", porque: "Marca de registro." },
    { q: "«Je crains qu'il ne vienne pas» significa…", o: ["Temo que no venga.", "Temo que venga."], a: 0, b: "gr", porque: "Con pas." },
    { q: "El ne expletivo es…", o: ["opcional", "obligatorio"], a: 0, b: "gr", porque: "Registro cuidado." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ne-sens"], k: "sort", ask: "¿Afirmativa (ne expletivo) o negativa?", q: "Clasifica.", cats: ["Afirmativa (ne expletivo)", "Negativa"], items: [["Je crains qu'il ne parte.", 0], ["avant qu'il ne soit tard", 0], ["à moins qu'elle ne refuse", 0], ["plus grand qu'on ne pense", 0], ["Je crains qu'il ne parte pas.", 1], ["Il ne part pas.", 1], ["Elle ne refuse jamais.", 1], ["On ne pense rien.", 1]], pista: "¿Hay pas, jamais, rien?", why: "Sentido." },
    { fase: "guiada", c: ["b3ne-sens"], k: "choice", es: true, ask: "«J'ai peur qu'il ne tombe.» significa…", q: "Elige.", o: ["Tengo miedo de que se caiga.", "Tengo miedo de que no se caiga."], a: 0, pista: "Sin pas.", why: "Afirmativo." },
    { fase: "guiada", c: ["b3ne-sens"], k: "choice", es: true, ask: "«Je crains qu'il ne vienne pas.» significa…", q: "Elige.", o: ["Temo que no venga.", "Temo que venga."], a: 0, pista: "Con pas.", why: "Negación." },
    { fase: "indep", c: ["b3ne-emploi"], k: "choice", ask: "¿Tras qué conjunción aparece el ne expletivo?", q: "«___ il ne parte»", o: ["avant que", "après que"], a: 0, why: "<b>avant que</b>." },
    { fase: "indep", c: ["b3ne-emploi"], k: "fill", ask: "ne expletivo.", q: "Rentrons avant qu'il ___ pleuve.", acc: ["ne"], why: "<b>ne</b>." },
    { fase: "indep", c: ["b3ne-emploi"], k: "fill", ask: "Imparfait de penser (je).", q: "C'est plus loin que je ne le ___ .", acc: ["pensais"], why: "<b>pensais</b>." },
    { fase: "aplica", c: ["b3ne-emploi"], k: "match", ask: "Une cada frase con su traducción.", q: "Francés → español", pairs: [["à moins qu'il ne pleuve", "a menos que llueva"], ["de peur qu'on ne le voie", "por miedo a que lo vean"], ["avant qu'il ne parte", "antes de que se vaya"], ["je crains qu'il ne mente", "temo que mienta"]], why: "Equivalencias." },
    { fase: "aplica", c: ["b3ne-emploi"], k: "spot", ask: "Encuentra el error.", s: "Je crains qu'il ne [vient] trop tard pour nous aider .", fix: "vienne", why: "<b>vienne</b>." },
    { fase: "aplica", c: ["b3ne-emploi"], k: "choice", ask: "«Temo que tu hermana esté enferma.»", q: "«Je crains que ta sœur ne ___ malade.»", o: ["soit", "est"], a: 0, why: "<b>soit</b>." },
    { fase: "dominio", c: ["b3ne-emploi"], k: "order", ask: "Ordena: «Actuemos antes de que sea demasiado tarde».", tokens: ["Agissons", "avant qu'il ne soit", "trop tard"], why: "<b>Agissons avant qu'il ne soit trop tard</b>" },
    { fase: "dominio", c: ["b3ne-sens"], k: "choice", ask: "«Es más rico de lo que se cree.»", q: "«Il est plus riche qu'on ___ le croit.»", o: ["ne", "ne pas"], a: 0, why: "<b>ne</b> expletivo." },
    { fase: "dominio", c: ["b3ne-emploi", "b3ne-sens"], k: "listen", say: "Il faut réagir avant que la situation ne devienne incontrôlable.", acc: ["Il faut réagir avant que la situation ne devienne incontrôlable."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut réagir avant que la situation ne devienne incontrôlable.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b21-subjonctif-imparfait"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Reconnaître le subjonctif imparfait : qu'il fût, qu'il eût",
  objetivo: {
    que: "Vas a reconocer el subjuntivo imperfecto y pluscuamperfecto de la literatura (qu'il fût, qu'il eût, qu'il fît, qu'il eût fini) y su equivalente moderno.",
    corto: "Il fallait qu'il fût présent. · Il eût mieux valu se taire.",
    podras: ["Reconocerlo a partir del passé simple: il fut → qu'il fût, il eut → qu'il eût, il fit → qu'il fît, il vint → qu'il vînt.", "Distinguirlo del passé simple por el acento circunflejo en la 3.ª persona: il fut / qu'il fût.", "Traducirlo al francés actual: qu'il fût = qu'il soit, qu'il eût fini = qu'il ait fini; il eût fallu = il aurait fallu."],
    iconos: ["ic2/libro", "ic2/corona", "ic2/pergamino"],
    previos: ["El passé simple (lección 11) y el subjuntivo pasado (lección 3)."],
    capacidad: "Ahora entiendes a Proust y a Flaubert."
  },
  requiere: R("b3ps-formes", "b3sj-passe"), recupera: ["b3ps-formes"],
  conceptos: {
    "b3si-forme": { n: "subjuntivo imperfecto desde el passé simple, con circunflejo en 3.ª sing.: qu'il fût (être), qu'il eût (avoir), qu'il fît (faire), qu'il vînt (venir), qu'il parlât", b: "gr" },
    "b3si-equiv": { n: "equivalente actual: qu'il fût = qu'il soit, qu'il eût = qu'il ait, qu'il vînt = qu'il vienne, qu'il eût fini = qu'il ait fini; il eût fallu = il aurait fallu", b: "gr" }
  },
  video: {
    titulo: "El subjuntivo de los clásicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "qu'il fût", seg: [
        { es: "Hola. Un tiempo para reconocer, no para usar." } ] },
      { v: "dos",
        a: { tag: "passé simple", fr: "il fut", es: "fue (sin acento)" },
        b: { tag: "subjuntivo", fr: "qu'il fût", es: "que fuera (con circunflejo)" },
        seg: [ { es: "Passé simple, sin acento:", p: 1 }, { fr: "il fut", p: 1 }, { es: "Subjuntivo, con circunflejo:", p: 2 }, { fr: "qu'il fût", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Il eût fallu partir plus tôt.» significa…", o: ["Habría hecho falta salir antes.", "Hizo falta salir antes."], a: 0,
        bien: "¡Sí! Il eût fallu = il aurait fallu.", mal: "Eût fallu es un condicional pasado culto.",
        seg: [ { es: "Pausa. Il eût fallu." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qu'il fût", "qu'il eût", "qu'il fît", "qu'il vînt", "il eût fallu"], seg: [
        { es: "El circunflejo marca el subjuntivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La novela del siglo XIX", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee una novela clásica con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "« Bien qu'elle eût raison, personne ne l'écouta. » Eût… c'est quoi ?", "«Aunque tenía razón, nadie la escuchó». Eût… ¿qué es?"],
      ["hugo", "Le subjonctif imparfait d'avoir : aujourd'hui, on dirait « bien qu'elle ait raison ».", "El subjuntivo imperfecto de avoir: hoy se diría «bien qu'elle ait raison»."],
      ["camila", "Et ici : « Il fallait qu'il fût présent. Bien qu'il fût malade, il continua à travailler. »", "Y aquí: «Era necesario que estuviera presente. Aunque estaba enfermo, siguió trabajando»."],
      ["hugo", "Qu'il fût = qu'il soit. Et « Il eût mieux valu se taire » = il aurait mieux valu. Il eût été préférable qu'il fût averti plus tôt !", "Qu'il fût = qu'il soit. Y «Il eût mieux valu se taire» = il aurait mieux valu. ¡Habría sido preferible que le avisaran antes!"]
    ],
    fijate: "Fíjate: qu'elle eût, qu'il fût (subjuntivo imperfecto, con circunflejo); écouta, continua (passé simple); il eût mieux valu, il eût été (= il aurait…)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Reconocer el subjuntivo imperfecto",
      idea: "En la literatura clásica y en textos muy cultos aparece el subjuntivo imperfecto: se forma a partir del passé simple y en 3.ª persona del singular lleva circunflejo: il fut → qu'il fût, il eut → qu'il eût, il fit → qu'il fît, il vint → qu'il vînt, il parla → qu'il parlât, il finit → qu'il finît. El pluscuamperfecto: eût / fût + participio (qu'il eût fini). Hoy se sustituyen por el subjuntivo presente y pasado: qu'il fût = qu'il soit; qu'il eût fini = qu'il ait fini. Il eût fallu, il eût mieux valu son formas cultas de il aurait fallu, il aurait mieux valu.",
      intro: "Toca cada frase.",
      tabla: [["Francés clásico", "Francés actual / español", "Tiempo"], [
        ["il fut · il eut · il fit · il vint", "fue · tuvo · hizo · vino", "Passé simple"],
        ["qu'il fût · qu'il eût · qu'il fît · qu'il vînt", "que fuera · que tuviera · que hiciera · que viniera", "Subjuntivo imperfecto"],
        ["qu'il fût · subjuntivo imperfecto de être", "qu'il soit", "être"],
        ["qu'il fît → faire · faire", "qu'il fasse", "faire"],
        ["qu'elle eût → avoir · avoir", "qu'elle ait", "avoir"],
        ["qu'il vînt", "qu'il vienne", "venir"],
        ["qu'il eût fini", "qu'il ait fini", "pluscuamperfecto"],
        ["Il fallait qu'il vînt. = Il fallait qu'il vienne.", "Era necesario que viniera.", "equivalencia"],
        ["Il eût fallu partir plus tôt. · Habría hecho falta salir antes.", "Il aurait fallu partir plus tôt.", "condicional culto"],
        ["Bien qu'il fût malade, il continua à travailler. · fût", "Aunque estaba enfermo, siguió trabajando.", "con circunflejo"],
        ["Il eût mieux valu se taire.", "Il aurait mieux valu se taire.", "condicional culto"]
      ]],
      ej: [["Il fallait qu'il fût présent.", "Era necesario que estuviera presente."], ["Bien qu'elle eût raison, personne ne l'écouta.", "Aunque tenía razón, nadie la escuchó."], ["Il eût mieux valu se taire.", "Más habría valido callarse."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Bien qu'il fut malade… (sin acento)", "Bien qu'il fût malade…", "El circunflejo distingue el subjuntivo."], ["Usar qu'il fût al hablar", "qu'il soit", "Solo hay que reconocerlo."], ["Il eût fallu = hizo falta", "Il eût fallu = habría hecho falta", "Condicional pasado culto."]] }
  ],
  ejemplos: [
    { sit: "«qu'il fût»", resp: "subjuntivo imperfecto de être", pasos: ["Circunflejo."], porque: "Reconocer." },
    { sit: "«Il fallait qu'il vînt.» en francés actual", resp: "Il fallait qu'il vienne.", pasos: ["vînt → vienne."], porque: "Equivalencia." },
    { sit: "«Il eût fallu partir plus tôt.»", resp: "Habría hecho falta salir antes.", pasos: ["eût fallu = aurait fallu."], porque: "Condicional culto." }
  ],
  comprueba: [
    { q: "«qu'il fût» es…", o: ["subjuntivo imperfecto de être", "passé simple de être"], a: 0, b: "gr", porque: "Circunflejo." },
    { q: "Hoy, «qu'il eût» se dice…", o: ["qu'il ait", "qu'il avait"], a: 0, b: "gr", porque: "Subjuntivo presente." },
    { q: "Lo que distingue «qu'il fût» de «il fut» es…", o: ["el acento circunflejo", "la terminación -ait"], a: 0, b: "gr", porque: "Circunflejo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3si-forme"], k: "sort", ask: "¿Passé simple o subjuntivo imperfecto?", q: "Clasifica.", cats: ["Passé simple", "Subjuntivo imperfecto"], items: [["il fut", 0], ["il eut", 0], ["il fit", 0], ["il vint", 0], ["qu'il fût", 1], ["qu'il eût", 1], ["qu'il fît", 1], ["qu'il vînt", 1]], pista: "Circunflejo y que.", why: "Formas." },
    { fase: "guiada", c: ["b3si-forme"], k: "choice", es: true, ask: "«qu'il fût» es…", q: "Elige.", o: ["subjuntivo imperfecto de être", "passé simple de faire"], a: 0, pista: "Circunflejo.", why: "être." },
    { fase: "guiada", c: ["b3si-equiv"], k: "choice", ask: "«Il fallait qu'il vînt.» en francés actual.", q: "«___»", o: ["Il fallait qu'il vienne.", "Il fallait qu'il venait."], a: 0, pista: "Subjuntivo presente.", why: "<b>vienne</b>." },
    { fase: "indep", c: ["b3si-equiv"], k: "choice", es: true, ask: "«Il eût fallu partir plus tôt.» significa…", q: "Elige.", o: ["Habría hecho falta salir antes.", "Hizo falta salir antes."], a: 0, why: "Condicional culto." },
    { fase: "indep", c: ["b3si-forme"], k: "fill", ask: "¿De qué verbo viene fît?", q: "qu'il fît → ___", acc: ["faire"], why: "<b>faire</b>." },
    { fase: "indep", c: ["b3si-forme"], k: "fill", ask: "¿De qué verbo viene eût?", q: "qu'elle eût → ___", acc: ["avoir"], why: "<b>avoir</b>." },
    { fase: "aplica", c: ["b3si-equiv"], k: "match", ask: "Une cada forma clásica con la actual.", q: "Clásico → actual", pairs: [["qu'il fût", "qu'il soit"], ["qu'il eût", "qu'il ait"], ["qu'il vînt", "qu'il vienne"], ["qu'il eût fini", "qu'il ait fini"]], why: "Equivalencias." },
    { fase: "aplica", c: ["b3si-forme"], k: "spot", ask: "Encuentra el error.", s: "Bien qu'il [fut] malade , il continua à travailler .", fix: "fût", why: "<b>fût</b>." },
    { fase: "aplica", c: ["b3si-equiv"], k: "choice", ask: "«Bien qu'elle eût raison, personne ne l'écouta.» en francés actual.", q: "«Bien qu'elle ___ raison, personne ne l'a écoutée.»", o: ["ait", "avait"], a: 0, why: "<b>ait</b>." },
    { fase: "dominio", c: ["b3si-equiv"], k: "order", ask: "Ordena: «Más habría valido callarse».", tokens: ["Il eût", "mieux valu", "se taire"], why: "<b>Il eût mieux valu se taire</b>" },
    { fase: "dominio", c: ["b3si-equiv"], k: "choice", ask: "«Il eût mieux valu se taire» = …", q: "«___»", o: ["Il aurait mieux valu se taire.", "Il a mieux valu se taire."], a: 0, why: "<b>Il aurait mieux valu</b>." },
    { fase: "dominio", c: ["b3si-forme", "b3si-equiv"], k: "listen", say: "Il eût été préférable qu'il fût averti plus tôt.", acc: ["Il eût été préférable qu'il fût averti plus tôt."], num: false, dict: true, ask: "Escucha la frase y escríbela (¡con circunflejos!).", why: "Era <b>Il eût été préférable qu'il fût averti plus tôt.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Proust", "Flaubert"], previo: [] }
};

E["b21-inversion"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'inversion du sujet après peut-être, sans doute, à peine, aussi",
  objetivo: {
    que: "Vas a invertir el sujeto en la lengua escrita tras peut-être, sans doute, aussi (= por eso), à peine, ainsi.",
    corto: "Peut-être viendra-t-il. · Sans doute a-t-elle raison. · Aussi avons-nous décidé…",
    podras: ["Invertir con sujeto pronombre: Peut-être est-il malade (con -t- si hace falta: a-t-il).", "Hacer la inversión compleja con sujeto nombre: Sans doute Paul a-t-il raison.", "Usar aussi al inicio (= por eso) con inversión, à peine… que, y la alternativa oral sin inversión: peut-être qu'il viendra."],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/corona"],
    previos: ["La interrogación con inversión (B1.1, lección 11) y la modalización (lección 6)."],
    capacidad: "Ahora escribes como en un ensayo francés de nivel alto."
  },
  requiere: R("b1in-registre", "b3mo-echelle"), recupera: ["b1in-registre"],
  conceptos: {
    "b3in-forme": { n: "tras peut-être, sans doute, ainsi, aussi (= por eso), à peine, du moins: verbo-pronombre (peut-être est-il, a-t-il); sujeto nombre: inversión compleja (sans doute Paul a-t-il raison)", b: "gr" },
    "b3in-oral": { n: "alternativa oral sin inversión: peut-être qu'il viendra, sans doute qu'elle a raison; à peine était-il arrivé que…; aussi (al inicio = por eso) ≠ aussi (también)", b: "gr" }
  },
  video: {
    titulo: "La inversión escrita", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "peut-être viendra-t-il", seg: [
        { es: "Hola. Tras algunos adverbios, el sujeto va detrás del verbo." } ] },
      { v: "dos",
        a: { tag: "escrito", fr: "Peut-être a-t-il raison.", es: "con inversión" },
        b: { tag: "oral", fr: "Peut-être qu'il viendra.", es: "sin inversión" },
        seg: [ { es: "Escrito:", p: 1 }, { fr: "Peut-être a-t-il raison.", p: 1 }, { es: "Oral:", p: 2 }, { fr: "Peut-être qu'il viendra.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Quizá haya olvidado nuestra cita.»", o: ["Peut-être a-t-il oublié notre rendez-vous.", "Peut-être a-il oublié notre rendez-vous."], a: 0,
        bien: "¡Sí! a-t-il, con -t-.", mal: "Entre dos vocales: -t-.",
        seg: [ { es: "Pausa. Quizá haya olvidado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["peut-être est-il", "sans doute a-t-elle", "aussi faut-il", "à peine… que", "peut-être qu'il"], seg: [
        { es: "Aussi al inicio = por eso.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El informe del presupuesto", img: "bg-universidad", yo: "camila",
    escena: "Camila redacta la conclusión de un informe.",
    pj: PJ,
    lineas: [
      ["camila", "« Les ressources sont limitées ; aussi devons-nous établir des priorités. »", "«Los recursos son limitados; por eso debemos establecer prioridades»."],
      ["hugo", "Très bien. Et Paul ? Il ne répond pas. — Peut-être a-t-il oublié notre rendez-vous. Sans doute est-elle déjà partie, Laura.", "Muy bien. ¿Y Paul? No contesta. — Quizá haya olvidado nuestra cita. Probablemente Laura ya se fue."],
      ["camila", "À peine était-il arrivé que le téléphone sonna. Sans doute les prix vont-ils augmenter.", "Apenas había llegado cuando sonó el teléfono. Sin duda los precios van a subir."],
      ["hugo", "À l'oral, on dit plus simplement : « Peut-être qu'il viendra. » Mais à l'écrit : « Sans doute a-t-elle raison. »", "Al hablar se dice más simple: «Peut-être qu'il viendra». Pero por escrito: «Sans doute a-t-elle raison»."]
    ],
    fijate: "Fíjate: aussi devons-nous (= por eso), peut-être a-t-il, sans doute est-elle, à peine était-il arrivé que, sans doute les prix vont-ils; oral: peut-être qu'il viendra."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Inversión tras adverbio",
      idea: "En la lengua escrita, tras peut-être, sans doute, ainsi, aussi (al inicio, = por eso), à peine, du moins, encore, el sujeto se invierte. Sujeto pronombre: verbo-pronombre: Peut-être est-il malade. Si el verbo termina en vocal, -t-: Peut-être a-t-il oublié. Sujeto nombre: inversión compleja (el nombre queda y se repite con un pronombre): Sans doute Paul a-t-il raison. À peine… que: À peine était-il arrivé que le téléphone sonna. Al hablar se evita con que: Peut-être qu'il viendra. Sans doute qu'elle a raison.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["Peut-être viendra-t-il. · Sans doute a-t-il tort. · Aussi faut-il agir. · À peine sorti, il tomba.", "Quizá venga. · Sin duda se equivoca. · Por eso hay que actuar. · Apenas salió, se cayó.", "Correcta"],
        ["Peut-être viendra il. · Sans doute a-il tort. · Aussi il faut-il agir. · À peine il était sorti qu'il.", "sin guion · sin -t- · doble sujeto · sin inversión", "Incorrecta"],
        ["Peut-être a-t-il raison. · a-t-il", "Quizá tenga razón.", "inversión + -t-"],
        ["Peut-être qu'il viendra.", "Quizá venga.", "oral sin inversión"],
        ["Sans doute est-elle déjà partie. · est", "Probablemente ya se fue.", "inversión"],
        ["Il pleuvait ; aussi sommes-nous restés. · por eso", "Llovía; por eso nos quedamos.", "aussi = por eso"],
        ["À peine était-il arrivé que le téléphone sonna. · que", "Apenas había llegado cuando sonó el teléfono.", "à peine… que"],
        ["Sans doute les prix vont-ils augmenter.", "Sin duda los precios van a subir.", "inversión compleja"],
        ["Peut-être qu'il ment. = Peut-être ment-il. · Sans doute qu'elle a raison. = Sans doute a-t-elle raison.", "Quizá mienta. · Sin duda tiene razón.", "oral = escrito"],
        ["Alors on a décidé… = Aussi avons-nous décidé… · Il venait d'arriver quand… = À peine était-il arrivé que…", "Entonces decidimos… · Acababa de llegar cuando…", "oral = escrito"],
        ["Aussi devons-nous établir des priorités.", "Por eso debemos establecer prioridades.", "ejemplo"]
      ]],
      ej: [["Peut-être a-t-il oublié.", "Quizá lo haya olvidado."], ["Sans doute les prix vont-ils augmenter.", "Sin duda los precios van a subir."], ["Le budget est limité ; aussi faut-il faire des choix.", "El presupuesto es limitado; por eso hay que elegir."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Aussi nous avons décidé… (= por eso)", "Aussi avons-nous décidé…", "Aussi al inicio exige inversión."], ["Peut-être a-il oublié.", "Peut-être a-t-il oublié.", "Entre vocales: -t-."], ["Peut-être qu'a-t-il raison.", "Peut-être qu'il a raison. / Peut-être a-t-il raison.", "Con que, sin inversión."]] }
  ],
  ejemplos: [
    { sit: "«Quizá tenga razón.» (escrito)", resp: "Peut-être a-t-il raison.", pasos: ["Inversión + -t-."], porque: "Escrito." },
    { sit: "«Quizá venga.» (oral)", resp: "Peut-être qu'il viendra.", pasos: ["Con que, sin inversión."], porque: "Oral." },
    { sit: "«Il pleuvait ; aussi sommes-nous restés.» Aussi significa…", resp: "por eso", pasos: ["Aussi al inicio."], porque: "Consecuencia." }
  ],
  comprueba: [
    { q: "Tras peut-être al inicio, en lo escrito, el sujeto…", o: ["se invierte", "no cambia"], a: 0, b: "gr", porque: "Peut-être est-il." },
    { q: "«Aussi» al inicio de frase significa…", o: ["por eso", "también"], a: 0, b: "gr", porque: "Consecuencia." },
    { q: "La alternativa oral es…", o: ["peut-être qu'il viendra", "peut-être viendra il"], a: 0, b: "gr", porque: "Con que." }
  ],
  practica: [
    { fase: "guiada", c: ["b3in-forme"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["Peut-être viendra-t-il.", 0], ["Sans doute a-t-il tort.", 0], ["Aussi faut-il agir.", 0], ["À peine sorti, il tomba.", 0], ["Peut-être viendra il.", 1], ["Sans doute a-il tort.", 1], ["Aussi il faut-il agir.", 1], ["À peine il était sorti qu'il.", 1]], pista: "Guion y -t-.", why: "Inversión." },
    { fase: "guiada", c: ["b3in-forme"], k: "choice", ask: "«Quizá tenga razón.» (escrito)", q: "«___»", o: ["Peut-être a-t-il raison.", "Peut-être il a raison."], a: 0, pista: "Inversión.", why: "<b>a-t-il</b>." },
    { fase: "guiada", c: ["b3in-oral"], k: "choice", ask: "«Quizá venga.» (oral)", q: "«___»", o: ["Peut-être qu'il viendra.", "Peut-être viendra il."], a: 0, pista: "Con que.", why: "<b>Peut-être qu'il viendra.</b>" },
    { fase: "indep", c: ["b3in-oral"], k: "choice", es: true, ask: "«Il pleuvait ; aussi sommes-nous restés.» Aussi significa…", q: "Elige.", o: ["por eso", "también"], a: 0, why: "Consecuencia." },
    { fase: "indep", c: ["b3in-forme"], k: "fill", ask: "Inversión con être (elle).", q: "Sans doute ___ -elle déjà partie.", acc: ["est"], why: "<b>est-elle</b>." },
    { fase: "indep", c: ["b3in-oral"], k: "fill", ask: "à peine… ___", q: "À peine était-il arrivé ___ le téléphone sonna.", acc: ["que"], why: "<b>que</b>." },
    { fase: "aplica", c: ["b3in-forme", "b3in-oral"], k: "match", ask: "Une cada frase oral con su versión escrita.", q: "Oral → escrito", pairs: [["Peut-être qu'il ment.", "Peut-être ment-il."], ["Sans doute qu'elle a raison.", "Sans doute a-t-elle raison."], ["Alors on a décidé…", "Aussi avons-nous décidé…"], ["Il venait d'arriver quand…", "À peine était-il arrivé que…"]], why: "Registros." },
    { fase: "aplica", c: ["b3in-forme"], k: "spot", ask: "Encuentra el error.", s: "Peut-être [a-il] oublié notre rendez-vous .", fix: "a-t-il", why: "<b>a-t-il</b>." },
    { fase: "aplica", c: ["b3in-forme"], k: "spot", ask: "Encuentra el error (= por eso).", s: "Le budget est limité ; aussi [nous devons] faire des choix .", fix: "devons-nous", why: "<b>devons-nous</b>." },
    { fase: "dominio", c: ["b3in-forme"], k: "order", ask: "Ordena: «Sin duda ella tiene razón».", tokens: ["Sans doute", "a-t-elle", "raison"], why: "<b>Sans doute a-t-elle raison</b>" },
    { fase: "dominio", c: ["b3in-forme"], k: "choice", ask: "«Sin duda Paul tiene razón.» (inversión compleja)", q: "«___»", o: ["Sans doute Paul a-t-il raison.", "Sans doute a Paul raison."], a: 0, why: "<b>Paul a-t-il</b>." },
    { fase: "dominio", c: ["b3in-forme", "b3in-oral"], k: "listen", say: "Les ressources sont limitées ; aussi devons-nous établir des priorités.", acc: ["Les ressources sont limitées ; aussi devons-nous établir des priorités.", "Les ressources sont limitées; aussi devons-nous établir des priorités.", "Les ressources sont limitées, aussi devons-nous établir des priorités."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les ressources sont limitées ; aussi devons-nous établir des priorités.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Laura"], previo: [] }
};

/* ================================ Concordancias y pronombres ================================ */
E["b21-accord-cas-difficiles"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Accord du participe : laissé, fait, coûté, en",
  objetivo: {
    que: "Vas a resolver los casos difíciles de concordancia con avoir: fait + infinitivo, laissé + infinitivo, en como COD y los verbos de medida (coûté, pesé, duré, dormi).",
    corto: "la maison qu'ils ont fait construire · des pommes, j'en ai mangé · les cent euros que ça m'a coûté",
    podras: ["Dejar invariable fait + infinitivo (y laissé + infinitivo desde la reforma de 1990).", "No concordar con en: des livres, j'en ai lu.", "Distinguir coûter, peser, valoir, durer, dormir de medida (invariables: les dix kilos qu'il a pesé) de su sentido figurado (concuerda: les efforts que ce travail m'a coûtés)."],
    iconos: ["ic2/lapiz", "ic2/moneda", "ic2/engranaje"],
    previos: ["La concordancia del participio con avoir (B1.1, lección 3), faire et laisser + infinitif (lección 5) y el pronombre en (B1.1, lección 31)."],
    capacidad: "Ahora resuelves los casos que fallan hasta los nativos."
  },
  requiere: R("b1ap-avant", "b3fl-syntaxe", "b1en-qte"), recupera: ["b1ap-avant"],
  conceptos: {
    "b3ad-fait": { n: "fait + infinitivo: siempre invariable (les robes qu'elle a fait faire); laissé + infinitivo: invariable (1990); en COD: sin concordancia (des pommes, j'en ai mangé)", b: "gr" },
    "b3ad-mesure": { n: "coûter, valoir, peser, durer, dormir, vivre con complemento de medida: invariables (les cent euros que ça a coûté, les heures qu'il a dormi); en sentido figurado concuerdan (les efforts que ça m'a coûtés, les dangers qu'il a courus)", b: "gr" }
  },
  video: {
    titulo: "Concordancias difíciles", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "qu'il a fait laver", seg: [
        { es: "Hola. Los casos donde el participio no concuerda." } ] },
      { v: "frase", filas: [
          { nota: "fait + inf.", p: 1, partes: [["La maison qu'ils ont fait construire est magnifique.", "-", 1]] },
          { nota: "en", p: 2, partes: [["Des erreurs, j'en ai commis beaucoup.", "-", 2]] },
          { nota: "medida", p: 3, partes: [["Les vingt euros que ce livre m'a coûté.", "-", 3]] } ], seg: [
        { fr: "La maison qu'ils ont fait construire est magnifique.", p: 1 }, { fr: "Des erreurs, j'en ai commis beaucoup.", p: 2 }, { fr: "Les vingt euros que ce livre m'a coûté.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estas fotos las mandé revelar en la tienda.»", o: ["Ces photos, je les ai fait développer à la boutique.", "Ces photos, je les ai faites développer à la boutique."], a: 0,
        bien: "¡Sí! Fait + infinitivo: invariable.", mal: "Fait seguido de infinitivo no concuerda.",
        seg: [ { es: "Pausa. Mandé revelar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["fait + infinitif", "j'en ai lu", "coûté", "coûtés", "pesé", "courus"], seg: [
        { es: "Medida: invariable; figurado: concuerda.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La casa nueva", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila sobre la casa de sus padres.",
    pj: PJ,
    lineas: [
      ["hugo", "La maison que mes parents ont fait construire est magnifique ! Les trois ans qu'ont duré les travaux ont été longs.", "¡La casa que mis papás mandaron construir es preciosa! Los tres años que duró la obra fueron largos."],
      ["camila", "Et le prix ? — Les efforts que ce projet leur a coûtés sont énormes ! Mais les cent euros que ça m'a coûté pour venir, je ne les regrette pas.", "¿Y el precio? — ¡Los esfuerzos que les costó este proyecto son enormes! Pero los cien euros que me costó venir no los lamento."],
      ["hugo", "Des erreurs, ils en ont commis beaucoup. La voiture qu'ils ont fait réparer marche bien maintenant.", "Errores, cometieron muchos. El carro que mandaron reparar ya funciona bien."],
      ["camila", "Les vacances que nous avons passées étaient courtes, mais les souvenirs qu'elles nous ont laissés sont immenses.", "Las vacaciones que pasamos fueron cortas, pero los recuerdos que nos dejaron son inmensos."]
    ],
    fijate: "Fíjate: ont fait construire, ont fait réparer (invariable); ont duré, m'a coûté (medida, invariable); leur a coûtés (figurado, concuerda); en ont commis (en, sin concordancia); passées, laissés (COD antes)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los casos difíciles",
      idea: "Fait + infinitivo: siempre invariable (les robes qu'elle a fait faire). Laissé + infinitivo: invariable desde la reforma de 1990 (se admite la concordancia). En como COD: sin concordancia (Des fleurs ? J'en ai cueilli). Coûter, valoir, peser, durer, dormir, vivre, courir con complemento de medida (precio, peso, tiempo): invariables (les dix kilos qu'il a pesé, les heures qu'il a dormi). En sentido figurado son transitivos y concuerdan con el COD anterior: les efforts que ce travail m'a coûtés, les dangers qu'il a courus.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Regla"], [
        ["la robe qu'elle a fait coudre · des livres, j'en ai lu · les dix kilos qu'il a pesé · les dangers qu'il a courus", "el vestido que mandó coser · libros, leí · los diez kilos que pesó · los peligros que corrió", "Correcta"],
        ["la robe qu'elle a faite coudre · des livres, j'en ai lus · les dix kilos qu'il a pesés · les heures qu'il a dormies", "fait concordado · en concordado · medida concordada", "Incorrecta"],
        ["Les lettres qu'il a fait envoyer… · fait · La voiture qu'il a fait réparer", "Las cartas que mandó enviar… · El carro que mandó reparar", "fait + infinitivo = invariable"],
        ["Des pommes ? J'en ai mangé beaucoup.", "¿Manzanas? Comí muchas.", "en COD = sin concordancia"],
        ["Les trois ans qu'ont duré les travaux…", "Los tres años que duró la obra…", "medida = invariable"],
        ["Les cent euros que ça m'a coûté. · coûté", "Los cien euros que me costó.", "coûté (precio) = invariable"],
        ["Les efforts que ce travail m'a coûtés. · coûtés", "Los esfuerzos que me costó este trabajo.", "coûté (esfuerzo) = concuerda (figurado)"],
        ["les souvenirs qu'elles nous ont laissés · les vacances que nous avons passées", "los recuerdos que nos dejaron · las vacaciones que pasamos", "COD antes = concuerda"],
        ["fait + infinitif", "fait seguido de infinitivo", "siempre invariable"]
      ]],
      ej: [["La maison qu'ils ont fait construire est magnifique.", "La casa que mandaron construir es magnífica."], ["Des erreurs, j'en ai commis beaucoup.", "Errores, cometí muchos."], ["Les vingt euros que ce livre m'a coûté.", "Los veinte euros que me costó este libro."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les chemises qu'il a faites laver.", "Les chemises qu'il a fait laver.", "Fait + infinitivo: invariable."], ["Des livres, j'en ai lus.", "Des livres, j'en ai lu.", "Con en: sin concordancia."], ["Les dix kilos qu'il a pesés.", "Les dix kilos qu'il a pesé.", "Medida: invariable."]] }
  ],
  ejemplos: [
    { sit: "«Las cartas que mandó enviar…»", resp: "Les lettres qu'il a fait envoyer…", pasos: ["fait + infinitivo."], porque: "Invariable." },
    { sit: "«¿Manzanas? Comí muchas.»", resp: "Des pommes ? J'en ai mangé beaucoup.", pasos: ["en COD."], porque: "Sin concordancia." },
    { sit: "«Los tres años que duró la obra…»", resp: "Les trois ans qu'ont duré les travaux…", pasos: ["Medida de tiempo."], porque: "Invariable." }
  ],
  comprueba: [
    { q: "Fait + infinitivo es…", o: ["invariable", "variable"], a: 0, b: "gr", porque: "Siempre." },
    { q: "Con en como COD, el participio…", o: ["no concuerda", "concuerda"], a: 0, b: "gr", porque: "j'en ai lu." },
    { q: "«Les efforts que ça m'a ___» (figurado)", o: ["coûtés", "coûté"], a: 0, b: "gr", porque: "Figurado: concuerda." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ad-fait", "b3ad-mesure"], k: "sort", ask: "¿Correcta o incorrecta?", q: "Clasifica.", cats: ["Correcta", "Incorrecta"], items: [["la robe qu'elle a fait coudre", 0], ["des livres, j'en ai lu", 0], ["les dix kilos qu'il a pesé", 0], ["les dangers qu'il a courus", 0], ["la robe qu'elle a faite coudre", 1], ["des livres, j'en ai lus", 1], ["les dix kilos qu'il a pesés", 1], ["les heures qu'il a dormies", 1]], pista: "fait, en, medida.", why: "Concordancias." },
    { fase: "guiada", c: ["b3ad-fait"], k: "choice", ask: "«Las cartas que mandó enviar…»", q: "«Les lettres qu'il a ___ envoyer…»", o: ["fait", "faites"], a: 0, pista: "+ infinitivo.", why: "<b>fait</b>." },
    { fase: "guiada", c: ["b3ad-fait"], k: "choice", ask: "«¿Manzanas? Comí muchas.»", q: "«Des pommes ? J'en ai ___ beaucoup.»", o: ["mangé", "mangées"], a: 0, pista: "en.", why: "<b>mangé</b>." },
    { fase: "indep", c: ["b3ad-mesure"], k: "choice", ask: "«Los tres años que duró la obra…»", q: "«Les trois ans qu'ont ___ les travaux…»", o: ["duré", "durés"], a: 0, why: "<b>duré</b>." },
    { fase: "indep", c: ["b3ad-mesure"], k: "fill", ask: "Participio de coûter (sentido figurado: esfuerzos).", q: "Les efforts que ce travail m'a ___ sont énormes.", acc: ["coûtés"], why: "<b>coûtés</b>." },
    { fase: "indep", c: ["b3ad-fait"], k: "fill", ask: "Participio de faire (+ infinitivo).", q: "La voiture qu'il a ___ réparer marche bien.", acc: ["fait"], why: "<b>fait</b>." },
    { fase: "aplica", c: ["b3ad-fait", "b3ad-mesure"], k: "match", ask: "Une cada caso con su regla.", q: "Caso → regla", pairs: [["fait + infinitivo", "invariable"], ["en COD", "sin concordancia"], ["coûté (precio)", "invariable (medida)"], ["coûté (esfuerzo)", "concuerda (figurado)"]], why: "Reglas." },
    { fase: "aplica", c: ["b3ad-fait"], k: "spot", ask: "Encuentra el error.", s: "Ces photos , je les ai [faites] développer à la boutique .", fix: "fait", why: "<b>fait</b>." },
    { fase: "aplica", c: ["b3ad-mesure"], k: "spot", ask: "Encuentra el error.", s: "Les cent euros que ce billet m' a [coûtés] sont remboursés .", fix: "coûté", why: "<b>coûté</b>: precio." },
    { fase: "dominio", c: ["b3ad-mesure"], k: "order", ask: "Ordena: «Los cien euros que me costó».", tokens: ["Les cent euros", "que ça", "m'a coûté"], why: "<b>Les cent euros que ça m'a coûté</b>" },
    { fase: "dominio", c: ["b3ad-fait"], k: "choice", ask: "«Errores, cometí muchos.»", q: "«Des erreurs, j'en ai ___ beaucoup.»", o: ["commis", "commises"], a: 0, why: "<b>commis</b>." },
    { fase: "dominio", c: ["b3ad-fait", "b3ad-mesure"], k: "listen", say: "Les vacances que nous avons passées étaient courtes, mais les souvenirs qu'elles nous ont laissés sont immenses.", acc: ["Les vacances que nous avons passées étaient courtes, mais les souvenirs qu'elles nous ont laissés sont immenses."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les vacances que nous avons passées étaient courtes, mais les souvenirs qu'elles nous ont laissés sont immenses.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b21-pronom-neutre"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le pronom neutre le, en, y : je le sais, j'en doute, j'y pense",
  objetivo: {
    que: "Vas a sustituir una idea entera con le, en o y: Je le sais. J'en doute. J'y pense. Y el adjetivo con le invariable: Fatiguée ? Oui, je le suis.",
    corto: "Je le savais. · J'en doute. · J'y tiens. · Contente ? Oui, je le suis.",
    podras: ["Usar le para una proposición COD (je le crois, je l'espère, je te l'avais dit) y para un atributo (je le suis), siempre invariable.", "Usar en para una idea con de (j'en suis sûr, je m'en souviens, j'en ai besoin).", "Usar y para una idea con à (j'y pense, je n'y crois pas, j'y tiens, je m'y attendais)."],
    iconos: ["ic2/bombilla", "ic2/pregunta", "ic2/engranaje"],
    previos: ["El pronombre y (B1.1, lección 30) y el pronombre en (B1.1, lección 31)."],
    capacidad: "Ahora respondes con naturalidad: «J'en doute», «Je l'espère»."
  },
  requiere: R("b1y-pers", "b1en-de"), recupera: ["b1en-de"],
  conceptos: {
    "b3pn-le": { n: "le neutro: sustituye una proposición COD (je le sais, je l'espère, je te l'avais dit) o un atributo con être (fatiguée ? oui, je le suis), invariable", b: "gr" },
    "b3pn-eny": { n: "en = idea con de (j'en suis sûr, je m'en doutais, j'en ai besoin, je m'en souviens); y = idea con à (j'y pense, je n'y crois pas, j'y tiens, je m'y attendais)", b: "gr" }
  },
  video: {
    titulo: "Pronombres para ideas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "j'en doute", seg: [
        { es: "Hola. Un pronombre puede reemplazar una idea entera." } ] },
      { v: "frase", filas: [
          { nota: "le", p: 1, partes: [["Elle va démissionner ? — Je le savais.", "-", 1]] },
          { nota: "en (de)", p: 2, partes: [["Il viendra ? — J'en doute.", "-", 2]] },
          { nota: "y (à)", p: 3, partes: [["Ce projet, j'y tiens beaucoup.", "-", 3]] } ], seg: [
        { fr: "Elle va démissionner ? Je le savais.", p: 1 }, { fr: "Il viendra ? J'en doute.", p: 2 }, { fr: "Ce projet, j'y tiens beaucoup.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«¿Estás preocupada? Sí, lo estoy un poco.»", o: ["Tu es inquiète ? Oui, je le suis un peu.", "Tu es inquiète ? Oui, je la suis un peu."], a: 0,
        bien: "¡Sí! Le neutro, invariable.", mal: "Con un adjetivo: le, aunque sea femenino.",
        seg: [ { es: "Pausa. Lo estoy." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["je le sais", "je l'espère", "j'en doute", "je m'en souviens", "j'y pense", "je le suis"], seg: [
        { es: "De → en; à → y.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las dudas de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan del examen de un amigo.",
    pj: PJ,
    lineas: [
      ["camila", "Tu crois qu'il réussira ? — Je l'espère, mais j'en doute un peu.", "¿Crees que aprobará? — Eso espero, pero lo dudo un poco."],
      ["hugo", "Paul va démissionner ? Je le savais ! Je te l'avais dit.", "¿Paul va a renunciar? ¡Lo sabía! Te lo había dicho."],
      ["camila", "Tu es sûr qu'il viendra ? — Oui, j'en suis certain. Tu te souviens de ce jour à Lyon ? — Oui, je m'en souviens.", "¿Estás seguro de que vendrá? — Sí, estoy seguro. ¿Te acuerdas de aquel día en Lyon? — Sí, me acuerdo."],
      ["hugo", "Ce projet, j'y tiens beaucoup. Et la chance, tu y crois ? — Non, je n'y crois pas. Fatiguée ? — Oui, je le suis.", "Este proyecto me importa mucho. ¿Y la suerte, crees en ella? — No, no creo en ella. ¿Cansada? — Sí, lo estoy."]
    ],
    fijate: "Fíjate: je l'espère, je le savais, je te l'avais dit, je le suis (le); j'en doute, j'en suis certain, je m'en souviens (en = de); j'y tiens, je n'y crois pas (y = à)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Le, en, y neutros",
      idea: "Le neutro sustituye una proposición que es COD: Il est malade ? — Je le sais. Je le crois. Je l'espère. Je te l'avais dit. Con être sustituye un adjetivo o nombre atributo y es invariable: Fatiguée ? Oui, je le suis (nunca «je la suis»). En sustituye una idea introducida por de: J'en suis sûr. J'en doute. Je m'en souviens. J'en ai besoin. Je m'en doutais. Y sustituye una idea introducida por à: J'y pense. Je n'y crois pas. J'y tiens. Je m'y attendais.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Pronombre"], [
        ["Tu savais qu'il partait ? — Oui, je le savais. · Je te l'avais dit.", "¿Sabías que se iba? — Sí, lo sabía. · Te lo había dicho.", "le (idea)"],
        ["Il pleuvra demain ? Je l'espère ! · l'", "¿Lloverá mañana? ¡Eso espero!", "le (idea)"],
        ["Fatiguée ? Oui, je le suis. · Tu es prêt ? — Oui, je le suis. · le", "¿Cansada? Sí, lo estoy. · ¿Estás listo? — Sí, lo estoy.", "le (atributo, invariable)"],
        ["J'___ suis sûr. · Je m'___ doutais. · J'___ ai besoin. · Je m'___ souviens.", "estar seguro de · sospechar · necesitar · acordarse de", "en (de)"],
        ["J'___ pense souvent. · Je n'___ crois pas. · J'___ tiens. · Je m'___ attendais.", "pensar en · creer en · tenerle apego a · esperarse", "y (à)"],
        ["Il viendra ? — J'en doute.", "¿Vendrá? — Lo dudo.", "en"],
        ["Tu te souviens de ce jour ? — Oui, je m'en souviens.", "¿Te acuerdas de ese día? — Sí, me acuerdo.", "en"],
        ["Ton passeport ? Tu t'en es occupé ? · en", "¿Tu pasaporte? ¿Te ocupaste de eso?", "en (s'occuper de)"],
        ["Tu crois à la chance ? — Non, je n'y crois pas.", "¿Crees en la suerte? — No, no creo en ella.", "y"],
        ["Tu tiens à ce livre ? — Oui, j'y tiens.", "¿Le tienes apego a ese libro? — Sí.", "y"]
      ]],
      ej: [["Elle va démissionner ? — Je le savais.", "¿Va a renunciar? — Lo sabía."], ["Tu es sûr qu'il viendra ? — Oui, j'en suis certain.", "¿Estás seguro de que vendrá? — Sí, estoy seguro."], ["Ce projet, j'y tiens beaucoup.", "Este proyecto me importa mucho."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Fatiguée ? Oui, je la suis.", "Fatiguée ? Oui, je le suis.", "Con adjetivo, le neutro invariable."], ["Je souviens.", "Je m'en souviens.", "se souvenir de → en."], ["J'en pense souvent. (penser à)", "J'y pense souvent.", "penser à → y."]] }
  ],
  ejemplos: [
    { sit: "«¿Cansada? Sí, lo estoy.»", resp: "Oui, je le suis.", pasos: ["Atributo → le invariable."], porque: "le." },
    { sit: "«¿Vendrá? Lo dudo.»", resp: "J'en doute.", pasos: ["douter de → en."], porque: "en." },
    { sit: "«¿Crees en la suerte? No, no creo en ella.»", resp: "Non, je n'y crois pas.", pasos: ["croire à → y."], porque: "y." }
  ],
  comprueba: [
    { q: "Con una idea introducida por de se usa…", o: ["en", "y"], a: 0, b: "gr", porque: "j'en doute." },
    { q: "Con una idea introducida por à se usa…", o: ["y", "en"], a: 0, b: "gr", porque: "j'y pense." },
    { q: "«Contente ? Oui, je ___ suis.»", o: ["le", "la"], a: 0, b: "gr", porque: "Invariable." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pn-eny"], k: "sort", ask: "¿En o y?", q: "Clasifica.", cats: ["en", "y"], items: [["J'___ suis sûr.", 0], ["Je m'___ doutais.", 0], ["J'___ ai besoin.", 0], ["Je m'___ souviens.", 0], ["J'___ pense souvent.", 1], ["Je n'___ crois pas.", 1], ["J'___ tiens.", 1], ["Je m'___ attendais.", 1]], pista: "¿De o à?", why: "Pronombres." },
    { fase: "guiada", c: ["b3pn-le"], k: "choice", ask: "«¿Cansada? Sí, lo estoy.»", q: "«Fatiguée ? ___»", o: ["Oui, je le suis.", "Oui, je la suis."], a: 0, pista: "Invariable.", why: "<b>je le suis</b>." },
    { fase: "guiada", c: ["b3pn-eny"], k: "choice", ask: "«¿Vendrá? Lo dudo.»", q: "«Il viendra ? ___»", o: ["J'en doute.", "J'y doute."], a: 0, pista: "douter de.", why: "<b>J'en doute.</b>" },
    { fase: "indep", c: ["b3pn-eny"], k: "choice", ask: "«¿Crees en la suerte? No, no creo en ella.»", q: "«Tu crois à la chance ? ___»", o: ["Non, je n'y crois pas.", "Non, je n'en crois pas."], a: 0, why: "<b>je n'y crois pas</b>." },
    { fase: "indep", c: ["b3pn-le"], k: "fill", ask: "Pronombre neutro (espérer).", q: "Il pleuvra demain ? Je ___ espère !", acc: ["l'", "l’"], why: "<b>l'</b>." },
    { fase: "indep", c: ["b3pn-eny"], k: "fill", ask: "s'occuper de → pronombre.", q: "Ton passeport ? Tu t'___ es occupé ?", acc: ["en"], why: "<b>en</b>." },
    { fase: "aplica", c: ["b3pn-le", "b3pn-eny"], k: "match", ask: "Une cada pregunta con su respuesta.", q: "Pregunta → respuesta", pairs: [["Tu savais qu'il partait ?", "Oui, je le savais."], ["Tu te souviens de ce jour ?", "Oui, je m'en souviens."], ["Tu tiens à ce livre ?", "Oui, j'y tiens."], ["Tu es prêt ?", "Oui, je le suis."]], why: "Pronombres." },
    { fase: "aplica", c: ["b3pn-le"], k: "spot", ask: "Encuentra el error.", s: "Tu es inquiète ? Oui , je [la] suis un peu .", fix: "le", why: "<b>le</b>." },
    { fase: "aplica", c: ["b3pn-eny"], k: "spot", ask: "Encuentra el error (penser à).", s: "Ton avenir ? J'[en] pense tous les jours .", fix: "y", why: "<b>J'y pense</b>." },
    { fase: "dominio", c: ["b3pn-le"], k: "order", ask: "Ordena: «Te lo había dicho».", tokens: ["Je", "te l'avais", "dit"], why: "<b>Je te l'avais dit</b>" },
    { fase: "dominio", c: ["b3pn-eny"], k: "choice", ask: "«¿Estás seguro de que vendrá? Sí, estoy seguro.»", q: "«Tu es sûr qu'il viendra ? — Oui, j'___ suis certain.»", o: ["en", "y"], a: 0, why: "<b>en</b>." },
    { fase: "dominio", c: ["b3pn-le", "b3pn-eny"], k: "listen", say: "Tu crois qu'il réussira ? Je l'espère, mais j'en doute un peu.", acc: ["Tu crois qu'il réussira ? Je l'espère, mais j'en doute un peu.", "Tu crois qu'il réussira? Je l'espère, mais j'en doute un peu."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Tu crois qu'il réussira ? Je l'espère, mais j'en doute un peu.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon"], previo: [] }
};

E["b21-omission-article"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'absence d'article : avec patience, sans argent, en voiture",
  objetivo: {
    que: "Vas a saber cuándo el francés no usa artículo: profesiones tras être, avec / sans + nombre abstracto, en + nombre, aposiciones, expresiones fijas y ni… ni.",
    corto: "Il est médecin. · avec plaisir · sans hésitation · en voiture · Il n'a ni voiture ni moto.",
    podras: ["Omitir el artículo con la profesión tras il / elle est (pero c'est un / une…).", "Omitir el artículo tras avec / sans + nombre abstracto, tras en y en las expresiones fijas (avoir peur, faire attention).", "Recuperar el artículo cuando el nombre lleva un adjetivo o un complemento: avec une patience infinie, la soif de savoir."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/estrella"],
    previos: ["Las profesiones (A1, lección 26) y c'est o il est (A1, lección 29)."],
    capacidad: "Ahora no dices «elle est une professeure»."
  },
  requiere: R("pf-sinart", "ci-cest", "ci-ilest"), recupera: ["ci-ilest"],
  conceptos: {
    "b3oa-metier": { n: "profesión, nacionalidad o religión tras être / devenir sin artículo (elle est pilote, il est médecin) ≠ c'est un / une… (c'est une pilote, c'est un architecte célèbre)", b: "gr" },
    "b3oa-expr": { n: "sin artículo: avec / sans + nombre abstracto (avec patience, sans hésitation), en + nombre (en voiture, en hiver), aposición, ni… ni, expresiones fijas (avoir soif); con adjetivo, vuelve el artículo (avec une patience infinie)", b: "gr" }
  },
  video: {
    titulo: "Sin artículo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Il est médecin.", seg: [
        { es: "Hola. A veces, en francés, el artículo sobra." } ] },
      { v: "dos",
        a: { tag: "il est", fr: "Elle est pilote.", es: "sin artículo" },
        b: { tag: "c'est", fr: "C'est une pilote.", es: "con artículo" },
        seg: [ { es: "Con il o elle est:", p: 1 }, { fr: "Elle est pilote.", p: 1 }, { es: "Con c'est:", p: 2 }, { fr: "C'est une pilote.", p: 2 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Este verano viajamos en carro hasta España.»", o: ["Cet été, nous voyageons en voiture jusqu'en Espagne.", "Cet été, nous voyageons à voiture jusqu'en Espagne."], a: 0,
        bien: "¡Sí! En voiture, sin artículo.", mal: "Transporte cerrado: en voiture.",
        seg: [ { es: "Pausa. En carro." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["il est médecin", "avec plaisir", "sans hésitation", "en voiture", "ni… ni", "avoir soif"], seg: [
        { es: "Con adjetivo, vuelve el artículo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La familia de Marie", img: "bg-cafe", yo: "camila",
    escena: "Camila presenta a la familia de su amiga Marie.",
    pj: PJ,
    lineas: [
      ["camila", "Marie est journaliste ; elle travaille avec passion et sans relâche. Sa sœur est médecin depuis 2015.", "Marie es periodista; trabaja con pasión y sin descanso. Su hermana es médica desde 2015."],
      ["hugo", "Et son père ? — C'est un architecte célèbre ! Il est ingénieur aussi.", "¿Y su papá? — ¡Es un arquitecto famoso! También es ingeniero."],
      ["camila", "Cet été, ils voyagent en voiture jusqu'en Espagne. Moi, je n'ai ni voiture ni moto.", "Este verano viajan en carro hasta España. Yo no tengo ni carro ni moto."],
      ["hugo", "Tu veux venir avec nous ? — J'accepte avec plaisir ! Il a accepté sans hésiter, lui aussi. Lyon, ville de la gastronomie, nous attend !", "¿Quieres venir con nosotros? — ¡Acepto con gusto! Él también aceptó sin dudar. ¡Lyon, ciudad de la gastronomía, nos espera!"]
    ],
    fijate: "Fíjate: est journaliste, est médecin, est ingénieur (sin artículo) ≠ c'est un architecte; avec passion, sans relâche, en voiture, ni voiture ni moto, avec plaisir, sans hésiter; Lyon, ville de… (aposición)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuándo no hay artículo",
      idea: "Profesión, nacionalidad, religión tras être / devenir: Elle est avocate. Il est devenu médecin. Pero con c'est: C'est une avocate (y si hay adjetivo: c'est un architecte célèbre). Avec / sans + nombre abstracto: avec plaisir, avec patience, sans hésitation, sans argent. En + nombre: en voiture, en train, en hiver, en colère, en or. Aposiciones y títulos: Lyon, ville de la gastronomie. Ni… ni: Il n'a ni voiture ni moto. Expresiones fijas: avoir faim, avoir soif, avoir peur, faire attention, prendre rendez-vous. Si el nombre lleva adjetivo o complemento, vuelve el artículo: avec une patience infinie, la soif de savoir.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Elle est pilote. · avec patience · en hiver · avoir soif", "Es piloto. · con paciencia · en invierno · tener sed", "Sin artículo"],
        ["C'est une pilote. · avec une patience infinie · pendant l'hiver · la soif de savoir", "Es una piloto. · con una paciencia infinita · durante el invierno · la sed de saber", "Con artículo"],
        ["Il est médecin. · Ma sœur est médecin. · médecin", "Es médico. · Mi hermana es médica.", "profesión"],
        ["C'est un architecte célèbre. · un", "Es un arquitecto famoso.", "c'est + artículo"],
        ["sans hésitation · Il a accepté sans hésiter.", "sin dudarlo · Aceptó sin dudar.", "sans"],
        ["Il n'a ni voiture ni moto.", "No tiene ni carro ni moto.", "ni… ni"],
        ["en voiture · en train · en colère · en", "en carro · en tren · enfadado", "en + nombre"],
        ["avec soin · en colère · sans cesse · par hasard", "con cuidado · enfadado · sin cesar · por casualidad", "expresiones"],
        ["Lyon, ville de la gastronomie, attire beaucoup de touristes.", "Lyon, ciudad de la gastronomía, atrae a muchos turistas.", "aposición"],
        ["J'accepte avec plaisir.", "Acepto con gusto.", "avec"]
      ]],
      ej: [["Il est ingénieur depuis dix ans.", "Es ingeniero desde hace diez años."], ["J'accepte avec plaisir.", "Acepto con gusto."], ["Lyon, ville de la gastronomie, attire beaucoup de touristes.", "Lyon, ciudad de la gastronomía, atrae a muchos turistas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Elle est une professeure.", "Elle est professeure. / C'est une professeure.", "Tras il / elle est, sin artículo."], ["voyager à voiture", "voyager en voiture", "en + transporte."], ["avec la patience", "avec patience", "Nombre abstracto: sin artículo."]] }
  ],
  ejemplos: [
    { sit: "«Es médico.»", resp: "Il est médecin.", pasos: ["Profesión tras il est."], porque: "Sin artículo." },
    { sit: "«Sin dudarlo…»", resp: "sans hésitation", pasos: ["sans + abstracto."], porque: "Sin artículo." },
    { sit: "«No tiene ni carro ni moto.»", resp: "Il n'a ni voiture ni moto.", pasos: ["ni… ni."], porque: "Sin artículo." }
  ],
  comprueba: [
    { q: "«Es médico» se dice…", o: ["Il est médecin.", "Il est un médecin."], a: 0, b: "gr", porque: "Profesión." },
    { q: "«Es un arquitecto famoso» se dice…", o: ["C'est un architecte célèbre.", "Il est architecte célèbre."], a: 0, b: "gr", porque: "c'est + adjetivo." },
    { q: "«Con una paciencia infinita» se dice…", o: ["avec une patience infinie", "avec patience infinie"], a: 0, b: "gr", porque: "Con adjetivo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3oa-metier", "b3oa-expr"], k: "sort", ask: "¿Sin artículo o con artículo?", q: "Clasifica.", cats: ["Sin artículo", "Con artículo"], items: [["Elle est pilote.", 0], ["avec patience", 0], ["en hiver", 0], ["avoir soif", 0], ["C'est une pilote.", 1], ["avec une patience infinie", 1], ["pendant l'hiver", 1], ["la soif de savoir", 1]], pista: "¿Lleva adjetivo o c'est?", why: "Artículo." },
    { fase: "guiada", c: ["b3oa-metier"], k: "choice", ask: "«Es médico.»", q: "«___»", o: ["Il est médecin.", "Il est un médecin."], a: 0, pista: "Profesión.", why: "<b>Il est médecin.</b>" },
    { fase: "guiada", c: ["b3oa-expr"], k: "choice", ask: "«Sin dudarlo…»", q: "«___»", o: ["sans hésitation", "sans une hésitation"], a: 0, pista: "Abstracto.", why: "<b>sans hésitation</b>." },
    { fase: "indep", c: ["b3oa-expr"], k: "choice", ask: "«No tiene ni carro ni moto.»", q: "«___»", o: ["Il n'a ni voiture ni moto.", "Il n'a ni une voiture ni une moto."], a: 0, why: "<b>ni voiture ni moto</b>." },
    { fase: "indep", c: ["b3oa-metier"], k: "fill", ask: "c'est + artículo.", q: "C'est ___ architecte célèbre.", acc: ["un"], why: "<b>un</b>." },
    { fase: "indep", c: ["b3oa-metier"], k: "fill", ask: "«médica» (profesión)", q: "Ma sœur est ___ depuis 2015.", acc: ["médecin"], why: "<b>médecin</b>." },
    { fase: "aplica", c: ["b3oa-expr"], k: "match", ask: "Une cada expresión con su traducción.", q: "Francés → español", pairs: [["avec soin", "con cuidado"], ["en colère", "enfadado"], ["sans cesse", "sin cesar"], ["par hasard", "por casualidad"]], why: "Expresiones." },
    { fase: "aplica", c: ["b3oa-expr"], k: "spot", ask: "Encuentra el error.", s: "Cet été , nous voyageons [à] voiture jusqu'en Espagne .", fix: "en", why: "<b>en</b>." },
    { fase: "aplica", c: ["b3oa-metier"], k: "spot", ask: "Encuentra el error.", s: "Ma cousine [est une] professeure de français .", fix: "est", why: "<b>est professeure</b>." },
    { fase: "dominio", c: ["b3oa-expr"], k: "order", ask: "Ordena: «Aceptó sin dudar».", tokens: ["Il a accepté", "sans", "hésiter"], why: "<b>Il a accepté sans hésiter</b>" },
    { fase: "dominio", c: ["b3oa-expr"], k: "choice", ask: "«Acepto con gusto.»", q: "«J'accepte ___.»", o: ["avec plaisir", "avec le plaisir"], a: 0, why: "<b>avec plaisir</b>." },
    { fase: "dominio", c: ["b3oa-metier", "b3oa-expr"], k: "listen", say: "Marie est journaliste ; elle travaille avec passion et sans relâche.", acc: ["Marie est journaliste ; elle travaille avec passion et sans relâche.", "Marie est journaliste; elle travaille avec passion et sans relâche.", "Marie est journaliste, elle travaille avec passion et sans relâche."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Marie est journaliste ; elle travaille avec passion et sans relâche.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Lyon", "Espagne"], previo: [] }
};

E["b21-adverbes-nuance"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La place et la nuance des adverbes",
  objetivo: {
    que: "Vas a colocar bien los adverbios en los tiempos compuestos y con infinitivo, y a entender los cambios de sentido según su lugar (pas toujours / toujours pas).",
    corto: "J'ai bien dormi. · Il faut toujours vérifier. · Il est arrivé hier.",
    podras: ["Poner los adverbios cortos (bien, mal, déjà, souvent, toujours, beaucoup, vraiment) entre el auxiliar y el participio.", "Ponerlos delante del infinitivo (il faut bien réfléchir) y dejar los de tiempo o lugar concretos detrás (hier, ici, tard, demain).", "Distinguir il n'a pas toujours menti (no siempre) de il n'a toujours pas… (sigue sin), y seulement según su posición."],
    iconos: ["ic2/lapiz", "ic2/reloj-arena", "ic2/estrella"],
    previos: ["Los adverbios en -ment (B1.1, lección 13) y la frecuencia (A1, lección 22)."],
    capacidad: "Ahora tus adverbios están siempre en su lugar."
  },
  requiere: R("b1ad-forme", "b1ad-place"), recupera: ["b1ad-place"],
  conceptos: {
    "b3av-place": { n: "adverbios cortos entre auxiliar y participio (j'ai bien dormi, il a déjà fini, tu as beaucoup travaillé); delante del infinitivo (il faut bien lire); tiempo / lugar concretos detrás (il est arrivé hier)", b: "gr" },
    "b3av-sens": { n: "cambio de sentido: il n'a pas toujours menti (no siempre) / il n'a toujours pas… (sigue sin); seulement; bien (adverbio) ≠ bon (adjetivo)", b: "gr" }
  },
  video: {
    titulo: "El lugar del adverbio", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "j'ai bien compris", seg: [
        { es: "Hola. Los adverbios cortos se meten en medio." } ] },
      { v: "frase", filas: [
          { nota: "en medio", p: 1, partes: [["Nous avons bien compris.", "-", 1]] },
          { nota: "+ infinitivo", p: 2, partes: [["Il faut toujours vérifier.", "-", 2]] },
          { nota: "detrás", p: 3, partes: [["Elle est partie tôt ce matin.", "-", 3]] } ], seg: [
        { fr: "Nous avons bien compris.", p: 1 }, { fr: "Il faut toujours vérifier.", p: 2 }, { fr: "Elle est partie tôt ce matin.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Trabajó bien este año, sus notas son excelentes.»", o: ["Il a bien travaillé cette année, ses notes sont excellentes.", "Il a bon travaillé cette année, ses notes sont excellentes."], a: 0,
        bien: "¡Sí! Bien, adverbio.", mal: "Con un verbo: bien, no bon.",
        seg: [ { es: "Pausa. Trabajó bien." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["j'ai déjà fini", "il faut bien lire", "il est arrivé hier", "pas toujours", "toujours pas"], seg: [
        { es: "Corto en medio; tiempo y lugar, detrás.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El balance del semestre", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hacen el balance de su semestre.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai déjà fini mes examens ! Tu as beaucoup travaillé cette semaine, toi aussi.", "¡Ya terminé mis exámenes! Tú también trabajaste mucho esta semana."],
      ["hugo", "Oui, j'ai bien dormi hier, enfin. Paul est arrivé hier soir. Il faut bien lire les consignes pour l'examen de lundi.", "Sí, por fin dormí bien anoche. Paul llegó anoche. Hay que leer bien las instrucciones para el examen del lunes."],
      ["camila", "Elle a vraiment aimé ce film. Mais Paul ? Il n'a toujours pas rendu son mémoire !", "A ella le gustó mucho esa película. ¿Pero Paul? ¡Todavía no ha entregado su memoria!"],
      ["hugo", "Il n'a pas toujours été sérieux… J'ai toujours pensé que tu avais bien fait de partir à Lyon.", "No siempre ha sido serio… Siempre pensé que hiciste bien en irte a Lyon."]
    ],
    fijate: "Fíjate: j'ai déjà fini, tu as beaucoup travaillé, j'ai bien dormi, elle a vraiment aimé (en medio); il faut bien lire (delante del infinitivo); arrivé hier (detrás); toujours pas ≠ pas toujours."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dónde va el adverbio",
      idea: "En los tiempos compuestos, los adverbios cortos (bien, mal, déjà, souvent, toujours, beaucoup, vraiment, jamais) van entre el auxiliar y el participio: J'ai bien dormi. Il a déjà fini. Con un infinitivo, van delante: Il faut bien réfléchir. Il faut toujours vérifier. Los de tiempo o lugar concretos (hier, ici, tard, demain, ce matin) van detrás: Il est arrivé hier. Los adverbios largos en -ment suelen ir detrás (il a répondu calmement). El lugar cambia el sentido: Il n'a pas toujours menti (no siempre ha mentido) / Il n'a toujours pas menti (sigue sin mentir).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Lugar"], [
        ["bien · déjà · souvent · beaucoup", "bien · ya · a menudo · mucho", "Entre auxiliar y participio"],
        ["hier · ici · tard · demain", "ayer · aquí · tarde · mañana", "Después del participio"],
        ["J'ai déjà fini.", "Ya terminé.", "en medio"],
        ["Tu as beaucoup travaillé. · beaucoup · Elle a vraiment aimé ce film. · vraiment", "Trabajaste mucho. · Le gustó mucho esa película.", "en medio"],
        ["Il a bien travaillé. · bien", "Trabajó bien.", "bien (adverbio)"],
        ["Il faut bien lire les consignes.", "Hay que leer bien las instrucciones.", "delante del infinitivo"],
        ["Il est arrivé hier.", "Llegó ayer.", "detrás"],
        ["J'ai seulement lu le résumé.", "Solo he leído el resumen.", "seulement"],
        ["Il a toujours menti.", "Siempre ha mentido.", "toujours"],
        ["Il n'a pas toujours menti.", "No siempre ha mentido.", "pas toujours"],
        ["Il n'a toujours pas menti.", "Sigue sin mentir.", "toujours pas"],
        ["Il n'a jamais vu la mer.", "Nunca ha visto el mar.", "jamais"]
      ]],
      ej: [["Nous avons bien compris.", "Lo hemos entendido bien."], ["Il faut toujours vérifier.", "Siempre hay que comprobar."], ["Elle est partie tôt ce matin.", "Se fue temprano esta mañana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai compris bien.", "J'ai bien compris.", "Adverbio corto entre auxiliar y participio."], ["Il a bon travaillé.", "Il a bien travaillé.", "Con un verbo: bien."], ["Il est hier arrivé.", "Il est arrivé hier.", "Tiempo concreto: detrás."]] }
  ],
  ejemplos: [
    { sit: "«Ya terminé.»", resp: "J'ai déjà fini.", pasos: ["déjà en medio."], porque: "Corto." },
    { sit: "«Hay que leer bien las instrucciones.»", resp: "Il faut bien lire les consignes.", pasos: ["bien delante del infinitivo."], porque: "Infinitivo." },
    { sit: "«Llegó ayer.»", resp: "Il est arrivé hier.", pasos: ["hier detrás."], porque: "Tiempo concreto." }
  ],
  comprueba: [
    { q: "Los adverbios cortos en passé composé van…", o: ["entre el auxiliar y el participio", "al final de la frase"], a: 0, b: "gr", porque: "j'ai bien dormi." },
    { q: "«Hier» va…", o: ["después del participio", "entre el auxiliar y el participio"], a: 0, b: "gr", porque: "il est arrivé hier." },
    { q: "«Il n'a toujours pas menti» significa…", o: ["Sigue sin mentir.", "No siempre ha mentido."], a: 0, b: "gr", porque: "toujours pas." }
  ],
  practica: [
    { fase: "guiada", c: ["b3av-place"], k: "sort", ask: "¿Entre auxiliar y participio, o después del participio?", q: "Clasifica.", cats: ["Entre auxiliar y participio", "Después del participio"], items: [["bien", 0], ["déjà", 0], ["souvent", 0], ["beaucoup", 0], ["hier", 1], ["ici", 1], ["tard", 1], ["demain", 1]], pista: "Tiempo y lugar concretos: detrás.", why: "Lugar." },
    { fase: "guiada", c: ["b3av-place"], k: "choice", ask: "«Ya terminé.»", q: "«___»", o: ["J'ai déjà fini.", "J'ai fini déjà."], a: 0, pista: "Corto.", why: "<b>J'ai déjà fini.</b>" },
    { fase: "guiada", c: ["b3av-place"], k: "choice", ask: "«Hay que leer bien las instrucciones.»", q: "«___»", o: ["Il faut bien lire les consignes.", "Il faut lire bien les consignes."], a: 0, pista: "Delante del infinitivo.", why: "<b>bien lire</b>." },
    { fase: "indep", c: ["b3av-place"], k: "choice", ask: "«Llegó ayer.»", q: "«___»", o: ["Il est arrivé hier.", "Il est hier arrivé."], a: 0, why: "<b>arrivé hier</b>." },
    { fase: "indep", c: ["b3av-place"], k: "fill", ask: "«mucho»", q: "Tu as ___ travaillé cette semaine.", acc: ["beaucoup"], why: "<b>beaucoup</b>." },
    { fase: "indep", c: ["b3av-place"], k: "fill", ask: "«realmente»", q: "Elle a ___ aimé ce film.", acc: ["vraiment"], why: "<b>vraiment</b>." },
    { fase: "aplica", c: ["b3av-sens"], k: "match", ask: "Une cada frase con su sentido.", q: "Francés → español", pairs: [["J'ai seulement lu le résumé.", "Solo he leído el resumen."], ["Il a toujours menti.", "Siempre ha mentido."], ["Il n'a pas toujours menti.", "No siempre ha mentido."], ["Il n'a toujours pas menti.", "Sigue sin mentir."]], why: "Sentidos." },
    { fase: "aplica", c: ["b3av-sens"], k: "spot", ask: "Encuentra el error.", s: "Il a [bon] travaillé cette année , ses notes sont excellentes .", fix: "bien", why: "<b>bien</b>." },
    { fase: "aplica", c: ["b3av-place"], k: "spot", ask: "Encuentra el error.", s: "Nous avons [compris bien] la consigne .", fix: "bien compris", why: "<b>bien compris</b>." },
    { fase: "dominio", c: ["b3av-place"], k: "order", ask: "Ordena: «Nunca ha visto el mar».", tokens: ["Il n'a", "jamais vu", "la mer"], why: "<b>Il n'a jamais vu la mer</b>" },
    { fase: "dominio", c: ["b3av-sens"], k: "choice", ask: "«Paul todavía no ha entregado su memoria.»", q: "«Paul n'a ___ rendu son mémoire.»", o: ["toujours pas", "pas toujours"], a: 0, why: "<b>toujours pas</b>." },
    { fase: "dominio", c: ["b3av-place", "b3av-sens"], k: "listen", say: "J'ai toujours pensé que tu avais bien fait de partir.", acc: ["J'ai toujours pensé que tu avais bien fait de partir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'ai toujours pensé que tu avais bien fait de partir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Lyon"], previo: [] }
};

/* ================================ Relaciones lógicas avanzadas ================================ */
E["b21-hypothese-mixte"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'hypothèse mixte et même si, quand bien même",
  objetivo: {
    que: "Vas a mezclar tiempos en la hipótesis (pasado → presente, presente → pasado) y a expresar la concesión fuerte con même si y quand bien même.",
    corto: "Si j'avais étudié, je serais médecin aujourd'hui. · Quand bien même il pleuvrait, nous sortirions.",
    podras: ["Usar si + plus-que-parfait → conditionnel présent para una consecuencia actual de un pasado irreal.", "Usar si + imparfait → conditionnel passé para un rasgo permanente con efecto pasado: si j'étais plus courageux, j'aurais accepté.", "Usar même si + indicativo (nunca condicional) y quand bien même + condicional (aun cuando)."],
    iconos: ["ic2/bombilla", "ic2/reloj-arena", "ic2/espadas"],
    previos: ["La hipótesis con si (B1.2, lección 1), el conditionnel passé (lección 2) y la concesión (lección 9)."],
    capacidad: "Ahora imaginas otras vidas con todos los matices."
  },
  requiere: R("b2si-irreel", "b3cp-hyp", "b3co-mode"), recupera: ["b3cp-hyp"],
  conceptos: {
    "b3hm-mixte": { n: "si + plus-que-parfait → conditionnel présent (si j'avais étudié, je serais médecin aujourd'hui); si + imparfait → conditionnel passé (si j'étais organisé, je n'aurais pas oublié)", b: "gr" },
    "b3hm-meme": { n: "même si + indicativo (même s'il pleut, même s'il faisait beau), nunca condicional; quand bien même + condicional (quand bien même il s'excuserait…); + condicional: au cas où, dans l'hypothèse où", b: "gr" }
  },
  video: {
    titulo: "Hipótesis mixtas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "si j'avais… je serais", seg: [
        { es: "Hola. El pasado puede cambiar el presente." } ] },
      { v: "frase", filas: [
          { nota: "pasado → presente", p: 1, partes: [["Si j'avais accepté ce poste, je vivrais à Paris maintenant.", "-", 1]] },
          { nota: "presente → pasado", p: 2, partes: [["Si je parlais mieux anglais, j'aurais obtenu le poste.", "-", 2]] },
          { nota: "concesión", p: 3, partes: [["Quand bien même il pleuvrait, nous sortirions.", "-", 3]] } ], seg: [
        { fr: "Si j'avais accepté ce poste, je vivrais à Paris maintenant.", p: 1 }, { fr: "Si je parlais mieux anglais, j'aurais obtenu le poste.", p: 2 }, { fr: "Quand bien même il pleuvrait, nous sortirions.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Aunque hiciera buen tiempo, me quedaría en casa.»", o: ["Même s'il faisait beau, je resterais à la maison.", "Même s'il ferait beau, je resterais à la maison."], a: 0,
        bien: "¡Sí! Même si + imparfait.", mal: "Nunca condicional tras même si.",
        seg: [ { es: "Pausa. Aunque hiciera." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["si j'avais étudié", "je serais", "si j'étais", "j'aurais", "même si", "quand bien même"], seg: [
        { es: "Quand bien même + condicional.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Otra vida posible", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo imaginan qué habría pasado.",
    pj: PJ,
    lineas: [
      ["camila", "Si j'avais étudié la médecine, je serais médecin aujourd'hui. Si j'avais économisé, j'aurais une maison maintenant.", "Si hubiera estudiado medicina, hoy sería médica. Si hubiera ahorrado, ahora tendría una casa."],
      ["hugo", "Et moi, si j'étais plus courageux, j'aurais accepté ce poste à Montréal. Si ma sœur était moins timide, elle aurait parlé à la réunion.", "Y yo, si fuera más valiente, habría aceptado ese puesto en Montreal. Si mi hermana fuera menos tímida, habría hablado en la reunión."],
      ["camila", "Si tu m'avais écouté, tu ne serais pas dans cette situation aujourd'hui ! Même s'il est tard, je t'appellerai demain.", "¡Si me hubieras hecho caso, hoy no estarías en esta situación! Aunque sea tarde, te llamaré mañana."],
      ["hugo", "Quand bien même il me le demanderait, je dirais non. Quand bien même tout le monde serait contre moi, je défendrais cette idée.", "Aun cuando él me lo pidiera, diría que no. Aun cuando todo el mundo estuviera en mi contra, defendería esta idea."]
    ],
    fijate: "Fíjate: si j'avais étudié → je serais (aujourd'hui); si j'étais → j'aurais accepté; même s'il est (indicativo); quand bien même il me le demanderait (condicional)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Mezclar los tiempos",
      idea: "Hipótesis mixta 1: si + plus-que-parfait → conditionnel présent: un pasado irreal con consecuencia actual: Si j'avais accepté ce poste, je vivrais à Paris maintenant. Hipótesis mixta 2: si + imparfait → conditionnel passé: un rasgo permanente con efecto en el pasado: Si je parlais mieux anglais, j'aurais obtenu le poste. Concesión: même si + indicativo (presente o imparfait), nunca condicional: Même s'il pleut, on ira. Même s'il faisait beau, je resterais à la maison. Quand bien même + condicional (aun cuando): Quand bien même il s'excuserait, je ne lui pardonnerais pas.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estructura"], [
        ["même si · si (hipótesis) · sauf si · excepté si", "aunque · si · salvo si · excepto si", "+ indicativo"],
        ["quand bien même · au cas où · dans l'hypothèse où · pour le cas où", "aun cuando · por si · en caso de que", "+ condicional"],
        ["Si j'avais économisé, j'aurais une maison maintenant.", "Si hubiera ahorrado, ahora tendría una casa.", "pqp → cond. présent"],
        ["Si tu m'avais écouté, tu ne serais pas dans cette situation. · serais", "Si me hubieras hecho caso, no estarías en esta situación.", "pqp → cond. présent"],
        ["Si elle était moins timide, elle aurait parlé. · aurait", "Si fuera menos tímida, habría hablado.", "imparfait → cond. passé"],
        ["Si j'étais né en France, je parlerais français. · Si j'étais organisé, je n'aurais pas oublié.", "Si hubiera nacido en Francia, hablaría francés. · Si fuera organizado, no habría olvidado.", "mixtas"],
        ["Si tu avais pris le train, tu serais déjà là.", "Si hubieras tomado el tren, ya estarías aquí.", "pqp → cond. présent"],
        ["Même s'il pleut, on ira. · Même s'il est tard, je t'appellerai.", "Aunque llueva, iremos. · Aunque sea tarde, te llamaré.", "même si + présent"],
        ["Même s'il faisait beau, je resterais à la maison. · faisait", "Aunque hiciera buen tiempo, me quedaría en casa.", "même si + imparfait"],
        ["Quand bien même il me le demanderait, je dirais non.", "Aun cuando me lo pidiera, diría que no.", "quand bien même"],
        ["Si j'avais étudié, je serais médecin aujourd'hui.", "Si hubiera estudiado, hoy sería médico.", "ejemplo"]
      ]],
      ej: [["Si j'avais accepté ce poste, je vivrais à Paris maintenant.", "Si hubiera aceptado ese puesto, ahora viviría en París."], ["Si je parlais mieux anglais, j'aurais obtenu le poste.", "Si hablara mejor inglés, habría conseguido el puesto."], ["Quand bien même il pleuvrait, nous sortirions.", "Aunque lloviera, saldríamos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Même si il viendrait…", "Même s'il venait…", "Même si + indicativo (imparfait), nunca condicional."], ["Quand bien même il pleut…", "Quand bien même il pleuvrait…", "Quand bien même + condicional."], ["Si j'avais étudié, j'aurais été médecin aujourd'hui.", "Si j'avais étudié, je serais médecin aujourd'hui.", "Consecuencia actual: condicional presente."]] }
  ],
  ejemplos: [
    { sit: "«Si hubiera ahorrado, ahora tendría una casa.»", resp: "Si j'avais économisé, j'aurais une maison maintenant.", pasos: ["pqp → cond. présent."], porque: "Efecto actual." },
    { sit: "«Aun cuando me lo pidiera, diría que no.»", resp: "Quand bien même il me le demanderait, je dirais non.", pasos: ["quand bien même + condicional."], porque: "Concesión fuerte." },
    { sit: "«Aunque llueva, iremos.»", resp: "Même s'il pleut, on ira.", pasos: ["même si + presente."], porque: "Concesión." }
  ],
  comprueba: [
    { q: "«Si j'avais étudié, je ___ médecin aujourd'hui.»", o: ["serais", "aurais été"], a: 0, b: "gr", porque: "Consecuencia actual." },
    { q: "Même si va con…", o: ["indicativo", "condicional"], a: 0, b: "gr", porque: "même s'il pleut." },
    { q: "Quand bien même va con…", o: ["condicional", "subjuntivo"], a: 0, b: "gr", porque: "quand bien même il pleuvrait." }
  ],
  practica: [
    { fase: "guiada", c: ["b3hm-meme"], k: "sort", ask: "¿+ indicativo o + condicional?", q: "Clasifica.", cats: ["Indicativo", "Condicional"], items: [["même si", 0], ["si (hipótesis)", 0], ["sauf si", 0], ["excepté si", 0], ["quand bien même", 1], ["au cas où", 1], ["dans l'hypothèse où", 1], ["pour le cas où", 1]], pista: "Quand bien même: condicional.", why: "Modos." },
    { fase: "guiada", c: ["b3hm-mixte"], k: "choice", ask: "«Si hubiera ahorrado, ahora tendría una casa.»", q: "«___»", o: ["Si j'avais économisé, j'aurais une maison maintenant.", "Si j'avais économisé, j'aurais eu une maison maintenant."], a: 0, pista: "Ahora: condicional presente.", why: "<b>j'aurais</b>." },
    { fase: "guiada", c: ["b3hm-meme"], k: "choice", ask: "«Aun cuando me lo pidiera, diría que no.»", q: "«___»", o: ["Quand bien même il me le demanderait, je dirais non.", "Quand bien même il me le demande, je dirais non."], a: 0, pista: "Condicional.", why: "<b>demanderait</b>." },
    { fase: "indep", c: ["b3hm-meme"], k: "choice", ask: "«Aunque llueva, iremos.»", q: "«___»", o: ["Même s'il pleut, on ira.", "Même s'il pleuvrait, on ira."], a: 0, why: "<b>même s'il pleut</b>." },
    { fase: "indep", c: ["b3hm-mixte"], k: "fill", ask: "Conditionnel présent de être (tu).", q: "Si tu m'avais écouté, tu ne ___ pas dans cette situation aujourd'hui.", acc: ["serais"], why: "<b>serais</b>." },
    { fase: "indep", c: ["b3hm-mixte"], k: "fill", ask: "Auxiliar del conditionnel passé (elle).", q: "Si elle était moins timide, elle ___ parlé à la réunion.", acc: ["aurait"], why: "<b>aurait</b>." },
    { fase: "aplica", c: ["b3hm-mixte", "b3hm-meme"], k: "match", ask: "Une cada hipótesis con su consecuencia.", q: "Si… → consecuencia", pairs: [["Si j'étais né en France,", "je parlerais français."], ["Si j'étais organisé,", "je n'aurais pas oublié."], ["Si tu avais pris le train,", "tu serais déjà là."], ["Même s'il est tard,", "je t'appellerai."]], why: "Hipótesis mixtas." },
    { fase: "aplica", c: ["b3hm-meme"], k: "spot", ask: "Encuentra el error.", s: "Même s'il [ferait] beau , je resterais à la maison .", fix: "faisait", why: "<b>faisait</b>." },
    { fase: "aplica", c: ["b3hm-mixte"], k: "spot", ask: "Encuentra el error (consecuencia hoy).", s: "Si j'avais accepté ce poste , [j'aurais vécu] à Paris maintenant .", fix: "je vivrais", why: "<b>je vivrais</b>." },
    { fase: "dominio", c: ["b3hm-mixte"], k: "order", ask: "Ordena: «Si hubiera estudiado, hoy sería médico».", tokens: ["Si j'avais étudié,", "je serais médecin", "aujourd'hui"], why: "<b>Si j'avais étudié, je serais médecin aujourd'hui</b>" },
    { fase: "dominio", c: ["b3hm-mixte"], k: "choice", ask: "«Si hablara mejor inglés, habría conseguido el puesto.»", q: "«Si je parlais mieux anglais, j'___ obtenu le poste.»", o: ["aurais", "avais"], a: 0, why: "<b>aurais</b>." },
    { fase: "dominio", c: ["b3hm-mixte", "b3hm-meme"], k: "listen", say: "Quand bien même tout le monde serait contre moi, je défendrais cette idée.", acc: ["Quand bien même tout le monde serait contre moi, je défendrais cette idée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quand bien même tout le monde serait contre moi, je défendrais cette idée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "Montréal"], previo: [] }
};

E["b21-cause-avancee"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La cause nuancée : étant donné que, faute de, à force de, sous prétexte que",
  objetivo: {
    que: "Vas a matizar la causa: conocida (étant donné que, vu que), formal (du fait que, en raison de), por carencia (faute de), por insistencia (à force de), dudosa (sous prétexte que), positiva o negativa (grâce à / à cause de).",
    corto: "Étant donné que le train est en retard… · Faute de moyens… · À force de s'entraîner…",
    podras: ["Usar étant donné que, vu que, dans la mesure où, sous prétexte que + indicativo.", "Usar faute de + nombre sin artículo o infinitivo (faute de temps, faute d'avoir réservé) y à force de + infinitivo o nombre.", "Elegir grâce à (positiva) o à cause de (negativa), y en raison de en registro formal."],
    iconos: ["ic2/bombilla", "ic2/engranaje", "ic2/pregunta"],
    previos: ["La causa y la consecuencia (B1.2, lección 5) y los conectores lógicos (lección 13)."],
    capacidad: "Ahora explicas el porqué con precisión."
  },
  requiere: R("b2cc-cause", "b3cl-fonctions"), recupera: ["b2cc-cause"],
  conceptos: {
    "b3ca-phrase": { n: "+ frase (indicativo): étant donné que, vu que (causa conocida), dans la mesure où, sous prétexte que (causa dudosa: quizá no es verdad)", b: "gr" },
    "b3ca-nom": { n: "+ nombre / infinitivo: faute de (por falta de, sin artículo: faute de temps), à force de (a fuerza de), en raison de (formal), grâce à (positiva) ≠ à cause de (negativa)", b: "gr" }
  },
  video: {
    titulo: "Matizar la causa", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "faute de · à force de", seg: [
        { es: "Hola. No todas las causas son iguales." } ] },
      { v: "frase", filas: [
          { nota: "conocida", p: 1, partes: [["Étant donné que le train est en retard, la réunion est reportée.", "-", 1]] },
          { nota: "carencia", p: 2, partes: [["Faute de moyens, le projet a été abandonné.", "-", 2]] },
          { nota: "insistencia", p: 3, partes: [["À force de s'entraîner, il a gagné.", "-", 3]] } ], seg: [
        { fr: "Étant donné que le train est en retard, la réunion est reportée.", p: 1 }, { fr: "Faute de moyens, le projet a été abandonné.", p: 2 }, { fr: "À force de s'entraîner, il a gagné.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Por la lluvia, el partido se canceló.»", o: ["À cause de la pluie, le match a été annulé.", "Grâce à la pluie, le match a été annulé."], a: 0,
        bien: "¡Sí! Causa negativa: à cause de.", mal: "Grâce à es para una causa positiva.",
        seg: [ { es: "Pausa. Por la lluvia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["étant donné que", "vu que", "faute de", "à force de", "sous prétexte que", "en raison de"], seg: [
        { es: "Faute de, sin artículo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El proyecto abandonado", img: "bg-universidad", yo: "camila",
    escena: "Camila y Hugo hablan de un proyecto que fracasó.",
    pj: PJ,
    lineas: [
      ["camila", "Faute de moyens, le projet a été abandonné. Faute de temps, je n'ai pas pu terminer le rapport.", "Por falta de medios, el proyecto se abandonó. Por falta de tiempo, no pude terminar el informe."],
      ["hugo", "Et Paul ? — Il est parti sous prétexte qu'il était malade… Faute d'argent, il n'est pas parti en vacances non plus.", "¿Y Paul? — Se fue con el pretexto de que estaba enfermo… Por falta de dinero, tampoco se fue de vacaciones."],
      ["camila", "Vu que personne n'a répondu, nous avons pris la décision seuls. Le vol est annulé en raison de la grève.", "Como nadie respondió, tomamos la decisión solos. El vuelo se canceló debido a la huelga."],
      ["hugo", "Étant donné que tu es là, aide-moi ! À force de pratiquer, tu parles très bien. Grâce à toi, j'ai réussi.", "Ya que estás aquí, ¡ayúdame! A fuerza de practicar, hablas muy bien. Gracias a ti, aprobé."]
    ],
    fijate: "Fíjate: faute de moyens, faute de temps, faute d'argent (sin artículo); sous prétexte que (dudosa); vu que, étant donné que; en raison de; à force de pratiquer; grâce à toi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las causas con matiz",
      idea: "Con una frase (indicativo): étant donné que / vu que (causa conocida por todos), du fait que, dans la mesure où (formal), sous prétexte que (el hablante duda de la causa). Con un nombre o un infinitivo: faute de (por falta de; sin artículo: faute de temps, faute d'avoir réservé), à force de (a fuerza de: à force de travailler, à force de patience), en raison de (formal, prensa), grâce à (causa positiva) ≠ à cause de (causa negativa).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["étant donné que · vu que · sous prétexte que · dans la mesure où", "dado que · ya que · con el pretexto de que · en la medida en que", "+ frase (indicativo)"],
        ["faute de · à force de · en raison de · grâce à", "por falta de · a fuerza de · debido a · gracias a", "+ nombre / infinitivo"],
        ["Faute de temps, … · Faute de moyens, … · Faute d'argent, … · de", "Por falta de tiempo / medios / dinero…", "faute de (sin artículo)"],
        ["À force de pratiquer, il parle bien.", "A fuerza de practicar, habla bien.", "à force de"],
        ["Il est parti sous prétexte qu'il était malade.", "Se fue con el pretexto de que estaba enfermo.", "causa dudosa"],
        ["Étant donné que tu es là, aide-moi. · Étant", "Ya que estás aquí, ayúdame.", "causa conocida"],
        ["Le vol est annulé en raison de la grève. · raison", "El vuelo se canceló debido a la huelga.", "formal"],
        ["Vu que personne n'a répondu, …", "Como nadie respondió…", "vu que"],
        ["À cause de la pluie, le match a été annulé.", "Por la lluvia, el partido se canceló.", "negativa"]
      ]],
      ej: [["Étant donné que le train est en retard, la réunion est reportée.", "Dado que el tren va con retraso, se aplaza la reunión."], ["Faute de moyens, le projet a été abandonné.", "Por falta de medios, el proyecto se abandonó."], ["À force de s'entraîner, il a gagné.", "A fuerza de entrenar, ganó."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Grâce à la pluie, le match a été annulé.", "À cause de la pluie, le match a été annulé.", "Causa negativa → à cause de."], ["Faute du temps, …", "Faute de temps, …", "faute de sin artículo."], ["À force de travaille, …", "À force de travailler, …", "à force de + infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Por falta de tiempo…»", resp: "Faute de temps,", pasos: ["faute de, sin artículo."], porque: "Carencia." },
    { sit: "«A fuerza de practicar, habla bien.»", resp: "À force de pratiquer, il parle bien.", pasos: ["à force de + infinitivo."], porque: "Insistencia." },
    { sit: "«Il est parti sous prétexte qu'il était malade.» ¿Qué sugiere?", resp: "que quizá no era verdad", pasos: ["sous prétexte que."], porque: "Causa dudosa." }
  ],
  comprueba: [
    { q: "«Sous prétexte que» sugiere una causa…", o: ["dudosa", "segura"], a: 0, b: "gr", porque: "Pretexto." },
    { q: "«Faute de» significa…", o: ["por falta de", "por culpa de"], a: 0, b: "gr", porque: "Carencia." },
    { q: "Para una causa negativa se usa…", o: ["à cause de", "grâce à"], a: 0, b: "gr", porque: "Negativa." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ca-phrase", "b3ca-nom"], k: "sort", ask: "¿+ frase (indicativo) o + nombre / infinitivo?", q: "Clasifica.", cats: ["+ frase (indicativo)", "+ nombre / infinitivo"], items: [["étant donné que", 0], ["vu que", 0], ["sous prétexte que", 0], ["dans la mesure où", 0], ["faute de", 1], ["à force de", 1], ["en raison de", 1], ["grâce à", 1]], pista: "¿Termina en que / où?", why: "Construcciones." },
    { fase: "guiada", c: ["b3ca-nom"], k: "choice", ask: "«Por falta de tiempo…»", q: "«___, je n'ai pas pu terminer le rapport.»", o: ["Faute de temps", "Faute du temps"], a: 0, pista: "Sin artículo.", why: "<b>Faute de temps</b>." },
    { fase: "guiada", c: ["b3ca-nom"], k: "choice", ask: "«A fuerza de practicar, habla bien.»", q: "«___»", o: ["À force de pratiquer, il parle bien.", "À force pratiquer, il parle bien."], a: 0, pista: "à force de.", why: "<b>À force de</b>." },
    { fase: "indep", c: ["b3ca-phrase"], k: "choice", es: true, ask: "«Il est parti sous prétexte qu'il était malade.» ¿Qué sugiere?", q: "Elige.", o: ["que quizá no era verdad", "que estaba muy enfermo"], a: 0, why: "Causa dudosa." },
    { fase: "indep", c: ["b3ca-phrase"], k: "fill", ask: "«Dado que» (… donné que)", q: "___ donné que tu es là, aide-moi.", acc: ["Étant", "étant", "Etant"], why: "<b>Étant</b>." },
    { fase: "indep", c: ["b3ca-nom"], k: "fill", ask: "«debido a» (formal: en … de)", q: "Le vol est annulé en ___ de la grève.", acc: ["raison"], why: "<b>raison</b>." },
    { fase: "aplica", c: ["b3ca-phrase", "b3ca-nom"], k: "match", ask: "Une cada expresión con su tipo de causa.", q: "Expresión → causa", pairs: [["grâce à", "causa positiva"], ["à cause de", "causa negativa"], ["sous prétexte que", "causa dudosa"], ["faute de", "causa por carencia"]], why: "Matices." },
    { fase: "aplica", c: ["b3ca-nom"], k: "spot", ask: "Encuentra el error.", s: "Faute [du] temps , je n'ai pas pu terminer le rapport .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["b3ca-nom"], k: "spot", ask: "Encuentra el error (causa negativa).", s: "[Grâce à] la pluie , le match a été annulé .", fix: "À cause de", why: "<b>À cause de</b>." },
    { fase: "dominio", c: ["b3ca-nom"], k: "order", ask: "Ordena: «Por falta de dinero, no se fue».", tokens: ["Faute d'argent,", "il n'est pas", "parti"], why: "<b>Faute d'argent, il n'est pas parti</b>" },
    { fase: "dominio", c: ["b3ca-phrase"], k: "choice", ask: "«Como nadie respondió, tomamos la decisión solos.»", q: "«___ personne n'a répondu, nous avons pris la décision seuls.»", o: ["Vu que", "Faute de"], a: 0, why: "<b>Vu que</b>." },
    { fase: "dominio", c: ["b3ca-phrase", "b3ca-nom"], k: "listen", say: "Vu que personne n'a répondu, nous avons pris la décision seuls.", acc: ["Vu que personne n'a répondu, nous avons pris la décision seuls."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Vu que personne n'a répondu, nous avons pris la décision seuls.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

E["b21-consequence-avancee"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La conséquence : si bien que, de sorte que, tellement… que, au point de",
  objetivo: {
    que: "Vas a expresar la consecuencia con matices: si bien que, de sorte que, si / tellement… que, tant de… que, au point de, d'où.",
    corto: "Il a beaucoup plu, si bien que la rivière a débordé. · Il y avait tant de monde qu'on n'a pas pu entrer.",
    podras: ["Usar si bien que / de sorte que + indicativo para un resultado real.", "Usar la intensidad: si / tellement + adjetivo o adverbio + que; tant de / tellement de + nombre + que.", "Usar au point de + infinitivo (hasta el punto de) y d'où + nombre (de ahí)."],
    iconos: ["ic2/rayo", "ic2/engranaje", "ic2/lapiz"],
    previos: ["La causa y la consecuencia (B1.2, lección 5) y los conectores lógicos (lección 13)."],
    capacidad: "Ahora encadenas causas y efectos con fluidez."
  },
  requiere: R("b2cc-csq", "b3cl-fonctions"), recupera: ["b2cc-csq"],
  conceptos: {
    "b3cq-conj": { n: "si bien que / de sorte que + indicativo (resultado real); d'où + nombre (de ahí); par conséquent, c'est pourquoi", b: "gr" },
    "b3cq-intens": { n: "si / tellement + adj. / adv. + que (si fatigué qu'il s'est endormi); tant de / tellement de + nombre + que (tant de bruit que…); au point de + infinitivo", b: "gr" }
  },
  video: {
    titulo: "Consecuencias con matiz", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "si bien que", seg: [
        { es: "Hola. Una causa y su efecto, con elegancia." } ] },
      { v: "frase", filas: [
          { nota: "resultado", p: 1, partes: [["Il a beaucoup plu, si bien que la rivière a débordé.", "-", 1]] },
          { nota: "intensidad", p: 2, partes: [["Elle parle si vite qu'on ne la comprend pas.", "-", 2]] },
          { nota: "cantidad", p: 3, partes: [["Il y avait tant de monde qu'on n'a pas pu entrer.", "-", 3]] } ], seg: [
        { fr: "Il a beaucoup plu, si bien que la rivière a débordé.", p: 1 }, { fr: "Elle parle si vite qu'on ne la comprend pas.", p: 2 }, { fr: "Il y avait tant de monde qu'on n'a pas pu entrer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Había tanta gente que nos fuimos.»", o: ["Il y avait tellement de monde que nous sommes repartis.", "Il y avait tellement du monde que nous sommes repartis."], a: 0,
        bien: "¡Sí! Tellement de + nombre.", mal: "Tras tellement: de, sin artículo.",
        seg: [ { es: "Pausa. Tanta gente." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["si bien que", "de sorte que", "si… que", "tant de… que", "au point de", "d'où"], seg: [
        { es: "Tant de + nombre; si + adjetivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La crisis de los arriendos", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo comentan la situación de la ciudad.",
    pj: PJ,
    lineas: [
      ["camila", "Les loyers ont tellement augmenté que beaucoup de familles quittent le centre-ville.", "Los arriendos han subido tanto que muchas familias se van del centro."],
      ["hugo", "Oui. Mon voisin a trop travaillé, au point de tomber malade. Il était si fatigué qu'il s'est endormi au bureau !", "Sí. Mi vecino trabajó demasiado, hasta el punto de enfermarse. ¡Estaba tan cansado que se durmió en la oficina!"],
      ["camila", "Et ce matin, il a neigé toute la nuit, si bien que les routes sont fermées. Il y avait tant de bruit dans le bus que je suis descendue.", "Y esta mañana nevó toda la noche, de modo que las carreteras están cerradas. Había tanto ruido en el bus que me bajé."],
      ["hugo", "Et le professeur parle si bas qu'on ne l'entend pas. Il a oublié la réunion, d'où mon énervement !", "Y el profesor habla tan bajo que no se le oye. Olvidó la reunión, ¡de ahí mi enojo!"]
    ],
    fijate: "Fíjate: tellement augmenté que, au point de tomber, si fatigué qu'il, si bien que, tant de bruit que, si bas qu'on, d'où mon énervement."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Expresar la consecuencia",
      idea: "Si bien que / de sorte que + indicativo: resultado real (de modo que): Il a beaucoup plu, si bien que la rivière a débordé. Intensidad: si / tellement + adjetivo o adverbio + que: Il était si fatigué qu'il s'est endormi. Elle parle si vite qu'on ne la comprend pas. Cantidad: tant de / tellement de + nombre + que (sin artículo): Il y avait tant de monde qu'on n'a pas pu entrer. Au point de + infinitivo / au point que + indicativo: hasta el punto de. D'où + nombre: de ahí (Il a oublié, d'où mon énervement). También par conséquent, c'est pourquoi.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["si bien que · de sorte que (+ ind.) · par conséquent · d'où", "de modo que · de manera que · por consiguiente · de ahí", "Consecuencia"],
        ["puisque · étant donné que · faute de · comme", "ya que · dado que · por falta de · como", "Causa"],
        ["Il a neigé toute la nuit, si bien que les routes sont fermées. · bien", "Nevó toda la noche, de modo que las carreteras están cerradas.", "si bien que"],
        ["Il était si fatigué qu'il s'est endormi.", "Estaba tan cansado que se durmió.", "si + adj. + que"],
        ["Il parle si bas qu'on ne l'entend pas.", "Habla tan bajo que no se le oye.", "si + adv. + que"],
        ["Il y avait tant de bruit que je suis parti.", "Había tanto ruido que me fui.", "tant de + nombre"],
        ["Il y avait tellement de monde que… · de", "Había tanta gente que…", "tellement de + nombre"],
        ["Il a trop travaillé, au point de tomber malade. · point", "Trabajó demasiado, hasta el punto de enfermarse.", "au point de + inf."],
        ["Il a oublié, d'où mon énervement.", "Lo olvidó, de ahí mi enojo.", "d'où + nombre"],
        ["Les loyers ont tellement augmenté que…", "Los arriendos subieron tanto que…", "tellement + verbo"]
      ]],
      ej: [["Il a beaucoup plu, si bien que la rivière a débordé.", "Llovió mucho, de modo que el río se desbordó."], ["Elle parle si vite qu'on ne la comprend pas.", "Habla tan rápido que no se la entiende."], ["Il y avait tant de monde qu'on n'a pas pu entrer.", "Había tanta gente que no pudimos entrar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Il était tellement fatigué que s'endormir.", "Il était tellement fatigué qu'il s'est endormi.", "Que + frase; au point de + infinitivo."], ["tellement du monde", "tellement de monde", "tellement de, sin artículo."], ["Il était si fatigué de sorte qu'il s'est endormi.", "Il était si fatigué qu'il s'est endormi.", "si… que."]] }
  ],
  ejemplos: [
    { sit: "«Estaba tan cansado que se durmió.»", resp: "Il était si fatigué qu'il s'est endormi.", pasos: ["si + adjetivo + que."], porque: "Intensidad." },
    { sit: "«Había tanto ruido que me fui.»", resp: "Il y avait tant de bruit que je suis parti.", pasos: ["tant de + nombre."], porque: "Cantidad." },
    { sit: "«Il a oublié, d'où mon énervement.» D'où introduce…", resp: "une conséquence (nom)", pasos: ["d'où + nombre."], porque: "Consecuencia." }
  ],
  comprueba: [
    { q: "Si bien que va con…", o: ["indicativo", "subjuntivo"], a: 0, b: "gr", porque: "Resultado real." },
    { q: "Con un nombre se usa…", o: ["tant de… que", "si… que"], a: 0, b: "gr", porque: "Cantidad." },
    { q: "Au point de va con…", o: ["un infinitivo", "un verbo conjugado"], a: 0, b: "gr", porque: "au point de tomber." }
  ],
  practica: [
    { fase: "guiada", c: ["b3cq-conj"], k: "sort", ask: "¿Consecuencia o causa?", q: "Clasifica.", cats: ["Consecuencia", "Causa"], items: [["si bien que", 0], ["de sorte que (+ ind.)", 0], ["par conséquent", 0], ["d'où", 0], ["puisque", 1], ["étant donné que", 1], ["faute de", 1], ["comme", 1]], pista: "¿Efecto o razón?", why: "Relaciones." },
    { fase: "guiada", c: ["b3cq-intens"], k: "choice", ask: "«Estaba tan cansado que se durmió.»", q: "«___»", o: ["Il était si fatigué qu'il s'est endormi.", "Il était si fatigué de s'endormir."], a: 0, pista: "si… que.", why: "<b>si… que</b>." },
    { fase: "guiada", c: ["b3cq-intens"], k: "choice", ask: "«Había tanto ruido que me fui.»", q: "«___»", o: ["Il y avait tant de bruit que je suis parti.", "Il y avait si bruit que je suis parti."], a: 0, pista: "Nombre.", why: "<b>tant de</b>." },
    { fase: "indep", c: ["b3cq-conj"], k: "choice", ask: "«Il a oublié, d'où mon énervement.» D'où introduce…", q: "«d'où mon énervement»", o: ["une conséquence (nom)", "une cause"], a: 0, why: "Consecuencia." },
    { fase: "indep", c: ["b3cq-intens"], k: "fill", ask: "«hasta el punto de» (au … de)", q: "Il a trop travaillé, au ___ de tomber malade.", acc: ["point"], why: "<b>point</b>." },
    { fase: "indep", c: ["b3cq-conj"], k: "fill", ask: "«de modo que» (si … que)", q: "Il a neigé toute la nuit, si ___ que les routes sont fermées.", acc: ["bien"], why: "<b>si bien que</b>." },
    { fase: "aplica", c: ["b3cq-conj", "b3cq-intens"], k: "match", ask: "Une cada expresión con su construcción.", q: "Expresión → construcción", pairs: [["si bien que", "+ indicativo"], ["tant de", "+ nombre + que"], ["au point de", "+ infinitivo"], ["d'où", "+ nombre"]], why: "Construcciones." },
    { fase: "aplica", c: ["b3cq-intens"], k: "spot", ask: "Encuentra el error.", s: "Il y avait tellement [du] monde que nous sommes repartis .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["b3cq-intens"], k: "spot", ask: "Encuentra el error.", s: "Il était tellement fatigué que [s'endormir] au bureau .", fix: "il s'est endormi", why: "<b>il s'est endormi</b>." },
    { fase: "dominio", c: ["b3cq-intens"], k: "order", ask: "Ordena: «Habla tan bajo que no se le oye».", tokens: ["Il parle", "si bas", "qu'on ne l'entend pas"], why: "<b>Il parle si bas qu'on ne l'entend pas</b>" },
    { fase: "dominio", c: ["b3cq-conj"], k: "choice", ask: "«Llovió mucho, de modo que el río se desbordó.»", q: "«Il a beaucoup plu, ___ la rivière a débordé.»", o: ["si bien que", "faute de"], a: 0, why: "<b>si bien que</b>." },
    { fase: "dominio", c: ["b3cq-conj", "b3cq-intens"], k: "listen", say: "Les loyers ont tellement augmenté que beaucoup de familles quittent le centre-ville.", acc: ["Les loyers ont tellement augmenté que beaucoup de familles quittent le centre-ville."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les loyers ont tellement augmenté que beaucoup de familles quittent le centre-ville.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

E["b21-but-crainte"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le but et la crainte : de peur que, de façon à, en vue de",
  objetivo: {
    que: "Vas a expresar la finalidad (pour, afin de, de façon à, en vue de) y la finalidad negativa, para evitar algo (de peur de, de crainte que).",
    corto: "Il parle lentement de façon à être compris. · J'ai pris un parapluie de peur qu'il ne pleuve.",
    podras: ["Usar con el mismo sujeto pour / afin de / de façon à / de manière à / en vue de + infinitivo.", "Usar con otro sujeto pour que / afin que / de sorte que / de manière que + subjuntivo.", "Expresar lo que se quiere evitar: de peur de / de crainte de + infinitivo; de peur que / de crainte que (ne) + subjuntivo; pour ne pas, afin d'éviter."],
    iconos: ["ic2/bombilla", "ic2/candado", "ic2/estrella"],
    previos: ["La finalidad (B1.2, lección 12) y el ne expletivo (lección 18)."],
    capacidad: "Ahora explicas para qué haces las cosas, y lo que quieres evitar."
  },
  requiere: R("b2bu-inf", "b2bu-subj", "b3ne-emploi"), recupera: ["b2bu-subj"],
  conceptos: {
    "b3bc-but": { n: "mismo sujeto: pour, afin de, de façon / manière à, en vue de + infinitivo (en vue de + nombre: en vue des élections); otro sujeto: pour que, afin que, de sorte que + subjuntivo", b: "gr" },
    "b3bc-crainte": { n: "evitar: de peur de / de crainte de + infinitivo (de peur d'être en retard); de peur que / de crainte que (ne) + subjuntivo (de peur qu'il ne pleuve); pour ne pas, afin d'éviter", b: "gr" }
  },
  video: {
    titulo: "Para qué y por miedo a qué", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "de peur que", seg: [
        { es: "Hola. Conseguir algo o evitarlo." } ] },
      { v: "frase", filas: [
          { nota: "finalidad", p: 1, partes: [["Il parle lentement de façon à être compris.", "-", 1]] },
          { nota: "evitar", p: 2, partes: [["J'ai pris un parapluie de peur qu'il ne pleuve.", "-", 2]] },
          { nota: "formal", p: 3, partes: [["Elle économise en vue de son voyage.", "-", 3]] } ], seg: [
        { fr: "Il parle lentement de façon à être compris.", p: 1 }, { fr: "J'ai pris un parapluie de peur qu'il ne pleuve.", p: 2 }, { fr: "Elle économise en vue de son voyage.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Te escribo para que sepas la verdad.»", o: ["Je t'écris afin que tu saches la vérité.", "Je t'écris afin que tu sais la vérité."], a: 0,
        bien: "¡Sí! Afin que + subjuntivo.", mal: "Otro sujeto: subjuntivo, saches.",
        seg: [ { es: "Pausa. Para que sepas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["afin de", "afin que", "de façon à", "en vue de", "de peur de", "de crainte que"], seg: [
        { es: "Mismo sujeto: infinitivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Los ahorros", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo hablan de sus planes.",
    pj: PJ,
    lineas: [
      ["camila", "Nous économisons en vue d'acheter une maison. Ma sœur économise en vue de son voyage au Canada.", "Ahorramos con vistas a comprar una casa. Mi hermana ahorra con vistas a su viaje a Canadá."],
      ["hugo", "Moi, je suis parti tôt de peur d'être en retard. J'ai noté l'adresse de peur de l'oublier.", "Yo salí temprano por miedo a llegar tarde. Anoté la dirección por miedo a olvidarla."],
      ["camila", "Parle doucement de façon à ne pas réveiller le bébé ! Je te le répète afin que tu le retiennes.", "¡Habla despacio para no despertar al bebé! Te lo repito para que lo recuerdes."],
      ["hugo", "D'accord. Le professeur parle fort pour que tout le monde entende. Et il a pris un parapluie de peur qu'il ne pleuve.", "De acuerdo. El profesor habla fuerte para que todos oigan. Y llevó un paraguas por si llovía."]
    ],
    fijate: "Fíjate: en vue d'acheter, en vue de son voyage, de peur d'être, de peur de l'oublier, de façon à ne pas (infinitivo); afin que tu le retiennes, pour que tout le monde entende, de peur qu'il ne pleuve (subjuntivo)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Finalidad y temor",
      idea: "Mismo sujeto → infinitivo: pour, afin de, de façon à, de manière à, en vue de (formal; también + nombre: en vue des élections). Sujeto distinto → subjuntivo: pour que, afin que, de sorte que, de manière que: Je te le répète afin que tu le retiennes. Finalidad negativa (evitar algo): de peur de / de crainte de + infinitivo (Il est parti tôt de peur d'être en retard); de peur que / de crainte que (+ ne expletivo) + subjuntivo (de peur qu'il ne pleuve); también pour ne pas, afin d'éviter.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Construcción"], [
        ["pour · afin de · de façon à · en vue de", "para · a fin de · de modo que · con vistas a", "Conseguir algo"],
        ["de peur de · de crainte que · pour ne pas · afin d'éviter", "por miedo a · por temor a que · para no · para evitar", "Evitar algo"],
        ["Il parle fort pour que tout le monde entende.", "Habla alto para que todos oigan.", "pour que + subj."],
        ["Il est parti tôt de peur d'être en retard.", "Salió temprano por miedo a llegar tarde.", "de peur de + inf."],
        ["En vue des élections, …", "Con vistas a las elecciones…", "en vue de + nombre"],
        ["Je te le répète afin que tu le retiennes. · retiennes", "Te lo repito para que lo recuerdes.", "afin que + subj."],
        ["Parle doucement de façon à ne pas réveiller le bébé. · façon · manière", "Habla despacio para no despertar al bebé.", "de façon à + inf."],
        ["Je t'écris afin que tu saches la vérité. · saches", "Te escribo para que sepas la verdad.", "subjuntivo"],
        ["J'ai pris un parapluie de peur qu'il ne pleuve.", "Llevé un paraguas por si llovía.", "de peur que + ne"],
        ["Nous économisons en vue d'acheter une maison.", "Ahorramos con vistas a comprar una casa.", "en vue de + inf."]
      ]],
      ej: [["Il parle lentement de façon à être compris.", "Habla despacio para que lo entiendan."], ["J'ai pris un parapluie de peur qu'il ne pleuve.", "Llevé un paraguas por si llovía."], ["Elle économise en vue de son voyage.", "Ahorra con vistas a su viaje."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["de peur de qu'il pleuve", "de peur qu'il ne pleuve", "De peur que + subjuntivo."], ["afin que tu sais", "afin que tu saches", "Subjuntivo."], ["Je travaille pour que je réussisse.", "Je travaille pour réussir.", "Mismo sujeto: infinitivo."]] }
  ],
  ejemplos: [
    { sit: "«Habla alto para que todos oigan.»", resp: "Il parle fort pour que tout le monde entende.", pasos: ["Otro sujeto: subjuntivo."], porque: "Finalidad." },
    { sit: "«Salió temprano por miedo a llegar tarde.»", resp: "Il est parti tôt de peur d'être en retard.", pasos: ["de peur de + infinitivo."], porque: "Evitar." },
    { sit: "«Con vistas a las elecciones…»", resp: "En vue des élections,", pasos: ["en vue de + nombre."], porque: "Formal." }
  ],
  comprueba: [
    { q: "Con el mismo sujeto, la finalidad va con…", o: ["un infinitivo", "que + subjuntivo"], a: 0, b: "gr", porque: "afin de partir." },
    { q: "«De peur que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "de peur qu'il ne pleuve." },
    { q: "«En vue de» se usa en registro…", o: ["formal", "familiar"], a: 0, b: "gr", porque: "en vue des élections." }
  ],
  practica: [
    { fase: "guiada", c: ["b3bc-but", "b3bc-crainte"], k: "sort", ask: "¿Conseguir algo o evitar algo?", q: "Clasifica.", cats: ["Conseguir algo", "Evitar algo"], items: [["pour", 0], ["afin de", 0], ["de façon à", 0], ["en vue de", 0], ["de peur de", 1], ["de crainte que", 1], ["pour ne pas", 1], ["afin d'éviter", 1]], pista: "¿Miedo?", why: "Finalidad." },
    { fase: "guiada", c: ["b3bc-but"], k: "choice", ask: "«Habla alto para que todos oigan.»", q: "«___»", o: ["Il parle fort pour que tout le monde entende.", "Il parle fort pour que tout le monde entend."], a: 0, pista: "Subjuntivo.", why: "<b>entende</b>." },
    { fase: "guiada", c: ["b3bc-crainte"], k: "choice", ask: "«Salió temprano por miedo a llegar tarde.»", q: "«___»", o: ["Il est parti tôt de peur d'être en retard.", "Il est parti tôt de peur qu'il soit en retard."], a: 0, pista: "Mismo sujeto.", why: "<b>de peur d'être</b>." },
    { fase: "indep", c: ["b3bc-but"], k: "choice", ask: "«Con vistas a las elecciones…»", q: "«___»", o: ["En vue des élections,", "Afin que les élections,"], a: 0, why: "<b>En vue des élections</b>." },
    { fase: "indep", c: ["b3bc-but"], k: "fill", ask: "Subjuntivo de retenir (tu).", q: "Je te le répète afin que tu le ___ .", acc: ["retiennes"], why: "<b>retiennes</b>." },
    { fase: "indep", c: ["b3bc-but"], k: "fill", ask: "«de modo que» (de … à)", q: "Parle doucement de ___ à ne pas réveiller le bébé.", acc: ["façon", "manière"], why: "<b>façon</b>." },
    { fase: "aplica", c: ["b3bc-but", "b3bc-crainte"], k: "match", ask: "Une cada expresión con su construcción.", q: "Expresión → construcción", pairs: [["afin de", "+ infinitivo"], ["afin que", "+ subjuntivo"], ["en vue de", "+ nombre"], ["de crainte que", "(ne) + subjuntivo"]], why: "Construcciones." },
    { fase: "aplica", c: ["b3bc-but"], k: "spot", ask: "Encuentra el error.", s: "Je t'écris afin que tu [sais] la vérité .", fix: "saches", why: "<b>saches</b>." },
    { fase: "aplica", c: ["b3bc-crainte"], k: "spot", ask: "Encuentra el error.", s: "J'ai pris un parapluie [de peur de qu'il] pleuve .", fix: "de peur qu'il ne", why: "<b>de peur qu'il ne</b>." },
    { fase: "dominio", c: ["b3bc-but"], k: "order", ask: "Ordena: «Ahorramos con vistas a comprar una casa».", tokens: ["Nous économisons", "en vue", "d'acheter une maison"], why: "<b>Nous économisons en vue d'acheter une maison</b>" },
    { fase: "dominio", c: ["b3bc-crainte"], k: "choice", ask: "«Anotó la dirección por miedo a olvidarla.»", q: "«Il a noté l'adresse ___ l'oublier.»", o: ["de peur de", "de peur que"], a: 0, why: "<b>de peur de</b>." },
    { fase: "dominio", c: ["b3bc-but", "b3bc-crainte"], k: "listen", say: "Il a noté l'adresse de peur de l'oublier.", acc: ["Il a noté l'adresse de peur de l'oublier."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il a noté l'adresse de peur de l'oublier.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Canada"], previo: [] }
};

/* ── B2.1·7 Escribir textos B2 · 29. L'essai argumenté du DELF B2 ── */
E["b21-essai"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'essai argumenté du DELF B2",
  objetivo: {
    que: "Vas a escribir el texto argumentado del DELF B2 (unas 250 palabras): leer la consigna, tomar posición, organizar en partes y refutar un contraargumento.",
    corto: "De nos jours, la question du télétravail divise l'opinion. · Il convient donc de se demander si…",
    podras: ["Leer la consigna: tipo de texto, destinatario, posición pedida y número de palabras.", "Escribir la introducción (contexto + problemática + plan) y 2-3 partes con idea, argumento y ejemplo.", "Refutar un contraargumento (Certes… mais…) y concluir con fórmulas impersonales: Au vu de ces arguments, il apparaît que…"],
    iconos: ["ic2/lapiz", "ic2/pergamino", "ic2/medalla"],
    previos: ["El plan del ensayo (B1.2, lección 33), la problemática (B1.2, lección 34) y el contraargumento (B1.2, lección 36)."],
    capacidad: "Ahora escribes el ensayo de la prueba escrita del DELF B2."
  },
  requiere: R("b2pe-intro", "b2pe-plan", "b2pb-forme", "b2ca-conceder"), recupera: ["b2pe-plan"],
  conceptos: {
    "b3es-plan": { n: "la consigna (tipo de texto, destinatario, posición, unas 250 palabras); introducción: contexto + problemática + plan; 2-3 partes con idea + argumento + ejemplo; refutar un contraargumento", b: "gr" },
    "b3es-formules": { n: "fórmulas del ensayo: De nos jours…; Il convient (donc) de se demander si…; Certes…, mais…; Au vu de ces arguments, il apparaît que…; registro formal, sin bref, du coup, genre", b: "gr" }
  },
  video: {
    titulo: "El ensayo del DELF B2", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "il convient de", seg: [
        { es: "Hola. Doscientas cincuenta palabras y una posición clara." } ] },
      { v: "frase", filas: [
          { nota: "contexto", p: 1, partes: [["De nos jours, la question du télétravail divise l'opinion.", "-", 1]] },
          { nota: "problemática", p: 2, partes: [["Il convient donc de se demander si…", "-", 2]] },
          { nota: "conclusión", p: 3, partes: [["Au vu de ces arguments, il apparaît que…", "-", 3]] } ], seg: [
        { fr: "De nos jours, la question du télétravail divise l'opinion.", p: 1 }, { fr: "Il convient donc de se demander si…", p: 2 }, { fr: "Au vu de ces arguments, il apparaît que…", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cómo anuncias el tema en un ensayo?", o: ["Nous nous interrogerons sur les effets du télétravail.", "Je vais parler du télétravail."], a: 0,
        bien: "¡Sí! Fórmula impersonal.", mal: "Evita el anuncio escolar.",
        seg: [ { es: "Pausa. Nada de «voy a hablar de»." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["De nos jours,", "Il convient de", "Certes, … mais", "Au vu de", "il apparaît que"], seg: [
        { es: "Consigna, plan, contraargumento, conclusión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Preparando el DELF", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia corrige el ensayo de Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, ton introduction commence par « Je vais parler du télétravail ». C'est trop scolaire.", "Camila, tu introducción empieza con «Voy a hablar del teletrabajo». Es demasiado escolar."],
      ["camila", "Alors j'écris : « De nos jours, la question du télétravail divise l'opinion. Il convient donc de se demander si cette mesure est efficace. »", "Entonces escribo: «Hoy en día, la cuestión del teletrabajo divide a la opinión pública. Conviene, por tanto, preguntarse si esta medida es eficaz.»"],
      ["sofia", "Très bien. Et n'oublie pas une position claire. Dans la deuxième partie, réfute un contre-argument : « Certes, …, mais… »", "Muy bien. Y no olvides una posición clara. En la segunda parte, refuta un contraargumento: «Es cierto que…, pero…»"],
      ["camila", "Et pour conclure : « Au vu de ces arguments, il apparaît que le télétravail présente plus d'avantages que d'inconvénients. »", "Y para concluir: «A la vista de estos argumentos, parece que el teletrabajo tiene más ventajas que inconvenientes.»"]
    ],
    fijate: "Fíjate: De nos jours (contexto), Il convient donc de se demander si (problemática), Certes… mais (contraargumento), Au vu de ces arguments, il apparaît que (conclusión)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El plan y las fórmulas del ensayo",
      idea: "La consigna manda: tipo de texto (essai, lettre, article), destinatario, posición pedida y unas 250 palabras. Introducción: contexto (De nos jours,…) + problemática (Il convient de se demander si…) + anuncio del plan (Nous verrons d'abord…, puis…). Desarrollo: 2-3 partes; cada una con idea + argumento + ejemplo, unidas por conectores (En effet, Par ailleurs, De plus). Refuta al menos un contraargumento: Certes…, mais… Conclusión: Au vu de ces arguments, il apparaît que… Imprescindible: una posición clara. Nada de oral (bref, du coup, genre).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["De nos jours, · De nos jours, la question de l'IA suscite de nombreux débats.", "Hoy en día, · Hoy en día, la cuestión de la IA suscita muchos debates.", "contexto"],
        ["Il convient de se demander si… · convient", "Conviene preguntarse si…", "problemática"],
        ["Nous nous interrogerons sur les effets du télétravail.", "Nos preguntaremos por los efectos del teletrabajo.", "anuncio del plan"],
        ["Certes, · Certes, … mais", "Es cierto que…, pero…", "contraargumento"],
        ["Au vu de ces arguments, · vu", "A la vista de estos argumentos,", "conclusión"],
        ["Il apparaît que · En effet, · Par ailleurs, · Ainsi", "Parece que · En efecto, · Por otra parte, · Así", "registro formal"],
        ["Bon, bref, · Du coup, · C'est trop nul. · Genre,", "Bueno, en fin · Entonces · Es malísimo · Tipo…", "registro oral: evitar"],
        ["une position claire", "una posición clara", "imprescindible"],
        ["unas 250", "unas 250 palabras", "extensión"],
        ["Au vu de ces arguments, il apparaît que le télétravail présente plus d'avantages que d'inconvénients.", "A la vista de estos argumentos, parece que el teletrabajo tiene más ventajas que inconvenientes.", "conclusión"]
      ]],
      ej: [["De nos jours, la question du télétravail divise l'opinion.", "Hoy en día, la cuestión del teletrabajo divide a la opinión pública."], ["Il convient donc de se demander si…", "Conviene, por tanto, preguntarse si…"], ["Au vu de ces arguments, il apparaît que…", "A la vista de estos argumentos, parece que…"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais parler du télétravail.", "Nous nous interrogerons sur les effets du télétravail.", "Evita anuncios escolares; usa fórmulas impersonales."], ["Bref, du point de vue économique, …", "Ainsi, du point de vue économique, …", "Bref es oral."], ["Un texto sin posición clara", "Une position claire dès l'introduction", "La consigna pide tomar partido."]] }
  ],
  ejemplos: [
    { sit: "Quieres introducir el tema de la IA.", resp: "De nos jours, la question de l'IA suscite de nombreux débats.", pasos: ["Contexto general."], porque: "Introducción." },
    { sit: "«Conviene preguntarse si esta medida es eficaz.»", resp: "Il convient de se demander si cette mesure est efficace.", pasos: ["Problemática impersonal."], porque: "Problemática." },
    { sit: "Quieres concluir.", resp: "Au vu de ces arguments, il apparaît que…", pasos: ["Fórmula de cierre."], porque: "Conclusión." }
  ],
  comprueba: [
    { q: "En el ensayo del DELF B2 es imprescindible…", o: ["una posición clara", "contar una anécdota personal"], a: 0, b: "gr", porque: "Se toma partido." },
    { q: "La extensión pedida es de…", o: ["unas 250 palabras", "unas 80 palabras"], a: 0, b: "gr", porque: "DELF B2." },
    { q: "«Certes…, mais…» sirve para…", o: ["refutar un contraargumento", "abrir el texto"], a: 0, b: "gr", porque: "Conceder y refutar." }
  ],
  practica: [
    { fase: "guiada", c: ["b3es-formules"], k: "sort", ask: "¿Sirve en un ensayo formal?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Il apparaît que", 0], ["En effet,", 0], ["Par ailleurs,", 0], ["Certes, … mais", 0], ["Bon, bref,", 1], ["Du coup,", 1], ["C'est trop nul.", 1], ["Genre,", 1]], pista: "¿Suena a conversación?", why: "Registro." },
    { fase: "guiada", c: ["b3es-plan"], k: "choice", es: true, ask: "En el ensayo, ¿qué es imprescindible?", q: "Elige.", o: ["una posición clara", "muchas preguntas sin respuesta"], a: 0, pista: "Tomar partido.", why: "Posición." },
    { fase: "guiada", c: ["b3es-formules"], k: "choice", ask: "Quieres introducir el tema.", q: "«___»", o: ["De nos jours, la question de l'IA suscite de nombreux débats.", "Bon, je vais parler de l'IA."], a: 0, pista: "Formal.", why: "<b>De nos jours</b>." },
    { fase: "indep", c: ["b3es-plan"], k: "choice", es: true, ask: "¿Cuántas palabras pide el DELF B2?", q: "Elige.", o: ["unas 250", "unas 80"], a: 0, why: "<b>250</b>." },
    { fase: "indep", c: ["b3es-formules"], k: "fill", ask: "«Conviene» (convenir).", q: "Il ___ donc de se demander si cette mesure est efficace.", acc: ["convient"], why: "<b>convient</b>." },
    { fase: "indep", c: ["b3es-formules"], k: "fill", ask: "«A la vista de» (au … de).", q: "Au ___ de ces éléments, il apparaît que la réforme est nécessaire.", acc: ["vu"], why: "<b>vu</b>." },
    { fase: "aplica", c: ["b3es-plan", "b3es-formules"], k: "match", ask: "Une cada parte del ensayo con su fórmula.", q: "Parte → fórmula", pairs: [["contexto", "De nos jours,"], ["problemática", "Il convient de se demander si…"], ["contraargumento", "Certes,"], ["conclusión", "Au vu de ces arguments,"]], why: "Plan." },
    { fase: "aplica", c: ["b3es-formules"], k: "spot", ask: "Encuentra la palabra demasiado oral.", s: "[Bref] , du point de vue économique , cette réforme est nécessaire .", fix: "Ainsi", why: "<b>Ainsi</b>." },
    { fase: "aplica", c: ["b3es-plan"], k: "choice", ask: "¿Qué frase anuncia mejor el tema?", q: "«___»", o: ["Nous nous interrogerons sur les effets du télétravail.", "Je vais parler du télétravail."], a: 0, why: "Impersonal." },
    { fase: "dominio", c: ["b3es-formules"], k: "order", ask: "Ordena: «Conviene preguntarse si…».", tokens: ["Il convient", "de se demander", "si…"], why: "<b>Il convient de se demander si…</b>" },
    { fase: "dominio", c: ["b3es-plan"], k: "choice", es: true, ask: "«Certes…, mais…» sirve para…", q: "Elige.", o: ["refutar un contraargumento", "saludar al lector"], a: 0, why: "Contraargumento." },
    { fase: "dominio", c: ["b3es-plan", "b3es-formules"], k: "listen", say: "Au vu de ces arguments, il apparaît que le télétravail présente plus d'avantages que d'inconvénients.", acc: ["Au vu de ces arguments, il apparaît que le télétravail présente plus d'avantages que d'inconvénients."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au vu de ces arguments, il apparaît que le télétravail présente plus d'avantages que d'inconvénients.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "DELF"], previo: [] }
};

/* ── 30. Écrire un article d'opinion (tribune) ── */
E["b21-tribune"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Écrire un article d'opinion (tribune)",
  objetivo: {
    que: "Vas a escribir una tribuna: un artículo que defiende una postura ante un público amplio, con título llamativo, entradilla y recursos retóricos.",
    corto: "Qui n'a jamais perdu une heure dans les embouteillages ? · Il est temps d'agir.",
    podras: ["Poner un título breve y llamativo y una entradilla (chapeau) que resume.", "Implicar al lector con preguntas retóricas (Qui n'a jamais… ?, Imaginez…), cifras (Selon l'INSEE, …) y anáforas (Il est temps de…).", "Cerrar con una llamada a la acción en imperativo: Agissons ! Ensemble, faisons…"],
    iconos: ["ic2/pergamino", "ic2/microfono", "ic2/rayo"],
    previos: ["La prensa escrita (lección 7) e insistir (B1.2, lección 41)."],
    capacidad: "Ahora escribes un artículo de opinión que convence."
  },
  requiere: R("b3pr-titre", "b3pr-genres", "b2ii-mots", "b2ii-struct"), recupera: ["b3pr-titre"],
  conceptos: {
    "b3tb-structure": { n: "la tribuna: titre breve y llamativo (Le vélo, remède urbain ?), chapeau (la entradilla que resume), desarrollo, cierre con llamada a la acción", b: "gr" },
    "b3tb-rhetorique": { n: "recursos: pregunta retórica (Qui n'a jamais… ?), Imaginez…, cifras (Selon l'INSEE, 30 % des…), anáfora (Il est temps de… Il est temps de…), imperativo de llamada a la acción (Agissons ! faisons)", b: "gr" }
  },
  video: {
    titulo: "Una tribuna que convence", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Il est temps d'agir", seg: [
        { es: "Hola. Una tribuna defiende una postura y llama a actuar." } ] },
      { v: "frase", filas: [
          { nota: "pregunta", p: 1, partes: [["Qui n'a jamais perdu une heure dans les embouteillages ?", "-", 1]] },
          { nota: "anáfora", p: 2, partes: [["Il est temps d'agir.", "-", 2]] },
          { nota: "llamada", p: 3, partes: [["Ensemble, faisons de nos villes des lieux plus humains.", "-", 3]] } ], seg: [
        { fr: "Qui n'a jamais perdu une heure dans les embouteillages ?", p: 1 }, { fr: "Il est temps d'agir.", p: 2 }, { fr: "Ensemble, faisons de nos villes des lieux plus humains.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué título es mejor?", o: ["Le vélo, remède urbain ?", "Mon article sur le vélo"], a: 0,
        bien: "¡Sí! Llama la atención.", mal: "El título tiene que atraer.",
        seg: [ { es: "Pausa. Un título que atrape." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un titre accrocheur", "le chapeau", "Qui n'a jamais… ?", "Il est temps de", "Agissons !"], seg: [
        { es: "Título, entradilla, recursos y llamada a la acción.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El periódico de la universidad", img: "bg-universidad", yo: "camila",
    escena: "Camila escribe una tribuna para el periódico estudiantil; Hugo la ayuda.",
    pj: PJ,
    lineas: [
      ["camila", "Mon titre, c'est « Mon article sur le vélo ». Ça va ?", "Mi título es «Mi artículo sobre la bici». ¿Está bien?"],
      ["hugo", "Il faut un titre accrocheur : « Le vélo, remède urbain ? ». Et ajoute un chapeau, la petite introduction qui résume.", "Hace falta un título llamativo: «La bici, ¿remedio urbano?». Y añade una entradilla, la pequeña introducción que resume."],
      ["camila", "Je commence par une question : « Qui n'a jamais perdu une heure dans les embouteillages ? » Puis un chiffre : « Selon l'INSEE, un tiers des Français vivent en ville. »", "Empiezo con una pregunta: «¿Quién no ha perdido nunca una hora en un atasco?» Luego una cifra: «Según el INSEE, un tercio de los franceses viven en la ciudad.»"],
      ["hugo", "Parfait. Et à la fin, un appel à l'action : « Il est temps d'agir ! Ensemble, faisons de nos villes des lieux plus humains. »", "Perfecto. Y al final, una llamada a la acción: «¡Es hora de actuar! Juntos, hagamos de nuestras ciudades lugares más humanos.»"]
    ],
    fijate: "Fíjate: un titre accrocheur, le chapeau, la pregunta retórica Qui n'a jamais… ?, el dato Selon l'INSEE, la llamada Il est temps d'agir ! y el imperativo faisons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Estructura y recursos de la tribuna",
      idea: "Estructura: un titre breve y llamativo (Le vélo, remède urbain ?), un chapeau (la entradilla que resume la postura), el desarrollo y un cierre con llamada a la acción. Recursos para implicar al lector: la pregunta retórica (Qui n'a jamais… ?), Imaginez…, datos (Selon l'INSEE, 30 % des…), la anáfora (repetir el inicio: Il est temps de… Il est temps de…), la exclamación moderada. Llamada a la acción con el imperativo de nous: Agissons ! Ensemble, faisons… (faire → faisons, nunca «faisez»).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Recurso"], [
        ["le chapeau · le chapeau d'un article", "la entradilla que resume", "estructura"],
        ["un titre accrocheur · Le vélo, remède urbain ? · Manger local : un geste qui change tout ?", "un título llamativo · La bici, ¿remedio urbano? · Comer local: ¿un gesto que lo cambia todo?", "título"],
        ["Qui n'a jamais… ? · Qui n'a jamais rêvé de voyager ?", "¿Quién no ha…? · ¿Quién no ha soñado nunca con viajar?", "pregunta retórica"],
        ["Il est temps… Il est temps… · Il est temps d'agir ! · temps", "Es hora… Es hora… · ¡Es hora de actuar!", "anáfora"],
        ["Selon une étude, 40 %… · Selon l'INSEE, un tiers des Français vivent en ville. · vivent · vit", "Según un estudio, el 40 %… · Según el INSEE, un tercio de los franceses viven en la ciudad.", "dato"],
        ["Agissons ! · Ensemble, faisons de nos villes des lieux plus humains ! · faisons", "¡Actuemos! · ¡Juntos, hagamos de nuestras ciudades lugares más humanos!", "llamada a la acción"],
        ["un titre accrocheur · un chapeau · une question rhétorique d'ouverture · une anecdote · une ouverture", "título · entradilla · pregunta inicial · anécdota · apertura", "Inicio"],
        ["un appel à l'action · une formule percutante · un bilan", "llamada a la acción · frase contundente · balance", "Final"],
        ["Imaginez une ville sans voitures, où les enfants jouent librement dans les rues.", "Imaginen una ciudad sin coches, donde los niños juegan libremente en las calles.", "Imaginez…"],
        ["Il est temps de changer", "Es hora de cambiar", "anáfora"]
      ]],
      ej: [["Qui n'a jamais perdu une heure dans les embouteillages ?", "¿Quién no ha perdido nunca una hora en un atasco?"], ["Il est temps d'agir.", "Es hora de actuar."], ["Ensemble, faisons de nos villes des lieux plus humains.", "Juntos, hagamos de nuestras ciudades lugares más humanos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Titre : « Mon article sur le vélo »", "Titre : « Le vélo, remède urbain ? »", "El título debe llamar la atención."], ["Ensemble, faisez…", "Ensemble, faisons…", "Imperativo de nous: faisons."], ["Il est le temps d'agir.", "Il est temps d'agir.", "Sin artículo."]] }
  ],
  ejemplos: [
    { sit: "¿Qué es «le chapeau» de un artículo?", resp: "la entradilla que resume", pasos: ["Va después del título."], porque: "Estructura." },
    { sit: "Quieres implicar al lector con una pregunta.", resp: "Qui n'a jamais rêvé de voyager ?", pasos: ["Pregunta retórica."], porque: "Implicar." },
    { sit: "Título para un artículo sobre comer local.", resp: "Manger local : un geste qui change tout ?", pasos: ["Breve y con pregunta."], porque: "Título llamativo." }
  ],
  comprueba: [
    { q: "«Le chapeau» de un artículo es…", o: ["la entradilla que resume", "la firma del autor"], a: 0, b: "gr", porque: "Resume." },
    { q: "Repetir «Il est temps de…» al inicio de varias frases es…", o: ["una anáfora", "un error"], a: 0, b: "gr", porque: "Recurso." },
    { q: "Una tribuna termina a menudo con…", o: ["una llamada a la acción", "la bibliografía"], a: 0, b: "gr", porque: "Agissons !" }
  ],
  practica: [
    { fase: "guiada", c: ["b3tb-structure"], k: "sort", ask: "¿Va al inicio o al final de la tribuna?", q: "Clasifica.", cats: ["Inicio", "Final"], items: [["un titre accrocheur", 0], ["un chapeau", 0], ["une question rhétorique d'ouverture", 0], ["une anecdote", 0], ["un appel à l'action", 1], ["une formule percutante", 1], ["un bilan", 1], ["Agissons !", 1]], pista: "¿Abre o cierra?", why: "Estructura." },
    { fase: "guiada", c: ["b3tb-structure"], k: "choice", es: true, ask: "«Le chapeau d'un article» es…", q: "Elige.", o: ["la entradilla que resume", "el sombrero del periodista"], a: 0, pista: "Después del título.", why: "Entradilla." },
    { fase: "guiada", c: ["b3tb-rhetorique"], k: "choice", ask: "Quieres implicar al lector.", q: "«___»", o: ["Qui n'a jamais rêvé de voyager ?", "Je vais parler des voyages."], a: 0, pista: "Pregunta retórica.", why: "<b>Qui n'a jamais…</b>" },
    { fase: "indep", c: ["b3tb-structure"], k: "choice", ask: "Título para un artículo sobre comer local.", q: "«___»", o: ["Manger local : un geste qui change tout ?", "Mon texte sur la nourriture"], a: 0, why: "Llamativo." },
    { fase: "indep", c: ["b3tb-rhetorique"], k: "fill", ask: "«¡Es hora de actuar!»", q: "Il est ___ d'agir !", acc: ["temps"], why: "<b>temps</b>." },
    { fase: "indep", c: ["b3tb-rhetorique"], k: "fill", ask: "Presente de vivre (ellos).", q: "Selon l'INSEE, un tiers des Français ___ en ville.", acc: ["vivent", "vit"], why: "<b>vivent</b> (o vit, concordando con un tiers)." },
    { fase: "aplica", c: ["b3tb-rhetorique"], k: "match", ask: "Une cada recurso con su ejemplo.", q: "Recurso → ejemplo", pairs: [["pregunta retórica", "Qui n'a jamais… ?"], ["anáfora", "Il est temps… Il est temps…"], ["dato", "Selon une étude, 40 %…"], ["llamada a la acción", "Agissons !"]], why: "Recursos." },
    { fase: "aplica", c: ["b3tb-rhetorique"], k: "spot", ask: "Encuentra el error.", s: "Ensemble , [faisez] de nos villes des lieux plus humains !", fix: "faisons", why: "<b>faisons</b>." },
    { fase: "aplica", c: ["b3tb-structure"], k: "choice", ask: "¿Qué título es mejor?", q: "«___»", o: ["Le vélo, remède urbain ?", "Mon article sur le vélo"], a: 0, why: "Llamativo." },
    { fase: "dominio", c: ["b3tb-rhetorique"], k: "order", ask: "Ordena: «Es hora de cambiar».", tokens: ["Il est", "temps", "de changer"], why: "<b>Il est temps de changer</b>" },
    { fase: "dominio", c: ["b3tb-structure"], k: "choice", es: true, ask: "Una tribuna termina a menudo con…", q: "Elige.", o: ["una llamada a la acción", "la lista de fuentes"], a: 0, why: "Agissons !" },
    { fase: "dominio", c: ["b3tb-rhetorique", "b3tb-structure"], k: "listen", say: "Imaginez une ville sans voitures, où les enfants jouent librement dans les rues.", acc: ["Imaginez une ville sans voitures, où les enfants jouent librement dans les rues."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Imaginez une ville sans voitures, où les enfants jouent librement dans les rues.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "INSEE"], previo: [] }
};

/* ── 31. Réagir à un article : le courrier des lecteurs ── */
E["b21-courrier-lecteurs"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Réagir à un article : le courrier des lecteurs",
  objetivo: {
    que: "Vas a escribir una carta al periódico: citar el artículo, dar tu acuerdo o desacuerdo, argumentar con tu experiencia y proponer algo.",
    corto: "Suite à votre article paru le 12 mars, je tiens à réagir. · Ne serait-il pas plus judicieux de… ?",
    podras: ["Citar el artículo: Suite à votre article intitulé « … », paru le…, je souhaiterais réagir.", "Tomar posición (Je partage entièrement / Je ne partage pas l'avis de votre journaliste) y argumentar con tu experiencia: En tant que…", "Proponer una alternativa (Ne serait-il pas plus judicieux de… ?) y cerrar con una fórmula formal."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/espadas"],
    previos: ["Debatir (lección 8), el correo argumentativo (B1.2, lección 8) y atenuar (B1.2, lección 40)."],
    capacidad: "Ahora reaccionas por escrito a un artículo, como en el DELF B2."
  },
  requiere: R("b2ce-formules", "b2ce-plan", "b3db-accord", "b2at-cond"), recupera: ["b2ce-formules"],
  conceptos: {
    "b3cl2-reagir": { n: "citar el artículo: Suite à votre article (intitulé « … », paru le…), je souhaiterais / je tiens à réagir; posición: Je partage (entièrement) votre point de vue / Je ne partage pas cet avis, Je conteste cette affirmation", b: "gr" },
    "b3cl2-proposer": { n: "argumentar con experiencia: En tant que (étudiant, parent, professeure),…; proponer: Ne serait-il pas plus judicieux / préférable de… ?; cerrar: Veuillez agréer…", b: "gr" }
  },
  video: {
    titulo: "La carta de los lectores", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Suite à votre article", seg: [
        { es: "Hola. Reaccionar a un artículo, con cortesía y argumentos." } ] },
      { v: "frase", filas: [
          { nota: "referencia", p: 1, partes: [["Suite à votre article paru le 12 mars, je tiens à réagir.", "-", 1]] },
          { nota: "experiencia", p: 2, partes: [["En tant qu'étudiant, je suis directement concerné.", "-", 2]] },
          { nota: "propuesta", p: 3, partes: [["Ne serait-il pas plus judicieux d'investir dans les transports ?", "-", 3]] } ], seg: [
        { fr: "Suite à votre article paru le 12 mars, je tiens à réagir.", p: 1 }, { fr: "En tant qu'étudiant, je suis directement concerné.", p: 2 }, { fr: "Ne serait-il pas plus judicieux d'investir dans les transports ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«A raíz de su artículo…»", o: ["Suite à votre article…", "Suite de votre article…"], a: 0,
        bien: "¡Sí! Suite à.", mal: "Se dice suite à (o à la suite de).",
        seg: [ { es: "Pausa. Suite à." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Suite à votre article", "Je partage", "En tant que", "plus judicieux", "réagir"], seg: [
        { es: "Referencia, posición, experiencia y propuesta.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El artículo sobre el alquiler", img: "bg-cafe", yo: "camila",
    escena: "Camila escribe al periódico; Hugo lee por encima de su hombro.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu écris au journal ? À propos de quoi ?", "¿Escribes al periódico? ¿Sobre qué?"],
      ["camila", "Suite à votre article sur le logement, paru le 3 mai, je souhaite réagir. Je ne partage pas l'avis de votre journaliste.", "A raíz de su artículo sobre la vivienda, publicado el 3 de mayo, deseo reaccionar. No comparto la opinión de su periodista."],
      ["hugo", "Bien. Et ton argument ?", "Bien. ¿Y tu argumento?"],
      ["camila", "En tant qu'étudiante, je suis directement concernée. Ne serait-il pas plus judicieux d'investir dans les résidences universitaires ?", "Como estudiante, me siento directamente afectada. ¿No sería más sensato invertir en residencias universitarias?"]
    ],
    fijate: "Fíjate: Suite à votre article, paru le 3 mai, je souhaite réagir, Je ne partage pas l'avis de, En tant qu'étudiante, Ne serait-il pas plus judicieux de… ?"
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las partes de la carta",
      idea: "1. Referencia: Suite à votre article (intitulé « … »), paru le…, je souhaiterais / je tiens à réagir. Ojo: suite à o à la suite de, nunca «suite de». 2. Posición: Je partage entièrement votre point de vue / Je ne partage pas l'avis de votre journaliste; Je conteste cette affirmation. 3. Experiencia: En tant que mère de famille / enseignant / étudiant, je… 4. Propuesta (condicional de cortesía): Ne serait-il pas plus judicieux / préférable de… ? 5. Cierre formal: Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Registro formal pero personal.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Suite à votre article… · Suite à votre article sur la réforme des retraites, je tiens à vous faire part de mon désaccord.", "A raíz de su artículo… · A raíz de su artículo sobre la reforma de las pensiones, quiero expresarle mi desacuerdo.", "referencia"],
        ["Votre article, paru le 3 mai, m'a beaucoup surpris. · paru · publié", "Su artículo, publicado el 3 de mayo, me sorprendió mucho.", "referencia"],
        ["Je partage entièrement votre point de vue. · Votre article m'a convaincu. · Je souscris à cette analyse. · Vous avez parfaitement raison. · Je partage votre avis.", "Comparto totalmente su punto de vista. · Su artículo me convenció. · Suscribo este análisis. · Tiene toda la razón.", "Acuerdo"],
        ["Je ne partage pas cet avis. · Je m'inscris en faux contre… · Je conteste cette affirmation. · Votre article m'a choqué.", "No comparto esta opinión. · Me opongo rotundamente a… · Rebato esta afirmación. · Su artículo me escandalizó.", "Desacuerdo"],
        ["Je ne partage pas l'avis de votre journaliste. · partage", "No comparto la opinión de su periodista.", "posición"],
        ["En tant que professeure, · En tant que parent,", "Como profesora, · Como padre o madre,", "experiencia"],
        ["Ne serait-il pas plus judicieux de… ? · Ne serait-il pas préférable de… ?", "¿No sería más sensato…? · ¿No sería preferible…?", "propuesta"],
        ["Je souhaite réagir à votre article · à", "Deseo reaccionar a su artículo", "réagir à"],
        ["Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.", "Reciba un cordial saludo.", "cierre"]
      ]],
      ej: [["Suite à votre article paru le 12 mars, je tiens à réagir.", "A raíz de su artículo publicado el 12 de marzo, quiero reaccionar."], ["En tant qu'étudiant, je suis directement concerné.", "Como estudiante, me siento directamente afectado."], ["Ne serait-il pas plus judicieux d'investir dans les transports ?", "¿No sería más sensato invertir en transporte?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Suite de votre article…", "Suite à votre article…", "Suite à (o à la suite de)."], ["Comme professeure, …", "En tant que professeure, …", "Rol o calidad: en tant que."], ["Votre article est nul.", "Je conteste cette affirmation.", "Desacuerdo, pero formal."]] }
  ],
  ejemplos: [
    { sit: "«A raíz de su artículo…»", resp: "Suite à votre article…", pasos: ["suite à."], porque: "Referencia." },
    { sit: "«Como profesora…»", resp: "En tant que professeure,", pasos: ["en tant que + rol."], porque: "Experiencia." },
    { sit: "Quieres proponer una alternativa.", resp: "Ne serait-il pas plus judicieux de… ?", pasos: ["Condicional de cortesía."], porque: "Propuesta." }
  ],
  comprueba: [
    { q: "«A raíz de su artículo» se dice…", o: ["Suite à votre article", "Suite de votre article"], a: 0, b: "gr", porque: "suite à." },
    { q: "«En tant que» presenta…", o: ["tu papel o experiencia", "una causa"], a: 0, b: "gr", porque: "En tant qu'étudiant." },
    { q: "«Ne serait-il pas plus judicieux de… ?» sirve para…", o: ["proponer con cortesía", "saludar"], a: 0, b: "gr", porque: "Propuesta." }
  ],
  practica: [
    { fase: "guiada", c: ["b3cl2-reagir"], k: "sort", ask: "¿Acuerdo o desacuerdo?", q: "Clasifica.", cats: ["Acuerdo", "Desacuerdo"], items: [["Je partage entièrement votre point de vue.", 0], ["Votre article m'a convaincu.", 0], ["Je souscris à cette analyse.", 0], ["Vous avez parfaitement raison.", 0], ["Je ne partage pas cet avis.", 1], ["Je m'inscris en faux contre…", 1], ["Je conteste cette affirmation.", 1], ["Votre article m'a choqué.", 1]], pista: "¿Apoya o critica?", why: "Posición." },
    { fase: "guiada", c: ["b3cl2-reagir"], k: "choice", ask: "«A raíz de su artículo…»", q: "«___»", o: ["Suite à votre article…", "Suite de votre article…"], a: 0, pista: "Preposición.", why: "<b>Suite à</b>." },
    { fase: "guiada", c: ["b3cl2-proposer"], k: "choice", ask: "«Como profesora…»", q: "«___»", o: ["En tant que professeure,", "Comme que professeure,"], a: 0, pista: "Rol.", why: "<b>En tant que</b>." },
    { fase: "indep", c: ["b3cl2-proposer"], k: "choice", ask: "Quieres proponer una alternativa.", q: "«___»", o: ["Ne serait-il pas plus judicieux de… ?", "Vous devez faire autre chose."], a: 0, why: "Cortesía." },
    { fase: "indep", c: ["b3cl2-reagir"], k: "fill", ask: "«No comparto» (partager).", q: "Je ne ___ pas l'avis de votre journaliste.", acc: ["partage"], why: "<b>partage</b>." },
    { fase: "indep", c: ["b3cl2-reagir"], k: "fill", ask: "«publicado» (paraître o publier).", q: "Votre article, ___ le 3 mai, m'a beaucoup surpris.", acc: ["paru", "publié"], why: "<b>paru</b>." },
    { fase: "aplica", c: ["b3cl2-reagir", "b3cl2-proposer"], k: "match", ask: "Une cada parte con su fórmula.", q: "Parte → fórmula", pairs: [["referencia", "Suite à votre article…"], ["posición", "Je partage votre avis."], ["experiencia", "En tant que parent,"], ["propuesta", "Ne serait-il pas préférable de… ?"]], why: "Partes." },
    { fase: "aplica", c: ["b3cl2-reagir"], k: "spot", ask: "Encuentra el error.", s: "Suite [de] votre article sur le logement , je souhaite réagir .", fix: "à", why: "<b>à</b>." },
    { fase: "aplica", c: ["b3cl2-reagir"], k: "choice", ask: "Desacuerdo formal:", q: "«___»", o: ["Je conteste cette affirmation.", "Votre article est nul."], a: 0, why: "Formal." },
    { fase: "dominio", c: ["b3cl2-reagir"], k: "order", ask: "Ordena: «Deseo reaccionar a su artículo».", tokens: ["Je souhaite", "réagir", "à votre article"], why: "<b>Je souhaite réagir à votre article</b>" },
    { fase: "dominio", c: ["b3cl2-proposer"], k: "choice", es: true, ask: "«En tant que» presenta…", q: "Elige.", o: ["tu papel o experiencia", "una causa"], a: 0, why: "Rol." },
    { fase: "dominio", c: ["b3cl2-reagir", "b3cl2-proposer"], k: "listen", say: "Suite à votre article sur la réforme des retraites, je tiens à vous faire part de mon désaccord.", acc: ["Suite à votre article sur la réforme des retraites, je tiens à vous faire part de mon désaccord."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Suite à votre article sur la réforme des retraites, je tiens à vous faire part de mon désaccord.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 32. Rédiger un rapport ou un compte rendu de réunion ── */
E["b21-rapport"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Rédiger un rapport ou un compte rendu de réunion",
  objetivo: {
    que: "Vas a redactar un informe o un acta de reunión: hechos objetivos, temas tratados, decisiones y próximos pasos, en estilo impersonal.",
    corto: "Il a été décidé de reporter la réunion au 15 mai. · Mme Dupont est chargée de contacter le fournisseur.",
    podras: ["Poner el encabezado: Objet, date, participants, rédacteur.", "Seguir el orden: ordre du jour → points abordés → décisions → actions à mener.", "Escribir en estilo impersonal (Il a été décidé que…) con los verbos de acta: aborder, rappeler, valider, reporter, charger quelqu'un de…"],
    iconos: ["ic2/pergamino", "ic2/engranaje", "ic2/reloj-arena"],
    previos: ["La nominalización (lección 12), el compte rendu (B1.2, lección 38) y la voz pasiva (B1.2, lección 6)."],
    capacidad: "Ahora redactas el acta de una reunión de trabajo."
  },
  requiere: R("b2cr-regles", "b2cr-verbes", "b3no-phrase"), recupera: ["b2cr-verbes"],
  conceptos: {
    "b3rp-structure": { n: "encabezado (Objet, date, participants, rédacteur); ordre du jour (temas previstos) → points abordés → décisions (lo acordado) → actions à mener (quién hace qué)", b: "gr" },
    "b3rp-style": { n: "estilo impersonal: Il a été décidé / convenu que…, La proposition est validée; verbos: aborder, rappeler, valider, reporter, être chargé(e) de; nada de oral (on verra, quoi)", b: "gr" }
  },
  video: {
    titulo: "El acta de la reunión", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "il a été décidé", seg: [
        { es: "Hola. Un acta resume lo que se decidió y quién hace qué." } ] },
      { v: "frase", filas: [
          { nota: "decisión", p: 1, partes: [["Il a été décidé de reporter la réunion au 15 mai.", "-", 1]] },
          { nota: "encargo", p: 2, partes: [["Mme Dupont est chargée de contacter le fournisseur.", "-", 2]] },
          { nota: "temas", p: 3, partes: [["Les points suivants ont été abordés.", "-", 3]] } ], seg: [
        { fr: "Il a été décidé de reporter la réunion au 15 mai.", p: 1 }, { fr: "Mme Dupont est chargée de contacter le fournisseur.", p: 2 }, { fr: "Les points suivants ont été abordés.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En un acta formal:", o: ["Il a été décidé de reporter la réunion.", "On a décidé de reporter la réunion."], a: 0,
        bien: "¡Sí! Impersonal.", mal: "El acta usa la forma impersonal.",
        seg: [ { es: "Pausa. Forma impersonal." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'ordre du jour", "abordés", "Il a été décidé", "chargé de", "reportée"], seg: [
        { es: "Orden del día, temas, decisiones y acciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reunión de la asociación", img: "bg-universidad", yo: "camila",
    escena: "Camila redacta el acta de la reunión de la asociación de estudiantes; Hugo la revisa.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « On a décidé de reporter la fête. Paul a dit genre qu'il s'occupe du budget. »", "Escribí: «Decidimos aplazar la fiesta. Paul dijo, tipo, que se ocupa del presupuesto.»"],
      ["hugo", "C'est trop oral. Dans un compte rendu : « Il a été décidé de reporter la fête. Paul est chargé du budget. »", "Es demasiado oral. En un acta: «Se decidió aplazar la fiesta. Paul se encarga del presupuesto.»"],
      ["camila", "D'accord. Et au début, je mets l'ordre du jour et les participants. Puis : « Les points suivants ont été abordés. »", "De acuerdo. Y al principio pongo el orden del día y los participantes. Luego: «Se trataron los siguientes puntos.»"],
      ["hugo", "Exactement. Et à la fin, les actions à mener : « Mme Leroy est chargée de rédiger le prochain rapport. Prochaine réunion : 3 juin. »", "Exacto. Y al final, las acciones pendientes: «La Sra. Leroy se encarga de redactar el próximo informe. Próxima reunión: 3 de junio.»"]
    ],
    fijate: "Fíjate: Il a été décidé de (impersonal), est chargé(e) de (encargo), l'ordre du jour, Les points suivants ont été abordés, Prochaine réunion."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Estructura y estilo del acta",
      idea: "Encabezado: Objet, date, participants, rédacteur. Estructura: l'ordre du jour (los temas previstos) → les points abordés → les décisions (lo acordado) → les actions à mener (quién hace qué). Estilo objetivo e impersonal: Il a été décidé / convenu que…, La proposition est validée (à l'unanimité), frases nominales y viñetas. Verbos de acta: aborder (tratar), rappeler, proposer, valider, reporter (aplazar), charger quelqu'un de → être chargé(e) de (encargarse de; concuerda: Mme Leroy est chargée).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Il a été décidé que… · Il a été convenu que…", "Se decidió que… · Se acordó que…", "decisión"],
        ["l'ordre du jour · ordre du jour", "los temas previstos de la reunión", "estructura"],
        ["participants · décisions · actions à mener", "quién asistió · lo acordado · quién hace qué", "estructura"],
        ["Paul est chargé du budget. · Mme Leroy est chargée de rédiger le prochain rapport. · chargée", "Paul se encarga del presupuesto. · La Sra. Leroy se encarga de redactar el próximo informe.", "encargo"],
        ["Les points suivants ont été abordés. · abordés", "Se trataron los siguientes puntos.", "temas"],
        ["La réunion est reportée à jeudi. · reportée", "La reunión se aplaza al jueves.", "aplazar"],
        ["Il a été convenu que… · M. Roy rappelle que… · La proposition est validée. · Prochaine réunion : 3 juin.", "Se acordó que… · El Sr. Roy recuerda que… · Se aprueba la propuesta. · Próxima reunión: 3 de junio.", "Estilo de acta / informe"],
        ["Bon, on verra. · Paul a dit genre que… · On s'est mis d'accord, quoi. · Bref, voilà.", "Bueno, ya veremos. · Paul dijo, tipo, que… · Nos pusimos de acuerdo, ¿sabes? · En fin, eso.", "Estilo oral"],
        ["La proposition a été validée à l'unanimité", "La propuesta fue aprobada por unanimidad", "decisión"],
        ["Il a été décidé de lancer une enquête auprès des clients avant la fin du mois.", "Se decidió lanzar una encuesta a los clientes antes de fin de mes.", "decisión"]
      ]],
      ej: [["Il a été décidé de reporter la réunion au 15 mai.", "Se decidió aplazar la reunión al 15 de mayo."], ["Mme Dupont est chargée de contacter le fournisseur.", "La Sra. Dupont se encarga de contactar al proveedor."], ["Les points suivants ont été abordés.", "Se trataron los siguientes puntos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["On a décidé de reporter (acta formal)", "Il a été décidé de reporter…", "Acta: forma impersonal."], ["Mme Leroy est chargé de…", "Mme Leroy est chargée de…", "Concordancia con el sujeto."], ["La réunion est retardée à jeudi.", "La réunion est reportée à jeudi.", "Aplazar a una fecha: reporter."]] }
  ],
  ejemplos: [
    { sit: "«Se decidió que…»", resp: "Il a été décidé que…", pasos: ["Pasiva impersonal."], porque: "Decisión." },
    { sit: "¿Qué es «l'ordre du jour»?", resp: "los temas previstos de la reunión", pasos: ["Va al principio."], porque: "Estructura." },
    { sit: "«Encargan a Paul del presupuesto.»", resp: "Paul est chargé du budget.", pasos: ["être chargé de."], porque: "Encargo." }
  ],
  comprueba: [
    { q: "«L'ordre du jour» es…", o: ["los temas previstos de la reunión", "la fecha de hoy"], a: 0, b: "gr", porque: "Temas." },
    { q: "En un acta formal se prefiere…", o: ["Il a été décidé que…", "On a décidé que…"], a: 0, b: "gr", porque: "Impersonal." },
    { q: "«Reporter une réunion» significa…", o: ["aplazarla", "informar sobre ella"], a: 0, b: "gr", porque: "Falso amigo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3rp-style"], k: "sort", ask: "¿Estilo de acta o estilo oral?", q: "Clasifica.", cats: ["Estilo de acta / informe", "Estilo oral"], items: [["Il a été convenu que…", 0], ["M. Roy rappelle que…", 0], ["La proposition est validée.", 0], ["Prochaine réunion : 3 juin.", 0], ["Bon, on verra.", 1], ["Paul a dit genre que…", 1], ["On s'est mis d'accord, quoi.", 1], ["Bref, voilà.", 1]], pista: "¿Suena a charla?", why: "Registro." },
    { fase: "guiada", c: ["b3rp-style"], k: "choice", ask: "«Se decidió que…»", q: "«___»", o: ["Il a été décidé que…", "On a dit que…"], a: 0, pista: "Impersonal.", why: "<b>Il a été décidé</b>." },
    { fase: "guiada", c: ["b3rp-structure"], k: "choice", es: true, ask: "«L'ordre du jour» es…", q: "Elige.", o: ["los temas previstos de la reunión", "el orden de llegada"], a: 0, pista: "Al principio.", why: "Temas." },
    { fase: "indep", c: ["b3rp-style"], k: "choice", ask: "«Encargan a Paul del presupuesto.»", q: "«___»", o: ["Paul est chargé du budget.", "Paul est chargé le budget."], a: 0, why: "<b>chargé du</b>." },
    { fase: "indep", c: ["b3rp-style"], k: "fill", ask: "«tratados» (aborder).", q: "Les points suivants ont été ___ .", acc: ["abordés"], why: "<b>abordés</b>." },
    { fase: "indep", c: ["b3rp-style"], k: "fill", ask: "«aplazada» (reporter).", q: "La réunion est ___ à jeudi.", acc: ["reportée"], why: "<b>reportée</b>." },
    { fase: "aplica", c: ["b3rp-structure"], k: "match", ask: "Une cada parte del acta con su contenido.", q: "Parte → contenido", pairs: [["participants", "quién asistió"], ["ordre du jour", "temas previstos"], ["décisions", "lo acordado"], ["actions à mener", "quién hace qué"]], why: "Estructura." },
    { fase: "aplica", c: ["b3rp-style"], k: "spot", ask: "Encuentra el error.", s: "Mme Leroy est [chargé] de rédiger le prochain rapport .", fix: "chargée", why: "<b>chargée</b>." },
    { fase: "aplica", c: ["b3rp-style"], k: "choice", ask: "En un acta formal:", q: "«___»", o: ["Il a été décidé de reporter la réunion.", "On a décidé de reporter la réunion."], a: 0, why: "Impersonal." },
    { fase: "dominio", c: ["b3rp-style"], k: "order", ask: "Ordena: «La propuesta fue aprobada por unanimidad».", tokens: ["La proposition", "a été validée", "à l'unanimité"], why: "<b>La proposition a été validée à l'unanimité</b>" },
    { fase: "dominio", c: ["b3rp-style"], k: "choice", es: true, ask: "«Reporter une réunion» significa…", q: "Elige.", o: ["aplazarla", "informar sobre ella"], a: 0, why: "Aplazar." },
    { fase: "dominio", c: ["b3rp-style", "b3rp-structure"], k: "listen", say: "Il a été décidé de lancer une enquête auprès des clients avant la fin du mois.", acc: ["Il a été décidé de lancer une enquête auprès des clients avant la fin du mois."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il a été décidé de lancer une enquête auprès des clients avant la fin du mois.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul", "Dupont", "Leroy", "Roy"], previo: [] }
};

/* ── B2.1·7 Oral B2 · 33. Présenter et défendre un point de vue à l'oral ── */
E["b21-expose-oral"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Présenter et défendre un point de vue à l'oral",
  objetivo: {
    que: "Vas a preparar el oral del DELF B2: presentar un documento, plantear la problemática, defender tu opinión con un plan y debatir con el examinador.",
    corto: "Ce document traite de l'usage des écrans chez les enfants. · J'en viens maintenant à mon deuxième argument.",
    podras: ["Presentar el documento (Le document que j'ai choisi traite de…) y la problemática (La question qui se pose est la suivante : …).", "Anunciar el plan y pasar de una parte a otra: Je vais d'abord…, ensuite…, enfin…; J'en viens maintenant à…; Passons à…", "Concluir y ganar tiempo en el debate: Pour conclure, je dirais que…; C'est une bonne question…"],
    iconos: ["ic2/microfono", "ic2/medalla", "ic2/reloj-arena"],
    previos: ["Tomar la palabra (B1.1, lección 51), debatir (lección 8) y los conectores lógicos (lección 13)."],
    capacidad: "Ahora haces el monólogo y el debate del oral del DELF B2."
  },
  requiere: R("b1pp-prendre", "b1pp-donner", "b3db-accord", "b3cl-fonctions"), recupera: ["b3db-accord"],
  conceptos: {
    "b3eo-plan": { n: "presentar (Le document que j'ai choisi / Ce document traite de…), problemática (La question qui se pose est la suivante), plan (Je vais d'abord…, ensuite…, enfin…), transiciones (J'en viens à…, Passons à…), cierre (Pour conclure,…); parler de, nunca «parler sur»", b: "gr" },
    "b3eo-debat": { n: "el debate con el examinador: ganar tiempo (C'est une bonne question…, laissez-moi réfléchir), conceder y matizar (Vous avez raison sur ce point; Si je peux me permettre de nuancer…)", b: "gr" }
  },
  video: {
    titulo: "El oral del DELF B2", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/microfono", grande: "J'en viens à…", seg: [
        { es: "Hola. Presentar, defender y debatir." } ] },
      { v: "frase", filas: [
          { nota: "presentar", p: 1, partes: [["Ce document traite de l'usage des écrans chez les enfants.", "-", 1]] },
          { nota: "transición", p: 2, partes: [["J'en viens maintenant à mon deuxième argument.", "-", 2]] },
          { nota: "ganar tiempo", p: 3, partes: [["C'est une question intéressante, laissez-moi réfléchir.", "-", 3]] } ], seg: [
        { fr: "Ce document traite de l'usage des écrans chez les enfants.", p: 1 }, { fr: "J'en viens maintenant à mon deuxième argument.", p: 2 }, { fr: "C'est une question intéressante, laissez-moi réfléchir.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Voy a hablar de las pantallas.»", o: ["Je vais parler des écrans.", "Je vais parler sur les écrans."], a: 0,
        bien: "¡Sí! Parler de.", mal: "Se dice parler de.",
        seg: [ { es: "Pausa. Parler de." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["traite de", "la question qui se pose", "d'abord", "J'en viens à", "Passons à", "Pour conclure"], seg: [
        { es: "Documento, problemática, plan, transiciones y cierre.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El ensayo del oral", img: "bg-biblioteca", yo: "camila",
    escena: "Camila ensaya el oral del DELF con Madame Sofia, que hace de examinadora.",
    pj: PJ,
    lineas: [
      ["camila", "Le document que j'ai choisi pose une question essentielle : faut-il interdire les écrans aux enfants ? La question qui se pose est la suivante : les écrans nuisent-ils à l'apprentissage ?", "El documento que elegí plantea una pregunta esencial: ¿hay que prohibir las pantallas a los niños? La cuestión que se plantea es la siguiente: ¿perjudican las pantallas el aprendizaje?"],
      ["camila", "Je vais d'abord présenter les risques, ensuite les avantages. J'en viens maintenant à mon deuxième argument. Pour conclure, je dirais qu'il faut un usage encadré.", "Primero presentaré los riesgos, luego las ventajas. Paso ahora a mi segundo argumento. Para concluir, diría que hace falta un uso supervisado."],
      ["sofia", "Mais les écrans ne sont-ils pas aussi un outil pédagogique ?", "Pero ¿las pantallas no son también una herramienta pedagógica?"],
      ["camila", "C'est une bonne question… Vous avez raison sur ce point. Si je peux me permettre de nuancer, tout dépend de l'âge.", "Es una buena pregunta… Tiene razón en ese punto. Si me permite matizar, todo depende de la edad."]
    ],
    fijate: "Fíjate: Le document que j'ai choisi, La question qui se pose est la suivante, Je vais d'abord…, ensuite, J'en viens maintenant à, Pour conclure; en el debate: C'est une bonne question, Vous avez raison sur ce point, Si je peux me permettre de nuancer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Monólogo y debate",
      idea: "El oral del DELF B2 tiene dos partes. Monólogo: presentar el documento (Le document que j'ai choisi / tiré traite de…), la problemática (La question qui se pose est la suivante : …), el plan (Je vais d'abord…, ensuite…, enfin…), las transiciones (J'en viens maintenant à…, Passons à…) y la conclusión (Pour conclure, je dirais que…). Debate: escuchar, conceder (Vous avez raison sur ce point), matizar (Si je peux me permettre de nuancer…) y ganar tiempo con elegancia (C'est une bonne question… Comment dire…). Ojo: parler de, nunca «parler sur».",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Momento"], [
        ["Ce document traite de… · Le document traite de… · Ce document traite de l'écologie", "Este documento trata de… · Este documento trata de la ecología", "presentar"],
        ["La question qui se pose est la suivante. · pose", "La cuestión que se plantea es la siguiente.", "problemática"],
        ["Je vais d'abord présenter… · Mon premier argument est… · Je vais d'abord…", "Primero voy a presentar… · Mi primer argumento es…", "Monólogo"],
        ["J'en viens à… · J'en viens maintenant à mon deuxième point. · Passons au troisième aspect. · Passons", "Paso a… · Paso ahora a mi segundo punto. · Pasemos al tercer aspecto.", "transición"],
        ["Pour conclure,", "Para concluir,", "cerrar"],
        ["Je comprends votre point de vue, mais… · Si je peux me permettre de nuancer… · C'est une bonne question. · Vous avez raison sur ce point.", "Entiendo su punto de vista, pero… · Si me permite matizar… · Es una buena pregunta. · Tiene razón en ese punto.", "Debate con el examinador"],
        ["C'est une bonne question… · Comment dire…", "Es una buena pregunta… · Cómo decirlo…", "ganar tiempo"],
        ["Je vais parler des écrans. · de", "Voy a hablar de las pantallas.", "parler de"],
        ["Le document que j'ai choisi pose une question essentielle : faut-il interdire les écrans aux enfants ?", "El documento que elegí plantea una pregunta esencial: ¿hay que prohibir las pantallas a los niños?", "presentar"]
      ]],
      ej: [["Ce document traite de l'usage des écrans chez les enfants.", "Este documento trata del uso de pantallas en los niños."], ["J'en viens maintenant à mon deuxième argument.", "Paso ahora a mi segundo argumento."], ["C'est une question intéressante, laissez-moi réfléchir.", "Es una pregunta interesante, déjeme pensar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je vais parler sur les écrans.", "Je vais parler des écrans.", "parler de."], ["Euh… je sais pas.", "C'est une bonne question… laissez-moi réfléchir.", "Ganar tiempo con elegancia."], ["Et après… et après…", "J'en viens maintenant à…", "Transiciones claras."]] }
  ],
  ejemplos: [
    { sit: "«Paso ahora a mi segundo punto.»", resp: "J'en viens maintenant à mon deuxième point.", pasos: ["en venir à."], porque: "Transición." },
    { sit: "Quieres ganar tiempo con elegancia.", resp: "C'est une bonne question…", pasos: ["Fórmula de cortesía."], porque: "Debate." },
    { sit: "Quieres presentar el documento.", resp: "Le document traite de…", pasos: ["traiter de."], porque: "Presentar." }
  ],
  comprueba: [
    { q: "«Voy a hablar de…» se dice…", o: ["Je vais parler de…", "Je vais parler sur…"], a: 0, b: "gr", porque: "parler de." },
    { q: "«J'en viens à…» sirve para…", o: ["pasar a otra parte", "saludar"], a: 0, b: "gr", porque: "Transición." },
    { q: "«C'est une bonne question…» en el debate sirve para…", o: ["ganar tiempo", "terminar el examen"], a: 0, b: "gr", porque: "Pensar." }
  ],
  practica: [
    { fase: "guiada", c: ["b3eo-plan", "b3eo-debat"], k: "sort", ask: "¿Monólogo o debate con el examinador?", q: "Clasifica.", cats: ["Monólogo", "Debate con el examinador"], items: [["Je vais d'abord présenter…", 0], ["Mon premier argument est…", 0], ["J'en viens à…", 0], ["Pour conclure,", 0], ["Je comprends votre point de vue, mais…", 1], ["Si je peux me permettre de nuancer…", 1], ["C'est une bonne question.", 1], ["Vous avez raison sur ce point.", 1]], pista: "¿Respondes a alguien?", why: "Partes del oral." },
    { fase: "guiada", c: ["b3eo-plan"], k: "choice", ask: "«Paso ahora a mi segundo punto.»", q: "«___»", o: ["J'en viens maintenant à mon deuxième point.", "Je viens maintenant de mon deuxième point."], a: 0, pista: "en venir à.", why: "<b>J'en viens à</b>." },
    { fase: "guiada", c: ["b3eo-debat"], k: "choice", ask: "Quieres ganar tiempo con elegancia.", q: "«___»", o: ["C'est une bonne question…", "Je sais pas, moi."], a: 0, pista: "Cortesía.", why: "Ganar tiempo." },
    { fase: "indep", c: ["b3eo-plan"], k: "choice", ask: "Quieres presentar el documento.", q: "«___»", o: ["Le document traite de…", "Le document parle sur…"], a: 0, why: "<b>traite de</b>." },
    { fase: "indep", c: ["b3eo-plan"], k: "fill", ask: "«se plantea» (se poser).", q: "La question qui se ___ est la suivante.", acc: ["pose"], why: "<b>pose</b>." },
    { fase: "indep", c: ["b3eo-plan"], k: "fill", ask: "«Pasemos» (passer).", q: "___ au troisième aspect.", acc: ["Passons", "passons"], why: "<b>Passons</b>." },
    { fase: "aplica", c: ["b3eo-plan"], k: "match", ask: "Une cada fórmula con su función.", q: "Fórmula → función", pairs: [["Ce document traite de…", "presentar"], ["Je vais d'abord…", "anunciar el plan"], ["J'en viens à…", "transición"], ["Pour conclure,", "cerrar"]], why: "Funciones." },
    { fase: "aplica", c: ["b3eo-plan"], k: "spot", ask: "Encuentra el error.", s: "Dans cet exposé , je vais parler [sur] l'avenir du travail .", fix: "de", why: "<b>de</b>." },
    { fase: "aplica", c: ["b3eo-debat"], k: "choice", ask: "El examinador te contradice. Concedes y matizas:", q: "«___»", o: ["Vous avez raison sur ce point. Si je peux me permettre de nuancer…", "Non, vous avez tort."], a: 0, why: "Conceder y matizar." },
    { fase: "dominio", c: ["b3eo-plan"], k: "order", ask: "Ordena: «Este documento trata de la ecología».", tokens: ["Ce document", "traite", "de l'écologie"], why: "<b>Ce document traite de l'écologie</b>" },
    { fase: "dominio", c: ["b3eo-plan"], k: "choice", es: true, ask: "«J'en viens à…» sirve para…", q: "Elige.", o: ["pasar a otra parte", "saludar al examinador"], a: 0, why: "Transición." },
    { fase: "dominio", c: ["b3eo-plan", "b3eo-debat"], k: "listen", say: "Le document que j'ai choisi pose une question essentielle : faut-il interdire les écrans aux enfants ?", acc: ["Le document que j'ai choisi pose une question essentielle : faut-il interdire les écrans aux enfants ?", "Le document que j'ai choisi pose une question essentielle: faut-il interdire les écrans aux enfants?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le document que j'ai choisi pose une question essentielle : faut-il interdire les écrans aux enfants ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "DELF"], previo: [] }
};

/* ── 34. Négocier et trouver un compromis ── */
E["b21-negocier"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Négocier et trouver un compromis",
  objetivo: {
    que: "Vas a negociar en francés: proponer, contraproponer, ceder con condiciones y cerrar un acuerdo.",
    corto: "Que diriez-vous d'une réduction de 10 % ? · Je suis prête à signer, à condition que la livraison soit gratuite.",
    podras: ["Proponer y contraproponer: Je vous propose de…, Que diriez-vous de… ?, Je comprends, mais ne pourrait-on pas plutôt… ?", "Ceder con una condición: Je suis prêt(e) à accepter, à condition que… + subjuntivo.", "Buscar el acuerdo y cerrarlo: trouver un terrain d'entente, couper la poire en deux, faire un compromis, Marché conclu !"],
    iconos: ["ic2/moneda", "ic2/amigos", "ic2/espadas"],
    previos: ["La condición (lección 10), proponer, aceptar y rechazar (B1.1, lección 54) y atenuar (B1.2, lección 40)."],
    capacidad: "Ahora negocias un precio o un acuerdo sin romper la relación."
  },
  requiere: R("b1pa-prop", "b1pa-rep", "b3cd-mode", "b2at-cond"), recupera: ["b3cd-mode"],
  conceptos: {
    "b3ng-proposer": { n: "proponer: Je vous propose de…, Que diriez-vous de… ?, Et si on… ?; contraproponer: Je comprends, mais ne pourrait-on pas plutôt… ?; ceder: Je suis prêt(e) à (+ inf.) …, à condition que (+ subj.)", b: "gr" },
    "b3ng-accord": { n: "llegar a un acuerdo: trouver un terrain d'entente, couper la poire en deux, faire un compromis, Marché conclu !; frases que alejan: C'est à prendre ou à laisser, Hors de question !", b: "gr" }
  },
  video: {
    titulo: "Negociar sin pelear", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/moneda", grande: "un terrain d'entente", seg: [
        { es: "Hola. Negociar es proponer, ceder un poco y cerrar el trato." } ] },
      { v: "frase", filas: [
          { nota: "proponer", p: 1, partes: [["Que diriez-vous d'une réduction de 10 % ?", "-", 1]] },
          { nota: "condición", p: 2, partes: [["Je suis prête à signer, à condition que la livraison soit gratuite.", "-", 2]] },
          { nota: "acuerdo", p: 3, partes: [["Coupons la poire en deux.", "-", 3]] } ], seg: [
        { fr: "Que diriez-vous d'une réduction de 10 % ?", p: 1 }, { fr: "Je suis prête à signer, à condition que la livraison soit gratuite.", p: 2 }, { fr: "Coupons la poire en deux.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Estoy dispuesto a aceptar.»", o: ["Je suis prêt à accepter.", "Je suis prêt de accepter."], a: 0,
        bien: "¡Sí! Prêt à + infinitivo.", mal: "Se dice prêt à.",
        seg: [ { es: "Pausa. Prêt à." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Que diriez-vous de", "à condition que", "prêt à", "terrain d'entente", "Marché conclu !"], seg: [
        { es: "Proponer, condicionar, acordar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La bicicleta de segunda mano", img: "bg-paris", yo: "camila",
    escena: "Camila quiere comprar una bicicleta de segunda mano en un mercadillo.",
    pj: PJ,
    lineas: [
      ["vendeur", "Ce vélo coûte 200 euros. C'est à prendre ou à laisser.", "Esta bicicleta cuesta 200 euros. Lo toma o lo deja."],
      ["camila", "Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente ? Que diriez-vous de 150 euros ?", "Entiendo su postura, pero ¿no podríamos encontrar un punto de acuerdo? ¿Qué le parecerían 150 euros?"],
      ["vendeur", "150, hors de question ! Mais je suis prêt à baisser le prix si vous achetez aussi le casque.", "¡150, ni hablar! Pero estoy dispuesto a bajar el precio si compra también el casco."],
      ["camila", "Coupons la poire en deux : 175 euros avec le casque, à condition que vous me donniez l'antivol. — Marché conclu !", "Partamos la diferencia: 175 euros con el casco, siempre que me dé el candado. — ¡Trato hecho!"]
    ],
    fijate: "Fíjate: ne pourrait-on pas, un terrain d'entente, Que diriez-vous de, prêt à baisser, Coupons la poire en deux, à condition que vous me donniez (subjuntivo), Marché conclu !"
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Proponer, ceder y cerrar",
      idea: "Proponer: Je vous propose de…, Que diriez-vous de… ? (¿qué le parecería…?), Et si on… ? Contraproponer: Je comprends, mais ne pourrait-on pas plutôt… ? Ceder con condiciones: Je suis prêt(e) à (+ infinitivo; nunca «prêt de») accepter, à condition que (+ subjuntivo) vous payiez avant vendredi. Buscar el acuerdo: trouver un terrain d'entente, couper la poire en deux (partir la diferencia), faire un compromis. Cerrar: Marché conclu ! Frases que alejan el acuerdo: C'est à prendre ou à laisser, Hors de question !, Ce n'est pas négociable.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Efecto"], [
        ["Que diriez-vous de… ? · Je vous propose de…", "¿Qué le parecería…? · Le propongo…", "proponer"],
        ["Ne pourrait-on pas plutôt… ?", "¿No podríamos más bien…?", "contraproponer"],
        ["Je suis prêt à accepter. · Je suis prêt à baisser le prix si vous achetez deux articles. · prêt", "Estoy dispuesto a aceptar. · Estoy dispuesto a bajar el precio si compra dos artículos.", "ceder"],
        ["à condition que… · J'accepte, à condition que vous payiez avant vendredi. · payiez", "siempre que… · Acepto, siempre que pague antes del viernes.", "ceder con condición"],
        ["Coupons la poire en deux. · Trouvons un terrain d'entente. · entente · Faisons un compromis", "Partamos la diferencia. · Busquemos un punto de acuerdo. · Hagamos un compromiso", "acuerdo"],
        ["Marché conclu !", "¡Trato hecho!", "cerrar el trato"],
        ["Je comprends votre position. · On pourrait faire un compromis. · Je suis prêt à faire un effort. · Que diriez-vous de… ?", "Entiendo su postura. · Podríamos llegar a un compromiso. · Estoy dispuesto a hacer un esfuerzo.", "Acerca"],
        ["C'est à prendre ou à laisser. · Hors de question ! · Je ne bougerai pas. · Ce n'est pas négociable.", "Lo toma o lo deja. · ¡Ni hablar! · No me moveré. · No es negociable.", "Aleja"],
        ["Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente ?", "Entiendo su postura, pero ¿no podríamos encontrar un punto de acuerdo?", "negociar"]
      ]],
      ej: [["Que diriez-vous d'une réduction de 10 % ?", "¿Qué le parecería una rebaja del 10 %?"], ["Je suis prête à signer, à condition que la livraison soit gratuite.", "Estoy dispuesta a firmar, siempre que el envío sea gratuito."], ["Coupons la poire en deux.", "Partamos la diferencia."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je suis prêt de accepter.", "Je suis prêt à accepter.", "prêt à + infinitivo."], ["à condition que vous payez", "à condition que vous payiez", "à condition que + subjuntivo."], ["Je suis près à baisser le prix.", "Je suis prêt à baisser le prix.", "prêt (dispuesto) ≠ près (cerca)."]] }
  ],
  ejemplos: [
    { sit: "«¿Qué le parecería…?»", resp: "Que diriez-vous de… ?", pasos: ["Condicional de cortesía."], porque: "Proponer." },
    { sit: "«Coupons la poire en deux.» significa…", resp: "Partamos la diferencia.", pasos: ["Cada uno cede la mitad."], porque: "Acuerdo." },
    { sit: "«Estoy dispuesto a aceptar.»", resp: "Je suis prêt à accepter.", pasos: ["prêt à."], porque: "Ceder." }
  ],
  comprueba: [
    { q: "«Que diriez-vous de… ?» sirve para…", o: ["proponer", "rechazar"], a: 0, b: "gr", porque: "Propuesta." },
    { q: "«à condition que» va con…", o: ["subjuntivo", "indicativo"], a: 0, b: "gr", porque: "à condition que vous payiez." },
    { q: "«C'est à prendre ou à laisser» …", o: ["aleja el acuerdo", "acerca el acuerdo"], a: 0, b: "gr", porque: "Sin margen." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ng-accord"], k: "sort", ask: "¿Acerca o aleja el acuerdo?", q: "Clasifica.", cats: ["Acerca", "Aleja"], items: [["Je comprends votre position.", 0], ["On pourrait faire un compromis.", 0], ["Je suis prêt à faire un effort.", 0], ["Que diriez-vous de… ?", 0], ["C'est à prendre ou à laisser.", 1], ["Hors de question !", 1], ["Je ne bougerai pas.", 1], ["Ce n'est pas négociable.", 1]], pista: "¿Deja margen?", why: "Negociación." },
    { fase: "guiada", c: ["b3ng-proposer"], k: "choice", ask: "«¿Qué le parecería…?»", q: "«___»", o: ["Que diriez-vous de… ?", "Qu'est-ce que vous dites de… ?"], a: 0, pista: "Condicional.", why: "<b>Que diriez-vous</b>." },
    { fase: "guiada", c: ["b3ng-accord"], k: "choice", es: true, ask: "«Coupons la poire en deux.» significa…", q: "Elige.", o: ["Partamos la diferencia.", "Cortemos la pera."], a: 0, pista: "Expresión.", why: "Acuerdo." },
    { fase: "indep", c: ["b3ng-proposer"], k: "choice", ask: "«Estoy dispuesto a aceptar.»", q: "«___»", o: ["Je suis prêt à accepter.", "Je suis prêt de accepter."], a: 0, why: "<b>prêt à</b>." },
    { fase: "indep", c: ["b3ng-accord"], k: "fill", ask: "«un punto de acuerdo»", q: "Trouvons un terrain d'___ .", acc: ["entente"], why: "<b>entente</b>." },
    { fase: "indep", c: ["b3ng-proposer"], k: "fill", ask: "Subjuntivo de payer (vous).", q: "J'accepte, à condition que vous ___ avant vendredi.", acc: ["payiez"], why: "<b>payiez</b>." },
    { fase: "aplica", c: ["b3ng-proposer", "b3ng-accord"], k: "match", ask: "Une cada frase con su función.", q: "Frase → función", pairs: [["Je vous propose de…", "proponer"], ["Ne pourrait-on pas plutôt… ?", "contraproponer"], ["à condition que…", "ceder con condición"], ["Marché conclu !", "cerrar el trato"]], why: "Funciones." },
    { fase: "aplica", c: ["b3ng-proposer"], k: "spot", ask: "Encuentra el error.", s: "Je suis [près] à baisser le prix si vous achetez deux articles .", fix: "prêt", why: "<b>prêt</b>." },
    { fase: "aplica", c: ["b3ng-proposer"], k: "choice", ask: "Contraproponer con cortesía:", q: "«___»", o: ["Je comprends, mais ne pourrait-on pas plutôt… ?", "Non, c'est nul."], a: 0, why: "Cortesía." },
    { fase: "dominio", c: ["b3ng-accord"], k: "order", ask: "Ordena: «Hagamos un compromiso».", tokens: ["Faisons", "un", "compromis"], why: "<b>Faisons un compromis</b>" },
    { fase: "dominio", c: ["b3ng-accord"], k: "choice", es: true, ask: "«Hors de question !» …", q: "Elige.", o: ["aleja el acuerdo", "acerca el acuerdo"], a: 0, why: "¡Ni hablar!" },
    { fase: "dominio", c: ["b3ng-proposer", "b3ng-accord"], k: "listen", say: "Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente ?", acc: ["Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente ?", "Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente?"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Je comprends votre position, mais ne pourrait-on pas trouver un terrain d'entente ?</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila"], previo: [] }
};

/* ── 35. Comprendre la radio et les podcasts ── */
E["b21-radio"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Comprendre la radio et les podcasts",
  objetivo: {
    que: "Vas a entender programas de radio, entrevistas y podcasts: el tipo de programa, quién habla, qué opina cada uno y los conectores de giro.",
    corto: "Bienvenue dans notre émission consacrée à l'environnement. · Notre invité est sociologue.",
    podras: ["Reconocer los géneros: un journal, un reportage, une interview, un débat, une chronique, un podcast.", "Aplicar la estrategia: leer las preguntas antes, buscar palabras clave, cifras y conectores de giro (or, pourtant, en revanche).", "Distinguir hechos de opiniones (selon moi, je trouve, il faudrait)."],
    iconos: ["ic2/audifonos", "ic2/microfono", "ic2/movil"],
    previos: ["La prensa (lección 7), los conectores lógicos (lección 13) y los medios (B1.1, lección 58)."],
    capacidad: "Ahora sigues un programa de radio francés sin perderte."
  },
  requiere: R("b1md-presse", "b3pr-genres", "b3cl-or"), recupera: ["b3cl-or"],
  conceptos: {
    "b3ra-genres": { n: "géneros: un journal (las noticias), un reportage (investigación sobre el terreno), une interview (preguntas a un invitado), un débat, une chronique (sección de opinión regular), un podcast; fórmulas: Bienvenue dans notre émission consacrée à…, Notre invité(e) est…, après une courte pause", b: "gr" },
    "b3ra-strategie": { n: "estrategia: leer las preguntas antes, buscar la idea general, palabras clave, cifras y conectores de giro (or, pourtant, en revanche); distinguir hecho (Le taux de chômage est de 7 %) y opinión (Je trouve…, selon moi)", b: "gr" }
  },
  video: {
    titulo: "Escuchar la radio", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/audifonos", grande: "une émission", seg: [
        { es: "Hola. No hace falta entender cada palabra." } ] },
      { v: "frase", filas: [
          { nota: "apertura", p: 1, partes: [["Bienvenue dans notre émission consacrée à l'environnement.", "-", 1]] },
          { nota: "invitado", p: 2, partes: [["Notre invité est sociologue.", "-", 2]] },
          { nota: "pausa", p: 3, partes: [["Restez avec nous, on se retrouve après une courte pause.", "-", 3]] } ], seg: [
        { fr: "Bienvenue dans notre émission consacrée à l'environnement.", p: 1 }, { fr: "Notre invité est sociologue.", p: 2 }, { fr: "Restez avec nous, on se retrouve après une courte pause.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Qué haces primero?", o: ["leer las preguntas", "entender cada palabra"], a: 0, es: true,
        bien: "¡Sí! Así anticipas.", mal: "Lo global es lo primero.",
        seg: [ { es: "Pausa. Primero las preguntas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une émission", "une chronique", "une interview", "un reportage", "or", "pourtant"], seg: [
        { es: "Género, quién habla, hechos y opiniones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pódcast de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Hugo le pone a Camila un programa de radio en el móvil.",
    pj: PJ,
    lineas: [
      ["hugo", "Écoute : « Bonsoir à tous et bienvenue dans notre émission consacrée aux nouvelles technologies. Notre invitée aujourd'hui est une célèbre écrivaine. »", "Escucha: «Buenas noches a todos y bienvenidos a nuestro programa dedicado a las nuevas tecnologías. Nuestra invitada hoy es una escritora famosa.»"],
      ["camila", "Je ne comprends pas tous les mots !", "¡No entiendo todas las palabras!"],
      ["hugo", "Ce n'est pas grave. Cherche l'idée générale et les connecteurs : or, pourtant, en revanche. Et distingue les faits des opinions.", "No importa. Busca la idea general y los conectores: ahora bien, sin embargo, en cambio. Y distingue los hechos de las opiniones."],
      ["camila", "D'accord. « Le taux de chômage est de 7 % », c'est un fait. « Je trouve cette loi injuste », c'est une opinion. Et après, c'est la chronique de Marie ?", "Vale. «La tasa de desempleo es del 7 %» es un hecho. «Me parece injusta esta ley» es una opinión. ¿Y luego viene la sección de Marie?"]
    ],
    fijate: "Fíjate: une émission consacrée à, Notre invitée, la chronique, los conectores or, pourtant, en revanche, y la diferencia entre un fait y une opinion."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Géneros y estrategia",
      idea: "Géneros: un journal (las noticias), un reportage (investigación sobre el terreno), une interview (preguntas a un invitado), un débat (confrontación de opiniones), une chronique (sección de opinión o comentario regular: la chronique de Marie), un podcast. Fórmulas de radio: Bienvenue dans notre émission consacrée à… (concuerda con émission), Notre invité(e) est…, On se retrouve après une courte pause. Estrategia: antes, leer las preguntas y anticipar; durante, buscar palabras clave, cifras, nombres y conectores de giro (or, pourtant, en revanche); distinguir hechos (datos) de opiniones (je trouve, selon moi, il faudrait). Lo global es lo primero: no te bloquees con cada palabra.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Clave"], [
        ["un journal · un reportage · une interview · un débat", "las noticias · investigación sobre el terreno · preguntas a un invitado · confrontación de opiniones", "géneros"],
        ["la chronique de Marie", "una sección de opinión o comentario regular", "género"],
        ["or · pourtant · en revanche · or, pourtant", "ahora bien · sin embargo · en cambio", "conectores de giro"],
        ["leer las preguntas", "leer las preguntas", "estrategia"],
        ["Notre invitée aujourd'hui est une célèbre écrivaine. · invitée · Notre invité est journaliste", "Nuestra invitada hoy es una escritora famosa. · Nuestro invitado es periodista", "invitado"],
        ["On se retrouve après une courte pause. · pause", "Volvemos tras una breve pausa.", "pausa"],
        ["Bienvenue dans notre émission consacrée à la santé. · consacrée", "Bienvenidos a nuestro programa dedicado a la salud.", "apertura"],
        ["Le taux de chômage est de 7 %. · La loi a été votée hier. · Le festival a accueilli 10 000 personnes. · Le musée ouvre à 9 h.", "La tasa de desempleo es del 7 %. · La ley se votó ayer. · El festival recibió a 10 000 personas. · El museo abre a las 9.", "Hecho"],
        ["Je trouve cette loi injuste. · Il faudrait agir plus vite. · C'est, selon moi, une erreur. · Ce festival est formidable.", "Me parece injusta esta ley. · Habría que actuar más rápido. · Es, en mi opinión, un error. · Este festival es estupendo.", "Opinión"],
        ["Bonsoir à tous et bienvenue dans notre émission consacrée aux nouvelles technologies.", "Buenas noches a todos y bienvenidos a nuestro programa dedicado a las nuevas tecnologías.", "apertura"]
      ]],
      ej: [["Bienvenue dans notre émission consacrée à l'environnement.", "Bienvenidos a nuestro programa dedicado al medio ambiente."], ["Notre invité est sociologue.", "Nuestro invitado es sociólogo."], ["Restez avec nous, on se retrouve après une courte pause.", "Quédense con nosotros, volvemos tras una breve pausa."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Intentar entender cada palabra", "Buscar la idea general y los conectores", "La comprensión global es lo primero."], ["notre émission consacré à…", "notre émission consacrée à…", "émission es femenino."], ["Tomar una opinión por un hecho", "Je trouve… / selon moi → opinión", "Fíjate en quién opina."]] }
  ],
  ejemplos: [
    { sit: "¿Qué es «la chronique de Marie»?", resp: "una sección de opinión o comentario regular", pasos: ["Género de radio."], porque: "Chronique." },
    { sit: "Escuchando, ¿qué palabras anuncian un giro?", resp: "or, pourtant", pasos: ["Conectores de oposición."], porque: "Giro." },
    { sit: "¿Qué estrategia usas antes de escuchar?", resp: "leer las preguntas", pasos: ["Anticipar."], porque: "Estrategia." }
  ],
  comprueba: [
    { q: "«Une chronique» en la radio es…", o: ["una sección de opinión regular", "un crónico problema"], a: 0, b: "gr", porque: "Género." },
    { q: "«Or» y «pourtant» anuncian…", o: ["un giro en el argumento", "una cifra"], a: 0, b: "gr", porque: "Conectores." },
    { q: "«Je trouve cette loi injuste» es…", o: ["una opinión", "un hecho"], a: 0, b: "gr", porque: "Je trouve." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ra-strategie"], k: "sort", ask: "¿Hecho u opinión?", q: "Clasifica.", cats: ["Hecho", "Opinión"], items: [["Le taux de chômage est de 7 %.", 0], ["La loi a été votée hier.", 0], ["Le festival a accueilli 10 000 personnes.", 0], ["Le musée ouvre à 9 h.", 0], ["Je trouve cette loi injuste.", 1], ["Il faudrait agir plus vite.", 1], ["C'est, selon moi, une erreur.", 1], ["Ce festival est formidable.", 1]], pista: "¿Se puede comprobar?", why: "Hecho u opinión." },
    { fase: "guiada", c: ["b3ra-genres"], k: "choice", es: true, ask: "«La chronique de Marie» es…", q: "Elige.", o: ["una sección de opinión o comentario regular", "una enfermedad crónica"], a: 0, pista: "Radio.", why: "Género." },
    { fase: "guiada", c: ["b3ra-strategie"], k: "choice", ask: "Escuchando, ¿qué palabras anuncian un giro?", q: "Elige.", o: ["or, pourtant", "et, aussi"], a: 0, pista: "Oposición.", why: "<b>or, pourtant</b>." },
    { fase: "indep", c: ["b3ra-strategie"], k: "choice", es: true, ask: "¿Qué estrategia usas antes de escuchar?", q: "Elige.", o: ["leer las preguntas", "traducir cada palabra"], a: 0, why: "Anticipar." },
    { fase: "indep", c: ["b3ra-genres"], k: "fill", ask: "«invitada» (invité, femenino).", q: "Notre ___ aujourd'hui est une célèbre écrivaine.", acc: ["invitée"], why: "<b>invitée</b>." },
    { fase: "indep", c: ["b3ra-genres"], k: "fill", ask: "«pausa»", q: "On se retrouve après une courte ___ .", acc: ["pause"], why: "<b>pause</b>." },
    { fase: "aplica", c: ["b3ra-genres"], k: "match", ask: "Une cada género con su descripción.", q: "Género → descripción", pairs: [["un reportage", "investigación sobre el terreno"], ["une interview", "preguntas a un invitado"], ["un débat", "confrontación de opiniones"], ["un journal", "las noticias"]], why: "Géneros." },
    { fase: "aplica", c: ["b3ra-genres"], k: "spot", ask: "Encuentra el error.", s: "Bienvenue dans notre émission [consacré] à la santé .", fix: "consacrée", why: "<b>consacrée</b>." },
    { fase: "aplica", c: ["b3ra-strategie"], k: "choice", es: true, ask: "«Il faudrait agir plus vite» es…", q: "Elige.", o: ["una opinión", "un hecho"], a: 0, why: "Il faudrait." },
    { fase: "dominio", c: ["b3ra-genres"], k: "order", ask: "Ordena: «Nuestro invitado es periodista».", tokens: ["Notre invité", "est", "journaliste"], why: "<b>Notre invité est journaliste</b>" },
    { fase: "dominio", c: ["b3ra-genres"], k: "choice", ask: "Abrir un programa:", q: "«___»", o: ["Bienvenue dans notre émission consacrée à l'environnement.", "Salut, ici on parle de trucs."], a: 0, why: "Fórmula." },
    { fase: "dominio", c: ["b3ra-genres", "b3ra-strategie"], k: "listen", say: "Bonsoir à tous et bienvenue dans notre émission consacrée aux nouvelles technologies.", acc: ["Bonsoir à tous et bienvenue dans notre émission consacrée aux nouvelles technologies."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Bonsoir à tous et bienvenue dans notre émission consacrée aux nouvelles technologies.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie"], previo: [] }
};

/* ── 36. Comprendre l'implicite et l'ironie ── */
E["b21-implicite"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Comprendre l'implicite et l'ironie",
  objetivo: {
    que: "Vas a entender lo que no se dice: presuposiciones, sobreentendidos, ironía y litote.",
    corto: "Tu es encore en retard ? Quelle surprise ! · Ce n'est pas mauvais du tout.",
    podras: ["Ver la presuposición (Il a arrêté de fumer → antes fumaba) y el sobreentendido (Il fait froid ici… → cierra la ventana).", "Reconocer la ironía por el contexto y el tono: Bravo, tu as encore cassé un verre !", "Entender la litote, decir menos para sugerir más: Ce n'est pas bête (= es inteligente)."],
    iconos: ["ic2/pregunta", "ic2/bombilla", "ic2/corazon"],
    previos: ["La modalización (lección 6), atenuar (B1.2, lección 40) y las expresiones idiomáticas (B1.1, lección 66)."],
    capacidad: "Ahora pillas la ironía y las indirectas de los franceses."
  },
  requiere: R("b3mo-echelle", "b2at-limiter", "b1ei-humeur"), recupera: ["b3mo-echelle"],
  conceptos: {
    "b3im-sous": { n: "lo implícito: presuposición (Elle a recommencé à travailler → antes trabajaba y paró), sobreentendido (Il fait chaud ici, non ? → abran la ventana; Tu as vu l'heure ? → es tarde)", b: "gr" },
    "b3im-ironie": { n: "ironía: decir lo contrario de lo que se piensa (Génial, il pleut pour mon mariage !; Quelle surprise !), el contexto decide; litote: decir menos para sugerir más (Ce n'est pas bête = es inteligente; Ce n'est pas donné = es caro; Il n'est pas très bavard = habla poco)", b: "gr" }
  },
  video: {
    titulo: "Lo que no se dice", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "Quelle surprise !", seg: [
        { es: "Hola. A veces la frase dice lo contrario de lo que piensa." } ] },
      { v: "frase", filas: [
          { nota: "ironía", p: 1, partes: [["Tu es encore en retard ? Quelle surprise !", "-", 1]] },
          { nota: "litote", p: 2, partes: [["Ce n'est pas mauvais du tout.", "-", 2]] },
          { nota: "sobreentendido", p: 3, partes: [["Tu as vu l'heure ?", "-", 3]] } ], seg: [
        { fr: "Tu es encore en retard ? Quelle surprise !", p: 1 }, { fr: "Ce n'est pas mauvais du tout.", p: 2 }, { fr: "Tu as vu l'heure ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Génial, il pleut pour mon mariage !» Le parece…", o: ["horrible", "genial"], a: 0, es: true,
        bien: "¡Sí! Es ironía.", mal: "Es ironía: dice lo contrario.",
        seg: [ { es: "Pausa. El contexto decide." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Quelle surprise !", "Ce n'est pas bête", "Tu as vu l'heure ?", "Ce n'est pas donné"], seg: [
        { es: "Presuposición, sobreentendido, ironía y litote.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Hugo llega tarde", img: "bg-cafe", yo: "camila",
    escena: "Camila espera a Hugo en el café desde hace media hora.",
    pj: PJ,
    lineas: [
      ["camila", "Ah, bravo ! Tu es encore en retard ? Quelle surprise ! Tu es toujours aussi ponctuel…", "¡Ah, bravo! ¿Otra vez llegas tarde? ¡Qué sorpresa! Siempre tan puntual…"],
      ["hugo", "Désolé ! Il y avait une grève. Quelle chance, une grève ! Et j'ai oublié mon portefeuille…", "¡Perdón! Había huelga. ¡Qué suerte, una huelga! Y olvidé la cartera…"],
      ["camila", "Merci pour ton aide… Tu as vu l'heure ? Le café ici, ce n'est pas donné.", "Gracias por tu ayuda… ¿Has visto la hora? El café aquí no es precisamente barato."],
      ["hugo", "Je t'invite la prochaine fois. Au fait, ton idée pour l'exposé, ce n'est pas bête : c'est même très intelligent.", "Te invito la próxima vez. Por cierto, tu idea para la exposición no es tonta: es incluso muy inteligente."]
    ],
    fijate: "Fíjate: Quelle surprise !, toujours aussi ponctuel…, Quelle chance, une grève ! (ironía); Tu as vu l'heure ? (sobreentendido: es tarde); ce n'est pas donné, ce n'est pas bête (litote)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Implícito, ironía y litote",
      idea: "Presuposición: lo que la frase da por hecho (Il a arrêté de fumer → antes fumaba; Elle a recommencé à travailler → antes trabajaba y paró). Sobreentendido: lo que se quiere decir sin decirlo (Il fait chaud ici, non ? → abran la ventana; Tu as vu l'heure ? → es tarde). Ironía: decir lo contrario de lo que se piensa; la delatan el contexto y el tono (Génial, il pleut pour mon mariage ! → le parece horrible; Quelle surprise ! ante algo previsible). Litote: decir menos para sugerir más (Ce n'est pas bête = es inteligente; Ce n'est pas mauvais du tout = está bueno; Ce n'est pas donné = es caro).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Se entiende"], [
        ["Il fait chaud ici, non ?", "Hace calor aquí, ¿no?", "que abran la ventana o el aire"],
        ["Elle a recommencé à travailler.", "Volvió a trabajar.", "que antes había trabajado y paró"],
        ["Génial, il pleut pour mon mariage !", "¡Genial, llueve en mi boda!", "le parece horrible"],
        ["Tu as vu l'heure ? · heure", "¿Has visto la hora?", "es tarde"],
        ["Ce n'est pas bête : c'est même très intelligent. · bête", "No es tonto: es incluso muy inteligente.", "litote: es inteligente"],
        ["Ce n'est pas donné. · Ce n'est pas mauvais du tout. · mauvais", "No es regalado. · No está nada mal.", "es caro · está bueno"],
        ["Il n'est pas très bavard.", "No es muy hablador.", "habla poco"],
        ["Merci pour ton aide… (sin ayuda)", "Gracias por tu ayuda…", "reproche"],
        ["Merci beaucoup pour ce cadeau ! · Il fait 30 degrés. · Le train part à 8 h. · J'adore ce livre, je te le conseille.", "¡Muchas gracias por el regalo! · Hace 30 grados. · El tren sale a las 8. · Me encanta este libro, te lo recomiendo.", "Literal"],
        ["Bravo, tu as encore cassé un verre ! · Quelle chance, une grève ! · Tu es toujours aussi ponctuel… · Ce n'est pas le Pérou.", "¡Bravo, otra vez rompiste un vaso! · ¡Qué suerte, una huelga! · Siempre tan puntual… · No es una fortuna.", "Irónico / implícito"],
        ["Quelle surprise ! · Ah, bravo ! Tu as encore oublié tes clés, quelle surprise !", "¡Qué sorpresa! · ¡Ah, bravo! Otra vez olvidaste las llaves, ¡qué sorpresa!", "ironía"]
      ]],
      ej: [["Tu es encore en retard ? Quelle surprise !", "¿Otra vez llegas tarde? ¡Qué sorpresa!"], ["Ce n'est pas mauvais du tout.", "No está nada mal (= está bueno)."], ["Tu as vu l'heure ?", "¿Has visto qué hora es? (= es tarde)"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["«Quelle surprise !» = siempre sorpresa real", "A veces es ironía", "El contexto decide."], ["Ce plat n'est pas bon du tout : je l'ai adoré !", "Ce plat n'est pas mauvais du tout : je l'ai adoré !", "La litote niega lo contrario."], ["«Tu as vu l'heure ?» = pregunta por la hora", "= es tarde, hay que irse", "Sobreentendido."]] }
  ],
  ejemplos: [
    { sit: "«Il fait chaud ici, non ?» ¿Qué se entiende?", resp: "que abran la ventana o el aire", pasos: ["Sobreentendido."], porque: "Petición indirecta." },
    { sit: "«Elle a recommencé à travailler.» ¿Qué se presupone?", resp: "que antes había trabajado y paró", pasos: ["re- + commencer."], porque: "Presuposición." },
    { sit: "«Génial, il pleut pour mon mariage !» ¿Qué siente?", resp: "le parece horrible", pasos: ["Contexto negativo."], porque: "Ironía." }
  ],
  comprueba: [
    { q: "La ironía consiste en…", o: ["decir lo contrario de lo que se piensa", "decir la verdad con humor"], a: 0, b: "gr", porque: "Contrario." },
    { q: "«Ce n'est pas bête» quiere decir…", o: ["es inteligente", "es tonto"], a: 0, b: "gr", porque: "Litote." },
    { q: "«Ce n'est pas donné» quiere decir…", o: ["es caro", "es gratis"], a: 0, b: "gr", porque: "Litote." }
  ],
  practica: [
    { fase: "guiada", c: ["b3im-ironie"], k: "sort", ask: "¿Literal o irónico / implícito?", q: "Clasifica.", cats: ["Literal", "Irónico / implícito"], items: [["Merci beaucoup pour ce cadeau !", 0], ["Il fait 30 degrés.", 0], ["Le train part à 8 h.", 0], ["J'adore ce livre, je te le conseille.", 0], ["Bravo, tu as encore cassé un verre !", 1], ["Quelle chance, une grève !", 1], ["Tu es toujours aussi ponctuel…", 1], ["Ce n'est pas le Pérou.", 1]], pista: "¿Contexto negativo?", why: "Ironía." },
    { fase: "guiada", c: ["b3im-sous"], k: "choice", es: true, ask: "«Il fait chaud ici, non ?» ¿Qué se entiende?", q: "Elige.", o: ["que abran la ventana o el aire", "que hace buen tiempo"], a: 0, pista: "Petición.", why: "Sobreentendido." },
    { fase: "guiada", c: ["b3im-sous"], k: "choice", es: true, ask: "«Elle a recommencé à travailler.» ¿Qué se presupone?", q: "Elige.", o: ["que antes había trabajado y paró", "que nunca había trabajado"], a: 0, pista: "re-commencer.", why: "Presuposición." },
    { fase: "indep", c: ["b3im-ironie"], k: "choice", es: true, ask: "«Génial, il pleut pour mon mariage !» Le parece…", q: "Elige.", o: ["le parece horrible", "le parece genial"], a: 0, why: "Ironía." },
    { fase: "indep", c: ["b3im-ironie"], k: "fill", ask: "«tonto» (litote).", q: "Ce n'est pas ___ : c'est même très intelligent.", acc: ["bête"], why: "<b>bête</b>." },
    { fase: "indep", c: ["b3im-sous"], k: "fill", ask: "«¿Has visto la hora?»", q: "Tu as vu l'___ ? Il faut partir !", acc: ["heure"], why: "<b>heure</b>." },
    { fase: "aplica", c: ["b3im-sous", "b3im-ironie"], k: "match", ask: "Une cada frase con lo que se entiende.", q: "Frase → se entiende", pairs: [["Tu as vu l'heure ?", "es tarde"], ["Ce n'est pas donné.", "es caro"], ["Il n'est pas très bavard.", "habla poco"], ["Merci pour ton aide… (sin ayuda)", "reproche"]], why: "Implícito." },
    { fase: "aplica", c: ["b3im-ironie"], k: "spot", ask: "Encuentra el error (litote).", s: "Ce plat n'est pas [bon] du tout : je l'ai adoré !", fix: "mauvais", why: "<b>mauvais</b>." },
    { fase: "aplica", c: ["b3im-ironie"], k: "choice", es: true, ask: "«Tu es toujours aussi ponctuel…» (llega tarde) es…", q: "Elige.", o: ["un reproche irónico", "un elogio"], a: 0, why: "Ironía." },
    { fase: "dominio", c: ["b3im-ironie"], k: "order", ask: "Ordena: «¡Qué sorpresa!»", tokens: ["Quelle", "surprise", "!"], why: "<b>Quelle surprise !</b>" },
    { fase: "dominio", c: ["b3im-ironie"], k: "choice", es: true, ask: "«Ce n'est pas bête» quiere decir…", q: "Elige.", o: ["es inteligente", "es tonto"], a: 0, why: "Litote." },
    { fase: "dominio", c: ["b3im-ironie", "b3im-sous"], k: "listen", say: "Ah, bravo ! Tu as encore oublié tes clés, quelle surprise !", acc: ["Ah, bravo ! Tu as encore oublié tes clés, quelle surprise !", "Ah, bravo! Tu as encore oublié tes clés, quelle surprise!"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ah, bravo ! Tu as encore oublié tes clés, quelle surprise !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Pérou"], previo: [] }
};

/* ── B2.1·7 Leer y procesar información · 37. Les titres de presse ── */
E["b21-titres-presse"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les titres de presse : jeux de mots et ellipses",
  objetivo: {
    que: "Vas a descifrar los titulares franceses: frases nominales, elipsis, dos puntos, preguntas, siglas y juegos de palabras.",
    corto: "Retraites : le gouvernement recule. · Les Bleus voient rouge.",
    podras: ["Leer titulares nominales (Hausse record du prix de l'essence) y con dos puntos (Logement : la crise s'aggrave).", "Entender los juegos de palabras y las referencias culturales: Les Bleus (la selección), voir rouge (enfadarse).", "Reconocer las siglas frecuentes: UE, ONU, PME, RATP, SNCF."],
    iconos: ["ic2/pergamino", "ic2/bandera", "ic2/bombilla"],
    previos: ["La prensa (lección 7) y la nominalización (lección 12)."],
    capacidad: "Ahora entiendes los titulares de Le Monde o Libération de un vistazo."
  },
  requiere: R("b3pr-titre", "b3no-phrase", "b1ei-autres"), recupera: ["b3pr-titre"],
  conceptos: {
    "b3tp-forme": { n: "titulares nominales (Hausse des prix, Grève à la SNCF, Victoire des Bleus), con dos puntos (Logement : la crise s'aggrave), con verbo en presente (Le président recule), preguntas (Faut-il avoir peur de l'IA ?); siglas: UE, ONU, PME, RATP, SNCF", b: "gr" },
    "b3tp-jeux": { n: "juegos de palabras y cultura: Les Bleus (la selección francesa), voir rouge (enfadarse mucho), Les Bleus voient rouge (juego de colores), Le prix de la liberté; reculer (dar marcha atrás), flamber (dispararse)", b: "gr" }
  },
  video: {
    titulo: "Leer titulares", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Les Bleus voient rouge", seg: [
        { es: "Hola. Los titulares franceses juegan con las palabras." } ] },
      { v: "frase", filas: [
          { nota: "dos puntos", p: 1, partes: [["Retraites : le gouvernement recule.", "-", 1]] },
          { nota: "juego", p: 2, partes: [["Les Bleus voient rouge.", "-", 2]] },
          { nota: "nominal", p: 3, partes: [["Hausse record du prix de l'essence.", "-", 3]] } ], seg: [
        { fr: "Retraites : le gouvernement recule.", p: 1 }, { fr: "Les Bleus voient rouge.", p: 2 }, { fr: "Hausse record du prix de l'essence.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Les Bleus gagnent !» Les Bleus son…", o: ["la selección francesa", "los tristes"], a: 0, es: true,
        bien: "¡Sí! Por el color de la camiseta.", mal: "Es la selección francesa.",
        seg: [ { es: "Pausa. Referencia cultural." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Hausse", "Grève", "recule", "Les Bleus", "voir rouge"], seg: [
        { es: "Nominales, dos puntos, juegos y siglas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El quiosco", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo miran las portadas en un quiosco de París.",
    pj: PJ,
    lineas: [
      ["camila", "« Les Bleus voient rouge. » Les bleus… ce sont des gens tristes ?", "«Les Bleus voient rouge.» Les bleus… ¿son gente triste?"],
      ["hugo", "Non ! Les Bleus, c'est l'équipe de France. Et « voir rouge », c'est se mettre en colère. C'est un jeu de couleurs.", "¡No! Les Bleus es la selección de Francia. Y «voir rouge» es enfadarse. Es un juego de colores."],
      ["camila", "Et là : « Grève à la SNCF », « Hausse des températures : alerte canicule ». Il n'y a pas de verbe !", "Y aquí: «Huelga en la SNCF», «Subida de las temperaturas: alerta por ola de calor». ¡No hay verbo!"],
      ["hugo", "Ce sont des titres nominaux. Et celui-ci a un verbe : « Logement : la crise s'aggrave ». Et « Le gouvernement recule sur la réforme ».", "Son titulares nominales. Y este tiene verbo: «Vivienda: la crisis se agrava». Y «El gobierno da marcha atrás en la reforma»."]
    ],
    fijate: "Fíjate: Les Bleus (la selección), voir rouge (enfadarse), Grève à la SNCF y Hausse des températures (nominales), Logement : la crise s'aggrave (dos puntos), recule (da marcha atrás)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cómo se construye un titular",
      idea: "Nominales, sin verbo: Hausse des prix, Grève à la SNCF, Victoire des Bleus, Fermeture de l'usine (el sustantivo es Hausse, nunca «Haussement»). Con dos puntos: tema + información (Logement : la crise s'aggrave; Retraites : le gouvernement recule). Con verbo en presente: Les prix flambent. Preguntas: Faut-il avoir peur de l'IA ? Juegos de palabras con expresiones o colores: Les Bleus (la selección francesa, por la camiseta) voient rouge (se enfadan mucho). Siglas: UE (Unión Europea), ONU (Naciones Unidas), PME (pequeña y mediana empresa), RATP (transporte de París), SNCF (los trenes).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Les Bleus · Les Bleus gagnent !", "la selección francesa · ¡Gana la selección!", "cultura"],
        ["Grève à la SNCF", "Huelga en la compañía de trenes", "nominal"],
        ["Les agriculteurs voient rouge.", "Los agricultores se enfadan mucho.", "voir rouge = enfadarse mucho"],
        ["Hausse des températures : alerte canicule. · Hausse", "Subida de las temperaturas: alerta por ola de calor.", "nominal + dos puntos"],
        ["Le gouvernement recule sur la réforme. · recule", "El gobierno da marcha atrás en la reforma.", "reculer"],
        ["UE · ONU · PME · RATP", "Unión Europea · Naciones Unidas · pequeña y mediana empresa · transporte de París", "siglas"],
        ["Victoire historique à Lyon · Fermeture de l'usine · Chute des ventes · Nouvelle grève dans les transports", "Victoria histórica en Lyon · Cierre de la fábrica · Caída de las ventas · Nueva huelga en el transporte", "Nominal"],
        ["Le président recule · Les prix flambent · Paris accueille le monde · L'hiver arrive tôt", "El presidente da marcha atrás · Los precios se disparan · París acoge al mundo · El invierno llega pronto", "Con verbo conjugado"],
        ["Hausse record des loyers dans les grandes villes.", "Subida récord de los alquileres en las grandes ciudades.", "nominal"],
        ["Logement : la crise s'aggrave · Logement : la crise s'aggrave dans les grandes villes.", "Vivienda: la crisis se agrava (en las grandes ciudades).", "dos puntos"]
      ]],
      ej: [["Retraites : le gouvernement recule.", "Pensiones: el gobierno da marcha atrás."], ["Les Bleus voient rouge.", "Los Bleus (la selección) se enfadan (juego de colores)."], ["Hausse record du prix de l'essence.", "Subida récord del precio de la gasolina."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les Bleus = los tristes", "Les Bleus = la selección francesa", "Referencia cultural."], ["Haussement record des loyers", "Hausse record des loyers", "El sustantivo es la hausse."], ["voir rouge = ver rojo", "voir rouge = enfadarse mucho", "Expresión."]] }
  ],
  ejemplos: [
    { sit: "«Les Bleus gagnent !» ¿Quiénes son les Bleus?", resp: "la selección francesa", pasos: ["Color de la camiseta."], porque: "Cultura." },
    { sit: "«Grève à la SNCF» significa…", resp: "Huelga en la compañía de trenes", pasos: ["SNCF = trenes."], porque: "Nominal." },
    { sit: "«Les agriculteurs voient rouge.» ¿Qué hacen?", resp: "enfadarse mucho", pasos: ["voir rouge."], porque: "Expresión." }
  ],
  comprueba: [
    { q: "«Les Bleus» en un titular son…", o: ["la selección francesa", "los tristes"], a: 0, b: "gr", porque: "Camiseta azul." },
    { q: "Un titular nominal…", o: ["no lleva verbo conjugado", "siempre es una pregunta"], a: 0, b: "gr", porque: "Hausse des prix." },
    { q: "«Le gouvernement recule» significa…", o: ["el gobierno da marcha atrás", "el gobierno avanza"], a: 0, b: "gr", porque: "reculer." }
  ],
  practica: [
    { fase: "guiada", c: ["b3tp-forme"], k: "sort", ask: "¿Nominal o con verbo conjugado?", q: "Clasifica.", cats: ["Nominal", "Con verbo conjugado"], items: [["Victoire historique à Lyon", 0], ["Fermeture de l'usine", 0], ["Chute des ventes", 0], ["Nouvelle grève dans les transports", 0], ["Le président recule", 1], ["Les prix flambent", 1], ["Paris accueille le monde", 1], ["L'hiver arrive tôt", 1]], pista: "¿Hay verbo?", why: "Forma." },
    { fase: "guiada", c: ["b3tp-jeux"], k: "choice", es: true, ask: "«Les Bleus gagnent !» Les Bleus son…", q: "Elige.", o: ["la selección francesa", "los tristes"], a: 0, pista: "Fútbol.", why: "Cultura." },
    { fase: "guiada", c: ["b3tp-forme"], k: "choice", es: true, ask: "«Grève à la SNCF» significa…", q: "Elige.", o: ["Huelga en la compañía de trenes", "Fiesta en la estación"], a: 0, pista: "grève.", why: "Huelga." },
    { fase: "indep", c: ["b3tp-jeux"], k: "choice", es: true, ask: "«Les agriculteurs voient rouge.» Significa…", q: "Elige.", o: ["enfadarse mucho", "ver algo rojo"], a: 0, why: "voir rouge." },
    { fase: "indep", c: ["b3tp-forme"], k: "fill", ask: "«Subida» (sustantivo).", q: "___ des températures : alerte canicule.", acc: ["Hausse", "hausse"], why: "<b>Hausse</b>." },
    { fase: "indep", c: ["b3tp-jeux"], k: "fill", ask: "«da marcha atrás» (reculer).", q: "Le gouvernement ___ sur la réforme.", acc: ["recule"], why: "<b>recule</b>." },
    { fase: "aplica", c: ["b3tp-forme"], k: "match", ask: "Une cada sigla con su significado.", q: "Sigla → significado", pairs: [["UE", "Unión Europea"], ["ONU", "Naciones Unidas"], ["PME", "pequeña y mediana empresa"], ["RATP", "transporte de París"]], why: "Siglas." },
    { fase: "aplica", c: ["b3tp-forme"], k: "spot", ask: "Encuentra el error.", s: "[Haussement] record des loyers dans les grandes villes .", fix: "Hausse", why: "<b>Hausse</b>." },
    { fase: "aplica", c: ["b3tp-forme"], k: "choice", ask: "«Vivienda: la crisis se agrava.»", q: "«___»", o: ["Logement : la crise s'aggrave", "Logement la crise aggrave"], a: 0, why: "Dos puntos." },
    { fase: "dominio", c: ["b3tp-forme"], k: "order", ask: "Ordena el titular: «Vivienda: la crisis se agrava».", tokens: ["Logement :", "la crise", "s'aggrave"], why: "<b>Logement : la crise s'aggrave</b>" },
    { fase: "dominio", c: ["b3tp-forme"], k: "choice", es: true, ask: "Un titular nominal…", q: "Elige.", o: ["no lleva verbo conjugado", "siempre es una pregunta"], a: 0, why: "Nominal." },
    { fase: "dominio", c: ["b3tp-forme", "b3tp-jeux"], k: "listen", say: "Logement : la crise s'aggrave dans les grandes villes.", acc: ["Logement : la crise s'aggrave dans les grandes villes.", "Logement: la crise s'aggrave dans les grandes villes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Logement : la crise s'aggrave dans les grandes villes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "SNCF", "RATP", "UE", "ONU", "PME", "Lyon", "Paris"], previo: [] }
};

/* ── 38. Décrire un graphique et des statistiques ── */
E["b21-graphique"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Décrire un graphique et des statistiques",
  objetivo: {
    que: "Vas a comentar un gráfico: presentar la fuente y el tema, describir la tendencia, citar las cifras clave y comparar.",
    corto: "Le nombre de cyclistes est passé de 10 000 à 25 000. · On observe une légère baisse en 2020.",
    podras: ["Presentar: Ce graphique, publié par l'INSEE, représente l'évolution de…", "Describir la tendencia con verbos (augmenter, bondir, chuter, reculer, stagner) y sustantivos (une hausse, une baisse, un pic), con su intensidad (nettement, légèrement).", "Dar cifras: passer de 20 % à 35 %, atteindre un pic de…, être multiplié par deux."],
    iconos: ["ic2/engranaje", "ic2/moneda", "ic2/laptop"],
    previos: ["Las cifras y la evolución (B1.1, lección 63) y la comparación con matices (B1.2, lección 15)."],
    capacidad: "Ahora comentas estadísticas en el DELF o en una reunión."
  },
  requiere: R("b1ch-evolution", "b1ch-fraction", "b2cn-evol"), recupera: ["b1ch-evolution"],
  conceptos: {
    "b3gr-tendance": { n: "presentar (Ce graphique représente / montre l'évolution de…); tendencia: augmenter, progresser, bondir, chuter, reculer, stagner, se stabiliser; une hausse, une baisse, un pic, une stabilisation", b: "gr" },
    "b3gr-chiffres": { n: "intensidad: fortement, nettement, considérablement, brutalement / légèrement, faiblement, modérément; cifras: passer de 5 % à 8 %, atteindre un pic, être multiplié par deux / trois, doubler", b: "gr" }
  },
  video: {
    titulo: "Comentar un gráfico", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "une nette hausse", seg: [
        { es: "Hola. Fuente, tendencia, cifras y comparación." } ] },
      { v: "frase", filas: [
          { nota: "cifras", p: 1, partes: [["Le nombre de cyclistes est passé de 10 000 à 25 000.", "-", 1]] },
          { nota: "tendencia", p: 2, partes: [["On observe une légère baisse en 2020.", "-", 2]] },
          { nota: "máximo", p: 3, partes: [["Les ventes ont atteint un pic en décembre.", "-", 3]] } ], seg: [
        { fr: "Le nombre de cyclistes est passé de 10 000 à 25 000.", p: 1 }, { fr: "On observe une légère baisse en 2020.", p: 2 }, { fr: "Les ventes ont atteint un pic en décembre.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Pasó del 5 al 8 %.»", o: ["Il est passé de 5 % à 8 %.", "Il est passé 5 % à 8 %."], a: 0,
        bien: "¡Sí! Passer de… à…", mal: "Estructura: passer de… à…",
        seg: [ { es: "Pausa. De… a…" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une hausse", "une baisse", "un pic", "stagner", "nettement", "multiplié par deux"], seg: [
        { es: "Verbo, intensidad y cifra.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El gráfico del teletrabajo", img: "bg-universidad", yo: "camila",
    escena: "Camila comenta un gráfico en clase; Madame Sofia la escucha.",
    pj: PJ,
    lineas: [
      ["camila", "Ce graphique, publié par l'INSEE, montre une nette augmentation du télétravail depuis 2020.", "Este gráfico, publicado por el INSEE, muestra un claro aumento del teletrabajo desde 2020."],
      ["sofia", "Très bien. Et les chiffres ?", "Muy bien. ¿Y las cifras?"],
      ["camila", "Le taux est passé de 5 % à 20 % : il a été multiplié par quatre. Il a atteint un pic en 2021, puis on observe une légère baisse.", "La tasa pasó del 5 % al 20 %: se multiplicó por cuatro. Alcanzó un máximo en 2021 y luego se observa una ligera bajada."],
      ["sofia", "Et depuis ?", "¿Y desde entonces?"],
      ["camila", "Depuis 2023, les chiffres stagnent : ils se sont stabilisés autour de 18 %.", "Desde 2023, las cifras se estancan: se han estabilizado en torno al 18 %."]
    ],
    fijate: "Fíjate: Ce graphique montre, une nette augmentation, passé de 5 % à 20 %, multiplié par quatre, atteint un pic, une légère baisse, stagnent, se sont stabilisés."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tendencias, intensidad y cifras",
      idea: "Presentar: Ce graphique, publié par l'INSEE, représente / montre l'évolution de… Tendencia (verbos): augmenter, progresser (avanzar), bondir (subida brusca), chuter (bajar mucho), reculer (retroceder), stagner (estancarse), se stabiliser. Sustantivos: une hausse, une baisse, un pic (máximo), une stabilisation; On observe une nette hausse / une légère baisse. Intensidad: fortement, nettement, considérablement, brutalement (fuerte) / légèrement, faiblement, modérément (débil). Cifras: passer de 20 % à 35 % (con de y con à), atteindre un pic de…, être multiplié par deux / trois.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Uso"], [
        ["Il est passé de 5 % à 8 %.", "Pasó del 5 al 8 %.", "passer de… à…"],
        ["Les ventes stagnent.", "Las ventas se estancan.", "se estancan"],
        ["bondir", "subir de golpe", "Subida brusca"],
        ["Les prix ont atteint un pic en juillet. · pic", "Los precios alcanzaron un máximo en julio.", "máximo"],
        ["Le chiffre a été multiplié par trois en dix ans. · multiplié", "La cifra se multiplicó por tres en diez años.", "multiplicar"],
        ["chuter · reculer · progresser · se stabiliser · stagner", "bajar mucho · retroceder · avanzar · estabilizarse · estancarse", "verbos"],
        ["nettement · fortement · considérablement · brutalement", "claramente · fuertemente · considerablemente · bruscamente", "Fuerte"],
        ["légèrement · faiblement · un peu · modérément", "ligeramente · débilmente · un poco · moderadamente", "Débil"],
        ["On observe une forte hausse : les ventes ont doublé en un an ! · forte", "Se observa una fuerte subida: ¡las ventas se duplicaron en un año!", "intensidad"],
        ["On observe une nette baisse", "Se observa una clara bajada", "tendencia"],
        ["Ce graphique montre une nette augmentation du télétravail depuis 2020.", "Este gráfico muestra un claro aumento del teletrabajo desde 2020.", "presentar"]
      ]],
      ej: [["Le nombre de cyclistes est passé de 10 000 à 25 000.", "El número de ciclistas pasó de 10 000 a 25 000."], ["On observe une légère baisse en 2020.", "Se observa una ligera bajada en 2020."], ["Les ventes ont atteint un pic en décembre.", "Las ventas alcanzaron un máximo en diciembre."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["passer de 10 à 20 % / passer 10 % à 20 %", "passer de 10 % à 20 %", "Estructura: passer de… à…"], ["une légère hausse : les ventes ont doublé", "une forte hausse : les ventes ont doublé", "La intensidad debe coincidir con la cifra."], ["Les prix ont atteint un pique.", "Les prix ont atteint un pic.", "un pic (máximo)."]] }
  ],
  ejemplos: [
    { sit: "«Pasó del 5 al 8 %.»", resp: "Il est passé de 5 % à 8 %.", pasos: ["passer de… à…"], porque: "Cifras." },
    { sit: "«Les ventes stagnent» significa…", resp: "se estancan", pasos: ["stagner."], porque: "Tendencia." },
    { sit: "Una subida brusca:", resp: "bondir", pasos: ["Verbo fuerte."], porque: "Tendencia." }
  ],
  comprueba: [
    { q: "«Les ventes stagnent» significa que…", o: ["se estancan", "suben mucho"], a: 0, b: "gr", porque: "stagner." },
    { q: "«Chuter» indica…", o: ["una bajada fuerte", "una subida ligera"], a: 0, b: "gr", porque: "Caer." },
    { q: "«Légèrement» expresa una variación…", o: ["débil", "fuerte"], a: 0, b: "gr", porque: "Ligera." }
  ],
  practica: [
    { fase: "guiada", c: ["b3gr-chiffres"], k: "sort", ask: "¿Intensidad fuerte o débil?", q: "Clasifica.", cats: ["Fuerte", "Débil"], items: [["nettement", 0], ["fortement", 0], ["considérablement", 0], ["brutalement", 0], ["légèrement", 1], ["faiblement", 1], ["un peu", 1], ["modérément", 1]], pista: "¿Mucho o poco?", why: "Intensidad." },
    { fase: "guiada", c: ["b3gr-chiffres"], k: "choice", ask: "«Pasó del 5 al 8 %.»", q: "«___»", o: ["Il est passé de 5 % à 8 %.", "Il est passé 5 % à 8 %."], a: 0, pista: "de… à…", why: "<b>passé de… à…</b>" },
    { fase: "guiada", c: ["b3gr-tendance"], k: "choice", es: true, ask: "«Les ventes stagnent» significa…", q: "Elige.", o: ["se estancan", "se disparan"], a: 0, pista: "stagner.", why: "Estancarse." },
    { fase: "indep", c: ["b3gr-tendance"], k: "choice", ask: "Una subida brusca:", q: "Elige.", o: ["bondir", "reculer"], a: 0, why: "<b>bondir</b>." },
    { fase: "indep", c: ["b3gr-chiffres"], k: "fill", ask: "«un máximo»", q: "Les prix ont atteint un ___ en juillet.", acc: ["pic"], why: "<b>pic</b>." },
    { fase: "indep", c: ["b3gr-chiffres"], k: "fill", ask: "«multiplicado»", q: "Le chiffre a été ___ par trois en dix ans.", acc: ["multiplié"], why: "<b>multiplié</b>." },
    { fase: "aplica", c: ["b3gr-tendance"], k: "match", ask: "Une cada verbo con su significado.", q: "Verbo → significado", pairs: [["chuter", "bajar mucho"], ["reculer", "retroceder"], ["progresser", "avanzar"], ["se stabiliser", "estabilizarse"]], why: "Verbos." },
    { fase: "aplica", c: ["b3gr-chiffres"], k: "spot", ask: "Encuentra el error.", s: "On observe une [légère] hausse : les ventes ont doublé en un an !", fix: "forte", why: "<b>forte</b>." },
    { fase: "aplica", c: ["b3gr-tendance"], k: "choice", ask: "Presentar un gráfico:", q: "«___»", o: ["Ce graphique représente l'évolution du chômage.", "Ce graphique parle sur le chômage."], a: 0, why: "Presentar." },
    { fase: "dominio", c: ["b3gr-tendance"], k: "order", ask: "Ordena: «Se observa una clara bajada».", tokens: ["On observe", "une nette", "baisse"], why: "<b>On observe une nette baisse</b>" },
    { fase: "dominio", c: ["b3gr-tendance"], k: "choice", es: true, ask: "«Chuter» indica…", q: "Elige.", o: ["una bajada fuerte", "una subida ligera"], a: 0, why: "Caer." },
    { fase: "dominio", c: ["b3gr-tendance", "b3gr-chiffres"], k: "listen", say: "Ce graphique montre une nette augmentation du télétravail depuis 2020.", acc: ["Ce graphique montre une nette augmentation du télétravail depuis 2020."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce graphique montre une nette augmentation du télétravail depuis 2020.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "INSEE"], previo: [] }
};

/* ── 39. Prendre des notes efficacement ── */
E["b21-prise-notes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Prendre des notes efficacement",
  objetivo: {
    que: "Vas a tomar apuntes en francés como un nativo: símbolos, abreviaturas y solo palabras clave.",
    corto: "bcp jeunes → télétravail · pb logement ↑ ds gdes villes",
    podras: ["Usar los símbolos: → (consecuencia), + (además), ≠ (contrario), ↑ ↓ (sube, baja).", "Usar las abreviaturas: qqn, qqch, pb, tjs, bcp, pdt, ds, tt, càd, gvt, ex.", "Quitar artículos y verbos y quedarte con las palabras clave: tomar notas ≠ transcribir."],
    iconos: ["ic2/lapiz", "ic2/nota", "ic2/rayo"],
    previos: ["Los conectores lógicos (lección 13), reformular y resumir (B1.1, lección 47) y la puntuación (B1.2, lección 62)."],
    capacidad: "Ahora tomas apuntes rápidos en una clase o conferencia en francés."
  },
  requiere: R("b1rf-resume", "b3cl-fonctions", "b2po-signes"), recupera: ["b3cl-fonctions"],
  conceptos: {
    "b3pn2-symboles": { n: "símbolos: → consecuencia, + además, ≠ contrario, ↑ ↓ sube / baja, = igual; quitar artículos y verbos: prix ↑ → consommation ↓", b: "gr" },
    "b3pn2-abrev": { n: "abreviaturas: qqn (quelqu'un), qqch (quelque chose), pb (problème), tjs (toujours), bcp (beaucoup), pdt (pendant), ds (dans), tt (tout), càd (c'est-à-dire), gvt (gouvernement), ex. (exemple)", b: "gr" }
  },
  video: {
    titulo: "Apuntes rápidos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "bcp · qqch · →", seg: [
        { es: "Hola. Tomar notas no es copiarlo todo." } ] },
      { v: "frase", filas: [
          { nota: "sube", p: 1, partes: [["pb logement ↑ ds gdes villes", "-", 1]] },
          { nota: "consecuencia", p: 2, partes: [["bcp jeunes → télétravail", "-", 2]] },
          { nota: "siempre", p: 3, partes: [["tjs + cher", "-", 3]] } ], seg: [
        { fr: "Problème du logement en hausse dans les grandes villes.", p: 1 }, { fr: "Beaucoup de jeunes choisissent le télétravail.", p: 2 }, { fr: "Toujours plus cher.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«bcp» quiere decir…", o: ["beaucoup", "bonjour"], a: 0,
        bien: "¡Sí! Beaucoup.", mal: "bcp = beaucoup.",
        seg: [ { es: "Pausa. Bcp." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["qqn", "qqch", "bcp", "tjs", "pb", "pdt"], seg: [
        { es: "Símbolos, abreviaturas y palabras clave.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La conferencia", img: "bg-universidad", yo: "camila",
    escena: "Después de una conferencia, Hugo mira los apuntes de Camila.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu as tout écrit ? Tu as dix pages !", "¿Lo escribiste todo? ¡Tienes diez páginas!"],
      ["camila", "Oui, j'ai essayé d'écrire chaque phrase…", "Sí, intenté escribir cada frase…"],
      ["hugo", "Prendre des notes, ce n'est pas transcrire. Regarde mes notes : « bcp jeunes → télétravail », « pb logement ↑ ds gdes villes ».", "Tomar apuntes no es transcribir. Mira mis apuntes: «bcp jeunes → télétravail», «pb logement ↑ ds gdes villes»."],
      ["camila", "Ah ! « bcp », c'est beaucoup ; « pb », problème ; « ds », dans. Et « pdt » ? — Pendant. Et « qqch », quelque chose.", "¡Ah! «bcp» es beaucoup; «pb», problème; «ds», dans. ¿Y «pdt»? — Pendant. Y «qqch», quelque chose."]
    ],
    fijate: "Fíjate: bcp (beaucoup), pb (problème), ds (dans), pdt (pendant), qqch (quelque chose), → (consecuencia), ↑ (sube)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Símbolos y abreviaturas",
      idea: "Símbolos: → consecuencia (prix ↑ → consommation ↓), + además, ≠ contrario, ↑ ↓ sube o baja, = igual. Abreviaturas de uso común: qqn (quelqu'un), qqch (quelque chose), pb (problème), tjs (toujours), bcp (beaucoup), pdt (pendant, no «pendent»), ds (dans), tt (tout), càd (c'est-à-dire), gvt (gouvernement: -ment se reduce), ex. (exemple). Quita artículos y verbos: gvt ↑ impôts → mécontentement. Estructura por ideas y palabras clave: tomar notas ≠ transcribir.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["qqch", "quelque chose (algo)", "abreviatura"],
        ["bcp", "beaucoup (mucho)", "abreviatura"],
        ["prix ↑ → consommation ↓", "suben los precios → baja el consumo", "consecuencia"],
        ["tjs = toujours · toujours", "siempre", "abreviatura"],
        ["pb = problème · problème", "problema", "abreviatura"],
        ["qqn = quelqu'un · gvt = gouvernement · pdt = pendant · càd = c'est-à-dire · ds = dans", "alguien · gobierno · durante · es decir · en", "abreviaturas"],
        ["→ · ≠ · ↑ · +", "consecuencia · contrario · sube · además", "Símbolo"],
        ["bcp · qqch · tt · ex.", "mucho · algo · todo · ejemplo", "Abreviatura"],
        ["En notes, « pdt » veut dire « pendant ». · pendant", "En los apuntes, «pdt» quiere decir «pendant».", "abreviatura"],
        ["bcp jeunes → télétravail", "muchos jóvenes → teletrabajo", "nota"],
        ["Beaucoup de jeunes quittent les grandes villes à cause du prix des logements.", "Muchos jóvenes dejan las grandes ciudades por el precio de la vivienda.", "frase completa"]
      ]],
      ej: [["pb logement ↑ ds gdes villes", "problème du logement en hausse dans les grandes villes"], ["bcp jeunes → télétravail", "beaucoup de jeunes choisissent le télétravail"], ["tjs + cher", "toujours plus cher"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Escribirlo todo", "Solo palabras clave y símbolos", "Tomar notas ≠ transcribir."], ["pdt = pendent", "pdt = pendant", "Ortografía de la palabra completa."], ["Inventar abreviaturas que luego no entiendes", "Usar las abreviaturas comunes: qqn, qqch, bcp", "Que puedas releerlas."]] }
  ],
  ejemplos: [
    { sit: "«qqch» significa…", resp: "quelque chose", pasos: ["q-q-ch."], porque: "Abreviatura." },
    { sit: "«bcp» significa…", resp: "beaucoup", pasos: ["b-c-p."], porque: "Abreviatura." },
    { sit: "En «prix ↑ → consommation ↓», la flecha → indica…", resp: "consecuencia", pasos: ["Causa → efecto."], porque: "Símbolo." }
  ],
  comprueba: [
    { q: "«qqn» significa…", o: ["quelqu'un", "quelque chose"], a: 0, b: "gr", porque: "Persona." },
    { q: "La flecha → indica…", o: ["consecuencia", "contrario"], a: 0, b: "gr", porque: "Causa → efecto." },
    { q: "Tomar notas es…", o: ["anotar palabras clave", "copiar cada frase"], a: 0, b: "gr", porque: "≠ transcribir." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pn2-symboles", "b3pn2-abrev"], k: "sort", ask: "¿Símbolo o abreviatura?", q: "Clasifica.", cats: ["Símbolo", "Abreviatura"], items: [["→", 0], ["≠", 0], ["↑", 0], ["+", 0], ["bcp", 1], ["qqch", 1], ["tt", 1], ["ex.", 1]], pista: "¿Letras?", why: "Tipos." },
    { fase: "guiada", c: ["b3pn2-abrev"], k: "choice", ask: "«qqch» significa…", q: "Elige.", o: ["quelque chose", "quelqu'un"], a: 0, pista: "Cosa.", why: "<b>quelque chose</b>." },
    { fase: "guiada", c: ["b3pn2-abrev"], k: "choice", ask: "«bcp» significa…", q: "Elige.", o: ["beaucoup", "bonjour"], a: 0, pista: "Mucho.", why: "<b>beaucoup</b>." },
    { fase: "indep", c: ["b3pn2-symboles"], k: "choice", es: true, ask: "En «prix ↑ → consommation ↓», la flecha → indica…", q: "Elige.", o: ["consecuencia", "contrario"], a: 0, why: "Consecuencia." },
    { fase: "indep", c: ["b3pn2-abrev"], k: "fill", ask: "tjs = ?", q: "tjs = ___", acc: ["toujours"], why: "<b>toujours</b>." },
    { fase: "indep", c: ["b3pn2-abrev"], k: "fill", ask: "pb = ?", q: "pb = ___", acc: ["problème"], why: "<b>problème</b>." },
    { fase: "aplica", c: ["b3pn2-abrev"], k: "match", ask: "Une cada abreviatura con su palabra.", q: "Abreviatura → palabra", pairs: [["qqn", "quelqu'un"], ["gvt", "gouvernement"], ["pdt", "pendant"], ["càd", "c'est-à-dire"]], why: "Abreviaturas." },
    { fase: "aplica", c: ["b3pn2-abrev"], k: "spot", ask: "Encuentra el error.", s: "En notes , « pdt » veut dire « [pendent] » .", fix: "pendant", why: "<b>pendant</b>." },
    { fase: "aplica", c: ["b3pn2-symboles"], k: "choice", es: true, ask: "Tomar notas es…", q: "Elige.", o: ["anotar palabras clave y símbolos", "copiar cada frase"], a: 0, why: "≠ transcribir." },
    { fase: "dominio", c: ["b3pn2-symboles", "b3pn2-abrev"], k: "order", ask: "Ordena la nota: «muchos jóvenes → teletrabajo».", tokens: ["bcp", "jeunes", "→ télétravail"], why: "<b>bcp jeunes → télétravail</b>" },
    { fase: "dominio", c: ["b3pn2-abrev"], k: "choice", ask: "«qqn» significa…", q: "Elige.", o: ["quelqu'un", "quelque chose"], a: 0, why: "<b>quelqu'un</b>." },
    { fase: "dominio", c: ["b3pn2-abrev", "b3pn2-symboles"], k: "listen", say: "Beaucoup de jeunes quittent les grandes villes à cause du prix des logements.", acc: ["Beaucoup de jeunes quittent les grandes villes à cause du prix des logements."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Beaucoup de jeunes quittent les grandes villes à cause du prix des logements.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 40. Reformuler et paraphraser un texte ── */
E["b21-paraphrase"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Reformuler et paraphraser un texte",
  objetivo: {
    que: "Vas a parafrasear: decir lo mismo con otras palabras cambiando el vocabulario, la estructura o el orden, sin cambiar el sentido.",
    corto: "Les jeunes lisent moins. → La lecture recule chez les jeunes.",
    podras: ["Cambiar el vocabulario por sinónimos: augmenter → croître; important → considérable; beaucoup de gens → un grand nombre de personnes.", "Cambiar la estructura: verbo → nombre (Les prix augmentent → L'augmentation des prix), activa → pasiva.", "Cambiar los conectores por equivalentes: parce que → en raison de, dans la mesure où; mais → toutefois."],
    iconos: ["ic2/engranaje", "ic2/libro", "ic2/lapiz"],
    previos: ["La nominalización (lección 12), reformular (B1.1, lección 47) y la voz pasiva (B1.2, lección 6)."],
    capacidad: "Ahora resumes y sintetizas textos sin copiar sus frases."
  },
  requiere: R("b1rf-expl", "b1rf-resume", "b3no-phrase", "b2vp-forme"), recupera: ["b3no-phrase"],
  conceptos: {
    "b3pf-lexique": { n: "sinónimos y equivalentes: beaucoup de gens → un grand nombre de personnes; de plus en plus → toujours davantage; très important → considérable; parce que → dans la mesure où, en raison de (+ nombre); mais → toutefois", b: "gr" },
    "b3pf-structure": { n: "cambiar la estructura: verbo → nombre (Les entreprises recrutent → Le recrutement des entreprises), activa → pasiva (Les députés ont adopté la loi → La loi a été adoptée par les députés); la paráfrasis es fiel: nunca cambia el sentido", b: "gr" }
  },
  video: {
    titulo: "Decirlo de otra forma", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "en raison de", seg: [
        { es: "Hola. Mismas ideas, otras palabras." } ] },
      { v: "frase", filas: [
          { nota: "nombre", p: 1, partes: [["La lecture recule chez les jeunes.", "-", 1]] },
          { nota: "sinónimo", p: 2, partes: [["La contestation a été massive.", "-", 2]] },
          { nota: "conector", p: 3, partes: [["En raison de travaux, le musée est fermé.", "-", 3]] } ], seg: [
        { fr: "La lecture recule chez les jeunes.", p: 1 }, { fr: "La contestation a été massive.", p: 2 }, { fr: "En raison de travaux, le musée est fermé.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Les députés ont adopté la loi.» En pasiva:", o: ["La loi a été adoptée par les députés.", "La loi a adopté les députés."], a: 0,
        bien: "¡Sí! Mismo sentido.", mal: "La paráfrasis no cambia el sentido.",
        seg: [ { es: "Pausa. Mismo sentido." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["en raison de", "toutefois", "considérable", "un grand nombre de", "dans la mesure où"], seg: [
        { es: "Vocabulario, estructura y conectores.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El resumen de la clase", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara un resumen para el DELF; Madame Sofia la orienta.",
    pj: PJ,
    lineas: [
      ["sofia", "Camila, dans ton résumé, tu as copié les phrases du texte. Il faut reformuler.", "Camila, en tu resumen copiaste las frases del texto. Hay que reformular."],
      ["camila", "D'accord. « Les prix augmentent fortement » devient « On observe une forte hausse des prix ». Et « Les entreprises recrutent » devient « Le recrutement des entreprises ».", "De acuerdo. «Los precios suben mucho» pasa a «Se observa una fuerte subida de los precios». Y «Las empresas contratan» pasa a «La contratación de las empresas»."],
      ["sofia", "Très bien. Et pour « parce que la grève a bloqué la ville » ?", "Muy bien. ¿Y para «porque la huelga bloqueó la ciudad»?"],
      ["camila", "En raison de la grève, la ville a été bloquée. Mais attention : la paraphrase ne doit pas changer le sens.", "Debido a la huelga, la ciudad quedó bloqueada. Pero ojo: la paráfrasis no debe cambiar el sentido."]
    ],
    fijate: "Fíjate: une forte hausse des prix y le recrutement (verbo → nombre), en raison de la grève (conector + nombre), la ville a été bloquée (pasiva)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las tres técnicas",
      idea: "1. Vocabulario: sinónimos y equivalentes (augmenter → croître, progresser; beaucoup de gens → un grand nombre de personnes; de plus en plus → toujours davantage; très important → considérable). 2. Estructura: nominalizar (Les prix augmentent → L'augmentation / la hausse des prix; Les entreprises recrutent → Le recrutement des entreprises) o pasar a pasiva (Les députés ont adopté la loi → La loi a été adoptée par les députés). 3. Conectores equivalentes: parce que → dans la mesure où, en raison de (+ nombre: à cause de la grève → en raison de la grève); mais → toutefois. Regla de oro: la paráfrasis es fiel, nunca cambia la idea.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Técnica"], [
        ["Les prix augmentent fortement. → On observe une forte hausse des prix.", "Los precios suben mucho. → Se observa una fuerte subida de los precios.", "verbo → nombre"],
        ["Les députés ont adopté la loi. → La loi a été adoptée par les députés.", "Los diputados aprobaron la ley. → La ley fue aprobada por los diputados.", "activa → pasiva"],
        ["mais → toutefois · toutefois", "pero → sin embargo", "conector"],
        ["Les entreprises recrutent. → Le recrutement des entreprises. · recrutement", "Las empresas contratan. → La contratación de las empresas.", "verbo → nombre"],
        ["à cause de la grève → en raison de la grève · raison", "a causa de la huelga → debido a la huelga", "conector"],
        ["beaucoup de gens = un grand nombre de personnes · de plus en plus = toujours davantage · parce que = dans la mesure où · très important = considérable", "mucha gente · cada vez más · porque · muy importante", "equivalentes"],
        ["Il pleut → Il tombe de la pluie · Il est parti → Il s'en est allé · Elle a réussi → Elle a obtenu de bons résultats · Il travaille beaucoup → Il est très travailleur", "Llueve · Se fue · Aprobó · Trabaja mucho", "Fiel"],
        ["Il pleut → Il fait beau · Il est parti → Il est arrivé · Elle a réussi → Elle a échoué · Il travaille beaucoup → Il ne fait rien", "Llueve → hace buen tiempo · se fue → llegó · aprobó → suspendió · trabaja → no hace nada", "Cambia el sentido"],
        ["Les prix montent → La hausse des prix est importante. · hausse", "Los precios suben → La subida de los precios es importante.", "verbo → nombre"],
        ["La lecture recule chez les jeunes", "La lectura retrocede entre los jóvenes", "paráfrasis"],
        ["En raison de travaux, la bibliothèque restera fermée jusqu'à lundi.", "Por obras, la biblioteca estará cerrada hasta el lunes.", "conector"]
      ]],
      ej: [["Les jeunes lisent moins. → La lecture recule chez les jeunes.", "Los jóvenes leen menos. → La lectura retrocede entre los jóvenes."], ["Beaucoup de gens ont protesté. → La contestation a été massive.", "Mucha gente protestó. → La protesta fue masiva."], ["Le musée a fermé à cause des travaux. → En raison de travaux, le musée est fermé.", "El museo cerró por obras."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Paráfrasis que cambia el sentido", "Paráfrasis fiel", "Nunca alterar la idea."], ["Les prix montent → La baisse des prix…", "Les prix montent → La hausse des prix…", "Monter = hausse."], ["Copiar la frase del texto", "Cambiar palabras y estructura", "Si no, no es paráfrasis."]] }
  ],
  ejemplos: [
    { sit: "Parafrasea: «Les prix augmentent fortement.»", resp: "On observe une forte hausse des prix.", pasos: ["Verbo → nombre."], porque: "Nominalizar." },
    { sit: "Parafrasea en pasiva: «Les députés ont adopté la loi.»", resp: "La loi a été adoptée par les députés.", pasos: ["Activa → pasiva."], porque: "Estructura." },
    { sit: "Un equivalente formal de «mais»:", resp: "toutefois", pasos: ["Conector."], porque: "Conector." }
  ],
  comprueba: [
    { q: "Parafrasear es…", o: ["decir lo mismo con otras palabras", "dar tu opinión sobre el texto"], a: 0, b: "gr", porque: "Fiel." },
    { q: "«En raison de» va seguido de…", o: ["un nombre", "una frase con verbo"], a: 0, b: "gr", porque: "en raison de la grève." },
    { q: "«Il est parti → Il est arrivé» es una paráfrasis…", o: ["que cambia el sentido", "fiel"], a: 0, b: "gr", porque: "Contrario." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pf-structure"], k: "sort", ask: "¿Paráfrasis fiel o cambia el sentido?", q: "Clasifica.", cats: ["Fiel", "Cambia el sentido"], items: [["Il pleut → Il tombe de la pluie", 0], ["Il est parti → Il s'en est allé", 0], ["Elle a réussi → Elle a obtenu de bons résultats", 0], ["Il travaille beaucoup → Il est très travailleur", 0], ["Il pleut → Il fait beau", 1], ["Il est parti → Il est arrivé", 1], ["Elle a réussi → Elle a échoué", 1], ["Il travaille beaucoup → Il ne fait rien", 1]], pista: "¿Misma idea?", why: "Fidelidad." },
    { fase: "guiada", c: ["b3pf-structure"], k: "choice", ask: "Parafrasea: «Les prix augmentent fortement.»", q: "«___»", o: ["On observe une forte hausse des prix.", "On observe une forte baisse des prix."], a: 0, pista: "Augmenter = hausse.", why: "<b>hausse</b>." },
    { fase: "guiada", c: ["b3pf-structure"], k: "choice", ask: "En pasiva: «Les députés ont adopté la loi.»", q: "«___»", o: ["La loi a été adoptée par les députés.", "La loi a adopté les députés."], a: 0, pista: "Pasiva.", why: "Pasiva." },
    { fase: "indep", c: ["b3pf-lexique"], k: "choice", ask: "Un equivalente formal de «mais»:", q: "mais → ___", o: ["toutefois", "donc"], a: 0, why: "<b>toutefois</b>." },
    { fase: "indep", c: ["b3pf-structure"], k: "fill", ask: "Nombre de recruter.", q: "Les entreprises recrutent. → Le ___ des entreprises.", acc: ["recrutement"], why: "<b>recrutement</b>." },
    { fase: "indep", c: ["b3pf-lexique"], k: "fill", ask: "à cause de → en … de", q: "à cause de la grève → en ___ de la grève", acc: ["raison"], why: "<b>raison</b>." },
    { fase: "aplica", c: ["b3pf-lexique"], k: "match", ask: "Une cada expresión con su equivalente.", q: "Expresión → equivalente", pairs: [["beaucoup de gens", "un grand nombre de personnes"], ["de plus en plus", "toujours davantage"], ["parce que", "dans la mesure où"], ["très important", "considérable"]], why: "Equivalentes." },
    { fase: "aplica", c: ["b3pf-structure"], k: "spot", ask: "Encuentra el error.", s: "Les prix montent → La [baisse] des prix est importante .", fix: "hausse", why: "<b>hausse</b>." },
    { fase: "aplica", c: ["b3pf-structure"], k: "choice", es: true, ask: "«Il est parti → Il est arrivé» es una paráfrasis…", q: "Elige.", o: ["que cambia el sentido", "fiel"], a: 0, why: "Contrario." },
    { fase: "dominio", c: ["b3pf-structure"], k: "order", ask: "Ordena: «La lectura retrocede entre los jóvenes».", tokens: ["La lecture", "recule", "chez les jeunes"], why: "<b>La lecture recule chez les jeunes</b>" },
    { fase: "dominio", c: ["b3pf-lexique"], k: "choice", es: true, ask: "Parafrasear es…", q: "Elige.", o: ["decir lo mismo con otras palabras", "dar tu opinión"], a: 0, why: "Fiel." },
    { fase: "dominio", c: ["b3pf-lexique", "b3pf-structure"], k: "listen", say: "En raison de travaux, la bibliothèque restera fermée jusqu'à lundi.", acc: ["En raison de travaux, la bibliothèque restera fermée jusqu'à lundi."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En raison de travaux, la bibliothèque restera fermée jusqu'à lundi.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "DELF"], previo: [] }
};

/* ── 41. Citer et rapporter un discours à l'écrit ── */
E["b21-citer"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Citer et rapporter un discours à l'écrit",
  objetivo: {
    que: "Vas a integrar las palabras de otros en tu texto: cita directa con inversión del sujeto o discurso indirecto con concordancia de tiempos.",
    corto: "« La situation est grave », a reconnu le maire. · Le maire a reconnu que la situation était grave.",
    podras: ["Citar entre comillas francesas con el verbo introductor detrás e inversión: « … », a déclaré la ministre / a-t-il dit.", "Pasar al estilo indirecto en pasado con la concordancia: est → était, sera → serait.", "Cambiar las marcas de tiempo y lugar (demain → le lendemain, hier → la veille, ici → là) y las preguntas (si, ce que, où)."],
    iconos: ["ic2/pergamino", "ic2/microfono", "ic2/reloj-arena"],
    previos: ["La inversión (lección 20), el discurso indirecto en pasado (B1.2, lección 11) y los verbos introductores (B1.2, lección 32)."],
    capacidad: "Ahora citas a otros con precisión en un artículo o un ensayo."
  },
  requiere: R("b2dp-temps", "b2dp-mots", "b2vi-neutre", "b3in-forme"), recupera: ["b2dp-temps"],
  conceptos: {
    "b3ct-direct": { n: "cita directa: « … » + verbo introductor con inversión del sujeto: « Je pars », dit-il; « Nous ferons tout », a-t-elle promis; « La situation est grave », a reconnu le maire", b: "gr" },
    "b3ct-indirect": { n: "estilo indirecto en pasado: concordancia (est → était, sera → serait), marcas (demain → le lendemain, hier → la veille, ici → là, aujourd'hui → ce jour-là), preguntas (Il a demandé si / ce que / où…)", b: "gr" }
  },
  video: {
    titulo: "Citar bien", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "a-t-il dit", seg: [
        { es: "Hola. Directo con inversión, indirecto con concordancia." } ] },
      { v: "frase", filas: [
          { nota: "directo", p: 1, partes: [["« La situation est grave », a reconnu le maire.", "-", 1]] },
          { nota: "indirecto", p: 2, partes: [["Le maire a reconnu que la situation était grave.", "-", 2]] },
          { nota: "pregunta", p: 3, partes: [["Elle s'est demandé si la mesure serait efficace.", "-", 3]] } ], seg: [
        { fr: "« La situation est grave », a reconnu le maire.", p: 1 }, { fr: "Le maire a reconnu que la situation était grave.", p: 2 }, { fr: "Elle s'est demandé si la mesure serait efficace.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llego mañana», dijo.", o: ["« J'arrive demain », a-t-il dit.", "« J'arrive demain », il a dit."], a: 0,
        bien: "¡Sí! Inversión tras la cita.", mal: "Tras la cita: inversión.",
        seg: [ { es: "Pausa. A-t-il dit." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["a-t-il dit", "a déclaré", "le lendemain", "la veille", "était", "serait"], seg: [
        { es: "Comillas, inversión y concordancia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El artículo del periódico estudiantil", img: "bg-universidad", yo: "camila",
    escena: "Camila escribe la crónica de la visita de una ministra a la universidad; Hugo la relee.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Nous devons agir maintenant », elle a déclaré.", "Escribí: «Debemos actuar ahora», ella declaró."],
      ["hugo", "Après la citation, on inverse : « Nous devons agir maintenant », a déclaré la ministre devant les journalistes.", "Después de la cita se invierte: «Debemos actuar ahora», declaró la ministra ante los periodistas."],
      ["camila", "Et en style indirect : la ministre a affirmé que la réforme serait votée le mois suivant. Elle a précisé qu'elle reviendrait le lendemain.", "Y en estilo indirecto: la ministra afirmó que la reforma se votaría el mes siguiente. Precisó que volvería al día siguiente."],
      ["hugo", "Parfait. Et un étudiant lui a demandé où était la gare ! « Nous ferons tout », a-t-elle promis.", "Perfecto. ¡Y un estudiante le preguntó dónde estaba la estación! «Haremos todo», prometió ella."]
    ],
    fijate: "Fíjate: a déclaré la ministre, a-t-elle promis (inversión tras la cita); serait votée, reviendrait, le lendemain, le mois suivant (indirecto); a demandé où était la gare."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Directo e indirecto",
      idea: "Cita directa: comillas francesas « … » y el verbo introductor detrás, con inversión del sujeto: « Je viens », a-t-il dit (nunca «il a dit»); « La situation est grave », a reconnu le maire. Estilo indirecto: X affirme que… (presente: sin cambios) / X a affirmé que… (pasado: concordancia de tiempos: est → était, va → allait, sera → serait, a été → avait été). Marcas: demain → le lendemain, hier → la veille, ici → là, aujourd'hui → ce jour-là; je → il / elle. Preguntas: Il a demandé si c'était vrai / ce qu'il fallait faire / où était la gare.",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Estilo"], [
        ["« J'arrive demain », a-t-il dit.", "«Llego mañana», dijo.", "directo + inversión"],
        ["« Je suis fatigué », a dit Paul. → Paul a dit qu'il était fatigué.", "«Estoy cansado», dijo Paul. → Paul dijo que estaba cansado.", "directo → indirecto"],
        ["Il a demandé où était la gare.", "Preguntó dónde estaba la estación.", "pregunta indirecta"],
        ["Elle a précisé qu'elle reviendrait le lendemain. · lendemain", "Precisó que volvería al día siguiente.", "demain → le lendemain"],
        ["« Nous ferons tout », a-t-elle promis. · a", "«Haremos todo», prometió ella.", "inversión"],
        ["demain = le lendemain · hier = la veille · ici = là · aujourd'hui = ce jour-là", "mañana → al día siguiente · ayer → la víspera · aquí → allí · hoy → ese día", "marcas"],
        ["« Je pars », dit-il. · « Venez ! », a-t-elle crié. · « Est-ce vrai ? », demanda-t-il. · « C'est fini », conclut-elle.", "«Me voy», dice. · «¡Vengan!», gritó. · «¿Es verdad?», preguntó. · «Se acabó», concluyó.", "Estilo directo"],
        ["Il dit qu'il part. · Elle a crié de venir. · Il demanda si c'était vrai. · Elle conclut que c'était fini.", "Dice que se va. · Gritó que vinieran. · Preguntó si era verdad. · Concluyó que se había acabado.", "Estilo indirecto"],
        ["Le ministre a affirmé que la réforme serait votée le mois suivant. · serait", "El ministro afirmó que la reforma se votaría el mes siguiente.", "sera → serait"],
        ["Il a reconnu que c'était difficile", "Reconoció que era difícil", "indirecto"],
        ["« Nous devons agir maintenant », a déclaré la ministre devant les journalistes.", "«Debemos actuar ahora», declaró la ministra ante los periodistas.", "directo"]
      ]],
      ej: [["« La situation est grave », a reconnu le maire.", "«La situación es grave», reconoció el alcalde."], ["Le maire a reconnu que la situation était grave.", "El alcalde reconoció que la situación era grave."], ["Elle s'est demandé si la mesure serait efficace.", "Se preguntó si la medida sería eficaz."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Je viens », il a dit.", "« Je viens », a-t-il dit.", "Tras la cita: inversión."], ["Le ministre a affirmé que la réforme sera votée.", "Le ministre a affirmé que la réforme serait votée.", "Pasado: sera → serait."], ["Il a dit qu'il viendrait demain. (otro día)", "Il a dit qu'il viendrait le lendemain.", "demain → le lendemain."]] }
  ],
  ejemplos: [
    { sit: "«Llego mañana», dijo.", resp: "« J'arrive demain », a-t-il dit.", pasos: ["Inversión tras la cita."], porque: "Directo." },
    { sit: "Pasa al indirecto: « Je suis fatigué », a dit Paul.", resp: "Paul a dit qu'il était fatigué.", pasos: ["suis → était; je → il."], porque: "Concordancia." },
    { sit: "«Preguntó dónde estaba la estación.»", resp: "Il a demandé où était la gare.", pasos: ["Pregunta indirecta."], porque: "où." }
  ],
  comprueba: [
    { q: "Después de una cita directa, el sujeto…", o: ["se invierte: a-t-il dit", "va delante: il a dit"], a: 0, b: "gr", porque: "Inversión." },
    { q: "En indirecto en pasado, «demain» pasa a…", o: ["le lendemain", "la veille"], a: 0, b: "gr", porque: "Al día siguiente." },
    { q: "«Il a affirmé que la réforme ___ votée.»", o: ["serait", "sera"], a: 0, b: "gr", porque: "Concordancia." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ct-direct", "b3ct-indirect"], k: "sort", ask: "¿Estilo directo o indirecto?", q: "Clasifica.", cats: ["Estilo directo", "Estilo indirecto"], items: [["« Je pars », dit-il.", 0], ["« Venez ! », a-t-elle crié.", 0], ["« Est-ce vrai ? », demanda-t-il.", 0], ["« C'est fini », conclut-elle.", 0], ["Il dit qu'il part.", 1], ["Elle a crié de venir.", 1], ["Il demanda si c'était vrai.", 1], ["Elle conclut que c'était fini.", 1]], pista: "¿Comillas?", why: "Estilos." },
    { fase: "guiada", c: ["b3ct-direct"], k: "choice", ask: "«Llego mañana», dijo.", q: "«___»", o: ["« J'arrive demain », a-t-il dit.", "« J'arrive demain », il a dit."], a: 0, pista: "Inversión.", why: "<b>a-t-il dit</b>." },
    { fase: "guiada", c: ["b3ct-indirect"], k: "choice", ask: "Al indirecto: « Je suis fatigué », a dit Paul.", q: "«___»", o: ["Paul a dit qu'il était fatigué.", "Paul a dit qu'il est fatigué."], a: 0, pista: "Concordancia.", why: "<b>était</b>." },
    { fase: "indep", c: ["b3ct-indirect"], k: "choice", ask: "«Preguntó dónde estaba la estación.»", q: "«___»", o: ["Il a demandé où était la gare.", "Il a demandé où est-ce que la gare était ?"], a: 0, why: "Indirecta." },
    { fase: "indep", c: ["b3ct-indirect"], k: "fill", ask: "«al día siguiente»", q: "Elle a précisé qu'elle reviendrait le ___ .", acc: ["lendemain"], why: "<b>lendemain</b>." },
    { fase: "indep", c: ["b3ct-direct"], k: "fill", ask: "Inversión con avoir (elle).", q: "« Nous ferons tout », ___ -t-elle promis.", acc: ["a"], why: "<b>a-t-elle</b>." },
    { fase: "aplica", c: ["b3ct-indirect"], k: "match", ask: "Une cada marca con su forma en indirecto.", q: "Directo → indirecto", pairs: [["demain", "le lendemain"], ["hier", "la veille"], ["ici", "là"], ["aujourd'hui", "ce jour-là"]], why: "Marcas." },
    { fase: "aplica", c: ["b3ct-indirect"], k: "spot", ask: "Encuentra el error.", s: "Le ministre a affirmé que la réforme [sera] votée le mois suivant .", fix: "serait", why: "<b>serait</b>." },
    { fase: "aplica", c: ["b3ct-direct"], k: "choice", ask: "Cita con verbo introductor:", q: "«___»", o: ["« La situation est grave », a reconnu le maire.", "« La situation est grave », le maire a reconnu."], a: 0, why: "Inversión." },
    { fase: "dominio", c: ["b3ct-indirect"], k: "order", ask: "Ordena: «Reconoció que era difícil».", tokens: ["Il a reconnu", "que", "c'était difficile"], why: "<b>Il a reconnu que c'était difficile</b>" },
    { fase: "dominio", c: ["b3ct-indirect"], k: "choice", es: true, ask: "En indirecto en pasado, «demain» pasa a…", q: "Elige.", o: ["le lendemain", "la veille"], a: 0, why: "Al día siguiente." },
    { fase: "dominio", c: ["b3ct-direct", "b3ct-indirect"], k: "listen", say: "« Nous devons agir maintenant », a déclaré la ministre devant les journalistes.", acc: ["« Nous devons agir maintenant », a déclaré la ministre devant les journalistes.", "Nous devons agir maintenant, a déclaré la ministre devant les journalistes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>« Nous devons agir maintenant », a déclaré la ministre devant les journalistes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paul"], previo: [] }
};

/* ── B2.1·8 Economía, ciencia y trabajo · 42. La transition écologique ── */
E["b21-transition-ecologique"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La transition écologique",
  objetivo: {
    que: "Vas a hablar de la transición ecológica: el clima, la energía, la biodiversidad y las políticas, un tema clásico del DELF B2.",
    corto: "La France vise la neutralité carbone en 2050. · Certaines marques pratiquent l'écoblanchiment.",
    podras: ["Hablar del clima: le dérèglement climatique, les émissions de CO2, la neutralité carbone, l'empreinte carbone.", "Hablar de energía y biodiversidad: la sobriété énergétique, décarboner, la rénovation thermique, les espèces menacées.", "Distinguir causas (les énergies fossiles, la déforestation) y soluciones (la sobriété, les renouvelables) y denunciar l'écoblanchiment."],
    iconos: ["ic2/mundo", "ic2/flor", "ic2/rayo"],
    previos: ["El medio ambiente (B1.1, lección 57), la alimentación sostenible (B1.2, lección 52) y debatir (lección 8)."],
    capacidad: "Ahora debates sobre el clima con vocabulario preciso."
  },
  requiere: R("b1en-probleme", "b1en-solution", "b3db-parole", "b2ad-produits"), recupera: ["b1en-solution"],
  conceptos: {
    "b3te-climat": { n: "clima: le dérèglement / changement climatique, les émissions de CO2, la neutralité carbone, l'empreinte carbone (la huella de carbono), la canicule; causas: les énergies fossiles, la déforestation, l'élevage intensif, la surconsommation", b: "gr" },
    "b3te-solutions": { n: "soluciones: la sobriété énergétique (consumir menos energía), les (énergies) renouvelables, la rénovation thermique (aislar edificios), décarboner, le ferroutage, préserver la biodiversité, les espèces menacées; l'écoblanchiment (greenwashing)", b: "gr" }
  },
  video: {
    titulo: "La transición ecológica", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "la neutralité carbone", seg: [
        { es: "Hola. Un tema que cae en el DELF B2." } ] },
      { v: "frase", filas: [
          { nota: "objetivo", p: 1, partes: [["La France vise la neutralité carbone en 2050.", "-", 1]] },
          { nota: "huella", p: 2, partes: [["Réduire son empreinte carbone passe par moins d'avion.", "-", 2]] },
          { nota: "denuncia", p: 3, partes: [["Certaines marques pratiquent l'écoblanchiment.", "-", 3]] } ], seg: [
        { fr: "La France vise la neutralité carbone en 2050.", p: 1 }, { fr: "Réduire son empreinte carbone passe par moins d'avion.", p: 2 }, { fr: "Certaines marques pratiquent l'écoblanchiment.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«la sobriété énergétique» es…", o: ["consumir menos energía", "producir más energía"], a: 0, es: true,
        bien: "¡Sí! Consumir menos.", mal: "Sobriété: consumir menos.",
        seg: [ { es: "Pausa. Sobriedad." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'empreinte carbone", "la sobriété", "décarboner", "menacées", "l'écoblanchiment"], seg: [
        { es: "Clima, energía, biodiversidad y política.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La ola de calor", img: "bg-paris", yo: "camila",
    escena: "En plena ola de calor, Camila y Hugo hablan del clima.",
    pj: PJ,
    lineas: [
      ["hugo", "Encore une canicule ! Le dérèglement climatique, ce n'est plus une théorie.", "¡Otra ola de calor! El desajuste climático ya no es una teoría."],
      ["camila", "La France vise la neutralité carbone en 2050. Il faut décarboner l'économie en réduisant les énergies fossiles.", "Francia apunta a la neutralidad de carbono en 2050. Hay que descarbonizar la economía reduciendo las energías fósiles."],
      ["hugo", "Et chacun peut réduire son empreinte carbone : moins d'avion, la sobriété énergétique, la rénovation thermique des logements.", "Y cada uno puede reducir su huella de carbono: menos avión, la sobriedad energética, el aislamiento de las viviendas."],
      ["camila", "Oui, et il faut préserver la biodiversité : de nombreuses espèces sont menacées d'extinction. Mais attention à l'écoblanchiment des grandes marques !", "Sí, y hay que preservar la biodiversidad: muchas especies están amenazadas de extinción. ¡Pero ojo con el lavado verde de las grandes marcas!"]
    ],
    fijate: "Fíjate: la canicule, le dérèglement climatique, la neutralité carbone, décarboner, l'empreinte carbone, la sobriété énergétique, la rénovation thermique, menacées, l'écoblanchiment."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la transición",
      idea: "Clima: le changement climatique (correcto) / le dérèglement climatique (más preciso: insiste en el desequilibrio), les émissions de CO2, la neutralité carbone, l'empreinte carbone (la huella), la canicule (ola de calor). Energía: la sobriété énergétique (consumir menos energía), les énergies renouvelables, la rénovation thermique (aislar edificios), décarboner (descarbonizar). Biodiversidad: l'érosion de la biodiversité, les espèces menacées (d'extinction), préserver les écosystèmes. Política: une taxe carbone, les accords de Paris, la COP, l'écoblanchiment (greenwashing).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["réduire son empreinte carbone", "reducir la huella de carbono", "clima"],
        ["la sobriété énergétique", "consumir menos energía", "energía"],
        ["dénoncer l'écoblanchiment", "denunciar el lavado verde (greenwashing)", "política"],
        ["Il faut décarboner l'économie en réduisant les énergies fossiles. · décarboner", "Hay que descarbonizar la economía reduciendo las energías fósiles.", "energía"],
        ["De nombreuses espèces sont menacées d'extinction. · menacées", "Muchas especies están amenazadas de extinción.", "biodiversidad"],
        ["la neutralité carbone · la rénovation thermique · une espèce menacée · la canicule", "la neutralidad de carbono · el aislamiento de edificios · una especie amenazada · la ola de calor", "vocabulario"],
        ["les énergies fossiles · la déforestation · l'élevage intensif · la surconsommation", "las energías fósiles · la deforestación · la ganadería intensiva · el sobreconsumo", "Causa del problema"],
        ["la sobriété · les renouvelables · l'isolation des bâtiments · le ferroutage", "la sobriedad · las renovables · el aislamiento de edificios · el transporte de camiones en tren", "Solución"],
        ["Pour atteindre la neutralité carbone, il faut réduire nos émissions de CO2. · réduire", "Para alcanzar la neutralidad de carbono hay que reducir nuestras emisiones de CO2.", "clima"],
        ["Il faut préserver la biodiversité", "Hay que preservar la biodiversidad", "biodiversidad"],
        ["La transition écologique exige des efforts de la part des citoyens comme des entreprises.", "La transición ecológica exige esfuerzos tanto de los ciudadanos como de las empresas.", "política"]
      ]],
      ej: [["La France vise la neutralité carbone en 2050.", "Francia apunta a la neutralidad de carbono en 2050."], ["Réduire son empreinte carbone passe par moins d'avion.", "Reducir la huella de carbono pasa por volar menos."], ["Certaines marques pratiquent l'écoblanchiment.", "Algunas marcas practican el lavado verde."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le changement climatique / le dérèglement climatique: ¿cuál es el bueno?", "Ambos existen", "Dérèglement insiste en el desequilibrio."], ["Pour la neutralité carbone, il faut augmenter nos émissions.", "… il faut réduire nos émissions.", "Neutralidad = reducir."], ["la sobriété = no beber alcohol", "la sobriété énergétique = consumir menos energía", "Contexto."]] }
  ],
  ejemplos: [
    { sit: "«réduire son empreinte carbone»: l'empreinte es…", resp: "la huella de carbono", pasos: ["empreinte = huella."], porque: "Clima." },
    { sit: "«la sobriété énergétique» es…", resp: "consumir menos energía", pasos: ["sobriété."], porque: "Energía." },
    { sit: "«dénoncer l'écoblanchiment»: l'écoblanchiment es…", resp: "el lavado verde (greenwashing)", pasos: ["éco + blanchiment."], porque: "Política." }
  ],
  comprueba: [
    { q: "«L'empreinte carbone» es…", o: ["la huella de carbono", "un impuesto"], a: 0, b: "gr", porque: "Huella." },
    { q: "«Décarboner» significa…", o: ["reducir las emisiones de carbono", "quemar carbón"], a: 0, b: "gr", porque: "Descarbonizar." },
    { q: "«Les énergies fossiles» son…", o: ["una causa del problema", "una solución"], a: 0, b: "gr", porque: "Petróleo, gas, carbón." }
  ],
  practica: [
    { fase: "guiada", c: ["b3te-climat", "b3te-solutions"], k: "sort", ask: "¿Causa del problema o solución?", q: "Clasifica.", cats: ["Causa del problema", "Solución"], items: [["les énergies fossiles", 0], ["la déforestation", 0], ["l'élevage intensif", 0], ["la surconsommation", 0], ["la sobriété", 1], ["les renouvelables", 1], ["l'isolation des bâtiments", 1], ["le ferroutage", 1]], pista: "¿Contamina?", why: "Causas y soluciones." },
    { fase: "guiada", c: ["b3te-climat"], k: "choice", es: true, ask: "«réduire son empreinte carbone»: l'empreinte carbone es…", q: "Elige.", o: ["la huella de carbono", "el impuesto de carbono"], a: 0, pista: "Huella.", why: "Huella." },
    { fase: "guiada", c: ["b3te-solutions"], k: "choice", es: true, ask: "«la sobriété énergétique» es…", q: "Elige.", o: ["consumir menos energía", "producir más energía"], a: 0, pista: "Menos.", why: "Sobriedad." },
    { fase: "indep", c: ["b3te-solutions"], k: "choice", es: true, ask: "«dénoncer l'écoblanchiment»: l'écoblanchiment es…", q: "Elige.", o: ["el lavado verde (greenwashing)", "el reciclaje"], a: 0, why: "Greenwashing." },
    { fase: "indep", c: ["b3te-solutions"], k: "fill", ask: "«descarbonizar»", q: "Il faut ___ l'économie en réduisant les énergies fossiles.", acc: ["décarboner"], why: "<b>décarboner</b>." },
    { fase: "indep", c: ["b3te-solutions"], k: "fill", ask: "«amenazadas»", q: "De nombreuses espèces sont ___ d'extinction.", acc: ["menacées"], why: "<b>menacées</b>." },
    { fase: "aplica", c: ["b3te-climat", "b3te-solutions"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["la neutralité carbone", "la neutralidad de carbono"], ["la rénovation thermique", "el aislamiento de edificios"], ["une espèce menacée", "una especie amenazada"], ["la canicule", "la ola de calor"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3te-climat"], k: "spot", ask: "Encuentra el error.", s: "Pour atteindre la neutralité carbone , il faut [augmenter] nos émissions de CO2 .", fix: "réduire", why: "<b>réduire</b>." },
    { fase: "aplica", c: ["b3te-climat"], k: "choice", es: true, ask: "«Les énergies fossiles» son…", q: "Elige.", o: ["una causa del problema", "una solución"], a: 0, why: "Causa." },
    { fase: "dominio", c: ["b3te-solutions"], k: "order", ask: "Ordena: «Hay que preservar la biodiversidad».", tokens: ["Il faut", "préserver", "la biodiversité"], why: "<b>Il faut préserver la biodiversité</b>" },
    { fase: "dominio", c: ["b3te-solutions"], k: "choice", es: true, ask: "«Décarboner» significa…", q: "Elige.", o: ["reducir las emisiones de carbono", "quemar más carbón"], a: 0, why: "Descarbonizar." },
    { fase: "dominio", c: ["b3te-climat", "b3te-solutions"], k: "listen", say: "La transition écologique exige des efforts de la part des citoyens comme des entreprises.", acc: ["La transition écologique exige des efforts de la part des citoyens comme des entreprises."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La transition écologique exige des efforts de la part des citoyens comme des entreprises.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "France", "CO2", "COP"], previo: [] }
};

/* ── 43. La mondialisation et ses effets ── */
E["b21-mondialisation"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La mondialisation et ses effets",
  objetivo: {
    que: "Vas a hablar de la globalización: sus actores, sus procesos (deslocalizar, relocalizar), sus ventajas y sus críticas.",
    corto: "L'usine a été délocalisée en Asie. · Le commerce équitable garantit un prix juste aux producteurs.",
    podras: ["Nombrar los actores: une multinationale, une PME, les pays émergents.", "Describir los procesos: délocaliser / relocaliser, exporter / importer, la sous-traitance.", "Pesar ventajas (la croissance, la baisse des prix) y críticas (les inégalités, l'uniformisation culturelle) y proponer alternativas (le commerce équitable, le made in France)."],
    iconos: ["ic2/globo", "ic2/moneda", "ic2/engranaje"],
    previos: ["La consecuencia (lección 27), la economía cotidiana (B1.2, lección 48) y el mundo del trabajo (B1.2, lección 42)."],
    capacidad: "Ahora defiendes o criticas la globalización con argumentos."
  },
  requiere: R("b2ec-banque", "b2mt-contrat", "b3cq-conj", "b1cs-payer"), recupera: ["b3cq-conj"],
  conceptos: {
    "b3mn-acteurs": { n: "actores y procesos: une multinationale, une PME, les pays émergents, l'OMC; délocaliser (trasladar la producción a otro país) / relocaliser, exporter / importer, la sous-traitance (subcontratación)", b: "gr" },
    "b3mn-effets": { n: "efectos: la croissance, la baisse des prix, les échanges culturels / les inégalités, l'uniformisation culturelle, le chômage industriel; alternativas: le commerce équitable (comercio justo), le made in France, le protectionnisme", b: "gr" }
  },
  video: {
    titulo: "La globalización", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/globo", grande: "délocaliser", seg: [
        { es: "Hola. Ventajas y críticas de la globalización." } ] },
      { v: "frase", filas: [
          { nota: "deslocalizar", p: 1, partes: [["L'usine a été délocalisée en Asie.", "-", 1]] },
          { nota: "comercio justo", p: 2, partes: [["Le commerce équitable garantit un prix juste aux producteurs.", "-", 2]] },
          { nota: "relocalizar", p: 3, partes: [["La crise sanitaire a relancé le débat sur la relocalisation.", "-", 3]] } ], seg: [
        { fr: "L'usine a été délocalisée en Asie.", p: 1 }, { fr: "Le commerce équitable garantit un prix juste aux producteurs.", p: 2 }, { fr: "La crise sanitaire a relancé le débat sur la relocalisation.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«L'entreprise délocalise sa production.»", o: ["trasladar la producción a otro país", "localizar la producción"], a: 0, es: true,
        bien: "¡Sí! Prefijo dé-.", mal: "Dé- = sacar de su lugar.",
        seg: [ { es: "Pausa. Deslocalizar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une multinationale", "délocaliser", "relocaliser", "le commerce équitable", "émergents"], seg: [
        { es: "Actores, procesos, efectos y alternativas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La fábrica cerrada", img: "bg-cafe", yo: "camila",
    escena: "Hugo cuenta que la fábrica de su pueblo cerró.",
    pj: PJ,
    lineas: [
      ["hugo", "L'usine de mon village a fermé. L'entreprise a délocalisé sa production en Asie.", "La fábrica de mi pueblo cerró. La empresa trasladó su producción a Asia."],
      ["camila", "C'est la mondialisation : les multinationales recourent à la sous-traitance. La mondialisation a permis une baisse des prix, mais elle a aussi accentué certaines inégalités.", "Es la globalización: las multinacionales recurren a la subcontratación. La globalización permitió una bajada de los precios, pero también acentuó ciertas desigualdades."],
      ["hugo", "Depuis la crise sanitaire, certains pays veulent relocaliser leurs usines pour recréer des emplois.", "Desde la crisis sanitaria, algunos países quieren relocalizar sus fábricas para recrear empleos."],
      ["camila", "Moi, j'achète du café issu du commerce équitable. Les pays émergents comme l'Inde connaissent une forte croissance, mais les producteurs doivent être payés justement.", "Yo compro café de comercio justo. Los países emergentes como la India tienen un fuerte crecimiento, pero a los productores hay que pagarles con justicia."]
    ],
    fijate: "Fíjate: délocalisé, les multinationales, la sous-traitance, une baisse des prix, les inégalités, relocaliser, le commerce équitable, les pays émergents, la croissance."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la globalización",
      idea: "Actores: une multinationale, une PME, les pays émergents (como la India), l'OMC. Procesos: délocaliser (prefijo dé-: trasladar la producción al extranjero) / relocaliser (traerla de vuelta), exporter / importer, la sous-traitance (subcontratación), la libre circulation. Ventajas: l'accès à plus de produits, les échanges culturels, la baisse des prix, la croissance mondiale. Críticas: les délocalisations, les inégalités, l'uniformisation culturelle, la pollution des transports. Alternativas: le commerce équitable (comercio justo), le made in France, le protectionnisme, la souveraineté industrielle.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["L'entreprise délocalise sa production.", "trasladar la producción a otro país", "proceso"],
        ["acheter du café issu du commerce équitable", "comprar café de comercio justo", "alternativa"],
        ["recourir à la sous-traitance", "recurrir a la subcontratación", "proceso"],
        ["Certains pays veulent relocaliser leurs usines pour recréer des emplois. · relocaliser", "Algunos países quieren relocalizar sus fábricas para recrear empleos.", "proceso"],
        ["Les pays émergents comme l'Inde connaissent une forte croissance. · émergents", "Los países emergentes como la India tienen un fuerte crecimiento.", "actores"],
        ["une multinationale · l'uniformisation · le protectionnisme · la croissance", "una multinacional · la uniformización · el proteccionismo · el crecimiento", "vocabulario"],
        ["l'accès à plus de produits · les échanges culturels · la baisse des prix · la croissance mondiale", "el acceso a más productos · los intercambios culturales · la bajada de precios · el crecimiento mundial", "Ventaja"],
        ["les délocalisations · les inégalités · l'uniformisation culturelle · la pollution des transports", "las deslocalizaciones · las desigualdades · la uniformización cultural · la contaminación del transporte", "Crítica"],
        ["Pour protéger l'emploi local, le gouvernement veut relocaliser les usines en France.", "Para proteger el empleo local, el gobierno quiere relocalizar las fábricas en Francia.", "proceso"],
        ["La mondialisation augmente les échanges", "La globalización aumenta los intercambios", "efecto"],
        ["La mondialisation a permis une baisse des prix, mais elle a aussi accentué certaines inégalités.", "La globalización permitió una bajada de los precios, pero también acentuó ciertas desigualdades.", "efectos"]
      ]],
      ej: [["L'usine a été délocalisée en Asie.", "La fábrica se deslocalizó a Asia."], ["Le commerce équitable garantit un prix juste aux producteurs.", "El comercio justo garantiza un precio justo a los productores."], ["La crise sanitaire a relancé le débat sur la relocalisation.", "La crisis sanitaria reactivó el debate sobre la relocalización."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["délocaliser = localizar algo", "délocaliser = trasladar la producción al extranjero", "Prefijo dé-."], ["Pour protéger l'emploi local, délocaliser les usines en France", "relocaliser les usines en France", "Volver = relocaliser."], ["les pays émergeants", "les pays émergents", "Ortografía: -ents."]] }
  ],
  ejemplos: [
    { sit: "«L'entreprise délocalise sa production.» Délocaliser es…", resp: "trasladar la producción a otro país", pasos: ["dé- + localiser."], porque: "Proceso." },
    { sit: "«acheter du café issu du commerce équitable»: le commerce équitable es…", resp: "comercio justo", pasos: ["équitable = justo."], porque: "Alternativa." },
    { sit: "«recourir à la sous-traitance»: la sous-traitance es…", resp: "la subcontratación", pasos: ["sous- = sub-."], porque: "Proceso." }
  ],
  comprueba: [
    { q: "«Relocaliser» significa…", o: ["traer la producción de vuelta al país", "trasladarla al extranjero"], a: 0, b: "gr", porque: "re-." },
    { q: "«Les inégalités» son…", o: ["una crítica a la globalización", "una ventaja"], a: 0, b: "gr", porque: "Desigualdades." },
    { q: "«Une PME» es…", o: ["una pequeña y mediana empresa", "una multinacional"], a: 0, b: "gr", porque: "Sigla." }
  ],
  practica: [
    { fase: "guiada", c: ["b3mn-effets"], k: "sort", ask: "¿Ventaja o crítica?", q: "Clasifica.", cats: ["Ventaja", "Crítica"], items: [["l'accès à plus de produits", 0], ["les échanges culturels", 0], ["la baisse des prix", 0], ["la croissance mondiale", 0], ["les délocalisations", 1], ["les inégalités", 1], ["l'uniformisation culturelle", 1], ["la pollution des transports", 1]], pista: "¿Beneficia?", why: "Efectos." },
    { fase: "guiada", c: ["b3mn-acteurs"], k: "choice", es: true, ask: "«L'entreprise délocalise sa production.» Délocaliser es…", q: "Elige.", o: ["trasladar la producción a otro país", "localizar la producción"], a: 0, pista: "dé-.", why: "Deslocalizar." },
    { fase: "guiada", c: ["b3mn-effets"], k: "choice", es: true, ask: "«acheter du café issu du commerce équitable»: es…", q: "Elige.", o: ["comercio justo", "comercio ilegal"], a: 0, pista: "équitable.", why: "Comercio justo." },
    { fase: "indep", c: ["b3mn-acteurs"], k: "choice", es: true, ask: "«recourir à la sous-traitance»: la sous-traitance es…", q: "Elige.", o: ["la subcontratación", "el subsidio"], a: 0, why: "Subcontratación." },
    { fase: "indep", c: ["b3mn-acteurs"], k: "fill", ask: "«relocalizar»", q: "Certains pays veulent ___ leurs usines pour recréer des emplois.", acc: ["relocaliser"], why: "<b>relocaliser</b>." },
    { fase: "indep", c: ["b3mn-acteurs"], k: "fill", ask: "«emergentes»", q: "Les pays ___ comme l'Inde connaissent une forte croissance.", acc: ["émergents"], why: "<b>émergents</b>." },
    { fase: "aplica", c: ["b3mn-acteurs", "b3mn-effets"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["une multinationale", "una multinacional"], ["l'uniformisation", "la uniformización"], ["le protectionnisme", "el proteccionismo"], ["la croissance", "el crecimiento"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3mn-acteurs"], k: "spot", ask: "Encuentra el error.", s: "Pour protéger l'emploi local , le gouvernement veut [délocaliser] les usines en France .", fix: "relocaliser", why: "<b>relocaliser</b>." },
    { fase: "aplica", c: ["b3mn-effets"], k: "choice", es: true, ask: "«Les inégalités» son…", q: "Elige.", o: ["una crítica a la globalización", "una ventaja"], a: 0, why: "Crítica." },
    { fase: "dominio", c: ["b3mn-effets"], k: "order", ask: "Ordena: «La globalización aumenta los intercambios».", tokens: ["La mondialisation", "augmente", "les échanges"], why: "<b>La mondialisation augmente les échanges</b>" },
    { fase: "dominio", c: ["b3mn-acteurs"], k: "choice", es: true, ask: "«Relocaliser» significa…", q: "Elige.", o: ["traer la producción de vuelta al país", "trasladarla al extranjero"], a: 0, why: "re-." },
    { fase: "dominio", c: ["b3mn-acteurs", "b3mn-effets"], k: "listen", say: "La mondialisation a permis une baisse des prix, mais elle a aussi accentué certaines inégalités.", acc: ["La mondialisation a permis une baisse des prix, mais elle a aussi accentué certaines inégalités."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La mondialisation a permis une baisse des prix, mais elle a aussi accentué certaines inégalités.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Asie", "Inde", "France", "OMC", "PME"], previo: [] }
};

/* ── 44. L'avenir du travail ── */
E["b21-avenir-travail"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'avenir du travail",
  objetivo: {
    que: "Vas a hablar de cómo cambia el trabajo: automatización, teletrabajo, uberización, búsqueda de sentido y reconversión.",
    corto: "De plus en plus de salariés cherchent du sens dans leur travail. · Elle a fait une reconversion dans l'informatique.",
    podras: ["Nombrar las tendencias: l'automatisation, le télétravail, le travail hybride, la semaine de quatre jours.", "Hablar de estatus y riesgos: un auto-entrepreneur, l'ubérisation, la précarité, le burn-out.", "Hablar de bienestar y formación: la quête de sens, l'équilibre vie pro / vie perso, la reconversion professionnelle, la formation continue."],
    iconos: ["ic2/laptop", "ic2/engranaje", "ic2/reloj-arena"],
    previos: ["El mundo del trabajo (B1.2, lección 42) y la tecnología y la IA (B1.2, lección 45)."],
    capacidad: "Ahora debates sobre el futuro del trabajo y cuentas tu propio cambio de carrera."
  },
  requiere: R("b2mt-contrat", "b2mt-droits", "b2ti-voc"), recupera: ["b2mt-contrat"],
  conceptos: {
    "b3at-tendances": { n: "tendencias y estatus: l'automatisation, le télétravail, le travail hybride, la semaine de quatre jours; un auto-entrepreneur, un freelance, l'ubérisation (economía de plataformas), la précarité", b: "gr" },
    "b3at-bienetre": { n: "bienestar y formación: l'équilibre vie pro / vie perso, le burn-out (agotamiento profesional), la quête de sens, l'isolement; la reconversion professionnelle (cambiar de profesión), la formation continue", b: "gr" }
  },
  video: {
    titulo: "El trabajo que viene", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/laptop", grande: "la quête de sens", seg: [
        { es: "Hola. El trabajo está cambiando muy rápido." } ] },
      { v: "frase", filas: [
          { nota: "sentido", p: 1, partes: [["De plus en plus de salariés cherchent du sens dans leur travail.", "-", 1]] },
          { nota: "reconversión", p: 2, partes: [["Elle a fait une reconversion dans l'informatique.", "-", 2]] },
          { nota: "plataformas", p: 3, partes: [["L'ubérisation a créé des emplois précaires.", "-", 3]] } ], seg: [
        { fr: "De plus en plus de salariés cherchent du sens dans leur travail.", p: 1 }, { fr: "Elle a fait une reconversion dans l'informatique.", p: 2 }, { fr: "L'ubérisation a créé des emplois précaires.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«faire une reconversion» es…", o: ["cambiar de profesión", "convertirse a una religión"], a: 0, es: true,
        bien: "¡Sí! Contexto laboral.", mal: "En el trabajo: cambiar de profesión.",
        seg: [ { es: "Pausa. Reconversión." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le télétravail", "hybride", "l'ubérisation", "le burn-out", "la reconversion"], seg: [
        { es: "Tendencias, riesgos, bienestar y formación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El cambio de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila que su hermana cambió de profesión.",
    pj: PJ,
    lineas: [
      ["hugo", "Après dix ans comme comptable, ma sœur a fait une reconversion dans le graphisme. Elle a fait un burn-out.", "Después de diez años como contable, mi hermana se reconvirtió al diseño gráfico. Tuvo un agotamiento profesional."],
      ["camila", "Elle cherchait du sens ? Beaucoup de gens cherchent un meilleur équilibre entre vie pro et vie perso.", "¿Buscaba sentido? Mucha gente busca un mejor equilibrio entre vida laboral y personal."],
      ["hugo", "Oui. Maintenant elle travaille en hybride : deux jours au bureau, trois chez elle. Et son ami est devenu auto-entrepreneur.", "Sí. Ahora trabaja en modo híbrido: dos días en la oficina, tres en casa. Y su amigo se hizo autónomo."],
      ["camila", "Attention à la précarité ! L'ubérisation a créé des emplois précaires. Mais la semaine de quatre jours séduit de plus en plus d'entreprises en France.", "¡Ojo con la precariedad! La uberización creó empleos precarios. Pero la semana de cuatro días seduce a cada vez más empresas en Francia."]
    ],
    fijate: "Fíjate: une reconversion, un burn-out, du sens, l'équilibre vie pro / vie perso, en hybride, auto-entrepreneur, la précarité, l'ubérisation, la semaine de quatre jours."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario del trabajo de hoy",
      idea: "Tendencias: l'automatisation, le télétravail, le travail hybride (unos días en la oficina, otros en casa), la semaine de quatre jours. Estatus: un auto-entrepreneur (autónomo), un freelance, l'ubérisation (economía de plataformas con trabajadores independientes), la précarité. Bienestar: l'équilibre vie pro / vie perso, le burn-out (agotamiento profesional), la quête de sens (búsqueda de sentido), l'isolement. Formación: la reconversion professionnelle (cambiar de profesión; no es religiosa), la formation continue, les compétences transversales.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["faire une reconversion · une reconversion", "cambiar de profesión", "formación"],
        ["l'ubérisation de l'économie", "la economía de plataformas con trabajadores independientes", "estatus"],
        ["Il a fait un burn-out.", "Tuvo un agotamiento profesional.", "bienestar"],
        ["Elle travaille en hybride : deux jours au bureau, trois chez elle. · hybride", "Trabaja en modo híbrido: dos días en la oficina, tres en casa.", "tendencia"],
        ["Il est devenu auto-entrepreneur. · entrepreneur", "Se hizo autónomo.", "estatus"],
        ["la précarité · la formation continue · la quête de sens · l'automatisation", "la precariedad · la formación continua · la búsqueda de sentido · la automatización", "vocabulario"],
        ["la flexibilité · la semaine de quatre jours · la formation continue · le télétravail choisi", "la flexibilidad · la semana de cuatro días · la formación continua · el teletrabajo elegido", "Oportunidad"],
        ["la précarité · l'isolement · le burn-out · la surveillance numérique", "la precariedad · el aislamiento · el agotamiento · la vigilancia digital", "Riesgo"],
        ["Après dix ans comme comptable, elle a fait une reconversion dans le graphisme.", "Tras diez años como contable, se reconvirtió al diseño gráfico.", "formación"],
        ["Il cherche un meilleur équilibre", "Busca un mejor equilibrio", "bienestar"],
        ["La semaine de quatre jours séduit de plus en plus d'entreprises en France.", "La semana de cuatro días seduce a cada vez más empresas en Francia.", "tendencia"]
      ]],
      ej: [["De plus en plus de salariés cherchent du sens dans leur travail.", "Cada vez más empleados buscan sentido en su trabajo."], ["Elle a fait une reconversion dans l'informatique.", "Se reconvirtió hacia la informática."], ["L'ubérisation a créé des emplois précaires.", "La uberización creó empleos precarios."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la reconversion = conversión religiosa", "la reconversion professionnelle = cambio de profesión", "Contexto laboral."], ["Elle a fait une conversion dans le graphisme.", "Elle a fait une reconversion dans le graphisme.", "Con re-."], ["Il est devenu auto-entreprise.", "Il est devenu auto-entrepreneur.", "La persona: entrepreneur."]] }
  ],
  ejemplos: [
    { sit: "«faire une reconversion» es…", resp: "cambiar de profesión", pasos: ["Contexto laboral."], porque: "Formación." },
    { sit: "«l'ubérisation de l'économie» es…", resp: "la economía de plataformas con trabajadores independientes", pasos: ["De Uber."], porque: "Estatus." },
    { sit: "«Il a fait un burn-out.» Tuvo…", resp: "un agotamiento profesional", pasos: ["burn-out."], porque: "Bienestar." }
  ],
  comprueba: [
    { q: "«Le travail hybride» combina…", o: ["oficina y casa", "dos empleos"], a: 0, b: "gr", porque: "Híbrido." },
    { q: "«La précarité» es…", o: ["un riesgo", "una oportunidad"], a: 0, b: "gr", porque: "Inestabilidad." },
    { q: "«La quête de sens» es…", o: ["la búsqueda de sentido", "la búsqueda de dinero"], a: 0, b: "gr", porque: "Sentido." }
  ],
  practica: [
    { fase: "guiada", c: ["b3at-tendances", "b3at-bienetre"], k: "sort", ask: "¿Oportunidad o riesgo?", q: "Clasifica.", cats: ["Oportunidad", "Riesgo"], items: [["la flexibilité", 0], ["la semaine de quatre jours", 0], ["la formation continue", 0], ["le télétravail choisi", 0], ["la précarité", 1], ["l'isolement", 1], ["le burn-out", 1], ["la surveillance numérique", 1]], pista: "¿Mejora o empeora?", why: "Oportunidades y riesgos." },
    { fase: "guiada", c: ["b3at-bienetre"], k: "choice", es: true, ask: "«faire une reconversion» es…", q: "Elige.", o: ["cambiar de profesión", "convertirse a una religión"], a: 0, pista: "Trabajo.", why: "Reconversión." },
    { fase: "guiada", c: ["b3at-tendances"], k: "choice", es: true, ask: "«l'ubérisation de l'économie» es…", q: "Elige.", o: ["la economía de plataformas con trabajadores independientes", "el transporte público"], a: 0, pista: "Uber.", why: "Plataformas." },
    { fase: "indep", c: ["b3at-bienetre"], k: "choice", es: true, ask: "«Il a fait un burn-out.» Tuvo…", q: "Elige.", o: ["un agotamiento profesional", "un ascenso"], a: 0, why: "Agotamiento." },
    { fase: "indep", c: ["b3at-tendances"], k: "fill", ask: "«híbrido»", q: "Elle travaille en ___ : deux jours au bureau, trois chez elle.", acc: ["hybride"], why: "<b>hybride</b>." },
    { fase: "indep", c: ["b3at-tendances"], k: "fill", ask: "«autónomo» (auto-…)", q: "Il est devenu auto-___ .", acc: ["entrepreneur"], why: "<b>entrepreneur</b>." },
    { fase: "aplica", c: ["b3at-tendances", "b3at-bienetre"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["la précarité", "la precariedad"], ["la formation continue", "la formación continua"], ["la quête de sens", "la búsqueda de sentido"], ["l'automatisation", "la automatización"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3at-bienetre"], k: "spot", ask: "Encuentra el error.", s: "Après dix ans comme comptable , elle a fait une [conversion] dans le graphisme .", fix: "reconversion", why: "<b>reconversion</b>." },
    { fase: "aplica", c: ["b3at-tendances"], k: "choice", es: true, ask: "«Le travail hybride» combina…", q: "Elige.", o: ["oficina y casa", "dos empleos a la vez"], a: 0, why: "Híbrido." },
    { fase: "dominio", c: ["b3at-bienetre"], k: "order", ask: "Ordena: «Busca un mejor equilibrio».", tokens: ["Il cherche", "un meilleur", "équilibre"], why: "<b>Il cherche un meilleur équilibre</b>" },
    { fase: "dominio", c: ["b3at-tendances"], k: "choice", es: true, ask: "«La précarité» es…", q: "Elige.", o: ["un riesgo", "una oportunidad"], a: 0, why: "Riesgo." },
    { fase: "dominio", c: ["b3at-tendances", "b3at-bienetre"], k: "listen", say: "La semaine de quatre jours séduit de plus en plus d'entreprises en France.", acc: ["La semaine de quatre jours séduit de plus en plus d'entreprises en France."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La semaine de quatre jours séduit de plus en plus d'entreprises en France.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "France"], previo: [] }
};

/* ── 45. La recherche scientifique et l'innovation ── */
E["b21-sciences"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La recherche scientifique et l'innovation",
  objetivo: {
    que: "Vas a hablar de ciencia: quién investiga, cómo se investiga (el método) y qué se obtiene (descubrimientos, patentes, avances).",
    corto: "Les chercheurs ont fait une découverte majeure. · L'essai clinique a duré trois ans.",
    podras: ["Nombrar a las personas y los lugares: un(e) chercheur/-euse, un laboratoire, le CNRS.", "Describir el método: formuler une hypothèse, mener une expérience, analyser des données, publier des résultats.", "Hablar de resultados: une découverte, une avancée, une percée, un brevet, un essai clinique."],
    iconos: ["ic2/bombilla", "ic2/engranaje", "ic2/libros"],
    previos: ["La salud (B1.1, lección 56), la salud pública (B1.2, lección 44) y la tecnología (B1.2, lección 45)."],
    capacidad: "Ahora entiendes y comentas una noticia científica."
  },
  requiere: R("b2ti-voc", "b2sa-prev", "b1sa-traitement"), recupera: ["b2ti-voc"],
  conceptos: {
    "b3sc-methode": { n: "el método: un chercheur, un laboratoire; formuler une hypothèse, mener une expérience (experimento; también «experiencia»), collecter / analyser des données, publier des résultats; les financements", b: "gr" },
    "b3sc-resultats": { n: "resultados: une découverte, une avancée, une percée (un avance importante), une publication, un brevet (una patente; déposer un brevet), un essai clinique, un traitement, un vaccin", b: "gr" }
  },
  video: {
    titulo: "La ciencia en francés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bombilla", grande: "une découverte", seg: [
        { es: "Hola. Del laboratorio a la noticia." } ] },
      { v: "frase", filas: [
          { nota: "descubrimiento", p: 1, partes: [["Les chercheurs ont fait une découverte majeure.", "-", 1]] },
          { nota: "medicina", p: 2, partes: [["L'essai clinique a duré trois ans.", "-", 2]] },
          { nota: "avance", p: 3, partes: [["Cette avancée ouvre de nouvelles perspectives.", "-", 3]] } ], seg: [
        { fr: "Les chercheurs ont fait une découverte majeure.", p: 1 }, { fr: "L'essai clinique a duré trois ans.", p: 2 }, { fr: "Cette avancée ouvre de nouvelles perspectives.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Llevar a cabo un experimento»", o: ["mener une expérience", "faire une découverte"], a: 0,
        bien: "¡Sí! Mener une expérience.", mal: "Se dice mener une expérience.",
        seg: [ { es: "Pausa. Experimento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une hypothèse", "mener une expérience", "une découverte", "un brevet", "une percée"], seg: [
        { es: "Método y resultados.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La visita al laboratorio", img: "bg-universidad", yo: "camila",
    escena: "Camila visita el laboratorio donde trabaja una investigadora amiga de Madame Sofia.",
    pj: PJ,
    lineas: [
      ["sofia", "Ici, les chercheurs ont mené une expérience pendant deux ans. Ils ont d'abord formulé une hypothèse.", "Aquí los investigadores llevaron a cabo un experimento durante dos años. Primero formularon una hipótesis."],
      ["camila", "Et les résultats ? Ils les ont publiés ?", "¿Y los resultados? ¿Los publicaron?"],
      ["sofia", "Oui, ils ont publié leurs résultats dans une revue. C'est une percée scientifique : ils vont déposer un brevet.", "Sí, publicaron sus resultados en una revista. Es un gran avance científico: van a solicitar una patente."],
      ["camila", "Incroyable ! Cette découverte pourrait révolutionner le traitement de certaines maladies. Il faudra un essai clinique, non ?", "¡Increíble! Este descubrimiento podría revolucionar el tratamiento de algunas enfermedades. Hará falta un ensayo clínico, ¿no?"]
    ],
    fijate: "Fíjate: mené une expérience, formulé une hypothèse, publié leurs résultats, une percée, déposer un brevet, cette découverte, un essai clinique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Método y resultados",
      idea: "Personas y lugares: un(e) chercheur / chercheuse (investigador), un(e) scientifique, un laboratoire, le CNRS. Método: formuler une hypothèse, mener une expérience (ojo: expérience es «experimento» y también «experiencia»), collecter et analyser des données, publier des résultats (participio: publié; concuerda solo con être o con un COD delante: ils ont mené, nunca «menés»). Resultados: une découverte, une avancée, une percée (avance importante), un brevet (patente: déposer un brevet), une publication. Medicina: un essai clinique, un traitement, un vaccin. Dinero: les financements.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["une percée scientifique", "un avance importante", "resultado"],
        ["déposer un brevet", "solicitar una patente", "resultado"],
        ["mener une expérience", "llevar a cabo un experimento", "método"],
        ["Les chercheurs ont publié leurs résultats dans une revue. · publié", "Los investigadores publicaron sus resultados en una revista.", "método"],
        ["Il faut d'abord formuler une hypothèse. · hypothèse", "Primero hay que formular una hipótesis.", "método"],
        ["un chercheur · une découverte · un essai clinique · les financements", "un investigador · un descubrimiento · un ensayo clínico · la financiación", "vocabulario"],
        ["formuler une hypothèse · mener une expérience · collecter des données · analyser", "formular una hipótesis · llevar a cabo un experimento · recoger datos · analizar", "Método"],
        ["une découverte · une publication · un brevet · une avancée", "un descubrimiento · una publicación · una patente · un avance", "Resultado"],
        ["Les chercheurs ont mené une expérience pendant deux ans. · mené", "Los investigadores llevaron a cabo un experimento durante dos años.", "participio"],
        ["Les scientifiques ont publié leurs résultats", "Los científicos publicaron sus resultados", "método"],
        ["Cette découverte pourrait révolutionner le traitement de certaines maladies.", "Este descubrimiento podría revolucionar el tratamiento de algunas enfermedades.", "resultado"]
      ]],
      ej: [["Les chercheurs ont fait une découverte majeure.", "Los investigadores hicieron un gran descubrimiento."], ["L'essai clinique a duré trois ans.", "El ensayo clínico duró tres años."], ["Cette avancée ouvre de nouvelles perspectives.", "Este avance abre nuevas perspectivas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une expérience = solo una vivencia", "une expérience = un experimento / una experiencia", "Doble sentido."], ["Les chercheurs ont menés une expérience.", "Les chercheurs ont mené une expérience.", "Con avoir, sin concordancia con el sujeto."], ["un brevet = un resumen breve", "un brevet = una patente", "Falso amigo."]] }
  ],
  ejemplos: [
    { sit: "«une percée scientifique» es…", resp: "un avance importante", pasos: ["percer = abrirse paso."], porque: "Resultado." },
    { sit: "«déposer un brevet»: un brevet es…", resp: "una patente", pasos: ["Falso amigo."], porque: "Resultado." },
    { sit: "«Llevar a cabo un experimento»", resp: "mener une expérience", pasos: ["mener."], porque: "Método." }
  ],
  comprueba: [
    { q: "«Une expérience» en un laboratorio es…", o: ["un experimento", "un recuerdo"], a: 0, b: "gr", porque: "Doble sentido." },
    { q: "«Formuler une hypothèse» es parte del…", o: ["método", "resultado"], a: 0, b: "gr", porque: "Antes del experimento." },
    { q: "«Un brevet» es…", o: ["una patente", "un breve resumen"], a: 0, b: "gr", porque: "Falso amigo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3sc-methode", "b3sc-resultats"], k: "sort", ask: "¿Método o resultado?", q: "Clasifica.", cats: ["Método", "Resultado"], items: [["formuler une hypothèse", 0], ["mener une expérience", 0], ["collecter des données", 0], ["analyser", 0], ["une découverte", 1], ["une publication", 1], ["un brevet", 1], ["une avancée", 1]], pista: "¿Proceso o producto?", why: "Método y resultados." },
    { fase: "guiada", c: ["b3sc-resultats"], k: "choice", es: true, ask: "«une percée scientifique» es…", q: "Elige.", o: ["un avance importante", "un agujero"], a: 0, pista: "Ciencia.", why: "Percée." },
    { fase: "guiada", c: ["b3sc-resultats"], k: "choice", es: true, ask: "«déposer un brevet»: un brevet es…", q: "Elige.", o: ["una patente", "un resumen breve"], a: 0, pista: "Falso amigo.", why: "Patente." },
    { fase: "indep", c: ["b3sc-methode"], k: "choice", ask: "«Llevar a cabo un experimento»", q: "«___»", o: ["mener une expérience", "mener une découverte"], a: 0, why: "<b>mener une expérience</b>." },
    { fase: "indep", c: ["b3sc-methode"], k: "fill", ask: "«publicado» (publier).", q: "Les chercheurs ont ___ leurs résultats dans une revue.", acc: ["publié"], why: "<b>publié</b>." },
    { fase: "indep", c: ["b3sc-methode"], k: "fill", ask: "«hipótesis»", q: "Il faut d'abord formuler une ___ .", acc: ["hypothèse"], why: "<b>hypothèse</b>." },
    { fase: "aplica", c: ["b3sc-methode", "b3sc-resultats"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["un chercheur", "un investigador"], ["une découverte", "un descubrimiento"], ["un essai clinique", "un ensayo clínico"], ["les financements", "la financiación"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3sc-methode"], k: "spot", ask: "Encuentra el error.", s: "Les chercheurs ont [menés] une expérience pendant deux ans .", fix: "mené", why: "<b>mené</b>." },
    { fase: "aplica", c: ["b3sc-methode"], k: "choice", es: true, ask: "«Une expérience» en un laboratorio es…", q: "Elige.", o: ["un experimento", "un recuerdo"], a: 0, why: "Experimento." },
    { fase: "dominio", c: ["b3sc-methode"], k: "order", ask: "Ordena: «Los científicos publicaron sus resultados».", tokens: ["Les scientifiques", "ont publié", "leurs résultats"], why: "<b>Les scientifiques ont publié leurs résultats</b>" },
    { fase: "dominio", c: ["b3sc-methode"], k: "choice", es: true, ask: "«Formuler une hypothèse» es parte del…", q: "Elige.", o: ["método", "resultado"], a: 0, why: "Método." },
    { fase: "dominio", c: ["b3sc-methode", "b3sc-resultats"], k: "listen", say: "Cette découverte pourrait révolutionner le traitement de certaines maladies.", acc: ["Cette découverte pourrait révolutionner le traitement de certaines maladies."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Cette découverte pourrait révolutionner le traitement de certaines maladies.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "CNRS"], previo: [] }
};

/* ── 46. Bioéthique et progrès médical ── */
E["b21-bioethique"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Bioéthique et progrès médical",
  objetivo: {
    que: "Vas a hablar de los dilemas de la medicina con prudencia y matices: el final de la vida, la reproducción asistida, la genética y el consentimiento.",
    corto: "La loi sur la fin de vie fait débat. · Le consentement du patient est indispensable.",
    podras: ["Hablar del final de la vida: l'euthanasie, le suicide assisté, les soins palliatifs, les directives anticipées.", "Hablar de reproducción y genética: la PMA, la GPA, le génome, le clonage, le don d'organes.", "Usar los valores y matizar: la dignité, le consentement, le libre choix; C'est une question délicate."],
    iconos: ["ic2/corazon", "ic2/pregunta", "ic2/espadas"],
    previos: ["Debatir (lección 8), la modalización (lección 6) y la salud pública (B1.2, lección 44)."],
    capacidad: "Ahora participas en un debate bioético con respeto y matices."
  },
  requiere: R("b2sa-systeme", "b3db-accord", "b3mo-echelle"), recupera: ["b3db-accord"],
  conceptos: {
    "b3be-themes": { n: "temas: la fin de vie (el final de la vida), l'euthanasie, le suicide assisté, les soins palliatifs, les directives anticipées; la PMA (reproducción asistida), la GPA (gestación subrogada), la congélation d'ovocytes; le génome, le clonage, le don d'organes", b: "gr" },
    "b3be-valeurs": { n: "valores: la dignité, le consentement (el consentimiento), l'éthique, le libre choix; matizar: C'est une question délicate. Il s'agit d'une question délicate.", b: "gr" }
  },
  video: {
    titulo: "Dilemas de la medicina", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "le consentement", seg: [
        { es: "Hola. Temas delicados que se debaten con matices." } ] },
      { v: "frase", filas: [
          { nota: "debate", p: 1, partes: [["La loi sur la fin de vie fait débat.", "-", 1]] },
          { nota: "valor", p: 2, partes: [["Le consentement du patient est indispensable.", "-", 2]] },
          { nota: "cuidados", p: 3, partes: [["Les soins palliatifs soulagent la douleur.", "-", 3]] } ], seg: [
        { fr: "La loi sur la fin de vie fait débat.", p: 1 }, { fr: "Le consentement du patient est indispensable.", p: 2 }, { fr: "Les soins palliatifs soulagent la douleur.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«El consentimiento del paciente»", o: ["le consentement du patient", "le consentiment du patient"], a: 0,
        bien: "¡Sí! Consentement.", mal: "Se escribe consentement.",
        seg: [ { es: "Pausa. Consentement." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la fin de vie", "les soins palliatifs", "la PMA", "le consentement", "la dignité"], seg: [
        { es: "Temas, valores y prudencia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El debate en clase", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia propone un debate sobre la ley del final de la vida.",
    pj: PJ,
    lineas: [
      ["sofia", "Aujourd'hui, un sujet sensible : la loi sur la fin de vie fait débat en France.", "Hoy, un tema sensible: la ley sobre el final de la vida genera debate en Francia."],
      ["camila", "Il s'agit d'une question délicate. Pour moi, le consentement du patient est indispensable, et la dignité aussi.", "Se trata de una cuestión delicada. Para mí, el consentimiento del paciente es indispensable, y la dignidad también."],
      ["hugo", "Mais il faut d'abord développer les soins palliatifs : ils soulagent la douleur.", "Pero primero hay que desarrollar los cuidados paliativos: alivian el dolor."],
      ["sofia", "Le débat sur la fin de vie oppose la liberté individuelle et la protection des plus fragiles. Et la PMA, le don d'organes… ce sont d'autres questions de bioéthique.", "El debate sobre el final de la vida enfrenta la libertad individual y la protección de los más frágiles. Y la reproducción asistida, la donación de órganos… son otras cuestiones de bioética."]
    ],
    fijate: "Fíjate: la fin de vie, une question délicate, le consentement, la dignité, les soins palliatifs, la liberté individuelle, la PMA, le don d'organes."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Temas y valores de la bioética",
      idea: "Final de la vida: la fin de vie, l'euthanasie, le suicide assisté, les soins palliatifs (cuidados paliativos: soulager la douleur), les directives anticipées. Reproducción: la PMA (procréation médicalement assistée, reproducción asistida), la GPA (gestation pour autrui, gestación subrogada), la congélation d'ovocytes, le don de sperme. Genética: le génome, modifier le génome, les thérapies géniques, le clonage. Otros: le don d'organes. Valores: la dignité, le consentement (consentimiento; no «consentiment»), l'éthique, le libre choix. Son temas sensibles: C'est une question délicate / Il s'agit d'une question délicate.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["les soins palliatifs", "los cuidados paliativos", "final de la vida"],
        ["la PMA", "la reproducción asistida", "reproducción"],
        ["C'est une question délicate. · Il s'agit d'une question délicate", "Es una cuestión delicada. · Se trata de una cuestión delicada", "matizar"],
        ["Le consentement du patient est obligatoire. · consentement", "El consentimiento del paciente es obligatorio.", "valor"],
        ["Le don d'organes sauve des vies. · organes", "La donación de órganos salva vidas.", "donación"],
        ["la fin de vie · le génome · la dignité · le clonage", "el final de la vida · el genoma · la dignidad · la clonación", "vocabulario"],
        ["l'euthanasie · les soins palliatifs · le suicide assisté · les directives anticipées", "la eutanasia · los cuidados paliativos · el suicidio asistido · las voluntades anticipadas", "Final de la vida"],
        ["la PMA · la GPA · la congélation d'ovocytes · le don de sperme", "la reproducción asistida · la gestación subrogada · la congelación de óvulos · la donación de esperma", "Reproducción"],
        ["Aucun traitement ne peut être imposé sans le consentement du patient.", "Ningún tratamiento puede imponerse sin el consentimiento del paciente.", "valor"],
        ["Le débat sur la fin de vie oppose la liberté individuelle et la protection des plus fragiles.", "El debate sobre el final de la vida enfrenta la libertad individual y la protección de los más frágiles.", "debate"]
      ]],
      ej: [["La loi sur la fin de vie fait débat.", "La ley sobre el final de la vida genera debate."], ["Le consentement du patient est indispensable.", "El consentimiento del paciente es indispensable."], ["Les soins palliatifs soulagent la douleur.", "Los cuidados paliativos alivian el dolor."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le consentiment", "le consentement", "Ortografía: -ement."], ["le consentement = consentir mimos", "le consentement = el consentimiento", "Palabra clave en ética."], ["Tomar partido sin matices en un tema sensible", "C'est une question délicate…", "Prudencia y matices."]] }
  ],
  ejemplos: [
    { sit: "«les soins palliatifs» son…", resp: "los cuidados paliativos", pasos: ["soins = cuidados."], porque: "Final de la vida." },
    { sit: "«la PMA» es…", resp: "la reproducción asistida", pasos: ["Sigla."], porque: "Reproducción." },
    { sit: "Quieres decir que es un tema sensible.", resp: "C'est une question délicate.", pasos: ["Matizar."], porque: "Prudencia." }
  ],
  comprueba: [
    { q: "«La fin de vie» es…", o: ["el final de la vida", "el fin de semana"], a: 0, b: "gr", porque: "Bioética." },
    { q: "«La GPA» es…", o: ["la gestación subrogada", "la reproducción asistida"], a: 0, b: "gr", porque: "Gestation pour autrui." },
    { q: "«Le consentement» se escribe…", o: ["con -ement", "con -iment"], a: 0, b: "gr", porque: "consentement." }
  ],
  practica: [
    { fase: "guiada", c: ["b3be-themes"], k: "sort", ask: "¿Final de la vida o reproducción?", q: "Clasifica.", cats: ["Final de la vida", "Reproducción"], items: [["l'euthanasie", 0], ["les soins palliatifs", 0], ["le suicide assisté", 0], ["les directives anticipées", 0], ["la PMA", 1], ["la GPA", 1], ["la congélation d'ovocytes", 1], ["le don de sperme", 1]], pista: "¿Nacer o morir?", why: "Temas." },
    { fase: "guiada", c: ["b3be-themes"], k: "choice", es: true, ask: "«les soins palliatifs» son…", q: "Elige.", o: ["los cuidados paliativos", "los primeros auxilios"], a: 0, pista: "Aliviar.", why: "Paliativos." },
    { fase: "guiada", c: ["b3be-themes"], k: "choice", es: true, ask: "«la PMA» es…", q: "Elige.", o: ["la reproducción asistida", "la medicina preventiva"], a: 0, pista: "Procréation…", why: "PMA." },
    { fase: "indep", c: ["b3be-valeurs"], k: "choice", ask: "Quieres decir que es un tema sensible.", q: "«___»", o: ["C'est une question délicate.", "C'est une question facile."], a: 0, why: "Prudencia." },
    { fase: "indep", c: ["b3be-valeurs"], k: "fill", ask: "«consentimiento»", q: "Le ___ du patient est obligatoire.", acc: ["consentement"], why: "<b>consentement</b>." },
    { fase: "indep", c: ["b3be-themes"], k: "fill", ask: "«órganos»", q: "Le don d'___ sauve des vies.", acc: ["organes"], why: "<b>organes</b>." },
    { fase: "aplica", c: ["b3be-themes", "b3be-valeurs"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["la fin de vie", "el final de la vida"], ["le génome", "el genoma"], ["la dignité", "la dignidad"], ["le clonage", "la clonación"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3be-valeurs"], k: "spot", ask: "Encuentra el error.", s: "Aucun traitement ne peut être imposé sans le [consentiment] du patient .", fix: "consentement", why: "<b>consentement</b>." },
    { fase: "aplica", c: ["b3be-themes"], k: "choice", es: true, ask: "«La GPA» es…", q: "Elige.", o: ["la gestación subrogada", "la reproducción asistida"], a: 0, why: "GPA." },
    { fase: "dominio", c: ["b3be-valeurs"], k: "order", ask: "Ordena: «Se trata de una cuestión delicada».", tokens: ["Il s'agit", "d'une question", "délicate"], why: "<b>Il s'agit d'une question délicate</b>" },
    { fase: "dominio", c: ["b3be-themes"], k: "choice", es: true, ask: "«La fin de vie» es…", q: "Elige.", o: ["el final de la vida", "el fin de semana"], a: 0, why: "Bioética." },
    { fase: "dominio", c: ["b3be-themes", "b3be-valeurs"], k: "listen", say: "Le débat sur la fin de vie oppose la liberté individuelle et la protection des plus fragiles.", acc: ["Le débat sur la fin de vie oppose la liberté individuelle et la protection des plus fragiles."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le débat sur la fin de vie oppose la liberté individuelle et la protection des plus fragiles.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "France", "PMA", "GPA"], previo: [] }
};

/* ── B2.1·8 Cultura, educación y medios · 47. Art, culture et patrimoine ── */
E["b21-patrimoine"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Art, culture et patrimoine",
  objetivo: {
    que: "Vas a hablar del patrimonio: monumentos, obras y tradiciones, cómo se conservan y quién financia la cultura.",
    corto: "Notre-Dame a été restaurée après l'incendie. · Le mécénat finance de nombreux musées.",
    podras: ["Distinguir el patrimonio material (le Mont-Saint-Michel) e inmaterial (la gastronomie française, las fiestas, los saberes).", "Usar las acciones: restaurer, conserver, préserver, valoriser; un monument historique, un site classé.", "Hablar del acceso y del arte: le mécénat, la gratuité, les subventions; une œuvre, un chef-d'œuvre, un vernissage."],
    iconos: ["ic2/torre-eiffel", "ic2/corona", "ic2/libro"],
    previos: ["La crítica cultural (B1.1, lección 62), la voz pasiva (B1.2, lección 6) y la francofonía (B1.2, lección 66)."],
    capacidad: "Ahora hablas de arte y patrimonio como en una visita guiada."
  },
  requiere: R("b1cc2-presenter", "b1cc2-avis", "b2vp-forme"), recupera: ["b1cc2-presenter"],
  conceptos: {
    "b3pt-patrimoine": { n: "patrimonio material (un monument historique, un site classé: sitio protegido; le Mont-Saint-Michel) e inmaterial (tradiciones, saberes, fiestas: la gastronomie française); restaurer, conserver, préserver, valoriser (poner en valor)", b: "gr" },
    "b3pt-acces": { n: "acceso y arte: le mécénat (mecenazgo), la gratuité, les subventions, les Journées du patrimoine; une œuvre, un chef-d'œuvre, une exposition, un vernissage (inauguración de una exposición), un conservateur de musée", b: "gr" }
  },
  video: {
    titulo: "El patrimonio", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/torre-eiffel", grande: "le patrimoine", seg: [
        { es: "Hola. Lo que heredamos y queremos conservar." } ] },
      { v: "frase", filas: [
          { nota: "restaurar", p: 1, partes: [["Notre-Dame a été restaurée après l'incendie.", "-", 1]] },
          { nota: "inmaterial", p: 2, partes: [["Le repas gastronomique français est inscrit au patrimoine immatériel.", "-", 2]] },
          { nota: "mecenazgo", p: 3, partes: [["Le mécénat finance de nombreux musées.", "-", 3]] } ], seg: [
        { fr: "Notre-Dame a été restaurée après l'incendie.", p: 1 }, { fr: "Le repas gastronomique français est inscrit au patrimoine immatériel.", p: 2 }, { fr: "Le mécénat finance de nombreux musées.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«invité au vernissage»: un vernissage es…", o: ["la inauguración de una exposición", "un barnizado de muebles"], a: 0, es: true,
        bien: "¡Sí! La inauguración.", mal: "En arte: la inauguración.",
        seg: [ { es: "Pausa. Vernissage." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["restaurer", "un site classé", "immatériel", "le mécénat", "un chef-d'œuvre"], seg: [
        { es: "Material, inmaterial, conservar y financiar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las Jornadas del Patrimonio", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo aprovechan las Journées du patrimoine en París.",
    pj: PJ,
    lineas: [
      ["hugo", "Lors des Journées du patrimoine, de nombreux monuments ouvrent gratuitement leurs portes.", "Durante las Jornadas del Patrimonio, muchos monumentos abren sus puertas gratis."],
      ["camila", "Super ! Notre-Dame a été restaurée après l'incendie, non ? Grâce au mécénat ?", "¡Genial! Notre-Dame fue restaurada tras el incendio, ¿no? ¿Gracias al mecenazgo?"],
      ["hugo", "Oui, en partie. Et ce soir, on est invités au vernissage d'une exposition. La Joconde n'y sera pas, mais il y a un chef-d'œuvre de Monet !", "Sí, en parte. Y esta noche estamos invitados a la inauguración de una exposición. La Gioconda no estará, ¡pero hay una obra maestra de Monet!"],
      ["camila", "Et le patrimoine immatériel ? — Le repas gastronomique français, par exemple. Il faut préserver le patrimoine, matériel et immatériel.", "¿Y el patrimonio inmaterial? — La comida gastronómica francesa, por ejemplo. Hay que preservar el patrimonio, material e inmaterial."]
    ],
    fijate: "Fíjate: les Journées du patrimoine, gratuitement, restaurée, le mécénat, le vernissage, un chef-d'œuvre, le patrimoine immatériel, préserver."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario del patrimonio",
      idea: "Patrimonio material: un monument historique, un site classé (sitio protegido; concuerda: un monument classé), le Mont-Saint-Michel. Patrimonio inmaterial: tradiciones, saberes, fiestas (le patrimoine immatériel de l'UNESCO: la gastronomie française). Acciones: restaurer (Notre-Dame a été restaurée), conserver, préserver, valoriser (poner en valor), rénover. Acceso: la démocratisation de la culture, la gratuité, les subventions, le mécénat (mecenazgo). Arte: une œuvre, un chef-d'œuvre (obra maestra), une exposition, un vernissage (inauguración), un conservateur (de musée, no solo político).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["grâce au mécénat · le mécénat", "gracias al mecenazgo", "acceso"],
        ["invité au vernissage · un vernissage", "la inauguración de una exposición", "arte"],
        ["patrimoine immatériel", "tradiciones, saberes, fiestas", "patrimonio"],
        ["La cathédrale a été restaurée en cinq ans. · restaurée · restaurer · conserver", "La catedral fue restaurada en cinco años. · restaurar · conservar", "acción"],
        ["La Joconde est un chef-d'œuvre. · chef", "La Gioconda es una obra maestra.", "arte"],
        ["un site classé · valoriser · une œuvre · la gratuité", "un sitio protegido · poner en valor · una obra · la gratuidad", "vocabulario"],
        ["le château de Versailles · le pont du Gard · la cathédrale de Chartres · le Mont-Saint-Michel", "el palacio de Versalles · el puente del Gard · la catedral de Chartres · el Mont-Saint-Michel", "Patrimonio material"],
        ["la gastronomie française · les fêtes traditionnelles · le savoir-faire artisanal · les chants populaires", "la gastronomía francesa · las fiestas tradicionales · el saber hacer artesanal · los cantos populares", "Patrimonio inmaterial"],
        ["Le château est un monument historique classé depuis 1840. · classé", "El castillo es un monumento histórico protegido desde 1840.", "concordancia"],
        ["Il faut préserver le patrimoine", "Hay que preservar el patrimonio", "acción"],
        ["Lors des Journées du patrimoine, de nombreux monuments ouvrent gratuitement leurs portes.", "Durante las Jornadas del Patrimonio, muchos monumentos abren sus puertas gratis.", "acceso"]
      ]],
      ej: [["Notre-Dame a été restaurée après l'incendie.", "Notre-Dame fue restaurada tras el incendio."], ["Le repas gastronomique français est inscrit au patrimoine immatériel.", "La comida gastronómica francesa está inscrita en el patrimonio inmaterial."], ["Le mécénat finance de nombreux musées.", "El mecenazgo financia muchos museos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un conservateur = solo un político de derechas", "un conservateur de musée = conservador de museo", "Doble sentido."], ["un monument historique classée", "un monument historique classé", "Concuerda con monument (masculino)."], ["un chef d'œuvre (sin guion)", "un chef-d'œuvre", "Con guion."]] }
  ],
  ejemplos: [
    { sit: "«grâce au mécénat»: le mécénat es…", resp: "el mecenazgo", pasos: ["Mécène = mecenas."], porque: "Acceso." },
    { sit: "«invité au vernissage»: un vernissage es…", resp: "la inauguración de una exposición", pasos: ["Arte."], porque: "Arte." },
    { sit: "«patrimoine immatériel» reúne…", resp: "tradiciones, saberes, fiestas", pasos: ["Sin cuerpo físico."], porque: "Patrimonio." }
  ],
  comprueba: [
    { q: "«Un site classé» es…", o: ["un sitio protegido", "un sitio ordenado"], a: 0, b: "gr", porque: "Protección." },
    { q: "La gastronomía francesa es patrimonio…", o: ["inmaterial", "material"], a: 0, b: "gr", porque: "Tradición." },
    { q: "«Valoriser» significa…", o: ["poner en valor", "valorar el precio"], a: 0, b: "gr", porque: "Patrimonio." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pt-patrimoine"], k: "sort", ask: "¿Patrimonio material o inmaterial?", q: "Clasifica.", cats: ["Patrimonio material", "Patrimonio inmaterial"], items: [["le château de Versailles", 0], ["le pont du Gard", 0], ["la cathédrale de Chartres", 0], ["le Mont-Saint-Michel", 0], ["la gastronomie française", 1], ["les fêtes traditionnelles", 1], ["le savoir-faire artisanal", 1], ["les chants populaires", 1]], pista: "¿Se puede tocar?", why: "Material o inmaterial." },
    { fase: "guiada", c: ["b3pt-acces"], k: "choice", es: true, ask: "«grâce au mécénat»: le mécénat es…", q: "Elige.", o: ["el mecenazgo", "el mecanismo"], a: 0, pista: "Mecenas.", why: "Mecenazgo." },
    { fase: "guiada", c: ["b3pt-acces"], k: "choice", es: true, ask: "«invité au vernissage»: un vernissage es…", q: "Elige.", o: ["la inauguración de una exposición", "un barnizado de muebles"], a: 0, pista: "Arte.", why: "Inauguración." },
    { fase: "indep", c: ["b3pt-patrimoine"], k: "choice", es: true, ask: "«patrimoine immatériel» reúne…", q: "Elige.", o: ["tradiciones, saberes, fiestas", "edificios y puentes"], a: 0, why: "Inmaterial." },
    { fase: "indep", c: ["b3pt-patrimoine"], k: "fill", ask: "«restaurada»", q: "La cathédrale a été ___ en cinq ans.", acc: ["restaurée"], why: "<b>restaurée</b>." },
    { fase: "indep", c: ["b3pt-acces"], k: "fill", ask: "«obra maestra» (…-d'œuvre)", q: "La Joconde est un ___ -d'œuvre.", acc: ["chef"], why: "<b>chef-d'œuvre</b>." },
    { fase: "aplica", c: ["b3pt-patrimoine", "b3pt-acces"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["un site classé", "un sitio protegido"], ["valoriser", "poner en valor"], ["une œuvre", "una obra"], ["la gratuité", "la gratuidad"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3pt-patrimoine"], k: "spot", ask: "Encuentra el error.", s: "Le château est un monument historique [classée] depuis 1840 .", fix: "classé", why: "<b>classé</b>." },
    { fase: "aplica", c: ["b3pt-patrimoine"], k: "choice", es: true, ask: "«Valoriser» el patrimonio significa…", q: "Elige.", o: ["ponerlo en valor", "venderlo"], a: 0, why: "Valorizar." },
    { fase: "dominio", c: ["b3pt-patrimoine"], k: "order", ask: "Ordena: «Hay que preservar el patrimonio».", tokens: ["Il faut", "préserver", "le patrimoine"], why: "<b>Il faut préserver le patrimoine</b>" },
    { fase: "dominio", c: ["b3pt-patrimoine"], k: "choice", es: true, ask: "«Un site classé» es…", q: "Elige.", o: ["un sitio protegido", "un sitio ordenado"], a: 0, why: "Protegido." },
    { fase: "dominio", c: ["b3pt-patrimoine", "b3pt-acces"], k: "listen", say: "Lors des Journées du patrimoine, de nombreux monuments ouvrent gratuitement leurs portes.", acc: ["Lors des Journées du patrimoine, de nombreux monuments ouvrent gratuitement leurs portes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Lors des Journées du patrimoine, de nombreux monuments ouvrent gratuitement leurs portes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Notre-Dame", "Joconde", "Monet", "Versailles", "Gard", "Chartres", "Mont-Saint-Michel", "UNESCO", "Paris"], previo: [] }
};

/* ── 48. Les débats sur l'école ── */
E["b21-ecole-debats"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les débats sur l'école",
  objetivo: {
    que: "Vas a debatir sobre la escuela: las notas, los deberes, el acoso escolar, el abandono y la igualdad de oportunidades.",
    corto: "Le décrochage scolaire touche surtout les milieux défavorisés. · Faut-il supprimer les notes à l'école primaire ?",
    podras: ["Hablar de evaluación: les notes, le contrôle continu, l'évaluation par compétences, le redoublement.", "Hablar de los problemas: le harcèlement scolaire, le décrochage (abandono), la surcharge des classes.", "Proponer soluciones: l'égalité des chances, le tutorat, l'éducation aux médias, développer l'esprit critique."],
    iconos: ["ic2/birrete", "ic2/libros", "ic2/lapiz"],
    previos: ["El sistema educativo (B1.2, lección 43) y debatir (lección 8)."],
    capacidad: "Ahora defiendes tu opinión sobre la escuela en un debate."
  },
  requiere: R("b2ed-etapes", "b2ed-titres", "b3db-accord"), recupera: ["b2ed-etapes"],
  conceptos: {
    "b3ec-problemes": { n: "evaluación y problemas: les notes, les devoirs, le contrôle continu, le redoublement (repetir curso); le harcèlement scolaire (acoso escolar), le décrochage (abandono escolar), les inégalités, la surcharge des classes", b: "gr" },
    "b3ec-solutions": { n: "propuestas: l'égalité des chances (igualdad de oportunidades), la mixité sociale, le tutorat, des classes moins nombreuses, l'éducation aux médias, l'évaluation par compétences, développer l'esprit critique", b: "gr" }
  },
  video: {
    titulo: "Debates sobre la escuela", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/birrete", grande: "l'égalité des chances", seg: [
        { es: "Hola. Notas, deberes, acoso, abandono…" } ] },
      { v: "frase", filas: [
          { nota: "abandono", p: 1, partes: [["Le décrochage scolaire touche surtout les milieux défavorisés.", "-", 1]] },
          { nota: "notas", p: 2, partes: [["Faut-il supprimer les notes à l'école primaire ?", "-", 2]] },
          { nota: "acoso", p: 3, partes: [["Le harcèlement scolaire est puni par la loi.", "-", 3]] } ], seg: [
        { fr: "Le décrochage scolaire touche surtout les milieux défavorisés.", p: 1 }, { fr: "Faut-il supprimer les notes à l'école primaire ?", p: 2 }, { fr: "Le harcèlement scolaire est puni par la loi.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«lutter contre le décrochage»: le décrochage es…", o: ["el abandono escolar", "descolgar el teléfono"], a: 0, es: true,
        bien: "¡Sí! Contexto escolar.", mal: "En la escuela: el abandono.",
        seg: [ { es: "Pausa. Décrochage." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le décrochage", "le harcèlement", "les devoirs", "le redoublement", "l'esprit critique"], seg: [
        { es: "Problemas y propuestas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La reunión de padres", img: "bg-universidad", yo: "camila",
    escena: "Camila acompaña a Hugo a una reunión en el colegio de su hermano pequeño.",
    pj: PJ,
    lineas: [
      ["hugo", "Beaucoup de parents critiquent la quantité de devoirs à la maison. Et certains veulent supprimer les notes.", "Muchos padres critican la cantidad de deberes en casa. Y algunos quieren suprimir las notas."],
      ["camila", "En Colombie aussi, on débat du redoublement. Ici, le contrôle continu remplace une partie des examens finaux ?", "En Colombia también se debate la repetición de curso. ¿Aquí el control continuo reemplaza parte de los exámenes finales?"],
      ["hugo", "Oui. Mais le vrai problème, c'est le harcèlement scolaire : il doit être signalé immédiatement. Et le décrochage touche surtout les milieux défavorisés.", "Sí. Pero el verdadero problema es el acoso escolar: hay que denunciarlo de inmediato. Y el abandono afecta sobre todo a los medios desfavorecidos."],
      ["camila", "Il faut garantir l'égalité des chances. Et l'école doit apprendre aux élèves à développer leur esprit critique face aux écrans.", "Hay que garantizar la igualdad de oportunidades. Y la escuela debe enseñar a los alumnos a desarrollar su espíritu crítico frente a las pantallas."]
    ],
    fijate: "Fíjate: les devoirs, supprimer les notes, le redoublement, le contrôle continu, le harcèlement scolaire, le décrochage, l'égalité des chances, l'esprit critique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la escuela",
      idea: "Evaluación: les notes, les devoirs (deberes), l'évaluation par compétences, le contrôle continu, le redoublement (repetir curso). Vida escolar: l'uniforme, le harcèlement scolaire (acoso; no «harcèlage»), le décrochage (abandono escolar; no es descolgar el teléfono), les rythmes scolaires (horarios). Igualdad: l'égalité des chances (igualdad de oportunidades), la mixité sociale, les zones d'éducation prioritaire. Digital: les écrans en classe, l'enseignement à distance, l'éducation aux médias, l'esprit critique.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["lutter contre le décrochage", "luchar contra el abandono escolar", "problema"],
        ["le harcèlement scolaire", "el acoso escolar", "problema"],
        ["garantir l'égalité des chances", "garantizar la igualdad de oportunidades", "igualdad"],
        ["Beaucoup de parents critiquent la quantité de devoirs à la maison. · devoirs", "Muchos padres critican la cantidad de deberes en casa.", "evaluación"],
        ["Le contrôle continu remplace une partie des examens finaux. · contrôle", "El control continuo reemplaza parte de los exámenes finales.", "evaluación"],
        ["le redoublement · la mixité sociale · les rythmes scolaires · l'esprit critique", "la repetición de curso · la mezcla social · los horarios escolares · el espíritu crítico", "vocabulario"],
        ["le décrochage · le harcèlement · les inégalités · la surcharge des classes", "el abandono · el acoso · las desigualdades · las clases sobrecargadas", "Problema"],
        ["le tutorat · des classes moins nombreuses · l'éducation aux médias · l'évaluation par compétences", "las tutorías · clases menos numerosas · la educación mediática · la evaluación por competencias", "Propuesta"],
        ["Le harcèlement scolaire doit être signalé immédiatement. · harcèlement", "El acoso escolar debe denunciarse de inmediato.", "problema"],
        ["Il faut développer l'esprit critique", "Hay que desarrollar el espíritu crítico", "propuesta"],
        ["L'école doit apprendre aux élèves à développer leur esprit critique face aux écrans.", "La escuela debe enseñar a los alumnos a desarrollar su espíritu crítico frente a las pantallas.", "digital"]
      ]],
      ej: [["Le décrochage scolaire touche surtout les milieux défavorisés.", "El abandono escolar afecta sobre todo a los medios desfavorecidos."], ["Faut-il supprimer les notes à l'école primaire ?", "¿Hay que suprimir las notas en primaria?"], ["Le harcèlement scolaire est puni par la loi.", "El acoso escolar está castigado por la ley."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le décrochage = descolgar el teléfono", "le décrochage scolaire = el abandono escolar", "Contexto escolar."], ["le harcèlage", "le harcèlement", "Sustantivo en -ment."], ["les devoirs = las obligaciones (en la escuela)", "les devoirs = los deberes, las tareas", "Contexto."]] }
  ],
  ejemplos: [
    { sit: "«lutter contre le décrochage»: le décrochage es…", resp: "el abandono escolar", pasos: ["Contexto escolar."], porque: "Problema." },
    { sit: "«le harcèlement scolaire» es…", resp: "el acoso escolar", pasos: ["harceler = acosar."], porque: "Problema." },
    { sit: "«garantir l'égalité des chances»: es…", resp: "la igualdad de oportunidades", pasos: ["chances = oportunidades."], porque: "Igualdad." }
  ],
  comprueba: [
    { q: "«Le redoublement» es…", o: ["la repetición de curso", "el doble de deberes"], a: 0, b: "gr", porque: "Redoubler." },
    { q: "«Le tutorat» es…", o: ["una propuesta", "un problema"], a: 0, b: "gr", porque: "Ayuda." },
    { q: "«Les devoirs» en la escuela son…", o: ["los deberes, las tareas", "los derechos"], a: 0, b: "gr", porque: "Tareas." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ec-problemes", "b3ec-solutions"], k: "sort", ask: "¿Problema o propuesta?", q: "Clasifica.", cats: ["Problema", "Propuesta"], items: [["le décrochage", 0], ["le harcèlement", 0], ["les inégalités", 0], ["la surcharge des classes", 0], ["le tutorat", 1], ["des classes moins nombreuses", 1], ["l'éducation aux médias", 1], ["l'évaluation par compétences", 1]], pista: "¿Mejora la escuela?", why: "Problemas y propuestas." },
    { fase: "guiada", c: ["b3ec-problemes"], k: "choice", es: true, ask: "«lutter contre le décrochage»: le décrochage es…", q: "Elige.", o: ["el abandono escolar", "descolgar el teléfono"], a: 0, pista: "Escuela.", why: "Abandono." },
    { fase: "guiada", c: ["b3ec-problemes"], k: "choice", es: true, ask: "«le harcèlement scolaire» es…", q: "Elige.", o: ["el acoso escolar", "el horario escolar"], a: 0, pista: "harceler.", why: "Acoso." },
    { fase: "indep", c: ["b3ec-solutions"], k: "choice", es: true, ask: "«garantir l'égalité des chances»: es…", q: "Elige.", o: ["la igualdad de oportunidades", "la suerte en los exámenes"], a: 0, why: "Igualdad." },
    { fase: "indep", c: ["b3ec-problemes"], k: "fill", ask: "«deberes»", q: "Beaucoup de parents critiquent la quantité de ___ à la maison.", acc: ["devoirs"], why: "<b>devoirs</b>." },
    { fase: "indep", c: ["b3ec-problemes"], k: "fill", ask: "«control (continuo)»", q: "Le ___ continu remplace une partie des examens finaux.", acc: ["contrôle"], why: "<b>contrôle</b>." },
    { fase: "aplica", c: ["b3ec-problemes", "b3ec-solutions"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["le redoublement", "la repetición de curso"], ["la mixité sociale", "la mezcla social"], ["les rythmes scolaires", "los horarios escolares"], ["l'esprit critique", "el espíritu crítico"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3ec-problemes"], k: "spot", ask: "Encuentra el error.", s: "Le [harcèlage] scolaire doit être signalé immédiatement .", fix: "harcèlement", why: "<b>harcèlement</b>." },
    { fase: "aplica", c: ["b3ec-problemes"], k: "choice", es: true, ask: "«Le redoublement» es…", q: "Elige.", o: ["la repetición de curso", "el doble de deberes"], a: 0, why: "Repetir." },
    { fase: "dominio", c: ["b3ec-solutions"], k: "order", ask: "Ordena: «Hay que desarrollar el espíritu crítico».", tokens: ["Il faut", "développer", "l'esprit critique"], why: "<b>Il faut développer l'esprit critique</b>" },
    { fase: "dominio", c: ["b3ec-solutions"], k: "choice", es: true, ask: "«Le tutorat» es…", q: "Elige.", o: ["una propuesta", "un problema"], a: 0, why: "Propuesta." },
    { fase: "dominio", c: ["b3ec-problemes", "b3ec-solutions"], k: "listen", say: "L'école doit apprendre aux élèves à développer leur esprit critique face aux écrans.", acc: ["L'école doit apprendre aux élèves à développer leur esprit critique face aux écrans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'école doit apprendre aux élèves à développer leur esprit critique face aux écrans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Colombie"], previo: [] }
};

/* ── 49. Médias, déontologie et désinformation ── */
E["b21-medias-ethique"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Médias, déontologie et désinformation",
  objetivo: {
    que: "Vas a hablar de la ética periodística y de la desinformación: verificar fuentes, separar hechos y opiniones, detectar bulos.",
    corto: "Le journaliste a refusé de révéler ses sources. · Les théories complotistes se diffusent vite sur les réseaux.",
    podras: ["Hablar de ética: la déontologie, le secret des sources, la liberté de la presse, l'objectivité.", "Nombrar los riesgos: la désinformation, les infox, le complotisme, le sensationnalisme.", "Distinguir buenas prácticas (croiser les sources, le fact-checking) y malas (inventer des citations, diffuser sans vérifier)."],
    iconos: ["ic2/movil", "ic2/pergamino", "ic2/candado"],
    previos: ["La prensa (lección 7), la radio (lección 35) y los medios y las redes (B1.1, lección 58)."],
    capacidad: "Ahora detectas un bulo y explicas por qué un medio es fiable o no."
  },
  requiere: R("b1md-presse", "b1md-reseaux", "b3pr-genres", "b3ra-strategie"), recupera: ["b3pr-genres"],
  conceptos: {
    "b3me-deonto": { n: "ética: la déontologie (ética profesional), le secret des sources, la liberté de la presse, l'indépendance éditoriale, la concentration des médias; buenas prácticas: croiser / vérifier les sources, la vérification des faits (fact-checking), distinguer faits et opinions", b: "gr" },
    "b3me-desinfo": { n: "riesgos: la désinformation, une infox (un bulo), le complotisme (teorías de la conspiración), le sensationnalisme (buscar el impacto emocional exagerado); malas prácticas: inventer des citations, titrer de façon trompeuse, diffuser sans vérifier", b: "gr" }
  },
  video: {
    titulo: "Informar bien", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "une infox", seg: [
        { es: "Hola. Verificar antes de compartir." } ] },
      { v: "frase", filas: [
          { nota: "fuentes", p: 1, partes: [["Le journaliste a refusé de révéler ses sources.", "-", 1]] },
          { nota: "conspiración", p: 2, partes: [["Les théories complotistes se diffusent vite sur les réseaux.", "-", 2]] },
          { nota: "verificación", p: 3, partes: [["Cette rubrique vérifie les déclarations des politiques.", "-", 3]] } ], seg: [
        { fr: "Le journaliste a refusé de révéler ses sources.", p: 1 }, { fr: "Les théories complotistes se diffusent vite sur les réseaux.", p: 2 }, { fr: "Cette rubrique vérifie les déclarations des politiques.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«lutter contre le complotisme»: le complotisme son…", o: ["las teorías de la conspiración", "la complicidad"], a: 0, es: true,
        bien: "¡Sí! Complot = conspiración.", mal: "Complotisme: teorías conspirativas.",
        seg: [ { es: "Pausa. Complotisme." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la déontologie", "le secret des sources", "une infox", "le complotisme", "vérifier les sources"], seg: [
        { es: "Ética, riesgos y herramientas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El bulo del grupo", img: "bg-cafe", yo: "camila",
    escena: "Hugo le enseña a Camila un mensaje que circula en un grupo de WhatsApp.",
    pj: PJ,
    lineas: [
      ["hugo", "Regarde, tout le monde partage cette info : le gouvernement va interdire les vélos !", "Mira, todo el mundo comparte esta noticia: ¡el gobierno va a prohibir las bicicletas!"],
      ["camila", "C'est sûrement une infox. Il faut vérifier les sources avant de diffuser. Tu as croisé les sources ?", "Seguro que es un bulo. Hay que verificar las fuentes antes de difundir. ¿Contrastaste las fuentes?"],
      ["hugo", "Tu as raison. Il y a une rubrique de fact-checking qui vérifie les déclarations des politiques… C'est faux ! Le titre était trompeur.", "Tienes razón. Hay una sección de verificación que comprueba las declaraciones de los políticos… ¡Es falso! El titular era engañoso."],
      ["camila", "Face à la désinformation, l'éducation aux médias devient indispensable. La liberté de la presse, oui, mais avec de la déontologie !", "Frente a la desinformación, la educación mediática se vuelve indispensable. La libertad de prensa, sí, ¡pero con ética profesional!"]
    ],
    fijate: "Fíjate: une infox, vérifier les sources, croiser les sources, le fact-checking, trompeur, la désinformation, l'éducation aux médias, la liberté de la presse, la déontologie."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Ética y desinformación",
      idea: "Ética: la déontologie (ética profesional del periodista), le secret des sources (protege a los informantes), la liberté de la presse (pilar de la democracia), l'objectivité, l'indépendance éditoriale. Riesgos: la désinformation, une infox (un bulo, fake news), le complotisme (teorías de la conspiración; no es complicidad), la manipulation, le sensationnalisme (titulares que buscan el impacto emocional). Herramientas: vérifier / croiser les sources, la vérification des faits (fact-checking), l'éducation aux médias. Economía: la concentration des médias, le clic, la publicité.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["la déontologie journalistique", "la ética profesional", "ética"],
        ["lutter contre le complotisme", "luchar contra las teorías de la conspiración", "riesgo"],
        ["les titres sensationnalistes", "titulares que buscan el impacto emocional exagerado", "riesgo"],
        ["Le secret des sources protège les informateurs. · secret", "El secreto de las fuentes protege a los informantes.", "ética"],
        ["La liberté de la presse est un pilier de la démocratie. · presse", "La libertad de prensa es un pilar de la democracia.", "ética"],
        ["une infox · l'indépendance éditoriale · la vérification des faits · la concentration des médias", "un bulo · la independencia editorial · la verificación de datos · la concentración de medios", "vocabulario"],
        ["croiser les sources · citer ses sources · distinguer faits et opinions · corriger ses erreurs", "contrastar las fuentes · citar las fuentes · distinguir hechos y opiniones · corregir los errores", "Buena práctica"],
        ["inventer des citations · titrer de façon trompeuse · diffuser sans vérifier · violer la vie privée", "inventar citas · titular de forma engañosa · difundir sin verificar · violar la vida privada", "Mala práctica"],
        ["Un bon journaliste doit toujours vérifier ses sources avant de publier. · vérifier", "Un buen periodista siempre debe verificar sus fuentes antes de publicar.", "buena práctica"],
        ["Il faut vérifier les sources", "Hay que verificar las fuentes", "herramienta"],
        ["Face à la désinformation, l'éducation aux médias devient indispensable.", "Frente a la desinformación, la educación mediática se vuelve indispensable.", "herramienta"]
      ]],
      ej: [["Le journaliste a refusé de révéler ses sources.", "El periodista se negó a revelar sus fuentes."], ["Les théories complotistes se diffusent vite sur les réseaux.", "Las teorías conspirativas se difunden rápido en las redes."], ["Cette rubrique vérifie les déclarations des politiques.", "Esta sección verifica las declaraciones de los políticos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le complotisme = la complicidad", "le complotisme = las teorías de la conspiración", "Neologismo frecuente."], ["Un journaliste doit inventer ses sources.", "Un journaliste doit vérifier ses sources.", "Verificar, nunca inventar."], ["une intox / une infox: ¿son lo mismo?", "une infox = un bulo (información falsa)", "infox = info + intox."]] }
  ],
  ejemplos: [
    { sit: "«la déontologie journalistique» es…", resp: "la ética profesional", pasos: ["Reglas del oficio."], porque: "Ética." },
    { sit: "«lutter contre le complotisme»: le complotisme son…", resp: "las teorías de la conspiración", pasos: ["complot."], porque: "Riesgo." },
    { sit: "«les titres sensationnalistes» buscan…", resp: "el impacto emocional exagerado", pasos: ["sensation."], porque: "Riesgo." }
  ],
  comprueba: [
    { q: "«Une infox» es…", o: ["un bulo", "una información oficial"], a: 0, b: "gr", porque: "Fake news." },
    { q: "«Croiser les sources» es…", o: ["una buena práctica", "una mala práctica"], a: 0, b: "gr", porque: "Contrastar." },
    { q: "«Le secret des sources» protege a…", o: ["los informantes", "los lectores"], a: 0, b: "gr", porque: "Fuentes." }
  ],
  practica: [
    { fase: "guiada", c: ["b3me-deonto", "b3me-desinfo"], k: "sort", ask: "¿Buena o mala práctica?", q: "Clasifica.", cats: ["Buena práctica", "Mala práctica"], items: [["croiser les sources", 0], ["citer ses sources", 0], ["distinguer faits et opinions", 0], ["corriger ses erreurs", 0], ["inventer des citations", 1], ["titrer de façon trompeuse", 1], ["diffuser sans vérifier", 1], ["violer la vie privée", 1]], pista: "¿Es honesto?", why: "Prácticas." },
    { fase: "guiada", c: ["b3me-deonto"], k: "choice", es: true, ask: "«la déontologie journalistique» es…", q: "Elige.", o: ["la ética profesional", "la odontología"], a: 0, pista: "Reglas.", why: "Ética." },
    { fase: "guiada", c: ["b3me-desinfo"], k: "choice", es: true, ask: "«lutter contre le complotisme»: le complotisme son…", q: "Elige.", o: ["las teorías de la conspiración", "la complicidad"], a: 0, pista: "complot.", why: "Conspiración." },
    { fase: "indep", c: ["b3me-desinfo"], k: "choice", es: true, ask: "«les titres sensationnalistes» buscan…", q: "Elige.", o: ["el impacto emocional exagerado", "la precisión"], a: 0, why: "Sensacionalismo." },
    { fase: "indep", c: ["b3me-deonto"], k: "fill", ask: "«secreto»", q: "Le ___ des sources protège les informateurs.", acc: ["secret"], why: "<b>secret</b>." },
    { fase: "indep", c: ["b3me-deonto"], k: "fill", ask: "«prensa»", q: "La liberté de la ___ est un pilier de la démocratie.", acc: ["presse"], why: "<b>presse</b>." },
    { fase: "aplica", c: ["b3me-deonto", "b3me-desinfo"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["une infox", "un bulo"], ["l'indépendance éditoriale", "la independencia editorial"], ["la vérification des faits", "la verificación de datos"], ["la concentration des médias", "la concentración de medios"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3me-deonto"], k: "spot", ask: "Encuentra el error.", s: "Un bon journaliste doit toujours [inventer] ses sources avant de publier .", fix: "vérifier", why: "<b>vérifier</b>." },
    { fase: "aplica", c: ["b3me-desinfo"], k: "choice", es: true, ask: "«Une infox» es…", q: "Elige.", o: ["un bulo", "una información oficial"], a: 0, why: "Bulo." },
    { fase: "dominio", c: ["b3me-deonto"], k: "order", ask: "Ordena: «Hay que verificar las fuentes».", tokens: ["Il faut", "vérifier", "les sources"], why: "<b>Il faut vérifier les sources</b>" },
    { fase: "dominio", c: ["b3me-deonto"], k: "choice", es: true, ask: "«Croiser les sources» es…", q: "Elige.", o: ["una buena práctica", "una mala práctica"], a: 0, why: "Contrastar." },
    { fase: "dominio", c: ["b3me-deonto", "b3me-desinfo"], k: "listen", say: "Face à la désinformation, l'éducation aux médias devient indispensable.", acc: ["Face à la désinformation, l'éducation aux médias devient indispensable."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Face à la désinformation, l'éducation aux médias devient indispensable.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "WhatsApp"], previo: [] }
};

/* ── 50. Le sport dans la société ── */
E["b21-sport-societe"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Le sport dans la société",
  objetivo: {
    que: "Vas a hablar del deporte como fenómeno social: salud, integración, valores, grandes eventos y derivas como el dopaje.",
    corto: "Le sport favorise l'intégration sociale. · Ce cycliste a été suspendu pour dopage.",
    podras: ["Hablar de la práctica: pratiquer un sport, un club, un licencié, le sport amateur / de haut niveau.", "Nombrar los valores (le fair-play, l'esprit d'équipe, le dépassement de soi) y las derivas (le dopage, la corruption, la violence).", "Hablar de grandes eventos: les Jeux olympiques et paralympiques, accueillir un événement."],
    iconos: ["ic2/trofeo", "ic2/medalla", "ic2/amigos"],
    previos: ["Debatir (lección 8), la salud pública (B1.2, lección 44) y la diversidad (B1.2, lección 50)."],
    capacidad: "Ahora debates sobre el deporte, sus valores y sus excesos."
  },
  requiere: R("b2sa-prev", "b2dv-integr", "b3db-accord"), recupera: ["b2dv-integr"],
  conceptos: {
    "b3sp-pratique": { n: "práctica y eventos: pratiquer un sport (Beaucoup de Français pratiquent…), un club, un licencié (socio federado), le sport amateur / de haut niveau (alta competición); les Jeux olympiques et paralympiques, accueillir les Jeux", b: "gr" },
    "b3sp-valeurs": { n: "valores: le fair-play, l'esprit d'équipe, le dépassement de soi (superación personal), la persévérance, le respect de l'adversaire; derivas: le dopage, la violence, la corruption, la tricherie, le hooliganisme", b: "gr" }
  },
  video: {
    titulo: "Deporte y sociedad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/trofeo", grande: "le fair-play", seg: [
        { es: "Hola. El deporte es mucho más que competir." } ] },
      { v: "frase", filas: [
          { nota: "integración", p: 1, partes: [["Le sport favorise l'intégration sociale.", "-", 1]] },
          { nota: "dopaje", p: 2, partes: [["Ce cycliste a été suspendu pour dopage.", "-", 2]] },
          { nota: "eventos", p: 3, partes: [["Paris a accueilli les Jeux olympiques en 2024.", "-", 3]] } ], seg: [
        { fr: "Le sport favorise l'intégration sociale.", p: 1 }, { fr: "Ce cycliste a été suspendu pour dopage.", p: 2 }, { fr: "Paris a accueilli les Jeux olympiques en 2024.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«le dépassement de soi» es…", o: ["la superación personal", "adelantar a otro"], a: 0, es: true,
        bien: "¡Sí! Superarse.", mal: "Es la superación personal.",
        seg: [ { es: "Pausa. Superarse." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["pratiquer un sport", "un licencié", "l'esprit d'équipe", "le dopage", "accueillir les Jeux"], seg: [
        { es: "Práctica, valores, derivas y eventos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El club de barrio", img: "bg-paris", yo: "camila",
    escena: "Hugo entrena a niños en un club de fútbol de barrio; Camila lo visita.",
    pj: PJ,
    lineas: [
      ["camila", "Ton club est grand ? — Le club compte 300 licenciés. Le sport favorise l'intégration sociale dans le quartier.", "¿Tu club es grande? — El club tiene 300 socios federados. El deporte favorece la integración social en el barrio."],
      ["hugo", "Moi, j'enseigne l'esprit d'équipe, le fair-play et le dépassement de soi. Pas seulement la victoire.", "Yo enseño el espíritu de equipo, el juego limpio y la superación personal. No solo la victoria."],
      ["camila", "C'est important. Dans le sport de haut niveau, il y a le dopage, la corruption… Un athlète a encore été suspendu pour dopage.", "Es importante. En el deporte de alta competición hay dopaje, corrupción… Otro atleta fue suspendido por dopaje."],
      ["hugo", "Oui. Paris a accueilli les Jeux olympiques en 2024 et ça a motivé beaucoup de jeunes. Au-delà de la compétition, le sport transmet des valeurs comme le respect et la persévérance.", "Sí. París acogió los Juegos Olímpicos en 2024 y eso motivó a muchos jóvenes. Más allá de la competición, el deporte transmite valores como el respeto y la perseverancia."]
    ],
    fijate: "Fíjate: 300 licenciés, l'intégration sociale, l'esprit d'équipe, le fair-play, le dépassement de soi, le haut niveau, le dopage, accueilli les Jeux, la persévérance."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario del deporte",
      idea: "Práctica: pratiquer un sport (hacer deporte; concuerda: les Français pratiquent), un club, un licencié (socio federado), le sport amateur / professionnel / de haut niveau (alta competición). Valores: le fair-play (juego limpio), l'esprit d'équipe, le dépassement de soi (superación personal), la persévérance, le respect de l'adversaire. Derivas: le dopage (ser suspendu pour dopage), la corruption, la tricherie (trampa), la violence dans les stades, le hooliganisme, les salaires démesurés. Eventos: les Jeux olympiques et paralympiques, une coupe du monde, accueillir un événement.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["le dépassement de soi", "la superación personal", "valor"],
        ["Le club compte 300 licenciés. · un licencié", "El club tiene 300 socios federados. · un socio federado", "práctica"],
        ["accueillir les Jeux", "acoger los Juegos", "evento"],
        ["L'athlète a été suspendu pour dopage. · dopage", "El atleta fue suspendido por dopaje.", "deriva"],
        ["Le fair-play est essentiel dans le sport. · fair", "El juego limpio es esencial en el deporte.", "valor"],
        ["l'esprit d'équipe · le haut niveau · le hooliganisme · la persévérance", "el espíritu de equipo · la alta competición · el hooliganismo · la perseverancia", "vocabulario"],
        ["le fair-play · l'esprit d'équipe · le respect de l'adversaire · la persévérance", "el juego limpio · el espíritu de equipo · el respeto al rival · la perseverancia", "Valor"],
        ["le dopage · la violence · la corruption · la tricherie", "el dopaje · la violencia · la corrupción · la trampa", "Deriva"],
        ["Beaucoup de Français pratiquent un sport sans être inscrits dans un club. · pratiquent", "Muchos franceses practican un deporte sin estar inscritos en un club.", "práctica"],
        ["Le sport favorise l'intégration sociale", "El deporte favorece la integración social", "sociedad"],
        ["Au-delà de la compétition, le sport transmet des valeurs comme le respect et la persévérance.", "Más allá de la competición, el deporte transmite valores como el respeto y la perseverancia.", "valores"]
      ]],
      ej: [["Le sport favorise l'intégration sociale.", "El deporte favorece la integración social."], ["Ce cycliste a été suspendu pour dopage.", "Este ciclista fue suspendido por dopaje."], ["Paris a accueilli les Jeux olympiques en 2024.", "París acogió los Juegos Olímpicos en 2024."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["pratiquer le football = entrenar solamente", "pratiquer un sport = hacer / practicar un deporte", "pratiquer."], ["Beaucoup de Français pratique un sport.", "Beaucoup de Français pratiquent un sport.", "Beaucoup de + plural: verbo en plural."], ["un licencié = un despedido", "un licencié (sport) = un socio federado", "Contexto deportivo."]] }
  ],
  ejemplos: [
    { sit: "«le dépassement de soi» es…", resp: "la superación personal", pasos: ["dépasser = superar."], porque: "Valor." },
    { sit: "«Le club compte 300 licenciés.» Un licencié es…", resp: "un socio federado", pasos: ["Licence = ficha."], porque: "Práctica." },
    { sit: "«Acoger los Juegos»", resp: "accueillir les Jeux", pasos: ["accueillir."], porque: "Evento." }
  ],
  comprueba: [
    { q: "«Le fair-play» es…", o: ["un valor", "una deriva"], a: 0, b: "gr", porque: "Juego limpio." },
    { q: "«La tricherie» es…", o: ["la trampa", "la amistad"], a: 0, b: "gr", porque: "Tricher." },
    { q: "«Le sport de haut niveau» es…", o: ["la alta competición", "el deporte de montaña"], a: 0, b: "gr", porque: "Élite." }
  ],
  practica: [
    { fase: "guiada", c: ["b3sp-valeurs"], k: "sort", ask: "¿Valor o deriva?", q: "Clasifica.", cats: ["Valor", "Deriva"], items: [["le fair-play", 0], ["l'esprit d'équipe", 0], ["le respect de l'adversaire", 0], ["la persévérance", 0], ["le dopage", 1], ["la violence", 1], ["la corruption", 1], ["la tricherie", 1]], pista: "¿Positivo?", why: "Valores y derivas." },
    { fase: "guiada", c: ["b3sp-valeurs"], k: "choice", es: true, ask: "«le dépassement de soi» es…", q: "Elige.", o: ["la superación personal", "adelantar a otro coche"], a: 0, pista: "Superarse.", why: "Superación." },
    { fase: "guiada", c: ["b3sp-pratique"], k: "choice", es: true, ask: "«Le club compte 300 licenciés.» Un licencié es…", q: "Elige.", o: ["un socio federado", "un despedido"], a: 0, pista: "Deporte.", why: "Federado." },
    { fase: "indep", c: ["b3sp-pratique"], k: "choice", ask: "«Acoger los Juegos»", q: "«___»", o: ["accueillir les Jeux", "recueillir les Jeux"], a: 0, why: "<b>accueillir</b>." },
    { fase: "indep", c: ["b3sp-valeurs"], k: "fill", ask: "«dopaje»", q: "L'athlète a été suspendu pour ___ .", acc: ["dopage"], why: "<b>dopage</b>." },
    { fase: "indep", c: ["b3sp-valeurs"], k: "fill", ask: "«juego limpio» (…-play)", q: "Le ___ -play est essentiel dans le sport.", acc: ["fair"], why: "<b>fair-play</b>." },
    { fase: "aplica", c: ["b3sp-pratique", "b3sp-valeurs"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["l'esprit d'équipe", "el espíritu de equipo"], ["le haut niveau", "la alta competición"], ["le hooliganisme", "el hooliganismo"], ["la persévérance", "la perseverancia"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3sp-pratique"], k: "spot", ask: "Encuentra el error.", s: "Beaucoup de Français [pratique] un sport sans être inscrits dans un club .", fix: "pratiquent", why: "<b>pratiquent</b>." },
    { fase: "aplica", c: ["b3sp-valeurs"], k: "choice", es: true, ask: "«La tricherie» es…", q: "Elige.", o: ["la trampa", "la amistad"], a: 0, why: "Trampa." },
    { fase: "dominio", c: ["b3sp-pratique"], k: "order", ask: "Ordena: «El deporte favorece la integración social».", tokens: ["Le sport", "favorise", "l'intégration sociale"], why: "<b>Le sport favorise l'intégration sociale</b>" },
    { fase: "dominio", c: ["b3sp-pratique"], k: "choice", es: true, ask: "«Le sport de haut niveau» es…", q: "Elige.", o: ["la alta competición", "el deporte de montaña"], a: 0, why: "Élite." },
    { fase: "dominio", c: ["b3sp-pratique", "b3sp-valeurs"], k: "listen", say: "Au-delà de la compétition, le sport transmet des valeurs comme le respect et la persévérance.", acc: ["Au-delà de la compétition, le sport transmet des valeurs comme le respect et la persévérance."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Au-delà de la compétition, le sport transmet des valeurs comme le respect et la persévérance.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris"], previo: [] }
};

/* ── B2.1·8 Sociedad y política · 51. La santé mentale ── */
E["b21-sante-mentale"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La santé mentale",
  objetivo: {
    que: "Vas a hablar de salud mental sin tabúes: estrés, ansiedad, depresión, señales de alerta y recursos para cuidarse.",
    corto: "Il faut briser le tabou autour de la dépression. · Je me sens débordé en ce moment.",
    podras: ["Nombrar los trastornos: le stress, l'anxiété, la dépression, le burn-out, les troubles du sommeil.", "Distinguir señales de alerta (l'isolement, la fatigue chronique) y recursos (consulter un psychologue, parler à un proche).", "Usar los verbos y las expresiones: se sentir débordé(e), craquer, prendre soin de soi, se ressourcer, briser le tabou, libérer la parole."],
    iconos: ["ic2/corazon", "ic2/luna", "ic2/amigos"],
    previos: ["El futuro del trabajo (lección 44), la salud (B1.1, lección 56) y los sentimientos (B1.1, lección 44)."],
    capacidad: "Ahora hablas de cómo te sientes y de salud mental con respeto."
  },
  requiere: R("b1sa-symptomes", "b1se-voc", "b2sa-prev", "b3at-bienetre"), recupera: ["b3at-bienetre"],
  conceptos: {
    "b3sm-troubles": { n: "trastornos y señales: le stress, l'anxiété, la dépression (enfermedad, no simple tristeza), le burn-out, les troubles du sommeil, l'isolement, la fatigue chronique, l'irritabilité; la stigmatisation (el estigma)", b: "gr" },
    "b3sm-soin": { n: "recursos y expresiones: consulter un psychologue, une thérapie, un suivi, parler à un proche, se déconnecter; se sentir débordé(e), craquer (venirse abajo), prendre soin de soi, se ressourcer (recargar pilas); briser le tabou, libérer la parole", b: "gr" }
  },
  video: {
    titulo: "Hablar de salud mental", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "briser le tabou", seg: [
        { es: "Hola. Hablar de salud mental ya no es tabú." } ] },
      { v: "frase", filas: [
          { nota: "tabú", p: 1, partes: [["Il faut briser le tabou autour de la dépression.", "-", 1]] },
          { nota: "recurso", p: 2, partes: [["Elle consulte un psychologue une fois par semaine.", "-", 2]] },
          { nota: "sentir", p: 3, partes: [["Je me sens débordé en ce moment.", "-", 3]] } ], seg: [
        { fr: "Il faut briser le tabou autour de la dépression.", p: 1 }, { fr: "Elle consulte un psychologue une fois par semaine.", p: 2 }, { fr: "Je me sens débordé en ce moment.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Romper el tabú»", o: ["briser le tabou", "casser le tabou"], a: 0,
        bien: "¡Sí! Briser le tabou.", mal: "La colocación es briser le tabou.",
        seg: [ { es: "Pausa. Briser." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'anxiété", "débordé", "craquer", "prendre soin de soi", "se ressourcer"], seg: [
        { es: "Trastornos, señales y recursos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La semana de exámenes", img: "bg-noche", yo: "camila",
    escena: "En plena semana de exámenes, Camila llama a Hugo por la noche.",
    pj: PJ,
    lineas: [
      ["camila", "Je me sens débordée en ce moment. Je dors mal, j'ai des troubles du sommeil…", "Me siento desbordada en este momento. Duermo mal, tengo problemas de sueño…"],
      ["hugo", "Fais attention. Mon cousin, après des mois de pression, il a craqué. Il faut prendre soin de soi.", "Ten cuidado. Mi primo, después de meses de presión, se vino abajo. Hay que cuidarse."],
      ["camila", "Tu as raison. Je vais me déconnecter ce week-end pour me ressourcer. Et peut-être consulter la psychologue de l'université.", "Tienes razón. Voy a desconectarme este fin de semana para recargar pilas. Y quizás ir a la psicóloga de la universidad."],
      ["hugo", "Bonne idée. Parler de sa santé mentale n'est plus un tabou pour la jeune génération. Il faut libérer la parole.", "Buena idea. Hablar de la salud mental ya no es un tabú para la generación joven. Hay que liberar la palabra."]
    ],
    fijate: "Fíjate: débordée, les troubles du sommeil, il a craqué, prendre soin de soi, me déconnecter, me ressourcer, consulter la psychologue, un tabou, libérer la parole."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la salud mental",
      idea: "Trastornos: le stress, l'anxiété, la dépression (enfermedad clínica: souffrir de dépression; «être déprimé» en uso ligero es estar triste), le burn-out, les troubles du sommeil. Señales de alerta: l'isolement, la fatigue chronique, l'irritabilité. Recursos: consulter un(e) psychologue, une thérapie, un suivi (seguimiento), parler à un proche, faire du sport, se déconnecter. Sociedad: la stigmatisation (el estigma), briser le tabou (romper el tabú; con briser, no «casser»), libérer la parole. Verbos: se sentir débordé(e), craquer (venirse abajo), prendre soin de soi, se ressourcer.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["Après des mois de pression, il a craqué.", "Tras meses de presión, se vino abajo.", "craquer"],
        ["la stigmatisation des malades", "el estigma, la discriminación de los enfermos", "sociedad"],
        ["briser le tabou", "romper el tabú", "sociedad"],
        ["Il est important de prendre soin de soi. · soin", "Es importante cuidarse.", "recurso"],
        ["Je me sens débordé par le travail. · débordé", "Me siento desbordado por el trabajo.", "sentir"],
        ["l'anxiété · un suivi · se ressourcer · l'isolement", "la ansiedad · un seguimiento · recargar pilas · el aislamiento", "vocabulario"],
        ["les troubles du sommeil · l'isolement · la fatigue chronique · l'irritabilité", "los problemas de sueño · el aislamiento · la fatiga crónica · la irritabilidad", "Señal de alerta"],
        ["parler à un proche · consulter un psychologue · faire du sport · se déconnecter", "hablar con un ser querido · ir al psicólogo · hacer deporte · desconectarse", "Recurso"],
        ["Il faut briser le silence autour de la santé mentale au travail. · briser", "Hay que romper el silencio sobre la salud mental en el trabajo.", "sociedad"],
        ["Il faut libérer la parole", "Hay que liberar la palabra", "sociedad"],
        ["Parler de sa santé mentale n'est plus un tabou pour la jeune génération.", "Hablar de la salud mental ya no es un tabú para la generación joven.", "sociedad"]
      ]],
      ej: [["Il faut briser le tabou autour de la dépression.", "Hay que romper el tabú sobre la depresión."], ["Elle consulte un psychologue une fois par semaine.", "Va al psicólogo una vez por semana."], ["Je me sens débordé en ce moment.", "Me siento desbordado en este momento."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["être déprimé (uso ligero) = depresión clínica", "souffrir de dépression = la enfermedad", "La depresión clínica es una enfermedad."], ["casser le silence / le tabou", "briser le silence / le tabou", "Colocación: briser."], ["prendre soin de lui (hablando de uno mismo en general)", "prendre soin de soi", "Impersonal: soi."]] }
  ],
  ejemplos: [
    { sit: "«Après des mois de pression, il a craqué.» ¿Qué le pasó?", resp: "se vino abajo", pasos: ["craquer."], porque: "Expresión." },
    { sit: "«la stigmatisation des malades» es…", resp: "el estigma, la discriminación", pasos: ["stigmate."], porque: "Sociedad." },
    { sit: "«Romper el tabú»", resp: "briser le tabou", pasos: ["briser."], porque: "Colocación." }
  ],
  comprueba: [
    { q: "«Se ressourcer» significa…", o: ["recargar pilas", "buscar fuentes"], a: 0, b: "gr", porque: "Descansar." },
    { q: "«L'isolement» es…", o: ["una señal de alerta", "un recurso"], a: 0, b: "gr", porque: "Aislamiento." },
    { q: "«Un suivi» psicológico es…", o: ["un seguimiento", "un seguidor"], a: 0, b: "gr", porque: "Suivre." }
  ],
  practica: [
    { fase: "guiada", c: ["b3sm-troubles", "b3sm-soin"], k: "sort", ask: "¿Señal de alerta o recurso?", q: "Clasifica.", cats: ["Señal de alerta", "Recurso"], items: [["les troubles du sommeil", 0], ["l'isolement", 0], ["la fatigue chronique", 0], ["l'irritabilité", 0], ["parler à un proche", 1], ["consulter un psychologue", 1], ["faire du sport", 1], ["se déconnecter", 1]], pista: "¿Ayuda?", why: "Señales y recursos." },
    { fase: "guiada", c: ["b3sm-soin"], k: "choice", es: true, ask: "«Après des mois de pression, il a craqué.» ¿Qué le pasó?", q: "Elige.", o: ["se vino abajo", "se rompió un hueso"], a: 0, pista: "Presión.", why: "Craquer." },
    { fase: "guiada", c: ["b3sm-troubles"], k: "choice", es: true, ask: "«la stigmatisation des malades» es…", q: "Elige.", o: ["el estigma, la discriminación", "el tratamiento"], a: 0, pista: "Estigma.", why: "Estigma." },
    { fase: "indep", c: ["b3sm-soin"], k: "choice", ask: "«Romper el tabú»", q: "«___»", o: ["briser le tabou", "casser le tabou"], a: 0, why: "<b>briser</b>." },
    { fase: "indep", c: ["b3sm-soin"], k: "fill", ask: "«cuidarse» (prendre … de soi)", q: "Il est important de prendre ___ de soi.", acc: ["soin"], why: "<b>soin</b>." },
    { fase: "indep", c: ["b3sm-soin"], k: "fill", ask: "«desbordado»", q: "Je me sens ___ par le travail.", acc: ["débordé"], why: "<b>débordé</b>." },
    { fase: "aplica", c: ["b3sm-troubles", "b3sm-soin"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["l'anxiété", "la ansiedad"], ["un suivi", "un seguimiento"], ["se ressourcer", "recargar pilas"], ["l'isolement", "el aislamiento"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3sm-soin"], k: "spot", ask: "Encuentra el error.", s: "Il faut [casser] le silence autour de la santé mentale au travail .", fix: "briser", why: "<b>briser</b>." },
    { fase: "aplica", c: ["b3sm-soin"], k: "choice", es: true, ask: "«Se ressourcer» significa…", q: "Elige.", o: ["recargar pilas", "buscar fuentes"], a: 0, why: "Descansar." },
    { fase: "dominio", c: ["b3sm-soin"], k: "order", ask: "Ordena: «Hay que liberar la palabra».", tokens: ["Il faut", "libérer", "la parole"], why: "<b>Il faut libérer la parole</b>" },
    { fase: "dominio", c: ["b3sm-troubles"], k: "choice", es: true, ask: "«L'isolement» es…", q: "Elige.", o: ["una señal de alerta", "un recurso"], a: 0, why: "Alerta." },
    { fase: "dominio", c: ["b3sm-troubles", "b3sm-soin"], k: "listen", say: "Parler de sa santé mentale n'est plus un tabou pour la jeune génération.", acc: ["Parler de sa santé mentale n'est plus un tabou pour la jeune génération."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Parler de sa santé mentale n'est plus un tabou pour la jeune génération.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 52. La crise du logement ── */
E["b21-crise-logement"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "La crise du logement",
  objetivo: {
    que: "Vas a hablar de la crisis de la vivienda: escasez, alquileres que se disparan, personas sin hogar y las políticas para remediarlo.",
    corto: "La flambée des loyers chasse les familles du centre. · Des milliers de logements restent vacants.",
    podras: ["Describir el problema: la pénurie de logements, la flambée des loyers, les logements vacants, le mal-logement.", "Nombrar a las personas: les sans-abri, les SDF, les ménages modestes.", "Distinguir causas (la spéculation, les locations touristiques) y soluciones (l'encadrement des loyers, le logement social, les APL)."],
    iconos: ["ic2/candado", "ic2/moneda", "ic2/bolsa"],
    previos: ["Describir un gráfico (lección 38), la vivienda (B1.1, lección 55) y la ciudad (B1.2, lección 49)."],
    capacidad: "Ahora explicas la crisis de la vivienda y propones soluciones."
  },
  requiere: R("b1lg-argent", "b1lg-demarches", "b2vu-espaces", "b3gr-tendance"), recupera: ["b1lg-argent"],
  conceptos: {
    "b3cl3-probleme": { n: "el problema: la pénurie de logements (escasez), la flambée des loyers (subida brusca), les logements vacants, le mal-logement (infravivienda), la spéculation, les locations touristiques; les sans-abri, un SDF (sans domicile fixe), un ménage (hogar)", b: "gr" },
    "b3cl3-politiques": { n: "soluciones: l'encadrement des loyers (limitación legal de los alquileres), le logement social, les HLM, les aides au logement (APL), la taxe sur les logements vacants; l'immobilier (sector inmobiliario)", b: "gr" }
  },
  video: {
    titulo: "La crisis de la vivienda", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/candado", grande: "la flambée des loyers", seg: [
        { es: "Hola. Encontrar piso en París es casi imposible." } ] },
      { v: "frase", filas: [
          { nota: "alquileres", p: 1, partes: [["La flambée des loyers chasse les familles du centre.", "-", 1]] },
          { nota: "política", p: 2, partes: [["Paris a mis en place l'encadrement des loyers.", "-", 2]] },
          { nota: "vacías", p: 3, partes: [["Des milliers de logements restent vacants.", "-", 3]] } ], seg: [
        { fr: "La flambée des loyers chasse les familles du centre.", p: 1 }, { fr: "Paris a mis en place l'encadrement des loyers.", p: 2 }, { fr: "Des milliers de logements restent vacants.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«un SDF» es…", o: ["una persona sin hogar", "una persona sin familia"], a: 0, es: true,
        bien: "¡Sí! Sans domicile fixe.", mal: "SDF = sans domicile fixe.",
        seg: [ { es: "Pausa. Sin domicilio fijo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la pénurie", "la flambée", "vacants", "l'encadrement des loyers", "un SDF"], seg: [
        { es: "Problema, personas y soluciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Buscar piso en París", img: "bg-paris", yo: "camila",
    escena: "Camila busca un nuevo apartamento y se lo cuenta a Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "C'est impossible de trouver un appartement ! Il y a une pénurie de logements dans les grandes villes.", "¡Es imposible encontrar un apartamento! Hay escasez de viviendas en las grandes ciudades."],
      ["hugo", "Oui, la flambée des loyers chasse les familles du centre. Et les locations touristiques réduisent l'offre.", "Sí, la escalada de los alquileres expulsa a las familias del centro. Y los alquileres turísticos reducen la oferta."],
      ["camila", "Pourtant, des milliers de logements restent vacants depuis des années. Et il y a de plus en plus de SDF dans la rue.", "Sin embargo, miles de viviendas siguen vacías desde hace años. Y hay cada vez más personas sin hogar en la calle."],
      ["hugo", "Paris a mis en place l'encadrement des loyers. Et tu peux demander les APL. On manque de logements sociaux : la crise du logement pousse de nombreux jeunes à quitter les grandes villes.", "París implantó la limitación de los alquileres. Y puedes pedir las ayudas a la vivienda. Faltan viviendas sociales: la crisis de la vivienda empuja a muchos jóvenes a dejar las grandes ciudades."]
    ],
    fijate: "Fíjate: une pénurie de logements, la flambée des loyers, les locations touristiques, vacants, SDF, l'encadrement des loyers, les APL, les logements sociaux."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la vivienda",
      idea: "Problema: la pénurie de logements (escasez), la flambée des loyers (subida brusca de los alquileres; lo contrario es la baisse), les logements vacants (vacíos), le mal-logement (infravivienda). Personas: les sans-abri, les SDF (sans domicile fixe: sin hogar, no «sin familia»), les ménages modestes (hogares humildes), les primo-accédants. Políticas: l'encadrement des loyers (limitación legal), le logement social (les HLM), les aides au logement (APL), la taxe sur les logements vacants. Mercado: l'immobilier (sector inmobiliario), la spéculation, l'accession à la propriété.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["un SDF", "una persona sin hogar", "personas"],
        ["l'encadrement des loyers", "la limitación legal de los alquileres", "política"],
        ["la flambée des prix", "la subida brusca de los precios", "problema"],
        ["Il y a une pénurie de logements dans les grandes villes. · pénurie", "Hay escasez de viviendas en las grandes ciudades.", "problema"],
        ["Ces appartements sont vacants depuis des années. · vacants · vides", "Estos apartamentos están vacíos desde hace años.", "problema"],
        ["le mal-logement · un ménage · l'immobilier · les APL", "la infravivienda · un hogar (familia) · el sector inmobiliario · las ayudas a la vivienda", "vocabulario"],
        ["la spéculation · les locations touristiques · le manque de constructions · la hausse des prix", "la especulación · los alquileres turísticos · la falta de construcción · la subida de precios", "Causa"],
        ["l'encadrement des loyers · la construction de HLM · la taxe sur les logements vacants · les aides au logement", "la limitación de alquileres · la construcción de vivienda social · el impuesto a las viviendas vacías · las ayudas a la vivienda", "Solución"],
        ["La baisse des loyers permet aux familles modestes de rester en ville. · baisse", "La bajada de los alquileres permite a las familias humildes quedarse en la ciudad.", "solución"],
        ["On manque de logements sociaux", "Faltan viviendas sociales", "problema"],
        ["La crise du logement pousse de nombreux jeunes à quitter les grandes villes.", "La crisis de la vivienda empuja a muchos jóvenes a dejar las grandes ciudades.", "problema"]
      ]],
      ej: [["La flambée des loyers chasse les familles du centre.", "La escalada de los alquileres expulsa a las familias del centro."], ["Paris a mis en place l'encadrement des loyers.", "París implantó la limitación de los alquileres."], ["Des milliers de logements restent vacants.", "Miles de viviendas siguen vacías."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un SDF = un sin familia", "un SDF = sans domicile fixe (sin hogar)", "Sigla usual."], ["La flambée des loyers aide les familles modestes.", "La baisse des loyers aide les familles modestes.", "Flambée = subida."], ["un ménage = solo la limpieza", "un ménage = un hogar (familia)", "Doble sentido."]] }
  ],
  ejemplos: [
    { sit: "«un SDF» es…", resp: "una persona sin hogar", pasos: ["sans domicile fixe."], porque: "Personas." },
    { sit: "«l'encadrement des loyers» es…", resp: "la limitación legal de los alquileres", pasos: ["encadrer = enmarcar."], porque: "Política." },
    { sit: "«la flambée des prix» es…", resp: "la subida brusca", pasos: ["flamber = arder."], porque: "Problema." }
  ],
  comprueba: [
    { q: "«La pénurie» es…", o: ["la escasez", "la pobreza"], a: 0, b: "gr", porque: "Falta." },
    { q: "«La spéculation» es…", o: ["una causa", "una solución"], a: 0, b: "gr", porque: "Encarece." },
    { q: "«Les APL» son…", o: ["las ayudas a la vivienda", "los alquileres turísticos"], a: 0, b: "gr", porque: "Sigla." }
  ],
  practica: [
    { fase: "guiada", c: ["b3cl3-probleme", "b3cl3-politiques"], k: "sort", ask: "¿Causa o solución?", q: "Clasifica.", cats: ["Causa", "Solución"], items: [["la spéculation", 0], ["les locations touristiques", 0], ["le manque de constructions", 0], ["la hausse des prix", 0], ["l'encadrement des loyers", 1], ["la construction de HLM", 1], ["la taxe sur les logements vacants", 1], ["les aides au logement", 1]], pista: "¿Encarece o ayuda?", why: "Causas y soluciones." },
    { fase: "guiada", c: ["b3cl3-probleme"], k: "choice", es: true, ask: "«un SDF» es…", q: "Elige.", o: ["una persona sin hogar", "una persona sin familia"], a: 0, pista: "Domicile.", why: "Sin hogar." },
    { fase: "guiada", c: ["b3cl3-politiques"], k: "choice", es: true, ask: "«l'encadrement des loyers» es…", q: "Elige.", o: ["la limitación legal de los alquileres", "el marco de una foto"], a: 0, pista: "Ley.", why: "Limitación." },
    { fase: "indep", c: ["b3cl3-probleme"], k: "choice", es: true, ask: "«la flambée des prix» es…", q: "Elige.", o: ["la subida brusca", "la bajada lenta"], a: 0, why: "Subida." },
    { fase: "indep", c: ["b3cl3-probleme"], k: "fill", ask: "«escasez»", q: "Il y a une ___ de logements dans les grandes villes.", acc: ["pénurie"], why: "<b>pénurie</b>." },
    { fase: "indep", c: ["b3cl3-probleme"], k: "fill", ask: "«vacíos»", q: "Ces appartements sont ___ depuis des années.", acc: ["vacants", "vides"], why: "<b>vacants</b>." },
    { fase: "aplica", c: ["b3cl3-probleme", "b3cl3-politiques"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["le mal-logement", "la infravivienda"], ["un ménage", "un hogar (familia)"], ["l'immobilier", "el sector inmobiliario"], ["les APL", "las ayudas a la vivienda"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3cl3-probleme"], k: "spot", ask: "Encuentra el error.", s: "La [flambée] des loyers permet aux familles modestes de rester en ville .", fix: "baisse", why: "<b>baisse</b>." },
    { fase: "aplica", c: ["b3cl3-probleme"], k: "choice", es: true, ask: "«La pénurie» es…", q: "Elige.", o: ["la escasez", "la pobreza"], a: 0, why: "Escasez." },
    { fase: "dominio", c: ["b3cl3-politiques"], k: "order", ask: "Ordena: «Faltan viviendas sociales».", tokens: ["On manque", "de logements", "sociaux"], why: "<b>On manque de logements sociaux</b>" },
    { fase: "dominio", c: ["b3cl3-probleme"], k: "choice", es: true, ask: "«La spéculation» es…", q: "Elige.", o: ["una causa", "una solución"], a: 0, why: "Causa." },
    { fase: "dominio", c: ["b3cl3-probleme", "b3cl3-politiques"], k: "listen", say: "La crise du logement pousse de nombreux jeunes à quitter les grandes villes.", acc: ["La crise du logement pousse de nombreux jeunes à quitter les grandes villes."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La crise du logement pousse de nombreux jeunes à quitter les grandes villes.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Paris", "SDF", "APL", "HLM"], previo: [] }
};

/* ── 53. Publicité, influenceurs et société de consommation ── */
E["b21-publicite"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Publicité, influenceurs et société de consommation",
  objetivo: {
    que: "Vas a hablar de la publicidad y los influencers: cómo empujan a consumir y qué alternativas existen.",
    corto: "Cette campagne cible les adolescents. · L'obsolescence programmée oblige à racheter.",
    podras: ["Usar el vocabulario de la publicidad: une pub, une campagne, un spot, un slogan, une cible, cibler.", "Hablar de redes: un influenceur, un partenariat rémunéré, un placement de produit.", "Distinguir lo que estimula el consumo (les soldes, la publicité ciblée) y lo que lo frena (la seconde main, la réparation, le minimalisme)."],
    iconos: ["ic2/movil", "ic2/bolsa", "ic2/moneda"],
    previos: ["La transición ecológica (lección 42), el consumo (B1.1, lección 60) y las redes sociales (B1.1, lección 58)."],
    capacidad: "Ahora analizas un anuncio o una publicación patrocinada con espíritu crítico."
  },
  requiere: R("b1cs-payer", "b1cs-apres", "b1md-reseaux", "b3te-climat"), recupera: ["b1cs-payer"],
  conceptos: {
    "b3pb-pub": { n: "publicidad y redes: une pub (familiar), une campagne, un spot (anuncio audiovisual), un slogan, une cible (público objetivo), cibler; un influenceur, un partenariat rémunéré (colaboración pagada), un placement de produit", b: "gr" },
    "b3pb-conso": { n: "consumo: la surconsommation, l'achat compulsif, l'obsolescence programmée, les soldes, le crédit facile; alternativas: la seconde main, la réparation, le minimalisme, le « Stop Pub »", b: "gr" }
  },
  video: {
    titulo: "Publicidad e influencers", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/movil", grande: "un partenariat rémunéré", seg: [
        { es: "Hola. ¿Quién decide lo que compras?" } ] },
      { v: "frase", filas: [
          { nota: "público", p: 1, partes: [["Cette campagne cible les adolescents.", "-", 1]] },
          { nota: "influencer", p: 2, partes: [["L'influenceuse doit signaler les partenariats rémunérés.", "-", 2]] },
          { nota: "obsolescencia", p: 3, partes: [["L'obsolescence programmée oblige à racheter.", "-", 3]] } ], seg: [
        { fr: "Cette campagne cible les adolescents.", p: 1 }, { fr: "L'influenceuse doit signaler les partenariats rémunérés.", p: 2 }, { fr: "L'obsolescence programmée oblige à racheter.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Esta campaña se dirige a los jóvenes.»", o: ["Cette campagne cible les jeunes.", "Cette campagne dirige les jeunes."], a: 0,
        bien: "¡Sí! Cibler.", mal: "Dirigirse a un público: cibler.",
        seg: [ { es: "Pausa. Cibler." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["une campagne", "cibler", "un placement de produit", "l'obsolescence programmée", "la seconde main"], seg: [
        { es: "Publicidad, redes, consumo y alternativas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El vídeo patrocinado", img: "bg-cafe", yo: "camila",
    escena: "Camila mira un vídeo de una influencer en el móvil; Hugo comenta.",
    pj: PJ,
    lineas: [
      ["camila", "Regarde cette influenceuse : elle adore ces baskets ! Je vais les acheter.", "Mira a esta influencer: ¡le encantan estas zapatillas! Voy a comprarlas."],
      ["hugo", "Attention, c'est un placement de produit. Les influenceurs doivent indiquer leurs partenariats rémunérés quand ils sont payés.", "Ojo, es una colocación de producto. Los influencers deben indicar sus colaboraciones pagadas cuando les pagan."],
      ["camila", "C'est vrai… Cette campagne cible les jeunes. Et mon téléphone ne marche plus après deux ans : l'obsolescence programmée !", "Es verdad… Esta campaña se dirige a los jóvenes. Y mi teléfono ya no funciona después de dos años: ¡la obsolescencia programada!"],
      ["hugo", "Moi, j'achète mes vêtements de seconde main et je répare mes appareils. Les jeunes sont particulièrement exposés à la publicité sur les réseaux sociaux.", "Yo compro mi ropa de segunda mano y reparo mis aparatos. Los jóvenes están especialmente expuestos a la publicidad en las redes sociales."]
    ],
    fijate: "Fíjate: une influenceuse, un placement de produit, les partenariats rémunérés, cible, l'obsolescence programmée, de seconde main, la publicité."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vocabulario de la publicidad",
      idea: "Publicidad: une publicité / une pub (familiar; no es un bar), une campagne, un spot (anuncio audiovisual), un slogan, une cible (público objetivo) → cibler (Cette campagne cible les jeunes). Redes: un influenceur / une influenceuse, un partenariat rémunéré (colaboración pagada: hay que indicarla), un placement de produit. Consumo: la surconsommation, l'achat compulsif, l'obsolescence programmée (los aparatos duran poco a propósito), le marketing. Alternativas: la seconde main (segunda mano), la réparation, le minimalisme, le « Stop Pub » en el buzón, la loi sur les influenceurs.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["dénoncer l'obsolescence programmée", "denunciar la obsolescencia programada", "consumo"],
        ["un placement de produit", "colocar un producto en un contenido de forma publicitaria", "redes"],
        ["Cette campagne cible les jeunes.", "Esta campaña se dirige a los jóvenes.", "cibler"],
        ["J'achète mes vêtements de seconde main. · main", "Compro mi ropa de segunda mano.", "alternativa"],
        ["Ce slogan publicitaire est très accrocheur. · slogan", "Este eslogan publicitario es muy pegadizo.", "publicidad"],
        ["un spot · une cible · l'achat compulsif · un partenariat", "un anuncio audiovisual · un público objetivo · la compra compulsiva · una colaboración", "vocabulario"],
        ["les soldes · la publicité ciblée · les influenceurs · le crédit facile", "las rebajas · la publicidad dirigida · los influencers · el crédito fácil", "Estimula"],
        ["la seconde main · la réparation · le minimalisme · le « Stop Pub » sur la boîte aux lettres", "la segunda mano · la reparación · el minimalismo · el cartel «No publicidad» en el buzón", "Frena"],
        ["Les influenceurs doivent indiquer leurs partenariats rémunérés quand ils sont payés. · rémunérés", "Los influencers deben indicar sus colaboraciones pagadas cuando les pagan.", "redes"],
        ["La publicité influence nos achats", "La publicidad influye en nuestras compras", "publicidad"],
        ["Les jeunes sont particulièrement exposés à la publicité sur les réseaux sociaux.", "Los jóvenes están especialmente expuestos a la publicidad en las redes sociales.", "redes"]
      ]],
      ej: [["Cette campagne cible les adolescents.", "Esta campaña se dirige a los adolescentes."], ["L'influenceuse doit signaler les partenariats rémunérés.", "La influencer debe indicar las colaboraciones pagadas."], ["L'obsolescence programmée oblige à racheter.", "La obsolescencia programada obliga a volver a comprar."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["la pub = el bar", "la pub = la publicidad (familiar)", "Abreviatura muy usada."], ["des partenariats gratuits quand ils sont payés", "des partenariats rémunérés", "Pagados: rémunérés."], ["acheter de deuxième main", "acheter de seconde main", "Expresión fija."]] }
  ],
  ejemplos: [
    { sit: "«dénoncer l'obsolescence programmée»: es…", resp: "la obsolescencia programada", pasos: ["Duran poco a propósito."], porque: "Consumo." },
    { sit: "«un placement de produit» es…", resp: "colocar un producto en un contenido de forma publicitaria", pasos: ["Publicidad escondida."], porque: "Redes." },
    { sit: "«Esta campaña se dirige a los jóvenes.»", resp: "Cette campagne cible les jeunes.", pasos: ["cibler."], porque: "Publicidad." }
  ],
  comprueba: [
    { q: "«Une cible» en publicidad es…", o: ["un público objetivo", "un precio"], a: 0, b: "gr", porque: "Cibler." },
    { q: "«La seconde main»…", o: ["frena el consumo", "estimula el consumo"], a: 0, b: "gr", porque: "Reutilizar." },
    { q: "«Un spot» es…", o: ["un anuncio audiovisual", "una mancha"], a: 0, b: "gr", porque: "TV, radio." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pb-conso"], k: "sort", ask: "¿Estimula o frena el consumo?", q: "Clasifica.", cats: ["Estimula", "Frena"], items: [["les soldes", 0], ["la publicité ciblée", 0], ["les influenceurs", 0], ["le crédit facile", 0], ["la seconde main", 1], ["la réparation", 1], ["le minimalisme", 1], ["le « Stop Pub » sur la boîte aux lettres", 1]], pista: "¿Compras más?", why: "Consumo." },
    { fase: "guiada", c: ["b3pb-conso"], k: "choice", es: true, ask: "«dénoncer l'obsolescence programmée»: es…", q: "Elige.", o: ["la obsolescencia programada", "la programación de televisión"], a: 0, pista: "Duran poco.", why: "Obsolescencia." },
    { fase: "guiada", c: ["b3pb-pub"], k: "choice", es: true, ask: "«un placement de produit» es…", q: "Elige.", o: ["colocar un producto en un contenido de forma publicitaria", "invertir dinero en un producto"], a: 0, pista: "Publicidad.", why: "Placement." },
    { fase: "indep", c: ["b3pb-pub"], k: "choice", ask: "«Esta campaña se dirige a los jóvenes.»", q: "«___»", o: ["Cette campagne cible les jeunes.", "Cette campagne dirige les jeunes."], a: 0, why: "<b>cible</b>." },
    { fase: "indep", c: ["b3pb-conso"], k: "fill", ask: "«(de segunda) mano»", q: "J'achète mes vêtements de seconde ___ .", acc: ["main"], why: "<b>main</b>." },
    { fase: "indep", c: ["b3pb-pub"], k: "fill", ask: "«eslogan»", q: "Ce ___ publicitaire est très accrocheur.", acc: ["slogan"], why: "<b>slogan</b>." },
    { fase: "aplica", c: ["b3pb-pub", "b3pb-conso"], k: "match", ask: "Une cada término con su traducción.", q: "Francés → español", pairs: [["un spot", "un anuncio audiovisual"], ["une cible", "un público objetivo"], ["l'achat compulsif", "la compra compulsiva"], ["un partenariat", "una colaboración"]], why: "Vocabulario." },
    { fase: "aplica", c: ["b3pb-pub"], k: "spot", ask: "Encuentra el error.", s: "Les influenceurs doivent indiquer leurs partenariats [gratuits] quand ils sont payés .", fix: "rémunérés", why: "<b>rémunérés</b>." },
    { fase: "aplica", c: ["b3pb-pub"], k: "choice", es: true, ask: "«Une cible» en publicidad es…", q: "Elige.", o: ["un público objetivo", "un precio"], a: 0, why: "Cible." },
    { fase: "dominio", c: ["b3pb-pub"], k: "order", ask: "Ordena: «La publicidad influye en nuestras compras».", tokens: ["La publicité", "influence", "nos achats"], why: "<b>La publicité influence nos achats</b>" },
    { fase: "dominio", c: ["b3pb-conso"], k: "choice", es: true, ask: "«La seconde main»…", q: "Elige.", o: ["frena el consumo", "estimula el consumo"], a: 0, why: "Frena." },
    { fase: "dominio", c: ["b3pb-pub", "b3pb-conso"], k: "listen", say: "Les jeunes sont particulièrement exposés à la publicité sur les réseaux sociaux.", acc: ["Les jeunes sont particulièrement exposés à la publicité sur les réseaux sociaux."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les jeunes sont particulièrement exposés à la publicité sur les réseaux sociaux.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 54. L'Union européenne ── */
E["b21-europe"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "L'Union européenne",
  objetivo: {
    que: "Vas a hablar de la Unión Europea: sus instituciones, sus logros comunes y sus debates.",
    corto: "L'Union européenne compte vingt-sept États membres. · Les eurodéputés sont élus tous les cinq ans.",
    podras: ["Nombrar las instituciones y quién hace qué: la Commission, le Parlement européen, le Conseil, la BCE, la Cour de justice.", "Hablar de los logros: l'euro, l'espace Schengen, la libre circulation, Erasmus+.", "Presentar los debates: la souveraineté nationale, l'élargissement, l'euroscepticisme, la politique migratoire."],
    iconos: ["ic2/bandera", "ic2/estrella", "ic2/mundo"],
    previos: ["Las instituciones (B1.2, lección 46) y la francofonía (B1.2, lección 66)."],
    capacidad: "Ahora explicas cómo funciona la UE y opinas sobre su futuro."
  },
  requiere: R("b2it-pers", "b2it-vote", "b2fr-belsui"), recupera: ["b2it-vote"],
  conceptos: {
    "b3eu-institutions": { n: "la UE: 27 États membres; la Commission (propone las leyes), le Parlement européen (vota con el Consejo; les eurodéputés, élus au suffrage universel), le Conseil, la BCE (gestiona el euro), la Cour de justice (interpreta el derecho europeo)", b: "gr" },
    "b3eu-debats": { n: "logros: l'euro, l'espace Schengen (circular sin controles fronterizos), la libre circulation, Erasmus+; debates: l'élargissement, la souveraineté nationale, l'euroscepticisme (desconfianza hacia la UE), la politique migratoire", b: "gr" }
  },
  video: {
    titulo: "La Unión Europea", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bandera", grande: "vingt-sept États membres", seg: [
        { es: "Hola. Veintisiete países, una moneda y muchos debates." } ] },
      { v: "frase", filas: [
          { nota: "miembros", p: 1, partes: [["L'Union européenne compte vingt-sept États membres.", "-", 1]] },
          { nota: "Erasmus", p: 2, partes: [["Grâce à Erasmus, des millions d'étudiants ont étudié à l'étranger.", "-", 2]] },
          { nota: "elecciones", p: 3, partes: [["Les eurodéputés sont élus tous les cinq ans.", "-", 3]] } ], seg: [
        { fr: "L'Union européenne compte vingt-sept États membres.", p: 1 }, { fr: "Grâce à Erasmus, des millions d'étudiants ont étudié à l'étranger.", p: 2 }, { fr: "Les eurodéputés sont élus tous les cinq ans.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántos Estados miembros tiene la UE?", o: ["27", "28"], a: 0,
        bien: "¡Sí! Desde el Brexit, 27.", mal: "Desde 2020 son 27.",
        seg: [ { es: "Pausa. Veintisiete." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la Commission", "les eurodéputés", "l'euro", "l'espace Schengen", "l'euroscepticisme"], seg: [
        { es: "Instituciones, logros y debates.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Erasmus", img: "bg-universidad", yo: "camila",
    escena: "Camila conoce a estudiantes Erasmus en la universidad; Hugo le explica la UE.",
    pj: PJ,
    lineas: [
      ["camila", "Tous ces étudiants viennent d'Espagne, d'Italie, de Pologne ? — Oui, grâce au programme Erasmus.", "¿Todos estos estudiantes vienen de España, Italia, Polonia? — Sí, gracias al programa Erasmus."],
      ["hugo", "L'UE compte vingt-sept États membres. Grâce à l'espace Schengen, on circule sans contrôles aux frontières. Et la monnaie commune est l'euro.", "La UE tiene veintisiete Estados miembros. Gracias al espacio Schengen se circula sin controles en las fronteras. Y la moneda común es el euro."],
      ["camila", "Qui fait les lois ? — La Commission propose les lois, et le Parlement les vote avec le Conseil. Les eurodéputés sont élus au suffrage universel.", "¿Quién hace las leyes? — La Comisión propone las leyes, y el Parlamento las vota con el Consejo. Los eurodiputados se eligen por sufragio universal."],
      ["hugo", "Mais il y a des débats : la souveraineté nationale, l'élargissement, la montée de l'euroscepticisme… Pourtant, le programme Erasmus a permis à des millions de jeunes Européens d'étudier à l'étranger.", "Pero hay debates: la soberanía nacional, la ampliación, el auge del euroescepticismo… Sin embargo, el programa Erasmus ha permitido a millones de jóvenes europeos estudiar en el extranjero."]
    ],
    fijate: "Fíjate: Erasmus, vingt-sept États membres, l'espace Schengen, l'euro, la Commission propose, le Parlement vote, les eurodéputés, la souveraineté nationale, l'élargissement, l'euroscepticisme."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Instituciones, logros y debates",
      idea: "La UE (Union européenne) reúne 27 États membres (28 hasta 2020: el Reino Unido salió con el Brexit). Instituciones: la Commission européenne (propone las leyes), le Parlement européen (vota con el Conseil de l'UE; les eurodéputés, élus au suffrage universel cada cinco años), la BCE (gestiona el euro), la Cour de justice (interpreta el derecho europeo). Logros: l'euro, l'espace Schengen (circular sin controles fronterizos), la libre circulation, le programme Erasmus+. Debates: la souveraineté nationale, l'élargissement (ampliación), l'euroscepticisme (desconfianza hacia la UE), la politique migratoire, les directives.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tema"], [
        ["États membres · 27", "Estados miembros: 27", "UE"],
        ["l'espace Schengen", "circular sin controles fronterizos", "logro"],
        ["la montée de l'euroscepticisme", "el auge de la desconfianza hacia la UE", "debate"],
        ["Les eurodéputés sont élus au suffrage universel. · eurodéputés", "Los eurodiputados se eligen por sufragio universal.", "instituciones"],
        ["La monnaie commune est l'euro. · euro", "La moneda común es el euro.", "logro"],
        ["la Commission · le Parlement · la BCE · la Cour de justice", "propone las leyes · vota con el Consejo · gestiona el euro · interpreta el derecho europeo", "instituciones"],
        ["l'euro · Erasmus+ · Schengen · la libre circulation", "el euro · Erasmus+ · Schengen · la libre circulación", "Logro común"],
        ["l'élargissement · la souveraineté nationale · l'euroscepticisme · la politique migratoire", "la ampliación · la soberanía nacional · el euroescepticismo · la política migratoria", "Tema de debate"],
        ["Les étudiants partent étudier à l'étranger grâce au programme Erasmus.", "Los estudiantes se van a estudiar al extranjero gracias al programa Erasmus.", "logro"],
        ["L'UE compte vingt-sept États membres", "La UE tiene veintisiete Estados miembros", "UE"],
        ["Le programme Erasmus a permis à des millions de jeunes Européens d'étudier à l'étranger.", "El programa Erasmus ha permitido a millones de jóvenes europeos estudiar en el extranjero.", "logro"]
      ]],
      ej: [["L'Union européenne compte vingt-sept États membres.", "La UE cuenta con veintisiete Estados miembros."], ["Grâce à Erasmus, des millions d'étudiants ont étudié à l'étranger.", "Gracias a Erasmus, millones de estudiantes estudiaron en el extranjero."], ["Les eurodéputés sont élus tous les cinq ans.", "Los eurodiputados se eligen cada cinco años."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["les pays membres de l'UE sont 28", "27 depuis 2020", "El Reino Unido salió (Brexit)."], ["le programme Erasmos", "le programme Erasmus", "Ortografía."], ["les députés européens = los diputados franceses", "les eurodéputés = el Parlamento Europeo", "Nivel europeo."]] }
  ],
  ejemplos: [
    { sit: "¿Cuántos son los États membres?", resp: "27", pasos: ["Desde el Brexit."], porque: "UE." },
    { sit: "«l'espace Schengen» permite…", resp: "circular sin controles fronterizos", pasos: ["Fronteras abiertas."], porque: "Logro." },
    { sit: "«la montée de l'euroscepticisme» es…", resp: "la desconfianza hacia la UE", pasos: ["eurosceptique."], porque: "Debate." }
  ],
  comprueba: [
    { q: "La Commission européenne…", o: ["propone las leyes", "gestiona el euro"], a: 0, b: "gr", porque: "Iniciativa." },
    { q: "La BCE…", o: ["gestiona el euro", "propone las leyes"], a: 0, b: "gr", porque: "Banco central." },
    { q: "«L'élargissement» es…", o: ["la ampliación a nuevos países", "la salida de un país"], a: 0, b: "gr", porque: "Ampliar." }
  ],
  practica: [
    { fase: "guiada", c: ["b3eu-debats"], k: "sort", ask: "¿Logro común o tema de debate?", q: "Clasifica.", cats: ["Logro común", "Tema de debate"], items: [["l'euro", 0], ["Erasmus+", 0], ["Schengen", 0], ["la libre circulation", 0], ["l'élargissement", 1], ["la souveraineté nationale", 1], ["l'euroscepticisme", 1], ["la politique migratoire", 1]], pista: "¿Hay consenso?", why: "Logros y debates." },
    { fase: "guiada", c: ["b3eu-institutions"], k: "choice", ask: "¿Cuántos son los États membres?", q: "Elige.", o: ["27", "28"], a: 0, pista: "Brexit.", why: "<b>27</b>." },
    { fase: "guiada", c: ["b3eu-debats"], k: "choice", es: true, ask: "«l'espace Schengen» permite…", q: "Elige.", o: ["circular sin controles fronterizos", "pagar con euros"], a: 0, pista: "Fronteras.", why: "Schengen." },
    { fase: "indep", c: ["b3eu-debats"], k: "choice", es: true, ask: "«la montée de l'euroscepticisme» es…", q: "Elige.", o: ["la desconfianza hacia la UE", "el entusiasmo por la UE"], a: 0, why: "Euroescepticismo." },
    { fase: "indep", c: ["b3eu-institutions"], k: "fill", ask: "«eurodiputados»", q: "Les ___ sont élus au suffrage universel.", acc: ["eurodéputés"], why: "<b>eurodéputés</b>." },
    { fase: "indep", c: ["b3eu-debats"], k: "fill", ask: "La moneda común.", q: "La monnaie commune est l'___ .", acc: ["euro"], why: "<b>euro</b>." },
    { fase: "aplica", c: ["b3eu-institutions"], k: "match", ask: "Une cada institución con su función.", q: "Institución → función", pairs: [["la Commission", "propone las leyes"], ["le Parlement", "vota con el Consejo"], ["la BCE", "gestiona el euro"], ["la Cour de justice", "interpreta el derecho europeo"]], why: "Instituciones." },
    { fase: "aplica", c: ["b3eu-debats"], k: "spot", ask: "Encuentra el error.", s: "Les étudiants partent étudier à l'étranger grâce au programme [Erasmos] .", fix: "Erasmus", why: "<b>Erasmus</b>." },
    { fase: "aplica", c: ["b3eu-institutions"], k: "choice", es: true, ask: "La Commission européenne…", q: "Elige.", o: ["propone las leyes", "gestiona el euro"], a: 0, why: "Iniciativa." },
    { fase: "dominio", c: ["b3eu-institutions"], k: "order", ask: "Ordena: «La UE tiene veintisiete Estados miembros».", tokens: ["L'UE compte", "vingt-sept", "États membres"], why: "<b>L'UE compte vingt-sept États membres</b>" },
    { fase: "dominio", c: ["b3eu-debats"], k: "choice", es: true, ask: "«L'élargissement» es…", q: "Elige.", o: ["la ampliación a nuevos países", "la salida de un país"], a: 0, why: "Ampliación." },
    { fase: "dominio", c: ["b3eu-institutions", "b3eu-debats"], k: "listen", say: "Le programme Erasmus a permis à des millions de jeunes Européens d'étudier à l'étranger.", acc: ["Le programme Erasmus a permis à des millions de jeunes Européens d'étudier à l'étranger."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le programme Erasmus a permis à des millions de jeunes Européens d'étudier à l'étranger.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Erasmus", "Schengen", "UE", "BCE", "Espagne", "Italie", "Pologne", "Brexit"], previo: [] }
};

/* ── B2.1·9 Combinaciones de palabras · 55. Locutions avec prendre, mettre, tenir, tirer ── */
E["b21-locutions-verbales"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Locutions avec prendre, mettre, tenir, tirer",
  objetivo: {
    que: "Vas a usar las locuciones que forman los verbos básicos prendre, mettre, tenir y tirer, muy frecuentes en el francés formal.",
    corto: "Il faut tenir compte de l'avis des habitants. · Les scientifiques tirent la sonnette d'alarme.",
    podras: ["Usar las de prendre (prendre la parole, prendre en charge, prendre conscience de, prendre part à) y mettre (mettre en place, mettre en œuvre, mettre l'accent sur, mettre fin à).", "Usar las de tenir (tenir compte de, tenir tête à, tenir parole) y tirer (tirer profit / parti de, tirer la sonnette d'alarme, tirer les leçons).", "Evitar los calcos del español: tenir compte de, nunca «tenir en compte»."],
    iconos: ["ic2/engranaje", "ic2/lapiz", "ic2/libro"],
    previos: ["Los verbos precisos (B1.2, lección 57) y el registro culto (B1.2, lección 60)."],
    capacidad: "Ahora escribes informes y ensayos con locuciones naturales."
  },
  requiere: R("b2vp2-faire", "b2vp2-autres", "b2rs-mots"), recupera: ["b2vp2-autres"],
  conceptos: {
    "b3lv-prendre": { n: "prendre la parole, prendre en charge, prendre conscience de, prendre part à (participar en); mettre en place, mettre en œuvre (poner en práctica), mettre l'accent sur (hacer hincapié en), mettre fin à (poner fin a)", b: "gr" },
    "b3lv-tenir": { n: "tenir compte de (tener en cuenta; no «tenir en compte»), tenir tête à (plantar cara a), tenir parole, tenir à; tirer profit de, tirer parti de (sacar partido de), tirer une conclusion, tirer les leçons, tirer la sonnette d'alarme (dar la voz de alarma)", b: "gr" }
  },
  video: {
    titulo: "Locuciones con verbos básicos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/engranaje", grande: "tenir compte de", seg: [
        { es: "Hola. Cuatro verbos, muchas locuciones." } ] },
      { v: "frase", filas: [
          { nota: "tenir", p: 1, partes: [["Il faut tenir compte de l'avis des habitants.", "-", 1]] },
          { nota: "mettre", p: 2, partes: [["Le gouvernement a mis en place une nouvelle aide.", "-", 2]] },
          { nota: "tirer", p: 3, partes: [["Les scientifiques tirent la sonnette d'alarme.", "-", 3]] } ], seg: [
        { fr: "Il faut tenir compte de l'avis des habitants.", p: 1 }, { fr: "Le gouvernement a mis en place une nouvelle aide.", p: 2 }, { fr: "Les scientifiques tirent la sonnette d'alarme.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tener en cuenta»", o: ["tenir compte de", "tenir en compte"], a: 0,
        bien: "¡Sí! Tenir compte de.", mal: "Locución fija: tenir compte de.",
        seg: [ { es: "Pausa. Sin «en»." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["prendre conscience", "mettre en place", "mettre fin à", "tenir compte de", "tirer parti de"], seg: [
        { es: "Prendre, mettre, tenir, tirer.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El pleno del ayuntamiento", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo asisten a una reunión pública del ayuntamiento.",
    pj: PJ,
    lineas: [
      ["hugo", "Le maire prend la parole : « Il est temps de prendre conscience du problème de la pollution. »", "El alcalde toma la palabra: «Es hora de tomar conciencia del problema de la contaminación.»"],
      ["camila", "Il dit qu'il va mettre en place un plan d'urgence et mettre fin aux voitures dans le centre.", "Dice que va a poner en marcha un plan de urgencia y poner fin a los coches en el centro."],
      ["hugo", "Une habitante lui tient tête : « Il faut tenir compte du prix ! Et de l'avis des habitants ! »", "Una vecina le planta cara: «¡Hay que tener en cuenta el precio! ¡Y la opinión de los vecinos!»"],
      ["camila", "Le rapport met l'accent sur la prévention. Il faut tirer les leçons de cette crise et mettre en place de nouvelles règles.", "El informe hace hincapié en la prevención. Hay que sacar las lecciones de esta crisis y poner en marcha nuevas normas."]
    ],
    fijate: "Fíjate: prend la parole, prendre conscience, mettre en place, mettre fin aux, tient tête, tenir compte du, met l'accent sur, tirer les leçons."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las locuciones más usadas",
      idea: "prendre: prendre la parole (tomar la palabra), prendre en charge (hacerse cargo), prendre conscience de (tomar conciencia), prendre part à (participar en). mettre: mettre en place (poner en marcha), mettre en œuvre (poner en práctica), mettre l'accent sur (hacer hincapié en), mettre fin à (poner fin a). tenir: tenir compte de (tener en cuenta; nunca «tenir en compte»), tenir tête à (plantar cara a), tenir parole (cumplir su palabra), tenir à (tener apego a). tirer: tirer profit de / tirer parti de (sacar partido), tirer une conclusion, tirer les leçons de, tirer la sonnette d'alarme (dar la voz de alarma).",
      intro: "Toca cada locución.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["tenir compte de · Il faut tenir compte du prix", "tener en cuenta · Hay que tener en cuenta el precio", "tenir"],
        ["mettre fin à", "poner fin a", "mettre"],
        ["tirer la sonnette d'alarme", "dar la voz de alarma", "tirer"],
        ["Il est temps de prendre conscience du problème. · prendre", "Es hora de tomar conciencia del problema.", "prendre"],
        ["Le rapport met l'accent sur la prévention. · accent", "El informe hace hincapié en la prevención.", "mettre"],
        ["prendre part à · mettre en œuvre · tenir tête à · tirer parti de", "participar en · poner en práctica · plantar cara a · sacar partido de", "locuciones"],
        ["prendre la parole · prendre en charge · prendre conscience · prendre part", "tomar la palabra · hacerse cargo · tomar conciencia · participar", "prendre"],
        ["mettre en place · mettre fin à · mettre en œuvre · mettre l'accent sur", "poner en marcha · poner fin a · poner en práctica · hacer hincapié en", "mettre"],
        ["Le maire doit mettre en place un plan d'urgence. · mettre", "El alcalde debe poner en marcha un plan de urgencia.", "mettre"],
        ["Il faut tirer les leçons de cette crise et mettre en place de nouvelles règles.", "Hay que sacar las lecciones de esta crisis y poner en marcha nuevas normas.", "tirer · mettre"]
      ]],
      ej: [["Il faut tenir compte de l'avis des habitants.", "Hay que tener en cuenta la opinión de los habitantes."], ["Le gouvernement a mis en place une nouvelle aide.", "El gobierno puso en marcha una nueva ayuda."], ["Les scientifiques tirent la sonnette d'alarme.", "Los científicos dan la voz de alarma."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["tenir en compte", "tenir compte de", "Locución fija: tenir compte de."], ["tenir en place un plan", "mettre en place un plan", "Poner en marcha: mettre."], ["mettre fin de", "mettre fin à", "Con à."]] }
  ],
  ejemplos: [
    { sit: "«Tener en cuenta»", resp: "tenir compte de", pasos: ["Sin «en»."], porque: "tenir." },
    { sit: "«Poner fin a»", resp: "mettre fin à", pasos: ["mettre + à."], porque: "mettre." },
    { sit: "«tirer la sonnette d'alarme» significa…", resp: "dar la voz de alarma", pasos: ["sonnette = timbre."], porque: "tirer." }
  ],
  comprueba: [
    { q: "«Prendre part à» significa…", o: ["participar en", "tomar parte del dinero"], a: 0, b: "gr", porque: "Participar." },
    { q: "«Mettre l'accent sur» significa…", o: ["hacer hincapié en", "poner una tilde"], a: 0, b: "gr", porque: "Insistir." },
    { q: "«Tenir tête à» significa…", o: ["plantar cara a", "sostener la cabeza"], a: 0, b: "gr", porque: "Resistir." }
  ],
  practica: [
    { fase: "guiada", c: ["b3lv-prendre"], k: "sort", ask: "¿Va con prendre o con mettre?", q: "Clasifica.", cats: ["prendre", "mettre"], items: [["___ la parole", 0], ["___ en charge", 0], ["___ conscience", 0], ["___ part", 0], ["___ en place", 1], ["___ fin à", 1], ["___ en œuvre", 1], ["___ l'accent sur", 1]], pista: "Memoriza la locución.", why: "Locuciones." },
    { fase: "guiada", c: ["b3lv-tenir"], k: "choice", ask: "«Tener en cuenta»", q: "«___»", o: ["tenir compte de", "tenir en compte"], a: 0, pista: "Sin en.", why: "<b>tenir compte de</b>." },
    { fase: "guiada", c: ["b3lv-prendre"], k: "choice", ask: "«Poner fin a»", q: "«___»", o: ["mettre fin à", "mettre fin de"], a: 0, pista: "à.", why: "<b>mettre fin à</b>." },
    { fase: "indep", c: ["b3lv-tenir"], k: "choice", es: true, ask: "«tirer la sonnette d'alarme» significa…", q: "Elige.", o: ["dar la voz de alarma", "tocar el timbre"], a: 0, why: "Alarma." },
    { fase: "indep", c: ["b3lv-prendre"], k: "fill", ask: "«tomar (conciencia)»", q: "Il est temps de ___ conscience du problème.", acc: ["prendre"], why: "<b>prendre</b>." },
    { fase: "indep", c: ["b3lv-prendre"], k: "fill", ask: "«hace hincapié» (met l'… sur)", q: "Le rapport met l'___ sur la prévention.", acc: ["accent"], why: "<b>accent</b>." },
    { fase: "aplica", c: ["b3lv-prendre", "b3lv-tenir"], k: "match", ask: "Une cada locución con su traducción.", q: "Francés → español", pairs: [["prendre part à", "participar en"], ["mettre en œuvre", "poner en práctica"], ["tenir tête à", "plantar cara a"], ["tirer parti de", "sacar partido de"]], why: "Locuciones." },
    { fase: "aplica", c: ["b3lv-prendre"], k: "spot", ask: "Encuentra el error.", s: "Le maire doit [tenir] en place un plan d'urgence .", fix: "mettre", why: "<b>mettre</b>." },
    { fase: "aplica", c: ["b3lv-tenir"], k: "choice", es: true, ask: "«Tenir tête à» significa…", q: "Elige.", o: ["plantar cara a", "sostener la cabeza"], a: 0, why: "Resistir." },
    { fase: "dominio", c: ["b3lv-tenir"], k: "order", ask: "Ordena: «Hay que tener en cuenta el precio».", tokens: ["Il faut", "tenir compte", "du prix"], why: "<b>Il faut tenir compte du prix</b>" },
    { fase: "dominio", c: ["b3lv-prendre"], k: "choice", es: true, ask: "«Mettre l'accent sur» significa…", q: "Elige.", o: ["hacer hincapié en", "poner una tilde"], a: 0, why: "Insistir." },
    { fase: "dominio", c: ["b3lv-prendre", "b3lv-tenir"], k: "listen", say: "Il faut tirer les leçons de cette crise et mettre en place de nouvelles règles.", acc: ["Il faut tirer les leçons de cette crise et mettre en place de nouvelles règles."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il faut tirer les leçons de cette crise et mettre en place de nouvelles règles.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 56. Les collocations : poser une question, prendre une décision ── */
E["b21-collocations"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les collocations : poser une question, prendre une décision",
  objetivo: {
    que: "Vas a usar las colocaciones del francés: las combinaciones de verbo + nombre que no siempre coinciden con el español.",
    corto: "Je peux vous poser une question ? · L'équipe a remporté la victoire.",
    podras: ["Usar poser (une question), prendre (une décision, des mesures, un risque, rendez-vous) y faire (un effort, attention, la queue).", "Usar commettre une erreur, tenir une promesse, formuler une hypothèse, courir un risque.", "Usar remporter une victoire / un prix, subir une défaite, relever un défi (aceptar un reto)."],
    iconos: ["ic2/rayo", "ic2/trofeo", "ic2/pregunta"],
    previos: ["Las locuciones verbales (lección 55) y los verbos precisos (B1.2, lección 57)."],
    capacidad: "Ahora combinas verbos y nombres como un nativo."
  },
  requiere: R("b2vp2-faire", "b2vp2-autres", "b3lv-prendre"), recupera: ["b2vp2-faire"],
  conceptos: {
    "b3co2-prendre": { n: "poser une question (no «faire une question»); prendre une décision, des mesures, un risque, rendez-vous; faire un effort, attention, la queue, une promenade", b: "gr" },
    "b3co2-autres": { n: "commettre une erreur, tenir une promesse, formuler une hypothèse, courir un risque; remporter une victoire / un prix (llevarse), subir une défaite (sufrir), relever un défi (aceptar un reto)", b: "gr" }
  },
  video: {
    titulo: "Verbo + nombre", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "poser une question", seg: [
        { es: "Hola. En francés no se «hace» una pregunta." } ] },
      { v: "frase", filas: [
          { nota: "pregunta", p: 1, partes: [["Je peux vous poser une question ?", "-", 1]] },
          { nota: "medidas", p: 2, partes: [["Le gouvernement a pris des mesures.", "-", 2]] },
          { nota: "victoria", p: 3, partes: [["L'équipe a remporté la victoire.", "-", 3]] } ], seg: [
        { fr: "Je peux vous poser une question ?", p: 1 }, { fr: "Le gouvernement a pris des mesures.", p: 2 }, { fr: "L'équipe a remporté la victoire.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Hacer una pregunta»", o: ["poser une question", "faire une question"], a: 0,
        bien: "¡Sí! Poser.", mal: "Se dice poser une question.",
        seg: [ { es: "Pausa. Poser." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["poser une question", "prendre une décision", "commettre une erreur", "relever un défi", "remporter"], seg: [
        { es: "Aprende la pareja completa.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El partido", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo comentan el partido de su equipo.",
    pj: PJ,
    lineas: [
      ["camila", "Je peux te poser une question ? Pourquoi l'entraîneur a changé de stratégie ?", "¿Puedo hacerte una pregunta? ¿Por qué el entrenador cambió de estrategia?"],
      ["hugo", "Il a dû prendre une décision rapidement. Il a pris un risque, mais il a eu raison.", "Tuvo que tomar una decisión rápido. Se arriesgó, pero tuvo razón."],
      ["camila", "La semaine dernière, l'équipe a subi une défaite. Le gardien a commis une erreur.", "La semana pasada el equipo sufrió una derrota. El portero cometió un error."],
      ["hugo", "Oui, mais aujourd'hui, l'équipe a relevé le défi et remporté une belle victoire ! Le capitaine a tenu sa promesse.", "Sí, ¡pero hoy el equipo aceptó el reto y se llevó una bonita victoria! El capitán cumplió su promesa."]
    ],
    fijate: "Fíjate: poser une question, prendre une décision, pris un risque, subi une défaite, commis une erreur, relevé le défi, remporté une victoire, tenu sa promesse."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Parejas fijas",
      idea: "Las colocaciones se aprenden en pareja. poser: une question (nunca «faire une question»), un problème. prendre: une décision, des mesures, un risque, rendez-vous. faire: un effort, attention, la queue (hacer fila), une promenade, une faute. Otras: commettre une erreur / un crime, tenir une promesse, formuler une hypothèse, courir un risque, remporter une victoire / un prix (llevarse), subir une défaite (sufrir), relever un défi (aceptar un reto), lancer un défi (lanzar un reto).",
      intro: "Toca cada pareja.",
      tabla: [["Francés", "Español", "Verbo"], [
        ["poser une question", "hacer una pregunta", "poser"],
        ["relever un défi", "aceptar un reto", "relever"],
        ["subir une défaite", "sufrir una derrota", "subir"],
        ["Il faut prendre une décision rapidement. · prendre", "Hay que tomar una decisión rápido.", "prendre"],
        ["Elle a remporté le premier prix. · remporté", "Se llevó el primer premio.", "remporter"],
        ["une erreur = commettre · une promesse = tenir · une hypothèse = formuler · un risque = courir · une victoire = remporter", "cometer un error · cumplir una promesa · formular una hipótesis · correr un riesgo · llevarse una victoria", "parejas"],
        ["___ une décision · ___ des mesures · ___ un risque · ___ rendez-vous", "tomar una decisión · tomar medidas · arriesgarse · pedir cita", "prendre"],
        ["___ un effort · ___ attention · ___ la queue · ___ une promenade", "hacer un esfuerzo · prestar atención · hacer fila · dar un paseo", "faire"],
        ["À la fin du cours, j'ai posé une question au professeur. · posé", "Al final de la clase le hice una pregunta al profesor.", "poser"],
        ["Il faut prendre des mesures", "Hay que tomar medidas", "prendre"],
        ["L'équipe a relevé le défi et remporté une belle victoire.", "El equipo aceptó el reto y se llevó una bonita victoria.", "relever · remporter"]
      ]],
      ej: [["Je peux vous poser une question ?", "¿Puedo hacerle una pregunta?"], ["Le gouvernement a pris des mesures.", "El gobierno tomó medidas."], ["L'équipe a remporté la victoire.", "El equipo se llevó la victoria."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["faire une question", "poser une question", "«Hacer una pregunta» = poser une question."], ["faire une erreur grave (registro formal)", "commettre une erreur", "Formal: commettre."], ["accepter un défi", "relever un défi", "Colocación: relever."]] }
  ],
  ejemplos: [
    { sit: "«Hacer una pregunta»", resp: "poser une question", pasos: ["poser."], porque: "Colocación." },
    { sit: "«Aceptar un reto»", resp: "relever un défi", pasos: ["relever."], porque: "Colocación." },
    { sit: "«Sufrir una derrota»", resp: "subir une défaite", pasos: ["subir."], porque: "Colocación." }
  ],
  comprueba: [
    { q: "«Prendre rendez-vous» significa…", o: ["pedir cita", "tomar un café"], a: 0, b: "gr", porque: "Cita." },
    { q: "«Faire la queue» significa…", o: ["hacer fila", "hacer una cola de pelo"], a: 0, b: "gr", porque: "Esperar." },
    { q: "«Courir un risque» significa…", o: ["correr un riesgo", "huir de un riesgo"], a: 0, b: "gr", porque: "Igual que en español." }
  ],
  practica: [
    { fase: "guiada", c: ["b3co2-prendre"], k: "sort", ask: "¿Va con prendre o con faire?", q: "Clasifica.", cats: ["prendre", "faire"], items: [["___ une décision", 0], ["___ des mesures", 0], ["___ un risque", 0], ["___ rendez-vous", 0], ["___ un effort", 1], ["___ attention", 1], ["___ la queue", 1], ["___ une promenade", 1]], pista: "Memoriza la pareja.", why: "Colocaciones." },
    { fase: "guiada", c: ["b3co2-prendre"], k: "choice", ask: "«Hacer una pregunta»", q: "«___»", o: ["poser une question", "faire une question"], a: 0, pista: "poser.", why: "<b>poser</b>." },
    { fase: "guiada", c: ["b3co2-autres"], k: "choice", ask: "«Aceptar un reto»", q: "«___»", o: ["relever un défi", "accepter un défi"], a: 0, pista: "relever.", why: "<b>relever un défi</b>." },
    { fase: "indep", c: ["b3co2-autres"], k: "choice", ask: "«Sufrir una derrota»", q: "«___»", o: ["subir une défaite", "souffrir une défaite"], a: 0, why: "<b>subir</b>." },
    { fase: "indep", c: ["b3co2-prendre"], k: "fill", ask: "«tomar (una decisión)»", q: "Il faut ___ une décision rapidement.", acc: ["prendre"], why: "<b>prendre</b>." },
    { fase: "indep", c: ["b3co2-autres"], k: "fill", ask: "«se llevó» (remporter).", q: "Elle a ___ le premier prix.", acc: ["remporté"], why: "<b>remporté</b>." },
    { fase: "aplica", c: ["b3co2-autres"], k: "match", ask: "Une cada nombre con su verbo.", q: "Nombre → verbo", pairs: [["une erreur", "commettre"], ["une promesse", "tenir"], ["une hypothèse", "formuler"], ["un risque", "courir"]], why: "Colocaciones." },
    { fase: "aplica", c: ["b3co2-prendre"], k: "spot", ask: "Encuentra el error.", s: "À la fin du cours , j'ai [fait] une question au professeur .", fix: "posé", why: "<b>posé</b>." },
    { fase: "aplica", c: ["b3co2-prendre"], k: "choice", es: true, ask: "«Faire la queue» significa…", q: "Elige.", o: ["hacer fila", "peinarse"], a: 0, why: "Fila." },
    { fase: "dominio", c: ["b3co2-prendre"], k: "order", ask: "Ordena: «Hay que tomar medidas».", tokens: ["Il faut", "prendre", "des mesures"], why: "<b>Il faut prendre des mesures</b>" },
    { fase: "dominio", c: ["b3co2-prendre"], k: "choice", es: true, ask: "«Prendre rendez-vous» significa…", q: "Elige.", o: ["pedir cita", "tomar un café"], a: 0, why: "Cita." },
    { fase: "dominio", c: ["b3co2-prendre", "b3co2-autres"], k: "listen", say: "L'équipe a relevé le défi et remporté une belle victoire.", acc: ["L'équipe a relevé le défi et remporté une belle victoire."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>L'équipe a relevé le défi et remporté une belle victoire.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 57. Voir, regarder, observer, apercevoir, contempler ── */
E["b21-synonymes-percevoir"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Voir, regarder, observer, apercevoir, contempler",
  objetivo: {
    que: "Vas a elegir el verbo de percepción exacto: ver o mirar, observar, divisar, contemplar, mirar fijamente; oír o escuchar.",
    corto: "J'ai aperçu Marie dans la foule. · Il contemple le coucher du soleil.",
    podras: ["Distinguir voir (percibir) y regarder (mirar con intención), entendre (oír) y écouter (escuchar con atención).", "Usar los matices: observer (examinar), apercevoir (divisar de lejos o brevemente), contempler (con admiración), fixer (mirar fijamente).", "Usar jeter un coup d'œil (echar un vistazo), tendre l'oreille y s'apercevoir (darse cuenta)."],
    iconos: ["ic2/estrella", "ic2/audifonos", "ic2/bombilla"],
    previos: ["Los verbos precisos (B1.2, lección 57) y los adjetivos con matices (B1.2, lección 58)."],
    capacidad: "Ahora describes lo que ves y oyes con el verbo justo."
  },
  requiere: R("b2vp2-autres", "b2an-echelle"), recupera: ["b2vp2-autres"],
  conceptos: {
    "b3sp2-vue": { n: "vista: voir (percibir), regarder (mirar con intención), observer (examinar), apercevoir (divisar brevemente; s'apercevoir = darse cuenta), contempler (mirar con admiración), fixer (mirar fijamente), jeter un coup d'œil (echar un vistazo)", b: "gr" },
    "b3sp2-ouie": { n: "oído: entendre (oír: entendre un bruit), écouter (escuchar con atención: écouter de la musique), tendre l'oreille (aguzar el oído), ouïr (literario); percevoir (percibir)", b: "gr" }
  },
  video: {
    titulo: "Ver no es mirar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/estrella", grande: "apercevoir", seg: [
        { es: "Hola. Cada verbo tiene su matiz." } ] },
      { v: "frase", filas: [
          { nota: "divisar", p: 1, partes: [["J'ai aperçu Marie dans la foule.", "-", 1]] },
          { nota: "admirar", p: 2, partes: [["Il contemple le coucher du soleil.", "-", 2]] },
          { nota: "fijamente", p: 3, partes: [["Elle m'a fixé sans rien dire.", "-", 3]] } ], seg: [
        { fr: "J'ai aperçu Marie dans la foule.", p: 1 }, { fr: "Il contemple le coucher du soleil.", p: 2 }, { fr: "Elle m'a fixé sans rien dire.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Oí un ruido.»", o: ["J'ai entendu un bruit.", "J'ai regardé un bruit."], a: 0,
        bien: "¡Sí! Sonido: entendre.", mal: "Un sonido se oye: entendre.",
        seg: [ { es: "Pausa. Entendre." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["regarder", "observer", "apercevoir", "contempler", "fixer", "écouter"], seg: [
        { es: "Vista y oído, con matices.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mirador", img: "bg-montana", yo: "camila",
    escena: "Camila y Hugo suben a una colina sobre Lyon al atardecer.",
    pj: PJ,
    lineas: [
      ["camila", "Regarde ! Au loin, on aperçoit les montagnes. Et là, j'ai aperçu Marie dans la foule !", "¡Mira! A lo lejos se divisan las montañas. ¡Y ahí he visto de lejos a Marie entre la gente!"],
      ["hugo", "Jette un coup d'œil à ce panneau : des scientifiques observent le comportement des abeilles ici.", "Echa un vistazo a este cartel: unos científicos observan el comportamiento de las abejas aquí."],
      ["camila", "Chut… Tu entends ? J'écoute… c'est un oiseau. Tends l'oreille !", "Shh… ¿Oyes? Estoy escuchando… es un pájaro. ¡Aguza el oído!"],
      ["hugo", "Du haut de la colline, nous avons contemplé la ville illuminée. — Pourquoi tu me fixes comme ça ? — Parce que je viens de m'apercevoir que tu as oublié l'appareil photo !", "Desde lo alto de la colina contemplamos la ciudad iluminada. — ¿Por qué me miras fijamente? — ¡Porque acabo de darme cuenta de que olvidaste la cámara!"]
    ],
    fijate: "Fíjate: regarde, on aperçoit, j'ai aperçu, jette un coup d'œil, observent, tu entends, j'écoute, tends l'oreille, contemplé, tu me fixes, m'apercevoir (darse cuenta)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los verbos de percepción",
      idea: "Vista: voir = percibir (sin intención); regarder = dirigir la vista (con intención). observer = examinar con atención (Les scientifiques observent…); apercevoir = ver de lejos o un instante (on aperçoit les montagnes); s'apercevoir que = darse cuenta; contempler = mirar con admiración; fixer = mirar fijamente; jeter un coup d'œil = echar un vistazo. Oído: entendre = oír (un sonido se entend, no se «regarde»); écouter = escuchar con atención (J'écoute de la musique); tendre l'oreille = aguzar el oído; ouïr (literario). percevoir = percibir.",
      intro: "Toca cada verbo.",
      tabla: [["Francés", "Español", "Sentido"], [
        ["jeter un coup d'œil · Jette un coup d'œil à ce document", "echar un vistazo · Echa un vistazo a este documento", "vista"],
        ["contempler le paysage", "contemplar el paisaje", "vista"],
        ["J'écoute de la musique.", "Escucho música.", "oído"],
        ["Au loin, on aperçoit les montagnes. · aperçoit", "A lo lejos se divisan las montañas.", "vista"],
        ["Les scientifiques observent le comportement des abeilles. · observent", "Los científicos observan el comportamiento de las abejas.", "vista"],
        ["voir · regarder · contempler · fixer", "percibir · mirar con intención · mirar con admiración · mirar fijamente", "matices"],
        ["apercevoir · contempler · observer · fixer", "divisar · contemplar · observar · mirar fijamente", "Vista"],
        ["entendre · écouter · tendre l'oreille · ouïr", "oír · escuchar · aguzar el oído · oír (literario)", "Oído"],
        ["La nuit, j'ai entendu un bruit étrange dans le jardin. · entendu", "Por la noche oí un ruido extraño en el jardín.", "oído"],
        ["Du haut de la colline, nous avons contemplé la ville illuminée.", "Desde lo alto de la colina contemplamos la ciudad iluminada.", "vista"]
      ]],
      ej: [["J'ai aperçu Marie dans la foule.", "Vi de lejos a Marie entre la multitud."], ["Il contemple le coucher du soleil.", "Contempla la puesta de sol."], ["Elle m'a fixé sans rien dire.", "Me miró fijamente sin decir nada."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["J'ai regardé un bruit.", "J'ai entendu un bruit.", "Sonido: entendre."], ["J'entends de la musique (con atención)", "J'écoute de la musique", "Con atención: écouter."], ["apercevoir = darse cuenta", "s'apercevoir = darse cuenta; apercevoir = divisar", "Con o sin se."]] }
  ],
  ejemplos: [
    { sit: "«Echar un vistazo»", resp: "jeter un coup d'œil", pasos: ["coup d'œil."], porque: "Vista." },
    { sit: "«Contemplar el paisaje»", resp: "contempler le paysage", pasos: ["Con admiración."], porque: "Vista." },
    { sit: "«Escucho música.»", resp: "J'écoute de la musique.", pasos: ["Con atención."], porque: "Oído." }
  ],
  comprueba: [
    { q: "«Apercevoir» significa…", o: ["divisar, ver de lejos", "darse cuenta"], a: 0, b: "gr", porque: "Sin se." },
    { q: "«Fixer quelqu'un» es…", o: ["mirarlo fijamente", "arreglarlo"], a: 0, b: "gr", porque: "Mirada fija." },
    { q: "Un ruido se…", o: ["entend", "regarde"], a: 0, b: "gr", porque: "Oído." }
  ],
  practica: [
    { fase: "guiada", c: ["b3sp2-vue", "b3sp2-ouie"], k: "sort", ask: "¿Vista u oído?", q: "Clasifica.", cats: ["Vista", "Oído"], items: [["apercevoir", 0], ["contempler", 0], ["observer", 0], ["fixer", 0], ["entendre", 1], ["écouter", 1], ["tendre l'oreille", 1], ["ouïr", 1]], pista: "¿Ojos u orejas?", why: "Sentidos." },
    { fase: "guiada", c: ["b3sp2-vue"], k: "choice", ask: "«Echar un vistazo»", q: "«___»", o: ["jeter un coup d'œil", "lancer un coup d'œil"], a: 0, pista: "jeter.", why: "<b>jeter un coup d'œil</b>." },
    { fase: "guiada", c: ["b3sp2-vue"], k: "choice", ask: "«Contemplar el paisaje»", q: "«___»", o: ["contempler le paysage", "fixer le paysage"], a: 0, pista: "Admiración.", why: "<b>contempler</b>." },
    { fase: "indep", c: ["b3sp2-ouie"], k: "choice", ask: "«Escucho música.»", q: "«___»", o: ["J'écoute de la musique.", "Je regarde de la musique."], a: 0, why: "<b>écouter</b>." },
    { fase: "indep", c: ["b3sp2-vue"], k: "fill", ask: "«se divisan» (apercevoir, on).", q: "Au loin, on ___ les montagnes.", acc: ["aperçoit"], why: "<b>aperçoit</b>." },
    { fase: "indep", c: ["b3sp2-vue"], k: "fill", ask: "«observan» (observer).", q: "Les scientifiques ___ le comportement des abeilles.", acc: ["observent"], why: "<b>observent</b>." },
    { fase: "aplica", c: ["b3sp2-vue"], k: "match", ask: "Une cada verbo con su matiz.", q: "Verbo → matiz", pairs: [["voir", "percibir"], ["regarder", "mirar con intención"], ["contempler", "mirar con admiración"], ["fixer", "mirar fijamente"]], why: "Matices." },
    { fase: "aplica", c: ["b3sp2-ouie"], k: "spot", ask: "Encuentra el error.", s: "La nuit , j'ai [regardé] un bruit étrange dans le jardin .", fix: "entendu", why: "<b>entendu</b>." },
    { fase: "aplica", c: ["b3sp2-vue"], k: "choice", es: true, ask: "«Apercevoir» significa…", q: "Elige.", o: ["divisar, ver de lejos", "darse cuenta"], a: 0, why: "Divisar." },
    { fase: "dominio", c: ["b3sp2-vue"], k: "order", ask: "Ordena: «Echa un vistazo a este documento».", tokens: ["Jette", "un coup d'œil", "à ce document"], why: "<b>Jette un coup d'œil à ce document</b>" },
    { fase: "dominio", c: ["b3sp2-vue"], k: "choice", es: true, ask: "«Fixer quelqu'un» es…", q: "Elige.", o: ["mirarlo fijamente", "arreglarlo"], a: 0, why: "Mirada fija." },
    { fase: "dominio", c: ["b3sp2-vue", "b3sp2-ouie"], k: "listen", say: "Du haut de la colline, nous avons contemplé la ville illuminée.", acc: ["Du haut de la colline, nous avons contemplé la ville illuminée."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Du haut de la colline, nous avons contemplé la ville illuminée.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Marie", "Lyon"], previo: [] }
};

/* ── 58. Les paronymes : éminent / imminent, conjoncture / conjecture ── */
E["b21-paronymes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les paronymes : éminent / imminent, conjoncture / conjecture",
  objetivo: {
    que: "Vas a distinguir los parónimos: palabras que se parecen en la forma pero tienen sentidos distintos.",
    corto: "Un éminent chercheur a donné une conférence. · Le départ est imminent.",
    podras: ["Distinguir éminent (destacado) e imminent (a punto de ocurrir), conjoncture (coyuntura) y conjecture (conjetura).", "Distinguir effraction (entrada forzada) e infraction (violación de una norma), affliger (afligir) e infliger (imponer un castigo).", "Distinguir prolongation (en el tiempo) y prolongement (en el espacio)."],
    iconos: ["ic2/pregunta", "ic2/libro", "ic2/candado"],
    previos: ["Los falsos amigos (B1.2, lección 55) y los prefijos y sufijos (B1.2, lección 56)."],
    capacidad: "Ahora no confundes palabras casi iguales en un texto formal."
  },
  requiere: R("b2fa-mots", "b2ps2-pref", "b2ps2-suff"), recupera: ["b2fa-mots"],
  conceptos: {
    "b3pa-paires": { n: "parónimos: éminent (eminente, destacado) / imminent (inminente); conjoncture (coyuntura) / conjecture (conjetura, suposición); prolongation (en el tiempo) / prolongement (en el espacio)", b: "gr" },
    "b3pa-droit": { n: "parónimos del derecho: effraction (entrar par effraction: forzando) / infraction (une infraction au code de la route); infliger (imponer: infliger une amende) / affliger (afligir)", b: "gr" }
  },
  video: {
    titulo: "Casi iguales", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pregunta", grande: "éminent / imminent", seg: [
        { es: "Hola. Una letra cambia todo el sentido." } ] },
      { v: "frase", filas: [
          { nota: "destacado", p: 1, partes: [["Un éminent chercheur a donné une conférence.", "-", 1]] },
          { nota: "a punto", p: 2, partes: [["Le départ est imminent.", "-", 2]] },
          { nota: "forzando", p: 3, partes: [["Ils sont entrés par effraction.", "-", 3]] } ], seg: [
        { fr: "Un éminent chercheur a donné une conférence.", p: 1 }, { fr: "Le départ est imminent.", p: 2 }, { fr: "Ils sont entrés par effraction.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Un peligro inminente»", o: ["un danger imminent", "un danger éminent"], a: 0,
        bien: "¡Sí! Va a ocurrir: imminent.", mal: "Lo que va a ocurrir es imminent.",
        seg: [ { es: "Pausa. Imminent." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["éminent", "imminent", "conjoncture", "conjecture", "effraction", "infraction"], seg: [
        { es: "Mira bien cada letra.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Las noticias de la noche", img: "bg-noche", yo: "camila",
    escena: "Camila y Hugo ven el telediario.",
    pj: PJ,
    lineas: [
      ["hugo", "« Selon la météo, l'arrivée de la tempête est imminente. » Il faut rentrer le vélo !", "«Según el tiempo, la llegada de la tormenta es inminente.» ¡Hay que guardar la bici!"],
      ["camila", "Et là : « Des voleurs sont entrés par effraction dans un musée. » Le juge leur a infligé une lourde peine.", "Y aquí: «Unos ladrones entraron forzando la puerta de un museo.» El juez les impuso una pena dura."],
      ["hugo", "Après, un éminent spécialiste parle de la conjoncture économique.", "Después, un eminente especialista habla de la coyuntura económica."],
      ["camila", "Il dit : « Dans la conjoncture actuelle, toute conjecture sur l'avenir reste fragile. » Conjoncture, conjecture… quel piège !", "Dice: «En la coyuntura actual, toda conjetura sobre el futuro sigue siendo frágil.» Coyuntura, conjetura… ¡qué trampa!"]
    ],
    fijate: "Fíjate: imminente (va a ocurrir), par effraction (forzando), infligé (impuso), éminent (destacado), la conjoncture (situación), conjecture (suposición)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Parejas de parónimos",
      idea: "éminent = eminente, destacado (un éminent spécialiste); imminent = a punto de ocurrir (un danger imminent, l'arrivée de la tempête est imminente). conjoncture = coyuntura, situación (la conjoncture économique); conjecture = conjetura, suposición. effraction = entrada forzada (entrer par effraction); infraction = violación de una norma (une infraction au code de la route). infliger = imponer un castigo (infliger une amende); affliger = afligir. prolongation = alargamiento en el tiempo; prolongement = alargamiento en el espacio. Otras palabras del tiempo: éphémère (pasajero), antérieur (anterior).",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Pareja"], [
        ["un danger imminent", "un peligro inminente", "imminent"],
        ["la conjoncture économique", "la coyuntura económica", "conjoncture"],
        ["une infraction au code de la route", "una infracción de tráfico", "infraction"],
        ["Les voleurs sont entrés par effraction. · effraction", "Los ladrones entraron forzando la puerta.", "effraction"],
        ["Le juge lui a infligé une amende. · infligé", "El juez le impuso una multa.", "infliger"],
        ["éminent · imminent · conjecture · conjoncture", "eminente · inminente · conjetura · coyuntura", "parejas"],
        ["imminent · prolongation · éphémère · antérieur", "inminente · prórroga · efímero · anterior", "Relacionado con el tiempo"],
        ["éminent · prolongement · effraction · conjecture", "eminente · prolongación (en el espacio) · entrada forzada · conjetura", "Relacionado con otra cosa"],
        ["Selon la météo, l'arrivée de la tempête est imminente. · imminente", "Según el tiempo, la llegada de la tormenta es inminente.", "imminent"],
        ["C'est un éminent spécialiste", "Es un eminente especialista", "éminent"],
        ["Dans la conjoncture actuelle, toute conjecture sur l'avenir reste fragile.", "En la coyuntura actual, toda conjetura sobre el futuro sigue siendo frágil.", "conjoncture · conjecture"]
      ]],
      ej: [["Un éminent chercheur a donné une conférence.", "Un eminente investigador dio una conferencia."], ["Le départ est imminent.", "La salida es inminente."], ["Ils sont entrés par effraction.", "Entraron forzando la puerta."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Un danger éminent", "Un danger imminent", "Peligro que va a ocurrir: imminent."], ["La tempête est éminente.", "La tempête est imminente.", "Va a llegar: imminente."], ["entrer par infraction", "entrer par effraction", "Forzar la entrada: effraction."]] }
  ],
  ejemplos: [
    { sit: "«Un peligro inminente»", resp: "un danger imminent", pasos: ["Va a ocurrir."], porque: "imminent." },
    { sit: "«La coyuntura económica»", resp: "la conjoncture économique", pasos: ["Situación."], porque: "conjoncture." },
    { sit: "«Una infracción de tráfico»", resp: "une infraction au code de la route", pasos: ["Norma."], porque: "infraction." }
  ],
  comprueba: [
    { q: "«Éminent» significa…", o: ["destacado", "a punto de ocurrir"], a: 0, b: "gr", porque: "Eminente." },
    { q: "«Une conjecture» es…", o: ["una suposición", "una situación económica"], a: 0, b: "gr", porque: "Conjetura." },
    { q: "«Infliger une amende» es…", o: ["imponer una multa", "pagar una multa"], a: 0, b: "gr", porque: "Imponer." }
  ],
  practica: [
    { fase: "guiada", c: ["b3pa-paires", "b3pa-droit"], k: "sort", ask: "¿Relacionado con el tiempo o con otra cosa?", q: "Clasifica.", cats: ["Relacionado con el tiempo", "Relacionado con otra cosa"], items: [["imminent", 0], ["prolongation", 0], ["éphémère", 0], ["antérieur", 0], ["éminent", 1], ["prolongement", 1], ["effraction", 1], ["conjecture", 1]], pista: "¿Habla de cuándo?", why: "Sentidos." },
    { fase: "guiada", c: ["b3pa-paires"], k: "choice", ask: "«Un peligro inminente»", q: "«___»", o: ["un danger imminent", "un danger éminent"], a: 0, pista: "Va a ocurrir.", why: "<b>imminent</b>." },
    { fase: "guiada", c: ["b3pa-paires"], k: "choice", ask: "«La coyuntura económica»", q: "«___»", o: ["la conjoncture économique", "la conjecture économique"], a: 0, pista: "Situación.", why: "<b>conjoncture</b>." },
    { fase: "indep", c: ["b3pa-droit"], k: "choice", ask: "«Una infracción de tráfico»", q: "«___»", o: ["une infraction au code de la route", "une effraction au code de la route"], a: 0, why: "<b>infraction</b>." },
    { fase: "indep", c: ["b3pa-droit"], k: "fill", ask: "«forzando (la entrada)»", q: "Les voleurs sont entrés par ___ .", acc: ["effraction"], why: "<b>effraction</b>." },
    { fase: "indep", c: ["b3pa-droit"], k: "fill", ask: "«impuso» (infliger).", q: "Le juge lui a ___ une amende.", acc: ["infligé"], why: "<b>infligé</b>." },
    { fase: "aplica", c: ["b3pa-paires"], k: "match", ask: "Une cada palabra con su traducción.", q: "Francés → español", pairs: [["éminent", "eminente"], ["imminent", "inminente"], ["conjecture", "conjetura"], ["conjoncture", "coyuntura"]], why: "Parejas." },
    { fase: "aplica", c: ["b3pa-paires"], k: "spot", ask: "Encuentra el error.", s: "Selon la météo , l'arrivée de la tempête est [éminente] .", fix: "imminente", why: "<b>imminente</b>." },
    { fase: "aplica", c: ["b3pa-paires"], k: "choice", es: true, ask: "«Une conjecture» es…", q: "Elige.", o: ["una suposición", "una situación económica"], a: 0, why: "Conjetura." },
    { fase: "dominio", c: ["b3pa-paires"], k: "order", ask: "Ordena: «Es un eminente especialista».", tokens: ["C'est", "un éminent", "spécialiste"], why: "<b>C'est un éminent spécialiste</b>" },
    { fase: "dominio", c: ["b3pa-droit"], k: "choice", es: true, ask: "«Infliger une amende» es…", q: "Elige.", o: ["imponer una multa", "pagar una multa"], a: 0, why: "Imponer." },
    { fase: "dominio", c: ["b3pa-paires", "b3pa-droit"], k: "listen", say: "Dans la conjoncture actuelle, toute conjecture sur l'avenir reste fragile.", acc: ["Dans la conjoncture actuelle, toute conjecture sur l'avenir reste fragile."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans la conjoncture actuelle, toute conjecture sur l'avenir reste fragile.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 59. Homophones grammaticaux : quoique / quoi que, quel / qu'elle, sans / s'en ── */
E["b21-homophones-grammaticaux"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Homophones grammaticaux : quoique / quoi que, quel / qu'elle, sans / s'en",
  objetivo: {
    que: "Vas a escribir bien las palabras que suenan igual pero cambian según su función: quoique / quoi que, quel / qu'elle, sans / s'en, quand / quant à, plutôt / plus tôt.",
    corto: "Quoi que tu fasses, je te soutiendrai. · Quant à moi, je reste.",
    podras: ["Distinguir quoique (aunque) de quoi que (sea lo que sea que) y quel(le) (qué) de qu'elle (que ella).", "Distinguir sans (sin) de s'en (se + en: il s'en va) y quand (cuando) de quant à (en cuanto a).", "Distinguir plutôt (más bien) de plus tôt (más temprano)."],
    iconos: ["ic2/lapiz", "ic2/pregunta", "ic2/libro"],
    previos: ["La concesión (lección 9) y la puntuación (B1.2, lección 62)."],
    capacidad: "Ahora evitas las faltas de homófonos que delatan a un estudiante."
  },
  requiere: R("b3co-mode", "b3co-autres", "b2po-signes"), recupera: ["b3co-mode"],
  conceptos: {
    "b3hg-quoi": { n: "quoique = bien que, aunque (Quoique fatigué, il a continué); quoi que = sea lo que sea que (Quoi que tu fasses…); quel(le) + nombre / qu'elle = que + elle (se cambia por qu'il)", b: "gr" },
    "b3hg-sans": { n: "sans = sin (sans doute, sans toi) / s'en = se + en (il s'en va, elle s'en souvient); quand = cuando / quant à = en cuanto a; plutôt = más bien / plus tôt = más temprano", b: "gr" }
  },
  video: {
    titulo: "Suenan igual", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "quant à", seg: [
        { es: "Hola. Se oyen igual, pero no se escriben igual." } ] },
      { v: "frase", filas: [
          { nota: "quoi que", p: 1, partes: [["Quoi que tu fasses, je te soutiendrai.", "-", 1]] },
          { nota: "quant à", p: 2, partes: [["Quant à moi, je reste.", "-", 2]] },
          { nota: "plus tôt", p: 3, partes: [["Viens plus tôt demain, plutôt vers 8 h.", "-", 3]] } ], seg: [
        { fr: "Quoi que tu fasses, je te soutiendrai.", p: 1 }, { fr: "Quant à moi, je reste.", p: 2 }, { fr: "Viens plus tôt demain, plutôt vers 8 h.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«En cuanto a él…»", o: ["Quant à lui…", "Quand à lui…"], a: 0,
        bien: "¡Sí! Quant à.", mal: "En cuanto a = quant à.",
        seg: [ { es: "Pausa. Con t." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["quoique", "quoi que", "qu'elle", "s'en", "quant à", "plus tôt"], seg: [
        { es: "Cambia la palabra por otra para comprobar.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El mensaje de Hugo", img: "bg-cafe", yo: "camila",
    escena: "Camila corrige un mensaje que Hugo va a enviar a su jefa.",
    pj: PJ,
    lineas: [
      ["hugo", "J'ai écrit : « Quand à la date de la réunion, elle reste à fixer. »", "Escribí: «Cuando a la fecha de la reunión, queda por fijar.»"],
      ["camila", "Non : « Quant à la date… », avec un t. Quant à = en cuanto a.", "No: «Quant à la date…», con t. Quant à = en cuanto a."],
      ["hugo", "D'accord. Et ma cheffe, je pense qu'elle a raison : il faut arriver plus tôt. — Quoique fatigué, je vais le faire.", "Vale. Y mi jefa, creo que tiene razón: hay que llegar más temprano. — Aunque cansado, lo voy a hacer."],
      ["camila", "Bien. Ton collègue est parti sans dire au revoir ? Il s'en va toujours comme ça ! Quoi qu'elle dise, je crois qu'elle a plutôt raison.", "Bien. ¿Tu compañero se fue sin despedirse? ¡Siempre se va así! Diga lo que diga, creo que más bien tiene razón."]
    ],
    fijate: "Fíjate: Quant à (en cuanto a), qu'elle (que ella), plus tôt (más temprano), Quoique (aunque), sans (sin), s'en va (se va), Quoi qu'elle dise (diga lo que diga), plutôt (más bien)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cómo distinguirlos",
      idea: "quoique (una palabra) = bien que, aunque: Quoique fatigué, il a continué. quoi que (dos palabras) = sea lo que sea que, + subjuntivo: Quoi que tu fasses… quel(le) + nombre (Quelle surprise !) / qu'elle = que + elle: truco, cámbialo por qu'il (Je pense qu'elle a raison). sans = sin (sans doute, sans problème) / s'en = se + en, delante de un verbo (il s'en va, elle s'en souvient). quand = cuando / quant à = en cuanto a (Quant à moi…). plutôt = más bien / plus tôt = más temprano (lo contrario de plus tard).",
      intro: "Toca cada frase.",
      tabla: [["Francés", "Español", "Homófono"], [
        ["Quoi que tu fasses…", "Hagas lo que hagas…", "quoi que"],
        ["Quant à lui…", "En cuanto a él…", "quant à"],
        ["Arrive plus tôt.", "Llega más temprano.", "plus tôt"],
        ["Je pense qu'elle a raison. · qu'elle", "Creo que ella tiene razón.", "qu'elle"],
        ["Il est parti sans dire au revoir. · sans", "Se fue sin despedirse.", "sans"],
        ["quoique · quoi que · plutôt · plus tôt", "aunque · sea lo que sea que · más bien · más temprano", "parejas"],
        ["___ doute · ___ problème · ___ toi · ___ cesse", "sin duda · sin problema · sin ti · sin cesar", "sans"],
        ["il ___ va · elle ___ souvient · on ___ fiche · il ___ moque", "se va · se acuerda · le da igual · se burla", "s'en"],
        ["Quant à la date de la réunion, elle reste à fixer. · Quant", "En cuanto a la fecha de la reunión, queda por fijar.", "quant à"],
        ["Quoique fatigué, il a continué", "Aunque cansado, siguió", "quoique"],
        ["Quoi qu'elle dise, je crois qu'elle a plutôt raison.", "Diga lo que diga, creo que más bien tiene razón.", "quoi que · plutôt"]
      ]],
      ej: [["Quoi que tu fasses, je te soutiendrai.", "Hagas lo que hagas, te apoyaré."], ["Quant à moi, je reste.", "En cuanto a mí, me quedo."], ["Viens plus tôt demain, plutôt vers 8 h.", "Ven más temprano mañana, más bien hacia las 8."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Quand à moi…", "Quant à moi…", "Quant à = en cuanto a."], ["Je pense quelle a raison.", "Je pense qu'elle a raison.", "Truco: qu'il."], ["Il sans va.", "Il s'en va.", "Delante del verbo: s'en."]] }
  ],
  ejemplos: [
    { sit: "«Hagas lo que hagas…»", resp: "Quoi que tu fasses…", pasos: ["Dos palabras + subjuntivo."], porque: "quoi que." },
    { sit: "«En cuanto a él…»", resp: "Quant à lui…", pasos: ["Con t."], porque: "quant à." },
    { sit: "«Llega más temprano.»", resp: "Arrive plus tôt.", pasos: ["Contrario de plus tard."], porque: "plus tôt." }
  ],
  comprueba: [
    { q: "«Quoique» (una palabra) significa…", o: ["aunque", "sea lo que sea que"], a: 0, b: "gr", porque: "bien que." },
    { q: "Delante de un verbo («il ___ va») se escribe…", o: ["s'en", "sans"], a: 0, b: "gr", porque: "se + en." },
    { q: "«Plutôt» significa…", o: ["más bien", "más temprano"], a: 0, b: "gr", porque: "Una palabra." }
  ],
  practica: [
    { fase: "guiada", c: ["b3hg-sans"], k: "sort", ask: "¿sans o s'en?", q: "Clasifica.", cats: ["sans", "s'en"], items: [["___ doute", 0], ["___ problème", 0], ["___ toi", 0], ["___ cesse", 0], ["il ___ va", 1], ["elle ___ souvient", 1], ["on ___ fiche", 1], ["il ___ moque", 1]], pista: "¿Hay un verbo detrás?", why: "sans / s'en." },
    { fase: "guiada", c: ["b3hg-quoi"], k: "choice", ask: "«Hagas lo que hagas…»", q: "«___»", o: ["Quoi que tu fasses…", "Quoique tu fasses…"], a: 0, pista: "Dos palabras.", why: "<b>Quoi que</b>." },
    { fase: "guiada", c: ["b3hg-sans"], k: "choice", ask: "«En cuanto a él…»", q: "«___»", o: ["Quant à lui…", "Quand à lui…"], a: 0, pista: "Con t.", why: "<b>Quant à</b>." },
    { fase: "indep", c: ["b3hg-sans"], k: "choice", ask: "«Llega más temprano.»", q: "«___»", o: ["Arrive plus tôt.", "Arrive plutôt."], a: 0, why: "<b>plus tôt</b>." },
    { fase: "indep", c: ["b3hg-quoi"], k: "fill", ask: "«que ella»", q: "Je pense ___ a raison.", acc: ["qu'elle"], why: "<b>qu'elle</b>." },
    { fase: "indep", c: ["b3hg-sans"], k: "fill", ask: "«sin»", q: "Il est parti ___ dire au revoir.", acc: ["sans"], why: "<b>sans</b>." },
    { fase: "aplica", c: ["b3hg-quoi", "b3hg-sans"], k: "match", ask: "Une cada palabra con su sentido.", q: "Palabra → sentido", pairs: [["quoique", "aunque"], ["quoi que", "sea lo que sea que"], ["plutôt", "más bien"], ["plus tôt", "más temprano"]], why: "Homófonos." },
    { fase: "aplica", c: ["b3hg-sans"], k: "spot", ask: "Encuentra el error.", s: "[Quand] à la date de la réunion , elle reste à fixer .", fix: "Quant", why: "<b>Quant</b>." },
    { fase: "aplica", c: ["b3hg-quoi"], k: "choice", es: true, ask: "«Quoique» (una palabra) significa…", q: "Elige.", o: ["aunque", "sea lo que sea que"], a: 0, why: "Aunque." },
    { fase: "dominio", c: ["b3hg-quoi"], k: "order", ask: "Ordena: «Aunque cansado, siguió».", tokens: ["Quoique", "fatigué,", "il a continué"], why: "<b>Quoique fatigué, il a continué</b>" },
    { fase: "dominio", c: ["b3hg-sans"], k: "choice", es: true, ask: "«Plutôt» significa…", q: "Elige.", o: ["más bien", "más temprano"], a: 0, why: "Más bien." },
    { fase: "dominio", c: ["b3hg-quoi", "b3hg-sans"], k: "listen", say: "Quoi qu'elle dise, je crois qu'elle a plutôt raison.", acc: ["Quoi qu'elle dise, je crois qu'elle a plutôt raison."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Quoi qu'elle dise, je crois qu'elle a plutôt raison.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── B2.1·9 Léxico expresivo · 60. Expressions avec les parties du corps ── */
E["b21-expressions-corps"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Expressions avec les parties du corps",
  objetivo: {
    que: "Vas a usar las expresiones francesas con partes del cuerpo: cabeza, mano, ojo, pie…",
    corto: "Tu peux me donner un coup de main ? · Il s'est mis le doigt dans l'œil.",
    podras: ["Usar las de la cabeza y la mano: avoir la grosse tête, en avoir par-dessus la tête, avoir le bras long, donner un coup de main, avoir le cœur sur la main.", "Usar las del ojo: ne pas fermer l'œil, mon œil !, à l'œil, se mettre le doigt dans l'œil.", "Usar las del pie y la pierna: casser les pieds, prendre ses jambes à son cou, faire des pieds et des mains, mettre les pieds dans le plat."],
    iconos: ["ic2/corazon", "ic2/amigos", "ic2/estrella"],
    previos: ["Las expresiones idiomáticas (B1.1, lección 66) y los refranes (B1.2, lección 67)."],
    capacidad: "Ahora hablas con expresiones vivas, como un francés."
  },
  requiere: R("b1ei-humeur", "b1ei-autres", "b2pv-autres"), recupera: ["b1ei-humeur"],
  conceptos: {
    "b3ex-tete": { n: "cabeza, mano, brazo: avoir la grosse tête (ser creído), en avoir par-dessus la tête (estar harto), avoir le bras long (tener influencias), donner un coup de main (echar una mano), avoir le cœur sur la main (ser generoso)", b: "gr" },
    "b3ex-oeil": { n: "ojo y pie: ne pas fermer l'œil (no pegar ojo), mon œil ! (¡y un cuerno!), à l'œil (gratis), se mettre le doigt dans l'œil (equivocarse del todo); casser les pieds, prendre ses jambes à son cou (salir corriendo), faire des pieds et des mains (hacer lo imposible), mettre les pieds dans le plat (meter la pata)", b: "gr" }
  },
  video: {
    titulo: "El cuerpo habla", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "un coup de main", seg: [
        { es: "Hola. El francés habla con todo el cuerpo." } ] },
      { v: "frase", filas: [
          { nota: "mano", p: 1, partes: [["Tu peux me donner un coup de main ?", "-", 1]] },
          { nota: "ojo", p: 2, partes: [["Il s'est mis le doigt dans l'œil.", "-", 2]] },
          { nota: "pies", p: 3, partes: [["Elle a fait des pieds et des mains pour obtenir ce poste.", "-", 3]] } ], seg: [
        { fr: "Tu peux me donner un coup de main ?", p: 1 }, { fr: "Il s'est mis le doigt dans l'œil.", p: 2 }, { fr: "Elle a fait des pieds et des mains pour obtenir ce poste.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Echar una mano»", o: ["donner un coup de main", "donner une main"], a: 0,
        bien: "¡Sí! Un coup de main.", mal: "Se dice donner un coup de main.",
        seg: [ { es: "Pausa. Coup de main." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["avoir le bras long", "le cœur sur la main", "mon œil !", "casser les pieds", "par-dessus la tête"], seg: [
        { es: "Cabeza, mano, ojo y pies.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La mudanza", img: "bg-paris", yo: "camila",
    escena: "Camila se muda y Hugo viene a ayudar.",
    pj: PJ,
    lineas: [
      ["camila", "Tu peux me donner un coup de main ? Je n'ai pas fermé l'œil de la nuit, j'en ai par-dessus la tête de ces cartons !", "¿Me echas una mano? No pegué ojo en toda la noche, ¡estoy harta de estas cajas!"],
      ["hugo", "Bien sûr. Mon voisin a le cœur sur la main : il donne toujours un coup de main. Il nous prête sa camionnette à l'œil.", "Claro. Mi vecino es muy generoso: siempre echa una mano. Nos presta su furgoneta gratis."],
      ["camila", "Super ! Et le propriétaire dit que l'appartement est parfait… Mon œil ! Tout est cassé.", "¡Genial! Y el propietario dice que el apartamento es perfecto… ¡Y un cuerno! Todo está roto."],
      ["hugo", "Il a le bras long, mais s'il croit que tu vas payer les réparations, il se met le doigt dans l'œil !", "Tiene influencias, pero si cree que vas a pagar las reparaciones, ¡se equivoca de medio a medio!"]
    ],
    fijate: "Fíjate: un coup de main, je n'ai pas fermé l'œil, j'en ai par-dessus la tête, le cœur sur la main, à l'œil (gratis), Mon œil !, le bras long, se met le doigt dans l'œil."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Expresiones del cuerpo",
      idea: "Cabeza: avoir la grosse tête (ser creído), en avoir par-dessus la tête (estar harto), avoir la tête dans les nuages. Mano y brazo: avoir le bras long (tener enchufe, influencias), donner un coup de main (echar una mano; nunca «donner une main»), avoir le cœur sur la main (ser generoso). Ojo: ne pas fermer l'œil (no pegar ojo), mon œil ! (¡y un cuerno!), à l'œil (gratis), se mettre le doigt dans l'œil (equivocarse del todo). Pie y pierna: casser les pieds (fastidiar), prendre ses jambes à son cou (salir corriendo), faire des pieds et des mains (hacer lo imposible), mettre les pieds dans le plat (meter la pata).",
      intro: "Toca cada expresión.",
      tabla: [["Francés", "Español", "Parte"], [
        ["Il a le bras long.", "Tiene influencias.", "brazo"],
        ["Je n'ai pas fermé l'œil.", "No pegué ojo.", "ojo"],
        ["donner un coup de main · Tu peux me donner un coup de main ?", "echar una mano · ¿Me echas una mano?", "mano"],
        ["Elle a le cœur sur la main : elle aide tout le monde. · main", "Es muy generosa: ayuda a todo el mundo.", "mano"],
        ["J'en ai par-dessus la tête ! · tête", "¡Estoy harto!", "cabeza"],
        ["avoir la grosse tête · prendre ses jambes à son cou · mon œil ! · faire des pieds et des mains", "ser creído · salir corriendo · ¡y un cuerno! · hacer lo imposible", "expresiones"],
        ["ne pas fermer l'œil · mon œil ! · à l'œil (gratis) · se mettre le doigt dans l'œil", "no pegar ojo · ¡y un cuerno! · gratis · equivocarse del todo", "Ojo"],
        ["casser les pieds · prendre ses jambes à son cou · faire des pieds et des mains · mettre les pieds dans le plat", "fastidiar · salir corriendo · hacer lo imposible · meter la pata", "Pie / pierna"],
        ["Tu te mets le doigt dans l'œil si tu crois qu'il va accepter. · œil", "Te equivocas de medio a medio si crees que va a aceptar.", "ojo"],
        ["Mon voisin a le cœur sur la main : il donne toujours un coup de main.", "Mi vecino es muy generoso: siempre echa una mano.", "mano"]
      ]],
      ej: [["Tu peux me donner un coup de main ?", "¿Me echas una mano?"], ["Il s'est mis le doigt dans l'œil.", "Se equivocó de medio a medio."], ["Elle a fait des pieds et des mains pour obtenir ce poste.", "Hizo lo imposible por conseguir ese puesto."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["donner une main", "donner un coup de main", "«Echar una mano» = donner un coup de main."], ["se mettre le doigt dans le nez", "se mettre le doigt dans l'œil", "Equivocarse: l'œil."], ["à l'œil = vigilando", "à l'œil = gratis", "Expresión familiar."]] }
  ],
  ejemplos: [
    { sit: "«Il a le bras long.» Significa que…", resp: "tiene influencias", pasos: ["Llega lejos."], porque: "Brazo." },
    { sit: "«Je n'ai pas fermé l'œil.» Significa…", resp: "no pegué ojo", pasos: ["No dormí."], porque: "Ojo." },
    { sit: "«Echar una mano»", resp: "donner un coup de main", pasos: ["coup de main."], porque: "Mano." }
  ],
  comprueba: [
    { q: "«Avoir le cœur sur la main» es…", o: ["ser generoso", "estar enamorado"], a: 0, b: "gr", porque: "Generosidad." },
    { q: "«Mon œil !» significa…", o: ["¡y un cuerno!", "¡mira!"], a: 0, b: "gr", porque: "Incredulidad." },
    { q: "«Casser les pieds» significa…", o: ["fastidiar", "romperse un pie"], a: 0, b: "gr", porque: "Molestar." }
  ],
  practica: [
    { fase: "guiada", c: ["b3ex-oeil"], k: "sort", ask: "¿Expresión con ojo o con pie / pierna?", q: "Clasifica.", cats: ["Ojo", "Pie / pierna"], items: [["ne pas fermer l'œil", 0], ["mon œil !", 0], ["à l'œil (gratis)", 0], ["se mettre le doigt dans l'œil", 0], ["casser les pieds", 1], ["prendre ses jambes à son cou", 1], ["faire des pieds et des mains", 1], ["mettre les pieds dans le plat", 1]], pista: "Busca la parte del cuerpo.", why: "Expresiones." },
    { fase: "guiada", c: ["b3ex-tete"], k: "choice", es: true, ask: "«Il a le bras long.» Significa que…", q: "Elige.", o: ["tiene influencias", "tiene los brazos largos"], a: 0, pista: "Enchufe.", why: "Influencias." },
    { fase: "guiada", c: ["b3ex-oeil"], k: "choice", es: true, ask: "«Je n'ai pas fermé l'œil.» Significa…", q: "Elige.", o: ["no pegué ojo", "tengo un ojo herido"], a: 0, pista: "Dormir.", why: "No dormí." },
    { fase: "indep", c: ["b3ex-tete"], k: "choice", ask: "«Echar una mano»", q: "«___»", o: ["donner un coup de main", "donner une main"], a: 0, why: "<b>un coup de main</b>." },
    { fase: "indep", c: ["b3ex-tete"], k: "fill", ask: "«ser generosa» (le cœur sur la …)", q: "Elle a le cœur sur la ___ : elle aide tout le monde.", acc: ["main"], why: "<b>main</b>." },
    { fase: "indep", c: ["b3ex-tete"], k: "fill", ask: "«estoy harto» (par-dessus la …)", q: "J'en ai par-dessus la ___ !", acc: ["tête"], why: "<b>tête</b>." },
    { fase: "aplica", c: ["b3ex-tete", "b3ex-oeil"], k: "match", ask: "Une cada expresión con su sentido.", q: "Expresión → sentido", pairs: [["avoir la grosse tête", "ser creído"], ["prendre ses jambes à son cou", "salir corriendo"], ["mon œil !", "¡y un cuerno!"], ["faire des pieds et des mains", "hacer lo imposible"]], why: "Expresiones." },
    { fase: "aplica", c: ["b3ex-oeil"], k: "spot", ask: "Encuentra el error.", s: "Tu te mets le doigt dans le [nez] si tu crois qu'il va accepter .", fix: "œil", why: "<b>œil</b>." },
    { fase: "aplica", c: ["b3ex-oeil"], k: "choice", es: true, ask: "«Casser les pieds» significa…", q: "Elige.", o: ["fastidiar", "romperse un pie"], a: 0, why: "Fastidiar." },
    { fase: "dominio", c: ["b3ex-tete"], k: "order", ask: "Ordena: «¿Me echas una mano?»", tokens: ["Tu peux me donner", "un coup de main", "?"], why: "<b>Tu peux me donner un coup de main ?</b>" },
    { fase: "dominio", c: ["b3ex-oeil"], k: "choice", es: true, ask: "«Mon œil !» significa…", q: "Elige.", o: ["¡y un cuerno!", "¡mira!"], a: 0, why: "Incredulidad." },
    { fase: "dominio", c: ["b3ex-tete", "b3ex-oeil"], k: "listen", say: "Mon voisin a le cœur sur la main : il donne toujours un coup de main.", acc: ["Mon voisin a le cœur sur la main : il donne toujours un coup de main.", "Mon voisin a le cœur sur la main: il donne toujours un coup de main."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mon voisin a le cœur sur la main : il donne toujours un coup de main.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 61. Anglicismes et équivalents français ── */
E["b21-anglicismes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Anglicismes et équivalents français",
  objetivo: {
    que: "Vas a usar los anglicismos del francés con criterio: cuáles se aceptan, cuáles tienen equivalente formal y cuáles son falsos anglicismos.",
    corto: "Je vous envoie un courriel cet après-midi. · Je fais du footing tous les matins.",
    podras: ["Cambiar el anglicismo por su equivalente en registro formal: courriel (mail), réunion (meeting), retour (feedback), défi (challenge), date limite (deadline).", "Reconocer los anglicismos aceptados (le week-end, le parking) y los falsos (le footing, le pressing).", "Conocer los equivalentes de Quebec: magasiner, clavarder, fin de semaine, infolettre."],
    iconos: ["ic2/bandera", "ic2/laptop", "ic2/mundo"],
    previos: ["Las palabras del oral (B1.2, lección 59), el registro culto (B1.2, lección 60) y la francofonía (B1.2, lección 66)."],
    capacidad: "Ahora escribes correos profesionales sin anglicismos innecesarios."
  },
  requiere: R("b2rs-mots", "b2mo-registre", "b2fr-quebec"), recupera: ["b2fr-quebec"],
  conceptos: {
    "b3an-equiv": { n: "equivalentes formales: le mail → le courriel, le meeting → la réunion, le feedback → le retour, le challenge → le défi, la deadline → la date limite, la newsletter → l'infolettre, le hashtag → le mot-dièse, le brainstorming → le remue-méninges", b: "gr" },
    "b3an-faux": { n: "aceptados: le week-end, le parking, le sandwich, le jean; falsos anglicismos: le footing (correr), le pressing (tintorería), le brushing, un smoking; Quebec: magasiner, clavarder, fin de semaine", b: "gr" }
  },
  video: {
    titulo: "Anglicismos", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bandera", grande: "un courriel", seg: [
        { es: "Hola. En un correo formal, mejor en francés." } ] },
      { v: "frase", filas: [
          { nota: "correo", p: 1, partes: [["Je vous envoie un courriel cet après-midi.", "-", 1]] },
          { nota: "reunión", p: 2, partes: [["La réunion est reportée à lundi.", "-", 2]] },
          { nota: "falso", p: 3, partes: [["Je fais du footing tous les matins.", "-", 3]] } ], seg: [
        { fr: "Je vous envoie un courriel cet après-midi.", p: 1 }, { fr: "La réunion est reportée à lundi.", p: 2 }, { fr: "Je fais du footing tous les matins.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«le footing» es…", o: ["correr, hacer jogging", "el fútbol"], a: 0, es: true,
        bien: "¡Sí! Falso anglicismo.", mal: "Footing = correr.",
        seg: [ { es: "Pausa. Falso anglicismo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le courriel", "la réunion", "le retour", "le défi", "la date limite"], seg: [
        { es: "Equivalentes, aceptados y falsos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El correo a la profesora", img: "bg-biblioteca", yo: "camila",
    escena: "Camila escribe un correo formal a Madame Sofia y Hugo lo revisa.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Madame, je vous confirme par mail notre meeting de demain. Merci pour votre feedback. »", "Escribí: «Señora, le confirmo por mail nuestro meeting de mañana. Gracias por su feedback.»"],
      ["hugo", "C'est un message formel : « par courriel », « notre réunion », « votre retour ». C'est plus élégant.", "Es un mensaje formal: «por correo», «nuestra reunión», «sus comentarios». Es más elegante."],
      ["camila", "D'accord. « Merci de m'envoyer votre retour par courriel avant la date limite. » Et ce week-end, je fais du footing et je dépose ma veste au pressing.", "Vale. «Le agradezco que me envíe sus comentarios por correo antes de la fecha límite.» Y este fin de semana salgo a correr y llevo mi chaqueta a la tintorería."],
      ["hugo", "Ça, c'est bon ! Le week-end, le footing, le pressing… on les dit en France. Au Québec, on dit « la fin de semaine ».", "¡Eso está bien! Le week-end, le footing, le pressing… se dicen en Francia. En Quebec se dice «la fin de semaine»."]
    ],
    fijate: "Fíjate: par courriel, la réunion, votre retour, la date limite (registro formal); le week-end (aceptado), le footing, le pressing (falsos anglicismos); la fin de semaine (Quebec)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Anglicismos y equivalentes",
      idea: "En registro formal y oficial se prefieren los equivalentes: le mail → le courriel, le meeting → la réunion, le feedback → le retour, le challenge → le défi, la deadline → la date limite, la newsletter → l'infolettre, le hashtag → le mot-dièse, le brainstorming → le remue-méninges. Aceptados en todos los registros: le week-end, le parking, le sandwich, le jean. Falsos anglicismos (no existen así en inglés): le footing (correr; no es el fútbol), le pressing (tintorería), le brushing (secado de pelo), un smoking. Quebec: magasiner (ir de compras), clavarder (chatear), la fin de semaine.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["un mail → un courriel", "un correo electrónico", "equivalente"],
        ["déposer une veste au pressing", "llevar una chaqueta a la tintorería", "falso anglicismo"],
        ["brainstorming → un remue-méninges", "lluvia de ideas", "equivalente"],
        ["un meeting → une réunion · réunion", "una reunión", "equivalente"],
        ["un hashtag → un mot-dièse · dièse", "una etiqueta", "equivalente"],
        ["newsletter = infolettre · deadline = date limite · feedback = retour · challenge = défi", "boletín · fecha límite · comentarios · reto", "equivalentes"],
        ["le mail · le meeting · le feedback · le challenge", "correo · reunión · comentarios · reto (en inglés)", "Anglicismo"],
        ["le courriel · la réunion · le retour · le défi", "correo · reunión · comentarios · reto (en francés)", "Equivalente francés"],
        ["Madame, je vous confirme par courriel notre rendez-vous de demain. · courriel", "Señora, le confirmo por correo nuestra cita de mañana.", "formal"],
        ["Je vous envoie un courriel", "Le envío un correo", "formal"],
        ["Merci de m'envoyer votre retour par courriel avant la date limite.", "Le agradezco que me envíe sus comentarios por correo antes de la fecha límite.", "formal"]
      ]],
      ej: [["Je vous envoie un courriel cet après-midi.", "Le envío un correo esta tarde."], ["La réunion est reportée à lundi.", "La reunión se aplaza al lunes."], ["Je fais du footing tous les matins.", "Salgo a correr todas las mañanas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["le footing = el fútbol", "le footing = correr / jogging", "Falso anglicismo."], ["Madame, je vous confirme par mail…", "Madame, je vous confirme par courriel…", "Registro formal."], ["le pressing = la presión", "le pressing = la tintorería", "Falso anglicismo."]] }
  ],
  ejemplos: [
    { sit: "Equivalente formal de «un mail»:", resp: "un courriel", pasos: ["courrier + électronique."], porque: "Formal." },
    { sit: "«déposer une veste au pressing»: le pressing es…", resp: "una tintorería", pasos: ["Falso anglicismo."], porque: "Falso." },
    { sit: "Equivalente de «brainstorming»:", resp: "un remue-méninges", pasos: ["remuer + méninges."], porque: "Formal." }
  ],
  comprueba: [
    { q: "«Le week-end» en francés de Francia…", o: ["es aceptado", "está prohibido"], a: 0, b: "gr", porque: "Uso general." },
    { q: "«Le défi» es el equivalente de…", o: ["challenge", "feedback"], a: 0, b: "gr", porque: "Reto." },
    { q: "«Clavarder» (Quebec) significa…", o: ["chatear", "clavar"], a: 0, b: "gr", porque: "clavier + bavarder." }
  ],
  practica: [
    { fase: "guiada", c: ["b3an-equiv"], k: "sort", ask: "¿Anglicismo o equivalente francés?", q: "Clasifica.", cats: ["Anglicismo", "Equivalente francés"], items: [["le mail", 0], ["le meeting", 0], ["le feedback", 0], ["le challenge", 0], ["le courriel", 1], ["la réunion", 1], ["le retour", 1], ["le défi", 1]], pista: "¿Suena inglés?", why: "Equivalentes." },
    { fase: "guiada", c: ["b3an-equiv"], k: "choice", ask: "Equivalente formal de «un mail»:", q: "Elige.", o: ["un courriel", "un courrier"], a: 0, pista: "Electrónico.", why: "<b>courriel</b>." },
    { fase: "guiada", c: ["b3an-faux"], k: "choice", es: true, ask: "«déposer une veste au pressing»: le pressing es…", q: "Elige.", o: ["una tintorería", "un gimnasio"], a: 0, pista: "Ropa.", why: "Tintorería." },
    { fase: "indep", c: ["b3an-equiv"], k: "choice", ask: "Equivalente de «brainstorming»:", q: "Elige.", o: ["un remue-méninges", "un orage cérébral"], a: 0, why: "<b>remue-méninges</b>." },
    { fase: "indep", c: ["b3an-equiv"], k: "fill", ask: "un meeting → une …", q: "un meeting → une ___", acc: ["réunion"], why: "<b>réunion</b>." },
    { fase: "indep", c: ["b3an-equiv"], k: "fill", ask: "un hashtag → un mot-…", q: "un hashtag → un mot-___", acc: ["dièse"], why: "<b>mot-dièse</b>." },
    { fase: "aplica", c: ["b3an-equiv"], k: "match", ask: "Une cada anglicismo con su equivalente.", q: "Anglicismo → francés", pairs: [["newsletter", "infolettre"], ["deadline", "date limite"], ["feedback", "retour"], ["challenge", "défi"]], why: "Equivalentes." },
    { fase: "aplica", c: ["b3an-equiv"], k: "spot", ask: "Encuentra el anglicismo (registro formal).", s: "Madame , je vous confirme par [mail] notre rendez-vous de demain .", fix: "courriel", why: "<b>courriel</b>." },
    { fase: "aplica", c: ["b3an-faux"], k: "choice", es: true, ask: "«Le week-end» en francés de Francia…", q: "Elige.", o: ["es aceptado", "está prohibido"], a: 0, why: "Aceptado." },
    { fase: "dominio", c: ["b3an-equiv"], k: "order", ask: "Ordena: «Le envío un correo».", tokens: ["Je vous", "envoie", "un courriel"], why: "<b>Je vous envoie un courriel</b>" },
    { fase: "dominio", c: ["b3an-equiv"], k: "choice", es: true, ask: "«Le défi» es el equivalente de…", q: "Elige.", o: ["challenge", "feedback"], a: 0, why: "Reto." },
    { fase: "dominio", c: ["b3an-equiv", "b3an-faux"], k: "listen", say: "Merci de m'envoyer votre retour par courriel avant la date limite.", acc: ["Merci de m'envoyer votre retour par courriel avant la date limite."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Merci de m'envoyer votre retour par courriel avant la date limite.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Québec", "France"], previo: [] }
};

/* ── 62. Les expressions latines : a priori, grosso modo, in extremis ── */
E["b21-latinismes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les expressions latines : a priori, grosso modo, in extremis",
  objetivo: {
    que: "Vas a usar las expresiones latinas del francés culto: a priori, a posteriori, grosso modo, in extremis, sine qua non…",
    corto: "A priori, le projet semble réalisable. · La motivation est une condition sine qua non.",
    podras: ["Usar las de tiempo: a priori (en principio), a posteriori (después), in extremis (en el último momento).", "Usar las de lógica y aproximación: grosso modo (a grandes rasgos), sine qua non (imprescindible), de facto, vice versa, ad hoc.", "Usar otras frecuentes: mea culpa, statu quo, et cetera."],
    iconos: ["ic2/pergamino", "ic2/libros", "ic2/corona"],
    previos: ["El ensayo (lección 29) y el registro culto (B1.2, lección 60)."],
    capacidad: "Ahora le das un toque culto a tus textos formales."
  },
  requiere: R("b2rs-mots", "b2rs-syntaxe", "b3es-formules"), recupera: ["b2rs-mots"],
  conceptos: {
    "b3la-temps": { n: "tiempo: a priori (en principio), a posteriori (después, a la luz de los hechos), in extremis (en el último momento), ex nihilo (desde la nada); aproximación: grosso modo (a grandes rasgos), et cetera", b: "gr" },
    "b3la-logique": { n: "lógica y otros: sine qua non (imprescindible), de facto (de hecho), vice versa (al revés), ad hoc (específico para eso), mea culpa (reconocer la culpa: faire son mea culpa), statu quo (la situación actual)", b: "gr" }
  },
  video: {
    titulo: "Latín en francés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "a priori", seg: [
        { es: "Hola. Un poco de latín para sonar culto." } ] },
      { v: "frase", filas: [
          { nota: "en principio", p: 1, partes: [["A priori, le projet semble réalisable.", "-", 1]] },
          { nota: "último momento", p: 2, partes: [["Il a réussi son train in extremis.", "-", 2]] },
          { nota: "imprescindible", p: 3, partes: [["La motivation est une condition sine qua non.", "-", 3]] } ], seg: [
        { fr: "A priori, le projet semble réalisable.", p: 1 }, { fr: "Il a réussi son train in extremis.", p: 2 }, { fr: "La motivation est une condition sine qua non.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Grosso modo, voici le plan.»", o: ["a grandes rasgos", "con mucha gordura"], a: 0, es: true,
        bien: "¡Sí! Aproximación.", mal: "Grosso modo = a grandes rasgos.",
        seg: [ { es: "Pausa. Grosso modo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["a priori", "a posteriori", "in extremis", "grosso modo", "sine qua non", "mea culpa"], seg: [
        { es: "Tiempo, aproximación y lógica.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El último tren", img: "bg-noche", yo: "camila",
    escena: "Camila y Hugo vuelven de Marsella por la noche.",
    pj: PJ,
    lineas: [
      ["hugo", "Ouf ! Nous avons attrapé le dernier train in extremis, à 23 h 59 !", "¡Uf! ¡Cogimos el último tren en el último momento, a las 23:59!"],
      ["camila", "C'est ma faute, je fais mon mea culpa : j'ai oublié l'heure.", "Es culpa mía, reconozco mi error: olvidé la hora."],
      ["hugo", "Pas grave. Grosso modo, le voyage s'est bien passé. Et pour le projet de lundi ?", "No pasa nada. A grandes rasgos, el viaje salió bien. ¿Y el proyecto del lunes?"],
      ["camila", "A priori, rien ne s'oppose à ce projet, mais nous verrons a posteriori. La motivation de l'équipe est une condition sine qua non.", "En principio, nada se opone a este proyecto, pero ya veremos después. La motivación del equipo es una condición imprescindible."]
    ],
    fijate: "Fíjate: in extremis (en el último momento), mea culpa, grosso modo (a grandes rasgos), a priori (en principio), a posteriori (después), sine qua non (imprescindible)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las expresiones latinas",
      idea: "Tiempo: a priori (en principio, antes de comprobar), a posteriori (después, a la luz de los hechos), in extremis (en el último momento; no «extremus»), ex nihilo (desde la nada). Aproximación: grosso modo (a grandes rasgos; nada que ver con «gordura»), et cetera (etc.). Lógica: sine qua non (condición imprescindible), de facto (de hecho), vice versa (al revés), ad hoc (creado para eso). Otros: mea culpa (faire son mea culpa: reconocer la culpa), statu quo (la situación actual), curriculum vitae, référendum. Van sin tilde en francés moderno: a priori.",
      intro: "Toca cada expresión.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Il a réussi in extremis.", "Lo consiguió en el último momento.", "tiempo"],
        ["Grosso modo, voici le plan. · Grosso modo, je suis d'accord", "A grandes rasgos, este es el plan. · A grandes rasgos, estoy de acuerdo", "aproximación"],
        ["une condition sine qua non", "una condición imprescindible", "lógica"],
        ["A priori, tout va bien, mais vérifions. · priori", "En principio, todo va bien, pero comprobemos.", "tiempo"],
        ["Il a fait son mea culpa devant l'équipe. · culpa", "Reconoció su culpa ante el equipo.", "otros"],
        ["a posteriori · de facto · vice versa · statu quo", "después · de hecho · al revés · la situación actual", "expresiones"],
        ["a priori · a posteriori · in extremis · ex nihilo (desde la nada, origen)", "en principio · después · en el último momento · desde la nada", "Tiempo"],
        ["sine qua non · de facto · ad hoc · vice versa", "imprescindible · de hecho · específico · al revés", "Lógica / otros"],
        ["Nous avons attrapé le dernier train in extremis, à 23 h 59. · extremis", "Cogimos el último tren en el último momento, a las 23:59.", "tiempo"],
        ["A priori, rien ne s'oppose à ce projet, mais nous verrons a posteriori.", "En principio, nada se opone a este proyecto, pero ya veremos después.", "tiempo"]
      ]],
      ej: [["A priori, le projet semble réalisable.", "En principio, el proyecto parece viable."], ["Il a réussi son train in extremis.", "Cogió el tren en el último momento."], ["La motivation est une condition sine qua non.", "La motivación es una condición indispensable."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["grosso modo = con mucha gordura", "grosso modo = a grandes rasgos", "Latinismo de aproximación."], ["in extremus", "in extremis", "Ortografía latina."], ["a priori = al final", "a priori = en principio; a posteriori = después", "Antes y después."]] }
  ],
  ejemplos: [
    { sit: "«Il a réussi in extremis.» Lo consiguió…", resp: "en el último momento", pasos: ["in extremis."], porque: "Tiempo." },
    { sit: "«Grosso modo, voici le plan.»", resp: "a grandes rasgos", pasos: ["Aproximación."], porque: "Aproximación." },
    { sit: "«une condition sine qua non» es…", resp: "imprescindible", pasos: ["Sin la cual no."], porque: "Lógica." }
  ],
  comprueba: [
    { q: "«A posteriori» significa…", o: ["después", "antes"], a: 0, b: "gr", porque: "Posterior." },
    { q: "«Vice versa» significa…", o: ["al revés", "cada vez"], a: 0, b: "gr", porque: "Inverso." },
    { q: "«Le statu quo» es…", o: ["la situación actual", "un estatuto"], a: 0, b: "gr", porque: "Estado actual." }
  ],
  practica: [
    { fase: "guiada", c: ["b3la-temps", "b3la-logique"], k: "sort", ask: "¿Tiempo o lógica / otros?", q: "Clasifica.", cats: ["Tiempo", "Lógica / otros"], items: [["a priori", 0], ["a posteriori", 0], ["in extremis", 0], ["ex nihilo (desde la nada, origen)", 0], ["sine qua non", 1], ["de facto", 1], ["ad hoc", 1], ["vice versa", 1]], pista: "¿Cuándo?", why: "Tipos." },
    { fase: "guiada", c: ["b3la-temps"], k: "choice", es: true, ask: "«Il a réussi in extremis.» Lo consiguió…", q: "Elige.", o: ["en el último momento", "con mucho esfuerzo"], a: 0, pista: "Tiempo.", why: "In extremis." },
    { fase: "guiada", c: ["b3la-temps"], k: "choice", es: true, ask: "«Grosso modo, voici le plan.»", q: "Elige.", o: ["a grandes rasgos", "con mucha gordura"], a: 0, pista: "Aproximación.", why: "Grosso modo." },
    { fase: "indep", c: ["b3la-logique"], k: "choice", es: true, ask: "«une condition sine qua non» es…", q: "Elige.", o: ["imprescindible", "opcional"], a: 0, why: "Sine qua non." },
    { fase: "indep", c: ["b3la-temps"], k: "fill", ask: "«En principio» (A …)", q: "A ___ , tout va bien, mais vérifions.", acc: ["priori"], why: "<b>priori</b>." },
    { fase: "indep", c: ["b3la-logique"], k: "fill", ask: "«reconoció su culpa» (son mea …)", q: "Il a fait son mea ___ devant l'équipe.", acc: ["culpa"], why: "<b>culpa</b>." },
    { fase: "aplica", c: ["b3la-temps", "b3la-logique"], k: "match", ask: "Une cada expresión con su sentido.", q: "Latín → español", pairs: [["a posteriori", "después"], ["de facto", "de hecho"], ["vice versa", "al revés"], ["statu quo", "la situación actual"]], why: "Latinismos." },
    { fase: "aplica", c: ["b3la-temps"], k: "spot", ask: "Encuentra el error.", s: "Nous avons attrapé le dernier train in [extremus] , à 23 h 59 .", fix: "extremis", why: "<b>extremis</b>." },
    { fase: "aplica", c: ["b3la-temps"], k: "choice", es: true, ask: "«A posteriori» significa…", q: "Elige.", o: ["después", "antes"], a: 0, why: "Después." },
    { fase: "dominio", c: ["b3la-temps"], k: "order", ask: "Ordena: «A grandes rasgos, estoy de acuerdo».", tokens: ["Grosso modo,", "je suis", "d'accord"], why: "<b>Grosso modo, je suis d'accord</b>" },
    { fase: "dominio", c: ["b3la-logique"], k: "choice", es: true, ask: "«Vice versa» significa…", q: "Elige.", o: ["al revés", "cada vez"], a: 0, why: "Al revés." },
    { fase: "dominio", c: ["b3la-temps", "b3la-logique"], k: "listen", say: "A priori, rien ne s'oppose à ce projet, mais nous verrons a posteriori.", acc: ["A priori, rien ne s'oppose à ce projet, mais nous verrons a posteriori.", "À priori, rien ne s'oppose à ce projet, mais nous verrons à posteriori."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>A priori, rien ne s'oppose à ce projet, mais nous verrons a posteriori.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 63. Nuancer les émotions : agacé, désemparé, bouleversé ── */
E["b21-emotions-nuancees"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Nuancer les émotions : agacé, désemparé, bouleversé",
  objetivo: {
    que: "Vas a matizar las emociones por grados: del simple enfado a la furia, de la inquietud al pánico, de la alegría a la euforia.",
    corto: "J'étais bouleversé par cette nouvelle. · Elle semblait désemparée face à la situation.",
    podras: ["Graduar el enfado (agacé < énervé < exaspéré < furieux) y el miedo (inquiet < angoissé < terrifié).", "Graduar la alegría (content < ravi < comblé < euphorique) y la tristeza (triste < abattu < effondré).", "Usar estados precisos: désemparé (perdido), bouleversé (conmocionado), soulagé (aliviado), ému (conmovido), las (harto)."],
    iconos: ["ic2/corazon", "ic2/rayo", "ic2/flor"],
    previos: ["La salud mental (lección 51), los sentimientos (B1.1, lección 44) y los adjetivos con matices (B1.2, lección 58)."],
    capacidad: "Ahora describes lo que sientes con la palabra exacta."
  },
  requiere: R("b1se-voc", "b1se-struct", "b2an-echelle", "b3sm-troubles"), recupera: ["b1se-voc"],
  conceptos: {
    "b3em-echelle": { n: "escalas: enfado (agacé, irrité, énervé, exaspéré, furieux), miedo (inquiet, anxieux, angoissé, effrayé, terrifié), alegría (content, ravi, enchanté, comblé, euphorique), tristeza (triste, morose, abattu, désespéré, effondré)", b: "gr" },
    "b3em-etats": { n: "estados: désemparé (perdido, sin saber qué hacer), bouleversé (conmocionado), soulagé (aliviado), ému (conmovido), las (harto, cansado), nostalgique, fou de joie, comblé (plenamente feliz)", b: "gr" }
  },
  video: {
    titulo: "Emociones con matices", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/corazon", grande: "bouleversé", seg: [
        { es: "Hola. No todo es «contento» o «triste»." } ] },
      { v: "frase", filas: [
          { nota: "conmoción", p: 1, partes: [["J'étais bouleversé par cette nouvelle.", "-", 1]] },
          { nota: "perdida", p: 2, partes: [["Elle semblait désemparée face à la situation.", "-", 2]] },
          { nota: "harto", p: 3, partes: [["Je suis las de ces disputes.", "-", 3]] } ], seg: [
        { fr: "J'étais bouleversé par cette nouvelle.", p: 1 }, { fr: "Elle semblait désemparée face à la situation.", p: 2 }, { fr: "Je suis las de ces disputes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Il était désemparé.» Estaba…", o: ["perdido, sin saber qué hacer", "desempleado"], a: 0, es: true,
        bien: "¡Sí! Desamparado.", mal: "Désemparé = perdido.",
        seg: [ { es: "Pausa. Désemparé." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["agacé", "furieux", "angoissé", "comblé", "effondré", "soulagé"], seg: [
        { es: "Escalas y estados.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La despedida de Lyon", img: "bg-noche", yo: "camila",
    escena: "Al final del curso, Camila le cuenta a Hugo cómo se siente.",
    pj: PJ,
    lineas: [
      ["camila", "Après l'examen, je me suis sentie soulagée. Mais quand Madame Sofia a fait son discours, j'ai été très émue : j'ai pleuré.", "Después del examen me sentí aliviada. Pero cuando Madame Sofia dio su discurso me conmoví mucho: lloré."],
      ["hugo", "Moi aussi. Et quand j'ai appris que j'avais réussi, j'étais fou de joie ! Je suis comblé.", "Yo también. ¡Y cuando supe que había aprobado me volví loco de alegría! Estoy plenamente feliz."],
      ["camila", "Au début, en arrivant à Lyon, j'étais désemparée, un peu angoissée. Parfois agacée, jamais furieuse !", "Al principio, al llegar a Lyon, estaba perdida, un poco angustiada. A veces molesta, ¡nunca furiosa!"],
      ["hugo", "Et maintenant ? — J'étais à la fois soulagée et un peu nostalgique en quittant la ville.", "¿Y ahora? — Estaba a la vez aliviada y un poco nostálgica al dejar la ciudad."]
    ],
    fijate: "Fíjate: soulagée (aliviada), émue (conmovida), fou de joie, comblé, désemparée (perdida), angoissée, agacée (enfado suave), furieuse (enfado fuerte), nostalgique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Escalas de emociones",
      idea: "Enfado: agacé (molesto) < irrité < énervé < exaspéré < furieux. Miedo: inquiet < anxieux < angoissé < effrayé < terrifié. Alegría: content < heureux < ravi < enchanté < comblé (plenamente feliz) < euphorique; fou de joie (loco de alegría). Tristeza: triste < morose < abattu < désespéré < effondré (hundido; nunca «effondré de joie»). Estados: désemparé (perdido, sin saber qué hacer), bouleversé (conmocionado), soulagé (aliviado), ému (conmovido, emoción profunda), las (harto, cansado: las de ces disputes), nostalgique.",
      intro: "Toca cada palabra.",
      tabla: [["Francés", "Español", "Emoción"], [
        ["furieux", "furioso", "Enfado"],
        ["Il était désemparé.", "Estaba perdido, sin saber qué hacer.", "estado"],
        ["Je suis comblé.", "Estoy plenamente feliz.", "alegría"],
        ["J'ai été très ému par son discours : j'ai pleuré. · ému · Elle était très émue", "Su discurso me conmovió mucho: lloré. · Estaba muy conmovida", "estado"],
        ["Après l'examen, je me suis senti soulagé. · soulagé", "Después del examen me sentí aliviado.", "estado"],
        ["exaspéré · angoissé · enchanté · abattu", "exasperado · angustiado · encantado · abatido", "escalas"],
        ["agacé · inquiet · content · triste", "molesto · inquieto · contento · triste", "Suave"],
        ["furieux · terrifié · euphorique · effondré", "furioso · aterrado · eufórico · hundido", "Fuerte"],
        ["Quand il a appris la bonne nouvelle, il était fou de joie. · fou", "Cuando supo la buena noticia, se volvió loco de alegría.", "alegría"],
        ["J'étais à la fois soulagé et un peu nostalgique en quittant la ville.", "Estaba a la vez aliviado y un poco nostálgico al dejar la ciudad.", "estados"]
      ]],
      ej: [["J'étais bouleversé par cette nouvelle.", "Estaba conmocionado por esta noticia."], ["Elle semblait désemparée face à la situation.", "Parecía desamparada ante la situación."], ["Je suis las de ces disputes.", "Estoy cansado de estas peleas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["ému = emocionado (alegre, ilusionado)", "ému = conmovido (emoción profunda)", "ému = conmovido."], ["il était effondré de joie", "il était fou de joie", "Effondré es tristeza."], ["désemparé = desempleado", "désemparé = perdido, desamparado", "Falso amigo."]] }
  ],
  ejemplos: [
    { sit: "Un enfado fuerte:", resp: "furieux", pasos: ["El grado más alto."], porque: "Escala." },
    { sit: "«Il était désemparé.» Estaba…", resp: "perdido, sin saber qué hacer", pasos: ["désemparé."], porque: "Estado." },
    { sit: "«Je suis comblé.» Estoy…", resp: "plenamente feliz", pasos: ["comblé."], porque: "Alegría." }
  ],
  comprueba: [
    { q: "«Agacé» es un enfado…", o: ["suave", "fuerte"], a: 0, b: "gr", porque: "Molesto." },
    { q: "«Soulagé» significa…", o: ["aliviado", "solo"], a: 0, b: "gr", porque: "Alivio." },
    { q: "«Effondré» expresa…", o: ["una tristeza profunda", "una alegría enorme"], a: 0, b: "gr", porque: "Hundido." }
  ],
  practica: [
    { fase: "guiada", c: ["b3em-echelle"], k: "sort", ask: "¿Emoción suave o fuerte?", q: "Clasifica.", cats: ["Suave", "Fuerte"], items: [["agacé", 0], ["inquiet", 0], ["content", 0], ["triste", 0], ["furieux", 1], ["terrifié", 1], ["euphorique", 1], ["effondré", 1]], pista: "¿Intensidad?", why: "Escalas." },
    { fase: "guiada", c: ["b3em-echelle"], k: "choice", ask: "Un enfado fuerte:", q: "Elige.", o: ["furieux", "agacé"], a: 0, pista: "Lo más alto.", why: "<b>furieux</b>." },
    { fase: "guiada", c: ["b3em-etats"], k: "choice", es: true, ask: "«Il était désemparé.» Estaba…", q: "Elige.", o: ["perdido, sin saber qué hacer", "desempleado"], a: 0, pista: "Falso amigo.", why: "Perdido." },
    { fase: "indep", c: ["b3em-etats"], k: "choice", es: true, ask: "«Je suis comblé.» Estoy…", q: "Elige.", o: ["plenamente feliz", "lleno de comida"], a: 0, why: "Comblé." },
    { fase: "indep", c: ["b3em-etats"], k: "fill", ask: "«conmovido»", q: "J'ai été très ___ par son discours : j'ai pleuré.", acc: ["ému"], why: "<b>ému</b>." },
    { fase: "indep", c: ["b3em-etats"], k: "fill", ask: "«aliviado»", q: "Après l'examen, je me suis senti ___ .", acc: ["soulagé"], why: "<b>soulagé</b>." },
    { fase: "aplica", c: ["b3em-echelle"], k: "match", ask: "Une cada adjetivo con su emoción.", q: "Adjetivo → emoción", pairs: [["exaspéré", "enfado"], ["angoissé", "miedo"], ["enchanté", "alegría"], ["abattu", "tristeza"]], why: "Familias." },
    { fase: "aplica", c: ["b3em-etats"], k: "spot", ask: "Encuentra el error.", s: "Quand il a appris la bonne nouvelle , il était [effondré] de joie .", fix: "fou", why: "<b>fou</b> de joie." },
    { fase: "aplica", c: ["b3em-echelle"], k: "choice", es: true, ask: "«Agacé» es un enfado…", q: "Elige.", o: ["suave", "fuerte"], a: 0, why: "Suave." },
    { fase: "dominio", c: ["b3em-etats"], k: "order", ask: "Ordena: «Estaba muy conmovida».", tokens: ["Elle était", "très", "émue"], why: "<b>Elle était très émue</b>" },
    { fase: "dominio", c: ["b3em-etats"], k: "choice", es: true, ask: "«Soulagé» significa…", q: "Elige.", o: ["aliviado", "solo"], a: 0, why: "Aliviado." },
    { fase: "dominio", c: ["b3em-echelle", "b3em-etats"], k: "listen", say: "J'étais à la fois soulagé et un peu nostalgique en quittant la ville.", acc: ["J'étais à la fois soulagé et un peu nostalgique en quittant la ville."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>J'étais à la fois soulagé et un peu nostalgique en quittant la ville.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Lyon"], previo: [] }
};

/* ── B2.1·9 Estilo · 64. Les euphémismes : adoucir la réalité ── */
E["b21-euphemismes"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Les euphémismes : adoucir la réalité",
  objetivo: {
    que: "Vas a reconocer y usar los eufemismos: las palabras que suavizan una realidad desagradable en la prensa, la política y la administración.",
    corto: "Il nous a quittés la semaine dernière. · L'entreprise va se séparer de 200 salariés.",
    podras: ["Suavizar la muerte: disparaître, nous quitter, s'éteindre, décéder.", "Suavizar el trabajo y la economía: un demandeur d'emploi, un plan social, se séparer de, une croissance négative, un ajustement tarifaire.", "Hablar con respeto de la sociedad: une personne âgée, un senior, une personne en situation de handicap, les quartiers sensibles."],
    iconos: ["ic2/flor", "ic2/pergamino", "ic2/corazon"],
    previos: ["Lo implícito y la ironía (lección 36) y atenuar (B1.2, lección 40)."],
    capacidad: "Ahora lees entre líneas el lenguaje de la política y de las empresas."
  },
  requiere: R("b2at-cond", "b2at-limiter", "b3mo-echelle", "b3im-ironie"), recupera: ["b2at-limiter"],
  conceptos: {
    "b3eu2-mort": { n: "eufemismos de la muerte: disparaître, nous quitter (Il nous a quittés), s'éteindre (murió en paz), décéder; de la sociedad: une personne âgée, un senior (persona mayor), une personne en situation de handicap, un quartier sensible (barrio conflictivo)", b: "gr" },
    "b3eu2-travail": { n: "trabajo y economía: un demandeur d'emploi (un parado), un plan social (despidos colectivos), se séparer de salariés (despedir), une croissance négative (recesión), un ajustement tarifaire (subida de precios)", b: "gr" }
  },
  video: {
    titulo: "Suavizar la realidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "un plan social", seg: [
        { es: "Hola. Palabras amables para realidades duras." } ] },
      { v: "frase", filas: [
          { nota: "muerte", p: 1, partes: [["Il nous a quittés la semaine dernière.", "-", 1]] },
          { nota: "despidos", p: 2, partes: [["L'entreprise va se séparer de 200 salariés.", "-", 2]] },
          { nota: "recesión", p: 3, partes: [["On parle de croissance négative.", "-", 3]] } ], seg: [
        { fr: "Il nous a quittés la semaine dernière.", p: 1 }, { fr: "L'entreprise va se séparer de 200 salariés.", p: 2 }, { fr: "On parle de croissance négative.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«L'usine annonce un plan social.» Anuncia…", o: ["despidos colectivos", "un plan de fiestas"], a: 0, es: true,
        bien: "¡Sí! Eufemismo empresarial.", mal: "Plan social = despidos.",
        seg: [ { es: "Pausa. Despidos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["s'éteindre", "nous quitter", "un demandeur d'emploi", "un plan social", "se séparer de"], seg: [
        { es: "Muerte, trabajo, sociedad y economía.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El periódico de la mañana", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo leen el periódico en el café.",
    pj: PJ,
    lineas: [
      ["hugo", "« Le célèbre chanteur s'est éteint hier à l'âge de quatre-vingt-dix ans. » Il nous a quittés…", "«El célebre cantante falleció ayer a los noventa años.» Nos dejó…"],
      ["camila", "Et ici : « L'usine annonce un plan social. L'entreprise se sépare de cinquante salariés. » Ça veut dire des licenciements ?", "Y aquí: «La fábrica anuncia un plan social. La empresa prescinde de cincuenta empleados.» ¿Quiere decir despidos?"],
      ["hugo", "Exactement. Ils deviennent des demandeurs d'emploi. Et le gouvernement parle de « croissance négative » : c'est une récession.", "Exacto. Se convierten en demandantes de empleo. Y el gobierno habla de «crecimiento negativo»: es una recesión."],
      ["camila", "Et « un ajustement tarifaire », c'est une hausse des prix ! Les euphémismes, c'est pour ne pas choquer.", "¡Y «un ajuste tarifario» es una subida de precios! Los eufemismos son para no escandalizar."]
    ],
    fijate: "Fíjate: s'est éteint, nous a quittés (morir); un plan social, se sépare de (despedir); des demandeurs d'emploi (parados); croissance négative (recesión); un ajustement tarifaire (subida de precios)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Directo y eufemismo",
      idea: "Muerte: mourir → disparaître, nous quitter (Il nous a quittés), s'éteindre (paisiblement), décéder. Trabajo: un chômeur → un demandeur d'emploi; licencier → se séparer de; des licenciements → un plan social (no es un plan de fiestas) / un plan de sauvegarde de l'emploi. Sociedad: un vieux → une personne âgée, un senior; une personne en situation de handicap; un quartier sensible (barrio conflictivo). Economía: une récession → une croissance négative; une hausse des prix → un ajustement tarifaire. Son frecuentes en política, administración y prensa.",
      intro: "Toca cada pareja.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["Il s'est éteint paisiblement. · s'éteindre · nous quitter", "Murió en paz. · apagarse, fallecer · dejarnos", "muerte"],
        ["L'usine annonce un plan social.", "La fábrica anuncia despidos colectivos.", "trabajo"],
        ["un chômeur → un demandeur d'emploi", "un parado → un demandante de empleo", "trabajo"],
        ["Une croissance négative = une récession. · négative", "Un crecimiento negativo = una recesión.", "economía"],
        ["une personne en situation de handicap · handicap", "una persona con discapacidad", "sociedad"],
        ["se séparer de salariés · un ajustement tarifaire · un quartier sensible · un senior", "despedir · una subida de precios · un barrio conflictivo · una persona mayor", "eufemismos"],
        ["mourir · licencier · un chômeur · un vieux", "morir · despedir · un parado · un viejo", "Directo"],
        ["disparaître · se séparer de · un demandeur d'emploi · une personne âgée", "desaparecer · prescindir de · un demandante de empleo · una persona mayor", "Eufemismo"],
        ["Pour ne pas choquer, le journal écrit que l'artiste nous a quittés. · quittés", "Para no escandalizar, el periódico escribe que el artista nos dejó.", "muerte"],
        ["L'entreprise se sépare de cinquante salariés", "La empresa prescinde de cincuenta empleados", "trabajo"],
        ["Le célèbre chanteur s'est éteint hier à l'âge de quatre-vingt-dix ans.", "El célebre cantante falleció ayer a los noventa años.", "muerte"]
      ]],
      ej: [["Il nous a quittés la semaine dernière.", "Nos dejó la semana pasada."], ["L'entreprise va se séparer de 200 salariés.", "La empresa va a prescindir de 200 empleados."], ["On parle de croissance négative.", "Se habla de crecimiento negativo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un plan social = un plan de fiestas", "un plan social = despidos colectivos", "Eufemismo empresarial."], ["L'artiste nous a tués.", "L'artiste nous a quittés.", "Nous quitter = morir."], ["un vieux (en un texto formal)", "une personne âgée", "Registro respetuoso."]] }
  ],
  ejemplos: [
    { sit: "«Il s'est éteint paisiblement.» ¿Qué pasó?", resp: "murió en paz", pasos: ["s'éteindre."], porque: "Muerte." },
    { sit: "«L'usine annonce un plan social.» Anuncia…", resp: "despidos colectivos", pasos: ["Eufemismo."], porque: "Trabajo." },
    { sit: "Eufemismo de «un chômeur»:", resp: "un demandeur d'emploi", pasos: ["Busca empleo."], porque: "Trabajo." }
  ],
  comprueba: [
    { q: "Un eufemismo sirve para…", o: ["suavizar una realidad desagradable", "exagerar"], a: 0, b: "gr", porque: "Suavizar." },
    { q: "«Un ajustement tarifaire» es…", o: ["una subida de precios", "una rebaja"], a: 0, b: "gr", porque: "Eufemismo." },
    { q: "«Se séparer de salariés» es…", o: ["despedirlos", "contratarlos"], a: 0, b: "gr", porque: "Eufemismo." }
  ],
  practica: [
    { fase: "guiada", c: ["b3eu2-mort", "b3eu2-travail"], k: "sort", ask: "¿Palabra directa o eufemismo?", q: "Clasifica.", cats: ["Directo", "Eufemismo"], items: [["mourir", 0], ["licencier", 0], ["un chômeur", 0], ["un vieux", 0], ["disparaître", 1], ["se séparer de", 1], ["un demandeur d'emploi", 1], ["une personne âgée", 1]], pista: "¿Suaviza?", why: "Eufemismos." },
    { fase: "guiada", c: ["b3eu2-mort"], k: "choice", es: true, ask: "«Il s'est éteint paisiblement.» ¿Qué pasó?", q: "Elige.", o: ["murió en paz", "apagó la luz"], a: 0, pista: "Eufemismo.", why: "Murió." },
    { fase: "guiada", c: ["b3eu2-travail"], k: "choice", es: true, ask: "«L'usine annonce un plan social.» Anuncia…", q: "Elige.", o: ["despidos colectivos", "un plan de fiestas"], a: 0, pista: "Empresa.", why: "Despidos." },
    { fase: "indep", c: ["b3eu2-travail"], k: "choice", ask: "Eufemismo de «un chômeur»:", q: "Elige.", o: ["un demandeur d'emploi", "un travailleur"], a: 0, why: "<b>demandeur d'emploi</b>." },
    { fase: "indep", c: ["b3eu2-travail"], k: "fill", ask: "Une croissance … = une récession.", q: "Une croissance ___ = une récession.", acc: ["négative"], why: "<b>négative</b>." },
    { fase: "indep", c: ["b3eu2-mort"], k: "fill", ask: "«discapacidad»", q: "Une personne en situation de ___ .", acc: ["handicap"], why: "<b>handicap</b>." },
    { fase: "aplica", c: ["b3eu2-mort", "b3eu2-travail"], k: "match", ask: "Une cada eufemismo con su sentido.", q: "Eufemismo → sentido", pairs: [["se séparer de salariés", "despedir"], ["un ajustement tarifaire", "una subida de precios"], ["un quartier sensible", "un barrio conflictivo"], ["un senior", "una persona mayor"]], why: "Eufemismos." },
    { fase: "aplica", c: ["b3eu2-mort"], k: "spot", ask: "Encuentra el error.", s: "Pour ne pas choquer , le journal écrit que l'artiste nous a [tués] .", fix: "quittés", why: "<b>quittés</b>." },
    { fase: "aplica", c: ["b3eu2-travail"], k: "choice", es: true, ask: "«Un ajustement tarifaire» es…", q: "Elige.", o: ["una subida de precios", "una rebaja"], a: 0, why: "Subida." },
    { fase: "dominio", c: ["b3eu2-travail"], k: "order", ask: "Ordena: «La empresa prescinde de cincuenta empleados».", tokens: ["L'entreprise", "se sépare de", "cinquante salariés"], why: "<b>L'entreprise se sépare de cinquante salariés</b>" },
    { fase: "dominio", c: ["b3eu2-mort"], k: "choice", es: true, ask: "Un eufemismo sirve para…", q: "Elige.", o: ["suavizar una realidad desagradable", "exagerar"], a: 0, why: "Suavizar." },
    { fase: "dominio", c: ["b3eu2-mort", "b3eu2-travail"], k: "listen", say: "Le célèbre chanteur s'est éteint hier à l'âge de quatre-vingt-dix ans.", acc: ["Le célèbre chanteur s'est éteint hier à l'âge de quatre-vingt-dix ans.", "Le célèbre chanteur s'est éteint hier à l'âge de 90 ans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le célèbre chanteur s'est éteint hier à l'âge de quatre-vingt-dix ans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 65. Adverbes d'intensité : nettement, sensiblement, foncièrement ── */
E["b21-intensite"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Adverbes d'intensité : nettement, sensiblement, foncièrement",
  objetivo: {
    que: "Vas a dejar de repetir très y beaucoup: usarás adverbios de intensidad precisos, fuertes, medios o débiles.",
    corto: "Les résultats se sont nettement améliorés. · C'est un homme foncièrement honnête.",
    podras: ["Usar los fuertes: considérablement, nettement, largement, extrêmement, profondément.", "Usar los medios y débiles: sensiblement, relativement, légèrement, quelque peu, à peine.", "Usar foncièrement (en el fondo, profundamente) para el carácter y largement (de sobra)."],
    iconos: ["ic2/rayo", "ic2/estrella", "ic2/engranaje"],
    previos: ["Los adverbios de matiz (lección 24) y describir un gráfico (lección 38)."],
    capacidad: "Ahora matizas cifras y opiniones con el adverbio justo."
  },
  requiere: R("b3av-place", "b3av-sens", "b3gr-chiffres"), recupera: ["b3gr-chiffres"],
  conceptos: {
    "b3it-fort": { n: "fuertes: considérablement, nettement (claramente), largement (de sobra), extrêmement, profondément, particulièrement; foncièrement (en el fondo, para el carácter: foncièrement honnête)", b: "gr" },
    "b3it-faible": { n: "medios: sensiblement (notablemente), relativement, assez, plutôt; débiles: légèrement, quelque peu (algo), à peine, faiblement; nunca «très beaucoup»", b: "gr" }
  },
  video: {
    titulo: "Más allá de «très»", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "nettement", seg: [
        { es: "Hola. Hay vida más allá de «très»." } ] },
      { v: "frase", filas: [
          { nota: "claramente", p: 1, partes: [["Les résultats se sont nettement améliorés.", "-", 1]] },
          { nota: "en el fondo", p: 2, partes: [["C'est un homme foncièrement honnête.", "-", 2]] },
          { nota: "de sobra", p: 3, partes: [["Tu as largement le temps.", "-", 3]] } ], seg: [
        { fr: "Les résultats se sont nettement améliorés.", p: 1 }, { fr: "C'est un homme foncièrement honnête.", p: 2 }, { fr: "Tu as largement le temps.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Tu as largement le temps.» Tienes tiempo…", o: ["de sobra", "a lo ancho"], a: 0, es: true,
        bien: "¡Sí! De sobra.", mal: "Largement = de sobra.",
        seg: [ { es: "Pausa. Largement." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["considérablement", "nettement", "sensiblement", "légèrement", "quelque peu", "foncièrement"], seg: [
        { es: "Fuerte, medio y débil.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El informe del barrio", img: "bg-universidad", yo: "camila",
    escena: "Camila presenta un informe sobre la calidad del aire en clase.",
    pj: PJ,
    lineas: [
      ["camila", "La qualité de l'air s'est sensiblement améliorée depuis la fermeture de l'usine. Les maladies respiratoires ont nettement baissé.", "La calidad del aire ha mejorado notablemente desde el cierre de la fábrica. Las enfermedades respiratorias han bajado claramente."],
      ["sofia", "Et les prix des logements ? — Ils ont considérablement augmenté : plus 40 %.", "¿Y los precios de la vivienda? — Han subido considerablemente: un 40 % más."],
      ["camila", "Le chômage, lui, a légèrement baissé, de 2 % seulement. La situation reste quelque peu fragile.", "El desempleo ha bajado ligeramente, solo un 2 %. La situación sigue siendo algo frágil."],
      ["sofia", "Très bonne présentation, Camila. Tu es foncièrement rigoureuse. Et tu avais largement le temps !", "Muy buena presentación, Camila. Eres profundamente rigurosa. ¡Y tenías tiempo de sobra!"]
    ],
    fijate: "Fíjate: sensiblement (notablemente), nettement (claramente), considérablement (+40 %), légèrement (2 %), quelque peu (algo), foncièrement (en el fondo), largement (de sobra)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Adverbios por intensidad",
      idea: "Fuerte: considérablement (Les prix ont considérablement augmenté : +40 %), nettement (claramente), largement (de sobra: Tu as largement le temps), extrêmement, profondément. Medio: sensiblement (notablemente), relativement, assez, plutôt. Débil: légèrement (de 2 % seulement), quelque peu (algo), un tant soit peu, à peine, faiblement. Carácter: foncièrement = en el fondo, profundamente (foncièrement gentil, honnête). La intensidad debe coincidir con la cifra. No se combina très con beaucoup: «très beaucoup» es incorrecto.",
      intro: "Toca cada adverbio.",
      tabla: [["Francés", "Español", "Intensidad"], [
        ["Tu as largement le temps.", "Tienes tiempo de sobra.", "fuerte"],
        ["Il est foncièrement gentil.", "Es amable en el fondo, profundamente.", "carácter"],
        ["quelque peu", "algo, un poco", "Intensidad mínima"],
        ["Les prix ont considérablement augmenté : +40 %. · considérablement", "Los precios han subido considerablemente: +40 %.", "fuerte"],
        ["La situation s'est légèrement améliorée, de 2 % seulement. · légèrement", "La situación ha mejorado ligeramente, solo un 2 %.", "débil"],
        ["considérablement = fuerte · sensiblement = media · légèrement = débil · foncièrement = profunda (carácter)", "considerablemente · notablemente · ligeramente · profundamente", "escala"],
        ["nettement · largement · extrêmement · profondément", "claramente · de sobra · extremadamente · profundamente", "Fuerte"],
        ["légèrement · quelque peu · à peine · faiblement", "ligeramente · algo · apenas · débilmente", "Débil"],
        ["Le chômage a considérablement baissé : il a été divisé par deux ! · considérablement", "¡El desempleo ha bajado considerablemente: se ha dividido por dos!", "fuerte"],
        ["Les résultats se sont nettement améliorés", "Los resultados han mejorado claramente", "fuerte"],
        ["La qualité de l'air s'est sensiblement améliorée depuis la fermeture de l'usine.", "La calidad del aire ha mejorado notablemente desde el cierre de la fábrica.", "media"]
      ]],
      ej: [["Les résultats se sont nettement améliorés.", "Los resultados han mejorado claramente."], ["C'est un homme foncièrement honnête.", "Es un hombre profundamente honrado."], ["Tu as largement le temps.", "Tienes tiempo de sobra."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["très beaucoup", "beaucoup / vraiment beaucoup", "No se combina très con beaucoup."], ["Le chômage a légèrement baissé : il a été divisé par deux !", "Le chômage a considérablement baissé : il a été divisé par deux !", "La intensidad debe coincidir con la cifra."], ["largement = a lo ancho", "largement = de sobra, ampliamente", "Falso amigo."]] }
  ],
  ejemplos: [
    { sit: "«Tu as largement le temps.» Tienes tiempo…", resp: "de sobra", pasos: ["largement."], porque: "Fuerte." },
    { sit: "«Il est foncièrement gentil.» Es amable…", resp: "en el fondo, profundamente", pasos: ["foncièrement."], porque: "Carácter." },
    { sit: "Intensidad mínima:", resp: "quelque peu", pasos: ["Algo."], porque: "Débil." }
  ],
  comprueba: [
    { q: "«Nettement» es un adverbio…", o: ["fuerte", "débil"], a: 0, b: "gr", porque: "Claramente." },
    { q: "«Sensiblement» significa…", o: ["notablemente", "con sensibilidad"], a: 0, b: "gr", porque: "Falso amigo." },
    { q: "«Très beaucoup» es…", o: ["incorrecto", "correcto"], a: 0, b: "gr", porque: "No se combinan." }
  ],
  practica: [
    { fase: "guiada", c: ["b3it-fort", "b3it-faible"], k: "sort", ask: "¿Intensidad fuerte o débil?", q: "Clasifica.", cats: ["Fuerte", "Débil"], items: [["nettement", 0], ["largement", 0], ["extrêmement", 0], ["profondément", 0], ["légèrement", 1], ["quelque peu", 1], ["à peine", 1], ["faiblement", 1]], pista: "¿Mucho o poco?", why: "Intensidad." },
    { fase: "guiada", c: ["b3it-fort"], k: "choice", es: true, ask: "«Tu as largement le temps.» Tienes tiempo…", q: "Elige.", o: ["de sobra", "a lo ancho"], a: 0, pista: "Mucho.", why: "De sobra." },
    { fase: "guiada", c: ["b3it-fort"], k: "choice", es: true, ask: "«Il est foncièrement gentil.» Es amable…", q: "Elige.", o: ["en el fondo, profundamente", "a veces"], a: 0, pista: "Carácter.", why: "En el fondo." },
    { fase: "indep", c: ["b3it-faible"], k: "choice", ask: "Intensidad mínima:", q: "Elige.", o: ["quelque peu", "considérablement"], a: 0, why: "<b>quelque peu</b>." },
    { fase: "indep", c: ["b3it-fort"], k: "fill", ask: "«considerablemente» (+40 %)", q: "Les prix ont ___ augmenté : +40 %.", acc: ["considérablement"], why: "<b>considérablement</b>." },
    { fase: "indep", c: ["b3it-faible"], k: "fill", ask: "«ligeramente» (2 %)", q: "La situation s'est ___ améliorée, de 2 % seulement.", acc: ["légèrement"], why: "<b>légèrement</b>." },
    { fase: "aplica", c: ["b3it-fort", "b3it-faible"], k: "match", ask: "Une cada adverbio con su intensidad.", q: "Adverbio → intensidad", pairs: [["considérablement", "fuerte"], ["sensiblement", "media"], ["légèrement", "débil"], ["foncièrement", "profunda (carácter)"]], why: "Escala." },
    { fase: "aplica", c: ["b3it-fort"], k: "spot", ask: "Encuentra el error.", s: "Le chômage a [légèrement] baissé : il a été divisé par deux !", fix: "considérablement", why: "<b>considérablement</b>." },
    { fase: "aplica", c: ["b3it-faible"], k: "choice", es: true, ask: "«Sensiblement» significa…", q: "Elige.", o: ["notablemente", "con sensibilidad"], a: 0, why: "Notablemente." },
    { fase: "dominio", c: ["b3it-fort"], k: "order", ask: "Ordena: «Los resultados han mejorado claramente».", tokens: ["Les résultats", "se sont nettement", "améliorés"], why: "<b>Les résultats se sont nettement améliorés</b>" },
    { fase: "dominio", c: ["b3it-fort"], k: "choice", es: true, ask: "«Nettement» es un adverbio…", q: "Elige.", o: ["fuerte", "débil"], a: 0, why: "Fuerte." },
    { fase: "dominio", c: ["b3it-fort", "b3it-faible"], k: "listen", say: "La qualité de l'air s'est sensiblement améliorée depuis la fermeture de l'usine.", acc: ["La qualité de l'air s'est sensiblement améliorée depuis la fermeture de l'usine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La qualité de l'air s'est sensiblement améliorée depuis la fermeture de l'usine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 66. Verbes imagés : grimper, flamber, chuter, s'envoler ── */
E["b21-verbes-figures"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Verbes imagés : grimper, flamber, chuter, s'envoler",
  objetivo: {
    que: "Vas a describir subidas, bajadas y estancamientos con los verbos con imagen que usa la prensa.",
    corto: "Les prix de l'énergie ont flambé cet hiver. · Les négociations piétinent.",
    podras: ["Describir subidas: grimper, flamber, s'envoler, bondir, exploser.", "Describir bajadas: chuter, dégringoler, plonger, s'effondrer, reculer.", "Describir estancamiento y recuperación: stagner, piétiner, marquer le pas; repartir à la hausse, rebondir, se redresser."],
    iconos: ["ic2/rayo", "ic2/moneda", "ic2/globo"],
    previos: ["Describir un gráfico (lección 38), los titulares de prensa (lección 37) y la crisis de la vivienda (lección 52)."],
    capacidad: "Ahora escribes titulares y comentarios económicos con fuerza."
  },
  requiere: R("b3gr-tendance", "b3tp-jeux", "b3cl3-probleme"), recupera: ["b3gr-tendance"],
  conceptos: {
    "b3vf-monter": { n: "subir: grimper (subir), flamber (dispararse), s'envoler (subir mucho), bondir, exploser; recuperarse: repartir à la hausse, rebondir, se redresser", b: "gr" },
    "b3vf-baisser": { n: "bajar: chuter (caer), dégringoler (desplomarse), plonger (hundirse), s'effondrer (derrumbarse), reculer (retroceder); estancarse: stagner, piétiner (no avanzar), marquer le pas, faire du surplace", b: "gr" }
  },
  video: {
    titulo: "Verbos con imagen", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "flamber", seg: [
        { es: "Hola. La prensa no dice «subir»: dice «arder»." } ] },
      { v: "frase", filas: [
          { nota: "se disparan", p: 1, partes: [["Les prix de l'énergie ont flambé cet hiver.", "-", 1]] },
          { nota: "se desploma", p: 2, partes: [["La bourse a dégringolé après l'annonce.", "-", 2]] },
          { nota: "no avanzan", p: 3, partes: [["Les négociations piétinent.", "-", 3]] } ], seg: [
        { fr: "Les prix de l'énergie ont flambé cet hiver.", p: 1 }, { fr: "La bourse a dégringolé après l'annonce.", p: 2 }, { fr: "Les négociations piétinent.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Les loyers flambent.»", o: ["se disparan", "se queman"], a: 0, es: true,
        bien: "¡Sí! Sentido figurado.", mal: "Flamber = dispararse (precios).",
        seg: [ { es: "Pausa. Se disparan." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["grimper", "s'envoler", "chuter", "dégringoler", "piétiner", "rebondir"], seg: [
        { es: "Sube, baja, se estanca, se recupera.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El telediario económico", img: "bg-noche", yo: "camila",
    escena: "Camila y Hugo escuchan las noticias económicas.",
    pj: PJ,
    lineas: [
      ["hugo", "« Les prix de l'énergie ont flambé cet hiver. Les loyers grimpent et les températures aussi : 40 °C en juillet ! »", "«Los precios de la energía se dispararon este invierno. Los alquileres suben y las temperaturas también: ¡40 °C en julio!»"],
      ["camila", "Et la bourse a dégringolé après l'annonce. Les ventes de voitures ont chuté de 30 % : c'est un effondrement.", "Y la bolsa se desplomó tras el anuncio. Las ventas de coches cayeron un 30 %: es un derrumbe."],
      ["hugo", "Les négociations entre syndicats et patrons piétinent… Mais bonne nouvelle : le chômage a reculé de 2 % cette année.", "Las negociaciones entre sindicatos y patronal no avanzan… Pero buena noticia: el desempleo retrocedió un 2 % este año."],
      ["camila", "Et l'économie rebondit ! Après avoir dégringolé pendant la crise, les ventes repartent enfin à la hausse.", "¡Y la economía se recupera! Después de desplomarse durante la crisis, las ventas por fin vuelven a subir."]
    ],
    fijate: "Fíjate: ont flambé, grimpent (suben); a dégringolé, ont chuté (bajan); piétinent (no avanzan); a reculé (retrocede); rebondit, repartent à la hausse (se recuperan)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Subir, bajar, estancarse",
      idea: "Subida: grimper (subir: Les températures grimpent), flamber (dispararse; sentido figurado de «arder»: Les loyers flambent), s'envoler (subir mucho), bondir, exploser. Bajada: chuter (caer), dégringoler (desplomarse), plonger (hundirse), s'effondrer (derrumbarse), reculer (retroceder: buena noticia si es el chômage). Estancamiento: stagner, piétiner (no avanzar: Les négociations piétinent), marquer le pas, faire du surplace. Recuperación: repartir à la hausse, rebondir (L'économie rebondit), se redresser.",
      intro: "Toca cada verbo.",
      tabla: [["Francés", "Español", "Movimiento"], [
        ["Les loyers flambent.", "Los alquileres se disparan.", "sube"],
        ["Les négociations piétinent.", "Las negociaciones no avanzan.", "se estanca"],
        ["L'économie rebondit. · rebondir · se redresser", "La economía se recupera. · recuperarse", "se recupera"],
        ["Les ventes ont chuté de 30 % : c'est un effondrement. · chuté · dégringolé · plongé", "Las ventas se desplomaron un 30 %: es un derrumbe.", "baja"],
        ["Les températures grimpent en juillet : 40 °C ! · grimpent", "¡Las temperaturas suben en julio: 40 °C!", "sube"],
        ["s'envoler · s'effondrer · marquer le pas · se redresser", "subir mucho · derrumbarse · estancarse · recuperarse", "verbos"],
        ["grimper · flamber · bondir · exploser", "subir · dispararse · dar un salto · explotar", "Sube"],
        ["chuter · plonger · dégringoler · reculer", "caer · hundirse · desplomarse · retroceder", "Baja"],
        ["Bonne nouvelle : le chômage a reculé de 2 % cette année. · reculé", "Buena noticia: el desempleo retrocedió un 2 % este año.", "baja"],
        ["Les prix ont flambé", "Los precios se dispararon", "sube"],
        ["Après avoir dégringolé pendant la crise, les ventes repartent enfin à la hausse.", "Después de desplomarse durante la crisis, las ventas por fin vuelven a subir.", "se recupera"]
      ]],
      ej: [["Les prix de l'énergie ont flambé cet hiver.", "Los precios de la energía se dispararon este invierno."], ["La bourse a dégringolé après l'annonce.", "La bolsa se desplomó tras el anuncio."], ["Les négociations piétinent.", "Las negociaciones no avanzan."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["flamber = arder solamente", "flamber = dispararse (precios)", "Sentido figurado."], ["Bonne nouvelle : le chômage a flambé.", "Bonne nouvelle : le chômage a reculé.", "Si es buena noticia, el paro baja."], ["piétiner = pisotear (en economía)", "piétiner = no avanzar", "Sentido figurado."]] }
  ],
  ejemplos: [
    { sit: "«Les loyers flambent.»", resp: "se disparan", pasos: ["Figurado."], porque: "Sube." },
    { sit: "«Les négociations piétinent.»", resp: "no avanzan", pasos: ["Pisan en el mismo sitio."], porque: "Se estanca." },
    { sit: "«La economía se recupera.»", resp: "L'économie rebondit.", pasos: ["rebondir."], porque: "Se recupera." }
  ],
  comprueba: [
    { q: "«Dégringoler» significa…", o: ["desplomarse", "subir"], a: 0, b: "gr", porque: "Caída." },
    { q: "«S'envoler» (precios) significa…", o: ["subir mucho", "desaparecer"], a: 0, b: "gr", porque: "Volar." },
    { q: "«Marquer le pas» significa…", o: ["estancarse", "acelerar"], a: 0, b: "gr", porque: "No avanzar." }
  ],
  practica: [
    { fase: "guiada", c: ["b3vf-monter", "b3vf-baisser"], k: "sort", ask: "¿Sube o baja?", q: "Clasifica.", cats: ["Sube", "Baja"], items: [["grimper", 0], ["flamber", 0], ["bondir", 0], ["exploser", 0], ["chuter", 1], ["plonger", 1], ["dégringoler", 1], ["reculer", 1]], pista: "¿Arriba o abajo?", why: "Movimientos." },
    { fase: "guiada", c: ["b3vf-monter"], k: "choice", es: true, ask: "«Les loyers flambent.»", q: "Elige.", o: ["se disparan", "se queman"], a: 0, pista: "Figurado.", why: "Se disparan." },
    { fase: "guiada", c: ["b3vf-baisser"], k: "choice", es: true, ask: "«Les négociations piétinent.»", q: "Elige.", o: ["no avanzan", "avanzan rápido"], a: 0, pista: "Pies.", why: "No avanzan." },
    { fase: "indep", c: ["b3vf-monter"], k: "choice", ask: "«La economía se recupera.»", q: "«___»", o: ["L'économie rebondit.", "L'économie dégringole."], a: 0, why: "<b>rebondit</b>." },
    { fase: "indep", c: ["b3vf-baisser"], k: "fill", ask: "«se han desplomado» (participio).", q: "Les ventes ont ___ de 30 % : c'est un effondrement.", acc: ["chuté", "dégringolé", "plongé"], why: "<b>chuté</b>." },
    { fase: "indep", c: ["b3vf-monter"], k: "fill", ask: "«suben» (grimper).", q: "Les températures ___ en juillet : 40 °C !", acc: ["grimpent"], why: "<b>grimpent</b>." },
    { fase: "aplica", c: ["b3vf-monter", "b3vf-baisser"], k: "match", ask: "Une cada verbo con su sentido.", q: "Verbo → sentido", pairs: [["s'envoler", "subir mucho"], ["s'effondrer", "derrumbarse"], ["marquer le pas", "estancarse"], ["se redresser", "recuperarse"]], why: "Verbos." },
    { fase: "aplica", c: ["b3vf-baisser"], k: "spot", ask: "Encuentra el error.", s: "Bonne nouvelle : le chômage a [flambé] de 2 % cette année .", fix: "reculé", why: "<b>reculé</b>." },
    { fase: "aplica", c: ["b3vf-baisser"], k: "choice", es: true, ask: "«Dégringoler» significa…", q: "Elige.", o: ["desplomarse", "subir"], a: 0, why: "Caída." },
    { fase: "dominio", c: ["b3vf-monter"], k: "order", ask: "Ordena: «Los precios se dispararon».", tokens: ["Les prix", "ont", "flambé"], why: "<b>Les prix ont flambé</b>" },
    { fase: "dominio", c: ["b3vf-monter"], k: "choice", es: true, ask: "«S'envoler» (precios) significa…", q: "Elige.", o: ["subir mucho", "desaparecer"], a: 0, why: "Subir." },
    { fase: "dominio", c: ["b3vf-monter", "b3vf-baisser"], k: "listen", say: "Après avoir dégringolé pendant la crise, les ventes repartent enfin à la hausse.", acc: ["Après avoir dégringolé pendant la crise, les ventes repartent enfin à la hausse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Après avoir dégringolé pendant la crise, les ventes repartent enfin à la hausse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo"], previo: [] }
};

/* ── 67. Figures de style : métaphore, hyperbole, litote, antithèse ── */
E["b21-figures-style"] = {
  v: 1, lang: "fr", nivel: "B2", estado: "piloto",
  titulo: "Figures de style : métaphore, hyperbole, litote, antithèse",
  objetivo: {
    que: "Vas a reconocer y usar las figuras retóricas que dan fuerza a un texto: comparación, metáfora, hipérbole, litote, antítesis, oxímoron y anáfora.",
    corto: "Je te l'ai répété cent fois ! · La vie est un long fleuve tranquille.",
    podras: ["Distinguir la comparaison (con comme: rusé comme un renard) de la métaphore (sin conector: Cet homme est un lion).", "Reconocer las que exageran (l'hyperbole: je meurs de soif) y las que atenúan (la litote: ce n'est pas bête; l'euphémisme).", "Reconocer l'antithèse (si petit et si grand), l'oxymore (un silence assourdissant) y l'anaphore (Il faut agir, il faut oser…)."],
    iconos: ["ic2/pergamino", "ic2/corona", "ic2/estrella"],
    previos: ["La tribuna (lección 30), lo implícito (lección 36) y las expresiones del cuerpo (lección 60)."],
    capacidad: "Ahora analizas un texto literario o un discurso y usas sus recursos."
  },
  requiere: R("b3im-ironie", "b3tb-rhetorique", "b3ex-tete"), recupera: ["b3im-ironie"],
  conceptos: {
    "b3fs-image": { n: "imágenes: la comparaison (con comme, tel, pareil à: rusé comme un renard), la métaphore (sin conector: Cette ville est une jungle; Cet homme est un lion), l'antithèse (oposición: si petit et si grand), l'oxymore (un silence assourdissant), l'anaphore (repetición al inicio)", b: "gr" },
    "b3fs-intensite": { n: "exagerar: l'hyperbole (Je meurs de soif, Je te l'ai dit mille fois, J'ai des tonnes de travail); atenuar: la litote (Ce n'est pas bête, Ce n'est pas désagréable), l'euphémisme", b: "gr" }
  },
  video: {
    titulo: "Figuras de estilo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "une métaphore", seg: [
        { es: "Hola. Las figuras dan fuerza al texto." } ] },
      { v: "frase", filas: [
          { nota: "hipérbole", p: 1, partes: [["Je te l'ai répété cent fois !", "-", 1]] },
          { nota: "metáfora", p: 2, partes: [["La vie est un long fleuve tranquille.", "-", 2]] },
          { nota: "litote", p: 3, partes: [["Ce n'est pas le plus malin de la classe.", "-", 3]] } ], seg: [
        { fr: "Je te l'ai répété cent fois !", p: 1 }, { fr: "La vie est un long fleuve tranquille.", p: 2 }, { fr: "Ce n'est pas le plus malin de la classe.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Il est rusé comme un renard.» Es…", o: ["una comparación", "una metáfora"], a: 0, es: true,
        bien: "¡Sí! Lleva comme.", mal: "Con comme: comparación.",
        seg: [ { es: "Pausa. ¿Hay comme?" } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la comparaison", "la métaphore", "l'hyperbole", "la litote", "l'antithèse", "l'anaphore"], seg: [
        { es: "Imagen, exageración y atenuación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La clase de literatura", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia analiza un discurso histórico con la clase.",
    pj: PJ,
    lineas: [
      ["sofia", "Écoutez le général de Gaulle en 1944 : « Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré ! » Quelle figure ?", "Escuchen al general De Gaulle en 1944: «¡París ultrajado! ¡París destrozado! ¡París martirizado! ¡Pero París liberado!» ¿Qué figura es?"],
      ["camila", "C'est une anaphore : il répète « Paris » au début. Comme « Il faut agir, il faut oser, il faut rêver ».", "Es una anáfora: repite «París» al principio. Como «Hay que actuar, hay que atreverse, hay que soñar»."],
      ["hugo", "Et « Cette ville est une jungle », c'est une métaphore, car il n'y a pas de « comme ». « Je meurs de soif », c'est une hyperbole.", "Y «Esta ciudad es una jungla» es una metáfora, porque no hay «comme». «Me muero de sed» es una hipérbole."],
      ["sofia", "Très bien. Et « un silence assourdissant », c'est un oxymore. « Ce n'est pas désagréable », une litote. Vous n'êtes pas mauvais du tout !", "Muy bien. Y «un silencio ensordecedor» es un oxímoron. «No es desagradable», una litote. ¡No son nada malos!"]
    ],
    fijate: "Fíjate: l'anaphore (Paris… Paris…), la métaphore (une jungle, sin comme), l'hyperbole (Je meurs de soif), l'oxymore (un silence assourdissant), la litote (Ce n'est pas désagréable; pas mauvais du tout)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las figuras principales",
      idea: "La comparaison: compara con un conector (comme, tel, pareil à): fort comme un bœuf, rusé comme un renard. La métaphore: compara sin conector: un océan de larmes, Cette ville est une jungle, Cet homme est un lion. L'hyperbole: exagera (Je meurs de faim, Je te l'ai dit mille fois, Il y avait un monde fou). La litote: dice menos para sugerir más (Ce n'est pas bête; Va, je ne te hais point, de Corneille). L'euphémisme: suaviza. L'antithèse: opone dos ideas (si petit et si grand à la fois). L'oxymore (u oxymoron): une dos palabras contrarias (un silence assourdissant). L'anaphore: repite al inicio (Il faut agir, il faut oser, il faut rêver).",
      intro: "Toca cada figura.",
      tabla: [["Francés", "Español", "Figura"], [
        ["Je meurs de soif.", "Me muero de sed.", "hipérbole"],
        ["Ce n'est pas bête.", "No es tonto.", "litote"],
        ["Il est rusé comme un renard.", "Es astuto como un zorro.", "comparación"],
        ["« Un silence assourdissant » = un oxymore · oxymore · oxymoron", "«Un silencio ensordecedor» = un oxímoron", "oxímoron"],
        ["« Cet homme est un lion » = une métaphore · métaphore", "«Este hombre es un león» = una metáfora", "metáfora"],
        ["anaphore = Il faut agir, il faut oser, il faut rêver. · antithèse = Il est si petit et si grand à la fois. · hyperbole = J'ai des tonnes de travail. · litote = Ce n'est pas désagréable.", "anáfora · antítesis · hipérbole · litote", "ejemplos"],
        ["hyperbole · Je suis mort de rire. · Il y avait un monde fou. · C'est la catastrophe du siècle !", "hipérbole · Me morí de risa. · Había muchísima gente. · ¡Es la catástrofe del siglo!", "Exagerar"],
        ["litote · euphémisme · Ce n'est pas mal. · Il n'est pas très grand.", "litote · eufemismo · No está mal. · No es muy alto.", "Atenuar"],
        ["« Cette ville est une jungle » est une métaphore, car il n'y a pas de « comme ».", "«Esta ciudad es una jungla» es una metáfora, porque no hay «comme».", "metáfora"],
        ["Je te l'ai dit mille fois", "Te lo he dicho mil veces", "hipérbole"],
        ["Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré !", "¡París ultrajado! ¡París destrozado! ¡París martirizado! ¡Pero París liberado!", "anáfora"]
      ]],
      ej: [["Je te l'ai répété cent fois !", "¡Te lo he repetido cien veces!"], ["La vie est un long fleuve tranquille.", "La vida es un largo río tranquilo."], ["Ce n'est pas le plus malin de la classe.", "No es el más listo de la clase."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["comparación = metáfora siempre", "La comparación lleva comme; la metáfora no", "Distinguir."], ["« Cette ville est une jungle » est une comparaison.", "… est une métaphore.", "No hay comme."], ["La litote exagera.", "La litote atenúa; la hipérbole exagera", "Son opuestas."]] }
  ],
  ejemplos: [
    { sit: "«Je meurs de soif.» ¿Qué figura es?", resp: "hipérbole", pasos: ["Exageración."], porque: "No se muere de verdad." },
    { sit: "«Ce n'est pas bête.» ¿Qué figura es?", resp: "litote", pasos: ["Dice menos."], porque: "= es inteligente." },
    { sit: "«Il est rusé comme un renard.» ¿Qué figura es?", resp: "comparación", pasos: ["Lleva comme."], porque: "Comparaison." }
  ],
  comprueba: [
    { q: "La metáfora…", o: ["compara sin «comme»", "compara con «comme»"], a: 0, b: "gr", porque: "Implícita." },
    { q: "«Un silence assourdissant» es…", o: ["un oxímoron", "una hipérbole"], a: 0, b: "gr", porque: "Contrarios." },
    { q: "La anáfora consiste en…", o: ["repetir una palabra al inicio", "suavizar"], a: 0, b: "gr", porque: "Repetición." }
  ],
  practica: [
    { fase: "guiada", c: ["b3fs-intensite"], k: "sort", ask: "¿Exagera o atenúa?", q: "Clasifica.", cats: ["Exagerar", "Atenuar"], items: [["hyperbole", 0], ["Je suis mort de rire.", 0], ["Il y avait un monde fou.", 0], ["C'est la catastrophe du siècle !", 0], ["litote", 1], ["euphémisme", 1], ["Ce n'est pas mal.", 1], ["Il n'est pas très grand.", 1]], pista: "¿Más o menos de la realidad?", why: "Intensidad." },
    { fase: "guiada", c: ["b3fs-intensite"], k: "choice", es: true, ask: "«Je meurs de soif.» ¿Qué figura es?", q: "Elige.", o: ["hipérbole", "litote"], a: 0, pista: "Exagera.", why: "Hipérbole." },
    { fase: "guiada", c: ["b3fs-intensite"], k: "choice", es: true, ask: "«Ce n'est pas bête.» ¿Qué figura es?", q: "Elige.", o: ["litote", "hipérbole"], a: 0, pista: "Dice menos.", why: "Litote." },
    { fase: "indep", c: ["b3fs-image"], k: "choice", es: true, ask: "«Il est rusé comme un renard.» ¿Qué figura es?", q: "Elige.", o: ["comparación", "metáfora"], a: 0, why: "Comme." },
    { fase: "indep", c: ["b3fs-image"], k: "fill", ask: "Figura de «un silence assourdissant».", q: "« Un silence assourdissant » = un ___", acc: ["oxymore", "oxymoron"], why: "<b>oxymore</b>." },
    { fase: "indep", c: ["b3fs-image"], k: "fill", ask: "Figura de «Cet homme est un lion».", q: "« Cet homme est un lion » = une ___", acc: ["métaphore"], why: "<b>métaphore</b>." },
    { fase: "aplica", c: ["b3fs-image", "b3fs-intensite"], k: "match", ask: "Une cada figura con su ejemplo.", q: "Figura → ejemplo", pairs: [["anaphore", "Il faut agir, il faut oser, il faut rêver."], ["antithèse", "Il est si petit et si grand à la fois."], ["hyperbole", "J'ai des tonnes de travail."], ["litote", "Ce n'est pas désagréable."]], why: "Figuras." },
    { fase: "aplica", c: ["b3fs-image"], k: "spot", ask: "Encuentra el error.", s: "« Cette ville est une jungle » est une [comparaison] , car il n'y a pas de « comme » .", fix: "métaphore", why: "<b>métaphore</b>." },
    { fase: "aplica", c: ["b3fs-image"], k: "choice", es: true, ask: "La metáfora…", q: "Elige.", o: ["compara sin «comme»", "compara con «comme»"], a: 0, why: "Sin comme." },
    { fase: "dominio", c: ["b3fs-intensite"], k: "order", ask: "Ordena: «Te lo he dicho mil veces».", tokens: ["Je te l'ai", "dit", "mille fois"], why: "<b>Je te l'ai dit mille fois</b>" },
    { fase: "dominio", c: ["b3fs-image"], k: "choice", es: true, ask: "La anáfora consiste en…", q: "Elige.", o: ["repetir una palabra al inicio", "suavizar una realidad"], a: 0, why: "Repetición." },
    { fase: "dominio", c: ["b3fs-image", "b3fs-intensite"], k: "listen", say: "Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré !", acc: ["Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré !", "Paris outragé! Paris brisé! Paris martyrisé! Mais Paris libéré!"], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré !</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "de Gaulle", "Corneille", "Paris"], previo: [] }
};

})();
