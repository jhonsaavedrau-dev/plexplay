/* PLEX PLAY 4.63 — Sistema de enseñanza: las fichas del curso «Literatura francesa y francófona» (lit). Solo datos (los pinta js/plx122.js).
   La app baja este archivo al abrir una lección del curso (y también C1.2, el curso anterior).
   BASE son todos los conceptos de Primeros pasos, A1, A2, B1.1, B1.2, B2.1, Remédiation, C1.1 y C1.2, que las fichas dan por enseñados.
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
  "ho-llegar", "ho-irse", "ho-salut", "me-merci", "me-svp", "me-oui", "pr-nom", "pr-q", "pr-ench", "al-dificiles",
  "al-otras", "so-u", "so-grupos", "so-nariz", "mu-final", "mu-h", "mu-careful", "n1-05", "n1-610", "n2-num",
  "n2-age", "co-basicos", "co-otros", "ar-le", "ar-un", "cv-preg", "cv-resp", "re-comprendre", "re-pedir", "fa-voc",
  "fa-mon", "am-ami", "am-copain", "am-mon", "vo-presentar", "vo-resp", "av-formas", "av-neg", "et-formas", "et-nat",
  "ma-voc", "ma-dans", "ob-voc", "ob-q", "gp-adj", "gp-fem", "an-voc", "an-nom", "cc-orden", "cc-fem",
  "jo-dias", "jo-hoy", "mo-meses", "mo-est", "he-decir", "he-preg", "mm-partes", "mm-saludos", "me-fait", "me-pleut",
  "mg-voc", "mg-du", "bo-voc", "bo-bois", "ca-pedir", "ca-pagar", "fr-voc", "fr-des", "ai-formas", "ai-preg",
  "n6-dec", "n6-comp", "li-voc", "li-ou", "di-lados", "di-dist", "tr-voc", "tr-en", "pa-voc", "pa-de",
  "mg2-voc", "mg2-ouv", "cb-comprar", "cb-cher", "ar2-voc", "ar2-payer", "ai-aide", "ai-perdu", "ai-appel", "ad-voc",
  "ad-orden", "ho-reserva", "ho-servicios", "co2-cuerpo", "co2-cara", "ml-mal", "ml-malade", "em-voc", "em-fem", "fs-faim",
  "fs-froid", "ve-voc", "ve-porte", "sp-voc", "sp-jouer", "lo-verbos", "lo-activ", "va-voc", "va-gr", "cl-voc",
  "cl-pedir", "cs-verbos", "cs-tu", "es-etudier", "es-voc", "an-feliz", "an-fecha", "an-cosas", "pa2-formas", "pa2-nivel",
  "ha-a", "ha-ou", "qo-voz", "qo-estce", "np-regla", "np-vocal", "qq-palabras", "qq-frases", "te-llamada", "te-cierre",
  "in-invitar", "in-resp", "rv-donde", "rv-hora", "ar3-cuando", "ar3-registro", "tc-voc", "tc-wifi", "pt-yo", "pt-vida",
  "dl-abrir", "dl-seguir", "na-age", "na-num", "na-ecrire", "at-def", "at-indef", "at-genre", "er-term", "er-oral",
  "er-neg", "ir-etre-avoir", "ir-aller-faire", "qu-tres", "qu-mots", "vi-contr", "vi-lugar", "gh-gustos", "gh-hora", "gh-dias",
  "po-sing", "po-plur", "po-concord", "ad-accord", "ad-especial", "ad-place", "lg-ilya", "lg-prep", "cr-pedir", "cr-mesero",
  "cr-num", "ms-fait", "ms-fecha", "de-forma", "de-tienda", "vp-conj", "vp-uso", "lo2-jouer", "lo2-faire", "n7-70",
  "n7-80", "gn-cent", "gn-mille", "da-forma", "da-preg", "ho2-courante", "ho2-officielle", "ro-pron", "ro-verbos", "fq-escala",
  "fq-lugar", "ir2-conj", "ir2-grupo", "re2-attendre", "re2-prendre", "pn-prep", "pn-nat", "pf-sinart", "pf-fem", "ph-etre",
  "ph-avoir", "ca2-voc", "ca2-fem", "ci-cest", "ci-ilest", "ci-ilya", "tp-en", "tp-a", "ch-preg", "ch-indic",
  "pl-sans", "pl-de", "ad-a", "ad-de", "lv-masc", "lv-fem", "av2-venir", "av2-chez", "im-forma", "im-er",
  "co-lieu", "co-chez", "cq-de", "cq-adv", "pb-poste", "pb-banque", "ho-reserver", "ho-recep", "te-appel", "te-recep",
  "or-ieme", "or-premier", "al-genre", "al-cat", "pa2-forma", "pa2-gusto", "pd-de", "pd-excep", "rp-repas", "rp-menu",
  "ra-avis", "ra-bonbien", "vc-accord", "vc-invar", "gi-art", "gi-pref", "so-proposer", "so-repondre", "cp-salut", "cp-fin",
  "fe-voeux", "fe-bonne", "am-voc", "am-plur", "na-voc", "na-prep", "ta-faire", "ta-autres", "ql-forma", "ql-est",
  "it-mots", "it-reg", "pz-cond", "pz-reg", "pt-forma", "pt-uso", "on-forma", "on-sens", "sc-savoir", "sc-conn",
  "ps-sing", "ps-plur", "if-inf", "if-neg", "ae-sens", "ae-besoin", "bn-voyelle", "bn-fem", "pl2-s", "pl2-x",
  "cm-corps", "cm-cadre", "pca-forma", "pca-irreg", "pca-neg", "pce-verbes", "pce-accord", "imp-forma", "imp-uso", "fu-proche",
  "fu-simple", "fu-irreg", "pn-pres", "pn-pc", "pt3-choix", "pt3-gout", "cmp-adj", "cmp-nom", "cmp-sup", "pr-mapa",
  "pr-place", "cod-forma", "cod-place", "coi-forma", "coi-vs", "y-lieu", "y-pers", "en-part", "en-qte", "ch-arbre",
  "ch-pc", "pi-decor", "pi-fait", "ip-irreg", "ip-pron", "vo-aller", "vo-venir", "me2-mal", "me2-depuis", "pi2-u",
  "pi2-is", "pcn-neg", "pcn-q", "pp2-forme", "pp2-neg", "mp-mots", "mp-ilya", "rw-conn", "rw-avis", "ih-forme",
  "ih-marq", "so-souvenir", "so-voc", "vd-forme", "vd-oppose", "de-deja", "de-plus", "dp-depuis", "dp-pendant", "bi-verbes",
  "bi-dates", "ae2-forme", "ae2-mixte", "al-proc", "al-prob", "sd-essayer", "sd-avis", "mm-meilleur", "mm-mieux", "bu-verbes",
  "bu-noms", "la-annonce", "la-visite", "co3-devoir", "co3-interdit", "ob2-mat", "ob2-usage", "rc-probleme", "rc-demande", "pv-futur",
  "pv-voc", "tr-fetes", "tr-faire", "et-horaire", "et-contrat", "ipr-pos", "ipr-moi", "sc-conseil", "sc-eviter", "qq2-qui",
  "qq2-que", "po2-air", "po2-carac", "rl-verbes", "rl-passe", "to-forme", "to-expr", "se-etre", "se-ca", "cc-forme",
  "cc-conseil", "pr2-proposer", "pr2-repondre", "ex-pardon", "ex-repondre", "ad2-moi", "ad2-accord", "rs-verbes", "rs-noms", "vc2-verbes",
  "vc2-pron", "rc2-decor", "rc2-action", "rv-billet", "rv-vol", "ae3-etapes", "ae3-annonce", "ga-lieux", "ga-probleme", "dv-adj",
  "dv-onpeut", "rv2-structure", "rv2-conclusion", "fi-racines", "fi-marq", "sf-forme", "sf-sil", "ca3-frase", "ca3-nom", "cs2-mots",
  "cs2-vs", "na2-mots", "na2-sujet", "pj2-intention", "pj2-compte", "qt-nom", "qt-verbe", "am2-place", "am2-adj", "b1pi-decor",
  "b1pi-fait", "b1pq-forme", "b1pq-usage", "b1ap-cod", "b1ap-avant", "b1rel-quique", "b1rel-oudont", "b1ge-forme", "b1ge-usage", "b1sj-forme",
  "b1sj-usage", "b1co-forme", "b1co-usage", "b1op-mode", "b1op-connect", "b1mr-cest", "b1mr-ce", "b1oc-oppo", "b1oc-conc", "b1in-registre",
  "b1in-mots", "b1vp-a", "b1vp-de", "b1ad-forme", "b1ad-place", "b1pe-trois", "b1pe-passe", "b1rc-ordre", "b1rc-avapres", "b1et-etudes",
  "b1et-travail", "b1ih-forme", "b1ih-usage", "b1ai-fond", "b1ai-coupe", "b1va-venait", "b1va-allait", "b1fs-forme", "b1fs-quand", "b1fp-choix",
  "b1fp-si", "b1cp-demander", "b1cp-conseil", "b1rg-forme", "b1rg-usage", "b1cj-sens", "b1cj-futur", "b1aa-prep", "b1aa-recit", "b1rs-intro",
  "b1rs-structure", "b1ae-oui", "b1ae-non", "b1ip-aff", "b1ip-neg", "b1cc-cod", "b1cc-coi", "b1y-lieu", "b1y-pers", "b1en-qte",
  "b1en-de", "b1pi-place", "b1pi-exc", "b1rc2-lequel", "b1rc2-contr", "b1cq-forme", "b1cq-indir", "b1pt-usage", "b1pt-reponse", "b1on-sens",
  "b1on-verbe", "b1to-adj", "b1to-pron", "b1pa-place", "b1pa-sens", "b1mm-choix", "b1mm-sup", "b1ng-mots", "b1ng-place", "b1si-etre",
  "b1si-autres", "b1ob-obl", "b1ob-int", "b1cs-conseil", "b1cs-suggest", "b1se-voc", "b1se-struct", "b1ad-accord", "b1ad-desac", "b1cd-indic",
  "b1cd-subj", "b1rf-expl", "b1rf-resume", "b1ex-mots", "b1ex-tel", "b1ca-mots", "b1ca-nonseul", "b1cl-annonce", "b1cl-position", "b1pp-prendre",
  "b1pp-donner", "b1sp-probleme", "b1sp-demande", "b1pm-demander", "b1pm-repondre", "b1pa-prop", "b1pa-rep", "b1lg-argent", "b1lg-demarches", "b1sa-symptomes",
  "b1sa-traitement", "b1en-probleme", "b1en-solution", "b1md-presse", "b1md-reseaux", "b1vi-probleme", "b1vi-solution", "b1cs-payer", "b1cs-apres", "b1rl-verbes",
  "b1rl-famille", "b1cc2-presenter", "b1cc2-avis", "b1ch-fraction", "b1ch-evolution", "b1la-ouverture", "b1la-cloture", "b1fd-voc", "b1fd-passif", "b1ei-humeur",
  "b1ei-autres", "b1rf2-noms", "b1rf2-verbes", "b2si-possible", "b2si-irreel", "b2di-question", "b2di-ordre", "b2pd-ordre", "b2pd-temps", "b2et-passe",
  "b2et-futur", "b2cc-cause", "b2cc-csq", "b2vp-forme", "b2vp-agent", "b2pp-poss", "b2pp-dem", "b2ce-formules", "b2ce-plan", "b2in-pos",
  "b2in-neg", "b2fa-forme", "b2fa-usage", "b2dp-temps", "b2dp-mots", "b2bu-inf", "b2bu-subj", "b2si2-meme", "b2si2-autre", "b2ip-forme",
  "b2ip-usage", "b2cn-evol", "b2cn-egal", "b2cp-forme", "b2cp-si", "b2cj-present", "b2cj-passe", "b2sp-forme", "b2sp-usage", "b2sc-subj",
  "b2sc-indic", "b2fd-cond", "b2fd-passe", "b2ct-anter", "b2ct-poster", "b2pc-forme", "b2pc-sujet", "b2ps-reg", "b2ps-irr", "b2fc-faire",
  "b2fc-se", "b2vs-compte", "b2vs-autres", "b2vc-jouer", "b2vc-manquer", "b2no-suff", "b2no-autres", "b2sr-subj", "b2sr-indic", "b2cd-cas",
  "b2cd-cond", "b2oi-conj", "b2oi-mots", "b2ro-selon", "b2ro-comme", "b2vi-neutre", "b2vi-concede", "b2pe-intro", "b2pe-plan", "b2pb-forme",
  "b2pb-indir", "b2pg-schema", "b2pg-conn", "b2ca-conceder", "b2ca-refuter", "b2lm-plan", "b2lm-formules", "b2cr-regles", "b2cr-verbes", "b2sh-subj",
  "b2sh-autres", "b2at-cond", "b2at-limiter", "b2ii-mots", "b2ii-struct", "b2mt-contrat", "b2mt-droits", "b2ed-etapes", "b2ed-titres", "b2sa-systeme",
  "b2sa-prev", "b2ti-voc", "b2ti-risques", "b2it-pers", "b2it-vote", "b2jd-pers", "b2jd-peine", "b2ec-banque", "b2ec-budget", "b2vu-espaces",
  "b2vu-mobilite", "b2dv-pers", "b2dv-integr", "b2eg-travail", "b2eg-maison", "b2ad-produits", "b2ad-habitudes", "b2tr-probl", "b2tr-sol", "b2bv-pers",
  "b2bv-actions", "b2fa-corps", "b2fa-mots", "b2ps2-pref", "b2ps2-suff", "b2vp2-faire", "b2vp2-autres", "b2an-echelle", "b2an-degre", "b2mo-sens",
  "b2mo-registre", "b2rs-mots", "b2rs-syntaxe", "b2tp-appel", "b2tp-accueil", "b2po-signes", "b2po-maj", "b2ac-demi", "b2ac-couleurs", "b2pl-al",
  "b2pl-x", "b2ne-s", "b2ne-et", "b2fr-belsui", "b2fr-quebec", "b2pv-patience", "b2pv-autres", "b3rc-formes", "b3rc-duquel", "b3cp-valeurs",
  "b3cp-hyp", "b3sj-passe", "b3sj-mode", "b3pg-gerondif", "b3pg-adj", "b3fl-qui", "b3fl-syntaxe", "b3mo-echelle", "b3mo-mode", "b3pr-titre",
  "b3pr-genres", "b3db-accord", "b3db-parole", "b3co-mode", "b3co-autres", "b3cd-mode", "b3cd-autres", "b3ps-formes", "b3ps-usage", "b3no-genre",
  "b3no-phrase", "b3cl-fonctions", "b3cl-or", "b3mr-cest", "b3mr-ce", "b3ap-cod", "b3ap-coi", "b3st-indic", "b3st-subj", "b3pi-forme",
  "b3pi-accord", "b3ne-emploi", "b3ne-sens", "b3si-forme", "b3si-equiv", "b3in-forme", "b3in-oral", "b3ad-fait", "b3ad-mesure", "b3pn-le",
  "b3pn-eny", "b3oa-metier", "b3oa-expr", "b3av-place", "b3av-sens", "b3hm-mixte", "b3hm-meme", "b3ca-phrase", "b3ca-nom", "b3cq-conj",
  "b3cq-intens", "b3bc-but", "b3bc-crainte", "b3es-plan", "b3es-formules", "b3tb-structure", "b3tb-rhetorique", "b3cl2-reagir", "b3cl2-proposer", "b3rp-structure",
  "b3rp-style", "b3eo-plan", "b3eo-debat", "b3ng-proposer", "b3ng-accord", "b3ra-genres", "b3ra-strategie", "b3im-sous", "b3im-ironie", "b3tp-forme",
  "b3tp-jeux", "b3gr-tendance", "b3gr-chiffres", "b3pn2-symboles", "b3pn2-abrev", "b3pf-lexique", "b3pf-structure", "b3ct-direct", "b3ct-indirect", "b3te-climat",
  "b3te-solutions", "b3mn-acteurs", "b3mn-effets", "b3at-tendances", "b3at-bienetre", "b3sc-methode", "b3sc-resultats", "b3be-themes", "b3be-valeurs", "b3pt-patrimoine",
  "b3pt-acces", "b3ec-problemes", "b3ec-solutions", "b3me-deonto", "b3me-desinfo", "b3sp-pratique", "b3sp-valeurs", "b3sm-troubles", "b3sm-soin", "b3cl3-probleme",
  "b3cl3-politiques", "b3pb-pub", "b3pb-conso", "b3eu-institutions", "b3eu-debats", "b3lv-prendre", "b3lv-tenir", "b3co2-prendre", "b3co2-autres", "b3sp2-vue",
  "b3sp2-ouie", "b3pa-paires", "b3pa-droit", "b3hg-quoi", "b3hg-sans", "b3ex-tete", "b3ex-oeil", "b3an-equiv", "b3an-faux", "b3la-temps",
  "b3la-logique", "b3em-echelle", "b3em-etats", "b3eu2-mort", "b3eu2-travail", "b3it-fort", "b3it-faible", "b3vf-monter", "b3vf-baisser", "b3fs-image",
  "b3fs-intensite", "b4gn-terminaisons", "b4gn-pieges", "b4ac-fem", "b4ac-plur", "b4pp-etre", "b4pp-avoir", "b4li-aller", "b4li-venir", "b4vp-a",
  "b4vp-de", "b4sy-indir", "b4sy-dont", "b4sj-quand", "b4sj-indic", "b4cd-usages", "b4cd-si", "b4cs-lire", "b4cs-oublis", "b4lt-ordre",
  "b4lt-formules", "b4rg-mots", "b4rg-phrase", "b4cn-fonctions", "b4cn-conceder", "b4rp-pronoms", "b4rp-mots", "b4or-mots", "b4or-homo", "b4po-espaces",
  "b4po-regles", "b4pl-structure", "b4pl-relecture", "b4pn-etapes", "b4pn-formules", "b4cc-gestes", "b4cc-regles", "b4ol-vous", "b4ol-interagir", "b4ph-muettes",
  "b4ph-liaisons", "b4nb-70-99", "b4nb-grands", "b4dt-dates", "b4dt-details", "b4px-analyse", "b4px-conclure", "b4pa-partitif", "b4pa-negation", "b4ps-un",
  "b4ps-plusieurs", "b4rv-sans", "b4rv-avec", "b4dp-depuis", "b4dp-pendant", "b4ce-ilest", "b4ce-cest", "b4do-dont", "b4do-autres", "b4ee-er-e",
  "b4ee-ez-ais", "b4st-condition", "b4st-question", "b4am-personnes", "b4am-choses", "b4sv-savoir", "b4sv-connaitre", "b4tb-tres", "b4tb-beaucoup", "b4di-structure",
  "b4di-questions", "b4ex-reconnaitre", "b4ex-reparer", "b4rm-remercier", "b4rm-formules", "b4rs-vocab", "b4rs-structure", "b4pj-structure", "b4pj-conditionnel", "b4cv-rubriques",
  "b4cv-style", "b4oc-structure", "b4oc-cijoint", "b4iv-inviter", "b4iv-repondre", "b4ad-formules", "b4ad-echelle", "b4rl-relance", "b4rl-faciliter", "b4mn-annoncer",
  "b4mn-perspective", "b4ac2-aigu-grave", "b4ac2-circ", "b4ct-cedille", "b4ct-trema", "b4hb-verbes", "b4hb-autres", "b4cs2-ce-se", "b4cs2-ces-ses", "b4sc-pluriel",
  "b4sc-singulier", "b4dc-mots", "b4dc-verbes", "b4cm-chaque", "b4cm-meme", "b4an-pronoms", "b4an-lexicales", "b4pg-structure", "b4pg-liens", "b4rl2-liste",
  "b4rl2-methode", "b4me-phth", "b4me-autres", "b4uo-y", "b4uo-u", "b4na-trois", "b4na-denasal", "b4em-tombe", "b4em-reste", "b4li2-oblig",
  "b4li2-interdit", "b4rf-r", "b4rf-sons", "b4ar-final", "b4ar-groupes", "b4gt-penser", "b4gt-mot", "b4sp2-identite", "b4sp2-projet", "b4rj-reconnaitre",
  "b4rj-defendre", "b4cq-avoir", "b4cq-expressions", "gn-noyau", "gn-det", "gn-adj", "gn-cn", "gn-rel", "gn-enrichir", "v-cod",
  "v-coi", "v-cc", "v-attr", "v-trans", "p-cod", "p-coi", "p-place", "p-double", "adj-apres", "adj-avant",
  "adj-sens", "adj-rel", "adv-gen", "adv-voy", "adv-ant", "adv-irr", "advp-simple", "advp-comp", "advp-autres", "ph-type",
  "ph-dont", "ph-lequel", "ph-car", "inv-pron", "inv-nom", "inv-incise", "inv-adv", "into-q", "into-enum", "into-acc",
  "rel-qui", "rel-que", "rel-ce", "pa-il", "pa-conv", "pa-passif", "po-rel", "po-signes", "po-virgule", "pg-enrichir",
  "pg-ordre", "pg-alleger", "rf-nom", "rf-lex", "rf-marq", "re-pron", "re-nom", "re-resum", "dr-temps", "dr-q",
  "dr-indic", "ca-nom", "ca-verbe", "ca-csq", "co-mode", "co-nom", "co-opp", "bu-but", "bu-cond", "bu-si",
  "ar-par", "ar-types", "ar-nuance", "pl-choix", "pl-intro", "no-quoi", "no-sig", "rs-regles", "rs-tri", "cr-diff",
  "cr-verbes", "ac-verbes", "ac-eviter", "ci-trois", "ci-typo", "sy-format", "sy-confr", "es-forme", "es-par", "or-epreuve",
  "or-debat", "ps-reperer", "ps-rediger", "pr-idees", "pr-forme", "pe-plan", "pe-pieces", "ap-nom", "ap-tete", "pp-forme",
  "pp-sens", "in-sujet", "in-cest", "cs-si", "cs-quel", "hy-subj", "hy-autres", "el-ellipse", "el-parall", "mo-degres",
  "mo-mode", "ta-present", "ng-sens", "ng-ne", "va-fonction", "va-constr", "cs-fonction", "cs-concess", "sc-parties", "sc-formules",
  "pb-etapes", "pb-forme", "it-pieces", "it-formules", "cl-pieces", "cl-formules", "tr-deux", "tr-formules", "ty-types", "ty-formules",
  "bi-ordre", "bi-abrev", "pg-trois", "pg-integrer", "df-structure", "df-verbes", "cf-tableau", "cf-conn", "ti-types", "ti-typo",
  "co-etapes", "co-marq", "ce-questions", "ce-ton", "se-etapes", "se-regles", "ed-consigne", "ed-formules", "op-temps", "op-formules",
  "od-fonctions", "od-registre", "gt-format", "gt-strat", "er-gram", "er-conn", "la-mots", "la-colloc", "vl-sens", "vl-prep",
  "rc-integrer", "rc-choisir", "au-criteres", "au-bilan", "b5fr-mot", "b5fr-statuts", "b5va-mots", "b5va-norme", "b5rr-dates", "b5rr-langue",
  "b5dc-independances", "b5dc-negritude", "b5qc-dates", "b5qc-amerique", "b5in-symboles", "b5in-ecole", "b5ar-cinema", "b5ar-bd", "b5rf-argot", "b5rf-verlan",
  "b5ei-sens", "b5ei-registre", "b5se-niveaux", "b5se-vie", "b5af-mots", "b5af-culture", "b5an-histoire", "b5an-creolite", "b5bs-mots", "b5bs-pays",
  "b5lr-dates", "b5lr-langues", "b5ps-histoire", "b5ps-vocab", "b5m8-histoire", "b5m8-vocab", "b5ga-antiquite", "b5ga-moyenage", "b5re-francois", "b5re-religion",
  "b5lx-absolu", "b5lx-siecle", "b5np-dates", "b5np-heritage", "b5xx-regimes", "b5xx-ecole", "b5be-progres", "b5be-culture", "b5gg-guerre", "b5gg-memoire",
  "b5sg-occupation", "b5sg-resistance", "b5tg-croissance", "b5tg-republique", "b5ce-dates", "b5ce-debats", "b5lo-loi", "b5lo-sens", "b5df-dates", "b5df-simones",
  "b5hi-vagues", "b5hi-mots", "b5ge-territoire", "b5ge-relief", "b5pv-centre", "b5pv-espaces", "b5om-statuts", "b5om-geo", "b5te-terroir", "b5te-repas",
  "b5fe-civiles", "b5fe-traditions", "b5sv-codes", "b5sv-invites", "b5ct-droits", "b5ct-mots", "b5ms-sigles", "b5ms-financement", "b5sp-tour", "b5sp-autres",
  "b5gn-generations", "b5gn-debats", "b5bl-mots", "b5bl-realites", "b5hu-degre", "b5hu-formes", "b5ml-mode", "b5ml-parfum", "b5pc-auteurs", "b5pc-idees",
  "b5pl-auteurs", "b5pl-idees", "b5ex-sartre", "b5ex-camus", "b5im-histoire", "b5im-technique", "b5ag-mouvements", "b5ag-lieux", "b5ac-anciens", "b5ac-modernes",
  "b5nv-origines", "b5nv-technique", "b5ch-artistes", "b5ch-genre", "b5ph-invention", "b5ph-photographes", "b5sc-savants", "b5sc-institutions", "b5av-festival", "b5av-vocab",
  "b5rp-histoire", "b5rp-langue", "b5mu-musees", "b5mu-visite", "b5hl-origines", "b5hl-dates", "b5ad-institution", "b5ad-role", "b5fm-metiers", "b5fm-inclusive",
  "b5tb-loi", "b5tb-termes", "b5mg-histoire", "b5mg-auteurs", "b5ht-histoire", "b5ht-langues", "b5al-acadie", "b5al-louisiane", "b5oi-territoires", "b5oi-langues",
  "b5pa-caledonie", "b5pa-polynesie", "b5li-chiffres", "b5li-oif", "b5ln-abrev", "b5ln-registre", "b5rg-accents", "b5rg-glotto"
];
var R = function(){ return BASE.concat([].slice.call(arguments)); };

/* ================================ LIT·1 · Genres, registres et figures ================================ */



/* ================================ LIT·2 · Classicisme et Lumières ================================ */

/* ================================ LIT·2 · Le XIXe siècle ================================ */

/* ================================ LIT·1 · Genres, registres et figures ================================ */

/* ================================ LIT·1 · Genres, registres et figures ================================ */

/* ── 1. Les genres et les registres ── */
E["lit-genres-registres"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les genres et les registres",
  objetivo: {
    que: "Vas a identificar el género de un texto (su forma) y su registro (el efecto que busca en el lector).",
    corto: "Maupassant, maître de la nouvelle. · « Ô rage ! ô désespoir ! » : théâtre, registre tragique. · Un pamphlet polémique.",
    podras: ["Distinguir los géneros: le roman (novela), la nouvelle (relato breve), la poésie, le théâtre, l'essai; y el vocabulario del teatro: les didascalies, une tirade.", "Reconocer los registros: tragique, pathétique, épique, satirique, polémique, lyrique.", "Justificar siempre el género y el registro con indicios del texto."],
    iconos: ["ic2/libro", "ic2/nota", "ic2/lapiz"],
    previos: ["Las figuras del humor y la sátira (C1.2, lección 41) y la chanson à texte (C1.2, lección 50)."],
    capacidad: "Ahora empiezas cualquier comentario situando el género y el registro del texto."
  },
  requiere: R("b5hu-formes", "b5ch-genre"), recupera: ["b5hu-formes"],
  conceptos: {
    "b6gr-genres": { n: "géneros: le roman (novela; no «une romance», que es una canción sentimental), la nouvelle (relato breve: Maupassant, Boule de suif), la poésie, le théâtre (didascalies: indicaciones en cursiva sobre gestos, decorados, entradas; une tirade: réplica larga), l'essai; ejemplos: Le Cid y Tartuffe (théâtre), Madame Bovary y Germinal (roman), Les Fleurs du mal y Les Contemplations (poésie), Les Essais y Le Mythe de Sisyphe (essai)", b: "gr" },
    "b6gr-registres": { n: "registros (efecto sobre el lector): tragique (un héroe aplastado por la fatalidad), pathétique (suscitar la piedad), épique (exaltar hazañas heroicas: hipérboles, plurales), satirique (criticar una sociedad burlándose), polémique (atacar de frente a un adversario: un pamphlet), lyrique (expresar sentimientos personales); justificar con indicios del texto", b: "gr" }
  },
  video: {
    titulo: "Géneros y registros", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "genre · registre", seg: [
        { es: "Hola. Dos preguntas antes de comentar un texto: su forma y su efecto." } ] },
      { v: "frase", filas: [
          { nota: "relato breve", p: 1, partes: [["Maupassant, maître de la nouvelle.", "-", 1]] },
          { nota: "trágico", p: 2, partes: [["« Ô rage ! ô désespoir ! » : registre tragique.", "-", 2]] },
          { nota: "polémico", p: 3, partes: [["Un pamphlet polémique.", "-", 3]] } ], seg: [
        { fr: "Maupassant, maître de la nouvelle.", p: 1 }, { fr: "Ô rage ! ô désespoir ! Registre tragique.", p: 2 }, { fr: "Un pamphlet polémique.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Novela» en francés es…", o: ["un roman", "une romance"], a: 0, es: true,
        bien: "¡Sí! Une romance es una canción sentimental.", mal: "Novela = un roman.",
        seg: [ { es: "Pausa. Un roman." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le roman", "la nouvelle", "les didascalies", "le registre tragique", "le registre pathétique", "le registre polémique"], seg: [
        { es: "Formas y efectos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Primera clase de literatura", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia abre el curso de literatura con un ejercicio de reconocimiento.",
    pj: PJ,
    lineas: [
      ["sofia", "Avant de commenter un texte, posez-vous deux questions : de quel genre relève-t-il, et quel registre domine ? Le genre, c'est la forme ; le registre, c'est l'effet sur le lecteur.", "Antes de comentar un texto, háganse dos preguntas: ¿de qué género es y qué registro domina? El género es la forma; el registro es el efecto en el lector."],
      ["camila", "Ici, il y a des noms de personnages et des indications en italique… — Ce sont des didascalies : le texte relève du genre théâtral. Et ce personnage parle trente vers sans être interrompu : c'est une tirade.", "Aquí hay nombres de personajes e indicaciones en cursiva… — Son didascalias: el texto pertenece al género teatral. Y este personaje habla treinta versos sin que lo interrumpan: es una tirada."],
      ["sofia", "« Ô rage ! ô désespoir ! » : le héros est écrasé par la fatalité, c'est le registre tragique. Si le texte cherche surtout à susciter la pitié, on parle de registre pathétique.", "«¡Oh rabia! ¡oh desesperación!»: el héroe está aplastado por la fatalidad, es el registro trágico. Si el texto busca sobre todo suscitar la piedad, se habla de registro patético."],
      ["camila", "Et Maupassant a écrit une romance ? — Non : il est surtout célèbre pour ses nouvelles, des récits brefs comme Boule de suif. Une romance, c'est une chanson sentimentale !", "¿Y Maupassant escribió una romance? — No: es célebre sobre todo por sus nouvelles, relatos breves como Bola de sebo. ¡Una romance es una canción sentimental!"]
    ],
    fijate: "Fíjate: le genre (la forme), le registre (l'effet), les didascalies, une tirade, le registre tragique (la fatalité), le registre pathétique (la pitié), la nouvelle (récit bref), une romance ≠ un roman."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Géneros y registros",
      idea: "El género es la forma del texto: le roman (novela; no «une romance», que es una canción sentimental), la nouvelle (relato breve, como los de Maupassant), la poésie, le théâtre (con didascalies, indicaciones en cursiva, y tirades, réplicas largas) y l'essai. El registro es el efecto que busca en el lector: tragique (un héroe aplastado por la fatalidad), pathétique (suscitar la piedad), épique (exaltar hazañas heroicas, con hipérboles y plurales), satirique (criticar una sociedad burlándose), polémique (atacar de frente a un adversario, como en un pamphlet), lyrique (expresar sentimientos personales). Siempre hay que justificar con indicios del texto.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["théâtral", "el género de un texto con didascalias", "théâtre"],
        ["lyrique", "el registro de los sentimientos personales", "registre"],
        ["polémique", "el registro del ataque directo", "registre"],
        ["Je commence toujours par lire les didascalies : ces indications en italique précisent les gestes. · didascalies", "Siempre empiezo leyendo las didascalias.", "théâtre"],
        ["Maupassant est surtout célèbre pour ses nouvelles : des récits brefs comme Boule de suif. · nouvelles", "Maupassant es célebre por sus relatos breves.", "roman"],
        ["tragique = montrer un héros écrasé par la fatalité · pathétique = susciter la pitié du lecteur · épique = exalter des exploits héroïques · satirique = critiquer une société en s'en moquant · polémique = attaquer de front un adversaire · lyrique = exprimer des sentiments personnels", "registros", "resumen"],
        ["Le Cid (Corneille) · Tartuffe (Molière)", "obras de teatro", "théâtre"],
        ["roman · nouvelle · poésie · théâtre · essai", "los géneros", "genres"],
        ["Madame Bovary (Flaubert) · Germinal (Zola)", "novelas", "roman"],
        ["Les Fleurs du mal (Baudelaire) · Les Contemplations (Hugo)", "poemarios", "poésie"],
        ["Les Essais (Montaigne) · Le Mythe de Sisyphe (Camus)", "ensayos", "essai"],
        ["Le registre pathétique vise avant tout à susciter la pitié du lecteur. · pathétique", "El registro patético busca suscitar la piedad.", "registre"],
        ["Face aux autres personnages, Alceste se lance dans une longue tirade de trente vers. · tirade", "Alceste lanza una larga tirada de treinta versos.", "théâtre"],
        ["Le registre épique grandit le héros grâce aux hyperboles et aux pluriels", "El registro épico engrandece al héroe", "registre"]
      ]],
      ej: [["Maupassant, maître de la nouvelle", "Maupassant, maestro del relato breve"], ["« Ô rage ! ô désespoir ! » → théâtre, registre tragique", "teatro, registro trágico"], ["un pamphlet polémique", "un panfleto polémico"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Maupassant a écrit une romance.", "Maupassant a écrit un roman / des nouvelles.", "Romance es una canción sentimental."], ["Le registre lyrique vise à susciter la pitié.", "Le registre pathétique vise à susciter la pitié.", "Lírico = sentimientos personales."], ["un registre sans justification", "un registre justifié par des indices du texte", "Siempre con indicios."]] }
  ],
  ejemplos: [
    { sit: "«Ô rage ! ô désespoir !»: el héroe aplastado por la fatalidad. Registro:", resp: "tragique", pasos: ["Fatalidad."], porque: "Registro." },
    { sit: "Un texto que critica una sociedad burlándose de ella:", resp: "satirique", pasos: ["Burla crítica."], porque: "Registro." },
    { sit: "Germinal (Zola) pertenece al género…", resp: "roman", pasos: ["Relato largo."], porque: "Género." }
  ],
  comprueba: [
    { q: "«La nouvelle» es…", o: ["un relato breve", "una novela larga"], a: 0, b: "gr", porque: "Maupassant." },
    { q: "El registro épico…", o: ["exalta hazañas heroicas", "suscita la piedad"], a: 0, b: "gr", porque: "Héroes." },
    { q: "Les Fleurs du mal es…", o: ["poesía", "teatro"], a: 0, b: "gr", porque: "Baudelaire." }
  ],
  practica: [
    { fase: "guiada", c: ["b6gr-genres"], k: "sort", ask: "Clasifica cada obra por su género.", q: "Clasifica.", cats: ["théâtre", "roman", "poésie", "essai"], items: [["Le Cid (Corneille)", 0], ["Tartuffe (Molière)", 0], ["Madame Bovary (Flaubert)", 1], ["Germinal (Zola)", 1], ["Les Fleurs du mal (Baudelaire)", 2], ["Les Contemplations (Hugo)", 2], ["Les Essais (Montaigne)", 3], ["Le Mythe de Sisyphe (Camus)", 3]], pista: "¿Escena, relato, verso o reflexión?", why: "Géneros." },
    { fase: "guiada", c: ["b6gr-registres"], k: "match", ask: "Une cada registro con su efecto.", q: "Registro → efecto", pairs: [["tragique", "montrer un héros écrasé par la fatalité"], ["pathétique", "susciter la pitié du lecteur"], ["épique", "exalter des exploits héroïques"], ["satirique", "critiquer une société en s'en moquant"], ["polémique", "attaquer de front un adversaire"], ["lyrique", "exprimer des sentiments personnels"]], pista: "Piensa en el efecto sobre el lector.", why: "Registros." },
    { fase: "guiada", c: ["b6gr-genres"], k: "fill", ask: "Indicaciones en cursiva del teatro.", q: "Je commence toujours par lire les ___ : ces indications en italique précisent les gestes.", acc: ["didascalies"], pista: "didas…", why: "<b>didascalies</b>." },
    { fase: "indep", c: ["b6gr-registres"], k: "spot", ask: "Encuentra el registro equivocado.", s: "Le registre [lyrique] vise avant tout à susciter la pitié du lecteur .", fix: "pathétique", why: "<b>pathétique</b>." },
    { fase: "indep", c: ["b6gr-genres"], k: "choice", ask: "Maupassant es célebre sobre todo por sus…", q: "«Maupassant est surtout célèbre pour ses ___ : des récits brefs comme Boule de suif.»", o: ["nouvelles", "romances"], a: 0, why: "<b>nouvelles</b>." },
    { fase: "indep", c: ["b6gr-registres"], k: "choice", ask: "Un poema que expresa la tristeza personal del poeta:", q: "Elige.", o: ["lyrique", "polémique"], a: 0, why: "Lírico." },
    { fase: "aplica", c: ["b6gr-genres"], k: "fill", ask: "Una réplica muy larga en el teatro.", q: "Face aux autres personnages, Alceste se lance dans une longue ___ de trente vers.", acc: ["tirade"], why: "<b>tirade</b>." },
    { fase: "aplica", c: ["b6gr-genres"], k: "choice", ask: "Un texto con nombres de personajes y didascalias es…", q: "Elige.", o: ["théâtral", "poétique"], a: 0, why: "Teatro." },
    { fase: "aplica", c: ["b6gr-registres"], k: "choice", ask: "Un panfleto que ataca de frente al gobierno:", q: "Elige.", o: ["polémique", "lyrique"], a: 0, why: "Polémico." },
    { fase: "dominio", c: ["b6gr-registres"], k: "order", ask: "Ordena la frase.", tokens: ["Le registre épique", "grandit le héros", "grâce aux hyperboles et aux pluriels"], why: "<b>Le registre épique grandit le héros grâce aux hyperboles et aux pluriels</b>" },
    { fase: "dominio", c: ["b6gr-genres"], k: "spot", ask: "Encuentra el falso amigo.", s: "Flaubert a passé cinq ans à écrire [une romance] : Madame Bovary .", fix: "un roman", why: "<b>un roman</b>." },
    { fase: "dominio", c: ["b6gr-registres", "b6gr-genres"], k: "listen", say: "Le registre pathétique vise avant tout à susciter la pitié du lecteur.", acc: ["Le registre pathétique vise avant tout à susciter la pitié du lecteur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le registre pathétique vise avant tout à susciter la pitié du lecteur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Maupassant", "Boule de suif", "Corneille", "Le Cid", "Molière", "Tartuffe", "Flaubert", "Madame Bovary", "Zola", "Germinal", "Baudelaire", "Les Fleurs du mal", "Hugo", "Les Contemplations", "Montaigne", "Les Essais", "Camus", "Le Mythe de Sisyphe", "Alceste"], previo: [] }
};

/* ── 2. Les figures de style ── */
E["lit-figures-style"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les figures de style",
  objetivo: {
    que: "Vas a nombrar con precisión las figuras de estilo y a explicar su efecto con el esquema cita → recurso → efecto.",
    corto: "« La Nature est un temple » : métaphore. · « cette obscure clarté » : oxymore. · « Va, je ne te hais point » : litote.",
    podras: ["Distinguir figuras de analogía: la comparaison (con outil: comme, tel, semblable à), la métaphore (sin outil), la personnification.", "Distinguir figuras de oposición (antithèse, oxymore, chiasme) y de atenuación o insistencia (litote, euphémisme, hyperbole, anaphore, gradation).", "Comentar con el esquema citation → procédé → effet."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/flor"],
    previos: ["Los géneros y los registros (lección 1) y las expresiones idiomáticas (C1.2, lección 9)."],
    capacidad: "Ahora nombras la figura exacta y explicas lo que produce en el texto."
  },
  requiere: R("b6gr-registres", "b5ei-sens"), recupera: ["b6gr-registres"],
  conceptos: {
    "b6fs-analogie": { n: "analogía: la comparaison (con un outil de comparaison: comme, tel, pareil à, semblable à: «Le Poète est semblable au prince des nuées»), la métaphore (sin outil: «La Nature est un temple»), la personnification («Sois sage, ô ma Douleur»); en el comentario: citation → procédé → effet", b: "gr" },
    "b6fs-opposition": { n: "oposición: l'antithèse (dos términos opuestos en dos proposiciones distintas), l'oxymore / oxymoron (dos términos contradictorios en el mismo grupo nominal: «cette obscure clarté»), le chiasme (ABBA: «Il faut manger pour vivre et non pas vivre pour manger»); insistencia: l'anaphore («Rome, l'unique objet… / Rome, à qui vient…»), la gradation («Va, cours, vole, et nous venge»), l'hyperbole («Je te l'ai répété mille fois»); atenuación: la litote (decir menos para decir más: «Va, je ne te hais point»), l'euphémisme («Il nous a quittés»)", b: "gr" }
  },
  video: {
    titulo: "Figuras de estilo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "citation → procédé → effet", seg: [
        { es: "Hola. Nombrar la figura y explicar su efecto." } ] },
      { v: "frase", filas: [
          { nota: "metáfora", p: 1, partes: [["« La Nature est un temple »", "-", 1]] },
          { nota: "oxímoron", p: 2, partes: [["« cette obscure clarté »", "-", 2]] },
          { nota: "lítote", p: 3, partes: [["« Va, je ne te hais point »", "-", 3]] } ], seg: [
        { fr: "La Nature est un temple.", p: 1 }, { fr: "Cette obscure clarté.", p: 2 }, { fr: "Va, je ne te hais point.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La Nature est un temple» es…", o: ["una metáfora", "una comparación"], a: 0, es: true,
        bien: "¡Sí! No hay outil de comparación.", mal: "Sin «comme»: metáfora.",
        seg: [ { es: "Pausa. Metáfora." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la comparaison", "la métaphore", "l'oxymore", "l'antithèse", "la litote", "l'anaphore"], seg: [
        { es: "Analogía, oposición y atenuación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Taller de comentario", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia corrige el primer comentario de Camila sobre Baudelaire.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « La Nature est un temple » est une comparaison. — Non, c'est une métaphore : il n'y a pas d'outil de comparaison. Dans « Le Poète est semblable au prince des nuées », en revanche, semblable à introduit une comparaison.", "Escribí: «La Nature est un temple» es una comparación. — No, es una metáfora: no hay herramienta de comparación. En «Le Poète est semblable au prince des nuées», en cambio, semblable à introduce una comparación."],
      ["sofia", "Et repérer la figure ne suffit pas : on suit toujours le schéma citation, procédé, effet. Cette métaphore suggère que le monde est rempli de signes à déchiffrer.", "Y localizar la figura no basta: siempre se sigue el esquema cita, recurso, efecto. Esta metáfora sugiere que el mundo está lleno de signos por descifrar."],
      ["camila", "Et « cette obscure clarté » ? — Deux termes contradictoires dans le même groupe nominal : c'est un oxymore. Si les deux termes opposés sont dans deux propositions distinctes, c'est une antithèse.", "¿Y «cette obscure clarté»? — Dos términos contradictorios en el mismo grupo nominal: es un oxímoron. Si los dos términos opuestos están en dos proposiciones distintas, es una antítesis."],
      ["sofia", "Enfin, Chimène dit à Rodrigue : « Va, je ne te hais point. » Elle dit moins pour faire entendre plus : c'est une litote. Elle veut dire qu'elle l'aime !", "Por último, Jimena le dice a Rodrigo: «Ve, no te odio.» Dice menos para dar a entender más: es una lítote. ¡Quiere decir que lo ama!"]
    ],
    fijate: "Fíjate: une métaphore (sans outil), une comparaison (semblable à), citation → procédé → effet, un oxymore (même groupe nominal), une antithèse (deux propositions), une litote (dire moins pour faire entendre plus)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las figuras y su efecto",
      idea: "Figuras de analogía: la comparaison necesita un outil de comparaison (comme, tel, pareil à, semblable à, ressembler à); la métaphore acerca los términos sin outil («La Nature est un temple»); la personnification da rasgos humanos a una cosa o idea («Sois sage, ô ma Douleur»). Figuras de oposición: l'antithèse opone dos términos en dos proposiciones distintas; l'oxymore los reúne en el mismo grupo nominal («cette obscure clarté»); le chiasme cruza ABBA («Il faut manger pour vivre et non pas vivre pour manger»). Insistencia: l'anaphore (repetición al inicio), la gradation («Va, cours, vole, et nous venge»), l'hyperbole («mille fois»). Atenuación: la litote dice menos para dar a entender más («Va, je ne te hais point»); l'euphémisme suaviza («Il nous a quittés»). En el comentario: citation → procédé → effet.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Familia"], [
        ["une comparaison", "«Le Poète est semblable au prince des nuées»", "analogie"],
        ["une litote", "«Va, je ne te hais point»", "atténuation"],
        ["une gradation", "«Va, cours, vole, et nous venge»", "insistance"],
        ["« Cette obscure clarté qui tombe des étoiles » = oxymore · « Il faut manger pour vivre et non pas vivre pour manger » = chiasme · « Rome, l'unique objet… / Rome, à qui vient… » = anaphore · « Il nous a quittés » = euphémisme · « Je te l'ai répété mille fois » = hyperbole · « La Nature est un temple » = métaphore", "ejemplos", "resumen"],
        ["comparaison · métaphore · personnification", "comparación · metáfora · personificación", "analogie"],
        ["antithèse · oxymore · chiasme", "antítesis · oxímoron · quiasmo", "opposition"],
        ["litote · euphémisme", "lítote · eufemismo", "atténuation"],
        ["Associer dans un même groupe nominal deux termes contradictoires s'appelle un oxymore. · oxymore · oxymoron", "Reunir dos términos contradictorios es un oxímoron.", "opposition"],
        ["Baudelaire recourt à une personnification : la souffrance devient une enfant. · personnification", "Baudelaire recurre a una personificación.", "analogie"],
        ["Parce que les deux termes opposés sont dans deux propositions distinctes.", "por qué es antítesis y no oxímoron", "opposition"],
        ["Dans une comparaison, le mot qui relie le comparé au comparant s'appelle l'outil de comparaison. · outil", "La palabra que une comparado y comparante es el outil.", "analogie"],
        ["Cette métaphore suggère que le monde est rempli de signes à déchiffrer", "Esta metáfora sugiere que el mundo está lleno de signos", "analogie"]
      ]],
      ej: [["« La Nature est un temple » → métaphore", "sin «comme»: metáfora"], ["« cette obscure clarté » → oxymore", "«esta oscura claridad»"], ["« Va, je ne te hais point » → litote", "«No te odio» = te amo"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« La Nature est un temple » = comparaison", "« La Nature est un temple » = métaphore", "Sin herramienta de comparación."], ["oxymore pour deux propositions opposées", "antithèse pour deux propositions opposées", "Oxímoron = mismo grupo."], ["« Il y a une métaphore. » (sans plus)", "citation → procédé → effet", "Siempre explicar el efecto."]] }
  ],
  ejemplos: [
    { sit: "«Le Poète est semblable au prince des nuées»:", resp: "une comparaison", pasos: ["semblable à = outil."], porque: "Analogía." },
    { sit: "«Va, je ne te hais point»:", resp: "une litote", pasos: ["Decir menos."], porque: "Atenuación." },
    { sit: "«Va, cours, vole, et nous venge»:", resp: "une gradation", pasos: ["Intensidad creciente."], porque: "Insistencia." }
  ],
  comprueba: [
    { q: "El quiasmo sigue el esquema…", o: ["ABBA", "AABB"], a: 0, b: "gr", porque: "Cruce." },
    { q: "«Il nous a quittés» (ha muerto) es…", o: ["un eufemismo", "una hipérbole"], a: 0, b: "gr", porque: "Atenuación." },
    { q: "La anáfora es…", o: ["una repetición al inicio", "una oposición"], a: 0, b: "gr", porque: "Insistencia." }
  ],
  practica: [
    { fase: "guiada", c: ["b6fs-analogie", "b6fs-opposition"], k: "sort", ask: "Clasifica cada figura por familia.", q: "Clasifica.", cats: ["analogie", "opposition", "atténuation"], items: [["comparaison", 0], ["métaphore", 0], ["personnification", 0], ["antithèse", 1], ["oxymore", 1], ["chiasme", 1], ["litote", 2], ["euphémisme", 2]], pista: "¿Acerca, opone o atenúa?", why: "Familias." },
    { fase: "guiada", c: ["b6fs-analogie"], k: "choice", ask: "«Le Poète est semblable au prince des nuées»:", q: "¿Qué figura?", o: ["une comparaison", "une métaphore"], a: 0, pista: "Busca el outil.", why: "Comparación." },
    { fase: "guiada", c: ["b6fs-opposition"], k: "fill", ask: "Dos términos contradictorios en el mismo grupo.", q: "Associer dans un même groupe nominal deux termes contradictoires, comme « obscure clarté », s'appelle un ___ .", acc: ["oxymore", "oxymoron"], pista: "oxy…", why: "<b>oxymore</b>." },
    { fase: "indep", c: ["b6fs-opposition"], k: "match", ask: "Une cada cita con su figura.", q: "Cita → figura", pairs: [["« Cette obscure clarté qui tombe des étoiles »", "oxymore"], ["« Il faut manger pour vivre et non pas vivre pour manger »", "chiasme"], ["« Rome, l'unique objet… / Rome, à qui vient… »", "anaphore"], ["« Il nous a quittés »", "euphémisme"], ["« Je te l'ai répété mille fois »", "hyperbole"], ["« La Nature est un temple »", "métaphore"]], why: "Figuras." },
    { fase: "indep", c: ["b6fs-analogie"], k: "spot", ask: "Encuentra la figura mal nombrada.", s: "Dans « Sois sage , ô ma Douleur » , Baudelaire recourt à une [comparaison] : la souffrance devient une enfant .", fix: "personnification", why: "<b>personnification</b>." },
    { fase: "indep", c: ["b6fs-opposition"], k: "choice", ask: "«Va, je ne te hais point»:", q: "¿Qué figura?", o: ["une litote", "une hyperbole"], a: 0, why: "Lítote." },
    { fase: "aplica", c: ["b6fs-opposition"], k: "choice", ask: "«Va, cours, vole, et nous venge»:", q: "¿Qué figura?", o: ["une gradation", "un chiasme"], a: 0, why: "Gradación." },
    { fase: "aplica", c: ["b6fs-opposition"], k: "choice", ask: "¿Por qué se habla de antítesis y no de oxímoron?", q: "Elige.", o: ["Parce que les deux termes opposés sont dans deux propositions distinctes.", "Parce qu'il n'y a pas d'outil de comparaison."], a: 0, why: "Dos proposiciones." },
    { fase: "aplica", c: ["b6fs-analogie"], k: "fill", ask: "Herramienta (sustantivo).", q: "Dans une comparaison, le mot qui relie le comparé au comparant (comme, tel, pareil à…) s'appelle l'___ de comparaison.", acc: ["outil"], why: "<b>outil</b>." },
    { fase: "dominio", c: ["b6fs-analogie"], k: "order", ask: "Ordena el comentario.", tokens: ["Cette métaphore suggère", "que le monde est rempli", "de signes à déchiffrer"], why: "<b>Cette métaphore suggère que le monde est rempli de signes à déchiffrer</b>" },
    { fase: "dominio", c: ["b6fs-analogie"], k: "spot", ask: "Encuentra la figura mal nombrada.", s: "« La Nature est un temple » est une [comparaison] .", fix: "métaphore", why: "<b>métaphore</b>: sin outil." },
    { fase: "dominio", c: ["b6fs-analogie", "b6fs-opposition"], k: "listen", say: "Associer dans un même groupe nominal deux termes contradictoires s'appelle un oxymore.", acc: ["Associer dans un même groupe nominal deux termes contradictoires s'appelle un oxymore.", "Associer dans un même groupe nominal deux termes contradictoires s'appelle un oxymoron."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Associer dans un même groupe nominal deux termes contradictoires s'appelle un oxymore.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Baudelaire", "Chimène", "Rodrigue", "Corneille", "Rome", "Nature", "Poète", "Douleur"], previo: [] }
};

/* ── 3. La versification et le commentaire ── */
E["lit-versification-commentaire"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La versification et le commentaire",
  objetivo: {
    que: "Vas a contar sílabas en el verso francés, reconocer rimas y estrofas, y construir la introducción de un comentario.",
    corto: "Ro-me-l'u-ni-qu'ob-jet : 6 syllabes. · AABB, ABAB, ABBA. · citation → procédé → effet.",
    podras: ["Contar sílabas: alexandrin de 12 sílabas con césure (6 // 6); la e muda se cuenta ante consonante, se elide ante vocal y nunca cuenta al final del verso.", "Reconocer rimas (plates AABB, croisées ABAB, embrassées ABBA; pauvre, suffisante, riche) y formas (quatrain, tercet, sonnet; enjambement).", "Construir la introducción: amorce, présentation du texte, problématique, annonce du plan."],
    iconos: ["ic2/lapiz", "ic2/nota", "ic2/libro"],
    previos: ["Las figuras de estilo (lección 2) y la e muda (Fonética, lección 10)."],
    capacidad: "Ahora analizas la forma de un poema y presentas tu comentario con método."
  },
  requiere: R("b6fs-analogie", "b6gr-genres"), recupera: ["b6fs-analogie"],
  conceptos: {
    "b6vc-vers": { n: "l'alexandrin = 12 sílabas (no 14), con la césure en la mitad: dos hémistiches (6 // 6); la e muda: se cuenta ante consonante, se elide ante vocal (Ro-me-l'u-ni-qu'ob-jet = 6), nunca cuenta al final del verso; rimes plates (AABB), croisées (ABAB), embrassées (ABBA); rima pauvre (1 sonido: ami / joli), suffisante (2: sage / page), riche (3 o más: ombre / sombre); rime féminine (termina en e muda); quatrain (4 versos), tercet (3); le sonnet = 2 quatrains + 2 tercets (14 versos); enjambement (la frase desborda al verso siguiente)", b: "gr" },
    "b6vc-commentaire": { n: "introducción del comentario: l'amorce, la présentation du texte, la problématique (una verdadera pregunta: «Comment le poète transforme-t-il la douleur du deuil en chant poétique ?»), l'annonce du plan; en cada subparte: citation → procédé → effet sur le lecteur", b: "gr" }
  },
  video: {
    titulo: "Versificación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "6 // 6", seg: [
        { es: "Hola. El ritmo y la rima también crean sentido." } ] },
      { v: "frase", filas: [
          { nota: "e elidida", p: 1, partes: [["Ro-me-l'u-ni-qu'ob-jet : 6 syllabes.", "-", 1]] },
          { nota: "rimas", p: 2, partes: [["AABB, ABAB, ABBA.", "-", 2]] },
          { nota: "método", p: 3, partes: [["citation → procédé → effet", "-", 3]] } ], seg: [
        { fr: "Rome, l'unique objet : six syllabes.", p: 1 }, { fr: "Rimes plates, croisées, embrassées.", p: 2 }, { fr: "Citation, procédé, effet.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La e muda al final del verso…", o: ["nunca cuenta", "siempre cuenta"], a: 0, es: true,
        bien: "¡Sí! Ni ante vocal.", mal: "Al final del verso nunca cuenta.",
        seg: [ { es: "Pausa. Nunca cuenta." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'alexandrin", "la césure", "l'hémistiche", "le sonnet", "les rimes embrassées", "la problématique"], seg: [
        { es: "Sílabas, rimas, formas y método.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Contar sílabas", img: "bg-biblioteca", yo: "camila",
    escena: "Camila cuenta las sílabas de un verso de Corneille con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "« Rome, l'unique objet » : Ro-me-l'u-ni-que-ob-jet, sept syllabes ? — Non : le e muet se prononce devant consonne, mais il s'élide devant voyelle. Ro-me-l'u-ni-qu'ob-jet : six syllabes.", "«Rome, l'unique objet»: Ro-me-l'u-ni-que-ob-jet, ¿siete sílabas? — No: la e muda se pronuncia ante consonante, pero se elide ante vocal. Ro-me-l'u-ni-qu'ob-jet: seis sílabas."],
      ["sofia", "C'est exactement un hémistiche, la moitié d'un alexandrin : en poésie française, l'alexandrin compte douze syllabes réparties en deux hémistiches, avec une césure au milieu. Et en fin de vers, le e muet ne compte jamais.", "Es exactamente un hemistiquio, la mitad de un alejandrino: en poesía francesa, el alejandrino tiene doce sílabas repartidas en dos hemistiquios, con una cesura en el medio. Y al final del verso la e muda nunca cuenta."],
      ["camila", "Et ce poème de quatorze vers ? — Deux quatrains et deux tercets : c'est un sonnet. Regarde les rimes du premier quatrain : ABBA, ce sont des rimes embrassées.", "¿Y este poema de catorce versos? — Dos cuartetos y dos tercetos: es un soneto. Mira las rimas del primer cuarteto: ABBA, son rimas abrazadas."],
      ["sofia", "Pour l'introduction du commentaire : l'amorce, la présentation du texte, la problématique, l'annonce du plan. Et une vraie problématique est une question : « Comment le poète transforme-t-il la douleur du deuil en chant poétique ? »", "Para la introducción del comentario: el gancho, la presentación del texto, la problemática, el anuncio del plan. Y una verdadera problemática es una pregunta: «¿Cómo transforma el poeta el dolor del duelo en canto poético?»"]
    ],
    fijate: "Fíjate: le e muet (se prononce devant consonne, s'élide devant voyelle, ne compte jamais en fin de vers), l'hémistiche, l'alexandrin (douze syllabes), la césure, le sonnet, les rimes embrassées, l'amorce, la problématique, l'annonce du plan."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Verso y comentario",
      idea: "El alejandrino tiene 12 sílabas, con la cesura en la mitad: dos hemistiquios (6 // 6). La e muda se cuenta delante de consonante, se elide delante de vocal (Ro-me-l'u-ni-qu'ob-jet = 6 sílabas) y nunca cuenta al final del verso. Rimas: plates (AABB), croisées (ABAB), embrassées (ABBA); pobre (1 sonido común: ami / joli), suficiente (2: sage / page), rica (3 o más: ombre / sombre); rima femenina: termina en e muda. Estrofas: quatrain (4 versos), tercet (3); el sonnet tiene 2 cuartetos + 2 tercetos. Enjambement: la frase desborda al verso siguiente. Introducción del comentario: l'amorce, la présentation du texte, la problématique (una verdadera pregunta), l'annonce du plan; en cada subparte, citation → procédé → effet.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["12", "las sílabas de «Le jour n'est pas plus pur que le fond de mon cœur»", "vers"],
        ["6", "las sílabas de «Rome, l'unique objet»", "vers"],
        ["embrassées", "las rimas ABBA", "rimes"],
        ["Ce poème de quatorze vers, composé de deux quatrains et de deux tercets, est un sonnet. · sonnet", "Este poema de catorce versos es un soneto.", "formes"],
        ["césure = pause principale au milieu de l'alexandrin · hémistiche = moitié d'un alexandrin · quatrain = strophe de quatre vers · tercet = strophe de trois vers · enjambement = phrase qui déborde sur le vers suivant · rime féminine = rime terminée par un e muet", "vocabulario", "resumen"],
        ["ami / joli · vu / perdu", "rimas de un sonido", "pauvre (1 son)"],
        ["sage / page · rose / chose", "rimas de dos sonidos", "suffisante (2 sons)"],
        ["fleur / pleur · ombre / sombre", "rimas de tres sonidos o más", "riche (3 sons ou plus)"],
        ["En poésie française, l'alexandrin compte douze syllabes réparties en deux hémistiches. · douze", "El alejandrino tiene doce sílabas.", "vers"],
        ["l'amorce · la présentation du texte · la problématique · l'annonce du plan", "las cuatro etapas de la introducción", "commentaire"],
        ["Comment le poète transforme-t-il la douleur du deuil en chant poétique ?", "una verdadera problemática", "commentaire"],
        ["Dans chaque sous-partie, on relie une citation, le procédé repéré et son effet sur le lecteur. · effet", "En cada subparte se une cita, recurso y efecto.", "commentaire"]
      ]],
      ej: [["Ro-me-l'u-ni-qu'ob-jet (6 syllabes)", "la e se elide ante vocal"], ["AABB, ABAB, ABBA", "rimas plates, croisées, embrassées"], ["citation → procédé → effet", "cita → recurso → efecto"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ro-me-l'u-ni-que-ob-jet (7)", "Ro-me-l'u-ni-qu'ob-jet (6)", "La e se elide ante vocal."], ["compter le e muet en fin de vers", "le e muet ne compte jamais en fin de vers", "Regla fija."], ["Problématique : « Le poème parle du deuil. »", "« Comment le poète transforme-t-il la douleur du deuil en chant poétique ? »", "Una verdadera pregunta."]] }
  ],
  ejemplos: [
    { sit: "«Le jour n'est pas plus pur que le fond de mon cœur»: ¿cuántas sílabas?", resp: "12", pasos: ["Alejandrino."], porque: "Verso." },
    { sit: "Rimas ABBA:", resp: "embrassées", pasos: ["Abrazadas."], porque: "Rimas." },
    { sit: "«Rome, l'unique objet»: ¿cuántas sílabas?", resp: "6", pasos: ["Elisión."], porque: "Verso." }
  ],
  comprueba: [
    { q: "Un soneto tiene…", o: ["14 versos", "12 versos"], a: 0, b: "gr", porque: "2 cuartetos + 2 tercetos." },
    { q: "La cesura divide el alejandrino en…", o: ["dos hemistiquios", "dos estrofas"], a: 0, b: "gr", porque: "6 // 6." },
    { q: "«Ombre / sombre» es una rima…", o: ["rica", "pobre"], a: 0, b: "gr", porque: "Tres sonidos o más." }
  ],
  practica: [
    { fase: "guiada", c: ["b6vc-vers"], k: "sort", ask: "Clasifica cada rima por su riqueza.", q: "Clasifica.", cats: ["pauvre (1 son)", "suffisante (2 sons)", "riche (3 sons ou plus)"], items: [["ami / joli", 0], ["vu / perdu", 0], ["sage / page", 1], ["rose / chose", 1], ["fleur / pleur", 2], ["ombre / sombre", 2]], pista: "Cuenta los sonidos comunes al final.", why: "Rimas." },
    { fase: "guiada", c: ["b6vc-vers"], k: "choice", ask: "«Le jour n'est pas plus pur que le fond de mon cœur»: ¿cuántas sílabas?", q: "Elige.", o: ["12", "13"], a: 0, pista: "Un alejandrino.", why: "12." },
    { fase: "guiada", c: ["b6vc-vers"], k: "fill", ask: "La forma de 14 versos.", q: "Ce poème de quatorze vers, composé de deux quatrains et de deux tercets, est un ___ .", acc: ["sonnet"], pista: "son…", why: "<b>sonnet</b>." },
    { fase: "indep", c: ["b6vc-vers"], k: "match", ask: "Une cada término con su definición.", q: "Término → definición", pairs: [["césure", "pause principale au milieu de l'alexandrin"], ["hémistiche", "moitié d'un alexandrin"], ["quatrain", "strophe de quatre vers"], ["tercet", "strophe de trois vers"], ["enjambement", "phrase qui déborde sur le vers suivant"], ["rime féminine", "rime terminée par un e muet"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6vc-vers"], k: "spot", ask: "Encuentra el error.", s: "En poésie française , l'alexandrin compte [quatorze] syllabes réparties en deux hémistiches .", fix: "douze", why: "<b>douze</b>." },
    { fase: "indep", c: ["b6vc-vers"], k: "choice", ask: "Rimas ABBA:", q: "Elige.", o: ["embrassées", "croisées"], a: 0, why: "Abrazadas." },
    { fase: "aplica", c: ["b6vc-commentaire"], k: "order", ask: "Ordena las etapas de la introducción.", tokens: ["l'amorce", "la présentation du texte", "la problématique", "l'annonce du plan"], why: "<b>l'amorce · la présentation du texte · la problématique · l'annonce du plan</b>" },
    { fase: "aplica", c: ["b6vc-vers"], k: "choice", ask: "«Rome, l'unique objet»: ¿cuántas sílabas?", q: "Elige.", o: ["6", "7"], a: 0, why: "Ro-me-l'u-ni-qu'ob-jet." },
    { fase: "aplica", c: ["b6vc-commentaire"], k: "choice", ask: "¿Qué formulación es una verdadera problemática?", q: "Elige.", o: ["Comment le poète transforme-t-il la douleur du deuil en chant poétique ?", "Le poème parle du deuil."], a: 0, why: "Una pregunta." },
    { fase: "dominio", c: ["b6vc-commentaire"], k: "fill", ask: "El tercer elemento del esquema.", q: "Dans chaque sous-partie, on relie une citation, le procédé repéré et son ___ sur le lecteur.", acc: ["effet"], why: "<b>effet</b>." },
    { fase: "dominio", c: ["b6vc-vers"], k: "spot", ask: "Encuentra el error.", s: "En fin de vers , le e muet [compte toujours] .", fix: "ne compte jamais", why: "<b>ne compte jamais</b>." },
    { fase: "dominio", c: ["b6vc-vers", "b6vc-commentaire"], k: "listen", say: "En poésie française, l'alexandrin compte douze syllabes réparties en deux hémistiches.", acc: ["En poésie française, l'alexandrin compte douze syllabes réparties en deux hémistiches.", "En poésie française, l'alexandrin compte 12 syllabes réparties en deux hémistiches."], num: true, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En poésie française, l'alexandrin compte douze syllabes réparties en deux hémistiches.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Corneille", "Rome"], previo: [] }
};

/* ── 4. Le classicisme et les Lumières ── */
E["lit-classicisme-lumieres"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le classicisme et les Lumières",
  objetivo: {
    que: "Vas a distinguir el clasicismo del siglo XVII y las Luces del siglo XVIII, con sus autores y obras.",
    corto: "Tartuffe (Molière) dénonce l'hypocrisie religieuse. · Candide, conte philosophique. · De l'esprit des lois (1748).",
    podras: ["Situar el clasicismo (XVII, Luis XIV): Corneille (Le Cid, el dilemme cornélien), Racine (Phèdre), Molière (Tartuffe, Le Misanthrope), La Fontaine (Fables, la morale); la règle des trois unités (lieu, temps, action).", "Situar las Luces (XVIII): Voltaire (Candide, 1759, contra el optimismo de Leibniz), Montesquieu (Lettres persanes; De l'esprit des lois, 1748), Rousseau, l'Encyclopédie.", "No confundir: las Luces son el siglo XVIII."],
    iconos: ["ic2/libros", "ic2/pergamino", "ic2/nota"],
    previos: ["Luis XIV y el Gran Siglo (C1.2, lección 19) y los filósofos de la Ilustración (C1.2, lección 44)."],
    capacidad: "Ahora sitúas cualquier obra de los siglos XVII y XVIII en su movimiento."
  },
  requiere: R("b5lx-siecle", "b5pl-auteurs", "b6gr-genres"), recupera: ["b5pl-auteurs"],
  conceptos: {
    "b6cl-classicisme": { n: "le classicisme (siglo XVII, bajo Luis XIV): reglas, orden, razón; Corneille (Le Cid; le dilemme cornélien: elegir entre el amor y el deber), Racine (Phèdre), Molière (Tartuffe denuncia l'hypocrisie religieuse; Le Misanthrope), La Fontaine (Fables; la morale: «La raison du plus fort est toujours la meilleure»); la règle des trois unités: unité de lieu, de temps, d'action (no de registro)", b: "gr" },
    "b6cl-lumieres": { n: "les Lumières (siglo XVIII, no XVII): razón, tolerancia, crítica del poder; Voltaire: Candide (1759), conte philosophique contra el optimismo de Leibniz (defendido por el preceptor Pangloss), «Il faut cultiver notre jardin»; Montesquieu: Lettres persanes, De l'esprit des lois (1748: la séparation des pouvoirs); Rousseau: Du contrat social; l'Encyclopédie", b: "gr" }
  },
  video: {
    titulo: "Clasicismo y Luces", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "XVIIe · XVIIIe", seg: [
        { es: "Hola. Dos siglos, dos herencias." } ] },
      { v: "frase", filas: [
          { nota: "Molière", p: 1, partes: [["Tartuffe dénonce l'hypocrisie religieuse.", "-", 1]] },
          { nota: "Voltaire", p: 2, partes: [["Candide, conte philosophique.", "-", 2]] },
          { nota: "1748", p: 3, partes: [["De l'esprit des lois (1748).", "-", 3]] } ], seg: [
        { fr: "Tartuffe dénonce l'hypocrisie religieuse.", p: 1 }, { fr: "Candide, conte philosophique.", p: 2 }, { fr: "De l'esprit des lois, mille sept cent quarante-huit.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Las Luces son del siglo…", o: ["XVIII", "XVII"], a: 0, es: true,
        bien: "¡Sí! El XVII es el clasicismo.", mal: "XVIII; el XVII es el clasicismo.",
        seg: [ { es: "Pausa. Siglo dieciocho." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le classicisme", "les trois unités", "le dilemme cornélien", "la morale", "les Lumières", "Candide"], seg: [
        { es: "Reglas y razón crítica.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Repaso antes del parcial", img: "bg-biblioteca", yo: "camila",
    escena: "Camila repasa con Madame Sofia los siglos XVII y XVIII.",
    pj: PJ,
    lineas: [
      ["camila", "Le Cid, Phèdre, Tartuffe… c'est le classicisme ? — Oui, le XVIIe siècle, sous Louis XIV. Au théâtre, on respecte la règle des trois unités : unité de lieu, de temps et d'action.", "Le Cid, Fedra, Tartufo… ¿es el clasicismo? — Sí, el siglo XVII, bajo Luis XIV. En el teatro se respeta la regla de las tres unidades: unidad de lugar, de tiempo y de acción."],
      ["sofia", "Dans Le Cid, Rodrigue doit choisir entre son amour pour Chimène et l'honneur de son père : c'est un dilemme cornélien. Et Molière, dans Tartuffe, dénonce surtout l'hypocrisie religieuse.", "En El Cid, Rodrigo debe elegir entre su amor por Jimena y el honor de su padre: es un dilema corneliano. Y Molière, en Tartufo, denuncia sobre todo la hipocresía religiosa."],
      ["camila", "Et les Lumières, c'est aussi le XVIIe ? — Non, le XVIIIe siècle ! Voltaire publie Candide en 1759 : dans ce conte philosophique, il tourne en dérision l'optimisme de Leibniz, que défend le précepteur Pangloss.", "¿Y las Luces también son del XVII? — ¡No, del XVIII! Voltaire publica Cándido en 1759: en este cuento filosófico ridiculiza el optimismo de Leibniz, que defiende el preceptor Pangloss."],
      ["sofia", "La conclusion de Candide est célèbre : « Il faut cultiver notre jardin. » Et Montesquieu, dans De l'esprit des lois, en 1748, développe la séparation des pouvoirs.", "La conclusión de Cándido es célebre: «Hay que cultivar nuestro jardín.» Y Montesquieu, en El espíritu de las leyes, en 1748, desarrolla la separación de poderes."]
    ],
    fijate: "Fíjate: le classicisme (XVIIe siècle), la règle des trois unités, un dilemme cornélien, l'hypocrisie religieuse, les Lumières (XVIIIe siècle), Candide (1759), l'optimisme de Leibniz, Pangloss, « Il faut cultiver notre jardin », la séparation des pouvoirs."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos siglos, dos movimientos",
      idea: "El siglo XVII es el del clasicismo, que florece bajo Luis XIV: reglas, orden y razón. En el teatro se respeta la regla de las tres unidades (lugar, tiempo, acción). Autores: Corneille (Le Cid, con el dilemme cornélien entre amor y deber), Racine (Phèdre), Molière (Tartuffe, que denuncia la hipocresía religiosa; Le Misanthrope), La Fontaine (Fables, cuya lección se llama la morale: «La raison du plus fort est toujours la meilleure»). El siglo XVIII es el de las Luces: razón, tolerancia y crítica del poder. Voltaire publica Candide (1759), conte philosophique que ridiculiza el optimismo de Leibniz, defendido por Pangloss («Il faut cultiver notre jardin»). Montesquieu: Lettres persanes y De l'esprit des lois (1748, la separación de poderes). Rousseau: Du contrat social. Diderot: l'Encyclopédie.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Siglo"], [
        ["l'unité de registre", "lo que NO forma parte de las tres unidades", "XVIIe siècle (classicisme)"],
        ["un dilemme cornélien", "el conflicto entre amor y deber", "XVIIe siècle (classicisme)"],
        ["la séparation des pouvoirs", "la idea de De l'esprit des lois (1748)", "XVIIIe siècle (Lumières)"],
        ["l'hypocrisie religieuse", "el vicio que denuncia Tartuffe", "XVIIe siècle (classicisme)"],
        ["Corneille = Le Cid · Racine = Phèdre · Molière = Tartuffe · La Fontaine = Fables · Voltaire = Candide · Montesquieu = Lettres persanes", "autores y obras", "resumen"],
        ["Le Cid · Phèdre · les Fables de La Fontaine · Le Misanthrope", "obras del XVII", "XVIIe siècle (classicisme)"],
        ["Candide · l'Encyclopédie · Du contrat social · Lettres persanes", "obras del XVIII", "XVIIIe siècle (Lumières)"],
        ["Le conte philosophique Candide a été publié en 1759. · 1759", "Cándido se publicó en 1759.", "XVIIIe siècle (Lumières)"],
        ["Dans Candide, Voltaire tourne en dérision l'optimisme de Leibniz, que défend le précepteur Pangloss. · Leibniz", "Voltaire ridiculiza el optimismo de Leibniz.", "XVIIIe siècle (Lumières)"],
        ["La leçon de la fable, « La raison du plus fort est toujours la meilleure », s'appelle la morale. · morale", "La lección de la fábula se llama la moraleja.", "XVIIe siècle (classicisme)"],
        ["unité de lieu · unité de temps · unité d'action", "la regla de las tres unidades", "XVIIe siècle (classicisme)"],
        ["Il faut cultiver notre jardin", "Hay que cultivar nuestro jardín", "XVIIIe siècle (Lumières)"]
      ]],
      ej: [["Tartuffe (Molière) dénonce l'hypocrisie religieuse.", "Tartufo denuncia la hipocresía religiosa."], ["Candide, conte philosophique", "Cándido, cuento filosófico"], ["De l'esprit des lois (1748)", "El espíritu de las leyes"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les Lumières = XVIIe siècle", "Les Lumières = XVIIIe siècle", "El XVII es el clasicismo."], ["Candide se moque de l'optimisme de Pascal.", "Candide se moque de l'optimisme de Leibniz.", "Pangloss."], ["la règle des trois unités : lieu, temps, registre", "la règle des trois unités : lieu, temps, action", "Acción, no registro."]] }
  ],
  ejemplos: [
    { sit: "¿Cuál NO forma parte de la regla de las tres unidades?", resp: "l'unité de registre", pasos: ["Lugar, tiempo, acción."], porque: "Clasicismo." },
    { sit: "Rodrigo entre el amor y el honor:", resp: "un dilemme cornélien", pasos: ["Le Cid."], porque: "Corneille." },
    { sit: "La idea de De l'esprit des lois (1748):", resp: "la séparation des pouvoirs", pasos: ["Montesquieu."], porque: "Luces." }
  ],
  comprueba: [
    { q: "Phèdre es de…", o: ["Racine", "Corneille"], a: 0, b: "gr", porque: "Tragedia." },
    { q: "Candide se publica en…", o: ["1759", "1648"], a: 0, b: "gr", porque: "Voltaire." },
    { q: "Lettres persanes es de…", o: ["Montesquieu", "Rousseau"], a: 0, b: "gr", porque: "Luces." }
  ],
  practica: [
    { fase: "guiada", c: ["b6cl-classicisme", "b6cl-lumieres"], k: "sort", ask: "¿Siglo XVII (clasicismo) o XVIII (Luces)?", q: "Clasifica.", cats: ["XVIIe siècle (classicisme)", "XVIIIe siècle (Lumières)"], items: [["Le Cid", 0], ["Phèdre", 0], ["les Fables de La Fontaine", 0], ["Le Misanthrope", 0], ["Candide", 1], ["l'Encyclopédie", 1], ["Du contrat social", 1], ["Lettres persanes", 1]], pista: "Luis XIV o razón crítica.", why: "Siglos." },
    { fase: "guiada", c: ["b6cl-classicisme"], k: "choice", ask: "¿Cuál NO forma parte de la regla de las tres unidades?", q: "Elige.", o: ["l'unité de registre", "l'unité de lieu"], a: 0, pista: "Lugar, tiempo, acción.", why: "Registro no." },
    { fase: "guiada", c: ["b6cl-lumieres"], k: "fill", ask: "Año de Candide (en cifras).", q: "Le conte philosophique Candide a été publié en ___ .", acc: ["1759"], pista: "Mediados del XVIII.", why: "<b>1759</b>." },
    { fase: "indep", c: ["b6cl-classicisme", "b6cl-lumieres"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Corneille", "Le Cid"], ["Racine", "Phèdre"], ["Molière", "Tartuffe"], ["La Fontaine", "Fables"], ["Voltaire", "Candide"], ["Montesquieu", "Lettres persanes"]], why: "Obras." },
    { fase: "indep", c: ["b6cl-lumieres"], k: "spot", ask: "Encuentra el error.", s: "Dans Candide , Voltaire tourne en dérision l'optimisme de [Pascal] , que défend le précepteur Pangloss .", fix: "Leibniz", why: "<b>Leibniz</b>." },
    { fase: "indep", c: ["b6cl-classicisme"], k: "choice", ask: "Rodrigo entre el amor y el honor:", q: "¿Cómo se llama este conflicto?", o: ["un dilemme cornélien", "une règle classique"], a: 0, why: "Dilema corneliano." },
    { fase: "aplica", c: ["b6cl-classicisme"], k: "fill", ask: "La lección de la fábula.", q: "La leçon de la fable, « La raison du plus fort est toujours la meilleure », s'appelle la ___ .", acc: ["morale"], why: "<b>morale</b>." },
    { fase: "aplica", c: ["b6cl-lumieres"], k: "choice", ask: "La idea de De l'esprit des lois (1748):", q: "Elige.", o: ["la séparation des pouvoirs", "l'optimisme de Leibniz"], a: 0, why: "Montesquieu." },
    { fase: "aplica", c: ["b6cl-classicisme"], k: "choice", ask: "Vicio que denuncia Tartuffe:", q: "Elige.", o: ["l'hypocrisie religieuse", "l'avarice"], a: 0, why: "Hipocresía." },
    { fase: "dominio", c: ["b6cl-lumieres"], k: "order", ask: "Ordena la conclusión de Candide.", tokens: ["Il faut", "cultiver", "notre jardin"], why: "<b>Il faut cultiver notre jardin</b>" },
    { fase: "dominio", c: ["b6cl-lumieres"], k: "spot", ask: "Encuentra el error.", s: "Les Lumières sont un mouvement du [XVIIe] siècle .", fix: "XVIIIe", why: "<b>XVIIIe</b>." },
    { fase: "dominio", c: ["b6cl-lumieres", "b6cl-classicisme"], k: "listen", say: "Dans Candide, Voltaire tourne en dérision l'optimisme de Leibniz.", acc: ["Dans Candide, Voltaire tourne en dérision l'optimisme de Leibniz."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans Candide, Voltaire tourne en dérision l'optimisme de Leibniz.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Louis XIV", "Corneille", "Le Cid", "Rodrigue", "Chimène", "Racine", "Phèdre", "Molière", "Tartuffe", "Le Misanthrope", "La Fontaine", "Fables", "Voltaire", "Candide", "Leibniz", "Pangloss", "Pascal", "Montesquieu", "Lettres persanes", "Rousseau", "Encyclopédie"], previo: [] }
};

/* ── 5. Romantisme, réalisme et naturalisme ── */
E["lit-romantisme-realisme"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Romantisme, réalisme et naturalisme",
  objetivo: {
    que: "Vas a seguir el gran siglo de la novela francesa: del romanticismo al realismo y al naturalismo.",
    corto: "La Comédie humaine (Balzac). · Madame Bovary (1857), roman réaliste. · Germinal (Zola), roman naturaliste.",
    podras: ["Explicar el romanticismo (primera mitad del XIX): el yo, la emoción, la naturaleza, la libertad del arte; Hugo y la mezcla de lo grotesco y lo sublime (Hernani).", "Distinguir realismo (Balzac y La Comédie humaine, Stendhal, Flaubert) y naturalismo (Zola, Les Rougon-Macquart: herencia y medio social).", "Asociar autores y obras: Hugo (Les Misérables), Balzac (Le Père Goriot), Stendhal (Le Rouge et le Noir), Flaubert (Madame Bovary), Zola (Germinal), Maupassant (Bel-Ami, Boule de suif)."],
    iconos: ["ic2/libro", "ic2/pergamino", "ic2/flor"],
    previos: ["El siglo XIX (C1.2, lección 21) y los géneros y registros (lección 1)."],
    capacidad: "Ahora sitúas una novela del XIX en su movimiento y explicas por qué."
  },
  requiere: R("b5xx-regimes", "b6gr-genres"), recupera: ["b6gr-genres"],
  conceptos: {
    "b6rr-romantisme": { n: "le romantisme (primera mitad del XIX): no «historias de amor», sino un movimiento literario que exalta le moi, la sensibilité, la nature (confidente de los sentimientos), l'histoire y la liberté de l'art contra las reglas clásicas; Victor Hugo: el mélange du grotesque et du sublime, el drame historique en vers (Hernani), Les Misérables", b: "gr" },
    "b6rr-realisme": { n: "le réalisme: la descripción minuciosa de los medios sociales, personajes ordinarios; Balzac: La Comédie humaine, Le Père Goriot, le retour des personnages; Stendhal: Le Rouge et le Noir; Flaubert: Madame Bovary (1857, las ilusiones de Emma); le naturalisme: Zola, Les Rougon-Macquart («Histoire naturelle et sociale d'une famille sous le Second Empire»), la herencia, la enquête documentaire, Germinal; Maupassant: Bel-Ami, Boule de suif", b: "gr" }
  },
  video: {
    titulo: "El siglo de la novela", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le roman au XIXe", seg: [
        { es: "Hola. Del yo romántico a la sociedad tal como es." } ] },
      { v: "frase", filas: [
          { nota: "Balzac", p: 1, partes: [["La Comédie humaine (Balzac)", "-", 1]] },
          { nota: "realismo", p: 2, partes: [["Madame Bovary (1857), roman réaliste.", "-", 2]] },
          { nota: "naturalismo", p: 3, partes: [["Germinal (Zola), roman naturaliste.", "-", 3]] } ], seg: [
        { fr: "La Comédie humaine, de Balzac.", p: 1 }, { fr: "Madame Bovary, mille huit cent cinquante-sept, roman réaliste.", p: 2 }, { fr: "Germinal, de Zola, roman naturaliste.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El romanticismo es…", o: ["un movimiento: el yo, la emoción, la libertad", "historias de amor"], a: 0, es: true,
        bien: "¡Sí! Un movimiento literario.", mal: "Es un movimiento literario, no solo amor.",
        seg: [ { es: "Pausa. Un movimiento." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le romantisme", "le grotesque et le sublime", "le réalisme", "La Comédie humaine", "le naturalisme", "Les Rougon-Macquart"], seg: [
        { es: "Tres movimientos, un siglo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lista de lecturas", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia presenta la lista de novelas del semestre.",
    pj: PJ,
    lineas: [
      ["camila", "Le romantisme, ce sont des histoires d'amour ? — Non : c'est un mouvement littéraire de la première moitié du XIXe siècle, qui exalte le moi, la sensibilité, la nature et la liberté de l'art contre les règles classiques.", "¿El romanticismo son historias de amor? — No: es un movimiento literario de la primera mitad del siglo XIX, que exalta el yo, la sensibilidad, la naturaleza y la libertad del arte contra las reglas clásicas."],
      ["sofia", "Victor Hugo défend le mélange du grotesque et du sublime. Puis viennent les réalistes : Balzac a réuni ses romans sous le titre général de La Comédie humaine ; il utilise le retour des personnages d'un roman à l'autre.", "Victor Hugo defiende la mezcla de lo grotesco y lo sublime. Luego llegan los realistas: Balzac reunió sus novelas bajo el título general de La comedia humana; usa el regreso de los personajes de una novela a otra."],
      ["camila", "Et Madame Bovary ? — C'est un roman de Flaubert, publié en 1857, qui raconte les illusions d'Emma. Stendhal, lui, a écrit Le Rouge et le Noir.", "¿Y Madame Bovary? — Es una novela de Flaubert, publicada en 1857, que cuenta las ilusiones de Emma. Stendhal, por su parte, escribió Rojo y negro."],
      ["sofia", "Enfin, le naturalisme : Zola fait une enquête documentaire avant d'écrire et montre l'influence de l'hérédité. Les Rougon-Macquart, c'est l'« histoire naturelle et sociale d'une famille sous le Second Empire ».", "Por último, el naturalismo: Zola hace una investigación documental antes de escribir y muestra la influencia de la herencia. Los Rougon-Macquart son la «historia natural y social de una familia bajo el Segundo Imperio»."]
    ],
    fijate: "Fíjate: le romantisme (le moi, la sensibilité, la nature, la liberté de l'art), le mélange du grotesque et du sublime, La Comédie humaine, le retour des personnages, Madame Bovary (1857), le naturalisme, l'enquête documentaire, l'hérédité, Les Rougon-Macquart."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Tres movimientos",
      idea: "El romanticismo (primera mitad del XIX) no son «historias de amor»: es un movimiento que exalta el yo, la sensibilidad, la naturaleza confidente, la historia y la libertad del arte contra las reglas clásicas; Victor Hugo defiende la mezcla de lo grotesco y lo sublime y el drama histórico en verso (Hernani), y escribe Les Misérables. El realismo describe minuciosamente los medios sociales con personajes ordinarios: Balzac reúne sus novelas en La Comédie humaine (Le Père Goriot) y usa el retour des personnages; Stendhal escribe Le Rouge et le Noir; Flaubert, Madame Bovary (1857). El naturalismo de Zola añade la influencia de la herencia y la investigación documental: Les Rougon-Macquart, «histoire naturelle et sociale d'une famille sous le Second Empire» (Germinal). Maupassant: Bel-Ami y relatos como Boule de suif.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Movimiento"], [
        ["le mélange du grotesque et du sublime", "la idea que defiende Hugo", "romantisme"],
        ["le Second Empire", "la época de Les Rougon-Macquart", "réalisme / naturalisme"],
        ["le réalisme", "la estética de la descripción minuciosa", "réalisme / naturalisme"],
        ["Boule de suif", "un relato de Maupassant", "réalisme / naturalisme"],
        ["Hugo = Les Misérables · Balzac = Le Père Goriot · Stendhal = Le Rouge et le Noir · Flaubert = Madame Bovary · Zola = Germinal · Maupassant = Bel-Ami", "autores y obras", "resumen"],
        ["l'exaltation du moi et de ses émotions · le mélange du grotesque et du sublime · la nature confidente des sentiments · le drame historique en vers, comme Hernani", "rasgos románticos", "romantisme"],
        ["la description minutieuse des milieux sociaux · l'influence de l'hérédité sur les personnages · l'enquête documentaire avant l'écriture · des personnages ordinaires, souvent modestes", "rasgos realistas y naturalistas", "réalisme / naturalisme"],
        ["Balzac a réuni ses romans sous le titre général de La Comédie humaine. · Comédie", "Balzac reunió sus novelas en La comedia humana.", "réalisme / naturalisme"],
        ["Balzac utilise le procédé du retour des personnages. · retour", "Balzac usa el regreso de los personajes.", "réalisme / naturalisme"],
        ["Madame Bovary, publié en 1857, est un roman de Flaubert qui raconte les illusions d'Emma. · Flaubert", "Madame Bovary es una novela de Flaubert.", "réalisme / naturalisme"],
        ["Le Rouge et le Noir (Stendhal) · Madame Bovary (Flaubert) · Les Misérables (Hugo) · Germinal (Zola)", "cuatro novelas del XIX", "resumen"],
        ["Histoire naturelle et sociale d'une famille sous le Second Empire", "el subtítulo de Les Rougon-Macquart", "réalisme / naturalisme"],
        ["Hernani · l'hérédité · Le Père Goriot", "drama romántico · herencia · novela de Balzac", "repères"]
      ]],
      ej: [["La Comédie humaine (Balzac)", "el conjunto de novelas de Balzac"], ["Madame Bovary (1857)", "novela realista de Flaubert"], ["Germinal (Zola)", "novela naturalista"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le romantisme = des histoires d'amour", "Le romantisme = le moi, l'émotion, la liberté de l'art", "Es un movimiento literario."], ["Madame Bovary, roman de Stendhal", "Madame Bovary, roman de Flaubert", "Stendhal = Le Rouge et le Noir."], ["le naturalisme = l'amour de la nature", "le naturalisme = hérédité et milieu social (Zola)", "No es ecología."]] }
  ],
  ejemplos: [
    { sit: "Drama histórico en verso de Victor Hugo:", resp: "Hernani", pasos: ["Romanticismo."], porque: "Obras." },
    { sit: "Para Zola, lo que determina a sus personajes:", resp: "l'hérédité", pasos: ["Y el medio social."], porque: "Naturalismo." },
    { sit: "Novela de Balzac en La Comédie humaine:", resp: "Le Père Goriot", pasos: ["Realismo."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Le Père Goriot es de…", o: ["Balzac", "Zola"], a: 0, b: "gr", porque: "La Comédie humaine." },
    { q: "Hernani es…", o: ["un drama romántico en verso", "una novela naturalista"], a: 0, b: "gr", porque: "Hugo." },
    { q: "La herencia es un tema…", o: ["naturalista", "romántico"], a: 0, b: "gr", porque: "Zola." }
  ],
  practica: [
    { fase: "guiada", c: ["b6rr-romantisme", "b6rr-realisme"], k: "sort", ask: "¿Romanticismo o realismo / naturalismo?", q: "Clasifica.", cats: ["romantisme", "réalisme / naturalisme"], items: [["l'exaltation du moi et de ses émotions", 0], ["le mélange du grotesque et du sublime", 0], ["la nature confidente des sentiments", 0], ["le drame historique en vers, comme Hernani", 0], ["la description minutieuse des milieux sociaux", 1], ["l'influence de l'hérédité sur les personnages", 1], ["l'enquête documentaire avant l'écriture", 1], ["des personnages ordinaires, souvent modestes", 1]], pista: "¿El yo o la sociedad?", why: "Movimientos." },
    { fase: "guiada", c: ["b6rr-realisme"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Hugo", "Les Misérables"], ["Balzac", "Le Père Goriot"], ["Stendhal", "Le Rouge et le Noir"], ["Flaubert", "Madame Bovary"], ["Zola", "Germinal"], ["Maupassant", "Bel-Ami"]], pista: "Novelas del XIX.", why: "Obras." },
    { fase: "guiada", c: ["b6rr-realisme"], k: "fill", ask: "La … humana (Balzac).", q: "Balzac a réuni ses romans sous le titre général de La ___ humaine.", acc: ["Comédie"], pista: "comedia.", why: "<b>Comédie</b>." },
    { fase: "indep", c: ["b6rr-realisme"], k: "spot", ask: "Encuentra el error.", s: "Madame Bovary , publié en 1857 , est un roman de [Stendhal] qui raconte les illusions d'Emma .", fix: "Flaubert", why: "<b>Flaubert</b>." },
    { fase: "indep", c: ["b6rr-romantisme"], k: "choice", ask: "La idea que defiende Hugo:", q: "Elige.", o: ["le mélange du grotesque et du sublime", "l'enquête documentaire"], a: 0, why: "Romanticismo." },
    { fase: "indep", c: ["b6rr-realisme"], k: "fill", ask: "El procedimiento de Balzac.", q: "Balzac utilise le procédé du ___ des personnages, qui donne unité et profondeur à son univers.", acc: ["retour"], why: "<b>retour</b>." },
    { fase: "aplica", c: ["b6rr-realisme"], k: "choice", ask: "«Histoire naturelle et sociale d'une famille sous…»", q: "Elige.", o: ["le Second Empire", "la Révolution"], a: 0, why: "Segundo Imperio." },
    { fase: "aplica", c: ["b6rr-realisme"], k: "order", ask: "Ordena las novelas por fecha (de la más antigua a la más reciente).", tokens: ["Le Rouge et le Noir (Stendhal)", "Madame Bovary (Flaubert)", "Les Misérables (Hugo)", "Germinal (Zola)"], why: "<b>1830 · 1857 · 1862 · 1885</b>" },
    { fase: "aplica", c: ["b6rr-realisme"], k: "choice", ask: "¿Qué obra es de Maupassant?", q: "Elige.", o: ["Boule de suif", "Le Père Goriot"], a: 0, why: "Maupassant." },
    { fase: "dominio", c: ["b6rr-romantisme"], k: "spot", ask: "Encuentra el error.", s: "Le romantisme , [ce sont surtout des histoires d'amour] .", fix: "c'est surtout l'exaltation du moi et de la liberté de l'art", why: "Es <b>l'exaltation du moi et de la liberté de l'art</b>." },
    { fase: "dominio", c: ["b6rr-realisme"], k: "choice", ask: "Una descripción minuciosa de una pensión parisina con personajes modestos ilustra…", q: "Elige.", o: ["le réalisme", "le romantisme"], a: 0, why: "Realismo." },
    { fase: "dominio", c: ["b6rr-realisme", "b6rr-romantisme"], k: "listen", say: "Balzac a réuni ses romans sous le titre général de La Comédie humaine.", acc: ["Balzac a réuni ses romans sous le titre général de La Comédie humaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Balzac a réuni ses romans sous le titre général de La Comédie humaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Victor Hugo", "Hugo", "Hernani", "Les Misérables", "Balzac", "La Comédie humaine", "Le Père Goriot", "Stendhal", "Le Rouge et le Noir", "Flaubert", "Madame Bovary", "Emma", "Zola", "Germinal", "Les Rougon-Macquart", "Maupassant", "Bel-Ami", "Boule de suif", "Second Empire", "Cromwell"], previo: [] }
};

/* ── 6. La poésie au XIXe siècle ── */
E["lit-poesie-xixe"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La poésie au XIXe siècle",
  objetivo: {
    que: "Vas a seguir la poesía francesa del siglo XIX, de Lamartine a Mallarmé, cuando se vuelve moderna: sugerir más que describir.",
    corto: "Les Fleurs du mal (1857). · « Je est un autre » (Rimbaud). · Suggérer plutôt que nommer.",
    podras: ["Situar a Baudelaire (Les Fleurs du mal, 1857: spleen e idéal, les correspondances / synesthésies; «L'Albatros»).", "Distinguir a Verlaine («De la musique avant toute chose», «Chanson d'automne»), Rimbaud («Je est un autre», el poeta vidente, «Voyelles», Le Bateau ivre) y Mallarmé (simbolismo).", "Explicar el simbolismo: sugerir en vez de nombrar; Verlaine y Rimbaud, poètes maudits (no románticos)."],
    iconos: ["ic2/flor", "ic2/lapiz", "ic2/libro"],
    previos: ["La versificación (lección 3) y el romanticismo (lección 5)."],
    capacidad: "Ahora reconoces la poesía moderna del XIX y su búsqueda de la sugerencia."
  },
  requiere: R("b6vc-vers", "b6rr-romantisme"), recupera: ["b6vc-vers"],
  conceptos: {
    "b6px-baudelaire": { n: "Baudelaire: Les Fleurs du mal (1857; seis poemas condenados por la justicia), Le Spleen de Paris; spleen et idéal; les correspondances (les synesthésies: correspondencias entre los sentidos); «L'Albatros»: «Ses ailes de géant l'empêchent de marcher»; antes, el romántico Lamartine («Le Lac»)", b: "gr" },
    "b6px-symbolisme": { n: "Verlaine: «De la musique avant toute chose», «Chanson d'automne» («Les sanglots longs des violons de l'automne…»), Poèmes saturniens, Romances sans paroles; Rimbaud: lettre du Voyant, «Je est un autre», «Voyelles», «Le Bateau ivre», Une saison en enfer, Illuminations; Verlaine y Rimbaud, poètes maudits de sensibilidad simbolista (segunda mitad del XIX, no románticos); le symbolisme (Mallarmé, Un coup de dés jamais n'abolira le hasard): suggérer plutôt que nommer", b: "gr" }
  },
  video: {
    titulo: "Poesía del XIX", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "suggérer", seg: [
        { es: "Hola. La poesía se vuelve moderna: sugiere más que describe." } ] },
      { v: "frase", filas: [
          { nota: "Baudelaire", p: 1, partes: [["Les Fleurs du mal (1857)", "-", 1]] },
          { nota: "Rimbaud", p: 2, partes: [["« Je est un autre »", "-", 2]] },
          { nota: "simbolismo", p: 3, partes: [["Suggérer plutôt que nommer.", "-", 3]] } ], seg: [
        { fr: "Les Fleurs du mal, mille huit cent cinquante-sept.", p: 1 }, { fr: "Je est un autre.", p: 2 }, { fr: "Suggérer plutôt que nommer.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Verlaine y Rimbaud son…", o: ["poetas malditos, simbolistas", "poetas románticos"], a: 0, es: true,
        bien: "¡Sí! Segunda mitad del XIX.", mal: "Son poetas malditos, de sensibilidad simbolista.",
        seg: [ { es: "Pausa. Malditos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Les Fleurs du mal", "les correspondances", "Verlaine", "Rimbaud", "les poètes maudits", "le symbolisme"], seg: [
        { es: "Baudelaire, Verlaine, Rimbaud, Mallarmé.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Recital de poesía", img: "bg-noche", yo: "camila",
    escena: "En un recital, Madame Sofia presenta poemas del siglo XIX.",
    pj: PJ,
    lineas: [
      ["sofia", "En 1857, Baudelaire publie Les Fleurs du mal, recueil dont six poèmes sont condamnés par la justice. Dans « Correspondances », les parfums, les couleurs et les sons se répondent : ce sont des synesthésies.", "En 1857, Baudelaire publica Las flores del mal, un poemario del que seis poemas son condenados por la justicia. En «Correspondencias», los perfumes, los colores y los sonidos se responden: son sinestesias."],
      ["camila", "Et l'albatros qui ne peut pas marcher ? — C'est le poète : « Ses ailes de géant l'empêchent de marcher. » Maladroit sur le pont du navire, il est magnifique dans le ciel.", "¿Y el albatros que no puede caminar? — Es el poeta: «Sus alas de gigante le impiden caminar.» Torpe en la cubierta del barco, es magnífico en el cielo."],
      ["sofia", "Verlaine écrit : « De la musique avant toute chose. » Écoutez : « Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. » Et Rimbaud, dans la lettre du Voyant, affirme : « Je est un autre. »", "Verlaine escribe: «La música ante todo.» Escuchen: «Los largos sollozos de los violines del otoño hieren mi corazón con una languidez monótona.» Y Rimbaud, en la carta del Vidente, afirma: «Yo es otro.»"],
      ["camila", "Ce sont des romantiques ? — Non, des poètes maudits, de sensibilité symboliste. L'ambition des symbolistes, comme Mallarmé, c'est de suggérer plutôt que nommer directement.", "¿Son románticos? — No, poetas malditos, de sensibilidad simbolista. La ambición de los simbolistas, como Mallarmé, es sugerir en vez de nombrar directamente."]
    ],
    fijate: "Fíjate: Les Fleurs du mal (1857), condamnés par la justice, les synesthésies, « Ses ailes de géant l'empêchent de marcher », « De la musique avant toute chose », « Je est un autre », les poètes maudits, suggérer plutôt que nommer."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "De Baudelaire a Mallarmé",
      idea: "Tras el romántico Lamartine («Le Lac»), Baudelaire publica Les Fleurs du mal (1857), de las que seis poemas son condenados por la justicia: el spleen y el ideal, y las correspondances (sinestesias: los sentidos se responden). En «L'Albatros», el poeta es el pájaro torpe en la tierra: «Ses ailes de géant l'empêchent de marcher». Verlaine pide «De la musique avant toute chose» («Chanson d'automne»; Poèmes saturniens, Romances sans paroles). Rimbaud, en la carta del Vidente, escribe «Je est un autre» («Voyelles», «Le Bateau ivre», Une saison en enfer, Illuminations). Verlaine y Rimbaud son poètes maudits de sensibilidad simbolista, en la segunda mitad del siglo: no son románticos. El simbolismo (Mallarmé, Un coup de dés jamais n'abolira le hasard) quiere sugerir en vez de nombrar.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Poeta"], [
        ["les synesthésies (correspondances entre les sens)", "la noción de «Correspondances»", "Baudelaire"],
        ["musique", "«De la ___ avant toute chose»", "Verlaine"],
        ["suggérer plutôt que nommer directement", "la ambición de los simbolistas", "Mallarmé"],
        ["En 1857, Baudelaire publie Les Fleurs du mal, recueil dont six poèmes sont condamnés par la justice. · mal", "En 1857 Baudelaire publica Las flores del mal.", "Baudelaire"],
        ["Dans sa lettre dite du Voyant, Rimbaud affirme : « Je est un autre ». · autre", "Rimbaud afirma: «Yo es otro».", "Rimbaud"],
        ["« Correspondances » = Baudelaire · « Chanson d'automne » = Verlaine · « Voyelles » = Rimbaud · Un coup de dés jamais n'abolira le hasard = Mallarmé · « Le Lac » = Lamartine", "poemas y poetas", "resumen"],
        ["Les Fleurs du mal · Le Spleen de Paris", "obras de Baudelaire", "Baudelaire"],
        ["Une saison en enfer · Illuminations · « Le Bateau ivre »", "obras de Rimbaud", "Rimbaud"],
        ["Poèmes saturniens · Romances sans paroles", "obras de Verlaine", "Verlaine"],
        ["Les sanglots longs Des violons De l'automne Blessent mon cœur D'une langueur Monotone.", "el comienzo de «Chanson d'automne»", "Verlaine"],
        ["« Ses ailes de géant l'empêchent de marcher. » · géant", "«Sus alas de gigante le impiden caminar.»", "Baudelaire"],
        ["les poètes maudits", "Verlaine, Rimbaud y otros", "Verlaine"],
        ["le symbolisme · les correspondances", "el movimiento de Mallarmé · las sinestesias", "Mallarmé"]
      ]],
      ej: [["Les Fleurs du mal", "Las flores del mal"], ["« Je est un autre » (Rimbaud)", "«Yo es otro»"], ["suggérer plutôt que nommer", "sugerir en vez de nombrar"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Verlaine et Rimbaud, poètes romantiques", "poètes maudits, sensibilité symboliste", "Son de la segunda mitad del XIX."], ["« Je suis un autre » (Rimbaud)", "« Je est un autre »", "La agramaticalidad es voluntaria."], ["Les Fleurs du mal (1857) de Verlaine", "Les Fleurs du mal (1857) de Baudelaire", "Baudelaire."]] }
  ],
  ejemplos: [
    { sit: "«Le Lac» es de…", resp: "Lamartine", pasos: ["Romántico."], porque: "Poetas." },
    { sit: "Le Spleen de Paris es de…", resp: "Baudelaire", pasos: ["Poemas en prosa."], porque: "Poetas." },
    { sit: "Verlaine, Rimbaud y otros reciben el nombre de…", resp: "les poètes maudits", pasos: ["Malditos."], porque: "Movimiento." }
  ],
  comprueba: [
    { q: "Las sinestesias son…", o: ["correspondencias entre los sentidos", "rimas pobres"], a: 0, b: "gr", porque: "Baudelaire." },
    { q: "Une saison en enfer es de…", o: ["Rimbaud", "Verlaine"], a: 0, b: "gr", porque: "Rimbaud." },
    { q: "El simbolismo busca…", o: ["sugerir", "describir con precisión"], a: 0, b: "gr", porque: "Mallarmé." }
  ],
  practica: [
    { fase: "guiada", c: ["b6px-baudelaire", "b6px-symbolisme"], k: "sort", ask: "¿Baudelaire, Rimbaud o Verlaine?", q: "Clasifica.", cats: ["Baudelaire", "Rimbaud", "Verlaine"], items: [["Les Fleurs du mal", 0], ["Le Spleen de Paris", 0], ["Une saison en enfer", 1], ["Illuminations", 1], ["« Le Bateau ivre »", 1], ["Poèmes saturniens", 2], ["Romances sans paroles", 2]], pista: "Flores, temporada en el infierno, poemas saturnianos.", why: "Obras." },
    { fase: "guiada", c: ["b6px-baudelaire"], k: "choice", ask: "«Les parfums, les couleurs et les sons se répondent»: ¿qué noción ilustra este verso?", q: "Elige.", o: ["les synesthésies (correspondances entre les sens)", "les rimes embrassées"], a: 0, pista: "Los sentidos.", why: "Correspondencias." },
    { fase: "guiada", c: ["b6px-baudelaire"], k: "fill", ask: "Las flores del…", q: "En 1857, Baudelaire publie Les Fleurs du ___, recueil dont six poèmes sont condamnés par la justice.", acc: ["mal"], pista: "Mal.", why: "<b>mal</b>." },
    { fase: "indep", c: ["b6px-baudelaire", "b6px-symbolisme"], k: "match", ask: "Une cada poema con su poeta.", q: "Poema → poeta", pairs: [["« Correspondances »", "Baudelaire"], ["« Chanson d'automne »", "Verlaine"], ["« Voyelles »", "Rimbaud"], ["Un coup de dés jamais n'abolira le hasard", "Mallarmé"], ["« Le Lac »", "Lamartine"]], why: "Poemas." },
    { fase: "indep", c: ["b6px-symbolisme"], k: "spot", ask: "Encuentra el error en la cita.", s: "Dans sa lettre dite du Voyant , Rimbaud affirme : « Je est un [autrui] » .", fix: "autre", why: "«Je est un <b>autre</b>»." },
    { fase: "indep", c: ["b6px-symbolisme"], k: "fill", ask: "Verlaine: «De la ___ avant toute chose».", q: "« De la ___ avant toute chose »", acc: ["musique"], why: "<b>musique</b>." },
    { fase: "aplica", c: ["b6px-symbolisme"], k: "order", ask: "Ordena los versos de Verlaine.", tokens: ["Les sanglots longs", "Des violons", "De l'automne", "Blessent mon cœur", "D'une langueur", "Monotone."], why: "<b>Les sanglots longs / Des violons / De l'automne / Blessent mon cœur / D'une langueur / Monotone.</b>" },
    { fase: "aplica", c: ["b6px-symbolisme"], k: "choice", ask: "¿Cuál es la ambición principal de los simbolistas?", q: "Elige.", o: ["suggérer plutôt que nommer directement", "décrire la société avec précision"], a: 0, why: "Sugerir." },
    { fase: "aplica", c: ["b6px-baudelaire"], k: "fill", ask: "«L'Albatros»: alas de…", q: "« Ses ailes de ___ l'empêchent de marcher. »", acc: ["géant"], why: "<b>géant</b>." },
    { fase: "dominio", c: ["b6px-symbolisme"], k: "spot", ask: "Encuentra el error.", s: "Verlaine et Rimbaud sont des poètes [romantiques de la première moitié] du siècle .", fix: "maudits de la seconde moitié", why: "Poètes <b>maudits</b>, de la segunda mitad del siglo." },
    { fase: "dominio", c: ["b6px-baudelaire"], k: "choice", ask: "«Le Lac» es de…", q: "Elige.", o: ["Lamartine", "Rimbaud"], a: 0, why: "Romántico." },
    { fase: "dominio", c: ["b6px-baudelaire", "b6px-symbolisme"], k: "listen", say: "En 1857, Baudelaire publie Les Fleurs du mal.", acc: ["En 1857, Baudelaire publie Les Fleurs du mal."], num: true, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>En 1857, Baudelaire publie Les Fleurs du mal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Baudelaire", "Les Fleurs du mal", "Le Spleen de Paris", "Verlaine", "Rimbaud", "Mallarmé", "Lamartine", "Voyant", "Poèmes saturniens", "Romances sans paroles", "Une saison en enfer", "Illuminations", "Le Bateau ivre", "Correspondances", "Voyelles", "L'Albatros"], previo: [] }
};

/* ── 7. Le XXe siècle en France ── */
E["lit-xxe-siecle"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le XXe siècle en France",
  objetivo: {
    que: "Vas a recorrer el siglo XX literario francés, que cuestiona el tiempo del relato, el personaje y la lógica.",
    corto: "Dans L'Étranger, Meursault raconte à la première personne. · La madeleine de Proust. · Sartre refuse le prix Nobel en 1964.",
    podras: ["Situar a Proust (À la recherche du temps perdu: la mémoire involontaire, la madeleine), Breton (Manifeste du surréalisme, 1924), Sartre (La Nausée) y Camus (L'Étranger, 1942: l'absurde).", "Distinguir surrealismo, existencialismo / absurdo y Nouveau Roman (Butor, La Modification, en «vous»; Robbe-Grillet).", "Citar a Duras (L'Amant) y a Annie Ernaux, primera francesa Nobel de literatura (2022)."],
    iconos: ["ic2/libro", "ic2/cafe", "ic2/lapiz"],
    previos: ["El existencialismo (C1.2, lección 45), las vanguardias (C1.2, lección 47) y la poesía del XIX (lección 6)."],
    capacidad: "Ahora sitúas las grandes obras del XX francés en sus movimientos."
  },
  requiere: R("b5ex-camus", "b5ag-mouvements", "b6px-symbolisme"), recupera: ["b5ex-camus"],
  conceptos: {
    "b6vt-auteurs": { n: "Proust: À la recherche du temps perdu (Du côté de chez Swann), la mémoire involontaire (la madeleine), «Longtemps, je me suis couché de bonne heure»; André Breton: Manifeste du surréalisme (1924); Sartre: La Nausée, rechaza el Nobel en 1964; Camus: L'Étranger (1942; el narrador Meursault cuenta en primera persona), l'absurde (no existencialista); Michel Butor: La Modification (en segunda persona del plural, «vous»); Marguerite Duras: L'Amant; Annie Ernaux: primera francesa en recibir el Nobel de literatura (2022)", b: "gr" },
    "b6vt-mouvements": { n: "le surréalisme: l'écriture automatique, l'exploration du rêve et de l'inconscient; l'existentialisme / l'absurde: la liberté et la responsabilité de l'individu, le silence du monde face au besoin de sens; le Nouveau Roman (Butor, Robbe-Grillet): le refus du personnage traditionnel, la contestation du narrateur omniscient, des descriptions minutieuses et neutres d'objets", b: "gr" }
  },
  video: {
    titulo: "El siglo XX", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le XXe siècle", seg: [
        { es: "Hola. Un siglo que pone en duda todas las formas heredadas." } ] },
      { v: "frase", filas: [
          { nota: "Camus", p: 1, partes: [["Meursault raconte à la première personne.", "-", 1]] },
          { nota: "Proust", p: 2, partes: [["La madeleine de Proust.", "-", 2]] },
          { nota: "1964", p: 3, partes: [["Sartre refuse le prix Nobel en 1964.", "-", 3]] } ], seg: [
        { fr: "Dans L'Étranger, Meursault raconte à la première personne.", p: 1 }, { fr: "La madeleine de Proust.", p: 2 }, { fr: "Sartre refuse le prix Nobel en 1964.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La madalena de Proust ilustra…", o: ["la memoria involuntaria", "el absurdo"], a: 0, es: true,
        bien: "¡Sí! Un sabor devuelve el pasado.", mal: "Es la memoria involuntaria.",
        seg: [ { es: "Pausa. Memoria involuntaria." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la mémoire involontaire", "le surréalisme", "l'absurde", "le Nouveau Roman", "Duras", "Annie Ernaux"], seg: [
        { es: "Autores y movimientos del XX.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Seminario del siglo XX", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia recorre el siglo XX con sus estudiantes.",
    pj: PJ,
    lineas: [
      ["sofia", "Chez Proust, le goût d'une madeleine trempée dans le thé fait ressurgir toute l'enfance du narrateur : c'est la mémoire involontaire. Le premier volume, Du côté de chez Swann, commence par « Longtemps, je me suis couché de bonne heure ».", "En Proust, el sabor de una magdalena mojada en el té hace resurgir toda la infancia del narrador: es la memoria involuntaria. El primer volumen, Por el camino de Swann, empieza con «Mucho tiempo me acosté temprano»."],
      ["camila", "Et le surréalisme ? — André Breton publie le Manifeste du surréalisme en 1924 : l'écriture automatique, le rêve, l'inconscient. Puis, après la guerre, Sartre et Camus.", "¿Y el surrealismo? — André Breton publica el Manifiesto del surrealismo en 1924: la escritura automática, el sueño, el inconsciente. Luego, tras la guerra, Sartre y Camus."],
      ["sofia", "Dans L'Étranger, publié en 1942, le narrateur Meursault raconte son histoire à la première personne. Camus, on l'associe à l'absurde plutôt qu'à l'existentialisme. Et Sartre a refusé le prix Nobel en 1964.", "En El extranjero, publicado en 1942, el narrador Meursault cuenta su historia en primera persona. A Camus se le asocia con el absurdo más que con el existencialismo. Y Sartre rechazó el Nobel en 1964."],
      ["camila", "Et le Nouveau Roman ? — Il refuse le personnage traditionnel : La Modification de Butor est entièrement écrite à la deuxième personne du pluriel. Et en 2022, Annie Ernaux est la première Française à recevoir le prix Nobel de littérature !", "¿Y el Nouveau Roman? — Rechaza el personaje tradicional: La modificación de Butor está escrita entera en segunda persona del plural. ¡Y en 2022 Annie Ernaux es la primera francesa en recibir el Nobel de literatura!"]
    ],
    fijate: "Fíjate: la mémoire involontaire (la madeleine), Du côté de chez Swann, le Manifeste du surréalisme (1924), l'écriture automatique, L'Étranger (1942), Meursault, l'absurde, le Nouveau Roman, la deuxième personne du pluriel, Annie Ernaux (2022)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y movimientos",
      idea: "Proust (À la recherche du temps perdu, que empieza con Du côté de chez Swann) explora la memoria involuntaria: la madeleine devuelve la infancia. En 1924, André Breton publica el Manifeste du surréalisme: escritura automática, sueño, inconsciente. Tras la guerra, Sartre (La Nausée; rechaza el Nobel en 1964) y Camus (L'Étranger, 1942, narrado en primera persona por Meursault), al que se asocia con el absurdo y no con el existencialismo. El Nouveau Roman (Michel Butor, La Modification, escrita en «vous»; Robbe-Grillet) rechaza el personaje tradicional y el narrador omnisciente, con descripciones minuciosas y neutras. Marguerite Duras escribe L'Amant. Annie Ernaux es la primera francesa en recibir el Nobel de literatura (2022).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Movimiento"], [
        ["la mémoire involontaire", "la noción proustiana de la madeleine", "Proust"],
        ["Elle est la première Française à recevoir le prix Nobel de littérature.", "lo que hace histórico el premio de Annie Ernaux", "XXIe"],
        ["l'absurde", "la noción asociada a Camus", "existentialisme / absurde"],
        ["Jean-Paul Sartre", "quien rechazó el Nobel en 1964", "existentialisme / absurde"],
        ["Proust = À la recherche du temps perdu · André Breton = Manifeste du surréalisme · Sartre = La Nausée · Camus = L'Étranger · Michel Butor = La Modification · Marguerite Duras = L'Amant", "autores y obras", "resumen"],
        ["André Breton publie le Manifeste du surréalisme en 1924. · 1924", "Breton publica el Manifiesto en 1924.", "surréalisme"],
        ["Dans L'Étranger, publié en 1942, le narrateur Meursault raconte son histoire à la première personne. · Meursault", "En El extranjero, Meursault narra en primera persona.", "existentialisme / absurde"],
        ["l'écriture automatique · l'exploration du rêve et de l'inconscient", "rasgos del surrealismo", "surréalisme"],
        ["la liberté et la responsabilité de l'individu · le silence du monde face au besoin de sens", "rasgos del existencialismo y el absurdo", "existentialisme / absurde"],
        ["le refus du personnage traditionnel · la contestation du narrateur omniscient · des descriptions minutieuses et neutres d'objets", "rasgos del Nouveau Roman", "Nouveau Roman"],
        ["La Modification est entièrement écrite à la deuxième personne du pluriel. · deuxième · seconde", "La modificación está escrita en segunda persona del plural.", "Nouveau Roman"],
        ["Du côté de chez Swann · Manifeste du surréalisme · L'Étranger · La Modification", "cuatro obras del XX por orden", "resumen"]
      ]],
      ej: [["Dans L'Étranger, Meursault raconte à la première personne.", "En El extranjero, Meursault narra en primera persona."], ["la madeleine de Proust", "la magdalena de Proust"], ["Sartre refuse le prix Nobel en 1964.", "Sartre rechaza el Nobel en 1964."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Camus, philosophe existentialiste", "Camus, philosophie de l'absurde", "Camus rechazó esa etiqueta."], ["Le narrateur de L'Étranger s'appelle Rastignac.", "Le narrateur de L'Étranger s'appelle Meursault.", "Rastignac es de Balzac."], ["Le Nouveau Roman aime le narrateur omniscient.", "Le Nouveau Roman conteste le narrateur omniscient.", "Ruptura."]] }
  ],
  ejemplos: [
    { sit: "La Nausée es de…", resp: "Sartre", pasos: ["Existencialismo."], porque: "Obras." },
    { sit: "L'Amant es de…", resp: "Marguerite Duras", pasos: ["Segunda mitad del XX."], porque: "Obras." },
    { sit: "La Modification es de…", resp: "Michel Butor", pasos: ["Nouveau Roman."], porque: "Obras." }
  ],
  comprueba: [
    { q: "El Manifiesto del surrealismo es de…", o: ["1924", "1942"], a: 0, b: "gr", porque: "Breton." },
    { q: "Annie Ernaux recibe el Nobel en…", o: ["2022", "1964"], a: 0, b: "gr", porque: "Primera francesa." },
    { q: "Las descripciones neutras de objetos son típicas del…", o: ["Nouveau Roman", "surrealismo"], a: 0, b: "gr", porque: "Robbe-Grillet." }
  ],
  practica: [
    { fase: "guiada", c: ["b6vt-mouvements"], k: "sort", ask: "¿Surrealismo, existencialismo / absurdo o Nouveau Roman?", q: "Clasifica.", cats: ["surréalisme", "existentialisme / absurde", "Nouveau Roman"], items: [["l'écriture automatique", 0], ["l'exploration du rêve et de l'inconscient", 0], ["la liberté et la responsabilité de l'individu", 1], ["le silence du monde face au besoin de sens", 1], ["le refus du personnage traditionnel", 2], ["la contestation du narrateur omniscient", 2], ["des descriptions minutieuses et neutres d'objets", 2]], pista: "Sueño, libertad o ruptura del relato.", why: "Movimientos." },
    { fase: "guiada", c: ["b6vt-auteurs"], k: "choice", ask: "La madeleine: ¿qué noción proustiana ilustra?", q: "Elige.", o: ["la mémoire involontaire", "l'écriture automatique"], a: 0, pista: "Un sabor devuelve el pasado.", why: "Memoria involuntaria." },
    { fase: "guiada", c: ["b6vt-auteurs"], k: "fill", ask: "Año del Manifiesto (en cifras).", q: "André Breton publie le Manifeste du surréalisme en ___ .", acc: ["1924"], pista: "Años veinte.", why: "<b>1924</b>." },
    { fase: "indep", c: ["b6vt-auteurs"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Proust", "À la recherche du temps perdu"], ["André Breton", "Manifeste du surréalisme"], ["Sartre", "La Nausée"], ["Camus", "L'Étranger"], ["Michel Butor", "La Modification"], ["Marguerite Duras", "L'Amant"]], why: "Obras." },
    { fase: "indep", c: ["b6vt-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Dans L'Étranger , publié en 1942 , le narrateur [Rastignac] raconte son histoire à la première personne .", fix: "Meursault", why: "<b>Meursault</b>." },
    { fase: "indep", c: ["b6vt-auteurs"], k: "choice", ask: "¿Qué hace histórico el premio de Annie Ernaux?", q: "Elige.", o: ["Elle est la première Française à recevoir le prix Nobel de littérature.", "Elle a refusé le prix Nobel."], a: 0, why: "Primera francesa." },
    { fase: "aplica", c: ["b6vt-mouvements"], k: "choice", ask: "¿A qué noción hay que asociar el pensamiento de Camus?", q: "Elige.", o: ["l'absurde", "l'existentialisme"], a: 0, why: "El absurdo." },
    { fase: "aplica", c: ["b6vt-auteurs"], k: "order", ask: "Ordena las obras por fecha.", tokens: ["Du côté de chez Swann", "Manifeste du surréalisme", "L'Étranger", "La Modification"], why: "<b>1913 · 1924 · 1942 · 1957</b>" },
    { fase: "aplica", c: ["b6vt-mouvements"], k: "fill", ask: "Segunda (persona).", q: "La Modification est entièrement écrite à la ___ personne du pluriel : le narrateur s'adresse au héros en disant « vous ».", acc: ["deuxième", "seconde"], why: "<b>deuxième</b>." },
    { fase: "dominio", c: ["b6vt-auteurs"], k: "choice", ask: "¿Qué escritor rechazó el Nobel en 1964?", q: "Elige.", o: ["Jean-Paul Sartre", "Albert Camus"], a: 0, why: "Sartre." },
    { fase: "dominio", c: ["b6vt-mouvements"], k: "spot", ask: "Encuentra el error.", s: "Le Nouveau Roman [adore] le narrateur omniscient et le personnage traditionnel .", fix: "conteste", why: "Los <b>conteste</b>." },
    { fase: "dominio", c: ["b6vt-auteurs", "b6vt-mouvements"], k: "listen", say: "Dans L'Étranger, Meursault raconte son histoire à la première personne.", acc: ["Dans L'Étranger, Meursault raconte son histoire à la première personne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans L'Étranger, Meursault raconte son histoire à la première personne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Proust", "Swann", "André Breton", "Breton", "Sartre", "Jean-Paul Sartre", "La Nausée", "Camus", "Albert Camus", "L'Étranger", "Meursault", "Rastignac", "Michel Butor", "Butor", "La Modification", "Robbe-Grillet", "Marguerite Duras", "Duras", "L'Amant", "Annie Ernaux", "Ernaux", "Nobel"], previo: [] }
};

/* ── 8. Les littératures francophones ── */
E["lit-francophonies"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les littératures francophones",
  objetivo: {
    que: "Vas a conocer las grandes literaturas en francés fuera de Francia: África, el Magreb, las Antillas, Haití y Quebec.",
    corto: "Une si longue lettre (Mariama Bâ, 1979), roman épistolaire. · Hampâté Bâ défend la tradition orale. · La créolisation (Glissant).",
    podras: ["Situar la Négritude (Césaire, Senghor, Damas; nacida en París en los años 1930; Cahier d'un retour au pays natal, 1939).", "Asociar autores y países: Kateb Yacine y Assia Djebar (Argelia), Glissant y Maryse Condé (Antillas), Laferrière (Haití), Gabrielle Roy y Anne Hébert (Quebec), Hampâté Bâ, Kourouma y Mariama Bâ (África subsahariana).", "Explicar la créolisation de Glissant y la novela epistolar Une si longue lettre."],
    iconos: ["ic2/mundo", "ic2/libro", "ic2/pergamino"],
    previos: ["El África francófona (C1.2, lección 11), las Antillas (C1.2, lección 12) y el Magreb (C1.2, lección 60)."],
    capacidad: "Ahora citas autores francófonos de cada continente con su obra."
  },
  requiere: R("b5af-culture", "b5an-creolite", "b5mg-auteurs"), recupera: ["b5an-creolite"],
  conceptos: {
    "b6fc-negritude": { n: "la Négritude: nacida en París (no en Dakar) en los años 1930, entre estudiantes de las colonias; fundadores: Aimé Césaire (Martinique; Cahier d'un retour au pays natal, long poème, 1939), Léopold Sédar Senghor (Sénégal; primer presidente del Senegal independiente en 1960), Léon-Gontran Damas; Kateb Yacine no es fundador de la Négritude", b: "gr" },
    "b6fc-auteurs": { n: "Magreb: Kateb Yacine (Algérie; Nedjma), Assia Djebar; Antillas: Édouard Glissant (la créolisation), Maryse Condé (Guadeloupe); Haití: Dany Laferrière (elegido en la Académie française); Quebec: Gabrielle Roy, Anne Hébert; África subsahariana: Amadou Hampâté Bâ (la tradition orale africaine), Ahmadou Kourouma (Côte d'Ivoire), Mariama Bâ (Une si longue lettre, 1979, roman épistolaire: Ramatoulaye escribe a su amiga Aïssatou)", b: "gr" }
  },
  video: {
    titulo: "Literaturas francófonas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "en français, ailleurs", seg: [
        { es: "Hola. La literatura en francés no es solo de Francia." } ] },
      { v: "frase", filas: [
          { nota: "epistolar", p: 1, partes: [["Une si longue lettre, roman épistolaire.", "-", 1]] },
          { nota: "oralidad", p: 2, partes: [["Hampâté Bâ défend la tradition orale.", "-", 2]] },
          { nota: "Glissant", p: 3, partes: [["la créolisation", "-", 3]] } ], seg: [
        { fr: "Une si longue lettre, de Mariama Bâ, roman épistolaire.", p: 1 }, { fr: "Hampâté Bâ défend la tradition orale.", p: 2 }, { fr: "La créolisation, d'Édouard Glissant.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La Negritud nació en…", o: ["París", "Dakar"], a: 0, es: true,
        bien: "¡Sí! Entre estudiantes de las colonias.", mal: "Nació en París, en los años 30.",
        seg: [ { es: "Pausa. París." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la Négritude", "Aimé Césaire", "Kateb Yacine", "Maryse Condé", "la créolisation", "Mariama Bâ"], seg: [
        { es: "Autores y continentes.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Biblioteca francófona", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara un trabajo sobre literaturas francófonas en la biblioteca.",
    pj: PJ,
    lineas: [
      ["camila", "La Négritude est née à Dakar ? — Non, à Paris, dans les années 1930, entre étudiants des colonies : Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas. Cahier d'un retour au pays natal est un long poème d'Aimé Césaire publié en 1939.", "¿La Negritud nació en Dakar? — No, en París, en los años 30, entre estudiantes de las colonias: Aimé Césaire, Léopold Sédar Senghor y Léon-Gontran Damas. Cuaderno de un retorno al país natal es un largo poema de Aimé Césaire publicado en 1939."],
      ["sofia", "Senghor, poète de la Négritude, est devenu en 1960 le premier président du Sénégal indépendant. Au Maghreb, lisez Kateb Yacine, qui a écrit Nedjma, et Assia Djebar.", "Senghor, poeta de la Negritud, se convirtió en 1960 en el primer presidente del Senegal independiente. En el Magreb, lean a Kateb Yacine, que escribió Nedjma, y a Assia Djebar."],
      ["camila", "Et aux Antilles ? — Le penseur martiniquais Édouard Glissant a développé la notion de créolisation. Maryse Condé est guadeloupéenne, et l'écrivain d'origine haïtienne Dany Laferrière a été élu à l'Académie française.", "¿Y en las Antillas? — El pensador martiniqués Édouard Glissant desarrolló la noción de criollización. Maryse Condé es guadalupeña, y el escritor de origen haitiano Dany Laferrière fue elegido en la Academia francesa."],
      ["sofia", "Et en Afrique subsaharienne : Amadou Hampâté Bâ a défendu la tradition orale africaine, et Une si longue lettre, de Mariama Bâ, est un roman épistolaire : la narratrice, Ramatoulaye, écrit à son amie Aïssatou.", "Y en África subsahariana: Amadou Hampâté Bâ defendió la tradición oral africana, y Mi carta más larga, de Mariama Bâ, es una novela epistolar: la narradora, Ramatoulaye, le escribe a su amiga Aïssatou."]
    ],
    fijate: "Fíjate: la Négritude (Paris, années 1930), Cahier d'un retour au pays natal (1939), le premier président du Sénégal, Nedjma, la créolisation (Glissant), élu à l'Académie française, la tradition orale africaine, un roman épistolaire."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y movimientos",
      idea: "La Négritude nace en París (no en Dakar) en los años 1930, entre estudiantes de las colonias: Aimé Césaire (Martinica; Cahier d'un retour au pays natal, largo poema de 1939), Léopold Sédar Senghor (Senegal; primer presidente del Senegal independiente en 1960) y Léon-Gontran Damas. Magreb: Kateb Yacine (Argelia; Nedjma) y Assia Djebar. Antillas: Édouard Glissant (la créolisation) y Maryse Condé (Guadalupe). Haití: Dany Laferrière (Académie française). Quebec: Gabrielle Roy, Anne Hébert. África subsahariana: Amadou Hampâté Bâ (defensor de la tradición oral), Ahmadou Kourouma (Costa de Marfil) y Mariama Bâ (Une si longue lettre, 1979, novela epistolar: Ramatoulaye escribe a su amiga Aïssatou).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Región"], [
        ["Kateb Yacine", "el que NO es fundador de la Negritud", "Maghreb"],
        ["Kateb Yacine", "el autor de Nedjma", "Maghreb"],
        ["la créolisation", "la noción de Glissant", "Antilles"],
        ["la tradition orale africaine", "el patrimonio que defendió Hampâté Bâ", "Afrique subsaharienne"],
        ["Aimé Césaire = Martinique · Léopold Sédar Senghor = Sénégal · Kateb Yacine = Algérie · Maryse Condé = Guadeloupe · Dany Laferrière = Haïti · Ahmadou Kourouma = Côte d'Ivoire", "autores y países", "resumen"],
        ["Une si longue lettre (1979) est un roman épistolaire : Ramatoulaye écrit à son amie Aïssatou. · épistolaire", "Mi carta más larga es una novela epistolar.", "Afrique subsaharienne"],
        ["Poète de la Négritude, Senghor est devenu en 1960 le premier président du Sénégal indépendant. · Sénégal", "Senghor fue el primer presidente del Senegal.", "Afrique subsaharienne"],
        ["Kateb Yacine · Assia Djebar", "autores del Magreb", "Maghreb"],
        ["Édouard Glissant · Maryse Condé", "autores de las Antillas", "Antilles"],
        ["Gabrielle Roy · Anne Hébert", "autoras de Quebec", "Québec"],
        ["Amadou Hampâté Bâ · Mariama Bâ", "autores de África subsahariana", "Afrique subsaharienne"],
        ["L'écrivain d'origine haïtienne Dany Laferrière est élu à l'Académie française. · Laferrière", "Laferrière es elegido en la Academia.", "Haïti"],
        ["Cahier d'un retour au pays natal est un long poème d'Aimé Césaire publié en 1939", "Cuaderno de un retorno al país natal (1939)", "Antilles"]
      ]],
      ej: [["Une si longue lettre (Mariama Bâ, 1979), roman épistolaire", "novela epistolar"], ["Hampâté Bâ défend la tradition orale.", "Hampâté Bâ defiende la tradición oral."], ["la créolisation (Glissant)", "la criollización"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La Négritude est née à Dakar.", "La Négritude est née à Paris.", "Entre estudiantes de las colonias."], ["Senghor, premier président du Mali", "Senghor, premier président du Sénégal", "1960."], ["Kateb Yacine, fondateur de la Négritude", "Kateb Yacine, écrivain algérien (Nedjma)", "Magreb."]] }
  ],
  ejemplos: [
    { sit: "Maryse Condé es de…", resp: "Guadeloupe", pasos: ["Antillas."], porque: "Autores." },
    { sit: "Ahmadou Kourouma es de…", resp: "Côte d'Ivoire", pasos: ["África."], porque: "Autores." },
    { sit: "Gabrielle Roy y Anne Hébert son de…", resp: "Québec", pasos: ["América."], porque: "Autores." }
  ],
  comprueba: [
    { q: "Cahier d'un retour au pays natal es…", o: ["un largo poema de Césaire", "una novela de Senghor"], a: 0, b: "gr", porque: "1939." },
    { q: "Una novela epistolar está hecha de…", o: ["cartas", "diálogos de teatro"], a: 0, b: "gr", porque: "Epístolas." },
    { q: "Dany Laferrière es de origen…", o: ["haitiano", "argelino"], a: 0, b: "gr", porque: "Haití." }
  ],
  practica: [
    { fase: "guiada", c: ["b6fc-auteurs"], k: "sort", ask: "Clasifica cada autor por región.", q: "Clasifica.", cats: ["Maghreb", "Antilles", "Québec", "Afrique subsaharienne"], items: [["Kateb Yacine", 0], ["Assia Djebar", 0], ["Édouard Glissant", 1], ["Maryse Condé", 1], ["Gabrielle Roy", 2], ["Anne Hébert", 2], ["Amadou Hampâté Bâ", 3], ["Mariama Bâ", 3]], pista: "Argelia, Caribe, Canadá, África.", why: "Regiones." },
    { fase: "guiada", c: ["b6fc-negritude"], k: "choice", ask: "¿Cuál de estos escritores NO es fundador de la Negritud?", q: "Elige.", o: ["Kateb Yacine", "Aimé Césaire"], a: 0, pista: "Busca al magrebí.", why: "Kateb Yacine." },
    { fase: "guiada", c: ["b6fc-auteurs"], k: "fill", ask: "Novela hecha de cartas (adjetivo).", q: "Une si longue lettre (1979) est un roman ___ : la narratrice, Ramatoulaye, écrit à son amie Aïssatou.", acc: ["épistolaire"], pista: "epístola.", why: "<b>épistolaire</b>." },
    { fase: "indep", c: ["b6fc-negritude", "b6fc-auteurs"], k: "match", ask: "Une cada autor con su país.", q: "Autor → país", pairs: [["Aimé Césaire", "Martinique"], ["Léopold Sédar Senghor", "Sénégal"], ["Kateb Yacine", "Algérie"], ["Maryse Condé", "Guadeloupe"], ["Dany Laferrière", "Haïti"], ["Ahmadou Kourouma", "Côte d'Ivoire"]], why: "Países." },
    { fase: "indep", c: ["b6fc-negritude"], k: "spot", ask: "Encuentra el error.", s: "Poète de la Négritude , Léopold Sédar Senghor est devenu en 1960 le premier président du [Mali] indépendant .", fix: "Sénégal", why: "<b>Sénégal</b>." },
    { fase: "indep", c: ["b6fc-auteurs"], k: "choice", ask: "¿Quién escribió Nedjma?", q: "Elige.", o: ["Kateb Yacine", "Assia Djebar"], a: 0, why: "Kateb Yacine." },
    { fase: "aplica", c: ["b6fc-auteurs"], k: "choice", ask: "¿Qué noción desarrolló el pensador martiniqués Édouard Glissant?", q: "Elige.", o: ["la créolisation", "la Négritude"], a: 0, why: "Criollización." },
    { fase: "aplica", c: ["b6fc-auteurs"], k: "fill", ask: "Apellido del académico de origen haitiano.", q: "L'écrivain d'origine haïtienne Dany ___ est élu à l'Académie française.", acc: ["Laferrière"], why: "<b>Laferrière</b>." },
    { fase: "aplica", c: ["b6fc-auteurs"], k: "choice", ask: "¿Qué patrimonio defendió sobre todo Amadou Hampâté Bâ?", q: "Elige.", o: ["la tradition orale africaine", "la poésie symboliste"], a: 0, why: "Oralidad." },
    { fase: "dominio", c: ["b6fc-negritude"], k: "order", ask: "Ordena la frase.", tokens: ["Cahier d'un retour au pays natal", "est un long poème d'Aimé Césaire", "publié en 1939"], why: "<b>Cahier d'un retour au pays natal est un long poème d'Aimé Césaire publié en 1939</b>" },
    { fase: "dominio", c: ["b6fc-negritude"], k: "spot", ask: "Encuentra el error.", s: "La Négritude est née [à Dakar] dans les années 1930 .", fix: "à Paris", why: "<b>à Paris</b>." },
    { fase: "dominio", c: ["b6fc-auteurs", "b6fc-negritude"], k: "listen", say: "Amadou Hampâté Bâ a défendu la tradition orale africaine.", acc: ["Amadou Hampâté Bâ a défendu la tradition orale africaine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Amadou Hampâté Bâ a défendu la tradition orale africaine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Aimé Césaire", "Césaire", "Léopold Sédar Senghor", "Senghor", "Léon-Gontran Damas", "Damas", "Kateb Yacine", "Nedjma", "Assia Djebar", "Édouard Glissant", "Glissant", "Maryse Condé", "Dany Laferrière", "Laferrière", "Gabrielle Roy", "Anne Hébert", "Amadou Hampâté Bâ", "Hampâté Bâ", "Ahmadou Kourouma", "Kourouma", "Mariama Bâ", "Ramatoulaye", "Aïssatou", "Dakar", "Paris", "Mali", "Sénégal", "Martinique", "Guadeloupe", "Haïti", "Algérie", "Côte d'Ivoire", "Québec", "Négritude"], previo: [] }
};

/* ── 9. Lire une scène de théâtre : répliques, didascalies et double énonciation ── */
E["lit-theatre"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Lire une scène de théâtre : répliques, didascalies et double énonciation",
  objetivo: {
    que: "Vas a analizar una escena de teatro: formas de la palabra, didascalias, doble enunciación y lugar de la escena en la obra.",
    corto: "(À part.) Il ne sait rien. · C'est un monologue d'Harpagon. · Le personnage de Phèdre est tragique. · Il met en scène Molière.",
    podras: ["Reconocer las formas: réplique, tirade, monologue, stichomythie, aparté; y leer las didascalies como voz del autor (en el teatro no hay narrador).", "Explicar la double énonciation: el personaje habla a otro, el autor al público (el aparté se dirige al público).", "Situar la escena (exposition, nœud, dénouement) y distinguir comedia y tragedia; decir le personnage (siempre masculino) y mettre en scène."],
    iconos: ["ic2/nota", "ic2/libro", "ic2/lapiz"],
    previos: ["Los géneros y registros (lección 1), el clasicismo (lección 4) y el festival de Aviñón (C1.2, lección 53)."],
    capacidad: "Ahora comentas una escena de teatro con el vocabulario técnico preciso."
  },
  requiere: R("b6gr-genres", "b6cl-classicisme", "b5av-vocab"), recupera: ["b5av-vocab"],
  conceptos: {
    "b6th-formes": { n: "en el teatro no hay narrador: los personajes hablan y el autor (no «le narrateur») da indicaciones en las didascalies; formas: la réplique (lo que dice un personaje de una vez), la tirade (réplica larga ante otros personajes), le monologue (personaje solo en escena), la stichomythie (intercambio rápido de réplicas muy cortas), l'aparté (habla para sí ante otros que no lo oyen; en realidad se dirige al público: double énonciation); le personnage (siempre masculino, no «la personnage»); mettre en scène (dirigir una obra)", b: "gr" },
    "b6th-structure": { n: "estructura: la scène d'exposition (presenta personajes y situación), le nœud, le dénouement (resolución final de la intriga); la règle des trois unités: une seule action, un seul lieu, une seule journée; comédie (personajes burgueses y criados, desenlace feliz, a menudo una boda; hacer reír y corregir las costumbres: L'Avare de Molière) frente a tragédie (reyes, príncipes y héroes; final desdichado, a menudo la muerte; fatalidad y pasiones destructoras: Phèdre de Racine); répliques célebres: «Au voleur ! au voleur !» (L'Avare), «Rodrigue, as-tu du cœur ?» (Le Cid), «Je le vis, je rougis, je pâlis à sa vue» (Phèdre), «Je suis une force qui va !» (Hernani)", b: "gr" }
  },
  video: {
    titulo: "Leer el teatro", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "double énonciation", seg: [
        { es: "Hola. En el teatro no hay narrador." } ] },
      { v: "frase", filas: [
          { nota: "aparte", p: 1, partes: [["(À part.) Il ne sait rien.", "-", 1]] },
          { nota: "monólogo", p: 2, partes: [["C'est un monologue d'Harpagon.", "-", 2]] },
          { nota: "dirigir", p: 3, partes: [["Il met en scène Molière.", "-", 3]] } ], seg: [
        { fr: "À part. Il ne sait rien.", p: 1 }, { fr: "C'est un monologue d'Harpagon.", p: 2 }, { fr: "Il met en scène Molière.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En un aparte, el personaje se dirige en realidad…", o: ["al público", "a los otros personajes"], a: 0, es: true,
        bien: "¡Sí! Doble enunciación.", mal: "Al público: los demás no lo oyen.",
        seg: [ { es: "Pausa. Al público." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la réplique", "la tirade", "le monologue", "l'aparté", "les didascalies", "le dénouement"], seg: [
        { es: "Formas, didascalias y estructura.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Ensayo de teatro", img: "bg-universidad", yo: "camila",
    escena: "La troupe de la universidad ensaya Molière y Madame Sofia explica el texto.",
    pj: PJ,
    lineas: [
      ["camila", "Cette année, une jeune troupe met en scène Le Malade imaginaire au théâtre de l'université. Le rideau se lève sur une scène d'exposition très vivante !", "Este año, una compañía joven pone en escena El enfermo imaginario en el teatro de la universidad. ¡El telón se levanta sobre una escena de exposición muy viva!"],
      ["sofia", "Au théâtre, il n'y a pas de narrateur : c'est l'auteur qui indique les gestes des comédiens dans les didascalies. Quand Harpagon crie « Au voleur ! au voleur ! », seul sur scène, il prononce un monologue.", "En el teatro no hay narrador: es el autor quien indica los gestos de los actores en las didascalias. Cuando Harpagón grita «¡Al ladrón! ¡al ladrón!», solo en escena, pronuncia un monólogo."],
      ["camila", "Et « (À part.) Il ne sait rien » ? — C'est un aparté : le personnage parle pour lui-même devant d'autres personnages qui ne l'entendent pas. En réalité, il s'adresse au public : c'est la double énonciation.", "¿Y «(Aparte.) No sabe nada»? — Es un aparte: el personaje habla para sí ante otros personajes que no lo oyen. En realidad se dirige al público: es la doble enunciación."],
      ["sofia", "Et attention au genre : on dit le personnage, même pour Phèdre. Dans Phèdre, Racine fait du personnage de Phèdre une héroïne tragique, écrasée par la fatalité. La comédie, elle, finit souvent par un mariage.", "Y ojo con el género: se dice le personnage, incluso para Fedra. En Fedra, Racine hace del personaje de Fedra una heroína trágica, aplastada por la fatalidad. La comedia, en cambio, termina a menudo con una boda."]
    ],
    fijate: "Fíjate: met en scène, une scène d'exposition, pas de narrateur, l'auteur, les didascalies, un monologue, un aparté, la double énonciation, le personnage (masculin), une héroïne tragique, un mariage (comédie)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Formas y estructura",
      idea: "En el teatro no hay narrador: los personajes hablan y el autor da indicaciones en las didascalies (gestos, tono, decorado). Formas de la palabra: la réplique (lo que un personaje dice de una vez), la tirade (réplica larga ante otros), le monologue (personaje solo en escena), la stichomythie (intercambio rápido de réplicas muy cortas), l'aparté (habla para sí ante otros que no lo oyen). Doble enunciación: el personaje habla a otro y, a la vez, el autor habla al público. Estructura: la scène d'exposition presenta personajes y situación; luego le nœud y le dénouement (resolución final). Regla de las tres unidades: una acción, un lugar, una jornada. Comedia: burgueses y criados, final feliz (a menudo una boda), hacer reír y corregir costumbres (L'Avare). Tragedia: reyes y héroes, final desdichado, fatalidad y pasiones destructoras (Phèdre). Se dice le personnage (masculino) y mettre en scène (dirigir).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["une didascalie", "una indicación del autor sobre gestos, tono o decorado", "forme"],
        ["un monologue", "lo que pronuncia un personaje solo en escena", "forme"],
        ["une seule journée", "la tercera unidad (con una acción y un lugar)", "structure"],
        ["au public", "a quién se dirige en realidad un aparte", "forme"],
        ["met en scène", "dirige una obra", "forme"],
        ["Quand un personnage parle pour lui-même devant d'autres personnages qui ne l'entendent pas, c'est un aparté. · aparté", "Hablar para sí ante otros es un aparte.", "forme"],
        ["La première scène, qui présente les personnages et la situation, est la scène d'exposition. · exposition", "La primera escena es la de exposición.", "structure"],
        ["Dans Phèdre, Racine fait du personnage de Phèdre une héroïne tragique. · le personnage", "Racine hace de Fedra una heroína trágica.", "Tragédie"],
        ["Au théâtre, l'auteur indique les gestes des comédiens dans les didascalies. · l'auteur", "En el teatro, el autor indica los gestos.", "forme"],
        ["réplique = ce que dit un personnage en une fois · tirade = longue réplique devant d'autres personnages · stichomythie = échange rapide de répliques très courtes · didascalie = indication scénique de l'auteur · dénouement = résolution finale de l'intrigue", "vocabulario", "resumen"],
        ["« Au voleur ! au voleur ! » = Molière, L'Avare · « Rodrigue, as-tu du cœur ? » = Corneille, Le Cid · « Je le vis, je rougis, je pâlis à sa vue. » = Racine, Phèdre · « Je suis une force qui va ! » = Hugo, Hernani", "réplicas célebres", "resumen"],
        ["personnages bourgeois et valets · dénouement heureux, souvent un mariage · but : faire rire et corriger les mœurs · L'Avare de Molière", "rasgos de la comedia", "Comédie"],
        ["rois, princes et héros · fin malheureuse, souvent la mort · fatalité et passions destructrices · Phèdre de Racine", "rasgos de la tragedia", "Tragédie"],
        ["Rodrigue, as-tu du cœur ?", "Rodrigo, ¿tienes valor?", "Tragédie"],
        ["Le rideau se lève sur une scène d'exposition très vivante.", "El telón se levanta sobre una escena de exposición muy viva.", "structure"]
      ]],
      ej: [["(À part.) Il ne sait rien.", "(Aparte.) No sabe nada."], ["C'est un monologue d'Harpagon.", "Es un monólogo de Harpagón."], ["Le personnage de Phèdre est tragique.", "El personaje de Fedra es trágico."], ["Il met en scène Molière.", "Dirige una obra de Molière."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le narrateur décrit la scène.", "Les didascalies indiquent…", "Teatro = sin narrador."], ["la personnage de Phèdre", "le personnage de Phèdre", "Personnage siempre masculino."], ["Dans un aparté, il parle aux autres personnages.", "Dans un aparté, il s'adresse au public.", "Doble enunciación."]] }
  ],
  ejemplos: [
    { sit: "«Je suis une force qui va !» es de…", resp: "Hugo, Hernani", pasos: ["Drama romántico."], porque: "Réplicas." },
    { sit: "Un intercambio rápido de réplicas muy cortas es…", resp: "une stichomythie", pasos: ["Ritmo vivo."], porque: "Formas." },
    { sit: "La resolución final de la intriga es…", resp: "le dénouement", pasos: ["Fin."], porque: "Estructura." }
  ],
  comprueba: [
    { q: "La tirade es…", o: ["una réplica larga ante otros", "una indicación escénica"], a: 0, b: "gr", porque: "Formas." },
    { q: "La comedia termina a menudo con…", o: ["una boda", "la muerte"], a: 0, b: "gr", porque: "Desenlace feliz." },
    { q: "En el teatro, ¿quién da las indicaciones?", o: ["el autor", "el narrador"], a: 0, b: "gr", porque: "Didascalias." }
  ],
  practica: [
    { fase: "guiada", c: ["b6th-structure"], k: "sort", ask: "¿Comedia o tragedia?", q: "Clasifica.", cats: ["Comédie", "Tragédie"], items: [["personnages bourgeois et valets", 0], ["rois, princes et héros", 1], ["dénouement heureux, souvent un mariage", 0], ["fin malheureuse, souvent la mort", 1], ["but : faire rire et corriger les mœurs", 0], ["fatalité et passions destructrices", 1], ["L'Avare de Molière", 0], ["Phèdre de Racine", 1]], pista: "¿Risa o fatalidad?", why: "Géneros." },
    { fase: "guiada", c: ["b6th-formes"], k: "choice", ask: "Una indicación del autor sobre los gestos, el tono o el decorado se llama…", q: "Elige.", o: ["une didascalie", "une réplique"], a: 0, pista: "En cursiva.", why: "Didascalia." },
    { fase: "guiada", c: ["b6th-formes"], k: "fill", ask: "Hablar para sí ante otros que no oyen.", q: "Quand un personnage parle pour lui-même devant d'autres personnages qui ne l'entendent pas, c'est un ___ .", acc: ["aparté"], pista: "à part.", why: "<b>aparté</b>." },
    { fase: "indep", c: ["b6th-formes", "b6th-structure"], k: "match", ask: "Une cada término con su definición.", q: "Término → definición", pairs: [["réplique", "ce que dit un personnage en une fois"], ["tirade", "longue réplique devant d'autres personnages"], ["stichomythie", "échange rapide de répliques très courtes"], ["didascalie", "indication scénique de l'auteur"], ["dénouement", "résolution finale de l'intrigue"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6th-structure"], k: "fill", ask: "La primera escena.", q: "La première scène, qui présente les personnages et la situation, est la scène d'___ .", acc: ["exposition"], why: "<b>exposition</b>." },
    { fase: "indep", c: ["b6th-formes"], k: "spot", ask: "Encuentra el error de género.", s: "Dans Phèdre , Racine fait [de la personnage] de Phèdre une héroïne tragique .", fix: "du personnage", why: "<b>du personnage</b>: personnage es masculino." },
    { fase: "aplica", c: ["b6th-formes"], k: "spot", ask: "Encuentra el error.", s: "Au théâtre , [le narrateur] indique les gestes des comédiens dans les didascalies .", fix: "l'auteur", why: "<b>l'auteur</b>." },
    { fase: "aplica", c: ["b6th-structure"], k: "match", ask: "Une cada réplica con su obra.", q: "Réplica → obra", pairs: [["« Au voleur ! au voleur ! »", "Molière, L'Avare"], ["« Rodrigue, as-tu du cœur ? »", "Corneille, Le Cid"], ["« Je le vis, je rougis, je pâlis à sa vue. »", "Racine, Phèdre"], ["« Je suis une force qui va ! »", "Hugo, Hernani"]], why: "Réplicas." },
    { fase: "aplica", c: ["b6th-formes"], k: "choice", ask: "En un aparte, el personaje se dirige en realidad…", q: "«Dans un aparté, le personnage s'adresse en réalité ___ .»", o: ["au public", "aux autres personnages"], a: 0, why: "Al público." },
    { fase: "dominio", c: ["b6th-structure"], k: "choice", ask: "La regla de las tres unidades impone una sola acción, un solo lugar y…", q: "Elige.", o: ["une seule journée", "un seul personnage"], a: 0, why: "Una jornada." },
    { fase: "dominio", c: ["b6th-formes"], k: "choice", ask: "Dirigir una obra.", q: "«Cette année, une jeune troupe ___ Le Malade imaginaire au théâtre de l'université.»", o: ["met en scène", "met en place"], a: 0, why: "<b>met en scène</b>." },
    { fase: "dominio", c: ["b6th-structure", "b6th-formes"], k: "listen", say: "Le rideau se lève sur une scène d'exposition très vivante.", acc: ["Le rideau se lève sur une scène d'exposition très vivante."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le rideau se lève sur une scène d'exposition très vivante.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Molière", "Le Malade imaginaire", "L'Avare", "Harpagon", "Racine", "Phèdre", "Corneille", "Le Cid", "Rodrigue", "Hugo", "Hernani"], previo: [] }
};

/* ── 10. Analyser un récit : narrateur, focalisation et temps ── */
E["lit-recit"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Analyser un récit : narrateur, focalisation et temps",
  objetivo: {
    que: "Vas a analizar un relato: quién cuenta, desde dónde ve y cómo organiza el tiempo y las palabras de los personajes.",
    corto: "Le narrateur est omniscient. · C'est une analepse. · La Parure est une nouvelle. · Il ouvrit la porte ; il pleuvait.",
    podras: ["Distinguir autor, narrador y personaje; narrador interno (je) o externo (il); focalización cero, interna o externa.", "Analizar el tiempo: passé simple (primer plano) / imparfait (fondo); ellipse, analepse, prolepse.", "Reconocer el discurso directo, indirecto, indirecto libre y el récit de paroles; no confundir roman, nouvelle y conte."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/pergamino"],
    previos: ["El romanticismo y el realismo (lección 5), el siglo XX (lección 7) y el passé simple (B2.1, lección 11)."],
    capacidad: "Ahora analizas la narración de cualquier relato con precisión."
  },
  requiere: R("b6rr-realisme", "b6vt-auteurs", "b3ps-usage"), recupera: ["b3ps-usage"],
  conceptos: {
    "b6re-narrateur": { n: "autor ≠ narrador ≠ personaje (Le narrateur n'est pas l'auteur; al comienzo de Bel-Ami sale del restaurante Georges Duroy, no Maupassant); narrador interne (je: «Longtemps, je me suis couché de bonne heure», Proust) o externe (il); narrador testigo («Nous étions à l'Étude…», Flaubert); focalisation zéro (narrador omnisciente: conoce pasado y pensamientos de todos), interne (el punto de vista de un personaje), externe (como una cámara: no se sabe quién es ni qué piensa)", b: "gr" },
    "b6re-temps": { n: "tiempo: passé simple = acciones de primer plano (Il ouvrit la porte), imparfait = fondo (Il pleuvait depuis le matin); l'ellipse (el narrador calla un periodo), l'analepse (retrospección), la prolepse (anticipación); discours direct (Il dit : « Je partirai demain. »), indirect (Il dit qu'il partirait le lendemain.), indirect libre (Il partirait demain, c'était décidé.), récit de paroles (Il annonça son départ.); un roman (novela; Bel-Ami), une nouvelle (relato corto; La Parure), un conte (cuento maravilloso)", b: "gr" }
  },
  video: {
    titulo: "Analizar un relato", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "qui raconte ?", seg: [
        { es: "Hola. Quién cuenta, desde dónde ve y cómo maneja el tiempo." } ] },
      { v: "frase", filas: [
          { nota: "omnisciente", p: 1, partes: [["Le narrateur est omniscient.", "-", 1]] },
          { nota: "retrospección", p: 2, partes: [["C'est une analepse.", "-", 2]] },
          { nota: "planos", p: 3, partes: [["Il ouvrit la porte ; il pleuvait.", "-", 3]] } ], seg: [
        { fr: "Le narrateur est omniscient.", p: 1 }, { fr: "C'est une analepse.", p: 2 }, { fr: "Il ouvrit la porte ; il pleuvait.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Autor y narrador son lo mismo?", o: ["No, son distintos", "Sí, siempre"], a: 0, es: true,
        bien: "¡Sí! El narrador es una voz del texto.", mal: "Autor ≠ narrador.",
        seg: [ { es: "Pausa. Son distintos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le narrateur interne", "la focalisation zéro", "la focalisation interne", "l'analepse", "l'ellipse", "le discours indirect libre"], seg: [
        { es: "Narrador, focalización y tiempo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Comentar Maupassant", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara un comentario sobre Maupassant con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai écrit : « Au début de Bel-Ami, Maupassant sort du restaurant. » — Attention : le narrateur n'est pas l'auteur, et le personnage non plus ! C'est Georges Duroy qui sort du restaurant, avec quelques sous en poche.", "Escribí: «Al principio de Bel-Ami, Maupassant sale del restaurante.» — Ojo: el narrador no es el autor, ¡y el personaje tampoco! Es Georges Duroy quien sale del restaurante, con unas monedas en el bolsillo."],
      ["sofia", "Et Bel-Ami est un roman ; La Parure, en revanche, est une nouvelle de quelques pages seulement. Ici, le narrateur connaît le passé et les pensées de tous les personnages : c'est une focalisation zéro.", "Y Bel-Ami es una novela; La Parure, en cambio, es un relato de solo unas páginas. Aquí el narrador conoce el pasado y los pensamientos de todos los personajes: es una focalización cero."],
      ["camila", "Et « Longtemps, je me suis couché de bonne heure » ? — Le narrateur est interne : il raconte à la première personne. Si le lecteur ne sait ni qui est le personnage ni ce qu'il pense, la focalisation est externe.", "¿Y «Mucho tiempo me acosté temprano»? — El narrador es interno: cuenta en primera persona. Si el lector no sabe ni quién es el personaje ni lo que piensa, la focalización es externa."],
      ["sofia", "Regarde les temps : « Il ouvrit la porte ; il pleuvait. » Les actions de premier plan sont au passé simple, le décor à l'imparfait. Et ce retour en arrière sur l'enfance de Duroy, c'est une analepse.", "Mira los tiempos: «Abrió la puerta; llovía.» Las acciones de primer plano van en passé simple, el decorado en imparfait. Y esa vuelta atrás a la infancia de Duroy es una analepsis."]
    ],
    fijate: "Fíjate: le narrateur n'est pas l'auteur, Georges Duroy, un roman / une nouvelle, une focalisation zéro, un narrateur interne (première personne), une focalisation externe, le passé simple (premier plan), l'imparfait (décor), une analepse."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Narrador, focalización, tiempo",
      idea: "Autor ≠ narrador ≠ personaje: al comienzo de Bel-Ami no es Maupassant quien sale del restaurante, sino Georges Duroy. El narrador es interno si cuenta en primera persona (je) y externo si cuenta en tercera (il); con «nous» puede ser un testigo presente en la escena. Focalización: cero (narrador omnisciente: conoce el pasado y los pensamientos de todos), interna (a través de un personaje), externa (como una cámara: no se sabe quién es ni qué piensa). Tiempo: el passé simple da las acciones de primer plano, el imparfait el decorado; l'ellipse calla un periodo, l'analepse vuelve atrás, la prolepse anticipa. Palabras de los personajes: discurso directo, indirecto, indirecto libre, récit de paroles. Formas: un roman (novela), une nouvelle (relato corto), un conte (cuento maravilloso).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Plano"], [
        ["interne : il raconte à la première personne", "el narrador de «Longtemps, je me suis couché de bonne heure»", "narrateur"],
        ["zéro", "la focalización del narrador omnisciente", "narrateur"],
        ["une analepse", "una vuelta atrás en el relato", "temps"],
        ["externe", "la focalización en la que no se sabe quién es ni qué piensa", "narrateur"],
        ["un narrateur témoin, présent dans la scène", "lo que revela «nous» en Flaubert", "narrateur"],
        ["Le narrateur passe sous silence toute une période : c'est une ellipse. · ellipse", "Callar un periodo es una elipsis.", "temps"],
        ["Dans un récit au passé, les actions de premier plan sont au passé simple. · simple", "Las acciones de primer plano van en passé simple.", "temps"],
        ["Au début de Bel-Ami, Georges Duroy sort du restaurant avec quelques sous en poche. · Georges Duroy", "Al principio de Bel-Ami, Georges Duroy sale del restaurante.", "narrateur"],
        ["La Parure de Maupassant est une nouvelle de quelques pages seulement. · une nouvelle", "La Parure es un relato corto.", "formes"],
        ["discours direct = Il dit : « Je partirai demain. » · discours indirect = Il dit qu'il partirait le lendemain. · discours indirect libre = Il partirait demain, c'était décidé. · récit de paroles = Il annonça son départ.", "los discursos", "resumen"],
        ["Il ouvrit la porte. · Elle entra brusquement. · Soudain, un cri retentit.", "acciones de primer plano", "Premier plan (passé simple)"],
        ["Il pleuvait depuis le matin. · La rue était déserte. · Les lampes éclairaient faiblement la salle.", "decorado", "Arrière-plan (imparfait)"],
        ["un roman = una novela · une nouvelle = un relato corto · un conte = un cuento maravilloso · une analepse = una retrospección · le narrateur = el narrador", "vocabulario", "resumen"],
        ["Le narrateur n'est pas l'auteur", "El narrador no es el autor", "narrateur"],
        ["Le narrateur adopte le point de vue du personnage principal.", "El narrador adopta el punto de vista del protagonista.", "narrateur"]
      ]],
      ej: [["Le narrateur est omniscient.", "El narrador es omnisciente."], ["C'est une analepse.", "Es una retrospección."], ["La Parure est une nouvelle.", "La Parure es un relato corto."], ["Il ouvrit la porte ; il pleuvait.", "Abrió la puerta; llovía."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Maupassant sort du restaurant.", "Le personnage sort du restaurant.", "Autor ≠ personaje."], ["Bel-Ami est une nouvelle.", "Bel-Ami est un roman.", "Nouvelle = relato corto."], ["l'imparfait pour les actions de premier plan", "le passé simple pour les actions de premier plan", "Imparfait = decorado."]] }
  ],
  ejemplos: [
    { sit: "«Il partirait demain, c'était décidé.» es…", resp: "discours indirect libre", pasos: ["Sin verbo introductor."], porque: "Discursos." },
    { sit: "Una anticipación de lo que pasará se llama…", resp: "une prolepse", pasos: ["Hacia adelante."], porque: "Tiempo." },
    { sit: "Un cuento maravilloso es…", resp: "un conte", pasos: ["Perrault."], porque: "Formas." }
  ],
  comprueba: [
    { q: "La focalización interna adopta…", o: ["el punto de vista de un personaje", "la mirada de una cámara"], a: 0, b: "gr", porque: "Interna." },
    { q: "El imparfait sirve para…", o: ["el decorado", "las acciones repentinas"], a: 0, b: "gr", porque: "Fondo." },
    { q: "«Il annonça son départ» es…", o: ["récit de paroles", "discurso directo"], a: 0, b: "gr", porque: "Resumen de palabras." }
  ],
  practica: [
    { fase: "guiada", c: ["b6re-temps"], k: "sort", ask: "¿Primer plano (passé simple) o fondo (imparfait)?", q: "Clasifica.", cats: ["Premier plan (passé simple)", "Arrière-plan (imparfait)"], items: [["Il ouvrit la porte.", 0], ["Il pleuvait depuis le matin.", 1], ["Elle entra brusquement.", 0], ["La rue était déserte.", 1], ["Soudain, un cri retentit.", 0], ["Les lampes éclairaient faiblement la salle.", 1]], pista: "¿Acción o decorado?", why: "Planos." },
    { fase: "guiada", c: ["b6re-narrateur"], k: "choice", ask: "«Longtemps, je me suis couché de bonne heure» (Proust): el narrador es…", q: "Elige.", o: ["interne : il raconte à la première personne", "externe : il raconte à la troisième personne"], a: 0, pista: "je.", why: "Interno." },
    { fase: "guiada", c: ["b6re-temps"], k: "fill", ask: "Callar un periodo.", q: "Le narrateur passe sous silence toute une période : c'est une ___ .", acc: ["ellipse"], pista: "ell…", why: "<b>ellipse</b>." },
    { fase: "indep", c: ["b6re-narrateur"], k: "choice", ask: "El narrador conoce el pasado y los pensamientos de todos: la focalización es…", q: "Elige.", o: ["zéro", "externe"], a: 0, why: "Cero." },
    { fase: "indep", c: ["b6re-narrateur"], k: "spot", ask: "Encuentra el error.", s: "Au début de Bel-Ami , [Maupassant] sort du restaurant avec quelques sous en poche .", fix: "Georges Duroy", why: "<b>Georges Duroy</b>: el personaje, no el autor." },
    { fase: "indep", c: ["b6re-temps"], k: "match", ask: "Une cada discurso con su ejemplo.", q: "Discurso → ejemplo", pairs: [["discours direct", "Il dit : « Je partirai demain. »"], ["discours indirect", "Il dit qu'il partirait le lendemain."], ["discours indirect libre", "Il partirait demain, c'était décidé."], ["récit de paroles", "Il annonça son départ."]], why: "Discursos." },
    { fase: "aplica", c: ["b6re-temps"], k: "fill", ask: "Passé ___ (una palabra).", q: "Dans un récit au passé, les actions de premier plan sont au passé ___ .", acc: ["simple"], why: "<b>simple</b>." },
    { fase: "aplica", c: ["b6re-temps"], k: "spot", ask: "Encuentra el error.", s: "La Parure de Maupassant est [un roman] de quelques pages seulement .", fix: "une nouvelle", why: "<b>une nouvelle</b>." },
    { fase: "aplica", c: ["b6re-narrateur"], k: "choice", ask: "Un hombre camina solo de noche; el lector no sabe ni quién es ni qué piensa. La focalización es…", q: "Elige.", o: ["externe", "interne"], a: 0, why: "Externa." },
    { fase: "dominio", c: ["b6re-temps"], k: "choice", ask: "Una vuelta atrás en el relato se llama…", q: "Elige.", o: ["une analepse", "une prolepse"], a: 0, why: "Analepsis." },
    { fase: "dominio", c: ["b6re-narrateur"], k: "choice", ask: "En «Nous étions à l'Étude, quand le Proviseur entra» (Flaubert), el «nous» revela…", q: "Elige.", o: ["un narrateur témoin, présent dans la scène", "un narrateur omniscient"], a: 0, why: "Testigo." },
    { fase: "dominio", c: ["b6re-narrateur", "b6re-temps"], k: "listen", say: "Le narrateur adopte le point de vue du personnage principal.", acc: ["Le narrateur adopte le point de vue du personnage principal."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le narrateur adopte le point de vue du personnage principal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Maupassant", "Bel-Ami", "Georges Duroy", "Duroy", "La Parure", "Proust", "Flaubert", "Proviseur", "Étude"], previo: [] }
};

/* ── 11. La dissertation littéraire : problématique, plan et exemples ── */
E["lit-dissertation"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La dissertation littéraire : problématique, plan et exemples",
  objetivo: {
    que: "Vas a construir una disertación literaria: analizar el tema, formular la problemática, elegir un plan y argumentar con ejemplos precisos.",
    corto: "Nous montrerons que… · Dans quelle mesure le roman reflète-t-il le réel ? · Certes…, mais… · L'intrigue de Germinal…",
    podras: ["Formular la problemática como una pregunta («Dans quelle mesure… ?») y elegir un plan dialectique (thèse, antithèse, synthèse) o thématique.", "Escribir introducción (amorce, analyse du sujet, problématique, annonce du plan) y conclusión (bilan, réponse, ouverture).", "Argumentar en registro impersonal («Nous montrerons que…») con argument + exemple précis + analyse, y conectores (Tout d'abord, Certes… mais, En effet, Pourtant, En définitive)."],
    iconos: ["ic2/lapiz", "ic2/libros", "ic2/libro"],
    previos: ["La versificación y el comentario (lección 3) y el realismo (lección 5)."],
    capacidad: "Ahora planificas y redactas una disertación literaria con método."
  },
  requiere: R("b6vc-commentaire", "b6rr-realisme"), recupera: ["b6vc-commentaire"],
  conceptos: {
    "b6ds-plan": { n: "la dissertation responde a una pregunta sobre la literatura (no es un resumen; el commentaire de texte, en cambio, analiza un extracto procedimiento por procedimiento): analizar cada palabra del sujeto; la problématique (la pregunta central: «Dans quelle mesure le roman reflète-t-il la réalité ?», «Le roman doit-il seulement refléter la réalité ?»); el plan dialectique (thèse, antithèse, synthèse) o thématique; introducción: l'amorce / l'accroche, la citation et l'analyse du sujet, la problématique, l'annonce du plan; conclusión: le bilan, la réponse à la problématique, l'ouverture", b: "gr" },
    "b6ds-argument": { n: "cada subparte: un argument, un exemple précis, une analyse («Dans Germinal, Zola s'appuie sur une enquête menée dans les mines du Nord»); registro impersonal: «Nous montrerons que…» (no «Je pense que…»); l'intrigue (la trama; l'argument = el razonamiento); conectores: Tout d'abord (primer argumento), Certes… mais (conceder y matizar), En effet (justificar), Pourtant (oponer), En définitive (concluir); Molière: «corriger les hommes en les divertissant»", b: "gr" }
  },
  video: {
    titulo: "La disertación", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "Dans quelle mesure… ?", seg: [
        { es: "Hola. Una disertación responde a una pregunta: no es un resumen." } ] },
      { v: "frase", filas: [
          { nota: "impersonal", p: 1, partes: [["Nous montrerons que…", "-", 1]] },
          { nota: "problemática", p: 2, partes: [["Dans quelle mesure le roman reflète-t-il le réel ?", "-", 2]] },
          { nota: "matizar", p: 3, partes: [["Certes…, mais…", "-", 3]] } ], seg: [
        { fr: "Nous montrerons que.", p: 1 }, { fr: "Dans quelle mesure le roman reflète-t-il le réel ?", p: 2 }, { fr: "Certes, mais.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un plan «tesis, antítesis, síntesis» es…", o: ["dialéctico", "temático"], a: 0, es: true,
        bien: "¡Sí! Plan dialéctico.", mal: "Es el plan dialéctico.",
        seg: [ { es: "Pausa. Dialéctico." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la problématique", "le plan dialectique", "l'amorce", "l'ouverture", "argument + exemple + analyse", "Nous montrerons que"], seg: [
        { es: "Problemática, plan y ejemplos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Corrección de la disertación", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia devuelve la primera disertación de Camila con comentarios.",
    pj: PJ,
    lineas: [
      ["sofia", "Votre copie résume Germinal : une dissertation n'est pas un résumé. Elle répond à une question, la problématique. Par exemple : « Dans quelle mesure le roman reflète-t-il la réalité ? »", "Su trabajo resume Germinal: una disertación no es un resumen. Responde a una pregunta, la problemática. Por ejemplo: «¿En qué medida la novela refleja la realidad?»"],
      ["camila", "Et j'ai écrit « Je pense que le roman ne se contente pas de refléter le réel ». — Préférez le registre impersonnel : « Nous montrerons que… ». Et ne dites pas « l'argument de Germinal » : c'est l'intrigue de Germinal qui se déroule dans une mine.", "Y escribí «Je pense que la novela no se limita a reflejar lo real». — Prefiera el registro impersonal: «Mostraremos que…». Y no diga «el argumento de Germinal»: es la trama de Germinal la que transcurre en una mina."],
      ["sofia", "Pour le plan, choisissez un plan dialectique — thèse, antithèse, synthèse — ou thématique. Chaque partie doit associer un argument, un exemple et une analyse. L'exemple le plus solide est précis : « Dans Germinal, Zola s'appuie sur une enquête menée dans les mines du Nord. »", "Para el plan, elija un plan dialéctico —tesis, antítesis, síntesis— o temático. Cada parte debe asociar un argumento, un ejemplo y un análisis. El ejemplo más sólido es preciso: «En Germinal, Zola se apoya en una investigación hecha en las minas del Norte.»"],
      ["camila", "Et la conclusion ? — Le bilan, la réponse à la problématique, puis l'ouverture, qui élargit la réflexion. Vous pouvez citer Molière, qui voulait « corriger les hommes en les divertissant ».", "¿Y la conclusión? — El balance, la respuesta a la problemática, luego la apertura, que amplía la reflexión. Puede citar a Molière, que quería «corregir a los hombres divirtiéndolos»."]
    ],
    fijate: "Fíjate: une dissertation n'est pas un résumé, la problématique, « Dans quelle mesure… ? », « Nous montrerons que… », l'intrigue (no l'argument), le plan dialectique, argument + exemple + analyse, le bilan, l'ouverture."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Método de la disertación",
      idea: "La disertación responde a una pregunta sobre la literatura con un razonamiento organizado y ejemplos precisos; no es un resumen (y no es un comentario de texto, que analiza un extracto procedimiento por procedimiento). Primero se analiza cada palabra del tema; luego se formula la problemática como una pregunta («Dans quelle mesure… ?»). Plan dialectique (thèse, antithèse, synthèse) o thématique. En cada subparte: argument + exemple précis + analyse. Introducción: l'amorce (o accroche), la cita y el análisis del tema, la problématique, l'annonce du plan. Conclusión: le bilan, la réponse à la problématique, l'ouverture. Registro impersonal: «Nous montrerons que…», no «Je pense que…». La trama es l'intrigue (l'argument es el razonamiento). Conectores: Tout d'abord, Certes… mais, En effet, Pourtant, En définitive.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Parte"], [
        ["la problématique", "la pregunta central de la disertación", "Introduction"],
        ["dialectique", "el plan «thèse, antithèse, synthèse»", "plan"],
        ["du commentaire de texte", "el principio de analizar un extracto procedimiento por procedimiento", "méthode"],
        ["Le roman doit-il seulement refléter la réalité ?", "una problemática adecuada", "Introduction"],
        ["Dans Germinal, Zola s'appuie sur une enquête menée dans les mines du Nord.", "un ejemplo sólido", "méthode"],
        ["La dernière phrase de la conclusion, qui élargit la réflexion, est l'ouverture. · ouverture", "La apertura amplía la reflexión.", "Conclusion"],
        ["La première phrase de l'introduction, qui amène le sujet, est l'amorce. · amorce · accroche", "El gancho introduce el tema.", "Introduction"],
        ["Dans cette dissertation, nous montrerons que le roman ne se contente pas de refléter le réel. · nous montrerons que", "Mostraremos que la novela no se limita a reflejar lo real.", "méthode"],
        ["L'intrigue de Germinal se déroule dans une mine du nord de la France. · intrigue", "La trama de Germinal transcurre en una mina.", "méthode"],
        ["Tout d'abord = introduire le premier argument · Certes… mais = concéder puis nuancer · En effet = justifier une affirmation · Pourtant = marquer une opposition · En définitive = conclure", "conectores", "resumen"],
        ["l'amorce · la citation et l'analyse du sujet · la problématique · l'annonce du plan", "las partes de la introducción", "Introduction"],
        ["le bilan de la réflexion · la réponse à la problématique · l'ouverture", "las partes de la conclusión", "Conclusion"],
        ["Molière voulait « corriger les hommes en les divertissant ». · divertissant", "Molière quería corregir divirtiendo.", "méthode"],
        ["Dans quelle mesure le roman reflète-t-il la réalité ?", "una problemática en forma de pregunta", "Introduction"],
        ["Chaque partie doit associer un argument, un exemple et une analyse.", "Cada parte asocia argumento, ejemplo y análisis.", "méthode"]
      ]],
      ej: [["Nous montrerons que…", "Mostraremos que…"], ["Dans quelle mesure le roman reflète-t-il le réel ?", "¿En qué medida la novela refleja lo real?"], ["Certes…, mais…", "Es cierto que…, pero…"], ["L'intrigue de Germinal…", "La trama de Germinal…"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Je pense que…", "Nous montrerons que…", "Registro impersonal."], ["l'argument du roman (= la trama)", "l'intrigue du roman", "Argument = razonamiento."], ["une dissertation qui résume l'œuvre", "une dissertation qui répond à une question", "No es un resumen."]] }
  ],
  ejemplos: [
    { sit: "Conceder y luego matizar:", resp: "Certes… mais", pasos: ["Concesión."], porque: "Conectores." },
    { sit: "Para concluir:", resp: "En définitive", pasos: ["Cierre."], porque: "Conectores." },
    { sit: "Plan organizado por temas, sin oposición:", resp: "thématique", pasos: ["Otro tipo de plan."], porque: "Plan." }
  ],
  comprueba: [
    { q: "La apertura está en…", o: ["la conclusión", "la introducción"], a: 0, b: "gr", porque: "Amplía la reflexión." },
    { q: "«En effet» sirve para…", o: ["justificar", "oponer"], a: 0, b: "gr", porque: "Conectores." },
    { q: "Una disertación es…", o: ["una respuesta argumentada a una pregunta", "un resumen de la obra"], a: 0, b: "gr", porque: "Método." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ds-plan"], k: "sort", ask: "¿Introducción o conclusión?", q: "Clasifica.", cats: ["Introduction", "Conclusion"], items: [["l'amorce", 0], ["la citation et l'analyse du sujet", 0], ["la problématique", 0], ["l'annonce du plan", 0], ["le bilan de la réflexion", 1], ["la réponse à la problématique", 1], ["l'ouverture", 1]], pista: "¿Abre o cierra?", why: "Partes." },
    { fase: "guiada", c: ["b6ds-plan"], k: "choice", ask: "La pregunta central a la que responde la disertación se llama…", q: "Elige.", o: ["la problématique", "l'ouverture"], a: 0, pista: "Una pregunta.", why: "Problemática." },
    { fase: "guiada", c: ["b6ds-plan"], k: "fill", ask: "La última frase que amplía la reflexión.", q: "La dernière phrase de la conclusion, qui élargit la réflexion, est l'___ .", acc: ["ouverture"], pista: "abrir.", why: "<b>ouverture</b>." },
    { fase: "indep", c: ["b6ds-plan"], k: "choice", ask: "Un plan en tres partes «thèse, antithèse, synthèse» es un plan…", q: "Elige.", o: ["dialectique", "thématique"], a: 0, why: "Dialéctico." },
    { fase: "indep", c: ["b6ds-argument"], k: "spot", ask: "Encuentra la expresión demasiado personal.", s: "Dans cette dissertation , [je pense que] le roman ne se contente pas de refléter le réel .", fix: "nous montrerons que", why: "<b>nous montrerons que</b>." },
    { fase: "indep", c: ["b6ds-argument"], k: "match", ask: "Une cada conector con su función.", q: "Conector → función", pairs: [["Tout d'abord", "introduire le premier argument"], ["Certes… mais", "concéder puis nuancer"], ["En effet", "justifier une affirmation"], ["Pourtant", "marquer une opposition"], ["En définitive", "conclure"]], why: "Conectores." },
    { fase: "aplica", c: ["b6ds-argument"], k: "spot", ask: "Encuentra el falso amigo.", s: "L'[argument] de Germinal se déroule dans une mine du nord de la France .", fix: "intrigue", why: "<b>intrigue</b>: la trama." },
    { fase: "aplica", c: ["b6ds-argument"], k: "choice", ask: "¿Qué ejemplo es el más sólido?", q: "Elige.", o: ["Dans Germinal, Zola s'appuie sur une enquête menée dans les mines du Nord.", "Beaucoup de romans parlent de la réalité."], a: 0, why: "Preciso." },
    { fase: "aplica", c: ["b6ds-plan"], k: "fill", ask: "La primera frase de la introducción.", q: "La première phrase de l'introduction, qui amène le sujet, est l'___ .", acc: ["amorce", "accroche"], why: "<b>amorce</b>." },
    { fase: "dominio", c: ["b6ds-plan"], k: "order", ask: "Ordena la problemática.", tokens: ["Dans quelle mesure", "le roman", "reflète-t-il la réalité ?"], why: "<b>Dans quelle mesure le roman reflète-t-il la réalité ?</b>" },
    { fase: "dominio", c: ["b6ds-plan"], k: "choice", ask: "Analizar un extracto preciso, procedimiento por procedimiento, es el principio…", q: "Elige.", o: ["du commentaire de texte", "de la dissertation"], a: 0, why: "Comentario." },
    { fase: "dominio", c: ["b6ds-argument", "b6ds-plan"], k: "listen", say: "Chaque partie doit associer un argument, un exemple et une analyse.", acc: ["Chaque partie doit associer un argument, un exemple et une analyse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chaque partie doit associer un argument, un exemple et une analyse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Germinal", "Zola", "Molière", "Nord"], previo: [] }
};

/* ── 12. Dada et le surréalisme : écriture automatique et image ── */
E["lit-surrealisme"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Dada et le surréalisme : écriture automatique et image",
  objetivo: {
    que: "Vas a entender Dada y el surrealismo: liberar el inconsciente con la escritura automática y la imagen que une realidades lejanas.",
    corto: "La terre est bleue comme une orange. · Breton fonde le surréalisme en 1924. · C'est un texte d'écriture automatique.",
    podras: ["Situar Dada (Zúrich, 1916, en plena guerra), la palabra «surréaliste» (Apollinaire, 1917) y el Manifeste du surréalisme de André Breton (1924).", "Explicar las técnicas: écriture automatique, rêve, hasard objectif; y la imagen surrealista (choque de dos realidades lejanas).", "Asociar obras: Les Champs magnétiques (Breton y Soupault), Capitale de la douleur (Éluard), Le Paysan de Paris (Aragon); escribir surréaliste con é."],
    iconos: ["ic2/rayo", "ic2/lapiz", "ic2/flor"],
    previos: ["El siglo XX (lección 7) y las vanguardias (C1.2, lección 47)."],
    capacidad: "Ahora reconoces y comentas una imagen o un texto surrealista."
  },
  requiere: R("b6vt-mouvements", "b5ag-mouvements"), recupera: ["b5ag-mouvements"],
  conceptos: {
    "b6sr-histoire": { n: "Dada nace en Zurich en 1916, en plena guerra (Tristan Tzara); la palabra «surréaliste» aparece en 1917 bajo la pluma de Guillaume Apollinaire (Alcools); en 1924, André Breton (no Tzara) publica le Manifeste du surréalisme; obras: Les Champs magnétiques (Breton y Soupault), Capitale de la douleur (Paul Éluard), Le Paysan de Paris (Louis Aragon); precursor: Lautréamont (Les Chants de Maldoror); surréaliste con é (sur + réalisme); los surrealistas querían changer la vie par la poésie", b: "gr" },
    "b6sr-image": { n: "técnicas: l'écriture automatique (escribir muy rápido, sin control de la razón), le rêve, l'inconscient, le hasard objectif (una coincidencia turbadora que parece responder a un deseo); valorados: le rêve, l'écriture automatique, le hasard, l'inconscient; contestados: le contrôle de la raison, la vraisemblance, les règles classiques, la morale bourgeoise; la imagen surrealista asocia de forma inesperada realidades lejanas («La terre est bleue comme une orange»; «beau comme la rencontre fortuite sur une table de dissection d'une machine à coudre et d'un parapluie», Lautréamont: el acercamiento de objetos sin relación lógica)", b: "gr" }
  },
  video: {
    titulo: "El surrealismo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "1916 · 1924", seg: [
        { es: "Hola. Escribir sin el control de la razón." } ] },
      { v: "frase", filas: [
          { nota: "imagen", p: 1, partes: [["La terre est bleue comme une orange.", "-", 1]] },
          { nota: "Breton", p: 2, partes: [["Breton fonde le surréalisme en 1924.", "-", 2]] },
          { nota: "técnica", p: 3, partes: [["C'est un texte d'écriture automatique.", "-", 3]] } ], seg: [
        { fr: "La terre est bleue comme une orange.", p: 1 }, { fr: "Breton fonde le surréalisme en 1924.", p: 2 }, { fr: "C'est un texte d'écriture automatique.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El Manifiesto del surrealismo es de…", o: ["André Breton", "Tristan Tzara"], a: 0, es: true,
        bien: "¡Sí! 1924.", mal: "Es de Breton; Tzara es Dada.",
        seg: [ { es: "Pausa. Breton." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Dada", "Apollinaire", "le Manifeste du surréalisme", "l'écriture automatique", "le hasard objectif", "l'image surréaliste"], seg: [
        { es: "Historia, técnicas e imagen.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Taller de escritura automática", img: "bg-cafe", yo: "camila",
    escena: "Madame Sofia propone a la clase un ejercicio de escritura automática.",
    pj: PJ,
    lineas: [
      ["sofia", "Écrivez pendant cinq minutes, très vite, sans vous arrêter et sans contrôle de la raison : c'est l'écriture automatique. En 1924, André Breton publie le Manifeste du surréalisme.", "Escriban durante cinco minutos, muy rápido, sin detenerse y sin control de la razón: es la escritura automática. En 1924, André Breton publica el Manifiesto del surrealismo."],
      ["camila", "Et Dada, c'est avant ? — Oui : le mouvement Dada naît à Zurich en 1916, en pleine guerre, avec Tristan Tzara. Et le mot « surréaliste » apparaît en 1917 sous la plume d'Apollinaire.", "¿Y Dada es antes? — Sí: el movimiento Dada nace en Zúrich en 1916, en plena guerra, con Tristan Tzara. Y la palabra «surrealista» aparece en 1917 bajo la pluma de Apollinaire."],
      ["sofia", "Écoutez Éluard : « La terre est bleue comme une orange. » C'est une image surréaliste : elle associe de façon inattendue des réalités éloignées. Les surréalistes explorent le rêve et l'inconscient.", "Escuchen a Éluard: «La tierra es azul como una naranja.» Es una imagen surrealista: asocia de manera inesperada realidades alejadas. Los surrealistas exploran el sueño y el inconsciente."],
      ["camila", "J'ai écrit « surrealiste » sans accent… — Il faut un é : sur et réalisme, surréaliste ! Et souviens-toi : les surréalistes voulaient changer la vie par la poésie.", "Escribí «surrealiste» sin tilde… — Hace falta é: sur y réalisme, ¡surréaliste! Y recuerda: los surrealistas querían cambiar la vida mediante la poesía."]
    ],
    fijate: "Fíjate: l'écriture automatique (sans contrôle de la raison), le Manifeste du surréalisme (1924), Dada (Zurich, 1916), Apollinaire (1917), une image surréaliste (des réalités éloignées), le rêve et l'inconscient, surréaliste (avec é)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dada y surrealismo",
      idea: "Dada nace en Zúrich en 1916, en plena guerra (Tristan Tzara), y prepara el terreno. La palabra «surréaliste» aparece en 1917 con Guillaume Apollinaire. En 1924, André Breton publica el Manifeste du surréalisme: liberar el inconsciente. Técnicas: la écriture automatique (escribir muy rápido sin control de la razón), el sueño, el azar objetivo (una coincidencia turbadora que parece responder a un deseo). Valoran el sueño, el azar y el inconsciente; contestan el control de la razón, la verosimilitud, las reglas clásicas y la moral burguesa. La imagen surrealista asocia de manera inesperada realidades lejanas: «La terre est bleue comme une orange» (Éluard); Lautréamont, precursor, admira «la rencontre fortuite sur une table de dissection d'une machine à coudre et d'un parapluie». Obras: Les Champs magnétiques (Breton y Soupault), Capitale de la douleur (Éluard), Le Paysan de Paris (Aragon). Se escribe surréaliste, con é.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Actitud"], [
        ["le Manifeste du surréalisme", "lo que publica Breton en 1924", "histoire"],
        ["Guillaume Apollinaire", "quien inventa la palabra «surréaliste» (1917)", "histoire"],
        ["associe de façon inattendue des réalités éloignées", "por qué «La terre est bleue comme une orange» es surrealista", "image"],
        ["le rapprochement d'objets sans rapport logique", "lo que admiran en la frase de Lautréamont", "image"],
        ["une coïncidence troublante qui semble répondre à un désir", "el «hasard objectif» de Breton", "image"],
        ["L'écriture automatique consiste à écrire très vite, sans contrôle de la raison. · automatique", "La escritura automática es escribir sin control de la razón.", "Valorisé par les surréalistes"],
        ["Le mouvement Dada naît à Zurich en 1916, en pleine guerre. · Zurich · Zürich", "Dada nace en Zúrich en 1916.", "histoire"],
        ["En 1924, André Breton publie le Manifeste du surréalisme. · André Breton", "En 1924 Breton publica el Manifiesto.", "histoire"],
        ["Les poètes surréalistes explorent le rêve et l'inconscient. · surréalistes", "Los poetas surrealistas exploran el sueño.", "Valorisé par les surréalistes"],
        ["Les Champs magnétiques = Breton et Soupault · Capitale de la douleur = Paul Éluard · Le Paysan de Paris = Louis Aragon · Les Chants de Maldoror = Lautréamont · Alcools = Guillaume Apollinaire", "obras", "resumen"],
        ["le rêve · l'écriture automatique · le hasard · l'inconscient", "lo que valoran", "Valorisé par les surréalistes"],
        ["le contrôle de la raison · la vraisemblance · les règles classiques · la morale bourgeoise", "lo que contestan", "Contesté par les surréalistes"],
        ["Les surréalistes explorent le rêve et l'inconscient", "Los surrealistas exploran el sueño y el inconsciente", "Valorisé par les surréalistes"],
        ["Les surréalistes voulaient changer la vie par la poésie.", "Los surrealistas querían cambiar la vida con la poesía.", "Valorisé par les surréalistes"]
      ]],
      ej: [["La terre est bleue comme une orange.", "La tierra es azul como una naranja."], ["Breton fonde le surréalisme en 1924.", "Breton funda el surrealismo en 1924."], ["C'est un texte d'écriture automatique.", "Es un texto de escritura automática."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["un mouvement surrealiste", "un mouvement surréaliste", "Con é: sur + réalisme."], ["Tristan Tzara publie le Manifeste du surréalisme.", "André Breton publie le Manifeste du surréalisme.", "Tzara = Dada."], ["Dada naît à Paris en 1924.", "Dada naît à Zurich en 1916.", "En plena guerra."]] }
  ],
  ejemplos: [
    { sit: "Capitale de la douleur es de…", resp: "Paul Éluard", pasos: ["Poesía."], porque: "Obras." },
    { sit: "Le Paysan de Paris es de…", resp: "Louis Aragon", pasos: ["Prosa."], porque: "Obras." },
    { sit: "Los surrealistas contestan…", resp: "la morale bourgeoise", pasos: ["Rebelión."], porque: "Actitud." }
  ],
  comprueba: [
    { q: "Dada nace en…", o: ["Zúrich, 1916", "París, 1924"], a: 0, b: "gr", porque: "En plena guerra." },
    { q: "Les Champs magnétiques es de…", o: ["Breton y Soupault", "Apollinaire"], a: 0, b: "gr", porque: "Escritura automática." },
    { q: "La imagen surrealista une…", o: ["realidades lejanas", "palabras de la misma familia"], a: 0, b: "gr", porque: "Choque." }
  ],
  practica: [
    { fase: "guiada", c: ["b6sr-image"], k: "sort", ask: "¿Valorado o contestado por los surrealistas?", q: "Clasifica.", cats: ["Valorisé par les surréalistes", "Contesté par les surréalistes"], items: [["le rêve", 0], ["l'écriture automatique", 0], ["le hasard", 0], ["l'inconscient", 0], ["le contrôle de la raison", 1], ["la vraisemblance", 1], ["les règles classiques", 1], ["la morale bourgeoise", 1]], pista: "¿Libera o controla?", why: "Actitud." },
    { fase: "guiada", c: ["b6sr-histoire"], k: "choice", ask: "En 1924, André Breton publica…", q: "Elige.", o: ["le Manifeste du surréalisme", "Alcools"], a: 0, pista: "Un manifiesto.", why: "Manifiesto." },
    { fase: "guiada", c: ["b6sr-image"], k: "fill", ask: "Escritura sin control de la razón (adjetivo).", q: "L'écriture ___ consiste à écrire très vite, sans contrôle de la raison.", acc: ["automatique"], pista: "auto…", why: "<b>automatique</b>." },
    { fase: "indep", c: ["b6sr-histoire"], k: "fill", ask: "La ciudad suiza de Dada.", q: "Le mouvement Dada naît à ___ en 1916, en pleine guerre.", acc: ["Zurich", "Zürich"], why: "<b>Zurich</b>." },
    { fase: "indep", c: ["b6sr-histoire"], k: "spot", ask: "Encuentra el error.", s: "En 1924 , [Tristan Tzara] publie le Manifeste du surréalisme .", fix: "André Breton", why: "<b>André Breton</b>." },
    { fase: "indep", c: ["b6sr-histoire"], k: "match", ask: "Une cada obra con su autor.", q: "Obra → autor", pairs: [["Les Champs magnétiques", "Breton et Soupault"], ["Capitale de la douleur", "Paul Éluard"], ["Le Paysan de Paris", "Louis Aragon"], ["Les Chants de Maldoror", "Lautréamont"], ["Alcools", "Guillaume Apollinaire"]], why: "Obras." },
    { fase: "aplica", c: ["b6sr-image"], k: "choice", ask: "«La terre est bleue comme une orange» es una imagen surrealista porque…", q: "Elige.", o: ["associe de façon inattendue des réalités éloignées", "décrit la terre avec précision"], a: 0, why: "Realidades lejanas." },
    { fase: "aplica", c: ["b6sr-histoire"], k: "choice", ask: "La palabra «surréaliste» aparece en 1917 bajo la pluma de…", q: "Elige.", o: ["Guillaume Apollinaire", "André Breton"], a: 0, why: "Apollinaire." },
    { fase: "aplica", c: ["b6sr-histoire"], k: "spot", ask: "Encuentra el error de ortografía.", s: "Les poètes [surrealistes] explorent le rêve et l'inconscient .", fix: "surréalistes", why: "<b>surréalistes</b>." },
    { fase: "dominio", c: ["b6sr-image"], k: "choice", ask: "Para Breton, el «hasard objectif» es…", q: "Elige.", o: ["une coïncidence troublante qui semble répondre à un désir", "le contrôle de la raison"], a: 0, why: "Azar objetivo." },
    { fase: "dominio", c: ["b6sr-image"], k: "order", ask: "Ordena la frase.", tokens: ["Les surréalistes", "explorent le rêve", "et l'inconscient"], why: "<b>Les surréalistes explorent le rêve et l'inconscient</b>" },
    { fase: "dominio", c: ["b6sr-histoire", "b6sr-image"], k: "listen", say: "Les surréalistes voulaient changer la vie par la poésie.", acc: ["Les surréalistes voulaient changer la vie par la poésie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les surréalistes voulaient changer la vie par la poésie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Dada", "Zurich", "Tristan Tzara", "Tzara", "Apollinaire", "Guillaume Apollinaire", "André Breton", "Breton", "Soupault", "Paul Éluard", "Éluard", "Louis Aragon", "Aragon", "Lautréamont", "Les Champs magnétiques", "Capitale de la douleur", "Le Paysan de Paris", "Les Chants de Maldoror", "Alcools"], previo: [] }
};

/* ── 13. La négritude : Césaire, Senghor, Damas ── */
E["lit-negritude"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La négritude : Césaire, Senghor, Damas",
  objetivo: {
    que: "Vas a profundizar en la Negritud: sus fundadores, sus hitos, sus dos sensibilidades y sus herederos.",
    corto: "La négritude naît à Paris. · Césaire est martiniquais. · Senghor fut président du Sénégal.",
    podras: ["Situar los hitos: L'Étudiant noir (1935), Cahier d'un retour au pays natal (1939, escrito en francés), «Orphée noir» de Sartre (1948), Présence africaine (1947), el Congreso de escritores y artistas negros de París (1956).", "Distinguir a Césaire (Martinica; rebelión y ruptura; Discours sur le colonialisme) y a Senghor (Senegal; civilisation de l'universel; Chants d'ombre; Académie française); Damas (Pigments).", "Situar a los herederos: Fanon, la antillanité (Glissant) y la créolité (1989); y escribir «personnes noires»."],
    iconos: ["ic2/mundo", "ic2/libro", "ic2/bandera"],
    previos: ["Las literaturas francófonas (lección 8) y la criollidad antillana (C1.2, lección 12)."],
    capacidad: "Ahora explicas la Negritud, sus matices y su herencia."
  },
  requiere: R("b6fc-negritude", "b5an-creolite"), recupera: ["b6fc-negritude"],
  conceptos: {
    "b6ng-histoire": { n: "la négritude nace en París (no en África) en los años 1930, antes de las independencias: reivindica con orgullo las culturas negras frente a la colonización; fundadores: Aimé Césaire (Martinique), Léopold Sédar Senghor (Sénégal), Léon-Gontran Damas (Guyane); hitos: la revista L'Étudiant noir (1935), Cahier d'un retour au pays natal (1939, escrito en francés, no en criollo), Présence africaine (1947), «Orphée noir» (1948, prefacio de Jean-Paul Sartre), el primer Congreso de escritores y artistas negros (1956, en París, no en Dakar); vocabulario: les personnes noires", b: "gr" },
    "b6ng-sensibilites": { n: "Césaire: la révolte et la rupture (Cahier d'un retour au pays natal, Discours sur le colonialisme, Une saison au Congo); Senghor: los valores culturales del mundo negro y el mestizaje, la civilisation de l'universel (Chants d'ombre, Hosties noires), primer presidente del Senegal independiente en 1960, Académie française; Damas: Pigments; herederos: Frantz Fanon (Peau noire, masques blancs), l'antillanité (Édouard Glissant, Le Discours antillais) y la créolité (1989: Bernabé, Chamoiseau, Confiant)", b: "gr" }
  },
  video: {
    titulo: "La Negritud", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "la négritude", seg: [
        { es: "Hola. El orgullo de las culturas negras frente a la colonización." } ] },
      { v: "frase", filas: [
          { nota: "París", p: 1, partes: [["La négritude naît à Paris.", "-", 1]] },
          { nota: "Martinica", p: 2, partes: [["Césaire est martiniquais.", "-", 2]] },
          { nota: "Senegal", p: 3, partes: [["Senghor fut président du Sénégal.", "-", 3]] } ], seg: [
        { fr: "La négritude naît à Paris.", p: 1 }, { fr: "Césaire est martiniquais.", p: 2 }, { fr: "Senghor fut président du Sénégal.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El Cahier de Césaire está escrito en…", o: ["francés", "criollo"], a: 0, es: true,
        bien: "¡Sí! En francés.", mal: "Está escrito en francés.",
        seg: [ { es: "Pausa. Francés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["L'Étudiant noir", "Cahier d'un retour au pays natal", "Orphée noir", "la révolte", "la civilisation de l'universel", "la créolité"], seg: [
        { es: "Hitos, sensibilidades y herencia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Exposición sobre la Negritud", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara una exposición oral sobre la Negritud con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "La négritude est née en Afrique ? — Non : elle naît dans les années 1930 à Paris, avant les indépendances. En 1935, Césaire, Senghor et Damas animent à Paris la revue L'Étudiant noir.", "¿La Negritud nació en África? — No: nace en los años 30 en París, antes de las independencias. En 1935, Césaire, Senghor y Damas animan en París la revista L'Étudiant noir."],
      ["sofia", "Aimé Césaire est né en Martinique. Son Cahier d'un retour au pays natal, écrit en français, est un cri de révolte et de rupture. Senghor, lui, chante les valeurs culturelles du monde noir et rêve d'une civilisation de l'universel.", "Aimé Césaire nació en Martinica. Su Cuaderno de un retorno al país natal, escrito en francés, es un grito de rebelión y de ruptura. Senghor, en cambio, canta los valores culturales del mundo negro y sueña con una civilización de lo universal."],
      ["camila", "Et après ? — En 1948, Sartre signe la préface « Orphée noir ». En 1956, le premier Congrès des écrivains et artistes noirs se tient à Paris. Et en 1960, Senghor devient premier président du Sénégal indépendant.", "¿Y después? — En 1948, Sartre firma el prefacio «Orfeo negro». En 1956, el primer Congreso de escritores y artistas negros se celebra en París. Y en 1960, Senghor se convierte en el primer presidente del Senegal independiente."],
      ["sofia", "Dans ta dissertation, écris : « Césaire défend la dignité des personnes noires. » Et cite les héritiers : Fanon, l'antillanité de Glissant, puis la créolité en 1989.", "En tu disertación, escribe: «Césaire defiende la dignidad de las personas negras.» Y cita a los herederos: Fanon, la antillanidad de Glissant, luego la criollidad en 1989."]
    ],
    fijate: "Fíjate: elle naît à Paris (années 1930), L'Étudiant noir (1935), écrit en français, la révolte et la rupture (Césaire), la civilisation de l'universel (Senghor), « Orphée noir » (1948), le Congrès de 1956 à Paris, les personnes noires, la créolité (1989)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Hitos y sensibilidades",
      idea: "La Negritud nace en París en los años 1930, antes de las independencias, entre estudiantes de las colonias: reivindica con orgullo las culturas negras frente a la colonización. Fundadores: Aimé Césaire (Martinica), Léopold Sédar Senghor (Senegal), Léon-Gontran Damas (Guayana; Pigments). Hitos: L'Étudiant noir (1935), Cahier d'un retour au pays natal (1939, escrito en francés), Présence africaine (1947), «Orphée noir» de Sartre (1948), el primer Congreso de escritores y artistas negros (París, 1956). Dos sensibilidades: Césaire, la rebelión y la ruptura (Discours sur le colonialisme, Une saison au Congo); Senghor, los valores culturales y el mestizaje, la civilización de lo universal (Chants d'ombre, Hosties noires), primer presidente del Senegal independiente (1960) y académico. Herederos: Frantz Fanon (Peau noire, masques blancs), la antillanité (Glissant, Le Discours antillais), la créolité (1989). Se escribe «les personnes noires».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["Paris", "donde nace la Negritud (años 1930)", "histoire"],
        ["premier président du Sénégal indépendant", "lo que es Senghor en 1960", "Léopold Sédar Senghor"],
        ["Jean-Paul Sartre", "quien firma «Orphée noir» (1948)", "histoire"],
        ["la créolité", "el mestizaje antillano reivindicado en 1989", "héritiers"],
        ["personnes noires", "la expresión adecuada en una disertación", "histoire"],
        ["Aimé Césaire est né en Martinique, dans les Antilles françaises. · Martinique", "Césaire nació en Martinica.", "Aimé Césaire"],
        ["En 1935, Césaire, Senghor et Damas animent à Paris la revue L'Étudiant noir. · noir", "En 1935 animan L'Étudiant noir.", "histoire"],
        ["Aimé Césaire = Cahier d'un retour au pays natal · Léopold Sédar Senghor = Chants d'ombre · Léon-Gontran Damas = Pigments · Frantz Fanon = Peau noire, masques blancs · Édouard Glissant = Le Discours antillais", "autores y obras", "resumen"],
        ["Le Cahier d'un retour au pays natal est écrit en français par Aimé Césaire. · français", "El Cahier está escrito en francés.", "Aimé Césaire"],
        ["En 1956, le premier Congrès des écrivains et artistes noirs se tient à Paris. · Paris", "En 1956 el Congreso se celebra en París.", "histoire"],
        ["la Martinique · la révolte et la rupture · Discours sur le colonialisme · Une saison au Congo", "rasgos de Césaire", "Aimé Césaire"],
        ["le Sénégal · la civilisation de l'universel · Hosties noires · l'Académie française", "rasgos de Senghor", "Léopold Sédar Senghor"],
        ["Senghor fut le premier président du Sénégal indépendant", "Senghor fue el primer presidente del Senegal independiente", "Léopold Sédar Senghor"],
        ["Senghor chante les valeurs culturelles du monde noir.", "Senghor canta los valores culturales del mundo negro.", "Léopold Sédar Senghor"]
      ]],
      ej: [["La négritude naît à Paris.", "La negritud nace en París."], ["Césaire est martiniquais.", "Césaire es martiniqués."], ["Senghor fut président du Sénégal.", "Senghor fue presidente de Senegal."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La négritude est née en Afrique.", "La négritude est née à Paris, dans les années 1930.", "Es anterior a las independencias."], ["Le Cahier est écrit en créole.", "Le Cahier est écrit en français.", "Francés."], ["le Congrès de 1956 à Dakar", "le Congrès de 1956 à Paris", "París."]] }
  ],
  ejemplos: [
    { sit: "Pigments es de…", resp: "Léon-Gontran Damas", pasos: ["Guayana."], porque: "Obras." },
    { sit: "Peau noire, masques blancs es de…", resp: "Frantz Fanon", pasos: ["Heredero."], porque: "Obras." },
    { sit: "Senghor sueña con…", resp: "la civilisation de l'universel", pasos: ["Mestizaje."], porque: "Sensibilidad." }
  ],
  comprueba: [
    { q: "L'Étudiant noir es de…", o: ["1935", "1960"], a: 0, b: "gr", porque: "Revista." },
    { q: "La sensibilidad de Césaire es…", o: ["la rebelión y la ruptura", "el mestizaje y lo universal"], a: 0, b: "gr", porque: "Cahier." },
    { q: "Damas era de…", o: ["la Guayana", "Senegal"], a: 0, b: "gr", porque: "Fundadores." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ng-sensibilites"], k: "sort", ask: "¿Aimé Césaire o Léopold Sédar Senghor?", q: "Clasifica.", cats: ["Aimé Césaire", "Léopold Sédar Senghor"], items: [["la Martinique", 0], ["la révolte et la rupture", 0], ["Discours sur le colonialisme", 0], ["Une saison au Congo", 0], ["le Sénégal", 1], ["la civilisation de l'universel", 1], ["Hosties noires", 1], ["l'Académie française", 1]], pista: "Rebelión o universal.", why: "Dos sensibilidades." },
    { fase: "guiada", c: ["b6ng-histoire"], k: "choice", ask: "La Negritud nace en los años 1930 en…", q: "Elige.", o: ["Paris", "Dakar"], a: 0, pista: "Estudiantes de las colonias.", why: "París." },
    { fase: "guiada", c: ["b6ng-histoire"], k: "fill", ask: "La isla de Césaire.", q: "Aimé Césaire est né en ___ , dans les Antilles françaises.", acc: ["Martinique"], pista: "Antillas.", why: "<b>Martinique</b>." },
    { fase: "indep", c: ["b6ng-histoire"], k: "fill", ask: "L'Étudiant… (una palabra).", q: "En 1935, Césaire, Senghor et Damas animent à Paris la revue L'Étudiant ___ .", acc: ["noir"], why: "<b>noir</b>." },
    { fase: "indep", c: ["b6ng-sensibilites"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Aimé Césaire", "Cahier d'un retour au pays natal"], ["Léopold Sédar Senghor", "Chants d'ombre"], ["Léon-Gontran Damas", "Pigments"], ["Frantz Fanon", "Peau noire, masques blancs"], ["Édouard Glissant", "Le Discours antillais"]], why: "Obras." },
    { fase: "indep", c: ["b6ng-histoire"], k: "spot", ask: "Encuentra el error.", s: "Le Cahier d'un retour au pays natal est écrit en [créole] par Aimé Césaire .", fix: "français", why: "<b>français</b>." },
    { fase: "aplica", c: ["b6ng-histoire"], k: "choice", ask: "El prefacio «Orphée noir» (1948) lo firma…", q: "Elige.", o: ["Jean-Paul Sartre", "André Breton"], a: 0, why: "Sartre." },
    { fase: "aplica", c: ["b6ng-histoire"], k: "spot", ask: "Encuentra el error.", s: "En 1956 , le premier Congrès des écrivains et artistes noirs se tient à [Dakar] .", fix: "Paris", why: "<b>Paris</b>." },
    { fase: "aplica", c: ["b6ng-sensibilites"], k: "choice", ask: "En 1989, Bernabé, Chamoiseau y Confiant reivindican el mestizaje antillano: es…", q: "Elige.", o: ["la créolité", "la négritude"], a: 0, why: "Criollidad." },
    { fase: "dominio", c: ["b6ng-histoire"], k: "choice", ask: "En una disertación, para designar a las personas escribe: «Césaire défend la dignité des ___ .»", q: "Elige.", o: ["personnes noires", "nègres"], a: 0, why: "<b>personnes noires</b>." },
    { fase: "dominio", c: ["b6ng-sensibilites"], k: "order", ask: "Ordena la frase.", tokens: ["Senghor fut", "le premier président", "du Sénégal indépendant"], why: "<b>Senghor fut le premier président du Sénégal indépendant</b>" },
    { fase: "dominio", c: ["b6ng-sensibilites", "b6ng-histoire"], k: "listen", say: "Senghor chante les valeurs culturelles du monde noir.", acc: ["Senghor chante les valeurs culturelles du monde noir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Senghor chante les valeurs culturelles du monde noir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Aimé Césaire", "Césaire", "Léopold Sédar Senghor", "Senghor", "Léon-Gontran Damas", "Damas", "Frantz Fanon", "Fanon", "Édouard Glissant", "Glissant", "Jean-Paul Sartre", "Sartre", "André Breton", "Bernabé", "Chamoiseau", "Confiant", "Martinique", "Sénégal", "Guyane", "Paris", "Dakar", "Congo", "Orphée noir", "Présence africaine", "L'Étudiant noir", "Académie française"], previo: [] }
};

/* ── 14. Le théâtre de l'absurde : Ionesco et Beckett ── */
E["lit-absurde"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le théâtre de l'absurde : Ionesco et Beckett",
  objetivo: {
    que: "Vas a entender el teatro del absurdo de los años 50: un mundo sin sentido mostrado rompiendo la forma teatral.",
    corto: "Godot n'arrive jamais. · Roger Blin met en scène la pièce. · La pièce a été créée en 1953.",
    podras: ["Distinguir el absurdo como tema (Camus, Le Mythe de Sisyphe; Sartre y Camus en forma clásica: Huis clos, Caligula) y como forma (Ionesco, Beckett).", "Situar las obras: La Cantatrice chauve (1950) y Rhinocéros (Ionesco), En attendant Godot (1953) y Fin de partie (Beckett), Les Bonnes (Genet); la expresión de Martin Esslin (1961).", "Reconocer los rasgos: intriga circular, personajes sin psicología, lenguaje que gira en el vacío, espera sin fin; usar mettre en scène y la création."],
    iconos: ["ic2/nota", "ic2/rayo", "ic2/libro"],
    previos: ["Leer el teatro (lección 9), el siglo XX (lección 7) y el existencialismo (C1.2, lección 45)."],
    capacidad: "Ahora explicas qué tiene de absurdo una obra de Ionesco o de Beckett."
  },
  requiere: R("b6th-formes", "b6vt-mouvements", "b5ex-camus"), recupera: ["b6th-formes"],
  conceptos: {
    "b6ab-oeuvres": { n: "el absurdo como tema: Camus (Le Mythe de Sisyphe, 1942); Sartre y Camus lo tratan en una forma clásica, coherente y argumentada (Huis clos, Caligula); Ionesco y Beckett en una forma absurda: Eugène Ionesco (La Cantatrice chauve, 1950, su primera obra; Rhinocéros: los habitantes se transforman uno a uno en rinocerontes), Samuel Beckett (escritor irlandés, no francés, nacido cerca de Dublín, escribe Godot en francés; En attendant Godot, creada en 1953 en el Théâtre de Babylone, puesta en escena por Roger Blin; Fin de partie), Jean Genet (Les Bonnes); la expresión «théâtre de l'absurde» la populariza en 1961 el crítico Martin Esslin", b: "gr" },
    "b6ab-forme": { n: "rasgos: un langage qui tourne à vide, une intrigue circulaire, des personnages sans psychologie, une attente sans fin (dos vagabundos esperan a un hombre que no viene: Godot n'arrive jamais) frente al teatro clásico (l'unité d'action, la vraisemblance, un dénouement qui résout le conflit, l'alexandrin); vocabulario: mettre en scène (no «diriger»), la création (la primera representación pública de una obra)", b: "gr" }
  },
  video: {
    titulo: "El teatro del absurdo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "Godot", seg: [
        { es: "Hola. Un teatro donde no pasa nada… y eso es lo importante." } ] },
      { v: "frase", filas: [
          { nota: "espera", p: 1, partes: [["Godot n'arrive jamais.", "-", 1]] },
          { nota: "puesta en escena", p: 2, partes: [["Roger Blin met en scène la pièce.", "-", 2]] },
          { nota: "estreno", p: 3, partes: [["La pièce a été créée en 1953.", "-", 3]] } ], seg: [
        { fr: "Godot n'arrive jamais.", p: 1 }, { fr: "Roger Blin met en scène la pièce.", p: 2 }, { fr: "La pièce a été créée en 1953.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Samuel Beckett era…", o: ["irlandés", "francés"], a: 0, es: true,
        bien: "¡Sí! Escribió Godot en francés.", mal: "Era irlandés.",
        seg: [ { es: "Pausa. Irlandés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La Cantatrice chauve", "Rhinocéros", "En attendant Godot", "un langage qui tourne à vide", "une intrigue circulaire", "la création"], seg: [
        { es: "Obras y rasgos del absurdo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Salida al teatro", img: "bg-noche", yo: "camila",
    escena: "Camila y Madame Sofia salen de una función de En attendant Godot.",
    pj: PJ,
    lineas: [
      ["camila", "Il ne se passe rien ! Les deux vagabonds attendent un homme qui ne vient pas. — Exactement : dans En attendant Godot, Godot n'arrive jamais. C'est une pièce de Samuel Beckett, créée en 1953.", "¡No pasa nada! Los dos vagabundos esperan a un hombre que no viene. — Exacto: en Esperando a Godot, Godot nunca llega. Es una obra de Samuel Beckett, estrenada en 1953."],
      ["sofia", "En 1953, Roger Blin met en scène En attendant Godot au Théâtre de Babylone. Beckett, écrivain irlandais né près de Dublin, a écrit Godot en français.", "En 1953, Roger Blin pone en escena Esperando a Godot en el Théâtre de Babylone. Beckett, escritor irlandés nacido cerca de Dublín, escribió Godot en francés."],
      ["camila", "Et Ionesco ? — La Cantatrice chauve, en 1950, est sa première pièce. Dans cette pièce, le langage tourne à vide. Et dans Rhinocéros, les habitants se transforment un à un en rhinocéros.", "¿Y Ionesco? — La cantante calva, en 1950, es su primera obra. En esa obra el lenguaje gira en el vacío. Y en Rinoceronte, los habitantes se transforman uno a uno en rinocerontes."],
      ["sofia", "Chez Camus, dans Caligula, l'absurde est un thème traité dans une forme cohérente et argumentée ; chez Ionesco, c'est le langage lui-même qui devient absurde. Le critique Martin Esslin a popularisé l'expression « théâtre de l'absurde » en 1961.", "En Camus, en Calígula, el absurdo es un tema tratado en una forma coherente y argumentada; en Ionesco, es el lenguaje mismo el que se vuelve absurdo. El crítico Martin Esslin popularizó la expresión «teatro del absurdo» en 1961."]
    ],
    fijate: "Fíjate: Godot n'arrive jamais, créée en 1953, met en scène, un écrivain irlandais, La Cantatrice chauve (1950), le langage tourne à vide, Rhinocéros, une forme cohérente et argumentée (Camus), Martin Esslin (1961)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obras y rasgos",
      idea: "El absurdo es un tema de Camus (Le Mythe de Sisyphe, 1942). Sartre y Camus lo tratan en una forma clásica, coherente y argumentada (Huis clos, Caligula); Ionesco y Beckett, en una forma absurda. Eugène Ionesco: La Cantatrice chauve (1950, su primera obra), Rhinocéros (los habitantes se vuelven rinocerontes). Samuel Beckett, escritor irlandés nacido cerca de Dublín que escribe en francés: En attendant Godot (creada en 1953 en el Théâtre de Babylone, puesta en escena por Roger Blin; Godot nunca llega), Fin de partie. Jean Genet: Les Bonnes. Rasgos: intriga circular, personajes sin psicología, lenguaje que gira en el vacío, espera sin fin, frente a la unidad de acción, la verosimilitud, el desenlace y el alejandrino del teatro clásico. El crítico Martin Esslin populariza la expresión en 1961. Vocabulario: mettre en scène; la création (primera representación pública).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Teatro"], [
        ["Samuel Beckett", "el autor de En attendant Godot", "Théâtre de l'absurde"],
        ["n'arrive jamais", "lo que hace Godot", "Théâtre de l'absurde"],
        ["création", "la primera representación pública de una obra", "vocabulaire"],
        ["cohérente et argumentée", "la forma del absurdo en Camus (Caligula)", "Théâtre classique"],
        ["Martin Esslin", "el crítico que populariza la expresión (1961)", "Théâtre de l'absurde"],
        ["La Cantatrice chauve (1950) est la première pièce d'Eugène Ionesco. · chauve", "La cantante calva es la primera obra de Ionesco.", "Théâtre de l'absurde"],
        ["Dans Rhinocéros, les habitants se transforment un à un en rhinocéros. · rhinocéros", "En Rinoceronte, los habitantes se vuelven rinocerontes.", "Théâtre de l'absurde"],
        ["La Cantatrice chauve = Eugène Ionesco · Fin de partie = Samuel Beckett · Huis clos = Jean-Paul Sartre · Caligula = Albert Camus · Les Bonnes = Jean Genet", "obras", "resumen"],
        ["l'unité d'action · la vraisemblance · un dénouement qui résout le conflit · l'alexandrin", "rasgos clásicos", "Théâtre classique"],
        ["un langage qui tourne à vide · une intrigue circulaire · des personnages sans psychologie · une attente sans fin", "rasgos del absurdo", "Théâtre de l'absurde"],
        ["En 1953, Roger Blin met en scène En attendant Godot au Théâtre de Babylone. · met en scène", "Roger Blin pone en escena Godot.", "vocabulaire"],
        ["Samuel Beckett, écrivain irlandais né près de Dublin, écrit Godot en français. · irlandais", "Beckett, irlandés, escribe Godot en francés.", "Théâtre de l'absurde"],
        ["Les deux vagabonds attendent un homme qui ne vient pas", "Los dos vagabundos esperan a un hombre que no viene", "Théâtre de l'absurde"],
        ["Dans cette pièce, le langage tourne à vide.", "En esta obra el lenguaje gira en el vacío.", "Théâtre de l'absurde"]
      ]],
      ej: [["Godot n'arrive jamais.", "Godot nunca llega."], ["Roger Blin met en scène la pièce.", "Roger Blin dirige la obra."], ["La pièce a été créée en 1953.", "La obra se estrenó en 1953."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Roger Blin dirige la pièce.", "Roger Blin met en scène la pièce.", "En teatro: mettre en scène, metteur en scène."], ["Beckett, écrivain français", "Beckett, écrivain irlandais (qui écrit en français)", "Nacido cerca de Dublín."], ["Godot arrive à la fin.", "Godot n'arrive jamais.", "La espera sin fin."]] }
  ],
  ejemplos: [
    { sit: "Les Bonnes es de…", resp: "Jean Genet", pasos: ["Años 40."], porque: "Obras." },
    { sit: "Fin de partie es de…", resp: "Samuel Beckett", pasos: ["Absurdo."], porque: "Obras." },
    { sit: "Huis clos es de…", resp: "Jean-Paul Sartre", pasos: ["Forma clásica."], porque: "Obras." }
  ],
  comprueba: [
    { q: "La Cantatrice chauve es de…", o: ["1950", "1942"], a: 0, b: "gr", porque: "Ionesco." },
    { q: "La intriga del teatro del absurdo es…", o: ["circular", "lineal con desenlace"], a: 0, b: "gr", porque: "Rasgos." },
    { q: "Le Mythe de Sisyphe es…", o: ["un ensayo de Camus", "una obra de Ionesco"], a: 0, b: "gr", porque: "1942." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ab-forme"], k: "sort", ask: "¿Teatro clásico o teatro del absurdo?", q: "Clasifica.", cats: ["Théâtre classique", "Théâtre de l'absurde"], items: [["l'unité d'action", 0], ["la vraisemblance", 0], ["un dénouement qui résout le conflit", 0], ["l'alexandrin", 0], ["un langage qui tourne à vide", 1], ["une intrigue circulaire", 1], ["des personnages sans psychologie", 1], ["une attente sans fin", 1]], pista: "¿Orden o vacío?", why: "Formas." },
    { fase: "guiada", c: ["b6ab-oeuvres"], k: "choice", ask: "En attendant Godot es una obra de…", q: "Elige.", o: ["Samuel Beckett", "Eugène Ionesco"], a: 0, pista: "Irlandés.", why: "Beckett." },
    { fase: "guiada", c: ["b6ab-oeuvres"], k: "fill", ask: "La cantante… (adjetivo).", q: "La Cantatrice ___ (1950) est la première pièce d'Eugène Ionesco.", acc: ["chauve"], pista: "calva.", why: "<b>chauve</b>." },
    { fase: "indep", c: ["b6ab-oeuvres"], k: "fill", ask: "El animal de la obra de Ionesco.", q: "Dans Rhinocéros, les habitants se transforment un à un en ___ .", acc: ["rhinocéros"], why: "<b>rhinocéros</b>." },
    { fase: "indep", c: ["b6ab-oeuvres"], k: "match", ask: "Une cada obra con su autor.", q: "Obra → autor", pairs: [["La Cantatrice chauve", "Eugène Ionesco"], ["Fin de partie", "Samuel Beckett"], ["Huis clos", "Jean-Paul Sartre"], ["Caligula", "Albert Camus"], ["Les Bonnes", "Jean Genet"]], why: "Obras." },
    { fase: "indep", c: ["b6ab-forme"], k: "spot", ask: "Encuentra el verbo impropio.", s: "En 1953 , Roger Blin [dirige] En attendant Godot au Théâtre de Babylone .", fix: "met en scène", why: "<b>met en scène</b>." },
    { fase: "aplica", c: ["b6ab-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Samuel Beckett , écrivain [français] né près de Dublin , écrit Godot en français .", fix: "irlandais", why: "<b>irlandais</b>." },
    { fase: "aplica", c: ["b6ab-forme"], k: "choice", ask: "En En attendant Godot, Godot…", q: "Elige.", o: ["n'arrive jamais", "arrive au dernier acte"], a: 0, why: "Nunca llega." },
    { fase: "aplica", c: ["b6ab-forme"], k: "choice", ask: "La primera representación pública de una obra se llama su…", q: "Elige.", o: ["création", "répétition"], a: 0, why: "Création." },
    { fase: "dominio", c: ["b6ab-oeuvres"], k: "choice", ask: "En Camus (Caligula), el absurdo es un tema tratado en una forma…", q: "Elige.", o: ["cohérente et argumentée", "absurde et circulaire"], a: 0, why: "Forma clásica." },
    { fase: "dominio", c: ["b6ab-forme"], k: "order", ask: "Ordena la frase.", tokens: ["Les deux vagabonds", "attendent un homme", "qui ne vient pas"], why: "<b>Les deux vagabonds attendent un homme qui ne vient pas</b>" },
    { fase: "dominio", c: ["b6ab-forme", "b6ab-oeuvres"], k: "listen", say: "Dans cette pièce, le langage tourne à vide.", acc: ["Dans cette pièce, le langage tourne à vide."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans cette pièce, le langage tourne à vide.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Samuel Beckett", "Beckett", "Eugène Ionesco", "Ionesco", "Jean Genet", "Genet", "Jean-Paul Sartre", "Albert Camus", "Camus", "Roger Blin", "Martin Esslin", "Godot", "Babylone", "Dublin", "La Cantatrice chauve", "Rhinocéros", "Fin de partie", "Les Bonnes", "Huis clos", "Caligula", "Le Mythe de Sisyphe"], previo: [] }
};

/* ── 15. Le Nouveau Roman et l'ère du soupçon ── */
E["lit-nouveau-roman"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le Nouveau Roman et l'ère du soupçon",
  objetivo: {
    que: "Vas a entender el Nouveau Roman de los años 50-60: la puesta en duda del personaje, de la intriga y del narrador omnisciente.",
    corto: "Le Nouveau Roman refuse l'intrigue traditionnelle. · Butor écrit à la deuxième personne. · C'est un roman de Robbe-Grillet.",
    podras: ["Citar a los autores (Sarraute, Robbe-Grillet, Butor, Simon, Duras; Éditions de Minuit) y sus ensayos: L'Ère du soupçon (1956), Pour un nouveau roman (1963).", "Distinguir novela tradicional (personaje con nombre y pasado, intriga cronológica, narrador omnisciente, ilusión realista) y Nouveau Roman (tropismos, descripción de objetos, repeticiones, personaje reducido a una inicial, cronología confusa).", "Asociar obras: Les Gommes y La Jalousie (Robbe-Grillet), Tropismes (Sarraute), La Modification (Butor, en «vous»), La Route des Flandres (Simon, Nobel 1985), Moderato cantabile (Duras)."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/pergamino"],
    previos: ["El siglo XX (lección 7) y analizar un relato (lección 10)."],
    capacidad: "Ahora reconoces un texto del Nouveau Roman y explicas su ruptura."
  },
  requiere: R("b6vt-mouvements", "b6re-narrateur"), recupera: ["b6re-narrateur"],
  conceptos: {
    "b6nr-auteurs": { n: "autores, casi todos en las Éditions de Minuit: Nathalie Sarraute (Tropismes; los «tropismes», movimientos interiores apenas perceptibles; L'Ère du soupçon, 1956: el lector ya no cree en el personaje), Alain Robbe-Grillet (Les Gommes, La Jalousie, 1957; Pour un nouveau roman, 1963; la description objectale), Michel Butor (La Modification, 1957, en segunda persona: «vous»), Claude Simon (La Route des Flandres; Nobel de literatura 1985), Marguerite Duras (Moderato cantabile); la etiqueta «Nouveau Roman» la lanza en 1957 el crítico Émile Henriot, en Le Monde", b: "gr" },
    "b6nr-rupture": { n: "novela tradicional: un personnage avec un nom, un portrait et un passé, une intrigue chronologique, un narrateur omniscient, l'illusion réaliste (Balzac construye un roman —no «une romance»— de varios cientos de páginas); Nouveau Roman: des descriptions minutieuses d'objets («La table est carrée ; au centre, une tasse, à quarante centimètres du bord»), une même scène répétée avec des variations, un personnage réduit à une initiale, une chronologie brouillée; rechaza el personaje y la intriga tradicionales", b: "gr" }
  },
  video: {
    titulo: "El Nouveau Roman", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "l'ère du soupçon", seg: [
        { es: "Hola. La novela sin personajes ni intriga tradicionales." } ] },
      { v: "frase", filas: [
          { nota: "trama", p: 1, partes: [["Le Nouveau Roman refuse l'intrigue traditionnelle.", "-", 1]] },
          { nota: "«vous»", p: 2, partes: [["Butor écrit à la deuxième personne.", "-", 2]] },
          { nota: "Robbe-Grillet", p: 3, partes: [["C'est un roman de Robbe-Grillet.", "-", 3]] } ], seg: [
        { fr: "Le Nouveau Roman refuse l'intrigue traditionnelle.", p: 1 }, { fr: "Butor écrit à la deuxième personne.", p: 2 }, { fr: "C'est un roman de Robbe-Grillet.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Los «tropismos» son centrales en la obra de…", o: ["Nathalie Sarraute", "Michel Butor"], a: 0, es: true,
        bien: "¡Sí! Movimientos interiores casi imperceptibles.", mal: "Es Nathalie Sarraute.",
        seg: [ { es: "Pausa. Sarraute." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les tropismes", "L'Ère du soupçon", "la description objectale", "les Éditions de Minuit", "La Modification", "Claude Simon"], seg: [
        { es: "Autores, ensayos y ruptura.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un pastiche en clase", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia lee a la clase un pastiche para presentar el Nouveau Roman.",
    pj: PJ,
    lineas: [
      ["sofia", "Écoutez : « La table est carrée ; au centre, une tasse, à quarante centimètres du bord. » Ce pastiche imite la description objectale de Robbe-Grillet. Pas de personnage, pas d'intrigue : des objets.", "Escuchen: «La mesa es cuadrada; en el centro, una taza, a cuarenta centímetros del borde.» Este pastiche imita la descripción objetual de Robbe-Grillet. Sin personaje, sin intriga: objetos."],
      ["camila", "C'est Robbe-Grillet qui a écrit La Jalousie ? — Oui, en 1957. La plupart des nouveaux romanciers publient aux Éditions de Minuit. Et Nathalie Sarraute, elle, explore les tropismes, ces mouvements intérieurs à peine perceptibles.", "¿Robbe-Grillet escribió La celosía? — Sí, en 1957. La mayoría de los nuevos novelistas publican en las Éditions de Minuit. Y Nathalie Sarraute explora los tropismos, esos movimientos interiores apenas perceptibles."],
      ["sofia", "Dans L'Ère du soupçon, en 1956, Sarraute explique que le lecteur ne croit plus au personnage traditionnel. Balzac construisait un roman de plusieurs centaines de pages avec des personnages qui ont un nom, un portrait et un passé ; ici, un personnage peut être réduit à une initiale.", "En La era del recelo, en 1956, Sarraute explica que el lector ya no cree en el personaje tradicional. Balzac construía una novela de cientos de páginas con personajes que tienen nombre, retrato y pasado; aquí, un personaje puede quedar reducido a una inicial."],
      ["camila", "Et La Modification ? — Butor la raconte à la deuxième personne : « vous ». Et en 1985, Claude Simon reçoit le prix Nobel de littérature.", "¿Y La modificación? — Butor la cuenta en segunda persona: «vous». Y en 1985 Claude Simon recibe el Nobel de literatura."]
    ],
    fijate: "Fíjate: la description objectale, La Jalousie (1957), les Éditions de Minuit, les tropismes, L'Ère du soupçon (1956), le lecteur ne croit plus au personnage, un roman (no une romance), réduit à une initiale, la deuxième personne, Claude Simon (1985)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y ruptura",
      idea: "El Nouveau Roman (años 50-60) pone en duda la novela clásica. Autores, casi todos en las Éditions de Minuit: Nathalie Sarraute (Tropismes: movimientos interiores apenas perceptibles; L'Ère du soupçon, 1956: el lector ya no cree en el personaje), Alain Robbe-Grillet (Les Gommes, La Jalousie, 1957; Pour un nouveau roman, 1963; descripciones objetuales), Michel Butor (La Modification, 1957, en «vous»), Claude Simon (La Route des Flandres; Nobel 1985), Marguerite Duras (Moderato cantabile). La etiqueta la lanza en 1957 el crítico Émile Henriot en Le Monde. Rechazan el personaje balzaciano (nombre, retrato, pasado), la intriga cronológica, el narrador omnisciente y la ilusión realista; proponen descripciones minuciosas de objetos, escenas repetidas con variaciones, personajes reducidos a una inicial y cronología confusa. Ojo: Balzac escribe un roman, no une romance.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Novela"], [
        ["Nathalie Sarraute", "la autora de los «tropismes»", "Nouveau Roman"],
        ["deuxième", "la persona de La Modification («vous»)", "Nouveau Roman"],
        ["Claude Simon", "el Nobel de literatura de 1985", "Nouveau Roman"],
        ["le critique Émile Henriot, dans Le Monde", "quien lanza la etiqueta en 1957", "Nouveau Roman"],
        ["la description objectale de Robbe-Grillet", "lo que imita «La table est carrée…»", "Nouveau Roman"],
        ["La plupart des nouveaux romanciers publient aux Éditions de Minuit. · Minuit", "La mayoría publica en Minuit.", "Nouveau Roman"],
        ["Dans L'Ère du soupçon (1956), Nathalie Sarraute explique que le lecteur ne croit plus au personnage. · soupçon", "En La era del recelo, el lector ya no cree en el personaje.", "Nouveau Roman"],
        ["Balzac construit un roman de plusieurs centaines de pages. · un roman", "Balzac construye una novela de cientos de páginas.", "Roman traditionnel"],
        ["La Jalousie est un roman de Robbe-Grillet publié en 1957. · Robbe-Grillet", "La celosía es una novela de Robbe-Grillet.", "Nouveau Roman"],
        ["un personnage avec un nom, un portrait et un passé · une intrigue chronologique · un narrateur omniscient · l'illusion réaliste", "rasgos de la novela tradicional", "Roman traditionnel"],
        ["des descriptions minutieuses d'objets · une même scène répétée avec des variations · un personnage réduit à une initiale · une chronologie brouillée", "rasgos del Nouveau Roman", "Nouveau Roman"],
        ["Les Gommes = Alain Robbe-Grillet · Tropismes = Nathalie Sarraute · La Modification = Michel Butor · La Route des Flandres = Claude Simon · Moderato cantabile = Marguerite Duras", "obras", "resumen"],
        ["Le Nouveau Roman refuse le personnage et l'intrigue traditionnels", "El Nouveau Roman rechaza personaje e intriga tradicionales", "Nouveau Roman"],
        ["Le lecteur ne croit plus au personnage traditionnel.", "El lector ya no cree en el personaje tradicional.", "Nouveau Roman"]
      ]],
      ej: [["Le Nouveau Roman refuse l'intrigue traditionnelle.", "El Nouveau Roman rechaza la trama tradicional."], ["Butor écrit à la deuxième personne.", "Butor escribe en segunda persona."], ["C'est un roman de Robbe-Grillet.", "Es una novela de Robbe-Grillet."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une romance de Balzac", "un roman de Balzac", "roman = novela; romance = canción o idilio."], ["La Jalousie, de Nathalie Sarraute", "La Jalousie, de Robbe-Grillet", "Sarraute = Tropismes."], ["Le Nouveau Roman aime le narrateur omniscient.", "Le Nouveau Roman refuse le narrateur omniscient.", "Ruptura."]] }
  ],
  ejemplos: [
    { sit: "Les Gommes es de…", resp: "Alain Robbe-Grillet", pasos: ["1953."], porque: "Obras." },
    { sit: "Moderato cantabile es de…", resp: "Marguerite Duras", pasos: ["Minuit."], porque: "Obras." },
    { sit: "El ensayo de Robbe-Grillet (1963):", resp: "Pour un nouveau roman", pasos: ["Manifiesto."], porque: "Ensayos." }
  ],
  comprueba: [
    { q: "L'Ère du soupçon es de…", o: ["1956", "1985"], a: 0, b: "gr", porque: "Sarraute." },
    { q: "Un personaje reducido a una inicial es típico del…", o: ["Nouveau Roman", "realismo"], a: 0, b: "gr", porque: "Ruptura." },
    { q: "La mayoría publica en las Éditions de…", o: ["Minuit", "Gallimard"], a: 0, b: "gr", porque: "Editorial." }
  ],
  practica: [
    { fase: "guiada", c: ["b6nr-rupture"], k: "sort", ask: "¿Novela tradicional o Nouveau Roman?", q: "Clasifica.", cats: ["Roman traditionnel", "Nouveau Roman"], items: [["un personnage avec un nom, un portrait et un passé", 0], ["une intrigue chronologique", 0], ["un narrateur omniscient", 0], ["l'illusion réaliste", 0], ["des descriptions minutieuses d'objets", 1], ["une même scène répétée avec des variations", 1], ["un personnage réduit à une initiale", 1], ["une chronologie brouillée", 1]], pista: "¿Balzac o Robbe-Grillet?", why: "Ruptura." },
    { fase: "guiada", c: ["b6nr-auteurs"], k: "choice", ask: "Los «tropismes», movimientos interiores apenas perceptibles, son centrales en la obra de…", q: "Elige.", o: ["Nathalie Sarraute", "Claude Simon"], a: 0, pista: "Tropismes.", why: "Sarraute." },
    { fase: "guiada", c: ["b6nr-auteurs"], k: "fill", ask: "La editorial de los nuevos novelistas.", q: "La plupart des nouveaux romanciers publient aux Éditions de ___ .", acc: ["Minuit"], pista: "Medianoche.", why: "<b>Minuit</b>." },
    { fase: "indep", c: ["b6nr-auteurs"], k: "fill", ask: "La era del… (1956).", q: "Dans L'Ère du ___ (1956), Nathalie Sarraute explique que le lecteur ne croit plus au personnage.", acc: ["soupçon"], why: "<b>soupçon</b>." },
    { fase: "indep", c: ["b6nr-auteurs"], k: "match", ask: "Une cada obra con su autor.", q: "Obra → autor", pairs: [["Les Gommes", "Alain Robbe-Grillet"], ["Tropismes", "Nathalie Sarraute"], ["La Modification", "Michel Butor"], ["La Route des Flandres", "Claude Simon"], ["Moderato cantabile", "Marguerite Duras"]], why: "Obras." },
    { fase: "indep", c: ["b6nr-auteurs"], k: "spot", ask: "Encuentra el error.", s: "La Jalousie est un roman de [Nathalie Sarraute] publié en 1957 .", fix: "Robbe-Grillet", why: "<b>Robbe-Grillet</b>." },
    { fase: "aplica", c: ["b6nr-rupture"], k: "spot", ask: "Encuentra el falso amigo.", s: "Balzac construit [une romance] de plusieurs centaines de pages .", fix: "un roman", why: "<b>un roman</b>." },
    { fase: "aplica", c: ["b6nr-auteurs"], k: "choice", ask: "La Modification (Butor, 1957) está narrada en la ___ persona: «vous».", q: "Elige.", o: ["deuxième", "troisième"], a: 0, why: "Segunda." },
    { fase: "aplica", c: ["b6nr-rupture"], k: "choice", ask: "«La table est carrée ; au centre, une tasse, à quarante centimètres du bord.» Este pastiche imita…", q: "Elige.", o: ["la description objectale de Robbe-Grillet", "l'écriture automatique de Breton"], a: 0, why: "Descripción objetual." },
    { fase: "dominio", c: ["b6nr-auteurs"], k: "choice", ask: "En 1985 recibe el Nobel de literatura…", q: "Elige.", o: ["Claude Simon", "Michel Butor"], a: 0, why: "Simon." },
    { fase: "dominio", c: ["b6nr-auteurs"], k: "choice", ask: "La etiqueta «Nouveau Roman» la lanza en 1957…", q: "Elige.", o: ["le critique Émile Henriot, dans Le Monde", "André Breton, dans un manifeste"], a: 0, why: "Henriot." },
    { fase: "dominio", c: ["b6nr-rupture", "b6nr-auteurs"], k: "listen", say: "Le lecteur ne croit plus au personnage traditionnel.", acc: ["Le lecteur ne croit plus au personnage traditionnel."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le lecteur ne croit plus au personnage traditionnel.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Nathalie Sarraute", "Sarraute", "Alain Robbe-Grillet", "Robbe-Grillet", "Michel Butor", "Butor", "Claude Simon", "Marguerite Duras", "Émile Henriot", "Henriot", "Balzac", "André Breton", "Minuit", "Le Monde", "Gallimard", "Les Gommes", "La Jalousie", "Tropismes", "La Modification", "La Route des Flandres", "Moderato cantabile"], previo: [] }
};

/* ── 16. L'autobiographie et l'autofiction : écrire sa vie ── */
E["lit-autobiographie"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'autobiographie et l'autofiction : écrire sa vie",
  objetivo: {
    que: "Vas a distinguir los géneros de la escritura del yo: autobiografía, memorias, diario íntimo, autorretrato y autoficción.",
    corto: "Rousseau raconte sa propre vie. · Chateaubriand a écrit ses mémoires. · Je rédige un mémoire de licence.",
    podras: ["Explicar el pacto autobiográfico (Philippe Lejeune, 1975): autor, narrador y protagonista son la misma persona real, con promesa de verdad.", "Distinguir autobiografía (Rousseau, Les Confessions; Sartre, Les Mots; Sarraute, Enfance), memorias (Chateaubriand, Saint-Simon), diario íntimo (Amiel), autorretrato (Montaigne) y autoficción (Doubrovsky, 1977).", "Separar el yo que escribe del yo que vivió, y no confundir les mémoires (memorias), un mémoire (trabajo de grado) y la mémoire (memoria)."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/pergamino"],
    previos: ["Analizar un relato (lección 10), el clasicismo y las Luces (lección 4) y el Nouveau Roman (lección 15)."],
    capacidad: "Ahora clasificas un texto del yo en su género y analizas su pacto con el lector."
  },
  requiere: R("b6re-narrateur", "b6cl-lumieres", "b6nr-auteurs"), recupera: ["b6re-narrateur"],
  conceptos: {
    "b6au-genres": { n: "l'autobiographie: relato retrospectivo de la propia vida; autor, narrador y personaje principal son una sola y misma persona real; le pacte autobiographique (Philippe Lejeune, 1975): mismo nombre y promesa de verdad; Les Confessions de Jean-Jacques Rousseau, primera autobiografía moderna («Je forme une entreprise qui n'eut jamais d'exemple»: el carácter único de su proyecto; mostrarse «dans toute la vérité de la nature»); Sartre, Les Mots; Sarraute, Enfance; les mémoires: testimonio sobre los acontecimientos históricos vividos (Chateaubriand, Mémoires d'outre-tombe, durante más de treinta años; Saint-Simon); le journal intime: escrito día a día, sin distancia (Amiel; Marie Bashkirtseff); l'autoportrait: el yo presente («Je suis moi-même la matière de mon livre», Montaigne)", b: "gr" },
    "b6au-autofiction": { n: "l'autofiction: hechos reales contados con procedimientos de novela; palabra creada por Serge Doubrovsky en 1977 (no Rousseau); le roman autobiographique: la vida del autor prestada a un personaje con otro nombre; W ou le souvenir d'enfance (Perec, 1975) alterna capítulos autobiográficos y capítulos de ficción; el narrador adulto toma distancia del niño que era («À sept ans, je croyais que la mer finissait à l'horizon»); vocabulario: les mémoires (memorias, plural), un mémoire (trabajo de grado), la mémoire (la memoria)", b: "gr" }
  },
  video: {
    titulo: "Escribir la propia vida", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "le pacte autobiographique", seg: [
        { es: "Hola. Autor, narrador y protagonista: la misma persona." } ] },
      { v: "frase", filas: [
          { nota: "autobiografía", p: 1, partes: [["Rousseau raconte sa propre vie.", "-", 1]] },
          { nota: "memorias", p: 2, partes: [["Chateaubriand a écrit ses mémoires.", "-", 2]] },
          { nota: "trabajo de grado", p: 3, partes: [["Je rédige un mémoire de licence.", "-", 3]] } ], seg: [
        { fr: "Rousseau raconte sa propre vie.", p: 1 }, { fr: "Chateaubriand a écrit ses mémoires.", p: 2 }, { fr: "Je rédige un mémoire de licence.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Un mémoire de fin d'études» es…", o: ["un trabajo de grado", "una memoria (recuerdo)"], a: 0, es: true,
        bien: "¡Sí! Masculino.", mal: "Un mémoire = trabajo de grado.",
        seg: [ { es: "Pausa. Trabajo de grado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'autobiographie", "le pacte autobiographique", "les mémoires", "le journal intime", "l'autoportrait", "l'autofiction"], seg: [
        { es: "Los géneros del yo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "El trabajo de grado de Laura", img: "bg-biblioteca", yo: "camila",
    escena: "Una compañera, Laura, prepara su trabajo de grado sobre la autoficción.",
    pj: PJ,
    lineas: [
      ["camila", "Laura rédige une mémoire sur l'autofiction. — Un mémoire, au masculin : c'est le travail de fin d'études. La mémoire, c'est la faculté de se souvenir ; et les mémoires, au pluriel, c'est un genre littéraire.", "Laura redacta «une mémoire» sobre la autoficción. — Un mémoire, en masculino: es el trabajo de grado. La mémoire es la facultad de recordar; y les mémoires, en plural, es un género literario."],
      ["sofia", "Dans une autobiographie, l'auteur, le narrateur et le personnage principal sont une seule et même personne. En 1975, Philippe Lejeune définit le pacte autobiographique : le même nom et une promesse de vérité.", "En una autobiografía, el autor, el narrador y el personaje principal son una sola y misma persona. En 1975, Philippe Lejeune define el pacto autobiográfico: el mismo nombre y una promesa de verdad."],
      ["camila", "Et Les Confessions de Rousseau ? — Elles sont souvent présentées comme la première autobiographie moderne. Rousseau veut se montrer dans toute la vérité de la nature. Chateaubriand, lui, rédige ses mémoires pendant plus de trente ans.", "¿Y Las confesiones de Rousseau? — Se presentan a menudo como la primera autobiografía moderna. Rousseau quiere mostrarse en toda la verdad de la naturaleza. Chateaubriand, en cambio, redacta sus memorias durante más de treinta años."],
      ["sofia", "Le mot « autofiction » a été créé par Doubrovsky en 1977 : des faits réels racontés avec des procédés de roman. Et Montaigne écrivait : « Je suis moi-même la matière de mon livre » — c'est plutôt un autoportrait.", "La palabra «autoficción» la creó Doubrovsky en 1977: hechos reales contados con procedimientos de novela. Y Montaigne escribía: «Yo mismo soy la materia de mi libro»; es más bien un autorretrato."]
    ],
    fijate: "Fíjate: un mémoire (trabajo de grado) / la mémoire / les mémoires, une seule et même personne, le pacte autobiographique (Lejeune, 1975), Les Confessions, la vérité de la nature, ses mémoires, l'autofiction (Doubrovsky, 1977), l'autoportrait."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los géneros del yo",
      idea: "En una autobiografía, autor, narrador y personaje principal son la misma persona real, que cuenta su vida mirando hacia atrás. El pacto autobiográfico (Philippe Lejeune, 1975): mismo nombre y promesa de verdad. Les Confessions de Rousseau se presentan como la primera autobiografía moderna («Je forme une entreprise qui n'eut jamais d'exemple»); también Les Mots (Sartre) y Enfance (Sarraute). Las memorias son un testimonio sobre la Historia vivida (Chateaubriand, Mémoires d'outre-tombe; Saint-Simon). El diario íntimo se escribe día a día, sin distancia (Amiel, Marie Bashkirtseff). El autorretrato pinta el yo presente: «Je suis moi-même la matière de mon livre» (Montaigne). La autoficción (Doubrovsky, 1977) cuenta hechos reales con procedimientos de novela; el roman autobiographique presta la vida del autor a un personaje con otro nombre; W ou le souvenir d'enfance (Perec) alterna autobiografía y ficción. Hay que distinguir el yo adulto que escribe del niño que vivió. Ojo: les mémoires (memorias), un mémoire (trabajo de grado), la mémoire (memoria).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["sont une seule et même personne", "autor, narrador y personaje en una autobiografía", "Autobiographie"],
        ["un mémoire", "el trabajo de grado", "vocabulaire"],
        ["le caractère unique de son projet", "lo que subraya Rousseau con «Je forme une entreprise…»", "Autobiographie"],
        ["l'autoportrait", "el género de «Je suis moi-même la matière de mon livre»", "autoportrait"],
        ["prend ses distances avec l'enfant qu'il était", "lo que hace el narrador adulto", "Autobiographie"],
        ["chapitres autobiographiques et chapitres de fiction", "lo que alterna W ou le souvenir d'enfance", "autofiction"],
        ["En 1975, Philippe Lejeune définit le pacte autobiographique. · pacte", "En 1975 Lejeune define el pacto autobiográfico.", "Autobiographie"],
        ["Les Confessions de Jean-Jacques Rousseau sont souvent présentées comme la première autobiographie moderne. · Rousseau", "Las confesiones son la primera autobiografía moderna.", "Autobiographie"],
        ["Rousseau, Les Confessions · Sartre, Les Mots · Sarraute, Enfance", "autobiografías", "Autobiographie"],
        ["Chateaubriand, Mémoires d'outre-tombe · Saint-Simon, Mémoires", "memorias", "Mémoires"],
        ["Amiel, Journal intime · Marie Bashkirtseff, Journal", "diarios", "Journal intime"],
        ["l'autobiographie = récit rétrospectif de sa propre vie · les mémoires = témoignage sur les événements historiques vécus · le journal intime = écrit au jour le jour, sans recul · l'autofiction = faits réels racontés avec des procédés de roman · le roman autobiographique = vie de l'auteur prêtée à un personnage au nom différent", "definiciones", "resumen"],
        ["Le mot « autofiction » est créé par Doubrovsky en 1977. · Doubrovsky", "Doubrovsky crea la palabra en 1977.", "autofiction"],
        ["Chateaubriand rédige ses mémoires pendant plus de trente ans. · ses mémoires", "Chateaubriand redacta sus memorias durante treinta años.", "Mémoires"],
        ["Rousseau veut se montrer dans toute la vérité de la nature", "Rousseau quiere mostrarse en toda la verdad de la naturaleza", "Autobiographie"],
        ["Je suis moi-même la matière de mon livre.", "Yo mismo soy la materia de mi libro.", "autoportrait"]
      ]],
      ej: [["Rousseau raconte sa propre vie.", "Rousseau cuenta su propia vida."], ["Chateaubriand a écrit ses mémoires.", "Chateaubriand escribió sus memorias."], ["Je rédige un mémoire de licence.", "Redacto un trabajo de grado."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["une mémoire de fin d'études", "un mémoire de fin d'études", "la mémoire = memoria; un mémoire = trabajo de grado."], ["Chateaubriand rédige ses mémoire.", "Chateaubriand rédige ses mémoires.", "Plural."], ["« autofiction », mot de Rousseau", "« autofiction », mot de Doubrovsky (1977)", "Siglo XX."]] }
  ],
  ejemplos: [
    { sit: "Les Mots es…", resp: "l'autobiographie de Sartre", pasos: ["Infancia."], porque: "Autobiografía." },
    { sit: "Un escrito día a día, sin distancia:", resp: "le journal intime", pasos: ["Diario."], porque: "Géneros." },
    { sit: "La vida del autor prestada a un personaje con otro nombre:", resp: "le roman autobiographique", pasos: ["Sin pacto."], porque: "Géneros." }
  ],
  comprueba: [
    { q: "El pacto autobiográfico lo define…", o: ["Lejeune (1975)", "Rousseau (1782)"], a: 0, b: "gr", porque: "Crítico." },
    { q: "Las memorias son un testimonio sobre…", o: ["la Historia vivida", "el yo presente"], a: 0, b: "gr", porque: "Chateaubriand." },
    { q: "Enfance es de…", o: ["Nathalie Sarraute", "Georges Perec"], a: 0, b: "gr", porque: "Autobiografía." }
  ],
  practica: [
    { fase: "guiada", c: ["b6au-genres"], k: "sort", ask: "¿Autobiografía, memorias o diario íntimo?", q: "Clasifica.", cats: ["Autobiographie", "Mémoires", "Journal intime"], items: [["Rousseau, Les Confessions", 0], ["Sartre, Les Mots", 0], ["Sarraute, Enfance", 0], ["Chateaubriand, Mémoires d'outre-tombe", 1], ["Saint-Simon, Mémoires", 1], ["Amiel, Journal intime", 2], ["Marie Bashkirtseff, Journal", 2]], pista: "¿Su vida, la Historia o el día a día?", why: "Géneros." },
    { fase: "guiada", c: ["b6au-genres"], k: "choice", ask: "En una autobiografía, el autor, el narrador y el personaje principal…", q: "Elige.", o: ["sont une seule et même personne", "sont trois personnes différentes"], a: 0, pista: "El pacto.", why: "La misma persona." },
    { fase: "guiada", c: ["b6au-genres"], k: "fill", ask: "El … autobiográfico.", q: "En 1975, Philippe Lejeune définit le ___ autobiographique.", acc: ["pacte"], pista: "pacto.", why: "<b>pacte</b>." },
    { fase: "indep", c: ["b6au-autofiction"], k: "choice", ask: "Para obtener su diploma, Laura redacta ___ sobre la autoficción.", q: "«Pour obtenir son diplôme, Laura rédige ___ sur l'autofiction.»", o: ["un mémoire", "une mémoire"], a: 0, why: "<b>un mémoire</b>." },
    { fase: "indep", c: ["b6au-genres", "b6au-autofiction"], k: "match", ask: "Une cada género con su definición.", q: "Género → definición", pairs: [["l'autobiographie", "récit rétrospectif de sa propre vie"], ["les mémoires", "témoignage sur les événements historiques vécus"], ["le journal intime", "écrit au jour le jour, sans recul"], ["l'autofiction", "faits réels racontés avec des procédés de roman"], ["le roman autobiographique", "vie de l'auteur prêtée à un personnage au nom différent"]], why: "Definiciones." },
    { fase: "indep", c: ["b6au-autofiction"], k: "spot", ask: "Encuentra el error.", s: "Le mot « autofiction » est créé par [Rousseau] en 1977 .", fix: "Doubrovsky", why: "<b>Doubrovsky</b>." },
    { fase: "aplica", c: ["b6au-genres"], k: "fill", ask: "El autor de Les Confessions (apellido).", q: "Les Confessions de Jean-Jacques ___ sont souvent présentées comme la première autobiographie moderne.", acc: ["Rousseau"], why: "<b>Rousseau</b>." },
    { fase: "aplica", c: ["b6au-genres"], k: "choice", ask: "«Je suis moi-même la matière de mon livre» (Montaigne) pertenece más bien a…", q: "Elige.", o: ["l'autoportrait", "le journal intime"], a: 0, why: "Autorretrato." },
    { fase: "aplica", c: ["b6au-genres"], k: "spot", ask: "Encuentra el error de concordancia.", s: "Chateaubriand rédige [ses mémoire] pendant plus de trente ans .", fix: "ses mémoires", why: "<b>ses mémoires</b>." },
    { fase: "dominio", c: ["b6au-autofiction"], k: "choice", ask: "«À sept ans, je croyais que la mer finissait à l'horizon.» Aquí el narrador adulto…", q: "Elige.", o: ["prend ses distances avec l'enfant qu'il était", "écrit au jour le jour"], a: 0, why: "Distancia." },
    { fase: "dominio", c: ["b6au-autofiction"], k: "choice", ask: "W ou le souvenir d'enfance (Perec, 1975) alterna…", q: "Elige.", o: ["chapitres autobiographiques et chapitres de fiction", "poèmes et lettres"], a: 0, why: "Autobiografía y ficción." },
    { fase: "dominio", c: ["b6au-genres", "b6au-autofiction"], k: "listen", say: "Rousseau veut se montrer dans toute la vérité de la nature.", acc: ["Rousseau veut se montrer dans toute la vérité de la nature."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Rousseau veut se montrer dans toute la vérité de la nature.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Laura", "Rousseau", "Jean-Jacques Rousseau", "Les Confessions", "Sartre", "Les Mots", "Sarraute", "Enfance", "Chateaubriand", "Mémoires d'outre-tombe", "Saint-Simon", "Amiel", "Marie Bashkirtseff", "Montaigne", "Philippe Lejeune", "Lejeune", "Doubrovsky", "Serge Doubrovsky", "Perec", "Georges Perec"], previo: [] }
};

/* ── 17. La Chanson de Roland et la chanson de geste ── */
E["lit-chanson-de-geste"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La Chanson de Roland et la chanson de geste",
  objetivo: {
    que: "Vas a conocer la Chanson de Roland, el cantar de gesta más célebre, sus personajes, su forma y sus valores.",
    corto: "Roland refuse de sonner du cor par orgueil. · Ganelon trahit l'armée de Charlemagne. · La Chanson de Roland est écrite en décasyllabes.",
    podras: ["Situar la Chanson de Roland (hacia 1100): la muerte de Roland, sobrino de Carlomagno, en Roncesvalles (778); Roland se niega a tocar el olifante por orgullo.", "Reconocer los personajes (Roland preux, Olivier sage, Ganelon traidor, Charlemagne) y los objetos (Durendal, l'olifant).", "Describir la forma (décasyllabes, laisses asonantadas) y los valores (honor, fidelidad, valor, fe) frente a los antivalores (traición, cobardía)."],
    iconos: ["ic2/pergamino", "ic2/bandera", "ic2/libro"],
    previos: ["De la Galia a la Edad Media (C1.2, lección 17) y los registros, entre ellos el épico (lección 1)."],
    capacidad: "Ahora comentas un pasaje épico medieval con sus códigos."
  },
  requiere: R("b5ga-moyenage", "b6gr-registres"), recupera: ["b5ga-moyenage"],
  conceptos: {
    "b6cg-roland": { n: "la chanson de geste: poema épico sobre hazañas (la geste); la Chanson de Roland (hacia 1100) narra la muerte de Roland, sobrino de Charlemagne, en Roncevaux (778): Roland meurt à Roncevaux (final trágico, no gana la batalla); por orgullo, se niega a tocar el olifant (el cuerno) para llamar a Charlemagne; personajes: Roland (preux: valiente y orgulloso), Olivier (sage: prudente), Ganelon (le traître: traiciona al ejército de Charlemagne; no Olivier), Charlemagne (emperador); Durendal: la espada de Roland", b: "gr" },
    "b6cg-forme": { n: "forma: décasyllabes agrupados en laisses (estrofas épicas de longitud variable con la misma asonancia); valores exaltados: l'honneur (feudal), la fidélité au seigneur, le courage, la foi; antivalores: la trahison, la lâcheté, le mensonge, l'avarice", b: "gr" }
  },
  video: {
    titulo: "El Cantar de Roldán", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Roncevaux, 778", seg: [
        { es: "Hola. El cantar de gesta más célebre de Francia." } ] },
      { v: "frase", filas: [
          { nota: "orgullo", p: 1, partes: [["Roland refuse de sonner du cor par orgueil.", "-", 1]] },
          { nota: "traición", p: 2, partes: [["Ganelon trahit l'armée de Charlemagne.", "-", 2]] },
          { nota: "forma", p: 3, partes: [["La Chanson de Roland est écrite en décasyllabes.", "-", 3]] } ], seg: [
        { fr: "Roland refuse de sonner du cor par orgueil.", p: 1 }, { fr: "Ganelon trahit l'armée de Charlemagne.", p: 2 }, { fr: "La Chanson de Roland est écrite en décasyllabes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Al final, Roland…", o: ["muere en Roncesvalles", "gana la batalla"], a: 0, es: true,
        bien: "¡Sí! Final trágico.", mal: "Muere en Roncesvalles.",
        seg: [ { es: "Pausa. Muere." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la chanson de geste", "Roland", "Ganelon", "Durendal", "l'olifant", "les laisses"], seg: [
        { es: "Personajes, forma y valores.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lectura en voz alta", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia lee en clase un pasaje de la Chanson de Roland.",
    pj: PJ,
    lineas: [
      ["sofia", "La Chanson de Roland, écrite vers 1100, raconte la mort de Roland, neveu de Charlemagne, à Roncevaux, en 778. Elle est écrite en décasyllabes, regroupés en laisses.", "El Cantar de Roldán, escrito hacia 1100, cuenta la muerte de Roldán, sobrino de Carlomagno, en Roncesvalles, en 778. Está escrito en decasílabos, agrupados en laisses."],
      ["camila", "Une laisse, c'est quoi ? — Une strophe épique de longueur variable, sur la même assonance. Et le traître, c'est Olivier ? — Non ! Olivier est sage ; c'est Ganelon qui trahit l'armée de Charlemagne. Roland est preux et Olivier est sage.", "¿Qué es una laisse? — Una estrofa épica de longitud variable, sobre la misma asonancia. ¿Y el traidor es Olivier? — ¡No! Olivier es sensato; es Ganelón quien traiciona al ejército de Carlomagno. Roldán es valiente y Olivier es sensato."],
      ["sofia", "Encerclé, Roland refuse de sonner de l'olifant pour appeler Charlemagne : il refuse par orgueil. Il se bat avec Durendal, son épée, et finalement Roland meurt à Roncevaux.", "Rodeado, Roldán se niega a tocar el olifante para llamar a Carlomagno: se niega por orgullo. Lucha con Durandarte, su espada, y finalmente Roldán muere en Roncesvalles."],
      ["camila", "Donc la chanson exalte l'honneur et la fidélité au seigneur ? — Oui, le courage et la foi ; et elle condamne la trahison et la lâcheté.", "¿Entonces el cantar exalta el honor y la fidelidad al señor? — Sí, el valor y la fe; y condena la traición y la cobardía."]
    ],
    fijate: "Fíjate: vers 1100, Roncevaux (778), en décasyllabes, des laisses (même assonance), Ganelon (le traître), Roland est preux et Olivier est sage, l'olifant, par orgueil, Durendal, Roland meurt à Roncevaux, l'honneur, la fidélité."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Personajes, forma y valores",
      idea: "La Chanson de Roland (hacia 1100) es el cantar de gesta (poema épico sobre hazañas) más célebre. Cuenta la muerte de Roland, sobrino de Carlomagno, en Roncesvalles (778). Roland es preux (valiente y orgulloso) y, por orgullo, se niega a tocar el olifant (el cuerno) para pedir ayuda; Olivier es sage (prudente); Ganelon es el traidor; Charlemagne, el emperador. Durendal es la espada de Roland. El final es trágico: Roland muere. Forma: décasyllabes agrupados en laisses, estrofas de longitud variable con la misma asonancia. Valores: el honor feudal, la fidelidad al señor, el valor, la fe; antivalores: la traición, la cobardía, la mentira, la avaricia.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Valor"], [
        ["Ganelon", "el traidor", "personnages"],
        ["Durendal", "la espada de Roland", "personnages"],
        ["une strophe épique sur la même assonance", "una laisse", "forme"],
        ["Roland est preux et Olivier est sage. · sage", "Roldán es valiente y Olivier sensato.", "personnages"],
        ["La bataille a lieu à Roncevaux en 778. · Roncevaux", "La batalla tiene lugar en Roncesvalles en 778.", "personnages"],
        ["Roland = valiente y orgulloso · Olivier = prudente · Ganelon = traidor · Charlemagne = emperador", "personajes", "resumen"],
        ["l'honneur · la fidélité · le courage · la foi", "valores", "Valor exaltado"],
        ["la trahison · la lâcheté · le mensonge · l'avarice", "antivalores", "Antivalor"],
        ["Dans la chanson, c'est Ganelon qui trahit Roland. · Ganelon", "En el cantar, es Ganelón quien traiciona.", "personnages"],
        ["Roland meurt à Roncevaux", "Roldán muere en Roncesvalles", "personnages"],
        ["l'olifant", "el cuerno de Roland", "personnages"],
        ["Roland refuse de sonner de l'olifant pour appeler Charlemagne.", "Roldán se niega a tocar el olifante.", "personnages"]
      ]],
      ej: [["Roland refuse de sonner du cor par orgueil.", "Roland se niega a tocar el cuerno por orgullo."], ["Ganelon trahit l'armée de Charlemagne.", "Ganelón traiciona al ejército de Carlomagno."], ["La Chanson de Roland est écrite en décasyllabes.", "El Cantar de Roldán está escrito en decasílabos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Roland gagne la bataille.", "Roland meurt à Roncevaux.", "Final trágico."], ["Olivier trahit Roland.", "Ganelon trahit Roland.", "Olivier es el sensato."], ["la Chanson de Roland en alexandrins", "la Chanson de Roland en décasyllabes", "Diez sílabas."]] }
  ],
  ejemplos: [
    { sit: "¿Por qué Roland no toca el olifante?", resp: "par orgueil", pasos: ["Honor."], porque: "Personaje." },
    { sit: "El emperador del cantar:", resp: "Charlemagne", pasos: ["Tío de Roland."], porque: "Personajes." },
    { sit: "Un poema épico sobre hazañas:", resp: "une chanson de geste", pasos: ["Gesta."], porque: "Género." }
  ],
  comprueba: [
    { q: "La Chanson de Roland es de hacia…", o: ["1100", "1500"], a: 0, b: "gr", porque: "Edad Media." },
    { q: "El olifante es…", o: ["un cuerno", "una espada"], a: 0, b: "gr", porque: "Objeto." },
    { q: "La cobardía es…", o: ["un antivalor", "un valor exaltado"], a: 0, b: "gr", porque: "Valores." }
  ],
  practica: [
    { fase: "guiada", c: ["b6cg-forme"], k: "sort", ask: "¿Valor exaltado o antivalor?", q: "Clasifica.", cats: ["Valor exaltado", "Antivalor"], items: [["l'honneur", 0], ["la fidélité", 0], ["le courage", 0], ["la foi", 0], ["la trahison", 1], ["la lâcheté", 1], ["le mensonge", 1], ["l'avarice", 1]], pista: "¿Caballero o traidor?", why: "Valores." },
    { fase: "guiada", c: ["b6cg-roland"], k: "choice", ask: "El traidor:", q: "Elige.", o: ["Ganelon", "Olivier"], a: 0, pista: "No es el sensato.", why: "Ganelon." },
    { fase: "guiada", c: ["b6cg-roland"], k: "fill", ask: "Roland es valiente; Olivier es…", q: "Roland est preux et Olivier est ___ .", acc: ["sage"], pista: "sabio.", why: "<b>sage</b>." },
    { fase: "indep", c: ["b6cg-roland"], k: "fill", ask: "El lugar de la batalla.", q: "La bataille a lieu à ___ en 778.", acc: ["Roncevaux"], why: "<b>Roncevaux</b>." },
    { fase: "indep", c: ["b6cg-roland"], k: "match", ask: "Une cada personaje con su rasgo.", q: "Personaje → rasgo", pairs: [["Roland", "valiente y orgulloso"], ["Olivier", "prudente"], ["Ganelon", "traidor"], ["Charlemagne", "emperador"]], why: "Personajes." },
    { fase: "indep", c: ["b6cg-roland"], k: "spot", ask: "Encuentra el error.", s: "Dans la chanson , c'est [Olivier] qui trahit Roland .", fix: "Ganelon", why: "<b>Ganelon</b>." },
    { fase: "aplica", c: ["b6cg-roland"], k: "choice", ask: "La espada de Roland:", q: "Elige.", o: ["Durendal", "l'olifant"], a: 0, why: "Durendal." },
    { fase: "aplica", c: ["b6cg-forme"], k: "choice", ask: "Una laisse es…", q: "Elige.", o: ["une strophe épique sur la même assonance", "un poème de quatorze vers"], a: 0, why: "Estrofa épica." },
    { fase: "aplica", c: ["b6cg-roland"], k: "spot", ask: "Encuentra el error.", s: "À la fin de la chanson , Roland [gagne la bataille] .", fix: "meurt à Roncevaux", why: "<b>meurt à Roncevaux</b>." },
    { fase: "dominio", c: ["b6cg-roland"], k: "order", ask: "Ordena la frase.", tokens: ["Roland", "meurt", "à Roncevaux"], why: "<b>Roland meurt à Roncevaux</b>" },
    { fase: "dominio", c: ["b6cg-forme"], k: "choice", ask: "La Chanson de Roland está escrita en…", q: "Elige.", o: ["décasyllabes", "alexandrins"], a: 0, why: "Decasílabos." },
    { fase: "dominio", c: ["b6cg-roland", "b6cg-forme"], k: "listen", say: "Roland refuse de sonner de l'olifant pour appeler Charlemagne.", acc: ["Roland refuse de sonner de l'olifant pour appeler Charlemagne."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Roland refuse de sonner de l'olifant pour appeler Charlemagne.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Roland", "Olivier", "Ganelon", "Charlemagne", "Durendal", "Roncevaux", "Chanson de Roland"], previo: [] }
};

/* ── 18. Le roman courtois : Chrétien de Troyes, Tristan et Iseut ── */
E["lit-roman-courtois"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le roman courtois : Chrétien de Troyes, Tristan et Iseut",
  objetivo: {
    que: "Vas a conocer la novela cortés del siglo XII: los caballeros de la Tabla Redonda, el amor cortés y Tristán e Isolda.",
    corto: "Lancelot aime la reine Guenièvre. · Perceval part à la recherche du Graal. · Tristan et Iseut boivent un philtre d'amour.",
    podras: ["Situar a Chrétien de Troyes (siglo XII): Lancelot, Yvain, Perceval ou le Conte du Graal; la quête du Graal.", "Explicar l'amour courtois (fin'amor): el caballero sirve a su dama, a menudo casada, y debe probar su valor; y el amor-pasión de Tristan et Iseut (el filtro).", "Distinguir chanson de geste y roman courtois, y saber que roman designaba una obra en lengua romance."],
    iconos: ["ic2/flor", "ic2/pergamino", "ic2/libro"],
    previos: ["La Chanson de Roland (lección 17) y De la Galia a la Edad Media (C1.2, lección 17)."],
    capacidad: "Ahora distingues la épica guerrera de la novela cortés y sus valores."
  },
  requiere: R("b6cg-roland", "b5ga-moyenage"), recupera: ["b6cg-roland"],
  conceptos: {
    "b6rc-chretien": { n: "en el siglo XII nace le roman courtois; roman designaba al principio una obra en lengua romance (vulgar), no «novela romana»; Chrétien de Troyes escribe las aventuras de los caballeros de la Tabla Redonda: Lancelot (ama a la reina Guenièvre, no a Iseut), Yvain (Laudine), Perceval ou le Conte du Graal (la quête du Graal)", b: "gr" },
    "b6rc-amour": { n: "l'amour courtois (fin'amor): el caballero debe servir a su dama, a menudo casada e inaccesible, y probar su valor para merecerla; Tristan et Iseut, unidos por un philtre d'amour, encarnan el amor-pasión, fatal; chanson de geste (Roland, la guerre sainte, l'olifant, les laisses) frente a roman courtois (la dame, la quête du Graal, Lancelot, l'amour courtois)", b: "gr" }
  },
  video: {
    titulo: "La novela cortés", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "l'amour courtois", seg: [
        { es: "Hola. Caballeros que sirven a su dama." } ] },
      { v: "frase", filas: [
          { nota: "Lancelot", p: 1, partes: [["Lancelot aime la reine Guenièvre.", "-", 1]] },
          { nota: "Grial", p: 2, partes: [["Perceval part à la recherche du Graal.", "-", 2]] },
          { nota: "filtro", p: 3, partes: [["Tristan et Iseut boivent un philtre d'amour.", "-", 3]] } ], seg: [
        { fr: "Lancelot aime la reine Guenièvre.", p: 1 }, { fr: "Perceval part à la recherche du Graal.", p: 2 }, { fr: "Tristan et Iseut boivent un philtre d'amour.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Roman» designaba al principio…", o: ["una obra en lengua romance", "una novela romana"], a: 0, es: true,
        bien: "¡Sí! Lengua vulgar, no latín.", mal: "Una obra en lengua romance.",
        seg: [ { es: "Pausa. Lengua romance." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Chrétien de Troyes", "Lancelot", "Perceval", "le Graal", "l'amour courtois", "Tristan et Iseut"], seg: [
        { es: "Caballeros, damas y amor.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Leyendas artúricas", img: "bg-biblioteca", yo: "camila",
    escena: "Camila, fan de las leyendas artúricas, habla con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "J'adore le roi Arthur ! — Alors lis Chrétien de Troyes : au XIIe siècle, il écrit les aventures des chevaliers de la Table ronde, Lancelot, Yvain, Perceval ou le Conte du Graal.", "¡Me encanta el rey Arturo! — Entonces lee a Chrétien de Troyes: en el siglo XII escribe las aventuras de los caballeros de la Tabla Redonda, Lanzarote, Ivain, Perceval o el cuento del Grial."],
      ["sofia", "Lancelot aime la reine Guenièvre, l'épouse du roi. C'est l'amour courtois : le chevalier doit servir sa dame, souvent mariée, et prouver sa valeur pour la mériter.", "Lanzarote ama a la reina Ginebra, la esposa del rey. Es el amor cortés: el caballero debe servir a su dama, a menudo casada, y probar su valor para merecerla."],
      ["camila", "Et Perceval ? — Perceval part en quête du Graal. Et Tristan et Iseut, eux, boivent un philtre d'amour : c'est l'amour-passion, un amour fatal.", "¿Y Perceval? — Perceval parte en busca del Grial. Y Tristán e Isolda beben un filtro de amor: es el amor-pasión, un amor fatal."],
      ["sofia", "Et le mot roman ? Au Moyen Âge, il désignait une œuvre écrite en langue romane, la langue vulgaire, et non en latin. Rien à voir avec les Romains !", "¿Y la palabra roman? En la Edad Media designaba una obra escrita en lengua romance, la lengua vulgar, y no en latín. ¡Nada que ver con los romanos!"]
    ],
    fijate: "Fíjate: Chrétien de Troyes (XIIe siècle), les chevaliers de la Table ronde, Lancelot aime la reine Guenièvre, l'amour courtois (servir sa dame), Perceval part en quête du Graal, un philtre d'amour, l'amour-passion, roman = œuvre en langue romane."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La novela cortés",
      idea: "En el siglo XII nace la novela cortés; al principio, roman designaba una obra en lengua romance (vulgar), no en latín. Chrétien de Troyes escribe las aventuras de los caballeros de la Tabla Redonda: Lancelot (enamorado de la reina Guenièvre), Yvain (Laudine), Perceval ou le Conte du Graal (la búsqueda del Grial). El amor cortés (fin'amor) exige al caballero servir a su dama, a menudo casada e inaccesible, y probar su valor para merecerla. Tristan et Iseut, unidos por un filtro de amor, encarnan el amor-pasión, fatal. Frente a la chanson de geste (guerra santa, olifante, laisses), la novela cortés pone en el centro a la dama, la búsqueda y el amor.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["Chrétien de Troyes", "el autor de Lancelot, Yvain y Perceval", "Roman courtois"],
        ["un philtre d'amour", "lo que une a Tristan et Iseut", "Roman courtois"],
        ["la reine Guenièvre", "la dama de Lancelot", "Roman courtois"],
        ["Perceval cherche le Graal. · Graal", "Perceval busca el Grial.", "Roman courtois"],
        ["L'amour courtois exige de servir sa dame. · courtois", "El amor cortés exige servir a la dama.", "Roman courtois"],
        ["Lancelot = Guenièvre · Tristan = Iseut · Perceval = le Graal · Yvain = Laudine", "parejas y búsquedas", "resumen"],
        ["Roland · la guerre sainte · l'olifant · les laisses", "rasgos del cantar de gesta", "Chanson de geste"],
        ["la dame · la quête du Graal · Lancelot · l'amour courtois", "rasgos de la novela cortés", "Roman courtois"],
        ["Lancelot est amoureux de la reine Guenièvre. · Guenièvre", "Lanzarote está enamorado de la reina Ginebra.", "Roman courtois"],
        ["Perceval part en quête du Graal", "Perceval parte en busca del Grial", "Roman courtois"],
        ["une œuvre en langue romane", "lo que designaba «roman» en la Edad Media", "vocabulaire"],
        ["Dans le roman courtois, le chevalier doit prouver sa valeur pour mériter sa dame.", "En la novela cortés, el caballero prueba su valor por su dama.", "Roman courtois"]
      ]],
      ej: [["Lancelot aime la reine Guenièvre.", "Lanzarote ama a la reina Ginebra."], ["Perceval part à la recherche du Graal.", "Perceval parte en busca del Grial."], ["Tristan et Iseut boivent un philtre d'amour.", "Tristán e Isolda beben un filtro de amor."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["roman = roman romain", "roman = œuvre en langue romane (vulgaire)", "Origen de la palabra."], ["Lancelot aime Iseut.", "Lancelot aime Guenièvre ; Tristan aime Iseut.", "No confundir."], ["un filtre d'amour", "un philtre d'amour", "Philtre con ph."]] }
  ],
  ejemplos: [
    { sit: "La dama de Yvain:", resp: "Laudine", pasos: ["Chrétien."], porque: "Personajes." },
    { sit: "El amor de Tristán e Isolda es…", resp: "l'amour-passion", pasos: ["Fatal."], porque: "Amor." },
    { sit: "La búsqueda de Perceval:", resp: "la quête du Graal", pasos: ["El Grial."], porque: "Búsqueda." }
  ],
  comprueba: [
    { q: "La novela cortés nace en el siglo…", o: ["XII", "XVI"], a: 0, b: "gr", porque: "Edad Media." },
    { q: "La dama del amor cortés es a menudo…", o: ["casada e inaccesible", "la esposa del caballero"], a: 0, b: "gr", porque: "Fin'amor." },
    { q: "El olifante pertenece al…", o: ["cantar de gesta", "amor cortés"], a: 0, b: "gr", porque: "Roland." }
  ],
  practica: [
    { fase: "guiada", c: ["b6rc-amour"], k: "sort", ask: "¿Cantar de gesta o novela cortés?", q: "Clasifica.", cats: ["Chanson de geste", "Roman courtois"], items: [["Roland", 0], ["la guerre sainte", 0], ["l'olifant", 0], ["les laisses", 0], ["la dame", 1], ["la quête du Graal", 1], ["Lancelot", 1], ["l'amour courtois", 1]], pista: "¿Guerra o amor?", why: "Géneros." },
    { fase: "guiada", c: ["b6rc-chretien"], k: "choice", ask: "El autor de Lancelot, Yvain y Perceval:", q: "Elige.", o: ["Chrétien de Troyes", "Rabelais"], a: 0, pista: "Siglo XII.", why: "Chrétien." },
    { fase: "guiada", c: ["b6rc-chretien"], k: "fill", ask: "Lo que busca Perceval.", q: "Perceval cherche le ___ .", acc: ["Graal"], pista: "Grial.", why: "<b>Graal</b>." },
    { fase: "indep", c: ["b6rc-amour"], k: "fill", ask: "El amor… (adjetivo).", q: "L'amour ___ exige de servir sa dame.", acc: ["courtois"], why: "<b>courtois</b>." },
    { fase: "indep", c: ["b6rc-chretien", "b6rc-amour"], k: "match", ask: "Une cada caballero con su dama o búsqueda.", q: "Caballero → dama / búsqueda", pairs: [["Lancelot", "Guenièvre"], ["Tristan", "Iseut"], ["Perceval", "le Graal"], ["Yvain", "Laudine"]], why: "Parejas." },
    { fase: "indep", c: ["b6rc-chretien"], k: "spot", ask: "Encuentra el error.", s: "Lancelot est amoureux de la reine [Iseut] .", fix: "Guenièvre", why: "<b>Guenièvre</b>." },
    { fase: "aplica", c: ["b6rc-amour"], k: "choice", ask: "Lo que une a Tristán e Isolda:", q: "Elige.", o: ["un philtre d'amour", "une épée"], a: 0, why: "Filtro." },
    { fase: "aplica", c: ["b6rc-chretien"], k: "choice", ask: "En la Edad Media, «roman» designaba…", q: "Elige.", o: ["une œuvre en langue romane", "une histoire de Rome"], a: 0, why: "Lengua romance." },
    { fase: "aplica", c: ["b6rc-amour"], k: "spot", ask: "Encuentra el error de ortografía.", s: "Tristan et Iseut boivent [un filtre] d'amour .", fix: "un philtre", why: "<b>un philtre</b>." },
    { fase: "dominio", c: ["b6rc-chretien"], k: "order", ask: "Ordena la frase.", tokens: ["Perceval", "part en quête", "du Graal"], why: "<b>Perceval part en quête du Graal</b>" },
    { fase: "dominio", c: ["b6rc-amour"], k: "choice", ask: "En el amor cortés, el caballero debe…", q: "Elige.", o: ["servir sa dame et prouver sa valeur", "épouser la reine"], a: 0, why: "Servicio." },
    { fase: "dominio", c: ["b6rc-amour", "b6rc-chretien"], k: "listen", say: "Dans le roman courtois, le chevalier doit prouver sa valeur pour mériter sa dame.", acc: ["Dans le roman courtois, le chevalier doit prouver sa valeur pour mériter sa dame."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans le roman courtois, le chevalier doit prouver sa valeur pour mériter sa dame.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Chrétien de Troyes", "Arthur", "Table ronde", "Lancelot", "Guenièvre", "Yvain", "Laudine", "Perceval", "Graal", "Tristan", "Iseut", "Roland", "Rabelais", "Romains"], previo: [] }
};

/* ── 19. François Villon, poète maudit avant l'heure ── */
E["lit-villon"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "François Villon, poète maudit avant l'heure",
  objetivo: {
    que: "Vas a conocer a François Villon, poeta del siglo XV, la forma de la balada y sus grandes temas: la muerte, el tiempo y la compasión.",
    corto: "Villon a été condamné à la pendaison. · La ballade se termine par un envoi. · Mais où sont les neiges d'antan ?",
    podras: ["Situar a Villon (siglo XV): estudiante, ladrón, condenado a la horca; Le Testament.", "Describir la ballade: tres estrofas + envoi, con un refrain; la Ballade des pendus («Frères humains qui après nous vivez…») y la Ballade des dames du temps jadis («Mais où sont les neiges d'antan ?»).", "Reconocer sus temas (la muerte, la piedad, la fuga del tiempo, la miseria) y explicar por qué es un precursor de los poetas malditos."],
    iconos: ["ic2/pergamino", "ic2/lapiz", "ic2/libro"],
    previos: ["La versificación (lección 3) y los poetas malditos del XIX (lección 6)."],
    capacidad: "Ahora comentas una balada de Villon con su forma y sus temas."
  },
  requiere: R("b6vc-vers", "b6px-symbolisme"), recupera: ["b6px-symbolisme"],
  conceptos: {
    "b6vi-villon": { n: "François Villon (siglo XV): estudiante, ladrón, condenado a la pendaison (la horca); Le Testament (legados burlescos y reflexión sobre la muerte); la Ballade des pendus: los ahorcados piden compasión («Frères humains qui après nous vivez, n'ayez les cœurs contre nous endurcis»); la Ballade des dames du temps jadis, con su estribillo «Mais où sont les neiges d'antan ?» (antan = antaño, no «antes de ayer»; no «d'avant»); precursor del poète maudit", b: "gr" },
    "b6vi-ballade": { n: "la ballade: forma fija con estribillo: tres estrofas + l'envoi (estrofa final dirigida a alguien), con un refrain (estribillo); un pendu = un ahorcado; temas: la mort, la pitié, la fuite du temps, la misère (no el amor cortés ideal, ni la guerra épica, ni la ciencia, ni el progreso)", b: "gr" }
  },
  video: {
    titulo: "François Villon", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "les neiges d'antan", seg: [
        { es: "Hola. Un poeta ladrón que habló de la muerte como nadie." } ] },
      { v: "frase", filas: [
          { nota: "horca", p: 1, partes: [["Villon a été condamné à la pendaison.", "-", 1]] },
          { nota: "envío", p: 2, partes: [["La ballade se termine par un envoi.", "-", 2]] },
          { nota: "antaño", p: 3, partes: [["Mais où sont les neiges d'antan ?", "-", 3]] } ], seg: [
        { fr: "Villon a été condamné à la pendaison.", p: 1 }, { fr: "La ballade se termine par un envoi.", p: 2 }, { fr: "Mais où sont les neiges d'antan ?", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Antan» significa…", o: ["antaño", "antes de ayer"], a: 0, es: true,
        bien: "¡Sí! Un arcaísmo.", mal: "Antan = antaño.",
        seg: [ { es: "Pausa. Antaño." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la ballade", "le refrain", "l'envoi", "la Ballade des pendus", "Le Testament", "la fuite du temps"], seg: [
        { es: "Forma y temas de Villon.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Poesía medieval", img: "bg-noche", yo: "camila",
    escena: "Madame Sofia lee la Ballade des pendus en clase.",
    pj: PJ,
    lineas: [
      ["sofia", "François Villon, au XVe siècle, était étudiant, voleur, et il a été condamné à la pendaison. En attendant la mort, il écrit la Ballade des pendus : « Frères humains qui après nous vivez, n'ayez les cœurs contre nous endurcis. »", "François Villon, en el siglo XV, era estudiante, ladrón, y fue condenado a la horca. Esperando la muerte, escribe la Balada de los ahorcados: «Hermanos humanos que después de nosotros viviréis, no endurezcáis contra nosotros el corazón.»"],
      ["camila", "Ce sont les pendus qui parlent ? — Oui, ils demandent la pitié. La ballade est une forme fixe : trois strophes, un refrain, et elle se termine par un envoi, une strophe adressée à quelqu'un.", "¿Son los ahorcados los que hablan? — Sí, piden compasión. La balada es una forma fija: tres estrofas, un estribillo, y termina con un envío, una estrofa dirigida a alguien."],
      ["sofia", "Dans la Ballade des dames du temps jadis, le refrain demande : « Mais où sont les neiges d'antan ? » Antan, c'est un archaïsme : autrefois, jadis.", "En la Balada de las damas de antaño, el estribillo pregunta: «¿Pero dónde están las nieves de antaño?» Antan es un arcaísmo: antes, antaño."],
      ["camila", "La mort, la misère, le temps qui passe… Il ressemble à Rimbaud ! — C'est pour cela qu'on le dit poète maudit avant l'heure. Et dans Le Testament, il distribue des legs burlesques.", "La muerte, la miseria, el tiempo que pasa… ¡Se parece a Rimbaud! — Por eso se le llama poeta maldito antes de tiempo. Y en El Testamento reparte legados burlescos."]
    ],
    fijate: "Fíjate: condamné à la pendaison, la Ballade des pendus, « Frères humains qui après nous vivez », la pitié, une forme fixe, un refrain, un envoi, « Mais où sont les neiges d'antan ? », antan (autrefois), poète maudit avant l'heure, Le Testament."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Villon y la balada",
      idea: "François Villon (siglo XV), estudiante, ladrón y condenado a la horca, escribe Le Testament (legados burlescos y reflexión sobre la muerte) y la Ballade des pendus, donde los ahorcados piden compasión: «Frères humains qui après nous vivez…». En la Ballade des dames du temps jadis, el estribillo pregunta «Mais où sont les neiges d'antan ?» (antan = antaño). La ballade es una forma fija con estribillo: tres estrofas + un envoi (estrofa final dirigida a alguien), con un refrain. Temas: la muerte, la piedad, la fuga del tiempo, la miseria. Por su vida y su tono, Villon es un precursor del «poeta maldito».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema de Villon?"], [
        ["la Ballade des pendus", "el poema de «Frères humains qui après nous vivez»", "œuvres"],
        ["antaño", "el sentido de «antan»", "vocabulaire"],
        ["la strophe finale adressée à quelqu'un", "l'envoi", "forme"],
        ["Mais où sont les neiges d'antan ? · antan", "¿Pero dónde están las nieves de antaño?", "œuvres"],
        ["Villon a écrit Le Testament. · Testament", "Villon escribió El Testamento.", "œuvres"],
        ["ballade = forma fija con estribillo · refrain = estribillo · envoi = estrofa final · pendu = ahorcado", "vocabulario", "resumen"],
        ["la mort · la pitié · la fuite du temps · la misère", "temas de Villon", "Sí"],
        ["l'amour courtois idéal · la guerre épique · la science · le progrès", "temas ajenos", "No"],
        ["Frères humains qui après nous vivez", "Hermanos humanos que después de nosotros viviréis", "œuvres"],
        ["Villon a été condamné à la pendaison.", "Villon fue condenado a la horca.", "vie"],
        ["poète maudit avant l'heure", "por qué se compara a Villon con Rimbaud", "vie"],
        ["Frères humains qui après nous vivez, n'ayez les cœurs contre nous endurcis.", "Hermanos humanos… no endurezcáis el corazón contra nosotros.", "œuvres"]
      ]],
      ej: [["Villon a été condamné à la pendaison.", "Villon fue condenado a la horca."], ["La ballade se termine par un envoi.", "La balada termina con un envío."], ["Mais où sont les neiges d'antan ?", "¿Pero dónde están las nieves de antaño?"]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["antan = avant-hier", "antan = autrefois (antaño)", "Arcaísmo."], ["les neiges d'avant", "les neiges d'antan", "La cita exacta."], ["la ballade sans refrain", "la ballade avec un refrain et un envoi", "Forma fija."]] }
  ],
  ejemplos: [
    { sit: "Una forma fija con estribillo:", resp: "la ballade", pasos: ["Tres estrofas + envío."], porque: "Forma." },
    { sit: "Un ahorcado:", resp: "un pendu", pasos: ["Ballade des pendus."], porque: "Vocabulario." },
    { sit: "¿Es el progreso un tema de Villon?", resp: "No", pasos: ["Muerte, piedad, tiempo."], porque: "Temas." }
  ],
  comprueba: [
    { q: "Villon vivió en el siglo…", o: ["XV", "XII"], a: 0, b: "gr", porque: "Fin de la Edad Media." },
    { q: "El refrain es…", o: ["el estribillo", "la estrofa final"], a: 0, b: "gr", porque: "Forma." },
    { q: "En la Ballade des pendus, los ahorcados piden…", o: ["compasión", "venganza"], a: 0, b: "gr", porque: "Piedad." }
  ],
  practica: [
    { fase: "guiada", c: ["b6vi-ballade"], k: "sort", ask: "¿Tema de Villon o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la mort", 0], ["la pitié", 0], ["la fuite du temps", 0], ["la misère", 0], ["l'amour courtois idéal", 1], ["la guerre épique", 1], ["la science", 1], ["le progrès", 1]], pista: "Un condenado a muerte.", why: "Temas." },
    { fase: "guiada", c: ["b6vi-villon"], k: "choice", ask: "«Frères humains qui après nous vivez» es el comienzo de…", q: "Elige.", o: ["la Ballade des pendus", "la Chanson de Roland"], a: 0, pista: "Los ahorcados.", why: "Ballade des pendus." },
    { fase: "guiada", c: ["b6vi-villon"], k: "fill", ask: "Las nieves de…", q: "Mais où sont les neiges d'___ ?", acc: ["antan"], pista: "antaño.", why: "<b>antan</b>." },
    { fase: "indep", c: ["b6vi-villon"], k: "fill", ask: "El Testamento.", q: "Villon a écrit Le ___ .", acc: ["Testament"], why: "<b>Testament</b>." },
    { fase: "indep", c: ["b6vi-ballade"], k: "match", ask: "Une cada palabra con su sentido.", q: "Palabra → sentido", pairs: [["ballade", "forma fija con estribillo"], ["refrain", "estribillo"], ["envoi", "estrofa final"], ["pendu", "ahorcado"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6vi-villon"], k: "spot", ask: "Encuentra el error en la cita.", s: "Mais où sont les neiges [d'avant] ?", fix: "d'antan", why: "<b>d'antan</b>." },
    { fase: "aplica", c: ["b6vi-ballade"], k: "choice", ask: "L'envoi es…", q: "Elige.", o: ["la strophe finale adressée à quelqu'un", "le titre du poème"], a: 0, why: "Estrofa final." },
    { fase: "aplica", c: ["b6vi-villon"], k: "choice", ask: "«Antan» significa…", q: "Elige.", o: ["antaño", "mañana"], a: 0, es: true, why: "Antaño." },
    { fase: "aplica", c: ["b6vi-villon"], k: "choice", ask: "¿Por qué se llama a Villon «poète maudit avant l'heure»?", q: "Elige.", o: ["sa vie de voleur et ses thèmes de mort et de misère", "il était symboliste"], a: 0, why: "Precursor." },
    { fase: "dominio", c: ["b6vi-villon"], k: "order", ask: "Ordena el verso.", tokens: ["Frères humains", "qui après nous", "vivez"], why: "<b>Frères humains qui après nous vivez</b>" },
    { fase: "dominio", c: ["b6vi-villon"], k: "spot", ask: "Encuentra el error.", s: "Villon a été condamné [au bûcher] pour ses vols .", fix: "à la pendaison", why: "<b>à la pendaison</b>." },
    { fase: "dominio", c: ["b6vi-villon", "b6vi-ballade"], k: "listen", say: "Villon a été condamné à la pendaison.", acc: ["Villon a été condamné à la pendaison."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Villon a été condamné à la pendaison.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "François Villon", "Villon", "Le Testament", "Rimbaud", "Ballade des pendus", "Ballade des dames du temps jadis", "Chanson de Roland"], previo: [] }
};

/* ── 20. Rabelais : Gargantua et Pantagruel ── */
E["lit-rabelais"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Rabelais : Gargantua et Pantagruel",
  objetivo: {
    que: "Vas a conocer a Rabelais, el gran humanista cómico del Renacimiento, y sus gigantes Gargantua y Pantagruel.",
    corto: "Un repas gargantuesque. · « Fais ce que voudras » est la devise de Thélème. · Rabelais critique l'éducation par la mémoire seule.",
    podras: ["Situar a François Rabelais (siglo XVI, médico y humanista): Pantagruel (1532) y Gargantua (1534), con humor exuberante y lenguaje inventivo.", "Explicar el humanismo: confianza en la educación, el saber, el cuerpo y el espíritu crítico, contra la educación escolástica de memoria; «Science sans conscience n'est que ruine de l'âme».", "Explicar la abadía de Thélème («Fais ce que voudras») y los adjetivos rabelaisien y gargantuesque."],
    iconos: ["ic2/libros", "ic2/cafe", "ic2/flor"],
    previos: ["El Renacimiento (C1.2, lección 18) y Montaigne (C1.2, lección 43)."],
    capacidad: "Ahora comentas un pasaje de Rabelais con su humor y sus ideas humanistas."
  },
  requiere: R("b5re-francois", "b5pc-auteurs"), recupera: ["b5re-francois"],
  conceptos: {
    "b6rb-oeuvre": { n: "François Rabelais (siglo XVI), médecin et humaniste; los gigantes Pantagruel (1532) y Gargantua (1534; Gargantua es el padre de Pantagruel); humor exuberante, lenguaje inventivo; l'abbaye de Thélème, utopía humanista, con la divisa «Fais ce que voudras» (no «Fais ce que dois»); adjetivos: rabelaisien (truculento, desbordante), gargantuesque (enorme, como Gargantua; no «de la garganta»: un repas gargantuesque)", b: "gr" },
    "b6rb-humanisme": { n: "l'humanisme: confianza en el saber y la educación; valora l'esprit critique, la curiosité, le sport et le corps, les langues anciennes; critica le par cœur sans comprendre (la educación por la memoria sola), l'obscurantisme, les disputes stériles, l'ignorance; «Science sans conscience n'est que ruine de l'âme» (Pantagruel)", b: "gr" }
  },
  video: {
    titulo: "Rabelais", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "Fais ce que voudras", seg: [
        { es: "Hola. Gigantes, risa y humanismo." } ] },
      { v: "frase", filas: [
          { nota: "enorme", p: 1, partes: [["Un repas gargantuesque.", "-", 1]] },
          { nota: "Thélème", p: 2, partes: [["« Fais ce que voudras » est la devise de Thélème.", "-", 2]] },
          { nota: "educación", p: 3, partes: [["Rabelais critique l'éducation par la mémoire seule.", "-", 3]] } ], seg: [
        { fr: "Un repas gargantuesque.", p: 1 }, { fr: "Fais ce que voudras est la devise de Thélème.", p: 2 }, { fr: "Rabelais critique l'éducation par la mémoire seule.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Gargantuesque» significa…", o: ["enorme", "de la garganta"], a: 0, es: true,
        bien: "¡Sí! Como el gigante.", mal: "Enorme, como Gargantua.",
        seg: [ { es: "Pausa. Enorme." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Pantagruel", "Gargantua", "l'humanisme", "l'abbaye de Thélème", "rabelaisien", "Science sans conscience"], seg: [
        { es: "Obras, humanismo y adjetivos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una cena enorme", img: "bg-cafe", yo: "camila",
    escena: "Tras una cena de Navidad enorme, Hugo y Camila hablan de Rabelais.",
    pj: PJ,
    lineas: [
      ["hugo", "Quel repas gargantuesque ! — Gargantuesque, ça vient de la gorge ? — Non, de Gargantua, le géant de Rabelais : ça veut dire énorme. Gargantua est le père de Pantagruel.", "¡Qué cena tan pantagruélica! — Gargantuesque, ¿viene de la garganta? — No, de Gargantúa, el gigante de Rabelais: quiere decir enorme. Gargantúa es el padre de Pantagruel."],
      ["camila", "Qui était Rabelais ? — Au XVIe siècle, Rabelais était médecin et humaniste. Il a publié Pantagruel en 1532 et Gargantua en 1534, avec un humour exubérant et des mots inventés.", "¿Quién era Rabelais? — En el siglo XVI, Rabelais era médico y humanista. Publicó Pantagruel en 1532 y Gargantúa en 1534, con un humor exuberante y palabras inventadas."],
      ["hugo", "Il se moque de l'éducation où l'on apprend tout par cœur sans comprendre. Pour lui, il faut la curiosité, l'esprit critique, le sport, les langues anciennes. Et il écrit : « Science sans conscience n'est que ruine de l'âme. »", "Se burla de la educación en la que todo se aprende de memoria sin comprender. Para él hacen falta la curiosidad, el espíritu crítico, el deporte, las lenguas antiguas. Y escribe: «Ciencia sin conciencia no es más que ruina del alma.»"],
      ["camila", "Et l'abbaye de Thélème ? — C'est une utopie humaniste : sa devise est « Fais ce que voudras ». Les habitants vivent librement, parce qu'ils sont bien éduqués.", "¿Y la abadía de Thelema? — Es una utopía humanista: su lema es «Haz lo que quieras». Sus habitantes viven libremente, porque están bien educados."]
    ],
    fijate: "Fíjate: gargantuesque (énorme), Gargantua est le père de Pantagruel, médecin et humaniste, Pantagruel (1532), Gargantua (1534), par cœur sans comprendre, l'esprit critique, « Science sans conscience n'est que ruine de l'âme », l'abbaye de Thélème, « Fais ce que voudras »."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Rabelais y el humanismo",
      idea: "François Rabelais (siglo XVI), médico y humanista, narra las aventuras de los gigantes Pantagruel (1532) y Gargantua (1534), su padre, con un humor exuberante, un lenguaje inventivo y una crítica de la educación escolástica (aprender de memoria sin comprender). El humanismo confía en la educación y el saber: el espíritu crítico, la curiosidad, el deporte y el cuerpo, las lenguas antiguas; combate el oscurantismo, las disputas estériles y la ignorancia. «Science sans conscience n'est que ruine de l'âme» (Pantagruel). La abadía de Thélème es una utopía humanista cuyo lema es «Fais ce que voudras». Adjetivos: rabelaisien (truculento, desbordante), gargantuesque (enorme: un repas gargantuesque).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Visión"], [
        ["Fais ce que voudras", "el lema de Thélème", "Humaniste"],
        ["énorme", "el sentido de «gargantuesque»", "vocabulaire"],
        ["Science sans conscience n'est que ruine de l'âme.", "la cita de Pantagruel", "Humaniste"],
        ["Gargantua est le père de Pantagruel. · Pantagruel", "Gargantúa es el padre de Pantagruel.", "œuvre"],
        ["Rabelais était médecin et humaniste. · humaniste", "Rabelais era médico y humanista.", "œuvre"],
        ["rabelaisien = truculento · Thélème = utopía humanista · humanisme = confianza en el saber · géant = gigante", "vocabulario", "resumen"],
        ["l'esprit critique · la curiosité · le sport et le corps · les langues anciennes", "lo que valora el humanismo", "Humaniste"],
        ["le par cœur sans comprendre · l'obscurantisme · les disputes stériles · l'ignorance", "lo que critica", "Critiqué"],
        ["La devise de l'abbaye de Thélème est « Fais ce que voudras ». · voudras", "El lema de Thelema es «Haz lo que quieras».", "Humaniste"],
        ["Pantagruel (1532) · Gargantua (1534)", "las dos obras", "œuvre"],
        ["un repas gargantuesque", "una comida enorme", "vocabulaire"]
      ]],
      ej: [["Un repas gargantuesque.", "Una comida pantagruélica."], ["« Fais ce que voudras » est la devise de Thélème.", "«Haz lo que quieras» es el lema de Thelema."], ["Rabelais critique l'éducation par la mémoire seule.", "Rabelais critica la educación basada solo en la memoria."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["gargantuesque = de la gorge", "gargantuesque = énorme (comme Gargantua)", "Adjetivo derivado."], ["« Fais ce que dois »", "« Fais ce que voudras »", "El lema de Thélème."], ["Pantagruel est le père de Gargantua.", "Gargantua est le père de Pantagruel.", "Genealogía."]] }
  ],
  ejemplos: [
    { sit: "«Rabelaisien» significa…", resp: "truculento", pasos: ["Desbordante."], porque: "Vocabulario." },
    { sit: "Pantagruel se publica en…", resp: "1532", pasos: ["Antes que Gargantua."], porque: "Obras." },
    { sit: "El humanismo critica…", resp: "l'obscurantisme", pasos: ["Ignorancia."], porque: "Ideas." }
  ],
  comprueba: [
    { q: "Rabelais era…", o: ["médico y humanista", "rey y poeta"], a: 0, b: "gr", porque: "Siglo XVI." },
    { q: "Thélème es…", o: ["una utopía humanista", "una catedral gótica"], a: 0, b: "gr", porque: "Abadía." },
    { q: "Gargantua se publica en…", o: ["1534", "1634"], a: 0, b: "gr", porque: "Siglo XVI." }
  ],
  practica: [
    { fase: "guiada", c: ["b6rb-humanisme"], k: "sort", ask: "¿Valorado por el humanismo o criticado?", q: "Clasifica.", cats: ["Humaniste", "Critiqué"], items: [["l'esprit critique", 0], ["la curiosité", 0], ["le sport et le corps", 0], ["les langues anciennes", 0], ["le par cœur sans comprendre", 1], ["l'obscurantisme", 1], ["les disputes stériles", 1], ["l'ignorance", 1]], pista: "¿Saber o rutina?", why: "Humanismo." },
    { fase: "guiada", c: ["b6rb-oeuvre"], k: "choice", ask: "Thélème:", q: "Elige.", o: ["Fais ce que voudras", "Il faut cultiver notre jardin"], a: 0, pista: "El lema.", why: "«Fais ce que voudras»." },
    { fase: "guiada", c: ["b6rb-oeuvre"], k: "fill", ask: "El hijo de Gargantua.", q: "Gargantua est le père de ___ .", acc: ["Pantagruel"], pista: "Panta…", why: "<b>Pantagruel</b>." },
    { fase: "indep", c: ["b6rb-oeuvre"], k: "fill", ask: "Humanista.", q: "Rabelais était médecin et ___ .", acc: ["humaniste"], why: "<b>humaniste</b>." },
    { fase: "indep", c: ["b6rb-oeuvre", "b6rb-humanisme"], k: "match", ask: "Une cada palabra con su sentido.", q: "Palabra → sentido", pairs: [["rabelaisien", "truculento"], ["Thélème", "utopía humanista"], ["humanisme", "confianza en el saber"], ["géant", "gigante"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6rb-oeuvre"], k: "spot", ask: "Encuentra el error en el lema.", s: "La devise de l'abbaye de Thélème est « Fais ce que [dois] » .", fix: "voudras", why: "«Fais ce que <b>voudras</b>»." },
    { fase: "aplica", c: ["b6rb-oeuvre"], k: "choice", ask: "«Un repas gargantuesque» es una comida…", q: "Elige.", o: ["énorme", "légère"], a: 0, why: "Enorme." },
    { fase: "aplica", c: ["b6rb-humanisme"], k: "choice", ask: "La cita de Pantagruel:", q: "Elige.", o: ["Science sans conscience n'est que ruine de l'âme.", "Je pense, donc je suis."], a: 0, why: "Rabelais." },
    { fase: "aplica", c: ["b6rb-humanisme"], k: "spot", ask: "Encuentra el error.", s: "Rabelais défend une éducation fondée sur [le par cœur sans comprendre] .", fix: "la curiosité et l'esprit critique", why: "Defiende <b>la curiosité et l'esprit critique</b>." },
    { fase: "dominio", c: ["b6rb-oeuvre"], k: "order", ask: "Ordena el lema.", tokens: ["Fais", "ce que", "voudras"], why: "<b>Fais ce que voudras</b>" },
    { fase: "dominio", c: ["b6rb-oeuvre"], k: "choice", ask: "«Gargantuesque» viene…", q: "Elige.", o: ["de Gargantua", "de la gorge"], a: 0, why: "Del gigante." },
    { fase: "dominio", c: ["b6rb-humanisme", "b6rb-oeuvre"], k: "listen", say: "Science sans conscience n'est que ruine de l'âme.", acc: ["Science sans conscience n'est que ruine de l'âme."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Science sans conscience n'est que ruine de l'âme.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "François Rabelais", "Rabelais", "Gargantua", "Pantagruel", "Thélème"], previo: [] }
};

/* ── 21. La Pléiade : Ronsard et Du Bellay ── */
E["lit-pleiade"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La Pléiade : Ronsard et Du Bellay",
  objetivo: {
    que: "Vas a conocer la Pléyade del siglo XVI: su programa para enriquecer el francés y los grandes sonetos de Ronsard y Du Bellay.",
    corto: "Mignonne, allons voir si la rose… · Heureux qui, comme Ulysse, a fait un beau voyage. · Le sonnet compte quatorze vers.",
    podras: ["Explicar el programa de la Pléiade: Défense et illustration de la langue française (Du Bellay, 1549), enriquecer la lengua e imitar a los Antiguos; el soneto se impone.", "Asociar a Ronsard (Odes, Les Amours, Sonnets pour Hélène; el carpe diem: «Mignonne, allons voir si la rose…», «Cueillez dès aujourd'hui les roses de la vie») y a Du Bellay (Les Regrets, Les Antiquités de Rome; la nostalgia del Anjou: «Heureux qui, comme Ulysse…»).", "Reconocer el carpe diem: aprovechar el presente."],
    iconos: ["ic2/flor", "ic2/lapiz", "ic2/libros"],
    previos: ["Rabelais y el humanismo (lección 20), la versificación y el soneto (lección 3) y el Renacimiento (C1.2, lección 18)."],
    capacidad: "Ahora comentas un soneto del Renacimiento y su tema."
  },
  requiere: R("b6rb-humanisme", "b6vc-vers", "b5re-francois"), recupera: ["b6vc-vers"],
  conceptos: {
    "b6pl-programme": { n: "la Pléiade (siglo XVI): enriquecer la lengua francesa e imitar a los Antiguos; manifiesto: Défense et illustration de la langue française (Joachim du Bellay, 1549); le sonnet se impone (catorce versos)", b: "gr" },
    "b6pl-poetes": { n: "Ronsard: Odes, Les Amours, Sonnets pour Hélène («Quand vous serez bien vieille»); el carpe diem (aprovechar el presente, la brevedad de la vida): «Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil», «Cueillez dès aujourd'hui les roses de la vie»; Du Bellay (no Ronsard): Les Regrets (la nostalgia de su Anjou natal: «Heureux qui, comme Ulysse, a fait un beau voyage»), Les Antiquités de Rome", b: "gr" }
  },
  video: {
    titulo: "La Pléyade", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "carpe diem", seg: [
        { es: "Hola. Poetas que quisieron engrandecer la lengua francesa." } ] },
      { v: "frase", filas: [
          { nota: "Ronsard", p: 1, partes: [["Mignonne, allons voir si la rose…", "-", 1]] },
          { nota: "Du Bellay", p: 2, partes: [["Heureux qui, comme Ulysse, a fait un beau voyage.", "-", 2]] },
          { nota: "soneto", p: 3, partes: [["Le sonnet compte quatorze vers.", "-", 3]] } ], seg: [
        { fr: "Mignonne, allons voir si la rose.", p: 1 }, { fr: "Heureux qui, comme Ulysse, a fait un beau voyage.", p: 2 }, { fr: "Le sonnet compte quatorze vers.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Heureux qui, comme Ulysse…» es de…", o: ["Du Bellay", "Ronsard"], a: 0, es: true,
        bien: "¡Sí! Les Regrets.", mal: "Es de Du Bellay, Les Regrets.",
        seg: [ { es: "Pausa. Du Bellay." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la Pléiade", "Défense et illustration", "Ronsard", "Du Bellay", "le carpe diem", "le sonnet"], seg: [
        { es: "Programa, poetas y temas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Recitar un soneto", img: "bg-biblioteca", yo: "camila",
    escena: "Camila aprende de memoria un soneto para la clase de Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "J'apprends « Heureux qui, comme Ulysse, a fait un beau voyage ». C'est de Ronsard ? — Non, de Du Bellay, dans Les Regrets : à Rome, il a la nostalgie de son Anjou natal.", "Me aprendo «Feliz quien, como Ulises, ha hecho un buen viaje». ¿Es de Ronsard? — No, de Du Bellay, en Los añoranzas: en Roma siente nostalgia de su Anjou natal."],
      ["sofia", "Du Bellay a aussi écrit le manifeste de la Pléiade, Défense et illustration de la langue française, en 1549 : il faut enrichir le français et imiter les Anciens. Et le sonnet, quatorze vers, s'impose.", "Du Bellay escribió también el manifiesto de la Pléyade, Defensa e ilustración de la lengua francesa, en 1549: hay que enriquecer el francés e imitar a los Antiguos. Y el soneto, de catorce versos, se impone."],
      ["camila", "Et Ronsard ? — Lui chante l'amour et la brièveté de la vie : « Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil… »", "¿Y Ronsard? — Él canta el amor y la brevedad de la vida: «Pequeña, vayamos a ver si la rosa que esta mañana había abierto su vestido de púrpura al sol…»"],
      ["sofia", "C'est le carpe diem : profiter du présent. Dans les Sonnets pour Hélène, il conclut : « Cueillez dès aujourd'hui les roses de la vie. »", "Es el carpe diem: aprovechar el presente. En los Sonetos para Helena, concluye: «Coged desde hoy las rosas de la vida.»"]
    ],
    fijate: "Fíjate: « Heureux qui, comme Ulysse… » (Du Bellay, Les Regrets), la nostalgie de l'Anjou, Défense et illustration de la langue française (1549), imiter les Anciens, le sonnet (quatorze vers), « Mignonne, allons voir si la rose… », le carpe diem, « Cueillez dès aujourd'hui les roses de la vie »."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Programa y poetas",
      idea: "En el siglo XVI, el grupo de la Pléiade quiere enriquecer la lengua francesa e imitar a los Antiguos; su manifiesto es Défense et illustration de la langue française (Du Bellay, 1549). El soneto, de catorce versos, se impone. Ronsard (Odes, Les Amours, Sonnets pour Hélène) canta el amor y la brevedad de la vida: es el carpe diem, aprovechar el presente («Mignonne, allons voir si la rose…», «Quand vous serez bien vieille», «Cueillez dès aujourd'hui les roses de la vie»). Du Bellay expresa la nostalgia de su Anjou natal en Les Regrets («Heureux qui, comme Ulysse, a fait un beau voyage») y escribe Les Antiquités de Rome.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Poeta"], [
        ["Du Bellay", "el autor de los sonetos de Les Regrets", "Du Bellay"],
        ["le carpe diem", "el tema de «aprovecha el presente»", "Ronsard"],
        ["14", "los versos de un soneto", "forme"],
        ["Cueillez dès aujourd'hui les roses de la vie. · roses", "Coged desde hoy las rosas de la vida.", "Ronsard"],
        ["Défense et illustration de la langue française · illustration", "el manifiesto de la Pléyade (1549)", "Du Bellay"],
        ["Du Bellay = Les Regrets · Ronsard = Les Amours · Du Bellay (manifiesto) = Défense et illustration · Ronsard (a Hélène) = Sonnets pour Hélène", "obras", "resumen"],
        ["Mignonne, allons voir si la rose · Quand vous serez bien vieille · Sonnets pour Hélène · Les Amours", "obras de Ronsard", "Ronsard"],
        ["Les Regrets · Heureux qui, comme Ulysse · Les Antiquités de Rome · nostalgie de l'Anjou", "obras y temas de Du Bellay", "Du Bellay"],
        ["« Heureux qui, comme Ulysse, a fait un beau voyage » est un vers de Du Bellay. · Du Bellay", "Ese verso es de Du Bellay.", "Du Bellay"],
        ["Heureux qui, comme Ulysse, a fait un beau voyage", "Feliz quien, como Ulises, ha hecho un buen viaje", "Du Bellay"],
        ["enrichir la langue française et imiter les Anciens", "el programa de la Pléyade", "programme"],
        ["Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil.", "Pequeña, vayamos a ver si la rosa…", "Ronsard"]
      ]],
      ej: [["Mignonne, allons voir si la rose qui ce matin avait déclose…", "Pequeña, vayamos a ver si la rosa que esta mañana había abierto…"], ["Heureux qui, comme Ulysse, a fait un beau voyage.", "Feliz quien, como Ulises, ha hecho un buen viaje."], ["Le sonnet compte quatorze vers.", "El soneto tiene catorce versos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Heureux qui comme Ulysse » = Ronsard", "= Du Bellay (Les Regrets)", "No confundir."], ["la Pléiade veut rejeter le français", "la Pléiade veut enrichir le français", "Défense et illustration."], ["le carpe diem = la nostalgie", "le carpe diem = profiter du présent", "Ronsard."]] }
  ],
  ejemplos: [
    { sit: "«Quand vous serez bien vieille» es de…", resp: "Ronsard", pasos: ["Sonnets pour Hélène."], porque: "Obras." },
    { sit: "Les Antiquités de Rome es de…", resp: "Du Bellay", pasos: ["Roma."], porque: "Obras." },
    { sit: "El programa de la Pléyade:", resp: "enrichir la langue française et imiter les Anciens", pasos: ["Manifiesto."], porque: "Programa." }
  ],
  comprueba: [
    { q: "Défense et illustration es de…", o: ["1549", "1649"], a: 0, b: "gr", porque: "Siglo XVI." },
    { q: "Du Bellay siente nostalgia de…", o: ["su Anjou natal", "París"], a: 0, b: "gr", porque: "Les Regrets." },
    { q: "El carpe diem invita a…", o: ["aprovechar el presente", "recordar el pasado"], a: 0, b: "gr", porque: "Ronsard." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pl-poetes"], k: "sort", ask: "¿Ronsard o Du Bellay?", q: "Clasifica.", cats: ["Ronsard", "Du Bellay"], items: [["Mignonne, allons voir si la rose", 0], ["Quand vous serez bien vieille", 0], ["Sonnets pour Hélène", 0], ["Les Amours", 0], ["Les Regrets", 1], ["Heureux qui, comme Ulysse", 1], ["Les Antiquités de Rome", 1], ["nostalgie de l'Anjou", 1]], pista: "Amor y rosas, o nostalgia.", why: "Poetas." },
    { fase: "guiada", c: ["b6pl-poetes"], k: "choice", ask: "El autor de los sonetos de Les Regrets:", q: "Elige.", o: ["Du Bellay", "Ronsard"], a: 0, pista: "Nostalgia.", why: "Du Bellay." },
    { fase: "guiada", c: ["b6pl-poetes"], k: "fill", ask: "Las … de la vida.", q: "Cueillez dès aujourd'hui les ___ de la vie.", acc: ["roses"], pista: "Flores.", why: "<b>roses</b>." },
    { fase: "indep", c: ["b6pl-programme"], k: "fill", ask: "Defensa e … de la lengua francesa.", q: "Défense et ___ de la langue française.", acc: ["illustration"], why: "<b>illustration</b>." },
    { fase: "indep", c: ["b6pl-poetes", "b6pl-programme"], k: "match", ask: "Une cada poeta con su obra.", q: "Poeta → obra", pairs: [["Du Bellay", "Les Regrets"], ["Ronsard", "Les Amours"], ["Du Bellay (manifiesto)", "Défense et illustration"], ["Ronsard (a Hélène)", "Sonnets pour Hélène"]], why: "Obras." },
    { fase: "indep", c: ["b6pl-poetes"], k: "spot", ask: "Encuentra el error.", s: "« Heureux qui , comme Ulysse , a fait un beau voyage » est un vers de [Ronsard] .", fix: "Du Bellay", why: "<b>Du Bellay</b>." },
    { fase: "aplica", c: ["b6pl-poetes"], k: "choice", ask: "«Mignonne, allons voir si la rose…»: el tema es…", q: "Elige.", o: ["le carpe diem", "la nostalgie"], a: 0, why: "Carpe diem." },
    { fase: "aplica", c: ["b6pl-programme"], k: "choice", ask: "Un soneto tiene…", q: "Elige.", o: ["14 vers", "12 vers"], a: 0, why: "Catorce." },
    { fase: "aplica", c: ["b6pl-programme"], k: "choice", ask: "El programa de la Pléyade:", q: "Elige.", o: ["enrichir la langue française et imiter les Anciens", "écrire uniquement en latin"], a: 0, why: "Enriquecer el francés." },
    { fase: "dominio", c: ["b6pl-poetes"], k: "order", ask: "Ordena el verso de Du Bellay.", tokens: ["Heureux qui,", "comme Ulysse,", "a fait un beau voyage"], why: "<b>Heureux qui, comme Ulysse, a fait un beau voyage</b>" },
    { fase: "dominio", c: ["b6pl-programme"], k: "spot", ask: "Encuentra el error.", s: "La Pléiade veut [remplacer le français par le latin] .", fix: "enrichir la langue française", why: "Quiere <b>enrichir la langue française</b>." },
    { fase: "dominio", c: ["b6pl-poetes", "b6pl-programme"], k: "listen", say: "Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil.", acc: ["Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil."], num: false, dict: true, ask: "Escucha los versos y escríbelos.", why: "Era <b>Mignonne, allons voir si la rose qui ce matin avait déclose sa robe de pourpre au soleil.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Ronsard", "Du Bellay", "Joachim du Bellay", "Pléiade", "Ulysse", "Hélène", "Anjou", "Rome", "Les Regrets", "Les Amours", "Sonnets pour Hélène", "Les Antiquités de Rome", "Odes", "Anciens"], previo: [] }
};

/* ── 22. Corneille et le dilemme cornélien ── */
E["lit-corneille"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Corneille et le dilemme cornélien",
  objetivo: {
    que: "Vas a conocer a Corneille, Le Cid y el dilema cornélien, y a distinguir el héroe cornélien del personaje raciniano.",
    corto: "Rodrigue doit choisir entre l'amour et l'honneur. · C'est un vrai dilemme cornélien ! · « Va, je ne te hais point », dit Chimène.",
    podras: ["Situar Le Cid (1637), tragicomedia, y la querelle du Cid: Rodrigue debe elegir entre su amor por Chimène y el honor de su familia.", "Explicar el dilemme cornélien (elección imposible entre dos deberes) y el héroe cornélien (voluntad, gloria, admiración) frente al raciniano (pasión fatal, debilidad, piedad).", "Citar versos célebres: «Va, je ne te hais point», «À vaincre sans péril, on triomphe sans gloire»; alexandrinos en rimas pareadas."],
    iconos: ["ic2/nota", "ic2/libro", "ic2/bandera"],
    previos: ["El clasicismo (lección 4), las figuras de estilo (lección 2) y leer el teatro (lección 9)."],
    capacidad: "Ahora explicas un dilema cornélien y lo usas como expresión."
  },
  requiere: R("b6cl-classicisme", "b6fs-opposition", "b6th-structure"), recupera: ["b6cl-classicisme"],
  conceptos: {
    "b6co-cid": { n: "Pierre Corneille triunfa con Le Cid (1637), tragicomedia; la querelle du Cid; Rodrigue ama a Chimène (no a Phèdre) pero debe vengar a su padre matando al padre de ella; alexandrinos (12 sílabas) en rimas pareadas; versos: «Va, je ne te hais point» (Chimène, lítote), «À vaincre sans péril, on triomphe sans gloire», «Rodrigue, as-tu du cœur ?»; otras obras: Horace, Cinna, L'Illusion comique", b: "gr" },
    "b6co-dilemme": { n: "le dilemme cornélien = una elección imposible entre dos deberes (amor frente a honor o deber), no un problema fácil; expresión cultural: «C'est un vrai dilemme cornélien !»; el héroe cornélien: la volonté, la gloire, l'honneur choisi, l'admiration; frente al personaje raciniano: la passion fatale, la fatalité, la faiblesse humaine, la pitié", b: "gr" }
  },
  video: {
    titulo: "Corneille", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "le dilemme cornélien", seg: [
        { es: "Hola. Elegir entre el amor y el honor." } ] },
      { v: "frase", filas: [
          { nota: "elegir", p: 1, partes: [["Rodrigue doit choisir entre l'amour et l'honneur.", "-", 1]] },
          { nota: "expresión", p: 2, partes: [["C'est un vrai dilemme cornélien !", "-", 2]] },
          { nota: "lítote", p: 3, partes: [["« Va, je ne te hais point », dit Chimène.", "-", 3]] } ], seg: [
        { fr: "Rodrigue doit choisir entre l'amour et l'honneur.", p: 1 }, { fr: "C'est un vrai dilemme cornélien !", p: 2 }, { fr: "Va, je ne te hais point, dit Chimène.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un dilema cornélien es…", o: ["una elección imposible entre dos deberes", "un problema fácil"], a: 0, es: true,
        bien: "¡Sí! Amor contra honor.", mal: "Es una elección imposible.",
        seg: [ { es: "Pausa. Elección imposible." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Le Cid", "Rodrigue", "Chimène", "le dilemme cornélien", "la gloire", "la querelle du Cid"], seg: [
        { es: "Obra, dilema y héroe.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un dilema real", img: "bg-cafe", yo: "camila",
    escena: "Camila duda entre dos ofertas y Hugo le cita a Corneille.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai deux offres : un stage à Paris ou rester à Lyon avec mes amis… — C'est un vrai dilemme cornélien ! Comme Rodrigue dans Le Cid.", "Tengo dos ofertas: unas prácticas en París o quedarme en Lyon con mis amigos… — ¡Es un verdadero dilema corneliano! Como Rodrigo en El Cid."],
      ["hugo", "Dans Le Cid, en 1637, Rodrigue aime Chimène mais doit venger son père : il doit tuer le père de Chimène. Choisir entre l'amour et le devoir : voilà un véritable dilemme cornélien.", "En El Cid, en 1637, Rodrigo ama a Jimena pero debe vengar a su padre: debe matar al padre de Jimena. Elegir entre el amor y el deber: he ahí un verdadero dilema corneliano."],
      ["camila", "Et Chimène, elle le déteste ? — Elle lui dit : « Va, je ne te hais point » — une litote qui veut dire qu'elle l'aime encore. Le héros cornélien, c'est la volonté et la gloire : « À vaincre sans péril, on triomphe sans gloire. »", "¿Y Jimena lo odia? — Le dice: «Ve, no te odio», una lítote que quiere decir que todavía lo ama. El héroe corneliano es la voluntad y la gloria: «A vencer sin peligro, se triunfa sin gloria.»"],
      ["hugo", "Chez Racine, au contraire, les personnages sont victimes d'une passion fatale. Corneille, c'est l'admiration ; Racine, c'est la pitié.", "En Racine, al contrario, los personajes son víctimas de una pasión fatal. Corneille es la admiración; Racine, la piedad."]
    ],
    fijate: "Fíjate: un vrai dilemme cornélien, Le Cid (1637), Rodrigue aime Chimène, venger son père, l'amour et le devoir, « Va, je ne te hais point » (litote), la volonté et la gloire, « À vaincre sans péril, on triomphe sans gloire », la passion fatale (Racine)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Le Cid y el dilema",
      idea: "Pierre Corneille triunfa con Le Cid (1637), tragicomedia que provoca la querelle du Cid. Rodrigue debe elegir entre su amor por Chimène y el honor de su familia: debe matar al padre de ella. Desde entonces, el dilemme cornélien designa una elección imposible entre dos deberes. El héroe cornélien es voluntario y admirable: voluntad, gloria, honor elegido, admiración; el personaje raciniano, en cambio, es víctima de la pasión y de la fatalidad, y suscita piedad. Versos célebres en alejandrinos de rimas pareadas: «Va, je ne te hais point» (lítote de Chimène), «À vaincre sans péril, on triomphe sans gloire». Otras obras: Horace, Cinna, L'Illusion comique.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Héroe"], [
        ["un choix impossible entre deux devoirs", "el dilema cornélien", "Cornélien"],
        ["Chimène", "la amada de Rodrigue en Le Cid", "Cornélien"],
        ["1637", "el año de Le Cid", "Cornélien"],
        ["À vaincre sans péril, on triomphe sans gloire. · gloire", "A vencer sin peligro, se triunfa sin gloria.", "Cornélien"],
        ["Va, je ne te hais point. · hais", "Ve, no te odio.", "Cornélien"],
        ["Le Cid = Corneille · Phèdre = Racine · Tartuffe = Molière · Les Fables = La Fontaine", "obras del Gran Siglo", "resumen"],
        ["la volonté · la gloire · l'honneur choisi · l'admiration", "rasgos del héroe cornélien", "Cornélien"],
        ["la passion fatale · la fatalité · la faiblesse humaine · la pitié", "rasgos del personaje raciniano", "Racinien"],
        ["Dans Le Cid, Rodrigue aime Chimène mais doit venger son père. · Chimène", "Rodrigo ama a Jimena pero debe vengar a su padre.", "Cornélien"],
        ["Horace · Cinna · L'Illusion comique", "otras obras de Corneille", "Cornélien"],
        ["C'est un vrai dilemme cornélien !", "¡Es un verdadero dilema corneliano!", "Cornélien"],
        ["Choisir entre l'amour et le devoir : voilà un véritable dilemme cornélien.", "Elegir entre amor y deber: un verdadero dilema corneliano.", "Cornélien"]
      ]],
      ej: [["Rodrigue doit choisir entre l'amour et l'honneur.", "Rodrigo debe elegir entre el amor y el honor."], ["C'est un vrai dilemme cornélien !", "¡Es un verdadero dilema corneliano!"], ["« Va, je ne te hais point », dit Chimène.", "«Ve, no te odio», dice Jimena."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["dilemme cornélien = un problème facile", "= un choix impossible entre deux devoirs", "Expresión cultural."], ["Rodrigue aime Phèdre.", "Rodrigue aime Chimène.", "Phèdre es de Racine."], ["le héros cornélien, victime de la fatalité", "le héros cornélien, héros de la volonté", "La fatalidad es raciniana."]] }
  ],
  ejemplos: [
    { sit: "Horace es de…", resp: "Corneille", pasos: ["Gran Siglo."], porque: "Obras." },
    { sit: "El héroe cornélien suscita…", resp: "l'admiration", pasos: ["Voluntad."], porque: "Héroe." },
    { sit: "El personaje raciniano suscita…", resp: "la pitié", pasos: ["Pasión fatal."], porque: "Héroe." }
  ],
  comprueba: [
    { q: "Le Cid es…", o: ["una tragicomedia", "una fábula"], a: 0, b: "gr", porque: "1637." },
    { q: "«Va, je ne te hais point» es…", o: ["una lítote", "una hipérbole"], a: 0, b: "gr", porque: "Decir menos." },
    { q: "La fatalidad es más bien…", o: ["raciniana", "corneliana"], a: 0, b: "gr", porque: "Racine." }
  ],
  practica: [
    { fase: "guiada", c: ["b6co-dilemme"], k: "sort", ask: "¿Cornélien o raciniano?", q: "Clasifica.", cats: ["Cornélien", "Racinien"], items: [["la volonté", 0], ["la gloire", 0], ["l'honneur choisi", 0], ["l'admiration", 0], ["la passion fatale", 1], ["la fatalité", 1], ["la faiblesse humaine", 1], ["la pitié", 1]], pista: "¿Voluntad o pasión?", why: "Héroes." },
    { fase: "guiada", c: ["b6co-dilemme"], k: "choice", ask: "La expresión «dilemme cornélien» significa…", q: "Elige.", o: ["un choix impossible entre deux devoirs", "un problème facile"], a: 0, pista: "Rodrigue.", why: "Elección imposible." },
    { fase: "guiada", c: ["b6co-cid"], k: "fill", ask: "Sin peligro… sin…", q: "À vaincre sans péril, on triomphe sans ___ .", acc: ["gloire"], pista: "gloria.", why: "<b>gloire</b>." },
    { fase: "indep", c: ["b6co-cid"], k: "fill", ask: "No te … (verbo haïr).", q: "Va, je ne te ___ point.", acc: ["hais"], why: "<b>hais</b>." },
    { fase: "indep", c: ["b6co-cid"], k: "match", ask: "Une cada obra con su autor.", q: "Obra → autor", pairs: [["Le Cid", "Corneille"], ["Phèdre", "Racine"], ["Tartuffe", "Molière"], ["Les Fables", "La Fontaine"]], why: "Obras." },
    { fase: "indep", c: ["b6co-cid"], k: "spot", ask: "Encuentra el error.", s: "Dans Le Cid , Rodrigue aime [Phèdre] mais doit venger son père .", fix: "Chimène", why: "<b>Chimène</b>." },
    { fase: "aplica", c: ["b6co-cid"], k: "choice", ask: "Le Cid se estrena en…", q: "Elige.", o: ["1637", "1677"], a: 0, why: "1637." },
    { fase: "aplica", c: ["b6co-dilemme"], k: "choice", ask: "Camila duda entre unas prácticas en París y quedarse con sus amigos. Hugo dice:", q: "Elige.", o: ["C'est un vrai dilemme cornélien !", "C'est une passion fatale !"], a: 0, why: "Dilema." },
    { fase: "aplica", c: ["b6co-dilemme"], k: "spot", ask: "Encuentra el error.", s: "Le héros cornélien est [victime de la fatalité] .", fix: "un héros de la volonté", why: "Es <b>un héros de la volonté</b>." },
    { fase: "dominio", c: ["b6co-cid"], k: "order", ask: "Ordena el verso.", tokens: ["À vaincre sans péril,", "on triomphe", "sans gloire"], why: "<b>À vaincre sans péril, on triomphe sans gloire</b>" },
    { fase: "dominio", c: ["b6co-dilemme"], k: "choice", ask: "El héroe cornélien suscita…", q: "Elige.", o: ["l'admiration", "la pitié"], a: 0, why: "Admiración." },
    { fase: "dominio", c: ["b6co-dilemme", "b6co-cid"], k: "listen", say: "Choisir entre l'amour et le devoir : voilà un véritable dilemme cornélien.", acc: ["Choisir entre l'amour et le devoir : voilà un véritable dilemme cornélien.", "Choisir entre l'amour et le devoir, voilà un véritable dilemme cornélien."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Choisir entre l'amour et le devoir : voilà un véritable dilemme cornélien.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Pierre Corneille", "Corneille", "Le Cid", "Rodrigue", "Chimène", "Phèdre", "Racine", "Molière", "Tartuffe", "La Fontaine", "Fables", "Horace", "Cinna", "L'Illusion comique", "Paris", "Lyon"], previo: [] }
};

/* ── 23. Racine et la tragédie classique ── */
E["lit-racine"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Racine et la tragédie classique",
  objetivo: {
    que: "Vas a conocer a Racine y las reglas de la tragedia clásica: tres unidades, verosimilitud, decoro y pasión fatal.",
    corto: "Phèdre est amoureuse de son beau-fils Hippolyte. · La tragédie classique respecte la règle des trois unités. · Chez Racine, la passion mène à la mort.",
    podras: ["Situar las tragedias de Racine: Andromaque (1667), Britannicus, Bérénice, Phèdre (1677); y distinguirlas de las de Corneille (Le Cid, Horace, Cinna).", "Explicar las reglas: tres unidades (acción, tiempo, lugar), vraisemblance, bienséance (las muertes se cuentan, no se muestran); cinco actos en alejandrinos.", "Explicar la pasión fatal raciniana: Phèdre ama a su hijastro Hippolyte; «Je le vis, je rougis, je pâlis à sa vue»."],
    iconos: ["ic2/nota", "ic2/libro", "ic2/pergamino"],
    previos: ["Corneille (lección 22), leer el teatro (lección 9) y el clasicismo (lección 4)."],
    capacidad: "Ahora analizas una tragedia de Racine con las reglas clásicas."
  },
  requiere: R("b6co-dilemme", "b6th-structure", "b6cl-classicisme"), recupera: ["b6co-dilemme"],
  conceptos: {
    "b6ra-oeuvre": { n: "Jean Racine lleva la tragedia clásica a su perfección: Andromaque (1667), Britannicus, Bérénice, Phèdre (1677); sus personajes son víctimas de una pasion fatale que los destruye (la passion mène à la mort): Phèdre ama en secreto a su hijastro (beau-fils) Hippolyte; «Je le vis, je rougis, je pâlis à sa vue»; obras de Corneille: Le Cid, Horace, Cinna, L'Illusion comique", b: "gr" },
    "b6ra-regles": { n: "la règle des trois unités: unité d'action (una sola intriga), unité de temps (un solo día), unité de lieu (un solo lugar); la vraisemblance; la bienséance (nada chocante en escena: las muertes se cuentan, no se muestran); cinco actes en alexandrins", b: "gr" }
  },
  video: {
    titulo: "Racine", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "la passion fatale", seg: [
        { es: "Hola. La tragedia clásica en su perfección." } ] },
      { v: "frase", filas: [
          { nota: "Fedra", p: 1, partes: [["Phèdre est amoureuse de son beau-fils Hippolyte.", "-", 1]] },
          { nota: "reglas", p: 2, partes: [["La tragédie classique respecte la règle des trois unités.", "-", 2]] },
          { nota: "pasión", p: 3, partes: [["Chez Racine, la passion mène à la mort.", "-", 3]] } ], seg: [
        { fr: "Phèdre est amoureuse de son beau-fils Hippolyte.", p: 1 }, { fr: "La tragédie classique respecte la règle des trois unités.", p: 2 }, { fr: "Chez Racine, la passion mène à la mort.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En la tragedia clásica, las muertes…", o: ["se cuentan", "se muestran en escena"], a: 0, es: true,
        bien: "¡Sí! Por la bienséance.", mal: "Se cuentan: regla del decoro.",
        seg: [ { es: "Pausa. Se cuentan." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Phèdre", "Andromaque", "les trois unités", "la bienséance", "la vraisemblance", "cinq actes"], seg: [
        { es: "Obras y reglas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Leer Fedra", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee Phèdre y comenta las reglas con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Phèdre aime Hippolyte en secret… mais c'est son beau-fils ! — Oui, c'est une passion fatale. Chez Racine, les personnages sont les victimes d'une passion qui les dépasse.", "Fedra ama a Hipólito en secreto… ¡pero es su hijastro! — Sí, es una pasión fatal. En Racine, los personajes son víctimas de una pasión que los supera."],
      ["sofia", "Écoute l'aveu de Phèdre : « Je le vis, je rougis, je pâlis à sa vue. » La pièce, de 1677, compte cinq actes en alexandrins et respecte la règle des trois unités : une seule action, un seul jour, un seul lieu.", "Escucha la confesión de Fedra: «Lo vi, me sonrojé, palidecí al verlo.» La obra, de 1677, tiene cinco actos en alejandrinos y respeta la regla de las tres unidades: una sola acción, un solo día, un solo lugar."],
      ["camila", "Et on voit mourir Hippolyte sur scène ? — Non : dans la tragédie classique, la mort est racontée, jamais montrée. C'est la bienséance : rien de choquant sur scène. Et tout doit être vraisemblable.", "¿Y se ve morir a Hipólito en escena? — No: en la tragedia clásica, la muerte se cuenta, nunca se muestra. Es el decoro: nada chocante en escena. Y todo debe ser verosímil."],
      ["sofia", "Racine a aussi écrit Andromaque, en 1667, Britannicus et Bérénice. Ne les confonds pas avec Horace et Cinna, qui sont de Corneille.", "Racine escribió también Andrómaca, en 1667, Británico y Berenice. No las confundas con Horacio y Cinna, que son de Corneille."]
    ],
    fijate: "Fíjate: son beau-fils, une passion fatale, une passion qui les dépasse, « Je le vis, je rougis, je pâlis à sa vue », cinq actes, la règle des trois unités, la mort est racontée, la bienséance, vraisemblable, Andromaque (1667)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obras y reglas",
      idea: "Jean Racine lleva la tragedia clásica a su perfección: Andromaque (1667), Britannicus, Bérénice, Phèdre (1677). Sus personajes son víctimas de una pasión fatal que los destruye: Phèdre ama en secreto a su hijastro Hippolyte («Je le vis, je rougis, je pâlis à sa vue»). La tragedia clásica respeta la regla de las tres unidades: unidad de acción (una sola intriga), de tiempo (un solo día) y de lugar (un solo lugar); también la vraisemblance y la bienséance: nada chocante en escena, por eso las muertes se cuentan y no se muestran. Tiene cinco actos en alejandrinos. No hay que confundir sus obras con las de Corneille (Le Cid, Horace, Cinna, L'Illusion comique).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["les trois unités", "la regla de la tragedia clásica", "règles"],
        ["d'Hippolyte", "de quién está enamorada Phèdre", "Racine"],
        ["une passion fatale", "lo que destruye a los personajes de Racine", "Racine"],
        ["Je le vis, je rougis, je pâlis à sa vue. · pâlis", "Lo vi, me sonrojé, palidecí al verlo.", "Racine"],
        ["La tragédie classique compte cinq actes. · actes", "La tragedia clásica tiene cinco actos.", "règles"],
        ["unité d'action = una sola intriga · unité de temps = un solo día · unité de lieu = un solo lugar · bienséance = nada chocante en escena", "reglas", "resumen"],
        ["Phèdre · Andromaque · Britannicus · Bérénice", "tragedias de Racine", "Racine"],
        ["Le Cid · Horace · Cinna · L'Illusion comique", "obras de Corneille", "Corneille"],
        ["Dans la tragédie classique, la mort est souvent racontée sur scène. · racontée", "En la tragedia clásica, la muerte se cuenta.", "règles"],
        ["Phèdre aime Hippolyte en secret", "Fedra ama a Hipólito en secreto", "Racine"],
        ["son beau-fils", "su hijastro", "Racine"],
        ["Chez Racine, les personnages sont les victimes d'une passion qui les dépasse.", "En Racine, los personajes son víctimas de una pasión que los supera.", "Racine"]
      ]],
      ej: [["Phèdre est amoureuse de son beau-fils Hippolyte.", "Fedra está enamorada de su hijastro Hipólito."], ["La tragédie classique respecte la règle des trois unités.", "La tragedia clásica respeta la regla de las tres unidades."], ["Chez Racine, la passion mène à la mort.", "En Racine, la pasión lleva a la muerte."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La mort est montrée sur scène.", "Les morts sont racontées (bienséance).", "Regla del decoro."], ["Horace, tragédie de Racine", "Horace, tragédie de Corneille", "No confundir."], ["Phèdre aime son fils.", "Phèdre aime son beau-fils Hippolyte.", "Hijastro."]] }
  ],
  ejemplos: [
    { sit: "Andromaque se estrena en…", resp: "1667", pasos: ["Racine."], porque: "Obras." },
    { sit: "La unidad de tiempo exige…", resp: "un solo día", pasos: ["24 horas."], porque: "Reglas." },
    { sit: "Bérénice es de…", resp: "Racine", pasos: ["Tragedia."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Phèdre es de…", o: ["1677", "1637"], a: 0, b: "gr", porque: "Racine." },
    { q: "La bienséance prohíbe…", o: ["lo chocante en escena", "los alejandrinos"], a: 0, b: "gr", porque: "Decoro." },
    { q: "Una tragedia clásica tiene…", o: ["cinco actos", "tres actos"], a: 0, b: "gr", porque: "Reglas." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ra-oeuvre"], k: "sort", ask: "¿Racine o Corneille?", q: "Clasifica.", cats: ["Racine", "Corneille"], items: [["Phèdre", 0], ["Andromaque", 0], ["Britannicus", 0], ["Bérénice", 0], ["Le Cid", 1], ["Horace", 1], ["Cinna", 1], ["L'Illusion comique", 1]], pista: "Pasión o voluntad.", why: "Autores." },
    { fase: "guiada", c: ["b6ra-regles"], k: "choice", ask: "La regla principal de la tragedia clásica:", q: "Elige.", o: ["les trois unités", "le mélange des genres"], a: 0, pista: "Acción, tiempo, lugar.", why: "Tres unidades." },
    { fase: "guiada", c: ["b6ra-oeuvre"], k: "fill", ask: "Palidecí (verbo pâlir).", q: "Je le vis, je rougis, je ___ à sa vue.", acc: ["pâlis"], pista: "pâlir.", why: "<b>pâlis</b>." },
    { fase: "indep", c: ["b6ra-regles"], k: "fill", ask: "Actos (plural).", q: "La tragédie classique compte cinq ___ .", acc: ["actes"], why: "<b>actes</b>." },
    { fase: "indep", c: ["b6ra-regles"], k: "match", ask: "Une cada regla con su sentido.", q: "Regla → sentido", pairs: [["unité d'action", "una sola intriga"], ["unité de temps", "un solo día"], ["unité de lieu", "un solo lugar"], ["bienséance", "nada chocante en escena"]], why: "Reglas." },
    { fase: "indep", c: ["b6ra-regles"], k: "spot", ask: "Encuentra el error.", s: "Dans la tragédie classique , la mort est souvent [montrée] sur scène .", fix: "racontée", why: "<b>racontée</b>." },
    { fase: "aplica", c: ["b6ra-oeuvre"], k: "choice", ask: "Phèdre está enamorada…", q: "Elige.", o: ["d'Hippolyte", "de Rodrigue"], a: 0, why: "Hipólito." },
    { fase: "aplica", c: ["b6ra-oeuvre"], k: "choice", ask: "En Racine, los personajes son víctimas de…", q: "Elige.", o: ["une passion fatale", "leur volonté"], a: 0, why: "Pasión fatal." },
    { fase: "aplica", c: ["b6ra-oeuvre"], k: "spot", ask: "Encuentra el error.", s: "Horace et Cinna sont des tragédies de [Racine] .", fix: "Corneille", why: "<b>Corneille</b>." },
    { fase: "dominio", c: ["b6ra-oeuvre"], k: "order", ask: "Ordena la frase.", tokens: ["Phèdre", "aime Hippolyte", "en secret"], why: "<b>Phèdre aime Hippolyte en secret</b>" },
    { fase: "dominio", c: ["b6ra-regles"], k: "choice", ask: "La unidad de tiempo exige…", q: "Elige.", o: ["un seul jour", "une seule année"], a: 0, why: "Un día." },
    { fase: "dominio", c: ["b6ra-oeuvre", "b6ra-regles"], k: "listen", say: "Chez Racine, les personnages sont les victimes d'une passion qui les dépasse.", acc: ["Chez Racine, les personnages sont les victimes d'une passion qui les dépasse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chez Racine, les personnages sont les victimes d'une passion qui les dépasse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Jean Racine", "Racine", "Phèdre", "Hippolyte", "Andromaque", "Britannicus", "Bérénice", "Corneille", "Le Cid", "Horace", "Cinna", "L'Illusion comique", "Rodrigue"], previo: [] }
};

/* ── 24. Molière : corriger les mœurs en riant ── */
E["lit-moliere"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Molière : corriger les mœurs en riant",
  objetivo: {
    que: "Vas a conocer a Molière, sus grandes comedias, sus tipos de cómico y su objetivo: corregir las costumbres divirtiendo.",
    corto: "Monsieur Jourdain fait de la prose sans le savoir. · Tartuffe est un hypocrite qui trompe Orgon. · Molière voulait corriger les mœurs en divertissant.",
    podras: ["Asociar comedias y vicios: Tartuffe (hipocresía religiosa), L'Avare (avaricia: Harpagon), Le Misanthrope (rechazo de la sociedad), Les Femmes savantes (pedantería), Le Bourgeois gentilhomme (M. Jourdain), Le Malade imaginaire (su última obra, 1673).", "Distinguir los tipos de cómico: de gestes, de mots, de situation, de caractère.", "Matizar la leyenda (no murió en escena) y explicar «la langue de Molière»."],
    iconos: ["ic2/nota", "ic2/cafe", "ic2/libro"],
    previos: ["Leer el teatro (lección 9), la disertación (lección 11) y el festival de Aviñón (C1.2, lección 53)."],
    capacidad: "Ahora comentas una escena de Molière y su crítica de las costumbres."
  },
  requiere: R("b6th-structure", "b6ds-argument", "b5av-festival"), recupera: ["b6th-structure"],
  conceptos: {
    "b6mo-oeuvres": { n: "Molière (Jean-Baptiste Poquelin, 1622-1673), actor y autor, crea la gran comedia clásica; objetivo: «corriger les mœurs en divertissant»; Tartuffe: l'hypocrisie religieuse (Tartuffe engaña a Orgon; prohibida varios años); L'Avare: l'avarice (Harpagon esconde su dinero en una cassette; «Au voleur !»); Le Misanthrope: el rechazo de la sociedad; Les Femmes savantes: la pedantería; Le Bourgeois gentilhomme: M. Jourdain hace prosa sin saberlo; Le Malade imaginaire, su última obra (1673): se sintió mal en escena y murió horas después en su casa (no en escena); el francés es «la langue de Molière»; el autor más representado de la Comédie-Française", b: "gr" },
    "b6mo-comique": { n: "tipos de cómico: de mots (jeux de mots, répétitions comiques, quiproquos verbaux, patois), de gestes (coups de bâton, chutes, grimaces, poursuites), de situation, de caractère", b: "gr" }
  },
  video: {
    titulo: "Molière", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "corriger en divertissant", seg: [
        { es: "Hola. Reír para corregir." } ] },
      { v: "frase", filas: [
          { nota: "prosa", p: 1, partes: [["Monsieur Jourdain fait de la prose sans le savoir.", "-", 1]] },
          { nota: "hipócrita", p: 2, partes: [["Tartuffe est un hypocrite qui trompe Orgon.", "-", 2]] },
          { nota: "objetivo", p: 3, partes: [["Molière voulait corriger les mœurs en divertissant.", "-", 3]] } ], seg: [
        { fr: "Monsieur Jourdain fait de la prose sans le savoir.", p: 1 }, { fr: "Tartuffe est un hypocrite qui trompe Orgon.", p: 2 }, { fr: "Molière voulait corriger les mœurs en divertissant.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La langue de Molière» es…", o: ["el francés", "el latín"], a: 0, es: true,
        bien: "¡Sí! Como «la lengua de Cervantes».", mal: "Es el francés.",
        seg: [ { es: "Pausa. El francés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Tartuffe", "L'Avare", "Le Bourgeois gentilhomme", "Le Malade imaginaire", "le comique de mots", "le comique de gestes"], seg: [
        { es: "Comedias, vicios y cómicos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la Comédie-Française", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo salen de ver Le Bourgeois gentilhomme en la Comédie-Française.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai adoré Monsieur Jourdain ! — Il fait de la prose sans le savoir ! Molière est l'auteur le plus joué de la Comédie-Française : on dit même que le français est « la langue de Molière ».", "¡Me encantó el señor Jourdain! — ¡Habla en prosa sin saberlo! Molière es el autor más representado de la Comédie-Française: incluso se dice que el francés es «la lengua de Molière»."],
      ["hugo", "Il voulait corriger les mœurs en divertissant. Dans Tartuffe, il dénonce l'hypocrisie religieuse : Tartuffe est un hypocrite qui trompe Orgon. La pièce a été interdite plusieurs années.", "Quería corregir las costumbres divirtiendo. En Tartufo denuncia la hipocresía religiosa: Tartufo es un hipócrita que engaña a Orgón. La obra estuvo prohibida varios años."],
      ["camila", "Et L'Avare ? — Harpagon cache son argent dans une cassette, et quand on la lui vole, il crie « Au voleur ! ». Les coups de bâton et les chutes, c'est le comique de gestes ; les jeux de mots, le comique de mots.", "¿Y El avaro? — Harpagón esconde su dinero en un cofre, y cuando se lo roban grita «¡Al ladrón!». Los bastonazos y las caídas son el cómico de gestos; los juegos de palabras, el cómico de palabras."],
      ["hugo", "Le Malade imaginaire est sa dernière pièce. On dit qu'il est mort sur scène, mais en fait il s'est senti mal sur scène et il est mort quelques heures plus tard, chez lui, en 1673.", "El enfermo imaginario es su última obra. Se dice que murió en escena, pero en realidad se sintió mal en escena y murió unas horas después, en su casa, en 1673."]
    ],
    fijate: "Fíjate: il fait de la prose sans le savoir, l'auteur le plus joué de la Comédie-Française, la langue de Molière, corriger les mœurs en divertissant, l'hypocrisie religieuse, Harpagon et sa cassette, le comique de gestes / de mots, Le Malade imaginaire (1673)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Comedias y cómicos",
      idea: "Molière (Jean-Baptiste Poquelin, 1622-1673), actor y autor, crea la gran comedia clásica. Su objetivo: «corriger les mœurs en divertissant». Tartuffe denuncia la hipocresía religiosa (Tartuffe engaña a Orgon; la obra estuvo prohibida varios años). L'Avare: la avaricia de Harpagon y su cofre («Au voleur !»). Le Misanthrope: el rechazo de la sociedad. Les Femmes savantes: la pedantería. Le Bourgeois gentilhomme: M. Jourdain hace prosa sin saberlo. Le Malade imaginaire es su última obra (1673): se sintió mal en escena y murió horas después en su casa. Tipos de cómico: de palabras (juegos de palabras, repeticiones, quid pro quos, patois), de gestos (bastonazos, caídas, muecas, persecuciones), de situación y de carácter. El francés es «la langue de Molière»; es el autor más representado de la Comédie-Française.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Cómico"], [
        ["l'hypocrisie", "el vicio de Tartuffe", "œuvres"],
        ["l'avare", "el personaje de L'Avare", "œuvres"],
        ["le français", "«la langue de Molière»", "œuvres"],
        ["Monsieur Jourdain fait de la prose sans le savoir. · prose", "El señor Jourdain habla en prosa sin saberlo.", "œuvres"],
        ["Le Malade imaginaire est la dernière pièce de Molière. · Malade", "El enfermo imaginario es la última obra de Molière.", "œuvres"],
        ["Tartuffe = hipocresía religiosa · L'Avare = avaricia · Le Misanthrope = rechazo de la sociedad · Les Femmes savantes = pedantería", "obras y vicios", "resumen"],
        ["jeux de mots · répétitions comiques · quiproquos verbaux · patois", "cómico de palabras", "de mots"],
        ["coups de bâton · chutes · grimaces · poursuites", "cómico de gestos", "de gestes"],
        ["Dans L'Avare, Harpagon cache son argent dans une cassette. · Harpagon", "En El avaro, Harpagón esconde su dinero.", "œuvres"],
        ["Corriger les mœurs en divertissant", "Corregir las costumbres divirtiendo", "œuvres"],
        ["il s'est senti mal sur scène et il est mort quelques heures plus tard", "la verdad sobre la muerte de Molière", "vie"],
        ["Molière est l'auteur le plus joué de la Comédie-Française.", "Molière es el autor más representado de la Comédie-Française.", "œuvres"]
      ]],
      ej: [["Monsieur Jourdain fait de la prose sans le savoir.", "El señor Jourdain habla en prosa sin saberlo."], ["Tartuffe est un hypocrite qui trompe Orgon.", "Tartufo es un hipócrita que engaña a Orgón."], ["Molière voulait corriger les mœurs en divertissant.", "Molière quería corregir las costumbres divirtiendo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Molière est mort sur scène.", "Il s'est senti mal sur scène et il est mort chez lui quelques heures plus tard.", "Leyenda matizada."], ["Tartuffe cache son argent dans une cassette.", "Harpagon cache son argent dans une cassette.", "L'Avare."], ["les coups de bâton = comique de mots", "les coups de bâton = comique de gestes", "Gestos."]] }
  ],
  ejemplos: [
    { sit: "Les Femmes savantes critica…", resp: "la pedantería", pasos: ["Saber de fachada."], porque: "Obras." },
    { sit: "Las caídas y los bastonazos son…", resp: "le comique de gestes", pasos: ["Físico."], porque: "Cómicos." },
    { sit: "El nombre real de Molière:", resp: "Jean-Baptiste Poquelin", pasos: ["Seudónimo."], porque: "Vida." }
  ],
  comprueba: [
    { q: "Molière murió en…", o: ["1673", "1637"], a: 0, b: "gr", porque: "Le Malade imaginaire." },
    { q: "Los juegos de palabras son…", o: ["cómico de palabras", "cómico de gestos"], a: 0, b: "gr", porque: "Cómicos." },
    { q: "Tartufo engaña a…", o: ["Orgón", "Harpagón"], a: 0, b: "gr", porque: "Tartuffe." }
  ],
  practica: [
    { fase: "guiada", c: ["b6mo-comique"], k: "sort", ask: "¿Cómico de palabras o de gestos?", q: "Clasifica.", cats: ["de mots", "de gestes"], items: [["jeux de mots", 0], ["répétitions comiques", 0], ["quiproquos verbaux", 0], ["patois", 0], ["coups de bâton", 1], ["chutes", 1], ["grimaces", 1], ["poursuites", 1]], pista: "¿Se dice o se hace?", why: "Cómicos." },
    { fase: "guiada", c: ["b6mo-oeuvres"], k: "choice", ask: "Tartuffe denuncia…", q: "Elige.", o: ["l'hypocrisie", "l'avarice"], a: 0, pista: "Religiosa.", why: "Hipocresía." },
    { fase: "guiada", c: ["b6mo-oeuvres"], k: "fill", ask: "Lo que hace M. Jourdain sin saberlo.", q: "Monsieur Jourdain fait de la ___ sans le savoir.", acc: ["prose"], pista: "No verso.", why: "<b>prose</b>." },
    { fase: "indep", c: ["b6mo-oeuvres"], k: "fill", ask: "El … imaginario.", q: "Le ___ imaginaire est la dernière pièce de Molière.", acc: ["Malade"], why: "<b>Malade</b>." },
    { fase: "indep", c: ["b6mo-oeuvres"], k: "match", ask: "Une cada obra con su vicio.", q: "Obra → vicio", pairs: [["Tartuffe", "hipocresía religiosa"], ["L'Avare", "avaricia"], ["Le Misanthrope", "rechazo de la sociedad"], ["Les Femmes savantes", "pedantería"]], why: "Obras." },
    { fase: "indep", c: ["b6mo-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Dans L'Avare , [Tartuffe] cache son argent dans une cassette .", fix: "Harpagon", why: "<b>Harpagon</b>." },
    { fase: "aplica", c: ["b6mo-oeuvres"], k: "choice", ask: "«La langue de Molière» es…", q: "Elige.", o: ["le français", "le latin"], a: 0, why: "Francés." },
    { fase: "aplica", c: ["b6mo-comique"], k: "choice", ask: "Harpagón persigue al criado a bastonazos: es…", q: "Elige.", o: ["le comique de gestes", "le comique de mots"], a: 0, why: "Gestos." },
    { fase: "aplica", c: ["b6mo-oeuvres"], k: "spot", ask: "Encuentra la leyenda.", s: "Molière [est mort sur scène] pendant Le Malade imaginaire .", fix: "s'est senti mal sur scène", why: "<b>s'est senti mal sur scène</b> y murió horas después en su casa." },
    { fase: "dominio", c: ["b6mo-oeuvres"], k: "order", ask: "Ordena el objetivo de Molière.", tokens: ["Corriger", "les mœurs", "en divertissant"], why: "<b>Corriger les mœurs en divertissant</b>" },
    { fase: "dominio", c: ["b6mo-oeuvres"], k: "choice", ask: "En Tartuffe, el hipócrita engaña a…", q: "Elige.", o: ["Orgon", "Harpagon"], a: 0, why: "Orgón." },
    { fase: "dominio", c: ["b6mo-oeuvres", "b6mo-comique"], k: "listen", say: "Molière est l'auteur le plus joué de la Comédie-Française.", acc: ["Molière est l'auteur le plus joué de la Comédie-Française."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Molière est l'auteur le plus joué de la Comédie-Française.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Molière", "Jean-Baptiste Poquelin", "Tartuffe", "Orgon", "L'Avare", "Harpagon", "Le Misanthrope", "Les Femmes savantes", "Le Bourgeois gentilhomme", "Monsieur Jourdain", "Jourdain", "Le Malade imaginaire", "Comédie-Française", "Cervantes"], previo: [] }
};

/* ── 25. La Fontaine et les Fables ── */
E["lit-la-fontaine"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La Fontaine et les Fables",
  objetivo: {
    que: "Vas a conocer las Fábulas de La Fontaine: su forma, sus morales y su crítica de la sociedad de Luis XIV.",
    corto: "La raison du plus fort est toujours la meilleure. · Rien ne sert de courir ; il faut partir à point. · Tout flatteur vit aux dépens de celui qui l'écoute.",
    podras: ["Situar las Fables (1668-1694), inspiradas en Ésope y Phèdre: relato breve + morale (explícita o implícita, al principio o al final).", "Asociar fábulas y morales: La Cigale et la Fourmi (previsión), Le Corbeau et le Renard (adulación), Le Loup et l'Agneau (ley del más fuerte), Le Lièvre et la Tortue (constancia).", "Explicar la crítica social: el león es el rey, el zorro el cortesano; los poderosos frente a los débiles."],
    iconos: ["ic2/libro", "ic2/flor", "ic2/pergamino"],
    previos: ["El clasicismo (lección 4) y Luis XIV (C1.2, lección 19)."],
    capacidad: "Ahora comentas una fábula, su moral y su crítica."
  },
  requiere: R("b6cl-classicisme", "b5lx-absolu"), recupera: ["b6cl-classicisme"],
  conceptos: {
    "b6lf-fables": { n: "Jean de La Fontaine publica sus Fables (1668-1694), inspiradas en Ésope y Phèdre; la fable: relato breve + la morale (explícita o implícita; a veces al principio, no siempre al final); fábulas célebres y morales: La Cigale et la Fourmi (previsión: «La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue»), Le Corbeau et le Renard (adulación: «Tout flatteur vit aux dépens de celui qui l'écoute»), Le Loup et l'Agneau (ley del más fuerte: «La raison du plus fort est toujours la meilleure»), Le Lièvre et la Tortue (constancia: «Rien ne sert de courir ; il faut partir à point»); los escolares las aprenden de memoria", b: "gr" },
    "b6lf-societe": { n: "crítica social de la sociedad de Luis XIV: animales que hablan retratan los vicios humanos; le lion = le roi, le renard = el cortesano (le flatteur); poderosos: le lion, le loup, l'ours, l'aigle; débiles: l'agneau, la colombe, le rat, la tortue", b: "gr" }
  },
  video: {
    titulo: "Las Fábulas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "la morale", seg: [
        { es: "Hola. Animales que hablan de los hombres." } ] },
      { v: "frase", filas: [
          { nota: "el más fuerte", p: 1, partes: [["La raison du plus fort est toujours la meilleure.", "-", 1]] },
          { nota: "constancia", p: 2, partes: [["Rien ne sert de courir ; il faut partir à point.", "-", 2]] },
          { nota: "adulación", p: 3, partes: [["Tout flatteur vit aux dépens de celui qui l'écoute.", "-", 3]] } ], seg: [
        { fr: "La raison du plus fort est toujours la meilleure.", p: 1 }, { fr: "Rien ne sert de courir ; il faut partir à point.", p: 2 }, { fr: "Tout flatteur vit aux dépens de celui qui l'écoute.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En las Fábulas, el león representa…", o: ["al rey", "al pueblo"], a: 0, es: true,
        bien: "¡Sí! Crítica de la corte.", mal: "El león es el rey.",
        seg: [ { es: "Pausa. El rey." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la fable", "la morale", "Le Corbeau et le Renard", "Le Loup et l'Agneau", "le lion = le roi", "Ésope"], seg: [
        { es: "Forma, morales y sociedad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Recuerdos de escuela", img: "bg-cafe", yo: "camila",
    escena: "Hugo recita una fábula que aprendió de niño y Camila pregunta por su sentido.",
    pj: PJ,
    lineas: [
      ["hugo", "À l'école, on apprenait les fables par cœur : « La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue. » — Et la morale ? — Il faut être prévoyant !", "En la escuela aprendíamos las fábulas de memoria: «La cigarra, habiendo cantado todo el verano, se encontró muy desprovista cuando llegó el cierzo.» — ¿Y la moraleja? — ¡Hay que ser previsor!"],
      ["camila", "La Fontaine les a inventées ? — Il s'est inspiré d'Ésope et de Phèdre. Ses Fables paraissent entre 1668 et 1694. Chaque fable a une morale, parfois au début, parfois sous-entendue.", "¿La Fontaine las inventó? — Se inspiró en Esopo y Fedro. Sus Fábulas aparecen entre 1668 y 1694. Cada fábula tiene una moraleja, a veces al principio, a veces sobreentendida."],
      ["hugo", "Dans Le Loup et l'Agneau : « La raison du plus fort est toujours la meilleure. » Et dans Le Corbeau et le Renard : « Tout flatteur vit aux dépens de celui qui l'écoute. »", "En El lobo y el cordero: «La razón del más fuerte es siempre la mejor.» Y en El cuervo y el zorro: «Todo adulador vive a costa de quien lo escucha.»"],
      ["camila", "C'est une critique de la société ? — Oui ! Le lion, c'est le roi, Louis XIV ; le renard, c'est le courtisan flatteur. Les puissants contre les faibles.", "¿Es una crítica de la sociedad? — ¡Sí! El león es el rey, Luis XIV; el zorro es el cortesano adulador. Los poderosos contra los débiles."]
    ],
    fijate: "Fíjate: par cœur, « La cigale, ayant chanté tout l'été… », la morale (parfois au début, parfois sous-entendue), Ésope et Phèdre (1668-1694), « La raison du plus fort… », « Tout flatteur vit aux dépens… », le lion = le roi, le renard = le courtisan."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Fábulas y morales",
      idea: "Jean de La Fontaine publica sus Fables (1668-1694), inspiradas en Esopo y Fedro. La fable es un relato breve con una morale, explícita o implícita, a veces al principio y no siempre al final. Animales que hablan retratan los vicios humanos y la sociedad de Luis XIV: el león es el rey, el zorro el cortesano adulador; poderosos (león, lobo, oso, águila) frente a débiles (cordero, paloma, rata, tortuga). Morales célebres: «La raison du plus fort est toujours la meilleure» (Le Loup et l'Agneau), «Rien ne sert de courir ; il faut partir à point» (Le Lièvre et la Tortue), «Tout flatteur vit aux dépens de celui qui l'écoute» (Le Corbeau et le Renard); La Cigale et la Fourmi enseña la previsión. Los escolares franceses las aprenden de memoria.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Personaje"], [
        ["Le Lièvre et la Tortue", "la fábula de «Rien ne sert de courir»", "fables"],
        ["le roi", "lo que representa el león", "Poderoso"],
        ["le renard", "el adulador de Le Corbeau et le Renard", "Poderoso"],
        ["La raison du plus fort est toujours la meilleure. · fort", "La razón del más fuerte es siempre la mejor.", "fables"],
        ["Tout flatteur vit aux dépens de celui qui l'écoute. · dépens", "Todo adulador vive a costa de quien lo escucha.", "fables"],
        ["La Cigale et la Fourmi = previsión · Le Corbeau et le Renard = adulación · Le Loup et l'Agneau = ley del más fuerte · Le Lièvre et la Tortue = constancia", "fábulas y morales", "resumen"],
        ["le lion · le loup · l'ours · l'aigle", "los poderosos", "Poderoso"],
        ["l'agneau · la colombe · le rat · la tortue", "los débiles", "Débil"],
        ["Rien ne sert de courir ; il faut partir à point. · point", "De nada sirve correr; hay que salir a tiempo.", "fables"],
        ["Ésope · Phèdre", "las fuentes de La Fontaine", "fables"],
        ["parfois au début, parfois sous-entendue", "dónde puede estar la moraleja", "fables"],
        ["La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue.", "La cigarra, habiendo cantado todo el verano…", "fables"]
      ]],
      ej: [["La raison du plus fort est toujours la meilleure.", "La razón del más fuerte es siempre la mejor."], ["Rien ne sert de courir ; il faut partir à point.", "De nada sirve correr; hay que salir a tiempo."], ["Tout flatteur vit aux dépens de celui qui l'écoute.", "Todo adulador vive a costa de quien lo escucha."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La morale est toujours à la fin.", "Elle est parfois au début ou sous-entendue.", "Variación."], ["il faut partir à temps", "il faut partir à point", "La cita exacta."], ["La Fontaine a tout inventé.", "Il s'inspire d'Ésope et de Phèdre.", "Fuentes."]] }
  ],
  ejemplos: [
    { sit: "La Cigale et la Fourmi enseña…", resp: "la previsión", pasos: ["Prevenir el invierno."], porque: "Morales." },
    { sit: "En las Fábulas, el águila es…", resp: "Poderoso", pasos: ["Rapaz."], porque: "Personajes." },
    { sit: "Las Fables aparecen entre…", resp: "1668 y 1694", pasos: ["Gran Siglo."], porque: "Fechas." }
  ],
  comprueba: [
    { q: "El cordero es…", o: ["un débil", "un poderoso"], a: 0, b: "gr", porque: "Le Loup et l'Agneau." },
    { q: "La fuente griega de La Fontaine:", o: ["Esopo", "Homero"], a: 0, b: "gr", porque: "Fuentes." },
    { q: "Le Lièvre et la Tortue enseña…", o: ["la constancia", "la adulación"], a: 0, b: "gr", porque: "Morales." }
  ],
  practica: [
    { fase: "guiada", c: ["b6lf-societe"], k: "sort", ask: "¿Poderoso o débil?", q: "Clasifica.", cats: ["Poderoso", "Débil"], items: [["le lion", 0], ["le loup", 0], ["l'ours", 0], ["l'aigle", 0], ["l'agneau", 1], ["la colombe", 1], ["le rat", 1], ["la tortue", 1]], pista: "¿Depredador o presa?", why: "Personajes." },
    { fase: "guiada", c: ["b6lf-fables"], k: "choice", ask: "«Rien ne sert de courir ; il faut partir à point» es la moraleja de…", q: "Elige.", o: ["Le Lièvre et la Tortue", "La Cigale et la Fourmi"], a: 0, pista: "Una carrera.", why: "La liebre y la tortuga." },
    { fase: "guiada", c: ["b6lf-fables"], k: "fill", ask: "La razón del más…", q: "La raison du plus ___ est toujours la meilleure.", acc: ["fort"], pista: "fuerte.", why: "<b>fort</b>." },
    { fase: "indep", c: ["b6lf-fables"], k: "fill", ask: "A costa de (aux …).", q: "Tout flatteur vit aux ___ de celui qui l'écoute.", acc: ["dépens"], why: "<b>dépens</b>." },
    { fase: "indep", c: ["b6lf-fables"], k: "match", ask: "Une cada fábula con su moraleja.", q: "Fábula → moraleja", pairs: [["La Cigale et la Fourmi", "previsión"], ["Le Corbeau et le Renard", "adulación"], ["Le Loup et l'Agneau", "ley del más fuerte"], ["Le Lièvre et la Tortue", "constancia"]], why: "Morales." },
    { fase: "indep", c: ["b6lf-fables"], k: "spot", ask: "Encuentra el error en la cita.", s: "Rien ne sert de courir ; il faut partir à [temps] .", fix: "point", why: "«partir à <b>point</b>»." },
    { fase: "aplica", c: ["b6lf-societe"], k: "choice", ask: "En las Fábulas, el león representa…", q: "Elige.", o: ["le roi", "le peuple"], a: 0, why: "El rey." },
    { fase: "aplica", c: ["b6lf-societe"], k: "choice", ask: "En Le Corbeau et le Renard, el adulador es…", q: "Elige.", o: ["le renard", "le corbeau"], a: 0, why: "El zorro." },
    { fase: "aplica", c: ["b6lf-fables"], k: "spot", ask: "Encuentra el error.", s: "Dans une fable , la morale est [toujours à la fin] .", fix: "parfois au début ou sous-entendue", why: "Está <b>parfois au début ou sous-entendue</b>." },
    { fase: "dominio", c: ["b6lf-fables"], k: "order", ask: "Ordena la moraleja.", tokens: ["La raison du plus fort", "est toujours", "la meilleure"], why: "<b>La raison du plus fort est toujours la meilleure</b>" },
    { fase: "dominio", c: ["b6lf-fables"], k: "choice", ask: "Las fuentes de La Fontaine:", q: "Elige.", o: ["Ésope et Phèdre", "Homère et Virgile"], a: 0, why: "Esopo y Fedro." },
    { fase: "dominio", c: ["b6lf-fables", "b6lf-societe"], k: "listen", say: "La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue.", acc: ["La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue."], num: false, dict: true, ask: "Escucha los versos y escríbelos.", why: "Era <b>La cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Jean de La Fontaine", "La Fontaine", "Fables", "Ésope", "Phèdre", "Louis XIV", "Homère", "Virgile", "La Cigale et la Fourmi", "Le Corbeau et le Renard", "Le Loup et l'Agneau", "Le Lièvre et la Tortue"], previo: [] }
};

/* ── 26. Madame de La Fayette : La Princesse de Clèves ── */
E["lit-princesse-de-cleves"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Madame de La Fayette : La Princesse de Clèves",
  objetivo: {
    que: "Vas a conocer La Princesse de Clèves, considerada la primera novela psicológica moderna.",
    corto: "La princesse avoue à son mari qu'elle aime un autre homme. · C'est le premier grand roman psychologique. · Elle renonce à l'amour par lucidité.",
    podras: ["Situar la novela (1678, publicada anónimamente) en la corte de Henri II: la princesa, casada sin amor, se enamora del duque de Nemours.", "Explicar la scène de l'aveu (confiesa su pasión a su marido) y el final: renuncia a Nemours por lucidez y por el reposo del alma.", "Definir el roman d'analyse: introspección, sentimientos, dilemas interiores (no batallas épicas ni maravilloso)."],
    iconos: ["ic2/libro", "ic2/flor", "ic2/lapiz"],
    previos: ["Racine y la pasión fatal (lección 23) y el clasicismo (lección 4)."],
    capacidad: "Ahora explicas por qué La Princesse de Clèves inaugura la novela psicológica."
  },
  requiere: R("b6ra-oeuvre", "b6cl-classicisme"), recupera: ["b6ra-oeuvre"],
  conceptos: {
    "b6pc-intrigue": { n: "La Princesse de Clèves (1678), de Madame de La Fayette, publicada anónimamente; la acción transcurre en la cour d'Henri II; la princesa, casada sin amor con el príncipe de Clèves, ama al duc de Nemours; la scène de l'aveu: confiesa a su marido que ama a otro hombre; al final, tras la muerte del marido, rechaza (no se casa con) a Nemours: renuncia al amor por lucidez y por le repos (la tranquilidad del alma)", b: "gr" },
    "b6pc-analyse": { n: "le roman d'analyse (novela psicológica): l'introspection, les sentiments, la lucidité, les dilemmes intérieurs (no les batailles épiques, les géants, le merveilleux, l'humour grossier); vocabulario: l'aveu (la confesión), la cour (la corte), la passion, le repos; se considera la primera novela psicológica moderna", b: "gr" }
  },
  video: {
    titulo: "La princesa de Clèves", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "l'aveu", seg: [
        { es: "Hola. La primera gran novela psicológica francesa." } ] },
      { v: "frase", filas: [
          { nota: "confesión", p: 1, partes: [["La princesse avoue à son mari qu'elle aime un autre homme.", "-", 1]] },
          { nota: "psicología", p: 2, partes: [["C'est le premier grand roman psychologique.", "-", 2]] },
          { nota: "renuncia", p: 3, partes: [["Elle renonce à l'amour par lucidité.", "-", 3]] } ], seg: [
        { fr: "La princesse avoue à son mari qu'elle aime un autre homme.", p: 1 }, { fr: "C'est le premier grand roman psychologique.", p: 2 }, { fr: "Elle renonce à l'amour par lucidité.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Al final, la princesa…", o: ["renuncia a Nemours", "se casa con Nemours"], a: 0, es: true,
        bien: "¡Sí! Final célebre.", mal: "Renuncia a él.",
        seg: [ { es: "Pausa. Renuncia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["1678", "la cour d'Henri II", "le duc de Nemours", "l'aveu", "le roman d'analyse", "le repos"], seg: [
        { es: "Intriga, escena y género.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un debate famoso", img: "bg-universidad", yo: "camila",
    escena: "En clase, Madame Sofia recuerda que la novela causó un gran debate.",
    pj: PJ,
    lineas: [
      ["sofia", "La Princesse de Clèves, publiée anonymement en 1678, est souvent considérée comme le premier roman psychologique. L'action se passe à la cour d'Henri II.", "La princesa de Clèves, publicada anónimamente en 1678, se considera a menudo la primera novela psicológica. La acción transcurre en la corte de Enrique II."],
      ["camila", "Elle est mariée sans amour et elle tombe amoureuse du duc de Nemours ? — Oui. Et dans une scène célèbre, elle avoue son amour à son mari : c'est la scène de l'aveu, qui a scandalisé les lecteurs de l'époque.", "¿Está casada sin amor y se enamora del duque de Nemours? — Sí. Y en una escena célebre confiesa su amor a su marido: es la escena de la confesión, que escandalizó a los lectores de la época."],
      ["sofia", "Il n'y a ni batailles ni merveilleux : c'est un roman d'analyse. Tout est introspection, sentiments, dilemmes intérieurs.", "No hay batallas ni maravilloso: es una novela de análisis. Todo es introspección, sentimientos, dilemas interiores."],
      ["camila", "Et à la fin, elle épouse Nemours ? — Non ! Après la mort de son mari, elle refuse : elle renonce à l'amour par lucidité, pour préserver son repos.", "¿Y al final se casa con Nemours? — ¡No! Tras la muerte de su marido, lo rechaza: renuncia al amor por lucidez, para preservar su reposo."]
    ],
    fijate: "Fíjate: publiée anonymement (1678), le premier roman psychologique, la cour d'Henri II, le duc de Nemours, elle avoue son amour à son mari, la scène de l'aveu, un roman d'analyse, elle renonce à l'amour par lucidité, son repos."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Intriga y género",
      idea: "La Princesse de Clèves (1678), de Madame de La Fayette, publicada anónimamente, se considera la primera novela psicológica moderna. En la corte de Enrique II, la princesa, casada sin amor, se enamora del duque de Nemours. En la célebre scène de l'aveu, confiesa su pasión a su marido. Tras la muerte de este, renuncia sin embargo a Nemours, por lucidez y por le repos (la tranquilidad del alma). Es un roman d'analyse: introspección, sentimientos, lucidez y dilemas interiores, sin batallas épicas, gigantes, maravilloso ni humor grosero.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Novela de análisis?"], [
        ["du duc de Nemours", "de quién se enamora la princesa", "intrigue"],
        ["la confession au mari", "la escena de l'aveu", "intrigue"],
        ["elle renonce à l'amour", "el final", "intrigue"],
        ["La Princesse de Clèves est un roman d'analyse. · analyse", "La princesa de Clèves es una novela de análisis.", "Sí"],
        ["L'action se passe à la cour d'Henri II. · II", "La acción transcurre en la corte de Enrique II.", "intrigue"],
        ["l'aveu = la confesión · la cour = la corte · la passion = la pasión · le repos = la tranquilidad del alma", "vocabulario", "resumen"],
        ["l'introspection · les sentiments · la lucidité · les dilemmes intérieurs", "rasgos de la novela de análisis", "Sí"],
        ["les batailles épiques · les géants · le merveilleux · l'humour grossier", "rasgos ajenos", "No"],
        ["À la fin du roman, la princesse refuse le duc de Nemours. · refuse", "Al final, la princesa rechaza al duque.", "intrigue"],
        ["Elle avoue son amour à son mari", "Confiesa su amor a su marido", "intrigue"],
        ["publiée anonymement en 1678", "su publicación", "intrigue"],
        ["La Princesse de Clèves est souvent considérée comme le premier roman psychologique.", "Se considera a menudo la primera novela psicológica.", "Sí"]
      ]],
      ej: [["La princesse avoue à son mari qu'elle aime un autre homme.", "La princesa confiesa a su marido que ama a otro hombre."], ["C'est le premier grand roman psychologique.", "Es la primera gran novela psicológica."], ["Elle renonce à l'amour par lucidité.", "Renuncia al amor por lucidez."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["À la fin, elle épouse Nemours.", "À la fin, elle renonce à Nemours.", "Final célebre."], ["un roman d'aventures épiques", "un roman d'analyse psychologique", "Introspección."], ["publié sous le nom de l'autrice", "publié anonymement", "1678."]] }
  ],
  ejemplos: [
    { sit: "La novela se publica en…", resp: "1678", pasos: ["Anónima."], porque: "Fechas." },
    { sit: "«Le repos» es…", resp: "la tranquilidad del alma", pasos: ["Razón de la renuncia."], porque: "Vocabulario." },
    { sit: "¿Hay batallas épicas en La Princesse de Clèves?", resp: "No", pasos: ["Novela de análisis."], porque: "Género." }
  ],
  comprueba: [
    { q: "La autora es…", o: ["Madame de La Fayette", "Mademoiselle de Scudéry"], a: 0, b: "gr", porque: "1678." },
    { q: "La princesa confiesa su amor a…", o: ["su marido", "Nemours"], a: 0, b: "gr", porque: "L'aveu." },
    { q: "La introspección es típica de…", o: ["la novela de análisis", "el cantar de gesta"], a: 0, b: "gr", porque: "Género." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pc-analyse"], k: "sort", ask: "¿Rasgo de La Princesse de Clèves o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["l'introspection", 0], ["les sentiments", 0], ["la lucidité", 0], ["les dilemmes intérieurs", 0], ["les batailles épiques", 1], ["les géants", 1], ["le merveilleux", 1], ["l'humour grossier", 1]], pista: "Novela del alma.", why: "Novela de análisis." },
    { fase: "guiada", c: ["b6pc-intrigue"], k: "choice", ask: "La princesa se enamora…", q: "Elige.", o: ["du duc de Nemours", "du roi Henri II"], a: 0, pista: "Un duque.", why: "Nemours." },
    { fase: "guiada", c: ["b6pc-analyse"], k: "fill", ask: "Novela de… (análisis).", q: "La Princesse de Clèves est un roman d'___ .", acc: ["analyse"], pista: "análisis.", why: "<b>analyse</b>." },
    { fase: "indep", c: ["b6pc-intrigue"], k: "fill", ask: "Henri … (número romano).", q: "L'action se passe à la cour d'Henri ___ .", acc: ["II"], why: "Henri <b>II</b>." },
    { fase: "indep", c: ["b6pc-analyse"], k: "match", ask: "Une cada palabra con su sentido.", q: "Palabra → sentido", pairs: [["l'aveu", "la confesión"], ["la cour", "la corte"], ["la passion", "la pasión"], ["le repos", "la tranquilidad del alma"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6pc-intrigue"], k: "spot", ask: "Encuentra el error.", s: "À la fin du roman , la princesse [épouse] le duc de Nemours .", fix: "refuse", why: "Lo <b>refuse</b>." },
    { fase: "aplica", c: ["b6pc-intrigue"], k: "choice", ask: "La escena célebre de l'aveu es…", q: "Elige.", o: ["la confession au mari", "un duel"], a: 0, why: "Confesión." },
    { fase: "aplica", c: ["b6pc-intrigue"], k: "choice", ask: "¿Por qué renuncia la princesa?", q: "Elige.", o: ["par lucidité et pour son repos", "par obéissance au roi"], a: 0, why: "Lucidez." },
    { fase: "aplica", c: ["b6pc-intrigue"], k: "spot", ask: "Encuentra el error.", s: "La Princesse de Clèves a été publiée [sous le nom de l'autrice] en 1678 .", fix: "anonymement", why: "Fue publicada <b>anonymement</b>." },
    { fase: "dominio", c: ["b6pc-intrigue"], k: "order", ask: "Ordena la frase.", tokens: ["Elle avoue", "son amour", "à son mari"], why: "<b>Elle avoue son amour à son mari</b>" },
    { fase: "dominio", c: ["b6pc-analyse"], k: "choice", ask: "La Princesse de Clèves se considera…", q: "Elige.", o: ["le premier roman psychologique", "le premier roman policier"], a: 0, why: "Psicológica." },
    { fase: "dominio", c: ["b6pc-analyse", "b6pc-intrigue"], k: "listen", say: "La Princesse de Clèves est souvent considérée comme le premier roman psychologique.", acc: ["La Princesse de Clèves est souvent considérée comme le premier roman psychologique."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La Princesse de Clèves est souvent considérée comme le premier roman psychologique.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Madame de La Fayette", "La Fayette", "La Princesse de Clèves", "Clèves", "Nemours", "Henri II", "Scudéry"], previo: [] }
};

/* ── 27. Les moralistes : La Rochefoucauld et La Bruyère ── */
E["lit-moralistes"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les moralistes : La Rochefoucauld et La Bruyère",
  objetivo: {
    que: "Vas a conocer a los moralistas del siglo XVII, observadores sin ilusiones del ser humano, y la forma de la máxima.",
    corto: "Nos vertus ne sont, le plus souvent, que des vices déguisés. · La Bruyère décrit les courtisans avec ironie. · Une maxime doit être brève et frappante.",
    podras: ["Explicar las Maximes de La Rochefoucauld (1665): el amour-propre detrás de las virtudes.", "Explicar Les Caractères de La Bruyère (1688): retratos satíricos de tipos de la corte (Giton, Phédon).", "Definir la maxime (breve, general, a menudo paradójica o en antítesis) y el sentido literario de moraliste: observador de las costumbres, no predicador."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/cafe"],
    previos: ["Montaigne, Descartes y Pascal (C1.2, lección 43), el clasicismo (lección 4) y las figuras de estilo (lección 2)."],
    capacidad: "Ahora comentas una máxima y un retrato de La Bruyère."
  },
  requiere: R("b5pc-auteurs", "b6cl-classicisme", "b6fs-opposition"), recupera: ["b5pc-auteurs"],
  conceptos: {
    "b6ml-auteurs": { n: "los moralistas del siglo XVII observan al ser humano sin ilusiones y con ironía; moraliste = observador de las costumbres (no alguien que da lecciones de moral); La Rochefoucauld: Maximes (1665), el amour-propre como motor oculto de las virtudes («Nos vertus ne sont, le plus souvent, que des vices déguisés»); La Bruyère: Les Caractères (1688), retratos satíricos de tipos sociales de la corte (Giton, Phédon), describe a los cortesanos con ironía; también Pascal (Pensées) y Montaigne (Essais)", b: "gr" },
    "b6ml-maxime": { n: "la maxime: frase breve, general y a menudo paradójica, que debe ser brève et frappante; rasgos: la brièveté, la généralité, le paradoxe, l'antithèse (no un long récit, des dialogues, des personnages nombreux, une intrigue)", b: "gr" }
  },
  video: {
    titulo: "Los moralistas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "la maxime", seg: [
        { es: "Hola. Observar al ser humano sin ilusiones." } ] },
      { v: "frase", filas: [
          { nota: "virtudes", p: 1, partes: [["Nos vertus ne sont que des vices déguisés.", "-", 1]] },
          { nota: "ironía", p: 2, partes: [["La Bruyère décrit les courtisans avec ironie.", "-", 2]] },
          { nota: "forma", p: 3, partes: [["Une maxime doit être brève et frappante.", "-", 3]] } ], seg: [
        { fr: "Nos vertus ne sont, le plus souvent, que des vices déguisés.", p: 1 }, { fr: "La Bruyère décrit les courtisans avec ironie.", p: 2 }, { fr: "Une maxime doit être brève et frappante.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un «moraliste» del siglo XVII es…", o: ["un observador de las costumbres", "un predicador de la moral"], a: 0, es: true,
        bien: "¡Sí! Sentido literario.", mal: "Observa las costumbres; no sermonea.",
        seg: [ { es: "Pausa. Observador." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La Rochefoucauld", "les Maximes", "l'amour-propre", "La Bruyère", "Les Caractères", "le paradoxe"], seg: [
        { es: "Autores y forma.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una máxima en el café", img: "bg-cafe", yo: "camila",
    escena: "Hugo cita una máxima y Camila no está de acuerdo.",
    pj: PJ,
    lineas: [
      ["hugo", "Tu sais ce que dit La Rochefoucauld ? « Nos vertus ne sont, le plus souvent, que des vices déguisés. » — Quel pessimiste ! Il pense que tout est égoïsme ?", "¿Sabes lo que dice La Rochefoucauld? «Nuestras virtudes no son, las más de las veces, sino vicios disfrazados.» — ¡Qué pesimista! ¿Cree que todo es egoísmo?"],
      ["hugo", "Pour lui, l'amour-propre se cache derrière nos vertus. Ses Maximes datent de 1665. Une maxime doit être brève et frappante, souvent paradoxale.", "Para él, el amor propio se esconde detrás de nuestras virtudes. Sus Máximas son de 1665. Una máxima debe ser breve e impactante, a menudo paradójica."],
      ["camila", "C'est un moraliste, donc il nous fait la morale ? — Non : en littérature, un moraliste observe les mœurs. Les moralistes observent les hommes sans illusions et avec ironie.", "Es un moralista, ¿entonces nos sermonea? — No: en literatura, un moralista observa las costumbres. Los moralistas observan a los hombres sin ilusiones y con ironía."],
      ["hugo", "La Bruyère, lui, publie Les Caractères en 1688 : des portraits satiriques, comme Giton le riche et Phédon le pauvre. La Bruyère décrit les courtisans avec ironie.", "La Bruyère, por su parte, publica Los caracteres en 1688: retratos satíricos, como Giton el rico y Fedón el pobre. La Bruyère describe a los cortesanos con ironía."]
    ],
    fijate: "Fíjate: « Nos vertus ne sont… que des vices déguisés », l'amour-propre, les Maximes (1665), brève et frappante, paradoxale, un moraliste observe les mœurs, sans illusions et avec ironie, Les Caractères (1688), Giton et Phédon."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Máximas y caracteres",
      idea: "Los moralistas del siglo XVII observan al ser humano sin ilusiones y con ironía: en sentido literario, un moraliste es un observador de las costumbres, no alguien que sermonea. La Rochefoucauld, en sus Maximes (1665), denuncia el amor propio escondido tras las virtudes: «Nos vertus ne sont, le plus souvent, que des vices déguisés». La Bruyère, en Les Caractères (1688), pinta retratos satíricos de tipos sociales de la corte (Giton, Phédon). La maxime es una frase breve, general, a menudo paradójica o construida en antítesis: debe ser breve e impactante; no tiene relato largo, diálogos, muchos personajes ni intriga. En la misma tradición: Pascal (Pensées) y Montaigne (Essais).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Rasgo de la máxima?"], [
        ["une phrase brève et générale", "una máxima", "Sí"],
        ["La Bruyère", "1688, Les Caractères", "auteurs"],
        ["l'amour-propre", "la tesis de La Rochefoucauld", "auteurs"],
        ["Nos vertus ne sont, le plus souvent, que des vices déguisés. · déguisés", "Nuestras virtudes no son sino vicios disfrazados.", "auteurs"],
        ["La Rochefoucauld a écrit les Maximes. · Maximes", "La Rochefoucauld escribió las Máximas.", "auteurs"],
        ["La Rochefoucauld = Maximes · La Bruyère = Les Caractères · Pascal = Pensées · Montaigne = Essais", "moralistas y obras", "resumen"],
        ["la brièveté · la généralité · le paradoxe · l'antithèse", "rasgos de la máxima", "Sí"],
        ["un long récit · des dialogues · des personnages nombreux · une intrigue", "rasgos ajenos", "No"],
        ["Les Caractères de La Bruyère peignent les courtisans. · Bruyère", "Los caracteres pintan a los cortesanos.", "auteurs"],
        ["Nos vertus ne sont que des vices déguisés", "Nuestras virtudes no son sino vicios disfrazados", "auteurs"],
        ["un observateur des mœurs", "el sentido literario de «moraliste»", "auteurs"],
        ["Giton · Phédon", "retratos de La Bruyère", "auteurs"],
        ["Les moralistes observent les hommes sans illusions et avec ironie.", "Los moralistas observan a los hombres sin ilusiones y con ironía.", "auteurs"]
      ]],
      ej: [["Nos vertus ne sont, le plus souvent, que des vices déguisés.", "Nuestras virtudes no son, las más de las veces, sino vicios disfrazados."], ["La Bruyère décrit les courtisans avec ironie.", "La Bruyère describe a los cortesanos con ironía."], ["Une maxime doit être brève et frappante.", "Una máxima debe ser breve e impactante."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["moraliste = qui fait la morale", "moraliste = observateur des mœurs", "Sentido literario."], ["Les Caractères de La Rochefoucauld", "Les Caractères de La Bruyère", "No confundir."], ["une maxime longue et narrative", "une maxime brève et frappante", "Forma."]] }
  ],
  ejemplos: [
    { sit: "Una máxima es…", resp: "une phrase brève et générale", pasos: ["A menudo paradójica."], porque: "Forma." },
    { sit: "1688:", resp: "La Bruyère", pasos: ["Les Caractères."], porque: "Obras." },
    { sit: "La tesis de La Rochefoucauld:", resp: "l'amour-propre", pasos: ["Motor oculto."], porque: "Ideas." }
  ],
  comprueba: [
    { q: "Las Maximes son de…", o: ["1665", "1688"], a: 0, b: "gr", porque: "La Rochefoucauld." },
    { q: "Giton y Phédon son…", o: ["retratos de La Bruyère", "personajes de Molière"], a: 0, b: "gr", porque: "Les Caractères." },
    { q: "Una intriga es…", o: ["ajena a la máxima", "típica de la máxima"], a: 0, b: "gr", porque: "Forma." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ml-maxime"], k: "sort", ask: "¿Rasgo de la máxima o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la brièveté", 0], ["la généralité", 0], ["le paradoxe", 0], ["l'antithèse", 0], ["un long récit", 1], ["des dialogues", 1], ["des personnages nombreux", 1], ["une intrigue", 1]], pista: "Breve e impactante.", why: "Forma." },
    { fase: "guiada", c: ["b6ml-maxime"], k: "choice", ask: "Una máxima es…", q: "Elige.", o: ["une phrase brève et générale", "un long récit"], a: 0, pista: "Corta.", why: "Breve." },
    { fase: "guiada", c: ["b6ml-auteurs"], k: "fill", ask: "Vicios… (participio).", q: "Nos vertus ne sont, le plus souvent, que des vices ___ .", acc: ["déguisés"], pista: "disfrazados.", why: "<b>déguisés</b>." },
    { fase: "indep", c: ["b6ml-auteurs"], k: "fill", ask: "La obra de La Rochefoucauld.", q: "La Rochefoucauld a écrit les ___ .", acc: ["Maximes"], why: "<b>Maximes</b>." },
    { fase: "indep", c: ["b6ml-auteurs"], k: "match", ask: "Une cada moralista con su obra.", q: "Autor → obra", pairs: [["La Rochefoucauld", "Maximes"], ["La Bruyère", "Les Caractères"], ["Pascal", "Pensées"], ["Montaigne", "Essais"]], why: "Obras." },
    { fase: "indep", c: ["b6ml-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Les Caractères de La [Rochefoucauld] peignent les courtisans .", fix: "Bruyère", why: "De La <b>Bruyère</b>." },
    { fase: "aplica", c: ["b6ml-auteurs"], k: "choice", ask: "1688:", q: "Elige.", o: ["La Bruyère", "La Rochefoucauld"], a: 0, why: "Les Caractères." },
    { fase: "aplica", c: ["b6ml-auteurs"], k: "choice", ask: "En sentido literario, un «moraliste» es…", q: "Elige.", o: ["un observateur des mœurs", "un prédicateur"], a: 0, why: "Observador." },
    { fase: "aplica", c: ["b6ml-auteurs"], k: "choice", ask: "La tesis de La Rochefoucauld:", q: "Elige.", o: ["l'amour-propre", "le carpe diem"], a: 0, why: "Amor propio." },
    { fase: "dominio", c: ["b6ml-auteurs"], k: "order", ask: "Ordena la máxima.", tokens: ["Nos vertus", "ne sont que", "des vices déguisés"], why: "<b>Nos vertus ne sont que des vices déguisés</b>" },
    { fase: "dominio", c: ["b6ml-maxime"], k: "spot", ask: "Encuentra el error.", s: "Une maxime doit être [longue et détaillée] .", fix: "brève et frappante", why: "<b>brève et frappante</b>." },
    { fase: "dominio", c: ["b6ml-auteurs", "b6ml-maxime"], k: "listen", say: "Les moralistes observent les hommes sans illusions et avec ironie.", acc: ["Les moralistes observent les hommes sans illusions et avec ironie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les moralistes observent les hommes sans illusions et avec ironie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "La Rochefoucauld", "La Bruyère", "Maximes", "Les Caractères", "Giton", "Phédon", "Pascal", "Pensées", "Montaigne", "Essais"], previo: [] }
};

/* ── 28. Perrault, les contes et la querelle des Anciens et des Modernes ── */
E["lit-perrault"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Perrault, les contes et la querelle des Anciens et des Modernes",
  objetivo: {
    que: "Vas a conocer los cuentos de Perrault y la querella de los Antiguos y los Modernos.",
    corto: "Perrault a écrit Le Petit Chaperon rouge. · Dans la version de Perrault, le loup mange le Petit Chaperon rouge. · Perrault défendait les Modernes.",
    podras: ["Situar las Histoires ou contes du temps passé (Contes de ma mère l'Oye, 1697), con morales en verso: Cendrillon, Le Petit Poucet, Barbe bleue, Le Chat botté, La Belle au bois dormant, Le Petit Chaperon rouge.", "Distinguir a Perrault (francés, 1697) de los hermanos Grimm (posteriores); en Perrault, el lobo se come a Caperucita.", "Explicar la querelle des Anciens et des Modernes: Boileau (imitar a griegos y latinos) frente a Perrault y Fontenelle (el progreso de las artes)."],
    iconos: ["ic2/libro", "ic2/flor", "ic2/pergamino"],
    previos: ["La Fontaine y las Fábulas (lección 25) y el clasicismo (lección 4)."],
    capacidad: "Ahora comentas un cuento de Perrault y su moral."
  },
  requiere: R("b6lf-fables", "b6cl-classicisme"), recupera: ["b6lf-fables"],
  conceptos: {
    "b6pe-contes": { n: "Charles Perrault publica en 1697 las Histoires ou contes du temps passé (Contes de ma mère l'Oye), con morales en verso al final: Le Petit Chaperon rouge (en su versión, el lobo se la come: final trágico), Cendrillon (Cenicienta), La Belle au bois dormant (la Bella Durmiente), Le Petit Poucet (Pulgarcito), Barbe bleue (Barba Azul), Le Chat botté (el gato con botas que ayuda a su amo a enriquecerse); fórmula: «Il était une fois…»; Perrault es francés y anterior a los hermanos Grimm", b: "gr" },
    "b6pe-querelle": { n: "la querelle des Anciens et des Modernes (fines del XVII): ¿imitar a los autores antiguos o superarlos?; Anciens: Boileau, imiter les Grecs et les Latins, Racine y La Fontaine (próximos a los Antiguos); Modernes: Perrault (líder; no defendía a los Antiguos), Fontenelle, le progrès des arts, dépasser l'Antiquité", b: "gr" }
  },
  video: {
    titulo: "Perrault", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "Il était une fois…", seg: [
        { es: "Hola. Los cuentos que todos conocemos, en su versión francesa." } ] },
      { v: "frase", filas: [
          { nota: "Caperucita", p: 1, partes: [["Perrault a écrit Le Petit Chaperon rouge.", "-", 1]] },
          { nota: "final", p: 2, partes: [["Le loup mange le Petit Chaperon rouge.", "-", 2]] },
          { nota: "querella", p: 3, partes: [["Perrault défendait les Modernes.", "-", 3]] } ], seg: [
        { fr: "Perrault a écrit Le Petit Chaperon rouge.", p: 1 }, { fr: "Dans la version de Perrault, le loup mange le Petit Chaperon rouge.", p: 2 }, { fr: "Perrault défendait les Modernes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Perrault es…", o: ["francés y anterior a los Grimm", "uno de los hermanos Grimm"], a: 0, es: true,
        bien: "¡Sí! 1697.", mal: "Es francés y anterior (1697).",
        seg: [ { es: "Pausa. Francés." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["les Contes de ma mère l'Oye", "Cendrillon", "Barbe bleue", "la morale en vers", "les Anciens", "les Modernes"], seg: [
        { es: "Cuentos y querella.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cuentos para la sobrina", img: "bg-cafe", yo: "camila",
    escena: "Hugo le cuenta a Camila cómo termina Caperucita en la versión de Perrault.",
    pj: PJ,
    lineas: [
      ["hugo", "« Il était une fois une petite fille de village, la plus jolie qu'on eût su voir… » Tu sais que chez Perrault, le loup mange le Petit Chaperon rouge ? Il n'y a pas de chasseur !", "«Érase una vez una niña de aldea, la más bonita que se hubiera visto…» ¿Sabes que en Perrault el lobo se come a Caperucita? ¡No hay cazador!"],
      ["camila", "Mais ce n'est pas des frères Grimm ? — Perrault est français et bien antérieur : ses Contes de ma mère l'Oye datent de 1697. Il y a aussi Cendrillon, Le Petit Poucet, Barbe bleue, Le Chat botté… et chaque conte finit par une morale en vers.", "¿Pero no es de los hermanos Grimm? — Perrault es francés y muy anterior: sus Cuentos de mamá Oca son de 1697. También están Cenicienta, Pulgarcito, Barba Azul, El gato con botas… y cada cuento termina con una moraleja en verso."],
      ["hugo", "Et Perrault était aussi un homme de combat : dans la querelle des Anciens et des Modernes, il défendait les Modernes contre Boileau.", "Y Perrault era también un hombre de combate: en la querella de los Antiguos y los Modernos, defendía a los Modernos contra Boileau."],
      ["camila", "C'est quoi, cette querelle ? — Faut-il imiter les auteurs grecs et latins, comme le pensait Boileau, ou les dépasser grâce au progrès des arts, comme Perrault et Fontenelle ?", "¿Qué es esa querella? — ¿Hay que imitar a los autores griegos y latinos, como pensaba Boileau, o superarlos gracias al progreso de las artes, como Perrault y Fontenelle?"]
    ],
    fijate: "Fíjate: « Il était une fois… », chez Perrault le loup mange le Petit Chaperon rouge, antérieur aux Grimm, les Contes de ma mère l'Oye (1697), une morale en vers, la querelle des Anciens et des Modernes, Boileau, le progrès des arts."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuentos y querella",
      idea: "Charles Perrault publica en 1697 las Histoires ou contes du temps passé (Contes de ma mère l'Oye): Le Petit Chaperon rouge, Cendrillon, La Belle au bois dormant, Le Chat botté, Barbe bleue, Le Petit Poucet… cada uno con una moral en verso al final. Perrault es francés y muy anterior a los hermanos Grimm; en su versión, el lobo se come a Caperucita. Perrault es también el líder de los Modernos en la querella de los Antiguos y los Modernos, frente a Boileau: ¿hay que imitar a los autores antiguos (Boileau, cerca de él Racine y La Fontaine) o superarlos gracias al progreso de las artes (Perrault, Fontenelle)?",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Bando"], [
        ["1697", "el año de los Contes", "contes"],
        ["les Modernes", "el bando de Perrault", "Modernes"],
        ["le loup la mange", "el final de Caperucita en Perrault", "contes"],
        ["Il était une fois… · fois", "Érase una vez…", "contes"],
        ["Le Chat botté aide son maître à devenir riche. · botté", "El gato con botas ayuda a su amo.", "contes"],
        ["Cendrillon = Cenicienta · La Belle au bois dormant = La Bella Durmiente · Le Petit Poucet = Pulgarcito · Barbe bleue = Barba Azul", "cuentos", "resumen"],
        ["Boileau · imiter les Grecs et les Latins · Racine (proche des Anciens) · La Fontaine (proche des Anciens)", "los Antiguos", "Anciens"],
        ["Perrault · le progrès des arts · Fontenelle · dépasser l'Antiquité", "los Modernos", "Modernes"],
        ["Dans la querelle, Perrault défendait les Modernes contre Boileau. · Modernes", "Perrault defendía a los Modernos.", "Modernes"],
        ["Il était une fois une petite fille de village", "Érase una vez una niña de aldea", "contes"],
        ["une morale en vers", "lo que cierra cada cuento", "contes"],
        ["Il était une fois une petite fille de village, la plus jolie qu'on eût su voir.", "Érase una vez una niña de aldea, la más bonita…", "contes"]
      ]],
      ej: [["Perrault a écrit Le Petit Chaperon rouge.", "Perrault escribió Caperucita Roja."], ["Dans la version de Perrault, le loup mange le Petit Chaperon rouge.", "En la versión de Perrault, el lobo se come a Caperucita."], ["Perrault défendait les Modernes.", "Perrault defendía a los Modernos."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Perrault = les frères Grimm", "Perrault est français et antérieur (1697)", "Distinguir versiones."], ["Perrault défendait les Anciens.", "Perrault défendait les Modernes.", "Contra Boileau."], ["Chez Perrault, un chasseur sauve le Petit Chaperon rouge.", "Chez Perrault, le loup la mange.", "Final trágico."]] }
  ],
  ejemplos: [
    { sit: "Barbe bleue es…", resp: "Barba Azul", pasos: ["Cuento de Perrault."], porque: "Cuentos." },
    { sit: "Fontenelle estaba del lado de…", resp: "Modernes", pasos: ["Progreso."], porque: "Querella." },
    { sit: "Cada cuento termina con…", resp: "une morale en vers", pasos: ["Moraleja."], porque: "Forma." }
  ],
  comprueba: [
    { q: "Boileau defendía…", o: ["a los Antiguos", "a los Modernos"], a: 0, b: "gr", porque: "Querella." },
    { q: "Le Petit Poucet es…", o: ["Pulgarcito", "Cenicienta"], a: 0, b: "gr", porque: "Cuentos." },
    { q: "Los Modernos querían…", o: ["superar la Antigüedad", "imitar a los latinos"], a: 0, b: "gr", porque: "Progreso." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pe-querelle"], k: "sort", ask: "¿Antiguos o Modernos?", q: "Clasifica.", cats: ["Anciens", "Modernes"], items: [["Boileau", 0], ["imiter les Grecs et les Latins", 0], ["Racine (proche des Anciens)", 0], ["La Fontaine (proche des Anciens)", 0], ["Perrault", 1], ["le progrès des arts", 1], ["Fontenelle", 1], ["dépasser l'Antiquité", 1]], pista: "¿Imitar o superar?", why: "Querella." },
    { fase: "guiada", c: ["b6pe-contes"], k: "choice", ask: "Los Contes de Perrault aparecen en…", q: "Elige.", o: ["1697", "1812"], a: 0, pista: "Siglo XVII.", why: "1697." },
    { fase: "guiada", c: ["b6pe-contes"], k: "fill", ask: "Érase una…", q: "Il était une ___ …", acc: ["fois"], pista: "vez.", why: "<b>fois</b>." },
    { fase: "indep", c: ["b6pe-contes"], k: "fill", ask: "El gato con botas.", q: "Le Chat ___ aide son maître à devenir riche.", acc: ["botté"], why: "<b>botté</b>." },
    { fase: "indep", c: ["b6pe-contes"], k: "match", ask: "Une cada cuento con su nombre en español.", q: "Cuento → español", pairs: [["Cendrillon", "Cenicienta"], ["La Belle au bois dormant", "La Bella Durmiente"], ["Le Petit Poucet", "Pulgarcito"], ["Barbe bleue", "Barba Azul"]], why: "Cuentos." },
    { fase: "indep", c: ["b6pe-querelle"], k: "spot", ask: "Encuentra el error.", s: "Dans la querelle , Perrault défendait les [Anciens] contre Boileau .", fix: "Modernes", why: "<b>Modernes</b>." },
    { fase: "aplica", c: ["b6pe-contes"], k: "choice", ask: "En la versión de Perrault, al final de Caperucita…", q: "Elige.", o: ["le loup la mange", "un chasseur la sauve"], a: 0, why: "Final trágico." },
    { fase: "aplica", c: ["b6pe-querelle"], k: "choice", ask: "El bando de Perrault:", q: "Elige.", o: ["les Modernes", "les Anciens"], a: 0, why: "Modernos." },
    { fase: "aplica", c: ["b6pe-contes"], k: "spot", ask: "Encuentra el error.", s: "La version du Petit Chaperon rouge publiée en 1697 est l'œuvre [des frères Grimm] .", fix: "de Charles Perrault", why: "Es <b>de Charles Perrault</b>; los Grimm son posteriores." },
    { fase: "dominio", c: ["b6pe-contes"], k: "order", ask: "Ordena el comienzo.", tokens: ["Il était une fois", "une petite fille", "de village"], why: "<b>Il était une fois une petite fille de village</b>" },
    { fase: "dominio", c: ["b6pe-contes"], k: "choice", ask: "Cada cuento de Perrault termina con…", q: "Elige.", o: ["une morale en vers", "une chanson"], a: 0, why: "Moraleja en verso." },
    { fase: "dominio", c: ["b6pe-contes", "b6pe-querelle"], k: "listen", say: "Il était une fois une petite fille de village, la plus jolie qu'on eût su voir.", acc: ["Il était une fois une petite fille de village, la plus jolie qu'on eût su voir."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Il était une fois une petite fille de village, la plus jolie qu'on eût su voir.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Charles Perrault", "Perrault", "Grimm", "Boileau", "Fontenelle", "Racine", "La Fontaine", "Le Petit Chaperon rouge", "Cendrillon", "La Belle au bois dormant", "Le Petit Poucet", "Barbe bleue", "Le Chat botté", "Contes de ma mère l'Oye", "Anciens", "Modernes", "Grecs", "Latins"], previo: [] }
};

/* ── 29. Baroque et préciosité ── */
E["lit-baroque-preciosite"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Baroque et préciosité",
  objetivo: {
    que: "Vas a conocer el barroco y la preciosidad, las estéticas anteriores al clasicismo, y la sátira que hizo Molière de las Preciosas.",
    corto: "L'Illusion comique joue sur le théâtre dans le théâtre. · Les précieuses inventaient des périphrases compliquées. · Molière se moque des précieuses.",
    podras: ["Explicar el barroco (fines del XVI – principios del XVII): movimiento, ilusión, inconstancia, metamorfosis, mezcla de géneros, teatro dentro del teatro (L'Illusion comique de Corneille), frente al clasicismo (tres unidades, claridad, verosimilitud, decoro).", "Explicar la preciosidad: salones (Madame de Rambouillet), refinamiento del lenguaje y de los sentimientos, perífrasis; la Carte de Tendre de Mademoiselle de Scudéry.", "Citar la sátira de Molière, Les Précieuses ridicules (1659), y algunas perífrasis preciosas."],
    iconos: ["ic2/flor", "ic2/nota", "ic2/lapiz"],
    previos: ["Corneille (lección 22), Molière (lección 24) y el clasicismo (lección 4)."],
    capacidad: "Ahora distingues barroco, preciosidad y clasicismo en un texto del XVII."
  },
  requiere: R("b6co-cid", "b6mo-oeuvres", "b6cl-classicisme"), recupera: ["b6mo-oeuvres"],
  conceptos: {
    "b6bp-baroque": { n: "le baroque (fines del XVI – principios del XVII): le mouvement, l'illusion, l'inconstance, la métamorphose, l'éphémère, le mélange des genres, le théâtre dans le théâtre (L'Illusion comique de Corneille); frente al classicisme: les trois unités, la clarté, la vraisemblance, la bienséance", b: "gr" },
    "b6bp-preciosite": { n: "la préciosité: en los salones (Madame de Rambouillet), las précieuses refinan el lenguaje y los sentimientos y reemplazan las palabras simples por perífrasis complicadas: les commodités de la conversation (los sillones), le conseiller des grâces (el espejo), les chers souffrants (los pies), le supplément du soleil (la vela); la Carte de Tendre: mapa alegórico del amor (Mademoiselle de Scudéry); Molière se burla de sus excesos en Les Précieuses ridicules (1659); précieux = también refinado hasta el exceso (no solo «bonito»)", b: "gr" }
  },
  video: {
    titulo: "Barroco y preciosidad", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "l'illusion", seg: [
        { es: "Hola. Antes del orden clásico, el movimiento y el refinamiento." } ] },
      { v: "frase", filas: [
          { nota: "barroco", p: 1, partes: [["L'Illusion comique joue sur le théâtre dans le théâtre.", "-", 1]] },
          { nota: "perífrasis", p: 2, partes: [["Les précieuses inventaient des périphrases compliquées.", "-", 2]] },
          { nota: "sátira", p: 3, partes: [["Molière se moque des précieuses.", "-", 3]] } ], seg: [
        { fr: "L'Illusion comique joue sur le théâtre dans le théâtre.", p: 1 }, { fr: "Les précieuses inventaient des périphrases compliquées.", p: 2 }, { fr: "Molière se moque des précieuses.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Les commodités de la conversation» son…", o: ["los sillones", "los espejos"], a: 0, es: true,
        bien: "¡Sí! Perífrasis preciosa.", mal: "Son los sillones.",
        seg: [ { es: "Pausa. Los sillones." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le baroque", "L'Illusion comique", "la préciosité", "la Carte de Tendre", "les périphrases", "Les Précieuses ridicules"], seg: [
        { es: "Barroco, preciosidad y sátira.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un juego de perífrasis", img: "bg-cafe", yo: "camila",
    escena: "Hugo le propone a Camila un juego: adivinar perífrasis preciosas.",
    pj: PJ,
    lineas: [
      ["hugo", "Devine : « Apportez-nous les commodités de la conversation ! » — Euh… des boissons ? — Non, des fauteuils ! Les précieuses remplaçaient les mots simples par des périphrases compliquées.", "Adivina: «¡Tráigannos las comodidades de la conversación!» — Eh… ¿bebidas? — ¡No, sillones! Las preciosas reemplazaban las palabras simples por perífrasis complicadas."],
      ["camila", "Et « le conseiller des grâces » ? — Le miroir ! C'était dans les salons, comme celui de Madame de Rambouillet. Mademoiselle de Scudéry a même dessiné la Carte de Tendre, une carte allégorique de l'amour.", "¿Y «el consejero de las gracias»? — ¡El espejo! Era en los salones, como el de Madame de Rambouillet. Mademoiselle de Scudéry incluso dibujó el Mapa de la Ternura, un mapa alegórico del amor."],
      ["hugo", "Molière s'en moque dans Les Précieuses ridicules, en 1659. Avant le classicisme, il y a aussi le baroque : il aime le mouvement, l'illusion, la métamorphose.", "Molière se burla de ello en Las preciosas ridículas, en 1659. Antes del clasicismo está también el barroco: ama el movimiento, la ilusión, la metamorfosis."],
      ["camila", "Comme L'Illusion comique de Corneille ? — Exactement : elle joue sur le théâtre dans le théâtre. Le classicisme, lui, préférera la clarté, la vraisemblance et les trois unités.", "¿Como La ilusión cómica de Corneille? — Exacto: juega con el teatro dentro del teatro. El clasicismo, en cambio, preferirá la claridad, la verosimilitud y las tres unidades."]
    ],
    fijate: "Fíjate: les commodités de la conversation (les fauteuils), des périphrases compliquées, le conseiller des grâces (le miroir), les salons, la Carte de Tendre, Les Précieuses ridicules (1659), le baroque (le mouvement, l'illusion), le théâtre dans le théâtre, la clarté."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos estéticas del XVII",
      idea: "Antes del clasicismo, el barroco (fines del XVI – principios del XVII) ama el movimiento, la ilusión, la inconstancia, la metamorfosis, lo efímero y la mezcla de géneros; L'Illusion comique de Corneille juega con el teatro dentro del teatro. El clasicismo preferirá las tres unidades, la claridad, la verosimilitud y el decoro. En los salones (Madame de Rambouillet), las Preciosas refinan el lenguaje y los sentimientos y reemplazan las palabras simples por perífrasis: les commodités de la conversation (los sillones), le conseiller des grâces (el espejo), les chers souffrants (los pies), le supplément du soleil (la vela). Mademoiselle de Scudéry dibuja la Carte de Tendre, mapa alegórico del amor. Molière se burla de sus excesos en Les Précieuses ridicules (1659). Ojo: précieux significa también refinado hasta el exceso.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Estética"], [
        ["le mouvement et l'illusion", "lo que ama el barroco", "Baroque"],
        ["une carte allégorique de l'amour", "la Carte de Tendre de Scudéry", "préciosité"],
        ["Molière", "el autor que satiriza a las Preciosas", "préciosité"],
        ["Les Précieuses ridicules date de 1659. · ridicules", "Las preciosas ridículas es de 1659.", "préciosité"],
        ["L'Illusion comique est une pièce de Corneille. · comique", "La ilusión cómica es una obra de Corneille.", "Baroque"],
        ["les commodités de la conversation = los sillones · le conseiller des grâces = el espejo · les chers souffrants = los pies · le supplément du soleil = la vela", "perífrasis preciosas", "resumen"],
        ["l'illusion · l'inconstance · la métamorphose · le mélange des genres", "rasgos barrocos", "Baroque"],
        ["les trois unités · la clarté · la vraisemblance · la bienséance", "rasgos clásicos", "Classicisme"],
        ["Dans Les Précieuses ridicules, Molière se moque des excès du langage. · Molière", "Molière se burla de los excesos del lenguaje.", "préciosité"],
        ["Le baroque aime le mouvement", "El barroco ama el movimiento", "Baroque"],
        ["le salon de Madame de Rambouillet", "un salón precioso", "préciosité"],
        ["Les précieuses remplaçaient les mots simples par des périphrases compliquées.", "Las preciosas reemplazaban las palabras simples por perífrasis.", "préciosité"]
      ]],
      ej: [["L'Illusion comique joue sur le théâtre dans le théâtre.", "La ilusión cómica juega con el teatro dentro del teatro."], ["Les précieuses inventaient des périphrases compliquées.", "Las preciosas inventaban perífrasis complicadas."], ["Molière se moque des précieuses.", "Molière se burla de las preciosas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["précieux = seulement « joli »", "précieux = aussi raffiné jusqu'à l'excès (XVIIe)", "Sentido histórico."], ["Racine se moque des précieuses.", "Molière se moque des précieuses (1659).", "Sátira."], ["le baroque aime les trois unités", "le baroque aime le mouvement et l'illusion", "Las tres unidades son clásicas."]] }
  ],
  ejemplos: [
    { sit: "«Le conseiller des grâces» es…", resp: "el espejo", pasos: ["Perífrasis."], porque: "Preciosidad." },
    { sit: "La metamorfosis es un rasgo…", resp: "Baroque", pasos: ["Cambio."], porque: "Estética." },
    { sit: "La claridad es un rasgo…", resp: "Classicisme", pasos: ["Orden."], porque: "Estética." }
  ],
  comprueba: [
    { q: "Les Précieuses ridicules es de…", o: ["1659", "1697"], a: 0, b: "gr", porque: "Molière." },
    { q: "«Le supplément du soleil» es…", o: ["la vela", "el sol"], a: 0, b: "gr", porque: "Perífrasis." },
    { q: "El teatro dentro del teatro es…", o: ["barroco", "clásico"], a: 0, b: "gr", porque: "L'Illusion comique." }
  ],
  practica: [
    { fase: "guiada", c: ["b6bp-baroque"], k: "sort", ask: "¿Barroco o clasicismo?", q: "Clasifica.", cats: ["Baroque", "Classicisme"], items: [["l'illusion", 0], ["l'inconstance", 0], ["la métamorphose", 0], ["le mélange des genres", 0], ["les trois unités", 1], ["la clarté", 1], ["la vraisemblance", 1], ["la bienséance", 1]], pista: "¿Movimiento u orden?", why: "Estéticas." },
    { fase: "guiada", c: ["b6bp-baroque"], k: "choice", ask: "El barroco ama…", q: "Elige.", o: ["le mouvement et l'illusion", "les règles et la clarté"], a: 0, pista: "Movimiento.", why: "Barroco." },
    { fase: "guiada", c: ["b6bp-preciosite"], k: "fill", ask: "Las preciosas…", q: "Les Précieuses ___ date de 1659.", acc: ["ridicules"], pista: "ridículas.", why: "<b>ridicules</b>." },
    { fase: "indep", c: ["b6bp-baroque"], k: "fill", ask: "La ilusión…", q: "L'Illusion ___ est une pièce de Corneille.", acc: ["comique"], why: "<b>comique</b>." },
    { fase: "indep", c: ["b6bp-preciosite"], k: "match", ask: "Une cada perífrasis con su sentido.", q: "Perífrasis → sentido", pairs: [["les commodités de la conversation", "los sillones"], ["le conseiller des grâces", "el espejo"], ["les chers souffrants", "los pies"], ["le supplément du soleil", "la vela"]], why: "Perífrasis." },
    { fase: "indep", c: ["b6bp-preciosite"], k: "spot", ask: "Encuentra el error.", s: "Dans Les Précieuses ridicules , [Racine] se moque des excès du langage .", fix: "Molière", why: "<b>Molière</b>." },
    { fase: "aplica", c: ["b6bp-preciosite"], k: "choice", ask: "La Carte de Tendre de Scudéry es…", q: "Elige.", o: ["une carte allégorique de l'amour", "une carte de France"], a: 0, why: "Mapa del amor." },
    { fase: "aplica", c: ["b6bp-preciosite"], k: "choice", ask: "La sátira de las Preciosas es de…", q: "Elige.", o: ["Molière", "Corneille"], a: 0, why: "Molière." },
    { fase: "aplica", c: ["b6bp-baroque"], k: "spot", ask: "Encuentra el error.", s: "Le baroque aime [les trois unités et la clarté] .", fix: "le mouvement et l'illusion", why: "Ama <b>le mouvement et l'illusion</b>." },
    { fase: "dominio", c: ["b6bp-baroque"], k: "order", ask: "Ordena la frase.", tokens: ["Le baroque", "aime", "le mouvement"], why: "<b>Le baroque aime le mouvement</b>" },
    { fase: "dominio", c: ["b6bp-preciosite"], k: "choice", ask: "En el siglo XVII, «précieux» puede significar…", q: "Elige.", o: ["raffiné jusqu'à l'excès", "bon marché"], a: 0, why: "Refinado." },
    { fase: "dominio", c: ["b6bp-preciosite", "b6bp-baroque"], k: "listen", say: "Les précieuses remplaçaient les mots simples par des périphrases compliquées.", acc: ["Les précieuses remplaçaient les mots simples par des périphrases compliquées."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les précieuses remplaçaient les mots simples par des périphrases compliquées.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Corneille", "L'Illusion comique", "Molière", "Les Précieuses ridicules", "Madame de Rambouillet", "Rambouillet", "Mademoiselle de Scudéry", "Scudéry", "Carte de Tendre", "Racine"], previo: [] }
};

/* ── 30. Voltaire, Candide et le conte philosophique ── */
E["lit-candide"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Voltaire, Candide et le conte philosophique",
  objetivo: {
    que: "Vas a analizar Candide y el cuento filosófico: la ironía de Voltaire contra el optimismo, el fanatismo y la guerra.",
    corto: "Pangloss répète que tout est pour le mieux. · Voltaire dénonce la guerre avec ironie. · À la fin, Candide conclut qu'il faut cultiver son jardin.",
    podras: ["Definir el conte philosophique (relato breve + tesis filosófica) y citar los de Voltaire: Candide, Zadig, Micromégas, L'Ingénu.", "Explicar la ironía (decir lo contrario para criticar) y los blancos: el optimismo de Pangloss («tout est pour le mieux dans le meilleur des mondes possibles»), la guerra, el terremoto de Lisboa, la Inquisición, la esclavitud (el «nègre de Surinam»).", "Interpretar «Il faut cultiver notre jardin»: trabajar y actuar concretamente (sentido figurado)."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/flor"],
    previos: ["El clasicismo y las Luces (lección 4) y los filósofos de la Ilustración (C1.2, lección 44)."],
    capacidad: "Ahora analizas la ironía de un pasaje de Candide."
  },
  requiere: R("b6cl-lumieres", "b5pl-auteurs"), recupera: ["b6cl-lumieres"],
  conceptos: {
    "b6ca-conte": { n: "le conte philosophique: relato breve + tesis filosófica; de Voltaire: Candide ou l'Optimisme (1759), Zadig, Micromégas, L'Ingénu (no Les Confessions, Le Cid, Phèdre ni Germinal); el ingenuo Candide, educado por Pangloss (caricatura del optimismo de Leibniz: «Tout est pour le mieux dans le meilleur des mondes possibles»), atraviesa guerras, terremotos e injusticias; conclusión: «Il faut cultiver notre jardin» (no «notre maison»): trabajar y actuar concretamente, no hacer jardinería", b: "gr" },
    "b6ca-ironie": { n: "l'ironie: decir lo contrario para criticar; blancos y episodios: la guerre (la violencia absurda), Lisbonne (el terremoto: el optimismo ante la catástrofe), l'Inquisition (el fanatismo), le nègre de Surinam (la esclavitud), l'Eldorado (la utopía); Voltaire se burla del optimismo con una ironía mordante", b: "gr" }
  },
  video: {
    titulo: "Cándido", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le meilleur des mondes", seg: [
        { es: "Hola. Un cuento para burlarse del optimismo." } ] },
      { v: "frase", filas: [
          { nota: "Pangloss", p: 1, partes: [["Pangloss répète que tout est pour le mieux.", "-", 1]] },
          { nota: "ironía", p: 2, partes: [["Voltaire dénonce la guerre avec ironie.", "-", 2]] },
          { nota: "conclusión", p: 3, partes: [["Candide conclut qu'il faut cultiver son jardin.", "-", 3]] } ], seg: [
        { fr: "Pangloss répète que tout est pour le mieux.", p: 1 }, { fr: "Voltaire dénonce la guerre avec ironie.", p: 2 }, { fr: "À la fin, Candide conclut qu'il faut cultiver son jardin.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Il faut cultiver notre jardin» significa…", o: ["trabajar y actuar concretamente", "hacer jardinería"], a: 0, es: true,
        bien: "¡Sí! Sentido figurado.", mal: "Es figurado: actuar concretamente.",
        seg: [ { es: "Pausa. Actuar." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le conte philosophique", "Pangloss", "l'optimisme", "l'ironie", "Lisbonne", "cultiver notre jardin"], seg: [
        { es: "Género, ironía y conclusión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Leer Candide", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee Candide y se ríe en la biblioteca; Madame Sofia le explica la ironía.",
    pj: PJ,
    lineas: [
      ["camila", "Candide perd tout, la guerre éclate, Lisbonne est détruite par un tremblement de terre… et Pangloss répète que tout est pour le mieux ! — C'est l'ironie : Voltaire dit le contraire de ce qu'il pense pour critiquer.", "Cándido lo pierde todo, estalla la guerra, Lisboa es destruida por un terremoto… ¡y Pangloss repite que todo va de la mejor manera! — Es la ironía: Voltaire dice lo contrario de lo que piensa para criticar."],
      ["sofia", "Pangloss est la caricature de l'optimisme de Leibniz : « Tout est pour le mieux dans le meilleur des mondes possibles. » Dans Candide, en 1759, Voltaire se moque de l'optimisme avec une ironie mordante.", "Pangloss es la caricatura del optimismo de Leibniz: «Todo va de la mejor manera en el mejor de los mundos posibles.» En Cándido, en 1759, Voltaire se burla del optimismo con una ironía mordaz."],
      ["camila", "Et la rencontre avec le nègre de Surinam ? — C'est une dénonciation de l'esclavage. L'Inquisition, c'est le fanatisme. C'est un conte philosophique : un récit bref au service d'une thèse.", "¿Y el encuentro con el negro de Surinam? — Es una denuncia de la esclavitud. La Inquisición es el fanatismo. Es un cuento filosófico: un relato breve al servicio de una tesis."],
      ["sofia", "À la fin du conte, Candide conclut qu'il faut cultiver notre jardin. Ce n'est pas du jardinage : il faut travailler et agir concrètement. Lis aussi Zadig, Micromégas et L'Ingénu.", "Al final del cuento, Cándido concluye que hay que cultivar nuestro jardín. No es jardinería: hay que trabajar y actuar concretamente. Lee también Zadig, Micromegas y El ingenuo."]
    ],
    fijate: "Fíjate: tout est pour le mieux, l'ironie (dire le contraire pour critiquer), l'optimisme de Leibniz, « le meilleur des mondes possibles », une ironie mordante, le nègre de Surinam (l'esclavage), l'Inquisition (le fanatisme), un conte philosophique, cultiver notre jardin."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuento e ironía",
      idea: "Candide ou l'Optimisme (1759) es un conte philosophique: un relato breve al servicio de una tesis. El ingenuo Candide, educado por Pangloss en la idea de que «tout est pour le mieux dans le meilleur des mondes possibles» (caricatura del optimismo de Leibniz), atraviesa guerras, terremotos e injusticias. Voltaire usa la ironía —decir lo contrario para criticar— contra el optimismo, el fanatismo y la guerra. Episodios: la guerra (violencia absurda), el terremoto de Lisboa (el optimismo ante la catástrofe), la Inquisición (el fanatismo), el «nègre de Surinam» (la esclavitud), El Dorado (la utopía). Conclusión: «Il faut cultiver notre jardin», en sentido figurado: trabajar y actuar concretamente. Otros cuentos: Zadig, Micromégas, L'Ingénu.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Cuento de Voltaire?"], [
        ["l'optimisme", "la tesis criticada en Candide", "ironie"],
        ["Pangloss", "el preceptor optimista", "conte"],
        ["l'ironie", "el recurso principal de Voltaire", "ironie"],
        ["Il faut cultiver notre jardin. · jardin", "Hay que cultivar nuestro jardín.", "conte"],
        ["Tout est pour le mieux dans le meilleur des mondes possibles. · mondes", "Todo va de la mejor manera en el mejor de los mundos posibles.", "conte"],
        ["la guerre = la violencia absurda · Lisbonne = el optimismo ante la catástrofe · l'Inquisition = el fanatismo · le nègre de Surinam = la esclavitud", "episodios", "resumen"],
        ["Candide · Zadig · Micromégas · L'Ingénu", "cuentos de Voltaire", "Sí"],
        ["Les Confessions · Le Cid · Phèdre · Germinal", "otras obras", "No"],
        ["À la fin du conte, Candide conclut qu'il faut cultiver notre jardin.", "Al final, Cándido concluye que hay que cultivar nuestro jardín.", "conte"],
        ["travailler et agir concrètement", "el sentido de «cultiver notre jardin»", "conte"],
        ["dire le contraire pour critiquer", "la ironía", "ironie"],
        ["Dans Candide, Voltaire se moque de l'optimisme avec une ironie mordante.", "En Cándido, Voltaire se burla del optimismo con ironía mordaz.", "ironie"]
      ]],
      ej: [["Pangloss répète que tout est pour le mieux.", "Pangloss repite que todo va de la mejor manera."], ["Voltaire dénonce la guerre avec ironie.", "Voltaire denuncia la guerra con ironía."], ["À la fin, Candide conclut qu'il faut cultiver son jardin.", "Al final, Cándido concluye que hay que cultivar su jardín."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Il faut cultiver notre jardin » = faire du jardinage", "= travailler et agir concrètement", "Sentido figurado."], ["il faut cultiver notre maison", "il faut cultiver notre jardin", "La cita exacta."], ["Voltaire défend l'optimisme de Pangloss.", "Voltaire se moque de l'optimisme de Pangloss.", "Ironía."]] }
  ],
  ejemplos: [
    { sit: "El episodio de Lisboa critica…", resp: "el optimismo ante la catástrofe", pasos: ["Terremoto."], porque: "Episodios." },
    { sit: "Micromégas es…", resp: "un conte philosophique de Voltaire", pasos: ["Cuento."], porque: "Obras." },
    { sit: "Un relato breve al servicio de una tesis:", resp: "un conte philosophique", pasos: ["Género."], porque: "Género." }
  ],
  comprueba: [
    { q: "Candide se publica en…", o: ["1759", "1678"], a: 0, b: "gr", porque: "Siglo XVIII." },
    { q: "La Inquisición representa…", o: ["el fanatismo", "la utopía"], a: 0, b: "gr", porque: "Episodios." },
    { q: "Pangloss caricaturiza a…", o: ["Leibniz", "Pascal"], a: 0, b: "gr", porque: "Optimismo." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ca-conte"], k: "sort", ask: "¿Cuento de Voltaire o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Candide", 0], ["Zadig", 0], ["Micromégas", 0], ["L'Ingénu", 0], ["Les Confessions", 1], ["Le Cid", 1], ["Phèdre", 1], ["Germinal", 1]], pista: "Cuentos filosóficos.", why: "Obras." },
    { fase: "guiada", c: ["b6ca-conte"], k: "choice", ask: "El preceptor optimista:", q: "Elige.", o: ["Pangloss", "Candide"], a: 0, pista: "Leibniz.", why: "Pangloss." },
    { fase: "guiada", c: ["b6ca-conte"], k: "fill", ask: "Hay que cultivar nuestro…", q: "Il faut cultiver notre ___ .", acc: ["jardin"], pista: "jardín.", why: "<b>jardin</b>." },
    { fase: "indep", c: ["b6ca-conte"], k: "fill", ask: "El mejor de los…", q: "Tout est pour le mieux dans le meilleur des ___ possibles.", acc: ["mondes"], why: "<b>mondes</b>." },
    { fase: "indep", c: ["b6ca-ironie"], k: "match", ask: "Une cada episodio con lo que critica.", q: "Episodio → crítica", pairs: [["la guerre", "la violencia absurda"], ["Lisbonne", "el optimismo ante la catástrofe"], ["l'Inquisition", "el fanatismo"], ["le nègre de Surinam", "la esclavitud"]], why: "Episodios." },
    { fase: "indep", c: ["b6ca-conte"], k: "spot", ask: "Encuentra el error en la cita.", s: "À la fin du conte , Candide conclut qu'il faut cultiver notre [maison] .", fix: "jardin", why: "<b>jardin</b>." },
    { fase: "aplica", c: ["b6ca-ironie"], k: "choice", ask: "El recurso principal de Voltaire en Candide:", q: "Elige.", o: ["l'ironie", "le lyrisme"], a: 0, why: "Ironía." },
    { fase: "aplica", c: ["b6ca-conte"], k: "choice", ask: "«Il faut cultiver notre jardin» significa…", q: "Elige.", o: ["travailler et agir concrètement", "faire du jardinage"], a: 0, why: "Figurado." },
    { fase: "aplica", c: ["b6ca-ironie"], k: "choice", ask: "La tesis criticada en Candide:", q: "Elige.", o: ["l'optimisme", "le pessimisme"], a: 0, why: "Optimismo." },
    { fase: "dominio", c: ["b6ca-conte"], k: "order", ask: "Ordena la conclusión.", tokens: ["Il faut", "cultiver", "notre jardin"], why: "<b>Il faut cultiver notre jardin</b>" },
    { fase: "dominio", c: ["b6ca-ironie"], k: "spot", ask: "Encuentra el error.", s: "Dans Candide , Voltaire [défend] l'optimisme de Pangloss .", fix: "se moque de", why: "<b>se moque de</b>." },
    { fase: "dominio", c: ["b6ca-ironie", "b6ca-conte"], k: "listen", say: "Dans Candide, Voltaire se moque de l'optimisme avec une ironie mordante.", acc: ["Dans Candide, Voltaire se moque de l'optimisme avec une ironie mordante."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans Candide, Voltaire se moque de l'optimisme avec une ironie mordante.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Voltaire", "Candide", "Pangloss", "Leibniz", "Lisbonne", "Surinam", "Inquisition", "Eldorado", "Zadig", "Micromégas", "L'Ingénu", "Les Confessions", "Le Cid", "Phèdre", "Germinal", "Pascal"], previo: [] }
};

/* ── 31. Rousseau : la sensibilité et le moi ── */
E["lit-rousseau"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Rousseau : la sensibilité et le moi",
  objetivo: {
    que: "Vas a conocer a Rousseau, el filósofo de la sensibilidad y del yo que abre el camino al romanticismo.",
    corto: "Rousseau pense que l'homme est naturellement bon. · Les Confessions racontent sa vie avec sincérité. · La nature occupe une grande place dans son œuvre.",
    podras: ["Asociar sus obras: La Nouvelle Héloïse (1761, novela epistolar), Émile (1762, tratado de educación natural y progresiva), Les Confessions (autobiografía), Les Rêveries du promeneur solitaire, Du contrat social.", "Explicar su tesis: el hombre es naturalmente bueno y la sociedad lo corrompe; la naturaleza como refugio.", "Distinguir a Rousseau (naturaleza, sensibilidad, autobiografía, ensoñación) de Voltaire (ironía, tolerancia, espíritu crítico); nació en Ginebra (1712)."],
    iconos: ["ic2/flor", "ic2/libro", "ic2/lapiz"],
    previos: ["La autobiografía (lección 16), Candide (lección 30) y los filósofos de la Ilustración (C1.2, lección 44)."],
    capacidad: "Ahora explicas por qué Rousseau anuncia el romanticismo."
  },
  requiere: R("b6au-genres", "b6ca-conte", "b5pl-auteurs"), recupera: ["b6au-genres"],
  conceptos: {
    "b6rs-oeuvres": { n: "Jean-Jacques Rousseau, nacido en Genève (1712; no francés de nacimiento); obras: La Nouvelle Héloïse (1761, roman épistolaire de gran éxito: amor imposible, cartas, naturaleza), Émile (1762, tratado de educación natural y progresiva), Les Confessions (autobiografía de sinceridad radical: «Je forme une entreprise qui n'eut jamais d'exemple»; quiere mostrarse tal como es), Les Rêveries du promeneur solitaire (la naturaleza como refugio), Du contrat social (filosofía política)", b: "gr" },
    "b6rs-sensibilite": { n: "tesis: l'homme est naturellement bon et la société le corrompt (no «méchant»); abre el camino al romanticismo: exalta la nature, la sensibilité, la sincérité, la rêverie, l'autobiographie; frente a Voltaire: l'ironie, Candide, la tolérance, l'esprit critique", b: "gr" }
  },
  video: {
    titulo: "Rousseau", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "la sensibilité", seg: [
        { es: "Hola. El filósofo del sentimiento y de la naturaleza." } ] },
      { v: "frase", filas: [
          { nota: "bondad natural", p: 1, partes: [["L'homme est naturellement bon.", "-", 1]] },
          { nota: "sinceridad", p: 2, partes: [["Les Confessions racontent sa vie avec sincérité.", "-", 2]] },
          { nota: "naturaleza", p: 3, partes: [["La nature occupe une grande place dans son œuvre.", "-", 3]] } ], seg: [
        { fr: "Rousseau pense que l'homme est naturellement bon.", p: 1 }, { fr: "Les Confessions racontent sa vie avec sincérité.", p: 2 }, { fr: "La nature occupe une grande place dans son œuvre.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Rousseau nació en…", o: ["Ginebra", "París"], a: 0, es: true,
        bien: "¡Sí! En 1712.", mal: "Nació en Ginebra.",
        seg: [ { es: "Pausa. Ginebra." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La Nouvelle Héloïse", "Émile", "Les Confessions", "Les Rêveries", "la nature", "la sensibilité"], seg: [
        { es: "Obras y sensibilidad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Paseo a solas", img: "bg-montana", yo: "camila",
    escena: "En una caminata por la montaña, Camila y Madame Sofia hablan de Rousseau.",
    pj: PJ,
    lineas: [
      ["camila", "Ce paysage me fait penser aux Rêveries du promeneur solitaire. — Oui : chez Rousseau, la nature est un refuge. Elle occupe une grande place dans son œuvre.", "Este paisaje me hace pensar en las Ensoñaciones del paseante solitario. — Sí: en Rousseau, la naturaleza es un refugio. Ocupa un gran lugar en su obra."],
      ["sofia", "Rousseau, né à Genève en 1712, pense que l'homme est naturellement bon et que la société le corrompt. Il a écrit Émile, un traité d'éducation, et La Nouvelle Héloïse, un roman épistolaire qui a connu un immense succès.", "Rousseau, nacido en Ginebra en 1712, piensa que el hombre es naturalmente bueno y que la sociedad lo corrompe. Escribió Emilio, un tratado de educación, y Julia o la nueva Eloísa, una novela epistolar que tuvo un éxito inmenso."],
      ["camila", "Et Les Confessions ? — C'est sa grande autobiographie. Dans Les Confessions, Rousseau veut se montrer tel qu'il est, avec une sincérité radicale.", "¿Y Las confesiones? — Es su gran autobiografía. En Las confesiones, Rousseau quiere mostrarse tal como es, con una sinceridad radical."],
      ["sofia", "Voltaire, c'est l'ironie et l'esprit critique ; Rousseau, c'est la sensibilité et le moi. C'est lui qui ouvre le chemin au romantisme.", "Voltaire es la ironía y el espíritu crítico; Rousseau es la sensibilidad y el yo. Es él quien abre el camino al romanticismo."]
    ],
    fijate: "Fíjate: Les Rêveries du promeneur solitaire, la nature est un refuge, né à Genève (1712), naturellement bon, la société le corrompt, Émile, La Nouvelle Héloïse (roman épistolaire), Les Confessions, se montrer tel qu'il est, la sensibilité et le moi."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obras y tesis",
      idea: "Jean-Jacques Rousseau, nacido en Ginebra en 1712, abre el camino al romanticismo. Obras: La Nouvelle Héloïse (1761), novela epistolar de enorme éxito (amor imposible, cartas, naturaleza); Émile (1762), tratado de educación natural y progresiva; Les Confessions, primera gran autobiografía moderna, de sinceridad radical («Je forme une entreprise qui n'eut jamais d'exemple»); Les Rêveries du promeneur solitaire (la naturaleza como refugio); Du contrat social (filosofía política). Tesis: el hombre es naturalmente bueno y la sociedad lo corrompe. Exalta la naturaleza, el sentimiento y la sinceridad; Voltaire, en cambio, representa la ironía, la tolerancia y el espíritu crítico.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["Émile", "el tratado de educación", "Rousseau"],
        ["Genève", "la ciudad natal de Rousseau", "Rousseau"],
        ["la société", "lo que corrompe al hombre, según Rousseau", "Rousseau"],
        ["Les Rêveries du promeneur solitaire · solitaire", "Las ensoñaciones del paseante solitario", "Rousseau"],
        ["La Nouvelle Héloïse est un roman épistolaire. · épistolaire", "La nueva Eloísa es una novela epistolar.", "Rousseau"],
        ["Les Confessions = autobiografía · Émile = tratado de educación · La Nouvelle Héloïse = novela epistolar · Du contrat social = filosofía política", "obras", "resumen"],
        ["l'ironie · Candide · la tolérance · l'esprit critique", "rasgos de Voltaire", "Voltaire"],
        ["la nature · la sensibilité · l'autobiographie · la rêverie", "rasgos de Rousseau", "Rousseau"],
        ["Selon Rousseau, l'homme est naturellement bon et la société le corrompt. · bon", "Según Rousseau, el hombre es naturalmente bueno.", "Rousseau"],
        ["La nature est un refuge", "La naturaleza es un refugio", "Rousseau"],
        ["né à Genève en 1712", "su nacimiento", "Rousseau"],
        ["Dans Les Confessions, Rousseau veut se montrer tel qu'il est.", "En Las confesiones, Rousseau quiere mostrarse tal como es.", "Rousseau"]
      ]],
      ej: [["Rousseau pense que l'homme est naturellement bon.", "Rousseau piensa que el hombre es naturalmente bueno."], ["Les Confessions racontent sa vie avec sincérité.", "Las Confesiones cuentan su vida con sinceridad."], ["La nature occupe une grande place dans son œuvre.", "La naturaleza ocupa un gran lugar en su obra."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Rousseau était français de naissance.", "Rousseau est né à Genève (1712).", "Detalle biográfico."], ["l'homme est naturellement méchant", "l'homme est naturellement bon", "La sociedad lo corrompe."], ["Rousseau, maître de l'ironie", "Rousseau, homme de la sensibilité", "La ironía es de Voltaire."]] }
  ],
  ejemplos: [
    { sit: "Du contrat social es…", resp: "filosofía política", pasos: ["Soberanía popular."], porque: "Obras." },
    { sit: "La ironía es rasgo de…", resp: "Voltaire", pasos: ["Candide."], porque: "Autores." },
    { sit: "La ensoñación es rasgo de…", resp: "Rousseau", pasos: ["Rêveries."], porque: "Autores." }
  ],
  comprueba: [
    { q: "La Nouvelle Héloïse es de…", o: ["1761", "1678"], a: 0, b: "gr", porque: "Siglo XVIII." },
    { q: "Émile trata de…", o: ["educación", "guerra"], a: 0, b: "gr", porque: "Tratado." },
    { q: "Rousseau anuncia…", o: ["el romanticismo", "el Nouveau Roman"], a: 0, b: "gr", porque: "Sensibilidad." }
  ],
  practica: [
    { fase: "guiada", c: ["b6rs-sensibilite"], k: "sort", ask: "¿Voltaire o Rousseau?", q: "Clasifica.", cats: ["Voltaire", "Rousseau"], items: [["l'ironie", 0], ["Candide", 0], ["la tolérance", 0], ["l'esprit critique", 0], ["la nature", 1], ["la sensibilité", 1], ["l'autobiographie", 1], ["la rêverie", 1]], pista: "¿Razón crítica o sentimiento?", why: "Dos Luces." },
    { fase: "guiada", c: ["b6rs-oeuvres"], k: "choice", ask: "El tratado de educación de Rousseau:", q: "Elige.", o: ["Émile", "Candide"], a: 0, pista: "Un nombre de niño.", why: "Émile." },
    { fase: "guiada", c: ["b6rs-oeuvres"], k: "fill", ask: "El paseante…", q: "Les Rêveries du promeneur ___ .", acc: ["solitaire"], pista: "solitario.", why: "<b>solitaire</b>." },
    { fase: "indep", c: ["b6rs-oeuvres"], k: "fill", ask: "Novela en cartas (adjetivo).", q: "La Nouvelle Héloïse est un roman ___ .", acc: ["épistolaire"], why: "<b>épistolaire</b>." },
    { fase: "indep", c: ["b6rs-oeuvres"], k: "match", ask: "Une cada obra con su género.", q: "Obra → género", pairs: [["Les Confessions", "autobiografía"], ["Émile", "tratado de educación"], ["La Nouvelle Héloïse", "novela epistolar"], ["Du contrat social", "filosofía política"]], why: "Obras." },
    { fase: "indep", c: ["b6rs-sensibilite"], k: "spot", ask: "Encuentra el error.", s: "Selon Rousseau , l'homme est naturellement [méchant] et la société le corrompt .", fix: "bon", why: "<b>bon</b>." },
    { fase: "aplica", c: ["b6rs-oeuvres"], k: "choice", ask: "La ciudad natal de Rousseau:", q: "Elige.", o: ["Genève", "Paris"], a: 0, why: "Ginebra." },
    { fase: "aplica", c: ["b6rs-sensibilite"], k: "choice", ask: "Según Rousseau, lo que corrompe al hombre es…", q: "Elige.", o: ["la société", "la nature"], a: 0, why: "La sociedad." },
    { fase: "aplica", c: ["b6rs-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Rousseau est né [à Paris] en 1712 .", fix: "à Genève", why: "<b>à Genève</b>." },
    { fase: "dominio", c: ["b6rs-sensibilite"], k: "order", ask: "Ordena la frase.", tokens: ["La nature", "est", "un refuge"], why: "<b>La nature est un refuge</b>" },
    { fase: "dominio", c: ["b6rs-sensibilite"], k: "choice", ask: "Rousseau abre el camino al…", q: "Elige.", o: ["romantisme", "classicisme"], a: 0, why: "Romanticismo." },
    { fase: "dominio", c: ["b6rs-oeuvres", "b6rs-sensibilite"], k: "listen", say: "Dans Les Confessions, Rousseau veut se montrer tel qu'il est.", acc: ["Dans Les Confessions, Rousseau veut se montrer tel qu'il est."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans Les Confessions, Rousseau veut se montrer tel qu'il est.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Jean-Jacques Rousseau", "Rousseau", "Genève", "Paris", "La Nouvelle Héloïse", "Émile", "Les Confessions", "Les Rêveries du promeneur solitaire", "Du contrat social", "Voltaire", "Candide"], previo: [] }
};

/* ── 32. Marivaux et Beaumarchais ── */
E["lit-theatre-xviiie"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Marivaux et Beaumarchais",
  objetivo: {
    que: "Vas a conocer la comedia del siglo XVIII: el marivaudage de Marivaux y la crítica social de Figaro en Beaumarchais.",
    corto: "Le marivaudage désigne un badinage amoureux raffiné. · Figaro critique les privilèges de la noblesse. · Dans la pièce, maîtres et valets échangent leurs rôles.",
    podras: ["Explicar el marivaudage (juego sutil del lenguaje amoroso) y Le Jeu de l'amour et du hasard (1730: amos y criados intercambian papeles; Silvia y Dorante); otras obras: Les Fausses Confidences (1737), L'Île des esclaves.", "Presentar a Figaro, criado ingenioso de Beaumarchais (Le Barbier de Séville, 1775; Le Mariage de Figaro, 1784), que critica los privilegios de la nobleza y anuncia la Revolución.", "Saber que Figaro lo creó Beaumarchais (Mozart y Rossini lo adaptaron)."],
    iconos: ["ic2/nota", "ic2/cafe", "ic2/bandera"],
    previos: ["Molière (lección 24), leer el teatro (lección 9) y De la Revolución a la V República (C1.2, lección 3)."],
    capacidad: "Ahora reconoces el marivaudage y la crítica social de Figaro."
  },
  requiere: R("b6mo-oeuvres", "b6th-formes", "b5rr-dates"), recupera: ["b6mo-oeuvres"],
  conceptos: {
    "b6mb-marivaux": { n: "Marivaux analiza el nacimiento del amor con un lenguaje sutil: le marivaudage (un badinage amoureux raffiné, juego sutil del lenguaje amoroso); Le Jeu de l'amour et du hasard (1730): amos y criados intercambian sus papeles (Silvia y Dorante); Les Fausses Confidences (1737), L'Île des esclaves", b: "gr" },
    "b6mb-beaumarchais": { n: "Beaumarchais (no Marivaux) crea a Figaro, criado ingenioso e insolente que critica los privilegios de la nobleza: Le Barbier de Séville (1775), Le Mariage de Figaro (1784, anuncia la Revolución; el comte Almaviva); réplica: «Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !»; Figaro no es solo un personaje de Mozart: Mozart y Rossini lo adaptaron", b: "gr" }
  },
  video: {
    titulo: "Teatro del XVIII", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "Figaro", seg: [
        { es: "Hola. Del amor sutil a la crítica de los privilegios." } ] },
      { v: "frase", filas: [
          { nota: "Marivaux", p: 1, partes: [["Le marivaudage désigne un badinage amoureux raffiné.", "-", 1]] },
          { nota: "Beaumarchais", p: 2, partes: [["Figaro critique les privilèges de la noblesse.", "-", 2]] },
          { nota: "intercambio", p: 3, partes: [["Maîtres et valets échangent leurs rôles.", "-", 3]] } ], seg: [
        { fr: "Le marivaudage désigne un badinage amoureux raffiné.", p: 1 }, { fr: "Figaro critique les privilèges de la noblesse.", p: 2 }, { fr: "Dans la pièce, maîtres et valets échangent leurs rôles.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Fígaro lo creó…", o: ["Beaumarchais", "Mozart"], a: 0, es: true,
        bien: "¡Sí! Mozart y Rossini lo adaptaron.", mal: "Es de Beaumarchais.",
        seg: [ { es: "Pausa. Beaumarchais." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le marivaudage", "Le Jeu de l'amour et du hasard", "Figaro", "Le Barbier de Séville", "Le Mariage de Figaro", "les privilèges"], seg: [
        { es: "Dos autores, dos comedias.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Ópera y teatro", img: "bg-noche", yo: "camila",
    escena: "Camila sale de una ópera de Mozart y Hugo le cuenta el origen de Figaro.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai adoré Les Noces de Figaro de Mozart ! — Tu sais que Figaro a été créé par Beaumarchais ? Mozart et Rossini l'ont adapté : Le Barbier de Séville, en 1775, puis Le Mariage de Figaro, en 1784.", "¡Me encantaron Las bodas de Fígaro de Mozart! — ¿Sabías que a Fígaro lo creó Beaumarchais? Mozart y Rossini lo adaptaron: El barbero de Sevilla, en 1775, luego Las bodas de Fígaro, en 1784."],
      ["hugo", "Figaro, valet intelligent, critique ouvertement les privilèges de la noblesse. Il dit au comte Almaviva : « Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! » La pièce annonce la Révolution.", "Fígaro, criado inteligente, critica abiertamente los privilegios de la nobleza. Le dice al conde Almaviva: «¡Porque sois un gran señor os creéis un gran genio!» La obra anuncia la Revolución."],
      ["camila", "Et Marivaux ? — Lui, c'est le marivaudage : un badinage amoureux raffiné, un jeu subtil du langage de l'amour. Dans Le Jeu de l'amour et du hasard, en 1730, maîtres et valets échangent leurs rôles.", "¿Y Marivaux? — Él es el marivaudage: un coqueteo amoroso refinado, un juego sutil del lenguaje del amor. En El juego del amor y del azar, en 1730, amos y criados intercambian sus papeles."],
      ["hugo", "Silvia et Dorante se déguisent en domestiques pour observer l'autre… et ils tombent amoureux malgré tout !", "Silvia y Dorante se disfrazan de criados para observar al otro… ¡y se enamoran de todos modos!"]
    ],
    fijate: "Fíjate: créé par Beaumarchais, Le Barbier de Séville (1775), Le Mariage de Figaro (1784), valet intelligent, les privilèges de la noblesse, « Parce que vous êtes un grand seigneur… », le marivaudage, Le Jeu de l'amour et du hasard (1730), maîtres et valets échangent leurs rôles."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos comedias del XVIII",
      idea: "En el siglo XVIII la comedia cambia. Marivaux analiza el nacimiento del amor con un lenguaje sutil: el marivaudage, un coqueteo amoroso refinado. En Le Jeu de l'amour et du hasard (1730), amos y criados intercambian sus papeles (Silvia y Dorante); también Les Fausses Confidences (1737) y L'Île des esclaves. Beaumarchais crea a Figaro, criado ingenioso que critica los privilegios: Le Barbier de Séville (1775) y Le Mariage de Figaro (1784), que anuncia la Revolución, frente al conde Almaviva: «Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !». Mozart y Rossini adaptaron a Figaro, pero su creador es Beaumarchais.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["un langage amoureux subtil", "el marivaudage", "Marivaux"],
        ["Beaumarchais", "el creador de Figaro", "Beaumarchais"],
        ["les privilèges de la noblesse", "lo que critica Figaro", "Beaumarchais"],
        ["Le Jeu de l'amour et du hasard · hasard", "El juego del amor y del azar", "Marivaux"],
        ["Le Barbier de Séville est une pièce de Beaumarchais. · Barbier", "El barbero de Sevilla es de Beaumarchais.", "Beaumarchais"],
        ["Le Jeu de l'amour et du hasard = Marivaux · Le Mariage de Figaro = Beaumarchais · Les Fausses Confidences = Marivaux (1737) · Le Barbier de Séville = Beaumarchais (1775)", "obras", "resumen"],
        ["le marivaudage · Silvia et Dorante · Les Fausses Confidences · L'Île des esclaves", "Marivaux", "Marivaux"],
        ["Figaro · Le Mariage de Figaro · le comte Almaviva · Le Barbier de Séville", "Beaumarchais", "Beaumarchais"],
        ["Le personnage de Figaro a été créé par Beaumarchais. · Beaumarchais", "Fígaro fue creado por Beaumarchais.", "Beaumarchais"],
        ["Parce que vous êtes un grand seigneur, vous vous croyez un grand génie", "Porque sois un gran señor os creéis un gran genio", "Beaumarchais"],
        ["maîtres et valets échangent leurs rôles", "el recurso de Le Jeu de l'amour et du hasard", "Marivaux"],
        ["Figaro, valet intelligent, critique ouvertement les privilèges de la noblesse.", "Fígaro critica abiertamente los privilegios de la nobleza.", "Beaumarchais"]
      ]],
      ej: [["Le marivaudage désigne un badinage amoureux raffiné.", "El marivaudage designa un coqueteo amoroso refinado."], ["Figaro critique les privilèges de la noblesse.", "Fígaro critica los privilegios de la nobleza."], ["Dans la pièce, maîtres et valets échangent leurs rôles.", "En la obra, amos y criados intercambian sus papeles."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Figaro, personnage de Mozart seulement", "Figaro, créé par Beaumarchais", "Mozart y Rossini lo adaptaron."], ["Figaro créé par Marivaux", "Figaro créé par Beaumarchais", "No confundir."], ["le marivaudage = une bagarre", "le marivaudage = un badinage amoureux raffiné", "Lenguaje sutil."]] }
  ],
  ejemplos: [
    { sit: "L'Île des esclaves es de…", resp: "Marivaux", pasos: ["Inversión social."], porque: "Obras." },
    { sit: "El conde de Le Mariage de Figaro:", resp: "le comte Almaviva", pasos: ["Señor."], porque: "Personajes." },
    { sit: "Le Mariage de Figaro (1784) anuncia…", resp: "la Révolution", pasos: ["Crítica de los privilegios."], porque: "Historia." }
  ],
  comprueba: [
    { q: "Le Jeu de l'amour et du hasard es de…", o: ["1730", "1784"], a: 0, b: "gr", porque: "Marivaux." },
    { q: "Silvia y Dorante son personajes de…", o: ["Marivaux", "Beaumarchais"], a: 0, b: "gr", porque: "Le Jeu…" },
    { q: "Le Barbier de Séville es de…", o: ["1775", "1730"], a: 0, b: "gr", porque: "Beaumarchais." }
  ],
  practica: [
    { fase: "guiada", c: ["b6mb-marivaux", "b6mb-beaumarchais"], k: "sort", ask: "¿Marivaux o Beaumarchais?", q: "Clasifica.", cats: ["Marivaux", "Beaumarchais"], items: [["le marivaudage", 0], ["Silvia et Dorante", 0], ["Les Fausses Confidences", 0], ["L'Île des esclaves", 0], ["Figaro", 1], ["Le Mariage de Figaro", 1], ["le comte Almaviva", 1], ["Le Barbier de Séville", 1]], pista: "Amor sutil o crítica social.", why: "Autores." },
    { fase: "guiada", c: ["b6mb-marivaux"], k: "choice", ask: "Marivaux es conocido por…", q: "Elige.", o: ["un langage amoureux subtil", "des satires politiques violentes"], a: 0, pista: "Marivaudage.", why: "Lenguaje sutil." },
    { fase: "guiada", c: ["b6mb-marivaux"], k: "fill", ask: "El juego del amor y del…", q: "Le Jeu de l'amour et du ___ .", acc: ["hasard"], pista: "azar.", why: "<b>hasard</b>." },
    { fase: "indep", c: ["b6mb-beaumarchais"], k: "fill", ask: "El … de Sevilla.", q: "Le ___ de Séville est une pièce de Beaumarchais.", acc: ["Barbier"], why: "<b>Barbier</b>." },
    { fase: "indep", c: ["b6mb-marivaux", "b6mb-beaumarchais"], k: "match", ask: "Une cada obra con su autor y fecha.", q: "Obra → autor", pairs: [["Le Jeu de l'amour et du hasard", "Marivaux"], ["Le Mariage de Figaro", "Beaumarchais"], ["Les Fausses Confidences", "Marivaux (1737)"], ["Le Barbier de Séville", "Beaumarchais (1775)"]], why: "Obras." },
    { fase: "indep", c: ["b6mb-beaumarchais"], k: "spot", ask: "Encuentra el error.", s: "Le personnage de Figaro a été créé par [Marivaux] .", fix: "Beaumarchais", why: "<b>Beaumarchais</b>." },
    { fase: "aplica", c: ["b6mb-beaumarchais"], k: "choice", ask: "Lo que critica Figaro:", q: "Elige.", o: ["les privilèges de la noblesse", "le marivaudage"], a: 0, why: "Privilegios." },
    { fase: "aplica", c: ["b6mb-marivaux"], k: "choice", ask: "En Le Jeu de l'amour et du hasard…", q: "Elige.", o: ["maîtres et valets échangent leurs rôles", "un roi perd son trône"], a: 0, why: "Intercambio." },
    { fase: "aplica", c: ["b6mb-beaumarchais"], k: "spot", ask: "Encuentra el error.", s: "Figaro est [un personnage inventé par Mozart] .", fix: "une création de Beaumarchais", why: "Es <b>une création de Beaumarchais</b>." },
    { fase: "dominio", c: ["b6mb-beaumarchais"], k: "order", ask: "Ordena la réplica de Figaro.", tokens: ["Parce que vous êtes un grand seigneur,", "vous vous croyez", "un grand génie"], why: "<b>Parce que vous êtes un grand seigneur, vous vous croyez un grand génie</b>" },
    { fase: "dominio", c: ["b6mb-beaumarchais"], k: "choice", ask: "Le Mariage de Figaro (1784) anuncia…", q: "Elige.", o: ["la Révolution", "la Renaissance"], a: 0, why: "Revolución." },
    { fase: "dominio", c: ["b6mb-beaumarchais", "b6mb-marivaux"], k: "listen", say: "Figaro, valet intelligent, critique ouvertement les privilèges de la noblesse.", acc: ["Figaro, valet intelligent, critique ouvertement les privilèges de la noblesse."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Figaro, valet intelligent, critique ouvertement les privilèges de la noblesse.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Marivaux", "Beaumarchais", "Figaro", "Almaviva", "Silvia", "Dorante", "Mozart", "Rossini", "Séville", "Le Jeu de l'amour et du hasard", "Les Fausses Confidences", "L'Île des esclaves", "Le Barbier de Séville", "Le Mariage de Figaro", "Les Noces de Figaro"], previo: [] }
};

/* ── 33. Laclos : Les Liaisons dangereuses ── */
E["lit-laclos"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Laclos : Les Liaisons dangereuses",
  objetivo: {
    que: "Vas a conocer Les Liaisons dangereuses, novela epistolar de los libertinos Valmont y Merteuil.",
    corto: "Valmont et Merteuil manipulent les autres personnages. · Le roman est composé de lettres. · Madame de Tourvel est la victime de Valmont.",
    podras: ["Situar la novela (1782, Choderlos de Laclos): 175 cartas revelan las manipulaciones de dos libertinos que seducen y destruyen por juego.", "Presentar los personajes: Valmont (seductor), Merteuil (manipuladora), Madame de Tourvel (víctima virtuosa), Cécile de Volanges (joven ingenua).", "Explicar la forma epistolar (polifonía, varios puntos de vista) y el libertinage; citar otras novelas epistolares: La Nouvelle Héloïse, Lettres persanes, Lettres d'une Péruvienne."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/flor"],
    previos: ["Rousseau y La Nouvelle Héloïse (lección 31) y analizar un relato (lección 10)."],
    capacidad: "Ahora analizas una carta de Les Liaisons dangereuses y su estrategia."
  },
  requiere: R("b6rs-oeuvres", "b6re-narrateur"), recupera: ["b6rs-oeuvres"],
  conceptos: {
    "b6lc-roman": { n: "Les Liaisons dangereuses (1782), de Choderlos de Laclos: roman épistolaire (novela compuesta de cartas, no «teatral»; no sobre epístolas bíblicas), 175 cartas; le libertinage (libertad de costumbres y de pensamiento); dos libertinos seducen y destruyen por juego: le vicomte de Valmont (seductor) y la marquise de Merteuil (manipuladora); víctimas: Madame de Tourvel (víctima virtuosa: Valmont la seduce) y Cécile de Volanges (joven ingenua)", b: "gr" },
    "b6lc-epistolaire": { n: "la forma epistolar multiplica los puntos de vista (polifonía: cada carta muestra una voz y una estrategia de seducción) y deja al lector descubrir las mentiras; novelas epistolares: Les Liaisons dangereuses, La Nouvelle Héloïse, Lettres persanes, Lettres d'une Péruvienne (no Candide, Le Père Goriot, Madame Bovary, Germinal)", b: "gr" }
  },
  video: {
    titulo: "Las amistades peligrosas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "175 lettres", seg: [
        { es: "Hola. Una novela en cartas sobre la manipulación." } ] },
      { v: "frase", filas: [
          { nota: "libertinos", p: 1, partes: [["Valmont et Merteuil manipulent les autres personnages.", "-", 1]] },
          { nota: "cartas", p: 2, partes: [["Le roman est composé de lettres.", "-", 2]] },
          { nota: "víctima", p: 3, partes: [["Madame de Tourvel est la victime de Valmont.", "-", 3]] } ], seg: [
        { fr: "Valmont et Merteuil manipulent les autres personnages.", p: 1 }, { fr: "Le roman est composé de lettres.", p: 2 }, { fr: "Madame de Tourvel est la victime de Valmont.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Una novela epistolar está compuesta de…", o: ["cartas", "escenas de teatro"], a: 0, es: true,
        bien: "¡Sí! Varias voces.", mal: "De cartas.",
        seg: [ { es: "Pausa. Cartas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le roman épistolaire", "le libertinage", "Valmont", "Merteuil", "Madame de Tourvel", "la polyphonie"], seg: [
        { es: "Forma, personajes y libertinaje.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Lectura de cartas", img: "bg-biblioteca", yo: "camila",
    escena: "Camila lee Les Liaisons dangereuses y comenta con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Il n'y a pas de narrateur, seulement des lettres ! — C'est un roman épistolaire : 175 lettres. Chaque lettre révèle une voix et une stratégie. Le lecteur découvre les mensonges en comparant les lettres.", "¡No hay narrador, solo cartas! — Es una novela epistolar: 175 cartas. Cada carta revela una voz y una estrategia. El lector descubre las mentiras comparando las cartas."],
      ["sofia", "Le vicomte de Valmont et la marquise de Merteuil sont des libertins : ils séduisent et détruisent par jeu. Valmont séduit Madame de Tourvel, une femme vertueuse, et Merteuil manipule la jeune Cécile de Volanges.", "El vizconde de Valmont y la marquesa de Merteuil son libertinos: seducen y destruyen por juego. Valmont seduce a la señora de Tourvel, una mujer virtuosa, y Merteuil manipula a la joven Cécile de Volanges."],
      ["camila", "Le libertinage, c'est quoi exactement ? — Une liberté de mœurs et de pensée. Le roman date de 1782, juste avant la Révolution.", "¿Qué es exactamente el libertinaje? — Una libertad de costumbres y de pensamiento. La novela es de 1782, justo antes de la Revolución."],
      ["sofia", "D'autres grands romans épistolaires : La Nouvelle Héloïse de Rousseau, les Lettres persanes de Montesquieu. Dans ce roman épistolaire, chaque lettre révèle une stratégie de séduction.", "Otras grandes novelas epistolares: La nueva Eloísa de Rousseau, las Cartas persas de Montesquieu. En esta novela epistolar, cada carta revela una estrategia de seducción."]
    ],
    fijate: "Fíjate: un roman épistolaire (175 lettres), chaque lettre révèle une voix et une stratégie, les libertins, séduire et détruire par jeu, Valmont, Merteuil, Madame de Tourvel (vertueuse), Cécile de Volanges, le libertinage (liberté de mœurs et de pensée), 1782."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Forma y personajes",
      idea: "Les Liaisons dangereuses (1782), de Choderlos de Laclos, es una novela epistolar: 175 cartas revelan las manipulaciones de dos libertinos, el vizconde de Valmont (el seductor) y la marquesa de Merteuil (la manipuladora), que seducen y destruyen por juego. Sus víctimas: Madame de Tourvel (víctima virtuosa) y Cécile de Volanges (joven ingenua). El libertinaje es una libertad de costumbres y de pensamiento. La forma epistolar multiplica los puntos de vista (polifonía: cada carta muestra una voz y una estrategia) y deja al lector descubrir las mentiras. Otras novelas epistolares: La Nouvelle Héloïse, Lettres persanes, Lettres d'une Péruvienne.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Novela epistolar?"], [
        ["des lettres", "la forma de la novela", "Sí"],
        ["Valmont et Merteuil", "los libertinos", "personnages"],
        ["plusieurs points de vue", "el efecto de la forma epistolar", "Sí"],
        ["Les Liaisons dangereuses · dangereuses", "Las amistades peligrosas", "Sí"],
        ["Le libertinage est une liberté de mœurs et de pensée. · libertinage", "El libertinaje es una libertad de costumbres y pensamiento.", "personnages"],
        ["Valmont = seductor · Merteuil = manipuladora · Madame de Tourvel = víctima virtuosa · Cécile de Volanges = joven ingenua", "personajes", "resumen"],
        ["Les Liaisons dangereuses · La Nouvelle Héloïse · Les Lettres persanes · Lettres d'une Péruvienne", "novelas epistolares", "Sí"],
        ["Candide · Le Père Goriot · Madame Bovary · Germinal", "otras novelas", "No"],
        ["Les Liaisons dangereuses est un roman épistolaire composé de lettres. · épistolaire", "Es una novela epistolar compuesta de cartas.", "Sí"],
        ["Valmont séduit Madame de Tourvel", "Valmont seduce a la señora de Tourvel", "personnages"],
        ["séduire et détruire par jeu", "lo que hacen los libertinos", "personnages"],
        ["la polyphonie", "varias voces: una por carta", "Sí"],
        ["Dans ce roman épistolaire, chaque lettre révèle une stratégie de séduction.", "En esta novela epistolar, cada carta revela una estrategia.", "Sí"]
      ]],
      ej: [["Valmont et Merteuil manipulent les autres personnages.", "Valmont y Merteuil manipulan a los demás personajes."], ["Le roman est composé de lettres.", "La novela está compuesta de cartas."], ["Madame de Tourvel est la victime de Valmont.", "La señora de Tourvel es la víctima de Valmont."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["roman épistolaire = roman sur les épîtres bibliques", "roman épistolaire = roman composé de lettres", "Género."], ["un roman théâtral composé de lettres", "un roman épistolaire composé de lettres", "Epistolar."], ["Merteuil, victime innocente", "Merteuil, manipulatrice", "La víctima es Tourvel."]] }
  ],
  ejemplos: [
    { sit: "Cécile de Volanges es…", resp: "joven ingenua", pasos: ["Manipulada."], porque: "Personajes." },
    { sit: "Lettres persanes es…", resp: "Sí", pasos: ["Novela epistolar de Montesquieu."], porque: "Género." },
    { sit: "Germinal es una novela epistolar…", resp: "No", pasos: ["Zola, narración."], porque: "Género." }
  ],
  comprueba: [
    { q: "La novela tiene…", o: ["175 cartas", "5 actos"], a: 0, b: "gr", porque: "Epistolar." },
    { q: "El autor es…", o: ["Choderlos de Laclos", "Marivaux"], a: 0, b: "gr", porque: "1782." },
    { q: "La polifonía es…", o: ["varias voces", "una sola voz"], a: 0, b: "gr", porque: "Forma." }
  ],
  practica: [
    { fase: "guiada", c: ["b6lc-epistolaire"], k: "sort", ask: "¿Novela epistolar o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["Les Liaisons dangereuses", 0], ["La Nouvelle Héloïse", 0], ["Les Lettres persanes", 0], ["Lettres d'une Péruvienne", 0], ["Candide", 1], ["Le Père Goriot", 1], ["Madame Bovary", 1], ["Germinal", 1]], pista: "¿Cartas o narración?", why: "Género." },
    { fase: "guiada", c: ["b6lc-roman"], k: "choice", ask: "La forma de Les Liaisons dangereuses:", q: "Elige.", o: ["des lettres", "des scènes de théâtre"], a: 0, pista: "Epistolar.", why: "Cartas." },
    { fase: "guiada", c: ["b6lc-roman"], k: "fill", ask: "Las amistades…", q: "Les Liaisons ___ .", acc: ["dangereuses"], pista: "peligrosas.", why: "<b>dangereuses</b>." },
    { fase: "indep", c: ["b6lc-roman"], k: "fill", ask: "Libertad de costumbres y de pensamiento.", q: "Le ___ est une liberté de mœurs et de pensée.", acc: ["libertinage"], why: "<b>libertinage</b>." },
    { fase: "indep", c: ["b6lc-roman"], k: "match", ask: "Une cada personaje con su papel.", q: "Personaje → papel", pairs: [["Valmont", "seductor"], ["Merteuil", "manipuladora"], ["Madame de Tourvel", "víctima virtuosa"], ["Cécile de Volanges", "joven ingenua"]], why: "Personajes." },
    { fase: "indep", c: ["b6lc-roman"], k: "spot", ask: "Encuentra el error.", s: "Les Liaisons dangereuses est un roman [théâtral] composé de lettres .", fix: "épistolaire", why: "<b>épistolaire</b>." },
    { fase: "aplica", c: ["b6lc-roman"], k: "choice", ask: "Los libertinos:", q: "Elige.", o: ["Valmont et Merteuil", "Silvia et Dorante"], a: 0, why: "Valmont y Merteuil." },
    { fase: "aplica", c: ["b6lc-epistolaire"], k: "choice", ask: "El efecto de la forma epistolar:", q: "Elige.", o: ["plusieurs points de vue", "un narrateur omniscient"], a: 0, why: "Polifonía." },
    { fase: "aplica", c: ["b6lc-roman"], k: "spot", ask: "Encuentra el error.", s: "[La marquise de Merteuil] est la victime vertueuse de Valmont .", fix: "Madame de Tourvel", why: "<b>Madame de Tourvel</b>." },
    { fase: "dominio", c: ["b6lc-roman"], k: "order", ask: "Ordena la frase.", tokens: ["Valmont", "séduit", "Madame de Tourvel"], why: "<b>Valmont séduit Madame de Tourvel</b>" },
    { fase: "dominio", c: ["b6lc-roman"], k: "choice", ask: "Les Liaisons dangereuses es de…", q: "Elige.", o: ["1782", "1678"], a: 0, why: "1782." },
    { fase: "dominio", c: ["b6lc-epistolaire", "b6lc-roman"], k: "listen", say: "Dans ce roman épistolaire, chaque lettre révèle une stratégie de séduction.", acc: ["Dans ce roman épistolaire, chaque lettre révèle une stratégie de séduction."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans ce roman épistolaire, chaque lettre révèle une stratégie de séduction.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Choderlos de Laclos", "Laclos", "Valmont", "Merteuil", "Madame de Tourvel", "Tourvel", "Cécile de Volanges", "Volanges", "Rousseau", "Montesquieu", "Silvia", "Dorante", "Les Liaisons dangereuses", "La Nouvelle Héloïse", "Lettres persanes", "Lettres d'une Péruvienne", "Candide", "Le Père Goriot", "Madame Bovary", "Germinal"], previo: [] }
};

/* ── 34. Victor Hugo, géant du XIXe siècle ── */
E["lit-hugo"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Victor Hugo, géant du XIXe siècle",
  objetivo: {
    que: "Vas a conocer a Victor Hugo: su teatro, sus novelas, su poesía, su exilio y su compromiso.",
    corto: "Jean Valjean a volé un pain pour nourrir sa famille. · Hugo a vécu en exil à Guernesey. · Quasimodo est le sonneur de Notre-Dame.",
    podras: ["Situar su obra: Préface de Cromwell (1827, manifiesto romántico), Hernani (1830, la «bataille d'Hernani»), Notre-Dame de Paris (1831), Les Contemplations (1856), Les Misérables (1862).", "Distinguir sus novelas (Les Misérables, Notre-Dame de Paris, Quatrevingt-treize, Les Travailleurs de la mer) y su poesía (Les Contemplations, Les Châtiments, La Légende des siècles, Les Orientales); personajes: Jean Valjean, Javert, Cosette, Gavroche, Quasimodo, Esmeralda.", "Contar su exilio en Jersey y Guernesey (contra Napoléon III), su lucha contra la miseria y la pena de muerte, y su entierro en el Panthéon (1885)."],
    iconos: ["ic2/libro", "ic2/bandera", "ic2/pergamino"],
    previos: ["Romanticismo y realismo (lección 5) y el siglo XIX (C1.2, lección 21)."],
    capacidad: "Ahora presentas a Victor Hugo y sus grandes obras."
  },
  requiere: R("b6rr-romantisme", "b5xx-regimes"), recupera: ["b6rr-romantisme"],
  conceptos: {
    "b6hu-oeuvres": { n: "Victor Hugo (1802-1885): Préface de Cromwell (1827, manifiesto romántico), Hernani (1830: la «bataille d'Hernani», enfrentamiento entre clásicos y románticos en el teatro; Doña Sol); novelas: Notre-Dame de Paris (1831: Quasimodo, el campanero, ama a Esmeralda), Les Misérables (1862: Jean Valjean robó un pan para alimentar a su familia; perseguido por el inspector Javert; Cosette, Gavroche; es una novela, no una obra de teatro, luego musical), Quatrevingt-treize, Les Travailleurs de la mer (Gilliatt); poesía: Les Contemplations (1856), Les Châtiments, La Légende des siècles, Les Orientales", b: "gr" },
    "b6hu-vie": { n: "opositor a Napoléon III, vive casi veinte años de exilio en Jersey y Guernesey; luchó toda su vida contra la misère y la peine de mort; funerales nacionales en 1885 ante una multitud; reposa en el Panthéon", b: "gr" }
  },
  video: {
    titulo: "Victor Hugo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "1802-1885", seg: [
        { es: "Hola. El gigante del siglo XIX." } ] },
      { v: "frase", filas: [
          { nota: "Valjean", p: 1, partes: [["Jean Valjean a volé un pain pour nourrir sa famille.", "-", 1]] },
          { nota: "exilio", p: 2, partes: [["Hugo a vécu en exil à Guernesey.", "-", 2]] },
          { nota: "campanero", p: 3, partes: [["Quasimodo est le sonneur de Notre-Dame.", "-", 3]] } ], seg: [
        { fr: "Jean Valjean a volé un pain pour nourrir sa famille.", p: 1 }, { fr: "Hugo a vécu en exil à Guernesey.", p: 2 }, { fr: "Quasimodo est le sonneur de Notre-Dame.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Les Misérables es…", o: ["una novela", "una obra de teatro"], a: 0, es: true,
        bien: "¡Sí! Luego musical.", mal: "Es una novela.",
        seg: [ { es: "Pausa. Una novela." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Hernani", "Notre-Dame de Paris", "Les Misérables", "Les Contemplations", "Guernesey", "le Panthéon"], seg: [
        { es: "Teatro, novela, poesía y exilio.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Musical y novela", img: "bg-noche", yo: "camila",
    escena: "Camila vio el musical Les Misérables y Madame Sofia le habla del libro.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai vu la comédie musicale des Misérables ! — C'est d'abord un roman de Victor Hugo, de 1862. Jean Valjean a volé un pain pour nourrir sa famille ; il est poursuivi toute sa vie par l'inspecteur Javert.", "¡Vi el musical de Los miserables! — Primero es una novela de Victor Hugo, de 1862. Jean Valjean robó un pan para alimentar a su familia; lo persigue toda la vida el inspector Javert."],
      ["sofia", "Avant, il y avait eu Notre-Dame de Paris, en 1831 : Quasimodo, le sonneur de Notre-Dame, aime Esmeralda. Et au théâtre, Hernani, en 1830 : la « bataille d'Hernani » a opposé classiques et romantiques.", "Antes había publicado Nuestra Señora de París, en 1831: Quasimodo, el campanero de Notre-Dame, ama a Esmeralda. Y en el teatro, Hernani, en 1830: la «batalla de Hernani» enfrentó a clásicos y románticos."],
      ["camila", "Et sa vie ? — Opposant à Napoléon III, il a vécu près de vingt ans en exil, à Jersey puis à Guernesey. Là-bas, il a écrit Les Contemplations et Les Châtiments.", "¿Y su vida? — Opositor a Napoleón III, vivió casi veinte años en el exilio, en Jersey y luego en Guernesey. Allí escribió Las contemplaciones y Los castigos."],
      ["sofia", "Victor Hugo a lutté toute sa vie contre la misère et la peine de mort. À sa mort, en 1885, des funérailles nationales ont réuni une foule immense, et il repose au Panthéon.", "Victor Hugo luchó toda su vida contra la miseria y la pena de muerte. A su muerte, en 1885, unos funerales nacionales reunieron a una multitud inmensa, y reposa en el Panteón."]
    ],
    fijate: "Fíjate: d'abord un roman (1862), Jean Valjean, l'inspecteur Javert, Notre-Dame de Paris (1831), Quasimodo aime Esmeralda, la « bataille d'Hernani » (1830), en exil à Guernesey, contre la misère et la peine de mort, le Panthéon (1885)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obra y vida",
      idea: "Victor Hugo (1802-1885) domina su siglo. Teatro romántico: la Préface de Cromwell (1827) es el manifiesto romántico; Hernani (1830) provoca la «bataille d'Hernani» entre clásicos y románticos. Novela: Notre-Dame de Paris (1831; Quasimodo, el campanero, ama a Esmeralda); Les Misérables (1862; Jean Valjean, que robó un pan, perseguido por el inspector Javert; Cosette, Gavroche); Quatrevingt-treize, Les Travailleurs de la mer. Poesía: Les Contemplations (1856), Les Châtiments, La Légende des siècles, Les Orientales. Opositor a Napoleón III, vive casi veinte años exiliado en Jersey y Guernesey. Luchó contra la miseria y la pena de muerte. Sus funerales nacionales (1885) reúnen a una multitud; reposa en el Panthéon.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["Jean Valjean", "el héroe de Les Misérables", "Novela"],
        ["Guernesey", "la isla del exilio", "vie"],
        ["un affrontement entre classiques et romantiques au théâtre", "la «bataille d'Hernani» (1830)", "théâtre"],
        ["Quasimodo aime Esmeralda. · Esmeralda", "Quasimodo ama a Esmeralda.", "Novela"],
        ["Hugo repose au Panthéon. · Panthéon", "Hugo reposa en el Panteón.", "vie"],
        ["Jean Valjean = Les Misérables · Quasimodo = Notre-Dame de Paris · Doña Sol = Hernani · Gilliatt = Les Travailleurs de la mer", "personajes y obras", "resumen"],
        ["Les Misérables · Notre-Dame de Paris · Quatrevingt-treize · Les Travailleurs de la mer", "novelas", "Novela"],
        ["Les Contemplations · Les Châtiments · La Légende des siècles · Les Orientales", "poemarios", "Poesía"],
        ["Dans Les Misérables, Jean Valjean est poursuivi par l'inspecteur Javert. · Javert", "Jean Valjean es perseguido por Javert.", "Novela"],
        ["Hugo a vécu en exil à Guernesey", "Hugo vivió exiliado en Guernesey", "vie"],
        ["Préface de Cromwell (1827)", "el manifiesto romántico", "théâtre"],
        ["Victor Hugo a lutté toute sa vie contre la misère et la peine de mort.", "Hugo luchó toda su vida contra la miseria y la pena de muerte.", "vie"]
      ]],
      ej: [["Jean Valjean a volé un pain pour nourrir sa famille.", "Jean Valjean robó un pan para alimentar a su familia."], ["Hugo a vécu en exil à Guernesey.", "Hugo vivió exiliado en Guernesey."], ["Quasimodo est le sonneur de Notre-Dame.", "Quasimodo es el campanero de Notre-Dame."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Les Misérables = pièce de théâtre", "Les Misérables = roman (puis comédie musicale)", "Género original."], ["Valjean poursuivi par Quasimodo", "Valjean poursuivi par Javert", "Quasimodo es de Notre-Dame de Paris."], ["Hugo, ami de Napoléon III", "Hugo, opposant à Napoléon III, en exil", "Exilio."]] }
  ],
  ejemplos: [
    { sit: "Les Châtiments es…", resp: "Poesía", pasos: ["Contra Napoleón III."], porque: "Géneros." },
    { sit: "Quatrevingt-treize es…", resp: "Novela", pasos: ["Revolución."], porque: "Géneros." },
    { sit: "El manifiesto romántico de 1827:", resp: "Préface de Cromwell (1827)", pasos: ["Teatro."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Hugo muere en…", o: ["1885", "1830"], a: 0, b: "gr", porque: "Funerales nacionales." },
    { q: "Les Contemplations es de…", o: ["1856", "1862"], a: 0, b: "gr", porque: "Poesía." },
    { q: "Hugo luchó contra…", o: ["la pena de muerte", "la República"], a: 0, b: "gr", porque: "Compromiso." }
  ],
  practica: [
    { fase: "guiada", c: ["b6hu-oeuvres"], k: "sort", ask: "¿Novela o poesía?", q: "Clasifica.", cats: ["Novela", "Poesía"], items: [["Les Misérables", 0], ["Notre-Dame de Paris", 0], ["Quatrevingt-treize", 0], ["Les Travailleurs de la mer", 0], ["Les Contemplations", 1], ["Les Châtiments", 1], ["La Légende des siècles", 1], ["Les Orientales", 1]], pista: "¿Relato o versos?", why: "Géneros." },
    { fase: "guiada", c: ["b6hu-oeuvres"], k: "choice", ask: "El héroe de Les Misérables:", q: "Elige.", o: ["Jean Valjean", "Quasimodo"], a: 0, pista: "Robó un pan.", why: "Jean Valjean." },
    { fase: "guiada", c: ["b6hu-oeuvres"], k: "fill", ask: "La amada de Quasimodo.", q: "Quasimodo aime ___ .", acc: ["Esmeralda"], pista: "Esme…", why: "<b>Esmeralda</b>." },
    { fase: "indep", c: ["b6hu-vie"], k: "fill", ask: "Donde reposa Hugo.", q: "Hugo repose au ___ .", acc: ["Panthéon"], why: "<b>Panthéon</b>." },
    { fase: "indep", c: ["b6hu-oeuvres"], k: "match", ask: "Une cada personaje con su obra.", q: "Personaje → obra", pairs: [["Jean Valjean", "Les Misérables"], ["Quasimodo", "Notre-Dame de Paris"], ["Doña Sol", "Hernani"], ["Gilliatt", "Les Travailleurs de la mer"]], why: "Personajes." },
    { fase: "indep", c: ["b6hu-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Dans Les Misérables , Jean Valjean est poursuivi par l'inspecteur [Quasimodo] .", fix: "Javert", why: "<b>Javert</b>." },
    { fase: "aplica", c: ["b6hu-vie"], k: "choice", ask: "La isla del exilio de Hugo:", q: "Elige.", o: ["Guernesey", "la Corse"], a: 0, why: "Guernesey." },
    { fase: "aplica", c: ["b6hu-oeuvres"], k: "choice", ask: "La «bataille d'Hernani» (1830) fue…", q: "Elige.", o: ["un affrontement entre classiques et romantiques au théâtre", "une bataille de Napoléon"], a: 0, why: "Teatro." },
    { fase: "aplica", c: ["b6hu-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Les Misérables est d'abord [une pièce de théâtre] de Victor Hugo .", fix: "un roman", why: "<b>un roman</b>." },
    { fase: "dominio", c: ["b6hu-vie"], k: "order", ask: "Ordena la frase.", tokens: ["Hugo a vécu", "en exil", "à Guernesey"], why: "<b>Hugo a vécu en exil à Guernesey</b>" },
    { fase: "dominio", c: ["b6hu-vie"], k: "choice", ask: "Hugo se exilió por oponerse a…", q: "Elige.", o: ["Napoléon III", "Louis XIV"], a: 0, why: "Napoleón III." },
    { fase: "dominio", c: ["b6hu-vie", "b6hu-oeuvres"], k: "listen", say: "Victor Hugo a lutté toute sa vie contre la misère et la peine de mort.", acc: ["Victor Hugo a lutté toute sa vie contre la misère et la peine de mort."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Victor Hugo a lutté toute sa vie contre la misère et la peine de mort.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Victor Hugo", "Hugo", "Jean Valjean", "Valjean", "Javert", "Cosette", "Gavroche", "Quasimodo", "Esmeralda", "Doña Sol", "Gilliatt", "Napoléon III", "Jersey", "Guernesey", "Corse", "Panthéon", "Notre-Dame", "Cromwell", "Louis XIV", "Hernani", "Les Misérables", "Notre-Dame de Paris", "Les Contemplations", "Les Châtiments", "La Légende des siècles", "Les Orientales", "Quatrevingt-treize", "Les Travailleurs de la mer"], previo: [] }
};

/* ── 35. Balzac et La Comédie humaine ── */
E["lit-balzac"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Balzac et La Comédie humaine",
  objetivo: {
    que: "Vas a conocer La Comédie humaine de Balzac: un ciclo de novelas que retrata toda la sociedad francesa de su tiempo.",
    corto: "Rastignac veut réussir à Paris. · Balzac décrit longuement la pension Vauquer. · L'argent est au cœur de La Comédie humaine.",
    podras: ["Explicar el proyecto: «faire concurrence à l'état civil»; La Comédie humaine reúne unas 90 novelas y relatos sobre la Restauración y la monarquía de Julio (no es una obra de teatro).", "Presentar los personnages reparaissants (Rastignac, Vautrin, Nucingen) y las obras clave: Eugénie Grandet, Le Père Goriot (1835), Illusions perdues.", "Reconocer los rasgos realistas: descripciones detalladas (la pension Vauquer), personajes ordinarios, marco histórico preciso, el dinero y la ambición."],
    iconos: ["ic2/libros", "ic2/libro", "ic2/cafe"],
    previos: ["Romanticismo y realismo (lección 5) y el Nouveau Roman, que rechaza el personaje balzaciano (lección 15)."],
    capacidad: "Ahora comentas un pasaje de Balzac y su realismo."
  },
  requiere: R("b6rr-realisme", "b6nr-rupture"), recupera: ["b6rr-realisme"],
  conceptos: {
    "b6bz-comedie": { n: "Honoré de Balzac quiere «faire concurrence à l'état civil»: La Comédie humaine (un ciclo de novelas, no una obra de teatro) reúne unas 90 novelas y relatos sobre la sociedad francesa de la Restauración y la monarquía de Julio; les personnages reparaissants (reaparecen, no «desaparecen», de una obra a otra): Rastignac (joven ambicioso que quiere conquistar París), Vautrin (forzado disfrazado), Nucingen; obras clave: Eugénie Grandet (hija de un avaro), Le Père Goriot (1835; Goriot, padre sacrificado), Illusions perdues (el fracaso de un joven poeta); pionero del realismo", b: "gr" },
    "b6bz-realisme": { n: "temas: l'argent (en el corazón de La Comédie humaine), l'ambition, Paris, la société; rasgos realistas: des descriptions détaillées (la pension Vauquer, descrita largamente), des personnages ordinaires, un cadre historique précis, argent et société (no fées et magie, héros mythologiques, vers alexandrins, décor imaginaire); Balzac quería pintar toda la sociedad francesa de su tiempo", b: "gr" }
  },
  video: {
    titulo: "Balzac", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "La Comédie humaine", seg: [
        { es: "Hola. Noventa novelas para retratar una sociedad." } ] },
      { v: "frase", filas: [
          { nota: "ambición", p: 1, partes: [["Rastignac veut réussir à Paris.", "-", 1]] },
          { nota: "descripción", p: 2, partes: [["Balzac décrit longuement la pension Vauquer.", "-", 2]] },
          { nota: "dinero", p: 3, partes: [["L'argent est au cœur de La Comédie humaine.", "-", 3]] } ], seg: [
        { fr: "Rastignac veut réussir à Paris.", p: 1 }, { fr: "Balzac décrit longuement la pension Vauquer.", p: 2 }, { fr: "L'argent est au cœur de La Comédie humaine.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La Comédie humaine es…", o: ["un ciclo de novelas", "una obra de teatro"], a: 0, es: true,
        bien: "¡Sí! Título engañoso.", mal: "Es un ciclo de novelas.",
        seg: [ { es: "Pausa. Novelas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La Comédie humaine", "les personnages reparaissants", "Rastignac", "Le Père Goriot", "la pension Vauquer", "l'argent"], seg: [
        { es: "Proyecto, personajes y realismo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Leer Le Père Goriot", img: "bg-paris", yo: "camila",
    escena: "Camila lee Le Père Goriot en un café de París.",
    pj: PJ,
    lineas: [
      ["camila", "Balzac décrit longuement la pension Vauquer… pendant des pages ! — C'est le réalisme : des descriptions détaillées, des personnages ordinaires, un cadre historique précis.", "Balzac describe largamente la pensión Vauquer… ¡durante páginas! — Es el realismo: descripciones detalladas, personajes ordinarios, un marco histórico preciso."],
      ["hugo", "Le Père Goriot, publié en 1835, fait partie de La Comédie humaine : ce n'est pas une pièce de théâtre, mais un cycle d'environ 90 romans. Balzac voulait peindre toute la société française de son temps, « faire concurrence à l'état civil ».", "Papá Goriot, publicado en 1835, forma parte de La comedia humana: no es una obra de teatro, sino un ciclo de unas 90 novelas. Balzac quería pintar toda la sociedad francesa de su tiempo, «hacer la competencia al registro civil»."],
      ["camila", "Et Rastignac ? — Un jeune ambitieux : Rastignac veut conquérir Paris. On le retrouve dans d'autres romans : dans La Comédie humaine, certains personnages reparaissent d'un roman à l'autre, comme Vautrin.", "¿Y Rastignac? — Un joven ambicioso: Rastignac quiere conquistar París. Se le encuentra en otras novelas: en La comedia humana, algunos personajes reaparecen de una novela a otra, como Vautrin."],
      ["hugo", "Et partout, l'argent : l'argent est au cœur de La Comédie humaine. Lis aussi Eugénie Grandet et Illusions perdues.", "Y en todas partes, el dinero: el dinero está en el corazón de La comedia humana. Lee también Eugenia Grandet e Ilusiones perdidas."]
    ],
    fijate: "Fíjate: la pension Vauquer, des descriptions détaillées, Le Père Goriot (1835), un cycle d'environ 90 romans, « faire concurrence à l'état civil », Rastignac veut conquérir Paris, les personnages reparaissent, Vautrin, l'argent."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "El ciclo de Balzac",
      idea: "Honoré de Balzac quiere «faire concurrence à l'état civil» (hacer la competencia al registro civil): La Comédie humaine reúne unas 90 novelas y relatos que retratan toda la sociedad francesa de la Restauración y de la monarquía de Julio. No es una obra de teatro: el título es engañoso. Algunos personajes reaparecen de una obra a otra (Rastignac, el joven ambicioso; Vautrin, el forzado disfrazado; Nucingen). Obras clave: Eugénie Grandet (la hija de un avaro), Le Père Goriot (1835; Goriot, padre sacrificado), Illusions perdues (el fracaso de un joven poeta). Temas: el dinero, la ambición, París, la sociedad. Rasgos realistas: descripciones minuciosas (la pensión Vauquer), personajes ordinarios, marco histórico preciso; nada de hadas, héroes mitológicos, alejandrinos ni decorados imaginarios.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Realista?"], [
        ["un cycle de romans", "La Comédie humaine", "Sí"],
        ["Rastignac", "el joven ambicioso", "Sí"],
        ["l'argent et l'ambition", "los temas centrales", "Sí"],
        ["Le Père Goriot est un roman de Balzac (1835). · Goriot", "Papá Goriot es una novela de Balzac.", "Sí"],
        ["Illusions perdues raconte l'échec d'un jeune poète. · perdues", "Ilusiones perdidas cuenta el fracaso de un poeta.", "Sí"],
        ["Rastignac = joven ambicioso · Goriot = padre sacrificado · Vautrin = forzado disfrazado · Eugénie Grandet = hija de un avaro", "personajes", "resumen"],
        ["descriptions détaillées · personnages ordinaires · cadre historique précis · argent et société", "rasgos realistas", "Sí"],
        ["fées et magie · héros mythologiques · vers alexandrins · décor imaginaire", "rasgos ajenos", "No"],
        ["Dans La Comédie humaine, certains personnages reparaissent d'un roman à l'autre. · reparaissent", "Algunos personajes reaparecen.", "Sí"],
        ["Rastignac veut conquérir Paris", "Rastignac quiere conquistar París", "Sí"],
        ["faire concurrence à l'état civil", "el proyecto de Balzac", "Sí"],
        ["les personnages reparaissants", "los personajes que reaparecen de una novela a otra", "Sí"],
        ["Balzac voulait peindre toute la société française de son temps.", "Balzac quería pintar toda la sociedad francesa de su tiempo.", "Sí"]
      ]],
      ej: [["Rastignac veut réussir à Paris.", "Rastignac quiere triunfar en París."], ["Balzac décrit longuement la pension Vauquer.", "Balzac describe largamente la pensión Vauquer."], ["L'argent est au cœur de La Comédie humaine.", "El dinero está en el centro de La Comedia humana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La Comédie humaine = une pièce de théâtre", "= un cycle de romans", "Título engañoso."], ["les personnages disparaissent d'un roman à l'autre", "les personnages reparaissent d'un roman à l'autre", "Personnages reparaissants."], ["un roman de Balzac rempli de fées", "un roman de Balzac réaliste", "Realismo."]] }
  ],
  ejemplos: [
    { sit: "Vautrin es…", resp: "forzado disfrazado", pasos: ["Personaje que reaparece."], porque: "Personajes." },
    { sit: "Eugénie Grandet es…", resp: "hija de un avaro", pasos: ["Novela."], porque: "Personajes." },
    { sit: "Los decorados imaginarios son…", resp: "No", pasos: ["Ajenos al realismo."], porque: "Rasgos." }
  ],
  comprueba: [
    { q: "La Comédie humaine reúne unas…", o: ["90 obras", "9 obras"], a: 0, b: "gr", porque: "Ciclo." },
    { q: "Le Père Goriot es de…", o: ["1835", "1857"], a: 0, b: "gr", porque: "Balzac." },
    { q: "La pensión Vauquer aparece en…", o: ["Le Père Goriot", "Madame Bovary"], a: 0, b: "gr", porque: "Balzac." }
  ],
  practica: [
    { fase: "guiada", c: ["b6bz-realisme"], k: "sort", ask: "¿Rasgo realista de Balzac o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["descriptions détaillées", 0], ["personnages ordinaires", 0], ["cadre historique précis", 0], ["argent et société", 0], ["fées et magie", 1], ["héros mythologiques", 1], ["vers alexandrins", 1], ["décor imaginaire", 1]], pista: "La sociedad tal como es.", why: "Realismo." },
    { fase: "guiada", c: ["b6bz-comedie"], k: "choice", ask: "La Comédie humaine es…", q: "Elige.", o: ["un cycle de romans", "une pièce de théâtre"], a: 0, pista: "Título engañoso.", why: "Ciclo de novelas." },
    { fase: "guiada", c: ["b6bz-comedie"], k: "fill", ask: "Papá…", q: "Le Père ___ est un roman de Balzac (1835).", acc: ["Goriot"], pista: "Gor…", why: "<b>Goriot</b>." },
    { fase: "indep", c: ["b6bz-comedie"], k: "fill", ask: "Ilusiones…", q: "Illusions ___ raconte l'échec d'un jeune poète.", acc: ["perdues"], why: "<b>perdues</b>." },
    { fase: "indep", c: ["b6bz-comedie"], k: "match", ask: "Une cada personaje con su rasgo.", q: "Personaje → rasgo", pairs: [["Rastignac", "joven ambicioso"], ["Goriot", "padre sacrificado"], ["Vautrin", "forzado disfrazado"], ["Eugénie Grandet", "hija de un avaro"]], why: "Personajes." },
    { fase: "indep", c: ["b6bz-comedie"], k: "spot", ask: "Encuentra el error.", s: "Dans La Comédie humaine , certains personnages [disparaissent] d'un roman à l'autre .", fix: "reparaissent", why: "<b>reparaissent</b>." },
    { fase: "aplica", c: ["b6bz-comedie"], k: "choice", ask: "El joven ambicioso que quiere conquistar París:", q: "Elige.", o: ["Rastignac", "Goriot"], a: 0, why: "Rastignac." },
    { fase: "aplica", c: ["b6bz-realisme"], k: "choice", ask: "Los temas centrales de La Comédie humaine:", q: "Elige.", o: ["l'argent et l'ambition", "les fées et la magie"], a: 0, why: "Dinero y ambición." },
    { fase: "aplica", c: ["b6bz-comedie"], k: "choice", ask: "El proyecto de Balzac:", q: "Elige.", o: ["faire concurrence à l'état civil", "écrire des contes de fées"], a: 0, why: "Registro civil." },
    { fase: "dominio", c: ["b6bz-comedie"], k: "order", ask: "Ordena la frase.", tokens: ["Rastignac", "veut conquérir", "Paris"], why: "<b>Rastignac veut conquérir Paris</b>" },
    { fase: "dominio", c: ["b6bz-comedie"], k: "spot", ask: "Encuentra el error.", s: "La Comédie humaine est [une pièce de théâtre] de Balzac .", fix: "un cycle de romans", why: "<b>un cycle de romans</b>." },
    { fase: "dominio", c: ["b6bz-realisme", "b6bz-comedie"], k: "listen", say: "Balzac voulait peindre toute la société française de son temps.", acc: ["Balzac voulait peindre toute la société française de son temps."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Balzac voulait peindre toute la société française de son temps.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Honoré de Balzac", "Balzac", "La Comédie humaine", "Rastignac", "Vautrin", "Nucingen", "Goriot", "Le Père Goriot", "Eugénie Grandet", "Illusions perdues", "Vauquer", "Paris", "Restauration", "Madame Bovary"], previo: [] }
};

/* ── 36. Stendhal : Le Rouge et le Noir ── */
E["lit-stendhal"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Stendhal : Le Rouge et le Noir",
  objetivo: {
    que: "Vas a conocer Le Rouge et le Noir y a su héroe ambicioso, Julien Sorel, en la sociedad de la Restauración.",
    corto: "Julien Sorel admire Napoléon. · Julien devient précepteur chez les Rênal. · Stendhal est le pseudonyme d'Henri Beyle.",
    podras: ["Presentar Le Rouge et le Noir (1830): Julien Sorel, hijo de carpintero, ambicioso e hipócrita, admirador de Napoleón, quiere ascender; Madame de Rênal y Mathilde de La Mole.", "Explicar la interpretación clásica del título (rojo = el ejército, negro = la Iglesia) y la definición de la novela: «un miroir qu'on promène le long d'un chemin».", "Saber que Stendhal es el seudónimo de Henri Beyle y citar La Chartreuse de Parme (1839; Fabrice del Dongo); distinguirlo de Balzac."],
    iconos: ["ic2/libro", "ic2/rayo", "ic2/flor"],
    previos: ["Balzac (lección 35) y Napoleón (C1.2, lección 20)."],
    capacidad: "Ahora presentas a Julien Sorel y la ambición en Stendhal."
  },
  requiere: R("b6bz-comedie", "b5np-dates"), recupera: ["b6bz-comedie"],
  conceptos: {
    "b6st-roman": { n: "Le Rouge et le Noir (1830): Julien Sorel (no Rastignac), hijo de carpintero, joven ambicioso e hipócrita, admira en secreto a Napoleón y quiere ascender en la sociedad de la Restauración, que desprecia a los pobres; se hace preceptor en casa de los Rênal; Madame de Rênal (primer amor), Mathilde de La Mole (joven aristócrata); título: le rouge (el ejército) y le noir (la Iglesia), interpretación clásica", b: "gr" },
    "b6st-auteur": { n: "Stendhal: seudónimo de Henri Beyle (no su nombre real); define la novela como «un miroir qu'on promène le long d'un chemin»; La Chartreuse de Parme (1839; Fabrice del Dongo); frente a Balzac (Le Père Goriot, Rastignac, La Comédie humaine, Eugénie Grandet)", b: "gr" }
  },
  video: {
    titulo: "Stendhal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le rouge et le noir", seg: [
        { es: "Hola. Un joven pobre que quiere conquistar la sociedad." } ] },
      { v: "frase", filas: [
          { nota: "Napoleón", p: 1, partes: [["Julien Sorel admire Napoléon.", "-", 1]] },
          { nota: "preceptor", p: 2, partes: [["Julien devient précepteur chez les Rênal.", "-", 2]] },
          { nota: "seudónimo", p: 3, partes: [["Stendhal est le pseudonyme d'Henri Beyle.", "-", 3]] } ], seg: [
        { fr: "Julien Sorel admire Napoléon.", p: 1 }, { fr: "Julien devient précepteur chez les Rênal.", p: 2 }, { fr: "Stendhal est le pseudonyme d'Henri Beyle.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Rojo y negro serían…", o: ["el ejército y la Iglesia", "la sangre y la noche"], a: 0, es: true,
        bien: "¡Sí! Las dos vías de ascenso.", mal: "El ejército y la Iglesia.",
        seg: [ { es: "Pausa. Ejército e Iglesia." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Julien Sorel", "Madame de Rênal", "Mathilde de La Mole", "un miroir", "Henri Beyle", "La Chartreuse de Parme"], seg: [
        { es: "Héroe, título y autor.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Club de lectura", img: "bg-cafe", yo: "camila",
    escena: "En el club de lectura discuten Le Rouge et le Noir.",
    pj: PJ,
    lineas: [
      ["camila", "Julien Sorel me fascine : fils de charpentier, il veut s'élever dans une société qui méprise les pauvres. — Et il admire secrètement Napoléon ! Il devient précepteur chez les Rênal, puis secrétaire du marquis de La Mole.", "Julien Sorel me fascina: hijo de carpintero, quiere ascender en una sociedad que desprecia a los pobres. — ¡Y admira en secreto a Napoleón! Se hace preceptor en casa de los Rênal, luego secretario del marqués de La Mole."],
      ["sofia", "Il aime Madame de Rênal, puis Mathilde de La Mole. Le titre ? L'interprétation classique : le rouge, c'est l'armée, et le noir, l'Église — les deux voies pour réussir.", "Ama a la señora de Rênal, luego a Mathilde de La Mole. ¿El título? La interpretación clásica: el rojo es el ejército y el negro, la Iglesia: las dos vías para triunfar."],
      ["camila", "Stendhal, c'est son vrai nom ? — Non, c'est le pseudonyme d'Henri Beyle. Il disait : « Un roman est un miroir qu'on promène le long d'un chemin. »", "¿Stendhal es su nombre real? — No, es el seudónimo de Henri Beyle. Decía: «Una novela es un espejo que se pasea a lo largo de un camino.»"],
      ["sofia", "Il a aussi écrit La Chartreuse de Parme, en 1839. Attention à ne pas confondre Julien Sorel avec Rastignac, qui est chez Balzac.", "También escribió La cartuja de Parma, en 1839. Ojo con no confundir a Julien Sorel con Rastignac, que es de Balzac."]
    ],
    fijate: "Fíjate: fils de charpentier, s'élever dans une société qui méprise les pauvres, il admire secrètement Napoléon, précepteur chez les Rênal, le rouge (l'armée) et le noir (l'Église), le pseudonyme d'Henri Beyle, « un miroir qu'on promène le long d'un chemin »."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Novela y autor",
      idea: "En Le Rouge et le Noir (1830), Stendhal sigue a Julien Sorel, hijo de carpintero, ambicioso e hipócrita, admirador secreto de Napoleón, que quiere ascender en la sociedad de la Restauración, que desprecia a los pobres. Se hace preceptor en casa de los Rênal y ama a Madame de Rênal y luego a Mathilde de La Mole. Interpretación clásica del título: el rojo (el ejército) y el negro (la Iglesia), las dos vías de ascenso. Stendhal, seudónimo de Henri Beyle, define la novela como «un miroir qu'on promène le long d'un chemin». También escribió La Chartreuse de Parme (1839; Fabrice del Dongo). No confundir con Balzac (Rastignac, Le Père Goriot).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["un jeune ambitieux", "Julien Sorel", "Stendhal"],
        ["l'armée et l'Église", "el rojo y el negro", "Stendhal"],
        ["Henri Beyle", "el nombre real de Stendhal", "Stendhal"],
        ["Un roman est un miroir qu'on promène le long d'un chemin. · miroir", "Una novela es un espejo que se pasea a lo largo de un camino.", "Stendhal"],
        ["La Chartreuse de Parme date de 1839. · Parme", "La cartuja de Parma es de 1839.", "Stendhal"],
        ["Julien Sorel = protagonista · Madame de Rênal = primer amor · Mathilde de La Mole = joven aristócrata · Fabrice del Dongo = héroe de La Chartreuse", "personajes", "resumen"],
        ["Le Rouge et le Noir · La Chartreuse de Parme · Julien Sorel · Henri Beyle", "Stendhal", "Stendhal"],
        ["Le Père Goriot · Rastignac · La Comédie humaine · Eugénie Grandet", "Balzac", "Balzac"],
        ["Dans Le Rouge et le Noir, Julien rêve de gloire comme Napoléon. · Julien", "Julien sueña con la gloria como Napoleón.", "Stendhal"],
        ["Julien admire secrètement Napoléon", "Julien admira en secreto a Napoleón", "Stendhal"],
        ["Julien Sorel veut s'élever dans une société qui méprise les pauvres.", "Julien quiere ascender en una sociedad que desprecia a los pobres.", "Stendhal"]
      ]],
      ej: [["Julien Sorel admire Napoléon.", "Julien Sorel admira a Napoleón."], ["Julien devient précepteur chez les Rênal.", "Julien se convierte en preceptor en casa de los Rênal."], ["Stendhal est le pseudonyme d'Henri Beyle.", "Stendhal es el seudónimo de Henri Beyle."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Stendhal = son vrai nom", "Stendhal = pseudonyme d'Henri Beyle", "Dato."], ["Rastignac, héros du Rouge et le Noir", "Julien Sorel, héros du Rouge et le Noir", "Rastignac es de Balzac."], ["le rouge = l'amour, le noir = la mort", "le rouge = l'armée, le noir = l'Église (interprétation classique)", "Título."]] }
  ],
  ejemplos: [
    { sit: "El héroe de La Chartreuse de Parme:", resp: "Fabrice del Dongo", pasos: ["1839."], porque: "Personajes." },
    { sit: "Eugénie Grandet es de…", resp: "Balzac", pasos: ["No Stendhal."], porque: "Autores." },
    { sit: "El primer amor de Julien:", resp: "Madame de Rênal", pasos: ["Preceptor."], porque: "Personajes." }
  ],
  comprueba: [
    { q: "Le Rouge et le Noir es de…", o: ["1830", "1857"], a: 0, b: "gr", porque: "Restauración." },
    { q: "Julien es hijo de…", o: ["un carpintero", "un marqués"], a: 0, b: "gr", porque: "Origen humilde." },
    { q: "Mathilde de La Mole es…", o: ["una joven aristócrata", "una criada"], a: 0, b: "gr", porque: "Personajes." }
  ],
  practica: [
    { fase: "guiada", c: ["b6st-auteur"], k: "sort", ask: "¿Stendhal o Balzac?", q: "Clasifica.", cats: ["Stendhal", "Balzac"], items: [["Le Rouge et le Noir", 0], ["La Chartreuse de Parme", 0], ["Julien Sorel", 0], ["Henri Beyle", 0], ["Le Père Goriot", 1], ["Rastignac", 1], ["La Comédie humaine", 1], ["Eugénie Grandet", 1]], pista: "Julien o Rastignac.", why: "Autores." },
    { fase: "guiada", c: ["b6st-roman"], k: "choice", ask: "Julien Sorel es…", q: "Elige.", o: ["un jeune ambitieux", "un vieux noble"], a: 0, pista: "Hijo de carpintero.", why: "Ambicioso." },
    { fase: "guiada", c: ["b6st-auteur"], k: "fill", ask: "Un … que se pasea por un camino.", q: "Un roman est un ___ qu'on promène le long d'un chemin.", acc: ["miroir"], pista: "espejo.", why: "<b>miroir</b>." },
    { fase: "indep", c: ["b6st-auteur"], k: "fill", ask: "La cartuja de…", q: "La Chartreuse de ___ date de 1839.", acc: ["Parme"], why: "<b>Parme</b>." },
    { fase: "indep", c: ["b6st-roman"], k: "match", ask: "Une cada personaje con su papel.", q: "Personaje → papel", pairs: [["Julien Sorel", "protagonista"], ["Madame de Rênal", "primer amor"], ["Mathilde de La Mole", "joven aristócrata"], ["Fabrice del Dongo", "héroe de La Chartreuse"]], why: "Personajes." },
    { fase: "indep", c: ["b6st-roman"], k: "spot", ask: "Encuentra el error.", s: "Dans Le Rouge et le Noir , [Rastignac] rêve de gloire comme Napoléon .", fix: "Julien", why: "<b>Julien</b>." },
    { fase: "aplica", c: ["b6st-roman"], k: "choice", ask: "Según la interpretación clásica, el rojo y el negro son…", q: "Elige.", o: ["l'armée et l'Église", "l'amour et la mort"], a: 0, why: "Ejército e Iglesia." },
    { fase: "aplica", c: ["b6st-auteur"], k: "choice", ask: "El nombre real de Stendhal:", q: "Elige.", o: ["Henri Beyle", "Honoré de Balzac"], a: 0, why: "Henri Beyle." },
    { fase: "aplica", c: ["b6st-auteur"], k: "spot", ask: "Encuentra el error.", s: "Stendhal est [le vrai nom] de l'auteur du Rouge et le Noir .", fix: "le pseudonyme", why: "Es <b>le pseudonyme</b> de Henri Beyle." },
    { fase: "dominio", c: ["b6st-roman"], k: "order", ask: "Ordena la frase.", tokens: ["Julien", "admire secrètement", "Napoléon"], why: "<b>Julien admire secrètement Napoléon</b>" },
    { fase: "dominio", c: ["b6st-roman"], k: "choice", ask: "Julien se hace preceptor en casa de…", q: "Elige.", o: ["les Rênal", "les Goriot"], a: 0, why: "Los Rênal." },
    { fase: "dominio", c: ["b6st-roman", "b6st-auteur"], k: "listen", say: "Julien Sorel veut s'élever dans une société qui méprise les pauvres.", acc: ["Julien Sorel veut s'élever dans une société qui méprise les pauvres."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Julien Sorel veut s'élever dans une société qui méprise les pauvres.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Stendhal", "Henri Beyle", "Julien Sorel", "Julien", "Madame de Rênal", "Rênal", "Mathilde de La Mole", "La Mole", "Fabrice del Dongo", "Napoléon", "Balzac", "Rastignac", "Goriot", "Le Rouge et le Noir", "La Chartreuse de Parme", "Parme", "Le Père Goriot", "La Comédie humaine", "Eugénie Grandet"], previo: [] }
};

/* ── 37. Flaubert : Madame Bovary et le travail du style ── */
E["lit-flaubert"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Flaubert : Madame Bovary et le travail du style",
  objetivo: {
    que: "Vas a conocer Madame Bovary, su proceso y el trabajo del estilo de Flaubert: el mot juste, la impersonalidad y el estilo indirecto libre.",
    corto: "Emma Bovary s'ennuie en province. · Flaubert passait des heures sur une seule phrase. · Le bovarysme désigne une insatisfaction romanesque.",
    podras: ["Presentar Madame Bovary (1857): Emma, esposa aburrida de Charles Bovary, médico de provincias, sueña con el amor de las novelas y se hunde en deudas y amantes.", "Explicar el proceso de 1857 (ultraje a la moral; Flaubert absuelto) y el bovarysme (soñar con una vida novelesca distinta).", "Describir su estilo: le mot juste, le gueuloir, l'impersonnalité, le style indirect libre; y otras obras: L'Éducation sentimentale, Salammbô, Un cœur simple."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/flor"],
    previos: ["Romanticismo y realismo (lección 5), analizar un relato (lección 10) y Stendhal (lección 36)."],
    capacidad: "Ahora explicas el bovarismo y el estilo de Flaubert."
  },
  requiere: R("b6rr-realisme", "b6re-temps", "b6st-auteur"), recupera: ["b6re-temps"],
  conceptos: {
    "b6fl-bovary": { n: "Madame Bovary (1857): Emma, esposa de Charles Bovary, médico de provincias, se aburre en provincias, sueña con una vida novelesca (romanesque, no «ordinaria») como en las novelas románticas que lee, y se hunde en deudas y amantes; proceso de 1857 por outrage à la morale: Flaubert absuelto; le bovarysme: la insatisfacción de quien se imagina otra vida; «Madame Bovary, c'est moi»: frase atribuida, no documentada (prudencia); otras obras: L'Éducation sentimentale (un joven y 1848), Salammbô (Cartago), Un cœur simple (una criada fiel)", b: "gr" },
    "b6fl-style": { n: "el trabajo del estilo: Flaubert pasaba horas en una sola frase, leyéndolas en voz alta (le gueuloir); busca le mot juste; l'impersonnalité (el narrador no juzga); le style indirect libre (los pensamientos del personaje sin «dijo que»); lo contrario: l'improvisation, le narrateur bavard qui juge, les vers rimés, le merveilleux", b: "gr" }
  },
  video: {
    titulo: "Flaubert", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "le mot juste", seg: [
        { es: "Hola. Una novela trabajada frase por frase." } ] },
      { v: "frase", filas: [
          { nota: "aburrimiento", p: 1, partes: [["Emma Bovary s'ennuie en province.", "-", 1]] },
          { nota: "estilo", p: 2, partes: [["Flaubert passait des heures sur une seule phrase.", "-", 2]] },
          { nota: "bovarismo", p: 3, partes: [["Le bovarysme désigne une insatisfaction romanesque.", "-", 3]] } ], seg: [
        { fr: "Emma Bovary s'ennuie en province.", p: 1 }, { fr: "Flaubert passait des heures sur une seule phrase.", p: 2 }, { fr: "Le bovarysme désigne une insatisfaction romanesque.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El bovarismo es…", o: ["soñar con una vida distinta", "amar el campo"], a: 0, es: true,
        bien: "¡Sí! Insatisfacción novelesca.", mal: "Es soñar con otra vida.",
        seg: [ { es: "Pausa. Otra vida." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Emma Bovary", "le procès de 1857", "le bovarysme", "le mot juste", "le style indirect libre", "l'impersonnalité"], seg: [
        { es: "Novela, proceso y estilo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Comentario de Flaubert", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara un comentario sobre Madame Bovary con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Emma Bovary s'ennuie en province avec son mari, Charles, un médecin médiocre. Elle rêve d'une vie romanesque, comme dans les romans qu'elle lit. — C'est le bovarysme : imaginer une autre vie et ne jamais être satisfaite.", "Emma Bovary se aburre en provincias con su marido, Charles, un médico mediocre. Sueña con una vida novelesca, como en las novelas que lee. — Es el bovarismo: imaginar otra vida y no estar nunca satisfecha."],
      ["sofia", "En 1857, Flaubert a été jugé pour outrage à la morale, puis acquitté. Et il travaillait énormément : il cherchait toujours le mot juste et passait des heures sur une phrase, qu'il lisait à voix haute dans son « gueuloir ».", "En 1857, Flaubert fue juzgado por ultraje a la moral y luego absuelto. Y trabajaba muchísimo: buscaba siempre la palabra justa y pasaba horas con una frase, que leía en voz alta en su «gueuloir»."],
      ["camila", "Le narrateur ne juge jamais Emma… — C'est l'impersonnalité. Et pour entrer dans les pensées d'Emma sans « elle pensait que », il utilise le style indirect libre.", "El narrador nunca juzga a Emma… — Es la impersonalidad. Y para entrar en los pensamientos de Emma sin «ella pensaba que», usa el estilo indirecto libre."],
      ["sofia", "Et « Madame Bovary, c'est moi » ? Prudence : c'est une phrase attribuée, pas documentée. Lis aussi L'Éducation sentimentale et Un cœur simple.", "¿Y «Madame Bovary soy yo»? Prudencia: es una frase atribuida, no documentada. Lee también La educación sentimental y Un corazón sencillo."]
    ],
    fijate: "Fíjate: s'ennuie en province, une vie romanesque, le bovarysme, jugé pour outrage à la morale (1857), acquitté, le mot juste, le gueuloir, l'impersonnalité, le style indirect libre, une phrase attribuée."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Novela y estilo",
      idea: "Madame Bovary (1857) cuenta la vida de Emma, esposa aburrida de Charles Bovary, médico de provincias, que sueña con el amor de las novelas y se hunde en deudas y amantes. Flaubert fue juzgado en 1857 por «ultraje a la moral» y absuelto. De ahí el bovarysme: la insatisfacción de quien se imagina otra vida, novelesca. Flaubert trabajaba cada frase, leyéndola en voz alta (el «gueuloir»), buscando le mot juste; practica la impersonalidad (el narrador no juzga) y perfecciona el estilo indirecto libre (los pensamientos del personaje sin «dijo que»). La frase «Madame Bovary, c'est moi» es atribuida, no documentada. Otras obras: L'Éducation sentimentale, Salammbô, Un cœur simple.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Estilo de Flaubert?"], [
        ["rêver d'une vie différente", "el bovarismo", "Bovary"],
        ["pour outrage à la morale", "por qué fue juzgado en 1857", "Bovary"],
        ["le style indirect libre", "la técnica para entrar en los pensamientos", "Sí"],
        ["Emma est l'épouse de Charles Bovary. · Bovary", "Emma es la esposa de Charles Bovary.", "Bovary"],
        ["L'Éducation sentimentale est un autre roman de Flaubert. · sentimentale", "La educación sentimental es otra novela de Flaubert.", "Bovary"],
        ["Madame Bovary = una mujer insatisfecha · L'Éducation sentimentale = un joven y 1848 · Salammbô = Cartago · Un cœur simple = una criada fiel", "obras", "resumen"],
        ["le mot juste · le style indirect libre · l'impersonnalité · le travail de la phrase", "rasgos del estilo", "Sí"],
        ["l'improvisation · le narrateur bavard qui juge · les vers rimés · le merveilleux", "rasgos ajenos", "No"],
        ["Emma Bovary rêve d'une vie romanesque, comme dans les romans qu'elle lit. · romanesque", "Emma sueña con una vida novelesca.", "Bovary"],
        ["Emma s'ennuie en province", "Emma se aburre en provincias", "Bovary"],
        ["le gueuloir", "la lectura en voz alta de sus frases", "Sí"],
        ["Flaubert cherchait toujours le mot juste et passait des heures sur une phrase.", "Flaubert buscaba la palabra justa y pasaba horas con una frase.", "Sí"]
      ]],
      ej: [["Emma Bovary s'ennuie en province.", "Emma Bovary se aburre en provincias."], ["Flaubert passait des heures sur une seule phrase.", "Flaubert pasaba horas con una sola frase."], ["Le bovarysme désigne une insatisfaction romanesque.", "El bovarismo designa una insatisfacción novelesca."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Madame Bovary, c'est moi » = citation sûre", "phrase attribuée, non documentée", "Prudencia."], ["Emma rêve d'une vie ordinaire.", "Emma rêve d'une vie romanesque.", "Bovarismo."], ["Flaubert a été condamné.", "Flaubert a été acquitté.", "1857."]] }
  ],
  ejemplos: [
    { sit: "Salammbô transcurre en…", resp: "Cartago", pasos: ["Novela histórica."], porque: "Obras." },
    { sit: "Un cœur simple cuenta la vida de…", resp: "una criada fiel", pasos: ["Félicité."], porque: "Obras." },
    { sit: "¿La improvisación es estilo de Flaubert?", resp: "No", pasos: ["Trabajo de la frase."], porque: "Estilo." }
  ],
  comprueba: [
    { q: "Madame Bovary es de…", o: ["1857", "1830"], a: 0, b: "gr", porque: "Proceso." },
    { q: "En el proceso, Flaubert fue…", o: ["absuelto", "condenado"], a: 0, b: "gr", porque: "1857." },
    { q: "La impersonalidad significa que el narrador…", o: ["no juzga", "juzga mucho"], a: 0, b: "gr", porque: "Estilo." }
  ],
  practica: [
    { fase: "guiada", c: ["b6fl-style"], k: "sort", ask: "¿Rasgo del estilo de Flaubert o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["le mot juste", 0], ["le style indirect libre", 0], ["l'impersonnalité", 0], ["le travail de la phrase", 0], ["l'improvisation", 1], ["le narrateur bavard qui juge", 1], ["les vers rimés", 1], ["le merveilleux", 1]], pista: "Trabajo y precisión.", why: "Estilo." },
    { fase: "guiada", c: ["b6fl-bovary"], k: "choice", ask: "El bovarismo es…", q: "Elige.", o: ["rêver d'une vie différente", "aimer la campagne"], a: 0, pista: "Insatisfacción.", why: "Otra vida." },
    { fase: "guiada", c: ["b6fl-bovary"], k: "fill", ask: "El apellido del marido.", q: "Emma est l'épouse de Charles ___ .", acc: ["Bovary"], pista: "Bov…", why: "<b>Bovary</b>." },
    { fase: "indep", c: ["b6fl-bovary"], k: "fill", ask: "La educación…", q: "L'Éducation ___ est un autre roman de Flaubert.", acc: ["sentimentale"], why: "<b>sentimentale</b>." },
    { fase: "indep", c: ["b6fl-bovary"], k: "match", ask: "Une cada obra con su tema.", q: "Obra → tema", pairs: [["Madame Bovary", "una mujer insatisfecha"], ["L'Éducation sentimentale", "un joven y 1848"], ["Salammbô", "Cartago"], ["Un cœur simple", "una criada fiel"]], why: "Obras." },
    { fase: "indep", c: ["b6fl-bovary"], k: "spot", ask: "Encuentra el error.", s: "Emma Bovary rêve d'une vie [ordinaire] , comme dans les romans qu'elle lit .", fix: "romanesque", why: "<b>romanesque</b>." },
    { fase: "aplica", c: ["b6fl-bovary"], k: "choice", ask: "En 1857 Flaubert fue juzgado…", q: "Elige.", o: ["pour outrage à la morale", "pour vol"], a: 0, why: "Ultraje a la moral." },
    { fase: "aplica", c: ["b6fl-style"], k: "choice", ask: "La técnica para dar los pensamientos de Emma sin «elle pensait que»:", q: "Elige.", o: ["le style indirect libre", "le discours direct"], a: 0, why: "Indirecto libre." },
    { fase: "aplica", c: ["b6fl-bovary"], k: "spot", ask: "Encuentra el error.", s: "En 1857 , Flaubert , jugé pour outrage à la morale , a été [condamné] .", fix: "acquitté", why: "<b>acquitté</b>." },
    { fase: "dominio", c: ["b6fl-bovary"], k: "order", ask: "Ordena la frase.", tokens: ["Emma", "s'ennuie", "en province"], why: "<b>Emma s'ennuie en province</b>" },
    { fase: "dominio", c: ["b6fl-bovary"], k: "choice", ask: "«Madame Bovary, c'est moi» es…", q: "Elige.", o: ["une phrase attribuée, non documentée", "une citation sûre"], a: 0, why: "Atribuida." },
    { fase: "dominio", c: ["b6fl-style", "b6fl-bovary"], k: "listen", say: "Flaubert cherchait toujours le mot juste et passait des heures sur une phrase.", acc: ["Flaubert cherchait toujours le mot juste et passait des heures sur une phrase."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Flaubert cherchait toujours le mot juste et passait des heures sur une phrase.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Flaubert", "Gustave Flaubert", "Emma", "Emma Bovary", "Charles Bovary", "Bovary", "Madame Bovary", "L'Éducation sentimentale", "Salammbô", "Un cœur simple", "Félicité", "Carthage"], previo: [] }
};

/* ── 38. Zola et le naturalisme : Les Rougon-Macquart ── */
E["lit-zola"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Zola et le naturalisme : Les Rougon-Macquart",
  objetivo: {
    que: "Vas a conocer a Zola y el naturalismo: el método científico aplicado a la novela y el ciclo de los Rougon-Macquart.",
    corto: "Germinal raconte la vie des mineurs du Nord. · Zola se documentait longuement avant d'écrire. · Dans L'Assommoir, l'alcool détruit Gervaise.",
    podras: ["Explicar el naturalismo: aplicar a la novela el método científico, estudiar la herencia y el medio, documentarse rigurosamente (no es amor a la naturaleza).", "Presentar Les Rougon-Macquart (20 novelas, 1871-1893, «Histoire naturelle et sociale d'une famille sous le Second Empire»): Germinal (la mina, la huelga, Étienne Lantier), L'Assommoir (el alcohol, Gervaise), Nana, Au Bonheur des Dames, La Bête humaine.", "Situar a Zola entre los realistas y naturalistas (Balzac, Flaubert, Maupassant) frente a los románticos, y recordar «J'accuse…!»."],
    iconos: ["ic2/libro", "ic2/rayo", "ic2/libros"],
    previos: ["Romanticismo, realismo y naturalismo (lección 5) y la prensa y «J'accuse…!» (C1.2, lección 15)."],
    capacidad: "Ahora explicas el método naturalista y las grandes novelas de Zola."
  },
  requiere: R("b6rr-realisme", "b5ps-histoire"), recupera: ["b6rr-realisme"],
  conceptos: {
    "b6zo-naturalisme": { n: "Émile Zola funda le naturalisme (no el amor a la naturaleza): aplicar a la novela el método científico, estudiar la influencia de l'hérédité y du milieu, documentación rigurosa (se documentaba largamente antes de escribir); realistas y naturalistas: Zola, Balzac, Maupassant, Flaubert; románticos: Lamartine, Musset, Chateaubriand, Vigny; intervino en el caso Dreyfus con «J'accuse…!»", b: "gr" },
    "b6zo-cycle": { n: "Les Rougon-Macquart: 20 novelas (1871-1893), «Histoire naturelle et sociale d'une famille sous le Second Empire»; Germinal (1885): la vida y la rebelión de los mineurs du Nord (no marinos), la huelga, Étienne Lantier; L'Assommoir (1877): el alcoholismo obrero destruye a Gervaise; Nana; Au Bonheur des Dames: los grandes almacenes; La Bête humaine: el ferrocarril", b: "gr" }
  },
  video: {
    titulo: "Zola", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le naturalisme", seg: [
        { es: "Hola. La novela como un experimento científico." } ] },
      { v: "frase", filas: [
          { nota: "mina", p: 1, partes: [["Germinal raconte la vie des mineurs du Nord.", "-", 1]] },
          { nota: "documentación", p: 2, partes: [["Zola se documentait longuement avant d'écrire.", "-", 2]] },
          { nota: "alcohol", p: 3, partes: [["Dans L'Assommoir, l'alcool détruit Gervaise.", "-", 3]] } ], seg: [
        { fr: "Germinal raconte la vie des mineurs du Nord.", p: 1 }, { fr: "Zola se documentait longuement avant d'écrire.", p: 2 }, { fr: "Dans L'Assommoir, l'alcool détruit Gervaise.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El naturalismo es…", o: ["el método científico aplicado a la novela", "el amor a la naturaleza"], a: 0, es: true,
        bien: "¡Sí! Herencia y medio.", mal: "Es un método: herencia y medio.",
        seg: [ { es: "Pausa. Método científico." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le naturalisme", "l'hérédité", "le milieu", "Les Rougon-Macquart", "Germinal", "L'Assommoir"], seg: [
        { es: "Método y ciclo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En una mina del Norte", img: "bg-montana", yo: "camila",
    escena: "Camila y Hugo visitan una antigua mina en el norte de Francia.",
    pj: PJ,
    lineas: [
      ["hugo", "C'est ici que Zola est venu se documenter pour Germinal. Zola se documentait longuement avant d'écrire : il descendait dans les mines, il prenait des notes.", "Aquí vino Zola a documentarse para Germinal. Zola se documentaba largamente antes de escribir: bajaba a las minas, tomaba notas."],
      ["camila", "Germinal raconte la vie des mineurs du Nord, non ? — Oui, leur misère et leur révolte : la grève, avec Étienne Lantier. C'est un roman naturaliste.", "Germinal cuenta la vida de los mineros del Norte, ¿no? — Sí, su miseria y su rebelión: la huelga, con Étienne Lantier. Es una novela naturalista."],
      ["hugo", "Le naturalisme, ce n'est pas l'amour de la nature : c'est appliquer au roman la méthode scientifique, étudier l'hérédité et le milieu. Germinal fait partie des Rougon-Macquart, vingt romans sur une famille sous le Second Empire.", "El naturalismo no es el amor a la naturaleza: es aplicar a la novela el método científico, estudiar la herencia y el medio. Germinal forma parte de los Rougon-Macquart, veinte novelas sobre una familia bajo el Segundo Imperio."],
      ["camila", "Et les autres ? — Dans L'Assommoir, l'alcool détruit Gervaise ; Au Bonheur des Dames décrit un grand magasin ; La Bête humaine, le chemin de fer. Et c'est le même Zola qui a écrit « J'accuse…! ».", "¿Y las otras? — En La taberna, el alcohol destruye a Gervaise; El paraíso de las damas describe unos grandes almacenes; La bestia humana, el ferrocarril. Y es el mismo Zola el que escribió «J'accuse…!»."]
    ],
    fijate: "Fíjate: se documentait longuement, les mineurs du Nord, leur misère et leur révolte, Étienne Lantier, le naturalisme (la méthode scientifique, l'hérédité, le milieu), Les Rougon-Macquart (vingt romans), L'Assommoir, Au Bonheur des Dames, « J'accuse…! »."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Método y ciclo",
      idea: "Émile Zola funda el naturalismo: aplicar a la novela el método científico y estudiar la influencia de la herencia y del medio, con una documentación rigurosa (no es «amor a la naturaleza»). Su ciclo Les Rougon-Macquart (20 novelas, 1871-1893), «Histoire naturelle et sociale d'une famille sous le Second Empire», incluye L'Assommoir (1877: el alcoholismo obrero, Gervaise), Germinal (1885: los mineros del Norte, la huelga, Étienne Lantier), Nana, Au Bonheur des Dames (los grandes almacenes) y La Bête humaine (el ferrocarril). Zola pertenece, con Balzac, Flaubert y Maupassant, a la corriente realista y naturalista, frente a los románticos (Lamartine, Musset, Chateaubriand, Vigny). Intervino en el caso Dreyfus con «J'accuse…!».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Corriente"], [
        ["Germinal", "la novela de la mina", "Réalisme / naturalisme"],
        ["l'hérédité et le milieu", "lo que estudia el naturalismo", "Réalisme / naturalisme"],
        ["20", "las novelas de Les Rougon-Macquart", "Réalisme / naturalisme"],
        ["Les Rougon-Macquart · Rougon", "el ciclo de Zola", "Réalisme / naturalisme"],
        ["Au Bonheur des Dames décrit un grand magasin. · Bonheur", "El paraíso de las damas describe unos grandes almacenes.", "Réalisme / naturalisme"],
        ["Germinal = la mina y la huelga · L'Assommoir = el alcoholismo · Au Bonheur des Dames = los grandes almacenes · La Bête humaine = el ferrocarril", "novelas", "resumen"],
        ["Zola · Balzac · Maupassant · Flaubert", "realistas y naturalistas", "Réalisme / naturalisme"],
        ["Lamartine · Musset · Chateaubriand · Vigny", "románticos", "Romantisme"],
        ["Germinal raconte la vie des mineurs du nord de la France. · mineurs", "Germinal cuenta la vida de los mineros del norte.", "Réalisme / naturalisme"],
        ["Zola a fondé le naturalisme", "Zola fundó el naturalismo", "Réalisme / naturalisme"],
        ["la méthode scientifique appliquée au roman", "el sentido de «naturalisme»", "Réalisme / naturalisme"],
        ["Dans Germinal, Zola décrit la misère et la révolte des mineurs.", "En Germinal, Zola describe la miseria y la rebelión de los mineros.", "Réalisme / naturalisme"]
      ]],
      ej: [["Germinal raconte la vie des mineurs du Nord.", "Germinal cuenta la vida de los mineros del norte."], ["Zola se documentait longuement avant d'écrire.", "Zola se documentaba largamente antes de escribir."], ["Dans L'Assommoir, l'alcool détruit Gervaise.", "En L'Assommoir, el alcohol destruye a Gervaise."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["naturalisme = amour de la nature", "naturalisme = méthode scientifique appliquée au roman", "Movimiento literario."], ["Germinal raconte la vie des marins.", "Germinal raconte la vie des mineurs.", "La mina."], ["Zola, poète romantique", "Zola, romancier naturaliste", "Corriente."]] }
  ],
  ejemplos: [
    { sit: "La Bête humaine trata de…", resp: "el ferrocarril", pasos: ["Zola."], porque: "Novelas." },
    { sit: "Musset es…", resp: "Romantisme", pasos: ["Poeta romántico."], porque: "Corrientes." },
    { sit: "El héroe de la huelga en Germinal:", resp: "Étienne Lantier", pasos: ["Minero."], porque: "Personajes." }
  ],
  comprueba: [
    { q: "Germinal se publica en…", o: ["1885", "1830"], a: 0, b: "gr", porque: "Rougon-Macquart." },
    { q: "Gervaise es la heroína de…", o: ["L'Assommoir", "Nana"], a: 0, b: "gr", porque: "Alcohol." },
    { q: "Les Rougon-Macquart transcurre bajo…", o: ["el Segundo Imperio", "la Revolución"], a: 0, b: "gr", porque: "Subtítulo." }
  ],
  practica: [
    { fase: "guiada", c: ["b6zo-naturalisme"], k: "sort", ask: "¿Realismo / naturalismo o romanticismo?", q: "Clasifica.", cats: ["Réalisme / naturalisme", "Romantisme"], items: [["Zola", 0], ["Balzac", 0], ["Maupassant", 0], ["Flaubert", 0], ["Lamartine", 1], ["Musset", 1], ["Chateaubriand", 1], ["Vigny", 1]], pista: "¿Sociedad o yo?", why: "Corrientes." },
    { fase: "guiada", c: ["b6zo-cycle"], k: "choice", ask: "La novela de la mina:", q: "Elige.", o: ["Germinal", "Nana"], a: 0, pista: "Mineros.", why: "Germinal." },
    { fase: "guiada", c: ["b6zo-cycle"], k: "fill", ask: "Les … -Macquart.", q: "Les ___ -Macquart.", acc: ["Rougon"], pista: "Roug…", why: "<b>Rougon</b>." },
    { fase: "indep", c: ["b6zo-cycle"], k: "fill", ask: "Au … des Dames.", q: "Au ___ des Dames décrit un grand magasin.", acc: ["Bonheur"], why: "<b>Bonheur</b>." },
    { fase: "indep", c: ["b6zo-cycle"], k: "match", ask: "Une cada novela con su tema.", q: "Novela → tema", pairs: [["Germinal", "la mina y la huelga"], ["L'Assommoir", "el alcoholismo"], ["Au Bonheur des Dames", "los grandes almacenes"], ["La Bête humaine", "el ferrocarril"]], why: "Novelas." },
    { fase: "indep", c: ["b6zo-cycle"], k: "spot", ask: "Encuentra el error.", s: "Germinal raconte la vie des [marins] du nord de la France .", fix: "mineurs", why: "<b>mineurs</b>." },
    { fase: "aplica", c: ["b6zo-naturalisme"], k: "choice", ask: "Lo que estudia el naturalismo:", q: "Elige.", o: ["l'hérédité et le milieu", "le rêve et l'inconscient"], a: 0, why: "Herencia y medio." },
    { fase: "aplica", c: ["b6zo-cycle"], k: "choice", ask: "¿Cuántas novelas tiene Les Rougon-Macquart?", q: "Elige.", o: ["20", "90"], a: 0, why: "Veinte." },
    { fase: "aplica", c: ["b6zo-naturalisme"], k: "spot", ask: "Encuentra el error.", s: "Le naturalisme , c'est [l'amour de la nature] .", fix: "la méthode scientifique appliquée au roman", why: "Es <b>la méthode scientifique appliquée au roman</b>." },
    { fase: "dominio", c: ["b6zo-naturalisme"], k: "order", ask: "Ordena la frase.", tokens: ["Zola", "a fondé", "le naturalisme"], why: "<b>Zola a fondé le naturalisme</b>" },
    { fase: "dominio", c: ["b6zo-cycle"], k: "choice", ask: "En L'Assommoir, lo que destruye a Gervaise es…", q: "Elige.", o: ["l'alcool", "la mine"], a: 0, why: "Alcohol." },
    { fase: "dominio", c: ["b6zo-cycle", "b6zo-naturalisme"], k: "listen", say: "Dans Germinal, Zola décrit la misère et la révolte des mineurs.", acc: ["Dans Germinal, Zola décrit la misère et la révolte des mineurs."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans Germinal, Zola décrit la misère et la révolte des mineurs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Émile Zola", "Zola", "Les Rougon-Macquart", "Rougon", "Macquart", "Germinal", "Étienne Lantier", "L'Assommoir", "Gervaise", "Nana", "Au Bonheur des Dames", "La Bête humaine", "Second Empire", "Nord", "Balzac", "Maupassant", "Flaubert", "Lamartine", "Musset", "Chateaubriand", "Vigny", "Dreyfus"], previo: [] }
};

/* ── 39. Maupassant, maître de la nouvelle ── */
E["lit-maupassant"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Maupassant, maître de la nouvelle",
  objetivo: {
    que: "Vas a conocer a Maupassant, maestro del relato breve, y la forma de la nouvelle con su final sorpresa.",
    corto: "La Parure se termine par une chute inattendue. · Le Horla raconte une lente descente dans la folie. · Bel-Ami réussit grâce à ses relations.",
    podras: ["Definir la nouvelle (relato breve, pocos personajes, final marcado: la chute) y distinguirla de la novela; Maupassant, discípulo de Flaubert, escribe unas 300 nouvelles y seis novelas.", "Asociar relatos y temas: Boule de suif (1880, la hipocresía burguesa en la guerra de 1870), La Parure (apariencias y destino), Le Horla (1887, locura y fantástico).", "Presentar sus novelas: Bel-Ami (1885, Georges Duroy asciende gracias a las mujeres y la prensa), Une vie, Pierre et Jean."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/rayo"],
    previos: ["Analizar un relato (lección 10), los géneros (lección 1) y Flaubert (lección 37)."],
    capacidad: "Ahora analizas una nouvelle de Maupassant y su chute."
  },
  requiere: R("b6re-temps", "b6gr-genres", "b6fl-style"), recupera: ["b6re-temps"],
  conceptos: {
    "b6mp-nouvelle": { n: "la nouvelle: relato breve (no «novela»: falso amigo), pocos personajes, final marcado: la chute (el final sorprendente); Guy de Maupassant, discípulo de Flaubert, escribe unas 300 nouvelles: Boule de suif (1880: la hipocresía burguesa durante la guerra de 1870; lo revela), La Parure (las apariencias y el destino; chute inattendue), Le Horla (1887: diario de un hombre acosado por un ser invisible; locura y fantastique, no realista), Aux champs; observa la sociedad con una mirada irónica", b: "gr" },
    "b6mp-romans": { n: "seis novelas (romans): Bel-Ami (1885: Georges Duroy asciende gracias a las mujeres y la prensa; triunfa gracias a sus relaciones), Une vie, Pierre et Jean, Mont-Oriol", b: "gr" }
  },
  video: {
    titulo: "Maupassant", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "la chute", seg: [
        { es: "Hola. El maestro del relato breve." } ] },
      { v: "frase", filas: [
          { nota: "final", p: 1, partes: [["La Parure se termine par une chute inattendue.", "-", 1]] },
          { nota: "fantástico", p: 2, partes: [["Le Horla raconte une lente descente dans la folie.", "-", 2]] },
          { nota: "ascenso", p: 3, partes: [["Bel-Ami réussit grâce à ses relations.", "-", 3]] } ], seg: [
        { fr: "La Parure se termine par une chute inattendue.", p: 1 }, { fr: "Le Horla raconte une lente descente dans la folie.", p: 2 }, { fr: "Bel-Ami réussit grâce à ses relations.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Una «nouvelle» es…", o: ["un relato breve", "una novela"], a: 0, es: true,
        bien: "¡Sí! Falso amigo.", mal: "Es un relato breve.",
        seg: [ { es: "Pausa. Relato breve." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la nouvelle", "la chute", "Boule de suif", "La Parure", "Le Horla", "Bel-Ami"], seg: [
        { es: "Relatos y novelas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un relato en el tren", img: "bg-cafe", yo: "camila",
    escena: "Camila termina La Parure en el tren y comenta el final con Hugo.",
    pj: PJ,
    lineas: [
      ["camila", "Je viens de finir La Parure… quelle fin ! — C'est la chute : la nouvelle se termine par une chute inattendue. C'est la marque de Maupassant.", "Acabo de terminar El collar… ¡qué final! — Es la chute: el relato termina con un giro inesperado. Es la marca de Maupassant."],
      ["hugo", "Maupassant, disciple de Flaubert, a écrit environ trois cents nouvelles. Boule de suif l'a rendu célèbre, en 1880 : l'hypocrisie bourgeoise pendant la guerre de 1870.", "Maupassant, discípulo de Flaubert, escribió unos trescientos relatos. Bola de sebo lo hizo célebre, en 1880: la hipocresía burguesa durante la guerra de 1870."],
      ["camila", "Et Le Horla ? — C'est une nouvelle fantastique : le narrateur croit être hanté par un être invisible. Le Horla raconte une lente descente dans la folie.", "¿Y El Horla? — Es un relato fantástico: el narrador cree estar acosado por un ser invisible. El Horla cuenta un lento descenso a la locura."],
      ["hugo", "Il a aussi écrit six romans, comme Bel-Ami : Georges Duroy réussit grâce aux femmes et à la presse. Dans ses nouvelles, Maupassant observe la société avec un regard ironique.", "También escribió seis novelas, como Bel-Ami: Georges Duroy triunfa gracias a las mujeres y a la prensa. En sus relatos, Maupassant observa la sociedad con una mirada irónica."]
    ],
    fijate: "Fíjate: la chute (une fin inattendue), disciple de Flaubert, environ trois cents nouvelles, Boule de suif (1880), l'hypocrisie bourgeoise, une nouvelle fantastique, une lente descente dans la folie, six romans, Bel-Ami, un regard ironique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Relatos y novelas",
      idea: "Guy de Maupassant, discípulo de Flaubert, escribe unas 300 nouvelles y seis novelas. La nouvelle es un relato breve (no una «novela»: falso amigo), con pocos personajes y un final marcado, la chute. Boule de suif (1880), que lo revela, denuncia la hipocresía burguesa durante la guerra de 1870; La Parure juega con las apariencias y el final sorprendente; Le Horla (1887), diario de un hombre acosado por un ser invisible, explora la locura y lo fantástico. Sus novelas Bel-Ami (1885; Georges Duroy asciende gracias a las mujeres y la prensa), Une vie, Pierre et Jean y Mont-Oriol retratan ambición y desilusión. Observa la sociedad con una mirada irónica.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Género"], [
        ["un récit bref", "la nouvelle", "Nouvelle"],
        ["fantastique", "el registro de Le Horla", "Nouvelle"],
        ["la fin surprenante", "la chute", "Nouvelle"],
        ["Boule de suif a rendu Maupassant célèbre. · suif", "Bola de sebo hizo célebre a Maupassant.", "Nouvelle"],
        ["Maupassant était le disciple de Flaubert. · Flaubert", "Maupassant era discípulo de Flaubert.", "Nouvelle"],
        ["Boule de suif = hipocresía burguesa · Le Horla = locura y fantástico · La Parure = apariencias y destino · Bel-Ami = ascenso social", "obras", "resumen"],
        ["Boule de suif · La Parure · Le Horla · Aux champs", "relatos", "Nouvelle"],
        ["Bel-Ami · Une vie · Pierre et Jean · Mont-Oriol", "novelas", "Roman"],
        ["Le Horla est une nouvelle fantastique où le narrateur croit être hanté. · fantastique", "El Horla es un relato fantástico.", "Nouvelle"],
        ["La nouvelle se termine par une chute", "El relato termina con un giro", "Nouvelle"],
        ["environ trois cents nouvelles", "la producción de Maupassant", "Nouvelle"],
        ["Dans ses nouvelles, Maupassant observe la société avec un regard ironique.", "En sus relatos, Maupassant observa la sociedad con ironía.", "Nouvelle"]
      ]],
      ej: [["La Parure se termine par une chute inattendue.", "El collar termina con un giro inesperado."], ["Le Horla raconte une lente descente dans la folie.", "El Horla cuenta un lento descenso a la locura."], ["Bel-Ami réussit grâce à ses relations.", "Bel-Ami triunfa gracias a sus relaciones."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["nouvelle = novela", "nouvelle = relato breve / cuento", "Falso amigo."], ["Le Horla, nouvelle réaliste", "Le Horla, nouvelle fantastique", "Locura."], ["Bel-Ami, une nouvelle", "Bel-Ami, un roman", "Novela."]] }
  ],
  ejemplos: [
    { sit: "Pierre et Jean es…", resp: "Roman", pasos: ["Novela."], porque: "Géneros." },
    { sit: "Aux champs es…", resp: "Nouvelle", pasos: ["Relato."], porque: "Géneros." },
    { sit: "Maupassant escribió unos…", resp: "environ trois cents nouvelles", pasos: ["Producción."], porque: "Obra." }
  ],
  comprueba: [
    { q: "Boule de suif es de…", o: ["1880", "1857"], a: 0, b: "gr", porque: "Revelación." },
    { q: "Le Horla explora…", o: ["la locura", "la mina"], a: 0, b: "gr", porque: "Fantástico." },
    { q: "Bel-Ami asciende gracias a…", o: ["las mujeres y la prensa", "la herencia"], a: 0, b: "gr", porque: "Ascenso social." }
  ],
  practica: [
    { fase: "guiada", c: ["b6mp-nouvelle", "b6mp-romans"], k: "sort", ask: "¿Relato (nouvelle) o novela (roman)?", q: "Clasifica.", cats: ["Nouvelle", "Roman"], items: [["Boule de suif", 0], ["La Parure", 0], ["Le Horla", 0], ["Aux champs", 0], ["Bel-Ami", 1], ["Une vie", 1], ["Pierre et Jean", 1], ["Mont-Oriol", 1]], pista: "¿Breve o largo?", why: "Géneros." },
    { fase: "guiada", c: ["b6mp-nouvelle"], k: "choice", ask: "La nouvelle es…", q: "Elige.", o: ["un récit bref", "un long roman"], a: 0, pista: "Falso amigo.", why: "Relato breve." },
    { fase: "guiada", c: ["b6mp-nouvelle"], k: "fill", ask: "Bola de…", q: "Boule de ___ a rendu Maupassant célèbre.", acc: ["suif"], pista: "sebo.", why: "<b>suif</b>." },
    { fase: "indep", c: ["b6mp-nouvelle"], k: "fill", ask: "El maestro de Maupassant.", q: "Maupassant était le disciple de ___ .", acc: ["Flaubert"], why: "<b>Flaubert</b>." },
    { fase: "indep", c: ["b6mp-nouvelle", "b6mp-romans"], k: "match", ask: "Une cada obra con su tema.", q: "Obra → tema", pairs: [["Boule de suif", "hipocresía burguesa"], ["Le Horla", "locura y fantástico"], ["La Parure", "apariencias y destino"], ["Bel-Ami", "ascenso social"]], why: "Obras." },
    { fase: "indep", c: ["b6mp-nouvelle"], k: "spot", ask: "Encuentra el error.", s: "Le Horla est une nouvelle [réaliste] où le narrateur croit être hanté .", fix: "fantastique", why: "<b>fantastique</b>." },
    { fase: "aplica", c: ["b6mp-nouvelle"], k: "choice", ask: "La chute es…", q: "Elige.", o: ["la fin surprenante", "le début du récit"], a: 0, why: "Final sorprendente." },
    { fase: "aplica", c: ["b6mp-romans"], k: "choice", ask: "Georges Duroy es el héroe de…", q: "Elige.", o: ["Bel-Ami", "Le Horla"], a: 0, why: "Bel-Ami." },
    { fase: "aplica", c: ["b6mp-romans"], k: "spot", ask: "Encuentra el error.", s: "Bel-Ami est [une nouvelle de quelques pages] .", fix: "un roman", why: "<b>un roman</b>." },
    { fase: "dominio", c: ["b6mp-nouvelle"], k: "order", ask: "Ordena la frase.", tokens: ["La nouvelle", "se termine", "par une chute"], why: "<b>La nouvelle se termine par une chute</b>" },
    { fase: "dominio", c: ["b6mp-nouvelle"], k: "choice", ask: "El registro de Le Horla:", q: "Elige.", o: ["fantastique", "épique"], a: 0, why: "Fantástico." },
    { fase: "dominio", c: ["b6mp-nouvelle", "b6mp-romans"], k: "listen", say: "Dans ses nouvelles, Maupassant observe la société avec un regard ironique.", acc: ["Dans ses nouvelles, Maupassant observe la société avec un regard ironique."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans ses nouvelles, Maupassant observe la société avec un regard ironique.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Guy de Maupassant", "Maupassant", "Flaubert", "Boule de suif", "La Parure", "Le Horla", "Aux champs", "Bel-Ami", "Georges Duroy", "Une vie", "Pierre et Jean", "Mont-Oriol"], previo: [] }
};

/* ── 40. Baudelaire : Les Fleurs du mal ── */
E["lit-baudelaire"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Baudelaire : Les Fleurs du mal",
  objetivo: {
    que: "Vas a profundizar en Les Fleurs du mal: la tensión entre Spleen e Ideal, las correspondencias y el poema en prosa.",
    corto: "L'albatros symbolise le poète maladroit sur terre. · Les parfums, les couleurs et les sons se répondent. · Baudelaire a été condamné pour immoralité.",
    podras: ["Explicar la tensión central: el Spleen (hastío, angustia, el tiempo que mata, la prisión) y el Idéal (belleza, viaje, amor, armonía); spleen = hastío, no el órgano.", "Comentar L'Albatros (el poeta incomprendido), Correspondances (las sinestesias) y L'Invitation au voyage (la evasión).", "Situar el proceso de 1857 (seis poemas condenados por inmoralidad), el proyecto de «extraer la belleza del Mal» y el poema en prosa (Le Spleen de Paris)."],
    iconos: ["ic2/flor", "ic2/lapiz", "ic2/libro"],
    previos: ["La poesía del siglo XIX (lección 6) y las figuras de estilo (lección 2)."],
    capacidad: "Ahora comentas un poema de Baudelaire entre spleen e ideal."
  },
  requiere: R("b6px-baudelaire", "b6fs-analogie"), recupera: ["b6px-baudelaire"],
  conceptos: {
    "b6bd-spleen": { n: "Les Fleurs du mal (1857) de Charles Baudelaire marcan la poesía moderna; tensión central: Spleen et Idéal; le spleen = hastío y angustia (no el bazo): l'ennui, l'angoisse, le temps qui tue, la prison; l'Idéal: la beauté, le voyage, l'amour, l'harmonie; proyecto: «extraire la beauté du Mal»; proceso de 1857: condenado por inmoralidad, seis poemas prohibidos", b: "gr" },
    "b6bd-poemes": { n: "poemas: L'Albatros (el pájaro torpe en tierra simboliza al poeta incomprendido, no al rey), Correspondances (la sinestesia: «Les parfums, les couleurs et les sons se répondent»), L'Invitation au voyage (la evasión), Spleen (la angustia); inventa el poème en prose (Le Spleen de Paris)", b: "gr" }
  },
  video: {
    titulo: "Las flores del mal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "Spleen et Idéal", seg: [
        { es: "Hola. Extraer la belleza del mal." } ] },
      { v: "frase", filas: [
          { nota: "albatros", p: 1, partes: [["L'albatros symbolise le poète maladroit sur terre.", "-", 1]] },
          { nota: "sinestesia", p: 2, partes: [["Les parfums, les couleurs et les sons se répondent.", "-", 2]] },
          { nota: "proceso", p: 3, partes: [["Baudelaire a été condamné pour immoralité.", "-", 3]] } ], seg: [
        { fr: "L'albatros symbolise le poète maladroit sur terre.", p: 1 }, { fr: "Les parfums, les couleurs et les sons se répondent.", p: 2 }, { fr: "Baudelaire a été condamné pour immoralité.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "En Baudelaire, «spleen» es…", o: ["hastío y angustia", "el bazo"], a: 0, es: true,
        bien: "¡Sí! Sentido baudelairiano.", mal: "Es hastío, melancolía.",
        seg: [ { es: "Pausa. Hastío." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le Spleen", "l'Idéal", "L'Albatros", "Correspondances", "L'Invitation au voyage", "le poème en prose"], seg: [
        { es: "Tensión, poemas y forma.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Comentario de L'Albatros", img: "bg-noche", yo: "camila",
    escena: "Camila prepara el comentario de L'Albatros para el examen.",
    pj: PJ,
    lineas: [
      ["camila", "Dans L'Albatros, les marins se moquent de l'oiseau qui ne sait pas marcher sur le pont. — L'albatros symbolise le poète maladroit sur terre, incompris des hommes, mais magnifique dans le ciel.", "En El albatros, los marineros se burlan del pájaro que no sabe caminar en la cubierta. — El albatros simboliza al poeta torpe en la tierra, incomprendido por los hombres, pero magnífico en el cielo."],
      ["sofia", "Tout le recueil oscille entre le Spleen et l'Idéal. Le spleen, ce n'est pas l'organe : c'est l'ennui, l'angoisse, le temps qui tue. L'Idéal, c'est la beauté, l'amour, le voyage — comme dans L'Invitation au voyage.", "Todo el poemario oscila entre el Spleen y el Ideal. El spleen no es el órgano: es el hastío, la angustia, el tiempo que mata. El Ideal es la belleza, el amor, el viaje, como en La invitación al viaje."],
      ["camila", "Et Correspondances ? — « Les parfums, les couleurs et les sons se répondent » : c'est la synesthésie. Baudelaire voulait extraire la beauté du mal.", "¿Y Correspondencias? — «Los perfumes, los colores y los sonidos se responden»: es la sinestesia. Baudelaire quería extraer la belleza del mal."],
      ["sofia", "En 1857, il a été condamné pour immoralité : six poèmes ont été interdits. Et il a inventé le poème en prose, dans Le Spleen de Paris.", "En 1857 fue condenado por inmoralidad: seis poemas fueron prohibidos. E inventó el poema en prosa, en El spleen de París."]
    ],
    fijate: "Fíjate: l'albatros symbolise le poète, incompris, le Spleen et l'Idéal, le spleen (l'ennui, l'angoisse), L'Invitation au voyage, « Les parfums, les couleurs et les sons se répondent » (la synesthésie), extraire la beauté du mal, condamné pour immoralité (1857), le poème en prose."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Spleen e Ideal",
      idea: "Les Fleurs du mal (1857) de Charles Baudelaire marcan la poesía moderna. El poeta oscila entre el Spleen (hastío, angustia, el tiempo que mata, la prisión; no el sentido médico de «bazo») y el Idéal (belleza, amor, viaje, armonía). Condenado por inmoralidad en 1857 (seis poemas prohibidos), Baudelaire quiere «extraer la belleza del Mal». Poemas célebres: L'Albatros (el poeta incomprendido, torpe en tierra), Correspondances (sinestesia: «Les parfums, les couleurs et les sons se répondent»), L'Invitation au voyage (la evasión), Spleen (la angustia). También inventa el poema en prosa (Le Spleen de Paris).",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Polo"], [
        ["l'ennui et l'angoisse", "el sentido de «spleen»", "Spleen"],
        ["le poète incompris", "lo que simboliza el albatros", "Idéal"],
        ["le poème en prose", "la forma inventada en Le Spleen de Paris", "forme"],
        ["Les Fleurs du mal · mal", "Las flores del mal", "œuvre"],
        ["Les parfums, les couleurs et les sons se répondent. · répondent", "Los perfumes, los colores y los sonidos se responden.", "Idéal"],
        ["L'Albatros = el poeta incomprendido · Correspondances = sinestesia · L'Invitation au voyage = evasión · Spleen = angustia", "poemas", "resumen"],
        ["l'ennui · l'angoisse · le temps qui tue · la prison", "el Spleen", "Spleen"],
        ["la beauté · le voyage · l'amour · l'harmonie", "el Ideal", "Idéal"],
        ["Dans L'Albatros, l'oiseau représente le poète incompris. · poète", "En El albatros, el pájaro representa al poeta.", "Idéal"],
        ["Les parfums, les couleurs et les sons se répondent", "Los perfumes, los colores y los sonidos se responden", "Idéal"],
        ["condamné pour immoralité (1857)", "el proceso", "œuvre"],
        ["Baudelaire voulait extraire la beauté du mal.", "Baudelaire quería extraer la belleza del mal.", "œuvre"]
      ]],
      ej: [["L'albatros symbolise le poète maladroit sur terre.", "El albatros simboliza al poeta torpe en la tierra."], ["Les parfums, les couleurs et les sons se répondent.", "Los perfumes, los colores y los sonidos se responden."], ["Baudelaire a été condamné pour immoralité.", "Baudelaire fue condenado por inmoralidad."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["spleen = rate (sens médical)", "spleen = ennui, mélancolie", "Sentido baudelairiano."], ["l'albatros représente le roi", "l'albatros représente le poète incompris", "Símbolo."], ["Baudelaire, acquitté en 1857", "Baudelaire, condamné en 1857 (six poèmes interdits)", "Proceso."]] }
  ],
  ejemplos: [
    { sit: "L'Invitation au voyage expresa…", resp: "la evasión", pasos: ["Ideal."], porque: "Poemas." },
    { sit: "«Le temps qui tue» pertenece al…", resp: "Spleen", pasos: ["Angustia."], porque: "Polos." },
    { sit: "La armonía pertenece al…", resp: "Idéal", pasos: ["Belleza."], porque: "Polos." }
  ],
  comprueba: [
    { q: "Les Fleurs du mal son de…", o: ["1857", "1885"], a: 0, b: "gr", porque: "Proceso." },
    { q: "¿Cuántos poemas fueron prohibidos?", o: ["seis", "veinte"], a: 0, b: "gr", porque: "1857." },
    { q: "Le Spleen de Paris es…", o: ["poesía en prosa", "una novela"], a: 0, b: "gr", porque: "Forma." }
  ],
  practica: [
    { fase: "guiada", c: ["b6bd-spleen"], k: "sort", ask: "¿Spleen o Ideal?", q: "Clasifica.", cats: ["Spleen", "Idéal"], items: [["l'ennui", 0], ["l'angoisse", 0], ["le temps qui tue", 0], ["la prison", 0], ["la beauté", 1], ["le voyage", 1], ["l'amour", 1], ["l'harmonie", 1]], pista: "¿Angustia o belleza?", why: "Polos." },
    { fase: "guiada", c: ["b6bd-spleen"], k: "choice", ask: "«Spleen» en Baudelaire:", q: "Elige.", o: ["l'ennui et l'angoisse", "un organe"], a: 0, pista: "Hastío.", why: "Hastío." },
    { fase: "guiada", c: ["b6bd-poemes"], k: "fill", ask: "Las flores del…", q: "Les Fleurs du ___ .", acc: ["mal"], pista: "mal.", why: "<b>mal</b>." },
    { fase: "indep", c: ["b6bd-poemes"], k: "fill", ask: "Se responden (verbo).", q: "Les parfums, les couleurs et les sons se ___ .", acc: ["répondent"], why: "<b>répondent</b>." },
    { fase: "indep", c: ["b6bd-poemes"], k: "match", ask: "Une cada poema con su tema.", q: "Poema → tema", pairs: [["L'Albatros", "el poeta incomprendido"], ["Correspondances", "sinestesia"], ["L'Invitation au voyage", "evasión"], ["Spleen", "angustia"]], why: "Poemas." },
    { fase: "indep", c: ["b6bd-poemes"], k: "spot", ask: "Encuentra el error.", s: "Dans L'Albatros , l'oiseau représente le [roi] incompris .", fix: "poète", why: "<b>poète</b>." },
    { fase: "aplica", c: ["b6bd-poemes"], k: "choice", ask: "Lo que simboliza el albatros:", q: "Elige.", o: ["le poète incompris", "le marin courageux"], a: 0, why: "El poeta." },
    { fase: "aplica", c: ["b6bd-poemes"], k: "choice", ask: "La forma que Baudelaire inventa en Le Spleen de Paris:", q: "Elige.", o: ["le poème en prose", "le sonnet"], a: 0, why: "Poema en prosa." },
    { fase: "aplica", c: ["b6bd-spleen"], k: "spot", ask: "Encuentra el error.", s: "En 1857 , Baudelaire a été [acquitté] pour Les Fleurs du mal .", fix: "condamné", why: "<b>condamné</b>: seis poemas prohibidos." },
    { fase: "dominio", c: ["b6bd-poemes"], k: "order", ask: "Ordena el verso.", tokens: ["Les parfums,", "les couleurs et les sons", "se répondent"], why: "<b>Les parfums, les couleurs et les sons se répondent</b>" },
    { fase: "dominio", c: ["b6bd-spleen"], k: "choice", ask: "El proyecto de Baudelaire:", q: "Elige.", o: ["extraire la beauté du mal", "décrire la société"], a: 0, why: "Belleza del mal." },
    { fase: "dominio", c: ["b6bd-spleen", "b6bd-poemes"], k: "listen", say: "Baudelaire voulait extraire la beauté du mal.", acc: ["Baudelaire voulait extraire la beauté du mal."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Baudelaire voulait extraire la beauté du mal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Charles Baudelaire", "Baudelaire", "Les Fleurs du mal", "L'Albatros", "Correspondances", "L'Invitation au voyage", "Spleen", "Le Spleen de Paris", "Idéal"], previo: [] }
};

/* ── 41. Rimbaud et Verlaine ── */
E["lit-rimbaud-verlaine"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Rimbaud et Verlaine",
  objetivo: {
    que: "Vas a profundizar en Verlaine, el poeta de la música, y Rimbaud, el poeta vidente, y en su relación tormentosa.",
    corto: "Rimbaud a écrit Le Bateau ivre à seize ans. · « De la musique avant toute chose », écrit Verlaine. · Je est un autre.",
    podras: ["Presentar a Verlaine: la musicalidad y los versos impares (Art poétique, 1874: «De la musique avant toute chose»), Poèmes saturniens, Romances sans paroles; la «Chanson d'automne», mensaje en clave de la Resistencia en 1944; la expresión «poètes maudits».", "Presentar a Rimbaud, poeta precoz y vidente: «Je est un autre», el «dérèglement de tous les sens»; Le Bateau ivre (1871, a los dieciséis años), Une saison en enfer (1873), Illuminations; deja la poesía hacia los 20 años y parte a África.", "Contar su relación, que termina con un disparo en Bruselas (1873)."],
    iconos: ["ic2/nota", "ic2/lapiz", "ic2/rayo"],
    previos: ["La poesía del siglo XIX (lección 6) y Baudelaire (lección 40)."],
    capacidad: "Ahora distingues la poética de Verlaine de la de Rimbaud."
  },
  requiere: R("b6px-symbolisme", "b6bd-poemes"), recupera: ["b6px-symbolisme"],
  conceptos: {
    "b6rv-verlaine": { n: "Paul Verlaine busca la musicalidad: «De la musique avant toute chose» (Art poétique, 1874; es de Verlaine, no de Rimbaud), versos impares; Poèmes saturniens, Romances sans paroles; la «Chanson d'automne» («Les sanglots longs des violons de l'automne…») sirvió de mensaje en clave a la Resistencia en 1944; inventa la expresión «les poètes maudits»", b: "gr" },
    "b6rv-rimbaud": { n: "Arthur Rimbaud, poeta precoz: quiere ser voyant por un «long, immense et raisonné dérèglement de tous les sens»; «Je est un autre» (fórmula deliberada sobre la identidad poética, no un error involuntario); Le Bateau ivre (1871, escrito a los dieciséis años), Une saison en enfer (1873), Illuminations (prosa poética); abandona la poesía hacia los 20 años y parte a África; su relación tormentosa con Verlaine termina con un disparo en Bruselas (1873)", b: "gr" }
  },
  video: {
    titulo: "Rimbaud y Verlaine", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "le voyant", seg: [
        { es: "Hola. La música de Verlaine y la videncia de Rimbaud." } ] },
      { v: "frase", filas: [
          { nota: "precoz", p: 1, partes: [["Rimbaud a écrit Le Bateau ivre à seize ans.", "-", 1]] },
          { nota: "música", p: 2, partes: [["« De la musique avant toute chose », écrit Verlaine.", "-", 2]] },
          { nota: "identidad", p: 3, partes: [["Je est un autre.", "-", 3]] } ], seg: [
        { fr: "Rimbaud a écrit Le Bateau ivre à seize ans.", p: 1 }, { fr: "De la musique avant toute chose, écrit Verlaine.", p: 2 }, { fr: "Je est un autre.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Je est un autre» es…", o: ["una fórmula deliberada", "un error gramatical involuntario"], a: 0, es: true,
        bien: "¡Sí! La identidad poética.", mal: "Es deliberado.",
        seg: [ { es: "Pausa. Deliberado." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Art poétique", "Chanson d'automne", "les poètes maudits", "Le Bateau ivre", "Une saison en enfer", "le voyant"], seg: [
        { es: "Dos poéticas, una relación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Radio Londres", img: "bg-noche", yo: "camila",
    escena: "Hugo le cuenta a Camila cómo un poema de Verlaine anunció el desembarco.",
    pj: PJ,
    lineas: [
      ["hugo", "En 1944, la radio de Londres a diffusé « Les sanglots longs des violons de l'automne… » : c'était un message codé pour la Résistance avant le débarquement. C'est la Chanson d'automne de Verlaine.", "En 1944, la radio de Londres difundió «Los largos sollozos de los violines del otoño…»: era un mensaje en clave para la Resistencia antes del desembarco. Es la Canción de otoño de Verlaine."],
      ["camila", "Verlaine, c'est le poète de la musique ? — Oui : « De la musique avant toute chose », écrit-il dans son Art poétique. Il aime les vers impairs. Et c'est lui qui a inventé l'expression « poètes maudits ».", "¿Verlaine es el poeta de la música? — Sí: «La música antes que nada», escribe en su Arte poética. Le gustan los versos impares. Y fue él quien inventó la expresión «poetas malditos»."],
      ["hugo", "Rimbaud, lui, voulait devenir voyant par le dérèglement de tous les sens. Il a écrit Le Bateau ivre à seize ans ! Puis Une saison en enfer et les Illuminations.", "Rimbaud, en cambio, quería volverse vidente mediante el desarreglo de todos los sentidos. ¡Escribió El barco ebrio a los dieciséis años! Luego Una temporada en el infierno y las Iluminaciones."],
      ["camila", "Et leur histoire ? — Une relation orageuse qui finit par un coup de revolver à Bruxelles, en 1873. Ensuite, Rimbaud abandonne la poésie vers vingt ans et part en Afrique.", "¿Y su historia? — Una relación tormentosa que termina con un disparo de revólver en Bruselas, en 1873. Después, Rimbaud abandona la poesía hacia los veinte años y parte a África."]
    ],
    fijate: "Fíjate: un message codé pour la Résistance (1944), la Chanson d'automne, « De la musique avant toute chose », l'Art poétique, les vers impairs, les « poètes maudits », voyant, le dérèglement de tous les sens, Le Bateau ivre (à seize ans), un coup de revolver à Bruxelles (1873)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos poetas",
      idea: "Paul Verlaine busca la musicalidad: «De la musique avant toute chose» (Art poétique, 1874), con versos impares (Poèmes saturniens, Romances sans paroles). Su «Chanson d'automne» («Les sanglots longs des violons de l'automne…») sirvió de mensaje en clave a la Resistencia en 1944. Inventa la expresión «poètes maudits». Arthur Rimbaud, poeta precoz, quiere ser «voyant» por un «long, immense et raisonné dérèglement de tous les sens»; «Je est un autre» es una fórmula deliberada sobre la identidad poética. Obras: Le Bateau ivre (1871, escrito a los dieciséis años), Une saison en enfer (1873), Illuminations (prosa poética). Su relación tormentosa terminó con un disparo en Bruselas (1873); Rimbaud abandona la poesía hacia los 20 años y parte a África.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Poeta"], [
        ["Rimbaud", "el autor de «Je est un autre»", "Rimbaud"],
        ["la musique", "la estética de Verlaine", "Verlaine"],
        ["Chanson d'automne", "el poema de la Resistencia en 1944", "Verlaine"],
        ["Les sanglots longs des violons de l'automne… · violons", "Los largos sollozos de los violines del otoño…", "Verlaine"],
        ["Une saison en enfer · enfer", "Una temporada en el infierno", "Rimbaud"],
        ["Le Bateau ivre = Rimbaud · Poèmes saturniens = Verlaine · Illuminations = Rimbaud (prosa poética) · Art poétique = Verlaine (1874)", "obras", "resumen"],
        ["le voyant · Je est un autre · Le Bateau ivre · le départ en Afrique", "Rimbaud", "Rimbaud"],
        ["De la musique avant toute chose · Chanson d'automne · les poètes maudits (expression) · Poèmes saturniens", "Verlaine", "Verlaine"],
        ["« De la musique avant toute chose » est un vers de Verlaine. · Verlaine", "Ese verso es de Verlaine.", "Verlaine"],
        ["De la musique avant toute chose", "La música antes que nada", "Verlaine"],
        ["un coup de revolver à Bruxelles (1873)", "el final de su relación", "vie"],
        ["Rimbaud voulait devenir voyant par le dérèglement de tous les sens.", "Rimbaud quería volverse vidente por el desarreglo de los sentidos.", "Rimbaud"]
      ]],
      ej: [["Rimbaud a écrit Le Bateau ivre à seize ans.", "Rimbaud escribió El barco ebrio a los dieciséis años."], ["« De la musique avant toute chose », écrit Verlaine.", "«La música antes que nada», escribe Verlaine."], ["Je est un autre.", "Yo es otro."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Je est un autre » est une faute involontaire.", "C'est une formule délibérée : l'identité poétique.", "Fórmula célebre."], ["« De la musique avant toute chose » (Rimbaud)", "« De la musique avant toute chose » (Verlaine)", "Art poétique."], ["Rimbaud a écrit jusqu'à sa mort.", "Rimbaud abandonne la poésie vers vingt ans.", "Parte a África."]] }
  ],
  ejemplos: [
    { sit: "Illuminations es de…", resp: "Rimbaud", pasos: ["Prosa poética."], porque: "Obras." },
    { sit: "Romances sans paroles es de…", resp: "Verlaine", pasos: ["Música."], porque: "Obras." },
    { sit: "La expresión «poètes maudits» la inventa…", resp: "Verlaine", pasos: ["1884."], porque: "Historia." }
  ],
  comprueba: [
    { q: "Le Bateau ivre es de…", o: ["1871", "1857"], a: 0, b: "gr", porque: "Rimbaud joven." },
    { q: "La relación termina en…", o: ["Bruselas, 1873", "París, 1944"], a: 0, b: "gr", porque: "Disparo." },
    { q: "Verlaine prefiere los versos…", o: ["impares", "alejandrinos"], a: 0, b: "gr", porque: "Música." }
  ],
  practica: [
    { fase: "guiada", c: ["b6rv-verlaine", "b6rv-rimbaud"], k: "sort", ask: "¿Rimbaud o Verlaine?", q: "Clasifica.", cats: ["Rimbaud", "Verlaine"], items: [["le voyant", 0], ["Je est un autre", 0], ["Le Bateau ivre", 0], ["le départ en Afrique", 0], ["De la musique avant toute chose", 1], ["Chanson d'automne", 1], ["les poètes maudits (expression)", 1], ["Poèmes saturniens", 1]], pista: "Vidente o músico.", why: "Poetas." },
    { fase: "guiada", c: ["b6rv-rimbaud"], k: "choice", ask: "«Je est un autre»:", q: "¿De quién es?", o: ["Rimbaud", "Verlaine"], a: 0, pista: "El vidente.", why: "Rimbaud." },
    { fase: "guiada", c: ["b6rv-verlaine"], k: "fill", ask: "Los largos sollozos de los…", q: "Les sanglots longs des ___ de l'automne…", acc: ["violons"], pista: "violines.", why: "<b>violons</b>." },
    { fase: "indep", c: ["b6rv-rimbaud"], k: "fill", ask: "Una temporada en el…", q: "Une saison en ___ .", acc: ["enfer"], why: "<b>enfer</b>." },
    { fase: "indep", c: ["b6rv-verlaine", "b6rv-rimbaud"], k: "match", ask: "Une cada obra con su poeta.", q: "Obra → poeta", pairs: [["Le Bateau ivre", "Rimbaud"], ["Poèmes saturniens", "Verlaine"], ["Illuminations", "Rimbaud (prosa poética)"], ["Art poétique", "Verlaine (1874)"]], why: "Obras." },
    { fase: "indep", c: ["b6rv-verlaine"], k: "spot", ask: "Encuentra el error.", s: "« De la musique avant toute chose » est un vers de [Rimbaud] .", fix: "Verlaine", why: "<b>Verlaine</b>." },
    { fase: "aplica", c: ["b6rv-verlaine"], k: "choice", ask: "La estética de Verlaine:", q: "Elige.", o: ["la musique", "la peinture"], a: 0, why: "Música." },
    { fase: "aplica", c: ["b6rv-verlaine"], k: "choice", ask: "En 1944, el mensaje en clave de la Resistencia fue…", q: "Elige.", o: ["Chanson d'automne", "Le Bateau ivre"], a: 0, why: "Verlaine." },
    { fase: "aplica", c: ["b6rv-rimbaud"], k: "spot", ask: "Encuentra el error.", s: "Rimbaud a écrit Le Bateau ivre à [quarante] ans .", fix: "seize", why: "A los <b>seize</b> (16) años." },
    { fase: "dominio", c: ["b6rv-verlaine"], k: "order", ask: "Ordena el verso.", tokens: ["De la musique", "avant", "toute chose"], why: "<b>De la musique avant toute chose</b>" },
    { fase: "dominio", c: ["b6rv-rimbaud"], k: "choice", ask: "«Je est un autre» es…", q: "Elige.", o: ["une formule délibérée sur l'identité poétique", "une faute d'orthographe"], a: 0, why: "Deliberado." },
    { fase: "dominio", c: ["b6rv-rimbaud", "b6rv-verlaine"], k: "listen", say: "Rimbaud voulait devenir voyant par le dérèglement de tous les sens.", acc: ["Rimbaud voulait devenir voyant par le dérèglement de tous les sens."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Rimbaud voulait devenir voyant par le dérèglement de tous les sens.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Paul Verlaine", "Verlaine", "Arthur Rimbaud", "Rimbaud", "Bruxelles", "Afrique", "Londres", "Résistance", "Art poétique", "Chanson d'automne", "Poèmes saturniens", "Romances sans paroles", "Le Bateau ivre", "Une saison en enfer", "Illuminations"], previo: [] }
};

/* ── 42. Dumas et Verne : le roman populaire ── */
E["lit-dumas-verne"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Dumas et Verne : le roman populaire",
  objetivo: {
    que: "Vas a conocer la novela popular del siglo XIX: el folletín, las aventuras históricas de Dumas y la anticipación de Verne.",
    corto: "Tous pour un, un pour tous ! · Le capitaine Nemo commande le Nautilus. · Phileas Fogg fait le tour du monde en quatre-vingts jours.",
    podras: ["Explicar el roman-feuilleton: novela publicada por entregas en los periódicos, con suspense.", "Presentar a Dumas (novela histórica de aventuras): Les Trois Mousquetaires (1844; d'Artagnan con Athos, Porthos y Aramis; «Tous pour un, un pour tous !»), Le Comte de Monte-Cristo (Edmond Dantès), La Reine Margot.", "Presentar a Verne (anticipación científica, Voyages extraordinaires): Vingt mille lieues sous les mers (Nemo, el Nautilus), Le Tour du monde en quatre-vingts jours (Phileas Fogg, Passepartout), De la Terre à la Lune, Michel Strogoff."],
    iconos: ["ic2/rayo", "ic2/libro", "ic2/mundo"],
    previos: ["Victor Hugo (lección 34) y la prensa (C1.2, lección 15)."],
    capacidad: "Ahora presentas a Dumas y Verne y la novela popular."
  },
  requiere: R("b6hu-oeuvres", "b5ps-vocab"), recupera: ["b6hu-oeuvres"],
  conceptos: {
    "b6dv-dumas": { n: "le roman-feuilleton: novela publicada por entregas en los periódicos, con suspense; Alexandre Dumas, novela histórica y de aventuras: Les Trois Mousquetaires (1844; los tres son Athos, Porthos y Aramis; d'Artagnan es el cuarto; «Tous pour un, un pour tous !»), Le Comte de Monte-Cristo (Edmond Dantès), La Reine Margot", b: "gr" },
    "b6dv-verne": { n: "Jules Verne crea la novela de anticipación científica: les Voyages extraordinaires; Vingt mille lieues sous les mers (le capitaine Nemo commande le Nautilus), Le Tour du monde en quatre-vingts jours (Phileas Fogg, Passepartout; quatre-vingts, no quatre-vingt-dix), De la Terre à la Lune, Michel Strogoff; sus novelas hicieron soñar a generaciones de lectores", b: "gr" }
  },
  video: {
    titulo: "Dumas y Verne", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "le roman populaire", seg: [
        { es: "Hola. Aventuras para millones de lectores." } ] },
      { v: "frase", filas: [
          { nota: "mosqueteros", p: 1, partes: [["Tous pour un, un pour tous !", "-", 1]] },
          { nota: "Nemo", p: 2, partes: [["Le capitaine Nemo commande le Nautilus.", "-", 2]] },
          { nota: "80 días", p: 3, partes: [["Phileas Fogg fait le tour du monde en quatre-vingts jours.", "-", 3]] } ], seg: [
        { fr: "Tous pour un, un pour tous !", p: 1 }, { fr: "Le capitaine Nemo commande le Nautilus.", p: 2 }, { fr: "Phileas Fogg fait le tour du monde en quatre-vingts jours.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Los tres mosqueteros son…", o: ["Athos, Porthos y Aramis", "d'Artagnan, Athos y Porthos"], a: 0, es: true,
        bien: "¡Sí! D'Artagnan es el cuarto.", mal: "Athos, Porthos y Aramis.",
        seg: [ { es: "Pausa. Athos, Porthos y Aramis." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le roman-feuilleton", "Les Trois Mousquetaires", "Monte-Cristo", "le Nautilus", "Phileas Fogg", "l'anticipation"], seg: [
        { es: "Folletín, historia y anticipación.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Libros de infancia", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo recuerdan los libros de aventuras de su infancia.",
    pj: PJ,
    lineas: [
      ["camila", "Enfant, j'adorais Les Trois Mousquetaires : d'Artagnan, Athos, Porthos… — Attention : les trois mousquetaires sont Athos, Porthos et Aramis ; d'Artagnan, c'est le quatrième ! « Tous pour un, un pour tous ! »", "De niña me encantaba Los tres mosqueteros: d'Artagnan, Athos, Porthos… — Ojo: los tres mosqueteros son Athos, Porthos y Aramis; ¡d'Artagnan es el cuarto! «¡Todos para uno y uno para todos!»"],
      ["hugo", "Dumas publiait ses romans en feuilleton dans les journaux : chaque épisode finissait sur un suspense. Il a aussi écrit Le Comte de Monte-Cristo, la vengeance d'Edmond Dantès.", "Dumas publicaba sus novelas por entregas en los periódicos: cada episodio terminaba con suspense. También escribió El conde de Montecristo, la venganza de Edmond Dantès."],
      ["camila", "Et moi, je préférais Jules Verne ! Le capitaine Nemo commande le Nautilus dans Vingt mille lieues sous les mers. — Et Phileas Fogg fait le tour du monde en quatre-vingts jours avec Passepartout.", "¡Y yo prefería a Julio Verne! El capitán Nemo dirige el Nautilus en Veinte mil leguas de viaje submarino. — Y Phileas Fogg da la vuelta al mundo en ochenta días con Passepartout."],
      ["hugo", "Verne a inventé le roman d'anticipation scientifique : De la Terre à la Lune, Michel Strogoff… Les romans de Jules Verne ont fait rêver des générations de lecteurs.", "Verne inventó la novela de anticipación científica: De la Tierra a la Luna, Miguel Strogoff… Las novelas de Julio Verne han hecho soñar a generaciones de lectores."]
    ],
    fijate: "Fíjate: Athos, Porthos et Aramis (d'Artagnan, le quatrième), « Tous pour un, un pour tous ! », en feuilleton, un suspense, Edmond Dantès, le capitaine Nemo, le Nautilus, quatre-vingts jours, Passepartout, le roman d'anticipation scientifique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Folletín y aventura",
      idea: "El siglo XIX inventa la novela popular, publicada por entregas en los periódicos: el roman-feuilleton, con suspense al final de cada episodio. Alexandre Dumas escribe novelas históricas de aventuras: Les Trois Mousquetaires (1844; los tres son Athos, Porthos y Aramis; d'Artagnan es el cuarto; «Tous pour un, un pour tous !»), Le Comte de Monte-Cristo (Edmond Dantès), La Reine Margot. Jules Verne crea la novela de anticipación científica (Voyages extraordinaires): Vingt mille lieues sous les mers (el capitán Nemo y el Nautilus), Le Tour du monde en quatre-vingts jours (Phileas Fogg y Passepartout), De la Terre à la Lune, Michel Strogoff.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["Athos, Porthos, Aramis", "los tres mosqueteros", "Dumas"],
        ["le capitaine Nemo", "el capitán del Nautilus", "Verne"],
        ["un roman publié en épisodes", "el roman-feuilleton", "Dumas"],
        ["Tous pour un, un pour tous ! · tous", "¡Todos para uno y uno para todos!", "Dumas"],
        ["Le Comte de Monte-Cristo · Monte", "El conde de Montecristo", "Dumas"],
        ["d'Artagnan = Les Trois Mousquetaires · Edmond Dantès = Le Comte de Monte-Cristo · Nemo = Vingt mille lieues sous les mers · Phileas Fogg = Le Tour du monde en 80 jours", "personajes y obras", "resumen"],
        ["les mousquetaires · Monte-Cristo · La Reine Margot · le roman historique", "Dumas", "Dumas"],
        ["le Nautilus · De la Terre à la Lune · Michel Strogoff · l'anticipation", "Verne", "Verne"],
        ["Phileas Fogg fait le tour du monde en quatre-vingts jours. · quatre-vingts", "Phileas Fogg da la vuelta al mundo en ochenta días.", "Verne"],
        ["Le capitaine Nemo commande le Nautilus", "El capitán Nemo dirige el Nautilus", "Verne"],
        ["Passepartout", "el criado de Phileas Fogg", "Verne"],
        ["Les romans de Jules Verne ont fait rêver des générations de lecteurs.", "Las novelas de Verne hicieron soñar a generaciones.", "Verne"]
      ]],
      ej: [["Tous pour un, un pour tous !", "¡Todos para uno y uno para todos!"], ["Le capitaine Nemo commande le Nautilus.", "El capitán Nemo dirige el Nautilus."], ["Phileas Fogg fait le tour du monde en quatre-vingts jours.", "Phileas Fogg da la vuelta al mundo en ochenta días."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["d'Artagnan est l'un des trois mousquetaires.", "Les trois sont Athos, Porthos et Aramis.", "Detalle clásico."], ["en quatre-vingt-dix jours", "en quatre-vingts jours", "Ochenta días."], ["Nemo, héros de Dumas", "Nemo, héros de Verne", "Nautilus."]] }
  ],
  ejemplos: [
    { sit: "Michel Strogoff es de…", resp: "Verne", pasos: ["Aventura."], porque: "Obras." },
    { sit: "La Reine Margot es de…", resp: "Dumas", pasos: ["Novela histórica."], porque: "Obras." },
    { sit: "El héroe de Le Comte de Monte-Cristo:", resp: "Edmond Dantès", pasos: ["Venganza."], porque: "Personajes." }
  ],
  comprueba: [
    { q: "Les Trois Mousquetaires es de…", o: ["1844", "1904"], a: 0, b: "gr", porque: "Dumas." },
    { q: "Verne crea la novela de…", o: ["anticipación científica", "análisis psicológico"], a: 0, b: "gr", porque: "Voyages extraordinaires." },
    { q: "El folletín se publicaba en…", o: ["los periódicos", "el teatro"], a: 0, b: "gr", porque: "Por entregas." }
  ],
  practica: [
    { fase: "guiada", c: ["b6dv-dumas", "b6dv-verne"], k: "sort", ask: "¿Dumas o Verne?", q: "Clasifica.", cats: ["Dumas", "Verne"], items: [["les mousquetaires", 0], ["Monte-Cristo", 0], ["La Reine Margot", 0], ["le roman historique", 0], ["le Nautilus", 1], ["De la Terre à la Lune", 1], ["Michel Strogoff", 1], ["l'anticipation", 1]], pista: "Historia o futuro.", why: "Autores." },
    { fase: "guiada", c: ["b6dv-dumas"], k: "choice", ask: "Los tres mosqueteros:", q: "Elige.", o: ["Athos, Porthos, Aramis", "d'Artagnan, Athos, Porthos"], a: 0, pista: "D'Artagnan es el cuarto.", why: "Athos, Porthos, Aramis." },
    { fase: "guiada", c: ["b6dv-dumas"], k: "fill", ask: "Uno para…", q: "Tous pour un, un pour ___ !", acc: ["tous"], pista: "todos.", why: "<b>tous</b>." },
    { fase: "indep", c: ["b6dv-dumas"], k: "fill", ask: "El conde de …-Cristo.", q: "Le Comte de ___ -Cristo.", acc: ["Monte"], why: "<b>Monte</b>." },
    { fase: "indep", c: ["b6dv-dumas", "b6dv-verne"], k: "match", ask: "Une cada personaje con su novela.", q: "Personaje → novela", pairs: [["d'Artagnan", "Les Trois Mousquetaires"], ["Edmond Dantès", "Le Comte de Monte-Cristo"], ["Nemo", "Vingt mille lieues sous les mers"], ["Phileas Fogg", "Le Tour du monde en 80 jours"]], why: "Personajes." },
    { fase: "indep", c: ["b6dv-verne"], k: "spot", ask: "Encuentra el error.", s: "Phileas Fogg fait le tour du monde en [quatre-vingt-dix] jours .", fix: "quatre-vingts", why: "<b>quatre-vingts</b>." },
    { fase: "aplica", c: ["b6dv-verne"], k: "choice", ask: "El capitán del Nautilus:", q: "Elige.", o: ["le capitaine Nemo", "Phileas Fogg"], a: 0, why: "Nemo." },
    { fase: "aplica", c: ["b6dv-dumas"], k: "choice", ask: "El roman-feuilleton es…", q: "Elige.", o: ["un roman publié en épisodes", "un roman en vers"], a: 0, why: "Por entregas." },
    { fase: "aplica", c: ["b6dv-verne"], k: "spot", ask: "Encuentra el error.", s: "Le capitaine Nemo est un héros [d'Alexandre Dumas] .", fix: "de Jules Verne", why: "<b>de Jules Verne</b>." },
    { fase: "dominio", c: ["b6dv-verne"], k: "order", ask: "Ordena la frase.", tokens: ["Le capitaine Nemo", "commande", "le Nautilus"], why: "<b>Le capitaine Nemo commande le Nautilus</b>" },
    { fase: "dominio", c: ["b6dv-verne"], k: "choice", ask: "El criado de Phileas Fogg:", q: "Elige.", o: ["Passepartout", "Porthos"], a: 0, why: "Passepartout." },
    { fase: "dominio", c: ["b6dv-verne", "b6dv-dumas"], k: "listen", say: "Les romans de Jules Verne ont fait rêver des générations de lecteurs.", acc: ["Les romans de Jules Verne ont fait rêver des générations de lecteurs."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Les romans de Jules Verne ont fait rêver des générations de lecteurs.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Alexandre Dumas", "Dumas", "Jules Verne", "Verne", "d'Artagnan", "Athos", "Porthos", "Aramis", "Edmond Dantès", "Monte-Cristo", "Nemo", "Nautilus", "Phileas Fogg", "Passepartout", "Michel Strogoff", "La Reine Margot", "Les Trois Mousquetaires", "Le Comte de Monte-Cristo", "Vingt mille lieues sous les mers", "Le Tour du monde en quatre-vingts jours", "De la Terre à la Lune", "Lune"], previo: [] }
};

/* ── 43. Proust : À la recherche du temps perdu ── */
E["lit-proust"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Proust : À la recherche du temps perdu",
  objetivo: {
    que: "Vas a conocer À la recherche du temps perdu: la memoria involuntaria, el tiempo y la sociedad aristocrática.",
    corto: "Longtemps, je me suis couché de bonne heure. · Le goût de la madeleine fait revivre Combray. · Les phrases de Proust sont très longues.",
    podras: ["Situar la obra: 7 volúmenes (1913-1927), de Du côté de chez Swann a Le Temps retrouvé; premio Goncourt 1919.", "Explicar la memoria involuntaria (la madeleine hace resurgir la infancia en Combray) y la expresión «une madeleine de Proust».", "Presentar los temas (memoria, tiempo, amor, celos, arte, sociedad) y los personajes (Swann, Odette, Albertine, Charlus, los Guermantes); las frases largas y sinuosas."],
    iconos: ["ic2/libro", "ic2/cafe", "ic2/lapiz"],
    previos: ["El siglo XX (lección 7) y analizar un relato (lección 10)."],
    capacidad: "Ahora explicas la memoria proustiana y usas la expresión «madeleine de Proust»."
  },
  requiere: R("b6vt-auteurs", "b6re-narrateur"), recupera: ["b6vt-auteurs"],
  conceptos: {
    "b6pr-oeuvre": { n: "À la recherche du temps perdu, de Marcel Proust: 7 volúmenes (1913-1927), de Du côté de chez Swann (1913) a Le Temps retrouvé (1927); premio Goncourt 1919; incipit: «Longtemps, je me suis couché de bonne heure»; frases largas y sinuosas; análisis psicológico; personajes: Swann (esteta enamorado de Odette), Albertine (amada del narrador), le baron de Charlus (barón extravagante), les Guermantes (alta aristocracia)", b: "gr" },
    "b6pr-memoire": { n: "la mémoire involontaire: el sabor de una madeleine (no una crêpe) mojada en el té hace revivir Combray, la infancia del narrador; expresión común: une madeleine de Proust = un recuerdo que resurge por una sensación (no una receta); temas: la mémoire, le temps, la jalousie, l'art (no la guerra de trincheras vista desde el frente, la ciencia ficción, el western, la mina)", b: "gr" }
  },
  video: {
    titulo: "Proust", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le temps perdu", seg: [
        { es: "Hola. Un sabor que devuelve toda una infancia." } ] },
      { v: "frase", filas: [
          { nota: "incipit", p: 1, partes: [["Longtemps, je me suis couché de bonne heure.", "-", 1]] },
          { nota: "magdalena", p: 2, partes: [["Le goût de la madeleine fait revivre Combray.", "-", 2]] },
          { nota: "estilo", p: 3, partes: [["Les phrases de Proust sont très longues.", "-", 3]] } ], seg: [
        { fr: "Longtemps, je me suis couché de bonne heure.", p: 1 }, { fr: "Le goût de la madeleine fait revivre Combray.", p: 2 }, { fr: "Les phrases de Proust sont très longues.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Une madeleine de Proust» es…", o: ["un recuerdo que vuelve por una sensación", "una receta de cocina"], a: 0, es: true,
        bien: "¡Sí! Expresión común.", mal: "Es un recuerdo que resurge.",
        seg: [ { es: "Pausa. Un recuerdo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la mémoire involontaire", "la madeleine", "Combray", "Du côté de chez Swann", "Le Temps retrouvé", "les Guermantes"], seg: [
        { es: "Memoria, tiempo y sociedad.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una merienda", img: "bg-cafe", yo: "camila",
    escena: "Hugo moja una magdalena en el té y se acuerda de su abuela.",
    pj: PJ,
    lineas: [
      ["hugo", "Cette odeur de madeleine… c'est la cuisine de ma grand-mère ! — C'est ta madeleine de Proust : un souvenir qui ressurgit grâce à une sensation.", "Este olor a magdalena… ¡es la cocina de mi abuela! — Es tu magdalena de Proust: un recuerdo que resurge gracias a una sensación."],
      ["camila", "Dans le roman, le goût de la madeleine trempée dans le thé fait revivre au narrateur toute son enfance à Combray. C'est la mémoire involontaire. Chez Proust, une simple madeleine suffit à faire renaître tout un monde.", "En la novela, el sabor de la magdalena mojada en el té le hace revivir al narrador toda su infancia en Combray. Es la memoria involuntaria. En Proust, una simple magdalena basta para hacer renacer todo un mundo."],
      ["hugo", "À la recherche du temps perdu compte sept tomes, de Du côté de chez Swann, en 1913, au Temps retrouvé, en 1927. Et la première phrase est célèbre : « Longtemps, je me suis couché de bonne heure. »", "En busca del tiempo perdido tiene siete tomos, de Por el camino de Swann, en 1913, a El tiempo recobrado, en 1927. Y la primera frase es célebre: «Durante mucho tiempo me acosté temprano.»"],
      ["camila", "Les phrases sont très longues… — Oui, sinueuses ! Proust y analise la mémoire, le temps, l'amour, la jalousie et la haute aristocratie, les Guermantes. Il a reçu le prix Goncourt en 1919.", "Las frases son muy largas… — ¡Sí, sinuosas! Proust analiza la memoria, el tiempo, el amor, los celos y la alta aristocracia, los Guermantes. Recibió el premio Goncourt en 1919."]
    ],
    fijate: "Fíjate: ta madeleine de Proust, un souvenir qui ressurgit grâce à une sensation, la mémoire involontaire, Combray, sept tomes (1913-1927), Du côté de chez Swann, Le Temps retrouvé, « Longtemps, je me suis couché de bonne heure », des phrases sinueuses, le prix Goncourt (1919)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Memoria y tiempo",
      idea: "À la recherche du temps perdu (7 volúmenes, 1913-1927) de Marcel Proust explora la memoria, el tiempo, el amor, los celos, el arte y la sociedad aristocrática. Primer tomo: Du côté de chez Swann (1913); último: Le Temps retrouvé (1927); premio Goncourt 1919. Primera frase: «Longtemps, je me suis couché de bonne heure». El episodio de la magdalena ilustra la memoria involuntaria: un sabor hace resurgir la infancia en Combray. De ahí la expresión «une madeleine de Proust»: un recuerdo que resurge por una sensación. Estilo: frases largas y sinuosas, análisis psicológico. Personajes: Swann, Odette, Albertine, el barón de Charlus, los Guermantes.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema proustiano?"], [
        ["la mémoire involontaire", "lo que ilustra la magdalena", "Sí"],
        ["Longtemps, je me suis couché de bonne heure.", "el incipit", "Sí"],
        ["7", "los volúmenes de la Recherche", "Sí"],
        ["Le premier tome s'intitule Du côté de chez Swann. · Swann", "El primer tomo es Por el camino de Swann.", "Sí"],
        ["Le dernier tome s'intitule Le Temps retrouvé. · retrouvé", "El último tomo es El tiempo recobrado.", "Sí"],
        ["Swann = esteta enamorado de Odette · Albertine = amada del narrador · Charlus = barón extravagante · les Guermantes = alta aristocracia", "personajes", "resumen"],
        ["la mémoire · le temps · la jalousie · l'art", "temas proustianos", "Sí"],
        ["la guerre de tranchées vue du front · la science-fiction · le western · la mine", "temas ajenos", "No"],
        ["Le goût de la madeleine fait revivre au narrateur son enfance à Combray. · madeleine", "La magdalena le hace revivir su infancia.", "Sí"],
        ["un souvenir qui ressurgit grâce à une sensation", "una «madeleine de Proust»", "Sí"],
        ["le prix Goncourt (1919)", "el premio de Proust", "Sí"],
        ["Chez Proust, une simple madeleine suffit à faire renaître tout un monde.", "En Proust, una magdalena basta para hacer renacer un mundo.", "Sí"]
      ]],
      ej: [["Longtemps, je me suis couché de bonne heure.", "Durante mucho tiempo, me acosté temprano."], ["Le goût de la madeleine fait revivre Combray.", "El sabor de la magdalena hace revivir Combray."], ["Les phrases de Proust sont très longues.", "Las frases de Proust son muy largas."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["madeleine de Proust = recette", "= souvenir qui ressurgit grâce à une sensation", "Expresión común."], ["la crêpe de Proust", "la madeleine de Proust", "Combray."], ["la Recherche en trois tomes", "la Recherche en sept tomes", "1913-1927."]] }
  ],
  ejemplos: [
    { sit: "El barón extravagante de la Recherche:", resp: "Charlus", pasos: ["Personaje."], porque: "Personajes." },
    { sit: "La amada del narrador:", resp: "Albertine", pasos: ["Celos."], porque: "Personajes." },
    { sit: "¿La ciencia ficción es un tema proustiano?", resp: "No", pasos: ["Memoria y tiempo."], porque: "Temas." }
  ],
  comprueba: [
    { q: "Proust recibió el Goncourt en…", o: ["1919", "1913"], a: 0, b: "gr", porque: "Premio." },
    { q: "Combray es…", o: ["el lugar de la infancia del narrador", "un barón"], a: 0, b: "gr", porque: "Magdalena." },
    { q: "El estilo de Proust tiene frases…", o: ["largas y sinuosas", "muy cortas"], a: 0, b: "gr", porque: "Estilo." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pr-memoire"], k: "sort", ask: "¿Tema proustiano o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la mémoire", 0], ["le temps", 0], ["la jalousie", 0], ["l'art", 0], ["la guerre de tranchées vue du front", 1], ["la science-fiction", 1], ["le western", 1], ["la mine", 1]], pista: "Memoria y tiempo.", why: "Temas." },
    { fase: "guiada", c: ["b6pr-memoire"], k: "choice", ask: "El episodio de la magdalena ilustra…", q: "Elige.", o: ["la mémoire involontaire", "l'écriture automatique"], a: 0, pista: "Un sabor.", why: "Memoria involuntaria." },
    { fase: "guiada", c: ["b6pr-oeuvre"], k: "fill", ask: "Por el camino de…", q: "Le premier tome s'intitule Du côté de chez ___ .", acc: ["Swann"], pista: "Sw…", why: "<b>Swann</b>." },
    { fase: "indep", c: ["b6pr-oeuvre"], k: "fill", ask: "El tiempo…", q: "Le dernier tome s'intitule Le Temps ___ .", acc: ["retrouvé"], why: "<b>retrouvé</b>." },
    { fase: "indep", c: ["b6pr-oeuvre"], k: "match", ask: "Une cada personaje con su rasgo.", q: "Personaje → rasgo", pairs: [["Swann", "esteta enamorado de Odette"], ["Albertine", "amada del narrador"], ["Charlus", "barón extravagante"], ["les Guermantes", "alta aristocracia"]], why: "Personajes." },
    { fase: "indep", c: ["b6pr-memoire"], k: "spot", ask: "Encuentra el error.", s: "Le goût de la [crêpe] fait revivre au narrateur son enfance à Combray .", fix: "madeleine", why: "<b>madeleine</b>." },
    { fase: "aplica", c: ["b6pr-oeuvre"], k: "choice", ask: "El incipit de la Recherche:", q: "Elige.", o: ["Longtemps, je me suis couché de bonne heure.", "Il était une fois…"], a: 0, why: "Incipit." },
    { fase: "aplica", c: ["b6pr-oeuvre"], k: "choice", ask: "¿Cuántos volúmenes tiene la Recherche?", q: "Elige.", o: ["7", "20"], a: 0, why: "Siete." },
    { fase: "aplica", c: ["b6pr-memoire"], k: "choice", ask: "Hugo huele una magdalena y recuerda a su abuela: es…", q: "Elige.", o: ["sa madeleine de Proust", "un dilemme cornélien"], a: 0, why: "Recuerdo." },
    { fase: "dominio", c: ["b6pr-oeuvre"], k: "order", ask: "Ordena el incipit.", tokens: ["Longtemps,", "je me suis couché", "de bonne heure"], why: "<b>Longtemps, je me suis couché de bonne heure</b>" },
    { fase: "dominio", c: ["b6pr-memoire"], k: "spot", ask: "Encuentra el error.", s: "Une « madeleine de Proust » , c'est [une recette de gâteau] .", fix: "un souvenir qui ressurgit grâce à une sensation", why: "Es <b>un souvenir qui ressurgit grâce à une sensation</b>." },
    { fase: "dominio", c: ["b6pr-memoire", "b6pr-oeuvre"], k: "listen", say: "Chez Proust, une simple madeleine suffit à faire renaître tout un monde.", acc: ["Chez Proust, une simple madeleine suffit à faire renaître tout un monde."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chez Proust, une simple madeleine suffit à faire renaître tout un monde.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Marcel Proust", "Proust", "À la recherche du temps perdu", "Du côté de chez Swann", "Le Temps retrouvé", "Swann", "Odette", "Albertine", "Charlus", "Guermantes", "Combray", "Goncourt"], previo: [] }
};

/* ── 44. Apollinaire : Alcools et Calligrammes ── */
E["lit-apollinaire"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Apollinaire : Alcools et Calligrammes",
  objetivo: {
    que: "Vas a conocer a Apollinaire, que moderniza la poesía mezclando tradición e innovación.",
    corto: "Sous le pont Mirabeau coule la Seine. · Dans Alcools, il n'y a pas de ponctuation. · Un calligramme forme un dessin avec les mots.",
    podras: ["Presentar Alcools (1913): sin puntuación; «Le Pont Mirabeau» (el tiempo que pasa, el amor perdido) y «Zone» (la modernidad urbana: «À la fin tu es las de ce monde ancien»).", "Explicar los Calligrammes (1918): poemas cuyos versos dibujan figuras.", "Situar a Apollinaire: amigo de los cubistas, inventa la palabra «surréalisme» (1917), herido en la guerra, muere de gripe española en 1918; distinguir sus innovaciones de sus rasgos tradicionales."],
    iconos: ["ic2/lapiz", "ic2/flor", "ic2/rayo"],
    previos: ["Dada y el surrealismo (lección 12) y las vanguardias (C1.2, lección 47)."],
    capacidad: "Ahora comentas un poema de Apollinaire entre tradición y modernidad."
  },
  requiere: R("b6sr-histoire", "b5ag-mouvements"), recupera: ["b6sr-histoire"],
  conceptos: {
    "b6ap-alcools": { n: "Guillaume Apollinaire: Alcools (1913), sin puntuación (la gran innovación), mezcla de tradición y modernidad; el título es simbólico (la vida bebida como un alcohol), no habla del alcohol; «Le Pont Mirabeau»: «Sous le pont Mirabeau coule la Seine / Et nos amours» (el tiempo que pasa; «Vienne la nuit sonne l'heure, les jours s'en vont je demeure»); «Zone»: la modernidad urbana («À la fin tu es las de ce monde ancien»); amigo de los pintores cubistas; inventa la palabra «surréalisme» (1917); herido en la guerra, muere de la gripe española en 1918", b: "gr" },
    "b6ap-calligrammes": { n: "Calligrammes (1918): poemas-dibujo, un calligramme forma un dibujo con las palabras; innovaciones: absence de ponctuation, calligrammes, images de la ville moderne, vers libres; tradición: rimes, refrain de chanson, thème de l'amour perdu, le temps qui passe", b: "gr" }
  },
  video: {
    titulo: "Apollinaire", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "sans ponctuation", seg: [
        { es: "Hola. Un poeta entre tradición y vanguardia." } ] },
      { v: "frase", filas: [
          { nota: "Mirabeau", p: 1, partes: [["Sous le pont Mirabeau coule la Seine.", "-", 1]] },
          { nota: "puntuación", p: 2, partes: [["Dans Alcools, il n'y a pas de ponctuation.", "-", 2]] },
          { nota: "dibujo", p: 3, partes: [["Un calligramme forme un dessin avec les mots.", "-", 3]] } ], seg: [
        { fr: "Sous le pont Mirabeau coule la Seine.", p: 1 }, { fr: "Dans Alcools, il n'y a pas de ponctuation.", p: 2 }, { fr: "Un calligramme forme un dessin avec les mots.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La gran innovación de Alcools es…", o: ["la supresión de la puntuación", "el uso del alejandrino"], a: 0, es: true,
        bien: "¡Sí! Sin puntuación.", mal: "Suprime la puntuación.",
        seg: [ { es: "Pausa. Sin puntuación." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Alcools", "Le Pont Mirabeau", "Zone", "Calligrammes", "le surréalisme (1917)", "les vers libres"], seg: [
        { es: "Obras e innovaciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Sobre el puente Mirabeau", img: "bg-paris", yo: "camila",
    escena: "Camila y Hugo cruzan el puente Mirabeau, en París.",
    pj: PJ,
    lineas: [
      ["camila", "« Sous le pont Mirabeau coule la Seine / Et nos amours… » On est sur le pont d'Apollinaire ! — Le poème parle du temps qui passe et de l'amour perdu : « Vienne la nuit sonne l'heure, les jours s'en vont je demeure. »", "«Bajo el puente Mirabeau corre el Sena / Y nuestros amores…» ¡Estamos en el puente de Apollinaire! — El poema habla del tiempo que pasa y del amor perdido: «Venga la noche suene la hora, los días se van yo me quedo.»"],
      ["hugo", "Tu as remarqué ? Il n'y a pas de virgule : dans Alcools, en 1913, Apollinaire supprime toute la ponctuation. Le titre est symbolique : la vie bue comme un alcool.", "¿Te fijaste? No hay comas: en Alcools, en 1913, Apollinaire suprime toda la puntuación. El título es simbólico: la vida bebida como un alcohol."],
      ["camila", "Et les Calligrammes ? — En 1918 : les vers dessinent des figures, une pluie, une tour Eiffel… Un calligramme forme un dessin avec les mots.", "¿Y los Caligramas? — En 1918: los versos dibujan figuras, una lluvia, una torre Eiffel… Un caligrama forma un dibujo con las palabras."],
      ["hugo", "Ami des peintres cubistes, il invente le mot « surréalisme » en 1917. Blessé à la guerre, il meurt de la grippe espagnole en 1918.", "Amigo de los pintores cubistas, inventa la palabra «surrealismo» en 1917. Herido en la guerra, muere de la gripe española en 1918."]
    ],
    fijate: "Fíjate: « Sous le pont Mirabeau coule la Seine », le temps qui passe, l'amour perdu, pas de ponctuation (Alcools, 1913), un titre symbolique, les Calligrammes (1918), un dessin avec les mots, le mot « surréalisme » (1917), la grippe espagnole."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Alcools y Calligrammes",
      idea: "Guillaume Apollinaire moderniza la poesía. En Alcools (1913) suprime la puntuación y mezcla tradición y modernidad; el título es simbólico (la vida bebida como un alcohol). «Le Pont Mirabeau» canta el tiempo que pasa y el amor perdido («Sous le pont Mirabeau coule la Seine / Et nos amours»; «Vienne la nuit sonne l'heure / Les jours s'en vont je demeure»). «Zone» canta la modernidad urbana («À la fin tu es las de ce monde ancien»). En Calligrammes (1918), los versos dibujan figuras. Innovaciones: ausencia de puntuación, caligramas, imágenes de la ciudad moderna, verso libre; tradición: rimas, estribillo de canción, el amor perdido, el tiempo que pasa. Amigo de los cubistas, inventa la palabra «surréalisme» (1917); herido en la guerra, muere de gripe española en 1918.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["la ponctuation", "lo que suprime Alcools", "Innovación"],
        ["un poème qui forme un dessin", "un calligramme", "Innovación"],
        ["surréalisme", "la palabra inventada en 1917", "Innovación"],
        ["Sous le pont Mirabeau coule la Seine. · Mirabeau · Seine", "Bajo el puente Mirabeau corre el Sena.", "Tradición"],
        ["À la fin tu es las de ce monde ancien. · las", "Al final estás cansado de este mundo antiguo.", "Innovación"],
        ["Alcools = sin puntuación · Calligrammes = poemas-dibujo · Le Pont Mirabeau = el tiempo que pasa · Zone = la modernidad urbana", "obras", "resumen"],
        ["absence de ponctuation · calligrammes · images de la ville moderne · vers libres", "innovaciones", "Innovación"],
        ["rimes · refrain de chanson · thème de l'amour perdu · le temps qui passe", "tradición", "Tradición"],
        ["Vienne la nuit sonne l'heure, les jours s'en vont je demeure.", "Venga la noche suene la hora, los días se van yo me quedo.", "Tradición"],
        ["la vie bue comme un alcool", "el sentido simbólico de Alcools", "Innovación"],
        ["la grippe espagnole (1918)", "la causa de su muerte", "vie"]
      ]],
      ej: [["Sous le pont Mirabeau coule la Seine.", "Bajo el puente Mirabeau corre el Sena."], ["Dans Alcools, il n'y a pas de ponctuation.", "En Alcools no hay puntuación."], ["Un calligramme forme un dessin avec les mots.", "Un caligrama forma un dibujo con las palabras."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Alcools parle de l'alcool.", "Titre symbolique : la vie bue comme un alcool.", "Interpretación."], ["Sous le pont Mirabeau coule la Loire.", "Sous le pont Mirabeau coule la Seine.", "París."], ["Apollinaire ajoute des virgules partout.", "Apollinaire supprime la ponctuation.", "Innovación."]] }
  ],
  ejemplos: [
    { sit: "«Zone» canta…", resp: "la modernidad urbana", pasos: ["La ciudad."], porque: "Poemas." },
    { sit: "Las rimas en Apollinaire son…", resp: "Tradición", pasos: ["Herencia."], porque: "Tipo." },
    { sit: "El verso libre es…", resp: "Innovación", pasos: ["Modernidad."], porque: "Tipo." }
  ],
  comprueba: [
    { q: "Alcools se publica en…", o: ["1913", "1918"], a: 0, b: "gr", porque: "1918 = Calligrammes." },
    { q: "Apollinaire muere de…", o: ["la gripe española", "un duelo"], a: 0, b: "gr", porque: "1918." },
    { q: "Apollinaire era amigo de los…", o: ["cubistas", "simbolistas"], a: 0, b: "gr", porque: "Picasso." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ap-calligrammes"], k: "sort", ask: "¿Innovación o tradición?", q: "Clasifica.", cats: ["Innovación", "Tradición"], items: [["absence de ponctuation", 0], ["calligrammes", 0], ["images de la ville moderne", 0], ["vers libres", 0], ["rimes", 1], ["refrain de chanson", 1], ["thème de l'amour perdu", 1], ["le temps qui passe", 1]], pista: "¿Nuevo o heredado?", why: "Tipos." },
    { fase: "guiada", c: ["b6ap-alcools"], k: "choice", ask: "Lo que suprime Alcools:", q: "Elige.", o: ["la ponctuation", "les rimes"], a: 0, pista: "Comas y puntos.", why: "Puntuación." },
    { fase: "guiada", c: ["b6ap-alcools"], k: "fill", ask: "El puente…", q: "Sous le pont ___ coule la Seine.", acc: ["Mirabeau"], pista: "Mira…", why: "<b>Mirabeau</b>." },
    { fase: "indep", c: ["b6ap-alcools"], k: "fill", ask: "Cansado (adjetivo).", q: "À la fin tu es ___ de ce monde ancien.", acc: ["las"], why: "<b>las</b>." },
    { fase: "indep", c: ["b6ap-alcools", "b6ap-calligrammes"], k: "match", ask: "Une cada obra con su rasgo.", q: "Obra → rasgo", pairs: [["Alcools", "sin puntuación"], ["Calligrammes", "poemas-dibujo"], ["Le Pont Mirabeau", "el tiempo que pasa"], ["Zone", "la modernidad urbana"]], why: "Obras." },
    { fase: "indep", c: ["b6ap-alcools"], k: "spot", ask: "Encuentra el error.", s: "Sous le pont Mirabeau coule la [Loire] .", fix: "Seine", why: "<b>Seine</b>." },
    { fase: "aplica", c: ["b6ap-calligrammes"], k: "choice", ask: "Un calligramme es…", q: "Elige.", o: ["un poème qui forme un dessin", "un poème sans rimes"], a: 0, why: "Dibujo." },
    { fase: "aplica", c: ["b6ap-alcools"], k: "choice", ask: "La palabra que Apollinaire inventa en 1917:", q: "Elige.", o: ["surréalisme", "symbolisme"], a: 0, why: "Surrealismo." },
    { fase: "aplica", c: ["b6ap-alcools"], k: "spot", ask: "Encuentra el error.", s: "Le titre Alcools parle [de l'alcool et de l'ivresse] .", fix: "symboliquement de la vie bue comme un alcool", why: "Habla <b>symboliquement de la vie bue comme un alcool</b>." },
    { fase: "dominio", c: ["b6ap-alcools"], k: "order", ask: "Ordena el verso.", tokens: ["Sous le pont Mirabeau", "coule", "la Seine"], why: "<b>Sous le pont Mirabeau coule la Seine</b>" },
    { fase: "dominio", c: ["b6ap-calligrammes"], k: "choice", ask: "Calligrammes se publica en…", q: "Elige.", o: ["1918", "1913"], a: 0, why: "1918." },
    { fase: "dominio", c: ["b6ap-alcools", "b6ap-calligrammes"], k: "listen", say: "Vienne la nuit sonne l'heure, les jours s'en vont je demeure.", acc: ["Vienne la nuit sonne l'heure, les jours s'en vont je demeure.", "Vienne la nuit sonne l'heure les jours s'en vont je demeure"], num: false, dict: true, ask: "Escucha los versos y escríbelos.", why: "Era <b>Vienne la nuit sonne l'heure, les jours s'en vont je demeure.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Guillaume Apollinaire", "Apollinaire", "Alcools", "Calligrammes", "Mirabeau", "Le Pont Mirabeau", "Zone", "Seine", "Loire", "Paris", "Eiffel", "Picasso"], previo: [] }
};

/* ── 45. Colette, la liberté d'une femme écrivain ── */
E["lit-colette"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Colette, la liberté d'une femme écrivain",
  objetivo: {
    que: "Vas a conocer a Colette, escritora de los sentidos, la naturaleza y la libertad femenina.",
    corto: "Colette décrit les sensations avec précision. · Ses premiers romans ont été signés par son mari. · Sido est un hommage à sa mère.",
    podras: ["Contar su trayectoria: la serie Claudine, firmada por su marido Willy; luego su independencia (music-hall, periodismo, novelas).", "Asociar obras y temas: Claudine à l'école (adolescencia), Sido (homenaje a su madre y a la infancia en Borgoña), Le Blé en herbe (primer amor), Chéri, Gigi, La Chatte.", "Explicar sus temas (sensaciones, naturaleza, animales, gatos, amor, libertad) y su consagración: primera mujer presidenta de la Académie Goncourt (1949), funerales nacionales; Colette es el seudónimo de Sidonie-Gabrielle Colette."],
    iconos: ["ic2/flor", "ic2/lapiz", "ic2/libro"],
    previos: ["La autobiografía (lección 16) y los derechos de las mujeres (C1.2, lección 28)."],
    capacidad: "Ahora presentas a Colette y su escritura sensual y libre."
  },
  requiere: R("b6au-genres", "b5df-simones"), recupera: ["b5df-simones"],
  conceptos: {
    "b6ce-vie": { n: "Colette (1873-1954): seudónimo de Sidonie-Gabrielle Colette (una autora, no el apellido de un hombre); empieza con la serie Claudine, firmada por su marido (no su padre) Willy; luego conquista su independencia: music-hall, periodismo, novelas; primera mujer presidenta de la Académie Goncourt (1949); funerales nacionales", b: "gr" },
    "b6ce-oeuvre": { n: "obras: Claudine à l'école (adolescencia), Sido (homenaje a su madre y a la infancia en Borgoña), Le Blé en herbe (primer amor), Chéri, Gigi, La Chatte (celos y animales); temas: la sensualité, la nature, la liberté féminine, les animaux (les chats), l'amour; describe las sensaciones con precisión (no ciencia ficción, novela policial, epopeya militar, tragedia clásica)", b: "gr" }
  },
  video: {
    titulo: "Colette", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/flor", grande: "la liberté", seg: [
        { es: "Hola. Una escritora de los sentidos y de la libertad." } ] },
      { v: "frase", filas: [
          { nota: "sensaciones", p: 1, partes: [["Colette décrit les sensations avec précision.", "-", 1]] },
          { nota: "Willy", p: 2, partes: [["Ses premiers romans ont été signés par son mari.", "-", 2]] },
          { nota: "la madre", p: 3, partes: [["Sido est un hommage à sa mère.", "-", 3]] } ], seg: [
        { fr: "Colette décrit les sensations avec précision.", p: 1 }, { fr: "Ses premiers romans ont été signés par son mari.", p: 2 }, { fr: "Sido est un hommage à sa mère.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Colette» es…", o: ["el seudónimo de una autora", "el apellido de un hombre"], a: 0, es: true,
        bien: "¡Sí! Sidonie-Gabrielle Colette.", mal: "Es una autora.",
        seg: [ { es: "Pausa. Una autora." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Claudine", "Willy", "Sido", "Le Blé en herbe", "la liberté féminine", "l'Académie Goncourt"], seg: [
        { es: "Vida, obras y temas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un libro con gatos", img: "bg-cafe", yo: "camila",
    escena: "Camila lee La Chatte con su gato en las rodillas.",
    pj: PJ,
    lineas: [
      ["camila", "Je lis La Chatte de Colette, avec mon chat sur les genoux ! — Colette aimait beaucoup les chats. Elle décrit les sensations avec précision : les odeurs, les couleurs, les animaux.", "¡Leo La gata de Colette, con mi gato en las rodillas! — Colette quería mucho a los gatos. Describe las sensaciones con precisión: los olores, los colores, los animales."],
      ["hugo", "Tu sais que ses premiers romans, les Claudine, ont été signés par son mari, Willy ? Ensuite, elle a conquis sa liberté : music-hall, journalisme, romans.", "¿Sabes que sus primeras novelas, las Claudine, las firmó su marido, Willy? Después conquistó su libertad: music-hall, periodismo, novelas."],
      ["camila", "Et Sido ? — C'est un hommage à sa mère et à son enfance en Bourgogne. Colette aimait profondément la nature. Il y a aussi Le Blé en herbe, sur le premier amour.", "¿Y Sido? — Es un homenaje a su madre y a su infancia en Borgoña. Colette amaba profundamente la naturaleza. También está El trigo verde, sobre el primer amor."],
      ["hugo", "En 1949, elle est devenue la première femme présidente de l'Académie Goncourt, et elle a eu des funérailles nationales. Colette célèbre dans ses livres les sensations et la liberté.", "En 1949 se convirtió en la primera mujer presidenta de la Academia Goncourt, y tuvo funerales nacionales. Colette celebra en sus libros las sensaciones y la libertad."]
    ],
    fijate: "Fíjate: Colette aimait beaucoup les chats, elle décrit les sensations avec précision, signés par son mari Willy, elle a conquis sa liberté, Sido (un hommage à sa mère), la Bourgogne, Le Blé en herbe, la première femme présidente de l'Académie Goncourt (1949)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vida, obras y temas",
      idea: "Colette (1873-1954), seudónimo de Sidonie-Gabrielle Colette, empieza con la serie Claudine (Claudine à l'école, la adolescencia), firmada por su marido Willy; luego conquista su independencia: music-hall, periodismo, novelas (Chéri, Le Blé en herbe sobre el primer amor, Sido, Gigi, La Chatte). Sido es un homenaje a su madre y a la infancia en Borgoña. Celebra los sentidos, la naturaleza, los animales (sobre todo los gatos), el amor y la libertad femenina, y describe las sensaciones con precisión. Primera mujer presidenta de la Académie Goncourt (1949), tuvo funerales nacionales.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema de Colette?"], [
        ["son mari Willy", "quién firmaba sus primeros libros", "vie"],
        ["sa mère", "a quién rinde homenaje Sido", "Sí"],
        ["l'Académie Goncourt", "lo que presidió en 1949", "vie"],
        ["Le Blé en herbe est un roman de Colette. · herbe", "El trigo verde es una novela de Colette.", "Sí"],
        ["Colette aimait beaucoup les chats. · chats", "Colette quería mucho a los gatos.", "Sí"],
        ["Claudine à l'école = adolescencia · Sido = la madre · Le Blé en herbe = primer amor · La Chatte = celos y animales", "obras", "resumen"],
        ["la sensualité · la nature · la liberté féminine · les animaux", "temas de Colette", "Sí"],
        ["la science-fiction · le roman policier · l'épopée militaire · la tragédie classique", "temas ajenos", "No"],
        ["Les premiers romans de Colette étaient signés par son mari, Willy. · mari", "Los primeros libros los firmaba su marido.", "vie"],
        ["Colette aimait profondément la nature", "Colette amaba profundamente la naturaleza", "Sí"],
        ["Sidonie-Gabrielle Colette", "el nombre completo de la autora", "vie"],
        ["Colette célèbre dans ses livres les sensations et la liberté.", "Colette celebra las sensaciones y la libertad.", "Sí"]
      ]],
      ej: [["Colette décrit les sensations avec précision.", "Colette describe las sensaciones con precisión."], ["Ses premiers romans ont été signés par son mari.", "Sus primeras novelas las firmó su marido."], ["Sido est un hommage à sa mère.", "Sido es un homenaje a su madre."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Colette = nom d'un homme", "Colette = pseudonyme de Sidonie-Gabrielle Colette", "Autora."], ["Claudine signée par son père", "Claudine signée par son mari, Willy", "Firma."], ["Sido, hommage à son père", "Sido, hommage à sa mère", "La madre."]] }
  ],
  ejemplos: [
    { sit: "Claudine à l'école trata de…", resp: "adolescencia", pasos: ["Serie Claudine."], porque: "Obras." },
    { sit: "La novela policial es tema de Colette…", resp: "No", pasos: ["Sentidos y libertad."], porque: "Temas." },
    { sit: "Sido rinde homenaje a…", resp: "sa mère", pasos: ["Borgoña."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Colette presidió la Académie Goncourt en…", o: ["1949", "1919"], a: 0, b: "gr", porque: "Primera mujer." },
    { q: "La infancia de Colette transcurre en…", o: ["Borgoña", "Bretaña"], a: 0, b: "gr", porque: "Sido." },
    { q: "Willy era…", o: ["su marido", "su gato"], a: 0, b: "gr", porque: "Claudine." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ce-oeuvre"], k: "sort", ask: "¿Tema de Colette o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la sensualité", 0], ["la nature", 0], ["la liberté féminine", 0], ["les animaux", 0], ["la science-fiction", 1], ["le roman policier", 1], ["l'épopée militaire", 1], ["la tragédie classique", 1]], pista: "Los sentidos y la libertad.", why: "Temas." },
    { fase: "guiada", c: ["b6ce-vie"], k: "choice", ask: "¿Quién firmaba los primeros libros de Colette?", q: "Elige.", o: ["son mari Willy", "son père"], a: 0, pista: "Su marido.", why: "Willy." },
    { fase: "guiada", c: ["b6ce-oeuvre"], k: "fill", ask: "El trigo en… (verde).", q: "Le Blé en ___ est un roman de Colette.", acc: ["herbe"], pista: "hierba.", why: "<b>herbe</b>." },
    { fase: "indep", c: ["b6ce-oeuvre"], k: "fill", ask: "Gatos (plural).", q: "Colette aimait beaucoup les ___ .", acc: ["chats"], why: "<b>chats</b>." },
    { fase: "indep", c: ["b6ce-oeuvre"], k: "match", ask: "Une cada obra con su tema.", q: "Obra → tema", pairs: [["Claudine à l'école", "adolescencia"], ["Sido", "la madre"], ["Le Blé en herbe", "primer amor"], ["La Chatte", "celos y animales"]], why: "Obras." },
    { fase: "indep", c: ["b6ce-vie"], k: "spot", ask: "Encuentra el error.", s: "Les premiers romans de Colette étaient signés par son [père] , Willy .", fix: "mari", why: "<b>mari</b>." },
    { fase: "aplica", c: ["b6ce-oeuvre"], k: "choice", ask: "Sido rinde homenaje a…", q: "Elige.", o: ["sa mère", "son mari"], a: 0, why: "Su madre." },
    { fase: "aplica", c: ["b6ce-vie"], k: "choice", ask: "En 1949, Colette es la primera mujer presidenta de…", q: "Elige.", o: ["l'Académie Goncourt", "l'Académie française"], a: 0, why: "Goncourt." },
    { fase: "aplica", c: ["b6ce-vie"], k: "spot", ask: "Encuentra el error.", s: "Colette est [le nom d'un écrivain homme] .", fix: "le pseudonyme de Sidonie-Gabrielle Colette", why: "Es <b>le pseudonyme de Sidonie-Gabrielle Colette</b>." },
    { fase: "dominio", c: ["b6ce-oeuvre"], k: "order", ask: "Ordena la frase.", tokens: ["Colette", "aimait profondément", "la nature"], why: "<b>Colette aimait profondément la nature</b>" },
    { fase: "dominio", c: ["b6ce-oeuvre"], k: "choice", ask: "Colette describe con precisión…", q: "Elige.", o: ["les sensations", "les batailles"], a: 0, why: "Sensaciones." },
    { fase: "dominio", c: ["b6ce-oeuvre", "b6ce-vie"], k: "listen", say: "Colette célèbre dans ses livres les sensations et la liberté.", acc: ["Colette célèbre dans ses livres les sensations et la liberté."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Colette célèbre dans ses livres les sensations et la liberté.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Sofia", "Colette", "Sidonie-Gabrielle Colette", "Willy", "Claudine", "Claudine à l'école", "Sido", "Le Blé en herbe", "Chéri", "Gigi", "La Chatte", "Bourgogne", "Bretagne", "Académie Goncourt", "Académie française"], previo: [] }
};

/* ── 46. Saint-Exupéry : Le Petit Prince ── */
E["lit-saint-exupery"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Saint-Exupéry : Le Petit Prince",
  objetivo: {
    que: "Vas a conocer a Saint-Exupéry, aviador y escritor, y Le Petit Prince, el libro francés más traducido del mundo.",
    corto: "On ne voit bien qu'avec le cœur. · Le renard demande au petit prince de l'apprivoiser. · Les grandes personnes aiment les chiffres.",
    podras: ["Situar a Antoine de Saint-Exupéry, aviador (Vol de nuit, Terre des hommes), y Le Petit Prince (1943, publicado en Nueva York, ilustrado por el autor); desapareció en vuelo en 1944.", "Contar la historia: un piloto perdido en el desierto encuentra a un principito venido de otro planeta; personajes: le renard (la amistad), la rose (el amor frágil), le serpent (la muerte), l'aviateur (el narrador).", "Explicar apprivoiser (domesticar, crear lazos) y la crítica de las personas mayores (cifras, vanidad, poder, posesión)."],
    iconos: ["ic2/rayo", "ic2/flor", "ic2/libro"],
    previos: ["Candide y el cuento filosófico (lección 30) y el siglo XX (lección 7)."],
    capacidad: "Ahora comentas Le Petit Prince como cuento filosófico."
  },
  requiere: R("b6ca-conte", "b6vt-auteurs"), recupera: ["b6ca-conte"],
  conceptos: {
    "b6se-oeuvre": { n: "Antoine de Saint-Exupéry, aviador: Vol de nuit, Terre des hommes; Le Petit Prince (1943), publicado en Nueva York, cuento filosófico ilustrado por el autor: un piloto perdido en el desierto encuentra a un principito venido de otro planeta; el libro francés más traducido del mundo; desapareció en vuelo en 1944; personajes: le renard (enseña la amistad), la rose (el amor frágil: el principito ama una rosa), le serpent (la muerte), l'aviateur (el narrador)", b: "gr" },
    "b6se-sagesse": { n: "apprivoiser = domesticar, crear lazos (no «aprobar»): el zorro pide al principito que lo domestique; «On ne voit bien qu'avec le cœur» (lo esencial es invisible para los ojos, no visible); valores del principito: l'amitié, la curiosité, le rêve, le sens des rites; crítica de los adultos (les grandes personnes): les chiffres, la vanité, l'obsession du pouvoir, la possession", b: "gr" }
  },
  video: {
    titulo: "El Principito", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/rayo", grande: "le Petit Prince", seg: [
        { es: "Hola. Un cuento para niños que habla a los adultos." } ] },
      { v: "frase", filas: [
          { nota: "el corazón", p: 1, partes: [["On ne voit bien qu'avec le cœur.", "-", 1]] },
          { nota: "domesticar", p: 2, partes: [["Le renard demande au petit prince de l'apprivoiser.", "-", 2]] },
          { nota: "adultos", p: 3, partes: [["Les grandes personnes aiment les chiffres.", "-", 3]] } ], seg: [
        { fr: "On ne voit bien qu'avec le cœur.", p: 1 }, { fr: "Le renard demande au petit prince de l'apprivoiser.", p: 2 }, { fr: "Les grandes personnes aiment les chiffres.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Apprivoiser» significa…", o: ["domesticar, crear lazos", "aprobar"], a: 0, es: true,
        bien: "¡Sí! Palabra clave.", mal: "Es crear lazos.",
        seg: [ { es: "Pausa. Crear lazos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le renard", "la rose", "le serpent", "l'aviateur", "apprivoiser", "les grandes personnes"], seg: [
        { es: "Personajes y lecciones.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un regalo de cumpleaños", img: "bg-cafe", yo: "camila",
    escena: "Hugo le regala a Camila Le Petit Prince en francés.",
    pj: PJ,
    lineas: [
      ["hugo", "Joyeux anniversaire ! C'est Le Petit Prince, en version originale. — Merci ! C'est le livre français le plus traduit au monde, non ?", "¡Feliz cumpleaños! Es El principito, en versión original. — ¡Gracias! Es el libro francés más traducido del mundo, ¿no?"],
      ["camila", "Saint-Exupéry était aviateur : un pilote perdu dans le désert rencontre un petit prince venu d'une autre planète. Et le renard demande au petit prince de l'apprivoiser.", "Saint-Exupéry era aviador: un piloto perdido en el desierto se encuentra a un principito venido de otro planeta. Y el zorro le pide al principito que lo domestique."],
      ["hugo", "Apprivoiser, ça veut dire créer des liens. Le renard lui enseigne l'amitié : « On ne voit bien qu'avec le cœur. » La rose, c'est l'amour fragile, et le serpent, la mort.", "Apprivoiser quiere decir crear lazos. El zorro le enseña la amistad: «Solo se ve bien con el corazón.» La rosa es el amor frágil, y la serpiente, la muerte."],
      ["camila", "Et les grandes personnes aiment les chiffres ! — Oui, le livre critique les adultes, leur vanité, leur obsession du pouvoir. Il a été publié à New York en 1943, et Saint-Exupéry a disparu en vol en 1944.", "¡Y a las personas mayores les gustan las cifras! — Sí, el libro critica a los adultos, su vanidad, su obsesión por el poder. Se publicó en Nueva York en 1943, y Saint-Exupéry desapareció en vuelo en 1944."]
    ],
    fijate: "Fíjate: le livre français le plus traduit au monde, un pilote perdu dans le désert, une autre planète, apprivoiser (créer des liens), l'amitié, « On ne voit bien qu'avec le cœur », la rose, le serpent, les grandes personnes, publié à New York (1943), disparu en vol (1944)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obra y lecciones",
      idea: "Antoine de Saint-Exupéry, aviador, escribe sobre la aventura aérea (Vol de nuit, Terre des hommes) y sobre todo Le Petit Prince (1943), publicado en Nueva York e ilustrado por él mismo: un piloto perdido en el desierto encuentra a un principito venido de otro planeta. Es el libro francés más traducido del mundo. Personajes: el zorro (enseña la amistad), la rosa (el amor frágil), la serpiente (la muerte), el aviador (el narrador). Palabra clave: apprivoiser, domesticar, crear lazos. Mensaje: «On ne voit bien qu'avec le cœur»: lo esencial es invisible a los ojos. El principito valora la amistad, la curiosidad, el sueño y los ritos; el libro critica a las personas mayores: las cifras, la vanidad, el poder, la posesión. Saint-Exupéry desapareció en vuelo en 1944.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Visión"], [
        ["invisible pour les yeux", "lo esencial, según el zorro", "Petit Prince"],
        ["créer des liens, domestiquer", "apprivoiser", "Petit Prince"],
        ["dans le désert", "dónde está perdido el piloto", "Petit Prince"],
        ["On ne voit bien qu'avec le cœur. · cœur", "Solo se ve bien con el corazón.", "Petit Prince"],
        ["Le petit prince aime une rose. · rose", "El principito ama una rosa.", "Petit Prince"],
        ["le renard = enseña la amistad · la rose = el amor frágil · le serpent = la muerte · l'aviateur = el narrador", "personajes", "resumen"],
        ["l'amitié · la curiosité · le rêve · le sens des rites", "los valores del principito", "Petit Prince"],
        ["les chiffres · la vanité · l'obsession du pouvoir · la possession", "lo que critica de los adultos", "Adultes critiqués"],
        ["L'essentiel est invisible pour les yeux, dit le renard. · invisible", "Lo esencial es invisible a los ojos.", "Petit Prince"],
        ["Vol de nuit · Terre des hommes", "otras obras de Saint-Exupéry", "œuvre"],
        ["publié à New York en 1943", "la publicación", "œuvre"],
        ["Le Petit Prince est le livre français le plus traduit au monde.", "El principito es el libro francés más traducido del mundo.", "œuvre"]
      ]],
      ej: [["On ne voit bien qu'avec le cœur.", "Solo se ve bien con el corazón."], ["Le renard demande au petit prince de l'apprivoiser.", "El zorro pide al principito que lo domestique."], ["Les grandes personnes aiment les chiffres.", "A las personas mayores les gustan las cifras."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["apprivoiser = approuver", "apprivoiser = domestiquer, créer des liens", "Palabra clave."], ["L'essentiel est visible pour les yeux.", "L'essentiel est invisible pour les yeux.", "La cita."], ["Le Petit Prince, publié à Paris en 1960", "Le Petit Prince, publié à New York en 1943", "Fechas."]] }
  ],
  ejemplos: [
    { sit: "La serpiente representa…", resp: "la muerte", pasos: ["Símbolo."], porque: "Personajes." },
    { sit: "La vanidad es…", resp: "Adultes critiqués", pasos: ["Crítica."], porque: "Visión." },
    { sit: "Vol de nuit es de…", resp: "Saint-Exupéry", pasos: ["Aviación."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Le Petit Prince es de…", o: ["1943", "1960"], a: 0, b: "gr", porque: "Nueva York." },
    { q: "El zorro enseña…", o: ["la amistad", "la geografía"], a: 0, b: "gr", porque: "Domesticar." },
    { q: "Saint-Exupéry era…", o: ["aviador", "marino"], a: 0, b: "gr", porque: "Vol de nuit." }
  ],
  practica: [
    { fase: "guiada", c: ["b6se-sagesse"], k: "sort", ask: "¿Valor del principito o de los adultos criticados?", q: "Clasifica.", cats: ["Petit Prince", "Adultes critiqués"], items: [["l'amitié", 0], ["la curiosité", 0], ["le rêve", 0], ["le sens des rites", 0], ["les chiffres", 1], ["la vanité", 1], ["l'obsession du pouvoir", 1], ["la possession", 1]], pista: "¿Corazón o cifras?", why: "Visión." },
    { fase: "guiada", c: ["b6se-sagesse"], k: "choice", ask: "«L'essentiel est ___ pour les yeux.»", q: "Elige.", o: ["invisible", "visible"], a: 0, pista: "El corazón.", why: "Invisible." },
    { fase: "guiada", c: ["b6se-sagesse"], k: "fill", ask: "Solo se ve bien con el…", q: "On ne voit bien qu'avec le ___ .", acc: ["cœur", "coeur"], pista: "corazón.", why: "<b>cœur</b>." },
    { fase: "indep", c: ["b6se-oeuvre"], k: "fill", ask: "La flor que ama el principito.", q: "Le petit prince aime une ___ .", acc: ["rose"], why: "<b>rose</b>." },
    { fase: "indep", c: ["b6se-oeuvre"], k: "match", ask: "Une cada personaje con su sentido.", q: "Personaje → sentido", pairs: [["le renard", "enseña la amistad"], ["la rose", "el amor frágil"], ["le serpent", "la muerte"], ["l'aviateur", "el narrador"]], why: "Personajes." },
    { fase: "indep", c: ["b6se-sagesse"], k: "spot", ask: "Encuentra el error en la cita.", s: "L'essentiel est [visible] pour les yeux , dit le renard .", fix: "invisible", why: "<b>invisible</b>." },
    { fase: "aplica", c: ["b6se-sagesse"], k: "choice", ask: "«Apprivoiser» significa…", q: "Elige.", o: ["créer des liens, domestiquer", "approuver"], a: 0, why: "Crear lazos." },
    { fase: "aplica", c: ["b6se-oeuvre"], k: "choice", ask: "¿Dónde está perdido el piloto?", q: "Elige.", o: ["dans le désert", "en mer"], a: 0, why: "Desierto." },
    { fase: "aplica", c: ["b6se-oeuvre"], k: "spot", ask: "Encuentra el error.", s: "Le Petit Prince a été publié [à Paris en 1960] .", fix: "à New York en 1943", why: "<b>à New York en 1943</b>." },
    { fase: "dominio", c: ["b6se-sagesse"], k: "order", ask: "Ordena la frase.", tokens: ["L'essentiel", "est invisible", "pour les yeux"], why: "<b>L'essentiel est invisible pour les yeux</b>" },
    { fase: "dominio", c: ["b6se-sagesse"], k: "choice", ask: "A las personas mayores les gustan…", q: "Elige.", o: ["les chiffres", "les rêves"], a: 0, why: "Cifras." },
    { fase: "dominio", c: ["b6se-oeuvre", "b6se-sagesse"], k: "listen", say: "Le Petit Prince est le livre français le plus traduit au monde.", acc: ["Le Petit Prince est le livre français le plus traduit au monde."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le Petit Prince est le livre français le plus traduit au monde.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Antoine de Saint-Exupéry", "Saint-Exupéry", "Le Petit Prince", "Vol de nuit", "Terre des hommes", "New York", "Paris"], previo: [] }
};

/* ── 47. Camus romancier : L'Étranger et La Peste ── */
E["lit-camus-roman"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Camus romancier : L'Étranger et La Peste",
  objetivo: {
    que: "Vas a analizar las dos grandes novelas de Camus: L'Étranger (el absurdo) y La Peste (la rebelión y la solidaridad).",
    corto: "Aujourd'hui, maman est morte. · Meursault est condamné à mort. · Le docteur Rieux lutte contre l'épidémie.",
    podras: ["Analizar L'Étranger (1942): Meursault, narrador en primera persona, frases cortas y passé composé; mata a un árabe en una playa de Argel y es condenado más por no haber llorado a su madre que por el crimen; «étranger» a las convenciones sociales.", "Analizar La Peste (1947): una epidemia en Orán, alegoría de la Ocupación y elogio de la solidaridad (Rieux, Tarrou, Rambert).", "Distinguir el ciclo del absurdo (L'Étranger, Le Mythe de Sisyphe, Caligula) y el de la rebelión (La Peste, L'Homme révolté, Les Justes); citar Meursault, contre-enquête (Kamel Daoud)."],
    iconos: ["ic2/libro", "ic2/flor", "ic2/lapiz"],
    previos: ["El siglo XX (lección 7), el teatro del absurdo (lección 14) y el existencialismo (C1.2, lección 45)."],
    capacidad: "Ahora comentas un pasaje de L'Étranger o de La Peste."
  },
  requiere: R("b6vt-auteurs", "b6ab-oeuvres", "b5ex-camus"), recupera: ["b5ex-camus"],
  conceptos: {
    "b6cr-etranger": { n: "L'Étranger (1942): incipit «Aujourd'hui, maman est morte»; narración en primera persona, frases cortas, passé composé; Meursault, indiferente, extranjero a las convenciones sociales (no un extranjero geográfico), mata a un árabe en una playa cerca de Alger (no Orán); es condenado a muerte, más por no haber llorado en el entierro de su madre que por el crimen; encarna l'absurde; Meursault, contre-enquête de Kamel Daoud responde a la novela", b: "gr" },
    "b6cr-peste": { n: "La Peste (1947): crónica de una epidemia en Oran; alegoría de la Ocupación y elogio de la solidaridad: le docteur Rieux lucha contra la epidemia, con Tarrou (su amigo) y Rambert; ciclos: l'absurde (L'Étranger, Le Mythe de Sisyphe, Caligula, la indiferencia de Meursault) y la révolte (La Peste, L'Homme révolté, la solidaridad de Rieux, Les Justes); Clamence es el narrador de La Chute", b: "gr" }
  },
  video: {
    titulo: "Camus novelista", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "l'absurde et la révolte", seg: [
        { es: "Hola. Dos novelas: la indiferencia y la solidaridad." } ] },
      { v: "frase", filas: [
          { nota: "incipit", p: 1, partes: [["Aujourd'hui, maman est morte.", "-", 1]] },
          { nota: "juicio", p: 2, partes: [["Meursault est condamné à mort.", "-", 2]] },
          { nota: "solidaridad", p: 3, partes: [["Le docteur Rieux lutte contre l'épidémie.", "-", 3]] } ], seg: [
        { fr: "Aujourd'hui, maman est morte.", p: 1 }, { fr: "Meursault est condamné à mort.", p: 2 }, { fr: "Le docteur Rieux lutte contre l'épidémie.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«L'Étranger» designa a alguien…", o: ["ajeno a las normas sociales", "de otro país"], a: 0, es: true,
        bien: "¡Sí! Sentido del título.", mal: "Ajeno a las convenciones.",
        seg: [ { es: "Pausa. Ajeno a las normas." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Meursault", "l'absurde", "Alger", "La Peste", "Oran", "le docteur Rieux"], seg: [
        { es: "Absurdo y rebelión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Leer Camus durante una epidemia", img: "bg-biblioteca", yo: "camila",
    escena: "Camila relee La Peste y la compara con L'Étranger.",
    pj: PJ,
    lineas: [
      ["camila", "L'Étranger commence par « Aujourd'hui, maman est morte ». Les phrases sont courtes, au passé composé. — Meursault raconte à la première personne, avec une indifférence totale.", "El extranjero empieza con «Hoy ha muerto mamá». Las frases son cortas, en passé composé. — Meursault cuenta en primera persona, con una indiferencia total."],
      ["sofia", "Il tue un Arabe sur une plage près d'Alger. Au procès, on le condamne surtout parce qu'il n'a pas pleuré à l'enterrement de sa mère. Étranger, ici, veut dire étranger aux conventions sociales : c'est l'absurde.", "Mata a un árabe en una playa cerca de Argel. En el juicio, lo condenan sobre todo porque no lloró en el entierro de su madre. Extranjero, aquí, quiere decir ajeno a las convenciones sociales: es el absurdo."],
      ["camila", "Et La Peste ? — En 1947 : une épidémie à Oran. Le docteur Rieux soigne les malades avec Tarrou et Rambert. Dans La Peste, les habitants d'Oran luttent ensemble contre l'épidémie : c'est la révolte et la solidarité.", "¿Y La peste? — En 1947: una epidemia en Orán. El doctor Rieux cura a los enfermos con Tarrou y Rambert. En La peste, los habitantes de Orán luchan juntos contra la epidemia: es la rebelión y la solidaridad."],
      ["sofia", "On l'a lue comme une allégorie de l'Occupation. Et un écrivain algérien, Kamel Daoud, a répondu à L'Étranger avec Meursault, contre-enquête.", "Se leyó como una alegoría de la Ocupación. Y un escritor argelino, Kamel Daoud, respondió a El extranjero con Meursault, contra-investigación."]
    ],
    fijate: "Fíjate: « Aujourd'hui, maman est morte », des phrases courtes au passé composé, à la première personne, l'indifférence, près d'Alger, il n'a pas pleuré à l'enterrement, étranger aux conventions sociales, une épidémie à Oran, le docteur Rieux, la solidarité, une allégorie de l'Occupation."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Absurdo y rebelión",
      idea: "L'Étranger (1942) empieza con «Aujourd'hui, maman est morte». Meursault cuenta en primera persona, con frases cortas en passé composé. Indiferente, mata a un árabe en una playa cerca de Argel y es condenado a muerte más por no haber llorado en el entierro de su madre que por el crimen: «extranjero» a las convenciones sociales, encarna el absurdo. La Peste (1947), crónica de una epidemia en Orán, se lee como alegoría de la Ocupación y elogio de la solidaridad: el doctor Rieux, Tarrou, Rambert. Ciclo del absurdo: L'Étranger, Le Mythe de Sisyphe, Caligula; ciclo de la rebelión: La Peste, L'Homme révolté, Les Justes. Kamel Daoud responde con Meursault, contre-enquête.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Ciclo"], [
        ["Aujourd'hui, maman est morte.", "el incipit de L'Étranger", "Absurde"],
        ["Oran", "la ciudad de La Peste", "Révolte"],
        ["ne pas avoir pleuré sa mère", "por qué condenan a Meursault", "Absurde"],
        ["Le docteur Rieux soigne les malades de la peste. · Rieux", "El doctor Rieux cura a los enfermos.", "Révolte"],
        ["Meursault, contre-enquête est un roman de Kamel Daoud. · enquête", "Meursault, contra-investigación es de Kamel Daoud.", "Absurde"],
        ["Meursault = L'Étranger · Rieux = La Peste · Clamence = La Chute · Tarrou = La Peste (amigo de Rieux)", "personajes", "resumen"],
        ["L'Étranger · Le Mythe de Sisyphe · Caligula · l'indifférence de Meursault", "el absurdo", "Absurde"],
        ["La Peste · L'Homme révolté · la solidarité de Rieux · Les Justes", "la rebelión", "Révolte"],
        ["Dans L'Étranger, Meursault tue un homme sur une plage près d'Alger. · Alger", "Meursault mata a un hombre cerca de Argel.", "Absurde"],
        ["étranger aux conventions sociales", "el sentido del título", "Absurde"],
        ["une allégorie de l'Occupation", "una lectura de La Peste", "Révolte"],
        ["Dans La Peste, les habitants d'Oran luttent ensemble contre l'épidémie.", "En La peste, los habitantes de Orán luchan juntos.", "Révolte"]
      ]],
      ej: [["Aujourd'hui, maman est morte.", "Hoy ha muerto mamá."], ["Meursault est condamné à mort.", "Meursault es condenado a muerte."], ["Le docteur Rieux lutte contre l'épidémie.", "El doctor Rieux lucha contra la epidemia."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["L'Étranger = un étranger géographique", "= quelqu'un d'étranger aux normes sociales", "Sentido del título."], ["Meursault tue un homme près d'Oran.", "Meursault tue un homme près d'Alger.", "Orán es La Peste."], ["La Peste, roman de l'absurde", "La Peste, roman de la révolte et de la solidarité", "Ciclos."]] }
  ],
  ejemplos: [
    { sit: "El narrador de La Chute:", resp: "Clamence", pasos: ["Otro relato."], porque: "Personajes." },
    { sit: "Les Justes pertenece al ciclo…", resp: "Révolte", pasos: ["Teatro."], porque: "Ciclos." },
    { sit: "Caligula pertenece al ciclo…", resp: "Absurde", pasos: ["Teatro."], porque: "Ciclos." }
  ],
  comprueba: [
    { q: "L'Étranger es de…", o: ["1942", "1947"], a: 0, b: "gr", porque: "1947 = La Peste." },
    { q: "El estilo de L'Étranger usa…", o: ["frases cortas en passé composé", "largas frases en passé simple"], a: 0, b: "gr", porque: "Estilo." },
    { q: "Tarrou es…", o: ["amigo de Rieux", "el juez de Meursault"], a: 0, b: "gr", porque: "La Peste." }
  ],
  practica: [
    { fase: "guiada", c: ["b6cr-peste"], k: "sort", ask: "¿Absurdo o rebelión?", q: "Clasifica.", cats: ["Absurde", "Révolte"], items: [["L'Étranger", 0], ["Le Mythe de Sisyphe", 0], ["Caligula", 0], ["l'indifférence de Meursault", 0], ["La Peste", 1], ["L'Homme révolté", 1], ["la solidarité de Rieux", 1], ["Les Justes", 1]], pista: "Indiferencia o solidaridad.", why: "Ciclos." },
    { fase: "guiada", c: ["b6cr-etranger"], k: "choice", ask: "El incipit de L'Étranger:", q: "Elige.", o: ["Aujourd'hui, maman est morte.", "Longtemps, je me suis couché de bonne heure."], a: 0, pista: "Mamá.", why: "Camus." },
    { fase: "guiada", c: ["b6cr-peste"], k: "fill", ask: "El doctor de La Peste.", q: "Le docteur ___ soigne les malades de la peste.", acc: ["Rieux"], pista: "Ri…", why: "<b>Rieux</b>." },
    { fase: "indep", c: ["b6cr-etranger"], k: "fill", ask: "Meursault, contra-…", q: "Meursault, contre-___ est un roman de Kamel Daoud.", acc: ["enquête"], why: "<b>enquête</b>." },
    { fase: "indep", c: ["b6cr-etranger", "b6cr-peste"], k: "match", ask: "Une cada personaje con su obra.", q: "Personaje → obra", pairs: [["Meursault", "L'Étranger"], ["Rieux", "La Peste"], ["Clamence", "La Chute"], ["Tarrou", "La Peste (amigo de Rieux)"]], why: "Personajes." },
    { fase: "indep", c: ["b6cr-etranger"], k: "spot", ask: "Encuentra el error.", s: "Dans L'Étranger , Meursault tue un homme sur une plage près d'[Oran] .", fix: "Alger", why: "<b>Alger</b>." },
    { fase: "aplica", c: ["b6cr-peste"], k: "choice", ask: "La ciudad de La Peste:", q: "Elige.", o: ["Oran", "Alger"], a: 0, why: "Orán." },
    { fase: "aplica", c: ["b6cr-etranger"], k: "choice", ask: "¿Por qué condenan sobre todo a Meursault?", q: "Elige.", o: ["parce qu'il n'a pas pleuré sa mère", "parce qu'il a volé"], a: 0, why: "No lloró." },
    { fase: "aplica", c: ["b6cr-etranger"], k: "choice", ask: "«L'Étranger» designa a alguien…", q: "Elige.", o: ["étranger aux conventions sociales", "venu d'un autre pays"], a: 0, why: "Normas sociales." },
    { fase: "dominio", c: ["b6cr-peste"], k: "order", ask: "Ordena la frase.", tokens: ["Le docteur Rieux", "lutte contre", "l'épidémie"], why: "<b>Le docteur Rieux lutte contre l'épidémie</b>" },
    { fase: "dominio", c: ["b6cr-peste"], k: "spot", ask: "Encuentra el error.", s: "La Peste est un roman de [l'indifférence] .", fix: "la solidarité", why: "<b>la solidarité</b>." },
    { fase: "dominio", c: ["b6cr-peste", "b6cr-etranger"], k: "listen", say: "Dans La Peste, les habitants d'Oran luttent ensemble contre l'épidémie.", acc: ["Dans La Peste, les habitants d'Oran luttent ensemble contre l'épidémie."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans La Peste, les habitants d'Oran luttent ensemble contre l'épidémie.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Albert Camus", "Camus", "L'Étranger", "Meursault", "La Peste", "Rieux", "Tarrou", "Rambert", "Clamence", "La Chute", "Alger", "Oran", "Kamel Daoud", "Le Mythe de Sisyphe", "Caligula", "L'Homme révolté", "Les Justes", "Occupation"], previo: [] }
};

/* ── 48. Marguerite Duras ── */
E["lit-duras"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Marguerite Duras",
  objetivo: {
    que: "Vas a conocer a Marguerite Duras, su infancia en Indochina, sus obras y su estilo depurado.",
    corto: "L'Amant a reçu le prix Goncourt en 1984. · Duras a passé son enfance en Indochine. · Son style est fait de silences et de répétitions.",
    podras: ["Situar a Duras: nacida en Indochina (cerca de Saigón) en 1914; novelas, teatro y guiones.", "Asociar obras: L'Amant (Goncourt 1984, relato autobiográfico de su amor adolescente), Hiroshima mon amour (guion, 1959, película de Resnais), Moderato cantabile, Le Ravissement de Lol V. Stein, Savannah Bay.", "Describir su estilo: frases cortas, repeticiones, silencios, fragmentos, la memoria."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/mundo"],
    previos: ["El Nouveau Roman (lección 15) y la autobiografía y la autoficción (lección 16)."],
    capacidad: "Ahora reconoces la escritura de Duras y sus grandes obras."
  },
  requiere: R("b6nr-auteurs", "b6au-autofiction"), recupera: ["b6au-autofiction"],
  conceptos: {
    "b6du-vie": { n: "Marguerite Duras, nacida en Indochina (Vietnam actual), cerca de Saigón, en 1914 (no en Francia); pasa allí su infancia; novelas, teatro y guiones; L'Amant (1984, prix Goncourt, no 1994): relato autobiográfico de su amor adolescente con un chino rico en Indochina, gran éxito mundial; Hiroshima mon amour: guion (1959) para la película de Alain Resnais", b: "gr" },
    "b6du-style": { n: "obras: L'Amant (relato autobiográfico), Hiroshima mon amour (guion), Moderato cantabile (novela breve), Le Ravissement de Lol V. Stein, Savannah Bay (teatro); estilo depurado, repetitivo y musical: les répétitions, les silences, les phrases brèves, les fragments, la mémoire (no las largas descripciones balzacianas, el alejandrino, el estilo épico, los diálogos cómicos)", b: "gr" }
  },
  video: {
    titulo: "Marguerite Duras", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "silences et répétitions", seg: [
        { es: "Hola. Una escritura de silencios y memoria." } ] },
      { v: "frase", filas: [
          { nota: "Goncourt", p: 1, partes: [["L'Amant a reçu le prix Goncourt en 1984.", "-", 1]] },
          { nota: "Indochina", p: 2, partes: [["Duras a passé son enfance en Indochine.", "-", 2]] },
          { nota: "estilo", p: 3, partes: [["Son style est fait de silences et de répétitions.", "-", 3]] } ], seg: [
        { fr: "L'Amant a reçu le prix Goncourt en 1984.", p: 1 }, { fr: "Duras a passé son enfance en Indochine.", p: 2 }, { fr: "Son style est fait de silences et de répétitions.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Duras nació en…", o: ["Indochina", "Francia"], a: 0, es: true,
        bien: "¡Sí! Cerca de Saigón.", mal: "Nació en Indochina.",
        seg: [ { es: "Pausa. Indochina." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["L'Amant", "Hiroshima mon amour", "Moderato cantabile", "l'Indochine", "les silences", "les répétitions"], seg: [
        { es: "Vida, obras y estilo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Cine y literatura", img: "bg-noche", yo: "camila",
    escena: "Tras ver Hiroshima mon amour en el cineclub, Camila habla con Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Le film Hiroshima mon amour est magnifique ! — Le scénario est de Marguerite Duras, pour Alain Resnais, en 1959. Duras écrivait des romans, du théâtre et des scénarios.", "¡La película Hiroshima mon amour es magnífica! — El guion es de Marguerite Duras, para Alain Resnais, en 1959. Duras escribía novelas, teatro y guiones."],
      ["sofia", "Marguerite Duras est née en Indochine, près de Saïgon, en 1914. Dans L'Amant, elle revient sur son adolescence en Indochine : son amour avec un riche Chinois. L'Amant a reçu le prix Goncourt en 1984.", "Marguerite Duras nació en Indochina, cerca de Saigón, en 1914. En El amante vuelve a su adolescencia en Indochina: su amor con un chino rico. El amante recibió el Goncourt en 1984."],
      ["camila", "Son écriture est particulière… — Oui : des phrases brèves, des répétitions, des silences, des fragments. Son style est fait de silences et de répétitions, presque musical.", "Su escritura es particular… — Sí: frases breves, repeticiones, silencios, fragmentos. Su estilo está hecho de silencios y repeticiones, casi musical."],
      ["sofia", "Lis aussi Moderato cantabile, un roman bref, et Le Ravissement de Lol V. Stein.", "Lee también Moderato cantabile, una novela breve, y El arrebato de Lol V. Stein."]
    ],
    fijate: "Fíjate: le scénario de Hiroshima mon amour (1959), Alain Resnais, née en Indochine, près de Saïgon (1914), L'Amant (Goncourt 1984), son adolescence en Indochine, des phrases brèves, des répétitions, des silences, des fragments."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Vida, obras y estilo",
      idea: "Marguerite Duras nace en 1914 en Indochina (actual Vietnam), cerca de Saigón, donde pasa su infancia. Escribe novelas, teatro y guiones con un estilo depurado, repetitivo y musical: frases breves, repeticiones, silencios, fragmentos, la memoria. Obras: Hiroshima mon amour (guion de 1959 para la película de Alain Resnais), Moderato cantabile (novela breve), Le Ravissement de Lol V. Stein, Savannah Bay (teatro) y L'Amant (Goncourt 1984), relato autobiográfico de su amor adolescente con un chino rico en Indochina, gran éxito mundial.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Estilo de Duras?"], [
        ["L'Amant", "la obra del Goncourt 1984", "œuvres"],
        ["en Indochine", "dónde pasó su infancia", "vie"],
        ["Hiroshima mon amour", "el guion para Resnais", "œuvres"],
        ["Le Ravissement de Lol V. Stein · Stein", "El arrebato de Lol V. Stein", "œuvres"],
        ["Le style de Duras est fait de silences et de répétitions. · silences", "El estilo de Duras está hecho de silencios y repeticiones.", "Sí"],
        ["L'Amant = relato autobiográfico · Hiroshima mon amour = guion · Moderato cantabile = novela breve · Savannah Bay = teatro", "obras", "resumen"],
        ["les répétitions · les silences · les phrases brèves · la mémoire", "rasgos de su estilo", "Sí"],
        ["les longues descriptions balzaciennes · l'alexandrin · le style épique · les dialogues comiques", "rasgos ajenos", "No"],
        ["Marguerite Duras a reçu le prix Goncourt pour L'Amant en 1984. · 1984", "Duras recibió el Goncourt por El amante en 1984.", "œuvres"],
        ["Marguerite Duras est née en Indochine", "Marguerite Duras nació en Indochina", "vie"],
        ["près de Saïgon, en 1914", "su nacimiento", "vie"],
        ["Dans L'Amant, Marguerite Duras revient sur son adolescence en Indochine.", "En El amante, Duras vuelve a su adolescencia en Indochina.", "œuvres"]
      ]],
      ej: [["L'Amant a reçu le prix Goncourt en 1984.", "El amante recibió el Goncourt en 1984."], ["Duras a passé son enfance en Indochine.", "Duras pasó su infancia en Indochina."], ["Son style est fait de silences et de répétitions.", "Su estilo está hecho de silencios y repeticiones."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Duras est née en France.", "Duras est née près de Saïgon (Indochine).", "Biografía."], ["L'Amant, Goncourt 1994", "L'Amant, Goncourt 1984", "Fecha."], ["un style de longues descriptions", "un style de phrases brèves et de silences", "Estilo."]] }
  ],
  ejemplos: [
    { sit: "Savannah Bay es…", resp: "teatro", pasos: ["Duras escribió para la escena."], porque: "Obras." },
    { sit: "¿El alejandrino es estilo de Duras?", resp: "No", pasos: ["Frases breves."], porque: "Estilo." },
    { sit: "El director de Hiroshima mon amour:", resp: "Alain Resnais", pasos: ["Cine."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Duras nació en…", o: ["1914", "1984"], a: 0, b: "gr", porque: "Indochina." },
    { q: "Moderato cantabile es…", o: ["una novela breve", "un guion"], a: 0, b: "gr", porque: "Obras." },
    { q: "L'Amant cuenta…", o: ["un amor adolescente", "una guerra"], a: 0, b: "gr", porque: "Autobiografía." }
  ],
  practica: [
    { fase: "guiada", c: ["b6du-style"], k: "sort", ask: "¿Rasgo del estilo de Duras o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["les répétitions", 0], ["les silences", 0], ["les phrases brèves", 0], ["la mémoire", 0], ["les longues descriptions balzaciennes", 1], ["l'alexandrin", 1], ["le style épique", 1], ["les dialogues comiques", 1]], pista: "Depurado y musical.", why: "Estilo." },
    { fase: "guiada", c: ["b6du-vie"], k: "choice", ask: "La obra del Goncourt 1984:", q: "Elige.", o: ["L'Amant", "Moderato cantabile"], a: 0, pista: "Autobiográfica.", why: "L'Amant." },
    { fase: "guiada", c: ["b6du-style"], k: "fill", ask: "Lol V. …", q: "Le Ravissement de Lol V. ___ .", acc: ["Stein"], pista: "St…", why: "<b>Stein</b>." },
    { fase: "indep", c: ["b6du-style"], k: "fill", ask: "Silencios (plural).", q: "Le style de Duras est fait de ___ et de répétitions.", acc: ["silences"], why: "<b>silences</b>." },
    { fase: "indep", c: ["b6du-style"], k: "match", ask: "Une cada obra con su género.", q: "Obra → género", pairs: [["L'Amant", "relato autobiográfico"], ["Hiroshima mon amour", "guion"], ["Moderato cantabile", "novela breve"], ["Savannah Bay", "teatro"]], why: "Obras." },
    { fase: "indep", c: ["b6du-vie"], k: "spot", ask: "Encuentra el error.", s: "Marguerite Duras a reçu le prix Goncourt pour L'Amant en [1994] .", fix: "1984", why: "<b>1984</b>." },
    { fase: "aplica", c: ["b6du-vie"], k: "choice", ask: "Duras pasó su infancia…", q: "Elige.", o: ["en Indochine", "en Normandie"], a: 0, why: "Indochina." },
    { fase: "aplica", c: ["b6du-vie"], k: "choice", ask: "El guion para Alain Resnais (1959):", q: "Elige.", o: ["Hiroshima mon amour", "L'Amant"], a: 0, why: "Guion." },
    { fase: "aplica", c: ["b6du-vie"], k: "spot", ask: "Encuentra el error.", s: "Marguerite Duras est née [en France] en 1914 .", fix: "en Indochine", why: "<b>en Indochine</b>." },
    { fase: "dominio", c: ["b6du-vie"], k: "order", ask: "Ordena la frase.", tokens: ["Marguerite Duras", "est née", "en Indochine"], why: "<b>Marguerite Duras est née en Indochine</b>" },
    { fase: "dominio", c: ["b6du-style"], k: "choice", ask: "El estilo de Duras se caracteriza por…", q: "Elige.", o: ["des phrases brèves et des silences", "de longues descriptions"], a: 0, why: "Brevedad." },
    { fase: "dominio", c: ["b6du-vie", "b6du-style"], k: "listen", say: "Dans L'Amant, Marguerite Duras revient sur son adolescence en Indochine.", acc: ["Dans L'Amant, Marguerite Duras revient sur son adolescence en Indochine."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans L'Amant, Marguerite Duras revient sur son adolescence en Indochine.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Marguerite Duras", "Duras", "L'Amant", "Hiroshima mon amour", "Hiroshima", "Moderato cantabile", "Le Ravissement de Lol V. Stein", "Lol V. Stein", "Savannah Bay", "Alain Resnais", "Resnais", "Indochine", "Saïgon", "Normandie", "Goncourt"], previo: [] }
};

/* ── 49. Marguerite Yourcenar : Mémoires d'Hadrien ── */
E["lit-yourcenar"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Marguerite Yourcenar : Mémoires d'Hadrien",
  objetivo: {
    que: "Vas a conocer a Marguerite Yourcenar y Mémoires d'Hadrien, novela histórica y meditación sobre el poder y la muerte.",
    corto: "Hadrien écrit à Marc Aurèle. · Yourcenar est née à Bruxelles. · Elle a été la première femme élue à l'Académie française.",
    podras: ["Presentar Mémoires d'Hadrien (1951): el emperador romano Adriano, al final de su vida, escribe una larga carta a su sucesor, el joven Marco Aurelio; novela histórica en primera persona (no un libro de historia).", "Explicar sus temas: el poder, la sabiduría, el amor (Antínoo) y la muerte; y L'Œuvre au noir (1968, Femina: Zénon, alquimista del siglo XVI).", "Situar a Yourcenar (1903-1987): nacida en Bruselas; primera mujer elegida en la Académie française (1980)."],
    iconos: ["ic2/pergamino", "ic2/libro", "ic2/bandera"],
    previos: ["La Academia francesa (C1.2, lección 57) y la autobiografía (lección 16)."],
    capacidad: "Ahora presentas a Yourcenar y su novela histórica."
  },
  requiere: R("b5ad-institution", "b6au-genres"), recupera: ["b5ad-institution"],
  conceptos: {
    "b6yo-hadrien": { n: "Mémoires d'Hadrien (1951): el emperador romano Adriano, al final de su vida, escribe una larga carta-memorias a su sucesor, el joven Marc Aurèle (no Nerón); es una novela histórica en primera persona (no un libro de historia), una larga meditación sobre le pouvoir, la sagesse, l'amour (Antinoüs) et la mort (no la mina, el western, la investigación policial, el viaje espacial)", b: "gr" },
    "b6yo-vie": { n: "Marguerite Yourcenar (1903-1987), nacida en Bruxelles; L'Œuvre au noir (1968, prix Femina: Zénon, alquimista del siglo XVI); Alexis ou le Traité du vain combat (Alexis); Le Coup de grâce (Erick); en 1980, primera mujer elegida en la Académie française", b: "gr" }
  },
  video: {
    titulo: "Yourcenar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/pergamino", grande: "Mémoires d'Hadrien", seg: [
        { es: "Hola. Un emperador escribe al final de su vida." } ] },
      { v: "frase", filas: [
          { nota: "carta", p: 1, partes: [["Hadrien écrit à Marc Aurèle.", "-", 1]] },
          { nota: "Bruselas", p: 2, partes: [["Yourcenar est née à Bruxelles.", "-", 2]] },
          { nota: "1980", p: 3, partes: [["Elle a été la première femme élue à l'Académie française.", "-", 3]] } ], seg: [
        { fr: "Hadrien écrit à Marc Aurèle.", p: 1 }, { fr: "Yourcenar est née à Bruxelles.", p: 2 }, { fr: "Elle a été la première femme élue à l'Académie française.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Mémoires d'Hadrien es…", o: ["una novela en primera persona", "un libro de historia"], a: 0, es: true,
        bien: "¡Sí! Ficción histórica.", mal: "Es una novela.",
        seg: [ { es: "Pausa. Novela." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Hadrien", "Marc Aurèle", "le pouvoir", "la mort", "L'Œuvre au noir", "l'Académie française"], seg: [
        { es: "Obra, temas y autora.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Visita a la Villa Adriana", img: "bg-montana", yo: "camila",
    escena: "De viaje en Italia, Camila visita la Villa Adriana y piensa en Yourcenar.",
    pj: PJ,
    lineas: [
      ["camila", "Je visite la villa d'Hadrien, près de Rome ! — Alors lis Mémoires d'Hadrien, de Marguerite Yourcenar, en 1951 : l'empereur, à la fin de sa vie, écrit une longue lettre à son successeur, le jeune Marc Aurèle.", "¡Estoy visitando la villa de Adriano, cerca de Roma! — Entonces lee Memorias de Adriano, de Marguerite Yourcenar, de 1951: el emperador, al final de su vida, escribe una larga carta a su sucesor, el joven Marco Aurelio."],
      ["sofia", "Ce n'est pas un livre d'histoire, mais un roman à la première personne. Mémoires d'Hadrien est une longue méditation sur le pouvoir et la mort, mais aussi sur l'amour, avec Antinoüs.", "No es un libro de historia, sino una novela en primera persona. Memorias de Adriano es una larga meditación sobre el poder y la muerte, pero también sobre el amor, con Antínoo."],
      ["camila", "Yourcenar était française ? — Elle est née à Bruxelles, en 1903. Elle a aussi écrit L'Œuvre au noir, prix Femina en 1968, sur Zénon, un alchimiste du XVIe siècle.", "¿Yourcenar era francesa? — Nació en Bruselas, en 1903. También escribió Opus nigrum, premio Femina en 1968, sobre Zenón, un alquimista del siglo XVI."],
      ["sofia", "Et en 1980, elle a été la première femme élue à l'Académie française.", "Y en 1980 fue la primera mujer elegida en la Academia francesa."]
    ],
    fijate: "Fíjate: Mémoires d'Hadrien (1951), une longue lettre à son successeur, le jeune Marc Aurèle, un roman à la première personne, une méditation sur le pouvoir et la mort, Antinoüs, née à Bruxelles (1903), L'Œuvre au noir (Femina 1968), la première femme élue à l'Académie (1980)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obra y autora",
      idea: "Marguerite Yourcenar (1903-1987), nacida en Bruselas, escribe Mémoires d'Hadrien (1951): el emperador romano Adriano, al final de su vida, escribe una larga carta a su sucesor, el joven Marco Aurelio. Es una novela histórica en primera persona (no un libro de historia), una meditación sobre el poder, la sabiduría, el amor (Antínoo) y la muerte. También escribió L'Œuvre au noir (1968, premio Femina), sobre Zenón, alquimista del siglo XVI, Alexis ou le Traité du vain combat y Le Coup de grâce. En 1980 fue la primera mujer elegida en la Academia francesa.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema de Hadrien?"], [
        ["à Marc Aurèle", "a quién escribe Adriano", "Sí"],
        ["la première femme à l'Académie française", "lo que fue Yourcenar en 1980", "vie"],
        ["Bruxelles", "su ciudad natal", "vie"],
        ["L'Œuvre au noir · noir", "Opus nigrum", "vie"],
        ["Mémoires d'Hadrien · Hadrien", "Memorias de Adriano", "Sí"],
        ["Mémoires d'Hadrien = Adriano · L'Œuvre au noir = Zénon · Alexis ou le Traité du vain combat = Alexis · Le Coup de grâce = Erick", "obras y personajes", "resumen"],
        ["le pouvoir · la mort · l'amour · la sagesse", "temas de la novela", "Sí"],
        ["la mine · le western · l'enquête policière · le voyage dans l'espace", "temas ajenos", "No"],
        ["Dans Mémoires d'Hadrien, l'empereur écrit à son successeur Marc Aurèle. · Marc Aurèle", "El emperador escribe a su sucesor Marco Aurelio.", "Sí"],
        ["Hadrien écrit à Marc Aurèle", "Adriano escribe a Marco Aurelio", "Sí"],
        ["un roman à la première personne", "el género de Mémoires d'Hadrien", "Sí"],
        ["Mémoires d'Hadrien est une longue méditation sur le pouvoir et la mort.", "Memorias de Adriano es una meditación sobre el poder y la muerte.", "Sí"]
      ]],
      ej: [["Hadrien écrit à Marc Aurèle.", "Adriano escribe a Marco Aurelio."], ["Yourcenar est née à Bruxelles.", "Yourcenar nació en Bruselas."], ["Elle a été la première femme élue à l'Académie française.", "Fue la primera mujer elegida en la Academia francesa."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Mémoires d'Hadrien = un livre d'histoire", "= un roman à la première personne", "Ficción histórica."], ["Hadrien écrit à Néron.", "Hadrien écrit à Marc Aurèle.", "Sucesor."], ["Yourcenar est née à Paris.", "Yourcenar est née à Bruxelles.", "Biografía."]] }
  ],
  ejemplos: [
    { sit: "El héroe de L'Œuvre au noir:", resp: "Zénon", pasos: ["Alquimista."], porque: "Obras." },
    { sit: "¿El western es tema de Hadrien?", resp: "No", pasos: ["Poder y muerte."], porque: "Temas." },
    { sit: "L'Œuvre au noir recibió…", resp: "le prix Femina (1968)", pasos: ["Premio."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Mémoires d'Hadrien es de…", o: ["1951", "1980"], a: 0, b: "gr", porque: "1980 = Academia." },
    { q: "Yourcenar fue elegida en la Academia en…", o: ["1980", "1951"], a: 0, b: "gr", porque: "Primera mujer." },
    { q: "Adriano escribe…", o: ["al final de su vida", "en su juventud"], a: 0, b: "gr", porque: "Memorias." }
  ],
  practica: [
    { fase: "guiada", c: ["b6yo-hadrien"], k: "sort", ask: "¿Tema de Mémoires d'Hadrien o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["le pouvoir", 0], ["la mort", 0], ["l'amour", 0], ["la sagesse", 0], ["la mine", 1], ["le western", 1], ["l'enquête policière", 1], ["le voyage dans l'espace", 1]], pista: "Un emperador al final de su vida.", why: "Temas." },
    { fase: "guiada", c: ["b6yo-hadrien"], k: "choice", ask: "Adriano escribe…", q: "Elige.", o: ["à Marc Aurèle", "à Néron"], a: 0, pista: "Su sucesor.", why: "Marco Aurelio." },
    { fase: "guiada", c: ["b6yo-vie"], k: "fill", ask: "L'Œuvre au… (negro).", q: "L'Œuvre au ___ .", acc: ["noir"], pista: "negro.", why: "<b>noir</b>." },
    { fase: "indep", c: ["b6yo-hadrien"], k: "fill", ask: "Memorias de…", q: "Mémoires d'___ .", acc: ["Hadrien"], why: "<b>Hadrien</b>." },
    { fase: "indep", c: ["b6yo-vie"], k: "match", ask: "Une cada obra con su personaje.", q: "Obra → personaje", pairs: [["Mémoires d'Hadrien", "Adriano"], ["L'Œuvre au noir", "Zénon"], ["Alexis ou le Traité du vain combat", "Alexis"], ["Le Coup de grâce", "Erick"]], why: "Obras." },
    { fase: "indep", c: ["b6yo-hadrien"], k: "spot", ask: "Encuentra el error.", s: "Dans Mémoires d'Hadrien , l'empereur écrit à son successeur [Néron] .", fix: "Marc Aurèle", why: "<b>Marc Aurèle</b>." },
    { fase: "aplica", c: ["b6yo-vie"], k: "choice", ask: "En 1980, Yourcenar fue…", q: "Elige.", o: ["la première femme à l'Académie française", "la première femme prix Nobel"], a: 0, why: "Academia." },
    { fase: "aplica", c: ["b6yo-vie"], k: "choice", ask: "Ciudad natal de Yourcenar:", q: "Elige.", o: ["Bruxelles", "Paris"], a: 0, why: "Bruselas." },
    { fase: "aplica", c: ["b6yo-hadrien"], k: "spot", ask: "Encuentra el error.", s: "Mémoires d'Hadrien est [un livre d'histoire] écrit par Yourcenar .", fix: "un roman à la première personne", why: "Es <b>un roman à la première personne</b>." },
    { fase: "dominio", c: ["b6yo-hadrien"], k: "order", ask: "Ordena la frase.", tokens: ["Hadrien", "écrit", "à Marc Aurèle"], why: "<b>Hadrien écrit à Marc Aurèle</b>" },
    { fase: "dominio", c: ["b6yo-vie"], k: "choice", ask: "L'Œuvre au noir trata de…", q: "Elige.", o: ["Zénon, un alchimiste du XVIe siècle", "un empereur romain"], a: 0, why: "Zenón." },
    { fase: "dominio", c: ["b6yo-hadrien", "b6yo-vie"], k: "listen", say: "Mémoires d'Hadrien est une longue méditation sur le pouvoir et la mort.", acc: ["Mémoires d'Hadrien est une longue méditation sur le pouvoir et la mort."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Mémoires d'Hadrien est une longue méditation sur le pouvoir et la mort.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Marguerite Yourcenar", "Yourcenar", "Hadrien", "Marc Aurèle", "Antinoüs", "Néron", "Zénon", "Alexis", "Erick", "Bruxelles", "Rome", "Paris", "Mémoires d'Hadrien", "L'Œuvre au noir", "Alexis ou le Traité du vain combat", "Le Coup de grâce", "Femina", "Académie française"], previo: [] }
};

/* ── 50. L'Oulipo : Queneau et Perec ── */
E["lit-oulipo"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'Oulipo : Queneau et Perec",
  objetivo: {
    que: "Vas a conocer el Oulipo y su idea central: escribir bajo restricciones formales como motor de creación.",
    corto: "La Disparition ne contient aucun e. · Queneau raconte la même histoire de 99 façons. · L'Oulipo invente des contraintes d'écriture.",
    podras: ["Explicar el Oulipo (Ouvroir de littérature potentielle, 1960, Raymond Queneau y François Le Lionnais): la contrainte como fuente de libertad creativa.", "Presentar a Queneau: Exercices de style (1947, una anécdota contada de 99 maneras), Zazie dans le métro (1959, «Doukipudonktan»), Cent mille milliards de poèmes.", "Presentar a Perec: La Disparition (1969, lipograma sin la letra e), La Vie mode d'emploi (1978), W ou le souvenir d'enfance, Les Choses; y el método S+7."],
    iconos: ["ic2/lapiz", "ic2/rayo", "ic2/libros"],
    previos: ["El Nouveau Roman (lección 15) y la autobiografía (lección 16)."],
    capacidad: "Ahora explicas el Oulipo y propones tu propia contrainte."
  },
  requiere: R("b6nr-rupture", "b6au-autofiction"), recupera: ["b6nr-rupture"],
  conceptos: {
    "b6ou-contrainte": { n: "l'Oulipo (Ouvroir de littérature potentielle), fundado en 1960 por Raymond Queneau y François Le Lionnais; escribe bajo contraintes (reglas formales que estimulan la creación: no un obstáculo a evitar, sino un motor; la contrainte est une source de liberté créatrice); le lipogramme: texto sin una letra; S+7: sustituir cada nombre por el séptimo siguiente del diccionario", b: "gr" },
    "b6ou-auteurs": { n: "Raymond Queneau: Exercices de style (1947: la misma historia contada de 99 maneras), Zazie dans le métro (1959; «Doukipudonktan»), Cent mille milliards de poèmes; Georges Perec: La Disparition (1969, novela entera sin la letra e, no sin la a: lipograma), La Vie mode d'emploi (1978), W ou le souvenir d'enfance, Les Choses", b: "gr" }
  },
  video: {
    titulo: "El Oulipo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "la contrainte", seg: [
        { es: "Hola. Escribir con reglas para ser más libre." } ] },
      { v: "frase", filas: [
          { nota: "lipograma", p: 1, partes: [["La Disparition ne contient aucun e.", "-", 1]] },
          { nota: "99 maneras", p: 2, partes: [["Queneau raconte la même histoire de 99 façons.", "-", 2]] },
          { nota: "reglas", p: 3, partes: [["L'Oulipo invente des contraintes d'écriture.", "-", 3]] } ], seg: [
        { fr: "La Disparition ne contient aucun e.", p: 1 }, { fr: "Queneau raconte la même histoire de quatre-vingt-dix-neuf façons.", p: 2 }, { fr: "L'Oulipo invente des contraintes d'écriture.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Para el Oulipo, la restricción es…", o: ["un motor creativo", "un obstáculo a evitar"], a: 0, es: true,
        bien: "¡Sí! Fuente de libertad.", mal: "Es un motor creativo.",
        seg: [ { es: "Pausa. Motor creativo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'Oulipo", "la contrainte", "le lipogramme", "Exercices de style", "La Disparition", "S+7"], seg: [
        { es: "Restricciones y autores.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Taller de escritura", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia propone un taller oulipiano: escribir sin la letra a.",
    pj: PJ,
    lineas: [
      ["sofia", "Aujourd'hui, atelier oulipien : écrivez un paragraphe sans la lettre a ! — C'est impossible ! — Perec a écrit tout un roman sans la lettre e : La Disparition, en 1969. C'est un lipogramme.", "Hoy, taller oulipiano: ¡escriban un párrafo sin la letra a! — ¡Es imposible! — Perec escribió toda una novela sin la letra e: La disparición, en 1969. Es un lipograma."],
      ["camila", "C'est quoi, l'Oulipo ? — L'Ouvroir de littérature potentielle, fondé en 1960 par Raymond Queneau et François Le Lionnais. L'Oulipo invente des contraintes d'écriture.", "¿Qué es el Oulipo? — El Taller de literatura potencial, fundado en 1960 por Raymond Queneau y François Le Lionnais. El Oulipo inventa restricciones de escritura."],
      ["sofia", "Pour l'Oulipo, la contrainte est une source de liberté créatrice, pas un obstacle. Queneau, dans Exercices de style, raconte la même histoire de 99 façons. Et Zazie dans le métro commence par « Doukipudonktan ».", "Para el Oulipo, la restricción es una fuente de libertad creativa, no un obstáculo. Queneau, en Ejercicios de estilo, cuenta la misma historia de 99 maneras. Y Zazie en el metro empieza con «Doukipudonktan»."],
      ["camila", "Et la méthode S+7 ? — On remplace chaque nom par le septième nom suivant dans le dictionnaire. Perec a aussi écrit La Vie mode d'emploi, en 1978.", "¿Y el método S+7? — Se reemplaza cada sustantivo por el séptimo sustantivo siguiente en el diccionario. Perec escribió también La vida instrucciones de uso, en 1978."]
    ],
    fijate: "Fíjate: un atelier oulipien, sans la lettre e, La Disparition (1969), un lipogramme, l'Ouvroir de littérature potentielle (1960), des contraintes d'écriture, une source de liberté créatrice, Exercices de style (99 façons), Zazie dans le métro, S+7, La Vie mode d'emploi (1978)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Restricciones y autores",
      idea: "El Oulipo (Ouvroir de littérature potentielle), fundado en 1960 por Raymond Queneau y François Le Lionnais, escribe bajo restricciones formales (contraintes): para el Oulipo, la restricción no es un obstáculo, sino una fuente de libertad creativa. El lipograma es un texto sin una letra; el método S+7 sustituye cada sustantivo por el séptimo siguiente del diccionario. Queneau: Exercices de style (1947, una anécdota contada de 99 maneras), Zazie dans le métro (1959, «Doukipudonktan»), Cent mille milliards de poèmes. Georges Perec: La Disparition (1969), novela entera sin la letra e; La Vie mode d'emploi (1978); W ou le souvenir d'enfance; Les Choses.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Autor"], [
        ["la lettre e", "la letra ausente de La Disparition", "Perec"],
        ["un texte sans une lettre", "un lipogramme", "Oulipo"],
        ["99", "las versiones de Exercices de style", "Queneau"],
        ["Zazie dans le métro · métro", "Zazie en el metro", "Queneau"],
        ["La Vie mode d'emploi est un roman de Perec. · emploi", "La vida instrucciones de uso es una novela de Perec.", "Perec"],
        ["Oulipo = Ouvroir de littérature potentielle · lipogramme = texto sin una letra · contrainte = regla formal · S+7 = sustitución por diccionario", "vocabulario", "resumen"],
        ["Exercices de style · Zazie dans le métro · Cent mille milliards de poèmes · Doukipudonktan", "Queneau", "Queneau"],
        ["La Disparition · La Vie mode d'emploi · W ou le souvenir d'enfance · Les Choses", "Perec", "Perec"],
        ["Dans La Disparition, Perec n'utilise jamais la lettre e. · e", "En La disparición, Perec nunca usa la letra e.", "Perec"],
        ["L'Oulipo écrit sous contrainte", "El Oulipo escribe bajo restricción", "Oulipo"],
        ["Raymond Queneau et François Le Lionnais (1960)", "los fundadores", "Oulipo"],
        ["Pour l'Oulipo, la contrainte est une source de liberté créatrice.", "Para el Oulipo, la restricción es fuente de libertad.", "Oulipo"]
      ]],
      ej: [["La Disparition ne contient aucun e.", "La Disparition no contiene ninguna e."], ["Queneau raconte la même histoire de 99 façons.", "Queneau cuenta la misma historia de 99 maneras."], ["L'Oulipo invente des contraintes d'écriture.", "El Oulipo inventa restricciones de escritura."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["contrainte = obstacle à éviter", "contrainte = moteur créatif", "Filosofía del Oulipo."], ["La Disparition, sans la lettre a", "La Disparition, sans la lettre e", "Lipograma."], ["Exercices de style, de Perec", "Exercices de style, de Queneau", "No confundir."]] }
  ],
  ejemplos: [
    { sit: "Les Choses es de…", resp: "Perec", pasos: ["Novela."], porque: "Obras." },
    { sit: "Cent mille milliards de poèmes es de…", resp: "Queneau", pasos: ["Combinatoria."], porque: "Obras." },
    { sit: "Los fundadores del Oulipo:", resp: "Raymond Queneau et François Le Lionnais (1960)", pasos: ["1960."], porque: "Historia." }
  ],
  comprueba: [
    { q: "El Oulipo se funda en…", o: ["1960", "1924"], a: 0, b: "gr", porque: "1924 = surrealismo." },
    { q: "S+7 consiste en…", o: ["sustituir cada nombre por el séptimo siguiente", "escribir siete poemas"], a: 0, b: "gr", porque: "Diccionario." },
    { q: "La Disparition es de…", o: ["1969", "1947"], a: 0, b: "gr", porque: "Perec." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ou-auteurs"], k: "sort", ask: "¿Queneau o Perec?", q: "Clasifica.", cats: ["Queneau", "Perec"], items: [["Exercices de style", 0], ["Zazie dans le métro", 0], ["Cent mille milliards de poèmes", 0], ["Doukipudonktan", 0], ["La Disparition", 1], ["La Vie mode d'emploi", 1], ["W ou le souvenir d'enfance", 1], ["Les Choses", 1]], pista: "99 estilos o la e ausente.", why: "Autores." },
    { fase: "guiada", c: ["b6ou-auteurs"], k: "choice", ask: "La letra ausente de La Disparition:", q: "Elige.", o: ["la lettre e", "la lettre a"], a: 0, pista: "La más frecuente.", why: "La e." },
    { fase: "guiada", c: ["b6ou-auteurs"], k: "fill", ask: "Zazie en el…", q: "Zazie dans le ___ .", acc: ["métro"], pista: "metro.", why: "<b>métro</b>." },
    { fase: "indep", c: ["b6ou-auteurs"], k: "fill", ask: "La vida instrucciones de… (mode d'…).", q: "La Vie mode d'___ est un roman de Perec.", acc: ["emploi"], why: "<b>emploi</b>." },
    { fase: "indep", c: ["b6ou-contrainte"], k: "match", ask: "Une cada término con su sentido.", q: "Término → sentido", pairs: [["Oulipo", "Ouvroir de littérature potentielle"], ["lipogramme", "texto sin una letra"], ["contrainte", "regla formal"], ["S+7", "sustitución por diccionario"]], why: "Vocabulario." },
    { fase: "indep", c: ["b6ou-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Dans La Disparition , Perec n'utilise jamais la lettre [a] .", fix: "e", why: "La <b>e</b>." },
    { fase: "aplica", c: ["b6ou-contrainte"], k: "choice", ask: "Un lipograma es…", q: "Elige.", o: ["un texte sans une lettre", "un poème en prose"], a: 0, why: "Sin una letra." },
    { fase: "aplica", c: ["b6ou-auteurs"], k: "choice", ask: "Exercices de style cuenta la misma historia de…", q: "Elige.", o: ["99 façons", "7 façons"], a: 0, why: "99." },
    { fase: "aplica", c: ["b6ou-contrainte"], k: "spot", ask: "Encuentra el error.", s: "Pour l'Oulipo , la contrainte est [un obstacle à éviter] .", fix: "une source de liberté créatrice", why: "Es <b>une source de liberté créatrice</b>." },
    { fase: "dominio", c: ["b6ou-contrainte"], k: "order", ask: "Ordena la frase.", tokens: ["L'Oulipo", "écrit", "sous contrainte"], why: "<b>L'Oulipo écrit sous contrainte</b>" },
    { fase: "dominio", c: ["b6ou-contrainte"], k: "choice", ask: "Los fundadores del Oulipo:", q: "Elige.", o: ["Raymond Queneau et François Le Lionnais (1960)", "André Breton et Philippe Soupault"], a: 0, why: "1960." },
    { fase: "dominio", c: ["b6ou-contrainte", "b6ou-auteurs"], k: "listen", say: "Pour l'Oulipo, la contrainte est une source de liberté créatrice.", acc: ["Pour l'Oulipo, la contrainte est une source de liberté créatrice."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pour l'Oulipo, la contrainte est une source de liberté créatrice.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Oulipo", "Raymond Queneau", "Queneau", "François Le Lionnais", "Le Lionnais", "Georges Perec", "Perec", "Zazie", "Exercices de style", "Zazie dans le métro", "Cent mille milliards de poèmes", "Doukipudonktan", "La Disparition", "La Vie mode d'emploi", "W ou le souvenir d'enfance", "Les Choses", "André Breton", "Philippe Soupault"], previo: [] }
};

/* ── 51. Prévert, Éluard et la poésie du XXe siècle ── */
E["lit-poesie-xxe"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Prévert, Éluard et la poésie du XXe siècle",
  objetivo: {
    que: "Vas a conocer las voces de la poesía del siglo XX: Prévert, Éluard, Aragon y Ponge.",
    corto: "Prévert écrit avec les mots de tous les jours. · Éluard a écrit « Liberté » en 1942. · Ponge décrit une huître comme un monde.",
    podras: ["Presentar a Jacques Prévert (Paroles, 1946): poesía popular, oral, tierna e irónica («Barbara», «Déjeuner du matin»), a menudo convertida en canción (Les Feuilles mortes).", "Situar «Liberté» de Paul Éluard (1942), poema de la Resistencia lanzado por la aviación aliada, y a Aragon, poeta de Elsa.", "Reconocer a Francis Ponge (Le Parti pris des choses, 1942): poemas sobre objetos cotidianos (Le Cageot, L'Huître, Le Savon)."],
    iconos: ["ic2/nota", "ic2/lapiz", "ic2/flor"],
    previos: ["El surrealismo (lección 12), la poesía del siglo XIX (lección 6) y Apollinaire (lección 44)."],
    capacidad: "Ahora reconoces los grandes poemas del siglo XX y a sus autores."
  },
  requiere: R("b6sr-histoire", "b6ap-alcools"), recupera: ["b6sr-histoire"],
  conceptos: {
    "b6pz-voix": { n: "Jacques Prévert: Paroles (1946), poesía popular y oral, lenguaje cotidiano, humor, ternura y compromiso («Barbara»: «Rappelle-toi Barbara», lluvia sobre Brest; «Déjeuner du matin»; «Pour faire le portrait d'un oiseau»); muchos poemas se hicieron canciones (Les Feuilles mortes); Paul Éluard: «Liberté» (1942, no de Prévert), poema de la Resistencia lanzado por la aviación aliada («J'écris ton nom»); Louis Aragon: Les Yeux d'Elsa, poesía de la Resistencia", b: "gr" },
    "b6pz-choses": { n: "Francis Ponge: Le Parti pris des choses (1942), poemas en prosa sobre objetos cotidianos (Le Cageot, L'Huître, Le Savon): renueva la mirada sobre las cosas (describe una ostra como un mundo); René Char, poeta y resistente", b: "gr" }
  },
  video: {
    titulo: "Poesía del siglo XX", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "Paroles", seg: [
        { es: "Hola. Poemas que todo el mundo recuerda." } ] },
      { v: "frase", filas: [
          { nota: "Prévert", p: 1, partes: [["Prévert écrit avec les mots de tous les jours.", "-", 1]] },
          { nota: "Éluard", p: 2, partes: [["Éluard a écrit « Liberté » en 1942.", "-", 2]] },
          { nota: "Ponge", p: 3, partes: [["Ponge décrit une huître comme un monde.", "-", 3]] } ], seg: [
        { fr: "Prévert écrit avec les mots de tous les jours.", p: 1 }, { fr: "Éluard a écrit « Liberté » en mille neuf cent quarante-deux.", p: 2 }, { fr: "Ponge décrit une huître comme un monde.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Liberté» (1942) es de…", o: ["Paul Éluard", "Jacques Prévert"], a: 0, es: true,
        bien: "¡Sí! Poema de la Resistencia.", mal: "Es de Éluard.",
        seg: [ { es: "Pausa. Éluard." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Paroles", "Barbara", "Liberté", "Les Yeux d'Elsa", "Le Parti pris des choses", "L'Huître"], seg: [
        { es: "Cuatro voces.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un poema en la pared", img: "bg-paris", yo: "camila",
    escena: "En una calle de París, Camila descubre un poema pintado en un muro.",
    pj: PJ,
    lineas: [
      ["camila", "Regarde, un poème sur le mur : « Rappelle-toi Barbara… » — C'est Jacques Prévert, dans Paroles, en 1946. Il pleuvait sur Brest, pendant la guerre.", "Mira, un poema en el muro: «Acuérdate, Barbara…» — Es Jacques Prévert, en Paroles, de 1946. Llovía sobre Brest, durante la guerra."],
      ["hugo", "Prévert écrit avec les mots de tous les jours, avec humour et tendresse. Beaucoup de ses poèmes sont devenus des chansons, comme Les Feuilles mortes.", "Prévert escribe con las palabras de todos los días, con humor y ternura. Muchos de sus poemas se convirtieron en canciones, como Las hojas muertas."],
      ["camila", "Et « J'écris ton nom : Liberté », c'est aussi Prévert ? — Non ! « Liberté » a été écrit par Paul Éluard en 1942. Les avions alliés l'ont lancé au-dessus de la France occupée.", "Y «Escribo tu nombre: Libertad», ¿también es Prévert? — ¡No! «Libertad» lo escribió Paul Éluard en 1942. Los aviones aliados lo lanzaron sobre la Francia ocupada."],
      ["hugo", "Il y a aussi Aragon et Les Yeux d'Elsa. Et Francis Ponge, dans Le Parti pris des choses, décrit une huître comme un monde : un poème sur un objet !", "También está Aragon y Los ojos de Elsa. Y Francis Ponge, en De parte de las cosas, describe una ostra como un mundo: ¡un poema sobre un objeto!"]
    ],
    fijate: "Fíjate: Paroles (1946), Brest, les mots de tous les jours, l'humour et la tendresse, devenus des chansons, « Liberté » écrit par Paul Éluard en 1942, les avions alliés, Les Yeux d'Elsa, Le Parti pris des choses, une huître comme un monde."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Cuatro voces",
      idea: "La poesía del siglo XX es diversa. Jacques Prévert (Paroles, 1946) escribe con las palabras de todos los días: poesía oral, tierna, irónica y comprometida («Barbara», «Déjeuner du matin», «Pour faire le portrait d'un oiseau»); muchos poemas se hicieron canciones (Les Feuilles mortes). Paul Éluard escribe «Liberté» (1942), poema de la Resistencia que la aviación aliada lanzó sobre Francia. Louis Aragon canta a Elsa (Les Yeux d'Elsa). Francis Ponge, en Le Parti pris des choses (1942), escribe poemas sobre objetos cotidianos: Le Cageot, L'Huître, Le Savon.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Poeta"], [
        ["Paul Éluard (1942)", "el autor de «Liberté»", "Éluard"],
        ["Paroles", "el gran libro de Prévert", "Prévert"],
        ["des objets quotidiens", "el tema de Ponge", "Ponge"],
        ["Rappelle-toi Barbara, il pleuvait sans cesse sur Brest. · Barbara", "Acuérdate, Barbara, llovía sin cesar en Brest.", "Prévert"],
        ["J'écris ton nom : Liberté. · nom", "Escribo tu nombre: Libertad.", "Éluard"],
        ["Prévert = Paroles · Éluard = Liberté · Aragon = Les Yeux d'Elsa · Ponge = Le Parti pris des choses", "poetas y obras", "resumen"],
        ["Barbara · Déjeuner du matin · Pour faire le portrait d'un oiseau · Les Feuilles mortes", "Prévert", "Prévert"],
        ["Le Cageot · L'Huître · Le Savon · Le Parti pris des choses", "Ponge", "Ponge"],
        ["Le poème « Liberté » a été écrit par Paul Éluard en 1942. · Éluard", "El poema «Libertad» fue escrito por Éluard en 1942.", "Éluard"],
        ["J'écris ton nom Liberté", "escribo tu nombre, Libertad", "Éluard"],
        ["les mots de tous les jours", "el lenguaje de Prévert", "Prévert"],
        ["Rappelle-toi Barbara, il pleuvait sans cesse sur Brest ce jour-là.", "Acuérdate, Barbara, llovía sin cesar en Brest ese día.", "Prévert"]
      ]],
      ej: [["Prévert écrit avec les mots de tous les jours.", "Prévert escribe con las palabras de todos los días."], ["Éluard a écrit « Liberté » en 1942.", "Éluard escribió «Libertad» en 1942."], ["Ponge décrit une huître comme un monde.", "Ponge describe una ostra como un mundo."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["« Liberté » est de Prévert.", "« Liberté » est de Paul Éluard (1942).", "No confundir."], ["Ponge écrit sur Elsa.", "Aragon écrit sur Elsa ; Ponge écrit sur les objets.", "Cada poeta su tema."], ["Prévert, une poésie savante et obscure", "Prévert, une poésie populaire et orale", "Estilo."]] }
  ],
  ejemplos: [
    { sit: "Les Yeux d'Elsa es de…", resp: "Aragon", pasos: ["Elsa Triolet."], porque: "Obras." },
    { sit: "Le Savon es un poema de…", resp: "Ponge", pasos: ["Objeto cotidiano."], porque: "Obras." },
    { sit: "Déjeuner du matin es de…", resp: "Prévert", pasos: ["Paroles."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Paroles es de…", o: ["1946", "1857"], a: 0, b: "gr", porque: "1857 = Les Fleurs du mal." },
    { q: "«Liberté» fue lanzado por…", o: ["la aviación aliada", "los surrealistas en un café"], a: 0, b: "gr", porque: "Resistencia." },
    { q: "Muchos poemas de Prévert se volvieron…", o: ["canciones", "novelas"], a: 0, b: "gr", porque: "Les Feuilles mortes." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pz-voix", "b6pz-choses"], k: "sort", ask: "¿Prévert o Ponge?", q: "Clasifica.", cats: ["Prévert", "Ponge"], items: [["Barbara", 0], ["Déjeuner du matin", 0], ["Pour faire le portrait d'un oiseau", 0], ["Les Feuilles mortes", 0], ["Le Cageot", 1], ["L'Huître", 1], ["Le Savon", 1], ["Le Parti pris des choses", 1]], pista: "¿Canción o un objeto?", why: "Poetas." },
    { fase: "guiada", c: ["b6pz-voix"], k: "choice", ask: "El autor de «Liberté» (1942):", q: "Elige.", o: ["Paul Éluard (1942)", "Jacques Prévert"], a: 0, pista: "Resistencia.", why: "Éluard." },
    { fase: "guiada", c: ["b6pz-voix"], k: "fill", ask: "Acuérdate, …", q: "Rappelle-toi ___ , il pleuvait sans cesse sur Brest.", acc: ["Barbara"], pista: "B…", why: "<b>Barbara</b>." },
    { fase: "indep", c: ["b6pz-voix"], k: "fill", ask: "Escribo tu…", q: "J'écris ton ___ : Liberté.", acc: ["nom"], why: "<b>nom</b>." },
    { fase: "indep", c: ["b6pz-voix", "b6pz-choses"], k: "match", ask: "Une cada poeta con su obra.", q: "Poeta → obra", pairs: [["Prévert", "Paroles"], ["Éluard", "Liberté"], ["Aragon", "Les Yeux d'Elsa"], ["Ponge", "Le Parti pris des choses"]], why: "Obras." },
    { fase: "indep", c: ["b6pz-voix"], k: "spot", ask: "Encuentra el error.", s: "Le poème « Liberté » a été écrit par [Jacques Prévert] en 1942 .", fix: "Paul Éluard", why: "<b>Paul Éluard</b>." },
    { fase: "aplica", c: ["b6pz-voix"], k: "choice", ask: "El gran libro de Prévert:", q: "Elige.", o: ["Paroles", "Alcools"], a: 0, why: "Paroles." },
    { fase: "aplica", c: ["b6pz-choses"], k: "choice", ask: "El tema de Ponge:", q: "Elige.", o: ["des objets quotidiens", "les grands mythes antiques"], a: 0, why: "Objetos." },
    { fase: "aplica", c: ["b6pz-voix"], k: "choice", ask: "El lenguaje de Prévert:", q: "Elige.", o: ["les mots de tous les jours", "un vocabulaire rare et savant"], a: 0, why: "Cotidiano." },
    { fase: "dominio", c: ["b6pz-voix"], k: "order", ask: "Ordena la frase.", tokens: ["J'écris", "ton nom", "Liberté"], why: "<b>J'écris ton nom Liberté</b>" },
    { fase: "dominio", c: ["b6pz-choses"], k: "spot", ask: "Encuentra el error.", s: "Dans Le Parti pris des choses , [Aragon] décrit une huître comme un monde .", fix: "Ponge", why: "<b>Ponge</b>." },
    { fase: "dominio", c: ["b6pz-voix", "b6pz-choses"], k: "listen", say: "Rappelle-toi Barbara, il pleuvait sans cesse sur Brest ce jour-là.", acc: ["Rappelle-toi Barbara, il pleuvait sans cesse sur Brest ce jour-là.", "Rappelle-toi Barbara il pleuvait sans cesse sur Brest ce jour-là."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Rappelle-toi Barbara, il pleuvait sans cesse sur Brest ce jour-là.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Jacques Prévert", "Prévert", "Paul Éluard", "Éluard", "Louis Aragon", "Aragon", "Elsa", "Francis Ponge", "Ponge", "René Char", "Barbara", "Brest", "Paroles", "Liberté", "Les Yeux d'Elsa", "Le Parti pris des choses", "Le Cageot", "L'Huître", "Le Savon", "Déjeuner du matin", "Les Feuilles mortes", "Alcools"], previo: [] }
};

/* ── 52. Le roman policier : de Lupin à Maigret ── */
E["lit-polar"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Le roman policier : de Lupin à Maigret",
  objetivo: {
    que: "Vas a conocer la novela policiaca en francés, sus grandes detectives y su vocabulario.",
    corto: "Le commissaire Maigret fume la pipe. · Arsène Lupin est un gentleman cambrioleur. · L'enquêteur cherche le mobile du crime.",
    podras: ["Usar el vocabulario del polar (novela policiaca, familiar): une enquête, un indice, un suspect, un commissaire, un meurtre, un mobile, le coupable.", "Presentar a los grandes personajes: Arsène Lupin (Maurice Leblanc, 1905), el comisario Maigret (Georges Simenon, belga, unas 75 novelas), Rouletabille (Gaston Leroux); la «Série noire» de Gallimard (1945).", "Citar autores actuales: Fred Vargas (el comisario Adamsberg), Pierre Lemaitre, Michel Bussi."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/rayo"],
    previos: ["El relato y el narrador (lección 10) y Maupassant (lección 39)."],
    capacidad: "Ahora hablas del polar y de sus investigadores."
  },
  requiere: R("b6re-narrateur", "b6mp-nouvelle"), recupera: ["b6re-narrateur"],
  conceptos: {
    "b6po-heros": { n: "le polar (familiar) = la novela policiaca; Arsène Lupin, gentleman cambrioleur (ladrón caballero) de Maurice Leblanc (1905); le commissaire Maigret de Georges Simenon, escritor belga (no francés): comisario humano, fuma en pipa, París, unas 75 novelas, resuelve sus investigaciones comprendiendo a los seres humanos; Rouletabille de Gaston Leroux; la Série noire de Gallimard (1945), novela negra; hoy Fred Vargas (le commissaire Adamsberg), Pierre Lemaitre, Michel Bussi", b: "gr" },
    "b6po-lexique": { n: "vocabulario de la investigación: l'enquête, l'indice (pista), l'interrogatoire, le commissaire, l'enquêteur, le suspect; vocabulario del crimen: le meurtre, le vol, le coupable, l'arme, le mobile (móvil del crimen)", b: "gr" }
  },
  video: {
    titulo: "El polar", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le polar", seg: [
        { es: "Hola. Ladrones, comisarios e indicios." } ] },
      { v: "frase", filas: [
          { nota: "Maigret", p: 1, partes: [["Le commissaire Maigret fume la pipe.", "-", 1]] },
          { nota: "Lupin", p: 2, partes: [["Arsène Lupin est un gentleman cambrioleur.", "-", 2]] },
          { nota: "móvil", p: 3, partes: [["L'enquêteur cherche le mobile du crime.", "-", 3]] } ], seg: [
        { fr: "Le commissaire Maigret fume la pipe.", p: 1 }, { fr: "Arsène Lupin est un gentleman cambrioleur.", p: 2 }, { fr: "L'enquêteur cherche le mobile du crime.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Georges Simenon era…", o: ["belga", "francés"], a: 0, es: true,
        bien: "¡Sí! Francofonía.", mal: "Era belga.",
        seg: [ { es: "Pausa. Belga." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Maigret", "Arsène Lupin", "l'enquête", "l'indice", "le mobile", "le coupable"], seg: [
        { es: "Héroes y vocabulario.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Noche de novela negra", img: "bg-noche", yo: "camila",
    escena: "Camila y Hugo eligen un polar para el viaje en tren.",
    pj: PJ,
    lineas: [
      ["hugo", "Pour le train, je prends un polar : un Maigret. — Le commissaire Maigret fume la pipe et travaille à Paris, non ? — Oui. Il résout ses enquêtes en comprenant les êtres humains.", "Para el tren, llevo un polar: un Maigret. — El comisario Maigret fuma en pipa y trabaja en París, ¿no? — Sí. Resuelve sus investigaciones comprendiendo a los seres humanos."],
      ["camila", "Simenon était français ? — Non, belge ! Il a écrit environ 75 romans avec Maigret. Moi, je préfère Arsène Lupin, le gentleman cambrioleur de Maurice Leblanc, en 1905.", "¿Simenon era francés? — ¡No, belga! Escribió unas 75 novelas con Maigret. Yo prefiero a Arsène Lupin, el ladrón caballero de Maurice Leblanc, de 1905."],
      ["hugo", "Dans un polar, l'enquêteur cherche le mobile du crime. Il trouve un indice, interroge un suspect et découvre le coupable.", "En un polar, el investigador busca el móvil del crimen. Encuentra un indicio, interroga a un sospechoso y descubre al culpable."],
      ["camila", "Et aujourd'hui ? — Fred Vargas, avec le commissaire Adamsberg, ou Michel Bussi. Et la Série noire de Gallimard existe depuis 1945.", "¿Y hoy? — Fred Vargas, con el comisario Adamsberg, o Michel Bussi. Y la Série noire de Gallimard existe desde 1945."]
    ],
    fijate: "Fíjate: un polar, le commissaire Maigret, la pipe, résoudre une enquête, Simenon était belge, environ 75 romans, Arsène Lupin le gentleman cambrioleur (1905), le mobile du crime, un indice, un suspect, le coupable, le commissaire Adamsberg, la Série noire (1945)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Héroes y vocabulario",
      idea: "Le polar es la palabra familiar para la novela policiaca. Grandes personajes: Arsène Lupin, el ladrón caballero de Maurice Leblanc (1905); el comisario Maigret del belga Georges Simenon (unas 75 novelas): fuma en pipa, trabaja en París y resuelve sus casos comprendiendo a los seres humanos; Rouletabille, de Gaston Leroux. La «Série noire» de Gallimard (1945) lanza la novela negra. Hoy: Fred Vargas (el comisario Adamsberg), Pierre Lemaitre, Michel Bussi. Vocabulario: une enquête, un indice, un interrogatoire, un suspect, un meurtre, un vol, l'arme, le mobile, le coupable.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Campo"], [
        ["Georges Simenon", "el creador de Maigret", "héros"],
        ["un gentleman cambrioleur", "Arsène Lupin", "héros"],
        ["un roman policier", "un polar", "héros"],
        ["L'enquêteur cherche le mobile du crime. · mobile", "El investigador busca el móvil del crimen.", "Crimen"],
        ["Fred Vargas a créé le commissaire Adamsberg. · Adamsberg", "Fred Vargas creó al comisario Adamsberg.", "héros"],
        ["Maigret = Simenon · Arsène Lupin = Maurice Leblanc · Adamsberg = Fred Vargas · Rouletabille = Gaston Leroux", "detectives y autores", "resumen"],
        ["l'enquête · l'indice · l'interrogatoire · le commissaire", "la investigación", "Investigación"],
        ["le meurtre · le vol · le coupable · l'arme", "el crimen", "Crimen"],
        ["Le commissaire Maigret a été créé par l'écrivain belge Georges Simenon. · belge", "Maigret fue creado por el escritor belga Simenon.", "héros"],
        ["Le commissaire cherche un indice", "El comisario busca un indicio", "Investigación"],
        ["la Série noire (1945)", "la colección de novela negra", "héros"],
        ["Le commissaire Maigret résout ses enquêtes en comprenant les êtres humains.", "Maigret resuelve sus casos comprendiendo a los seres humanos.", "Investigación"]
      ]],
      ej: [["Le commissaire Maigret fume la pipe.", "El comisario Maigret fuma en pipa."], ["Arsène Lupin est un gentleman cambrioleur.", "Arsène Lupin es un ladrón caballero."], ["L'enquêteur interroge un suspect.", "El investigador interroga a un sospechoso."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Simenon était français.", "Georges Simenon était belge.", "Francofonía."], ["le mobile = le téléphone", "le mobile du crime = la raison du crime", "Falso amigo en contexto."], ["Arsène Lupin est un commissaire.", "Arsène Lupin est un gentleman cambrioleur.", "Ladrón, no policía."]] }
  ],
  ejemplos: [
    { sit: "Rouletabille es de…", resp: "Gaston Leroux", pasos: ["Periodista detective."], porque: "Autores." },
    { sit: "«l'interrogatoire» pertenece a…", resp: "Investigación", pasos: ["Preguntas al sospechoso."], porque: "Vocabulario." },
    { sit: "«l'arme» pertenece a…", resp: "Crimen", pasos: ["El instrumento."], porque: "Vocabulario." }
  ],
  comprueba: [
    { q: "Arsène Lupin nace en…", o: ["1905", "1945"], a: 0, b: "gr", porque: "1945 = Série noire." },
    { q: "Maigret fuma…", o: ["en pipa", "cigarrillos"], a: 0, b: "gr", porque: "La pipa." },
    { q: "Maigret trabaja en…", o: ["París", "Bruselas"], a: 0, b: "gr", porque: "Comisario parisino." }
  ],
  practica: [
    { fase: "guiada", c: ["b6po-lexique"], k: "sort", ask: "¿Investigación o crimen?", q: "Clasifica.", cats: ["Investigación", "Crimen"], items: [["l'enquête", 0], ["l'indice", 0], ["l'interrogatoire", 0], ["le commissaire", 0], ["le meurtre", 1], ["le vol", 1], ["le coupable", 1], ["l'arme", 1]], pista: "¿Quien busca o lo que pasó?", why: "Vocabulario." },
    { fase: "guiada", c: ["b6po-heros"], k: "choice", ask: "El creador de Maigret:", q: "Elige.", o: ["Georges Simenon", "Maurice Leblanc"], a: 0, pista: "Belga.", why: "Simenon." },
    { fase: "guiada", c: ["b6po-lexique"], k: "fill", ask: "El móvil del crimen.", q: "L'enquêteur cherche le ___ du crime.", acc: ["mobile"], pista: "mo…", why: "<b>mobile</b>." },
    { fase: "indep", c: ["b6po-heros"], k: "fill", ask: "El comisario de Fred Vargas.", q: "Fred Vargas a créé le commissaire ___ .", acc: ["Adamsberg"], why: "<b>Adamsberg</b>." },
    { fase: "indep", c: ["b6po-heros"], k: "match", ask: "Une cada detective con su autor.", q: "Detective → autor", pairs: [["Maigret", "Simenon"], ["Arsène Lupin", "Maurice Leblanc"], ["Adamsberg", "Fred Vargas"], ["Rouletabille", "Gaston Leroux"]], why: "Autores." },
    { fase: "indep", c: ["b6po-heros"], k: "spot", ask: "Encuentra el error.", s: "Le commissaire Maigret a été créé par l'écrivain belge [Maurice Leblanc] .", fix: "Georges Simenon", why: "<b>Georges Simenon</b>." },
    { fase: "aplica", c: ["b6po-heros"], k: "choice", ask: "Arsène Lupin es…", q: "Elige.", o: ["un gentleman cambrioleur", "un commissaire"], a: 0, why: "Ladrón caballero." },
    { fase: "aplica", c: ["b6po-heros"], k: "choice", ask: "«Un polar» es…", q: "Elige.", o: ["un roman policier", "un poème du Nord"], a: 0, why: "Familiar." },
    { fase: "aplica", c: ["b6po-heros"], k: "spot", ask: "Encuentra el error.", s: "Georges Simenon était un écrivain [français] .", fix: "belge", why: "<b>belge</b>." },
    { fase: "dominio", c: ["b6po-lexique"], k: "order", ask: "Ordena la frase.", tokens: ["Le commissaire", "cherche", "un indice"], why: "<b>Le commissaire cherche un indice</b>" },
    { fase: "dominio", c: ["b6po-heros"], k: "choice", ask: "La colección de novela negra de Gallimard:", q: "Elige.", o: ["la Série noire (1945)", "la Pléiade"], a: 0, why: "Série noire." },
    { fase: "dominio", c: ["b6po-heros", "b6po-lexique"], k: "listen", say: "Le commissaire Maigret résout ses enquêtes en comprenant les êtres humains.", acc: ["Le commissaire Maigret résout ses enquêtes en comprenant les êtres humains."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le commissaire Maigret résout ses enquêtes en comprenant les êtres humains.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Maigret", "Georges Simenon", "Simenon", "Arsène Lupin", "Lupin", "Maurice Leblanc", "Leblanc", "Rouletabille", "Gaston Leroux", "Fred Vargas", "Adamsberg", "Pierre Lemaitre", "Michel Bussi", "Gallimard", "Série noire", "Pléiade", "Paris", "Bruxelles"], previo: [] }
};

/* ── 53. Patrick Modiano, prix Nobel 2014 ── */
E["lit-modiano"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Patrick Modiano, prix Nobel 2014",
  objetivo: {
    que: "Vas a conocer a Patrick Modiano, premio Nobel 2014, y su obra sobre la memoria y el París de la Ocupación.",
    corto: "Modiano a reçu le prix Nobel en 2014. · Dora Bruder est une enquête sur une jeune fille disparue. · Ses romans se passent souvent à Paris.",
    podras: ["Situar a Modiano (nacido en 1945), premio Nobel 2014 «por el arte de la memoria».", "Presentar Rue des boutiques obscures (Goncourt 1978: un detective amnésico busca su pasado) y Dora Bruder (1997: investigación sobre una adolescente judía deportada); Place de l'Étoile (1968), su primera novela.", "Describir sus temas (la memoria, la identidad, la Ocupación, París) y su estilo: bruma, recuerdos inciertos, nombres de calles."],
    iconos: ["ic2/mundo", "ic2/libro", "ic2/pergamino"],
    previos: ["Proust y la memoria (lección 43) y la autobiografía (lección 16)."],
    capacidad: "Ahora presentas la obra de Modiano y su arte de la memoria."
  },
  requiere: R("b6pr-memoire", "b6au-genres"), recupera: ["b6pr-memoire"],
  conceptos: {
    "b6md-oeuvre": { n: "Patrick Modiano (nacido en 1945), premio Nobel de literatura 2014 (no 2022) «por el arte de la memoria»; Place de l'Étoile (1968), primera novela; Rue des boutiques obscures (Goncourt 1978): un detective amnésico busca su pasado; Dora Bruder (1997): investigación documental sobre una adolescente judía deportada, víctima del Holocausto", b: "gr" },
    "b6md-memoire": { n: "temas: la mémoire, l'identité, l'Occupation, Paris (no la conquista espacial, los caballeros, la vida en la granja, la Edad Media); no escribe novelas históricas clásicas sino sobre la memoria borrosa: bruma, flou, recuerdos inciertos, nombres de calles; sus novelas transcurren a menudo en París", b: "gr" }
  },
  video: {
    titulo: "Modiano", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "l'art de la mémoire", seg: [
        { es: "Hola. Calles de París y recuerdos borrosos." } ] },
      { v: "frase", filas: [
          { nota: "Nobel", p: 1, partes: [["Modiano a reçu le prix Nobel en 2014.", "-", 1]] },
          { nota: "Dora Bruder", p: 2, partes: [["Dora Bruder est une enquête sur une jeune fille disparue.", "-", 2]] },
          { nota: "París", p: 3, partes: [["Ses romans se passent souvent à Paris.", "-", 3]] } ], seg: [
        { fr: "Modiano a reçu le prix Nobel en deux mille quatorze.", p: 1 }, { fr: "Dora Bruder est une enquête sur une jeune fille disparue.", p: 2 }, { fr: "Ses romans se passent souvent à Paris.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Modiano escribe sobre…", o: ["la memoria borrosa", "batallas históricas clásicas"], a: 0, es: true,
        bien: "¡Sí! Su estilo propio.", mal: "Escribe sobre la memoria.",
        seg: [ { es: "Pausa. La memoria." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Rue des boutiques obscures", "Dora Bruder", "la mémoire", "l'Occupation", "l'identité", "Paris"], seg: [
        { es: "Obras y temas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Paseo por las calles de Modiano", img: "bg-paris", yo: "camila",
    escena: "Madame Sofia guía a Camila por un barrio de París que aparece en las novelas de Modiano.",
    pj: PJ,
    lineas: [
      ["sofia", "Ses romans se passent souvent à Paris : des noms de rues, des cafés, des souvenirs incertains. Patrick Modiano a reçu le prix Nobel de littérature en 2014, pour « l'art de la mémoire ».", "Sus novelas transcurren a menudo en París: nombres de calles, cafés, recuerdos inciertos. Patrick Modiano recibió el Nobel de literatura en 2014, por «el arte de la memoria»."],
      ["camila", "Par quoi je commence ? — Rue des boutiques obscures, prix Goncourt en 1978 : un détective amnésique cherche son passé.", "¿Por cuál empiezo? — Calle de las Tiendas Oscuras, premio Goncourt en 1978: un detective amnésico busca su pasado."],
      ["sofia", "Et Dora Bruder, en 1997 : une enquête sur une jeune fille juive disparue pendant l'Occupation, déportée. Modiano cherche ses traces dans les archives.", "Y Dora Bruder, en 1997: una investigación sobre una joven judía desaparecida durante la Ocupación, deportada. Modiano busca sus huellas en los archivos."],
      ["camila", "Ce sont des romans historiques ? — Pas vraiment. Dans les romans de Modiano, les souvenirs sont toujours incertains : la mémoire, l'identité, une sorte de brume.", "¿Son novelas históricas? — No realmente. En las novelas de Modiano, los recuerdos son siempre inciertos: la memoria, la identidad, una especie de bruma."]
    ],
    fijate: "Fíjate: des noms de rues, des souvenirs incertains, le prix Nobel en 2014, l'art de la mémoire, Rue des boutiques obscures (Goncourt 1978), un détective amnésique, Dora Bruder (1997), une jeune fille juive déportée, l'Occupation, l'identité, la brume."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obras y temas",
      idea: "Patrick Modiano (nacido en 1945) construye una obra obsesionada por la memoria, la identidad y el París de la Ocupación. Primera novela: Place de l'Étoile (1968). Rue des boutiques obscures (Goncourt 1978): un detective amnésico busca su pasado. Dora Bruder (1997): investigación documental sobre una adolescente judía deportada. No escribe novelas históricas clásicas, sino sobre una memoria borrosa: bruma, recuerdos inciertos, nombres de calles. Premio Nobel de literatura 2014 «por el arte de la memoria».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema de Modiano?"], [
        ["2014", "el año de su Nobel", "œuvre"],
        ["une jeune fille juive déportée", "Dora Bruder", "œuvre"],
        ["l'Occupation", "la época que obsesiona a Modiano", "Sí"],
        ["Rue des boutiques obscures · obscures", "Calle de las Tiendas Oscuras", "œuvre"],
        ["Son œuvre est un art de la mémoire. · mémoire", "Su obra es un arte de la memoria.", "Sí"],
        ["Rue des boutiques obscures = Goncourt 1978 · Dora Bruder = 1997 · Nobel = 2014 · Place de l'Étoile = primera novela (1968)", "fechas", "resumen"],
        ["la mémoire · l'identité · l'Occupation · Paris", "sus temas", "Sí"],
        ["la conquête spatiale · les chevaliers · la vie à la ferme · le Moyen Âge", "temas ajenos", "No"],
        ["Patrick Modiano a reçu le prix Nobel de littérature en 2014.", "Modiano recibió el Nobel de literatura en 2014.", "œuvre"],
        ["Modiano écrit sur la mémoire", "Modiano escribe sobre la memoria", "Sí"],
        ["un détective amnésique", "el héroe de Rue des boutiques obscures", "œuvre"],
        ["Dans les romans de Modiano, les souvenirs sont toujours incertains.", "En las novelas de Modiano, los recuerdos son siempre inciertos.", "Sí"]
      ]],
      ej: [["Modiano a reçu le prix Nobel en 2014.", "Modiano recibió el Nobel en 2014."], ["Dora Bruder est une enquête sur une jeune fille disparue.", "Dora Bruder es una investigación sobre una joven desaparecida."], ["Ses romans se passent souvent à Paris.", "Sus novelas transcurren a menudo en París."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Modiano écrit des romans historiques classiques.", "Modiano écrit sur la mémoire floue.", "Estilo propio."], ["Modiano, prix Nobel 2022", "Modiano, prix Nobel 2014", "2022 = Ernaux."], ["Dora Bruder est un roman de science-fiction.", "Dora Bruder est une enquête sur une jeune fille déportée.", "Investigación documental."]] }
  ],
  ejemplos: [
    { sit: "La primera novela de Modiano:", resp: "Place de l'Étoile (1968)", pasos: ["1968."], porque: "Fechas." },
    { sit: "¿Los caballeros son tema de Modiano?", resp: "No", pasos: ["Memoria y Ocupación."], porque: "Temas." },
    { sit: "Rue des boutiques obscures recibió…", resp: "le Goncourt (1978)", pasos: ["Premio."], porque: "Fechas." }
  ],
  comprueba: [
    { q: "Modiano nació en…", o: ["1945", "1914"], a: 0, b: "gr", porque: "1914 = Duras." },
    { q: "Dora Bruder es de…", o: ["1997", "1978"], a: 0, b: "gr", porque: "1978 = Rue des boutiques obscures." },
    { q: "El estilo de Modiano evoca…", o: ["una bruma de recuerdos", "un campo de batalla épico"], a: 0, b: "gr", porque: "Memoria borrosa." }
  ],
  practica: [
    { fase: "guiada", c: ["b6md-memoire"], k: "sort", ask: "¿Tema de Modiano o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la mémoire", 0], ["l'identité", 0], ["l'Occupation", 0], ["Paris", 0], ["la conquête spatiale", 1], ["les chevaliers", 1], ["la vie à la ferme", 1], ["le Moyen Âge", 1]], pista: "Memoria y París.", why: "Temas." },
    { fase: "guiada", c: ["b6md-oeuvre"], k: "choice", ask: "El año del Nobel de Modiano:", q: "Elige.", o: ["2014", "2022"], a: 0, pista: "Antes de Ernaux.", why: "2014." },
    { fase: "guiada", c: ["b6md-oeuvre"], k: "fill", ask: "Calle de las Tiendas Oscuras.", q: "Rue des boutiques ___ .", acc: ["obscures"], pista: "oscuras.", why: "<b>obscures</b>." },
    { fase: "indep", c: ["b6md-memoire"], k: "fill", ask: "Un arte de la memoria.", q: "Son œuvre est un art de la ___ .", acc: ["mémoire"], why: "<b>mémoire</b>." },
    { fase: "indep", c: ["b6md-oeuvre"], k: "match", ask: "Une cada obra o hito con su fecha.", q: "Obra → fecha", pairs: [["Rue des boutiques obscures", "Goncourt 1978"], ["Dora Bruder", "1997"], ["Nobel", "2014"], ["Place de l'Étoile", "primera novela (1968)"]], why: "Fechas." },
    { fase: "indep", c: ["b6md-oeuvre"], k: "spot", ask: "Encuentra el error.", s: "Patrick Modiano a reçu le prix Nobel de littérature en [2022] .", fix: "2014", why: "<b>2014</b>." },
    { fase: "aplica", c: ["b6md-oeuvre"], k: "choice", ask: "Dora Bruder trata de…", q: "Elige.", o: ["une jeune fille juive déportée", "un détective amnésique"], a: 0, why: "Investigación." },
    { fase: "aplica", c: ["b6md-memoire"], k: "choice", ask: "La época que obsesiona a Modiano:", q: "Elige.", o: ["l'Occupation", "la Renaissance"], a: 0, why: "Ocupación." },
    { fase: "aplica", c: ["b6md-oeuvre"], k: "choice", ask: "El héroe de Rue des boutiques obscures:", q: "Elige.", o: ["un détective amnésique", "un commissaire belge"], a: 0, why: "Amnesia." },
    { fase: "dominio", c: ["b6md-memoire"], k: "order", ask: "Ordena la frase.", tokens: ["Modiano", "écrit", "sur la mémoire"], why: "<b>Modiano écrit sur la mémoire</b>" },
    { fase: "dominio", c: ["b6md-memoire"], k: "spot", ask: "Encuentra el error.", s: "Dans les romans de Modiano , les souvenirs sont toujours [précis] .", fix: "incertains", why: "<b>incertains</b>." },
    { fase: "dominio", c: ["b6md-oeuvre", "b6md-memoire"], k: "listen", say: "Dans les romans de Modiano, les souvenirs sont toujours incertains.", acc: ["Dans les romans de Modiano, les souvenirs sont toujours incertains."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans les romans de Modiano, les souvenirs sont toujours incertains.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Patrick Modiano", "Modiano", "Dora Bruder", "Rue des boutiques obscures", "Place de l'Étoile", "Paris", "Nobel", "Goncourt", "Occupation", "Renaissance", "Ernaux"], previo: [] }
};

/* ── 54. Annie Ernaux, prix Nobel 2022 ── */
E["lit-ernaux"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Annie Ernaux, prix Nobel 2022",
  objetivo: {
    que: "Vas a conocer a Annie Ernaux, premio Nobel 2022, y su escritura «autosociobiográfica».",
    corto: "Annie Ernaux a reçu le prix Nobel en 2022. · La Place raconte la vie de son père. · Elle écrit avec une écriture plate.",
    podras: ["Explicar la autosociobiografía: contar la propia vida (familia popular de Normandía, ascenso social por la escuela, aborto clandestino, amor) como un hecho social.", "Explicar la écriture plate: estilo sobrio, neutro y preciso, elegido deliberadamente (no «mal escrito»).", "Asociar obras: La Place (Renaudot 1984, el padre), Une femme (la madre), L'Événement (un aborto clandestino), Les Années (2008, autobiografía colectiva); Nobel 2022, primera francesa premiada."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/bandera"],
    previos: ["La autobiografía y la autoficción (lección 16) y Modiano (lección 53)."],
    capacidad: "Ahora explicas la escritura de Annie Ernaux."
  },
  requiere: R("b6au-autofiction", "b6md-memoire"), recupera: ["b6au-autofiction"],
  conceptos: {
    "b6er-ecriture": { n: "Annie Ernaux (nacida en 1940), premio Nobel 2022, primera francesa premiada; inventa la autosociobiographie: cuenta su vida como un hecho social (familia popular de Normandía, ascenso social por la escuela, vergüenza social, aborto clandestino, amor); écriture plate: estilo sobrio, neutro, sin adornos, elegido deliberadamente (no mal escrito); temas: l'autobiographie, la sociologie, l'écriture plate, la mémoire collective (no lo maravilloso, la epopeya, los alejandrinos, la ciencia ficción); transforma su propia vida en historia colectiva", b: "gr" },
    "b6er-oeuvres": { n: "La Place (premio Renaudot 1984): la vida de su padre (no de su hermana) y la vergüenza social; Une femme: la madre; L'Événement: un aborto clandestino; Les Années (2008): autobiografía colectiva (1941-2006), la memoria colectiva", b: "gr" }
  },
  video: {
    titulo: "Annie Ernaux", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "l'écriture plate", seg: [
        { es: "Hola. Lo íntimo como hecho social." } ] },
      { v: "frase", filas: [
          { nota: "Nobel", p: 1, partes: [["Annie Ernaux a reçu le prix Nobel en 2022.", "-", 1]] },
          { nota: "el padre", p: 2, partes: [["La Place raconte la vie de son père.", "-", 2]] },
          { nota: "estilo", p: 3, partes: [["Elle écrit avec une écriture plate.", "-", 3]] } ], seg: [
        { fr: "Annie Ernaux a reçu le prix Nobel en deux mille vingt-deux.", p: 1 }, { fr: "La Place raconte la vie de son père.", p: 2 }, { fr: "Elle écrit avec une écriture plate.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«Écriture plate» significa…", o: ["sobria, sin adornos, a propósito", "mal escrita"], a: 0, es: true,
        bien: "¡Sí! Elección estética.", mal: "Es sobria a propósito.",
        seg: [ { es: "Pausa. Sobria a propósito." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["La Place", "Une femme", "L'Événement", "Les Années", "l'autosociobiographie", "l'écriture plate"], seg: [
        { es: "Obras y escritura.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Club de lectura", img: "bg-biblioteca", yo: "camila",
    escena: "En el club de lectura, Camila presenta La Place de Annie Ernaux.",
    pj: PJ,
    lineas: [
      ["camila", "J'ai lu La Place, d'Annie Ernaux, prix Renaudot 1984. La Place raconte la vie de son père, un ouvrier devenu petit commerçant en Normandie.", "Leí El lugar, de Annie Ernaux, premio Renaudot 1984. El lugar cuenta la vida de su padre, un obrero convertido en pequeño comerciante en Normandía."],
      ["sofia", "Et le style ? — Très simple, presque sans adjectifs. Elle écrit avec une écriture plate : ce n'est pas mal écrit, c'est un choix. Elle refuse les effets.", "¿Y el estilo? — Muy simple, casi sin adjetivos. Escribe con una escritura plana: no está mal escrito, es una elección. Rechaza los efectos."],
      ["camila", "Elle parle aussi de la honte sociale : elle a fait des études et elle s'est éloignée de son milieu. C'est l'autosociobiographie : sa vie comme un fait social.", "También habla de la vergüenza social: estudió y se alejó de su medio. Es la autosociobiografía: su vida como un hecho social."],
      ["sofia", "Lis ensuite Les Années, en 2008 : Annie Ernaux transforme sa propre vie en histoire collective. Elle a reçu le prix Nobel en 2022, la première Française.", "Lee después Los años, de 2008: Annie Ernaux transforma su propia vida en historia colectiva. Recibió el Nobel en 2022, la primera francesa."]
    ],
    fijate: "Fíjate: La Place (Renaudot 1984), la vie de son père, en Normandie, une écriture plate, ce n'est pas mal écrit, c'est un choix, la honte sociale, l'autosociobiographie, un fait social, Les Années (2008), une histoire collective, le prix Nobel en 2022."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Obras y escritura",
      idea: "Annie Ernaux (nacida en 1940) inventa una escritura «autosociobiográfica»: cuenta su vida (familia popular de Normandía, ascenso social por la escuela, aborto clandestino, amor) como un hecho social. Su «écriture plate» es sobria, neutra y precisa, elegida a propósito: no está mal escrita. Obras: La Place (Renaudot 1984), sobre su padre y la vergüenza social; Une femme, sobre su madre; L'Événement, sobre un aborto clandestino; Les Années (2008), autobiografía colectiva. Premio Nobel 2022, primera francesa premiada.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Escritura de Ernaux?"], [
        ["2022", "el año de su Nobel", "œuvres"],
        ["de son père", "de quién habla La Place", "œuvres"],
        ["un style sobre et neutre", "su estilo", "Sí"],
        ["Les Années est une autobiographie collective. · Années", "Los años es una autobiografía colectiva.", "œuvres"],
        ["La Place a reçu le prix Renaudot en 1984. · Renaudot", "El lugar recibió el Renaudot en 1984.", "œuvres"],
        ["La Place = el padre · Une femme = la madre · L'Événement = un aborto clandestino · Les Années = la memoria colectiva", "obras", "resumen"],
        ["l'autobiographie · la sociologie · l'écriture plate · la mémoire collective", "rasgos de su obra", "Sí"],
        ["le merveilleux · l'épopée · les alexandrins · la science-fiction", "rasgos ajenos", "No"],
        ["Dans La Place, Annie Ernaux raconte la vie de son père. · père", "En El lugar, Ernaux cuenta la vida de su padre.", "œuvres"],
        ["Elle écrit sur sa famille", "Escribe sobre su familia", "Sí"],
        ["l'autosociobiographie", "la vida propia como hecho social", "Sí"],
        ["Annie Ernaux transforme sa propre vie en histoire collective.", "Ernaux transforma su propia vida en historia colectiva.", "Sí"]
      ]],
      ej: [["Annie Ernaux a reçu le prix Nobel en 2022.", "Ernaux recibió el Nobel en 2022."], ["La Place raconte la vie de son père.", "El lugar cuenta la vida de su padre."], ["Elle écrit avec une écriture plate.", "Escribe con una escritura plana."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["écriture plate = mal écrit", "écriture plate = sobre, sans ornements, volontairement", "Elección estética."], ["Ernaux, prix Nobel 2014", "Ernaux, prix Nobel 2022", "2014 = Modiano."], ["La Place raconte la vie de sa mère.", "La Place raconte la vie de son père ; Une femme, celle de sa mère.", "No confundir."]] }
  ],
  ejemplos: [
    { sit: "Une femme trata de…", resp: "la madre", pasos: ["Después de La Place."], porque: "Obras." },
    { sit: "¿Lo maravilloso es rasgo de Ernaux?", resp: "No", pasos: ["Realidad social."], porque: "Escritura." },
    { sit: "L'Événement trata de…", resp: "un aborto clandestino", pasos: ["Años 60."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Ernaux nació en…", o: ["1940", "1945"], a: 0, b: "gr", porque: "1945 = Modiano." },
    { q: "Ernaux es de una familia…", o: ["popular de Normandía", "aristocrática de París"], a: 0, b: "gr", porque: "Ascenso social." },
    { q: "Les Années es de…", o: ["2008", "1984"], a: 0, b: "gr", porque: "1984 = La Place." }
  ],
  practica: [
    { fase: "guiada", c: ["b6er-ecriture"], k: "sort", ask: "¿Rasgo de la obra de Ernaux o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["l'autobiographie", 0], ["la sociologie", 0], ["l'écriture plate", 0], ["la mémoire collective", 0], ["le merveilleux", 1], ["l'épopée", 1], ["les alexandrins", 1], ["la science-fiction", 1]], pista: "Lo íntimo y lo social.", why: "Escritura." },
    { fase: "guiada", c: ["b6er-ecriture"], k: "choice", ask: "El año del Nobel de Ernaux:", q: "Elige.", o: ["2022", "2014"], a: 0, pista: "Después de Modiano.", why: "2022." },
    { fase: "guiada", c: ["b6er-oeuvres"], k: "fill", ask: "Los años.", q: "Les ___ est une autobiographie collective.", acc: ["Années"], pista: "años.", why: "<b>Années</b>." },
    { fase: "indep", c: ["b6er-oeuvres"], k: "fill", ask: "El premio de La Place (1984).", q: "La Place a reçu le prix ___ en 1984.", acc: ["Renaudot"], why: "<b>Renaudot</b>." },
    { fase: "indep", c: ["b6er-oeuvres"], k: "match", ask: "Une cada obra con su tema.", q: "Obra → tema", pairs: [["La Place", "el padre"], ["Une femme", "la madre"], ["L'Événement", "un aborto clandestino"], ["Les Années", "la memoria colectiva"]], why: "Obras." },
    { fase: "indep", c: ["b6er-oeuvres"], k: "spot", ask: "Encuentra el error.", s: "Dans La Place , Annie Ernaux raconte la vie de [sa sœur] .", fix: "son père", why: "<b>son père</b>." },
    { fase: "aplica", c: ["b6er-ecriture"], k: "choice", ask: "Su estilo:", q: "Elige.", o: ["un style sobre et neutre", "un style lyrique et orné"], a: 0, why: "Écriture plate." },
    { fase: "aplica", c: ["b6er-ecriture"], k: "choice", ask: "La autosociobiografía es…", q: "Elige.", o: ["la vida propia como hecho social", "una biografía de un rey"], a: 0, es: true, why: "Lo íntimo y lo social." },
    { fase: "aplica", c: ["b6er-ecriture"], k: "spot", ask: "Encuentra el error.", s: "L'écriture plate d'Annie Ernaux est [mal écrite] .", fix: "sobre et volontaire", why: "Es <b>sobre et volontaire</b>." },
    { fase: "dominio", c: ["b6er-ecriture"], k: "order", ask: "Ordena la frase.", tokens: ["Elle écrit", "sur", "sa famille"], why: "<b>Elle écrit sur sa famille</b>" },
    { fase: "dominio", c: ["b6er-oeuvres"], k: "choice", ask: "La Place habla…", q: "Elige.", o: ["de son père", "de son mari"], a: 0, why: "El padre." },
    { fase: "dominio", c: ["b6er-ecriture", "b6er-oeuvres"], k: "listen", say: "Annie Ernaux transforme sa propre vie en histoire collective.", acc: ["Annie Ernaux transforme sa propre vie en histoire collective."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Annie Ernaux transforme sa propre vie en histoire collective.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Annie Ernaux", "Ernaux", "La Place", "Une femme", "L'Événement", "Les Années", "Normandie", "Nobel", "Renaudot", "Modiano"], previo: [] }
};

/* ── 55. La littérature française contemporaine ── */
E["lit-contemporains"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La littérature française contemporaine",
  objetivo: {
    que: "Vas a orientarte en la literatura actual en francés: autores, premios y la rentrée littéraire.",
    corto: "Leïla Slimani a reçu le Goncourt pour Chanson douce. · La rentrée littéraire commence fin août. · Mohamed Mbougar Sarr est un écrivain sénégalais.",
    podras: ["Explicar la rentrée littéraire: temporada de otoño (finales de agosto a octubre) en la que se publican cientos de novelas antes de los premios.", "Asociar autores y obras: Houellebecq (La Carte et le Territoire, Goncourt 2010), Emmanuel Carrère (L'Adversaire, no ficción), Leïla Slimani (Chanson douce, Goncourt 2016), Marie NDiaye (Trois femmes puissantes, Goncourt 2009).", "Situar la apertura francófona: Mohamed Mbougar Sarr (senegalés, Goncourt 2021, La Plus Secrète Mémoire des hommes) y Kamel Daoud (Goncourt 2024)."],
    iconos: ["ic2/libros", "ic2/mundo", "ic2/bandera"],
    previos: ["Las francofonías (lección 8) y Camus y Kamel Daoud (lección 47)."],
    capacidad: "Ahora sigues la actualidad literaria francesa."
  },
  requiere: R("b6fc-auteurs", "b6cr-etranger"), recupera: ["b6fc-auteurs"],
  conceptos: {
    "b6ct-auteurs": { n: "autores actuales: Michel Houellebecq (Les Particules élémentaires, La Carte et le Territoire, Goncourt 2010: provocación y crisis de Occidente), Emmanuel Carrère (L'Adversaire, Le Royaume: récit de non-fiction), Leïla Slimani (Chanson douce, Goncourt 2016), Marie NDiaye (Trois femmes puissantes, Goncourt 2009), Mohamed Mbougar Sarr (escritor senegalés, La Plus Secrète Mémoire des hommes, Goncourt 2021), Kamel Daoud (Goncourt 2024); contemporáneos frente a clásicos (Balzac, Racine, Voltaire, Zola)", b: "gr" },
    "b6ct-rentree": { n: "la rentrée littéraire: temporada de publicaciones de otoño (no la vuelta al colegio ni la primavera): de finales de agosto a octubre se publican cientos de novelas, antes de los grandes premios (le roman lauréat du Goncourt)", b: "gr" }
  },
  video: {
    titulo: "Literatura actual", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "la rentrée littéraire", seg: [
        { es: "Hola. Cientos de novelas cada otoño." } ] },
      { v: "frase", filas: [
          { nota: "Slimani", p: 1, partes: [["Leïla Slimani a reçu le Goncourt pour Chanson douce.", "-", 1]] },
          { nota: "agosto", p: 2, partes: [["La rentrée littéraire commence fin août.", "-", 2]] },
          { nota: "Senegal", p: 3, partes: [["Mohamed Mbougar Sarr est un écrivain sénégalais.", "-", 3]] } ], seg: [
        { fr: "Leïla Slimani a reçu le Goncourt pour Chanson douce.", p: 1 }, { fr: "La rentrée littéraire commence fin août.", p: 2 }, { fr: "Mohamed Mbougar Sarr est un écrivain sénégalais.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«La rentrée littéraire» es…", o: ["la temporada de novedades de otoño", "la vuelta al colegio"], a: 0, es: true,
        bien: "¡Sí! Fenómeno editorial.", mal: "Es la temporada de otoño.",
        seg: [ { es: "Pausa. Otoño." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Houellebecq", "Carrère", "Slimani", "Marie NDiaye", "Mbougar Sarr", "la rentrée littéraire"], seg: [
        { es: "Autores y temporada.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "En la librería en septiembre", img: "bg-paris", yo: "camila",
    escena: "En septiembre, Camila entra en una librería de París llena de novedades.",
    pj: PJ,
    lineas: [
      ["camila", "Pourquoi il y a tant de nouveaux livres ? — C'est la rentrée littéraire ! Chaque automne, la rentrée littéraire voit paraître des centaines de romans, de fin août à octobre, avant les prix.", "¿Por qué hay tantos libros nuevos? — ¡Es la rentrée literaria! Cada otoño, la rentrée literaria ve aparecer cientos de novelas, de finales de agosto a octubre, antes de los premios."],
      ["hugo", "Qu'est-ce que tu me conseilles ? — Leïla Slimani a reçu le Goncourt en 2016 pour Chanson douce. Ou Marie NDiaye : Trois femmes puissantes, Goncourt 2009.", "¿Qué me recomiendas? — Leïla Slimani recibió el Goncourt en 2016 por Canción dulce. O Marie NDiaye: Tres mujeres fuertes, Goncourt 2009."],
      ["camila", "Et la francophonie ? — Mohamed Mbougar Sarr est un écrivain sénégalais : Goncourt 2021 avec La Plus Secrète Mémoire des hommes. Et Kamel Daoud a eu le Goncourt en 2024.", "¿Y la francofonía? — Mohamed Mbougar Sarr es un escritor senegalés: Goncourt 2021 con La más recóndita memoria de los hombres. Y Kamel Daoud obtuvo el Goncourt en 2024."],
      ["hugo", "Il y a aussi Houellebecq, La Carte et le Territoire, et Emmanuel Carrère : L'Adversaire est un récit de non-fiction. — Je prends le roman lauréat du Goncourt !", "También está Houellebecq, El mapa y el territorio, y Emmanuel Carrère: El adversario es un relato de no ficción. — ¡Me llevo la novela ganadora del Goncourt!"]
    ],
    fijate: "Fíjate: la rentrée littéraire, chaque automne, des centaines de romans, de fin août à octobre, avant les prix, le Goncourt 2016 pour Chanson douce, Trois femmes puissantes (2009), un écrivain sénégalais (2021), Kamel Daoud (2024), un récit de non-fiction, le roman lauréat du Goncourt."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y temporada",
      idea: "La literatura actual en francés es diversa. Michel Houellebecq (Les Particules élémentaires; La Carte et le Territoire, Goncourt 2010) escribe sobre la crisis de Occidente con provocación. Emmanuel Carrère practica la no ficción (L'Adversaire, Le Royaume). Leïla Slimani gana el Goncourt 2016 con Chanson douce; Marie NDiaye, el de 2009 con Trois femmes puissantes. La francofonía brilla: el senegalés Mohamed Mbougar Sarr (Goncourt 2021, La Plus Secrète Mémoire des hommes) y el argelino Kamel Daoud (Goncourt 2024). Cada otoño, la rentrée littéraire (de finales de agosto a octubre) publica cientos de novelas antes de los premios.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Época"], [
        ["la saison des nouveautés d'automne", "la rentrée littéraire", "rentrée"],
        ["Chanson douce", "la novela del Goncourt 2016", "Contemporáneo"],
        ["le Sénégal", "el país de Mohamed Mbougar Sarr", "Contemporáneo"],
        ["Trois femmes puissantes, de Marie NDiaye. · puissantes", "Tres mujeres fuertes, de Marie NDiaye.", "Contemporáneo"],
        ["L'Adversaire d'Emmanuel Carrère est un récit de non-fiction. · Adversaire", "El adversario de Carrère es un relato de no ficción.", "Contemporáneo"],
        ["Houellebecq = La Carte et le Territoire · Slimani = Chanson douce · Carrère = L'Adversaire · Mbougar Sarr = La Plus Secrète Mémoire des hommes", "autores y obras", "resumen"],
        ["Leïla Slimani · Marie NDiaye · Mohamed Mbougar Sarr · Kamel Daoud", "autores de hoy", "Contemporáneo"],
        ["Balzac · Racine · Voltaire · Zola", "autores clásicos", "Clásico"],
        ["La rentrée littéraire a lieu chaque année en automne. · automne", "La rentrée literaria tiene lugar cada año en otoño.", "rentrée"],
        ["Il a lu le roman lauréat du Goncourt", "Leyó la novela ganadora del Goncourt", "rentrée"],
        ["la crise de l'Occident", "un tema de Houellebecq", "Contemporáneo"],
        ["Chaque automne, la rentrée littéraire voit paraître des centaines de romans.", "Cada otoño, la rentrée literaria ve aparecer cientos de novelas.", "rentrée"]
      ]],
      ej: [["Leïla Slimani a reçu le Goncourt pour Chanson douce.", "Leïla Slimani recibió el Goncourt por Canción dulce."], ["La rentrée littéraire commence fin août.", "La rentrée literaria empieza a finales de agosto."], ["Mohamed Mbougar Sarr est un écrivain sénégalais.", "Mohamed Mbougar Sarr es un escritor senegalés."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["rentrée littéraire = la rentrée des classes", "rentrée littéraire = la saison des publications d'automne", "Fenómeno editorial."], ["La rentrée littéraire a lieu au printemps.", "La rentrée littéraire a lieu en automne.", "Fin de agosto a octubre."], ["Mbougar Sarr est un écrivain belge.", "Mbougar Sarr est un écrivain sénégalais.", "Francofonía."]] }
  ],
  ejemplos: [
    { sit: "Le Royaume es de…", resp: "Emmanuel Carrère", pasos: ["No ficción."], porque: "Autores." },
    { sit: "Voltaire es…", resp: "Clásico", pasos: ["Siglo XVIII."], porque: "Época." },
    { sit: "Les Particules élémentaires es de…", resp: "Michel Houellebecq", pasos: ["Provocación."], porque: "Autores." }
  ],
  comprueba: [
    { q: "Kamel Daoud obtuvo el Goncourt en…", o: ["2024", "2009"], a: 0, b: "gr", porque: "2009 = NDiaye." },
    { q: "Houellebecq obtuvo el Goncourt en…", o: ["2010", "2021"], a: 0, b: "gr", porque: "La Carte et le Territoire." },
    { q: "La rentrée littéraire va de…", o: ["finales de agosto a octubre", "enero a marzo"], a: 0, b: "gr", porque: "Otoño." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ct-auteurs"], k: "sort", ask: "¿Autor contemporáneo o clásico?", q: "Clasifica.", cats: ["Contemporáneo", "Clásico"], items: [["Leïla Slimani", 0], ["Marie NDiaye", 0], ["Mohamed Mbougar Sarr", 0], ["Kamel Daoud", 0], ["Balzac", 1], ["Racine", 1], ["Voltaire", 1], ["Zola", 1]], pista: "¿Vivos y premiados hoy?", why: "Época." },
    { fase: "guiada", c: ["b6ct-auteurs"], k: "choice", ask: "La novela del Goncourt 2016:", q: "Elige.", o: ["Chanson douce", "L'Adversaire"], a: 0, pista: "Slimani.", why: "Chanson douce." },
    { fase: "guiada", c: ["b6ct-auteurs"], k: "fill", ask: "Tres mujeres fuertes.", q: "Trois femmes ___ de Marie NDiaye.", acc: ["puissantes"], pista: "pui…", why: "<b>puissantes</b>." },
    { fase: "indep", c: ["b6ct-auteurs"], k: "fill", ask: "El adversario.", q: "L'___ d'Emmanuel Carrère est un récit de non-fiction.", acc: ["Adversaire"], why: "<b>Adversaire</b>." },
    { fase: "indep", c: ["b6ct-auteurs"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Houellebecq", "La Carte et le Territoire"], ["Slimani", "Chanson douce"], ["Carrère", "L'Adversaire"], ["Mbougar Sarr", "La Plus Secrète Mémoire des hommes"]], why: "Obras." },
    { fase: "indep", c: ["b6ct-rentree"], k: "spot", ask: "Encuentra el error.", s: "La rentrée littéraire a lieu chaque année [au printemps] .", fix: "en automne", why: "<b>en automne</b>." },
    { fase: "aplica", c: ["b6ct-rentree"], k: "choice", ask: "«La rentrée littéraire» es…", q: "Elige.", o: ["la saison des nouveautés d'automne", "la rentrée des classes"], a: 0, why: "Otoño." },
    { fase: "aplica", c: ["b6ct-auteurs"], k: "choice", ask: "El país de Mohamed Mbougar Sarr:", q: "Elige.", o: ["le Sénégal", "le Québec"], a: 0, why: "Senegal." },
    { fase: "aplica", c: ["b6ct-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Mohamed Mbougar Sarr est un écrivain [belge] .", fix: "sénégalais", why: "<b>sénégalais</b>." },
    { fase: "dominio", c: ["b6ct-rentree"], k: "order", ask: "Ordena la frase.", tokens: ["Il a lu", "le roman lauréat", "du Goncourt"], why: "<b>Il a lu le roman lauréat du Goncourt</b>" },
    { fase: "dominio", c: ["b6ct-auteurs"], k: "choice", ask: "Un tema de Houellebecq:", q: "Elige.", o: ["la crise de l'Occident", "la chevalerie"], a: 0, why: "Provocación." },
    { fase: "dominio", c: ["b6ct-rentree", "b6ct-auteurs"], k: "listen", say: "Chaque automne, la rentrée littéraire voit paraître des centaines de romans.", acc: ["Chaque automne, la rentrée littéraire voit paraître des centaines de romans."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chaque automne, la rentrée littéraire voit paraître des centaines de romans.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Michel Houellebecq", "Houellebecq", "Emmanuel Carrère", "Carrère", "Leïla Slimani", "Slimani", "Marie NDiaye", "NDiaye", "Mohamed Mbougar Sarr", "Mbougar Sarr", "Kamel Daoud", "Chanson douce", "Trois femmes puissantes", "L'Adversaire", "Le Royaume", "Les Particules élémentaires", "La Carte et le Territoire", "La Plus Secrète Mémoire des hommes", "Balzac", "Racine", "Voltaire", "Zola", "Goncourt", "Sénégal", "Québec", "Occident"], previo: [] }
};

/* ── 56. Construire les axes d'un commentaire ── */
E["lit-axes-commentaire"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Construire les axes d'un commentaire",
  objetivo: {
    que: "Vas a organizar un comentario literario en dos o tres ejes: observar procedimientos e interpretar sus efectos.",
    corto: "Dans un premier axe, nous étudierons la description du lieu. · Le champ lexical de la mort crée une atmosphère sombre. · Cette métaphore souligne la solitude du héros.",
    podras: ["Construir 2 o 3 ejes de lectura (axes) que responden a una problemática, sin seguir el texto línea por línea.", "Distinguir un procedimiento (observación: une métaphore, un champ lexical, une anaphore) de su efecto (interpretación: crée, souligne, suggère, renforce).", "Redactar cada párrafo con idea + cita + análisis del efecto, sin parafrasear."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/nota"],
    previos: ["Versificación y comentario (lección 3), las figuras de estilo (lección 2) y la disertación (lección 11)."],
    capacidad: "Ahora construyes el plan de un comentario por ejes."
  },
  requiere: R("b6vc-commentaire", "b6fs-analogie"), recupera: ["b6vc-commentaire"],
  conceptos: {
    "b6ax-methode": { n: "el comentario se organiza en 2 o 3 axes (ejes de lectura) que responden a una problemática; nunca se sigue el texto línea por línea; pasos: leer (género, registro, tema, estructura), anotar procedimientos, agruparlos en ejes (p. ej. un portrait réaliste / une critique sociale); cada párrafo = idea + cita + análisis del efecto; error: parafrasear («Ici, l'auteur dit que…») en lugar de analizar («La métaphore suggère…»); «Dans un premier axe, nous étudierons…»", b: "gr" },
    "b6ax-effets": { n: "procedimiento (observación): une métaphore, un champ lexical, une anaphore, le passé simple; efecto (interpretación): crée une atmosphère, souligne la solitude, suggère la violence, renforce l'émotion; une hyperbole = exagerar, dramatizar; une énumération = acumular, abrumar; une antithèse = oponer, tensión; le présent de narration = viveza, inmediatez", b: "gr" }
  },
  video: {
    titulo: "Los ejes del comentario", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "procédé → effet", seg: [
        { es: "Hola. Observar e interpretar, nunca parafrasear." } ] },
      { v: "frase", filas: [
          { nota: "eje", p: 1, partes: [["Dans un premier axe, nous étudierons la description du lieu.", "-", 1]] },
          { nota: "campo léxico", p: 2, partes: [["Le champ lexical de la mort crée une atmosphère sombre.", "-", 2]] },
          { nota: "efecto", p: 3, partes: [["Cette métaphore souligne la solitude du héros.", "-", 3]] } ], seg: [
        { fr: "Dans un premier axe, nous étudierons la description du lieu.", p: 1 }, { fr: "Le champ lexical de la mort crée une atmosphère sombre.", p: 2 }, { fr: "Cette métaphore souligne la solitude du héros.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "¿Cuántos ejes tiene un comentario?", o: ["2 o 3", "uno por línea"], a: 0, es: true,
        bien: "¡Sí! Por ideas.", mal: "Dos o tres ejes.",
        seg: [ { es: "Pausa. Dos o tres." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un axe", "une problématique", "un procédé", "un effet", "souligne", "le champ lexical"], seg: [
        { es: "Método y vocabulario.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Corrección de un comentario", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia corrige el primer comentario de Camila.",
    pj: PJ,
    lineas: [
      ["sofia", "Ton commentaire suit le texte ligne par ligne, et tu écris : « Ici, l'auteur dit que… ». Ça, c'est de la paraphrase. Il faut analyser.", "Tu comentario sigue el texto línea por línea, y escribes: «Aquí el autor dice que…». Eso es paráfrasis. Hay que analizar."],
      ["camila", "Alors comment je fais ? — Tu construis deux ou trois axes qui répondent à une problématique. Par exemple : un portrait réaliste, puis une critique sociale. « Dans un premier axe, nous étudierons… »", "¿Entonces cómo hago? — Construyes dos o tres ejes que responden a una problemática. Por ejemplo: un retrato realista, luego una crítica social. «En un primer eje, estudiaremos…»"],
      ["sofia", "Dans chaque paragraphe : une idée, une citation, puis l'analyse de l'effet. Tu observes un procédé — une métaphore, un champ lexical — et tu l'interprètes.", "En cada párrafo: una idea, una cita y luego el análisis del efecto. Observas un procedimiento —una metáfora, un campo léxico— y lo interpretas."],
      ["camila", "Donc : « Le champ lexical de la nuit renforce l'atmosphère inquiétante du passage. » — Parfait ! Tu ne répètes pas le texte : tu expliques l'effet.", "Entonces: «El campo léxico de la noche refuerza la atmósfera inquietante del pasaje.» — ¡Perfecto! No repites el texto: explicas el efecto."]
    ],
    fijate: "Fíjate: ligne par ligne, la paraphrase, deux ou trois axes, une problématique, un portrait réaliste, une critique sociale, « Dans un premier axe, nous étudierons… », une idée, une citation, l'analyse de l'effet, un procédé, le champ lexical renforce…"
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Método por ejes",
      idea: "El comentario literario se organiza en dos o tres ejes de lectura (axes) que responden a una problemática. Nunca se sigue el texto línea por línea: se organiza por ideas. Pasos: 1) leer (género, registro, tema, estructura); 2) anotar procedimientos (campos léxicos, figuras, tiempos, punto de vista, ritmo); 3) agruparlos en 2 o 3 ejes; 4) en cada párrafo: idea + cita + análisis del efecto. Un procedimiento se observa (une métaphore, un champ lexical, une anaphore); un efecto se interpreta (crée, souligne, suggère, renforce). El gran error es parafrasear: repetir lo que dice el texto sin analizar.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["deux ou trois", "el número de ejes", "méthode"],
        ["répéter le texte sans l'analyser", "el error de la paráfrasis", "méthode"],
        ["idée + citation + analyse", "la estructura de un párrafo", "méthode"],
        ["Le champ lexical de la nature domine le texte. · lexical", "El campo léxico de la naturaleza domina el texto.", "Procedimiento (observación)"],
        ["Cette image souligne la tristesse du personnage. · souligne", "Esta imagen subraya la tristeza del personaje.", "Efecto (interpretación)"],
        ["une hyperbole = exagerar, dramatizar · une énumération = acumular, abrumar · une antithèse = oponer, tensión · le présent de narration = viveza, inmediatez", "procedimientos y efectos", "resumen"],
        ["une métaphore · un champ lexical · une anaphore · le passé simple", "procedimientos", "Procedimiento (observación)"],
        ["crée une atmosphère · souligne la solitude · suggère la violence · renforce l'émotion", "efectos", "Efecto (interpretación)"],
        ["Cette métaphore souligne la solitude du personnage.", "Esta metáfora subraya la soledad del personaje.", "Efecto (interpretación)"],
        ["Dans un premier axe, nous étudierons …", "En un primer eje, estudiaremos…", "méthode"],
        ["Ici, l'auteur dit que… · paraphrase", "fórmula de paráfrasis que hay que evitar", "méthode"],
        ["Le champ lexical de la nuit renforce l'atmosphère inquiétante du passage.", "El campo léxico de la noche refuerza la atmósfera inquietante.", "Efecto (interpretación)"]
      ]],
      ej: [["Dans un premier axe, nous étudierons la description du lieu.", "En un primer eje, estudiaremos la descripción del lugar."], ["Le champ lexical de la mort crée une atmosphère sombre.", "El campo léxico de la muerte crea una atmósfera sombría."], ["Cette anaphore renforce le rythme du discours.", "Esta anáfora refuerza el ritmo del discurso."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Ici, l'auteur dit que…", "La métaphore suggère…", "Explicar el efecto, no parafrasear."], ["suivre le texte ligne par ligne", "organiser par axes", "Comentario = por ideas."], ["une métaphore crée une atmosphère sans citation", "idée + citation + analyse", "Siempre citar."]] }
  ],
  ejemplos: [
    { sit: "«une anaphore» es…", resp: "Procedimiento (observación)", pasos: ["Se nombra en el texto."], porque: "Observar." },
    { sit: "«suggère la violence» es…", resp: "Efecto (interpretación)", pasos: ["Se interpreta."], porque: "Interpretar." },
    { sit: "Efecto de una antítesis:", resp: "oponer, tensión", pasos: ["Contraste."], porque: "Procedimientos." }
  ],
  comprueba: [
    { q: "Un comentario se organiza…", o: ["por ideas", "línea por línea"], a: 0, b: "gr", porque: "Ejes." },
    { q: "Los ejes responden a…", o: ["una problemática", "una lista de figuras"], a: 0, b: "gr", porque: "Método." },
    { q: "Efecto de una enumeración:", o: ["acumular, abrumar", "oponer"], a: 0, b: "gr", porque: "Procedimientos." }
  ],
  practica: [
    { fase: "guiada", c: ["b6ax-effets"], k: "sort", ask: "¿Procedimiento u efecto?", q: "Clasifica.", cats: ["Procedimiento (observación)", "Efecto (interpretación)"], items: [["une métaphore", 0], ["un champ lexical", 0], ["une anaphore", 0], ["le passé simple", 0], ["crée une atmosphère", 1], ["souligne la solitude", 1], ["suggère la violence", 1], ["renforce l'émotion", 1]], pista: "¿Se observa o se interpreta?", why: "Procedimiento → efecto." },
    { fase: "guiada", c: ["b6ax-methode"], k: "choice", ask: "El número de ejes:", q: "Elige.", o: ["deux ou trois", "un par ligne"], a: 0, pista: "Por ideas.", why: "2 o 3." },
    { fase: "guiada", c: ["b6ax-effets"], k: "fill", ask: "Campo léxico.", q: "Le champ ___ de la nature domine le texte.", acc: ["lexical"], pista: "léx…", why: "<b>lexical</b>." },
    { fase: "indep", c: ["b6ax-effets"], k: "fill", ask: "Subraya (verbo).", q: "Cette image ___ la tristesse du personnage.", acc: ["souligne"], why: "<b>souligne</b>." },
    { fase: "indep", c: ["b6ax-effets"], k: "match", ask: "Une cada procedimiento con su efecto.", q: "Procedimiento → efecto", pairs: [["une hyperbole", "exagerar, dramatizar"], ["une énumération", "acumular, abrumar"], ["une antithèse", "oponer, tensión"], ["le présent de narration", "viveza, inmediatez"]], why: "Efectos." },
    { fase: "indep", c: ["b6ax-effets"], k: "spot", ask: "Encuentra el error de método.", s: "Cette métaphore [paraphrase] la solitude du personnage .", fix: "souligne", why: "<b>souligne</b>: un efecto, no una paráfrasis." },
    { fase: "aplica", c: ["b6ax-methode"], k: "choice", ask: "La estructura de un párrafo:", q: "Elige.", o: ["idée + citation + analyse", "résumé + opinion"], a: 0, why: "Método." },
    { fase: "aplica", c: ["b6ax-methode"], k: "choice", ask: "El error de la paráfrasis es…", q: "Elige.", o: ["répéter le texte sans l'analyser", "citer le texte"], a: 0, why: "Paráfrasis." },
    { fase: "aplica", c: ["b6ax-methode"], k: "spot", ask: "Encuentra el error de método.", s: "Dans le commentaire , on [suit le texte ligne par ligne] .", fix: "organise l'analyse par axes", why: "Se <b>organise l'analyse par axes</b>." },
    { fase: "dominio", c: ["b6ax-methode"], k: "order", ask: "Ordena la frase.", tokens: ["Dans un premier axe,", "nous étudierons", "…"], why: "<b>Dans un premier axe, nous étudierons …</b>" },
    { fase: "dominio", c: ["b6ax-methode"], k: "choice", ask: "¿Qué frase analiza (no parafrasea)?", q: "Elige.", o: ["La métaphore suggère la solitude.", "Ici, l'auteur dit qu'il est seul."], a: 0, why: "Efecto." },
    { fase: "dominio", c: ["b6ax-methode", "b6ax-effets"], k: "listen", say: "Le champ lexical de la nuit renforce l'atmosphère inquiétante du passage.", acc: ["Le champ lexical de la nuit renforce l'atmosphère inquiétante du passage."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Le champ lexical de la nuit renforce l'atmosphère inquiétante du passage.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 57. L'explication linéaire ── */
E["lit-explication-lineaire"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'explication linéaire",
  objetivo: {
    que: "Vas a preparar una explicación lineal (el oral del bac de francés): analizar el texto en orden, por movimientos.",
    corto: "Le texte se divise en trois mouvements. · Dès la première ligne, le narrateur installe une tension. · Dans un second mouvement, le rythme s'accélère.",
    podras: ["Estructurar la introducción: situar el extracto, leer el texto, plantear la problemática, anunciar los movimientos.", "Explicar al hilo del texto, por movimientos (2 a 4): citar breve, nombrar el procedimiento, interpretar, sin parafrasear.", "Concluir: responder a la problemática, hacer balance y abrir; distinguir comentario (ejes), explicación lineal (movimientos), disertación y resumen."],
    iconos: ["ic2/lapiz", "ic2/libro", "ic2/nota"],
    previos: ["Los ejes del comentario (lección 56) y versificación y comentario (lección 3)."],
    capacidad: "Ahora haces una explicación lineal ordenada."
  },
  requiere: R("b6ax-methode", "b6vc-commentaire"), recupera: ["b6ax-methode"],
  conceptos: {
    "b6el-methode": { n: "explication linéaire (oral del bac de francés): sigue el texto de principio a fin, por movimientos (no por ejes temáticos), analizando procedimientos y efectos al hilo de la lectura, sin parafrasear (no es una paráfrasis ordenada); movimientos: 2 a 4 partes del texto; al hilo del texto: cita breve, procedimiento, interpretación; comparación: commentaire = por ejes; explication linéaire = por movimientos; dissertation = por partes argumentativas; résumé = siguiendo el texto, sin análisis", b: "gr" },
    "b6el-etapes": { n: "introducción: situer l'extrait (autor, obra, contexto), lire le texte (lectura expresiva), poser la problématique, annoncer les mouvements; conclusión: répondre à la problématique, faire le bilan, rappeler les étapes, ouvrir sur une autre œuvre; fórmulas: «Le texte se divise en trois mouvements», «Dès la première ligne…», «Dans un second mouvement…»", b: "gr" }
  },
  video: {
    titulo: "La explicación lineal", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/lapiz", grande: "mouvement par mouvement", seg: [
        { es: "Hola. Seguir el texto sin parafrasearlo." } ] },
      { v: "frase", filas: [
          { nota: "movimientos", p: 1, partes: [["Le texte se divise en trois mouvements.", "-", 1]] },
          { nota: "primera línea", p: 2, partes: [["Dès la première ligne, le narrateur installe une tension.", "-", 2]] },
          { nota: "ritmo", p: 3, partes: [["Dans un second mouvement, le rythme s'accélère.", "-", 3]] } ], seg: [
        { fr: "Le texte se divise en trois mouvements.", p: 1 }, { fr: "Dès la première ligne, le narrateur installe une tension.", p: 2 }, { fr: "Dans un second mouvement, le rythme s'accélère.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La explicación lineal se organiza…", o: ["por movimientos del texto", "por ejes temáticos"], a: 0, es: true,
        bien: "¡Sí! En el orden del texto.", mal: "Por movimientos.",
        seg: [ { es: "Pausa. Movimientos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["un mouvement", "la problématique", "situer l'extrait", "faire le bilan", "ouvrir", "l'oral du bac"], seg: [
        { es: "Introducción, explicación, conclusión.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Ensayo del oral", img: "bg-universidad", yo: "camila",
    escena: "Camila ensaya una explicación lineal ante Madame Sofia.",
    pj: PJ,
    lineas: [
      ["camila", "Je commence : je situe l'extrait — auteur, œuvre, contexte —, je lis le texte, je pose la problématique et j'annonce les mouvements. Le texte se divise en trois mouvements.", "Empiezo: sitúo el extracto —autor, obra, contexto—, leo el texto, planteo la problemática y anuncio los movimientos. El texto se divide en tres movimientos."],
      ["sofia", "Bien. Et attention : contrairement au commentaire, tu suis l'ordre du texte, mais tu ne paraphrases pas. Une citation brève, le procédé, l'interprétation.", "Bien. Y cuidado: a diferencia del comentario, sigues el orden del texto, pero no parafraseas. Una cita breve, el procedimiento, la interpretación."],
      ["camila", "Dans un premier mouvement, l'auteur présente le personnage principal. Dès la première ligne, le narrateur installe une tension. Dans un second mouvement, le rythme s'accélère…", "En un primer movimiento, el autor presenta al personaje principal. Desde la primera línea, el narrador instala una tensión. En un segundo movimiento, el ritmo se acelera…"],
      ["sofia", "Et pour conclure ? — Je réponds à la problématique, je fais le bilan et j'ouvre sur une autre œuvre.", "¿Y para concluir? — Respondo a la problemática, hago el balance y abro hacia otra obra."]
    ],
    fijate: "Fíjate: situer l'extrait, lire le texte, poser la problématique, annoncer les mouvements, le texte se divise en trois mouvements, suivre l'ordre du texte, ne pas paraphraser, dès la première ligne, dans un second mouvement, répondre à la problématique, faire le bilan, ouvrir sur une autre œuvre."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Las etapas",
      idea: "La explicación lineal (oral del bac de francés) sigue el texto de principio a fin, por movimientos, analizando procedimientos y efectos al hilo de la lectura. Introducción: situar el extracto (autor, obra, contexto), leer el texto en voz alta, plantear la problemática y anunciar los movimientos (2 a 4). Explicación: cita breve, procedimiento, interpretación. Conclusión: responder a la problemática, hacer balance y abrir hacia otra obra. A diferencia del comentario (por ejes), sí sigue el orden del texto, pero sin parafrasear.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Etapa"], [
        ["par mouvements du texte", "cómo se estructura", "méthode"],
        ["contexte, lecture, problématique, mouvements", "la introducción", "Introducción"],
        ["suivre l'ordre du texte", "la diferencia con el comentario", "méthode"],
        ["Le texte se divise en trois mouvements. · mouvements", "El texto se divide en tres movimientos.", "Introducción"],
        ["Dès la première ligne, le ton est ironique. · ligne", "Desde la primera línea, el tono es irónico.", "méthode"],
        ["commentaire = por ejes · explication linéaire = por movimientos · dissertation = por partes argumentativas · résumé = siguiendo el texto, sin análisis", "ejercicios", "resumen"],
        ["situer l'extrait · lire le texte · poser la problématique · annoncer les mouvements", "la introducción", "Introducción"],
        ["répondre à la problématique · faire le bilan · ouvrir sur une autre œuvre · rappeler les étapes", "la conclusión", "Conclusión"],
        ["Dans l'explication linéaire, on étudie le texte par mouvements. · mouvement", "En la explicación lineal se estudia el texto por movimientos.", "méthode"],
        ["Le texte se divise en trois mouvements", "El texto se divide en tres movimientos", "Introducción"],
        ["une paraphrase ordonnée", "lo que NO es la explicación lineal", "méthode"],
        ["Dans un premier mouvement, l'auteur présente le personnage principal.", "En un primer movimiento, el autor presenta al personaje principal.", "méthode"]
      ]],
      ej: [["Le texte se divise en quatre mouvements.", "El texto se divide en cuatro movimientos."], ["Dès la première ligne, le narrateur installe une tension.", "Desde la primera línea, el narrador instala una tensión."], ["Dans un second mouvement, le rythme s'accélère.", "En un segundo movimiento, el ritmo se acelera."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["explication linéaire = une paraphrase ordonnée", "= une analyse ordonnée selon le texte", "No parafrasear."], ["on étudie le texte par axes thématiques", "on étudie le texte par mouvements", "Ejes = comentario."], ["conclure par un résumé du texte", "conclure en répondant à la problématique", "Balance y apertura."]] }
  ],
  ejemplos: [
    { sit: "La disertación se organiza…", resp: "por partes argumentativas", pasos: ["Otro ejercicio."], porque: "Ejercicios." },
    { sit: "«faire le bilan» pertenece a…", resp: "Conclusión", pasos: ["Al final."], porque: "Etapas." },
    { sit: "«situer l'extrait» pertenece a…", resp: "Introducción", pasos: ["Al principio."], porque: "Etapas." }
  ],
  comprueba: [
    { q: "La explicación lineal es…", o: ["el oral del bac de francés", "un ensayo escrito libre"], a: 0, b: "gr", porque: "Oral." },
    { q: "¿Cuántos movimientos suele haber?", o: ["2 a 4", "uno por frase"], a: 0, b: "gr", porque: "Partes del texto." },
    { q: "En la introducción se lee…", o: ["el texto en voz alta", "una biografía completa"], a: 0, b: "gr", porque: "Lectura expresiva." }
  ],
  practica: [
    { fase: "guiada", c: ["b6el-etapes"], k: "sort", ask: "¿Introducción o conclusión?", q: "Clasifica.", cats: ["Introducción", "Conclusión"], items: [["situer l'extrait", 0], ["lire le texte", 0], ["poser la problématique", 0], ["annoncer les mouvements", 0], ["répondre à la problématique", 1], ["faire le bilan", 1], ["ouvrir sur une autre œuvre", 1], ["rappeler les étapes", 1]], pista: "¿Abrir o cerrar?", why: "Etapas." },
    { fase: "guiada", c: ["b6el-methode"], k: "choice", ask: "Cómo se estructura:", q: "Elige.", o: ["par mouvements du texte", "par axes thématiques"], a: 0, pista: "En orden.", why: "Movimientos." },
    { fase: "guiada", c: ["b6el-etapes"], k: "fill", ask: "Tres movimientos.", q: "Le texte se divise en trois ___ .", acc: ["mouvements"], pista: "mouv…", why: "<b>mouvements</b>." },
    { fase: "indep", c: ["b6el-etapes"], k: "fill", ask: "Desde la primera línea (o frase).", q: "Dès la première ___ , le ton est ironique.", acc: ["ligne", "phrase"], why: "<b>ligne</b> (o <b>phrase</b>)." },
    { fase: "indep", c: ["b6el-methode"], k: "match", ask: "Une cada ejercicio con su organización.", q: "Ejercicio → organización", pairs: [["commentaire", "por ejes"], ["explication linéaire", "por movimientos"], ["dissertation", "por partes argumentativas"], ["résumé", "siguiendo el texto, sin análisis"]], why: "Ejercicios." },
    { fase: "indep", c: ["b6el-methode"], k: "spot", ask: "Encuentra el error de método.", s: "Dans l'explication linéaire , on étudie le texte par [axes thématiques] .", fix: "mouvements", why: "Por <b>mouvements</b>." },
    { fase: "aplica", c: ["b6el-etapes"], k: "choice", ask: "La introducción contiene…", q: "Elige.", o: ["contexte, lecture, problématique, mouvements", "résumé, opinion, conclusion"], a: 0, why: "Cuatro pasos." },
    { fase: "aplica", c: ["b6el-methode"], k: "choice", ask: "La diferencia con el comentario:", q: "Elige.", o: ["suivre l'ordre du texte", "ne pas citer le texte"], a: 0, why: "Orden." },
    { fase: "aplica", c: ["b6el-methode"], k: "choice", ask: "La explicación lineal NO es…", q: "Elige.", o: ["une paraphrase ordonnée", "une analyse ordonnée"], a: 0, why: "No parafrasear." },
    { fase: "dominio", c: ["b6el-etapes"], k: "order", ask: "Ordena la frase.", tokens: ["Le texte", "se divise", "en trois mouvements"], why: "<b>Le texte se divise en trois mouvements</b>" },
    { fase: "dominio", c: ["b6el-etapes"], k: "spot", ask: "Encuentra el error de método.", s: "En conclusion , on [résume le texte] et on ouvre sur une autre œuvre .", fix: "répond à la problématique", why: "Se <b>répond à la problématique</b>." },
    { fase: "dominio", c: ["b6el-methode", "b6el-etapes"], k: "listen", say: "Dans un premier mouvement, l'auteur présente le personnage principal.", acc: ["Dans un premier mouvement, l'auteur présente le personnage principal."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans un premier mouvement, l'auteur présente le personnage principal.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia"], previo: [] }
};

/* ── 58. Analyser un poème : vers, rimes, rythme ── */
E["lit-analyser-poeme"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Analyser un poème : vers, rimes, rythme",
  objetivo: {
    que: "Vas a analizar la forma de un poema: versos, estrofas, rimas, ritmo y sonidos.",
    corto: "Le sonnet se compose de deux quatrains et de deux tercets. · Ici, les rimes sont embrassées. · L'allitération en s imite le sifflement du vent.",
    podras: ["Identificar el verso (alexandrin de 12 sílabas, décasyllabe, octosyllabe, vers libre) y contar sílabas (la e muda cuenta ante consonante, no al final del verso).", "Reconocer estrofas (quatrain, tercet, distique, quintil), el soneto y las rimas: suivies (AABB), croisées (ABAB), embrassées (ABBA).", "Analizar el ritmo (césure, enjambement) y los sonidos (allitération: consonantes; assonance: vocales)."],
    iconos: ["ic2/nota", "ic2/lapiz", "ic2/flor"],
    previos: ["Versificación y comentario (lección 3) y Baudelaire (lección 40)."],
    capacidad: "Ahora analizas la forma de un poema y sus efectos."
  },
  requiere: R("b6vc-vers", "b6bd-poemes"), recupera: ["b6vc-vers"],
  conceptos: {
    "b6an-vers": { n: "versos: alexandrin = 12 sílabas (no 10, ni «verso de Alejandría»), cesura a la mitad (6/6); décasyllabe = 10; octosyllabe = 8; vers libre; cómputo: la e muette cuenta ante consonante, no al final del verso; estrofas: quatrain (4 versos), tercet (3), distique (2), quintil (5); sonnet = deux quatrains + deux tercets (14 versos)", b: "gr" },
    "b6an-rimes": { n: "rimas: suivies (AABB), croisées (ABAB), embrassées (ABBA); riches, suffisantes, pauvres; ritmo: césure (pausa interna del verso), enjambement (la frase continúa en el verso siguiente); sonidos: allitération (repetición de una consonante: en s imita el silbido del viento), assonance (repetición de vocales)", b: "gr" }
  },
  video: {
    titulo: "Analizar un poema", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/nota", grande: "vers, rimes, rythme", seg: [
        { es: "Hola. La forma también significa." } ] },
      { v: "frase", filas: [
          { nota: "soneto", p: 1, partes: [["Le sonnet se compose de deux quatrains et de deux tercets.", "-", 1]] },
          { nota: "ABBA", p: 2, partes: [["Ici, les rimes sont embrassées.", "-", 2]] },
          { nota: "aliteración", p: 3, partes: [["L'allitération en s imite le sifflement du vent.", "-", 3]] } ], seg: [
        { fr: "Le sonnet se compose de deux quatrains et de deux tercets.", p: 1 }, { fr: "Ici, les rimes sont embrassées.", p: 2 }, { fr: "L'allitération en s imite le sifflement du vent.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un alexandrino tiene…", o: ["12 sílabas", "10 sílabas"], a: 0, es: true,
        bien: "¡Sí! Cesura 6/6.", mal: "Doce sílabas.",
        seg: [ { es: "Pausa. Doce." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["l'alexandrin", "le quatrain", "le tercet", "les rimes embrassées", "l'enjambement", "l'allitération"], seg: [
        { es: "Versos, estrofas, rimas y sonidos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Contar sílabas", img: "bg-biblioteca", yo: "camila",
    escena: "Camila y Hugo analizan un soneto de Baudelaire para clase.",
    pj: PJ,
    lineas: [
      ["camila", "Le sonnet se compose de deux quatrains et de deux tercets : quatorze vers. — Et ce sont des alexandrins ? — Oui, douze syllabes, avec une césure au milieu.", "El soneto se compone de dos cuartetos y dos tercetos: catorce versos. — ¿Y son alejandrinos? — Sí, doce sílabas, con una cesura en medio."],
      ["hugo", "Attention au e muet : il compte devant une consonne, mais pas à la fin du vers. — D'accord. Et les rimes ? ABBA : ici, les rimes sont embrassées.", "Cuidado con la e muda: cuenta ante consonante, pero no al final del verso. — Vale. ¿Y las rimas? ABBA: aquí las rimas son abrazadas."],
      ["camila", "Dans ce sonnet en alexandrins, les rimes sont embrassées dans les quatrains. Et ici, la phrase continue au vers suivant : c'est un enjambement.", "En este soneto en alejandrinos, las rimas son abrazadas en los cuartetos. Y aquí la frase continúa en el verso siguiente: es un encabalgamiento."],
      ["hugo", "Écoute les sons : l'allitération en s imite le sifflement du vent. Et la répétition des voyelles, c'est une assonance.", "Escucha los sonidos: la aliteración en s imita el silbido del viento. Y la repetición de vocales es una asonancia."]
    ],
    fijate: "Fíjate: deux quatrains et deux tercets, quatorze vers, l'alexandrin (douze syllabes), la césure, le e muet, les rimes embrassées (ABBA), l'enjambement, l'allitération en s, l'assonance."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "La forma del poema",
      idea: "Para analizar un poema se observan: el verso (alexandrin de 12 sílabas con cesura 6/6, décasyllabe de 10, octosyllabe de 8, vers libre); el cómputo (la e muda cuenta ante consonante, no al final del verso); las estrofas (quatrain, tercet, distique, quintil); la forma fija (el soneto: dos cuartetos y dos tercetos, 14 versos); las rimas (suivies AABB, croisées ABAB, embrassées ABBA; riches, suffisantes, pauvres); el ritmo (césure, enjambement) y los sonidos (allitération: consonantes; assonance: vocales). Siempre relacionar forma y efecto.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["douze syllabes", "el alexandrin", "Verso"],
        ["ABAB", "las rimas croisées", "rimes"],
        ["la phrase continue au vers suivant", "el enjambement", "rythme"],
        ["Un sonnet contient deux quatrains et deux tercets. · tercets", "Un soneto tiene dos cuartetos y dos tercetos.", "Estrofa"],
        ["La répétition d'un même son consonne s'appelle une allitération. · allitération", "La repetición de un mismo sonido consonante es una aliteración.", "rimes"],
        ["quatrain = estrofa de 4 versos · césure = pausa interna del verso · assonance = repetición de vocales · rimes embrassées = ABBA", "términos", "resumen"],
        ["quatrain · tercet · distique · quintil", "estrofas", "Estrofa"],
        ["alexandrin · décasyllabe · octosyllabe · vers libre", "versos", "Verso"],
        ["Un alexandrin est un vers de douze syllabes. · douze", "Un alejandrino es un verso de doce sílabas.", "Verso"],
        ["Le sonnet compte quatorze vers", "El soneto tiene catorce versos", "Estrofa"],
        ["le e muet compte devant une consonne", "la regla de la e muda", "Verso"],
        ["Dans ce sonnet en alexandrins, les rimes sont embrassées dans les quatrains.", "En este soneto en alejandrinos, las rimas son abrazadas en los cuartetos.", "rimes"]
      ]],
      ej: [["Le sonnet se compose de deux quatrains et de deux tercets.", "El soneto se compone de dos cuartetos y dos tercetos."], ["Ici, les rimes sont suivies (AABB).", "Aquí las rimas son pareadas (AABB)."], ["L'allitération en s imite le sifflement du vent.", "La aliteración en s imita el silbido del viento."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["alexandrin = vers d'Alexandrie", "alexandrin = vers de douze syllabes", "Término técnico."], ["Le e muet compte toujours.", "Le e muet compte devant une consonne, pas en fin de vers.", "Cómputo."], ["assonance = répétition de consonnes", "assonance = répétition de voyelles", "Allitération = consonnes."]] }
  ],
  ejemplos: [
    { sit: "Un distique es…", resp: "Estrofa", pasos: ["Dos versos."], porque: "Estrofas." },
    { sit: "Un octosyllabe es…", resp: "Verso", pasos: ["Ocho sílabas."], porque: "Versos." },
    { sit: "Rimas AABB:", resp: "suivies", pasos: ["Pareadas."], porque: "Rimas." }
  ],
  comprueba: [
    { q: "Un soneto tiene…", o: ["14 versos", "12 versos"], a: 0, b: "gr", porque: "4+4+3+3." },
    { q: "La cesura del alejandrino está…", o: ["a la mitad (6/6)", "al final"], a: 0, b: "gr", porque: "6/6." },
    { q: "Un décasyllabe tiene…", o: ["10 sílabas", "12 sílabas"], a: 0, b: "gr", porque: "Déca = 10." }
  ],
  practica: [
    { fase: "guiada", c: ["b6an-vers"], k: "sort", ask: "¿Estrofa o verso?", q: "Clasifica.", cats: ["Estrofa", "Verso"], items: [["quatrain", 0], ["tercet", 0], ["distique", 0], ["quintil", 0], ["alexandrin", 1], ["décasyllabe", 1], ["octosyllabe", 1], ["vers libre", 1]], pista: "¿Grupo de versos o un verso?", why: "Estrofas y versos." },
    { fase: "guiada", c: ["b6an-vers"], k: "choice", ask: "El alexandrin tiene…", q: "Elige.", o: ["douze syllabes", "dix syllabes"], a: 0, pista: "6/6.", why: "12." },
    { fase: "guiada", c: ["b6an-vers"], k: "fill", ask: "Dos cuartetos y dos tercetos.", q: "Un sonnet contient deux quatrains et deux ___ .", acc: ["tercets"], pista: "ter…", why: "<b>tercets</b>." },
    { fase: "indep", c: ["b6an-rimes"], k: "fill", ask: "Repetición de una consonante.", q: "La répétition d'un même son consonne s'appelle une ___ .", acc: ["allitération"], why: "<b>allitération</b>." },
    { fase: "indep", c: ["b6an-rimes", "b6an-vers"], k: "match", ask: "Une cada término con su sentido.", q: "Término → sentido", pairs: [["quatrain", "estrofa de 4 versos"], ["césure", "pausa interna del verso"], ["assonance", "repetición de vocales"], ["rimes embrassées", "ABBA"]], why: "Términos." },
    { fase: "indep", c: ["b6an-vers"], k: "spot", ask: "Encuentra el error.", s: "Un alexandrin est un vers de [dix] syllabes .", fix: "douze", why: "<b>douze</b>." },
    { fase: "aplica", c: ["b6an-rimes"], k: "choice", ask: "Las rimas croisées son…", q: "Elige.", o: ["ABAB", "ABBA"], a: 0, why: "Cruzadas." },
    { fase: "aplica", c: ["b6an-rimes"], k: "choice", ask: "El enjambement es…", q: "Elige.", o: ["la phrase continue au vers suivant", "la pause au milieu du vers"], a: 0, why: "Continuidad." },
    { fase: "aplica", c: ["b6an-vers"], k: "choice", ask: "La regla de la e muda:", q: "Elige.", o: ["le e muet compte devant une consonne", "le e muet ne compte jamais"], a: 0, why: "Cómputo." },
    { fase: "dominio", c: ["b6an-vers"], k: "order", ask: "Ordena la frase.", tokens: ["Le sonnet", "compte", "quatorze vers"], why: "<b>Le sonnet compte quatorze vers</b>" },
    { fase: "dominio", c: ["b6an-rimes"], k: "spot", ask: "Encuentra el error.", s: "L'assonance est la répétition d'un même son [consonne] .", fix: "voyelle", why: "<b>voyelle</b>." },
    { fase: "dominio", c: ["b6an-vers", "b6an-rimes"], k: "listen", say: "Dans ce sonnet en alexandrins, les rimes sont embrassées dans les quatrains.", acc: ["Dans ce sonnet en alexandrins, les rimes sont embrassées dans les quatrains."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Dans ce sonnet en alexandrins, les rimes sont embrassées dans les quatrains.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Baudelaire"], previo: [] }
};

/* ── 59. Analyser un incipit ── */
E["lit-incipit"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Analyser un incipit",
  objetivo: {
    que: "Vas a analizar el íncipit, el comienzo de una novela: sus funciones y sus tipos.",
    corto: "L'incipit plonge le lecteur in medias res. · Balzac commence souvent par une longue description. · Cet incipit crée un effet d'attente.",
    podras: ["Explicar las funciones del íncipit: informar (quién, dónde, cuándo), seducir (intriga, tono) y establecer un pacto de lectura (género, estilo).", "Distinguir un íncipit descriptivo (Balzac) de uno in medias res (en plena acción: un grito, un diálogo brusco).", "Reconocer íncipits célebres (Proust, Camus, Céline, «Il était une fois…»)."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/rayo"],
    previos: ["Balzac (lección 35), Proust (lección 43) y Camus novelista (lección 47)."],
    capacidad: "Ahora analizas el comienzo de una novela."
  },
  requiere: R("b6bz-realisme", "b6cr-etranger"), recupera: ["b6cr-etranger"],
  conceptos: {
    "b6in-fonctions": { n: "l'incipit = primeras líneas de una obra (latín: «comienza»; no un índice); funciones: informative (quién, dónde, cuándo), séductrice (captar al lector: intriga, tono, efecto de espera), pacte de lecture (lo que el texto promete sobre su género y tono); observar: narrador, tiempos, personajes, lugar, registro; un buen íncipit da ganas de seguir leyendo", b: "gr" },
    "b6in-types": { n: "íncipit descriptivo (Balzac: description d'une ville, portrait détaillé, présentation du cadre, récit lent) frente a in medias res (no «in medias rex»: en plena acción: un cri, un dialogue brusque, une action en cours, une question directe; Camus, dinámico); íncipits célebres: «Longtemps, je me suis couché de bonne heure» = Proust; «Aujourd'hui, maman est morte» = Camus; «Ça a débuté comme ça» = Céline; «Il était une fois…» = Perrault (cuento)", b: "gr" }
  },
  video: {
    titulo: "El íncipit", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "l'incipit", seg: [
        { es: "Hola. Las primeras líneas lo deciden todo." } ] },
      { v: "frase", filas: [
          { nota: "en plena acción", p: 1, partes: [["L'incipit plonge le lecteur in medias res.", "-", 1]] },
          { nota: "Balzac", p: 2, partes: [["Balzac commence souvent par une longue description.", "-", 2]] },
          { nota: "espera", p: 3, partes: [["Cet incipit crée un effet d'attente.", "-", 3]] } ], seg: [
        { fr: "L'incipit plonge le lecteur in medias res.", p: 1 }, { fr: "Balzac commence souvent par une longue description.", p: 2 }, { fr: "Cet incipit crée un effet d'attente.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "«In medias res» significa…", o: ["en plena acción", "con una descripción"], a: 0, es: true,
        bien: "¡Sí! Sin preámbulo.", mal: "En plena acción.",
        seg: [ { es: "Pausa. Plena acción." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["informer", "séduire", "le pacte de lecture", "in medias res", "la description", "l'effet d'attente"], seg: [
        { es: "Funciones y tipos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Primeras líneas", img: "bg-cafe", yo: "camila",
    escena: "Camila y Hugo juegan a adivinar novelas por su primera frase.",
    pj: PJ,
    lineas: [
      ["hugo", "Devine : « Longtemps, je me suis couché de bonne heure. » — Facile, c'est Proust ! Et « Aujourd'hui, maman est morte », c'est Camus.", "Adivina: «Durante mucho tiempo me acosté temprano.» — ¡Fácil, es Proust! Y «Hoy ha muerto mamá» es Camus."],
      ["camila", "Un incipit doit informer — qui, où, quand — mais aussi séduire le lecteur. Et il propose un pacte de lecture : il annonce le genre et le ton.", "Un íncipit debe informar —quién, dónde, cuándo— pero también seducir al lector. Y propone un pacto de lectura: anuncia el género y el tono."],
      ["hugo", "Balzac commence souvent par une longue description de la ville ou de la maison. D'autres romans commencent in medias res : un cri, un dialogue brusque, une action en cours.", "Balzac empieza a menudo con una larga descripción de la ciudad o de la casa. Otras novelas empiezan in medias res: un grito, un diálogo brusco, una acción en curso."],
      ["camila", "Et « Il était une fois… », c'est le conte, Perrault. Un bon incipit donne envie au lecteur de poursuivre sa lecture : il crée un effet d'attente.", "Y «Érase una vez…» es el cuento, Perrault. Un buen íncipit da ganas al lector de seguir leyendo: crea un efecto de espera."]
    ],
    fijate: "Fíjate: informer (qui, où, quand), séduire le lecteur, un pacte de lecture, le genre et le ton, une longue description, in medias res, un cri, un dialogue brusque, une action en cours, « Il était une fois… », un effet d'attente."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Funciones y tipos",
      idea: "El íncipit (las primeras líneas de una obra, del latín «comienza») cumple tres funciones: informar (quién, dónde, cuándo), seducir al lector (intriga, tono, efecto de espera) y establecer un pacto de lectura (lo que el texto promete sobre su género y su tono). Puede ser descriptivo (Balzac: una ciudad, un retrato, el marco, un relato lento) o empezar in medias res, en plena acción (un grito, un diálogo brusco, una pregunta directa). Íncipits célebres: Proust, Camus, Céline, «Il était une fois…» (el cuento de Perrault). Observa siempre el narrador, los tiempos, los personajes, el lugar y el registro.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Tipo"], [
        ["en pleine action", "in medias res", "In medias res"],
        ["ce que le texte promet sur son genre et son ton", "el pacto de lectura", "fonctions"],
        ["informative", "la función que dice quién, dónde, cuándo", "fonctions"],
        ["L'incipit est le début d'un roman. · incipit", "El íncipit es el comienzo de una novela.", "fonctions"],
        ["Cet incipit crée un effet d'attente. · attente", "Este íncipit crea un efecto de espera.", "fonctions"],
        ["Longtemps, je me suis couché de bonne heure. = Proust · Aujourd'hui, maman est morte. = Camus · Ça a débuté comme ça. = Céline · Il était une fois… = Perrault (cuento)", "íncipits célebres", "resumen"],
        ["description d'une ville · portrait détaillé · présentation du cadre · récit lent", "íncipit descriptivo", "Descriptivo"],
        ["un cri · un dialogue brusque · une action en cours · une question directe", "en plena acción", "In medias res"],
        ["Cet incipit commence in medias res, au milieu d'une dispute. · res", "Este íncipit empieza en plena acción, en medio de una disputa.", "In medias res"],
        ["L'incipit capte l'attention du lecteur", "El íncipit capta la atención del lector", "fonctions"],
        ["un index · une table des matières", "lo que NO es un íncipit", "fonctions"],
        ["Un bon incipit donne envie au lecteur de poursuivre sa lecture.", "Un buen íncipit da ganas de seguir leyendo.", "fonctions"]
      ]],
      ej: [["L'incipit plonge le lecteur in medias res.", "El íncipit sumerge al lector en plena acción."], ["Balzac commence souvent par une longue description.", "Balzac empieza a menudo con una larga descripción."], ["Cet incipit installe un ton ironique.", "Este íncipit instala un tono irónico."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["incipit = index", "incipit = premières lignes d'une œuvre", "Latín: «comienza»."], ["in medias rex", "in medias res", "Ortografía latina."], ["Balzac commence in medias res.", "Balzac commence souvent par une description.", "Íncipit descriptivo."]] }
  ],
  ejemplos: [
    { sit: "«un dialogue brusque» es…", resp: "In medias res", pasos: ["Acción inmediata."], porque: "Tipos." },
    { sit: "«portrait détaillé» es…", resp: "Descriptivo", pasos: ["Lento."], porque: "Tipos." },
    { sit: "«Il était une fois…» anuncia…", resp: "Perrault (cuento)", pasos: ["Pacto de lectura."], porque: "Íncipits." }
  ],
  comprueba: [
    { q: "El íncipit de L'Étranger es…", o: ["dinámico", "una larga descripción"], a: 0, b: "gr", porque: "Camus." },
    { q: "La función seductora busca…", o: ["captar al lector", "dar la fecha de edición"], a: 0, b: "gr", porque: "Intriga." },
    { q: "«Incipit» viene del latín y significa…", o: ["comienza", "termina"], a: 0, b: "gr", porque: "Latín." }
  ],
  practica: [
    { fase: "guiada", c: ["b6in-types"], k: "sort", ask: "¿Íncipit descriptivo o in medias res?", q: "Clasifica.", cats: ["Descriptivo", "In medias res"], items: [["description d'une ville", 0], ["portrait détaillé", 0], ["présentation du cadre", 0], ["récit lent", 0], ["un cri", 1], ["un dialogue brusque", 1], ["une action en cours", 1], ["une question directe", 1]], pista: "¿Lento o inmediato?", why: "Tipos." },
    { fase: "guiada", c: ["b6in-types"], k: "choice", ask: "«In medias res» significa…", q: "Elige.", o: ["en pleine action", "après une longue description"], a: 0, pista: "Plena acción.", why: "In medias res." },
    { fase: "guiada", c: ["b6in-fonctions"], k: "fill", ask: "El comienzo de una novela.", q: "L'___ est le début d'un roman.", acc: ["incipit"], pista: "inc…", why: "<b>incipit</b>." },
    { fase: "indep", c: ["b6in-fonctions"], k: "fill", ask: "Efecto de espera.", q: "Cet incipit crée un effet d'___ .", acc: ["attente"], why: "<b>attente</b>." },
    { fase: "indep", c: ["b6in-types"], k: "match", ask: "Une cada íncipit con su autor.", q: "Íncipit → autor", pairs: [["Longtemps, je me suis couché de bonne heure.", "Proust"], ["Aujourd'hui, maman est morte.", "Camus"], ["Ça a débuté comme ça.", "Céline"], ["Il était une fois…", "Perrault (cuento)"]], why: "Íncipits." },
    { fase: "indep", c: ["b6in-types"], k: "spot", ask: "Encuentra el error.", s: "Cet incipit commence in medias [rex] , au milieu d'une dispute .", fix: "res", why: "<b>res</b>." },
    { fase: "aplica", c: ["b6in-fonctions"], k: "choice", ask: "El pacto de lectura es…", q: "Elige.", o: ["ce que le texte promet sur son genre et son ton", "le prix du livre"], a: 0, why: "Promesa." },
    { fase: "aplica", c: ["b6in-fonctions"], k: "choice", ask: "La función que dice quién, dónde, cuándo:", q: "Elige.", o: ["informative", "séductrice"], a: 0, why: "Informar." },
    { fase: "aplica", c: ["b6in-types"], k: "spot", ask: "Encuentra el error.", s: "Balzac commence souvent ses romans [in medias res] .", fix: "par une longue description", why: "<b>par une longue description</b>." },
    { fase: "dominio", c: ["b6in-fonctions"], k: "order", ask: "Ordena la frase.", tokens: ["L'incipit", "capte l'attention", "du lecteur"], why: "<b>L'incipit capte l'attention du lecteur</b>" },
    { fase: "dominio", c: ["b6in-fonctions"], k: "choice", ask: "Un íncipit NO es…", q: "Elige.", o: ["un index", "les premières lignes"], a: 0, why: "Falso sentido." },
    { fase: "dominio", c: ["b6in-fonctions", "b6in-types"], k: "listen", say: "Un bon incipit donne envie au lecteur de poursuivre sa lecture.", acc: ["Un bon incipit donne envie au lecteur de poursuivre sa lecture."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Un bon incipit donne envie au lecteur de poursuivre sa lecture.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Proust", "Camus", "Céline", "Perrault", "Balzac"], previo: [] }
};

/* ── 60. Analyser un personnage ── */
E["lit-personnage"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Analyser un personnage",
  objetivo: {
    que: "Vas a analizar un personaje: retrato, caracterización, función y lo que representa.",
    corto: "Meursault est un antihéros indifférent. · Le portrait moral révèle son avarice. · Rastignac incarne l'ambition.",
    podras: ["Analizar el retrato físico, moral y social, y la caracterización directa (el narrador lo describe) o indirecta (acciones, palabras).", "Distinguir héros y antihéros (protagonista sin cualidades heroicas, no el villano) y usar el esquema actancial (sujeto, objeto, adyuvante, oponente).", "Explicar el personaje tipo (Harpagon = la avaricia, Rastignac = la ambición, Tartuffe = la hipocresía, Emma Bovary = la insatisfacción) y su evolución."],
    iconos: ["ic2/libro", "ic2/lapiz", "ic2/flor"],
    previos: ["Molière (lección 24), Balzac (lección 35), Flaubert (lección 37) y Camus novelista (lección 47)."],
    capacidad: "Ahora analizas un personaje con el vocabulario adecuado."
  },
  requiere: R("b6bz-comedie", "b6mo-oeuvres", "b6cr-etranger"), recupera: ["b6bz-comedie"],
  conceptos: {
    "b6pg-portrait": { n: "retrato: physique (grand, aux yeux bleus, maigre, élégant: la apariencia), moral (avare, orgueilleux, généreux, hypocrite), social; caracterización directa (el narrador lo describe) o indirecta (a través de acciones y palabras); el nombre puede ser significativo; el personaje evoluciona (perder sus ilusiones)", b: "gr" },
    "b6pg-fonction": { n: "héros (admirable) / antihéros (protagonista sin cualidades heroicas, mediocre: no es el villano ni un superhéroe; Meursault es un antihéroe indiferente); esquema actancial: sujeto, objeto, adyuvante (quien ayuda al héroe), oponente; personnage type: representa un tipo social o una idea: Harpagon = la avaricia, Rastignac = la ambición, Tartuffe = la hipocresía, Emma Bovary = la insatisfacción", b: "gr" }
  },
  video: {
    titulo: "Analizar un personaje", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "le personnage", seg: [
        { es: "Hola. Retrato, función y sentido." } ] },
      { v: "frase", filas: [
          { nota: "antihéroe", p: 1, partes: [["Meursault est un antihéros indifférent.", "-", 1]] },
          { nota: "retrato moral", p: 2, partes: [["Le portrait moral révèle son avarice.", "-", 2]] },
          { nota: "tipo", p: 3, partes: [["Rastignac incarne l'ambition.", "-", 3]] } ], seg: [
        { fr: "Meursault est un antihéros indifférent.", p: 1 }, { fr: "Le portrait moral révèle son avarice.", p: 2 }, { fr: "Rastignac incarne l'ambition.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un antihéroe es…", o: ["un protagonista sin cualidades heroicas", "el villano"], a: 0, es: true,
        bien: "¡Sí! No es el malo.", mal: "Es un protagonista sin heroísmo.",
        seg: [ { es: "Pausa. Sin heroísmo." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le portrait physique", "le portrait moral", "l'antihéros", "l'adjuvant", "l'opposant", "le personnage type"], seg: [
        { es: "Retrato, función, tipo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Galería de personajes", img: "bg-biblioteca", yo: "camila",
    escena: "Camila prepara una ficha sobre los personajes que ha conocido en el curso.",
    pj: PJ,
    lineas: [
      ["camila", "Pour analyser un personnage, je commence par le portrait : physique, moral, social. Le portrait physique décrit l'apparence ; le portrait moral révèle le caractère.", "Para analizar un personaje, empiezo por el retrato: físico, moral, social. El retrato físico describe la apariencia; el retrato moral revela el carácter."],
      ["sofia", "Et la caractérisation ? Directe si le narrateur le décrit, indirecte s'il se révèle par ses actions et ses paroles. Et sa fonction : héros, adjuvant, opposant.", "¿Y la caracterización? Directa si el narrador lo describe, indirecta si se revela por sus acciones y sus palabras. Y su función: héroe, adyuvante, oponente."],
      ["camila", "Meursault est un antihéros indifférent : ce n'est pas un méchant, c'est un héros sans qualités héroïques. Et Harpagon est un personnage type : il représente l'avare.", "Meursault es un antihéroe indiferente: no es un malvado, es un héroe sin cualidades heroicas. Y Harpagon es un personaje tipo: representa al avaro."],
      ["sofia", "Exactement. Rastignac incarne l'ambition sociale. Et regarde l'évolution : ce personnage évolue au fil du roman et finit par perdre ses illusions.", "Exacto. Rastignac encarna la ambición social. Y mira la evolución: este personaje evoluciona a lo largo de la novela y termina perdiendo sus ilusiones."]
    ],
    fijate: "Fíjate: le portrait physique, moral, social, l'apparence, la caractérisation directe ou indirecte, les actions et les paroles, héros, adjuvant, opposant, un antihéros indifférent, un personnage type, incarner l'ambition, évoluer au fil du roman, perdre ses illusions."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Retrato y función",
      idea: "Para analizar un personaje se estudia: su retrato físico (la apariencia), moral (el carácter) y social; su caracterización directa (el narrador lo describe) o indirecta (sus acciones y palabras); su función (héroe, antihéroe, adyuvante, oponente, según el esquema actancial: sujeto, objeto, adyuvante, oponente); su evolución; y lo que representa: el personaje tipo encarna un tipo social o una idea (Harpagon, la avaricia; Rastignac, la ambición; Tartuffe, la hipocresía; Emma Bovary, la insatisfacción). El antihéroe no es el villano: es un protagonista sin cualidades heroicas. El nombre también puede ser significativo.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Retrato"], [
        ["un protagoniste sans qualités héroïques", "el antihéros", "fonction"],
        ["à travers ses actions et ses paroles", "la caracterización indirecta", "fonction"],
        ["l'adjuvant", "quien ayuda al héroe", "fonction"],
        ["Harpagon est un personnage type : il représente l'avare. · type", "Harpagon es un personaje tipo: representa al avaro.", "Moral"],
        ["Le portrait physique décrit l'apparence. · physique", "El retrato físico describe la apariencia.", "Physique"],
        ["Harpagon = la avaricia · Rastignac = la ambición · Tartuffe = la hipocresía · Emma Bovary = la insatisfacción", "personajes tipo", "resumen"],
        ["grand · aux yeux bleus · maigre · élégant", "rasgos físicos", "Physique"],
        ["avare · orgueilleux · généreux · hypocrite", "rasgos morales", "Moral"],
        ["Dans L'Étranger, Meursault est un antihéros indifférent. · antihéros", "En El extranjero, Meursault es un antihéroe indiferente.", "fonction"],
        ["Rastignac incarne l'ambition sociale", "Rastignac encarna la ambición social", "Moral"],
        ["un méchant · un super-héros", "lo que NO es un antihéroe", "fonction"],
        ["Ce personnage évolue au fil du roman et finit par perdre ses illusions.", "Este personaje evoluciona y termina perdiendo sus ilusiones.", "Moral"]
      ]],
      ej: [["Meursault est un antihéros indifférent.", "Meursault es un antihéroe indiferente."], ["Le portrait moral révèle son avarice.", "El retrato moral revela su avaricia."], ["Tartuffe incarne l'hypocrisie.", "Tartufo encarna la hipocresía."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["antihéros = le méchant", "antihéros = un protagoniste sans qualités héroïques", "No es el villano."], ["Le portrait moral décrit l'apparence.", "Le portrait physique décrit l'apparence.", "Moral = carácter."], ["l'adjuvant = l'ennemi du héros", "l'adjuvant aide le héros ; l'opposant s'oppose à lui", "Esquema actancial."]] }
  ],
  ejemplos: [
    { sit: "«orgueilleux» es un rasgo…", resp: "Moral", pasos: ["Carácter."], porque: "Retrato." },
    { sit: "«maigre» es un rasgo…", resp: "Physique", pasos: ["Apariencia."], porque: "Retrato." },
    { sit: "Emma Bovary encarna…", resp: "la insatisfacción", pasos: ["Flaubert."], porque: "Tipos." }
  ],
  comprueba: [
    { q: "La caracterización directa la hace…", o: ["el narrador", "el lector"], a: 0, b: "gr", porque: "Descripción." },
    { q: "El oponente…", o: ["se opone al héroe", "ayuda al héroe"], a: 0, b: "gr", porque: "Esquema actancial." },
    { q: "Un personaje tipo representa…", o: ["un tipo social o una idea", "a una persona real"], a: 0, b: "gr", porque: "Tipo." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pg-portrait"], k: "sort", ask: "¿Rasgo físico o moral?", q: "Clasifica.", cats: ["Physique", "Moral"], items: [["grand", 0], ["aux yeux bleus", 0], ["maigre", 0], ["élégant", 0], ["avare", 1], ["orgueilleux", 1], ["généreux", 1], ["hypocrite", 1]], pista: "¿Se ve o es carácter?", why: "Retrato." },
    { fase: "guiada", c: ["b6pg-fonction"], k: "choice", ask: "El antihéros es…", q: "Elige.", o: ["un protagoniste sans qualités héroïques", "le méchant de l'histoire"], a: 0, pista: "No es el villano.", why: "Antihéroe." },
    { fase: "guiada", c: ["b6pg-fonction"], k: "fill", ask: "Personaje tipo.", q: "Harpagon est un personnage ___ : il représente l'avare.", acc: ["type"], pista: "tipo.", why: "<b>type</b>." },
    { fase: "indep", c: ["b6pg-portrait"], k: "fill", ask: "El retrato físico.", q: "Le portrait ___ décrit l'apparence.", acc: ["physique"], why: "<b>physique</b>." },
    { fase: "indep", c: ["b6pg-fonction"], k: "match", ask: "Une cada personaje con lo que encarna.", q: "Personaje → tipo", pairs: [["Harpagon", "la avaricia"], ["Rastignac", "la ambición"], ["Tartuffe", "la hipocresía"], ["Emma Bovary", "la insatisfacción"]], why: "Tipos." },
    { fase: "indep", c: ["b6pg-fonction"], k: "spot", ask: "Encuentra el error.", s: "Dans L'Étranger , Meursault est un [super-héros] indifférent .", fix: "antihéros", why: "<b>antihéros</b>." },
    { fase: "aplica", c: ["b6pg-portrait"], k: "choice", ask: "La caracterización indirecta se hace…", q: "Elige.", o: ["à travers ses actions et ses paroles", "par la description du narrateur"], a: 0, why: "Indirecta." },
    { fase: "aplica", c: ["b6pg-fonction"], k: "choice", ask: "Quien ayuda al héroe:", q: "Elige.", o: ["l'adjuvant", "l'opposant"], a: 0, why: "Adyuvante." },
    { fase: "aplica", c: ["b6pg-portrait"], k: "spot", ask: "Encuentra el error.", s: "Le portrait [moral] décrit les yeux bleus et la grande taille du héros .", fix: "physique", why: "<b>physique</b>." },
    { fase: "dominio", c: ["b6pg-fonction"], k: "order", ask: "Ordena la frase.", tokens: ["Rastignac", "incarne", "l'ambition sociale"], why: "<b>Rastignac incarne l'ambition sociale</b>" },
    { fase: "dominio", c: ["b6pg-fonction"], k: "choice", ask: "Un antihéroe NO es…", q: "Elige.", o: ["un méchant", "un protagoniste"], a: 0, why: "Falso sentido." },
    { fase: "dominio", c: ["b6pg-portrait", "b6pg-fonction"], k: "listen", say: "Ce personnage évolue au fil du roman et finit par perdre ses illusions.", acc: ["Ce personnage évolue au fil du roman et finit par perdre ses illusions."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Ce personnage évolue au fil du roman et finit par perdre ses illusions.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Meursault", "Harpagon", "Rastignac", "Tartuffe", "Emma Bovary", "L'Étranger"], previo: [] }
};

/* ── 61. L'apologue : fable, conte philosophique, utopie ── */
E["lit-apologue"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "L'apologue : fable, conte philosophique, utopie",
  objetivo: {
    que: "Vas a reconocer el apólogo: un relato breve que enseña de forma indirecta, agradando e instruyendo.",
    corto: "La fable est un apologue en vers. · L'Eldorado de Candide est une utopie. · L'apologue permet de critiquer sans être censuré.",
    podras: ["Definir el apólogo: relato breve + moral (explícita o implícita); falso amigo de «apología».", "Reconocer sus formas: la fábula (Le Loup et l'Agneau), el cuento filosófico (Candide), la utopía (el Eldorado, la abadía de Thélème), la parábola (el hijo pródigo).", "Explicar su objetivo, plaire et instruire, y su función de argumentación indirecta que esquiva la censura."],
    iconos: ["ic2/libro", "ic2/flor", "ic2/rayo"],
    previos: ["La Fontaine (lección 25), Candide (lección 30) y Rabelais (lección 20)."],
    capacidad: "Ahora analizas un apólogo como argumentación indirecta."
  },
  requiere: R("b6lf-fables", "b6ca-conte", "b6rb-humanisme"), recupera: ["b6ca-conte"],
  conceptos: {
    "b6lo-genre": { n: "l'apologue = relato breve con una enseñanza moral o filosófica, transmitida de forma indirecta y agradable (falso amigo: no es una apología, una defensa); moral explícita o implícita; objetivo: plaire et instruire (agradar e instruir); permite criticar sin ser censurado; el lector deduce la tesis", b: "gr" },
    "b6lo-formes": { n: "formas: la fable (La Fontaine, Le Loup et l'Agneau: un apólogo en verso), le conte philosophique (Candide), l'utopie (una sociedad ideal imaginaria: l'Eldorado de Candide, la abadía de Thélème; no una distopía), la parabole (le fils prodigue); argumentación directa: l'essai, le discours, la lettre ouverte, le traité; indirecta: la fable, le conte philosophique, l'utopie, la parabole", b: "gr" }
  },
  video: {
    titulo: "El apólogo", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libro", grande: "plaire et instruire", seg: [
        { es: "Hola. Enseñar contando una historia." } ] },
      { v: "frase", filas: [
          { nota: "fábula", p: 1, partes: [["La fable est un apologue en vers.", "-", 1]] },
          { nota: "utopía", p: 2, partes: [["L'Eldorado de Candide est une utopie.", "-", 2]] },
          { nota: "censura", p: 3, partes: [["L'apologue permet de critiquer sans être censuré.", "-", 3]] } ], seg: [
        { fr: "La fable est un apologue en vers.", p: 1 }, { fr: "L'Eldorado de Candide est une utopie.", p: 2 }, { fr: "L'apologue permet de critiquer sans être censuré.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Un «apologue» es…", o: ["un relato con enseñanza", "una apología, una defensa"], a: 0, es: true,
        bien: "¡Sí! Falso amigo.", mal: "Es un relato con enseñanza.",
        seg: [ { es: "Pausa. Relato con enseñanza." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la fable", "le conte philosophique", "l'utopie", "la parabole", "la morale", "plaire et instruire"], seg: [
        { es: "Cuatro formas, un objetivo.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "¿Por qué contar una historia?", img: "bg-universidad", yo: "camila",
    escena: "Madame Sofia explica por qué los autores eligen el apólogo para criticar.",
    pj: PJ,
    lineas: [
      ["sofia", "Pourquoi La Fontaine raconte-t-il l'histoire d'un loup et d'un agneau au lieu d'écrire un traité ? — Pour plaire et instruire ! La fable est un apologue en vers.", "¿Por qué La Fontaine cuenta la historia de un lobo y un cordero en vez de escribir un tratado? — ¡Para agradar e instruir! La fábula es un apólogo en verso."],
      ["camila", "Un apologue, c'est donc un récit bref avec une leçon. Pas une apologie ! — Exact. La morale peut être explicite ou implicite : le lecteur la déduit.", "Un apólogo es entonces un relato breve con una lección. ¡No una apología! — Exacto. La moraleja puede ser explícita o implícita: el lector la deduce."],
      ["sofia", "Il y a aussi le conte philosophique, comme Candide, et l'utopie : l'Eldorado de Candide est une utopie, un pays parfait. Rabelais imagine l'abbaye de Thélème.", "También está el cuento filosófico, como Cándido, y la utopía: el Eldorado de Cándido es una utopía, un país perfecto. Rabelais imagina la abadía de Thélème."],
      ["camila", "Et c'est plus prudent : l'apologue permet de critiquer sans être censuré. — Oui : grâce à l'apologue, l'auteur fait passer une idée tout en divertissant le lecteur.", "Y es más prudente: el apólogo permite criticar sin ser censurado. — Sí: gracias al apólogo, el autor transmite una idea mientras divierte al lector."]
    ],
    fijate: "Fíjate: un loup et un agneau, un traité, plaire et instruire, un apologue en vers, un récit bref avec une leçon, pas une apologie, une morale explicite ou implicite, le conte philosophique, l'utopie, un pays parfait, l'abbaye de Thélème, critiquer sans être censuré."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Género y formas",
      idea: "El apólogo es un relato breve que transmite una enseñanza moral o filosófica de forma indirecta y agradable. Su moral puede ser explícita o implícita: el lector deduce la tesis. Formas: la fábula (La Fontaine, Le Loup et l'Agneau), el cuento filosófico (Voltaire, Candide), la utopía, sociedad ideal imaginaria (el Eldorado, la abadía de Thélème de Rabelais), la parábola (el hijo pródigo). Su objetivo es plaire et instruire, agradar e instruir, y permite criticar esquivando la censura. Frente a la argumentación directa (ensayo, discurso, carta abierta, tratado), el apólogo es argumentación indirecta. Ojo: apologue no es «apología».",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Argumentación"], [
        ["un récit bref avec une leçon", "el apologue", "Indirecta (apólogo)"],
        ["une société idéale imaginaire", "la utopie", "Indirecta (apólogo)"],
        ["plaire et instruire", "el objetivo del apólogo", "Indirecta (apólogo)"],
        ["Plaire et instruire. · instruire", "Agradar e instruir.", "Indirecta (apólogo)"],
        ["Candide est un conte philosophique. · philosophique", "Cándido es un cuento filosófico.", "Indirecta (apólogo)"],
        ["fable = Le Loup et l'Agneau · conte philosophique = Candide · utopie = l'Eldorado · parabole = le fils prodigue", "formas y ejemplos", "resumen"],
        ["l'essai · le discours · la lettre ouverte · le traité", "argumentación directa", "Directa"],
        ["la fable · le conte philosophique · l'utopie · la parabole", "argumentación indirecta", "Indirecta (apólogo)"],
        ["L'Eldorado, dans Candide, est une utopie, un pays parfait. · utopie", "El Eldorado, en Cándido, es una utopía, un país perfecto.", "Indirecta (apólogo)"],
        ["L'apologue plaît et instruit", "El apólogo agrada e instruye", "Indirecta (apólogo)"],
        ["une apologie · une dystopie", "lo que NO es el apólogo / la utopía", "Directa"],
        ["Grâce à l'apologue, l'auteur fait passer une idée tout en divertissant le lecteur.", "Gracias al apólogo, el autor transmite una idea divirtiendo.", "Indirecta (apólogo)"]
      ]],
      ej: [["La fable est un apologue en vers.", "La fábula es un apólogo en verso."], ["L'abbaye de Thélème est une utopie.", "La abadía de Thélème es una utopía."], ["L'apologue permet de critiquer sans être censuré.", "El apólogo permite criticar sin ser censurado."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["apologue = apologie (défense)", "apologue = récit avec une leçon", "Falso amigo."], ["L'Eldorado est une dystopie.", "L'Eldorado est une utopie.", "Sociedad ideal."], ["La morale est toujours explicite.", "La morale peut être explicite ou implicite.", "El lector deduce."]] }
  ],
  ejemplos: [
    { sit: "«la lettre ouverte» es argumentación…", resp: "Directa", pasos: ["Tesis expuesta."], porque: "Directa." },
    { sit: "«la parabole» es argumentación…", resp: "Indirecta (apólogo)", pasos: ["Relato."], porque: "Apólogo." },
    { sit: "Ejemplo de parábola:", resp: "le fils prodigue", pasos: ["Relato bíblico."], porque: "Formas." }
  ],
  comprueba: [
    { q: "El apólogo permite…", o: ["criticar esquivando la censura", "describir sin opinar"], a: 0, b: "gr", porque: "Indirecto." },
    { q: "La moral de un apólogo puede ser…", o: ["explícita o implícita", "solo explícita"], a: 0, b: "gr", porque: "El lector deduce." },
    { q: "La abadía de Thélème es de…", o: ["Rabelais", "Voltaire"], a: 0, b: "gr", porque: "Gargantua." }
  ],
  practica: [
    { fase: "guiada", c: ["b6lo-formes"], k: "sort", ask: "¿Argumentación directa o indirecta?", q: "Clasifica.", cats: ["Directa", "Indirecta (apólogo)"], items: [["l'essai", 0], ["le discours", 0], ["la lettre ouverte", 0], ["le traité", 0], ["la fable", 1], ["le conte philosophique", 1], ["l'utopie", 1], ["la parabole", 1]], pista: "¿Tesis expuesta o relato?", why: "Argumentación." },
    { fase: "guiada", c: ["b6lo-genre"], k: "choice", ask: "Un apologue es…", q: "Elige.", o: ["un récit bref avec une leçon", "une apologie"], a: 0, pista: "Falso amigo.", why: "Relato." },
    { fase: "guiada", c: ["b6lo-genre"], k: "fill", ask: "Agradar e instruir.", q: "Plaire et ___ .", acc: ["instruire"], pista: "ins…", why: "<b>instruire</b>." },
    { fase: "indep", c: ["b6lo-formes"], k: "fill", ask: "Cuento filosófico.", q: "Candide est un conte ___ .", acc: ["philosophique"], why: "<b>philosophique</b>." },
    { fase: "indep", c: ["b6lo-formes"], k: "match", ask: "Une cada forma con su ejemplo.", q: "Forma → ejemplo", pairs: [["fable", "Le Loup et l'Agneau"], ["conte philosophique", "Candide"], ["utopie", "l'Eldorado"], ["parabole", "le fils prodigue"]], why: "Formas." },
    { fase: "indep", c: ["b6lo-formes"], k: "spot", ask: "Encuentra el error.", s: "L'Eldorado , dans Candide , est une [dystopie] , un pays parfait .", fix: "utopie", why: "<b>utopie</b>." },
    { fase: "aplica", c: ["b6lo-formes"], k: "choice", ask: "Una utopía es…", q: "Elige.", o: ["une société idéale imaginaire", "un pays réel"], a: 0, why: "Ideal." },
    { fase: "aplica", c: ["b6lo-genre"], k: "choice", ask: "El objetivo del apólogo:", q: "Elige.", o: ["plaire et instruire", "informer sans juger"], a: 0, why: "Agradar e instruir." },
    { fase: "aplica", c: ["b6lo-genre"], k: "spot", ask: "Encuentra el error.", s: "La morale d'un apologue est [toujours explicite] .", fix: "explicite ou implicite", why: "<b>explicite ou implicite</b>." },
    { fase: "dominio", c: ["b6lo-genre"], k: "order", ask: "Ordena la frase.", tokens: ["L'apologue", "plaît", "et instruit"], why: "<b>L'apologue plaît et instruit</b>" },
    { fase: "dominio", c: ["b6lo-formes"], k: "choice", ask: "La fábula es un apólogo…", q: "Elige.", o: ["en vers", "en forme de traité"], a: 0, why: "La Fontaine." },
    { fase: "dominio", c: ["b6lo-genre", "b6lo-formes"], k: "listen", say: "Grâce à l'apologue, l'auteur fait passer une idée tout en divertissant le lecteur.", acc: ["Grâce à l'apologue, l'auteur fait passer une idée tout en divertissant le lecteur."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Grâce à l'apologue, l'auteur fait passer une idée tout en divertissant le lecteur.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "La Fontaine", "Voltaire", "Rabelais", "Candide", "Eldorado", "Thélème", "Le Loup et l'Agneau", "Gargantua"], previo: [] }
};

/* ── 62. Les prix littéraires ── */
E["lit-prix-litteraires"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Les prix littéraires",
  objetivo: {
    que: "Vas a conocer los grandes premios literarios franceses y su peso en la vida del libro.",
    corto: "Le prix Goncourt est remis chaque année en novembre. · Le Goncourt ne rapporte que dix euros, mais beaucoup de ventes. · Le jury du Femina est composé de femmes.",
    podras: ["Presentar el Goncourt (desde 1903): el más prestigioso, dotado con 10 euros simbólicos pero con ventas enormes; se entrega en noviembre.", "Distinguir el Renaudot (anunciado el mismo día que el Goncourt), el Femina (1904, jurado femenino), el Médicis (obras innovadoras), el Interallié y el Gran Premio de novela de la Academia francesa.", "Explicar el Goncourt des lycéens (jurado de estudiantes de liceo) y distinguir los premios franceses de los extranjeros."],
    iconos: ["ic2/libros", "ic2/bandera", "ic2/libro"],
    previos: ["La literatura contemporánea y la rentrée littéraire (lección 55)."],
    capacidad: "Ahora explicas el sistema de premios literarios franceses."
  },
  requiere: R("b6ct-rentree", "b6ct-auteurs"), recupera: ["b6ct-rentree"],
  conceptos: {
    "b6pt-goncourt": { n: "le prix Goncourt (desde 1903): el más prestigioso; dotación simbólica de 10 euros, pero enormes ventas; remis chaque année en novembre; los premios se concentran en otoño, tras la rentrée littéraire; le Goncourt des lycéens: decidido por estudiantes de liceo (élèves); «Il a remporté le prix Goncourt»", b: "gr" },
    "b6pt-autres": { n: "le Renaudot: anunciado el mismo día que el Goncourt; le Femina (1904): jurado compuesto solo de mujeres (no de hombres); le Médicis: premia a menudo obras más innovadoras; l'Interallié; le Grand Prix du roman de l'Académie française; premios extranjeros: le Booker Prize, le Pulitzer, le Cervantes, le Strega", b: "gr" }
  },
  video: {
    titulo: "Los premios literarios", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/libros", grande: "le Goncourt", seg: [
        { es: "Hola. Diez euros que valen millones." } ] },
      { v: "frase", filas: [
          { nota: "noviembre", p: 1, partes: [["Le prix Goncourt est remis chaque année en novembre.", "-", 1]] },
          { nota: "10 euros", p: 2, partes: [["Le Goncourt ne rapporte que dix euros, mais beaucoup de ventes.", "-", 2]] },
          { nota: "Femina", p: 3, partes: [["Le jury du Femina est composé de femmes.", "-", 3]] } ], seg: [
        { fr: "Le prix Goncourt est remis chaque année en novembre.", p: 1 }, { fr: "Le Goncourt ne rapporte que dix euros, mais beaucoup de ventes.", p: 2 }, { fr: "Le jury du Femina est composé de femmes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El Goncourt da al ganador…", o: ["10 euros simbólicos", "un millón de euros"], a: 0, es: true,
        bien: "¡Sí! Pero vende muchísimo.", mal: "Solo 10 euros.",
        seg: [ { es: "Pausa. Diez euros." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["le Goncourt", "le Renaudot", "le Femina", "le Médicis", "l'Interallié", "le Goncourt des lycéens"], seg: [
        { es: "Seis premios.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "La faja roja", img: "bg-paris", yo: "camila",
    escena: "En noviembre, Camila ve en todas las librerías un libro con una faja roja.",
    pj: PJ,
    lineas: [
      ["camila", "Pourquoi ce livre a un bandeau rouge partout ? — Il a remporté le prix Goncourt ! Le prix Goncourt est remis chaque année en novembre, depuis 1903.", "¿Por qué este libro tiene una faja roja en todas partes? — ¡Ganó el premio Goncourt! El Goncourt se entrega cada año en noviembre, desde 1903."],
      ["hugo", "Et l'auteur devient riche ? — Le Goncourt ne rapporte que dix euros, mais beaucoup de ventes : des centaines de milliers d'exemplaires.", "¿Y el autor se hace rico? — El Goncourt solo aporta diez euros, pero muchas ventas: cientos de miles de ejemplares."],
      ["camila", "Il y a d'autres prix ? — Le prix Renaudot est annoncé le même jour que le Goncourt. Le jury du Femina est composé de femmes. Le Médicis récompense souvent des œuvres plus innovantes.", "¿Hay otros premios? — El Renaudot se anuncia el mismo día que el Goncourt. El jurado del Femina está compuesto por mujeres. El Médicis premia a menudo obras más innovadoras."],
      ["hugo", "Et le Goncourt des lycéens est décerné par des élèves. Chaque automne, les grands prix littéraires font vendre des milliers de livres.", "Y el Goncourt de los estudiantes lo otorgan alumnos de liceo. Cada otoño, los grandes premios literarios hacen vender miles de libros."]
    ],
    fijate: "Fíjate: un bandeau rouge, remporter le prix Goncourt, remis en novembre, depuis 1903, ne rapporte que dix euros, des centaines de milliers d'exemplaires, annoncé le même jour, le jury du Femina, des œuvres plus innovantes, décerné par des élèves, chaque automne."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Los grandes premios",
      idea: "Francia tiene muchos premios literarios, concentrados en otoño tras la rentrée littéraire. El Goncourt (desde 1903) es el más prestigioso: se entrega en noviembre y solo aporta 10 euros simbólicos, pero dispara las ventas. El Renaudot se anuncia el mismo día. El Femina (1904) tiene un jurado exclusivamente femenino. El Médicis premia a menudo obras más innovadoras. Están también el Interallié y el Gran Premio de novela de la Academia francesa. El Goncourt des lycéens lo eligen estudiantes de liceo. Premios extranjeros: el Booker Prize, el Pulitzer, el Cervantes, el Strega.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "País"], [
        ["dix euros symboliques", "la dotación del Goncourt", "Francés"],
        ["le Femina", "el premio de jurado femenino", "Francés"],
        ["en automne", "la temporada de premios", "Francés"],
        ["Le Goncourt des lycéens est décerné par des élèves. · lycéens", "El Goncourt de los estudiantes lo otorgan alumnos.", "Francés"],
        ["Le prix Renaudot est annoncé le même jour que le Goncourt. · Renaudot", "El Renaudot se anuncia el mismo día que el Goncourt.", "Francés"],
        ["Goncourt = el más prestigioso · Femina = jurado femenino · Goncourt des lycéens = jurado de estudiantes · Médicis = obras innovadoras", "premios", "resumen"],
        ["le Goncourt · le Renaudot · le Femina · l'Interallié", "premios franceses", "Francés"],
        ["le Booker Prize · le Pulitzer · le Cervantes · le Strega", "premios extranjeros", "No francés"],
        ["Le jury du prix Femina est composé uniquement de femmes. · femmes", "El jurado del Femina está compuesto solo por mujeres.", "Francés"],
        ["Il a remporté le prix Goncourt", "Ganó el premio Goncourt", "Francés"],
        ["depuis 1903", "desde cuándo existe el Goncourt", "Francés"],
        ["Chaque automne, les grands prix littéraires font vendre des milliers de livres.", "Cada otoño, los premios hacen vender miles de libros.", "Francés"]
      ]],
      ej: [["Le prix Goncourt est remis chaque année en novembre.", "El Goncourt se entrega cada año en noviembre."], ["Le Goncourt ne rapporte que dix euros, mais beaucoup de ventes.", "El Goncourt solo aporta diez euros, pero muchas ventas."], ["Le Médicis récompense des œuvres innovantes.", "El Médicis premia obras innovadoras."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le Goncourt rapporte beaucoup d'argent au lauréat.", "Le Goncourt rapporte dix euros (mais des ventes énormes).", "Curiosidad."], ["Le jury du Femina est composé d'hommes.", "Le jury du Femina est composé de femmes.", "Jurado femenino."], ["Les prix sont décernés au printemps.", "Les prix sont décernés en automne.", "Temporada."]] }
  ],
  ejemplos: [
    { sit: "El Pulitzer es…", resp: "No francés", pasos: ["Estados Unidos."], porque: "Países." },
    { sit: "El Interallié es…", resp: "Francés", pasos: ["Otoño."], porque: "Países." },
    { sit: "El premio de las obras innovadoras:", resp: "le Médicis", pasos: ["Vanguardia."], porque: "Premios." }
  ],
  comprueba: [
    { q: "El Goncourt existe desde…", o: ["1903", "1945"], a: 0, b: "gr", porque: "Principios del siglo XX." },
    { q: "El Goncourt se entrega en…", o: ["noviembre", "marzo"], a: 0, b: "gr", porque: "Otoño." },
    { q: "El Femina nace en…", o: ["1904", "1984"], a: 0, b: "gr", porque: "Un año después del Goncourt." }
  ],
  practica: [
    { fase: "guiada", c: ["b6pt-autres"], k: "sort", ask: "¿Premio francés o no?", q: "Clasifica.", cats: ["Francés", "No francés"], items: [["le Goncourt", 0], ["le Renaudot", 0], ["le Femina", 0], ["l'Interallié", 0], ["le Booker Prize", 1], ["le Pulitzer", 1], ["le Cervantes", 1], ["le Strega", 1]], pista: "¿París o el extranjero?", why: "Países." },
    { fase: "guiada", c: ["b6pt-goncourt"], k: "choice", ask: "La dotación del Goncourt:", q: "Elige.", o: ["dix euros symboliques", "un million d'euros"], a: 0, pista: "Simbólica.", why: "10 €." },
    { fase: "guiada", c: ["b6pt-goncourt"], k: "fill", ask: "El Goncourt de los estudiantes.", q: "Le Goncourt des ___ est décerné par des élèves.", acc: ["lycéens"], pista: "lyc…", why: "<b>lycéens</b>." },
    { fase: "indep", c: ["b6pt-autres"], k: "fill", ask: "El premio anunciado el mismo día.", q: "Le prix ___ est annoncé le même jour que le Goncourt.", acc: ["Renaudot"], why: "<b>Renaudot</b>." },
    { fase: "indep", c: ["b6pt-goncourt", "b6pt-autres"], k: "match", ask: "Une cada premio con su rasgo.", q: "Premio → rasgo", pairs: [["Goncourt", "el más prestigioso"], ["Femina", "jurado femenino"], ["Goncourt des lycéens", "jurado de estudiantes"], ["Médicis", "obras innovadoras"]], why: "Premios." },
    { fase: "indep", c: ["b6pt-autres"], k: "spot", ask: "Encuentra el error.", s: "Le jury du prix Femina est composé uniquement [d'hommes] .", fix: "de femmes", why: "<b>de femmes</b>." },
    { fase: "aplica", c: ["b6pt-autres"], k: "choice", ask: "El premio de jurado femenino:", q: "Elige.", o: ["le Femina", "le Renaudot"], a: 0, why: "Femina." },
    { fase: "aplica", c: ["b6pt-goncourt"], k: "choice", ask: "La temporada de premios:", q: "Elige.", o: ["en automne", "en été"], a: 0, why: "Otoño." },
    { fase: "aplica", c: ["b6pt-goncourt"], k: "spot", ask: "Encuentra el error.", s: "Le prix Goncourt est remis chaque année [en mars] .", fix: "en novembre", why: "<b>en novembre</b>." },
    { fase: "dominio", c: ["b6pt-goncourt"], k: "order", ask: "Ordena la frase.", tokens: ["Il a remporté", "le prix", "Goncourt"], why: "<b>Il a remporté le prix Goncourt</b>" },
    { fase: "dominio", c: ["b6pt-goncourt"], k: "choice", ask: "El Goncourt existe…", q: "Elige.", o: ["depuis 1903", "depuis 1990"], a: 0, why: "1903." },
    { fase: "dominio", c: ["b6pt-goncourt", "b6pt-autres"], k: "listen", say: "Chaque automne, les grands prix littéraires font vendre des milliers de livres.", acc: ["Chaque automne, les grands prix littéraires font vendre des milliers de livres."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Chaque automne, les grands prix littéraires font vendre des milliers de livres.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Goncourt", "Renaudot", "Femina", "Médicis", "Interallié", "Académie française", "Booker Prize", "Pulitzer", "Cervantes", "Strega"], previo: [] }
};

/* ── 63. La littérature québécoise ── */
E["lit-quebec"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "La littérature québécoise",
  objetivo: {
    que: "Vas a conocer la literatura de Quebec, que afirma una identidad francófona en América.",
    corto: "Les Belles-Sœurs sont écrites en joual. · Gabrielle Roy a reçu le prix Femina en 1947. · La Révolution tranquille a transformé le Québec.",
    podras: ["Presentar a los autores clave: Émile Nelligan (poesía), Gabrielle Roy (Bonheur d'occasion, 1945, Femina 1947), Anne Hébert (Kamouraska), Michel Tremblay (Les Belles-Sœurs, 1968), Réjean Ducharme, Dany Laferrière.", "Explicar el joual: el habla popular de Montreal (de «cheval»), llevado a escena por Tremblay.", "Situar la Révolution tranquille (años 60): modernización y afirmación de Quebec."],
    iconos: ["ic2/mundo", "ic2/bandera", "ic2/libro"],
    previos: ["Las francofonías (lección 8) y Quebec (C1.2, lección 5)."],
    capacidad: "Ahora presentas la literatura quebequense."
  },
  requiere: R("b6fc-auteurs", "b5qc-amerique"), recupera: ["b6fc-auteurs"],
  conceptos: {
    "b6qc-auteurs": { n: "literatura de Quebec: identidad francófona en América; Émile Nelligan (poesía); Gabrielle Roy: Bonheur d'occasion (1945, Montreal obrero; Femina 1947); Anne Hébert: Kamouraska; Michel Tremblay: Les Belles-Sœurs (1968, teatro); Réjean Ducharme: L'Avalée des avalés; Dany Laferrière; quebequenses frente a franceses (Annie Ernaux, Patrick Modiano, Marcel Proust)", b: "gr" },
    "b6qc-joual": { n: "le joual: el habla popular de Montreal (de «cheval», no significa caballo), un français québécois (no el argot parisino); Michel Tremblay hizo entrar la lengua popular de Montreal en escena con Les Belles-Sœurs; la Révolution tranquille (años 60): modernización y afirmación de Quebec", b: "gr" }
  },
  video: {
    titulo: "Literatura de Quebec", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "le Québec", seg: [
        { es: "Hola. El francés de América." } ] },
      { v: "frase", filas: [
          { nota: "joual", p: 1, partes: [["Les Belles-Sœurs sont écrites en joual.", "-", 1]] },
          { nota: "Femina", p: 2, partes: [["Gabrielle Roy a reçu le prix Femina en 1947.", "-", 2]] },
          { nota: "años 60", p: 3, partes: [["La Révolution tranquille a transformé le Québec.", "-", 3]] } ], seg: [
        { fr: "Les Belles-Sœurs sont écrites en joual.", p: 1 }, { fr: "Gabrielle Roy a reçu le prix Femina en mille neuf cent quarante-sept.", p: 2 }, { fr: "La Révolution tranquille a transformé le Québec.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "El «joual» es…", o: ["el habla popular de Montreal", "un caballo"], a: 0, es: true,
        bien: "¡Sí! Viene de «cheval».", mal: "Es el habla popular.",
        seg: [ { es: "Pausa. Habla popular." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Gabrielle Roy", "Michel Tremblay", "Anne Hébert", "le joual", "la Révolution tranquille", "Montréal"], seg: [
        { es: "Autores, lengua e historia.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Teatro en Montreal", img: "bg-noche", yo: "camila",
    escena: "Camila ve Les Belles-Sœurs en un teatro de Montreal con una amiga quebequense.",
    pj: PJ,
    lineas: [
      ["camila", "Je ne comprends pas tout ! — C'est normal : Les Belles-Sœurs sont écrites en joual, la langue populaire de Montréal. Le mot vient de « cheval », prononcé à la québécoise.", "¡No lo entiendo todo! — Es normal: Las cuñadas está escrita en joual, la lengua popular de Montreal. La palabra viene de «cheval», pronunciado a la quebequense."],
      ["sofia", "En 1968, ça a fait scandale. Michel Tremblay a fait entrer la langue populaire de Montréal sur scène. C'était l'époque de la Révolution tranquille : la Révolution tranquille a transformé le Québec.", "En 1968 causó escándalo. Michel Tremblay hizo entrar la lengua popular de Montreal en escena. Era la época de la Revolución tranquila: la Revolución tranquila transformó Quebec."],
      ["camila", "Et les romans ? — Gabrielle Roy, Bonheur d'occasion, en 1945 : le Montréal ouvrier. Gabrielle Roy a reçu le prix Femina en 1947.", "¿Y las novelas? — Gabrielle Roy, Bonheur d'occasion, de 1945: el Montreal obrero. Gabrielle Roy recibió el Femina en 1947."],
      ["sofia", "Lis aussi Kamouraska, un roman d'Anne Hébert, et la poésie d'Émile Nelligan. Cette littérature affirme une identité francophone en Amérique.", "Lee también Kamouraska, una novela de Anne Hébert, y la poesía de Émile Nelligan. Esta literatura afirma una identidad francófona en América."]
    ],
    fijate: "Fíjate: écrites en joual, la langue populaire de Montréal, vient de « cheval », faire scandale, faire entrer la langue populaire sur scène, la Révolution tranquille, Bonheur d'occasion (1945), le Montréal ouvrier, le prix Femina en 1947, Kamouraska, une identité francophone en Amérique."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y lengua",
      idea: "La literatura de Quebec afirma una identidad francófona en América. Émile Nelligan es su gran poeta. Gabrielle Roy retrata el Montreal obrero en Bonheur d'occasion (1945, Femina 1947). Anne Hébert escribe Kamouraska; Réjean Ducharme, L'Avalée des avalés; Dany Laferrière, de origen haitiano, entra en la Academia francesa. Michel Tremblay, con Les Belles-Sœurs (1968), lleva a escena el joual, habla popular de Montreal (de «cheval»). La Révolución tranquila de los años 60 moderniza Quebec e impulsa esta afirmación.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Origen"], [
        ["la langue populaire de Montréal", "el joual", "Québec"],
        ["Michel Tremblay", "el gran dramaturgo de Quebec", "Québec"],
        ["une modernisation du Québec", "la Révolution tranquille (años 60)", "Québec"],
        ["Bonheur d'occasion de Gabrielle Roy. · occasion", "Bonheur d'occasion, de Gabrielle Roy.", "Québec"],
        ["Kamouraska est un roman d'Anne Hébert. · Hébert", "Kamouraska es una novela de Anne Hébert.", "Québec"],
        ["Gabrielle Roy = Bonheur d'occasion · Michel Tremblay = Les Belles-Sœurs · Anne Hébert = Kamouraska · Réjean Ducharme = L'Avalée des avalés", "autores y obras", "resumen"],
        ["Gabrielle Roy · Michel Tremblay · Émile Nelligan · le joual", "Quebec", "Québec"],
        ["Annie Ernaux · Patrick Modiano · Marcel Proust · l'argot parisien", "Francia", "France"],
        ["Les Belles-Sœurs de Michel Tremblay sont écrites en français québécois appelé joual. · joual", "Las cuñadas está escrita en un francés quebequense llamado joual.", "Québec"],
        ["La pièce est écrite en joual", "La obra está escrita en joual", "Québec"],
        ["un cheval", "lo que NO significa joual (aunque venga de ahí)", "France"],
        ["Michel Tremblay a fait entrer la langue populaire de Montréal sur scène.", "Tremblay llevó la lengua popular de Montreal a escena.", "Québec"]
      ]],
      ej: [["Les Belles-Sœurs sont écrites en joual.", "Las cuñadas está escrita en joual."], ["Gabrielle Roy décrit le Montréal ouvrier.", "Gabrielle Roy describe el Montreal obrero."], ["La Révolution tranquille a transformé le Québec.", "La Revolución tranquila transformó Quebec."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["joual = cheval", "joual = la langue populaire de Montréal (de « cheval »)", "Término cultural."], ["Michel Tremblay est un romancier français.", "Michel Tremblay est un dramaturge québécois.", "Quebec."], ["la Révolution tranquille = une guerre", "= une modernisation pacifique (années 1960)", "Historia."]] }
  ],
  ejemplos: [
    { sit: "Émile Nelligan es…", resp: "Québec", pasos: ["Poeta quebequense."], porque: "Origen." },
    { sit: "«l'argot parisien» es de…", resp: "France", pasos: ["París."], porque: "Origen." },
    { sit: "L'Avalée des avalés es de…", resp: "Réjean Ducharme", pasos: ["Novela."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Les Belles-Sœurs es de…", o: ["1968", "1945"], a: 0, b: "gr", porque: "1945 = Bonheur d'occasion." },
    { q: "Bonheur d'occasion retrata…", o: ["el Montreal obrero", "la corte de Versalles"], a: 0, b: "gr", porque: "Gabrielle Roy." },
    { q: "La Revolución tranquila es de los años…", o: ["60", "20"], a: 0, b: "gr", porque: "Modernización." }
  ],
  practica: [
    { fase: "guiada", c: ["b6qc-auteurs"], k: "sort", ask: "¿Quebec o Francia?", q: "Clasifica.", cats: ["Québec", "France"], items: [["Gabrielle Roy", 0], ["Michel Tremblay", 0], ["Émile Nelligan", 0], ["le joual", 0], ["Annie Ernaux", 1], ["Patrick Modiano", 1], ["Marcel Proust", 1], ["l'argot parisien", 1]], pista: "¿América o Europa?", why: "Origen." },
    { fase: "guiada", c: ["b6qc-joual"], k: "choice", ask: "El joual es…", q: "Elige.", o: ["la langue populaire de Montréal", "un cheval"], a: 0, pista: "Habla.", why: "Joual." },
    { fase: "guiada", c: ["b6qc-auteurs"], k: "fill", ask: "Bonheur d'…", q: "Bonheur d'___ de Gabrielle Roy.", acc: ["occasion"], pista: "occ…", why: "<b>occasion</b>." },
    { fase: "indep", c: ["b6qc-auteurs"], k: "fill", ask: "Anne …", q: "Kamouraska est un roman d'Anne ___ .", acc: ["Hébert"], why: "<b>Hébert</b>." },
    { fase: "indep", c: ["b6qc-auteurs"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Gabrielle Roy", "Bonheur d'occasion"], ["Michel Tremblay", "Les Belles-Sœurs"], ["Anne Hébert", "Kamouraska"], ["Réjean Ducharme", "L'Avalée des avalés"]], why: "Obras." },
    { fase: "indep", c: ["b6qc-joual"], k: "spot", ask: "Encuentra el error.", s: "Les Belles-Sœurs de Michel Tremblay sont écrites en [argot parisien] .", fix: "joual", why: "En <b>joual</b>." },
    { fase: "aplica", c: ["b6qc-auteurs"], k: "choice", ask: "El gran dramaturgo de Quebec:", q: "Elige.", o: ["Michel Tremblay", "Patrick Modiano"], a: 0, why: "Tremblay." },
    { fase: "aplica", c: ["b6qc-joual"], k: "choice", ask: "La Révolution tranquille fue…", q: "Elige.", o: ["une modernisation du Québec", "une guerre civile"], a: 0, why: "Años 60." },
    { fase: "aplica", c: ["b6qc-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Gabrielle Roy a reçu le prix Femina en [1987] .", fix: "1947", why: "<b>1947</b>." },
    { fase: "dominio", c: ["b6qc-joual"], k: "order", ask: "Ordena la frase.", tokens: ["La pièce", "est écrite", "en joual"], why: "<b>La pièce est écrite en joual</b>" },
    { fase: "dominio", c: ["b6qc-joual"], k: "choice", ask: "«Joual» viene de…", q: "Elige.", o: ["« cheval »", "« journal »"], a: 0, why: "Pronunciación." },
    { fase: "dominio", c: ["b6qc-joual", "b6qc-auteurs"], k: "listen", say: "Michel Tremblay a fait entrer la langue populaire de Montréal sur scène.", acc: ["Michel Tremblay a fait entrer la langue populaire de Montréal sur scène."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Michel Tremblay a fait entrer la langue populaire de Montréal sur scène.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Émile Nelligan", "Nelligan", "Gabrielle Roy", "Anne Hébert", "Hébert", "Michel Tremblay", "Tremblay", "Réjean Ducharme", "Dany Laferrière", "Les Belles-Sœurs", "Bonheur d'occasion", "Kamouraska", "L'Avalée des avalés", "Montréal", "Québec", "Amérique", "Femina", "Annie Ernaux", "Patrick Modiano", "Marcel Proust", "Versailles"], previo: [] }
};

/* ── 64. Littératures d'Afrique subsaharienne ── */
E["lit-afrique"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Littératures d'Afrique subsaharienne",
  objetivo: {
    que: "Vas a conocer la literatura africana en francés: autores, obras y grandes temas.",
    corto: "Une si longue lettre est un roman épistolaire de Mariama Bâ. · Kourouma a transformé le français au contact du malinké. · L'Aventure ambiguë raconte un conflit de cultures.",
    podras: ["Presentar a los autores: Camara Laye (Guinea, L'Enfant noir, 1953), Cheikh Hamidou Kane (Senegal, L'Aventure ambiguë, 1961), Ahmadou Kourouma (Costa de Marfil, Les Soleils des indépendances, 1968; Allah n'est pas obligé, Renaudot 2000), Mariama Bâ (Senegal, Une si longue lettre, 1979), Alain Mabanckou (Congo, Renaudot 2006), Mohamed Mbougar Sarr (Goncourt 2021).", "Explicar los temas: la colonización, las independencias, tradición y modernidad, la condición femenina.", "Comprender que esta literatura es oral y escrita, y una de las más dinámicas hoy."],
    iconos: ["ic2/mundo", "ic2/libro", "ic2/bandera"],
    previos: ["La negritud (lección 13), las francofonías (lección 8) y África francófona (C1.2, lección 11)."],
    capacidad: "Ahora presentas la literatura africana francófona."
  },
  requiere: R("b6ng-histoire", "b6fc-auteurs"), recupera: ["b6ng-histoire"],
  conceptos: {
    "b6af-auteurs": { n: "Camara Laye (Guinea): L'Enfant noir (1953), infancia y tradición; Cheikh Hamidou Kane (Senegal): L'Aventure ambiguë (1961), choque entre escuela occidental y tradición, un conflicto de culturas; Ahmadou Kourouma (Costa de Marfil): Les Soleils des indépendances (1968), francés «malinkizado» (transformado al contacto del malinké), Allah n'est pas obligé (Renaudot 2000, un niño soldado); Mariama Bâ (Senegal): Une si longue lettre (1979), novela epistolar (no teatral), condición femenina y poligamia; Alain Mabanckou (Congo, Renaudot 2006); Mohamed Mbougar Sarr (Goncourt 2021)", b: "gr" },
    "b6af-themes": { n: "temas: la colonisation, les indépendances, tradition et modernité, la condition féminine (no la caballería medieval, la corte de Versalles, la mina del Norte, el Nouveau Roman); la literatura africana no es solo oral: también escrita y muy premiada (tradición oral + escrita); una de las más dinámicas hoy", b: "gr" }
  },
  video: {
    titulo: "Literaturas africanas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "l'Afrique francophone", seg: [
        { es: "Hola. Una de las literaturas más vivas." } ] },
      { v: "frase", filas: [
          { nota: "epistolar", p: 1, partes: [["Une si longue lettre est un roman épistolaire de Mariama Bâ.", "-", 1]] },
          { nota: "malinké", p: 2, partes: [["Kourouma a transformé le français au contact du malinké.", "-", 2]] },
          { nota: "culturas", p: 3, partes: [["L'Aventure ambiguë raconte un conflit de cultures.", "-", 3]] } ], seg: [
        { fr: "Une si longue lettre est un roman épistolaire de Mariama Bâ.", p: 1 }, { fr: "Kourouma a transformé le français au contact du malinké.", p: 2 }, { fr: "L'Aventure ambiguë raconte un conflit de cultures.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "La literatura africana es…", o: ["oral y escrita", "solo oral"], a: 0, es: true,
        bien: "¡Sí! Y muy premiada.", mal: "También escrita.",
        seg: [ { es: "Pausa. Oral y escrita." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["L'Enfant noir", "L'Aventure ambiguë", "Kourouma", "Une si longue lettre", "la colonisation", "les indépendances"], seg: [
        { es: "Autores y temas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Una lista de lecturas", img: "bg-biblioteca", yo: "camila",
    escena: "Madame Sofia prepara con Camila una lista de novelas africanas.",
    pj: PJ,
    lineas: [
      ["sofia", "On commence par L'Enfant noir de Camara Laye, en 1953 : une enfance en Guinée, la tradition. Puis L'Aventure ambiguë, de Cheikh Hamidou Kane : un jeune Sénégalais entre l'école occidentale et la tradition.", "Empezamos con El niño negro de Camara Laye, de 1953: una infancia en Guinea, la tradición. Luego La aventura ambigua, de Cheikh Hamidou Kane: un joven senegalés entre la escuela occidental y la tradición."],
      ["camila", "Donc L'Aventure ambiguë raconte un conflit de cultures. — Oui. Ensuite, Kourouma, de Côte d'Ivoire : Les Soleils des indépendances. Kourouma a transformé le français au contact du malinké.", "Entonces La aventura ambigua cuenta un conflicto de culturas. — Sí. Después, Kourouma, de Costa de Marfil: Los soles de las independencias. Kourouma transformó el francés en contacto con el malinké."],
      ["sofia", "Et Une si longue lettre est un roman épistolaire de Mariama Bâ, en 1979 : une femme écrit à son amie sur la polygamie et la condition féminine.", "Y Mi carta más larga es una novela epistolar de Mariama Bâ, de 1979: una mujer escribe a su amiga sobre la poligamia y la condición femenina."],
      ["camila", "Je croyais que la littérature africaine était surtout orale ! — Elle est orale et écrite, et très primée : Mabanckou, Mbougar Sarr… La littérature africaine francophone est l'une des plus dynamiques aujourd'hui.", "¡Creía que la literatura africana era sobre todo oral! — Es oral y escrita, y muy premiada: Mabanckou, Mbougar Sarr… La literatura africana francófona es una de las más dinámicas hoy."]
    ],
    fijate: "Fíjate: L'Enfant noir (1953), une enfance en Guinée, l'école occidentale et la tradition, un conflit de cultures, Les Soleils des indépendances, au contact du malinké, un roman épistolaire, la polygamie, la condition féminine, orale et écrite, l'une des plus dynamiques."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y temas",
      idea: "La literatura africana en francés es riquísima. Camara Laye (Guinea) cuenta su infancia y la tradición en L'Enfant noir (1953). Cheikh Hamidou Kane (Senegal) narra el choque entre escuela occidental y tradición en L'Aventure ambiguë (1961). Ahmadou Kourouma (Costa de Marfil) «malinkiza» el francés en Les Soleils des indépendances (1968) y cuenta la vida de un niño soldado en Allah n'est pas obligé (Renaudot 2000). Mariama Bâ (Senegal) escribe una novela epistolar sobre la condición femenina y la poligamia, Une si longue lettre (1979). Hoy: Alain Mabanckou (Congo, Renaudot 2006), Mohamed Mbougar Sarr (Goncourt 2021). Temas: colonización, independencias, tradición y modernidad, mujeres. Es una literatura oral y escrita.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "¿Tema africano?"], [
        ["Mariama Bâ", "la autora de 1979", "auteurs"],
        ["un enfant soldat", "el héroe de Allah n'est pas obligé (Kourouma)", "auteurs"],
        ["Mohamed Mbougar Sarr", "el Goncourt 2021", "auteurs"],
        ["L'Enfant noir de Camara Laye. · noir", "El niño negro, de Camara Laye.", "auteurs"],
        ["Les Soleils des indépendances d'Ahmadou Kourouma. · indépendances", "Los soles de las independencias, de Kourouma.", "Sí"],
        ["Camara Laye = Guinea · Kourouma = Costa de Marfil · Mariama Bâ = Senegal · Alain Mabanckou = Congo", "autores y países", "resumen"],
        ["la colonisation · les indépendances · tradition et modernité · la condition féminine", "temas", "Sí"],
        ["la chevalerie médiévale · la cour de Versailles · la mine du Nord · le Nouveau Roman", "temas ajenos", "No"],
        ["Une si longue lettre est un roman épistolaire de Mariama Bâ. · épistolaire", "Mi carta más larga es una novela epistolar de Mariama Bâ.", "Sí"],
        ["Le roman raconte un conflit de cultures", "La novela cuenta un conflicto de culturas", "Sí"],
        ["orale et écrite", "cómo es la literatura africana", "Sí"],
        ["La littérature africaine francophone est l'une des plus dynamiques aujourd'hui.", "La literatura africana francófona es una de las más dinámicas hoy.", "Sí"]
      ]],
      ej: [["Une si longue lettre est un roman épistolaire de Mariama Bâ.", "Mi carta más larga es una novela epistolar de Mariama Bâ."], ["Kourouma a transformé le français au contact du malinké.", "Kourouma transformó el francés en contacto con el malinké."], ["Camara Laye raconte son enfance en Guinée.", "Camara Laye cuenta su infancia en Guinea."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["La littérature africaine est seulement orale.", "Elle est orale et écrite, et très primée.", "Tradición oral + escrita."], ["Une si longue lettre est une pièce de théâtre.", "Une si longue lettre est un roman épistolaire.", "Forma."], ["Kourouma est sénégalais.", "Kourouma est ivoirien.", "Costa de Marfil."]] }
  ],
  ejemplos: [
    { sit: "Alain Mabanckou es de…", resp: "Congo", pasos: ["Renaudot 2006."], porque: "Países." },
    { sit: "¿La corte de Versalles es tema africano?", resp: "No", pasos: ["Siglo XVII francés."], porque: "Temas." },
    { sit: "L'Aventure ambiguë es de…", resp: "Cheikh Hamidou Kane (1961)", pasos: ["Senegal."], porque: "Obras." }
  ],
  comprueba: [
    { q: "L'Enfant noir es de…", o: ["1953", "1979"], a: 0, b: "gr", porque: "1979 = Bâ." },
    { q: "Allah n'est pas obligé recibió…", o: ["el Renaudot 2000", "el Goncourt 1987"], a: 0, b: "gr", porque: "Kourouma." },
    { q: "Une si longue lettre trata de…", o: ["la condición femenina y la poligamia", "una guerra medieval"], a: 0, b: "gr", porque: "Mariama Bâ." }
  ],
  practica: [
    { fase: "guiada", c: ["b6af-themes"], k: "sort", ask: "¿Tema de la literatura africana o no?", q: "Clasifica.", cats: ["Sí", "No"], items: [["la colonisation", 0], ["les indépendances", 0], ["tradition et modernité", 0], ["la condition féminine", 0], ["la chevalerie médiévale", 1], ["la cour de Versailles", 1], ["la mine du Nord", 1], ["le Nouveau Roman", 1]], pista: "Historia del continente.", why: "Temas." },
    { fase: "guiada", c: ["b6af-auteurs"], k: "choice", ask: "La autora de 1979:", q: "Elige.", o: ["Mariama Bâ", "Camara Laye"], a: 0, pista: "Novela epistolar.", why: "Bâ." },
    { fase: "guiada", c: ["b6af-auteurs"], k: "fill", ask: "El niño…", q: "L'Enfant ___ de Camara Laye.", acc: ["noir"], pista: "negro.", why: "<b>noir</b>." },
    { fase: "indep", c: ["b6af-auteurs"], k: "fill", ask: "Los soles de las…", q: "Les Soleils des ___ d'Ahmadou Kourouma.", acc: ["indépendances"], why: "<b>indépendances</b>." },
    { fase: "indep", c: ["b6af-auteurs"], k: "match", ask: "Une cada autor con su país.", q: "Autor → país", pairs: [["Camara Laye", "Guinea"], ["Kourouma", "Costa de Marfil"], ["Mariama Bâ", "Senegal"], ["Alain Mabanckou", "Congo"]], why: "Países." },
    { fase: "indep", c: ["b6af-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Une si longue lettre est un roman [théâtral] de Mariama Bâ .", fix: "épistolaire", why: "<b>épistolaire</b>." },
    { fase: "aplica", c: ["b6af-auteurs"], k: "choice", ask: "El héroe de Allah n'est pas obligé:", q: "Elige.", o: ["un enfant soldat", "un vieux roi"], a: 0, why: "Niño soldado." },
    { fase: "aplica", c: ["b6af-auteurs"], k: "choice", ask: "El Goncourt 2021:", q: "Elige.", o: ["Mohamed Mbougar Sarr", "Ahmadou Kourouma"], a: 0, why: "Mbougar Sarr." },
    { fase: "aplica", c: ["b6af-themes"], k: "spot", ask: "Encuentra el error.", s: "La littérature africaine francophone est [seulement orale] .", fix: "orale et écrite", why: "<b>orale et écrite</b>." },
    { fase: "dominio", c: ["b6af-auteurs"], k: "order", ask: "Ordena la frase.", tokens: ["Le roman", "raconte", "un conflit de cultures"], why: "<b>Le roman raconte un conflit de cultures</b>" },
    { fase: "dominio", c: ["b6af-auteurs"], k: "choice", ask: "Kourouma transformó el francés al contacto del…", q: "Elige.", o: ["malinké", "créole"], a: 0, why: "Malinké." },
    { fase: "dominio", c: ["b6af-auteurs", "b6af-themes"], k: "listen", say: "La littérature africaine francophone est l'une des plus dynamiques aujourd'hui.", acc: ["La littérature africaine francophone est l'une des plus dynamiques aujourd'hui."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La littérature africaine francophone est l'une des plus dynamiques aujourd'hui.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Camara Laye", "Cheikh Hamidou Kane", "Ahmadou Kourouma", "Kourouma", "Mariama Bâ", "Alain Mabanckou", "Mabanckou", "Mohamed Mbougar Sarr", "Mbougar Sarr", "L'Enfant noir", "L'Aventure ambiguë", "Les Soleils des indépendances", "Allah n'est pas obligé", "Une si longue lettre", "Guinée", "Sénégal", "Côte d'Ivoire", "Congo", "Afrique", "Versailles", "Renaudot", "Goncourt"], previo: [] }
};

/* ── 65. Littératures du Maghreb ── */
E["lit-maghreb"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Littératures du Maghreb",
  objetivo: {
    que: "Vas a conocer la literatura magrebí en francés: Argelia, Marruecos y Túnez, de la independencia a hoy.",
    corto: "Kateb Yacine voyait le français comme un butin de guerre. · Meursault, contre-enquête donne un nom à l'Arabe de Camus. · Assia Djebar donne la parole aux femmes algériennes.",
    podras: ["Presentar a los fundadores: Driss Chraïbi (Le Passé simple, 1954), Kateb Yacine (Nedjma, 1956: el francés como «botín de guerra»), Mohammed Dib, Albert Memmi (La Statue de sel).", "Asociar autores posteriores: Assia Djebar (L'Amour, la fantasia: la memoria de las mujeres argelinas), Tahar Ben Jelloun (La Nuit sacrée, Goncourt 1987), Leïla Slimani, Kamel Daoud (Meursault, contre-enquête; Goncourt 2024 con Houris).", "Explicar los temas: identidad, colonización, mujeres, bilingüismo."],
    iconos: ["ic2/mundo", "ic2/libro", "ic2/bandera"],
    previos: ["Camus novelista (lección 47), la literatura contemporánea (lección 55) y el Magreb (C1.2, lección 60)."],
    capacidad: "Ahora presentas la literatura magrebí francófona."
  },
  requiere: R("b6cr-etranger", "b6ct-auteurs"), recupera: ["b6cr-etranger"],
  conceptos: {
    "b6mg-auteurs": { n: "literatura magrebí en francés, nacida en torno a la independencia; Argelia: Kateb Yacine (Nedjma, 1956; el francés como un butin de guerre), Mohammed Dib, Assia Djebar (L'Amour, la fantasia: da la palabra a las mujeres argelinas), Kamel Daoud (Meursault, contre-enquête responde a Camus, no a Voltaire, y da un nombre al árabe de L'Étranger; Goncourt 2024 con Houris); Marruecos: Driss Chraïbi (Le Passé simple, 1954: novela de rebelión contra el padre, título irónico, no un libro de gramática), Tahar Ben Jelloun (La Nuit sacrée, Goncourt 1987), Leïla Slimani, Abdellatif Laâbi; Túnez: Albert Memmi (La Statue de sel)", b: "gr" },
    "b6mg-themes": { n: "temas: l'identité, la colonisation, les femmes, le bilinguisme; donner la parole aux femmes; «Pour Kateb Yacine, la langue française était un butin de guerre»", b: "gr" }
  },
  video: {
    titulo: "Literaturas del Magreb", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "un butin de guerre", seg: [
        { es: "Hola. Escribir en la lengua del colonizador." } ] },
      { v: "frase", filas: [
          { nota: "Kateb Yacine", p: 1, partes: [["Kateb Yacine voyait le français comme un butin de guerre.", "-", 1]] },
          { nota: "Daoud", p: 2, partes: [["Meursault, contre-enquête donne un nom à l'Arabe de Camus.", "-", 2]] },
          { nota: "Djebar", p: 3, partes: [["Assia Djebar donne la parole aux femmes algériennes.", "-", 3]] } ], seg: [
        { fr: "Kateb Yacine voyait le français comme un butin de guerre.", p: 1 }, { fr: "Meursault, contre-enquête donne un nom à l'Arabe de Camus.", p: 2 }, { fr: "Assia Djebar donne la parole aux femmes algériennes.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Le Passé simple (1954) es…", o: ["una novela de Driss Chraïbi", "un libro de gramática"], a: 0, es: true,
        bien: "¡Sí! Título irónico.", mal: "Es una novela.",
        seg: [ { es: "Pausa. Una novela." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Nedjma", "Le Passé simple", "L'Amour, la fantasia", "La Nuit sacrée", "Meursault, contre-enquête", "le bilinguisme"], seg: [
        { es: "Autores y temas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Seminario sobre el Magreb", img: "bg-universidad", yo: "camila",
    escena: "En un seminario, Madame Sofia presenta la literatura magrebí en francés.",
    pj: PJ,
    lineas: [
      ["sofia", "Cette littérature naît autour des indépendances. En 1956, Kateb Yacine publie Nedjma. Pour Kateb Yacine, la langue française était un butin de guerre : une langue prise au colonisateur.", "Esta literatura nace en torno a las independencias. En 1956, Kateb Yacine publica Nedjma. Para Kateb Yacine, la lengua francesa era un botín de guerra: una lengua tomada al colonizador."],
      ["camila", "Et au Maroc ? — Driss Chraïbi, Le Passé simple, en 1954 : ce n'est pas un livre de grammaire, c'est une révolte contre le père ! Et Tahar Ben Jelloun : La Nuit sacrée a reçu le Goncourt en 1987.", "¿Y en Marruecos? — Driss Chraïbi, Le Passé simple, de 1954: no es un libro de gramática, ¡es una rebelión contra el padre! Y Tahar Ben Jelloun: La noche sagrada recibió el Goncourt en 1987."],
      ["sofia", "Assia Djebar, dans L'Amour, la fantasia, donne la parole aux femmes algériennes. Elle écrit la mémoire des femmes.", "Assia Djebar, en El amor, la fantasía, da la palabra a las mujeres argelinas. Escribe la memoria de las mujeres."],
      ["camila", "Et Kamel Daoud répond à Camus ! — Oui : Meursault, contre-enquête donne un nom à l'Arabe de Camus. Et Daoud a reçu le Goncourt en 2024 avec Houris.", "¡Y Kamel Daoud responde a Camus! — Sí: Meursault, contra-investigación da un nombre al árabe de Camus. Y Daoud recibió el Goncourt en 2024 con Huríes."]
    ],
    fijate: "Fíjate: autour des indépendances, Nedjma (1956), un butin de guerre, une langue prise au colonisateur, Le Passé simple (1954), une révolte contre le père, La Nuit sacrée (Goncourt 1987), donner la parole aux femmes, répondre à Camus, donner un nom à l'Arabe, Houris (Goncourt 2024)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Autores y temas",
      idea: "La literatura magrebí en francés nace en torno a las independencias. En Argelia, Kateb Yacine (Nedjma, 1956) ve el francés como un «botín de guerra»; Mohammed Dib describe el pueblo argelino; Assia Djebar (L'Amour, la fantasia) da la palabra a las mujeres; hoy Kamel Daoud responde a Camus con Meursault, contre-enquête y gana el Goncourt 2024 con Houris. En Marruecos, Driss Chraïbi (Le Passé simple, 1954) se rebela contra el padre; Tahar Ben Jelloun gana el Goncourt 1987 con La Nuit sacrée; hoy, Leïla Slimani. En Túnez, Albert Memmi (La Statue de sel). Temas: identidad, colonización, mujeres, bilingüismo.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "País"], [
        ["Kateb Yacine", "el autor de 1956 (Nedjma)", "Algérie"],
        ["L'Étranger de Camus", "a qué responde Kamel Daoud", "Algérie"],
        ["un butin de guerre", "la metáfora de Kateb Yacine", "Algérie"],
        ["La Nuit sacrée a reçu le Goncourt en 1987. · sacrée", "La noche sagrada recibió el Goncourt en 1987.", "Maroc"],
        ["Le Passé simple est un roman de Driss Chraïbi. · simple", "Le Passé simple es una novela de Driss Chraïbi.", "Maroc"],
        ["Kateb Yacine = Nedjma · Driss Chraïbi = Le Passé simple · Assia Djebar = L'Amour, la fantasia · Kamel Daoud = Meursault, contre-enquête", "autores y obras", "resumen"],
        ["Kateb Yacine · Assia Djebar · Kamel Daoud · Mohammed Dib", "Argelia", "Algérie"],
        ["Driss Chraïbi · Tahar Ben Jelloun · Leïla Slimani · Abdellatif Laâbi", "Marruecos", "Maroc"],
        ["Dans Meursault, contre-enquête, Kamel Daoud répond à Camus. · Camus", "En Meursault, contra-investigación, Daoud responde a Camus.", "Algérie"],
        ["Elle donne la parole aux femmes", "Da la palabra a las mujeres", "Algérie"],
        ["l'identité · la colonisation · le bilinguisme", "temas", "resumen"],
        ["Pour Kateb Yacine, la langue française était un butin de guerre.", "Para Kateb Yacine, el francés era un botín de guerra.", "Algérie"]
      ]],
      ej: [["Kateb Yacine voyait le français comme un butin de guerre.", "Kateb Yacine veía el francés como un botín de guerra."], ["Meursault, contre-enquête donne un nom à l'Arabe de Camus.", "Meursault, contra-investigación da un nombre al árabe de Camus."], ["Tahar Ben Jelloun est un écrivain marocain.", "Tahar Ben Jelloun es un escritor marroquí."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Le Passé simple = un livre de grammaire", "Le Passé simple = un roman de Driss Chraïbi (1954)", "Título irónico."], ["Kamel Daoud répond à Voltaire.", "Kamel Daoud répond à Camus.", "Meursault."], ["Tahar Ben Jelloun est algérien.", "Tahar Ben Jelloun est marocain.", "Países."]] }
  ],
  ejemplos: [
    { sit: "Mohammed Dib es de…", resp: "Algérie", pasos: ["Argelino."], porque: "Países." },
    { sit: "Leïla Slimani es de…", resp: "Maroc", pasos: ["Rabat."], porque: "Países." },
    { sit: "La Statue de sel es de…", resp: "Albert Memmi (Túnez)", pasos: ["Túnez."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Le Passé simple es de…", o: ["1954", "1987"], a: 0, b: "gr", porque: "1987 = La Nuit sacrée." },
    { q: "Kamel Daoud ganó el Goncourt en…", o: ["2024", "1987"], a: 0, b: "gr", porque: "Houris." },
    { q: "Esta literatura nace en torno a…", o: ["las independencias", "la Revolución francesa"], a: 0, b: "gr", porque: "Años 50." }
  ],
  practica: [
    { fase: "guiada", c: ["b6mg-auteurs"], k: "sort", ask: "¿Argelia o Marruecos?", q: "Clasifica.", cats: ["Algérie", "Maroc"], items: [["Kateb Yacine", 0], ["Assia Djebar", 0], ["Kamel Daoud", 0], ["Mohammed Dib", 0], ["Driss Chraïbi", 1], ["Tahar Ben Jelloun", 1], ["Leïla Slimani", 1], ["Abdellatif Laâbi", 1]], pista: "Argel o Rabat.", why: "Países." },
    { fase: "guiada", c: ["b6mg-auteurs"], k: "choice", ask: "El autor de Nedjma (1956):", q: "Elige.", o: ["Kateb Yacine", "Driss Chraïbi"], a: 0, pista: "Botín de guerra.", why: "Kateb Yacine." },
    { fase: "guiada", c: ["b6mg-auteurs"], k: "fill", ask: "La noche sagrada.", q: "La Nuit ___ a reçu le Goncourt en 1987.", acc: ["sacrée"], pista: "sagrada.", why: "<b>sacrée</b>." },
    { fase: "indep", c: ["b6mg-auteurs"], k: "fill", ask: "El pasado simple.", q: "Le Passé ___ est un roman de Driss Chraïbi.", acc: ["simple"], why: "<b>simple</b>." },
    { fase: "indep", c: ["b6mg-auteurs"], k: "match", ask: "Une cada autor con su obra.", q: "Autor → obra", pairs: [["Kateb Yacine", "Nedjma"], ["Driss Chraïbi", "Le Passé simple"], ["Assia Djebar", "L'Amour, la fantasia"], ["Kamel Daoud", "Meursault, contre-enquête"]], why: "Obras." },
    { fase: "indep", c: ["b6mg-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Dans Meursault , contre-enquête , Kamel Daoud répond à [Voltaire] .", fix: "Camus", why: "<b>Camus</b>." },
    { fase: "aplica", c: ["b6mg-auteurs"], k: "choice", ask: "Kamel Daoud responde a…", q: "Elige.", o: ["L'Étranger de Camus", "Candide de Voltaire"], a: 0, why: "Meursault." },
    { fase: "aplica", c: ["b6mg-themes"], k: "choice", ask: "La metáfora de Kateb Yacine:", q: "Elige.", o: ["un butin de guerre", "une prison dorée"], a: 0, why: "Botín." },
    { fase: "aplica", c: ["b6mg-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Le Passé simple de Driss Chraïbi est [un livre de grammaire] .", fix: "un roman", why: "Es <b>un roman</b>." },
    { fase: "dominio", c: ["b6mg-themes"], k: "order", ask: "Ordena la frase.", tokens: ["Elle donne", "la parole", "aux femmes"], why: "<b>Elle donne la parole aux femmes</b>" },
    { fase: "dominio", c: ["b6mg-auteurs"], k: "choice", ask: "Tahar Ben Jelloun es…", q: "Elige.", o: ["marocain", "algérien"], a: 0, why: "Marruecos." },
    { fase: "dominio", c: ["b6mg-themes", "b6mg-auteurs"], k: "listen", say: "Pour Kateb Yacine, la langue française était un butin de guerre.", acc: ["Pour Kateb Yacine, la langue française était un butin de guerre."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pour Kateb Yacine, la langue française était un butin de guerre.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Kateb Yacine", "Nedjma", "Mohammed Dib", "Albert Memmi", "La Statue de sel", "Assia Djebar", "L'Amour, la fantasia", "Tahar Ben Jelloun", "La Nuit sacrée", "Leïla Slimani", "Kamel Daoud", "Houris", "Meursault", "Meursault, contre-enquête", "Driss Chraïbi", "Le Passé simple", "Abdellatif Laâbi", "Camus", "L'Étranger", "Voltaire", "Candide", "Algérie", "Maroc", "Tunisie", "Maghreb", "Goncourt"], previo: [] }
};

/* ── 66. Littératures des Antilles : antillanité et créolité ── */
E["lit-antilles"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Littératures des Antilles : antillanité et créolité",
  objetivo: {
    que: "Vas a seguir la evolución de las ideas antillanas: de la negritud a la antillanidad y a la criollidad.",
    corto: "Chamoiseau a reçu le prix Goncourt pour Texaco. · Glissant pense l'identité comme un rhizome. · Maryse Condé est née en Guadeloupe.",
    podras: ["Distinguir tres movimientos sucesivos: la négritude (Césaire), l'antillanité (Glissant) y la créolité (Chamoiseau, Bernabé, Confiant: Éloge de la créolité, 1989).", "Explicar las ideas de Édouard Glissant: la identidad-rizoma, la Relation y el Tout-Monde (Renaudot 1958).", "Asociar obras: Texaco (Chamoiseau, Goncourt 1992), Ségou y Moi, Tituba sorcière (Maryse Condé, Nobel alternativo 2018), Simone Schwarz-Bart."],
    iconos: ["ic2/mundo", "ic2/flor", "ic2/libro"],
    previos: ["La negritud (lección 13) y las Antillas y la criollidad (C1.2, lección 12)."],
    capacidad: "Ahora explicas la antillanidad y la criollidad."
  },
  requiere: R("b6ng-histoire", "b6fc-negritude"), recupera: ["b6fc-negritude"],
  conceptos: {
    "b6at-mouvements": { n: "evolución de las ideas (movimientos distintos y sucesivos, no sinónimos): négritude = Césaire; antillanité = Glissant; créolité = Chamoiseau, Bernabé, Confiant (Éloge de la créolité, 1989: identidad mezclada y abierta); Tout-Monde = Glissant (más tarde); Édouard Glissant (Renaudot 1958) piensa la identidad como un rhizome: las culturas del mundo entran en relación como un rizoma", b: "gr" },
    "b6at-auteurs": { n: "autores antillanos: Patrick Chamoiseau (Texaco, Goncourt 1992, no Ségou: historia de un barrio de Fort-de-France; defiende la créolité), Édouard Glissant, Maryse Condé (nacida en Guadeloupe; Ségou, historia africana; Moi, Tituba sorcière; Nobel alternativo 2018), Simone Schwarz-Bart; frente a autores africanos: Camara Laye, Mariama Bâ, Ahmadou Kourouma, Alain Mabanckou", b: "gr" }
  },
  video: {
    titulo: "Literaturas de las Antillas", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/mundo", grande: "la créolité", seg: [
        { es: "Hola. Identidades mezcladas y abiertas." } ] },
      { v: "frase", filas: [
          { nota: "Goncourt", p: 1, partes: [["Chamoiseau a reçu le prix Goncourt pour Texaco.", "-", 1]] },
          { nota: "rizoma", p: 2, partes: [["Glissant pense l'identité comme un rhizome.", "-", 2]] },
          { nota: "Guadalupe", p: 3, partes: [["Maryse Condé est née en Guadeloupe.", "-", 3]] } ], seg: [
        { fr: "Chamoiseau a reçu le prix Goncourt pour Texaco.", p: 1 }, { fr: "Glissant pense l'identité comme un rhizome.", p: 2 }, { fr: "Maryse Condé est née en Guadeloupe.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Négritude y créolité son…", o: ["movimientos distintos y sucesivos", "la misma cosa"], a: 0, es: true,
        bien: "¡Sí! Evolución de ideas.", mal: "Son distintos.",
        seg: [ { es: "Pausa. Distintos." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["la négritude", "l'antillanité", "la créolité", "le Tout-Monde", "Texaco", "Maryse Condé"], seg: [
        { es: "Tres movimientos.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Un viaje a Martinica", img: "bg-playa", yo: "camila",
    escena: "En Fort-de-France, Camila habla con Hugo de la literatura antillana.",
    pj: PJ,
    lineas: [
      ["hugo", "On est à Fort-de-France ! Texaco, de Patrick Chamoiseau, raconte l'histoire d'un quartier d'ici. Chamoiseau a reçu le prix Goncourt pour Texaco en 1992.", "¡Estamos en Fort-de-France! Texaco, de Patrick Chamoiseau, cuenta la historia de un barrio de aquí. Chamoiseau recibió el Goncourt por Texaco en 1992."],
      ["camila", "Chamoiseau défend la créolité, non ? C'est comme la négritude de Césaire ? — Non, ce sont des mouvements successifs : négritude, puis antillanité avec Glissant, puis créolité avec l'Éloge de la créolité, en 1989.", "Chamoiseau defiende la criollidad, ¿no? ¿Es como la negritud de Césaire? — No, son movimientos sucesivos: negritud, luego antillanidad con Glissant, luego criollidad con el Elogio de la criollidad, en 1989."],
      ["hugo", "Glissant pense l'identité comme un rhizome : pas une racine unique, mais un réseau. Pour Glissant, les cultures du monde entrent en relation comme un rhizome. C'est le Tout-Monde.", "Glissant piensa la identidad como un rizoma: no una raíz única, sino una red. Para Glissant, las culturas del mundo entran en relación como un rizoma. Es el Todo-Mundo."],
      ["camila", "Et Maryse Condé ? — Elle est née en Guadeloupe. Elle a écrit Ségou, une saga africaine, et Moi, Tituba sorcière. Elle a reçu le Nobel alternatif en 2018.", "¿Y Maryse Condé? — Nació en Guadalupe. Escribió Segú, una saga africana, y Yo, Tituba, la bruja negra de Salem. Recibió el Nobel alternativo en 2018."]
    ],
    fijate: "Fíjate: Fort-de-France, l'histoire d'un quartier, le prix Goncourt pour Texaco (1992), défendre la créolité, des mouvements successifs, l'antillanité, l'Éloge de la créolité (1989), l'identité comme un rhizome, une racine unique, un réseau, le Tout-Monde, née en Guadeloupe, le Nobel alternatif (2018)."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "De la negritud a la criollidad",
      idea: "Tras la negritud de Césaire, los escritores antillanos proponen nuevas visiones. Édouard Glissant (Renaudot 1958) defiende la antillanidad y piensa la identidad como un rizoma: no una raíz única, sino una red de relaciones (la Relation, el Tout-Monde). En 1989, Chamoiseau, Bernabé y Confiant publican el Éloge de la créolité: una identidad mezclada y abierta. Chamoiseau gana el Goncourt 1992 con Texaco, historia de un barrio de Fort-de-France. Maryse Condé, nacida en Guadalupe, escribe Ségou y Moi, Tituba sorcière (Nobel alternativo 2018). También Simone Schwarz-Bart. Négritude, antillanité y créolité son movimientos distintos y sucesivos.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "Origen"], [
        ["Texaco", "la novela del Goncourt 1992", "Antilles"],
        ["le Tout-Monde", "un concepto de Glissant", "Antilles"],
        ["la Guadeloupe", "dónde nació Maryse Condé", "Antilles"],
        ["Éloge de la créolité (1989). · créolité", "Elogio de la criollidad (1989).", "Antilles"],
        ["Pour Glissant, l'identité est un rhizome. · rhizome", "Para Glissant, la identidad es un rizoma.", "Antilles"],
        ["négritude = Césaire · antillanité = Glissant · créolité = Chamoiseau, Bernabé, Confiant · Tout-Monde = Glissant (más tarde)", "movimientos", "resumen"],
        ["Patrick Chamoiseau · Édouard Glissant · Maryse Condé · Simone Schwarz-Bart", "autores antillanos", "Antilles"],
        ["Camara Laye · Mariama Bâ · Ahmadou Kourouma · Alain Mabanckou", "autores africanos", "Afrique"],
        ["Patrick Chamoiseau a reçu le prix Goncourt pour Texaco en 1992. · Texaco", "Chamoiseau recibió el Goncourt por Texaco en 1992.", "Antilles"],
        ["Chamoiseau défend la créolité", "Chamoiseau defiende la criollidad", "Antilles"],
        ["des mouvements successifs", "la relación entre negritud y criollidad", "Antilles"],
        ["Pour Glissant, les cultures du monde entrent en relation comme un rhizome.", "Para Glissant, las culturas del mundo se relacionan como un rizoma.", "Antilles"]
      ]],
      ej: [["Chamoiseau a reçu le prix Goncourt pour Texaco.", "Chamoiseau recibió el Goncourt por Texaco."], ["Glissant pense l'identité comme un réseau.", "Glissant piensa la identidad como una red."], ["Maryse Condé est née en Guadeloupe.", "Maryse Condé nació en Guadalupe."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["créolité = négritude", "ce sont des mouvements distincts et successifs", "Evolución de ideas."], ["Chamoiseau a reçu le Goncourt pour Ségou.", "Chamoiseau a reçu le Goncourt pour Texaco ; Ségou est de Maryse Condé.", "No confundir."], ["le rhizome = une racine unique", "le rhizome = un réseau de relations", "Glissant."]] }
  ],
  ejemplos: [
    { sit: "Simone Schwarz-Bart es de…", resp: "Antilles", pasos: ["Guadalupe."], porque: "Origen." },
    { sit: "Mariama Bâ es de…", resp: "Afrique", pasos: ["Senegal."], porque: "Origen." },
    { sit: "Moi, Tituba sorcière es de…", resp: "Maryse Condé", pasos: ["Salem."], porque: "Obras." }
  ],
  comprueba: [
    { q: "Éloge de la créolité es de…", o: ["1989", "1958"], a: 0, b: "gr", porque: "1958 = Renaudot de Glissant." },
    { q: "Texaco cuenta la historia de…", o: ["un barrio de Fort-de-France", "una familia de París"], a: 0, b: "gr", porque: "Martinica." },
    { q: "Maryse Condé recibió en 2018…", o: ["el Nobel alternativo", "el Goncourt"], a: 0, b: "gr", porque: "Premio." }
  ],
  practica: [
    { fase: "guiada", c: ["b6at-auteurs"], k: "sort", ask: "¿Antillas o África?", q: "Clasifica.", cats: ["Antilles", "Afrique"], items: [["Patrick Chamoiseau", 0], ["Édouard Glissant", 0], ["Maryse Condé", 0], ["Simone Schwarz-Bart", 0], ["Camara Laye", 1], ["Mariama Bâ", 1], ["Ahmadou Kourouma", 1], ["Alain Mabanckou", 1]], pista: "¿Islas o continente?", why: "Origen." },
    { fase: "guiada", c: ["b6at-auteurs"], k: "choice", ask: "La novela del Goncourt 1992:", q: "Elige.", o: ["Texaco", "Ségou"], a: 0, pista: "Chamoiseau.", why: "Texaco." },
    { fase: "guiada", c: ["b6at-mouvements"], k: "fill", ask: "Elogio de la criollidad.", q: "Éloge de la ___ (1989).", acc: ["créolité"], pista: "cré…", why: "<b>créolité</b>." },
    { fase: "indep", c: ["b6at-mouvements"], k: "fill", ask: "Un rizoma.", q: "Pour Glissant, l'identité est un ___ .", acc: ["rhizome"], why: "<b>rhizome</b>." },
    { fase: "indep", c: ["b6at-mouvements"], k: "match", ask: "Une cada movimiento con su autor.", q: "Movimiento → autor", pairs: [["négritude", "Césaire"], ["antillanité", "Glissant"], ["créolité", "Chamoiseau, Bernabé, Confiant"], ["Tout-Monde", "Glissant (más tarde)"]], why: "Movimientos." },
    { fase: "indep", c: ["b6at-auteurs"], k: "spot", ask: "Encuentra el error.", s: "Patrick Chamoiseau a reçu le prix Goncourt pour [Ségou] en 1992 .", fix: "Texaco", why: "<b>Texaco</b>." },
    { fase: "aplica", c: ["b6at-mouvements"], k: "choice", ask: "Un concepto de Glissant:", q: "Elige.", o: ["le Tout-Monde", "l'art pour l'art"], a: 0, why: "Tout-Monde." },
    { fase: "aplica", c: ["b6at-auteurs"], k: "choice", ask: "Dónde nació Maryse Condé:", q: "Elige.", o: ["la Guadeloupe", "le Sénégal"], a: 0, why: "Guadalupe." },
    { fase: "aplica", c: ["b6at-mouvements"], k: "spot", ask: "Encuentra el error.", s: "La négritude et la créolité sont [le même mouvement] .", fix: "des mouvements successifs", why: "Son <b>des mouvements successifs</b>." },
    { fase: "dominio", c: ["b6at-auteurs"], k: "order", ask: "Ordena la frase.", tokens: ["Chamoiseau", "défend", "la créolité"], why: "<b>Chamoiseau défend la créolité</b>" },
    { fase: "dominio", c: ["b6at-mouvements"], k: "choice", ask: "El rizoma de Glissant es…", q: "Elige.", o: ["un réseau de relations", "une racine unique"], a: 0, why: "Red." },
    { fase: "dominio", c: ["b6at-mouvements", "b6at-auteurs"], k: "listen", say: "Pour Glissant, les cultures du monde entrent en relation comme un rhizome.", acc: ["Pour Glissant, les cultures du monde entrent en relation comme un rhizome."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>Pour Glissant, les cultures du monde entrent en relation comme un rhizome.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Hugo", "Césaire", "Édouard Glissant", "Glissant", "Patrick Chamoiseau", "Chamoiseau", "Bernabé", "Confiant", "Maryse Condé", "Simone Schwarz-Bart", "Texaco", "Ségou", "Moi, Tituba sorcière", "Tituba", "Salem", "Éloge de la créolité", "Fort-de-France", "Guadeloupe", "Martinique", "Antilles", "Sénégal", "Camara Laye", "Mariama Bâ", "Ahmadou Kourouma", "Alain Mabanckou", "Goncourt", "Renaudot", "Nobel"], previo: [] }
};

/* ── 67. Lettres de Belgique et de Suisse romande ── */
E["lit-belgique-suisse"] = {
  v: 1, lang: "fr", nivel: "C1", estado: "piloto",
  titulo: "Lettres de Belgique et de Suisse romande",
  objetivo: {
    que: "Vas a descubrir que la literatura en francés no se limita a Francia: grandes autores de Bélgica y de Suiza romanda.",
    corto: "Amélie Nothomb publie un roman chaque automne. · Simenon et Hergé sont belges. · Joël Dicker est un romancier genevois.",
    podras: ["Presentar a los autores belgas: Maurice Maeterlinck (Nobel 1911), Henri Michaux (poeta), Georges Simenon (Maigret), Marguerite Yourcenar (nacida en Bruselas), Amélie Nothomb (Stupeur et tremblements) y el cómic (Hergé, Tintin).", "Presentar a los autores suizos: Jean-Jacques Rousseau (Ginebra), Blaise Cendrars (La Prose du Transsibérien, 1913), Charles-Ferdinand Ramuz (cantón de Vaud), Philippe Jaccottet, Joël Dicker (La Vérité sur l'affaire Harry Quebert).", "Evitar confusiones de nacionalidad (Hergé y Simenon eran belgas)."],
    iconos: ["ic2/bandera", "ic2/libros", "ic2/mundo"],
    previos: ["Rousseau (lección 31), Yourcenar (lección 49), el polar (lección 52) y Bélgica y Suiza (C1.2, lección 13)."],
    capacidad: "Has terminado el curso de Literatura: conoces la literatura en francés de Francia y del mundo."
  },
  requiere: R("b6po-heros", "b6yo-vie", "b6rs-oeuvres"), recupera: ["b6po-heros"],
  conceptos: {
    "b6bs-belgique": { n: "Bélgica: Maurice Maeterlinck (premio Nobel 1911), Henri Michaux (poeta belga), Georges Simenon (Maigret), Marguerite Yourcenar (nacida en Bruselas), Amélie Nothomb (Stupeur et tremblements: una joven belga en una empresa japonesa; publica una novela cada otoño), Hergé (creador de Tintin: dibujante belga, no francés ni suizo)", b: "gr" },
    "b6bs-suisse": { n: "Suiza romanda: Jean-Jacques Rousseau (Ginebra), Blaise Cendrars (La Prose du Transsibérien, 1913: poema-viaje), Charles-Ferdinand Ramuz (novelista del cantón de Vaud), Philippe Jaccottet (poeta), Joël Dicker (novelista ginebrino: La Vérité sur l'affaire Harry Quebert); la literatura francófona no se limita a Francia", b: "gr" }
  },
  video: {
    titulo: "Bélgica y Suiza", voz: "es-CO-SalomeNeural",
    escenas: [
      { v: "hola", img: "ic2/bandera", grande: "Belgique et Suisse", seg: [
        { es: "Hola. El francés más allá de Francia." } ] },
      { v: "frase", filas: [
          { nota: "Nothomb", p: 1, partes: [["Amélie Nothomb publie un roman chaque automne.", "-", 1]] },
          { nota: "belgas", p: 2, partes: [["Simenon et Hergé sont belges.", "-", 2]] },
          { nota: "Ginebra", p: 3, partes: [["Joël Dicker est un romancier genevois.", "-", 3]] } ], seg: [
        { fr: "Amélie Nothomb publie un roman chaque automne.", p: 1 }, { fr: "Simenon et Hergé sont belges.", p: 2 }, { fr: "Joël Dicker est un romancier genevois.", p: 3 } ] },
      { v: "pregunta", img: "m2d/pensativo", q: "Hergé, el creador de Tintín, era…", o: ["belga", "francés"], a: 0, es: true,
        bien: "¡Sí! Francofonía.", mal: "Era belga.",
        seg: [ { es: "Pausa. Belga." } ] },
      { v: "resumen", img: "m2d/celebrar", chips: ["Maeterlinck", "Hergé", "Amélie Nothomb", "Cendrars", "Ramuz", "Joël Dicker"], seg: [
        { es: "Dos literaturas vecinas.", p: 1 } ] }
    ]
  },
  contexto: {
    titulo: "Bruselas y Ginebra", img: "bg-cafe", yo: "camila",
    escena: "Camila, de regreso de un viaje por Bruselas y Ginebra, cuenta a Madame Sofia lo que descubrió.",
    pj: PJ,
    lineas: [
      ["camila", "À Bruxelles, j'ai vu le musée de la BD : Tintin ! Je croyais qu'Hergé était français. — Non, Simenon et Hergé sont belges. Et Maurice Maeterlinck a reçu le prix Nobel en 1911.", "En Bruselas vi el museo del cómic: ¡Tintín! Creía que Hergé era francés. — No, Simenon y Hergé son belgas. Y Maurice Maeterlinck recibió el Nobel en 1911."],
      ["sofia", "Et Amélie Nothomb, belge aussi : Amélie Nothomb publie un roman chaque automne. Dans Stupeur et tremblements, une jeune Belge travaille dans une entreprise japonaise.", "Y Amélie Nothomb, belga también: publica una novela cada otoño. En Estupor y temblores, una joven belga trabaja en una empresa japonesa."],
      ["camila", "À Genève, on m'a parlé de Rousseau et de Joël Dicker. — Oui, Joël Dicker est un romancier genevois : La Vérité sur l'affaire Harry Quebert. Et Cendrars a écrit La Prose du Transsibérien en 1913.", "En Ginebra me hablaron de Rousseau y de Joël Dicker. — Sí, Joël Dicker es un novelista ginebrino: La verdad sobre el caso Harry Quebert. Y Cendrars escribió La prosa del Transiberiano en 1913."],
      ["sofia", "N'oublie pas Ramuz, le romancier du canton de Vaud. La littérature francophone ne se limite pas à la France : la Belgique et la Suisse ont de grands écrivains.", "No olvides a Ramuz, el novelista del cantón de Vaud. La literatura francófona no se limita a Francia: Bélgica y Suiza tienen grandes escritores."]
    ],
    fijate: "Fíjate: le musée de la BD, Tintin, Simenon et Hergé sont belges, le prix Nobel en 1911, un roman chaque automne, une entreprise japonaise, un romancier genevois, La Prose du Transsibérien (1913), le canton de Vaud, ne se limite pas à la France."
  },
  ensena: [
    { id: "gr", tipo: "gram", titulo: "Dos literaturas vecinas",
      idea: "Bélgica ha dado a Maurice Maeterlinck (Nobel 1911), al poeta Henri Michaux, a Georges Simenon (Maigret), a Marguerite Yourcenar (nacida en Bruselas), a Amélie Nothomb (Stupeur et tremblements: una joven belga en una empresa japonesa; publica una novela cada otoño) y el cómic (Hergé, creador de Tintín). Suiza romanda: Jean-Jacques Rousseau (Ginebra), Blaise Cendrars (La Prose du Transsibérien, 1913, poema-viaje), Charles-Ferdinand Ramuz (novelista del cantón de Vaud), el poeta Philippe Jaccottet y Joël Dicker, novelista ginebrino (La Vérité sur l'affaire Harry Quebert). La literatura francófona no se limita a Francia.",
      intro: "Toca cada línea.",
      tabla: [["Francés", "Español", "País"], [
        ["la Belgique", "el país de Tintín", "Belgique"],
        ["Blaise Cendrars", "el autor del poema-viaje de 1913", "Suisse"],
        ["Amélie Nothomb", "la novelista de Stupeur et tremblements", "Belgique"],
        ["Maurice Maeterlinck a reçu le prix Nobel en 1911. · Maeterlinck", "Maeterlinck recibió el Nobel en 1911.", "Belgique"],
        ["La Vérité sur l'affaire Harry Quebert de Joël Dicker. · Quebert", "La verdad sobre el caso Harry Quebert, de Joël Dicker.", "Suisse"],
        ["Henri Michaux = poeta belga · Charles-Ferdinand Ramuz = novelista del cantón de Vaud · Amélie Nothomb = Stupeur et tremblements · Joël Dicker = La Vérité sur l'affaire Harry Quebert", "autores", "resumen"],
        ["Simenon · Hergé · Maeterlinck · Nothomb", "Bélgica", "Belgique"],
        ["Ramuz · Cendrars · Jaccottet · Dicker", "Suiza", "Suisse"],
        ["Le créateur de Tintin, Hergé, était un dessinateur belge. · belge", "El creador de Tintín, Hergé, era un dibujante belga.", "Belgique"],
        ["Simenon était un écrivain belge", "Simenon era un escritor belga", "Belgique"],
        ["Rousseau, né à Genève", "el gran clásico suizo", "Suisse"],
        ["La littérature francophone ne se limite pas à la France : la Belgique et la Suisse ont de grands écrivains.", "La literatura francófona no se limita a Francia: Bélgica y Suiza tienen grandes escritores.", "resumen"]
      ]],
      ej: [["Amélie Nothomb publie un roman chaque automne.", "Amélie Nothomb publica una novela cada otoño."], ["Simenon et Hergé sont belges.", "Simenon y Hergé son belgas."], ["Joël Dicker est un romancier genevois.", "Joël Dicker es un novelista ginebrino."]] },
    { id: "ojo", tipo: "ojo", titulo: "Errores frecuentes",
      intro: "Toca cada tarjeta.",
      errores: [["Tintin est français.", "Hergé était belge.", "Francofonía."], ["Rousseau était parisien.", "Rousseau est né à Genève.", "Suiza."], ["Joël Dicker est belge.", "Joël Dicker est suisse (genevois).", "Países."]] }
  ],
  ejemplos: [
    { sit: "Philippe Jaccottet es de…", resp: "Suisse", pasos: ["Poeta suizo."], porque: "Países." },
    { sit: "Maeterlinck es de…", resp: "Belgique", pasos: ["Nobel 1911."], porque: "Países." },
    { sit: "Yourcenar nació en…", resp: "Bruxelles", pasos: ["Lección 49."], porque: "Bélgica." }
  ],
  comprueba: [
    { q: "Maeterlinck recibió el Nobel en…", o: ["1911", "1964"], a: 0, b: "gr", porque: "Bélgica." },
    { q: "La Prose du Transsibérien es de…", o: ["1913", "1968"], a: 0, b: "gr", porque: "Cendrars." },
    { q: "Stupeur et tremblements transcurre en…", o: ["una empresa japonesa", "un pueblo suizo"], a: 0, b: "gr", porque: "Nothomb." }
  ],
  practica: [
    { fase: "guiada", c: ["b6bs-belgique", "b6bs-suisse"], k: "sort", ask: "¿Bélgica o Suiza?", q: "Clasifica.", cats: ["Belgique", "Suisse"], items: [["Simenon", 0], ["Hergé", 0], ["Maeterlinck", 0], ["Nothomb", 0], ["Ramuz", 1], ["Cendrars", 1], ["Jaccottet", 1], ["Dicker", 1]], pista: "Bruselas o Ginebra.", why: "Países." },
    { fase: "guiada", c: ["b6bs-belgique"], k: "choice", ask: "El país de Tintín:", q: "Elige.", o: ["la Belgique", "la Suisse"], a: 0, pista: "Hergé.", why: "Bélgica." },
    { fase: "guiada", c: ["b6bs-belgique"], k: "fill", ask: "Nobel 1911.", q: "Maurice ___ a reçu le prix Nobel en 1911.", acc: ["Maeterlinck"], pista: "Mae…", why: "<b>Maeterlinck</b>." },
    { fase: "indep", c: ["b6bs-suisse"], k: "fill", ask: "Harry …", q: "La Vérité sur l'affaire Harry ___ de Joël Dicker.", acc: ["Quebert"], why: "<b>Quebert</b>." },
    { fase: "indep", c: ["b6bs-belgique", "b6bs-suisse"], k: "match", ask: "Une cada autor con su rasgo.", q: "Autor → rasgo", pairs: [["Henri Michaux", "poeta belga"], ["Charles-Ferdinand Ramuz", "novelista del cantón de Vaud"], ["Amélie Nothomb", "Stupeur et tremblements"], ["Joël Dicker", "La Vérité sur l'affaire Harry Quebert"]], why: "Autores." },
    { fase: "indep", c: ["b6bs-belgique"], k: "spot", ask: "Encuentra el error.", s: "Le créateur de Tintin , Hergé , était un dessinateur [suisse] .", fix: "belge", why: "<b>belge</b>." },
    { fase: "aplica", c: ["b6bs-suisse"], k: "choice", ask: "El autor del poema-viaje de 1913:", q: "Elige.", o: ["Blaise Cendrars", "Henri Michaux"], a: 0, why: "Cendrars." },
    { fase: "aplica", c: ["b6bs-belgique"], k: "choice", ask: "La novelista de Stupeur et tremblements:", q: "Elige.", o: ["Amélie Nothomb", "Annie Ernaux"], a: 0, why: "Nothomb." },
    { fase: "aplica", c: ["b6bs-suisse"], k: "spot", ask: "Encuentra el error.", s: "Joël Dicker est un romancier [belge] .", fix: "genevois", why: "<b>genevois</b>." },
    { fase: "dominio", c: ["b6bs-belgique"], k: "order", ask: "Ordena la frase.", tokens: ["Simenon", "était", "un écrivain belge"], why: "<b>Simenon était un écrivain belge</b>" },
    { fase: "dominio", c: ["b6bs-suisse"], k: "choice", ask: "El gran clásico suizo:", q: "Elige.", o: ["Rousseau, né à Genève", "Voltaire, né à Bruxelles"], a: 0, why: "Ginebra." },
    { fase: "dominio", c: ["b6bs-belgique", "b6bs-suisse"], k: "listen", say: "La littérature francophone ne se limite pas à la France : la Belgique et la Suisse ont de grands écrivains.", acc: ["La littérature francophone ne se limite pas à la France : la Belgique et la Suisse ont de grands écrivains.", "La littérature francophone ne se limite pas à la France: la Belgique et la Suisse ont de grands écrivains.", "La littérature francophone ne se limite pas à la France, la Belgique et la Suisse ont de grands écrivains."], num: false, dict: true, ask: "Escucha la frase y escríbela.", why: "Era <b>La littérature francophone ne se limite pas à la France : la Belgique et la Suisse ont de grands écrivains.</b>" }
  ],
  dominio: DOM, repaso: REP,
  lexico: { nombres: ["Camila", "Sofia", "Maurice Maeterlinck", "Maeterlinck", "Henri Michaux", "Georges Simenon", "Simenon", "Marguerite Yourcenar", "Yourcenar", "Amélie Nothomb", "Nothomb", "Hergé", "Tintin", "Jean-Jacques Rousseau", "Rousseau", "Blaise Cendrars", "Cendrars", "Charles-Ferdinand Ramuz", "Ramuz", "Philippe Jaccottet", "Jaccottet", "Joël Dicker", "Dicker", "Harry Quebert", "Stupeur et tremblements", "La Prose du Transsibérien", "La Vérité sur l'affaire Harry Quebert", "Bruxelles", "Genève", "Vaud", "Belgique", "Suisse", "France", "Annie Ernaux", "Voltaire", "Nobel", "BD"], previo: [] }
};

})();
