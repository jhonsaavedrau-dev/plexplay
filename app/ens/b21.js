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

})();
